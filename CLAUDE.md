# Manual de trabalho: site pessoal do Tiago Ferreira

Lê este ficheiro inteiro antes de qualquer alteração. Ele substitui a memória da conversa em que o site foi criado. Onde este manual e um pedido do Tiago entrarem em conflito, vale o pedido do Tiago; diz-lhe que há conflito.

## 0. Contexto do projeto

**Quem é o cliente.** Tiago Ferreira, front-end developer na Fullscreen, Lda. (Vila Nova de Gaia) desde 2021. Escreve em português de Portugal: responde sempre em PT-PT ("ecrã", "telemóvel", "ficheiro", tratamento por "tu").

**Para que serve o site.** Dois objetivos ao mesmo tempo: angariar projetos freelance e servir de CV para candidaturas a grandes empresas de tecnologia. A página inicial vende serviços; o CV vive numa página própria.

**Estado atual.**

- Astro 7 + TypeScript, site estático, sem framework de UI. Node 22.23.4 ou superior.
- Quatro páginas: `/`, `/cv/` (PT, língua por omissão) e `/en/`, `/en/cv/`.
- Todos os textos estão em `src/content.ts`, num objeto tipado com as duas línguas. Nenhum texto visível deve ficar escrito diretamente num componente.
- Estilos num só ficheiro, `src/styles.css`, com tokens no `:root`. CSS simples, mobile-first, pontos de quebra em 30rem, 48rem e 64rem.
- Capturas dos projetos em `public/projects/` (1500×675, .webp), ligadas pelo mapa `shots` em `src/content.ts`.
- JavaScript só para três coisas: animações de entrada (`.reveal`), copiar o email e imprimir o CV.

**Direção visual decidida pelo Tiago.** Inspirada nos princípios do site da Apple, sem o copiar: fundo preto, tipografia grande e apertada (Inter), cartões com cantos muito arredondados, barra superior translúcida, um único acento azul-gelo `#8CCBFF`. Botão principal em pílula clara com seta; ligação secundária em texto azul com seta. Não mudes esta direção sem ele pedir.

**Factos que podes usar.** Só os que estão em `src/content.ts`. Em resumo: Web Front-End Developer na Fullscreen desde 09/2021, estágio 04–08/2021; licenciatura em Engenharia Informática (ISLA Gaia, 2021–2026) e CTESP (2019–2021); fez o front-end completo de flex2000.pt, mediflex.pt e conformetal.pt; em stcp.pt fez apenas tickets de suporte e pequenas correções; disse ter entregado entre 16 e 30 projetos (no site: "16+").

**Regras fixas, sem exceção.**

1. Nunca publicar morada, telemóvel ou data de nascimento. O CV em PDF original tem os três; por isso não há botão de download desse PDF.
2. Os projetos são da Fullscreen, Lda. para os clientes dela. Têm de aparecer sempre com esse crédito e nunca como trabalho freelance do Tiago.
3. STCP aparece só como "suporte e correções".
4. Não inventar factos: nem clientes, nem testemunhos, nem números, nem preços, nem prazos de resposta, nem tecnologias que ele não tenha indicado.
5. Não redesenhar logótipos nem marcas de terceiros. Usar capturas reais dos sites ou a moldura neutra que já existe.
6. Fazer commit ou push só quando o Tiago pedir.

## 1. Planear antes de começar

**O que ler primeiro, por esta ordem.**

1. Este manual.
2. `src/content.ts` (textos, tipos e dados).
3. `src/styles.css` até ao fim da secção de tokens e base.
4. O componente ou página que o pedido toca, e o `Base.astro` se o pedido mexer no cabeçalho, rodapé ou `<head>`.
5. `README.md`, secção "Por fazer".

**Corre o estado inicial.** Antes de alterar, executa `npm install` (se faltar `node_modules`), `npm run build` e `npx astro check`. Se já falharem antes de tocares em nada, diz isso ao Tiago antes de continuar.

**Classifica o pedido.**

- *Claro e barato de refazer* (mudar um texto, uma cor, um espaçamento, acrescentar um item a uma lista existente): começa já. Diz numa frase o que vais fazer e faz.
- *Caro de refazer ou ambíguo* (nova página, nova secção com conteúdo que não existe, mudança de direção visual, troca de tecnologia, CMS, alojamento): pergunta primeiro. Uma mensagem, no máximo quatro perguntas, cada uma com opções concretas e a tua recomendada em primeiro lugar.

**O que perguntar quando for preciso perguntar.** Só o que muda o que vais construir:

- Conteúdo que só ele tem (serviços, preços, clientes, textos sobre ele).
- Escolhas de gosto com mais de um caminho razoável (claro ou escuro, muita ou pouca animação).
- Destino (onde vai ser alojado, que domínio).

Não perguntes o que consegues ler no código ou decidir por convenção.

**Divide o trabalho em passos.** Para qualquer coisa com mais de dois passos, cria uma lista de tarefas e mantém-na atualizada. A ordem habitual é:

1. Conteúdo: tipos e textos em `src/content.ts`, PT e EN.
2. Marcação: componente `.astro` com HTML semântico.
3. Estilo: mobile primeiro, depois os pontos de quebra.
4. Comportamento: só se for mesmo preciso JavaScript.
5. Verificação: build, tipos, capturas de ecrã, lista da secção 3.
6. Entrega: resumo curto e o que ficou por fazer.

## 2. Como fazer cada passo, e o que confirmar no fim

### Passo 1: conteúdo

- Acrescenta primeiro o campo à interface `Content`; o TypeScript obriga-te depois a preencher as duas línguas.
- Escreve o PT-PT e o EN ao mesmo tempo. O inglês é britânico ("catalogue", "favourites").
- Frases curtas, sem superlativos nem promessas que o Tiago não fez. Um serviço descreve o que ele faz, com base no que já fez.
- Texto que deduziste e que ele não ditou: marca-o na entrega como "a confirmar".

**Confirmar:** `npx astro check` sem erros; nenhum texto visível fora de `content.ts`; nada que viole as regras fixas.

### Passo 2: marcação

- Um componente por secção em `src/components/`. As páginas em `src/pages/` só escolhem a língua.
- HTML semântico: um `<h1>` por página, títulos por ordem, listas para listas, `<time datetime>` para datas, `<dl>` para pares rótulo/valor.
- Ligações internas com `href(lang, caminho)` e ficheiros de `public/` com `asset(caminho)`, para o site funcionar numa subpasta.
- Ligações externas com `target="_blank" rel="noopener noreferrer"` e um texto oculto "(abre num novo separador)".
- Nomes próprios e o email com `translate="no"`.
- Imagens com `width`, `height`, `alt` descritivo e `loading="lazy"` abaixo da dobra.

**Confirmar:** a secção lê-se bem só com HTML, sem CSS; a navegação por teclado chega a tudo o que é clicável.

### Passo 3: estilo

- Escreve primeiro para 320–390 px. Só depois acrescenta regras em `@media (min-width: …)`.
- Usa os tokens existentes (`--surface`, `--muted`, `--accent`, `--radius-lg`, `--section`, `--ease`). Cria um token novo só se o valor se repetir.
- Alvos de toque com pelo menos 44 px (2.75rem). Contraste de texto de pelo menos 4,5:1.
- Tamanhos de título com `clamp()`; nada de larguras fixas em px para blocos de texto.
- Animações: entradas com a classe `.reveal` e atraso por `--i`; transições com `var(--ease)`. Tudo o que animares tem de ficar desligado dentro de `@media (prefers-reduced-motion: reduce)`.
- Um só acento. Não acrescentes gradientes, sombras ou cores novas sem o Tiago pedir.

**Confirmar:** capturas a 320, 390, 768 e 1440 px, em PT e em EN (o inglês e o português têm comprimentos diferentes e partem linhas em sítios diferentes). Sem scroll horizontal em nenhuma largura.

### Passo 4: comportamento

- Pergunta-te primeiro se o CSS resolve. Se resolver, não escrevas JavaScript.
- Scripts pequenos, dentro do componente que os usa, em `<script>` do Astro. Sem bibliotecas novas sem perguntar.
- Tudo o que usa `localStorage` ou `navigator.clipboard` vai dentro de `try/catch`.
- A página tem de funcionar com JavaScript desligado: o conteúdo `.reveal` fica visível por via do `<noscript>` que está no `Base.astro`.

**Confirmar:** consola do browser sem erros nas quatro páginas.

### Passo 5: verificação

Executa, por esta ordem, e lê o resultado de cada um:

```bash
npx astro check
npm run build
npm run preview
```

Depois tira capturas de ecrã das páginas alteradas e olha para elas. Para capturas fiáveis em Chrome headless, usa `--force-prefers-reduced-motion`: sem isso, os elementos `.reveal` podem aparecer a meio da transição e parecer em falta.

**Confirmar:** viste com os teus olhos cada página alterada, em telemóvel e em desktop. "O build passou" não chega.

### Passo 6: entrega

Escreve ao Tiago, por esta ordem:

1. O que mudou, em uma ou duas frases.
2. O que verificaste e o que não verificaste (por exemplo: "vi a 390 e 1440 px; não testei em Safari").
3. O que precisa de decisão ou confirmação dele.

Não descrevas os passos que deste. Não digas que algo funciona se não o viste a funcionar.

## 3. Revisão final

Percorre a lista toda antes de dizer que acabaste.

**Conteúdo**

- [ ] PT e EN dizem o mesmo; nenhum texto ficou numa só língua.
- [ ] Nenhum facto novo que o Tiago não tenha dado.
- [ ] Projetos com o crédito "Desenvolvido na Fullscreen, Lda."; STCP só como suporte.
- [ ] Sem morada, telemóvel nem data de nascimento em lado nenhum, incluindo `<head>`, JSON-LD e imagens.
- [ ] Ortografia PT-PT (não PT-BR).

**Layout**

- [ ] Sem scroll horizontal a 320 px.
- [ ] Cabeçalho cabe numa linha a 320 px nas duas línguas.
- [ ] Nenhum título com uma palavra sozinha na última linha em desktop.
- [ ] Grelhas sem cartão órfão a deixar meio ecrã vazio.
- [ ] Imagens sem distorção e sem saltos de layout ao carregar.

**Acessibilidade**

- [ ] Um `<h1>` por página; títulos sem saltar níveis.
- [ ] Foco visível em tudo o que é interativo; ordem de tabulação lógica.
- [ ] `alt` em todas as imagens com conteúdo; `alt=""` nas decorativas.
- [ ] Atributo `lang` certo em cada página; `hreflang` nas ligações de língua.
- [ ] Movimento desligado com `prefers-reduced-motion`.

**Técnica**

- [ ] `npx astro check`: 0 erros. `npm run build`: sem avisos novos.
- [ ] Nenhuma dependência nova sem ter sido pedida.
- [ ] Ligações internas feitas com `href()`/`asset()`; nenhuma começa por `/` escrita à mão.
- [ ] As quatro páginas abrem e as ligações entre elas funcionam.
- [ ] Vista de impressão do CV continua legível (fundo branco, sem cabeçalho nem rodapé).
- [ ] README atualizado se a estrutura ou os comandos mudaram.

**Erros mais comuns neste tipo de trabalho**

1. Inventar conteúdo para a página parecer completa (testemunhos, números, logótipos de clientes).
2. Desenhar em desktop e "adaptar" ao telemóvel no fim.
3. Verificar só numa língua: o texto mais comprido parte o layout na outra.
4. Dizer que está pronto por o build passar, sem olhar para a página.
5. Animações que escondem conteúdo quando o JavaScript falha ou a captura é tirada cedo de mais.
6. Acrescentar bibliotecas para o que três linhas de CSS resolvem.
7. Texto de marketing genérico ("soluções inovadoras") em vez do que o Tiago faz de facto.
8. Apresentar trabalho de equipa ou do empregador como trabalho individual.
9. Mudar mais do que foi pedido: refatorar ficheiros ao lado, trocar nomes, "melhorar" o design.
10. Esconder uma limitação. Se não conseguiste fazer ou verificar algo, é a primeira coisa a dizer.

## 4. Quando parar e perguntar

Para e pergunta, sem adivinhar, quando:

- **Falta um facto sobre o Tiago ou sobre terceiros.** Serviços, preços, disponibilidade, nomes de clientes, testemunhos, resultados, datas.
- **O pedido contradiz uma regra fixa ou um facto do projeto.** Exemplo: pedir para listar a STCP como projeto de front-end completo.
- **A alteração é cara de desfazer.** Trocar de framework, apagar páginas, reescrever o CSS, mudar a estrutura dos endereços.
- **Há uma escolha de gosto com vários caminhos razoáveis** e nada no histórico indica a preferência dele.
- **Envolve terceiros ou dinheiro.** Comprar domínio, criar contas, aceitar termos, publicar o site, enviar mensagens em nome dele.
- **Precisas de material que só ele tem.** Fotografias, capturas de ecrã de sites a que não chegas, textos pessoais.
- **Algo que encontraste não bate com o que ele descreveu.** O repositório está diferente, um ficheiro falta, um site está em baixo.

Não pares, decide tu e diz o que decidiste, quando:

- É um pormenor de implementação com uma convenção óbvia (nome de classe, onde pôr um componente).
- É barato de mudar depois (um espaçamento, a ordem de dois itens).
- O manual ou o código existente já respondem.

**Como perguntar.** Diz primeiro o que já fizeste ou o que podes fazer sem a resposta. Depois a pergunta, curta, com opções. Enquanto esperas, avança com tudo o que não depende da resposta.

**Se ele não estiver a acompanhar.** Segue a leitura mais razoável do pedido, escreve no topo da resposta que leitura seguiste, e deixa por fazer só o que for irreversível.

## 5. Exemplos de trabalho bem feito neste projeto

**Exemplo 1: crédito dos projetos.**
O Tiago disse que os projetos não podiam aparecer como "trabalho" dele sem mencionar a Fullscreen, Lda.
*O que foi feito:* o título passou de "Trabalho selecionado" para "Projetos na Fullscreen"; o texto de entrada passou a dizer que são projetos da Fullscreen para os clientes dela e não trabalhos freelance; cada cartão ganhou "Desenvolvido na Fullscreen, Lda."; a navegação passou de "Trabalho" a "Projetos"; tudo nas duas línguas. Na entrega ficou uma pergunta: se a designação oficial é mesmo "Fullscreen, Lda.".
*Porque está bem feito:* a correção foi aplicada em todos os sítios onde a ideia aparecia, e não só na frase apontada.

**Exemplo 2: capturas de ecrã dos sites.**
O Tiago pediu imagens dos projetos. Os sites não estavam acessíveis a partir do ambiente de trabalho.
*O que foi feito:* foi dito logo que não era possível capturá-las e porquê. Os cartões ficaram com uma moldura neutra de browser com o nome do projeto, sem imitar uma captura. Quando um browser ficou disponível, as capturas reais foram tiradas, recortadas todas para o mesmo formato e ligadas aos cartões. Na entrega: que fotograma foi escolhido em cada vídeo, que um deles mostra uma pessoa, que dois sites abriram em inglês, e a recomendação de confirmar com a Fullscreen o uso das imagens.
*Porque está bem feito:* não se fabricou nada para tapar a falta, e as limitações do resultado foram ditas sem ele ter de perguntar.

**Exemplo 3: serviços na página inicial.**
A página precisava de uma secção de serviços e o Tiago não tinha dito quais oferece.
*O que foi feito:* quatro serviços deduzidos apenas do que ele já faz no emprego (sites institucionais, lojas online, do layout ao código, manutenção e suporte), sem preços nem prazos. Na entrega ficou escrito que eram uma dedução e que precisavam de confirmação; o README lista isso em "Por fazer".
*Porque está bem feito:* o trabalho avançou sem bloquear, e o que era suposição ficou marcado como suposição.

## 6. O que este manual não faz

Este manual passa o processo e o contexto do projeto. Não muda as capacidades do modelo que o lê. Se uma tarefa te parecer acima do que consegues garantir (uma animação complexa, uma migração grande), diz isso ao Tiago e propõe dividi-la em partes mais pequenas e verificáveis.
