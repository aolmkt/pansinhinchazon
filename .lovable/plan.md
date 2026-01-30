

## Plano: SEO + Ícones Congruentes (Ambas Páginas)

### Arquivos a Modificar/Criar
- `index.html` (modificar)
- `public/og-image.png` (criar - usando pao.webp existente)
- `public/apple-touch-icon.png` (criar)
- `src/pages/Index.tsx` (adicionar SEO dinâmico)
- `src/pages/IndexB.tsx` (adicionar SEO dinâmico)

---

## 1. SEO BASE (index.html)

Atualizar com metadados em espanhol otimizados para o produto:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Básico -->
    <title>Pan Sin Hinchazón - Recetas de Pan que No Inflaman</title>
    <meta name="description" content="Aprende a preparar pan que no hincha. El problema no es el pan, es cómo fue preparado. Acceso inmediato por $9." />
    <meta name="author" content="Pan Sin Hinchazón" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Pan Sin Hinchazón" />
    <meta property="og:description" content="El problema no es el pan. Es cómo fue preparado." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pansinhinchazon.lovable.app" />
    <meta property="og:image" content="https://pansinhinchazon.lovable.app/og-image.png" />
    <meta property="og:locale" content="es_419" />
    
    <!-- Twitter/X Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pan Sin Hinchazón" />
    <meta name="twitter:description" content="Recetas de pan que no inflaman. $9." />
    <meta name="twitter:image" content="https://pansinhinchazon.lovable.app/og-image.png" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  </head>
```

---

## 2. SEO DINÂMICO POR PÁGINA

Instalar `react-helmet-async` e adicionar a cada página:

### Index.tsx (Versão A)
```tsx
import { Helmet } from 'react-helmet-async';

// Dentro do componente:
<Helmet>
  <title>Pan Sin Hinchazón - Recetas de Pan que No Inflaman</title>
  <meta name="description" content="Si el pan siempre te hincha, no es normal. El problema no es el pan, es cómo fue preparado." />
</Helmet>
```

### IndexB.tsx (Versão B)
```tsx
import { Helmet } from 'react-helmet-async';

// Dentro do componente:
<Helmet>
  <title>Pan Sin Hinchazón - Come Pan Sin Sentirte Mal</title>
  <meta name="description" content="No tienes que dejar el pan para sentirte bien. Aprende la forma correcta de prepararlo." />
</Helmet>
```

---

## 3. ÍCONES CONGRUENTES

### Favicon (🍞)
Atualizar `public/favicon.ico` com ícone de pão:
- Cores: tons âmbar/dourado (#D4A574)
- Tamanho: 32x32px

### Apple Touch Icon
Criar `public/apple-touch-icon.png`:
- Tamanho: 180x180px
- Ícone de pão com fundo claro

### OG Image (Preview Social)
Criar `public/og-image.png`:
- Tamanho: 1200x630px
- Usar imagem `pao.webp` existente
- Texto: "Pan Sin Hinchazón" + "El problema no es el pan"

---

## 4. RESUMO DAS ALTERAÇÕES

| Arquivo | Ação | Propósito |
|---------|------|-----------|
| `index.html` | Modificar | SEO base em espanhol |
| `package.json` | Adicionar | `react-helmet-async` |
| `src/App.tsx` | Modificar | Adicionar `HelmetProvider` |
| `src/pages/Index.tsx` | Modificar | SEO dinâmico versão A |
| `src/pages/IndexB.tsx` | Modificar | SEO dinâmico versão B |
| `public/favicon.ico` | Substituir | Ícone de pão |
| `public/apple-touch-icon.png` | Criar | Ícone iOS |
| `public/og-image.png` | Criar | Preview WhatsApp/Facebook |

---

## 5. RESULTADO ESPERADO

| Antes | Depois |
|-------|--------|
| "Lovable App" no Google | "Pan Sin Hinchazón - Recetas..." |
| Ícone genérico | Ícone de pão 🍞 |
| Preview Lovable no WhatsApp | Imagem do produto + descrição |
| lang="en" | lang="es" |
| Mesmo título ambas páginas | Título dinâmico por rota |

