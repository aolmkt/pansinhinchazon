

## Plano: Adicionar Script UTMify

### Objetivo
Adicionar o script UTMify no `index.html` para captura e persistência de parâmetros UTM em todas as páginas.

---

### Análise de Compatibilidade

**Resultado: ✅ Sem conflitos**

| Aspecto | tracker.js | UTMify | Status |
|---------|------------|--------|--------|
| Parâmetros gerenciados | `sck`, `external_id`, `fbclid` | `utm_*` | ✅ Diferentes |
| Variáveis globais | `trackEvent`, `trackingData`, `fbq` | `utmify` | ✅ Sem colisão |
| Auto-linker | Adiciona `sck=` aos links Hotmart | Adiciona `utm_*` aos links | ✅ Complementares |
| Cookies | `external_id`, `_fbp`, `_fbc` | UTMs próprios | ✅ Independentes |

---

### Alteração

**Arquivo:** `index.html`

**Adicionar após a linha 32 (script do tracker):**

```html
<!-- UTMify -->
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
```

---

### Resultado Final do `<head>`

```html
<!-- Tracker -->
<script src="/tracker.js"></script>

<!-- UTMify -->
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
```

---

### Comportamento Esperado

1. **Visitante chega via anúncio**: `?utm_source=facebook&utm_medium=cpc&utm_campaign=pan`
2. **UTMify captura e persiste** os UTMs em cookies
3. **tracker.js captura** `sck` ou gera `external_id`
4. **Ao clicar no checkout**, o link terá AMBOS:
   - `sck=lead_xxx` (do tracker.js)
   - `utm_source=facebook&...` (do UTMify)

---

### Notas Técnicas

- O atributo `data-utmify-prevent-subids` evita criação de sub-IDs automáticos
- `async defer` garante carregamento não-bloqueante
- Funciona automaticamente em todas as rotas (`/`, `/a`, `/b`)

