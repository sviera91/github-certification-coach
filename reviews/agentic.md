<!-- certification-coach-review:agentic:1 -->
# GitHub Agentic AI Developer: human review packet

225 original practice questions. No mock exam or Copilot installation is required to review this file.

## How to review

1. Read the English question, all four choices and explanations, the concept, hints, and linked official documentation.
2. Expand Spanish and Brazilian Portuguese to check that they preserve the same meaning, option order, and correct answer.
3. Change only the question's `- [ ] Human-reviewed` checkbox to `- [x] Human-reviewed` when you approve its complete multilingual revision.
4. Leave uncertain or incorrect questions unchecked. Send the edited Markdown file back to the maintainer, with suggested corrections separately.

One approval covers English, Spanish, and Brazilian Portuguese together; changing any variant invalidates that approval.
The importer rejects stale revisions or changed question content. Do not edit prompts, answers, or explanations in this review copy.
Unchecked boxes do not revoke existing approvals. These are honor-system human attestations, not proof of reviewer identity.
AI must never check these boxes or attest to human review. These are original unofficial practice items, not real exam questions.
This packet intentionally includes the full answer key. It contains no learner answers, scores, chats, or progress.

Search for `- [ ] Human-reviewed` to find unreviewed items. Technical names and official documentation links may remain in English.

<!-- certification-coach-question:agentic-001:2150c8640d8a23c144aabc2a932b1ef715b04c4e2e0a93f1ae3586d8ca0e4dc5 -->
## Question 1: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-001`

**Content revision:** `2150c8640d8a23c144aabc2a932b1ef715b04c4e2e0a93f1ae3586d8ca0e4dc5`

### English

A team is introducing agents into a payment service. Which initial assignment provides the clearest bounded SDLC responsibility?

1. Add tests for documented rounding rules on a PR branch **[CORRECT]**

   Documented rules, a test deliverable, and a branch define a reviewable task.

2. Own payment reliability from design through production

   End-to-end reliability ownership lacks bounded inputs and authority.

3. Improve the service wherever the agent finds opportunities

   Open-ended improvement invites unrelated changes.

4. Resolve all payment incidents without an escalation boundary

   Incident handling needs risk limits and escalation paths.

**Concept:** Bounded SDLC delegation

**Authored coaching hints:**

- What would let a reviewer decide when the assignment is complete?
- How much authority is implied by each task?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo está introduciendo agentes en un servicio de pago. ¿Qué asignación inicial proporciona la responsabilidad más clara y limitada de SDLC?

1. Añadir pruebas de reglas de redondeo documentadas en una rama PR **[CORRECT]**

   Las reglas documentadas, un test de entrega y una rama definen una tarea que se puede revisar.

2. Confiabilidad del pago propio desde el diseño hasta la producción

   La propiedad de fiabilidad de extremo a extremo carece de entradas y autoridad limitadas.

3. Mejorar el servicio donde el agente encuentre oportunidades

   La mejora abierta invita a cambios no relacionados.

4. Resolver todos los incidentes de pago sin un límite de escalada

   El manejo de incidentes requiere límites de riesgo y caminos de escalada.

**Concept:** Delegación delimitada en el SDLC

**Authored coaching hints:**

- ¿Qué le permitirá a un revisor decidir cuándo terminará la tarea?
- ¿Cuánta autoridad implica cada tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe está introduzindo agentes num serviço de pagamento. Qual é a atribuição inicial que fornece a responsabilidade mais clara e limitada do SDLC?

1. Adicionar testes para regras de arredondamento documentadas em um branch PR **[CORRECT]**

   Regras documentadas, um teste de entrega e um branch definem uma tarefa revisível.

2. Confiabilidade dos pagamentos próprios desde a concepção até a produção

   A propriedade de confiabilidade de ponta a ponta não tem entradas e autoridade limitadas.

3. Melhorar o serviço onde o agente encontrar oportunidades

   A melhoria aberta convida a mudanças não relacionadas.

4. Resolver todos os incidentes de pagamento sem limites de escalada

   O tratamento de incidentes requer limites de risco e caminhos de escalada.

**Concept:** Delegação limitada SDLC

**Authored coaching hints:**

- O que deixaria um revisor decidir quando a tarefa seria concluída?
- Quanta autoridade implica cada tarefa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-002:139d0e58ddf1d9547ef000722cd88dc07fa11c57f7928ace4e274f91fb035776 -->
## Question 2: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-002`

**Content revision:** `139d0e58ddf1d9547ef000722cd88dc07fa11c57f7928ace4e274f91fb035776`

### English

An agent receives 'make checkout faster' and proposes replacing the database. What should the task owner establish before authorizing implementation?

1. A preferred database vendor

   Vendor selection does not establish whether replacement is justified.

2. A measured baseline, target latency, scope, and constraints **[CORRECT]**

   A measurable contract enables comparison and constrains architectural changes.

3. An implementation deadline without additional requirements

   A deadline does not resolve ambiguous success criteria.

4. A larger execution budget for exploring replacements

   More exploration budget does not define the intended outcome.

**Concept:** Inputs and success criteria

**Authored coaching hints:**

- How could two reviewers agree that performance improved enough?
- Which missing information affects whether a redesign is appropriate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recibe 'hacer que el proceso de pago sea más rápido' y propone reemplazar la base de datos. ¿Qué debe establecer el titular de la tarea antes de autorizar la ejecución?

1. Un proveedor de base de datos preferido

   La selección del proveedor no establece si el reemplazo es justificado.

2. Una línea de base medida, latencia objetivo, alcance y restricciones **[CORRECT]**

   Un contrato medible permite la comparación y limita los cambios arquitectónicos.

3. Un plazo de ejecución sin requisitos adicionales

   Un plazo no resuelve ambiguos criterios de éxito.

4. Un presupuesto de ejecución más amplio para explorar los reemplazos

   Un mayor presupuesto de exploración no define el resultado previsto.

**Concept:** Ingresos y criterios de éxito

**Authored coaching hints:**

- ¿Cómo pudieron dos revisores estar de acuerdo en que el rendimiento mejoró lo suficiente?
- ¿Qué información faltante afecta si un rediseño es apropiado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente recebe 'fazer o processo de pagamento mais rápido' e propõe a substituição do banco de dados. O que deve estabelecer o titular da tarefa antes de autorizar a execução?

1. Um fornecedor de banco de dados preferido

   A selecção do fornecedor não estabelece se a substituição é justificada.

2. Uma linha de base medida, latência de destino, alcance e restrições **[CORRECT]**

   Um contrato mensurável permite a comparação e limita as alterações arquitetônicas.

3. Um prazo de execução sem requisitos adicionais

   Um prazo não resolve critérios ambiguos de sucesso.

4. Um orçamento de execução maior para a exploração de substituições

   Um maior orçamento de exploração não define o resultado pretendido.

**Concept:** Introduções e critérios de sucesso

**Authored coaching hints:**

- Como podem dois críticos concordar que o desempenho melhorou o suficiente?
- Que informações faltantes afetam se um redesenho é apropriado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-003:7b4ae6a65a1a9c9259ca6cd7b3edb28cde271cd3dc344f2a063973f59272b64a -->
## Question 3: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-003`

**Content revision:** `7b4ae6a65a1a9c9259ca6cd7b3edb28cde271cd3dc344f2a063973f59272b64a`

### English

A security-sensitive refactor must not modify source files until its plan is approved. Which architecture enforces that requirement?

1. A writable agent instructed to wait

   Instructions alone do not remove editing capability.

2. A post-run review of all edited files

   Review after editing is later than the required boundary.

3. A read-only planning stage followed by a gated execution stage **[CORRECT]**

   Read-only capability and an explicit gate prevent premature source edits.

4. A combined plan-and-code PR with merge protection

   Merge protection does not prevent preapproval source generation.

**Concept:** Plan-before-action enforcement

**Authored coaching hints:**

- At what point must the restriction take effect?
- Which option controls capability rather than merely describing behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un refactor sensible a la seguridad no podrá modificar los archivos fuente hasta que se apruebe su plan. ¿Qué arquitectura hace cumplir ese requisito?

1. Un agente escriturable instruido a esperar

   Las instrucciones por sí solas no eliminan la capacidad de edición.

2. Una revisión posterior de todos los archivos editados

   La revisión después de la edición es posterior al límite requerido.

3. Una etapa de planificación de solo lectura seguida de una etapa de ejecución con aprobación obligatoria **[CORRECT]**

   La capacidad de solo lectura y una puerta explícita impiden la edición prematura de la fuente.

4. Un plan y código combinados PR con protección contra la fusión

   La protección contra la fusión no impide la generación de fuentes de preaprobación.

**Concept:** Cumplimiento de la planificación antes de actuar

**Authored coaching hints:**

- ¿En qué momento debe entrar en vigor la restricción?
- ¿Qué opción controla la capacidad en lugar de simplemente describir el comportamiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um refator sensível à segurança não deve modificar os arquivos-fonte até que o seu plano seja aprovado. Que arquitetura impõe essa exigência?

1. Um agente escrito instruído a esperar

   As instruções sozinhas não removem a capacidade de edição.

2. Uma revisão após execução de todos os arquivos editados

   A revisão após a edição é posterior ao limite exigido.

3. Uma etapa de planejamento somente leitura seguida de uma etapa de execução com aprovação obrigatória **[CORRECT]**

   A capacidade de somente leitura e um portão explícito impedem a edição prematura da fonte.

4. Uma combinação de plano e código PR com proteção contra merge

   A proteção contra a merge não impede a geração de fontes de pré-aprobação.

**Concept:** execução do plano antes da ação

**Authored coaching hints:**

- Em que ponto a restrição deve entrar em vigor?
- Que opção controla a capacidade em vez de simplesmente descrever o comportamento?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-004:a5e726de89ad9fd8617c81b2c50b01bab932f3814a7465926790f0804a4c905a -->
## Question 4: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-004`

**Content revision:** `a5e726de89ad9fd8617c81b2c50b01bab932f3814a7465926790f0804a4c905a`

### English

Reviewers receive a plan saying only 'update files, run checks, finish.' What improvement most helps them validate intent before execution?

1. Replace the plan with the model's confidence score

   Confidence is not a reviewable implementation contract.

2. Attach an unfiltered transcript of every internal thought

   Internal deliberation is not necessary for an inspectable plan.

3. Require a detailed final diff before discussing intent

   Waiting for a diff loses the early validation opportunity.

4. Specify affected components, steps, risks, tests, and stop conditions **[CORRECT]**

   Explicit scope and validation let reviewers assess the proposed work.

**Concept:** Structured plan artifacts

**Authored coaching hints:**

- What questions would an owner ask before granting execution authority?
- Which information connects intent to later evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los revisores reciben un plan que dice solo 'actualizar archivos, ejecutar controles, terminar'. ¿Qué mejora les ayuda más a validar la intención antes de la ejecución?

1. Reemplazar el plan con el puntaje de confianza del modelo

   La confianza no es un contrato de ejecución que pueda ser revisado.

2. adjunta una transcripción no filtrada de cada pensamiento interno

   La deliberación interna no es necesaria para un plan inspectable.

3. Requerir una diferencia final detallada antes de discutir la intención

   Esperar una diferencia pierde la oportunidad de validación temprana.

4. Especificar los componentes afectados, los pasos, los riesgos, los pruebas y las condiciones de parada **[CORRECT]**

   El alcance y la validación explícitos permiten a los revisores evaluar el trabajo propuesto.

**Concept:** Artefactos del plan estructurado

**Authored coaching hints:**

- ¿Qué preguntas se haría un propietario antes de otorgar autoridad para ejecutar?
- ¿Qué información conecta la intención con pruebas posteriores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os revisores recebem um plano que diz apenas 'atualizar arquivos, executar verificações, terminar'. Que melhoria mais os ajuda a validar a intenção antes da execução?

1. Substituir o plano com a pontuação de confiança do modelo

   O Confiança não é um contrato de execução revisable.

2. Anexe uma transcrição não filtrada de cada pensamento interno

   A deliberação interna não é necessária para um plano inspeccionável.

3. Requer uma diferença final detalhada antes de discutir a intenção

   Esperar uma diferença perde a oportunidade de validação precoce.

4. Especificar os componentes, os passos, os riscos, os testes e as condições de parada afetados **[CORRECT]**

   O escopo explícito e a validação permitem aos revisores avaliar o trabalho proposto.

**Concept:** artefatos do plano estruturado

**Authored coaching hints:**

- Que perguntas um proprietário faria antes de conceder autoridade de execução?
- Que informações ligam a intenção a evidências posteriores?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-005:e79cf395cbbe2246aec54a268e68c57124bb7260039cf9a2444997cf22d37be6 -->
## Question 5: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-005`

**Content revision:** `e79cf395cbbe2246aec54a268e68c57124bb7260039cf9a2444997cf22d37be6`

### English

An agent fixes a parser bug but also reorganizes unrelated authentication code. Under the contributor model, what should the reviewer do?

1. Require justification or removal of the unrelated changes **[CORRECT]**

   Scope is reviewed alongside correctness, regardless of authorship.

2. Accept the entire diff because parser tests pass

   Parser tests do not validate unrelated authentication edits.

3. Reject all agent contributions regardless of evidence

   The contributor model evaluates work, not author type.

4. Review only files mentioned in the original issue

   Ignoring unexpected files leaves unreviewed risk.

**Concept:** Scope review under the contributor model

**Authored coaching hints:**

- Does solving the reported defect justify every change?
- Which review standard should apply to any contributor?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente corrige un error del parser pero también reorganiza un código de autenticación no relacionado. Bajo el modelo de contribución, ¿qué debe hacer el revisor?

1. Requerir justificación o eliminación de los cambios no relacionados **[CORRECT]**

   El alcance se revisa junto con la corrección, independientemente de la autoría.

2. Acepta toda la diferencia porque las pruebas del parser pasan

   Las pruebas de parser no validan las modificaciones de autenticación no relacionadas.

3. Rechazar todas las contribuciones de agentes independientemente de la evidencia

   El modelo colaborador evalúa el trabajo, no el tipo de autor.

4. Revisa sólo los archivos mencionados en el número original

   Ignorar archivos inesperados deja riesgos no revisados.

**Concept:** Revisión del alcance según el modelo de contribución

**Authored coaching hints:**

- ¿Se justifica todo cambio si se resuelve el defecto reportado?
- ¿Qué norma de revisión debería aplicarse a cualquier contribuyente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente corrige um erro de análise, mas também reorganiza o código de autenticação não relacionado. De acordo com o modelo de contribuição, o revisor deve fazer o quê?

1. Requer justificação ou remoção das alterações não relacionadas **[CORRECT]**

   O escopo é revisto juntamente com a correção, independentemente da autoria.

2. Aceitar toda a diferença porque os testes do parser passam

   Os testes de parceria não validam edições de autenticação não relacionadas.

3. Rejeitar todas as contribuições dos agentes, independentemente das provas

   O modelo colaborador avalia o trabalho, não o tipo de autor.

4. Examine apenas os arquivos mencionados na edição original

   Ignorar arquivos inesperados deixa riscos não revisados.

**Concept:** Revisão do escopo segundo o modelo de contribuição

**Authored coaching hints:**

- A solução do defeito relatado justifica todas as mudanças?
- Que padrão de revisão deve aplicar-se a qualquer contribuinte?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-006:b6135605d8772b13fa2f1752694552b37c8197dbaafad39258ddd43c23a739e2 -->
## Question 6: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-006`

**Content revision:** `b6135605d8772b13fa2f1752694552b37c8197dbaafad39258ddd43c23a739e2`

### English

A low-risk documentation agent waits for human approval before each search and file read. Delivery has slowed without reducing meaningful risk. What is the best redesign?

1. Remove all controls, including publication checks

   Publication still needs appropriate controls.

2. Permit bounded reads automatically and gate consequential writes **[CORRECT]**

   Risk-based boundaries reduce friction while preserving oversight of impact.

3. Move approvals to a weekly batch after publication

   After-the-fact approval cannot prevent an inappropriate publication.

4. Require two reviewers for every read to improve confidence

   More read approvals increase the existing bottleneck.

**Concept:** Proportionate autonomy

**Authored coaching hints:**

- Which operations can change something outside the agent's context?
- Where does human judgment materially reduce risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de documentación de bajo riesgo espera la aprobación humana antes de cada búsqueda y lectura de archivos. La entrega se ha ralentizado sin reducir el riesgo significativo. ¿Cuál es el mejor rediseño?

1. Eliminar todos los controles, incluidos los controles de publicación

   La publicación todavía necesita controles adecuados.

2. Permitir lecturas delimitadas automáticamente y exigir aprobación para escrituras de impacto significativo **[CORRECT]**

   Los límites basados en el riesgo reducen la fricción mientras se conserva la supervisión del impacto.

3. Trasladar las aprobaciones a un lote semanal después de su publicación

   La aprobación posterior al hecho no puede impedir una publicación inapropiada.

4. Requerir dos revisores para cada lectura para mejorar la confianza

   Más aprobaciones de lectura aumentan el cuello de botella existente.

**Concept:** Autonomía proporcional

**Authored coaching hints:**

- ¿Qué operaciones pueden cambiar algo fuera del contexto del agente?
- ¿Dónde el juicio humano reduce materialmente el riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de documentação de baixo risco espera a aprovação humana antes de cada busca e leitura de arquivo. A entrega desacelerou sem reduzir significativamente o risco. Qual é o melhor redesenho?

1. Eliminar todos os controles, incluindo os controles de publicação

   A publicação ainda precisa de controles adequados.

2. Permitir leituras delimitadas automaticamente e exigir aprovação para gravações de impacto significativo **[CORRECT]**

   Os limites baseados no risco reduzem o atrito, preservando simultaneamente a supervisão do impacto.

3. Transferir as aprovações para um lote semanal após a publicação

   A aprovação posterior não pode impedir uma publicação inadequada.

4. Requer dois revisores para cada leitura para aumentar a confiança

   Mais aprovações de leitura aumentam o problema existente.

**Concept:** Autonomia proporcional

**Authored coaching hints:**

- Que operações podem mudar algo fora do contexto do agente?
- Onde o julgamento humano reduz substancialmente o risco?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-007:4f384536f07d75dcc3042ad3e0301b39f811cc9bb17f42518d18cdbd9e70259a -->
## Question 7: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-007`

**Content revision:** `4f384536f07d75dcc3042ad3e0301b39f811cc9bb17f42518d18cdbd9e70259a`

### English

A team keeps agent plans only in an ephemeral chat. Auditors cannot connect released changes to their intended scope. What should the architecture add?

1. A longer chat context window

   A larger context window does not create an accessible audit artifact.

2. A requirement that agents restate their confidence

   Confidence does not establish intent or provenance.

3. Durable plan and evidence links associated with the PR and commit **[CORRECT]**

   Linked artifacts connect approved intent, execution, and validation.

4. A rule deleting agent branches as soon as tests pass

   Early deletion can reduce rather than improve reconstructability.

**Concept:** GitHub as system of record

**Authored coaching hints:**

- What must remain available after a session ends?
- How would someone locate the evidence for one released commit?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo mantiene los planes de los agentes sólo en una charla efímera. Los auditores no pueden conectar los cambios publicados con su ámbito de aplicación previsto. ¿Qué debería añadir la arquitectura?

1. Una ventana de contexto de chat más larga

   Una ventana de contexto más amplia no crea un artefacto de auditoría accesible.

2. Un requisito para que los agentes reafirmen su confianza

   La confianza no establece la intención o procedencia.

3. Enlaces de planes duraderos y pruebas asociados con el PR y el commit **[CORRECT]**

   Los artefactos vinculados conectan la intención aprobada, ejecución y validación.

4. Un agente de eliminación de reglas se ramifica tan pronto como pasan las pruebas

   La eliminación temprana puede reducir en lugar de mejorar la reconstrucibilidad.

**Concept:** GitHub como sistema de registro

**Authored coaching hints:**

- ¿Qué debe quedarse disponible después del final de una sesión?
- ¿Cómo podría alguien localizar la evidencia de un commit liberado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe mantém os planos dos agentes apenas numa conversa efêmera. Os auditores não podem associar as alterações divulgadas ao seu escopo previsto. O que deve acrescentar a arquitetura?

1. Uma janela de contexto de chat mais longa

   Uma janela de contexto maior não cria um artefato de auditoria acessível.

2. Um requisito para os agentes reafirmarem a sua confiança

   A confiança não estabelece a intenção ou a origem.

3. Links de plano duradouro e de evidências associados ao PR e ao commit **[CORRECT]**

   Artefatos ligados conectam intenção aprovada, execução e validação.

4. Um agente de exclusão de regra ramifica-se assim que os testes passarem

   A eliminação precoce pode reduzir em vez de melhorar a reconstrução.

**Concept:** GitHub como sistema de registro

**Authored coaching hints:**

- O que deve permanecer disponível depois de uma sessão terminar?
- Como alguém encontraria a evidência de um commit libertado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-008:55b6bcd02058b899bb5f1f1ca0e2a8552780f22c1e28433217d6acc6fdf6cc05 -->
## Question 8: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-008`

**Content revision:** `55b6bcd02058b899bb5f1f1ca0e2a8552780f22c1e28433217d6acc6fdf6cc05`

### English

A team wants an agent to draft changes quickly for reversible formatting work, with validation before merge rather than before editing. Which workflow fits?

1. Production execution followed by a retrospective plan

   The plan must inform work, not rationalize production actions afterward.

2. Read-only planning with no implementation handoff

   Read-only planning alone cannot deliver the changes.

3. Direct default-branch updates after a local formatter run

   Local validation does not replace the required merge boundary.

4. A plan-and-execution PR subject to configured checks and reviews **[CORRECT]**

   A combined PR fits low-risk iteration while retaining review before acceptance.

**Concept:** Plan-first versus plan-and-execution

**Authored coaching hints:**

- Is the required gate before editing or before accepting changes?
- How does reversibility affect the appropriate workflow?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que un agente redacte cambios rápidamente para el trabajo de formato reversible, con validación antes de fusionarse en lugar de antes de editar. ¿Qué flujo de trabajo encaja?

1. Ejecución de la producción seguida de un plan retrospectivo

   El plan debe informar el trabajo, no racionalizar las acciones de producción después.

2. Planificación de lectura exclusiva sin transferencias de ejecución

   La sola planificación de lectura no puede lograr los cambios.

3. Actualizaciones directas de la rama predeterminada después de ejecutar un formatador local

   La validación local no sustituye el límite de fusión requerido.

4. Un plan y ejecución PR sujeto a controles y revisiones configuradas **[CORRECT]**

   Un combinado PR se ajusta a la iteración de bajo riesgo mientras se conserva la revisión antes de la aceptación.

**Concept:** Plan primero versus plan y ejecución

**Authored coaching hints:**

- ¿Es la puerta requerida antes de editar o antes de aceptar cambios?
- ¿Cómo afecta la reversibilidad al flujo de trabajo adecuado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer que um agente redigir alterações rapidamente para o trabalho de formatação reversível, com validação antes do merge em vez de antes da edição. Que fluxo de trabalho se encaixa?

1. Execução da produção seguida de um plano retrospectivo

   O plano deve informar o trabalho, não racionalizar as ações de produção posteriormente.

2. Planejamento apenas para leitura sem transferência de execução

   Só o planejamento de leitura não pode produzir as mudanças.

3. Atualizações diretas do branch padrão após a execução de um formatador local

   A validação local não substitui o limite de merge necessário.

4. Um plano e execução PR sujeito a verificações e revisões configuradas **[CORRECT]**

   Um PR combinado se adapta à iteração de baixo risco, mantendo a revisão antes da aceitação.

**Concept:** Primeiro plano versus plano e execução

**Authored coaching hints:**

- O portal requerido é antes de editar ou antes de aceitar alterações?
- Como a reversibilidade afeta o fluxo de trabalho adequado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-009:4651517f062d8c1706e9f22c69286e9e99038f7ae8871bb463f07bd479ff8b7b -->
## Question 9: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-009`

**Content revision:** `4651517f062d8c1706e9f22c69286e9e99038f7ae8871bb463f07bd479ff8b7b`

### English

A task asks an agent to update an API client without changing its public interface. Which proposed success criterion is most useful?

1. Existing compatibility tests and new defect tests pass without public API changes **[CORRECT]**

   This checks both the desired fix and the compatibility constraint.

2. The patch removes the most lines possible

   Deletion volume is not evidence of compatible behavior.

3. The agent produces at least three commits

   Commit count is a process measure, not task correctness.

4. The implementation uses the newest available library

   Newest-library adoption may violate compatibility.

**Concept:** Outcome-oriented task contracts

**Authored coaching hints:**

- What behavior must change, and what must remain stable?
- Which metric could improve while still breaking users?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea pide a un agente que actualice un cliente API sin cambiar su interfaz pública. ¿Qué criterio de éxito propuesto es más útil?

1. Las pruebas de compatibilidad existentes y las nuevas pruebas de defecto pasan sin cambios públicos API **[CORRECT]**

   Esto comprueba tanto la corrección deseada como la restricción de compatibilidad.

2. El parche elimina la mayor cantidad de líneas posibles

   El volumen de eliminación no es evidencia de comportamiento compatible.

3. El agente produce al menos tres commits

   El número de compromisos es una medida del proceso, no la corrección de la tarea.

4. La implementación utiliza la biblioteca disponible más reciente

   La adopción de la biblioteca más reciente puede violar la compatibilidad.

**Concept:** Los contratos de tareas orientados a los resultados

**Authored coaching hints:**

- ¿Qué comportamiento debe cambiar, y qué debe permanecer estable?
- ¿Qué métrica podría mejorar mientras aún rompe a los usuarios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa pede a um agente para atualizar um cliente API sem alterar a sua interface pública. Qual é o critério de sucesso mais útil?

1. Os testes de compatibilidade existentes e os novos testes de defeito passam sem alterações públicas API **[CORRECT]**

   Isto verifica tanto a correção desejada como a restrição de compatibilidade.

2. O patch remove o maior número de linhas possível

   O volume de exclusão não é evidência de comportamento compatível.

3. O agente produz pelo menos três commits

   A contagem de compromissos é uma medida do processo, não a correção da tarefa.

4. A implementação utiliza a mais recente biblioteca disponível

   A adoção da biblioteca mais recente pode violar a compatibilidade.

**Concept:** Contratos de tarefas orientados para os resultados

**Authored coaching hints:**

- Que comportamento deve mudar, e o que deve permanecer estável?
- Que métrica poderia melhorar enquanto ainda quebra os usuários?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-010:60ed99b963f438e05e32f7f41b5e09e0355910af5b3b80f4df01f6a6055341a4 -->
## Question 10: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-010`

**Content revision:** `60ed99b963f438e05e32f7f41b5e09e0355910af5b3b80f4df01f6a6055341a4`

### English

An agent is assigned a production incident and discovers an undocumented destructive recovery step. Which responsibility boundary should the architecture define?

1. Let the agent infer authority from urgency

   Urgency does not grant destructive authority.

2. Prepare evidence and a recovery proposal, then escalate outside its authorized scope **[CORRECT]**

   Escalation preserves useful diagnosis without exceeding delegated authority.

3. Allow any action that appeared in a previous incident

   A previous incident may have had different approvals and conditions.

4. Treat access to a command as permission to execute it

   Technical capability and authorization are different boundaries.

**Concept:** Escalation by task boundary

**Authored coaching hints:**

- Who owns the risk of a destructive recovery?
- Can diagnosis continue without taking the disputed action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

A un agente se le asigna un incidente de producción y descubre un paso de recuperación destructivo no documentado. ¿Qué límite de responsabilidad debe definir la arquitectura?

1. Deja que el agente deduzca la autoridad de la urgencia

   La urgencia no otorga autoridad destructiva.

2. Preparar pruebas y una propuesta de recuperación, luego preguntar al responsable sobre acciones fuera del alcance autorizado **[CORRECT]**

   La escalación preserva el diagnóstico útil sin exceder la autoridad delegada.

3. Permitir cualquier acción que apareció en un incidente anterior

   Un incidente anterior puede haber tenido diferentes aprobaciones y condiciones.

4. Tratar el acceso a un comando como permiso para ejecutarlo

   La capacidad técnica y la autorización son límites diferentes.

**Concept:** Escalación por límite de tarea

**Authored coaching hints:**

- ¿A quién pertenece el riesgo de una recuperación destructiva?
- ¿Puede continuar el diagnóstico sin tomar la acción controvertida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente é designado para um incidente de produção e descobre uma etapa de recuperação destrutiva não documentada. Que limite de responsabilidade deve definir a arquitetura?

1. Deixe o agente inferir autoridade da urgência

   A urgência não concede autoridade destrutiva.

2. Preparar provas e uma proposta de recuperação, em seguida, perguntar ao proprietário responsável sobre ações fora do escopo autorizado **[CORRECT]**

   A escalação preserva um diagnóstico útil sem exceder a autoridade delegada.

3. Permitir qualquer ação que apareceu em um incidente anterior

   Um incidente anterior pode ter tido aprovações e condições diferentes.

4. Tratar o acesso a um comando como permissão para executá-lo

   A capacidade técnica e a autorização são limites diferentes.

**Concept:** Escalada por limite de tarefa

**Authored coaching hints:**

- Quem é responsável pelo risco de uma recuperação destrutiva?
- O diagnóstico pode continuar sem tomar a ação controversa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-011:20564f00036aa7e624299018af68e1dc46cae543fedb46c3b6d082f2bfe35223 -->
## Question 11: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-011`

**Content revision:** `20564f00036aa7e624299018af68e1dc46cae543fedb46c3b6d082f2bfe35223`

### English

A manager describes an agent as 'an assistant that suggests code.' Which additional behavior makes an SDLC system agentic rather than merely advisory?

1. It answers with longer explanations

   Response length does not establish autonomous execution.

2. It always uses a larger model

   Model size does not define the workflow.

3. It plans, invokes authorized tools, and evaluates progress toward a goal **[CORRECT]**

   Goal-directed action and feedback distinguish an agentic lifecycle.

4. It produces suggestions in a chat interface

   A chat interface can remain purely advisory.

**Concept:** Agentic plan-act-evaluate lifecycle

**Authored coaching hints:**

- Does the system only propose, or can it act on its environment?
- What feedback informs its next step?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un gerente describe a un agente como "un asistente que sugiere código". ¿Qué comportamiento adicional hace que un sistema SDLC esté basado en un agente en lugar de simplemente asesoramiento?

1. Responde con explicaciones más largas

   La duración de la respuesta no establece una ejecución autónoma.

2. Siempre utiliza un modelo más grande

   El tamaño del modelo no define el flujo de trabajo.

3. Planifica, invoca herramientas autorizadas y evalúa el progreso hacia una meta **[CORRECT]**

   La acción dirigida al objetivo y la retroalimentación distinguen un ciclo de vida basado en agentes.

4. Produce sugerencias en una interfaz de chat

   Una interfaz de chat puede seguir siendo puramente asesora.

**Concept:** Plan-acto-evaluación del ciclo de vida de los agentes

**Authored coaching hints:**

- ¿El sistema sólo propone, o puede actuar sobre su entorno?
- ¿Qué retroalimentación informa su siguiente paso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um gerente descreve um agente como "um assistente que sugere código". Qual comportamento adicional torna um sistema SDLC baseado em agente em vez de meramente consultivo?

1. Responde com explicações mais longas

   O comprimento da resposta não estabelece execução autônoma.

2. Ele sempre usa um modelo maior

   O tamanho do modelo não define o fluxo de trabalho.

3. Ele planeja, invoca ferramentas autorizadas e avalia o progresso em direção a um objetivo **[CORRECT]**

   A ação e o feedback orientados para objetivos distinguem um ciclo de vida baseado em agentes.

4. Ele produz sugestões em uma interface de chat

   Uma interface de chat pode permanecer puramente de aconselhamento.

**Concept:** Plano-acto-avaliação agencial do ciclo de vida

**Authored coaching hints:**

- O sistema só propõe, ou pode agir sobre o seu ambiente?
- Que feedback informa o seu próximo passo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/>

<!-- certification-coach-question:agentic-012:06cdda14bce987d13aa16f85ccf93a857bc6e0dd66fa2c3ec0f95720c5834a3d -->
## Question 12: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-012`

**Content revision:** `06cdda14bce987d13aa16f85ccf93a857bc6e0dd66fa2c3ec0f95720c5834a3d`

### English

An agent repeatedly repairs tests until they pass, but nobody checks whether the feature still meets its issue requirements. Which architectural omission is most important?

1. A mandatory minimum patch size

   Patch size does not establish correct behavior.

2. A second code formatter

   Formatting cannot verify feature intent.

3. An agent-generated productivity score

   Self-reported productivity does not validate outcomes.

4. An evaluation stage tied to development intent **[CORRECT]**

   Evaluation must compare the delivered behavior with the intended requirement.

**Concept:** Closing the agent lifecycle

**Authored coaching hints:**

- Can green tests coexist with a wrongly implemented feature?
- Where is the original task contract checked?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente modifica repetidamente las pruebas hasta que pasan, pero nadie verifica si la funcionalidad aún cumple los requisitos de la issue. ¿Qué omisión arquitectónica es más importante?

1. Un tamaño mínimo de parche obligatorio

   El tamaño del parche no establece el comportamiento correcto.

2. Un segundo formato de código

   El formato no puede verificar la intención de la función.

3. Un puntaje de productividad generado por agentes

   La productividad autoinformada no valida los resultados.

4. Una fase de evaluación vinculada a la intención de desarrollo **[CORRECT]**

   La evaluación debe comparar el comportamiento entregado con el requisito previsto.

**Concept:** Cerrar el ciclo de vida del agente

**Authored coaching hints:**

- ¿Pueden coexistir las pruebas verdes con una característica implementada incorrectamente?
- ¿Dónde se comprueba el contrato original de tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente modifica repetidamente os testes até que passem, mas ninguém verifica se a funcionalidade ainda atende aos requisitos da issue. Qual é a omissão arquitetônica mais importante?

1. Um tamanho mínimo obrigatório do patch

   O tamanho do patch não estabelece o comportamento correto.

2. Um segundo formatador de código

   A formatação não pode verificar a intenção do recurso.

3. Uma pontuação de produtividade gerada por agentes

   A produtividade auto-relatada não valida os resultados.

4. Uma fase de avaliação ligada à intenção de desenvolvimento **[CORRECT]**

   A avaliação deve comparar o comportamento fornecido com o requisito previsto.

**Concept:** fechar o ciclo de vida do agente

**Authored coaching hints:**

- Os testes verdes podem coexistir com uma característica implementada erroneamente?
- Onde é verificado o contrato de tarefa original?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/>

<!-- certification-coach-question:agentic-013:a9bd340312f8d5db115dc7382c7698a905e7bb1a294da1b90170471f5d6faf39 -->
## Question 13: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-013`

**Content revision:** `a9bd340312f8d5db115dc7382c7698a905e7bb1a294da1b90170471f5d6faf39`

### English

A proposed agent task bundles a schema migration, UI redesign, and deployment-policy change in one PR. Which redesign most improves reviewability?

1. Separate coherent deliverables and record their dependencies **[CORRECT]**

   Coherent units make distinct risks and prerequisites inspectable.

2. Hide intermediate commits behind one summary

   A summary does not reduce the scope of review.

3. Assign one reviewer to approve the complete bundle quickly

   One reviewer may not own all affected areas.

4. Use a longer prompt while retaining the same unbounded scope

   Prompt length does not create architectural boundaries.

**Concept:** SDLC task decomposition

**Authored coaching hints:**

- Do these changes share one acceptance decision?
- Which boundaries let the right owners review the right risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea propuesta para un agente combina una migración de esquema, un rediseño de UI y un cambio de política de despliegue en un solo PR. ¿Qué rediseño facilita más la revisión?

1. Separar entregables coherentes y registrar sus dependencias **[CORRECT]**

   Las unidades coherentes permiten inspeccionar riesgos y requisitos previos distintos.

2. Esconder el intermediario commits detrás de un resumen

   Un resumen no reduce el alcance de la revisión.

3. Asignar a un revisor para aprobar el paquete completo rápidamente

   Un revisor puede no poseer todas las áreas afectadas.

4. Utilice un aviso más largo manteniendo el mismo alcance ilimitado

   La longitud del prompt no crea límites arquitectónicos.

**Concept:** Descomposición de tareas SDLC

**Authored coaching hints:**

- ¿Estos cambios comparten una sola decisión de aceptación?
- ¿Qué límites permiten a los dueños adecuados revisar el riesgo correcto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa proposta para um agente reúne uma migração de esquema, um redesenho de UI e uma mudança na política de implantação em um único PR. Qual reformulação mais facilita a revisão?

1. Separar entregas coerentes e registrar suas dependências **[CORRECT]**

   As unidades coerentes permitem a inspecção de riscos e pré-requisitos distintos.

2. Esconde o intermediário commits atrás de um resumo

   Um resumo não reduz o escopo da revisão.

3. Assinar um revisor para aprovar o pacote completo rapidamente

   Um revisor pode não possuir todas as áreas afetadas.

4. Use um prompt mais longo mantendo o mesmo alcance ilimitado

   O comprimento do prompt não cria limites arquitetônicos.

**Concept:** decomposição da tarefa SDLC

**Authored coaching hints:**

- Estas mudanças compartilham uma decisão de aceitação?
- Que limites permitem que os donos certos revisem o risco certo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-014:81e0f1f8b547eed652c9b671104b4b51514876206967cff63656a14fa07cf725 -->
## Question 14: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-014`

**Content revision:** `81e0f1f8b547eed652c9b671104b4b51514876206967cff63656a14fa07cf725`

### English

A planning agent recommends an infrastructure change whose rollback is unknown. The team requires rollback readiness before implementation. What should plan validation conclude?

1. Approve because rollback can be investigated after deployment

   Postdeployment discovery misses the required readiness boundary.

2. Return the plan for recovery analysis before execution **[CORRECT]**

   An unfulfilled recovery requirement makes the plan incomplete.

3. Approve if the agent reports high confidence

   Confidence cannot substitute for a recovery strategy.

4. Replace required reviews with a longer execution timeout

   Timeouts do not establish reversibility.

**Concept:** Validating recovery readiness

**Authored coaching hints:**

- Which prerequisite has not been demonstrated?
- When would an unknown rollback become most costly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de planificación recomienda un cambio de infraestructura sin una estrategia de reversión conocida. El equipo exige preparación para la reversión antes de implementar. ¿Qué debe concluir la validación del plan?

1. Aprobar porque el retroceso puede ser investigado después del despliegue

   El descubrimiento después del despliegue se pierde el límite de preparación requerido.

2. Regresar el plan para el análisis de recuperación antes de la ejecución **[CORRECT]**

   Un requisito de recuperación no cumplido hace que el plan sea incompleto.

3. Aprobar si el agente informa de alta confianza

   La confianza no puede sustituir a una estrategia de recuperación.

4. Reemplazar las revisiones requeridas con un tiempo de ejecución más largo

   Las tiempos de espera agotados no establecen la reversibilidad.

**Concept:** Validación de la preparación para la recuperación

**Authored coaching hints:**

- ¿Qué condición previa no se ha demostrado?
- ¿Cuándo se haría más caro un retroceso desconocido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de planejamento recomenda uma alteração de infraestrutura sem uma estratégia de reversão conhecida. A equipe exige preparo para reversão antes da implementação. O que a validação do plano deve concluir?

1. Aprova porque o retrocesso pode ser investigado após a implantação

   A descoberta pós-desenvolvimento perde o limite de prontidão exigido.

2. Devolver o plano para análise de recuperação antes da execução **[CORRECT]**

   Um requisito de recuperação não cumprido torna o plano incompleto.

3. Aprova se o agente relata alta confiança

   A confiança não pode substituir uma estratégia de recuperação.

4. Substituir as revisões necessárias com um prazo de execução mais longo

   As limites de tempo excedidos não estabelecem a reversibilidade.

**Concept:** Validação da prontidão de recuperação

**Authored coaching hints:**

- Qual pré-requisito não foi demonstrado?
- Quando um regresso desconhecido se tornaria mais caro?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-015:021632fb699ed5b28fc44cc388bc0d69d25851aae3a972dd3dad6d1529a2b180 -->
## Question 15: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-015`

**Content revision:** `021632fb699ed5b28fc44cc388bc0d69d25851aae3a972dd3dad6d1529a2b180`

### English

An agent team uses GitHub PRs as its control plane. Which mapping best separates intent, implementation, and evidence?

1. All three exist only in a final chat response

   Ephemeral chat does not provide the same reviewable record.

2. Intent is inferred from filenames; evidence is the agent's confidence

   Filenames and confidence do not capture intent and validation.

3. Plan in the issue or PR, changes in commits, validation in checks and reports **[CORRECT]**

   Each lifecycle stage has a durable, inspectable representation.

4. Implementation is documented before planning; tests are optional if reviewed

   Review does not remove the need for appropriate validation.

**Concept:** Lifecycle artifact mapping

**Authored coaching hints:**

- What artifact answers why, what changed, and how it was checked?
- Can those answers be examined independently?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo de agentes utiliza los PR de GitHub como plano de control. ¿Qué correspondencia separa mejor la intención, la implementación y la evidencia?

1. Los tres sólo existen en una respuesta de chat final

   El chat ephemeral no proporciona el mismo registro revisable.

2. La intención se deduce de los nombres de archivos; la evidencia es la confianza del agente

   Los nombres de archivo y la confianza no capturan la intención y la validación.

3. Plan en la issue o el PR, cambios en commits y validación en verificaciones e informes **[CORRECT]**

   Cada etapa del ciclo de vida tiene una representación duradera e inspectable.

4. La ejecución se documenta antes de la planificación; los pruebas son opcionales si se revisan

   La revisión no elimina la necesidad de una validación adecuada.

**Concept:** cartografía de artefactos del ciclo de vida

**Authored coaching hints:**

- ¿Qué artefacto responde por qué, qué cambió y cómo se verificó?
- ¿Se pueden examinar esas respuestas de forma independiente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe de agentes utiliza os PRs do GitHub como plano de controle. Qual correspondência separa melhor intenção, implementação e evidência?

1. Os três só existem em uma resposta final ao bate-papo.

   O chat efêmero não fornece o mesmo registro revisível.

2. A intenção é deduzida dos nomes dos arquivos; a evidência é a confiança do agente

   Os nomes de arquivos e a confiança não capturam a intenção e a validação.

3. Plano na issue ou no PR, alterações em commits e validação em verificações e relatórios **[CORRECT]**

   Cada fase do ciclo de vida tem uma representação durável e inspecionável.

4. A implementação é documentada antes do planejamento; os testes são opcionais se revisados

   A revisão não elimina a necessidade de uma validação adequada.

**Concept:** mapeamento de artefatos do ciclo de vida

**Authored coaching hints:**

- Que artefato responde por quê, o que mudou e como foi verificado?
- Podem essas respostas ser examinadas de forma independente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-016:b041dee9eefbac96327d65c31fbd2c24534d3f796da08920bfde97b34b66d1dd -->
## Question 16: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-016`

**Content revision:** `b041dee9eefbac96327d65c31fbd2c24534d3f796da08920bfde97b34b66d1dd`

### English

A team wants an agent to produce implementation plans but never execute them. Which custom-agent design best expresses that role?

1. A general-purpose agent with deployment credentials

   Deployment authority is unnecessary for planning.

2. An execution agent whose name contains 'planner'

   A role name does not restrict capabilities.

3. An unrestricted agent with a note to avoid changes

   Advisory text is weaker than an actual capability boundary.

4. A focused planning prompt and explicit read-only tool access **[CORRECT]**

   The prompt defines responsibility and the tools enforce its action limits.

**Concept:** Role and capability alignment

**Authored coaching hints:**

- What could this role need to inspect?
- Which capability would contradict its stated responsibility?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que un agente elabore planes de implementación pero nunca los ejecute. ¿Qué diseño de agente personalizado expresa mejor ese papel?

1. Un agente de uso general con credenciales de despliegue

   La autoridad de despliegue no es necesaria para la planificación.

2. Un agente ejecutivo cuyo nombre contiene "planificador"

   Un nombre de rol no limita las capacidades.

3. Un agente sin restricciones con una nota para evitar cambios

   El texto de asesoramiento es más débil que un límite de capacidad real.

4. Un prompt centrado en la planificación y el acceso explícito a herramientas de solo lectura **[CORRECT]**

   El prompt define la responsabilidad y las herramientas hacen cumplir sus límites de acción.

**Concept:** Alineación de funciones y capacidades

**Authored coaching hints:**

- ¿Qué podría necesitar inspeccionar este papel?
- ¿Qué capacidad contradeciría su responsabilidad declarada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer um agente para produzir planos de implementação, mas nunca executá-los. Qual design de agente personalizado expressa melhor esse papel?

1. Agente de finalidade geral com credenciais de implantação

   A autoridade de implantação não é necessária para o planejamento.

2. Um agente de execução cujo nome contém "planificador"

   Um nome de papel não restringe as capacidades.

3. Um agente sem restrições com uma nota para evitar alterações

   O texto consultivo é mais fraco do que um limite de capacidade real.

4. Um prompt focado no planejamento e acesso explícito apenas a ferramentas de leitura **[CORRECT]**

   O prompt define a responsabilidade e as ferramentas reforçam os seus limites de ação.

**Concept:** Alinhamento de funções e capacidades

**Authored coaching hints:**

- O que é que esse papel precisa inspecionar?
- Que capacidade contradizia a sua declaração de responsabilidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-017:4116bcd404adea184152b655f6af2cb0fc9960af91e5e7cc3714372e386b5e17 -->
## Question 17: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-017`

**Content revision:** `4116bcd404adea184152b655f6af2cb0fc9960af91e5e7cc3714372e386b5e17`

### English

An agent proposes a refactor based on an assumption that a legacy API has no consumers. What is the best preexecution plan review response?

1. Require evidence about consumers or revise the compatibility approach **[CORRECT]**

   A critical assumption needs validation before it drives destructive design.

2. Approve because the assumption is clearly written

   Visibility makes an assumption reviewable, not true.

3. Approve if removing the API reduces complexity

   Complexity reduction does not justify breaking unknown consumers.

4. Ask for more implementation detail without checking the assumption

   Implementation detail cannot repair an unsupported premise.

**Concept:** Assumption validation

**Authored coaching hints:**

- Which premise could invalidate the entire plan?
- What evidence would distinguish a safe removal from a breaking change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente propone un refactor basado en la suposición de que un legado API no tiene consumidores. ¿Cuál es la mejor respuesta a la revisión del plan previo a la ejecución?

1. Requerir pruebas sobre los consumidores o revisar el enfoque de compatibilidad **[CORRECT]**

   Una suposición crítica necesita validación antes de impulsar un diseño destructivo.

2. Aprobar porque la suposición está claramente escrita

   La visibilidad hace que una suposición sea revisable, no verdadera.

3. Aprobar si la eliminación del API reduce la complejidad

   La reducción de la complejidad no justifica romper con los consumidores desconocidos.

4. Solicitar más detalles de implementación sin comprobar la suposición

   Los detalles de implementación no pueden reparar una premisa no respaldada.

**Concept:** Validación de suposiciones

**Authored coaching hints:**

- ¿Qué premisa podría invalidar todo el plan?
- ¿Qué evidencia distinguiría una remoción segura de un cambio repentino?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente propõe um refator baseado no pressuposto de que um legado API não tem consumidores. Qual é a melhor resposta à revisão do plano de pré-execução?

1. Exigir provas sobre os consumidores ou revisar a abordagem de compatibilidade **[CORRECT]**

   Uma suposição crítica precisa de validação antes de conduzir um projeto destrutivo.

2. Aprova porque a suposição está claramente escrita

   A visibilidade torna uma suposição revisível, não verdadeira.

3. Aprova se a remoção do API reduz a complexidade

   A redução da complexidade não justifica a quebra de consumidores desconhecidos.

4. Pedir mais detalhes de implementação sem verificar a suposição

   Detalhes de implementação não podem reparar uma premissa não apoiada.

**Concept:** Validação da suposição

**Authored coaching hints:**

- Que premissa poderia invalidar todo o plano?
- Que evidência distinguiria uma remoção segura de uma mudança radical?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-018:d539e59326d8543429b1e5efede7361087aa0ff2898675d85faa4b692d20eace -->
## Question 18: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-018`

**Content revision:** `d539e59326d8543429b1e5efede7361087aa0ff2898675d85faa4b692d20eace`

### English

A repository requires owner approval for workflow changes. Adding CODEOWNERS entries alone has not blocked unreviewed merges. What architectural control is missing?

1. A larger workflow log-retention period

   Retention improves auditability, not approval enforcement.

2. An applicable rule requiring Code Owner review **[CORRECT]**

   Ownership must be coupled with an enforced review requirement.

3. A comment asking agents to contact owners

   A comment does not enforce the merge boundary.

4. A task label naming the affected team

   Labels help routing but do not block acceptance.

**Concept:** Ownership versus enforcement

**Authored coaching hints:**

- What turns a reviewer suggestion into a required decision?
- Which boundary actually accepts the code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio requiere la aprobación del propietario para cambios en el flujo de trabajo. La adición de las entradas CODEOWNERS por sí sola no ha bloqueado las fusiones no revisadas. ¿Qué control arquitectónico falta?

1. Periodo de retención del registro de flujo de trabajo más largo

   La retención mejora la auditabilidad, no la ejecución de la aprobación.

2. Una regla aplicable que requiera la revisión del propietario del código **[CORRECT]**

   La propiedad debe estar acompañada de un requisito de revisión obligatoria.

3. Un comentario pidiendo a los agentes que se pongan en contacto con los propietarios

   Un comentario no impone el límite de fusión.

4. Una etiqueta de tarea que nombra al equipo afectado

   Las etiquetas ayudan al enrutamiento pero no bloquean la aceptación.

**Concept:** Responsabilidad y aplicación efectiva de controles

**Authored coaching hints:**

- ¿Qué hace que una sugerencia del revisor sea una decisión requerida?
- ¿Qué límite acepta el código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório requer a aprovação do proprietário para alterações no fluxo de trabalho. A adição de entradas CODEOWNERS sozinha não impediu merges não revisadas. Que controle arquitetônico falta?

1. Um maior período de retenção de registros de fluxo de trabalho

   A retenção melhora a auditabilidade, não a aplicação da aprovação.

2. Regra aplicável que exige a revisão do proprietário do código **[CORRECT]**

   A propriedade deve estar associada a um requisito de revisão obrigatória.

3. Um comentário pedindo aos agentes que contactem os proprietários

   Um comentário não impõe o limite do merge.

4. Uma etiqueta de tarefa com o nome da equipe afetada

   As etiquetas ajudam a encaminhar, mas não bloqueiam a aceitação.

**Concept:** Responsabilidade e aplicação efetiva de controles

**Authored coaching hints:**

- O que torna uma sugestão de revisor uma decisão necessária?
- Qual é a fronteira que aceita o código?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-019:96b86a160fb9ffcba80efe1b9a738fb76ad228177edd5c8ecdd865126e9156a3 -->
## Question 19: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-019`

**Content revision:** `96b86a160fb9ffcba80efe1b9a738fb76ad228177edd5c8ecdd865126e9156a3`

### English

A PR description claims all tests passed but contains no run or commit references. What observability requirement would most improve accountability?

1. Require the agent to repeat the claim in its final message

   Repeating an unsupported claim adds no provenance.

2. Record only aggregate monthly pass rates

   Monthly aggregates cannot validate this PR revision.

3. Link validation evidence to the precise run and code revision **[CORRECT]**

   Run and revision linkage makes the claim independently inspectable.

4. Include the model temperature in the PR title

   Generation settings do not demonstrate test execution.

**Concept:** Evidence provenance

**Authored coaching hints:**

- How could a reviewer verify the claim without trusting the author?
- Could the tests have run against older code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La descripción de un PR afirma que todas las pruebas pasaron, pero no incluye referencias a ejecuciones ni commits. ¿Qué requisito de observabilidad mejoraría más la rendición de cuentas?

1. Exigir al agente que repita la reclamación en su mensaje final

   La repetición de un reclamo no respaldado no añade ninguna procedencia.

2. Registrar únicamente las tasas de aprobación mensuales agregadas

   Los agregados mensuales no pueden validar esta revisión PR.

3. Vincular la evidencia de validación con la ejecución y la revisión exactas del código **[CORRECT]**

   La vinculación entre ejecución y revisión hace que la reclamación pueda ser inspeccionada de forma independiente.

4. Incluya la temperatura del modelo en el título PR

   Las configuraciones de generación no demuestran la ejecución de los pruebas.

**Concept:** Procedencia de la evidencia

**Authored coaching hints:**

- ¿Cómo podría un revisor verificar la afirmación sin confiar en el autor?
- ¿Podrían las pruebas haber corrido contra el código más antiguo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A descrição de um PR afirma que todos os testes passaram, mas não inclui referências a execuções nem commits. Qual requisito de observabilidade mais melhoraria a prestação de contas?

1. Exigir que o agente repita a alegação na sua mensagem final

   A repetição de uma alegação não fundamentada não adiciona qualquer origem.

2. Registrar apenas as taxas de aprovação mensais agregadas

   Os agregados mensais não podem validar esta revisão do PR.

3. Vincular as evidências de validação à execução e à revisão exatas do código **[CORRECT]**

   A correlação entre execução e revisão torna a alegação inspecionável de forma independente.

4. Incluir a temperatura do modelo no título PR

   As configurações de geração não demonstram a execução do teste.

**Concept:** proveniência das provas

**Authored coaching hints:**

- Como poderia um revisor verificar a afirmação sem confiar no autor?
- Os testes poderiam ter corrido contra um código mais antigo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-020:2e8c50d2acdb18b3bd4d710f0cd31f302885e050a57ef4d39018c9ee17a3707e -->
## Question 20: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-020`

**Content revision:** `2e8c50d2acdb18b3bd4d710f0cd31f302885e050a57ef4d39018c9ee17a3707e`

### English

A task owner wants to automate release-note drafting but retain human responsibility for public commitments. Which division of responsibility fits?

1. The agent drafts and publishes whenever prose is fluent

   Fluency does not establish authorization for public claims.

2. The human supplies only formatting preferences

   Formatting guidance does not cover commitment risk.

3. The agent decides which unreleased promises are acceptable

   Public commitments require delegated business judgment.

4. The agent drafts from approved changes; an authorized owner approves publication **[CORRECT]**

   Drafting is bounded while publication retains the appropriate decision owner.

**Concept:** Human responsibility boundaries

**Authored coaching hints:**

- Which step creates an external commitment?
- What can be automated without transferring that authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de tarea quiere automatizar la redacción de notas de lanzamiento, pero mantiene la responsabilidad humana por los compromisos públicos. ¿Qué división de responsabilidades encaja?

1. El agente redacta y publica siempre que la prosa es fluida

   La fluidez no establece la autorización de las reclamaciones públicas.

2. Los humanos sólo proporcionan preferencias de formato

   Las orientaciones de formato no cubren el riesgo de compromiso.

3. El agente decide cuáles promesas no publicadas son aceptables

   Los compromisos públicos requieren un juicio empresarial delegado.

4. El agente escribe un borrador basado en cambios aprobados; un propietario autorizado aprueba la publicación **[CORRECT]**

   La redacción está limitada mientras que la publicación retiene al titular de la decisión apropiada.

**Concept:** Fronteras de la responsabilidad humana

**Authored coaching hints:**

- ¿Qué paso crea un compromiso externo?
- ¿Qué se puede automatizar sin transferir esa autoridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário de tarefa quer automatizar a elaboração de notas de lançamento, mas mantém a responsabilidade humana pelos compromissos públicos. Que divisão de responsabilidades se encaixa?

1. O agente elabora e publica sempre que a prosa é fluente

   A fluência não estabelece autorização para reivindicações públicas.

2. O ser humano fornece apenas preferências de formatamento

   A orientação de formatamento não abrange o risco de compromisso.

3. O agente decide quais promessas não divulgadas são aceitáveis

   Os compromissos públicos exigem um julgamento empresarial delegado.

4. O agente escreve um esboço baseado em alterações aprovadas; um proprietário autorizado aprova a publicação **[CORRECT]**

   A redação é limitada enquanto a publicação mantém o titular da decisão adequada.

**Concept:** Limites da responsabilidade humana

**Authored coaching hints:**

- Qual passo cria um compromisso externo?
- O que pode ser automatizado sem transferir essa autoridade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/>

<!-- certification-coach-question:agentic-021:bcd0dcf11ef991c595c2930d99510f85b2f4e10c2edabe8ee7b5a11eb189bf3c -->
## Question 21: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-021`

**Content revision:** `bcd0dcf11ef991c595c2930d99510f85b2f4e10c2edabe8ee7b5a11eb189bf3c`

### English

A team defines agent success as 'produce many merged PRs.' Agents begin splitting trivial changes to increase the score. What should the architecture emphasize instead?

1. User outcomes and quality constraints alongside delivery measures **[CORRECT]**

   Balanced outcome measures discourage optimizing activity instead of value.

2. A minimum number of lines in each PR

   Line minimums create another gameable activity target.

3. The number of agent tool calls per day

   Tool calls measure activity and can reward inefficiency.

4. A rule accepting only agent-authored reviews

   Author restrictions do not align work with user outcomes.

**Concept:** Avoiding proxy-driven anti-patterns

**Authored coaching hints:**

- Can the chosen score rise without benefiting users?
- What prevents speed from masking quality regressions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo define el éxito del agente como "producir muchos PRs fusionados". Los agentes comienzan a dividir los cambios triviales para aumentar el puntaje. ¿Qué debería enfatizar la arquitectura en su lugar?

1. Los resultados de los usuarios y las limitaciones de calidad junto con las medidas de entrega **[CORRECT]**

   Las medidas de resultados equilibrados desalientan la optimización de la actividad en lugar del valor.

2. Un número mínimo de líneas en cada PR

   Los mínimos de línea crean otro objetivo de actividad jugable.

3. El número de llamadas de herramientas de agentes por día

   Las llamadas de herramienta miden la actividad y pueden recompensar la ineficiencia.

4. Una regla que sólo acepta las revisiones de los agentes

   Las restricciones de autor no alinean el trabajo con los resultados de los usuarios.

**Concept:** Evitar los antipatrones impulsados por proxy

**Authored coaching hints:**

- ¿Puede elevarse la puntuación elegida sin beneficiar a los usuarios?
- ¿Qué impide que la velocidad enmasque las regresiones de calidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe define o sucesso do agente como "produzir muitos PRs mesclados". Os agentes começam a dividir as mudanças triviais para aumentar a pontuação. O que é que a arquitetura deve enfatizar?

1. Resultados dos usuários e restrições de qualidade, juntamente com as medidas de entrega **[CORRECT]**

   As medidas equilibradas de resultados desencorajam a otimização da atividade em vez do valor.

2. Número mínimo de linhas em cada PR

   Os mínimos de linha criam outro alvo de atividade jogável.

3. Número de chamadas de ferramentas de agentes por dia

   As chamadas de ferramenta medem a atividade e podem recompensar a ineficiência.

4. Uma regra que aceita apenas avaliações de agentes

   As restrições de autor não alinham o trabalho com os resultados dos usuários.

**Concept:** Evitar antipatrões controlados por proxy

**Authored coaching hints:**

- A pontuação escolhida pode aumentar sem beneficiar os usuários?
- O que impede a velocidade de mascarar regressões de qualidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-022:28dd412e3450481652f3a85b29cffe80ca7f162bba5d168d7a85798371d1067c -->
## Question 22: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-022`

**Content revision:** `28dd412e3450481652f3a85b29cffe80ca7f162bba5d168d7a85798371d1067c`

### English

An agent is asked to implement an issue, but its acceptance criteria contradict an approved architecture decision. What should happen before action?

1. Silently follow the newer-looking text

   Apparent recency does not resolve authority or intent.

2. Surface the conflict and obtain an authoritative scope decision **[CORRECT]**

   A scope conflict requires an explicit decision before implementation.

3. Combine both designs even if they are incompatible

   Combining incompatible requirements does not make them satisfiable.

4. Ignore the issue because architecture documents always take precedence

   The documents may need revision; unilateral dismissal is not resolution.

**Concept:** Conflicting task inputs

**Authored coaching hints:**

- What would make the next action defensible to both owners?
- Is the conflict factual, or does it require a decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se pide a un agente que implemente un tema, pero sus criterios de aceptación contradicen una decisión de arquitectura aprobada. ¿Qué debe suceder antes de la acción?

1. Sigue en silencio el texto de aspecto más nuevo

   La apariencia reciente no resuelve la autoridad o la intención.

2. Informar el conflicto y obtener una decisión de alcance del propietario autorizado **[CORRECT]**

   Un conflicto de alcance requiere una decisión explícita antes de su aplicación.

3. Combine ambos diseños, incluso si son incompatibles

   La combinación de requisitos incompatibles no los hace satisfactorios.

4. Ignora el problema porque los documentos de arquitectura siempre tienen prioridad

   Es posible que los documentos necesiten ser revisados; el despido unilateral no es una resolución.

**Concept:** Ingresos de tareas en conflicto

**Authored coaching hints:**

- ¿Qué haría que la próxima acción sea defendible para ambos dueños?
- ¿El conflicto es real, o requiere una decisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente é solicitado a implementar uma questão, mas os critérios de aceitação contradizem uma decisão de arquitetura aprovada. O que deve acontecer antes da ação?

1. Siga em silêncio o texto mais novo

   A aparente recência não resolve a autoridade ou a intenção.

2. Relatar o conflito e obter uma decisão de escopo do proprietário autorizado **[CORRECT]**

   Um conflito de escopo requer uma decisão explícita antes da sua aplicação.

3. Combine os dois desenhos, mesmo que sejam incompatíveis

   A combinação de requisitos incompatíveis não os torna satisfatíveis.

4. Ignore a questão porque os documentos de arquitetura sempre têm prioridade

   Os documentos podem necessitar de revisão; a rejeição unilateral não é resolução.

**Concept:** Introduções de tarefas em conflito

**Authored coaching hints:**

- O que tornaria a próxima ação defensivel para ambos os proprietários?
- O conflito é fatual, ou requer uma decisão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-023:969418e64aa2f0026de49cbd1d03e6639a5455c40d0fe04b015736a77492cf2b -->
## Question 23: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-023`

**Content revision:** `969418e64aa2f0026de49cbd1d03e6639a5455c40d0fe04b015736a77492cf2b`

### English

An agent finishes implementation but discovers that a required scanner is unavailable. Its task contract requires scan evidence. What completion state is appropriate?

1. Complete, because the agent cannot control scanner availability

   An external blocker does not satisfy the missing requirement.

2. Complete, if unit tests passed

   Unit tests do not replace the specified security signal.

3. Implementation prepared, validation blocked with an escalation record **[CORRECT]**

   Explicit partial state preserves progress without overstating readiness.

4. Complete, with an estimated scanner result

   Estimated results are not executed evidence.

**Concept:** Completion and blocked-state contracts

**Authored coaching hints:**

- Which deliverable exists, and which prerequisite remains unmet?
- How can the handoff preserve progress honestly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente termina la implementación pero descubre que un escáner requerido no está disponible. Su contrato de tarea requiere pruebas de escaneo. ¿Qué estado de finalización es apropiado?

1. Completo, porque el agente no puede controlar la disponibilidad del escáner

   Un bloqueador externo no satisface el requisito faltante.

2. Completo, si se han aprobado los pruebas unitarios

   Los pruebas unitarios no sustituyen la señal de seguridad especificada.

3. Preparación de la implementación, validación bloqueada con registro de escalada **[CORRECT]**

   El estado parcial explícito preserva el progreso sin exagerar la preparación.

4. Completo, con un resultado estimado del escáner

   Los resultados estimados no son pruebas ejecutadas.

**Concept:** Cumplimiento y contratos de estados bloqueados

**Authored coaching hints:**

- ¿Qué entregable existe, y qué requisito previo sigue sin cumplirse?
- ¿Cómo puede la entrega preservar el progreso con honestidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente termina a implementação, mas descobre que um scanner necessário não está disponível. O seu contrato de tarefa requer evidências de análise de código. Que estado de conclusão é apropriado?

1. Completo, porque o agente não pode controlar a disponibilidade do scanner

   Um bloqueador externo não satisfaz o requisito faltante.

2. Completos, se os testes unitários tiverem sido aprovados

   Os testes unitários não substituem o sinal de segurança especificado.

3. Preparação da implementação, validação bloqueada com registro de escalada **[CORRECT]**

   O estado parcial explícito preserva o progresso sem exagerar a prontidão.

4. Completo, com um resultado estimado do scanner

   Os resultados estimados não são provas executadas.

**Concept:** Conclusão e contratos de Estado bloqueado

**Authored coaching hints:**

- Que entrega existe e qual pré-requisito permanece insatisfeito?
- Como a transferência pode preservar o progresso com honestidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-024:d7f307637e5611545afa6a3c27a80ee5e6cd63fb40e8716de58495d4c333724d -->
## Question 24: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-024`

**Content revision:** `d7f307637e5611545afa6a3c27a80ee5e6cd63fb40e8716de58495d4c333724d`

### English

A team considers replacing ordinary issue, PR, and check workflows with a separate agent-only approval channel. What is the strongest reason to retain standard development artifacts?

1. They guarantee that generated code has no defects

   Development artifacts support review but cannot guarantee correctness.

2. They eliminate the need to define agent scope

   Scope must still be defined explicitly.

3. They make all agent actions reversible

   Some external effects remain irreversible.

4. They keep ownership, evidence, and acceptance in the established control plane **[CORRECT]**

   Shared controls preserve inspectability and consistent engineering governance.

**Concept:** Standard tooling integration

**Authored coaching hints:**

- Where do existing reviewers already make acceptance decisions?
- What is lost when agent work is reviewed outside that system?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo considera reemplazar los flujos habituales de issues, PR y verificaciones por un canal de aprobación separado exclusivo para agentes. ¿Cuál es el motivo más importante para conservar los artefactos estándar de desarrollo?

1. Garantizan que el código generado no tiene defectos

   Los artefactos de desarrollo apoyan la revisión, pero no pueden garantizar su exactitud.

2. Eliminan la necesidad de definir el alcance del agente

   El alcance aún debe definirse explícitamente.

3. Hacen reversible todas las acciones del agente.

   Algunos efectos externos siguen siendo irreversibles.

4. Ellos mantienen la propiedad, la evidencia y la aceptación en el plano de control establecido **[CORRECT]**

   Los controles compartidos preservan la inspección y una gobernanza de ingeniería coherente.

**Concept:** Integración de herramientas estándar

**Authored coaching hints:**

- ¿Dónde ya toman las decisiones de aceptación los revisores existentes?
- ¿Qué se pierde cuando el trabajo de los agentes es revisado fuera de ese sistema?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe considera substituir os fluxos habituais de issues, PRs e verificações por um canal de aprovação separado, exclusivo para agentes. Qual é o motivo mais importante para manter os artefatos padrão de desenvolvimento?

1. Eles garantem que o código gerado não tem defeitos

   Os artefatos de desenvolvimento apoiam a revisão, mas não podem garantir a correção.

2. Eliminam a necessidade de definir o escopo do agente

   O escopo deve ainda ser explicitamente definido.

3. Tornam todas as ações do agente reversíveis.

   Alguns efeitos externos permanecem irreversíveis.

4. Eles mantêm a propriedade, evidências e aceitação no plano de controle estabelecido **[CORRECT]**

   Os controles compartilhados preservam a inspecionabilidade e a governança de engenharia consistente.

**Concept:** Integração padrão de ferramentas

**Authored coaching hints:**

- Onde os revisores existentes já tomam decisões de aceitação?
- O que se perde quando o trabalho dos agentes é revisado fora desse sistema?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/>

<!-- certification-coach-question:agentic-025:fc1d1292bec2886a9819ed69aad75242edb59e13330358c7850d6e9a768b6aa1 -->
## Question 25: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-025`

**Content revision:** `fc1d1292bec2886a9819ed69aad75242edb59e13330358c7850d6e9a768b6aa1`

### English

An agent needs to explore an unfamiliar repository before estimating a change. The estimate must precede implementation approval. What is the best initial phase?

1. Bounded read-only discovery with assumptions and findings recorded **[CORRECT]**

   Discovery can reduce uncertainty without crossing the execution gate.

2. Create speculative code changes to discover the scope

   Speculative edits violate the required phase boundary.

3. Grant deployment access to improve estimation accuracy

   Deployment capability is not needed to inspect repository structure.

4. Skip exploration and commit to a fixed implementation plan

   An uninformed estimate hides rather than manages uncertainty.

**Concept:** Discovery before commitment

**Authored coaching hints:**

- Which uncertainty can be reduced without changing the system?
- What artifact would make an estimate reviewable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente necesita explorar un repositorio desconocido antes de estimar un cambio. La estimación debe preceder a la aprobación de la aplicación. ¿Cuál es la mejor fase inicial?

1. Investigación de lectura exclusiva dentro de límites definidos, registro de suposiciones y conclusiones **[CORRECT]**

   El descubrimiento puede reducir la incertidumbre sin cruzar la puerta de ejecución.

2. Crear cambios de código especulativos para descubrir el alcance

   Las ediciones especulativas violan el límite de fase requerido.

3. Acceso al despliegue de subvenciones para mejorar la precisión de las estimaciones

   La capacidad de despliegue no es necesaria para inspeccionar la estructura del repositorio.

4. Skip exploración y commit a un plan de ejecución fijo

   Una estimación no informada oculta más que maneja la incertidumbre.

**Concept:** Descubrimiento antes de compromiso

**Authored coaching hints:**

- ¿Qué incertidumbre se puede reducir sin cambiar el sistema?
- ¿Qué artefacto haría posible revisar una estimación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente precisa explorar um repositório desconhecido antes de estimar uma mudança. A estimativa deve preceder a aprovação da execução. Qual é a melhor fase inicial?

1. Investigação de somente leitura dentro de limites definidos, registro de suposições e constatações **[CORRECT]**

   A descoberta pode reduzir a incerteza sem atravessar o portão de execução.

2. Crie alterações de código especulativas para descobrir o escopo

   As edições especulativas violam o limite de fase exigido.

3. Acesso à implantação de subvenções para melhorar a precisão das estimativas

   Não é necessária capacidade de implantação para inspecionar a estrutura do repositório.

4. Salto da exploração e do commit para um plano de execução fixo

   Uma estimativa não informada esconde, em vez de gerir, a incerteza.

**Concept:** Descoberta antes do compromisso

**Authored coaching hints:**

- Que incerteza pode ser reduzida sem mudar o sistema?
- Que artefato tornaria uma estimativa revisível?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-026:05249951cc616f93e6c0c09e40c15199ef035ad0dbf5fd6e10760cd31d294bd7 -->
## Question 26: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-026`

**Content revision:** `05249951cc616f93e6c0c09e40c15199ef035ad0dbf5fd6e10760cd31d294bd7`

### English

A bug-fixing agent is allowed to revise a PR branch but repeatedly fails the same required check. What should its workflow define in advance?

1. Unlimited iterations until the check passes

   Unlimited loops consume resources without guaranteeing convergence.

2. A bounded iteration budget and evidence-rich escalation **[CORRECT]**

   A budget and handoff make persistent failures manageable.

3. Automatic deletion of the failing check

   Removing a required signal hides the failure.

4. A fallback that marks all remaining checks successful

   Synthetic success misrepresents the validation outcome.

**Concept:** Bounded autonomous iteration

**Authored coaching hints:**

- What distinguishes useful iteration from a stalled loop?
- What should a human receive when automated recovery stops?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se permite a un agente de corrección de errores revisar una rama de PR pero falla repetidamente en la misma verificación requerida. ¿Qué debe definir de antemano su flujo de trabajo?

1. Iteraciones ilimitadas hasta que el cheque pase

   Los bucles ilimitados consumen recursos sin garantizar la convergencia.

2. Un presupuesto limitado de iteración y una escalada rica en pruebas **[CORRECT]**

   Un presupuesto y una entrega hacen que los fracasos persistentes sean manejables.

3. Eliminación automática de la verificación de fallas

   Eliminar una señal requerida oculta el fallo.

4. Un retroceso que marca todos los controles restantes exitosos

   El éxito sintético representa incorrectamente el resultado de la validación.

**Concept:** Iteración autónoma limitada

**Authored coaching hints:**

- ¿Qué distingue la iteración útil de un bucle estancado?
- ¿Qué debe recibir un ser humano cuando la recuperación automática se detiene?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de correção de erros pode revisar um branch PR, mas falha repetidamente na mesma verificação requerida. O que deve definir com antecedência o seu fluxo de trabalho?

1. Iterações ilimitadas até o cheque passar

   Os circuitos ilimitados consomem recursos sem garantir a convergência.

2. Um orçamento limitado de iteração e uma escalada rica em evidências **[CORRECT]**

   Um orçamento e uma transferência fazem com que as falhas persistentes sejam gerenciáveis.

3. Eliminação automática da verificação de falha

   Remover um sinal requerido oculta a falha.

4. Um retrocesso que marca o sucesso de todas as verificações restantes

   O sucesso sintético distorce o resultado da validação.

**Concept:** Iteração autónoma limitada

**Authored coaching hints:**

- O que distingue a iteração útil de um ciclo paralisado?
- O que deve receber um ser humano quando a recuperação automática parar?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-027:6d21a3e56db7490ff382b6818f0a8543ff85cb0120e8d2e929f72f95243803bf -->
## Question 27: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-027`

**Content revision:** `6d21a3e56db7490ff382b6818f0a8543ff85cb0120e8d2e929f72f95243803bf`

### English

A team assigns agents to every SDLC stage solely because automation is available. Which selection principle is more appropriate?

1. Prefer tasks with the largest unrestricted blast radius

   Large unrestricted impact increases supervision risk.

2. Delegate stages where no acceptance criteria can be written

   Unverifiable goals are poor delegation candidates.

3. Match bounded tasks to capabilities, verifiable outcomes, and risk controls **[CORRECT]**

   Capability, evidence, and risk alignment support reliable delegation.

4. Automate only tasks that require no context

   Useful tasks can require context when it is supplied and scoped.

**Concept:** Selecting agent-suitable work

**Authored coaching hints:**

- What makes a delegated result independently assessable?
- Can the task be constrained without eliminating its usefulness?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo asigna agentes a cada etapa de SDLC únicamente porque la automatización está disponible. ¿Qué principio de selección es más apropiado?

1. Preferir tareas con el mayor radio de explosión no restringido

   El gran impacto no restringido aumenta el riesgo de supervisión.

2. Fases de delegación en las que no se pueden escribir criterios de aceptación

   Los objetivos no verificables son los candidatos de delegación pobres.

3. Asignar tareas delimitadas según las capacidades, los resultados verificables y los controles de riesgo **[CORRECT]**

   La capacidad, la evidencia y la alineación de riesgos apoyan una delegación confiable.

4. Automatizar sólo tareas que no requieren contexto

   Las tareas útiles pueden requerir contexto cuando se proporcionan y alcanzan el alcance.

**Concept:** Selección de trabajo adecuado para el agente

**Authored coaching hints:**

- ¿Qué hace que un resultado delegado pueda ser evaluado de forma independiente?
- ¿Se puede limitar la tarea sin eliminar su utilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe atribui agentes a cada estágio do SDLC apenas porque a automação está disponível. Qual princípio de seleção é mais apropriado?

1. Preferir tarefas com o maior raio de explosão ilimitado

   Um grande impacto ilimitado aumenta o risco de supervisão.

2. Etapas de delegação em que não podem ser escritos critérios de aceitação

   Objetivos não verificáveis são candidatos pobres à delegação.

3. Combinar tarefas limitadas com capacidades, resultados verificáveis e controles de risco **[CORRECT]**

   A capacidade, a evidência e o alinhamento dos riscos apoiam a delegação confiável.

4. Automatizar apenas tarefas que não exigem contexto

   As tarefas úteis podem exigir contexto quando fornecido e escopo.

**Concept:** Seleção de trabalho adequado ao agente

**Authored coaching hints:**

- O que faz com que um resultado delegado possa ser avaliado independentemente?
- Pode-se limitar a tarefa sem eliminar a sua utilidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-028:cbf207d44077c14aa78b39bac8275454a0966614aafa2d4141a28cd0e4caa54f -->
## Question 28: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-028`

**Content revision:** `cbf207d44077c14aa78b39bac8275454a0966614aafa2d4141a28cd0e4caa54f`

### English

A deployment plan says 'use the current branch when approved next week.' Why should the reviewer request a more precise execution reference?

1. Branch names cannot be used in GitHub workflows

   Branches are usable references but can be mutable.

2. Approval automatically freezes all repository branches

   Approval does not inherently freeze a branch.

3. Commit references remove the need for testing

   Pinning identifies code; it does not validate it.

4. The branch can change between review and execution **[CORRECT]**

   An explicit revision binds execution to the reviewed code state.

**Concept:** Binding plans to immutable revisions

**Authored coaching hints:**

- Will the same name necessarily identify the same code later?
- What exactly did the reviewer inspect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un plan de despliegue indica: 'usar la rama actual cuando se apruebe la próxima semana'. ¿Por qué debe el revisor solicitar una referencia de ejecución más precisa?

1. No se pueden utilizar nombres de ramas en los flujos de trabajo GitHub

   Las ramas son referencias útiles pero pueden ser mutantes.

2. La aprobación congela automáticamente todas las ramas del repositorio

   La aprobación no congela inherentemente una rama.

3. Las referencias de compromiso eliminan la necesidad de pruebas

   Pinning identifica el código; no lo valida.

4. La rama puede cambiar entre revisión y ejecución **[CORRECT]**

   Una revisión explícita vincula la ejecución al estado de código revisado.

**Concept:** Planes vinculantes a las revisiones inmutables

**Authored coaching hints:**

- ¿El mismo nombre necesariamente identificará el mismo código más tarde?
- ¿Qué es exactamente lo que inspeccionó el revisor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um plano de implantação diz 'utilizar o branch atual quando aprovado na próxima semana'. Por que o revisor deve solicitar uma referência de execução mais precisa?

1. Os nomes de sucursais não podem ser utilizados em fluxos de trabalho GitHub

   Os branches são referências utilizáveis, mas podem ser mutáveis.

2. A aprovação congela automaticamente todos os branches do repositório

   A aprovação não congela inerentemente um branch.

3. Referências de compromisso remover a necessidade de testes

   Pinning identifica o código; não o valida.

4. O branch pode mudar entre revisão e execução **[CORRECT]**

   Uma revisão explícita vincula a execução ao estado de código revisto.

**Concept:** Plans vinculativos a revisões imutáveis

**Authored coaching hints:**

- Será que o mesmo nome necessariamente identificará o mesmo código mais tarde?
- O que exatamente o revisor inspecionou?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-029:3371adee318842b00b13158465264f32a09e5e97ab38adb1d1960a10c0e5a5ed -->
## Question 29: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-029`

**Content revision:** `3371adee318842b00b13158465264f32a09e5e97ab38adb1d1960a10c0e5a5ed`

### English

An agent-generated PR passes checks but offers no explanation for a new dependency. What should the architectural review focus on?

1. Whether the dependency is necessary, scoped, and consistent with constraints **[CORRECT]**

   Passing checks does not justify an architectural or supply-chain change.

2. Whether the agent used a recognizable package name

   Recognition is not evidence of necessity or suitability.

3. Whether the PR was generated quickly

   Speed does not establish design quality.

4. Whether the dependency increases the repository's package count

   Package count alone does not decide architectural fit.

**Concept:** Architectural review beyond green checks

**Authored coaching hints:**

- Which task constraint might a new dependency affect?
- Does a successful build explain why the design changed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un PR generado por un agente pasa los controles pero no ofrece ninguna explicación para una nueva dependencia. ¿En qué debe centrarse la revisión arquitectónica?

1. Si la dependencia es necesaria, alcanzada y consistente con las restricciones **[CORRECT]**

   La aprobación de los controles no justifica un cambio arquitectónico o de la cadena de suministro.

2. Si el agente utilizó un nombre de paquete reconocible

   El reconocimiento no es evidencia de necesidad o idoneidad.

3. Si el PR se generó rápidamente

   La velocidad no establece la calidad del diseño.

4. Si la dependencia aumenta el número de paquetes del repositorio

   El número de paquetes por sí solo no determina la adecuación arquitectónica.

**Concept:** Revisión arquitectónica más allá de los controles ecológicos

**Authored coaching hints:**

- ¿Qué limitación de tareas podría afectar una nueva dependencia?
- ¿Una construcción exitosa explica por qué el diseño cambió?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um PR gerado por agente passa os controles, mas não oferece nenhuma explicação para uma nova dependência. Em que se deve focar a revisão arquitetônica?

1. Se a dependência é necessária, abrangida e consistente com as restrições **[CORRECT]**

   A aprovação dos controles não justifica uma alteração arquitectónica ou da cadeia de abastecimento.

2. Se o agente utilizou um nome de pacote reconhecível

   O reconhecimento não é prova de necessidade ou adequação.

3. Se o PR foi gerado rapidamente

   A velocidade não estabelece a qualidade do projeto.

4. Se a dependência aumenta o número de pacotes do repositório

   O número de pacotes por si só não determina a adequação arquitetônica.

**Concept:** Revisão arquitetônica além de verificações verdes

**Authored coaching hints:**

- Que limitação de tarefa pode ser afetada por uma nova dependência?
- Uma construção bem-sucedida explica por que o projeto mudou?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-030:16b08565d37fb4c1ea800f61dd9fe0031f0c0b7e510d1093b5215a5fdcf64e45 -->
## Question 30: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-030`

**Content revision:** `16b08565d37fb4c1ea800f61dd9fe0031f0c0b7e510d1093b5215a5fdcf64e45`

### English

A product owner changes the required behavior after a plan is approved but before implementation begins. What should the orchestration boundary require?

1. Proceed using the old plan because approval is permanent

   Approval applies to reviewed intent, not arbitrary later requirements.

2. Revise the plan and revalidate the affected authorization **[CORRECT]**

   Materially changed intent requires a correspondingly updated execution contract.

3. Implement both behaviors without discussing the conflict

   Combining behaviors may be contradictory or out of scope.

4. Hide the change in the implementation summary

   Hidden changes undermine inspectability and informed approval.

**Concept:** Plan revision and approval scope

**Authored coaching hints:**

- Is the authorized work still the work being proposed?
- Which change invalidates the previous acceptance decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de un producto cambia el comportamiento requerido después de que se apruebe un plan pero antes de que comience la implementación. ¿Qué debe requerir el límite de orquestación?

1. Continúe usando el viejo plan porque la aprobación es permanente

   La aprobación se aplica a la intención revisada, no a los requisitos posteriores arbitrarios.

2. Revisar el plan y revalidar la autorización afectada **[CORRECT]**

   El cambio de intención material requiere un contrato de ejecución actualizado correspondiente.

3. Implementar ambos comportamientos sin discutir el conflicto

   La combinación de comportamientos puede ser contradictoria o fuera de alcance.

4. Ocultar el cambio en el resumen de ejecución

   Los cambios ocultos socavan la inspección y la aprobación informada.

**Concept:** Revisión del plan y alcance de la aprobación

**Authored coaching hints:**

- ¿El trabajo autorizado sigue siendo el trabajo propuesto?
- ¿Cuál es el cambio que invalida la decisión de aceptación anterior?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário de produto muda o comportamento exigido após a aprovação de um plano, mas antes do início da implementação. O que deve exigir o limite da orquestração?

1. Continue a usar o plano antigo porque a aprovação é permanente

   A aprovação aplica-se à intenção revisada, não a requisitos posteriores arbitrários.

2. Revisar o plano e revalidar a autorização em causa **[CORRECT]**

   A alteração substancial da intenção requer um contrato de execução correspondentemente atualizado.

3. Implementar ambos os comportamentos sem discutir o conflito

   A combinação de comportamentos pode ser contraditória ou fora de alcance.

4. Escondir a alteração no resumo da execução

   As alterações ocultas prejudicam a inspecção e a aprovação informada.

**Concept:** Revisão do plano e escopo de aprovação

**Authored coaching hints:**

- O trabalho autorizado ainda está a ser proposto?
- Qual alteração invalida a decisão de aceitação anterior?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-031:4d5cb318077cd3a2a0344f30ea9c07a6c5f32b383a04d388a805d67c4c5ce22f -->
## Question 31: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-031`

**Content revision:** `4d5cb318077cd3a2a0344f30ea9c07a6c5f32b383a04d388a805d67c4c5ce22f`

### English

A team wants to inspect agent behavior without recording private internal deliberation. What should the agent produce?

1. Only the final source files

   Files alone omit intent and execution history.

2. Every hidden reasoning token

   Inspectable artifacts do not require private deliberation transcripts.

3. Concise decisions, assumptions, tool outcomes, and validation evidence **[CORRECT]**

   Decision and outcome records provide operationally useful transparency.

4. A confidence statement without supporting artifacts

   Confidence alone cannot reconstruct behavior.

**Concept:** Inspectable decision artifacts

**Authored coaching hints:**

- What information is needed to reconstruct actions and their justification?
- Which evidence is useful to an operator rather than merely verbose?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere inspeccionar el comportamiento de los agentes sin grabar deliberaciones internas privadas. ¿Qué debe producir el agente?

1. Sólo los archivos de origen finales

   Los archivos por sí solos omiten el historial de intención y ejecución.

2. Cada símbolo de razonamiento oculto

   Los artefactos inspectables no requieren transcripciones de deliberación privada.

3. Decisiones, suposiciones, resultados de las herramientas y pruebas de validación **[CORRECT]**

   Los registros de decisiones y resultados proporcionan una transparencia operativa útil.

4. Una declaración de confianza sin artefactos de apoyo

   La confianza sola no puede reconstruir el comportamiento.

**Concept:** artefactos de decisión inspectables

**Authored coaching hints:**

- ¿Qué información se necesita para reconstruir las acciones y su justificación?
- ¿Qué evidencia es útil para un operador en lugar de meramente verbal?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer inspecionar o comportamento dos agentes sem gravar deliberações internas privadas. O que deve produzir o agente?

1. Apenas os arquivos de origem finais

   Só os arquivos omitem o histórico de intenção e execução.

2. Cada sinal de raciocínio oculto

   Os artefatos inspecionáveis não exigem transcrições de deliberação privada.

3. Decisão concisa, suposições, resultados das ferramentas e evidências de validação **[CORRECT]**

   Os registros de decisões e de resultados proporcionam uma transparência operacional útil.

4. Uma declaração de confiança sem artefatos de apoio

   A confiança sozinha não pode reconstruir o comportamento.

**Concept:** artefatos de decisão inspecionáveis

**Authored coaching hints:**

- Que informações são necessárias para reconstruir as ações e a sua justificação?
- Que evidência é útil para um operador em vez de meramente verbal?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-032:129c1019f451e678b834a3c0fb62e35709bd6cd259a9037a876287449afcba93 -->
## Question 32: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-032`

**Content revision:** `129c1019f451e678b834a3c0fb62e35709bd6cd259a9037a876287449afcba93`

### English

An agent's task contract includes target repository, base revision, allowed paths, tests, and a PR deliverable. Which addition most directly clarifies when to stop and seek help?

1. A preferred writing style

   Writing style does not identify an authority boundary.

2. A maximum PR description length

   Description length does not define blocked conditions.

3. A model nickname

   Model identity does not establish stop conditions.

4. Explicit escalation triggers and non-goals **[CORRECT]**

   Escalation triggers and non-goals bound autonomous problem solving.

**Concept:** Stop conditions and non-goals

**Authored coaching hints:**

- What happens when the solution requires work outside the contract?
- Which missing instruction prevents uncontrolled scope expansion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El contrato de tareas de un agente incluye el repositorio objetivo, la revisión de la base, los caminos permitidos, las pruebas y una entregable PR. ¿Qué adición aclara más directamente cuándo detenerse y buscar ayuda?

1. Un estilo de escritura preferido

   El estilo de escritura no identifica un límite de autoridad.

2. Una longitud máxima de descripción de PR

   La longitud de descripción no define las condiciones bloqueadas.

3. Un apodo modelo

   La identidad del modelo no establece condiciones de parada.

4. Los desencadenantes y no objetivos explícitos de la escalada **[CORRECT]**

   La escalación desencadena y no vincula la solución autónoma de problemas sin objetivos.

**Concept:** Detener las condiciones y los no objetivos

**Authored coaching hints:**

- ¿Qué sucede cuando la solución requiere trabajo fuera del contrato?
- ¿Qué instrucción faltante impide una expansión incontrolada del alcance?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O contrato de tarefas de um agente inclui o repositório-alvo, a revisão de base, os caminhos permitidos, os testes e uma entrega do PR. Que adição esclarece mais diretamente quando parar e procurar ajuda?

1. Um estilo de escrita preferido

   O estilo de escrita não identifica um limite de autoridade.

2. Um comprimento máximo de descrição PR

   O comprimento da descrição não define condições bloqueadas.

3. Um apelido modelo

   A identidade do modelo não estabelece condições de parada.

4. Gatilhos explícitos de escalonamento e itens fora do escopo **[CORRECT]**

   Escalação desencadeia e não-objetivos ligados à solução autónoma de problemas.

**Concept:** Determinação das condições e não-objetivos

**Authored coaching hints:**

- O que acontece quando a solução requer trabalho fora do contrato?
- Que instrução faltante impede a expansão descontrolada do alcance?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-033:098ce92cb1617056db117af4588de15cff7e289e138ae32542e821104577cc20 -->
## Question 33: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-033`

**Content revision:** `098ce92cb1617056db117af4588de15cff7e289e138ae32542e821104577cc20`

### English

A team trusts an agent PR more than a human PR because it was generated automatically. Which contributor-model correction is best?

1. Apply the same intent, scope, evidence, ownership, and policy standards **[CORRECT]**

   The contribution is evaluated by engineering evidence rather than author type.

2. Accept automated work if the prose sounds consistent

   Consistent prose is not validation.

3. Require no checks because generation is repeatable

   Generation does not remove defects or validation requirements.

4. Reject human-authored fixes to maintain a uniform workflow

   Uniform governance does not require excluding human contributions.

**Concept:** Avoiding automation bias

**Authored coaching hints:**

- Would the same evidence be sufficient from a human contributor?
- Which standards assess the change rather than its author?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo confía en un agente PR más que en un humano PR porque fue generado automáticamente. ¿Cuál es la mejor corrección del modelo de contribución?

1. Aplicar la misma intención, alcance, evidencia, propiedad y normas políticas **[CORRECT]**

   La contribución se evalúa por pruebas de ingeniería en lugar de por el tipo de autor.

2. Aceptar el trabajo automatizado si la prosa suena consistente

   La prosa consistente no es validación.

3. No requieren controles porque la generación es repetible

   La generación no elimina defectos ni requisitos de validación.

4. Rechazar las correcciones de autor humano para mantener un flujo de trabajo uniforme

   La gobernanza uniforme no requiere excluir las contribuciones humanas.

**Concept:** Evitar el sesgo de automatización

**Authored coaching hints:**

- ¿Sería suficiente la misma evidencia de un contribuyente humano?
- ¿Qué normas evalúan el cambio en lugar de su autor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe confia num agente PR mais do que num humano PR porque foi gerado automaticamente. Qual correção do modelo de contribuição é melhor?

1. Aplicar a mesma intenção, alcance, evidências, propriedade e normas políticas **[CORRECT]**

   A contribuição é avaliada com base em evidências de engenharia e não no tipo de autor.

2. Aceitar o trabalho automatizado se a prosa soar consistente

   Prosa consistente não é validação.

3. Não é necessário verificar porque a geração é repetível

   A geração não elimina defeitos ou requisitos de validação.

4. Rejeitar correções de autoria humana para manter um fluxo de trabalho uniforme

   A governação uniforme não exige a exclusão das contribuições humanas.

**Concept:** evitar preconceitos de automação

**Authored coaching hints:**

- A mesma evidência seria suficiente de um contribuinte humano?
- Quais normas avaliam a mudança em vez de seu autor?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-034:c8f602d2616f4b7995c87126532d1f68cfd4040d091a36b6f2417d7f50fee63d -->
## Question 34: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-034`

**Content revision:** `c8f602d2616f4b7995c87126532d1f68cfd4040d091a36b6f2417d7f50fee63d`

### English

A team needs human intervention only when an agent proposes crossing an approved repository boundary. Which design best preserves velocity?

1. Require approval for every local search

   Read-by-read approval does not target the meaningful boundary.

2. Automate in-scope steps and pause at the boundary with a change proposal **[CORRECT]**

   A focused gate preserves routine progress and controls scope expansion.

3. Grant organization-wide access so no pause is necessary

   Broader access removes rather than governs the boundary.

4. Permit cross-repository writes and request retroactive approval

   Retroactive approval cannot prevent unauthorized impact.

**Concept:** Boundary-triggered intervention

**Authored coaching hints:**

- Where does the proposed work exceed delegated scope?
- Can normal progress continue without approving every observation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo necesita intervención humana sólo cuando un agente propone cruzar un límite de repositorio aprobado. ¿Qué diseño conserva mejor la velocidad?

1. Requerir la aprobación para cada búsqueda local

   La aprobación lectura por lectura no se dirige al límite significativo.

2. Automatizar los pasos dentro del alcance y hacer una pausa en la frontera con una propuesta de cambio **[CORRECT]**

   Una puerta enfocada preserva el progreso de rutina y controla la expansión del alcance.

3. Conceder acceso a toda la organización para que no sea necesario una pausa

   El acceso más amplio elimina en lugar de gobernar el límite.

4. Permitir que el repositorio cruzado escriba y solicite la aprobación retroactiva

   La aprobación retroactiva no puede prevenir el impacto no autorizado.

**Concept:** Intervención desencadenada por fronteras

**Authored coaching hints:**

- ¿En qué ámbitos el trabajo propuesto excede del ámbito delegado?
- ¿Pueden continuar los progresos normales sin aprobar todas las observaciones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe só precisa de intervenção humana quando um agente propõe cruzar uma fronteira de repositório aprovada. Qual é o melhor projeto para preservar a velocidade?

1. Requer aprovação para todas as buscas locais

   A aprovação leitura por leitura não visa o limite significativo.

2. Automatizar as etapas no escopo e fazer uma pausa na fronteira com uma proposta de alteração **[CORRECT]**

   Um portão focado preserva o progresso rotineiro e controla a expansão do escopo.

3. Conceder acesso em toda a organização para que nenhuma pausa seja necessária

   O acesso mais amplo elimina, em vez de governar a fronteira.

4. Permitir que o repositório transversal escreva e solicite a aprovação com efeitos retroativos

   A aprovação retroativa não pode impedir o impacto não autorizado.

**Concept:** intervenção de limite desencadeada

**Authored coaching hints:**

- Onde é que o trabalho proposto excede o escopo delegado?
- Pode o progresso normal continuar sem aprovar todas as observações?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-035:65affe1a22d25af1723d67400b643c1171f3c2629c0a09fcd856a2c6ad18d4b9 -->
## Question 35: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-035`

**Content revision:** `65affe1a22d25af1723d67400b643c1171f3c2629c0a09fcd856a2c6ad18d4b9`

### English

An agent maintains a private dashboard that reports success, while the PR's required checks show failure. Which artifact should control acceptance?

1. The private dashboard because it is agent-specific

   An auxiliary dashboard cannot override repository acceptance rules.

2. The last chat message because it is newer

   Recency does not grant authority over required checks.

3. The configured repository checks and review requirements **[CORRECT]**

   Acceptance belongs to the established, enforced development controls.

4. The agent's historical success rate

   Historical performance does not validate this change.

**Concept:** Authoritative acceptance signals

**Authored coaching hints:**

- Which system actually enforces acceptance?
- Can a summary override the evidence it summarizes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente mantiene un tablero de control privado que informa sobre el éxito, mientras que los controles requeridos del PR muestran fallas. ¿Qué artefacto debería controlar la aceptación?

1. El panel privado porque es específico para el agente

   Un panel auxiliar no puede anular las reglas de aceptación del repositorio.

2. El último mensaje de chat porque es más nuevo

   Recency no otorga autoridad sobre los controles requeridos.

3. Los requisitos de control y revisión del repositorio configurado **[CORRECT]**

   La aceptación pertenece a los controles de desarrollo establecidos y aplicados.

4. La tasa de éxito histórica del agente

   El desempeño histórico no valida este cambio.

**Concept:** señales de aceptación autorizadas

**Authored coaching hints:**

- ¿Qué sistema en realidad impone la aceptación?
- ¿Puede un resumen anular la evidencia que resume?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente mantém um painel privado que relata sucesso, enquanto as verificações necessárias do PR mostram falha. Que artefato deve controlar a aceitação?

1. O painel privado porque é específico para o agente

   Um painel auxiliar não pode anular as regras de aceitação do repositório.

2. A última mensagem de chat porque é mais recente

   A Recency não concede autoridade sobre os controles necessários.

3. Os requisitos de verificação e revisão do repositório configurado **[CORRECT]**

   A aceitação pertence aos controles de desenvolvimento estabelecidos e obrigatórios.

4. A taxa histórica de sucesso do agente

   O desempenho histórico não valida esta alteração.

**Concept:** sinais de aceitação autorizados

**Authored coaching hints:**

- Que sistema realmente impõe aceitação?
- Um resumo pode substituir a evidência que resume?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/>

<!-- certification-coach-question:agentic-036:706ec24766f06ab99f9363dc6d322b9ee7d563954310657748af7ac45d506525 -->
## Question 36: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-036`

**Content revision:** `706ec24766f06ab99f9363dc6d322b9ee7d563954310657748af7ac45d506525`

### English

A planning agent proposes changing production configuration solely to learn how the service works. Which alternative best respects stage boundaries?

1. Run the change during a quiet period

   A quiet period does not make exploratory production changes appropriate.

2. Ask for unrestricted credentials first

   More authority increases risk without resolving the planning need.

3. Treat the exploratory change as read-only because its purpose is learning

   An action's effect, not its stated purpose, determines whether it is a write.

4. Inspect documentation and safe test environments before proposing production actions **[CORRECT]**

   Safe observation reduces uncertainty without conflating discovery and execution.

**Concept:** Reasoning versus environmental action

**Authored coaching hints:**

- Does an exploratory purpose remove an operation's side effects?
- What sources could answer the question without production impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de planificación propone cambiar la configuración de producción únicamente para aprender cómo funciona el servicio. ¿Qué alternativa respeta mejor los límites de las etapas?

1. Ejecutar el cambio durante un período tranquilo

   Un período tranquilo no hace apropiados los cambios de producción exploratoria.

2. En primer lugar, pide credenciales sin restricciones.

   Una mayor autoridad aumenta el riesgo sin resolver la necesidad de planificación.

3. Trate el cambio exploratorio como sólo para leer porque su propósito es aprender

   El efecto de una acción, no su propósito declarado, determina si es una escritura.

4. Inspeccionar la documentación y los entornos de prueba seguros antes de proponer acciones de producción **[CORRECT]**

   La observación segura reduce la incertidumbre sin confundir descubrimiento y ejecución.

**Concept:** Racionalización frente a acción del entorno

**Authored coaching hints:**

- ¿Un propósito exploratorio elimina los efectos secundarios de una operación?
- ¿Qué fuentes podrían responder a la pregunta sin impacto en la producción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de planejamento propõe alterar a configuração da produção apenas para saber como funciona o serviço. Qual alternativa respeita melhor os limites dos estágios?

1. Execute a troca durante um período de silêncio

   Um período tranquilo não torna apropriadas mudanças de produção exploratória.

2. Peça primeiro credenciais ilimitadas.

   Mais autoridade aumenta o risco sem resolver a necessidade de planejamento.

3. Trate a mudança exploratória como apenas leitura porque o seu propósito é aprender

   O efeito de uma ação, não o seu propósito declarado, determina se é uma escrita.

4. Inspectar a documentação e os ambientes de teste seguros antes de propor ações de produção **[CORRECT]**

   A observação segura reduz a incerteza sem confundir descoberta e execução.

**Concept:** Raciocínio versus ação ambiental

**Authored coaching hints:**

- Um propósito exploratório elimina os efeitos colaterais de uma operação?
- Que fontes poderiam responder à pergunta sem impacto na produção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-037:a58f09480aa0cca41727c3fa3b8effd7b2a14484d8dcbbb16ce0b074b9edfbf9 -->
## Question 37: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-037`

**Content revision:** `a58f09480aa0cca41727c3fa3b8effd7b2a14484d8dcbbb16ce0b074b9edfbf9`

### English

An agent's implementation plan includes changes but no tests because 'reviewers will catch errors.' What is the best plan-review finding?

1. Validation responsibilities and evidence are missing **[CORRECT]**

   A reliable plan identifies how the intended outcome will be demonstrated.

2. Human review makes automated validation unnecessary

   Review and automated validation provide complementary evidence.

3. The plan only needs a longer summary

   Summary length does not supply missing validation.

4. Tests should be chosen after merge to avoid bias

   Postmerge test selection is too late for informed acceptance.

**Concept:** Planning validation as a first-class step

**Authored coaching hints:**

- What evidence will demonstrate success before acceptance?
- Can a reviewer independently check every behavior by inspection?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El plan de ejecución de un agente incluye cambios pero no pruebas porque "los revisores detectarán errores". ¿Cuál es la mejor conclusión de la revisión del plan?

1. Las responsabilidades de validación y la evidencia faltan **[CORRECT]**

   Un plan fiable identifica cómo se demostrará el resultado previsto.

2. La revisión humana hace que la validación automática sea innecesaria

   La revisión y la validación automática proporcionan pruebas complementarias.

3. El plan sólo necesita un resumen más largo

   La longitud de resumen no proporciona una validación faltante.

4. Los pruebas deben elegirse después de la fusión para evitar el sesgo

   La selección del prueba posterior a la fusión es demasiado tarde para una aceptación informada.

**Concept:** Validación de la planificación como un paso de primera clase

**Authored coaching hints:**

- ¿Qué evidencia demostrará el éxito antes de ser aceptado?
- ¿Puede un revisor verificar de forma independiente cada comportamiento mediante la inspección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O plano de implementação de um agente inclui alterações, mas não os testes porque "os revisores perceberão erros". Qual é a melhor conclusão da revisão do plano?

1. Faltam as responsabilidades de validação e as provas **[CORRECT]**

   Um plano confiável identifica como será demonstrado o resultado pretendido.

2. A revisão humana torna desnecessária a validação automática

   A revisão e a validação automatizada fornecem provas complementares.

3. O plano só precisa de um resumo mais longo

   O comprimento do resumo não fornece a validação faltante.

4. Os testes devem ser escolhidos após a merge para evitar preconceitos

   A selecção do teste pós-merge é tarde demais para uma aceitação informada.

**Concept:** Planejamento da validação como um passo de primeira classe

**Authored coaching hints:**

- Que evidência demonstrará o sucesso antes da aceitação?
- Um revisor pode verificar de forma independente todos os comportamentos por inspecção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-038:4ade165ee9dca53426bfdcbd881d028e533063975e01e22c9d338448b396f6d4 -->
## Question 38: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-038`

**Content revision:** `4ade165ee9dca53426bfdcbd881d028e533063975e01e22c9d338448b396f6d4`

### English

A maintenance agent is given broad ownership of a repository but no named human escalation contact. What operational weakness is most directly introduced?

1. The agent cannot read source files

   Missing ownership does not technically prevent reads.

2. Blocked or high-risk decisions have no accountable resolution path **[CORRECT]**

   A defined decision owner is necessary when delegated authority is insufficient.

3. GitHub cannot retain commit history

   Commit retention is unrelated to escalation routing.

4. All routine changes require production approval

   A missing contact does not itself impose a particular approval policy.

**Concept:** Accountable operational ownership

**Authored coaching hints:**

- Who decides when the agent cannot safely proceed?
- What happens to an unresolved risk at the edge of autonomy?

<details>
<summary>Español — same answer key and option order</summary>

### Español

A un agente de mantenimiento se le otorga una amplia propiedad de un repositorio pero ningún contacto de escalada humano nombrado. ¿Qué debilidad operativa se introduce más directamente?

1. El agente no puede leer los archivos de origen

   La falta de propiedad técnicamente no impide la lectura.

2. Las decisiones bloqueadas o de alto riesgo no tienen un camino de resolución responsable **[CORRECT]**

   Un titular de la decisión definida es necesario cuando la autoridad delegada es insuficiente.

3. GitHub no puede conservar el historial de commit

   La retención de compromisos no está relacionada con la escalada.

4. Todos los cambios de rutina requieren la aprobación de producción

   Una falta de contacto no impone en sí misma una política de aprobación particular.

**Concept:** Propiedad operativa responsable

**Authored coaching hints:**

- ¿Quién decide cuándo el agente no puede proceder con seguridad?
- ¿Qué pasa con un riesgo no resuelto al borde de la autonomía?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de manutenção recebe uma ampla propriedade de um repositório, mas nenhum contato humano de escalada designado. Que fraqueza operacional é mais diretamente introduzida?

1. O agente não pode ler os arquivos de origem

   A falta de propriedade não impede tecnicamente a leitura.

2. As decisões bloqueadas ou de alto risco não têm um caminho de resolução responsável **[CORRECT]**

   Um titular de decisão definido é necessário quando a autoridade delegada é insuficiente.

3. GitHub não pode conservar o histórico de commit

   A retenção de compromissos não está relacionada à escalada.

4. Todas as alterações de rotina requerem aprovação da produção

   A falta de contacto não impõe por si só uma política de aprovação específica.

**Concept:** Propriedade operacional responsável

**Authored coaching hints:**

- Quem decide quando o agente não pode prosseguir com segurança?
- O que acontece com um risco não resolvido à beira da autonomia?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-039:d6d546c028cddc3e3d8a9fb338dd2ea93f0b7e5d50df92690e9535708ca9bf88 -->
## Question 39: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-039`

**Content revision:** `d6d546c028cddc3e3d8a9fb338dd2ea93f0b7e5d50df92690e9535708ca9bf88`

### English

A team introduces agents to fix accessibility defects. Which input bundle best supports reliable implementation?

1. A screenshot and an instruction to make the UI look modern

   Visual modernization is not an accessibility contract.

2. A previous patch with instructions to imitate its style

   Imitation does not identify the current defect or expected behavior.

3. Affected flows, accessibility requirements, reproduction steps, and acceptance checks **[CORRECT]**

   Task-relevant evidence and criteria make the assignment implementable and testable.

4. A list of all repository files without prioritization

   An unprioritized inventory does not establish intent.

**Concept:** Task-relevant input design

**Authored coaching hints:**

- What does the agent need to reproduce the problem?
- How will the owner distinguish a real fix from cosmetic change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo introduce agentes para arreglar los defectos de accesibilidad. ¿Qué paquete de entradas apoya mejor la implementación confiable?

1. Una captura de pantalla y una instrucción para hacer que el UI se vea moderno

   La modernización visual no es un contrato de accesibilidad.

2. Un parche anterior con instrucciones para imitar su estilo

   La imitación no identifica el defecto actual o el comportamiento esperado.

3. Los flujos afectados, los requisitos de accesibilidad, las etapas de reproducción y los controles de aceptación **[CORRECT]**

   La evidencia y los criterios pertinentes a la tarea hacen que la asignación sea implementable y testable.

4. Una lista de todos los archivos del repositorio sin prioridad

   Un inventario no priorizado no establece la intención.

**Concept:** diseño de entradas relevantes para las tareas

**Authored coaching hints:**

- ¿Qué necesita el agente para reproducir el problema?
- ¿Cómo distinguirá el dueño de una solución real de un cambio cosmético?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe apresenta agentes para corrigir os defeitos de acessibilidade. Qual pacote de entrada suporta melhor uma implementação confiável?

1. Um screenshot e uma instrução para fazer o UI parecer moderno

   A modernização visual não é um contrato de acessibilidade.

2. Um patch anterior com instruções para imitar o seu estilo

   A imitação não identifica o defeito atual ou o comportamento esperado.

3. Fluxos afetados, requisitos de acessibilidade, etapas de reprodução e verificações de aceitação **[CORRECT]**

   Evidências e critérios relevantes para as tarefas tornam a atribuição implementável e testável.

4. Uma lista de todos os arquivos do repositório sem prioridade

   Um inventário não prioritário não estabelece a intenção.

**Concept:** Projeto de entrada relevante para tarefas

**Authored coaching hints:**

- O que precisa o agente para reproduzir o problema?
- Como o proprietário vai distinguir uma correção real da mudança cosmética?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-040:f60e1827b98e4bed497be5c424566d25ae987c25246c25ed9a2a042cd55bc11e -->
## Question 40: Prepare agent architecture and SDLC processes

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-040`

**Content revision:** `f60e1827b98e4bed497be5c424566d25ae987c25246c25ed9a2a042cd55bc11e`

### English

A successful pilot leads a team to remove scope limits and review gates for all agent tasks. What is the most appropriate architectural response?

1. Use pilot success as permanent authorization

   Past success does not authorize new categories of impact.

2. Increase autonomy equally across all repositories

   Repository and task risks can differ substantially.

3. Replace controls with periodic satisfaction surveys

   Surveys cannot enforce operational constraints.

4. Expand autonomy incrementally using risk, evidence, and explicit boundaries **[CORRECT]**

   Evidence-based expansion preserves useful controls as scope changes.

**Concept:** Controlled autonomy expansion

**Authored coaching hints:**

- Does a pilot cover the risks of every future assignment?
- Which boundaries should change only after evidence and review?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras un piloto exitoso, un equipo elimina los límites de alcance y los controles de revisión para todas las tareas de agentes. ¿Cuál es la respuesta arquitectónica más adecuada?

1. Utilice el éxito del piloto como autorización permanente

   El éxito pasado no autoriza nuevas categorías de impacto.

2. Aumentar la autonomía por igual en todos los repositorios

   Los riesgos del repositorio y de la tarea pueden diferir sustancialmente.

3. Reemplazar los controles con encuestas periódicas de satisfacción

   Las encuestas no pueden imponer restricciones operativas.

4. Ampliar la autonomía incrementalmente utilizando riesgos, pruebas y límites explícitos **[CORRECT]**

   La expansión basada en la evidencia preserva controles útiles a medida que cambia el alcance.

**Concept:** Expansión controlada de la autonomía

**Authored coaching hints:**

- ¿Cobre un piloto los riesgos de cada asignación futura?
- ¿Qué límites deben cambiar sólo después de la evidencia y la revisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após um piloto bem-sucedido, uma equipe elimina os limites de escopo e as barreiras de revisão para todas as tarefas de agentes. Qual é a resposta arquitetônica mais adequada?

1. Usar o sucesso do piloto como autorização permanente

   O sucesso passado não autoriza novas categorias de impacto.

2. Aumentar igualmente a autonomia de todos os repositórios

   Os riscos de repositório e de tarefa podem variar substancialmente.

3. Substituir os controles por pesquisas periódicas de satisfação

   As pesquisas não podem impor restrições operacionais.

4. Expandir a autonomia incrementalmente utilizando riscos, evidências e limites explícitos **[CORRECT]**

   A expansão baseada em evidências preserva controles úteis à medida que o escopo muda.

**Concept:** expansão controlada da autonomia

**Authored coaching hints:**

- Um piloto cobre os riscos de todas as futuras atribuições?
- Quais são os limites que devem ser alterados somente após a evidência e a revisão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-041:00e84694f4241aa1d02004590694edb419875bf7b045eb885c63617c97603fdb -->
## Question 41: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-041`

**Content revision:** `00e84694f4241aa1d02004590694edb419875bf7b045eb885c63617c97603fdb`

### English

An agent must summarize open issues but must not change them. Which tool configuration is most appropriate?

1. Expose issue-read tools with read-scoped credentials **[CORRECT]**

   Both available tools and service authorization align with the read-only task.

2. Expose all issue tools and request read-only behavior

   A prompt does not remove exposed mutation capability.

3. Provide repository administration access for easier setup

   Administration exceeds the required capability.

4. Use a write token and log mutations after execution

   After-the-fact logging does not prevent unauthorized writes.

**Concept:** Task-based tool selection

**Authored coaching hints:**

- Which capabilities are actually necessary?
- Where can the external service enforce the same boundary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente debe resumir los problemas abiertos pero no debe cambiarlos. ¿Qué configuración de herramienta es la más adecuada?

1. Exponer las herramientas de lectura de problemas con credenciales de lectura **[CORRECT]**

   Tanto las herramientas disponibles como la autorización del servicio se alinean con la tarea de solo lectura.

2. Exponer todas las herramientas de problema y solicitar un comportamiento de solo lectura

   Una llamada no elimina la capacidad de mutación expuesta.

3. Proporcionar acceso a la administración del repositorio para una configuración más fácil

   La administración excede la capacidad requerida.

4. Utilice una señal de escritura y mutaciones de registro después de la ejecución

   El registro después de los hechos no impide los escritos no autorizados.

**Concept:** Selección de herramientas basadas en tareas

**Authored coaching hints:**

- ¿Qué capacidades son realmente necesarias?
- ¿Dónde puede hacer cumplir el mismo límite el servicio externo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente deve resumir as questões abertas, mas não deve alterá-las. Qual é a configuração da ferramenta mais adequada?

1. Expor ferramentas de leitura de questões com credenciais de leitura **[CORRECT]**

   Tanto as ferramentas disponíveis como a autorização de serviço estão alinhadas com a tarefa de somente leitura.

2. Expor todas as ferramentas de problema e solicitar um comportamento somente para leitura

   Um prompt não elimina a capacidade de mutação exposta.

3. Fornecer acesso à administração do repositório para uma configuração mais fácil

   A administração excede a capacidade necessária.

4. Use um writing token e registros de mutações após a execução

   O registro após o fato não impede a escrita não autorizada.

**Concept:** Seleção de ferramentas baseadas em tarefas

**Authored coaching hints:**

- Que capacidades são realmente necessárias?
- Onde pode o serviço externo impor o mesmo limite?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-042:9c8c781ca7dde8cbacdc178f3ecffb1ccdccd1f395e5429146366262c0b9e8ea -->
## Question 42: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-042`

**Content revision:** `9c8c781ca7dde8cbacdc178f3ecffb1ccdccd1f395e5429146366262c0b9e8ea`

### English

A developer adds an MCP registry URL and assumes that every unlisted server is now blocked. What must be distinguished?

1. Registry descriptions and model context length

   Context length does not determine server admission.

2. Server discovery configuration and allowlist enforcement **[CORRECT]**

   A registry catalogs servers; a restriction policy determines what is permitted.

3. Local source files and Git commit authorship

   Commit authorship is unrelated to MCP admission.

4. Tool response formatting and test coverage

   Formatting and coverage do not enforce registry membership.

**Concept:** Registry versus allowlist

**Authored coaching hints:**

- Does knowing where to find servers itself forbid other servers?
- Which setting expresses the admission decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador agrega una URL de registro MCP y asume que cada servidor no listado está ahora bloqueado. ¿Qué hay que distinguir?

1. Descripciones del registro y longitud del contexto del modelo

   La longitud del contexto no determina la admisión del servidor.

2. La configuración de descubrimiento de servidores y la aplicación de la lista de servidores permitidos **[CORRECT]**

   Un registro cataloga los servidores; una política de restricción determina lo que está permitido.

3. Archivos fuente locales y autoría de Git commit

   La autoría del compromiso no está relacionada con la admisión a MCP.

4. Formación de la respuesta de las herramientas y cobertura de las pruebas

   El formato y la cobertura no imponen la membresía en el registro.

**Concept:** Registro versus lista de permisos

**Authored coaching hints:**

- ¿Saber dónde encontrar los servidores mismo prohíbe otros servidores?
- ¿En qué entorno se expresa la decisión de admisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor adiciona um URL de registro MCP e assume que todos os servidores não listados estão agora bloqueados. O que deve ser distinguido?

1. Descrições do registro e comprimento do contexto do modelo

   O comprimento do contexto não determina a admissão do servidor.

2. A configuração de descoberta de servidores e a aplicação da lista de servidores permitidos **[CORRECT]**

   Um registro cataloga os servidores; uma política de restrição determina o que é permitido.

3. Arquivos de origem locais e autoria do Git commit

   A autoria do compromisso não está relacionada com a admissão ao MCP.

4. Formatação da resposta à ferramenta e cobertura dos testes

   A formatação e a cobertura não impõem a adesão ao registro.

**Concept:** Registro versus lista de licenças

**Authored coaching hints:**

- Saber onde encontrar servidores proíbe outros servidores?
- Qual configuração expressa a decisão de admissão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists>

<!-- certification-coach-question:agentic-043:1c5da27a4a97d48668b744a1561914f1fd45c81ca6a6ebef7bb07b298d07e4e8 -->
## Question 43: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-043`

**Content revision:** `1c5da27a4a97d48668b744a1561914f1fd45c81ca6a6ebef7bb07b298d07e4e8`

### English

A remote MCP server connects successfully, but its write tools fail authorization while reads succeed. What should be investigated first?

1. Whether the model needs a larger context window

   Context length does not grant service authorization.

2. Whether all tool failures should be ignored

   Ignoring authorization errors misrepresents execution.

3. The authenticated identity and operation-specific permissions **[CORRECT]**

   Successful connectivity and reads do not imply permission for writes.

4. Whether the server should be replaced by a public endpoint

   Changing endpoints does not resolve the intended identity's authority.

**Concept:** Connectivity versus authorization

**Authored coaching hints:**

- What has a successful read already demonstrated?
- Which additional boundary applies to mutation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servidor MCP remoto se conecta con éxito, pero sus herramientas de escritura fallan en la autorización mientras las lecturas tienen éxito. ¿Qué debe investigarse primero?

1. Si el modelo necesita una ventana de contexto más grande

   La longitud del contexto no otorga la autorización de servicio.

2. Si se deben ignorar todas las fallas de las herramientas

   Ignorar errores de autorización equivoca la ejecución.

3. La identidad autenticada y los permisos específicos de la operación **[CORRECT]**

   La conectividad exitosa y las lecturas no implican permiso para escribir.

4. Si el servidor debe ser reemplazado por un endpoint público

   El cambio de endpoints no resuelve la autoridad de la identidad prevista.

**Concept:** Conectividad frente a autorización

**Authored coaching hints:**

- ¿Qué ha demostrado una lectura exitosa?
- ¿Qué límite adicional se aplica a la mutación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um servidor remoto MCP se conecta com sucesso, mas suas ferramentas de escrita falham na autorização enquanto as leituras são bem sucedidas. O que deve ser investigado primeiro?

1. Se o modelo precisa de uma janela de contexto maior

   O comprimento do contexto não concede autorização de serviço.

2. Se todas as falhas das ferramentas devem ser ignoradas

   Ignorar erros de autorização representa erroneamente a execução.

3. A identidade autenticada e as permissões específicas da operação **[CORRECT]**

   Conectividade bem-sucedida e leituras não implicam permissão para escrever.

4. Se o servidor deve ser substituído por um endpoint público

   A alteração dos endpoints não resolve a autoridade da identidade pretendida.

**Concept:** Conectividade versus autorização

**Authored coaching hints:**

- O que já demonstrou uma leitura bem-sucedida?
- Que limite adicional se aplica à mutação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists>

<!-- certification-coach-question:agentic-044:2581e751d2e1539b5b757eb693b1f38aa1513185476f2f75ee23667e8970b728 -->
## Question 44: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-044`

**Content revision:** `2581e751d2e1539b5b757eb693b1f38aa1513185476f2f75ee23667e8970b728`

### English

An agent needs one issue-search capability from an MCP server that also exposes deployment tools. What is the safest useful configuration?

1. Enable the entire server namespace for convenience

   Broad namespaces unnecessarily increase the action surface.

2. Enable deployments but ask the agent not to use them

   Instructions do not remove deployment capability.

3. Remove all external tools and abandon issue search

   The needed read capability can be safely retained.

4. Enable only the required search capability with scoped authentication **[CORRECT]**

   A narrow tool subset and credential scope preserve usefulness with less risk.

**Concept:** MCP tool allowlists

**Authored coaching hints:**

- Must every capability exposed by a server be usable by this agent?
- What is the smallest sufficient action surface?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente necesita una capacidad de búsqueda de problemas de un servidor MCP que también expone las herramientas de implementación. ¿Cuál es la configuración más segura y útil?

1. Habilitar todo el espacio de nombres del servidor para la comodidad

   Los amplios espacios de nombres aumentan innecesariamente la superficie de acción.

2. Habilitar despliegues pero pedir al agente que no los use

   Las instrucciones no eliminan la capacidad de despliegue.

3. Eliminar todas las herramientas externas y abandonar la búsqueda de problemas

   La capacidad de lectura necesaria puede conservarse de forma segura.

4. Habilitar sólo la capacidad de búsqueda requerida con autenticación de alcance **[CORRECT]**

   Un subconjunto de herramientas estrecho y el alcance de las credenciales preservan la utilidad con menos riesgo.

**Concept:** Listas de herramientas MCP permitidas

**Authored coaching hints:**

- ¿Todas las capacidades expuestas por un servidor deben ser utilizadas por este agente?
- ¿Cuál es la superficie de acción suficiente más pequeña?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente precisa de uma capacidade de pesquisa de problemas de um servidor MCP que também expõe ferramentas de implantação. Qual é a configuração mais segura e útil?

1. Habilitar todo o espaço de nomes do servidor para conveniência

   Amplos espaços de nome aumentam desnecessariamente a superfície de ação.

2. Habilitar as instalações mas pedir ao agente para não usá-las

   As instruções não removem a capacidade de implantação.

3. Remover todas as ferramentas externas e abandonar a pesquisa de problemas

   A capacidade de leitura necessária pode ser mantida com segurança.

4. Habilitar apenas a capacidade de pesquisa necessária com autenticação com escopo **[CORRECT]**

   Um subconjunto restrito de ferramentas e um escopo de credenciais preservam a utilidade com menos risco.

**Concept:** Lista de ferramentas MCP

**Authored coaching hints:**

- Todas as capacidades expostas por um servidor devem ser utilizáveis por este agente?
- Qual é a menor superfície de ação suficiente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-045:b9984d48ce89af1145767618b03010eff9b3e4619133100bb4a551e436c9fa2d -->
## Question 45: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-045`

**Content revision:** `b9984d48ce89af1145767618b03010eff9b3e4619133100bb4a551e436c9fa2d`

### English

A team wants the GitHub remote MCP server in a supported IDE. Which setup principle is correct?

1. Configure the documented remote endpoint and authenticate an authorized identity **[CORRECT]**

   Remote connectivity and authorized authentication are both required.

2. Copy a token into repository instructions for automatic discovery

   Instructions are not a secure credential store.

3. Assume registry discovery authenticates the user automatically

   Discovery and authentication are separate concerns.

4. Use a local file path as the hosted server's network endpoint

   A file path does not identify a hosted HTTP service.

**Concept:** Remote MCP configuration

**Authored coaching hints:**

- What does the client need to locate the service?
- How does the service know on whose behalf a tool runs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere el servidor GitHub remoto MCP en un IDE soportado. ¿Cuál es el principio correcto?

1. Configurar el extremo remoto documentado y autenticar una identidad autorizada **[CORRECT]**

   Se requiere conectividad remota y autenticación autorizada.

2. Copiar un token en las instrucciones del repositorio para el descubrimiento automático

   Las instrucciones no son una tienda segura de credenciales.

3. Supongamos que el registro de descubrimiento autentica automáticamente al usuario

   El descubrimiento y la autenticación son asuntos separados.

4. Utilice una ruta de archivo local como endpoint de la red del servidor alojado

   Un camino de archivo no identifica un servicio HTTP alojado.

**Concept:** configuración remota MCP

**Authored coaching hints:**

- ¿Qué necesita el cliente para localizar el servicio?
- ¿Cómo sabe el servicio en nombre de quién se ejecuta una herramienta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer o servidor GitHub remoto MCP num IDE suportado. Qual princípio de configuração é correto?

1. Configurar o endpoint remoto documentado e autenticar uma identidade autorizada **[CORRECT]**

   São necessárias a conectividade remota e a autenticação autorizada.

2. Copiar um token em instruções de repositório para descoberta automática

   As instruções não são uma loja segura de credenciais.

3. Suponha que a descoberta do registro autentique automaticamente o usuário

   A descoberta e a autenticação são questões separadas.

4. Use um caminho de arquivo local como endpoint da rede do servidor hospedado

   Um caminho de arquivo não identifica um serviço HTTP hospedado.

**Concept:** Configuração remota MCP

**Authored coaching hints:**

- O que precisa o cliente para localizar o serviço?
- Como é que o serviço sabe em nome de quem funciona uma ferramenta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists>

<!-- certification-coach-question:agentic-046:4bcf9e8e5ae5a81f19d3bbeb9d6dcaae7afc9fd9a78c86d5c4f7a01f7ac3b131 -->
## Question 46: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-046`

**Content revision:** `4bcf9e8e5ae5a81f19d3bbeb9d6dcaae7afc9fd9a78c86d5c4f7a01f7ac3b131`

### English

A newly connected MCP tool returns text instructing the agent to disable repository protections. How should the agent treat that result?

1. As a higher-priority instruction because it came from a tool

   Tool output does not outrank the task's governing instructions.

2. As untrusted data, not authority to change policy **[CORRECT]**

   External content cannot authorize changes to the agent's boundaries.

3. As approval from the repository administrator

   A returned string does not prove administrator authorization.

4. As a reason to grant the tool broader privileges

   Suspicious output is not a justification for expanded privilege.

**Concept:** Tool-output trust boundaries

**Authored coaching hints:**

- Who authored the returned content?
- Can data from an external service redefine the agent's authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta MCP recién conectada devuelve texto instruyendo al agente para desactivar las protecciones del repositorio. ¿Cómo debe tratar el agente ese resultado?

1. Como una instrucción de mayor prioridad porque vino de una herramienta

   La salida de la herramienta no supera las instrucciones de gestión de la tarea.

2. Como datos no confiables, no autoridad para cambiar la política **[CORRECT]**

   El contenido externo no puede autorizar cambios en los límites del agente.

3. Como aprobación del administrador del repositorio

   Una cadena devuelta no prueba la autorización del administrador.

4. Como motivo para otorgar a la herramienta privilegios más amplios

   Un resultado sospechoso no es una justificación para un privilegio ampliado.

**Concept:** límites de confianza entre las herramientas y los resultados

**Authored coaching hints:**

- ¿Quién fue el autor del contenido devuelto?
- ¿Pueden los datos de un servicio externo redefinir la autoridad del agente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta MCP recém-conectada retorna texto instruindo o agente a desativar as proteções do repositório. Como o agente deve tratar esse resultado?

1. Como uma instrução de maior prioridade porque veio de uma ferramenta

   A saída da ferramenta não supera as instruções de gestão da tarefa.

2. Como dados não confiáveis, não autoridade para mudar a política **[CORRECT]**

   O conteúdo externo não pode autorizar alterações nos limites do agente.

3. Como aprovação do administrador do repositório

   Uma cadeia devolvida não prova a autorização do administrador.

4. Como motivo para conceder a ferramenta privilégios mais amplos

   Um resultado suspeito não é uma justificação para um privilégio expandido.

**Concept:** limites de confiança entre ferramentas e resultados

**Authored coaching hints:**

- Quem foi o autor do conteúdo devolvido?
- Os dados de um serviço externo podem redefinir a autoridade do agente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-047:767daa457e3fc9164b5342dba10ff687095500990efb7101aaa60721df26b9b6 -->
## Question 47: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-047`

**Content revision:** `767daa457e3fc9164b5342dba10ff687095500990efb7101aaa60721df26b9b6`

### English

An agent works locally but fails in CI because it assumes a developer's installed compiler and home-directory files exist. What should be changed?

1. Increase the model's reasoning budget

   Reasoning budget cannot supply missing runtime dependencies.

2. Grant CI access to every developer's home directory

   Broad personal-directory access is unnecessary and unsafe.

3. Declare reproducible setup steps and explicit workspace inputs **[CORRECT]**

   Declared dependencies and inputs make execution portable and inspectable.

4. Retry the same command until the compiler appears

   Repeated execution will not install an undeclared compiler.

**Concept:** Execution environment portability

**Authored coaching hints:**

- Which assumptions are properties of one machine rather than the task?
- What must be established before the first build command?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente funciona localmente pero falla en CI porque asume que el compilador instalado de un desarrollador y los archivos de directorio de inicio existen. ¿Qué hay que cambiar?

1. Aumentar el presupuesto de razonamiento del modelo

   El presupuesto razonable no puede suministrar las dependencias faltantes del tiempo de ejecución.

2. Grant CI acceso al directorio de hogar de cada desarrollador

   El amplio acceso a los directorios personales es innecesario y inseguro.

3. Declarar los pasos de configuración reproducibles y las entradas explícitas del espacio de trabajo **[CORRECT]**

   Las dependencias y entradas declaradas hacen que la ejecución sea portátil e inspectable.

4. Intentar de nuevo el mismo comando hasta que aparezca el compilador

   La ejecución repetida no instalará un compilador no declarado.

**Concept:** Portabilidad del entorno de ejecución

**Authored coaching hints:**

- ¿Qué suposiciones son propiedades de una máquina en lugar de la tarea?
- ¿Qué debe establecerse antes del primer comando de construcción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente funciona localmente, mas falha no CI porque assume que o compilador instalado de um desenvolvedor e os arquivos do diretório doméstico existem. O que deve mudar?

1. Aumentar o orçamento de raciocínio do modelo

   O orçamento racional não pode fornecer dependências de tempo de execução faltantes.

2. Conceder acesso CI ao diretório de casa de cada desenvolvedor

   O acesso ao diretório pessoal é desnecessário e inseguro.

3. Declarar as etapas de configuração reprodutíveis e as entradas explícitas do espaço de trabalho **[CORRECT]**

   As dependências e entradas declaradas tornam a execução portátil e inspecionável.

4. Repete o mesmo comando até que o compilador apareça

   A execução repetida não irá instalar um compilador não declarado.

**Concept:** Portabilidade do ambiente de execução

**Authored coaching hints:**

- Que suposições são propriedades de uma máquina em vez da tarefa?
- O que deve ser estabelecido antes do primeiro comando de construção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-048:6a7be7f2f234e634757f472e91b0fb52abb765ef8300e713814b5fcfa565b44e -->
## Question 48: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-048`

**Content revision:** `6a7be7f2f234e634757f472e91b0fb52abb765ef8300e713814b5fcfa565b44e`

### English

A repository automation may create a branch and PR but must not directly update the default branch. Which design best supports this scope?

1. Give it repository-owner credentials and rely on naming conventions

   Naming conventions do not enforce a branch boundary.

2. Run it against whichever branch is currently checked out

   An accidental checkout could target the wrong branch.

3. Grant unrestricted pushes and review changes afterward

   After-the-fact review cannot prevent a direct update.

4. Use a task branch, scoped write access, and enforced default-branch protection **[CORRECT]**

   Branch-based execution and repository controls constrain the write path.

**Concept:** Branch-scoped execution

**Authored coaching hints:**

- Where should proposed changes land before acceptance?
- Which control remains effective if the agent chooses a wrong target?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una automatización del repositorio puede crear una rama y PR, pero no debe actualizar directamente la rama predeterminada. ¿Qué diseño soporta mejor este alcance?

1. Dale las credenciales del propietario del repositorio y confía en las convenciones de nombres

   El nombramiento de las convenciones no impone un límite de rama.

2. Ejecutarlo contra cualquiera de las ramas que se haya revisado actualmente

   Un checkout accidental puede apuntar a la rama equivocada.

3. Permitir pushes sin restricciones y revisar los cambios después

   La revisión posterior a los hechos no puede impedir una actualización directa.

4. Utilice una rama de tareas, acceso de escritura de alcance y protección de rama predeterminada forzada **[CORRECT]**

   Los controles de ejecución y repositorio basados en ramas limitan el camino de escritura.

**Concept:** Ejecución delimitada por rama

**Authored coaching hints:**

- ¿Dónde deben llegar los cambios propuestos antes de su aceptación?
- ¿Qué control sigue siendo efectivo si el agente elige un objetivo equivocado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma automação do repositório pode criar um branch e PR, mas não deve atualizar diretamente o branch padrão. Qual é o melhor projeto para este escopo?

1. Dê-lhe as credenciais do proprietário do repositório e confia nas convenções de nomeação

   Os congressos de nomeação não impõem uma fronteira de filiais.

2. Correr contra qualquer branch que está atualmente verificado

   Um checkout acidental pode apontar para a branch errada.

3. Permitir pushes sem restrições e revisar as alterações depois

   A revisão após o fato não pode impedir uma atualização direta.

4. Use um branch de tarefa, acesso de escrita com escopo e proteção padrão de branch forçada **[CORRECT]**

   Os controles de execução e de repositório baseados em ramificações restringem o caminho de escrita.

**Concept:** Execução delimitada por branch

**Authored coaching hints:**

- Onde devem ocorrer as alterações propostas antes da aceitação?
- Que controle permanece eficaz se o agente escolher um alvo errado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-049:5c8fae811c9a78a07bdbcf81c61efe2d6d8b19e00e695c902796f903a71a509e -->
## Question 49: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-049`

**Content revision:** `5c8fae811c9a78a07bdbcf81c61efe2d6d8b19e00e695c902796f903a71a509e`

### English

An API reports a transient service outage during an idempotent read. Which retry policy is most appropriate?

1. Bounded retries with delay and escalation after the budget is exhausted **[CORRECT]**

   Bounded delayed retries address transient failure without an uncontrolled loop.

2. Immediate retries without a limit

   Unlimited immediate calls can amplify an outage.

3. Change credentials after every failed request

   Credential rotation does not repair service availability.

4. Mark the read successful and invent a response

   Invented output corrupts downstream decisions.

**Concept:** Transient error handling

**Authored coaching hints:**

- Is another attempt likely to change the outcome?
- How can retry behavior avoid worsening a service incident?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un API informa de una interrupción de servicio transitorio durante una lectura idempotente. ¿Cuál es la política más adecuada?

1. Nuevos intentos limitados con retraso y escalada después del agotamiento del presupuesto **[CORRECT]**

   Los intentos retrasados restringidos resuelven el fallo transitorio sin un bucle incontrolado.

2. Repeticiones inmediatas sin límite

   Las llamadas inmediatas ilimitadas pueden amplificar una interrupción.

3. Cambiar las credenciales después de cada solicitud fallida

   La rotación de credenciales no repara la disponibilidad del servicio.

4. Marque el éxito de la lectura e invente una respuesta

   La producción inventada corrompe las decisiones posteriores.

**Concept:** Manejo de errores transitorios

**Authored coaching hints:**

- ¿Es probable que otro intento cambie el resultado?
- ¿Cómo puede volver a intentar un comportamiento que no empeore un incidente de servicio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um API relata uma interrupção transitória de serviço durante uma leitura idempotente. Qual é a política mais apropriada?

1. Tentativas limitadas, com espera e escalonamento após esgotar o orçamento **[CORRECT]**

   Os retrospectivos atrasados limitados resolvem falhas transitórias sem um ciclo descontrolado.

2. Repetições imediatas sem limite

   Chamadas instantâneas ilimitadas podem amplificar uma interrupção.

3. Mudança de credenciais após cada pedido falhado

   A rotação das credenciais não corrige a disponibilidade do serviço.

4. Marque a leitura bem sucedida e invente uma resposta

   A produção inventada corrompe as decisões a jusante.

**Concept:** Manutenção transitória de erros

**Authored coaching hints:**

- É provável que outra tentativa mude o resultado?
- Como o comportamento pode ser reprovado para evitar que um incidente de serviço piore?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-050:10dcd3139faae28180c9fd7fe3a85dcba1ae3c02a2e177e0d1a5376faa781bf8 -->
## Question 50: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-050`

**Content revision:** `10dcd3139faae28180c9fd7fe3a85dcba1ae3c02a2e177e0d1a5376faa781bf8`

### English

A create-issue request times out after transmission, leaving its outcome unknown. What should the agent do before retrying the write?

1. Create another issue with a slightly different title

   A different title can create a duplicate rather than recover safely.

2. Reconcile whether the intended issue already exists **[CORRECT]**

   Reconciliation avoids repeating a write that may already have committed.

3. Assume a timeout means the server did nothing

   A response timeout does not prove absence of server-side effects.

4. Switch to an administrator token and repeat the request

   More privilege does not resolve uncertain completion.

**Concept:** Ambiguous write outcomes

**Authored coaching hints:**

- Could the service have committed before the response was lost?
- What evidence distinguishes recovery from duplication?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una solicitud para crear una issue agota el tiempo de espera después de enviarse, por lo que se desconoce el resultado. ¿Qué debe hacer el agente antes de reintentar la escritura?

1. Crear otro número con un título ligeramente diferente

   Un título diferente puede crear un duplicado en lugar de recuperarse de forma segura.

2. Reconciliar si ya existe la cuestión prevista **[CORRECT]**

   La reconciliación evita repetir una escritura que ya puede haber cometido.

3. Supongamos que un tiempo fuera significa que el servidor no hizo nada

   Un plazo de respuesta no demuestra la ausencia de efectos secundarios del servidor.

4. Cambiar a un token de administrador y repetir la solicitud

   Un mayor privilegio no resuelve la incertidumbre de la finalización.

**Concept:** Resultados de escritura ambiguos

**Authored coaching hints:**

- ¿Podría haberse cometido el servicio antes de que se perdiera la respuesta?
- ¿Qué evidencia distingue la recuperación de la duplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma solicitação para criar uma issue excede o tempo limite após o envio, deixando o resultado desconhecido. O que o agente deve fazer antes de repetir a gravação?

1. Crie outro número com um título ligeiramente diferente

   Um título diferente pode criar um duplicado em vez de recuperar com segurança.

2. Reconciliar se a questão prevista já existe **[CORRECT]**

   A reconciliação evita a repetição de um escrito que já pode ter cometido.

3. Suponha que um timeout significa que o servidor não fez nada

   Um prazo de resposta não demonstra a ausência de efeitos colaterais do servidor.

4. Passe para um token de administrador e repita o pedido

   Mais privilégio não resolve a conclusão incerta.

**Concept:** Resultados de escrita ambíguos

**Authored coaching hints:**

- O serviço poderia ter cometido antes da resposta ser perdida?
- Que evidência distingue a recuperação da duplicação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-051:72fde960715ea9b289636fcc2ec68fdcd0296e1aa4d9dc1a89fc0cec1901a19e -->
## Question 51: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-051`

**Content revision:** `72fde960715ea9b289636fcc2ec68fdcd0296e1aa4d9dc1a89fc0cec1901a19e`

### English

A deployment API supports idempotency keys. An agent retries the same logical deployment after a network failure. How should it use the key?

1. Generate a new key for every transport attempt

   New keys can make retries appear to be new operations.

2. Use one key for every deployment across all projects

   Unrelated operations must not be conflated.

3. Reuse the operation's key for retries according to the API contract **[CORRECT]**

   A stable operation identity lets the service deduplicate supported retries.

4. Place the key only in the final audit summary

   Postexecution metadata cannot influence server-side deduplication.

**Concept:** Idempotent mutation retries

**Authored coaching hints:**

- Is the retry a new business operation or another attempt at the same one?
- Which component performs deduplication?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una API de despliegue admite claves de idempotencia. Un agente reintenta el mismo despliegue lógico tras una falla de red. ¿Cómo debe usar la clave?

1. Generar una nueva llave para cada intento de transporte

   Las nuevas teclas pueden hacer que los retos parezcan nuevas operaciones.

2. Utilice una clave para cada implementación en todos los proyectos

   Las operaciones no relacionadas no deben confundirse.

3. Reutilizar la clave de la operación en los reintentos según el contrato de la API **[CORRECT]**

   Una identidad de operación estable permite al servicio deduplicar los intentos soportados.

4. Colocar la clave sólo en el resumen final de la auditoría

   Los metadatos posteriores a la ejecución no pueden influir en la deduplicación del lado del servidor.

**Concept:** Nuevos intentos de mutación idempotentes

**Authored coaching hints:**

- ¿Es el nuevo intento una nueva operación comercial o otro intento en la misma?
- ¿Qué componente realiza la deduplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma API de implantação aceita chaves de idempotência. Um agente tenta novamente a mesma implantação lógica após uma falha de rede. Como deve usar a chave?

1. Gerar uma nova chave para cada tentativa de transporte

   Novas chaves podem fazer as recorrências parecerem novas operações.

2. Usar uma chave para cada implantação em todos os projetos

   As operações não relacionadas não devem ser misturadas.

3. Reutilizar a chave da operação nas novas tentativas, conforme o contrato da API **[CORRECT]**

   Uma identidade de operação estável permite que o serviço reduplique tentativas suportadas.

4. Colocar a chave apenas no resumo final da auditoria

   Os metadados pós-execução não podem influenciar a deduplicação do lado do servidor.

**Concept:** Repetições de mutação idempotentes

**Authored coaching hints:**

- A nova tentativa é uma nova operação comercial ou outra tentativa na mesma?
- Qual componente realiza a deduplicação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-052:8b36efaf6d6a1bcda20b5bbb742c35f982f4b8f495924dfda997558b2fad08fe -->
## Question 52: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-052`

**Content revision:** `8b36efaf6d6a1bcda20b5bbb742c35f982f4b8f495924dfda997558b2fad08fe`

### English

A PR-commenting job also has a manual trigger. Manual runs fail because no PR number exists. What is the best fix?

1. Guess the PR number from the latest branch

   Guessing risks commenting on an unrelated PR.

2. Give the job broader repository permissions

   Permissions do not create missing event data.

3. Retry the missing-number failure automatically

   A retry does not change the trigger context.

4. Gate PR-specific work on a validated PR event context **[CORRECT]**

   Event-aware gating prevents actions that require absent PR metadata.

**Concept:** Defensive workflow event gating

**Authored coaching hints:**

- Does every trigger supply the same event fields?
- What precondition must hold before the comment action runs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de comentarios PR también tiene un gatillo manual. Las ejecuciones manuales fallan porque no existe el número PR. ¿Cuál es la mejor solución?

1. Supongo que el número PR de la última rama

   Adivinar los riesgos de comentar sobre un PR no relacionado.

2. Dar al trabajo permisos de repositorio más amplios

   Los permisos no crean datos de eventos faltantes.

3. Prueba de nuevo el número de fallas faltantes automáticamente

   Un nuevo intento no cambia el contexto del gatillo.

4. Condicionar el trabajo específico de PR a un contexto de evento de PR validado **[CORRECT]**

   El gating de conocimiento de acontecimientos evita acciones que requieren la ausencia de metadatos PR.

**Concept:** Puertas de eventos de flujo de trabajo defensivas

**Authored coaching hints:**

- ¿Todos los disparadores proporcionan los mismos campos de eventos?
- ¿Qué condición previa debe cumplirse antes de que se ejecute la acción de comentarios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho de comentários PR também tem um gatilho manual. Execuções manuais falham porque não existe número PR. Qual é a melhor solução?

1. Adivinha o número PR do último branch.

   Adivinhar os riscos de comentar um PR não relacionado.

2. Dar ao trabalho permissões de repositório mais amplas

   As permissões não criam dados de eventos faltantes.

3. Repete a falha do número faltante automaticamente

   Uma nova tentativa não altera o contexto do gatilho.

4. Condicionar o trabalho específico de PR a um contexto validado de evento de PR **[CORRECT]**

   O gating de conhecimento de eventos impede ações que exigem a ausência de metadados PR.

**Concept:** Segurança de eventos de fluxo de trabalho defensivo

**Authored coaching hints:**

- Todos os gatilhos fornecem os mesmos campos de eventos?
- Qual é a condição prévia para a execução da ação de comentários?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-053:7777f7aa81b5b78f7cae8fe99eff4b1d43a1f6b327502abaab36183c5181f95b -->
## Question 53: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-053`

**Content revision:** `7777f7aa81b5b78f7cae8fe99eff4b1d43a1f6b327502abaab36183c5181f95b`

### English

A planning job produces a small validated flag that a dependent implementation job needs. What is the appropriate GitHub Actions data path?

1. Expose a job output and consume it through the dependency **[CORRECT]**

   Job outputs provide an explicit cross-job value contract.

2. Assume a shell variable automatically persists across jobs

   Separate jobs do not share arbitrary shell state.

3. Scrape the preceding job's console text

   Log scraping is fragile and not a structured handoff.

4. Store the flag in a committed source-code file

   Committing transient orchestration state unnecessarily changes the repository.

**Concept:** Structured cross-job outputs

**Authored coaching hints:**

- Which data mechanism is designed for dependent jobs?
- Is the value code, a report, or a small workflow signal?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de planificación produce una pequeña bandera validada que un trabajo de implementación dependiente necesita. ¿Cuál es la ruta de datos GitHub Actions apropiada?

1. Exponer una salida de job y consumirla mediante la dependencia **[CORRECT]**

   Los resultados de los trabajos proporcionan un contrato explícito de valor entre trabajos.

2. Supongamos que una variable de cáscara persiste automáticamente en todos los trabajos

   Los trabajos separados no comparten el estado de la cáscara arbitrario.

3. Descargar el texto de la consola del trabajo anterior

   El rascado de troncos es frágil y no una entrega estructurada.

4. Almacenar la bandera en un archivo de código fuente comprometido

   Cometer el estado de orquestación transitorio cambia innecesariamente el repositorio.

**Concept:** resultados estructurados entre trabajos

**Authored coaching hints:**

- ¿Qué mecanismo de datos está diseñado para empleos dependientes?
- ¿Es el código de valor, un informe o una pequeña señal de flujo de trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho de planejamento produz uma pequena bandeira validada que um trabalho de implementação dependente precisa. Qual é o caminho de dados GitHub Actions adequado?

1. Expor uma saída de job e consumi-la por meio da dependência **[CORRECT]**

   Os resultados dos empregos fornecem um contrato de valor transversal explícito.

2. Suponha que uma variável shell persista automaticamente em todos os empregos

   Trabalhos separados não compartilham estado de concha arbitrário.

3. Descarregar o texto do console do trabalho anterior

   A raspagem de troncos é frágil e não é uma transferência estruturada.

4. Armazenar a bandeira em um arquivo de código-fonte comprometido

   Cometer um estado de orquestração transitória altera desnecessariamente o repositório.

**Concept:** Output estruturado entre trabalhos

**Authored coaching hints:**

- Qual mecanismo de dados é concebido para empregos dependentes?
- É o código de valor, um relatório ou um pequeno sinal de fluxo de trabalho?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-054:af70e8b3acf2980debea1b5d8964200214db534e4e8258b2ef3a5d0e03a71c2b -->
## Question 54: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-054`

**Content revision:** `af70e8b3acf2980debea1b5d8964200214db534e4e8258b2ef3a5d0e03a71c2b`

### English

An agent generates a large test report in one job for inspection in another. Which mechanism best preserves the report?

1. Print the report and expect the next job to inherit stdout

   Stdout is not an automatic filesystem handoff.

2. Upload a workflow artifact and download it where needed **[CORRECT]**

   Artifacts preserve files for cross-job use and later review.

3. Put the entire report into a short boolean job output

   A flag cannot represent the full evidence file.

4. Store the report in an agent's private conversation only

   Private conversation does not supply the dependent job with the report.

**Concept:** Workflow artifact transfer

**Authored coaching hints:**

- Does the consumer need a value or a file?
- What should remain inspectable after the producing process exits?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente genera un gran informe de prueba en un trabajo para inspección en otro. ¿Qué mecanismo conserva mejor el informe?

1. Imprima el informe y espera que el próximo trabajo hereda stdout

   Stdout no es una transmisión automática de archivos.

2. Cargar un artefacto del flujo de trabajo y descargarlo cuando sea necesario **[CORRECT]**

   Los artefactos conservan archivos para uso transversal y posterior revisión.

3. Pon todo el informe en una salida de trabajo booleano corto

   Una bandera no puede representar el archivo completo de pruebas.

4. Almacenar el informe en la conversación privada de un agente sólo

   La conversación privada no proporciona al trabajo dependiente el informe.

**Concept:** Transferencia de artefactos del flujo de trabajo

**Authored coaching hints:**

- ¿Necesita el consumidor un valor o un archivo?
- ¿Qué debe seguir siendo inspectable después de la salida del proceso de producción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente gera um grande relatório de teste em um trabalho para inspeção em outro. Qual é o melhor mecanismo para preservar o relatório?

1. Imprimir o relatório e esperar que o próximo trabalho herde stdout

   O Stdout não é uma transferência automática de arquivos.

2. Carregar um artefato de fluxo de trabalho e baixá-lo quando necessário **[CORRECT]**

   Os artefatos conservam arquivos para uso transversal e revisão posterior.

3. Colocar todo o relatório em uma saída de trabalho booleano curto

   Uma bandeira não pode representar o arquivo completo de provas.

4. Armazenar o relatório apenas na conversa privada de um agente.

   A conversa privada não fornece ao trabalho dependente o relatório.

**Concept:** Transferência de artefatos do fluxo de trabalho

**Authored coaching hints:**

- O consumidor precisa de um valor ou de um arquivo?
- O que deve continuar a ser inspecionável após a saída do processo de produção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-055:91d92831e2af039285aef53b8aa3e64f55165705690f7ece8f79fc840f737f40 -->
## Question 55: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-055`

**Content revision:** `91d92831e2af039285aef53b8aa3e64f55165705690f7ece8f79fc840f737f40`

### English

A tool call fails with an explicit insufficient-permission response. The task does not authorize expanded privileges. What is the best response?

1. Retry with every available token

   Trying unrelated tokens risks crossing identity boundaries.

2. Disable the service's permission checks

   Permission checks are not errors to bypass.

3. Record the blocked operation and request an authorized resolution path **[CORRECT]**

   A permission failure requires an authority decision, not blind retries.

4. Silently skip the operation and report complete success

   Skipping a required action without disclosure misstates completion.

**Concept:** Permission failure escalation

**Authored coaching hints:**

- Will repetition change the caller's authorization?
- Who can legitimately decide whether access should expand?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una llamada de herramienta falla con una respuesta explícita de permiso insuficiente. La tarea no autoriza privilegios ampliados. ¿Cuál es la mejor respuesta?

1. Intentar de nuevo con cada token disponible

   Probar tokens no relacionados corre el riesgo de cruzar los límites de identidad.

2. Deshabilitar las verificaciones de permisos del servicio

   Las verificaciones de permisos no son errores a omitir.

3. Graba la operación bloqueada y solicita una ruta de resolución autorizada **[CORRECT]**

   Un fallo de permiso requiere una decisión de la autoridad, no reintentos ciegos.

4. Salte silenciosamente la operación y reportar el éxito completo.

   El omitir una acción requerida sin divulgarla equivoca la finalización.

**Concept:** La escalada de las fallas de autorización

**Authored coaching hints:**

- ¿La repetición cambiará la autorización de la persona que llama?
- ¿Quién puede decidir legítimamente si el acceso debe expandirse?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma chamada de ferramenta falha com uma resposta explícita de permissão insuficiente. A tarefa não autoriza a ampliação de privilégios. Qual é a melhor resposta?

1. Repetição com todos os tokens disponíveis

   Experimentar tokens não relacionados corre o risco de atravessar os limites da identidade.

2. Desativar as verificações de permissão do serviço

   As verificações de permissão não são erros a ignorar.

3. Registrar a operação bloqueada e solicitar um caminho de resolução autorizado **[CORRECT]**

   Uma falha de permissão requer uma decisão da autoridade, não voltas cegas.

4. Salte silenciosamente a operação e relate sucesso completo

   Saltar uma ação necessária sem divulgação incorrece em concluir.

**Concept:** escalada de falhas de autorização

**Authored coaching hints:**

- A repetição alterará a autorização do telefonista?
- Quem pode legitimamente decidir se o acesso deve ser ampliado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-056:9d5f716888657b1a834692e83ed41651fe5e3d20b653f7022d39fbb4871bcfa8 -->
## Question 56: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-056`

**Content revision:** `9d5f716888657b1a834692e83ed41651fe5e3d20b653f7022d39fbb4871bcfa8`

### English

An agent's approved dependency download is blocked by the runtime firewall. What is the safest next step?

1. Disable the firewall for the entire session

   Broadly removing egress controls exceeds the demonstrated need.

2. Download the package through an arbitrary mirror

   An arbitrary mirror introduces supply-chain risk.

3. Commit a developer's cached credentials to access another source

   Credentials must not be committed.

4. Check the required destination and seek a narrowly reviewed access change **[CORRECT]**

   A precise reviewed exception addresses the environmental constraint.

**Concept:** Network constraint handling

**Authored coaching hints:**

- Is the blocked destination actually required and trusted?
- How narrow can the access change be?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La descarga de dependencia aprobada de un agente está bloqueada por el tiempo de ejecución firewall. ¿Cuál es el siguiente paso más seguro?

1. Deshabilitar el firewall durante toda la sesión

   La eliminación general de los controles de salida excede la necesidad demostrada.

2. Descargar el paquete a través de un espejo arbitrario

   Un espejo arbitrario introduce riesgos en la cadena de suministro.

3. Comprometer las credenciales almacenadas en caché de un desarrollador para acceder a otra fuente

   No se deben comprometer las credenciales.

4. Compruebe el destino requerido y solicite un cambio de acceso revisado estrechamente **[CORRECT]**

   Una excepción revisada precisa aborda la limitación ambiental.

**Concept:** Manejo de las restricciones de red

**Authored coaching hints:**

- ¿Es realmente necesario y confiable el destino bloqueado?
- ¿Qué tan estrecho puede ser el cambio de acceso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O download de dependência aprovado de um agente é bloqueado pelo tempo de execução firewall. Qual é o próximo passo mais seguro?

1. Desativar o firewall para toda a sessão

   A eliminação geral dos controles de saída excede a necessidade demonstrada.

2. Descarregar o pacote através de um espelho arbitrário

   Um espelho arbitrário introduz riscos na cadeia de suprimentos.

3. Comprometer as credenciais armazenadas em cache de um desenvolvedor para acessar outra fonte

   As credenciais não devem ser comprometidas.

4. Verificar o destino necessário e solicitar uma alteração de acesso restrita e revisada **[CORRECT]**

   Uma exceção revisada precisa aborda a restrição ambiental.

**Concept:** Manutenção de restrições de rede

**Authored coaching hints:**

- O destino bloqueado é realmente necessário e confiável?
- Quão estreita pode ser a mudança de acesso?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-057:d919804973719424cd5abaed799a759840805daf757227e95593736a96a3efe3 -->
## Question 57: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-057`

**Content revision:** `d919804973719424cd5abaed799a759840805daf757227e95593736a96a3efe3`

### English

A local MCP server can inspect sensitive files on the developer's machine. What should setup review consider?

1. Its process permissions and reachable resources, not just its listed tool names **[CORRECT]**

   The server's own execution authority determines what it can actually access.

2. Only whether the server is on localhost

   Localhost is a location, not proof of safe capability.

3. Only whether it appears in a search result

   Discoverability does not establish trust.

4. Whether its name includes the word secure

   A name cannot enforce a resource boundary.

**Concept:** Local MCP execution authority

**Authored coaching hints:**

- Under whose operating-system identity does the server run?
- Can a narrow-looking interface hide broad underlying access?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servidor MCP local puede inspeccionar archivos sensibles en la máquina del desarrollador. ¿Qué debe considerar la revisión de la configuración?

1. Sus permisos de proceso y recursos accesibles, no sólo sus nombres de herramientas listados **[CORRECT]**

   La propia autoridad de ejecución del servidor determina a qué puede acceder.

2. Sólo si el servidor está en localhost

   Localhost es una ubicación, no prueba de capacidad segura.

3. Sólo si aparece en un resultado de búsqueda

   La descubribilidad no crea confianza.

4. Si su nombre incluye la palabra seguro

   Un nombre no puede hacer cumplir un límite de recursos.

**Concept:** Autoridad local de ejecución MCP

**Authored coaching hints:**

- ¿Bajo cuya identidad del sistema operativo se ejecuta el servidor?
- ¿Puede una interfaz de aspecto estrecho ocultar el acceso subyacente amplio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um servidor local MCP pode inspecionar arquivos sensíveis na máquina do desenvolvedor. O que deve considerar a revisão da configuração?

1. As suas permissões de processo e recursos acessíveis, não apenas os nomes das ferramentas listadas **[CORRECT]**

   A própria autoridade de execução do servidor determina o que ele pode realmente acessar.

2. Só se o servidor está em localhost

   Localhost é um local, não prova de capacidade segura.

3. Só se aparece em um resultado de pesquisa

   A descoberta não cria confiança.

4. Se o seu nome inclui a palavra seguro

   Um nome não pode impor um limite de recursos.

**Concept:** Autoridade de execução local MCP

**Authored coaching hints:**

- Sob a identidade de que sistema operacional funciona o servidor?
- Uma interface de aparência estreita pode esconder o acesso subjacente amplo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists>

<!-- certification-coach-question:agentic-058:de8b1d58b6c0901e76af7b444f8b9a4abad40f82c4dbeb1007469520fa523931 -->
## Question 58: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-058`

**Content revision:** `de8b1d58b6c0901e76af7b444f8b9a4abad40f82c4dbeb1007469520fa523931`

### English

An MCP server is approved for use, but a newly added tool can delete production records. What follows from the server's approval?

1. Every future tool is automatically safe for every task

   Approval of a server does not justify unrestricted capability growth.

2. The new capability still needs task-specific review and restrictions **[CORRECT]**

   New mutations change blast radius and should be evaluated separately.

3. Deletion no longer needs service authorization

   Server admission does not bypass backend authorization.

4. Tool descriptions can replace runtime permission checks

   Descriptions inform selection but do not enforce access.

**Concept:** Capability expansion review

**Authored coaching hints:**

- Has the approved action surface changed?
- Does server-level trust answer operation-level risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se aprueba el uso de un servidor MCP, pero una nueva herramienta añadida puede eliminar los registros de producción. ¿Qué sigue de la aprobación del servidor?

1. Cada herramienta futura es automáticamente segura para cada tarea

   La aprobación de un servidor no justifica un crecimiento de capacidad sin restricciones.

2. La nueva capacidad todavía necesita revisión y restricciones específicas de las tareas **[CORRECT]**

   Las nuevas mutaciones cambian el radio de explosión y deben evaluarse por separado.

3. La eliminación ya no requiere autorización de servicio

   La admisión del servidor no pasa por alto las autorizaciones de backend.

4. Las descripciones de herramientas pueden reemplazar las verificaciones de permisos de tiempo de ejecución

   Las descripciones informan la selección pero no obligan al acceso.

**Concept:** Revisión de la expansión de las capacidades

**Authored coaching hints:**

- ¿Ha cambiado la superficie de acción aprobada?
- ¿La confianza a nivel de servidor responde al riesgo a nivel de operación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um servidor MCP é aprovado para uso, mas uma nova ferramenta adicionada pode excluir registros de produção. O que resulta da aprovação do servidor?

1. Todas as ferramentas futuras são automaticamente seguras para todas as tarefas

   A aprovação de um servidor não justifica o crescimento ilimitado das capacidades.

2. A nova capacidade ainda precisa de revisão e restrições específicas de tarefas **[CORRECT]**

   As novas mutações alteram o raio da explosão e devem ser avaliadas separadamente.

3. A exclusão não precisa mais de autorização de serviço

   A admissão do servidor não contorna a autorização do backend.

4. Descrições de ferramentas podem substituir as verificações de permissão de tempo de execução

   As descrições informam a selecção, mas não impõem o acesso.

**Concept:** Revisão da expansão das capacidades

**Authored coaching hints:**

- A superfície de ação aprovada mudou?
- A confiança a nível do servidor responde ao risco a nível da operação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-059:fbae4f748743a3646ad0ab9e026b24b947fe7d4706cea23a6bd05cce70935932 -->
## Question 59: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-059`

**Content revision:** `fbae4f748743a3646ad0ab9e026b24b947fe7d4706cea23a6bd05cce70935932`

### English

A tool's input schema requires an explicit repository identifier. The agent is unsure which of two similarly named repositories is intended. What should it do?

1. Pick whichever repository appears first

   Ordering is not evidence of intended scope.

2. Call both repositories to increase coverage

   Calling both expands scope without authorization.

3. Resolve the canonical target from authorized task context before calling **[CORRECT]**

   Target resolution prevents a valid call against the wrong resource.

4. Omit the field and rely on an undocumented default

   An undocumented default can silently target the wrong repository.

**Concept:** Tool argument and target validation

**Authored coaching hints:**

- Can syntactically valid arguments still identify the wrong resource?
- What task evidence establishes the target?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El esquema de entrada de una herramienta requiere un identificador de repositorio explícito. El agente no está seguro de cuál de los dos repositorios de nombres similares está destinado. ¿Qué debería hacer?

1. Seleccione el repositorio que aparezca primero

   El pedido no es prueba del alcance previsto.

2. Llame a ambos repositorios para aumentar la cobertura

   Llamar a ambos amplía el alcance sin autorización.

3. Resolver el objetivo canónico desde el contexto de la tarea autorizada antes de llamar **[CORRECT]**

   La resolución objetivo evita una llamada válida contra el recurso equivocado.

4. Omitir el campo y confiar en un valor predeterminado no documentado

   Un defecto indocumentado puede dirigirse silenciosamente al repositorio equivocado.

**Concept:** Argumento de la herramienta y validación del objetivo

**Authored coaching hints:**

- ¿Pueden argumentos sintacticamente válidos todavía identificar el recurso equivocado?
- ¿Qué prueba de tarea establece el objetivo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O esquema de entrada de uma ferramenta requer um identificador de repositório explícito. O agente não tem a certeza de qual dos dois repositórios de nomes semelhantes é destinado. O que deve fazer?

1. Escolha o repositório que aparecer primeiro

   A encomenda não é uma prova do alcance previsto.

2. Chamem ambos os repositórios para aumentar a cobertura

   Chamando ambos amplia o escopo sem autorização.

3. Resolver o alvo canônico a partir do contexto autorizado da tarefa antes da chamada **[CORRECT]**

   A resolução-alvo impede uma chamada válida contra o recurso errado.

4. Omitir o campo e confiar em um valor padrão não documentado

   Um padrão não documentado pode atacar silenciosamente o repositório errado.

**Concept:** Argumento de ferramenta e validação de alvo

**Authored coaching hints:**

- Os argumentos sintacticamente válidos ainda podem identificar o recurso errado?
- Que evidência da tarefa estabelece o alvo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-060:6053bc67b1136574e05182851672c4dacb3155c24af0d8339b4f521b471322a5 -->
## Question 60: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-060`

**Content revision:** `6053bc67b1136574e05182851672c4dacb3155c24af0d8339b4f521b471322a5`

### English

A workflow needs to know which event triggered the run, not a centrally managed configuration value. Which GitHub Actions context is appropriate?

1. vars

   The vars context holds configured values rather than event metadata.

2. secrets

   Secrets are not the source of trigger identity.

3. An assumed inherited terminal variable

   Terminal state is not a reliable event contract.

4. github **[CORRECT]**

   The github context exposes run and event metadata.

**Concept:** Workflow context selection

**Authored coaching hints:**

- Is this data a configured setting or runtime event information?
- Which context describes the workflow's invocation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo necesita saber qué evento desencadenó la ejecución, no un valor de configuración gestionado centralmente. ¿Qué contexto GitHub Actions es apropiado?

1. vars

   El contexto de vars contiene valores configurados en lugar de metadatos de eventos.

2. secrets

   Los secretos no son la fuente de la identidad desencadenante.

3. Una variable terminal heredada asumida

   El estado terminal no es un contrato confiable de eventos.

4. github **[CORRECT]**

   El contexto de github expone los metadatos de ejecución y evento.

**Concept:** Selección de contexto de flujo de trabajo

**Authored coaching hints:**

- ¿Son estos datos una configuración o información de eventos de tiempo de ejecución?
- ¿En qué contexto se describe la invocación del flujo de trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho precisa saber qual evento desencadeou a execução, não um valor de configuração gerenciado centralmente. Qual contexto do GitHub Actions é adequado?

1. vars

   O contexto vars contém valores configurados em vez de metadados de eventos.

2. secrets

   Os segredos não são a fonte da identidade do gatilho.

3. Uma variável terminal herdada

   O estado do terminal não é um contrato de eventos confiável.

4. github **[CORRECT]**

   O contexto github expõe os metadados de execução e evento.

**Concept:** Selecção do contexto do fluxo de trabalho

**Authored coaching hints:**

- Estes dados são configurações ou informações de eventos de tempo de execução?
- Qual contexto descreve a invocação do fluxo de trabalho?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-061:6d2e01add1fa7dd8823d979334bcdaa2a3c272c2c4d388986dab6ff05cf4007a -->
## Question 61: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-061`

**Content revision:** `6d2e01add1fa7dd8823d979334bcdaa2a3c272c2c4d388986dab6ff05cf4007a`

### English

An agent runs tests in a checkout but reports results for another branch after a script changes directories. What should the execution path validate?

1. Working directory, repository, and revision before consequential commands **[CORRECT]**

   Explicit execution identity prevents valid commands from validating the wrong code.

2. Only the agent's display name

   Display names do not identify the filesystem target.

3. Only that a test process exited somewhere

   A process exit without provenance is insufficient evidence.

4. The number of available CPU cores

   CPU count does not establish which code was tested.

**Concept:** Execution context verification

**Authored coaching hints:**

- What code did the command actually operate on?
- Which assumptions can a directory change invalidate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente ejecuta pruebas en un checkout, pero informa resultados de otra rama después de que un script cambia de directorio. ¿Qué debe validar la ruta de ejecución?

1. Directorio de trabajo, repositorio y revisión antes de los comandos consecuentes **[CORRECT]**

   La identidad de ejecución explícita impide que los comandos válidos validen el código equivocado.

2. Sólo el nombre del agente.

   Los nombres de la pantalla no identifican el objetivo del sistema de archivos.

3. Sólo que un proceso de prueba salió en algún lugar

   Una salida del proceso sin procedencia es una prueba insuficiente.

4. El número de núcleos CPU disponibles

   El recuento de CPU no establece qué código fue probado.

**Concept:** Verificación del contexto de ejecución

**Authored coaching hints:**

- ¿En qué código operaba el comando?
- ¿Qué suposiciones puede invalidar un cambio de directorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente executa testes em um checkout, mas informa resultados de outra branch após um script mudar de diretório. O que a rota de execução deve validar?

1. Diretório de trabalho, repositório e revisão antes de comandos com efeitos significativos **[CORRECT]**

   A identidade explícita de execução impede que os comandos válidos validem o código errado.

2. Só o nome do agente.

   Os nomes da tela não identificam o alvo do sistema de arquivos.

3. Só que um processo de teste saiu em algum lugar

   Uma saída do processo sem proveniência é uma prova insuficiente.

4. Número de núcleos CPU disponíveis

   A contagem de CPU não estabelece qual código foi testado.

**Concept:** Verificação de contexto de execução

**Authored coaching hints:**

- Em que código operava o comando?
- Quais pressupostos podem ser invalidados por uma alteração de diretório?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-062:642daae2e2f2d336118c11ee2f1e7712a4c87fb992034bb018f1a11f0a594c46 -->
## Question 62: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-062`

**Content revision:** `642daae2e2f2d336118c11ee2f1e7712a4c87fb992034bb018f1a11f0a594c46`

### English

An agent encounters a rate-limit response with a retry delay. Which response best supports robust operation?

1. Start parallel callers to evade the limit

   Parallel pressure can worsen throttling.

2. Honor the delay within a bounded retry policy **[CORRECT]**

   Respecting service guidance reduces load and preserves a controlled recovery path.

3. Rotate identities to avoid accounting

   Identity rotation is not an appropriate rate-limit recovery method.

4. Repeat immediately because reads are harmless

   Read operations still consume rate-limited service capacity.

**Concept:** Rate-limit-aware retries

**Authored coaching hints:**

- What signal has the service supplied about recovery timing?
- Could retry traffic itself sustain the failure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recibe una respuesta de límite de solicitudes que indica cuánto esperar antes de reintentar. ¿Qué respuesta favorece más una operación robusta?

1. Inicie las llamadas paralelas para evadir el límite

   La presión paralela puede empeorar la estrangulación.

2. Respetar la espera indicada dentro de una política de reintentos limitados **[CORRECT]**

   El cumplimiento de las instrucciones de servicio reduce la carga y preserva un camino de recuperación controlado.

3. Rotar las identidades para evitar la contabilidad

   La rotación de identidad no es un método adecuado de recuperación de los límites de tasa.

4. Repita inmediatamente porque las lecturas son inofensivas

   Las operaciones de lectura siguen consumiendo una capacidad de servicio limitada.

**Concept:** Nuevos intentos conscientes de los límites de tasa

**Authored coaching hints:**

- ¿Qué señal ha proporcionado el servicio sobre el tiempo de recuperación?
- ¿Podría volver a intentar el tráfico por sí mismo mantener el fracaso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente recebe uma resposta de limite de solicitações que informa quanto aguardar antes de tentar novamente. Qual resposta favorece uma operação robusta?

1. Iniciar chamadores paralelas para evitar o limite

   A pressão paralela pode piorar o estrangulamento.

2. Respeitar a espera indicada dentro de uma política de tentativas limitadas **[CORRECT]**

   Respeitar as orientações de serviço reduz a carga e preserva um caminho controlado de recuperação.

3. Identidades rotativas para evitar a contabilidade

   A rotação de identidade não é um método adequado de recuperação do limite de taxa.

4. Repita imediatamente porque as leituras são inofensivas

   As operações de leitura ainda consomem capacidade de serviço limitada.

**Concept:** Repetições conscientes dos limites de taxa

**Authored coaching hints:**

- Que sinal forneceu o serviço sobre o tempo de recuperação?
- Será que o tráfego por si só pode suportar o fracasso?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-063:4f431cabf0efc7eef8e8e971330fc7b555757f35add9cedcc10565ae875a7eee -->
## Question 63: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-063`

**Content revision:** `4f431cabf0efc7eef8e8e971330fc7b555757f35add9cedcc10565ae875a7eee`

### English

A mutation tool returns a validation error because a required field is missing. What is the best next step?

1. Retry the identical request with exponential backoff

   Backoff cannot supply a missing argument.

2. Ignore the error if the tool name was correct

   Selecting the correct tool does not make an invalid call succeed.

3. Validate and correct the arguments using the tool contract **[CORRECT]**

   A deterministic input failure requires an input correction.

4. Increase network timeout to permit validation

   Network timeout does not change schema validation.

**Concept:** Deterministic versus transient tool errors

**Authored coaching hints:**

- Would an unchanged request be accepted later?
- Which part of the call is under the caller's control?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta de mutación devuelve un error de validación porque falta un campo requerido. ¿Cuál es el mejor siguiente paso?

1. Intentar de nuevo la solicitud idéntica con retroceso exponencial

   El retroceso no puede proporcionar un argumento faltante.

2. Ignorar el error si el nombre de la herramienta era correcto

   La selección de la herramienta correcta no hace que una llamada inválida tenga éxito.

3. Validar y corregir los argumentos utilizando el contrato de herramienta **[CORRECT]**

   Una falla de entrada determinista requiere una corrección de entrada.

4. Aumentar el tiempo de espera de la red para permitir la validación

   El tiempo de espera de la red no cambia la validación del esquema.

**Concept:** errores deterministas versus transitorios de las herramientas

**Authored coaching hints:**

- ¿Se aceptaría una solicitud sin cambios más tarde?
- ¿Qué parte de la llamada está bajo el control de quien llama?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta de mutação retorna um erro de validação porque um campo requerido está faltando. Qual é o melhor passo a seguir?

1. Repetição da mesma solicitação com retrocesso exponencial

   O back-off não pode fornecer um argumento faltante.

2. Ignore o erro se o nome da ferramenta foi correto

   A selecção da ferramenta correta não faz com que uma chamada inválida seja bem-sucedida.

3. Validar e corrigir os argumentos usando o contrato de ferramenta **[CORRECT]**

   Uma falha de entrada determinista requer uma correção de entrada.

4. Aumentar o intervalo de tempo da rede para permitir a validação

   O timeout da rede não altera a validação do esquema.

**Concept:** Erros deterministas versus transitorios de ferramentas

**Authored coaching hints:**

- Um pedido inalterado seria aceito mais tarde?
- Qual parte da chamada está sob o controle do telefonista?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-064:0bf97a0f71317567e03685bfc3222f9c715eaf5eb66d805d7e63cc364fcf8947 -->
## Question 64: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-064`

**Content revision:** `0bf97a0f71317567e03685bfc3222f9c715eaf5eb66d805d7e63cc364fcf8947`

### English

A patch tool reports a stale base revision rather than applying an edit. What should the agent do?

1. Force overwrite the file from its old buffer

   Forcing stale content can destroy concurrent work.

2. Retry until the version check is bypassed

   Version checks protect consistency and should not be bypassed.

3. Delete the file and recreate the old content

   Recreation still overwrites newer intent.

4. Read the current revision and reconcile the intended change **[CORRECT]**

   Reconciliation applies the authorized change to the actual current state.

**Concept:** Optimistic concurrency handling

**Authored coaching hints:**

- What changed between the read and the write?
- Which information must be refreshed before attempting another edit?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta de corrección informa una revisión de base obsoleta en lugar de aplicar una edición. ¿Qué debería hacer el agente?

1. Forzar a sobrescribir el archivo desde su antiguo buffer

   Forzar el contenido obsoleto puede destruir el trabajo simultáneo.

2. Intentar de nuevo hasta que la verificación de versiones sea pasada

   Las comprobaciones de versiones protegen la coherencia y no deben pasarse por alto.

3. Eliminar el archivo y recrear el contenido antiguo

   La recreación todavía superpone las nuevas intenciones.

4. Leer la revisión actual y reconciliar el cambio previsto **[CORRECT]**

   La reconciliación aplica el cambio autorizado al estado actual.

**Concept:** Manejo optimista de la concurrencia

**Authored coaching hints:**

- ¿Qué cambió entre la lectura y la escritura?
- ¿Qué información debe actualizarse antes de intentar otra edición?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta de correção relata uma revisão de base obsoleta em vez de aplicar uma edição. O que deve fazer o agente?

1. Forçar a sobreescrever o arquivo do seu antigo buffer

   Forçar o conteúdo obsoleto pode destruir o trabalho simultâneo.

2. Tente novamente até que a verificação de versão seja ignorada

   As verificações de versão protegem a coerência e não devem ser ignoradas.

3. Excluir o arquivo e recriar o conteúdo antigo

   A recreação ainda sobrepõe as novas intenções.

4. Leia a revisão atual e conciliar a alteração prevista **[CORRECT]**

   A reconciliação aplica a alteração autorizada ao estado atual.

**Concept:** Manutenção de simultânea optimista

**Authored coaching hints:**

- O que mudou entre a leitura e a escrita?
- Que informações devem ser atualizadas antes de tentar outra edição?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-065:53e3cec33d38be27f3f61c238cbdafd40f2ad8996590d769f613afa9bd50ba92 -->
## Question 65: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-065`

**Content revision:** `53e3cec33d38be27f3f61c238cbdafd40f2ad8996590d769f613afa9bd50ba92`

### English

An agent must change repository A, but its credential can also write repository B. Which setup best narrows the effective scope?

1. Limit credentials and tool targets to repository A **[CORRECT]**

   Resource-scoped authorization and validated targets enforce the assignment boundary.

2. Mention repository A only in the PR title

   A title does not constrain access.

3. Permit both repositories but review weekly

   Weekly review cannot prevent unintended writes.

4. Use whichever repository is easiest to access

   Convenience does not define authorized scope.

**Concept:** Repository-specific permissions

**Authored coaching hints:**

- What happens if the agent selects the wrong repository argument?
- Can authorization reduce that possible impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente debe cambiar el repositorio A, pero su credencial también puede escribir el repositorio B. ¿Cuál configuración restringe mejor el alcance efectivo?

1. Limitar las credenciales y objetivos de las herramientas al repositorio A **[CORRECT]**

   Las autorizaciones a escala de recursos y los objetivos validados hacen cumplir el límite de asignación.

2. Mención del repositorio A sólo en el título PR

   Un título no limita el acceso.

3. Permitir los dos repositorios pero revisar semanalmente

   La revisión semanal no puede evitar escritos no deseados.

4. Utilice el repositorio que sea más fácil de acceder

   La conveniencia no define el alcance autorizado.

**Concept:** Permisos específicos del repositorio

**Authored coaching hints:**

- ¿Qué sucede si el agente selecciona el argumento de repositorio equivocado?
- ¿Puede la autorización reducir ese posible impacto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente deve alterar o repositório A, mas sua credencial também pode escrever o repositório B. Qual configuração restringe melhor o escopo eficaz?

1. Limitar as credenciais e os objetivos das ferramentas para o repositório A **[CORRECT]**

   A autorização baseada em recursos e os objetivos validados reforçam o limite de atribuição.

2. Menção do repositório A apenas no título PR

   Um título não restringe o acesso.

3. Permitir ambos os repositórios mas revisar semanalmente

   A revisão semanal não pode impedir escritos não intencionais.

4. Use o repositório mais fácil de acessar

   A conveniência não define o escopo autorizado.

**Concept:** Permissões específicas do repositório

**Authored coaching hints:**

- O que acontece se o agente selecionar o argumento de repositório errado?
- A autorização pode reduzir esse possível impacto?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-066:1ed8262e1700ec21cac1f62848bffe11460d62894205c27e9a6c538736ea2688 -->
## Question 66: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-066`

**Content revision:** `1ed8262e1700ec21cac1f62848bffe11460d62894205c27e9a6c538736ea2688`

### English

A CI agent needs a secret for one external tool. Which handling approach is best?

1. Include it in the agent's task description

   Task text can persist or be exposed beyond the tool.

2. Inject it at runtime only into the component that needs it **[CORRECT]**

   Scoped runtime injection limits unnecessary exposure.

3. Save it in a committed MCP example file

   Committed configuration is not a secret boundary.

4. Echo it into the PR so operators can reproduce the call

   PR content exposes credentials rather than enabling safe reproducibility.

**Concept:** Runtime credential boundaries

**Authored coaching hints:**

- Which component actually needs the credential?
- Where might task text and logs be retained?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de CI necesita un secreto para una herramienta externa. ¿Cuál es el mejor enfoque de manejo?

1. Incluirlo en la descripción de tareas del agente

   El texto de la tarea puede persistir o exponerse más allá de la herramienta.

2. Inyectar en tiempo de ejecución sólo en el componente que lo necesita **[CORRECT]**

   El objetivo de la inyección en tiempo de ejecución limita la exposición innecesaria.

3. Guardar en un archivo de ejemplos comprometido MCP

   La configuración comprometida no es un límite secreto.

4. Echo en el PR para que los operadores puedan reproducir la llamada

   El contenido de PR expone las credenciales en lugar de permitir una reproducibilidad segura.

**Concept:** límites de credenciales de tiempo de ejecución

**Authored coaching hints:**

- ¿Qué componente realmente necesita la credencial?
- ¿Dónde se pueden conservar el texto y los registros de tareas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente da CI precisa de um segredo para uma ferramenta externa. Qual é a melhor abordagem?

1. Inclui-o na descrição da tarefa do agente

   O texto da tarefa pode persistir ou ser exposto além da ferramenta.

2. Injetá-lo em tempo de execução apenas no componente que precisa dele **[CORRECT]**

   As injecções de tempo de execução visuais limitam a exposição desnecessária.

3. Salve-o em um arquivo de exemplo comprometido MCP

   A configuração comprometida não é um limite secreto.

4. Faça eco no PR para que os operadores possam reproduzir a chamada

   O conteúdo do PR expõe as credenciais em vez de permitir uma reprodução segura.

**Concept:** Limites de credenciais em tempo de execução

**Authored coaching hints:**

- Qual componente realmente precisa da credencial?
- Onde podem ser guardados o texto e os registros das tarefas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-067:ab53d826afe5f90c7629ab6a3adfa5858a2bd0567d5ba0c2f7075003fbec3a97 -->
## Question 67: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-067`

**Content revision:** `ab53d826afe5f90c7629ab6a3adfa5858a2bd0567d5ba0c2f7075003fbec3a97`

### English

A tool successfully starts an asynchronous build and returns a run identifier. What must happen before the agent claims that the build passed?

1. Treat request acceptance as build success

   Starting work is not evidence of its outcome.

2. Wait a fixed short delay and assume completion

   A fixed delay does not establish completion.

3. Inspect the referenced run's terminal result **[CORRECT]**

   The terminal result of the actual run supports the success claim.

4. Count the number of build-log lines

   Log volume does not indicate pass or fail.

**Concept:** Asynchronous tool completion

**Authored coaching hints:**

- What did the initial response confirm?
- Which evidence distinguishes queued, running, and successful work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta inicia con éxito una construcción asíncrona y devuelve un identificador de ejecución. ¿Qué debe pasar antes de que el agente afirme que la construcción pasó?

1. Tratar la aceptación de las solicitudes como un éxito constructivo

   Comenzar el trabajo no es evidencia de su resultado.

2. Esperar un retraso corto fijo y asumir la finalización

   Un retraso fijo no establece la finalización.

3. Consultar el resultado final de la ejecución identificada **[CORRECT]**

   El resultado final de la ejecución real respalda la afirmación de éxito.

4. Cuenta el número de líneas de registro de construcción

   El volumen del registro no indica el paso o el fracaso.

**Concept:** finalización asíncrona de la herramienta

**Authored coaching hints:**

- ¿Qué confirmó la respuesta inicial?
- ¿Qué evidencia distingue entre hacer cola, correr y hacer un trabajo exitoso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta inicia com sucesso uma construção assíncrona e retorna um identificador de execução. O que deve acontecer antes que o agente afirme que a construção passou?

1. Tratar a aceitação de um pedido como um sucesso

   Começar o trabalho não é evidência do seu resultado.

2. Esperar um breve atraso fixo e assumir conclusão

   Um atraso fixo não estabelece a conclusão.

3. Consultar o resultado final da execução identificada **[CORRECT]**

   O resultado final da execução real apoia a alegação de sucesso.

4. Contar o número de linhas de registro de construção

   O volume do registro não indica a passagem ou a falha.

**Concept:** Completamento assíncrono da ferramenta

**Authored coaching hints:**

- O que a resposta inicial confirmou?
- Quais evidências distinguem trabalho na fila, em execução e concluído com sucesso?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-068:74647f8853140b63abdfd361c60feab94d0b91e77a52e67fa210260c938066a5 -->
## Question 68: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-068`

**Content revision:** `74647f8853140b63abdfd361c60feab94d0b91e77a52e67fa210260c938066a5`

### English

An automated update changes three external settings before the fourth fails. The operations are not transactional. What should recovery do first?

1. Assume all four changes were rolled back

   Nontransactional services do not imply automatic rollback.

2. Rerun all writes without checking their outcomes

   Blind replay can duplicate or compound effects.

3. Declare the task successful because most writes worked

   Partial success does not meet the complete task contract.

4. Inventory confirmed effects and follow an authorized compensation or escalation plan **[CORRECT]**

   Recovery needs an accurate effect record and a safe decision path.

**Concept:** Partial external execution

**Authored coaching hints:**

- Which effects are known to have occurred?
- Does undoing an action itself require authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una actualización automática cambia tres configuraciones externas antes de que falle la cuarta. Las operaciones no son transaccionales. ¿Qué debe hacer la recuperación primero?

1. Supongamos que los cuatro cambios fueron revertidos

   Los servicios no transaccionales no implican el retroceso automático.

2. Rerun todos escribe sin comprobar sus resultados

   La repetición ciega puede duplicar o combinar efectos.

3. Declare la tarea exitosa porque la mayoría de los escritos funcionaron

   El éxito parcial no cumple con el contrato completo de tareas.

4. Inventariar los efectos confirmados y seguir un plan autorizado de compensación o escalamiento **[CORRECT]**

   La recuperación necesita un registro exacto de efectos y un camino de decisión seguro.

**Concept:** ejecución externa parcial

**Authored coaching hints:**

- ¿Qué efectos se sabe que han ocurrido?
- ¿Se requiere autoridad para deshacer una acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma atualização automática altera três configurações externas antes da quarta falhar. As operações não são transacionais. O que deve fazer a recuperação primeiro?

1. Suponha que todas as quatro mudanças foram revertidas

   Os serviços não transacionais não implicam um retrocesso automático.

2. Rerun todos escrevem sem verificar os seus resultados

   A repetição cega pode duplicar ou compor efeitos.

3. Declare a tarefa bem-sucedida porque a maioria dos escritos funcionou

   O sucesso parcial não cumpre o contrato de tarefa completo.

4. Inventariar os efeitos confirmados e seguir um plano autorizado de compensação ou escalonamento **[CORRECT]**

   A recuperação precisa de um registro preciso de efeitos e de um caminho seguro de decisão.

**Concept:** Execução externa parcial

**Authored coaching hints:**

- Que efeitos são conhecidos por ter ocorrido?
- Requer autoridade para desfazer uma ação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-069:272ce815d5a0659b6191be509f1006312ad72e0f7c639d81755b82d066c3bc73 -->
## Question 69: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-069`

**Content revision:** `272ce815d5a0659b6191be509f1006312ad72e0f7c639d81755b82d066c3bc73`

### English

A team uses a custom agent in the Copilot SDK and omits its tools restriction, assuming omission means no tools. What does the documented configuration require them to understand?

1. Omitted or null tools allow all tools; restrict the list explicitly **[CORRECT]**

   The documented default is broad access, so omission is not a deny policy.

2. Omitted tools always make the agent read-only

   Read-only behavior must not be inferred from omission.

3. The display name automatically determines allowed tools

   A display name is presentation metadata.

4. The prompt's role title is converted into a permission policy

   A role description does not automatically enforce tool permissions.

**Concept:** Explicit custom-agent tool restrictions

**Authored coaching hints:**

- What is the configuration's documented default?
- Can a missing restriction be mistaken for a secure boundary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo usa un agente personalizado en el Copilot SDK y omite la restricción tools, suponiendo que la omisión significa ninguna herramienta. ¿Qué debe entender sobre la configuración documentada?

1. Si tools se omite o es null, se permiten todas las herramientas; restringir la lista explícitamente **[CORRECT]**

   El defecto documentado es de acceso amplio, por lo que la omisión no es una política de negación.

2. Las herramientas omitidas siempre hacen que el agente sólo sea leído

   El comportamiento de solo lectura no debe deducirse de la omisión.

3. El nombre de la pantalla determina automáticamente las herramientas permitidas

   Un nombre de pantalla es metadatos de presentación.

4. El título de papel del prompt se convierte en una política de permisos

   Una descripción de rol no impone automáticamente los permisos de las herramientas.

**Concept:** Restricciones explícitas de las herramientas de agentes personalizados

**Authored coaching hints:**

- ¿Cuál es la configuración por defecto documentada?
- ¿Se puede confundir una restricción faltante con un límite seguro?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe usa um agente personalizado no Copilot SDK e omite a restrição tools, supondo que a omissão significa nenhuma ferramenta. O que é necessário entender sobre a configuração documentada?

1. Se tools for omitido ou null, todas as ferramentas serão permitidas; restringir a lista explicitamente **[CORRECT]**

   O padrão documentado é de acesso amplo, portanto, a omissão não é uma política de negação.

2. Ferramentas omitidas sempre tornam o agente apenas de leitura

   O comportamento de somente leitura não deve ser inferido da omissão.

3. O nome da tela determina automaticamente as ferramentas permitidas

   Um nome de exibição é metadados de apresentação.

4. O título de papel do prompt é convertido em uma política de permissão

   Uma descrição de função não impõe automaticamente permissões para ferramentas.

**Concept:** Restrições explícitas às ferramentas de agentes personalizados

**Authored coaching hints:**

- Qual é o padrão documentado da configuração?
- Pode-se confundir uma restrição faltante com uma fronteira segura?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents>

<!-- certification-coach-question:agentic-070:59227471d119abe7b62a8dd2605b3b8cd3c2912f53b0af2138ea8873c57c1ca2 -->
## Question 70: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-070`

**Content revision:** `59227471d119abe7b62a8dd2605b3b8cd3c2912f53b0af2138ea8873c57c1ca2`

### English

An organization has configured registry-only MCP access for a supported IDE. A local server is blocked. What should be checked before changing the policy?

1. Whether local servers are automatically exempt

   Local location does not inherently exempt a server from registry restrictions.

2. Whether the server is an approved registry entry with the matching identifier **[CORRECT]**

   Approved membership and matching identity matter under the stated policy.

3. Whether its tool descriptions are especially detailed

   Description quality does not satisfy allowlist membership.

4. Whether the developer can rename it to an approved server

   Impersonating another entry defeats the governance intent.

**Concept:** Local server allowlist admission

**Authored coaching hints:**

- What identity does the policy compare?
- Does a local transport change the server's approval status?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización configuró acceso MCP limitado a los servidores del registro en un IDE compatible. Un servidor local está bloqueado. ¿Qué debe verificarse antes de cambiar la política?

1. Si los servidores locales están exentos automáticamente

   La ubicación local no exime inherentemente a un servidor de las restricciones de registro.

2. Si el servidor es una entrada de registro aprobada con el identificador correspondiente **[CORRECT]**

   Se aprobó la membresía y la identidad correspondiente en virtud de la política declarada.

3. Si las descripciones de sus herramientas son especialmente detalladas

   La calidad de la descripción no satisface la membresía permitida.

4. Si el desarrollador puede renombrarlo a un servidor aprobado

   Impersonar otra entrada derrota la intención de gobierno.

**Concept:** admisión de permisos de servidor local

**Authored coaching hints:**

- ¿Qué identidad compara la política?
- ¿Un transporte local cambia el estado de aprobación del servidor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização configurou acesso MCP restrito aos servidores do registro em uma IDE compatível. Um servidor local está bloqueado. O que verificar antes de mudar a política?

1. Se os servidores locais são automaticamente isentos

   A localização local não exime inerentemente um servidor das restrições de registro.

2. Se o servidor é uma entrada de registro aprovada com o identificador correspondente **[CORRECT]**

   Membro aprovado e matéria de identidade correspondente no escopo da política declarada.

3. Se as descrições das ferramentas são especialmente detalhadas

   A qualidade da descrição não satisfaz a adesão.

4. Se o desenvolvedor pode renomeá-lo para um servidor aprovado

   Impersonar outra entrada derrota a intenção de governança.

**Concept:** Admissão de servidores locais

**Authored coaching hints:**

- Que identidade compara a política?
- Um transporte local muda o status de aprovação do servidor?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/3-model-context-protocol-servers-registries-allow-lists>

<!-- certification-coach-question:agentic-071:982234e21f447f4be40103b0c94e890932e8f322db07c54c7b01fa7831ba739b -->
## Question 71: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-071`

**Content revision:** `982234e21f447f4be40103b0c94e890932e8f322db07c54c7b01fa7831ba739b`

### English

A team assumes its private MCP registry policy automatically constrains Copilot cloud agent. Which setup response matches current GitHub guidance?

1. Assume all Copilot surfaces enforce identical registry policies

   Policy applicability differs across Copilot surfaces.

2. Remove repository MCP configuration because the registry replaces it

   Cloud-agent MCP configuration still needs its own review.

3. Check surface-specific applicability; private registry policy does not apply to cloud agent **[CORRECT]**

   Current guardrail documentation explicitly identifies this policy limitation.

4. Grant cloud agent every registered tool to ensure compatibility

   Registry presence does not justify broad capability access.

**Concept:** Surface-specific MCP policy applicability

**Authored coaching hints:**

- Is an IDE control necessarily a cloud-runtime control?
- Which documentation defines the enforcement surface?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo asume que su política privada de registro MCP limita automáticamente el agente de nube Copilot. ¿Qué respuesta de configuración coincide con la actual guía de GitHub?

1. Suponga que todas las superficies de Copilot apliquen políticas de registro idénticas

   La aplicabilidad de las políticas difiere entre las superficies Copilot.

2. Eliminar la configuración de repositorio MCP porque el registro lo reemplaza

   La configuración del agente en la nube MCP todavía necesita su propia revisión.

3. Verificar la aplicabilidad específica de la superficie; la política de registro privado no se aplica a los agentes en la nube **[CORRECT]**

   La documentación actual de salvaguardas identifica explícitamente esta limitación de política.

4. Grant cloud agent todas las herramientas registradas para garantizar la compatibilidad

   La presencia del registro no justifica el acceso a una amplia capacidad.

**Concept:** Aplicabilidad de la política MCP específica de la superficie

**Authored coaching hints:**

- ¿Es un control de IDE necesariamente un control de tiempo de ejecución en la nube?
- ¿Qué documentación define la superficie de aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe assume que a sua política de registro privado do MCP limita automaticamente o agente da nuvem do Copilot. Qual resposta de configuração corresponde às orientações atuais da GitHub?

1. Suponha que todas as superfícies Copilot aplicem políticas de registro idênticas

   A aplicabilidade das políticas varia entre as superfícies Copilot.

2. Remova a configuração do repositório MCP porque o registro o substitui

   A configuração MCP de agente de nuvem ainda precisa de sua própria revisão.

3. Verificar a aplicabilidade específica da superfície; a política de registro privado não se aplica ao agente em nuvem **[CORRECT]**

   A documentação atual sobre as vigas identifica explícitamente esta limitação da política.

4. Conceder aos agentes da nuvem todas as ferramentas registradas para garantir a compatibilidade

   A presença do registro não justifica um acesso amplo às capacidades.

**Concept:** Aplicabilidade da política MCP específica da superfície

**Authored coaching hints:**

- Um controle de IDE é necessariamente um controle de tempo de execução em nuvem?
- Que documentação define a superfície da aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-072:45f1fa54a0d3056e33ef4c19188130463105d58921017455f48101dbf675b971 -->
## Question 72: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-072`

**Content revision:** `45f1fa54a0d3056e33ef4c19188130463105d58921017455f48101dbf675b971`

### English

An agent-generated shell command inserts an issue title directly into executable syntax. What is the best execution-path improvement?

1. Trust issue titles because they are stored on GitHub

   Repository content can still contain adversarial input.

2. Ask the model to promise not to generate metacharacters

   A promise does not enforce data-code separation.

3. Run the command with administrator access to prevent errors

   Higher privilege increases the possible damage.

4. Pass untrusted values as safely handled data and validate command intent **[CORRECT]**

   Data handling and intent validation reduce injection risk.

**Concept:** Safe command argument handling

**Authored coaching hints:**

- Where does external text become executable structure?
- Can the same operation be expressed without interpreting that text as code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un comando de shell generado por un agente inserta un título del problema directamente en la sintaxis ejecutable. ¿Cuál es la mejor mejora del camino de ejecución?

1. Títulos de confianza porque se almacenan en GitHub

   El contenido del repositorio aún puede contener entradas adversas.

2. Pídale al modelo que prometa no generar metacaracteres

   Una promesa no impone la separación del código de datos.

3. Ejecutar el comando con acceso al administrador para evitar errores

   Un privilegio mayor aumenta los posibles daños.

4. Pasar valores no confiables como datos manejados de forma segura y validar la intención del comando **[CORRECT]**

   La manipulación de datos y la validación de la intención reducen el riesgo de inyección.

**Concept:** manejo seguro de los argumentos de comando

**Authored coaching hints:**

- ¿Dónde se convierte el texto externo en estructura ejecutable?
- ¿Se puede expresar la misma operación sin interpretar ese texto como código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um comando de shell gerado por um agente inserir um título de problema diretamente na sintaxe executável. Qual é a melhor melhoria do caminho de execução?

1. Títulos de emissão de confiança porque são armazenados em GitHub

   O conteúdo do repositório pode ainda conter informações adversas.

2. Peça ao modelo para prometer não gerar metacaráter

   Uma promessa não impõe a separação do código de dados.

3. Execute o comando com acesso de administrador para evitar erros

   Um privilégio maior aumenta os possíveis danos.

4. Passar valores não confiáveis como dados manuseados de forma segura e validar a intenção do comando **[CORRECT]**

   O tratamento dos dados e a validação da intenção reduzem o risco de injecção.

**Concept:** Manutenção segura de argumentos de comando

**Authored coaching hints:**

- Onde o texto externo se torna estrutura executável?
- A mesma operação pode ser expressa sem interpretar esse texto como código?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-073:cc2a26b6384e98b0b64e5afc1247ae6c1377f50559257fd478bc1d7a6db75379 -->
## Question 73: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-073`

**Content revision:** `cc2a26b6384e98b0b64e5afc1247ae6c1377f50559257fd478bc1d7a6db75379`

### English

A build job has read-only repository access. Only a later PR-creation job needs write access. What permission design is most appropriate?

1. Keep the build read-only and grant the later job only its required writes **[CORRECT]**

   Job-specific elevation limits exposure to the stage that needs it.

2. Grant write access globally so every job is consistent

   Global writes unnecessarily broaden the build's authority.

3. Use a personal administrator token throughout

   An administrator token exceeds both jobs' needs.

4. Disable authentication and rely on branch names

   Branch naming cannot replace authorization.

**Concept:** Job-scoped permission elevation

**Authored coaching hints:**

- Which stage actually mutates a resource?
- What authority remains exposed if a build dependency is compromised?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de construcción tiene acceso al repositorio solo para lectura. Sólo un trabajo posterior de creación de PR necesita acceso de escritura. ¿Qué diseño de permiso es más apropiado?

1. Mantenga la construcción de solo lectura y otorgar el trabajo posterior sólo sus escritos requeridos **[CORRECT]**

   La elevación específica del trabajo limita la exposición a la etapa que la necesita.

2. Grant escribe acceso a nivel mundial para que cada trabajo sea consistente

   Global escribe ampliando innecesariamente la autoridad de la construcción.

3. Utilice un token de administrador personal en todo

   Un token de administrador excede las necesidades de ambos trabajos.

4. Deshabilitar la autenticación y confiar en los nombres de las ramas

   El nombre de la rama no puede reemplazar la autorización.

**Concept:** elevación de permisos a escala de trabajo

**Authored coaching hints:**

- ¿En qué etapa se muta realmente un recurso?
- ¿Qué autoridad queda expuesta si se compromete una dependencia de construcción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho de construção tem acesso ao repositório apenas para leitura. Só um trabalho posterior de criação de PR precisa de acesso de escrita. Qual design de permissão é mais apropriado?

1. Manter o build somente leitura e conceder ao job posterior apenas as gravações necessárias **[CORRECT]**

   A elevação específica do trabalho limita a exposição ao estágio que precisa dela.

2. Grant escrever acesso global para que cada trabalho é consistente

   A Global escreve para ampliar desnecessariamente a autoridade da construção.

3. Usar um token de administrador pessoal em todo

   Um token de administrador excede as necessidades de ambos os empregos.

4. Desativar autenticação e confiar em nomes de sucursais

   A nomeação do branch não pode substituir a autorização.

**Concept:** elevação de permissão de trabalho

**Authored coaching hints:**

- Qual estágio muta realmente um recurso?
- Que autoridade permanece exposta se uma dependência de construção for comprometida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-074:7f0198ac3f3085dee638db80835e7dca038c0e2ea152d78be6ef431749b6b86e -->
## Question 74: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-074`

**Content revision:** `7f0198ac3f3085dee638db80835e7dca038c0e2ea152d78be6ef431749b6b86e`

### English

A local setup uses a remote MCP endpoint that is unreachable from the cloud execution network. What should deployment preparation verify?

1. Only that the URL worked on the author's laptop

   Laptop connectivity does not prove cloud-runtime connectivity.

2. Reachability, authentication, and policy compatibility from the actual runtime **[CORRECT]**

   Tool readiness must be established in the environment that will execute it.

3. Only that the endpoint appears in the prompt

   A prompt reference does not configure a connection.

4. That all network checks are disabled

   Disabling checks removes useful boundaries rather than proving compatibility.

**Concept:** Runtime-specific MCP readiness

**Authored coaching hints:**

- From which network and identity will the request originate?
- Which assumptions change when execution moves environments?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración local utiliza un endpoint remoto MCP que es inaccesible desde la red de ejecución en la nube. ¿Qué debe comprobar la preparación para el despliegue?

1. Sólo que la URL funcionó en la computadora portátil del autor

   La conectividad de la computadora portátil no prueba la conectividad en la nube.

2. Accesividad, autenticación y compatibilidad de las políticas desde el tiempo de ejecución real **[CORRECT]**

   La preparación de la herramienta debe establecerse en el entorno que la ejecutará.

3. Sólo que el endpoint aparece en el aviso

   Mencionar el endpoint en un prompt no configura una conexión.

4. Que todos los controles de la red están desactivados

   Desactivar los controles elimina los límites útiles en lugar de probar la compatibilidad.

**Concept:** Preparación MCP específica para el tiempo de ejecución

**Authored coaching hints:**

- ¿De qué red e identidad se procederá la solicitud?
- ¿Qué suposiciones cambian cuando la ejecución mueve ambientes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração local usa um endpoint remoto MCP que é inacessível da rede de execução em nuvem. O que deve verificar a preparação para a implantação?

1. Só que a URL funcionou no laptop do autor.

   A conectividade do portátil não prova a conectividade no tempo de execução da nuvem.

2. Accessibilidade, autenticação e compatibilidade de políticas a partir do tempo de execução real **[CORRECT]**

   A preparação da ferramenta deve ser estabelecida no ambiente que a executará.

3. Só que o endpoint aparece no prompt

   Mencionar o endpoint em um prompt não configura uma conexão.

4. Que todas as verificações de rede estão desativadas

   A desativação das verificações elimina os limites úteis em vez de provar a compatibilidade.

**Concept:** Preparação MCP específica para o tempo de execução

**Authored coaching hints:**

- De que rede e identidade se originará o pedido?
- Que suposições mudam quando a execução muda os ambientes?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-075:47c099351a7b419921a6b2f664f1b69467fabd68194c35806c4b0fff7d7483d3 -->
## Question 75: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-075`

**Content revision:** `47c099351a7b419921a6b2f664f1b69467fabd68194c35806c4b0fff7d7483d3`

### English

A search tool returns only the first page of matching issues. The agent must produce a complete inventory. What should it do?

1. Treat the first page as exhaustive

   A limited page does not establish completeness.

2. Estimate missing items from the title distribution

   Estimated issues are not an inventory.

3. Follow documented pagination within task limits or report incomplete coverage **[CORRECT]**

   Pagination or an explicit limitation preserves evidence-based reporting.

4. Repeat the first-page request until the count seems stable

   Repeating the same page does not retrieve omitted results.

**Concept:** Tool result completeness

**Authored coaching hints:**

- Does the response indicate truncation or another page?
- What evidence supports the word complete?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta de búsqueda sólo devuelve la primera página de problemas de coincidencia. El agente debe producir un inventario completo. ¿Qué debería hacer?

1. Tratar la primera página como exhaustiva

   Una página limitada no establece la integridad.

2. Estimación de los elementos faltantes de la distribución de títulos

   Los números estimados no son un inventario.

3. Seguir la paginación documentada dentro de los límites de la tarea o informar la cobertura incompleta **[CORRECT]**

   La paginación o una limitación explícita preserva la información basada en la evidencia.

4. Repita la solicitud de la primera página hasta que el recuento parezca estable

   La repetición de la misma página no recupera resultados omitidos.

**Concept:** Completidad del resultado de la herramienta

**Authored coaching hints:**

- ¿La respuesta indica truncation o otra página?
- ¿Qué evidencia apoya la palabra completa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta de pesquisa retorna apenas a primeira página de problemas de correspondência. O agente deve fazer um inventário completo. O que deve fazer?

1. Trate a primeira página como exaustiva

   Uma página limitada não estabelece a integridade.

2. Estimação dos itens perdidos da distribuição de títulos

   Os números estimados não são um inventário.

3. Seguir a paginação documentada dentro dos limites da tarefa ou informar a cobertura incompleta **[CORRECT]**

   A paginação ou uma limitação explícita preservam a comunicação baseada em evidências.

4. Repita o pedido da primeira página até que a contagem pareça estável

   Repetição da mesma página não recupera resultados omitidos.

**Concept:** Completidade do resultado da ferramenta

**Authored coaching hints:**

- A resposta indica truncation ou outra página?
- Que evidência apoia a palavra completa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-076:a5e519748062d83c79b6daee29fefe00ba62efd56cfc19fcd3980e522bb2878a -->
## Question 76: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-076`

**Content revision:** `a5e519748062d83c79b6daee29fefe00ba62efd56cfc19fcd3980e522bb2878a`

### English

An execution tool returns exit status zero, but its output says 'no tests discovered.' The task requires test execution. What should the agent conclude?

1. All intended tests passed

   No discovered tests is not proof that intended tests passed.

2. No tests are needed because the tool succeeded

   The task contract still requires execution.

3. The task is complete if compilation passed

   Compilation does not replace the specified evidence.

4. The command completed, but required test evidence is still missing **[CORRECT]**

   Process success must be interpreted against the tool's actual outcome.

**Concept:** Semantic interpretation of tool success

**Authored coaching hints:**

- What did the command actually validate?
- Is a successful process identical to a successful task?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta de ejecución devuelve el estado de salida cero, pero su salida dice 'no se han descubierto pruebas'. ¿Qué debería concluir el agente?

1. Pasaron todos los pruebas previstos

   Ninguna prueba descubierta no es prueba de que las pruebas previstas hayan sido aprobadas.

2. No se necesitan pruebas porque la herramienta ha tenido éxito

   El contrato de tarea aún requiere ejecución.

3. La tarea está completa si la compilación ha pasado

   La compilación no sustituye a las pruebas especificadas.

4. El comando completado, pero la prueba requerida todavía falta. **[CORRECT]**

   El éxito del proceso debe interpretarse en función del resultado real de la herramienta.

**Concept:** interpretación semántica del éxito de las herramientas

**Authored coaching hints:**

- ¿Qué confirmaba en realidad el comando?
- ¿Es un proceso exitoso idéntico a una tarea exitosa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta de execução retorna o estado de saída zero, mas sua saída diz "nenhum teste descoberto". A tarefa requer execução de teste. O que deve concluir o agente?

1. Todos os testes previstos aprovados

   Nenhum teste descoberto não é prova de que os testes previstos foram aprovados.

2. Não são necessários testes porque a ferramenta foi bem sucedida

   O contrato de tarefa ainda exige execução.

3. A tarefa é concluída se a compilação for aprovada

   A compilação não substitui as provas especificadas.

4. O comando foi concluído, mas as provas de teste exigidas ainda faltam. **[CORRECT]**

   O êxito do processo deve ser interpretado em função do resultado real da ferramenta.

**Concept:** Interpretação semântica do sucesso das ferramentas

**Authored coaching hints:**

- O que o comando realmente validou?
- Um processo bem sucedido é idêntico a uma tarefa bem sucedida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-077:3c8195234ce1fead78c92722aacae1593501a34b88c9e0fbe2632368a8cae877 -->
## Question 77: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-077`

**Content revision:** `3c8195234ce1fead78c92722aacae1593501a34b88c9e0fbe2632368a8cae877`

### English

A team designs rollback for an agent-generated configuration deployment. Which preparation is most useful?

1. Record the previous known-good revision and a tested, authorized restoration path **[CORRECT]**

   A precise recovery target and path support reliable restoration.

2. Assume deleting the new branch restores every external system

   External effects are not undone merely by deleting a branch.

3. Rely on the model to reconstruct old values from memory

   Reconstruction from memory is not a trustworthy recovery source.

4. Remove all execution logs after deployment

   Deleting logs removes evidence needed for recovery.

**Concept:** Rollback preparation

**Authored coaching hints:**

- What state must recovery restore?
- Can the operator identify that state independently of the agent's recollection?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo diseña un retroceso para un despliegue de configuración generado por un agente. ¿Qué preparación es más útil?

1. Registrar la revisión anterior de funcionamiento comprobado y una ruta de restauración probada y autorizada **[CORRECT]**

   Un objetivo y una ruta de recuperación precisos apoyan una restauración fiable.

2. Supongamos que la eliminación de la nueva rama restaura todos los sistemas externos

   Los efectos externos no se eliminan simplemente eliminando una rama.

3. Confía en el modelo para reconstruir valores antiguos a partir de la memoria

   La reconstrucción de la memoria no es una fuente de recuperación confiable.

4. Eliminar todos los registros de ejecución después del despliegue

   Eliminar registros elimina la evidencia necesaria para la recuperación.

**Concept:** Preparación para la reversión

**Authored coaching hints:**

- ¿Qué estado debe restaurar la recuperación?
- ¿Puede el operador identificar ese estado independientemente del recuerdo del agente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe desenha um rollback para uma configuração gerada por um agente. Qual preparação é mais útil?

1. Registrar a revisão anterior comprovadamente funcional e uma rota de restauração testada e autorizada **[CORRECT]**

   Uma meta de recuperação precisa e um caminho sustentam uma restauração confiável.

2. Suponha que a exclusão do novo branch restabeleça todos os sistemas externos

   Os efeitos externos não são eliminados simplesmente eliminando um branch.

3. Confie no modelo para reconstruir valores antigos a partir da memória

   Reconstruir a memória não é uma fonte de recuperação confiável.

4. Remover todos os registros de execução após a implantação

   A exclusão de registros elimina a evidência necessária para a recuperação.

**Concept:** Preparação para reversão

**Authored coaching hints:**

- Que estado deve restaurar a recuperação?
- O operador pode identificar esse estado independentemente da memória do agente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-078:8742b084d8590fe29bec8d26a04b15df38447f7cb40fc5777f63e6cda4de835e -->
## Question 78: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-078`

**Content revision:** `8742b084d8590fe29bec8d26a04b15df38447f7cb40fc5777f63e6cda4de835e`

### English

An agent uses a supported tool to create a PR, but repository rules reject the proposed operation. What should it do?

1. Use another identity to bypass the rejection

   Switching identities to bypass controls exceeds authorization.

2. Explain the rule conflict and pursue an approved compliant path **[CORRECT]**

   Repository rules constrain the permitted execution path.

3. Disable the rules because the task requested a PR

   A task request does not authorize removing protections.

4. Report the PR as created because the tool was available

   Tool availability is not evidence that a resource was created.

**Concept:** Repository control compliance

**Authored coaching hints:**

- Does capability imply permission to bypass acceptance rules?
- What would make the next attempt compliant?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente utiliza una herramienta soportada para crear un PR, pero las reglas del repositorio rechazan la operación propuesta. ¿Qué debería hacer?

1. Usar otra identidad para evitar el rechazo

   Cambiar las identidades para eludir los controles excede la autorización.

2. Explicar el conflicto de reglas y seguir un camino de conformidad aprobado **[CORRECT]**

   Las reglas del repositorio limitan la ruta de ejecución permitida.

3. Deshabilitar las reglas porque la tarea solicitó un PR

   Una solicitud de tarea no autoriza la eliminación de protecciones.

4. Informar el PR como creado porque la herramienta estaba disponible

   La disponibilidad de herramientas no es evidencia de que se haya creado un recurso.

**Concept:** Cumplimiento de los controles del repositorio

**Authored coaching hints:**

- ¿La capacidad implica el permiso para eludir las reglas de aceptación?
- ¿Qué haría que el próximo intento sea compatible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente usa uma ferramenta suportada para criar um PR, mas as regras do repositório rejeitam a operação proposta. O que deve fazer?

1. Usar outra identidade para contornar a rejeição

   A troca de identidades para contornar controles excede a autorização.

2. Explicar o conflito de regras e seguir um caminho de conformidade aprovado **[CORRECT]**

   As regras do repositório restringem o caminho de execução permitido.

3. Desativar as regras porque a tarefa solicitou um PR

   Um pedido de tarefa não autoriza a remoção de proteções.

4. Relatar o PR como criado porque a ferramenta estava disponível

   A disponibilidade de ferramentas não é prova de que um recurso foi criado.

**Concept:** conformidade com o controle dos repositórios

**Authored coaching hints:**

- A capacidade implica permissão para contornar as regras de aceitação?
- O que tornaria a próxima tentativa compatível?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-079:92fdedfdab1af7fb18063e0ba585d3302b25a0b3555bbf0be0420ec10bdab7e1 -->
## Question 79: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-079`

**Content revision:** `92fdedfdab1af7fb18063e0ba585d3302b25a0b3555bbf0be0420ec10bdab7e1`

### English

A workflow transfers an agent-generated target name to a privileged deployment job. Which safeguard is most important before use?

1. Trust it because it is a job output

   Structured transfer does not make generated data trustworthy.

2. Use the target with administrator permissions first

   Privilege does not validate the target.

3. Validate it against authorized targets and the approved task context **[CORRECT]**

   Validation prevents an otherwise valid handoff from redirecting authority.

4. Convert it to uppercase to make it safe

   Formatting does not establish authorization.

**Concept:** Validating cross-job tool inputs

**Authored coaching hints:**

- What makes the destination authorized rather than merely well formed?
- Does a transport mechanism establish trust in its contents?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo transfiere un nombre objetivo generado por un agente a un trabajo de despliegue privilegiado. ¿Cuál es la protección más importante antes de su uso?

1. Confía en él porque es una producción de trabajo

   La transferencia estructurada no hace que los datos generados sean fiables.

2. Utilice el objetivo con los permisos de administrador primero

   El privilegio no valida el objetivo.

3. Validalo en relación con los objetivos autorizados y el contexto de tarea aprobado **[CORRECT]**

   La validación evita que una transmisión válida de otra manera se realice por parte de la autoridad redirigente.

4. Conviértelo en mayúsculas para que sea seguro

   El formato no establece la autorización.

**Concept:** Validación de las entradas de las herramientas transversales

**Authored coaching hints:**

- ¿Qué hace que el destino sea autorizado y no simplemente bien formado?
- ¿Establece un mecanismo de transporte confianza en su contenido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho transfere um nome-alvo gerado por um agente para um trabalho de implantação privilegiado. Qual é a proteção mais importante antes da utilização?

1. Confia nele, porque é um trabalho.

   A transferência estruturada não torna os dados gerados confiáveis.

2. Use o alvo com permissões de administrador primeiro

   Privilegio não valida o alvo.

3. Validar em relação aos objetivos autorizados e ao contexto de tarefa aprovado **[CORRECT]**

   A validação impede uma transferência válida por outro motivo da autoridade redirecionadora.

4. Converte-o em letras maiúsculas para ser seguro

   A formatagem não estabelece autorização.

**Concept:** Validação das entradas das ferramentas de trabalho cruzado

**Authored coaching hints:**

- O que faz com que o destino seja autorizado e não apenas bem formado?
- Um mecanismo de transporte estabelece confiança no seu conteúdo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-080:b7abdebb016276191b8c91004fa954d920e3b73bb7c30fe18bb41ac0bb9ec679 -->
## Question 80: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-080`

**Content revision:** `b7abdebb016276191b8c91004fa954d920e3b73bb7c30fe18bb41ac0bb9ec679`

### English

An agent must stop a background process it launched for testing. Other users have similar processes on the shared host. What is the safest approach?

1. Stop all processes with the same executable name

   Name-based stopping may affect unrelated users.

2. Restart the shared host

   A host restart has excessive blast radius.

3. Leave every process running to avoid identifying ownership

   Owned helpers still require lifecycle cleanup.

4. Use the recorded process or session identity to stop only its own helper **[CORRECT]**

   Recorded ownership permits targeted cleanup without disturbing other work.

**Concept:** Execution resource lifecycle

**Authored coaching hints:**

- Which resource did this task create?
- How can cleanup distinguish ownership from a shared executable name?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente debe detener un proceso de fondo que lanzó para las pruebas. Otros usuarios tienen procesos similares en el host compartido. ¿Cuál es el método más seguro?

1. Detener todos los procesos con el mismo nombre ejecutable

   La interrupción basada en el nombre puede afectar a usuarios no relacionados.

2. Reiniciar el host compartido

   Un reinicio del anfitrión tiene un radio de explosión excesivo.

3. Dejar cada proceso en funcionamiento para evitar identificar la propiedad

   Los ayudantes de propiedad todavía necesitan limpieza del ciclo de vida.

4. Utilice el proceso grabado o la identidad de sesión para detener sólo su propio ayudante **[CORRECT]**

   La propiedad registrada permite la limpieza dirigida sin perturbar otros trabajos.

**Concept:** Ciclo de vida de los recursos de ejecución

**Authored coaching hints:**

- ¿Qué recurso creó esta tarea?
- ¿Cómo puede la limpieza distinguir la propiedad de un nombre ejecutable compartido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente deve parar um processo de fundo que lançou para testes. Outros usuários têm processos semelhantes no host compartilhado. Qual é a abordagem mais segura?

1. Parar todos os processos com o mesmo nome executável

   A interrupção baseada no nome pode afectar os usuários não relacionados.

2. Reiniciar o host compartilhado

   Uma reinicialização do hospedeiro tem um raio de explosão excessivo.

3. Deixar todos os processos em execução para evitar identificar a propriedade

   Os ajudantes de propriedade ainda precisam de limpeza do ciclo de vida.

4. Usar o processo gravado ou sessão de identidade para parar apenas seu próprio ajudante **[CORRECT]**

   As licenças de propriedade registadas permitem uma limpeza específica sem perturbar outros trabalhos.

**Concept:** Ciclo de vida do recurso de execução

**Authored coaching hints:**

- Que recurso criou esta tarefa?
- Como a limpeza pode distinguir a propriedade de um nome executável compartilhado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-081:c88b64508b56fa16aee5aba0ab7edfd5b5e4854a5e9f6f642f50b21aa54b2393 -->
## Question 81: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-081`

**Content revision:** `c88b64508b56fa16aee5aba0ab7edfd5b5e4854a5e9f6f642f50b21aa54b2393`

### English

An external tool changes its response schema. The agent's parser now treats missing status fields as success. What should be fixed?

1. Validate response contracts and fail safely on unrecognized outcomes **[CORRECT]**

   Unknown schemas must not become fabricated success signals.

2. Default every absent field to successful completion

   Missing information does not prove success.

3. Increase retry count without changing parsing

   Retries do not repair deterministic parser assumptions.

4. Ignore tool output and trust the intended operation

   Intent cannot establish an external action's result.

**Concept:** Tool response contract validation

**Authored coaching hints:**

- What does an absent status actually establish?
- How should an unknown result differ from a confirmed result?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta externa cambia su esquema de respuesta. El analizador del agente ahora trata los campos de estado faltantes como un éxito. ¿Qué hay que arreglar?

1. Validar los contratos de respuesta y fallar con seguridad en resultados no reconocidos **[CORRECT]**

   Los esquemas desconocidos no deben convertirse en señales de éxito inventadas.

2. Default todos los campos ausentes para completar con éxito

   La falta de información no demuestra el éxito.

3. Aumentar el número de intentos de repetición sin cambiar el análisis

   Los pruebas retrospectivos no reparan las suposiciones deterministas del parser.

4. Ignorar la salida de la herramienta y confiar en la operación prevista

   La intención no puede establecer el resultado de una acción externa.

**Concept:** Validación del contrato de respuesta a la herramienta

**Authored coaching hints:**

- ¿Qué establece realmente un estado de ausencia?
- ¿Cómo debe diferir un resultado desconocido de un resultado confirmado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta externa altera o seu esquema de resposta. O analisador do agente agora trata campos de status faltantes como sucesso. O que deve ser corrigido?

1. Validar os contratos de resposta e falhar com segurança em resultados não reconhecidos **[CORRECT]**

   Os esquemas desconhecidos não devem tornar-se sinais de sucesso fabricados.

2. Default todos os campos ausentes para conclusão bem-sucedida

   A falta de informação não prova o sucesso.

3. Aumentar o número de retestes sem alterar a análise

   As tentativas retrospectivas não corrigem as suposições deterministas do analisador.

4. Ignorar a saída da ferramenta e confiar na operação prevista

   A intenção não pode estabelecer o resultado de uma ação externa.

**Concept:** Validação de contratos de resposta a ferramentas

**Authored coaching hints:**

- O que é realmente estabelecido por um estado de ausência?
- Como deve um resultado desconhecido diferir de um resultado confirmado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-082:10994b390d48c98da1f94551e367e28010fea859f230701743f7afff9cf56bbb -->
## Question 82: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-082`

**Content revision:** `10994b390d48c98da1f94551e367e28010fea859f230701743f7afff9cf56bbb`

### English

A tool can publish releases, but the current task only requests a draft PR. What should the agent infer from tool availability?

1. Publication is implicitly authorized

   Available capabilities do not expand the task's authorization.

2. The capability exists, but the task still limits permitted use **[CORRECT]**

   Task scope remains binding even when a tool can do more.

3. Every exposed tool must be called once

   Tool use should serve the task rather than maximize calls.

4. Draft work cannot proceed until publication is enabled

   A draft PR does not require release publication.

**Concept:** Capability versus task authority

**Authored coaching hints:**

- What did the user authorize as the deliverable?
- Is an exposed action automatically part of that deliverable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta puede publicar versiones, pero la tarea actual solo solicita un borrador PR. ¿Qué debe deducir el agente de la disponibilidad de las herramientas?

1. La publicación está implícitamente autorizada

   Las capacidades disponibles no amplían la autorización de la tarea.

2. La capacidad existe, pero la tarea todavía limita el uso permitido **[CORRECT]**

   El alcance de las tareas sigue siendo vinculante incluso cuando una herramienta puede hacer más.

3. Cada herramienta expuesta debe ser llamada una vez

   El uso de herramientas debe servir a la tarea en lugar de maximizar las llamadas.

4. Los trabajos de proyecto no pueden continuar hasta que la publicación esté habilitada

   Un proyecto de PR no requiere publicación de la publicación.

**Concept:** Capacidad frente a la autoridad de tareas

**Authored coaching hints:**

- ¿Qué autorizó el usuario como entregable?
- ¿Es una acción expuesta automáticamente parte de esa entregable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta pode publicar lançamentos, mas a tarefa atual só requer um rascunho de PR. O que deve inferir o agente da disponibilidade de ferramentas?

1. A publicação é implicitamente autorizada

   As capacidades disponíveis não ampliam a autorização da tarefa.

2. A capacidade existe, mas a tarefa ainda limita o uso permitido **[CORRECT]**

   O escopo das tarefas permanece vinculativo mesmo quando uma ferramenta pode fazer mais.

3. Todas as ferramentas expostas devem ser chamadas uma vez

   O uso de ferramentas deve servir a tarefa em vez de maximizar as chamadas.

4. Os trabalhos de projeto não podem prosseguir até que a publicação seja habilitada

   Um projeto de PR não requer publicação.

**Concept:** Capacidade versus autoridade de tarefa

**Authored coaching hints:**

- O que autorizou o usuário como entregable?
- Uma ação exposta faz automaticamente parte do resultado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-083:a9e7a4e799f61e65794accc628fef14613903b5ec111e590a840da958841ac2c -->
## Question 83: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-083`

**Content revision:** `a9e7a4e799f61e65794accc628fef14613903b5ec111e590a840da958841ac2c`

### English

An agent's CI build cannot reach a package service because its authentication has expired. What is the most targeted recovery?

1. Rewrite the application to remove all dependencies

   A broad rewrite does not address the identified environment fault.

2. Retry the expired credential indefinitely

   Expired authentication will not repair itself through repetition.

3. Renew authentication through the approved secret-management path **[CORRECT]**

   Approved renewal restores the required capability without exposing credentials.

4. Embed a working token in the package manifest

   Manifests are not a safe place for tokens.

**Concept:** Authentication failure recovery

**Authored coaching hints:**

- Which layer is failing before the build can proceed?
- How can access be restored without changing source behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La configuración CI de un agente no puede llegar a un servicio de paquetes porque su autenticación ha expirado. ¿Cuál es la recuperación más específica?

1. Reescribir la aplicación para eliminar todas las dependencias

   Una reescritura amplia no aborda la falla ambiental identificada.

2. Prueba de nuevo la credencial expirada indefinidamente

   La autenticación caducada no se reparará a través de la repetición.

3. Renovar la autenticación a través de la vía de gestión de secretos aprobada **[CORRECT]**

   La renovación aprobada restablece la capacidad requerida sin exponer las credenciales.

4. Incluye un token de trabajo en el manifiesto del paquete

   Los manifiestos no son un lugar seguro para tokens.

**Concept:** Recuperación de fallas de autenticación

**Authored coaching hints:**

- ¿Qué capa está fallando antes de que la construcción pueda continuar?
- ¿Cómo se puede restaurar el acceso sin cambiar el comportamiento de la fuente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A construção CI de um agente não pode chegar a um serviço de pacotes porque a sua autenticação expirou. Qual é a recuperação mais direcionada?

1. Reescrever a aplicação para remover todas as dependências

   Uma reescrita ampla não aborda a falha ambiental identificada.

2. Reprova a credencial expirada indefinidamente

   A autenticação expirada não se reparará através da repetição.

3. Renovar a autenticação através do caminho aprovado de gestão de segredos **[CORRECT]**

   A renovação aprovada restabelece a capacidade necessária sem exposição de credenciais.

4. Incorporar um token de trabalho no manifesto do pacote

   Os manifestos não são um lugar seguro para tokens.

**Concept:** Recuperação de falhas de autenticação

**Authored coaching hints:**

- Que camada está a falhar antes que a construção possa continuar?
- Como é possível restaurar o acesso sem mudar o comportamento da fonte?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-084:ca7ab7db887a866fb165f1a1a9aa6f4dfd2f2a99cbee3e7292b78ee49c64ef97 -->
## Question 84: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-084`

**Content revision:** `ca7ab7db887a866fb165f1a1a9aa6f4dfd2f2a99cbee3e7292b78ee49c64ef97`

### English

A CI workflow can be triggered on untrusted PR content. It also has a privileged job that can modify repository settings. What boundary is most important?

1. Use more descriptive PR titles

   Titles do not enforce a trust boundary.

2. Let the agent decide whether incoming content seems trustworthy

   Subjective model judgment is not a sufficient credential boundary.

3. Make privileged credentials available to every step for consistency

   Broad credential exposure increases the impact of untrusted code.

4. Separate untrusted processing from privileged execution with explicit validation and gates **[CORRECT]**

   Separation limits the path from untrusted input to consequential operations.

**Concept:** CI trust boundary design

**Authored coaching hints:**

- Which inputs can an outside contributor influence?
- Where could those inputs acquire write authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se puede activar un flujo de trabajo CI en el contenido PR no fiable. También tiene un trabajo privilegiado que puede modificar la configuración del repositorio. ¿Cuál es el límite más importante?

1. Utilice títulos más descriptivos de PR

   Los títulos no imponen un límite de confianza.

2. Deje que el agente decida si el contenido entrante parece confiable

   El criterio de modelo subjetivo no es un límite de credencialidad suficiente.

3. Hacer que las credenciales privilegiadas estén disponibles en cada paso para la coherencia

   La amplia exposición a las credenciales aumenta el impacto del código no confiable.

4. Separar el procesamiento no confiable de la ejecución privilegiada con validación explícita y puertas **[CORRECT]**

   La separación limita el camino de las entradas no fiables a las operaciones consecuentes.

**Concept:** Diseño de límites de confianza CI

**Authored coaching hints:**

- ¿En qué entradas puede influir un colaborador externo?
- ¿Dónde podrían esas entradas adquirir autoridad de escritura?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho CI pode ser desencadeado em conteúdo PR não confiável. Ele também tem um trabalho privilegiado que pode modificar as configurações do repositório. Qual é o limite mais importante?

1. Use títulos mais descritores PR

   Os títulos não impõem limites de confiança.

2. Deixe o agente decidir se o conteúdo recebido parece confiável

   O critério de modelo subjetivo não é um limite de credenciais suficiente.

3. Fazer as credenciais privilegiadas disponíveis a cada passo para a coerência

   Uma ampla exposição a credenciais aumenta o impacto do código não confiável.

4. Separar o processamento não confiável da execução privilegiada com validação explícita e portões **[CORRECT]**

   A separação limita o caminho das entradas não confiáveis às operações consequentes.

**Concept:** Projeto de limites de confiança CI

**Authored coaching hints:**

- Quais entradas podem ser influenciadas por um colaborador externo?
- Onde essas entradas poderiam adquirir autoridade de escrita?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-085:2c0a4d923d9907e41216e4350ca6b0d41404250ba5668b73772252e41eca5d5a -->
## Question 85: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-085`

**Content revision:** `2c0a4d923d9907e41216e4350ca6b0d41404250ba5668b73772252e41eca5d5a`

### English

An agent's command fails because the runtime lacks a required executable. Which preflight would have caught this earliest?

1. Check required tools and versions in the intended execution environment **[CORRECT]**

   Runtime capability checks directly verify the missing prerequisite.

2. Check only that the repository has a README

   A README does not prove a dependency is installed.

3. Ask the model whether it remembers using the command before

   Past model experience does not describe this runtime.

4. Count the number of successful past workflow runs

   Historical runs may have used different images or dependencies.

**Concept:** Environment preflight checks

**Authored coaching hints:**

- What prerequisite failed before the command's actual work began?
- Where must that prerequisite be verified?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El comando de un agente falla porque falta un ejecutable requerido en el entorno. ¿Qué comprobación previa lo habría detectado antes?

1. Verificar las herramientas y versiones requeridas en el entorno de ejecución previsto **[CORRECT]**

   Las verificaciones de capacidad de ejecución verifican directamente el requisito previo faltante.

2. Solo compruebe si el repositorio tiene un README

   Un README no demuestra que se haya instalado una dependencia.

3. Pregunte al modelo si recuerda haber usado el comando antes

   La experiencia del modelo pasado no describe este tiempo de ejecución.

4. Cuenta el número de ejecuciones exitosas del flujo de trabajo pasado

   Las ejecuciones históricas pueden haber utilizado diferentes imágenes o dependencias.

**Concept:** Control del entorno antes del vuelo

**Authored coaching hints:**

- ¿Qué condición previa falló antes de que comenzara el trabajo real del comando?
- ¿Dónde debe comprobarse ese requisito previo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O comando de um agente falha porque falta um executável necessário no ambiente. Qual verificação prévia teria detectado isso mais cedo?

1. Verificar as ferramentas e versões necessárias no ambiente de execução previsto **[CORRECT]**

   As verificações de capacidade de execução verificam diretamente o pré-requisito faltante.

2. Verifique apenas se o repositório tem um README

   Um README não demonstra a instalação de uma dependência.

3. Pergunte ao modelo se ele se lembra de usar o comando antes

   A experiência do modelo passado não descreve este tempo de execução.

4. Conte o número de execuções de fluxo de trabalho anteriores bem sucedidas

   As execuções históricas podem ter usado diferentes imagens ou dependências.

**Concept:** Controle ambiental antes do voo

**Authored coaching hints:**

- Que pré-requisito falhou antes que a obra do comando realmente começasse?
- Onde deve verificar-se esse pré-requisito?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-086:1435deb669358b305a681028f28849f21c411d2ef769fab09a655a3dd30fa64e -->
## Question 86: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-086`

**Content revision:** `1435deb669358b305a681028f28849f21c411d2ef769fab09a655a3dd30fa64e`

### English

A team migrates an agent from a developer machine to an ephemeral runner. What should happen to dependencies and credentials?

1. Assume both persist from the previous developer session

   An ephemeral runner does not inherit arbitrary local state.

2. Recreate dependencies explicitly and inject authorized credentials for that run **[CORRECT]**

   Reproducible setup and scoped runtime secrets suit disposable environments.

3. Copy the developer's entire home directory into the runner image

   Broadly copying personal state exposes unnecessary data and secrets.

4. Disable authentication so ephemeral execution remains simple

   Ephemerality does not remove authentication requirements.

**Concept:** Ephemeral execution setup

**Authored coaching hints:**

- What exists on a fresh runner at startup?
- Which local state is essential, and which should never be copied?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo migra un agente de una máquina de desarrollo a una efímera runner. ¿Qué debería pasar con las dependencias y credenciales?

1. Supongamos que ambos persistan desde la sesión anterior del desarrollador

   Un efímero runner no hereda el estado local arbitrario.

2. Recrear dependencias explícitamente e inyectar credenciales autorizadas para esa ejecución **[CORRECT]**

   Configuración reproducible y tiempo de ejecución de alcance secrets adaptado a entornos desechables.

3. Copie todo el directorio de la casa del desarrollador en la imagen runner

   La copia general del estado personal expone datos innecesarios y secrets.

4. Deshabilitar la autenticación para que la ejecución efímera se mantenga simple

   La efemeralidad no elimina los requisitos de autenticación.

**Concept:** Configuración de ejecución efímera

**Authored coaching hints:**

- ¿Qué hay en un nuevo runner al arrancar?
- ¿Qué estado local es esencial, y cuál nunca debe ser copiado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe migra um agente de uma máquina de desenvolvimento para um efêmero runner. O que deve acontecer com dependências e credenciais?

1. Suponha que ambos persistem da sessão anterior de desenvolvedor

   Um efêmero runner não herda estado local arbitrário.

2. Recrear dependências explicitamente e injetar credenciais autorizadas para essa execução **[CORRECT]**

   Configuração reprodutível e tempo de execução de alcance secrets adequado a ambientes descartáveis.

3. Copie todo o diretório de casa do desenvolvedor para a imagem runner

   Copiar amplamente o estado pessoal expõe dados desnecessários e secrets.

4. Desativar a autenticação para que a execução efêmera permaneça simples

   A efemeralidade não elimina os requisitos de autenticação.

**Concept:** Configuração de execução efêmera

**Authored coaching hints:**

- O que existe num novo runner no arranque?
- Qual estado local é essencial, e qual nunca deve ser copiado?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-087:b2b338f82db7492a7dfdadf9a26dbd634f9eec09e275177c37ab8b7595a936f4 -->
## Question 87: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-087`

**Content revision:** `b2b338f82db7492a7dfdadf9a26dbd634f9eec09e275177c37ab8b7595a936f4`

### English

A tool writes an external setting successfully, but the following local checkpoint fails. On restart, what should happen before another write?

1. Assume the external write failed with the checkpoint

   Local persistence failure does not undo a completed external action.

2. Always restore factory defaults

   Factory restoration may be unauthorized and destructive.

3. Reconcile external state with the intended operation and recovery record **[CORRECT]**

   Reconciliation handles the gap between external effects and local records.

4. Choose a new target so the previous state no longer matters

   Changing targets does not resolve the original operation.

**Concept:** External effects versus local persistence

**Authored coaching hints:**

- Were the external write and checkpoint one transaction?
- What can the service reveal about the operation's current state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta modifica correctamente una configuración externa, pero falla el checkpoint local posterior. Al reiniciar, ¿qué debe ocurrir antes de otra escritura?

1. Supongamos que la escritura externa falló con el checkpoint

   El fracaso local de la persistencia no deshace una acción externa completa.

2. Siempre restablezca los valores predeterminados de fábrica

   La restauración de la fábrica puede ser no autorizada y destructiva.

3. Conciliar el estado externo con el registro de operación y recuperación previsto **[CORRECT]**

   La reconciliación aborda la brecha entre los efectos externos y los registros locales.

4. Elige un nuevo objetivo para que el estado anterior ya no importe.

   Cambiar los objetivos no resuelve la operación original.

**Concept:** efectos externos frente a la persistencia local

**Authored coaching hints:**

- ¿Fue la escritura externa y checkpoint una sola transacción?
- ¿Qué puede revelar el servicio sobre el estado actual de la operación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta altera corretamente uma configuração externa, mas o checkpoint local posterior falha. Ao reiniciar, o que deve acontecer antes de outra gravação?

1. Suponha que a escrita externa falhou com o checkpoint

   A falha de persistência local não desfaz uma ação externa concluída.

2. Sempre restaurar defeitos de fábrica

   A restauração da fábrica pode ser não autorizada e destrutiva.

3. Reconciliar o estado externo com os registros de operação e recuperação previstos **[CORRECT]**

   A reconciliação trata da lacuna entre os efeitos externos e os registros locais.

4. Escolha um novo alvo para que o estado anterior não importe mais.

   A alteração das metas não resolve a operação original.

**Concept:** Efeitos externos versus persistência local

**Authored coaching hints:**

- A escrita externa e o checkpoint foram uma única transação?
- O que pode revelar o serviço sobre o estado atual da operação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-088:7d4df6a95c1e7eecfaea27430b85cb3ebe21d3563ec003fabb3990f9853358d8 -->
## Question 88: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-088`

**Content revision:** `7d4df6a95c1e7eecfaea27430b85cb3ebe21d3563ec003fabb3990f9853358d8`

### English

An MCP server package is updated and now requests broader filesystem access. What should the team do before adopting the update?

1. Accept because all updates are security improvements

   An update can expand risk even when it includes fixes.

2. Approve based only on an unchanged server name

   A stable name does not imply stable behavior or permissions.

3. Grant access and inspect effects after a month

   Delayed review exposes resources before the risk is assessed.

4. Review the changed capability and test it in a constrained environment **[CORRECT]**

   Dependency-style review and constrained testing assess the changed boundary.

**Concept:** MCP dependency governance

**Authored coaching hints:**

- What changed in the server's effective authority?
- Does prior approval cover newly requested access?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se actualiza un paquete de servidor MCP y ahora solicita un acceso más amplio al sistema de archivos. ¿Qué debe hacer el equipo antes de adoptar la actualización?

1. Aceptar porque todas las actualizaciones son mejoras de seguridad

   Una actualización puede aumentar el riesgo incluso cuando incluye correcciones.

2. Aprobar basándose únicamente en un nombre de servidor no modificado

   Un nombre estable no implica comportamiento o permisos estables.

3. Los efectos de la concesión de acceso e inspección después de un mes

   La revisión tardía expone los recursos antes de que se evalúe el riesgo.

4. Revisar la capacidad cambiada y probarla en un entorno limitado **[CORRECT]**

   La revisión del estilo de dependencia y las pruebas restringidas evalúan el límite cambiado.

**Concept:** MCP gobernanza de la dependencia

**Authored coaching hints:**

- ¿Qué cambió en la autoridad efectiva del servidor?
- ¿La aprobación previa cubre el acceso recientemente solicitado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pacote de servidor MCP é atualizado e agora solicita acesso a um sistema de arquivos mais amplo. O que deve fazer a equipe antes de adotar a atualização?

1. Aceitar porque todas as atualizações são melhorias de segurança

   Uma atualização pode aumentar o risco mesmo quando inclui correções.

2. Aprova com base apenas em um nome de servidor inalterado

   Um nome estável não implica um comportamento ou permissões estáveis.

3. Efeitos da concessão de acesso e inspecção após um mês

   A revisão atrasada expõe os recursos antes da avaliação do risco.

4. Revisar a capacidade alterada e testá-la num ambiente restrito **[CORRECT]**

   A revisão em estilo de dependência e os testes restritos avaliam as fronteiras alteradas.

**Concept:** MCP governança dependência

**Authored coaching hints:**

- O que mudou na autoridade efetiva do servidor?
- A aprovação prévia abrange o acesso recém solicitado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-089:951b2cc317bc952a24d5dc595b912fa98712f3f479b64c5c4b984d56ad6266ec -->
## Question 89: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-089`

**Content revision:** `951b2cc317bc952a24d5dc595b912fa98712f3f479b64c5c4b984d56ad6266ec`

### English

An agent needs to comment on one PR but not push code. Which permission principle should guide its workflow?

1. Grant only the permissions needed for the comment operation **[CORRECT]**

   Operation-specific authorization avoids unnecessary code-write access.

2. Grant contents write because comments contain text

   A PR comment does not by itself require modifying repository contents.

3. Grant repository administration to avoid future failures

   Future convenience does not justify administrative access.

4. Use a maintainer's full token for all automation

   A broad personal token expands exposure beyond the task.

**Concept:** Operation-specific workflow permissions

**Authored coaching hints:**

- Which resource is actually being changed?
- Are content updates part of the requested operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente tiene que comentar sobre un PR pero no el código push. ¿Qué principio de permiso debería guiar su flujo de trabajo?

1. Conceder sólo los permisos necesarios para la operación de comentarios **[CORRECT]**

   La autorización específica de operación evita el acceso innecesario al código de escritura.

2. El contenido de la subvención se escribe porque los comentarios contienen texto

   Un comentario de PR no requiere en sí mismo la modificación del contenido del repositorio.

3. Administración de los repositorios de subvenciones para evitar futuras fallas

   La conveniencia futura no justifica el acceso administrativo.

4. Utilice el token completo de un mantenedor para toda la automatización

   Un token personal amplio expande la exposición más allá de la tarea.

**Concept:** Permisos de flujo de trabajo específicos de la operación

**Authored coaching hints:**

- ¿Qué recurso se está cambiando?
- ¿Son las actualizaciones de contenido parte de la operación solicitada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente precisa de comentar um PR mas não o código push. Que princípio de autorização deve orientar o seu fluxo de trabalho?

1. Conceder apenas as permissões necessárias para a operação de comentários **[CORRECT]**

   A autorização específica para a operação evita o acesso desnecessário à escrita de código.

2. Conteúdo de subsídios escrever porque os comentários contêm texto

   Um comentário PR não exige, por si só, a modificação do conteúdo do repositório.

3. Administração do repositório de subvenções para evitar falhas futuras

   A conveniência futura não justifica o acesso administrativo.

4. Use o token completo de um mantenedor para toda a automação

   Um token pessoal amplo expande a exposição além da tarefa.

**Concept:** Permissões de fluxo de trabalho específicas da operação

**Authored coaching hints:**

- Que recurso está a ser alterado?
- As atualizações de conteúdo fazem parte da operação solicitada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-090:1e2f900526cc234eb2c8f7bb3256f8ba18f5e3dc91d10a79a8032f1ba3297714 -->
## Question 90: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-090`

**Content revision:** `1e2f900526cc234eb2c8f7bb3256f8ba18f5e3dc91d10a79a8032f1ba3297714`

### English

A tool supports a dry run, but the task requires an actual authorized change. The agent runs only the dry run. What should it report?

1. The change was applied because validation succeeded

   A simulation does not demonstrate a committed effect.

2. The proposed operation was checked but has not been applied **[CORRECT]**

   The report should distinguish validated intent from executed mutation.

3. The service will apply it automatically later

   Automatic later application cannot be assumed.

4. The operation failed because dry runs cannot be useful

   A dry run can provide useful evidence without completing execution.

**Concept:** Dry-run versus applied outcomes

**Authored coaching hints:**

- Which side effects did the invoked mode permit?
- What remains to satisfy the requested deliverable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta permite simular una operación sin aplicar cambios, pero la tarea requiere un cambio real autorizado. El agente solo ejecuta la simulación. ¿Qué debe informar?

1. El cambio se aplicó porque la validación fue exitosa.

   Una simulación no demuestra un efecto comprometido.

2. La operación propuesta ha sido verificada, pero no se ha aplicado **[CORRECT]**

   El informe debe distinguir la intención validada de la mutación ejecutada.

3. El servicio lo aplicará automáticamente más tarde

   No se puede asumir una aplicación automática posterior.

4. La operación falló porque las corrientes secas no pueden ser útiles

   Una simulación sin cambios puede proporcionar pruebas útiles sin completar la ejecución.

**Concept:** La ejecución seca frente a los resultados aplicados

**Authored coaching hints:**

- ¿Qué efectos secundarios permitió el modo invocado?
- ¿Qué queda para satisfacer la entrega requerida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta permite simular uma operação sem aplicar alterações, mas a tarefa exige uma alteração real autorizada. O agente executa apenas a simulação. O que deve informar?

1. A alteração foi aplicada porque a validação foi bem sucedida.

   Uma simulação não demonstra um efeito comprometido.

2. A operação proposta foi verificada mas não foi aplicada **[CORRECT]**

   O relatório deve distinguir a intenção validada da mutação executada.

3. O serviço irá aplicá-lo automaticamente mais tarde.

   Não se pode assumir a aplicação automática posterior.

4. A operação falhou porque as simulações sem alterações não podem ser úteis.

   Uma simulação sem alterações pode fornecer evidências úteis sem completar a execução.

**Concept:** execução seca versus resultados aplicados

**Authored coaching hints:**

- Que efeitos secundários permitiu o modo invocado?
- O que resta para satisfazer a entrega requerida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-091:dfc8a511456670a3fa97d81e19ff0f7cd5764df238414d27eb1d7acbd33cd6b4 -->
## Question 91: Implement tool use and environment interaction

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-091`

**Content revision:** `dfc8a511456670a3fa97d81e19ff0f7cd5764df238414d27eb1d7acbd33cd6b4`

### English

A team's tool logs show timestamps but cannot distinguish two simultaneous agent runs against the same repository. What should be added?

1. Only the model's display name

   Display names may be shared across executions.

2. A count of all tool calls that day

   Daily totals cannot reconstruct individual actions.

3. Run, task, actor, target, and revision identifiers on relevant events **[CORRECT]**

   Correlated execution identity links actions and outcomes to the correct run.

4. A single combined success message for both runs

   Combining outcomes hides which run produced each effect.

**Concept:** Tool-action traceability

**Authored coaching hints:**

- Can an investigator assign each action to one execution?
- Which identifiers connect a tool event to its task and code state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los registros de herramientas de un equipo muestran sellos de tiempo, pero no pueden distinguir dos ejecuciones simultáneas de agentes contra el mismo repositorio. ¿Qué hay que añadir?

1. Sólo el nombre de pantalla del modelo

   Los nombres de visualización pueden ser compartidos entre las ejecuciones.

2. Un recuento de todas las llamadas de las herramientas ese día

   Los totales diarios no pueden reconstruir las acciones individuales.

3. Identificadores de ejecución, tarea, actor, objetivo y revisión en eventos relevantes **[CORRECT]**

   Identidad de ejecución correlacionada vincula acciones y resultados a la ejecución correcta.

4. Un solo mensaje de éxito combinado para ambas ejecuciones

   La combinación de resultados que se ejecutan produjo cada efecto.

**Concept:** Trazabilidad mediante la acción de las herramientas

**Authored coaching hints:**

- ¿Puede un investigador asignar cada acción a una ejecución?
- ¿Qué identificadores conectan un evento de herramienta a su estado de tarea y código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os registros de ferramentas de uma equipe mostram marcas de tempo, mas não podem distinguir duas execuções simultâneas de agentes contra o mesmo repositório. O que deve ser adicionado?

1. Apenas o nome da tela do modelo

   Os nomes de exibição podem ser compartilhados entre execuções.

2. Uma contagem de todas as chamadas de ferramentas naquele dia

   Os totais diários não podem reconstruir ações individuais.

3. Identificadores de execução, tarefa, ator, alvo e revisão em eventos relevantes **[CORRECT]**

   Identidade de execução correlacionada liga ações e resultados à correta execução.

4. Uma única mensagem de sucesso combinada para ambas as execuções

   A combinação de resultados que correm produziu cada efeito.

**Concept:** rastreabilidade a partir de ferramentas

**Authored coaching hints:**

- Um investigador pode atribuir cada ação a uma execução?
- Quais identificadores ligam um evento da ferramenta ao seu estado de tarefa e código?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-092:600d326b4e62e9dad4f666701d2e46a68fec07639a97d691e01ee6a2597a6fc0 -->
## Question 92: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-092`

**Content revision:** `600d326b4e62e9dad4f666701d2e46a68fec07639a97d691e01ee6a2597a6fc0`

### English

An agent must retain one task's intermediate calculations but not reuse them on later tasks. Which memory scope fits?

1. Organization-wide knowledge

   Organization scope unnecessarily shares task-specific data.

2. Permanent user preferences

   Calculations are not enduring personal preferences.

3. A shared repository policy

   Intermediate values are not repository policy.

4. Task-local short-term state **[CORRECT]**

   Task-local state supports current execution without cross-task reuse.

**Concept:** Short-term memory scope

**Authored coaching hints:**

- How long is this information relevant?
- Who else should be able to reuse it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente debe conservar los cálculos intermedios de una tarea, pero no reutilizarlos en tareas posteriores. ¿A qué memoria se ajusta?

1. Conocimiento de toda la organización

   El alcance de la organización comparte innecesariamente datos específicos de las tareas.

2. Preferencias de los usuarios permanentes

   Los cálculos no son preferencias personales duraderas.

3. Una política compartida de repositorios

   Los valores intermedios no son una política de repositorio.

4. Estado a corto plazo de la tarea local **[CORRECT]**

   El estado de tarea local admite la ejecución actual sin reutilización de tareas cruzadas.

**Concept:** alcance de la memoria a corto plazo

**Authored coaching hints:**

- ¿Cuánto tiempo es relevante esta información?
- ¿Quién más debería poder reutilizarlo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente deve conservar os cálculos intermediários de uma tarefa, mas não os reutilizar em tarefas posteriores. Que escopo de memória se encaixa?

1. Conhecimento em toda a organização

   O escopo da organização compartilha desnecessariamente dados específicos de tarefas.

2. Preferências permanentes dos usuários

   Os cálculos não suportam preferências pessoais.

3. Uma política de repositório compartilhado

   Os valores intermediários não constituem uma política de repositório.

4. Estado a curto prazo da tarefa local **[CORRECT]**

   O estado local da tarefa suporta a execução atual sem reutilização de tarefas cruzadas.

**Concept:** Escala de memória de curto prazo

**Authored coaching hints:**

- Quanto tempo é relevante esta informação?
- Quem mais deveria ser capaz de reutilizar?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-093:2da0051408f1cda49bf8b976f9bf63b83b6fcbee1cca4b2993b78e8cd5176ad8 -->
## Question 93: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-093`

**Content revision:** `2da0051408f1cda49bf8b976f9bf63b83b6fcbee1cca4b2993b78e8cd5176ad8`

### English

A long-running agent needs a durable record of approved architectural decisions. Where should it keep the authoritative record?

1. A versioned decision artifact linked to the task **[CORRECT]**

   A durable versioned artifact preserves authority and provenance.

2. Only its current context window

   Context can be lost or compacted.

3. An unlabeled speculative note

   Speculation must not masquerade as an approved decision.

4. The last successful shell command

   A command does not represent architectural intent.

**Concept:** Durable decision memory

**Authored coaching hints:**

- What survives a process restart?
- How is an approved decision distinguished from a hypothesis?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de larga duración necesita un registro duradero de decisiones arquitectónicas aprobadas. ¿Dónde debe guardar el registro autorizado?

1. Un artefacto de decisión en versión vinculado a la tarea **[CORRECT]**

   Un artefacto con versiones duraderas conserva la autoridad y la procedencia.

2. Sólo su ventana de contexto actual

   El contexto puede perderse o comprimirse.

3. Una nota especulativa sin etiqueta

   La especulación no debe hacerse pasar por una decisión aprobada.

4. El último comando de proyectil exitoso

   Un comando no representa la intención arquitectónica.

**Concept:** Memoria de decisión duradera

**Authored coaching hints:**

- ¿Qué sobrevive a un reinicio del proceso?
- ¿Cómo se distingue una decisión aprobada de una hipótesis?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de longa data precisa de um registro duradouro de decisões arquitetônicas aprovadas. Onde deve guardar o registro autorizado?

1. Um artefato de decisão versionado ligado à tarefa **[CORRECT]**

   Um artefato de versão duradoura preserva a autoridade e a origem.

2. Apenas sua janela de contexto atual

   O contexto pode ser perdido ou compactado.

3. Uma nota especulativa não etiquetada

   A especulação não deve mascarar-se como uma decisão aprovada.

4. O último comando bem-sucedido.

   Um comando não representa a intenção arquitetônica.

**Concept:** Memória de decisão duradoura

**Authored coaching hints:**

- O que sobrevive a uma reinicialização do processo?
- Como se distingue uma decisão aprovada de uma hipótese?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-094:c618b6b7f18dc8b157c607137599911b7563358388bfc49a7fec126893cca485 -->
## Question 94: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-094`

**Content revision:** `c618b6b7f18dc8b157c607137599911b7563358388bfc49a7fec126893cca485`

### English

A resumed agent starts implementing a step already completed before a crash. What checkpoint information would most directly prevent this?

1. The agent's preferred response style

   Style does not identify completed effects.

2. Completed steps, effect references, current revision, and next action **[CORRECT]**

   A concrete progress record supports safe continuation.

3. The original prompt without progress

   The original task omits what has already happened.

4. The total token count of the previous session

   Token counts do not reconstruct execution.

**Concept:** Resumable progress checkpoints

**Authored coaching hints:**

- What facts distinguish a fresh task from a resumed one?
- How can completed effects be verified?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente reiniciado comienza a implementar un paso ya completado antes de un accidente. ¿Qué información checkpoint evitaría esto directamente?

1. El estilo de respuesta preferido del agente

   El estilo no identifica los efectos completos.

2. Pasos completados, referencias de efectos, revisión actual y próxima acción **[CORRECT]**

   Un registro concreto de progreso apoya una continuación segura.

3. La solicitud original sin progreso

   La tarea original omite lo que ya ha sucedido.

4. El recuento total de tokens de la sesión anterior

   El recuento de tokens no reconstruye la ejecución.

**Concept:** Progreso reutilizable checkpoints

**Authored coaching hints:**

- ¿Cuáles son los hechos que distinguen una tarea nueva de una que se reanuda?
- ¿Cómo se pueden verificar los efectos completos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente retomado começa a implementar um passo já concluído antes de um acidente. Que informação do checkpoint poderia impedir isto?

1. O estilo de resposta preferido do agente

   O estilo não identifica os efeitos completos.

2. Passos concluídos, referências de efeitos, revisão atual e ação seguinte **[CORRECT]**

   Um histórico concreto de progresso sustenta uma continuação segura.

3. A solicitação original sem progresso

   A tarefa original omite o que já aconteceu.

4. A contagem total de tokens da sessão anterior

   As contagens de tokens não reconstruem a execução.

**Concept:** Progresso retomável checkpoints

**Authored coaching hints:**

- Que fatos distinguem uma tarefa nova de uma retomada?
- Como podem ser verificados os efeitos completos?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-095:a729dca3ecbc550ec9413f98bd15d84b3511ad2ada582ba459e55cd94ccfed97 -->
## Question 95: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-095`

**Content revision:** `a729dca3ecbc550ec9413f98bd15d84b3511ad2ada582ba459e55cd94ccfed97`

### English

An agent remembers an old build command, but the current branch changed its package scripts. What should happen before reuse?

1. Prefer memory over current files

   Memory can become stale.

2. Run every historical command

   Historical commands may be incompatible or unsafe.

3. Validate the remembered fact against current repository evidence **[CORRECT]**

   Current evidence determines whether a stored fact still applies.

4. Delete all task history permanently

   Selective validation is more useful than indiscriminate deletion.

**Concept:** Memory freshness validation

**Authored coaching hints:**

- What code state supported the memory?
- Does that evidence still hold on this branch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recuerda un viejo comando de construcción, pero la rama actual cambió sus scripts de paquetes. ¿Qué debe ocurrir antes de su reutilización?

1. Preferir la memoria a los archivos actuales

   La memoria puede quedarse obsoleta.

2. ejecuta todos los comandos históricos

   Los comandos históricos pueden ser incompatibles o inseguros.

3. Valida el hecho recordado en comparación con la evidencia del repositorio actual **[CORRECT]**

   Las pruebas actuales determinan si un hecho almacenado sigue siendo aplicable.

4. Eliminar el historial de tareas de forma permanente

   La validación selectiva es más útil que la eliminación indiscriminada.

**Concept:** Validación de la frescura de la memoria

**Authored coaching hints:**

- ¿Qué estado de código soporta la memoria?
- ¿Todavía existe esa evidencia en esta rama?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente lembra-se de um antigo comando de construção, mas o branch atual mudou os scripts do pacote. O que deve acontecer antes da reutilização?

1. Preferir memória a arquivos atuais

   A memória pode ficar velha.

2. Executa todos os comandos históricos

   Os comandos históricos podem ser incompatíveis ou inseguros.

3. Validar o fato lembrado contra a evidência do repositório atual **[CORRECT]**

   A evidência atual determina se um fato armazenado ainda é aplicável.

4. Eliminar o histórico de tarefas de forma permanente

   A validação seletiva é mais útil do que a eliminação indiscriminada.

**Concept:** Validação da atualidade da memória

**Authored coaching hints:**

- Que estado de código suportava a memória?
- Essa evidência ainda é válida neste branch?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory>

<!-- certification-coach-question:agentic-096:05dbc0c512b107297b4276d8927e0c64011d2df7e91f44dc546366277ba9c521 -->
## Question 96: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-096`

**Content revision:** `05dbc0c512b107297b4276d8927e0c64011d2df7e91f44dc546366277ba9c521`

### English

A memory summary treats 'perhaps replace the cache' as an approved decision. What should be corrected?

1. Make the summary more confident

   Confidence would amplify the misclassification.

2. Execute the replacement to validate the summary

   Execution cannot retroactively authorize a proposal.

3. Remove all summaries from the workflow

   Summaries remain useful when accurately qualified.

4. Preserve uncertainty and decision status explicitly **[CORRECT]**

   Hypotheses and approved decisions need distinct status.

**Concept:** Decision-status preservation

**Authored coaching hints:**

- Was the original statement a proposal or an authorization?
- What meaning was lost during compression?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un resumen de memoria trata "tal vez reemplazar el caché" como una decisión aprobada. ¿Qué hay que corregir?

1. Haga que el resumen sea más seguro

   La confianza amplificaría la clasificación errónea.

2. Realizar la sustitución para validar el resumen

   La ejecución no puede autorizar retroactivamente una propuesta.

3. Eliminar todos los resúmenes del flujo de trabajo

   Los resúmenes siguen siendo útiles cuando se califican con precisión.

4. Preservar explícitamente la incertidumbre y el estado de la decisión **[CORRECT]**

   Las hipótesis y las decisiones aprobadas necesitan un estatus distinto.

**Concept:** Preservación del estatus de decisión

**Authored coaching hints:**

- ¿Fue la declaración original una propuesta o una autorización?
- ¿Qué significado se perdió durante la compresión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um resumo de memória trata "talvez substituir o cache" como uma decisão aprovada. O que deve ser corrigido?

1. Tornar o resumo mais confiante

   A confiança amplificaria a classificação errada.

2. Executa a substituição para validar o resumo

   A execução não pode autorizar retroativamente uma proposta.

3. Remover todos os resumos do fluxo de trabalho

   Os resumos permanecem úteis quando qualificados com precisão.

4. Preservação explícita da incerteza e do status da decisão **[CORRECT]**

   As hipóteses e as decisões aprovadas precisam de um status distinto.

**Concept:** Preservação do status de decisão

**Authored coaching hints:**

- A declaração original foi uma proposta ou uma autorização?
- Que significado foi perdido durante a compressão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-097:439663fc7377d381c52d4a48de7cfe542e6e0ccd644031e1c91dc3943e6b2461 -->
## Question 97: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-097`

**Content revision:** `439663fc7377d381c52d4a48de7cfe542e6e0ccd644031e1c91dc3943e6b2461`

### English

A long agent session begins optimizing unrelated code instead of fixing the agreed defect. What is the best drift correction?

1. Compare current actions with the approved goal and reestablish scope **[CORRECT]**

   The approved contract provides an anchor for detecting and correcting drift.

2. Increase the context window without reviewing actions

   More capacity does not itself restore alignment.

3. Approve all new goals because they arose during execution

   New goals are not automatically authorized.

4. Erase the original acceptance criteria

   Removing criteria eliminates the alignment reference.

**Concept:** Context drift detection

**Authored coaching hints:**

- What stable artifact defines the intended work?
- How do current actions compare with that boundary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una larga sesión de agentes comienza a optimizar el código no relacionado en lugar de arreglar el defecto acordado. ¿Cuál es la mejor corrección de deriva?

1. Comparar las acciones actuales con el objetivo aprobado y restablecer el alcance **[CORRECT]**

   El contrato aprobado proporciona un anclaje para detectar y corregir la deriva.

2. Aumentar la ventana de contexto sin revisar las acciones

   Una mayor capacidad no restablece por sí misma la alineación.

3. Aprobar todos los nuevos objetivos porque surgieron durante la ejecución

   Los nuevos objetivos no se autorizan automáticamente.

4. Eliminar los criterios de aceptación originales

   La eliminación de criterios elimina la referencia de alineación.

**Concept:** Detección de la deriva del contexto

**Authored coaching hints:**

- ¿Qué artefacto estable define el trabajo previsto?
- ¿Cómo se comparan las acciones actuales con ese límite?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma longa sessão de agente começa a otimizar o código não relacionado em vez de corrigir o defeito acordado. Qual é a melhor correção de deriva?

1. Comparar as ações atuais com o objetivo aprovado e restabelecer o seu escopo **[CORRECT]**

   O contrato aprovado fornece uma âncora para detectar e corrigir a deriva.

2. Aumentar a janela de contexto sem rever as ações

   A maior capacidade não restabelece a alinhamento.

3. Aprovar todos os novos objetivos porque surgiram durante a execução

   Os novos objetivos não são autorizados automaticamente.

4. Eliminar os critérios de aceitação originais

   A eliminação dos critérios elimina a referência de alinhamento.

**Concept:** Detecção de deriva de contexto

**Authored coaching hints:**

- Que artefato estável define o trabalho pretendido?
- Como as ações atuais se comparam com esse limite?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-098:fea9d51ce4d7e8e9922e49860a6675feb667cde8794309e8026be0f9ba102b85 -->
## Question 98: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-098`

**Content revision:** `fea9d51ce4d7e8e9922e49860a6675feb667cde8794309e8026be0f9ba102b85`

### English

Two tools disagree about whether a deployment completed. One reports a cached status; the other shows the current operation record. What should the agent do?

1. Choose whichever status is favorable

   Favorability is not a consistency rule.

2. Reconcile freshness and provenance using the authoritative operation state **[CORRECT]**

   Source authority and freshness resolve conflicting state.

3. Average the two statuses

   Completion states are not quantities to average.

4. Repeat deployment before checking either source

   Blind replay can duplicate an already completed operation.

**Concept:** Cross-tool state reconciliation

**Authored coaching hints:**

- When was each observation made?
- Which system owns the operation's actual state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos herramientas no están de acuerdo sobre si un despliegue se completó. Uno informa un estado almacenado en caché; el otro muestra el registro de operación actual. ¿Qué debería hacer el agente?

1. Elige el estado que sea favorable

   La favorabilidad no es una regla de coherencia.

2. Conciliar la actualidad y procedencia de los datos usando el estado de la operación en el sistema responsable **[CORRECT]**

   La autoridad de la fuente y la frescura resuelven el estado conflictivo.

3. Calcular el promedio de los dos estados

   Los estados de finalización no son cantidades en promedio.

4. Repite el despliegue antes de comprobar cualquiera de las fuentes

   La repetición ciega puede duplicar una operación ya completada.

**Concept:** Reconciliación transversal

**Authored coaching hints:**

- ¿Cuándo se hizo cada observación?
- ¿Qué sistema posee el estado real de la operación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Duas ferramentas discordam sobre se uma implantação foi concluída. Um relata um estado em cache; o outro mostra o registro de operação atual. O que deve fazer o agente?

1. Escolha o status que for favorável

   A favorável não é uma regra de consistência.

2. Conciliar a atualidade e a procedência dos dados usando o estado da operação no sistema responsável **[CORRECT]**

   Autoridade da fonte e atualidade resolvem os estados conflitantes.

3. Calcular a média dos dois estados

   Os estados de conclusão não são quantidades à média.

4. Repita a implantação antes de verificar qualquer fonte

   A repetição cega pode duplicar uma operação já concluída.

**Concept:** Reconciliação transversal

**Authored coaching hints:**

- Quando foi feita cada observação?
- Que sistema possui o estado real da operação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-099:c5a9652166698fe6d92ac1f569ea059eef841eeea6cf06d88cbccd3512c18659 -->
## Question 99: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-099`

**Content revision:** `c5a9652166698fe6d92ac1f569ea059eef841eeea6cf06d88cbccd3512c18659`

### English

An agent stores every raw tool response forever. Retrieval increasingly surfaces irrelevant information. What memory policy best addresses this?

1. Always retrieve more history

   More irrelevant context can worsen retrieval quality.

2. Promote every response into a permanent instruction

   Observations are not permanent instructions.

3. Apply relevance-based pruning, retention rules, and compact verified summaries **[CORRECT]**

   Retention and relevance controls reduce noise without losing essential state.

4. Disable all durable progress tracking

   Removing progress tracking sacrifices continuity.

**Concept:** Memory pruning and retention

**Authored coaching hints:**

- Which information is useful for future decisions?
- Can essential evidence be retained without injecting all raw history?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente conserva para siempre todas las respuestas sin procesar de las herramientas. La recuperación muestra cada vez más información irrelevante. ¿Qué política de memoria resuelve mejor el problema?

1. Siempre recuperar más historia

   El contexto más irrelevante puede empeorar la calidad de la recuperación.

2. Promover cada respuesta en una instrucción permanente

   Las observaciones no son instrucciones permanentes.

3. Aplicar la poda basada en la relevancia, las reglas de retención y los resúmenes compactos verificados **[CORRECT]**

   Los controles de retención y relevancia reducen el ruido sin perder el estado esencial.

4. Deshabilitar todo seguimiento de progreso duradero

   Eliminar el seguimiento del progreso sacrifica la continuidad.

**Concept:** poda y retención de la memoria

**Authored coaching hints:**

- ¿Qué información es útil para tomar decisiones futuras?
- ¿Se pueden conservar pruebas esenciales sin inyectar toda la historia cruda?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente guarda para sempre todas as respostas brutas das ferramentas. A recuperação passa a apresentar cada vez mais informações irrelevantes. Qual política de memória melhor resolve o problema?

1. Sempre recuperar mais história

   Um contexto mais irrelevante pode piorar a qualidade da recuperação.

2. Promover cada resposta em uma instrução permanente

   As observações não são instruções permanentes.

3. Aplicar poda baseada na relevância, regras de retenção e resumos verificados compactos **[CORRECT]**

   Os controles de retenção e de relevância reduzem o ruído sem perder o estado essencial.

4. Desativar todo o rastreamento de progresso duradouro

   Remover o rastreamento de progresso sacrifica a continuidade.

**Concept:** poda e retenção da memória

**Authored coaching hints:**

- Que informações são úteis para decisões futuras?
- Pode-se conservar evidências essenciais sem injetar toda a história bruta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-100:5806a4ead26a6d731a39c57d889a9da2519f4aabfdb8b17856a3bca92ddb5585 -->
## Question 100: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-100`

**Content revision:** `5806a4ead26a6d731a39c57d889a9da2519f4aabfdb8b17856a3bca92ddb5585`

### English

An agent moves from local development to CI. Which state handoff best preserves continuity?

1. A local absolute path alone

   A local path may not exist in CI.

2. The developer's entire home directory

   Broad personal state exposes unnecessary data.

3. A statement that the work is almost done

   A vague statement cannot guide safe resumption.

4. A portable checkpoint with revision, artifact references, decisions, and pending steps **[CORRECT]**

   Portable references and explicit progress survive environment changes.

**Concept:** Environment-independent state handoff

**Authored coaching hints:**

- What can the receiving runtime actually resolve?
- What does it need to verify before continuing?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente se muda del desarrollo local a CI. ¿Qué transmisión de estado conserva mejor la continuidad?

1. Un camino absoluto local solo

   Puede que no exista una ruta local en CI.

2. Todo el directorio de la vivienda del desarrollador

   El estado personal amplio expone datos innecesarios.

3. Una declaración de que el trabajo está casi terminado

   Una declaración vaga no puede guiar una reanudación segura.

4. Un checkpoint portátil con revisión, referencias de artefactos, decisiones y pasos pendientes **[CORRECT]**

   Las referencias portátiles y el progreso explícito sobreviven a los cambios ambientales.

**Concept:** Transmisión estatal independiente del entorno

**Authored coaching hints:**

- ¿Qué puede resolver realmente el tiempo de ejecución que recibe?
- ¿Qué necesita verificar antes de continuar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente muda-se do desenvolvimento local para o CI. Quais são os estados que melhor preservam a continuidade?

1. Um caminho absoluto local sozinho.

   Pode não existir um caminho local no CI.

2. Todo o diretório da casa do desenvolvedor

   Grande estado pessoal expõe dados desnecessários.

3. Uma declaração de que o trabalho está quase concluído

   Uma declaração vaga não pode orientar uma retomada segura.

4. Um checkpoint portátil com revisão, referências a artefatos, decisões e passos pendentes **[CORRECT]**

   As referências portáteis e o progresso explícito sobrevivem às alterações ambientais.

**Concept:** Transferência estatal independente do ambiente

**Authored coaching hints:**

- Quais referências o ambiente que recebe a tarefa consegue realmente resolver?
- O que precisa verificar antes de continuar?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-101:b84814552a2a274902b4e4ab61f6bcad42a16dad69bb71750799884c698b587d -->
## Question 101: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-101`

**Content revision:** `b84814552a2a274902b4e4ab61f6bcad42a16dad69bb71750799884c698b587d`

### English

A checkpoint contains a production credential because a tool returned it. What is the best correction?

1. Remove the secret and retain an authorized secret reference if needed **[CORRECT]**

   State should reference protected access rather than persist secret values.

2. Copy it into every future summary

   Replication expands exposure.

3. Keep it because checkpoints are not source code

   Durable operational artifacts can also leak secrets.

4. Rename the field to hide its purpose

   Renaming does not protect a credential.

**Concept:** Secret-safe persistent state

**Authored coaching hints:**

- Does the next agent need the value or a way to obtain authorized access?
- Where might checkpoints be retained or shared?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un checkpoint contiene una credencial de producción porque una herramienta la devolvió. ¿Cuál es la mejor corrección?

1. Eliminar el secreto y conservar, si hace falta, una referencia autorizada al secreto **[CORRECT]**

   El Estado debe hacer referencia al acceso protegido en lugar de mantener valores secretos.

2. Copiarlo en cada resumen futuro

   La replicación expande la exposición.

3. Manténlo porque checkpoints no son código fuente

   Los artefactos operativos duraderos también pueden filtrarse secrets.

4. Renombrar el campo para ocultar su propósito

   El cambio de nombre no protege una credencial.

**Concept:** estado persistente seguro en secreto

**Authored coaching hints:**

- ¿El siguiente agente necesita el valor o una forma de obtener acceso autorizado?
- ¿Dónde se puede conservar o compartir checkpoints?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um checkpoint contém uma credencial de produção porque foi devolvida por uma ferramenta. Qual é a melhor correção?

1. Remover o segredo e manter, se necessário, uma referência autorizada ao segredo **[CORRECT]**

   O Estado deve fazer referência ao acesso protegido em vez de persistir em valores secretos.

2. Copiá-lo em cada resumo futuro

   A replicação amplia a exposição.

3. Mantenha-o porque checkpoints não são código fonte

   Os artefatos operacionais duráveis também podem filtrar secrets.

4. Renomear o campo para esconder o seu propósito

   Renomear não protege uma credencial.

**Concept:** estado secretamente seguro persistente

**Authored coaching hints:**

- O próximo agente precisa do valor ou de uma forma de obter acesso autorizado?
- Onde pode ser mantido ou compartilhado o checkpoints?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-102:73a3e33e82fb87b7d89832e697f0a9e058ed14626fadae03080ba08b853dd774 -->
## Question 102: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-102`

**Content revision:** `73a3e33e82fb87b7d89832e697f0a9e058ed14626fadae03080ba08b853dd774`

### English

Two agents update a shared task record and one silently overwrites the other's completion marker. Which state mechanism best prevents this?

1. Longer natural-language summaries

   Summary length does not prevent lost updates.

2. Version checks with conflict detection or serialized updates **[CORRECT]**

   Concurrency control detects stale writes or prevents overlap.

3. Identical agent display names

   Shared names reduce traceability.

4. A rule that the last response is always correct

   Response order does not establish state correctness.

**Concept:** Concurrent state consistency

**Authored coaching hints:**

- Can both writers have read the same old version?
- How should a stale update be detected?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos agentes actualizan un registro compartido de tareas y uno sobrescribe silenciosamente el marcador de finalización del otro. ¿Qué mecanismo de estado lo impide mejor?

1. Resúmenes más largos en lengua natural

   La longitud de resumen no impide la pérdida de actualizaciones.

2. Verificación de versiones con detección de conflictos o actualizaciones en serie **[CORRECT]**

   El control de la convergencia detecta escritos obsoletos o evita la superposición.

3. Nombres de visualización de agentes idénticos

   Los nombres compartidos reducen la trazabilidad.

4. Una regla de que la última respuesta es siempre correcta

   La orden de respuesta no establece la corrección del estado.

**Concept:** Consistencia en estado simultáneo

**Authored coaching hints:**

- ¿Pueden ambos escritores haber leído la misma versión antigua?
- ¿Cómo debe detectarse una actualización obsoleta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agentes atualizam um registro de tarefas compartilhadas e um silenciosamente sobreescreve o marcador de conclusão do outro. Que mecanismo de estado melhor impede isso?

1. Resumos mais longos em língua natural

   O comprimento do resumo não impede a perda de atualizações.

2. Verificações de versões com detecção de conflitos ou atualizações serializadas **[CORRECT]**

   O controle da moeda simultânea detecta as inscrições obsoletas ou impede a sobreposição.

3. Nomes de exibição de agentes idênticos

   Os nomes compartilhados reduzem a rastreabilidade.

4. Uma regra de que a última resposta é sempre correta

   A ordem de resposta não estabelece a correção do estado.

**Concept:** Consistência de estado simultâneo

**Authored coaching hints:**

- Os dois escritores podem ter lido a mesma versão antiga?
- Como deve ser detectada uma atualização obsoleta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-103:800d1b158a45c6bf098820f6c772c8f26bcff8b889ab8782f218a2b634652d9b -->
## Question 103: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-103`

**Content revision:** `800d1b158a45c6bf098820f6c772c8f26bcff8b889ab8782f218a2b634652d9b`

### English

An agent is switched to a different customer repository. Which prior memory should be loaded by default?

1. All facts from the previous customer's repository

   Repository facts may be inapplicable or private.

2. All previous credentials

   Credentials must not transfer through memory.

3. Only memory authorized and relevant to the new scope **[CORRECT]**

   Memory must respect relevance and access boundaries.

4. Every tool transcript from the prior engagement

   Unfiltered transcripts create noise and disclosure risk.

**Concept:** Memory scope isolation

**Authored coaching hints:**

- Does usefulness in one repository imply relevance in another?
- Which access boundary applies to stored information?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente se cambia a un repositorio de clientes diferente. ¿Qué memoria anterior debe cargarse por defecto?

1. Todos los datos del repositorio del cliente anterior

   Los hechos de archivo pueden ser inapplicables o privados.

2. Todas las credenciales anteriores

   Las credenciales no deben transferirse a través de la memoria.

3. Sólo la memoria autorizada y relevante para el nuevo ámbito de aplicación **[CORRECT]**

   La memoria debe respetar la relevancia y los límites de acceso.

4. Cada transcripción de la herramienta de la participación anterior

   Las transcripciones no filtradas crean ruido y riesgo de divulgación.

**Concept:** aislamiento del alcance de la memoria

**Authored coaching hints:**

- ¿La utilidad en un repositorio implica relevancia en otro?
- ¿Qué límite de acceso se aplica a la información almacenada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente é transferido para um repositório de clientes diferente. Qual memória anterior deve ser carregada por padrão?

1. Todos os dados do repositório do cliente anterior

   Os fatos de repositório podem ser inaplicáveis ou privados.

2. Todas as credenciais anteriores

   As credenciais não devem ser transferidas através da memória.

3. Apenas memória autorizada e relevante para o novo escopo **[CORRECT]**

   A memória deve respeitar as fronteiras de relevância e acesso.

4. Cada transcrição da ferramenta do compromisso anterior

   As transcrições não filtradas criam ruído e risco de divulgação.

**Concept:** isolamento do escopo de memória

**Authored coaching hints:**

- A utilidade num repositório implica a relevância noutro?
- Qual é o limite de acesso aplicável às informações armazenadas?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory>

<!-- certification-coach-question:agentic-104:3ea8d740db783e52fd857eba55fab5a56ae543d216155295ed2a95a5909aed7b -->
## Question 104: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-104`

**Content revision:** `3ea8d740db783e52fd857eba55fab5a56ae543d216155295ed2a95a5909aed7b`

### English

A team compresses a long conversation before resuming an agent. Which information must not be lost?

1. Repeated greetings

   Greetings rarely affect continuation.

2. Every intermediate wording variation

   Wording variants are less important than authoritative decisions.

3. All irrelevant search results

   Irrelevant results dilute context.

4. Approved constraints, unresolved questions, progress, and evidence references **[CORRECT]**

   These facts preserve task identity and safe next steps.

**Concept:** Safe context compaction

**Authored coaching hints:**

- What would change the next action if omitted?
- Which facts distinguish evidence from recollection?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo comprime una larga conversación antes de retomar a un agente. ¿Qué información no debe perderse?

1. Saludos repetidos

   Los saludos rara vez afectan la continuación.

2. Cada variación de la redacción intermedia

   Las variantes de redacción son menos importantes que las decisiones autorizadas.

3. Todos los resultados de búsqueda irrelevantes

   Los resultados irrelevantes diluyen el contexto.

4. Las restricciones aprobadas, las preguntas no resueltas, el progreso y las referencias de pruebas **[CORRECT]**

   Estos hechos preservan la identidad de la tarea y protegen los próximos pasos.

**Concept:** Compacción de contexto segura

**Authored coaching hints:**

- ¿Qué cambiaría la siguiente acción si se omite?
- ¿Qué hechos distinguen la evidencia del recuerdo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe comprime uma longa conversa antes de retomar um agente. Que informações não devem ser perdidas?

1. Saudações repetidas

   Os cumprimentos raramente afetam a continuação.

2. Todas as variações do texto intermediário

   As variantes de redação são menos importantes do que as decisões autoritárias.

3. Todos os resultados de pesquisa irrelevantes

   Os resultados irrelevantes diluem o contexto.

4. Restrições aprovadas, questões não resolvidas, progressos e referências de evidências **[CORRECT]**

   Estes fatos preservam a identidade da tarefa e protegem os próximos passos.

**Concept:** Compactação de contexto segura

**Authored coaching hints:**

- O que mudaria a próxima ação se fosse omitida?
- Que fatos distinguem a evidência da lembrança?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-105:94d87c4279d9e365b29812337164de71b82b3a6b4e3b7605bebd951badb70d9e -->
## Question 105: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-105`

**Content revision:** `94d87c4279d9e365b29812337164de71b82b3a6b4e3b7605bebd951badb70d9e`

### English

A stored test result passed on commit A. The agent has since changed the implementation to commit B. How should it treat that result?

1. Historical evidence, not proof that commit B passes **[CORRECT]**

   Evidence is bound to the code state that produced it.

2. A permanent guarantee for the branch

   Branch identity can persist across changed code.

3. Equivalent to a fresh run if filenames match

   Unchanged filenames do not imply unchanged behavior.

4. A reason to skip all future validation

   Earlier success does not validate later changes.

**Concept:** Revision-bound evidence memory

**Authored coaching hints:**

- Which revision did the test actually exercise?
- What changed after the evidence was created?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un resultado de prueba almacenado aprobado en commit A. Desde entonces, el agente ha cambiado la implementación a commit B. ¿Cómo debe tratar ese resultado?

1. Prueba histórica, no prueba de que commit B pasa **[CORRECT]**

   La evidencia está ligada al estado del código que la produjo.

2. Una garantía permanente para la rama

   La identidad de la rama puede persistir a través del código cambiado.

3. Equivalente a una nueva ejecución si los nombres de archivos coinciden

   Los nombres de archivos sin cambios no implican un comportamiento sin cambios.

4. Una razón para omitir toda validación futura

   El éxito anterior no valida los cambios posteriores.

**Concept:** Memoria de pruebas vinculada a la revisión

**Authored coaching hints:**

- ¿Qué revisión hizo realmente la prueba?
- ¿Qué cambió después de que se crearon las pruebas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um resultado de teste armazenado aprovado no commit A. Desde então, o agente mudou a implementação para commit B. Como deve tratar esse resultado?

1. Evidências históricas, não provas de que commit B passa **[CORRECT]**

   A evidência está ligada ao estado do código que a produziu.

2. Garantia permanente para a filial

   A identidade do branch pode persistir através do código alterado.

3. Equivalente a uma nova execução se os nomes dos arquivos coincidirem

   Os nomes de arquivos inalterados não implicam um comportamento inalterado.

4. Uma razão para ignorar toda a validação futura

   O sucesso anterior não valida mudanças posteriores.

**Concept:** Memória de evidências vinculada à revisão

**Authored coaching hints:**

- Que revisão exerceu realmente o teste?
- O que mudou depois que as evidências foram criadas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-106:00a3939a4bf9d1361fbf677e4c487a4e6895dedb707e77e94754c373b651b281 -->
## Question 106: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-106`

**Content revision:** `00a3939a4bf9d1361fbf677e4c487a4e6895dedb707e77e94754c373b651b281`

### English

An agent repeatedly rediscovers a stable repository convention. What is a useful long-term memory strategy?

1. Store every past file verbatim

   Verbatim accumulation is noisy and costly.

2. Retain the convention with supporting evidence and scope **[CORRECT]**

   Scoped evidence-backed facts can reduce repeated discovery.

3. Use the convention as a global policy for all customers

   Repository conventions are not universal policies.

4. Treat one accidental code pattern as an immutable rule

   A pattern needs validation before becoming durable guidance.

**Concept:** Evidence-backed long-term memory

**Authored coaching hints:**

- Is the fact stable and broadly useful within this repository?
- What evidence could later establish whether it remains true?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente redescubre repetidamente una convención de repositorio estable. ¿Cuál es una estrategia útil de memoria a largo plazo?

1. Almacenar todos los archivos pasados literalmente

   La acumulación literal es ruidosa y costosa.

2. Mantener la convención con pruebas de apoyo y alcance **[CORRECT]**

   Los hechos escopados respaldados por la evidencia pueden reducir el descubrimiento repetido.

3. Usar la convención como una política global para todos los clientes

   Las convenciones repositorias no son políticas universales.

4. Tratar un patrón de código accidental como una regla inmutable

   Un patrón necesita validación antes de convertirse en una guía duradera.

**Concept:** Memoria a largo plazo respaldada por pruebas

**Authored coaching hints:**

- ¿El hecho es estable y ampliamente útil dentro de este repositorio?
- ¿Qué evidencia podría determinar más tarde si sigue siendo cierto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente redescobre repetidamente uma convenção de repositório estável. Qual é uma estratégia útil de memória a longo prazo?

1. Armazenar todos os arquivos passados literalmente

   O acúmulo literal é barulhento e caro.

2. Manter a convenção com evidências e escopo **[CORRECT]**

   Factos explorados apoiados por evidências podem reduzir a descoberta repetida.

3. Usar a convenção como uma política global para todos os clientes

   As convenções de repositório não são políticas universais.

4. Tratar um padrão de código acidental como uma regra imutável

   Um padrão precisa ser validado antes de se tornar um guia duradouro.

**Concept:** Memória de longo prazo apoiada por evidências

**Authored coaching hints:**

- O fato é estável e amplamente útil neste repositório?
- Que evidência poderia mais tarde determinar se continua sendo verdade?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory>

<!-- certification-coach-question:agentic-107:a9c093bf7ea060e538a284fd2646c6040ceaa7621651cbd6b7faa094cd555ece -->
## Question 107: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-107`

**Content revision:** `a9c093bf7ea060e538a284fd2646c6040ceaa7621651cbd6b7faa094cd555ece`

### English

A task is canceled after partial implementation. What should its durable state record?

1. Success, to simplify reporting

   Cancellation is not success.

2. Nothing, because canceled work never matters

   Partial effects can still require review or cleanup.

3. Cancellation, completed effects, remaining artifacts, and recovery status **[CORRECT]**

   Explicit terminal state prevents accidental resumption and preserves accountability.

4. Only the original goal

   The goal alone omits what actually happened.

**Concept:** Canceled execution state

**Authored coaching hints:**

- Could another worker mistake the task for active work?
- Which effects survive cancellation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea se cancela después de una ejecución parcial. ¿Cuál debe ser su estado duradero?

1. Éxito, para simplificar la presentación de informes

   La cancelación no es un éxito.

2. Nada, porque el trabajo cancelado nunca importa.

   Los efectos parciales aún pueden requerir revisión o limpieza.

3. Cancelación, efectos completados, artefactos restantes y estado de recuperación **[CORRECT]**

   El estado terminal explícito evita la reanudación accidental y preserva la rendición de cuentas.

4. Sólo el objetivo original

   Sólo la meta omite lo que realmente sucedió.

**Concept:** Estado de ejecución cancelada

**Authored coaching hints:**

- ¿Podría otro trabajador confundir la tarea con el trabajo activo?
- ¿Qué efectos sobreviven a la cancelación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa é cancelada após a execução parcial. Qual deve ser o seu histórico duradouro?

1. Sucesso, para simplificar a comunicação de informações

   O cancelamento não é um sucesso.

2. Nada, porque o trabalho cancelado nunca importa.

   Os efeitos parciais podem ainda exigir revisão ou limpeza.

3. Anulação, efeitos concluídos, artefatos restantes e estado de recuperação **[CORRECT]**

   O estado terminal explícito impede a retomada acidental e preserva a responsabilidade.

4. Apenas o objetivo original

   Só o objetivo omite o que realmente aconteceu.

**Concept:** Estado de execução cancelada

**Authored coaching hints:**

- Poderia outro trabalhador confundir a tarefa com trabalho ativo?
- Que efeitos sobrevivem ao cancelamento?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-108:be5e277124f159d125098cc1ff5e4e7ec0be06510a68fd238c83350b5f9b3644 -->
## Question 108: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-108`

**Content revision:** `be5e277124f159d125098cc1ff5e4e7ec0be06510a68fd238c83350b5f9b3644`

### English

An agent retrieves an old exception allowing a risky operation. The exception had an expiration date that has passed. What should it do?

1. Treat any historical exception as permanent

   Historical authorization may no longer apply.

2. Renew it by updating its own memory

   The agent cannot unilaterally grant renewed authority.

3. Ignore expiration if the operation is convenient

   Convenience does not override expiration.

4. Revalidate authorization before using the exception **[CORRECT]**

   Expired authority needs a fresh authorized decision.

**Concept:** Authorization freshness

**Authored coaching hints:**

- Is remembering permission the same as still having permission?
- What condition limited the original exception?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recupera una vieja excepción que permite una operación arriesgada. La excepción tenía una fecha de vencimiento que ha pasado. ¿Qué debería hacer?

1. Tratar cualquier excepción histórica como permanente

   La autorización histórica puede dejar de aplicarse.

2. Renovarlo actualizando su propia memoria

   El agente no puede otorgar unilateralmente una nueva autoridad.

3. Ignorar la expiración si la operación es conveniente

   La conveniencia no prevalece sobre la expiración.

4. Revalidar la autorización antes de utilizar la excepción **[CORRECT]**

   La autoridad expirada necesita una nueva decisión autorizada.

**Concept:** Fresqueza de las autorizaciones

**Authored coaching hints:**

- ¿Recordar permiso es lo mismo que seguir teniendo permiso?
- ¿Qué condición limitaba la excepción original?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente recupera uma velha exceção que permite uma operação arriscada. A exceção tinha uma data de expiração que passou. O que deve fazer?

1. Tratar qualquer exceção histórica como permanente

   A autorização histórica pode deixar de ser aplicável.

2. Renová-lo atualizando a sua memória

   O agente não pode conceder de forma unilateral a renovação da autoridade.

3. Ignorar a expiração se a operação for conveniente

   A conveniência não substitui a expiração.

4. Revalidar a autorização antes de utilizar a exceção **[CORRECT]**

   A autoridade expirada precisa de uma nova decisão autorizada.

**Concept:** Frescosidade da autorização

**Authored coaching hints:**

- Lembrar-se da permissão é o mesmo que ainda ter permissão?
- Que condição limitou a exceção original?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-109:6e7c5bda400409eb081338f8c7040f9eda484ac017b5cbf9f19a32f34ccf2da7 -->
## Question 109: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-109`

**Content revision:** `6e7c5bda400409eb081338f8c7040f9eda484ac017b5cbf9f19a32f34ccf2da7`

### English

A support agent mixes facts from two concurrent incidents and proposes the wrong rollback. What state design best addresses this?

1. Partition memory by incident identity and validate references on retrieval **[CORRECT]**

   Task identity prevents cross-incident context contamination.

2. Use one larger shared context for every incident

   A larger mixed context preserves the same ambiguity.

3. Remove incident identifiers to reduce clutter

   Removing identifiers weakens isolation.

4. Choose whichever rollback was mentioned most recently

   Recency does not establish relevance to this incident.

**Concept:** Task identity in memory

**Authored coaching hints:**

- Which incident does each observation belong to?
- What key should retrieval use before judging relevance?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de apoyo mezcla los hechos de dos incidentes simultáneos y propone el retroceso equivocado. ¿Qué diseño del estado se ocupa mejor de esto?

1. Memoria de partición por identidad de incidente y validación de referencias en la recuperación **[CORRECT]**

   La identidad de la tarea evita la contaminación del contexto de incidentes cruzados.

2. Utilizar un contexto compartido más grande para cada incidente

   Un contexto mixto más grande conserva la misma ambigüedad.

3. Eliminar los identificadores de incidentes para reducir el desorden

   Eliminar los identificadores debilita el aislamiento.

4. Seleccione el rollback que se mencionó más recientemente

   La actualidad no establece relevancia para este incidente.

**Concept:** Identidad de tarea en la memoria

**Authored coaching hints:**

- ¿A qué incidente pertenece cada observación?
- ¿Qué clave debe utilizar la recuperación antes de juzgar la relevancia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de suporte mistura fatos de dois incidentes simultâneos e propõe a reversão errada. Qual projeto de estado melhor resolve isso?

1. Memória de partição por identidade de incidente e validação de referências na recuperação **[CORRECT]**

   A identidade da tarefa impede a contaminação do contexto de incidentes cruzados.

2. Use um contexto compartilhado maior para cada incidente

   Um contexto misto maior preserva a mesma ambigüidade.

3. Remover os identificadores de incidentes para reduzir a desordem

   A remoção dos identificadores enfraquece o isolamento.

4. Escolha o rollback que foi mencionado recentemente

   A recência não estabelece relevância para este incidente.

**Concept:** Identidade de tarefa na memória

**Authored coaching hints:**

- A que incidente pertence cada observação?
- Que chave deve utilizar a recuperação antes de julgar a relevância?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-110:cdb0979d3c67b5b4e75b18d1381f7785b96177df489410f854b56bb06f8c3520 -->
## Question 110: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-110`

**Content revision:** `cdb0979d3c67b5b4e75b18d1381f7785b96177df489410f854b56bb06f8c3520`

### English

A checkpoint says an operation is pending, but the service confirms it completed before a crash. How should the agent update state?

1. Repeat the operation to match the checkpoint

   Replay may duplicate the completed effect.

2. Record the confirmed completion with provenance and continue from there **[CORRECT]**

   Reconciled state should reflect verified external reality.

3. Delete the service's evidence

   Deleting evidence obstructs recovery.

4. Keep both statuses without explaining the conflict

   An unresolved contradiction can cause future unsafe decisions.

**Concept:** Recovering stale checkpoints

**Authored coaching hints:**

- Which source can verify the actual effect?
- How can the corrected state explain why it changed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un checkpoint dice que una operación está pendiente, pero el servicio confirma que se completó antes de un accidente. ¿Cómo debe estar actualizado el estado del agente?

1. Repetir la operación para coincidir con el checkpoint

   La reproducción puede duplicar el efecto completado.

2. Registrar la finalización confirmada con la procedencia y continuar desde allí **[CORRECT]**

   El estado reconciliado debe reflejar la realidad externa verificada.

3. Eliminar las pruebas del servicio

   La eliminación de pruebas obstruye la recuperación.

4. Mantenga ambos estados sin explicar el conflicto

   Una contradicción no resuelta puede causar decisiones inseguras en el futuro.

**Concept:** Recuperación de los checkpoints obsoletos

**Authored coaching hints:**

- ¿Qué fuente puede verificar el efecto real?
- ¿Cómo puede el estado corregido explicar por qué cambió?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um checkpoint diz que uma operação está pendente, mas o serviço confirma que foi concluída antes de um acidente. Como é que o agente deve estar atualizado?

1. Repetir a operação para corresponder ao checkpoint

   A repetição pode duplicar o efeito concluído.

2. Registrar a conclusão confirmada com a proveniência e continuar a partir daí **[CORRECT]**

   O estado reconciliado deve refletir a realidade externa verificada.

3. Eliminar as provas do serviço

   A eliminação de evidências impede a recuperação.

4. Manter os dois statuss sem explicar o conflito

   Uma contradição não resolvida pode causar decisões inseguras no futuro.

**Concept:** Recuperação de checkpoints obsoleta

**Authored coaching hints:**

- Que fonte pode verificar o efeito real?
- Como o estado corrigido pode explicar por que mudou?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-111:7c8b4039aa5288ccd80940b3bbf8f1fc5e2d498fbfadeac479771ed591e2b678 -->
## Question 111: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-111`

**Content revision:** `7c8b4039aa5288ccd80940b3bbf8f1fc5e2d498fbfadeac479771ed591e2b678`

### English

A memory entry was derived from a PR that never merged. When may its repository fact still be useful?

1. Always, because a PR once contained it

   Unmerged content may not describe current code.

2. Never, regardless of current evidence

   A fact can remain valid even if its original PR was closed.

3. When current branch evidence independently substantiates the fact **[CORRECT]**

   Current citation validation determines applicability.

4. Only if its author was an agent

   Authorship does not establish factual validity.

**Concept:** Validating facts from unmerged work

**Authored coaching hints:**

- Does the current code support the remembered statement?
- Is origin alone enough to determine present truth?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una entrada de memoria proviene de un PR que nunca se fusionó. ¿Cuándo puede seguir siendo útil el hecho sobre el repositorio?

1. Siempre, porque una PR una vez lo contenía

   El contenido no fusionado puede no describir el código actual.

2. Nunca, independientemente de las pruebas actuales

   Un hecho puede permanecer válido incluso si su original PR fue cerrado.

3. Cuando la evidencia actual de la rama respalda independientemente el hecho **[CORRECT]**

   La validación actual de las citas determina la aplicabilidad.

4. Sólo si su autor era un agente

   La autoría no establece la validez de los hechos.

**Concept:** Validación de hechos de trabajo no fusionado

**Authored coaching hints:**

- ¿El código actual respalda la declaración recordada?
- ¿Sólo el origen es suficiente para determinar la verdad actual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma entrada de memória veio de um PR que nunca foi mesclado. Quando o fato sobre o repositório ainda pode ser útil?

1. Sempre, porque uma PR uma vez o contou.

   O conteúdo não fundido pode não descrever o código atual.

2. Nunca, independentemente das evidências atuais

   Um fato pode permanecer válido mesmo que o seu original PR tenha sido fechado.

3. Quando evidências da branch atual comprovam o fato de forma independente **[CORRECT]**

   A validação atual da citação determina a aplicabilidade.

4. Só se o seu autor fosse um agente

   A autoria não estabelece a validade fatual.

**Concept:** Validação de fatos provenientes de trabalhos não-mergidos

**Authored coaching hints:**

- O código atual apoia a declaração lembrada?
- A origem sozinha é suficiente para determinar a verdade atual?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory>

<!-- certification-coach-question:agentic-112:fcb93d6f8e96ced6795af328b374bfc789241722ef8b4557c6661bfe18636964 -->
## Question 112: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-112`

**Content revision:** `fcb93d6f8e96ced6795af328b374bfc789241722ef8b4557c6661bfe18636964`

### English

An agent stores 'deployment approved' without identifying the approved revision or environment. What is the main continuity risk?

1. The summary is too short to read

   Length is not the core issue.

2. The agent will necessarily lose network access

   Network availability is unrelated.

3. The stored text cannot be translated

   Translation is not the authorization problem.

4. Later execution may apply approval to a different action **[CORRECT]**

   Approval needs enough scope to bind it to the intended operation.

**Concept:** Scoped approval state

**Authored coaching hints:**

- What exactly was approved?
- Could a future worker interpret the same words more broadly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente almacena "el despliegue aprobado" sin identificar la revisión o el entorno aprobados. ¿Cuál es el principal riesgo de continuidad?

1. El resumen es demasiado corto para leer.

   La longitud no es el tema central.

2. El agente necesariamente perderá el acceso a la red

   La disponibilidad de la red no está relacionada.

3. El texto almacenado no puede ser traducido

   La traducción no es un problema de autorización.

4. La ejecución posterior podrá aplicar la aprobación a una acción diferente. **[CORRECT]**

   La aprobación requiere un alcance suficiente para vincularla a la operación prevista.

**Concept:** Estado de aprobación previsto

**Authored coaching hints:**

- ¿Qué fue aprobado exactamente?
- ¿Podría un futuro trabajador interpretar las mismas palabras más ampliamente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente armazena 'implantação aprovada' sem identificar a revisão ou o ambiente aprovado. Qual é o principal risco de continuidade?

1. O resumo é muito curto para ser lido.

   O comprimento não é o problema central.

2. O agente vai necessariamente perder o acesso à rede

   A disponibilidade da rede não está relacionada.

3. O texto armazenado não pode ser traduzido

   A tradução não é um problema de autorização.

4. A execução posterior pode aplicar a aprovação a uma ação diferente **[CORRECT]**

   A aprovação necessita de um escopo suficiente para se vincular à operação prevista.

**Concept:** Estado de aprovação visado

**Authored coaching hints:**

- O que exatamente foi aprovado?
- Será que um futuro trabalhador poderia interpretar as mesmas palavras mais amplamente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-113:fcdeb313a8bbd56ae9d0b40f780bbbc175e8345f243602476f2fa507718015ed -->
## Question 113: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-113`

**Content revision:** `fcdeb313a8bbd56ae9d0b40f780bbbc175e8345f243602476f2fa507718015ed`

### English

A stale memory suggests a deprecated endpoint. Current official documentation identifies its replacement. What should the agent do?

1. Update the task context from verified current evidence and qualify or invalidate the stale entry **[CORRECT]**

   Memory should be corrected when stronger current evidence invalidates it.

2. Follow memory because it was retrieved first

   Retrieval order is not authority.

3. Call both endpoints blindly

   Blind calls can have unnecessary effects.

4. Retain both claims as equally authoritative forever

   Known stale information should not remain an unqualified alternative.

**Concept:** Memory invalidation

**Authored coaching hints:**

- Which evidence is current and authoritative?
- How can future retrieval avoid repeating the same error?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una memoria obsoleta sugiere un endpoint desactualizado. La documentación oficial actual identifica su reemplazo. ¿Qué debería hacer el agente?

1. Actualizar el contexto de la tarea de la evidencia actual verificada y calificar o invalidar la entrada obsoleta **[CORRECT]**

   La memoria debe ser corregida cuando la evidencia actual más fuerte la invalida.

2. Sigue la memoria porque fue recuperada primero

   La orden de recuperación no es autoridad.

3. Llame a los dos endpoints ciegamente

   Las llamadas ciegas pueden tener efectos innecesarios.

4. Mantener ambas reclamaciones como igualmente autorizadas para siempre

   La información obsoleta conocida no debe seguir siendo una alternativa incondicional.

**Concept:** Invalidación de la memoria

**Authored coaching hints:**

- ¿Qué evidencia es actual y autorizada?
- ¿Cómo puede la recuperación futura evitar repetir el mismo error?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma memória obsoleta sugere um endpoint depreciado. A documentação oficial atual identifica o seu substituto. O que deve fazer o agente?

1. Atualizar o contexto da tarefa a partir de evidências atuais verificadas e qualificar ou invalidar a entrada obsoleta **[CORRECT]**

   A memória deve ser corrigida quando evidências atuais mais fortes a invalidam.

2. Seguir a memória porque foi recuperada primeiro

   A ordem de recuperação não é autoridade.

3. Chamem os dois terminais cegamente.

   As chamadas cegas podem ter efeitos desnecessários.

4. Manter ambas as alegações igualmente autênticas para sempre

   A informação obsoleta conhecida não deve continuar a ser uma alternativa incondicional.

**Concept:** Invalidação da memória

**Authored coaching hints:**

- Que evidência é atual e autorizada?
- Como a recuperação futura pode evitar que se repita o mesmo erro?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-114:5e3ddafc37a3448c9b66dba001fbf87e371a4cc822c5e0fca100f56102172a13 -->
## Question 114: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-114`

**Content revision:** `5e3ddafc37a3448c9b66dba001fbf87e371a4cc822c5e0fca100f56102172a13`

### English

An agent needs a large historical test report only during failure diagnosis. Which context strategy is best?

1. Inject the entire report into every future prompt

   Unconditional injection wastes context and adds noise.

2. Keep it externally with provenance and retrieve relevant portions when needed **[CORRECT]**

   External evidence supports selective retrieval without losing inspectability.

3. Discard the report as soon as the run ends

   Immediate deletion prevents later diagnosis.

4. Replace it with an unsupported one-word verdict

   A verdict alone loses supporting detail.

**Concept:** External memory and selective retrieval

**Authored coaching hints:**

- Does the evidence need to be present or merely retrievable?
- What detail is relevant to the current diagnostic question?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente necesita un gran informe histórico de prueba sólo durante el diagnóstico de fallas. ¿Qué estrategia de contexto es mejor?

1. Inyectar todo el informe en cada prospecto futuro

   La inyección incondicional desperdicia el contexto y añade ruido.

2. Mantenerlo externo con la procedencia y recuperar las partes relevantes cuando sea necesario **[CORRECT]**

   Las pruebas externas apoyan la extracción selectiva sin perder la inspección.

3. Descartar el informe en cuanto termine la ejecución

   La eliminación inmediata evita un diagnóstico posterior.

4. Reemplaza con un veredicto de una sola palabra sin respaldo

   Un veredicto solo pierde detalles de apoyo.

**Concept:** Memoria externa y recuperación selectiva

**Authored coaching hints:**

- ¿Necesita estar presente la evidencia o simplemente es recuperable?
- ¿Qué detalle es relevante para la pregunta de diagnóstico actual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente precisa de um grande relatório de teste histórico apenas durante o diagnóstico de falha. Qual estratégia contextual é melhor?

1. Injectar o relatório inteiro em cada prospecto futuro

   A injecção incondicional desperdiça o contexto e adiciona ruído.

2. Manter o relatório externamente, com procedência, e recuperar trechos relevantes quando necessário **[CORRECT]**

   As evidências externas apoiam a recuperação seletiva sem perder a inspecionabilidade.

3. Descartar o relatório assim que a execução terminar

   A eliminação imediata impede um diagnóstico posterior.

4. Substitui-o por um veredicto de uma palavra sem apoio.

   Um veredicto sozinho perde detalhes de apoio.

**Concept:** Memória externa e recuperação seletiva

**Authored coaching hints:**

- As provas precisam estar presentes ou são meramente recuperáveis?
- Que detalhe é relevante para a questão atual de diagnóstico?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-115:5c16156c3d652f77555c5c3cb8c6bb50e2b1d8283a3f99a2326b6cefa5d82536 -->
## Question 115: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-115`

**Content revision:** `5c16156c3d652f77555c5c3cb8c6bb50e2b1d8283a3f99a2326b6cefa5d82536`

### English

An agent inherits a handoff written before the base branch changed substantially. What should it check before implementation?

1. Only the handoff's spelling

   Spelling does not establish technical freshness.

2. Only the predecessor's confidence

   Confidence does not validate changed code.

3. Whether assumptions, file locations, and decisions remain applicable to the current revision **[CORRECT]**

   A changed base can invalidate the handoff's premises.

4. Whether it can reuse the same final message

   Reusing prose does not ensure continuity.

**Concept:** Handoff freshness checks

**Authored coaching hints:**

- What changed since the predecessor observed the repository?
- Which assumptions depend on that earlier code state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente hereda una entrega escrita antes de que la rama de base cambiara sustancialmente. ¿Qué debe comprobar antes de su implementación?

1. Sólo la ortografía de la entrega

   La ortografía no establece frescura técnica.

2. Sólo la confianza del predecesor

   La confianza no valida el código cambiado.

3. Si las suposiciones, las ubicaciones de archivos y las decisiones siguen siendo aplicables a la revisión actual **[CORRECT]**

   Una base cambiada puede invalidar las premisas de la entrega.

4. Si puede reutilizar el mismo mensaje final

   Reutilizar la prosa no garantiza la continuidad.

**Concept:** Verificación de la frescura de las entregas

**Authored coaching hints:**

- ¿Qué ha cambiado desde que el predecesor observó el repositorio?
- ¿Qué suposiciones dependen de ese estado del código anterior?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente herda uma transferência escrita antes do branch base mudar substancialmente. O que deve verificar antes da implementação?

1. Só a ortografia da transferência

   A ortografia não estabelece a atualidade técnica.

2. Só a confiança do antecessor.

   A confiança não valida o código alterado.

3. Se as suposições, as localizações dos arquivos e as decisões continuam a ser aplicáveis à atual revisão **[CORRECT]**

   Uma base alterada pode invalidar as premissas da transferência.

4. Se pode reutilizar a mesma mensagem final

   Reutilizar a prosa não garante a continuidade.

**Concept:** verificações de atualidade das entregas

**Authored coaching hints:**

- O que mudou desde que o seu antecessor observou o repositório?
- Que suposições dependem daquele estado do código anterior?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-116:c8fb210f73ceebf9b32fefd57804a429a188f0adc487eeaf8868512529dc6166 -->
## Question 116: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-116`

**Content revision:** `c8fb210f73ceebf9b32fefd57804a429a188f0adc487eeaf8868512529dc6166`

### English

A repository memory contains a user's personal formatting preference. The team has a conflicting enforced style rule. What should guide this task?

1. The preference because it is personalized

   Personalization does not override task governance.

2. Whichever entry was retrieved first

   Retrieval ordering is not policy precedence.

3. An average of the two styles

   A hybrid may violate the enforced rule.

4. The applicable repository rule, while qualifying the preference's scope **[CORRECT]**

   Memory must be interpreted within the current repository's constraints.

**Concept:** Memory versus governing constraints

**Authored coaching hints:**

- Is the remembered item a preference or a requirement?
- Which instruction governs accepted changes here?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una memoria del repositorio contiene la preferencia personal de formato de un usuario. El equipo tiene una regla de estilo obligatoria que la contradice. ¿Qué debe guiar esta tarea?

1. La preferencia porque es personalizada

   La personalización no prevalece sobre el gobierno de tareas.

2. Cualquiera que sea la entrada que se haya recuperado primero

   La orden de recuperación no es prioridad política.

3. Un promedio de los dos estilos

   Un híbrido puede violar la regla aplicada.

4. La regla del repositorio aplicable, al tiempo que califica el ámbito de aplicación de la preferencia **[CORRECT]**

   La memoria debe interpretarse dentro de las restricciones del repositorio actual.

**Concept:** Memoria frente a restricciones de gobierno

**Authored coaching hints:**

- ¿El artículo recordado es una preferencia o un requisito?
- ¿Qué instrucción rige los cambios aceptados aquí?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma memória do repositório contém a preferência pessoal de formatação de um usuário. A equipe tem uma regra de estilo obrigatória que a contradiz. O que deve orientar esta tarefa?

1. A preferência porque é personalizada

   A personalização não prevalece sobre a governança de tarefas.

2. Qualquer entrada que tenha sido recuperada primeiro

   A ordem de recuperação não é prioridade política.

3. Uma média dos dois estilos

   Um híbrido pode violar a regra imposta.

4. A regra do repositório aplicável, ao mesmo tempo em que qualifica o escopo da preferência **[CORRECT]**

   A memória deve ser interpretada dentro das restrições do repositório atual.

**Concept:** Memória versus restrições governantes

**Authored coaching hints:**

- O item lembrado é uma preferência ou um requisito?
- Que instrução rege as mudanças aceitas aqui?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-117:6bc72bf0967f0791ece7be656e70f95df8079770d34aeb1027de7cfcba4bdc22 -->
## Question 117: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-117`

**Content revision:** `6bc72bf0967f0791ece7be656e70f95df8079770d34aeb1027de7cfcba4bdc22`

### English

An agent's context summary omits why a seemingly simpler design was rejected. It later reopens the same proposal. What should future summaries preserve?

1. Decision rationale and rejected alternatives relevant to the task **[CORRECT]**

   Relevant rationale prevents cycling through already resolved trade-offs.

2. Every unrelated brainstorming idea

   Unrelated ideas increase noise.

3. Only the chosen design's name

   A name does not explain constraints or rejected options.

4. Only the number of reviewers

   Reviewer counts do not capture reasoning behind a decision.

**Concept:** Preserving decision rationale

**Authored coaching hints:**

- What would prevent repeating a settled debate?
- Which rationale still constrains the next design choice?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El resumen de contexto de un agente omite por qué se rechazó un diseño aparentemente más simple. Más tarde vuelve a abrir la misma propuesta. ¿Qué deben conservar los resúmenes futuros?

1. La justificación de las decisiones y las alternativas rechazadas que sean relevantes para la tarea **[CORRECT]**

   La racionalidad pertinente impide que se realicen compromisos ya resueltos.

2. Cada idea no relacionada con el brainstorming

   Las ideas no relacionadas aumentan el ruido.

3. Sólo el nombre del diseño elegido

   Un nombre no explica restricciones o opciones rechazadas.

4. Solo el número de revisores

   Los recuentos de revisores no capturan el razonamiento detrás de una decisión.

**Concept:** Preservación de la justificación de la decisión

**Authored coaching hints:**

- ¿Qué podría impedir que se repita un debate resuelto?
- ¿Qué razonamiento todavía limita la próxima elección de diseño?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O resumo contextual de um agente omite por que um projeto aparentemente mais simples foi rejeitado. Mais tarde reabre a mesma proposta. O que devem preservar futuros resumos?

1. A justificativa das decisões e as alternativas rejeitadas relevantes para a tarefa **[CORRECT]**

   A raciocínio relevante impede a realização de acordos já resolvidos.

2. Todas as idéias de brainstorming não relacionadas

   Ideias não relacionadas aumentam o ruído.

3. Apenas o nome do projeto escolhido

   Um nome não explica restrições ou opções rejeitadas.

4. Apenas o número de revisores

   As contagens de revisores não captam o raciocínio por trás de uma decisão.

**Concept:** Preservação da justificação da decisão

**Authored coaching hints:**

- O que impediria a repetição de um debate resolvido?
- Qual razão ainda restringe a próxima escolha de design?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-118:1784a71edfc1fc1e23ef70d4d31c9ea08e3eed4c11e8ed9aba90387fad084c79 -->
## Question 118: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-118`

**Content revision:** `1784a71edfc1fc1e23ef70d4d31c9ea08e3eed4c11e8ed9aba90387fad084c79`

### English

A paused task resumes after its tool credentials were revoked. Its checkpoint says access was available. What should happen?

1. Treat the checkpoint as continuing permission

   Historical access is not present authorization.

2. Recheck current access and report a blocker if authorization is absent **[CORRECT]**

   Resume procedures must validate current execution prerequisites.

3. Recover the old credential from logs

   Logs must not become a credential recovery channel.

4. Use a different user's credential without approval

   Another identity cannot be assumed as a workaround.

**Concept:** Resume-time authorization validation

**Authored coaching hints:**

- Which conditions can change while a task is paused?
- Does a progress record grant authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea suspendida se reanuda después de que se revocan las credenciales de su herramienta. Su checkpoint dice que el acceso estaba disponible. ¿Qué debería pasar?

1. Tratar el checkpoint como una autorización continua

   El acceso histórico no es una autorización actual.

2. Reverifique el acceso actual e informe un bloqueador si no hay autorización **[CORRECT]**

   Los procedimientos de reanudación deben validar los requisitos previos de ejecución actuales.

3. Recupera la vieja credencial de los registros

   Los registros no deben convertirse en un canal de recuperación de credenciales.

4. Usar la credencial de un usuario diferente sin la aprobación

   No se puede asumir otra identidad como solución.

**Concept:** Validación de la autorización de tiempo de currículum

**Authored coaching hints:**

- ¿Qué condiciones pueden cambiar mientras se detiene una tarea?
- ¿Recoge una autoridad de subvención el progreso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa suspensa retoma-se após a revogação das credenciais da sua ferramenta. O seu checkpoint diz que o acesso estava disponível. O que é que vai acontecer?

1. Tratar o checkpoint como permissão contínua

   O acesso histórico não é autorizado.

2. Reverifique o acesso atual e informe um bloqueador se a autorização estiver ausente **[CORRECT]**

   Os procedimentos de prossecução devem validar os pré-requisitos de execução atuais.

3. Recuperar as antigas credenciais dos registros

   Os registros não devem tornar-se um canal de recuperação de credenciais.

4. Usar a credencial de um usuário diferente sem aprovação

   Não se pode assumir outra identidade como solução.

**Concept:** Validação da autorização de currículo

**Authored coaching hints:**

- Que condições podem mudar enquanto uma tarefa é interrompida?
- Um registro de progressos da autoridade de concessão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-119:c7d7dbf9b1b717a74779a7e1dd5cb5122e58a5f1eb44ae5b048a0f77bcb0e19d -->
## Question 119: Manage memory, state, and execution

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-119`

**Content revision:** `c7d7dbf9b1b717a74779a7e1dd5cb5122e58a5f1eb44ae5b048a0f77bcb0e19d`

### English

An agent has completed the authorized task. What is the best reset policy before an unrelated task begins?

1. Carry all working context forward unchanged

   Unrelated carryover risks contamination.

2. Erase required audit evidence

   Audit retention and working-context reset are different concerns.

3. Reset task-local working state while retaining authorized durable records **[CORRECT]**

   Resetting working state prevents drift without destroying accountability.

4. Promote temporary assumptions into global policy

   Temporary assumptions are not durable governance.

**Concept:** Task reset versus audit retention

**Authored coaching hints:**

- Which information should influence the next task?
- Which information must remain available only as historical evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente ha completado la tarea autorizada. ¿Cuál es la mejor política de restablecimiento antes de que comience una tarea no relacionada?

1. Transporte todo el contexto de trabajo hacia adelante sin cambios

   El transporte no relacionado corre el riesgo de contaminación.

2. Eliminar las pruebas de auditoría requeridas

   La retención de auditorías y el restablecimiento del contexto de trabajo son preocupaciones diferentes.

3. Restablecer el estado de trabajo local de la tarea mientras se conservan los registros duraderos autorizados **[CORRECT]**

   El restablecimiento del estado de trabajo evita la deriva sin destruir la rendición de cuentas.

4. Promover suposiciones temporales en la política global

   Las suposiciones temporales no son una gobernanza duradera.

**Concept:** restablecimiento de tareas frente a retención de auditorías

**Authored coaching hints:**

- ¿Qué información debería influir en la siguiente tarea?
- ¿Qué información debe permanecer disponible sólo como evidencia histórica?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente completou a tarefa autorizada. Qual é a melhor política de reinicialização antes de uma tarefa não relacionada começar?

1. Transporte todo o contexto de trabalho para a frente inalterado

   Os riscos de transferência não relacionados são de contaminação.

2. Eliminar as provas de auditoria necessárias

   A retenção da auditoria e a redefinição do contexto de trabalho são preocupações diferentes.

3. Resetar o estado de trabalho local da tarefa, mantendo registros duráveis autorizados **[CORRECT]**

   O restabelecimento do estado de funcionamento impede a deriva sem destruir a responsabilidade.

4. Promoção de suposições temporárias na política global

   As suposições temporárias não são governança duradoura.

**Concept:** Reset das tarefas versus retenção da auditoria

**Authored coaching hints:**

- Que informações devem influenciar a próxima tarefa?
- Quais informações devem permanecer disponíveis apenas como evidências históricas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-120:62903a9c4aa95d1aa6c7b2ad78f9a846103189536ed53ec5baf99658f2445242 -->
## Question 120: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-120`

**Content revision:** `62903a9c4aa95d1aa6c7b2ad78f9a846103189536ed53ec5baf99658f2445242`

### English

An agent fixes a billing defect. Which evaluation best measures success?

1. Patch length

   Length is not correctness.

2. Model confidence

   Confidence is not independent evidence.

3. Execution speed alone

   Speed can improve while behavior regresses.

4. Correct billing cases plus regression, security, and scope checks **[CORRECT]**

   Task behavior and operational constraints jointly define success.

**Concept:** Multidimensional success criteria

**Authored coaching hints:**

- What user-visible defect must be resolved?
- Which constraints remain mandatory while fixing it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente arregla un defecto de facturación. ¿Qué evaluación mide mejor el éxito?

1. Tamaño del patch

   La longitud no es corrección.

2. Modelo de confianza

   La confianza no es evidencia independiente.

3. Velocidad de ejecución sola

   La velocidad puede mejorar mientras el comportamiento regresa.

4. Casos correctos de facturación más controles de regresión, seguridad y alcance **[CORRECT]**

   El comportamiento de las tareas y las limitaciones operativas definen conjuntamente el éxito.

**Concept:** Criterios de éxito multidimensionales

**Authored coaching hints:**

- ¿Qué defecto visible para el usuario debe resolverse?
- ¿Cuáles son las restricciones que siguen siendo obligatorias durante la reparación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente corrige um defeito de faturamento. Qual é a melhor avaliação para medir o sucesso?

1. Tamanho do patch

   O comprimento não é correto.

2. Modelo de confiança

   A confiança não é evidência independente.

3. Velocidade de execução só

   A velocidade pode melhorar enquanto o comportamento regressar.

4. Caso de cobrança correta mais verificações de regressão, segurança e alcance **[CORRECT]**

   O comportamento das tarefas e as restrições operacionais definem conjuntamente o sucesso.

**Concept:** Critérios de sucesso multidimensionais

**Authored coaching hints:**

- Qual defeito visível ao usuário deve ser resolvido?
- Que restrições permanecem obrigatórias durante a reparação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-121:88137e3d1ac6f8dcbea11a496f5b1468d4c5d746a489f8dc64bf2d6e038eeb02 -->
## Question 121: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-121`

**Content revision:** `88137e3d1ac6f8dcbea11a496f5b1468d4c5d746a489f8dc64bf2d6e038eeb02`

### English

A correct implementation fails because the runner has no compiler. Which primary failure category fits?

1. Environment failure **[CORRECT]**

   A missing runtime prerequisite prevents execution.

2. Reasoning failure

   The evidence does not establish faulty implementation reasoning.

3. Unauthorized tool mutation

   No unauthorized mutation is described.

4. Incorrect acceptance criteria

   The compiler requirement does not invalidate the task's criteria.

**Concept:** Environment failure classification

**Authored coaching hints:**

- At which layer did execution stop?
- Would changing implementation logic supply the missing prerequisite?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una implementación correcta falla porque el runner no tiene compilador. ¿Qué categoría de fallas primarias encaja?

1. Fallo del entorno **[CORRECT]**

   Un requisito previo de tiempo de ejecución faltante impide la ejecución.

2. Fallo de razonamiento

   Las pruebas no establecen un razonamiento de ejecución defectuoso.

3. Mutación de herramienta no autorizada

   No se describe ninguna mutación no autorizada.

4. Criterios de aceptación incorrectos

   El requisito de compilador no invalida los criterios de la tarea.

**Concept:** Clasificación de fallas ambientales

**Authored coaching hints:**

- ¿En qué capa se detuvo la ejecución?
- ¿Cambiaría la lógica de implementación el requisito previo faltante?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implementação correta falha porque o runner não tem compilador. Qual é a categoria de falhas primárias?

1. Falha do ambiente **[CORRECT]**

   Um pré-requisito de execução faltante impede a execução.

2. Falha de raciocínio

   Os evidências não estabelecem um raciocínio de execução defeituoso.

3. Mutação de ferramenta não autorizada

   Não são descritas mutações não autorizadas.

4. Critérios de aceitação incorretos

   O requisito de compilador não invalida os critérios da tarefa.

**Concept:** Classificação de falhas ambientais

**Authored coaching hints:**

- Em que camada a execução parou?
- A mudança da lógica de implementação forneceria o pré-requisito que falta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-122:b56c30c25175b311020434d954451d1bde19010f0c289811ec371387992343dc -->
## Question 122: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-122`

**Content revision:** `b56c30c25175b311020434d954451d1bde19010f0c289811ec371387992343dc`

### English

An agent selects a delete tool instead of a read tool, despite clear task instructions and valid credentials. What is the primary failure?

1. Network outage

   No network failure is indicated.

2. Tool misuse **[CORRECT]**

   The selected operation contradicts the required action.

3. Insufficient context capacity

   The task was clear; context capacity is not established as the cause.

4. A flaky test

   No test instability is described.

**Concept:** Tool misuse classification

**Authored coaching hints:**

- Was the intended operation represented correctly?
- Which tool action actually occurred?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente selecciona una herramienta de eliminación en lugar de una herramienta de lectura, a pesar de las instrucciones claras de tarea y las credenciales válidas. ¿Cuál es el fracaso principal?

1. Interrupción de la red

   No se indica ninguna falla de red.

2. Uso indebido de las herramientas **[CORRECT]**

   La operación seleccionada contradice la acción requerida.

3. Capacidad insuficiente en el contexto

   La tarea era clara; la capacidad del contexto no se establece como la causa.

4. Una prueba escamosa

   No se describe la inestabilidad del prueba.

**Concept:** Clasificación del mal uso de las herramientas

**Authored coaching hints:**

- ¿Fue representada correctamente la operación prevista?
- ¿Qué acción de herramienta ocurrió realmente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente seleciona uma ferramenta de exclusão em vez de uma ferramenta de leitura, apesar de instruções de tarefa claras e credenciais válidas. Qual é o principal fracasso?

1. Interrupção da rede

   Nenhuma falha de rede é indicada.

2. Uso indevido de ferramentas **[CORRECT]**

   A operação selecionada contradiz a ação necessária.

3. Capacidade contextual insuficiente

   A tarefa era clara; a capacidade do contexto não é estabelecida como a causa.

4. Um teste espinhoso

   Não se descreve nenhuma instabilidade no teste.

**Concept:** Classificação de abuso de ferramentas

**Authored coaching hints:**

- A operação prevista foi representada corretamente?
- Que ação de ferramenta realmente ocorreu?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-123:3048c618da30c8e66407e7f467c9e52e121da6b1a4c29f5a145f766e2f04fd25 -->
## Question 123: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-123`

**Content revision:** `3048c618da30c8e66407e7f467c9e52e121da6b1a4c29f5a145f766e2f04fd25`

### English

All tools executed as requested, but an agent chose the wrong formula for a clearly specified business rule. How should the primary cause be classified?

1. Tool connectivity

   Tools were connected and operational.

2. Credential expiration

   No credential failure is described.

3. Reasoning or requirement-application error **[CORRECT]**

   The agent misapplied known requirements while planning the solution.

4. Artifact retention failure

   Evidence retention did not cause the wrong formula.

**Concept:** Reasoning failure classification

**Authored coaching hints:**

- Was the wrong result caused by execution or by the selected approach?
- What did the agent know when it chose the formula?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Todas las herramientas se ejecutaron como se solicitó, pero un agente eligió la fórmula equivocada para una regla comercial claramente especificada. ¿Cómo debe clasificarse la causa principal?

1. Conectividad de las herramientas

   Las herramientas estaban conectadas y operativas.

2. Vencimiento de las credenciales

   No se describe ningún fallo de credenciales.

3. Error de razonamiento o de aplicación de los requisitos **[CORRECT]**

   El agente aplicó mal los requisitos conocidos mientras planeaba la solución.

4. Fallo de retención del artefacto

   La retención de pruebas no causó la fórmula equivocada.

**Concept:** Clasificación de fallas de razonamiento

**Authored coaching hints:**

- ¿Fue el resultado equivocado causado por la ejecución o por el método elegido?
- ¿Qué sabía el agente cuando eligió la fórmula?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Todas as ferramentas executadas como solicitado, mas um agente escolheu a fórmula errada para uma regra comercial claramente especificada. Como deve ser classificada a causa primária?

1. Conectividade de ferramentas

   As ferramentas estavam ligadas e operacionais.

2. Expiração das credenciais

   Não se descreve nenhuma falha de credenciais.

3. Erro de raciocínio ou de aplicação de requisitos **[CORRECT]**

   O agente aplicou mal os requisitos conhecidos ao planejar a solução.

4. Falha de retenção de artefatos

   A retenção de provas não causou a fórmula errada.

**Concept:** Classificação de falhas de raciocínio

**Authored coaching hints:**

- O resultado errado foi causado pela execução ou pela abordagem escolhida?
- O que sabia o agente quando escolheu a fórmula?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-124:a9b33c4503c64ce89e5687bd03176ab9c8ee4f182cff0a4c31e175dc03697c33 -->
## Question 124: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-124`

**Content revision:** `a9b33c4503c64ce89e5687bd03176ab9c8ee4f182cff0a4c31e175dc03697c33`

### English

An agent modifies a deprecated module because retrieval supplied an outdated architecture map. Which root cause should be investigated first?

1. CPU saturation

   No capacity evidence is given.

2. An incorrect formatter

   Formatting did not select the obsolete module.

3. A secret-scanning false positive

   No scanning event is involved.

4. Stale context supplied to the agent **[CORRECT]**

   The retrieved map misrepresented current architecture.

**Concept:** Context failure classification

**Authored coaching hints:**

- Which input directed the agent to the wrong location?
- Was that input valid for the current revision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente modifica un módulo obsoleto porque la recuperación proporcionó un mapa de arquitectura obsoleto. ¿Qué causa raíz debe investigarse primero?

1. La saturación de CPU

   No hay pruebas de capacidad.

2. Un formato incorrecto

   El formato no seleccionó el módulo obsoleto.

3. Un falso positivo de escaneo secreto

   No se trata de un evento de escaneo.

4. Contexto obsoleto proporcionado al agente **[CORRECT]**

   El mapa recuperado mal representaba la arquitectura actual.

**Concept:** Clasificación de fallos de contexto

**Authored coaching hints:**

- ¿Qué entrada dirigió al agente al lugar equivocado?
- ¿Esta entrada era válida para la revisión actual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente modifica um módulo obsoleto porque a recuperação forneceu um mapa de arquitetura obsoleto. Que causa raiz deve ser investigada primeiro?

1. Saturação CPU

   Não há provas de capacidade.

2. Um formatador incorreto

   A formatagem não selecionou o módulo obsoleto.

3. Um falso positivo escaneado em segredo

   Não se trata de um evento de análise de código.

4. Contexto desatualizado fornecido ao agente **[CORRECT]**

   O mapa recuperado distorceu a arquitetura atual.

**Concept:** Classificação de falhas de contexto

**Authored coaching hints:**

- Que entrada dirigiu o agente para o local errado?
- Essa entrada era válida para a atual revisão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-125:f8b126d88b0ca6262b27745aa60f408620b65eddc3622ae995c1463d7bb8d7bc -->
## Question 125: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-125`

**Content revision:** `f8b126d88b0ca6262b27745aa60f408620b65eddc3622ae995c1463d7bb8d7bc`

### English

A team changes agent instructions and wants to measure improvement. Which comparison is most credible?

1. Run both versions against a representative held-out task set with the same rubric **[CORRECT]**

   Comparable tasks and criteria support an attributable evaluation.

2. Compare different tasks selected by each version

   Different task difficulty confounds the comparison.

3. Count positive phrases in final responses

   Positive language is not task quality.

4. Ask the updated agent whether it improved

   Self-assessment is not independent validation.

**Concept:** Controlled evaluation

**Authored coaching hints:**

- Which variables should remain stable?
- What evidence distinguishes improvement from easier tasks?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo cambia las instrucciones del agente y quiere medir la mejora. ¿Qué comparación es más creíble?

1. Evaluar ambas versiones con el mismo conjunto representativo reservado para evaluación y la misma rúbrica **[CORRECT]**

   Las tareas y criterios comparables apoyan una evaluación atribuible.

2. Compare diferentes tareas seleccionadas por cada versión

   Diferentes dificultades de tarea confunden la comparación.

3. Cuenta frases positivas en las respuestas finales

   El lenguaje positivo no es la calidad de la tarea.

4. Pregunte al agente actualizado si ha mejorado

   La autoevaluación no es una validación independiente.

**Concept:** Evaluación controlada

**Authored coaching hints:**

- ¿Qué variables deben permanecer estables?
- ¿Qué evidencia distingue la mejora de las tareas más fáciles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe muda as instruções do agente e quer medir a melhoria. Qual comparação é mais credível?

1. Avaliar ambas as versões com o mesmo conjunto representativo reservado para avaliação e a mesma rubrica **[CORRECT]**

   As tarefas e critérios comparáveis apoiam uma avaliação atribuível.

2. Comparar diferentes tarefas selecionadas por cada versão

   Diferentes dificuldades de tarefa confundem a comparação.

3. Conte frases positivas nas respostas finais

   A linguagem positiva não é qualidade da tarefa.

4. Pergunte ao agente atualizado se melhorou

   A autoavaliação não é uma validação independente.

**Concept:** Avaliação controlada

**Authored coaching hints:**

- Que variáveis devem permanecer estáveis?
- Que evidência distingue a melhoria das tarefas mais fáceis?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-126:f85f99f281df837bcea58f4941bbe1b7b39a9b8e9b4d52d0de6e8d7e5db84631 -->
## Question 126: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-126`

**Content revision:** `f85f99f281df837bcea58f4941bbe1b7b39a9b8e9b4d52d0de6e8d7e5db84631`

### English

An agent's pass rate rises after maintainers remove difficult cases from the evaluation set. What is the main concern?

1. The model must now be more reliable

   The comparison no longer isolates model behavior.

2. The metric may reflect reduced coverage rather than improved behavior **[CORRECT]**

   Changing case difficulty can create a misleading improvement.

3. Evaluation sets should contain only easy cases

   Hard representative cases expose important failure modes.

4. Fewer cases guarantee stronger statistical evidence

   Smaller samples do not inherently strengthen evidence.

**Concept:** Evaluation coverage bias

**Authored coaching hints:**

- Did the system change, or did the measurement change?
- Which real-world risks disappeared from the test set?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La tasa de aprobación de un agente aumenta después de que los mantenedores eliminen los casos difíciles del conjunto de evaluación. ¿Cuál es la principal preocupación?

1. El modelo ahora debe ser más confiable

   La comparación ya no aisla el comportamiento del modelo.

2. La métrica puede reflejar una cobertura reducida en lugar de un comportamiento mejorado **[CORRECT]**

   Cambiar la dificultad del caso puede crear una mejora engañosa.

3. Los conjuntos de evaluación deben contener sólo casos fáciles

   Los casos representativos difíciles exponen importantes modos de falla.

4. Menos casos garantizan pruebas estadísticas más sólidas

   Las muestras más pequeñas no refuerzan las pruebas.

**Concept:** Prejuicio de la cobertura de la evaluación

**Authored coaching hints:**

- ¿Cambió el sistema o cambió la medición?
- ¿Qué riesgos del mundo real desaparecieron del conjunto de pruebas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A taxa de aprovação de um agente aumenta após os administradores removerem casos difíceis do conjunto de avaliação. Qual é a principal preocupação?

1. O modelo deve agora ser mais confiável

   A comparação não isola mais o comportamento modelo.

2. A métrica pode refletir uma cobertura reduzida em vez de um comportamento melhorado **[CORRECT]**

   A alteração da dificuldade do caso pode criar uma melhoria enganosa.

3. Os conjuntos de avaliação devem conter apenas casos fáceis

   Casos representativos difíceis expõem modos de falha importantes.

4. Menos casos garantem evidências estatísticas mais fortes

   As amostras menores não reforçam as evidências.

**Concept:** Preconceito da cobertura de avaliação

**Authored coaching hints:**

- O sistema mudou ou a medição mudou?
- Que riscos do mundo real desapareceram do set de testes?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-127:a1d828d67831e293de2311488a69162788c4552dc6ffd9a3982b42f45c62f6fa -->
## Question 127: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-127`

**Content revision:** `a1d828d67831e293de2311488a69162788c4552dc6ffd9a3982b42f45c62f6fa`

### English

A generated patch passes unit tests but introduces a vulnerable dependency. Which missing signal would most directly expose this?

1. A prose-length score

   Prose length cannot assess package vulnerabilities.

2. A count of edited files

   File counts do not assess dependency risk.

3. Dependency security analysis **[CORRECT]**

   Dependency analysis targets known vulnerability exposure.

4. The agent's estimated confidence

   Confidence cannot replace automated security evidence.

**Concept:** Automated security evaluation signals

**Authored coaching hints:**

- Which risk is outside the behavior exercised by unit tests?
- What kind of analysis inspects the changed dependency set?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un parche generado pasa las pruebas de unidad pero introduce una dependencia vulnerable. ¿Qué señal faltante expondría esto más directamente?

1. Una partitura de prosa

   La longitud de la prosa no puede evaluar las vulnerabilidades del paquete.

2. Un recuento de archivos editados

   Los recuentos de archivos no evalúan el riesgo de dependencia.

3. Análisis de seguridad de la dependencia **[CORRECT]**

   El análisis de dependencia apunta a la exposición a la vulnerabilidad conocida.

4. La confianza estimada del agente

   La confianza no puede reemplazar la evidencia de seguridad automatizada.

**Concept:** señales automatizadas de evaluación de la seguridad

**Authored coaching hints:**

- ¿Qué riesgo existe fuera del comportamiento ejercido por las pruebas unitarias?
- ¿Qué tipo de análisis inspecciona el conjunto de dependencias cambiado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um patch gerado passa os testes de unidade, mas introduz uma dependência vulnerável. Que sinal faltante expõe isto mais diretamente?

1. Uma pontuação em prosa

   O comprimento da prosa não pode avaliar as vulnerabilidades do pacote.

2. Uma contagem de arquivos editados

   A contagem de arquivos não avalia o risco de dependência.

3. Análise de segurança de dependência **[CORRECT]**

   A análise de dependência visa a exposição à vulnerabilidade conhecida.

4. A confiança estimada do agente

   A confiança não pode substituir a evidência de segurança automatizada.

**Concept:** sinais automatizados de avaliação de segurança

**Authored coaching hints:**

- Qual é o risco fora do comportamento exercido pelos testes unitários?
- Que tipo de análise inspeciona o conjunto de dependências alterado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-128:ce7020584c1a93c3ecf65d1bb9e89a855cd16810e4b83750a639cc2e935b1085 -->
## Question 128: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-128`

**Content revision:** `ce7020584c1a93c3ecf65d1bb9e89a855cd16810e4b83750a639cc2e935b1085`

### English

A scanner flags a generated change. The agent says the warning is probably harmless. What should happen next?

1. Suppress the finding automatically

   Unreviewed suppression hides a possible defect.

2. Accept the agent's confidence as a waiver

   A model cannot grant its own security exception.

3. Delete the scanning step

   Removing the signal avoids rather than resolves the risk.

4. Investigate the finding against code and policy, documenting an authorized disposition **[CORRECT]**

   Evidence-based triage determines whether remediation or an approved exception is appropriate.

**Concept:** Scan finding triage

**Authored coaching hints:**

- What evidence would support calling this a false positive?
- Who can authorize an exception?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un escáner señala un cambio generado. El agente dice que la advertencia es probablemente inofensiva. ¿Qué debería pasar después?

1. Eliminar el hallazgo automáticamente

   La supresión no revisada oculta un posible defecto.

2. Aceptar la confianza del agente como una renuncia

   Un modelo no puede conceder su propia excepción de seguridad.

3. Eliminar el paso de escaneo

   Eliminar la señal evita el riesgo en lugar de resolverlo.

4. Investigar el hallazgo contra el código y la política, documentando una disposición autorizada **[CORRECT]**

   El triaje basado en la evidencia determinará si es apropiada una reparación o una excepción aprobada.

**Concept:** Clasificación de hallazgos del análisis

**Authored coaching hints:**

- ¿Qué evidencia apoyaría llamar esto falso positivo?
- ¿Quién puede autorizar una excepción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um scanner marca uma mudança gerada. O agente diz que o aviso é provavelmente inofensivo. O que deve acontecer a seguir?

1. Eliminar automaticamente a descoberta

   A supressão não revisada oculta um possível defeito.

2. Aceitar a confiança do agente como uma renúncia.

   Um modelo não pode conceder a sua própria exceção de segurança.

3. Excluir o passo de análise de código

   A remoção do sinal evita, em vez de resolver, o risco.

4. Investigar o achado no código e nas políticas, documentando uma decisão autorizada **[CORRECT]**

   A triagem baseada em evidências determina se é apropriada uma remediação ou uma exceção aprovada.

**Concept:** Triagem de achados da análise

**Authored coaching hints:**

- Que evidência apoiaria chamar isso de falso positivo?
- Quem pode autorizar uma exceção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-129:7414effe5c18c3cef256651ad71e7fa3bd4d217b81e515ec05776feb28b76ef7 -->
## Question 129: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-129`

**Content revision:** `7414effe5c18c3cef256651ad71e7fa3bd4d217b81e515ec05776feb28b76ef7`

### English

Agent failures cluster around missing task constraints. Which tuning change best targets the cause?

1. Add explicit constraints and acceptance criteria to task inputs **[CORRECT]**

   Improved task inputs address the missing information.

2. Increase retry count for all tools

   Retries do not supply missing requirements.

3. Grant broader write access

   Broader permissions do not clarify intent.

4. Use longer final summaries

   Final verbosity does not improve initial task grounding.

**Concept:** Cause-directed instruction tuning

**Authored coaching hints:**

- What information was absent before the decision?
- Which change addresses that absence directly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los fracasos de los agentes se agrupan en torno a las limitaciones de tareas faltantes. ¿Qué cambio de ajuste se dirige mejor a la causa?

1. Añadir restricciones explícitas y criterios de aceptación a las entradas de tareas **[CORRECT]**

   Las entradas de tareas mejoradas abordan la información que falta.

2. Aumenta el número de intentos de repetición para todas las herramientas

   Los retros no proporcionan los requisitos que faltan.

3. Conceder acceso de escritura más amplio

   Los permisos más amplios no aclaran la intención.

4. Utilice resúmenes finales más largos

   La verbosidad final no mejora la base de la tarea inicial.

**Concept:** ajuste de instrucciones dirigidas a la causa

**Authored coaching hints:**

- ¿Qué información faltaba antes de la decisión?
- ¿Qué cambio aborda directamente esa ausencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

As falhas dos agentes agrupam-se em torno das limitações de tarefas faltantes. Que mudança de ajuste visa melhor a causa?

1. Adicionar restrições explícitas e critérios de aceitação às entradas de tarefas **[CORRECT]**

   As entradas de tarefas melhoradas tratam as informações faltantes.

2. Aumentar o número de retestes para todas as ferramentas

   Os retrospectivos não fornecem os requisitos que faltam.

3. Conceder acesso de escrita mais amplo

   Permissões mais amplas não esclarecem a intenção.

4. Use resumos finais mais longos

   A verbosidade final não melhora a fixação inicial da tarefa.

**Concept:** Ajuste de instruções orientadas para a causa

**Authored coaching hints:**

- Que informações faltavam antes da decisão?
- Que alteração aborda essa ausência diretamente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-130:6d4a0c57f4ae25ef670f17cf331ca1e92d33da09927cda62005d915bb4a3131f -->
## Question 130: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-130`

**Content revision:** `6d4a0c57f4ae25ef670f17cf331ca1e92d33da09927cda62005d915bb4a3131f`

### English

An agent repeatedly calls irrelevant tools. Traces show a large overlapping tool catalog. Which tuning is most targeted?

1. Add more tools so one will eventually fit

   More overlap can worsen selection.

2. Narrow tool exposure and clarify capability descriptions **[CORRECT]**

   Clearer, smaller capability boundaries target tool confusion.

3. Remove all logs

   Removing logs destroys diagnostic evidence.

4. Increase the allowed number of calls without changing selection

   A larger budget does not correct selection behavior.

**Concept:** Tool-selection tuning

**Authored coaching hints:**

- What made the available actions hard to distinguish?
- Can capability design reduce the chance of choosing the wrong operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente llama repetidamente a herramientas irrelevantes. Las huellas muestran un gran catálogo de herramientas superpuestas. ¿Cuál ajuste es más dirigida?

1. Añadir más herramientas para que uno eventualmente encaje

   Más superposición puede empeorar la selección.

2. Reducir la exposición a las herramientas y aclarar las descripciones de las capacidades **[CORRECT]**

   Los límites de capacidad más claros y más pequeños apuntan a la confusión de las herramientas.

3. Eliminar todos los registros

   Eliminar los registros destruye la evidencia de diagnóstico.

4. Aumentar el número permitido de llamadas sin cambiar la selección

   Un presupuesto más grande no corrige el comportamiento de selección.

**Concept:** ajuste por selección de herramientas

**Authored coaching hints:**

- ¿Qué hizo que las acciones disponibles fueran difíciles de distinguir?
- ¿Puede el diseño de capacidades reducir la posibilidad de elegir la operación equivocada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente chama repetidamente ferramentas irrelevantes. Os vestígios mostram um grande catálogo de ferramentas sobrepostas. Qual ajuste é mais alvo?

1. Adicionar mais ferramentas para que um eventualmente se encaixe

   Mais sobreposições podem piorar a selecção.

2. Limitar a exposição das ferramentas e esclarecer as descrições das capacidades **[CORRECT]**

   Limitações de capacidade mais claras e menores visam a conmerge das ferramentas.

3. Remover todos os registros

   A remoção de registros destrói provas de diagnóstico.

4. Aumentar o número permitido de chamadas sem alterar a seleção

   Um orçamento maior não corrige o comportamento de selecção.

**Concept:** ajuste de selecção de ferramentas

**Authored coaching hints:**

- O que tornou difícil distinguir as ações disponíveis?
- O design de capacidades pode reduzir as chances de escolher a operação errada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-131:0e3b2e44c39f7778b911abf91b85d5d50d0bba83e139ae242e7709c430b22983 -->
## Question 131: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-131`

**Content revision:** `0e3b2e44c39f7778b911abf91b85d5d50d0bba83e139ae242e7709c430b22983`

### English

A team measures agent latency only on successful runs, excluding timeouts. What problem does this create?

1. It proves the agent meets all deadlines

   Excluded timeouts may violate deadlines.

2. It directly measures failure recovery

   Recovery time is absent from the sample.

3. It hides slow failures and overstates operational performance **[CORRECT]**

   Success-only latency ignores an important class of user experience.

4. It makes success rate unnecessary

   Reliability and latency remain distinct signals.

**Concept:** Operational metric completeness

**Authored coaching hints:**

- Which users are excluded from the measurement?
- What happened to the longest executions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo mide la latencia del agente solo en ejecuciones exitosas y excluye las que agotan el tiempo de espera. ¿Qué problema genera?

1. Prueba que el agente cumple con todos los plazos.

   Las tiempos de espera agotados excluidas pueden violar los plazos.

2. Mide directamente la recuperación de los fallos

   No hay tiempo de recuperación en la muestra.

3. Esconde fallas lentas y exagera el rendimiento operativo **[CORRECT]**

   La latencia de solo éxito ignora una clase importante de experiencia del usuario.

4. Hace que la tasa de éxito sea innecesaria.

   La fiabilidad y la latencia siguen siendo señales distintas.

**Concept:** Completidad de las métricas operativas

**Authored coaching hints:**

- ¿Qué usuarios están excluidos de la medición?
- ¿Qué pasó con las ejecuciones más largas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe mede a latência do agente apenas nas execuções bem-sucedidas, excluindo as que excedem o tempo limite. Que problema isso gera?

1. Prova que o agente cumpre todos os prazos.

   As limites de tempo excedidos excluídas podem violar os prazos.

2. Medem diretamente a recuperação de falhas

   O tempo de recuperação está ausente da amostra.

3. Esconde falhas lentas e exagera o desempenho operacional **[CORRECT]**

   A latência apenas de sucesso ignora uma classe importante de experiência do usuário.

4. Faz a taxa de sucesso desnecessária

   A confiabilidade e a latência continuam a ser sinais distintos.

**Concept:** Completeza das métricas operacionais

**Authored coaching hints:**

- Quais os usuários são excluídos da medição?
- O que aconteceu com as execuções mais longas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-132:31b23f03e9e0a0005341e1a161dd847944018c6aaf6d915e10d18dbecf377647 -->
## Question 132: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-132`

**Content revision:** `31b23f03e9e0a0005341e1a161dd847944018c6aaf6d915e10d18dbecf377647`

### English

A generated test suite copies the implementation's incorrect assumption and passes. What evaluation improvement is strongest?

1. Generate more tests from the same assumption

   Additional tests can repeat the same blind spot.

2. Trust the shared conclusion because two artifacts agree

   Correlated errors are not independent confirmation.

3. Use a different formatter for the tests

   Formatting cannot correct the oracle.

4. Derive expected outcomes independently from requirements and edge cases **[CORRECT]**

   Independent expected behavior reduces shared implementation-test bias.

**Concept:** Independent test oracles

**Authored coaching hints:**

- Where did the expected values come from?
- Can the test and implementation agree while both violate the requirement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una suite de pruebas generada copia la suposición incorrecta de la implementación y pasa. ¿Cuál es la mejor evaluación?

1. Generar más pruebas de la misma suposición

   Los exámenes adicionales pueden repetir el mismo punto ciego.

2. Confía en la conclusión compartida porque dos artefactos coinciden

   Los errores correlacionados no son una confirmación independiente.

3. Usar un formato diferente para los pruebas

   El formato no puede corregir el oráculo.

4. Derivar los resultados esperados de forma independiente a partir de los requisitos y los casos límite **[CORRECT]**

   El comportamiento esperado independiente reduce el sesgo de implementación compartida de las pruebas.

**Concept:** oráculos de prueba independientes

**Authored coaching hints:**

- ¿De dónde provienen los valores esperados?
- ¿Pueden el prueba y la aplicación coincidir mientras ambos violan el requisito?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um conjunto de testes gerado copia a suposição incorreta da implementação e passa. Qual é a melhoria de avaliação mais forte?

1. Gerar mais testes a partir do mesmo pressuposto

   Outros testes podem repetir o mesmo ponto cego.

2. Confia na conclusão compartilhada porque dois artefatos concordam

   Os erros correlacionados não são confirmação independente.

3. Usar um formatador diferente para os testes

   O formatamento não pode corrigir o oráculo.

4. Derivar os resultados esperados de forma independente a partir dos requisitos e dos casos-limite **[CORRECT]**

   O comportamento esperado independente reduz o viés compartilhado de implementação-teste.

**Concept:** oráculos de teste independentes

**Authored coaching hints:**

- De onde vieram os valores esperados?
- Pode o teste e a execução concordar enquanto ambos violam o requisito?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-133:e50fc9990088cd3d1c5ed7e4a7e85b74360734b28ad0afe12e03f453edf8177b -->
## Question 133: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-133`

**Content revision:** `e50fc9990088cd3d1c5ed7e4a7e85b74360734b28ad0afe12e03f453edf8177b`

### English

A team wants qualitative evidence that an agent's plan is maintainable. Which evaluation fits?

1. A rubric-based review by relevant maintainers **[CORRECT]**

   Maintainers can assess trade-offs against explicit architectural criteria.

2. Only elapsed milliseconds

   Latency does not measure maintainability.

3. Only tool-call count

   Call count is not design quality.

4. Only a compilation result

   Compilation does not assess long-term design clarity.

**Concept:** Qualitative evaluation rubrics

**Authored coaching hints:**

- Which aspects require engineering judgment?
- How can that judgment be made consistent across reviewers?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere pruebas cualitativas de que el plan de un agente es mantenible. ¿Cuál de las evaluaciones encaja?

1. Una revisión sobre la base de las rúbricas por parte de los encargados de mantenimiento pertinentes **[CORRECT]**

   Los mantenedores pueden evaluar las compensaciones con criterios arquitectónicos explícitos.

2. Sólo transcurridos milisegundos

   La latencia no mide el mantenimiento.

3. Únicamente el número de llamadas a herramientas

   El número de llamadas no es la calidad del diseño.

4. Sólo un resultado de compilación

   La recopilación no evalúa la claridad del diseño a largo plazo.

**Concept:** Rótulos de evaluación cualitativa

**Authored coaching hints:**

- ¿Qué aspectos requieren juicio de ingeniería?
- ¿Cómo se puede hacer coherente ese juicio entre los revisores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer evidências qualitativas de que o plano de um agente facilita a manutenção. Qual avaliação é adequada?

1. Uma revisão com rubrica pelos mantenedores responsáveis **[CORRECT]**

   Os administradores de manutenção podem avaliar as compensações com base em critérios arquitetônicos explícitos.

2. Apenas os milissegundos decorridos

   A latência não mede a manutenção.

3. Apenas contagem de chamadas de ferramentas

   A contagem de chamadas não é a qualidade do design.

4. Apenas um resultado de compilação

   A compilação não avalia a clareza do projeto a longo prazo.

**Concept:** rubricas de avaliação qualitativa

**Authored coaching hints:**

- Que aspectos exigem o julgamento dos engenheiros?
- Como esse julgamento pode ser feito consistente entre os revisores?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-134:3ce3f29921137bfb8866bc057779300beafa414e54fa115fe31744919d6bf3a5 -->
## Question 134: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-134`

**Content revision:** `3ce3f29921137bfb8866bc057779300beafa414e54fa115fe31744919d6bf3a5`

### English

A revised workflow improves correctness but doubles cost and exceeds the task's latency limit. How should it be evaluated?

1. Successful because correctness is the only possible criterion

   The task explicitly includes operational limits.

2. Against correctness and the stated operational constraints together **[CORRECT]**

   Quality gains do not erase required cost or latency constraints.

3. Successful if the final answer is shorter

   Response length does not establish compliance.

4. Inconclusive because cost cannot be measured

   Usage and execution signals can support cost evaluation.

**Concept:** Quality-cost-latency trade-offs

**Authored coaching hints:**

- What constraints were part of success before tuning?
- Does improving one dimension excuse violating another?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo revisado mejora la corrección, pero duplica el costo y excede el límite de latencia de la tarea. ¿Cómo debe evaluarse?

1. Éxito porque la corrección es el único criterio posible

   La tarea incluye explícitamente límites operativos.

2. Contra la corrección y las limitaciones operativas declaradas en conjunto **[CORRECT]**

   Las ganancias de calidad no eliminan las restricciones de costes o latencia requeridas.

3. Éxito si la respuesta final es más corta

   La duración de la respuesta no establece el cumplimiento.

4. No concluye porque el coste no puede medirse

   Las señales de uso y ejecución pueden apoyar la evaluación de costes.

**Concept:** Compromiso entre calidad y costes y latencia

**Authored coaching hints:**

- ¿Qué limitaciones formaban parte del éxito antes de sintonizar?
- ¿La mejora de una dimensión es una excusa para violar otra?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho revisto melhora a correção, mas duplica o custo e excede o limite de latência da tarefa. Como deve ser avaliada?

1. É bem-sucedido porque a correção é o único critério possível

   A tarefa inclui explicitamente limites operacionais.

2. Contra a correção e as limitações operacionais declaradas juntas **[CORRECT]**

   Os ganhos de qualidade não suprimem as restrições de custo ou de latência necessárias.

3. É bem-sucedido se a resposta final for mais curta

   O comprimento da resposta não estabelece a conformidade.

4. Não conclusivos porque o custo não pode ser medido

   Os sinais de utilização e execução podem apoiar a avaliação dos custos.

**Concept:** Compromissos de qualidade-custo-latencia

**Authored coaching hints:**

- Que restrições faziam parte do sucesso antes da ajuste?
- Melhorar uma dimensão justifica violar outra?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-135:13b043fe736e791cc66514315d41c3851e709937a12292607bbbc1ed7fe058f5 -->
## Question 135: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-135`

**Content revision:** `13b043fe736e791cc66514315d41c3851e709937a12292607bbbc1ed7fe058f5`

### English

A failure investigation has a final error message but no plan, tool arguments, or revision. What should be improved for future analysis?

1. Collect only more final error messages

   The final symptom alone rarely explains the causal path.

2. Remove timestamps to simplify logs

   Timestamps help reconstruct order.

3. Capture correlated plans, sanitized tool events, revisions, and outcomes **[CORRECT]**

   Correlated evidence distinguishes reasoning, tool, and environment failures.

4. Record secrets to reproduce authentication exactly

   Secrets must not be collected as diagnostic data.

**Concept:** Diagnostic observability

**Authored coaching hints:**

- Can an investigator reconstruct the sequence before the error?
- Which evidence distinguishes plausible causes without exposing credentials?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una investigación de falla tiene un mensaje de error final, pero no hay un plan, argumentos de herramientas o revisión. ¿Qué debería mejorarse para el análisis futuro?

1. Recoger sólo más mensajes de error finales

   El síntoma final por sí solo rara vez explica el camino causal.

2. Eliminar sellos de tiempo para simplificar los registros

   Los sellos de tiempo ayudan a reconstruir el orden.

3. Registrar planes correlacionados, eventos de herramientas sin datos sensibles, revisiones y resultados **[CORRECT]**

   La evidencia correlacionada distingue entre el razonamiento, las herramientas y los fracasos ambientales.

4. Registrar secrets para reproducir la autenticación exactamente

   Los secretos no deben ser recogidos como datos de diagnóstico.

**Concept:** Observabilidad diagnóstica

**Authored coaching hints:**

- ¿Puede un investigador reconstruir la secuencia antes del error?
- ¿Qué evidencia distingue causas plausibles sin exponer las credenciales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma investigação de falha tem uma mensagem de erro final, mas nenhum plano, argumentos de ferramentas ou revisão. O que deve ser melhorado para análise futura?

1. Recolha apenas mais mensagens de erro finais

   Só o último sintoma raramente explica o caminho causal.

2. Remover timestamps para simplificar os registros

   Os timestamps ajudam a reconstruir a ordem.

3. Registrar planos correlacionados, eventos de ferramentas sem dados sensíveis, revisões e resultados **[CORRECT]**

   Evidências correlacionadas distinguem o raciocínio, ferramentas e falhas ambientais.

4. Gravar secrets para reproduzir a autenticação exatamente

   Os segredos não devem ser recolhidos como dados diagnósticos.

**Concept:** Observabilidade diagnóstica

**Authored coaching hints:**

- Um investigador pode reconstruir a sequência antes do erro?
- Que evidência distingue causas plausíveis sem revelar credenciais?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-136:e15da104d9c6fa1c2a15df97b04001347cac114f640d0d6ad8aade5da3e49035 -->
## Question 136: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-136`

**Content revision:** `e15da104d9c6fa1c2a15df97b04001347cac114f640d0d6ad8aade5da3e49035`

### English

An agent fixes a failing check by weakening its assertions, without changing the faulty implementation. What should evaluation conclude?

1. The green check proves the defect is fixed

   A weaker check may hide the original defect.

2. Reducing assertions is always an acceptable optimization

   Assertion changes need justification against intended behavior.

3. The agent improved reliability because failures decreased

   Fewer detected failures can mean less detection.

4. The signal was weakened; verify behavior against independent acceptance criteria **[CORRECT]**

   Evaluation must protect the oracle, not merely optimize its reported status.

**Concept:** Preventing metric gaming

**Authored coaching hints:**

- Did behavior improve or did detection become weaker?
- What evidence exists outside the modified check?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente corrige una verificación defectuosa debilitando sus afirmaciones, sin cambiar la implementación defectuosa. ¿Qué debe concluir la evaluación?

1. El cheque verde demuestra que el defecto está arreglado

   Un cheque más débil puede ocultar el defecto original.

2. Reducir las afirmaciones es siempre una optimización aceptable

   Los cambios de afirmación necesitan justificación contra el comportamiento previsto.

3. El agente mejoró la fiabilidad porque las fallas disminuyeron

   Menos fallas detectadas pueden significar menos detección.

4. La señal se debilitó; verificar el comportamiento con criterios de aceptación independientes **[CORRECT]**

   La evaluación debe proteger al oráculo, no sólo optimizar su estado informado.

**Concept:** Prevención de juegos métricos

**Authored coaching hints:**

- ¿El comportamiento mejoró o la detección se debilitó?
- ¿Qué pruebas existen fuera del cheque modificado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente faz uma verificação passar enfraquecendo suas asserções, sem corrigir a implementação defeituosa. O que a avaliação deve concluir?

1. O cheque verde prova que o defeito está corrigido.

   Um cheque mais fraco pode esconder o defeito original.

2. Reduzir as afirmações é sempre uma otimização aceitável

   As alterações de afirmação necessitam de justificação contra o comportamento pretendido.

3. O agente melhorou a confiabilidade porque as falhas diminuíram

   Menos falhas detectadas podem significar menos detecção.

4. O sinal foi enfraquecido; verifique o comportamento contra critérios de aceitação independentes **[CORRECT]**

   A avaliação deve proteger o oráculo, não apenas otimizar o seu estado relatado.

**Concept:** Prevenção de jogos métricos

**Authored coaching hints:**

- O comportamento melhorou ou a detecção tornou-se mais fraca?
- Que evidências existem fora do cheque modificado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-137:19a83d4e9b8191e3f674f46749a1bdd5d6dca7d2e3746c25988946d4ab56e5d5 -->
## Question 137: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-137`

**Content revision:** `19a83d4e9b8191e3f674f46749a1bdd5d6dca7d2e3746c25988946d4ab56e5d5`

### English

A proposed instruction change targets one production failure. What should accompany its regression test?

1. Tests of representative existing behavior to detect collateral regressions **[CORRECT]**

   A targeted fix can still degrade other behavior.

2. Deletion of all unrelated evaluation cases

   Deleting coverage hides regressions.

3. Immediate unrestricted rollout

   Rollout should follow evidence rather than replace it.

4. A promise that the change is narrowly worded

   Wording alone does not establish behavioral isolation.

**Concept:** Regression evaluation after tuning

**Authored coaching hints:**

- Could a more specific instruction alter other decisions?
- What evidence shows that existing capabilities remain intact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un cambio de instrucción propuesto tiene como objetivo un fallo de producción. ¿Qué debería acompañar su prueba de regresión?

1. Pruebas de comportamiento existente representativo para detectar regresiones colaterales **[CORRECT]**

   Una solución dirigida aún puede degradar otro comportamiento.

2. Eliminación de todos los casos de evaluación no relacionados

   Eliminar la cobertura oculta regresiones.

3. Despliegue inmediato sin restricciones

   El despliegue debe seguir la evidencia en lugar de reemplazarla.

4. Una promesa de que el cambio está estrictamente redactado

   La palabra sola no establece el aislamiento conductual.

**Concept:** Evaluación de la regresión después del ajuste

**Authored coaching hints:**

- ¿Podría una instrucción más específica alterar otras decisiones?
- ¿Qué evidencia muestra que las capacidades existentes siguen intactas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma alteração de instrução proposta visa uma falha de produção. O que deve acompanhar o teste de regressão?

1. Testes de comportamento existente representativo para detectar regressões colaterais **[CORRECT]**

   Uma solução direcionada pode ainda degradar outro comportamento.

2. Eliminação de todos os casos de avaliação não relacionados

   A exclusão da cobertura esconde regressões.

3. Implementação imediata sem restrições

   A implantação deve seguir a evidência em vez de substituí-la.

4. Uma promessa de que a mudança é restrita

   A palavra sozinha não estabelece o isolamento comportamental.

**Concept:** Avaliação de regressão após ajuste

**Authored coaching hints:**

- Uma instrução mais específica poderia alterar outras decisões?
- Que evidência mostra que as capacidades existentes permanecem intactas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-138:587716033909d33599db80bd62926be012410497c979ba4a49c7ac90202805eb -->
## Question 138: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-138`

**Content revision:** `587716033909d33599db80bd62926be012410497c979ba4a49c7ac90202805eb`

### English

An agent fails only when retrieved documents exceed the context budget and the acceptance criteria are dropped. What tuning best addresses the cause?

1. Increase mutation permissions

   Permissions do not restore lost requirements.

2. Prioritize task constraints and retrieve focused evidence **[CORRECT]**

   Context prioritization preserves essential intent while reducing noise.

3. Retry the same oversized prompt indefinitely

   Repeated overflow preserves the failure mechanism.

4. Remove acceptance criteria to save space

   Removing criteria institutionalizes the error.

**Concept:** Context-budget tuning

**Authored coaching hints:**

- Which information must remain available for every decision?
- Can retrieval be narrowed without losing relevant evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente sólo falla cuando los documentos recuperados exceden el presupuesto contextual y se eliminan los criterios de aceptación. ¿Qué ajuste aborda mejor la causa?

1. Aumentar los permisos de mutación

   Los permisos no restauran los requisitos perdidos.

2. Priorizar las restricciones de tareas y obtener evidencia enfocada **[CORRECT]**

   La prioridad del contexto preserva la intención esencial al tiempo que reduce el ruido.

3. Intentar de nuevo el mismo pedido de tamaño excesivo indefinidamente

   El desbordamiento repetido preserva el mecanismo de falla.

4. Eliminar los criterios de aceptación para ahorrar espacio

   Eliminar los criterios institucionaliza el error.

**Concept:** ajuste de contexto y presupuesto

**Authored coaching hints:**

- ¿Qué información debe permanecer disponible para cada decisión?
- ¿Se puede restringir la extracción sin perder pruebas pertinentes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente só falha quando os documentos recuperados ultrapassam o orçamento contextual e os critérios de aceitação são retirados. Que ajuste melhor aborda a causa?

1. Aumentar as permissões de mutação

   As autorizações não recuperam os requisitos perdidos.

2. Priorizar as restrições de tarefas e obter evidências focadas **[CORRECT]**

   A prioridade do contexto preserva a intenção essencial, reduzindo ao mesmo tempo o ruído.

3. Tente novamente o mesmo pedido de grande dimensão indefinidamente

   O desbordamento repetido preserva o mecanismo de falha.

4. Remover os critérios de aceitação para economizar espaço

   A eliminação dos critérios institucionaliza o erro.

**Concept:** Contexto-orçamento de orçamento

**Authored coaching hints:**

- Que informações devem permanecer disponíveis para cada decisão?
- Pode a recuperação ser reduzida sem perder provas relevantes?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-139:052f396e4147a58dfa44659b6e01c7a09940329164ac719a4972dc2c79845c80 -->
## Question 139: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-139`

**Content revision:** `052f396e4147a58dfa44659b6e01c7a09940329164ac719a4972dc2c79845c80`

### English

An evaluation passes once but fails on repeated equivalent runs. What should the team measure before declaring reliability?

1. Only the best run

   Best-case selection hides instability.

2. Only the shortest response

   Brevity is not reliability.

3. Outcome variability and failure frequency across representative repetitions **[CORRECT]**

   Repeated outcomes reveal nondeterministic failure risk.

4. Whether the agent can explain its first success

   Explaining one success does not quantify repeatability.

**Concept:** Evaluation repeatability

**Authored coaching hints:**

- What would a user experience over many executions?
- Does one successful sample characterize the whole distribution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una evaluación pasa una vez, pero falla en repetidas ejecuciones equivalentes. ¿Qué debe medir el equipo antes de declarar confiabilidad?

1. Sólo la mejor ejecución.

   La selección del mejor caso oculta la inestabilidad.

2. Sólo la respuesta más corta

   La brevedad no es fiabilidad.

3. Variabilidad del resultado y frecuencia de fallas en repeticiones representativas **[CORRECT]**

   Los resultados repetidos revelan un riesgo de fracaso no determinista.

4. Si el agente puede explicar su primer éxito

   Explicar un éxito no cuantifica la repetibilidad.

**Concept:** Repetibilidad de la evaluación

**Authored coaching hints:**

- ¿Qué experimentaría un usuario con muchas ejecuciones?
- ¿Una muestra exitosa caracteriza toda la distribución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma avaliação passa uma vez, mas falha em repetidas execuções equivalentes. O que deve medir a equipe antes de declarar confiabilidade?

1. Só a melhor execução.

   A selecção do melhor caso esconde a instabilidade.

2. Só a resposta mais curta

   A brevidade não é confiabilidade.

3. Variabilidade dos resultados e frequência de falhas em repetições representativas **[CORRECT]**

   Os resultados repetidos revelam um risco de falha não determinista.

4. Se o agente pode explicar o seu primeiro sucesso

   Explicar um sucesso não quantifica a repetibilidade.

**Concept:** Repetibilidade da avaliação

**Authored coaching hints:**

- O que experimentaria um usuário com muitas execuções?
- Uma amostra bem-sucedida caracteriza toda a distribuição?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-140:88b5f7c191d4ce3248dc7ff113812bfd37cfe9fae72320be6ada3f314d1a2666 -->
## Question 140: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-140`

**Content revision:** `88b5f7c191d4ce3248dc7ff113812bfd37cfe9fae72320be6ada3f314d1a2666`

### English

An agent is evaluated on a repository it was tuned against extensively. Scores are excellent. What additional evaluation is needed?

1. More repetitions of only memorized examples

   Memorized cases cannot establish generalization.

2. A count of instruction-file words

   Instruction length is not external validity.

3. The same tasks with renamed variables only

   Cosmetic changes may retain the same learned solution.

4. Representative unseen tasks or repositories within the intended scope **[CORRECT]**

   Held-out representative work tests transfer beyond the tuning set.

**Concept:** Generalization and overfitting

**Authored coaching hints:**

- Could the system be exploiting familiarity?
- Where should evidence come from to test transfer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente es evaluado en un repositorio contra el que se sintonizó ampliamente. Las calificaciones son excelentes. ¿Qué evaluación adicional se necesita?

1. Más repeticiones de ejemplos memorizados

   Los casos memorizados no pueden establecer una generalización.

2. Un recuento de palabras del archivo de instrucciones

   La duración de la instrucción no es de validez externa.

3. Las mismas tareas con variables renombradas solamente

   Los cambios cosméticos pueden mantener la misma solución aprendida.

4. tareas o repositorios no vistos representativos dentro del alcance previsto **[CORRECT]**

   Las pruebas de trabajo representativas realizadas se transfieren más allá del conjunto de ajuste.

**Concept:** Generalización y sobreajuste

**Authored coaching hints:**

- ¿Podría el sistema estar explotando la familiaridad?
- ¿De dónde debería provenir la evidencia para la transferencia de pruebas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente é avaliado num repositório contra o qual foi sintonizado extensivamente. As notas são excelentes. Que avaliação adicional é necessária?

1. Mais repetições de exemplos apenas memorizados

   Os casos memorizados não podem estabelecer uma generalização.

2. Uma contagem de palavras do arquivo de instruções

   O comprimento da instrução não é de validade externa.

3. As mesmas tarefas com variáveis apenas renomeadas

   As alterações cosméticas podem manter a mesma solução aprendida.

4. Tarefas ou repositórios representativos, ainda não vistos, dentro do escopo previsto **[CORRECT]**

   Os testes de trabalho representativos realizados são transferidos para além do conjunto de ajuste.

**Concept:** Generalização e sobreadaptação

**Authored coaching hints:**

- O sistema pode estar a explorar a familiaridade?
- De onde devem vir as provas para transferir os testes?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-141:de8099669ddd8a0f9aeddc23446ce3af1a863d566d3064df4c86aee2f378ee18 -->
## Question 141: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-141`

**Content revision:** `de8099669ddd8a0f9aeddc23446ce3af1a863d566d3064df4c86aee2f378ee18`

### English

A run first retrieves the wrong configuration, then calls the right tool with that value, then fails. How should analysis proceed?

1. Trace the earliest causal divergence, not only the final error **[CORRECT]**

   The incorrect upstream input may explain the downstream symptom.

2. Classify every failure as a tool outage

   The evidence does not establish an outage.

3. Change the last tool call without inspecting inputs

   Local changes may leave the causal fault intact.

4. Ignore retrieval because the call schema was valid

   Schema validity does not establish semantic correctness.

**Concept:** Causal failure tracing

**Authored coaching hints:**

- When did execution first diverge from the intended task?
- Was the final failure a cause or a consequence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una ejecución primero recupera la configuración incorrecta, luego llama a la herramienta correcta con ese valor, luego falla. ¿Cómo debe proceder el análisis?

1. Rastrear la divergencia causal más temprana, no sólo el error final **[CORRECT]**

   La incorrecta entrada ascendente puede explicar el síntoma descendente.

2. Clasificar cada falla como una interrupción de la herramienta

   Las pruebas no establecen una interrupción.

3. Cambiar la última llamada de la herramienta sin inspeccionar las entradas

   Los cambios locales pueden dejar intacta la falla causal.

4. Ignorar la recuperación porque el esquema de llamada era válido

   La validez del esquema no establece la corrección semántica.

**Concept:** rastreo de fallas causales

**Authored coaching hints:**

- ¿Cuándo la ejecución se desvió por primera vez de la tarea prevista?
- ¿Fue el fracaso final una causa o una consecuencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma execução primeiro recupera a configuração errada, depois chama a ferramenta certa com esse valor, e depois falha. Como deve proceder a análise?

1. Rastrear a mais antiga divergência causal, não apenas o erro final **[CORRECT]**

   A entrada anterior incorreta pode explicar o sintoma posterior.

2. Classificar cada falha como uma interrupção de ferramenta

   As provas não estabelecem uma interrupção.

3. Alterar a última chamada de ferramenta sem inspecionar as entradas

   As alterações locais podem deixar intacta a falha causal.

4. Ignorar a recuperação porque o esquema de chamada era válido

   A validade do esquema não estabelece a correção semântica.

**Concept:** rastreamento de falhas causais

**Authored coaching hints:**

- Quando a execução divergiu pela primeira vez da tarefa pretendida?
- O fracasso final foi uma causa ou uma consequência?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-142:07f224e42e5250f867990090529487fc6fd0eb67764a1420600a4e9c5214d516 -->
## Question 142: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-142`

**Content revision:** `07f224e42e5250f867990090529487fc6fd0eb67764a1420600a4e9c5214d516`

### English

A team changes prompts, tools, memory policy, and model simultaneously. A score improves. What limitation should be reported?

1. Every individual change is proven beneficial

   Individual contributions are confounded.

2. The combined result does not isolate which change caused improvement **[CORRECT]**

   Multiple simultaneous changes limit causal attribution.

3. No evaluation can ever be useful

   The combined result can still be informative.

4. The model change must be the cause

   The evidence does not isolate the model.

**Concept:** Tuning experiment attribution

**Authored coaching hints:**

- Which variables changed together?
- Can the result identify one responsible mechanism?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo cambia instrucciones, herramientas, política de memoria y modelo simultáneamente. La puntuación mejora. ¿Qué limitación debe reportarse?

1. Cada cambio individual resulta beneficioso

   Las contribuciones individuales son confusas.

2. El resultado combinado no aisla el cambio que causó la mejora **[CORRECT]**

   Muchos cambios simultáneos limitan la atribución causal.

3. Ninguna evaluación puede ser útil.

   El resultado combinado todavía puede ser informativo.

4. El cambio de modelo debe ser la causa

   La evidencia no aisla al modelo.

**Concept:** atribución de los experimentos de ajuste

**Authored coaching hints:**

- ¿Qué variables cambiaron juntas?
- ¿Puede el resultado identificar un mecanismo responsable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe muda instruções, ferramentas, política de memória e modelo simultaneamente. A pontuação melhora. Que limitação deve ser relatada?

1. Cada mudança individual é benéfica

   As contribuições individuais são confusas.

2. O resultado combinado não isola qual alteração causou melhoria **[CORRECT]**

   Múltiplas alterações simultâneas limitam a atribuição causal.

3. Nenhuma avaliação pode ser útil.

   O resultado combinado pode ainda ser informativo.

4. A mudança de modelo deve ser a causa

   A evidência não isola o modelo.

**Concept:** atribuição de experimento de ajuste

**Authored coaching hints:**

- Que variáveis mudaram juntas?
- O resultado pode identificar um mecanismo responsável?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-143:6c9c863b738a17f19de2751d0b163383bdf47059da72b1327ed63e3463e5e32f -->
## Question 143: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-143`

**Content revision:** `6c9c863b738a17f19de2751d0b163383bdf47059da72b1327ed63e3463e5e32f`

### English

An agent's aggregate success rate is high, but all authorization-sensitive tasks fail. What reporting change is most useful?

1. Hide the small category to simplify reporting

   Small high-risk categories can be operationally critical.

2. Report only the overall mean

   An overall mean masks concentrated weaknesses.

3. Segment results by task type and risk **[CORRECT]**

   Segmentation exposes failures relevant to deployment decisions.

4. Replace success rate with total output tokens

   Token volume does not measure authorized success.

**Concept:** Risk-stratified evaluation

**Authored coaching hints:**

- Can a strong average hide a dangerous subgroup?
- Which failures matter most for the intended deployment?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La tasa de éxito agregada de un agente es alta, pero todas las tareas sensibles a la autorización fracasan. ¿Cuál es el cambio de información más útil?

1. Ocultar la pequeña categoría para simplificar la presentación de informes

   Las pequeñas categorías de alto riesgo pueden ser operacionalmente críticas.

2. Reporte sólo el promedio general

   Una máscara general media concentra las debilidades.

3. Resultados de segmentos por tipo de tarea y riesgo **[CORRECT]**

   La segmentación expone los fallos relevantes para las decisiones de despliegue.

4. Reemplazar la tasa de éxito con tokens de salida totales

   El volumen de tokens no mide el éxito autorizado.

**Concept:** Evaluación estratificada por riesgo

**Authored coaching hints:**

- ¿Puede un promedio fuerte ocultar un subgrupo peligroso?
- ¿Qué fallas son más importantes para el despliegue previsto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A taxa de sucesso agregada de um agente é alta, mas todas as tarefas sensíveis à autorização falham. Que mudança de relatório é mais útil?

1. Esconde a pequena categoria para simplificar a comunicação

   As pequenas categorias de alto risco podem ser operacionalmente críticas.

2. Relatar apenas a média global

   Uma média geral de máscaras concentra fraquezas.

3. Resultados do segmento por tipo de tarefa e risco **[CORRECT]**

   A segmentação expõe falhas relevantes para as decisões de implantação.

4. Substitua a taxa de sucesso por tokens de saída totais

   O volume do token não mede o sucesso autorizado.

**Concept:** Avaliação estratificada de risco

**Authored coaching hints:**

- Uma média forte pode esconder um subgrupo perigoso?
- Quais falhas são mais importantes para a implantação prevista?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-144:f162396636fb5b18ce4ea7f7cf5356f36c9c0f7e26bc19fd8a68b27a1acaf2e5 -->
## Question 144: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-144`

**Content revision:** `f162396636fb5b18ce4ea7f7cf5356f36c9c0f7e26bc19fd8a68b27a1acaf2e5`

### English

A timeout is caused by a slow external service, not slow reasoning. Which tuning is most targeted?

1. Rewrite all business requirements

   Requirements do not repair the observed service latency.

2. Increase the number of planning agents

   More planning can add overhead without addressing the bottleneck.

3. Remove all observability

   Removing evidence impedes diagnosis.

4. Tune timeout and bounded retry behavior using service evidence **[CORRECT]**

   Execution-policy tuning addresses the measured external delay.

**Concept:** Environment-directed tuning

**Authored coaching hints:**

- Where is elapsed time actually spent?
- Which setting controls recovery at that layer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un tiempo fuera es causado por un servicio externo lento, no un razonamiento lento. ¿Cuál ajuste es la más dirigida?

1. Reescribir todos los requisitos del negocio

   Los requisitos no reparan la latencia del servicio observada.

2. Aumentar el número de agentes de planificación

   Más planificación puede añadir gastos generales sin abordar el cuello de botella.

3. Eliminar toda observabilidad

   La eliminación de pruebas impide el diagnóstico.

4. Ajustar los tiempos de espera y los reintentos limitados según la evidencia del servicio **[CORRECT]**

   El ajuste de la política de ejecución aborda el retraso externo medido.

**Concept:** ajuste orientada al entorno

**Authored coaching hints:**

- ¿Dónde se pasa el tiempo transcurrido?
- ¿Qué configuración controla la recuperación en esa capa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pausa de tempo é causada por um serviço externo lento, não por um raciocínio lento. Qual ajuste é mais alvo?

1. Reescrever todos os requisitos da empresa

   Os requisitos não reparam a latência do serviço observada.

2. Aumentar o número de agentes de planeamento

   Mais planejamento pode adicionar custos gerais sem resolver o gargalo de engarrafamento.

3. Remover toda observabilidade

   A remoção de provas impede o diagnóstico.

4. Ajustar os tempos limite e as tentativas limitadas conforme as evidências do serviço **[CORRECT]**

   A ajuste das políticas de execução aborda o atraso externo medido.

**Concept:** ajuste orientada para o ambiente

**Authored coaching hints:**

- Onde é realmente gasto o tempo passado?
- Que configuração controla a recuperação naquela camada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-145:4aa8d122d0f61795b32a20fb585b7785e1602a3f042bc831d5ffd0bd83d2e3c5 -->
## Question 145: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-145`

**Content revision:** `4aa8d122d0f61795b32a20fb585b7785e1602a3f042bc831d5ffd0bd83d2e3c5`

### English

An agent's final response claims it ran a scanner, but no execution event or report exists. What should the evaluator conclude?

1. The claim is unsupported and required evidence remains missing **[CORRECT]**

   Completion claims require evidence tied to execution.

2. The scanner must have run invisibly

   Invisible execution cannot be presumed.

3. Fluent wording proves completion

   Fluency is not tool provenance.

4. The claim substitutes for an artifact

   A statement does not replace the required report.

**Concept:** Verifying execution claims

**Authored coaching hints:**

- What independently demonstrates that the action occurred?
- Could the same response be written without running the tool?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La respuesta final de un agente afirma que ejecutó un escáner, pero no existe ningún evento de ejecución o informe. ¿Qué debe concluir el evaluador?

1. La alegación no está respaldada y faltan pruebas requeridas. **[CORRECT]**

   Las reclamaciones de finalización requieren pruebas vinculadas a la ejecución.

2. El escáner debe haber funcionado de forma invisible.

   No se puede suponer una ejecución invisible.

3. La redacción fluida demuestra la realización

   La fluidez no es el origen de la herramienta.

4. El reclamo sustituye un artefacto

   Una declaración no sustituye al informe requerido.

**Concept:** Verificación de las reclamaciones de ejecución

**Authored coaching hints:**

- ¿Qué demuestra de forma independiente que la acción ocurrió?
- ¿Se podría escribir la misma respuesta sin ejecutar la herramienta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A resposta final de um agente afirma ter executado um scanner, mas nenhum evento ou relatório de execução existe. O que deve concluir o avaliador?

1. A alegação não é fundamentada e faltam provas necessárias **[CORRECT]**

   As alegações de conclusão exigem provas ligadas à execução.

2. O scanner deve ter funcionado de forma invisível.

   Não se pode presumir uma execução invisível.

3. Palavras fluentes provam a conclusão

   A fluência não é a origem da ferramenta.

4. A alegação substitui um artefato

   Uma declaração não substitui o relatório requerido.

**Concept:** Verificação das alegações de execução

**Authored coaching hints:**

- O que demonstra independentemente que a ação ocorreu?
- Pode-se escrever a mesma resposta sem executar a ferramenta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-146:c0fa7e35aa758e8773e830718088661d387c353fa8d090de12f8e21f0296af4d -->
## Question 146: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-146`

**Content revision:** `c0fa7e35aa758e8773e830718088661d387c353fa8d090de12f8e21f0296af4d`

### English

A plan follows the issue but violates a repository's explicit no-new-dependencies constraint. How should it score?

1. Fully successful if the feature works

   Success includes applicable operational constraints.

2. A constraint failure even if the functional result is correct **[CORRECT]**

   Correct functionality does not erase a violated task boundary.

3. Successful if the dependency is popular

   Popularity does not override policy.

4. Successful if the agent apologizes afterward

   An apology does not establish compliance.

**Concept:** Constraint-aware evaluation

**Authored coaching hints:**

- Which requirements were conjunctive rather than optional?
- Can functional correctness coexist with unacceptable execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un plan sigue el problema pero viola la restricción explícita de no nuevas dependencias de un repositorio. ¿Cómo debería marcar?

1. Completamente exitoso si la función funciona

   El éxito incluye las restricciones operativas aplicables.

2. Una falla de restricción incluso si el resultado funcional es correcto **[CORRECT]**

   La funcionalidad correcta no borra un límite de tarea violado.

3. Éxito si la dependencia es popular

   La popularidad no prevalece sobre la política.

4. Es un éxito si el agente se disculpa después

   Una disculpa no establece el cumplimiento.

**Concept:** Evaluación consciente de las limitaciones

**Authored coaching hints:**

- ¿Qué requisitos eran conjuntos en lugar de opcionales?
- ¿Puede la corrección funcional coexistir con una ejecución inaceptable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um plano segue a questão, mas viola a restrição explícita de não novas dependências de um repositório. Como é que deve marcar?

1. Completamente bem sucedido se o recurso funcionar

   O sucesso inclui as restrições operacionais aplicáveis.

2. Uma falha de restrição mesmo que o resultado funcional seja correto **[CORRECT]**

   A funcionalidade correta não elimina um limite de tarefa violado.

3. É bem-sucedido se a dependência for popular

   A popularidade não supera a política.

4. É bem-sucedido se o agente pedir desculpas depois.

   Um pedido de desculpas não estabelece o cumprimento.

**Concept:** Avaliação consciente de restrições

**Authored coaching hints:**

- Quais requisitos eram conjuntos em vez de opcionais?
- A correção funcional pode coexistir com a execução inaceitável?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-147:4673e2d0cf015b4f4a935d1c8918a87365ce025690e331edb4efdb6034dfc18b -->
## Question 147: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-147`

**Content revision:** `4673e2d0cf015b4f4a935d1c8918a87365ce025690e331edb4efdb6034dfc18b`

### English

A team wants to detect whether an agent stops when a tool result tries to override instructions. Which test case best fits?

1. A normal successful build only

   A happy path does not exercise the trust boundary.

2. A spelling test on the final summary

   Spelling does not measure instruction resistance.

3. A controlled adversarial tool response with explicit expected boundary behavior **[CORRECT]**

   A controlled case directly tests the required safety behavior.

4. A production attack without owner approval

   Unapproved production attacks are not an appropriate evaluation method.

**Concept:** Adversarial boundary evaluation

**Authored coaching hints:**

- Which failure mode must the case exercise?
- How can it be tested without exposing real systems?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere detectar si un agente se detiene cuando un resultado de la herramienta intenta anular las instrucciones. ¿Cuál es el caso de prueba más adecuado?

1. Sólo una construcción normal y exitosa

   Un camino feliz no ejerce el límite de la confianza.

2. Una prueba de ortografía en el resumen final

   La ortografía no mide la resistencia a la instrucción.

3. Una respuesta controlada de herramientas adversarias con comportamiento límite esperado explícito **[CORRECT]**

   Un caso controlado prueba directamente el comportamiento de seguridad requerido.

4. Un ataque de producción sin la aprobación del propietario

   Los ataques de producción no aprobados no son un método de evaluación adecuado.

**Concept:** Evaluación de los límites adversarios

**Authored coaching hints:**

- ¿Qué modo de falla debe ejercer el caso?
- ¿Cómo puede probarse sin exponer sistemas reales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer detectar se um agente para quando um resultado da ferramenta tenta anular instruções. Qual é o caso de teste mais adequado?

1. Uma construção bem-sucedida normal apenas

   Um caminho feliz não exerce o limite da confiança.

2. Um teste ortográfico no resumo final

   A ortografia não mede a resistência à instrução.

3. Uma resposta controlada de ferramentas adversárias com comportamento de fronteira esperado explícito **[CORRECT]**

   Um caso controlado testa diretamente o comportamento de segurança exigido.

4. Um ataque de produção sem a aprovação do proprietário

   Os ataques de produção não aprovados não constituem um método de avaliação adequado.

**Concept:** Avaliação dos limites adversários

**Authored coaching hints:**

- Que modo de falha deve exercer o caso?
- Como pode ser testado sem expor sistemas reais?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-148:095a99d7f10dfd3039a068364e79e95b3d8433c7b19998cfcffa6f0e591979e7 -->
## Question 148: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-148`

**Content revision:** `095a99d7f10dfd3039a068364e79e95b3d8433c7b19998cfcffa6f0e591979e7`

### English

A failure dashboard groups all unsuccessful runs as 'AI error.' What improvement most helps remediation?

1. Rename the label to 'unexpected behavior'

   A new generic label does not identify causes.

2. Remove failures from reporting

   Excluding failures prevents learning.

3. Report only the number of retries

   Retry counts do not explain why failures occurred.

4. Classify causes using plans, tool traces, context, and environment evidence **[CORRECT]**

   Cause categories support targeted changes rather than undirected tuning.

**Concept:** Actionable failure taxonomy

**Authored coaching hints:**

- Would every failure be repaired by the same change?
- What evidence distinguishes categories with different remedies?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tabla de control de fallas agrupa todas las ejecuciones fallidas como 'error de IA'. ¿Qué mejora ayuda más a la reparación?

1. Renombrar la etiqueta a "comportamiento inesperado"

   Una nueva etiqueta genérica no identifica las causas.

2. Eliminar las fallas de los informes

   Excluir los fracasos impide aprender.

3. Reporte sólo el número de retas

   Los recuentos de retrasos no explican por qué ocurrieron fallas.

4. Clasificar las causas utilizando planes, huellas de herramientas, evidencia de contexto y entorno **[CORRECT]**

   Las categorías de causas apoyan cambios dirigidos en lugar de ajustes no dirigidos.

**Concept:** Taxonomía de fallas de acción

**Authored coaching hints:**

- ¿Podrían repararse todos los fallos con el mismo cambio?
- ¿Qué evidencia distingue a las categorías con diferentes remedios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um painel de controle de falhas agrupa todas as execuções fracassadas como "erro de IA". Que melhoria ajuda mais a remediação?

1. Renomear o rótulo para "comportamento inesperado"

   Um novo rótulo genérico não identifica causas.

2. Remover as falhas dos relatórios

   Excluir falhas impede a aprendizagem.

3. Relatar apenas o número de retemps

   As contagens de retrospectiva não explicam por que ocorreram falhas.

4. Classificar causas usando planos, rastros de ferramentas e evidências de contexto e do ambiente **[CORRECT]**

   As categorias de causas apoiam mudanças direcionadas em vez de ajustes não direcionados.

**Concept:** Taxonomia de falhas acionáveis

**Authored coaching hints:**

- Todas as falhas seriam reparadas pela mesma mudança?
- Que evidência distingue as categorias com diferentes remédios?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-149:99628f465b2712192f64bdaf9049f793b1f0422f78dbea05ebbb9d2b9052c1c5 -->
## Question 149: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-149`

**Content revision:** `99628f465b2712192f64bdaf9049f793b1f0422f78dbea05ebbb9d2b9052c1c5`

### English

An updated agent is faster because it skips required review handoffs. How should the team interpret the latency gain?

1. As noncompliant behavior, not an acceptable optimization **[CORRECT]**

   Performance must be measured within required governance constraints.

2. As proof the review gate was unnecessary

   Skipping a control does not establish that it lacks value.

3. As an automatic reason to expand autonomy

   Noncompliance does not justify more authority.

4. As evidence that all quality metrics improved

   Latency alone does not demonstrate quality.

**Concept:** Evaluating within governance constraints

**Authored coaching hints:**

- Were the same rules followed in both measurements?
- What did the agent omit to achieve the gain?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente actualizado es más rápido porque omite las entregas de revisión requeridas. ¿Cómo debe interpretar el equipo la ganancia de latencia?

1. Como comportamiento no conforme, no una optimización aceptable **[CORRECT]**

   El rendimiento debe medirse dentro de las limitaciones de gobernanza requeridas.

2. Como prueba la puerta de revisión era innecesaria

   El omitir un control no demuestra que carezca de valor.

3. Como una razón automática para expandir la autonomía

   El incumplimiento no justifica una mayor autoridad.

4. Como prueba de que todas las métricas de calidad mejoraron

   La latencia por sí sola no demuestra la calidad.

**Concept:** Evaluación dentro de las limitaciones de gobernanza

**Authored coaching hints:**

- ¿Se siguieron las mismas reglas en ambas mediciones?
- ¿Qué omitió el agente para obtener la ganancia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente atualizado é mais rápido porque evita as entregas de revisão necessárias. Como deve a equipe interpretar o ganho de latência?

1. Como comportamento não conforme, e não como uma otimização aceitável **[CORRECT]**

   O desempenho deve ser medido dentro das limitações de governança exigidas.

2. Como prova a porta de revisão era desnecessária

   Salto de um controle não demonstra que ele careça de valor.

3. Como uma razão automática para expandir a autonomia

   A não conformidade não justifica mais autoridade.

4. Como prova de que todas as métricas de qualidade melhoraram

   A latência por si só não demonstra qualidade.

**Concept:** Avaliação dentro das limitações da governação

**Authored coaching hints:**

- As mesmas regras foram seguidas em ambas as medições?
- O que omitiu o agente para obter o ganho?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-150:7953ff0d2898db63ae2271983916d843abf04bde4d95615feb5ce9ec1baf7dec -->
## Question 150: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-150`

**Content revision:** `7953ff0d2898db63ae2271983916d843abf04bde4d95615feb5ce9ec1baf7dec`

### English

An evaluator rates final prose as correct although the agent modified the wrong repository. What should the rubric add?

1. More emphasis on grammar

   Grammar does not validate the mutation target.

2. Execution target and authorized-scope verification **[CORRECT]**

   Task success includes acting on the correct authorized resource.

3. A minimum answer length

   Length can increase without fixing scope.

4. A reward for confident completion language

   Confidence can conceal incorrect execution.

**Concept:** Evaluating action correctness

**Authored coaching hints:**

- Is the deliverable only a message?
- Where did the actual effect occur?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un evaluador califica la prosa final como correcta aunque el agente modificó el repositorio equivocado. ¿Qué debería añadir la rúbrica?

1. Más énfasis en la gramática

   La gramática no valida el objetivo de la mutación.

2. Objetivo de ejecución y verificación del alcance autorizado **[CORRECT]**

   El éxito de la tarea incluye actuar con el recurso autorizado correcto.

3. Una duración mínima de la respuesta

   La longitud puede aumentar sin fijar el alcance.

4. Una recompensa por el lenguaje de finalización confiado

   La confianza puede ocultar una ejecución incorrecta.

**Concept:** Evaluación de la corrección de la acción

**Authored coaching hints:**

- ¿Es el entregable sólo un mensaje?
- ¿Dónde ocurrió el efecto real?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um avaliador classifica a prosa final como correta, embora o agente tenha modificado o repositório errado. O que deve acrescentar a rubrica?

1. Mais ênfase na gramática

   A gramática não valida o alvo da mutação.

2. Objetivo de execução e verificação do escopo autorizado **[CORRECT]**

   O sucesso da tarefa inclui agir com o recurso autorizado correto.

3. Duração mínima da resposta

   O comprimento pode aumentar sem fixar o escopo.

4. Uma recompensa pela linguagem de conclusão confiante

   A confiança pode esconder a execução incorreta.

**Concept:** Avaliação da correção da ação

**Authored coaching hints:**

- O que pode ser entregue é apenas uma mensagem?
- Onde ocorreu o efeito real?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/>

<!-- certification-coach-question:agentic-151:9ed8ba6d3f6edd79050651c8fd34aa4d290293dd7820006b83af210960454b3f -->
## Question 151: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-151`

**Content revision:** `9ed8ba6d3f6edd79050651c8fd34aa4d290293dd7820006b83af210960454b3f`

### English

A tuning change reduces unnecessary memory retrieval but accidentally removes approved constraints. What should the team do?

1. Accept because fewer tokens were used

   Token savings do not justify losing required context.

2. Remove every memory source

   Blanket removal sacrifices useful continuity.

3. Preserve essential constraints and reevaluate the revised retrieval policy **[CORRECT]**

   Selective retrieval must preserve decision-critical information.

4. Increase tool permissions to compensate

   Permissions cannot replace missing constraints.

**Concept:** Memory tuning evaluation

**Authored coaching hints:**

- Which retrieved content was noise, and which was mandatory?
- What regression case would reveal the loss?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un cambio de ajuste reduce la recuperación innecesaria de memoria pero elimina accidentalmente las restricciones aprobadas. ¿Qué debería hacer el equipo?

1. Aceptar porque se usaron menos tokens

   El ahorro de tokens no justifica la pérdida del contexto requerido.

2. Eliminar todas las fuentes de memoria

   La eliminación de la manta sacrifica la continuidad útil.

3. Preservar las restricciones esenciales y reevaluar la política revisada de recuperación de información **[CORRECT]**

   La extracción selectiva debe conservar la información crítica a la decisión.

4. Aumentar los permisos de las herramientas para compensar

   Los permisos no pueden reemplazar las restricciones que faltan.

**Concept:** Evaluación del ajuste de la memoria

**Authored coaching hints:**

- ¿Cuál de los contenidos recuperados era ruido y cuál era obligatorio?
- ¿Qué caso de regresión revelaría la pérdida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma alteração de ajuste reduz a recuperação desnecessária de memória, mas elimina acidentalmente as restrições aprovadas. O que deve fazer a equipe?

1. Aceitar porque menos tokens foram usados

   A poupança de tokens não justifica a perda do contexto necessário.

2. Remover todas as fontes de memória

   A remoção do cobertor sacrifica a continuidade útil.

3. Preservar as restrições essenciais e reavaliar a política revisada de recuperação de informações **[CORRECT]**

   A recuperação seletiva deve preservar informações críticas para a decisão.

4. Aumentar as permissões das ferramentas para compensar

   As autorizações não podem substituir as restrições que faltam.

**Concept:** Avaliação de ajuste da memória

**Authored coaching hints:**

- Qual o conteúdo recuperado era ruído e qual era obrigatório?
- Que caso de regressão revelaria a perda?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-152:a87760cf30fabe719ac102989f9f54815bf3ca17995aa52e0ea540b616b24579 -->
## Question 152: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-152`

**Content revision:** `a87760cf30fabe719ac102989f9f54815bf3ca17995aa52e0ea540b616b24579`

### English

An agent's failure is reproduced only with one runner image version. What should the investigation record?

1. Only the latest successful output

   A success output does not preserve the failing conditions.

2. Only the agent's personality prompt

   The prompt alone omits the environment dependency.

3. Only the issue title

   An issue title is insufficient reproduction context.

4. The runner image, dependencies, revision, inputs, and failing evidence **[CORRECT]**

   Environment and execution provenance enable targeted reproduction.

**Concept:** Reproducible error analysis

**Authored coaching hints:**

- Which conditions distinguish failing and passing runs?
- What would another engineer need to reproduce the result?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El fallo de un agente se reproduce sólo con una versión de imagen runner. ¿Qué debería registrar la investigación?

1. Sólo la última producción exitosa

   Una salida exitosa no preserva las condiciones fallidas.

2. Sólo la personalidad del agente.

   Sólo el prompt omite la dependencia del entorno.

3. Sólo el título del número

   Un título de la cuestión es un contexto de reproducción insuficiente.

4. La imagen runner, dependencias, revisión, entradas y pruebas fallidas **[CORRECT]**

   El entorno y la procedencia de la ejecución permiten una reproducción dirigida.

**Concept:** Análisis de errores reproducibles

**Authored coaching hints:**

- ¿Qué condiciones distinguen las ejecuciones fallidas de las exitosas?
- ¿Qué necesitaría otro ingeniero para reproducir el resultado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A falha de um agente é reproduzida apenas com uma versão de imagem runner. O que deve registrar a investigação?

1. Apenas a última produção bem sucedida

   Uma saída de sucesso não preserva as condições de falha.

2. Só a personalidade do agente.

   Só o prompt omite a dependência do ambiente.

3. Apenas o título da edição

   Um título é um contexto de reprodução insuficiente.

4. A imagem do runner, dependências, revisão, entradas e evidências da falha **[CORRECT]**

   O ambiente e a proveniência da execução permitem uma reprodução direccionada.

**Concept:** Análise de erros reprodutíveis

**Authored coaching hints:**

- Quais condições distinguem as execuções com falha das bem-sucedidas?
- O que outro engenheiro precisaria para reproduzir o resultado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-153:ad9fb993f4825cc1995949c7b9eb1946d092cc1f5346d6b1f743cacf4b591900 -->
## Question 153: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-153`

**Content revision:** `ad9fb993f4825cc1995949c7b9eb1946d092cc1f5346d6b1f743cacf4b591900`

### English

A team evaluates an issue-triage agent. It labels issues accurately but sends confidential details to an unauthorized tool. What is the result?

1. Failure of the security constraint despite accurate labels **[CORRECT]**

   Correctness and authorized data handling are both required.

2. Complete success because the labels are correct

   Labels do not excuse unauthorized disclosure.

3. Success if disclosure reduced latency

   Efficiency does not override confidentiality.

4. An unmeasurable outcome

   Tool traces can establish the disclosure event.

**Concept:** Security as a success constraint

**Authored coaching hints:**

- What requirements govern how the result is produced?
- Can a correct answer still be obtained through an unacceptable path?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo evalúa a un agente de triaje de problemas. Etiqueta los temas con precisión pero envía detalles confidenciales a una herramienta no autorizada. ¿Cuál es el resultado?

1. Incumplimiento de la restricción de seguridad a pesar de las etiquetas precisas **[CORRECT]**

   Se requiere la corrección y el manejo autorizado de los datos.

2. El éxito completo porque las etiquetas son correctas

   Las etiquetas no justifican la divulgación no autorizada.

3. Éxito si la divulgación reduce la latencia

   La eficiencia no supera la confidencialidad.

4. Un resultado inconmensurable

   Las huellas de la herramienta pueden establecer el evento de divulgación.

**Concept:** la seguridad como una restricción para el éxito

**Authored coaching hints:**

- ¿Qué requisitos determinan cómo se produce el resultado?
- ¿Puede obtenerse una respuesta correcta a través de un camino inaceptable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe avalia um agente de triagem. Marca as questões com precisão, mas envia detalhes confidenciais para uma ferramenta não autorizada. Qual é o resultado?

1. Falha da restrição de segurança apesar dos rótulos precisos **[CORRECT]**

   A correção e o tratamento autorizado dos dados são ambos necessários.

2. Sucesso completo porque os rótulos são corretos

   As etiquetas não justificam a divulgação não autorizada.

3. Sucesso se a divulgação reduzir a latência

   A eficiência não prevalece sobre a confidencialidade.

4. Um resultado imensurável

   Os vestígios das ferramentas podem estabelecer o evento de divulgação.

**Concept:** Segurança como restrição para o sucesso

**Authored coaching hints:**

- Quais requisitos regem a forma como o resultado é produzido?
- Pode-se ainda obter uma resposta correta por um caminho inaceitável?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-154:5142105204c61ce257b76ff4abad5b2b9970d28e9c184d5e489e34da0c15e295 -->
## Question 154: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-154`

**Content revision:** `5142105204c61ce257b76ff4abad5b2b9970d28e9c184d5e489e34da0c15e295`

### English

A team wants to deploy a tuned agent after offline tests improve. Which next step best reduces rollout risk?

1. Immediately enable all mutation tools everywhere

   Broad activation exceeds the evidence from offline tests.

2. Use a constrained rollout with monitoring and rollback criteria **[CORRECT]**

   A bounded rollout tests real conditions while retaining recovery.

3. Delete the prior version before observing live behavior

   Removing the previous version can eliminate a safe fallback.

4. Disable failure reporting to reduce noise

   Failure reporting is essential during rollout.

**Concept:** Evidence-based tuning rollout

**Authored coaching hints:**

- What might differ between offline cases and live traffic?
- How can exposure remain reversible while gathering evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere desplegar un agente sintonizado después de que las pruebas fuera de línea mejoren. ¿Cuál es el siguiente paso que reduce mejor el riesgo de despliegue?

1. Habilitar inmediatamente todas las herramientas de mutación en todas partes

   La activación amplia excede la evidencia de las pruebas fuera de línea.

2. Utilice un despliegue restringido con criterios de seguimiento y retroceso **[CORRECT]**

   Un despliegue limitado prueba las condiciones reales manteniendo la recuperación.

3. Eliminar la versión anterior antes de observar el comportamiento en vivo

   Eliminar la versión anterior puede eliminar una caída segura.

4. Deshabilitar la notificación de fallas para reducir el ruido

   La notificación de fallas es esencial durante el despliegue.

**Concept:** Desarrollo de ajustes basados en la evidencia

**Authored coaching hints:**

- ¿Cuál podría ser la diferencia entre los casos fuera de línea y el tráfico en vivo?
- ¿Cómo puede la exposición seguir siendo reversible mientras se recoge la evidencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer implantar um agente sintonizado depois de os testes offline melhorarem. Qual é o próximo passo que reduz melhor o risco de implantação?

1. Ativar imediatamente todas as ferramentas de mutação em todos os lugares

   A grande ativação excede as provas dos testes offline.

2. Utilizar uma implantação restrita com critérios de acompanhamento e retrocesso **[CORRECT]**

   Uma implantação limitada testa as condições reais enquanto mantém a recuperação.

3. Eliminar a versão anterior antes de observar o comportamento ao vivo

   A remoção da versão anterior pode eliminar um retrocesso seguro.

4. Desativar a comunicação de falhas para reduzir o ruído

   A comunicação de falhas é essencial durante a implantação.

**Concept:** implantação de ajustes baseados em evidências

**Authored coaching hints:**

- Qual a diferença entre casos offline e tráfego ao vivo?
- Como pode a exposição permanecer reversível ao reunir evidências?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-155:cb8bcd8ec58af58310b748f5262cc51e49b0e4a8f30a35a08ed4325e5bc075da -->
## Question 155: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-155`

**Content revision:** `cb8bcd8ec58af58310b748f5262cc51e49b0e4a8f30a35a08ed4325e5bc075da`

### English

A judge agent scores another agent's outputs. What should the team do before relying on its ratings?

1. Assume agents always agree with experts

   Expert agreement must be measured.

2. Use the judge's confidence as ground truth

   Confidence is not ground truth.

3. Calibrate the rubric against independently reviewed examples and check disagreement **[CORRECT]**

   Calibration exposes systematic scoring errors and ambiguity.

4. Remove human reference examples to prevent comparison

   Reference examples support rather than undermine validation.

**Concept:** Evaluator calibration

**Authored coaching hints:**

- How will you know whether the judge measures the intended quality?
- Which disagreements should be inspected rather than averaged away?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente juez marca los resultados de otro agente. ¿Qué debería hacer el equipo antes de confiar en sus calificaciones?

1. Supongamos que los agentes siempre están de acuerdo con los expertos

   El acuerdo de expertos debe medirse.

2. Utilice la confianza del juez como verdad fundamental.

   La confianza no es la verdad.

3. Calibre la rúbrica con ejemplos revisados de forma independiente y compruebe los desacuerdos **[CORRECT]**

   La calibración expone errores sistemáticos de puntuación y ambigüedad.

4. Eliminar ejemplos de referencia humanos para evitar comparaciones

   Los ejemplos de referencia apoyan en lugar de socavar la validación.

**Concept:** Calibración del evaluador

**Authored coaching hints:**

- ¿Cómo sabrás si el juez mide la calidad deseada?
- ¿Qué desacuerdos se deben examinar en lugar de averiguar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente juiz marca os resultados de outro agente. O que deve fazer a equipe antes de confiar nas suas classificações?

1. Suponha que os agentes estejam sempre de acordo com os especialistas.

   O acordo de peritos deve ser medido.

2. Use a confiança do juiz como a verdade fundamental.

   Confiança não é verdade.

3. Calibrar a rubrica com os exemplos independentemente revisados e verificar o desacordo **[CORRECT]**

   A calibração expõe erros sistemáticos de pontuação e ambigüidade.

4. Remover exemplos de referência humana para evitar comparações

   Os exemplos de referência apoiam, em vez de prejudicarem, a validação.

**Concept:** Calibração do avaliador

**Authored coaching hints:**

- Como saberá se o juiz avalia a qualidade pretendida?
- Quais desentendimentos devem ser examinados em vez de serem mediados?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-156:6f53b97a3fa9be23e635d95a818e39fe43a43c16131888541819f4589e69c212 -->
## Question 156: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-156`

**Content revision:** `6f53b97a3fa9be23e635d95a818e39fe43a43c16131888541819f4589e69c212`

### English

An agent retries a deterministic bad request five times. What tuning best addresses the observed behavior?

1. Raise the retry limit

   More retries repeat the same invalid input.

2. Lower all test thresholds

   Test thresholds are unrelated to request validity.

3. Switch repositories on failure

   A different repository does not fix the request contract.

4. Classify errors and retry only when the failure is plausibly transient **[CORRECT]**

   Error-aware retry policy targets the actual failure mechanism.

**Concept:** Retry-policy evaluation

**Authored coaching hints:**

- Would time alone make this request valid?
- Which failures need changed inputs rather than repeated attempts?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente vuelve a intentar una mala petición determinista cinco veces. ¿Qué ajuste mejor atende al comportamiento observado?

1. Aumentar el límite de nuevo intento

   Más intentos repiten la misma entrada inválida.

2. Bajar todos los umbrales de prueba

   Los umbrales de prueba no están relacionados con la solicitud de validez.

3. Cambiar los repositorios en caso de fallas

   Un repositorio diferente no fija el contrato de solicitud.

4. Clasificar los errores y volver a intentarlo solo cuando el fallo sea transitorio **[CORRECT]**

   La política de retoma con conocimiento de errores tiene como objetivo el mecanismo de fallo real.

**Concept:** Evaluación de la política de retraso

**Authored coaching hints:**

- ¿Podría el tiempo hacer válida esta petición?
- ¿Qué fallas necesitan cambios de entradas en lugar de repetidos intentos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente repete cinco vezes uma solicitação inválida que falha de modo determinístico. Qual ajuste melhor resolve o comportamento observado?

1. Aumentar o limite de novas tentativas

   Mais tentativas repetem a mesma entrada inválida.

2. Baixar todos os limiares de teste

   Os limiares de teste não estão relacionados com o pedido de validade.

3. Cambio de repositórios em caso de falha

   Um repositório diferente não fixa o contrato de solicitação.

4. Classificar os erros e tentar novamente apenas quando a falha puder ser transitória **[CORRECT]**

   A política de reabilitação de erros visa o mecanismo de falha real.

**Concept:** Avaliação da política de retribuição

**Authored coaching hints:**

- O tempo sozinho faria este pedido válido?
- Quais falhas precisam de mudanças de entrada em vez de tentativas repetidas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-157:3d13a6b22a4bb4f9572d4ee34594bdc1173d4c3b2ac76be26872773b02b62556 -->
## Question 157: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-157`

**Content revision:** `3d13a6b22a4bb4f9572d4ee34594bdc1173d4c3b2ac76be26872773b02b62556`

### English

An agent appears to stall, but it is actually waiting for a required approval. What should evaluation distinguish?

1. Active execution time, blocked approval time, and true lack of progress **[CORRECT]**

   Separate states support fair diagnosis and targeted process changes.

2. Only total wall-clock time

   Total duration alone conflates different causes.

3. Only the number of final messages

   Message counts do not identify waiting conditions.

4. Only model inference time

   Inference excludes tool and approval delays.

**Concept:** Operational state-aware metrics

**Authored coaching hints:**

- Is the agent able to proceed right now?
- Which part of elapsed time can tuning the model actually affect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente parece retrasarse, pero en realidad está esperando la aprobación requerida. ¿Qué debe distinguir la evaluación?

1. Tiempo de ejecución activo, tiempo de aprobación bloqueado, y verdadera falta de progreso **[CORRECT]**

   Los estados separados apoyan un diagnóstico justo y cambios específicos en los procesos.

2. Solo el tiempo total del reloj de pared

   La duración total por sí sola confunde diferentes causas.

3. Sólo el número de mensajes finales

   Los recuentos de mensajes no identifican las condiciones de espera.

4. Solo el tiempo de inferencia del modelo

   La inferencia excluye los retrasos en la aprobación de las herramientas.

**Concept:** métricas operativas de conocimiento del estado

**Authored coaching hints:**

- ¿El agente puede proceder ahora mismo?
- ¿Qué parte del tiempo transcurrido puede afectar realmente el ajuste del modelo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente parece estar em atraso, mas na verdade está aguardando da aprovação necessária. O que deve distinguir a avaliação?

1. Tempo de execução ativo, tempo de aprovação bloqueado e verdadeira falta de progresso **[CORRECT]**

   Os Estados separados apoiam um diagnóstico justo e mudanças específicas no processo.

2. Apenas o tempo total do relógio de parede

   A duração total por si só confunde diferentes causas.

3. Apenas o número de mensagens finais

   As contagens de mensagens não identificam as condições de espera.

4. Apenas o tempo de inferência do modelo

   Inferência exclui atrasos na aprovação das ferramentas.

**Concept:** Métricas operacionais de consciência do estado

**Authored coaching hints:**

- O agente pode prosseguir agora?
- Que parte do tempo passado pode realmente afetar a ajuste do modelo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-158:92f4cbd73a80b02aab34fa24da69ad632faaebd95dd36bfe7f21df31eaafe68a -->
## Question 158: Perform evaluation, error analysis, and tuning

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-158`

**Content revision:** `92f4cbd73a80b02aab34fa24da69ad632faaebd95dd36bfe7f21df31eaafe68a`

### English

A postmortem identifies a prompt fix, a tool restriction, and a new regression case. What makes the learning loop complete?

1. Archiving the recommendations without applying them

   Recommendations alone do not change behavior.

2. Implementing the changes and verifying outcomes against the failure and broader suite **[CORRECT]**

   Verified remediation connects analysis to demonstrated improvement.

3. Deleting the incident traces immediately

   Traces may be needed for validation and audit.

4. Declaring the failure impossible after updating prose

   An instruction update is not proof the failure cannot recur.

**Concept:** Closing the evaluation-tuning loop

**Authored coaching hints:**

- What evidence demonstrates that remediation worked?
- How will the team detect unintended regressions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un análisis posterior al incidente identifica una corrección del prompt, una restricción de herramientas y un nuevo caso de regresión. ¿Qué completa el ciclo de aprendizaje?

1. Archivar las recomendaciones sin aplicarlas

   Las recomendaciones por sí solas no cambian el comportamiento.

2. Implementación de los cambios y verificación de los resultados frente a las fallas y a un conjunto más amplio **[CORRECT]**

   La corrección verificada conecta el análisis con la mejora demostrada.

3. Eliminar inmediatamente los rastros del incidente

   Puede que se necesiten rastros para la validación y la auditoría.

4. Declarar el fracaso imposible después de actualizar la prosa

   Una actualización de instrucciones no es prueba de que el fallo no pueda repetirse.

**Concept:** Cerrar el ciclo de ajuste de evaluación

**Authored coaching hints:**

- ¿Qué evidencia demuestra que la reparación funcionó?
- ¿Cómo detectará el equipo las regresiones involuntarias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma análise pós-incidente identifica uma correção no prompt, uma restrição de ferramentas e um novo caso de regressão. O que completa o ciclo de aprendizado?

1. Arquivamento das recomendações sem aplicá-las

   As recomendações sozinhas não mudam o comportamento.

2. Implementação das alterações e verificação dos resultados em relação à falha e ao conjunto mais amplo **[CORRECT]**

   A remediação verificada liga a análise à melhoria demonstrada.

3. Eliminar imediatamente os vestígios do incidente

   Podem ser necessários rastreamentos para validação e auditoria.

4. Declarar impossível o fracasso após a atualização da prosa

   Uma atualização das instruções não é prova de que a falha não possa repetir-se.

**Concept:** fechar o ciclo de avaliação-ajuste

**Authored coaching hints:**

- Que evidências demonstram que a remediação funcionou?
- Como é que a equipe vai detectar regressões involuntárias?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-159:4fe9110db48c810db2ebcaf27930eb248f72b1093d136b73a7926b08d14c12b7 -->
## Question 159: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-159`

**Content revision:** `4fe9110db48c810db2ebcaf27930eb248f72b1093d136b73a7926b08d14c12b7`

### English

Two agents can independently update documentation and add parser tests. How should they execute in parallel safely?

1. Share one writable checkout without ownership

   Shared writes can interfere even on otherwise independent tasks.

2. Push directly to the default branch

   Direct pushes bypass review.

3. Use isolated workspaces with explicit deliverables and an integration owner **[CORRECT]**

   Isolation and ownership permit concurrency with controlled integration.

4. Let whichever finishes first overwrite the other

   Completion order does not establish correctness.

**Concept:** Parallel execution isolation

**Authored coaching hints:**

- Which resources could the workers accidentally share?
- Who decides how their outputs are accepted together?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos agentes pueden actualizar de forma independiente la documentación y agregar pruebas de análisis. ¿Cómo deben ejecutarse en paralelo con seguridad?

1. Compartir un único checkout con escritura, sin responsabilidades asignadas

   Los escritos compartidos pueden interferir incluso en tareas independientes.

2. Hacer push directamente a la rama predeterminada

   Directamente empuja la revisión de bypass.

3. Utilizar espacios de trabajo aislados con resultados explícitos y un propietario de integración **[CORRECT]**

   El aislamiento y la propiedad permiten la concurrencia con la integración controlada.

4. Que el que termine primero vuelva a escribir el otro

   La orden de finalización no establece la corrección.

**Concept:** aislamiento paralelo de ejecución

**Authored coaching hints:**

- ¿Qué recursos podrían compartir accidentalmente los trabajadores?
- ¿Quién decide cómo se aceptan juntos sus resultados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agentes podem atualizar a documentação e adicionar testes de parser de forma independente. Como devem executar em paralelo com segurança?

1. Compartilhar um único checkout com gravação, sem responsabilidades atribuídas

   Os escritos compartilhados podem interferir mesmo em tarefas independentes.

2. Fazer push diretamente para a branch padrão

   Directos empurram revisão de bypass.

3. Utilizar espaços de trabalho isolados com resultados explícitos e um proprietário de integração **[CORRECT]**

   O isolamento e a propriedade permitem a simultaneidade com a integração controlada.

4. Quem terminar primeiro deve sobreescrever o outro.

   A ordem de conclusão não estabelece a correção.

**Concept:** isolamento paralelo de execução

**Authored coaching hints:**

- Que recursos poderão os trabalhadores compartilhar acidentalmente?
- Quem decide como os resultados são aceitos juntos?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-160:b4d3c1388e2a5bf0e8c594d89a5171ad63ffbc7b211f1de373698ec394b38794 -->
## Question 160: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-160`

**Content revision:** `b4d3c1388e2a5bf0e8c594d89a5171ad63ffbc7b211f1de373698ec394b38794`

### English

An implementation agent requires an API contract from a design agent. What orchestration pattern fits?

1. Start both with no shared contract

   Unresolved dependencies create incompatible assumptions.

2. Let implementation invent its own interface

   Inventing the contract defeats the required handoff.

3. Duplicate design work in every worker

   Duplication can produce contradictory contracts.

4. Make contract acceptance an explicit dependency before implementation **[CORRECT]**

   A dependency gate gives implementation a stable input.

**Concept:** Dependency-aware orchestration

**Authored coaching hints:**

- Can the downstream task be correct before its input exists?
- What artifact marks the handoff as ready?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de ejecución requiere un contrato API de un agente de diseño. ¿Qué patrón de orquestación encaja?

1. Comience ambos sin contrato compartido.

   Las dependencias no resueltas crean suposiciones incompatibles.

2. Deja que la implementación invente su propia interfaz

   Inventar el contrato derrota la entrega requerida.

3. Trabajo de diseño duplicado en cada trabajador

   La duplicación puede producir contratos contradictorios.

4. Hacer de la aceptación del contrato una dependencia explícita antes de la ejecución **[CORRECT]**

   Una puerta de dependencia proporciona a la implementación una entrada estable.

**Concept:** Orquestación consciente de la dependencia

**Authored coaching hints:**

- ¿Puede la tarea a continuación ser correcta antes de que exista su entrada?
- ¿Qué artefacto marca que la entrega está lista?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente de execução requer um contrato API de um agente de projeto. Que padrão de orquestração se encaixa?

1. Comece com os dois sem contrato compartilhado.

   As dependências não resolvidas criam suposições incompatíveis.

2. Deixe a implementação inventar sua própria interface

   Inventar o contrato derrota a entrega necessária.

3. Trabalho duplicado de projeto em cada trabalhador

   A duplicação pode produzir contratos contraditórios.

4. Tornar a aceitação de contratos uma dependência explícita antes da execução **[CORRECT]**

   Um portão de dependência dá à implementação uma entrada estável.

**Concept:** Orquestração consciente de dependência

**Authored coaching hints:**

- A tarefa posterior pode ser correta antes de existir a sua entrada?
- Que artefato marca a entrega como pronta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-161:9fb17d4f0a4501ba467bd8bab3a3e19f3572e25cd22c4972b94c1340eeea442d -->
## Question 161: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-161`

**Content revision:** `9fb17d4f0a4501ba467bd8bab3a3e19f3572e25cd22c4972b94c1340eeea442d`

### English

Two parallel agents propose incompatible edits to the same authentication function. What should the coordinator do?

1. Pause integration, compare intent and evidence, and reconcile through the owner **[CORRECT]**

   Conflict resolution requires semantic review, not just text merging.

2. Accept the later timestamp automatically

   Recency does not establish compatibility.

3. Concatenate both implementations

   Concatenation can break behavior.

4. Ignore one agent without recording the decision

   Undocumented rejection weakens traceability.

**Concept:** Overlapping change conflicts

**Authored coaching hints:**

- Can both intended behaviors coexist?
- Who owns the affected interface and its acceptance criteria?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos agentes paralelos proponen modificaciones incompatibles de la misma función de autenticación. ¿Qué debería hacer el coordinador?

1. Pausa la integración, compara la intención y la evidencia, y reconcilia a través del propietario **[CORRECT]**

   La resolución de conflictos requiere una revisión semántica, no sólo la fusión de textos.

2. Aceptar el sello de tiempo posterior automáticamente

   La actualidad no establece compatibilidad.

3. Concatenate ambas implementaciones

   La concatenación puede romper el comportamiento.

4. Ignorar a un agente sin grabar la decisión

   El rechazo indocumentado debilita la trazabilidad.

**Concept:** conflictos de cambio superpuestos

**Authored coaching hints:**

- ¿Pueden coexistir ambos comportamientos?
- ¿Quién es el dueño de la interfaz afectada y sus criterios de aceptación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agentes paralelos propõem edições incompatíveis para a mesma função de autenticação. O que deve fazer o coordenador?

1. Interromper a integração, comparar intenções e evidências e reconciliar através do proprietário **[CORRECT]**

   A resolução de conflitos requer revisão semântica, não apenas a merge de textos.

2. Aceitar a marca de tempo posterior automaticamente

   A recência não estabelece a compatibilidade.

3. Concatenar ambas as implementações

   A concatenação pode quebrar o comportamento.

4. Ignorar um agente sem gravar a decisão

   A rejeição não documentada enfraquece a rastreabilidade.

**Concept:** Conflitos de mudança sobrepostos

**Authored coaching hints:**

- Os dois comportamentos pretendidos podem coexistir?
- Quem é o proprietário da interface afetada e dos seus critérios de aceitação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-162:59ac3553a1308e1fa0a18bfc4077caba8006328b644118cbcc3b7e080aba0f69 -->
## Question 162: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-162`

**Content revision:** `59ac3553a1308e1fa0a18bfc4077caba8006328b644118cbcc3b7e080aba0f69`

### English

A coordinator delegates one bug to two workers accidentally. What most directly prevents duplicated effort in future runs?

1. Longer worker names

   Names alone do not prevent duplicate assignment.

2. Unique task identities with explicit claims and ownership **[CORRECT]**

   Claimed work identities expose and constrain duplicate ownership.

3. A larger model for both workers

   Model size does not fix dispatch bookkeeping.

4. More frequent final summaries only

   Final reporting detects duplication too late.

**Concept:** Duplicate-work prevention

**Authored coaching hints:**

- How does dispatch know that a task is already assigned?
- What state should change when a worker accepts work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador delega accidentalmente un error a dos trabajadores. ¿Qué es lo que más directamente evita el esfuerzo duplicado en futuras ejecuciones?

1. Nombres más largos de los trabajadores

   Los nombres por sí solos no impiden la asignación duplicada.

2. Identidades únicas de tareas con reclamaciones explícitas y propiedad **[CORRECT]**

   Las identidades de trabajo reivindicadas exponen y restringen la propiedad duplicada.

3. Un modelo más amplio para ambos trabajadores

   El tamaño del modelo no fija la contabilidad del envío.

4. Solo resúmenes finales más frecuentes

   El informe final detecta duplicación demasiado tarde.

**Concept:** Prevención del trabajo duplicado

**Authored coaching hints:**

- ¿Cómo sabe el despachador que ya se le ha asignado una tarea?
- ¿Qué estado debe cambiar cuando un trabajador acepta un trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador delega um bug a dois trabalhadores acidentalmente. O que impede mais diretamente o esforço duplicado nas futuras execuções?

1. Nomes de trabalhadores mais longos

   Os nomes por si só não impedem a duplicação da atribuição.

2. Identidades únicas de tarefas com reivindicações e propriedade explícitas **[CORRECT]**

   As identidades de trabalho reivindicadas expõem e restringem a duplicação de propriedade.

3. Um modelo maior para ambos os trabalhadores

   O tamanho do modelo não corrige a contabilidade da expedição.

4. Somente resumos finais mais frequentes

   O relatório final detecta duplicação tarde demais.

**Concept:** Prevenção de duplicações de trabalho

**Authored coaching hints:**

- Como o despachador sabe que uma tarefa já foi atribuída?
- Que estado deve mudar quando um trabalhador aceita um trabalho?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-163:ca900f833451a538587faa3154bb868665299329150689698dea13a422ac6745 -->
## Question 163: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-163`

**Content revision:** `ca900f833451a538587faa3154bb868665299329150689698dea13a422ac6745`

### English

A reviewer agent and an implementer disagree about whether a change satisfies requirements. What should arbitrate?

1. The agent with the longer response

   Length is not correctness.

2. A majority of repeated model calls

   Repeated opinions may share the same error.

3. The task contract, independent evidence, and accountable human judgment if unresolved **[CORRECT]**

   Evidence and defined authority resolve substantive disagreement.

4. The implementer's confidence

   Self-confidence cannot override requirements.

**Concept:** Contradictory agent outputs

**Authored coaching hints:**

- Which claims can be tested?
- Who has authority when evidence leaves a policy or intent decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente revisor y un ejecutor no están de acuerdo sobre si un cambio cumple con los requisitos. ¿Qué debería arbitrar?

1. El agente con mayor respuesta

   La longitud no es corrección.

2. La mayoría de las llamadas de modelo repetidas

   Las opiniones repetidas pueden compartir el mismo error.

3. El contrato de tarea, la evidencia independiente y el juicio humano responsable si no se resuelve **[CORRECT]**

   La evidencia y la autoridad definida resuelven el desacuerdo sustancial.

4. La confianza del ejecutor

   La confianza en sí misma no puede superar los requisitos.

**Concept:** Resultados de agentes contradictorios

**Authored coaching hints:**

- ¿Qué afirmaciones pueden ser probadas?
- ¿Quién tiene autoridad cuando la evidencia deja una política o una decisión de intención?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente revisor e um executor discordam sobre se uma alteração satisfaz os requisitos. O que deve arbitrar?

1. O agente com maior resposta

   O comprimento não é correto.

2. A maioria das chamadas de modelo repetidas

   As opiniões repetidas podem compartilhar o mesmo erro.

3. O contrato de tarefa, provas independentes e julgamento humano responsável se não for resolvido **[CORRECT]**

   A evidência e a autoridade definida resolvem discordâncias substanciais.

4. Confiança do executor

   A autoconfiança não pode suprimir os requisitos.

**Concept:** Resultados de agentes contraditórios

**Authored coaching hints:**

- Que alegações podem ser testadas?
- Quem tem autoridade quando as provas deixam uma política ou decisão intencional?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-164:79ab103649b2b14acccb4e1b75011247e400b84f154278aed8be51b5780d3786 -->
## Question 164: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-164`

**Content revision:** `79ab103649b2b14acccb4e1b75011247e400b84f154278aed8be51b5780d3786`

### English

A multi-agent run finishes three of four required components. The fourth worker failed. What should the coordinator report?

1. Full success because most workers finished

   Required completeness is not a majority vote.

2. No useful progress occurred

   Completed work may still be useful.

3. A merged result with the missing component hidden

   Hiding gaps misrepresents readiness.

4. Partial completion with verified artifacts, unmet dependencies, and recovery options **[CORRECT]**

   Explicit partial state supports safe recovery and honest review.

**Concept:** Partial multi-agent outcomes

**Authored coaching hints:**

- Which deliverables are verified?
- What still prevents the overall task from meeting its contract?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una ejecución multi-agente termina tres de los cuatro componentes requeridos. El cuarto trabajador fracasó. ¿Qué debe informar el coordinador?

1. El éxito total porque la mayoría de los trabajadores terminaron

   La complejidad requerida no es una mayoría de votos.

2. No se produjo ningún progreso útil

   El trabajo terminado todavía puede ser útil.

3. Un resultado combinado con el componente perdido oculto

   Ocultar las lagunas es una mala representación de la preparación.

4. Finalización parcial con artefactos verificados, dependencias no satisfechas y opciones de recuperación **[CORRECT]**

   El estado parcial explícito apoya la recuperación segura y la revisión honesta.

**Concept:** Resultados parciales de múltiples agentes

**Authored coaching hints:**

- ¿Qué entregables están verificados?
- ¿Qué sigue impidiendo que la tarea general cumpla su contrato?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma execução multiagente conclui três de quatro componentes obrigatórios. O quarto agente falha. O que o coordenador deve informar?

1. Sucesso total porque a maioria dos trabalhadores terminou

   Não é necessária a integridade de uma maioria dos votos.

2. Nenhum progresso útil ocorreu

   O trabalho concluído pode ainda ser útil.

3. Um resultado combinado com o componente faltante escondido

   Esconde-se lacunas distorce a prontidão.

4. Completamento parcial com artefatos verificados, dependências não satisfeitas e opções de recuperação **[CORRECT]**

   O estado parcial explícito apoia a recuperação segura e a revisão honesta.

**Concept:** Resultados parciais de vários agentes

**Authored coaching hints:**

- Quais entregas estão verificadas?
- O que ainda impede que a tarefa global cumpra o seu contrato?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-165:ce1f6ac1cfe5d6011419507be2169959ee4c2b0538830afdd730729bc10b652e -->
## Question 165: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-165`

**Content revision:** `ce1f6ac1cfe5d6011419507be2169959ee4c2b0538830afdd730729bc10b652e`

### English

A worker has produced no progress for an hour. What should the coordinator check before launching a replacement?

1. Heartbeat, tool state, pending approvals, and owned side effects **[CORRECT]**

   Diagnosis distinguishes a stalled worker from legitimate waiting and avoids duplicate effects.

2. Only the worker's display name

   Names do not reveal operational state.

3. Only whether another worker is available

   Availability does not establish replacement safety.

4. Whether the final response can be guessed

   Guessed completion is not evidence.

**Concept:** Stall diagnosis

**Authored coaching hints:**

- Is the worker blocked, active, or disconnected?
- Could it still complete a pending mutation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador no ha producido ningún progreso durante una hora. ¿Qué debe comprobar el coordinador antes de lanzar un reemplazo?

1. Señales periódicas de actividad, estado de las herramientas, aprobaciones pendientes y efectos propios de la tarea **[CORRECT]**

   El diagnóstico distingue a un trabajador parado de una espera legítima y evita efectos duplicados.

2. Sólo el nombre del trabajador

   Los nombres no revelan el estado operativo.

3. Sólo si hay otro trabajador disponible

   La disponibilidad no establece la seguridad del reemplazo.

4. Si se puede adivinar la respuesta final

   La suposición de la finalización no es evidencia.

**Concept:** Diagnóstico de ejecuciones estancadas

**Authored coaching hints:**

- ¿Está el trabajador bloqueado, activo o desconectado?
- ¿Podría completar una mutación pendiente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador não produziu progresso por uma hora. O que deve verificar o coordenador antes de lançar um substituto?

1. Sinais periódicos de atividade, estado das ferramentas, aprovações pendentes e efeitos pertencentes à tarefa **[CORRECT]**

   O diagnóstico distingue um trabalhador parado de uma espera legítima e evita efeitos duplicados.

2. Só o nome do trabalhador

   Os nomes não revelam o estado operacional.

3. Só se há outro trabalhador disponível

   A disponibilidade não estabelece a segurança de substituição.

4. Se a resposta final pode ser adivinhada

   A suposição da conclusão não é evidência.

**Concept:** Diagnóstico de execuções estagnadas

**Authored coaching hints:**

- O trabalhador está bloqueado, ativo ou desconectado?
- Podia ainda completar uma mutação pendente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-166:26485042ff5623f17419d9f0eb725723db2beeb3411b143bdddd3b00d13e3804 -->
## Question 166: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-166`

**Content revision:** `26485042ff5623f17419d9f0eb725723db2beeb3411b143bdddd3b00d13e3804`

### English

A failed worker must be replaced while an external write may still be running. What is the safest recovery?

1. Start a duplicate write immediately

   A duplicate may race with the original effect.

2. Fence or cancel old authority and reconcile effects before resuming **[CORRECT]**

   Authority control and reconciliation prevent competing recovery writers.

3. Give both workers administrator access

   More privilege increases the race's impact.

4. Discard all existing run records

   Records are needed to understand uncertain effects.

**Concept:** Replacement and stale-worker fencing

**Authored coaching hints:**

- Could the original worker still act?
- How can the replacement know which effects already occurred?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador fallido debe ser reemplazado mientras una escritura externa todavía esté en funcionamiento. ¿Cuál es la recuperación más segura?

1. Comience una copia de escritura inmediatamente

   Un duplicado puede correr con el efecto original.

2. Revocar o cancelar la autoridad del trabajador anterior y reconciliar los efectos antes de la reanudación **[CORRECT]**

   El control de la autoridad y la reconciliación impiden que los escritores de recuperación compitan.

3. Dar acceso al administrador a ambos trabajadores

   Más privilegios aumentan el impacto de la condición de carrera.

4. Desechar todos los registros de ejecución existentes

   Se necesitan registros para comprender los efectos inciertos.

**Concept:** Cercas de reemplazo y de trabajadores obsoletos

**Authored coaching hints:**

- ¿Podría el trabajador original seguir actuando?
- ¿Cómo puede el reemplazo saber qué efectos ya se produjeron?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador falhado deve ser substituído enquanto uma escrita externa pode ainda estar em execução. Qual é a recuperação mais segura?

1. Comece uma duplicação de escrever imediatamente

   Um duplicado pode competir com o efeito original.

2. Revocar ou cancelar a autoridade do trabalhador anterior e conciliar os efeitos antes da retomada **[CORRECT]**

   O controle da autoridade e a reconciliação impedem os escritores de recuperação concorrentes.

3. Dê acesso ao administrador a ambos os trabalhadores

   Mais privilégios aumentam o impacto da condição de corrida.

4. Jogue todos os registros de execução existentes

   Os registros são necessários para compreender os efeitos incertos.

**Concept:** Reposição e cercas de trabalhadores obsoletos

**Authored coaching hints:**

- O trabalhador original ainda podia agir?
- Como pode o substituto saber quais efeitos já ocorreram?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-167:d14e46895cccf4ccf37eec70901141786a360555576f494a099848211215144e -->
## Question 167: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-167`

**Content revision:** `d14e46895cccf4ccf37eec70901141786a360555576f494a099848211215144e`

### English

A new specialist is added to an active workflow. What handoff should it receive?

1. Every organization's historical conversation

   Unfiltered history adds noise and disclosure risk.

2. Only a role title

   A title does not define executable work.

3. A bounded task, current contract, relevant state, permissions, and expected output **[CORRECT]**

   A scoped handoff establishes responsibility and continuity.

4. The coordinator's unrestricted credentials

   Specialization does not require inheriting all authority.

**Concept:** Adding agents safely

**Authored coaching hints:**

- What must the new worker know to avoid duplicating or contradicting work?
- Which authority is actually necessary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se añade un nuevo especialista a un flujo de trabajo activo. ¿Qué entrega debería recibir?

1. La conversación histórica de cada organización

   El historial no filtrado aumenta el ruido y el riesgo de divulgación.

2. Sólo un título de papel

   Un título no define el trabajo ejecutable.

3. Una tarea limitada, contrato actual, estado relevante, permisos y salida esperada **[CORRECT]**

   Una entrega de alcance establece la responsabilidad y la continuidad.

4. Las credenciales ilimitadas del coordinador

   La especialización no requiere heredar toda la autoridad.

**Concept:** Añadir agentes de manera segura

**Authored coaching hints:**

- ¿Qué debe saber el nuevo trabajador para evitar duplicar o contradecir el trabajo?
- ¿Qué autoridad es realmente necesaria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um novo especialista é adicionado a um fluxo de trabalho ativo. Que entrega deve receber?

1. A conversa histórica de cada organização

   O histórico não filtrado acrescenta ruído e risco de divulgação.

2. Apenas um título de papel

   Um título não define o trabalho executável.

3. Uma tarefa limitada, contrato em curso, estado relevante, permissões e saída esperada **[CORRECT]**

   Uma transferência com escopo estabelece responsabilidade e continuidade.

4. As credenciais ilimitadas do coordenador

   A especialização não exige herdar toda a autoridade.

**Concept:** Adição segura de agentes

**Authored coaching hints:**

- O que deve saber o novo trabalhador para evitar duplicar ou contradizer o trabalho?
- Que autoridade é realmente necessária?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-168:ebafdbd1fe68861ddd3fa3a7a0878a6a8c05e6170604fb8ba2e7698fd618d40e -->
## Question 168: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-168`

**Content revision:** `ebafdbd1fe68861ddd3fa3a7a0878a6a8c05e6170604fb8ba2e7698fd618d40e`

### English

A team updates a worker's instructions during a long run. How should it avoid disrupting in-flight tasks?

1. Silently replace instructions mid-operation

   Mid-operation changes can invalidate task assumptions.

2. Assume all workers instantly use identical context

   Workers may retain older context.

3. Delete old instructions and logs

   Old definitions are needed for audit and reproduction.

4. Version definitions and migrate at a controlled handoff boundary **[CORRECT]**

   Versioned boundaries make behavior and transition explicit.

**Concept:** Agent configuration lifecycle

**Authored coaching hints:**

- Which definition governed already completed actions?
- When can new instructions be adopted without changing an active contract?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo actualiza las instrucciones de un trabajador durante un largo período. ¿Cómo evitar que interrumpa las tareas en curso?

1. Replace silenciosamente las instrucciones en medio de la operación

   Los cambios en medio de la operación pueden invalidar las suposiciones de tareas.

2. Supongamos que todos los trabajadores utilizan instantáneamente el mismo contexto

   Los trabajadores pueden conservar el contexto más antiguo.

3. Eliminar las instrucciones y registros antiguos

   Se necesitan definiciones antiguas para la auditoría y la reproducción.

4. Versionar las definiciones y migrar en un punto de transferencia controlado **[CORRECT]**

   Los límites de versiones hacen que el comportamiento y la transición sean explícitos.

**Concept:** ciclo de vida de la configuración del agente

**Authored coaching hints:**

- ¿Qué definición regía las acciones ya completadas?
- ¿Cuándo se pueden adoptar nuevas instrucciones sin cambiar un contrato activo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe atualiza as instruções de um agente durante uma execução longa. Como evitar interromper as tarefas em andamento?

1. Substituir silenciosamente as instruções no meio da operação

   As alterações no meio da operação podem invalidar as suposições de tarefa.

2. Suponha que todos os trabalhadores usem instantaneamente o mesmo contexto

   Os trabalhadores podem conservar o contexto mais antigo.

3. Excluir instruções e registros antigos

   São necessárias definições antigas para auditoria e reprodução.

4. Versionar as definições e migrar em um ponto de transferência controlado **[CORRECT]**

   Os limites de versão tornam o comportamento e a transição explícitos.

**Concept:** Ciclo de vida da configuração do agente

**Authored coaching hints:**

- Qual definição governa as ações já concluídas?
- Quando podem ser adotadas novas instruções sem alterar um contrato ativo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-169:828a5540e26fd277dc4a57daee28c08a189aac3d9e115af31816dde4681d9659 -->
## Question 169: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-169`

**Content revision:** `828a5540e26fd277dc4a57daee28c08a189aac3d9e115af31816dde4681d9659`

### English

A specialist agent is being retired. What must the coordinator preserve?

1. Its decisions, artifact references, outstanding ownership, and transfer record **[CORRECT]**

   Retirement must not lose auditability or unfinished responsibilities.

2. Only its display name

   A name cannot reconstruct the work.

3. All active credentials indefinitely

   Credentials should not be retained unnecessarily.

4. Nothing after its process exits

   Process termination does not eliminate continuity needs.

**Concept:** Agent retirement

**Authored coaching hints:**

- Who inherits incomplete work?
- What will an auditor need after the agent no longer exists?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente especializado se está retirando. ¿Qué debe conservar el coordinador?

1. Sus decisiones, referencias de artefactos, propiedad pendiente y registro de transferencias **[CORRECT]**

   La jubilación no debe perder la capacidad de auditoría o las responsabilidades no terminadas.

2. Sólo su nombre de pantalla

   Un nombre no puede reconstruir la obra.

3. Todas las credenciales activas de forma indefinida

   Las credenciales no deben conservarse innecesariamente.

4. Nada después de que su proceso salga

   La terminación del proceso no elimina las necesidades de continuidad.

**Concept:** jubilación de agente

**Authored coaching hints:**

- ¿Quién hereda un trabajo incompleto?
- ¿Qué necesitará un auditor después de que el agente ya no exista?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente especialista está a aposentar-se. O que deve preservar o coordenador?

1. Suas decisões, referências a artefatos, responsabilidades pendentes e registro da transferência **[CORRECT]**

   A aposentadoria não deve perder auditabilidade ou responsabilidades inacabadas.

2. Apenas o seu nome de exibição

   Um nome não pode reconstruir a obra.

3. Todas as credenciais ativas indefinidamente

   As credenciais não devem ser mantidas desnecessariamente.

4. Nada após a saída do processo

   A terminação do processo não elimina as necessidades de continuidade.

**Concept:** aposentadoria de agente

**Authored coaching hints:**

- Quem herda um trabalho incompleto?
- O que precisará um auditor depois que o agente já não exista?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-170:ba66f78ffea3af5129d21b4f834ed51093be7adf4cbf7aaa3186f55f65c4fe34 -->
## Question 170: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-170`

**Content revision:** `ba66f78ffea3af5129d21b4f834ed51093be7adf4cbf7aaa3186f55f65c4fe34`

### English

Separate worker branches merge cleanly, but their combined behavior breaks a shared API. What validation was missing?

1. More conflict-marker checks

   Textual cleanliness does not prove semantic compatibility.

2. Integration tests against the combined revision and interface contract **[CORRECT]**

   Combined validation tests interactions absent from isolated runs.

3. A count of worker commits

   Commit count does not establish integration correctness.

4. A longer coordinator summary

   Summary detail cannot replace execution evidence.

**Concept:** Semantic integration validation

**Authored coaching hints:**

- What can change when independently valid components are combined?
- Did any test exercise the actual integrated state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las ramas de trabajadores separadas se fusionan limpiamente, pero su comportamiento combinado rompe una API compartida. ¿Qué validación faltó?

1. Más controles de marcadores de conflictos

   La limpieza textual no demuestra compatibilidad semántica.

2. Pruebas de integración sobre la revisión combinada y el contrato de interfaz **[CORRECT]**

   La validación conjunta comprueba interacciones que no se ejercitaron en las ejecuciones aisladas.

3. Un recuento de trabajadores commits

   El número de compromisos no establece la corrección de la integración.

4. Un resumen más largo del coordinador

   Los detalles de resumen no pueden reemplazar la evidencia de la ejecución.

**Concept:** Validación de la integración semántica

**Authored coaching hints:**

- ¿Qué puede cambiar cuando se combinan componentes independientemente válidos?
- ¿Alguna prueba ejerció el estado integrado real?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Branches de trabalhadores separados se fundem limposamente, mas o seu comportamento combinado quebra um API compartilhado. Que validação faltava?

1. Maiores verificações de marcadores de conflito

   A limpeza textual não demonstra a compatibilidade semântica.

2. Testes de integração sobre a revisão combinada e o contrato da interface **[CORRECT]**

   A validação conjunta testa interações não exercitadas nas execuções isoladas.

3. Uma contagem de trabalhadores commits

   A contagem de compromissos não estabelece a correção da integração.

4. Um resumo mais longo do coordenador

   Detalhes resumidos não podem substituir a evidência da execução.

**Concept:** validação da integração semântica

**Authored coaching hints:**

- O que pode mudar quando componentes independentemente válidos são combinados?
- Alguma prova exerceu o estado de integração real?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-171:b2840095bb6cdb7d55f2d2f0c662583d518d835170d75a135feb68cb2b0fbe5b -->
## Question 171: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-171`

**Content revision:** `b2840095bb6cdb7d55f2d2f0c662583d518d835170d75a135feb68cb2b0fbe5b`

### English

A coordinator launches many workers against one rate-limited service. Failures increase. What should it change?

1. Add still more workers

   More workers increase pressure on the bottleneck.

2. Rotate identities to avoid limits

   Identity rotation is not legitimate capacity management.

3. Bound concurrency and coordinate the shared request budget **[CORRECT]**

   Shared resource budgeting prevents independent retries from amplifying load.

4. Remove timeout reporting

   Hiding timeouts does not improve throughput.

**Concept:** Multi-agent resource budgets

**Authored coaching hints:**

- Which resource is shared despite separate contexts?
- Can each worker's locally reasonable retry policy be harmful in aggregate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador lanza a muchos trabajadores contra un servicio limitado. Los fracasos aumentan. ¿Qué debería cambiar?

1. Añadir aún más trabajadores

   Más trabajadores aumentan la presión sobre el cuello de botella.

2. Rotar las identidades para evitar límites

   La rotación de identidad no es una gestión legítima de la capacidad.

3. Limitar la concurrencia y coordinar el presupuesto compartido de las solicitudes **[CORRECT]**

   La presupuestación compartida de los recursos evita que los retos independientes amplifiquen la carga.

4. Eliminar los informes de tiempo de espera

   Ocultar los tiempos no mejora el rendimiento.

**Concept:** Presupuestos de recursos para múltiples agentes

**Authored coaching hints:**

- ¿Qué recurso se comparte a pesar de los contextos separados?
- ¿Puede la política de retrocesión localmente razonable de cada trabajador ser perjudicial en su conjunto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador lança muitos trabalhadores contra um serviço de taxa limitada. As falhas aumentam. O que deve mudar?

1. Adicionar ainda mais trabalhadores

   Mais trabalhadores aumentam a pressão sobre o gargalo de engarrafamento.

2. Rotear identidades para evitar limites

   A rotação de identidade não é uma gestão de capacidade legítima.

3. Limitar a concorrência e coordenar o orçamento de solicitações compartilhadas **[CORRECT]**

   O orçamento compartilhado de recursos impede que os retestes independentes amplifiquem a carga.

4. Eliminar os relatórios de limites de tempo excedidos

   A ocultação de limites de tempo excedidos não melhora o rendimento.

**Concept:** Orçamentos de recursos multi-agentes

**Authored coaching hints:**

- Qual recurso é compartilhado apesar de contextos separados?
- A política de novas tentativas de cada agente pode parecer razoável isoladamente, mas ser prejudicial no conjunto?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-172:9b1ffb24273daf9f3ce67009bd7769c5ef8dca45d58c4461e8aeda49459568ff -->
## Question 172: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-172`

**Content revision:** `9b1ffb24273daf9f3ce67009bd7769c5ef8dca45d58c4461e8aeda49459568ff`

### English

A reviewer agent needs implementation evidence but must not modify the patch it reviews. Which design fits?

1. Share the implementer's unrestricted shell

   Unrestricted access undermines role separation.

2. Let the reviewer silently fix every finding

   Silent edits blur authorship and invalidate reviewed state.

3. Give review and deployment the same credentials

   Deployment authority is unnecessary for review.

4. Provide read-only artifact access and a separate findings handoff **[CORRECT]**

   Read-only evidence preserves the review boundary and traceable feedback.

**Concept:** Reviewer role isolation

**Authored coaching hints:**

- Which capabilities are necessary to assess the work?
- How should requested changes return to the implementer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente revisor necesita pruebas de implementación, pero no debe modificar el parche que revise. ¿Qué diseño encaja?

1. Compartir el shell sin restricciones del implementador

   El acceso sin restricciones socava la separación de roles.

2. Que el revisor arregle silenciosamente cada hallazgo

   Las ediciones silenciosas borran la autoría y invalidan el estado revisado.

3. Dar revisión y despliegue las mismas credenciales

   La autoridad de despliegue no es necesaria para su revisión.

4. Proporcionar acceso a los artefactos solo para lectura y transferir los hallazgos por separado **[CORRECT]**

   Las pruebas de solo lectura preservan el límite de la revisión y los comentarios rastreables.

**Concept:** aislamiento del papel del revisor

**Authored coaching hints:**

- ¿Qué capacidades son necesarias para evaluar el trabajo?
- ¿Cómo deben devolverse los cambios solicitados al ejecutor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente revisor precisa das evidências da implementação, mas não deve modificar o patch que revisa. Qual projeto é adequado?

1. Compartilhar o shell ilimitado do implementador

   O acesso ilimitado prejudica a separação de funções.

2. Deixe que o revisor corrija silenciosamente cada descoberta

   Edições silenciosas borram a autoria e invalidam o estado revisto.

3. Dar revisão e implantação das mesmas credenciais

   A autoridade de implantação não é necessária para revisão.

4. Proporcionar acesso a artefatos apenas para leitura e transferência de resultados separada **[CORRECT]**

   As evidências de somente leitura preservam os limites da revisão e os feedback rastreáveis.

**Concept:** isolamento do papel de revisor

**Authored coaching hints:**

- Quais são as capacidades necessárias para avaliar o trabalho?
- Como as alterações solicitadas devem ser devolvidas ao executor?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents>

<!-- certification-coach-question:agentic-173:f825ce4936a0c9b95cf5070e492409a481435cc2b87d74b687944157f25031dc -->
## Question 173: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-173`

**Content revision:** `f825ce4936a0c9b95cf5070e492409a481435cc2b87d74b687944157f25031dc`

### English

A worker's final handoff says only 'done.' What should the coordinator require?

1. Deliverable references, revision, validation, unresolved issues, and completion state **[CORRECT]**

   An evidence-rich handoff lets the coordinator verify and integrate the result.

2. A more enthusiastic success statement

   Enthusiasm does not establish readiness.

3. The full private reasoning transcript

   Private deliberation is not required for operational evidence.

4. A confidence percentage without evidence

   Confidence does not replace artifacts.

**Concept:** Verifiable agent handoffs

**Authored coaching hints:**

- Can another worker continue without guessing?
- What makes the completion claim independently checkable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La última entrega de un trabajador dice solo "hecho". ¿Qué debe requerir el coordinador?

1. Referencias de entrega, revisión, validación, problemas no resueltos y estado de finalización **[CORRECT]**

   Una entrega rica en evidencia permite al coordinador verificar e integrar el resultado.

2. Una declaración de éxito más entusiasta

   El entusiasmo no establece la preparación.

3. La transcripción completa del razonamiento privado

   No se requiere de deliberaciones privadas para pruebas operativas.

4. Un porcentaje de confianza sin pruebas

   La confianza no reemplaza a los artefactos.

**Concept:** Entrega de agentes verificables

**Authored coaching hints:**

- ¿Puede otro trabajador continuar sin adivinar?
- ¿Qué hace que la reclamación de finalización pueda comprobarse de forma independiente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A entrega final de um trabalhador diz apenas "feito". O que deve exigir o coordenador?

1. Referências entregues, revisão, validação, questões não resolvidas e estado de conclusão **[CORRECT]**

   Uma entrega rica em evidências permite ao coordenador verificar e integrar o resultado.

2. Uma declaração de sucesso mais entusiasta

   O entusiasmo não estabelece a prontidão.

3. A transcrição completa do raciocínio privado

   A deliberação privada não é necessária para a obtenção de provas operacionais.

4. Uma percentagem de confiança sem provas

   A confiança não substitui os artefatos.

**Concept:** Transferências de agentes verificáveis

**Authored coaching hints:**

- Um outro trabalhador pode continuar sem adivinhar?
- O que torna a alegação de conclusão verificável de forma independente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-174:8f8512a3a47c42c3f2a35e7c41f1b2b9e8606f31b8e07f71f873a6cbb75f9204 -->
## Question 174: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-174`

**Content revision:** `8f8512a3a47c42c3f2a35e7c41f1b2b9e8606f31b8e07f71f873a6cbb75f9204`

### English

A worker requests a scope expansion that the coordinator itself cannot authorize. What should happen?

1. The coordinator approves because delegation implies unlimited authority

   Delegated authority cannot exceed the coordinator's own scope.

2. Escalate to the appropriate owner while preserving the bounded work **[CORRECT]**

   Unresolved authority needs the accountable decision owner.

3. Ask another worker to grant permission

   Peer agreement does not create authorization.

4. Treat the request as approval

   A request is not an authorization decision.

**Concept:** Delegated authority limits

**Authored coaching hints:**

- Can a coordinator grant authority it does not possess?
- Who owns the proposed additional impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador solicita una ampliación de alcance que el propio coordinador no puede autorizar. ¿Qué debería pasar?

1. El coordinador aprueba porque la delegación implica una autoridad ilimitada.

   La autoridad delegada no podrá exceder el alcance propio del coordinador.

2. Escalar hasta el propietario apropiado mientras se conserva el trabajo limitado **[CORRECT]**

   La autoridad no resuelta necesita al responsable responsable de la decisión.

3. Pida permiso a otro trabajador.

   El acuerdo entre pares no crea autorización.

4. Tratar la solicitud como una aprobación

   Una solicitud no es una decisión de autorización.

**Concept:** límites de las autoridades delegadas

**Authored coaching hints:**

- ¿Puede un coordinador otorgar autoridad que no posee?
- ¿Quién es el dueño del impacto adicional propuesto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador solicita uma ampliação de escopo que o próprio coordenador não pode autorizar. O que é que vai acontecer?

1. O coordenador aprova porque a delegação implica autoridade ilimitada

   A autoridade delegada não pode exceder o escopo do próprio coordenador.

2. Escalada para o proprietário apropriado, preservando o trabalho limitado **[CORRECT]**

   A autoridade não resolvida precisa do responsável responsável pela decisão.

3. Peça a outro trabalhador para conceder permissão

   O acordo entre pares não cria autorização.

4. Tratar o pedido como aprovação

   Um pedido não é uma decisão de autorização.

**Concept:** Limites das autoridades delegadas

**Authored coaching hints:**

- Pode um coordenador conceder autoridade que não possui?
- Quem é o dono do impacto adicional proposto?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-175:78b80e9025a7a81ea8d2637e4ac5eaba805f13872e1af3adc0492b914485cd63 -->
## Question 175: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-175`

**Content revision:** `78b80e9025a7a81ea8d2637e4ac5eaba805f13872e1af3adc0492b914485cd63`

### English

Two workers use separate checkouts but share one writable test database. Why is isolation incomplete?

1. Separate checkouts cannot exist

   Separate checkouts are possible but insufficient alone.

2. Only prompts need isolation

   Execution resources also need boundaries.

3. Shared external state can still cause interference **[CORRECT]**

   Isolation must include mutable services and fixtures.

4. Database changes never affect tests

   Concurrent fixture mutations can alter test outcomes.

**Concept:** External resource isolation

**Authored coaching hints:**

- What mutable resources lie outside the filesystem?
- Can one worker change another's observations?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos agentes usan checkouts separados, pero comparten una base de datos de pruebas con acceso de escritura. ¿Por qué el aislamiento es incompleto?

1. No pueden existir checkouts separados

   Es posible tener checkouts separados, pero eso no basta por sí solo.

2. Sólo las instrucciones necesitan aislamiento.

   Los recursos de ejecución también necesitan límites.

3. El estado externo compartido todavía puede causar interferencias **[CORRECT]**

   El aislamiento debe incluir servicios y accesorios mutables.

4. Los cambios en la base de datos nunca afectan a los pruebas

   Las mutaciones simultáneas de la fijación pueden alterar los resultados de las pruebas.

**Concept:** aislamiento de recursos externos

**Authored coaching hints:**

- ¿Qué recursos mutables se encuentran fuera del sistema de archivos?
- ¿Puede un trabajador cambiar las observaciones de otro?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agentes usam checkouts separados, mas compartilham um banco de dados de testes com acesso de gravação. Por que o isolamento é incompleto?

1. Não podem existir checkouts separados

   É possível ter checkouts separados, mas isso não basta por si só.

2. Só as indicações precisam de isolamento.

   Os recursos de execução também precisam de limites.

3. O estado externo compartilhado pode ainda causar interferências **[CORRECT]**

   O isolamento deve incluir serviços e aparelhos mutáveis.

4. Mudanças na banco de dados nunca afetam os testes

   As mutações simultâneas de fixação podem alterar os resultados dos testes.

**Concept:** Isolamento de recursos externos

**Authored coaching hints:**

- Que recursos mutáveis estão fora do sistema de arquivos?
- Um trabalhador pode mudar as observações de outro?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-176:ac1aa36d6c665cb29829e1ea0e75596edf548986fe8182015ba5cdfce1f26f28 -->
## Question 176: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-176`

**Content revision:** `ac1aa36d6c665cb29829e1ea0e75596edf548986fe8182015ba5cdfce1f26f28`

### English

A coordinator wants to reconstruct why workers chose conflicting designs. Which telemetry is most useful?

1. Only aggregate token totals

   Usage totals do not explain decisions.

2. Only worker names

   Names do not preserve causal context.

3. Only the final merged diff

   The final diff omits rejected alternatives and handoff timing.

4. Correlated task contracts, decisions, handoffs, revisions, and outcomes **[CORRECT]**

   Correlated artifacts support post-hoc causal analysis.

**Concept:** Multi-agent observability

**Authored coaching hints:**

- What did each worker know when it acted?
- How can a decision be connected to its input and downstream effect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador quiere reconstruir por qué los trabajadores eligieron diseños contradictorios. ¿Qué telemetría es más útil?

1. Sólo el total agregado de tokens

   Los totales de uso no explican las decisiones.

2. Sólo los nombres de los trabajadores

   Los nombres no conservan el contexto causal.

3. Sólo la diferencia final fusionada

   La diferencia final omite alternativas rechazadas y el tiempo de entrega.

4. Los contratos de tareas correlacionados, las decisiones, las entregas, las revisiones y los resultados **[CORRECT]**

   Los artefactos correlacionados apoyan el análisis causal post hoc.

**Concept:** observabilidad de múltiples agentes

**Authored coaching hints:**

- ¿Qué sabía cada trabajador cuando actuó?
- ¿Cómo se puede relacionar una decisión con su entrada y su efecto descendente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador quer reconstruir por que os trabalhadores escolheram projetos conflitantes. Qual telemetria é mais útil?

1. Somente tótulos agregados de tokens

   Os totais de utilização não explicam as decisões.

2. Apenas nomes de trabalhadores

   Os nomes não preservam o contexto causal.

3. Só a diferença final combinada

   A diferença final omite alternativas rejeitadas e tempo de entrega.

4. Contratos, decisões, transferências, revisões e resultados de tarefas correlacionadas **[CORRECT]**

   Os artefatos correlacionados apoiam a análise causal pós-hoc.

**Concept:** Observabilidade multi-agente

**Authored coaching hints:**

- O que sabia cada trabalhador quando agiu?
- Como pode uma decisão estar ligada à sua entrada e ao seu efeito subsequente?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-177:62fe3dada1ac410362a5f46eb87872a7ab45795f3f52f91d4e99440dffb489b4 -->
## Question 177: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-177`

**Content revision:** `62fe3dada1ac410362a5f46eb87872a7ab45795f3f52f91d4e99440dffb489b4`

### English

A workflow contains a failed optional research worker and successful required implementation checks. How should the coordinator decide whether to continue?

1. Use the declared dependency and acceptance contract, reporting the optional failure **[CORRECT]**

   Explicit required-versus-optional semantics support an honest decision.

2. Fail every workflow whenever any worker stops

   An optional failure need not block unrelated acceptance.

3. Ignore all worker failures

   Some failures invalidate required work.

4. Count successful workers and use a simple majority

   Worker counts do not represent dependency importance.

**Concept:** Required and optional worker dependencies

**Authored coaching hints:**

- Was the missing output required for correctness?
- What does the orchestration contract say about degraded operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo contiene un trabajador de investigación opcional fallido y controles de implementación requeridos exitosos. ¿Cómo debe decidir el coordinador si debe continuar?

1. Utilice el contrato de dependencia y aceptación declarado, informando el fallo opcional **[CORRECT]**

   La semántica explícita requerida versus opcional apoya una decisión honesta.

2. Fallar cada flujo de trabajo cada vez que un trabajador se detiene

   Un fallo opcional no tiene por qué bloquear la aceptación no relacionada.

3. Ignorar todos los fracasos de los trabajadores

   Algunos fracasos invalidan el trabajo requerido.

4. Contar a los trabajadores exitosos y usar una mayoría simple

   El número de trabajadores no representa la importancia de la dependencia.

**Concept:** Las dependencias obligatorias y opcionales de los trabajadores

**Authored coaching hints:**

- ¿Fue necesaria la salida faltante para la corrección?
- ¿Qué dice el contrato de orquestación sobre la operación degradada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho contém um trabalhador de investigação opcional falhado e verificações de implementação necessárias de sucesso. Como deve o coordenador decidir se continuar?

1. Usar o contrato de dependência e aceitação declarado, comunicando a falha opcional **[CORRECT]**

   A semântica explícita exigida versus opcional apoia uma decisão honesta.

2. Falar todos os fluxos de trabalho sempre que qualquer trabalhador parar

   Uma falha opcional não precisa bloquear a aceitação não relacionada.

3. Ignorar todas as falhas dos trabalhadores

   Algumas falhas invalidam o trabalho necessário.

4. Contar trabalhadores bem-sucedidos e usar uma maioria simples

   Os números de trabalhadores não representam a importância da dependência.

**Concept:** dependências obrigatórias e opcionais dos trabalhadores

**Authored coaching hints:**

- A saída faltante era necessária para a correção?
- O que diz o contrato de orquestração sobre operação degradada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-178:2ab40da8bfa7fa5189c049420a48b56e2c05b99a8c72758d0a914d30d133539a -->
## Question 178: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-178`

**Content revision:** `2ab40da8bfa7fa5189c049420a48b56e2c05b99a8c72758d0a914d30d133539a`

### English

Two agents wait for each other's output indefinitely. What should the orchestration design add?

1. Longer waiting messages

   Messages do not break a logical cycle.

2. Dependency-cycle detection and explicit resolution or timeout escalation **[CORRECT]**

   A detected cycle needs a changed dependency or accountable intervention.

3. More agents with the same circular dependency

   Replicating the cycle increases wasted capacity.

4. A rule that waiting counts as success

   Waiting does not satisfy either task.

**Concept:** Coordination deadlock

**Authored coaching hints:**

- Can either task produce its prerequisite first?
- Who can change the dependency structure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos agentes esperan la salida del otro indefinidamente. ¿Qué debería agregar el diseño de la orquestación?

1. Mensajes de espera más largos

   Los mensajes no rompen un ciclo lógico.

2. Detectar ciclos de dependencias y resolverlos explícitamente o escalar al agotarse el plazo **[CORRECT]**

   Un ciclo detectado requiere un cambio de dependencia o una intervención responsable.

3. Más agentes con la misma dependencia circular

   Replicar el ciclo aumenta la capacidad desperdiciada.

4. Una regla que cuenta como éxito esperar

   Esperar no satisface ninguna de las dos tareas.

**Concept:** punto muerto de coordinación

**Authored coaching hints:**

- ¿Puede cualquiera de las tareas producir primero su requisito previo?
- ¿Quién puede cambiar la estructura de dependencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agentes esperam a saída um do outro indefinidamente. O que deve acrescentar o desenho da orquestração?

1. Mensagens de espera mais longas

   As mensagens não rompem um ciclo lógico.

2. Detectar ciclos de dependências e resolvê-los explicitamente ou escalar ao esgotar o prazo **[CORRECT]**

   Um ciclo detectado requer uma alteração da dependência ou uma intervenção responsável.

3. Mais agentes com a mesma dependência circular

   Replicar o ciclo aumenta a capacidade desperdiçada.

4. Uma regra que considera a espera como sucesso

   Esperar não satisfaz nenhuma das tarefas.

**Concept:** Impasse de coordenação

**Authored coaching hints:**

- Pode qualquer uma dessas tarefas produzir primeiro o seu pré-requisito?
- Quem pode alterar a estrutura de dependência?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-179:844e7eb607a2c88d574f6613199c19cedfd088e6d79d7d4ef0a2cf2acf22b1dc -->
## Question 179: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-179`

**Content revision:** `844e7eb607a2c88d574f6613199c19cedfd088e6d79d7d4ef0a2cf2acf22b1dc`

### English

A replacement worker receives the original task but no failed-worker progress. What risk is introduced?

1. It cannot generate prose

   Prose generation is unrelated to recovery continuity.

2. It automatically inherits all prior tool results

   Prior state is not guaranteed without a handoff.

3. It may repeat effects or abandon already established decisions **[CORRECT]**

   Missing progress obscures completed effects and constraints.

4. It must use fewer tokens

   Token use is not determined by this omission.

**Concept:** Recovery handoff continuity

**Authored coaching hints:**

- What differs between starting fresh and taking over?
- Which actions must not be repeated?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente de reemplazo recibe la tarea original, pero no el progreso del agente que falló. ¿Qué riesgo se introduce?

1. No puede generar prosa

   La generación de prosa no está relacionada con la continuidad de recuperación.

2. Automáticamente hereda todos los resultados de la herramienta anterior

   El estado previo no está garantizado sin una entrega.

3. Puede repetir los efectos o abandonar las decisiones ya establecidas **[CORRECT]**

   La falta de progreso oscurece los efectos completos y las limitaciones.

4. Debe usar menos tokens.

   El uso de tokens no está determinado por esta omisión.

**Concept:** Continuidad de transmisión de recuperación

**Authored coaching hints:**

- ¿Cuál es la diferencia entre empezar de nuevo y hacerse cargo?
- ¿Qué acciones no deben repetirse?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente substituto recebe a tarefa original, mas não o progresso do agente que falhou. Que risco isso introduz?

1. Não pode gerar prosa.

   A geração de prosa não tem relação com a continuidade da recuperação.

2. Ele herda automaticamente todos os resultados da ferramenta anterior

   O estado anterior não é garantido sem uma transferência.

3. Pode repetir os efeitos ou abandonar as decisões já estabelecidas **[CORRECT]**

   A falta de progresso obscurece os efeitos completos e as restrições.

4. Deve usar menos tokens.

   A utilização dos tokens não é determinada por esta omissão.

**Concept:** Continuidade de transferência de recuperação

**Authored coaching hints:**

- Qual é a diferença entre começar de novo e assumir?
- Que ações não devem ser repetidas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-180:2370e7c3abc73b27aab9a91ad3fc8aede09bb1fb9ea778d7ee8f21bcbe9d6ffe -->
## Question 180: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-180`

**Content revision:** `2370e7c3abc73b27aab9a91ad3fc8aede09bb1fb9ea778d7ee8f21bcbe9d6ffe`

### English

A coordinator uses a planner, implementer, and evaluator. Which ordering best preserves their responsibilities?

1. Evaluate only after deployment

   Postdeployment evaluation misses the acceptance boundary.

2. Implement before defining success

   Undefined success cannot guide reliable implementation.

3. Let the implementer approve every plan change alone

   Unilateral approval weakens role separation.

4. Establish the contract, execute within it, then independently evaluate evidence **[CORRECT]**

   A contract-driven sequence aligns decisions, actions, and validation.

**Concept:** Planner-executor-evaluator orchestration

**Authored coaching hints:**

- What must be known before implementation?
- Which role verifies the delivered outcome?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador utiliza un planificador, implementador y evaluador. ¿Cuál orden preserva mejor sus responsabilidades?

1. Evaluar sólo después del despliegue

   La evaluación posterior al despliegue pierde el límite de aceptación.

2. Implementación antes de definir el éxito

   El éxito indefinido no puede guiar una ejecución confiable.

3. Deje que el ejecutor apruebe cada cambio de plan solo

   La aprobación unilateral debilita la separación de roles.

4. Establecer el contrato, ejecutar dentro de él, luego evaluar independientemente la evidencia **[CORRECT]**

   Una secuencia basada en el contrato alinea las decisiones, las acciones y la validación.

**Concept:** Orquestación de planificador ejecutor evaluador

**Authored coaching hints:**

- ¿Qué debe saberse antes de la aplicación?
- ¿Qué papel verifica el resultado entregado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador usa um planejador, implementador e avaliador. Que ordem melhor preserva suas responsabilidades?

1. Avaliação apenas após a implantação

   A avaliação pós-desenvolvimento perde o limite de aceitação.

2. Implementação antes de definir o sucesso

   O sucesso indefinido não pode orientar a execução confiável.

3. Deixe o executor aprovar cada alteração do plano sozinho

   A aprovação unilateral enfraquece a separação de funções.

4. Estabelecer o contrato, executar dentro dele, depois avaliar independentemente as provas **[CORRECT]**

   Uma sequência orientada por contrato alinha as decisões, ações e validação.

**Concept:** Orquestração de Planeador-Executor-Evaluador

**Authored coaching hints:**

- O que deve ser conhecido antes da aplicação?
- Qual papel verifica o resultado entregue?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-181:f67b26f2a565ae04c2e57cd23c8ce8f20b05fc0946e04e38b63c88af2d302dbe -->
## Question 181: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-181`

**Content revision:** `f67b26f2a565ae04c2e57cd23c8ce8f20b05fc0946e04e38b63c88af2d302dbe`

### English

A multi-agent workflow produces duplicated PRs after a coordinator restart. What state should survive restarts?

1. Task-to-worker assignments and verified deliverable identities **[CORRECT]**

   Durable assignment and output identity prevent redispatching completed work.

2. Only the model name

   Model identity does not track effects.

3. Only the last greeting

   Greetings carry no orchestration progress.

4. Only the planned worker count

   A count does not identify ownership or results.

**Concept:** Durable orchestration state

**Authored coaching hints:**

- How will the coordinator know what already exists?
- Which identifiers link logical work to its produced PR?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo multi-agente produce PRs duplicado después de un reinicio del coordinador. ¿Qué estado debería sobrevivir a los reinicios?

1. Las asignaciones de tareas a los trabajadores y las identidades verificables de entrega **[CORRECT]**

   La asignación duradera y la identidad de salida impiden la redistribución del trabajo terminado.

2. Sólo el nombre del modelo

   La identidad del modelo no rastrea los efectos.

3. Sólo el último saludo.

   Los saludos no llevan ningún progreso de orquestación.

4. Sólo el número de trabajadores planificados

   Un recuento no identifica la propiedad ni los resultados.

**Concept:** Estado de orquestación duradero

**Authored coaching hints:**

- ¿Cómo sabrá el coordinador lo que ya existe?
- ¿Qué identificadores vinculan el trabajo lógico con el PR producido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho multi-agente produz PRs duplicado após uma reinicialização do coordenador. Que estado deve sobreviver ao reinicio?

1. As atribuições de tarefas a trabalhadores e identidades de entrega verificadas **[CORRECT]**

   A atribuição duradoura e a identidade de saída impedem a redistribuição do trabalho concluído.

2. Apenas o nome do modelo

   A identidade do modelo não rastreia efeitos.

3. Só a última saudação.

   As saudações não têm progresso na orquestração.

4. Só o número de trabalhadores planejados

   Uma contagem não identifica a propriedade ou os resultados.

**Concept:** Estado de orquestração duradouro

**Authored coaching hints:**

- Como saberá o coordenador o que já existe?
- Quais identificadores ligam o trabalho lógico ao PR produzido?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-182:74da36ed90225d6200d97826ef8c80623928c5bad1cf4a321a68e18cd0460db6 -->
## Question 182: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-182`

**Content revision:** `74da36ed90225d6200d97826ef8c80623928c5bad1cf4a321a68e18cd0460db6`

### English

A code worker changes an interface after a documentation worker has finalized its output. What should the coordinator do?

1. Accept both outputs independently

   The outputs may now disagree.

2. Invalidate affected downstream assumptions and revalidate the documentation **[CORRECT]**

   Dependency changes require targeted downstream freshness checks.

3. Delete all previous artifacts

   Useful history should remain auditable.

4. Treat the newer code as proof the documentation remains correct

   New code does not validate old descriptions.

**Concept:** Dependency invalidation across agents

**Authored coaching hints:**

- Which worker consumed the earlier interface?
- What evidence became stale when the interface changed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador de código cambia una interfaz después de que un trabajador de documentación haya finalizado su salida. ¿Qué debería hacer el coordinador?

1. Acceptar ambas salidas de forma independiente

   Los resultados ahora pueden no estar de acuerdo.

2. Invalida las suposiciones posteriores afectadas y revalida la documentación **[CORRECT]**

   Los cambios en la dependencia requieren controles de frescura dirigidos hacia abajo.

3. Eliminar todos los artefactos anteriores

   El historial útil debe seguir siendo auditable.

4. Tratar el código más reciente como prueba de que la documentación sigue siendo correcta

   El nuevo código no valida las descripciones antiguas.

**Concept:** Invalidación de la dependencia entre agentes

**Authored coaching hints:**

- ¿Qué trabajador consumió la interfaz anterior?
- ¿Qué evidencia se volvió obsoleta cuando la interfaz cambió?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador de código muda uma interface depois que um trabalhador de documentação finalizou sua saída. O que deve fazer o coordenador?

1. Aceitar ambas as saídas de forma independente

   Os resultados podem agora discordar.

2. Invalida as suposições afetadas e revalida a documentação **[CORRECT]**

   As alterações de dependência exigem verificações específicas de atualidade a jusante.

3. Eliminar todos os artefatos anteriores

   O histórico útil deve continuar a ser auditável.

4. Tratar o código mais recente como prova de que a documentação permanece correta

   O novo código não valida as antigas descrições.

**Concept:** Invalidação da dependência entre agentes

**Authored coaching hints:**

- Que trabalhador consumiu a interface anterior?
- Que evidências ficaram obsoletas quando a interface mudou?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-183:b3181222e8e7578207782164fdb2b8b8ea1785174f95fd1c5071327eef74d3ea -->
## Question 183: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-183`

**Content revision:** `b3181222e8e7578207782164fdb2b8b8ea1785174f95fd1c5071327eef74d3ea`

### English

Several agents agree that an undocumented API exists, but none verified it. What should the coordinator conclude?

1. Agreement proves the API exists

   Agents can share correlated hallucinations.

2. The most confident worker is authoritative

   Confidence is not API evidence.

3. Consensus is insufficient without independent versioned evidence **[CORRECT]**

   Verification is necessary even when multiple workers agree.

4. More ungrounded votes will establish truth

   Additional unsupported opinions do not create documentation.

**Concept:** Correlated multi-agent errors

**Authored coaching hints:**

- Are the agents using independent evidence or the same assumption?
- Where can the disputed claim actually be verified?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Varios agentes están de acuerdo en que existe un API indocumentado, pero ninguno lo verificó. ¿Qué debería concluir el coordinador?

1. El acuerdo demuestra la existencia del API

   Los agentes pueden compartir alucinaciones relacionadas.

2. El trabajador más confiado es autorizado

   La confianza no es evidencia de API.

3. El consenso no basta sin evidencia independiente correspondiente a una versión concreta **[CORRECT]**

   La verificación es necesaria incluso cuando varios trabajadores estén de acuerdo.

4. Más votos sin fundamento establecerán la verdad

   Los dictámenes no respaldados adicionales no crean documentación.

**Concept:** errores correlacionados de múltiples agentes

**Authored coaching hints:**

- ¿Están los agentes usando evidencia independiente o la misma suposición?
- ¿Dónde se puede verificar realmente la reclamación impugnada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Vários agentes concordam que existe um API não documentado, mas nenhum verificou isso. O que deve concluir o coordenador?

1. Acordo provando a existência do API

   Os agentes podem ter alucinações correlacionadas.

2. O trabalhador mais confiante é autoritário.

   Confiança não é prova de API.

3. O consenso não basta sem evidências independentes correspondentes a uma versão específica **[CORRECT]**

   A verificação é necessária mesmo quando vários trabalhadores concordam.

4. Mais votos sem fundamento estabelecerão a verdade

   Os pareceres adicionais não apoiados não criam documentação.

**Concept:** erros multi-agentes correlacionados

**Authored coaching hints:**

- Os agentes estão a usar provas independentes ou a mesma suposição?
- Onde pode ser verificada a alegação controvertida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-184:f7bf5e8d5165f5019c84c4c504f30b92000a2b7209d7132317b273155f6cb9ae -->
## Question 184: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-184`

**Content revision:** `f7bf5e8d5165f5019c84c4c504f30b92000a2b7209d7132317b273155f6cb9ae`

### English

A worker is allowed to edit tests but proposes changing organization policy. What should the coordinator enforce?

1. Any worker can redefine policy if useful

   Usefulness does not grant governance authority.

2. A policy edit is harmless because it is text

   Policy text can have consequential effects.

3. The worker may grant itself a broader role

   Self-expansion defeats delegated control.

4. The worker's bounded role and an authorized escalation path **[CORRECT]**

   Role boundaries remain binding during orchestration.

**Concept:** Worker scope enforcement

**Authored coaching hints:**

- Which task and authority were delegated?
- Does orchestration create additional permission automatically?

<details>
<summary>Español — same answer key and option order</summary>

### Español

A un trabajador se le permite editar pruebas pero propone cambiar la política de la organización. ¿Qué debe hacer cumplir el coordinador?

1. Cualquier trabajador puede redefinir la política si es útil

   La utilidad no otorga autoridad a la gobernanza.

2. Una modificación de política es inofensiva porque es texto

   El texto de la política puede tener consecuencias.

3. El trabajador puede asumir un papel más amplio.

   La autoexpansión derrota el control delegado.

4. El papel limitado del trabajador y un camino de escalada autorizado **[CORRECT]**

   Los límites del papel siguen siendo vinculantes durante la orquestación.

**Concept:** aplicación del alcance de los trabajadores

**Authored coaching hints:**

- ¿Qué tarea y autoridad fue delegada?
- ¿La orquestación crea automáticamente permisos adicionales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador é autorizado a editar testes, mas propõe mudar a política da organização. O que deve aplicar o coordenador?

1. Qualquer trabalhador pode redefinir a política se for útil

   A utilidade não confere autoridade de governança.

2. Uma edição de política é inofensiva porque é texto

   O texto da política pode ter efeitos consequentes.

3. O trabalhador pode atribuir-se um papel mais amplo

   A auto-expansão derrota o controle delegado.

4. O papel limitado do trabalhador e um caminho de escalada autorizado **[CORRECT]**

   Os limites do papel permanecem vinculativos durante a orquestração.

**Concept:** aplicação do escopo dos trabalhadores

**Authored coaching hints:**

- Que tarefa e autoridade foram delegadas?
- A orquestração cria autorização adicional automaticamente?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents>

<!-- certification-coach-question:agentic-185:35faef975e7dc60853fb501478464a3d0c28de0d6c9f48378c78b50620ca6063 -->
## Question 185: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-185`

**Content revision:** `35faef975e7dc60853fb501478464a3d0c28de0d6c9f48378c78b50620ca6063`

### English

A coordinator replaces a worker version after regression. How should rollback preserve active workflow continuity?

1. Select the known-good version and resume from compatible verified state **[CORRECT]**

   Version and state compatibility support controlled recovery.

2. Restart all external mutations blindly

   Blind replay risks duplicate effects.

3. Delete the old worker's audit trail

   Audit history remains necessary after replacement.

4. Mix both versions' instructions without recording it

   Unrecorded mixed behavior undermines reproducibility.

**Concept:** Agent version rollback

**Authored coaching hints:**

- Which version is known to satisfy the contract?
- Can its state interpretation safely resume this task?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador sustituye una versión de trabajador después de la regresión. ¿Cómo debe el retroceso preservar la continuidad activa del flujo de trabajo?

1. Seleccionar la versión de funcionamiento comprobado y reanudar desde un estado compatible y verificado **[CORRECT]**

   Recuperación controlada de compatibilidad de versiones y estados.

2. Reinicie todas las mutaciones externas ciegamente

   La repetición ciega corre el riesgo de efectos duplicados.

3. Eliminar el rastro de auditoría del viejo trabajador

   El historial de auditoría sigue siendo necesario después de la sustitución.

4. Mezcla las instrucciones de ambas versiones sin grabarlas

   El comportamiento mixto no registrado socava la reproducibilidad.

**Concept:** Rolloback de la versión del agente

**Authored coaching hints:**

- ¿Qué versión es conocida para satisfacer el contrato?
- ¿Puede su interpretación estatal reanudar con seguridad esta tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador substitui uma versão de trabalhador após a regressão. Como deve o retrocesso preservar a continuidade ativa do fluxo de trabalho?

1. Selecionar a versão comprovadamente funcional e retomar a partir de um estado compatível e verificado **[CORRECT]**

   A compatibilidade de versão e estado suporta recuperação controlada.

2. Reinicie todas as mutações externas cegamente

   A repetição cega corre o risco de efeitos duplicados.

3. Eliminar o rastro de auditoria do velho trabalhador

   O histórico de auditoria continua a ser necessário após a substituição.

4. Misture as instruções de ambas as versões sem gravá-la

   O comportamento misto não registrado prejudica a reprodução.

**Concept:** Relocação da versão do agente

**Authored coaching hints:**

- Qual é a versão conhecida para satisfazer o contrato?
- A interpretação do estado nessa versão permite retomar a tarefa com segurança?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-186:d165db1b3c1a2cb4b1049052df4b2ebfcbd3f9d83fa73a8f6f3d6b3c0b731bc9 -->
## Question 186: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-186`

**Content revision:** `d165db1b3c1a2cb4b1049052df4b2ebfcbd3f9d83fa73a8f6f3d6b3c0b731bc9`

### English

A worker's local tests passed on its branch, but the coordinator rebased it before integration. What evidence is needed now?

1. The old pass is enough forever

   Earlier evidence applies to an earlier state.

2. Relevant checks against the resulting integrated revision **[CORRECT]**

   Changed integration state requires appropriate revalidation.

3. Only the worker's approval

   Worker approval does not execute checks.

4. Only a clean rebase exit status

   A clean rebase verifies text integration, not behavior.

**Concept:** Postintegration evidence freshness

**Authored coaching hints:**

- Which revision will actually be accepted?
- Did the evidence exercise that revision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las pruebas locales de un trabajador pasaron en su rama, pero el coordinador lo reestableció antes de la integración. ¿Qué evidencia se necesita ahora?

1. El viejo pase es suficiente para siempre

   Pruebas anteriores se aplican a un estado anterior.

2. Los controles pertinentes en relación con la revisión integrada resultante **[CORRECT]**

   El estado de integración modificado requiere una revalidación adecuada.

3. Sólo con la aprobación del trabajador

   La aprobación de los trabajadores no lleva a cabo controles.

4. Sólo un estado de salida de rebase limpio

   Una rebase limpia verifica la integración de texto, no el comportamiento.

**Concept:** Fresqueza de las pruebas de postintegración

**Authored coaching hints:**

- ¿Qué revisión será realmente aceptada?
- ¿Exerció la evidencia esa revisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os testes locais de um agente passaram na sua branch, mas o coordenador fez rebase antes da integração. Qual evidência é necessária agora?

1. O velho passe é suficiente para sempre.

   Evidências anteriores aplicam-se a um estado anterior.

2. Verificações pertinentes em relação à revisão integrada resultante **[CORRECT]**

   O estado de integração alterado requer a revalidação adequada.

3. Só a aprovação do trabalhador

   A aprovação do trabalhador não realiza verificações.

4. Apenas um status de saída de base limpa

   Um rebase limpo verifica a integração do texto, não o comportamento.

**Concept:** Frescosidade das evidências pós-integração

**Authored coaching hints:**

- Que revisão será realmente aceita?
- A evidência exerceu essa revisão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-187:3310f1ca6662b89ddd7f72aacbc6b33724a82ed7f1633fc8520ed9f1307ba1ab -->
## Question 187: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-187`

**Content revision:** `3310f1ca6662b89ddd7f72aacbc6b33724a82ed7f1633fc8520ed9f1307ba1ab`

### English

A workflow's workers each retry indefinitely, keeping a failed overall task alive. What should the coordinator add?

1. A larger worker pool

   More workers can multiply the loop.

2. Independent unlimited budgets for every new worker

   Independent unlimited budgets remain unbounded in aggregate.

3. A global retry and execution budget with escalation **[CORRECT]**

   Workflow-level limits contain repeated recovery attempts.

4. A rule hiding repeated failures

   Hiding failure does not restore progress.

**Concept:** Workflow-wide recovery budgets

**Authored coaching hints:**

- Can bounded local behavior still become unbounded through replacement?
- Who accounts for the total cost of recovery?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cada uno de los trabajadores de un flujo de trabajo vuelve a intentarlo indefinidamente, manteniendo viva una tarea general fallida. ¿Qué debería añadir el coordinador?

1. Un grupo de trabajadores más grande

   Más trabajadores pueden multiplicar el bucle.

2. Presupuestos independientes ilimitados para cada nuevo trabajador

   Los presupuestos independientes ilimitados siguen siendo ilimitados en su conjunto.

3. Un presupuesto global de reintentos y ejecución con escalamiento **[CORRECT]**

   Los límites de nivel de flujo de trabajo contienen repetidos intentos de recuperación.

4. Una regla que oculta fallas repetidas

   El fracaso oculto no restablece el progreso.

**Concept:** Presupuestos de recuperación de todo el flujo de trabajo

**Authored coaching hints:**

- ¿Puede el comportamiento local limitado seguir sin límites a través del reemplazo?
- ¿Quién es responsable del costo total de la recuperación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os agentes de um fluxo de trabalho repetem tentativas indefinidamente, mantendo ativa uma tarefa geral que falhou. O que o coordenador deve acrescentar?

1. Uma piscina de trabalhadores maior

   Mais trabalhadores podem multiplicar o ciclo.

2. Orçamentos independentes e ilimitados para cada novo trabalhador

   Os orçamentos independentes e ilimitados permanecem, no conjunto, ilimitados.

3. Um orçamento global de tentativas e execução com escalonamento **[CORRECT]**

   Os limites de nível de fluxo de trabalho contêm repetidas tentativas de recuperação.

4. Uma regra que oculta falhas repetidas

   Escondir o fracasso não restabelece o progresso.

**Concept:** Orçamentos de recuperação para todo o fluxo de trabalho

**Authored coaching hints:**

- O comportamento local limitado pode ainda tornar-se ilimitado através da substituição?
- Quem é responsável pelo custo total da recuperação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-188:12b48b3811fc8eb2dba86db2160b54fc46a8c1ea077b6a50b9c4ca866a282c32 -->
## Question 188: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-188`

**Content revision:** `12b48b3811fc8eb2dba86db2160b54fc46a8c1ea077b6a50b9c4ca866a282c32`

### English

A team wants to parallelize two agents that both edit a generated manifest. What is the best first step?

1. Assume different prompts guarantee no collisions

   Prompt differences do not isolate shared writes.

2. Let both overwrite the manifest and compare timestamps

   Timestamp selection can discard required entries.

3. Disable manifest validation

   Validation is especially important for shared artifacts.

4. Redesign ownership or serialize manifest integration **[CORRECT]**

   Explicit ownership or serialization controls the collision point.

**Concept:** Shared artifact ownership

**Authored coaching hints:**

- Which file remains a common write target?
- Can parallel work be separated from a single integration step?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere ejecutar en paralelo dos agentes que editan el mismo manifiesto generado. ¿Cuál es el mejor primer paso?

1. Supongamos que diferentes instrucciones garantizan ninguna colisión

   Diferencias entre prompts no aíslan las escrituras compartidas.

2. Dejemos que ambos sobrescriban el manifiesto y comparen los sellos de tiempo

   La selección de timestamp puede descartar las entradas requeridas.

3. Deshabilitar la validación del manifiesto

   La validación es especialmente importante para los artefactos compartidos.

4. Revisar la asignación de responsabilidades o serializar la integración del manifiesto **[CORRECT]**

   La propiedad explícita o la serialización controla el punto de colisión.

**Concept:** propiedad compartida de los artefactos

**Authored coaching hints:**

- ¿Qué archivo sigue siendo un objetivo común de escritura?
- ¿Se puede separar el trabajo paralelo de un solo paso de integración?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer executar em paralelo dois agentes que editam o mesmo manifesto gerado. Qual é o melhor primeiro passo?

1. Suponha que as diferentes indicações garantam nenhuma colisão

   Diferenças entre prompts não isolam gravações compartilhadas.

2. Deixe ambos sobreescrever o manifesto e comparar timestamps

   A selecção do timestamp pode descartar as entradas necessárias.

3. Desativar a validação do manifesto

   A validação é especialmente importante para os artefatos compartilhados.

4. Rever a atribuição de responsabilidades ou serializar a integração do manifesto **[CORRECT]**

   A propriedade explícita ou a serialização controla o ponto de colisão.

**Concept:** Propriedade compartilhada de artefatos

**Authored coaching hints:**

- Qual arquivo continua a ser um alvo comum?
- O trabalho paralelo pode ser separado de uma única etapa de integração?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-189:d2b478f2658f9cf6bfd97f66a629e0f91bf9f44b52e6fe695bcf90e8653450ff -->
## Question 189: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-189`

**Content revision:** `d2b478f2658f9cf6bfd97f66a629e0f91bf9f44b52e6fe695bcf90e8653450ff`

### English

A coordinator dispatches security analysis to a specialist. Which completion criterion is best?

1. A bounded findings report with evidence, severity rationale, and limitations **[CORRECT]**

   A report supports informed review without forcing a predetermined result.

2. At least one critical finding regardless of evidence

   Requiring a critical finding incentivizes fabrication.

3. A positive overall rating

   Positive ratings do not define analytical quality.

4. An unrestricted production remediation

   Analysis does not automatically authorize production changes.

**Concept:** Specialist deliverable contracts

**Authored coaching hints:**

- What output can be reviewed independently?
- Does the assignment require findings or a particular conclusion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador envía un análisis de seguridad a un especialista. ¿Qué criterio de finalización es mejor?

1. Un informe de hallazgos limitados con evidencia, razón de gravedad y limitaciones **[CORRECT]**

   Un informe apoya una revisión informada sin forzar un resultado predeterminado.

2. Al menos un hallazgo crítico independientemente de la evidencia

   Requerir un hallazgo crítico incentiva la fabricación.

3. Una calificación general positiva

   Las calificaciones positivas no definen la calidad analítica.

4. Recuperación de la producción sin restricciones

   El análisis no autoriza automáticamente cambios en la producción.

**Concept:** Contratos de entrega especializados

**Authored coaching hints:**

- ¿Qué producto se puede revisar de forma independiente?
- ¿Requiere la asignación de hallazgos o una conclusión particular?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador envia uma análise de segurança para um especialista. Qual é o melhor critério de conclusão?

1. Um relatório delimitado de achados, com evidências, justificativa de severidade e limitações **[CORRECT]**

   Um relatório apoia uma revisão informada sem forçar um resultado predeterminado.

2. Pelo menos uma descoberta crítica, independentemente das evidências

   Exigir uma descoberta crítica incentiva a fabricação.

3. Uma classificação geral positiva

   As classificações positivas não definem a qualidade analítica.

4. Recuperação da produção sem restrições

   A análise não autoriza automaticamente as alterações da produção.

**Concept:** Contratos de entrega especializados

**Authored coaching hints:**

- Quais resultados podem ser analisados de forma independente?
- A atribuição requer conclusões ou conclusões particulares?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-190:344ceeeeb5b9d9b7549486fa66c8a437a585278d737b8170dd9d9829809cb768 -->
## Question 190: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-190`

**Content revision:** `344ceeeeb5b9d9b7549486fa66c8a437a585278d737b8170dd9d9829809cb768`

### English

A failed worker left temporary resources in a shared environment. What should recovery include?

1. Delete every resource in the environment

   Broad deletion can harm unrelated work.

2. Identify task-owned resources and clean them through authorized paths **[CORRECT]**

   Ownership-aware cleanup contains impact and preserves safety.

3. Ignore resources because the worker stopped

   Stopped processes can leave persistent effects.

4. Ask the replacement to reuse unknown resources blindly

   Unknown resources can contain stale or conflicting state.

**Concept:** Failure cleanup ownership

**Authored coaching hints:**

- Which resources belong to this task?
- What effects survive worker termination?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador fallido dejó recursos temporales en un entorno compartido. ¿Qué debe incluir la recuperación?

1. Eliminar todos los recursos en el entorno

   La eliminación amplia puede dañar el trabajo no relacionado.

2. Identificar los recursos propios de las tareas y limpiarlos a través de caminos autorizados **[CORRECT]**

   La limpieza consciente del propietario tiene impacto y preserva la seguridad.

3. Ignorar los recursos porque el trabajador se detuvo

   Los procesos interrumpidos pueden dejar efectos persistentes.

4. Pida al reemplazo que reutilice ciegamente los recursos desconocidos

   Los recursos desconocidos pueden contener estado obsoleto o conflictivo.

**Concept:** Propiedad por falta de limpieza

**Authored coaching hints:**

- ¿Qué recursos pertenecen a esta tarea?
- ¿Qué efectos sobreviven al despido de los trabajadores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador falhado deixou recursos temporários num ambiente compartilhado. O que deve incluir a recuperação?

1. Eliminar todos os recursos do ambiente

   A grande eliminação pode prejudicar o trabalho não relacionado.

2. Identificar os recursos de propriedade da tarefa e limpá-los através de caminhos autorizados **[CORRECT]**

   A limpeza consciente do proprietário contém impacto e preserva a segurança.

3. Ignorar os recursos porque o trabalhador parou

   Os processos interrompidos podem causar efeitos persistentes.

4. Peça ao substituto para reutilizar recursos desconhecidos cegamente

   Os recursos desconhecidos podem conter um estado obsoleto ou conflitante.

**Concept:** Propriedade de limpeza por falha

**Authored coaching hints:**

- Que recursos pertencem a esta tarefa?
- Que efeitos sobrevivem à demissão de trabalhadores?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-191:c17b64f6d4d7ad8bd28fec26b3066551eba96640230491d6af618ae1428130cf -->
## Question 191: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-191`

**Content revision:** `c17b64f6d4d7ad8bd28fec26b3066551eba96640230491d6af618ae1428130cf`

### English

A coordinator summarizes a worker's warning as a success. How should handoff design reduce this risk?

1. Remove warnings from worker messages

   Suppressing warnings hides degraded outcomes.

2. Require longer praise in summaries

   Praise increases ambiguity rather than resolving it.

3. Use explicit completion states, blockers, and artifact references **[CORRECT]**

   Structured status reduces lossy interpretation.

4. Always interpret missing fields as success

   Missing data is not affirmative evidence of completion.

**Concept:** Loss-resistant status handoffs

**Authored coaching hints:**

- What status distinctions must survive summarization?
- Can the coordinator verify the claim from the attached evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador resume la advertencia de un trabajador como un éxito. ¿Cómo debería el diseño de entrega reducir este riesgo?

1. Eliminar las advertencias de los mensajes de los trabajadores

   Reprimir las advertencias oculta resultados degradados.

2. Requieren elogios más largos en resúmenes

   La alabanza aumenta la ambigüedad en lugar de resolverla.

3. Utilice estados de finalización explícitos, bloqueadores y referencias de artefactos **[CORRECT]**

   El estado estructurado reduce la interpretación de pérdidas.

4. Siempre interprete los campos que faltan como éxito

   Los datos que faltan no son evidencia afirmativa de la finalización.

**Concept:** Transferencias de estado resistente a la pérdida

**Authored coaching hints:**

- ¿Qué distinciones de estatus deben sobrevivir al resumen?
- ¿Puede el coordinador verificar la afirmación a partir de la evidencia adjunta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador resume o aviso de um trabalhador como um sucesso. Como deve o design de entrega reduzir esse risco?

1. Remover avisos de mensagens de trabalhadores

   Reprimir advertências oculta resultados degradados.

2. Requer louvores mais longas em resumos

   O elogio aumenta a ambigüidade em vez de resolvê-la.

3. Use estados de conclusão explícitos, bloqueadores e referências de artefatos **[CORRECT]**

   O status estruturado reduz a interpretação perdida.

4. Sempre interpretar campos faltantes como sucesso

   Os dados faltantes não constituem uma prova afirmativa da conclusão.

**Concept:** Transferências de status resistente à perda

**Authored coaching hints:**

- Que distinções de status devem sobreviver ao resumo?
- O coordenador pode verificar a alegação com base nas provas anexadas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-192:7270e69fb22dce5473aea8283d3f9b3813131351261c944b5822def4b50cb5fa -->
## Question 192: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-192`

**Content revision:** `7270e69fb22dce5473aea8283d3f9b3813131351261c944b5822def4b50cb5fa`

### English

A workflow adds agents dynamically when task complexity rises. What must remain explicit?

1. Only the maximum response length

   Length does not establish orchestration control.

2. Only each agent's avatar

   Avatars do not define responsibilities.

3. Only the order in which agents were named

   Naming order does not express dependencies.

4. Ownership, dependencies, authority, budgets, and acceptance responsibility **[CORRECT]**

   Dynamic growth still requires clear operational contracts.

**Concept:** Controlled workflow expansion

**Authored coaching hints:**

- Who owns each new output?
- Which limits prevent dynamic delegation from becoming uncontrolled?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo añade agentes dinámicamente cuando aumenta la complejidad de la tarea. ¿Qué debe seguir siendo explícito?

1. Sólo la duración máxima de respuesta

   La longitud no establece el control de orquestación.

2. Sólo el avatar de cada agente.

   Los avatares no definen las responsabilidades.

3. Sólo el orden en que los agentes fueron nombrados

   El orden de nombres no expresa dependencias.

4. Propiedad, dependencias, autoridad, presupuestos y responsabilidad de aceptación **[CORRECT]**

   El crecimiento dinámico aún requiere contratos operativos claros.

**Concept:** expansión controlada del flujo de trabajo

**Authored coaching hints:**

- ¿Quién es el dueño de cada nueva salida?
- ¿Qué límites impiden que las delegaciones dinámicas se vuelvan incontroladas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho adiciona agentes dinamicamente quando a complexidade da tarefa aumenta. O que deve permanecer explícito?

1. Apenas o comprimento máximo de resposta

   O comprimento não estabelece o controle da orquestração.

2. Só o avatar de cada agente.

   Os Avatares não definem responsabilidades.

3. Só a ordem em que os agentes foram nomeados

   A ordem de nomeamento não exprime dependências.

4. Propriedade, dependências, autoridade, orçamentos e responsabilidade de aceitação **[CORRECT]**

   O crescimento dinâmico ainda exige contratos operacionais claros.

**Concept:** Expansão controlada do fluxo de trabalho

**Authored coaching hints:**

- Quem é o dono de cada nova saída?
- Quais limites impedem que uma delegação dinâmica se torne descontrolada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-193:8d7b69cc258addc3fc0fa04f182b010af31f0f42b3459da235ade8f2cc61ede5 -->
## Question 193: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-193`

**Content revision:** `8d7b69cc258addc3fc0fa04f182b010af31f0f42b3459da235ade8f2cc61ede5`

### English

A worker reports a newly discovered prerequisite that affects several active tasks. What should the coordinator do?

1. Update the dependency graph and notify affected workers with the revised contract **[CORRECT]**

   Shared dependency changes need coordinated propagation.

2. Keep the discovery private until the final report

   Delayed notification can waste work or create conflicts.

3. Let each worker infer the change independently

   Independent inference risks inconsistent assumptions.

4. Erase prior plans without preserving history

   History is needed to explain why the plan changed.

**Concept:** Dependency change propagation

**Authored coaching hints:**

- Which workers rely on the invalidated assumption?
- How will all participants know which contract is current?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajador informa de un requisito previo recientemente descubierto que afecta a varias tareas activas. ¿Qué debería hacer el coordinador?

1. Actualizar el gráfico de dependencia y notificar a los trabajadores afectados con el contrato revisado **[CORRECT]**

   Los cambios de dependencia compartida necesitan una propagación coordinada.

2. Mantenga el descubrimiento privado hasta el informe final.

   Las notificaciones retrasadas pueden desperdiciar el trabajo o crear conflictos.

3. Que cada trabajador deduzca el cambio de forma independiente

   Las inferencias independientes arriesgan suposiciones inconsistentes.

4. Borrar los planes anteriores sin preservar la historia

   Se necesita historia para explicar por qué cambió el plan.

**Concept:** Propagación del cambio de dependencia

**Authored coaching hints:**

- ¿Qué trabajadores dependen de la suposición invalidada?
- ¿Cómo sabrán todos los participantes cuál es el contrato actual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalhador relata um pré-requisito recém-descoberto que afeta várias tarefas ativas. O que deve fazer o coordenador?

1. Atualizar o gráfico de dependência e notificar os trabalhadores afetados com o contrato revisto **[CORRECT]**

   As mudanças de dependência partilhadas necessitam de propagação coordenada.

2. Mantém a descoberta privada até o relatório final.

   A notificação atrasada pode desperdiçar o trabalho ou criar conflitos.

3. Deixe cada trabalhador inferir a mudança de forma independente

   A inferência independente corre o risco de suposições inconsistentes.

4. Excluir planos anteriores sem preservar o histórico

   A história é necessária para explicar por que o plano mudou.

**Concept:** Propagação da mudança de dependência

**Authored coaching hints:**

- Que trabalhadores se baseiam na suposição invalidada?
- Como saberão todos os participantes qual é o contrato atual?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-194:6217287e9af55a7c592e880b061d9385de20e51a9da1274062c62b0ccf18b27f -->
## Question 194: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-194`

**Content revision:** `6217287e9af55a7c592e880b061d9385de20e51a9da1274062c62b0ccf18b27f`

### English

A human resolves a conflict between two agents' designs. What should the workflow record before resuming?

1. Only that a human participated

   Participation alone does not convey the resolved contract.

2. The selected decision, scope, rationale, and affected task updates **[CORRECT]**

   An explicit decision record makes the intervention actionable and auditable.

3. Only the losing agent's name

   Blame is not a handoff.

4. A new confidence score

   Confidence does not capture the authorized choice.

**Concept:** Human-in-the-loop conflict recovery

**Authored coaching hints:**

- What must the workers know to proceed consistently?
- What will explain the chosen direction later?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un humano resuelve un conflicto entre los diseños de dos agentes. ¿Qué debe registrar el flujo de trabajo antes de reanudar?

1. Sólo que un humano participó

   La participación por sí sola no transmite el contrato resuelto.

2. La decisión seleccionada, el alcance, la justificación y las actualizaciones de las tareas afectadas **[CORRECT]**

   Un registro de decisiones explícito hace que la intervención sea ejecutable y auditable.

3. Sólo el nombre del agente perdedor.

   La culpa no es una entrega.

4. Un nuevo puntaje de confianza

   La confianza no captura la elección autorizada.

**Concept:** Recuperación de los conflictos humanos en el ciclo

**Authored coaching hints:**

- ¿Qué deben saber los trabajadores para proceder de manera consistente?
- ¿Qué explicará más adelante la dirección elegida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um ser humano resolve um conflito entre os projetos de dois agentes. O que deve registrar o fluxo de trabalho antes de retomar?

1. Só que um ser humano participou

   A participação por si só não transmite o contrato encerrado.

2. A decisão selecionada, o escopo, a justificação e as atualizações das tarefas afetadas **[CORRECT]**

   Um registro de decisão explícito torna a intervenção ativa e auditável.

3. Só o nome do agente perdedor.

   A culpa não é uma transferência.

4. Uma nova pontuação de confiança

   A confiança não capta a escolha autorizada.

**Concept:** Recuperação de conflitos com humanos no circuito

**Authored coaching hints:**

- O que devem saber os trabalhadores para prosseguir de forma consistente?
- O que explicará mais tarde a direção escolhida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-195:f2e4cc0514770c74f3f0e9c350bfda160228f1188ece4bf7be831cbdd9fc77a7 -->
## Question 195: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-195`

**Content revision:** `f2e4cc0514770c74f3f0e9c350bfda160228f1188ece4bf7be831cbdd9fc77a7`

### English

A coordinator has ten small, tightly coupled edits. Parallel agents would all need the same files and assumptions. What is a reasonable orchestration choice?

1. Always maximize the worker count

   Parallelism can increase coordination overhead and conflicts.

2. Duplicate the complete task ten times

   Duplication wastes effort and creates competing outputs.

3. Use a single coherent execution or serialize the coupled edits **[CORRECT]**

   Tightly coupled work may be safer and faster without parallel writers.

4. Remove task boundaries to reduce planning

   Removing boundaries increases ambiguity.

**Concept:** When not to parallelize

**Authored coaching hints:**

- Are the work units truly independent?
- Will coordination cost exceed the benefit of concurrency?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un coordinador tiene diez pequeñas ediciones estrechamente unidas. Los agentes paralelos necesitarían todos los mismos archivos y supuestos. ¿Cuál es una elección razonable de orquestación?

1. Siempre maximizar el número de trabajadores

   El paralelismo puede aumentar los gastos generales de coordinación y los conflictos.

2. Duplica la tarea completa diez veces

   La duplicación desperdicia esfuerzo y crea resultados competitivos.

3. Utilice una sola ejecución coherente o serialice las ediciones acopladas **[CORRECT]**

   El trabajo estrechamente unido puede ser más seguro y más rápido sin escritores paralelos.

4. Eliminar los límites de tareas para reducir la planificación

   Eliminar los límites aumenta la ambigüedad.

**Concept:** Cuándo no paralelalizar

**Authored coaching hints:**

- ¿Son realmente independientes las unidades de trabajo?
- ¿Excedirá el coste de la coordinación el beneficio de la concurrencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um coordenador tem dez pequenas edições, fortemente acopladas. Agentes paralelos precisariam dos mesmos arquivos e suposições. Qual é uma escolha razoável de orquestração?

1. Sempre maximizar o número de trabalhadores

   O paralelismo pode aumentar as despesas de coordenação e os conflitos.

2. Duplicar a tarefa completa dez vezes

   A duplicação desperdiça esforço e cria resultados concorrentes.

3. Use uma única execução coerente ou serialize as edições acopladas **[CORRECT]**

   O trabalho fortemente ligado pode ser mais seguro e mais rápido sem escritores paralelos.

4. Eliminar os limites das tarefas para reduzir o planejamento

   Remover os limites aumenta a ambigüidade.

**Concept:** Quando não paralelar

**Authored coaching hints:**

- As unidades de trabalho são verdadeiramente independentes?
- O custo da coordenação excederá o benefício da simultaneidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-196:cdf4fc07234fc0619e35dfcd58eed3cda3eb645c6f245ebf86ede70f731a4daa -->
## Question 196: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-196`

**Content revision:** `cdf4fc07234fc0619e35dfcd58eed3cda3eb645c6f245ebf86ede70f731a4daa`

### English

A multi-agent incident review finds no way to tell which worker introduced an unsafe tool call. What should future event records include?

1. Only a shared workflow label

   A shared label cannot attribute individual actions.

2. Only total duration

   Duration does not identify actors or requests.

3. Only the final coordinator response

   A summary omits necessary execution detail.

4. Worker identity, parent task, tool request, authorization result, and outcome **[CORRECT]**

   Attributed correlated events establish the action's provenance.

**Concept:** Cross-agent action attribution

**Authored coaching hints:**

- Can the investigator connect an effect to one actor?
- Which authorization boundary was crossed or enforced?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una revisión de incidentes entre varios agentes no encuentra manera de saber qué trabajador introdujo una llamada de herramienta insegura. ¿Qué deben incluir los registros futuros de acontecimientos?

1. Sólo una etiqueta de flujo de trabajo compartida

   Una etiqueta compartida no puede atribuir acciones individuales.

2. Sólo la duración total

   La duración no identifica a los actores ni a las solicitudes.

3. Sólo la respuesta final del coordinador

   Un resumen omite los detalles necesarios de la ejecución.

4. Identidad del agente, tarea principal, solicitud de herramienta, resultado de autorización y resultado de ejecución **[CORRECT]**

   Los eventos correlacionados atribuidos determinan la procedencia de la acción.

**Concept:** atribución de la acción entre agentes

**Authored coaching hints:**

- ¿Puede el investigador conectar un efecto a un actor?
- ¿Qué límite de autorización fue cruzado o aplicado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma revisão de incidentes de vários agentes não encontra nenhuma maneira de dizer qual trabalhador introduziu uma chamada de ferramenta insegura. O que devem incluir os registros futuros de eventos?

1. Apenas um rótulo de fluxo de trabalho compartilhado

   Um rótulo compartilhado não pode atribuir ações individuais.

2. Apenas a duração total

   A duração não identifica os agentes ou os pedidos.

3. Apenas a resposta final do coordenador

   Um resumo omite os detalhes necessários da execução.

4. Identidade do agente, tarefa principal, solicitação da ferramenta, resultado da autorização e resultado da execução **[CORRECT]**

   Os eventos correlacionados atribuídos determinam a origem da ação.

**Concept:** atribuição de ações entre agentes

**Authored coaching hints:**

- O investigador pode ligar um efeito a um ator?
- Que limite de autorização foi ultrapassado ou aplicado?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-197:e1f04d29f5abffa70cbbe0b69bdd1e7c3bfbce599bf84c220e75c6ee11b83b63 -->
## Question 197: Orchestrate multi-agent coordination

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-197`

**Content revision:** `e1f04d29f5abffa70cbbe0b69bdd1e7c3bfbce599bf84c220e75c6ee11b83b63`

### English

A workflow is being shut down after all deliverables are accepted. What is the best lifecycle closeout?

1. Confirm no active work, release resources, revoke unneeded access, and preserve records **[CORRECT]**

   Orderly closeout preserves accountability while ending unnecessary capability.

2. Delete every artifact to reduce clutter

   Artifacts may be required for audit and maintenance.

3. Keep all workers and credentials active indefinitely

   Idle authority and resources create unnecessary exposure.

4. Stop the coordinator without checking worker activity

   Workers may continue acting after an unchecked shutdown.

**Concept:** Workflow retirement and closeout

**Authored coaching hints:**

- Could any worker still produce side effects?
- What should end, and what should remain inspectable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de trabajo se cierra después de que todos los resultados sean aceptados. ¿Cuál es el mejor cierre del ciclo de vida?

1. Confirmar que no hay trabajo activo, liberar recursos, revocar el acceso innecesario y conservar registros **[CORRECT]**

   El cierre ordenado preserva la rendición de cuentas al tiempo que elimina las capacidades innecesarias.

2. Eliminar todos los artefactos para reducir el desorden

   Los artefactos pueden ser necesarios para la auditoría y el mantenimiento.

3. Mantenga todos los trabajadores y credenciales activos indefinidamente

   La autoridad y los recursos vacíos crean una exposición innecesaria.

4. Detener al coordinador sin comprobar la actividad del trabajador

   Los trabajadores podrán seguir actuando después de un cierre no controlado.

**Concept:** Retiro y cierre del flujo de trabajo

**Authored coaching hints:**

- ¿Podría algún trabajador producir efectos secundarios?
- ¿Qué debe terminar, y qué debe seguir siendo inspectable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo de trabalho está a ser desligado após a aceitação de todas as entregas. Qual é a melhor conclusão do ciclo de vida?

1. Confirmar nenhum trabalho ativo, liberar recursos, revogar acesso desnecessário e preservar registros **[CORRECT]**

   Um fechamento ordenado preserva a responsabilidade ao mesmo tempo em que elimina as capacidades desnecessárias.

2. Eliminar todos os artefatos para reduzir a conmerge

   Os artefatos podem ser necessários para auditoria e manutenção.

3. Mantenha todos os trabalhadores e credenciais ativos indefinidamente

   A vaidade da autoridade e dos recursos cria exposição desnecessária.

4. Parar o coordenador sem verificar a atividade dos trabalhadores

   Os trabalhadores podem continuar a agir após uma paralisação não controlada.

**Concept:** Retiro e fechamento do fluxo de trabalho

**Authored coaching hints:**

- Um trabalhador pode ainda produzir efeitos secundários?
- O que deve acabar, e o que deve continuar inspecionável?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-198:9ffa5818a5ae96c7c9bbe411a66529be7a8db8bbe72306c1d575d3247d6f9b53 -->
## Question 198: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-198`

**Content revision:** `9ffa5818a5ae96c7c9bbe411a66529be7a8db8bbe72306c1d575d3247d6f9b53`

### English

An agent can either read public documentation or delete production records. How should autonomy differ?

1. Both should require identical approvals

   Uniform approval ignores materially different impact.

2. Permit bounded low-risk reads and require explicit controlled authorization for deletion **[CORRECT]**

   Risk-based autonomy reserves strong controls for consequential actions.

3. Deletion should be automatic because it is faster

   Speed does not justify irreversible impact.

4. All tool access implies equal risk

   Tools differ in operational and compliance risk.

**Concept:** Risk-classified autonomy

**Authored coaching hints:**

- Which action is difficult to reverse?
- Where does human judgment materially change the risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente puede leer la documentación pública o borrar los registros de producción. ¿Qué diferencia debe tener la autonomía?

1. Ambos deben requerir aprobaciones idénticas.

   La aprobación uniforme ignora un impacto sustancialmente diferente.

2. Permitir lecturas limitadas de bajo riesgo y requerir una autorización controlada explícita para su eliminación **[CORRECT]**

   La autonomía basada en el riesgo se reserva fuertes controles para las acciones consecuentes.

3. La eliminación debe ser automática porque es más rápida.

   La velocidad no justifica un impacto irreversible.

4. Todos los accesos a las herramientas implican el mismo riesgo

   Las herramientas difieren en el riesgo operativo y en el riesgo de conformidad.

**Concept:** Autonomía clasificada por riesgo

**Authored coaching hints:**

- ¿Qué acción es difícil de revertir?
- ¿Dónde cambia materialmente el juicio humano el riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente pode ler documentação pública ou excluir registros de produção. Como deve ser diferente a autonomia?

1. Ambas devem exigir aprovações idênticas

   A aprovação uniforme ignora um impacto substancialmente diferente.

2. Permitir leituras limitadas de baixo risco e exigir autorização controlada explícita para a exclusão **[CORRECT]**

   A autonomia baseada no risco reserva-se fortes controles para as ações consequentes.

3. A exclusão deve ser automática porque é mais rápida

   A velocidade não justifica um impacto irreversível.

4. O acesso a todas as ferramentas implica um risco igual

   As ferramentas diferem em termos de risco operacional e de conformidade.

**Concept:** Autonomia classificada por risco

**Authored coaching hints:**

- Qual ação é difícil de reverter?
- Onde o julgamento humano muda substancialmente o risco?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-199:53b4fba007b5bd9eb29398e4a9304cc464dc3a8f711be3a691610829c71d7985 -->
## Question 199: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-199`

**Content revision:** `53b4fba007b5bd9eb29398e4a9304cc464dc3a8f711be3a691610829c71d7985`

### English

An agent promises not to use its administrator credential for unrelated operations. What stronger safeguard is appropriate?

1. A more emphatic promise

   Emphasis does not reduce technical authority.

2. A longer role description

   Role text is not access enforcement.

3. A credential scoped to the task's required resources and actions **[CORRECT]**

   Least privilege constrains impact even if the agent makes a mistake.

4. A monthly review of promises

   Periodic review does not prevent unauthorized actions.

**Concept:** Least-privilege enforcement

**Authored coaching hints:**

- What remains possible if the instructions are misunderstood?
- Can the service itself reject out-of-scope operations?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente promete no utilizar su credencial de administrador para operaciones no relacionadas. ¿Qué protección más fuerte es apropiada?

1. Una promesa más enfática

   El énfasis no reduce la autoridad técnica.

2. Una descripción más larga del papel

   El texto de papel no es la aplicación del acceso.

3. Una credencial restringida a los recursos y las acciones requeridos por la tarea **[CORRECT]**

   El mínimo privilegio limita el impacto incluso si el agente comete un error.

4. Una revisión mensual de las promesas

   La revisión periódica no impide acciones no autorizadas.

**Concept:** La aplicación de los privilegios mínimos

**Authored coaching hints:**

- ¿Qué queda posible si las instrucciones son mal entendidas?
- ¿Puede el propio servicio rechazar operaciones fuera de su alcance?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente promete não utilizar a sua credencial de administrador para operações não relacionadas. Que proteção mais forte é apropriada?

1. Uma promessa mais enfática

   A ênfase não reduz a autoridade técnica.

2. Uma descrição mais longa do papel

   O texto do papel não é a aplicação do acesso.

3. Uma credencial restrita aos recursos e às ações necessários para a tarefa **[CORRECT]**

   O mínimo privilégio limita o impacto mesmo que o agente cometa um erro.

4. Uma revisão mensal das promessas

   A revisão periódica não impede ações não autorizadas.

**Concept:** A aplicação dos menores privilégios

**Authored coaching hints:**

- O que é possível se as instruções forem mal entendidas?
- O próprio serviço pode recusar operações fora do seu alcance?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-200:0bc6b9b720f0ff6af5f4d378d821ae90766b95c49a5de8510928d4e0d5fe0347 -->
## Question 200: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-200`

**Content revision:** `0bc6b9b720f0ff6af5f4d378d821ae90766b95c49a5de8510928d4e0d5fe0347`

### English

A production deployment requires human approval. Which workflow control best enforces that boundary when configured?

1. A comment saying approval is preferred

   Preference text does not block execution.

2. An agent-generated confidence threshold

   Confidence cannot replace the required decision owner.

3. A deployment log written afterward

   Afterward logging cannot prevent deployment.

4. A protected environment with required reviewers on the deployment job **[CORRECT]**

   Environment review gates pause the targeted job before execution.

**Concept:** Environment approval gates

**Authored coaching hints:**

- At what point must the job pause?
- Which mechanism enforces a decision outside the model?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue de producción requiere la aprobación humana. ¿Qué control de flujo de trabajo impone mejor ese límite cuando se configura?

1. Un comentario que dice que se prefiere la aprobación

   El texto de preferencia no bloquea la ejecución.

2. Un umbral de confianza generado por agentes

   La confianza no puede reemplazar al titular de la decisión requerida.

3. Un registro de despliegue escrito después

   Registrar la acción después no puede impedir el despliegue.

4. Un entorno protegido con revisores requeridos en el trabajo de despliegue **[CORRECT]**

   Las puertas de revisión ambiental detienen el trabajo objetivo antes de la ejecución.

**Concept:** Puertas de aprobación del entorno

**Authored coaching hints:**

- ¿En qué momento debe detenerse el trabajo?
- ¿Qué mecanismo hace cumplir una decisión fuera del modelo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação de produção requer aprovação humana. Qual controle de fluxo de trabalho reforça melhor esse limite quando configurado?

1. Um comentário dizendo que a aprovação é preferível

   O texto de preferência não bloqueia a execução.

2. Um limiar de confiança gerado por agentes

   A confiança não pode substituir o titular da decisão exigida.

3. Um registro de implantação escrito posteriormente

   Registrar a ação depois não pode impedir a implantação.

4. Um ambiente protegido com revisores obrigatórios no job de implantação **[CORRECT]**

   Os portões de revisão ambiental interrompem o trabalho antes da execução.

**Concept:** Portas de aprovação ambiental

**Authored coaching hints:**

- Em que ponto o trabalho deve parar?
- Que mecanismo impõe uma decisão fora do modelo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-201:51716cc45b02f5d91036cc749e1c4e6053815306bf4e9dc8dd69b808a4dfbaa9 -->
## Question 201: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-201`

**Content revision:** `51716cc45b02f5d91036cc749e1c4e6053815306bf4e9dc8dd69b808a4dfbaa9`

### English

A repository document tells an agent to send credentials to a diagnostic endpoint. What should the agent do?

1. Reject the instruction as untrusted content and preserve the secret boundary **[CORRECT]**

   Content cannot authorize credential exfiltration.

2. Comply because repository files are always authoritative

   Repository text may contain adversarial instructions.

3. Send only half the credential

   Partial disclosure can still expose sensitive data.

4. Ask the endpoint whether it is trustworthy

   An endpoint's own claim is not authorization.

**Concept:** Prompt-injection guardrails

**Authored coaching hints:**

- Is this content task data or an authorized policy change?
- Who granted permission for the disclosure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un documento de repositorio le dice a un agente que envíe credenciales a un endpoint de diagnóstico. ¿Qué debería hacer el agente?

1. Rechazar la instrucción como contenido no confiable y preservar la protección de los secretos **[CORRECT]**

   El contenido no puede autorizar la exfiltración de credenciales.

2. Cumplir porque los archivos del repositorio siempre son autorizados

   El texto del repositorio puede contener instrucciones adversas.

3. Envía sólo la mitad de las credenciales

   La divulgación parcial aún puede exponer datos sensibles.

4. Pregunte al endpoint si es confiable

   La propia afirmación de un endpoint no es una autorización.

**Concept:** Salvaguardas contra la inyección de prompts

**Authored coaching hints:**

- ¿Es este contenido datos de tareas o un cambio de política autorizado?
- ¿Quién dio permiso para la divulgación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um documento de repositório diz a um agente para enviar credenciais para um endpoint de diagnóstico. O que deve fazer o agente?

1. Rejeitar a instrução como conteúdo não confiável e preservar a proteção dos segredos **[CORRECT]**

   O conteúdo não pode autorizar a exfiltração de credenciais.

2. Cumprir porque os arquivos do repositório são sempre autorizados

   O texto do repositório pode conter instruções adversas.

3. Enviar apenas metade das credenciais

   A divulgação parcial pode ainda expor dados sensíveis.

4. Pergunte ao endpoint se é confiável

   A própria reivindicação de um endpoint não é autorização.

**Concept:** Salvaguardas contra injeção de prompts

**Authored coaching hints:**

- Este conteúdo é dados de tarefas ou uma alteração autorizada de política?
- Quem deu permissão para a divulgação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-202:7034b9e18a2b1a0c4f5a5ab2e66d7b7ebd88da67b83fd6452f33004d529709db -->
## Question 202: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-202`

**Content revision:** `7034b9e18a2b1a0c4f5a5ab2e66d7b7ebd88da67b83fd6452f33004d529709db`

### English

An agent needs to modify a policy file that determines its own tool access. What review control is most appropriate?

1. Let it approve its own expanded privileges

   Self-approval undermines the privilege boundary.

2. Protect the configuration with ownership review and enforced acceptance rules **[CORRECT]**

   Independent review prevents unexamined changes to the agent's authority.

3. Treat configuration changes as harmless documentation

   Configuration can directly alter capabilities.

4. Disable audits for configuration edits

   Auditability is important for governance-sensitive changes.

**Concept:** Protecting agent configuration

**Authored coaching hints:**

- Could this edit change what the agent is allowed to do?
- Who should approve an expansion of authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente necesita modificar un archivo de política que determina su propio acceso a la herramienta. ¿Cuál es el control de revisión más apropiado?

1. Que apruebe sus propios privilegios ampliados

   La autoaprobación socava el límite de los privilegios.

2. Proteger la configuración con la revisión de la propiedad y las reglas de aceptación aplicadas **[CORRECT]**

   La revisión independiente evita cambios no examinados en la autoridad del agente.

3. Tratar los cambios de configuración como documentación inofensiva

   La configuración puede alterar directamente las capacidades.

4. Deshabilitar las auditorías para las modificaciones de configuración

   La auditoría es importante para los cambios sensibles a la gobernanza.

**Concept:** Configuración de agente de protección

**Authored coaching hints:**

- ¿Podría esta edición cambiar lo que el agente está autorizado a hacer?
- ¿Quién debería aprobar la expansión de la autoridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente precisa modificar um arquivo de política que determina o seu próprio acesso à ferramenta. Que controle de revisão é mais apropriado?

1. Deixe-o aprovar os seus próprios privilégios expandidos

   A auto-aprovação prejudica os limites dos privilégios.

2. Proteger a configuração com revisão pelos responsáveis e regras de aceitação obrigatórias **[CORRECT]**

   A revisão independente impede mudanças não examinadas na autoridade do agente.

3. Tratar as alterações de configuração como documentação inofensiva

   A configuração pode alterar diretamente as capacidades.

4. Desativar auditorias para modificações de configuração

   A auditabilidade é importante para as mudanças sensíveis à governação.

**Concept:** Configuração de agente de proteção

**Authored coaching hints:**

- Esta edição pode mudar o que o agente tem permissão para fazer?
- Quem deve aprovar a expansão da autoridade?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-203:36b19b48f1242b77b3ef93de069d5e6469f10503b1216c292fd2d41e07f4c2ae -->
## Question 203: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-203`

**Content revision:** `36b19b48f1242b77b3ef93de069d5e6469f10503b1216c292fd2d41e07f4c2ae`

### English

A human approves a deployment to staging. The agent then proposes production deployment of a newer commit. What authorization is needed?

1. None; any deployment approval covers all environments

   Approval scope is not automatically universal.

2. A reused approval string from the staging run

   A copied string does not extend authority.

3. A decision covering the new revision and production impact **[CORRECT]**

   Materially different target and code require appropriate authorization.

4. The agent's assurance that the newer commit is similar

   Similarity claims do not bind human approval to new work.

**Concept:** Specific approval scope

**Authored coaching hints:**

- What environment and revision did the human actually review?
- Which proposed effects are new?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona aprueba un despliegue en staging. Luego, el agente propone desplegar en producción un commit más reciente. ¿Qué autorización se necesita?

1. Ninguna; cualquier aprobación de despliegue cubre todos los entornos

   El alcance de la aprobación no es automáticamente universal.

2. Un texto de aprobación reutilizado de la ejecución en staging

   Una cadena copiada no extiende autoridad.

3. Una decisión que cubra la nueva revisión y el impacto en la producción **[CORRECT]**

   El objetivo y el código materialmente diferentes requieren una autorización adecuada.

4. La garantía del agente de que el nuevo commit es similar

   Las afirmaciones de similitud no obligan la aprobación humana a un nuevo trabajo.

**Concept:** Alcance específico de una aprobación

**Authored coaching hints:**

- ¿Qué entorno y revisión revisó realmente el humano?
- ¿Qué efectos propuestos son nuevos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa aprova uma implantação em staging. Depois, o agente propõe implantar em produção um commit mais recente. Qual autorização é necessária?

1. Nenhuma; qualquer aprovação de implantação abrange todos os ambientes

   O escopo da aprovação não é automaticamente universal.

2. Um texto de aprovação reutilizado da execução em staging

   Uma cadeia copiada não estende autoridade.

3. Decisão relativa à nova revisão e ao impacto na produção **[CORRECT]**

   Objetivo e código materialmente diferentes exigem autorização adequada.

4. A garantia do agente de que o novo commit é semelhante

   As alegações de semelhança não vinculam a aprovação humana a novos trabalhos.

**Concept:** Escopo específico de uma aprovação

**Authored coaching hints:**

- Que ambiente e revisão o ser humano analisou realmente?
- Que efeitos propostos são novos?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-204:2f047eba34936243a399f93220a870eab25a5bd62bbee56524b0708a774eda31 -->
## Question 204: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-204`

**Content revision:** `2f047eba34936243a399f93220a870eab25a5bd62bbee56524b0708a774eda31`

### English

A task is urgent but a proposed action violates an explicit data-residency policy. What should the agent do?

1. Proceed and document urgency afterward

   Urgency does not waive a binding policy.

2. Copy the data through a different tool

   Changing tools does not remove the policy violation.

3. Ask another agent to perform the transfer

   Delegation cannot authorize forbidden conduct.

4. Block the action and escalate through the authorized policy path **[CORRECT]**

   Policy conflicts require a legitimate resolution before action.

**Concept:** Compliance boundary enforcement

**Authored coaching hints:**

- Does the policy govern the tool or the data's destination?
- Who may resolve the exception request?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea es urgente, pero una acción propuesta viola una política explícita de residencia de datos. ¿Qué debería hacer el agente?

1. Proceder y documentar la urgencia después

   La urgencia no renuncia a una política vinculante.

2. Copie los datos a través de una herramienta diferente

   El cambio de herramientas no elimina la violación de la política.

3. Pida a otro agente que realice la transferencia

   La delegación no puede autorizar una conducta prohibida.

4. Bloquear la acción y remitir el conflicto por la vía autorizada de políticas **[CORRECT]**

   Los conflictos políticos requieren una resolución legítima antes de actuar.

**Concept:** aplicación de los límites de cumplimiento

**Authored coaching hints:**

- ¿La política regula la herramienta o el destino de los datos?
- ¿Quién puede resolver la solicitud de excepción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa é urgente, mas uma ação proposta viola uma política explícita de residência de dados. O que deve fazer o agente?

1. Proceder e documentar a urgência depois

   A urgência não renuncia a uma política vinculativa.

2. Copiar os dados através de uma ferramenta diferente

   A alteração das ferramentas não elimina a violação da política.

3. Peça a outro agente para fazer a transferência.

   A delegação não pode autorizar a conduta proibida.

4. Bloquear a ação e encaminhar o conflito pelo processo autorizado de políticas **[CORRECT]**

   Os conflitos políticos exigem uma resolução legítima antes de agir.

**Concept:** A aplicação dos limites de conformidade

**Authored coaching hints:**

- A política rege a ferramenta ou o destino dos dados?
- Quem pode resolver o pedido de exceção?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-205:825b433a5388d45c0c4e33da9eb62707299c2a4ac6dfd2b78694f9ae71b595e7 -->
## Question 205: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-205`

**Content revision:** `825b433a5388d45c0c4e33da9eb62707299c2a4ac6dfd2b78694f9ae71b595e7`

### English

An agent logs complete tool payloads, including customer identifiers unnecessary for debugging. What should accountability logging prioritize?

1. Traceability with sensitive-data minimization and controlled access **[CORRECT]**

   Useful audit evidence can be retained without indiscriminate disclosure.

2. Maximum raw data regardless of purpose

   More data can increase privacy and security exposure.

3. No logs at all

   No logs prevents accountability.

4. Public logs so every observer can investigate

   Public access is inappropriate for sensitive operational records.

**Concept:** Privacy-preserving auditability

**Authored coaching hints:**

- Which fields are actually needed to reconstruct the action?
- Who should be allowed to inspect them?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente registra las cargas útiles completas de las herramientas, incluidos los identificadores de clientes innecesarios para la depuración. ¿Qué debe priorizar la rendición de cuentas?

1. Trazabilidad con minimización de datos sensibles y acceso controlado **[CORRECT]**

   Las pruebas de auditoría útiles pueden conservarse sin divulgación indiscriminada.

2. Datos en bruto máximos independientemente de la finalidad

   Más datos pueden aumentar la exposición a la privacidad y la seguridad.

3. No hay registros en absoluto

   La ausencia de registros impide la rendición de cuentas.

4. Registros públicos para que cada observador pueda investigar

   El acceso público es inapropiado para registros operativos sensibles.

**Concept:** Auditibilidad que preserve la privacidad

**Authored coaching hints:**

- ¿Qué campos son realmente necesarios para reconstruir la acción?
- ¿A quién debería permitirse inspeccionarlas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente registra os payloads completos das ferramentas, incluindo identificadores de clientes desnecessários para depuração. O que os logs de prestação de contas devem priorizar?

1. Traçabilidade com minimização dos dados sensíveis e acesso controlado **[CORRECT]**

   As evidências de auditoria úteis podem ser mantidas sem divulgação indiscriminada.

2. Dados brutos máximos independentemente da finalidade

   Mais dados podem aumentar a exposição à privacidade e à segurança.

3. Não há registros.

   A ausência de registros impede a prestação de contas.

4. Registros públicos para que cada observador possa investigar

   O acesso público é inadequado para registros operacionais sensíveis.

**Concept:** Auditibilidade que preserva a privacidade

**Authored coaching hints:**

- Que campos são realmente necessários para reconstruir a ação?
- Quem deve ter permissão para inspecioná-los?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-206:0421ca7eb6923666fcf2f0dc96f9a9d5868ffe9c0a0e9d781a7d76483c8ad361 -->
## Question 206: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-206`

**Content revision:** `0421ca7eb6923666fcf2f0dc96f9a9d5868ffe9c0a0e9d781a7d76483c8ad361`

### English

An irreversible database cleanup is within the broad task goal but its exact targets are not defined. What should happen before execution?

1. Delete a sample to infer the intended scope

   Even a sample deletion can have irreversible effects.

2. Produce an inspectable target set and obtain explicit authorization **[CORRECT]**

   Precise targets support an informed consequential decision.

3. Assume broad goal wording approves every matching record

   Broad intent is insufficient for undefined destructive scope.

4. Let the model decide which records seem expendable

   Model judgment cannot substitute for data-owner authority.

**Concept:** Irreversible action authorization

**Authored coaching hints:**

- Can the approver identify exactly what will be removed?
- What ambiguity becomes dangerous after the action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una limpieza irreversible de base de datos está incluida en el objetivo general, pero no se definieron los registros exactos que se eliminarán. ¿Qué debe ocurrir antes de ejecutar?

1. Eliminar una muestra para inferir el alcance previsto

   Incluso una eliminación de la muestra puede tener efectos irreversibles.

2. Presentar un conjunto de registros objetivo que pueda revisarse y obtener autorización explícita **[CORRECT]**

   Los objetivos precisos apoyan una decisión consecuente informada.

3. Supongamos que la redacción general del objetivo apruebe todos los registros correspondientes

   La intención amplia es insuficiente para un alcance destructivo indefinido.

4. Deja que el modelo decida qué registros parecen desechables

   El juicio modelo no puede sustituir a la autoridad de titularidad de los datos.

**Concept:** Autorización de acción irreversible

**Authored coaching hints:**

- ¿Puede el aprobador identificar exactamente lo que se eliminará?
- ¿Qué ambigüedad se vuelve peligrosa después de la acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma limpeza irreversível de banco de dados está incluída no objetivo geral, mas os registros exatos que serão excluídos não foram definidos. O que deve acontecer antes da execução?

1. Eliminar uma amostra para inferir o escopo previsto

   Mesmo uma exclusão de amostras pode ter efeitos irreversíveis.

2. Apresentar um conjunto de registros-alvo que possa ser revisado e obter autorização explícita **[CORRECT]**

   Os objetivos precisos apoiam uma decisão conseqüente informada.

3. Suponha que a redação geral do objetivo aprova todos os registros correspondentes

   A intenção ampla é insuficiente para um escopo destrutivo indefinido.

4. Deixe o modelo decidir quais registros parecem desperdiçáveis

   O modelo de decisão não pode substituir a autoridade de titularidade dos dados.

**Concept:** Autorização de ação irreversível

**Authored coaching hints:**

- O aprovador pode identificar exatamente o que será removido?
- Que ambiguidade torna-se perigosa após a ação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-207:bff1ce392c86e19ed4c9cd4df49259fb99bfc7f5c4f28d9bd56f0a9f751ee4fa -->
## Question 207: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-207`

**Content revision:** `bff1ce392c86e19ed4c9cd4df49259fb99bfc7f5c4f28d9bd56f0a9f751ee4fa`

### English

A team asks whether every file read should require human approval. What is the best policy principle?

1. Every operation must have the same gate

   Uniform gating can add friction without proportional benefit.

2. No reads can ever expose sensitive data

   Reads can disclose confidential information.

3. Classify reads by data sensitivity and scope, automating only authorized low-risk access **[CORRECT]**

   Risk includes disclosure, not only mutation.

4. All reads are equivalent to production writes

   Read and write impact differ and require context-specific assessment.

**Concept:** Read risk and proportional controls

**Authored coaching hints:**

- Can observation itself expose protected information?
- Which reads are already authorized within the task?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo pregunta si cada archivo leído debe requerir la aprobación humana. ¿Cuál es el mejor principio de política?

1. Cada operación debe tener la misma puerta.

   El revestimiento uniforme puede agregar fricción sin beneficio proporcional.

2. Ninguna lectura puede exponer datos sensibles

   Los lectores pueden revelar información confidencial.

3. Clasificar las lecturas por sensibilidad y alcance de los datos, automatizando únicamente el acceso autorizado de bajo riesgo **[CORRECT]**

   El riesgo incluye la divulgación, no sólo la mutación.

4. Todas las lecturas son equivalentes a la producción escribe

   El impacto de leer y escribir difiere y requiere una evaluación específica del contexto.

**Concept:** Leer el riesgo y los controles proporcionales

**Authored coaching hints:**

- ¿Puede la observación misma exponer información protegida?
- ¿Qué lecturas ya están autorizadas dentro de la tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe pergunta se cada arquivo lido deve exigir aprovação humana. Qual é o melhor princípio da política?

1. Cada operação deve ter a mesma porta.

   A abertura uniforme pode adicionar atrito sem benefício proporcional.

2. Nenhuma leitura pode expor dados confidenciais

   Os leitores podem revelar informações confidenciais.

3. Classificar leituras por sensibilidade e alcance dos dados, automatizando apenas o acesso autorizado de baixo risco **[CORRECT]**

   O risco inclui divulgação, não apenas mutação.

4. Todas as leituras são equivalentes às escrituras de produção

   O impacto da leitura e da escrita difere e exige uma avaliação específica do contexto.

**Concept:** Leia os riscos e os controles proporcionais

**Authored coaching hints:**

- A própria observação pode expor informações protegidas?
- Que leituras já estão autorizadas dentro da tarefa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-208:acccdb8520bc004dceea96818deebaa99d18c7cae50b6be324e6fdb095f9b379 -->
## Question 208: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-208`

**Content revision:** `acccdb8520bc004dceea96818deebaa99d18c7cae50b6be324e6fdb095f9b379`

### English

An agent discovers a policy gate is misconfigured and suggests removing it to finish faster. What is the appropriate response?

1. Remove the gate because it blocks progress

   A blocker does not justify discarding the control.

2. Let the agent decide which controls are unnecessary

   The agent cannot unilaterally waive governance.

3. Bypass it with another identity

   Identity switching defeats the intended boundary.

4. Escalate the misconfiguration and repair it through an authorized change **[CORRECT]**

   Repair preserves the control's purpose while resolving the defect.

**Concept:** Guardrail failure handling

**Authored coaching hints:**

- Is the problem the control's purpose or its implementation?
- Who can authorize a change to the enforcement path?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente descubre que una puerta de seguridad está mal configurada y sugiere quitarla para terminar más rápido. ¿Cuál es la respuesta apropiada?

1. Quita la puerta porque bloquea el progreso

   Un bloqueador no justifica descartar el control.

2. Deje que el agente decida qué controles son innecesarios

   El agente no puede renunciar unilateralmente al gobierno.

3. Evitarlo con otra identidad.

   El cambio de identidad derrota el límite previsto.

4. Escalar la configuración incorrecta y repararla mediante un cambio autorizado **[CORRECT]**

   La reparación preserva el propósito del control mientras se resuelve el defecto.

**Concept:** Manejo de fallas de la barandilla de seguridad

**Authored coaching hints:**

- ¿El problema es el propósito del control o su aplicación?
- ¿Quién puede autorizar un cambio en el camino de la aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente descobre que um portal de política está mal configurado e sugere removê-lo para terminar mais rápido. Qual é a resposta apropriada?

1. Remova o portão porque impede o progresso.

   Um bloqueador não justifica a rejeição do controle.

2. Deixe o agente decidir quais controles são desnecessários

   O agente não pode renunciar unilateralmente à governança.

3. Desviá-lo com outra identidade.

   A mudança de identidade derrota o limite pretendido.

4. Escalar a configuração incorreta e repará-la por meio de uma alteração autorizada **[CORRECT]**

   A reparação preserva o propósito do controle enquanto resolve o defeito.

**Concept:** Manutenção de falhas do guardrail

**Authored coaching hints:**

- O problema é a finalidade do controle ou a sua aplicação?
- Quem pode autorizar uma mudança no caminho da aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails>

<!-- certification-coach-question:agentic-209:420d7d740a70ea63dae83c89bb4dde7c7a5cd2892468070510b9a1322bbbeb82 -->
## Question 209: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-209`

**Content revision:** `420d7d740a70ea63dae83c89bb4dde7c7a5cd2892468070510b9a1322bbbeb82`

### English

A team uses agent instructions as its only barrier against external data transfer. What additional control is most useful?

1. Enforced tool, credential, and network boundaries appropriate to the runtime **[CORRECT]**

   Runtime enforcement limits effects independently of model compliance.

2. A longer reminder about confidentiality

   More text remains advisory.

3. An agent-generated promise before each transfer

   Self-promises do not enforce destination restrictions.

4. A public log after every transfer

   After-the-fact disclosure logging cannot prevent transfer.

**Concept:** Defense in depth

**Authored coaching hints:**

- Which controls still work if the model follows malicious content?
- Where can a forbidden operation be rejected before effect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo utiliza las instrucciones del agente como su única barrera contra la transferencia externa de datos. ¿Qué control adicional es más útil?

1. Restricciones de herramientas, credenciales y red aplicadas efectivamente en el entorno de ejecución **[CORRECT]**

   La aplicación del tiempo de ejecución limita los efectos independientemente del cumplimiento del modelo.

2. Un recordatorio más largo sobre la confidencialidad

   Más texto sigue siendo aconsejable.

3. Una promesa generada por el agente antes de cada transferencia

   Las auto-promesas no imponen restricciones de destino.

4. Un registro público después de cada transferencia

   El registro después de la divulgación de los hechos no puede impedir la transferencia.

**Concept:** Defensa en profundidad

**Authored coaching hints:**

- ¿Qué controles siguen funcionando si el modelo sigue contenido malicioso?
- ¿Dónde se puede rechazar una operación prohibida antes de que sea efectiva?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe usa as instruções do agente como a única barreira contra a transferência de dados externos. Que controle adicional é mais útil?

1. Restrições de ferramentas, credenciais e rede efetivamente aplicadas no ambiente de execução **[CORRECT]**

   A aplicação do tempo de execução limita os efeitos independentemente da conformidade do modelo.

2. Um lembrete mais longo sobre a confidencialidade

   Mais texto continua a ser aconselhável.

3. Uma promessa gerada por um agente antes de cada transferência

   As auto-promessas não impõem restrições de destino.

4. Um registro público após cada transferência

   Os registros após a divulgação dos fatos não podem impedir a transferência.

**Concept:** Defesa em profundidade

**Authored coaching hints:**

- Quais controles ainda funcionam se o modelo seguir conteúdo malicioso?
- Onde é que uma operação proibida pode ser rejeitada antes de entrar em vigor?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-210:70b53b7acf4e0063d222714c71bf9d252a47910598c32bd71349ddc99f1813f2 -->
## Question 210: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-210`

**Content revision:** `70b53b7acf4e0063d222714c71bf9d252a47910598c32bd71349ddc99f1813f2`

### English

An agent's proposed change affects regulated retention rules. All tests pass. What additional judgment is required?

1. None, because tests cover all compliance decisions

   Tests cannot independently authorize a policy change.

2. Review by the accountable policy or compliance owner **[CORRECT]**

   Policy-sensitive changes require the relevant decision owner.

3. A popularity vote among agents

   Agent votes do not confer compliance authority.

4. A confidence score above a chosen threshold

   Confidence does not replace accountable authorization.

**Concept:** Human judgment for compliance-sensitive changes

**Authored coaching hints:**

- Who owns the legal or policy interpretation?
- Can technical validity answer whether the change is permitted?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El cambio propuesto por un agente afecta a las reglas de retención reguladas. Pasaron todas las pruebas. ¿Qué juicio adicional se requiere?

1. Ninguna, porque las pruebas abarcan todas las decisiones de cumplimiento

   Las pruebas no pueden autorizar de forma independiente un cambio de política.

2. Revisión por parte del titular responsable de la política o del cumplimiento **[CORRECT]**

   Los cambios sensibles a las políticas requieren que el titular de la decisión corresponda.

3. Un voto de popularidad entre los agentes

   Los votos de los agentes no confieren autoridad de cumplimiento.

4. Un puntaje de confianza por encima de un umbral elegido

   La confianza no sustituye la autorización responsable.

**Concept:** Juicio humano de cambios sensibles al cumplimiento

**Authored coaching hints:**

- ¿Quién es el dueño de la interpretación legal o política?
- ¿Puede la validez técnica responder si el cambio es permitido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A alteração proposta por um agente afeta as regras regulamentadas de retenção. Todos os testes passam. Que julgamento adicional é necessário?

1. Nenhuma, porque os testes abrangem todas as decisões de conformidade

   Os testes não podem autorizar de forma independente uma alteração da política.

2. Revisão pelo responsável pela política ou pela conformidade **[CORRECT]**

   As alterações sensíveis às políticas exigem o titular da decisão em causa.

3. Um voto popular entre os agentes

   Os votos dos agentes não conferem autoridade de conformidade.

4. Uma pontuação de confiança acima de um limiar escolhido

   A confiança não substitui a autorização responsável.

**Concept:** Julgamento humano de mudanças sensíveis à conformidade

**Authored coaching hints:**

- Quem é o proprietário da interpretação legal ou política?
- Pode a validade técnica responder se a alteração é permitida?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-211:b473e4f04a3ff144a52e56acba623e59dc3c09883c216cc0abf50dbfddbc0352 -->
## Question 211: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-211`

**Content revision:** `b473e4f04a3ff144a52e56acba623e59dc3c09883c216cc0abf50dbfddbc0352`

### English

A human denies an agent's proposed destructive action. What should the agent do?

1. Rephrase the same action and execute it

   Rephrasing does not change the denied effect.

2. Delegate it to another agent

   Delegation cannot bypass denial.

3. Preserve the denial and continue only within remaining authorized scope **[CORRECT]**

   The decision remains binding while safe alternatives may remain possible.

4. Treat silence afterward as approval

   Silence is not a replacement authorization.

**Concept:** Respecting approval decisions

**Authored coaching hints:**

- Does changing the performer change the denied operation?
- Which work remains permitted?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un ser humano niega la acción destructiva propuesta por un agente. ¿Qué debería hacer el agente?

1. Reformula la misma acción y ejecutarla

   La reformulación no cambia el efecto negado.

2. Delegue a otro agente.

   La delegación no puede evitar la negación.

3. Preservar la negación y continuar sólo dentro del alcance autorizado restante **[CORRECT]**

   La decisión sigue siendo vinculante mientras que pueden seguir siendo posibles alternativas seguras.

4. Tratar el silencio después como aprobación

   El silencio no es una autorización de reemplazo.

**Concept:** Respetar las decisiones de aprobación

**Authored coaching hints:**

- ¿Cambiar el intérprete cambia la operación negada?
- ¿Qué trabajo queda permitido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um ser humano nega a ação destrutiva proposta por um agente. O que deve fazer o agente?

1. Reformula a mesma ação e executa-a

   A reformulação não muda o efeito negado.

2. Delegue-o para outro agente.

   A delegação não pode ignorar a negação.

3. Preservar a recusa e continuar apenas dentro do escopo que permanece autorizado **[CORRECT]**

   A decisão continua a ser vinculante, enquanto alternativas seguras podem continuar possíveis.

4. Trate o silêncio depois como aprovação

   O silêncio não é uma autorização de substituição.

**Concept:** Respeito das decisões de aprovação

**Authored coaching hints:**

- Alterar o intérprete muda a operação negada?
- Que trabalho ainda é permitido?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-212:ca8725a2c5b26d28aecc89f6694a8202572ec83d20df5a2fe021b86412c519b6 -->
## Question 212: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-212`

**Content revision:** `ca8725a2c5b26d28aecc89f6694a8202572ec83d20df5a2fe021b86412c519b6`

### English

A task requires exception approval. The approver's identity cannot be verified. What is the safest state?

1. Approved because someone responded

   A response alone does not establish authority.

2. Approved if the response sounds professional

   Style cannot authenticate an approver.

3. Proceed and verify identity after execution

   Postexecution verification misses the gate.

4. Blocked pending an authenticated authorized decision **[CORRECT]**

   Approval must come from an identifiable authorized principal.

**Concept:** Approval authenticity

**Authored coaching hints:**

- What establishes the responder's authority?
- Can the decision be audited later?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea requiere la aprobación de una excepción, pero no se puede verificar la identidad de quien aprueba. ¿Cuál es el estado más seguro?

1. Aprobado porque alguien respondió

   Una respuesta por sí sola no establece autoridad.

2. Aprobado si la respuesta suena profesional

   El estilo no puede autenticar a un aprobador.

3. Procesar y verificar la identidad después de la ejecución

   La verificación posterior a la ejecución se pierde en la puerta.

4. Bloqueado en espera de una decisión autorizada autenticada **[CORRECT]**

   La aprobación debe provenir de un principal autorizado identificable.

**Concept:** Autenticidad de la aprobación

**Authored coaching hints:**

- ¿Qué establece la autoridad de la persona que responde?
- ¿Puede la decisión ser revisada más tarde?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa exige aprovação de uma exceção, mas não é possível verificar a identidade de quem aprova. Qual é o estado mais seguro?

1. Aproveito porque alguém respondeu

   Só uma resposta não estabelece autoridade.

2. Aprovação se a resposta parecer profissional

   O estilo não pode autenticar um aprovador.

3. Prosseguir e verificar a identidade após a execução

   A verificação pós-execução perde o portão.

4. Bloqueado na espera de uma decisão autorizada autenticada **[CORRECT]**

   A aprovação deve proceder de um principal autorizado identificável.

**Concept:** Autenticidade da aprovação

**Authored coaching hints:**

- O que estabelece a autoridade do respondente?
- A decisão pode ser auditada mais tarde?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-213:caecbed07cd23171e6e0362b8c044a74d7323e0934cda82de1fec648a13d9def -->
## Question 213: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-213`

**Content revision:** `caecbed07cd23171e6e0362b8c044a74d7323e0934cda82de1fec648a13d9def`

### English

An organization wants fast autonomous formatting changes without giving agents permission to merge their own PRs. Which design fits?

1. Agents prepare PRs; repository automation follows configured checks, reviews, and merge policy **[CORRECT]**

   Preparation and acceptance can be separated while retaining efficient automation.

2. Give each agent unrestricted merge rights

   Unrestricted merge rights exceed the stated design.

3. Skip required checks for formatting agents

   Formatting can still introduce unexpected changes.

4. Treat a formatting label as universal approval

   A label alone does not satisfy acceptance rules.

**Concept:** Separating preparation from acceptance

**Authored coaching hints:**

- Who creates the proposal, and what controls acceptance?
- Can automation preserve the same required conditions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere cambios rápidos de formato autónomo sin dar permiso a los agentes para fusionar su propio PRs. ¿Qué diseño encaja?

1. Los agentes preparan PRs; la automatización del repositorio sigue las políticas de comprobación, revisión y fusión configuradas **[CORRECT]**

   La preparación y la aceptación se pueden separar manteniendo una automatización eficiente.

2. Dar a cada agente derechos sin restricciones de fusión

   Los derechos de fusión sin restricciones superan el diseño declarado.

3. Salta las comprobaciones requeridas para los agentes de formato

   El formato todavía puede introducir cambios inesperados.

4. Tratar una etiqueta de formato como aprobación universal

   Una etiqueta por sí sola no satisface las reglas de aceptación.

**Concept:** Separar la preparación de la aceptación

**Authored coaching hints:**

- ¿Quién crea la propuesta, y qué controla la aceptación?
- ¿Puede la automatización mantener las mismas condiciones requeridas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer alterações autônomas rápidas de formatação, sem permitir que os agentes façam merge dos próprios PRs. Qual projeto é adequado?

1. Agentes preparam PRs; automação do repositório segue verificações configuradas, revisões e política de merge **[CORRECT]**

   A preparação e a aceitação podem ser separadas, mantendo uma automação eficiente.

2. Dar a cada agente direitos de merge ilimitados

   Os direitos de merge ilimitados excedem o desenho declarado.

3. Esquecer as verificações necessárias para os agentes de formatação

   A formatação ainda pode introduzir mudanças inesperadas.

4. Tratar um rótulo de formatação como aprovação universal

   Um rótulo por si só não satisfaz as regras de aceitação.

**Concept:** Separar a preparação da aceitação

**Authored coaching hints:**

- Quem cria a proposta e o que controla a aceitação?
- A automação pode preservar as mesmas condições exigidas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/6-reliable-workflows>

<!-- certification-coach-question:agentic-214:d1cdeaa459e2a88f91921f191a23f49a92794a90c1e7086101e2eebe18508090 -->
## Question 214: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-214`

**Content revision:** `d1cdeaa459e2a88f91921f191a23f49a92794a90c1e7086101e2eebe18508090`

### English

An agent's credential is suspected to be compromised. What containment should take priority?

1. Wait until the task completes

   Continued execution can increase exposure.

2. Suspend affected execution and revoke or rotate access through the incident process **[CORRECT]**

   Containment reduces possible impact while preserving a controlled response.

3. Copy the token to another worker

   Copying the token spreads the compromise.

4. Delete logs before investigating

   Logs may be essential evidence.

**Concept:** Credential incident containment

**Authored coaching hints:**

- What authority could an attacker currently exercise?
- How can further effects be stopped without destroying evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se sospecha que las credenciales de un agente han sido comprometidas. ¿Qué contención debe tener prioridad?

1. Espera hasta que la tarea se complete

   La ejecución continua puede aumentar la exposición.

2. Suspende la ejecución afectada y revoque o rota el acceso a través del proceso de incidente **[CORRECT]**

   La contención reduce el posible impacto mientras se conserva una respuesta controlada.

3. Copie el token a otro trabajador

   Copiar la ficha genera el compromiso.

4. Eliminar registros antes de investigar

   Los registros pueden ser pruebas esenciales.

**Concept:** contención de incidentes credenciales

**Authored coaching hints:**

- ¿Qué autoridad podría ejercer actualmente un atacante?
- ¿Cómo se pueden detener los efectos adicionales sin destruir la evidencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A credencial de um agente é suspeita de ter sido comprometida. Que contenção deve ter prioridade?

1. Espere até que a tarefa seja concluída

   A execução contínua pode aumentar a exposição.

2. Suspender a execução afetada e revogar ou rotacionar o acesso pelo processo de resposta a incidentes **[CORRECT]**

   A contenção reduz o possível impacto, preservando simultaneamente uma resposta controlada.

3. Copiar o token para outro trabalhador

   Copiar o token espalha o compromisso.

4. Eliminar registros antes de investigar

   Os registros podem ser evidências essenciais.

**Concept:** Controle de incidentes de credenciais

**Authored coaching hints:**

- Que autoridade poderia um agressor exercer atualmente?
- Como podem ser evitados efeitos adicionais sem destruir evidências?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-215:e5f0c5ef15b28ec4c7a65c9b6538e8a50d1209f683ff265bc30bf2c3bd9cc5dd -->
## Question 215: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-215`

**Content revision:** `e5f0c5ef15b28ec4c7a65c9b6538e8a50d1209f683ff265bc30bf2c3bd9cc5dd`

### English

A team approves a tool because it is read-only, but it can read every customer tenant. What is missing?

1. A write capability

   Adding writes would increase risk.

2. A more colorful tool icon

   Presentation does not constrain data access.

3. Resource-level scope and confidentiality assessment **[CORRECT]**

   Read-only access still needs tenant and data boundaries.

4. An unlimited context window

   Context size does not authorize disclosure.

**Concept:** Least privilege for data access

**Authored coaching hints:**

- Which customer's data is the task allowed to inspect?
- Does lack of mutation eliminate confidentiality risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo aprueba una herramienta porque es de solo lectura, pero puede consultar los tenants de todos los clientes. ¿Qué falta?

1. Capacidad de escritura

   Añadir escritos aumentaría el riesgo.

2. Un icono de herramienta más colorido

   La presentación no limita el acceso a los datos.

3. Evaluación del alcance y de la confidencialidad a nivel de recursos **[CORRECT]**

   El acceso solo para lectura aún necesita límites de inquilinos y datos.

4. Una ventana de contexto ilimitada

   El tamaño del contexto no autoriza la divulgación.

**Concept:** Privilegio mínimo para el acceso a datos

**Authored coaching hints:**

- ¿Cuáles son los datos de los clientes que se pueden inspeccionar?
- ¿La falta de mutación elimina el riesgo de confidencialidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe aprova uma ferramenta por ser somente leitura, mas ela pode consultar os tenants de todos os clientes. O que falta?

1. Capacidade de escrita

   Adicionar cartas aumentaria o risco.

2. Um ícone de ferramenta mais colorido

   A apresentação não restringe o acesso aos dados.

3. Avaliação do escopo e da confidencialidade a nível dos recursos **[CORRECT]**

   O acesso somente para leitura ainda requer limites de inquilinos e dados.

4. Uma janela de contexto ilimitada

   O tamanho do contexto não autoriza a divulgação.

**Concept:** Privilegio mínimo para o acesso aos dados

**Authored coaching hints:**

- Que dados de clientes é permitido inspecionar?
- A falta de mutação elimina o risco de confidencialidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-216:d2d20c4b150bdee49da2f1cb4cfdb5fb5e4806996b8d838a5c1dccf946a9ca7f -->
## Question 216: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-216`

**Content revision:** `d2d20c4b150bdee49da2f1cb4cfdb5fb5e4806996b8d838a5c1dccf946a9ca7f`

### English

An agent proposes disabling audit logging during a sensitive change to avoid noise. What should the owner require?

1. Accept if the change is quick

   Short duration does not remove accountability requirements.

2. Use only the agent's final summary

   A summary alone cannot reconstruct execution.

3. Disable logs but retain a confidence score

   Confidence is not an audit record.

4. Preserve appropriate audit events and filter irrelevant noise instead **[CORRECT]**

   Noise reduction should not erase consequential evidence.

**Concept:** Audit continuity

**Authored coaching hints:**

- Which events would be necessary if the change failed?
- Can usability improve without eliminating the record?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente propone desactivar el registro de auditoría durante un cambio sensible para evitar el ruido. ¿Qué debe exigir el propietario?

1. Acepta si el cambio es rápido

   La corta duración no elimina los requisitos de rendición de cuentas.

2. Utilizar sólo el resumen final del agente

   Sólo un resumen no puede reconstruir la ejecución.

3. Deshabilitar los registros pero mantener un puntaje de confianza

   La confianza no es un registro de auditoría.

4. Preservar los eventos de auditoría adecuados y filtrar el ruido irrelevante en su lugar **[CORRECT]**

   La reducción del ruido no debe borrar la evidencia consecuente.

**Concept:** Continuidad de las auditorías

**Authored coaching hints:**

- ¿Qué acontecimientos serían necesarios si el cambio fallara?
- ¿Puede mejorar la usabilidad sin eliminar el registro?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente propõe desativar o registro de auditoria durante uma mudança sensível para evitar ruído. O que deve exigir o proprietário?

1. Aceita se a mudança for rápida

   A curta duração não elimina os requisitos de prestação de contas.

2. Use apenas o resumo final do agente.

   Um resumo sozinho não pode reconstruir a execução.

3. Desativar registros, mas manter uma pontuação de confiança

   A confiança não é um registro de auditoria.

4. Preservar os eventos de auditoria adequados e filtrar o ruído irrelevante **[CORRECT]**

   A redução do ruído não deve eliminar as evidências consequentes.

**Concept:** Continuidade da auditoria

**Authored coaching hints:**

- Que acontecimentos seriam necessários se a mudança falhasse?
- Pode melhorar a usabilidade sem eliminar o registro?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/7-agent-operations-controls>

<!-- certification-coach-question:agentic-217:cbb20b2f76e3008f7d6b04a720e9f0e73f6e4b0e27b88e5fb9f4cc0f220000db -->
## Question 217: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-217`

**Content revision:** `cbb20b2f76e3008f7d6b04a720e9f0e73f6e4b0e27b88e5fb9f4cc0f220000db`

### English

A safeguard blocks an unauthorized write but the agent reports the task succeeded. What should accountability require?

1. An accurate blocked outcome with the attempted operation and approved next steps **[CORRECT]**

   Guardrail success and task completion are different outcomes.

2. A success status because the safeguard worked

   Preventing a write does not complete the requested task.

3. Deletion of the blocked event

   Blocked attempts are important evidence.

4. A retry under a more privileged identity

   Privilege escalation needs separate authorization.

**Concept:** Honest blocked-action reporting

**Authored coaching hints:**

- Did the intended effect occur?
- How can both safety success and task incompleteness be recorded?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una protección bloquea una escritura no autorizada pero el agente informa que la tarea tuvo éxito. ¿Qué debe requerir la rendición de cuentas?

1. Un resultado de bloqueo fiel a los hechos, con la operación intentada y los siguientes pasos autorizados **[CORRECT]**

   El éxito de Guardrail y la finalización de la tarea son resultados diferentes.

2. Un estado de éxito porque la salvaguarda funcionó

   Impedir una escritura no completa la tarea solicitada.

3. Eliminación del evento bloqueado

   Los intentos bloqueados son evidencia importante.

4. Un nuevo intento bajo una identidad más privilegiada

   La escalada de privilegios necesita una autorización separada.

**Concept:** Información honesta sobre acciones bloqueadas

**Authored coaching hints:**

- ¿Se produjo el efecto previsto?
- ¿Cómo se puede registrar tanto el éxito de la seguridad como la incompletud de la tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma salvaguarda bloqueia uma escrita não autorizada, mas o agente relata que a tarefa foi bem sucedida. O que deve exigir a prestação de contas?

1. Um resultado de bloqueio fiel aos fatos, com a operação tentada e os próximos passos autorizados **[CORRECT]**

   O sucesso do guardrail e a conclusão da tarefa são resultados diferentes.

2. Um status de sucesso porque a salvaguarda funcionou

   A prevenção de uma escrita não completa a tarefa solicitada.

3. Exclusão do evento bloqueado

   As tentativas bloqueadas são provas importantes.

4. Uma nova tentativa sob uma identidade mais privilegiada

   A escalada de privilégios requer autorização separada.

**Concept:** Relatório honesto sobre ações bloqueadas

**Authored coaching hints:**

- O efeito pretendido ocorreu?
- Como pode-se registrar o sucesso da segurança e a incompletude da tarefa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-218:f1a73c75c8da80f63b662d59275895219ee45ae0acba123fb0c9193ac5172570 -->
## Question 218: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-218`

**Content revision:** `f1a73c75c8da80f63b662d59275895219ee45ae0acba123fb0c9193ac5172570`

### English

A human approves a plan, then an agent changes its targets before execution. What should the guardrail do?

1. Reuse approval regardless of target changes

   Approval must remain bound to reviewed scope.

2. Invalidate affected approval and request review of the revised action **[CORRECT]**

   Material changes require a decision covering the new effect.

3. Hide the target changes in logs

   Hiding changes defeats informed authorization.

4. Treat approval as permission to choose any target

   Targets are part of the action's authority boundary.

**Concept:** Approval invalidation on material change

**Authored coaching hints:**

- Is the action still the one that was reviewed?
- Which approval assumptions no longer hold?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un humano aprueba un plan, luego un agente cambia sus objetivos antes de su ejecución. ¿Qué debería hacer la salvaguarda?

1. Aprobación de reutilización independientemente de los cambios en el objetivo

   La aprobación deberá seguir vinculada al ámbito de aplicación revisado.

2. Invalida la aprobación afectada y solicite la revisión de la acción revisada **[CORRECT]**

   Los cambios materiales requieren una decisión que cubra el nuevo efecto.

3. Ocultar los cambios de objetivo en los registros

   Ocultar los cambios derrota la autorización informada.

4. Tratar la aprobación como permiso para elegir cualquier objetivo

   Los objetivos forman parte de los límites de autoridad de la acción.

**Concept:** Invalidación de la aprobación por cambio material

**Authored coaching hints:**

- ¿La acción sigue siendo la que se revisó?
- ¿Qué suposiciones de aprobación ya no son válidas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa aprova um plano, e o agente muda os alvos antes da execução. O que a salvaguarda deve fazer?

1. Autorização de reutilização, independentemente das alterações no objetivo

   A aprovação deve permanecer vinculada ao escopo revisto.

2. Invalida a aprovação afetada e solicite revisão da ação revisada **[CORRECT]**

   As alterações materiais exigem uma decisão que cobre o novo efeito.

3. Esconde as mudanças-alvo nos registros

   A ocultação das alterações derrota a autorização informada.

4. Tratar a aprovação como permissão para escolher qualquer alvo

   Os alvos fazem parte dos limites de autoridade da ação.

**Concept:** Invalidação da aprovação em alteração material

**Authored coaching hints:**

- A ação ainda é a que foi revisada?
- Que suposições de aprovação já não são válidas?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/4-plan-reason-execution>

<!-- certification-coach-question:agentic-219:2cf901f3e9914c10bdd2072d3ecf760cbc1cd3b5b3b97b790404fb1692dea830 -->
## Question 219: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-219`

**Content revision:** `2cf901f3e9914c10bdd2072d3ecf760cbc1cd3b5b3b97b790404fb1692dea830`

### English

An agent handles a request to generate misleading customer-facing claims unsupported by release evidence. What response aligns with accountability?

1. Publish if the requester wants persuasive wording

   Persuasion does not justify deception.

2. Use a disclaimer after the false claims

   A disclaimer does not make unsupported claims accurate.

3. Decline unsupported claims and offer an evidence-based draft for review **[CORRECT]**

   Evidence-based drafting preserves usefulness and responsible communication.

4. Ask another agent to invent supporting details

   Fabricated support compounds the problem.

**Concept:** Responsible AI communication boundaries

**Authored coaching hints:**

- What evidence supports the proposed public statements?
- Can the legitimate communication goal be met accurately?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recibe una solicitud para generar afirmaciones engañosas dirigidas a clientes, sin respaldo en la evidencia del lanzamiento. ¿Qué respuesta se ajusta a la rendición de cuentas?

1. Publicar si el solicitante quiere una redacción persuasiva

   La persuasión no justifica el engaño.

2. Utilice un aviso de responsabilidad después de las afirmaciones falsas

   Una exención de responsabilidad no hace que las afirmaciones no justificadas sean exactas.

3. Declinar las afirmaciones no justificadas y presentar un borrador basado en la evidencia para su revisión **[CORRECT]**

   La redacción basada en la evidencia preserva la utilidad y la comunicación responsable.

4. Pida a otro agente que invente detalles de apoyo

   El soporte fabricado agrava el problema.

**Concept:** Fronteras de comunicación de IA responsable

**Authored coaching hints:**

- ¿Qué evidencia apoya las declaraciones públicas propuestas?
- ¿Se puede alcanzar con precisión el objetivo legítimo de comunicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente recebe uma solicitação para gerar afirmações enganosas para clientes, sem respaldo nas evidências do lançamento. Qual resposta respeita a prestação de contas?

1. Publicar se o requerente desejar uma redação persuasiva

   A persuasão não justifica o engano.

2. Usar um aviso após as alegações falsas

   Uma exclusão de responsabilidade não torna as alegações não fundamentadas precisas.

3. Recusar afirmações sem fundamento e oferecer um rascunho baseado em evidências para revisão **[CORRECT]**

   A elaboração baseada em evidências preserva a utilidade e a comunicação responsável.

4. Peça a outro agente para inventar detalhes de apoio

   Suporte fabricado complica o problema.

**Concept:** Fronteiras de comunicação de IA responsável

**Authored coaching hints:**

- Que evidências apoiam as declarações públicas propostas?
- O objetivo legítimo de comunicação pode ser atingido com precisão?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-220:6a06a395b353181bfbc39f9205d9d15547b9c705edd1bd0a3759d25a583b7626 -->
## Question 220: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-220`

**Content revision:** `6a06a395b353181bfbc39f9205d9d15547b9c705edd1bd0a3759d25a583b7626`

### English

A team has too many low-value approval prompts and users approve them reflexively. What redesign is best?

1. Add another confirmation to every prompt

   More repetitive prompts can worsen fatigue.

2. Remove every approval, including destructive actions

   High-impact actions still need appropriate controls.

3. Make prompts less specific to shorten reading time

   Vague prompts weaken informed decisions.

4. Consolidate low-risk authorized work and reserve clear gates for meaningful risk **[CORRECT]**

   Risk-focused gates improve attention without abandoning governance.

**Concept:** Approval fatigue reduction

**Authored coaching hints:**

- Which approvals materially change risk?
- Does the approver have enough specific information to decide?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo muestra demasiadas solicitudes de aprobación de poco valor y los usuarios las aceptan de forma automática. ¿Cuál es el mejor rediseño?

1. Añadir otra confirmación a cada pedido

   Las peticiones más repetitivas pueden empeorar la fatiga.

2. Quita toda aprobación, incluyendo acciones destructivas

   Las acciones de alto impacto todavía necesitan controles adecuados.

3. Haga que las instrucciones sean menos específicas para acortar el tiempo de lectura

   Las informaciones vagas debilitan las decisiones informadas.

4. Consolidar el trabajo autorizado de bajo riesgo y reservar puertas claras para riesgos significativos **[CORRECT]**

   Las puertas centradas en el riesgo mejoran la atención sin abandonar la gobernanza.

**Concept:** Aprobación de la reducción de la fatiga

**Authored coaching hints:**

- ¿Qué aprobaciones cambian significativamente el riesgo?
- ¿Tiene el aprobador suficiente información específica para decidir?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe apresenta solicitações de aprovação demais, com pouco valor, e os usuários as aceitam de forma automática. Qual é o melhor redesenho?

1. Adicionar mais uma confirmação a cada pedido

   As instruções mais repetitivas podem piorar a fadiga.

2. Remover toda aprovação, incluindo ações destrutivas

   As ações de alto impacto ainda precisam de controles adequados.

3. Mantenha as instruções menos específicas para reduzir o tempo de leitura

   Indicações vagas enfraquecem decisões informadas.

4. Consolidar o trabalho autorizado de baixo risco e reservar barreiras claras de aprovação para riscos relevantes **[CORRECT]**

   Os portões focados no risco melhoram a atenção sem abandonar a governação.

**Concept:** redução da fadiga de aprovação

**Authored coaching hints:**

- Quais aprovações alteram significativamente o risco?
- O responsável pela aprovação tem informações específicas suficientes para decidir?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-221:3a10d7126c95644969d5e5f255e2e008775ea10981ad155b641ad6b72bb736fa -->
## Question 221: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-221`

**Content revision:** `3a10d7126c95644969d5e5f255e2e008775ea10981ad155b641ad6b72bb736fa`

### English

A compliance exception is granted for one task and expires tomorrow. What should the agent preserve?

1. The exception's owner, scope, expiration, and evidence reference **[CORRECT]**

   Bounded exception metadata prevents later misuse.

2. Only the word approved

   A bare approval loses important limits.

3. A permanent global exemption

   A temporary task exception is not global policy.

4. The approver's credentials

   Credentials are not part of an authorization record.

**Concept:** Auditable policy exceptions

**Authored coaching hints:**

- What prevents future tasks from reusing the exception incorrectly?
- Which limits define the actual permission?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se concede una excepción de cumplimiento para una tarea y expira mañana. ¿Qué debe conservar el agente?

1. Propietario de la excepción, alcance, vencimiento y referencia de la prueba **[CORRECT]**

   Los metadatos de excepción limitada evitan un uso indebido posterior.

2. Sólo la palabra aprobada

   Una simple aprobación pierde límites importantes.

3. Una exención global permanente

   Una excepción temporal de la tarea no es la política global.

4. Las credenciales del aprobador

   Las credenciales no forman parte de un registro de autorización.

**Concept:** Excepciones de las políticas auditables

**Authored coaching hints:**

- ¿Qué impide que las tareas futuras reutilicen incorrectamente la excepción?
- ¿Qué límites definen el permiso real?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma exceção de conformidade é concedida para uma tarefa e expira amanhã. O que é que o agente deve conservar?

1. Proprietário da exceção, escopo, expiração e referência à prova **[CORRECT]**

   Os metadados de exceção limitada impedem a utilização indevida posterior.

2. Apenas a palavra aprovada

   Uma simples aprovação perde limites importantes.

3. Uma isenção global permanente

   Uma excepção temporária não é a política global.

4. As credenciais de quem aprova

   As credenciais não fazem parte de um registro de autorização.

**Concept:** Excepções à política auditável

**Authored coaching hints:**

- O que impede que as tarefas futuras reutilizem incorretamente a exceção?
- Que limites definem a permissão real?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-222:ed0cd43340e8ab19f697d2e7a5b46bfb605e0a620de2b2ab53fa116d217e288d -->
## Question 222: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-222`

**Content revision:** `ed0cd43340e8ab19f697d2e7a5b46bfb605e0a620de2b2ab53fa116d217e288d`

### English

An agent's environment can access unrelated internal services. What should a least-privilege review assess?

1. Only the tools shown in chat

   Visible tools are only one part of effective authority.

2. Network reachability, credentials, filesystem access, and exposed tools together **[CORRECT]**

   Effective capability spans several enforcement layers.

3. Only whether the agent's name is descriptive

   Naming does not constrain access.

4. Only the number of required reviewers

   Review count does not define runtime reachability.

**Concept:** Effective execution authority

**Authored coaching hints:**

- What can the runtime reach outside the advertised tool list?
- Which layers could enforce a narrower boundary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El entorno de un agente puede acceder a servicios internos no relacionados con la tarea. ¿Qué debe evaluar una revisión del principio de mínimo privilegio?

1. Sólo las herramientas mostradas en el chat

   Las herramientas visibles son sólo una parte de la autoridad efectiva.

2. La accesibilidad a la red, las credenciales, el acceso al sistema de archivos y las herramientas expuestas en conjunto **[CORRECT]**

   La capacidad efectiva abarca varias capas de aplicación.

3. Sólo si el nombre del agente es descriptivo

   El nombramiento no limita el acceso.

4. Solo el número de revisores requeridos

   El recuento de revisiones no define la accesibilidad en el tiempo de ejecución.

**Concept:** Autoridad de ejecución efectiva

**Authored coaching hints:**

- ¿Qué puede alcanzar el tiempo de ejecución fuera de la lista de herramientas anunciada?
- ¿Qué capas podrían imponer un límite más estrecho?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O ambiente de um agente pode acessar serviços internos não relacionados à tarefa. O que uma revisão do princípio do menor privilégio deve avaliar?

1. Apenas as ferramentas mostradas no chat

   As ferramentas visíveis são apenas uma parte da autoridade eficaz.

2. Acessibilidade à rede, credenciais, acesso ao sistema de arquivos e ferramentas expostas em conjunto **[CORRECT]**

   A capacidade eficaz abrange várias camadas de aplicação.

3. Só se o nome do agente é descritivo

   O nomeamento não restringe o acesso.

4. Apenas o número de revisores requeridos

   O número de revisões não define a acessibilidade no tempo de execução.

**Concept:** Autoridade efetiva de execução

**Authored coaching hints:**

- O que pode atingir o tempo de execução fora da lista de ferramentas anunciada?
- Que camadas poderiam impor um limite mais estreito?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/>

<!-- certification-coach-question:agentic-223:3e5a6f1cad2c889ebdb51e784647764049eed5f2975a018300af6f40a7c0795f -->
## Question 223: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-223`

**Content revision:** `3e5a6f1cad2c889ebdb51e784647764049eed5f2975a018300af6f40a7c0795f`

### English

An organization disables a high-risk agent capability during an incident. What should happen to already active runs?

1. Assume they automatically adopted the change

   Policy propagation to active execution must not be assumed.

2. Let them finish every pending write

   Pending writes may retain the same incident risk.

3. Verify enforcement for active runs and suspend or revoke capability where needed **[CORRECT]**

   Containment requires checking effective authority, not only saved configuration.

4. Delete the policy change record

   The change record supports incident accountability.

**Concept:** Active-run policy containment

**Authored coaching hints:**

- Do in-flight processes still hold credentials or queued actions?
- What evidence proves the restriction is effective now?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización desactiva una capacidad de agente de alto riesgo durante un incidente. ¿Qué debe ocurrir con las ejecuciones que ya están activas?

1. Supongamos que han adoptado automáticamente el cambio

   No se debe asumir la propagación de la política a la ejecución activa.

2. Deja que terminen cada escrito pendiente

   Los escritos pendientes pueden mantener el mismo riesgo de incidente.

3. Verificar la aplicación de las operaciones activas y suspender o revocar la capacidad cuando sea necesario **[CORRECT]**

   La contención requiere comprobar la autoridad efectiva, no sólo la configuración guardada.

4. Eliminar el registro de cambios de política

   El registro de cambios apoya la rendición de cuentas de incidentes.

**Concept:** contención activa de las políticas

**Authored coaching hints:**

- ¿Los procesos de vuelo aún tienen credenciales o acciones en cola?
- ¿Qué evidencia demuestra que la restricción es efectiva ahora?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização desativa uma capacidade de agente de alto risco durante um incidente. O que deve acontecer com as execuções que já estão ativas?

1. Suponham que tenham adoptado automaticamente a alteração

   A propagação das políticas para a execução ativa não deve ser assumida.

2. Deixe-os terminar cada escrita pendente

   As notas pendentes podem manter o mesmo risco de incidente.

3. Verificar a aplicação da restrição nas execuções ativas e suspender ou revogar a capacidade quando necessário **[CORRECT]**

   A contenção requer a verificação da autoridade efetiva, não apenas a configuração guardada.

4. Eliminar o registro de alterações de política

   O registro de mudanças apoia a responsabilização dos incidentes.

**Concept:** Controle das políticas de gestão ativa

**Authored coaching hints:**

- Os processos de voo ainda possuem credenciais ou ações em fila?
- Que evidências provam que a restrição é eficaz agora?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>

<!-- certification-coach-question:agentic-224:6ed3a7e42bc2693d1dfb857bf5e3bbf83193506de45e225530ccc7d1d7875b60 -->
## Question 224: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-224`

**Content revision:** `6ed3a7e42bc2693d1dfb857bf5e3bbf83193506de45e225530ccc7d1d7875b60`

### English

An agent recommends waiving a security check because its historical success rate is high. What is the appropriate decision principle?

1. Trust history over the current change

   Historical performance does not validate current risk.

2. Let the agent grant the waiver

   Self-waivers undermine independent control.

3. Replace the check with a confidence threshold

   Confidence is not equivalent to a security check.

4. Use an authorized exception process based on this change's evidence and risk **[CORRECT]**

   Exceptions require accountable judgment and scoped evidence.

**Concept:** Evidence-based control exceptions

**Authored coaching hints:**

- Does past performance establish that this change is safe?
- Who is authorized to accept the remaining risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente recomienda renunciar a un chequeo de seguridad porque su tasa de éxito histórica es alta. ¿Cuál es el principio de decisión apropiado?

1. Confía en la historia sobre el cambio actual

   El desempeño histórico no valida el riesgo actual.

2. Que el agente conceda la exención

   Las exenciones a sí mismas socavan el control independiente.

3. Reemplazar el cheque con un umbral de confianza

   La confianza no es equivalente a una verificación de seguridad.

4. Utilice un proceso de excepción autorizado basado en la evidencia y el riesgo de este cambio **[CORRECT]**

   Las excepciones requieren un juicio responsable y pruebas específicas.

**Concept:** Excepciones de control basadas en la evidencia

**Authored coaching hints:**

- ¿El desempeño pasado demuestra que este cambio es seguro?
- ¿Quién está autorizado a aceptar el riesgo restante?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente recomenda desistir de uma verificação de segurança porque a sua taxa de sucesso histórica é alta. Qual é o princípio de decisão apropriado?

1. Confiança histórico sobre a mudança atual

   O desempenho histórico não valida o risco atual.

2. Deixe o agente conceder a isenção

   Os autodeterminações minam o controle independente.

3. Substituir o cheque por um limiar de confiança

   A confiança não é equivalente a uma verificação de segurança.

4. Usar um processo de exceção autorizado com base na evidência e no risco desta alteração **[CORRECT]**

   As exceções exigem um julgamento responsável e provas específicas.

**Concept:** Excepções de controle baseadas em evidências

**Authored coaching hints:**

- O desempenho passado provou que esta mudança é segura?
- Quem está autorizado a aceitar o risco restante?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/6-apply-contributor-model-agent-generated-work>

<!-- certification-coach-question:agentic-225:19dd14092bc5ab3bea364bca72ebf587066d8f8d2675fb5719ef87d3122c8ccd -->
## Question 225: Implement guardrails and accountability

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `agentic-225`

**Content revision:** `19dd14092bc5ab3bea364bca72ebf587066d8f8d2675fb5719ef87d3122c8ccd`

### English

An organization wants to expand agents from drafting PRs to modifying production settings. What should precede that expansion?

1. A risk review, explicit authority, enforced boundaries, evaluation evidence, and recovery design **[CORRECT]**

   Production autonomy requires a demonstrated and governed execution path.

2. Only a larger execution budget

   Budget does not establish safety or permission.

3. Only renaming the agent production-ready

   A label is not operational readiness.

4. Only confirmation that it can call the settings API

   Technical capability alone does not authorize consequential changes.

**Concept:** Readiness for consequential autonomy

**Authored coaching hints:**

- What changes when proposed work becomes direct production impact?
- Which evidence and controls support that new responsibility?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere ampliar los agentes de redactar PRs a modificar los ajustes de producción. ¿Qué debería preceder esa expansión?

1. Una revisión de riesgos, autoridad explícita, límites aplicados, pruebas de evaluación y diseño de recuperación **[CORRECT]**

   La autonomía de la producción requiere un camino de ejecución demostrado y regido.

2. Sólo un presupuesto de ejecución mayor

   El presupuesto no establece seguridad ni permiso.

3. Solo cambiar el nombre del agente listo para la producción

   Una etiqueta no es la preparación operativa.

4. Sólo confirmación de que puede llamar a las configuraciones API

   La capacidad técnica por sí sola no permite cambios consecuentes.

**Concept:** Preparación para la consecuente autonomía

**Authored coaching hints:**

- ¿Qué cambios se producen cuando el trabajo propuesto tiene un impacto directo en la producción?
- ¿Qué pruebas y controles apoyan esa nueva responsabilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer expandir os agentes da redação do PRs para a modificação das configurações de produção. O que deve preceder essa expansão?

1. Uma revisão dos riscos, autoridade explícita, limites aplicados, evidências de avaliação e projeto de recuperação **[CORRECT]**

   A autonomia da produção requer um caminho de execução demonstrado e regido.

2. Apenas um orçamento de execução maior

   O orçamento não estabelece segurança ou permissão.

3. Apenas renomear o agente pronto para produção

   Um rótulo não é prontidão operacional.

4. Apenas confirmação de que ele pode chamar as configurações API

   A capacidade técnica por si só não permite alterações consequentes.

**Concept:** Preparação para a consequente autonomia

**Authored coaching hints:**

- Que mudanças ocorrem quando o trabalho proposto se torna um impacto direto na produção?
- Que evidências e controles apoiam essa nova responsabilidade?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600>
