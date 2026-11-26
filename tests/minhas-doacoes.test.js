// H1 — "o doador acompanha as suas doações".
import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import { criarApp } from '../src/app.js';
import { migrar, limparBanco, encerrar } from '../src/db.js';

const app = criarApp();

beforeEach(async () => { await migrar(); await limparBanco(); });
afterAll(async () => { await encerrar(); });

describe('H1 · o doador acompanha as suas doações', () => {
  // CA3. Dado que o doador não é informado na publicação,
  // quando a doação é enviada, então ela é recusada com uma
  // mensagem clara e nada é gravado.
  it('recusa a publicação sem doador e não grava nada', async () => {
    const res = await request(app)
      .post('/api/doacoes')
      .send({ tipo: 'Pão francês', quantidade: '40 unidades', validade: '2099-12-31' });

    expect(res.status).toBe(400);
    expect(res.body.erro).toBe('informe o doador (nome do estabelecimento) para publicar a doação');

    const lista = await request(app).get('/api/doacoes');
    expect(lista.body).toHaveLength(0);
  });

  it('recusa doador preenchido só com espaços', async () => {
    const res = await request(app)
      .post('/api/doacoes')
      .send({ tipo: 'Pão francês', quantidade: '40 unidades', validade: '2099-12-31', doador: '   ' });

    expect(res.status).toBe(400);
    expect(res.body.erro).toBe('informe o doador (nome do estabelecimento) para publicar a doação');
  });

  it('grava o doador informado na publicação', async () => {
    const res = await request(app)
      .post('/api/doacoes')
      .send({ tipo: 'Pão francês', quantidade: '40 unidades', validade: '2099-12-31', doador: ' Padaria Pão Bom ' });

    expect(res.status).toBe(201);
    expect(res.body.doador).toBe('Padaria Pão Bom');
  });
});
