

## Plano: Converter Botões para Links `<a>` Normais

### Arquivos a Modificar
- `src/pages/Index.tsx`
- `src/pages/IndexB.tsx`

---

## ALTERAÇÕES EM INDEX.TSX

### 1. Remover a função `getCheckoutUrl` (linhas 9-17)
Não será mais necessária pois o Auto-Linker do tracker.js adiciona o `sck` automaticamente.

### 2. Remover import do Button (se não usado em outro lugar)
```javascript
// Remover: import { Button } from "@/components/ui/button";
```

### 3. Converter o CTA (linhas 442-447)

**Antes:**
```jsx
<Button 
  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg py-4 md:py-6 min-h-[56px] md:min-h-[64px] rounded-lg font-semibold whitespace-normal leading-tight"
  onClick={() => window.open(getCheckoutUrl(), '_blank')}
>
  Aprende a comer pan sin hincharte
</Button>
```

**Depois:**
```jsx
<a 
  href="https://pay.hotmart.com/O104173365F?checkoutMode=10"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg py-4 md:py-6 min-h-[56px] md:min-h-[64px] rounded-lg font-semibold whitespace-normal leading-tight inline-flex items-center justify-center"
>
  Aprende a comer pan sin hincharte
</a>
```

---

## ALTERAÇÕES EM INDEXB.TSX

### 1. Remover a função `getCheckoutUrl` (linhas 10-18)

### 2. Remover import do Button
```javascript
// Remover: import { Button } from "@/components/ui/button";
```

### 3. Converter os 3 botões:

**Botão 1 - Scroll para oferta (linhas 46-51):**
```jsx
<a 
  href="#oferta"
  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-lg leading-tight inline-flex items-center justify-center"
>
  Sí, quiero comer pan sin hincharme
</a>
```

**Botão 2 - Checkout principal (linhas 175-180):**
```jsx
<a 
  href="https://pay.hotmart.com/O104173365F?checkoutMode=10"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-lg leading-tight mb-4 inline-flex items-center justify-center"
>
  Sí, quiero mi acceso ahora
</a>
```

**Botão 3 - CTA final (linhas 207-212):**
```jsx
<a 
  href="https://pay.hotmart.com/O104173365F?checkoutMode=10"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-lg leading-tight inline-flex items-center justify-center"
>
  Sí, quiero mi acceso ahora
</a>
```

---

## RESUMO

| Arquivo | Ação | Detalhes |
|---------|------|----------|
| `src/pages/Index.tsx` | Modificar | Remover `getCheckoutUrl`, converter 1 botão para `<a>` |
| `src/pages/IndexB.tsx` | Modificar | Remover `getCheckoutUrl`, converter 3 botões para `<a>` |

---

## RESULTADO

O Auto-Linker do `tracker.js` vai automaticamente:
1. Encontrar todos os links `<a href="...pay.hotmart.com...">` 
2. Adicionar `&sck=lead_xxx_xxx` no final
3. Garantir rastreamento de conversão sem código adicional

