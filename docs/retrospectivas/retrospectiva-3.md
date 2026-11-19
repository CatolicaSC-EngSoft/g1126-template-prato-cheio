# Retrospectiva da Iteração 3

- **Data:** 19/11/2026 · **Grupo:** Matheus Ferreira Fagundes, Lucas Klug Sebastião, Kauã Martins Bassan

## O que decidimos nesta iteração
- **Corrigir o README antes de escrever a demo:** `README.md` e `.env.example` ainda descreviam o PostgreSQL como um passo futuro da Unidade 3 ("após a refatoração"), mesmo com a migração já mergeada há duas iterações. Como `docs/demo.md` exige que o "Antes de começar" bata com o README, decidimos corrigir a documentação primeiro, em vez de escrever um roteiro de demo que contradiria o próprio README do repositório.
- **Escopo da tabela de validação limitado aos critérios literais da Unidade 1:** `docs/validacao.md` pede para copiar os critérios de `docs/analise.md` como estão. Em vez de inventar critérios retroativos para as histórias "coletada" e "Regra de Expiração do Alimento" (que nunca ganharam critérios formais nesse documento), registramos esse gap explicitamente em `docs/validacao.md` > Mudanças de critério, como aprendizado em vez de correção silenciosa.

## O que funcionou
- Os 6 critérios de aceite escritos na Unidade 1 ainda têm teste automatizado real e passando em `tests/doacoes.test.js`, mesmo depois de duas migrações de banco e duas histórias novas — prova que o contrato `query()` → `{rows}` isolado em `src/db.js` segurou a mudança de banco sem vazar para as regras de negócio, exatamente como o ADR 0001 previu.
- O roteiro da demo pôde ser escrito com comandos `curl` reais e exatos, porque as rotas (`/api/doacoes`, `/aceitar`, `/coletar`) e as mensagens de erro já são estáveis desde as iterações anteriores.

## O que mudaríamos
- Manter o README atualizado **no mesmo PR** de cada migração de banco, em vez de deixar a documentação desalinhada por duas iterações até uma atividade de demo forçar a correção.
- Resolver a decisão de dono/rotina do `pg_dump` mensal (Vigilância Sanitária) no momento em que ela aparece, não deixá-la como "próximo passo" repetido de uma retrospectiva para a outra — já é a segunda vez que ela é registrada como pendente (ver Retrospectiva 2).

## Próximos passos (para a próxima iteração)
- Definir dono, data e rotina do `pg_dump` mensal exigido pela Vigilância Sanitária — pendente desde a Retrospectiva 2, ainda sem decisão.
- Fechar a lacuna de rastreabilidade registrada em `docs/validacao.md`: acrescentar critérios de aceite formais (Dado/Quando/Então) em `docs/analise.md` para a história "coletada" e para a Regra de Expiração do Alimento, hoje testadas mas não documentadas nesse formato.
- Confirmar no CI (Postgres real) que `docs/demo.md` e `docs/validacao.md` continuam corretos depois da correção do README, antes de considerar a atividade encerrada.

## Autoavaliação de contribuição
Distribuam 100 pontos entre os integrantes conforme a contribuição desta iteração
(inclui código, análise, documentação, revisão de PR). Cada integrante assina.

| Integrante | Pontos | O que fez de mais relevante |
|---|:--:|---|
| Matheus Ferreira Fagundes | 40 | Conduziu a atividade: decidiu corrigir o README antes da demo, revisou e aprovou o conteúdo de `docs/demo.md`/`docs/validacao.md`/`docs/retrospectivas/retrospectiva-3.md`, rodou `npm test` (16/16) e o roteiro da demo de ponta a ponta contra o PostgreSQL real. |
| Kauã Martins Bassan | 30 | Executou o roteiro de `docs/demo.md` sem ajuda, do zero, e assinou "Testado por" é exatamente a verificação independente que a atividade exige. |
| Lucas Klug Sebastião | 30 | Revisou o PR de correção do `README.md`/`.env.example` e conferiu, independente, que os 6 critérios de `docs/validacao.md` apontam para o teste certo em `tests/doacoes.test.js`. |

**Total: 100**
