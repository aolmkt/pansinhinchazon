

## Plano: Atualizar Link do Checkout + Encaminhar Parâmetros da URL

### Arquivos a Modificar
- `src/pages/Index.tsx`
- `src/pages/IndexB.tsx`

---

### O QUE SERÁ FEITO

#### 1. Trocar Link do Checkout

**Link antigo:**
- `Index.tsx`: `#checkout`
- `IndexB.tsx`: `https://pay.hotmart.com/YOUR_PRODUCT_ID`

**Link novo (ambas páginas):**
```
https://pay.hotmart.com/O104173365F?checkoutMode=10
```

---

#### 2. Encaminhar Parâmetros da URL para o Checkout

Isso é essencial para tracking de campanhas (UTMs, fbclid, gclid, etc.).

**Lógica a implementar:**
1. Capturar `window.location.search` (parâmetros atuais da URL)
2. Anexar ao link do Hotmart

**Exemplo prático:**
- Usuário chega em: `pansinhinchazon.lovable.app/?utm_source=facebook&utm_campaign=pan`
- Clica no botão
- É redirecionado para: `https://pay.hotmart.com/O104173365F?checkoutMode=10&utm_source=facebook&utm_campaign=pan`

---

### IMPLEMENTAÇÃO TÉCNICA

#### Index.tsx (1 botão - linha 429)

Criar função helper e atualizar o onClick:

```tsx
const getCheckoutUrl = () => {
  const baseUrl = 'https://pay.hotmart.com/O104173365F?checkoutMode=10';
  const currentParams = window.location.search;
  
  if (currentParams) {
    // Remove o "?" inicial e adiciona com "&"
    return `${baseUrl}&${currentParams.substring(1)}`;
  }
  return baseUrl;
};
```

---

#### IndexB.tsx (3 botões - linhas 33, 162, 194)

Mesma lógica, aplicada aos 3 CTAs:
- **Botão do topo** (linha 33): scroll para `#oferta`, não muda
- **Botão da oferta** (linha 162): abre Hotmart com parâmetros
- **Botão final** (linha 194): abre Hotmart com parâmetros

---

### RESUMO DAS ALTERAÇÕES

| Arquivo | Local | Alteração |
|---------|-------|-----------|
| `Index.tsx` | Linha 429 | Trocar `#checkout` pelo link Hotmart + parâmetros |
| `IndexB.tsx` | Linha 162 | Trocar placeholder pelo link Hotmart + parâmetros |
| `IndexB.tsx` | Linha 194 | Trocar placeholder pelo link Hotmart + parâmetros |

---

### RESULTADO

Os parâmetros de UTM, fbclid, gclid e qualquer outro tracking serão passados automaticamente para o checkout da Hotmart, permitindo rastrear a origem das vendas corretamente.

