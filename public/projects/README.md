# Capturas de ecrã dos projetos

1. Tirar a captura da página inicial de cada site com a janela a cerca de 1500 px de largura
   (Chrome → DevTools → Ctrl/Cmd+Shift+P → "Capture screenshot").
2. Recortar para 1500×675 e exportar em .webp (qualidade ~80).
3. Guardar aqui: `flex2000.webp`, `mediflex.webp`, `conformetal.webp`, `stcp.webp`.
4. Em `src/content.ts`, no objeto `shots`, trocar `null` por `'projects/<nome>.webp'`.

Enquanto o valor for `null`, o cartão mostra uma moldura neutra com o nome do projeto.
