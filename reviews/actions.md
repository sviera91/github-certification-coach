<!-- certification-coach-review:actions:2 -->
# GitHub Actions: human review packet

225 original practice questions. No mock exam or Copilot installation is required to review this file.

## How to review

1. Read the English question, all four choices and explanations, the concept, hints, and linked official documentation.
2. Check English content approved only after personally verifying the English content. You do not need to review another language.
3. A separate reviewer can expand Spanish or Brazilian Portuguese and check only that translation, verifying meaning, option order, explanations, hints, and documentation references against the approved English content.
4. Leave uncertain or incorrect questions unchecked. Send the edited Markdown file back to the maintainer, with suggested corrections separately.

English content and each translation have separate approvals. Translation approval requires current English approval, imported previously or checked in this same packet.
Changing English content or its supporting source invalidates all three approvals. Changing one translation invalidates only that language's approval.
The importer rejects stale revisions or changed question content. Do not edit prompts, answers, or explanations in this review copy.
Unchecked boxes do not revoke existing approvals. These are honor-system human attestations, not proof of reviewer identity.
AI must never check these boxes or attest to human review. These are original unofficial practice items, not real exam questions.
This packet intentionally includes the full answer key. It contains no learner answers, scores, chats, or progress.

Search for `- [ ] English content approved`, `- [ ] Spanish translation approved`, or `- [ ] Brazilian Portuguese translation approved` to find unchecked items.
Technical names and official documentation links may remain in English. Translation review verifies that references support the same meaning; it does not require translating the linked external documentation.

<!-- certification-coach-question:actions-001:bfe9c61416b1f59b05c4882983953e75d9913c91a5fb72ffee959352161ae65d -->
## Question 1: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-001`

**Content revision:** `bfe9c61416b1f59b05c4882983953e75d9913c91a5fb72ffee959352161ae65d`

**en review revision:** `379113c299f70118d761c9cfc24def7afe1fdcb02d6981870c53c0c065e9a53f`
**es review revision:** `3f74d1aae4a488df6c778dc937fbb9fe6742eeb30a8b5a7c23d4fdf110f21c91`
**pt-BR review revision:** `22640d3bf94fd4a21523c0680f18775010c8e787bcde7ac229d869afe07e5c72`

### English

Which repository path lets GitHub discover a workflow named verify.yml?

1. .github/workflows/verify.yml **[CORRECT]**

   Workflows are discovered in this directory.

2. .github/actions/verify.yml

   Local actions use a different directory.

3. .github/templates/verify.yml

   This is not the workflow discovery directory.

4. .github/workflow/verify.yml

   The directory name must be plural.

**Concept:** Workflow discovery

**Authored coaching hints:**

- Distinguish workflow files from action metadata.
- Repository discovery uses a reserved location.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ruta del repositorio permite a GitHub detectar un flujo llamado verify.yml?

1. .github/workflows/verify.yml **[CORRECT]**

   Los flujos se detectan en este directorio.

2. .github/actions/verify.yml

   Las acciones locales usan otro directorio.

3. .github/templates/verify.yml

   No es el directorio de detección de flujos.

4. .github/workflow/verify.yml

   El nombre del directorio debe ser plural.

**Concept:** Detección de flujos

**Authored coaching hints:**

- Distingue archivos de flujo y metadatos de acciones.
- La detección usa una ubicación reservada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual caminho do repositório permite ao GitHub descobrir um workflow chamado verify.yml?

1. .github/workflows/verify.yml **[CORRECT]**

   Os workflows são descobertos neste diretório.

2. .github/actions/verify.yml

   Ações locais usam outro diretório.

3. .github/templates/verify.yml

   Este não é o diretório de descoberta de workflows.

4. .github/workflow/verify.yml

   O nome do diretório deve estar no plural.

**Concept:** Descoberta de workflows

**Authored coaching hints:**

- Diferencie arquivos de workflow e metadados de ações.
- A descoberta usa um local reservado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-002:bb01157e0bb0008cbd18f7764af791b93b4c3e0c7ef7303e223286d3cc088bdd -->
## Question 2: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-002`

**Content revision:** `bb01157e0bb0008cbd18f7764af791b93b4c3e0c7ef7303e223286d3cc088bdd`

**en review revision:** `7d35837bba0c66b6b660cb56e81eefd0960e2ddadd27d636672f29f60172a875`
**es review revision:** `03c2e9b1dfc3367244e0283fb78534fb75dff3bd37d4910846b7aa271e2f436e`
**pt-BR review revision:** `6ab324b63ec689dd9877dd35360969cfdf74c227b093270e74e46f0f28d699ab`

### English

Which push filter matches release/1.2 and release/2.0 without matching main?

1. paths: \['release/\*\*'\]

   Path filters inspect files, not branch names.

2. branches: \['release/\*\*'\] **[CORRECT]**

   The branch glob covers these release branches.

3. branches: \['release'\]

   This matches only the literal branch release.

4. tags: \['release/\*\*'\]

   Tag filters do not select branch pushes.

**Concept:** Push branch matching

**Authored coaching hints:**

- Identify what kind of ref was pushed.
- Consider glob matching across a slash.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué filtro de push coincide con release/1.2 y release/2.0, pero no con main?

1. paths: \['release/\*\*'\]

   Los filtros de rutas examinan archivos, no ramas.

2. branches: \['release/\*\*'\] **[CORRECT]**

   El patrón de ramas cubre esas ramas release.

3. branches: \['release'\]

   Solo coincide con la rama literal release.

4. tags: \['release/\*\*'\]

   Los filtros de etiquetas no seleccionan pushes de ramas.

**Concept:** Coincidencia de ramas en push

**Authored coaching hints:**

- Identifica qué tipo de referencia recibió el push.
- Considera los patrones que abarcan una barra.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual filtro de push corresponde a release/1.2 e release/2.0, mas não a main?

1. paths: \['release/\*\*'\]

   Filtros de caminhos examinam arquivos, não branches.

2. branches: \['release/\*\*'\] **[CORRECT]**

   O padrão de branches abrange essas branches release.

3. branches: \['release'\]

   Corresponde apenas à branch literal release.

4. tags: \['release/\*\*'\]

   Filtros de tags não selecionam pushes de branches.

**Concept:** Correspondência de branches em push

**Authored coaching hints:**

- Identifique o tipo de referência que recebeu o push.
- Considere padrões que abrangem uma barra.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-003:c2cac937748ffb31301667590be05406fd530f81f284c4d4418353e9583ce137 -->
## Question 3: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-003`

**Content revision:** `c2cac937748ffb31301667590be05406fd530f81f284c4d4418353e9583ce137`

**en review revision:** `51f0c049fc3fb5ee45d1c55cd2429529d3f456975a6ef9789113a1ea178eeb64`
**es review revision:** `84e51be1db119a19d4a92e2c46ef85bb43472c8fcd4f8f3912ce209b1b229f21`
**pt-BR review revision:** `2a4d3f5a829486340245af68da1d93793cc19cf78ce3865fd4ed81b416a57b44`

### English

A repository\_dispatch event contains client\_payload: \{"ticket": 74\}. Which expression reads the ticket?

1. inputs.client\_payload.ticket

   The inputs context does not contain this payload.

2. github.repository.ticket

   Repository identity does not contain event fields.

3. github.event.client\_payload.ticket **[CORRECT]**

   The custom payload is inside the event object.

4. github.event.inputs.ticket

   These are not manual-dispatch inputs.

**Concept:** External dispatch payload

**Authored coaching hints:**

- Separate event data from workflow inputs.
- Follow the JSON object's nesting.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un evento repository\_dispatch contiene client\_payload: \{"ticket": 74\}. ¿Qué expresión lee el ticket?

1. inputs.client\_payload.ticket

   El contexto inputs no contiene esta carga.

2. github.repository.ticket

   La identidad del repositorio no contiene campos del evento.

3. github.event.client\_payload.ticket **[CORRECT]**

   La carga personalizada está dentro del objeto del evento.

4. github.event.inputs.ticket

   No son entradas de despacho manual.

**Concept:** Carga de despacho externo

**Authored coaching hints:**

- Separa los datos del evento de las entradas del flujo.
- Sigue el anidamiento del objeto JSON.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um evento repository\_dispatch contém client\_payload: \{"ticket": 74\}. Qual expressão lê o ticket?

1. inputs.client\_payload.ticket

   O contexto inputs não contém este payload.

2. github.repository.ticket

   A identidade do repositório não contém campos do evento.

3. github.event.client\_payload.ticket **[CORRECT]**

   O payload personalizado fica dentro do objeto do evento.

4. github.event.inputs.ticket

   Estas não são entradas de disparo manual.

**Concept:** Payload de disparo externo

**Authored coaching hints:**

- Separe dados do evento de entradas do workflow.
- Siga o aninhamento do objeto JSON.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-004:2519ebf30e73149bfd171b70b8a3407ecef6eef654a59ff9f2734e572c6b39a5 -->
## Question 4: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-004`

**Content revision:** `2519ebf30e73149bfd171b70b8a3407ecef6eef654a59ff9f2734e572c6b39a5`

**en review revision:** `7faf56cea5b9cee96885ab2ff5c594d45ce70807e6e4df0e18bcdc508e1c0408`
**es review revision:** `396ef22564493981a9751e1a0cdc8ed0c3aaf965cea74db4626b4fc82c1008f5`
**pt-BR review revision:** `64b66c927ba3e71ff9688cfa2a8452ba993c22fb2c96a7e417c9ce2f318007d7`

### English

Under workflow\_dispatch.inputs.retries, which type declares a numeric value?

1. type: integer

   integer is not a supported input type name.

2. type: string

   string declares text instead of a numeric input.

3. type: choice

   choice offers a selection rather than numeric typing.

4. type: number **[CORRECT]**

   number is a supported dispatch input type.

**Concept:** Manual numeric inputs

**Authored coaching hints:**

- Use the workflow schema, not general YAML types.
- Distinguish a value's type from its default.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En workflow\_dispatch.inputs.retries, ¿qué tipo declara un valor numérico?

1. type: integer

   integer no es un nombre de tipo admitido.

2. type: string

   string declara texto en lugar de una entrada numérica.

3. type: choice

   choice ofrece una selección, no tipado numérico.

4. type: number **[CORRECT]**

   number es un tipo de entrada admitido.

**Concept:** Entradas numéricas manuales

**Authored coaching hints:**

- Usa el esquema del flujo, no los tipos generales de YAML.
- Distingue el tipo de un valor de su valor predeterminado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em workflow\_dispatch.inputs.retries, qual tipo declara um valor numérico?

1. type: integer

   integer não é um nome de tipo compatível.

2. type: string

   string declara texto em vez de uma entrada numérica.

3. type: choice

   choice oferece uma seleção, não tipagem numérica.

4. type: number **[CORRECT]**

   number é um tipo de entrada compatível.

**Concept:** Entradas numéricas manuais

**Authored coaching hints:**

- Use o esquema do workflow, não os tipos gerais de YAML.
- Diferencie o tipo de um valor de seu padrão.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-005:5a79da53c90c9629a21cc18e114419aab6fdcf8177f5b2a71f3ffe7c7c07ba7e -->
## Question 5: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-005`

**Content revision:** `5a79da53c90c9629a21cc18e114419aab6fdcf8177f5b2a71f3ffe7c7c07ba7e`

**en review revision:** `b6eb554b09549682a9c227370dddeb0ac76501925c98ccc8b1f4ffb34ae1d067`
**es review revision:** `ca62b5c8a629c7b2d033e0b15c131f59f6eb1b44ead3e4b698ec9f7206aa38f1`
**pt-BR review revision:** `2a05203c2d03679d1e5258d1c1a85f80743a49e62697d9a254d94b010146199b`

### English

With no schedule timezone configured, what does cron: '15 6 \* \* 1' request?

1. Daily at 06:15 UTC

   The weekday field restricts the requested days.

2. Monday at 15:06 UTC

   Minute precedes hour in this cron format.

3. January 6 at 00:15 UTC

   The day and month fields are unrestricted.

4. Monday at 06:15 UTC **[CORRECT]**

   The fields select minute, hour and weekday.

**Concept:** Cron interpretation

**Authored coaching hints:**

- Read the five fields in order.
- A requested schedule is not an execution-time guarantee.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Sin una zona horaria configurada, ¿qué solicita cron: '15 6 \* \* 1'?

1. Cada día a las 06:15 UTC

   El campo semanal limita los días solicitados.

2. Lunes a las 15:06 UTC

   El minuto precede a la hora en este formato.

3. 6 de enero a las 00:15 UTC

   Los campos de día y mes no están restringidos.

4. Lunes a las 06:15 UTC **[CORRECT]**

   Los campos seleccionan minuto, hora y día semanal.

**Concept:** Interpretación de cron

**Authored coaching hints:**

- Lee los cinco campos en orden.
- Una programación no garantiza la hora de ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Sem um fuso horário configurado, o que cron: '15 6 \* \* 1' solicita?

1. Diariamente às 06:15 UTC

   O campo semanal restringe os dias solicitados.

2. Segunda-feira às 15:06 UTC

   O minuto precede a hora neste formato.

3. 6 de janeiro às 00:15 UTC

   Os campos de dia e mês não estão restritos.

4. Segunda-feira às 06:15 UTC **[CORRECT]**

   Os campos selecionam minuto, hora e dia da semana.

**Concept:** Interpretação de cron

**Authored coaching hints:**

- Leia os cinco campos em ordem.
- Um agendamento não garante o horário de execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-006:d405a2c82c7e54079242fa3ef325692cb422b1ce8233e553ce22268f9a257e76 -->
## Question 6: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-006`

**Content revision:** `d405a2c82c7e54079242fa3ef325692cb422b1ce8233e553ce22268f9a257e76`

**en review revision:** `a400ec0b4c438e445828c2b9ff129e059339a7e8d6b0df0243ce49d9c5d93241`
**es review revision:** `cfda8316bb8521c2981af2fa17d32b11a65091cb17522cd4ed73c795b7af05f9`
**pt-BR review revision:** `cb4524c4ec070c728ca7c7a2c5540ee3f28e141a829a994563dba77a012ba831`

### English

Which pull\_request filter restricts runs to changes under docs/?

1. types: \[docs\]

   docs is not a pull request activity type.

2. tags: \['docs/\*\*'\]

   Tag patterns do not filter pull request files.

3. paths: \['docs/\*\*'\] **[CORRECT]**

   paths evaluates the changed file paths.

4. branches: \['docs/\*\*'\]

   branches filters the pull request's base branch.

**Concept:** Pull request path filters

**Authored coaching hints:**

- Classify the requirement as files, refs or activities.
- A directory pattern needs recursive matching.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué filtro de pull\_request limita las ejecuciones a cambios en docs/?

1. types: \[docs\]

   docs no es un tipo de actividad de pull request.

2. tags: \['docs/\*\*'\]

   Los patrones de etiquetas no filtran archivos de pull requests.

3. paths: \['docs/\*\*'\] **[CORRECT]**

   paths evalúa las rutas de archivos modificados.

4. branches: \['docs/\*\*'\]

   branches filtra la rama base de la pull request.

**Concept:** Filtros de rutas en pull requests

**Authored coaching hints:**

- Clasifica el requisito: archivos, referencias o actividades.
- Un patrón de directorio necesita coincidencia recursiva.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual filtro de pull\_request restringe as execuções a alterações em docs/?

1. types: \[docs\]

   docs não é um tipo de atividade de pull request.

2. tags: \['docs/\*\*'\]

   Padrões de tags não filtram arquivos de pull requests.

3. paths: \['docs/\*\*'\] **[CORRECT]**

   paths avalia os caminhos dos arquivos alterados.

4. branches: \['docs/\*\*'\]

   branches filtra a branch base do pull request.

**Concept:** Filtros de caminhos em pull requests

**Authored coaching hints:**

- Classifique o requisito: arquivos, referências ou atividades.
- Um padrão de diretório precisa de correspondência recursiva.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-007:7d69767a9ae1010456003f6893248c26e0f116d10763f816228bf01160072ea7 -->
## Question 7: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-007`

**Content revision:** `7d69767a9ae1010456003f6893248c26e0f116d10763f816228bf01160072ea7`

**en review revision:** `3a4fd86279f0f5313d3eed2a0358f57588cf510aabb21bafd135e7c2d14770d0`
**es review revision:** `0825a18885eade556757f7a2e362fb0f95684908007d09a68a04300e94d16616`
**pt-BR review revision:** `bd7c667bd830ea14fadb37937105025d94df006946c211ae8dbc4fdc81f2fd6c`

### English

Which top-level declaration listens for either push or pull\_request?

1. needs: \[push, pull\_request\]

   needs declares dependencies between jobs.

2. runs-on: \[push, pull\_request\]

   runs-on selects execution runners.

3. types: \[push, pull\_request\]

   types narrows activities within a configured event.

4. on: \[push, pull\_request\] **[CORRECT]**

   on declares the workflow's triggering events.

**Concept:** Multiple trigger syntax

**Authored coaching hints:**

- Events and runner selection serve different purposes.
- Locate the workflow-level event declaration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué declaración de nivel superior escucha push o pull\_request?

1. needs: \[push, pull\_request\]

   needs declara dependencias entre trabajos.

2. runs-on: \[push, pull\_request\]

   runs-on selecciona runners de ejecución.

3. types: \[push, pull\_request\]

   types limita actividades de un evento configurado.

4. on: \[push, pull\_request\] **[CORRECT]**

   on declara los eventos que disparan el flujo.

**Concept:** Sintaxis de varios disparadores

**Authored coaching hints:**

- Los eventos y la selección de runners tienen fines distintos.
- Ubica la declaración de eventos del flujo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual declaração de nível superior escuta push ou pull\_request?

1. needs: \[push, pull\_request\]

   needs declara dependências entre jobs.

2. runs-on: \[push, pull\_request\]

   runs-on seleciona runners de execução.

3. types: \[push, pull\_request\]

   types restringe atividades de um evento configurado.

4. on: \[push, pull\_request\] **[CORRECT]**

   on declara os eventos que disparam o workflow.

**Concept:** Sintaxe de vários gatilhos

**Authored coaching hints:**

- Eventos e seleção de runners têm finalidades diferentes.
- Localize a declaração de eventos do workflow.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-008:176cfadddccffcee3d5cd2155d39638547e1f45715d6564218f63da8c2a92182 -->
## Question 8: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-008`

**Content revision:** `176cfadddccffcee3d5cd2155d39638547e1f45715d6564218f63da8c2a92182`

**en review revision:** `0dd75bb1917839629bd820c159dcd5a2e60fa4c28ea9b68e68ba65a1dae16fdb`
**es review revision:** `db5edd323ebc3ba9d508dff6480e72bb92c99fa0d1405c5861871b37405ede97`
**pt-BR review revision:** `0aebc0ae388cf7e7811c9a3b905c3c13564fcd7fd4db67804f0505c61a289b53`

### English

A workflow\_dispatch string input named region should initially contain west. Which input property provides that value?

1. description: west

   description labels the input without setting its value.

2. options: \[west\]

   options belongs to a choice input's allowed selections.

3. default: west **[CORRECT]**

   default supplies the initial input value.

4. required: west

   required expects a boolean, not this value.

**Concept:** Manual input defaults

**Authored coaching hints:**

- Separate input documentation from input values.
- Requiredness and initialization are independent.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una entrada string de workflow\_dispatch llamada region debe contener west inicialmente. ¿Qué propiedad proporciona ese valor?

1. description: west

   description describe la entrada sin fijar su valor.

2. options: \[west\]

   options define las selecciones de una entrada choice.

3. default: west **[CORRECT]**

   default proporciona el valor inicial de la entrada.

4. required: west

   required espera un booleano, no este valor.

**Concept:** Valores predeterminados de entradas manuales

**Authored coaching hints:**

- Separa la documentación de la entrada de sus valores.
- La obligatoriedad y la inicialización son independientes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma entrada string de workflow\_dispatch chamada region deve conter west inicialmente. Qual propriedade fornece esse valor?

1. description: west

   description descreve a entrada sem definir seu valor.

2. options: \[west\]

   options define as seleções de uma entrada choice.

3. default: west **[CORRECT]**

   default fornece o valor inicial da entrada.

4. required: west

   required espera um booleano, não este valor.

**Concept:** Valores padrão de entradas manuais

**Authored coaching hints:**

- Separe a documentação da entrada de seus valores.
- Obrigatoriedade e inicialização são independentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-009:284fcdb663255f43e1dcdc600c16ea06e8613be6fcc1779dae85398ee25eb862 -->
## Question 9: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-009`

**Content revision:** `284fcdb663255f43e1dcdc600c16ea06e8613be6fcc1779dae85398ee25eb862`

**en review revision:** `c72ef6635c00419b95aa60d9ee9282f1c66f1404e5fa312963531c5cbfedd765`
**es review revision:** `052ad48a8108a45d2c934da0fb15e3035942403343771163f0bf760f671dfa20`
**pt-BR review revision:** `2d50f57349e189e5612d9d0808f544b9d5555f6dc5c641ece144d8568879f751`

### English

Which declaration on a test job makes it wait for the job identified as compile?

1. needs: compile **[CORRECT]**

   needs adds an execution dependency on that job.

2. uses: compile

   uses references an action or reusable workflow.

3. env: compile

   env defines an environment-variable mapping.

4. name: compile

   name changes a display label, not ordering.

**Concept:** Job dependencies

**Authored coaching hints:**

- Job order is not determined by YAML position.
- Use the dependency's identifier, not its display name.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué declaración en un trabajo test lo hace esperar al trabajo identificado como compile?

1. needs: compile **[CORRECT]**

   needs añade una dependencia de ejecución de ese trabajo.

2. uses: compile

   uses referencia una acción o flujo reutilizable.

3. env: compile

   env define un mapa de variables de entorno.

4. name: compile

   name cambia una etiqueta, no el orden.

**Concept:** Dependencias entre trabajos

**Authored coaching hints:**

- El orden no depende de la posición en YAML.
- Usa el identificador de la dependencia, no su nombre visible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual declaração em um job test o faz aguardar o job identificado como compile?

1. needs: compile **[CORRECT]**

   needs adiciona uma dependência de execução desse job.

2. uses: compile

   uses referencia uma ação ou um workflow reutilizável.

3. env: compile

   env define um mapa de variáveis de ambiente.

4. name: compile

   name altera um rótulo, não a ordem.

**Concept:** Dependências entre jobs

**Authored coaching hints:**

- A ordem não depende da posição no YAML.
- Use o identificador da dependência, não seu nome de exibição.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-010:66956c1e624c522bcd1264932fb3e8ce3c85a9f55d3320b95d1ea45dfcaf9739 -->
## Question 10: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-010`

**Content revision:** `66956c1e624c522bcd1264932fb3e8ce3c85a9f55d3320b95d1ea45dfcaf9739`

**en review revision:** `3646f80f0583a459f2bf708eabc8ffc14706791ad97eb0dea47b4985fa0a76a2`
**es review revision:** `ddfc93ba5efe5115be718cf0209e00a404e3a67757b0dc59bf72190801780a57`
**pt-BR review revision:** `288b9a2435435d70c91d7185f8fd78e379ba356f5e5b63d44e9f641910b62727`

### English

Which step condition runs diagnostics after an earlier step in the same job fails?

1. if: $\{\{ cancelled() \}\}

   cancelled tests cancellation, not ordinary failure.

2. if: $\{\{ \!failure() \}\}

   Negating failure excludes the requested failure case.

3. if: $\{\{ failure() \}\} **[CORRECT]**

   failure checks prior failure in this job.

4. if: $\{\{ success() \}\}

   success requires prior steps to have succeeded.

**Concept:** Failure-only steps

**Authored coaching hints:**

- Differentiate failure from cancellation.
- Status functions alter the usual success-only condition.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué condición ejecuta diagnósticos tras fallar un paso anterior del mismo trabajo?

1. if: $\{\{ cancelled() \}\}

   cancelled comprueba cancelación, no un fallo normal.

2. if: $\{\{ \!failure() \}\}

   Negar failure excluye el caso de fallo solicitado.

3. if: $\{\{ failure() \}\} **[CORRECT]**

   failure comprueba fallos anteriores en este trabajo.

4. if: $\{\{ success() \}\}

   success requiere que los pasos anteriores hayan tenido éxito.

**Concept:** Pasos solo ante fallos

**Authored coaching hints:**

- Distingue fallo y cancelación.
- Las funciones de estado alteran la condición habitual de éxito.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual condição executa diagnósticos após uma etapa anterior do mesmo job falhar?

1. if: $\{\{ cancelled() \}\}

   cancelled verifica cancelamento, não uma falha comum.

2. if: $\{\{ \!failure() \}\}

   Negar failure exclui o caso de falha solicitado.

3. if: $\{\{ failure() \}\} **[CORRECT]**

   failure verifica falhas anteriores neste job.

4. if: $\{\{ success() \}\}

   success exige que as etapas anteriores tenham tido sucesso.

**Concept:** Etapas somente em falhas

**Authored coaching hints:**

- Diferencie falha e cancelamento.
- Funções de status alteram a condição habitual de sucesso.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-011:b4df7dd3e1f07236db69ad0ede6fb2eb98fc1390c0a4876a272c388726e2eb7d -->
## Question 11: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-011`

**Content revision:** `b4df7dd3e1f07236db69ad0ede6fb2eb98fc1390c0a4876a272c388726e2eb7d`

**en review revision:** `0ff83bcaff237e042529f4317778f04203992417136afeeaae6e1587c25c3012`
**es review revision:** `a80c4c6aa41f28be8fe663a8f172ee5d6ab303cb08927ca991c0789e5ff84687`
**pt-BR review revision:** `2f6c31b43ef246f21aa3b20aa7fe71df220478921e104b098754545f6c713487`

### English

On a Linux runner using Bash, which command publishes a step output named count with value 8?

1. echo "count=8" &gt;&gt; "$GITHUB\_STEP\_SUMMARY"

   This file renders Markdown in the summary.

2. echo "count=8" &gt;&gt; "$GITHUB\_OUTPUT" **[CORRECT]**

   This file records named step outputs.

3. echo "count=8" &gt;&gt; "$GITHUB\_ENV"

   This file exports variables to later steps.

4. echo "count=8" &gt;&gt; "$GITHUB\_PATH"

   This file adds directories to command lookup.

**Concept:** Step output files

**Authored coaching hints:**

- Runner files have distinct consumers.
- Publishing a value differs from printing it.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un runner Linux con Bash, ¿qué comando publica una salida de paso llamada count con valor 8?

1. echo "count=8" &gt;&gt; "$GITHUB\_STEP\_SUMMARY"

   Este archivo muestra Markdown en el resumen.

2. echo "count=8" &gt;&gt; "$GITHUB\_OUTPUT" **[CORRECT]**

   Este archivo registra salidas de paso con nombre.

3. echo "count=8" &gt;&gt; "$GITHUB\_ENV"

   Este archivo exporta variables a pasos posteriores.

4. echo "count=8" &gt;&gt; "$GITHUB\_PATH"

   Este archivo añade directorios a la búsqueda de comandos.

**Concept:** Archivos de salidas de pasos

**Authored coaching hints:**

- Los archivos del runner tienen consumidores distintos.
- Publicar un valor difiere de imprimirlo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um runner Linux com Bash, qual comando publica uma saída de etapa chamada count com valor 8?

1. echo "count=8" &gt;&gt; "$GITHUB\_STEP\_SUMMARY"

   Este arquivo exibe Markdown no resumo.

2. echo "count=8" &gt;&gt; "$GITHUB\_OUTPUT" **[CORRECT]**

   Este arquivo registra saídas de etapa nomeadas.

3. echo "count=8" &gt;&gt; "$GITHUB\_ENV"

   Este arquivo exporta variáveis para etapas posteriores.

4. echo "count=8" &gt;&gt; "$GITHUB\_PATH"

   Este arquivo adiciona diretórios à busca de comandos.

**Concept:** Arquivos de saídas de etapas

**Authored coaching hints:**

- Os arquivos do runner têm consumidores distintos.
- Publicar um valor é diferente de imprimi-lo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-012:072689efb82672a5033b17e0e7ecce0d66c63ef33e511498862f4e763465781e -->
## Question 12: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-012`

**Content revision:** `072689efb82672a5033b17e0e7ecce0d66c63ef33e511498862f4e763465781e`

**en review revision:** `acb140a98a4adeb19007e4069a9bdbe04d7631dc5f1c3d3c905f53b51177bafe`
**es review revision:** `85f3553fb193f95f782961ce76bdbcdf488c99ddd21deb62a21059b551c41318`
**pt-BR review revision:** `e93c81ebd42e00bf4845a87f3079c4778de5e8c24e07a3518643cf404adbf11f`

### English

A job named package exposes an output named archive. A dependent job declares needs: package. Which reference reads that output?

1. steps.package.outputs.archive

   steps addresses steps within the current job.

2. jobs.package.env.archive

   Job environment variables are not accessed this way.

3. github.package.outputs.archive

   github contains event metadata, not dependency outputs.

4. needs.package.outputs.archive **[CORRECT]**

   needs exposes outputs from dependency jobs.

**Concept:** Dependency output lookup

**Authored coaching hints:**

- Identify whether the producer is a step or job.
- The dependency graph defines cross-job visibility.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo package expone una salida archive. Un trabajo dependiente declara needs: package. ¿Qué referencia lee esa salida?

1. steps.package.outputs.archive

   steps consulta pasos dentro del trabajo actual.

2. jobs.package.env.archive

   No se accede así a variables de entorno de trabajos.

3. github.package.outputs.archive

   github contiene metadatos, no salidas de dependencias.

4. needs.package.outputs.archive **[CORRECT]**

   needs expone salidas de los trabajos de los que depende.

**Concept:** Consulta de salidas de dependencias

**Authored coaching hints:**

- Identifica si el productor es un paso o un trabajo.
- El grafo de dependencias define la visibilidad entre trabajos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job package expõe uma saída archive. Um job dependente declara needs: package. Qual referência lê essa saída?

1. steps.package.outputs.archive

   steps consulta etapas dentro do job atual.

2. jobs.package.env.archive

   Variáveis de ambiente de jobs não são acessadas assim.

3. github.package.outputs.archive

   github contém metadados, não saídas de dependências.

4. needs.package.outputs.archive **[CORRECT]**

   needs expõe saídas dos jobs dos quais este depende.

**Concept:** Consulta de saídas de dependências

**Authored coaching hints:**

- Identifique se o produtor é uma etapa ou um job.
- O grafo de dependências define a visibilidade entre jobs.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-013:cef50dee86060dc3154129f3bbe66d583312afca67c9718332a5f44044cfb572 -->
## Question 13: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-013`

**Content revision:** `cef50dee86060dc3154129f3bbe66d583312afca67c9718332a5f44044cfb572`

**en review revision:** `7aa9212d72e0b87f08edbcfe15cbf35b3839182b4911d70183d2dac2d52c8f9b`
**es review revision:** `e9a6cfb501d35def2e29b41ea49fda3108804e6c5acc2c89a2b64a60565e572d`
**pt-BR review revision:** `701b2764df73dc05447d8a3a733bd5d80ec37680213e92430c9d88fe416fa684`

### English

A Bash step exports MODE=fast, but the next step cannot read it. Which change persists this value for subsequent steps in that job?

1. echo "MODE=fast" &gt;&gt; "$GITHUB\_ENV" **[CORRECT]**

   The runner loads these variables into subsequent steps.

2. echo "MODE=fast" &gt;&gt; "$GITHUB\_OUTPUT"

   Outputs require output-context references, not bare variables.

3. echo "MODE=fast" &gt;&gt; "$GITHUB\_STATE"

   State is for an action's lifecycle phases.

4. echo "MODE=fast" &gt;&gt; "$GITHUB\_PATH"

   PATH entries must be directory paths.

**Concept:** Persisting environment values

**Authored coaching hints:**

- Shell processes do not share exported changes automatically.
- Choose the persistence scope required by the consumer.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso Bash exporta MODE=fast, pero el siguiente no puede leerlo. ¿Qué cambio conserva el valor para pasos posteriores del trabajo?

1. echo "MODE=fast" &gt;&gt; "$GITHUB\_ENV" **[CORRECT]**

   El runner carga estas variables en pasos posteriores.

2. echo "MODE=fast" &gt;&gt; "$GITHUB\_OUTPUT"

   Las salidas requieren referencias de contexto, no variables directas.

3. echo "MODE=fast" &gt;&gt; "$GITHUB\_STATE"

   State corresponde a las fases del ciclo de una acción.

4. echo "MODE=fast" &gt;&gt; "$GITHUB\_PATH"

   Las entradas de PATH deben ser rutas de directorios.

**Concept:** Persistencia de valores de entorno

**Authored coaching hints:**

- Los procesos shell no comparten automáticamente los cambios exportados.
- Elige el ámbito de persistencia que necesita el consumidor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa Bash exporta MODE=fast, mas a seguinte não consegue lê-lo. Qual alteração preserva o valor para etapas posteriores do job?

1. echo "MODE=fast" &gt;&gt; "$GITHUB\_ENV" **[CORRECT]**

   O runner carrega essas variáveis nas etapas posteriores.

2. echo "MODE=fast" &gt;&gt; "$GITHUB\_OUTPUT"

   Saídas exigem referências de contexto, não variáveis diretas.

3. echo "MODE=fast" &gt;&gt; "$GITHUB\_STATE"

   State pertence às fases do ciclo de vida de uma ação.

4. echo "MODE=fast" &gt;&gt; "$GITHUB\_PATH"

   Entradas de PATH devem ser caminhos de diretórios.

**Concept:** Persistência de valores de ambiente

**Authored coaching hints:**

- Processos shell não compartilham alterações exportadas automaticamente.
- Escolha o escopo de persistência necessário ao consumidor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-014:baedf6848387617b423b00ed5dc127cc9d6208c950dfba198a40445236302432 -->
## Question 14: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-014`

**Content revision:** `baedf6848387617b423b00ed5dc127cc9d6208c950dfba198a40445236302432`

**en review revision:** `41f8ca3295b6ba9564d402c3448fdb1bf9c6a5aedad5435386b692c71decdc07`
**es review revision:** `9c128c1eb85104a5f068ab68497c741ab5ba6f62e77dd6c23737ca6b6d9972b1`
**pt-BR review revision:** `4aaac8a74a1ea4e28f8399e661a7f3352eba311e201897772fb6feef8bea8854`

### English

Which workflow-level mapping selects Bash for all run steps unless overridden?

1. defaults: \{steps: \{shell: bash\}\}

   The defaults child key is run, not steps.

2. runs-on: \{shell: bash\}

   runs-on selects a runner, not a shell.

3. defaults: \{run: \{shell: bash\}\} **[CORRECT]**

   defaults.run defines default shell settings.

4. env: \{run: \{shell: bash\}\}

   env maps variable names to values.

**Concept:** Run-step defaults

**Authored coaching hints:**

- Separate execution location from command interpretation.
- Look for a setting that individual steps can override.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mapa de nivel de flujo selecciona Bash para todos los pasos run salvo que se sobrescriba?

1. defaults: \{steps: \{shell: bash\}\}

   La clave secundaria es run, no steps.

2. runs-on: \{shell: bash\}

   runs-on selecciona un runner, no un shell.

3. defaults: \{run: \{shell: bash\}\} **[CORRECT]**

   defaults.run define la configuración predeterminada del shell.

4. env: \{run: \{shell: bash\}\}

   env asigna nombres de variables a valores.

**Concept:** Valores predeterminados de pasos run

**Authored coaching hints:**

- Separa la ubicación de ejecución de la interpretación del comando.
- Busca una configuración que los pasos puedan sobrescribir.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mapa no nível do workflow seleciona Bash para todas as etapas run, salvo substituição?

1. defaults: \{steps: \{shell: bash\}\}

   A chave filha é run, não steps.

2. runs-on: \{shell: bash\}

   runs-on seleciona um runner, não um shell.

3. defaults: \{run: \{shell: bash\}\} **[CORRECT]**

   defaults.run define as configurações padrão do shell.

4. env: \{run: \{shell: bash\}\}

   env associa nomes de variáveis a valores.

**Concept:** Padrões de etapas run

**Authored coaching hints:**

- Separe o local de execução da interpretação do comando.
- Procure uma configuração que etapas individuais possam substituir.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-015:0ec29612e4c4e88f3578ea53c75fdbd3bd064e7a28638646404f04614096f07b -->
## Question 15: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-015`

**Content revision:** `0ec29612e4c4e88f3578ea53c75fdbd3bd064e7a28638646404f04614096f07b`

**en review revision:** `761d376b3ea82e49f8481e4caa5d0a16d0ae51d2505bfad9370baa06d2535e11`
**es review revision:** `59dc92ee660bd7d476ff2ebac0b7c7db2813eb00c9b63497f3143414d5ded67d`
**pt-BR review revision:** `e7e4b3e96463e490571f0ae5cdd2e4b36a76ce2b859fc19fb369dfe5789811ff`

### English

A strategy matrix defines node: \[20, 22\]. Which expression inserts the selected version into an action input?

1. $\{\{ inputs.node \}\}

   inputs refers to declared workflow inputs.

2. $\{\{ matrix.node \}\} **[CORRECT]**

   matrix exposes the current combination's values.

3. $\{\{ strategy.node \}\}

   strategy contains strategy metadata, not custom axes.

4. $\{\{ runner.node \}\}

   runner describes the runner environment.

**Concept:** Matrix context

**Authored coaching hints:**

- Each expanded job has its own selected axis values.
- Do not confuse strategy metadata with test dimensions.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz de estrategia define node: \[20, 22\]. ¿Qué expresión inserta la versión seleccionada en la entrada de una acción?

1. $\{\{ inputs.node \}\}

   inputs se refiere a entradas declaradas del flujo.

2. $\{\{ matrix.node \}\} **[CORRECT]**

   matrix expone los valores de la combinación actual.

3. $\{\{ strategy.node \}\}

   strategy contiene metadatos, no ejes personalizados.

4. $\{\{ runner.node \}\}

   runner describe el entorno del runner.

**Concept:** Contexto de matriz

**Authored coaching hints:**

- Cada trabajo expandido tiene sus propios valores de ejes.
- No confundas metadatos de estrategia con dimensiones de prueba.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz de estratégia define node: \[20, 22\]. Qual expressão insere a versão selecionada na entrada de uma ação?

1. $\{\{ inputs.node \}\}

   inputs refere-se a entradas declaradas do workflow.

2. $\{\{ matrix.node \}\} **[CORRECT]**

   matrix expõe os valores da combinação atual.

3. $\{\{ strategy.node \}\}

   strategy contém metadados, não eixos personalizados.

4. $\{\{ runner.node \}\}

   runner descreve o ambiente do runner.

**Concept:** Contexto de matriz

**Authored coaching hints:**

- Cada job expandido tem seus próprios valores dos eixos.
- Não confunda metadados de estratégia com dimensões de teste.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-016:aa11bb7a1bc03050bc27d3191baa14073bb1f9cc3c04f7844e60e051e2ba3591 -->
## Question 16: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-016`

**Content revision:** `aa11bb7a1bc03050bc27d3191baa14073bb1f9cc3c04f7844e60e051e2ba3591`

**en review revision:** `28987fcf76a37e988522175599751b4091563e2f7d0d91b7558dfdee221df024`
**es review revision:** `ae90c61e31936e07a936653d52f8ca5dfba5694c010c692cd29df80602150338`
**pt-BR review revision:** `919f702cbf303b66f2c46972a82472d9e2ccd6dcc515ce46de55537e78e22914`

### English

A matrix combines os: \[ubuntu-latest, windows-latest\] with node: \[20, 22\]. What does exclude: \[\{os: windows-latest\}\] remove?

1. Only Windows with node 22

   No node value limits this exclusion to 22.

2. Both node 22 combinations

   The exclusion names an OS rather than a runtime.

3. Both Windows combinations **[CORRECT]**

   A partial exclusion matches every combination containing that OS.

4. Only Windows with node 20

   No node value limits this exclusion to 20.

**Concept:** Matrix exclusion matching

**Authored coaching hints:**

- Evaluate only the fields present in the exclusion.
- A partial pattern can match several expanded jobs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz combina os: \[ubuntu-latest, windows-latest\] con node: \[20, 22\]. ¿Qué elimina exclude: \[\{os: windows-latest\}\]?

1. Solo Windows con node 22

   Ningún valor node limita esta exclusión a 22.

2. Las dos combinaciones node 22

   La exclusión nombra un SO, no un runtime.

3. Las dos combinaciones Windows **[CORRECT]**

   Una exclusión parcial coincide con toda combinación de ese SO.

4. Solo Windows con node 20

   Ningún valor node limita esta exclusión a 20.

**Concept:** Coincidencia de exclusiones de matriz

**Authored coaching hints:**

- Evalúa solo los campos presentes en la exclusión.
- Un patrón parcial puede coincidir con varios trabajos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz combina os: \[ubuntu-latest, windows-latest\] com node: \[20, 22\]. O que exclude: \[\{os: windows-latest\}\] remove?

1. Apenas Windows com node 22

   Nenhum valor node limita esta exclusão a 22.

2. As duas combinações node 22

   A exclusão nomeia um SO, não um runtime.

3. As duas combinações Windows **[CORRECT]**

   Uma exclusão parcial corresponde a toda combinação desse SO.

4. Apenas Windows com node 20

   Nenhum valor node limita esta exclusão a 20.

**Concept:** Correspondência de exclusões de matriz

**Authored coaching hints:**

- Avalie apenas os campos presentes na exclusão.
- Um padrão parcial pode corresponder a vários jobs.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-017:08f2da1d7b301b65d68f7aec240074b617ac89715c10a667fa67fc36e103a527 -->
## Question 17: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-017`

**Content revision:** `08f2da1d7b301b65d68f7aec240074b617ac89715c10a667fa67fc36e103a527`

**en review revision:** `fc78b3631cd5d2e9433d1e4e3314c376fa65b00cc4f39fbe63b6cb430984476b`
**es review revision:** `68dc6cbb13fbbb4bd27eb8c79dce216c6e584d197ec0267a2e383c6267f05539`
**pt-BR review revision:** `379a09791528ba07f0e9b29a5fa4d31a070afead32d0abaac55bd2aa64da3b81`

### English

Which matrix strategy property decides whether one non-tolerated failure cancels sibling jobs?

1. max-parallel

   max-parallel limits simultaneous matrix execution.

2. timeout-minutes

   timeout-minutes limits execution duration.

3. continue-on-error

   continue-on-error belongs to job or step failure tolerance.

4. fail-fast **[CORRECT]**

   fail-fast controls cancellation across matrix jobs.

**Concept:** Matrix cancellation policy

**Authored coaching hints:**

- Distinguish tolerating a failure from canceling siblings.
- Identify the setting scoped to strategy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué propiedad de estrategia decide si un fallo no tolerado cancela los trabajos hermanos de la matriz?

1. max-parallel

   max-parallel limita la ejecución simultánea de la matriz.

2. timeout-minutes

   timeout-minutes limita la duración de ejecución.

3. continue-on-error

   continue-on-error define tolerancia a fallos en trabajos o pasos.

4. fail-fast **[CORRECT]**

   fail-fast controla la cancelación entre trabajos de matriz.

**Concept:** Política de cancelación de matriz

**Authored coaching hints:**

- Distingue tolerar un fallo de cancelar trabajos hermanos.
- Identifica la configuración dentro de strategy.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual propriedade de estratégia decide se uma falha não tolerada cancela os jobs irmãos da matriz?

1. max-parallel

   max-parallel limita a execução simultânea da matriz.

2. timeout-minutes

   timeout-minutes limita a duração da execução.

3. continue-on-error

   continue-on-error define tolerância a falhas em jobs ou etapas.

4. fail-fast **[CORRECT]**

   fail-fast controla o cancelamento entre jobs da matriz.

**Concept:** Política de cancelamento de matriz

**Authored coaching hints:**

- Diferencie tolerar uma falha de cancelar jobs irmãos.
- Identifique a configuração dentro de strategy.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-018:fe2832ec3974f70a8efccb023c2cf6716281e9d0163df770403d2f7cb2b6eec3 -->
## Question 18: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-018`

**Content revision:** `fe2832ec3974f70a8efccb023c2cf6716281e9d0163df770403d2f7cb2b6eec3`

**en review revision:** `22b5f320e173f18f8fefd3cc57f0c38379eb335becfdb4922a54689c15f90e7f`
**es review revision:** `b7e378aa149c4d6be32e430805d0c832bf1d57667eb7ed44d4ab5993d15b947b`
**pt-BR review revision:** `b5b86fd2e5f30c836e0ed8c8ea47e7679a57490ec24a507e6bb4f544b9b84686`

### English

What does strategy.max-parallel: 2 change for a six-combination matrix?

1. At most two matrix jobs run simultaneously. **[CORRECT]**

   The limit constrains concurrency, not matrix size.

2. Only two combinations are generated.

   All six combinations remain in the matrix.

3. Every job receives two CPU cores.

   This property does not allocate runner hardware.

4. Each job can contain only two steps.

   Step count is unrelated to matrix concurrency.

**Concept:** Matrix execution limits

**Authored coaching hints:**

- Separate scheduling from expansion.
- A waiting job still belongs to the matrix.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué cambia strategy.max-parallel: 2 en una matriz de seis combinaciones?

1. Como máximo se ejecutan dos trabajos de matriz a la vez. **[CORRECT]**

   El límite restringe la concurrencia, no el tamaño.

2. Solo se generan dos combinaciones.

   Las seis combinaciones permanecen en la matriz.

3. Cada trabajo recibe dos núcleos de CPU.

   Esta propiedad no asigna hardware al runner.

4. Cada trabajo puede contener solo dos pasos.

   El número de pasos no depende de la concurrencia de matriz.

**Concept:** Límites de ejecución de matriz

**Authored coaching hints:**

- Separa la planificación de la expansión.
- Un trabajo en espera sigue perteneciendo a la matriz.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que strategy.max-parallel: 2 altera em uma matriz de seis combinações?

1. No máximo dois jobs da matriz são executados simultaneamente. **[CORRECT]**

   O limite restringe a concorrência, não o tamanho.

2. Apenas duas combinações são geradas.

   As seis combinações permanecem na matriz.

3. Cada job recebe dois núcleos de CPU.

   Esta propriedade não aloca hardware ao runner.

4. Cada job pode conter apenas duas etapas.

   A quantidade de etapas não depende da concorrência da matriz.

**Concept:** Limites de execução de matriz

**Authored coaching hints:**

- Separe o agendamento da expansão.
- Um job aguardando ainda pertence à matriz.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-019:a31c8c2c070e679f054230c2770e83ebd08725f37a8e01d349af283d3717d0b2 -->
## Question 19: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-019`

**Content revision:** `a31c8c2c070e679f054230c2770e83ebd08725f37a8e01d349af283d3717d0b2`

**en review revision:** `f4bc7130cce5cdac020cc736ffeb154c0ac0224e55beb2379f45c8e07c0af507`
**es review revision:** `42118fad261123823460dbef5a0f2d7ddec47d5effc8e5dbfd5aee8a363893b9`
**pt-BR review revision:** `8b7ee78a4ba2da0cdb6c8d195e04b9acd0d59aab43993c4860e097083a0e3ee9`

### English

A container job declares services.redis. Which hostname identifies that service from the job container?

1. redis **[CORRECT]**

   The service label becomes its network hostname.

2. localhost

   localhost refers to the job container itself.

3. github.com

   github.com is not the service container.

4. host.docker.internal

   This host alias is not the service's DNS name.

**Concept:** Service networking

**Authored coaching hints:**

- Identify which network namespace runs the client.
- Service labels participate in container networking.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo en contenedor declara services.redis. ¿Qué nombre de host identifica el servicio desde el contenedor del trabajo?

1. redis **[CORRECT]**

   La etiqueta del servicio se convierte en su hostname.

2. localhost

   localhost se refiere al propio contenedor del trabajo.

3. github.com

   github.com no es el contenedor del servicio.

4. host.docker.internal

   Este alias no es el nombre DNS del servicio.

**Concept:** Red de contenedores de servicio

**Authored coaching hints:**

- Identifica en qué espacio de red se ejecuta el cliente.
- Las etiquetas de servicio participan en la red de contenedores.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job em contêiner declara services.redis. Qual hostname identifica o serviço a partir do contêiner do job?

1. redis **[CORRECT]**

   O rótulo do serviço se torna seu hostname na rede.

2. localhost

   localhost refere-se ao próprio contêiner do job.

3. github.com

   github.com não é o contêiner do serviço.

4. host.docker.internal

   Esse alias não é o nome DNS do serviço.

**Concept:** Rede de contêineres de serviço

**Authored coaching hints:**

- Identifique em qual namespace de rede o cliente é executado.
- Rótulos de serviço participam da rede de contêineres.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers>

<!-- certification-coach-question:actions-020:f3edc2c57a0efcc8cf2545e802d9804a4c573abd08873d12b5d755eb1cf6498f -->
## Question 20: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-020`

**Content revision:** `f3edc2c57a0efcc8cf2545e802d9804a4c573abd08873d12b5d755eb1cf6498f`

**en review revision:** `061d81baceb7b5e9664ba413f7e6a77e976611e14fa635efdeb768100881ea5b`
**es review revision:** `3535b52b34b208618c8afe49257146b4eb47e92fea22800d33423090cade6b2c`
**pt-BR review revision:** `99ce0869978d9b491b27bdbc7440bd6b9464e56eba00bd07e28bb5b41f769281`

### English

A Linux runner job maps a service db using ports: \[5432\]. Which expression reads the assigned host port?

1. $\{\{ runner.services.db.port \}\}

   runner has no services mapping at this path.

2. $\{\{ env.db.ports\[5432\] \}\}

   env does not receive nested service configuration.

3. $\{\{ matrix.db.port \}\}

   A runtime port mapping is not a matrix axis.

4. $\{\{ job.services.db.ports\[5432\] \}\} **[CORRECT]**

   The job context exposes mapped service ports.

**Concept:** Dynamic service ports

**Authored coaching hints:**

- Omitting the host port allows dynamic assignment.
- Look for runtime job information.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo en un runner Linux mapea el servicio db con ports: \[5432\]. ¿Qué expresión lee el puerto asignado en el host?

1. $\{\{ runner.services.db.port \}\}

   runner no tiene un mapa services en esta ruta.

2. $\{\{ env.db.ports\[5432\] \}\}

   env no recibe la configuración anidada del servicio.

3. $\{\{ matrix.db.port \}\}

   El mapeo de puertos no es un eje de matriz.

4. $\{\{ job.services.db.ports\[5432\] \}\} **[CORRECT]**

   El contexto job expone los puertos mapeados del servicio.

**Concept:** Puertos dinámicos de servicios

**Authored coaching hints:**

- Omitir el puerto del host permite asignación dinámica.
- Busca información del trabajo en ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job em um runner Linux mapeia o serviço db com ports: \[5432\]. Qual expressão lê a porta atribuída no host?

1. $\{\{ runner.services.db.port \}\}

   runner não tem um mapa services neste caminho.

2. $\{\{ env.db.ports\[5432\] \}\}

   env não recebe a configuração aninhada do serviço.

3. $\{\{ matrix.db.port \}\}

   O mapeamento de portas não é um eixo da matriz.

4. $\{\{ job.services.db.ports\[5432\] \}\} **[CORRECT]**

   O contexto job expõe as portas mapeadas do serviço.

**Concept:** Portas dinâmicas de serviços

**Authored coaching hints:**

- Omitir a porta do host permite atribuição dinâmica.
- Procure informações do job em execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers>

<!-- certification-coach-question:actions-021:a0aa32a07858f48d896c09f1daad4f98e7263595223ff82a163ec4ce6f3125d9 -->
## Question 21: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-021`

**Content revision:** `a0aa32a07858f48d896c09f1daad4f98e7263595223ff82a163ec4ce6f3125d9`

**en review revision:** `250e89ae85ae631c02811e5097bd95289b701290275111d62a1c08b0b41e5524`
**es review revision:** `4f64708c2ab6586623a7729f53223b4765ccafce0b094edd4ab2d8c35e2ccd09`
**pt-BR review revision:** `06eb71a025b7849396bac99555ddfb85fba4fbdaf8c573af17ec943dc057e2e7`

### English

Which Docker option in a Redis service's options field defines its readiness check?

1. --entrypoint "redis-cli ping"

   entrypoint replaces the container's startup command.

2. --label "redis-cli ping"

   label attaches metadata without executing a check.

3. --health-cmd "redis-cli ping" **[CORRECT]**

   A health command tests container readiness.

4. --hostname "redis-cli ping"

   hostname names the container rather than probing it.

**Concept:** Service readiness probes

**Authored coaching hints:**

- A running process may not yet accept requests.
- Distinguish startup configuration from repeated probing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué opción de Docker en options de un servicio Redis define su comprobación de disponibilidad?

1. --entrypoint "redis-cli ping"

   entrypoint reemplaza el comando de inicio del contenedor.

2. --label "redis-cli ping"

   label añade metadatos sin ejecutar una comprobación.

3. --health-cmd "redis-cli ping" **[CORRECT]**

   Un comando de salud comprueba la disponibilidad del contenedor.

4. --hostname "redis-cli ping"

   hostname nombra el contenedor en lugar de comprobarlo.

**Concept:** Sondas de disponibilidad de servicios

**Authored coaching hints:**

- Un proceso activo puede aún no aceptar solicitudes.
- Distingue la configuración inicial de las comprobaciones periódicas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual opção do Docker em options de um serviço Redis define sua verificação de prontidão?

1. --entrypoint "redis-cli ping"

   entrypoint substitui o comando de inicialização do contêiner.

2. --label "redis-cli ping"

   label adiciona metadados sem executar uma verificação.

3. --health-cmd "redis-cli ping" **[CORRECT]**

   Um comando de integridade verifica a prontidão do contêiner.

4. --hostname "redis-cli ping"

   hostname nomeia o contêiner em vez de verificá-lo.

**Concept:** Sondas de prontidão de serviços

**Authored coaching hints:**

- Um processo ativo pode ainda não aceitar solicitações.
- Diferencie configuração inicial de verificações periódicas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers>

<!-- certification-coach-question:actions-022:557209f712afc5ad868227862199c07ade824b72de54f08c72434e2b7463d9de -->
## Question 22: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-022`

**Content revision:** `557209f712afc5ad868227862199c07ade824b72de54f08c72434e2b7463d9de`

**en review revision:** `ff8e1c5804301618793f3bf7308b3886723b1f5e38e67124dd44c016ccb634cd`
**es review revision:** `3490be96e0f76a6fdf25c350fb58b38b8779756a043e5344293ee442166a9898`
**pt-BR review revision:** `d7a00b7d0d7b5be5b1cd78864d023a84d29357cf752da9f03d6735bf4fedaba2`

### English

In runs-on: \[self-hosted, linux, ARM64\], which runners are eligible?

1. Runners matching any one label

   The array does not express an OR condition.

2. Only GitHub-hosted Linux runners

   self-hosted requires a self-hosted runner.

3. One runner selected for each label

   Labels filter runners; they do not expand jobs.

4. Runners matching all three labels **[CORRECT]**

   An array combines runner labels conjunctively.

**Concept:** Runner selection

**Authored coaching hints:**

- Labels describe capabilities of one runner.
- Do not interpret runner labels as a matrix.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En runs-on: \[self-hosted, linux, ARM64\], ¿qué runners son aptos?

1. Runners que coincidan con una etiqueta cualquiera

   El arreglo no expresa una condición OR.

2. Solo runners Linux hospedados por GitHub

   self-hosted requiere un runner autohospedado.

3. Un runner seleccionado por cada etiqueta

   Las etiquetas filtran runners; no expanden trabajos.

4. Runners que coincidan con las tres etiquetas **[CORRECT]**

   Un arreglo combina las etiquetas de forma conjunta.

**Concept:** Selección de runners

**Authored coaching hints:**

- Las etiquetas describen capacidades de un runner.
- No interpretes etiquetas de runners como una matriz.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em runs-on: \[self-hosted, linux, ARM64\], quais runners são elegíveis?

1. Runners correspondentes a qualquer um dos rótulos

   O array não expressa uma condição OR.

2. Apenas runners Linux hospedados pelo GitHub

   self-hosted exige um runner auto-hospedado.

3. Um runner selecionado para cada rótulo

   Rótulos filtram runners; não expandem jobs.

4. Runners correspondentes aos três rótulos **[CORRECT]**

   Um array combina os rótulos de forma conjunta.

**Concept:** Seleção de runners

**Authored coaching hints:**

- Rótulos descrevem capacidades de um runner.
- Não interprete rótulos de runners como uma matriz.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-023:4cdda5e87af6f66325e13b955b65c865ba8baa0bf4f3dc486f69fcce02cc9ad0 -->
## Question 23: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-023`

**Content revision:** `4cdda5e87af6f66325e13b955b65c865ba8baa0bf4f3dc486f69fcce02cc9ad0`

**en review revision:** `3db73a8557f1c612e718e81fb84ff78d052a6e4797c97b47efeddcc3e48fc229`
**es review revision:** `74188d90ed206869e5ec702fdd2bf34a47bedd16686da45e7613ba89d5cd3b69`
**pt-BR review revision:** `4878e7ac3faed3295360ea395fe1876fe1ab1c7929005e665e8ca63ac761b5c4`

### English

Where can a workflow declare permissions for the GITHUB\_TOKEN used by one particular job?

1. on.push.permissions

   Event filters do not declare token permissions.

2. defaults.run.permissions

   Run defaults configure command execution, not authorization.

3. jobs.build.permissions **[CORRECT]**

   A job-level mapping scopes token permissions to that job.

4. jobs.build.steps.permissions

   A steps sequence has no token-permissions mapping.

**Concept:** Permission declaration scope

**Authored coaching hints:**

- Match the setting's scope to the requested job.
- Trigger configuration and token access are separate.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde puede un flujo declarar permisos del GITHUB\_TOKEN de un trabajo concreto?

1. on.push.permissions

   Los filtros de eventos no declaran permisos del token.

2. defaults.run.permissions

   Los valores run configuran ejecución, no autorización.

3. jobs.build.permissions **[CORRECT]**

   El mapa del trabajo limita los permisos a ese trabajo.

4. jobs.build.steps.permissions

   La secuencia steps no tiene un mapa de permisos del token.

**Concept:** Ámbito de declaración de permisos

**Authored coaching hints:**

- Ajusta el ámbito de la configuración al trabajo solicitado.
- Los disparadores y el acceso del token son independientes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde um workflow pode declarar permissões do GITHUB\_TOKEN usado por um job específico?

1. on.push.permissions

   Filtros de eventos não declaram permissões do token.

2. defaults.run.permissions

   Os padrões de run configuram execução, não autorização.

3. jobs.build.permissions **[CORRECT]**

   O mapa no nível do job limita as permissões a esse job.

4. jobs.build.steps.permissions

   A sequência steps não tem um mapa de permissões do token.

**Concept:** Escopo da declaração de permissões

**Authored coaching hints:**

- Ajuste o escopo da configuração ao job solicitado.
- Gatilhos e acesso do token são independentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-024:c75a934ff8d9bb85007050d4fd4640db447aae49c648fdc349d5a1ce63d0d811 -->
## Question 24: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-024`

**Content revision:** `c75a934ff8d9bb85007050d4fd4640db447aae49c648fdc349d5a1ce63d0d811`

**en review revision:** `2ebc94657775d46d97d72f87f55734425be7b0b9c0957605976f4e84a07891f2`
**es review revision:** `65351d55962c6a608d9426b00f2f090b305608b6d021e92a4df5f5a009b51f54`
**pt-BR review revision:** `546bc5c205d1eec8100ec713073c276eea1cf3b92d6fb59f4bd5f3560fa27a93`

### English

Which event interface groups a reusable workflow's declared inputs, secrets and outputs?

1. workflow\_run

   workflow\_run reacts to another run's lifecycle.

2. repository\_dispatch

   repository\_dispatch receives custom repository events.

3. workflow\_call **[CORRECT]**

   workflow\_call defines the reusable-workflow entry point.

4. workflow\_dispatch

   workflow\_dispatch provides a manual dispatch interface.

**Concept:** Reusable workflow interfaces

**Authored coaching hints:**

- Identify whether the initiator is a caller job.
- Several trigger names describe different invocation contracts.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué interfaz de evento agrupa las entradas, secretos y salidas declarados de un flujo reutilizable?

1. workflow\_run

   workflow\_run reacciona al ciclo de otra ejecución.

2. repository\_dispatch

   repository\_dispatch recibe eventos personalizados del repositorio.

3. workflow\_call **[CORRECT]**

   workflow\_call define la entrada del flujo reutilizable.

4. workflow\_dispatch

   workflow\_dispatch proporciona una interfaz de despacho manual.

**Concept:** Interfaces de flujos reutilizables

**Authored coaching hints:**

- Identifica si el iniciador es un trabajo llamador.
- Varios disparadores describen contratos de invocación distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual interface de evento agrupa as entradas, os segredos e as saídas declarados de um workflow reutilizável?

1. workflow\_run

   workflow\_run reage ao ciclo de outra execução.

2. repository\_dispatch

   repository\_dispatch recebe eventos personalizados do repositório.

3. workflow\_call **[CORRECT]**

   workflow\_call define a entrada do workflow reutilizável.

4. workflow\_dispatch

   workflow\_dispatch fornece uma interface de disparo manual.

**Concept:** Interfaces de workflows reutilizáveis

**Authored coaching hints:**

- Identifique se o iniciador é um job chamador.
- Vários gatilhos descrevem contratos de invocação distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-025:aafa05d5136bcb47864292dcdf416583d18fd57fae77ee2e0f384e9949294f1e -->
## Question 25: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-025`

**Content revision:** `aafa05d5136bcb47864292dcdf416583d18fd57fae77ee2e0f384e9949294f1e`

**en review revision:** `181c1d157a9e3bc8aa7050bf8365dfb2e3fa8699f4310ef0f23bdfc1a1b77349`
**es review revision:** `5696d77501b3a0d21c54c55363579dc8f380ae38c6ad033b0c675c6009733b81`
**pt-BR review revision:** `12499bf482acc2b70c5d8d1f6c4da052b8a78ecc6f22c1bad1c6fd06ad33f33d`

### English

Which type is valid for workflow\_dispatch inputs but not workflow\_call inputs?

1. string

   string is supported by both input interfaces.

2. choice **[CORRECT]**

   choice belongs to the manual input interface.

3. boolean

   boolean is supported by both input interfaces.

4. number

   number is supported by both input interfaces.

**Concept:** Reusable input types

**Authored coaching hints:**

- The two invocation interfaces have different schemas.
- A UI selector does not imply a reusable-workflow type.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tipo es válido en entradas workflow\_dispatch pero no en entradas workflow\_call?

1. string

   string está admitido en ambas interfaces.

2. choice **[CORRECT]**

   choice pertenece a la interfaz de entradas manuales.

3. boolean

   boolean está admitido en ambas interfaces.

4. number

   number está admitido en ambas interfaces.

**Concept:** Tipos de entradas reutilizables

**Authored coaching hints:**

- Las dos interfaces de invocación tienen esquemas distintos.
- Un selector visual no implica un tipo de flujo reutilizable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tipo é válido para entradas workflow\_dispatch, mas não para entradas workflow\_call?

1. string

   string é compatível com ambas as interfaces.

2. choice **[CORRECT]**

   choice pertence à interface de entradas manuais.

3. boolean

   boolean é compatível com ambas as interfaces.

4. number

   number é compatível com ambas as interfaces.

**Concept:** Tipos de entradas reutilizáveis

**Authored coaching hints:**

- As duas interfaces de invocação têm esquemas distintos.
- Um seletor visual não implica um tipo de workflow reutilizável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-026:9a966442c65eb947419513d4759de34e47f943efdec3c558cf51a85e40963bda -->
## Question 26: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-026`

**Content revision:** `9a966442c65eb947419513d4759de34e47f943efdec3c558cf51a85e40963bda`

**en review revision:** `184914cf69c72a73734f3c0e82cdb8de12ee7d0a72ceada06e105e61f85622a3`
**es review revision:** `0b705b22fbb4ae97834e36edbf60495e3d1a6e800e7be423bec0699b291c8c25`
**pt-BR review revision:** `e40b09b01d54527a326af0c49594ca42e426b322c3ae6551a9b994a6a95ab3a5`

### English

A reusable workflow declares a secret named registry\_key. Which caller-job mapping passes secrets.PACKAGE\_KEY under that name?

1. env: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   Caller env is not the reusable secret interface.

2. outputs: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   outputs publishes results instead of passing secrets.

3. secrets: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\} **[CORRECT]**

   secrets maps the caller's value to the declared secret.

4. with: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   with passes inputs rather than declared secrets.

**Concept:** Explicit secret mapping

**Authored coaching hints:**

- Keep input and secret interfaces separate.
- Match the callee's declared parameter name.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable declara el secreto registry\_key. ¿Qué mapa del trabajo llamador pasa secrets.PACKAGE\_KEY con ese nombre?

1. env: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   env del llamador no es la interfaz de secretos reutilizables.

2. outputs: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   outputs publica resultados en lugar de pasar secretos.

3. secrets: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\} **[CORRECT]**

   secrets asigna el valor al secreto declarado.

4. with: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   with pasa entradas, no secretos declarados.

**Concept:** Asignación explícita de secretos

**Authored coaching hints:**

- Mantén separadas las interfaces de entradas y secretos.
- Usa el nombre del parámetro declarado por el flujo llamado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável declara o segredo registry\_key. Qual mapa do job chamador passa secrets.PACKAGE\_KEY com esse nome?

1. env: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   env do chamador não é a interface de segredos reutilizáveis.

2. outputs: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   outputs publica resultados em vez de passar segredos.

3. secrets: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\} **[CORRECT]**

   secrets associa o valor ao segredo declarado.

4. with: \{registry\_key: '$\{\{ secrets.PACKAGE\_KEY \}\}'\}

   with passa entradas, não segredos declarados.

**Concept:** Mapeamento explícito de segredos

**Authored coaching hints:**

- Mantenha separadas as interfaces de entradas e segredos.
- Use o nome do parâmetro declarado pelo workflow chamado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-027:0892e5ec27e86a6877f58956d68e3bd9245f8072b2cd1aef33c500b816650aa5 -->
## Question 27: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-027`

**Content revision:** `0892e5ec27e86a6877f58956d68e3bd9245f8072b2cd1aef33c500b816650aa5`

**en review revision:** `14a4125e7aacecce0c5fd7c5ac49d367315f72189b0e4ae9b0c78ff74d6ce8b2`
**es review revision:** `a4b0d56458659698fcc93a6e13acc7cfdddd4cf6b6251d8dcc1c975cb1fabd6a`
**pt-BR review revision:** `7d7f7115d43f39bff18d28dca52739350dda023dffc82b46d1291d58b5c2a5b5`

### English

A reusable workflow declares a string input named region. Which caller-job field supplies region: west?

1. with: \{region: west\} **[CORRECT]**

   with supplies values to declared workflow inputs.

2. inputs: \{region: west\}

   inputs is not the caller-job argument field.

3. env: \{region: west\}

   Environment propagation is not this input contract.

4. defaults: \{region: west\}

   defaults does not pass reusable-workflow arguments.

**Concept:** Caller input delivery

**Authored coaching hints:**

- A declaration and an argument use different locations.
- The caller supplies values; the callee declares types.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable declara una entrada string llamada region. ¿Qué campo del trabajo llamador proporciona region: west?

1. with: \{region: west\} **[CORRECT]**

   with proporciona valores a entradas declaradas del flujo.

2. inputs: \{region: west\}

   inputs no es el campo de argumentos del trabajo llamador.

3. env: \{region: west\}

   La propagación de entorno no es este contrato de entradas.

4. defaults: \{region: west\}

   defaults no pasa argumentos a flujos reutilizables.

**Concept:** Entrega de entradas del llamador

**Authored coaching hints:**

- Una declaración y un argumento usan ubicaciones distintas.
- El llamador proporciona valores; el llamado declara tipos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável declara uma entrada string chamada region. Qual campo do job chamador fornece region: west?

1. with: \{region: west\} **[CORRECT]**

   with fornece valores às entradas declaradas do workflow.

2. inputs: \{region: west\}

   inputs não é o campo de argumentos do job chamador.

3. env: \{region: west\}

   A propagação de ambiente não é esse contrato de entradas.

4. defaults: \{region: west\}

   defaults não passa argumentos para workflows reutilizáveis.

**Concept:** Entrega de entradas do chamador

**Authored coaching hints:**

- Uma declaração e um argumento usam locais distintos.
- O chamador fornece valores; o chamado declara tipos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-028:c303eb36a827fceb7d23ce65c50a71085ce03c39b3282574d0f6a3eba108feba -->
## Question 28: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-028`

**Content revision:** `c303eb36a827fceb7d23ce65c50a71085ce03c39b3282574d0f6a3eba108feba`

**en review revision:** `c9e09b0659a8ea4ac32dc38eeede173ffe5f21bf8eeabea0b6ee61ecbb8a2716`
**es review revision:** `040f1445b1a701c90f64c0bd8ae552cd01c68d417f54491f35c34426a6c73dd1`
**pt-BR review revision:** `891a8aa3c1175ff62632d3aca1549ea4f030be69df4fddc7df50bec0594abd96`

### English

Which section exposes a called workflow's job result as an output for its caller?

1. defaults.run.outputs

   Run defaults do not declare output interfaces.

2. on.workflow\_call.outputs **[CORRECT]**

   This interface maps job outputs to workflow outputs.

3. on.workflow\_call.inputs

   inputs declares incoming values, not outgoing results.

4. jobs.build.strategy

   strategy controls job expansion and scheduling.

**Concept:** Workflow output interfaces

**Authored coaching hints:**

- Trace the boundary between two workflows.
- An internal job output needs an external interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué sección expone el resultado de un trabajo del flujo llamado como salida para el llamador?

1. defaults.run.outputs

   Los valores predeterminados de run no declaran salidas.

2. on.workflow\_call.outputs **[CORRECT]**

   Esta interfaz asigna salidas de trabajos a salidas del flujo.

3. on.workflow\_call.inputs

   inputs declara valores entrantes, no resultados salientes.

4. jobs.build.strategy

   strategy controla expansión y planificación de trabajos.

**Concept:** Interfaces de salidas de flujos

**Authored coaching hints:**

- Sigue el límite entre dos flujos.
- Una salida interna de trabajo necesita una interfaz externa.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual seção expõe o resultado de um job do workflow chamado como saída para o chamador?

1. defaults.run.outputs

   Os padrões de run não declaram saídas.

2. on.workflow\_call.outputs **[CORRECT]**

   Essa interface associa saídas de jobs a saídas do workflow.

3. on.workflow\_call.inputs

   inputs declara valores de entrada, não resultados de saída.

4. jobs.build.strategy

   strategy controla expansão e agendamento de jobs.

**Concept:** Interfaces de saídas de workflows

**Authored coaching hints:**

- Acompanhe o limite entre dois workflows.
- Uma saída interna de job precisa de uma interface externa.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-029:c1006001332244c4b5c6e8240d5ffe7b52beb4e394257ec75f8baa3ed8c15875 -->
## Question 29: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-029`

**Content revision:** `c1006001332244c4b5c6e8240d5ffe7b52beb4e394257ec75f8baa3ed8c15875`

**en review revision:** `73eeb7e88e6cf1ac8c3553504ac96d0725887a21d18faf5e27fa764fa6fa5be3`
**es review revision:** `73df435cda838b2d706cb82102e3977377ada17763e4575338a756d7e5b84d9b`
**pt-BR review revision:** `d590700674ab5d8b1ad7c29a953593fd30ad7c6f1bcd04d748009b1ada13d750`

### English

An env mapping is anchored as &amp;shared. Which form repeats that complete mapping elsewhere without using a merge key?

1. env: '$\{\{ shared \}\}'

   Actions expressions are not YAML anchor references.

2. env: \*shared **[CORRECT]**

   The alias repeats the previously anchored mapping.

3. env: &amp;shared

   An ampersand defines an anchor rather than referencing one.

4. env: '$shared'

   This is a scalar string, not a YAML alias.

**Concept:** Whole-mapping YAML aliases

**Authored coaching hints:**

- Separate YAML processing from expression evaluation.
- Defining reusable content differs from referencing it.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un mapa env tiene el ancla &amp;shared. ¿Qué forma repite ese mapa completo en otro lugar sin usar una clave de fusión?

1. env: '$\{\{ shared \}\}'

   Las expresiones de Actions no referencian anclas YAML.

2. env: \*shared **[CORRECT]**

   El alias repite el mapa previamente anclado.

3. env: &amp;shared

   El ampersand define un ancla en lugar de referenciarla.

4. env: '$shared'

   Es una cadena escalar, no un alias YAML.

**Concept:** Alias YAML de mapas completos

**Authored coaching hints:**

- Separa el procesamiento YAML de la evaluación de expresiones.
- Definir contenido reutilizable difiere de referenciarlo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um mapa env tem a âncora &amp;shared. Qual forma repete esse mapa completo em outro local sem usar uma chave de mesclagem?

1. env: '$\{\{ shared \}\}'

   Expressões do Actions não referenciam âncoras YAML.

2. env: \*shared **[CORRECT]**

   O alias repete o mapa ancorado anteriormente.

3. env: &amp;shared

   O e comercial define uma âncora em vez de referenciá-la.

4. env: '$shared'

   É uma string escalar, não um alias YAML.

**Concept:** Aliases YAML de mapas completos

**Authored coaching hints:**

- Separe o processamento YAML da avaliação de expressões.
- Definir conteúdo reutilizável é diferente de referenciá-lo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-030:f189229b6586b2ba380e3435088feefad6c4434bbd26ad9790eac5d7e9737689 -->
## Question 30: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-030`

**Content revision:** `f189229b6586b2ba380e3435088feefad6c4434bbd26ad9790eac5d7e9737689`

**en review revision:** `11a1713c6323385f1f6593649d4da27a4958fca78939b637a703911d15fb307b`
**es review revision:** `93b2d3b7da579bceb599b1f7d16e031df2e2eb584ecf1047d8c49c40c0f3fbce`
**pt-BR review revision:** `6f7f223e971beebe24ec3288200ba11cf375339b1814d6fbd230cad7ba0d0a44`

### English

Which context provides the repository name as owner/repository before a job starts?

1. runner.repository

   runner describes an assigned execution environment.

2. job.repository

   job does not define this repository property.

3. steps.repository

   steps contains step results, not repository identity.

4. github.repository **[CORRECT]**

   github provides repository and event metadata.

**Concept:** Workflow context availability

**Authored coaching hints:**

- Some metadata exists before runner allocation.
- Distinguish repository identity from machine identity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué contexto proporciona el nombre owner/repository antes de iniciar un trabajo?

1. runner.repository

   runner describe un entorno de ejecución asignado.

2. job.repository

   job no define esta propiedad de repositorio.

3. steps.repository

   steps contiene resultados de pasos, no la identidad del repositorio.

4. github.repository **[CORRECT]**

   github proporciona metadatos del repositorio y del evento.

**Concept:** Disponibilidad de contextos del flujo

**Authored coaching hints:**

- Algunos metadatos existen antes de asignar el runner.
- Distingue identidad del repositorio y de la máquina.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual contexto fornece o nome owner/repository antes de um job iniciar?

1. runner.repository

   runner descreve um ambiente de execução atribuído.

2. job.repository

   job não define essa propriedade de repositório.

3. steps.repository

   steps contém resultados de etapas, não a identidade do repositório.

4. github.repository **[CORRECT]**

   github fornece metadados do repositório e do evento.

**Concept:** Disponibilidade de contextos do workflow

**Authored coaching hints:**

- Alguns metadados existem antes da alocação do runner.
- Diferencie a identidade do repositório da identidade da máquina.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-031:3f60195d8d3e415d3aa88dce152553ad752675ef6a455550d29fe4b1df1edb3d -->
## Question 31: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-031`

**Content revision:** `3f60195d8d3e415d3aa88dce152553ad752675ef6a455550d29fe4b1df1edb3d`

**en review revision:** `a75e7f9b071059d5a592adc4f70205fcb8a62266c9e6c9745ea950af3b3c78ac`
**es review revision:** `a37a1d07a3bafc7140a0b979b71bde9d7e952347504fdfe691d459b56855417f`
**pt-BR review revision:** `9af1a0121ff65d39dff7eab861c3cb0b268781324c9822bb1a3905866240adb0`

### English

A repository configuration variable is named BUILD\_MODE. Which expression reads it?

1. $\{\{ github.BUILD\_MODE \}\}

   Custom configuration variables are not github properties.

2. $\{\{ inputs.BUILD\_MODE \}\}

   inputs contains invocation inputs, not repository variables.

3. $\{\{ vars.BUILD\_MODE \}\} **[CORRECT]**

   vars exposes configuration variables.

4. $\{\{ env.vars.BUILD\_MODE \}\}

   env does not nest the vars context.

**Concept:** Configuration variables

**Authored coaching hints:**

- Identify how the value was configured.
- Similar names can belong to distinct contexts.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una variable de configuración del repositorio se llama BUILD\_MODE. ¿Qué expresión la lee?

1. $\{\{ github.BUILD\_MODE \}\}

   Las variables personalizadas no son propiedades de github.

2. $\{\{ inputs.BUILD\_MODE \}\}

   inputs contiene entradas de invocación, no variables del repositorio.

3. $\{\{ vars.BUILD\_MODE \}\} **[CORRECT]**

   vars expone las variables de configuración.

4. $\{\{ env.vars.BUILD\_MODE \}\}

   env no contiene el contexto vars anidado.

**Concept:** Variables de configuración

**Authored coaching hints:**

- Identifica cómo se configuró el valor.
- Nombres similares pueden pertenecer a contextos distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma variável de configuração do repositório chama-se BUILD\_MODE. Qual expressão a lê?

1. $\{\{ github.BUILD\_MODE \}\}

   Variáveis personalizadas não são propriedades de github.

2. $\{\{ inputs.BUILD\_MODE \}\}

   inputs contém entradas de invocação, não variáveis do repositório.

3. $\{\{ vars.BUILD\_MODE \}\} **[CORRECT]**

   vars expõe as variáveis de configuração.

4. $\{\{ env.vars.BUILD\_MODE \}\}

   env não contém o contexto vars aninhado.

**Concept:** Variáveis de configuração

**Authored coaching hints:**

- Identifique como o valor foi configurado.
- Nomes semelhantes podem pertencer a contextos distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-032:2619db891ac523cb2d1c6d9a8da52b8442e94e7b303a9df311753f727420929b -->
## Question 32: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-032`

**Content revision:** `2619db891ac523cb2d1c6d9a8da52b8442e94e7b303a9df311753f727420929b`

**en review revision:** `b04392e7484c42bcb2189ea9448842708f0cdf2b213503f5c62a6a62fd38fb44`
**es review revision:** `213c4e8e5c781bc7edb6edf5a7e8b050e7fd9c551ba0ff6ec61ddba89f5a01b8`
**pt-BR review revision:** `cab5757d2d3b81d8af229e411228ca92a15fc09f006d9d0497894817336470d2`

### English

Which expression function converts an object into a JSON string for inspection?

1. join()

   join combines array elements into text.

2. toJSON() **[CORRECT]**

   toJSON serializes structured expression values.

3. fromJSON()

   fromJSON parses JSON in the opposite direction.

4. format()

   format substitutes placeholders in a format string.

**Concept:** Serializing context data

**Authored coaching hints:**

- Determine the conversion's input and output types.
- Serialization differs from parsing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función de expresión convierte un objeto en una cadena JSON para inspeccionarlo?

1. join()

   join combina elementos de un arreglo en texto.

2. toJSON() **[CORRECT]**

   toJSON serializa valores estructurados de expresiones.

3. fromJSON()

   fromJSON analiza JSON en la dirección opuesta.

4. format()

   format sustituye marcadores en una cadena de formato.

**Concept:** Serialización de datos de contexto

**Authored coaching hints:**

- Determina los tipos de entrada y salida de la conversión.
- Serializar difiere de analizar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função de expressão converte um objeto em uma string JSON para inspeção?

1. join()

   join combina elementos de um array em texto.

2. toJSON() **[CORRECT]**

   toJSON serializa valores estruturados de expressões.

3. fromJSON()

   fromJSON interpreta JSON na direção oposta.

4. format()

   format substitui marcadores em uma string de formato.

**Concept:** Serialização de dados de contexto

**Authored coaching hints:**

- Determine os tipos de entrada e saída da conversão.
- Serializar é diferente de interpretar.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-033:51dae3dfd245ebbd7213f5402c8101b416cc38aa270718483c09e6b6fa40d679 -->
## Question 33: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-033`

**Content revision:** `51dae3dfd245ebbd7213f5402c8101b416cc38aa270718483c09e6b6fa40d679`

**en review revision:** `83104951279b0f665dbe9de56809b767fdfedff13e6dd0347a9ad76cf71415ee`
**es review revision:** `d7236707aa431cb79167a54fdad80beb20463428ea1c438c93a5806be98a1fcf`
**pt-BR review revision:** `dac5c545b86fd48cc92215f230e5a37ce49bf836912208df0b7c164023337113`

### English

Which upload-artifact input selects the files to upload, such as dist/\*.zip?

1. name

   name labels the resulting artifact.

2. retention-days

   retention-days selects storage duration.

3. if-no-files-found

   if-no-files-found controls missing-file handling.

4. path **[CORRECT]**

   path selects filesystem content to upload.

**Concept:** Artifact paths

**Authored coaching hints:**

- Separate an artifact's label from its contents.
- A glob describes filesystem selection.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué entrada de upload-artifact selecciona los archivos que se cargarán, como dist/\*.zip?

1. name

   name etiqueta el artefacto resultante.

2. retention-days

   retention-days selecciona la duración de almacenamiento.

3. if-no-files-found

   if-no-files-found controla el manejo de archivos ausentes.

4. path **[CORRECT]**

   path selecciona el contenido del sistema de archivos.

**Concept:** Rutas de artefactos

**Authored coaching hints:**

- Separa la etiqueta del artefacto de su contenido.
- Un patrón glob describe la selección de archivos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual entrada de upload-artifact seleciona os arquivos a enviar, como dist/\*.zip?

1. name

   name rotula o artefato resultante.

2. retention-days

   retention-days seleciona a duração do armazenamento.

3. if-no-files-found

   if-no-files-found controla o tratamento de arquivos ausentes.

4. path **[CORRECT]**

   path seleciona o conteúdo do sistema de arquivos.

**Concept:** Caminhos de artefatos

**Authored coaching hints:**

- Separe o rótulo do artefato de seu conteúdo.
- Um padrão glob descreve a seleção de arquivos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-034:e257f40405cdb7e955112586bd76da659f40e94fa61ea2eef735a1fed404d065 -->
## Question 34: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-034`

**Content revision:** `e257f40405cdb7e955112586bd76da659f40e94fa61ea2eef735a1fed404d065`

**en review revision:** `31f70b7055e86b7fc9a9606d1f8aa2bb04353d8c6dc64be091fe14a8c65bf1bd`
**es review revision:** `03a56f7c2f2430d36a8330391d735d20c9e5b4cf15fbfe5caa169eecefaa1fb7`
**pt-BR review revision:** `198fe98841ec755fcad74b90b732de4b3d319012449fce9db5a6a5d2ea40aaa8`

### English

Which expression produces a hash from matching dependency lockfiles for a cache key?

1. $\{\{ format('\*\*/package-lock.json') \}\}

   format returns formatted text, not a file hash.

2. $\{\{ hashFiles('\*\*/package-lock.json') \}\} **[CORRECT]**

   hashFiles hashes the matching file contents.

3. $\{\{ toJSON('\*\*/package-lock.json') \}\}

   toJSON serializes the pattern string.

4. $\{\{ contains('\*\*/package-lock.json', 'lock') \}\}

   contains tests text membership rather than file content.

**Concept:** File hashing expressions

**Authored coaching hints:**

- A cache key can incorporate derived values.
- Matching filenames and hashing contents are different operations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué expresión produce un hash de los archivos de bloqueo coincidentes para una clave de caché?

1. $\{\{ format('\*\*/package-lock.json') \}\}

   format devuelve texto formateado, no un hash de archivo.

2. $\{\{ hashFiles('\*\*/package-lock.json') \}\} **[CORRECT]**

   hashFiles calcula el hash del contenido de los archivos coincidentes.

3. $\{\{ toJSON('\*\*/package-lock.json') \}\}

   toJSON serializa la cadena del patrón.

4. $\{\{ contains('\*\*/package-lock.json', 'lock') \}\}

   contains comprueba texto, no contenido de archivos.

**Concept:** Expresiones de hash de archivos

**Authored coaching hints:**

- Una clave de caché puede incorporar valores derivados.
- Encontrar nombres y calcular hashes son operaciones distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual expressão produz um hash dos arquivos de lock correspondentes para uma chave de cache?

1. $\{\{ format('\*\*/package-lock.json') \}\}

   format retorna texto formatado, não um hash de arquivo.

2. $\{\{ hashFiles('\*\*/package-lock.json') \}\} **[CORRECT]**

   hashFiles calcula o hash do conteúdo dos arquivos correspondentes.

3. $\{\{ toJSON('\*\*/package-lock.json') \}\}

   toJSON serializa a string do padrão.

4. $\{\{ contains('\*\*/package-lock.json', 'lock') \}\}

   contains verifica texto, não o conteúdo dos arquivos.

**Concept:** Expressões de hash de arquivos

**Authored coaching hints:**

- Uma chave de cache pode incorporar valores derivados.
- Encontrar nomes e calcular hashes são operações distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-035:af458a7b23d9076bb06517a445b29631edd9e0d799c10a08957a71bb195ce07b -->
## Question 35: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-035`

**Content revision:** `af458a7b23d9076bb06517a445b29631edd9e0d799c10a08957a71bb195ce07b`

**en review revision:** `a83b6c51bb272369a772b160604c221125f9bdebf23bf16fa2c7c7d704744f61`
**es review revision:** `1f1ad985bfb75e53f60edc23dac6bf69caeaef7d6dec936500c41d2d65174ec0`
**pt-BR review revision:** `163426331c5cb356ec70b04020bed5dfb3b5922143051b9c8916db289af48f9c`

### English

Which cache input supplies ordered prefixes to try when the primary key misses?

1. restore-keys **[CORRECT]**

   restore-keys defines fallback key prefixes.

2. path

   path identifies files or directories being cached.

3. cache-hit

   cache-hit is an output describing the lookup.

4. retention-days

   retention-days is not the cache fallback-key input.

**Concept:** Cache fallback keys

**Authored coaching hints:**

- Separate lookup inputs from lookup results.
- Fallback order expresses preference among partial matches.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué entrada de caché proporciona prefijos ordenados para probar si no coincide la clave principal?

1. restore-keys **[CORRECT]**

   restore-keys define prefijos de claves alternativas.

2. path

   path identifica archivos o directorios almacenados en caché.

3. cache-hit

   cache-hit es una salida que describe la búsqueda.

4. retention-days

   retention-days no es la entrada de claves alternativas.

**Concept:** Claves alternativas de caché

**Authored coaching hints:**

- Separa entradas y resultados de la búsqueda.
- El orden expresa preferencia entre coincidencias parciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual entrada de cache fornece prefixos ordenados para tentar quando a chave principal não corresponde?

1. restore-keys **[CORRECT]**

   restore-keys define prefixos de chaves alternativas.

2. path

   path identifica arquivos ou diretórios armazenados em cache.

3. cache-hit

   cache-hit é uma saída que descreve a busca.

4. retention-days

   retention-days não é a entrada de chaves alternativas.

**Concept:** Chaves alternativas de cache

**Authored coaching hints:**

- Separe entradas e resultados da busca.
- A ordem expressa preferência entre correspondências parciais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-036:33b79bcf99e30362a4be7369dbe04e56f7e9feef481779303921a6eb0d90e82e -->
## Question 36: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-036`

**Content revision:** `33b79bcf99e30362a4be7369dbe04e56f7e9feef481779303921a6eb0d90e82e`

**en review revision:** `3a8be8285bc94f6d2840ed31d4efcdb6a4ccf388a5564b3071b153349e922481`
**es review revision:** `9c5f27436991f1f8f03e0f3e3c55d5eb9507270cbcef49c0224b100a09ec5f6d`
**pt-BR review revision:** `1f1b71a2c3ed3e78eab02f751426aaa2267992c9e2273ba449ba2833b571d8f4`

### English

In Bash, which command appends a Markdown heading to this step's job summary?

1. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STEP\_SUMMARY" **[CORRECT]**

   The summary file accepts Markdown content.

2. echo "\#\# Tests" &gt;&gt; "$GITHUB\_OUTPUT"

   An output file expects named output assignments.

3. echo "\#\# Tests" &gt;&gt; "$GITHUB\_ENV"

   An environment file expects variable assignments.

4. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STATE"

   State carries lifecycle values, not visible summaries.

**Concept:** Markdown job summaries

**Authored coaching hints:**

- Decide whether the result is data or presentation.
- Runner files differ in their accepted content.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En Bash, ¿qué comando añade un encabezado Markdown al resumen del trabajo de este paso?

1. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STEP\_SUMMARY" **[CORRECT]**

   El archivo de resumen acepta contenido Markdown.

2. echo "\#\# Tests" &gt;&gt; "$GITHUB\_OUTPUT"

   Un archivo de salidas espera asignaciones con nombre.

3. echo "\#\# Tests" &gt;&gt; "$GITHUB\_ENV"

   Un archivo de entorno espera asignaciones de variables.

4. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STATE"

   State lleva valores del ciclo de vida, no resúmenes visibles.

**Concept:** Resúmenes Markdown de trabajos

**Authored coaching hints:**

- Decide si el resultado es un dato o una presentación.
- Los archivos del runner aceptan contenidos distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No Bash, qual comando adiciona um título Markdown ao resumo do job desta etapa?

1. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STEP\_SUMMARY" **[CORRECT]**

   O arquivo de resumo aceita conteúdo Markdown.

2. echo "\#\# Tests" &gt;&gt; "$GITHUB\_OUTPUT"

   Um arquivo de saídas espera atribuições nomeadas.

3. echo "\#\# Tests" &gt;&gt; "$GITHUB\_ENV"

   Um arquivo de ambiente espera atribuições de variáveis.

4. echo "\#\# Tests" &gt;&gt; "$GITHUB\_STATE"

   State transporta valores do ciclo de vida, não resumos visíveis.

**Concept:** Resumos Markdown de jobs

**Authored coaching hints:**

- Decida se o resultado é dado ou apresentação.
- Os arquivos do runner aceitam conteúdos distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-037:0dec9582721cbda38c78c0f9855a4cda97156879bc736a187dc55baa0d0fc821 -->
## Question 37: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-037`

**Content revision:** `0dec9582721cbda38c78c0f9855a4cda97156879bc736a187dc55baa0d0fc821`

**en review revision:** `bc5bba53431d920d92630f399fea44e3c50b23b2e8ac92f61faf8b15a1d9c215`
**es review revision:** `095f2cbf5d04a43f0a87f686a21b62706765afa6de339d670ff902253466bb51`
**pt-BR review revision:** `1e81f055918ad550eb48acc639626a82becc9fa4c8d695572d1bc551e868e652`

### English

What happens to stored artifacts when their associated workflow run is deleted?

1. They attach to the latest successful run.

   Artifacts are not reassigned to another run.

2. The artifacts are deleted too. **[CORRECT]**

   Artifacts are tied to the deleted workflow run.

3. They become repository release assets.

   Deletion does not create release assets.

4. They move into the dependency cache.

   Artifacts and dependency caches have different storage lifecycles.

**Concept:** Artifact lifecycle

**Authored coaching hints:**

- Consider which object owns the stored files.
- A run artifact is not a permanent release asset.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ocurre con los artefactos almacenados cuando se elimina su ejecución de flujo?

1. Se adjuntan a la última ejecución correcta.

   Los artefactos no se reasignan a otra ejecución.

2. Los artefactos también se eliminan. **[CORRECT]**

   Los artefactos están vinculados a la ejecución eliminada.

3. Se convierten en recursos de una release del repositorio.

   La eliminación no crea recursos de release.

4. Se trasladan a la caché de dependencias.

   Artefactos y cachés tienen ciclos de almacenamiento distintos.

**Concept:** Ciclo de vida de artefactos

**Authored coaching hints:**

- Considera qué objeto posee los archivos almacenados.
- Un artefacto de ejecución no es un recurso permanente de release.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que acontece com os artefatos armazenados quando sua execução de workflow é excluída?

1. Eles são anexados à última execução bem-sucedida.

   Os artefatos não são reatribuídos a outra execução.

2. Os artefatos também são excluídos. **[CORRECT]**

   Os artefatos estão vinculados à execução excluída.

3. Eles se tornam recursos de uma release do repositório.

   A exclusão não cria recursos de release.

4. Eles são movidos para o cache de dependências.

   Artefatos e caches têm ciclos de armazenamento distintos.

**Concept:** Ciclo de vida de artefatos

**Authored coaching hints:**

- Considere qual objeto possui os arquivos armazenados.
- Um artefato de execução não é um recurso permanente de release.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts>

<!-- certification-coach-question:actions-038:ead1d0b516a96aeff18554598a9c1fe462228d7118a41b23912f845f0593a376 -->
## Question 38: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-038`

**Content revision:** `ead1d0b516a96aeff18554598a9c1fe462228d7118a41b23912f845f0593a376`

**en review revision:** `c8fe96842944d02d2536f5b490670548abf581c09cf8b2c2993594ef51f96602`
**es review revision:** `27e3339280782946f1a7fa0a1b4e0358e73b366de79d25f3e0988da1ab058a09`
**pt-BR review revision:** `3807c69e8d7575ebd2cd71112bf88f642ec6c0cae32c7f4ed8d3558c8efa3b4a`

### English

A Bash run step must execute npm test from packages/web. Which step property sets that location?

1. path: packages/web

   path is not the run step's working-directory property.

2. runs-on: packages/web

   runs-on is a job-level runner selector.

3. shell: packages/web

   shell selects a command interpreter.

4. working-directory: packages/web **[CORRECT]**

   working-directory selects the command's starting directory.

**Concept:** Step working directories

**Authored coaching hints:**

- Distinguish the shell from its current directory.
- The directory must exist when the step starts.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso run con Bash debe ejecutar npm test desde packages/web. ¿Qué propiedad del paso establece esa ubicación?

1. path: packages/web

   path no es la propiedad de directorio del paso run.

2. runs-on: packages/web

   runs-on selecciona runners a nivel de trabajo.

3. shell: packages/web

   shell selecciona un intérprete de comandos.

4. working-directory: packages/web **[CORRECT]**

   working-directory selecciona el directorio inicial del comando.

**Concept:** Directorios de trabajo de pasos

**Authored coaching hints:**

- Distingue el shell de su directorio actual.
- El directorio debe existir al iniciar el paso.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa run com Bash deve executar npm test em packages/web. Qual propriedade da etapa define esse local?

1. path: packages/web

   path não é a propriedade de diretório da etapa run.

2. runs-on: packages/web

   runs-on seleciona runners no nível do job.

3. shell: packages/web

   shell seleciona um interpretador de comandos.

4. working-directory: packages/web **[CORRECT]**

   working-directory seleciona o diretório inicial do comando.

**Concept:** Diretórios de trabalho de etapas

**Authored coaching hints:**

- Diferencie o shell de seu diretório atual.
- O diretório deve existir quando a etapa iniciar.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-039:0400ebc2cd4a6f07bcf07e8ca819b52c689d8ea23b00be663125d200c9a86503 -->
## Question 39: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-039`

**Content revision:** `0400ebc2cd4a6f07bcf07e8ca819b52c689d8ea23b00be663125d200c9a86503`

**en review revision:** `5ba6ef580a11aa417254935884ddf34eda51b7dc33c1ee7a0cb971bdb3eeda41`
**es review revision:** `1ab55d4a6856b2632bab01b58081ce8320fe7a19e27708dcfbb1f5fe85bd0cf4`
**pt-BR review revision:** `25a47114f9bb72883ae1213ad1bd0f337175cc02697a9450d69de07b090f6468`

### English

Which configuration path should hold the value 20 to limit the entire build job to twenty minutes?

1. jobs.build.timeout-minutes **[CORRECT]**

   A job timeout covers that job's execution.

2. jobs.build.steps\[0\].timeout-minutes

   A step timeout covers only that step.

3. jobs.build.strategy.max-parallel

   max-parallel limits concurrent matrix jobs, not duration.

4. jobs.build.defaults.run.timeout

   This is not a supported run-default timeout property.

**Concept:** Job timeout scope

**Authored coaching hints:**

- Match the configuration nesting to the desired scope.
- Concurrency and elapsed time are different limits.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ruta de configuración debe tener el valor 20 para limitar todo el trabajo build a veinte minutos?

1. jobs.build.timeout-minutes **[CORRECT]**

   El tiempo límite del trabajo abarca su ejecución.

2. jobs.build.steps\[0\].timeout-minutes

   El tiempo límite del paso abarca solo ese paso.

3. jobs.build.strategy.max-parallel

   max-parallel limita concurrencia de matriz, no duración.

4. jobs.build.defaults.run.timeout

   No es una propiedad admitida de tiempo límite de run.

**Concept:** Ámbito del tiempo límite del trabajo

**Authored coaching hints:**

- Ajusta el anidamiento al ámbito deseado.
- Concurrencia y tiempo transcurrido son límites distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual caminho de configuração deve ter o valor 20 para limitar todo o job build a vinte minutos?

1. jobs.build.timeout-minutes **[CORRECT]**

   O tempo limite do job abrange sua execução.

2. jobs.build.steps\[0\].timeout-minutes

   O tempo limite da etapa abrange apenas essa etapa.

3. jobs.build.strategy.max-parallel

   max-parallel limita concorrência da matriz, não duração.

4. jobs.build.defaults.run.timeout

   Essa não é uma propriedade compatível de tempo limite de run.

**Concept:** Escopo do tempo limite do job

**Authored coaching hints:**

- Ajuste o aninhamento ao escopo desejado.
- Concorrência e tempo decorrido são limites distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-040:1a9b4ebe35d765e50e8cc582c732dca7a03ec6a9cac0a0b38d27efbeaea7be6b -->
## Question 40: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-040`

**Content revision:** `1a9b4ebe35d765e50e8cc582c732dca7a03ec6a9cac0a0b38d27efbeaea7be6b`

**en review revision:** `8a31db52a8ae47c2bf7382955e2ae2e862856a89df418bf47415b4716eeb92d9`
**es review revision:** `1a6a3ab1e63d5298623dad8c7a75ceb8268d09c380e999a8b638dfe173ce0704`
**pt-BR review revision:** `c669fb903ed1dd00ca892e893714719d3647c8333232837c7c0aac0619fe560f`

### English

Which step key invokes an action instead of executing a shell command?

1. uses **[CORRECT]**

   uses identifies the action to execute.

2. run

   run contains commands interpreted by a shell.

3. shell

   shell selects the interpreter for run commands.

4. needs

   needs establishes dependencies at job level.

**Concept:** Action steps versus shell steps

**Authored coaching hints:**

- A step has alternative execution forms.
- Do not confuse an action reference with action inputs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de paso invoca una acción en lugar de ejecutar un comando de shell?

1. uses **[CORRECT]**

   uses identifica la acción que se ejecutará.

2. run

   run contiene comandos interpretados por un shell.

3. shell

   shell selecciona el intérprete de comandos run.

4. needs

   needs establece dependencias a nivel de trabajo.

**Concept:** Pasos de acción y de shell

**Authored coaching hints:**

- Un paso tiene formas alternativas de ejecución.
- No confundas la referencia de una acción con sus entradas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave de etapa invoca uma ação em vez de executar um comando de shell?

1. uses **[CORRECT]**

   uses identifica a ação a executar.

2. run

   run contém comandos interpretados por um shell.

3. shell

   shell seleciona o interpretador dos comandos run.

4. needs

   needs estabelece dependências no nível do job.

**Concept:** Etapas de ação e de shell

**Authored coaching hints:**

- Uma etapa tem formas alternativas de execução.
- Não confunda a referência de uma ação com suas entradas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-041:24fcec4d78424aee1ea35bdc8f147bb728a5cc7fc88608f5ad380f90d1f6b2eb -->
## Question 41: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-041`

**Content revision:** `24fcec4d78424aee1ea35bdc8f147bb728a5cc7fc88608f5ad380f90d1f6b2eb`

**en review revision:** `c2544633dd7f9e29f1aeea71e13949994d40447f61d8cee9451db6cc84915464`
**es review revision:** `2143e06def926ad056748fdcbfe6982a36a0de2d4c7523adb6d488a2e2892d19`
**pt-BR review revision:** `2b8d06b54bff1d1bee545840f9cbe6ce0d531738536f0b112a22e87d10644fde`

### English

Which build-job property records its deployment against the environment named preview?

1. deployment: preview

   deployment is not this job schema property.

2. environment: preview **[CORRECT]**

   environment attaches the job to the named environment.

3. env: \{name: preview\}

   env creates a variable named name, not a deployment target.

4. name: preview

   name changes the job's display name.

**Concept:** Environment attachment

**Authored coaching hints:**

- Environment variables and deployment environments differ.
- The setting belongs to the job definition.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué propiedad del trabajo build registra su despliegue en el entorno preview?

1. deployment: preview

   deployment no es esta propiedad del esquema de trabajo.

2. environment: preview **[CORRECT]**

   environment vincula el trabajo al entorno indicado.

3. env: \{name: preview\}

   env crea una variable name, no un destino de despliegue.

4. name: preview

   name cambia el nombre visible del trabajo.

**Concept:** Vinculación de entornos

**Authored coaching hints:**

- Las variables de entorno y los entornos de despliegue difieren.
- La configuración pertenece a la definición del trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual propriedade do job build registra sua implantação no ambiente preview?

1. deployment: preview

   deployment não é essa propriedade do esquema do job.

2. environment: preview **[CORRECT]**

   environment vincula o job ao ambiente indicado.

3. env: \{name: preview\}

   env cria uma variável name, não um destino de implantação.

4. name: preview

   name altera o nome de exibição do job.

**Concept:** Vinculação de ambientes

**Authored coaching hints:**

- Variáveis de ambiente e ambientes de implantação diferem.
- A configuração pertence à definição do job.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-042:3314cc78b43234367c917fa25d50510b55f60e4dd9aaae4a16a4e999fb143739 -->
## Question 42: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-042`

**Content revision:** `3314cc78b43234367c917fa25d50510b55f60e4dd9aaae4a16a4e999fb143739`

**en review revision:** `366c5558ddc5cf1fb9273faeb4275f29865b221bf3f37a65835d609c82a6696c`
**es review revision:** `b62e32eb66f525236618148705da465a7938430e2c7b9d462b3e5d894679c971`
**pt-BR review revision:** `9a9cd95752158688c76ede9cd66ed5c2e5dd919d8213d63be7005ce0524c61be`

### English

Which query parameter restricts an Actions status badge to runs triggered by push?

1. event=push **[CORRECT]**

   event filters the badge by triggering event.

2. branch=push

   branch would select a branch named push.

3. workflow=push

   The workflow file belongs in the badge URL path.

4. status=push

   push is an event name, not a conclusion.

**Concept:** Workflow badge events

**Authored coaching hints:**

- Badge filters distinguish refs from events.
- Read the parameter name as well as its value.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué parámetro restringe una insignia de estado de Actions a ejecuciones disparadas por push?

1. event=push **[CORRECT]**

   event filtra la insignia por evento disparador.

2. branch=push

   branch seleccionaría una rama llamada push.

3. workflow=push

   El archivo del flujo va en la ruta URL de la insignia.

4. status=push

   push es un evento, no una conclusión.

**Concept:** Eventos en insignias de flujos

**Authored coaching hints:**

- Los filtros de insignias distinguen referencias de eventos.
- Lee el nombre del parámetro además de su valor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual parâmetro restringe um badge de status do Actions a execuções disparadas por push?

1. event=push **[CORRECT]**

   event filtra o badge pelo evento disparador.

2. branch=push

   branch selecionaria uma branch chamada push.

3. workflow=push

   O arquivo do workflow fica no caminho da URL do badge.

4. status=push

   push é um evento, não uma conclusão.

**Concept:** Eventos em badges de workflows

**Authored coaching hints:**

- Filtros de badges diferenciam referências de eventos.
- Leia o nome do parâmetro além de seu valor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge>

<!-- certification-coach-question:actions-043:4a558df05390bc4803f1d3eb2726f56050bdb18547ef6d8aa32e1ab914d74490 -->
## Question 43: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-043`

**Content revision:** `4a558df05390bc4803f1d3eb2726f56050bdb18547ef6d8aa32e1ab914d74490`

**en review revision:** `016eca60b209d0743af7b95caf094c836b4f930bbf13106414b3b60b73aef7fe`
**es review revision:** `fd057088a9fed7bee75d9b9c888192ee174cddc0e7a7c04c69d9170dd7f09101`
**pt-BR review revision:** `0a60ea7db7257bb27854d390db9e42658aab912cf6718888c4cb4476843bce05`

### English

Which push configuration selects tags beginning v without selecting branch pushes?

1. types: \[tagged\]

   tagged is not a supported push activity filter.

2. tags: \['v\*'\] **[CORRECT]**

   A tags-only filter selects matching tag refs.

3. branches: \['v\*'\]

   branches selects branch refs, not tag refs.

4. paths: \['v\*'\]

   paths selects changed files, not tag names.

**Concept:** Tag push filtering

**Authored coaching hints:**

- A tag ref is different from the commit it points to.
- Select the ref family before choosing its pattern.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué configuración de push selecciona etiquetas que empiezan por v sin seleccionar pushes de ramas?

1. types: \[tagged\]

   tagged no es un filtro de actividad push admitido.

2. tags: \['v\*'\] **[CORRECT]**

   Un filtro solo de tags selecciona referencias de etiquetas coincidentes.

3. branches: \['v\*'\]

   branches selecciona referencias de ramas, no etiquetas.

4. paths: \['v\*'\]

   paths selecciona archivos modificados, no nombres de etiquetas.

**Concept:** Filtrado de pushes de etiquetas

**Authored coaching hints:**

- Una referencia de etiqueta difiere del commit al que apunta.
- Selecciona la familia de referencias antes del patrón.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração de push seleciona tags que começam com v sem selecionar pushes de branches?

1. types: \[tagged\]

   tagged não é um filtro de atividade push compatível.

2. tags: \['v\*'\] **[CORRECT]**

   Um filtro apenas de tags seleciona referências de tags correspondentes.

3. branches: \['v\*'\]

   branches seleciona referências de branches, não tags.

4. paths: \['v\*'\]

   paths seleciona arquivos alterados, não nomes de tags.

**Concept:** Filtragem de pushes de tags

**Authored coaching hints:**

- Uma referência de tag difere do commit para o qual aponta.
- Selecione a família de referências antes do padrão.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-044:d0089819df3da292536e31c920c91614d9961a18adb555c7cdbd86dcbb5e4de5 -->
## Question 44: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-044`

**Content revision:** `d0089819df3da292536e31c920c91614d9961a18adb555c7cdbd86dcbb5e4de5`

**en review revision:** `198f37018e0e4adf48fa1068a12206edd02ab136db5f23dd8db098e89da5ed0a`
**es review revision:** `5bfd75aef15adc9192d253c0710517536d3ef3e1437418fda1404065765cb03e`
**pt-BR review revision:** `ce50e91ef1b03c1b98fc9b3f5914805cae0748b7596b87ae899494cd6e985f71`

### English

A workflow uses issues: \{types: \[labeled\]\}. Which occurrence triggers it?

1. A repository label is renamed.

   Repository-label changes use a different event.

2. An issue title is edited.

   Title editing uses the edited activity.

3. An issue label is removed.

   Removal is the unlabeled activity.

4. A label is added to an issue. **[CORRECT]**

   labeled describes attaching a label to an issue.

**Concept:** Issue activity payloads

**Authored coaching hints:**

- Separate label definitions from label assignments.
- Activity types distinguish addition from removal.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo usa issues: \{types: \[labeled\]\}. ¿Qué suceso lo dispara?

1. Se renombra una etiqueta del repositorio.

   Los cambios de etiquetas del repositorio usan otro evento.

2. Se edita el título de una issue.

   Editar el título corresponde a la actividad edited.

3. Se elimina una etiqueta de una issue.

   La eliminación corresponde a la actividad unlabeled.

4. Se añade una etiqueta a una issue. **[CORRECT]**

   labeled describe añadir una etiqueta a una issue.

**Concept:** Actividades de issues

**Authored coaching hints:**

- Separa la definición de etiquetas de su asignación.
- Los tipos de actividad distinguen añadir de eliminar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow usa issues: \{types: \[labeled\]\}. Qual ocorrência o dispara?

1. Um rótulo do repositório é renomeado.

   Alterações de rótulos do repositório usam outro evento.

2. O título de uma issue é editado.

   Editar o título corresponde à atividade edited.

3. Um rótulo é removido de uma issue.

   A remoção corresponde à atividade unlabeled.

4. Um rótulo é adicionado a uma issue. **[CORRECT]**

   labeled descreve adicionar um rótulo a uma issue.

**Concept:** Atividades de issues

**Authored coaching hints:**

- Separe definições de rótulos de suas atribuições.
- Tipos de atividade diferenciam adição de remoção.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-045:4bea8d4650c5822c5108225592eb0745d6307c8c88cc18542bba4aa39e2c08bd -->
## Question 45: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-045`

**Content revision:** `4bea8d4650c5822c5108225592eb0745d6307c8c88cc18542bba4aa39e2c08bd`

**en review revision:** `fa879f5987b3a5ed46afed2d2f684570083cab7ba35e49ef5711fb5a11fa4f4d`
**es review revision:** `d980481c80ba53b03b0475ff99d9713de3a9856466f59b7f7ef629d103cc5a53`
**pt-BR review revision:** `0d21c19229ef54925a54a63dd0e42a8e5d93206880d77f699a23a3a2ad4e161a`

### English

Which branch's workflow definition is used for a scheduled run?

1. The workflow editor's current branch

   An editor session does not determine scheduled execution.

2. Every branch containing that workflow

   A schedule does not fan out across repository branches.

3. The repository's default branch **[CORRECT]**

   Scheduled events run on the default branch.

4. The most recently pushed branch

   Recent push timing does not select the schedule's ref.

**Concept:** Scheduled workflow revision

**Authored coaching hints:**

- Scheduling has a repository-level branch rule.
- Do not infer the run ref from editing activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿De qué rama se usa la definición del flujo para una ejecución programada?

1. La rama actual del editor de flujos

   Una sesión del editor no determina la ejecución programada.

2. Cada rama que contiene ese flujo

   Una programación no se distribuye entre todas las ramas.

3. La rama predeterminada del repositorio **[CORRECT]**

   Los eventos programados se ejecutan en la rama predeterminada.

4. La rama con el push más reciente

   El push más reciente no selecciona la referencia programada.

**Concept:** Revisión de flujos programados

**Authored coaching hints:**

- La programación tiene una regla de rama a nivel de repositorio.
- No deduzcas la referencia de ejecución a partir de la edición.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

De qual branch é usada a definição do workflow em uma execução agendada?

1. A branch atual do editor de workflows

   Uma sessão do editor não determina a execução agendada.

2. Cada branch que contém esse workflow

   Um agendamento não se distribui entre todas as branches.

3. A branch padrão do repositório **[CORRECT]**

   Eventos agendados são executados na branch padrão.

4. A branch com o push mais recente

   O push mais recente não seleciona a referência agendada.

**Concept:** Revisão de workflows agendados

**Authored coaching hints:**

- O agendamento tem uma regra de branch no nível do repositório.
- Não deduza a referência da execução pela atividade de edição.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-046:6fae31e0e34241eb76bef8ab43d040652a1e891ec628b2854370a34f5e4a6dd7 -->
## Question 46: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-046`

**Content revision:** `6fae31e0e34241eb76bef8ab43d040652a1e891ec628b2854370a34f5e4a6dd7`

**en review revision:** `87def97222a8c7e7c0df6baf7c2065899b22ec22bf8cea11a4e7572e1f2123f9`
**es review revision:** `50063ba527f24cb02180cc006f5cc772f24812d5e3c950783d9fe5e7adcaad37`
**pt-BR review revision:** `8975a28edda15e3eb360a893eab5a00fd70e277699574ba6d5462e7e1cf85201`

### English

The string variable env.RETRY\_LIMIT is '4'. Which expression converts it to a number for numeric comparison?

1. $\{\{ fromJSON(env.RETRY\_LIMIT) \}\} **[CORRECT]**

   fromJSON parses this JSON numeric text into a number.

2. $\{\{ toJSON(env.RETRY\_LIMIT) \}\}

   toJSON serializes the existing string value.

3. $\{\{ format('\{0\}', env.RETRY\_LIMIT) \}\}

   format returns a formatted string.

4. $\{\{ contains(env.RETRY\_LIMIT, '4') \}\}

   contains returns a boolean membership test.

**Concept:** Explicit string conversion

**Authored coaching hints:**

- Environment values normally arrive as text.
- Choose a conversion that yields the needed type.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La variable de cadena env.RETRY\_LIMIT contiene '4'. ¿Qué expresión la convierte en número para una comparación numérica?

1. $\{\{ fromJSON(env.RETRY\_LIMIT) \}\} **[CORRECT]**

   fromJSON convierte este texto JSON numérico en número.

2. $\{\{ toJSON(env.RETRY\_LIMIT) \}\}

   toJSON serializa el valor de cadena existente.

3. $\{\{ format('\{0\}', env.RETRY\_LIMIT) \}\}

   format devuelve una cadena formateada.

4. $\{\{ contains(env.RETRY\_LIMIT, '4') \}\}

   contains devuelve un booleano de pertenencia.

**Concept:** Conversión explícita de cadenas

**Authored coaching hints:**

- Los valores de entorno suelen llegar como texto.
- Elige una conversión que produzca el tipo necesario.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A variável de string env.RETRY\_LIMIT contém '4'. Qual expressão a converte em número para comparação numérica?

1. $\{\{ fromJSON(env.RETRY\_LIMIT) \}\} **[CORRECT]**

   fromJSON converte esse texto JSON numérico em número.

2. $\{\{ toJSON(env.RETRY\_LIMIT) \}\}

   toJSON serializa o valor de string existente.

3. $\{\{ format('\{0\}', env.RETRY\_LIMIT) \}\}

   format retorna uma string formatada.

4. $\{\{ contains(env.RETRY\_LIMIT, '4') \}\}

   contains retorna um booleano de pertencimento.

**Concept:** Conversão explícita de strings

**Authored coaching hints:**

- Valores de ambiente normalmente chegam como texto.
- Escolha uma conversão que produza o tipo necessário.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-047:e8ba96f4ec3a7892c8464bdb89bff2eacd493f7ed2bd7a3bba71db2d2d16cb85 -->
## Question 47: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-047`

**Content revision:** `e8ba96f4ec3a7892c8464bdb89bff2eacd493f7ed2bd7a3bba71db2d2d16cb85`

**en review revision:** `73a93a9406266905648977ed1b6fd8dabba8c4e04b110ffdf0e90984240cdda0`
**es review revision:** `bf367ed797cc9c2c91b91411d86ae1c9ea32ef62989b7e654e10984f8ded3d4e`
**pt-BR review revision:** `ed0f22c3fb8eb522217dda6d87fa1e28806e60e3fb598a097a7b0c36b196d27e`

### English

A matrix has node: \[20, 22\]. What does include: \[\{node: 22, experimental: true\}\] add to the existing node 22 combination?

1. A third node version

   No new node value appears in the entry.

2. An exclusion of node 20

   include does not exclude the other original combination.

3. An experimental: true field **[CORRECT]**

   The entry augments a compatible original combination.

4. A duplicate node 22 job

   Compatible include data merges into the original combination.

**Concept:** Additive matrix include

**Authored coaching hints:**

- Check whether existing axis values would be overwritten.
- Additional metadata need not create additional jobs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz tiene node: \[20, 22\]. ¿Qué añade include: \[\{node: 22, experimental: true\}\] a la combinación existente node 22?

1. Una tercera versión de node

   No aparece ningún valor node nuevo en la entrada.

2. Una exclusión de node 20

   include no excluye la otra combinación original.

3. Un campo experimental: true **[CORRECT]**

   La entrada amplía una combinación original compatible.

4. Un trabajo node 22 duplicado

   Los datos compatibles de include se añaden a la combinación original.

**Concept:** Include aditivo de matriz

**Authored coaching hints:**

- Comprueba si se sobrescribirían valores existentes de ejes.
- Los metadatos adicionales no tienen por qué crear trabajos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz tem node: \[20, 22\]. O que include: \[\{node: 22, experimental: true\}\] adiciona à combinação existente node 22?

1. Uma terceira versão de node

   Nenhum novo valor node aparece na entrada.

2. Uma exclusão de node 20

   include não exclui a outra combinação original.

3. Um campo experimental: true **[CORRECT]**

   A entrada amplia uma combinação original compatível.

4. Um job node 22 duplicado

   Dados compatíveis de include são adicionados à combinação original.

**Concept:** Include aditivo de matriz

**Authored coaching hints:**

- Verifique se valores existentes dos eixos seriam sobrescritos.
- Metadados adicionais não precisam criar jobs adicionais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-048:df228b2973c1e39278e17b78df9e810b6f7671e58d45e3cec44bb6e42ca4cf29 -->
## Question 48: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-048`

**Content revision:** `df228b2973c1e39278e17b78df9e810b6f7671e58d45e3cec44bb6e42ca4cf29`

**en review revision:** `b7cd0d6ea3e53d4c257d85ff6b264b38d34a3c374163c3b4d157336d2d1b2d71`
**es review revision:** `f35cfab9936713d546b459b0953a58eee00c80a143eaa5e15eb866e2a65c15d8`
**pt-BR review revision:** `f60620e7a4254a6156080d43641a6088948b3d08c08c6956bd5ddbd8ba6713db`

### English

Where must a reusable workflow file reside within its repository?

1. Inside .github/actions/shared/

   An action directory does not define a reusable workflow.

2. Directly in .github/workflows/ **[CORRECT]**

   Reusable workflow files use this directory without subdirectories.

3. Inside .github/workflows/shared/

   Subdirectories are not supported for these workflow files.

4. Directly in workflow-templates/

   This is a template location, not the callable workflow location.

**Concept:** Reusable workflow locations

**Authored coaching hints:**

- Reusable workflows retain workflow-file placement rules.
- A callable workflow is not an action package.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde debe residir un archivo de flujo reutilizable en su repositorio?

1. Dentro de .github/actions/shared/

   Un directorio de acciones no define un flujo reutilizable.

2. Directamente en .github/workflows/ **[CORRECT]**

   Los flujos reutilizables usan este directorio sin subdirectorios.

3. Dentro de .github/workflows/shared/

   No se admiten subdirectorios para estos archivos de flujo.

4. Directamente en workflow-templates/

   Es una ubicación de plantillas, no de flujos invocables.

**Concept:** Ubicación de flujos reutilizables

**Authored coaching hints:**

- Los flujos reutilizables conservan reglas de ubicación de flujos.
- Un flujo invocable no es un paquete de acción.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde um arquivo de workflow reutilizável deve ficar em seu repositório?

1. Dentro de .github/actions/shared/

   Um diretório de ações não define um workflow reutilizável.

2. Diretamente em .github/workflows/ **[CORRECT]**

   Workflows reutilizáveis usam este diretório sem subdiretórios.

3. Dentro de .github/workflows/shared/

   Subdiretórios não são compatíveis com esses arquivos de workflow.

4. Diretamente em workflow-templates/

   Esse é um local de modelos, não de workflows invocáveis.

**Concept:** Localização de workflows reutilizáveis

**Authored coaching hints:**

- Workflows reutilizáveis mantêm as regras de localização de workflows.
- Um workflow invocável não é um pacote de ação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-049:495bbc7c651920a76459dae5efc62732fa7867d0f2573667e26c666150730c91 -->
## Question 49: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-049`

**Content revision:** `495bbc7c651920a76459dae5efc62732fa7867d0f2573667e26c666150730c91`

**en review revision:** `729168fbefb7dc1527a6141e1d2a90192c36ca668d97c50b5c1faf3b5d971c02`
**es review revision:** `123558600568687e1f11551648c8a3f5b51fa203f496ab9e6a96341e1ca7eb1a`
**pt-BR review revision:** `a641641bfb96b6ebdeb6fa933e0dc5fa5416455eb9e2317814ca71024460e912`

### English

In Bash, what value should be appended to GITHUB\_PATH to expose /opt/tools/bin/report to later steps as report?

1. report=/opt/tools/bin/report

   This syntax does not create a shell alias.

2. /opt/tools/bin **[CORRECT]**

   PATH entries contain directories searched for executables.

3. /opt/tools/bin/report

   The executable path itself is not a search directory.

4. PATH=/opt/tools/bin

   GITHUB\_PATH accepts directories, not variable assignments.

**Concept:** Command lookup paths

**Authored coaching hints:**

- Command lookup searches directories rather than filenames.
- Use the file format required by the runner.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En Bash, ¿qué valor debe añadirse a GITHUB\_PATH para que pasos posteriores encuentren /opt/tools/bin/report como report?

1. report=/opt/tools/bin/report

   Esta sintaxis no crea un alias de shell.

2. /opt/tools/bin **[CORRECT]**

   Las entradas PATH contienen directorios de búsqueda de ejecutables.

3. /opt/tools/bin/report

   La ruta del ejecutable no es un directorio de búsqueda.

4. PATH=/opt/tools/bin

   GITHUB\_PATH acepta directorios, no asignaciones de variables.

**Concept:** Rutas de búsqueda de comandos

**Authored coaching hints:**

- La búsqueda de comandos recorre directorios, no archivos.
- Usa el formato de archivo que exige el runner.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No Bash, qual valor deve ser adicionado a GITHUB\_PATH para que etapas posteriores encontrem /opt/tools/bin/report como report?

1. report=/opt/tools/bin/report

   Essa sintaxe não cria um alias de shell.

2. /opt/tools/bin **[CORRECT]**

   Entradas de PATH contêm diretórios de busca de executáveis.

3. /opt/tools/bin/report

   O caminho do executável não é um diretório de busca.

4. PATH=/opt/tools/bin

   GITHUB\_PATH aceita diretórios, não atribuições de variáveis.

**Concept:** Caminhos de busca de comandos

**Authored coaching hints:**

- A busca de comandos percorre diretórios, não arquivos.
- Use o formato de arquivo exigido pelo runner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-050:b59bbef0378252c8eceaefee7b860d9a480a981f9bae8a71588ef818cac75824 -->
## Question 50: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-050`

**Content revision:** `b59bbef0378252c8eceaefee7b860d9a480a981f9bae8a71588ef818cac75824`

**en review revision:** `4e63dfeba66cee895cd5136f38900825b1dcee11e5ae526754fe462e651e97ee`
**es review revision:** `efdfe58f75d84b12112c573ce3586f34befc93867051e12e7847802f3e347eb6`
**pt-BR review revision:** `955d3bd4cb2c6857acae59c250592a9d71dd2bcc259419a68a096c701aa912e9`

### English

An action's pre phase saves tempdir=/work/item through GITHUB\_STATE. Which environment variable reads it in that same action's post phase?

1. INPUT\_tempdir

   INPUT\_ refers to action inputs rather than lifecycle state.

2. OUTPUT\_tempdir

   Outputs do not become OUTPUT\_-prefixed lifecycle variables.

3. GITHUB\_tempdir

   GITHUB\_ is not the saved-state variable prefix.

4. STATE\_tempdir **[CORRECT]**

   Saved state becomes a STATE\_-prefixed variable for that action.

**Concept:** Action lifecycle state

**Authored coaching hints:**

- State is scoped to the action that saved it.
- Lifecycle communication differs from workflow outputs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La fase pre de una acción guarda tempdir=/work/item mediante GITHUB\_STATE. ¿Qué variable lee ese valor en la fase post de la misma acción?

1. INPUT\_tempdir

   INPUT\_ se refiere a entradas, no al estado del ciclo de vida.

2. OUTPUT\_tempdir

   Las salidas no se convierten en variables OUTPUT\_ del ciclo.

3. GITHUB\_tempdir

   GITHUB\_ no es el prefijo del estado guardado.

4. STATE\_tempdir **[CORRECT]**

   El estado guardado usa el prefijo STATE\_ en esa acción.

**Concept:** Estado del ciclo de vida de acciones

**Authored coaching hints:**

- El estado se limita a la acción que lo guardó.
- La comunicación entre fases difiere de las salidas del flujo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A fase pre de uma ação salva tempdir=/work/item por GITHUB\_STATE. Qual variável lê esse valor na fase post da mesma ação?

1. INPUT\_tempdir

   INPUT\_ refere-se a entradas, não ao estado do ciclo de vida.

2. OUTPUT\_tempdir

   Saídas não se tornam variáveis OUTPUT\_ do ciclo.

3. GITHUB\_tempdir

   GITHUB\_ não é o prefixo do estado salvo.

4. STATE\_tempdir **[CORRECT]**

   O estado salvo usa o prefixo STATE\_ nessa ação.

**Concept:** Estado do ciclo de vida de ações

**Authored coaching hints:**

- O estado fica restrito à ação que o salvou.
- A comunicação entre fases difere das saídas do workflow.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-051:7bf5ac7f29d82cd5403c7ee7cf0705fc843b2c163dd5912b92da7a72c3745a81 -->
## Question 51: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-051`

**Content revision:** `7bf5ac7f29d82cd5403c7ee7cf0705fc843b2c163dd5912b92da7a72c3745a81`

**en review revision:** `12fe8b037692ba7588f89c3145bd7f29f5ab2ae78a0c4ad2601fc840ad2e76e5`
**es review revision:** `749fc003551dc142c8295559ed234edb19eb901aef65f8f8e28b4217da0811c0`
**pt-BR review revision:** `0baebc335d839b646c140d20334bc615e19bf4cbfb0347c0e9321395a84f87e2`

### English

Which top-level key labels the workflow itself in the Actions sidebar, rather than naming a particular run?

1. name **[CORRECT]**

   name is the workflow's display label.

2. run-name

   run-name labels individual workflow runs.

3. jobs

   jobs declares the executable job graph.

4. id

   id is not the workflow-level display-name field.

**Concept:** Workflow labels

**Authored coaching hints:**

- Separate a workflow definition from one execution.
- Display labels and execution identifiers differ.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de nivel superior etiqueta el flujo en la barra lateral Actions, en vez de nombrar una ejecución concreta?

1. name **[CORRECT]**

   name es la etiqueta visible del flujo.

2. run-name

   run-name etiqueta ejecuciones individuales del flujo.

3. jobs

   jobs declara el grafo de trabajos ejecutables.

4. id

   id no es el campo de nombre visible del flujo.

**Concept:** Etiquetas de flujos

**Authored coaching hints:**

- Separa la definición del flujo de una ejecución.
- Las etiquetas visibles y los identificadores difieren.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave de nível superior rotula o workflow na barra lateral Actions, em vez de nomear uma execução específica?

1. name **[CORRECT]**

   name é o rótulo de exibição do workflow.

2. run-name

   run-name rotula execuções individuais do workflow.

3. jobs

   jobs declara o grafo de jobs executáveis.

4. id

   id não é o campo de nome de exibição do workflow.

**Concept:** Rótulos de workflows

**Authored coaching hints:**

- Separe a definição do workflow de uma execução.
- Rótulos de exibição e identificadores diferem.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-052:e963f9e4b33edb0c2f27497593b3edf63e795c510b725905ba766482de3606df -->
## Question 52: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-052`

**Content revision:** `e963f9e4b33edb0c2f27497593b3edf63e795c510b725905ba766482de3606df`

**en review revision:** `d74f2acb4393e34d2bf3a32689d8d1572bbfc38eb12d4e697fd93e560ad3d218`
**es review revision:** `6fa0de6a9185bd466bb03b8c34ec5c44a9447cabae76f04491a312805de5d3d5`
**pt-BR review revision:** `8b996f0d600acc6ab1e0fda68f4eb340e55e1947af065cd0ab55d5b7a7699ea7`

### English

For a push to branch feature/parser, which github property contains feature/parser without refs/heads/?

1. github.ref\_name **[CORRECT]**

   ref\_name is the short branch or tag name.

2. github.ref

   ref includes the fully formed ref prefix.

3. github.sha

   sha is the commit identifier, not the branch name.

4. github.ref\_type

   ref\_type identifies branch versus tag.

**Concept:** Reference name forms

**Authored coaching hints:**

- Metadata can describe identity, type or presentation.
- Compare full references with short names.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un push a la rama feature/parser, ¿qué propiedad github contiene feature/parser sin refs/heads/?

1. github.ref\_name **[CORRECT]**

   ref\_name es el nombre corto de la rama o etiqueta.

2. github.ref

   ref incluye el prefijo de referencia completo.

3. github.sha

   sha es el identificador del commit, no la rama.

4. github.ref\_type

   ref\_type distingue rama de etiqueta.

**Concept:** Formas de nombres de referencias

**Authored coaching hints:**

- Los metadatos pueden describir identidad, tipo o presentación.
- Compara referencias completas con nombres cortos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um push para a branch feature/parser, qual propriedade github contém feature/parser sem refs/heads/?

1. github.ref\_name **[CORRECT]**

   ref\_name é o nome curto da branch ou tag.

2. github.ref

   ref inclui o prefixo completo da referência.

3. github.sha

   sha é o identificador do commit, não a branch.

4. github.ref\_type

   ref\_type diferencia branch de tag.

**Concept:** Formas de nomes de referências

**Authored coaching hints:**

- Metadados podem descrever identidade, tipo ou apresentação.
- Compare referências completas com nomes curtos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-053:ecfa7ee9ef06c94629f7538550b7ee91d13511c6813ce84e08ffed2896cdabf2 -->
## Question 53: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-053`

**Content revision:** `ecfa7ee9ef06c94629f7538550b7ee91d13511c6813ce84e08ffed2896cdabf2`

**en review revision:** `aa82ec90636791a64befa99fe7344d2d2058f5e73144449d32be422295eb2ec5`
**es review revision:** `81ca409783bf4c019fbdb6a037524db245515b70c9e2967a4c631c9ef0a0b2e5`
**pt-BR review revision:** `d2c80c9d9899f593dbd878b093f79edfa2d0fde0c19da36aedc4cedb43143574`

### English

MODE is defined only under one step's env mapping. Where is that definition directly available?

1. Within all later steps

   Step env does not persist automatically to later steps.

2. Within every workflow job

   A step-scoped value does not become workflow-wide.

3. Within workflows called afterward

   Called workflows do not inherit this step's env mapping.

4. Within that step **[CORRECT]**

   A step env mapping applies to that step.

**Concept:** Step environment scope

**Authored coaching hints:**

- Configuration nesting determines scope.
- Persistence requires a mechanism beyond local configuration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

MODE se define solo en el mapa env de un paso. ¿Dónde está disponible directamente esa definición?

1. En todos los pasos posteriores

   env del paso no persiste automáticamente en pasos posteriores.

2. En todos los trabajos del flujo

   Un valor de paso no se vuelve global al flujo.

3. En los flujos invocados después

   Los flujos llamados no heredan el mapa env de este paso.

4. Dentro de ese paso **[CORRECT]**

   Un mapa env de paso se aplica a ese paso.

**Concept:** Ámbito de entorno de pasos

**Authored coaching hints:**

- El anidamiento de la configuración determina el ámbito.
- La persistencia requiere algo más que configuración local.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

MODE é definida apenas no mapa env de uma etapa. Onde essa definição fica diretamente disponível?

1. Em todas as etapas posteriores

   env da etapa não persiste automaticamente em etapas posteriores.

2. Em todos os jobs do workflow

   Um valor da etapa não se torna global ao workflow.

3. Nos workflows chamados depois

   Workflows chamados não herdam o mapa env desta etapa.

4. Dentro dessa etapa **[CORRECT]**

   Um mapa env de etapa aplica-se a essa etapa.

**Concept:** Escopo de ambiente de etapas

**Authored coaching hints:**

- O aninhamento da configuração determina o escopo.
- A persistência exige um mecanismo além da configuração local.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-054:0eae1c7e0e6e91c5b37b668ed7a30cab9adf8c6694248d850902d0d6af3f8ce6 -->
## Question 54: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-054`

**Content revision:** `0eae1c7e0e6e91c5b37b668ed7a30cab9adf8c6694248d850902d0d6af3f8ce6`

**en review revision:** `59d96b6c5b9489821b53247c32beb522ac24585c576b63e6e30a069e3c2187db`
**es review revision:** `1605883346f7d2897caca7b5365d5cc0d4d495945cce00b6255f4365cdaca7c8`
**pt-BR review revision:** `cea681d56eb553126112245afc8819549a7f7f5c5a599a4774b2789664cc3f00`

### English

Which YAML form places two Bash commands in one run step while preserving their line break?

1. uses: \|
  echo first
  echo second

   uses expects an action reference rather than shell commands.

2. run: \|
  echo first
  echo second **[CORRECT]**

   The literal block preserves the command line break.

3. run: &gt;
  echo first
  echo second

   The folded block joins these lines into one command line.

4. run: \[echo first, echo second\]

   run expects a string rather than a YAML sequence.

**Concept:** Multiline shell scripts

**Authored coaching hints:**

- Consider YAML scalar styles before shell execution.
- Keeping two lines differs from joining their text.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué forma YAML coloca dos comandos Bash en un paso run conservando el salto de línea?

1. uses: \|
  echo first
  echo second

   uses espera una referencia de acción, no comandos shell.

2. run: \|
  echo first
  echo second **[CORRECT]**

   El bloque literal conserva el salto de línea entre comandos.

3. run: &gt;
  echo first
  echo second

   El bloque plegado une estas líneas en una línea de comando.

4. run: \[echo first, echo second\]

   run espera una cadena, no una secuencia YAML.

**Concept:** Scripts de shell multilínea

**Authored coaching hints:**

- Considera los estilos escalares YAML antes de la ejecución shell.
- Conservar dos líneas difiere de unir su texto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual forma YAML coloca dois comandos Bash em uma etapa run preservando a quebra de linha?

1. uses: \|
  echo first
  echo second

   uses espera uma referência de ação, não comandos shell.

2. run: \|
  echo first
  echo second **[CORRECT]**

   O bloco literal preserva a quebra de linha entre comandos.

3. run: &gt;
  echo first
  echo second

   O bloco dobrado une essas linhas em uma linha de comando.

4. run: \[echo first, echo second\]

   run espera uma string, não uma sequência YAML.

**Concept:** Scripts shell de várias linhas

**Authored coaching hints:**

- Considere os estilos escalares YAML antes da execução shell.
- Preservar duas linhas é diferente de unir seu texto.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-055:7a29797eef39da402219ac146cf7652904155bff72cfcd572334f0b93a95a68c -->
## Question 55: Author and manage workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-055`

**Content revision:** `7a29797eef39da402219ac146cf7652904155bff72cfcd572334f0b93a95a68c`

**en review revision:** `369b703bc3e96f4ca438cdb6dcee77be84f350c956c84b696dea3145214665ce`
**es review revision:** `e99b18867b5c6dea043e4b1dde36b86212a530f0162f1eb312751e1a1ae9fcde`
**pt-BR review revision:** `9a11baa6b44326d9cbd3d8a6dc7400caa730188ea09a16c46e38080633cf9366`

### English

A failing step has id: probe and continue-on-error: true. Which property reports its original failure before tolerance is applied?

1. job.status

   job.status describes the job, not this raw step result.

2. needs.probe.result

   needs addresses jobs, but probe is a step ID.

3. steps.probe.outcome **[CORRECT]**

   outcome records the pre-tolerance step result.

4. steps.probe.conclusion

   conclusion reflects the result after continue-on-error.

**Concept:** Tolerated step failures

**Authored coaching hints:**

- Failure handling can transform the reported conclusion.
- Distinguish step-level evidence from job-level status.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso que falla tiene id: probe y continue-on-error: true. ¿Qué propiedad informa del fallo original antes de aplicar la tolerancia?

1. job.status

   job.status describe el trabajo, no el resultado bruto del paso.

2. needs.probe.result

   needs consulta trabajos, pero probe identifica un paso.

3. steps.probe.outcome **[CORRECT]**

   outcome registra el resultado anterior a la tolerancia.

4. steps.probe.conclusion

   conclusion refleja el resultado tras continue-on-error.

**Concept:** Fallos tolerados de pasos

**Authored coaching hints:**

- El manejo de fallos puede transformar la conclusión.
- Distingue las pruebas del paso del estado del trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa que falha tem id: probe e continue-on-error: true. Qual propriedade informa a falha original antes da aplicação da tolerância?

1. job.status

   job.status descreve o job, não o resultado bruto da etapa.

2. needs.probe.result

   needs consulta jobs, mas probe identifica uma etapa.

3. steps.probe.outcome **[CORRECT]**

   outcome registra o resultado anterior à tolerância.

4. steps.probe.conclusion

   conclusion reflete o resultado após continue-on-error.

**Concept:** Falhas toleradas de etapas

**Authored coaching hints:**

- O tratamento de falhas pode transformar a conclusão.
- Diferencie as evidências da etapa do status do job.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-056:54c2d5f356c7da25e187f5b41a3d97b8bd3d5294c6f8e88ee6fb1c8fc33c1cc0 -->
## Question 56: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-056`

**Content revision:** `54c2d5f356c7da25e187f5b41a3d97b8bd3d5294c6f8e88ee6fb1c8fc33c1cc0`

**en review revision:** `e24f031b46eecf2bdf80ad5e62b5b69ca396b7931c662313828e354e011a7773`
**es review revision:** `f3a11aba88e47374e0422e5041fe46058aad35263c224210de537b6215b39af5`
**pt-BR review revision:** `550f23c4c1b3b41a16629d8e1db263a75865dcf168573f7c533cdac6e0c83578`

### English

Using GitHub CLI in the repository checkout, which command lists runs of ci.yml?

1. gh run list --workflow ci.yml **[CORRECT]**

   run list filters run history by workflow.

2. gh workflow list --all

   workflow list lists workflow definitions, not their runs.

3. gh run view ci.yml

   run view expects a run selector, not this filename.

4. gh workflow view ci.yml --yaml

   workflow view --yaml displays the workflow definition.

**Concept:** CLI run discovery

**Authored coaching hints:**

- Distinguish workflow definitions from execution history.
- A workflow filename can filter a list of runs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con GitHub CLI en la copia local del repositorio, ¿qué comando lista las ejecuciones de ci.yml?

1. gh run list --workflow ci.yml **[CORRECT]**

   run list filtra el historial por flujo.

2. gh workflow list --all

   workflow list enumera definiciones, no sus ejecuciones.

3. gh run view ci.yml

   run view espera una ejecución, no este nombre de archivo.

4. gh workflow view ci.yml --yaml

   workflow view --yaml muestra la definición del flujo.

**Concept:** Búsqueda de ejecuciones con CLI

**Authored coaching hints:**

- Distingue las definiciones de flujos del historial de ejecución.
- Un archivo de flujo puede filtrar una lista de ejecuciones.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com GitHub CLI na cópia local do repositório, qual comando lista as execuções de ci.yml?

1. gh run list --workflow ci.yml **[CORRECT]**

   run list filtra o histórico por workflow.

2. gh workflow list --all

   workflow list enumera definições, não suas execuções.

3. gh run view ci.yml

   run view espera uma execução, não esse nome de arquivo.

4. gh workflow view ci.yml --yaml

   workflow view --yaml exibe a definição do workflow.

**Concept:** Busca de execuções pela CLI

**Authored coaching hints:**

- Diferencie definições de workflows do histórico de execução.
- Um arquivo de workflow pode filtrar uma lista de execuções.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history>

<!-- certification-coach-question:actions-057:a1add06d014d860431b4f2fdc941c25d3202917808c959b01cf8686332bb60be -->
## Question 57: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-057`

**Content revision:** `a1add06d014d860431b4f2fdc941c25d3202917808c959b01cf8686332bb60be`

**en review revision:** `9813fa1324044d07baf8b0d4d036589c7840a82d3d4af290ef383c7a19ada193`
**es review revision:** `559beda15c9f1e7d23967a3edd72051c91ef6a0fd6983ed759c001cbd410acba`
**pt-BR review revision:** `1b9b82af51fb4113b9dab0a801fb5ac77bb0a1948cbd38a36158a037163ae1b9`

### English

Which Actions secret set to true enables additional step debug messages in subsequent runs?

1. ACTIONS\_RUNNER\_DEBUG

   This setting enables runner diagnostic log files.

2. RUNNER\_DEBUG

   RUNNER\_DEBUG indicates enabled debug mode to running code.

3. ACTIONS\_DEBUG

   ACTIONS\_DEBUG is not the documented step-debug switch.

4. ACTIONS\_STEP\_DEBUG **[CORRECT]**

   This setting enables verbose step debug logging.

**Concept:** Step debug configuration

**Authored coaching hints:**

- Differentiate application-step detail from runner diagnostics.
- A documented setting name must match exactly.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué secreto de Actions con valor true habilita mensajes adicionales de depuración de pasos en ejecuciones posteriores?

1. ACTIONS\_RUNNER\_DEBUG

   Esta configuración habilita archivos de diagnóstico del runner.

2. RUNNER\_DEBUG

   RUNNER\_DEBUG indica al código que el modo de depuración está activo.

3. ACTIONS\_DEBUG

   ACTIONS\_DEBUG no es el interruptor documentado para pasos.

4. ACTIONS\_STEP\_DEBUG **[CORRECT]**

   Esta configuración habilita depuración detallada de pasos.

**Concept:** Configuración de depuración de pasos

**Authored coaching hints:**

- Distingue el detalle de pasos del diagnóstico del runner.
- El nombre documentado debe coincidir exactamente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual segredo do Actions com valor true habilita mensagens adicionais de depuração de etapas nas próximas execuções?

1. ACTIONS\_RUNNER\_DEBUG

   Essa configuração habilita arquivos de diagnóstico do runner.

2. RUNNER\_DEBUG

   RUNNER\_DEBUG indica ao código que o modo de depuração está ativo.

3. ACTIONS\_DEBUG

   ACTIONS\_DEBUG não é a opção documentada para etapas.

4. ACTIONS\_STEP\_DEBUG **[CORRECT]**

   Essa configuração habilita depuração detalhada de etapas.

**Concept:** Configuração de depuração de etapas

**Authored coaching hints:**

- Diferencie detalhes de etapas de diagnósticos do runner.
- O nome documentado deve corresponder exatamente.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging>

<!-- certification-coach-question:actions-058:c6d530a104e88dd6fc74a51c70277eafdebed0ec32363126f1a7ddde7d1db8fd -->
## Question 58: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-058`

**Content revision:** `c6d530a104e88dd6fc74a51c70277eafdebed0ec32363126f1a7ddde7d1db8fd`

**en review revision:** `4db9a827b9f73cfe30d0ef7d64b42fc3d60d2676c9ab0af5e14dad4316ee2fc8`
**es review revision:** `d71f8d10abc518154c46498a96a7a5dcf7ee9ed03b67dbb27a84f7ac4ff3feac`
**pt-BR review revision:** `8381e5ce8fcdc0a1159de5e00f37b91e4519a37ec3d77a96d3f55dcb9b6e7eb2`

### English

With ACTIONS\_RUNNER\_DEBUG=true, where should an investigator look for runner process diagnostics after downloading the logs?

1. The repository's release assets

   Runner debug does not publish release assets.

2. The workflow's Markdown summary

   These process logs are not rendered as a job summary.

3. The runner-diagnostic-logs folder **[CORRECT]**

   Diagnostic logs are included in this archive folder.

4. The uploaded dependency cache

   Caches store selected workflow files, not these diagnostics.

**Concept:** Runner diagnostic archives

**Authored coaching hints:**

- The download archive may contain more than step output.
- Debug artifacts have a dedicated location.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con ACTIONS\_RUNNER\_DEBUG=true, ¿dónde debe buscar los diagnósticos del proceso del runner tras descargar los registros?

1. Los recursos de release del repositorio

   La depuración del runner no publica recursos de release.

2. El resumen Markdown del flujo

   Estos registros de procesos no se muestran como resumen.

3. La carpeta runner-diagnostic-logs **[CORRECT]**

   Los diagnósticos se incluyen en esta carpeta del archivo.

4. La caché de dependencias cargada

   Las cachés guardan archivos seleccionados, no estos diagnósticos.

**Concept:** Archivos de diagnóstico del runner

**Authored coaching hints:**

- El archivo descargado puede contener más que salidas de pasos.
- Los archivos de depuración tienen una ubicación específica.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com ACTIONS\_RUNNER\_DEBUG=true, onde procurar os diagnósticos do processo do runner após baixar os logs?

1. Os recursos de release do repositório

   A depuração do runner não publica recursos de release.

2. O resumo Markdown do workflow

   Esses logs de processos não são exibidos como resumo.

3. A pasta runner-diagnostic-logs **[CORRECT]**

   Os diagnósticos são incluídos nessa pasta do arquivo.

4. O cache de dependências enviado

   Caches armazenam arquivos selecionados, não esses diagnósticos.

**Concept:** Arquivos de diagnóstico do runner

**Authored coaching hints:**

- O arquivo baixado pode conter mais que saídas de etapas.
- Os arquivos de depuração têm um local específico.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging>

<!-- certification-coach-question:actions-059:1823692aca67134dbf85b08e98c9cd83d7552957b2de8ce3fa2fa5c859063920 -->
## Question 59: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-059`

**Content revision:** `1823692aca67134dbf85b08e98c9cd83d7552957b2de8ce3fa2fa5c859063920`

**en review revision:** `df2628a6496a941602497029e754fe2e71d79aedb9da79756baaeb5e95af067a`
**es review revision:** `121f9602281f2732482dcd54e56aac273ca529a153ca5b3b6af78d25da709257`
**pt-BR review revision:** `fcc51a51f8879c73d6cb6c50d7c2d66e3c2ab168ca9f077b31f59f0b08cc29c0`

### English

For run 731, which GitHub CLI command corresponds to Re-run failed jobs in the English Actions UI?

1. gh run rerun 731

   Without the flag, this requests a full rerun.

2. gh run watch 731 --exit-status

   watch observes a run without retrying jobs.

3. gh run view 731 --log-failed

   view reads failed-step logs without starting execution.

4. gh run rerun 731 --failed **[CORRECT]**

   The failed flag selects failed jobs for retry.

**Concept:** CLI failed-job retries

**Authored coaching hints:**

- Observation and retry are distinct operations.
- Check the flag that narrows retry scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para la ejecución 731, ¿qué comando de GitHub CLI corresponde a Re-run failed jobs en Actions en inglés?

1. gh run rerun 731

   Sin la opción, solicita repetir la ejecución completa.

2. gh run watch 731 --exit-status

   watch observa una ejecución sin reintentar trabajos.

3. gh run view 731 --log-failed

   view lee registros de pasos fallidos sin iniciar ejecución.

4. gh run rerun 731 --failed **[CORRECT]**

   La opción failed selecciona trabajos fallidos para reintentar.

**Concept:** Reintentos de trabajos fallidos con CLI

**Authored coaching hints:**

- Observar y reintentar son operaciones distintas.
- Comprueba la opción que limita el ámbito del reintento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para a execução 731, qual comando do GitHub CLI corresponde a Re-run failed jobs em Actions em inglês?

1. gh run rerun 731

   Sem a opção, solicita repetir a execução completa.

2. gh run watch 731 --exit-status

   watch observa uma execução sem tentar jobs novamente.

3. gh run view 731 --log-failed

   view lê logs de etapas com falha sem iniciar execução.

4. gh run rerun 731 --failed **[CORRECT]**

   A opção failed seleciona jobs com falha para nova tentativa.

**Concept:** Novas tentativas de jobs com falha pela CLI

**Authored coaching hints:**

- Observar e tentar novamente são operações distintas.
- Verifique a opção que restringe o escopo da nova tentativa.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-060:70973e049fbdde63c7cc24800f57f46b59a50f619deb82bf32e945f15568d0f5 -->
## Question 60: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-060`

**Content revision:** `70973e049fbdde63c7cc24800f57f46b59a50f619deb82bf32e945f15568d0f5`

**en review revision:** `855fec537226980829019bdbffb2ed5d55444f41049625e289d5f4431a2ce784`
**es review revision:** `d418e9789109199d3c623202ead5f52a7f506725edcb3b1d5f5432ef4a841da4`
**pt-BR review revision:** `341da609e59712c7dd17bc44d33469da211bcd613202952ce902cb29f0faa3dc`

### English

Which GitHub CLI command prints only failed-step logs from completed run 731?

1. gh run download 731

   download retrieves artifacts rather than console logs.

2. gh run view 731 --log-failed **[CORRECT]**

   log-failed narrows output to failed steps.

3. gh run view 731 --log

   log prints logs beyond just failed steps.

4. gh run list --status failure

   list returns run history, not step log content.

**Concept:** CLI failed-step logs

**Authored coaching hints:**

- A run conclusion is not the underlying error text.
- Choose a read operation with the requested granularity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de GitHub CLI imprime solo los registros de pasos fallidos de la ejecución terminada 731?

1. gh run download 731

   download obtiene artefactos, no registros de consola.

2. gh run view 731 --log-failed **[CORRECT]**

   log-failed limita la salida a pasos fallidos.

3. gh run view 731 --log

   log imprime registros de más pasos que los fallidos.

4. gh run list --status failure

   list devuelve historial, no contenido de registros de pasos.

**Concept:** Registros de pasos fallidos con CLI

**Authored coaching hints:**

- La conclusión de una ejecución no es el texto del error.
- Elige una lectura con la granularidad solicitada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do GitHub CLI imprime apenas os logs de etapas com falha da execução concluída 731?

1. gh run download 731

   download obtém artefatos, não logs de console.

2. gh run view 731 --log-failed **[CORRECT]**

   log-failed restringe a saída a etapas com falha.

3. gh run view 731 --log

   log imprime logs de mais etapas que as com falha.

4. gh run list --status failure

   list retorna histórico, não conteúdo de logs de etapas.

**Concept:** Logs de etapas com falha pela CLI

**Authored coaching hints:**

- A conclusão de uma execução não é o texto do erro.
- Escolha uma leitura com a granularidade solicitada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-061:cea330fa8e2d07ef3ab70915a0932ee20ca29be8445f1ec220e569ab85b75b3d -->
## Question 61: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-061`

**Content revision:** `cea330fa8e2d07ef3ab70915a0932ee20ca29be8445f1ec220e569ab85b75b3d`

**en review revision:** `f4f20d26f2843c973f2138177bcdc2c427c190c2dccc1d96b4382456269bca80`
**es review revision:** `1976fd0a134f9d6c97d84eeaf5eb35fb5392daab1a00216320e478397295485d`
**pt-BR review revision:** `1ffc42c7c30748fbfb491caffa33e2cd7a46c9dd56337a5450867d9d0f57e8cc`

### English

A terminal script must wait for run 731 and return failure if that run fails. Which GitHub CLI command fits?

1. gh run watch 731 --exit-status **[CORRECT]**

   watch waits, and exit-status propagates failure.

2. gh run view 731 --log-failed

   view reads current data rather than waiting for completion.

3. gh run list --limit 1

   list returns a snapshot without monitoring completion.

4. gh run rerun 731 --failed

   rerun requests execution instead of monitoring this attempt.

**Concept:** CLI run monitoring

**Authored coaching hints:**

- Waiting and propagating a result are separate requirements.
- Avoid confusing observation with starting another attempt.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script debe esperar a la ejecución 731 y devolver un fallo si esta falla. ¿Qué comando de GitHub CLI corresponde?

1. gh run watch 731 --exit-status **[CORRECT]**

   watch espera y exit-status propaga el fallo.

2. gh run view 731 --log-failed

   view lee datos actuales en lugar de esperar al final.

3. gh run list --limit 1

   list devuelve una instantánea sin esperar al final.

4. gh run rerun 731 --failed

   rerun solicita ejecución, no supervisa este intento.

**Concept:** Supervisión de ejecuciones con CLI

**Authored coaching hints:**

- Esperar y propagar un resultado son requisitos distintos.
- No confundas observar con iniciar otro intento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script deve aguardar a execução 731 e retornar falha se ela falhar. Qual comando do GitHub CLI atende ao requisito?

1. gh run watch 731 --exit-status **[CORRECT]**

   watch aguarda e exit-status propaga a falha.

2. gh run view 731 --log-failed

   view lê dados atuais em vez de aguardar a conclusão.

3. gh run list --limit 1

   list retorna um retrato sem aguardar a conclusão.

4. gh run rerun 731 --failed

   rerun solicita execução, não monitora esta tentativa.

**Concept:** Monitoramento de execuções pela CLI

**Authored coaching hints:**

- Aguardar e propagar um resultado são requisitos distintos.
- Não confunda observar com iniciar outra tentativa.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow>

<!-- certification-coach-question:actions-062:7de34dbe53fe64e4df8710f66ccb973f7b3ab147b1953e44bce98a2ab830f4d0 -->
## Question 62: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-062`

**Content revision:** `7de34dbe53fe64e4df8710f66ccb973f7b3ab147b1953e44bce98a2ab830f4d0`

**en review revision:** `bfaf119e68992ca09cdccd62e73f3bfb95ce17648b420fa632a4fca69e591b5c`
**es review revision:** `c2f02bcf4e45b5a9a8433312917d6105cc630ac5d6bc0f1e8ac2383f695b16cd`
**pt-BR review revision:** `9941d05cb953b380de6d0bfc52ac9cd807a03542b9c5252fc861a687f28dc0f1`

### English

Which GitHub CLI command downloads only the artifact named coverage from run 731?

1. gh run list --workflow coverage

   A workflow filter returns run history, not files.

2. gh run watch 731 --interval 5

   watch observes status and does not retrieve artifacts.

3. gh run download 731 --name coverage **[CORRECT]**

   download with name selects the named artifact.

4. gh run view 731 --job coverage

   A job selector does not download artifact files.

**Concept:** CLI artifact selection

**Authored coaching hints:**

- An artifact name is distinct from a job ID.
- Select both the owning run and stored result.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de GitHub CLI descarga solo el artefacto coverage de la ejecución 731?

1. gh run list --workflow coverage

   Un filtro de flujo devuelve historial, no archivos.

2. gh run watch 731 --interval 5

   watch observa el estado y no obtiene artefactos.

3. gh run download 731 --name coverage **[CORRECT]**

   download con name selecciona el artefacto indicado.

4. gh run view 731 --job coverage

   Un selector de trabajo no descarga archivos de artefactos.

**Concept:** Selección de artefactos con CLI

**Authored coaching hints:**

- El nombre del artefacto difiere del ID del trabajo.
- Selecciona tanto la ejecución como el resultado almacenado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do GitHub CLI baixa apenas o artefato coverage da execução 731?

1. gh run list --workflow coverage

   Um filtro de workflow retorna histórico, não arquivos.

2. gh run watch 731 --interval 5

   watch observa o status e não obtém artefatos.

3. gh run download 731 --name coverage **[CORRECT]**

   download com name seleciona o artefato indicado.

4. gh run view 731 --job coverage

   Um seletor de job não baixa arquivos de artefatos.

**Concept:** Seleção de artefatos pela CLI

**Authored coaching hints:**

- O nome do artefato difere do ID do job.
- Selecione tanto a execução quanto o resultado armazenado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts>

<!-- certification-coach-question:actions-063:31ced22f99c9594a9607f19b791ffd782e6a3dd6a5675dce26a9047ee3a305e3 -->
## Question 63: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-063`

**Content revision:** `31ced22f99c9594a9607f19b791ffd782e6a3dd6a5675dce26a9047ee3a305e3`

**en review revision:** `323930f4d4aa4d4f7133a066932aa70b0ba80f12238b5fa11361592e7ef6bbdb`
**es review revision:** `eaa77539af0e056e37a235046ed6071c1d70f609fde9b4b63ff131cca6c6df86`
**pt-BR review revision:** `14bf88ea0a0826b54f629abba66d188b187d819e19eba0112992fba289ee746e`

### English

The default branch contains a workflow\_dispatch workflow named audit.yml. Which GitHub CLI command starts it on branch staging?

1. gh run list --workflow audit.yml --branch staging

   list reads history without creating a run.

2. gh workflow run audit.yml --ref staging **[CORRECT]**

   workflow run dispatches using the selected ref.

3. gh run rerun audit.yml --branch staging

   rerun targets an existing run, not this workflow file.

4. gh workflow view audit.yml --ref staging

   view displays a workflow without dispatching it.

**Concept:** CLI manual invocation

**Authored coaching hints:**

- Starting a fresh run differs from retrying a run ID.
- Ref selection is part of the dispatch request.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La rama predeterminada contiene un flujo workflow\_dispatch llamado audit.yml. ¿Qué comando de GitHub CLI lo inicia en la rama staging?

1. gh run list --workflow audit.yml --branch staging

   list lee el historial sin crear una ejecución.

2. gh workflow run audit.yml --ref staging **[CORRECT]**

   workflow run despacha usando la referencia seleccionada.

3. gh run rerun audit.yml --branch staging

   rerun apunta a una ejecución existente, no a este archivo.

4. gh workflow view audit.yml --ref staging

   view muestra un flujo sin despacharlo.

**Concept:** Invocación manual con CLI

**Authored coaching hints:**

- Iniciar una ejecución nueva difiere de reintentar un ID.
- La selección de referencia forma parte del despacho.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A branch padrão contém um workflow workflow\_dispatch chamado audit.yml. Qual comando do GitHub CLI o inicia na branch staging?

1. gh run list --workflow audit.yml --branch staging

   list lê o histórico sem criar uma execução.

2. gh workflow run audit.yml --ref staging **[CORRECT]**

   workflow run dispara usando a referência selecionada.

3. gh run rerun audit.yml --branch staging

   rerun aponta para uma execução existente, não para esse arquivo.

4. gh workflow view audit.yml --ref staging

   view exibe um workflow sem dispará-lo.

**Concept:** Invocação manual pela CLI

**Authored coaching hints:**

- Iniciar uma nova execução difere de tentar novamente um ID.
- A seleção da referência faz parte do disparo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow>

<!-- certification-coach-question:actions-064:dc8b3a96250549179fdb82eb3e416e64fc04deb3b4a289a95b0c6b9762954bd9 -->
## Question 64: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-064`

**Content revision:** `dc8b3a96250549179fdb82eb3e416e64fc04deb3b4a289a95b0c6b9762954bd9`

**en review revision:** `fb4b256cedc7e9bdd90258e83a8eaf7346c42e495db68785d7e3052542f038d2`
**es review revision:** `bad3947babec7d5b2cff0cc7b386a3caf5bd2fcbbda372554e50c6c07be34046`
**pt-BR review revision:** `111e74bae51bcf58a7d2003c3c64008e69d2c3bb94f7fa682ceb861996165ad1`

### English

Which GitHub CLI command disables the workflow ci.yml without deleting its YAML file?

1. gh run delete ci.yml

   delete removes a run selected by run ID.

2. gh workflow disable ci.yml **[CORRECT]**

   disable changes the workflow's enabled state.

3. gh run cancel ci.yml

   cancel targets a run, not a workflow definition.

4. gh workflow view ci.yml

   view reads the definition without changing state.

**Concept:** CLI workflow suspension

**Authored coaching hints:**

- A workflow and one of its runs have different lifecycles.
- Suspension should preserve the configuration for later reuse.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de GitHub CLI deshabilita ci.yml sin eliminar su archivo YAML?

1. gh run delete ci.yml

   delete elimina una ejecución seleccionada por ID.

2. gh workflow disable ci.yml **[CORRECT]**

   disable cambia el estado de habilitación del flujo.

3. gh run cancel ci.yml

   cancel apunta a una ejecución, no a una definición de flujo.

4. gh workflow view ci.yml

   view lee la definición sin cambiar su estado.

**Concept:** Suspensión de flujos con CLI

**Authored coaching hints:**

- Un flujo y una de sus ejecuciones tienen ciclos distintos.
- La suspensión debe conservar la configuración para reutilizarla.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do GitHub CLI desabilita ci.yml sem excluir seu arquivo YAML?

1. gh run delete ci.yml

   delete exclui uma execução selecionada por ID.

2. gh workflow disable ci.yml **[CORRECT]**

   disable altera o estado de habilitação do workflow.

3. gh run cancel ci.yml

   cancel aponta para uma execução, não para uma definição de workflow.

4. gh workflow view ci.yml

   view lê a definição sem alterar seu estado.

**Concept:** Suspensão de workflows pela CLI

**Authored coaching hints:**

- Um workflow e uma de suas execuções têm ciclos distintos.
- A suspensão deve preservar a configuração para reutilização.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows>

<!-- certification-coach-question:actions-065:086713e95bf8d107d9ad55ab9ab903af21729ebe4ed3faefa40a115eb43e8fbc -->
## Question 65: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-065`

**Content revision:** `086713e95bf8d107d9ad55ab9ab903af21729ebe4ed3faefa40a115eb43e8fbc`

**en review revision:** `9c6c4b739e4f1dd2688a7f1df99cf6ffb8ffb4f623c80a510b466f469a4064fb`
**es review revision:** `bf042b4398344a4cf936168b3e84a34d948de28376f0b89d4efc9a9f2417b94e`
**pt-BR review revision:** `fbe75bc68323e5e81f24e485204e44b82b3c278a886b6cd570551cc826e9ac1a`

### English

Which public-repository condition can automatically disable scheduled workflows?

1. No repository activity for 60 days **[CORRECT]**

   The documented inactivity rule applies to public schedules.

2. No successful run for 7 days

   Success history is not this inactivity criterion.

3. No open pull requests for 30 days

   Open pull request count is not this criterion.

4. No new release for 90 days

   Release cadence is not this inactivity criterion.

**Concept:** Inactive scheduled workflows

**Authored coaching hints:**

- Look for repository activity rather than test outcomes.
- This rule concerns scheduled automation in public repositories.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué condición de un repositorio público puede deshabilitar automáticamente los flujos programados?

1. Sin actividad del repositorio durante 60 días **[CORRECT]**

   La regla documentada de inactividad se aplica a programaciones públicas.

2. Sin ejecuciones correctas durante 7 días

   El historial de éxito no es este criterio de inactividad.

3. Sin pull requests abiertas durante 30 días

   El número de pull requests abiertas no es este criterio.

4. Sin releases nuevas durante 90 días

   La frecuencia de releases no es este criterio de inactividad.

**Concept:** Flujos programados inactivos

**Authored coaching hints:**

- Busca actividad del repositorio, no resultados de pruebas.
- Esta regla trata de automatización programada en repositorios públicos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual condição de um repositório público pode desabilitar automaticamente workflows agendados?

1. Sem atividade no repositório por 60 dias **[CORRECT]**

   A regra documentada de inatividade aplica-se a agendamentos públicos.

2. Sem execuções bem-sucedidas por 7 dias

   O histórico de sucesso não é esse critério de inatividade.

3. Sem pull requests abertos por 30 dias

   A quantidade de pull requests abertos não é esse critério.

4. Sem novas releases por 90 dias

   A frequência de releases não é esse critério de inatividade.

**Concept:** Workflows agendados inativos

**Authored coaching hints:**

- Procure atividade do repositório, não resultados de testes.
- Essa regra trata de automação agendada em repositórios públicos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-066:3950e310672c2caab4125314f2bb1271dfc633a31f5d7ec94a768d39f8d60dd6 -->
## Question 66: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-066`

**Content revision:** `3950e310672c2caab4125314f2bb1271dfc633a31f5d7ec94a768d39f8d60dd6`

**en review revision:** `b986be21ab7c0813e6f32b7efdf78f48ef9ce5e9ee3a326d8cb01668fb79bb15`
**es review revision:** `12aed329a57d7540d693dc3ac8797bd3842199567bf3b744b56134e8ba455433`
**pt-BR review revision:** `4b66c1a507d54d23352ea14488342b7b89e3a5958cbf45e8bdad15366b106bda`

### English

A Linux Bash step runs only echo '::error::Missing report' and exits normally. What does that command do by itself?

1. Cancels every remaining job in the workflow

   An annotation does not cancel the workflow's jobs.

2. Retries the step after recording an annotation

   Workflow commands do not implicitly retry a step.

3. Creates an error annotation without a failing exit code **[CORRECT]**

   An annotation does not itself change Bash's exit status.

4. Creates a debug message and fails the step

   error is an annotation command, not the debug command.

**Concept:** Error annotations versus exit codes

**Authored coaching hints:**

- Separate visible severity from process termination.
- Shell exit status still determines command success.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso Bash de Linux solo ejecuta echo '::error::Missing report' y termina normalmente. ¿Qué hace ese comando por sí solo?

1. Cancela todos los trabajos restantes del flujo

   Una anotación no cancela trabajos del flujo.

2. Reintenta el paso tras registrar una anotación

   Los comandos de flujo no reintentan pasos implícitamente.

3. Crea una anotación de error sin código de salida fallido **[CORRECT]**

   Una anotación no cambia por sí sola el estado de salida de Bash.

4. Crea un mensaje de depuración y hace fallar el paso

   error es un comando de anotación, no de depuración.

**Concept:** Anotaciones de error y códigos de salida

**Authored coaching hints:**

- Separa la gravedad visible de la terminación del proceso.
- El estado de salida sigue determinando el éxito del comando.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa Bash do Linux executa apenas echo '::error::Missing report' e termina normalmente. O que esse comando faz por si só?

1. Cancela todos os jobs restantes do workflow

   Uma anotação não cancela os jobs do workflow.

2. Tenta a etapa novamente após registrar uma anotação

   Comandos de workflow não tentam etapas novamente implicitamente.

3. Cria uma anotação de erro sem código de saída de falha **[CORRECT]**

   Uma anotação não altera por si só o status de saída do Bash.

4. Cria uma mensagem de depuração e faz a etapa falhar

   error é um comando de anotação, não de depuração.

**Concept:** Anotações de erro e códigos de saída

**Authored coaching hints:**

- Separe a gravidade visível do encerramento do processo.
- O status de saída ainda determina o sucesso do comando.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-067:2f81ab9c628957b04ee42011de57828630de05582a3e3949a66da9cb9de4a91a -->
## Question 67: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-067`

**Content revision:** `2f81ab9c628957b04ee42011de57828630de05582a3e3949a66da9cb9de4a91a`

**en review revision:** `92b1be05b29b9625fa8b3f92bfe1f5825acb9e06ce839534c18bdf965b4ccd69`
**es review revision:** `66bf842c3608522e1723f442097c1e8d4e8bb70fc1a98e63efc9ba6f54eca587`
**pt-BR review revision:** `2a17c73cc8929a9b0d8cbc82425594226f081f4262f71ce09fac555bf27b78e4`

### English

Which workflow-command pair creates a collapsible section in a job log?

1. ::group::Details / ::endgroup:: **[CORRECT]**

   group and endgroup delimit a collapsible log region.

2. ::debug::Details / ::enddebug::

   Debug messages do not use this closing command.

3. ::notice::Details / ::endnotice::

   Notice annotations do not define collapsible regions.

4. ::warning::Details / ::endwarning::

   Warning annotations do not define collapsible regions.

**Concept:** Collapsible log groups

**Authored coaching hints:**

- Log organization differs from annotation severity.
- A bounded region needs both an opening and a closing marker.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué par de comandos de flujo crea una sección desplegable en el registro de un trabajo?

1. ::group::Details / ::endgroup:: **[CORRECT]**

   group y endgroup delimitan una región desplegable del registro.

2. ::debug::Details / ::enddebug::

   Los mensajes debug no usan este comando de cierre.

3. ::notice::Details / ::endnotice::

   Las anotaciones notice no definen regiones desplegables.

4. ::warning::Details / ::endwarning::

   Las anotaciones warning no definen regiones desplegables.

**Concept:** Grupos de registros desplegables

**Authored coaching hints:**

- La organización del registro difiere de la gravedad de anotaciones.
- Una región delimitada necesita marcas de apertura y cierre.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual par de comandos de workflow cria uma seção recolhível no log de um job?

1. ::group::Details / ::endgroup:: **[CORRECT]**

   group e endgroup delimitam uma região recolhível do log.

2. ::debug::Details / ::enddebug::

   Mensagens debug não usam esse comando de encerramento.

3. ::notice::Details / ::endnotice::

   Anotações notice não definem regiões recolhíveis.

4. ::warning::Details / ::endwarning::

   Anotações warning não definem regiões recolhíveis.

**Concept:** Grupos de logs recolhíveis

**Authored coaching hints:**

- A organização do log difere da gravidade das anotações.
- Uma região delimitada precisa de marcas de abertura e fechamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-068:3abca5961dfe603b6819156fa83f703fbfcfdf4f8970c5afa35fdeb7929604ea -->
## Question 68: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-068`

**Content revision:** `3abca5961dfe603b6819156fa83f703fbfcfdf4f8970c5afa35fdeb7929604ea`

**en review revision:** `05768bcf4c39bf2b4ee3cb0843e50472e136d3dab290f88a070db65d919c5035`
**es review revision:** `27a8ead5f771f27164a453ccfae7743c5bc9307905677a00af0cee74e0bdc53d`
**pt-BR review revision:** `1882e766209b869f858d97339fe0ac09a069ca9a9e35bc3953b2917892e6a12e`

### English

Which REST route lists artifacts belonging to run\_id in owner/repo?

1. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs

   This route downloads logs rather than listing artifacts.

2. GET /repos/\{owner\}/\{repo\}/actions/workflows/\{workflow\_id\}/runs

   This route lists workflow runs, not stored artifacts.

3. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}/zip

   This route downloads one already identified artifact.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/artifacts **[CORRECT]**

   This route lists artifacts scoped to one run.

**Concept:** REST run artifact listing

**Authored coaching hints:**

- Choose the resource type before the operation.
- The known run identifier should scope the listing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ruta REST lista los artefactos de run\_id en owner/repo?

1. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs

   Esta ruta descarga registros en vez de listar artefactos.

2. GET /repos/\{owner\}/\{repo\}/actions/workflows/\{workflow\_id\}/runs

   Esta ruta lista ejecuciones, no artefactos almacenados.

3. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}/zip

   Esta ruta descarga un artefacto ya identificado.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/artifacts **[CORRECT]**

   Esta ruta lista artefactos de una ejecución.

**Concept:** Listado REST de artefactos de ejecución

**Authored coaching hints:**

- Elige el tipo de recurso antes de la operación.
- El identificador de ejecución conocido debe limitar el listado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual rota REST lista os artefatos de run\_id em owner/repo?

1. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs

   Essa rota baixa logs em vez de listar artefatos.

2. GET /repos/\{owner\}/\{repo\}/actions/workflows/\{workflow\_id\}/runs

   Essa rota lista execuções, não artefatos armazenados.

3. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}/zip

   Essa rota baixa um artefato já identificado.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/artifacts **[CORRECT]**

   Essa rota lista artefatos de uma execução.

**Concept:** Listagem REST de artefatos da execução

**Authored coaching hints:**

- Escolha o tipo de recurso antes da operação.
- O identificador conhecido da execução deve limitar a listagem.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/artifacts>

<!-- certification-coach-question:actions-069:5bc73530ed84a516794c8ac9af3c3fbb0e7c073243d3fccdd606130b9d7e8d09 -->
## Question 69: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-069`

**Content revision:** `5bc73530ed84a516794c8ac9af3c3fbb0e7c073243d3fccdd606130b9d7e8d09`

**en review revision:** `8caf92afe2f929cc5adc0fa5c1ac16e3200143a125c6c5b90abcf630ade54968`
**es review revision:** `bd050cf227af0fdd2bd9067c6d4429ade47ce82d1d7292b765cb0b627dec5d00`
**pt-BR review revision:** `fab55dcc9037bad1a0303386b1a08549441a005fbcbf7375105fea1080c49bb0`

### English

An authenticated client can access artifact 82. Which REST route requests its ZIP download?

1. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82

   This retrieves metadata rather than the artifact archive.

2. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82/zip **[CORRECT]**

   The archive-format suffix requests the artifact download.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/82/logs

   This treats 82 as a run ID and retrieves logs.

4. GET /repos/\{owner\}/\{repo\}/zipball/82

   zipball retrieves source archives, not Actions artifacts.

**Concept:** REST artifact downloads

**Authored coaching hints:**

- Separate stored-result archives from source archives.
- An artifact ID is not a run ID.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un cliente autenticado puede acceder al artefacto 82. ¿Qué ruta REST solicita su descarga ZIP?

1. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82

   Esta ruta obtiene metadatos, no el archivo del artefacto.

2. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82/zip **[CORRECT]**

   El sufijo de formato solicita la descarga del artefacto.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/82/logs

   Esta ruta trata 82 como ID de ejecución y obtiene registros.

4. GET /repos/\{owner\}/\{repo\}/zipball/82

   zipball obtiene archivos de código fuente, no artefactos de Actions.

**Concept:** Descargas REST de artefactos

**Authored coaching hints:**

- Separa archivos de resultados de archivos de código fuente.
- Un ID de artefacto no es un ID de ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cliente autenticado pode acessar o artefato 82. Qual rota REST solicita seu download ZIP?

1. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82

   Essa rota obtém metadados, não o arquivo do artefato.

2. GET /repos/\{owner\}/\{repo\}/actions/artifacts/82/zip **[CORRECT]**

   O sufixo de formato solicita o download do artefato.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/82/logs

   Essa rota trata 82 como ID de execução e obtém logs.

4. GET /repos/\{owner\}/\{repo\}/zipball/82

   zipball obtém arquivos de código-fonte, não artefatos do Actions.

**Concept:** Downloads REST de artefatos

**Authored coaching hints:**

- Separe arquivos de resultados de arquivos de código-fonte.
- Um ID de artefato não é um ID de execução.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/artifacts>

<!-- certification-coach-question:actions-070:5a04dd4434e769e89f24bff79a802c1b748817053f8bf3087f1dee426816a177 -->
## Question 70: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-070`

**Content revision:** `5a04dd4434e769e89f24bff79a802c1b748817053f8bf3087f1dee426816a177`

**en review revision:** `1cd60c6adc82661c352b9e6d6721fe4a7bf07d1f5ef4ca70305e8842db7e2542`
**es review revision:** `2c26ba53c5366d7738e0baedee6c7b0f303c11506e99949278d4d410b174c46a`
**pt-BR review revision:** `da3f951cd89611e4a9d8eff74e70aa59971b23e410a43a44b81634336ec34f4f`

### English

Which REST route requests the log archive for run 731?

1. GET /repos/\{owner\}/\{repo\}/actions/workflows/731

   The workflow route treats 731 as a workflow identifier.

2. GET /repos/\{owner\}/\{repo\}/contents/731

   The contents route reads repository files.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/731/logs **[CORRECT]**

   The run logs route requests its log archive.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/731/artifacts

   The artifacts route lists uploaded result files.

**Concept:** REST log archives

**Authored coaching hints:**

- Console output is separate from uploaded artifacts.
- Use the execution resource, not the definition resource.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ruta REST solicita el archivo de registros de la ejecución 731?

1. GET /repos/\{owner\}/\{repo\}/actions/workflows/731

   La ruta workflow trata 731 como identificador de flujo.

2. GET /repos/\{owner\}/\{repo\}/contents/731

   La ruta contents lee archivos del repositorio.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/731/logs **[CORRECT]**

   La ruta logs de la ejecución solicita sus registros.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/731/artifacts

   La ruta artifacts lista archivos de resultados cargados.

**Concept:** Archivos de registros REST

**Authored coaching hints:**

- La salida de consola es distinta de los artefactos cargados.
- Usa el recurso de ejecución, no el de definición.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual rota REST solicita o arquivo de logs da execução 731?

1. GET /repos/\{owner\}/\{repo\}/actions/workflows/731

   A rota workflow trata 731 como identificador de workflow.

2. GET /repos/\{owner\}/\{repo\}/contents/731

   A rota contents lê arquivos do repositório.

3. GET /repos/\{owner\}/\{repo\}/actions/runs/731/logs **[CORRECT]**

   A rota logs da execução solicita seus logs.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/731/artifacts

   A rota artifacts lista arquivos de resultados enviados.

**Concept:** Arquivos de logs REST

**Authored coaching hints:**

- A saída do console é separada dos artefatos enviados.
- Use o recurso de execução, não o de definição.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/workflow-runs>

<!-- certification-coach-question:actions-071:7bbaceb96f47ee5691e45a0e1d282d6040f1e917ac798c77f9a3b540e37356b5 -->
## Question 71: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-071`

**Content revision:** `7bbaceb96f47ee5691e45a0e1d282d6040f1e917ac798c77f9a3b540e37356b5`

**en review revision:** `5c0902aeee338eb49e70a9123eb455a0eff85aba47b70a5f06a11e669d80972f`
**es review revision:** `3a4dd47c66c4613ea008406b96967dcd6d2d31fd02d317f57edeeb679c4ea754`
**pt-BR review revision:** `49c1f7728d28ac309fce588854bc04f9f4b93e895f6487e0e69e0e169f6155a9`

### English

In the English GitHub job-log UI, which steps are searched by Search logs?

1. Only steps whose conclusion is failure

   Expansion state, not failure alone, defines this scope.

2. All historical runs of that workflow

   This search does not query historical workflow runs.

3. Expanded steps in the displayed log **[CORRECT]**

   Only expanded steps participate in this UI search.

4. All steps in every job of the run

   The search does not span all jobs automatically.

**Concept:** UI log search scope

**Authored coaching hints:**

- Check what content the interface currently exposes.
- UI search scope may be narrower than an archive's contents.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la interfaz de registros de GitHub en inglés, ¿en qué pasos busca Search logs?

1. Solo pasos cuya conclusión es failure

   El ámbito depende de la expansión, no solo del fallo.

2. Todas las ejecuciones históricas de ese flujo

   Esta búsqueda no consulta ejecuciones históricas.

3. Pasos expandidos del registro mostrado **[CORRECT]**

   Solo los pasos expandidos participan en esta búsqueda.

4. Todos los pasos de todos los trabajos de la ejecución

   La búsqueda no abarca todos los trabajos automáticamente.

**Concept:** Ámbito de búsqueda en registros de la interfaz

**Authored coaching hints:**

- Comprueba qué contenido expone actualmente la interfaz.
- La búsqueda visual puede abarcar menos que el archivo descargado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na interface de logs do GitHub em inglês, em quais etapas Search logs faz a busca?

1. Apenas etapas cuja conclusão é failure

   O escopo depende da expansão, não apenas da falha.

2. Todas as execuções históricas desse workflow

   Essa busca não consulta execuções históricas.

3. Etapas expandidas do log exibido **[CORRECT]**

   Apenas etapas expandidas participam dessa busca.

4. Todas as etapas de todos os jobs da execução

   A busca não abrange todos os jobs automaticamente.

**Concept:** Escopo da busca de logs na interface

**Authored coaching hints:**

- Verifique qual conteúdo a interface expõe no momento.
- A busca visual pode abranger menos que o arquivo baixado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-072:5f4d5dd49ad1ce874bd399a563cceb3e68f93cd6670e6b4357f20da4d092fb2c -->
## Question 72: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-072`

**Content revision:** `5f4d5dd49ad1ce874bd399a563cceb3e68f93cd6670e6b4357f20da4d092fb2c`

**en review revision:** `08227b3eb1023341975e03278aad19fb789a1b0ef473c89247dd888f49aff6dc`
**es review revision:** `09c780509d71d0f85c4c17bef118a81ec58338050d199be1c28dfcad28c43651`
**pt-BR review revision:** `473ca5089b429af0dbb8034b2f2539bb41c7e811afb9deb2d2559bf55ba7703f`

### English

Which English job-log section links the software inventory for the GitHub-hosted runner image actually used?

1. Post job cleanup

   Cleanup output does not establish the initial software image.

2. Set up job **[CORRECT]**

   Set up job includes runner-image software information.

3. Complete job

   Complete job records completion, not initial image inventory.

4. Run actions/checkout

   Checkout retrieves repository content rather than image inventory.

**Concept:** Hosted runner evidence

**Authored coaching hints:**

- Use evidence from the specific execution.
- A moving runner label is not an immutable software inventory.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué sección del registro en inglés enlaza el inventario de software de la imagen del runner hospedado realmente usada?

1. Post job cleanup

   La limpieza no establece el inventario inicial de la imagen.

2. Set up job **[CORRECT]**

   Set up job incluye información del software de la imagen.

3. Complete job

   Complete job registra la finalización, no el inventario inicial.

4. Run actions/checkout

   Checkout obtiene el repositorio, no el inventario de la imagen.

**Concept:** Pruebas del runner hospedado

**Authored coaching hints:**

- Usa pruebas de la ejecución concreta.
- Una etiqueta móvil de runner no es un inventario inmutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual seção do log em inglês contém o link para o inventário de software da imagem do runner hospedado realmente usada?

1. Post job cleanup

   A limpeza não estabelece o inventário inicial da imagem.

2. Set up job **[CORRECT]**

   Set up job inclui informações do software da imagem.

3. Complete job

   Complete job registra a conclusão, não o inventário inicial.

4. Run actions/checkout

   Checkout obtém o repositório, não o inventário da imagem.

**Concept:** Evidências do runner hospedado

**Authored coaching hints:**

- Use evidências da execução específica.
- Um rótulo móvel de runner não é um inventário imutável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-073:ea39cc3a2b8e24ed4877732b7f1b01ba3643cd0f878839c9a259990682e30cf3 -->
## Question 73: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-073`

**Content revision:** `ea39cc3a2b8e24ed4877732b7f1b01ba3643cd0f878839c9a259990682e30cf3`

**en review revision:** `28879addbf2f3f64467ea73e0c760f5d066ac6abfa08c19ca2bf78ae515d40d7`
**es review revision:** `1cffb34f9d000256f7b9a84a6240199b02a42aeba9aa886b675c06556afbb12b`
**pt-BR review revision:** `dd0fe9caea076ad3884cffe162bf8c7b145e47dffe9981d826be513ead62eaac`

### English

A repository needs an initial CI file that its maintainers will customize independently. Which reuse mechanism fits?

1. A composite action reference

   A composite action bundles steps, not an initial workflow file.

2. A dependency-cache restore

   A cache restores files rather than scaffolding workflow configuration.

3. A workflow template **[CORRECT]**

   A template scaffolds a separately editable workflow file.

4. A called reusable workflow

   A reusable call executes shared workflow logic rather than copying it.

**Concept:** Choosing a workflow template

**Authored coaching hints:**

- Decide whether reuse happens by copying or calling.
- Independent customization changes the appropriate reuse model.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio necesita un archivo CI inicial que sus mantenedores personalizarán de forma independiente. ¿Qué mecanismo corresponde?

1. Una referencia a acción compuesta

   Una acción compuesta agrupa pasos, no crea el archivo inicial.

2. Una restauración de caché de dependencias

   Una caché restaura archivos, no genera la configuración del flujo.

3. Una plantilla de flujo **[CORRECT]**

   Una plantilla crea un flujo editable de forma independiente.

4. Un flujo reutilizable invocado

   Una llamada reutilizable ejecuta lógica compartida sin copiarla.

**Concept:** Elección de plantillas de flujos

**Authored coaching hints:**

- Decide si la reutilización consiste en copiar o invocar.
- La personalización independiente cambia el modelo adecuado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório precisa de um arquivo CI inicial que seus mantenedores personalizarão de forma independente. Qual mecanismo atende?

1. Uma referência a ação composta

   Uma ação composta agrupa etapas, não cria o arquivo inicial.

2. Uma restauração de cache de dependências

   Um cache restaura arquivos, não gera a configuração do workflow.

3. Um modelo de workflow **[CORRECT]**

   Um modelo cria um workflow editável de forma independente.

4. Um workflow reutilizável chamado

   Uma chamada reutilizável executa lógica compartilhada sem copiá-la.

**Concept:** Escolha de modelos de workflows

**Authored coaching hints:**

- Decida se a reutilização consiste em copiar ou chamar.
- A personalização independente muda o modelo adequado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-074:d31f453f36b320a1400729234636a1789e1f284afe3a8bc54f679c8ba07c5be1 -->
## Question 74: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-074`

**Content revision:** `d31f453f36b320a1400729234636a1789e1f284afe3a8bc54f679c8ba07c5be1`

**en review revision:** `d2f7004a1e0e4b8627540157a521812666ea03b8c857e05773562d496587f039`
**es review revision:** `76fd7bc8a580857b52d0229a0443a46e105bd4a820acf9ba3c6486c1daa1d136`
**pt-BR review revision:** `ecd375e2d6a4c821b97fa74a72d1f97a42d5c0ef0f666e97efa3412228c3ea0d`

### English

Several workflows need the same three setup steps inside their existing jobs. They do not need extra jobs. Which component fits?

1. A workflow template copy

   A template copies configuration instead of sharing executable steps.

2. A scheduled repository event

   An event determines when to run, not reusable step packaging.

3. A composite action **[CORRECT]**

   A composite action runs bundled steps within the caller's job.

4. A multi-job reusable workflow

   A reusable workflow is invoked at a job boundary.

**Concept:** Choosing a composite action

**Authored coaching hints:**

- Match the reuse boundary: steps, jobs or complete files.
- Consider whether the existing runner should keep executing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Varios flujos necesitan los mismos tres pasos de preparación dentro de sus trabajos existentes, sin trabajos adicionales. ¿Qué componente corresponde?

1. Una copia de plantilla de flujo

   Una plantilla copia configuración en lugar de compartir pasos ejecutables.

2. Un evento programado del repositorio

   Un evento determina cuándo ejecutar, no cómo agrupar pasos.

3. Una acción compuesta **[CORRECT]**

   Una acción compuesta ejecuta pasos agrupados en el trabajo llamador.

4. Un flujo reutilizable de varios trabajos

   Un flujo reutilizable se invoca a nivel de trabajo.

**Concept:** Elección de acciones compuestas

**Authored coaching hints:**

- Ajusta el límite de reutilización: pasos, trabajos o archivos.
- Considera si debe seguir ejecutándose el runner existente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Vários workflows precisam das mesmas três etapas de preparação em seus jobs existentes, sem jobs adicionais. Qual componente atende?

1. Uma cópia de modelo de workflow

   Um modelo copia configuração em vez de compartilhar etapas executáveis.

2. Um evento agendado do repositório

   Um evento determina quando executar, não como agrupar etapas.

3. Uma ação composta **[CORRECT]**

   Uma ação composta executa etapas agrupadas no job chamador.

4. Um workflow reutilizável de vários jobs

   Um workflow reutilizável é invocado no nível do job.

**Concept:** Escolha de ações compostas

**Authored coaching hints:**

- Ajuste o limite de reutilização: etapas, jobs ou arquivos.
- Considere se o runner existente deve continuar executando.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-075:49e7281e79f1e8d9ef1398d8aba5d8539cfeb8e2c384dcce6f5e4689fd6f01f5 -->
## Question 75: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-075`

**Content revision:** `49e7281e79f1e8d9ef1398d8aba5d8539cfeb8e2c384dcce6f5e4689fd6f01f5`

**en review revision:** `7b5b56f2836006d0f7bfcfb479458497b6b7f8fd4e477f15e429636637dc1be9`
**es review revision:** `3f912abdea81cf3552f7342db1d01bb60ddcdb97e8ef6237b284ff5eae84f634`
**pt-BR review revision:** `6a781ddff30a1454635094b6bba1a3799b63207fad47a4c1287f3353cd4c79c1`

### English

Beside workflow-templates/ci.yml, which file supplies that template's name and description in an organization's .github repository?

1. workflow-templates/ci.action.yml

   Action metadata is not the workflow-template descriptor.

2. workflow-templates/ci.package.json

   A package manifest is not this template's metadata file.

3. workflow-templates/ci.workflow.json

   This is not the documented template descriptor suffix.

4. workflow-templates/ci.properties.json **[CORRECT]**

   The matching properties.json file contains template metadata.

**Concept:** Workflow template metadata

**Authored coaching hints:**

- The descriptor pairs with the workflow's base filename.
- Template display metadata is separate from execution YAML.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Junto a workflow-templates/ci.yml, ¿qué archivo aporta el nombre y la descripción de la plantilla en el repositorio .github de una organización?

1. workflow-templates/ci.action.yml

   Los metadatos de acciones no describen la plantilla de flujo.

2. workflow-templates/ci.package.json

   Un manifiesto de paquete no es este archivo de metadatos.

3. workflow-templates/ci.workflow.json

   No es el sufijo documentado del descriptor de plantilla.

4. workflow-templates/ci.properties.json **[CORRECT]**

   El archivo properties.json correspondiente contiene los metadatos.

**Concept:** Metadatos de plantillas de flujos

**Authored coaching hints:**

- El descriptor coincide con el nombre base del flujo.
- Los metadatos visibles de la plantilla son distintos del YAML ejecutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao lado de workflow-templates/ci.yml, qual arquivo fornece o nome e a descrição do modelo no repositório .github de uma organização?

1. workflow-templates/ci.action.yml

   Metadados de ações não descrevem o modelo de workflow.

2. workflow-templates/ci.package.json

   Um manifesto de pacote não é esse arquivo de metadados.

3. workflow-templates/ci.workflow.json

   Esse não é o sufixo documentado do descritor de modelo.

4. workflow-templates/ci.properties.json **[CORRECT]**

   O arquivo properties.json correspondente contém os metadados.

**Concept:** Metadados de modelos de workflows

**Authored coaching hints:**

- O descritor corresponde ao nome base do workflow.
- Metadados de exibição do modelo são separados do YAML executável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-076:3260c677006dcffa253ea5604bb1e27ce49eb3a3d7e3199633a91303bdc2d343 -->
## Question 76: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-076`

**Content revision:** `3260c677006dcffa253ea5604bb1e27ce49eb3a3d7e3199633a91303bdc2d343`

**en review revision:** `648568e7aa77606b96646de995191f40f40301ebc7124b8c5d54c320df7caee0`
**es review revision:** `27c6a7a38faf3aa8a5c500f33f2813be2fa70cd16b3856bd192a0d799dadfd6a`
**pt-BR review revision:** `645d3e78651e407bb2f1b425136f3f658bb71661ec493c35b9dfbc398f07f4af`

### English

A maintainer opens a disabled workflow in the English Actions UI. Which control restores future event-triggered execution without rewriting YAML?

1. Cancel workflow

   Cancellation stops a run instead of enabling future runs.

2. Enable workflow **[CORRECT]**

   Enable workflow restores the workflow's active state.

3. Re-run all jobs

   A rerun retries an existing execution rather than enabling a definition.

4. Delete workflow run

   Deleting run history does not enable the workflow.

**Concept:** UI workflow re-enabling

**Authored coaching hints:**

- A disabled definition differs from a failed run.
- Look for a control affecting future events.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un mantenedor abre un flujo deshabilitado en Actions en inglés. ¿Qué control restaura la ejecución por eventos sin reescribir YAML?

1. Cancel workflow

   Cancelar detiene una ejecución en vez de habilitar futuras ejecuciones.

2. Enable workflow **[CORRECT]**

   Enable workflow restaura el estado activo del flujo.

3. Re-run all jobs

   Un reintento repite una ejecución, no habilita la definición.

4. Delete workflow run

   Eliminar el historial no habilita el flujo.

**Concept:** Rehabilitación de flujos en la interfaz

**Authored coaching hints:**

- Una definición deshabilitada difiere de una ejecución fallida.
- Busca un control que afecte a eventos futuros.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um mantenedor abre um workflow desabilitado em Actions em inglês. Qual controle restaura a execução por eventos sem reescrever YAML?

1. Cancel workflow

   Cancelar interrompe uma execução em vez de habilitar futuras execuções.

2. Enable workflow **[CORRECT]**

   Enable workflow restaura o estado ativo do workflow.

3. Re-run all jobs

   Uma nova tentativa repete uma execução, não habilita a definição.

4. Delete workflow run

   Excluir o histórico não habilita o workflow.

**Concept:** Reativação de workflows na interface

**Authored coaching hints:**

- Uma definição desabilitada difere de uma execução com falha.
- Procure um controle que afete eventos futuros.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows>

<!-- certification-coach-question:actions-077:f9bea14585c759e2fbe240fd78eaa8d7648c615a339a6840c08f74d547f7f571 -->
## Question 77: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-077`

**Content revision:** `f9bea14585c759e2fbe240fd78eaa8d7648c615a339a6840c08f74d547f7f571`

**en review revision:** `0362bd1260d5ff3269a940a4f0796c762de20a031436fc2ba13771a1b0b78d9a`
**es review revision:** `13e47f7a6cc6fc42bef1a5e42ce46ec654bf02d0f076e0307f6b1c604cbe080e`
**pt-BR review revision:** `03cda16b5310f923e8e8b59e6f57de6e8efa62f429e93681728676dec9a7c30e`

### English

What does DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\} remove?

1. The selected workflow run and associated run data **[CORRECT]**

   The endpoint targets one workflow run.

2. The YAML workflow file from the default branch

   Deleting a run does not edit repository files.

3. Every workflow definition in the repository

   The run-specific route does not delete workflow definitions.

4. The repository's GitHub Actions enabled setting

   This endpoint does not change repository Actions settings.

**Concept:** Deleting runs versus definitions

**Authored coaching hints:**

- Read the resource named in the URL.
- History removal differs from configuration removal.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué elimina DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}?

1. La ejecución seleccionada y sus datos asociados **[CORRECT]**

   El endpoint apunta a una ejecución de flujo.

2. El archivo YAML del flujo de la rama predeterminada

   Eliminar una ejecución no edita archivos del repositorio.

3. Todas las definiciones de flujos del repositorio

   La ruta de ejecución no elimina definiciones de flujos.

4. La configuración de habilitación de Actions del repositorio

   Este endpoint no cambia la configuración de Actions.

**Concept:** Eliminación de ejecuciones y definiciones

**Authored coaching hints:**

- Lee el recurso indicado en la URL.
- Eliminar historial difiere de eliminar configuración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\} remove?

1. A execução selecionada e seus dados associados **[CORRECT]**

   O endpoint aponta para uma execução de workflow.

2. O arquivo YAML do workflow da branch padrão

   Excluir uma execução não edita arquivos do repositório.

3. Todas as definições de workflows do repositório

   A rota de execução não exclui definições de workflows.

4. A configuração de habilitação do Actions do repositório

   Esse endpoint não altera as configurações do Actions.

**Concept:** Exclusão de execuções e definições

**Authored coaching hints:**

- Leia o recurso indicado na URL.
- Excluir histórico é diferente de excluir configuração.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/workflow-runs>

<!-- certification-coach-question:actions-078:b372bc9ce3a24c5a96699c8fa21780f7ae7948dc0b80306c450e4f1b47132e1f -->
## Question 78: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-078`

**Content revision:** `b372bc9ce3a24c5a96699c8fa21780f7ae7948dc0b80306c450e4f1b47132e1f`

**en review revision:** `323c50a98e644a2e4de6a839f8198029a09849fdf2755e24a4d336597e891d05`
**es review revision:** `79096b6f0b87db8d68bae876ae412157b019366e24ba279b22781ae255aafe00`
**pt-BR review revision:** `89c951089ddcc0ac68d8b953ddc501c993a7885f17f4ec9a775ec00ffc3db9e8`

### English

A reusable workflow declares region with required: true and no default. A caller omits region. What must be corrected?

1. Supply region in the caller's with mapping. **[CORRECT]**

   The call must satisfy the required input contract.

2. Add region to the caller's needs list.

   needs lists dependency jobs, not invocation inputs.

3. Create a runner label named region.

   Runner labels do not supply declared workflow inputs.

4. Rename the called workflow's first step region.

   A step name cannot provide a missing invocation input.

**Concept:** Required input failures

**Authored coaching hints:**

- Validate the invocation interface before runner behavior.
- Required inputs are separate from job dependencies.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable declara region con required: true y sin valor predeterminado. El llamador omite region. ¿Qué debe corregirse?

1. Proporcionar region en el mapa with del llamador. **[CORRECT]**

   La llamada debe cumplir el contrato de entradas obligatorias.

2. Añadir region a la lista needs del llamador.

   needs lista dependencias de trabajos, no entradas de invocación.

3. Crear una etiqueta de runner llamada region.

   Las etiquetas de runner no proporcionan entradas declaradas.

4. Renombrar como region el primer paso del flujo llamado.

   El nombre de un paso no proporciona una entrada ausente.

**Concept:** Fallos de entradas obligatorias

**Authored coaching hints:**

- Valida la interfaz de invocación antes del comportamiento del runner.
- Las entradas obligatorias son distintas de las dependencias.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável declara region com required: true e sem valor padrão. O chamador omite region. O que deve ser corrigido?

1. Fornecer region no mapa with do chamador. **[CORRECT]**

   A chamada deve atender ao contrato de entradas obrigatórias.

2. Adicionar region à lista needs do chamador.

   needs lista dependências de jobs, não entradas de invocação.

3. Criar um rótulo de runner chamado region.

   Rótulos de runner não fornecem entradas declaradas.

4. Renomear a primeira etapa do workflow chamado para region.

   O nome de uma etapa não fornece uma entrada ausente.

**Concept:** Falhas de entradas obrigatórias

**Authored coaching hints:**

- Valide a interface de invocação antes do comportamento do runner.
- Entradas obrigatórias são separadas de dependências de jobs.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-079:15871a960a4ac405da32b9e4875530ac90a789d5049c52fde84d6a7246cde929 -->
## Question 79: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-079`

**Content revision:** `15871a960a4ac405da32b9e4875530ac90a789d5049c52fde84d6a7246cde929`

**en review revision:** `3ac8ffb42cf545a7009c872407da9a72a7b056046183a7f67e58a48f146056de`
**es review revision:** `8cacce08c1f31124ea3d2237ebfbc978e29100c860dbc05425430141b36a3f8e`
**pt-BR review revision:** `4d09c1fce5c539302cc6952c62bd05d08864905b690698a705285def1590038a`

### English

A reporting job depends on tests and uses if: $\{\{ always() \}\}. Which reference tells it whether tests failed?

1. steps.tests.outcome

   tests is a dependency job here, not a local step.

2. github.tests.status

   github does not contain arbitrary job-result fields.

3. runner.tests.result

   runner describes execution hardware and environment.

4. needs.tests.result **[CORRECT]**

   needs exposes the result of the dependency job.

**Concept:** Dependency result diagnosis

**Authored coaching hints:**

- A status condition allows execution but does not supply results.
- Locate the producer on the workflow dependency graph.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de informes depende de tests y usa if: $\{\{ always() \}\}. ¿Qué referencia indica si tests falló?

1. steps.tests.outcome

   tests es aquí un trabajo dependiente, no un paso local.

2. github.tests.status

   github no contiene campos arbitrarios de resultados de trabajos.

3. runner.tests.result

   runner describe hardware y entorno de ejecución.

4. needs.tests.result **[CORRECT]**

   needs expone el resultado del trabajo del que depende.

**Concept:** Diagnóstico de resultados de dependencias

**Authored coaching hints:**

- Una condición permite ejecutar, pero no aporta los resultados.
- Ubica el productor en el grafo de dependencias.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de relatórios depende de tests e usa if: $\{\{ always() \}\}. Qual referência informa se tests falhou?

1. steps.tests.outcome

   tests é aqui um job de dependência, não uma etapa local.

2. github.tests.status

   github não contém campos arbitrários de resultados de jobs.

3. runner.tests.result

   runner descreve hardware e ambiente de execução.

4. needs.tests.result **[CORRECT]**

   needs expõe o resultado do job do qual depende.

**Concept:** Diagnóstico de resultados de dependências

**Authored coaching hints:**

- Uma condição permite executar, mas não fornece os resultados.
- Localize o produtor no grafo de dependências.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-080:6dd58b940f6595a449855531216006df656920cb164eb9f74348e9b633336dcf -->
## Question 80: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-080`

**Content revision:** `6dd58b940f6595a449855531216006df656920cb164eb9f74348e9b633336dcf`

**en review revision:** `29ebd47180249d75103aa9768e9104e5299bc4787b8736791c1fd1838f471edc`
**es review revision:** `0263add5255ebb756286ff89bf0a95dcded71f533360d3e3ef537be73ea7ad2f`
**pt-BR review revision:** `f682c9cdfc09356c83c8c6ac835b0ca4cc85a6b243b1172ee0f666d64f517b47`

### English

A four-job matrix uses fail-fast: true. One job fails and two queued siblings are canceled. Which change lets those queued variants run on the next attempt?

1. Remove the failed job's display name.

   Display names do not control cancellation.

2. Add more values to the same matrix axis.

   More combinations do not change the failure policy.

3. Set strategy.fail-fast to false. **[CORRECT]**

   Disabling fail-fast prevents this sibling cancellation policy.

4. Set strategy.max-parallel to one.

   Serial execution does not disable fail-fast cancellation.

**Concept:** Matrix failure triage

**Authored coaching hints:**

- Separate the first failure from subsequent cancellations.
- Job scheduling limits do not define failure response.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz de cuatro trabajos usa fail-fast: true. Un trabajo falla y se cancelan dos pendientes. ¿Qué cambio permite ejecutarlos en el próximo intento?

1. Quitar el nombre visible del trabajo fallido.

   Los nombres visibles no controlan la cancelación.

2. Añadir más valores al mismo eje de matriz.

   Más combinaciones no cambian la política de fallos.

3. Establecer strategy.fail-fast en false. **[CORRECT]**

   Deshabilitar fail-fast evita esta política de cancelación de hermanos.

4. Establecer strategy.max-parallel en uno.

   La ejecución en serie no deshabilita la cancelación fail-fast.

**Concept:** Diagnóstico de fallos de matriz

**Authored coaching hints:**

- Separa el primer fallo de las cancelaciones posteriores.
- Los límites de planificación no definen la respuesta al fallo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz de quatro jobs usa fail-fast: true. Um job falha e dois pendentes são cancelados. Qual alteração permite executá-los na próxima tentativa?

1. Remover o nome de exibição do job com falha.

   Nomes de exibição não controlam o cancelamento.

2. Adicionar mais valores ao mesmo eixo da matriz.

   Mais combinações não alteram a política de falhas.

3. Definir strategy.fail-fast como false. **[CORRECT]**

   Desabilitar fail-fast evita essa política de cancelamento de irmãos.

4. Definir strategy.max-parallel como um.

   A execução em série não desabilita o cancelamento fail-fast.

**Concept:** Diagnóstico de falhas de matriz

**Authored coaching hints:**

- Separe a primeira falha dos cancelamentos posteriores.
- Limites de agendamento não definem a resposta à falha.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-081:c2bb841292a47f2b44156b5624357a7b954f524526734ea5ab4d1647901eae50 -->
## Question 81: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-081`

**Content revision:** `c2bb841292a47f2b44156b5624357a7b954f524526734ea5ab4d1647901eae50`

**en review revision:** `e4e1675a4f572d5bee65533cc203ce8683a1d107b1061fd144a9736945473f8b`
**es review revision:** `935b1d81d336d554f85706af626af34c7c02b4b2f0643537fe928204aa6995fc`
**pt-BR review revision:** `1bfc9589772521a88a382c9180a910d75a82216ddeb834d25778e3911eeb7705`

### English

During pull\_request, which property identifies the contributor's source branch rather than the merge ref?

1. github.repository

   repository identifies the repository, not a branch.

2. github.head\_ref **[CORRECT]**

   head\_ref names the pull request's source branch.

3. github.base\_ref

   base\_ref names the pull request's target branch.

4. github.ref

   ref normally identifies the pull request merge ref here.

**Concept:** Pull request source references

**Authored coaching hints:**

- A pull request has both a source and a destination.
- The ref used for execution may be synthetic.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Durante pull\_request, ¿qué propiedad identifica la rama de origen del colaborador en vez de la referencia de fusión?

1. github.repository

   repository identifica el repositorio, no una rama.

2. github.head\_ref **[CORRECT]**

   head\_ref nombra la rama de origen de la pull request.

3. github.base\_ref

   base\_ref nombra la rama destino de la pull request.

4. github.ref

   ref normalmente identifica aquí la referencia de fusión.

**Concept:** Referencias de origen de pull requests

**Authored coaching hints:**

- Una pull request tiene origen y destino.
- La referencia usada para ejecutar puede ser sintética.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Durante pull\_request, qual propriedade identifica a branch de origem do colaborador em vez da referência de merge?

1. github.repository

   repository identifica o repositório, não uma branch.

2. github.head\_ref **[CORRECT]**

   head\_ref nomeia a branch de origem do pull request.

3. github.base\_ref

   base\_ref nomeia a branch de destino do pull request.

4. github.ref

   ref normalmente identifica aqui a referência de merge.

**Concept:** Referências de origem de pull requests

**Authored coaching hints:**

- Um pull request tem origem e destino.
- A referência usada para executar pode ser sintética.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-082:b844b9e56e07ccef94a46572a45dcfdc180a71ceaab3f744241d1d4cd50c3d69 -->
## Question 82: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-082`

**Content revision:** `b844b9e56e07ccef94a46572a45dcfdc180a71ceaab3f744241d1d4cd50c3d69`

**en review revision:** `255d5b36072a6625688f951229b1f9d723090c141742d6b8ff9aa5209940a796`
**es review revision:** `d795072b1fbdf23967e50d5618fa7a1a7865872c3e21c599464d7c7e68049434`
**pt-BR review revision:** `d7ebfa69fed53fc250dc6a7ea55471a041d48c6adc717e10e5c4ac7169c3cf76`

### English

A step has name: Compile, id: build and output binary. Which reference reads its output later in the same job?

1. steps.binary.outputs.build

   The step identifier precedes outputs and the output name.

2. steps.build.outputs.binary **[CORRECT]**

   Step output lookup uses the step's id.

3. steps.Compile.outputs.binary

   The display name does not replace the step id.

4. needs.build.outputs.binary

   needs addresses dependency jobs, not local steps.

**Concept:** Step output identifiers

**Authored coaching hints:**

- Separate display labels from expression identifiers.
- Follow the producer's scope and declared output name.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso tiene name: Compile, id: build y salida binary. ¿Qué referencia lee la salida después en el mismo trabajo?

1. steps.binary.outputs.build

   El identificador del paso precede a outputs y al nombre de salida.

2. steps.build.outputs.binary **[CORRECT]**

   La consulta de salidas usa el id del paso.

3. steps.Compile.outputs.binary

   El nombre visible no reemplaza el id del paso.

4. needs.build.outputs.binary

   needs consulta trabajos dependientes, no pasos locales.

**Concept:** Identificadores de salidas de pasos

**Authored coaching hints:**

- Separa etiquetas visibles de identificadores de expresiones.
- Sigue el ámbito del productor y el nombre de salida declarado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa tem name: Compile, id: build e saída binary. Qual referência lê a saída depois no mesmo job?

1. steps.binary.outputs.build

   O identificador da etapa precede outputs e o nome da saída.

2. steps.build.outputs.binary **[CORRECT]**

   A consulta de saídas usa o id da etapa.

3. steps.Compile.outputs.binary

   O nome de exibição não substitui o id da etapa.

4. needs.build.outputs.binary

   needs consulta jobs de dependência, não etapas locais.

**Concept:** Identificadores de saídas de etapas

**Authored coaching hints:**

- Separe rótulos de exibição de identificadores de expressões.
- Siga o escopo do produtor e o nome de saída declarado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-083:ab17ab2ae98015c1dcf2fd485238ab8149dd21febaf1fa90fe4b6b6ffb673fd7 -->
## Question 83: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-083`

**Content revision:** `ab17ab2ae98015c1dcf2fd485238ab8149dd21febaf1fa90fe4b6b6ffb673fd7`

**en review revision:** `be174243df86c7d400a00009251b30b883edbb7d64a4db7db0e5ef41db7e0fdf`
**es review revision:** `b656cffc10f435cf4e5252dafbd2e3b9d437b25a905ba5c1c31006b9ebbd7dd0`
**pt-BR review revision:** `ccd0b8bab8c63736c0cca18fb4eea84d415ad912482addecfabb7ca1117e3c84`

### English

A build job uploads a bundle artifact successfully. A dependent deploy job starts on another runner. What must deploy do before reading the bundle files?

1. Export the artifact name into GITHUB\_ENV.

   An environment variable does not transfer file contents.

2. Add the artifact name to the needs list.

   needs orders jobs but does not download artifacts.

3. Download the artifact into its own workspace. **[CORRECT]**

   Downloading materializes uploaded files on the new runner.

4. Read the build job's absolute workspace path.

   Different runners do not share that local filesystem.

**Concept:** Cross-job file transfer

**Authored coaching hints:**

- Dependency ordering and data transfer are separate.
- Files must exist on the consumer's filesystem.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo build carga un artefacto bundle. Un trabajo deploy dependiente empieza en otro runner. ¿Qué debe hacer deploy antes de leer los archivos?

1. Exportar el nombre del artefacto a GITHUB\_ENV.

   Una variable de entorno no transfiere archivos.

2. Añadir el nombre del artefacto a needs.

   needs ordena trabajos, pero no descarga artefactos.

3. Descargar el artefacto a su propio espacio de trabajo. **[CORRECT]**

   La descarga crea los archivos en el nuevo runner.

4. Leer la ruta absoluta del espacio de build.

   Los runners distintos no comparten ese sistema de archivos local.

**Concept:** Transferencia de archivos entre trabajos

**Authored coaching hints:**

- El orden de dependencias y la transferencia son independientes.
- Los archivos deben existir en el sistema del consumidor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job build envia um artefato bundle. Um job deploy dependente inicia em outro runner. O que deploy deve fazer antes de ler os arquivos?

1. Exportar o nome do artefato para GITHUB\_ENV.

   Uma variável de ambiente não transfere arquivos.

2. Adicionar o nome do artefato a needs.

   needs ordena jobs, mas não baixa artefatos.

3. Baixar o artefato para seu próprio workspace. **[CORRECT]**

   O download materializa os arquivos no novo runner.

4. Ler o caminho absoluto do workspace de build.

   Runners diferentes não compartilham esse sistema de arquivos local.

**Concept:** Transferência de arquivos entre jobs

**Authored coaching hints:**

- A ordem de dependências e a transferência são independentes.
- Os arquivos precisam existir no sistema do consumidor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-084:d1e682a2a1db0aa506f534fb3e32cccf4fa5e2a45b155845d16127198ef1fac2 -->
## Question 84: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-084`

**Content revision:** `d1e682a2a1db0aa506f534fb3e32cccf4fa5e2a45b155845d16127198ef1fac2`

**en review revision:** `3b30ee4856721ca84024f78cfbedadc7abc33bf295640ded4c3c129c3ac09908`
**es review revision:** `c37b5e0a82d02b6d19e0380ea6dc23824e4c27122b58a6dfe3999921c4b58c65`
**pt-BR review revision:** `237540c29eb815c23d1db4c8d5a126c8101b092708839965a93270f20fd0694d`

### English

A cache step with id: deps restores an exact primary-key match. What string does steps.deps.outputs.cache-hit contain?

1. 'true' **[CORRECT]**

   An exact primary-key match produces the string true.

2. 'false'

   false does not describe an exact primary-key hit.

3. 'exact'

   exact is not the documented cache-hit output value.

4. 'restored'

   restored is not the documented cache-hit output value.

**Concept:** Exact cache match output

**Authored coaching hints:**

- Action outputs are read as strings.
- Distinguish exact matches from fallback restoration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso de caché con id: deps restaura una coincidencia exacta de la clave principal. ¿Qué cadena contiene steps.deps.outputs.cache-hit?

1. 'true' **[CORRECT]**

   Una coincidencia exacta produce la cadena true.

2. 'false'

   false no describe una coincidencia exacta de clave principal.

3. 'exact'

   exact no es el valor documentado de cache-hit.

4. 'restored'

   restored no es el valor documentado de cache-hit.

**Concept:** Salida de coincidencia exacta de caché

**Authored coaching hints:**

- Las salidas de acciones se leen como cadenas.
- Distingue coincidencias exactas de restauraciones alternativas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa de cache com id: deps restaura uma correspondência exata da chave principal. Qual string steps.deps.outputs.cache-hit contém?

1. 'true' **[CORRECT]**

   Uma correspondência exata produz a string true.

2. 'false'

   false não descreve uma correspondência exata da chave principal.

3. 'exact'

   exact não é o valor documentado de cache-hit.

4. 'restored'

   restored não é o valor documentado de cache-hit.

**Concept:** Saída de correspondência exata de cache

**Authored coaching hints:**

- As saídas de ações são lidas como strings.
- Diferencie correspondências exatas de restaurações alternativas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-085:8a128ac22f4a86ea098da7b93a11e8e8dc686b450ed77cc804a515341d184435 -->
## Question 85: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-085`

**Content revision:** `8a128ac22f4a86ea098da7b93a11e8e8dc686b450ed77cc804a515341d184435`

**en review revision:** `ea61e4f48693b8474d8a2f148075db5091e4ef5e07d10c25364bad72d9778410`
**es review revision:** `38e3b58b303f6a371902d7d0f20607ea1c30aa932838d4c7b32c6c0835096352`
**pt-BR review revision:** `002df78b091b4c0f0a3636d5772b1ae13310f3958438ac5f97c90c71730fd9ad`

### English

A maintainer changes cached files but reuses an existing cache key. Why does the old cache remain unchanged?

1. Cache files synchronize continuously after restoration.

   Restoration copies files without continuous synchronization.

2. An existing cache entry is not updated in place. **[CORRECT]**

   Create a new key to save a different cache entry.

3. A cache key always refers to the current workspace.

   Keys identify stored entries rather than live workspaces.

4. Only artifacts can contain changed dependency files.

   Caches can store changed dependencies under a new key.

**Concept:** Cache replacement diagnosis

**Authored coaching hints:**

- Think of a cache key as a stored snapshot identifier.
- Changing local files does not mutate remote stored entries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un mantenedor cambia archivos cacheados, pero reutiliza una clave existente. ¿Por qué la caché antigua no cambia?

1. Los archivos de caché se sincronizan continuamente al restaurarlos.

   La restauración copia archivos sin sincronización continua.

2. Una entrada de caché existente no se actualiza directamente. **[CORRECT]**

   Crea una clave nueva para guardar una entrada distinta.

3. Una clave de caché siempre apunta al espacio actual.

   Las claves identifican entradas almacenadas, no espacios activos.

4. Solo los artefactos pueden contener dependencias modificadas.

   Las cachés pueden guardar dependencias cambiadas con otra clave.

**Concept:** Diagnóstico de sustitución de caché

**Authored coaching hints:**

- Piensa en la clave como identificador de una instantánea.
- Cambiar archivos locales no modifica entradas remotas guardadas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um mantenedor altera arquivos em cache, mas reutiliza uma chave existente. Por que o cache antigo não muda?

1. Arquivos de cache sincronizam continuamente após a restauração.

   A restauração copia arquivos sem sincronização contínua.

2. Uma entrada de cache existente não é atualizada no local. **[CORRECT]**

   Crie uma nova chave para salvar uma entrada diferente.

3. Uma chave de cache sempre aponta para o workspace atual.

   Chaves identificam entradas armazenadas, não workspaces ativos.

4. Apenas artefatos podem conter dependências alteradas.

   Caches podem armazenar dependências alteradas com outra chave.

**Concept:** Diagnóstico de substituição de cache

**Authored coaching hints:**

- Pense na chave como identificador de uma captura.
- Alterar arquivos locais não modifica entradas remotas salvas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-086:2707bfa33ee5446d0462283f842fdedbcce75dfbd5d046048e9a60844120c36c -->
## Question 86: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-086`

**Content revision:** `2707bfa33ee5446d0462283f842fdedbcce75dfbd5d046048e9a60844120c36c`

**en review revision:** `c5053e84f1a20b60e0cae8503117f1485d657677462aeae1933628855af42f35`
**es review revision:** `0de3d89ca1a464ead593bdbbe78aafc73530390b04f31f6996bab02585e2ad93`
**pt-BR review revision:** `b54da755b8ec4f3050d5f87d41c2d04d8734db18911393f100b42a9591fb7218`

### English

Which uses value calls verify.yml from repository acme/ci at ref stable?

1. acme/ci/.github/workflows/verify.yml@stable **[CORRECT]**

   The repository, workflow path and ref follow the call syntax.

2. acme/ci@stable/.github/workflows/verify.yml

   The ref suffix belongs after the workflow file path.

3. acme/ci/.github/actions/verify.yml@stable

   Reusable workflows are not stored in the actions directory.

4. https://github.com/acme/ci/verify.yml@stable

   A workflow uses reference is not an HTTPS URL.

**Concept:** Reusable reference syntax

**Authored coaching hints:**

- Check reference structure before troubleshooting execution.
- A remote workflow reference identifies both file and revision.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué valor uses invoca verify.yml del repositorio acme/ci en la referencia stable?

1. acme/ci/.github/workflows/verify.yml@stable **[CORRECT]**

   Repositorio, ruta del flujo y referencia siguen la sintaxis de llamada.

2. acme/ci@stable/.github/workflows/verify.yml

   El sufijo de referencia va después de la ruta del archivo.

3. acme/ci/.github/actions/verify.yml@stable

   Los flujos reutilizables no se guardan en el directorio actions.

4. https://github.com/acme/ci/verify.yml@stable

   Una referencia uses de flujo no es una URL HTTPS.

**Concept:** Sintaxis de referencias reutilizables

**Authored coaching hints:**

- Comprueba la estructura de la referencia antes de la ejecución.
- Una referencia remota identifica archivo y revisión.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual valor de uses chama verify.yml do repositório acme/ci na referência stable?

1. acme/ci/.github/workflows/verify.yml@stable **[CORRECT]**

   Repositório, caminho do workflow e referência seguem a sintaxe de chamada.

2. acme/ci@stable/.github/workflows/verify.yml

   O sufixo de referência fica após o caminho do arquivo.

3. acme/ci/.github/actions/verify.yml@stable

   Workflows reutilizáveis não ficam no diretório actions.

4. https://github.com/acme/ci/verify.yml@stable

   Uma referência uses de workflow não é uma URL HTTPS.

**Concept:** Sintaxe de referências reutilizáveis

**Authored coaching hints:**

- Verifique a estrutura da referência antes da execução.
- Uma referência remota identifica arquivo e revisão.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-087:a2896d58deda095802f3047d3dd469c67ec4ddf548853f4abfb15430b0ee12a6 -->
## Question 87: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-087`

**Content revision:** `a2896d58deda095802f3047d3dd469c67ec4ddf548853f4abfb15430b0ee12a6`

**en review revision:** `ca32c7530cca0cd13ce85518630f99f50f49a3940c42d46fe4631237f4e24195`
**es review revision:** `f4de9f64b5e5fd24defe2cdfb8480de2feabc32ad20da533e5a608db4c8a4efc`
**pt-BR review revision:** `94af0a5dd7193cd1c99656e6051336b84722d305aa32bb0becd1e33b9774c159`

### English

A reusable-workflow call is incorrectly placed under steps. Which schema location should contain its uses key?

1. jobs.verify.uses **[CORRECT]**

   Reusable workflows are called directly by jobs.

2. jobs.verify.steps\[0\].uses

   This location invokes an action, not a workflow.

3. on.workflow\_call.uses

   The event interface does not contain a caller's uses key.

4. defaults.run.uses

   Run defaults do not invoke reusable components.

**Concept:** Call placement errors

**Authored coaching hints:**

- A workflow call introduces a job-level boundary.
- Action invocation and workflow invocation use different nesting.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una llamada a flujo reutilizable está incorrectamente en steps. ¿Qué ubicación del esquema debe contener su clave uses?

1. jobs.verify.uses **[CORRECT]**

   Los flujos reutilizables se invocan directamente desde trabajos.

2. jobs.verify.steps\[0\].uses

   Esta ubicación invoca una acción, no un flujo.

3. on.workflow\_call.uses

   La interfaz de eventos no contiene la clave uses del llamador.

4. defaults.run.uses

   Los valores predeterminados de run no invocan componentes.

**Concept:** Errores de ubicación de llamadas

**Authored coaching hints:**

- Una llamada de flujo introduce un límite de trabajo.
- Invocar acciones y flujos requiere anidamientos distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma chamada de workflow reutilizável está incorretamente em steps. Qual local do esquema deve conter sua chave uses?

1. jobs.verify.uses **[CORRECT]**

   Workflows reutilizáveis são chamados diretamente por jobs.

2. jobs.verify.steps\[0\].uses

   Esse local invoca uma ação, não um workflow.

3. on.workflow\_call.uses

   A interface de eventos não contém a chave uses do chamador.

4. defaults.run.uses

   Os padrões de run não invocam componentes.

**Concept:** Erros de localização de chamadas

**Authored coaching hints:**

- Uma chamada de workflow introduz um limite de job.
- Invocar ações e workflows exige aninhamentos diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-088:e6dd329c255716f90f7b2fadbe198b2678f6c806585881329b2881cdbe5c478a -->
## Question 88: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-088`

**Content revision:** `e6dd329c255716f90f7b2fadbe198b2678f6c806585881329b2881cdbe5c478a`

**en review revision:** `fa3b84c47c10f2e1ab79883488b34ae5dfe86e89a96c3e82e6b1d075c133c219`
**es review revision:** `717c019ebecdee54e786c71eb1adea68fa5912ac6e1cd54adfb8070b967c8812`
**pt-BR review revision:** `c2089200d9e1470de6550b82a2d0f1954aac108ed0d7def2a742a241e320841c`

### English

A workflow defines env: &amp;shared \{MODE: test, COLOR: blue\}. Another job sets env: \*shared. Which MODE value does that job receive from this mapping?

1. \*shared

   The alias is resolved rather than passed as literal text.

2. blue

   blue belongs to COLOR, not MODE.

3. test **[CORRECT]**

   The alias repeats the mapping containing MODE: test.

4. shared

   The anchor name is a YAML reference, not the value.

**Concept:** Interpreting YAML aliases

**Authored coaching hints:**

- Expand the referenced mapping before reading individual keys.
- YAML anchors do not rename the variables they contain.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo define env: &amp;shared \{MODE: test, COLOR: blue\}. Otro trabajo usa env: \*shared. ¿Qué valor MODE recibe de ese mapa?

1. \*shared

   El alias se resuelve en lugar de pasarse como texto literal.

2. blue

   blue pertenece a COLOR, no a MODE.

3. test **[CORRECT]**

   El alias repite el mapa que contiene MODE: test.

4. shared

   El nombre del ancla es una referencia YAML, no el valor.

**Concept:** Interpretación de alias YAML

**Authored coaching hints:**

- Expande el mapa referenciado antes de leer cada clave.
- Las anclas YAML no renombran las variables que contienen.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow define env: &amp;shared \{MODE: test, COLOR: blue\}. Outro job usa env: \*shared. Qual valor MODE ele recebe desse mapa?

1. \*shared

   O alias é resolvido em vez de ser passado como texto literal.

2. blue

   blue pertence a COLOR, não a MODE.

3. test **[CORRECT]**

   O alias repete o mapa que contém MODE: test.

4. shared

   O nome da âncora é uma referência YAML, não o valor.

**Concept:** Interpretação de aliases YAML

**Authored coaching hints:**

- Expanda o mapa referenciado antes de ler cada chave.
- Âncoras YAML não renomeiam as variáveis que contêm.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-089:a280f0a3e8d06463089190552aa37f81aa1a62cd471b05a925a12c0c2c566dee -->
## Question 89: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-089`

**Content revision:** `a280f0a3e8d06463089190552aa37f81aa1a62cd471b05a925a12c0c2c566dee`

**en review revision:** `a3dfb28f7d03e8bf6b243018720d2fc9cc3d20ea960a75c9a17a5cd37a82697c`
**es review revision:** `4b3b1485842d636b90329175df1f898a5f30122bd6351c9bc320aab4660e497e`
**pt-BR review revision:** `daf6f7fe84895da0a390a6e0c4191ba9f8da9cda7fa10ca1c2785aed804c7254`

### English

In an expanded GitHub job log, which action produces a browser URL pointing to a particular log line?

1. Click that line's number. **[CORRECT]**

   Selecting the line number creates a line-specific permalink.

2. Click the workflow file's filename.

   The workflow filename points to configuration, not log evidence.

3. Copy the repository clone URL.

   A clone URL retrieves source rather than a log location.

4. Copy the run's status-badge URL.

   A badge URL presents status rather than exact log text.

**Concept:** Exact log-line links

**Authored coaching hints:**

- Choose evidence at the requested granularity.
- A run overview link is broader than a line permalink.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un registro de trabajo expandido de GitHub, ¿qué acción genera una URL del navegador a una línea concreta?

1. Hacer clic en el número de esa línea. **[CORRECT]**

   Seleccionar el número crea un enlace a esa línea.

2. Hacer clic en el nombre del archivo del flujo.

   El archivo del flujo apunta a configuración, no a registros.

3. Copiar la URL de clonación del repositorio.

   Una URL de clonación obtiene código, no una línea de registro.

4. Copiar la URL de la insignia de estado.

   Una insignia muestra estado, no texto exacto del registro.

**Concept:** Enlaces a líneas exactas de registros

**Authored coaching hints:**

- Elige pruebas con la granularidad solicitada.
- Un enlace al resumen es más amplio que uno a una línea.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um log expandido de job do GitHub, qual ação gera uma URL do navegador para uma linha específica?

1. Clicar no número dessa linha. **[CORRECT]**

   Selecionar o número cria um link para essa linha.

2. Clicar no nome do arquivo do workflow.

   O arquivo do workflow aponta para configuração, não para logs.

3. Copiar a URL de clonagem do repositório.

   Uma URL de clonagem obtém código, não uma linha de log.

4. Copiar a URL do badge de status.

   Um badge mostra status, não texto exato do log.

**Concept:** Links para linhas exatas de logs

**Authored coaching hints:**

- Escolha evidências com a granularidade solicitada.
- Um link para o resumo é mais amplo que um link para uma linha.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-090:1d7e322593e2f6ccb6194104661b84283917a2e55172330216e5a20c00cfdb77 -->
## Question 90: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-090`

**Content revision:** `1d7e322593e2f6ccb6194104661b84283917a2e55172330216e5a20c00cfdb77`

**en review revision:** `881b46aed2867c61929a90a536c816bd2e854dd64b0a3cd0e0c901cd59a92301`
**es review revision:** `90891b5ae59b896706ef07c5697d9d8bfa853522a91a77f6630f7ee0f8e8535e`
**pt-BR review revision:** `e15f479b54156a3687593f1f585cf4244a75093a96f72966ea07a43838ecfdad`

### English

CI runs on both push and pull\_request. The team now wants PR validation only, with no branch-push run. Which trigger declaration matches that change?

1. on: push

   This keeps branch-push runs and removes PR events.

2. on: \[push, pull\_request\]

   This preserves the original two-event behavior.

3. on: workflow\_run

   This responds to other workflow runs, not PR updates directly.

4. on: pull\_request **[CORRECT]**

   Only the pull request event remains enabled.

**Concept:** Duplicate trigger diagnosis

**Authored coaching hints:**

- List which event families should remain enabled.
- One repository change can generate more than one event.

<details>
<summary>Español — same answer key and option order</summary>

### Español

CI se ejecuta en push y pull\_request. Ahora se quiere solo validación de PR, sin ejecución por push de rama. ¿Qué declaración corresponde?

1. on: push

   Conserva ejecuciones push y quita los eventos PR.

2. on: \[push, pull\_request\]

   Conserva el comportamiento original de dos eventos.

3. on: workflow\_run

   Responde a otros flujos, no directamente a cambios de PR.

4. on: pull\_request **[CORRECT]**

   Solo permanece habilitado el evento pull request.

**Concept:** Diagnóstico de disparadores duplicados

**Authored coaching hints:**

- Enumera qué familias de eventos deben seguir habilitadas.
- Un cambio del repositorio puede generar varios eventos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

CI executa em push e pull\_request. Agora a equipe quer apenas validação de PR, sem execução por push de branch. Qual declaração corresponde?

1. on: push

   Mantém execuções push e remove os eventos PR.

2. on: \[push, pull\_request\]

   Preserva o comportamento original de dois eventos.

3. on: workflow\_run

   Responde a outros workflows, não diretamente a alterações de PR.

4. on: pull\_request **[CORRECT]**

   Apenas o evento pull request permanece habilitado.

**Concept:** Diagnóstico de gatilhos duplicados

**Authored coaching hints:**

- Liste quais famílias de eventos devem continuar habilitadas.
- Uma alteração no repositório pode gerar vários eventos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-091:d4d1d7041d79f1aff98b81558e7666ae98d55d6756d03b41df95c6c95ae32433 -->
## Question 91: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-091`

**Content revision:** `d4d1d7041d79f1aff98b81558e7666ae98d55d6756d03b41df95c6c95ae32433`

**en review revision:** `5161d15dbf0f412acf68cce8a0d3775f57f3e94e32a7f3ec4f9beceba0ce1b79`
**es review revision:** `61b7fc28e450541d1756fcc72b3c5fc097c8831d03c290532f91dac90c89fbaa`
**pt-BR review revision:** `961a462c97f64723944f680a40926d2907587a51c97ac6ff6ca5e656531b0bb1`

### English

A workflow\_run trigger uses types: \[completed\]. Which job condition restricts follow-up processing to a successful upstream run?

1. if: github.event.workflow\_run.status == 'success'

   status describes lifecycle state, not the success conclusion.

2. if: github.event.action == 'success'

   The event action is completed, not success.

3. if: github.event.workflow\_run.event == 'success'

   event names the upstream trigger rather than its result.

4. if: github.event.workflow\_run.conclusion == 'success' **[CORRECT]**

   conclusion describes how the completed upstream run ended.

**Concept:** Upstream workflow conclusions

**Authored coaching hints:**

- Completion does not imply a successful conclusion.
- Inspect the upstream run object, not this job's prior steps.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un disparador workflow\_run usa types: \[completed\]. ¿Qué condición limita el procesamiento posterior a una ejecución previa correcta?

1. if: github.event.workflow\_run.status == 'success'

   status describe el ciclo de vida, no la conclusión de éxito.

2. if: github.event.action == 'success'

   La acción del evento es completed, no success.

3. if: github.event.workflow\_run.event == 'success'

   event nombra el disparador anterior, no su resultado.

4. if: github.event.workflow\_run.conclusion == 'success' **[CORRECT]**

   conclusion describe cómo terminó la ejecución anterior.

**Concept:** Conclusiones de flujos anteriores

**Authored coaching hints:**

- Terminar no implica una conclusión correcta.
- Examina la ejecución anterior, no los pasos de este trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um gatilho workflow\_run usa types: \[completed\]. Qual condição restringe o processamento posterior a uma execução anterior bem-sucedida?

1. if: github.event.workflow\_run.status == 'success'

   status descreve o ciclo de vida, não a conclusão de sucesso.

2. if: github.event.action == 'success'

   A ação do evento é completed, não success.

3. if: github.event.workflow\_run.event == 'success'

   event nomeia o gatilho anterior, não seu resultado.

4. if: github.event.workflow\_run.conclusion == 'success' **[CORRECT]**

   conclusion descreve como terminou a execução anterior.

**Concept:** Conclusões de workflows anteriores

**Authored coaching hints:**

- Concluir não implica uma conclusão bem-sucedida.
- Examine a execução anterior, não as etapas deste job.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-092:b24ae43106a06e6e3d3135416302698bf8efdab8f56a96d5be6af6ff758cf38e -->
## Question 92: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-092`

**Content revision:** `b24ae43106a06e6e3d3135416302698bf8efdab8f56a96d5be6af6ff758cf38e`

**en review revision:** `c4a7a0e7a1cc48b8e0c0ed4e35bb02f7292cb753a6cf14a12326f96ad87407f0`
**es review revision:** `6d7eddd6d498959dcbada3ab834af737f954d0b6ff332a93d13360fff1eaf0c3`
**pt-BR review revision:** `bd523124877c2c626ec0833e1c91682875333e6429261b05282616b2ce92d5f0`

### English

With step debug logging enabled, which Bash command emits a diagnostic message without creating an error annotation?

1. echo '::debug::Cache lookup started' **[CORRECT]**

   debug emits an enabled debug-log message.

2. echo '::error::Cache lookup started'

   error creates an error annotation instead.

3. echo '::warning::Cache lookup started'

   warning creates a warning annotation instead.

4. echo '::notice::Cache lookup started'

   notice creates a notice annotation instead.

**Concept:** Debug message emission

**Authored coaching hints:**

- Choose a command by output category, not message wording.
- Annotations and optional diagnostic messages are different outputs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con la depuración de pasos habilitada, ¿qué comando Bash emite un diagnóstico sin crear una anotación de error?

1. echo '::debug::Cache lookup started' **[CORRECT]**

   debug emite un mensaje en el registro de depuración habilitado.

2. echo '::error::Cache lookup started'

   error crea una anotación de error.

3. echo '::warning::Cache lookup started'

   warning crea una anotación de advertencia.

4. echo '::notice::Cache lookup started'

   notice crea una anotación informativa.

**Concept:** Emisión de mensajes de depuración

**Authored coaching hints:**

- Elige el comando por categoría, no por el texto del mensaje.
- Las anotaciones y los diagnósticos opcionales son salidas distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com a depuração de etapas habilitada, qual comando Bash emite um diagnóstico sem criar uma anotação de erro?

1. echo '::debug::Cache lookup started' **[CORRECT]**

   debug emite uma mensagem no log de depuração habilitado.

2. echo '::error::Cache lookup started'

   error cria uma anotação de erro.

3. echo '::warning::Cache lookup started'

   warning cria uma anotação de aviso.

4. echo '::notice::Cache lookup started'

   notice cria uma anotação informativa.

**Concept:** Emissão de mensagens de depuração

**Authored coaching hints:**

- Escolha o comando pela categoria, não pelo texto da mensagem.
- Anotações e diagnósticos opcionais são saídas distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-093:d00934ac9d64374200ac95e6402713fecf6d1f851edc11acc0a78d34fe5e6f4d -->
## Question 93: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-093`

**Content revision:** `d00934ac9d64374200ac95e6402713fecf6d1f851edc11acc0a78d34fe5e6f4d`

**en review revision:** `b6706fd44bd9d989d8117177be92648217757d20cd49935e19e6d0b912369fe1`
**es review revision:** `e8cba112062d9db93403f345c4e05781d070dc1fa6abb32ae891880786688254`
**pt-BR review revision:** `be5f1e1fb41c5bcf22f65063f04331c2bc797cc83c0fb4306acef13346bea5f5`

### English

Run 731 was triggered by commit A. The branch now points to commit B. On rerunning 731, what does GITHUB\_SHA identify?

1. Commit B from the current branch tip

   Moving the branch does not rewrite the run's event SHA.

2. The newest commit on the default branch

   Rerunning does not select the newest default-branch commit.

3. A new commit created for the rerun

   A rerun does not create a commit by itself.

4. Commit A from the original triggering event **[CORRECT]**

   Reruns retain the original event's GITHUB\_SHA.

**Concept:** Rerun event identity

**Authored coaching hints:**

- Separate retrying an event from dispatching a fresh event.
- A branch pointer can move while run metadata remains fixed.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La ejecución 731 fue disparada por el commit A. Ahora la rama apunta a B. Al reintentar 731, ¿qué identifica GITHUB\_SHA?

1. El commit B de la punta actual de la rama

   Mover la rama no cambia el SHA del evento de la ejecución.

2. El commit más nuevo de la rama predeterminada

   Reintentar no selecciona el último commit de la rama predeterminada.

3. Un commit nuevo creado para el reintento

   Un reintento no crea por sí solo un commit.

4. El commit A del evento disparador original **[CORRECT]**

   Los reintentos conservan GITHUB\_SHA del evento original.

**Concept:** Identidad del evento al reintentar

**Authored coaching hints:**

- Separa reintentar un evento de despachar uno nuevo.
- La referencia de rama puede moverse mientras los metadatos permanecen fijos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A execução 731 foi disparada pelo commit A. Agora a branch aponta para B. Ao tentar 731 novamente, o que GITHUB\_SHA identifica?

1. O commit B da ponta atual da branch

   Mover a branch não altera o SHA do evento da execução.

2. O commit mais recente da branch padrão

   Tentar novamente não seleciona o último commit da branch padrão.

3. Um novo commit criado para a nova tentativa

   Uma nova tentativa não cria um commit por si só.

4. O commit A do evento disparador original **[CORRECT]**

   Novas tentativas mantêm GITHUB\_SHA do evento original.

**Concept:** Identidade do evento ao tentar novamente

**Authored coaching hints:**

- Separe tentar um evento novamente de disparar um novo evento.
- A referência da branch pode mudar enquanto os metadados permanecem fixos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-094:cd17d8f6d6e5132ceaa6e9849490db55fe402a5a8cfc8f2086b54013a7d034d1 -->
## Question 94: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-094`

**Content revision:** `cd17d8f6d6e5132ceaa6e9849490db55fe402a5a8cfc8f2086b54013a7d034d1`

**en review revision:** `b5baeab98ab015ee10404bcbb68b8a05b186d8ea2a065d58cadc032d8811e584`
**es review revision:** `12d9c551dc1801d50d4dd834100ade579b5bef5105a05caaca43acc611e25f0d`
**pt-BR review revision:** `5f4c6c79bfdc6e3a393758d14bc3edbaffd4477128ba12053908a3a8613f4374`

### English

GitHub's API reports job ID 9821 for a failed matrix variant. Which GitHub CLI command retries that job specifically?

1. gh run rerun 9821 --failed

   A positional number is interpreted as a run ID.

2. gh run view --job 9821 --log

   view reads this job's logs without retrying it.

3. gh run watch 9821 --exit-status

   watch expects a run ID and only monitors execution.

4. gh run rerun --job 9821 **[CORRECT]**

   The job flag selects the API's job identifier.

**Concept:** CLI individual-job reruns

**Authored coaching hints:**

- Display names, job IDs and run IDs are distinct.
- Choose the selector corresponding to the identifier you have.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La API de GitHub informa del ID de trabajo 9821 para una variante fallida. ¿Qué comando de GitHub CLI reintenta ese trabajo concreto?

1. gh run rerun 9821 --failed

   Un número posicional se interpreta como ID de ejecución.

2. gh run view --job 9821 --log

   view lee los registros del trabajo sin reintentarlo.

3. gh run watch 9821 --exit-status

   watch espera un ID de ejecución y solo supervisa.

4. gh run rerun --job 9821 **[CORRECT]**

   La opción job selecciona el identificador de trabajo de la API.

**Concept:** Reintentos de trabajos individuales con CLI

**Authored coaching hints:**

- Nombres visibles, IDs de trabajos e IDs de ejecución difieren.
- Elige el selector correspondiente al identificador disponible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A API do GitHub informa o ID de job 9821 para uma variante com falha. Qual comando do GitHub CLI tenta esse job específico novamente?

1. gh run rerun 9821 --failed

   Um número posicional é interpretado como ID de execução.

2. gh run view --job 9821 --log

   view lê os logs do job sem tentar novamente.

3. gh run watch 9821 --exit-status

   watch espera um ID de execução e apenas monitora.

4. gh run rerun --job 9821 **[CORRECT]**

   A opção job seleciona o identificador de job da API.

**Concept:** Novas tentativas de jobs individuais pela CLI

**Authored coaching hints:**

- Nomes de exibição, IDs de jobs e IDs de execução diferem.
- Escolha o seletor correspondente ao identificador disponível.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-095:4cc43b43e9f781138deb19934f019b55381727456e1c5f981912f9917c6a3151 -->
## Question 95: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-095`

**Content revision:** `4cc43b43e9f781138deb19934f019b55381727456e1c5f981912f9917c6a3151`

**en review revision:** `df54b43b9d85c3b7f5cd69902480c028689c97bde9214443e9c18bafc9dfe835`
**es review revision:** `ab43059de3e3f58c40b3f2c29c086d0ac224e54fe1b94874bd7e9b35e861b1fd`
**pt-BR review revision:** `2edccfee11b8ea54109f95d91136737ec8842bf31c13161660bfce602df88f12`

### English

Only one job was rerun on attempt 2. Why might its downloaded log archive omit jobs that ran only on attempt 1?

1. Downloading logs converts successful jobs into artifacts.

   Log downloads do not transform jobs into artifacts.

2. The original workflow YAML hides all successful jobs.

   Attempt selection, not YAML visibility, explains this omission.

3. The archive contains jobs rerun in that attempt. **[CORRECT]**

   Use previous attempt logs for jobs not rerun.

4. Successful jobs never produce downloadable logs.

   Successful jobs also have downloadable execution logs.

**Concept:** Rerun attempt log coverage

**Authored coaching hints:**

- Correlate each log archive with its execution attempt.
- Selective retries do not execute every original job again.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Solo se repitió un trabajo en el intento 2. ¿Por qué su archivo de registros descargado puede omitir trabajos que solo se ejecutaron en el intento 1?

1. Descargar registros convierte trabajos correctos en artefactos.

   Descargar registros no transforma trabajos en artefactos.

2. El YAML original oculta todos los trabajos correctos.

   La selección de intento, no el YAML, explica la omisión.

3. El archivo contiene los trabajos repetidos en ese intento. **[CORRECT]**

   Usa registros del intento anterior para trabajos no repetidos.

4. Los trabajos correctos nunca generan registros descargables.

   Los trabajos correctos también tienen registros descargables.

**Concept:** Cobertura de registros de reintentos

**Authored coaching hints:**

- Relaciona cada archivo de registros con su intento de ejecución.
- Los reintentos selectivos no repiten todos los trabajos originales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Apenas um job foi repetido na tentativa 2. Por que o arquivo de logs baixado pode omitir jobs executados apenas na tentativa 1?

1. Baixar logs converte jobs bem-sucedidos em artefatos.

   Baixar logs não transforma jobs em artefatos.

2. O YAML original oculta todos os jobs bem-sucedidos.

   A seleção da tentativa, não o YAML, explica a omissão.

3. O arquivo contém os jobs repetidos nessa tentativa. **[CORRECT]**

   Use logs da tentativa anterior para jobs não repetidos.

4. Jobs bem-sucedidos nunca geram logs para download.

   Jobs bem-sucedidos também têm logs para download.

**Concept:** Cobertura de logs de novas tentativas

**Authored coaching hints:**

- Relacione cada arquivo de logs à sua tentativa de execução.
- Novas tentativas seletivas não repetem todos os jobs originais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-096:a279107fd5a9750e1f506fd2ab135021270a5f82e0eb13336461984fd3c97851 -->
## Question 96: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-096`

**Content revision:** `a279107fd5a9750e1f506fd2ab135021270a5f82e0eb13336461984fd3c97851`

**en review revision:** `1984ffeef8c804de74313450fd1bcbcea86bb1c668ce8b96305502dd9004bd27`
**es review revision:** `3b44a1c87ecfd0c7ded79ec4d3a1b230fd82145fcea2dbe267ea7b11eabbbfa7`
**pt-BR review revision:** `c3b78420a910e32e77d26ff48143582dc477bd6436f054a2236076bcd1a0eea6`

### English

For a private repository, what is the minimum standard repository role needed to view workflow run logs? Role names are shown in English.

1. Write

   Write includes more access than log viewing requires.

2. Maintain

   Maintain is not the minimum access needed here.

3. Admin

   Admin is not required merely to inspect logs.

4. Read **[CORRECT]**

   Read access is sufficient to view these logs.

**Concept:** Repository log access

**Authored coaching hints:**

- Distinguish viewing evidence from changing workflow execution.
- Select the least sufficient repository role.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un repositorio privado, ¿cuál es el rol estándar mínimo necesario para ver registros de ejecuciones? Los nombres de roles se muestran en inglés.

1. Write

   Write incluye más acceso del necesario para ver registros.

2. Maintain

   Maintain no es el acceso mínimo necesario aquí.

3. Admin

   No se necesita Admin solo para inspeccionar registros.

4. Read **[CORRECT]**

   El acceso Read basta para ver estos registros.

**Concept:** Acceso a registros del repositorio

**Authored coaching hints:**

- Distingue ver pruebas de cambiar la ejecución del flujo.
- Selecciona el rol de repositorio mínimo suficiente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um repositório privado, qual é o papel padrão mínimo necessário para ver logs de execuções? Os nomes dos papéis estão em inglês.

1. Write

   Write inclui mais acesso do que o necessário para ver logs.

2. Maintain

   Maintain não é o acesso mínimo necessário aqui.

3. Admin

   Admin não é necessário apenas para inspecionar logs.

4. Read **[CORRECT]**

   O acesso Read basta para ver esses logs.

**Concept:** Acesso a logs do repositório

**Authored coaching hints:**

- Diferencie ver evidências de alterar a execução do workflow.
- Selecione o papel de repositório mínimo suficiente.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-097:dab67ca3e8780d1bcfaa71fa8332fd14264ad29ad89a8135c8e22e3087e61f92 -->
## Question 97: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-097`

**Content revision:** `dab67ca3e8780d1bcfaa71fa8332fd14264ad29ad89a8135c8e22e3087e61f92`

**en review revision:** `408fb950dc7d3d7e245f6d7997b30456e102888759bf6cf04f075034c6610d82`
**es review revision:** `39c5e9a124a751d57177b383fe44f8ae06f616c7df7bca736c315bbf0a303008`
**pt-BR review revision:** `fdc91d692e4089a150bc17978403f00348a6c956a59cac2647df67b5f6ec931b`

### English

Which workflow-template placeholder resolves to the consuming repository's default branch during workflow creation?

1. $\{\{ inputs.default-branch \}\}

   A workflow input expression does not perform template substitution.

2. $default-branch **[CORRECT]**

   This is the documented workflow-template placeholder.

3. $\{\{ github.default\_branch \}\}

   This is not the template substitution token.

4. $GITHUB\_DEFAULT\_BRANCH

   This is not a default runner variable for template creation.

**Concept:** Template branch placeholders

**Authored coaching hints:**

- Template expansion happens before workflow execution.
- Do not confuse scaffolding placeholders with runtime expressions.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué marcador de una plantilla se resuelve como la rama predeterminada del repositorio consumidor al crear el flujo?

1. $\{\{ inputs.default-branch \}\}

   Una expresión de entrada no sustituye marcadores de plantillas.

2. $default-branch **[CORRECT]**

   Este es el marcador documentado para plantillas de flujos.

3. $\{\{ github.default\_branch \}\}

   No es el símbolo de sustitución de plantillas.

4. $GITHUB\_DEFAULT\_BRANCH

   No es una variable predeterminada del runner para crear plantillas.

**Concept:** Marcadores de rama en plantillas

**Authored coaching hints:**

- La expansión de plantillas ocurre antes de ejecutar el flujo.
- No confundas marcadores de creación con expresiones en ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual marcador de um modelo é resolvido como a branch padrão do repositório consumidor ao criar o workflow?

1. $\{\{ inputs.default-branch \}\}

   Uma expressão de entrada não substitui marcadores de modelos.

2. $default-branch **[CORRECT]**

   Esse é o marcador documentado para modelos de workflows.

3. $\{\{ github.default\_branch \}\}

   Esse não é o símbolo de substituição de modelos.

4. $GITHUB\_DEFAULT\_BRANCH

   Essa não é uma variável padrão do runner para criar modelos.

**Concept:** Marcadores de branch em modelos

**Authored coaching hints:**

- A expansão de modelos ocorre antes de executar o workflow.
- Não confunda marcadores de criação com expressões em execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-098:88662ab4797f0ad6f1787ef822536c85efd6a2856143c8aa3703f9fb40ab4e6c -->
## Question 98: Consume and troubleshoot workflows

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-098`

**Content revision:** `88662ab4797f0ad6f1787ef822536c85efd6a2856143c8aa3703f9fb40ab4e6c`

**en review revision:** `8ce6f4fb723a8afec6742010604238fb778d01e3b0cde74f0490abd8b58019c0`
**es review revision:** `4e652e01275239b47188520284c8c2362ac7183a50b79fca1c82f63c7fd2c525`
**pt-BR review revision:** `7cc57b11a8d1b9f740f78f2a4b920cb269a7c4ec4a0fe332240b4a66ac0e788a`

### English

In a two-OS matrix, runtime 20 passes on both OSes and runtime 22 fails on both. Which first comparison best isolates the observed pattern?

1. Compare artifact sizes from the two runtime 22 jobs.

   Both jobs fail at the same runtime; no passing baseline is compared.

2. Compare runtime 20 and 22 logs on the same OS. **[CORRECT]**

   Holding OS fixed isolates the differing runtime dimension.

3. Compare only the two successful runtime 20 jobs.

   Successful jobs alone omit the failure evidence.

4. Compare runner queue times across all four jobs.

   Queue timing does not directly isolate the runtime's failing commands.

**Concept:** Matrix evidence correlation

**Authored coaching hints:**

- Hold one variable constant while changing another.
- Use the pattern as a hypothesis, not proof of cause.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una matriz de dos SO, runtime 20 pasa en ambos y runtime 22 falla en ambos. ¿Qué primera comparación aísla mejor el patrón observado?

1. Comparar tamaños de artefactos de los dos trabajos runtime 22.

   Ambos fallan con el mismo runtime; falta comparar un caso correcto.

2. Comparar registros de runtime 20 y 22 en el mismo SO. **[CORRECT]**

   Mantener fijo el SO aísla la dimensión de runtime.

3. Comparar solo los dos trabajos correctos de runtime 20.

   Solo los trabajos correctos omiten las pruebas del fallo.

4. Comparar tiempos en cola de los cuatro trabajos.

   Los tiempos en cola no aíslan los comandos fallidos del runtime.

**Concept:** Correlación de pruebas de matriz

**Authored coaching hints:**

- Mantén una variable constante mientras cambias otra.
- Usa el patrón como hipótesis, no como prueba de causalidad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma matriz de dois SOs, runtime 20 passa em ambos e runtime 22 falha em ambos. Qual primeira comparação isola melhor o padrão observado?

1. Comparar tamanhos de artefatos dos dois jobs runtime 22.

   Ambos falham com o mesmo runtime; falta comparar um caso bem-sucedido.

2. Comparar logs de runtime 20 e 22 no mesmo SO. **[CORRECT]**

   Manter o SO fixo isola a dimensão de runtime.

3. Comparar apenas os dois jobs bem-sucedidos de runtime 20.

   Apenas jobs bem-sucedidos omitem as evidências da falha.

4. Comparar tempos na fila dos quatro jobs.

   Os tempos na fila não isolam os comandos com falha do runtime.

**Concept:** Correlação de evidências da matriz

**Authored coaching hints:**

- Mantenha uma variável constante enquanto altera outra.
- Use o padrão como hipótese, não como prova de causalidade.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-099:31e2f4fd5f3ac1708da8dabfaca06c89b28d2b1b3ab3e04fa1928d0b62096a6c -->
## Question 99: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-099`

**Content revision:** `31e2f4fd5f3ac1708da8dabfaca06c89b28d2b1b3ab3e04fa1928d0b62096a6c`

**en review revision:** `10da5e9bc6b95e73a53c3ee23ffd7ff47598879394ce61e9275c124118761aac`
**es review revision:** `8798c768dccb854ce90962ececc356e8b6d303858d0d915d5b23dbd92946164e`
**pt-BR review revision:** `6a0cea0d6b49e357789b3dd6ff4d3e06d142a14378b07d7c70dc8b407cb8a693`

### English

Which custom action type runs its entry file with a Node.js runtime selected in metadata?

1. Docker container action

   A container action starts an image rather than a runner-provided Node.js entry file.

2. Composite action

   A composite action combines steps instead of declaring a JavaScript entry file.

3. JavaScript action **[CORRECT]**

   JavaScript action metadata selects the runtime and entry script.

4. Reusable workflow

   A reusable workflow defines jobs and is not one of the three custom action types.

**Concept:** JavaScript action execution

**Authored coaching hints:**

- Compare an action's implementation with a workflow's orchestration.
- Consider which component launches the entry file.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tipo de acción personalizada ejecuta su archivo de entrada con un entorno Node.js seleccionado en los metadatos?

1. Acción de contenedor Docker

   Una acción de contenedor inicia una imagen, no un archivo Node.js ejecutado por el runner.

2. Acción compuesta

   Una acción compuesta combina pasos en vez de declarar un archivo de entrada JavaScript.

3. Acción JavaScript **[CORRECT]**

   Los metadatos de una acción JavaScript seleccionan el entorno y el script de entrada.

4. Flujo reutilizable

   Un flujo reutilizable define trabajos y no es uno de los tres tipos de acción personalizada.

**Concept:** Ejecución de acciones JavaScript

**Authored coaching hints:**

- Compara la implementación de una acción con la orquestación de un flujo.
- Considera qué componente inicia el archivo de entrada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tipo de ação personalizada executa seu arquivo de entrada com um runtime Node.js selecionado nos metadados?

1. Ação de contêiner Docker

   Uma ação de contêiner inicia uma imagem, não um arquivo Node.js executado pelo runner.

2. Ação composta

   Uma ação composta combina etapas em vez de declarar um arquivo de entrada JavaScript.

3. Ação JavaScript **[CORRECT]**

   Os metadados de uma ação JavaScript selecionam o runtime e o script de entrada.

4. Fluxo de trabalho reutilizável

   Um fluxo reutilizável define jobs e não é um dos três tipos de ação personalizada.

**Concept:** Execução de ações JavaScript

**Authored coaching hints:**

- Compare a implementação de uma ação com a orquestração de um fluxo.
- Considere qual componente inicia o arquivo de entrada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-100:46e2fd52b9634582125d0ddc244894df701991f931edb1a385e8c591b1fa1871 -->
## Question 100: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-100`

**Content revision:** `46e2fd52b9634582125d0ddc244894df701991f931edb1a385e8c591b1fa1871`

**en review revision:** `e602f1c9477e81b2708f05b41d96f236ca36b6a470dc6d6e4b60eaa142b2fb4c`
**es review revision:** `ed2cd78637d5bb5fa1bc2414a6a5d3156006f9ab0575aac1a8a8040a42cf85ed`
**pt-BR review revision:** `3341952cfd0e8e4f75688537e52369c8b6b86f3cc6eb336f9f0e99a1f11b35de`

### English

Which action type packages a command together with its Linux system libraries in an image?

1. Docker container action **[CORRECT]**

   The image carries the command and its system dependencies.

2. JavaScript action

   JavaScript action metadata does not package a Linux filesystem.

3. Composite action

   Composite steps reuse the runner environment rather than package an image.

4. Reusable workflow

   A reusable workflow can invoke containers but is not itself an image-based action.

**Concept:** Container action packaging

**Authored coaching hints:**

- Separate environment packaging from step reuse.
- Where will the required shared libraries come from?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tipo de acción empaqueta un comando junto con sus bibliotecas de sistema Linux en una imagen?

1. Acción de contenedor Docker **[CORRECT]**

   La imagen contiene el comando y sus dependencias de sistema.

2. Acción JavaScript

   Los metadatos de una acción JavaScript no empaquetan un sistema de archivos Linux.

3. Acción compuesta

   Los pasos compuestos reutilizan el entorno del runner en lugar de empaquetar una imagen.

4. Flujo reutilizable

   Un flujo reutilizable puede invocar contenedores, pero no es una acción basada en imagen.

**Concept:** Empaquetado de acciones de contenedor

**Authored coaching hints:**

- Distingue el empaquetado del entorno de la reutilización de pasos.
- ¿De dónde vendrán las bibliotecas compartidas necesarias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tipo de ação empacota um comando com suas bibliotecas de sistema Linux em uma imagem?

1. Ação de contêiner Docker **[CORRECT]**

   A imagem contém o comando e suas dependências de sistema.

2. Ação JavaScript

   Os metadados de uma ação JavaScript não empacotam um sistema de arquivos Linux.

3. Ação composta

   Etapas compostas reutilizam o ambiente do runner em vez de empacotar uma imagem.

4. Fluxo de trabalho reutilizável

   Um fluxo reutilizável pode invocar contêineres, mas não é uma ação baseada em imagem.

**Concept:** Empacotamento de ações de contêiner

**Authored coaching hints:**

- Diferencie o empacotamento do ambiente da reutilização de etapas.
- De onde virão as bibliotecas compartilhadas necessárias?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-101:894cb1e7d8fed4d226ab8bdedbe3a82f18dcfe033d3f6b75bfa793cd29f6803b -->
## Question 101: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-101`

**Content revision:** `894cb1e7d8fed4d226ab8bdedbe3a82f18dcfe033d3f6b75bfa793cd29f6803b`

**en review revision:** `7a526ea5cd0a8e01c8502bf07ec036c15a6b4c1635d84fa62cd26fcc21c309d6`
**es review revision:** `826e3cb3ef97b5f3dfacfeaa69aaf22cb3c9b63b83643c6627b8cce0bdb9ada9`
**pt-BR review revision:** `4e79f856d63ea6c5bbcbf8c7cb0f9a4c164a8b5d78cb110cb8ee6d3698ae14ab`

### English

Which custom action type declares a sequence of run and uses steps in its metadata?

1. JavaScript action

   JavaScript metadata points to a script instead of a step sequence.

2. Docker container action

   Container metadata describes an image and its invocation.

3. Reusable workflow

   Reusable workflows put steps inside jobs in a workflow file, not action metadata.

4. Composite action **[CORRECT]**

   Composite metadata directly contains the steps to execute.

**Concept:** Composite step encapsulation

**Authored coaching hints:**

- Identify the file being described before choosing an abstraction.
- Distinguish a job definition from an action implementation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tipo de acción personalizada declara una secuencia de pasos run y uses en sus metadatos?

1. Acción JavaScript

   Los metadatos JavaScript apuntan a un script, no a una secuencia de pasos.

2. Acción de contenedor Docker

   Los metadatos de contenedor describen una imagen y su invocación.

3. Flujo reutilizable

   Los flujos reutilizables incluyen pasos dentro de trabajos en un archivo de flujo, no en metadatos de acción.

4. Acción compuesta **[CORRECT]**

   Los metadatos de una acción compuesta contienen directamente los pasos que se ejecutan.

**Concept:** Encapsulación de pasos compuestos

**Authored coaching hints:**

- Identifica el archivo descrito antes de elegir una abstracción.
- Distingue una definición de trabajo de una implementación de acción.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tipo de ação personalizada declara uma sequência de etapas run e uses nos metadados?

1. Ação JavaScript

   Os metadados JavaScript apontam para um script, não para uma sequência de etapas.

2. Ação de contêiner Docker

   Os metadados de contêiner descrevem uma imagem e sua invocação.

3. Fluxo de trabalho reutilizável

   Fluxos reutilizáveis incluem etapas em jobs de um arquivo de fluxo, não nos metadados de uma ação.

4. Ação composta **[CORRECT]**

   Os metadados de uma ação composta contêm diretamente as etapas a executar.

**Concept:** Encapsulamento de etapas compostas

**Authored coaching hints:**

- Identifique o arquivo descrito antes de escolher uma abstração.
- Diferencie a definição de um job da implementação de uma ação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action>

<!-- certification-coach-question:actions-102:c63ecf7d19c5c072d234d92d2e838a55f567b819d0314781c59d08af9fba63ef -->
## Question 102: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-102`

**Content revision:** `c63ecf7d19c5c072d234d92d2e838a55f567b819d0314781c59d08af9fba63ef`

**en review revision:** `a9b85b69290ea04e225151e6ca7ba30e07a29481d6a34998562a20d4c361c449`
**es review revision:** `055131a99645c13ccdea707721ba6beaccecc010c71483d39506b79b1727376f`
**pt-BR review revision:** `0b180c50566dbb29b6f2d9b7ae766492d8f468eb54b17e5b8b238ff9db80ccc5`

### English

Which filename is valid for custom action metadata?

1. actions.yml

   The plural actions.yml is not an action metadata filename.

2. action.yaml **[CORRECT]**

   action.yaml is supported; action.yml is the other supported spelling.

3. workflow.yaml

   A workflow filename does not identify an action metadata file.

4. metadata.yml

   GitHub does not discover action metadata under metadata.yml.

**Concept:** Action metadata discovery

**Authored coaching hints:**

- The runner uses a defined filename, not an arbitrary YAML filename.
- Check both the basename and the extension.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué nombre de archivo es válido para los metadatos de una acción personalizada?

1. actions.yml

   El plural actions.yml no es un nombre de metadatos de acción.

2. action.yaml **[CORRECT]**

   Se admite action.yaml; la otra forma admitida es action.yml.

3. workflow.yaml

   Un nombre de archivo de flujo no identifica metadatos de acción.

4. metadata.yml

   GitHub no detecta metadatos de acción con el nombre metadata.yml.

**Concept:** Detección de metadatos de acción

**Authored coaching hints:**

- El runner usa un nombre definido, no cualquier nombre YAML.
- Comprueba tanto el nombre base como la extensión.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual nome de arquivo é válido para os metadados de uma ação personalizada?

1. actions.yml

   O plural actions.yml não é um nome de metadados de ação.

2. action.yaml **[CORRECT]**

   action.yaml é aceito; a outra forma aceita é action.yml.

3. workflow.yaml

   Um nome de arquivo de fluxo não identifica metadados de ação.

4. metadata.yml

   O GitHub não descobre metadados de ação com o nome metadata.yml.

**Concept:** Descoberta de metadados de ação

**Authored coaching hints:**

- O runner usa um nome definido, não qualquer nome YAML.
- Confira tanto o nome base quanto a extensão.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-103:64dd020d62c48dc411eaf124ae2a74d080f742575e50ddaf36f9f5e05ed24bda -->
## Question 103: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-103`

**Content revision:** `64dd020d62c48dc411eaf124ae2a74d080f742575e50ddaf36f9f5e05ed24bda`

**en review revision:** `d22195b8fe8b04f9392f22d16d9327917a3ec04cc4dd37fd65c4b91e101299d5`
**es review revision:** `b494fb498f339278b4b669c1cf0a3f87203fe52aeaf360bb79dad4801418e6ee`
**pt-BR review revision:** `e6a100cc749e5d3329b5067adda4e9d023378aa8378ad796edeff99ac10baf4f`

### English

Which set contains only required top-level action metadata keys?

1. name, author, branding

   author and branding are optional metadata.

2. name, description, runs **[CORRECT]**

   These identify the action, describe it, and specify its execution.

3. description, inputs, outputs

   inputs and outputs are optional even for actions that do useful work.

4. author, inputs, runs

   author and inputs are optional; this set also omits required keys.

**Concept:** Required action metadata

**Authored coaching hints:**

- Separate identification and execution from optional presentation.
- An action need not accept parameters or return values.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué conjunto contiene únicamente claves obligatorias de primer nivel de los metadatos de acción?

1. name, author, branding

   author y branding son metadatos opcionales.

2. name, description, runs **[CORRECT]**

   Estas claves identifican la acción, la describen y especifican su ejecución.

3. description, inputs, outputs

   inputs y outputs son opcionales incluso en acciones útiles.

4. author, inputs, runs

   author e inputs son opcionales; además, faltan claves obligatorias en este conjunto.

**Concept:** Metadatos obligatorios de acción

**Authored coaching hints:**

- Distingue la identificación y ejecución de la presentación opcional.
- Una acción no necesita aceptar parámetros ni devolver valores.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual conjunto contém apenas chaves obrigatórias de primeiro nível dos metadados de ação?

1. name, author, branding

   author e branding são metadados opcionais.

2. name, description, runs **[CORRECT]**

   Essas chaves identificam a ação, a descrevem e especificam sua execução.

3. description, inputs, outputs

   inputs e outputs são opcionais mesmo em ações úteis.

4. author, inputs, runs

   author e inputs são opcionais; esse conjunto também omite chaves obrigatórias.

**Concept:** Metadados obrigatórios de ação

**Authored coaching hints:**

- Diferencie identificação e execução de apresentação opcional.
- Uma ação não precisa aceitar parâmetros nem retornar valores.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-104:970f2331eeec31e44819e438c9e8124f4b6475ab9a0e05805110cd215571a200 -->
## Question 104: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-104`

**Content revision:** `970f2331eeec31e44819e438c9e8124f4b6475ab9a0e05805110cd215571a200`

**en review revision:** `c9fcbed9ded231d8f3a8e9bc552b43c6e5e01f0a1a0318eecaefa93f31ec4e90`
**es review revision:** `b2d1c258ea5b21ff2195ed177e51cc0d99a382a43975fd540eb899552e5f622f`
**pt-BR review revision:** `da01fbabe3249531ff2beb93edfc43da0e1ffa875949c465e514ca41904fb938`

### English

In JavaScript action metadata, which key identifies the script executed for the main invocation?

1. runs.image

   runs.image configures the image for a Docker action.

2. runs.entrypoint

   runs.entrypoint configures a container entrypoint, not a JavaScript script.

3. runs.steps

   runs.steps contains composite steps, not a JavaScript entry file.

4. runs.main **[CORRECT]**

   runs.main gives the JavaScript entry file relative to the action directory.

**Concept:** JavaScript entry file

**Authored coaching hints:**

- Match metadata keys to their action type.
- The runtime selector and the script path are separate settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En los metadatos de una acción JavaScript, ¿qué clave identifica el script ejecutado en la invocación principal?

1. runs.image

   runs.image configura la imagen de una acción Docker.

2. runs.entrypoint

   runs.entrypoint configura la entrada de un contenedor, no un script JavaScript.

3. runs.steps

   runs.steps contiene pasos compuestos, no un archivo de entrada JavaScript.

4. runs.main **[CORRECT]**

   runs.main indica el archivo de entrada JavaScript relativo al directorio de la acción.

**Concept:** Archivo de entrada JavaScript

**Authored coaching hints:**

- Relaciona las claves de metadatos con su tipo de acción.
- El selector de entorno y la ruta del script son ajustes distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Nos metadados de uma ação JavaScript, qual chave identifica o script executado na invocação principal?

1. runs.image

   runs.image configura a imagem de uma ação Docker.

2. runs.entrypoint

   runs.entrypoint configura a entrada de um contêiner, não um script JavaScript.

3. runs.steps

   runs.steps contém etapas compostas, não um arquivo de entrada JavaScript.

4. runs.main **[CORRECT]**

   runs.main indica o arquivo de entrada JavaScript relativo ao diretório da ação.

**Concept:** Arquivo de entrada JavaScript

**Authored coaching hints:**

- Relacione as chaves de metadados ao tipo de ação.
- O seletor de runtime e o caminho do script são configurações diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-105:1508d8f9ca6e75e473dacade67ecd080766813586b3f3da7f4c21b97ccd67c09 -->
## Question 105: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-105`

**Content revision:** `1508d8f9ca6e75e473dacade67ecd080766813586b3f3da7f4c21b97ccd67c09`

**en review revision:** `5976a8257e9c953c7cea534eee40f0804504c0898f960340946ab40a92b136a9`
**es review revision:** `58011a76436490d0d0201ea2c4a6671fec544a6074f12cb42af26f221dadb4fd`
**pt-BR review revision:** `af27cd13084ed50d37194dddcb9c7b505cf2621a1b9e9d1b3e44f72f25ce3cee`

### English

Which metadata setting selects the execution runtime for an action?

1. runs.using **[CORRECT]**

   runs.using selects the JavaScript runtime or the docker/composite execution type.

2. runs.main

   runs.main selects a JavaScript script, not its runtime.

3. runs.env

   runs.env sets container environment variables.

4. runs.args

   runs.args supplies container arguments instead of choosing the runtime.

**Concept:** Action runtime selection

**Authored coaching hints:**

- Distinguish how code runs from which file runs.
- Metadata has different execution schemas for the three action types.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ajuste de metadatos selecciona el entorno de ejecución de una acción?

1. runs.using **[CORRECT]**

   runs.using selecciona el entorno JavaScript o el tipo de ejecución docker/composite.

2. runs.main

   runs.main selecciona un script JavaScript, no su entorno.

3. runs.env

   runs.env define variables de entorno del contenedor.

4. runs.args

   runs.args proporciona argumentos al contenedor en lugar de elegir el entorno.

**Concept:** Selección del entorno de acción

**Authored coaching hints:**

- Distingue cómo se ejecuta el código de qué archivo se ejecuta.
- Los tres tipos de acción tienen esquemas de ejecución distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração dos metadados seleciona o runtime de execução de uma ação?

1. runs.using **[CORRECT]**

   runs.using seleciona o runtime JavaScript ou o tipo de execução docker/composite.

2. runs.main

   runs.main seleciona um script JavaScript, não seu runtime.

3. runs.env

   runs.env define variáveis de ambiente do contêiner.

4. runs.args

   runs.args fornece argumentos ao contêiner em vez de escolher o runtime.

**Concept:** Seleção do runtime da ação

**Authored coaching hints:**

- Diferencie como o código é executado de qual arquivo é executado.
- Os três tipos de ação têm esquemas de execução diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-106:2b6b272281b9cbe6302bcb03af2bde0167dffbea0e75588d5872c4ac793a8567 -->
## Question 106: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-106`

**Content revision:** `2b6b272281b9cbe6302bcb03af2bde0167dffbea0e75588d5872c4ac793a8567`

**en review revision:** `41d5aacaa7442c8c085af0dc80d5929419dd21592a41d584605296a027f6d5be`
**es review revision:** `85d04e2f97488d7e7f9f61e90148d2c53f79f4779c1c3e0f37d2008cfc8999e6`
**pt-BR review revision:** `0811e2b9de11f42c99ead0082737228b3f425fdb208f4945756553e6c20c86df`

### English

A JavaScript action is invoked through a local ./ path. Which lifecycle feature is not supported for that local invocation?

1. runs.main

   Local JavaScript actions still need a main entry file.

2. runs.post

   The local-action restriction here concerns pre, not post cleanup.

3. runs.pre **[CORRECT]**

   The metadata reference explicitly excludes runs.pre for local actions.

4. runs.post-if

   post-if controls the post hook and is not the documented local pre restriction.

**Concept:** Local action lifecycle limitation

**Authored coaching hints:**

- Local and remotely downloaded actions can differ during job setup.
- Check lifecycle support rather than assuming every hook is available.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript se invoca mediante una ruta local ./. ¿Qué función de ciclo de vida no se admite en esa invocación local?

1. runs.main

   Las acciones JavaScript locales siguen necesitando un archivo de entrada principal.

2. runs.post

   La restricción para acciones locales afecta a pre, no a la limpieza post.

3. runs.pre **[CORRECT]**

   La referencia de metadatos excluye explícitamente runs.pre para acciones locales.

4. runs.post-if

   post-if controla el enlace post y no es la restricción local documentada para pre.

**Concept:** Limitación del ciclo de vida de acciones locales

**Authored coaching hints:**

- Las acciones locales y las descargadas pueden diferir durante la preparación del trabajo.
- Comprueba la compatibilidad del ciclo de vida sin suponer que todos los enlaces están disponibles.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript é invocada por um caminho local ./. Qual recurso de ciclo de vida não é aceito nessa invocação local?

1. runs.main

   Ações JavaScript locais continuam precisando de um arquivo de entrada principal.

2. runs.post

   A restrição para ações locais afeta pre, não a limpeza post.

3. runs.pre **[CORRECT]**

   A referência de metadados exclui explicitamente runs.pre para ações locais.

4. runs.post-if

   post-if controla o gancho post e não é a restrição local documentada para pre.

**Concept:** Limitação do ciclo de vida de ações locais

**Authored coaching hints:**

- Ações locais e baixadas podem diferir durante a preparação do job.
- Confira o suporte ao ciclo de vida sem presumir que todos os ganchos estão disponíveis.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-107:7a7178d89c0edc40c55e8b4c0663f566ef510e5fdf0c3f393a65bb414c075feb -->
## Question 107: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-107`

**Content revision:** `7a7178d89c0edc40c55e8b4c0663f566ef510e5fdf0c3f393a65bb414c075feb`

**en review revision:** `545f740a70ee5a6aebdd1e0cddbf5a11c87ee7cac55cb5d3ed96424b8d6d3f07`
**es review revision:** `3f0f0a56ee3495ef9e71e80130278136ee56e8e6eadf1d186830fdf91f23bcd3`
**pt-BR review revision:** `303c67bf07be16849306ea4c247034af3c01830240ba576ef8ea140a2659a18a`

### English

Which JavaScript action metadata key schedules a cleanup script at the end of the job?

1. runs.pre

   runs.pre executes before the main action, not at job completion.

2. runs.main

   runs.main is the ordinary action entry point during the step.

3. runs.args

   runs.args configures container arguments, not JavaScript cleanup.

4. runs.post **[CORRECT]**

   runs.post registers the JavaScript cleanup entry file for job completion.

**Concept:** Action cleanup registration

**Authored coaching hints:**

- Distinguish a step's execution from the job's finalization phase.
- Consider the lifecycle order rather than the script filename.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de metadatos de una acción JavaScript programa un script de limpieza al final del trabajo?

1. runs.pre

   runs.pre se ejecuta antes de la acción principal, no al finalizar el trabajo.

2. runs.main

   runs.main es la entrada normal de la acción durante el paso.

3. runs.args

   runs.args configura argumentos del contenedor, no la limpieza JavaScript.

4. runs.post **[CORRECT]**

   runs.post registra el archivo JavaScript de limpieza para el final del trabajo.

**Concept:** Registro de limpieza de acción

**Authored coaching hints:**

- Distingue la ejecución de un paso de la fase final del trabajo.
- Considera el orden del ciclo de vida, no el nombre del script.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave dos metadados de uma ação JavaScript agenda um script de limpeza no final do job?

1. runs.pre

   runs.pre executa antes da ação principal, não no término do job.

2. runs.main

   runs.main é a entrada normal da ação durante a etapa.

3. runs.args

   runs.args configura argumentos do contêiner, não a limpeza JavaScript.

4. runs.post **[CORRECT]**

   runs.post registra o arquivo JavaScript de limpeza para o término do job.

**Concept:** Registro da limpeza da ação

**Authored coaching hints:**

- Diferencie a execução de uma etapa da fase final do job.
- Considere a ordem do ciclo de vida, não o nome do script.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-108:850633d44259f13f889c6c3fa1ace100d92f3c4aca50a9e941d5a99640cda18b -->
## Question 108: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-108`

**Content revision:** `850633d44259f13f889c6c3fa1ace100d92f3c4aca50a9e941d5a99640cda18b`

**en review revision:** `c337938e27ded1186e7ef040f1c89841a9537590e0ed0f290f3dde6fc42eba18`
**es review revision:** `d4065545923cbba7c26c51c984a5e48d33b83a9573970c57b81d731707193f5d`
**pt-BR review revision:** `b2b2942060d6ae7a9a867100a913d16e7ca51b4bbc7262d65a34d11d47f28e7b`

### English

Without runs.post-if, what condition is used for a JavaScript action's runs.post hook?

1. success()

   success() would restrict cleanup to successful job status.

2. failure()

   failure() would select failed job status only.

3. always() **[CORRECT]**

   The default post condition is always(), rather than success-only cleanup.

4. cancelled()

   cancelled() tests cancellation instead of providing the default condition.

**Concept:** Post-hook default condition

**Authored coaching hints:**

- Cleanup can be necessary even after an unsuccessful job.
- Do not infer hook defaults from ordinary step defaults.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Si no se define runs.post-if, ¿qué condición usa el enlace runs.post de una acción JavaScript?

1. success()

   success() restringiría la limpieza al estado satisfactorio del trabajo.

2. failure()

   failure() seleccionaría únicamente el estado de error del trabajo.

3. always() **[CORRECT]**

   La condición predeterminada de post es always(), no una limpieza solo tras éxito.

4. cancelled()

   cancelled() comprueba la cancelación, no es la condición predeterminada.

**Concept:** Condición predeterminada del enlace post

**Authored coaching hints:**

- La limpieza puede ser necesaria incluso tras un trabajo fallido.
- No deduzcas los valores predeterminados de los enlaces a partir de los pasos normales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Sem runs.post-if, qual condição é usada pelo gancho runs.post de uma ação JavaScript?

1. success()

   success() restringiria a limpeza ao estado de sucesso do job.

2. failure()

   failure() selecionaria apenas o estado de falha do job.

3. always() **[CORRECT]**

   A condição padrão de post é always(), não uma limpeza apenas após sucesso.

4. cancelled()

   cancelled() verifica cancelamento, não é a condição padrão.

**Concept:** Condição padrão do gancho post

**Authored coaching hints:**

- A limpeza pode ser necessária mesmo após um job malsucedido.
- Não deduza os padrões dos ganchos a partir dos padrões das etapas comuns.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-109:91f93a8abb6d43935ce053758c3277fe18640c8a0a9957ac92156dcbc4609dbf -->
## Question 109: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-109`

**Content revision:** `91f93a8abb6d43935ce053758c3277fe18640c8a0a9957ac92156dcbc4609dbf`

**en review revision:** `7f828674abc007cd76f2c9cdb39e0af543e9f40297dcd4b9e9262137f8a8bb02`
**es review revision:** `4bb625e348373916a29701d56374f93c2fa1f95ce8e36782bc20c8c4c619e084`
**pt-BR review revision:** `3cd1da9eec3a871d790d079e94f0ac10892cfcd02ce5402f4f336c5eaa634253`

### English

An action input region has default: west. The caller omits region. What value does the input receive?

1. region

   The input identifier is not substituted as its own value.

2. west **[CORRECT]**

   The input default is used when the caller does not specify the parameter.

3. undefined

   The configured default prevents an unspecified value in this example.

4. null

   Omission does not replace a configured string default with null.

**Concept:** Action input defaults

**Authored coaching hints:**

- Distinguish a parameter's identifier from its value.
- Ask which metadata applies when the caller supplies nothing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una entrada region de una acción tiene default: west. El llamador omite region. ¿Qué valor recibe la entrada?

1. region

   El identificador de entrada no se sustituye como su propio valor.

2. west **[CORRECT]**

   Se usa el valor predeterminado cuando el llamador no especifica el parámetro.

3. undefined

   El valor predeterminado configurado evita un valor sin especificar en este ejemplo.

4. null

   La omisión no reemplaza un valor de cadena predeterminado por null.

**Concept:** Valores predeterminados de entradas de acción

**Authored coaching hints:**

- Distingue el identificador de un parámetro de su valor.
- Piensa qué metadatos se aplican si el llamador no proporciona nada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma entrada region de uma ação tem default: west. O chamador omite region. Qual valor a entrada recebe?

1. region

   O identificador da entrada não é substituído como seu próprio valor.

2. west **[CORRECT]**

   O valor padrão é usado quando o chamador não especifica o parâmetro.

3. undefined

   O padrão configurado evita um valor não especificado neste exemplo.

4. null

   A omissão não substitui um valor padrão de texto por null.

**Concept:** Valores padrão de entradas de ação

**Authored coaching hints:**

- Diferencie o identificador de um parâmetro de seu valor.
- Pense em quais metadados se aplicam quando o chamador não fornece nada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-110:8f955b7a3391cb26221ba3df9d8c10ee396fe24410c1b26a01b15135c06b4db0 -->
## Question 110: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-110`

**Content revision:** `8f955b7a3391cb26221ba3df9d8c10ee396fe24410c1b26a01b15135c06b4db0`

**en review revision:** `9db2a80956b8828020ff064dc3eaca6333b5a59d6c535585e2df665022d94e51`
**es review revision:** `653fcea049da56b3f5723333da47b0501c13714dfea08c957709594556683c35`
**pt-BR review revision:** `b62c26a1812a134d131bb0c812975a79c15da24f3e4c6c330d90994ba5ba3b90`

### English

Does required: true in custom action input metadata, by itself, reject an omitted input?

1. No; validation must be implemented in the action. **[CORRECT]**

   The flag describes the requirement but does not automatically enforce it.

2. Yes; the runner rejects the workflow before jobs start.

   The action metadata flag alone does not provide this workflow validation.

3. Yes; the runner skips that action without an error.

   There is no automatic skip behavior attached to this flag.

4. No; the runner always substitutes the input name.

   Input names do not become fallback values automatically.

**Concept:** Custom input validation responsibility

**Authored coaching hints:**

- A declaration and runtime validation are different mechanisms.
- Do not transfer workflow\_dispatch rules to action metadata.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿required: true en los metadatos de entrada de una acción personalizada rechaza por sí solo una entrada omitida?

1. No; la validación debe implementarse en la acción. **[CORRECT]**

   La marca describe el requisito, pero no lo aplica automáticamente.

2. Sí; el runner rechaza el flujo antes de iniciar los trabajos.

   La marca de metadatos por sí sola no proporciona esta validación del flujo.

3. Sí; el runner omite esa acción sin generar un error.

   Esta marca no provoca una omisión automática.

4. No; el runner siempre sustituye el nombre de la entrada.

   Los nombres de entrada no se convierten automáticamente en valores alternativos.

**Concept:** Responsabilidad de validación de entradas personalizadas

**Authored coaching hints:**

- Una declaración y la validación en ejecución son mecanismos diferentes.
- No traslades las reglas de workflow\_dispatch a los metadatos de acción.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

required: true nos metadados de entrada de uma ação personalizada rejeita, por si só, uma entrada omitida?

1. Não; a validação deve ser implementada na ação. **[CORRECT]**

   A marca descreve o requisito, mas não o impõe automaticamente.

2. Sim; o runner rejeita o fluxo antes de iniciar os jobs.

   A marca dos metadados, sozinha, não fornece essa validação do fluxo.

3. Sim; o runner ignora essa ação sem gerar erro.

   Essa marca não provoca uma omissão automática.

4. Não; o runner sempre substitui o nome da entrada.

   Nomes de entrada não se tornam valores alternativos automaticamente.

**Concept:** Responsabilidade pela validação de entradas personalizadas

**Authored coaching hints:**

- Uma declaração e a validação em execução são mecanismos diferentes.
- Não transfira as regras de workflow\_dispatch para os metadados de ação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-111:ec27219ddb023201e79e46c5282cfc6c2bcc15902bb80b8dbd02fb75daebba0d -->
## Question 111: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-111`

**Content revision:** `ec27219ddb023201e79e46c5282cfc6c2bcc15902bb80b8dbd02fb75daebba0d`

**en review revision:** `1199e0885940a11a6f1bc5d50af3af0f368910e62850c5b2471888f2ec4d7ce9`
**es review revision:** `d92e14ec24d5f2e9c67e26d91f58c80900c64f9cd8affba9485f1d02c09dc984`
**pt-BR review revision:** `4e066969a266215313c04fdbff7d48937ce9c8fc495b44aa8e56f2c64ba0f680`

### English

Which @actions/core call throws if the custom action input target is empty?

1. core.getInput('target', \{ required: true \}) **[CORRECT]**

   The required option on getInput performs the runtime input check.

2. core.getInput('target', \{ required: false \})

   Without the required option, getInput can return an empty string.

3. core.getInput('target', \{ trimWhitespace: true \})

   Whitespace trimming does not require the resulting input to be nonempty.

4. core.getInput('target', \{ trimWhitespace: false \})

   Disabling trimming preserves whitespace but does not require an input value.

**Concept:** Toolkit required input check

**Authored coaching hints:**

- Text normalization and presence validation solve different problems.
- Compare the options passed to the function.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué llamada de @actions/core lanza un error si la entrada target de una acción personalizada está vacía?

1. core.getInput('target', \{ required: true \}) **[CORRECT]**

   La opción required de getInput realiza la comprobación de entrada en ejecución.

2. core.getInput('target', \{ required: false \})

   Sin la opción required, getInput puede devolver una cadena vacía.

3. core.getInput('target', \{ trimWhitespace: true \})

   Recortar espacios no exige que la entrada resultante tenga contenido.

4. core.getInput('target', \{ trimWhitespace: false \})

   Desactivar el recorte conserva espacios, pero no exige un valor de entrada.

**Concept:** Comprobación de entrada obligatoria con toolkit

**Authored coaching hints:**

- Normalizar texto y validar la presencia resuelven problemas distintos.
- Compara las opciones pasadas a la función.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chamada de @actions/core lança um erro se a entrada target de uma ação personalizada estiver vazia?

1. core.getInput('target', \{ required: true \}) **[CORRECT]**

   A opção required de getInput realiza a verificação de entrada em execução.

2. core.getInput('target', \{ required: false \})

   Sem a opção required, getInput pode retornar uma string vazia.

3. core.getInput('target', \{ trimWhitespace: true \})

   Remover espaços não exige que a entrada resultante tenha conteúdo.

4. core.getInput('target', \{ trimWhitespace: false \})

   Desabilitar a remoção de espaços preserva espaços, mas não exige um valor de entrada.

**Concept:** Verificação de entrada obrigatória com toolkit

**Authored coaching hints:**

- Normalizar texto e validar a presença resolvem problemas diferentes.
- Compare as opções passadas à função.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-112:876845feb94f5250665d67b69338beb2858156336151e0a1ff1fc9b14d735c03 -->
## Question 112: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-112`

**Content revision:** `876845feb94f5250665d67b69338beb2858156336151e0a1ff1fc9b14d735c03`

**en review revision:** `9ccefc7e8aee3e5426c98ad183454016fabbb1f83ba89ee47a598ea7c856eed6`
**es review revision:** `717ccbcb3a8ab54d757b319b6b8cdcbe0a97cf8cd9b0cdbab5ba0a5d65c30b3e`
**pt-BR review revision:** `72b2e3694dbe4e9b222ef6c5875e334a3fe20670a3ac5d04a7282d9bbe8068d9`

### English

For a JavaScript action input named target, which environment variable carries the input value?

1. ACTION\_TARGET

   ACTION\_ is not the metadata input environment-variable prefix.

2. GITHUB\_TARGET

   GITHUB\_ denotes platform-provided variables, not this custom input mapping.

3. INPUT\_TARGET **[CORRECT]**

   Input environment variables use INPUT\_ and an uppercase input name.

4. STATE\_TARGET

   STATE\_ is used for saved lifecycle state rather than action inputs.

**Concept:** JavaScript input environment mapping

**Authored coaching hints:**

- Distinguish input data from saved lifecycle state.
- Consider the naming transformation applied to the input identifier.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para una entrada target de una acción JavaScript, ¿qué variable de entorno contiene su valor?

1. ACTION\_TARGET

   ACTION\_ no es el prefijo de variables de entorno de entradas de metadatos.

2. GITHUB\_TARGET

   GITHUB\_ identifica variables de la plataforma, no esta asignación de entrada personalizada.

3. INPUT\_TARGET **[CORRECT]**

   Las variables de entorno de entrada usan INPUT\_ y el nombre de entrada en mayúsculas.

4. STATE\_TARGET

   STATE\_ se usa para estado guardado del ciclo de vida, no para entradas.

**Concept:** Asignación de entradas JavaScript al entorno

**Authored coaching hints:**

- Distingue los datos de entrada del estado guardado del ciclo de vida.
- Considera la transformación de nombre aplicada al identificador de entrada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para uma entrada target de uma ação JavaScript, qual variável de ambiente contém seu valor?

1. ACTION\_TARGET

   ACTION\_ não é o prefixo de variáveis de ambiente de entradas dos metadados.

2. GITHUB\_TARGET

   GITHUB\_ identifica variáveis da plataforma, não esse mapeamento de entrada personalizada.

3. INPUT\_TARGET **[CORRECT]**

   As variáveis de ambiente de entrada usam INPUT\_ e o nome da entrada em maiúsculas.

4. STATE\_TARGET

   STATE\_ é usado para estado salvo do ciclo de vida, não para entradas.

**Concept:** Mapeamento de entradas JavaScript no ambiente

**Authored coaching hints:**

- Diferencie dados de entrada de estado salvo do ciclo de vida.
- Considere a transformação de nome aplicada ao identificador de entrada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-113:dadb9eeac55a298490df16b060a9d7a8d2bcbc04ffac841539ac277430f21a72 -->
## Question 113: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-113`

**Content revision:** `dadb9eeac55a298490df16b060a9d7a8d2bcbc04ffac841539ac277430f21a72`

**en review revision:** `9194b14fe536f45735224d7d9a9673cab952300185ad5d5929a88e922838fc58`
**es review revision:** `66d13c7c4620057521d74e5e7c1b91da55df86011e0eb84b4aa68fb93efc474b`
**pt-BR review revision:** `bed1e1e0531b790efe233826f83fcc294ae05c95e42daa924ac54ec4f37f8d6b`

### English

A composite action declares an input named format. Which expression reads it inside the action?

1. $\{\{ env.INPUT\_FORMAT \}\}

   Composite inputs do not automatically create INPUT\_ environment variables.

2. $\{\{ inputs.format \}\} **[CORRECT]**

   The inputs context exposes composite inputs directly.

3. $\{\{ steps.format.outputs.value \}\}

   This refers to a step output, not the declared action input.

4. $\{\{ github.format \}\}

   The github context does not contain custom action input properties.

**Concept:** Composite input context

**Authored coaching hints:**

- Composite actions do not inherit every JavaScript input convention.
- Identify who supplied this value: the caller, a step, or GitHub.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción compuesta declara una entrada format. ¿Qué expresión la lee dentro de la acción?

1. $\{\{ env.INPUT\_FORMAT \}\}

   Las entradas compuestas no crean automáticamente variables de entorno INPUT\_.

2. $\{\{ inputs.format \}\} **[CORRECT]**

   El contexto inputs expone directamente las entradas de acciones compuestas.

3. $\{\{ steps.format.outputs.value \}\}

   Esto hace referencia a una salida de paso, no a la entrada declarada.

4. $\{\{ github.format \}\}

   El contexto github no contiene propiedades de entradas personalizadas de acción.

**Concept:** Contexto de entradas compuestas

**Authored coaching hints:**

- Las acciones compuestas no heredan todas las convenciones de entrada JavaScript.
- Identifica quién proporcionó el valor: el llamador, un paso o GitHub.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação composta declara uma entrada format. Qual expressão a lê dentro da ação?

1. $\{\{ env.INPUT\_FORMAT \}\}

   Entradas compostas não criam automaticamente variáveis de ambiente INPUT\_.

2. $\{\{ inputs.format \}\} **[CORRECT]**

   O contexto inputs expõe diretamente as entradas de ações compostas.

3. $\{\{ steps.format.outputs.value \}\}

   Isso referencia uma saída de etapa, não a entrada declarada.

4. $\{\{ github.format \}\}

   O contexto github não contém propriedades de entradas personalizadas da ação.

**Concept:** Contexto de entradas compostas

**Authored coaching hints:**

- Ações compostas não herdam todas as convenções de entrada JavaScript.
- Identifique quem forneceu o valor: o chamador, uma etapa ou o GitHub.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-114:53afdc39a58b4f79399d18f0050284ef01461c8b3e5cc3eefbdd7d844b5e10ce -->
## Question 114: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-114`

**Content revision:** `53afdc39a58b4f79399d18f0050284ef01461c8b3e5cc3eefbdd7d844b5e10ce`

**en review revision:** `609b0b4fc7755e6483591896c32be8c3ddff47b5d7ab9e09ce21b6547f89ae7b`
**es review revision:** `9f6c1d9980e74039a9652821badca13c6e508458babde9a1d5716a709448b01b`
**pt-BR review revision:** `6c6ba69ca24bee750faf98a4c88e733248cd3f967acbc7f829451653c9f40079`

### English

Which composite output mapping exposes output digest from an internal step with id: pack?

1. value: $\{\{ inputs.digest \}\}

   inputs.digest would read an input rather than the pack step output.

2. value: $\{\{ github.digest \}\}

   github.digest is not the location of internal step outputs.

3. value: $\{\{ env.pack.outputs.digest \}\}

   The env context does not provide nested step-output objects.

4. value: $\{\{ steps.pack.outputs.digest \}\} **[CORRECT]**

   A composite output value can map to a named internal step output.

**Concept:** Composite output value mapping

**Authored coaching hints:**

- Trace the value from its producing step to the action boundary.
- An action output needs a value, not just documentation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué asignación de salida compuesta expone la salida digest de un paso interno con id: pack?

1. value: $\{\{ inputs.digest \}\}

   inputs.digest leería una entrada, no la salida del paso pack.

2. value: $\{\{ github.digest \}\}

   github.digest no es la ubicación de las salidas de pasos internos.

3. value: $\{\{ env.pack.outputs.digest \}\}

   El contexto env no proporciona objetos anidados de salidas de pasos.

4. value: $\{\{ steps.pack.outputs.digest \}\} **[CORRECT]**

   El valor de una salida compuesta puede apuntar a la salida de un paso interno identificado.

**Concept:** Asignación del valor de salida compuesta

**Authored coaching hints:**

- Sigue el valor desde el paso que lo produce hasta el límite de la acción.
- Una salida de acción necesita un valor, no solo documentación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mapeamento de saída composta expõe a saída digest de uma etapa interna com id: pack?

1. value: $\{\{ inputs.digest \}\}

   inputs.digest leria uma entrada, não a saída da etapa pack.

2. value: $\{\{ github.digest \}\}

   github.digest não é o local das saídas de etapas internas.

3. value: $\{\{ env.pack.outputs.digest \}\}

   O contexto env não fornece objetos aninhados de saídas de etapas.

4. value: $\{\{ steps.pack.outputs.digest \}\} **[CORRECT]**

   O valor de uma saída composta pode apontar para a saída de uma etapa interna identificada.

**Concept:** Mapeamento do valor da saída composta

**Authored coaching hints:**

- Acompanhe o valor da etapa que o produz até o limite da ação.
- Uma saída de ação precisa de um valor, não apenas documentação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-115:178f44451b5a64966338ba790417c25714933b6ddfc26c91d931ef51d595d4c2 -->
## Question 115: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-115`

**Content revision:** `178f44451b5a64966338ba790417c25714933b6ddfc26c91d931ef51d595d4c2`

**en review revision:** `98eb33f637a59b7b78c3d8126bcea8246bd4aabd6fad78ede760e017575f35e6`
**es review revision:** `1071515aa2d090a917cec8996b9647cb50c6f57dcddd2a120577cf79b08fc33a`
**pt-BR review revision:** `0b5f3c9b37118a30d255226e6e992c87df46c9b81f83ad9cb82bd1b752b6f1f5`

### English

Inside a composite action, which value identifies the directory containing the action's own scripts?

1. $\{\{ github.workspace \}\}

   github.workspace points to the caller workspace, not necessarily the action directory.

2. $\{\{ runner.temp \}\}

   runner.temp is temporary job storage, not the action's installed location.

3. $\{\{ github.action\_path \}\} **[CORRECT]**

   github.action\_path points to the composite action directory.

4. $\{\{ github.workflow\_ref \}\}

   github.workflow\_ref identifies the workflow reference rather than a script directory.

**Concept:** Composite action-relative files

**Authored coaching hints:**

- The caller repository and the action repository can differ.
- Choose a directory value rather than a workflow identifier.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dentro de una acción compuesta, ¿qué valor identifica el directorio que contiene sus propios scripts?

1. $\{\{ github.workspace \}\}

   github.workspace apunta al espacio del llamador, no necesariamente al directorio de la acción.

2. $\{\{ runner.temp \}\}

   runner.temp es almacenamiento temporal del trabajo, no la ubicación de la acción.

3. $\{\{ github.action\_path \}\} **[CORRECT]**

   github.action\_path apunta al directorio de la acción compuesta.

4. $\{\{ github.workflow\_ref \}\}

   github.workflow\_ref identifica la referencia del flujo, no un directorio de scripts.

**Concept:** Archivos relativos a la acción compuesta

**Authored coaching hints:**

- El repositorio llamador y el de la acción pueden ser distintos.
- Elige un valor de directorio, no un identificador de flujo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dentro de uma ação composta, qual valor identifica o diretório que contém seus próprios scripts?

1. $\{\{ github.workspace \}\}

   github.workspace aponta para o workspace do chamador, não necessariamente para o diretório da ação.

2. $\{\{ runner.temp \}\}

   runner.temp é armazenamento temporário do job, não o local da ação.

3. $\{\{ github.action\_path \}\} **[CORRECT]**

   github.action\_path aponta para o diretório da ação composta.

4. $\{\{ github.workflow\_ref \}\}

   github.workflow\_ref identifica a referência do fluxo, não um diretório de scripts.

**Concept:** Arquivos relativos à ação composta

**Authored coaching hints:**

- O repositório chamador e o da ação podem ser diferentes.
- Escolha um valor de diretório, não um identificador de fluxo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action>

<!-- certification-coach-question:actions-116:0ad4391f621d178d4546d95f80b68cc93f34c247ac8e43a426b31dacffc00c13 -->
## Question 116: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-116`

**Content revision:** `0ad4391f621d178d4546d95f80b68cc93f34c247ac8e43a426b31dacffc00c13`

**en review revision:** `7083464282ba1402630e6b9fc2f0123825df16a09445cfdc443b139f3d051bf1`
**es review revision:** `71b21a174f98f959c2c50b9800ad8ecc87331f65233c1ee8dbce029a6cd142e6`
**pt-BR review revision:** `37d8d11186e8aadde6e33b5ceaf27e7f8e08d9c9b5c54be76cf4f4c787807365`

### English

A composite action step contains run: ./check.sh. Which step key must also be specified?

1. shell **[CORRECT]**

   A composite run step must explicitly declare its shell.

2. uses

   uses selects another action and does not accompany run in the same step.

3. with

   with provides inputs to a uses step rather than the execution shell.

4. timeout-minutes

   A timeout does not identify the interpreter and is not this requirement.

**Concept:** Composite run-step shell

**Authored coaching hints:**

- Do not assume workflow run-step defaults apply to action metadata.
- A command needs an interpreter as well as a path.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso de acción compuesta contiene run: ./check.sh. ¿Qué clave de paso debe especificarse también?

1. shell **[CORRECT]**

   Un paso run compuesto debe declarar explícitamente su shell.

2. uses

   uses selecciona otra acción y no acompaña a run en el mismo paso.

3. with

   with proporciona entradas a un paso uses, no el shell de ejecución.

4. timeout-minutes

   Un tiempo límite no identifica el intérprete ni es este requisito.

**Concept:** Shell de pasos run compuestos

**Authored coaching hints:**

- No supongas que los valores predeterminados de run en flujos se aplican a metadatos de acción.
- Un comando necesita un intérprete además de una ruta.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa de ação composta contém run: ./check.sh. Qual chave da etapa também deve ser especificada?

1. shell **[CORRECT]**

   Uma etapa run composta deve declarar explicitamente seu shell.

2. uses

   uses seleciona outra ação e não acompanha run na mesma etapa.

3. with

   with fornece entradas a uma etapa uses, não o shell de execução.

4. timeout-minutes

   Um tempo limite não identifica o interpretador e não é esse requisito.

**Concept:** Shell de etapas run compostas

**Authored coaching hints:**

- Não presuma que os padrões de run em fluxos se aplicam aos metadados da ação.
- Um comando precisa de um interpretador além de um caminho.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-117:32da19db96ad66ed4a069ec7a38b797abb6ffd6a41d9a7e7589eb3c133bf1495 -->
## Question 117: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-117`

**Content revision:** `32da19db96ad66ed4a069ec7a38b797abb6ffd6a41d9a7e7589eb3c133bf1495`

**en review revision:** `2107a25f976c4e12f309919915e79d52b5b50a14eaf045e439dded1029808235`
**es review revision:** `ec463bc09dc490d7c43aa79603863aacadb220927c2d8dae64cd4842995a6956`
**pt-BR review revision:** `37de74d4cd78346745c9b392a12af993d2b27bc5be407fc61b57e35e345e181b`

### English

Which composite run-step key makes a command execute from the tools directory?

1. shell: tools

   shell selects an interpreter, not a working directory.

2. id: tools

   id identifies the step for references and does not change directories.

3. name: tools

   name changes the displayed step label, not command execution location.

4. working-directory: tools **[CORRECT]**

   working-directory sets the command's current directory.

**Concept:** Composite command working directory

**Authored coaching hints:**

- Separate display metadata from execution settings.
- Relative paths depend on the command's current directory.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de un paso run compuesto hace que un comando se ejecute desde el directorio tools?

1. shell: tools

   shell selecciona un intérprete, no un directorio de trabajo.

2. id: tools

   id identifica el paso para referencias y no cambia directorios.

3. name: tools

   name cambia la etiqueta del paso, no la ubicación de ejecución.

4. working-directory: tools **[CORRECT]**

   working-directory establece el directorio actual del comando.

**Concept:** Directorio de trabajo de comandos compuestos

**Authored coaching hints:**

- Distingue los metadatos de presentación de los ajustes de ejecución.
- Las rutas relativas dependen del directorio actual del comando.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave de uma etapa run composta faz um comando executar a partir do diretório tools?

1. shell: tools

   shell seleciona um interpretador, não um diretório de trabalho.

2. id: tools

   id identifica a etapa para referências e não altera diretórios.

3. name: tools

   name altera o rótulo exibido da etapa, não o local de execução.

4. working-directory: tools **[CORRECT]**

   working-directory define o diretório atual do comando.

**Concept:** Diretório de trabalho de comandos compostos

**Authored coaching hints:**

- Diferencie metadados de apresentação de configurações de execução.
- Caminhos relativos dependem do diretório atual do comando.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-118:43e356964c4a566ffc9aa51b4d579c4fc20f992fa71d9ab230560fb807bda29d -->
## Question 118: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-118`

**Content revision:** `43e356964c4a566ffc9aa51b4d579c4fc20f992fa71d9ab230560fb807bda29d`

**en review revision:** `7e1bcd3f2eb88058819bac922cc0bbab04aca976542686ec7ae5d7a110fc2b1a`
**es review revision:** `de58ddf746ddbbe0924467304a1d0ecc60c990fd954ec648d8f72e9633d37ddb`
**pt-BR review revision:** `13cadff4070dfac4ac2729b8a8fb560d4deac87f1333d83b107225661462fd83`

### English

How does a composite action invoke another action as one of its internal steps?

1. Add a uses key under outputs.

   outputs describes returned values and does not execute steps.

2. Add a uses step under runs.steps. **[CORRECT]**

   Composite step definitions support uses for invoking actions.

3. Set runs.main to the action reference.

   runs.main belongs to JavaScript action execution.

4. Set runs.image to the action reference.

   runs.image belongs to container action execution.

**Concept:** Nested action steps

**Authored coaching hints:**

- Look at the part of the schema that contains executable work.
- Calling an action is different from launching a script file.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo invoca una acción compuesta otra acción en uno de sus pasos internos?

1. Añadir una clave uses en outputs.

   outputs describe valores devueltos y no ejecuta pasos.

2. Añadir un paso uses en runs.steps. **[CORRECT]**

   Las definiciones de pasos compuestos admiten uses para invocar acciones.

3. Establecer runs.main con la referencia de acción.

   runs.main pertenece a la ejecución de acciones JavaScript.

4. Establecer runs.image con la referencia de acción.

   runs.image pertenece a la ejecución de acciones de contenedor.

**Concept:** Pasos de acciones anidadas

**Authored coaching hints:**

- Busca la parte del esquema que contiene el trabajo ejecutable.
- Invocar una acción no es lo mismo que iniciar un archivo de script.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como uma ação composta invoca outra ação em uma de suas etapas internas?

1. Adicionar uma chave uses em outputs.

   outputs descreve valores retornados e não executa etapas.

2. Adicionar uma etapa uses em runs.steps. **[CORRECT]**

   As definições de etapas compostas aceitam uses para invocar ações.

3. Definir runs.main com a referência da ação.

   runs.main pertence à execução de ações JavaScript.

4. Definir runs.image com a referência da ação.

   runs.image pertence à execução de ações de contêiner.

**Concept:** Etapas de ações aninhadas

**Authored coaching hints:**

- Observe a parte do esquema que contém o trabalho executável.
- Invocar uma ação é diferente de iniciar um arquivo de script.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-119:7eb53d7ce0d8cef8e9107c9040fbedb1398e082768d5f40dcb35f08a988feef7 -->
## Question 119: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-119`

**Content revision:** `7eb53d7ce0d8cef8e9107c9040fbedb1398e082768d5f40dcb35f08a988feef7`

**en review revision:** `0c6f7ab7609748b22162cedd3f8f060a7a1d110d8745eab37be950d75a0f71ad`
**es review revision:** `0a51d9480ebeb2dbb5ded3d72c8c65fd23a7d9b5226bc60ad9550987f0e10dfb`
**pt-BR review revision:** `47231ee2a498b943ec79fe7ff89b8fdbee48ef1ecbea29e0d1f422b6616bd105`

### English

Which Docker action metadata property/value pair selects a Dockerfile beside action.yml as the image build definition?

1. runs.main: Dockerfile

   runs.main is a JavaScript entry-file setting.

2. runs.image: Dockerfile **[CORRECT]**

   runs.image accepts a Dockerfile path relative to the metadata file.

3. runs.using: Dockerfile

   runs.using must be docker for a Docker container action.

4. runs.entrypoint: Dockerfile

   runs.entrypoint selects an executable, not an image build definition.

**Concept:** Docker action image definition

**Authored coaching hints:**

- Separate building the image from starting its executable.
- A Dockerfile is build input, not a JavaScript script.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué par propiedad/valor de metadatos de una acción Docker selecciona un Dockerfile junto a action.yml para definir la construcción de la imagen?

1. runs.main: Dockerfile

   runs.main es un ajuste de archivo de entrada JavaScript.

2. runs.image: Dockerfile **[CORRECT]**

   runs.image acepta una ruta de Dockerfile relativa al archivo de metadatos.

3. runs.using: Dockerfile

   runs.using debe ser docker en una acción de contenedor Docker.

4. runs.entrypoint: Dockerfile

   runs.entrypoint selecciona un ejecutable, no una definición de construcción de imagen.

**Concept:** Definición de imagen de acción Docker

**Authored coaching hints:**

- Distingue construir la imagen de iniciar su ejecutable.
- Un Dockerfile es una entrada de construcción, no un script JavaScript.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual par propriedade/valor dos metadados de uma ação Docker seleciona um Dockerfile ao lado de action.yml para definir a construção da imagem?

1. runs.main: Dockerfile

   runs.main é uma configuração de arquivo de entrada JavaScript.

2. runs.image: Dockerfile **[CORRECT]**

   runs.image aceita um caminho de Dockerfile relativo ao arquivo de metadados.

3. runs.using: Dockerfile

   runs.using deve ser docker em uma ação de contêiner Docker.

4. runs.entrypoint: Dockerfile

   runs.entrypoint seleciona um executável, não uma definição de construção de imagem.

**Concept:** Definição de imagem de ação Docker

**Authored coaching hints:**

- Diferencie construir a imagem de iniciar seu executável.
- Um Dockerfile é uma entrada de construção, não um script JavaScript.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-120:dda3d5516956d29e37ebe9635995702c2484e1c378ce536a63de4591d59fb308 -->
## Question 120: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-120`

**Content revision:** `dda3d5516956d29e37ebe9635995702c2484e1c378ce536a63de4591d59fb308`

**en review revision:** `6e9eff6fc567841ff1136cee9684776556886650a411860a653d717da789a16e`
**es review revision:** `d7c7883235fe1130ed9fa35689e7820b2a8985939b445099b1ce0b052e80c759`
**pt-BR review revision:** `8390fe52c7f20824b9eb96d07d30b68f3d4257759da790bc018763c42c3990f4`

### English

A Docker action reads its first positional argument. Which metadata property/value pair passes the input greeting there?

1. runs.env: \{GREETING: '$\{\{ inputs.greeting \}\}'\}

   runs.env provides an environment variable, not a positional argument.

2. runs.entrypoint: '$\{\{ inputs.greeting \}\}'

   entrypoint identifies the executable rather than an argument value.

3. runs.image: '$\{\{ inputs.greeting \}\}'

   image identifies the container image rather than command arguments.

4. runs.args: \['$\{\{ inputs.greeting \}\}'\] **[CORRECT]**

   runs.args supplies arguments to the container entrypoint.

**Concept:** Docker action input arguments

**Authored coaching hints:**

- An environment variable and a positional argument are separate interfaces.
- Identify how the executable expects to receive the value.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker lee su primer argumento posicional. ¿Qué par propiedad/valor de metadatos le pasa la entrada greeting?

1. runs.env: \{GREETING: '$\{\{ inputs.greeting \}\}'\}

   runs.env proporciona una variable de entorno, no un argumento posicional.

2. runs.entrypoint: '$\{\{ inputs.greeting \}\}'

   entrypoint identifica el ejecutable, no un valor de argumento.

3. runs.image: '$\{\{ inputs.greeting \}\}'

   image identifica la imagen de contenedor, no los argumentos del comando.

4. runs.args: \['$\{\{ inputs.greeting \}\}'\] **[CORRECT]**

   runs.args proporciona argumentos al punto de entrada del contenedor.

**Concept:** Argumentos de entrada de acciones Docker

**Authored coaching hints:**

- Una variable de entorno y un argumento posicional son interfaces distintas.
- Identifica cómo espera recibir el valor el ejecutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker lê seu primeiro argumento posicional. Qual par propriedade/valor dos metadados passa a entrada greeting para ele?

1. runs.env: \{GREETING: '$\{\{ inputs.greeting \}\}'\}

   runs.env fornece uma variável de ambiente, não um argumento posicional.

2. runs.entrypoint: '$\{\{ inputs.greeting \}\}'

   entrypoint identifica o executável, não um valor de argumento.

3. runs.image: '$\{\{ inputs.greeting \}\}'

   image identifica a imagem do contêiner, não os argumentos do comando.

4. runs.args: \['$\{\{ inputs.greeting \}\}'\] **[CORRECT]**

   runs.args fornece argumentos ao ponto de entrada do contêiner.

**Concept:** Argumentos de entrada de ações Docker

**Authored coaching hints:**

- Uma variável de ambiente e um argumento posicional são interfaces diferentes.
- Identifique como o executável espera receber o valor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-121:daf6010019e77176636b225e27cbf3854670619d42caddeede85b46b6a9de8a9 -->
## Question 121: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-121`

**Content revision:** `daf6010019e77176636b225e27cbf3854670619d42caddeede85b46b6a9de8a9`

**en review revision:** `9255bc0f56b13347c79f7f779acf6c8fb0f77c3f6485c8b45a87a14efcd0e577`
**es review revision:** `4852abf381c8c967834a256cb4a5341fd1ccefaad45f8e574af520fec197d6e1`
**pt-BR review revision:** `007300131cd5c3edea508e513a0c4bce7774f923df3a6ae777301f1fa3c2d974`

### English

Which Docker action metadata key overrides the image's Dockerfile ENTRYPOINT?

1. runs.entrypoint **[CORRECT]**

   runs.entrypoint overrides or supplies the container entrypoint.

2. runs.args

   runs.args changes arguments, not the entrypoint executable itself.

3. runs.image

   runs.image selects the image or its build definition.

4. runs.env

   runs.env sets environment variables rather than an executable.

**Concept:** Docker entrypoint override

**Authored coaching hints:**

- Distinguish the program to launch from its arguments.
- The image may already define startup behavior.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de metadatos de una acción Docker reemplaza el ENTRYPOINT del Dockerfile de la imagen?

1. runs.entrypoint **[CORRECT]**

   runs.entrypoint reemplaza o proporciona el punto de entrada del contenedor.

2. runs.args

   runs.args cambia los argumentos, no el ejecutable de entrada.

3. runs.image

   runs.image selecciona la imagen o su definición de construcción.

4. runs.env

   runs.env establece variables de entorno, no un ejecutable.

**Concept:** Reemplazo del punto de entrada Docker

**Authored coaching hints:**

- Distingue el programa que se inicia de sus argumentos.
- La imagen puede tener ya definido su comportamiento de inicio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave dos metadados de uma ação Docker substitui o ENTRYPOINT do Dockerfile da imagem?

1. runs.entrypoint **[CORRECT]**

   runs.entrypoint substitui ou fornece o ponto de entrada do contêiner.

2. runs.args

   runs.args altera os argumentos, não o executável de entrada.

3. runs.image

   runs.image seleciona a imagem ou sua definição de construção.

4. runs.env

   runs.env define variáveis de ambiente, não um executável.

**Concept:** Substituição do ponto de entrada Docker

**Authored coaching hints:**

- Diferencie o programa a iniciar de seus argumentos.
- A imagem pode já ter definido seu comportamento de inicialização.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-122:4b444d4043c67bdc9d5f7f109493b8190c7cf9b2d918ea4217a68a980dac3f80 -->
## Question 122: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-122`

**Content revision:** `4b444d4043c67bdc9d5f7f109493b8190c7cf9b2d918ea4217a68a980dac3f80`

**en review revision:** `0458f9fe5c2ba5e6a8b06903d0f46562927e1de06aa412c0ae09e5dcc916668c`
**es review revision:** `a09a231bdd432d96ca02b6d7eb5c1c11e217f0bd70c653d6733005695c64d3ab`
**pt-BR review revision:** `098e4e142901e4b3b6722cf7d726d1981b8d852984ce75950618b921bcf68e6f`

### English

Which Docker action metadata property/value pair sets MODE=verify in the container environment?

1. runs.args: \[MODE, verify\]

   An argument list does not create an environment variable.

2. inputs: \{MODE: \{default: verify\}\}

   An input default alone does not define the unprefixed environment variable MODE.

3. runs.env: \{MODE: verify\} **[CORRECT]**

   runs.env explicitly adds variables to the container environment.

4. outputs: \{MODE: \{description: verify\}\}

   Output metadata describes a returned value and does not configure the environment.

**Concept:** Container environment metadata

**Authored coaching hints:**

- Variable names are part of the executable's interface.
- Inputs, outputs, arguments, and environment variables are not interchangeable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué par propiedad/valor de metadatos de una acción Docker define MODE=verify en el entorno del contenedor?

1. runs.args: \[MODE, verify\]

   Una lista de argumentos no crea una variable de entorno.

2. inputs: \{MODE: \{default: verify\}\}

   Un valor predeterminado de entrada no define por sí solo la variable sin prefijo MODE.

3. runs.env: \{MODE: verify\} **[CORRECT]**

   runs.env añade explícitamente variables al entorno del contenedor.

4. outputs: \{MODE: \{description: verify\}\}

   Los metadatos de salida describen un valor devuelto y no configuran el entorno.

**Concept:** Metadatos de entorno del contenedor

**Authored coaching hints:**

- Los nombres de variable forman parte de la interfaz del ejecutable.
- Entradas, salidas, argumentos y variables de entorno no son intercambiables.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual par propriedade/valor dos metadados de uma ação Docker define MODE=verify no ambiente do contêiner?

1. runs.args: \[MODE, verify\]

   Uma lista de argumentos não cria uma variável de ambiente.

2. inputs: \{MODE: \{default: verify\}\}

   Um padrão de entrada não define, sozinho, a variável sem prefixo MODE.

3. runs.env: \{MODE: verify\} **[CORRECT]**

   runs.env adiciona explicitamente variáveis ao ambiente do contêiner.

4. outputs: \{MODE: \{description: verify\}\}

   Os metadados de saída descrevem um valor retornado e não configuram o ambiente.

**Concept:** Metadados de ambiente do contêiner

**Authored coaching hints:**

- Os nomes de variáveis fazem parte da interface do executável.
- Entradas, saídas, argumentos e variáveis de ambiente não são intercambiáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-123:7817b29f956ffde1d73cae1087dd986449fab12f1f960e95d23c79660b4759a9 -->
## Question 123: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-123`

**Content revision:** `7817b29f956ffde1d73cae1087dd986449fab12f1f960e95d23c79660b4759a9`

**en review revision:** `c2bb616240f3b270e6d4adc54d51b69952a44d97a640c2e7f0b26dff696cc2bc`
**es review revision:** `0d9183b87b53cd3902288f513e083fefd89c9ee3a52899dd4803da9872d88026`
**pt-BR review revision:** `139d9838ee029dcdbe5a32610d3d5d0dea5c468f45f8bce777c958e05ccc609d`

### English

Which self-hosted runner setup supports Docker container actions?

1. Windows with Docker installed

   Docker installation alone does not make Windows runners support container actions.

2. macOS with Docker installed

   Docker installation alone does not make macOS runners support container actions.

3. Linux with only a Node.js runtime

   Node.js does not replace the required container engine.

4. Linux with Docker installed **[CORRECT]**

   Container actions require a Linux runner and Docker on a self-hosted machine.

**Concept:** Container action host requirements

**Authored coaching hints:**

- Check platform support as well as installed software.
- A local desktop container setup does not establish runner support.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué configuración de runner autohospedado admite acciones de contenedor Docker?

1. Windows con Docker instalado

   Instalar Docker no hace que los runners Windows admitan acciones de contenedor.

2. macOS con Docker instalado

   Instalar Docker no hace que los runners macOS admitan acciones de contenedor.

3. Linux solo con un entorno Node.js

   Node.js no reemplaza el motor de contenedores necesario.

4. Linux con Docker instalado **[CORRECT]**

   Las acciones de contenedor requieren un runner Linux y Docker en una máquina autohospedada.

**Concept:** Requisitos del host de acciones de contenedor

**Authored coaching hints:**

- Comprueba la plataforma admitida además del software instalado.
- Una configuración local de contenedores de escritorio no determina la compatibilidad del runner.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração de runner auto-hospedado aceita ações de contêiner Docker?

1. Windows com Docker instalado

   Instalar Docker não faz runners Windows aceitarem ações de contêiner.

2. macOS com Docker instalado

   Instalar Docker não faz runners macOS aceitarem ações de contêiner.

3. Linux apenas com um runtime Node.js

   Node.js não substitui o mecanismo de contêineres necessário.

4. Linux com Docker instalado **[CORRECT]**

   Ações de contêiner exigem um runner Linux e Docker em uma máquina auto-hospedada.

**Concept:** Requisitos do host de ações de contêiner

**Authored coaching hints:**

- Confira a plataforma aceita além do software instalado.
- Uma configuração local de contêineres no desktop não determina o suporte do runner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-124:735b6aa67d057dfa466ce0cac26ae558bca2747cc5596446308e27914bad35a1 -->
## Question 124: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-124`

**Content revision:** `735b6aa67d057dfa466ce0cac26ae558bca2747cc5596446308e27914bad35a1`

**en review revision:** `237131b36f0f84852b669a5f29336d66df9570aaed7bc9627a0cfb193bfe7217`
**es review revision:** `2651ca9a69e35d6ab02b7d5fa5192d8a956410b0af4a4c06585886c0047a055d`
**pt-BR review revision:** `0d607c2b343dc8c0fa40712babc34fe5eb959c0af16cb1e7892fe1075044fc28`

### English

At which container path does GitHub mount the runner workspace for a Docker action?

1. /github/action

   /github/action is not the documented workspace mount path.

2. /github/home

   /github/home serves the container home directory, not the workspace.

3. /github/workspace **[CORRECT]**

   The workspace mount makes caller files and generated files accessible across steps.

4. /github/workflow

   /github/workflow is not the repository workspace mount.

**Concept:** Docker workspace mount

**Authored coaching hints:**

- The caller checkout must be visible inside the container.
- Distinguish repository files from the container home directory.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿En qué ruta del contenedor monta GitHub el espacio de trabajo del runner para una acción Docker?

1. /github/action

   /github/action no es la ruta documentada de montaje del espacio de trabajo.

2. /github/home

   /github/home sirve como directorio personal del contenedor, no como espacio de trabajo.

3. /github/workspace **[CORRECT]**

   El montaje del espacio de trabajo permite compartir archivos del llamador y generados entre pasos.

4. /github/workflow

   /github/workflow no es el montaje del espacio de trabajo del repositorio.

**Concept:** Montaje del espacio de trabajo Docker

**Authored coaching hints:**

- El checkout del llamador debe ser visible dentro del contenedor.
- Distingue los archivos del repositorio del directorio personal del contenedor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em qual caminho do contêiner o GitHub monta o workspace do runner para uma ação Docker?

1. /github/action

   /github/action não é o caminho documentado da montagem do workspace.

2. /github/home

   /github/home serve como diretório pessoal do contêiner, não como workspace.

3. /github/workspace **[CORRECT]**

   A montagem do workspace permite compartilhar arquivos do chamador e gerados entre etapas.

4. /github/workflow

   /github/workflow não é a montagem do workspace do repositório.

**Concept:** Montagem do workspace Docker

**Authored coaching hints:**

- O checkout do chamador precisa ser visível dentro do contêiner.
- Diferencie arquivos do repositório do diretório pessoal do contêiner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-125:206e43c4cda5cbf025e57bd75594e46654847c745755eee293d977424f16df19 -->
## Question 125: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-125`

**Content revision:** `206e43c4cda5cbf025e57bd75594e46654847c745755eee293d977424f16df19`

**en review revision:** `9a21a36ff7a071968b7aa017a1b840ad75b414f2cbb2cd27ab4bb04e64a15c61`
**es review revision:** `b6a58bcd7744a1ec459080d9bf37ddcce61bfb667aca40f108e1af89b0b71eb1`
**pt-BR review revision:** `782ad27d736175db2dfb84bebe05e043a2bd30e68b08310c62778a0679c40ed7`

### English

A Dockerfile puts helper files in /github/workspace during image build. Why can they disappear when the action starts?

1. The action metadata deletes every file in the image.

   Metadata does not erase the image filesystem.

2. The workspace mount hides image files at that path. **[CORRECT]**

   GitHub mounts the workspace over that image directory; keep helpers elsewhere.

3. Docker ignores every COPY instruction in action images.

   COPY works; the runtime mount masks files at this particular destination.

4. The container uses the runner's root filesystem instead.

   The container retains its image filesystem outside mounted paths.

**Concept:** Image files versus runtime mounts

**Authored coaching hints:**

- Compare build-time contents with the runtime filesystem view.
- Distinguish files shipped with the action from files supplied by the caller.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un Dockerfile coloca archivos auxiliares en /github/workspace al construir la imagen. ¿Por qué pueden desaparecer al iniciar la acción?

1. Los metadatos de acción eliminan todos los archivos de la imagen.

   Los metadatos no borran el sistema de archivos de la imagen.

2. El montaje del espacio de trabajo oculta los archivos de imagen en esa ruta. **[CORRECT]**

   GitHub monta el espacio de trabajo sobre ese directorio de imagen; guarda los auxiliares en otra ruta.

3. Docker ignora todas las instrucciones COPY en imágenes de acciones.

   COPY funciona; el montaje en ejecución oculta los archivos en ese destino específico.

4. El contenedor usa en su lugar el sistema de archivos raíz del runner.

   El contenedor conserva el sistema de archivos de su imagen fuera de las rutas montadas.

**Concept:** Archivos de imagen frente a montajes en ejecución

**Authored coaching hints:**

- Compara el contenido durante la construcción con la vista del sistema de archivos en ejecución.
- Distingue los archivos distribuidos con la acción de los proporcionados por el llamador.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um Dockerfile coloca arquivos auxiliares em /github/workspace ao construir a imagem. Por que eles podem desaparecer quando a ação inicia?

1. Os metadados da ação excluem todos os arquivos da imagem.

   Os metadados não apagam o sistema de arquivos da imagem.

2. A montagem do workspace oculta os arquivos da imagem nesse caminho. **[CORRECT]**

   O GitHub monta o workspace sobre esse diretório da imagem; mantenha os auxiliares em outro local.

3. O Docker ignora todas as instruções COPY em imagens de ações.

   COPY funciona; a montagem em execução oculta os arquivos nesse destino específico.

4. O contêiner usa, em vez disso, o sistema de arquivos raiz do runner.

   O contêiner mantém o sistema de arquivos da imagem fora dos caminhos montados.

**Concept:** Arquivos da imagem versus montagens em execução

**Authored coaching hints:**

- Compare o conteúdo durante a construção com a visão do sistema de arquivos em execução.
- Diferencie arquivos distribuídos com a ação de arquivos fornecidos pelo chamador.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dockerfile-support>

<!-- certification-coach-question:actions-126:23187248a94f36b2625fcfa4489c5362f79f12ce9d9cc862a95bfb5e977479c3 -->
## Question 126: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-126`

**Content revision:** `23187248a94f36b2625fcfa4489c5362f79f12ce9d9cc862a95bfb5e977479c3`

**en review revision:** `76c49483546b8221b8adaea5ccb1278c11b2e886b0f18619ca41776dfba9c095`
**es review revision:** `906294925bb95ee5f7a2c22d66b586dd2784c560b975ef3ba1deaebef7ffcf76`
**pt-BR review revision:** `f33e404ce2ac5625dbddd89d3d6766d9d9bf8b2796659fba7cbe90f3c55f3d12`

### English

Before uses: ./.github/actions/lint, what normally makes the action files available in the job workspace?

1. Check out the repository in an earlier step. **[CORRECT]**

   A ./ action reference resolves files already present in the workspace.

2. Set the step name to the repository name.

   A displayed name does not download repository files.

3. Add an output named github.workspace.

   An output declaration does not populate the workspace.

4. Add the local path as a runner label.

   Runner labels route jobs; they do not supply local action files.

**Concept:** Local action file availability

**Authored coaching hints:**

- A relative reference is a filesystem lookup, not a repository download.
- Consider what exists before the job's first checkout.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Antes de uses: ./.github/actions/lint, ¿qué suele poner los archivos de la acción a disposición en el espacio de trabajo?

1. Obtener el repositorio en un paso anterior. **[CORRECT]**

   Una referencia de acción ./ resuelve archivos ya presentes en el espacio de trabajo.

2. Asignar al paso el nombre del repositorio.

   Un nombre mostrado no descarga archivos del repositorio.

3. Añadir una salida llamada github.workspace.

   Una declaración de salida no llena el espacio de trabajo.

4. Añadir la ruta local como etiqueta del runner.

   Las etiquetas de runner encaminan trabajos, no proporcionan archivos de acciones locales.

**Concept:** Disponibilidad de archivos de acciones locales

**Authored coaching hints:**

- Una referencia relativa busca en el sistema de archivos, no descarga un repositorio.
- Considera qué existe antes del primer checkout del trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Antes de uses: ./.github/actions/lint, o que normalmente disponibiliza os arquivos da ação no workspace do job?

1. Fazer checkout do repositório em uma etapa anterior. **[CORRECT]**

   Uma referência de ação ./ resolve arquivos já presentes no workspace.

2. Dar à etapa o nome do repositório.

   Um nome exibido não baixa arquivos do repositório.

3. Adicionar uma saída chamada github.workspace.

   Uma declaração de saída não preenche o workspace.

4. Adicionar o caminho local como rótulo do runner.

   Rótulos de runner direcionam jobs, não fornecem arquivos de ações locais.

**Concept:** Disponibilidade de arquivos de ações locais

**Authored coaching hints:**

- Uma referência relativa busca no sistema de arquivos, não baixa um repositório.
- Considere o que existe antes do primeiro checkout do job.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-127:cdc2cd5e3fb3dc38bfc7e8b3e6761bf68598f0e65084788c3a026cb54ebea667 -->
## Question 127: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-127`

**Content revision:** `cdc2cd5e3fb3dc38bfc7e8b3e6761bf68598f0e65084788c3a026cb54ebea667`

**en review revision:** `5d5b7acc870a1daca76beddb0f70d9ff7952aae60ee7f3f9558adc7176a524b3`
**es review revision:** `f38a6e409cc9184e157736109edd43ed3dd482fa654bf20badb0b91ff1c31428`
**pt-BR review revision:** `1203811286d0105fa22700c32337087d11dc90a44d63ee6fa3c2be6b8d317c88`

### English

Which @actions/core call publishes a JavaScript action output named archive?

1. core.setOutput('archive', path) **[CORRECT]**

   setOutput publishes a named output that later steps can reference.

2. core.exportVariable('archive', path)

   exportVariable sets an environment variable for subsequent steps.

3. core.saveState('archive', path)

   saveState stores action lifecycle data, not a caller-facing output.

4. core.info(path)

   info prints a log message without creating an output.

**Concept:** Toolkit output publication

**Authored coaching hints:**

- Logs, outputs, environment, and lifecycle state have different consumers.
- The next step needs a structured named value, not just visible text.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué llamada de @actions/core publica una salida archive de una acción JavaScript?

1. core.setOutput('archive', path) **[CORRECT]**

   setOutput publica una salida con nombre que pueden consultar los pasos posteriores.

2. core.exportVariable('archive', path)

   exportVariable define una variable de entorno para pasos posteriores.

3. core.saveState('archive', path)

   saveState guarda datos del ciclo de vida, no una salida para el llamador.

4. core.info(path)

   info imprime un mensaje de registro sin crear una salida.

**Concept:** Publicación de salidas con toolkit

**Authored coaching hints:**

- Registros, salidas, entorno y estado del ciclo de vida tienen distintos consumidores.
- El siguiente paso necesita un valor estructurado con nombre, no solo texto visible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chamada de @actions/core publica uma saída archive de uma ação JavaScript?

1. core.setOutput('archive', path) **[CORRECT]**

   setOutput publica uma saída nomeada que etapas posteriores podem consultar.

2. core.exportVariable('archive', path)

   exportVariable define uma variável de ambiente para etapas posteriores.

3. core.saveState('archive', path)

   saveState salva dados do ciclo de vida, não uma saída para o chamador.

4. core.info(path)

   info imprime uma mensagem de log sem criar uma saída.

**Concept:** Publicação de saídas com toolkit

**Authored coaching hints:**

- Logs, saídas, ambiente e estado do ciclo de vida têm consumidores diferentes.
- A próxima etapa precisa de um valor estruturado nomeado, não apenas texto visível.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-128:4a568246924beb8843005cf6e19a4765d653ea5fc47be057998d259ea1f6620f -->
## Question 128: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-128`

**Content revision:** `4a568246924beb8843005cf6e19a4765d653ea5fc47be057998d259ea1f6620f`

**en review revision:** `c82b21cfb2d7dbdfd77289edcd0e61e19fc3c281bc6dfdaa71bc5041f497ca79`
**es review revision:** `684a7cbdbeb43ff71e0bc13e9c4e4ebef3ef05f3321b05337bc0a85100fc6057`
**pt-BR review revision:** `9ef80367e15b1c2de1523c96bb70ad755640f422cdc03b80bf11222a6f172c34`

### English

Which toolkit package runs an external executable from a JavaScript action?

1. @actions/core

   @actions/core provides action inputs, outputs, logging, and related runner features.

2. @actions/github

   @actions/github provides GitHub API and event-context helpers.

3. @actions/exec **[CORRECT]**

   @actions/exec provides process execution helpers.

4. @actions/artifact

   @actions/artifact manages workflow artifacts rather than general processes.

**Concept:** Toolkit process execution

**Authored coaching hints:**

- Match the package to the external resource being used.
- Launching a command is different from calling a web API.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué paquete del toolkit ejecuta un programa externo desde una acción JavaScript?

1. @actions/core

   @actions/core proporciona entradas, salidas, registros y funciones relacionadas del runner.

2. @actions/github

   @actions/github proporciona funciones para la API de GitHub y el contexto del evento.

3. @actions/exec **[CORRECT]**

   @actions/exec proporciona funciones para ejecutar procesos.

4. @actions/artifact

   @actions/artifact gestiona artefactos de flujo, no procesos generales.

**Concept:** Ejecución de procesos con toolkit

**Authored coaching hints:**

- Relaciona el paquete con el recurso externo que se usa.
- Iniciar un comando no es lo mismo que llamar a una API web.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual pacote do toolkit executa um programa externo a partir de uma ação JavaScript?

1. @actions/core

   @actions/core fornece entradas, saídas, logs e recursos relacionados do runner.

2. @actions/github

   @actions/github fornece funções para a API do GitHub e o contexto do evento.

3. @actions/exec **[CORRECT]**

   @actions/exec fornece funções para executar processos.

4. @actions/artifact

   @actions/artifact gerencia artefatos do fluxo, não processos gerais.

**Concept:** Execução de processos com toolkit

**Authored coaching hints:**

- Relacione o pacote ao recurso externo usado.
- Iniciar um comando é diferente de chamar uma API web.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-129:c1c2a6c4ba26ea9cc7957db7e78f788ff627fd28aa468024a5da80537a4e9d10 -->
## Question 129: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-129`

**Content revision:** `c1c2a6c4ba26ea9cc7957db7e78f788ff627fd28aa468024a5da80537a4e9d10`

**en review revision:** `657e94f3252994bbb1b7f67970a235e99464f9ae147b8df335cc077ec3d94971`
**es review revision:** `8972f7825978ae4ae494adacad0cb49fceab95067bbda8d4f146f50856410a67`
**pt-BR review revision:** `9a0e60c6138e80fbbe5661c78266622e84663069b2b92b83ed80bf9f644620dd`

### English

Which toolkit package supplies an authenticated Octokit client and GitHub event context to a JavaScript action?

1. @actions/exec

   @actions/exec launches external commands rather than supplying Octokit.

2. @actions/github **[CORRECT]**

   @actions/github exposes getOctokit and context for GitHub API integrations.

3. @actions/io

   @actions/io provides filesystem operations, not the GitHub API client.

4. @actions/cache

   @actions/cache manages dependency caches, not event API context.

**Concept:** Toolkit GitHub API integration

**Authored coaching hints:**

- Distinguish service clients from command and filesystem utilities.
- The event payload can inform which repository resource to request.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué paquete del toolkit proporciona un cliente Octokit autenticado y el contexto del evento de GitHub a una acción JavaScript?

1. @actions/exec

   @actions/exec inicia comandos externos en vez de proporcionar Octokit.

2. @actions/github **[CORRECT]**

   @actions/github expone getOctokit y context para integrar la API de GitHub.

3. @actions/io

   @actions/io proporciona operaciones de archivos, no el cliente de API de GitHub.

4. @actions/cache

   @actions/cache gestiona cachés de dependencias, no el contexto de la API del evento.

**Concept:** Integración de la API de GitHub con toolkit

**Authored coaching hints:**

- Distingue los clientes de servicio de las utilidades de comandos y archivos.
- La carga del evento puede indicar qué recurso del repositorio consultar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual pacote do toolkit fornece um cliente Octokit autenticado e o contexto do evento do GitHub a uma ação JavaScript?

1. @actions/exec

   @actions/exec inicia comandos externos em vez de fornecer Octokit.

2. @actions/github **[CORRECT]**

   @actions/github expõe getOctokit e context para integrar a API do GitHub.

3. @actions/io

   @actions/io fornece operações de arquivos, não o cliente da API do GitHub.

4. @actions/cache

   @actions/cache gerencia caches de dependências, não o contexto da API do evento.

**Concept:** Integração da API do GitHub com toolkit

**Authored coaching hints:**

- Diferencie clientes de serviço de utilitários de comandos e arquivos.
- O payload do evento pode indicar qual recurso do repositório consultar.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-130:c17359b9538b3916fe379bef5fa44f2d59528e080de5c5433f49e4ce693dd9e4 -->
## Question 130: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-130`

**Content revision:** `c17359b9538b3916fe379bef5fa44f2d59528e080de5c5433f49e4ce693dd9e4`

**en review revision:** `cec67e7dad66fc506def9788f238a69a9520ada8971234925c10e4d8dfed637e`
**es review revision:** `0a2ac0b5d7123e21f0c069da3373e3d66762d84d37ddb527875bfa9aeec36f22`
**pt-BR review revision:** `ef82a8f93863434ce0df15be15f4af906705b6857a7731f999e2f8171229480c`

### English

What distinguishes actions/github-script from writing and packaging a custom JavaScript action?

1. It turns JavaScript into Docker layers before each invocation.

   github-script does not package the script as a Docker image.

2. It makes Python the required language for GitHub API requests.

   Its supplied script is JavaScript; Python is not required.

3. It defines a fourth metadata action type named github-script.

   The custom action types remain JavaScript, Docker container, and composite.

4. It runs supplied JavaScript with GitHub client/context objects already provided. **[CORRECT]**

   github-script is a published action with convenient injected objects, not a new language.

**Concept:** github-script versus custom action packaging

**Authored coaching hints:**

- A published convenience action is not a new metadata runtime type.
- Compare the objects available to the script with the language it uses.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué distingue actions/github-script de escribir y empaquetar una acción JavaScript personalizada?

1. Convierte JavaScript en capas Docker antes de cada invocación.

   github-script no empaqueta el script como una imagen Docker.

2. Hace que Python sea obligatorio para las solicitudes a la API de GitHub.

   El script proporcionado es JavaScript; no se requiere Python.

3. Define un cuarto tipo de acción de metadatos llamado github-script.

   Los tipos de acción personalizada siguen siendo JavaScript, contenedor Docker y compuesta.

4. Ejecuta el JavaScript proporcionado con objetos de cliente/contexto de GitHub ya disponibles. **[CORRECT]**

   github-script es una acción publicada con objetos disponibles, no un lenguaje nuevo.

**Concept:** github-script frente al empaquetado de acciones personalizadas

**Authored coaching hints:**

- Una acción publicada de conveniencia no es un nuevo tipo de entorno de metadatos.
- Compara los objetos disponibles para el script con el lenguaje que utiliza.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que diferencia actions/github-script de escrever e empacotar uma ação JavaScript personalizada?

1. Converte JavaScript em camadas Docker antes de cada invocação.

   github-script não empacota o script como uma imagem Docker.

2. Torna Python obrigatório para solicitações à API do GitHub.

   O script fornecido é JavaScript; Python não é obrigatório.

3. Define um quarto tipo de ação nos metadados chamado github-script.

   Os tipos de ação personalizada continuam sendo JavaScript, contêiner Docker e composta.

4. Executa o JavaScript fornecido com objetos de cliente/contexto do GitHub já disponíveis. **[CORRECT]**

   github-script é uma ação publicada com objetos disponíveis, não uma nova linguagem.

**Concept:** github-script versus empacotamento de ações personalizadas

**Authored coaching hints:**

- Uma ação publicada de conveniência não é um novo tipo de runtime dos metadados.
- Compare os objetos disponíveis para o script com a linguagem que ele usa.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/automate-github-using-github-script/2-what-is-github-script>

<!-- certification-coach-question:actions-131:5f62ad974ccd84a7eb01a5573d2376711ddb089ecb751842b4dd4fdccd527b7e -->
## Question 131: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-131`

**Content revision:** `5f62ad974ccd84a7eb01a5573d2376711ddb089ecb751842b4dd4fdccd527b7e`

**en review revision:** `084ff1d7a37e7d9e915a8d4c342e33a942381a669301fbd3e707a2e7349a24aa`
**es review revision:** `289ad10d005e4c5f214c3224659ed6e907b3fd732afc75daeb7b8af86dc71c48`
**pt-BR review revision:** `ae71abdc01cc76a016bb2a06f49d5bb62ef2389643c1b94afa6bc7ba188fc2aa`

### English

Which @actions/core call reports an error and marks a JavaScript action as failed?

1. core.error('Invalid manifest')

   error creates an error annotation but does not itself set the exit status.

2. core.warning('Invalid manifest')

   warning creates a warning annotation without failing the action.

3. core.setFailed('Invalid manifest') **[CORRECT]**

   setFailed records the error and sets a failing exit status.

4. core.notice('Invalid manifest')

   notice creates an informational annotation without failing the action.

**Concept:** Failure status versus annotations

**Authored coaching hints:**

- An annotation's severity and a process exit status are separate.
- The caller needs a failed result, not only a red message.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué llamada de @actions/core informa de un error y marca una acción JavaScript como fallida?

1. core.error('Invalid manifest')

   error crea una anotación de error, pero no establece por sí solo el estado de salida.

2. core.warning('Invalid manifest')

   warning crea una anotación de advertencia sin hacer fallar la acción.

3. core.setFailed('Invalid manifest') **[CORRECT]**

   setFailed registra el error y establece un estado de salida de fallo.

4. core.notice('Invalid manifest')

   notice crea una anotación informativa sin hacer fallar la acción.

**Concept:** Estado de fallo frente a anotaciones

**Authored coaching hints:**

- La gravedad de una anotación y el estado de salida del proceso son distintos.
- El llamador necesita un resultado fallido, no solo un mensaje rojo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chamada de @actions/core informa um erro e marca uma ação JavaScript como malsucedida?

1. core.error('Invalid manifest')

   error cria uma anotação de erro, mas não define, por si só, o status de saída.

2. core.warning('Invalid manifest')

   warning cria uma anotação de aviso sem fazer a ação falhar.

3. core.setFailed('Invalid manifest') **[CORRECT]**

   setFailed registra o erro e define um status de saída de falha.

4. core.notice('Invalid manifest')

   notice cria uma anotação informativa sem fazer a ação falhar.

**Concept:** Status de falha versus anotações

**Authored coaching hints:**

- A gravidade de uma anotação e o status de saída do processo são diferentes.
- O chamador precisa de um resultado de falha, não apenas uma mensagem vermelha.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-132:2d9dc83b1f25fbb2a570183106b02aaa3eeff802de685ec34bfd21204b0b3247 -->
## Question 132: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-132`

**Content revision:** `2d9dc83b1f25fbb2a570183106b02aaa3eeff802de685ec34bfd21204b0b3247`

**en review revision:** `580246dc5b6905aac31ac4f9453dc5a0938b9d207d0c5d88ef1b1167f339006a`
**es review revision:** `acbc825b0058ce2b0696752c09f3f09a65fca8da5ae3b6ed6650e3232a8b4b65`
**pt-BR review revision:** `f5f98853ffb6af91168be19e192308414cc845b856d0a0fe46ff56972f5a5ee7`

### English

Which stdout text creates a warning annotation for line 8 of config.json?

1. ::warning file=config.json,line=8::Check value **[CORRECT]**

   The warning command supports file and line annotation properties.

2. ::error file=config.json,line=8::Check value

   error creates an error annotation rather than a warning.

3. ::notice file=config.json,line=8::Check value

   notice creates a notice annotation rather than a warning.

4. ::debug::config.json:8 Check value

   debug emits debug text instead of this file-linked warning annotation.

**Concept:** File-linked workflow annotations

**Authored coaching hints:**

- Compare the severity and location fields separately.
- A filename printed as ordinary text is not necessarily annotation metadata.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué texto en stdout crea una anotación de advertencia para la línea 8 de config.json?

1. ::warning file=config.json,line=8::Check value **[CORRECT]**

   El comando warning admite propiedades file y line en la anotación.

2. ::error file=config.json,line=8::Check value

   error crea una anotación de error en vez de una advertencia.

3. ::notice file=config.json,line=8::Check value

   notice crea una anotación informativa en vez de una advertencia.

4. ::debug::config.json:8 Check value

   debug emite texto de depuración, no esta advertencia vinculada a un archivo.

**Concept:** Anotaciones de flujo vinculadas a archivos

**Authored coaching hints:**

- Compara por separado la gravedad y los campos de ubicación.
- Un nombre de archivo impreso como texto normal no es necesariamente metadato de anotación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual texto em stdout cria uma anotação de aviso para a linha 8 de config.json?

1. ::warning file=config.json,line=8::Check value **[CORRECT]**

   O comando warning aceita propriedades file e line na anotação.

2. ::error file=config.json,line=8::Check value

   error cria uma anotação de erro em vez de um aviso.

3. ::notice file=config.json,line=8::Check value

   notice cria uma anotação informativa em vez de um aviso.

4. ::debug::config.json:8 Check value

   debug emite texto de depuração, não esse aviso vinculado a um arquivo.

**Concept:** Anotações de fluxo vinculadas a arquivos

**Authored coaching hints:**

- Compare separadamente a gravidade e os campos de localização.
- Um nome de arquivo impresso como texto comum não é necessariamente metadado de anotação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-133:aa61792c911dc81ec8eb217eecd795e4ce3002071da87accc5929824591159d3 -->
## Question 133: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-133`

**Content revision:** `aa61792c911dc81ec8eb217eecd795e4ce3002071da87accc5929824591159d3`

**en review revision:** `c3bb38b951eae6be54292458057a230c2442537fbb77fbe471f6acaaada96e3c`
**es review revision:** `963329a1432cc9a21b574f749cc0f048063d6c4a298f5c913d8bb7fe7ffaaaa1`
**pt-BR review revision:** `1ab805b589c8835c603af62020ac64842b108c80f0334a0e35be31399d1f8f74`

### English

Which environment file lets an action save a resource ID for its own later post cleanup?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT publishes step outputs instead of private lifecycle state.

2. GITHUB\_PATH

   GITHUB\_PATH adds directories to the executable search path.

3. GITHUB\_STEP\_SUMMARY

   GITHUB\_STEP\_SUMMARY creates Markdown summaries, not lifecycle state.

4. GITHUB\_STATE **[CORRECT]**

   GITHUB\_STATE provides state to the same action's lifecycle scripts.

**Concept:** Action lifecycle state handoff

**Authored coaching hints:**

- Identify the consumer: the same action's cleanup or a caller's next step.
- Not every environment file has job-wide output semantics.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo de entorno permite que una acción guarde un ID de recurso para su propia limpieza post posterior?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT publica salidas de paso en vez de estado privado del ciclo de vida.

2. GITHUB\_PATH

   GITHUB\_PATH añade directorios a la ruta de búsqueda de ejecutables.

3. GITHUB\_STEP\_SUMMARY

   GITHUB\_STEP\_SUMMARY crea resúmenes Markdown, no estado del ciclo de vida.

4. GITHUB\_STATE **[CORRECT]**

   GITHUB\_STATE proporciona estado a los scripts del ciclo de vida de la misma acción.

**Concept:** Transferencia de estado del ciclo de vida de acción

**Authored coaching hints:**

- Identifica el consumidor: la limpieza de la misma acción o el siguiente paso del llamador.
- No todos los archivos de entorno tienen la semántica de salida para todo el trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo de ambiente permite que uma ação salve um ID de recurso para sua própria limpeza post posterior?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT publica saídas da etapa em vez de estado privado do ciclo de vida.

2. GITHUB\_PATH

   GITHUB\_PATH adiciona diretórios ao caminho de busca de executáveis.

3. GITHUB\_STEP\_SUMMARY

   GITHUB\_STEP\_SUMMARY cria resumos Markdown, não estado do ciclo de vida.

4. GITHUB\_STATE **[CORRECT]**

   GITHUB\_STATE fornece estado aos scripts do ciclo de vida da mesma ação.

**Concept:** Transferência de estado do ciclo de vida da ação

**Authored coaching hints:**

- Identifique o consumidor: a limpeza da mesma ação ou a próxima etapa do chamador.
- Nem todo arquivo de ambiente tem semântica de saída para todo o job.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-134:67f83b1e9bed2dbf74c48b1a8db635f826e2d95d1fe51841d7dbf58670b48cf9 -->
## Question 134: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-134`

**Content revision:** `67f83b1e9bed2dbf74c48b1a8db635f826e2d95d1fe51841d7dbf58670b48cf9`

**en review revision:** `6d963b3252e7fc33dae5ef99f78965fecf3c66ffc0ceb697738ea4b45121a5b8`
**es review revision:** `3ad637fe8884992443adce6865045f224351cd415f8f21bc16b0c6d389610f2e`
**pt-BR review revision:** `e6e0a10119eca3729658f84294b6c74fabc3bc2f2481da427b75ecec3b971d6e`

### English

A JavaScript action's entry file imports npm packages. What must its released repository provide for callers?

1. Only package.json and the source entry file

   A manifest lists dependencies but does not make their modules available.

2. Runnable code with its dependencies bundled or included **[CORRECT]**

   The runner executes the action; it does not automatically install the action's npm dependencies.

3. Only package-lock.json and a release description

   A lockfile describes versions and is not executable dependency code.

4. Only npm cache keys and a workflow badge

   Cache keys and badges cannot supply imported modules.

**Concept:** Distributable JavaScript dependencies

**Authored coaching hints:**

- Distinguish a dependency manifest from installed executable code.
- Test the released files in a clean caller, not only in the author's checkout.

<details>
<summary>Español — same answer key and option order</summary>

### Español

El archivo de entrada de una acción JavaScript importa paquetes npm. ¿Qué debe proporcionar el repositorio publicado a los llamadores?

1. Solo package.json y el archivo fuente de entrada

   Un manifiesto enumera dependencias, pero no pone sus módulos a disposición.

2. Código ejecutable con sus dependencias empaquetadas o incluidas **[CORRECT]**

   El runner ejecuta la acción; no instala automáticamente sus dependencias npm.

3. Solo package-lock.json y una descripción del lanzamiento

   Un archivo de bloqueo describe versiones y no contiene código ejecutable de dependencias.

4. Solo claves de caché npm y una insignia de flujo

   Las claves de caché y las insignias no proporcionan módulos importados.

**Concept:** Dependencias JavaScript distribuibles

**Authored coaching hints:**

- Distingue un manifiesto de dependencias del código ejecutable instalado.
- Prueba los archivos publicados con un llamador limpio, no solo en el checkout del autor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O arquivo de entrada de uma ação JavaScript importa pacotes npm. O que o repositório publicado deve fornecer aos chamadores?

1. Apenas package.json e o arquivo-fonte de entrada

   Um manifesto lista dependências, mas não disponibiliza seus módulos.

2. Código executável com suas dependências empacotadas ou incluídas **[CORRECT]**

   O runner executa a ação; ele não instala automaticamente suas dependências npm.

3. Apenas package-lock.json e uma descrição da versão

   Um arquivo de bloqueio descreve versões e não contém código executável de dependências.

4. Apenas chaves de cache npm e um badge do fluxo

   Chaves de cache e badges não fornecem módulos importados.

**Concept:** Dependências JavaScript distribuíveis

**Authored coaching hints:**

- Diferencie um manifesto de dependências do código executável instalado.
- Teste os arquivos publicados em um chamador limpo, não apenas no checkout do autor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-135:9b8d6aa6b1c6ff41963f2749af03c378891c96c6e4ce063efcf37e3c95265b77 -->
## Question 135: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-135`

**Content revision:** `9b8d6aa6b1c6ff41963f2749af03c378891c96c6e4ce063efcf37e3c95265b77`

**en review revision:** `84816e13d89d599c8505ba5c6bd3f9bed68898785f7dab573f583beccd2476c5`
**es review revision:** `a6f2e31887a3d3333c4c04a50a2d728d89a3ca5cd2cb2c16b43426cd2c268d08`
**pt-BR review revision:** `a4d0f455d78a7a950008fb47b3fd8589d8d8905aec6e3448d53b28ae2667fb34`

### English

Where must the listed action's metadata be located for a GitHub Marketplace publication?

1. In any subfolder of a private repository

   Private repositories cannot publish Marketplace listings; subfolder actions are not automatically listed.

2. At the root of a public repository **[CORRECT]**

   Marketplace lists the action represented by the public repository's root metadata.

3. In the caller's .github/workflows directory

   That directory stores caller workflow definitions rather than the published action's root metadata.

4. In an organization secret's stored value

   A secret stores a value and is not a discoverable action repository.

**Concept:** Marketplace action layout

**Authored coaching hints:**

- Separate private distribution from public discoverability.
- Repository layout affects which action gets a listing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde deben estar los metadatos de la acción anunciada para publicarla en GitHub Marketplace?

1. En cualquier subcarpeta de un repositorio privado

   Los repositorios privados no pueden anunciarse en Marketplace; las acciones de subcarpetas no se anuncian automáticamente.

2. En la raíz de un repositorio público **[CORRECT]**

   Marketplace anuncia la acción representada por los metadatos de la raíz del repositorio público.

3. En el directorio .github/workflows del llamador

   Ese directorio guarda definiciones de flujo del llamador, no los metadatos raíz de la acción publicada.

4. En el valor guardado de un secreto de organización

   Un secreto almacena un valor y no es un repositorio de acción detectable.

**Concept:** Estructura de acciones para Marketplace

**Authored coaching hints:**

- Distingue la distribución privada de la visibilidad pública.
- La estructura del repositorio afecta a qué acción se anuncia.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde devem estar os metadados da ação anunciada para publicá-la no GitHub Marketplace?

1. Em qualquer subpasta de um repositório privado

   Repositórios privados não podem publicar anúncios no Marketplace; ações em subpastas não são anunciadas automaticamente.

2. Na raiz de um repositório público **[CORRECT]**

   O Marketplace anuncia a ação representada pelos metadados da raiz do repositório público.

3. No diretório .github/workflows do chamador

   Esse diretório guarda definições de fluxo do chamador, não os metadados da raiz da ação publicada.

4. No valor armazenado de um segredo da organização

   Um segredo armazena um valor e não é um repositório de ação detectável.

**Concept:** Estrutura de ações para o Marketplace

**Authored coaching hints:**

- Diferencie distribuição privada de visibilidade pública.
- A estrutura do repositório afeta qual ação recebe um anúncio.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace>

<!-- certification-coach-question:actions-136:de88931f3f238918119a30ee36a817c9d06768a29e4833ee7f3fe96cc65e3329 -->
## Question 136: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-136`

**Content revision:** `de88931f3f238918119a30ee36a817c9d06768a29e4833ee7f3fe96cc65e3329`

**en review revision:** `ae13f02472eddb6f8a14deb107a84117dc6edcd07502acdb5902411bfef2626e`
**es review revision:** `1b46e9f74edb033c04b9734e31b91adfc0e9d30be3fef8661cc656b48b4ad26e`
**pt-BR review revision:** `a9177f42b6240817fb229789dbf575f2bd5f5c8dc9b6f0431ea9ec78d5faa5df`

### English

Which account prerequisite can leave the release's Marketplace publication checkbox disabled?

1. The owner has not obtained a verified creator badge.

   A verified creator badge is not required to publish an action.

2. The owner has not purchased an Enterprise Cloud subscription.

   Marketplace action publication does not require an Enterprise Cloud subscription.

3. The owner has not added a passing workflow status badge.

   A status badge can help documentation but does not enable the publication checkbox.

4. The owner has not accepted the Marketplace Developer Agreement. **[CORRECT]**

   The owning account must accept the agreement before Marketplace publication is available.

**Concept:** Marketplace publisher agreement

**Authored coaching hints:**

- Publication permissions and runtime capacity are separate concerns.
- Look for a requirement on the repository's owning account.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué requisito de cuenta puede dejar deshabilitada la casilla de publicación en Marketplace de un lanzamiento?

1. El propietario no ha obtenido una insignia de creador verificado.

   Una insignia de creador verificado no es obligatoria para publicar una acción.

2. El propietario no ha comprado una suscripción Enterprise Cloud.

   Publicar acciones en Marketplace no requiere una suscripción Enterprise Cloud.

3. El propietario no ha añadido una insignia de flujo satisfactorio.

   Una insignia de estado puede ayudar a documentar, pero no habilita la casilla de publicación.

4. El propietario no ha aceptado el Marketplace Developer Agreement. **[CORRECT]**

   La cuenta propietaria debe aceptar el acuerdo para poder publicar en Marketplace.

**Concept:** Acuerdo del publicador de Marketplace

**Authored coaching hints:**

- Los permisos de publicación y la capacidad de ejecución son asuntos distintos.
- Busca un requisito de la cuenta propietaria del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual requisito da conta pode deixar desabilitada a caixa de publicação no Marketplace de uma versão?

1. O proprietário não obteve um badge de criador verificado.

   Um badge de criador verificado não é obrigatório para publicar uma ação.

2. O proprietário não comprou uma assinatura Enterprise Cloud.

   Publicar ações no Marketplace não exige uma assinatura Enterprise Cloud.

3. O proprietário não adicionou um badge de fluxo bem-sucedido.

   Um badge de status pode ajudar na documentação, mas não habilita a caixa de publicação.

4. O proprietário não aceitou o Marketplace Developer Agreement. **[CORRECT]**

   A conta proprietária precisa aceitar o acordo para poder publicar no Marketplace.

**Concept:** Acordo do publicador do Marketplace

**Authored coaching hints:**

- Permissões de publicação e capacidade de execução são questões diferentes.
- Procure um requisito da conta proprietária do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace>

<!-- certification-coach-question:actions-137:579244f1ef8bc04f977017e9e2a2df2238088cbe5f0af0c5534ff004f5740efc -->
## Question 137: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-137`

**Content revision:** `579244f1ef8bc04f977017e9e2a2df2238088cbe5f0af0c5534ff004f5740efc`

**en review revision:** `0c1e19dcab7640eb0b8643272aa9d39fded0065260415f1bee7fbd522b2fea89`
**es review revision:** `e74fd7599d31adf70505446962c61e9dbb413648257ea0d245ae1ffedbccb593`
**pt-BR review revision:** `3bf020315aa279116c4f252b7e59dbe13f95bf152cf6e61859c10e9456c0029d`

### English

An action removes a documented input and requires callers to change their workflows. Which semantic version change fits?

1. v2.6.1 to v3.0.0 **[CORRECT]**

   A backward-incompatible public interface change calls for a new major version.

2. v2.6.1 to v2.6.2

   A patch version communicates compatible fixes rather than this interface removal.

3. v2.6.1 to v2.7.0

   A minor version communicates compatible additions, not required caller changes.

4. v2.6.1 to v2.6.1

   Keeping the same release version conceals an incompatible change.

**Concept:** Action semantic version compatibility

**Authored coaching hints:**

- Evaluate impact on existing callers, not the size of the code diff.
- A removed interface differs from an optional new capability.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción elimina una entrada documentada y obliga a modificar los flujos llamadores. ¿Qué cambio de versión semántica corresponde?

1. v2.6.1 to v3.0.0 **[CORRECT]**

   Un cambio incompatible de la interfaz pública requiere una nueva versión principal.

2. v2.6.1 to v2.6.2

   Una versión de parche comunica correcciones compatibles, no esta eliminación de interfaz.

3. v2.6.1 to v2.7.0

   Una versión secundaria comunica adiciones compatibles, no cambios obligatorios del llamador.

4. v2.6.1 to v2.6.1

   Mantener la misma versión publicada oculta un cambio incompatible.

**Concept:** Compatibilidad de versiones semánticas de acciones

**Authored coaching hints:**

- Evalúa el efecto sobre los llamadores existentes, no el tamaño del cambio de código.
- Eliminar una interfaz es distinto de añadir una capacidad opcional.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação remove uma entrada documentada e exige alterações nos fluxos chamadores. Qual alteração de versão semântica corresponde?

1. v2.6.1 to v3.0.0 **[CORRECT]**

   Uma alteração incompatível da interface pública exige uma nova versão principal.

2. v2.6.1 to v2.6.2

   Uma versão de patch comunica correções compatíveis, não essa remoção de interface.

3. v2.6.1 to v2.7.0

   Uma versão secundária comunica adições compatíveis, não alterações obrigatórias do chamador.

4. v2.6.1 to v2.6.1

   Manter a mesma versão publicada oculta uma alteração incompatível.

**Concept:** Compatibilidade de versões semânticas de ações

**Authored coaching hints:**

- Avalie o impacto nos chamadores existentes, não o tamanho da alteração de código.
- Remover uma interface é diferente de adicionar um recurso opcional.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-138:c480b6b0ce76e32cc04e7f03f8570deb8df8a33fe90fc07e026a4b2845b1e412 -->
## Question 138: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-138`

**Content revision:** `c480b6b0ce76e32cc04e7f03f8570deb8df8a33fe90fc07e026a4b2845b1e412`

**en review revision:** `f7368d264b70ef47d7db28263b553912a01d4c396765afa18b98bf488d18a543`
**es review revision:** `1349502ec8852298bfcbc5a3e2074e30d626284076e5c0aa1aafbe9e66002c48`
**pt-BR review revision:** `e6414c776cf261e95138600237771ac3dd70058531d160535e98595c8c99e043`

### English

For a conventional mutable major-version tag, what does maintaining v2 let an action publisher offer?

1. An unchangeable identity for one exact source commit

   A moving tag is not an exact immutable commit identity.

2. Automatic migration of every v1 input into a v3 input

   Tags do not rewrite caller inputs or migrate incompatible interfaces.

3. Compatible v2 updates without each caller editing its reference **[CORRECT]**

   A maintained major tag can advance to compatible releases; immutable release rules need separate consideration.

4. A guarantee that the host operating system never changes

   Action version references do not freeze hosted runner operating systems.

**Concept:** Maintained major release tags

**Authored coaching hints:**

- Distinguish a compatibility channel from an exact code identity.
- The question explicitly scopes the tag as mutable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para una etiqueta convencional mutable de versión principal, ¿qué permite ofrecer al publicador mantener v2?

1. Una identidad inalterable para un único commit de código

   Una etiqueta móvil no es una identidad de commit exacta e inmutable.

2. Migración automática de toda entrada v1 a una entrada v3

   Las etiquetas no reescriben entradas ni migran interfaces incompatibles.

3. Actualizaciones compatibles de v2 sin que cada llamador edite su referencia **[CORRECT]**

   Una etiqueta principal mantenida puede avanzar a lanzamientos compatibles; las reglas de versiones inmutables requieren consideración aparte.

4. Una garantía de que el sistema operativo del host nunca cambia

   Las referencias de versión de acción no congelan los sistemas operativos de runners hospedados.

**Concept:** Etiquetas principales de lanzamiento mantenidas

**Authored coaching hints:**

- Distingue un canal de compatibilidad de una identidad exacta de código.
- La pregunta limita explícitamente la etiqueta al caso mutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para uma tag convencional mutável de versão principal, o que manter v2 permite oferecer ao publicador?

1. Uma identidade inalterável para um único commit de código

   Uma tag móvel não é uma identidade exata e imutável de commit.

2. Migração automática de toda entrada v1 para uma entrada v3

   Tags não reescrevem entradas nem migram interfaces incompatíveis.

3. Atualizações compatíveis de v2 sem cada chamador editar sua referência **[CORRECT]**

   Uma tag principal mantida pode avançar para versões compatíveis; regras de versões imutáveis exigem consideração separada.

4. Uma garantia de que o sistema operacional do host nunca muda

   Referências de versão de ação não congelam os sistemas operacionais de runners hospedados.

**Concept:** Tags principais de versão mantidas

**Authored coaching hints:**

- Diferencie um canal de compatibilidade de uma identidade exata de código.
- A pergunta limita explicitamente a tag ao caso mutável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-139:bbfd26e7e1d69b5b1fe15cd7077de9e4cb9d7e56b2ed000c7efea1ab1e2e45ec -->
## Question 139: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-139`

**Content revision:** `bbfd26e7e1d69b5b1fe15cd7077de9e4cb9d7e56b2ed000c7efea1ab1e2e45ec`

**en review revision:** `f7a68ed8ff3dbb8226ba37dbdab3b9200bff0fe00e24950a804e79aed9808182`
**es review revision:** `a6b24a691e5564e20581394e2772e4bfc063064100f8b05aed0da56487f65f02`
**pt-BR review revision:** `44937f4c080140fc15a9011d74a0cc8a1b0f07d9335046017c98e5ef6b92968f`

### English

Which README section most directly lets callers configure and consume an action's interface?

1. Contributor avatars, issue counts, and repository stars

   Community indicators do not explain parameter names or output references.

2. Release dates, commit counts, and development branch names

   History information does not specify how callers should invoke the interface.

3. Build badges, sponsor logos, and contributor rankings

   Presentation and sponsorship information cannot replace interface documentation.

4. Inputs, defaults, outputs, and a working usage example **[CORRECT]**

   These document the callable contract and show valid configuration.

**Concept:** Action consumer documentation

**Authored coaching hints:**

- Ask what a caller must know to write a valid with block.
- Documentation should explain observable behavior, not only repository activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué sección del README permite más directamente configurar y consumir la interfaz de una acción?

1. Avatares de colaboradores, número de incidencias y estrellas

   Los indicadores de comunidad no explican nombres de parámetros ni referencias de salida.

2. Fechas de lanzamiento, número de commits y ramas de desarrollo

   La información histórica no especifica cómo deben invocar la interfaz los llamadores.

3. Insignias de compilación, logotipos de patrocinadores y clasificaciones

   La presentación y el patrocinio no sustituyen la documentación de interfaz.

4. Entradas, valores predeterminados, salidas y un ejemplo funcional **[CORRECT]**

   Estos elementos documentan el contrato de invocación y muestran una configuración válida.

**Concept:** Documentación para consumidores de acciones

**Authored coaching hints:**

- Piensa qué necesita saber un llamador para escribir un bloque with válido.
- La documentación debe explicar el comportamiento observable, no solo la actividad del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual seção do README permite mais diretamente configurar e consumir a interface de uma ação?

1. Avatares de colaboradores, número de issues e estrelas

   Indicadores da comunidade não explicam nomes de parâmetros nem referências de saída.

2. Datas de lançamento, número de commits e branches de desenvolvimento

   Informações históricas não especificam como os chamadores devem invocar a interface.

3. Badges de build, logotipos de patrocinadores e classificações

   Apresentação e patrocínio não substituem a documentação da interface.

4. Entradas, padrões, saídas e um exemplo funcional **[CORRECT]**

   Esses elementos documentam o contrato de invocação e mostram uma configuração válida.

**Concept:** Documentação para consumidores de ações

**Authored coaching hints:**

- Pense no que um chamador precisa saber para escrever um bloco with válido.
- A documentação deve explicar o comportamento observável, não apenas a atividade do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-140:3eed1e6b868aff1fb5da5992fb849f107b404bd4ed15b4c5540e099842ea25e2 -->
## Question 140: Author and maintain actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-140`

**Content revision:** `3eed1e6b868aff1fb5da5992fb849f107b404bd4ed15b4c5540e099842ea25e2`

**en review revision:** `0c2d9e52ef54c615b68834bcb53aa69f773fc5926f210410beb27012a03bfb7e`
**es review revision:** `6ca39987682ef1dfb3835f738d261cfd9d1e61e9391c88edad03f0b56f44e5f8`
**pt-BR review revision:** `9cc7538cd6c3f178c505a29d945bd48cc32bc555af20e0d4f0f0eed09b07e053`

### English

A JavaScript action claims support for Linux, Windows, and macOS. Which release test directly checks that claim?

1. Run only the documentation spellchecker on each release.

   Spelling checks do not execute platform-dependent behavior.

2. Check only that the release tag matches the README example.

   Tag consistency does not verify operating-system support.

3. Invoke the packaged action on a matrix of those operating systems. **[CORRECT]**

   A real caller invocation on each claimed platform exercises packaging and OS assumptions.

4. Run the action only inside one Linux Docker container.

   A Linux container does not exercise native Windows and macOS behavior.

**Concept:** Cross-platform action release testing

**Authored coaching hints:**

- Test the deliverable consumers run, not only source files in development.
- Filesystem paths and available commands can differ by platform.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript afirma ser compatible con Linux, Windows y macOS. ¿Qué prueba de lanzamiento comprueba directamente esa afirmación?

1. Ejecutar solo el corrector ortográfico de la documentación en cada lanzamiento.

   La corrección ortográfica no ejecuta comportamientos dependientes de la plataforma.

2. Comprobar solo que la etiqueta publicada coincide con el ejemplo del README.

   La coherencia de etiquetas no verifica la compatibilidad con sistemas operativos.

3. Invocar la acción empaquetada en una matriz de esos sistemas operativos. **[CORRECT]**

   Una invocación real en cada plataforma comprueba el empaquetado y los supuestos del sistema operativo.

4. Ejecutar la acción solo dentro de un contenedor Docker Linux.

   Un contenedor Linux no comprueba el comportamiento nativo de Windows y macOS.

**Concept:** Pruebas multiplataforma de lanzamientos de acción

**Authored coaching hints:**

- Prueba lo que ejecutan los consumidores, no solo los archivos fuente de desarrollo.
- Las rutas de archivos y los comandos disponibles pueden variar por plataforma.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript afirma oferecer suporte a Linux, Windows e macOS. Qual teste de versão verifica diretamente essa afirmação?

1. Executar apenas o corretor ortográfico da documentação em cada versão.

   A correção ortográfica não executa comportamentos dependentes da plataforma.

2. Verificar apenas se a tag publicada corresponde ao exemplo do README.

   A consistência de tags não verifica o suporte a sistemas operacionais.

3. Invocar a ação empacotada em uma matriz desses sistemas operacionais. **[CORRECT]**

   Uma invocação real em cada plataforma verifica o empacotamento e as suposições do sistema operacional.

4. Executar a ação apenas dentro de um contêiner Docker Linux.

   Um contêiner Linux não verifica o comportamento nativo de Windows e macOS.

**Concept:** Testes multiplataforma de versões de ação

**Authored coaching hints:**

- Teste o que os consumidores executam, não apenas os arquivos-fonte de desenvolvimento.
- Caminhos de arquivos e comandos disponíveis podem variar por plataforma.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-141:508ea4e440f0ef10d3fec8d542ca651437720e8a18a30cd7a9c49cacd7fba461 -->
## Question 141: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-141`

**Content revision:** `508ea4e440f0ef10d3fec8d542ca651437720e8a18a30cd7a9c49cacd7fba461`

**en review revision:** `cd3c69cdd914d2582130647a025c14fa75ea36ff0c1bb65269b5359a1358260c`
**es review revision:** `a5ef23d1bfcb256d9083400044b9d03710bd39a3a63c648ddccb1f93a9430fca`
**pt-BR review revision:** `42a6237f8a8951dbeefbeed260d97b6bc4a7e21e3059e29b7490ad53dc6e4f7c`

### English

An organization on GitHub Team must limit a runner pool to two private repositories. Which control sets that boundary?

1. Runner custom labels

   Labels select eligible machines but are not repository access boundaries.

2. Runner group repository access **[CORRECT]**

   A group can grant access only to selected repositories.

3. Workflow display names

   Display names do not authorize runner access.

4. Job timeout settings

   Timeouts limit execution duration rather than eligible repositories.

**Concept:** Runner group repository authorization

**Authored coaching hints:**

- Separate machine selection from permission to use a pool.
- Think about where an administrator expresses the allowed callers.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización con GitHub Team debe limitar un conjunto de runners a dos repositorios privados. ¿Qué control establece ese límite?

1. Etiquetas personalizadas de runners

   Las etiquetas seleccionan máquinas aptas, pero no son límites de acceso de repositorios.

2. Acceso a repositorios del grupo de runners **[CORRECT]**

   Un grupo puede conceder acceso solo a repositorios seleccionados.

3. Nombres visibles de flujos

   Los nombres visibles no autorizan acceso a runners.

4. Ajustes de tiempo límite de trabajos

   Los tiempos límite restringen la duración, no los repositorios aptos.

**Concept:** Autorización de repositorios en grupos de runners

**Authored coaching hints:**

- Distingue seleccionar una máquina de tener permiso para usar un conjunto.
- Piensa dónde expresa un administrador qué llamadores están permitidos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização no GitHub Team precisa limitar um pool de runners a dois repositórios privados. Qual controle estabelece esse limite?

1. Rótulos personalizados de runners

   Rótulos selecionam máquinas aptas, mas não são limites de acesso de repositórios.

2. Acesso a repositórios do grupo de runners **[CORRECT]**

   Um grupo pode conceder acesso apenas a repositórios selecionados.

3. Nomes exibidos dos fluxos

   Nomes exibidos não autorizam acesso a runners.

4. Configurações de tempo limite dos jobs

   Tempos limite restringem a duração, não os repositórios aptos.

**Concept:** Autorização de repositórios em grupos de runners

**Authored coaching hints:**

- Diferencie selecionar uma máquina de ter permissão para usar um pool.
- Pense em onde um administrador define quais chamadores são permitidos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-142:3475650a33a1bf272a16969294931baefcfd24d197c4a744ead70cbb1b960997 -->
## Question 142: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-142`

**Content revision:** `3475650a33a1bf272a16969294931baefcfd24d197c4a744ead70cbb1b960997`

**en review revision:** `b2fce7c8276dc8f6ea9ad7caade80b05ee572431f71f66f82d7d832bafe54514`
**es review revision:** `7c2fd914ba4fd6a907f108c5c98bfa18e22bcfcf1271b10d485c8db57bfa0c72`
**pt-BR review revision:** `e7af4b5b9ee19329d7a04deeff6dc26d5353f7f0442ad645c2c529b8d64eac41`

### English

Which runner feature describes a capability such as gpu for runs-on matching, without granting repository access?

1. A custom label **[CORRECT]**

   Custom labels help route jobs to runners with declared characteristics.

2. A repository access policy

   Access policies control authorization rather than advertise capabilities.

3. An organization secret

   Secrets store sensitive values rather than runner matching attributes.

4. A deployment environment

   Environments group deployment settings and are not runner capability labels.

**Concept:** Runner capability labels

**Authored coaching hints:**

- A scheduling attribute is not necessarily a security boundary.
- Identify whether the question concerns machine characteristics or access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función del runner describe una capacidad como gpu para la selección de runs-on, sin conceder acceso a repositorios?

1. Una etiqueta personalizada **[CORRECT]**

   Las etiquetas personalizadas ayudan a dirigir trabajos a runners con características declaradas.

2. Una política de acceso a repositorios

   Las políticas de acceso controlan la autorización, no anuncian capacidades.

3. Un secreto de organización

   Los secretos almacenan valores sensibles, no atributos de selección de runners.

4. Un entorno de despliegue

   Los entornos agrupan ajustes de despliegue y no son etiquetas de capacidades.

**Concept:** Etiquetas de capacidades de runners

**Authored coaching hints:**

- Un atributo de planificación no es necesariamente un límite de seguridad.
- Identifica si la pregunta trata de características de máquinas o de acceso.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do runner descreve uma capacidade como gpu para a seleção de runs-on, sem conceder acesso a repositórios?

1. Um rótulo personalizado **[CORRECT]**

   Rótulos personalizados ajudam a direcionar jobs a runners com características declaradas.

2. Uma política de acesso a repositórios

   Políticas de acesso controlam autorização, não anunciam capacidades.

3. Um segredo da organização

   Segredos armazenam valores sensíveis, não atributos de seleção de runners.

4. Um ambiente de implantação

   Ambientes agrupam configurações de implantação e não são rótulos de capacidades.

**Concept:** Rótulos de capacidades de runners

**Authored coaching hints:**

- Um atributo de agendamento não é necessariamente um limite de segurança.
- Identifique se a pergunta trata de características de máquinas ou de acesso.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow>

<!-- certification-coach-question:actions-143:3ecbd4746753de6638a09fe76ad9ea126380f08244aa07d593b25b83ef80ed54 -->
## Question 143: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-143`

**Content revision:** `3ecbd4746753de6638a09fe76ad9ea126380f08244aa07d593b25b83ef80ed54`

**en review revision:** `706b7c43fecbaa20fd61b2fce0282cea0a214a54e7dd8c550e09d93b7c916bce`
**es review revision:** `39f58d0ccb56b832a3c747208d1580595bd9511c7020a39e09802a8d7482a9f2`
**pt-BR review revision:** `5099338a773cc5263d056ee683c09cdaca20138ad421ad1a2bee95729508cfb6`

### English

Which runs-on mapping requires both membership in group build-pool and label linux-x64?

1. runs-on: \{group: build-pool, labels: linux-x64\} **[CORRECT]**

   The group and labels mapping applies both group eligibility and label matching.

2. runs-on: \{group: linux-x64, labels: build-pool\}

   This swaps the requested group name and label.

3. runs-on: \[build-pool, linux-x64\]

   An array treats both values as labels rather than naming a runner group.

4. runs-on: \{labels: linux-x64\}

   The label-only mapping does not require the named group.

**Concept:** Runner group and label intersection

**Authored coaching hints:**

- Read the keys as well as their values.
- An array of labels is not the same structure as a group selection.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué asignación runs-on exige tanto pertenencia al grupo build-pool como la etiqueta linux-x64?

1. runs-on: \{group: build-pool, labels: linux-x64\} **[CORRECT]**

   La asignación group y labels aplica tanto la pertenencia al grupo como la coincidencia de etiquetas.

2. runs-on: \{group: linux-x64, labels: build-pool\}

   Esto intercambia el nombre de grupo y la etiqueta solicitados.

3. runs-on: \[build-pool, linux-x64\]

   Un arreglo trata ambos valores como etiquetas en lugar de nombrar un grupo.

4. runs-on: \{labels: linux-x64\}

   La asignación solo de etiqueta no exige el grupo indicado.

**Concept:** Intersección de grupo y etiqueta de runner

**Authored coaching hints:**

- Lee las claves además de sus valores.
- Un arreglo de etiquetas no tiene la misma estructura que una selección de grupo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mapeamento runs-on exige tanto participação no grupo build-pool quanto o rótulo linux-x64?

1. runs-on: \{group: build-pool, labels: linux-x64\} **[CORRECT]**

   O mapeamento group e labels aplica tanto a participação no grupo quanto a correspondência de rótulos.

2. runs-on: \{group: linux-x64, labels: build-pool\}

   Isso troca o nome do grupo e o rótulo solicitados.

3. runs-on: \[build-pool, linux-x64\]

   Um array trata ambos os valores como rótulos em vez de nomear um grupo.

4. runs-on: \{labels: linux-x64\}

   O mapeamento apenas de rótulo não exige o grupo indicado.

**Concept:** Interseção de grupo e rótulo de runner

**Authored coaching hints:**

- Leia as chaves além dos seus valores.
- Um array de rótulos não tem a mesma estrutura que uma seleção de grupo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow>

<!-- certification-coach-question:actions-144:6c4c156e381588429bc7b048c658c2061c971fe112062d78130d28d28e6cfbe3 -->
## Question 144: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-144`

**Content revision:** `6c4c156e381588429bc7b048c658c2061c971fe112062d78130d28d28e6cfbe3`

**en review revision:** `c3c13a8188e499ec80df62cf01e46f60b0a876eb4017b55e8db0c5d9e1f1e95e`
**es review revision:** `bb74452c1662c6ec32dfc78067e6e0fd4bc4a25c4dc15910b8ccc09f10155ed3`
**pt-BR review revision:** `629e1ce759dc01c4671a132beefd163cbebc122f0ef190944e79933385ffbc20`

### English

By default, which repositories can access self-hosted runners in a newly created organization runner group?

1. All public repositories that know a runner label

   Knowing a label does not bypass the public-repository access restriction.

2. Only repositories containing a Marketplace listing

   Marketplace publication is unrelated to runner group access.

3. Private repositories allowed by the group's access policy **[CORRECT]**

   Group access defaults to private repositories, subject to the selected repository policy.

4. All repositories in every organization on GitHub

   An organization group is not globally accessible across GitHub.

**Concept:** Default public-repository runner restriction

**Authored coaching hints:**

- Consider the risk of code originating in public forks.
- Default visibility restrictions still operate alongside selected-repository policies.

<details>
<summary>Español — same answer key and option order</summary>

### Español

De forma predeterminada, ¿qué repositorios pueden acceder a los runners autohospedados de un grupo de organización recién creado?

1. Todos los repositorios públicos que conocen una etiqueta de runner

   Conocer una etiqueta no evita la restricción de acceso de repositorios públicos.

2. Solo repositorios que contienen un anuncio de Marketplace

   La publicación en Marketplace no guarda relación con el acceso a grupos de runners.

3. Repositorios privados permitidos por la política del grupo **[CORRECT]**

   El acceso del grupo es privado por defecto y depende de la política de repositorios seleccionada.

4. Todos los repositorios de todas las organizaciones de GitHub

   Un grupo de organización no es accesible globalmente en GitHub.

**Concept:** Restricción predeterminada de runners para repositorios públicos

**Authored coaching hints:**

- Considera el riesgo del código procedente de bifurcaciones públicas.
- Las restricciones de visibilidad predeterminadas se aplican junto con las políticas de repositorios seleccionados.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por padrão, quais repositórios podem acessar os runners auto-hospedados de um grupo de organização recém-criado?

1. Todos os repositórios públicos que conhecem um rótulo de runner

   Conhecer um rótulo não contorna a restrição de acesso de repositórios públicos.

2. Apenas repositórios que contêm um anúncio do Marketplace

   Publicar no Marketplace não tem relação com acesso a grupos de runners.

3. Repositórios privados permitidos pela política do grupo **[CORRECT]**

   O acesso do grupo é privado por padrão e depende da política de repositórios selecionada.

4. Todos os repositórios de todas as organizações no GitHub

   Um grupo de organização não é acessível globalmente no GitHub.

**Concept:** Restrição padrão de runners para repositórios públicos

**Authored coaching hints:**

- Considere o risco de código originado em forks públicos.
- Restrições de visibilidade padrão atuam junto com políticas de repositórios selecionados.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-145:0c624e53da887d6586ebab7221df9b222a8ef7b7ff17bf618e42e37673422217 -->
## Question 145: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-145`

**Content revision:** `0c624e53da887d6586ebab7221df9b222a8ef7b7ff17bf618e42e37673422217`

**en review revision:** `a6c8cefb9337f6148ac172352743cce60b95ee18062ac1f5a39362ab2ed6ff4b`
**es review revision:** `e0a73e04b36a751be9636e2bf8bf5df665c377b84e22629f0e8e714ae084dd8b`
**pt-BR review revision:** `956f8de6f2f29c9f081e9a28ff0486ab3cf086b506382d354c822112892a4550`

### English

At what registration level can a self-hosted runner be assigned to multiple organizations in one enterprise?

1. Repository level

   Repository-level runners are dedicated to a single repository.

2. Enterprise level **[CORRECT]**

   Enterprise-level runners can serve multiple organizations through enterprise administration.

3. Environment level

   Environments do not form a self-hosted runner registration level.

4. Workflow level

   Workflows select runners; they do not own a cross-organization registration level.

**Concept:** Runner registration hierarchy

**Authored coaching hints:**

- Match the administrative scope to the intended sharing scope.
- A workflow reference does not change the runner's registration owner.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿En qué nivel de registro puede asignarse un runner autohospedado a varias organizaciones de una misma empresa?

1. Nivel de repositorio

   Los runners de repositorio están dedicados a un único repositorio.

2. Nivel de empresa **[CORRECT]**

   Los runners de empresa pueden servir a varias organizaciones mediante la administración de empresa.

3. Nivel de entorno

   Los entornos no constituyen un nivel de registro de runners autohospedados.

4. Nivel de flujo

   Los flujos seleccionan runners; no poseen un nivel de registro entre organizaciones.

**Concept:** Jerarquía de registro de runners

**Authored coaching hints:**

- Relaciona el ámbito administrativo con el ámbito de uso compartido deseado.
- Una referencia de flujo no cambia el propietario del registro del runner.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em qual nível de registro um runner auto-hospedado pode ser atribuído a várias organizações de uma mesma empresa?

1. Nível de repositório

   Runners de repositório são dedicados a um único repositório.

2. Nível de empresa **[CORRECT]**

   Runners de empresa podem atender várias organizações pela administração da empresa.

3. Nível de ambiente

   Ambientes não constituem um nível de registro de runners auto-hospedados.

4. Nível de fluxo

   Fluxos selecionam runners; não possuem um nível de registro entre organizações.

**Concept:** Hierarquia de registro de runners

**Authored coaching hints:**

- Relacione o escopo administrativo ao escopo de compartilhamento desejado.
- Uma referência de fluxo não altera o proprietário do registro do runner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-146:08ee19cc69eb4a391a57bac77e83e4045aa0fd6d105251514d7cc0f25de59ca1 -->
## Question 146: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-146`

**Content revision:** `08ee19cc69eb4a391a57bac77e83e4045aa0fd6d105251514d7cc0f25de59ca1`

**en review revision:** `5a3119504c482025a57dcde3386cfc831955571db3f208342c78e2af2d096a64`
**es review revision:** `a41f217c15cb7ee163bf2ef82ffc01d640a76ff32de6922bfdb70361f326abc3`
**pt-BR review revision:** `4abd8d992521193c7ad08f7c5fb67799fac3b71aa40aa5b8cea015d3c4d40bdc`

### English

An organization permits only one external action repository, vendor/audit. Which allow pattern is the narrowest repository-wide match?

1. vendor/\*

   vendor/\* also admits other repositories owned by vendor.

2. \*/audit@\*

   \*/audit@\* admits repositories named audit under other owners.

3. \*/\*

   \*/\* admits arbitrary owners and repositories rather than this single source.

4. vendor/audit@\* **[CORRECT]**

   This matches refs of vendor/audit without allowing every repository from that owner.

**Concept:** Narrow action source allow patterns

**Authored coaching hints:**

- Expand each wildcard mentally before choosing a rule.
- This question is about allowed sources, not dependency pinning.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización permite un único repositorio de acción externo, vendor/audit. ¿Qué patrón de permiso es el más restringido que cubre todo ese repositorio?

1. vendor/\*

   vendor/\* también admite otros repositorios de vendor.

2. \*/audit@\*

   \*/audit@\* admite repositorios llamados audit de otros propietarios.

3. \*/\*

   \*/\* admite propietarios y repositorios arbitrarios, no solo este origen.

4. vendor/audit@\* **[CORRECT]**

   Esto coincide con referencias de vendor/audit sin permitir todos los repositorios de ese propietario.

**Concept:** Patrones restringidos de orígenes de acciones

**Authored coaching hints:**

- Expande mentalmente cada comodín antes de elegir una regla.
- Esta pregunta trata de orígenes permitidos, no de fijación de dependencias.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização permite um único repositório externo de ação, vendor/audit. Qual padrão de permissão é o mais restrito que cobre todo esse repositório?

1. vendor/\*

   vendor/\* também admite outros repositórios de vendor.

2. \*/audit@\*

   \*/audit@\* admite repositórios chamados audit de outros proprietários.

3. \*/\*

   \*/\* admite proprietários e repositórios arbitrários, não apenas essa origem.

4. vendor/audit@\* **[CORRECT]**

   Isso corresponde às referências de vendor/audit sem permitir todos os repositórios desse proprietário.

**Concept:** Padrões restritos de origens de ações

**Authored coaching hints:**

- Expanda mentalmente cada curinga antes de escolher uma regra.
- Esta pergunta trata de origens permitidas, não de fixação de dependências.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-147:ef0bab78280e76c715283ae735e1ac259ed00179d860f22c8341ece15a855b54 -->
## Question 147: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-147`

**Content revision:** `ef0bab78280e76c715283ae735e1ac259ed00179d860f22c8341ece15a855b54`

**en review revision:** `1d8fa8daa7eec7ce773c3ba96465d49e544174cac99c78e64e22e0f3785d80fb`
**es review revision:** `b91684745e48af56ec9d6986092c341d9e58e1d81c7b6905b61e6afbb0601c8c`
**pt-BR review revision:** `55137cb212f8c147dbc6ea34e742035d4b3789795ba1fd9d248819a0045040f1`

### English

An enterprise enforces an Actions policy on its organizations. Can an organization owner weaken that enforced restriction?

1. Yes; organization settings always override enterprise settings.

   The documented hierarchy allows enterprise policy to override organization settings.

2. Yes; renaming the workflow exempts it from the policy.

   Display names do not create exceptions to Actions policy.

3. No; the enterprise's overriding policy applies. **[CORRECT]**

   Enforced enterprise policy limits the choices available at organization scope.

4. No; only a runner label can override the restriction.

   Runner labels do not override action usage policy.

**Concept:** Enterprise policy inheritance

**Authored coaching hints:**

- Follow the administrative hierarchy, not the workflow's location alone.
- Scheduling metadata cannot waive a governance restriction.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa impone una política de Actions a sus organizaciones. ¿Puede el propietario de una organización debilitar esa restricción?

1. Sí; los ajustes de organización siempre prevalecen sobre los de empresa.

   La jerarquía documentada permite que la política de empresa prevalezca sobre la organización.

2. Sí; cambiar el nombre del flujo lo exime de la política.

   Los nombres visibles no crean excepciones a la política de Actions.

3. No; se aplica la política superior de la empresa. **[CORRECT]**

   La política de empresa impuesta limita las opciones disponibles en la organización.

4. No; solo una etiqueta de runner puede anular la restricción.

   Las etiquetas de runner no anulan la política de uso de acciones.

**Concept:** Herencia de políticas de empresa

**Authored coaching hints:**

- Sigue la jerarquía administrativa, no solo la ubicación del flujo.
- Los metadatos de planificación no pueden eximir de una restricción de gobernanza.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa impõe uma política de Actions às suas organizações. O proprietário de uma organização pode enfraquecer essa restrição?

1. Sim; configurações da organização sempre prevalecem sobre as da empresa.

   A hierarquia documentada permite que a política de empresa prevaleça sobre a organização.

2. Sim; renomear o fluxo o isenta da política.

   Nomes exibidos não criam exceções à política de Actions.

3. Não; a política superior da empresa se aplica. **[CORRECT]**

   A política de empresa imposta limita as opções disponíveis na organização.

4. Não; apenas um rótulo de runner pode anular a restrição.

   Rótulos de runner não anulam a política de uso de ações.

**Concept:** Herança de políticas de empresa

**Authored coaching hints:**

- Siga a hierarquia administrativa, não apenas o local do fluxo.
- Metadados de agendamento não podem dispensar uma restrição de governança.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-148:55e955e366f4a315171fd6bb59259fcf13414f88e99f3d02c47aeaffe1d9fae7 -->
## Question 148: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-148`

**Content revision:** `55e955e366f4a315171fd6bb59259fcf13414f88e99f3d02c47aeaffe1d9fae7`

**en review revision:** `e3fcf8c130b4c429c23456457597f53b7221c8f5524642b48a8a5015b5cd0834`
**es review revision:** `d55bb3f6d882062042e8a02611b46d87c8fc9d7d913ae3bf3b4382ac11bbbfa7`
**pt-BR review revision:** `d483c07bd717b00174e206a17512a55e58e7b54d6d87cf3bbd399a2e3dee8a75`

### English

An action source is blocked by organization policy. What can a repository administrator do in the repository's Actions settings?

1. Restrict permitted sources further, but not allow that blocked source. **[CORRECT]**

   Repository policy can be more restrictive but cannot bypass an overriding organization policy.

2. Allow the blocked source by selecting a different runner image.

   Runner image selection does not change allowed action sources.

3. Allow the blocked source by increasing the job timeout.

   Timeout changes do not override organization access rules.

4. Replace organization policy with a repository workflow name.

   Workflow names have no authority over organization policy.

**Concept:** Repository policy upper bounds

**Authored coaching hints:**

- Distinguish local restrictions from permissions granted by a parent scope.
- Runtime settings and permitted source settings govern different things.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política de organización bloquea un origen de acciones. ¿Qué puede hacer un administrador en los ajustes de Actions del repositorio?

1. Restringir más los orígenes permitidos, pero no autorizar ese origen bloqueado. **[CORRECT]**

   La política del repositorio puede ser más restrictiva, pero no evitar una política superior de organización.

2. Autorizar el origen bloqueado seleccionando otra imagen de runner.

   Seleccionar una imagen de runner no cambia los orígenes de acciones permitidos.

3. Autorizar el origen bloqueado aumentando el tiempo límite del trabajo.

   Cambiar el tiempo límite no anula las reglas de acceso de organización.

4. Reemplazar la política de organización con un nombre de flujo del repositorio.

   Los nombres de flujo no tienen autoridad sobre las políticas de organización.

**Concept:** Límites superiores de políticas de repositorio

**Authored coaching hints:**

- Distingue restricciones locales de permisos concedidos por un ámbito superior.
- Los ajustes de ejecución y de orígenes permitidos regulan cosas distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política da organização bloqueia uma origem de ações. O que um administrador pode fazer nas configurações de Actions do repositório?

1. Restringir mais as origens permitidas, mas não autorizar essa origem bloqueada. **[CORRECT]**

   A política do repositório pode ser mais restritiva, mas não contornar uma política superior da organização.

2. Autorizar a origem bloqueada selecionando outra imagem de runner.

   Selecionar uma imagem de runner não altera as origens de ações permitidas.

3. Autorizar a origem bloqueada aumentando o tempo limite do job.

   Alterar o tempo limite não anula regras de acesso da organização.

4. Substituir a política da organização por um nome de fluxo do repositório.

   Nomes de fluxo não têm autoridade sobre políticas da organização.

**Concept:** Limites superiores de políticas do repositório

**Authored coaching hints:**

- Diferencie restrições locais de permissões concedidas por um escopo superior.
- Configurações de execução e de origens permitidas regulam coisas diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository>

<!-- certification-coach-question:actions-149:781da7d8f289f28e8ed584e6366581a302f83f0fef7e43d487c843fd85264cdf -->
## Question 149: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-149`

**Content revision:** `781da7d8f289f28e8ed584e6366581a302f83f0fef7e43d487c843fd85264cdf`

**en review revision:** `0c60e5ba5180588093aab7c7df0fdccc345cf04e6d7dd04e658118380b5d61f6`
**es review revision:** `1d83611f42afa33ffe618f49882fe6f2da43af5cea41c11bf6ac9635136aed17`
**pt-BR review revision:** `c9fe736c559c32fc20b6da7b4722377842289e5bea88cb5f7e4803c3fa5962df`

### English

In a private action repository on GitHub.com, where does its administrator enable use by other private repositories in the same organization?

1. Settings &gt; Branches &gt; Branch protection rules

   Branch protection governs changes to branches, not private action distribution.

2. Settings &gt; Pages &gt; Build and deployment

   Pages settings govern site publication rather than action download access.

3. Settings &gt; Webhooks &gt; Add webhook

   Webhooks send event notifications and do not grant action sharing access.

4. Settings &gt; Actions &gt; General &gt; Access **[CORRECT]**

   The source repository's Actions Access setting controls private action sharing.

**Concept:** Private action distribution setting

**Authored coaching hints:**

- The source repository owns the sharing decision.
- Do not confuse action access with website publishing or branch rules.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un repositorio privado de acciones en GitHub.com, ¿dónde habilita su administrador el uso desde otros repositorios privados de la misma organización?

1. Settings &gt; Branches &gt; Branch protection rules

   La protección de ramas regula sus cambios, no la distribución de acciones privadas.

2. Settings &gt; Pages &gt; Build and deployment

   Los ajustes de Pages regulan la publicación de sitios, no el acceso a descargas de acciones.

3. Settings &gt; Webhooks &gt; Add webhook

   Los webhooks envían notificaciones de eventos y no conceden acceso de uso compartido de acciones.

4. Settings &gt; Actions &gt; General &gt; Access **[CORRECT]**

   El ajuste Access de Actions del repositorio de origen controla el uso compartido de acciones privadas.

**Concept:** Ajuste de distribución de acciones privadas

**Authored coaching hints:**

- El repositorio de origen controla la decisión de compartir.
- No confundas el acceso a acciones con la publicación web o las reglas de ramas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um repositório privado de ações no GitHub.com, onde o administrador habilita o uso por outros repositórios privados da mesma organização?

1. Settings &gt; Branches &gt; Branch protection rules

   A proteção de branches regula suas alterações, não a distribuição de ações privadas.

2. Settings &gt; Pages &gt; Build and deployment

   Configurações do Pages regulam a publicação de sites, não o acesso ao download de ações.

3. Settings &gt; Webhooks &gt; Add webhook

   Webhooks enviam notificações de eventos e não concedem acesso ao compartilhamento de ações.

4. Settings &gt; Actions &gt; General &gt; Access **[CORRECT]**

   A configuração Access de Actions do repositório de origem controla o compartilhamento de ações privadas.

**Concept:** Configuração de distribuição de ações privadas

**Authored coaching hints:**

- O repositório de origem controla a decisão de compartilhar.
- Não confunda acesso a ações com publicação de sites ou regras de branches.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization>

<!-- certification-coach-question:actions-150:81618ecaef0629cf14c6efaf2b7e0a6614f051287e0ec3caf81f9e63033a1dee -->
## Question 150: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-150`

**Content revision:** `81618ecaef0629cf14c6efaf2b7e0a6614f051287e0ec3caf81f9e63033a1dee`

**en review revision:** `66999edb1710aee7d4ba3791882ef2dd8cde20581811eb086f27c204eeba499f`
**es review revision:** `d1040bbf06e44e39346357c7536752cdc6061d0559c352675fe9b26b1e4e8ae0`
**pt-BR review revision:** `407c32f37da6d28c8eda43359b0e22a3f94ee514ba39a30ffcbc2d2b2c65959e`

### English

Sharing a private action with another repository automatically gives that repository's collaborators which direct access?

1. Write access to the source repository's default branch

   Sharing an action does not grant branch write permission.

2. No new permission to browse the source repository's Code tab **[CORRECT]**

   Action sharing enables runner download, not direct user membership; logs can still expose information.

3. Administrator access to the source repository's settings

   Action consumption does not grant repository administration.

4. Permission to manage the source repository's collaborators

   Collaborator management is not granted by the Actions sharing setting.

**Concept:** Action access versus repository membership

**Authored coaching hints:**

- Separate machine access for execution from a user's repository role.
- Lack of direct access does not imply absence of indirect information exposure.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Compartir una acción privada con otro repositorio concede automáticamente a sus colaboradores ¿qué acceso directo?

1. Acceso de escritura a la rama predeterminada del repositorio de origen

   Compartir una acción no concede escritura en ramas.

2. Ningún permiso nuevo para navegar por Code en el repositorio de origen **[CORRECT]**

   Compartir acciones permite descargarlas al runner, no crea membresía directa; los registros aún pueden exponer información.

3. Acceso de administrador a los ajustes del repositorio de origen

   Consumir una acción no concede administración del repositorio.

4. Permiso para administrar colaboradores del repositorio de origen

   El ajuste de uso compartido de Actions no concede gestión de colaboradores.

**Concept:** Acceso a acciones frente a membresía de repositorio

**Authored coaching hints:**

- Distingue el acceso de la máquina para ejecutar del rol del usuario en el repositorio.
- La falta de acceso directo no implica que no exista exposición indirecta de información.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Compartilhar uma ação privada com outro repositório concede automaticamente aos colaboradores dele qual acesso direto?

1. Acesso de escrita à branch padrão do repositório de origem

   Compartilhar uma ação não concede escrita em branches.

2. Nenhuma nova permissão para navegar em Code no repositório de origem **[CORRECT]**

   Compartilhar ações permite o download pelo runner, não cria associação direta; os logs ainda podem expor informações.

3. Acesso de administrador às configurações do repositório de origem

   Consumir uma ação não concede administração do repositório.

4. Permissão para gerenciar colaboradores do repositório de origem

   A configuração de compartilhamento de Actions não concede gerenciamento de colaboradores.

**Concept:** Acesso a ações versus associação ao repositório

**Authored coaching hints:**

- Diferencie o acesso da máquina para execução do papel do usuário no repositório.
- A falta de acesso direto não implica ausência de exposição indireta de informações.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization>

<!-- certification-coach-question:actions-151:94c23bc2c4b38ce4baa9625e276bc3d53ecd408f5d0aefbf3fa51f47d53ea0fe -->
## Question 151: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-151`

**Content revision:** `94c23bc2c4b38ce4baa9625e276bc3d53ecd408f5d0aefbf3fa51f47d53ea0fe`

**en review revision:** `69af9f29b561dcdae2b7abb569b0f09e43c7e94c0b4f230b380f0500d732206c`
**es review revision:** `82609f8944ce09a361858a946481cb7581b671adcb38ff38f103461f24f2c9a4`
**pt-BR review revision:** `e0b57477bd65257e0fe25673ce82fedc16fd30c800c124db16e87cb26d5e9dc7`

### English

How does GitHub authorize a runner to download an action from an authorized shared private repository?

1. The repository owner's browser session cookie

   Runner downloads do not reuse the owner's browser cookie.

2. A scoped installation token with read access to that repository **[CORRECT]**

   GitHub passes a limited installation token to permit the runner's download.

3. An organization-wide administrator password in action.yml

   Sharing does not require embedding an administrator password in metadata.

4. Anonymous cloning with full write access to private code

   Private sharing is authenticated and does not provide anonymous write access.

**Concept:** Shared action download authorization

**Authored coaching hints:**

- Consider the credential's principal, resource scope, and purpose.
- A download operation need not grant repository administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo autoriza GitHub al runner a descargar una acción de un repositorio privado compartido autorizado?

1. La cookie de sesión del navegador del propietario del repositorio

   Las descargas del runner no reutilizan la cookie del navegador del propietario.

2. Un token de instalación limitado con acceso de lectura a ese repositorio **[CORRECT]**

   GitHub proporciona un token de instalación limitado para permitir la descarga del runner.

3. Una contraseña de administrador de organización en action.yml

   Compartir no requiere incrustar una contraseña de administrador en los metadatos.

4. Clonación anónima con acceso completo de escritura al código privado

   El uso compartido privado se autentica y no proporciona escritura anónima.

**Concept:** Autorización de descarga de acciones compartidas

**Authored coaching hints:**

- Considera la identidad, el ámbito de recursos y la finalidad de la credencial.
- Una descarga no necesita conceder administración del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como o GitHub autoriza o runner a baixar uma ação de um repositório privado compartilhado autorizado?

1. O cookie de sessão do navegador do proprietário do repositório

   Downloads do runner não reutilizam o cookie do navegador do proprietário.

2. Um token de instalação limitado com acesso de leitura a esse repositório **[CORRECT]**

   O GitHub fornece um token de instalação limitado para permitir o download pelo runner.

3. Uma senha de administrador da organização em action.yml

   Compartilhar não exige inserir uma senha de administrador nos metadados.

4. Clonagem anônima com acesso completo de escrita ao código privado

   O compartilhamento privado é autenticado e não fornece escrita anônima.

**Concept:** Autorização de download de ações compartilhadas

**Authored coaching hints:**

- Considere a identidade, o escopo de recursos e a finalidade da credencial.
- Um download não precisa conceder administração do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization>

<!-- certification-coach-question:actions-152:458d8b03c134fdcfa8acd6322660372f81df1cf78701d3007306abf8cb80a90a -->
## Question 152: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-152`

**Content revision:** `458d8b03c134fdcfa8acd6322660372f81df1cf78701d3007306abf8cb80a90a`

**en review revision:** `71fcc90380d4a44e2447baa1c9f6f486de8a51bffbec43428d5b72acc356444c`
**es review revision:** `84ca9e62a0e735b6bf1abdc522db86e7663ea059f35f8705b6af962d49c197e6`
**pt-BR review revision:** `7e226f89a7065b8c98772a793d5cff7fead28d273e4462f7d8c03701ccfa0541`

### English

Why should maintainers review log output before sharing a private action with repositories that have outside collaborators?

1. Sharing silently makes the source repository publicly searchable.

   Sharing for Actions does not change repository visibility to public.

2. Outside collaborators automatically become enterprise owners.

   Action sharing grants no enterprise ownership role.

3. The action can no longer produce any logs after being shared.

   Shared actions still produce logs in their caller runs.

4. Those collaborators may see the action's output in caller workflow logs. **[CORRECT]**

   The documented indirect-access warning includes logs visible in consuming repositories.

**Concept:** Indirect exposure through shared action logs

**Authored coaching hints:**

- Trace information to the people who can read the consuming run.
- Execution access and repository visibility are separate settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué deben revisar los registros antes de compartir una acción privada con repositorios que tienen colaboradores externos?

1. Compartir hace que el repositorio de origen sea públicamente localizable sin avisar.

   Compartir para Actions no cambia la visibilidad del repositorio a pública.

2. Los colaboradores externos se convierten automáticamente en propietarios de empresa.

   Compartir acciones no concede el rol de propietario de empresa.

3. La acción ya no puede producir registros después de compartirse.

   Las acciones compartidas siguen produciendo registros en las ejecuciones llamadoras.

4. Esos colaboradores pueden ver la salida de la acción en los registros del flujo llamador. **[CORRECT]**

   La advertencia documentada de acceso indirecto incluye registros visibles en los repositorios consumidores.

**Concept:** Exposición indirecta mediante registros de acciones compartidas

**Authored coaching hints:**

- Sigue la información hasta quienes pueden leer la ejecución consumidora.
- El acceso de ejecución y la visibilidad del repositorio son ajustes distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que os mantenedores devem revisar os logs antes de compartilhar uma ação privada com repositórios que têm colaboradores externos?

1. Compartilhar torna o repositório de origem publicamente pesquisável sem avisar.

   Compartilhar para Actions não muda a visibilidade do repositório para pública.

2. Colaboradores externos tornam-se automaticamente proprietários da empresa.

   Compartilhar ações não concede o papel de proprietário da empresa.

3. A ação não pode mais produzir logs após ser compartilhada.

   Ações compartilhadas continuam produzindo logs nas execuções chamadoras.

4. Esses colaboradores podem ver a saída da ação nos logs do fluxo chamador. **[CORRECT]**

   O aviso documentado de acesso indireto inclui logs visíveis nos repositórios consumidores.

**Concept:** Exposição indireta por logs de ações compartilhadas

**Authored coaching hints:**

- Acompanhe as informações até quem pode ler a execução consumidora.
- Acesso de execução e visibilidade do repositório são configurações diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization>

<!-- certification-coach-question:actions-153:01708df2ea31273e45b0d2d86d330c1390e4baf03e033be8aaf3ca20dbe98d5e -->
## Question 153: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-153`

**Content revision:** `01708df2ea31273e45b0d2d86d330c1390e4baf03e033be8aaf3ca20dbe98d5e`

**en review revision:** `51981aa6bcd21a3448cad12bcee16327774d2b089fa42236a1bef5973cfc61a0`
**es review revision:** `a6dc2c9e785f5f36fb48563ef6f385e423404596aef3a7f5e287ac45e199edd7`
**pt-BR review revision:** `6db921a6ada70eda185fca8da2277457c5dc382cfaeff7951ad7d0c4a114700a`

### English

An enterprise wants many repositories to invoke a centrally versioned multi-job build definition. Which distribution model fits?

1. Reusable workflow **[CORRECT]**

   Reusable workflows centralize job definitions behind a referenced version.

2. Starter workflow

   Starter workflows become independent copies after creation.

3. Composite action

   Composite actions encapsulate steps rather than a multi-job workflow definition.

4. Copied workflow snippet

   Pasted snippets do not retain a callable centrally versioned definition.

**Concept:** Centralized workflow distribution

**Authored coaching hints:**

- Compare a live version reference with a copied starting point.
- The unit to distribute includes jobs, not just steps.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa quiere que muchos repositorios invoquen una definición de compilación de varios trabajos versionada centralmente. ¿Qué modelo de distribución corresponde?

1. Flujo reutilizable **[CORRECT]**

   Los flujos reutilizables centralizan definiciones de trabajos mediante una versión referenciada.

2. Flujo inicial

   Los flujos iniciales se convierten en copias independientes tras su creación.

3. Acción compuesta

   Las acciones compuestas encapsulan pasos, no definiciones de flujo de varios trabajos.

4. Fragmento de flujo copiado

   Los fragmentos pegados no conservan una definición invocable versionada centralmente.

**Concept:** Distribución centralizada de flujos

**Authored coaching hints:**

- Compara una referencia de versión activa con un punto de partida copiado.
- La unidad distribuida incluye trabajos, no solo pasos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa quer que muitos repositórios invoquem uma definição de build com vários jobs versionada centralmente. Qual modelo de distribuição corresponde?

1. Fluxo de trabalho reutilizável **[CORRECT]**

   Fluxos reutilizáveis centralizam definições de jobs por meio de uma versão referenciada.

2. Fluxo inicial

   Fluxos iniciais tornam-se cópias independentes após a criação.

3. Ação composta

   Ações compostas encapsulam etapas, não definições de fluxo com vários jobs.

4. Trecho de fluxo copiado

   Trechos colados não mantêm uma definição invocável versionada centralmente.

**Concept:** Distribuição centralizada de fluxos

**Authored coaching hints:**

- Compare uma referência de versão ativa com um ponto de partida copiado.
- A unidade distribuída inclui jobs, não apenas etapas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-154:64ae8b9c992b9072daf18c85ef3226aa525aecb828167d684b213b9ee24aca98 -->
## Question 154: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-154`

**Content revision:** `64ae8b9c992b9072daf18c85ef3226aa525aecb828167d684b213b9ee24aca98`

**en review revision:** `40b4d00382aa14db551130ac24e4dc00b59cc07865c3471307218e25d6af4cae`
**es review revision:** `56a17846fbaf714d2d195434b431363c4a8797966281cec4907bfdd018c69c7f`
**pt-BR review revision:** `e0b30949106795395203f0ad98f638ed77b5a0ca642a18c1e5bf80079b2febab`

### English

In an organization's .github repository, which directory stores organization workflow templates?

1. .github/actions

   .github/actions is a common local action location, not the template discovery directory.

2. .github/workflows

   .github/workflows holds executable workflow definitions, not the organization template catalog.

3. workflow-templates **[CORRECT]**

   Organization templates and their properties files live in workflow-templates.

4. runner-images

   runner-images is not the organization's workflow template directory.

**Concept:** Organization template catalog location

**Authored coaching hints:**

- Templates are offered for creation rather than executed from the catalog.
- Check the path within the special organization repository.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En el repositorio .github de una organización, ¿qué directorio almacena las plantillas de flujo de la organización?

1. .github/actions

   .github/actions es una ubicación habitual de acciones locales, no el directorio de detección de plantillas.

2. .github/workflows

   .github/workflows contiene definiciones de flujo ejecutables, no el catálogo de plantillas de organización.

3. workflow-templates **[CORRECT]**

   Las plantillas de organización y sus archivos de propiedades están en workflow-templates.

4. runner-images

   runner-images no es el directorio de plantillas de flujo de la organización.

**Concept:** Ubicación del catálogo de plantillas de organización

**Authored coaching hints:**

- Las plantillas se ofrecen para crear flujos, no se ejecutan desde el catálogo.
- Comprueba la ruta dentro del repositorio especial de la organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No repositório .github de uma organização, qual diretório armazena os modelos de fluxo da organização?

1. .github/actions

   .github/actions é um local comum de ações locais, não o diretório de descoberta de modelos.

2. .github/workflows

   .github/workflows contém definições executáveis de fluxo, não o catálogo de modelos da organização.

3. workflow-templates **[CORRECT]**

   Modelos da organização e seus arquivos de propriedades ficam em workflow-templates.

4. runner-images

   runner-images não é o diretório de modelos de fluxo da organização.

**Concept:** Local do catálogo de modelos da organização

**Authored coaching hints:**

- Modelos são oferecidos para criar fluxos, não são executados a partir do catálogo.
- Confira o caminho dentro do repositório especial da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-155:288f12226afa5f481b6446ba7a11e8a64e8700fac494ba1e8dd9c2a35c65d938 -->
## Question 155: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-155`

**Content revision:** `288f12226afa5f481b6446ba7a11e8a64e8700fac494ba1e8dd9c2a35c65d938`

**en review revision:** `47a548dd8c171a63a8a79d0d2ad3685c2efa68b132831c9522294745a7992de3`
**es review revision:** `b9858a9358603b4169233bbb09fe5c5755f305ad17ac89d685763e638621a6ab`
**pt-BR review revision:** `f593abae83f35f51817f799e02bdc05fbf22ffdba5a54b82fb9f0dcd5c67d057`

### English

After a repository creates a workflow from an organization starter, what happens when the original starter is edited?

1. Every created workflow immediately receives the edit.

   There is no automatic update relationship between the template and its copies.

2. The created workflow automatically becomes a reusable workflow call.

   Creating from a template does not insert a later workflow\_call dependency.

3. The copy is disabled until the starter's owner republishes it.

   Editing a template does not disable workflows previously created from it.

4. The created workflow remains an independent copy. **[CORRECT]**

   A starter supplies a scaffold; later template changes do not synchronize existing copies.

**Concept:** Starter workflow independence

**Authored coaching hints:**

- Determine whether the consumer stored a copy or a reference.
- A shared creation experience is not necessarily ongoing central governance.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Después de que un repositorio cree un flujo a partir de uno inicial de la organización, ¿qué ocurre al editar el original?

1. Todos los flujos creados reciben la edición inmediatamente.

   No existe una relación de actualización automática entre la plantilla y sus copias.

2. El flujo creado se convierte automáticamente en una llamada a un flujo reutilizable.

   Crear desde una plantilla no inserta después una dependencia workflow\_call.

3. La copia queda deshabilitada hasta que el propietario del original lo publique de nuevo.

   Editar una plantilla no deshabilita flujos creados anteriormente a partir de ella.

4. El flujo creado sigue siendo una copia independiente. **[CORRECT]**

   Un flujo inicial proporciona una base; sus cambios posteriores no sincronizan copias existentes.

**Concept:** Independencia de flujos iniciales

**Authored coaching hints:**

- Determina si el consumidor guardó una copia o una referencia.
- Una experiencia de creación compartida no implica gobernanza central continua.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Depois que um repositório cria um fluxo a partir de um modelo inicial da organização, o que acontece quando o original é editado?

1. Todos os fluxos criados recebem a edição imediatamente.

   Não existe uma relação de atualização automática entre o modelo e suas cópias.

2. O fluxo criado torna-se automaticamente uma chamada a um fluxo reutilizável.

   Criar a partir de um modelo não insere depois uma dependência workflow\_call.

3. A cópia fica desabilitada até o proprietário do original publicá-lo novamente.

   Editar um modelo não desabilita fluxos criados anteriormente a partir dele.

4. O fluxo criado continua sendo uma cópia independente. **[CORRECT]**

   Um modelo inicial fornece uma base; alterações posteriores não sincronizam cópias existentes.

**Concept:** Independência de fluxos iniciais

**Authored coaching hints:**

- Determine se o consumidor armazenou uma cópia ou uma referência.
- Uma experiência de criação compartilhada não implica governança central contínua.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-156:78c61af5ab4db7f677bf17e6912a2a5db28ded5e77ed5b3179da26670a17ac3b -->
## Question 156: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-156`

**Content revision:** `78c61af5ab4db7f677bf17e6912a2a5db28ded5e77ed5b3179da26670a17ac3b`

**en review revision:** `d345b9f1036cf784704d8d2751d69bdb44ca9f48dba989a3fffa49aaa4394386`
**es review revision:** `3f2df6f87e5f3cc8859727ce9ef938f3c284b1dae55761e0638fcf0dd771b09e`
**pt-BR review revision:** `990c2a23bcc7e90ef256e8eef79ead19a2f6054768e70414ee146531d46caefc`

### English

In GitHub Enterprise Cloud, which runner group policy can limit use to approved workflow files and refs, beyond repository access?

1. Custom capability labels

   Labels match runners but do not authorize workflow file identities.

2. Workflow log retention

   Retention controls stored logs, not which workflows may use a runner group.

3. Selected workflows access **[CORRECT]**

   Workflow restrictions can name approved workflow paths and versions for the group.

4. Artifact compression level

   Compression changes artifact packaging, not runner group eligibility.

**Concept:** Runner group workflow authorization

**Authored coaching hints:**

- A repository can contain both approved and unapproved workflow definitions.
- Consider the difference between selecting hardware and authorizing executable definitions.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, ¿qué política de grupo de runners puede limitar el uso a archivos de flujo y referencias aprobados, además del acceso de repositorios?

1. Etiquetas de capacidades personalizadas

   Las etiquetas seleccionan runners, pero no autorizan identidades de archivos de flujo.

2. Retención de registros de flujos

   La retención controla los registros guardados, no qué flujos pueden usar un grupo.

3. Acceso de flujos seleccionados **[CORRECT]**

   Las restricciones de flujo pueden indicar rutas y versiones de flujos aprobadas para el grupo.

4. Nivel de compresión de artefactos

   La compresión cambia el empaquetado de artefactos, no el acceso al grupo de runners.

**Concept:** Autorización de flujos en grupos de runners

**Authored coaching hints:**

- Un repositorio puede contener definiciones de flujo aprobadas y no aprobadas.
- Considera la diferencia entre seleccionar hardware y autorizar definiciones ejecutables.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, qual política de grupo de runners pode limitar o uso a arquivos de fluxo e referências aprovados, além do acesso de repositórios?

1. Rótulos de capacidades personalizados

   Rótulos selecionam runners, mas não autorizam identidades de arquivos de fluxo.

2. Retenção de logs de fluxos

   Retenção controla logs armazenados, não quais fluxos podem usar um grupo.

3. Acesso de fluxos selecionados **[CORRECT]**

   Restrições de fluxo podem indicar caminhos e versões de fluxos aprovados para o grupo.

4. Nível de compressão de artefatos

   Compressão altera o empacotamento de artefatos, não o acesso ao grupo de runners.

**Concept:** Autorização de fluxos em grupos de runners

**Authored coaching hints:**

- Um repositório pode conter definições de fluxo aprovadas e não aprovadas.
- Considere a diferença entre selecionar hardware e autorizar definições executáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-157:f175a851ef257f4bb2401eba50ffaef62bfbfc56c5ffd71ae8774d7855ce8ee0 -->
## Question 157: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-157`

**Content revision:** `f175a851ef257f4bb2401eba50ffaef62bfbfc56c5ffd71ae8774d7855ce8ee0`

**en review revision:** `88f192cae249252faaedb1ecf2069287ea7f533dfc776d36aa541b586fa99cd0`
**es review revision:** `bd7032ebb7b5260735391d5fda36b77a00637ef57cabefd53b59e01ea8f978b3`
**pt-BR review revision:** `9194e11f805460a409cc59637c95be0bec685da9bfd7e4493c0c890c2506688b`

### English

Which self-hosted runner registration is dedicated to one repository rather than shared across organization repositories?

1. Organization-level registration

   Organization-level runners may serve multiple repositories under access policies.

2. Repository-level registration **[CORRECT]**

   Repository-level runners serve the repository where they are registered.

3. Enterprise-level registration

   Enterprise-level runners can span organizations and are not inherently single-repository.

4. A workflow run name

   A run name labels an execution and does not register a runner.

**Concept:** Repository runner ownership scope

**Authored coaching hints:**

- Registration scope and runs-on selection are different decisions.
- Consider which administrative object owns the runner.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué registro de runner autohospedado se dedica a un repositorio en lugar de compartirse entre repositorios de la organización?

1. Registro a nivel de organización

   Los runners de organización pueden servir a varios repositorios según las políticas de acceso.

2. Registro a nivel de repositorio **[CORRECT]**

   Los runners de repositorio sirven al repositorio donde se registran.

3. Registro a nivel de empresa

   Los runners de empresa pueden abarcar organizaciones y no están limitados a un repositorio por definición.

4. Un nombre de ejecución de flujo

   Un nombre de ejecución etiqueta una ejecución y no registra un runner.

**Concept:** Ámbito de propiedad de runners de repositorio

**Authored coaching hints:**

- El ámbito de registro y la selección runs-on son decisiones diferentes.
- Considera qué objeto administrativo es propietario del runner.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual registro de runner auto-hospedado é dedicado a um repositório em vez de compartilhado entre repositórios da organização?

1. Registro no nível da organização

   Runners de organização podem atender vários repositórios conforme políticas de acesso.

2. Registro no nível do repositório **[CORRECT]**

   Runners de repositório atendem ao repositório no qual são registrados.

3. Registro no nível da empresa

   Runners de empresa podem abranger organizações e não são limitados a um repositório por definição.

4. Um nome de execução de fluxo

   Um nome de execução rotula uma execução e não registra um runner.

**Concept:** Escopo de propriedade de runners de repositório

**Authored coaching hints:**

- O escopo de registro e a seleção runs-on são decisões diferentes.
- Considere qual objeto administrativo é proprietário do runner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-158:4dd2b003c4d374b39c1ac2e8fd6df973a32d0c2cea63c76e01d42cf715b1ab36 -->
## Question 158: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-158`

**Content revision:** `4dd2b003c4d374b39c1ac2e8fd6df973a32d0c2cea63c76e01d42cf715b1ab36`

**en review revision:** `c7a94e59b7abbb7e1ce399141fda5621a0dc0b4b19eea26c51bf5945f2163353`
**es review revision:** `18d75604da22179eeec477325b97bd52c074d4ce962938c339fac0091c1990eb`
**pt-BR review revision:** `1f12199f366d573d53bc001e2811b8532308504a74b3961ca58e5e9b56f91f9e`

### English

After extracting the Linux self-hosted runner application, which script registers it with GitHub using the supplied URL and registration token?

1. ./config.sh **[CORRECT]**

   config.sh configures the runner's GitHub registration before normal execution.

2. ./run.sh

   run.sh starts the configured runner listener rather than registering a new runner.

3. ./svc.sh

   svc.sh manages service installation and execution after runner configuration.

4. ./env.sh

   env.sh is not the registration command shown in the runner setup instructions.

**Concept:** Linux runner registration script

**Authored coaching hints:**

- Separate registration, foreground execution, and service management.
- The token associates the application with an administrative scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras extraer la aplicación de runner autohospedado Linux, ¿qué script la registra en GitHub usando la URL y el token de registro proporcionados?

1. ./config.sh **[CORRECT]**

   config.sh configura el registro del runner en GitHub antes de la ejecución normal.

2. ./run.sh

   run.sh inicia el listener configurado del runner, no registra uno nuevo.

3. ./svc.sh

   svc.sh gestiona la instalación y ejecución del servicio después de configurar el runner.

4. ./env.sh

   env.sh no es el comando de registro indicado en las instrucciones de configuración.

**Concept:** Script de registro de runners Linux

**Authored coaching hints:**

- Distingue registro, ejecución en primer plano y gestión del servicio.
- El token asocia la aplicación con un ámbito administrativo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após extrair o aplicativo de runner auto-hospedado Linux, qual script o registra no GitHub usando a URL e o token de registro fornecidos?

1. ./config.sh **[CORRECT]**

   config.sh configura o registro do runner no GitHub antes da execução normal.

2. ./run.sh

   run.sh inicia o listener configurado do runner, não registra um novo.

3. ./svc.sh

   svc.sh gerencia a instalação e execução do serviço após configurar o runner.

4. ./env.sh

   env.sh não é o comando de registro indicado nas instruções de configuração.

**Concept:** Script de registro de runners Linux

**Authored coaching hints:**

- Diferencie registro, execução em primeiro plano e gerenciamento do serviço.
- O token associa o aplicativo a um escopo administrativo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners>

<!-- certification-coach-question:actions-159:f40143f798499b215668edc2b86f1acb8cde2b4e89e862e406caf9a99f9d8612 -->
## Question 159: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-159`

**Content revision:** `f40143f798499b215668edc2b86f1acb8cde2b4e89e862e406caf9a99f9d8612`

**en review revision:** `cef7c5ff990e93aab7ea9648a08ccdc7a1415b6c6ba4812e98cf24ae3f7180c0`
**es review revision:** `c075580d5bf33653ed71abeb6a0028489ffa33b1d244abbaa44a17c743b296f9`
**pt-BR review revision:** `401a4dd3f3ba3454a3215a9cb9a917ccb0291bc67a6e0ce3f92bc3c283c56fd8`

### English

Which command installs an already configured Linux self-hosted runner as a service?

1. sudo ./svc.sh install **[CORRECT]**

   svc.sh install installs the service; it can then be started with svc.sh start.

2. ./config.sh remove

   config.sh remove unregisters the runner rather than installing a service.

3. ./run.sh

   run.sh runs the application interactively rather than installing a service.

4. sudo ./svc.sh status

   svc.sh status inspects the service state without installing it.

**Concept:** Linux runner service installation

**Authored coaching hints:**

- A registered application does not automatically imply a running system service.
- Compare installation verbs with inspection and execution verbs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando instala como servicio un runner autohospedado Linux ya configurado?

1. sudo ./svc.sh install **[CORRECT]**

   svc.sh install instala el servicio; después puede iniciarse con svc.sh start.

2. ./config.sh remove

   config.sh remove elimina el registro del runner en lugar de instalar un servicio.

3. ./run.sh

   run.sh ejecuta la aplicación de forma interactiva en lugar de instalar un servicio.

4. sudo ./svc.sh status

   svc.sh status consulta el estado del servicio sin instalarlo.

**Concept:** Instalación del servicio de runner Linux

**Authored coaching hints:**

- Una aplicación registrada no implica automáticamente un servicio de sistema activo.
- Compara los verbos de instalación con los de consulta y ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando instala como serviço um runner auto-hospedado Linux já configurado?

1. sudo ./svc.sh install **[CORRECT]**

   svc.sh install instala o serviço; depois ele pode ser iniciado com svc.sh start.

2. ./config.sh remove

   config.sh remove remove o registro do runner em vez de instalar um serviço.

3. ./run.sh

   run.sh executa o aplicativo de forma interativa em vez de instalar um serviço.

4. sudo ./svc.sh status

   svc.sh status consulta o estado do serviço sem instalá-lo.

**Concept:** Instalação do serviço do runner Linux

**Authored coaching hints:**

- Um aplicativo registrado não implica automaticamente um serviço de sistema ativo.
- Compare verbos de instalação com os de consulta e execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application>

<!-- certification-coach-question:actions-160:99df741e15e664dce1be0b81334729b81895e855b74e35e8a4ffb660ec68779c -->
## Question 160: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-160`

**Content revision:** `99df741e15e664dce1be0b81334729b81895e855b74e35e8a4ffb660ec68779c`

**en review revision:** `ae0518fabeb23d17d9771979fa9aa219cad97624eac9f0c3e60e9254daaeb5e7`
**es review revision:** `091ee12dbba33eee589e6c50256eee0538a5948d9d9667f2f86e8ada3a12b1ac`
**pt-BR review revision:** `025cd556feb83bb960bb713be42638989a646a15eba32f6590bbdd41ae9c5fc9`

### English

For a self-hosted runner connecting to GitHub.com, which basic network direction and protocol are required?

1. Inbound HTTPS from GitHub to the runner listener

   The runner initiates the connection; GitHub does not require this inbound listener path.

2. Outbound unencrypted HTTP to GitHub job services

   The documented communication protocol is encrypted HTTPS, not unencrypted HTTP.

3. Outbound HTTPS to required GitHub services **[CORRECT]**

   The runner initiates HTTPS connections; required destinations depend on features used.

4. Inbound SSH from GitHub to the runner host

   GitHub does not deliver jobs through an inbound SSH session to the host.

**Concept:** Self-hosted runner network initiation

**Authored coaching hints:**

- Identify which process initiates the connection.
- Basic connectivity and feature-specific download destinations are both relevant.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para un runner autohospedado que se conecta a GitHub.com, ¿qué dirección de red y protocolo básicos se requieren?

1. HTTPS entrante desde GitHub hacia el listener del runner

   El runner inicia la conexión; GitHub no requiere esa conexión entrante al listener.

2. HTTP saliente sin cifrar hacia servicios de trabajos de GitHub

   El protocolo de comunicación documentado es HTTPS cifrado, no HTTP sin cifrar.

3. HTTPS saliente hacia los servicios requeridos de GitHub **[CORRECT]**

   El runner inicia conexiones HTTPS; los destinos requeridos dependen de las funciones usadas.

4. SSH entrante desde GitHub hacia el host del runner

   GitHub no entrega trabajos mediante una sesión SSH entrante al host.

**Concept:** Inicio de conexiones de runners autohospedados

**Authored coaching hints:**

- Identifica qué proceso inicia la conexión.
- Importan tanto la conectividad básica como los destinos de descarga de cada función.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para um runner auto-hospedado que se conecta ao GitHub.com, qual direção de rede e protocolo básicos são necessários?

1. HTTPS de entrada do GitHub para o listener do runner

   O runner inicia a conexão; o GitHub não exige essa conexão de entrada ao listener.

2. HTTP de saída sem criptografia para serviços de jobs do GitHub

   O protocolo de comunicação documentado é HTTPS criptografado, não HTTP sem criptografia.

3. HTTPS de saída para os serviços necessários do GitHub **[CORRECT]**

   O runner inicia conexões HTTPS; os destinos necessários dependem dos recursos usados.

4. SSH de entrada do GitHub para o host do runner

   O GitHub não entrega jobs por uma sessão SSH de entrada no host.

**Concept:** Início de conexões de runners auto-hospedados

**Authored coaching hints:**

- Identifique qual processo inicia a conexão.
- Tanto a conectividade básica quanto os destinos de download de cada recurso são relevantes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-161:9f9aae27b2db16a491e8080907927202bcd9d9ba462cbd0444f11ad8c7871ed7 -->
## Question 161: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-161`

**Content revision:** `9f9aae27b2db16a491e8080907927202bcd9d9ba462cbd0444f11ad8c7871ed7`

**en review revision:** `12d254a1b79b33699982cf0d2eb6b6e71b385512f103d0b6ac317b112d0491e8`
**es review revision:** `d06f1b52c5cf26af3bfa5a2ea2013e2c1249f33d4bc679672886d9323178945a`
**pt-BR review revision:** `99dd20fb364f72c8dacdbbf778630fd4a506d84a62fb0f23900c5d4f91fb90ad`

### English

On Linux, which runner command checks access to required GitHub network services? URL and PAT are placeholders.

1. ./config.sh --remove --url URL --pat PAT

   Removing registration is not a network diagnostic.

2. ./config.sh --check --url URL --pat PAT **[CORRECT]**

   The documented connectivity check reports PASS or FAIL for required services.

3. ./svc.sh status

   Service status does not test all required GitHub network endpoints.

4. ./run.sh --version

   A version query does not perform the documented connectivity checks.

**Concept:** Runner connectivity diagnostic command

**Authored coaching hints:**

- A listener can be installed but unable to reach a required service.
- Choose an active network test rather than a local process inspection.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En Linux, ¿qué comando del runner comprueba el acceso a los servicios de red requeridos de GitHub? URL y PAT son marcadores de posición.

1. ./config.sh --remove --url URL --pat PAT

   Eliminar el registro no es un diagnóstico de red.

2. ./config.sh --check --url URL --pat PAT **[CORRECT]**

   La comprobación de conectividad documentada informa PASS o FAIL para los servicios requeridos.

3. ./svc.sh status

   El estado del servicio no prueba todos los destinos de red requeridos de GitHub.

4. ./run.sh --version

   Consultar una versión no realiza las comprobaciones de conectividad documentadas.

**Concept:** Comando de diagnóstico de conectividad del runner

**Authored coaching hints:**

- Un listener puede estar instalado sin poder alcanzar un servicio requerido.
- Elige una prueba activa de red, no una consulta de proceso local.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No Linux, qual comando do runner verifica acesso aos serviços de rede necessários do GitHub? URL e PAT são marcadores de posição.

1. ./config.sh --remove --url URL --pat PAT

   Remover o registro não é um diagnóstico de rede.

2. ./config.sh --check --url URL --pat PAT **[CORRECT]**

   A verificação de conectividade documentada informa PASS ou FAIL para os serviços necessários.

3. ./svc.sh status

   O status do serviço não testa todos os destinos de rede necessários do GitHub.

4. ./run.sh --version

   Consultar a versão não realiza as verificações de conectividade documentadas.

**Concept:** Comando de diagnóstico de conectividade do runner

**Authored coaching hints:**

- Um listener pode estar instalado sem conseguir alcançar um serviço necessário.
- Escolha um teste ativo de rede, não uma consulta de processo local.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-162:792fd52ed89cd345292cb3934779294076c06641f770da917b17a31110d85ade -->
## Question 162: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-162`

**Content revision:** `792fd52ed89cd345292cb3934779294076c06641f770da917b17a31110d85ade`

**en review revision:** `c70c15be4be6dc2ed71a483fdd22ae9c68dd9ce1f2481b2dabe2f14c526651e5`
**es review revision:** `522922b6f1086211106a2606f055f22ebfef086b6d6a67365b3ca392d8db53b6`
**pt-BR review revision:** `50ac57267ba875a8d6f69e878b489830193f203aa5c945958b19711256bc7d9b`

### English

Which files record the self-hosted runner application's startup and listener activity?

1. \_diag/Worker\_\*.log

   Worker\_ logs contain detailed execution information for individual jobs.

2. \_work/\*/README.md

   Checked-out README files are project documentation, not listener diagnostics.

3. .github/workflows/\*.yml

   Workflow YAML configures jobs rather than records runner startup activity.

4. \_diag/Runner\_\*.log **[CORRECT]**

   Runner\_ logs describe the runner application's own activity.

**Concept:** Runner application diagnostic logs

**Authored coaching hints:**

- Separate the long-lived listener from a worker processing a job.
- Configuration files and diagnostic output serve different purposes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivos registran el inicio y la actividad del listener de la aplicación de runner autohospedado?

1. \_diag/Worker\_\*.log

   Los registros Worker\_ contienen detalles de ejecución de trabajos individuales.

2. \_work/\*/README.md

   Los README obtenidos son documentación del proyecto, no diagnósticos del listener.

3. .github/workflows/\*.yml

   El YAML de flujo configura trabajos, no registra el inicio del runner.

4. \_diag/Runner\_\*.log **[CORRECT]**

   Los registros Runner\_ describen la actividad de la propia aplicación del runner.

**Concept:** Registros de diagnóstico de la aplicación del runner

**Authored coaching hints:**

- Distingue el listener persistente del proceso que ejecuta un trabajo.
- Los archivos de configuración y los diagnósticos tienen fines distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais arquivos registram a inicialização e a atividade do listener do aplicativo de runner auto-hospedado?

1. \_diag/Worker\_\*.log

   Logs Worker\_ contêm detalhes da execução de jobs individuais.

2. \_work/\*/README.md

   Arquivos README obtidos são documentação do projeto, não diagnósticos do listener.

3. .github/workflows/\*.yml

   O YAML do fluxo configura jobs, não registra a inicialização do runner.

4. \_diag/Runner\_\*.log **[CORRECT]**

   Logs Runner\_ descrevem a atividade do próprio aplicativo do runner.

**Concept:** Logs de diagnóstico do aplicativo do runner

**Authored coaching hints:**

- Diferencie o listener persistente do processo que executa um job.
- Arquivos de configuração e diagnósticos têm finalidades diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-163:9733d253e4228fc4166042cd961a2474e21b03120b393e7c0c20aea7ebc2c4ac -->
## Question 163: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-163`

**Content revision:** `9733d253e4228fc4166042cd961a2474e21b03120b393e7c0c20aea7ebc2c4ac`

**en review revision:** `576c7b583f58db24089891d9453ba1f7ca860cafd4013f878b92aff4ae6d2d4e`
**es review revision:** `fe6388fc2c81b5ca45b461211481473428975713a0e84bb193e35eab240e1bf3`
**pt-BR review revision:** `aab53b024f85b79911ee1b14f0b61b3ee194443e1d08bb9c1ecaa9374dd16ff1`

### English

Which local self-hosted runner logs contain detailed information about an individual job's execution?

1. \_diag/Runner\_\*.log

   Runner\_ logs focus on application/listener activity rather than detailed job execution.

2. .service

   .service identifies service configuration rather than a job execution trace.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Worker\_ logs are generated for jobs processed by the runner.

4. action.yml

   action.yml defines action metadata instead of recording job diagnostics.

**Concept:** Runner job worker diagnostics

**Authored coaching hints:**

- Choose the log producer closest to the failing execution.
- A service's existence does not explain an individual command failure.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué registros locales del runner autohospedado contienen detalles de la ejecución de un trabajo individual?

1. \_diag/Runner\_\*.log

   Los registros Runner\_ se centran en la aplicación y el listener, no en la ejecución detallada del trabajo.

2. .service

   .service identifica la configuración del servicio, no una traza de ejecución de trabajo.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Los registros Worker\_ se generan para los trabajos procesados por el runner.

4. action.yml

   action.yml define metadatos de acción en lugar de registrar diagnósticos de trabajo.

**Concept:** Diagnósticos de procesos de trabajo del runner

**Authored coaching hints:**

- Elige el productor de registros más cercano a la ejecución fallida.
- La existencia de un servicio no explica el fallo de un comando individual.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais logs locais do runner auto-hospedado contêm detalhes da execução de um job individual?

1. \_diag/Runner\_\*.log

   Logs Runner\_ focam o aplicativo e o listener, não a execução detalhada do job.

2. .service

   .service identifica a configuração do serviço, não um rastreamento de execução de job.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Logs Worker\_ são gerados para os jobs processados pelo runner.

4. action.yml

   action.yml define metadados da ação em vez de registrar diagnósticos do job.

**Concept:** Diagnósticos de processos de trabalho do runner

**Authored coaching hints:**

- Escolha o produtor de logs mais próximo da execução com falha.
- A existência de um serviço não explica a falha de um comando individual.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-164:6c7a4d116c74557ccf6fd9377f0c8ba348e28222d68eed578e9edbd1a8bcce54 -->
## Question 164: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-164`

**Content revision:** `6c7a4d116c74557ccf6fd9377f0c8ba348e28222d68eed578e9edbd1a8bcce54`

**en review revision:** `381feec3beb101dca1a90b7353f9adccbdc058226c9bfc79369d96ae1a613a6e`
**es review revision:** `2963f66f4fb2a5142ab00240c310d264a984f49dbdccc353e51af2e191f686ba`
**pt-BR review revision:** `a8ee7456a1be881d1733553b6805457b49bacda253f00de89c3fd9fed885a2c4`

### English

Which maintenance remains the operator's responsibility when the self-hosted runner application updates automatically?

1. Operating system and installed tool updates **[CORRECT]**

   Runner application updates do not patch the host OS or unrelated tools.

2. Only the runner application's automatic updates

   The question already gives application auto-updates; these do not maintain the host platform.

3. Only new workflow YAML, with no machine patching

   Changing workflow definitions does not patch the execution machine.

4. Only container tags, with no host OS patching

   Updated containers do not eliminate host operating-system maintenance.

**Concept:** Self-hosted platform maintenance ownership

**Authored coaching hints:**

- An agent application and its host operating system have separate lifecycles.
- Consider which infrastructure the organization actually administers.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mantenimiento sigue siendo responsabilidad del operador cuando la aplicación del runner autohospedado se actualiza automáticamente?

1. Actualizaciones del sistema operativo y herramientas instaladas **[CORRECT]**

   Las actualizaciones de la aplicación del runner no corrigen el sistema operativo ni otras herramientas.

2. Solo las actualizaciones automáticas de la aplicación del runner

   La pregunta ya incluye actualizaciones automáticas de la aplicación; no mantienen la plataforma anfitriona.

3. Solo YAML de flujo nuevo, sin parches de la máquina

   Cambiar las definiciones de flujo no aplica parches a la máquina de ejecución.

4. Solo etiquetas de contenedor, sin parches del sistema anfitrión

   Los contenedores actualizados no eliminan el mantenimiento del sistema operativo anfitrión.

**Concept:** Responsabilidad de mantenimiento de plataformas autohospedadas

**Authored coaching hints:**

- Una aplicación agente y su sistema operativo anfitrión tienen ciclos de vida distintos.
- Considera qué infraestructura administra realmente la organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual manutenção continua sendo responsabilidade do operador quando o aplicativo do runner auto-hospedado se atualiza automaticamente?

1. Atualizações do sistema operacional e ferramentas instaladas **[CORRECT]**

   Atualizações do aplicativo do runner não corrigem o sistema operacional nem outras ferramentas.

2. Apenas as atualizações automáticas do aplicativo do runner

   A pergunta já inclui atualizações automáticas do aplicativo; elas não mantêm a plataforma host.

3. Apenas novo YAML do fluxo, sem atualizações da máquina

   Alterar definições de fluxo não atualiza a máquina de execução.

4. Apenas tags de contêiner, sem atualizações do sistema host

   Contêineres atualizados não eliminam a manutenção do sistema operacional host.

**Concept:** Responsabilidade pela manutenção de plataformas auto-hospedadas

**Authored coaching hints:**

- Um aplicativo agente e seu sistema operacional host têm ciclos de vida diferentes.
- Considere qual infraestrutura a organização realmente administra.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-165:1387c9b53484be4561a25cf02b49c1eebbcdcf0e6aaf411b6d27ca78ce2ab603 -->
## Question 165: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-165`

**Content revision:** `1387c9b53484be4561a25cf02b49c1eebbcdcf0e6aaf411b6d27ca78ce2ab603`

**en review revision:** `a9418ce8c989a510381a8d2c2f34dd07b3279e9d43dd3aeaf41987068a07ecd1`
**es review revision:** `4fd7743432ecede3ead0d44926a7f173df5f45488950a91dbbf9ece21d364880`
**pt-BR review revision:** `7a7ee51d571ded7a1e7a7995dbaabf6bc12f2eddf108b9482bee02609eb1822e`

### English

What does registering a self-hosted runner with --ephemeral change?

1. GitHub automatically deletes every file on its host disk.

   Deregistration is not disk sanitization or machine destruction.

2. GitHub guarantees it can run only trusted source code.

   Ephemeral mode does not turn untrusted code into trusted code.

3. GitHub installs every required operating system patch.

   OS patching remains an operator task on self-hosted infrastructure.

4. GitHub deregisters it after it processes one job. **[CORRECT]**

   Ephemeral registration is one-job registration; host cleanup still needs orchestration.

**Concept:** Ephemeral runner registration semantics

**Authored coaching hints:**

- Differentiate GitHub's registration record from the underlying machine.
- A job-count lifecycle does not establish a trust boundary by itself.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué cambia al registrar un runner autohospedado con --ephemeral?

1. GitHub elimina automáticamente todos los archivos de su disco anfitrión.

   Eliminar el registro no es sanear el disco ni destruir la máquina.

2. GitHub garantiza que solo pueda ejecutar código de origen confiable.

   El modo efímero no convierte código no confiable en confiable.

3. GitHub instala todas las actualizaciones requeridas del sistema operativo.

   Actualizar el sistema operativo sigue siendo tarea del operador en infraestructura autohospedada.

4. GitHub elimina su registro después de que procese un trabajo. **[CORRECT]**

   El registro efímero es para un trabajo; la limpieza del host sigue requiriendo orquestación.

**Concept:** Semántica de registro de runners efímeros

**Authored coaching hints:**

- Diferencia el registro de GitHub de la máquina subyacente.
- Un ciclo de vida por número de trabajos no establece por sí solo un límite de confianza.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que muda ao registrar um runner auto-hospedado com --ephemeral?

1. O GitHub exclui automaticamente todos os arquivos do disco do host.

   Remover o registro não é sanitizar o disco nem destruir a máquina.

2. O GitHub garante que ele só possa executar código de origem confiável.

   O modo efêmero não transforma código não confiável em confiável.

3. O GitHub instala todas as atualizações necessárias do sistema operacional.

   Atualizar o sistema operacional continua sendo tarefa do operador em infraestrutura auto-hospedada.

4. O GitHub remove seu registro depois que ele processa um job. **[CORRECT]**

   O registro efêmero é para um job; a limpeza do host continua exigindo orquestração.

**Concept:** Semântica de registro de runners efêmeros

**Authored coaching hints:**

- Diferencie o registro do GitHub da máquina subjacente.
- Um ciclo de vida por número de jobs não estabelece, sozinho, um limite de confiança.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-166:085b10ee662ae3b8f0400ad07e2bd540d1afb2b309ac5a3622934cd8807994fb -->
## Question 166: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-166`

**Content revision:** `085b10ee662ae3b8f0400ad07e2bd540d1afb2b309ac5a3622934cd8807994fb`

**en review revision:** `608cc61a6056cd4cc29100bd6408ecb2a2eb9ee339a53aab49568aa232a28cdb`
**es review revision:** `c02d629347b8c2124662a5d311a69243557dcafcd3eaaa8a5d3e33ff4025d250`
**pt-BR review revision:** `c5242f09a903daa31b55a2519f99ca00fd3a7497f45a2e20d1cc6e5df8132c3e`

### English

An autoscaler destroys ephemeral runner machines after each job. Where should runner application diagnostic logs be retained?

1. Only in the machine's local \_diag directory

   Local diagnostic files disappear when the machine storage is destroyed.

2. In external log storage before the machine is destroyed **[CORRECT]**

   GitHub recommends forwarding and preserving ephemeral runner logs externally.

3. Only in the image used to create the next machine

   A base image does not automatically capture logs from later job executions.

4. Only in GitHub's automatically uploaded workflow logs

   Workflow logs do not automatically preserve every runner application diagnostic file.

**Concept:** Ephemeral runner diagnostic retention

**Authored coaching hints:**

- The evidence must outlive the resource being investigated.
- Workflow logs and runner application logs are distinct diagnostic streams.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un escalador destruye las máquinas de runners efímeros tras cada trabajo. ¿Dónde deben conservarse los registros de diagnóstico de la aplicación?

1. Solo en el directorio \_diag local de la máquina

   Los archivos locales de diagnóstico desaparecen al destruir el almacenamiento de la máquina.

2. En almacenamiento externo de registros antes de destruir la máquina **[CORRECT]**

   GitHub recomienda reenviar y conservar externamente los registros de runners efímeros.

3. Solo en la imagen usada para crear la próxima máquina

   Una imagen base no captura automáticamente registros de ejecuciones posteriores.

4. Solo en los registros de flujo cargados automáticamente por GitHub

   Los registros de flujo no conservan automáticamente todos los archivos de diagnóstico del runner.

**Concept:** Conservación de diagnósticos de runners efímeros

**Authored coaching hints:**

- Las pruebas deben sobrevivir al recurso investigado.
- Los registros de flujo y de aplicación del runner son fuentes de diagnóstico diferentes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um escalador destrói as máquinas de runners efêmeros após cada job. Onde os logs de diagnóstico do aplicativo devem ser mantidos?

1. Apenas no diretório \_diag local da máquina

   Arquivos locais de diagnóstico desaparecem ao destruir o armazenamento da máquina.

2. Em armazenamento externo de logs antes de destruir a máquina **[CORRECT]**

   O GitHub recomenda encaminhar e preservar externamente os logs de runners efêmeros.

3. Apenas na imagem usada para criar a próxima máquina

   Uma imagem base não captura automaticamente logs de execuções posteriores.

4. Apenas nos logs do fluxo enviados automaticamente pelo GitHub

   Logs do fluxo não preservam automaticamente todos os arquivos de diagnóstico do runner.

**Concept:** Retenção de diagnósticos de runners efêmeros

**Authored coaching hints:**

- As evidências precisam sobreviver ao recurso investigado.
- Logs do fluxo e do aplicativo do runner são fontes de diagnóstico diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-167:43be29b94f4db99d52f145499f0403c21ce89fb0ab938e6793fb47c625769419 -->
## Question 167: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-167`

**Content revision:** `43be29b94f4db99d52f145499f0403c21ce89fb0ab938e6793fb47c625769419`

**en review revision:** `2cab3a0c738742b686dbbd48bc6c6d990863f9ba56351f5fea0af128f52f45cd`
**es review revision:** `a01fb42dd01ea378d11a083db57626433ba4fa56b6ab7854c5dc69a34ad905b1`
**pt-BR review revision:** `12ef40a458cff2c4cff6511044cb5433f5ad3876d96ee01ea08bf5206fc18b09`

### English

Why is a persistent self-hosted runner risky for pull requests from forks of a public repository?

1. A normal checkout guarantees host cleanup between jobs.

   Checkout cleanup is not whole-host isolation or process sanitization.

2. Untrusted jobs can leave changes that affect later jobs. **[CORRECT]**

   Persistent machines may retain malicious processes or modifications between jobs.

3. Runner labels automatically isolate each job in a new VM.

   Labels route jobs and do not provide VM isolation.

4. A read-only API token prevents writes to the host filesystem.

   API permissions do not determine the runner process's local filesystem privileges.

**Concept:** Persistent runner cross-job trust

**Authored coaching hints:**

- Think about what survives when a job process exits.
- A scheduling feature is not equivalent to a disposable isolation boundary.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué es arriesgado un runner autohospedado persistente para pull requests de bifurcaciones de un repositorio público?

1. Un checkout normal garantiza la limpieza del host entre trabajos.

   La limpieza de checkout no es aislamiento de todo el host ni saneamiento de procesos.

2. Los trabajos no confiables pueden dejar cambios que afecten a trabajos posteriores. **[CORRECT]**

   Las máquinas persistentes pueden conservar procesos maliciosos o modificaciones entre trabajos.

3. Las etiquetas del runner aíslan automáticamente cada trabajo en una VM nueva.

   Las etiquetas encaminan trabajos y no proporcionan aislamiento de VM.

4. Un token API de solo lectura impide escribir en el sistema de archivos anfitrión.

   Los permisos API no determinan los privilegios locales del proceso del runner.

**Concept:** Confianza entre trabajos en runners persistentes

**Authored coaching hints:**

- Piensa en qué persiste cuando termina el proceso de un trabajo.
- Una función de planificación no equivale a un límite de aislamiento desechable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que um runner auto-hospedado persistente é arriscado para pull requests de forks de um repositório público?

1. Um checkout normal garante a limpeza do host entre jobs.

   A limpeza do checkout não é isolamento de todo o host nem sanitização de processos.

2. Jobs não confiáveis podem deixar alterações que afetem jobs posteriores. **[CORRECT]**

   Máquinas persistentes podem manter processos maliciosos ou modificações entre jobs.

3. Rótulos do runner isolam automaticamente cada job em uma VM nova.

   Rótulos direcionam jobs e não fornecem isolamento de VM.

4. Um token de API somente leitura impede escritas no sistema de arquivos host.

   Permissões da API não determinam os privilégios locais do processo do runner.

**Concept:** Confiança entre jobs em runners persistentes

**Authored coaching hints:**

- Pense no que persiste quando o processo de um job termina.
- Um recurso de agendamento não equivale a um limite de isolamento descartável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-168:6a385a05fc22aed54dd139936aefd54459f7ea03eb9301d352242d8270872618 -->
## Question 168: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-168`

**Content revision:** `6a385a05fc22aed54dd139936aefd54459f7ea03eb9301d352242d8270872618`

**en review revision:** `0a34551122cb3670ed1882dc9980f4d94c81190e181b1a086f03c5983f682cdb`
**es review revision:** `82073ab1eb76a1301e4dc627cdb490217f2eb48148a43b98d54bfd47118db3ee`
**pt-BR review revision:** `2b7847874f4f14198afbbefc6dc9912250d103956660a0ffeeeb58491d49211f`

### English

An operator adds the label cuda to a self-hosted runner. What does that label itself do?

1. Installs a matching CUDA toolkit on the host

   Assigning a custom label does not install software.

2. Verifies a working GPU driver on the host

   GitHub does not validate custom labels against hardware or driver availability.

3. Changes the host architecture to match the label

   A metadata label cannot change machine architecture.

4. Makes the runner match jobs requesting that label **[CORRECT]**

   Custom labels are routing metadata; operators must provision the declared capability.

**Concept:** Declared versus provisioned runner capabilities

**Authored coaching hints:**

- Distinguish metadata assignment from machine configuration.
- The scheduler uses labels, not a software installation audit.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un operador añade la etiqueta cuda a un runner autohospedado. ¿Qué hace la etiqueta por sí sola?

1. Instala un toolkit CUDA correspondiente en el host

   Asignar una etiqueta personalizada no instala software.

2. Verifica un controlador GPU funcional en el host

   GitHub no valida etiquetas personalizadas frente a disponibilidad de hardware o controladores.

3. Cambia la arquitectura del host para coincidir con la etiqueta

   Una etiqueta de metadatos no puede cambiar la arquitectura de la máquina.

4. Hace que el runner coincida con trabajos que solicitan esa etiqueta **[CORRECT]**

   Las etiquetas personalizadas son metadatos de encaminamiento; el operador debe preparar la capacidad declarada.

**Concept:** Capacidades de runner declaradas frente a preparadas

**Authored coaching hints:**

- Distingue asignar metadatos de configurar la máquina.
- El planificador usa etiquetas, no una auditoría de instalación de software.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um operador adiciona o rótulo cuda a um runner auto-hospedado. O que o rótulo faz por si só?

1. Instala um toolkit CUDA correspondente no host

   Atribuir um rótulo personalizado não instala software.

2. Verifica um driver de GPU funcional no host

   O GitHub não valida rótulos personalizados com base na disponibilidade de hardware ou drivers.

3. Altera a arquitetura do host para corresponder ao rótulo

   Um rótulo de metadados não pode alterar a arquitetura da máquina.

4. Faz o runner corresponder a jobs que solicitam esse rótulo **[CORRECT]**

   Rótulos personalizados são metadados de direcionamento; o operador precisa provisionar a capacidade declarada.

**Concept:** Capacidades de runner declaradas versus provisionadas

**Authored coaching hints:**

- Diferencie atribuir metadados de configurar a máquina.
- O agendador usa rótulos, não uma auditoria da instalação de software.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow>

<!-- certification-coach-question:actions-169:989af3e1f66ce86882c497a00fad566b621c164a82eaf4ca8e5431b116a1ae44 -->
## Question 169: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-169`

**Content revision:** `989af3e1f66ce86882c497a00fad566b621c164a82eaf4ca8e5431b116a1ae44`

**en review revision:** `cea34846e28bdff5e9a4d1c955a1d0a7ed0eff4ee6deda51e60d7ec3021177f6`
**es review revision:** `25839bb7d73490b98de3d7ce34398972da2f248dd665d28ee12cc5f9d3d22a9b`
**pt-BR review revision:** `7e77031bec3e0e47cacacc17e45f4276122e4b7176db94d5545227b56f83eb92`

### English

In the self-hosted runner list, what does Idle mean?

1. Connected and ready to execute jobs **[CORRECT]**

   Idle indicates an online runner ready for work.

2. Currently executing a workflow job

   Active indicates that a runner is executing a job.

3. Disconnected from GitHub's runner service

   Offline indicates lost or absent connectivity to GitHub.

4. Registered but prohibited from receiving jobs

   Idle is an activity state, not an administrative denial state.

**Concept:** Runner activity state interpretation

**Authored coaching hints:**

- Read status as a connection and activity signal.
- Availability does not override repository access policies.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la lista de runners autohospedados, ¿qué significa Idle?

1. Conectado y listo para ejecutar trabajos **[CORRECT]**

   Idle indica un runner en línea listo para trabajar.

2. Ejecutando actualmente un trabajo de flujo

   Active indica que un runner está ejecutando un trabajo.

3. Desconectado del servicio de runners de GitHub

   Offline indica conectividad perdida o ausente con GitHub.

4. Registrado, pero con prohibición de recibir trabajos

   Idle es un estado de actividad, no una denegación administrativa.

**Concept:** Interpretación del estado de actividad del runner

**Authored coaching hints:**

- Interpreta el estado como una señal de conexión y actividad.
- La disponibilidad no anula las políticas de acceso de repositorios.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na lista de runners auto-hospedados, o que significa Idle?

1. Conectado e pronto para executar jobs **[CORRECT]**

   Idle indica um runner online pronto para trabalhar.

2. Executando atualmente um job de fluxo

   Active indica que um runner está executando um job.

3. Desconectado do serviço de runners do GitHub

   Offline indica conectividade perdida ou ausente com o GitHub.

4. Registrado, mas proibido de receber jobs

   Idle é um estado de atividade, não uma negação administrativa.

**Concept:** Interpretação do estado de atividade do runner

**Authored coaching hints:**

- Interprete o status como um sinal de conexão e atividade.
- Disponibilidade não anula políticas de acesso de repositórios.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-170:fe9ffec150537cf8bddb7dd6c30d1b6fc1836ba2fcb308cf588e064d2102f954 -->
## Question 170: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-170`

**Content revision:** `fe9ffec150537cf8bddb7dd6c30d1b6fc1836ba2fcb308cf588e064d2102f954`

**en review revision:** `94b600bd97ade8066e9eb83ffffe3e6e94c8b931c021dec93c9d9f3c9e65b553`
**es review revision:** `5c3112005f626b961b37bb56eb282db0a64d3001250f8cd05bff62fa5f15432e`
**pt-BR review revision:** `f016591f2b61cf11ef45f29f5975924ccd8989136da1d98bc108f10449698dbd`

### English

Which GitHub-supported approach manages autoscaling self-hosted runners on Kubernetes?

1. A runner group's repository access policy

   A group access policy authorizes use but does not create Kubernetes runner pods.

2. The runner application's built-in updater

   The updater maintains runner application versions, not cluster capacity.

3. Actions Runner Controller (ARC) **[CORRECT]**

   ARC orchestrates runner scaling on Kubernetes.

4. A job's strategy.max-parallel setting

   max-parallel limits matrix execution but does not provision Kubernetes infrastructure.

**Concept:** Kubernetes runner autoscaling

**Authored coaching hints:**

- The solution needs to create and retire execution capacity.
- Distinguish infrastructure orchestration from repository configuration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué enfoque compatible con GitHub gestiona el escalado automático de runners autohospedados en Kubernetes?

1. Una política de acceso a repositorios del grupo de runners

   La política del grupo autoriza el uso, pero no crea pods de runners en Kubernetes.

2. El actualizador integrado de la aplicación del runner

   El actualizador mantiene versiones de la aplicación, no la capacidad del clúster.

3. Actions Runner Controller (ARC) **[CORRECT]**

   ARC orquesta el escalado de runners en Kubernetes.

4. El ajuste strategy.max-parallel de un trabajo

   max-parallel limita la ejecución de matrices, pero no prepara infraestructura Kubernetes.

**Concept:** Escalado automático de runners en Kubernetes

**Authored coaching hints:**

- La solución necesita crear y retirar capacidad de ejecución.
- Distingue orquestar infraestructura de configurar repositorios.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual abordagem com suporte do GitHub gerencia o escalonamento automático de runners auto-hospedados no Kubernetes?

1. Uma política de acesso a repositórios do grupo de runners

   A política do grupo autoriza o uso, mas não cria pods de runners no Kubernetes.

2. O atualizador integrado do aplicativo do runner

   O atualizador mantém versões do aplicativo, não a capacidade do cluster.

3. Actions Runner Controller (ARC) **[CORRECT]**

   O ARC orquestra o escalonamento de runners no Kubernetes.

4. A configuração strategy.max-parallel de um job

   max-parallel limita a execução de matrizes, mas não provisiona infraestrutura Kubernetes.

**Concept:** Escalonamento automático de runners no Kubernetes

**Authored coaching hints:**

- A solução precisa criar e remover capacidade de execução.
- Diferencie orquestrar infraestrutura de configurar repositórios.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-171:335abf349200664076894843910fd146a7924f19c899f22accc09e554d69b9ce -->
## Question 171: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-171`

**Content revision:** `335abf349200664076894843910fd146a7924f19c899f22accc09e554d69b9ce`

**en review revision:** `f7eea5b6bdaeeccbb017767de51005515f1a40b89b2db2677060fe4c5513b867`
**es review revision:** `173d5b34f2f14c79944ca5941394a187d6fa5e9abbf6e500ee83472482d12ac3`
**pt-BR review revision:** `99e2b4162e6d30039a151895aa74d320536abab96a9f9f4ad375bd02da1008b3`

### English

Which statement should an enterprise include when estimating self-hosted runner costs?

1. Included hosted minutes reimburse the self-hosted machine bill.

   Hosted usage allowances do not reimburse an organization's infrastructure invoices.

2. Runner application updates also cover host administration costs.

   GitHub does not administer the organization's self-hosted OS merely because it registered a runner.

3. Ephemeral registration transfers machine costs to GitHub.

   Ephemeral registration changes runner lifecycle rather than infrastructure ownership.

4. The organization pays for its machines, operations, and maintenance. **[CORRECT]**

   Self-hosted infrastructure and its upkeep remain the organization's responsibility.

**Concept:** Self-hosted infrastructure cost ownership

**Authored coaching hints:**

- Separate service billing from the cost of operating execution infrastructure.
- Avoid interpreting a product price statement as free hardware.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación debe incluir una empresa al estimar los costes de runners autohospedados?

1. Los minutos hospedados incluidos reembolsan la factura de máquinas autohospedadas.

   Las asignaciones de uso hospedado no reembolsan facturas de infraestructura de la organización.

2. Las actualizaciones del runner también cubren los costes de administración del host.

   GitHub no administra el sistema operativo autohospedado solo por registrar un runner.

3. El registro efímero transfiere los costes de máquinas a GitHub.

   El registro efímero cambia el ciclo de vida del runner, no la propiedad de infraestructura.

4. La organización paga sus máquinas, operaciones y mantenimiento. **[CORRECT]**

   La infraestructura autohospedada y su mantenimiento siguen siendo responsabilidad de la organización.

**Concept:** Responsabilidad de costes de infraestructura autohospedada

**Authored coaching hints:**

- Distingue la facturación del servicio del coste de operar la infraestructura de ejecución.
- Evita interpretar una afirmación de precio del producto como hardware gratis.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação uma empresa deve incluir ao estimar custos de runners auto-hospedados?

1. Minutos hospedados incluídos reembolsam a conta das máquinas auto-hospedadas.

   Franquias de uso hospedado não reembolsam faturas de infraestrutura da organização.

2. Atualizações do runner também cobrem os custos de administração do host.

   O GitHub não administra o sistema operacional auto-hospedado apenas por registrar um runner.

3. O registro efêmero transfere os custos das máquinas para o GitHub.

   O registro efêmero altera o ciclo de vida do runner, não a propriedade da infraestrutura.

4. A organização paga suas máquinas, operações e manutenção. **[CORRECT]**

   A infraestrutura auto-hospedada e sua manutenção continuam sendo responsabilidade da organização.

**Concept:** Responsabilidade pelos custos de infraestrutura auto-hospedada

**Authored coaching hints:**

- Diferencie a cobrança do serviço do custo de operar a infraestrutura de execução.
- Evite interpretar uma afirmação de preço do produto como hardware gratuito.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-172:dc37e767ad7a1d837ee4bf686acdacebceb9cfa6a7e4c5790b7ee8155005a2fe -->
## Question 172: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-172`

**Content revision:** `dc37e767ad7a1d837ee4bf686acdacebceb9cfa6a7e4c5790b7ee8155005a2fe`

**en review revision:** `cc3751ab747a63b942ef46e23a035821d4b95f2ba7cbec1c95d8388b011dffdf`
**es review revision:** `d94320f209390950d604867edb3f72f743f98225bbe24a64e38d76f1211ab614`
**pt-BR review revision:** `b8bf8c571565a3676e276b27c72a36f26b9fbe9e1e255fd5ce52e43ac6f1f849`

### English

For standard GitHub-hosted Linux VM runners, what environment does a new job normally receive?

1. The same VM shared by all jobs in the workflow

   Separate standard VM jobs do not share one workflow-wide machine.

2. A permanent VM assigned to that workflow file

   A workflow filename does not allocate a persistent hosted VM.

3. A newly provisioned VM for that job **[CORRECT]**

   Standard hosted VM jobs get fresh instances; don't rely on previous local job state.

4. The previous run's VM whenever a dependency cache hits

   A cache restores selected files; it does not restore the previous VM instance.

**Concept:** Hosted VM job lifecycle

**Authored coaching hints:**

- Execution environments and explicitly uploaded artifacts have different lifetimes.
- The question scopes VM runners rather than every hosted runner implementation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En runners VM Linux estándar hospedados por GitHub, ¿qué entorno recibe normalmente un trabajo nuevo?

1. La misma VM compartida por todos los trabajos del flujo

   Los trabajos VM estándar separados no comparten una máquina para todo el flujo.

2. Una VM permanente asignada a ese archivo de flujo

   Un nombre de archivo de flujo no asigna una VM hospedada persistente.

3. Una VM recién preparada para ese trabajo **[CORRECT]**

   Los trabajos VM hospedados estándar reciben instancias nuevas; no dependas del estado local de trabajos anteriores.

4. La VM de la ejecución anterior cuando acierta una caché de dependencias

   Una caché restaura archivos seleccionados, no la instancia VM anterior.

**Concept:** Ciclo de vida de trabajos VM hospedados

**Authored coaching hints:**

- Los entornos de ejecución y los artefactos cargados explícitamente tienen duraciones distintas.
- La pregunta se limita a runners VM, no a todas las implementaciones hospedadas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em runners VM Linux padrão hospedados pelo GitHub, qual ambiente um novo job normalmente recebe?

1. A mesma VM compartilhada por todos os jobs do fluxo

   Jobs VM padrão separados não compartilham uma máquina para todo o fluxo.

2. Uma VM permanente atribuída a esse arquivo de fluxo

   Um nome de arquivo de fluxo não aloca uma VM hospedada persistente.

3. Uma VM recém-provisionada para esse job **[CORRECT]**

   Jobs VM hospedados padrão recebem instâncias novas; não dependa do estado local de jobs anteriores.

4. A VM da execução anterior quando há acerto de cache de dependências

   Um cache restaura arquivos selecionados, não a instância de VM anterior.

**Concept:** Ciclo de vida de jobs VM hospedados

**Authored coaching hints:**

- Ambientes de execução e artefatos enviados explicitamente têm durações diferentes.
- A pergunta limita-se a runners VM, não a todas as implementações hospedadas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/github-hosted-runners>

<!-- certification-coach-question:actions-173:a2920697f495722cd606ed540b7a698e4fba1dc7fc79ff6802cf18a366cab5a3 -->
## Question 173: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-173`

**Content revision:** `a2920697f495722cd606ed540b7a698e4fba1dc7fc79ff6802cf18a366cab5a3`

**en review revision:** `bb0275c37633107b6911543861c70ba3338302191de907ebddf0ddc5e506c665`
**es review revision:** `7cd05156e2efb2f422f780608da1d6036c7ad4e598789704567b45b415244ec5`
**pt-BR review revision:** `aa5eaa3fe48a36d64d53bc87a39790a85ccd961f187d8b705183d9d50c33749a`

### English

Where can an administrator identify the exact hosted runner image and installed software used by a particular job?

1. The workflow's runs-on label without consulting execution logs

   A label can resolve to changing image builds, so it is insufficient for exact versions.

2. The job's Set up job log and its image software link **[CORRECT]**

   The setup log identifies the actual image version and links to its included software.

3. The newest image manifest without checking the job's image version

   The newest published image may differ from the image used by this job.

4. The preceding run's software list without checking this job

   Separate runs can use different image builds even with unchanged YAML.

**Concept:** Hosted image software evidence

**Authored coaching hints:**

- Prefer evidence recorded for that execution over assumptions about a label.
- Image contents can change between runs of the same workflow.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde puede un administrador identificar la imagen exacta del runner hospedado y el software instalado usados en un trabajo concreto?

1. La etiqueta runs-on del flujo sin consultar registros de ejecución

   Una etiqueta puede resolver compilaciones de imagen cambiantes y no basta para versiones exactas.

2. El registro Set up job del trabajo y su enlace de software de imagen **[CORRECT]**

   El registro de preparación identifica la versión real de imagen y enlaza su software incluido.

3. El manifiesto de imagen más nuevo sin comprobar la versión usada

   La imagen más reciente publicada puede diferir de la usada por este trabajo.

4. La lista de software de la ejecución anterior sin comprobar este trabajo

   Ejecuciones distintas pueden usar imágenes diferentes incluso sin cambios YAML.

**Concept:** Pruebas del software de imágenes hospedadas

**Authored coaching hints:**

- Prefiere pruebas de esa ejecución a suposiciones sobre una etiqueta.
- El contenido de la imagen puede cambiar entre ejecuciones del mismo flujo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde um administrador pode identificar a imagem exata do runner hospedado e o software instalado usados em um job específico?

1. O rótulo runs-on do fluxo sem consultar logs de execução

   Um rótulo pode resolver builds de imagem diferentes e não basta para versões exatas.

2. O log Set up job do job e seu link de software da imagem **[CORRECT]**

   O log de preparação identifica a versão real da imagem e fornece um link para o software incluído.

3. O manifesto da imagem mais nova sem conferir a versão usada

   A imagem mais recente publicada pode diferir da usada por esse job.

4. A lista de software da execução anterior sem conferir este job

   Execuções diferentes podem usar imagens diferentes mesmo sem alterações no YAML.

**Concept:** Evidências do software de imagens hospedadas

**Authored coaching hints:**

- Prefira evidências dessa execução a suposições sobre um rótulo.
- O conteúdo da imagem pode mudar entre execuções do mesmo fluxo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/github-hosted-runners>

<!-- certification-coach-question:actions-174:228bf07987250b5d97db53ff853b49b3ac0936e0243127bc0ee7b4b61e043b51 -->
## Question 174: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-174`

**Content revision:** `228bf07987250b5d97db53ff853b49b3ac0936e0243127bc0ee7b4b61e043b51`

**en review revision:** `154958db6fa9c895b083ce164dc7104368cf5df52466a0e783dd17345f183932`
**es review revision:** `b4f9101b934e254a2054c262700092fec8f03837cbb3486b8dba765cf63a1746`
**pt-BR review revision:** `3e6d2866fddfef9179b5232e09c9770713ebaa46cc539f601b2f62708f10db1b`

### English

Which statement correctly describes a GitHub-hosted label ending in -latest?

1. It can migrate to a newer supported image over time. **[CORRECT]**

   latest labels follow GitHub's supported image selection and migrations.

2. It guarantees the operating-system major version never changes.

   A latest label is not a permanent major-version lock.

3. It always means the OS vendor's newest release on launch day.

   GitHub's latest image is not necessarily the vendor's newest OS release.

4. It guarantees every preinstalled tool keeps one fixed version.

   Hosted images receive software updates; this label does not freeze tool versions.

**Concept:** Moving hosted image labels

**Authored coaching hints:**

- Distinguish a service-maintained label from a frozen environment.
- Check image migration notices when a previously working job changes behavior.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación describe correctamente una etiqueta de runner hospedado por GitHub que termina en -latest?

1. Puede migrar a una imagen compatible más nueva con el tiempo. **[CORRECT]**

   Las etiquetas latest siguen la selección y migraciones de imágenes compatibles de GitHub.

2. Garantiza que la versión principal del sistema operativo nunca cambia.

   Una etiqueta latest no es un bloqueo permanente de versión principal.

3. Siempre significa el último lanzamiento del proveedor desde el primer día.

   La imagen latest de GitHub no es necesariamente el sistema operativo más reciente del proveedor.

4. Garantiza que todas las herramientas preinstaladas conserven una versión fija.

   Las imágenes hospedadas reciben actualizaciones; esa etiqueta no congela versiones de herramientas.

**Concept:** Etiquetas móviles de imágenes hospedadas

**Authored coaching hints:**

- Distingue una etiqueta mantenida por el servicio de un entorno congelado.
- Revisa los avisos de migración de imágenes si cambia el comportamiento de un trabajo antes funcional.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação descreve corretamente um rótulo de runner hospedado pelo GitHub que termina em -latest?

1. Pode migrar para uma imagem compatível mais nova com o tempo. **[CORRECT]**

   Rótulos latest seguem a seleção e migrações de imagens compatíveis do GitHub.

2. Garante que a versão principal do sistema operacional nunca muda.

   Um rótulo latest não é uma fixação permanente de versão principal.

3. Sempre significa a versão mais nova do fornecedor desde o primeiro dia.

   A imagem latest do GitHub não é necessariamente o sistema operacional mais recente do fornecedor.

4. Garante que todas as ferramentas pré-instaladas mantenham uma versão fixa.

   Imagens hospedadas recebem atualizações; esse rótulo não congela versões de ferramentas.

**Concept:** Rótulos móveis de imagens hospedadas

**Authored coaching hints:**

- Diferencie um rótulo mantido pelo serviço de um ambiente congelado.
- Confira avisos de migração de imagens se um job antes funcional mudar de comportamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/github-hosted-runners>

<!-- certification-coach-question:actions-175:fbcd8dbb38664478e49c0d95864796efd555a28c22b1978165a852079956af3d -->
## Question 175: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-175`

**Content revision:** `fbcd8dbb38664478e49c0d95864796efd555a28c22b1978165a852079956af3d`

**en review revision:** `cee217153aa443e31aa396489480fe94aff5dd4b77bf07ea9b969740535faa06`
**es review revision:** `18a4f379b53e2f3cf5aa0ff51a9a11b9e72ca4b9278d822e2a37e517bc2161a3`
**pt-BR review revision:** `3e6d269f7467150a848230473ee09a258be48332853e0e9c1a661ca980bf08dd`

### English

A hosted job requires a specific supported runtime version not guaranteed by the image defaults. What should the workflow do?

1. Install/select it explicitly with an appropriate setup action. **[CORRECT]**

   Setup actions make runtime selection explicit rather than depending on changing defaults.

2. Assume the latest image always includes exactly that version.

   Image defaults are updated and cannot guarantee an arbitrary requested version.

3. Set a version environment variable without invoking an installer.

   A variable alone does not install or activate the requested runtime version.

4. Commit a dependency lockfile without selecting the runtime.

   A package dependency lockfile does not provision the runtime executable.

**Concept:** Explicit hosted runtime provisioning

**Authored coaching hints:**

- A requirement must affect executable setup, not only documentation.
- Preinstalled software is a starting point, not the complete build contract.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo hospedado requiere una versión de entorno compatible específica que la imagen no garantiza por defecto. ¿Qué debe hacer el flujo?

1. Instalarla o seleccionarla explícitamente con una acción setup adecuada. **[CORRECT]**

   Las acciones setup hacen explícita la selección del entorno en lugar de depender de valores cambiantes.

2. Suponer que la imagen latest siempre incluye exactamente esa versión.

   Los valores de imagen se actualizan y no garantizan cualquier versión solicitada.

3. Definir una variable de versión sin invocar un instalador.

   Una variable por sí sola no instala ni activa la versión de entorno solicitada.

4. Confirmar un archivo de bloqueo de dependencias sin seleccionar el entorno.

   Un archivo de bloqueo de paquetes no prepara el ejecutable del entorno.

**Concept:** Preparación explícita de entornos hospedados

**Authored coaching hints:**

- Un requisito debe afectar a la preparación ejecutable, no solo a la documentación.
- El software preinstalado es un punto de partida, no el contrato completo de compilación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job hospedado exige uma versão específica de runtime compatível que a imagem não garante por padrão. O que o fluxo deve fazer?

1. Instalá-la ou selecioná-la explicitamente com uma ação setup adequada. **[CORRECT]**

   Ações setup tornam explícita a seleção do runtime em vez de depender de padrões que mudam.

2. Presumir que a imagem latest sempre inclui exatamente essa versão.

   Padrões da imagem são atualizados e não garantem qualquer versão solicitada.

3. Definir uma variável de versão sem invocar um instalador.

   Uma variável, sozinha, não instala nem ativa a versão de runtime solicitada.

4. Fazer commit de um arquivo de bloqueio de dependências sem selecionar o runtime.

   Um arquivo de bloqueio de pacotes não provisiona o executável do runtime.

**Concept:** Provisionamento explícito de runtimes hospedados

**Authored coaching hints:**

- Um requisito precisa afetar a preparação executável, não apenas a documentação.
- O software pré-instalado é um ponto de partida, não o contrato completo do build.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/github-hosted-runners>

<!-- certification-coach-question:actions-176:dac33ed15ee587ae828871ec2a7a183ac7354ebde2e8bc17994bcc398f6d6891 -->
## Question 176: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-176`

**Content revision:** `dac33ed15ee587ae828871ec2a7a183ac7354ebde2e8bc17994bcc398f6d6891`

**en review revision:** `12e6dd1cf117f575a101f79340ad547eb15e5a4140f4c956f6833dbfa5ef75b4`
**es review revision:** `f3a5df05ed1bce632d14f2539dda93e1588c9a74de45be608f1ab5e21b88e348`
**pt-BR review revision:** `610d1618552e53a1a9c8569eaab0d2e14eb83d4d7c76712277ebd27deabd2a45`

### English

On GitHub Enterprise Cloud, which managed runner option can provide static public IP addresses for Linux or Windows firewall allowlisting?

1. Standard runners selected only by an ubuntu-latest label

   A standard hosted image label does not allocate a dedicated static IP range.

2. Any runner selected only by a custom job name

   A job's name has no network allocation effect.

3. Larger runners configured with static IP addresses **[CORRECT]**

   Static IP support is a larger-runner capability on supported Linux and Windows configurations.

4. macOS larger runners using the Linux IP setting

   The documented static IP capability does not extend to macOS larger runners.

**Concept:** Hosted static egress addresses

**Authored coaching hints:**

- A shared image label does not imply a dedicated network identity.
- Check the OS-specific capability, not just runner size.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, ¿qué opción de runner administrado puede proporcionar IP públicas estáticas para listas permitidas de firewall en Linux o Windows?

1. Runners estándar seleccionados solo con la etiqueta ubuntu-latest

   Una etiqueta de imagen hospedada estándar no asigna un rango IP estático dedicado.

2. Cualquier runner seleccionado solo por un nombre de trabajo personalizado

   El nombre de un trabajo no tiene efecto sobre la asignación de red.

3. Runners más grandes configurados con IP estáticas **[CORRECT]**

   Las IP estáticas son una capacidad de runners más grandes en configuraciones Linux y Windows compatibles.

4. Runners macOS más grandes con el ajuste IP de Linux

   La capacidad documentada de IP estáticas no se extiende a runners macOS más grandes.

**Concept:** Direcciones estáticas de salida hospedadas

**Authored coaching hints:**

- Una etiqueta de imagen compartida no implica una identidad de red dedicada.
- Comprueba la capacidad específica del sistema operativo, no solo el tamaño del runner.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, qual opção de runner gerenciado pode fornecer IPs públicos estáticos para listas de permissões de firewall em Linux ou Windows?

1. Runners padrão selecionados apenas pelo rótulo ubuntu-latest

   Um rótulo de imagem hospedada padrão não aloca uma faixa de IP estático dedicada.

2. Qualquer runner selecionado apenas por um nome de job personalizado

   O nome de um job não tem efeito sobre a alocação de rede.

3. Runners maiores configurados com IPs estáticos **[CORRECT]**

   IPs estáticos são um recurso de runners maiores em configurações Linux e Windows compatíveis.

4. Runners macOS maiores usando a configuração de IP do Linux

   O recurso documentado de IPs estáticos não se estende a runners macOS maiores.

**Concept:** Endereços estáticos de saída hospedados

**Authored coaching hints:**

- Um rótulo de imagem compartilhado não implica uma identidade de rede dedicada.
- Confira o recurso específico do sistema operacional, não apenas o tamanho do runner.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners>

<!-- certification-coach-question:actions-177:9381cf179ea7d3227b94d52cb758c2d80622f877064dc1ecd561ec772c832cd7 -->
## Question 177: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-177`

**Content revision:** `9381cf179ea7d3227b94d52cb758c2d80622f877064dc1ecd561ec772c832cd7`

**en review revision:** `89af354afdd3daaa62b3cc82f845254fc721e4325a55fdad12e705887877f714`
**es review revision:** `c98322e1415576dcfe06d72dd3d823db155cfc8df5f266eeadbe3575c88bcfd4`
**pt-BR review revision:** `67047524c593184af05c2ccf50b0508f5d844e84b01850e840eb0cafecbb55fa`

### English

An eligible GitHub Team or Enterprise Cloud organization needs Linux/Windows hosted runners to reach an Azure private network. Which supported feature should it evaluate?

1. Static public egress IPs without a private network connection

   Static public addresses alone do not provide a route to private Azure endpoints.

2. Azure private networking for larger runners **[CORRECT]**

   Supported larger runners can integrate with an Azure VNET through configured private networking.

3. A runner group access policy without network configuration

   Group access authorizes runner use but does not establish VNET connectivity.

4. A job service container with a local Docker bridge network

   A local container bridge is not an Azure VNET integration.

**Concept:** Azure private networking on hosted runners

**Authored coaching hints:**

- Network reachability requires an infrastructure integration, not only a configuration value.
- Keep GitHub.com plan and operating-system support in scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización apta con GitHub Team o Enterprise Cloud necesita que runners Linux/Windows hospedados accedan a una red privada Azure. ¿Qué función compatible debe evaluar?

1. IP públicas estáticas de salida sin conexión de red privada

   Las direcciones públicas estáticas por sí solas no proporcionan ruta a destinos Azure privados.

2. Red privada Azure para runners más grandes **[CORRECT]**

   Los runners más grandes compatibles pueden integrarse con una VNET Azure mediante red privada configurada.

3. Una política de acceso del grupo sin configuración de red

   El acceso del grupo autoriza usar runners, pero no establece conectividad VNET.

4. Un contenedor de servicio del trabajo con red puente Docker local

   Un puente local de contenedores no es una integración VNET Azure.

**Concept:** Red privada Azure en runners hospedados

**Authored coaching hints:**

- La conectividad requiere una integración de infraestructura, no solo un valor de configuración.
- Ten en cuenta el plan de GitHub.com y el sistema operativo admitido.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização elegível no GitHub Team ou Enterprise Cloud precisa que runners Linux/Windows hospedados acessem uma rede privada Azure. Qual recurso compatível deve avaliar?

1. IPs públicos estáticos de saída sem conexão de rede privada

   Endereços públicos estáticos, sozinhos, não fornecem rota para destinos privados do Azure.

2. Rede privada Azure para runners maiores **[CORRECT]**

   Runners maiores compatíveis podem integrar-se a uma VNET Azure por rede privada configurada.

3. Uma política de acesso do grupo sem configuração de rede

   O acesso do grupo autoriza usar runners, mas não estabelece conectividade VNET.

4. Um contêiner de serviço do job com rede bridge Docker local

   Uma bridge local de contêineres não é uma integração com VNET Azure.

**Concept:** Rede privada Azure em runners hospedados

**Authored coaching hints:**

- Conectividade exige uma integração de infraestrutura, não apenas um valor de configuração.
- Considere o plano do GitHub.com e o sistema operacional aceito.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/private-networking>

<!-- certification-coach-question:actions-178:12ea5b4c8c6c7516dcdc225f56420bc2827d082df14444e93d5e264b0179fd36 -->
## Question 178: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-178`

**Content revision:** `12ea5b4c8c6c7516dcdc225f56420bc2827d082df14444e93d5e264b0179fd36`

**en review revision:** `c2bd66dfc7147230b8898767c2ac995618a34bd63797b42fdc324b9923caa7c9`
**es review revision:** `168e763ab1ad05314c65327f852aa4cafd045fd88ef5baaca9c117b42a36e5e6`
**pt-BR review revision:** `c9835accd088aeb3c1f7d526da91977418bda0785b02938097d32043e6c77b0f`

### English

Which supported mechanism preinstalls an organization's toolchain into the image used by eligible GitHub-hosted larger runners?

1. Dependency cache archives

   Caches restore selected files during jobs rather than define the runner's base image.

2. Runner capability labels

   Capability labels describe runners without installing software into an image.

3. Job container selection

   A job container supplies a container environment rather than a custom runner VM image.

4. Custom runner images **[CORRECT]**

   Custom images can contain tools and dependencies before a runner job begins.

**Concept:** Hosted custom image provisioning

**Authored coaching hints:**

- Separate image preparation from runtime labels and stored configuration.
- The feature requires supported platforms, permissions, and organization policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mecanismo compatible preinstala las herramientas de una organización en la imagen usada por runners más grandes hospedados por GitHub aptos?

1. Archivos de caché de dependencias

   Las cachés restauran archivos durante los trabajos, no definen la imagen base del runner.

2. Etiquetas de capacidades de runners

   Las etiquetas describen runners sin instalar software en una imagen.

3. Selección de contenedor de trabajo

   Un contenedor de trabajo proporciona un entorno de contenedor, no una imagen VM personalizada del runner.

4. Imágenes personalizadas de runner **[CORRECT]**

   Las imágenes personalizadas pueden contener herramientas y dependencias antes de comenzar un trabajo.

**Concept:** Preparación de imágenes personalizadas hospedadas

**Authored coaching hints:**

- Distingue la preparación de imágenes de las etiquetas y la configuración guardada.
- La función requiere plataformas compatibles, permisos y política de organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mecanismo compatível pré-instala as ferramentas de uma organização na imagem usada por runners maiores elegíveis hospedados pelo GitHub?

1. Arquivos de cache de dependências

   Caches restauram arquivos durante os jobs, não definem a imagem base do runner.

2. Rótulos de capacidades de runners

   Rótulos descrevem runners sem instalar software em uma imagem.

3. Seleção de contêiner do job

   Um contêiner do job fornece um ambiente de contêiner, não uma imagem de VM personalizada do runner.

4. Imagens personalizadas de runner **[CORRECT]**

   Imagens personalizadas podem conter ferramentas e dependências antes de iniciar um job.

**Concept:** Provisionamento de imagens personalizadas hospedadas

**Authored coaching hints:**

- Diferencie a preparação de imagens de rótulos e configurações armazenadas.
- O recurso exige plataformas compatíveis, permissões e política da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images>

<!-- certification-coach-question:actions-179:2c49ef0b70998741f3ea32bf5bd7bf575270e34e9ceddaa9ed8e0540bb42fb97 -->
## Question 179: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-179`

**Content revision:** `2c49ef0b70998741f3ea32bf5bd7bf575270e34e9ceddaa9ed8e0540bb42fb97`

**en review revision:** `826d032da4f4c85ea83505af4a2eb1c2c8f4c8df0d83cd5bc0ef9c59d22d9608`
**es review revision:** `9a60afe17777f11b354466a879a2495151472c999fcdc9ded7d168109f274658`
**pt-BR review revision:** `79bff403cfa85766740e6acf41f1a53ebdd4fb398cdce8368b31b371f58a3587`

### English

A larger runner is enabled for image generation. Which job keyword requests creation of a custom image after a successful build job?

1. services

   services starts service containers rather than publishing a runner image.

2. container

   container selects a container in which to execute job steps.

3. snapshot **[CORRECT]**

   snapshot specifies the image to generate from an image-generation runner job.

4. environment

   environment selects a deployment environment instead of generating an image.

**Concept:** Custom image generation keyword

**Authored coaching hints:**

- Running inside an image and creating a runner image are different operations.
- The job must use an appropriately configured image-generation runner.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un runner más grande tiene habilitada la generación de imágenes. ¿Qué palabra clave del trabajo solicita crear una imagen personalizada tras un trabajo de construcción satisfactorio?

1. services

   services inicia contenedores de servicio, no publica una imagen de runner.

2. container

   container selecciona un contenedor donde ejecutar los pasos del trabajo.

3. snapshot **[CORRECT]**

   snapshot especifica la imagen que se genera desde un trabajo de runner de generación de imágenes.

4. environment

   environment selecciona un entorno de despliegue en lugar de generar una imagen.

**Concept:** Palabra clave de generación de imágenes personalizadas

**Authored coaching hints:**

- Ejecutar dentro de una imagen y crear una imagen de runner son operaciones distintas.
- El trabajo debe usar un runner de generación de imágenes configurado adecuadamente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um runner maior está habilitado para geração de imagens. Qual palavra-chave do job solicita a criação de uma imagem personalizada após um job de build bem-sucedido?

1. services

   services inicia contêineres de serviço, não publica uma imagem de runner.

2. container

   container seleciona um contêiner no qual executar as etapas do job.

3. snapshot **[CORRECT]**

   snapshot especifica a imagem a gerar a partir de um job de runner de geração de imagens.

4. environment

   environment seleciona um ambiente de implantação em vez de gerar uma imagem.

**Concept:** Palavra-chave de geração de imagens personalizadas

**Authored coaching hints:**

- Executar dentro de uma imagem e criar uma imagem de runner são operações diferentes.
- O job precisa usar um runner de geração de imagens configurado adequadamente.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images>

<!-- certification-coach-question:actions-180:def6286835f8087765d23b6f100ff3ad8ad393261c925a38c227fc4c00ea15b8 -->
## Question 180: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-180`

**Content revision:** `def6286835f8087765d23b6f100ff3ad8ad393261c925a38c227fc4c00ea15b8`

**en review revision:** `78a5396945f7b2524576923ec6cdb1cfd137ca20420d48a38c475e1a6ad031d1`
**es review revision:** `5053b968942043886f83e9451046bc27ff91b994782aa14d1e452eed6c484196`
**pt-BR review revision:** `45b6bac160ca76dbb00e4b5cb7711a9c756d3121f442341854b60a83a2cfed7b`

### English

An organization secret should be available to only api and worker. Which organization-secret access policy fits?

1. Selected repositories: api, worker **[CORRECT]**

   Selected-repository access grants only the explicitly chosen repositories the organization secret.

2. All repositories in the organization

   Organization-wide access is broader than the two named repositories.

3. All private repositories in the organization

   Private-only access may include other private repositories beyond these two.

4. All repositories with the same workflow filename

   Organization-secret policies select repositories, not matching workflow filenames.

**Concept:** Organization secret repository selection

**Authored coaching hints:**

- Use the smallest access set that matches the actual consumers.
- Visibility categories and explicit repository lists express different boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un secreto de organización debe estar disponible solo para api y worker. ¿Qué política de acceso del secreto corresponde?

1. Repositorios seleccionados: api, worker **[CORRECT]**

   El acceso por selección concede el secreto de organización solo a los repositorios elegidos explícitamente.

2. Todos los repositorios de la organización

   El acceso a toda la organización es más amplio que los dos repositorios indicados.

3. Todos los repositorios privados de la organización

   El acceso solo privado puede incluir otros repositorios privados además de esos dos.

4. Todos los repositorios con el mismo nombre de archivo de flujo

   Las políticas de secretos de organización seleccionan repositorios, no nombres de archivos de flujo.

**Concept:** Selección de repositorios para secretos de organización

**Authored coaching hints:**

- Usa el conjunto de acceso más pequeño que incluya a los consumidores reales.
- Las categorías de visibilidad y las listas explícitas expresan límites distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo da organização deve estar disponível apenas para api e worker. Qual política de acesso do segredo corresponde?

1. Repositórios selecionados: api, worker **[CORRECT]**

   O acesso por seleção concede o segredo da organização apenas aos repositórios explicitamente escolhidos.

2. Todos os repositórios da organização

   Acesso a toda a organização é mais amplo que os dois repositórios indicados.

3. Todos os repositórios privados da organização

   Acesso apenas privado pode incluir outros repositórios privados além desses dois.

4. Todos os repositórios com o mesmo nome de arquivo de fluxo

   Políticas de segredos da organização selecionam repositórios, não nomes de arquivos de fluxo.

**Concept:** Seleção de repositórios para segredos da organização

**Authored coaching hints:**

- Use o menor conjunto de acesso que inclua os consumidores reais.
- Categorias de visibilidade e listas explícitas expressam limites diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-181:ca3ff80f99d02d6816f9496426f4ff2f1c87eeae9b62b293aa153827ed1eaf41 -->
## Question 181: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-181`

**Content revision:** `ca3ff80f99d02d6816f9496426f4ff2f1c87eeae9b62b293aa153827ed1eaf41`

**en review revision:** `dc6d271e01bacb5d02094255d3dd91d6096736536b6c3e326cb36eae4e07bca2`
**es review revision:** `62cd1f44690de5b7f1910129dc8010acbc3fdbfe9264deaf1f951d5663e2105d`
**pt-BR review revision:** `06663c7eded23d8dea16e907c1bc7e318de06282b8a5494af001a2d728cfaac1`

### English

The same secret name exists at organization, repository, and environment levels. For a job using that environment, which secret takes precedence?

1. The repository secret

   Repository scope loses to an applicable environment secret with the same name.

2. The organization secret

   Organization scope does not override more specific repository or environment values.

3. The most recently created secret

   Precedence depends on scope rather than creation time.

4. The environment secret **[CORRECT]**

   The lowest applicable scope wins; the environment is the most specific of these scopes.

**Concept:** Environment secret precedence

**Authored coaching hints:**

- Identify every scope that applies to this particular job.
- Name collisions are resolved by hierarchy, not timestamp.

<details>
<summary>Español — same answer key and option order</summary>

### Español

El mismo nombre de secreto existe en organización, repositorio y entorno. En un trabajo que usa ese entorno, ¿qué secreto prevalece?

1. El secreto de repositorio

   El ámbito de repositorio cede ante un secreto de entorno aplicable con el mismo nombre.

2. El secreto de organización

   El ámbito de organización no anula valores más específicos de repositorio o entorno.

3. El secreto creado más recientemente

   La prioridad depende del ámbito, no de la fecha de creación.

4. El secreto de entorno **[CORRECT]**

   Prevalece el ámbito aplicable más específico; aquí es el entorno.

**Concept:** Prioridad de secretos de entorno

**Authored coaching hints:**

- Identifica todos los ámbitos aplicables a este trabajo concreto.
- Las colisiones de nombres se resuelven por jerarquía, no por fecha.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O mesmo nome de segredo existe nos níveis de organização, repositório e ambiente. Em um job que usa esse ambiente, qual segredo prevalece?

1. O segredo do repositório

   O escopo de repositório perde para um segredo de ambiente aplicável com o mesmo nome.

2. O segredo da organização

   O escopo de organização não anula valores mais específicos de repositório ou ambiente.

3. O segredo criado mais recentemente

   A precedência depende do escopo, não da data de criação.

4. O segredo do ambiente **[CORRECT]**

   Prevalece o escopo aplicável mais específico; aqui é o ambiente.

**Concept:** Precedência de segredos de ambiente

**Authored coaching hints:**

- Identifique todos os escopos aplicáveis a esse job específico.
- Colisões de nomes são resolvidas por hierarquia, não por data.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-182:ad56ef50a0855d92360bf93c9b260b743692875d342bf26ba6a811173c372d22 -->
## Question 182: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-182`

**Content revision:** `ad56ef50a0855d92360bf93c9b260b743692875d342bf26ba6a811173c372d22`

**en review revision:** `c74819a4a7363ad9f31c0467da05be546f0c004e62dce4969b5fab6720a5aaba`
**es review revision:** `13d2be2a1db82fac79a1e5ed731eb772a154f9663d4c78929947919d656d5e21`
**pt-BR review revision:** `83ee5d5908989f6bacb047de432f351b7345b2b3f45e8b9e44bc0f41ba8e7d7b`

### English

A job references no environment. Its repository and organization both define API\_KEY. Which value is read through secrets.API\_KEY?

1. The organization value

   The broader organization scope does not override the repository value.

2. The repository value **[CORRECT]**

   Repository secrets override organization secrets of the same name.

3. Both values concatenated

   GitHub chooses by precedence; it does not concatenate colliding secrets.

4. An error instead of either value

   A same-name secret at different scopes is supported and has defined precedence.

**Concept:** Repository secret override

**Authored coaching hints:**

- Exclude scopes the job does not reference.
- Shared defaults and local configuration can intentionally use the same name.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo no referencia ningún entorno. Su repositorio y organización definen API\_KEY. ¿Qué valor se lee mediante secrets.API\_KEY?

1. El valor de la organización

   El ámbito más amplio de organización no anula el valor del repositorio.

2. El valor del repositorio **[CORRECT]**

   Los secretos de repositorio prevalecen sobre los de organización con el mismo nombre.

3. Ambos valores concatenados

   GitHub elige por prioridad; no concatena secretos con nombres coincidentes.

4. Un error en lugar de cualquiera de los valores

   Se admiten secretos con el mismo nombre en distintos ámbitos y existe una prioridad definida.

**Concept:** Reemplazo de secretos por el repositorio

**Authored coaching hints:**

- Excluye los ámbitos que el trabajo no referencia.
- Los valores compartidos y la configuración local pueden usar deliberadamente el mismo nombre.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job não referencia nenhum ambiente. Seu repositório e sua organização definem API\_KEY. Qual valor é lido por secrets.API\_KEY?

1. O valor da organização

   O escopo mais amplo da organização não anula o valor do repositório.

2. O valor do repositório **[CORRECT]**

   Segredos do repositório prevalecem sobre os da organização com o mesmo nome.

3. Ambos os valores concatenados

   O GitHub escolhe por precedência; não concatena segredos com nomes coincidentes.

4. Um erro em vez de qualquer um dos valores

   Segredos com o mesmo nome em escopos diferentes são aceitos e têm precedência definida.

**Concept:** Substituição de segredos pelo repositório

**Authored coaching hints:**

- Exclua escopos que o job não referencia.
- Padrões compartilhados e configurações locais podem usar deliberadamente o mesmo nome.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-183:d24d907ea596638dd6ceb4f2b710a4985ae7fd1d8293169de1d5beb6c277a3a0 -->
## Question 183: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-183`

**Content revision:** `d24d907ea596638dd6ceb4f2b710a4985ae7fd1d8293169de1d5beb6c277a3a0`

**en review revision:** `8d24cffb0fa73b805792de0fd62d1d106aa03e3b464aed69120777e426ec69bc`
**es review revision:** `a72712ad51847d6b7569a81cc9bfa396655214c522fe39229f72764b68c664a4`
**pt-BR review revision:** `d7bdbcdb73190836fd67f600c6ffc85152b3b7a1164e1953e172cae61c38f44b`

### English

When does GitHub read an environment secret for a job referencing that environment?

1. At workflow queue time

   Queue time is when organization and repository secrets are read.

2. At job startup **[CORRECT]**

   Environment secrets are read at job start rather than workflow queue time.

3. At workflow file commit

   Committing YAML does not capture secret values into the workflow file.

4. At repository creation

   Secret values are not frozen at repository creation.

**Concept:** Secret read timing by scope

**Authored coaching hints:**

- Run queuing and individual job startup are distinct events.
- A workflow run may contain jobs that begin much later.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuándo lee GitHub un secreto de entorno para un trabajo que referencia ese entorno?

1. Al encolar el flujo

   Al encolar se leen los secretos de organización y repositorio.

2. Al iniciar el trabajo **[CORRECT]**

   Los secretos de entorno se leen al iniciar el trabajo, no al encolar el flujo.

3. Al confirmar el archivo de flujo

   Confirmar YAML no captura los valores de secretos en el archivo de flujo.

4. Al crear el repositorio

   Los valores de secretos no quedan fijados al crear el repositorio.

**Concept:** Momento de lectura de secretos por ámbito

**Authored coaching hints:**

- La entrada en cola de una ejecución y el inicio de cada trabajo son eventos distintos.
- Una ejecución puede contener trabajos que empiezan mucho después.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando o GitHub lê um segredo de ambiente para um job que referencia esse ambiente?

1. Ao enfileirar o fluxo

   Ao enfileirar são lidos os segredos da organização e do repositório.

2. Ao iniciar o job **[CORRECT]**

   Segredos de ambiente são lidos ao iniciar o job, não ao enfileirar o fluxo.

3. Ao fazer commit do arquivo do fluxo

   Fazer commit do YAML não captura valores de segredos no arquivo do fluxo.

4. Ao criar o repositório

   Valores de segredos não ficam fixos na criação do repositório.

**Concept:** Momento de leitura de segredos por escopo

**Authored coaching hints:**

- A entrada da execução na fila e o início de cada job são eventos diferentes.
- Uma execução pode conter jobs que começam muito depois.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-184:3773f2981fe2c40b41db81f62c1c9b3714b1d725a4e5db9f72bf5e9f431d1a6a -->
## Question 184: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-184`

**Content revision:** `3773f2981fe2c40b41db81f62c1c9b3714b1d725a4e5db9f72bf5e9f431d1a6a`

**en review revision:** `f2fb3757951874b9c494a1dce75ff8170e2c4eabd890b2e09ce892028a8fc8c8`
**es review revision:** `b787dd3485c69a92d301a23d2b235565bd8f3334ea89aebe0d3c0b383a68f124`
**pt-BR review revision:** `7c7ec4b55c57f88b06345a4bf45b1829b9591e2e8ad566f6a4bb9d220797123c`

### English

Which storage is appropriate for a non-sensitive organization-wide setting such as a package mirror hostname?

1. A single workflow's env block

   One workflow's env block does not centrally expose the setting to other repositories.

2. A single step's output value

   Step outputs convey run results rather than maintain shared organization configuration.

3. A local runner process variable

   A process variable on one machine is not a centrally scoped organization variable.

4. An organization configuration variable **[CORRECT]**

   Configuration variables store reusable non-sensitive settings and are read through vars.

**Concept:** Non-sensitive shared configuration

**Authored coaching hints:**

- Choose storage by both sensitivity and administrative scope.
- Runtime scratch state is different from centrally managed configuration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué almacenamiento corresponde a un ajuste no sensible de toda la organización, como el nombre de host de un espejo de paquetes?

1. Un bloque env de un único flujo

   El bloque env de un flujo no expone centralmente el ajuste a otros repositorios.

2. Un valor de salida de un único paso

   Las salidas de pasos transmiten resultados, no mantienen configuración compartida de organización.

3. Una variable local del proceso del runner

   Una variable de proceso de una máquina no es una variable de organización centralizada.

4. Una variable de configuración de organización **[CORRECT]**

   Las variables de configuración guardan ajustes reutilizables no sensibles y se leen mediante vars.

**Concept:** Configuración compartida no sensible

**Authored coaching hints:**

- Elige el almacenamiento por sensibilidad y ámbito administrativo.
- El estado temporal de ejecución es distinto de la configuración administrada centralmente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual armazenamento é adequado para uma configuração não sensível de toda a organização, como o hostname de um espelho de pacotes?

1. Um bloco env de um único fluxo

   O bloco env de um fluxo não expõe centralmente a configuração a outros repositórios.

2. Um valor de saída de uma única etapa

   Saídas de etapas transmitem resultados, não mantêm configurações compartilhadas da organização.

3. Uma variável local do processo do runner

   Uma variável de processo de uma máquina não é uma variável de organização centralizada.

4. Uma variável de configuração da organização **[CORRECT]**

   Variáveis de configuração armazenam configurações reutilizáveis não sensíveis e são lidas por vars.

**Concept:** Configuração compartilhada não sensível

**Authored coaching hints:**

- Escolha o armazenamento pela sensibilidade e pelo escopo administrativo.
- O estado temporário de execução difere da configuração gerenciada centralmente.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables>

<!-- certification-coach-question:actions-185:57d3ac0059e22fc83fc1d216543bb0e9f4b4d93680779dd2053615aefb1ec636 -->
## Question 185: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-185`

**Content revision:** `57d3ac0059e22fc83fc1d216543bb0e9f4b4d93680779dd2053615aefb1ec636`

**en review revision:** `97b9513579d549a2960753e6928e07db79147d4016fb5f3d203d46cf9cc953c5`
**es review revision:** `a313a8e227ae2d8af2ca33a2450ab9377f1a08b4b8e2a4dbb3abc30c7474b262`
**pt-BR review revision:** `9bdd45c4e24f8cc65e19d3082ef98e33b9352d038f37815be33e0f0ea693dfcf`

### English

The organization and repository both define MIRROR as a configuration variable. No environment-level configuration variable applies. Which vars.MIRROR value wins?

1. The repository's configuration variable **[CORRECT]**

   Repository configuration variables override organization configuration variables of the same name.

2. The organization's configuration variable

   The organization value supplies a broader default and loses to repository scope.

3. The most recently modified variable

   Modification time does not replace the documented scope precedence.

4. Both variable values concatenated

   Name collisions select one scoped value rather than concatenate both values.

**Concept:** Configuration variable scope precedence

**Authored coaching hints:**

- Separate scope hierarchy from the history of edits.
- This is the vars context, not shell variable expansion.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La organización y el repositorio definen MIRROR como variable de configuración. No se aplica ninguna variable de configuración de nivel de entorno. ¿Qué valor de vars.MIRROR prevalece?

1. La variable de configuración del repositorio **[CORRECT]**

   Las variables de configuración del repositorio prevalecen sobre las de organización con el mismo nombre.

2. La variable de configuración de la organización

   El valor de organización proporciona un valor general y cede ante el ámbito de repositorio.

3. La variable modificada más recientemente

   La fecha de modificación no reemplaza la prioridad documentada de ámbitos.

4. Ambos valores de variable concatenados

   Los nombres coincidentes seleccionan un valor por ámbito, no concatenan ambos valores.

**Concept:** Prioridad de ámbitos de variables de configuración

**Authored coaching hints:**

- Distingue la jerarquía de ámbitos del historial de ediciones.
- Se trata del contexto vars, no de expansión de variables del shell.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A organização e o repositório definem MIRROR como variável de configuração. Nenhuma variável de configuração do nível de ambiente se aplica. Qual valor de vars.MIRROR prevalece?

1. A variável de configuração do repositório **[CORRECT]**

   Variáveis de configuração do repositório prevalecem sobre as da organização com o mesmo nome.

2. A variável de configuração da organização

   O valor da organização fornece um padrão geral e perde para o escopo de repositório.

3. A variável modificada mais recentemente

   A data de modificação não substitui a precedência documentada de escopos.

4. Ambos os valores de variável concatenados

   Nomes coincidentes selecionam um valor por escopo, não concatenam ambos os valores.

**Concept:** Precedência de escopos de variáveis de configuração

**Authored coaching hints:**

- Diferencie a hierarquia de escopos do histórico de edições.
- Trata-se do contexto vars, não de expansão de variáveis do shell.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/variables>

<!-- certification-coach-question:actions-186:16ca81726ee8034abe737169246cca81cd1ebf013c287a02f841e63464abb037 -->
## Question 186: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-186`

**Content revision:** `16ca81726ee8034abe737169246cca81cd1ebf013c287a02f841e63464abb037`

**en review revision:** `1f1191c55505ef6970c5e34d8d518d2bd60c7775ed93335a38959a3f1f23f1e1`
**es review revision:** `c3dac6f4f5e66a6b5f9edd03e8a95aa13464b027546d3a95a7209d448fd6eab8`
**pt-BR review revision:** `00ec7a03a6755dcf0c51bf95fc13a7ca960994f8e66038f1cde17768f6f68ce1`

### English

When do environment-level configuration variables become available to a job?

1. Before workflow processing begins on GitHub

   They are not available during early workflow processing before the job runs.

2. Only after the entire workflow has completed

   They are usable by the running job, not only after workflow completion.

3. After the job starts executing on the runner **[CORRECT]**

   Environment-level configuration variables arrive during runner execution, not every early workflow decision.

4. Only after a step writes them to GITHUB\_OUTPUT

   Configuration variable availability does not require publishing step outputs.

**Concept:** Environment configuration availability timing

**Authored coaching hints:**

- Separate server-side workflow preparation from runner-side execution.
- A scope's precedence does not make its values available in every processing phase.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuándo pasan a estar disponibles para un trabajo las variables de configuración del entorno?

1. Antes de comenzar a procesar el flujo en GitHub

   No están disponibles durante el procesamiento inicial previo a ejecutar el trabajo.

2. Solo después de que termine todo el flujo

   Puede usarlas el trabajo en ejecución, no solo tras finalizar el flujo.

3. Después de que el trabajo empieza a ejecutarse en el runner **[CORRECT]**

   Las variables de configuración de nivel de entorno llegan al ejecutarse en el runner, no en toda decisión previa del flujo.

4. Solo después de que un paso las escriba en GITHUB\_OUTPUT

   La disponibilidad de variables de configuración no requiere publicar salidas de pasos.

**Concept:** Momento de disponibilidad de configuración del entorno

**Authored coaching hints:**

- Distingue la preparación del flujo en el servidor de la ejecución en el runner.
- La prioridad de un ámbito no hace disponibles sus valores en todas las fases.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando as variáveis de configuração do nível de ambiente ficam disponíveis para um job?

1. Antes de começar o processamento do fluxo no GitHub

   Elas não estão disponíveis durante o processamento inicial antes de executar o job.

2. Apenas depois que todo o fluxo terminar

   Elas podem ser usadas pelo job em execução, não apenas após o término do fluxo.

3. Depois que o job começa a executar no runner **[CORRECT]**

   Variáveis de configuração do nível de ambiente chegam durante a execução no runner, não em toda decisão inicial do fluxo.

4. Apenas depois que uma etapa as grava em GITHUB\_OUTPUT

   A disponibilidade de variáveis de configuração não exige publicar saídas de etapas.

**Concept:** Momento de disponibilidade da configuração do ambiente

**Authored coaching hints:**

- Diferencie a preparação do fluxo no servidor da execução no runner.
- A precedência de um escopo não torna seus valores disponíveis em todas as fases.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/variables>

<!-- certification-coach-question:actions-187:cd6766451575855fe9bf9432dae3042c4eb3555f3effb436cfc363587b3906b9 -->
## Question 187: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-187`

**Content revision:** `cd6766451575855fe9bf9432dae3042c4eb3555f3effb436cfc363587b3906b9`

**en review revision:** `e298485510ebd78dcec508d01fe3c5a308102fc03cc17285dcaeca9d47fd5709`
**es review revision:** `0f203d2fc4e622f92fd6d8495afe5838b9de12740c8d930deb1ed6819822a9df`
**pt-BR review revision:** `0a2c3f43816642bf53fe4e7a16fc08abdb0afe01a69241c86dc62c49ac2da0e4`

### English

Which expression reads a repository configuration variable named PACKAGE\_MIRROR?

1. $\{\{ secrets.PACKAGE\_MIRROR \}\}

   The secrets context reads encrypted secrets, a separate store.

2. $\{\{ inputs.PACKAGE\_MIRROR \}\}

   The inputs context reads invocation parameters rather than repository configuration variables.

3. $\{\{ github.PACKAGE\_MIRROR \}\}

   The github context exposes run metadata, not arbitrary configuration variables.

4. $\{\{ vars.PACKAGE\_MIRROR \}\} **[CORRECT]**

   The vars context exposes configuration variables.

**Concept:** Configuration variable context

**Authored coaching hints:**

- Identify the value's storage location before selecting a context.
- Equal names in different stores do not make those stores interchangeable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué expresión lee una variable de configuración de repositorio llamada PACKAGE\_MIRROR?

1. $\{\{ secrets.PACKAGE\_MIRROR \}\}

   El contexto secrets lee secretos cifrados de un almacenamiento separado.

2. $\{\{ inputs.PACKAGE\_MIRROR \}\}

   El contexto inputs lee parámetros de invocación, no variables de configuración del repositorio.

3. $\{\{ github.PACKAGE\_MIRROR \}\}

   El contexto github expone metadatos de ejecución, no variables de configuración arbitrarias.

4. $\{\{ vars.PACKAGE\_MIRROR \}\} **[CORRECT]**

   El contexto vars expone variables de configuración.

**Concept:** Contexto de variables de configuración

**Authored coaching hints:**

- Identifica dónde se guarda el valor antes de seleccionar un contexto.
- Los nombres iguales en distintos almacenes no hacen intercambiables esos almacenes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual expressão lê uma variável de configuração de repositório chamada PACKAGE\_MIRROR?

1. $\{\{ secrets.PACKAGE\_MIRROR \}\}

   O contexto secrets lê segredos criptografados de um armazenamento separado.

2. $\{\{ inputs.PACKAGE\_MIRROR \}\}

   O contexto inputs lê parâmetros de invocação, não variáveis de configuração do repositório.

3. $\{\{ github.PACKAGE\_MIRROR \}\}

   O contexto github expõe metadados da execução, não variáveis de configuração arbitrárias.

4. $\{\{ vars.PACKAGE\_MIRROR \}\} **[CORRECT]**

   O contexto vars expõe variáveis de configuração.

**Concept:** Contexto de variáveis de configuração

**Authored coaching hints:**

- Identifique onde o valor é armazenado antes de selecionar um contexto.
- Nomes iguais em armazenamentos diferentes não tornam esses armazenamentos intercambiáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables>

<!-- certification-coach-question:actions-188:eaa40ff557a7192cac3ec7054937a1d4f6521b35b8aa7d738a6dbdaa895796bc -->
## Question 188: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-188`

**Content revision:** `eaa40ff557a7192cac3ec7054937a1d4f6521b35b8aa7d738a6dbdaa895796bc`

**en review revision:** `a370b289444fa228cffc3f84a2ac4137e3d52f2e5ad5e746f4c300d397b287e1`
**es review revision:** `35aa2bdecc0312e123a8c412469f4089eb3683552d84fea08ed46365082df498`
**pt-BR review revision:** `675e97440b90441df64c0254f9e7d50378d5eec6685e2417e5fe47cb92f7ed91`

### English

An organization owner uses authenticated GitHub CLI. Which command creates an organization secret restricted to api and worker? Enter its value only at the prompt.

1. gh secret set DEPLOY\_KEY --org octo-org --visibility all

   --visibility all grants broader repository access than requested.

2. gh secret set DEPLOY\_KEY --repo octo-org/api

   --repo creates a repository secret rather than a shared organization secret.

3. gh secret set DEPLOY\_KEY --org octo-org --repos api,worker **[CORRECT]**

   --org selects organization scope and --repos sets the selected repository list.

4. gh variable set DEPLOY\_KEY --org octo-org --repos api,worker

   gh variable stores a configuration variable rather than an encrypted secret.

**Concept:** CLI selected-repository organization secret

**Authored coaching hints:**

- Inspect both the subcommand and the access-selection flags.
- Do not place a real credential in a reusable command example.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de organización usa GitHub CLI autenticado. ¿Qué comando crea un secreto de organización restringido a api y worker? Introduce su valor solo cuando se solicite.

1. gh secret set DEPLOY\_KEY --org octo-org --visibility all

   --visibility all concede acceso a más repositorios de los solicitados.

2. gh secret set DEPLOY\_KEY --repo octo-org/api

   --repo crea un secreto de repositorio en lugar de uno compartido de organización.

3. gh secret set DEPLOY\_KEY --org octo-org --repos api,worker **[CORRECT]**

   --org selecciona el ámbito de organización y --repos define la lista de repositorios seleccionados.

4. gh variable set DEPLOY\_KEY --org octo-org --repos api,worker

   gh variable guarda una variable de configuración, no un secreto cifrado.

**Concept:** Secreto de organización para repositorios seleccionados con CLI

**Authored coaching hints:**

- Revisa tanto el subcomando como las opciones de selección de acceso.
- No pongas credenciales reales en un ejemplo de comando reutilizable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário da organização usa GitHub CLI autenticado. Qual comando cria um segredo da organização restrito a api e worker? Digite seu valor apenas quando solicitado.

1. gh secret set DEPLOY\_KEY --org octo-org --visibility all

   --visibility all concede acesso a mais repositórios que o solicitado.

2. gh secret set DEPLOY\_KEY --repo octo-org/api

   --repo cria um segredo de repositório em vez de um segredo compartilhado da organização.

3. gh secret set DEPLOY\_KEY --org octo-org --repos api,worker **[CORRECT]**

   --org seleciona o escopo da organização e --repos define a lista de repositórios selecionados.

4. gh variable set DEPLOY\_KEY --org octo-org --repos api,worker

   gh variable armazena uma variável de configuração, não um segredo criptografado.

**Concept:** Segredo da organização para repositórios selecionados via CLI

**Authored coaching hints:**

- Confira tanto o subcomando quanto as opções de seleção de acesso.
- Não coloque credenciais reais em um exemplo de comando reutilizável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-189:dcf03ad126f2601d344be29e0dda8d8a812bdf69bfb93af4cdafaa1dd8c6d3d1 -->
## Question 189: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-189`

**Content revision:** `dcf03ad126f2601d344be29e0dda8d8a812bdf69bfb93af4cdafaa1dd8c6d3d1`

**en review revision:** `b284830bcccd4ae4f08a8b98aef36de97aedc4c12a1fdd06410612efa55ac3bc`
**es review revision:** `335f833842a53ea601ae6c7d75b92ebacc13601cae9edcbb5dea9e2786878d64`
**pt-BR review revision:** `e0690304f0b73324dd2ec1ca2f5a95ce030f473b83b2b111456ce65df9569452`

### English

A repository administrator uses authenticated GitHub CLI. Which command sets DEPLOY\_KEY in staging for octo-org/api? Its value will be entered interactively.

1. gh secret set DEPLOY\_KEY --repo octo-org/api

   Without --env, the command sets a repository-level secret.

2. gh secret set DEPLOY\_KEY --repo octo-org/api --env staging **[CORRECT]**

   --env staging targets the environment secret rather than the repository-level store.

3. gh secret set DEPLOY\_KEY --org octo-org --visibility private

   The organization flag targets a different administrative scope.

4. gh variable set DEPLOY\_KEY --repo octo-org/api --env staging

   The variable subcommand does not create an encrypted secret.

**Concept:** CLI environment secret targeting

**Authored coaching hints:**

- Repository identity and environment identity are both required here.
- Scope flags change where the value is stored.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador de repositorio usa GitHub CLI autenticado. ¿Qué comando define DEPLOY\_KEY en staging de octo-org/api? Su valor se introducirá de forma interactiva.

1. gh secret set DEPLOY\_KEY --repo octo-org/api

   Sin --env, el comando define un secreto de repositorio.

2. gh secret set DEPLOY\_KEY --repo octo-org/api --env staging **[CORRECT]**

   --env staging selecciona el secreto de entorno en lugar del almacenamiento de repositorio.

3. gh secret set DEPLOY\_KEY --org octo-org --visibility private

   La opción de organización selecciona un ámbito administrativo diferente.

4. gh variable set DEPLOY\_KEY --repo octo-org/api --env staging

   El subcomando variable no crea un secreto cifrado.

**Concept:** Selección de secretos de entorno con CLI

**Authored coaching hints:**

- Aquí hacen falta tanto la identidad del repositorio como la del entorno.
- Las opciones de ámbito cambian dónde se almacena el valor.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador de repositório usa GitHub CLI autenticado. Qual comando define DEPLOY\_KEY em staging de octo-org/api? Seu valor será informado interativamente.

1. gh secret set DEPLOY\_KEY --repo octo-org/api

   Sem --env, o comando define um segredo de repositório.

2. gh secret set DEPLOY\_KEY --repo octo-org/api --env staging **[CORRECT]**

   --env staging seleciona o segredo de ambiente em vez do armazenamento do repositório.

3. gh secret set DEPLOY\_KEY --org octo-org --visibility private

   A opção de organização seleciona um escopo administrativo diferente.

4. gh variable set DEPLOY\_KEY --repo octo-org/api --env staging

   O subcomando variable não cria um segredo criptografado.

**Concept:** Seleção de segredos de ambiente via CLI

**Authored coaching hints:**

- Aqui são necessárias tanto a identidade do repositório quanto a do ambiente.
- Opções de escopo alteram onde o valor é armazenado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-190:c3d03032ab45a345d9802adb5c9afbde0e750c06abe9e7fc6669cfed9f5c741b -->
## Question 190: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-190`

**Content revision:** `c3d03032ab45a345d9802adb5c9afbde0e750c06abe9e7fc6669cfed9f5c741b`

**en review revision:** `3dc0042812843f51b6ca655180dec97046586ef5ed02d3b37590fb803a5e9090`
**es review revision:** `d035a99ee106702ae120c664999e947bb7a00f3cb9c6eec43df7b39263695702`
**pt-BR review revision:** `0dca4be057770e2a194a618a8822daa5b87473a1b63b2c1eb4a930cdef141324`

### English

A repository administrator uses authenticated GitHub CLI. Which command sets non-sensitive REGION=west as a configuration variable in staging for octo-org/api?

1. gh variable set REGION --repo octo-org/api --env staging --body west **[CORRECT]**

   variable set with --env writes a configuration variable at environment scope.

2. gh variable set REGION --repo octo-org/api --body west

   Omitting --env writes at repository scope rather than staging.

3. gh secret set REGION --repo octo-org/api --env staging --body west

   secret set targets the encrypted secrets store rather than configuration variables.

4. gh variable list --repo octo-org/api --env staging

   variable list reads the catalog and does not set a value.

**Concept:** CLI environment configuration variable

**Authored coaching hints:**

- Choose the storage category before checking the scope flags.
- A read operation cannot create or update the requested value.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador de repositorio usa GitHub CLI autenticado. ¿Qué comando define REGION=west no sensible como variable de configuración en staging de octo-org/api?

1. gh variable set REGION --repo octo-org/api --env staging --body west **[CORRECT]**

   variable set con --env escribe una variable de configuración en el ámbito de entorno.

2. gh variable set REGION --repo octo-org/api --body west

   Omitir --env escribe en el ámbito de repositorio, no en staging.

3. gh secret set REGION --repo octo-org/api --env staging --body west

   secret set selecciona el almacén de secretos cifrados, no variables de configuración.

4. gh variable list --repo octo-org/api --env staging

   variable list consulta el catálogo y no establece un valor.

**Concept:** Variable de configuración de entorno con CLI

**Authored coaching hints:**

- Elige la categoría de almacenamiento antes de comprobar las opciones de ámbito.
- Una operación de lectura no puede crear ni actualizar el valor solicitado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador de repositório usa GitHub CLI autenticado. Qual comando define REGION=west não sensível como variável de configuração em staging de octo-org/api?

1. gh variable set REGION --repo octo-org/api --env staging --body west **[CORRECT]**

   variable set com --env grava uma variável de configuração no escopo de ambiente.

2. gh variable set REGION --repo octo-org/api --body west

   Omitir --env grava no escopo do repositório, não em staging.

3. gh secret set REGION --repo octo-org/api --env staging --body west

   secret set seleciona o armazenamento de segredos criptografados, não variáveis de configuração.

4. gh variable list --repo octo-org/api --env staging

   variable list consulta o catálogo e não define um valor.

**Concept:** Variável de configuração de ambiente via CLI

**Authored coaching hints:**

- Escolha a categoria de armazenamento antes de conferir as opções de escopo.
- Uma operação de leitura não pode criar nem atualizar o valor solicitado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables>

<!-- certification-coach-question:actions-191:bc80a8cfca9e8e96673985dc7b9e4c552d601c263f97e1551bfb1265137bc750 -->
## Question 191: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-191`

**Content revision:** `bc80a8cfca9e8e96673985dc7b9e4c552d601c263f97e1551bfb1265137bc750`

**en review revision:** `cc2b00a2c6e49eb3269b54e3e465e21bf5a03c535410a6b5d07134abcbc86523`
**es review revision:** `7ac0020031a9ff71ceeb53d0e20e30b9148a0b716450d5e31df33c24971e771b`
**pt-BR review revision:** `8a197f3364c510c8856ceb1de5f5555551822c632c31990f42bd66b09547f29e`

### English

Before encrypting a repository Actions secret for the REST API, which resource must a client fetch?

1. GET /repos/\{owner\}/\{repo\}/actions/secrets/public-key **[CORRECT]**

   The public-key endpoint returns the key and key\_id used for secret encryption.

2. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   Secret metadata does not supply the repository encryption public key.

3. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   A configuration variable is unrelated to the Actions secret encryption key.

4. GET /repos/\{owner\}/\{repo\}/actions/runners

   Runner listings describe machines rather than secret encryption keys.

**Concept:** REST secret public key retrieval

**Authored coaching hints:**

- Secret creation uses client-side encryption, not a plaintext value field.
- Choose the resource providing encryption material rather than ordinary configuration data.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Antes de cifrar un secreto Actions de repositorio para la API REST, ¿qué recurso debe obtener el cliente?

1. GET /repos/\{owner\}/\{repo\}/actions/secrets/public-key **[CORRECT]**

   El endpoint de clave pública devuelve la clave y key\_id usados para cifrar secretos.

2. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   Los metadatos de secreto no proporcionan la clave pública de cifrado del repositorio.

3. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   Una variable de configuración no guarda relación con la clave de cifrado de secretos de Actions.

4. GET /repos/\{owner\}/\{repo\}/actions/runners

   Las listas de runners describen máquinas, no claves de cifrado de secretos.

**Concept:** Obtención de clave pública de secretos por REST

**Authored coaching hints:**

- Crear secretos usa cifrado del lado cliente, no un campo de valor en texto plano.
- Elige el recurso que proporciona material de cifrado, no datos de configuración normales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Antes de criptografar um segredo Actions de repositório para a API REST, qual recurso o cliente precisa obter?

1. GET /repos/\{owner\}/\{repo\}/actions/secrets/public-key **[CORRECT]**

   O endpoint de chave pública retorna a chave e key\_id usados para criptografar segredos.

2. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   Metadados de segredo não fornecem a chave pública de criptografia do repositório.

3. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   Uma variável de configuração não tem relação com a chave de criptografia de segredos do Actions.

4. GET /repos/\{owner\}/\{repo\}/actions/runners

   Listas de runners descrevem máquinas, não chaves de criptografia de segredos.

**Concept:** Obtenção da chave pública de segredos via REST

**Authored coaching hints:**

- Criar segredos usa criptografia no cliente, não um campo de valor em texto simples.
- Escolha o recurso que fornece material de criptografia, não dados comuns de configuração.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/secrets>

<!-- certification-coach-question:actions-192:0569751f411d271e1a666984779e84b7f2febdc6351c5870a91fbad821da018d -->
## Question 192: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-192`

**Content revision:** `0569751f411d271e1a666984779e84b7f2febdc6351c5870a91fbad821da018d`

**en review revision:** `3c9fcf7eea4a3f8b8727e980a2993f639a298c49622a8cc63d0553ccfa8d10a7`
**es review revision:** `44469df8536ed81bf6d3a774a4bf42066b2d5a439c0985c911f252ad3e60caff`
**pt-BR review revision:** `73a742ed7d14c6965d42ed9faeff271d39e30cf284e089ef9d364c3bc702b99b`

### English

Which REST request creates or updates a repository Actions secret using encrypted\_value and key\_id?

1. POST /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   POST is not the documented method for this named secret endpoint.

2. PATCH /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   PATCH is not the repository secret create-or-update method.

3. PUT /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} **[CORRECT]**

   The documented create-or-update repository secret endpoint uses PUT.

4. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   GET reads metadata and cannot write the encrypted secret.

**Concept:** REST encrypted secret upsert

**Authored coaching hints:**

- Distinguish a named resource update from a collection create operation.
- The payload must use the public key for the same secret scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud REST crea o actualiza un secreto Actions de repositorio mediante encrypted\_value y key\_id?

1. POST /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   POST no es el método documentado para este endpoint de secreto con nombre.

2. PATCH /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   PATCH no es el método para crear o actualizar secretos de repositorio.

3. PUT /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} **[CORRECT]**

   El endpoint documentado para crear o actualizar un secreto de repositorio usa PUT.

4. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   GET lee metadatos y no puede escribir el secreto cifrado.

**Concept:** Creación o actualización de secretos cifrados por REST

**Authored coaching hints:**

- Distingue actualizar un recurso con nombre de crear en una colección.
- La carga debe usar la clave pública del mismo ámbito de secreto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação REST cria ou atualiza um segredo Actions de repositório usando encrypted\_value e key\_id?

1. POST /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   POST não é o método documentado para esse endpoint de segredo nomeado.

2. PATCH /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   PATCH não é o método para criar ou atualizar segredos de repositório.

3. PUT /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} **[CORRECT]**

   O endpoint documentado para criar ou atualizar um segredo de repositório usa PUT.

4. GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\}

   GET lê metadados e não pode gravar o segredo criptografado.

**Concept:** Criação ou atualização de segredos criptografados via REST

**Authored coaching hints:**

- Diferencie atualizar um recurso nomeado de criar em uma coleção.
- O payload precisa usar a chave pública do mesmo escopo de segredo.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/secrets>

<!-- certification-coach-question:actions-193:33cffd6653fc69e24189cb80e7c127cf8a7a64d22a68902c1c099be92f39cc36 -->
## Question 193: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-193`

**Content revision:** `33cffd6653fc69e24189cb80e7c127cf8a7a64d22a68902c1c099be92f39cc36`

**en review revision:** `54774fbca71ee03724afa2f1f7b39ad2c7f4377dcf2e52de03be2da22745db9d`
**es review revision:** `5f7854e3a4bd063f018cd355a269b9c4e44ee385c3d320a557d7670144a9ae95`
**pt-BR review revision:** `fa151f9ec287e9cc900b6d29baef00525132b38e988b79c93ee85963cd778086`

### English

What does GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} return for an existing repository secret?

1. The secret's decrypted plaintext value

   Secret values cannot be retrieved as plaintext through this endpoint.

2. Metadata such as the secret's name and timestamps **[CORRECT]**

   The read endpoint exposes metadata, not the stored secret value.

3. The secret's reusable encrypted\_value payload

   The response does not return the submitted encrypted secret payload.

4. The repository's private decryption key

   GitHub does not expose the repository's private decryption key here.

**Concept:** Secret metadata-only read API

**Authored coaching hints:**

- Distinguish discovering a secret's existence from reading its contents.
- Write payload fields need not be returned by read operations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué devuelve GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} para un secreto de repositorio existente?

1. El valor descifrado en texto plano del secreto

   Los valores de secretos no pueden recuperarse como texto plano mediante este endpoint.

2. Metadatos como el nombre del secreto y sus fechas **[CORRECT]**

   El endpoint de lectura expone metadatos, no el valor guardado del secreto.

3. La carga encrypted\_value reutilizable del secreto

   La respuesta no devuelve la carga cifrada del secreto enviada.

4. La clave privada de descifrado del repositorio

   GitHub no expone aquí la clave privada de descifrado del repositorio.

**Concept:** API de lectura de solo metadatos de secretos

**Authored coaching hints:**

- Distingue descubrir la existencia de un secreto de leer su contenido.
- Los campos enviados al escribir no tienen por qué devolverse al leer.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que GET /repos/\{owner\}/\{repo\}/actions/secrets/\{secret\_name\} retorna para um segredo de repositório existente?

1. O valor descriptografado em texto simples do segredo

   Valores de segredos não podem ser recuperados como texto simples por esse endpoint.

2. Metadados como o nome do segredo e suas datas **[CORRECT]**

   O endpoint de leitura expõe metadados, não o valor armazenado do segredo.

3. O payload encrypted\_value reutilizável do segredo

   A resposta não retorna o payload criptografado do segredo enviado.

4. A chave privada de descriptografia do repositório

   O GitHub não expõe aqui a chave privada de descriptografia do repositório.

**Concept:** API de leitura apenas de metadados de segredos

**Authored coaching hints:**

- Diferencie descobrir a existência de um segredo de ler seu conteúdo.
- Campos enviados na escrita não precisam ser retornados na leitura.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/secrets>

<!-- certification-coach-question:actions-194:ab6dea2a54c0033addf1f9791d525dc2ce3a60119e0e3be595fcc04442b8d0da -->
## Question 194: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-194`

**Content revision:** `ab6dea2a54c0033addf1f9791d525dc2ce3a60119e0e3be595fcc04442b8d0da`

**en review revision:** `2f5b30d39364c0c78933c0eb63f6fb548f310f0233b0a609beea49445676e217`
**es review revision:** `304da5efe2a635468a033b75dfef19dbf71ca545720a23231f9fbfb25d9bf1bf`
**pt-BR review revision:** `1215c4b1d578adaf673389adcc8943fc09685e7588714a489306a11554ef61bc`

### English

Which REST method and path create a repository configuration variable from a name and plaintext value?

1. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   The variable API does not use this PUT path to create variables.

2. GET /repos/\{owner\}/\{repo\}/actions/variables

   GET lists variables rather than creating one.

3. POST /repos/\{owner\}/\{repo\}/actions/secrets

   Secret storage uses a different encrypted create-or-update interface.

4. POST /repos/\{owner\}/\{repo\}/actions/variables **[CORRECT]**

   Repository variable creation uses POST to the variables collection.

**Concept:** REST configuration variable creation

**Authored coaching hints:**

- Secrets and variables have different payloads and endpoint methods.
- Check both the resource family and whether the operation reads or writes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué método y ruta REST crean una variable de configuración de repositorio con un nombre y un valor en texto plano?

1. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   La API de variables no usa esta ruta PUT para crear variables.

2. GET /repos/\{owner\}/\{repo\}/actions/variables

   GET enumera variables en lugar de crearlas.

3. POST /repos/\{owner\}/\{repo\}/actions/secrets

   El almacenamiento de secretos usa otra interfaz cifrada de creación o actualización.

4. POST /repos/\{owner\}/\{repo\}/actions/variables **[CORRECT]**

   Crear variables de repositorio usa POST en la colección variables.

**Concept:** Creación de variables de configuración por REST

**Authored coaching hints:**

- Secretos y variables tienen cargas y métodos de endpoint distintos.
- Comprueba tanto la familia de recursos como si la operación lee o escribe.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual método e caminho REST criam uma variável de configuração de repositório com um nome e um valor em texto simples?

1. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   A API de variáveis não usa esse caminho PUT para criar variáveis.

2. GET /repos/\{owner\}/\{repo\}/actions/variables

   GET lista variáveis em vez de criá-las.

3. POST /repos/\{owner\}/\{repo\}/actions/secrets

   O armazenamento de segredos usa outra interface criptografada de criação ou atualização.

4. POST /repos/\{owner\}/\{repo\}/actions/variables **[CORRECT]**

   Criar variáveis de repositório usa POST na coleção variables.

**Concept:** Criação de variáveis de configuração via REST

**Authored coaching hints:**

- Segredos e variáveis têm payloads e métodos de endpoint diferentes.
- Confira tanto a família de recursos quanto se a operação lê ou grava.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/variables>

<!-- certification-coach-question:actions-195:51ded5f9a8561c336200e360f1fc869f970d5e55d422ffa79e7b48078597ead0 -->
## Question 195: Manage GitHub Actions for the enterprise

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-195`

**Content revision:** `51ded5f9a8561c336200e360f1fc869f970d5e55d422ffa79e7b48078597ead0`

**en review revision:** `474e347a1ec5fa73b8efc15b76c51861a7d6bd7c829b4c028b07473cee02f2c2`
**es review revision:** `152766d05b68729faf7137ce9f984ca3f2c507d052512d403171bd3326af9c26`
**pt-BR review revision:** `c9876bdffe0d207cf73ee022bea0ef2f5217595c68a45091d1f4e27beb5e7622`

### English

Which REST request changes an existing repository configuration variable's value?

1. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   GET retrieves the variable but does not update it.

2. DELETE /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   DELETE removes the variable instead of changing its value.

3. PATCH /repos/\{owner\}/\{repo\}/actions/variables/\{name\} **[CORRECT]**

   The update repository variable endpoint uses PATCH with the changed fields.

4. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   PUT is used by the secret upsert API, not this variable update endpoint.

**Concept:** REST configuration variable update

**Authored coaching hints:**

- Compare the operation's effect before choosing its HTTP method.
- Do not apply the secrets API's upsert convention to variables.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud REST cambia el valor de una variable de configuración de repositorio existente?

1. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   GET obtiene la variable, pero no la actualiza.

2. DELETE /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   DELETE elimina la variable en lugar de cambiar su valor.

3. PATCH /repos/\{owner\}/\{repo\}/actions/variables/\{name\} **[CORRECT]**

   El endpoint de actualización de variables de repositorio usa PATCH con los campos modificados.

4. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   PUT se usa en la API de creación o actualización de secretos, no en este endpoint de variable.

**Concept:** Actualización de variables de configuración por REST

**Authored coaching hints:**

- Compara el efecto de la operación antes de elegir el método HTTP.
- No apliques la convención de creación o actualización de secretos a variables.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação REST altera o valor de uma variável de configuração de repositório existente?

1. GET /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   GET obtém a variável, mas não a atualiza.

2. DELETE /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   DELETE remove a variável em vez de alterar seu valor.

3. PATCH /repos/\{owner\}/\{repo\}/actions/variables/\{name\} **[CORRECT]**

   O endpoint de atualização de variáveis de repositório usa PATCH com os campos alterados.

4. PUT /repos/\{owner\}/\{repo\}/actions/variables/\{name\}

   PUT é usado na API de criação ou atualização de segredos, não nesse endpoint de variável.

**Concept:** Atualização de variáveis de configuração via REST

**Authored coaching hints:**

- Compare o efeito da operação antes de escolher o método HTTP.
- Não aplique a convenção de criação ou atualização de segredos a variáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/variables>

<!-- certification-coach-question:actions-196:e553abc28ff32b8012968cfe277f105339f2de2cccbab0674f32de5326c48910 -->
## Question 196: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-196`

**Content revision:** `e553abc28ff32b8012968cfe277f105339f2de2cccbab0674f32de5326c48910`

**en review revision:** `0abf3f366eb9dd16eb84b415d36db194dbbf79775ffad33f5df2a45d66ca2112`
**es review revision:** `f384d5e219e426a6e427c09909cf4818baad5bf4de9878850ad008e8453f9dda`
**pt-BR review revision:** `b2d80dd007f52a54cd35930018c8f1ea39e96c9da7221d8b6a006753ef6d7ff7`

### English

Which explicit GITHUB\_TOKEN permission allows reading repository files without granting write access?

1. contents: read **[CORRECT]**

   Contents read grants read access to repository content.

2. issues: read

   Issues read concerns issue data, not repository files.

3. packages: read

   Packages read concerns package registry content.

4. actions: read

   Actions read concerns Actions resources rather than source files.

**Concept:** Grant the token only the repository capabilities required by the job.

**Authored coaching hints:**

- Separate proof of identity from authorization at the destination.
- Compare the credential's scope with the operation actually required.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué permiso explícito de GITHUB\_TOKEN permite leer archivos del repositorio sin conceder escritura?

1. contents: read **[CORRECT]**

   Contents read concede lectura del contenido del repositorio.

2. issues: read

   Issues read afecta a datos de issues, no a archivos del repositorio.

3. packages: read

   Packages read afecta al contenido del registro de paquetes.

4. actions: read

   Actions read afecta a recursos de Actions, no a archivos fuente.

**Concept:** Concede al token solo las capacidades del repositorio que necesita el trabajo.

**Authored coaching hints:**

- Distingue probar la identidad de obtener autorización en el destino.
- Compara el alcance de la credencial con la operación realmente necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual permissão explícita do GITHUB\_TOKEN permite ler arquivos do repositório sem conceder escrita?

1. contents: read **[CORRECT]**

   Contents read concede leitura do conteúdo do repositório.

2. issues: read

   Issues read se refere a dados de issues, não aos arquivos do repositório.

3. packages: read

   Packages read se refere ao conteúdo do registro de pacotes.

4. actions: read

   Actions read se refere a recursos do Actions, não aos arquivos-fonte.

**Concept:** Conceda ao token apenas as capacidades do repositório necessárias ao job.

**Authored coaching hints:**

- Diferencie provar a identidade de obter autorização no destino.
- Compare o escopo da credencial com a operação realmente necessária.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/authenticate-with-github_token>

<!-- certification-coach-question:actions-197:02c33a1b1d4b08ba3be150173456986b2c27908740b51af901efa89ea704e444 -->
## Question 197: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-197`

**Content revision:** `02c33a1b1d4b08ba3be150173456986b2c27908740b51af901efa89ea704e444`

**en review revision:** `c7945c1bc8eaffb9da34cf91134650b3bc9655864581fb47abe470701f096233`
**es review revision:** `58b1e426b842fda5d1f1adfc5d4d1351e277f6c6750e6ffc1973ba1ba2eee9ad`
**pt-BR review revision:** `0045f111b324de515eb8fb400230b5460a3be3d0862945f35e6600dd9b3593b6`

### English

What does OIDC federation remove from a supported cloud deployment workflow?

1. The need to limit the deployment role's permissions

   Federated roles still need least-privilege permissions.

2. The need to store a long-lived cloud access secret **[CORRECT]**

   Federation exchanges workflow identity for short-lived cloud credentials.

3. The need to configure cloud-side authorization

   Cloud trust and authorization still require configuration.

4. The need to validate the workflow's identity

   The cloud must still verify the presented identity claims.

**Concept:** OIDC reduces persistent credential storage, not authorization requirements.

**Authored coaching hints:**

- Separate proof of identity from authorization at the destination.
- Compare the credential's scope with the operation actually required.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué elimina la federación OIDC de un flujo de despliegue en nube compatible?

1. La necesidad de limitar los permisos del rol de despliegue

   Los roles federados siguen necesitando permisos mínimos.

2. La necesidad de guardar un secreto de nube duradero **[CORRECT]**

   La federación intercambia identidad del flujo por credenciales de corta duración.

3. La necesidad de configurar autorización en la nube

   La confianza y autorización en la nube siguen necesitando configuración.

4. La necesidad de validar la identidad del flujo

   La nube debe verificar las declaraciones de identidad presentadas.

**Concept:** OIDC reduce el almacenamiento de credenciales persistentes, no los requisitos de autorización.

**Authored coaching hints:**

- Distingue probar la identidad de obtener autorización en el destino.
- Compara el alcance de la credencial con la operación realmente necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a federação OIDC elimina de um workflow de implantação em nuvem compatível?

1. A necessidade de limitar as permissões do papel de implantação

   Papéis federados ainda precisam de permissões mínimas.

2. A necessidade de guardar um segredo de nuvem duradouro **[CORRECT]**

   A federação troca a identidade do workflow por credenciais de curta duração.

3. A necessidade de configurar autorização na nuvem

   Confiança e autorização na nuvem ainda exigem configuração.

4. A necessidade de validar a identidade do workflow

   A nuvem precisa verificar as declarações de identidade apresentadas.

**Concept:** OIDC reduz o armazenamento de credenciais persistentes, não os requisitos de autorização.

**Authored coaching hints:**

- Diferencie provar a identidade de obter autorização no destino.
- Compare o escopo da credencial com a operação realmente necessária.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-198:a0cea5e69d05043d0830a9384d94c3317a2e14b693a68a7005d45f8727879144 -->
## Question 198: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-198`

**Content revision:** `a0cea5e69d05043d0830a9384d94c3317a2e14b693a68a7005d45f8727879144`

**en review revision:** `3b706060ad729e39a01679fd0cebe90e531662beac6d573d87a2941f01857166`
**es review revision:** `fac73ffa7960a3a4d4fcec075091d5881babfe83215760f4c643dd573b400a6d`
**pt-BR review revision:** `1c420cb149ea9c63e3317c0d18aaf6d041bfe14f567daf16f0c88b47e8b1acfd`

### English

Which workflow permission permits requesting a GitHub OIDC identity token?

1. deployments: write

   Deployments write concerns GitHub deployment records.

2. packages: write

   Packages write concerns package registry operations.

3. id-token: write **[CORRECT]**

   Id-token write permits requesting an OIDC token.

4. contents: write

   Contents write permits repository-content operations.

**Concept:** The permission to request an identity token is separate from permission to change cloud resources.

**Authored coaching hints:**

- Separate proof of identity from authorization at the destination.
- Compare the credential's scope with the operation actually required.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué permiso del flujo permite solicitar un token de identidad OIDC de GitHub?

1. deployments: write

   Deployments write afecta a registros de despliegue de GitHub.

2. packages: write

   Packages write afecta a operaciones del registro de paquetes.

3. id-token: write **[CORRECT]**

   Id-token write permite solicitar un token OIDC.

4. contents: write

   Contents write permite operaciones sobre contenido del repositorio.

**Concept:** Poder solicitar un token de identidad no equivale a poder modificar recursos de nube.

**Authored coaching hints:**

- Distingue probar la identidad de obtener autorización en el destino.
- Compara el alcance de la credencial con la operación realmente necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual permissão do workflow permite solicitar um token de identidade OIDC do GitHub?

1. deployments: write

   Deployments write se refere a registros de implantação do GitHub.

2. packages: write

   Packages write se refere a operações do registro de pacotes.

3. id-token: write **[CORRECT]**

   Id-token write permite solicitar um token OIDC.

4. contents: write

   Contents write permite operações sobre o conteúdo do repositório.

**Concept:** Poder solicitar um token de identidade não equivale a poder alterar recursos da nuvem.

**Authored coaching hints:**

- Diferencie provar a identidade de obter autorização no destino.
- Compare o escopo da credencial com a operação realmente necessária.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-199:2371442b0347e5b272d7d6ebfa600487b438e5010612854418804560dab17aeb -->
## Question 199: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-199`

**Content revision:** `2371442b0347e5b272d7d6ebfa600487b438e5010612854418804560dab17aeb`

**en review revision:** `b58e50940fdc6b3a363bb06a7bd835cccc1fbc43418eac2243da43229e5cdee9`
**es review revision:** `5e30110d954a738519523889a9bf19b4d1bb388fd04a93799c54bfe140caf5b5`
**pt-BR review revision:** `7ddf6d66b3a54c54d5de5dfaee303c9940d3069c07eea40f590aa7a14bbf3d6d`

### English

An OIDC token is issued successfully. What still controls access to the target cloud resources?

1. The job's contents: write permission

   Contents write authorizes repository-content operations, not cloud access.

2. The runner's repository collaborator role

   Repository collaboration does not grant the cloud role.

3. The repository's branch protection settings

   Branch protection does not grant cloud-resource permissions.

4. The cloud trust policy and authorized role **[CORRECT]**

   The cloud validates identity claims and grants the configured role's permissions.

**Concept:** Successful token issuance does not itself grant cloud-resource access.

**Authored coaching hints:**

- Separate proof of identity from authorization at the destination.
- Compare the credential's scope with the operation actually required.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se emite correctamente un token OIDC. ¿Qué sigue controlando el acceso a los recursos de nube de destino?

1. El permiso contents: write del trabajo

   Contents write autoriza operaciones sobre contenido del repositorio, no acceso a nube.

2. El rol de colaborador del runner en el repositorio

   Colaborar en un repositorio no concede el rol de nube.

3. Las protecciones de ramas del repositorio

   La protección de ramas no concede permisos sobre recursos de nube.

4. La política de confianza y el rol autorizado en la nube **[CORRECT]**

   La nube valida declaraciones de identidad y concede los permisos del rol configurado.

**Concept:** Emitir correctamente el token no concede por sí mismo acceso a recursos de nube.

**Authored coaching hints:**

- Distingue probar la identidad de obtener autorización en el destino.
- Compara el alcance de la credencial con la operación realmente necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um token OIDC é emitido com sucesso. O que ainda controla o acesso aos recursos da nuvem de destino?

1. A permissão contents: write do job

   Contents write autoriza operações sobre conteúdo do repositório, não acesso à nuvem.

2. O papel de colaborador do runner no repositório

   Colaborar em um repositório não concede o papel de nuvem.

3. As proteções de branches do repositório

   A proteção de branches não concede permissões sobre recursos da nuvem.

4. A política de confiança e o papel autorizado na nuvem **[CORRECT]**

   A nuvem valida declarações de identidade e concede as permissões do papel configurado.

**Concept:** Emitir o token com sucesso não concede acesso aos recursos da nuvem por si só.

**Authored coaching hints:**

- Diferencie provar a identidade de obter autorização no destino.
- Compare o escopo da credencial com a operação realmente necessária.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-200:d31c3f270bafdb52cebc4938c4e285770880961c2ce00c2bb314abd52660f0ff -->
## Question 200: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-200`

**Content revision:** `d31c3f270bafdb52cebc4938c4e285770880961c2ce00c2bb314abd52660f0ff`

**en review revision:** `b668cdf68af35b6c9b482f9aa7d05ddded5b514f0681f1c7d34157dcc21633c7`
**es review revision:** `41a74b945f8977fec8cd9076718e193e5102992a20b7a86a605cf610ac23c158`
**pt-BR review revision:** `34a84caff479cccd321599d45cafb188e75ffc5968e5a4756d274e18c54d75e4`

### English

Which OIDC token claim names the intended audience that a cloud trust policy can validate?

1. aud **[CORRECT]**

   Aud identifies the token's intended audience.

2. sub

   Sub identifies the subject represented by the token.

3. iss

   Iss identifies the token's issuer.

4. exp

   Exp gives the token's expiration time.

**Concept:** Cloud trust evaluates the expected audience alongside subject and other identity claims.

**Authored coaching hints:**

- Separate proof of identity from authorization at the destination.
- Compare the credential's scope with the operation actually required.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué declaración de un token OIDC identifica la audiencia prevista que puede validar una política de confianza de nube?

1. aud **[CORRECT]**

   Aud identifica la audiencia prevista del token.

2. sub

   Sub identifica el sujeto representado por el token.

3. iss

   Iss identifica el emisor del token.

4. exp

   Exp indica el momento de caducidad del token.

**Concept:** La confianza en nube evalúa la audiencia prevista junto al sujeto y otras declaraciones de identidad.

**Authored coaching hints:**

- Distingue probar la identidad de obtener autorización en el destino.
- Compara el alcance de la credencial con la operación realmente necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual declaração de um token OIDC identifica o público-alvo que uma política de confiança da nuvem pode validar?

1. aud **[CORRECT]**

   Aud identifica o público-alvo do token.

2. sub

   Sub identifica o sujeito representado pelo token.

3. iss

   Iss identifica o emissor do token.

4. exp

   Exp indica o horário de expiração do token.

**Concept:** A confiança na nuvem avalia o público-alvo junto ao sujeito e outras declarações de identidade.

**Authored coaching hints:**

- Diferencie provar a identidade de obter autorização no destino.
- Compare o escopo da credencial com a operação realmente necessária.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-201:e0a7e1350b6f12f7482a9e9ce5e7648e3c43cc367a85d3e529948935bcde2fe1 -->
## Question 201: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-201`

**Content revision:** `e0a7e1350b6f12f7482a9e9ce5e7648e3c43cc367a85d3e529948935bcde2fe1`

**en review revision:** `1c721eb6a09ffd839a2a12a517f7fbff6e253c769739176660cf8d3ed636a09c`
**es review revision:** `a2dea4d251487a54a836d311fe8d74c6383239f9cccb4d97faea7741de39f560`
**pt-BR review revision:** `39ba3d7235f315f0cc7ed91211735c301c87a1ba595d1ecbea9234c8e6d30c2e`

### English

A Bash step receives an untrusted pull request title in PR\_TITLE. Which usage keeps it as data without evaluation?

1. sh -c "$PR\_TITLE"

   Sh -c executes the title as a command string.

2. printf '%s\\n' "$PR\_TITLE" **[CORRECT]**

   A fixed printf format and quoted expansion treat the title as data.

3. eval "$PR\_TITLE"

   Eval reinterprets the title as shell instructions.

4. bash -c "$PR\_TITLE"

   Bash -c executes the title as a command string.

**Concept:** Pass untrusted context through an environment variable and avoid evaluating its contents.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso Bash recibe un título de pull request no confiable en PR\_TITLE. ¿Qué uso lo mantiene como datos sin evaluarlo?

1. sh -c "$PR\_TITLE"

   Sh -c ejecuta el título como una cadena de comandos.

2. printf '%s\\n' "$PR\_TITLE" **[CORRECT]**

   Un formato printf fijo y una expansión entre comillas tratan el título como datos.

3. eval "$PR\_TITLE"

   Eval reinterpreta el título como instrucciones de shell.

4. bash -c "$PR\_TITLE"

   Bash -c ejecuta el título como una cadena de comandos.

**Concept:** Pasa el contexto no confiable mediante una variable de entorno y evita evaluar su contenido.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa Bash recebe um título de pull request não confiável em PR\_TITLE. Qual uso o mantém como dados sem avaliá-lo?

1. sh -c "$PR\_TITLE"

   Sh -c executa o título como uma string de comandos.

2. printf '%s\\n' "$PR\_TITLE" **[CORRECT]**

   Um formato printf fixo e uma expansão entre aspas tratam o título como dados.

3. eval "$PR\_TITLE"

   Eval reinterpreta o título como instruções de shell.

4. bash -c "$PR\_TITLE"

   Bash -c executa o título como uma string de comandos.

**Concept:** Passe contexto não confiável por uma variável de ambiente e evite avaliar seu conteúdo.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-202:3734ecfbecccfb3f5afaf3945f311eaa3535765ad47b096d6b0215992a35348f -->
## Question 202: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-202`

**Content revision:** `3734ecfbecccfb3f5afaf3945f311eaa3535765ad47b096d6b0215992a35348f`

**en review revision:** `aec3d3587a11fc2511b75c410dfbe1b7a4a2468cbd421b1e8d06520fe373b98e`
**es review revision:** `cf51087eb29bc89f87cf8c8335c761a453ee67c355c0190397a251777b527b5f`
**pt-BR review revision:** `73c1d2c77d64125dd5ec8becfa99e395c8157ec435ea0c3e7b8172119e3066e9`

### English

What is the key danger of executing a fork's build script in a privileged pull\_request\_target job?

1. The script cannot access any network services

   The trigger does not guarantee network isolation.

2. The job automatically runs inside an isolated sandbox

   The trigger does not automatically sandbox untrusted code.

3. Untrusted code can use the job's privileges **[CORRECT]**

   Executed fork code may access credentials and privileged repository operations.

4. The event always disables repository authentication

   This event can have privileged access rather than disabling it.

**Concept:** A privileged event is unsafe when it executes untrusted pull request code.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el peligro principal de ejecutar el script de compilación de un fork en un trabajo pull\_request\_target privilegiado?

1. El script no puede acceder a servicios de red

   El desencadenador no garantiza aislamiento de red.

2. El trabajo siempre se ejecuta en un aislamiento automático

   El desencadenador no aísla automáticamente código no confiable.

3. El código no confiable puede usar los privilegios del trabajo **[CORRECT]**

   El código del fork puede acceder a credenciales y operaciones privilegiadas.

4. El evento siempre desactiva la autenticación del repositorio

   Este evento puede tener acceso privilegiado, no desactivarlo.

**Concept:** Un evento privilegiado es inseguro cuando ejecuta código de pull requests no confiables.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o principal perigo de executar o script de build de um fork em um job pull\_request\_target privilegiado?

1. O script não pode acessar serviços de rede

   O gatilho não garante isolamento de rede.

2. O job sempre executa em isolamento automático

   O gatilho não isola código não confiável automaticamente.

3. Código não confiável pode usar os privilégios do job **[CORRECT]**

   O código do fork pode acessar credenciais e operações privilegiadas.

4. O evento sempre desativa a autenticação do repositório

   Esse evento pode ter acesso privilegiado, não desativá-lo.

**Concept:** Um evento privilegiado é inseguro quando executa código de pull requests não confiáveis.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-203:264466bbca604bb9c68f42d87efe8c8b733895a9005480c328e35c1dfca5c260 -->
## Question 203: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-203`

**Content revision:** `264466bbca604bb9c68f42d87efe8c8b733895a9005480c328e35c1dfca5c260`

**en review revision:** `fe333b8f84d1dfb6165423c0721e568f0403f9853ae1fd0b38d506773af02645`
**es review revision:** `03c49a3c887c0f15ebdc57966bb4a7112b9f0858e13f9fad375a9567eb772959`
**pt-BR review revision:** `90a1e43d0256df8f7012f1a0a89192f80af1bfc4f96da21ce9f97a8428ae1b7a`

### English

A privileged workflow\_run job downloads an artifact from untrusted PR tests. Which rule should govern its use?

1. Trust its contents because GitHub stored the artifact

   Hosting an artifact does not validate its contents.

2. Trust its contents if the filename ends in .zip

   A file extension does not establish trustworthy provenance.

3. Execute its scripts before checking the source run

   Executing before validation crosses the trust boundary.

4. Treat its contents as untrusted and validate before use **[CORRECT]**

   Storage does not establish trust; validate producer, contents, and permitted use.

**Concept:** Passing data between workflows does not remove its original trust level.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo workflow\_run privilegiado descarga un artefacto de pruebas de PR no confiables. ¿Qué regla debe regir su uso?

1. Confiar en su contenido porque GitHub guardó el artefacto

   Alojar un artefacto no valida su contenido.

2. Confiar en su contenido si el nombre termina en .zip

   La extensión de un archivo no establece una procedencia confiable.

3. Ejecutar sus scripts antes de comprobar la ejecución de origen

   Ejecutar antes de validar cruza el límite de confianza.

4. Tratar su contenido como no confiable y validarlo antes de usarlo **[CORRECT]**

   El almacenamiento no establece confianza; valida productor, contenido y uso permitido.

**Concept:** Pasar datos entre flujos no elimina su nivel de confianza original.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job workflow\_run privilegiado baixa um artefato de testes de PR não confiáveis. Qual regra deve orientar seu uso?

1. Confiar no conteúdo porque GitHub armazenou o artefato

   Hospedar um artefato não valida seu conteúdo.

2. Confiar no conteúdo se o nome terminar em .zip

   A extensão de um arquivo não estabelece procedência confiável.

3. Executar seus scripts antes de verificar a execução de origem

   Executar antes de validar cruza o limite de confiança.

4. Tratar seu conteúdo como não confiável e validar antes do uso **[CORRECT]**

   Armazenamento não estabelece confiança; valide produtor, conteúdo e uso permitido.

**Concept:** Passar dados entre workflows não remove seu nível de confiança original.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-204:036faea7deca3a18ed31c2928857d59508c113aedca0b6c7b960d7e466d8103a -->
## Question 204: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-204`

**Content revision:** `036faea7deca3a18ed31c2928857d59508c113aedca0b6c7b960d7e466d8103a`

**en review revision:** `aa82556b8d4ab59e20a139bb0b24c8f6b899226a0625fd6dd287fc55ee1c2664`
**es review revision:** `dd700ac1d6631c04ae5606ad4c23a2d50d1ff73f0f79adc4b2e4fd8c92a812bf`
**pt-BR review revision:** `faeec4d7dc399f3f560a8a7501218184208092fe5b83a977a9beb7866887ab9c`

### English

Which generated file locks a workflow's direct and transitive action dependencies to specific commits?

1. .github/workflows/actions.lock **[CORRECT]**

   The workflow dependency lockfile records action commits and source identities.

2. .github/dependabot.yml

   Dependabot configuration controls update automation, not the action resolution inventory.

3. .github/CODEOWNERS

   Code owners identify reviewers rather than resolved action dependencies.

4. .github/workflows/deploy.yml

   An ordinary workflow file is not the generated dependency lockfile.

**Concept:** Workflow lockfiles cover action dependencies; reusable workflow calls need separate version control.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo generado fija las dependencias directas y transitivas de acciones de un flujo en commits específicos?

1. .github/workflows/actions.lock **[CORRECT]**

   El archivo de bloqueo registra commits de acciones e identidades de origen.

2. .github/dependabot.yml

   La configuración de Dependabot controla actualizaciones, no el inventario de resolución.

3. .github/CODEOWNERS

   Code owners identifica revisores, no dependencias de acciones resueltas.

4. .github/workflows/deploy.yml

   Un archivo de flujo normal no es el archivo de bloqueo generado.

**Concept:** Los archivos de bloqueo cubren dependencias de acciones; las llamadas a flujos reutilizables necesitan control de versión aparte.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo gerado fixa dependências diretas e transitivas de ações de um workflow em commits específicos?

1. .github/workflows/actions.lock **[CORRECT]**

   O arquivo de bloqueio registra commits de ações e identidades de origem.

2. .github/dependabot.yml

   A configuração do Dependabot controla atualizações, não o inventário de resolução.

3. .github/CODEOWNERS

   Code owners identifica revisores, não dependências de ações resolvidas.

4. .github/workflows/deploy.yml

   Um arquivo comum de workflow não é o arquivo de bloqueio gerado.

**Concept:** Arquivos de bloqueio cobrem dependências de ações; chamadas de workflows reutilizáveis precisam de controle de versão separado.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles>

<!-- certification-coach-question:actions-205:bcfa15c7d52bd36f5907dfe5acf252743a6a1cd1f1aac8d55e93ea89a3a25fa2 -->
## Question 205: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-205`

**Content revision:** `bcfa15c7d52bd36f5907dfe5acf252743a6a1cd1f1aac8d55e93ea89a3a25fa2`

**en review revision:** `ef1cdeff2fd7c1a3b69bcd6a4f9f7c7868d8666149cb906e9cae513de3dce139`
**es review revision:** `00f4899afb239aaec7fa6814286f2e5be53d209f25a099e2283adad8e86144a3`
**pt-BR review revision:** `fe067b6f2c7d2290cb44f2d55fea9b3b294728d3ce4df641330b78eab89b1c4a`

### English

What does a GitHub Marketplace action's Verified creator badge establish?

1. Every version reference is immutable

   A publisher badge does not make tags or branches immutable.

2. GitHub verified the publisher's identity **[CORRECT]**

   The badge is a publisher-identity signal.

3. GitHub audited every line of the action

   Identity verification is not a complete source-code audit.

4. Every release is free of vulnerabilities

   A verified identity does not guarantee vulnerability-free releases.

**Concept:** Publisher identity and the security of action code are different assurances.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué establece la insignia Verified creator de una acción de GitHub Marketplace?

1. Todas las referencias de versión son inmutables

   La insignia no convierte etiquetas o ramas en inmutables.

2. GitHub verificó la identidad del publicador **[CORRECT]**

   La insignia es una señal de identidad del publicador.

3. GitHub auditó cada línea de la acción

   Verificar una identidad no es auditar todo el código fuente.

4. Todas las versiones carecen de vulnerabilidades

   Una identidad verificada no garantiza versiones sin vulnerabilidades.

**Concept:** La identidad del publicador y la seguridad del código ofrecen garantías distintas.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que o selo Verified creator de uma ação do GitHub Marketplace estabelece?

1. Todas as referências de versão são imutáveis

   O selo não torna tags ou branches imutáveis.

2. GitHub verificou a identidade do publicador **[CORRECT]**

   O selo é um sinal de identidade do publicador.

3. GitHub auditou cada linha da ação

   Verificar uma identidade não é auditar todo o código-fonte.

4. Todas as versões estão livres de vulnerabilidades

   Uma identidade verificada não garante versões sem vulnerabilidades.

**Concept:** A identidade do publicador e a segurança do código oferecem garantias diferentes.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-206:60b0f559fb9333952cd371f9d036a18bfb6ab4d246de37b2adf344122f954b81 -->
## Question 206: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-206`

**Content revision:** `60b0f559fb9333952cd371f9d036a18bfb6ab4d246de37b2adf344122f954b81`

**en review revision:** `9518ae5e46b0cc97a25c879a216f0510030070855e0cfab81258c5fcb0209738`
**es review revision:** `9354b751af5445dc89c288676afa98e6e0a1034fe0804b0fee3973202bc6cc04`
**pt-BR review revision:** `1e4708035ccf4d69247a9962121966c6988175fee62a2e8fd462c8e86e644c89`

### English

Which workflow command registers a dynamically generated sensitive value for log masking?

1. ::notice::VALUE

   Notice creates an annotation rather than registering masking.

2. ::error::VALUE

   Error creates an error annotation rather than registering masking.

3. ::add-mask::VALUE **[CORRECT]**

   Add-mask registers the value for redaction in logs.

4. ::debug::VALUE

   Debug emits a diagnostic message rather than registering masking.

**Concept:** Register generated sensitive values before any operation that could print them.

**Authored coaching hints:**

- A display filter and a credential's validity are different controls.
- Consider transformations and storage as separate exposure paths.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de flujo registra un valor sensible generado dinámicamente para ocultarlo en los registros?

1. ::notice::VALUE

   Notice crea una anotación, no registra ocultación.

2. ::error::VALUE

   Error crea una anotación de error, no registra ocultación.

3. ::add-mask::VALUE **[CORRECT]**

   Add-mask registra el valor para ocultarlo en los registros.

4. ::debug::VALUE

   Debug emite un mensaje diagnóstico, no registra ocultación.

**Concept:** Registra los valores sensibles generados antes de operaciones que puedan imprimirlos.

**Authored coaching hints:**

- Un filtro de visualización y la validez de una credencial son controles distintos.
- Considera las transformaciones y el almacenamiento como vías de exposición distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando de workflow registra um valor sensível gerado dinamicamente para ocultá-lo nos logs?

1. ::notice::VALUE

   Notice cria uma anotação, não registra ocultação.

2. ::error::VALUE

   Error cria uma anotação de erro, não registra ocultação.

3. ::add-mask::VALUE **[CORRECT]**

   Add-mask registra o valor para ocultação nos logs.

4. ::debug::VALUE

   Debug emite uma mensagem de diagnóstico, não registra ocultação.

**Concept:** Registre valores sensíveis gerados antes de operações que possam imprimi-los.

**Authored coaching hints:**

- Um filtro de exibição e a validade de uma credencial são controles distintos.
- Considere transformações e armazenamento como caminhos de exposição diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-207:8d4424b1d8e55dc5612eb747b4f47fe93cc7116805a9ee2436a220b613c27c95 -->
## Question 207: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-207`

**Content revision:** `8d4424b1d8e55dc5612eb747b4f47fe93cc7116805a9ee2436a220b613c27c95`

**en review revision:** `2e9b869d5002d874d48decde608d563406cd133e3421ac9ab556974be4dae491`
**es review revision:** `b057baaf0c5ca42ae47a7ee5ebe860d0ec5faec3fd288f49b54bdaca1a19ab41`
**pt-BR review revision:** `a886ed4978280eff2989c384918655f86a5809f6d3741f589db6dfdc21b2d3e3`

### English

Why must a Base64-encoded secret not be assumed to inherit the original value's log masking?

1. Base64 values are exempt from log masking

   Encoded sensitive values can be registered for masking.

2. Only organization secrets can register encoded masks

   Generated or transformed values can be masked regardless of secret scope.

3. Log masking only applies to error annotations

   Masking is not restricted to error annotations.

4. Redaction does not reliably match transformed values **[CORRECT]**

   A transformed value may need separate masking and should not be logged.

**Concept:** Encoding is not encryption or guaranteed redaction.

**Authored coaching hints:**

- A display filter and a credential's validity are different controls.
- Consider transformations and storage as separate exposure paths.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué no se debe asumir que un secreto codificado en Base64 hereda la ocultación del valor original en los registros?

1. Los valores Base64 están exentos de ocultación

   Los valores sensibles codificados pueden registrarse para ocultación.

2. Solo los secretos de organización pueden registrar máscaras codificadas

   Los valores generados o transformados pueden ocultarse independientemente del alcance del secreto.

3. La ocultación solo se aplica a anotaciones de error

   La ocultación no se limita a anotaciones de error.

4. La ocultación no detecta de forma fiable los valores transformados **[CORRECT]**

   Un valor transformado puede necesitar ocultación independiente y no debe registrarse.

**Concept:** Codificar no equivale a cifrar ni garantiza ocultación.

**Authored coaching hints:**

- Un filtro de visualización y la validez de una credencial son controles distintos.
- Considera las transformaciones y el almacenamiento como vías de exposición distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que não se deve presumir que um segredo codificado em Base64 herda a ocultação do valor original nos logs?

1. Valores Base64 estão isentos de ocultação em logs

   Valores sensíveis codificados podem ser registrados para ocultação.

2. Somente segredos de organização podem registrar máscaras codificadas

   Valores gerados ou transformados podem ser ocultados independentemente do escopo do segredo.

3. A ocultação só se aplica a anotações de erro

   A ocultação não se limita a anotações de erro.

4. A ocultação não reconhece valores transformados de forma confiável **[CORRECT]**

   Um valor transformado pode exigir ocultação separada e não deve ser registrado.

**Concept:** Codificar não equivale a criptografar nem garante ocultação.

**Authored coaching hints:**

- Um filtro de exibição e a validade de uma credencial são controles distintos.
- Considere transformações e armazenamento como caminhos de exposição diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-208:bc4641d45de06f30f6013bd401b36f70ac7997f78a24e6c814cce6b357b6a6a1 -->
## Question 208: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-208`

**Content revision:** `bc4641d45de06f30f6013bd401b36f70ac7997f78a24e6c814cce6b357b6a6a1`

**en review revision:** `cbf8669a5338d54372a6d61e21112d3a464d89d6664bb21084bd665ec28183a1`
**es review revision:** `aaeb592be47b46e43ea228ad1aa55cb13bbdca88376ce1e0f34a6c4677e72c48`
**pt-BR review revision:** `eae91feebebf30c1730b3298138968333b344d701c329c6a92117ae8e8867b5b`

### English

A live credential appears unredacted in a workflow log. Which response addresses both exposure and continued access?

1. Revoke or rotate it and remove the exposed logs **[CORRECT]**

   Rotation invalidates exposed access; deleting logs limits further disclosure.

2. Rename the secret and retain the exposed logs

   Renaming a secret does not invalidate its value.

3. Rerun the job and keep the original credential

   A rerun does not invalidate the leaked credential.

4. Disable debug output and keep the credential unchanged

   Future logging changes do not revoke an already exposed value.

**Concept:** Reducing retained exposure and invalidating leaked credentials are separate remediation tasks.

**Authored coaching hints:**

- A display filter and a credential's validity are different controls.
- Consider transformations and storage as separate exposure paths.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una credencial activa aparece sin ocultar en un registro de flujo. ¿Qué respuesta aborda tanto la exposición como el acceso continuado?

1. Revocarla o rotarla y eliminar los registros expuestos **[CORRECT]**

   Rotar invalida el acceso expuesto; eliminar registros limita más divulgación.

2. Renombrar el secreto y conservar los registros expuestos

   Renombrar un secreto no invalida su valor.

3. Reejecutar el trabajo y mantener la credencial original

   Reejecutar no invalida la credencial filtrada.

4. Desactivar la depuración y mantener la credencial sin cambios

   Cambiar registros futuros no revoca un valor ya expuesto.

**Concept:** Reducir la exposición conservada e invalidar credenciales filtradas son tareas distintas.

**Authored coaching hints:**

- Un filtro de visualización y la validez de una credencial son controles distintos.
- Considera las transformaciones y el almacenamiento como vías de exposición distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma credencial ativa aparece sem ocultação em um log de workflow. Qual resposta trata tanto a exposição quanto o acesso continuado?

1. Revogá-la ou rotacioná-la e remover os logs expostos **[CORRECT]**

   Rotacionar invalida o acesso exposto; excluir logs limita novas divulgações.

2. Renomear o segredo e manter os logs expostos

   Renomear um segredo não invalida seu valor.

3. Executar o job novamente e manter a credencial original

   Executar novamente não invalida a credencial vazada.

4. Desativar a depuração e manter a credencial inalterada

   Alterar logs futuros não revoga um valor já exposto.

**Concept:** Reduzir a exposição retida e invalidar credenciais vazadas são tarefas distintas.

**Authored coaching hints:**

- Um filtro de exibição e a validade de uma credencial são controles distintos.
- Considere transformações e armazenamento como caminhos de exposição diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-209:4f8db09aa6395abe75dec9d41bfd5781311cf62e59235de81f1e560ff1c07266 -->
## Question 209: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-209`

**Content revision:** `4f8db09aa6395abe75dec9d41bfd5781311cf62e59235de81f1e560ff1c07266`

**en review revision:** `7ea89013abed4b4ef1fdb972716b6a682e67d72bf70a96399b78ca9b3057d669`
**es review revision:** `c8aefc85d5c9fe2bcda8bcd9d0a74b124ba548d2352f0d356f6a092eedfedb5a`
**pt-BR review revision:** `dcf91c87965390f605ee19969a70e63ea98a25b8c9a9a6071d799f0ac20506da`

### English

Why should cloud credentials be excluded from a GitHub Actions dependency cache?

1. Cache storage permanently revokes any credential it receives

   Storing a credential does not revoke it.

2. Untrusted workflows may restore accessible cache contents **[CORRECT]**

   Cache access can allow other workflows, including fork PRs, to read data.

3. Caching automatically encrypts credentials for their owner only

   A cache is not an owner-only secret store.

4. Only the job that created a cache can ever restore it

   Caches are designed for reuse across eligible runs.

**Concept:** Dependency caches must not contain secrets or other sensitive files.

**Authored coaching hints:**

- A display filter and a credential's validity are different controls.
- Consider transformations and storage as separate exposure paths.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué deben excluirse las credenciales de nube de una caché de dependencias de GitHub Actions?

1. La caché revoca permanentemente cualquier credencial recibida

   Guardar una credencial no la revoca.

2. Flujos no confiables pueden restaurar contenido de caché accesible **[CORRECT]**

   El acceso a caché puede permitir leer datos a otros flujos, incluidos PR de forks.

3. La caché cifra automáticamente credenciales solo para su propietario

   Una caché no es un almacén de secretos exclusivo del propietario.

4. Solo el trabajo creador puede restaurar una caché

   Las cachés se diseñan para reutilizarse en ejecuciones elegibles.

**Concept:** Las cachés de dependencias no deben contener secretos ni otros archivos sensibles.

**Authored coaching hints:**

- Un filtro de visualización y la validez de una credencial son controles distintos.
- Considera las transformaciones y el almacenamiento como vías de exposición distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que credenciais de nuvem devem ser excluídas de um cache de dependências do GitHub Actions?

1. O cache revoga permanentemente qualquer credencial recebida

   Armazenar uma credencial não a revoga.

2. Workflows não confiáveis podem restaurar conteúdo de cache acessível **[CORRECT]**

   O acesso ao cache pode permitir que outros workflows, inclusive PRs de forks, leiam dados.

3. O cache criptografa credenciais apenas para seu proprietário

   Um cache não é um armazenamento de segredos exclusivo do proprietário.

4. Somente o job criador pode restaurar um cache

   Caches são projetados para reutilização em execuções elegíveis.

**Concept:** Caches de dependências não devem conter segredos nem outros arquivos sensíveis.

**Authored coaching hints:**

- Um filtro de exibição e a validade de uma credencial são controles distintos.
- Considere transformações e armazenamento como caminhos de exposição diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-210:5de2fc65fd7b43f4c05f70b6cc47a0d50949651a200ac938d2d124fd6be21d89 -->
## Question 210: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-210`

**Content revision:** `5de2fc65fd7b43f4c05f70b6cc47a0d50949651a200ac938d2d124fd6be21d89`

**en review revision:** `2f1bd236c524654102cb6c87f15e2d6c0be90f76624175b3111183e0434fabac`
**es review revision:** `ccdaccad37c90507f65933026ed864c2ea1fcff01117232d465634e9d2f3d2bf`
**pt-BR review revision:** `e10461c820b982337eb0ac7a35bbe6f9d76844d6025b6017e8f25ff94ca6cecc`

### English

Which feature provides a signed statement about an artifact's build origin?

1. Dependency caching

   Caching reuses files to reduce repeated work.

2. Branch protection

   Branch protection controls changes to branches.

3. Artifact attestation **[CORRECT]**

   Attestations connect an artifact to its producer and build context.

4. Artifact retention

   Retention determines how long stored output remains available.

**Concept:** Build provenance must be verified against a consumer's trust policy.

**Authored coaching hints:**

- Distinguish a build's origin from the safety of its contents.
- Match both the producer's identity and the artifact's exact contents to policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función proporciona una declaración firmada sobre el origen de compilación de un artefacto?

1. Caché de dependencias

   La caché reutiliza archivos para reducir trabajo repetido.

2. Protección de ramas

   La protección de ramas controla cambios en ramas.

3. Atestación de artefactos **[CORRECT]**

   Las atestaciones vinculan un artefacto con su productor y contexto de compilación.

4. Conservación de artefactos

   La conservación determina cuánto tiempo sigue disponible un resultado.

**Concept:** La procedencia de compilación debe verificarse frente a la política de confianza del consumidor.

**Authored coaching hints:**

- Distingue el origen de una compilación de la seguridad de su contenido.
- Contrasta tanto la identidad del productor como el contenido exacto con la política.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso fornece uma declaração assinada sobre a origem de compilação de um artefato?

1. Cache de dependências

   Cache reutiliza arquivos para reduzir trabalho repetido.

2. Proteção de branches

   Proteção de branches controla alterações em branches.

3. Atestação de artefatos **[CORRECT]**

   Atestações vinculam um artefato ao produtor e ao contexto da compilação.

4. Retenção de artefatos

   Retenção determina por quanto tempo uma saída fica disponível.

**Concept:** A procedência de compilação deve ser verificada conforme a política de confiança do consumidor.

**Authored coaching hints:**

- Diferencie a origem de uma compilação da segurança de seu conteúdo.
- Compare tanto a identidade do produtor quanto o conteúdo exato com a política.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/artifact-attestations>

<!-- certification-coach-question:actions-211:41f0c5fb2cf9be280d747ce80d426f2f5f83ef5107ae50b517223a5d36b20247 -->
## Question 211: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-211`

**Content revision:** `41f0c5fb2cf9be280d747ce80d426f2f5f83ef5107ae50b517223a5d36b20247`

**en review revision:** `3a910da9b33f93f5a801299dfb9227192d7cc7c882510170876d3cd7decee5eb`
**es review revision:** `d867db32ac79caac4f7a5818c132fed2c712bb250b085c4a6dea1636d6d4bfad`
**pt-BR review revision:** `ce52d180d1550fef4ff9f71ce96a2cdb45564f71b1447b77424d2e15f9f64e79`

### English

A binary-attestation job already has contents: read. Which additional permission pair enables identity signing and attestation storage?

1. packages: write; issues: write

   Package and issue permissions do not provide the required identity and attestation access.

2. deployments: write; statuses: write

   Deployment and status permissions do not provide the required identity and attestation access.

3. checks: write; pull-requests: write

   Check and pull request permissions do not provide the required identity and attestation access.

4. id-token: write; attestations: write **[CORRECT]**

   Identity-token access and attestation-write access are required for this attestation workflow.

**Concept:** Attestation jobs need explicit permissions for signing identity and publishing attestations.

**Authored coaching hints:**

- Distinguish a build's origin from the safety of its contents.
- Match both the producer's identity and the artifact's exact contents to policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de atestación de binarios ya tiene contents: read. ¿Qué par de permisos adicional habilita firma de identidad y almacenamiento de atestaciones?

1. packages: write; issues: write

   Los permisos de paquetes e issues no proporcionan el acceso de identidad y atestación requerido.

2. deployments: write; statuses: write

   Los permisos de despliegues y estados no proporcionan el acceso de identidad y atestación requerido.

3. checks: write; pull-requests: write

   Los permisos de checks y pull requests no proporcionan el acceso de identidad y atestación requerido.

4. id-token: write; attestations: write **[CORRECT]**

   El flujo necesita acceso al token de identidad y escritura de atestaciones.

**Concept:** Los trabajos de atestación necesitan permisos explícitos para identidad de firma y publicación de atestaciones.

**Authored coaching hints:**

- Distingue el origen de una compilación de la seguridad de su contenido.
- Contrasta tanto la identidad del productor como el contenido exacto con la política.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de atestação de binários já tem contents: read. Qual par adicional de permissões permite assinatura de identidade e armazenamento de atestações?

1. packages: write; issues: write

   Permissões de pacotes e issues não fornecem o acesso de identidade e atestação necessário.

2. deployments: write; statuses: write

   Permissões de implantações e status não fornecem o acesso de identidade e atestação necessário.

3. checks: write; pull-requests: write

   Permissões de checks e pull requests não fornecem o acesso de identidade e atestação necessário.

4. id-token: write; attestations: write **[CORRECT]**

   O workflow precisa de acesso ao token de identidade e escrita de atestações.

**Concept:** Jobs de atestação precisam de permissões explícitas para identidade de assinatura e publicação de atestações.

**Authored coaching hints:**

- Diferencie a origem de uma compilação da segurança de seu conteúdo.
- Compare tanto a identidade do produtor quanto o conteúdo exato com a política.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>

<!-- certification-coach-question:actions-212:235a809cf44a70f9a742dff062faff5f7882942300de7e59a5efe04ab0daeb78 -->
## Question 212: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-212`

**Content revision:** `235a809cf44a70f9a742dff062faff5f7882942300de7e59a5efe04ab0daeb78`

**en review revision:** `bf32196af88ebfe7a7e7c86bb6c1c5e8ce42836236d3c8173468ac89efcc854e`
**es review revision:** `6da959d10ca4776fc5497ff7a0c5703d6c85c39b37111627fe7370ff4cf20427`
**pt-BR review revision:** `15d7609b1536a03069614c287fa8e0cdb755af08e226626ca582f3f83ff24827`

### English

Which GitHub CLI command verifies a local binary's attestation against its expected source repository?

1. gh attestation verify dist/tool -R octo-org/tool **[CORRECT]**

   Attestation verify checks the binary against provenance associated with the expected repository.

2. gh run download 123 -R octo-org/tool

   Run download retrieves artifacts without performing this attestation verification.

3. gh release view v1.0 -R octo-org/tool

   Release view displays release information rather than verifying the binary's attestation.

4. gh api repos/octo-org/tool/actions/artifacts

   Listing artifacts does not verify a local binary's attestation.

**Concept:** Verification binds the local artifact to the expected producer, not merely to a download location.

**Authored coaching hints:**

- Distinguish a build's origin from the safety of its contents.
- Match both the producer's identity and the artifact's exact contents to policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de GitHub CLI verifica la atestación de un binario local frente al repositorio de origen esperado?

1. gh attestation verify dist/tool -R octo-org/tool **[CORRECT]**

   Attestation verify comprueba el binario frente a la procedencia del repositorio esperado.

2. gh run download 123 -R octo-org/tool

   Run download obtiene artefactos sin realizar esta verificación de atestación.

3. gh release view v1.0 -R octo-org/tool

   Release view muestra información de una versión, no verifica la atestación del binario.

4. gh api repos/octo-org/tool/actions/artifacts

   Enumerar artefactos no verifica la atestación de un binario local.

**Concept:** La verificación vincula el artefacto local con el productor esperado, no solo con una ubicación de descarga.

**Authored coaching hints:**

- Distingue el origen de una compilación de la seguridad de su contenido.
- Contrasta tanto la identidad del productor como el contenido exacto con la política.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do GitHub CLI verifica a atestação de um binário local em relação ao repositório de origem esperado?

1. gh attestation verify dist/tool -R octo-org/tool **[CORRECT]**

   Attestation verify confere o binário com a procedência do repositório esperado.

2. gh run download 123 -R octo-org/tool

   Run download obtém artefatos sem realizar essa verificação de atestação.

3. gh release view v1.0 -R octo-org/tool

   Release view mostra informações de uma versão, não verifica a atestação do binário.

4. gh api repos/octo-org/tool/actions/artifacts

   Listar artefatos não verifica a atestação de um binário local.

**Concept:** A verificação vincula o artefato local ao produtor esperado, não apenas a um local de download.

**Authored coaching hints:**

- Diferencie a origem de uma compilação da segurança de seu conteúdo.
- Compare tanto a identidade do produtor quanto o conteúdo exato com a política.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>

<!-- certification-coach-question:actions-213:c26d58904daa951008dd055f5c92ab326a31ed2c5eb2466b25884bf090e7b1f0 -->
## Question 213: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-213`

**Content revision:** `c26d58904daa951008dd055f5c92ab326a31ed2c5eb2466b25884bf090e7b1f0`

**en review revision:** `dd86ce3b777b71e1def2101e4c6533b193a92ebad9af17c292d71be45e8fe6d4`
**es review revision:** `9ea98d1a1d62c13fd132b43ee50f01f4d0f0a59244830d3382df5888c166af92`
**pt-BR review revision:** `49d1b3dcee6e27a324663df3b1d1bc07e251216c8a64fdca231296063686a7da`

### English

A binary's provenance is successfully verified against the expected repository and workflow. Which conclusion is still NOT justified?

1. The build context can be compared with policy

   Attested build context can support a policy decision.

2. The binary contains no exploitable vulnerabilities **[CORRECT]**

   Verified provenance does not establish that the software is vulnerability-free.

3. The attestation identifies the expected producer

   Matching provenance can establish the expected producer identity.

4. The attestation covers the binary being checked

   Successful content verification binds the attestation to the checked binary.

**Concept:** Authentic origin is not a substitute for assessing software security.

**Authored coaching hints:**

- Distinguish a build's origin from the safety of its contents.
- Match both the producer's identity and the artifact's exact contents to policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se verifica correctamente la procedencia de un binario frente al repositorio y flujo esperados. ¿Qué conclusión sigue SIN estar justificada?

1. El contexto de compilación puede contrastarse con la política

   El contexto de compilación atestado puede respaldar una decisión de política.

2. El binario no contiene vulnerabilidades explotables **[CORRECT]**

   Verificar procedencia no establece que el software carezca de vulnerabilidades.

3. La atestación identifica al productor esperado

   Una procedencia coincidente puede establecer la identidad del productor esperado.

4. La atestación cubre el binario que se comprueba

   Verificar el contenido vincula la atestación con el binario comprobado.

**Concept:** Un origen auténtico no sustituye la evaluación de seguridad del software.

**Authored coaching hints:**

- Distingue el origen de una compilación de la seguridad de su contenido.
- Contrasta tanto la identidad del productor como el contenido exacto con la política.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A procedência de um binário é verificada com sucesso em relação ao repositório e workflow esperados. Qual conclusão ainda NÃO é justificada?

1. O contexto da compilação pode ser comparado à política

   O contexto de compilação atestado pode apoiar uma decisão de política.

2. O binário não contém vulnerabilidades exploráveis **[CORRECT]**

   Verificar procedência não estabelece que o software está livre de vulnerabilidades.

3. A atestação identifica o produtor esperado

   Procedência correspondente pode estabelecer a identidade do produtor esperado.

4. A atestação cobre o binário que está sendo verificado

   Verificar o conteúdo vincula a atestação ao binário conferido.

**Concept:** Uma origem autêntica não substitui a avaliação de segurança do software.

**Authored coaching hints:**

- Diferencie a origem de uma compilação da segurança de seu conteúdo.
- Compare tanto a identidade do produtor quanto o conteúdo exato com a política.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/artifact-attestations>

<!-- certification-coach-question:actions-214:39236339d01c1069ef50f9023771eb81b8b0c11eb6b4a3cd9cc95607a12db8c4 -->
## Question 214: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-214`

**Content revision:** `39236339d01c1069ef50f9023771eb81b8b0c11eb6b4a3cd9cc95607a12db8c4`

**en review revision:** `692b406a3fd50bd99da3bcd53aa99ac94d82e5da95627dd94d72b1fa633442ad`
**es review revision:** `63a16cedc61e643398accaa81158ae8a8b1386f89582501082ccc86f2bd32d9c`
**pt-BR review revision:** `9d00ac671621b28e761c2591f6c7dd14408bda089d9517bcb0d998a8723dbe72`

### English

Where environment required reviewers are supported, which setting prevents the deployment initiator from approving that deployment?

1. Deployment branches and tags

   Branch and tag restrictions select deployable refs, not approving identities.

2. Environment secrets

   Environment secrets store values rather than exclude self-approval.

3. Prevent self-review **[CORRECT]**

   Prevent self-review excludes the initiator from approving that deployment.

4. Wait timer

   A wait timer delays deployment rather than excluding the initiator from approval.

**Concept:** Required reviewers and prevention of self-review are separate environment controls.

**Authored coaching hints:**

- Separate who may approve from which revision may deploy.
- Check the environment's protection settings and feature availability.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cuando se admiten revisores obligatorios del entorno, ¿qué opción impide al iniciador aprobar su propio despliegue?

1. Deployment branches and tags

   Las restricciones de ramas y etiquetas seleccionan referencias, no identidades aprobadoras.

2. Environment secrets

   Los secretos del entorno guardan valores, no excluyen la autoaprobación.

3. Prevent self-review **[CORRECT]**

   Prevent self-review excluye al iniciador de aprobar ese despliegue.

4. Wait timer

   Wait timer retrasa el despliegue, no excluye al iniciador de aprobar.

**Concept:** Los revisores obligatorios y la prevención de autorrevisión son controles de entorno distintos.

**Authored coaching hints:**

- Distingue quién puede aprobar de qué revisión puede desplegarse.
- Comprueba las protecciones del entorno y la disponibilidad de la función.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando revisores obrigatórios do ambiente são compatíveis, qual opção impede o iniciador de aprovar a própria implantação?

1. Deployment branches and tags

   Restrições de branches e tags selecionam referências, não identidades aprovadoras.

2. Environment secrets

   Segredos do ambiente armazenam valores, não excluem autoaprovação.

3. Prevent self-review **[CORRECT]**

   Prevent self-review exclui o iniciador de aprovar aquela implantação.

4. Wait timer

   Wait timer atrasa a implantação, não exclui o iniciador da aprovação.

**Concept:** Revisores obrigatórios e prevenção de autorrevisão são controles de ambiente separados.

**Authored coaching hints:**

- Diferencie quem pode aprovar de qual revisão pode ser implantada.
- Verifique as proteções do ambiente e a disponibilidade do recurso.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments>

<!-- certification-coach-question:actions-215:c6d02ceebb33143c3b0dc7605782e558b9425c9d128fda9258f82a3ee1deda42 -->
## Question 215: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-215`

**Content revision:** `c6d02ceebb33143c3b0dc7605782e558b9425c9d128fda9258f82a3ee1deda42`

**en review revision:** `87e527f182273df2f34fb334ed804642f0173b64a147b7204adc74e8022fe38f`
**es review revision:** `4e145c0616bd3b9fc700063d19370fc6e24b9bd6449c961da7b07968ed3f0495`
**pt-BR review revision:** `e1c84b51dee43cf9e6dd555210b1dd94ed5093049f51afbf74c28089977d6070`

### English

Which environment control restricts deployments to configured branch and tag name patterns?

1. Required reviewers

   Required reviewers controls approval rather than ref-name patterns.

2. Wait timer

   A wait timer delays deployment rather than selecting refs.

3. Environment secrets

   Environment secrets provide values rather than ref-name restrictions.

4. Selected branches and tags **[CORRECT]**

   Selected branches and tags allows configuring allowed name patterns.

**Concept:** Deployment ref restrictions and approval gates solve different problems.

**Authored coaching hints:**

- Separate who may approve from which revision may deploy.
- Check the environment's protection settings and feature availability.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué control del entorno limita despliegues a patrones configurados de nombres de ramas y etiquetas?

1. Required reviewers

   Required reviewers controla aprobación, no patrones de nombres de referencias.

2. Wait timer

   Wait timer retrasa el despliegue, no selecciona referencias.

3. Environment secrets

   Los secretos del entorno proporcionan valores, no restricciones de nombres de referencias.

4. Selected branches and tags **[CORRECT]**

   Selected branches and tags permite configurar patrones de nombres admitidos.

**Concept:** Las restricciones de referencias desplegables y las aprobaciones resuelven problemas distintos.

**Authored coaching hints:**

- Distingue quién puede aprobar de qué revisión puede desplegarse.
- Comprueba las protecciones del entorno y la disponibilidad de la función.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual controle do ambiente restringe implantações a padrões configurados de nomes de branches e tags?

1. Required reviewers

   Required reviewers controla aprovação, não padrões de nomes de referências.

2. Wait timer

   Wait timer atrasa a implantação, não seleciona referências.

3. Environment secrets

   Segredos do ambiente fornecem valores, não restrições de nomes de referências.

4. Selected branches and tags **[CORRECT]**

   Selected branches and tags permite configurar padrões de nomes permitidos.

**Concept:** Restrições de referências implantáveis e aprovações resolvem problemas distintos.

**Authored coaching hints:**

- Diferencie quem pode aprovar de qual revisão pode ser implantada.
- Verifique as proteções do ambiente e a disponibilidade do recurso.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments>

<!-- certification-coach-question:actions-216:c12a8e9a04e7abc009969cd385cddb262333f55e9f12c2e9a671da379a33f75b -->
## Question 216: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-216`

**Content revision:** `c12a8e9a04e7abc009969cd385cddb262333f55e9f12c2e9a671da379a33f75b`

**en review revision:** `b89708828e6dca1f4c39c53e338eb3c3d2b954cddf54c1a3633684f02d750463`
**es review revision:** `e273244f83463df775370cd2347c3b75415c45aca93b7d2a171e4084b9ab39bb`
**pt-BR review revision:** `d039fdd3507a68d5e90d5f7fdab07a12b00500127adc431e508514e7e2c594e2`

### English

Public-fork builds must execute untrusted code. Which runner design best limits persistence and access to production?

1. Disposable isolated runners without production access **[CORRECT]**

   Disposable isolation limits persistence, while network and credential separation limit production access.

2. Persistent deployment runners with environment approval

   Environment approval does not isolate a persistent runner from executed code.

3. Shared production runners with quieter log output

   Less logging does not isolate production-connected infrastructure.

4. Reusable privileged runners with fewer workflow steps

   Fewer steps do not remove privileges or persistent compromise.

**Concept:** Runner isolation, lifecycle, credentials, and network access all define the trust boundary.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las compilaciones de forks públicos deben ejecutar código no confiable. ¿Qué diseño limita mejor persistencia y acceso a producción?

1. Runners aislados desechables sin acceso a producción **[CORRECT]**

   El aislamiento desechable limita persistencia; separar red y credenciales limita acceso a producción.

2. Runners de despliegue persistentes con aprobación de entorno

   Aprobar el entorno no aísla un runner persistente del código ejecutado.

3. Runners de producción compartidos con registros reducidos

   Reducir registros no aísla infraestructura conectada a producción.

4. Runners privilegiados reutilizables con menos pasos

   Tener menos pasos no elimina privilegios ni compromiso persistente.

**Concept:** Aislamiento, ciclo de vida, credenciales y red del runner definen el límite de confianza.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Builds de forks públicos precisam executar código não confiável. Qual projeto limita melhor persistência e acesso à produção?

1. Runners isolados descartáveis sem acesso à produção **[CORRECT]**

   O isolamento descartável limita persistência; separar rede e credenciais limita acesso à produção.

2. Runners de implantação persistentes com aprovação de ambiente

   Aprovar o ambiente não isola um runner persistente do código executado.

3. Runners de produção compartilhados com menos logs

   Reduzir logs não isola infraestrutura conectada à produção.

4. Runners privilegiados reutilizáveis com menos etapas

   Menos etapas não removem privilégios nem comprometimento persistente.

**Concept:** Isolamento, ciclo de vida, credenciais e rede do runner definem o limite de confiança.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-217:9422481df92b5168ecd4857bd0748e1185bdd09340cf2841ff0aa7a603c6e7d6 -->
## Question 217: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-217`

**Content revision:** `9422481df92b5168ecd4857bd0748e1185bdd09340cf2841ff0aa7a603c6e7d6`

**en review revision:** `53b078daeff5a299ada5b7e42f2e43431a6d1bdd71731d82994ff97e7157b9ac`
**es review revision:** `6cc1b6f3c624065fc963d0d9bb564e639651721d2c86dea76e54a778a27f5b6b`
**pt-BR review revision:** `436948b5dfc69b7713f1278900bc0bc1a3987512bd11ec05387d659b4a5d585a`

### English

Which task is the best fit for a dependency cache rather than a workflow artifact?

1. Preserve a failed build's diagnostic archive

   A diagnostic archive is retained output rather than a dependency cache.

2. Reuse downloaded packages across compatible builds **[CORRECT]**

   Caches accelerate builds by reusing regenerable dependency files.

3. Retain a release binary for later download

   A retained release binary is build output suited to an artifact or release asset.

4. Share a test report with a reviewer

   A report is job output suited to artifact retention.

**Concept:** Use caches for reusable inputs and artifacts for retained outputs.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tarea encaja mejor con una caché de dependencias que con un artefacto de flujo?

1. Preservar un archivo diagnóstico de una compilación fallida

   Un archivo diagnóstico es un resultado conservado, no una caché de dependencias.

2. Reutilizar paquetes descargados entre compilaciones compatibles **[CORRECT]**

   Las cachés aceleran compilaciones reutilizando archivos de dependencias regenerables.

3. Conservar un binario de versión para descargarlo después

   Un binario conservado es un resultado apropiado para un artefacto o recurso de versión.

4. Compartir un informe de pruebas con un revisor

   Un informe es un resultado apropiado para conservación como artefacto.

**Concept:** Usa cachés para insumos reutilizables y artefactos para resultados conservados.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tarefa combina melhor com um cache de dependências do que com um artefato de workflow?

1. Preservar um arquivo diagnóstico de um build com falha

   Um arquivo diagnóstico é uma saída retida, não um cache de dependências.

2. Reutilizar pacotes baixados entre builds compatíveis **[CORRECT]**

   Caches aceleram builds reutilizando arquivos de dependências regeneráveis.

3. Reter um binário de versão para download posterior

   Um binário retido é uma saída adequada a um artefato ou ativo de versão.

4. Compartilhar um relatório de testes com um revisor

   Um relatório é uma saída adequada à retenção como artefato.

**Concept:** Use caches para entradas reutilizáveis e artefatos para saídas retidas.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-218:11e306dc2014ff0f1b1d093eeb139f46abaf5994658e285e3846d9487a238dd0 -->
## Question 218: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-218`

**Content revision:** `11e306dc2014ff0f1b1d093eeb139f46abaf5994658e285e3846d9487a238dd0`

**en review revision:** `69384bebd2bd70e58cc2a469a9bc1f33a063ddd91d90f7c43a8bf19a08d940e1`
**es review revision:** `9f922c3c1fb18807988fc66c3f37920d0149fa66363b373765b1e2f0de181a3a`
**pt-BR review revision:** `cca99196051e8039bffdd01b1ef97c6f207c7c7acff71f9befa56531dbcc9ee2`

### English

An existing dependency cache has outdated contents. How can the workflow save a replacement without deleting it?

1. Change its files through restore-keys

   Restore-keys selects fallback caches rather than editing them.

2. Extend its contents by setting cache-hit

   Cache-hit reports restore status rather than modifying stored files.

3. Create a cache using a new key **[CORRECT]**

   Existing cache contents are immutable; a new key creates a separate cache.

4. Overwrite it by reusing the same key

   An exact existing key does not overwrite that cache's contents.

**Concept:** Cache keys identify immutable stored cache contents.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una caché de dependencias existente tiene contenido obsoleto. ¿Cómo puede el flujo guardar un reemplazo sin eliminarla?

1. Cambiar sus archivos mediante restore-keys

   Restore-keys selecciona cachés alternativas, no las edita.

2. Ampliar su contenido estableciendo cache-hit

   Cache-hit informa del estado de restauración, no modifica archivos almacenados.

3. Crear una caché con una clave nueva **[CORRECT]**

   El contenido existente es inmutable; una clave nueva crea otra caché.

4. Sobrescribirla reutilizando la misma clave

   Una clave existente exacta no sobrescribe el contenido de esa caché.

**Concept:** Las claves de caché identifican contenido almacenado inmutable.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cache de dependências existente tem conteúdo desatualizado. Como o workflow pode salvar uma substituição sem excluí-lo?

1. Alterar seus arquivos por restore-keys

   Restore-keys seleciona caches alternativos, não os edita.

2. Ampliar seu conteúdo definindo cache-hit

   Cache-hit informa o estado de restauração, não modifica arquivos armazenados.

3. Criar um cache com uma chave nova **[CORRECT]**

   O conteúdo existente é imutável; uma chave nova cria outro cache.

4. Sobrescrevê-lo reutilizando a mesma chave

   Uma chave existente exata não sobrescreve o conteúdo daquele cache.

**Concept:** Chaves de cache identificam conteúdo armazenado imutável.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-219:22d2cf3c2f4c349fd5b33d269f7fb58a7eea441ffec89664551d1a5292dd686a -->
## Question 219: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-219`

**Content revision:** `22d2cf3c2f4c349fd5b33d269f7fb58a7eea441ffec89664551d1a5292dd686a`

**en review revision:** `1054eb8c3f3ac7a98abf1dda809aad304e12bf905d151587d07f324e219b5c87`
**es review revision:** `d98009a0e65562e794236907b4281a916f5d932c01d4da783a25ab31225bb61a`
**pt-BR review revision:** `3f9abf44fead83a6f14bddd509a7c2edcd2c429f5279a8a0729df1c812d30795`

### English

A test matrix includes unsupported OS/runtime pairs. Which change avoids spending runner time on those combinations?

1. Lower strategy.max-parallel without changing combinations

   Max-parallel changes concurrency, not the number of combinations.

2. Set continue-on-error on every matrix job

   Continue-on-error changes failure handling, not which jobs are created.

3. Increase timeout-minutes for the entire matrix

   A larger timeout allows longer execution rather than excluding combinations.

4. Remove those combinations with strategy.matrix.exclude **[CORRECT]**

   Matrix exclude removes selected combinations from the generated jobs.

**Concept:** Remove unnecessary matrix work rather than merely changing how it is scheduled or reported.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz de pruebas incluye pares de sistema operativo y runtime no admitidos. ¿Qué cambio evita gastar tiempo de runner en ellos?

1. Reducir strategy.max-parallel sin cambiar combinaciones

   Max-parallel cambia concurrencia, no la cantidad de combinaciones.

2. Establecer continue-on-error en todos los trabajos

   Continue-on-error cambia tratamiento de fallos, no qué trabajos se crean.

3. Aumentar timeout-minutes de toda la matriz

   Un timeout mayor permite ejecutar más tiempo, no excluye combinaciones.

4. Eliminar esos pares mediante strategy.matrix.exclude **[CORRECT]**

   Matrix exclude elimina combinaciones seleccionadas de los trabajos generados.

**Concept:** Elimina trabajo innecesario de la matriz en vez de cambiar solo su programación o resultado.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz de testes inclui pares de sistema operacional e runtime incompatíveis. Qual alteração evita gastar tempo de runner com eles?

1. Reduzir strategy.max-parallel sem alterar combinações

   Max-parallel muda concorrência, não a quantidade de combinações.

2. Definir continue-on-error em todos os jobs

   Continue-on-error muda o tratamento de falhas, não quais jobs são criados.

3. Aumentar timeout-minutes de toda a matriz

   Um timeout maior permite executar por mais tempo, não exclui combinações.

4. Remover esses pares com strategy.matrix.exclude **[CORRECT]**

   Matrix exclude remove combinações selecionadas dos jobs gerados.

**Concept:** Remova trabalho desnecessário da matriz em vez de alterar apenas agendamento ou resultado.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-220:abf672d80a0a2304f8fd7a438a136f0328bb213f6127d789ebf82dffb9201e82 -->
## Question 220: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-220`

**Content revision:** `abf672d80a0a2304f8fd7a438a136f0328bb213f6127d789ebf82dffb9201e82`

**en review revision:** `a24336a70c15b23ae8b6cf29b9fe03d17bc3d11cbb4c48fe75744bef87fcd38a`
**es review revision:** `5aff064b4688e7bc4a35f09c5d5ca27a95407fc77d5abfa5ff184172fcb7a3dd`
**pt-BR review revision:** `b8fa177499ef08a0e8d5ee260a33f5582cb01e781d27986723adc5fce54dc890`

### English

A workflow already uses a branch-specific concurrency group. Which setting cancels its older running job when a newer one enters that group?

1. cancel-in-progress: true **[CORRECT]**

   Cancel-in-progress cancels older running work in the same concurrency group.

2. strategy.fail-fast: true

   Fail-fast cancels matrix work after a failure, not on a newer grouped run.

3. continue-on-error: true

   Continue-on-error changes failure handling rather than concurrency cancellation.

4. timeout-minutes: 1

   A timeout limits duration rather than responding to newer work.

**Concept:** A concurrency group selects related work; cancel-in-progress controls cancellation of running work.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo ya usa un grupo de concurrencia específico de rama. ¿Qué opción cancela su trabajo anterior en ejecución cuando llega otro al grupo?

1. cancel-in-progress: true **[CORRECT]**

   Cancel-in-progress cancela trabajo anterior en ejecución del mismo grupo.

2. strategy.fail-fast: true

   Fail-fast cancela trabajo de matriz tras un fallo, no por una nueva ejecución agrupada.

3. continue-on-error: true

   Continue-on-error cambia tratamiento de fallos, no cancelación por concurrencia.

4. timeout-minutes: 1

   Un timeout limita duración, no responde a trabajo más reciente.

**Concept:** El grupo selecciona trabajo relacionado; cancel-in-progress controla cancelar trabajo en ejecución.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow já usa um grupo de concorrência específico de branch. Qual opção cancela seu job anterior em execução quando outro entra no grupo?

1. cancel-in-progress: true **[CORRECT]**

   Cancel-in-progress cancela trabalho anterior em execução do mesmo grupo.

2. strategy.fail-fast: true

   Fail-fast cancela trabalho de matriz após falha, não por uma nova execução agrupada.

3. continue-on-error: true

   Continue-on-error muda tratamento de falhas, não cancelamento por concorrência.

4. timeout-minutes: 1

   Um timeout limita duração, não responde a trabalho mais recente.

**Concept:** O grupo seleciona trabalho relacionado; cancel-in-progress controla o cancelamento de trabalho em execução.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency>

<!-- certification-coach-question:actions-221:70bfdf71f242ee8a41d72ddab6c2140959c402bba4d1a6f7b81b12bd21786549 -->
## Question 221: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-221`

**Content revision:** `70bfdf71f242ee8a41d72ddab6c2140959c402bba4d1a6f7b81b12bd21786549`

**en review revision:** `7f5fdf57662d4e2d65e4f5eae74ce7850128d02dfa1617dfc52fee60adbad5a8`
**es review revision:** `2ac3ec9854161df4f75beacb2ce1794404dc3c02e008a1e0ff8d821bdaf638a1`
**pt-BR review revision:** `3c32a0eb432305f8ce5a03eb2376fa42f05c1f9fb95171e67966e04a39a36879`

### English

Within allowed retention limits, which upload-artifact input retains a diagnostic bundle for three days?

1. if-no-files-found: warn

   If-no-files-found controls handling of missing input files.

2. retention-days: 3 **[CORRECT]**

   Retention-days controls how long the uploaded artifact is retained.

3. timeout-minutes: 3

   Timeout-minutes limits execution time rather than artifact storage lifetime.

4. compression-level: 3

   Compression-level changes compression effort rather than retention.

**Concept:** Artifact retention can be shortened per upload within the administrator's limits.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dentro de los límites permitidos, ¿qué entrada de upload-artifact conserva un paquete diagnóstico durante tres días?

1. if-no-files-found: warn

   If-no-files-found controla qué ocurre si faltan archivos de entrada.

2. retention-days: 3 **[CORRECT]**

   Retention-days controla cuánto tiempo se conserva el artefacto subido.

3. timeout-minutes: 3

   Timeout-minutes limita ejecución, no la vida del almacenamiento del artefacto.

4. compression-level: 3

   Compression-level cambia el esfuerzo de compresión, no la conservación.

**Concept:** La conservación de artefactos puede acortarse por subida dentro de los límites administrativos.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dentro dos limites permitidos, qual entrada de upload-artifact retém um pacote diagnóstico por três dias?

1. if-no-files-found: warn

   If-no-files-found controla o tratamento de arquivos de entrada ausentes.

2. retention-days: 3 **[CORRECT]**

   Retention-days controla por quanto tempo o artefato enviado é retido.

3. timeout-minutes: 3

   Timeout-minutes limita execução, não a vida do armazenamento do artefato.

4. compression-level: 3

   Compression-level muda o esforço de compressão, não a retenção.

**Concept:** A retenção de artefatos pode ser reduzida por envio dentro dos limites administrativos.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-222:82d4b02b5ff1582c97f0073abef55014c32952b1635c6375da67accc344fe942 -->
## Question 222: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-222`

**Content revision:** `82d4b02b5ff1582c97f0073abef55014c32952b1635c6375da67accc344fe942`

**en review revision:** `acbe0875b42bf116d077eb39c77174426ca5b0a011796b82c9a420029652912c`
**es review revision:** `eee858c3522f72462234b9c2f41e796f126daf5fd02ef90e05d15421f797a28a`
**pt-BR review revision:** `db05e4be32dc103157887218b1b58e2e222905f4b5d7dd960fcc148e56f4f1e6`

### English

Which REST request deletes one stored workflow artifact while leaving its workflow run intact?

1. DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}

   Deleting the workflow run removes the run, contrary to the requirement.

2. POST /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/cancel

   Canceling a run does not delete the selected stored artifact.

3. DELETE /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\} **[CORRECT]**

   The artifact DELETE endpoint removes that artifact without deleting its run.

4. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}

   The GET endpoint reads artifact metadata rather than deleting the artifact.

**Concept:** Artifact lifecycle operations are distinct from workflow-run lifecycle operations.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud REST elimina un artefacto de flujo almacenado y mantiene intacta su ejecución?

1. DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}

   Eliminar la ejecución contradice el requisito de conservarla.

2. POST /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/cancel

   Cancelar una ejecución no elimina el artefacto almacenado seleccionado.

3. DELETE /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\} **[CORRECT]**

   El endpoint DELETE del artefacto lo elimina sin eliminar su ejecución.

4. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}

   El endpoint GET lee metadatos, no elimina el artefacto.

**Concept:** El ciclo de vida de los artefactos y el de las ejecuciones tienen operaciones distintas.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação REST exclui um artefato de workflow armazenado e mantém sua execução intacta?

1. DELETE /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}

   Excluir a execução contradiz o requisito de preservá-la.

2. POST /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/cancel

   Cancelar uma execução não exclui o artefato armazenado selecionado.

3. DELETE /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\} **[CORRECT]**

   O endpoint DELETE do artefato o remove sem excluir sua execução.

4. GET /repos/\{owner\}/\{repo\}/actions/artifacts/\{artifact\_id\}

   O endpoint GET lê metadados, não exclui o artefato.

**Concept:** O ciclo de vida de artefatos e o de execuções têm operações distintas.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/artifacts#delete-an-artifact>

<!-- certification-coach-question:actions-223:6bf6310d9dd95723e5d9ce0347fa7d511bdb06b9f5a39a38c65130a1e3187a98 -->
## Question 223: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-223`

**Content revision:** `6bf6310d9dd95723e5d9ce0347fa7d511bdb06b9f5a39a38c65130a1e3187a98`

**en review revision:** `b0bccaf9debffd38ee9f1d554d61303084ef41f1fb6f9bce406827e8ecf285b9`
**es review revision:** `ec29e1199ef3ad451e7597855aeaf48495978dfcec129eb5717b040fd5cb598f`
**pt-BR review revision:** `cbf7e75049368166d464140cd7d8e265bedc4d85b30c8b0a3b2a6b0703155c75`

### English

Which job-level key limits a potentially stalled GitHub Actions job to twenty minutes?

1. max-parallel: 20

   Max-parallel limits simultaneous matrix jobs rather than duration.

2. retention-days: 20

   Retention-days controls artifact storage rather than job duration.

3. fetch-depth: 20

   Fetch-depth controls checked-out Git history rather than job duration.

4. timeout-minutes: 20 **[CORRECT]**

   Job timeout-minutes limits job execution duration.

**Concept:** Set an execution timeout at the job scope to bound stalled work.

**Authored coaching hints:**

- Distinguish reusable build inputs from retained job outputs.
- Consider whether the change affects execution, parallelism, or storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave de trabajo limita a veinte minutos un trabajo de GitHub Actions que podría atascarse?

1. max-parallel: 20

   Max-parallel limita trabajos de matriz simultáneos, no duración.

2. retention-days: 20

   Retention-days controla almacenamiento de artefactos, no duración del trabajo.

3. fetch-depth: 20

   Fetch-depth controla historial Git descargado, no duración del trabajo.

4. timeout-minutes: 20 **[CORRECT]**

   Timeout-minutes del trabajo limita la duración de ejecución.

**Concept:** Establece un timeout de ejecución a nivel de trabajo para limitar tareas atascadas.

**Authored coaching hints:**

- Distingue los insumos reutilizables de compilación de los resultados conservados.
- Considera si el cambio afecta ejecución, paralelismo o almacenamiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave no nível de job limita a vinte minutos um job do GitHub Actions que pode travar?

1. max-parallel: 20

   Max-parallel limita jobs de matriz simultâneos, não duração.

2. retention-days: 20

   Retention-days controla armazenamento de artefatos, não duração do job.

3. fetch-depth: 20

   Fetch-depth controla histórico Git obtido, não duração do job.

4. timeout-minutes: 20 **[CORRECT]**

   Timeout-minutes do job limita a duração da execução.

**Concept:** Defina um timeout de execução no nível do job para limitar trabalho travado.

**Authored coaching hints:**

- Diferencie entradas reutilizáveis de compilação de saídas retidas.
- Considere se a alteração afeta execução, paralelismo ou armazenamento.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-224:60a6ecdddde860c35439f07900bbe64cd415c2b0135c7083d37e47d80d27188c -->
## Question 224: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-224`

**Content revision:** `60a6ecdddde860c35439f07900bbe64cd415c2b0135c7083d37e47d80d27188c`

**en review revision:** `aea30cf23906e431cf5b0f6f8617969169cf1313ea1716d0f9cba6ea199ca54d`
**es review revision:** `469fe580763cdc406f79b0ee0fea30a2e31d2a23a894211187451a761b55bc9b`
**pt-BR review revision:** `b83458be3981c989077a8b989685100905e44d5016ce386da52fbf3dad51bab1`

### English

Which package-ecosystem value enables Dependabot version updates for workflow action references?

1. github-actions **[CORRECT]**

   Github-actions enables updates to action references and supported reusable workflow references.

2. docker

   Docker monitors container-image dependencies rather than workflow action references.

3. npm

   Npm monitors JavaScript package dependencies rather than action references.

4. gitsubmodule

   Gitsubmodule monitors Git submodule references rather than workflow action references.

**Concept:** Dependabot's ecosystem selects the dependency format it monitors.

**Authored coaching hints:**

- Follow the boundary between trusted instructions and untrusted data.
- Ask which identity, version, or execution context is actually being trusted.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué valor de package-ecosystem habilita actualizaciones de versión de Dependabot para referencias de acciones en flujos?

1. github-actions **[CORRECT]**

   Github-actions habilita actualizaciones de referencias de acciones y flujos reutilizables compatibles.

2. docker

   Docker supervisa dependencias de imágenes, no referencias de acciones de flujos.

3. npm

   Npm supervisa paquetes JavaScript, no referencias de acciones.

4. gitsubmodule

   Gitsubmodule supervisa referencias de submódulos Git, no referencias de acciones de flujos.

**Concept:** El ecosistema de Dependabot selecciona el formato de dependencias que supervisa.

**Authored coaching hints:**

- Sigue el límite entre instrucciones confiables y datos no confiables.
- Identifica qué identidad, versión o contexto de ejecución se considera confiable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual valor de package-ecosystem habilita atualizações de versão do Dependabot para referências de ações em workflows?

1. github-actions **[CORRECT]**

   Github-actions habilita atualizações de referências de ações e workflows reutilizáveis compatíveis.

2. docker

   Docker monitora dependências de imagens, não referências de ações de workflows.

3. npm

   Npm monitora pacotes JavaScript, não referências de ações.

4. gitsubmodule

   Gitsubmodule monitora referências de submódulos Git, não referências de ações de workflows.

**Concept:** O ecossistema do Dependabot seleciona o formato de dependências que ele monitora.

**Authored coaching hints:**

- Acompanhe o limite entre instruções confiáveis e dados não confiáveis.
- Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions>

<!-- certification-coach-question:actions-225:6e391b00d13fddcb6f0c6635bfb8ab8e5d41c8726aa88a5687fe01e1a2041902 -->
## Question 225: Secure and optimize automation

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `actions-225`

**Content revision:** `6e391b00d13fddcb6f0c6635bfb8ab8e5d41c8726aa88a5687fe01e1a2041902`

**en review revision:** `650330591b833b28d056c61c1276d1b73c1be1577b2e6f062f4e92ac856fd8f3`
**es review revision:** `b1026461524f1968d9bb790032aaf746f9c3df46f70b5518825ab10cf28c50cf`
**pt-BR review revision:** `12d3c4a2b3393bd856454290fe868cfeff0cb27234a81a3a92b2593f63cab7db`

### English

When creating a container-image attestation, what identifies the image's exact content rather than a movable tag?

1. The registry's hostname alone

   A registry hostname identifies a service, not a particular image's content.

2. The image's SHA256 digest **[CORRECT]**

   A digest identifies the image content and is supplied as subject-digest.

3. The image's latest tag

   A mutable tag may point to different content later.

4. The workflow's display name

   A display name describes a workflow, not image content.

**Concept:** Container provenance binds to content digests rather than mutable names.

**Authored coaching hints:**

- Distinguish a build's origin from the safety of its contents.
- Match both the producer's identity and the artifact's exact contents to policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al crear una atestación de imagen de contenedor, ¿qué identifica el contenido exacto de la imagen en vez de una etiqueta movible?

1. Solo el nombre del host del registro

   El host del registro identifica un servicio, no contenido concreto de una imagen.

2. El digest SHA256 de la imagen **[CORRECT]**

   Un digest identifica el contenido y se proporciona como subject-digest.

3. La etiqueta latest de la imagen

   Una etiqueta mutable puede apuntar después a otro contenido.

4. El nombre visible del flujo

   El nombre visible describe un flujo, no el contenido de una imagen.

**Concept:** La procedencia de contenedores se vincula a digests de contenido, no a nombres mutables.

**Authored coaching hints:**

- Distingue el origen de una compilación de la seguridad de su contenido.
- Contrasta tanto la identidad del productor como el contenido exacto con la política.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao criar uma atestação de imagem de contêiner, o que identifica o conteúdo exato da imagem em vez de uma tag móvel?

1. Apenas o hostname do registro

   O hostname do registro identifica um serviço, não conteúdo específico de uma imagem.

2. O digest SHA256 da imagem **[CORRECT]**

   Um digest identifica o conteúdo e é fornecido como subject-digest.

3. A tag latest da imagem

   Uma tag mutável pode apontar para outro conteúdo depois.

4. O nome exibido do workflow

   O nome exibido descreve um workflow, não o conteúdo de uma imagem.

**Concept:** A procedência de contêineres se vincula a digests de conteúdo, não a nomes mutáveis.

**Authored coaching hints:**

- Diferencie a origem de uma compilação da segurança de seu conteúdo.
- Compare tanto a identidade do produtor quanto o conteúdo exato com a política.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>
