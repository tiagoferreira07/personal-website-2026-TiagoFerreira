# Tiago Ferreira · site pessoal

Site de apresentação para trabalho freelance, com o CV numa página própria. Astro + TypeScript, bilingue PT/EN, mobile-first. O resultado é HTML e CSS estáticos, com poucas linhas de JavaScript (animações de entrada, copiar o email, imprimir o CV).

## Correr

Precisa de Node 22.23.4 ou superior.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:4321
npm run build    # site estático em dist/
npm run preview  # ver o build
npx astro check  # verificação de tipos
```

## Páginas

| Endereço | Conteúdo |
|---|---|
| `/` | Início (PT) |
| `/cv/` | CV (PT) |
| `/en/` | Início (EN) |
| `/en/cv/` | CV (EN) |

## Estrutura

- `src/content.ts`: todos os textos (PT e EN), projetos, serviços, links e o mapa `shots` das capturas.
- `src/styles.css`: design tokens, estilos, animações e folha de impressão do CV.
- `src/layouts/Base.astro`: `<head>`, cabeçalho, rodapé de contacto e o script das animações.
- `src/components/`: uma secção por componente; `HomePage.astro` e `CvPage.astro` montam as páginas.
- `src/pages/`: um ficheiro por endereço; só escolhem a língua.
- `public/projects/`: capturas de ecrã dos projetos (ver o README dessa pasta).

## Publicar

Antes de publicar, definir `site` em `astro.config.mjs` com o endereço final. Se o site ficar numa subpasta (por exemplo GitHub Pages de um repositório), definir também `base`.

## Por fazer

- Confirmar os serviços e os números da página inicial em `src/content.ts`.
- Testar em Safari, Firefox e telemóveis reais.
- Escolher alojamento e definir `site`/`base`.
