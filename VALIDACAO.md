# Revisão do portfólio — 7 de setembro de 2026

## Alterações

- Corrigido o currículo para `src/certificados/curriculo/curriculo.pdf`.
- Atualizados apresentação, disponibilidade e foco profissional; mantida a frase principal.
- Adicionada Experiência entre Projetos e Certificados, baseada no PDF existente.
- Detalhados os seis projetos, com funcionalidades, participação, tecnologias e vídeos locais com controles nativos.
- Corrigidas tecnologias divergentes dos READMEs: Help Desk (Python/FastAPI/Jinja2), Pedidos Fast (Go/JavaScript), Login JWT (Go/React) e FarmaExpress (PHP/MySQL/JavaScript).
- Conteúdo visível por padrão, animações de entrada de 400 ms, navegação direta por âncoras e suporte a movimento reduzido.
- Preservados fotografia, paleta, tipografia, cards e teclas 3D; restaurada a resposta da stack ao movimento do cursor, antes sobrescrita pelo CSS compacto.
- Adicionados metadados canônicos, Open Graph e Twitter, com imagem de 1200 × 630 usando a foto existente.
- Corrigidos nomes acessíveis, foco visível, estado do menu, fechamento com Escape e filtros que antes omitiam projetos extras.
- CSS compacto carregado diretamente no HTML; sem JavaScript, navegação e todos os projetos continuam disponíveis.

## Evidências de conteúdo

- Currículo local: `src/certificados/curriculo/curriculo.pdf` — suporte técnico, apoio operacional, desenvolvimento de PDV, vendas, produtos, estoque, regras de negócio e banco de dados.
- https://github.com/yubr02/help-desk — README atual já contém demonstração; o portfólio usa o MP4 local existente.
- https://github.com/yubr02/sgvpdv — gestão de vendas, estoque, dashboard e exportação de relatórios; React, Java/Spring Boot e MySQL.
- https://github.com/yubr02/api-de-pedidos — pedidos, status, JWT e interface integrada.
- https://github.com/yubr02/SLAUTJWT — cadastro, login, perfil, JWT e Bcrypt.
- https://github.com/yubr02/farmaexpress — catálogo, busca, cadastro e pedidos.
- AC Engenharia: mantidas tecnologias e autoria já apresentadas no portfólio; não foi inventado link de código.

## Testes executados

Chrome via Playwright, servidor local Python na porta 4173:

- 360, 390, 768, 1366 e 1920 px: sem rolagem horizontal, título cortado, imagens quebradas ou transbordamento da stack; um único h1.
- Conteúdo principal visível na checagem aos 450 ms; opacidade nunca depende de JavaScript.
- Filtros: 4 projetos back-end, 2 front-end; Todos mostra 3 e Ver mais mostra 6.
- Menu abre, fecha, navega para Experiência e responde ao Escape; `aria-expanded` sincronizado.
- Teclas respondem ao teclado e ao cursor, atualizando `aria-pressed`.
- Carrossel responde às setas e a gesto de arrastar com toque emulado.
- Certificados abrem no dialog e fecham pelo botão.
- Seis vídeos reproduzidos com duração válida e sem erro de mídia.
- Download do currículo disparado com nome `curriculo.pdf`.
- 36 recursos/links locais retornaram 200; sem erros de console ou JavaScript.
- Sem JavaScript: conteúdo, menu móvel e seis projetos disponíveis.
- Sem IntersectionObserver: conteúdo disponível e inicialização sem erro.
- Movimento reduzido: animações desativadas.
- `node --check src/app.js` e `git diff --check` sem erros.
- PDF no domínio público: HTTP 200, tipo application/pdf e assinatura `%PDF-` confirmados. O caminho antigo retorna 404.
- Links de GitHub, AC Engenharia e WhatsApp retornaram 200. LinkedIn recusou HEAD com 405; preservado, sem afirmar validação manual de sessão.

## Pendências e limites

- Nenhum PDF ou vídeo novo é necessário: todos já existem no repositório.
- O currículo contém `devpitoco.com`, enquanto o domínio solicitado é `devpitoco.com.br`. O PDF não foi alterado; convém fornecer uma versão revisada quando disponível.
- Não foi encontrado um link de código da AC Engenharia no portfólio; adicionar somente se houver um repositório que possa ser compartilhado.
- Toque foi testado em emulação de navegador, não em aparelhos físicos. A renderização final de prévias nas redes depende do cache de cada plataforma.
