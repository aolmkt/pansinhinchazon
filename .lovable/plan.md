

## Plano: Remover Paginas de Politica de Privacidade e Termos de Servico

### Arquivos a Excluir

- `src/pages/PoliticaPrivacidade.tsx`
- `src/pages/TermosServico.tsx`

### Arquivo a Modificar

**`src/App.tsx`**
- Remover imports de `PoliticaPrivacidade` e `TermosServico`
- Remover as duas rotas:
  - `/politica-de-privacidade-respondedor-de-comentarios`
  - `/termos-de-servico-respondedor-de-comentarios`

### Resultado

As rotas restantes serao:

| Rota | Pagina |
|------|--------|
| `/` | Safe |
| `/a` | Index |
| `/b` | IndexB |
| `*` | NotFound |

