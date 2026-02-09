

## Plano: Criar Página de Termos de Servico

### Objetivo
Criar uma pagina de Termos de Servico seguindo o mesmo padrao visual e tecnico da pagina de Politica de Privacidade existente.

---

### Arquivos a Criar/Modificar

| Arquivo | Acao |
|---------|------|
| `src/pages/TermosServico.tsx` | CRIAR - Nova pagina |
| `src/App.tsx` | Adicionar rota `/termos-de-servico-respondedor-de-comentarios` |

---

### Detalhes Tecnicos

**TermosServico.tsx:**
- Mesmo layout da `PoliticaPrivacidade.tsx` (max-w-2xl, fundo branco, texto preto, mobile-first)
- Helmet com `noindex, nofollow`
- Titulo: "Termos de Servico - Respondedor de Comentarios"
- Conteudo completo fornecido pelo usuario
- Email de contato: `contato@pansinhinchazon.com` (mesmo da politica de privacidade)
- Secoes: Sobre o aplicativo, Aceitacao dos termos, Uso permitido, Limitacoes e responsabilidades, Propriedade intelectual, Isencao de responsabilidade, Alteracoes nos termos, Lei aplicavel e contato

**App.tsx:**
- Adicionar import de `TermosServico`
- Adicionar rota: `<Route path="/termos-de-servico-respondedor-de-comentarios" element={<TermosServico />} />`

