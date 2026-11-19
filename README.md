# Prato Cheio

Projeto da disciplina **Análise, Projeto e Desenvolvimento Ágil**.
Conecta doadores de alimentos excedentes a ONGs, antes que a comida se perca.

> Este repositório é a base do produto que evolui nas três unidades:
> walking skeleton (U1) → incremento guiado pelo projeto (U2) → produto refatorado (U3).

## Integrantes
- Matheus Ferreira Fagundes — https://github.com/matheusfefagundes
- Lucas klug Sebastião — https://github.com/lucasklugs
- Kauã Martins Bassan — https://github.com/kauasdn

## Como rodar

Requisito: **Node.js 22.13 ou superior** e um **PostgreSQL** acessível (o grupo decidiu, no ADR 0001, subir via Docker/contêiner local).

> Esta é a **stack preferencial** da disciplina. Se o seu grupo optar por outra, registre o ADR de justificativa e garanta os mesmos compromissos: repositório público com CI verde, rota de saúde, testes por um comando e os comandos abaixo documentados aqui no README.

```bash
docker run --name pratocheio-postgres \
  -e POSTGRES_USER=pratocheio -e POSTGRES_PASSWORD=pratocheio -e POSTGRES_DB=pratocheio \
  -p 5432:5432 -d postgres:16-alpine
cp .env.example .env     # só na primeira vez — já aponta DATABASE_URL para o contêiner acima
npm install               # só na primeira vez
npm run db:migrar         # cria o schema no banco principal
npm run db:criar-teste    # cria o pratocheio_test, usado por npm test
npm start                  # sobe em http://localhost:3000
npm test                   # roda os testes contra o pratocheio_test
npm run dev                 # sobe recarregando a cada alteração
```

## O banco: PostgreSQL (migrado na Unidade 3)

| Unidade | Banco | O que precisa instalar |
|---|---|---|
| 1 — Análise | SQLite (`node:sqlite`, embutido) — **histórico, não mais usado** | — |
| 2 — Projeto | SQLite — **histórico, não mais usado** | — |
| 3 — Construção | **PostgreSQL** (migração já feita, ver ADR 0001/0002) | um PostgreSQL acessível — contêiner local, instalado na máquina, ou serviço gerenciado |

A troca não foi acidente de percurso: na Unidade 2 o grupo registrou a decisão em um **ADR** (alternativas, consequências, riscos) e na Unidade 3 executou a **refatoração** (`docs/refatoracoes.md`, Refatoração 1) — com os testes existentes provando que o comportamento se manteve.

O `src/db.js` foi desenhado para isso: ele expõe `query()` devolvendo `{ rows }`, então a troca do banco ficou contida nele e não vazou para as regras de negócio.

## Estrutura

```
src/server.js        entrypoint (npm start)
src/db.js            conexão e schema do banco (pronto)
src/app.js           rotas da API
src/doacoes.js       regras de negócio
src/repositorio.js   acesso ao banco (SQL)
public/index.html    interface (funciona no celular)
tests/               testes automatizados
docs/analise.md      documento de análise   (Trabalho 1)
docs/projeto.md      documento de projeto   (Trabalho 2)
docs/adr/            decisões arquiteturais (Trabalho 2)
docs/validacao.md    validação e testes     (Trabalho 3)
docs/refatoracoes.md refatorações feitas    (Trabalho 3)
docs/demo.md         roteiro da demo        (Trabalho 3)
docs/retrospectivas/ retrospectiva de cada iteração
.github/workflows/   pipeline de CI
```

## Como trabalhar (fluxo de Pull Request)

A partir da Unidade 2, **nada entra direto na `main`**:

```bash
git checkout -b historia/ong-aceita-doacao
# ... implementa, escreve o teste, roda npm test ...
git commit -m "ONG aceita uma doação e ela sai da lista"
git push -u origin historia/ong-aceita-doacao
```

Abra o Pull Request no GitHub, preencha o template, espere o **CI ficar verde** e
peça a revisão de **outro integrante**. Só então faça o merge.

## Definição de pronto

Pronto, no nosso grupo, é:
- [ ] CI verde no PR — onde se confere: aba Checks do PR (`build-e-testes`)
- [ ] Aprovado por um integrante que não é o autor — onde se confere: aba Reviews do PR
- [ ] O critério de aceite da fatia tem pelo menos um teste real, não `it.todo` — onde se confere: diff do PR em `tests/`
- [ ] A regra de negócio vive em `src/doacoes.js`, o SQL em `src/repositorio.js`, e só `src/db.js` fala com o banco — onde se confere: diff do PR
- [ ] `npm test` roda sem nenhum teste pulado (`.skip`) nem vermelho — onde se confere: terminal do revisor, antes de aprovar

## O que já está pronto e o que falta

Pronto: história zero ponta a ponta — um doador publica uma doação (`src/doacoes.js` +
`src/repositorio.js`) → uma ONG vê a doação na lista (`GET /api/doacoes`) → a ONG a aceita
com exclusividade e ela sai da lista (`POST /api/doacoes/:id/aceitar`) → o voluntário marca
como coletada (`POST /api/doacoes/:id/coletar`). A Regra de Expiração do Alimento também já
está implementada: doação com validade vencida sai da lista e não pode mais ser aceita
(`docs/projeto.md` > Decisão #2). O banco já foi migrado de SQLite para PostgreSQL (ADR
0001/0002, `docs/refatoracoes.md`). Os testes em `tests/doacoes.test.js` (Vitest + Supertest)
cobrem esses critérios e estão todos verdes no CI (Node 22), rodando contra PostgreSQL real.

## Uso de IA

A IA pode participar da produção, mas o grupo é responsável por verificar, testar,
corrigir e **defender** o resultado. Registre em cada Pull Request o que foi gerado
com IA e o que vocês alteraram.
