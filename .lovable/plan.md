
## Plano: Criar Página Safe para Tráfego Orgânico

### Conceito

Uma landing page de venda direta tradicional para tráfego orgânico (SEO, redes sociais orgânicas), seguindo o padrão do mercado LATAM espanhol:

- Estrutura clássica de vendas
- Tom mais amigável e menos confrontacional
- CTA claro desde o início
- Benefícios destacados
- Prova social
- Oferta direta

---

### Estrutura da Página `/safe`

```text
+------------------------------------------+
|  HERO                                     |
|  Headline: "Recetas de Pan Sin Gluten     |
|  que No Te Hinchan"                       |
|  Subheadline: Benefício direto            |
|  CTA primário                             |
+------------------------------------------+
|  O QUE INCLUYE                            |
|  Lista de benefícios com ícones           |
|  (check marks verdes)                     |
+------------------------------------------+
|  PARA QUIÉN ES                            |
|  Lista de perfis ideais                   |
+------------------------------------------+
|  IMAGEN PRODUCTO                          |
|  Mockup do ebook                          |
+------------------------------------------+
|  TESTIMONIOS                              |
|  Cards com depoimentos                    |
+------------------------------------------+
|  OFERTA                                   |
|  Preço de/por                             |
|  CTA grande                               |
|  Garantía                                 |
+------------------------------------------+
|  FAQ                                      |
|  Perguntas frequentes simples             |
+------------------------------------------+
|  CTA FINAL                                |
+------------------------------------------+
|  FOOTER                                   |
+------------------------------------------+
```

---

### Diferenças das Outras Versões

| Aspecto | Index (A) | IndexB | Safe (Nova) |
|---------|-----------|--------|-------------|
| Tom | Confrontacional | Trust LATAM | Tradicional/Vendedor |
| Público | Tráfego pago frio | Tráfego pago LATAM | Tráfego orgânico |
| Estrutura | Editorial longa | Blocos curtos | Landing clássica |
| Headline | "Si el pan siempre te hincha, no es normal" | Igual | "Recetas de Pan Sin Gluten que No Te Hinchan" |
| CTAs | 1 ao final | 2 (topo + final) | 3 (hero + meio + final) |
| FAQ | Dudas inline | Não tem | Accordion tradicional |

---

### Conteúdo dos Blocos

**HERO**
- Headline: "Recetas de Pan Sin Gluten que No Te Hinchan"
- Subheadline: "Aprende a preparar pan casero que tu cuerpo digiere sin problemas"
- CTA: "Quiero las recetas - $9"
- Imagen: mao-no-pao.webp

**O QUE INCLUYE**
- Recetas probadas sin gluten y sin azúcar
- Ingredientes de supermercado común
- Paso a paso fácil de seguir
- Opciones para desayuno, snack y comidas
- Acceso inmediato (digital)

**PARA QUIÉN ES**
- Personas que se hinchan con el pan normal
- Quienes buscan alternativas sin gluten
- Quienes quieren comer pan sin culpa
- Familias que buscan opciones más saludables

**TESTIMONIOS**
- 3 cards estilo tradicional (não WhatsApp)
- Citações curtas com nome

**OFERTA**
- Precio tachado: $47
- Precio actual: $9
- Pago único
- Acceso inmediato
- Garantía 7 días

**FAQ**
- "Es difícil de preparar?" - No, recetas simples
- "Necesito ingredientes especiales?" - No, supermercado común
- "Cuánto tiempo toma?" - Depende, pero son prácticas
- "Tiene garantía?" - Sí, 7 días

---

### Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/pages/Safe.tsx` | CRIAR - Nova página |
| `src/App.tsx` | Adicionar rota `/safe` |

---

### Detalhes Técnicos

**Safe.tsx incluirá:**
- Helmet com SEO otimizado para orgânico
- Hook useTracking (ViewContent, AddToWishlist, InitiateCheckout)
- Estrutura mobile-first
- Mesmo estilo visual (branco, simples, sem firulas)
- Links de checkout Hotmart iguais

**Rota em App.tsx:**
```tsx
import Safe from "./pages/Safe";
// ...
<Route path="/safe" element={<Safe />} />
```

---

### Estilo Visual

- Fundo branco
- Textos em preto/cinza
- CTAs em verde (bg-green-600)
- Cards com bordas suaves
- Ícones de check (lucide-react)
- Accordion nativo para FAQ
- Sem animações ou efeitos
- Fonte padrão (Inter/system)
