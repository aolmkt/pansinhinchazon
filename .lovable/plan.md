

## Plano: Reorganizar Rotas

### Objetivo
Colocar a página Safe como principal (`/`) e mover a Index atual para `/a`.

---

### Alteração Única

**Arquivo:** `src/App.tsx`

**De:**
```tsx
<Route path="/" element={<Index />} />
<Route path="/b" element={<IndexB />} />
<Route path="/safe" element={<Safe />} />
```

**Para:**
```tsx
<Route path="/" element={<Safe />} />
<Route path="/a" element={<Index />} />
<Route path="/b" element={<IndexB />} />
```

---

### Resultado Final

| Rota | Página | Público Alvo |
|------|--------|--------------|
| `/` | Safe | Tráfego orgânico (SEO, redes) |
| `/a` | Index | Tráfego pago (versão A) |
| `/b` | IndexB | Tráfego pago (versão B) |

---

### Impacto
- Nenhuma alteração nas páginas em si
- Apenas reorganização de rotas
- O tracking continua funcionando normalmente em todas

