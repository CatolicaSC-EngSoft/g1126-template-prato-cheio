# Retrospectiva da Iteração 2

- **Data:** 20/11/2026 **Grupo:** Prato Cheio

## O que decidimos nesta iteração
-Priorizamos a migração do banco de dados de SQLite para PostgreSQL, por ser uma solução mais robusta, segura e escalável, além de oferecer melhor desempenho no processamento e gerenciamento das informações à medida que a aplicação evolui.
-Definimos como prioridade a refatoração de partes críticas do código, com foco especial na lógica responsável pelo controle dos status de aceitação das doações, visando aumentar a confiabilidade, a manutenibilidade e reduzir riscos de inconsistências no fluxo de negócios.
-Optamos por concentrar a iteração nessas melhorias estruturais, deixando outras evoluções funcionais para etapas futuras, a fim de fortalecer a base técnica do sistema antes da inclusão de novas funcionalidades.


## O que funcionou
-A organização das atividades ocorreu de forma colaborativa, permitindo que os integrantes contribuíssem em diferentes frentes do projeto e se apoiassem mutuamente sempre que necessário.
-Mantivemos uma comunicação constante por meio dos canais definidos pela equipe, o que facilitou o acompanhamento das tarefas e o alinhamento das decisões tomadas ao longo da etapa.
-As questões e dificuldades identificadas durante o desenvolvimento foram discutidas e solucionadas internamente, sem gerar impactos significativos no cronograma ou no andamento do projeto.
-Demos continuidade à evolução da documentação de análise, distribuindo entre os membros a elaboração e revisão de tópicos como stakeholders, requisitos de negócio, histórias de usuário, critérios de aceite, riscos e demais artefatos necessários para o refinamento da solução.

## O que mudaríamos
-Como ponto de melhoria para as próximas etapas, podemos encerrar cada iteração com um planejamento prévio das atividades seguintes, definindo responsáveis e prioridades. Até o momento desta retrospectiva, o direcionamento da etapa subsequente ainda não havia sido formalizado pela equipe.
-Também é importante reforçar o alinhamento entre a documentação e as implementações realizadas no sistema. Foram identificadas diferenças entre o escopo descrito nos artefatos do projeto e as funcionalidades já desenvolvidas, o que evidencia a necessidade de revisar e atualizar os registros para refletirem com precisão as entregas concluídas.
-A adoção de revisões periódicas da documentação pode contribuir para manter a consistência entre os requisitos definidos, as histórias de usuário e as funcionalidades efetivamente implementadas, reduzindo possíveis dúvidas durante as próximas iterações.

## Próximos passos (para a próxima iteração)

As ações abaixo são propostas para discussão pelo grupo, pois o planejamento da próxima etapa ainda não foi definido:

- Consolidar a migração do banco de dados para PostgreSQL, validando a estrutura das tabelas, os relacionamentos e a integridade dos dados após a transferência.
- Concluir a refatoração dos módulos responsáveis pelo gerenciamento das doações, com foco especial no controle dos status de aceitação, garantindo que uma doação não possa ser aceita simultaneamente por mais de uma ONG.
-Realizar testes do fluxo principal da aplicação, verificando o comportamento desde o cadastro até a aceitação da doação, incluindo a atualização correta de status e a indisponibilidade do item para outras organizações.
-Revisar e atualizar a documentação do projeto para refletir as alterações implementadas na arquitetura da aplicação e nas regras de negócio, mantendo a consistência entre os requisitos documentados e o sistema desenvolvido.
-Identificar eventuais débitos técnicos e pendências de integração, definindo responsáveis para sua resolução antes da implementação de novas funcionalidades.
Planejar as próximas iterações do projeto, estabelecendo prioridades, responsáveis e prazos, de forma a manter a equipe alinhada quanto aos objetivos e entregas esperadas.

## Autoavaliação de contribuição
Divisão proposta para validação pelos integrantes: 25 pontos para cada um, considerando a divisão de tarefas e a ajuda mútua relatadas. As contribuições abaixo se baseiam no histórico de commits; não representam uma confirmação de que todo o código já foi integrado e validado.

| Integrante | Pontos | O que fez de mais relevante |
|---|:--:|---|
| Bruno Lima Costa | 25 | Objetivos de impacto, histórias de usuário e riscos de baixa adesão das ONGs e expiração das doações. |
| Gabriel Vitório Gonçalves | 25 | Conflitos de prioridade, problema e alternativas da decisão de análise e interfaces para doador, ONG e administrador. |
| Lucas Leal de Oliveira | 25 | Regras de negócio, história zero, hipóteses e experimentos, lógica das doações e acesso ao banco. |
| Yuri David Arins Cidral | 25 | Stakeholders, critérios de aceite e riscos da primeira iteração. |

**Total: 100**

Cada integrante deverá validar a pontuação e assinar abaixo:

- Bruno Lima Costa: Bruno Lima Costa
- Gabriel Vitório Gonçalves: ____________________
- Lucas Leal de Oliveira: ____________________
- Yuri David Arins Cidral: ____________________
