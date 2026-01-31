/**
 * FACEBOOK TRACKING GATEWAY - FRONTEND SCRIPT (Versão com ipify)
 * Instruções: Coloque este script no <head> de todas as páginas do seu site.
 */

(function() {
    const API_URL = 'https://tracking.lavishcreative.com';
    const COOKIE_NAME = 'external_id';

    // 1. Função para capturar/gerar o ID Único
    function getExternalId() {
        const urlParams = new URLSearchParams(window.location.search);
        let extId = urlParams.get('sck') || urlParams.get('external_id');

        if (extId) {
            // Se veio na URL, salva/renova cookie (30 dias)
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
    // Disponibiliza o ID globalmente para botões de compra
    window.trackingData = { external_id: externalId };

    // 2. Captura Cookies do Facebook (_fbp e _fbc)
    function getFbCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // 3. Função principal de envio
    function sendEvent(ip = null) {
        const payload = {
            event_name: 'PageView',
            external_id: externalId,
            url: window.location.href,
            fbp: getFbCookie('_fbp'),
            fbc: getFbCookie('_fbc')
        };

        // Se tiver IP capturado do ipify, adiciona ao payload
        if (ip) {
            payload.client_ip = ip;
        }

        fetch(`${API_URL}/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(payload)
        }).catch(e => console.error('Tracking API Error:', e));
    }

    // 4. Executa o tracking (Prioridade: ipify -> Fallback: sem IP)
    fetch('https://api64.ipify.org?format=json')
        .then(res => res.json())
        .then(data => {
            // Sucesso: Envia com o IP real
            sendEvent(data.ip);
        })
        .catch(err => {
            console.warn('Falha ao obter IP (ipify), enviando sem IP explícito.', err);
            // Erro no ipify: Envia mesmo assim (o servidor tentará adivinhar)
            sendEvent(null);
        });

})();
