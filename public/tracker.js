/**
 * FACEBOOK TRACKING GATEWAY - FINAL OPTIMIZED
 * Envia external_id no Browser (Init) e no Server para garantir o Match 10/10.
 */

(function() {
    // --- CONFIGURAÇÃO ---
    const API_URL = 'https://tracking.lavishcreative.com';
    const FACEBOOK_PIXEL_ID = '1464322035694515'; // <--- SEU PIXEL
    const COOKIE_NAME = 'external_id';

    // 1. GERAÇÃO/RECUPERAÇÃO DO ID (Obrigatório acontecer antes do Pixel iniciar)
    function getExternalId() {
        const urlParams = new URLSearchParams(window.location.search);
        let extId = urlParams.get('sck') || urlParams.get('external_id');

        // Se tem na URL, salva/renova cookie
        if (extId) {
            const d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie = `${COOKIE_NAME}=${extId};expires=${d.toUTCString()};path=/;SameSite=Lax;Secure`;
            return extId;
        }

        // Tenta pegar do cookie
        const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
        if (match) return match[2];

        // Gera novo se não existir
        const newId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        document.cookie = `${COOKIE_NAME}=${newId};path=/;SameSite=Lax;Secure`;
        return newId;
    }

    const externalId = getExternalId();
    window.trackingData = { external_id: externalId };

    // 2. INICIALIZAÇÃO DO FACEBOOK PIXEL (Com External ID)
    if (!window.fbq) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        // AQUI ESTÁ A MÁGICA: Já inicia dizendo quem é o usuário
        fbq('init', FACEBOOK_PIXEL_ID, { 
            external_id: externalId 
        });
    }

    function getFbCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // 3. ENVIO HÍBRIDO (Browser + Server)
    function sendEvent(eventName, ip = null) {
        const eventId = `${eventName.toLowerCase()}_${externalId}_${Date.now()}`;

        // A) Browser (Pixel)
        if (typeof fbq === 'function') {
            // Não precisa enviar external_id aqui de novo, já foi no init
            fbq('track', eventName, {}, { eventID: eventId });
        }

        // B) Server (API)
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

    // 4. EXECUÇÃO
    fetch('https://api64.ipify.org?format=json')
        .then(res => res.json())
        .then(data => sendEvent('PageView', data.ip))
        .catch(() => sendEvent('PageView', null));

})();
