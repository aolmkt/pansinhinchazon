/**
 * FACEBOOK TRACKING GATEWAY - ALL-IN-ONE SCRIPT
 * 1. Inicia o Pixel do Facebook (Navegador)
 * 2. Gera ID Único e Cookies
 * 3. Envia para API (Servidor) com Deduplicação
 */

(function() {
    // --- CONFIGURAÇÃO ---
    const API_URL = 'https://tracking.lavishcreative.com';
    const FACEBOOK_PIXEL_ID = '1464322035694515'; // <--- COLOQUE SEU ID AQUI
    const COOKIE_NAME = 'external_id';

    // 1. INICIALIZAÇÃO DO FACEBOOK PIXEL (Código Padrão da Meta)
    if (!window.fbq) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', FACEBOOK_PIXEL_ID);
    }

    // 2. Identificação do Usuário (Cookie Persistente)
    function getExternalId() {
        const urlParams = new URLSearchParams(window.location.search);
        let extId = urlParams.get('sck') || urlParams.get('external_id');

        if (extId) {
            const d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie = `${COOKIE_NAME}=${extId};expires=${d.toUTCString()};path=/;SameSite=Lax;Secure`;
            return extId;
        }
        const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
        if (match) return match[2];

        const newId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        document.cookie = `${COOKIE_NAME}=${newId};path=/;SameSite=Lax;Secure`;
        return newId;
    }

    const externalId = getExternalId();
    window.trackingData = { external_id: externalId };

    function getFbCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // 3. Função de Envio Híbrido (Browser + Server)
    function sendEvent(eventName, ip = null) {
        // Gera EventID para Deduplicação
        const eventId = `${eventName.toLowerCase()}_${externalId}_${Date.now()}`;

        // A) Dispara Pixel do Navegador
        if (typeof fbq === 'function') {
            fbq('track', eventName, {}, { eventID: eventId });
        }

        // B) Envia para Servidor (API)
        const payload = {
            event_name: eventName,
            event_id: eventId,
            external_id: externalId,
            url: window.location.href,
            fbp: getFbCookie('_fbp'),
            fbc: getFbCookie('_fbc')
        };
        if (ip) payload.client_ip = ip;

        fetch(`${API_URL}/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(payload)
        }).catch(e => console.error('Tracking API Error:', e));
    }

    // 4. Execução (Busca IP -> Dispara Eventos)
    fetch('https://api64.ipify.org?format=json')
        .then(res => res.json())
        .then(data => sendEvent('PageView', data.ip))
        .catch(() => sendEvent('PageView', null));

})();
