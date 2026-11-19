# Validação — Prato Cheio

*Trabalho 3 · confronto do produto com os critérios de aceite escritos na Unidade 1*

Copie aqui os critérios de aceite do seu `docs/analise.md` e marque um por um. **Um "não atende" bem justificado vale mais que um "sim" sem evidência.**

| # | Critério de aceite (da Unidade 1) | Atende? | Evidência |
|:--:|---|:--:|---|
| 1 | Dado que o doador ainda não publicou nenhuma doação, Quando ele envia tipo, quantidade e validade preenchidos, Então a doação aparece na lista de disponíveis com status "disponível". | sim | teste `mostra a doação publicada na lista de disponíveis` (`tests/doacoes.test.js`) |
| 2 | Dado que o doador ainda não publicou nenhuma doação, Quando ele envia o formulário sem um dos campos obrigatórios (tipo, quantidade ou validade), Então o sistema recusa a publicação e nenhuma doação é criada. | sim | teste `recusa doação sem os campos obrigatórios` (`tests/doacoes.test.js`) |
| 3 | Dado que existe uma doação publicada e ainda não aceita, Quando a ONG consulta a lista de doações disponíveis, Então a doação aparece na lista. | sim | teste `mostra a doação publicada na lista de disponíveis` (`tests/doacoes.test.js`) |
| 4 | Dado que existe uma doação publicada e já aceita por uma ONG, Quando qualquer ONG consulta a lista de doações disponíveis, Então essa doação não aparece mais na lista. | sim | teste `remove a doação da lista de disponíveis depois de aceita` (`tests/doacoes.test.js`) |
| 5 | Dado que existe uma doação publicada e ainda não aceita, Quando uma ONG aciona "aceitar", Então a doação passa para o status "aceita" e fica associada àquela ONG. | sim | teste `marca a doação como aceita pela ONG` (`tests/doacoes.test.js`) |
| 6 | Dado que existe uma doação já aceita por uma ONG, Quando uma segunda ONG tenta aceitar a mesma doação, Então o sistema recusa o aceite (erro "Doação já reservada") e a doação permanece associada à primeira ONG. | sim | teste `recusa aceitar uma doação que já foi aceita por outra ONG` (`tests/doacoes.test.js`) |
| 7 | Dado que existe uma doação aceita, Quando a ONG marca como coletada, Então o status vira "coletada". | sim | teste `marca a doação aceita como coletada` (`tests/doacoes.test.js`) |
| 8 | Dado que uma doação está disponível e sua validade já passou, Quando alguém tenta aceitá-la, Então o sistema recusa e marca a doação como expirada. | sim | teste `recusa aceitar uma doação com validade vencida` (`tests/doacoes.test.js`) |

## Critérios que não atendem — por quê

Nenhum. Os 6 critérios de aceite escritos na Unidade 1 (`docs/analise.md` > Critérios de aceite, histórias #6, #7 e #8) têm hoje um teste automatizado real correspondente em `tests/doacoes.test.js`, passando no CI (`build-e-testes`) contra o PostgreSQL real.

## Mudanças de critério ao longo do semestre

Nenhum critério da Unidade 1 se mostrou errado — mas o produto cresceu além deles sem que a Unidade 1 fosse atualizada: a história "voluntário marca a doação como coletada" (Trabalho 2) e a Regra de Expiração do Alimento (Aula 11) foram implementadas e têm testes reais em `tests/doacoes.test.js` (descrições `marcar uma doação como coletada` e `doação vencida não pode mais ser aceita`), mas nunca ganharam um critério formal no formato Dado/Quando/Então dentro de `docs/analise.md` > Critérios de aceite — essa seção ficou presa no escopo original do walking skeleton (histórias #6/#7/#8). Não é um erro do que foi testado, é uma lacuna de rastreabilidade documental: quem lê só `docs/analise.md` hoje não sabe que essas duas regras existem e têm cobertura de teste. Registramos aqui como aprendizado; não corrigimos retroativamente `docs/analise.md` nesta atividade (fora do escopo de hoje) — fica como próximo passo na retrospectiva.

## Uso de IA

A IA (Claude) redigiu esta tabela e o texto das duas seções acima, mapeando cada um dos 6 critérios de `docs/analise.md` ao teste real que o cobre em `tests/doacoes.test.js` (conferido lendo o arquivo de teste, não assumido). O grupo confere rodando `npm test` contra o PostgreSQL real antes de considerar esta validação fechada.
