

## Plano: Atualizar Código do Tracker.js

### Arquivo a Modificar
- `public/tracker.js`

---

## ALTERAÇÕES

Substituir o conteúdo atual pelo novo código com as seguintes melhorias:

### Mudanças no código:

| Antes | Depois |
|-------|--------|
| `fetch().catch()` síncrono | `async function trackPage()` com `try/catch` |
| Sem `mode: 'cors'` | Adiciona `mode: 'cors'` para requisições cross-origin |
| Comentários básicos | Comentários detalhados explicando cada seção |
| Console: `'Tracking erro:'` | Console: `'Tracking Error:'` |

### Novo código:

```javascript
/**
 * FACEBOOK TRACKING GATEWAY - FRONTEND SCRIPT
 * Instruções: Coloque este script no <head> de todas as páginas do seu site.
 * Ele deve rodar ANTES do script do Pixel do Facebook se possível.
 */
(function() {
    const API_URL = 'https://tracking.lavishcreative.com';
    const COOKIE_NAME = 'external_id';

    // 1. Função para capturar/gerar o ID Único
    function getExternalId() {
        const urlParams = new URLSearchParams(window.location.search);
        let extId = urlParams.get('sck') || urlParams.get('external_id');
        if (extId) {
            // Se veio na URL (SCK da Hotmart ou link de anúncio), salva no cookie por 30 dias
            const d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie = `${COOKIE_NAME}=${extId};expires=${d.toUTCString()};path=/;SameSite=Lax;Secure`;
            return extId;
        }
        // Se não tem na URL, tenta ler do cookie
        const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
        if (match) return match[2];
        // Se não existe, gera um novo (ex: lead_timestamp_random)
        const newId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        document.cookie = `${COOKIE_NAME}=${newId};path=/;SameSite=Lax;Secure`;
        return newId;
    }

    const externalId = getExternalId();

    // 2. Captura Cookies do Facebook (_fbp e _fbc)
    function getFbCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // 3. Envia o evento de PageView para a sua API
    async function trackPage() {
        try {
            await fetch(`${API_URL}/track`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify({
                    event_name: 'PageView',
                    external_id: externalId,
                    url: window.location.href,
                    fbp: getFbCookie('_fbp'),
                    fbc: getFbCookie('_fbc')
                })
            });
        } catch (e) {
            console.error('Tracking Error:', e);
        }
    }

    // Executa o tracking
    trackPage();

    // Disponibiliza o ID para ser usado em botões de checkout
    window.trackingData = { external_id: externalId };
    
    // DICA: Se você tem botões de compra, adicione &sck= + externalId no final do link
})();
```

---

## RESUMO

| Arquivo | Ação | Propósito |
|---------|------|-----------|
| `public/tracker.js` | Atualizar | Código mais robusto com async/await e CORS |

