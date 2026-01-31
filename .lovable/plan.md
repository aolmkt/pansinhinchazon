

## Plano: Adicionar Tracker.js para Rastreamento

### Arquivos a Criar/Modificar
- `public/tracker.js` (criar)
- `index.html` (modificar)

---

## 1. CRIAR ARQUIVO TRACKER.JS

Criar `public/tracker.js` com o código de rastreamento (sem as tags `<script>`):

```javascript
(function() {
    const API_URL = 'https://tracking.lavishcreative.com';
    const COOKIE_NAME = 'external_id';

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

    function getFbCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    fetch(`${API_URL}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event_name: 'PageView',
            external_id: externalId,
            url: window.location.href,
            fbp: getFbCookie('_fbp'),
            fbc: getFbCookie('_fbc')
        })
    }).catch(e => console.error('Tracking erro:', e));

    window.trackingData = { external_id: externalId };
})();
```

---

## 2. INCLUIR SCRIPT NO INDEX.HTML

Adicionar a referência ao script no `<head>` do `index.html`:

```html
<!-- Tracker -->
<script src="/tracker.js"></script>
```

Isso garante que:
- O script carrega em **todas as rotas** (/, /b, etc.)
- O `window.trackingData.external_id` fica disponível globalmente
- O PageView é disparado automaticamente ao carregar qualquer página

---

## 3. RESUMO

| Arquivo | Ação | Propósito |
|---------|------|-----------|
| `public/tracker.js` | Criar | Código de rastreamento |
| `index.html` | Modificar | Incluir `<script src="/tracker.js">` |

---

## 4. RESULTADO

- PageView disparado automaticamente em `/` e `/b`
- Cookie `external_id` persistido por 30 dias
- `window.trackingData.external_id` disponível para uso nos botões de compra
- Cookies do Facebook (`_fbp`, `_fbc`) capturados e enviados

