# Roteiro da demo — Prato Cheio

*Trabalho 3 · 3 minutos · outra pessoa precisa conseguir reproduzir só lendo isto*

## Antes de começar

```bash
docker run --name pratocheio-postgres \
  -e POSTGRES_USER=pratocheio -e POSTGRES_PASSWORD=pratocheio -e POSTGRES_DB=pratocheio \
  -p 5432:5432 -d postgres:16-alpine
cp .env.example .env
npm install
npm run db:migrar
npm start
```

## Roteiro (3 minutos)

| Tempo | O que mostrar | O que se prova |
|---|---|---|
| 0:00–0:20 | O problema em uma frase: alimentos ainda próprios para consumo são descartados por restaurantes/mercados enquanto ONGs não ficam sabendo a tempo do que está disponível para retirada. | por que o produto existe |
| 0:20–1:50 | A história ponta a ponta de verdade: um doador publica uma doação → ela aparece na lista de disponíveis → uma ONG a aceita (a doação sai da lista, fica exclusiva daquela ONG) → o voluntário marca a doação como coletada. | o produto executa ponta a ponta |
| 1:50–2:30 | Um caso de erro tratado: publicar uma doação com validade já vencida e tentar aceitá-la — o sistema recusa com "Doação expirada, não pode mais ser aceita" e ela não aparece na lista de disponíveis. | o limite (Regra de Expiração do Alimento) foi pensado, não só o caminho feliz |
| 2:30–3:00 | O que falta e por quê: notificar o doador quando a doação expira, e "Marta vê quantas doações foram aceitas no mês" — ambas descartadas no Trabalho 2 por exigirem identidade/autenticação que o produto ainda não tem (ver `docs/analise.md` > Conflitos de prioridade). | vocês sabem onde estão |

## Passo a passo reproduzível

1. Publicar uma doação: `curl -X POST http://localhost:3000/api/doacoes -H "Content-Type: application/json" -d '{"tipo":"Sopa","quantidade":"10 porções","validade":"2027-01-01"}'` → deve responder `201` com a doação criada, `status: "disponivel"`. Guarde o `id` da resposta.
2. Listar disponíveis: `curl http://localhost:3000/api/doacoes` → a doação do passo 1 aparece na lista.
3. Aceitar: `curl -X POST http://localhost:3000/api/doacoes/<id>/aceitar -H "Content-Type: application/json" -d '{"ong":"ONG Esperança"}'` → responde `200`, `status: "aceita"`, `ong: "ONG Esperança"`.
4. Listar disponíveis de novo: `curl http://localhost:3000/api/doacoes` → a lista volta a ficar vazia (a doação aceita saiu).
5. Marcar como coletada: `curl -X POST http://localhost:3000/api/doacoes/<id>/coletar` → responde `200`, `status: "coletada"`.
6. Caso de erro — publicar uma doação já vencida: `curl -X POST http://localhost:3000/api/doacoes -H "Content-Type: application/json" -d '{"tipo":"Pão","quantidade":"5 unidades","validade":"2020-01-01"}'` → guarde o `id`. Depois `curl -X POST http://localhost:3000/api/doacoes/<id>/aceitar` → responde `400`, `erro: "Doação expirada, não pode mais ser aceita"`.

## Testado por

Outro integrante executou este roteiro sem ajuda: **Kauã Martins Bassan**, em **19/11/2026**.
