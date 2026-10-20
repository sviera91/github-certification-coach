<!-- certification-coach-review:actions:1 -->
# GitHub Actions: human review packet

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

<!-- certification-coach-question:actions-001:5fecfc36f5121bc2eb82ca3ca7457e1a214b2a5f1bdba6a9eb1596594f1a4c54 -->
## Question 1: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-001`

**Content revision:** `5fecfc36f5121bc2eb82ca3ca7457e1a214b2a5f1bdba6a9eb1596594f1a4c54`

### English

A monorepo should build only when a push both targets main and changes files under api/. Which trigger configuration expresses that requirement?

1. Define push.branches: \[main\] and push.paths: \['api/\*\*'\]. **[CORRECT]**

   Branch and path filters on the same event must both match.

2. Define separate push and pull\_request events without filters.

   Unfiltered events run for unrelated branches and paths.

3. Define push.branches: \['main', 'api/\*\*'\].

   Branch patterns do not examine changed file paths.

4. Put paths under jobs.build instead of the event.

   Path event filters belong under on, not the job definition.

**Concept:** Combining event filters

**Authored coaching hints:**

- Which part of a trigger examines refs, and which examines changed files?
- Are conditions on a single event combined differently from separate events?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un monorepositorio debe compilar solo si un push apunta a main y modifica archivos de api/. ¿Qué configuración expresa ambos requisitos?

1. Definir push.branches: \[main\] y push.paths: \['api/\*\*'\]. **[CORRECT]**

   Ambos filtros del mismo evento deben coincidir.

2. Definir push y pull\_request separados sin filtros.

   Los eventos sin filtros incluyen cambios ajenos.

3. Definir push.branches: \['main', 'api/\*\*'\].

   Los patrones de ramas no examinan rutas.

4. Poner paths en jobs.build, no en el evento.

   Los filtros de rutas pertenecen a on.

**Concept:** Combinación de filtros de eventos

**Authored coaching hints:**

- ¿Qué filtro examina referencias y cuál archivos modificados?
- ¿Se combinan igual las condiciones de un evento y los eventos separados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um monorepositório deve compilar somente se um push apontar para main e alterar arquivos em api/. Qual configuração expressa os dois requisitos?

1. Definir push.branches: \[main\] e push.paths: \['api/\*\*'\]. **[CORRECT]**

   Os dois filtros do mesmo evento devem corresponder.

2. Definir push e pull\_request separados sem filtros.

   Eventos sem filtros incluem alterações não relacionadas.

3. Definir push.branches: \['main', 'api/\*\*'\].

   Padrões de branches não examinam caminhos.

4. Colocar paths em jobs.build, não no evento.

   Filtros de caminhos pertencem a on.

**Concept:** Combinação de filtros de eventos

**Authored coaching hints:**

- Qual filtro examina referências e qual examina arquivos alterados?
- Condições de um evento e eventos separados são combinados igualmente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-002:ab06ca3b6bd4ca0656e1c101858a897df0e4cc71677ad5fc670ed05e6d94f666 -->
## Question 2: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-002`

**Content revision:** `ab06ca3b6bd4ca0656e1c101858a897df0e4cc71677ad5fc670ed05e6d94f666`

### English

A pull-request workflow should validate proposals targeting release branches, regardless of the contributor's source branch. What should its branches filter match?

1. The contributor's head branch.

   The head branch is not what pull\_request.branches filters.

2. The workflow file's directory.

   Workflow directories do not identify pull-request targets.

3. The pull request's base branch. **[CORRECT]**

   The branches filter for pull requests matches the target, or base, branch.

4. The actor's default branch.

   The actor's personal default branch does not control this event filter.

**Concept:** Pull-request branch filtering

**Authored coaching hints:**

- A pull request connects two refs; which one represents the destination?
- What differs between a push branch filter and a pull-request branch filter?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo debe validar pull requests dirigidas a ramas de lanzamiento, independientemente de la rama del colaborador. ¿Qué debe examinar branches?

1. La rama head del colaborador.

   pull\_request.branches no filtra la rama head.

2. El directorio del archivo del flujo.

   El directorio no identifica el destino.

3. La rama base de la pull request. **[CORRECT]**

   El filtro coincide con la rama destino o base.

4. La rama predeterminada del actor.

   La rama personal del actor no determina este filtro.

**Concept:** Filtrado de ramas en pull requests

**Authored coaching hints:**

- ¿Cuál de las dos referencias representa el destino?
- ¿En qué difieren los filtros de push y pull\_request?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow deve validar pull requests destinadas a branches de lançamento, independentemente da branch do colaborador. O que branches deve examinar?

1. A branch head do colaborador.

   pull\_request.branches não filtra a branch head.

2. O diretório do arquivo do workflow.

   O diretório não identifica o destino.

3. A branch base da pull request. **[CORRECT]**

   O filtro corresponde à branch de destino ou base.

4. A branch padrão do ator.

   A branch pessoal do ator não determina esse filtro.

**Concept:** Filtragem de branches de pull requests

**Authored coaching hints:**

- Qual das duas referências representa o destino?
- Como diferem os filtros de push e pull\_request?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-003:e7d96a718a7525fc1a1e35fbf06da833b8a9232f54dadc9f2cd1c8e16a56c987 -->
## Question 3: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-003`

**Content revision:** `e7d96a718a7525fc1a1e35fbf06da833b8a9232f54dadc9f2cd1c8e16a56c987`

### English

An external inventory service must initiate automation in a repository with a custom event\_type and client\_payload. Which event is designed for this integration?

1. workflow\_call

   workflow\_call is invoked by another Actions workflow, not this external event API.

2. repository\_dispatch **[CORRECT]**

   repository\_dispatch supports externally initiated custom event types and payloads.

3. pull\_request\_review

   pull\_request\_review describes review activity, not an arbitrary inventory event.

4. workflow\_run

   workflow\_run reacts to another workflow's execution rather than this custom payload.

**Concept:** External workflow triggers

**Authored coaching hints:**

- Is the initiator another workflow or an outside application?
- Which trigger family accepts an application-defined event type?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servicio externo de inventario debe iniciar automatización con event\_type y client\_payload personalizados. ¿Qué evento permite esa integración?

1. workflow\_call

   workflow\_call necesita otro flujo como llamador.

2. repository\_dispatch **[CORRECT]**

   repository\_dispatch admite tipos y cargas definidos externamente.

3. pull\_request\_review

   Las revisiones no representan eventos arbitrarios de inventario.

4. workflow\_run

   workflow\_run observa ejecuciones, no esta carga personalizada.

**Concept:** Disparadores externos

**Authored coaching hints:**

- ¿El iniciador es otro flujo o una aplicación externa?
- ¿Qué familia acepta un tipo de evento definido por la aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um serviço externo de inventário deve iniciar automação com event\_type e client\_payload personalizados. Qual evento permite essa integração?

1. workflow\_call

   workflow\_call precisa de outro workflow chamador.

2. repository\_dispatch **[CORRECT]**

   repository\_dispatch aceita tipos e cargas definidos externamente.

3. pull\_request\_review

   Revisões não representam eventos arbitrários de inventário.

4. workflow\_run

   workflow\_run observa execuções, não essa carga personalizada.

**Concept:** Gatilhos externos

**Authored coaching hints:**

- O iniciador é outro workflow ou uma aplicação externa?
- Qual família aceita um tipo de evento definido pela aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-004:86d0bb15a06ac75d3a6c5b28214faff4602e8d46bc59171f210204a3f25aa807 -->
## Question 4: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-004`

**Content revision:** `86d0bb15a06ac75d3a6c5b28214faff4602e8d46bc59171f210204a3f25aa807`

### English

A manual workflow has a boolean input named dry\_run. A condition must distinguish false from true without treating the text 'false' as truthy. Which reference preserves the input's boolean type?

1. github.event.inputs.dry\_run

   github.event.inputs converts boolean input values to strings.

2. env.dry\_run

   An environment variable is not a typed dispatch input.

3. github.ref

   github.ref identifies a ref, not the dispatch flag.

4. inputs.dry\_run **[CORRECT]**

   The inputs context preserves boolean workflow\_dispatch inputs as booleans.

**Concept:** Typed manual inputs

**Authored coaching hints:**

- Which representations preserve types and which serialize values?
- How does a nonempty string behave when used as a condition?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo manual tiene una entrada booleana dry\_run. ¿Qué referencia conserva el tipo booleano y evita tratar el texto 'false' como verdadero?

1. github.event.inputs.dry\_run

   github.event.inputs convierte los booleanos en cadenas.

2. env.dry\_run

   Una variable de entorno no es una entrada tipada.

3. github.ref

   github.ref identifica una referencia, no esa entrada.

4. inputs.dry\_run **[CORRECT]**

   inputs conserva los booleanos de workflow\_dispatch.

**Concept:** Entradas manuales tipadas

**Authored coaching hints:**

- ¿Qué representaciones conservan tipos y cuáles serializan?
- ¿Cómo se evalúa una cadena no vacía en una condición?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow manual tem uma entrada booleana dry\_run. Qual referência preserva o tipo booleano sem tratar o texto 'false' como verdadeiro?

1. github.event.inputs.dry\_run

   github.event.inputs converte booleanos em strings.

2. env.dry\_run

   Uma variável de ambiente não é uma entrada tipada.

3. github.ref

   github.ref identifica uma referência, não essa entrada.

4. inputs.dry\_run **[CORRECT]**

   inputs preserva os booleanos de workflow\_dispatch.

**Concept:** Entradas manuais tipadas

**Authored coaching hints:**

- Quais representações preservam tipos e quais serializam?
- Como uma string não vazia é avaliada em uma condição?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-005:6d5f9f75c6b2aceffe5e5bb846c3b17b8be56ded101fa920872dc051306f7b52 -->
## Question 5: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-005`

**Content revision:** `6d5f9f75c6b2aceffe5e5bb846c3b17b8be56ded101fa920872dc051306f7b52`

### English

A nightly report must use the default branch's latest code without a push. The team accepts that execution may be delayed. Which workflow feature fits?

1. A schedule trigger using a cron expression. **[CORRECT]**

   Scheduled workflows run on the default branch and can experience delays.

2. A pull\_request trigger with a time input.

   Pull-request events require corresponding repository activity, not a clock.

3. A job-level cron field.

   Scheduling is configured under on, not as a job cron field.

4. A workflow\_call trigger with no caller.

   workflow\_call needs a caller and does not create a timer.

**Concept:** Scheduled workflows

**Authored coaching hints:**

- Does this automation depend on repository activity or elapsed time?
- What reliability assumptions should a scheduled report avoid?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un informe nocturno debe usar el código más reciente de la rama predeterminada sin un push. Se aceptan retrasos. ¿Qué función corresponde?

1. Un disparador schedule con expresión cron. **[CORRECT]**

   Los flujos programados usan la rama predeterminada y pueden retrasarse.

2. pull\_request con una entrada de hora.

   pull\_request requiere actividad, no un reloj.

3. Un campo cron en el trabajo.

   La programación se configura en on.

4. workflow\_call sin llamador.

   workflow\_call no crea un temporizador.

**Concept:** Flujos programados

**Authored coaching hints:**

- ¿Depende de actividad del repositorio o del tiempo?
- ¿Qué garantías temporales no debería asumir el informe?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um relatório noturno deve usar o código mais recente da branch padrão sem um push. Atrasos são aceitáveis. Qual recurso corresponde?

1. Um gatilho schedule com expressão cron. **[CORRECT]**

   Workflows agendados usam a branch padrão e podem atrasar.

2. pull\_request com uma entrada de horário.

   pull\_request exige atividade, não um relógio.

3. Um campo cron no job.

   O agendamento é configurado em on.

4. workflow\_call sem chamador.

   workflow\_call não cria um temporizador.

**Concept:** Workflows agendados

**Authored coaching hints:**

- A automação depende de atividade ou de tempo?
- Quais garantias temporais o relatório não deve presumir?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-006:a982e0eb19c218e550e1d9a03f1125de31a471219c09c7237569d69dfdc1745d -->
## Question 6: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-006`

**Content revision:** `a982e0eb19c218e550e1d9a03f1125de31a471219c09c7237569d69dfdc1745d`

### English

A CI workflow runs on pull\_request, but a repository's merge queue also needs its required checks. Which additional event should the workflow handle?

1. issues

   Issue activity does not validate a merge queue's proposed merge group.

2. merge\_group with checks\_requested **[CORRECT]**

   merge\_group checks\_requested runs checks for the merge queue's combined changes.

3. release with published

   Publishing a release is unrelated to merge queue validation.

4. workflow\_dispatch only

   Manual dispatch alone does not automatically satisfy merge queue checks.

**Concept:** Merge queue checks

**Authored coaching hints:**

- Is a queued merge candidate the same object as an individual pull request?
- Which event represents checks requested for a group of changes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

CI se ejecuta con pull\_request, pero la cola de fusión también necesita sus verificaciones obligatorias. ¿Qué evento adicional debe manejar?

1. issues

   issues no valida candidatos de la cola.

2. merge\_group con checks\_requested **[CORRECT]**

   merge\_group solicita verificaciones del conjunto de cambios.

3. release con published

   Publicar lanzamientos no valida la cola.

4. Solo workflow\_dispatch

   El disparo manual no satisface automáticamente sus verificaciones.

**Concept:** Verificaciones de la cola de fusión

**Authored coaching hints:**

- ¿Un candidato agrupado equivale a una pull request individual?
- ¿Qué evento representa verificaciones de cambios agrupados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A CI executa em pull\_request, mas a fila de merge também precisa das verificações obrigatórias. Qual evento adicional deve ser tratado?

1. issues

   issues não valida candidatos da fila.

2. merge\_group com checks\_requested **[CORRECT]**

   merge\_group solicita verificações do conjunto de alterações.

3. release com published

   Publicar releases não valida a fila.

4. Somente workflow\_dispatch

   Disparo manual não satisfaz suas verificações automaticamente.

**Concept:** Verificações da fila de merge

**Authored coaching hints:**

- Um candidato agrupado equivale a uma pull request individual?
- Qual evento representa verificações de alterações agrupadas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-007:ba73f9194aa1a14bd57a3088366a8d3941fd3c7964f19325cbaddb0aad6a2f9a -->
## Question 7: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-007`

**Content revision:** `ba73f9194aa1a14bd57a3088366a8d3941fd3c7964f19325cbaddb0aad6a2f9a`

### English

A release workflow should run after a release is published, including published prereleases, but not when someone merely edits release notes. Which activity filter fits?

1. release.types: \[edited\]

   edited reacts to metadata changes rather than publication.

2. push.tags: \['\*'\]

   A tag push and release publication are different events.

3. release.types: \[published\] **[CORRECT]**

   The published release activity covers publication, including prereleases.

4. create.types: \[release\]

   create refers to Git refs and does not offer a release activity type.

**Concept:** Release activity filters

**Authored coaching hints:**

- Which lifecycle transition matters rather than which Git ref exists?
- How can an activity filter avoid responding to later metadata edits?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo debe responder a la publicación de lanzamientos, incluidos los preliminares, pero no a editar sus notas. ¿Qué filtro corresponde?

1. release.types: \[edited\]

   edited responde a cambios de metadatos.

2. push.tags: \['\*'\]

   Crear una etiqueta no equivale a publicar un lanzamiento.

3. release.types: \[published\] **[CORRECT]**

   published abarca también la publicación de versiones preliminares.

4. create.types: \[release\]

   create representa referencias Git, sin ese tipo release.

**Concept:** Actividades de lanzamiento

**Authored coaching hints:**

- ¿Importa la transición de estado o la existencia de una referencia?
- ¿Cómo se evitan las ediciones posteriores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow deve responder à publicação de releases, inclusive pré-releases, mas não à edição de notas. Qual filtro corresponde?

1. release.types: \[edited\]

   edited responde a alterações de metadados.

2. push.tags: \['\*'\]

   Criar uma tag não equivale a publicar uma release.

3. release.types: \[published\] **[CORRECT]**

   published inclui a publicação de pré-releases.

4. create.types: \[release\]

   create representa referências Git, sem esse tipo release.

**Concept:** Atividades de releases

**Authored coaching hints:**

- Importa a transição de estado ou a existência de uma referência?
- Como evitar responder a edições posteriores?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-008:33cf115704e54b8f6ab17c0f5a0981abb2892c3d506357cd2fa430a9beb6236e -->
## Question 8: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-008`

**Content revision:** `33cf115704e54b8f6ab17c0f5a0981abb2892c3d506357cd2fa430a9beb6236e`

### English

A workflow accepts manual invocations but should offer only staging or production as a target in the GitHub UI. Which workflow\_dispatch input definition is appropriate?

1. type: string with no validation or options

   A plain string does not provide the requested constrained UI choices.

2. type: boolean with two environment names

   Boolean inputs represent true or false, not arbitrary environment names.

3. type: number with named defaults

   Number inputs cannot model these two named options.

4. type: choice with options containing staging and production **[CORRECT]**

   A choice input supplies a single-select list of the defined options.

**Concept:** Manual input design

**Authored coaching hints:**

- What kind of value should the operator select?
- How does an enumerated UI differ from a free-text field?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al iniciar manualmente un flujo, la interfaz debe ofrecer solo staging o production como destino. ¿Qué definición de entrada corresponde?

1. type: string sin validación ni opciones

   Una cadena libre no ofrece esa selección restringida.

2. type: boolean con dos nombres de entorno

   Un booleano representa true o false.

3. type: number con valores predeterminados nombrados

   Los números no modelan esos nombres.

4. type: choice con opciones staging y production **[CORRECT]**

   choice ofrece una lista de selección única.

**Concept:** Diseño de entradas manuales

**Authored coaching hints:**

- ¿Qué clase de valor debe seleccionar el operador?
- ¿En qué difiere una enumeración del texto libre?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao iniciar manualmente um workflow, a interface deve oferecer apenas staging ou production como destino. Qual definição de entrada corresponde?

1. type: string sem validação nem opções

   Uma string livre não fornece essa seleção restrita.

2. type: boolean com dois nomes de ambiente

   Um booleano representa true ou false.

3. type: number com padrões nomeados

   Números não representam esses nomes.

4. type: choice com opções staging e production **[CORRECT]**

   choice fornece uma lista de seleção única.

**Concept:** Projeto de entradas manuais

**Authored coaching hints:**

- Que tipo de valor o operador deve selecionar?
- Como uma enumeração difere de texto livre?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-009:1b4eaab9cdc2d849662aba3683fb131d5bd29a627048d50c4dbdf5dfc6e88e91 -->
## Question 9: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-009`

**Content revision:** `1b4eaab9cdc2d849662aba3683fb131d5bd29a627048d50c4dbdf5dfc6e88e91`

### English

A deployment job must wait until both unit and integration jobs succeed. What should the deployment job declare?

1. needs: \[unit, integration\] **[CORRECT]**

   needs creates dependencies and normally requires those jobs to succeed.

2. A name alphabetically after both jobs.

   Job ordering is not derived from names or YAML order.

3. steps.after: \[unit, integration\]

   steps.after is not the job-dependency syntax.

4. A longer timeout than the test jobs.

   Timeouts limit execution duration but do not create dependencies.

**Concept:** Job dependency graph

**Authored coaching hints:**

- What represents an edge in the workflow's job graph?
- Is visual ordering enough to impose execution ordering?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El trabajo de despliegue debe esperar a que unit e integration terminen correctamente. ¿Qué debe declarar?

1. needs: \[unit, integration\] **[CORRECT]**

   needs establece dependencias y exige éxito normalmente.

2. Un nombre alfabéticamente posterior.

   Los nombres no determinan el orden.

3. steps.after: \[unit, integration\]

   steps.after no es la sintaxis de dependencias.

4. Un timeout mayor que el de las pruebas.

   Un timeout no crea dependencias.

**Concept:** Grafo de dependencias

**Authored coaching hints:**

- ¿Qué representa una conexión en el grafo?
- ¿El orden visual impone ejecución secuencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O job de implantação deve aguardar unit e integration terminarem com sucesso. O que deve declarar?

1. needs: \[unit, integration\] **[CORRECT]**

   needs estabelece dependências e normalmente exige sucesso.

2. Um nome alfabeticamente posterior.

   Nomes não determinam a ordem.

3. steps.after: \[unit, integration\]

   steps.after não é sintaxe de dependências.

4. Um timeout maior que o dos testes.

   Timeouts não criam dependências.

**Concept:** Grafo de dependências

**Authored coaching hints:**

- O que representa uma conexão no grafo?
- A ordem visual impõe ordem de execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-010:90c6772406f1b3533e50ac53195b52dc77f612b3c9d95c059472619375e1d676 -->
## Question 10: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-010`

**Content revision:** `90c6772406f1b3533e50ac53195b52dc77f612b3c9d95c059472619375e1d676`

### English

A report job depends on test and must run even when test fails or is skipped. Which explicit job condition meets that requirement?

1. if: success()

   success() excludes failed dependency chains.

2. if: always() **[CORRECT]**

   always() explicitly permits execution regardless of prior success, including skipped dependencies.

3. if: needs.test.outputs.passed

   An output is not guaranteed when the producer fails or is skipped.

4. if: github.event\_name == 'push'

   The triggering event does not override failed or skipped dependencies by itself.

**Concept:** Dependency status conditions

**Authored coaching hints:**

- What implicit status check applies when no status function is used?
- Should the report depend on test results being successful or merely available?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de informes depende de test y debe ejecutarse aunque test falle o se omita. ¿Qué condición explícita corresponde?

1. if: success()

   success() excluye cadenas fallidas.

2. if: always() **[CORRECT]**

   always() permite ejecución pese a fallos u omisiones.

3. if: needs.test.outputs.passed

   La salida puede no existir tras fallo u omisión.

4. if: github.event\_name == 'push'

   El evento no elimina por sí solo el bloqueo de dependencias.

**Concept:** Condiciones de estado de dependencias

**Authored coaching hints:**

- ¿Qué comprobación implícita se aplica sin función de estado?
- ¿El informe necesita éxito o simplemente resultados disponibles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de relatório depende de test e deve executar mesmo que test falhe ou seja ignorado. Qual condição explícita corresponde?

1. if: success()

   success() exclui cadeias com falha.

2. if: always() **[CORRECT]**

   always() permite execução apesar de falhas ou jobs ignorados.

3. if: needs.test.outputs.passed

   A saída pode não existir após falha ou omissão.

4. if: github.event\_name == 'push'

   O evento sozinho não supera dependências malsucedidas.

**Concept:** Condições de estado de dependências

**Authored coaching hints:**

- Qual verificação implícita se aplica sem função de estado?
- O relatório precisa de sucesso ou apenas dos resultados disponíveis?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-011:fcd6a2862d76692d7077a5e7062ce8b6715c3d0e8a1b4b7613ae685ba8a4f624 -->
## Question 11: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-011`

**Content revision:** `fcd6a2862d76692d7077a5e7062ce8b6715c3d0e8a1b4b7613ae685ba8a4f624`

### English

A packaging step computes version=2.4.1, and a later step in the same job needs steps.package.outputs.version. What must the producer do?

1. Print version to standard output only.

   Ordinary log output does not define a step output.

2. Write version into GITHUB\_STEP\_SUMMARY.

   The summary file renders Markdown, not output parameters.

3. Have id: package and append version=2.4.1 to GITHUB\_OUTPUT. **[CORRECT]**

   The step ID and GITHUB\_OUTPUT entry expose the named step output.

4. Export version in its shell without an environment file.

   A shell export alone does not publish a steps-context output.

**Concept:** Step outputs

**Authored coaching hints:**

- How does a consumer identify the producing step?
- Which runner communication channel carries named outputs rather than display text?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso calcula version=2.4.1. Otro necesita steps.package.outputs.version. ¿Qué debe hacer el productor?

1. Solo imprimir version en el registro.

   Imprimir no define salidas.

2. Escribir version en GITHUB\_STEP\_SUMMARY.

   El resumen muestra Markdown, no parámetros.

3. Tener id: package y anexar version=2.4.1 a GITHUB\_OUTPUT. **[CORRECT]**

   El ID y GITHUB\_OUTPUT exponen la salida nombrada.

4. Exportar version solo en su shell.

   Una exportación local no publica una salida de steps.

**Concept:** Salidas de pasos

**Authored coaching hints:**

- ¿Cómo identifica el consumidor al paso productor?
- ¿Qué canal transporta salidas nombradas y no texto visual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa calcula version=2.4.1. Outra precisa de steps.package.outputs.version. O que a produtora deve fazer?

1. Somente imprimir version no log.

   Imprimir não define saídas.

2. Escrever version em GITHUB\_STEP\_SUMMARY.

   O resumo mostra Markdown, não parâmetros.

3. Ter id: package e acrescentar version=2.4.1 a GITHUB\_OUTPUT. **[CORRECT]**

   O ID e GITHUB\_OUTPUT expõem a saída nomeada.

4. Exportar version apenas no próprio shell.

   Uma exportação local não publica uma saída de steps.

**Concept:** Saídas de etapas

**Authored coaching hints:**

- Como o consumidor identifica a etapa produtora?
- Qual canal transporta saídas nomeadas, não texto visual?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-012:bf9b367b6cedfb2733c95ea500b618f11dcbb4539add2b70bc28d153356b13ff -->
## Question 12: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-012`

**Content revision:** `bf9b367b6cedfb2733c95ea500b618f11dcbb4539add2b70bc28d153356b13ff`

### English

A build job exposes a digest as a step output. A separate deploy job needs that small value. Which complete design passes it through the workflow graph?

1. Set a shell variable in build and read it directly in deploy.

   Shell variables do not cross independent job boundaries.

2. Use the runner's home directory as shared storage.

   Jobs are not guaranteed to share a filesystem or home directory.

3. Print the digest in build's final log line.

   Log text is not automatically promoted to a job output.

4. Map it to a build job output, declare needs: build, and read needs.build.outputs.digest. **[CORRECT]**

   A job output plus a dependency makes the value available through needs.

**Concept:** Cross-job output mapping

**Authored coaching hints:**

- What boundaries separate shell state, step outputs, and job outputs?
- How does a downstream job declare access to its producer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

build calcula un digest como salida de un paso. deploy, en otro trabajo, necesita ese valor pequeño. ¿Qué diseño lo transmite?

1. Definir una variable de shell en build y leerla directamente.

   Las variables de shell no cruzan trabajos.

2. Compartir el directorio personal del runner.

   No se garantiza un sistema de archivos compartido.

3. Imprimir el digest en la última línea.

   El registro no se convierte automáticamente en salida.

4. Mapear una salida de build, declarar needs: build y leer needs.build.outputs.digest. **[CORRECT]**

   La salida del trabajo y needs permiten consumir el valor.

**Concept:** Salidas entre trabajos

**Authored coaching hints:**

- ¿Qué separa variables, salidas de pasos y salidas de trabajos?
- ¿Cómo declara el consumidor su dependencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

build calcula um digest como saída de etapa. deploy, em outro job, precisa desse valor pequeno. Qual projeto o transmite?

1. Definir uma variável de shell em build e lê-la diretamente.

   Variáveis de shell não atravessam jobs.

2. Compartilhar o diretório pessoal do runner.

   Não há garantia de sistema de arquivos compartilhado.

3. Imprimir o digest na última linha.

   Logs não viram saídas automaticamente.

4. Mapear uma saída de build, declarar needs: build e ler needs.build.outputs.digest. **[CORRECT]**

   A saída do job e needs permitem consumir o valor.

**Concept:** Saídas entre jobs

**Authored coaching hints:**

- O que separa variáveis, saídas de etapas e saídas de jobs?
- Como o consumidor declara sua dependência?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-013:0682f1203f8e3ec35f152e98a936d70774f322f2e57d93de7007562cd30e10d8 -->
## Question 13: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-013`

**Content revision:** `0682f1203f8e3ec35f152e98a936d70774f322f2e57d93de7007562cd30e10d8`

### English

A Bash step appends COLOR=blue to GITHUB\_ENV. When does that change become available through the runner environment?

1. To subsequent steps in that job. **[CORRECT]**

   GITHUB\_ENV updates the environment for later steps in the current job.

2. Immediately in the writing shell without any assignment.

   The writing process does not gain the new variable merely by writing the file.

3. To every job in the repository.

   The file does not create repository-wide or cross-job state.

4. Only after the whole workflow finishes.

   The runner processes the update between steps, not only after the workflow.

**Concept:** Environment-file lifetime

**Authored coaching hints:**

- Which process currently owns the environment?
- When can the runner read updates written by a completed step?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso Bash anexa COLOR=blue a GITHUB\_ENV. ¿Cuándo queda disponible el cambio en el entorno del runner?

1. En pasos posteriores del mismo trabajo. **[CORRECT]**

   GITHUB\_ENV actualiza pasos posteriores del trabajo.

2. Inmediatamente en el shell escritor sin asignación.

   Escribir el archivo no modifica el proceso actual.

3. En todos los trabajos del repositorio.

   No crea estado global ni entre trabajos.

4. Solo al terminar todo el flujo.

   El runner procesa el archivo entre pasos.

**Concept:** Duración de archivos de entorno

**Authored coaching hints:**

- ¿Qué proceso posee el entorno actual?
- ¿Cuándo puede el runner procesar lo escrito por un paso terminado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa Bash acrescenta COLOR=blue a GITHUB\_ENV. Quando a alteração fica disponível no ambiente do runner?

1. Nas próximas etapas do mesmo job. **[CORRECT]**

   GITHUB\_ENV atualiza etapas posteriores do job.

2. Imediatamente no shell escritor sem atribuição.

   Escrever o arquivo não altera o processo atual.

3. Em todos os jobs do repositório.

   Não cria estado global nem entre jobs.

4. Somente ao terminar o workflow.

   O runner processa o arquivo entre etapas.

**Concept:** Duração de arquivos de ambiente

**Authored coaching hints:**

- Qual processo possui o ambiente atual?
- Quando o runner pode processar o arquivo de uma etapa concluída?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-014:d74808841746b29c21624584f8fc83393e70bc6aa0d469425fc72d941b2937ca -->
## Question 14: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-014`

**Content revision:** `d74808841746b29c21624584f8fc83393e70bc6aa0d469425fc72d941b2937ca`

### English

A workflow sets MODE globally, a job overrides MODE, and one step also overrides MODE. What value does that step see?

1. The global value because workflows are parsed first.

   Workflow-level env is less specific than job or step env.

2. The job value because steps cannot define env.

   Steps can define their own environment variables.

3. The step's value while that step executes. **[CORRECT]**

   The most specific env scope takes precedence during that scope's execution.

4. A concatenation of all three values.

   Environment mappings override names rather than concatenate values.

**Concept:** Environment precedence

**Authored coaching hints:**

- How do nested configuration scopes normally resolve the same key?
- Which override has the narrowest lifetime?

<details>
<summary>Español — same answer key and option order</summary>

### Español

MODE se define en el flujo, se reemplaza en un trabajo y se vuelve a reemplazar en un paso. ¿Qué valor ve ese paso?

1. El global porque se analiza primero.

   El alcance global es menos específico.

2. El del trabajo porque los pasos no admiten env.

   Los pasos sí admiten env.

3. El valor del paso durante su ejecución. **[CORRECT]**

   Prevalece el alcance más específico mientras está activo.

4. La concatenación de los tres.

   Los valores se reemplazan, no se concatenan.

**Concept:** Precedencia del entorno

**Authored coaching hints:**

- ¿Cómo resuelven ámbitos anidados una misma clave?
- ¿Qué reemplazo tiene la duración más limitada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

MODE é definido no workflow, substituído no job e novamente em uma etapa. Qual valor essa etapa recebe?

1. O global, pois é analisado primeiro.

   O escopo global é menos específico.

2. O do job, pois etapas não aceitam env.

   Etapas aceitam env.

3. O valor da etapa durante sua execução. **[CORRECT]**

   Prevalece o escopo mais específico enquanto ativo.

4. A concatenação dos três.

   Valores são substituídos, não concatenados.

**Concept:** Precedência de ambiente

**Authored coaching hints:**

- Como escopos aninhados resolvem a mesma chave?
- Qual substituição tem a duração mais limitada?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-015:12baa0c40dbef5c396c0b851d45b53472d1c38f1df7073088883d60853e8ad4f -->
## Question 15: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-015`

**Content revision:** `12baa0c40dbef5c396c0b851d45b53472d1c38f1df7073088883d60853e8ad4f`

### English

A build should cover two operating systems and three runtime versions. With no include or exclude entries, how many jobs does its two-axis matrix generate?

1. Three jobs.

   Three accounts for only the runtime axis.

2. Six jobs. **[CORRECT]**

   The matrix generates the Cartesian product: two times three combinations.

3. Five jobs.

   Matrix axes multiply; they are not added.

4. One job with six sequential steps.

   A matrix expands jobs, not steps within one job.

**Concept:** Matrix Cartesian product

**Authored coaching hints:**

- Does each runtime need to be tested on each operating system?
- How would you enumerate the pairs without writing YAML?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz combina dos sistemas operativos y tres versiones del runtime, sin include ni exclude. ¿Cuántos trabajos genera?

1. Tres.

   Tres considera solo el eje del runtime.

2. Seis. **[CORRECT]**

   El producto cartesiano genera dos por tres combinaciones.

3. Cinco.

   Los ejes se multiplican, no se suman.

4. Uno con seis pasos secuenciales.

   La matriz expande trabajos, no pasos.

**Concept:** Producto cartesiano de matrices

**Authored coaching hints:**

- ¿Cada runtime debe probarse en cada sistema?
- ¿Cómo enumerarías los pares sin YAML?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz combina dois sistemas operacionais e três versões de runtime, sem include nem exclude. Quantos jobs gera?

1. Três.

   Três considera somente o eixo de runtime.

2. Seis. **[CORRECT]**

   O produto cartesiano gera duas vezes três combinações.

3. Cinco.

   Os eixos são multiplicados, não somados.

4. Um com seis etapas sequenciais.

   A matriz expande jobs, não etapas.

**Concept:** Produto cartesiano de matrizes

**Authored coaching hints:**

- Cada runtime precisa ser testado em cada sistema?
- Como você enumeraria os pares sem YAML?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-016:a2a0e141d2a05fa8cd15ba929cb8103e8f2e9820f297b20a3c5d1bfb49dbc3e3 -->
## Question 16: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-016`

**Content revision:** `a2a0e141d2a05fa8cd15ba929cb8103e8f2e9820f297b20a3c5d1bfb49dbc3e3`

### English

A matrix tests Linux and Windows with runtimes 20 and 22. Only Windows with runtime 20 is unsupported. How should the author omit exactly that combination?

1. Remove Windows from the OS axis.

   Removing Windows also loses its supported runtime 22 combination.

2. Remove runtime 20 from the runtime axis.

   Removing runtime 20 also loses the supported Linux combination.

3. Set fail-fast: false.

   fail-fast controls cancellation after failure, not matrix generation.

4. Add an exclude entry matching Windows and runtime 20. **[CORRECT]**

   A matching exclude mapping removes only the unsupported pair.

**Concept:** Matrix exclusion

**Authored coaching hints:**

- Is an entire axis value unsupported or just one intersection?
- Which strategy setting changes the set of generated combinations?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz combina Linux y Windows con runtimes 20 y 22. Solo Windows/20 no es compatible. ¿Cómo omitir exactamente esa combinación?

1. Quitar Windows del eje.

   También eliminaría Windows/22.

2. Quitar runtime 20 del eje.

   También eliminaría Linux/20.

3. Definir fail-fast: false.

   fail-fast afecta cancelaciones, no combinaciones.

4. Añadir una entrada exclude para Windows y runtime 20. **[CORRECT]**

   exclude elimina únicamente el par indicado.

**Concept:** Exclusión de combinaciones

**Authored coaching hints:**

- ¿No se admite un valor entero del eje o una intersección?
- ¿Qué ajuste modifica las combinaciones generadas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz combina Linux e Windows com runtimes 20 e 22. Apenas Windows/20 não é compatível. Como omitir exatamente essa combinação?

1. Remover Windows do eixo.

   Também removeria Windows/22.

2. Remover runtime 20 do eixo.

   Também removeria Linux/20.

3. Definir fail-fast: false.

   fail-fast afeta cancelamentos, não combinações.

4. Adicionar exclude para Windows e runtime 20. **[CORRECT]**

   exclude remove somente o par indicado.

**Concept:** Exclusão de combinações

**Authored coaching hints:**

- Um valor inteiro do eixo é incompatível ou apenas uma interseção?
- Qual ajuste altera as combinações geradas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-017:0bbcd235d7171b9f38722c32146363aeb780ca7f4e471d216b92b96c81b72057 -->
## Question 17: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-017`

**Content revision:** `0bbcd235d7171b9f38722c32146363aeb780ca7f4e471d216b92b96c81b72057`

### English

A compatibility matrix must finish every variant so the team can compare failures, even after the first variant fails. Which strategy setting should change?

1. Set fail-fast: false. **[CORRECT]**

   Disabling fail-fast prevents failure-driven cancellation of sibling matrix jobs.

2. Set max-parallel: 1 only.

   Serial execution alone does not disable fail-fast cancellation.

3. Set timeout-minutes: 1.

   A shorter timeout can terminate tests rather than preserve all results.

4. Set every step to if: success().

   success() controls step execution, not matrix sibling cancellation.

**Concept:** Matrix failure policy

**Authored coaching hints:**

- Which mechanism cancels siblings rather than failing just the current variant?
- Is concurrency control the same as failure propagation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Todas las variantes de compatibilidad deben terminar para comparar fallos, aunque una falle primero. ¿Qué ajuste corresponde?

1. fail-fast: false. **[CORRECT]**

   Desactiva la cancelación de variantes hermanas por fallo.

2. Solo max-parallel: 1.

   La ejecución serial no desactiva fail-fast.

3. timeout-minutes: 1.

   Un timeout corto puede interrumpir pruebas.

4. if: success() en cada paso.

   success() no controla la cancelación entre variantes.

**Concept:** Política de fallos de matrices

**Authored coaching hints:**

- ¿Qué mecanismo cancela variantes hermanas?
- ¿Limitar simultaneidad equivale a cambiar la propagación de fallos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Todas as variantes de compatibilidade devem terminar para comparar falhas, mesmo após a primeira falhar. Qual ajuste corresponde?

1. fail-fast: false. **[CORRECT]**

   Desativa cancelamentos de variantes irmãs causados por falhas.

2. Somente max-parallel: 1.

   Execução serial não desativa fail-fast.

3. timeout-minutes: 1.

   Um timeout curto pode interromper testes.

4. if: success() em cada etapa.

   success() não controla cancelamento entre variantes.

**Concept:** Política de falhas de matrizes

**Authored coaching hints:**

- Qual mecanismo cancela variantes irmãs?
- Limitar simultaneidade equivale a alterar propagação de falhas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-018:673a5dbb63c366e807ced6abe161f2a6ab5e009f46ed68f4bcb6d22722e8bc9a -->
## Question 18: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-018`

**Content revision:** `673a5dbb63c366e807ced6abe161f2a6ab5e009f46ed68f4bcb6d22722e8bc9a`

### English

A matrix contains twelve test variants, but an external test service permits only three active sessions from this job family. Which setting limits this matrix's simultaneous jobs?

1. strategy.fail-fast: true

   fail-fast responds to failures rather than setting a parallelism cap.

2. strategy.max-parallel: 3 **[CORRECT]**

   max-parallel limits simultaneous matrix jobs without removing combinations.

3. timeout-minutes: 3

   Timeouts restrict duration, not the number of active jobs.

4. A matrix axis named concurrency with value 3

   An ordinary matrix axis adds data; it does not enforce execution limits.

**Concept:** Matrix parallelism

**Authored coaching hints:**

- Must all twelve combinations remain in the test plan?
- What is the difference between limiting concurrency and shrinking coverage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Doce variantes usan un servicio externo que permite solo tres sesiones simultáneas de esta familia de trabajos. ¿Qué ajuste limita la simultaneidad?

1. strategy.fail-fast: true

   fail-fast responde a fallos, no limita sesiones.

2. strategy.max-parallel: 3 **[CORRECT]**

   max-parallel limita trabajos simultáneos sin quitar variantes.

3. timeout-minutes: 3

   El timeout limita duración.

4. Un eje concurrency con valor 3

   Un eje aporta datos, no una política de ejecución.

**Concept:** Paralelismo de matrices

**Authored coaching hints:**

- ¿Deben conservarse las doce combinaciones?
- ¿Cómo difiere limitar simultaneidad de reducir cobertura?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Doze variantes usam um serviço externo que permite apenas três sessões simultâneas dessa família de jobs. Qual ajuste limita a simultaneidade?

1. strategy.fail-fast: true

   fail-fast responde a falhas, não limita sessões.

2. strategy.max-parallel: 3 **[CORRECT]**

   max-parallel limita jobs simultâneos sem remover variantes.

3. timeout-minutes: 3

   Timeout limita duração.

4. Um eixo concurrency com valor 3

   Um eixo fornece dados, não política de execução.

**Concept:** Paralelismo de matrizes

**Authored coaching hints:**

- As doze combinações precisam permanecer?
- Como limitar simultaneidade difere de reduzir cobertura?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-019:af5aecc69395e04b4d873ea15cec593089e099ca8fea91e2f8048b74fd71d63a -->
## Question 19: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-019`

**Content revision:** `af5aecc69395e04b4d873ea15cec593089e099ca8fea91e2f8048b74fd71d63a`

### English

A test job itself runs in a Linux container and declares a PostgreSQL service named db. Which host should the test process normally use to reach that service?

1. The repository owner's hostname.

   Repository ownership does not define container network addresses.

2. localhost on the GitHub website.

   The GitHub website is not the job's container network.

3. db, using the service container's port. **[CORRECT]**

   Container jobs share a Docker network with services reachable by service label.

4. github.ref as a DNS name.

   A Git ref is metadata, not a service hostname.

**Concept:** Service networking in container jobs

**Authored coaching hints:**

- Is the test process inside a sibling container or directly on the runner?
- How do containers identify one another on the job network?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las pruebas se ejecutan en un contenedor Linux del trabajo y usan un servicio PostgreSQL llamado db. ¿Qué host deben usar normalmente?

1. El hostname del propietario del repositorio.

   El propietario no determina las direcciones de contenedores.

2. localhost del sitio GitHub.

   El sitio web no pertenece a esa red.

3. db con el puerto del contenedor del servicio. **[CORRECT]**

   Los servicios son accesibles por su etiqueta en la red Docker compartida.

4. github.ref como nombre DNS.

   Una referencia Git no es un hostname.

**Concept:** Red de servicios en trabajos contenedorizados

**Authored coaching hints:**

- ¿Las pruebas están en un contenedor o directamente en el host?
- ¿Cómo se identifican los contenedores de esa red?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os testes executam em um contêiner Linux do job e usam PostgreSQL como serviço db. Qual host devem usar normalmente?

1. O hostname do proprietário do repositório.

   O proprietário não define endereços de contêineres.

2. localhost do site GitHub.

   O site não pertence àquela rede.

3. db com a porta do contêiner de serviço. **[CORRECT]**

   Serviços são acessíveis pelo rótulo na rede Docker compartilhada.

4. github.ref como nome DNS.

   Uma referência Git não é um hostname.

**Concept:** Rede de serviços em jobs conteinerizados

**Authored coaching hints:**

- Os testes estão em um contêiner ou diretamente no host?
- Como os contêineres dessa rede se identificam?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-020:20e6f0a56b40ec437b3184f1f1d6dffc8ba7100b848ce38380ca73884d5abf90 -->
## Question 20: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-020`

**Content revision:** `20e6f0a56b40ec437b3184f1f1d6dffc8ba7100b848ce38380ca73884d5abf90`

### English

Tests execute directly on an Ubuntu runner, not in a job container. A database service exposes container port 5432. What configuration makes it reachable predictably at localhost:5432?

1. Use the service label as an external internet hostname.

   The service-label hostname model applies to jobs running in containers.

2. Set env.PORT without any port publication.

   An environment variable alone does not publish a Docker port.

3. Set permissions: packages: write.

   Package permissions do not establish network connectivity.

4. Publish the service port with ports: \['5432:5432'\]. **[CORRECT]**

   Publishing the port maps the runner's localhost port to the service.

**Concept:** Runner-to-service port mapping

**Authored coaching hints:**

- Which network namespace contains the tests?
- What bridges a container port to a process running on the host?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las pruebas se ejecutan directamente en Ubuntu. Un servicio de base de datos escucha en 5432 dentro del contenedor. ¿Cómo acceder mediante localhost:5432?

1. Usar la etiqueta del servicio como hostname de internet.

   El hostname por etiqueta corresponde a trabajos en contenedores.

2. Definir env.PORT sin publicar puertos.

   Una variable no publica puertos Docker.

3. Conceder packages: write.

   Los permisos de paquetes no crean conectividad.

4. Publicar ports: \['5432:5432'\] en el servicio. **[CORRECT]**

   La publicación conecta el puerto del host con el servicio.

**Concept:** Puertos entre host y servicio

**Authored coaching hints:**

- ¿En qué espacio de red corren las pruebas?
- ¿Qué conecta un puerto de contenedor con un proceso del host?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os testes executam diretamente no Ubuntu. Um serviço de banco escuta em 5432 dentro do contêiner. Como acessá-lo por localhost:5432?

1. Usar o rótulo do serviço como hostname da internet.

   Hostname por rótulo corresponde a jobs em contêineres.

2. Definir env.PORT sem publicar portas.

   Uma variável não publica portas Docker.

3. Conceder packages: write.

   Permissões de pacotes não criam conectividade.

4. Publicar ports: \['5432:5432'\] no serviço. **[CORRECT]**

   A publicação conecta a porta do host ao serviço.

**Concept:** Portas entre host e serviço

**Authored coaching hints:**

- Em qual espaço de rede executam os testes?
- O que conecta uma porta de contêiner a um processo do host?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-021:dac12864f27526e822e6208b58cc5d47a4459673c753612f5b82930850f31578 -->
## Question 21: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-021`

**Content revision:** `dac12864f27526e822e6208b58cc5d47a4459673c753612f5b82930850f31578`

### English

A Redis service sometimes starts too slowly for tests. The workflow should verify readiness rather than wait an arbitrary number of seconds. What belongs in its service configuration?

1. A Docker health command with appropriate interval and retries. **[CORRECT]**

   Service options can configure Docker health checks that test actual readiness.

2. A repository status badge.

   Badges display status and do not coordinate service startup.

3. A needs dependency on the service name.

   needs connects jobs, not a job to its service containers.

4. A secret whose name equals the service port.

   Secret naming does not implement a network readiness probe.

**Concept:** Service readiness

**Authored coaching hints:**

- What distinguishes a readiness probe from a fixed delay?
- Which layer manages the service container's lifecycle?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Redis a veces tarda demasiado en estar listo. El flujo debe verificar disponibilidad en lugar de esperar segundos arbitrarios. ¿Qué debe configurar?

1. Un health check Docker con intervalos y reintentos apropiados. **[CORRECT]**

   Las opciones del servicio permiten comprobar disponibilidad real.

2. Una insignia de estado.

   Las insignias no coordinan el inicio.

3. needs con el nombre del servicio.

   needs conecta trabajos, no servicios.

4. Un secreto nombrado como el puerto.

   El nombre de un secreto no crea una comprobación.

**Concept:** Disponibilidad de servicios

**Authored coaching hints:**

- ¿Cómo difiere una comprobación de una espera fija?
- ¿Qué capa administra el ciclo de vida del contenedor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O Redis às vezes demora para ficar pronto. O workflow deve verificar disponibilidade em vez de esperar um tempo arbitrário. O que configurar?

1. Um health check Docker com intervalos e tentativas adequados. **[CORRECT]**

   Opções do serviço permitem verificar disponibilidade real.

2. Um selo de status.

   Selos não coordenam inicialização.

3. needs com o nome do serviço.

   needs conecta jobs, não serviços.

4. Um segredo com o nome da porta.

   O nome de um segredo não cria uma verificação.

**Concept:** Prontidão de serviços

**Authored coaching hints:**

- Como uma verificação difere de uma espera fixa?
- Qual camada administra o ciclo de vida do contêiner?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-022:56a1a2c1324afcdb6dbec8ce12b9e5321e005d3194af5e79ef0a80bbc0ab09ee -->
## Question 22: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-022`

**Content revision:** `56a1a2c1324afcdb6dbec8ce12b9e5321e005d3194af5e79ef0a80bbc0ab09ee`

### English

The same workflow should run on any runner matching all three labels self-hosted, linux, and x64. How should runs-on be specified?

1. runs-on: 'self-hosted OR linux OR x64'

   This text is not a label-disjunction expression supported by runs-on.

2. runs-on: \[self-hosted, linux, x64\] **[CORRECT]**

   An array of labels requires a runner matching every listed label.

3. Three separate runs-on keys.

   Duplicate YAML keys do not form a multi-label runner selector.

4. runs-on: '$\{\{ secrets.RUNNER\_PASSWORD \}\}'

   A credential does not express the required runner capability labels.

**Concept:** Runner label selection

**Authored coaching hints:**

- Does a label array mean any match or all matches?
- How can the job express capabilities independently of a machine's name?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo necesita un runner con todas las etiquetas self-hosted, linux y x64. ¿Qué runs-on corresponde?

1. runs-on: 'self-hosted OR linux OR x64'

   Ese texto no expresa una disyunción admitida.

2. runs-on: \[self-hosted, linux, x64\] **[CORRECT]**

   El arreglo exige todas las etiquetas.

3. Tres claves runs-on separadas.

   Claves duplicadas no forman un selector múltiple.

4. runs-on: '$\{\{ secrets.RUNNER\_PASSWORD \}\}'

   Una contraseña no describe las capacidades requeridas.

**Concept:** Selección por etiquetas

**Authored coaching hints:**

- ¿Un arreglo exige alguna coincidencia o todas?
- ¿Cómo se expresan capacidades sin nombrar una máquina?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job precisa de um runner com todos os rótulos self-hosted, linux e x64. Qual runs-on corresponde?

1. runs-on: 'self-hosted OR linux OR x64'

   Esse texto não expressa uma disjunção compatível.

2. runs-on: \[self-hosted, linux, x64\] **[CORRECT]**

   O array exige todos os rótulos.

3. Três chaves runs-on separadas.

   Chaves duplicadas não formam um seletor múltiplo.

4. runs-on: '$\{\{ secrets.RUNNER\_PASSWORD \}\}'

   Uma senha não descreve capacidades de runners.

**Concept:** Seleção por rótulos

**Authored coaching hints:**

- Um array exige alguma correspondência ou todas?
- Como expressar capacidades sem nomear uma máquina?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-023:b3814f20d326ee2d8ed645a0cb5c0fec142e3c4e1779ec5bee38206a84514e90 -->
## Question 23: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-023`

**Content revision:** `b3814f20d326ee2d8ed645a0cb5c0fec142e3c4e1779ec5bee38206a84514e90`

### English

An automation job should read code but have no other GITHUB\_TOKEN capabilities. Which explicit permissions mapping best expresses that intent?

1. write-all

   write-all grants far more access than reading code.

2. contents: write

   contents: write also permits modifying repository contents.

3. contents: read, with other permissions omitted **[CORRECT]**

   When permissions are explicitly specified, omitted permission categories become none.

4. issues: read and packages: write

   Issue and package scopes do not implement minimal source-code read access.

**Concept:** Explicit token permission mapping

**Authored coaching hints:**

- What happens to unspecified categories in an explicit permission mapping?
- Which resource category corresponds to repository source contents?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo debe leer código sin otras capacidades de GITHUB\_TOKEN. ¿Qué mapa explícito refleja ese objetivo?

1. write-all

   write-all concede acceso excesivo.

2. contents: write

   contents: write también permite modificaciones.

3. contents: read, omitiendo otros permisos **[CORRECT]**

   En un mapa explícito, los permisos omitidos quedan en none.

4. issues: read y packages: write

   Esos ámbitos no representan lectura mínima de código.

**Concept:** Mapa explícito de permisos

**Authored coaching hints:**

- ¿Qué pasa con categorías omitidas al declarar permisos?
- ¿Qué recurso corresponde al código del repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job deve ler código sem outras capacidades de GITHUB\_TOKEN. Qual mapa explícito corresponde?

1. write-all

   write-all concede acesso excessivo.

2. contents: write

   contents: write também permite modificações.

3. contents: read, omitindo outras permissões **[CORRECT]**

   No mapa explícito, permissões omitidas ficam como none.

4. issues: read e packages: write

   Esses escopos não representam leitura mínima de código.

**Concept:** Mapa explícito de permissões

**Authored coaching hints:**

- O que ocorre com categorias omitidas ao declarar permissões?
- Qual recurso corresponde ao código do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-024:3d3d093e9655e297d17c03c9009e495f24a47fd3c9378e0f05b9649386045269 -->
## Question 24: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-024`

**Content revision:** `3d3d093e9655e297d17c03c9009e495f24a47fd3c9378e0f05b9649386045269`

### English

A repository needs a shared multi-job build pipeline callable from other workflows. What declaration makes its workflow file callable?

1. runs.using: composite

   Composite metadata defines an action, not a multi-job reusable workflow.

2. on: workflow\_run only

   workflow\_run reacts to runs but does not create a callable workflow interface.

3. A Marketplace category in action.yml.

   Marketplace categories do not expose workflow invocation.

4. on: workflow\_call **[CORRECT]**

   workflow\_call declares a reusable workflow's invocation interface.

**Concept:** Reusable workflow declaration

**Authored coaching hints:**

- Is this reusable unit a series of steps or an entire job graph?
- Which event represents a direct call rather than an observed run?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio ofrece una compilación compartida de varios trabajos que otros flujos deben invocar. ¿Qué declaración la hace reutilizable?

1. runs.using: composite

   Un compuesto define pasos de una acción.

2. Solo on: workflow\_run

   workflow\_run observa ejecuciones, no define llamadas.

3. Una categoría Marketplace en action.yml.

   Las categorías no crean interfaces de flujos.

4. on: workflow\_call **[CORRECT]**

   workflow\_call declara la interfaz invocable.

**Concept:** Declaración de flujos reutilizables

**Authored coaching hints:**

- ¿La unidad contiene pasos o un grafo de trabajos?
- ¿Qué evento representa una llamada directa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório oferece uma compilação compartilhada com vários jobs para outros workflows invocarem. Qual declaração a torna reutilizável?

1. runs.using: composite

   Uma ação composta define etapas.

2. Somente on: workflow\_run

   workflow\_run observa execuções, não define chamadas.

3. Uma categoria Marketplace em action.yml.

   Categorias não criam interfaces de workflows.

4. on: workflow\_call **[CORRECT]**

   workflow\_call declara a interface invocável.

**Concept:** Declaração de workflows reutilizáveis

**Authored coaching hints:**

- A unidade contém etapas ou um grafo de jobs?
- Qual evento representa uma chamada direta?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-025:d02f162480c68a00f992784262f6abbdfd6910ef18def89b91bc135c10ad38c5 -->
## Question 25: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-025`

**Content revision:** `d02f162480c68a00f992784262f6abbdfd6910ef18def89b91bc135c10ad38c5`

### English

A caller must pass a numeric retry count into a reusable workflow. Where should that interface and value be declared?

1. Declare a number input under on.workflow\_call.inputs and pass it with the calling job's with. **[CORRECT]**

   workflow\_call defines the typed interface and job-level with supplies its value.

2. Declare only a repository environment variable named retries.

   A variable alone does not define or satisfy the typed call interface.

3. Add runs.inputs to the caller's workflow.

   runs.inputs is not a reusable-workflow input declaration.

4. Put the number in the reusable workflow's name field.

   The workflow name is display metadata, not an input parameter.

**Concept:** Reusable workflow input contract

**Authored coaching hints:**

- Where does the callee define the type it expects?
- How does a calling job provide data rather than environment state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un llamador debe pasar un número de reintentos a un flujo reutilizable. ¿Dónde declarar la interfaz y suministrar el valor?

1. Declarar type: number en on.workflow\_call.inputs y pasarlo con with del trabajo llamador. **[CORRECT]**

   workflow\_call define el contrato y with proporciona el valor.

2. Definir únicamente una variable retries.

   Una variable no define esa interfaz tipada.

3. Añadir runs.inputs al llamador.

   runs.inputs no declara entradas de flujos reutilizables.

4. Poner el número en name del flujo.

   name es metadato visual, no parámetro.

**Concept:** Contrato de entradas reutilizables

**Authored coaching hints:**

- ¿Dónde declara el componente el tipo esperado?
- ¿Cómo proporciona datos el trabajo llamador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um chamador deve passar um número de tentativas a um workflow reutilizável. Onde declarar a interface e fornecer o valor?

1. Declarar type: number em on.workflow\_call.inputs e passar com with do job chamador. **[CORRECT]**

   workflow\_call define o contrato e with fornece o valor.

2. Definir somente uma variável retries.

   Uma variável não define essa interface tipada.

3. Adicionar runs.inputs ao chamador.

   runs.inputs não declara entradas de workflows reutilizáveis.

4. Colocar o número em name do workflow.

   name é metadado visual, não parâmetro.

**Concept:** Contrato de entradas reutilizáveis

**Authored coaching hints:**

- Onde o componente declara o tipo esperado?
- Como o job chamador fornece os dados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-026:64c70b4895e4bdb54c55e492c6730a41be188cee9d516ede4bde4a3ba0c00ca6 -->
## Question 26: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-026`

**Content revision:** `64c70b4895e4bdb54c55e492c6730a41be188cee9d516ede4bde4a3ba0c00ca6`

### English

Workflow A passes a deployment secret to B, and B calls C. C also needs that secret. What must B do?

1. Nothing; all nesting levels inherit secrets automatically.

   Secrets are passed only to directly called workflows, not every nested descendant.

2. Print the secret in B's logs so C can read it.

   Logs are neither a secure nor automatic secret transport.

3. Explicitly pass the secret from B to C. **[CORRECT]**

   B must forward the secret through its direct call to C.

4. Rename C's job to match A's secret.

   Job names do not determine secret inheritance.

**Concept:** Nested secret forwarding

**Authored coaching hints:**

- Is a call chain one trust boundary or several?
- At which edges of that chain must data be deliberately shared?

<details>
<summary>Español — same answer key and option order</summary>

### Español

A pasa un secreto de despliegue a B, y B llama a C. C también lo necesita. ¿Qué debe hacer B?

1. Nada: todos los niveles heredan automáticamente.

   Los secretos solo se pasan al destinatario directo.

2. Imprimir el secreto para que C lo lea.

   Los registros no son transporte seguro de secretos.

3. Pasar explícitamente el secreto a C. **[CORRECT]**

   B debe reenviarlo en su llamada a C.

4. Nombrar el trabajo C como el secreto.

   Los nombres no determinan herencia.

**Concept:** Reenvío de secretos anidados

**Authored coaching hints:**

- ¿Hay una frontera de confianza o varias en la cadena?
- ¿En qué conexiones debe compartirse deliberadamente el dato?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A passa um segredo de implantação para B, e B chama C. C também precisa dele. O que B deve fazer?

1. Nada: todos os níveis herdam automaticamente.

   Segredos são passados apenas ao destinatário direto.

2. Imprimir o segredo para C ler.

   Logs não são transporte seguro de segredos.

3. Passar explicitamente o segredo para C. **[CORRECT]**

   B precisa encaminhá-lo na chamada para C.

4. Nomear o job C como o segredo.

   Nomes não determinam herança.

**Concept:** Encaminhamento de segredos aninhados

**Authored coaching hints:**

- Há uma fronteira de confiança ou várias na cadeia?
- Em quais conexões os dados devem ser compartilhados deliberadamente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-027:a5500ebbb8a898ccac379d8f99701c73bcc102f79e07cfd813acac3d309404d4 -->
## Question 27: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-027`

**Content revision:** `a5500ebbb8a898ccac379d8f99701c73bcc102f79e07cfd813acac3d309404d4`

### English

A caller sets env.REGION at workflow scope and invokes a reusable workflow in another repository. How should it reliably provide the region to that workflow?

1. Assume the caller's workflow env is automatically copied.

   Workflow-level caller env does not automatically propagate to the callee.

2. Pass a declared workflow\_call input via with. **[CORRECT]**

   An explicit input is the supported call contract for this value.

3. Set GITHUB\_ENV in an unrelated job.

   GITHUB\_ENV is job-scoped and does not cross this call boundary.

4. Use the called repository's description field.

   Repository descriptions are not a reusable-workflow parameter mechanism.

**Concept:** Reusable workflow environment boundary

**Authored coaching hints:**

- Which state is local to the caller?
- What makes a reusable component's dependencies visible in its interface?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El llamador define env.REGION a nivel de flujo e invoca otro flujo reutilizable. ¿Cómo proporcionarle la región de manera fiable?

1. Suponer que env se copia automáticamente.

   El env del llamador no se propaga automáticamente.

2. Pasar una entrada workflow\_call declarada mediante with. **[CORRECT]**

   Una entrada explícita forma el contrato admitido.

3. Escribir GITHUB\_ENV en un trabajo ajeno.

   GITHUB\_ENV no cruza esta frontera.

4. Usar la descripción del repositorio llamado.

   Las descripciones no son parámetros de llamada.

**Concept:** Frontera de entorno de flujos reutilizables

**Authored coaching hints:**

- ¿Qué estado pertenece solo al llamador?
- ¿Qué interfaz hace visibles las dependencias del componente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O chamador define env.REGION no workflow e invoca outro workflow reutilizável. Como fornecer a região de forma confiável?

1. Presumir que env seja copiado automaticamente.

   O env do chamador não se propaga automaticamente.

2. Passar uma entrada workflow\_call declarada por with. **[CORRECT]**

   Uma entrada explícita forma o contrato compatível.

3. Escrever GITHUB\_ENV em um job não relacionado.

   GITHUB\_ENV não atravessa essa fronteira.

4. Usar a descrição do repositório chamado.

   Descrições não são parâmetros de chamada.

**Concept:** Fronteira de ambiente de workflows reutilizáveis

**Authored coaching hints:**

- Qual estado pertence apenas ao chamador?
- Qual interface torna visíveis as dependências do componente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-028:9f3d6e0d02fe5848739c3d02aa74e4623448b59b635b51b9484df699237780f1 -->
## Question 28: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-028`

**Content revision:** `9f3d6e0d02fe5848739c3d02aa74e4623448b59b635b51b9484df699237780f1`

### English

A reusable workflow computes a release URL. The caller should consume it as needs.publish.outputs.url. Which mapping chain is required?

1. Log line to badge to caller.

   Logs and badges do not define caller-visible output parameters.

2. Environment variable to repository description.

   Neither field exposes a reusable-workflow result.

3. Step output directly to a different repository's env.

   A step output alone is not the callee's public workflow output.

4. Step output to job output to workflow\_call output. **[CORRECT]**

   Each boundary must expose the value, ending in the reusable workflow's output interface.

**Concept:** Reusable workflow output layers

**Authored coaching hints:**

- Which interfaces separate a step, a job, and a workflow call?
- Where must a value be promoted to become visible outside its current scope?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable calcula una URL que el llamador leerá como needs.publish.outputs.url. ¿Qué cadena de mapeo necesita?

1. Registro a insignia a llamador.

   Registros e insignias no publican parámetros.

2. Variable de entorno a descripción.

   Esos campos no exponen resultados de llamadas.

3. Salida del paso directamente al env de otro repositorio.

   Una salida interna no es una salida pública del flujo.

4. Salida del paso a salida del trabajo a salida workflow\_call. **[CORRECT]**

   Cada frontera debe exponer el valor.

**Concept:** Capas de salidas reutilizables

**Authored coaching hints:**

- ¿Qué interfaces separan paso, trabajo y llamada?
- ¿Dónde debe promoverse el valor para salir de su ámbito?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável calcula uma URL que o chamador lerá como needs.publish.outputs.url. Qual cadeia de mapeamento é necessária?

1. Log para selo para chamador.

   Logs e selos não publicam parâmetros.

2. Variável de ambiente para descrição.

   Esses campos não expõem resultados de chamadas.

3. Saída da etapa diretamente para env de outro repositório.

   Uma saída interna não é a saída pública do workflow.

4. Saída da etapa para saída do job para saída workflow\_call. **[CORRECT]**

   Cada fronteira precisa expor o valor.

**Concept:** Camadas de saídas reutilizáveis

**Authored coaching hints:**

- Quais interfaces separam etapa, job e chamada?
- Onde o valor deve ser promovido para sair do escopo atual?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-029:27dace9bd98b42830109ee69d0507ea07d44e6c53fb6f0362b41d38f5265a6af -->
## Question 29: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-029`

**Content revision:** `27dace9bd98b42830109ee69d0507ea07d44e6c53fb6f0362b41d38f5265a6af`

### English

Two jobs need exactly the same env mapping in a single YAML workflow. Which supported mechanism can reduce that duplication without another workflow file?

1. Define the mapping with an anchor and reference it with an alias. **[CORRECT]**

   YAML anchors and aliases reuse the same content within the workflow file.

2. Call an action.yml file through jobs.&lt;id&gt;.uses.

   Job-level uses calls reusable workflows, not action metadata.

3. Place env in an artifact and expect automatic parsing.

   Artifacts are runtime files and do not automatically supply workflow configuration.

4. Use a repository\_dispatch event for every repeated key.

   Event dispatch is not a YAML configuration reuse mechanism.

**Concept:** YAML anchors and aliases

**Authored coaching hints:**

- Is the repeated content needed while interpreting YAML or after execution starts?
- What is the scope of a YAML reference compared with a reusable workflow?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos trabajos necesitan el mismo mapa env dentro de un único YAML. ¿Qué mecanismo admitido evita duplicarlo sin crear otro flujo?

1. Definir el mapa con un ancla y reutilizarlo con un alias. **[CORRECT]**

   Las anclas y alias reutilizan contenido en el documento.

2. Invocar action.yml con jobs.&lt;id&gt;.uses.

   uses del trabajo invoca flujos, no metadatos de acciones.

3. Guardar env en un artefacto y esperar análisis automático.

   Los artefactos no suministran configuración automáticamente.

4. Disparar repository\_dispatch por cada clave.

   Los eventos no son reutilización de YAML.

**Concept:** Anclas y alias YAML

**Authored coaching hints:**

- ¿El contenido se necesita al interpretar YAML o durante ejecución?
- ¿Qué alcance tiene una referencia YAML frente a un flujo reutilizable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois jobs precisam do mesmo mapa env em um único YAML. Qual mecanismo compatível evita duplicação sem criar outro workflow?

1. Definir o mapa com âncora e reutilizá-lo com alias. **[CORRECT]**

   Âncoras e aliases reutilizam conteúdo no documento.

2. Invocar action.yml com jobs.&lt;id&gt;.uses.

   uses do job chama workflows, não metadados de ações.

3. Guardar env em artefato e esperar análise automática.

   Artefatos não fornecem configuração automaticamente.

4. Disparar repository\_dispatch para cada chave.

   Eventos não são reutilização de YAML.

**Concept:** Âncoras e aliases YAML

**Authored coaching hints:**

- O conteúdo é necessário ao interpretar YAML ou ao executar?
- Qual o alcance de uma referência YAML comparado a um workflow reutilizável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-030:e82925ea96b5dbb5b4196554bfe3990fcca68e5cf2583d909c455f93a742aa7b -->
## Question 30: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-030`

**Content revision:** `e82925ea96b5dbb5b4196554bfe3990fcca68e5cf2583d909c455f93a742aa7b`

### English

A team wants new pushes on the same branch to cancel older CI runs, while keeping different branches independent. Which concurrency design fits?

1. One constant group shared by every workflow and branch.

   A constant group causes unrelated branches and workflows to compete.

2. A group including the workflow and ref, with cancel-in-progress: true. **[CORRECT]**

   Workflow-and-ref grouping scopes cancellation to the intended CI stream.

3. max-parallel: 1 in every matrix, without concurrency.

   Matrix parallelism does not cancel older workflow runs.

4. A timeout equal to the average build duration.

   Timeouts do not identify or replace stale branch runs.

**Concept:** Scoped concurrency cancellation

**Authored coaching hints:**

- Which dimensions distinguish work that should coexist?
- What should make two runs members of the same cancellation group?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Nuevos pushes de una rama deben cancelar su CI anterior, sin afectar otras ramas. ¿Qué diseño de concurrency corresponde?

1. Un grupo constante para todos los flujos y ramas.

   El grupo constante hace competir trabajos no relacionados.

2. Un grupo con flujo y ref, y cancel-in-progress: true. **[CORRECT]**

   Flujo y referencia delimitan la cancelación deseada.

3. Solo max-parallel: 1 en cada matriz.

   El paralelismo de la matriz no cancela ejecuciones anteriores.

4. Un timeout igual a la duración promedio.

   El timeout no identifica trabajo obsoleto de una rama.

**Concept:** Cancelación con simultaneidad delimitada

**Authored coaching hints:**

- ¿Qué dimensiones distinguen trabajo que debe coexistir?
- ¿Qué debe hacer que dos ejecuciones compartan grupo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Novos pushes de uma branch devem cancelar sua CI anterior, sem afetar outras branches. Qual projeto de concurrency corresponde?

1. Um grupo constante para todos os workflows e branches.

   O grupo constante faz trabalhos não relacionados competirem.

2. Um grupo com workflow e ref, e cancel-in-progress: true. **[CORRECT]**

   Workflow e referência delimitam o cancelamento desejado.

3. Somente max-parallel: 1 em cada matriz.

   Paralelismo de matriz não cancela execuções anteriores.

4. Um timeout igual à duração média.

   Timeouts não identificam trabalho obsoleto de uma branch.

**Concept:** Cancelamento com concorrência delimitada

**Authored coaching hints:**

- Quais dimensões distinguem trabalhos que devem coexistir?
- O que deve colocar duas execuções no mesmo grupo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-031:b79e607f4bf74f0ff8ea04b65a1fa5a8ef9abc3d7ef1560739353d8eaae48ef1 -->
## Question 31: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-031`

**Content revision:** `b79e607f4bf74f0ff8ea04b65a1fa5a8ef9abc3d7ef1560739353d8eaae48ef1`

### English

A deployment condition must inspect the event payload before a runner is assigned. Which approach supplies repository event metadata at that stage?

1. Read a shell export from a later step.

   Later shell state does not exist during job-condition evaluation.

2. Read /proc on the future runner.

   A runner filesystem is not available before runner assignment.

3. Use the github context in the job's if expression. **[CORRECT]**

   Supported contexts such as github can be evaluated by Actions before sending the job to a runner.

4. Append the condition to GITHUB\_PATH.

   GITHUB\_PATH changes executable search paths, not job scheduling conditions.

**Concept:** Context evaluation versus runner environment

**Authored coaching hints:**

- Which information exists on GitHub before the job starts?
- How does an expression differ from a shell variable expansion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una condición debe examinar la carga del evento antes de asignar un runner. ¿Qué permite acceder a esos metadatos?

1. Un export de un paso posterior.

   El estado posterior todavía no existe.

2. Leer /proc del futuro runner.

   El sistema de archivos del runner aún no está disponible.

3. El contexto github en if del trabajo. **[CORRECT]**

   github permite evaluación antes de enviar el trabajo al runner.

4. Anexar la condición a GITHUB\_PATH.

   GITHUB\_PATH modifica rutas ejecutables, no condiciones.

**Concept:** Contextos frente a entorno del runner

**Authored coaching hints:**

- ¿Qué información existe antes de iniciar el trabajo?
- ¿Cómo difiere una expresión de la expansión del shell?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma condição deve examinar a carga do evento antes de atribuir um runner. O que permite acessar esses metadados?

1. Um export de uma etapa posterior.

   O estado posterior ainda não existe.

2. Ler /proc do futuro runner.

   O sistema de arquivos do runner ainda não está disponível.

3. O contexto github no if do job. **[CORRECT]**

   github permite avaliação antes de enviar o job ao runner.

4. Acrescentar a condição a GITHUB\_PATH.

   GITHUB\_PATH altera caminhos executáveis, não condições.

**Concept:** Contextos versus ambiente do runner

**Authored coaching hints:**

- Quais informações existem antes de iniciar o job?
- Como uma expressão difere de expansão do shell?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-032:57bb6cdc6f2a67971fdad8d0363691ed8125807f0ac0ac55550df695a0bb3071 -->
## Question 32: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-032`

**Content revision:** `57bb6cdc6f2a67971fdad8d0363691ed8125807f0ac0ac55550df695a0bb3071`

### English

A job output contains a JSON object describing matrix entries. The downstream job must use that object as its strategy matrix. Which function converts the string?

1. hashFiles()

   hashFiles computes file hashes, not structured data from an output string.

2. format()

   format produces formatted text rather than decoding JSON.

3. join()

   join concatenates array elements into text.

4. fromJSON() **[CORRECT]**

   fromJSON converts the output string into a structured expression value.

**Concept:** Dynamic matrix decoding

**Authored coaching hints:**

- What type are job outputs normally exposed as?
- Which transformation reverses JSON serialization?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una salida contiene JSON que describe una matriz. ¿Qué función convierte esa cadena en el objeto usado por strategy.matrix?

1. hashFiles()

   hashFiles calcula hashes de archivos.

2. format()

   format genera texto.

3. join()

   join concatena elementos.

4. fromJSON() **[CORRECT]**

   fromJSON convierte la cadena en un valor estructurado.

**Concept:** Decodificación de matrices dinámicas

**Authored coaching hints:**

- ¿Cómo se exponen normalmente las salidas de trabajos?
- ¿Qué transformación revierte la serialización JSON?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma saída contém JSON que descreve uma matriz. Qual função converte a string no objeto usado por strategy.matrix?

1. hashFiles()

   hashFiles calcula hashes de arquivos.

2. format()

   format gera texto.

3. join()

   join concatena elementos.

4. fromJSON() **[CORRECT]**

   fromJSON converte a string em valor estruturado.

**Concept:** Decodificação de matrizes dinâmicas

**Authored coaching hints:**

- Como saídas de jobs normalmente são expostas?
- Qual transformação reverte a serialização JSON?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-033:aa747a13ae1947afe9df1dad38c24ade26af3e19dddb66df0fa747eec0e8ccba -->
## Question 33: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-033`

**Content revision:** `aa747a13ae1947afe9df1dad38c24ade26af3e19dddb66df0fa747eec0e8ccba`

### English

A build produces a 200 MB application bundle that another job must deploy. Which mechanism should transport that bundle between jobs?

1. Upload and download a workflow artifact. **[CORRECT]**

   Artifacts transfer files between jobs and retain build outputs for retrieval.

2. Put the entire binary in a job output.

   Job outputs are bounded text values, not a suitable large-binary transport.

3. Append the binary to GITHUB\_ENV.

   GITHUB\_ENV configures later steps' variables within a job.

4. Print the binary in the job summary.

   Summaries display Markdown rather than supplying deployment files.

**Concept:** Artifacts versus outputs

**Authored coaching hints:**

- Is the payload a small scalar value or a file bundle?
- Which mechanism preserves files independently of the producer's runner?

<details>
<summary>Español — same answer key and option order</summary>

### Español

build produce un paquete de aplicación de 200 MB que deploy, en otro trabajo, debe usar. ¿Qué mecanismo lo transporta?

1. Subir y descargar un artefacto del flujo. **[CORRECT]**

   Los artefactos transfieren archivos entre trabajos.

2. Guardar el binario completo en una salida.

   Las salidas son texto limitado, no transporte de binarios grandes.

3. Anexarlo a GITHUB\_ENV.

   GITHUB\_ENV configura variables del mismo trabajo.

4. Imprimirlo en el resumen.

   Los resúmenes muestran Markdown, no archivos desplegables.

**Concept:** Artefactos frente a salidas

**Authored coaching hints:**

- ¿Se trata de un valor escalar o un paquete de archivos?
- ¿Qué conserva archivos al desaparecer el runner productor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

build produz um pacote de aplicação de 200 MB que deploy, em outro job, deve usar. Qual mecanismo o transporta?

1. Enviar e baixar um artefato do workflow. **[CORRECT]**

   Artefatos transferem arquivos entre jobs.

2. Guardar o binário inteiro em uma saída.

   Saídas são texto limitado, não transporte de binários grandes.

3. Acrescentá-lo a GITHUB\_ENV.

   GITHUB\_ENV configura variáveis do mesmo job.

4. Imprimi-lo no resumo.

   Resumos exibem Markdown, não arquivos de implantação.

**Concept:** Artefatos versus saídas

**Authored coaching hints:**

- É um valor escalar ou um pacote de arquivos?
- O que preserva arquivos depois que o runner produtor desaparece?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-034:887c225d7331fa7eec5da61faca68d62b8433320eb5bf38f064777f1ff36dff9 -->
## Question 34: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-034`

**Content revision:** `887c225d7331fa7eec5da61faca68d62b8433320eb5bf38f064777f1ff36dff9`

### English

A dependency cache must invalidate when package-lock.json changes and avoid mixing incompatible operating-system content. Which key design fits?

1. One constant key named dependencies for all runs.

   A constant key cannot distinguish changed lockfiles or operating systems.

2. A key containing runner.os and hashFiles('package-lock.json'). **[CORRECT]**

   The OS dimension separates platforms and the lockfile hash tracks dependency changes.

3. Only github.actor, regardless of dependency changes.

   Actor identity does not describe dependency contents or platform compatibility.

4. Only the upload-artifact name.

   Artifact names do not define a dependency cache's key or compatibility.

**Concept:** Dependency-aware cache keys

**Authored coaching hints:**

- Which inputs determine whether cached files remain compatible?
- How can a file's contents influence a key without embedding the file itself?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una caché debe cambiar con package-lock.json y no mezclar sistemas operativos incompatibles. ¿Qué clave corresponde?

1. Una clave constante dependencies.

   Una constante no distingue plataforma ni dependencias.

2. Una clave con runner.os y hashFiles('package-lock.json'). **[CORRECT]**

   El sistema separa plataformas y el hash refleja cambios.

3. Solo github.actor.

   El actor no describe contenido ni compatibilidad.

4. Solo el nombre de upload-artifact.

   Un nombre de artefacto no define claves de caché.

**Concept:** Claves de caché según dependencias

**Authored coaching hints:**

- ¿Qué entradas determinan compatibilidad?
- ¿Cómo incorporar el contenido de un archivo sin incluirlo completo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cache deve mudar com package-lock.json e não misturar sistemas operacionais incompatíveis. Qual chave corresponde?

1. Uma chave constante dependencies.

   Uma constante não distingue plataforma nem dependências.

2. Uma chave com runner.os e hashFiles('package-lock.json'). **[CORRECT]**

   O sistema separa plataformas e o hash reflete alterações.

3. Somente github.actor.

   O ator não descreve conteúdo nem compatibilidade.

4. Somente o nome de upload-artifact.

   O nome de artefato não define chaves de cache.

**Concept:** Chaves de cache por dependências

**Authored coaching hints:**

- Quais entradas determinam a compatibilidade?
- Como incorporar o conteúdo do arquivo sem incluir o arquivo inteiro?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-035:9e8a1792e1c644d04ea34bfcc1f392f1189812560cdae2673b3c19755050b58f -->
## Question 35: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-035`

**Content revision:** `9e8a1792e1c644d04ea34bfcc1f392f1189812560cdae2673b3c19755050b58f`

### English

A cache restores a prefix match rather than an exact key match. The workflow needs to complete dependency installation. How should it interpret cache-hit?

1. It proves every dependency is already exact.

   A fallback cache can contain an older dependency set.

2. It guarantees the job will fail.

   A non-exact hit can still speed a successful installation.

3. Only 'true' indicates an exact key match; a fallback may still need installation. **[CORRECT]**

   cache-hit distinguishes exact matches from fallback restoration.

4. It contains the path of the restored directory.

   The output reports match status, not a filesystem path.

**Concept:** Cache-hit semantics

**Authored coaching hints:**

- Does restoring useful files prove the lockfile matches exactly?
- What remains necessary after a partially compatible cache is restored?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se restaura una caché por prefijo, no por coincidencia exacta. ¿Cómo interpretar cache-hit para decidir la instalación de dependencias?

1. Demuestra que todas las dependencias son exactas.

   El respaldo puede contener dependencias anteriores.

2. Garantiza el fallo del trabajo.

   Una coincidencia parcial puede acelerar una instalación exitosa.

3. Solo 'true' indica coincidencia exacta; un respaldo puede requerir instalación. **[CORRECT]**

   cache-hit distingue coincidencias exactas de respaldos.

4. Contiene la ruta del directorio restaurado.

   La salida indica coincidencia, no una ruta.

**Concept:** Semántica de cache-hit

**Authored coaching hints:**

- ¿Restaurar archivos útiles demuestra coincidencia del lockfile?
- ¿Qué falta tras restaurar una caché parcialmente compatible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cache é restaurado por prefixo, não por correspondência exata. Como interpretar cache-hit para decidir a instalação de dependências?

1. Prova que todas as dependências são exatas.

   O fallback pode conter dependências anteriores.

2. Garante falha do job.

   Uma correspondência parcial pode acelerar uma instalação bem-sucedida.

3. Somente 'true' indica correspondência exata; um fallback pode exigir instalação. **[CORRECT]**

   cache-hit distingue correspondência exata de fallback.

4. Contém o caminho do diretório restaurado.

   A saída informa correspondência, não um caminho.

**Concept:** Semântica de cache-hit

**Authored coaching hints:**

- Restaurar arquivos úteis prova correspondência do lockfile?
- O que falta após restaurar um cache parcialmente compatível?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-036:6847cb5872128a65c7036e83f3fc46373b72f02f9475a129e2824bc533ffc8e6 -->
## Question 36: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-036`

**Content revision:** `6847cb5872128a65c7036e83f3fc46373b72f02f9475a129e2824bc533ffc8e6`

### English

A coverage step should display a Markdown table on the run summary page without creating a separate downloadable file. Where should it write?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT defines named values consumed by expressions.

2. GITHUB\_PATH

   GITHUB\_PATH adds directories to the executable search path.

3. The repository's default branch.

   A repository commit is unnecessary and does not create a step summary.

4. GITHUB\_STEP\_SUMMARY **[CORRECT]**

   GITHUB\_STEP\_SUMMARY accepts Markdown shown on the workflow run summary.

**Concept:** Job summaries

**Authored coaching hints:**

- Is this data for another program or for a reader?
- Which channel renders rich text rather than environment configuration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cobertura debe mostrar una tabla Markdown en el resumen de ejecución sin crear un archivo descargable. ¿Dónde escribirla?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT define valores nombrados.

2. GITHUB\_PATH

   GITHUB\_PATH configura búsqueda de ejecutables.

3. En la rama predeterminada.

   Un commit no crea un resumen de paso.

4. GITHUB\_STEP\_SUMMARY **[CORRECT]**

   GITHUB\_STEP\_SUMMARY muestra Markdown en el resumen.

**Concept:** Resúmenes de trabajos

**Authored coaching hints:**

- ¿El dato es para otro programa o para una persona?
- ¿Qué canal presenta texto enriquecido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A cobertura deve mostrar uma tabela Markdown no resumo da execução sem criar arquivo para download. Onde escrevê-la?

1. GITHUB\_OUTPUT

   GITHUB\_OUTPUT define valores nomeados.

2. GITHUB\_PATH

   GITHUB\_PATH configura busca de executáveis.

3. Na branch padrão.

   Um commit não cria resumo de etapa.

4. GITHUB\_STEP\_SUMMARY **[CORRECT]**

   GITHUB\_STEP\_SUMMARY exibe Markdown no resumo.

**Concept:** Resumos de jobs

**Authored coaching hints:**

- O dado é para outro programa ou para uma pessoa?
- Qual canal apresenta texto enriquecido?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-037:de353e782052e3d4617379eb8d988f5d4d20cb9b1f4bc6571e7de7c5cd7fc84d -->
## Question 37: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-037`

**Content revision:** `de353e782052e3d4617379eb8d988f5d4d20cb9b1f4bc6571e7de7c5cd7fc84d`

### English

A test artifact should expire after seven days, within the repository's allowed retention limit. Which upload configuration expresses that requirement?

1. retention-days: 7 **[CORRECT]**

   retention-days controls how long the uploaded artifact is retained.

2. timeout-minutes: 10080

   A job timeout does not define artifact expiration.

3. permissions: actions: read

   Read permission does not set storage lifetime.

4. strategy.max-parallel: 7

   Parallelism controls job scheduling rather than artifact retention.

**Concept:** Artifact retention

**Authored coaching hints:**

- Does the requested lifetime concern execution or stored output?
- Which configuration belongs to artifact upload rather than the job scheduler?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un artefacto debe expirar en siete días, dentro del límite permitido. ¿Qué configuración de subida corresponde?

1. retention-days: 7 **[CORRECT]**

   retention-days controla la conservación.

2. timeout-minutes: 10080

   El timeout no establece expiración.

3. permissions: actions: read

   El permiso de lectura no define duración.

4. strategy.max-parallel: 7

   El paralelismo controla ejecución, no almacenamiento.

**Concept:** Retención de artefactos

**Authored coaching hints:**

- ¿La duración corresponde a ejecución o datos guardados?
- ¿Qué configuración pertenece a la subida del artefacto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um artefato deve expirar em sete dias, dentro do limite permitido. Qual configuração de envio corresponde?

1. retention-days: 7 **[CORRECT]**

   retention-days controla a retenção.

2. timeout-minutes: 10080

   Timeout não define expiração.

3. permissions: actions: read

   Permissão de leitura não define duração.

4. strategy.max-parallel: 7

   Paralelismo controla execução, não armazenamento.

**Concept:** Retenção de artefatos

**Authored coaching hints:**

- A duração se refere à execução ou a dados armazenados?
- Qual configuração pertence ao envio do artefato?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-038:67574f482eb3daf87dd6b441d2177fe042880bdfc158a28c5c0efcb5035991fc -->
## Question 38: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-038`

**Content revision:** `67574f482eb3daf87dd6b441d2177fe042880bdfc158a28c5c0efcb5035991fc`

### English

A build job should execute its shell commands in src/ by default, while a later step can override that directory. What configuration reduces repetition?

1. Set repository.description to src/.

   Repository descriptions do not control command execution directories.

2. Set defaults.run.working-directory at the job scope. **[CORRECT]**

   Job run defaults apply to run steps and may be overridden per step.

3. Set env.PWD and assume the runner changes directory.

   Changing a variable named PWD is not a reliable directory-changing mechanism.

4. Move the workflow file into src/.

   Workflow files belong under .github/workflows, and their location does not set run-step directories.

**Concept:** Run-step defaults

**Authored coaching hints:**

- Which settings apply to shell execution rather than repository metadata?
- How can a broad default coexist with a narrow exception?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los comandos de build deben ejecutarse por defecto en src/, permitiendo excepciones por paso. ¿Qué reduce repetición?

1. Definir repository.description como src/.

   La descripción no controla directorios.

2. Definir defaults.run.working-directory en el trabajo. **[CORRECT]**

   Los valores predeterminados se pueden reemplazar por paso.

3. Cambiar env.PWD y suponer cambio de directorio.

   Cambiar PWD no cambia el directorio de manera fiable.

4. Mover el flujo a src/.

   La ubicación del YAML no determina el directorio de ejecución.

**Concept:** Valores predeterminados de ejecución

**Authored coaching hints:**

- ¿Qué ajuste controla comandos y no metadatos?
- ¿Cómo conviven un valor general y una excepción local?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Comandos de build devem executar por padrão em src/, permitindo exceções por etapa. O que reduz repetição?

1. Definir repository.description como src/.

   A descrição não controla diretórios.

2. Definir defaults.run.working-directory no job. **[CORRECT]**

   Os padrões podem ser substituídos por etapa.

3. Alterar env.PWD e presumir mudança de diretório.

   Alterar PWD não muda o diretório de forma confiável.

4. Mover o workflow para src/.

   A localização do YAML não define o diretório de execução.

**Concept:** Padrões de execução

**Authored coaching hints:**

- Qual ajuste controla comandos, não metadados?
- Como um padrão geral pode coexistir com exceção local?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-039:5dc95e88cb56a6c58302f03ab149b45710ecf619968c6c2d220e06f0367e9493 -->
## Question 39: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-039`

**Content revision:** `5dc95e88cb56a6c58302f03ab149b45710ecf619968c6c2d220e06f0367e9493`

### English

A team adds a ten-minute limit to a single test step because only that command occasionally hangs. Where should timeout-minutes be set for the narrowest effect?

1. Under on.push.

   Event filters do not impose command timeouts.

2. Only in the organization's billing settings.

   Billing settings are not per-step execution controls.

3. On the test step. **[CORRECT]**

   A step-level timeout limits the hanging operation without imposing the same limit on every step.

4. As an input to every action in the repository.

   Inputs are action-specific and do not universally configure runner timeouts.

**Concept:** Timeout scope

**Authored coaching hints:**

- What is the smallest execution unit that needs the limit?
- Would a job-wide limit constrain unrelated setup and reporting work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Solo un comando de pruebas se cuelga ocasionalmente. ¿Dónde definir timeout-minutes: 10 para limitarlo con el alcance más estrecho?

1. En on.push.

   Los filtros no limitan comandos.

2. Solo en facturación de la organización.

   Facturación no configura pasos individuales.

3. En el paso de pruebas. **[CORRECT]**

   Un timeout del paso limita únicamente esa operación.

4. Como entrada de todas las acciones.

   Las entradas no controlan universalmente timeouts del runner.

**Concept:** Alcance de timeouts

**Authored coaching hints:**

- ¿Cuál es la unidad mínima que necesita el límite?
- ¿Un límite del trabajo afectaría tareas no relacionadas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Somente um comando de testes trava ocasionalmente. Onde definir timeout-minutes: 10 com o alcance mais restrito?

1. Em on.push.

   Filtros não limitam comandos.

2. Somente no faturamento da organização.

   Faturamento não configura etapas individuais.

3. Na etapa de testes. **[CORRECT]**

   O timeout da etapa limita apenas aquela operação.

4. Como entrada de todas as ações.

   Entradas não controlam universalmente timeouts do runner.

**Concept:** Escopo de timeouts

**Authored coaching hints:**

- Qual é a menor unidade que precisa do limite?
- Um limite do job afetaria tarefas não relacionadas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-040:2b9121fd0350f3f063d9b5e1d3f5173b44b6b67f57c51d8597b2f5c9249e8deb -->
## Question 40: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-040`

**Content revision:** `2b9121fd0350f3f063d9b5e1d3f5173b44b6b67f57c51d8597b2f5c9249e8deb`

### English

A repository stores an action at .github/actions/lint and references it using uses: ./.github/actions/lint. What must happen before that local-path step on a fresh hosted runner?

1. Publish the action to Marketplace.

   Local-path actions do not require Marketplace publication.

2. Create an environment named lint.

   An environment name does not supply the action's files.

3. Set id-token: write.

   OIDC permission does not download repository contents.

4. Check out the repository so that the local action files exist. **[CORRECT]**

   The ./ form resolves a path in the runner workspace and requires the files to be present.

**Concept:** Local action workspace requirements

**Authored coaching hints:**

- Does a relative filesystem reference fetch repository contents by itself?
- What does a fresh runner initially know about the repository's files?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo usa ./.github/actions/lint como acción local. ¿Qué debe ocurrir antes en un runner hospedado nuevo?

1. Publicarla en Marketplace.

   Las acciones locales no requieren Marketplace.

2. Crear un entorno lint.

   Un entorno no descarga archivos.

3. Conceder id-token: write.

   OIDC no obtiene código.

4. Hacer checkout del repositorio para disponer de los archivos. **[CORRECT]**

   La forma ./ necesita archivos presentes en el workspace.

**Concept:** Archivos de acciones locales

**Authored coaching hints:**

- ¿Una referencia de sistema de archivos descarga código?
- ¿Qué archivos conoce inicialmente un runner nuevo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow usa ./.github/actions/lint como ação local. O que deve ocorrer antes em um runner hospedado novo?

1. Publicá-la no Marketplace.

   Ações locais não exigem Marketplace.

2. Criar um ambiente lint.

   Um ambiente não baixa arquivos.

3. Conceder id-token: write.

   OIDC não obtém o código.

4. Fazer checkout do repositório para disponibilizar os arquivos. **[CORRECT]**

   A forma ./ exige arquivos presentes no workspace.

**Concept:** Arquivos de ações locais

**Authored coaching hints:**

- Uma referência de sistema de arquivos baixa código?
- Quais arquivos um runner novo conhece inicialmente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-041:15c09398664349759201d5fcf4c8cebdd9751a0b931032e5b562bfd138d943cc -->
## Question 41: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-041`

**Content revision:** `15c09398664349759201d5fcf4c8cebdd9751a0b931032e5b562bfd138d943cc`

### English

A production job must wait for a configured environment's protection rules before using its secrets. Which workflow declaration connects the job to that environment?

1. environment: production on the job. **[CORRECT]**

   A job environment reference associates deployment protections and environment secrets.

2. env: \{ NAME: production \} only.

   An env variable is ordinary process configuration, not a deployment environment reference.

3. name: production on a shell step.

   A display name does not invoke protection rules.

4. A cache key ending in production.

   Cache naming does not create deployment gates.

**Concept:** Environment association

**Authored coaching hints:**

- How does a deployment environment differ from a process environment variable?
- Which association lets GitHub apply rules before the job proceeds?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de producción debe esperar las reglas de protección y acceder a secretos de un entorno configurado. ¿Cómo se vincula?

1. environment: production en el trabajo. **[CORRECT]**

   environment asocia protecciones y secretos del destino.

2. Solo env: \{ NAME: production \}.

   Una variable de proceso no es una referencia de despliegue.

3. name: production en un paso.

   El nombre visual no aplica reglas.

4. Una clave de caché terminada en production.

   La caché no crea aprobaciones.

**Concept:** Asociación de entornos

**Authored coaching hints:**

- ¿Cómo difiere un entorno de despliegue de una variable?
- ¿Qué asociación aplica reglas antes de continuar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de produção deve aguardar regras de proteção e acessar segredos de um ambiente configurado. Como vinculá-lo?

1. environment: production no job. **[CORRECT]**

   environment associa proteções e segredos do destino.

2. Somente env: \{ NAME: production \}.

   Uma variável de processo não referencia ambiente de implantação.

3. name: production em uma etapa.

   O nome visual não aplica regras.

4. Uma chave de cache terminando em production.

   Cache não cria aprovações.

**Concept:** Associação de ambientes

**Authored coaching hints:**

- Como um ambiente de implantação difere de uma variável?
- Qual associação aplica regras antes de prosseguir?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments>

<!-- certification-coach-question:actions-042:5fea9aa28dc604745f577f9cfdb37091364e958dca46c68505610e6063739dc2 -->
## Question 42: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-042`

**Content revision:** `5fea9aa28dc604745f577f9cfdb37091364e958dca46c68505610e6063739dc2`

### English

A README should show the latest status of ci.yml for main rather than an unrelated feature branch. What should its Actions status-badge URL include?

1. The actor's email address.

   An email address does not select a workflow's branch status.

2. The workflow file identifier and a branch=main query parameter. **[CORRECT]**

   The workflow identifier selects CI and the branch parameter scopes the badge to main.

3. The plaintext GITHUB\_TOKEN.

   Badges must not expose authentication tokens.

4. Only the matrix runtime version.

   A runtime version alone does not identify the workflow or branch.

**Concept:** Workflow status badge scope

**Authored coaching hints:**

- Which two dimensions distinguish the status being displayed?
- How can a badge avoid following whichever branch happened to run most recently?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una insignia del README debe mostrar ci.yml para main, no otra rama. ¿Qué debe incluir su URL?

1. El correo del actor.

   El correo no selecciona el estado.

2. El identificador del flujo y branch=main. **[CORRECT]**

   El flujo y el parámetro delimitan el estado deseado.

3. GITHUB\_TOKEN en texto plano.

   Las insignias no deben exponer tokens.

4. Solo la versión de la matriz.

   La versión no identifica flujo y rama.

**Concept:** Alcance de insignias de estado

**Authored coaching hints:**

- ¿Qué dos dimensiones distinguen el estado mostrado?
- ¿Cómo evitar seguir la última rama ejecutada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um selo do README deve mostrar ci.yml em main, não outra branch. O que sua URL deve incluir?

1. O e-mail do ator.

   O e-mail não seleciona o status.

2. O identificador do workflow e branch=main. **[CORRECT]**

   Workflow e parâmetro delimitam o status desejado.

3. GITHUB\_TOKEN em texto simples.

   Selos não devem expor tokens.

4. Somente a versão da matriz.

   A versão não identifica workflow e branch.

**Concept:** Escopo de selos de status

**Authored coaching hints:**

- Quais duas dimensões distinguem o status exibido?
- Como evitar acompanhar a última branch executada?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge>

<!-- certification-coach-question:actions-043:c4275836f8c7e07e55d6a219e507bffeb993936a735a8c6dd138fdc08f960795 -->
## Question 43: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-043`

**Content revision:** `c4275836f8c7e07e55d6a219e507bffeb993936a735a8c6dd138fdc08f960795`

### English

A push workflow defines only branches: \[main\]. A maintainer pushes a v3.0 tag pointing at main's commit. What should the author expect from that trigger?

1. It runs because the tagged commit is reachable from main.

   The filter examines the pushed ref, not commit reachability from a branch.

2. It runs twice, once for the tag and once for its target.

   A tag push is not also a separate push of main.

3. It does not run for the tag push because tag refs were not included. **[CORRECT]**

   Defining only branch filters excludes tag-triggered pushes.

4. It silently adds tags: \['\*'\].

   Actions does not automatically add a tag filter.

**Concept:** Branch versus tag push refs

**Authored coaching hints:**

- What changed: a branch ref or a tag ref?
- Does a commit's presence on a branch change the event's ref type?

<details>
<summary>Español — same answer key and option order</summary>

### Español

push define solo branches: \[main\]. Se sube una etiqueta v3.0 que apunta a un commit de main. ¿Qué ocurre?

1. Se ejecuta porque el commit pertenece a main.

   El filtro examina la referencia subida.

2. Se ejecuta dos veces por etiqueta y destino.

   Subir una etiqueta no es también subir main.

3. No se ejecuta: el push afecta una etiqueta no incluida. **[CORRECT]**

   Definir solo ramas excluye pushes de etiquetas.

4. Se añade tags: \['\*'\] automáticamente.

   Actions no añade filtros automáticamente.

**Concept:** Referencias de ramas y etiquetas

**Authored coaching hints:**

- ¿Cambió una rama o una etiqueta?
- ¿La pertenencia del commit cambia el tipo de referencia del evento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

push define somente branches: \[main\]. É enviada a tag v3.0 apontando para um commit de main. O que ocorre?

1. Executa porque o commit pertence a main.

   O filtro examina a referência enviada.

2. Executa duas vezes, pela tag e pelo destino.

   Enviar uma tag não é também enviar main.

3. Não executa: o push afeta uma tag não incluída. **[CORRECT]**

   Definir somente branches exclui pushes de tags.

4. Adiciona tags: \['\*'\] automaticamente.

   Actions não adiciona filtros automaticamente.

**Concept:** Referências de branches e tags

**Authored coaching hints:**

- Uma branch ou uma tag foi alterada?
- A presença do commit muda o tipo de referência do evento?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-044:90ae2a8c6efe9155f8a5cf17dd35fa87a62328e36cdcc9477d9b18cc1a28ca2d -->
## Question 44: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-044`

**Content revision:** `90ae2a8c6efe9155f8a5cf17dd35fa87a62328e36cdcc9477d9b18cc1a28ca2d`

### English

A workflow should react only when an issue is newly opened, not whenever labels or assignees change. Which configuration narrows it appropriately?

1. on: issues with no activity filter.

   Without a types filter, the issues event covers additional activity types.

2. on: issue\_comment.

   Comments and opening an issue are different events.

3. on: push with paths: \['issues/\*\*'\].

   Repository file paths do not represent issue lifecycle activity.

4. on.issues.types: \[opened\]. **[CORRECT]**

   The opened activity filter selects the issue-creation transition.

**Concept:** Webhook activity selection

**Authored coaching hints:**

- What part of an event distinguishes creation from subsequent updates?
- Is issue state represented by files in the repository?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo debe reaccionar solo al abrir un issue, no al cambiar etiquetas o responsables. ¿Qué configuración corresponde?

1. on: issues sin filtro.

   Sin types también responde a otras actividades.

2. on: issue\_comment.

   Comentar no equivale a abrir.

3. on: push con paths: \['issues/\*\*'\].

   Los issues no son rutas del repositorio.

4. on.issues.types: \[opened\]. **[CORRECT]**

   opened selecciona la creación del issue.

**Concept:** Selección de actividad webhook

**Authored coaching hints:**

- ¿Qué distingue creación de actualizaciones posteriores?
- ¿El estado del issue se representa como archivos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow deve reagir somente à abertura de uma issue, não a alterações de rótulos ou responsáveis. Qual configuração corresponde?

1. on: issues sem filtro.

   Sem types também responde a outras atividades.

2. on: issue\_comment.

   Comentar não equivale a abrir.

3. on: push com paths: \['issues/\*\*'\].

   Issues não são caminhos do repositório.

4. on.issues.types: \[opened\]. **[CORRECT]**

   opened seleciona a criação da issue.

**Concept:** Seleção de atividade webhook

**Authored coaching hints:**

- O que distingue criação de atualizações posteriores?
- O estado de uma issue é representado por arquivos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-045:2629fc639cdcecc1f158c3939e6a56866db2fad7e0bb50cabac9ee971e29e279 -->
## Question 45: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-045`

**Content revision:** `2629fc639cdcecc1f158c3939e6a56866db2fad7e0bb50cabac9ee971e29e279`

### English

Two schedules run the same reporting workflow. A costly audit step should execute only for one of those cron expressions. Which context property identifies the schedule that triggered the run?

1. github.event.schedule **[CORRECT]**

   The schedule event payload exposes the triggering cron expression.

2. runner.arch

   Runner architecture does not identify the triggering schedule.

3. steps.audit.name

   A step's display name does not contain event information.

4. secrets.schedule

   Secrets are separately configured values, not automatic event metadata.

**Concept:** Schedule event payload

**Authored coaching hints:**

- Where is trigger-specific information exposed?
- Would runner hardware distinguish two schedules for the same workflow?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos programaciones usan el mismo flujo. Un paso de auditoría debe ejecutarse solo para una expresión cron. ¿Qué propiedad identifica cuál lo disparó?

1. github.event.schedule **[CORRECT]**

   La carga schedule expone la expresión disparadora.

2. runner.arch

   La arquitectura no identifica horarios.

3. steps.audit.name

   El nombre del paso no contiene metadatos del evento.

4. secrets.schedule

   Los secretos no son metadatos automáticos.

**Concept:** Carga del evento schedule

**Authored coaching hints:**

- ¿Dónde aparece información específica del disparador?
- ¿El hardware distingue dos horarios del mismo flujo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois agendamentos usam o mesmo workflow. Uma auditoria deve executar somente para uma expressão cron. Qual propriedade identifica qual disparou a execução?

1. github.event.schedule **[CORRECT]**

   A carga schedule expõe a expressão disparadora.

2. runner.arch

   A arquitetura não identifica horários.

3. steps.audit.name

   O nome da etapa não contém metadados do evento.

4. secrets.schedule

   Segredos não são metadados automáticos.

**Concept:** Carga do evento schedule

**Authored coaching hints:**

- Onde aparece informação específica do gatilho?
- O hardware distingue dois horários do mesmo workflow?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-046:ab5a2f7962fe206005ae4a3ddf9012424887bf6edc7d4da786ce3ab78485eed8 -->
## Question 46: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-046`

**Content revision:** `ab5a2f7962fe206005ae4a3ddf9012424887bf6edc7d4da786ce3ab78485eed8`

### English

An earlier step emits the string 'false' as output named enabled. A later condition must evaluate its boolean meaning. Which expression performs an explicit conversion?

1. steps.config.outputs.enabled \!= ''

   The nonempty string 'false' passes a nonempty-string test.

2. fromJSON(steps.config.outputs.enabled) **[CORRECT]**

   fromJSON converts a valid JSON boolean string into a boolean value.

3. format('\{0\}', steps.config.outputs.enabled)

   format retains a string representation rather than converting its type.

4. contains(steps.config.outputs.enabled, 'e')

   A character-substring test does not interpret boolean semantics.

**Concept:** String output type conversion

**Authored coaching hints:**

- Is the producer returning a boolean or text representing a boolean?
- What operation turns serialized data back into its native type?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso emite la cadena 'false' como salida enabled. ¿Qué expresión la convierte explícitamente a booleano?

1. steps.config.outputs.enabled \!= ''

   'false' no es una cadena vacía.

2. fromJSON(steps.config.outputs.enabled) **[CORRECT]**

   fromJSON interpreta el booleano JSON.

3. format('\{0\}', steps.config.outputs.enabled)

   format conserva una representación textual.

4. contains(steps.config.outputs.enabled, 'e')

   Buscar caracteres no interpreta booleanos.

**Concept:** Conversión de tipos de salidas

**Authored coaching hints:**

- ¿El productor devuelve un booleano o texto?
- ¿Qué operación recupera el tipo nativo de datos serializados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa emite a string 'false' como saída enabled. Qual expressão a converte explicitamente em booleano?

1. steps.config.outputs.enabled \!= ''

   'false' não é uma string vazia.

2. fromJSON(steps.config.outputs.enabled) **[CORRECT]**

   fromJSON interpreta o booleano JSON.

3. format('\{0\}', steps.config.outputs.enabled)

   format mantém representação textual.

4. contains(steps.config.outputs.enabled, 'e')

   Buscar caracteres não interpreta booleanos.

**Concept:** Conversão de tipos de saídas

**Authored coaching hints:**

- O produtor retorna booleano ou texto?
- Qual operação recupera o tipo nativo de dados serializados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-047:67a0495ed955e68391704a163c6849255db8350b6a4689b8a9a43ee5bfc0f8b4 -->
## Question 47: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-047`

**Content revision:** `67a0495ed955e68391704a163c6849255db8350b6a4689b8a9a43ee5bfc0f8b4`

### English

A caller wants a reusable deployment workflow to run once for each of dev, stage, and prod. Which structure supports this without copying the called workflow?

1. Call workflow\_call from a shell loop.

   A shell loop cannot directly invoke workflow\_call as a job call.

2. Put three env values under the called workflow's name.

   The name field does not expand calls or supply input values.

3. Use a matrix on the calling job and pass matrix.target through with. **[CORRECT]**

   A matrix can expand reusable-workflow calling jobs and provide per-call inputs.

4. Store three identical workflow files as artifacts.

   Artifact storage does not instantiate workflow jobs.

**Concept:** Matrix reusable-workflow calls

**Authored coaching hints:**

- Which workflow feature expands a job over a set of values?
- At what level is a reusable workflow invoked?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El llamador necesita ejecutar el mismo despliegue reutilizable para dev, stage y prod. ¿Qué estructura evita copiar el flujo llamado?

1. Invocar workflow\_call desde un bucle shell.

   Un bucle shell no invoca workflow\_call directamente.

2. Poner tres valores env en name.

   name no expande llamadas.

3. Usar una matriz en el trabajo llamador y pasar matrix.target por with. **[CORRECT]**

   La matriz expande trabajos llamadores con entradas distintas.

4. Guardar tres flujos idénticos como artefactos.

   Los artefactos no instancian trabajos.

**Concept:** Matrices con flujos reutilizables

**Authored coaching hints:**

- ¿Qué función expande un trabajo sobre varios valores?
- ¿En qué nivel se invoca el flujo reutilizable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O chamador precisa executar a mesma implantação reutilizável para dev, stage e prod. Qual estrutura evita copiar o workflow chamado?

1. Invocar workflow\_call por loop de shell.

   Um loop de shell não chama workflow\_call diretamente.

2. Colocar três valores env em name.

   name não expande chamadas.

3. Usar matriz no job chamador e passar matrix.target por with. **[CORRECT]**

   A matriz expande jobs chamadores com entradas distintas.

4. Guardar três workflows idênticos como artefatos.

   Artefatos não instanciam jobs.

**Concept:** Matrizes com workflows reutilizáveis

**Authored coaching hints:**

- Qual recurso expande um job sobre vários valores?
- Em qual nível se invoca um workflow reutilizável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-048:ae50dff59daeafae15e6bd0cdccbf8f57cfd34c4da9592cd921302f2d7dc746e -->
## Question 48: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-048`

**Content revision:** `ae50dff59daeafae15e6bd0cdccbf8f57cfd34c4da9592cd921302f2d7dc746e`

### English

A team pins uses: ./.github/workflows/build.yml without an @ref suffix. Which version of that reusable workflow is selected?

1. The newest Marketplace release.

   Local workflow references do not resolve through Marketplace.

2. The called file's default branch, regardless of the caller.

   The ./ reusable-workflow form is tied to the caller commit, not automatically the default branch.

3. A random successful historical version.

   Historical run success is not a version-selection criterion.

4. The version from the same commit as the caller workflow. **[CORRECT]**

   A same-repository relative workflow reference uses the caller's commit.

**Concept:** Same-repository workflow reference

**Authored coaching hints:**

- How can related workflow changes remain atomic within one commit?
- What distinguishes a local workflow reference from owner/repo@branch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un llamador usa ./.github/workflows/build.yml sin @ref. ¿Qué versión del flujo reutilizable se selecciona?

1. La última versión de Marketplace.

   Las referencias locales no usan Marketplace.

2. La rama predeterminada, sin importar el llamador.

   La referencia ./ queda vinculada al commit llamador.

3. Una versión histórica exitosa al azar.

   El éxito histórico no selecciona versiones.

4. La del mismo commit que el llamador. **[CORRECT]**

   Ambos archivos se resuelven en el mismo commit.

**Concept:** Referencias de flujos del mismo repositorio

**Authored coaching hints:**

- ¿Cómo pueden mantenerse atómicos cambios relacionados?
- ¿Qué distingue una referencia local de owner/repo@branch?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um chamador usa ./.github/workflows/build.yml sem @ref. Qual versão do workflow reutilizável é selecionada?

1. A última versão do Marketplace.

   Referências locais não usam Marketplace.

2. A branch padrão, independentemente do chamador.

   A referência ./ fica vinculada ao commit chamador.

3. Uma versão histórica bem-sucedida aleatória.

   Sucesso histórico não seleciona versões.

4. A do mesmo commit que o chamador. **[CORRECT]**

   Os dois arquivos são resolvidos no mesmo commit.

**Concept:** Referências do mesmo repositório

**Authored coaching hints:**

- Como manter atômicas alterações relacionadas?
- O que distingue uma referência local de owner/repo@branch?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-049:e5db7562e341eb82c64891f318f37da84214ca7a55cce37f1cbeefa6b4b879f2 -->
## Question 49: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-049`

**Content revision:** `e5db7562e341eb82c64891f318f37da84214ca7a55cce37f1cbeefa6b4b879f2`

### English

A shell step installs a CLI in a custom directory. Later steps in the job should find it by name. Which runner file should the installer append the directory to?

1. GITHUB\_PATH **[CORRECT]**

   Appending to GITHUB\_PATH adds directories to PATH for subsequent steps.

2. GITHUB\_OUTPUT with no output name.

   Named outputs do not automatically modify the executable search path.

3. GITHUB\_STEP\_SUMMARY

   Summary Markdown does not affect command lookup.

4. GITHUB\_EVENT\_PATH

   GITHUB\_EVENT\_PATH points to the event payload, not a PATH update file.

**Concept:** Persisting executable search paths

**Authored coaching hints:**

- Which operating-system variable controls command lookup?
- What update must survive beyond the installer's shell process?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso instala un CLI en un directorio personalizado. Los pasos posteriores deben encontrarlo por nombre. ¿A qué archivo anexar el directorio?

1. GITHUB\_PATH **[CORRECT]**

   GITHUB\_PATH añade rutas para pasos posteriores.

2. GITHUB\_OUTPUT sin nombre de salida.

   Las salidas no modifican PATH automáticamente.

3. GITHUB\_STEP\_SUMMARY

   El Markdown no afecta búsqueda de comandos.

4. GITHUB\_EVENT\_PATH

   GITHUB\_EVENT\_PATH apunta a la carga del evento.

**Concept:** Persistencia de rutas ejecutables

**Authored coaching hints:**

- ¿Qué variable controla la búsqueda de comandos?
- ¿Qué actualización debe sobrevivir al shell instalador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa instala um CLI em diretório personalizado. As próximas etapas devem encontrá-lo pelo nome. A qual arquivo acrescentar o diretório?

1. GITHUB\_PATH **[CORRECT]**

   GITHUB\_PATH adiciona caminhos para etapas posteriores.

2. GITHUB\_OUTPUT sem nome de saída.

   Saídas não modificam PATH automaticamente.

3. GITHUB\_STEP\_SUMMARY

   Markdown não afeta busca de comandos.

4. GITHUB\_EVENT\_PATH

   GITHUB\_EVENT\_PATH aponta para a carga do evento.

**Concept:** Persistência de caminhos executáveis

**Authored coaching hints:**

- Qual variável controla a busca de comandos?
- Qual atualização deve sobreviver ao shell instalador?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-050:b6f347e3e2186692c4751229d090ef644051b5dfae0ed495e8bed5c65a5e53ee -->
## Question 50: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-050`

**Content revision:** `b6f347e3e2186692c4751229d090ef644051b5dfae0ed495e8bed5c65a5e53ee`

### English

A matrix normally tests runtime 20 and 22 on Linux. The author adds include: \[\{os: windows-latest, runtime: 22\}\]. Because it cannot merge into either original Linux combination, what happens?

1. Both Linux combinations become Windows.

   An include entry that would overwrite original axis values does not replace all base combinations.

2. A separate Windows/runtime-22 combination is added. **[CORRECT]**

   An include mapping that cannot augment an original combination becomes an additional matrix job.

3. The workflow removes runtime 20.

   The include mapping does not exclude the Linux/runtime-20 combination.

4. The entire matrix is ignored.

   A valid include entry does not disable matrix expansion.

**Concept:** Matrix include expansion

**Authored coaching hints:**

- Can the extra mapping be added without overwriting an original axis value?
- What is the difference between augmenting a combination and adding a new one?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz base prueba runtimes 20 y 22 en Linux. include añade \{os: windows-latest, runtime: 22\}, incompatible con fusionarse sin reemplazar valores originales. ¿Qué sucede?

1. Ambas combinaciones Linux pasan a Windows.

   include no reemplaza todas las combinaciones base.

2. Se añade una combinación Windows/runtime-22. **[CORRECT]**

   Una entrada que no puede complementar originales crea otra combinación.

3. Se elimina runtime 20.

   No hay una exclusión de Linux/20.

4. Se ignora toda la matriz.

   Una entrada válida no desactiva la matriz.

**Concept:** Expansión mediante include

**Authored coaching hints:**

- ¿Puede añadirse el mapa sin reemplazar valores originales?
- ¿Qué diferencia hay entre complementar y añadir combinaciones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz base testa runtimes 20 e 22 no Linux. include adiciona \{os: windows-latest, runtime: 22\}, sem poder complementar originais sem sobrescrever valores. O que ocorre?

1. As duas combinações Linux viram Windows.

   include não substitui todas as combinações base.

2. Adiciona uma combinação Windows/runtime-22. **[CORRECT]**

   Uma entrada incompatível com os originais cria outra combinação.

3. Remove runtime 20.

   Não há exclusão de Linux/20.

4. Ignora toda a matriz.

   Uma entrada válida não desativa a matriz.

**Concept:** Expansão por include

**Authored coaching hints:**

- O mapa pode ser acrescentado sem sobrescrever valores originais?
- Qual a diferença entre complementar e adicionar combinações?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-051:c6da883081bd6ddab02aeb668343bb062e7598d42f7d516ba7768bdf59ca03d1 -->
## Question 51: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-051`

**Content revision:** `c6da883081bd6ddab02aeb668343bb062e7598d42f7d516ba7768bdf59ca03d1`

### English

A workflow needs a readable run title showing the selected deployment target and the initiating user. Which top-level key supports expressions for that per-run title?

1. description

   description is not the workflow run-title key.

2. jobs.defaults

   Job defaults configure execution settings, not the run list title.

3. run-name **[CORRECT]**

   run-name can reference github and inputs to label individual workflow runs.

4. runs.main

   runs.main is action metadata for an entrypoint, not workflow display text.

**Concept:** Dynamic workflow run names

**Authored coaching hints:**

- Does the title describe the workflow definition or an individual invocation?
- Which metadata can vary with manual inputs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El título de cada ejecución debe mostrar el destino seleccionado y el usuario iniciador. ¿Qué clave superior admite esas expresiones?

1. description

   description no define ese título.

2. jobs.defaults

   Los defaults no nombran ejecuciones.

3. run-name **[CORRECT]**

   run-name puede usar github e inputs.

4. runs.main

   runs.main define un punto de entrada de acción.

**Concept:** Nombres dinámicos de ejecuciones

**Authored coaching hints:**

- ¿Se describe la definición o una invocación concreta?
- ¿Qué metadatos cambian con entradas manuales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O título de cada execução deve mostrar o destino selecionado e o usuário iniciador. Qual chave superior aceita essas expressões?

1. description

   description não define esse título.

2. jobs.defaults

   Defaults não nomeiam execuções.

3. run-name **[CORRECT]**

   run-name pode usar github e inputs.

4. runs.main

   runs.main define um ponto de entrada de ação.

**Concept:** Nomes dinâmicos de execuções

**Authored coaching hints:**

- O título descreve a definição ou uma invocação específica?
- Quais metadados variam com entradas manuais?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-052:c8c819e368ec8dfc0750d9214faa6c71aeb0e1efbb8ea2dec1c05a4dacd77491 -->
## Question 52: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-052`

**Content revision:** `c8c819e368ec8dfc0750d9214faa6c71aeb0e1efbb8ea2dec1c05a4dacd77491`

### English

A release-only step should execute for tag refs but not branches in a workflow handling both. Which condition directly tests that distinction?

1. github.actor == github.repository\_owner

   Actor ownership does not determine whether the event ref is a tag.

2. runner.os == 'Linux'

   Operating system does not distinguish branches from tags.

3. github.event\_name == 'push' only

   Push events can affect either branches or tags.

4. startsWith(github.ref, 'refs/tags/') **[CORRECT]**

   The fully formed ref prefix distinguishes tags from branch refs.

**Concept:** Ref-aware conditional execution

**Authored coaching hints:**

- What structure distinguishes branch and tag full refs?
- Which event metadata remains useful when both ref types use the same event?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso de lanzamiento debe ejecutarse para etiquetas, no ramas, en un flujo que maneja ambos tipos. ¿Qué condición los distingue?

1. github.actor == github.repository\_owner

   El actor no determina el tipo de referencia.

2. runner.os == 'Linux'

   El sistema operativo no distingue etiquetas.

3. Solo github.event\_name == 'push'

   push puede afectar ramas o etiquetas.

4. startsWith(github.ref, 'refs/tags/') **[CORRECT]**

   El prefijo completo identifica referencias de etiquetas.

**Concept:** Condiciones según referencias

**Authored coaching hints:**

- ¿Qué estructura distingue las referencias completas?
- ¿Qué metadato sirve cuando ambos usan el mismo evento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa de release deve executar para tags, não branches, num workflow que trata ambas. Qual condição as distingue?

1. github.actor == github.repository\_owner

   O ator não determina o tipo de referência.

2. runner.os == 'Linux'

   O sistema operacional não distingue tags.

3. Somente github.event\_name == 'push'

   push pode afetar branches ou tags.

4. startsWith(github.ref, 'refs/tags/') **[CORRECT]**

   O prefixo completo identifica referências de tags.

**Concept:** Condições por referência

**Authored coaching hints:**

- Qual estrutura distingue referências completas?
- Qual metadado serve quando ambos usam o mesmo evento?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-053:a144e54bf3936f4b388444feb4af2c61466c57b439fe558d2591c6ff2c773320 -->
## Question 53: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-053`

**Content revision:** `a144e54bf3936f4b388444feb4af2c61466c57b439fe558d2591c6ff2c773320`

### English

An author wants schema completion, action-input assistance, and workflow validation while editing YAML rather than discovering every mistake after a push. Which tool is purpose-built for this?

1. The GitHub Actions extension for VS Code. **[CORRECT]**

   The extension provides Actions-aware editing and validation assistance.

2. An artifact retention policy.

   Retention policy controls stored data, not editor feedback.

3. A runner-group repository allowlist.

   Runner-group access controls do not validate YAML during authoring.

4. A deployment wait timer.

   Wait timers gate deployments rather than assist workflow editing.

**Concept:** Workflow authoring tooling

**Authored coaching hints:**

- At which stage should feedback arrive?
- Which option understands workflow structure inside an editor?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un autor quiere autocompletado de esquema, ayuda con entradas de acciones y validación YAML antes del push. ¿Qué herramienta está diseñada para ello?

1. La extensión GitHub Actions para VS Code. **[CORRECT]**

   La extensión ofrece edición y validación específicas.

2. Una política de retención.

   Retención no aporta ayuda de edición.

3. Una lista de repositorios de runners.

   El acceso a runners no valida YAML.

4. Un temporizador de despliegue.

   Los temporizadores no asisten al editor.

**Concept:** Herramientas de autoría

**Authored coaching hints:**

- ¿En qué etapa debe llegar la respuesta?
- ¿Qué opción entiende la estructura del flujo dentro del editor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um autor quer completar esquema, receber ajuda de entradas e validar YAML antes do push. Qual ferramenta foi criada para isso?

1. A extensão GitHub Actions para VS Code. **[CORRECT]**

   A extensão oferece edição e validação específicas.

2. Uma política de retenção.

   Retenção não oferece ajuda de edição.

3. Uma lista de repositórios de runners.

   Acesso a runners não valida YAML.

4. Um temporizador de implantação.

   Temporizadores não auxiliam o editor.

**Concept:** Ferramentas de autoria

**Authored coaching hints:**

- Em qual etapa o feedback deve chegar?
- Qual opção entende a estrutura dentro do editor?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/use-workflow-templates#using-the-github-actions-extension-for-visual-studio-code>

<!-- certification-coach-question:actions-054:fa2ea43a5581c846e68e2497fffebb1a58a6ac826a9e6f29a468c024a2cb714c -->
## Question 54: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-054`

**Content revision:** `fa2ea43a5581c846e68e2497fffebb1a58a6ac826a9e6f29a468c024a2cb714c`

### English

A reusable workflow requests contents: write, but its caller permits only contents: read. What change is needed if writing is genuinely required and policy allows it?

1. Add a secret named contents\_write without changing permissions.

   A secret name does not change GITHUB\_TOKEN permissions.

2. Grant the needed permission in the caller; the callee cannot elevate it. **[CORRECT]**

   Reusable workflow token permissions can be maintained or reduced, not elevated beyond the caller.

3. Rename the reusable workflow to admin.yml.

   File names do not confer privileges.

4. Set continue-on-error in the called job to grant access.

   Error handling does not grant additional token scopes.

**Concept:** Reusable workflow permission ceiling

**Authored coaching hints:**

- Which side of a call should define the maximum authority being delegated?
- Can a component enlarge the privilege granted by its caller?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable solicita contents: write, pero el llamador concede solo read. Si escribir es necesario y permitido, ¿qué cambiar?

1. Crear el secreto contents\_write.

   Un nombre de secreto no cambia permisos.

2. Conceder el permiso en el llamador: el llamado no puede elevarlo. **[CORRECT]**

   El llamado solo conserva o reduce permisos delegados.

3. Renombrar el flujo admin.yml.

   El nombre del archivo no concede privilegios.

4. Activar continue-on-error para otorgar acceso.

   Tolerar errores no amplía ámbitos.

**Concept:** Límite de permisos reutilizables

**Authored coaching hints:**

- ¿Qué lado define la autoridad máxima delegada?
- ¿Puede un componente ampliar lo concedido por su llamador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável solicita contents: write, mas o chamador permite apenas read. Se escrita for necessária e permitida, o que alterar?

1. Criar o segredo contents\_write.

   Um nome de segredo não altera permissões.

2. Conceder a permissão no chamador; o chamado não pode elevá-la. **[CORRECT]**

   O chamado somente mantém ou reduz permissões delegadas.

3. Renomear o workflow para admin.yml.

   O nome do arquivo não concede privilégios.

4. Ativar continue-on-error para conceder acesso.

   Tolerar erros não amplia escopos.

**Concept:** Limite de permissões reutilizáveis

**Authored coaching hints:**

- Qual lado define a autoridade máxima delegada?
- Um componente pode ampliar o que seu chamador concedeu?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-055:8f0d00f2aeed211e0a0a23e46d7681687cbb91b046a85dc700707aaa941ab9d5 -->
## Question 55: Author and manage workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-055`

**Content revision:** `8f0d00f2aeed211e0a0a23e46d7681687cbb91b046a85dc700707aaa941ab9d5`

### English

A workflow includes an experimental matrix variant. Its failure should not fail the run, but stable variants must remain required. Which job setting can be driven by a matrix.experimental flag?

1. name

   A job name changes display text, not failure consequences.

2. concurrency.group

   Concurrency groups control scheduling and cancellation, not accepted failures.

3. continue-on-error **[CORRECT]**

   Job-level continue-on-error can tolerate only the flagged matrix variant's failure.

4. defaults.run.working-directory

   Working-directory defaults do not modify how job failures affect the workflow.

**Concept:** Selective matrix failure tolerance

**Authored coaching hints:**

- Is this a scheduling requirement or a failure-policy requirement?
- How can one generated job behave differently without weakening every variant?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un fallo experimental de la matriz no debe hacer fallar el flujo, pero las variantes estables siguen siendo obligatorias. ¿Qué ajuste puede depender de matrix.experimental?

1. name

   name solo cambia presentación.

2. concurrency.group

   concurrency controla planificación y cancelación.

3. continue-on-error **[CORRECT]**

   continue-on-error del trabajo tolera solo la variante indicada.

4. defaults.run.working-directory

   El directorio no cambia consecuencias de fallos.

**Concept:** Tolerancia selectiva en matrices

**Authored coaching hints:**

- ¿Es un requisito de planificación o de política de fallos?
- ¿Cómo variar un trabajo sin debilitar todas las variantes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma falha experimental da matriz não deve falhar o workflow, mas variantes estáveis continuam obrigatórias. Qual ajuste pode depender de matrix.experimental?

1. name

   name altera somente a apresentação.

2. concurrency.group

   concurrency controla agendamento e cancelamento.

3. continue-on-error **[CORRECT]**

   continue-on-error do job tolera somente a variante indicada.

4. defaults.run.working-directory

   O diretório não altera consequências de falhas.

**Concept:** Tolerância seletiva em matrizes

**Authored coaching hints:**

- É um requisito de agendamento ou política de falhas?
- Como variar um job sem enfraquecer todas as variantes?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-056:a55ef343a821ed26a025ea210a6b0c662ac01087640ac202e91556166c17f63d -->
## Question 56: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-056`

**Content revision:** `a55ef343a821ed26a025ea210a6b0c662ac01087640ac202e91556166c17f63d`

### English

A workflow has failed, but its summary only says 'Process completed with exit code 1.' What is the most useful next diagnostic action?

1. Delete the workflow file immediately.

   Deleting the workflow removes automation without identifying the failing operation.

2. Increase all token permissions.

   Permissions should change only when evidence identifies an authorization problem.

3. Replace every runner without checking logs.

   Replacing runners ignores the available failure evidence.

4. Open the failed job and inspect the failed step's log before the final exit message. **[CORRECT]**

   The failed step's preceding output usually identifies the command and underlying error.

**Concept:** Failure-log investigation

**Authored coaching hints:**

- Does an exit code identify a root cause or only a result?
- At which execution level can you locate the first meaningful error?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El resumen dice únicamente 'Process completed with exit code 1'. ¿Cuál es el siguiente paso diagnóstico más útil?

1. Eliminar el flujo.

   Eliminar no identifica la causa.

2. Ampliar todos los permisos.

   Cambiar permisos requiere evidencia.

3. Reemplazar runners sin leer registros.

   Reemplazar ignora evidencia disponible.

4. Abrir el trabajo fallido y examinar el registro previo al mensaje final. **[CORRECT]**

   La salida previa suele identificar comando y error real.

**Concept:** Investigación de registros

**Authored coaching hints:**

- ¿El código indica causa o resultado?
- ¿Dónde localizar el primer error significativo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O resumo informa apenas 'Process completed with exit code 1'. Qual é o próximo diagnóstico mais útil?

1. Excluir o workflow.

   Excluir não identifica a causa.

2. Ampliar todas as permissões.

   Alterar permissões exige evidências.

3. Substituir runners sem ler logs.

   Substituir ignora evidências disponíveis.

4. Abrir o job com falha e examinar o log anterior à mensagem final. **[CORRECT]**

   A saída anterior geralmente identifica comando e erro real.

**Concept:** Investigação de logs

**Authored coaching hints:**

- O código indica causa ou resultado?
- Onde localizar o primeiro erro significativo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-057:bb982527d73770eef8ee2e1247237de345ca0950194ffcedae6511ecb40f1fc3 -->
## Question 57: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-057`

**Content revision:** `bb982527d73770eef8ee2e1247237de345ca0950194ffcedae6511ecb40f1fc3`

### English

A JavaScript action emits core.debug messages, but ordinary job logs do not show them. Which repository setting enables the additional step detail?

1. ACTIONS\_RUNNER\_DEBUG=false

   Disabling runner diagnostics does not enable step debug messages.

2. ACTIONS\_STEP\_DEBUG=true as a secret or variable. **[CORRECT]**

   ACTIONS\_STEP\_DEBUG enables verbose step events, including debug output.

3. GITHUB\_TOKEN=debug

   Replacing the authentication token with debug text breaks authentication.

4. A workflow name containing the word verbose.

   Display names do not control logging verbosity.

**Concept:** Step debug logging

**Authored coaching hints:**

- Are you missing application-step detail or runner-coordination detail?
- Which documented logging setting controls the relevant layer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript emite core.debug, pero sus mensajes no aparecen. ¿Qué ajuste habilita el detalle de pasos?

1. ACTIONS\_RUNNER\_DEBUG=false

   Desactivar diagnósticos no habilita mensajes.

2. ACTIONS\_STEP\_DEBUG=true como secreto o variable. **[CORRECT]**

   ACTIONS\_STEP\_DEBUG habilita esos eventos.

3. GITHUB\_TOKEN=debug

   Ese valor rompería autenticación.

4. Un nombre de flujo con verbose.

   Los nombres no controlan verbosidad.

**Concept:** Depuración de pasos

**Authored coaching hints:**

- ¿Falta detalle del paso o coordinación del runner?
- ¿Qué ajuste corresponde a esa capa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript emite core.debug, mas as mensagens não aparecem. Qual configuração habilita detalhes das etapas?

1. ACTIONS\_RUNNER\_DEBUG=false

   Desativar diagnósticos não habilita mensagens.

2. ACTIONS\_STEP\_DEBUG=true como segredo ou variável. **[CORRECT]**

   ACTIONS\_STEP\_DEBUG habilita esses eventos.

3. GITHUB\_TOKEN=debug

   Esse valor quebraria autenticação.

4. Um nome de workflow com verbose.

   Nomes não controlam verbosidade.

**Concept:** Depuração de etapas

**Authored coaching hints:**

- Faltam detalhes da etapa ou da coordenação do runner?
- Qual configuração corresponde a essa camada?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging>

<!-- certification-coach-question:actions-058:5ec7ff148b4d4730d1ff5d91f02f8f02292e88fa6316229fece115d7e6e649d6 -->
## Question 58: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-058`

**Content revision:** `5ec7ff148b4d4730d1ff5d91f02f8f02292e88fa6316229fece115d7e6e649d6`

### English

A support engineer needs runner process and worker process diagnostics, not just verbose application output. What should the maintainer enable?

1. ACTIONS\_RUNNER\_DEBUG=true and then download the run's log archive. **[CORRECT]**

   Runner debug logging adds process diagnostics to the downloadable log archive.

2. An artifact named debug with no upload step.

   Naming an artifact does not create runner diagnostic files.

3. Only set the job name to diagnostics.

   A job name does not enable diagnostic instrumentation.

4. Only increase retention-days for a build artifact.

   Artifact retention controls storage lifetime rather than runner logging detail.

**Concept:** Runner diagnostic logging

**Authored coaching hints:**

- Which process is responsible for coordinating and executing a job?
- Where are additional diagnostic files delivered rather than merely displayed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Soporte necesita diagnósticos de procesos runner y worker, no solo salida de aplicación. ¿Qué debe habilitarse?

1. ACTIONS\_RUNNER\_DEBUG=true y descargar el archivo de registros. **[CORRECT]**

   Añade diagnósticos de procesos al archivo descargable.

2. Un artefacto debug sin subir archivos.

   El nombre no crea archivos.

3. Solo nombrar diagnostics al trabajo.

   El nombre no instrumenta procesos.

4. Solo ampliar retention-days.

   Retención no aumenta detalle diagnóstico.

**Concept:** Diagnósticos del runner

**Authored coaching hints:**

- ¿Qué proceso coordina y ejecuta trabajos?
- ¿Dónde se entregan archivos diagnósticos adicionales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O suporte precisa de diagnósticos dos processos runner e worker, não apenas da aplicação. O que habilitar?

1. ACTIONS\_RUNNER\_DEBUG=true e baixar o arquivo de logs. **[CORRECT]**

   Adiciona diagnósticos dos processos ao arquivo baixável.

2. Um artefato debug sem enviar arquivos.

   O nome não cria arquivos.

3. Apenas nomear o job diagnostics.

   O nome não instrumenta processos.

4. Apenas ampliar retention-days.

   Retenção não aumenta detalhes diagnósticos.

**Concept:** Diagnósticos do runner

**Authored coaching hints:**

- Qual processo coordena e executa jobs?
- Onde são entregues arquivos diagnósticos adicionais?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging>

<!-- certification-coach-question:actions-059:733101c50cf8b0e39ce902597254579ab9ca36f7dbb0d8b57f2770ed143473d3 -->
## Question 59: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-059`

**Content revision:** `733101c50cf8b0e39ce902597254579ab9ca36f7dbb0d8b57f2770ed143473d3`

### English

Only the Windows/runtime-22 variant of a large matrix failed due to a transient download error. How can the maintainer retry that variant without rerunning successful sibling variants?

1. Push an empty commit to rerun the entire matrix.

   An empty commit triggers a new run rather than a targeted retry.

2. Delete all successful job logs first.

   Deleting logs does not select a job for re-execution.

3. Use the specific job's re-run control or gh run rerun --job JOB\_ID. **[CORRECT]**

   A matrix variant is a job and can be re-run individually.

4. Change the matrix to contain only Windows and commit it.

   Editing the test plan is unnecessary for a transient retry and reduces coverage.

**Concept:** Selective matrix reruns

**Authored coaching hints:**

- What execution unit does each matrix combination become?
- Which retry scope avoids repeating unrelated successful work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Solo Windows/runtime-22 falló por una descarga transitoria. ¿Cómo reintentar esa variante sin repetir las exitosas?

1. Subir un commit vacío.

   El commit inicia otra ejecución completa.

2. Eliminar primero los registros exitosos.

   Borrar registros no selecciona reintentos.

3. Reejecutar ese trabajo desde la interfaz o gh run rerun --job JOB\_ID. **[CORRECT]**

   Cada variante es un trabajo reejecutable.

4. Reducir la matriz a Windows y confirmar el cambio.

   Cambiar cobertura es innecesario.

**Concept:** Reintentos selectivos de matrices

**Authored coaching hints:**

- ¿Qué unidad representa cada combinación?
- ¿Qué alcance evita repetir trabajo no relacionado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Somente Windows/runtime-22 falhou por download transitório. Como tentar essa variante novamente sem repetir as bem-sucedidas?

1. Enviar um commit vazio.

   O commit inicia outra execução completa.

2. Excluir primeiro os logs bem-sucedidos.

   Excluir logs não seleciona tentativas.

3. Reexecutar o job pela interface ou gh run rerun --job JOB\_ID. **[CORRECT]**

   Cada variante é um job reexecutável.

4. Reduzir a matriz a Windows e confirmar a alteração.

   Alterar cobertura é desnecessário.

**Concept:** Reexecuções seletivas de matrizes

**Authored coaching hints:**

- Qual unidade representa cada combinação?
- Qual escopo evita repetir trabalho não relacionado?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-060:ebfb5a323c7d4095b98b4bb541fd55b4a93be56c6790568b1515030d4a83f15a -->
## Question 60: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-060`

**Content revision:** `ebfb5a323c7d4095b98b4bb541fd55b4a93be56c6790568b1515030d4a83f15a`

### English

A developer re-runs yesterday's failed workflow after main has advanced. Which source revision does the re-run use for the original event?

1. The newest commit on main automatically.

   A re-run preserves the original event revision rather than adopting the newest main commit.

2. The re-running developer's local working tree.

   Local working-tree files are not inputs to a GitHub re-run.

3. The newest release tag.

   Release recency does not alter the original event metadata.

4. The original run's GITHUB\_SHA and GITHUB\_REF. **[CORRECT]**

   Re-runs use the original event's SHA and ref.

**Concept:** Rerun source identity

**Authored coaching hints:**

- Is this a new event or another attempt at the existing event?
- What information must remain stable to reproduce a failure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

main avanzó desde el fallo de ayer. Al reejecutar ese flujo, ¿qué revisión del evento original se utiliza?

1. El último commit de main.

   Reejecutar no adopta el main actual.

2. El árbol local del desarrollador.

   Los archivos locales no son entrada.

3. La última etiqueta de lanzamiento.

   La etiqueta reciente no cambia el evento.

4. GITHUB\_SHA y GITHUB\_REF originales. **[CORRECT]**

   Se conservan SHA y referencia originales.

**Concept:** Identidad de revisión en reintentos

**Authored coaching hints:**

- ¿Es otro evento o un intento del mismo?
- ¿Qué debe permanecer estable para reproducir el fallo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

main avançou desde a falha de ontem. Ao reexecutar aquele workflow, qual revisão do evento original é usada?

1. O último commit de main.

   Reexecutar não adota o main atual.

2. A árvore local do desenvolvedor.

   Arquivos locais não são entrada.

3. A última tag de release.

   A tag recente não altera o evento.

4. GITHUB\_SHA e GITHUB\_REF originais. **[CORRECT]**

   SHA e referência originais são preservados.

**Concept:** Identidade de revisão nas tentativas

**Authored coaching hints:**

- É outro evento ou outra tentativa do mesmo?
- O que deve permanecer estável para reproduzir a falha?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-061:22f84726e0a8470426d0d807b2db3a9380f2a61eff638b6123785e24a1935f0b -->
## Question 61: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-061`

**Content revision:** `22f84726e0a8470426d0d807b2db3a9380f2a61eff638b6123785e24a1935f0b`

### English

An administrator re-runs a workflow originally triggered by a contributor. Which actor's privileges determine the re-run's authorization context?

1. The administrator's newly elevated privileges.

   Re-running does not substitute the re-run initiator's privileges.

2. The actor who originally triggered the workflow. **[CORRECT]**

   GitHub preserves the original triggering actor's privileges for the re-run.

3. The owner of the most recently used action.

   Action ownership does not define the workflow actor's privileges.

4. Whichever reviewer last approved an unrelated pull request.

   Unrelated review activity does not set the re-run's identity.

**Concept:** Rerun privilege identity

**Authored coaching hints:**

- Could pressing retry safely be allowed to elevate an old run?
- Which identity belongs to the original triggering event?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador reejecuta un flujo iniciado por un colaborador. ¿Qué privilegios determinan la autorización del reintento?

1. Los elevados del administrador.

   Reintentar no sustituye privilegios.

2. Los del actor que disparó originalmente el flujo. **[CORRECT]**

   Se conserva la autoridad del actor original.

3. Los del dueño de la última acción.

   La propiedad de acciones no define al actor.

4. Los del último revisor de una PR ajena.

   Las revisiones ajenas no determinan identidad.

**Concept:** Privilegios de reejecución

**Authored coaching hints:**

- ¿Debería retry elevar una ejecución antigua?
- ¿Qué identidad pertenece al evento original?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador reexecuta um workflow iniciado por um colaborador. Quais privilégios determinam a autorização?

1. Os elevados do administrador.

   Reexecutar não substitui privilégios.

2. Os do ator que disparou originalmente o workflow. **[CORRECT]**

   A autoridade do ator original é mantida.

3. Os do dono da última ação.

   Propriedade de ações não define o ator.

4. Os do último revisor de uma PR não relacionada.

   Revisões não relacionadas não determinam identidade.

**Concept:** Privilégios de reexecução

**Authored coaching hints:**

- Retry deveria elevar uma execução antiga?
- Qual identidade pertence ao evento original?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-062:1b6c5733a5b03a4c1210e28243e7bb7263935e08bc6181750555735ec133dab6 -->
## Question 62: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-062`

**Content revision:** `1b6c5733a5b03a4c1210e28243e7bb7263935e08bc6181750555735ec133dab6`

### English

A pull request cannot merge because a required workflow check remains pending. Its changed files are excluded by the workflow's paths filter. What best explains this?

1. A trigger-filtered workflow may leave its required checks pending. **[CORRECT]**

   When a required workflow is skipped by trigger filters, the associated checks can remain pending.

2. Every skipped workflow reports success automatically.

   Trigger-level skipping does not automatically satisfy required checks.

3. Path filters are evaluated only after jobs finish.

   Path filtering decides whether to run before job execution.

4. Pending always means a runner is out of disk space.

   Pending status alone is not evidence of a runner disk failure.

**Concept:** Required checks and skipped workflows

**Authored coaching hints:**

- Did a check execute and pass, or was the workflow never triggered?
- How might branch protection react when its expected result never arrives?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una verificación obligatoria queda pendiente: paths excluye todos los archivos de la PR. ¿Qué explica el bloqueo?

1. Un flujo omitido por filtros puede dejar verificaciones pendientes. **[CORRECT]**

   La omisión del disparador puede dejar pendiente el resultado exigido.

2. Todo flujo omitido informa éxito.

   Omitir no satisface automáticamente protecciones.

3. paths se evalúa después de terminar trabajos.

   Los filtros se evalúan antes.

4. Pending siempre indica disco lleno.

   Pending no demuestra falta de disco.

**Concept:** Verificaciones y filtros

**Authored coaching hints:**

- ¿La verificación pasó o nunca se disparó?
- ¿Qué ocurre si no llega el resultado obligatorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma verificação obrigatória fica pendente: paths exclui todos os arquivos da PR. O que explica o bloqueio?

1. Um workflow ignorado por filtros pode deixar verificações pendentes. **[CORRECT]**

   A ausência do disparo pode deixar pendente o resultado exigido.

2. Todo workflow ignorado informa sucesso.

   Ignorar não satisfaz proteções automaticamente.

3. paths é avaliado depois dos jobs.

   Filtros são avaliados antes.

4. Pending sempre indica disco cheio.

   Pending não prova falta de disco.

**Concept:** Verificações e filtros

**Authored coaching hints:**

- A verificação passou ou nunca disparou?
- O que ocorre quando não chega o resultado obrigatório?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-063:cf9fbf93f0556df1596bd6f3e73e79655af27a1c3c50faa78c5fe3ba17363c70 -->
## Question 63: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-063`

**Content revision:** `cf9fbf93f0556df1596bd6f3e73e79655af27a1c3c50faa78c5fe3ba17363c70`

### English

A newly created manual workflow is committed only to a feature branch, and its dispatch control is unavailable. What prerequisite should the maintainer check first?

1. Whether an artifact with the same name exists.

   Artifacts are unrelated to workflow\_dispatch availability.

2. Whether the feature branch has at least two commits.

   Commit count does not enable manual dispatch.

3. Whether the workflow file exists on the default branch. **[CORRECT]**

   workflow\_dispatch requires the workflow file to exist on the default branch.

4. Whether every matrix job uses macOS.

   Runner operating system does not expose the manual trigger control.

**Concept:** Manual workflow discoverability

**Authored coaching hints:**

- Where does GitHub discover this kind of trigger?
- Which repository branch anchors the availability of manual dispatch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo manual nuevo existe solo en una rama de funcionalidad y no aparece su control de disparo. ¿Qué revisar primero?

1. Que exista un artefacto homónimo.

   Los artefactos no habilitan dispatch.

2. Que la rama tenga dos commits.

   La cantidad de commits es irrelevante.

3. Que el flujo exista en la rama predeterminada. **[CORRECT]**

   workflow\_dispatch requiere el archivo en la rama predeterminada.

4. Que todas las variantes usen macOS.

   El sistema operativo no habilita controles.

**Concept:** Disponibilidad del disparo manual

**Authored coaching hints:**

- ¿Dónde descubre GitHub este disparador?
- ¿Qué rama determina su disponibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow manual novo existe só numa branch de funcionalidade e não aparece seu controle de disparo. O que verificar primeiro?

1. Se existe artefato com o mesmo nome.

   Artefatos não habilitam dispatch.

2. Se a branch tem dois commits.

   Quantidade de commits é irrelevante.

3. Se o workflow existe na branch padrão. **[CORRECT]**

   workflow\_dispatch exige o arquivo na branch padrão.

4. Se todas as variantes usam macOS.

   O sistema não habilita controles.

**Concept:** Disponibilidade de disparo manual

**Authored coaching hints:**

- Onde GitHub descobre esse gatilho?
- Qual branch determina sua disponibilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-064:4af5ba4d8c4e5156f3ea318cb4bd1dd5cbe27fc72ccf099007025dbb4ff0a33a -->
## Question 64: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-064`

**Content revision:** `4af5ba4d8c4e5156f3ea318cb4bd1dd5cbe27fc72ccf099007025dbb4ff0a33a`

### English

A cron workflow normally runs near the top of the hour but occasionally starts late during heavy load. Which interpretation is supported?

1. Cron workflows guarantee start time to the second.

   GitHub schedules are not exact-second execution guarantees.

2. The runner clock changes the repository's Git history.

   Runner clocks do not explain server-side scheduling delays or rewrite history.

3. All delayed runs prove the YAML is invalid.

   A previously functioning valid schedule can still experience delay.

4. Scheduled workflows can be delayed during high load; avoid treating them as precise timers. **[CORRECT]**

   GitHub documents schedule delays during heavy load, especially around the hour.

**Concept:** Schedule timing diagnostics

**Authored coaching hints:**

- Does defining a time guarantee immediate runner availability?
- How should a service handle timing-sensitive work if scheduling is best-effort?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo cron a veces empieza tarde bajo alta carga, cerca del inicio de la hora. ¿Qué interpretación es correcta?

1. Cron garantiza precisión al segundo.

   No hay garantía exacta al segundo.

2. El reloj del runner cambia Git.

   El reloj no reescribe historial.

3. Todo retraso demuestra YAML inválido.

   Una programación válida también puede retrasarse.

4. Los flujos programados pueden retrasarse y no son temporizadores precisos. **[CORRECT]**

   GitHub documenta retrasos durante alta carga.

**Concept:** Diagnóstico de horarios

**Authored coaching hints:**

- ¿Programar garantiza disponibilidad inmediata?
- ¿Cómo manejar necesidades temporales estrictas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow cron às vezes começa atrasado sob alta carga, perto da hora cheia. Qual interpretação é correta?

1. Cron garante precisão de segundos.

   Não há garantia exata de segundos.

2. O relógio do runner altera o Git.

   O relógio não reescreve o histórico.

3. Todo atraso prova YAML inválido.

   Um agendamento válido também pode atrasar.

4. Workflows agendados podem atrasar e não são temporizadores precisos. **[CORRECT]**

   GitHub documenta atrasos durante alta carga.

**Concept:** Diagnóstico de horários

**Authored coaching hints:**

- Agendar garante disponibilidade imediata?
- Como tratar requisitos temporais rigorosos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-065:9fbe143b0428a5a984136bb0e214c4e5c1c53b0b1d095bbcbdf31df85dc5297f -->
## Question 65: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-065`

**Content revision:** `9fbe143b0428a5a984136bb0e214c4e5c1c53b0b1d095bbcbdf31df85dc5297f`

### English

A public repository's scheduled workflow stopped after a long period without repository activity. Which documented behavior should the maintainer investigate?

1. Every public workflow expires after its first success.

   Public workflows do not have a one-success lifetime.

2. Scheduled workflows in public repositories can be disabled after 60 days of inactivity. **[CORRECT]**

   GitHub can automatically disable public-repository scheduled workflows after 60 inactive days.

3. Cron requires a Marketplace subscription for each execution.

   A Marketplace subscription is not a general cron prerequisite.

4. Schedules run only while a maintainer keeps the Actions page open.

   The browser page does not control server-side scheduling.

**Concept:** Inactive scheduled workflows

**Authored coaching hints:**

- Could this be an automatic workflow-state change rather than a code failure?
- What repository activity policy applies specifically to public schedules?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El flujo programado de un repositorio público se detuvo tras larga inactividad. ¿Qué comportamiento documentado investigar?

1. Cada flujo público expira tras un éxito.

   No existe ese límite de un éxito.

2. Puede deshabilitarse tras 60 días de inactividad. **[CORRECT]**

   GitHub puede deshabilitar programaciones públicas tras 60 días inactivos.

3. Cron exige suscripción Marketplace por ejecución.

   No hay ese requisito general.

4. Solo funciona con Actions abierto en el navegador.

   El navegador no controla la programación.

**Concept:** Programaciones inactivas

**Authored coaching hints:**

- ¿Cambió el estado del flujo automáticamente?
- ¿Qué política afecta las programaciones públicas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O workflow agendado de um repositório público parou após longa inatividade. Qual comportamento documentado investigar?

1. Cada workflow público expira após um sucesso.

   Não existe esse limite de um sucesso.

2. Pode ser desabilitado após 60 dias de inatividade. **[CORRECT]**

   GitHub pode desabilitar agendamentos públicos após 60 dias inativos.

3. Cron exige assinatura Marketplace por execução.

   Não há esse requisito geral.

4. Só funciona com Actions aberto no navegador.

   O navegador não controla o agendamento.

**Concept:** Agendamentos inativos

**Authored coaching hints:**

- O estado do workflow mudou automaticamente?
- Qual política afeta agendamentos públicos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-066:f30aada729f29c1d08d97e61d3efa2cb914f27a057f847d8e2bbaa8ba1914cc4 -->
## Question 66: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-066`

**Content revision:** `f30aada729f29c1d08d97e61d3efa2cb914f27a057f847d8e2bbaa8ba1914cc4`

### English

After a failed test, the artifact-upload step was skipped and no failure report is downloadable. What is the most targeted workflow correction?

1. Give the report upload an appropriate status condition such as if: always(). **[CORRECT]**

   A status condition allows report upload even after earlier test failure.

2. Remove all tests so no failure can occur.

   Removing tests conceals defects rather than preserving failure diagnostics.

3. Rename the artifact to success.

   Artifact names do not override the default success condition.

4. Grant packages: write to every job.

   Package write access does not cause skipped artifact steps to execute.

**Concept:** Failure artifact collection

**Authored coaching hints:**

- What default condition affects steps after a failure?
- Should diagnostic collection require the operation being diagnosed to succeed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras fallar las pruebas se omitió la subida del informe. ¿Cuál es la corrección más específica?

1. Dar a la subida una condición apropiada como if: always(). **[CORRECT]**

   La condición permite subir diagnósticos después del fallo.

2. Eliminar todas las pruebas.

   Eliminar pruebas oculta defectos.

3. Renombrar el artefacto success.

   El nombre no cambia condiciones.

4. Conceder packages: write a todo.

   Los permisos no ejecutan pasos omitidos.

**Concept:** Recopilación de artefactos fallidos

**Authored coaching hints:**

- ¿Qué condición predeterminada rige tras un fallo?
- ¿Recopilar diagnósticos debería exigir éxito?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após falha nos testes, o envio do relatório foi ignorado. Qual é a correção mais específica?

1. Dar ao envio uma condição adequada como if: always(). **[CORRECT]**

   A condição permite enviar diagnósticos após falha.

2. Remover todos os testes.

   Remover testes oculta defeitos.

3. Renomear o artefato success.

   O nome não muda condições.

4. Conceder packages: write a tudo.

   Permissões não executam etapas ignoradas.

**Concept:** Coleta de artefatos de falhas

**Authored coaching hints:**

- Qual condição padrão se aplica após falha?
- Coletar diagnósticos deveria exigir sucesso?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/expressions>

<!-- certification-coach-question:actions-067:7b2206c8ec35b176d5e2fde0b48eecc24d7256d6827221762f3b8bafc7f97d77 -->
## Question 67: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-067`

**Content revision:** `7b2206c8ec35b176d5e2fde0b48eecc24d7256d6827221762f3b8bafc7f97d77`

### English

A developer needs the test report stored by a completed run, not the text printed by the tests. Where should they look in the run UI?

1. Only the repository's Releases page.

   Workflow artifacts are not automatically published as release assets.

2. The runner group's membership list.

   Runner membership does not contain uploaded test reports.

3. The run summary's Artifacts section. **[CORRECT]**

   Uploaded run artifacts are listed on the workflow run summary.

4. The organization's secret-value editor.

   Secret settings do not store downloadable test artifacts.

**Concept:** Locating run artifacts

**Authored coaching hints:**

- Was the report uploaded as stored output or printed into a log?
- Which UI is scoped to the particular execution that produced it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador busca el informe de pruebas subido por una ejecución terminada, no su salida textual. ¿Dónde encontrarlo?

1. Solo en Releases.

   Los artefactos no son automáticamente assets de Releases.

2. En miembros del grupo de runners.

   La lista de runners no contiene informes.

3. En Artifacts del resumen de ejecución. **[CORRECT]**

   El resumen lista artefactos subidos.

4. En el editor de secretos.

   Los secretos no almacenan informes descargables.

**Concept:** Localización de artefactos

**Authored coaching hints:**

- ¿El informe se subió o se imprimió?
- ¿Qué interfaz pertenece a esa ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor procura o relatório enviado por uma execução concluída, não sua saída textual. Onde encontrá-lo?

1. Somente em Releases.

   Artefatos não viram assets de Releases automaticamente.

2. Nos membros do grupo de runners.

   A lista de runners não contém relatórios.

3. Em Artifacts no resumo da execução. **[CORRECT]**

   O resumo lista artefatos enviados.

4. No editor de segredos.

   Segredos não armazenam relatórios baixáveis.

**Concept:** Localização de artefatos

**Authored coaching hints:**

- O relatório foi enviado ou impresso?
- Qual interface pertence àquela execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-068:f9108f59a9eeafdb1646095a4e423dc46a9e01cf37b03c04c7de0e2855633d4c -->
## Question 68: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-068`

**Content revision:** `f9108f59a9eeafdb1646095a4e423dc46a9e01cf37b03c04c7de0e2855633d4c`

### English

A compliance script must enumerate uploaded artifacts for a known repository and run ID through the REST API. Which endpoint category fits?

1. Repository contents for .github/workflows.

   Workflow source files do not enumerate uploaded execution artifacts.

2. Pull-request reviewers.

   Reviewer APIs concern pull-request review state.

3. Runner registration tokens.

   Runner registration tokens authorize runner setup, not artifact listing.

4. List workflow run artifacts under actions/runs/\{run\_id\}/artifacts. **[CORRECT]**

   The run-artifacts endpoint enumerates stored artifacts belonging to that run.

**Concept:** Artifact discovery via REST

**Authored coaching hints:**

- Is the target configuration source or output associated with a run?
- Which identifier scopes the stored outputs to one execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script conoce repositorio y run ID y necesita enumerar artefactos por REST. ¿Qué recurso corresponde?

1. Contents de .github/workflows.

   Los archivos fuente no enumeran salidas.

2. Revisores de pull requests.

   Revisores representan colaboración.

3. Tokens de registro de runners.

   Los tokens registran runners.

4. actions/runs/\{run\_id\}/artifacts. **[CORRECT]**

   Ese endpoint enumera artefactos de la ejecución.

**Concept:** Descubrimiento REST de artefactos

**Authored coaching hints:**

- ¿Buscas configuración o resultados de ejecución?
- ¿Qué identificador delimita una ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script conhece repositório e run ID e precisa enumerar artefatos por REST. Qual recurso corresponde?

1. Contents de .github/workflows.

   Arquivos-fonte não enumeram saídas.

2. Revisores de pull requests.

   Revisores representam colaboração.

3. Tokens de registro de runners.

   Os tokens registram runners.

4. actions/runs/\{run\_id\}/artifacts. **[CORRECT]**

   Esse endpoint enumera artefatos da execução.

**Concept:** Descoberta REST de artefatos

**Authored coaching hints:**

- Você procura configuração ou resultados de execução?
- Qual identificador delimita uma execução?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/artifacts>

<!-- certification-coach-question:actions-069:c26966aeb763b92b98a7e196c21b1fe5afb1dcceaa10c95d02a22c8975a40da7 -->
## Question 69: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-069`

**Content revision:** `c26966aeb763b92b98a7e196c21b1fe5afb1dcceaa10c95d02a22c8975a40da7`

### English

A test artifact's retention period has elapsed. Its name still appears in an old team's notes, but downloading it fails. What is the most likely explanation?

1. Changing the artifact's name will restore its files.

   Renaming cannot recover data deleted by retention.

2. The artifact expired and is no longer available for download. **[CORRECT]**

   Artifact availability is bounded by its retention lifetime.

3. The current branch must be renamed to the artifact name.

   Branch names do not control recovery of expired artifact data.

4. Expired artifacts become repository secrets.

   Artifacts are never automatically converted into secrets.

**Concept:** Artifact expiration

**Authored coaching hints:**

- Does an identifier in historical notes prove the underlying bytes still exist?
- What lifecycle does retention apply to?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un artefacto ya superó su retención. Las notas antiguas conservan su nombre, pero la descarga falla. ¿Cuál es la causa probable?

1. Renombrarlo recuperará archivos.

   Renombrar no recupera datos eliminados.

2. Expiró y ya no está disponible. **[CORRECT]**

   La retención limita la disponibilidad.

3. La rama debe llamarse como el artefacto.

   Las ramas no recuperan artefactos.

4. Los artefactos expirados se convierten en secretos.

   No hay conversión a secretos.

**Concept:** Expiración de artefactos

**Authored coaching hints:**

- ¿Un identificador histórico prueba que existen los bytes?
- ¿A qué ciclo de vida se aplica retención?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um artefato ultrapassou sua retenção. Notas antigas guardam o nome, mas o download falha. Qual a causa provável?

1. Renomear recuperará os arquivos.

   Renomear não recupera dados excluídos.

2. Expirou e não está mais disponível. **[CORRECT]**

   A retenção limita disponibilidade.

3. A branch deve ter o nome do artefato.

   Branches não recuperam artefatos.

4. Artefatos expirados viram segredos.

   Não há conversão em segredos.

**Concept:** Expiração de artefatos

**Authored coaching hints:**

- Um identificador histórico prova que os bytes existem?
- A qual ciclo de vida a retenção se aplica?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-070:703016713566b5b50ec9d70c47b2ab2473de45470bdd529e6466c126a37ca0a1 -->
## Question 70: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-070`

**Content revision:** `703016713566b5b50ec9d70c47b2ab2473de45470bdd529e6466c126a37ca0a1`

### English

A run's log archive was downloaded after only one failed job was re-run. The archive lacks logs for jobs that succeeded on the original attempt. How can the investigator obtain them?

1. Download the log archives from the earlier attempts that executed those jobs. **[CORRECT]**

   Partially re-run attempt archives include the re-run jobs; earlier attempt archives contain the others.

2. Assume those successful jobs never ran.

   Missing logs in the latest attempt do not erase earlier job execution.

3. Increase the current job's timeout.

   Timeouts do not merge logs across attempts.

4. Recreate the repository with the same name.

   Repository recreation is unrelated and risks losing evidence.

**Concept:** Attempt-specific log archives

**Authored coaching hints:**

- Did every job execute on the latest attempt?
- Which attempt actually produced the missing log files?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se descargaron registros después de reejecutar solo un trabajo. Faltan los trabajos exitosos originales. ¿Cómo obtenerlos?

1. Descargar registros de los intentos anteriores que los ejecutaron. **[CORRECT]**

   Los archivos de intentos parciales solo incluyen trabajos reejecutados.

2. Suponer que nunca se ejecutaron.

   Ausencia actual no niega ejecución anterior.

3. Aumentar el timeout actual.

   El timeout no combina intentos.

4. Recrear el repositorio.

   Recrear arriesga evidencia y no ayuda.

**Concept:** Registros por intento

**Authored coaching hints:**

- ¿Todos los trabajos corrieron en el último intento?
- ¿Qué intento produjo el registro faltante?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Logs foram baixados depois de reexecutar somente um job. Faltam os jobs originalmente bem-sucedidos. Como obtê-los?

1. Baixar logs das tentativas anteriores que executaram esses jobs. **[CORRECT]**

   Arquivos de tentativas parciais incluem somente jobs reexecutados.

2. Presumir que nunca executaram.

   Ausência atual não nega execução anterior.

3. Aumentar o timeout atual.

   Timeout não combina tentativas.

4. Recriar o repositório.

   Recriar arrisca evidências e não ajuda.

**Concept:** Logs por tentativa

**Authored coaching hints:**

- Todos os jobs rodaram na última tentativa?
- Qual tentativa produziu o log ausente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-071:809d94a3f2c26c6f85471b3578cc961b7fb568f0040c6f1b1324c73ee2dbd118 -->
## Question 71: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-071`

**Content revision:** `809d94a3f2c26c6f85471b3578cc961b7fb568f0040c6f1b1324c73ee2dbd118`

### English

A log search returns no matches even though a message is believed to be in a collapsed step. What UI behavior should the investigator account for?

1. Log search searches every repository automatically.

   Workflow log search is not a cross-repository content search.

2. Search terms must always be commit SHAs.

   Ordinary error text can be searched; a commit SHA is not required.

3. Only expanded steps are included in the log search results. **[CORRECT]**

   Expanding the relevant step makes its content available to the log search.

4. A collapsed step's logs are permanently deleted.

   Collapsing is a display state and does not delete the log.

**Concept:** Workflow log search scope

**Authored coaching hints:**

- Could the UI's current expansion state affect the search scope?
- What simple display change would test that hypothesis?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La búsqueda no encuentra un mensaje esperado dentro de un paso contraído. ¿Qué comportamiento de la interfaz considerar?

1. Busca todos los repositorios.

   La búsqueda no abarca todos los repositorios.

2. Solo acepta SHAs.

   Se puede buscar texto normal.

3. Solo incluye pasos expandidos. **[CORRECT]**

   Expandir el paso incluye su contenido.

4. Contraer elimina registros definitivamente.

   Contraer es una acción visual.

**Concept:** Alcance de búsqueda de registros

**Authored coaching hints:**

- ¿La expansión modifica el alcance?
- ¿Qué cambio visual comprobaría esa hipótesis?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A busca não encontra uma mensagem esperada em uma etapa recolhida. Qual comportamento da interface considerar?

1. Busca todos os repositórios.

   A busca não abrange todos os repositórios.

2. Aceita somente SHAs.

   Texto normal também pode ser buscado.

3. Inclui somente etapas expandidas. **[CORRECT]**

   Expandir inclui o conteúdo na busca.

4. Recolher exclui logs definitivamente.

   Recolher é uma operação visual.

**Concept:** Escopo da busca de logs

**Authored coaching hints:**

- A expansão altera o escopo?
- Qual mudança visual testaria essa hipótese?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-072:be69724da9afc70089f759b1c3f36337be11416d735aafda995271be1e5ceac2 -->
## Question 72: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-072`

**Content revision:** `be69724da9afc70089f759b1c3f36337be11416d735aafda995271be1e5ceac2`

### English

Linux jobs pass while Windows jobs fail because a shell command is unavailable. Which evidence best establishes the software actually present on the failed hosted runner?

1. The newest README from any unrelated image project.

   Unrelated or newer image documentation may not describe the runner used.

2. The workflow author's laptop tool list.

   A local laptop environment is not the hosted runner environment.

3. The repository's issue labels.

   Issue labels do not inventory runner software.

4. The failed job's Set up job &gt; Runner Image &gt; Included Software link. **[CORRECT]**

   The setup log links to the tool list for that run's actual image.

**Concept:** Exact runner image diagnostics

**Authored coaching hints:**

- Can a floating runner label change over time?
- Which log entry records the environment actually assigned to this execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Linux pasa pero Windows falla por un comando ausente. ¿Qué evidencia identifica el software real del runner fallido?

1. El README más nuevo de otro proyecto.

   Otra imagen puede no corresponder.

2. Las herramientas de la laptop del autor.

   La laptop no es el runner.

3. Las etiquetas de issues.

   Las issues no son un inventario de herramientas instaladas.

4. Set up job &gt; Runner Image &gt; Included Software de ese trabajo. **[CORRECT]**

   Ese enlace describe la imagen realmente usada.

**Concept:** Diagnóstico de imagen exacta

**Authored coaching hints:**

- ¿Una etiqueta flotante puede cambiar?
- ¿Qué registro identifica el entorno asignado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Linux passa, mas Windows falha por comando ausente. Qual evidência identifica o software real do runner com falha?

1. O README mais novo de outro projeto.

   Outra imagem pode não corresponder.

2. As ferramentas do laptop do autor.

   O laptop não é o runner.

3. Os rótulos das issues.

   Issues não são um inventário das ferramentas instaladas.

4. Set up job &gt; Runner Image &gt; Included Software daquele job. **[CORRECT]**

   O link descreve a imagem realmente usada.

**Concept:** Diagnóstico da imagem exata

**Authored coaching hints:**

- Um rótulo flutuante pode mudar?
- Qual log identifica o ambiente atribuído?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/github-hosted-runners>

<!-- certification-coach-question:actions-073:6bcb7ab112aea779c7e4c2c61070500e2c703e729780110c8aada2fc47b2968b -->
## Question 73: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-073`

**Content revision:** `6bcb7ab112aea779c7e4c2c61070500e2c703e729780110c8aada2fc47b2968b`

### English

A workflow copied from an organization's starter template is now months old. The central template received a security fix, but the repository's copied file is unchanged. Why?

1. Every starter workflow is always centrally executed.

   Starter workflows create local workflow files rather than central execution links.

2. A starter workflow is copied scaffolding, not a live reusable-workflow reference. **[CORRECT]**

   After creation the local copy evolves independently unless separately updated.

3. Templates update only when artifact retention expires.

   Artifact expiration does not synchronize source files.

4. The runner must be restarted to synchronize YAML.

   Runner restarts do not copy template changes into repositories.

**Concept:** Starter workflow independence

**Authored coaching hints:**

- Was a source file copied or was a versioned component invoked?
- Which model makes future central edits automatically relevant to callers?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una plantilla inicial recibió una corrección central, pero el flujo copiado hace meses no cambió. ¿Por qué?

1. Todo flujo inicial se ejecuta centralmente.

   Las plantillas crean archivos locales.

2. La plantilla se copia y no es una referencia reutilizable activa. **[CORRECT]**

   La copia evoluciona independientemente.

3. Solo se actualiza al expirar artefactos.

   Retención no sincroniza código.

4. Reiniciar el runner sincroniza YAML.

   Reiniciar no copia cambios de plantillas.

**Concept:** Independencia de plantillas iniciales

**Authored coaching hints:**

- ¿Se copió código o se invocó un componente?
- ¿Qué modelo conecta futuras modificaciones centrales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um template inicial recebeu correção central, mas o workflow copiado meses atrás não mudou. Por quê?

1. Todo workflow inicial executa centralmente.

   Templates criam arquivos locais.

2. O template é cópia, não referência reutilizável ativa. **[CORRECT]**

   A cópia evolui independentemente.

3. Só atualiza quando artefatos expiram.

   Retenção não sincroniza código.

4. Reiniciar o runner sincroniza YAML.

   Reiniciar não copia alterações de templates.

**Concept:** Independência de templates iniciais

**Authored coaching hints:**

- Código foi copiado ou um componente foi invocado?
- Qual modelo conecta futuras alterações centrais?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/use-workflow-templates>

<!-- certification-coach-question:actions-074:2030c0faea3615733adc1864fc1d448c4c67776a703d99421a967137f07621be -->
## Question 74: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-074`

**Content revision:** `2030c0faea3615733adc1864fc1d448c4c67776a703d99421a967137f07621be`

### English

A team needs centrally maintained multiple jobs, including separate build and deploy runners, rather than an independently copied scaffold. Which reusable component should it consume?

1. A reusable workflow called at job level. **[CORRECT]**

   Reusable workflows encapsulate job graphs and can define distinct runner assignments.

2. A README code block copied manually.

   Copied examples do not remain connected to central maintenance.

3. A composite action expected to define jobs.

   Composite actions encapsulate steps within a job, not multiple jobs.

4. A workflow status badge.

   A badge displays status and does not execute shared automation.

**Concept:** Choosing a reuse abstraction

**Authored coaching hints:**

- Does the unit of reuse need its own job graph?
- How does step reuse differ from workflow reuse?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se necesitan varios trabajos mantenidos centralmente, con runners distintos para build y deploy, no una copia independiente. ¿Qué componente usar?

1. Un flujo reutilizable invocado a nivel de trabajo. **[CORRECT]**

   El flujo reutilizable encapsula trabajos y runners.

2. Un bloque README copiado.

   La copia pierde el vínculo central.

3. Una acción compuesta que defina trabajos.

   Los compuestos encapsulan pasos, no trabajos.

4. Una insignia.

   Una insignia no ejecuta automatización.

**Concept:** Elección de abstracción reutilizable

**Authored coaching hints:**

- ¿La unidad necesita su propio grafo?
- ¿Cómo difiere reutilizar pasos de reutilizar flujos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

São necessários vários jobs mantidos centralmente, com runners distintos para build e deploy, não uma cópia independente. Qual componente consumir?

1. Um workflow reutilizável chamado no nível do job. **[CORRECT]**

   O workflow reutilizável encapsula jobs e runners.

2. Um bloco README copiado.

   A cópia perde a conexão central.

3. Uma ação composta que defina jobs.

   Ações compostas encapsulam etapas, não jobs.

4. Um selo de status.

   Um selo não executa automação.

**Concept:** Escolha da abstração reutilizável

**Authored coaching hints:**

- A unidade precisa do próprio grafo?
- Como reutilizar etapas difere de reutilizar workflows?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-075:d5100d83187713df16371aac2a4867235dd509f66e3210a120502dbb9d80f4d7 -->
## Question 75: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-075`

**Content revision:** `d5100d83187713df16371aac2a4867235dd509f66e3210a120502dbb9d80f4d7`

### English

A private organization's .github repository contains starter templates, but a developer cannot see them. The target repository is private. Which access prerequisite should be checked?

1. Whether the template has a deployment artifact.

   Deployment artifacts do not govern template discovery.

2. Whether the developer has an OIDC cloud role.

   A cloud role does not grant GitHub repository read access.

3. Whether the developer has Read access to the private .github repository. **[CORRECT]**

   Users or teams need Read access to private or internal template repositories.

4. Whether the target uses a Windows runner.

   Runner choice does not make private template source visible.

**Concept:** Non-public template consumption

**Authored coaching hints:**

- Which repository holds the content the developer is trying to discover?
- Does access to the destination imply access to the source?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador no ve plantillas de .github privado para un repositorio privado. ¿Qué requisito de acceso revisar?

1. Que exista un artefacto de despliegue.

   Los artefactos no permiten descubrir plantillas.

2. Que tenga un rol cloud OIDC.

   Un rol cloud no concede acceso GitHub.

3. Que tenga Read sobre el repositorio .github privado. **[CORRECT]**

   Las plantillas no públicas requieren Read sobre su fuente.

4. Que use Windows.

   El runner no modifica visibilidad.

**Concept:** Consumo de plantillas no públicas

**Authored coaching hints:**

- ¿Qué repositorio guarda la plantilla?
- ¿Acceso al destino implica acceso a la fuente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor não vê templates de .github privado para um repositório privado. Qual requisito de acesso verificar?

1. Se existe artefato de implantação.

   Artefatos não permitem descobrir templates.

2. Se tem uma função cloud OIDC.

   Uma função cloud não concede acesso GitHub.

3. Se tem Read no repositório .github privado. **[CORRECT]**

   Templates não públicos exigem Read na fonte.

4. Se usa Windows.

   O runner não altera visibilidade.

**Concept:** Consumo de templates não públicos

**Authored coaching hints:**

- Qual repositório guarda o template?
- Acesso ao destino implica acesso à fonte?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-076:4919697278da14259ac48a59d7b0d1798ef76c5b6c3af47b37cdd3dc6e466693 -->
## Question 76: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-076`

**Content revision:** `4919697278da14259ac48a59d7b0d1798ef76c5b6c3af47b37cdd3dc6e466693`

### English

A maintainer wants to stop new automatic runs temporarily while preserving the workflow file for later use. Which operation best matches that intent?

1. Delete the repository.

   Repository deletion is far broader than pausing automation.

2. Delete all historical run logs.

   Deleting logs does not disable future triggers.

3. Remove every job permanently.

   Removing jobs changes source rather than simply pausing the workflow.

4. Disable the workflow and re-enable it when ready. **[CORRECT]**

   Disabling suspends triggering while retaining the workflow definition.

**Concept:** Disabling versus deleting

**Authored coaching hints:**

- Is the goal to preserve configuration or remove it?
- Which workflow state is reversible without reconstructing its YAML?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se deben detener ejecuciones automáticas temporalmente conservando el archivo para usarlo después. ¿Qué operación corresponde?

1. Eliminar el repositorio.

   Eliminar el repositorio es excesivo.

2. Eliminar registros históricos.

   Borrar registros no detiene disparadores.

3. Quitar permanentemente todos los trabajos.

   Quitar trabajos modifica el código.

4. Deshabilitar el flujo y habilitarlo cuando corresponda. **[CORRECT]**

   Deshabilitar pausa sin eliminar la definición.

**Concept:** Deshabilitar frente a eliminar

**Authored coaching hints:**

- ¿Se quiere conservar o quitar configuración?
- ¿Qué estado es reversible sin reconstruir YAML?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

É preciso parar execuções automáticas temporariamente preservando o arquivo para depois. Qual operação corresponde?

1. Excluir o repositório.

   Excluir o repositório é excessivo.

2. Excluir logs históricos.

   Excluir logs não para gatilhos.

3. Remover permanentemente todos os jobs.

   Remover jobs altera o código.

4. Desabilitar o workflow e habilitá-lo quando necessário. **[CORRECT]**

   Desabilitar pausa sem excluir a definição.

**Concept:** Desabilitar versus excluir

**Authored coaching hints:**

- O objetivo é preservar ou remover configuração?
- Qual estado é reversível sem reconstruir YAML?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows>

<!-- certification-coach-question:actions-077:df05c79449673d5e0e496cdb96fb792a2de3d5a54374ddbe5f45654e1e1a028e -->
## Question 77: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-077`

**Content revision:** `df05c79449673d5e0e496cdb96fb792a2de3d5a54374ddbe5f45654e1e1a028e`

### English

A maintainer deleted an old workflow run but its YAML remains active. What should they expect after the next matching push?

1. The workflow is automatically disabled forever.

   Deleting a run does not set the workflow's disabled state.

2. A new run can be triggered because deleting history does not disable the workflow. **[CORRECT]**

   Run deletion removes execution history, not the active trigger configuration.

3. All actions in the organization become blocked.

   An individual run deletion does not change organization policy.

4. The deleted run becomes the default workflow template.

   Deleted runs do not become template definitions.

**Concept:** Run deletion versus workflow state

**Authored coaching hints:**

- Which object was deleted: an execution or its definition?
- Where are future trigger rules stored?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se eliminó una ejecución antigua, pero el YAML permanece activo. ¿Qué ocurre tras otro push coincidente?

1. El flujo queda deshabilitado para siempre.

   Eliminar una ejecución no cambia el estado.

2. Puede iniciarse otra ejecución: eliminar historial no deshabilita. **[CORRECT]**

   Se elimina historial, no disparadores.

3. Se bloquean todas las acciones de la organización.

   No modifica políticas organizacionales.

4. La ejecución eliminada se vuelve plantilla.

   El historial no se convierte en plantillas.

**Concept:** Historial frente a estado del flujo

**Authored coaching hints:**

- ¿Se eliminó una ejecución o su definición?
- ¿Dónde siguen almacenadas las reglas futuras?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma execução antiga foi excluída, mas o YAML continua ativo. O que ocorre após outro push correspondente?

1. O workflow fica desabilitado para sempre.

   Excluir execução não muda o estado.

2. Outra execução pode iniciar: excluir histórico não desabilita. **[CORRECT]**

   O histórico é removido, não os gatilhos.

3. Todas as ações da organização são bloqueadas.

   Não altera políticas organizacionais.

4. A execução excluída vira template.

   Histórico não vira template.

**Concept:** Histórico versus estado do workflow

**Authored coaching hints:**

- Foi excluída uma execução ou sua definição?
- Onde continuam as regras futuras?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/workflow-runs>

<!-- certification-coach-question:actions-078:8b6b72347484b6fc13b3134cd3192812429655161589a2f05aafa5c606ae0e40 -->
## Question 78: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-078`

**Content revision:** `8b6b72347484b6fc13b3134cd3192812429655161589a2f05aafa5c606ae0e40`

### English

A reusable-workflow call fails before any runner starts because the caller supplies input attempts as text while the callee declares a number. What should be fixed first?

1. Make the calling value match the workflow\_call input type. **[CORRECT]**

   Reusable workflow calls validate input values against the declared interface types.

2. Add a longer runner timeout.

   Runner timeouts cannot repair a pre-execution type mismatch.

3. Increase the artifact retention period.

   Artifact lifetime does not affect input validation.

4. Install a database service.

   Service installation is unrelated to call-contract validation.

**Concept:** Reusable input validation diagnostics

**Authored coaching hints:**

- Did execution fail inside a command or before a job was dispatched?
- What contract must caller-supplied values satisfy?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una llamada falla antes del runner porque attempts es texto y workflow\_call declara number. ¿Qué corregir primero?

1. Hacer que el valor coincida con el tipo declarado. **[CORRECT]**

   Las llamadas validan tipos del contrato.

2. Aumentar timeout.

   El timeout no arregla validación previa.

3. Ampliar retención.

   Retención no afecta tipos.

4. Instalar un servicio de base de datos.

   Un servicio no corrige la interfaz.

**Concept:** Diagnóstico de entradas reutilizables

**Authored coaching hints:**

- ¿Falló un comando o la validación previa?
- ¿Qué contrato deben satisfacer los valores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma chamada falha antes do runner porque attempts é texto e workflow\_call declara number. O que corrigir primeiro?

1. Fazer o valor corresponder ao tipo declarado. **[CORRECT]**

   Chamadas validam tipos do contrato.

2. Aumentar timeout.

   Timeout não corrige validação anterior.

3. Ampliar retenção.

   Retenção não afeta tipos.

4. Instalar um serviço de banco.

   Serviço não corrige a interface.

**Concept:** Diagnóstico de entradas reutilizáveis

**Authored coaching hints:**

- Falhou um comando ou a validação anterior?
- Qual contrato os valores devem cumprir?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-079:42bc29b794207610ede1226f77ccb37448a109119ce4b9a2617d871610764ba5 -->
## Question 79: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-079`

**Content revision:** `42bc29b794207610ede1226f77ccb37448a109119ce4b9a2617d871610764ba5`

### English

A workflow uses needs: build on deploy. Build fails, and deploy shows skipped with no deployment log. What is the best interpretation?

1. The deployment command certainly ran successfully.

   A skipped job did not execute its deployment steps.

2. The artifact API deleted deploy's output.

   Artifact deletion does not explain dependency-driven skipping.

3. Dependency gating prevented deploy from executing under the default success condition. **[CORRECT]**

   A failed required predecessor normally skips dependent jobs unless an appropriate condition overrides it.

4. The runner forgot to save every deployment step.

   No deployment log is expected when its job never executes.

**Concept:** Reading skipped dependencies

**Authored coaching hints:**

- What does the visualization graph say about prerequisites?
- How is skipped different from a command failing after it starts?

<details>
<summary>Español — same answer key and option order</summary>

### Español

deploy declara needs: build. build falla y deploy aparece omitido sin registros. ¿Qué significa?

1. El despliegue se ejecutó correctamente.

   Un trabajo omitido no ejecuta pasos.

2. La API eliminó su salida.

   Borrar artefactos no explica dependencias.

3. La dependencia bloqueó deploy bajo la condición predeterminada de éxito. **[CORRECT]**

   Los predecesores fallidos normalmente omiten dependientes.

4. El runner olvidó guardar registros.

   No hay registros de comandos no ejecutados.

**Concept:** Lectura de dependencias omitidas

**Authored coaching hints:**

- ¿Qué muestra el grafo sobre prerrequisitos?
- ¿Cómo difiere omitted de un comando que falla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

deploy declara needs: build. build falha e deploy aparece ignorado, sem logs. O que significa?

1. A implantação executou com sucesso.

   Um job ignorado não executa etapas.

2. A API excluiu sua saída.

   Excluir artefatos não explica dependências.

3. A dependência bloqueou deploy sob a condição padrão de sucesso. **[CORRECT]**

   Predecessores com falha normalmente ignoram dependentes.

4. O runner esqueceu de guardar logs.

   Não há logs de comandos não executados.

**Concept:** Leitura de dependências ignoradas

**Authored coaching hints:**

- O que o grafo mostra sobre pré-requisitos?
- Como ignorado difere de um comando que falha?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-080:1cbb79f45ef3173ee075f6e4dadbdd318f17e85cc86c283e7c10c85956b2ac0b -->
## Question 80: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-080`

**Content revision:** `1cbb79f45ef3173ee075f6e4dadbdd318f17e85cc86c283e7c10c85956b2ac0b`

### English

Several matrix jobs are marked canceled immediately after one required variant fails. No user canceled the run. Which setting most directly explains this pattern?

1. An artifact's retention-days setting.

   Artifact retention does not cancel sibling jobs.

2. The workflow's README badge.

   Status badges do not control execution.

3. An input's description field.

   Descriptions document inputs without affecting scheduling.

4. The matrix's default fail-fast behavior. **[CORRECT]**

   With fail-fast enabled, a required matrix failure can cancel queued and in-progress siblings.

**Concept:** Recognizing fail-fast cancellation

**Authored coaching hints:**

- Did the cancellations follow a failure in a sibling variant?
- Which matrix policy intentionally trades complete results for faster feedback?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Variantes de matriz se cancelan tras fallar una variante obligatoria, sin intervención humana. ¿Qué ajuste lo explica?

1. retention-days.

   Retención no cancela trabajos.

2. La insignia README.

   Las insignias no controlan ejecución.

3. La descripción de una entrada.

   Las descripciones no planifican.

4. fail-fast predeterminado de la matriz. **[CORRECT]**

   fail-fast cancela variantes hermanas pendientes o activas.

**Concept:** Reconocer cancelación fail-fast

**Authored coaching hints:**

- ¿Las cancelaciones siguieron a un fallo hermano?
- ¿Qué política intercambia resultados completos por rapidez?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Variantes da matriz são canceladas após falhar uma variante obrigatória, sem intervenção humana. Qual ajuste explica isso?

1. retention-days.

   Retenção não cancela jobs.

2. O selo README.

   Selos não controlam execução.

3. A descrição de uma entrada.

   Descrições não agendam.

4. O fail-fast padrão da matriz. **[CORRECT]**

   fail-fast cancela variantes irmãs pendentes ou ativas.

**Concept:** Reconhecer cancelamento fail-fast

**Authored coaching hints:**

- Os cancelamentos seguiram uma falha irmã?
- Qual política troca resultados completos por rapidez?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-081:32673ea227e35da41083d4fa7faf167b6c428bbe255166ae5b3f0e01a1109eed -->
## Question 81: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-081`

**Content revision:** `32673ea227e35da41083d4fa7faf167b6c428bbe255166ae5b3f0e01a1109eed`

### English

A job has if: github.ref == 'refs/heads/main', and a pull\_request run reports a merge ref instead. Why is the job skipped?

1. Pull-request refs always equal the contributor's username.

   A username is not a fully formed Git ref.

2. For an open pull\_request event, github.ref normally identifies the pull-request merge ref, not main. **[CORRECT]**

   An open pull-request run generally uses refs/pull/&lt;number&gt;/merge, so that equality is false.

3. main cannot be used in a condition.

   Branch comparisons are supported when the chosen context property matches the intent.

4. All pull-request jobs are disabled by default.

   Pull-request events can run jobs normally; the condition is the issue.

**Concept:** Pull-request ref interpretation

**Authored coaching hints:**

- Which revision is usually tested for an open pull request?
- If the destination branch matters, is the full event ref the same as the base branch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

if compara github.ref con refs/heads/main, pero pull\_request informa una referencia merge y omite el trabajo. ¿Por qué?

1. La referencia siempre es el usuario.

   Un usuario no es una referencia Git.

2. En PR abiertas, github.ref normalmente es refs/pull/&lt;número&gt;/merge, no main. **[CORRECT]**

   La igualdad resulta falsa para esa referencia merge.

3. No se permite main en condiciones.

   Sí se admiten comparaciones de ramas.

4. Las PR están deshabilitadas por defecto.

   La condición, no una prohibición general, causa la omisión.

**Concept:** Referencias de pull requests

**Authored coaching hints:**

- ¿Qué revisión se prueba normalmente en una PR abierta?
- ¿La referencia completa equivale a su rama destino?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

if compara github.ref com refs/heads/main, mas pull\_request informa referência merge e ignora o job. Por quê?

1. A referência sempre é o usuário.

   Usuário não é referência Git.

2. Em PR aberta, github.ref normalmente é refs/pull/&lt;número&gt;/merge, não main. **[CORRECT]**

   A igualdade é falsa para essa referência merge.

3. main não é permitido em condições.

   Comparações de branches são permitidas.

4. PRs são desabilitadas por padrão.

   A condição, não uma proibição geral, causa a omissão.

**Concept:** Referências de pull requests

**Authored coaching hints:**

- Qual revisão é normalmente testada numa PR aberta?
- A referência completa equivale à branch de destino?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-082:3fa4bbf05ce06850da1a9c492e3f944d225e0a317a109096a48ae97893cac846 -->
## Question 82: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-082`

**Content revision:** `3fa4bbf05ce06850da1a9c492e3f944d225e0a317a109096a48ae97893cac846`

### English

A later step reads steps.Compile.outputs.binary, but the producer has name: Compile and no id. Why is the output reference not resolving as intended?

1. The steps context uses the producer's id, not its display name. **[CORRECT]**

   A step needs an id for this steps.&lt;id&gt;.outputs reference.

2. Display names must always be lowercase.

   Letter case in the display name is not the missing reference mechanism.

3. Outputs work only between different workflows.

   Step outputs are designed for consumption by later steps in the same job.

4. The binary must first be published to Marketplace.

   Marketplace publication is unrelated to naming a workflow step.

**Concept:** Step identity diagnostics

**Authored coaching hints:**

- Which field is intended for humans and which for expression references?
- Does a display label automatically create a machine-readable identifier?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se lee steps.Compile.outputs.binary, pero el productor solo tiene name: Compile, sin id. ¿Por qué no resuelve?

1. steps usa id, no el nombre visual. **[CORRECT]**

   La referencia necesita el id del paso.

2. Los nombres deben ser minúsculas.

   La capitalización visual no es el problema.

3. Las salidas funcionan solo entre flujos.

   Las salidas sirven entre pasos del mismo trabajo.

4. El binario debe publicarse en Marketplace.

   Marketplace no asigna identificadores de pasos.

**Concept:** Identidad de pasos

**Authored coaching hints:**

- ¿Qué campo es visual y cuál es referenciable?
- ¿Una etiqueta visual crea automáticamente un identificador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa lê steps.Compile.outputs.binary, mas a produtora tem somente name: Compile, sem id. Por que não resolve?

1. steps usa id, não o nome visual. **[CORRECT]**

   A referência precisa do id da etapa.

2. Nomes devem ser minúsculos.

   Capitalização visual não é o problema.

3. Saídas só funcionam entre workflows.

   Saídas servem entre etapas do mesmo job.

4. O binário precisa ser publicado no Marketplace.

   Marketplace não atribui identificadores de etapas.

**Concept:** Identidade de etapas

**Authored coaching hints:**

- Qual campo é visual e qual é referenciável?
- Um rótulo visual cria identificador automaticamente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/contexts>

<!-- certification-coach-question:actions-083:0d3d9fc09cd556e19402887f43afc7c28c908890c8e6b9474bad99ab08c30d96 -->
## Question 83: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-083`

**Content revision:** `0d3d9fc09cd556e19402887f43afc7c28c908890c8e6b9474bad99ab08c30d96`

### English

A job writes a file into its workspace, and a later job on another hosted runner cannot find it. What best explains the missing file?

1. needs automatically deleted the file.

   needs orders jobs but does not delete or transfer files.

2. Jobs always share the same disk but different filenames.

   Hosted jobs are not guaranteed a shared disk.

3. Separate jobs do not automatically share files; the producer must upload and the consumer download an artifact. **[CORRECT]**

   Artifact transfer explicitly preserves files across runner boundaries.

4. GITHUB\_TOKEN encrypts all workspace files invisibly.

   Authentication tokens do not transparently encrypt workspace content.

**Concept:** Job filesystem isolation

**Authored coaching hints:**

- Does execution order imply shared storage?
- Which mechanism persists a file after its producing runner is gone?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo escribe un archivo y otro, en un runner hospedado distinto, no lo encuentra. ¿Qué lo explica?

1. needs eliminó el archivo.

   needs ordena, no elimina ni transfiere.

2. Todos comparten disco pero no nombres.

   No se garantiza disco compartido.

3. Los trabajos no comparten archivos automáticamente; subir y descargar un artefacto. **[CORRECT]**

   Los artefactos cruzan la frontera entre runners.

4. GITHUB\_TOKEN cifra archivos invisiblemente.

   El token no cifra el workspace.

**Concept:** Aislamiento de archivos por trabajo

**Authored coaching hints:**

- ¿Orden de ejecución implica almacenamiento compartido?
- ¿Qué conserva archivos tras desaparecer el runner?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job escreve um arquivo e outro, em runner hospedado diferente, não o encontra. O que explica isso?

1. needs excluiu o arquivo.

   needs ordena, não exclui nem transfere.

2. Todos compartilham disco, mas não nomes.

   Não há garantia de disco compartilhado.

3. Jobs não compartilham arquivos automaticamente; enviar e baixar um artefato. **[CORRECT]**

   Artefatos atravessam a fronteira entre runners.

4. GITHUB\_TOKEN criptografa arquivos invisivelmente.

   O token não criptografa o workspace.

**Concept:** Isolamento de arquivos por job

**Authored coaching hints:**

- Ordem de execução implica armazenamento compartilhado?
- O que preserva arquivos após o runner desaparecer?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-084:df2b526c49a4d21812d5f7c7e240c4656cfcc788b6bfb65dc05bf9cd4acbba55 -->
## Question 84: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-084`

**Content revision:** `df2b526c49a4d21812d5f7c7e240c4656cfcc788b6bfb65dc05bf9cd4acbba55`

### English

A downloader needs an artifact from a different workflow run, but only its artifact name was supplied. What additional context is required by the cross-run download pattern?

1. The actor's browser theme.

   Browser preferences do not identify or authorize artifact access.

2. The latest runner's hostname only.

   Runner hostnames are not artifact run selectors.

3. A job summary with the same title.

   A matching display title does not select an artifact from another run.

4. An appropriate token and the producing run's identifier. **[CORRECT]**

   Cross-run artifact downloads require identifying the run and supplying suitable authentication.

**Concept:** Cross-run artifact access

**Authored coaching hints:**

- Can the same artifact name exist in many runs?
- What two concerns must be addressed beyond naming the file bundle?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se necesita un artefacto de otra ejecución, pero solo se proporcionó su nombre. ¿Qué contexto adicional requiere la descarga?

1. El tema del navegador.

   La apariencia no identifica ni autoriza.

2. Solo el hostname del runner.

   El hostname no selecciona artefactos.

3. Un resumen con igual título.

   El título no identifica la ejecución.

4. Un token adecuado y el identificador de la ejecución productora. **[CORRECT]**

   La descarga entre ejecuciones necesita autenticación y run ID.

**Concept:** Acceso a artefactos entre ejecuciones

**Authored coaching hints:**

- ¿Puede repetirse un nombre en varias ejecuciones?
- ¿Qué problemas hay además de nombrar el paquete?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

É necessário um artefato de outra execução, mas apenas seu nome foi informado. Qual contexto adicional é necessário?

1. O tema do navegador.

   A aparência não identifica nem autoriza.

2. Somente o hostname do runner.

   Hostname não seleciona artefatos.

3. Um resumo de mesmo título.

   Título não identifica a execução.

4. Um token adequado e o identificador da execução produtora. **[CORRECT]**

   Download entre execuções exige autenticação e run ID.

**Concept:** Acesso a artefatos entre execuções

**Authored coaching hints:**

- Um nome pode repetir em várias execuções?
- Quais problemas existem além de nomear o pacote?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-085:10a31b4b90d15df1120cc23bc230030940c6c16e13dcbf128898246aef50ae0e -->
## Question 85: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-085`

**Content revision:** `10a31b4b90d15df1120cc23bc230030940c6c16e13dcbf128898246aef50ae0e`

### English

A workflow's cache restore is fast but installation still downloads some packages. The log shows a fallback restore key matched. Which conclusion is justified?

1. Any download proves the cache action is broken.

   A fallback is allowed to differ from the current exact key.

2. A fallback cache may be useful but incomplete for the current dependency set. **[CORRECT]**

   Fallback restoration can reuse common packages while installation fills gaps.

3. Caches guarantee the build is reproducible without a lockfile.

   Caching does not replace dependency version control or lockfiles.

4. The restored cache must be a release artifact.

   Caches and run artifacts are separate storage mechanisms.

**Concept:** Interpreting partial cache reuse

**Authored coaching hints:**

- What compatibility guarantee does a prefix match provide?
- Can reuse reduce work without eliminating every download?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La caché restauró rápido por restore-keys, pero la instalación descargó algunos paquetes. ¿Qué conclusión es válida?

1. Cualquier descarga demuestra fallo de caché.

   Un respaldo puede diferir de la clave exacta.

2. El respaldo puede ser útil pero incompleto para las dependencias actuales. **[CORRECT]**

   La instalación completa los paquetes faltantes.

3. La caché garantiza reproducibilidad sin lockfile.

   La caché no reemplaza control de versiones.

4. La caché debe ser un artefacto de lanzamiento.

   Cachés y artefactos son mecanismos distintos.

**Concept:** Reutilización parcial de caché

**Authored coaching hints:**

- ¿Qué garantiza una coincidencia por prefijo?
- ¿Reutilizar puede reducir trabajo sin eliminar descargas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O cache restaurou rapidamente por restore-keys, mas a instalação baixou alguns pacotes. Qual conclusão é válida?

1. Qualquer download prova falha de cache.

   Um fallback pode diferir da chave exata.

2. O fallback pode ser útil, mas incompleto para as dependências atuais. **[CORRECT]**

   A instalação completa pacotes ausentes.

3. Cache garante reprodução sem lockfile.

   Cache não substitui controle de versões.

4. O cache deve ser um artefato de release.

   Caches e artefatos são mecanismos distintos.

**Concept:** Reutilização parcial de cache

**Authored coaching hints:**

- O que uma correspondência por prefixo garante?
- Reutilizar pode reduzir trabalho sem eliminar downloads?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-086:b040d9ffc10c09ca3d4044df2e5261f4e4853cbe9750fd3dab9702b14de8a8d4 -->
## Question 86: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-086`

**Content revision:** `b040d9ffc10c09ca3d4044df2e5261f4e4853cbe9750fd3dab9702b14de8a8d4`

### English

A private reusable workflow was renamed to a new repository path. Existing callers still use the old owner/repository name and fail. What should consumers do?

1. Update references to the new repository path; Actions does not follow these redirects. **[CORRECT]**

   Actions references do not follow repository renaming redirects for actions or reusable workflows.

2. Wait for their caches to expire.

   Cache expiration cannot resolve an unsupported old path.

3. Increase max-parallel.

   Parallelism does not affect repository reference resolution.

4. Set ACTIONS\_STEP\_DEBUG=false to bypass resolution.

   Debug settings cannot bypass reference lookup.

**Concept:** Renamed component references

**Authored coaching hints:**

- Are browser redirects also supported for executable dependencies?
- Which part of the caller explicitly identifies the component's location?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se renombró la ruta de repositorio de un flujo reutilizable privado. Los llamadores con owner/repository anterior fallan. ¿Qué hacer?

1. Actualizar las referencias: Actions no sigue esas redirecciones. **[CORRECT]**

   Las referencias reutilizables no siguen esos cambios de ruta.

2. Esperar expiración de caché.

   Expirar caché no arregla la referencia.

3. Aumentar max-parallel.

   Paralelismo no cambia resolución.

4. Desactivar depuración para omitir resolución.

   Depuración no evita búsqueda del componente.

**Concept:** Referencias de componentes renombrados

**Authored coaching hints:**

- ¿Las redirecciones del navegador se aplican a dependencias ejecutables?
- ¿Dónde identifica el llamador la ubicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O caminho do repositório de um workflow reutilizável privado mudou. Chamadores com owner/repository antigo falham. O que fazer?

1. Atualizar referências: Actions não segue esses redirecionamentos. **[CORRECT]**

   Referências reutilizáveis não seguem essas mudanças de caminho.

2. Aguardar expiração do cache.

   Expirar cache não corrige referências.

3. Aumentar max-parallel.

   Paralelismo não muda resolução.

4. Desativar depuração para ignorar resolução.

   Depuração não evita busca do componente.

**Concept:** Referências de componentes renomeados

**Authored coaching hints:**

- Redirecionamentos do navegador valem para dependências executáveis?
- Onde o chamador identifica a localização?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-087:e4e4cda4a609034cb563b6d0dfae290c71affaf73aedb4bb2da4b08029026249 -->
## Question 87: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-087`

**Content revision:** `e4e4cda4a609034cb563b6d0dfae290c71affaf73aedb4bb2da4b08029026249`

### English

A consumer puts uses: org/platform/.github/workflows/check.yml@v2 inside a job's steps and receives a configuration error. What is the appropriate correction?

1. Rename check.yml to README.md.

   Renaming the workflow as documentation removes rather than repairs the callable workflow.

2. Add a shell property beside the step's uses.

   Shell settings cannot turn a step action invocation into a job-level workflow call.

3. Call the reusable workflow with jobs.&lt;job\_id&gt;.uses instead. **[CORRECT]**

   Reusable workflows are invoked at job level, not as steps.

4. Add the file path to GITHUB\_PATH.

   Executable search paths are unrelated to workflow invocation syntax.

**Concept:** Workflow call placement

**Authored coaching hints:**

- Does the referenced file define jobs or an action's runs metadata?
- Which level of the caller can delegate an entire workflow?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un consumidor puso uses: org/platform/.github/workflows/check.yml@v2 dentro de steps y recibe un error. ¿Cómo corregirlo?

1. Renombrarlo README.md.

   Renombrar elimina la definición invocable.

2. Añadir shell junto a uses.

   shell no transforma una acción en llamada de flujo.

3. Invocarlo mediante jobs.&lt;job\_id&gt;.uses. **[CORRECT]**

   Los flujos reutilizables se invocan a nivel de trabajo.

4. Añadirlo a GITHUB\_PATH.

   PATH no define llamadas de flujos.

**Concept:** Ubicación de llamadas reutilizables

**Authored coaching hints:**

- ¿El archivo define jobs o runs?
- ¿Qué nivel puede delegar un flujo completo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um consumidor colocou uses: org/platform/.github/workflows/check.yml@v2 em steps e recebeu erro. Como corrigir?

1. Renomear para README.md.

   Renomear remove a definição invocável.

2. Adicionar shell ao lado de uses.

   shell não transforma ação em chamada de workflow.

3. Invocar por jobs.&lt;job\_id&gt;.uses. **[CORRECT]**

   Workflows reutilizáveis são chamados no nível do job.

4. Adicionar a GITHUB\_PATH.

   PATH não define chamadas de workflows.

**Concept:** Localização de chamadas reutilizáveis

**Authored coaching hints:**

- O arquivo define jobs ou runs?
- Qual nível pode delegar um workflow completo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-088:c2fdce3883de34b38c88517561d05689b9f24cfa76adfc8525cee2b297bb4d8b -->
## Question 88: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-088`

**Content revision:** `c2fdce3883de34b38c88517561d05689b9f24cfa76adfc8525cee2b297bb4d8b`

### English

A workflow anchors an env mapping as &amp;test\_env and later uses env: \*test\_env. While interpreting the file, how should the alias be understood?

1. As a runtime download from Marketplace.

   An alias is local YAML reuse, not a network dependency.

2. As a new secret namespace.

   Anchors do not define access-control or secret namespaces.

3. As a request to run the earlier job first.

   An alias does not create a needs relationship.

4. As reuse of the anchored YAML content at that location. **[CORRECT]**

   The alias repeats the content identified by the anchor in the same document.

**Concept:** Reading anchored configuration

**Authored coaching hints:**

- Does this notation belong to YAML structure or Actions runtime scheduling?
- What content would remain if the alias were written out explicitly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo define env con &amp;test\_env y después env: \*test\_env. ¿Cómo interpretar el alias?

1. Como descarga Marketplace.

   El alias es local, no una descarga.

2. Como nuevo ámbito de secretos.

   Las anclas no crean ámbitos de seguridad.

3. Como dependencia del trabajo anterior.

   No equivale a needs.

4. Como reutilización del contenido YAML anclado. **[CORRECT]**

   Repite el contenido identificado en el documento.

**Concept:** Lectura de anclas YAML

**Authored coaching hints:**

- ¿La notación pertenece al YAML o a planificación?
- ¿Qué contenido quedaría al expandir el alias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow define env com &amp;test\_env e depois env: \*test\_env. Como interpretar o alias?

1. Como download do Marketplace.

   O alias é local, não download.

2. Como novo escopo de segredos.

   Âncoras não criam escopos de segurança.

3. Como dependência do job anterior.

   Não equivale a needs.

4. Como reutilização do conteúdo YAML ancorado. **[CORRECT]**

   Repete o conteúdo identificado no documento.

**Concept:** Leitura de âncoras YAML

**Authored coaching hints:**

- A notação pertence ao YAML ou ao agendamento?
- Qual conteúdo fica após expandir o alias?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-089:9f32f76124f361d2c1bb833416a9d8e3cedd7fab7245cb6050d87ca73c9d396d -->
## Question 89: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-089`

**Content revision:** `9f32f76124f361d2c1bb833416a9d8e3cedd7fab7245cb6050d87ca73c9d396d`

### English

An error report contains a useful line deep inside a job log. How should a maintainer share the exact evidence so a teammate can navigate directly to it?

1. Copy only the workflow's generic name.

   A generic name does not locate a specific run, step, or log line.

2. Use the permalink obtained from that log line's number. **[CORRECT]**

   Log line numbers provide shareable links to the precise evidence.

3. Share a runner registration token.

   Runner registration tokens are sensitive and unrelated to log navigation.

4. Delete other steps so the line moves to the top.

   Deleting configuration is unnecessary and does not improve historical evidence links.

**Concept:** Sharing diagnostic evidence

**Authored coaching hints:**

- Which link retains the execution context as well as the message?
- What is more precise than a screenshot of a generic failure banner?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una línea profunda del registro contiene evidencia útil. ¿Cómo compartirla para navegar directamente a ella?

1. Copiar solo el nombre del flujo.

   El nombre no identifica ejecución y línea.

2. Usar el enlace permanente del número de línea. **[CORRECT]**

   El permalink apunta a la evidencia exacta.

3. Compartir un token de runner.

   El token es sensible e irrelevante.

4. Eliminar pasos para moverla arriba.

   Editar código no mejora evidencia histórica.

**Concept:** Compartir evidencia diagnóstica

**Authored coaching hints:**

- ¿Qué enlace conserva contexto y mensaje?
- ¿Qué es más preciso que un banner genérico?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma linha distante no log contém evidência útil. Como compartilhá-la para navegar diretamente até ela?

1. Copiar só o nome do workflow.

   O nome não identifica execução e linha.

2. Usar o link permanente do número da linha. **[CORRECT]**

   O permalink aponta à evidência exata.

3. Compartilhar um token de runner.

   O token é sensível e irrelevante.

4. Excluir etapas para movê-la para cima.

   Editar código não melhora evidências históricas.

**Concept:** Compartilhamento de evidências

**Authored coaching hints:**

- Qual link preserva contexto e mensagem?
- O que é mais preciso que um banner genérico?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-090:5086ba3e92b2aeacfb3a85d75550f182deccf942dc309ad98f8580bd2bcad400 -->
## Question 90: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-090`

**Content revision:** `5086ba3e92b2aeacfb3a85d75550f182deccf942dc309ad98f8580bd2bcad400`

### English

A workflow defines on: \[push, pull\_request\]. Updating the source branch of an open pull request produces two runs. Which explanation best matches the configuration?

1. The push and pull-request synchronization can each trigger an independent run. **[CORRECT]**

   One update can produce both configured events, each causing a run.

2. Every matrix job always creates another workflow run.

   Matrix jobs are within a workflow run rather than duplicate event triggers.

3. The YAML parser duplicates all event arrays.

   The array is valid event syntax, not a parser duplication bug.

4. The cache action triggers a second push automatically.

   Restoring a cache does not itself push a commit.

**Concept:** Multiple-event run diagnosis

**Authored coaching hints:**

- Can one repository action produce more than one event?
- Does listing events mean all must occur together or any can trigger execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

on: \[push, pull\_request\] produce dos ejecuciones al actualizar la rama de una PR abierta. ¿Por qué?

1. Push y sincronización de PR pueden disparar ejecuciones independientes. **[CORRECT]**

   Una actualización puede producir ambos eventos configurados.

2. Cada variante crea otro flujo.

   Las variantes son trabajos dentro de una ejecución.

3. El analizador duplica arreglos.

   La sintaxis del arreglo es válida.

4. La caché genera otro push.

   Restaurar caché no sube commits.

**Concept:** Diagnóstico de múltiples eventos

**Authored coaching hints:**

- ¿Una acción del usuario puede generar varios eventos?
- ¿La lista exige todos los eventos o acepta cualquiera?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

on: \[push, pull\_request\] produz duas execuções ao atualizar a branch de uma PR aberta. Por quê?

1. Push e sincronização da PR podem disparar execuções independentes. **[CORRECT]**

   Uma atualização pode produzir ambos os eventos.

2. Cada variante cria outro workflow.

   Variantes são jobs dentro de uma execução.

3. O parser duplica arrays.

   A sintaxe do array é válida.

4. O cache gera outro push.

   Restaurar cache não envia commits.

**Concept:** Diagnóstico de múltiplos eventos

**Authored coaching hints:**

- Uma ação do usuário pode gerar vários eventos?
- A lista exige todos ou aceita qualquer evento?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-091:020cd6d13abdb48684e6be6a6fd9c2f06007c76b887a36841448f1a44d21c925 -->
## Question 91: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-091`

**Content revision:** `020cd6d13abdb48684e6be6a6fd9c2f06007c76b887a36841448f1a44d21c925`

### English

A workflow\_run-triggered deployment starts even after the upstream build fails. The trigger specifies types: \[completed\]. What should the author understand?

1. completed means successful by definition.

   A workflow can complete with success, failure, or another conclusion.

2. workflow\_run ignores upstream status entirely and cannot expose it.

   The upstream conclusion is available in the workflow\_run event payload.

3. Completion includes failures; gate deployment on github.event.workflow\_run.conclusion == 'success'. **[CORRECT]**

   A conclusion condition distinguishes successful completion before deployment.

4. The event changes failed upstream runs into successes.

   Triggering downstream automation does not rewrite upstream results.

**Concept:** Workflow completion versus success

**Authored coaching hints:**

- Is a lifecycle state equivalent to a successful outcome?
- Where could a downstream condition inspect the upstream conclusion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue workflow\_run con types: \[completed\] empieza aunque build falle. ¿Qué debe entender el autor?

1. completed siempre significa éxito.

   Un flujo termina con distintas conclusiones.

2. workflow\_run no expone el resultado.

   La carga sí expone conclusion.

3. Completion incluye fallos; condicionar a github.event.workflow\_run.conclusion == 'success'. **[CORRECT]**

   La condición distingue finalización exitosa.

4. El evento convierte fallos en éxitos.

   El disparador no reescribe resultados.

**Concept:** Finalización frente a éxito

**Authored coaching hints:**

- ¿Un estado del ciclo de vida equivale a éxito?
- ¿Dónde examinar la conclusión del productor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação workflow\_run com types: \[completed\] começa mesmo após build falhar. O que o autor deve entender?

1. completed sempre significa sucesso.

   Um workflow termina com conclusões distintas.

2. workflow\_run não expõe o resultado.

   A carga expõe conclusion.

3. Conclusão inclui falhas; condicionar a github.event.workflow\_run.conclusion == 'success'. **[CORRECT]**

   A condição distingue conclusão bem-sucedida.

4. O evento converte falhas em sucesso.

   O gatilho não reescreve resultados.

**Concept:** Conclusão versus sucesso

**Authored coaching hints:**

- Estado do ciclo de vida equivale a sucesso?
- Onde examinar a conclusão do produtor?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>

<!-- certification-coach-question:actions-092:50369399109d1ca72e007d629432bef5ad3c2df6d1b90c906e7a276e8e2668e2 -->
## Question 92: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-092`

**Content revision:** `50369399109d1ca72e007d629432bef5ad3c2df6d1b90c906e7a276e8e2668e2`

### English

A push made using a job's GITHUB\_TOKEN does not trigger the repository's push workflow. What documented protection explains this, excluding explicit dispatch events?

1. The pushed branch must have the same name as the job.

   Branch names do not override the token's recursion protection.

2. All bot commits are permanently invisible to Actions.

   The behavior concerns this authentication mechanism, not every bot identity.

3. The cache service suppresses large pushes.

   Cache behavior does not decide push-event recursion.

4. Events caused by GITHUB\_TOKEN generally do not start new workflow runs, preventing recursion. **[CORRECT]**

   GitHub suppresses most workflow triggers from GITHUB\_TOKEN-generated events to avoid recursive runs.

**Concept:** Token-trigger recursion protection

**Authored coaching hints:**

- What would happen if a workflow repeatedly triggered itself by committing?
- Does the credential used for an operation affect event-trigger behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un push hecho con GITHUB\_TOKEN no dispara otro flujo push. Excluyendo dispatch explícito, ¿qué protección lo explica?

1. La rama debe llamarse como el trabajo.

   Los nombres no anulan esa protección.

2. Todos los commits bot son invisibles.

   La regla no afecta por igual a todo bot.

3. La caché bloquea pushes grandes.

   La caché no controla recursión.

4. Los eventos causados por GITHUB\_TOKEN generalmente no crean ejecuciones, para evitar recursión. **[CORRECT]**

   GitHub suprime la mayoría de esos disparadores.

**Concept:** Protección contra recursión

**Authored coaching hints:**

- ¿Qué ocurriría si cada commit del flujo lo disparara otra vez?
- ¿La credencial usada afecta los disparadores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um push feito com GITHUB\_TOKEN não dispara outro workflow push. Excluindo dispatch explícito, qual proteção explica isso?

1. A branch deve ter o nome do job.

   Nomes não anulam essa proteção.

2. Todos os commits bot são invisíveis.

   A regra não afeta igualmente todo bot.

3. O cache bloqueia pushes grandes.

   Cache não controla recursão.

4. Eventos causados por GITHUB\_TOKEN geralmente não criam execuções, evitando recursão. **[CORRECT]**

   GitHub suprime a maioria desses gatilhos.

**Concept:** Proteção contra recursão

**Authored coaching hints:**

- O que ocorreria se cada commit do workflow o disparasse novamente?
- A credencial usada afeta gatilhos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow>

<!-- certification-coach-question:actions-093:a1220364ab09d90e9c7aa5f9efd3b5d10cbf44b01183b9a308239f885b46a042 -->
## Question 93: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-093`

**Content revision:** `a1220364ab09d90e9c7aa5f9efd3b5d10cbf44b01183b9a308239f885b46a042`

### English

A workflow was disabled during an incident. An investigator now wants to re-run one of its old jobs, but the operation is unavailable. What prerequisite should be addressed?

1. Delete the old job's artifacts first.

   Artifact deletion is not a re-run prerequisite.

2. Enable the workflow before attempting the re-run. **[CORRECT]**

   A disabled workflow cannot have its runs or jobs re-run until it is enabled.

3. Create a new Marketplace listing.

   Marketplace publication has no bearing on re-running repository jobs.

4. Rename the old commit SHA.

   Commit SHAs are content identifiers, not editable retry settings.

**Concept:** Disabled workflow reruns

**Authored coaching hints:**

- Does the workflow's current enabled state affect historical retry operations?
- Can pausing execution apply to both new events and retries?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo está deshabilitado y no permite reejecutar un trabajo histórico. ¿Qué requisito atender?

1. Eliminar sus artefactos.

   Borrar artefactos no es requisito.

2. Habilitar el flujo antes del reintento. **[CORRECT]**

   No se reejecutan trabajos de flujos deshabilitados.

3. Crear una publicación Marketplace.

   Marketplace no controla los reintentos.

4. Renombrar el SHA antiguo.

   Los SHAs no se renombran.

**Concept:** Reintentos de flujos deshabilitados

**Authored coaching hints:**

- ¿El estado actual afecta reintentos históricos?
- ¿Pausar ejecución puede impedir eventos y reintentos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow está desabilitado e não permite reexecutar um job histórico. Qual requisito atender?

1. Excluir seus artefatos.

   Excluir artefatos não é requisito.

2. Habilitar o workflow antes da tentativa. **[CORRECT]**

   Jobs de workflows desabilitados não são reexecutados.

3. Criar publicação Marketplace.

   Marketplace não controla tentativas.

4. Renomear o SHA antigo.

   SHAs não são renomeados.

**Concept:** Tentativas de workflows desabilitados

**Authored coaching hints:**

- O estado atual afeta tentativas históricas?
- Pausar execução pode impedir eventos e tentativas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

<!-- certification-coach-question:actions-094:d766cfeaacafac3bc604b19aefcc194ad071b6116e870e6573094d3498bffef0 -->
## Question 94: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-094`

**Content revision:** `d766cfeaacafac3bc604b19aefcc194ad071b6116e870e6573094d3498bffef0`

### English

A reusable workflow is referenced by a moving branch. A maintainer re-runs only a failed job from an existing run. Which reusable-workflow revision is used?

1. The same callee commit SHA used on the first attempt. **[CORRECT]**

   Failed-job or specific-job retries preserve the callee commit resolved for the first attempt.

2. Always the newest commit on the callee branch.

   Re-running all jobs can resolve a moving reference again; a failed-job retry has different semantics.

3. The callee's oldest release.

   Release age does not select this retry's callee.

4. The retrying user's preferred branch.

   User preferences do not replace the original reusable-workflow resolution.

**Concept:** Reusable workflow retry resolution

**Authored coaching hints:**

- Do full re-runs and partial retries resolve moving references identically?
- What revision best preserves the context of the failed job?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo reutilizable se referencia con una rama móvil. Al reintentar solo un trabajo fallido, ¿qué revisión llamada se usa?

1. El mismo SHA llamado en el primer intento. **[CORRECT]**

   Los reintentos parciales conservan el commit resuelto inicialmente.

2. Siempre el último commit de esa rama.

   Reejecutar todo puede resolver de nuevo; el parcial no.

3. El lanzamiento más antiguo.

   La antigüedad no selecciona revisión.

4. La rama preferida del usuario.

   Las preferencias no cambian la resolución original.

**Concept:** Resolución reutilizable al reintentar

**Authored coaching hints:**

- ¿Reintentos totales y parciales resuelven igual referencias móviles?
- ¿Qué revisión preserva el contexto del fallo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável é referenciado por branch móvel. Ao reexecutar só um job com falha, qual revisão chamada é usada?

1. O mesmo SHA chamado na primeira tentativa. **[CORRECT]**

   Tentativas parciais preservam o commit resolvido inicialmente.

2. Sempre o último commit da branch.

   Reexecutar tudo pode resolver novamente; o parcial não.

3. A release mais antiga.

   Idade não seleciona revisão.

4. A branch preferida do usuário.

   Preferências não alteram a resolução original.

**Concept:** Resolução reutilizável nas tentativas

**Authored coaching hints:**

- Tentativas totais e parciais resolvem referências móveis igualmente?
- Qual revisão preserva o contexto da falha?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-095:36e589a829d1d50a2b7c29fa13c622dd437562309fb8bf26e6d94ad41146bcab -->
## Question 95: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-095`

**Content revision:** `36e589a829d1d50a2b7c29fa13c622dd437562309fb8bf26e6d94ad41146bcab`

### English

A downloaded artifact produces a digest-mismatch warning. What should the consumer infer before using it for a deployment?

1. The warning proves the artifact is safe.

   A mismatch is a reason for scrutiny, not proof of safety.

2. Digest warnings concern only the workflow's display name.

   Digest validation compares artifact content, not workflow naming.

3. Integrity validation did not match the expected digest and the discrepancy needs investigation. **[CORRECT]**

   The warning indicates differing content digests and should be resolved before trust-sensitive use.

4. The download action automatically guarantees application correctness despite the warning.

   Content integrity checks do not prove application correctness, especially when they warn.

**Concept:** Artifact integrity diagnostics

**Authored coaching hints:**

- What property is a cryptographic digest intended to compare?
- Should successful file retrieval alone establish trust in its contents?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La descarga de un artefacto avisa de digest diferente. ¿Qué inferir antes de desplegar?

1. El aviso demuestra seguridad.

   Una discrepancia exige revisión.

2. El digest solo verifica el nombre.

   El digest compara contenido.

3. La integridad no coincide y requiere investigación. **[CORRECT]**

   Deben resolverse los digests distintos antes de confiar.

4. Descargar garantiza corrección pese al aviso.

   Recuperar archivos no prueba corrección.

**Concept:** Diagnóstico de integridad

**Authored coaching hints:**

- ¿Qué compara un digest criptográfico?
- ¿Obtener un archivo establece confianza en su contenido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O download de um artefato avisa sobre digest diferente. O que concluir antes de implantar?

1. O aviso prova segurança.

   Divergência exige revisão.

2. O digest só verifica o nome.

   Digest compara conteúdo.

3. A integridade não corresponde e exige investigação. **[CORRECT]**

   Digests distintos devem ser resolvidos antes de confiar.

4. Baixar garante correção apesar do aviso.

   Obter arquivos não prova correção.

**Concept:** Diagnóstico de integridade

**Authored coaching hints:**

- O que um digest criptográfico compara?
- Obter o arquivo estabelece confiança no conteúdo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-096:76704359e9e75bb4c61af873dc21c9ea024d7af1b33e2ed160f44cc2c6316999 -->
## Question 96: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-096`

**Content revision:** `76704359e9e75bb4c61af873dc21c9ea024d7af1b33e2ed160f44cc2c6316999`

### English

A team wants to retrieve an entire run's logs programmatically. Which REST resource is appropriate rather than enumerating repository source files?

1. GET /repos/\{owner\}/\{repo\}/contents

   Contents retrieves version-controlled files, not execution logs.

2. GET /repos/\{owner\}/\{repo\}/issues

   Issues retrieves collaboration records rather than run output.

3. GET /repos/\{owner\}/\{repo\}/actions/secrets

   Secrets endpoints do not return workflow logs or plaintext secrets.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs **[CORRECT]**

   The workflow-run logs endpoint provides the run's downloadable log archive.

**Concept:** Run logs through REST

**Authored coaching hints:**

- What identifier distinguishes one execution from the workflow source file?
- Which API resource owns execution output?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo debe descargar todos los registros de una ejecución mediante REST. ¿Qué recurso corresponde?

1. GET /repos/\{owner\}/\{repo\}/contents

   Contents devuelve archivos versionados.

2. GET /repos/\{owner\}/\{repo\}/issues

   Issues devuelve colaboración.

3. GET /repos/\{owner\}/\{repo\}/actions/secrets

   Secrets no entrega registros ni secretos en claro.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs **[CORRECT]**

   logs devuelve el archivo de registros de la ejecución.

**Concept:** Registros de ejecución por REST

**Authored coaching hints:**

- ¿Qué identifica una ejecución frente a su fuente?
- ¿Qué recurso posee la salida ejecutada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe precisa baixar todos os logs de uma execução por REST. Qual recurso corresponde?

1. GET /repos/\{owner\}/\{repo\}/contents

   Contents retorna arquivos versionados.

2. GET /repos/\{owner\}/\{repo\}/issues

   Issues retorna colaboração.

3. GET /repos/\{owner\}/\{repo\}/actions/secrets

   Secrets não retorna logs nem valores em claro.

4. GET /repos/\{owner\}/\{repo\}/actions/runs/\{run\_id\}/logs **[CORRECT]**

   logs fornece o arquivo de logs da execução.

**Concept:** Logs de execução por REST

**Authored coaching hints:**

- O que identifica uma execução em vez da fonte?
- Qual recurso possui a saída executada?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/workflow-runs>

<!-- certification-coach-question:actions-097:b557910882457155837d238262f7f94952b3d1a511a221b3df634f19dcb4d135 -->
## Question 97: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-097`

**Content revision:** `b557910882457155837d238262f7f94952b3d1a511a221b3df634f19dcb4d135`

### English

A template contains branches: \[$default-branch\]. When a user creates a workflow from that template in a repository whose default branch is trunk, what should the generated file contain there?

1. The literal string $default-branch forever.

   The placeholder is replaced during workflow creation from the template.

2. The destination repository's default branch name, trunk. **[CORRECT]**

   Template expansion substitutes the destination repository's default branch name.

3. The template author's username.

   The placeholder describes a branch, not the author's identity.

4. An automatically created branch named default-branch.

   Substitution does not create a new branch.

**Concept:** Template placeholder expansion

**Authored coaching hints:**

- Is this token an ordinary shell variable or a template-generation placeholder?
- Whose repository configuration should a newly generated workflow target?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una plantilla usa branches: \[$default-branch\]. El repositorio destino tiene trunk como rama predeterminada. ¿Qué contendrá el archivo generado?

1. Siempre $default-branch literal.

   El marcador se sustituye al generar.

2. trunk, la rama predeterminada del destino. **[CORRECT]**

   Se utiliza la configuración del repositorio destino.

3. El usuario autor de la plantilla.

   El marcador representa una rama.

4. Una rama nueva default-branch.

   La sustitución no crea ramas.

**Concept:** Expansión de marcadores de plantillas

**Authored coaching hints:**

- ¿Es variable shell o marcador de generación?
- ¿Qué configuración debe usar el nuevo flujo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um template usa branches: \[$default-branch\]. O destino tem trunk como branch padrão. O que o arquivo gerado conterá?

1. Sempre $default-branch literal.

   O marcador é substituído ao gerar.

2. trunk, a branch padrão do destino. **[CORRECT]**

   A configuração do destino é usada.

3. O usuário autor do template.

   O marcador representa uma branch.

4. Uma nova branch default-branch.

   A substituição não cria branches.

**Concept:** Expansão de marcadores de templates

**Authored coaching hints:**

- É variável shell ou marcador de geração?
- Qual configuração o novo workflow deve usar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-098:0bcb3b2657e13593ab07b144083c1abfe7dffe050a3430ba5b82159b353c9db7 -->
## Question 98: Consume and troubleshoot workflows

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-098`

**Content revision:** `0bcb3b2657e13593ab07b144083c1abfe7dffe050a3430ba5b82159b353c9db7`

### English

A matrix test's labels show os and runtime, but failures occur only where runtime=22 regardless of OS. Which investigation best uses that evidence?

1. Compare logs and dependency behavior across the runtime-22 variants before blaming all runners. **[CORRECT]**

   Correlation across a shared matrix axis helps isolate runtime-specific behavior.

2. Assume every operating-system image is defective.

   Passing and failing jobs on multiple OSes weaken an OS-wide explanation.

3. Delete the runtime field from all job names.

   Removing diagnostic labels makes correlation harder.

4. Raise organization token permissions without checking the error.

   A version-specific failure pattern does not establish a permissions defect.

**Concept:** Matrix failure correlation

**Authored coaching hints:**

- Which axis is common to failing variants but not passing ones?
- How can the test grid narrow the first hypothesis to investigate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las variantes fallan solo con runtime=22, independientemente del sistema operativo. ¿Qué investigación aprovecha mejor esa evidencia?

1. Comparar registros y dependencias de runtime-22 antes de culpar a todos los runners. **[CORRECT]**

   El eje compartido orienta a causas del runtime.

2. Suponer defectuosos todos los sistemas.

   El patrón no respalda un defecto general de sistemas.

3. Quitar runtime de los nombres.

   Quitar etiquetas dificulta correlación.

4. Ampliar permisos sin examinar errores.

   El patrón no demuestra fallo de permisos.

**Concept:** Correlación de fallos de matriz

**Authored coaching hints:**

- ¿Qué eje comparten solo las variantes fallidas?
- ¿Cómo reduce la cuadrícula las hipótesis iniciales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Variantes falham somente com runtime=22, independentemente do sistema operacional. Qual investigação aproveita melhor essa evidência?

1. Comparar logs e dependências de runtime-22 antes de culpar todos os runners. **[CORRECT]**

   O eixo compartilhado orienta causas do runtime.

2. Presumir todos os sistemas defeituosos.

   O padrão não apoia defeito geral dos sistemas.

3. Remover runtime dos nomes.

   Remover rótulos dificulta correlação.

4. Ampliar permissões sem examinar erros.

   O padrão não prova falha de permissões.

**Concept:** Correlação de falhas de matriz

**Authored coaching hints:**

- Qual eixo aparece somente nas variantes com falha?
- Como a grade reduz as hipóteses iniciais?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>

<!-- certification-coach-question:actions-099:deb75f16f2abb6bbffc53706eefc03cbb0fc40fa4e964b91b698d4dc7fefeadb -->
## Question 99: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-099`

**Content revision:** `deb75f16f2abb6bbffc53706eefc03cbb0fc40fa4e964b91b698d4dc7fefeadb`

### English

An action must call GitHub's API on Linux, Windows, and macOS without a Docker dependency. Its implementation is pure JavaScript. Which action type best fits?

1. A Docker container action.

   Docker container actions require Linux and do not meet this portability requirement.

2. A workflow template only.

   A template scaffolds workflows rather than implementing this action.

3. A JavaScript action running directly on the runner. **[CORRECT]**

   Pure JavaScript actions can run on all three hosted operating systems.

4. A Linux service container.

   Service containers are dependencies for Linux jobs, not this cross-platform action implementation.

**Concept:** Selecting a portable action type

**Authored coaching hints:**

- Does the implementation require a containerized operating system?
- Which runtime is available for actions across the named runner platforms?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript pura debe llamar a la API de GitHub en Linux, Windows y macOS, sin Docker. ¿Qué tipo corresponde?

1. Acción de contenedor Docker.

   Docker requiere Linux y no satisface portabilidad.

2. Solo una plantilla.

   La plantilla no implementa la acción.

3. Acción JavaScript directamente en el runner. **[CORRECT]**

   JavaScript puro funciona en las tres plataformas.

4. Contenedor de servicio Linux.

   Un servicio no implementa esa acción multiplataforma.

**Concept:** Tipo de acción portátil

**Authored coaching hints:**

- ¿Necesita un sistema operativo contenedorizado?
- ¿Qué runtime existe en esas plataformas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript pura deve chamar a API GitHub em Linux, Windows e macOS, sem Docker. Qual tipo corresponde?

1. Ação de contêiner Docker.

   Docker exige Linux e não atende à portabilidade.

2. Somente um template.

   O template não implementa a ação.

3. Ação JavaScript diretamente no runner. **[CORRECT]**

   JavaScript puro funciona nas três plataformas.

4. Contêiner de serviço Linux.

   Um serviço não implementa essa ação multiplataforma.

**Concept:** Tipo de ação portátil

**Authored coaching hints:**

- Precisa de sistema operacional conteinerizado?
- Qual runtime existe nessas plataformas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-100:b25fe2e3de2f59f73ba8c9a834a9f5ba0714cdd00fbcc8faadae7d8fe964ed18 -->
## Question 100: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-100`

**Content revision:** `b25fe2e3de2f59f73ba8c9a834a9f5ba0714cdd00fbcc8faadae7d8fe964ed18`

### English

A team needs to package a Linux CLI with a precise set of system libraries so callers do not install them independently. Which action implementation best encapsulates that environment?

1. A repository variable.

   A variable cannot package executable libraries.

2. A JavaScript action that assumes all libraries exist.

   Assuming installed dependencies does not encapsulate a controlled environment.

3. A workflow badge.

   Badges display status, not runtime dependencies.

4. A Docker container action with the required dependencies in its image. **[CORRECT]**

   A Docker image can package the CLI and its Linux system dependencies together.

**Concept:** Containerized action dependencies

**Authored coaching hints:**

- Which requirement concerns runtime isolation rather than code reuse alone?
- How can dependencies travel with an action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se necesita empaquetar un CLI Linux con bibliotecas precisas para evitar instalaciones independientes del llamador. ¿Qué implementación corresponde?

1. Una variable del repositorio.

   Las variables no empaquetan bibliotecas.

2. JavaScript que supone bibliotecas instaladas.

   Suponer instalación no encapsula el entorno.

3. Una insignia.

   Las insignias no aportan dependencias.

4. Acción Docker con dependencias incluidas en la imagen. **[CORRECT]**

   La imagen agrupa CLI y dependencias Linux.

**Concept:** Dependencias contenedorizadas

**Authored coaching hints:**

- ¿Qué requisito exige aislar el entorno?
- ¿Cómo pueden viajar las dependencias con la acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

É preciso empacotar um CLI Linux com bibliotecas precisas para evitar instalações independentes do chamador. Qual implementação corresponde?

1. Uma variável do repositório.

   Variáveis não empacotam bibliotecas.

2. JavaScript que presume bibliotecas instaladas.

   Presumir instalação não encapsula o ambiente.

3. Um selo de status.

   Selos não fornecem dependências.

4. Ação Docker com dependências incluídas na imagem. **[CORRECT]**

   A imagem reúne CLI e dependências Linux.

**Concept:** Dependências conteinerizadas

**Authored coaching hints:**

- Qual requisito exige isolar o ambiente?
- Como dependências podem acompanhar a ação?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-101:103b0c763825805d09fa4078a3e8a3f0cfab8afbd9f0e6011f734d38f56842a1 -->
## Question 101: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-101`

**Content revision:** `103b0c763825805d09fa4078a3e8a3f0cfab8afbd9f0e6011f734d38f56842a1`

### English

Several repositories repeat the same sequence of setup and lint steps inside existing jobs. They do not need a separate runner or multiple jobs. Which abstraction is the closest fit?

1. A composite action. **[CORRECT]**

   Composite actions package multiple run or uses steps for reuse inside a job.

2. An organization runner group.

   Runner groups govern access to execution capacity, not reusable step logic.

3. A release asset without action metadata.

   A release asset alone does not define an executable Actions component.

4. A workflow\_run event.

   An event reacts to workflow activity rather than encapsulating steps.

**Concept:** Composite action use cases

**Authored coaching hints:**

- What is the smallest reusable unit needed here?
- Does this component need to control a whole workflow graph?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Varios repositorios repiten setup y lint dentro de trabajos existentes, sin runners ni trabajos adicionales. ¿Qué abstracción encaja?

1. Acción compuesta. **[CORRECT]**

   Un compuesto agrupa pasos run o uses.

2. Grupo de runners.

   Los grupos controlan acceso a capacidad.

3. Asset de lanzamiento sin metadatos.

   Un asset sin metadatos no define ejecución.

4. Evento workflow\_run.

   Un evento no encapsula pasos.

**Concept:** Uso de acciones compuestas

**Authored coaching hints:**

- ¿Cuál es la unidad mínima necesaria?
- ¿Necesita controlar un grafo completo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Repositórios repetem setup e lint em jobs existentes, sem runners ou jobs adicionais. Qual abstração é mais adequada?

1. Ação composta. **[CORRECT]**

   Uma ação composta reúne etapas run ou uses.

2. Grupo de runners.

   Grupos controlam acesso à capacidade.

3. Asset de release sem metadados.

   Um asset sem metadados não define execução.

4. Evento workflow\_run.

   Um evento não encapsula etapas.

**Concept:** Uso de ações compostas

**Authored coaching hints:**

- Qual é a menor unidade necessária?
- Ela precisa controlar um grafo inteiro?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action>

<!-- certification-coach-question:actions-102:85578b7955f87b06dce77112b0b2cdc24e266ac6f7b257b89b588530ac74948a -->
## Question 102: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-102`

**Content revision:** `85578b7955f87b06dce77112b0b2cdc24e266ac6f7b257b89b588530ac74948a`

### English

A custom action repository contains source code but GitHub cannot recognize the action's execution definition. Which file is required in the referenced action directory?

1. workflow.properties.json

   properties.json metadata describes workflow templates, not an action's runtime.

2. action.yml or action.yaml **[CORRECT]**

   Action metadata declares its identity, interface, and runs configuration.

3. CODEOWNERS only

   CODEOWNERS helps assign reviews but does not define action execution.

4. A file named GITHUB\_TOKEN

   A token-named file is not action metadata and must not store credentials.

**Concept:** Action metadata discovery

**Authored coaching hints:**

- Which manifest tells the runner how this component executes?
- How does action metadata differ from workflow YAML?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción tiene código pero GitHub no reconoce cómo ejecutarla. ¿Qué archivo debe existir en el directorio referenciado?

1. workflow.properties.json

   properties.json describe plantillas.

2. action.yml o action.yaml **[CORRECT]**

   Los metadatos definen identidad, interfaz y ejecución.

3. Solo CODEOWNERS

   CODEOWNERS asigna revisiones.

4. Un archivo GITHUB\_TOKEN

   Un archivo de token no es metadato.

**Concept:** Descubrimiento de metadatos

**Authored coaching hints:**

- ¿Qué manifiesto describe la ejecución?
- ¿Cómo difiere del YAML de un flujo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação tem código, mas GitHub não reconhece como executá-la. Qual arquivo deve existir no diretório referenciado?

1. workflow.properties.json

   properties.json descreve templates.

2. action.yml ou action.yaml **[CORRECT]**

   Metadados definem identidade, interface e execução.

3. Somente CODEOWNERS

   CODEOWNERS atribui revisões.

4. Um arquivo GITHUB\_TOKEN

   Um arquivo de token não é metadado.

**Concept:** Descoberta de metadados

**Authored coaching hints:**

- Qual manifesto descreve a execução?
- Como difere do YAML de um workflow?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-103:736326555407608f91c326f8fbfc9671a3c51ace2776ecee52e1fa8832c2eb7d -->
## Question 103: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-103`

**Content revision:** `736326555407608f91c326f8fbfc9671a3c51ace2776ecee52e1fa8832c2eb7d`

### English

A JavaScript action's compiled entrypoint is dist/index.js. Which metadata pair tells the runner to execute it with the supported Node.js 24 action runtime?

1. runs.using: composite and image: dist/index.js

   Composite actions use steps, not a JavaScript main entrypoint.

2. on: node24 and jobs.main: dist/index.js

   Workflow events do not declare an action's JavaScript runtime.

3. runs.using: node24 and runs.main: dist/index.js **[CORRECT]**

   runs.using selects the runtime and runs.main identifies its executable entrypoint.

4. inputs.runtime: node24 only

   An input does not select the runner's action runtime automatically.

**Concept:** JavaScript action runtime metadata

**Authored coaching hints:**

- Which metadata section specifies execution rather than the caller interface?
- What two facts must the runner know to start the action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El punto de entrada compilado es dist/index.js. ¿Qué metadatos lo ejecutan con Node.js 24 admitido para acciones?

1. runs.using: composite e image: dist/index.js

   Los compuestos usan steps.

2. on: node24 y jobs.main: dist/index.js

   Los eventos no definen runtimes de acciones.

3. runs.using: node24 y runs.main: dist/index.js **[CORRECT]**

   using selecciona runtime y main el archivo.

4. Solo inputs.runtime: node24

   Una entrada no selecciona automáticamente el runtime.

**Concept:** Runtime JavaScript en metadatos

**Authored coaching hints:**

- ¿Qué sección define ejecución, no entradas?
- ¿Qué dos datos necesita el runner para iniciar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O ponto de entrada compilado é dist/index.js. Quais metadados o executam no Node.js 24 compatível com ações?

1. runs.using: composite e image: dist/index.js

   Ações compostas usam steps.

2. on: node24 e jobs.main: dist/index.js

   Eventos não definem runtimes de ações.

3. runs.using: node24 e runs.main: dist/index.js **[CORRECT]**

   using seleciona runtime e main o arquivo.

4. Somente inputs.runtime: node24

   Uma entrada não seleciona o runtime automaticamente.

**Concept:** Runtime JavaScript nos metadados

**Authored coaching hints:**

- Qual seção define execução, não entradas?
- Quais dois dados o runner precisa para iniciar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-104:1bc53924b825c1709302bb9ca9b80bc71d336099de189528cf15424e56cb2d07 -->
## Question 104: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-104`

**Content revision:** `1bc53924b825c1709302bb9ca9b80bc71d336099de189528cf15424e56cb2d07`

### English

A JavaScript action works in its developer's clone but fails for consumers with 'Cannot find module @actions/core'. What distribution defect is most likely?

1. The README lacks a status badge.

   A missing badge does not affect Node module resolution.

2. The consumer has too many runner labels.

   Runner labels do not install JavaScript packages.

3. The workflow name is too long.

   Workflow display names do not determine package availability.

4. The released action does not include its required runtime dependencies or a bundled entrypoint. **[CORRECT]**

   The downloaded action must include everything its entrypoint needs at runtime.

**Concept:** Packaging JavaScript dependencies

**Authored coaching hints:**

- Does the consumer automatically execute npm install inside every downloaded action?
- How can a release differ from the developer's populated working directory?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción funciona localmente pero el consumidor recibe 'Cannot find module @actions/core'. ¿Qué defecto de distribución es probable?

1. Falta una insignia README.

   La insignia no resuelve módulos.

2. Demasiadas etiquetas del runner.

   Las etiquetas no instalan paquetes.

3. Nombre del flujo demasiado largo.

   El nombre no determina dependencias.

4. La versión no incluye dependencias o un punto de entrada empaquetado. **[CORRECT]**

   La acción descargada debe incluir lo requerido al ejecutarse.

**Concept:** Empaquetado de dependencias JavaScript

**Authored coaching hints:**

- ¿Se ejecuta npm install automáticamente para cada acción?
- ¿Cómo difiere una versión distribuida del clon del autor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação funciona localmente, mas o consumidor recebe 'Cannot find module @actions/core'. Qual defeito de distribuição é provável?

1. Falta um selo README.

   O selo não resolve módulos.

2. Rótulos demais no runner.

   Rótulos não instalam pacotes.

3. Nome do workflow muito longo.

   O nome não determina dependências.

4. A versão não inclui dependências ou um ponto de entrada empacotado. **[CORRECT]**

   A ação baixada deve incluir o necessário à execução.

**Concept:** Empacotamento de dependências JavaScript

**Authored coaching hints:**

- npm install executa automaticamente para cada ação?
- Como a versão distribuída difere do clone do autor?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-105:c9a16977198c53805bce5f9dab000b87aa8330859ccb5f077b36b455ed3b0971 -->
## Question 105: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-105`

**Content revision:** `c9a16977198c53805bce5f9dab000b87aa8330859ccb5f077b36b455ed3b0971`

### English

An action author wants to distribute JavaScript dependencies without checking an entire node\_modules tree into the release. Which documented approach fits?

1. Bundle code and dependencies with a tool such as Rollup or ncc and include the generated entrypoint. **[CORRECT]**

   Bundling produces a distributable action entrypoint containing runtime dependencies.

2. List package names only in the README.

   Documentation does not supply executable modules.

3. Store dependencies in GITHUB\_STEP\_SUMMARY.

   Markdown summaries are not package installation mechanisms.

4. Expect the caller's unrelated npm project to provide them.

   Consumers' dependency trees are not a reliable action distribution contract.

**Concept:** Bundled action releases

**Authored coaching hints:**

- What must be present in the action downloaded at the referenced commit?
- Which build output can make the release self-contained?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se quieren distribuir dependencias JavaScript sin incluir todo node\_modules en la versión. ¿Qué enfoque está documentado?

1. Agrupar código y dependencias con Rollup o ncc e incluir el resultado. **[CORRECT]**

   El bundle incluye dependencias necesarias.

2. Listar paquetes solo en README.

   Documentar no aporta módulos ejecutables.

3. Guardar dependencias en GITHUB\_STEP\_SUMMARY.

   Markdown no instala paquetes.

4. Depender del proyecto npm ajeno del llamador.

   Las dependencias del consumidor no son contrato fiable.

**Concept:** Versiones con bundle

**Authored coaching hints:**

- ¿Qué debe contener la acción descargada?
- ¿Qué resultado de compilación la vuelve autosuficiente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

É preciso distribuir dependências JavaScript sem incluir toda a árvore node\_modules. Qual abordagem é documentada?

1. Agrupar código e dependências com Rollup ou ncc e incluir o resultado. **[CORRECT]**

   O bundle inclui dependências necessárias.

2. Listar pacotes somente no README.

   Documentar não fornece módulos executáveis.

3. Guardar dependências em GITHUB\_STEP\_SUMMARY.

   Markdown não instala pacotes.

4. Depender do projeto npm não relacionado do chamador.

   Dependências do consumidor não são contrato confiável.

**Concept:** Versões com bundle

**Authored coaching hints:**

- O que a ação baixada precisa conter?
- Qual resultado de compilação a torna autossuficiente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-106:50c5b2fa1570339440d2f5ea22b7424b6b098cf11a54bf34c8011f9b5b8e49ef -->
## Question 106: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-106`

**Content revision:** `50c5b2fa1570339440d2f5ea22b7424b6b098cf11a54bf34c8011f9b5b8e49ef`

### English

A custom action marks input endpoint as required: true in action.yml. Calls omitting it still reach the code. What must the author understand?

1. Metadata required flags automatically throw in all action types.

   Action input metadata alone does not automatically fail execution for a missing value.

2. The action must validate required input values in its implementation. **[CORRECT]**

   Runtime validation, such as an appropriate required input read, must enforce the contract.

3. Only changing the input name to uppercase enforces it.

   Input capitalization is unrelated to required-value enforcement.

4. An output with the same name validates the input.

   Outputs do not validate whether inputs were supplied.

**Concept:** Action input validation

**Authored coaching hints:**

- Is descriptive metadata identical to runtime enforcement?
- Where can invalid or missing values be rejected with a useful error?

<details>
<summary>Español — same answer key and option order</summary>

### Español

endpoint tiene required: true en action.yml, pero las llamadas sin valor llegan al código. ¿Qué debe comprender el autor?

1. Los metadatos siempre generan una excepción.

   La bandera sola no provoca fallo automático.

2. La implementación debe validar entradas obligatorias. **[CORRECT]**

   La validación runtime debe imponer el contrato.

3. Mayúsculas hacen obligatorio el valor.

   Capitalización no impone requisitos.

4. Una salida homónima valida la entrada.

   Las salidas no validan entradas.

**Concept:** Validación de entradas de acciones

**Authored coaching hints:**

- ¿Metadatos descriptivos equivalen a validación?
- ¿Dónde rechazar valores ausentes con mensajes útiles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

endpoint tem required: true em action.yml, mas chamadas sem valor chegam ao código. O que o autor deve entender?

1. Metadados sempre geram exceção.

   A flag sozinha não provoca falha automática.

2. A implementação deve validar entradas obrigatórias. **[CORRECT]**

   Validação em runtime deve impor o contrato.

3. Maiúsculas tornam o valor obrigatório.

   Capitalização não impõe requisitos.

4. Uma saída homônima valida a entrada.

   Saídas não validam entradas.

**Concept:** Validação de entradas de ações

**Authored coaching hints:**

- Metadados descritivos equivalem a validação?
- Onde rejeitar valores ausentes com mensagens úteis?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-107:cb3bfa92d7d825c57bfe89f43f8c4589e702a95adef8a6998a0afa2e6bb460b9 -->
## Question 107: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-107`

**Content revision:** `cb3bfa92d7d825c57bfe89f43f8c4589e702a95adef8a6998a0afa2e6bb460b9`

### English

A composite action reads INPUT\_TARGET from its shell and gets an empty value even though the caller supplied with.target. Which correction fits composite input behavior?

1. Set permissions: write-all.

   Token permissions do not create composite input environment variables.

2. Rename the caller's repository.

   Repository names do not affect input mapping.

3. Use the inputs context and explicitly map the value into the step's environment. **[CORRECT]**

   Composite actions do not automatically receive INPUT\_\* variables; their inputs context is available.

4. Publish the input as a release tag.

   Release tags select versions rather than transport input values.

**Concept:** Composite input access

**Authored coaching hints:**

- Do all action types receive inputs in the same form?
- How can a value enter a shell as data rather than generated script text?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un compuesto lee INPUT\_TARGET vacío aunque el llamador pasó with.target. ¿Qué corrección corresponde?

1. Conceder write-all.

   Los permisos no crean variables de entrada.

2. Renombrar el repositorio.

   El nombre del repositorio no afecta el mapeo.

3. Usar inputs y mapear el valor explícitamente al entorno del paso. **[CORRECT]**

   Los compuestos no reciben INPUT\_\* automáticamente.

4. Publicar la entrada como etiqueta.

   Las etiquetas seleccionan versiones, no entradas.

**Concept:** Acceso a entradas compuestas

**Authored coaching hints:**

- ¿Todos los tipos reciben entradas igual?
- ¿Cómo pasar datos al shell sin generar código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação composta lê INPUT\_TARGET vazio, embora o chamador passe with.target. Qual correção corresponde?

1. Conceder write-all.

   Permissões não criam variáveis de entrada.

2. Renomear o repositório.

   O nome do repositório não afeta mapeamento.

3. Usar inputs e mapear explicitamente o valor para o ambiente da etapa. **[CORRECT]**

   Ações compostas não recebem INPUT\_\* automaticamente.

4. Publicar a entrada como tag.

   Tags selecionam versões, não entradas.

**Concept:** Acesso a entradas compostas

**Authored coaching hints:**

- Todos os tipos recebem entradas igualmente?
- Como passar dados ao shell sem gerar código?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-108:fd8bbc9256c28ea37b25381816739127d14aebe28cfcfd0026058a4e09e986b0 -->
## Question 108: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-108`

**Content revision:** `fd8bbc9256c28ea37b25381816739127d14aebe28cfcfd0026058a4e09e986b0`

### English

A composite action includes run: ./check.sh but omits shell. Its metadata validation fails. What is the targeted fix?

1. Add on: push inside action.yml.

   Action metadata does not use workflow event declarations.

2. Move the run command to an input description.

   Descriptions do not execute scripts.

3. Set runs.using: workflow\_call.

   workflow\_call is a workflow event, not an action runtime.

4. Specify a supported shell for that composite run step. **[CORRECT]**

   Composite run steps require an explicit shell.

**Concept:** Composite shell requirements

**Authored coaching hints:**

- Who chooses how an embedded script is interpreted?
- What execution detail must a portable step definition state explicitly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un compuesto incluye run: ./check.sh sin shell y falla la validación. ¿Cuál es la solución específica?

1. Añadir on: push a action.yml.

   Los metadatos no usan eventos del flujo.

2. Mover el comando a una descripción.

   Las descripciones no ejecutan código.

3. Definir runs.using: workflow\_call.

   workflow\_call no es runtime de acción.

4. Especificar un shell admitido para ese paso. **[CORRECT]**

   Los pasos run de compuestos requieren shell explícito.

**Concept:** Shell en acciones compuestas

**Authored coaching hints:**

- ¿Quién decide cómo interpretar el script?
- ¿Qué detalle debe declarar explícitamente un paso portátil?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação composta tem run: ./check.sh sem shell e falha na validação. Qual correção específica fazer?

1. Adicionar on: push a action.yml.

   Metadados não usam eventos do workflow.

2. Mover o comando para uma descrição.

   Descrições não executam código.

3. Definir runs.using: workflow\_call.

   workflow\_call não é runtime de ação.

4. Especificar um shell compatível para a etapa. **[CORRECT]**

   Etapas run compostas exigem shell explícito.

**Concept:** Shell em ações compostas

**Authored coaching hints:**

- Quem decide como interpretar o script?
- Qual detalhe uma etapa portátil deve declarar explicitamente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-109:76be085115545dcccdc4d36d7f0b44c05dbd9e1cb49c70e6100791adcfd4c41c -->
## Question 109: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-109`

**Content revision:** `76be085115545dcccdc4d36d7f0b44c05dbd9e1cb49c70e6100791adcfd4c41c`

### English

An internal composite step emits outputs.digest. The outer action promises a digest output to its callers. What must its action metadata add?

1. An outputs.digest.value expression mapped to the internal step output. **[CORRECT]**

   Composite outputs require a value mapping exposing the internal result.

2. A repository description equal to the digest.

   Repository descriptions are not action outputs.

3. A job named digest outside runs.

   Composite action metadata defines steps, not an independent job graph.

4. A cron expression for the output.

   Scheduling does not publish an action output parameter.

**Concept:** Composite output mapping

**Authored coaching hints:**

- Which boundary separates an internal step result from the action's public interface?
- How does the caller know which inner value backs an output name?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso interno emite outputs.digest y la acción compuesta promete digest al llamador. ¿Qué metadato añadir?

1. outputs.digest.value mapeado a la salida interna. **[CORRECT]**

   value expone el resultado interno.

2. Una descripción de repositorio con el digest.

   Las descripciones no son salidas.

3. Un trabajo digest fuera de runs.

   Los compuestos definen pasos, no grafos de trabajos.

4. Un cron para la salida.

   La programación no publica parámetros.

**Concept:** Mapeo de salidas compuestas

**Authored coaching hints:**

- ¿Qué separa el paso interno de la interfaz pública?
- ¿Cómo identifica el llamador qué valor respalda la salida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa interna emite outputs.digest e a ação composta promete digest ao chamador. Qual metadado adicionar?

1. outputs.digest.value mapeado para a saída interna. **[CORRECT]**

   value expõe o resultado interno.

2. Uma descrição de repositório com o digest.

   Descrições não são saídas.

3. Um job digest fora de runs.

   Ações compostas definem etapas, não grafos de jobs.

4. Um cron para a saída.

   Agendamento não publica parâmetros.

**Concept:** Mapeamento de saídas compostas

**Authored coaching hints:**

- O que separa a etapa interna da interface pública?
- Como o chamador identifica o valor por trás da saída?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-110:86a4788dd3a19dbc5605ad47c6a090e125f104f2eceebd84a36c15fd73b64072 -->
## Question 110: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-110`

**Content revision:** `86a4788dd3a19dbc5605ad47c6a090e125f104f2eceebd84a36c15fd73b64072`

### English

A composite action includes scripts in its own repository. A consumer may invoke it from a different workspace directory. Which location identifies the action's own files?

1. github.ref

   A Git ref identifies a revision, not the action's filesystem directory.

2. github.action\_path or GITHUB\_ACTION\_PATH **[CORRECT]**

   The action path identifies where the composite action's files reside.

3. The caller's repository description.

   Descriptions are not filesystem locations.

4. The organization's display name.

   Organization names do not locate downloaded script files.

**Concept:** Locating composite action resources

**Authored coaching hints:**

- Are the scripts part of the caller's checkout or the downloaded action?
- Which path remains meaningful when the caller's working directory changes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un compuesto incluye scripts propios, pero el llamador puede usar otro directorio de trabajo. ¿Qué ubicación identifica los archivos de la acción?

1. github.ref

   La referencia no es un directorio.

2. github.action\_path o GITHUB\_ACTION\_PATH **[CORRECT]**

   action\_path identifica los archivos del compuesto.

3. La descripción del repositorio llamador.

   Las descripciones no son rutas.

4. El nombre de la organización.

   La organización no ubica scripts descargados.

**Concept:** Recursos de acciones compuestas

**Authored coaching hints:**

- ¿Los scripts pertenecen al checkout o a la acción descargada?
- ¿Qué ruta sirve aunque cambie el directorio del llamador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação composta inclui scripts próprios, mas o chamador pode usar outro diretório. Qual localização identifica os arquivos da ação?

1. github.ref

   Referência não é diretório.

2. github.action\_path ou GITHUB\_ACTION\_PATH **[CORRECT]**

   action\_path identifica arquivos da ação composta.

3. A descrição do repositório chamador.

   Descrições não são caminhos.

4. O nome da organização.

   A organização não localiza scripts baixados.

**Concept:** Recursos de ações compostas

**Authored coaching hints:**

- Os scripts pertencem ao checkout ou à ação baixada?
- Qual caminho serve mesmo mudando o diretório do chamador?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-111:e77eeb9cbf370b57a546c1401e761aba8e8597e99a5ca3891a675c0324a1704f -->
## Question 111: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-111`

**Content revision:** `e77eeb9cbf370b57a546c1401e761aba8e8597e99a5ca3891a675c0324a1704f`

### English

A JavaScript action detects an unrecoverable validation error. It must report the error and make the step fail. Which toolkit call is appropriate?

1. core.info('validation failed') only.

   Informational logging alone does not set a failing exit status.

2. core.debug('validation failed') only.

   Debug logging alone does not fail the action.

3. core.setFailed('validation failed') **[CORRECT]**

   core.setFailed reports the message and sets a failing exit code.

4. core.setOutput('failure', 'true') only.

   An output value is data and does not itself fail execution.

**Concept:** Action failure reporting

**Authored coaching hints:**

- How do logging severity and process exit status differ?
- What should a caller's job result indicate for an unrecoverable error?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript detecta validación irrecuperable y debe informar el error y fallar. ¿Qué llamada corresponde?

1. Solo core.info('validation failed').

   Informar no establece fallo.

2. Solo core.debug('validation failed').

   Depurar no establece fallo.

3. core.setFailed('validation failed') **[CORRECT]**

   setFailed informa y define código de salida fallido.

4. Solo core.setOutput('failure', 'true').

   Una salida es dato, no estado de ejecución.

**Concept:** Notificación de fallos

**Authored coaching hints:**

- ¿Cómo difieren severidad y código de salida?
- ¿Qué resultado debe observar el llamador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript detecta validação irrecuperável e deve informar o erro e falhar. Qual chamada corresponde?

1. Somente core.info('validation failed').

   Informar não define falha.

2. Somente core.debug('validation failed').

   Depurar não define falha.

3. core.setFailed('validation failed') **[CORRECT]**

   setFailed informa e define código de saída malsucedido.

4. Somente core.setOutput('failure', 'true').

   Uma saída é dado, não status de execução.

**Concept:** Notificação de falhas

**Authored coaching hints:**

- Como severidade e código de saída diferem?
- Qual resultado o chamador deve observar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-112:f23b746de1d08f9b80759f46bbc38a9213c0e37e74339002a6529765639ad27b -->
## Question 112: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-112`

**Content revision:** `f23b746de1d08f9b80759f46bbc38a9213c0e37e74339002a6529765639ad27b`

### English

A custom action discovers a file-specific lint problem. It should place an annotation on line 12 of app.js while keeping the reporting mechanism separate from its exit policy. What command fits?

1. ::group::app.js

   Grouping controls log presentation rather than file annotations.

2. Append app.js to GITHUB\_PATH.

   Adding a file path to PATH does not annotate source.

3. Write line=12 into GITHUB\_ENV.

   Environment variables do not create check annotations.

4. ::error file=app.js,line=12::Lint problem **[CORRECT]**

   The error workflow command attaches an error annotation to the specified file and line.

**Concept:** Source-linked action annotations

**Authored coaching hints:**

- What metadata lets a diagnostic point to a precise code location?
- Is rendering an annotation the same operation as returning a failure code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción debe anotar un error en app.js, línea 12, separadamente de decidir el código de salida. ¿Qué comando corresponde?

1. ::group::app.js

   group organiza registros.

2. Añadir app.js a GITHUB\_PATH.

   PATH no anota código.

3. Escribir line=12 en GITHUB\_ENV.

   Las variables no crean anotaciones.

4. ::error file=app.js,line=12::Lint problem **[CORRECT]**

   error asocia la anotación al archivo y línea.

**Concept:** Anotaciones vinculadas al código

**Authored coaching hints:**

- ¿Qué metadatos ubican un diagnóstico?
- ¿Mostrar anotación equivale a devolver un código fallido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação deve anotar erro em app.js, linha 12, separadamente de decidir o código de saída. Qual comando corresponde?

1. ::group::app.js

   group organiza logs.

2. Adicionar app.js a GITHUB\_PATH.

   PATH não anota código.

3. Escrever line=12 em GITHUB\_ENV.

   Variáveis não criam anotações.

4. ::error file=app.js,line=12::Lint problem **[CORRECT]**

   error associa anotação a arquivo e linha.

**Concept:** Anotações vinculadas ao código

**Authored coaching hints:**

- Quais metadados localizam um diagnóstico?
- Exibir anotação equivale a retornar código de falha?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-113:01be6ff310e3e1476049bca9faf4800a224bbaba8763e05439d56fc13d042bc0 -->
## Question 113: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-113`

**Content revision:** `01be6ff310e3e1476049bca9faf4800a224bbaba8763e05439d56fc13d042bc0`

### English

An action's setup phase creates a resource identifier that its cleanup phase must retrieve. The value need not become a general output for other jobs. Which runner mechanism is intended for action pre/post state?

1. GITHUB\_STATE, available to the action through STATE\_ variables. **[CORRECT]**

   GITHUB\_STATE shares state with the same action's pre/post execution phases.

2. A public repository issue containing the identifier.

   Publishing state in an issue is unnecessary and may expose internal information.

3. A Marketplace category.

   Categories support discovery, not lifecycle state.

4. The workflow's badge URL.

   Badges do not transfer cleanup state.

**Concept:** Action lifecycle state

**Authored coaching hints:**

- Who needs this value: another workflow or another phase of the same action?
- Which state channel has the narrowest suitable scope?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La inicialización de una acción produce un identificador que necesita su limpieza, no otros trabajos. ¿Qué mecanismo comunica estado pre/post?

1. GITHUB\_STATE y variables STATE\_. **[CORRECT]**

   STATE comparte valores entre fases de la misma acción.

2. Un issue público con el identificador.

   Publicarlo es innecesario y potencialmente sensible.

3. Una categoría Marketplace.

   Las categorías ayudan a descubrir acciones.

4. La URL de la insignia.

   Las insignias no transportan estado.

**Concept:** Estado del ciclo de vida de acciones

**Authored coaching hints:**

- ¿Necesita el valor otro flujo u otra fase de la acción?
- ¿Cuál es el canal con alcance adecuado más estrecho?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A inicialização gera um identificador necessário à limpeza da mesma ação, não a outros jobs. Qual mecanismo comunica estado pre/post?

1. GITHUB\_STATE e variáveis STATE\_. **[CORRECT]**

   STATE compartilha valores entre fases da mesma ação.

2. Uma issue pública com o identificador.

   Publicar é desnecessário e potencialmente sensível.

3. Uma categoria Marketplace.

   Categorias ajudam a descobrir ações.

4. A URL do selo.

   Selos não transportam estado.

**Concept:** Estado do ciclo de vida de ações

**Authored coaching hints:**

- Outro workflow ou outra fase da ação precisa do valor?
- Qual canal tem o menor escopo adequado?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-114:dd9b998057791847e7a8f80a5c263a1b556923a654a62c23c275c661d926e16e -->
## Question 114: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-114`

**Content revision:** `dd9b998057791847e7a8f80a5c263a1b556923a654a62c23c275c661d926e16e`

### English

A JavaScript action should clean up a temporary external session at the end of the job, even if later steps fail. Which metadata feature defines its cleanup script?

1. on.completed

   Action metadata has no on.completed lifecycle event.

2. runs.post, with its default always() post condition. **[CORRECT]**

   runs.post defines an end-of-job script and defaults to always() unless overridden.

3. inputs.cleanup.description

   An input description does not register cleanup code.

4. jobs.cleanup inside action.yml

   Actions do not define independent workflow jobs in their metadata.

**Concept:** JavaScript post execution

**Authored coaching hints:**

- When should cleanup occur relative to the action's main step and the rest of the job?
- Which metadata belongs to the action lifecycle rather than workflow triggers?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript debe cerrar una sesión externa al terminar el trabajo aunque fallen pasos posteriores. ¿Qué metadato define la limpieza?

1. on.completed

   No existe ese evento de metadatos.

2. runs.post con su condición predeterminada always(). **[CORRECT]**

   post registra limpieza al final del trabajo.

3. inputs.cleanup.description

   Describir una entrada no registra código.

4. jobs.cleanup en action.yml

   Las acciones no definen trabajos independientes.

**Concept:** Ejecución post de JavaScript

**Authored coaching hints:**

- ¿Cuándo debe limpiarse respecto a main y al resto del trabajo?
- ¿Qué metadatos pertenecen al ciclo de la acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript deve encerrar sessão externa no fim do job mesmo se etapas posteriores falharem. Qual metadado define a limpeza?

1. on.completed

   Não existe esse evento nos metadados.

2. runs.post com condição padrão always(). **[CORRECT]**

   post registra limpeza ao fim do job.

3. inputs.cleanup.description

   Descrever entrada não registra código.

4. jobs.cleanup em action.yml

   Ações não definem jobs independentes.

**Concept:** Execução post de JavaScript

**Authored coaching hints:**

- Quando limpar em relação a main e ao resto do job?
- Quais metadados pertencem ao ciclo da ação?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-115:77a2fbe2e029f3e92546c7ae80f8a4f58aa3430cc9764771957b513f49e219aa -->
## Question 115: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-115`

**Content revision:** `77a2fbe2e029f3e92546c7ae80f8a4f58aa3430cc9764771957b513f49e219aa`

### English

A Docker action receives a target input that its entrypoint expects as its first command-line argument. How should metadata connect the input to the container process?

1. Set a workflow branch filter named target.

   Branch filters do not provide container process arguments.

2. Put the input only in branding.

   Branding changes visual appearance, not runtime data flow.

3. Include the input expression in runs.args. **[CORRECT]**

   runs.args supplies arguments to the container entrypoint, including mapped inputs.

4. Declare a runner group named target.

   Runner groups control access to machines rather than action arguments.

**Concept:** Docker action input arguments

**Authored coaching hints:**

- Does the program expect an environment variable or an argument?
- Which part of Docker action metadata supplies the process argument list?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker espera target como primer argumento del entrypoint. ¿Cómo conectarlo desde los metadatos?

1. Un filtro de ramas target.

   Los filtros no pasan argumentos.

2. Solo branding.

   Branding no transmite datos.

3. La expresión de entrada en runs.args. **[CORRECT]**

   runs.args suministra argumentos al entrypoint.

4. Un grupo de runners target.

   Los grupos no configuran argumentos.

**Concept:** Argumentos de entradas Docker

**Authored coaching hints:**

- ¿El programa espera variable o argumento?
- ¿Qué metadato suministra la lista de argumentos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker espera target como primeiro argumento do entrypoint. Como conectá-lo pelos metadados?

1. Um filtro de branches target.

   Filtros não passam argumentos.

2. Somente branding.

   Branding não transmite dados.

3. A expressão da entrada em runs.args. **[CORRECT]**

   runs.args fornece argumentos ao entrypoint.

4. Um grupo de runners target.

   Grupos não configuram argumentos.

**Concept:** Argumentos de entradas Docker

**Authored coaching hints:**

- O programa espera variável ou argumento?
- Qual metadado fornece a lista de argumentos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-116:b4c1b00a1b5540098c7806896a41e9418d70dd93f7a9f6f3b860a630cd0c0e7a -->
## Question 116: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-116`

**Content revision:** `b4c1b00a1b5540098c7806896a41e9418d70dd93f7a9f6f3b860a630cd0c0e7a`

### English

An author references image: Dockerfile in a Docker action's metadata. Relative to which location must that Dockerfile path resolve?

1. Always the caller's home directory.

   The caller's home directory is not the base for action image metadata.

2. The GitHub website's root.

   Website URL paths do not locate build files.

3. The organization's template directory.

   Workflow templates are unrelated to the action's image definition.

4. The action metadata file's directory. **[CORRECT]**

   A local Dockerfile path is relative to the action metadata file.

**Concept:** Dockerfile metadata paths

**Authored coaching hints:**

- Which downloaded component owns this Dockerfile?
- How can an action remain self-contained across different callers?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker declara image: Dockerfile. ¿Con respecto a qué ubicación se resuelve esa ruta?

1. Siempre el home del llamador.

   El home no es la base.

2. La raíz del sitio GitHub.

   Las rutas web no ubican archivos de compilación.

3. El directorio de plantillas organizacionales.

   Las plantillas son otro componente.

4. El directorio del archivo de metadatos de la acción. **[CORRECT]**

   La ruta local es relativa a los metadatos.

**Concept:** Rutas de Dockerfile

**Authored coaching hints:**

- ¿Qué componente descargado posee el Dockerfile?
- ¿Cómo mantenerse autosuficiente para distintos llamadores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker declara image: Dockerfile. Em relação a qual localização esse caminho é resolvido?

1. Sempre o home do chamador.

   O home não é a base.

2. A raiz do site GitHub.

   Caminhos web não localizam arquivos de build.

3. O diretório de templates organizacionais.

   Templates são outro componente.

4. O diretório do arquivo de metadados da ação. **[CORRECT]**

   O caminho local é relativo aos metadados.

**Concept:** Caminhos de Dockerfile

**Authored coaching hints:**

- Qual componente baixado possui o Dockerfile?
- Como permanecer autossuficiente para chamadores diferentes?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-117:ee425afca6fe21f9ae38b3ed7ffc62686d268ab6b3a839b8f16f84a47a3d019a -->
## Question 117: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-117`

**Content revision:** `ee425afca6fe21f9ae38b3ed7ffc62686d268ab6b3a839b8f16f84a47a3d019a`

### English

A Docker action writes its report under the mounted GITHUB\_WORKSPACE. Why is this preferable to writing only into an unmounted container-private directory when later workflow steps need the file?

1. Workspace files remain accessible to later steps in the job. **[CORRECT]**

   The workspace mount connects container writes to the job's shared working files.

2. It automatically publishes the file to Marketplace.

   Workspace writes do not publish Marketplace assets.

3. It grants the file organization-admin permissions.

   Files do not acquire GitHub administrative privileges.

4. It makes the report a reusable workflow.

   A report file does not become an executable workflow definition.

**Concept:** Container action output files

**Authored coaching hints:**

- Which directories are visible on both sides of the container boundary?
- What happens to files left only in a container's private filesystem?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker escribe un informe en GITHUB\_WORKSPACE montado. ¿Por qué sirve más que un directorio privado del contenedor para pasos posteriores?

1. Los archivos del workspace quedan disponibles en pasos posteriores. **[CORRECT]**

   El montaje comparte escrituras con el trabajo.

2. Publica automáticamente en Marketplace.

   No hay publicación automática.

3. Concede permisos de administrador.

   Los archivos no reciben autoridad GitHub.

4. Convierte el informe en flujo reutilizable.

   Un informe no es un flujo ejecutable.

**Concept:** Archivos de salida de contenedores

**Authored coaching hints:**

- ¿Qué directorios son visibles a ambos lados?
- ¿Qué pasa con archivos solo privados del contenedor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker escreve relatório no GITHUB\_WORKSPACE montado. Por que isso ajuda etapas posteriores mais que um diretório privado?

1. Arquivos do workspace ficam disponíveis às etapas seguintes. **[CORRECT]**

   A montagem compartilha escritas com o job.

2. Publica automaticamente no Marketplace.

   Não há publicação automática.

3. Concede privilégios de administrador.

   Arquivos não recebem autoridade GitHub.

4. Transforma o relatório em workflow reutilizável.

   Relatório não é workflow executável.

**Concept:** Arquivos de saída de contêineres

**Authored coaching hints:**

- Quais diretórios são visíveis dos dois lados?
- O que ocorre com arquivos somente privados do contêiner?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action>

<!-- certification-coach-question:actions-118:981d774726023b44723c88f97b64cf608c6df1c493bafced64010f6f268f927a -->
## Question 118: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-118`

**Content revision:** `981d774726023b44723c88f97b64cf608c6df1c493bafced64010f6f268f927a`

### English

An action's Dockerfile declares a custom USER and then fails to access GITHUB\_WORKSPACE. Which documented constraint should the author investigate?

1. Docker actions must run on macOS.

   Docker actions require Linux runners, not macOS.

2. GitHub's workspace access expects the default root container user; USER can cause access problems. **[CORRECT]**

   GitHub warns that setting USER can prevent container actions from accessing the mounted workspace.

3. All Dockerfiles must omit FROM.

   FROM specifies the image base and is not the problem described.

4. Workspace access requires an enterprise-owner PAT.

   A PAT cannot fix a local filesystem ownership mismatch.

**Concept:** Docker action user constraints

**Authored coaching hints:**

- Is this an API authorization problem or a container filesystem problem?
- What identity owns the mounted workspace during container action execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un Dockerfile define USER y después no puede acceder a GITHUB\_WORKSPACE. ¿Qué restricción documentada investigar?

1. Las acciones Docker requieren macOS.

   Requieren Linux, no macOS.

2. El workspace espera root por defecto; USER puede impedir acceso. **[CORRECT]**

   Cambiar USER puede romper acceso al montaje.

3. Todo Dockerfile debe omitir FROM.

   FROM no es el problema descrito.

4. Se requiere PAT del dueño empresarial.

   Un PAT no arregla propiedad del sistema de archivos.

**Concept:** Usuario de acciones Docker

**Authored coaching hints:**

- ¿Es autorización API o acceso a archivos?
- ¿Qué identidad accede al workspace montado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um Dockerfile define USER e depois não acessa GITHUB\_WORKSPACE. Qual restrição documentada investigar?

1. Ações Docker exigem macOS.

   Exigem Linux, não macOS.

2. O workspace espera root padrão; USER pode impedir acesso. **[CORRECT]**

   Alterar USER pode quebrar acesso à montagem.

3. Todo Dockerfile deve omitir FROM.

   FROM não é o problema descrito.

4. É necessário PAT do proprietário empresarial.

   Um PAT não corrige propriedade de arquivos.

**Concept:** Usuário de ações Docker

**Authored coaching hints:**

- É autorização de API ou acesso a arquivos?
- Qual identidade acessa o workspace montado?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dockerfile-support>

<!-- certification-coach-question:actions-119:55bbb6b09508778fa63e9192875341eed2c843942bda11977e0506c21f4735cd -->
## Question 119: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-119`

**Content revision:** `55bbb6b09508778fa63e9192875341eed2c843942bda11977e0506c21f4735cd`

### English

A Docker action specifies runs.entrypoint in action.yml as well as ENTRYPOINT in its Dockerfile. Which entrypoint takes precedence?

1. The Dockerfile always wins.

   Docker action metadata can explicitly override the image entrypoint.

2. Both run concurrently.

   The two definitions do not create parallel main processes.

3. The action metadata's runs.entrypoint overrides the Dockerfile entrypoint. **[CORRECT]**

   runs.entrypoint sets or replaces the Docker ENTRYPOINT used for the action.

4. The workflow name becomes the entrypoint.

   Workflow display names do not specify executable entrypoints.

**Concept:** Docker action entrypoint precedence

**Authored coaching hints:**

- Which configuration is applied when launching this specific action?
- What does an explicit launch-time override normally replace?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción define runs.entrypoint y su Dockerfile también ENTRYPOINT. ¿Cuál prevalece?

1. Siempre Dockerfile.

   Los metadatos permiten reemplazarlo.

2. Ambos simultáneamente.

   No se crean dos procesos principales.

3. runs.entrypoint reemplaza el ENTRYPOINT de Dockerfile. **[CORRECT]**

   entrypoint de la acción define el comando efectivo.

4. El nombre del flujo.

   Los nombres no son ejecutables.

**Concept:** Precedencia de entrypoint

**Authored coaching hints:**

- ¿Qué ajuste se aplica al lanzar esta acción?
- ¿Qué reemplaza una opción explícita de lanzamiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação define runs.entrypoint e o Dockerfile também ENTRYPOINT. Qual prevalece?

1. Sempre Dockerfile.

   Metadados permitem substituí-lo.

2. Ambos simultaneamente.

   Não são criados dois processos principais.

3. runs.entrypoint substitui ENTRYPOINT do Dockerfile. **[CORRECT]**

   O entrypoint da ação define o comando efetivo.

4. O nome do workflow.

   Nomes não são executáveis.

**Concept:** Precedência de entrypoint

**Authored coaching hints:**

- Qual ajuste se aplica ao lançar essa ação?
- O que uma opção explícita de lançamento substitui?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-120:60d9b3f41827714f89f551d804b41e776d6b38141545d3f14abcacdb738400fd -->
## Question 120: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-120`

**Content revision:** `60d9b3f41827714f89f551d804b41e776d6b38141545d3f14abcacdb738400fd`

### English

An action author wants to warn users when they still supply a deprecated input named legacy-mode. Which metadata field supports that targeted warning?

1. branding.color

   Branding affects display styling, not migration warnings.

2. outputs.legacy-mode

   An output declaration does not detect use of an old input.

3. runs.main

   The entrypoint path does not declare input deprecation messages.

4. inputs.legacy-mode.deprecationMessage **[CORRECT]**

   deprecationMessage logs a warning when the deprecated input is used.

**Concept:** Input deprecation guidance

**Authored coaching hints:**

- Should the warning be tied to the action as a whole or to use of one interface field?
- Where is that interface field described?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El autor quiere advertir cuando se proporciona la entrada obsoleta legacy-mode. ¿Qué campo usar?

1. branding.color

   El color no genera migraciones.

2. outputs.legacy-mode

   Una salida no detecta uso de entrada.

3. runs.main

   main selecciona código.

4. inputs.legacy-mode.deprecationMessage **[CORRECT]**

   deprecationMessage advierte al usar esa entrada.

**Concept:** Obsolescencia de entradas

**Authored coaching hints:**

- ¿La advertencia corresponde a toda la acción o a un campo?
- ¿Dónde se describe ese campo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O autor quer avisar quando a entrada obsoleta legacy-mode é fornecida. Qual campo usar?

1. branding.color

   Cor não gera avisos de migração.

2. outputs.legacy-mode

   Uma saída não detecta uso de entrada.

3. runs.main

   main seleciona código.

4. inputs.legacy-mode.deprecationMessage **[CORRECT]**

   deprecationMessage avisa ao usar aquela entrada.

**Concept:** Obsolescência de entradas

**Authored coaching hints:**

- O aviso corresponde à ação inteira ou a um campo?
- Onde esse campo é descrito?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-121:073c13ad86ae00a182582356e13663c9fc8685eca795e7d8487bc0d6e09756bf -->
## Question 121: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-121`

**Content revision:** `073c13ad86ae00a182582356e13663c9fc8685eca795e7d8487bc0d6e09756bf`

### English

A team changes a required action input's meaning incompatibly. Under semantic versioning, which release strategy most clearly communicates the break to consumers?

1. Publish a new major version and document migration. **[CORRECT]**

   A new major version signals incompatible interface changes and lets users migrate deliberately.

2. Silently replace every existing release's files.

   Replacing old versions undermines reproducibility and consumer expectations.

3. Change only the README badge color.

   Visual badge changes do not convey a versioned interface contract.

4. Keep the same immutable release tag and force-push it.

   An immutable release tag cannot be moved to implement a breaking update.

**Concept:** Action semantic versioning

**Authored coaching hints:**

- What signal should distinguish compatible maintenance from a contract break?
- How can existing callers stay on their known version during migration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cambia incompatiblemente el significado de una entrada obligatoria. ¿Qué estrategia semántica comunica mejor la ruptura?

1. Publicar nueva versión mayor y documentar migración. **[CORRECT]**

   La versión mayor comunica incompatibilidad.

2. Reemplazar silenciosamente versiones antiguas.

   Reemplazar perjudica reproducibilidad.

3. Cambiar solo el color de la insignia.

   El color no expresa contrato.

4. Forzar la misma etiqueta inmutable.

   Las etiquetas inmutables no se mueven.

**Concept:** Versionado semántico de acciones

**Authored coaching hints:**

- ¿Cómo señalar cambios compatibles frente a rupturas?
- ¿Cómo conservar versiones conocidas durante migración?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O significado de uma entrada obrigatória muda de modo incompatível. Qual estratégia semântica comunica melhor a quebra?

1. Publicar nova versão principal e documentar migração. **[CORRECT]**

   Versão principal comunica incompatibilidade.

2. Substituir versões antigas silenciosamente.

   Substituir prejudica reprodutibilidade.

3. Mudar só a cor do selo.

   Cor não expressa contrato.

4. Forçar a mesma tag imutável.

   Tags imutáveis não podem ser movidas.

**Concept:** Versionamento semântico de ações

**Authored coaching hints:**

- Como sinalizar mudanças compatíveis versus quebras?
- Como manter versões conhecidas durante migração?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-122:3b7c912063dd5c139cf142a97da3dfb0decba2ef7f72ad52757af0a29bded2fe -->
## Question 122: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-122`

**Content revision:** `3b7c912063dd5c139cf142a97da3dfb0decba2ef7f72ad52757af0a29bded2fe`

### English

An action publisher uses mutable major tags such as v2, while full release tags select individual versions. What should a consumer understand about uses: owner/action@v2?

1. It is guaranteed to identify one commit forever.

   A mutable major tag can be moved to a later compatible release.

2. It may receive compatible updates as the maintainer moves that major tag. **[CORRECT]**

   Moving major tags offer convenient updates but are less fixed than commit references.

3. It always selects the repository's default branch.

   A version tag and the default branch are distinct refs.

4. It prevents all dependency vulnerabilities automatically.

   Version selection alone does not prove absence of vulnerabilities.

**Concept:** Floating major action tags

**Authored coaching hints:**

- Is this reference a content identifier or a maintainer-managed pointer?
- What trade-off exists between automatic maintenance and fixed execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El autor mantiene etiquetas mayores móviles como v2 y etiquetas completas por versión. ¿Qué implica owner/action@v2?

1. Identifica un commit para siempre.

   Una etiqueta mutable puede cambiar.

2. Puede recibir actualizaciones compatibles al mover la etiqueta mayor. **[CORRECT]**

   Facilita actualizaciones, pero no fija contenido.

3. Siempre selecciona la rama predeterminada.

   Etiqueta y rama son referencias distintas.

4. Evita automáticamente vulnerabilidades.

   Seleccionar versión no prueba seguridad.

**Concept:** Etiquetas mayores flotantes

**Authored coaching hints:**

- ¿Es identidad de contenido o puntero administrado?
- ¿Qué se intercambia entre mantenimiento automático y estabilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O autor mantém tags principais móveis como v2 e tags completas por versão. O que owner/action@v2 implica?

1. Identifica um commit para sempre.

   Uma tag mutável pode mudar.

2. Pode receber atualizações compatíveis ao mover a tag principal. **[CORRECT]**

   Facilita atualizações, mas não fixa conteúdo.

3. Sempre seleciona a branch padrão.

   Tag e branch são referências distintas.

4. Evita vulnerabilidades automaticamente.

   Selecionar versão não prova segurança.

**Concept:** Tags principais flutuantes

**Authored coaching hints:**

- É identidade de conteúdo ou ponteiro administrado?
- Qual troca existe entre manutenção automática e estabilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-123:ad2e2fb304e71a351f95116775782e881dc7429f880e9b55f38464398bcb764b -->
## Question 123: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-123`

**Content revision:** `ad2e2fb304e71a351f95116775782e881dc7429f880e9b55f38464398bcb764b`

### English

Immutable releases are enabled for an action repository. After publishing v2.3.0, the author discovers that an asset is wrong. What is the appropriate release response?

1. Overwrite the published asset in place.

   Published immutable release assets cannot be replaced.

2. Move v2.3.0 to another commit.

   The associated immutable release tag is locked to its commit.

3. Publish a corrected new version rather than mutate the immutable release. **[CORRECT]**

   A new version preserves the integrity guarantees of the existing release.

4. Assume marking the release latest unlocks its assets.

   Latest status is editable metadata, not an unlock for protected assets.

**Concept:** Immutable action release maintenance

**Authored coaching hints:**

- Which parts of an immutable release are intentionally locked?
- How can a publisher correct a mistake without changing previously consumed content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con lanzamientos inmutables, v2.3.0 se publicó con un asset incorrecto. ¿Qué debe hacer el autor?

1. Sobrescribir el asset.

   Los assets publicados están protegidos.

2. Mover v2.3.0 a otro commit.

   La etiqueta está bloqueada al commit.

3. Publicar una versión corregida nueva. **[CORRECT]**

   Otra versión conserva garantías de integridad.

4. Marcar latest para desbloquearlo.

   latest no desbloquea contenido.

**Concept:** Mantenimiento de versiones inmutables

**Authored coaching hints:**

- ¿Qué partes quedan bloqueadas?
- ¿Cómo corregir sin cambiar contenido ya consumido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com releases imutáveis, v2.3.0 foi publicada com um asset incorreto. O que o autor deve fazer?

1. Sobrescrever o asset.

   Assets publicados são protegidos.

2. Mover v2.3.0 para outro commit.

   A tag fica vinculada ao commit.

3. Publicar uma nova versão corrigida. **[CORRECT]**

   Outra versão preserva garantias de integridade.

4. Marcar latest para desbloquear.

   latest não desbloqueia conteúdo.

**Concept:** Manutenção de versões imutáveis

**Authored coaching hints:**

- Quais partes ficam bloqueadas?
- Como corrigir sem mudar conteúdo já consumido?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases>

<!-- certification-coach-question:actions-124:5ffa390628d583d0f9d1aefadbb78a8a1ce025bb68e2acc758083af0c3d4f72d -->
## Question 124: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-124`

**Content revision:** `5ffa390628d583d0f9d1aefadbb78a8a1ce025bb68e2acc758083af0c3d4f72d`

### English

An author will publish an immutable release containing compiled action assets. Which sequence avoids discovering that more assets must be attached after publication?

1. Publish first, upload all binaries later.

   Publication locks immutable release assets, preventing later additions as a correction strategy.

2. Publish and repeatedly move the associated tag.

   Moving the immutable tag violates its protected identity.

3. Only edit release notes instead of building the code.

   Release notes do not supply missing runtime assets.

4. Draft the release, attach and verify all assets, then publish. **[CORRECT]**

   Preparing all assets in a draft completes the package before immutability is enforced.

**Concept:** Preparing immutable releases

**Authored coaching hints:**

- When does a release become locked?
- At what stage can the publisher still complete the package safely?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se publicará un lanzamiento inmutable con assets compilados. ¿Qué secuencia evita descubrir archivos faltantes después de publicar?

1. Publicar y luego subir binarios.

   La publicación bloquea los assets.

2. Publicar y mover repetidamente la etiqueta.

   La etiqueta inmutable no se mueve.

3. Solo editar notas, sin compilar.

   Las notas no aportan código faltante.

4. Crear borrador, adjuntar y verificar assets, publicar. **[CORRECT]**

   El borrador permite completar el paquete antes del bloqueo.

**Concept:** Preparación de lanzamientos inmutables

**Authored coaching hints:**

- ¿Cuándo se impone el bloqueo?
- ¿En qué etapa aún puede completarse el paquete?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma release imutável terá assets compilados. Qual sequência evita descobrir arquivos faltantes após publicar?

1. Publicar e depois enviar binários.

   A publicação bloqueia assets.

2. Publicar e mover repetidamente a tag.

   A tag imutável não pode ser movida.

3. Só editar notas, sem compilar.

   Notas não fornecem código ausente.

4. Criar rascunho, anexar e verificar assets, publicar. **[CORRECT]**

   O rascunho permite completar o pacote antes do bloqueio.

**Concept:** Preparação de releases imutáveis

**Authored coaching hints:**

- Quando o bloqueio é imposto?
- Em qual etapa ainda é possível completar o pacote?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases>

<!-- certification-coach-question:actions-125:763623f2bdc92ab35d3378e905a4ce2665e2d220cedc8763749d7213861bd8a3 -->
## Question 125: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-125`

**Content revision:** `763623f2bdc92ab35d3378e905a4ce2665e2d220cedc8763749d7213861bd8a3`

### English

An organization wants its action discoverable in GitHub Marketplace. Which repository arrangement meets the documented listing requirement?

1. A public repository with one root action metadata file for the listed action. **[CORRECT]**

   Marketplace listings require a public repository and a root action metadata file.

2. A private repository containing only workflow logs.

   Private logs do not satisfy Marketplace action publication requirements.

3. An issue containing the action's source code.

   Issue content is not a packaged action repository.

4. A repository without action.yml or action.yaml.

   An action cannot be listed without its required metadata.

**Concept:** Marketplace publication prerequisites

**Authored coaching hints:**

- What must users be able to discover and execute?
- Where does Marketplace obtain the action's identity and runtime definition?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción debe descubrirse en Marketplace. ¿Qué disposición cumple el requisito documentado?

1. Repositorio público con un metadato de acción en la raíz para la acción listada. **[CORRECT]**

   Marketplace requiere repositorio público y metadatos raíz.

2. Repositorio privado solo con registros.

   Los registros privados no cumplen.

3. Un issue con código.

   Un issue no empaqueta la acción.

4. Repositorio sin action.yml ni action.yaml.

   Sin metadatos no puede publicarse.

**Concept:** Requisitos Marketplace

**Authored coaching hints:**

- ¿Qué deben descubrir y ejecutar los usuarios?
- ¿De dónde obtiene Marketplace identidad y ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação deve ser descoberta no Marketplace. Qual disposição atende ao requisito documentado?

1. Repositório público com um metadado de ação na raiz para a ação listada. **[CORRECT]**

   Marketplace exige repositório público e metadados raiz.

2. Repositório privado só com logs.

   Logs privados não atendem.

3. Uma issue com código.

   Uma issue não empacota a ação.

4. Repositório sem action.yml nem action.yaml.

   Sem metadados não é possível publicar.

**Concept:** Requisitos Marketplace

**Authored coaching hints:**

- O que usuários devem descobrir e executar?
- De onde Marketplace obtém identidade e execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace>

<!-- certification-coach-question:actions-126:9a377e7f5a68cd0f5f570fcd449a4b42a9655bfc3ef991c305faebffc88cfa5e -->
## Question 126: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-126`

**Content revision:** `9a377e7f5a68cd0f5f570fcd449a4b42a9655bfc3ef991c305faebffc88cfa5e`

### English

A public action repository contains a root action and several actions in subdirectories. What happens to the subdirectory actions when the root action is listed in Marketplace?

1. Each automatically receives its own listing.

   Marketplace does not automatically list every subdirectory action.

2. They are not automatically listed merely because their metadata is in a subdirectory. **[CORRECT]**

   The documented automatic listing requirement centers on the root metadata file.

3. Their code is automatically deleted.

   Publishing a listing does not delete other repository code.

4. They become organization secrets.

   Action metadata is not transformed into encrypted secrets.

**Concept:** Marketplace listing granularity

**Authored coaching hints:**

- Does one repository listing enumerate every possible uses subpath?
- Which metadata file drives the main published action listing?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al listar la acción raíz de un repositorio en Marketplace, ¿qué ocurre con las acciones en subdirectorios?

1. Cada una recibe publicación automática.

   No se enumeran automáticamente.

2. No se listan automáticamente por tener metadatos en subcarpetas. **[CORRECT]**

   La publicación se centra en los metadatos raíz.

3. Se elimina su código.

   Publicar no borra código.

4. Se vuelven secretos.

   Los metadatos no se convierten en secretos.

**Concept:** Granularidad de publicaciones

**Authored coaching hints:**

- ¿Una publicación enumera todos los subpaths uses?
- ¿Qué metadatos controlan la publicación principal?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao listar a ação raiz de um repositório no Marketplace, o que ocorre com ações em subdiretórios?

1. Cada uma recebe publicação automática.

   Não são enumeradas automaticamente.

2. Não são listadas automaticamente por terem metadados em subpastas. **[CORRECT]**

   A publicação se concentra nos metadados raiz.

3. Seu código é excluído.

   Publicar não exclui código.

4. Tornam-se segredos.

   Metadados não viram segredos.

**Concept:** Granularidade de publicações

**Authored coaching hints:**

- Uma publicação enumera todos os subpaths uses?
- Quais metadados controlam a publicação principal?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace>

<!-- certification-coach-question:actions-127:60427df6e06eaec0839ed736db67c98007c3d04b4f20fd4fdf3ed85348d8c30a -->
## Question 127: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-127`

**Content revision:** `60427df6e06eaec0839ed736db67c98007c3d04b4f20fd4fdf3ed85348d8c30a`

### English

An author sees 'Publish this Action to the GitHub Marketplace' disabled when preparing a release. Which account-level prerequisite should be checked?

1. Whether the runner uses a GPU.

   GPU hardware does not enable publication controls.

2. Whether all workflow artifacts have expired.

   Artifact expiration is unrelated to Marketplace agreements.

3. Whether the owning account accepted the Marketplace Developer Agreement. **[CORRECT]**

   The publication checkbox can be disabled until the owner accepts the required agreement.

4. Whether the action has exactly four inputs.

   There is no general four-input Marketplace requirement.

**Concept:** Marketplace agreement prerequisite

**Authored coaching hints:**

- Could publication be blocked by a legal/account prerequisite rather than action code?
- Who owns the repository and can accept the publication agreement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La casilla para publicar en Marketplace está deshabilitada al preparar el lanzamiento. ¿Qué requisito de cuenta revisar?

1. Que el runner tenga GPU.

   GPU no habilita publicación.

2. Que los artefactos hayan expirado.

   Retención no afecta acuerdos.

3. Que el propietario acepte Marketplace Developer Agreement. **[CORRECT]**

   La aceptación del acuerdo habilita la opción.

4. Que existan exactamente cuatro entradas.

   No existe requisito de cuatro entradas.

**Concept:** Acuerdo de publicación

**Authored coaching hints:**

- ¿Puede ser un requisito legal y no de código?
- ¿Quién puede aceptar el acuerdo del repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A opção de publicar no Marketplace está desabilitada ao preparar a release. Qual requisito de conta verificar?

1. Se o runner tem GPU.

   GPU não habilita publicação.

2. Se os artefatos expiraram.

   Retenção não afeta acordos.

3. Se o proprietário aceitou o Marketplace Developer Agreement. **[CORRECT]**

   Aceitar o acordo habilita a opção.

4. Se existem exatamente quatro entradas.

   Não existe requisito de quatro entradas.

**Concept:** Acordo de publicação

**Authored coaching hints:**

- Pode ser requisito legal e não de código?
- Quem pode aceitar o acordo do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace>

<!-- certification-coach-question:actions-128:cbb317a8da635b86a2d2736b202e17704cf255e039d63b03a433531ed1b74de5 -->
## Question 128: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-128`

**Content revision:** `cbb317a8da635b86a2d2736b202e17704cf255e039d63b03a433531ed1b74de5`

### English

A team distributes an action only to selected private repositories in the same organization. What should it configure instead of making a public Marketplace listing?

1. Expose its source in a public gist.

   Publishing source publicly defeats the requested private distribution model.

2. Put the access token in its README.

   README credentials expose secrets and do not implement proper sharing controls.

3. Rename its tag to private.

   Tag names do not govern repository access.

4. Set the private action repository's Actions access policy for permitted callers. **[CORRECT]**

   Private action sharing is controlled by the source repository's Actions access settings.

**Concept:** Private action distribution

**Authored coaching hints:**

- Which repository contains the component being shared?
- How does access policy differ from version naming?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción debe compartirse solo con repositorios privados permitidos de la organización. ¿Qué configurar en vez de Marketplace público?

1. Un gist público con el código.

   El gist contradice distribución privada.

2. El token en README.

   El README expone credenciales.

3. Una etiqueta llamada private.

   Las etiquetas no controlan acceso.

4. La política Actions de acceso del repositorio fuente. **[CORRECT]**

   La política fuente gobierna uso privado compartido.

**Concept:** Distribución privada de acciones

**Authored coaching hints:**

- ¿Qué repositorio contiene la implementación?
- ¿Cómo difiere acceso de nombrar versiones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação deve ser compartilhada somente com repositórios privados permitidos da organização. O que configurar em vez de Marketplace público?

1. Um gist público com código.

   O gist contradiz distribuição privada.

2. O token no README.

   O README expõe credenciais.

3. Uma tag chamada private.

   Tags não controlam acesso.

4. A política de acesso Actions do repositório-fonte. **[CORRECT]**

   A política fonte governa o compartilhamento privado.

**Concept:** Distribuição privada de ações

**Authored coaching hints:**

- Qual repositório contém a implementação?
- Como acesso difere de nomear versões?

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository>

<!-- certification-coach-question:actions-129:c7a0080fea54ba751684400f207551e8fd376681d010d556c6fd3a451630ce8f -->
## Question 129: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-129`

**Content revision:** `c7a0080fea54ba751684400f207551e8fd376681d010d556c6fd3a451630ce8f`

### English

Consumers frequently misuse an action's required inputs and misunderstand its outputs. Which maintenance improvement most directly addresses that problem?

1. Document inputs, outputs, required credentials, and a working usage example in the README. **[CORRECT]**

   A clear interface reference and tested example explain how to use the action correctly.

2. Remove all metadata descriptions.

   Removing descriptions makes the interface harder to understand.

3. Hide all release notes.

   Hiding release notes prevents users from understanding changes.

4. Use a shorter organization name.

   Organization naming does not clarify input and output contracts.

**Concept:** Action consumer documentation

**Authored coaching hints:**

- What information does a caller need before adding a uses step?
- How can documentation demonstrate the whole contract rather than isolated field names?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los consumidores confunden entradas obligatorias y salidas. ¿Qué mantenimiento ayuda más directamente?

1. Documentar entradas, salidas, credenciales y ejemplo funcional en README. **[CORRECT]**

   La interfaz y el ejemplo aclaran uso correcto.

2. Quitar descripciones.

   Quitar descripciones dificulta comprensión.

3. Ocultar notas de lanzamiento.

   Ocultar cambios impide migraciones informadas.

4. Acortar el nombre organizacional.

   El nombre no explica contratos.

**Concept:** Documentación para consumidores

**Authored coaching hints:**

- ¿Qué necesita saber quien añade uses?
- ¿Cómo demostrar el contrato completo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Consumidores confundem entradas obrigatórias e saídas. Qual manutenção ajuda mais diretamente?

1. Documentar entradas, saídas, credenciais e exemplo funcional no README. **[CORRECT]**

   Interface e exemplo esclarecem uso correto.

2. Remover descrições.

   Remover descrições dificulta compreensão.

3. Ocultar notas de release.

   Ocultar alterações impede migrações informadas.

4. Encurtar o nome da organização.

   O nome não explica contratos.

**Concept:** Documentação para consumidores

**Authored coaching hints:**

- O que alguém precisa saber antes de adicionar uses?
- Como demonstrar o contrato completo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-130:e31b86642e2fe152c1f18eb6d31e3c408202c38642d8aaba1f9e560799943fd8 -->
## Question 130: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-130`

**Content revision:** `e31b86642e2fe152c1f18eb6d31e3c408202c38642d8aaba1f9e560799943fd8`

### English

A source change passes unit tests, but the released JavaScript bundle is stale. Which CI check most directly catches this distribution-specific defect?

1. Only check the README's spelling.

   Spelling checks do not establish that distributed code matches source.

2. Rebuild the bundle and verify the committed or released generated entrypoint matches the source. **[CORRECT]**

   Rebuilding and comparing the packaged output detects stale bundles consumers would execute.

3. Only count repository stars.

   Popularity is unrelated to build freshness.

4. Only test an unrelated container image.

   An unrelated image test does not exercise the JavaScript distribution.

**Concept:** Generated action bundle validation

**Authored coaching hints:**

- What code do consumers actually execute at the release ref?
- Can source-level tests pass while a packaged entrypoint still contains old behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El código supera pruebas unitarias, pero el bundle JavaScript publicado está desactualizado. ¿Qué comprobación detecta ese defecto?

1. Solo ortografía README.

   La ortografía no prueba sincronización.

2. Reconstruir y comparar el punto de entrada generado con la fuente. **[CORRECT]**

   Reconstruir detecta bundles obsoletos que ejecutaría el consumidor.

3. Contar estrellas.

   La popularidad no demuestra actualidad.

4. Probar una imagen ajena.

   Otra imagen no ejercita el paquete JavaScript.

**Concept:** Validación del bundle generado

**Authored coaching hints:**

- ¿Qué código ejecuta realmente el consumidor?
- ¿Puede pasar la fuente y fallar el paquete distribuido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O código passa em testes unitários, mas o bundle JavaScript publicado está desatualizado. Qual verificação detecta esse defeito?

1. Somente ortografia README.

   Ortografia não prova sincronização.

2. Reconstruir e comparar o ponto de entrada gerado com a fonte. **[CORRECT]**

   Reconstruir detecta bundles antigos executados pelo consumidor.

3. Contar estrelas.

   Popularidade não prova atualização.

4. Testar imagem não relacionada.

   Outra imagem não exercita o pacote JavaScript.

**Concept:** Validação do bundle gerado

**Authored coaching hints:**

- Qual código o consumidor realmente executa?
- A fonte pode passar e o pacote distribuído continuar antigo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-131:5c5c9049bbfb47f9cda49c10064447e78f5203bb07efaa15b047031d95e60007 -->
## Question 131: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-131`

**Content revision:** `5c5c9049bbfb47f9cda49c10064447e78f5203bb07efaa15b047031d95e60007`

### English

A JavaScript action handles API pagination incorrectly only against real repositories. Which test addition best complements unit tests before the next release?

1. A badge color comparison.

   Badge styling does not exercise pagination.

2. A release-note length limit.

   Release-note length does not test API behavior.

3. End-to-end workflow tests against a controlled test repository and API responses. **[CORRECT]**

   Integration workflows validate how the packaged action interacts with GitHub APIs.

4. A rule that tests run only after publication.

   Post-publication-only tests allow preventable defects to reach consumers.

**Concept:** Action integration testing

**Authored coaching hints:**

- Which boundary is absent from isolated unit tests?
- How can testing cover actual packaging, authentication, and API interaction safely?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La paginación de una acción falla solo con repositorios reales. ¿Qué prueba complementa mejor las unitarias antes de publicar?

1. Comparar colores de insignias.

   Los colores no prueban paginación.

2. Limitar longitud de notas.

   La longitud no valida API.

3. Probar de extremo a extremo en un repositorio controlado y sus respuestas API. **[CORRECT]**

   La integración valida paquete e interacción real.

4. Probar solo después de publicar.

   Probar después deja defectos prevenibles.

**Concept:** Pruebas de integración de acciones

**Authored coaching hints:**

- ¿Qué frontera falta en pruebas aisladas?
- ¿Cómo cubrir paquete, autenticación y API de forma segura?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A paginação de uma ação falha apenas com repositórios reais. Qual teste complementa melhor os unitários antes da publicação?

1. Comparar cores de selos.

   Cores não testam paginação.

2. Limitar tamanho das notas.

   Tamanho não valida API.

3. Testar ponta a ponta em repositório controlado e respostas da API. **[CORRECT]**

   Integração valida pacote e interação real.

4. Testar só depois de publicar.

   Testar depois deixa defeitos evitáveis.

**Concept:** Testes de integração de ações

**Authored coaching hints:**

- Qual fronteira falta em testes isolados?
- Como cobrir pacote, autenticação e API com segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions>

<!-- certification-coach-question:actions-132:0fee6c5a421cbe2fb6cf079177c477660bc5e9258a70438560f21b010299c5f0 -->
## Question 132: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-132`

**Content revision:** `0fee6c5a421cbe2fb6cf079177c477660bc5e9258a70438560f21b010299c5f0`

### English

A composite action needs a credential supplied by its caller. Which interface design is appropriate rather than assuming it has a secrets context of its own?

1. Read every repository secret automatically by enumeration.

   Actions cannot automatically enumerate all secret values.

2. Put the credential in branding.icon.

   Branding metadata must not contain credentials.

3. Use the action's display name as the credential.

   Display names are not authentication data.

4. Declare an input and have the caller explicitly pass the secret as that input. **[CORRECT]**

   A caller can explicitly pass a secret into the action's declared input interface.

**Concept:** Composite credential interfaces

**Authored coaching hints:**

- Which component owns the secret and chooses to share it?
- How can the action make its credential dependency explicit?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción compuesta necesita una credencial del llamador. ¿Qué interfaz usar en vez de suponer un contexto secrets propio?

1. Enumerar automáticamente todos los secretos.

   Las acciones no enumeran valores de secretos.

2. Poner la credencial en branding.icon.

   Branding no debe contener credenciales.

3. Usar el nombre visual como credencial.

   El nombre no autentica.

4. Declarar una entrada y pasarle explícitamente el secreto desde el llamador. **[CORRECT]**

   Una entrada explicita lo compartido por el llamador.

**Concept:** Credenciales en interfaces compuestas

**Authored coaching hints:**

- ¿Quién posee y decide compartir el secreto?
- ¿Cómo explicitar la dependencia de credenciales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação composta precisa de credencial do chamador. Qual interface usar em vez de presumir contexto secrets próprio?

1. Enumerar todos os segredos automaticamente.

   Ações não enumeram valores de segredos.

2. Colocar a credencial em branding.icon.

   Branding não deve conter credenciais.

3. Usar o nome visual como credencial.

   O nome não autentica.

4. Declarar uma entrada e passar explicitamente o segredo pelo chamador. **[CORRECT]**

   Uma entrada explicita o compartilhamento pelo chamador.

**Concept:** Credenciais em interfaces compostas

**Authored coaching hints:**

- Quem possui e decide compartilhar o segredo?
- Como explicitar a dependência de credenciais?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action>

<!-- certification-coach-question:actions-133:1064c6b4e916fe14f04cff82cdf4d9ebb0718b3f6d9319cf91dd131135c0f322 -->
## Question 133: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-133`

**Content revision:** `1064c6b4e916fe14f04cff82cdf4d9ebb0718b3f6d9319cf91dd131135c0f322`

### English

A Docker action exits with code 2 after a failed validation. Without continue-on-error, how will Actions normally interpret this exit?

1. As action failure because a nonzero exit status indicates failure. **[CORRECT]**

   Nonzero action exit codes indicate unsuccessful execution.

2. As success because only code 1 can fail.

   Failure is not limited to exit code 1.

3. As a request to retry indefinitely.

   An exit code alone does not enable infinite retries.

4. As an artifact expiration signal.

   Process exit status is unrelated to artifact storage expiration.

**Concept:** Action exit-status semantics

**Authored coaching hints:**

- What convention do process exit codes use for success?
- Is a numeric result automatically a retry instruction?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker sale con código 2 tras validación fallida, sin continue-on-error. ¿Cómo se interpreta?

1. Fallo: un código distinto de cero indica error. **[CORRECT]**

   Los códigos no cero representan ejecución fallida.

2. Éxito: solo 1 indica fallo.

   El fallo no se limita a 1.

3. Reintento infinito.

   Un código no crea reintentos infinitos.

4. Expiración de artefactos.

   No controla retención.

**Concept:** Códigos de salida de acciones

**Authored coaching hints:**

- ¿Qué convención representa éxito?
- ¿Un resultado numérico es una instrucción de reintento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker sai com código 2 após validação malsucedida, sem continue-on-error. Como isso é interpretado?

1. Falha: código diferente de zero indica erro. **[CORRECT]**

   Códigos não zero indicam execução malsucedida.

2. Sucesso: somente 1 indica falha.

   Falha não se limita a 1.

3. Tentativa infinita.

   Um código não cria tentativas infinitas.

4. Expiração de artefatos.

   Não controla retenção.

**Concept:** Códigos de saída de ações

**Authored coaching hints:**

- Qual convenção representa sucesso?
- Um resultado numérico é instrução de nova tentativa?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/create-and-publish-actions/set-exit-codes>

<!-- certification-coach-question:actions-134:9a2df3587ba721b9468b75dc657ddaa603081b467f723b82664119236efcb922 -->
## Question 134: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-134`

**Content revision:** `9a2df3587ba721b9468b75dc657ddaa603081b467f723b82664119236efcb922`

### English

An action prints thousands of setup lines, making its logs difficult to navigate. Which runner command pair creates a collapsible group without hiding the logs permanently?

1. add-mask and set-output

   Masking redacts sensitive text and output commands publish data; neither creates a display group.

2. group and endgroup **[CORRECT]**

   group and endgroup wrap log lines in an expandable section.

3. save-cache and restore-cache

   Cache operations manage stored dependencies, not log layout.

4. start-job and stop-job

   These are not the documented log-grouping workflow commands.

**Concept:** Action log grouping

**Authored coaching hints:**

- Is the goal redaction, deletion, or presentation?
- Which command structure defines a beginning and end for a log section?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Miles de líneas de setup dificultan navegar registros. ¿Qué par crea una sección contraíble sin eliminar los registros?

1. add-mask y set-output

   Ocultar secretos y publicar datos no agrupa.

2. group y endgroup **[CORRECT]**

   group y endgroup delimitan una sección expandible.

3. save-cache y restore-cache

   La caché no organiza registros.

4. start-job y stop-job

   No son los comandos documentados para agrupar.

**Concept:** Agrupación de registros

**Authored coaching hints:**

- ¿Se busca ocultamiento, eliminación o presentación?
- ¿Qué estructura marca inicio y fin de una sección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Milhares de linhas de setup dificultam navegar nos logs. Qual par cria seção recolhível sem excluir registros?

1. add-mask e set-output

   Mascarar segredos e publicar dados não agrupa.

2. group e endgroup **[CORRECT]**

   group e endgroup delimitam seção expansível.

3. save-cache e restore-cache

   Cache não organiza logs.

4. start-job e stop-job

   Não são comandos documentados de agrupamento.

**Concept:** Agrupamento de logs

**Authored coaching hints:**

- A meta é mascaramento, exclusão ou apresentação?
- Qual estrutura marca início e fim de uma seção?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands>

<!-- certification-coach-question:actions-135:2af324df916201435d4de139af05498cce6fe25ac42d41c7c3cd1a59fa24313c -->
## Question 135: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-135`

**Content revision:** `2af324df916201435d4de139af05498cce6fe25ac42d41c7c3cd1a59fa24313c`

### English

A JavaScript action sets an output with core.setOutput but does not list that output in its metadata. Which statement reflects the runtime behavior?

1. All action outputs require a Marketplace listing.

   Marketplace publication is not required for output parameters.

2. The runner converts it into a repository variable.

   Outputs and configuration variables have different scopes and lifetimes.

3. The output can still be set and consumed, though declaring it documents the interface. **[CORRECT]**

   JavaScript and Docker actions can set outputs without declaring them in metadata.

4. The output automatically becomes a secret in all future workflows.

   Outputs do not automatically become persistent secrets.

**Concept:** Declared versus runtime action outputs

**Authored coaching hints:**

- Does runtime output publication depend on documentation metadata for these action types?
- Why might an author still declare an output that can be set dynamically?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript usa core.setOutput sin declarar esa salida en metadatos. ¿Qué ocurre?

1. Toda salida exige Marketplace.

   Marketplace no es requisito.

2. Se convierte en variable del repositorio.

   Salidas y variables tienen ámbitos distintos.

3. Puede establecerse y consumirse; declararla documenta la interfaz. **[CORRECT]**

   JavaScript y Docker pueden emitir salidas no declaradas.

4. Se vuelve secreto para todos los flujos futuros.

   Las salidas no son secretos persistentes.

**Concept:** Salidas declaradas y dinámicas

**Authored coaching hints:**

- ¿La publicación runtime depende de metadatos descriptivos?
- ¿Por qué conviene declarar una salida dinámica?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript usa core.setOutput sem declarar aquela saída nos metadados. O que ocorre?

1. Toda saída exige Marketplace.

   Marketplace não é requisito.

2. Vira variável do repositório.

   Saídas e variáveis têm escopos distintos.

3. Pode ser definida e consumida; declará-la documenta a interface. **[CORRECT]**

   JavaScript e Docker podem emitir saídas não declaradas.

4. Vira segredo para todos os workflows futuros.

   Saídas não são segredos persistentes.

**Concept:** Saídas declaradas e dinâmicas

**Authored coaching hints:**

- A publicação em runtime depende de metadados descritivos?
- Por que declarar uma saída dinâmica ainda ajuda?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-136:7ce200a9d015806dc399a662329303d94c1efa9d2caee1d1adea230b548d9d21 -->
## Question 136: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-136`

**Content revision:** `7ce200a9d015806dc399a662329303d94c1efa9d2caee1d1adea230b548d9d21`

### English

An action repository has immutable release v1.4.0. A maintainer only needs to clarify its release notes, without changing tag or assets. Is that permitted?

1. No; every text field is cryptographically frozen.

   Immutability does not freeze every descriptive release field.

2. Only if all consumers delete their caches.

   Consumer cache deletion does not govern release-note edits.

3. Only by moving the release tag first.

   Moving the immutable tag is prohibited and unnecessary.

4. Yes; immutable releases lock assets and the associated tag, not the release notes. **[CORRECT]**

   The release title and notes remain editable while executable content stays protected.

**Concept:** Immutable release metadata boundary

**Authored coaching hints:**

- Which changes could alter the bytes consumers execute?
- How does descriptive metadata differ from version identity and release assets?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un lanzamiento inmutable v1.4.0 necesita aclarar sus notas, sin cambiar assets ni etiqueta. ¿Se permite?

1. No: todo texto queda congelado.

   No congela todos los campos descriptivos.

2. Solo si consumidores eliminan cachés.

   Las cachés no controlan notas.

3. Solo moviendo antes la etiqueta.

   Mover la etiqueta está prohibido.

4. Sí: la inmutabilidad bloquea assets y etiqueta, no las notas. **[CORRECT]**

   Título y notas siguen editables.

**Concept:** Límites de metadatos inmutables

**Authored coaching hints:**

- ¿Qué modifica los bytes ejecutados?
- ¿Cómo difiere descripción de identidad y assets?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma release imutável v1.4.0 precisa esclarecer notas, sem alterar assets nem tag. Isso é permitido?

1. Não: todo texto fica congelado.

   Nem todo campo descritivo fica congelado.

2. Só se consumidores excluírem caches.

   Caches não controlam notas.

3. Só movendo antes a tag.

   Mover a tag é proibido.

4. Sim: imutabilidade bloqueia assets e tag, não notas. **[CORRECT]**

   Título e notas continuam editáveis.

**Concept:** Limites dos metadados imutáveis

**Authored coaching hints:**

- O que modifica os bytes executados?
- Como descrição difere de identidade e assets?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases>

<!-- certification-coach-question:actions-137:7c71ba1b1f3da4cd558b407233321a9144ea72ac99c4ebe232a5e116efdf667e -->
## Question 137: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-137`

**Content revision:** `7c71ba1b1f3da4cd558b407233321a9144ea72ac99c4ebe232a5e116efdf667e`

### English

A released JavaScript action uses an operating-system-specific executable even though its JavaScript code is portable. What should its author do before claiming cross-platform support?

1. Test and provide the executable dependency on each supported runner platform or remove that dependency. **[CORRECT]**

   External executable compatibility must be validated independently from JavaScript portability.

2. Assume Node.js makes every external binary portable.

   Node.js cannot automatically translate arbitrary platform-specific binaries.

3. Rename the binary with a .js extension.

   Renaming a binary does not change its executable format.

4. Only change action.yml's description.

   Documentation cannot establish runtime compatibility without implementation and tests.

**Concept:** Action portability dependencies

**Authored coaching hints:**

- Which parts of the implementation run outside the JavaScript engine?
- Does a portable language make every dependency portable too?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción JavaScript depende de un ejecutable específico de un sistema. ¿Qué hacer antes de prometer compatibilidad multiplataforma?

1. Probar y proporcionar la dependencia en cada plataforma o eliminarla. **[CORRECT]**

   La compatibilidad externa necesita validación propia.

2. Suponer que Node.js vuelve portátil todo binario.

   Node.js no traduce binarios arbitrarios.

3. Renombrarlo con .js.

   Renombrar no cambia formato ejecutable.

4. Cambiar solo la descripción.

   Documentar no establece compatibilidad.

**Concept:** Dependencias de portabilidad

**Authored coaching hints:**

- ¿Qué partes se ejecutan fuera del motor JavaScript?
- ¿Un lenguaje portátil hace portátiles sus dependencias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação JavaScript depende de executável específico de um sistema. O que fazer antes de prometer suporte multiplataforma?

1. Testar e fornecer a dependência em cada plataforma ou removê-la. **[CORRECT]**

   Compatibilidade externa exige validação própria.

2. Presumir que Node.js torna qualquer binário portátil.

   Node.js não traduz binários arbitrários.

3. Renomear com .js.

   Renomear não muda formato executável.

4. Mudar somente a descrição.

   Documentar não estabelece compatibilidade.

**Concept:** Dependências de portabilidade

**Authored coaching hints:**

- Quais partes executam fora do motor JavaScript?
- Linguagem portátil torna suas dependências portáteis?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action>

<!-- certification-coach-question:actions-138:b51b55574a282cbefb9cf72ed00f59fe097100c0f39235acd728c4437630bb80 -->
## Question 138: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-138`

**Content revision:** `b51b55574a282cbefb9cf72ed00f59fe097100c0f39235acd728c4437630bb80`

### English

A Docker action's post-entrypoint needs state from the main entrypoint. Why is relying only on a shell variable or process memory insufficient?

1. Docker post scripts always run on Windows.

   Docker action lifecycle containers run on Linux.

2. The post-entrypoint runs in a new container, so shared state must use supported persisted locations or action state. **[CORRECT]**

   Separate lifecycle containers do not share process memory; persisted workspace, HOME, or state is required.

3. All output files are forbidden.

   Persisted files in supported locations can carry needed state.

4. The workflow's name overwrites shell variables.

   Display names do not overwrite container memory.

**Concept:** Docker action lifecycle isolation

**Authored coaching hints:**

- Does the cleanup process share the main process's address space?
- What kinds of state survive a new container launch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

post-entrypoint necesita estado de entrypoint en una acción Docker. ¿Por qué no bastan variables de shell o memoria?

1. post siempre corre en Windows.

   El ciclo Docker usa Linux.

2. post inicia otro contenedor; usar ubicaciones persistidas admitidas o estado de acción. **[CORRECT]**

   Los contenedores separados no comparten memoria de proceso.

3. Todo archivo de salida está prohibido.

   Las ubicaciones admitidas sí conservan archivos.

4. El nombre del flujo sobrescribe variables.

   Los nombres no alteran memoria.

**Concept:** Aislamiento del ciclo Docker

**Authored coaching hints:**

- ¿La limpieza comparte memoria con main?
- ¿Qué estado sobrevive al inicio de otro contenedor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

post-entrypoint precisa do estado de entrypoint numa ação Docker. Por que variáveis de shell ou memória não bastam?

1. post sempre roda em Windows.

   O ciclo Docker usa Linux.

2. post inicia outro contêiner; usar locais persistidos compatíveis ou estado da ação. **[CORRECT]**

   Contêineres separados não compartilham memória de processo.

3. Todo arquivo de saída é proibido.

   Locais compatíveis preservam arquivos.

4. O nome do workflow sobrescreve variáveis.

   Nomes não alteram memória.

**Concept:** Isolamento do ciclo Docker

**Authored coaching hints:**

- A limpeza compartilha memória com main?
- Qual estado sobrevive a outro contêiner?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-139:6642cd4d1b277ab65a4cb77aaa1241b3b52eaa11c4acee5a5696a576a715ed7a -->
## Question 139: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-139`

**Content revision:** `6642cd4d1b277ab65a4cb77aaa1241b3b52eaa11c4acee5a5696a576a715ed7a`

### English

A consumer references owner/tool/subaction@v3. Where should the repository author place the metadata that defines that particular action?

1. Only in the caller's .github/workflows directory.

   The caller's workflow invokes the action but does not contain its implementation metadata.

2. Only in the repository's root README.

   README prose cannot replace the required action metadata file.

3. In the subaction directory at the referenced version. **[CORRECT]**

   The uses subpath selects the directory containing action.yml or action.yaml.

4. In the organization's billing settings.

   Billing settings do not define action execution.

**Concept:** Subdirectory action packaging

**Authored coaching hints:**

- Which part of the reference selects a version and which selects a path?
- Where will the runner look for the selected action's execution manifest?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un consumidor usa owner/tool/subaction@v3. ¿Dónde colocar los metadatos de esa acción específica?

1. Solo en .github/workflows del llamador.

   El llamador invoca, no implementa.

2. Solo en README raíz.

   README no reemplaza metadatos.

3. En subaction de la versión referenciada. **[CORRECT]**

   El subpath selecciona el directorio action.yml/action.yaml.

4. En facturación organizacional.

   Facturación no define ejecución.

**Concept:** Acciones en subdirectorios

**Authored coaching hints:**

- ¿Qué parte selecciona ruta y cuál versión?
- ¿Dónde buscará el runner el manifiesto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um consumidor usa owner/tool/subaction@v3. Onde colocar os metadados dessa ação específica?

1. Somente em .github/workflows do chamador.

   O chamador invoca, não implementa.

2. Somente no README raiz.

   README não substitui metadados.

3. Em subaction na versão referenciada. **[CORRECT]**

   O subpath seleciona o diretório action.yml/action.yaml.

4. No faturamento organizacional.

   Faturamento não define execução.

**Concept:** Ações em subdiretórios

**Authored coaching hints:**

- Qual parte seleciona caminho e qual versão?
- Onde o runner buscará o manifesto?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-140:5787700ca33f70c932bff3f494c3569e27d561aa736a473eee4e8427ad6f20ec -->
## Question 140: Author and maintain actions

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-140`

**Content revision:** `5787700ca33f70c932bff3f494c3569e27d561aa736a473eee4e8427ad6f20ec`

### English

A Docker action uses a prebuilt public registry image instead of a Dockerfile in its repository. Which metadata form expresses that image source?

1. on: docker\_registry

   There is no action runtime event named docker\_registry.

2. inputs.image: true only

   An input named image does not select the runtime image by itself.

3. jobs.image: registry.example/tool:1

   Action metadata does not define jobs.image.

4. runs.using: docker with runs.image: docker://registry.example/tool:1 **[CORRECT]**

   The docker runtime and docker:// image reference select a published container image.

**Concept:** Registry-backed Docker actions

**Authored coaching hints:**

- Is the runner building an image or pulling a published one?
- Which metadata fields identify the execution type and its image?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción Docker usa una imagen pública precompilada en vez de Dockerfile local. ¿Qué metadatos expresan esa fuente?

1. on: docker\_registry

   No existe ese evento runtime.

2. Solo inputs.image: true

   La entrada no selecciona la imagen.

3. jobs.image: registry.example/tool:1

   Los metadatos de acción no usan jobs.image.

4. runs.using: docker y runs.image: docker://registry.example/tool:1 **[CORRECT]**

   docker con docker:// selecciona imagen publicada.

**Concept:** Acciones Docker desde registros

**Authored coaching hints:**

- ¿Se construye una imagen o se descarga?
- ¿Qué campos identifican tipo de ejecución e imagen?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação Docker usa imagem pública pré-compilada em vez de Dockerfile local. Quais metadados expressam essa fonte?

1. on: docker\_registry

   Não existe esse evento de runtime.

2. Somente inputs.image: true

   A entrada não seleciona a imagem.

3. jobs.image: registry.example/tool:1

   Metadados de ação não usam jobs.image.

4. runs.using: docker e runs.image: docker://registry.example/tool:1 **[CORRECT]**

   docker com docker:// seleciona imagem publicada.

**Concept:** Ações Docker de registros

**Authored coaching hints:**

- Uma imagem é construída ou baixada?
- Quais campos identificam execução e imagem?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax>

<!-- certification-coach-question:actions-141:9c144fed4d3cb08e2d63ab741e170122ae34006e943a6e3c5683c4d4794c0f47 -->
## Question 141: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-141`

**Content revision:** `9c144fed4d3cb08e2d63ab741e170122ae34006e943a6e3c5683c4d4794c0f47`

### English

An enterprise forbids arbitrary public actions, and an organization owner cannot enable them despite a repository request. Which governance relationship explains this?

1. Repository settings always override enterprise policy.

   Repository settings cannot relax an enforced enterprise restriction.

2. An overriding enterprise policy constrains organization and repository choices. **[CORRECT]**

   Lower-level settings must remain within the enterprise's enforced policy.

3. Runner labels override action-use policy.

   Runner routing labels do not supersede action governance.

4. An action's README can grant an exception.

   Documentation does not authorize policy exceptions.

**Concept:** Policy hierarchy

**Authored coaching hints:**

- Which administrative scope sets the upper boundary?
- Can a more local setting expand an enforced organization-wide restriction?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La empresa prohíbe acciones públicas arbitrarias y la organización no puede habilitarlas. ¿Qué relación lo explica?

1. El repositorio siempre prevalece.

   El repositorio no puede relajar una restricción superior.

2. La política empresarial limita las opciones de organizaciones y repositorios. **[CORRECT]**

   Las configuraciones inferiores deben respetar la política empresarial.

3. Las etiquetas de runners prevalecen.

   Las etiquetas no anulan políticas.

4. El README puede autorizar excepciones.

   La documentación no autoriza excepciones.

**Concept:** Jerarquía de políticas

**Authored coaching hints:**

- ¿Qué ámbito establece el límite superior?
- ¿Una configuración local puede ampliar una restricción obligatoria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A empresa proíbe ações públicas arbitrárias e a organização não consegue habilitá-las. Qual relação explica isso?

1. O repositório sempre prevalece.

   O repositório não relaxa restrições superiores.

2. A política empresarial limita opções de organizações e repositórios. **[CORRECT]**

   Configurações inferiores devem respeitar a política empresarial.

3. Rótulos de runners prevalecem.

   Rótulos não anulam governança.

4. O README autoriza exceções.

   Documentação não autoriza exceções.

**Concept:** Hierarquia de políticas

**Authored coaching hints:**

- Qual escopo estabelece o limite superior?
- Uma configuração local amplia uma restrição obrigatória?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-142:07734510a895ca1c159b4c1a48e09f4fc3ef478fd69a2b8721ec7687c6c992e9 -->
## Question 142: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-142`

**Content revision:** `07734510a895ca1c159b4c1a48e09f4fc3ef478fd69a2b8721ec7687c6c992e9`

### English

An organization allows only actions from its own organization. Existing jobs using actions/checkout are now blocked. What explains the failure?

1. checkout cannot run in private repositories.

   checkout supports private repositories when authentication permits it.

2. The checkout action became a service container.

   Its action type does not change because of policy.

3. GitHub-authored actions are external to that organization and need an allowed-policy exception. **[CORRECT]**

   Organization-only policy also blocks GitHub-authored actions unless explicitly allowed.

4. All workflow files must be moved out of .github.

   Relocating workflow files would prevent normal workflow discovery.

**Concept:** Organization-only action policy

**Authored coaching hints:**

- Who owns the action repository named in uses?
- Does trusted publisher identity automatically bypass a restrictive allowlist?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización permite solo acciones propias. Ahora se bloquea actions/checkout. ¿Por qué?

1. checkout no admite repositorios privados.

   checkout admite repositorios privados con autenticación.

2. checkout se convirtió en servicio.

   La política no cambia el tipo de acción.

3. Las acciones de GitHub son externas a esa organización y requieren permiso explícito. **[CORRECT]**

   La restricción también incluye acciones creadas por GitHub.

4. Hay que sacar los workflows de .github.

   Moverlos impediría su descubrimiento normal.

**Concept:** Política de acciones propias

**Authored coaching hints:**

- ¿Quién es dueño del repositorio indicado en uses?
- ¿Un publicador confiable evita automáticamente una lista restrictiva?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização permite somente ações próprias. Agora actions/checkout está bloqueada. Por quê?

1. checkout não funciona em repositórios privados.

   checkout suporta repositórios privados com autenticação.

2. checkout virou contêiner de serviço.

   A política não muda o tipo da ação.

3. Ações do GitHub são externas à organização e precisam de permissão explícita. **[CORRECT]**

   A restrição também bloqueia ações criadas pelo GitHub.

4. É preciso tirar workflows de .github.

   Mudar a localização impediria descoberta normal.

**Concept:** Política de ações próprias

**Authored coaching hints:**

- Quem possui o repositório indicado em uses?
- Um publicador confiável evita automaticamente uma lista restritiva?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-143:67376cc34247173cf326ac30da51f30d3bc3798257baf6cd316d02c1e1362120 -->
## Question 143: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-143`

**Content revision:** `67376cc34247173cf326ac30da51f30d3bc3798257baf6cd316d02c1e1362120`

### English

A platform team approves exactly one third-party action revision for a regulated build. Which policy entry is more precise than allowing the entire publisher?

1. publisher/\*

   Publisher-wide access includes unreviewed actions and versions.

2. \*

   A wildcard permits far more than the approved revision.

3. A runner label named approved.

   Labels route runners and do not restrict executable dependencies.

4. An owner/repository@full-commit-SHA entry. **[CORRECT]**

   A revision-specific allowlist entry targets the approved action code.

**Concept:** Revision-scoped action allowlists

**Authored coaching hints:**

- What parts of a dependency reference identify publisher, component, and version?
- How narrow must a rule be to reflect the approval actually granted?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se aprueba una sola revisión de una acción externa para una compilación regulada. ¿Qué entrada es más precisa?

1. publisher/\*

   Permite versiones no revisadas.

2. \*

   Permite mucho más de lo aprobado.

3. Una etiqueta de runner approved.

   Las etiquetas no restringen dependencias.

4. owner/repository@SHA-completo-del-commit **[CORRECT]**

   Una entrada por revisión limita el código permitido.

**Concept:** Listas por revisión

**Authored coaching hints:**

- ¿Qué identifica publicador, componente y versión?
- ¿Qué alcance refleja la aprobación real?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma única revisão de ação externa foi aprovada para build regulado. Qual regra é mais precisa que liberar o publicador inteiro?

1. publisher/\*

   Inclui ações e versões não revisadas.

2. \*

   Libera muito além do aprovado.

3. Um rótulo de runner approved.

   Rótulos não restringem dependências.

4. owner/repository@SHA-completo-do-commit **[CORRECT]**

   A regra por revisão limita o código aprovado.

**Concept:** Listas por revisão

**Authored coaching hints:**

- O que identifica publicador, componente e versão?
- Qual escopo corresponde à aprovação real?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-144:319a9eca84c89f940bf286c95a240d09682668c1788443ab4a4a2d423b1fd744 -->
## Question 144: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-144`

**Content revision:** `319a9eca84c89f940bf286c95a240d09682668c1788443ab4a4a2d423b1fd744`

### English

An organization enables the policy requiring actions to be pinned to full-length commit SHAs. What should maintainers do with GitHub-authored actions currently referenced by major tags?

1. Pin those actions too; GitHub-authored actions are included in the requirement. **[CORRECT]**

   The policy applies to organization-owned and GitHub-authored actions as well as third-party actions.

2. Leave them unchanged because all verified publishers are exempt.

   Publisher verification does not create a general pinning exemption.

3. Replace their tags with short seven-character SHAs.

   The setting requires full-length, not abbreviated, commit SHAs.

4. Rename each action's step to pinned.

   Step display names do not affect dependency pinning.

**Concept:** Enforced action SHA pinning

**Authored coaching hints:**

- Is the rule about the publisher or the reference format?
- What does full-length exclude?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se exige fijar acciones con SHA completos. ¿Qué hacer con acciones de GitHub referenciadas por etiquetas principales?

1. Fijarlas también: están incluidas. **[CORRECT]**

   La exigencia incluye acciones de GitHub y de la organización.

2. Dejarlas: los publicadores verificados están exentos.

   La verificación no concede exención general.

3. Usar SHA de siete caracteres.

   Se exige SHA completo.

4. Renombrar sus pasos como pinned.

   El nombre no cambia la referencia.

**Concept:** Fijación obligatoria por SHA

**Authored coaching hints:**

- ¿La regla trata del publicador o del formato?
- ¿Qué excluye longitud completa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A organização exige SHA completo nas referências a ações. O que fazer com ações do GitHub usando tags principais?

1. Fixá-las também: estão incluídas. **[CORRECT]**

   A exigência inclui ações do GitHub e da organização.

2. Manter: publicadores verificados são isentos.

   Verificação não concede isenção geral.

3. Usar SHA de sete caracteres.

   É necessário SHA completo.

4. Renomear etapas para pinned.

   Nomes não alteram referências.

**Concept:** Fixação obrigatória por SHA

**Authored coaching hints:**

- A regra trata de publicador ou formato da referência?
- O que comprimento completo exclui?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-145:011a3d8d38a89ad2b9b6cefe720a00a3f041da8b36b758b9f5d2de22b75ee8c3 -->
## Question 145: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-145`

**Content revision:** `011a3d8d38a89ad2b9b6cefe720a00a3f041da8b36b758b9f5d2de22b75ee8c3`

### English

An organization wants Actions enabled for a pilot group of repositories but disabled elsewhere. Which administrative setting directly supports that rollout?

1. A global env variable named pilot.

   An environment variable cannot enable repository Actions service access.

2. Enable GitHub Actions for selected repositories in organization settings. **[CORRECT]**

   Organization settings can restrict Actions availability to selected repositories.

3. A different badge on each repository.

   Badges display state without enforcing access.

4. A deployment environment named disabled.

   An environment name does not disable repository workflows.

**Concept:** Repository-scoped Actions rollout

**Authored coaching hints:**

- Is this a workflow condition or a service-availability policy?
- Which scope can apply the same rule across many repositories?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere habilitar Actions solo para repositorios piloto. ¿Qué configuración lo permite?

1. Una variable global pilot.

   Una variable no habilita el servicio.

2. Habilitar Actions para repositorios seleccionados en la organización. **[CORRECT]**

   La configuración organizacional limita su disponibilidad.

3. Cambiar sus insignias.

   Las insignias no imponen acceso.

4. Crear un entorno disabled.

   El nombre del entorno no deshabilita workflows.

**Concept:** Habilitación por repositorio

**Authored coaching hints:**

- ¿Es condición del workflow o disponibilidad del servicio?
- ¿Qué ámbito administra varios repositorios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer Actions somente em repositórios piloto. Qual configuração permite esse lançamento?

1. Uma env global pilot.

   Uma variável não habilita o serviço.

2. Habilitar Actions para repositórios selecionados na organização. **[CORRECT]**

   A configuração limita disponibilidade por repositório.

3. Alterar os selos.

   Selos não impõem acesso.

4. Criar ambiente disabled.

   O nome do ambiente não desabilita workflows.

**Concept:** Habilitação por repositório

**Authored coaching hints:**

- É condição de workflow ou disponibilidade do serviço?
- Qual escopo administra vários repositórios?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-146:814fad91cc2088cb71e9c8c4431fcc4c08051a18468ddb8fcc30527bc7273d86 -->
## Question 146: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-146`

**Content revision:** `814fad91cc2088cb71e9c8c4431fcc4c08051a18468ddb8fcc30527bc7273d86`

### English

A shared private action exists, and the caller's allowlist permits it, but another private repository still cannot use it. Which independent setting should the platform team inspect?

1. Only the action's release-note title.

   Release-note titles do not grant access to private code.

2. The caller's artifact retention.

   Retention does not authorize private component retrieval.

3. The source repository's Actions access policy allowing private sharing. **[CORRECT]**

   Allowing usage and allowing access to the private source are separate requirements.

4. The number of inputs in action.yml.

   Input count does not govern repository sharing.

**Concept:** Private component access versus usage

**Authored coaching hints:**

- Does permission to run a component imply permission to retrieve it?
- Which repository controls the privacy boundary of the shared implementation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La lista del llamador permite una acción privada, pero otro repositorio privado no puede usarla. ¿Qué revisar aparte?

1. El título de las notas.

   El título no concede acceso.

2. La retención de artefactos.

   La retención no autoriza descarga.

3. La política Actions del repositorio fuente para compartir acceso. **[CORRECT]**

   Permitir uso y permitir acceso privado son requisitos distintos.

4. La cantidad de entradas.

   Las entradas no controlan privacidad.

**Concept:** Acceso frente a uso permitido

**Authored coaching hints:**

- ¿Permitir ejecutar implica permitir recuperar código?
- ¿Qué repositorio controla la privacidad de la implementación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A lista do chamador permite uma ação privada, mas outro repositório privado ainda não consegue usá-la. O que verificar separadamente?

1. O título das notas.

   O título não concede acesso.

2. Retenção de artefatos.

   Retenção não autoriza baixar código.

3. A política Actions do repositório-fonte que permite compartilhar acesso. **[CORRECT]**

   Permitir uso e acesso à fonte privada são requisitos distintos.

4. Quantidade de entradas.

   Entradas não controlam compartilhamento.

**Concept:** Acesso versus uso permitido

**Authored coaching hints:**

- Permitir executar implica permitir recuperar código?
- Qual repositório controla a privacidade da implementação?

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository>

<!-- certification-coach-question:actions-147:467cdf905b3b152366d20d4ced29f4e4c0092774c9e2b1a5843b2d12e5bd4da8 -->
## Question 147: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-147`

**Content revision:** `467cdf905b3b152366d20d4ced29f4e4c0092774c9e2b1a5843b2d12e5bd4da8`

### English

A company wants reusable workflow source to remain centralized, while callers adopt reviewed updates deliberately. Which reference strategy supports both goals?

1. Copy the entire workflow into every repository each morning.

   Repeated copying creates independent definitions and weakens centralized maintenance.

2. Store executable YAML only in an issue.

   Issue text is not a callable workflow source.

3. Reference an unreviewed personal branch without tracking changes.

   An unreviewed moving branch undermines deliberate adoption.

4. Call the central reusable workflow at a reviewed version or commit and update references through review. **[CORRECT]**

   Versioned central calls combine shared implementation with controlled update points.

**Concept:** Controlled reusable workflow distribution

**Authored coaching hints:**

- How can callers share implementation without losing control of updates?
- Which dependency change should be visible in a reviewable diff?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se quiere centralizar un workflow reutilizable y adoptar actualizaciones revisadas deliberadamente. ¿Qué estrategia sirve?

1. Copiarlo cada mañana.

   Las copias crean definiciones independientes.

2. Guardar el YAML solo en una issue.

   Una issue no es fuente ejecutable.

3. Referenciar una rama personal sin revisión.

   Una rama móvil no revisada impide adopción controlada.

4. Llamar al workflow central por versión o commit revisado y actualizar mediante revisión. **[CORRECT]**

   Las llamadas versionadas combinan centralización y control.

**Concept:** Distribución reutilizable controlada

**Authored coaching hints:**

- ¿Cómo compartir implementación sin perder control de actualizaciones?
- ¿Qué cambio de dependencia debe aparecer en un diff revisable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como centralizar um workflow reutilizável e permitir adoção deliberada de atualizações revisadas?

1. Copiá-lo todo dia.

   Cópias criam definições independentes.

2. Guardar YAML somente numa issue.

   Issues não são fontes executáveis.

3. Usar uma branch pessoal sem revisão.

   Uma branch móvel sem revisão prejudica controle.

4. Chamar a fonte central por versão ou commit revisado e atualizar referências com revisão. **[CORRECT]**

   Chamadas versionadas combinam centralização e atualização controlada.

**Concept:** Distribuição reutilizável controlada

**Authored coaching hints:**

- Como compartilhar implementação sem perder controle das atualizações?
- Qual mudança de dependência deve aparecer num diff revisável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-148:e68a40fd26a82b7e8ccac6a993415ca9c46b1fd971b3838e4dc033d8e6a141fa -->
## Question 148: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-148`

**Content revision:** `e68a40fd26a82b7e8ccac6a993415ca9c46b1fd971b3838e4dc033d8e6a141fa`

### English

An organization wants to offer its own starter workflows in GitHub's new-workflow experience. Where should it store the template YAML files?

1. workflow-templates/ in the organization's .github repository. **[CORRECT]**

   The organization .github repository's workflow-templates directory is the documented source.

2. Every runner's home directory.

   Runner-local files do not publish organization templates.

3. The organization billing page.

   Billing settings do not contain workflow scaffolding.

4. The .git/hooks directory of one developer's clone.

   Local Git hooks are not shared template discovery content.

**Concept:** Organization template location

**Authored coaching hints:**

- Where does GitHub look for organization-wide scaffolding?
- Is the template a server-discoverable repository file or a runner-local resource?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde guardar los YAML de plantillas organizacionales que aparecen al crear workflows?

1. workflow-templates/ del repositorio .github de la organización. **[CORRECT]**

   Esa es la ubicación documentada.

2. El home de cada runner.

   Los archivos locales no publican plantillas.

3. La página de facturación.

   Facturación no almacena plantillas.

4. Los hooks locales de un desarrollador.

   Los hooks no son contenido compartido para descubrimiento.

**Concept:** Ubicación de plantillas

**Authored coaching hints:**

- ¿Dónde busca GitHub recursos organizacionales?
- ¿Es archivo de repositorio o recurso local del runner?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde armazenar YAML de templates organizacionais oferecidos na experiência de novos workflows?

1. workflow-templates/ no repositório .github da organização. **[CORRECT]**

   Essa é a fonte documentada.

2. Home de cada runner.

   Arquivos locais não publicam templates.

3. Página de cobrança.

   Cobrança não armazena modelos.

4. Hooks locais de um desenvolvedor.

   Hooks locais não são conteúdo de descoberta compartilhado.

**Concept:** Localização de templates

**Authored coaching hints:**

- Onde GitHub busca scaffolding organizacional?
- É arquivo de repositório ou recurso local do runner?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-149:24ab0a20bd3cd9ed703366c3016d8c20682fc448376887cc7ad30b78113cc5b5 -->
## Question 149: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-149`

**Content revision:** `24ab0a20bd3cd9ed703366c3016d8c20682fc448376887cc7ad30b78113cc5b5`

### English

A template named service-ci.yml needs a display name and description in the workflow picker. Which companion file supplies that metadata?

1. service-ci.lock

   A lock file does not define workflow-picker display metadata.

2. service-ci.properties.json **[CORRECT]**

   The matching .properties.json file supplies the template's name, description, and optional discovery fields.

3. service-ci.env

   An env file is not template discovery metadata.

4. service-ci.action.yaml

   Action metadata is distinct from workflow-template metadata.

**Concept:** Workflow template metadata

**Authored coaching hints:**

- Which metadata is for discovery rather than execution?
- How is the companion file paired with the YAML template?

<details>
<summary>Español — same answer key and option order</summary>

### Español

service-ci.yml necesita nombre y descripción en el selector de workflows. ¿Qué archivo complementario los define?

1. service-ci.lock

   El lock no define presentación.

2. service-ci.properties.json **[CORRECT]**

   El .properties.json correspondiente aporta los metadatos.

3. service-ci.env

   Un env no es metadato de descubrimiento.

4. service-ci.action.yaml

   Los metadatos de acciones son diferentes.

**Concept:** Metadatos de plantillas

**Authored coaching hints:**

- ¿Qué metadatos sirven para descubrir y no ejecutar?
- ¿Cómo se vincula el archivo con su YAML?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

service-ci.yml precisa de nome e descrição no seletor de workflows. Qual arquivo complementar fornece isso?

1. service-ci.lock

   Lock não define apresentação.

2. service-ci.properties.json **[CORRECT]**

   O .properties.json correspondente fornece metadados.

3. service-ci.env

   env não é metadado de descoberta.

4. service-ci.action.yaml

   Metadados de ações são diferentes.

**Concept:** Metadados de templates

**Authored coaching hints:**

- Quais metadados servem para descoberta e não execução?
- Como o arquivo complementar se associa ao YAML?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:actions-150:1a49a94ec69a5ef6a621999d37db784da9c1cd1bd16c55e93ed37aa822ffc865 -->
## Question 150: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-150`

**Content revision:** `1a49a94ec69a5ef6a621999d37db784da9c1cd1bd16c55e93ed37aa822ffc865`

### English

An enterprise hosts templates in an internal .github repository. Which destination repository visibilities can consume those templates under the documented visibility rules?

1. Public repositories only.

   Internal templates are not offered to public repositories under these rules.

2. All repository types without restriction.

   The template repository's visibility constrains destination visibility.

3. Internal and private repositories. **[CORRECT]**

   Template destinations can match or be more restrictive than the internal source.

4. Only repositories named .github.

   Destination repository names need not equal the template repository name.

**Concept:** Template visibility boundaries

**Authored coaching hints:**

- Could using non-public scaffolding in a public repository expose it?
- How do matching or more restrictive destination visibilities preserve the boundary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa almacena plantillas en un repositorio .github interno. ¿Qué visibilidades de destino pueden consumirlas?

1. Solo pública.

   Las plantillas internas no se ofrecen a destinos públicos.

2. Todas sin restricciones.

   La visibilidad de origen limita destinos.

3. Interna y privada. **[CORRECT]**

   Los destinos pueden ser iguales o más restrictivos.

4. Solo repositorios llamados .github.

   El nombre del destino no tiene que coincidir.

**Concept:** Visibilidad de plantillas

**Authored coaching hints:**

- ¿Usar una plantilla no pública en destino público puede exponerla?
- ¿Qué destinos conservan el límite de privacidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa hospeda templates em .github interno. Quais visibilidades de destino podem consumi-los?

1. Somente pública.

   Templates internos não são oferecidos a destinos públicos.

2. Todas sem restrição.

   A visibilidade da fonte limita destinos.

3. Interna e privada. **[CORRECT]**

   Destinos podem ter visibilidade igual ou mais restritiva.

4. Somente repositórios chamados .github.

   O nome não precisa corresponder ao da fonte.

**Concept:** Visibilidade de templates

**Authored coaching hints:**

- Usar um modelo não público em destino público pode expô-lo?
- Quais destinos preservam o limite de privacidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-151:390e486d902a6e58073c2efeedf3871729858900f586ef3e5f2c0182a52d2230 -->
## Question 151: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-151`

**Content revision:** `390e486d902a6e58073c2efeedf3871729858900f586ef3e5f2c0182a52d2230`

### English

A reusable workflow calls another private workflow that the initial caller cannot access. The intermediate workflow can access it. What is required for the nested call chain to work?

1. Only the intermediate workflow needs access.

   Nested workflow accessibility is checked relative to the initial caller as well.

2. A longer timeout on the final job.

   Timeouts do not authorize access to private definitions.

3. A matching workflow display name.

   Display names are unrelated to source visibility.

4. Every nested workflow must be accessible to the initial caller. **[CORRECT]**

   A nested workflow chain fails if any called workflow is inaccessible to the initial caller.

**Concept:** Nested workflow accessibility

**Authored coaching hints:**

- Can an intermediate component launder access to a private downstream dependency?
- Whose trust context anchors the whole call tree?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow intermedio accede a otro privado, pero el llamador inicial no. ¿Qué exige la cadena anidada?

1. Solo acceso del intermedio.

   El acceso también se evalúa respecto al llamador inicial.

2. Más timeout.

   El tiempo no autoriza acceso.

3. Nombres visuales iguales.

   Los nombres no gobiernan visibilidad.

4. Acceso del llamador inicial a todos los workflows anidados. **[CORRECT]**

   Toda la cadena debe ser accesible al llamador inicial.

**Concept:** Acceso a workflows anidados

**Authored coaching hints:**

- ¿Un intermediario puede transferir acceso privado sin autorización?
- ¿Qué contexto de confianza sostiene toda la cadena?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow intermediário acessa outro privado, mas o chamador inicial não. O que a cadeia aninhada exige?

1. Somente acesso do intermediário.

   O acesso também é avaliado em relação ao chamador inicial.

2. Maior timeout.

   Tempo não autoriza acesso.

3. Nomes de exibição iguais.

   Nomes não governam visibilidade.

4. Acesso do chamador inicial a todos os workflows aninhados. **[CORRECT]**

   Toda a cadeia deve estar acessível ao chamador inicial.

**Concept:** Acesso a workflows aninhados

**Authored coaching hints:**

- Um intermediário pode repassar acesso privado sem autorização?
- Qual contexto de confiança sustenta toda a árvore?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-152:da82a677e78f5cfe1a5fd8cabb9d2e7b351cf2db4f7412c388735d1b1ad28136 -->
## Question 152: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-152`

**Content revision:** `da82a677e78f5cfe1a5fd8cabb9d2e7b351cf2db4f7412c388735d1b1ad28136`

### English

A central reusable workflow runs for many application repositories on GitHub-hosted runners. Which context determines the hosted runner assignment and associated billing?

1. The caller's context. **[CORRECT]**

   Hosted runner assignment and billing are evaluated using the caller's context.

2. Always the central workflow repository's billing account.

   The called repository does not lend its hosted-runner billing context to callers.

3. The last developer to edit the reusable file.

   Editor identity does not allocate the run's billing account.

4. The action's Marketplace category.

   Marketplace discovery categories do not affect hosted runner billing.

**Concept:** Reusable workflow runner billing

**Authored coaching hints:**

- Which repository initiates the work and owns the workflow run?
- Does centralizing source also centralize the caller's execution account?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow reutilizable central corre para muchos repositorios en runners hospedados. ¿Qué contexto determina asignación y facturación?

1. El del llamador. **[CORRECT]**

   La asignación y facturación se evalúan con el llamador.

2. Siempre la cuenta del repositorio central.

   El repositorio llamado no presta su cuenta.

3. El último editor.

   La identidad del editor no asigna costos.

4. La categoría Marketplace.

   La categoría no controla facturación.

**Concept:** Facturación de workflows reutilizables

**Authored coaching hints:**

- ¿Qué repositorio inicia y posee la ejecución?
- ¿Centralizar código centraliza también la cuenta de ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow central reutilizável executa para vários repositórios em runners hospedados. Qual contexto determina atribuição e cobrança?

1. O do chamador. **[CORRECT]**

   Atribuição e cobrança usam o contexto do chamador.

2. Sempre a conta do repositório central.

   O chamado não empresta sua conta de cobrança.

3. O último editor.

   O editor não determina a conta da execução.

4. A categoria Marketplace.

   Categorias não controlam cobrança.

**Concept:** Cobrança reutilizável

**Authored coaching hints:**

- Qual repositório inicia e possui a execução?
- Centralizar código centraliza também a conta de execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:actions-153:618945b7cc4f1c40b161a0deb0f400a97c4e36c60d30a5303e78274ee8a87dc7 -->
## Question 153: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-153`

**Content revision:** `618945b7cc4f1c40b161a0deb0f400a97c4e36c60d30a5303e78274ee8a87dc7`

### English

A security team wants workflow-file changes to require the platform team's review through normal pull requests. Which repository mechanism should be combined with enforced review rules?

1. An artifact named platform-review.

   Artifact names cannot enforce source review.

2. CODEOWNERS entries covering .github/workflows. **[CORRECT]**

   CODEOWNERS identifies responsible reviewers; enforced code-owner review rules make approval a gate.

3. A cron trigger in every workflow.

   Schedules do not govern pull-request review requirements.

4. A cache key with the reviewer names.

   Cache naming does not control branch protection.

**Concept:** Governance of workflow changes

**Authored coaching hints:**

- Where is ownership of sensitive source paths declared?
- What additional repository rule turns ownership into required approval?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los cambios de workflows deben requerir revisión del equipo plataforma en PR. ¿Qué combinar con reglas de revisión obligatorias?

1. Un artefacto platform-review.

   Un artefacto no exige revisión.

2. CODEOWNERS para .github/workflows. **[CORRECT]**

   CODEOWNERS identifica responsables y las reglas hacen obligatoria su aprobación.

3. Un cron en cada workflow.

   Los cron no gobiernan revisión.

4. Un cache con nombres de revisores.

   Los caches no protegen ramas.

**Concept:** Gobernanza de cambios de workflows

**Authored coaching hints:**

- ¿Dónde se declara propiedad de rutas sensibles?
- ¿Qué regla convierte esa propiedad en aprobación obligatoria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Mudanças de workflows devem exigir revisão da plataforma por PR. O que combinar com regras obrigatórias de revisão?

1. Artefato platform-review.

   Artefatos não exigem revisão.

2. CODEOWNERS cobrindo .github/workflows. **[CORRECT]**

   CODEOWNERS define responsáveis; regras tornam a aprovação obrigatória.

3. Cron em cada workflow.

   Cron não governa revisão.

4. Cache com nomes dos revisores.

   Cache não protege branches.

**Concept:** Governança de mudanças de workflows

**Authored coaching hints:**

- Onde declarar propriedade de caminhos sensíveis?
- Qual regra transforma propriedade em aprovação obrigatória?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-154:e43f8db73e2399941d08897e54866e3f131e6fc3b59862a052bfa4b37933cb66 -->
## Question 154: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-154`

**Content revision:** `e43f8db73e2399941d08897e54866e3f131e6fc3b59862a052bfa4b37933cb66`

### English

A default GITHUB\_TOKEN policy should remain restrictive, while a release job receives a documented additional write permission. Which governance pattern fits?

1. Set write-all globally for convenience.

   Broad defaults increase privileges for jobs that do not need them.

2. Distribute one administrator PAT to every workflow.

   A shared administrator PAT creates excessive and persistent access.

3. Keep defaults minimal and explicitly request justified job-level scopes. **[CORRECT]**

   Minimal defaults with scoped exceptions implement least-privilege delegation.

4. Store the permission names as repository labels.

   Repository labels do not grant token capabilities.

**Concept:** Token defaults and scoped exceptions

**Authored coaching hints:**

- Should every job inherit the exceptional needs of release automation?
- Where can a privilege requirement be made explicit and reviewable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se busca un GITHUB\_TOKEN restrictivo por defecto y permiso de escritura adicional solo para release. ¿Qué patrón corresponde?

1. write-all global.

   Los valores amplios aumentan privilegios innecesarios.

2. Un PAT administrador compartido.

   Un PAT compartido concede acceso excesivo y persistente.

3. Valores mínimos y permisos justificados explícitos por job. **[CORRECT]**

   Las excepciones acotadas aplican privilegio mínimo.

4. Permisos en etiquetas del repositorio.

   Las etiquetas no conceden capacidades.

**Concept:** Permisos predeterminados y excepciones

**Authored coaching hints:**

- ¿Todos los jobs necesitan privilegios excepcionales de release?
- ¿Dónde hacer revisable el permiso requerido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O GITHUB\_TOKEN deve ser restritivo por padrão, com escrita adicional só no job de release. Qual padrão corresponde?

1. write-all global.

   Padrões amplos concedem privilégios desnecessários.

2. Um PAT administrador compartilhado.

   Um PAT compartilhado oferece acesso excessivo e persistente.

3. Padrões mínimos e escopos justificados explícitos por job. **[CORRECT]**

   Exceções específicas aplicam privilégio mínimo.

4. Permissões em rótulos do repositório.

   Rótulos não concedem capacidades.

**Concept:** Padrões e exceções de permissões

**Authored coaching hints:**

- Todos os jobs precisam dos privilégios excepcionais da release?
- Onde tornar a necessidade explícita e revisável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-155:411b61ddaa315bb694bb28dbd9273ee5088776dd19b098c1b6b6c50855cc2b7f -->
## Question 155: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-155`

**Content revision:** `411b61ddaa315bb694bb28dbd9273ee5088776dd19b098c1b6b6c50855cc2b7f`

### English

A repository enables write permissions for its token, but automation still cannot create or approve pull requests because the organization prohibits that capability. What should administrators inspect?

1. Only the action's icon color.

   Branding does not authorize pull-request operations.

2. The artifact compression level.

   Artifact compression is unrelated to repository write policy.

3. The default branch's spelling.

   Branch naming does not relax organization governance.

4. The organization setting governing whether GitHub Actions can create and approve pull requests. **[CORRECT]**

   This capability has an explicit policy setting in addition to token permissions.

**Concept:** Pull-request automation governance

**Authored coaching hints:**

- Is having a token scope always sufficient under higher-level policy?
- Which organization setting governs the specific automated operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El token tiene escritura, pero una política organizacional impide crear o aprobar PR. ¿Qué revisar?

1. El color del icono.

   La marca visual no autoriza operaciones.

2. La compresión de artefactos.

   La compresión no afecta políticas de escritura.

3. El nombre de la rama predeterminada.

   El nombre no relaja gobernanza.

4. La configuración organizacional que permite a Actions crear y aprobar PR. **[CORRECT]**

   Existe una política específica además de los permisos del token.

**Concept:** Gobernanza de PR automatizados

**Authored coaching hints:**

- ¿Un alcance de token basta ante políticas superiores?
- ¿Qué configuración gobierna esa operación concreta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O token tem escrita, mas política organizacional impede criar ou aprovar PRs. O que revisar?

1. Cor do ícone.

   Branding não autoriza operações.

2. Compressão de artefatos.

   Compressão não afeta política de escrita.

3. Nome da branch padrão.

   Nome de branch não relaxa governança.

4. Configuração organizacional permitindo Actions criar e aprovar PRs. **[CORRECT]**

   Existe uma política específica além dos escopos do token.

**Concept:** Governança de PRs automatizados

**Authored coaching hints:**

- Ter um escopo basta diante de política superior?
- Qual configuração governa a operação específica?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-156:51bafa40288a0d12e3ca09bb727e2b0fe925345f69f052d10e9146f6cb0189dd -->
## Question 156: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-156`

**Content revision:** `51bafa40288a0d12e3ca09bb727e2b0fe925345f69f052d10e9146f6cb0189dd`

### English

A platform administrator wants to know which repositories consume a reusable workflow across an Enterprise Cloud organization. Which documented evidence source can support that inventory?

1. Organization audit log data through the REST API. **[CORRECT]**

   GitHub documents audit-log API monitoring of reusable workflow usage for Enterprise Cloud organizations.

2. The action's star count.

   Stars do not enumerate actual workflow consumers.

3. The runner's local browser history.

   Runner-local browsing history is not a workflow call inventory.

4. The central repository's README title only.

   A README title does not record execution relationships.

**Concept:** Monitoring reusable workflow adoption

**Authored coaching hints:**

- Which records capture organization automation activity rather than popularity?
- What administrative data source is queryable across repositories?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué evidencia documentada permite inventariar consumidores de un workflow reutilizable en una organización Enterprise Cloud?

1. Datos de auditoría organizacional mediante REST API. **[CORRECT]**

   El API de auditoría permite monitorear uso reutilizable.

2. Las estrellas de la acción.

   Las estrellas no enumeran consumidores reales.

3. Historial local del navegador del runner.

   El historial no registra llamadas de workflows.

4. Solo el título del README central.

   Un título no registra relaciones de ejecución.

**Concept:** Monitoreo de adopción reutilizable

**Authored coaching hints:**

- ¿Qué registros capturan actividad y no popularidad?
- ¿Qué fuente administrativa consulta varios repositorios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual evidência documentada ajuda a inventariar consumidores de um workflow reutilizável numa organização Enterprise Cloud?

1. Logs de auditoria organizacional via REST API. **[CORRECT]**

   O API de auditoria permite monitorar uso reutilizável.

2. Estrelas da ação.

   Estrelas não enumeram consumidores reais.

3. Histórico local de navegador do runner.

   Histórico de navegador não inventaria chamadas.

4. Somente o título do README central.

   Um título não registra relações de execução.

**Concept:** Monitoramento da adoção reutilizável

**Authored coaching hints:**

- Quais registros capturam atividade e não popularidade?
- Qual fonte administrativa consulta vários repositórios?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:actions-157:78baca47d1bfbc24acbdfc7933ca549fd485cd1c8ad72cdd48317e52abf47323 -->
## Question 157: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-157`

**Content revision:** `78baca47d1bfbc24acbdfc7933ca549fd485cd1c8ad72cdd48317e52abf47323`

### English

An organization wants to restrict creation of repository-level self-hosted runners rather than merely block one workflow from selecting a label. Which administrative control fits?

1. A step-level if condition.

   A step condition does not govern who can register repository runners.

2. The organization policy limiting which repositories may create self-hosted runners. **[CORRECT]**

   Organization policy can limit repository-level self-hosted runner availability.

3. The README's supported-runner table.

   Documentation communicates expectations without enforcing registration policy.

4. An input named self\_hosted.

   An input value does not control runner registration authorization.

**Concept:** Self-hosted runner governance

**Authored coaching hints:**

- Is the goal routing a job or controlling runner registration?
- Which setting can enforce that boundary across repositories?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se quiere restringir quién crea runners autohospedados de repositorio, no solo seleccionar etiquetas. ¿Qué control sirve?

1. Un if de paso.

   Un if no gobierna registro de runners.

2. La política organizacional que limita repositorios autorizados para crear runners. **[CORRECT]**

   La política limita disponibilidad de runners a nivel repositorio.

3. Una tabla README.

   Documentar no impone autorización.

4. Una entrada self\_hosted.

   Una entrada no controla registro.

**Concept:** Gobernanza de runners propios

**Authored coaching hints:**

- ¿La meta es enrutar jobs o controlar registro?
- ¿Qué configuración impone el límite en varios repositorios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

É preciso restringir criação de runners de repositório, não apenas selecionar rótulos. Qual controle serve?

1. Um if de etapa.

   if não governa registro de runners.

2. Política organizacional limitando quais repositórios podem criar runners próprios. **[CORRECT]**

   A política limita disponibilidade no nível de repositório.

3. Tabela no README.

   Documentação não impõe autorização.

4. Entrada self\_hosted.

   Uma entrada não controla registro.

**Concept:** Governança de runners próprios

**Authored coaching hints:**

- A meta é rotear jobs ou controlar registro?
- Qual configuração impõe o limite entre repositórios?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-158:91359f8f53b1d72fffc723749199741406202cf19edd9aebd8a82c75bb6d1808 -->
## Question 158: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-158`

**Content revision:** `91359f8f53b1d72fffc723749199741406202cf19edd9aebd8a82c75bb6d1808`

### English

A platform team must stop one disallowed external action from use throughout an organization while preserving other approved automation. What is more appropriate than editing every job manually?

1. Delete every Actions log.

   Log deletion does not restrict future executable dependencies.

2. Change the organization's avatar.

   Profile appearance has no enforcement effect.

3. Apply organization action-use policy to allow or block the relevant component. **[CORRECT]**

   Central action-use policy governs allowed components across repositories.

4. Rename the default runner group.

   Runner-group names do not determine third-party action policy.

**Concept:** Central action-use enforcement

**Authored coaching hints:**

- Which scope contains every affected repository?
- What control governs dependency use rather than individual executions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Hay que impedir una acción externa en toda la organización sin romper otras aprobadas. ¿Qué es mejor que editar cada job?

1. Eliminar todos los logs.

   Borrar logs no restringe dependencias futuras.

2. Cambiar el avatar.

   El avatar no impone reglas.

3. Aplicar política organizacional de uso de acciones. **[CORRECT]**

   La política central gobierna componentes permitidos.

4. Renombrar el grupo de runners.

   El nombre de un grupo no determina acciones externas permitidas.

**Concept:** Aplicación central de políticas

**Authored coaching hints:**

- ¿Qué ámbito contiene todos los repositorios afectados?
- ¿Qué control gobierna dependencias y no ejecuciones individuales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como impedir uma ação externa em toda a organização preservando outras aprovadas, sem editar cada job?

1. Excluir todos os logs.

   Apagar logs não restringe dependências futuras.

2. Alterar avatar.

   Avatar não impõe regras.

3. Aplicar política organizacional de uso de ações. **[CORRECT]**

   A política central governa componentes permitidos.

4. Renomear grupo de runners.

   Nomes de grupos não governam ações externas.

**Concept:** Aplicação central de políticas

**Authored coaching hints:**

- Qual escopo contém todos os repositórios afetados?
- Qual controle governa dependências e não execuções isoladas?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization>

<!-- certification-coach-question:actions-159:8d0e9f65046c5df813685b1b2a1a0956ca4d4019870bae6091c07df18a33babc -->
## Question 159: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-159`

**Content revision:** `8d0e9f65046c5df813685b1b2a1a0956ca4d4019870bae6091c07df18a33babc`

### English

A sensitive runner pool should be available only to three deployment repositories. Other repositories may have identical runner labels. Which mechanism enforces access?

1. Only use a hard-to-guess label.

   Labels select capabilities but are not a repository access boundary.

2. Put repository names in the runner's display name.

   Display names do not enforce access control.

3. Set timeout-minutes on the deployment job.

   Timeouts limit duration rather than caller authorization.

4. Place runners in a group with selected-repository access. **[CORRECT]**

   Runner-group repository policy restricts who can use the sensitive pool.

**Concept:** Runner-group access boundaries

**Authored coaching hints:**

- How does a routing label differ from an authorization policy?
- Where can the allowed repository set be enforced centrally?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Solo tres repositorios deben usar runners sensibles; otros tienen etiquetas idénticas. ¿Qué impone acceso?

1. Una etiqueta difícil de adivinar.

   Las etiquetas enrutan, no autorizan.

2. Nombres de repositorios en el nombre del runner.

   Los nombres no imponen permisos.

3. timeout-minutes.

   Timeout limita duración.

4. Un grupo con acceso a repositorios seleccionados. **[CORRECT]**

   La política del grupo restringe repositorios usuarios.

**Concept:** Límites de acceso por grupo

**Authored coaching hints:**

- ¿Cómo difiere etiqueta de autorización?
- ¿Dónde imponer centralmente el conjunto permitido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Só três repositórios devem usar runners sensíveis; outros têm rótulos iguais. O que impõe acesso?

1. Um rótulo difícil de adivinhar.

   Rótulos roteiam, não autorizam.

2. Nomes de repositórios no nome do runner.

   Nomes não impõem permissão.

3. timeout-minutes.

   Timeout limita duração.

4. Grupo com acesso a repositórios selecionados. **[CORRECT]**

   A política do grupo restringe repositórios consumidores.

**Concept:** Limites de acesso por grupo

**Authored coaching hints:**

- Como rótulo difere de autorização?
- Onde impor centralmente o conjunto permitido?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-160:f16ba3fadc68fc8c96e863ba088cb7c1e78385f48675a55076d22da5fbaa3dd8 -->
## Question 160: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-160`

**Content revision:** `f16ba3fadc68fc8c96e863ba088cb7c1e78385f48675a55076d22da5fbaa3dd8`

### English

A job must use a runner in group prod-builders that also carries label linux-x64. Which selection design expresses both requirements?

1. Use a runs-on mapping with group and labels. **[CORRECT]**

   A runs-on mapping can combine group membership with label matching.

2. Use only name: prod-builders on the job.

   Job display names do not select runners.

3. Set env.RUNNER=prod-builders.

   An arbitrary environment variable does not configure routing.

4. Add the label to the workflow's description.

   Descriptions do not define runner selection.

**Concept:** Combining runner groups and labels

**Authored coaching hints:**

- Which selector controls authorization context and which controls machine capability?
- How can both constraints be stated in the scheduler's configuration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un job necesita grupo prod-builders y etiqueta linux-x64. ¿Cómo expresar ambos requisitos?

1. Un mapeo runs-on con group y labels. **[CORRECT]**

   El mapeo combina pertenencia y etiquetas.

2. Solo name: prod-builders.

   name no selecciona runners.

3. env.RUNNER=prod-builders.

   Una variable arbitraria no enruta.

4. La etiqueta en la descripción.

   Las descripciones no definen selección.

**Concept:** Grupos y etiquetas combinados

**Authored coaching hints:**

- ¿Qué selector controla acceso y cuál capacidad?
- ¿Cómo expresar ambas restricciones al planificador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job precisa de grupo prod-builders e rótulo linux-x64. Como expressar ambos?

1. Mapeamento runs-on com group e labels. **[CORRECT]**

   O mapeamento combina grupo e rótulos.

2. Somente name: prod-builders.

   name não seleciona runners.

3. env.RUNNER=prod-builders.

   Variável arbitrária não configura roteamento.

4. Rótulo na descrição.

   Descrições não definem seleção.

**Concept:** Combinação de grupos e rótulos

**Authored coaching hints:**

- Qual seletor controla acesso e qual capacidade?
- Como apresentar ambas as restrições ao agendador?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow>

<!-- certification-coach-question:actions-161:bbd08c90c295c3b840e8f52bb292d9624e63fdd5b6aed7e384722782526edb02 -->
## Question 161: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-161`

**Content revision:** `bbd08c90c295c3b840e8f52bb292d9624e63fdd5b6aed7e384722782526edb02`

### English

A newly registered organization runner appears in the default group, but it should belong to build-fleet. How can future registrations select that existing group directly?

1. Set a secret named build-fleet.

   Secret names do not assign runner membership.

2. Pass --runnergroup build-fleet to the configuration script. **[CORRECT]**

   The runner configuration script supports --runnergroup for initial group assignment.

3. Rename action.yml to build-fleet.yml.

   Action metadata filenames do not control runner registration.

4. Set the workflow's run-name to build-fleet.

   Run titles are independent of runner-group assignment.

**Concept:** Runner registration group selection

**Authored coaching hints:**

- At what lifecycle stage is runner group membership initially assigned?
- Which tool registers the runner with the organization?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un runner nuevo cae en el grupo predeterminado, pero debe entrar a build-fleet. ¿Cómo seleccionarlo durante el registro?

1. Crear un secreto build-fleet.

   Los secretos no asignan grupos.

2. Pasar --runnergroup build-fleet al script de configuración. **[CORRECT]**

   --runnergroup selecciona el grupo inicial.

3. Renombrar action.yml.

   El archivo de acción no controla registro.

4. Usar run-name: build-fleet.

   El título no asigna grupos.

**Concept:** Grupo durante el registro

**Authored coaching hints:**

- ¿En qué fase se asigna la pertenencia inicial?
- ¿Qué herramienta registra el runner organizacional?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um runner novo entra no grupo padrão, mas deveria usar build-fleet. Como selecionar esse grupo durante o registro?

1. Criar segredo build-fleet.

   Segredos não atribuem grupos.

2. Passar --runnergroup build-fleet ao script de configuração. **[CORRECT]**

   --runnergroup seleciona o grupo inicial.

3. Renomear action.yml.

   O arquivo da ação não controla registro.

4. Usar run-name: build-fleet.

   O título não atribui grupos.

**Concept:** Grupo durante o registro

**Authored coaching hints:**

- Em qual fase a associação inicial é definida?
- Qual ferramenta registra o runner na organização?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-162:f8604043ced7a65ee6bca95a41633da9ea56aca6be6ea48fe7c6dec8fdda48fe -->
## Question 162: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-162`

**Content revision:** `f8604043ced7a65ee6bca95a41633da9ea56aca6be6ea48fe7c6dec8fdda48fe`

### English

An organization runner was registered without a group argument. Where should an administrator first look for it?

1. The repository's Releases page.

   Release assets are not runner membership records.

2. The organization's secret list.

   Runner registration does not create a secret entry.

3. The default runner group. **[CORRECT]**

   Runners are added to the default group when no group is specified.

4. A new group named after the runner OS.

   GitHub does not create an OS-named group automatically for each registration.

**Concept:** Default runner placement

**Authored coaching hints:**

- What happens when registration omits an optional grouping choice?
- Does a new registration automatically create a custom access policy?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se registró un runner organizacional sin indicar grupo. ¿Dónde buscarlo primero?

1. En Releases.

   Los assets no registran pertenencia.

2. En los secretos organizacionales.

   El registro no crea un secreto.

3. En el grupo predeterminado. **[CORRECT]**

   Sin argumento se usa el grupo predeterminado.

4. En un grupo nuevo llamado como el sistema operativo.

   GitHub no crea automáticamente grupos por sistema.

**Concept:** Ubicación predeterminada de runners

**Authored coaching hints:**

- ¿Qué sucede al omitir una opción de agrupación?
- ¿El registro crea automáticamente una política personalizada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um runner organizacional foi registrado sem argumento de grupo. Onde procurá-lo primeiro?

1. Em Releases.

   Assets não registram associação.

2. Na lista de segredos.

   Registrar não cria segredo.

3. No grupo padrão. **[CORRECT]**

   Sem argumento, usa-se o grupo padrão.

4. Em novo grupo com o nome do sistema operacional.

   GitHub não cria automaticamente grupos por sistema.

**Concept:** Localização padrão de runners

**Authored coaching hints:**

- O que acontece ao omitir uma opção de agrupamento?
- O registro cria automaticamente política personalizada?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:actions-163:9958ac82cc7036e66cd97a657eed0d4a1dacec46e7917791e5ded292a70d75b5 -->
## Question 163: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-163`

**Content revision:** `9958ac82cc7036e66cd97a657eed0d4a1dacec46e7917791e5ded292a70d75b5`

### English

A queued job requests self-hosted, linux, and gpu. An idle runner has only self-hosted and linux labels. Why is it not selected?

1. The runner's display name must equal the job ID.

   Runner and job display names need not match.

2. Idle runners never accept queued jobs.

   Idle, eligible runners are the normal candidates for queued jobs.

3. Only the first label is considered.

   A label array is conjunctive rather than first-label-only.

4. The runner must match every requested label, including gpu. **[CORRECT]**

   The missing capability label prevents this runner from matching the request.

**Concept:** Self-hosted routing eligibility

**Authored coaching hints:**

- Is the selector asking for any label or all of them?
- Which requested capability is absent from the available machine?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un job solicita self-hosted, linux y gpu. Un runner libre tiene solo self-hosted y linux. ¿Por qué no se selecciona?

1. Su nombre debe coincidir con el ID del job.

   Los nombres no necesitan coincidir.

2. Los runners libres no aceptan jobs.

   Los libres elegibles son candidatos normales.

3. Solo se considera la primera etiqueta.

   Las etiquetas se combinan conjuntamente.

4. Debe coincidir con todas las etiquetas, incluida gpu. **[CORRECT]**

   La etiqueta faltante impide la coincidencia.

**Concept:** Elegibilidad por etiquetas

**Authored coaching hints:**

- ¿Se solicita cualquier etiqueta o todas?
- ¿Qué capacidad solicitada falta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job pede self-hosted, linux e gpu. Um runner ocioso tem apenas self-hosted e linux. Por que não é selecionado?

1. Seu nome deve igualar o ID do job.

   Os nomes não precisam corresponder.

2. Runners ociosos não recebem jobs.

   Ociosos elegíveis são candidatos normais.

3. Só o primeiro rótulo importa.

   Os rótulos são combinados conjuntamente.

4. Deve corresponder a todos os rótulos, incluindo gpu. **[CORRECT]**

   O rótulo ausente impede correspondência.

**Concept:** Elegibilidade por rótulos

**Authored coaching hints:**

- O seletor pede qualquer rótulo ou todos?
- Qual capacidade solicitada falta na máquina?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-164:be00f4fd2ac0dca5451c7797273b6772d71940b9a85686667ff464a497fdb2ac -->
## Question 164: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-164`

**Content revision:** `be00f4fd2ac0dca5451c7797273b6772d71940b9a85686667ff464a497fdb2ac`

### English

All runners matching a queued self-hosted job are offline. What is the expected scheduling behavior before the documented queue timeout?

1. The job remains queued waiting for an eligible online, idle runner. **[CORRECT]**

   GitHub waits for a matching runner; unmatched self-hosted jobs can eventually time out.

2. The job silently switches to an arbitrary hosted runner.

   GitHub does not silently replace a self-hosted requirement with hosted execution.

3. The job immediately reports success.

   No executed job means success cannot be inferred.

4. The job rewrites its runs-on labels automatically.

   The scheduler does not rewrite the workflow's capability requirements.

**Concept:** Self-hosted queue behavior

**Authored coaching hints:**

- Can the scheduler disregard an explicit execution-environment requirement?
- What runner states are eligible to receive work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Todos los runners compatibles con un job autohospedado están offline. ¿Qué ocurre antes del timeout de cola?

1. El job espera un runner compatible, online y libre. **[CORRECT]**

   GitHub espera hasta disponibilidad o timeout.

2. Cambia silenciosamente a uno hospedado.

   No sustituye el requisito autohospedado.

3. Informa éxito inmediato.

   Sin ejecutar no se puede inferir éxito.

4. Reescribe runs-on automáticamente.

   El planificador no modifica requisitos.

**Concept:** Cola autohospedada

**Authored coaching hints:**

- ¿Puede ignorarse un requisito explícito de entorno?
- ¿Qué estados permiten recibir trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Todos os runners compatíveis com um job próprio estão offline. O que ocorre antes do timeout de fila?

1. O job espera um runner compatível, online e ocioso. **[CORRECT]**

   GitHub aguarda disponibilidade ou timeout.

2. Muda silenciosamente para hospedado.

   Não substitui requisito próprio por hospedado.

3. Informa sucesso imediato.

   Sem executar não se infere sucesso.

4. Reescreve runs-on automaticamente.

   O agendador não altera requisitos.

**Concept:** Fila de runners próprios

**Authored coaching hints:**

- Pode-se ignorar um requisito explícito de ambiente?
- Quais estados permitem receber trabalho?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-165:9f56a2c54368c22d43781a6102a7474d41d75b99178ce1acba5ce8de9744bb26 -->
## Question 165: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-165`

**Content revision:** `9f56a2c54368c22d43781a6102a7474d41d75b99178ce1acba5ce8de9744bb26`

### English

A self-hosted runner's machine is powered on but its GitHub status is Offline. Which investigation is most appropriate first?

1. Increase the workflow's artifact retention.

   Artifact lifetime does not restore runner connectivity.

2. Check whether the runner application is running and can communicate with GitHub. **[CORRECT]**

   Offline can mean the listener is stopped or cannot reach GitHub even when the machine is powered on.

3. Remove all test assertions.

   Test assertions are irrelevant before a job is accepted.

4. Publish the runner to Marketplace.

   Runners are not published as Marketplace actions.

**Concept:** Runner offline diagnostics

**Authored coaching hints:**

- Is machine power equivalent to an active runner listener connection?
- Which two prerequisites connect the machine to the scheduler?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La máquina está encendida, pero su runner figura Offline. ¿Qué investigar primero?

1. Retención de artefactos.

   La retención no restaura conexión.

2. Que la aplicación runner esté activa y pueda comunicarse con GitHub. **[CORRECT]**

   El listener puede estar detenido o sin conectividad.

3. Eliminar aserciones.

   Las pruebas no importan antes de aceptar trabajo.

4. Publicarlo en Marketplace.

   Los runners no son acciones Marketplace.

**Concept:** Diagnóstico de runner offline

**Authored coaching hints:**

- ¿Encender la máquina equivale a tener un listener conectado?
- ¿Qué dos requisitos conectan máquina y planificador?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A máquina está ligada, mas o runner aparece Offline. O que investigar primeiro?

1. Retenção de artefatos.

   Retenção não restaura conexão.

2. Se a aplicação runner está ativa e comunica com GitHub. **[CORRECT]**

   O listener pode estar parado ou sem conectividade.

3. Excluir asserções.

   Testes não importam antes de aceitar trabalho.

4. Publicar no Marketplace.

   Runners não são ações Marketplace.

**Concept:** Diagnóstico de runner offline

**Authored coaching hints:**

- Máquina ligada equivale a listener conectado?
- Quais dois requisitos conectam máquina e agendador?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-166:106e71d5030100fba76eef6a0059977f28cfe29fea5087c2bdbe1390bddd9da9 -->
## Question 166: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-166`

**Content revision:** `106e71d5030100fba76eef6a0059977f28cfe29fea5087c2bdbe1390bddd9da9`

### English

A firewall change prevents a self-hosted runner from accepting work. Which built-in diagnostic can test access to required GitHub services?

1. The upload-artifact action's name input.

   Artifact naming cannot diagnose listener connectivity.

2. The workflow badge URL.

   A badge does not test the runner's network path to required services.

3. The runner configuration script's --check operation with the required authentication arguments. **[CORRECT]**

   The documented --check operation tests the runner's required service connectivity.

4. The repository's default branch rename control.

   Branch renaming does not test firewall rules.

**Concept:** Runner connectivity checks

**Authored coaching hints:**

- Which diagnostic runs from the affected network location?
- Would a browser working on an administrator's laptop prove the runner can connect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras cambiar el firewall, un runner no acepta trabajo. ¿Qué diagnóstico integrado comprueba servicios requeridos?

1. name de upload-artifact.

   Nombrar artefactos no prueba conectividad.

2. La URL de la insignia.

   La insignia no comprueba la ruta del runner.

3. --check del script de configuración con autenticación requerida. **[CORRECT]**

   --check prueba conectividad a servicios necesarios.

4. Renombrar la rama predeterminada.

   Renombrar ramas no prueba el firewall.

**Concept:** Comprobación de conectividad

**Authored coaching hints:**

- ¿Qué diagnóstico corre desde la red afectada?
- ¿Que funcione el navegador del administrador prueba la conexión del runner?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após mudança no firewall, o runner não aceita trabalho. Qual diagnóstico integrado testa serviços necessários?

1. name de upload-artifact.

   Nome de artefato não testa conexão.

2. URL do selo.

   Um selo não testa a rota do runner.

3. --check do script de configuração com autenticação necessária. **[CORRECT]**

   --check verifica conectividade aos serviços exigidos.

4. Renomear a branch padrão.

   Renomear branches não testa firewall.

**Concept:** Verificação de conectividade

**Authored coaching hints:**

- Qual diagnóstico executa na rede afetada?
- Navegador funcionando no laptop do administrador prova conexão do runner?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-167:9351e19b0dda8c60e6be5f14719069be5f858bc94e1e57652cb68be429017fb1 -->
## Question 167: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-167`

**Content revision:** `9351e19b0dda8c60e6be5f14719069be5f858bc94e1e57652cb68be429017fb1`

### English

An investigator needs the runner application's listener diagnostics on a self-hosted machine. Which files should they inspect?

1. The repository's CODEOWNERS file.

   CODEOWNERS defines review ownership rather than runner process diagnostics.

2. Only package-lock.json.

   A dependency lockfile does not record the runner listener's activity.

3. The organization's avatar image.

   Profile images do not contain runner diagnostics.

4. Runner\_ files in the installation's \_diag directory. **[CORRECT]**

   Runner\_ log files in \_diag record runner application activity.

**Concept:** Self-hosted listener logs

**Authored coaching hints:**

- Where does the installed runner keep its own operational evidence?
- How does listener-level logging differ from an individual command's output?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se necesitan diagnósticos del listener del runner autohospedado. ¿Qué archivos revisar?

1. CODEOWNERS.

   CODEOWNERS define revisores.

2. Solo package-lock.json.

   El lockfile no registra el listener.

3. El avatar organizacional.

   Un avatar no contiene diagnósticos.

4. Archivos Runner\_ en \_diag de la instalación. **[CORRECT]**

   Runner\_ registra actividad de la aplicación.

**Concept:** Logs del listener

**Authored coaching hints:**

- ¿Dónde guarda evidencia operativa el runner instalado?
- ¿Cómo difiere del resultado de un comando individual?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

São necessários diagnósticos do listener de um runner próprio. Quais arquivos verificar?

1. CODEOWNERS.

   CODEOWNERS define revisores.

2. Somente package-lock.json.

   O lockfile não registra atividade do listener.

3. Avatar organizacional.

   Avatar não contém diagnósticos.

4. Arquivos Runner\_ em \_diag da instalação. **[CORRECT]**

   Runner\_ registra atividade da aplicação.

**Concept:** Logs do listener

**Authored coaching hints:**

- Onde a instalação guarda evidência operacional?
- Como difere da saída de um comando individual?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-168:99242e6cf61cbf7560de7aa1736fdee5a76d7ee7775930e69161754f9e747fbf -->
## Question 168: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-168`

**Content revision:** `99242e6cf61cbf7560de7aa1736fdee5a76d7ee7775930e69161754f9e747fbf`

### English

A platform engineer needs detailed per-job execution diagnostics from a self-hosted runner installation, rather than only its listener startup history. Which log family fits?

1. Worker\_ files in \_diag. **[CORRECT]**

   Worker\_ files contain detailed diagnostics for jobs processed by the runner.

2. The repository's contribution guidelines.

   Contribution guidelines are not execution traces.

3. The runner group's description text.

   Descriptions do not contain job process diagnostics.

4. A random previous release asset.

   Unrelated release assets are not the runner's per-job logs.

**Concept:** Self-hosted worker logs

**Authored coaching hints:**

- Which process executes a job after the listener accepts it?
- What log granularity is needed to distinguish startup from job execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se requieren diagnósticos detallados por job, no solo arranque del listener. ¿Qué familia de logs corresponde?

1. Worker\_ en \_diag. **[CORRECT]**

   Worker\_ contiene diagnósticos de jobs procesados.

2. Las normas de contribución.

   Las normas no son trazas.

3. La descripción del grupo.

   Las descripciones no registran procesos.

4. Un asset de release anterior no relacionado.

   Un asset ajeno no es un log de ejecución.

**Concept:** Logs del worker

**Authored coaching hints:**

- ¿Qué proceso ejecuta el job tras aceptarlo?
- ¿Qué granularidad distingue inicio de ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

São necessários diagnósticos detalhados por job, não só histórico de início do listener. Qual família de logs serve?

1. Worker\_ em \_diag. **[CORRECT]**

   Worker\_ registra diagnósticos dos jobs processados.

2. Diretrizes de contribuição.

   Diretrizes não são rastreamentos.

3. Descrição do grupo.

   Descrições não registram processos.

4. Asset antigo não relacionado.

   Um asset aleatório não é log de job.

**Concept:** Logs do worker

**Authored coaching hints:**

- Qual processo executa o job após o listener aceitá-lo?
- Qual granularidade distingue início e execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-169:7337cf8de22cd03e01087bb236f3a537233f4238271d5d8f268aaccd45562887 -->
## Question 169: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-169`

**Content revision:** `7337cf8de22cd03e01087bb236f3a537233f4238271d5d8f268aaccd45562887`

### English

An organization uses ephemeral self-hosted runners that are destroyed immediately after one job. What must its observability design preserve externally?

1. Only the runner's display name.

   A name alone cannot explain execution or registration failures.

2. Runner application logs needed for later troubleshooting. **[CORRECT]**

   Ephemeral hosts disappear, so their diagnostic logs should be forwarded and retained outside the host.

3. Every developer's browser cookies.

   Browser cookies are sensitive and unrelated to runner observability.

4. Only the workflow's Marketplace category.

   Discovery categories do not capture operational evidence.

**Concept:** Ephemeral runner log preservation

**Authored coaching hints:**

- What evidence disappears when the machine is destroyed?
- Which telemetry must outlive the resource that produced it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Los runners efímeros se destruyen tras un job. ¿Qué debe conservar externamente la observabilidad?

1. Solo el nombre.

   El nombre no explica fallas.

2. Logs de la aplicación runner para diagnosticar después. **[CORRECT]**

   Los diagnósticos deben sobrevivir al host.

3. Cookies de todos los desarrolladores.

   Las cookies son sensibles y ajenas.

4. Solo la categoría Marketplace.

   Las categorías no registran evidencia operativa.

**Concept:** Conservación de logs efímeros

**Authored coaching hints:**

- ¿Qué evidencia desaparece con la máquina?
- ¿Qué telemetría debe sobrevivir a su productor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Runners efêmeros são destruídos após um job. O que a observabilidade deve preservar externamente?

1. Somente o nome.

   O nome não explica falhas.

2. Logs da aplicação runner para diagnóstico posterior. **[CORRECT]**

   Diagnósticos precisam sobreviver ao host.

3. Cookies de todos os desenvolvedores.

   Cookies são sensíveis e não pertinentes.

4. Somente a categoria Marketplace.

   Categorias não registram evidência operacional.

**Concept:** Preservação de logs efêmeros

**Authored coaching hints:**

- Qual evidência desaparece com a máquina?
- Qual telemetria precisa sobreviver ao produtor?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-170:d689a581eaa0f6ae4546f80d9342b2c8702cba64145ce11e3222388edbe3bfd7 -->
## Question 170: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-170`

**Content revision:** `d689a581eaa0f6ae4546f80d9342b2c8702cba64145ce11e3222388edbe3bfd7`

### English

A Kubernetes platform needs a supported reference approach for autoscaling self-hosted GitHub Actions runners. Which project is designed for that environment?

1. The workflow status badge generator.

   Badges display status and do not provision runners.

2. A reusable workflow input validator only.

   Input validation does not manage Kubernetes execution capacity.

3. Actions Runner Controller. **[CORRECT]**

   Actions Runner Controller manages runner lifecycle and scaling in Kubernetes.

4. A repository issue template.

   Issue templates collect collaboration data rather than autoscale runners.

**Concept:** Kubernetes runner autoscaling

**Authored coaching hints:**

- Is the problem workflow logic or execution infrastructure lifecycle?
- Which controller integrates runner capacity with Kubernetes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué proyecto ofrece un enfoque de referencia para autoescalar runners autohospedados en Kubernetes?

1. Generador de insignias.

   Las insignias no aprovisionan runners.

2. Solo un validador de entradas.

   Validar entradas no administra infraestructura.

3. Actions Runner Controller. **[CORRECT]**

   ARC administra ciclo de vida y escalado en Kubernetes.

4. Plantillas de issues.

   Las issues no autoescalan capacidad.

**Concept:** Autoescalado en Kubernetes

**Authored coaching hints:**

- ¿Es lógica de workflow o ciclo de infraestructura?
- ¿Qué controlador integra capacidad y Kubernetes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual projeto oferece abordagem de referência para autoescalar runners próprios em Kubernetes?

1. Gerador de selos.

   Selos não provisionam capacidade.

2. Só um validador de entradas.

   Validar entradas não administra infraestrutura.

3. Actions Runner Controller. **[CORRECT]**

   ARC gerencia ciclo de vida e escala em Kubernetes.

4. Template de issue.

   Templates não autoescalam runners.

**Concept:** Autoescala em Kubernetes

**Authored coaching hints:**

- É lógica de workflow ou ciclo da infraestrutura?
- Qual controlador integra capacidade ao Kubernetes?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-171:fda1593fba69ca730cceff8d5545caddcd15eda77af194b514132a8bc1a78a79 -->
## Question 171: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-171`

**Content revision:** `fda1593fba69ca730cceff8d5545caddcd15eda77af194b514132a8bc1a78a79`

### English

A team is designing autoscaling and wants a clean self-hosted environment for each job. Which runner lifecycle does GitHub recommend over reusing persistent machines indefinitely?

1. Keep every machine permanently registered and never clean it.

   Persistent reuse retains state and is not the recommended autoscaling pattern.

2. Use one shared administrator desktop for all jobs.

   A shared desktop weakens isolation and operational reliability.

3. Only rotate runner display names.

   Renaming does not remove residual state.

4. Use ephemeral runners and destroy or reset their backing environments after one job. **[CORRECT]**

   Ephemeral runners receive one job; lifecycle automation can then remove the backing environment.

**Concept:** Ephemeral autoscaling isolation

**Authored coaching hints:**

- How can previous jobs leave state that affects later work?
- What boundary makes cleanup and capacity allocation easier to reason about?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para autoescalar con un entorno autohospedado limpio por job, ¿qué ciclo recomienda GitHub?

1. Reutilizar máquinas indefinidamente sin limpieza.

   La reutilización conserva estado.

2. Un escritorio administrador compartido.

   Un escritorio compartido debilita aislamiento.

3. Cambiar solo nombres.

   Renombrar no elimina estado.

4. Runners efímeros y destruir o reiniciar el entorno tras un job. **[CORRECT]**

   Los efímeros reciben un job y permiten desechar el entorno.

**Concept:** Aislamiento efímero

**Authored coaching hints:**

- ¿Qué estado puede dejar un job anterior?
- ¿Qué límite simplifica limpieza y capacidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para autoescalar com ambiente próprio limpo por job, qual ciclo GitHub recomenda?

1. Reusar máquinas para sempre sem limpeza.

   Reuso conserva estado.

2. Um desktop administrador compartilhado.

   Desktop compartilhado enfraquece isolamento.

3. Mudar somente nomes.

   Renomear não remove estado.

4. Runners efêmeros e destruir ou restaurar o ambiente após um job. **[CORRECT]**

   Efêmeros recebem um job e permitem descartar o ambiente.

**Concept:** Isolamento efêmero

**Authored coaching hints:**

- Que estado um job anterior pode deixar?
- Qual limite simplifica limpeza e alocação de capacidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-172:402c88b3f2fbf2a1a97a368bb0326fb3dfe45f5284b33b474eea230573f93cb8 -->
## Question 172: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-172`

**Content revision:** `402c88b3f2fbf2a1a97a368bb0326fb3dfe45f5284b33b474eea230573f93cb8`

### English

A runner image disables automatic runner application updates to keep image builds controlled. What maintenance obligation remains?

1. Update the runner regularly within GitHub's required window; critical updates can block jobs sooner. **[CORRECT]**

   Disabling auto-update transfers responsibility to the operator; stale or critically vulnerable runners can stop receiving jobs.

2. Never update because the image is pinned.

   Pinning an image does not exempt its runner from compatibility and security requirements.

3. Update only the repository README.

   Documentation changes do not update the application.

4. Assume GitHub patches the entire self-hosted OS anyway.

   GitHub does not maintain the self-hosted operating system for the operator.

**Concept:** Self-hosted update responsibility

**Authored coaching hints:**

- Does disabling automatic maintenance remove the underlying requirement?
- Which service compatibility and security risks remain with an old runner binary?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una imagen deshabilita actualizaciones automáticas de la aplicación runner. ¿Qué obligación permanece?

1. Actualizar dentro del plazo requerido; las críticas pueden bloquear antes. **[CORRECT]**

   La responsabilidad pasa al operador; versiones obsoletas pueden dejar de recibir jobs.

2. Nunca actualizar porque está fijada.

   Fijar imagen no elimina requisitos de seguridad.

3. Actualizar solo el README.

   La documentación no actualiza binarios.

4. GitHub mantiene todo el sistema autohospedado.

   GitHub no mantiene el sistema operativo propio.

**Concept:** Responsabilidad de actualización

**Authored coaching hints:**

- ¿Deshabilitar mantenimiento automático elimina la necesidad?
- ¿Qué riesgos de compatibilidad y seguridad conserva un binario viejo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma imagem desabilita atualização automática da aplicação runner. Qual obrigação permanece?

1. Atualizar dentro do prazo exigido; atualizações críticas podem bloquear antes. **[CORRECT]**

   A responsabilidade passa ao operador; versões obsoletas podem parar de receber jobs.

2. Nunca atualizar porque está fixada.

   Fixação não elimina requisitos de segurança.

3. Atualizar só README.

   Documentação não atualiza binários.

4. GitHub mantém todo o sistema próprio.

   GitHub não mantém o sistema operacional próprio.

**Concept:** Responsabilidade por atualização

**Authored coaching hints:**

- Desabilitar manutenção automática elimina a necessidade?
- Quais riscos de compatibilidade e segurança permanecem num binário antigo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-173:32ce82d556766b34722f40c0b8e231596b58fbd14fe03880da959153e8dfe489 -->
## Question 173: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-173`

**Content revision:** `32ce82d556766b34722f40c0b8e231596b58fbd14fe03880da959153e8dfe489`

### English

A self-hosted fleet must run Docker container actions and database service containers. Which base execution environment is required?

1. Any macOS host without Docker.

   Docker actions and service containers require Linux in this runner model.

2. A Linux runner machine with Docker installed. **[CORRECT]**

   GitHub documents Linux plus installed Docker for these container features on self-hosted machines.

3. A Windows-only runner with no container engine.

   A Windows host without the required container runtime does not meet the requirement.

4. Only a browser session signed into GitHub.

   A browser session is not a job execution environment.

**Concept:** Self-hosted container prerequisites

**Authored coaching hints:**

- Which host executes the container engine?
- Are all Actions features supported equally on every runner operating system?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una flota autohospedada ejecutará acciones Docker y contenedores de bases de datos. ¿Qué base requiere?

1. macOS sin Docker.

   Estas funciones requieren Linux.

2. Máquina Linux con Docker instalado. **[CORRECT]**

   Linux y Docker son requisitos documentados.

3. Windows sin motor de contenedores.

   No cumple host ni runtime requeridos.

4. Solo una sesión de navegador.

   El navegador no ejecuta jobs.

**Concept:** Requisitos de contenedores

**Authored coaching hints:**

- ¿Qué host ejecuta el motor?
- ¿Todos los sistemas admiten las mismas funciones Actions?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma frota própria executará ações Docker e contêineres de banco de dados. Qual base é necessária?

1. macOS sem Docker.

   Essas funções exigem Linux.

2. Máquina Linux com Docker instalado. **[CORRECT]**

   Linux com Docker é requisito documentado.

3. Windows sem engine de contêiner.

   Não atende host nem runtime.

4. Só uma sessão de navegador.

   Navegador não é ambiente de execução de jobs.

**Concept:** Requisitos de contêineres

**Authored coaching hints:**

- Qual host executa a engine?
- Todos os sistemas suportam as mesmas funções Actions?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:actions-174:45275e2f7abf8dfcd1289c5e3b44174efe5506b15d6ae2b4ab9bc877fb5db405 -->
## Question 174: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-174`

**Content revision:** `45275e2f7abf8dfcd1289c5e3b44174efe5506b15d6ae2b4ab9bc877fb5db405`

### English

A team chooses self-hosted runners for a specialized compiler and internal network access. Who is responsible for maintaining the machine's OS and installed toolchain?

1. Marketplace action authors.

   Action authors do not administer consumers' runner machines.

2. The author of the latest pull request.

   Submitting code does not transfer infrastructure maintenance responsibility.

3. The team operating the self-hosted runner. **[CORRECT]**

   Self-hosted runner operators maintain the host environment and tools.

4. GitHub automatically maintains all installed self-hosted software.

   Runner application updates do not imply full OS and toolchain maintenance by GitHub.

**Concept:** Self-hosted operational ownership

**Authored coaching hints:**

- Which party controls the machine image and network?
- How does hosting responsibility differ from GitHub-hosted execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se eligen runners propios por compilador especializado y red interna. ¿Quién mantiene sistema y herramientas?

1. Autores Marketplace.

   Los autores no administran máquinas ajenas.

2. El autor del último PR.

   Enviar código no transfiere mantenimiento.

3. El equipo operador del runner. **[CORRECT]**

   El operador mantiene host y herramientas.

4. GitHub mantiene automáticamente todo.

   Actualizar la aplicación runner no mantiene todo el sistema.

**Concept:** Responsabilidad operativa propia

**Authored coaching hints:**

- ¿Quién controla imagen y red?
- ¿Cómo cambia la responsabilidad respecto a runners hospedados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Runners próprios foram escolhidos por compilador especial e rede interna. Quem mantém sistema e ferramentas?

1. Autores Marketplace.

   Autores não administram máquinas dos consumidores.

2. Autor do último PR.

   Enviar código não transfere manutenção.

3. Equipe operadora do runner. **[CORRECT]**

   O operador mantém host e ferramentas.

4. GitHub mantém tudo automaticamente.

   Atualização do runner não mantém todo o sistema.

**Concept:** Responsabilidade operacional própria

**Authored coaching hints:**

- Quem controla imagem e rede?
- Como a responsabilidade difere de runners hospedados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-175:898653e38d2bc53356874c6aa030198965bd80e653dacee258eb3253de08dc13 -->
## Question 175: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-175`

**Content revision:** `898653e38d2bc53356874c6aa030198965bd80e653dacee258eb3253de08dc13`

### English

A workflow depends on a specific compiler version, but hosted images update over time. Which practice reduces accidental toolchain drift?

1. Trust whichever compiler is first on PATH forever.

   An unqualified PATH lookup can select a changed preinstalled version.

2. Never read the image release notes.

   Ignoring image changes makes migrations harder to anticipate.

3. Only change the workflow's name.

   Display names do not pin software.

4. Explicitly select or install the required tool version and monitor image updates. **[CORRECT]**

   Explicit tool setup and image awareness make the execution dependency deliberate.

**Concept:** Hosted image toolchain management

**Authored coaching hints:**

- Does an OS image label guarantee every tool's exact version?
- Which dependencies should be selected explicitly in the workflow?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El workflow necesita compilador exacto, pero las imágenes hospedadas cambian. ¿Cómo reducir deriva accidental?

1. Confiar siempre en el primero de PATH.

   PATH puede seleccionar versiones nuevas.

2. Ignorar notas de imagen.

   Ignorar cambios dificulta migraciones.

3. Cambiar solo el nombre del workflow.

   El nombre no fija software.

4. Seleccionar o instalar explícitamente la versión y monitorear imágenes. **[CORRECT]**

   La selección explícita hace deliberada la dependencia.

**Concept:** Gestión de herramientas hospedadas

**Authored coaching hints:**

- ¿Una etiqueta de sistema congela cada herramienta?
- ¿Qué dependencias deben seleccionarse explícitamente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O workflow exige compilador específico, mas imagens hospedadas mudam. Como reduzir variação acidental?

1. Confiar para sempre no primeiro de PATH.

   PATH pode passar a selecionar outra versão.

2. Ignorar notas das imagens.

   Ignorar mudanças dificulta migrações.

3. Mudar só o nome do workflow.

   Nomes não fixam software.

4. Selecionar ou instalar explicitamente a versão e acompanhar imagens. **[CORRECT]**

   Seleção explícita torna a dependência deliberada.

**Concept:** Gestão de ferramentas hospedadas

**Authored coaching hints:**

- Um rótulo de sistema congela todas as ferramentas?
- Quais dependências devem ser selecionadas explicitamente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/github-hosted-runners>

<!-- certification-coach-question:actions-176:cd833a5a092722a2a18643e6da93426032de5d3d0b36797a0b5a370ea3ee2271 -->
## Question 176: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-176`

**Content revision:** `cd833a5a092722a2a18643e6da93426032de5d3d0b36797a0b5a370ea3ee2271`

### English

The windows-latest label migrates to a newer Windows image and a legacy build fails. Which response best balances compatibility and maintenance?

1. Consult image migration notes, test the new image, and temporarily use a supported explicit OS label if needed. **[CORRECT]**

   Migration evidence and an explicit supported label allow controlled remediation.

2. Assume latest is an immutable image digest.

   A latest label can move as GitHub updates its stable image selection.

3. Disable every organization workflow permanently.

   A single compatibility issue does not justify permanently disabling unrelated automation.

4. Use a cache key to force the old operating system back.

   A dependency cache cannot replace the runner operating system image.

**Concept:** Hosted image migration planning

**Authored coaching hints:**

- What does a floating image label promise, and what does it not freeze?
- How can compatibility testing avoid a last-minute migration surprise?

<details>
<summary>Español — same answer key and option order</summary>

### Español

windows-latest migra y rompe una compilación heredada. ¿Qué respuesta equilibra mantenimiento y compatibilidad?

1. Consultar migración, probar y usar temporalmente una etiqueta explícita compatible si hace falta. **[CORRECT]**

   Las notas y una etiqueta soportada permiten corregir con control.

2. Tratar latest como digest inmutable.

   latest puede cambiar.

3. Deshabilitar todo para siempre.

   Una incompatibilidad no justifica apagar todo permanentemente.

4. Restaurar el sistema anterior con una clave de cache.

   Cache no sustituye el sistema del runner.

**Concept:** Migración de imágenes

**Authored coaching hints:**

- ¿Qué promete una etiqueta móvil y qué no congela?
- ¿Cómo evitar sorpresas con pruebas de compatibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

windows-latest migra e quebra um build legado. Qual resposta equilibra compatibilidade e manutenção?

1. Consultar notas, testar e usar temporariamente rótulo explícito suportado se necessário. **[CORRECT]**

   Notas e rótulo suportado permitem remediação controlada.

2. Tratar latest como digest imutável.

   latest pode mudar.

3. Desabilitar tudo permanentemente.

   Uma falha não justifica desabilitar tudo para sempre.

4. Restaurar sistema anterior via chave de cache.

   Cache não substitui o sistema do runner.

**Concept:** Migração de imagens

**Authored coaching hints:**

- O que um rótulo móvel promete e o que não congela?
- Como testes de compatibilidade evitam surpresas?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/github-hosted-runners>

<!-- certification-coach-question:actions-177:002c679a88ca683b62810fbcfcae02bb9612f0e815c5c8b005d12f9b0c03f5f7 -->
## Question 177: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-177`

**Content revision:** `002c679a88ca683b62810fbcfcae02bb9612f0e815c5c8b005d12f9b0c03f5f7`

### English

An old Ubuntu hosted image has been retired. A workflow can no longer queue successfully on its obsolete label. What is the sustainable correction?

1. Keep retrying the retired label indefinitely.

   Retries do not restore a retired hosted image.

2. Migrate and test against a currently supported image label. **[CORRECT]**

   A supported image provides an available execution target and a maintained migration path.

3. Add contents: write to restore the retired VM.

   Repository token permissions do not affect hosted image retirement.

4. Rename the repository's default branch.

   Branch names do not determine image availability.

**Concept:** Retired runner image remediation

**Authored coaching hints:**

- Is the failure caused by application code or unavailable infrastructure?
- What dependency lifecycle must workflow maintenance account for?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow ya no puede usar una etiqueta Ubuntu retirada. ¿Qué corrección es sostenible?

1. Reintentar indefinidamente.

   Reintentar no recupera imágenes retiradas.

2. Migrar y probar una imagen soportada. **[CORRECT]**

   Una imagen vigente ofrece ejecución y mantenimiento.

3. Agregar contents: write.

   Los permisos no restauran máquinas.

4. Renombrar la rama predeterminada.

   El nombre de rama no determina disponibilidad.

**Concept:** Imágenes retiradas

**Authored coaching hints:**

- ¿Falla código o disponibilidad de infraestructura?
- ¿Qué ciclo de vida debe considerar el mantenimiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow não consegue mais usar rótulo Ubuntu retirado. Qual correção é sustentável?

1. Repetir indefinidamente.

   Repetir não restaura imagens retiradas.

2. Migrar e testar uma imagem suportada. **[CORRECT]**

   Imagem vigente fornece execução e manutenção.

3. Adicionar contents: write.

   Permissões não restauram máquinas.

4. Renomear a branch padrão.

   Nome de branch não determina disponibilidade.

**Concept:** Imagens retiradas

**Authored coaching hints:**

- A falha é de código ou infraestrutura indisponível?
- Qual ciclo de dependência o trabalho de manutenção deve considerar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/github-hosted-runners>

<!-- certification-coach-question:actions-178:f4412f514e889158e0d92d784ba2bcd625a54314766bdf0c253f61c864ed26e5 -->
## Question 178: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-178`

**Content revision:** `f4412f514e889158e0d92d784ba2bcd625a54314766bdf0c253f61c864ed26e5`

### English

A service requires a small stable source-IP allowlist. Standard hosted-runner address ranges are too broad and change over time. Which architecture is more appropriate?

1. Assume every standard runner uses one permanent address.

   Standard hosted runners do not offer one universal fixed source IP.

2. Allow every internet address to reach the service.

   Opening the service to all sources defeats the stated network control.

3. Use suitable larger runners with static IPs or controlled self-hosted egress. **[CORRECT]**

   Controlled egress or supported static-IP runner options align with a narrow allowlist.

4. Put the service password into the workflow name.

   Exposing a password does not establish network source restrictions.

**Concept:** Runner egress and IP allowlists

**Authored coaching hints:**

- What network identity does the destination service actually observe?
- Which execution options give the operator control over outbound addresses?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servicio necesita pocas IP de origen estables; los rangos hospedados estándar son amplios y cambian. ¿Qué arquitectura conviene?

1. Suponer una IP permanente universal.

   Los estándar no tienen una IP fija universal.

2. Permitir todo internet.

   Abrir todo anula el control.

3. Larger runners adecuados con IP estáticas o salida autohospedada controlada. **[CORRECT]**

   La salida controlada permite una lista estrecha.

4. Poner contraseña en el nombre del workflow.

   Exponer contraseñas no restringe red.

**Concept:** IP de salida de runners

**Authored coaching hints:**

- ¿Qué identidad de red ve el servicio?
- ¿Qué opciones permiten controlar direcciones salientes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um serviço exige poucas IPs de origem estáveis; faixas hospedadas padrão são amplas e mudam. Qual arquitetura convém?

1. Supor uma IP universal permanente.

   Runners padrão não têm uma IP fixa universal.

2. Permitir toda a internet.

   Abrir tudo anula o controle.

3. Larger runners adequados com IPs estáticas ou saída própria controlada. **[CORRECT]**

   Saída controlada permite lista restrita.

4. Senha no nome do workflow.

   Expor senha não restringe rede.

**Concept:** IPs de saída de runners

**Authored coaching hints:**

- Qual identidade de rede o serviço observa?
- Quais opções dão controle sobre endereços de saída?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/github-hosted-runners>

<!-- certification-coach-question:actions-179:1a3da0f3cb352d4037e789ca394004d1dd22bd158020fa5343db38a1a63a8114 -->
## Question 179: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-179`

**Content revision:** `1a3da0f3cb352d4037e789ca394004d1dd22bd158020fa5343db38a1a63a8114`

### English

A build needs a private on-premises dependency service with no public endpoint. Which runner placement most directly supplies network reachability without exposing that service publicly?

1. Any public hosted runner without network configuration.

   Default public hosted networking does not inherently reach private on-premises endpoints.

2. A Marketplace listing for the service.

   Marketplace discovery does not create network paths.

3. A status badge on the intranet.

   Badges do not establish connectivity.

4. A controlled self-hosted runner within the permitted network. **[CORRECT]**

   A runner inside the permitted network can reach internal dependencies under existing controls.

**Concept:** Private dependency runner placement

**Authored coaching hints:**

- Which network boundary blocks the dependency?
- Where can execution occur while preserving the service's non-public exposure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La compilación necesita un servicio local privado sin endpoint público. ¿Dónde ejecutar sin exponerlo?

1. Cualquier runner público sin configuración.

   La red pública no llega automáticamente a servicios privados.

2. Una publicación Marketplace.

   Marketplace no crea rutas de red.

3. Una insignia intranet.

   Las insignias no conectan redes.

4. Un runner propio controlado dentro de la red permitida. **[CORRECT]**

   El runner interno usa conectividad bajo controles existentes.

**Concept:** Ubicación para dependencias privadas

**Authored coaching hints:**

- ¿Qué límite de red bloquea el acceso?
- ¿Dónde ejecutar preservando la privacidad del servicio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O build precisa de serviço local privado sem endpoint público. Onde executar sem expô-lo?

1. Qualquer runner público sem configuração.

   Rede pública não alcança automaticamente recursos privados.

2. Uma listagem Marketplace.

   Marketplace não cria rotas.

3. Um selo na intranet.

   Selos não estabelecem conexão.

4. Runner próprio controlado na rede permitida. **[CORRECT]**

   O runner interno usa conectividade sob os controles existentes.

**Concept:** Localização para dependências privadas

**Authored coaching hints:**

- Qual limite de rede bloqueia acesso?
- Onde executar preservando a privacidade do serviço?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:actions-180:a277bf56a98395f2f9b2d210cbacea1ed73bb39f39967d486249df4e098be4d2 -->
## Question 180: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-180`

**Content revision:** `a277bf56a98395f2f9b2d210cbacea1ed73bb39f39967d486249df4e098be4d2`

### English

A TLS-intercepting corporate proxy causes certificate validation errors on self-hosted runners. Which long-term fix is safer than permanently disabling TLS verification?

1. Install the appropriate trusted certificate chain in the runner OS trust store and preserve verification. **[CORRECT]**

   A correctly configured trust store supports the proxy while retaining TLS integrity checks.

2. Always use plaintext HTTP for GitHub.

   Plaintext transport sacrifices confidentiality and integrity.

3. Turn off validation on every runner forever.

   Permanent verification bypass removes an important security control.

4. Put the certificate error message in GITHUB\_OUTPUT only.

   Publishing the error as an output does not repair certificate trust.

**Concept:** Runner TLS trust configuration

**Authored coaching hints:**

- Can the legitimate trust chain be repaired instead of bypassed?
- What protection is lost when certificate verification is disabled?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un proxy TLS corporativo causa errores de certificado en runners propios. ¿Qué solución permanente es más segura que desactivar validación?

1. Instalar la cadena confiable en el almacén del sistema y conservar validación. **[CORRECT]**

   El almacén correcto permite verificar la cadena legítima.

2. Usar HTTP sin cifrar.

   HTTP pierde confidencialidad e integridad.

3. Desactivar validación para siempre.

   El bypass permanente elimina un control importante.

4. Escribir el error en GITHUB\_OUTPUT.

   Publicar el error no repara confianza.

**Concept:** Confianza TLS en runners

**Authored coaching hints:**

- ¿Se puede reparar la cadena en vez de evitarla?
- ¿Qué protección se pierde sin verificar certificados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proxy TLS corporativo causa erros de certificado nos runners próprios. Qual solução permanente é mais segura que desativar validação?

1. Instalar cadeia confiável no armazenamento do sistema e manter validação. **[CORRECT]**

   Confiança configurada preserva verificação TLS.

2. Usar HTTP sem criptografia.

   HTTP perde sigilo e integridade.

3. Desativar validação para sempre.

   Bypass permanente remove controle importante.

4. Escrever o erro em GITHUB\_OUTPUT.

   Publicar o erro não repara confiança.

**Concept:** Confiança TLS em runners

**Authored coaching hints:**

- É possível reparar a cadeia em vez de ignorá-la?
- Qual proteção se perde sem verificar certificados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:actions-181:bbca43835a50fc59798f9c673e0593677038c65885fe50090327ab002b53b2e1 -->
## Question 181: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-181`

**Content revision:** `bbca43835a50fc59798f9c673e0593677038c65885fe50090327ab002b53b2e1`

### English

A company has one shared API credential needed by only five repositories. Which configuration centralizes rotation while limiting exposure?

1. Paste it into all workflow files.

   Plaintext workflow copies expose the credential and complicate rotation.

2. An organization secret with selected-repository access. **[CORRECT]**

   An organization secret centralizes the value and an access policy limits consuming repositories.

3. A public organization variable.

   Variables are not suitable confidential credential storage.

4. A runner label containing the credential.

   Labels are visible metadata and must not contain secrets.

**Concept:** Organization secret scoping

**Authored coaching hints:**

- Where can one credential be managed without sharing it with every repository?
- Which storage type is designed for confidential rather than ordinary configuration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Solo cinco repositorios necesitan una credencial API compartida. ¿Cómo centralizar rotación y limitar exposición?

1. Copiarla en todos los YAML.

   El texto plano expone y complica rotación.

2. Un secreto organizacional con repositorios seleccionados. **[CORRECT]**

   El secreto central y su política limitan consumidores.

3. Una variable pública.

   Las variables no son almacenamiento confidencial.

4. Una etiqueta de runner con la credencial.

   Las etiquetas visibles no deben contener secretos.

**Concept:** Alcance de secretos organizacionales

**Authored coaching hints:**

- ¿Dónde administrar una credencial sin compartirla con todos?
- ¿Qué almacenamiento es confidencial y no configuración ordinaria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Só cinco repositórios precisam de credencial API compartilhada. Como centralizar rotação e limitar exposição?

1. Copiar para todos os YAML.

   Texto puro expõe e complica rotação.

2. Segredo organizacional com repositórios selecionados. **[CORRECT]**

   Segredo central e política limitam consumidores.

3. Variável pública.

   Variáveis não são armazenamento confidencial.

4. Rótulo de runner com a credencial.

   Rótulos visíveis não devem conter segredos.

**Concept:** Escopo de segredos organizacionais

**Authored coaching hints:**

- Onde administrar uma credencial sem compartilhá-la com todos?
- Qual armazenamento é confidencial, não configuração comum?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-182:2db922644c1435d545f99a893841918f2427d712adda5a9267f2cc8f3ea8ca17 -->
## Question 182: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-182`

**Content revision:** `2db922644c1435d545f99a893841918f2427d712adda5a9267f2cc8f3ea8ca17`

### English

A repository and its organization both define a secret named DEPLOY\_KEY. A job references no deployment environment. Which value takes precedence?

1. The organization value always.

   Organization scope is broader and does not override the repository value.

2. The older value.

   Creation time does not determine precedence.

3. The repository value. **[CORRECT]**

   The lower, more specific repository scope takes precedence over the organization secret.

4. Both concatenated together.

   Secret values are selected by scope, not concatenated.

**Concept:** Secret scope precedence

**Authored coaching hints:**

- Which scope is more specific to the consuming repository?
- Is precedence based on hierarchy or chronology?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Organización y repositorio definen DEPLOY\_KEY. El job no usa entorno. ¿Qué valor prevalece?

1. Siempre el organizacional.

   El ámbito amplio no prevalece sobre el específico.

2. El más antiguo.

   La fecha no determina precedencia.

3. El del repositorio. **[CORRECT]**

   El repositorio es más específico.

4. Ambos concatenados.

   Los valores no se concatenan.

**Concept:** Precedencia por ámbito

**Authored coaching hints:**

- ¿Qué ámbito es más específico?
- ¿La precedencia depende de jerarquía o antigüedad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Organização e repositório definem DEPLOY\_KEY. O job não usa ambiente. Qual valor prevalece?

1. Sempre o organizacional.

   O escopo amplo não prevalece sobre o específico.

2. O mais antigo.

   Data não determina precedência.

3. O do repositório. **[CORRECT]**

   O repositório é mais específico.

4. Ambos concatenados.

   Valores não são concatenados.

**Concept:** Precedência por escopo

**Authored coaching hints:**

- Qual escopo é mais específico?
- A precedência depende de hierarquia ou cronologia?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-183:b3f8d3a4d09bdf13649a4ddd7f66b5285a293b4954aa5a24189c0f89e69b82be -->
## Question 183: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-183`

**Content revision:** `b3f8d3a4d09bdf13649a4ddd7f66b5285a293b4954aa5a24189c0f89e69b82be`

### English

A production job has its own DEPLOY\_KEY environment secret as well as a repository secret with that name. Which secret value should the environment-associated job receive?

1. The organization value, even if absent.

   An absent broader secret cannot override a defined environment secret.

2. The repository value because it was queued first.

   Queue ordering does not change the documented scope precedence.

3. A random value chosen from both.

   Secret resolution is deterministic rather than random.

4. The environment-level value. **[CORRECT]**

   Environment secrets take precedence over repository and organization secrets of the same name.

**Concept:** Environment secret precedence

**Authored coaching hints:**

- Which configuration is specific to this deployment target?
- How does the lowest-level secret scope relate to the job's environment association?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un job production tiene DEPLOY\_KEY de entorno y otro del repositorio. ¿Cuál recibe?

1. El organizacional incluso si no existe.

   Uno ausente no anula el definido.

2. El del repositorio por haberse encolado antes.

   La cola no cambia precedencia.

3. Uno aleatorio.

   La resolución es determinista.

4. El del entorno. **[CORRECT]**

   El entorno prevalece sobre repositorio y organización.

**Concept:** Precedencia del secreto de entorno

**Authored coaching hints:**

- ¿Qué configuración corresponde específicamente al destino?
- ¿Cómo se relaciona el ámbito más específico con el entorno del job?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job production tem DEPLOY\_KEY de ambiente e do repositório. Qual recebe?

1. O organizacional, mesmo ausente.

   Ausência em escopo amplo não substitui segredo definido.

2. O do repositório por ter entrado na fila antes.

   A fila não altera precedência.

3. Um aleatório.

   A resolução é determinística.

4. O do ambiente. **[CORRECT]**

   Ambiente prevalece sobre repositório e organização.

**Concept:** Precedência de segredo de ambiente

**Authored coaching hints:**

- Qual configuração é específica do destino?
- Como o escopo mais específico se relaciona ao ambiente do job?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-184:68fc589f50263ea55c2034491e4985daa9f24d1e8eb14cf9b6b3c49bef0a888e -->
## Question 184: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-184`

**Content revision:** `68fc589f50263ea55c2034491e4985daa9f24d1e8eb14cf9b6b3c49bef0a888e`

### English

A production credential must not become available before an authorized reviewer approves the deployment. Which secret placement and protection combination fits?

1. An environment secret in an environment with required reviewers. **[CORRECT]**

   Environment protection gates access to its secrets until required approval is satisfied.

2. A global workflow env entry containing plaintext.

   Workflow plaintext is exposed in source and is not approval-gated secret storage.

3. A public repository variable.

   Configuration variables are not encrypted secret storage or deployment gates.

4. A credential embedded in a runner label.

   Runner labels are visible routing metadata, not confidential gated storage.

**Concept:** Approval-gated secrets

**Authored coaching hints:**

- At which boundary should credential release be delayed?
- What configuration combines deployment governance with scoped secret storage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una credencial production no debe estar disponible antes de aprobación autorizada. ¿Qué combinación corresponde?

1. Secreto de entorno con revisores obligatorios. **[CORRECT]**

   La protección del entorno condiciona acceso a sus secretos.

2. env global en texto plano.

   El texto fuente no es almacenamiento protegido por aprobación.

3. Variable pública.

   Las variables no son secretos ni controles de despliegue.

4. Credencial en etiqueta de runner.

   Las etiquetas son metadatos visibles.

**Concept:** Secretos sujetos a aprobación

**Authored coaching hints:**

- ¿En qué límite retrasar la entrega de credenciales?
- ¿Qué combina gobernanza de despliegue y almacenamiento acotado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma credencial production só deve ser liberada após aprovação autorizada. Qual combinação corresponde?

1. Segredo de ambiente com revisores obrigatórios. **[CORRECT]**

   A proteção do ambiente condiciona acesso aos segredos.

2. env global em texto puro.

   Código-fonte não é armazenamento sujeito a aprovação.

3. Variável pública.

   Variáveis não são segredos nem gates de implantação.

4. Credencial em rótulo de runner.

   Rótulos são metadados visíveis.

**Concept:** Segredos sujeitos a aprovação

**Authored coaching hints:**

- Em qual limite atrasar a liberação de credenciais?
- O que combina governança de implantação e armazenamento restrito?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-185:9197ca4ddffc0daa8461fa76ffa59d7740e54fc07786ae6b09eb043104d87f31 -->
## Question 185: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-185`

**Content revision:** `9197ca4ddffc0daa8461fa76ffa59d7740e54fc07786ae6b09eb043104d87f31`

### English

A shared non-sensitive setting selects a default package mirror for many workflows. Which mechanism is more appropriate than storing it as a secret?

1. A hardcoded password in the workflow.

   A password is unrelated and must not be hardcoded.

2. An organization configuration variable referenced through vars. **[CORRECT]**

   Configuration variables centrally manage ordinary non-sensitive workflow settings.

3. The actor's browser session.

   Browser sessions are not workflow configuration interfaces.

4. A GITHUB\_TOKEN permission named mirror.

   Token permission categories do not define arbitrary settings.

**Concept:** Variables versus secrets

**Authored coaching hints:**

- Does the value need confidentiality or only central configuration?
- Which context exposes administrators' ordinary configuration values?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un mirror de paquetes predeterminado no sensible se comparte entre workflows. ¿Qué usar en vez de secreto?

1. Una contraseña en el YAML.

   No se deben incrustar contraseñas.

2. Variable de configuración organizacional mediante vars. **[CORRECT]**

   Las variables centralizan configuración ordinaria.

3. La sesión del navegador del actor.

   Las sesiones no son interfaces de configuración.

4. Permiso GITHUB\_TOKEN llamado mirror.

   Los permisos no definen ajustes arbitrarios.

**Concept:** Variables frente a secretos

**Authored coaching hints:**

- ¿Se necesita confidencialidad o configuración central?
- ¿Qué contexto expone configuración ordinaria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um mirror padrão não sensível é compartilhado por vários workflows. O que usar em vez de segredo?

1. Senha fixa no YAML.

   Não se devem embutir senhas.

2. Variável de configuração organizacional via vars. **[CORRECT]**

   Variáveis centralizam configuração comum.

3. Sessão de navegador do ator.

   Sessões não são interfaces de configuração.

4. Permissão GITHUB\_TOKEN chamada mirror.

   Permissões não definem ajustes arbitrários.

**Concept:** Variáveis versus segredos

**Authored coaching hints:**

- É preciso confidencialidade ou configuração central?
- Qual contexto expõe configuração comum?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables>

<!-- certification-coach-question:actions-186:259e63c587168d7a784aa39172fd56d6a214ce422ac61567d744dcb83540aa68 -->
## Question 186: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-186`

**Content revision:** `259e63c587168d7a784aa39172fd56d6a214ce422ac61567d744dcb83540aa68`

### English

An enterprise automation script creates or updates repository secrets through REST. How must the secret value be prepared before calling the write endpoint?

1. Place it in the URL query string in plaintext.

   Plaintext query strings can leak in logs and do not meet the secret API contract.

2. Hash it irreversibly and discard the usable value.

   A one-way hash cannot replace an API credential the workflow must use.

3. Encrypt it with the repository public key using the documented LibSodium sealed-box approach. **[CORRECT]**

   The secrets API requires an encrypted value and the associated public key ID.

4. Only encode it as UTF-8 without encryption.

   Character encoding alone is not encryption.

**Concept:** Programmatic encrypted secret writes

**Authored coaching hints:**

- What value and key identifier does the secret-write API expect?
- How can a client protect a secret before sending it to the storage service?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script actualiza secretos de repositorio por REST. ¿Cómo preparar el valor antes de escribir?

1. Texto plano en la URL.

   La URL puede filtrar datos y no cumple el contrato.

2. Hash irreversible y descartar el valor.

   Un hash no reemplaza una credencial utilizable.

3. Cifrar con clave pública del repositorio y sealed box de LibSodium documentado. **[CORRECT]**

   El API requiere valor cifrado e ID de clave pública.

4. Solo codificar UTF-8.

   Codificar no es cifrar.

**Concept:** Escritura cifrada por API

**Authored coaching hints:**

- ¿Qué valor e identificador espera el endpoint?
- ¿Cómo proteger la credencial antes de enviarla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script atualiza segredos de repositório por REST. Como preparar o valor antes da escrita?

1. Texto puro na URL.

   URLs podem vazar e não atendem ao contrato.

2. Hash irreversível e descartar o original.

   Hash não substitui credencial utilizável.

3. Criptografar com chave pública do repositório pelo sealed box documentado do LibSodium. **[CORRECT]**

   O API exige valor criptografado e ID da chave pública.

4. Somente codificar em UTF-8.

   Codificação não é criptografia.

**Concept:** Escrita criptografada por API

**Authored coaching hints:**

- Qual valor e identificador o endpoint espera?
- Como proteger a credencial antes de enviá-la?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/secrets>

<!-- certification-coach-question:actions-187:cc6409bd90091eeee0503d489742d001433aa0fc18995501987b33eb2e9693f3 -->
## Question 187: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-187`

**Content revision:** `cc6409bd90091eeee0503d489742d001433aa0fc18995501987b33eb2e9693f3`

### English

An audit script lists repository secrets through REST and receives names and timestamps but no plaintext values. Is that an API failure?

1. Yes; every read call should reveal secret values.

   Secret APIs intentionally do not return stored secret plaintext.

2. Only if the repository is private.

   Repository visibility does not turn metadata reads into secret-value retrieval.

3. It means all secrets were deleted.

   Metadata records indicate secrets can exist without their values being returned.

4. No; secret read endpoints expose metadata, not stored plaintext values. **[CORRECT]**

   This behavior protects credentials while allowing inventory and rotation administration.

**Concept:** Secret API read boundaries

**Authored coaching hints:**

- Should permission to inventory credentials imply permission to extract their values?
- Which administrative tasks can be performed using names and update times?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al listar secretos por REST aparecen nombres y fechas pero no valores. ¿Es una falla?

1. Sí: toda lectura debe revelar valores.

   El API no devuelve secretos en texto plano.

2. Solo en repositorios privados.

   La visibilidad no cambia esta protección.

3. Todos fueron eliminados.

   Los metadatos pueden existir sin devolver el valor.

4. No: las lecturas exponen metadatos, no texto almacenado. **[CORRECT]**

   Permite inventario sin extraer credenciales.

**Concept:** Límites de lectura de secretos

**Authored coaching hints:**

- ¿Inventariar credenciales debe implicar extraerlas?
- ¿Qué tareas permiten nombres y fechas de actualización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Listar segredos por REST retorna nomes e datas, não valores. É falha?

1. Sim: toda leitura deveria revelar valores.

   O API não devolve segredos em texto puro.

2. Só em repositórios privados.

   Visibilidade não muda essa proteção.

3. Todos foram excluídos.

   Metadados podem existir sem expor valores.

4. Não: leituras retornam metadados, não texto armazenado. **[CORRECT]**

   Permite inventário sem extrair credenciais.

**Concept:** Limites de leitura de segredos

**Authored coaching hints:**

- Inventariar credenciais deve permitir extraí-las?
- Quais tarefas são possíveis com nomes e datas de atualização?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/secrets>

<!-- certification-coach-question:actions-188:c73c95e32c6e2f4485bd891db54b5a2b2ec64c9f344f7db596fd71eb768163c3 -->
## Question 188: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-188`

**Content revision:** `c73c95e32c6e2f4485bd891db54b5a2b2ec64c9f344f7db596fd71eb768163c3`

### English

A platform script must update a non-sensitive repository variable named REGION through REST. Which resource family should it use?

1. Actions variables endpoints. **[CORRECT]**

   Actions variables endpoints manage configuration-variable names and values.

2. Actions secrets endpoints with an encrypted\_value for every variable.

   Variables have their own API and are distinct from encrypted secret storage.

3. Workflow artifact downloads.

   Artifacts are execution outputs, not persistent configuration variables.

4. Pull-request review comments.

   Review comments do not manage Actions configuration.

**Concept:** Programmatic variable management

**Authored coaching hints:**

- Is the managed resource ordinary configuration or encrypted credential storage?
- Which API family corresponds to that resource type?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script actualiza la variable no sensible REGION mediante REST. ¿Qué recursos usar?

1. Endpoints de variables Actions. **[CORRECT]**

   Administran nombres y valores de configuración.

2. Endpoints de secretos con encrypted\_value para toda variable.

   Variables y secretos cifrados tienen APIs distintos.

3. Descargas de artefactos.

   Artefactos no son configuración persistente.

4. Comentarios de revisión PR.

   Los comentarios no administran variables.

**Concept:** Administración de variables por API

**Authored coaching hints:**

- ¿Se administra configuración o credencial cifrada?
- ¿Qué familia API corresponde a ese recurso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script atualiza a variável não sensível REGION por REST. Qual família de recursos usar?

1. Endpoints de variáveis Actions. **[CORRECT]**

   Gerenciam nomes e valores de configuração.

2. Endpoints de segredos com encrypted\_value para toda variável.

   Variáveis e segredos têm APIs distintos.

3. Downloads de artefatos.

   Artefatos não são configuração persistente.

4. Comentários de revisão de PR.

   Comentários não administram variáveis.

**Concept:** Gestão de variáveis por API

**Authored coaching hints:**

- O recurso é configuração ou credencial criptografada?
- Qual família de API corresponde ao recurso?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/variables>

<!-- certification-coach-question:actions-189:5d0b1c41c64ed4a475474ff99c3a83235cd2010880ad0e386381571a2e5a3e4b -->
## Question 189: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-189`

**Content revision:** `5d0b1c41c64ed4a475474ff99c3a83235cd2010880ad0e386381571a2e5a3e4b`

### English

A job references secrets.OPTIONAL\_KEY, but no applicable secret with that name exists. What expression value should the workflow expect?

1. The literal text OPTIONAL\_KEY.

   Missing secrets do not resolve to their names.

2. An empty string. **[CORRECT]**

   A reference to an unset secret evaluates to an empty string.

3. An administrator token.

   GitHub never replaces a missing secret with an administrator credential.

4. An automatic prompt asking the user for a value.

   Unattended workflows do not create interactive secret-entry prompts.

**Concept:** Unset secret behavior

**Authored coaching hints:**

- How should automation validate optional versus required configuration?
- Could silently missing values need an explicit check before deployment?

<details>
<summary>Español — same answer key and option order</summary>

### Español

No existe ningún secreto aplicable llamado OPTIONAL\_KEY. ¿Qué devuelve secrets.OPTIONAL\_KEY?

1. El texto OPTIONAL\_KEY.

   No devuelve el nombre.

2. Una cadena vacía. **[CORRECT]**

   Un secreto no definido se evalúa como cadena vacía.

3. Un token administrador.

   Nunca se sustituye con credenciales administrativas.

4. Una pregunta interactiva.

   Los workflows no solicitan secretos interactivamente.

**Concept:** Secretos no definidos

**Authored coaching hints:**

- ¿Cómo validar configuración obligatoria y opcional?
- ¿Conviene comprobar valores ausentes antes de desplegar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Não existe segredo aplicável OPTIONAL\_KEY. Qual valor secrets.OPTIONAL\_KEY retorna?

1. Texto OPTIONAL\_KEY.

   Não retorna o nome.

2. String vazia. **[CORRECT]**

   Segredo não definido resulta em string vazia.

3. Token administrador.

   Nunca é substituído por credencial administrativa.

4. Pergunta interativa.

   Workflows não solicitam segredos interativamente.

**Concept:** Segredos não definidos

**Authored coaching hints:**

- Como validar configuração obrigatória e opcional?
- É preciso verificar ausências antes de implantar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-190:f8c99171400c1d6cdc716fd24a988fbfab9a86974a703d695b827a8a64c8396e -->
## Question 190: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-190`

**Content revision:** `f8c99171400c1d6cdc716fd24a988fbfab9a86974a703d695b827a8a64c8396e`

### English

A workflow wants to run a step only when an optional secret is available. Secrets cannot be referenced directly in its if condition. Which documented pattern fits?

1. Print all secret values and search the logs.

   Printing credentials exposes sensitive data and is unnecessary.

2. Rename the secret to if.

   Secret names do not alter expression context restrictions.

3. Map the secret into a job-level environment variable and test that variable. **[CORRECT]**

   GitHub documents using a job-level env mapping when conditional execution depends on a secret's presence.

4. Use a runner label containing the secret.

   Labels expose data and do not securely test secret availability.

**Concept:** Secret-presence conditions

**Authored coaching hints:**

- Which contexts are allowed in the condition being evaluated?
- How can presence be tested without displaying the confidential value?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paso debe correr solo si existe un secreto opcional, pero no se admite secrets directamente en if. ¿Qué patrón usar?

1. Imprimir secretos y buscar logs.

   Imprimir expone datos sin necesidad.

2. Renombrarlo if.

   El nombre no cambia restricciones de contextos.

3. Mapearlo a env del job y comprobar esa variable. **[CORRECT]**

   El mapeo env permite comprobar presencia según la documentación.

4. Poner el secreto en una etiqueta.

   Las etiquetas exponen datos.

**Concept:** Condiciones de presencia de secretos

**Authored coaching hints:**

- ¿Qué contextos admite la condición?
- ¿Cómo comprobar presencia sin mostrar el valor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma etapa só deve executar se houver segredo opcional, mas secrets não pode ser usado diretamente em if. Qual padrão usar?

1. Imprimir segredos e pesquisar logs.

   Imprimir expõe dados sem necessidade.

2. Renomear para if.

   O nome não altera restrições de contexto.

3. Mapear para env do job e testar essa variável. **[CORRECT]**

   O mapeamento env permite testar presença conforme documentação.

4. Colocar segredo no rótulo do runner.

   Rótulos expõem dados.

**Concept:** Condições de presença de segredos

**Authored coaching hints:**

- Quais contextos a condição admite?
- Como testar presença sem exibir o valor?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-191:ff3c43bd85137bdbfd2c8fd421364f3268c4be11df1cf4f3bc1defb7022aa9c9 -->
## Question 191: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-191`

**Content revision:** `ff3c43bd85137bdbfd2c8fd421364f3268c4be11df1cf4f3bc1defb7022aa9c9`

### English

A public repository's pull\_request workflow runs for a fork. Under default security behavior, why is a repository deployment secret unavailable?

1. The secret name contains an underscore.

   Underscores are permitted in secret names.

2. The fork must first gain more stars.

   Repository popularity has no effect on secret distribution.

3. Secrets are always copied into every fork.

   Forking does not copy the base repository's secret values.

4. Repository secrets are withheld from fork-triggered pull-request workflows by default. **[CORRECT]**

   Withholding secrets prevents untrusted fork code from exfiltrating them.

**Concept:** Fork workflow secret boundaries

**Authored coaching hints:**

- Who controls the code introduced by a fork?
- What would happen if every external pull request could read deployment credentials?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un pull\_request público proviene de un fork. ¿Por qué no recibe el secreto de despliegue por defecto?

1. El nombre contiene guion bajo.

   Se admiten guiones bajos.

2. El fork necesita más estrellas.

   La popularidad no controla secretos.

3. Todo secreto se copia a cada fork.

   Crear forks no copia valores secretos.

4. Los secretos se retienen en workflows PR de forks por defecto. **[CORRECT]**

   Retenerlos evita exfiltración por código no confiable.

**Concept:** Secretos y forks

**Authored coaching hints:**

- ¿Quién controla el código del fork?
- ¿Qué pasaría si cualquier PR externo leyera credenciales de despliegue?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pull\_request público vem de fork. Por que não recebe o segredo de implantação por padrão?

1. O nome contém sublinhado.

   Sublinhados são permitidos.

2. O fork precisa de mais estrelas.

   Popularidade não controla segredos.

3. Todos os segredos são copiados para forks.

   Criar fork não copia valores secretos.

4. Segredos são retidos em workflows PR de forks por padrão. **[CORRECT]**

   Reter evita exfiltração por código não confiável.

**Concept:** Segredos e forks

**Authored coaching hints:**

- Quem controla o código do fork?
- O que ocorreria se qualquer PR externo lesse credenciais de implantação?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-192:faba7bf63a0d351aa21653881581903ec0e14a2a90f0296727e5c6ba4fd5d23f -->
## Question 192: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-192`

**Content revision:** `faba7bf63a0d351aa21653881581903ec0e14a2a90f0296727e5c6ba4fd5d23f`

### English

A Dependabot-triggered workflow cannot access an ordinary Actions secret used by trusted push builds. Which documented distinction should an administrator investigate?

1. Dependabot-triggered workflows have restricted secret access and use Dependabot secrets where applicable. **[CORRECT]**

   Dependabot events have special trust and secret-handling rules rather than unrestricted ordinary Actions secret access.

2. Dependabot always receives every organization secret.

   Granting all organization secrets is not the default.

3. Dependabot must run on a GPU runner.

   Runner hardware does not govern Dependabot secret scope.

4. Setting the secret's name in a badge grants access.

   Badge text cannot grant credential access.

**Concept:** Dependabot workflow secret scope

**Authored coaching hints:**

- Does automation identity change the trust rules applied to an event?
- Which secret store is intended for this particular automated actor?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow de Dependabot no accede al secreto Actions usado en push confiables. ¿Qué distinción investigar?

1. Tiene acceso restringido y usa secretos Dependabot cuando corresponde. **[CORRECT]**

   Dependabot tiene reglas especiales de confianza y secretos.

2. Siempre recibe todos los secretos organizacionales.

   No recibe todo por defecto.

3. Necesita GPU.

   El hardware no controla ámbito de secretos.

4. Una insignia con el nombre concede acceso.

   Una insignia no autoriza credenciales.

**Concept:** Secretos de Dependabot

**Authored coaching hints:**

- ¿La identidad automatizada cambia las reglas de confianza?
- ¿Qué almacén está destinado a ese actor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow Dependabot não acessa o segredo Actions usado por pushes confiáveis. Qual distinção investigar?

1. Seu acesso é restrito e usa segredos Dependabot quando aplicável. **[CORRECT]**

   Dependabot tem regras especiais de confiança e segredos.

2. Sempre recebe todos os segredos organizacionais.

   Não recebe tudo por padrão.

3. Precisa de GPU.

   Hardware não governa escopo de segredos.

4. Um selo com o nome concede acesso.

   Selos não autorizam credenciais.

**Concept:** Segredos do Dependabot

**Authored coaching hints:**

- A identidade automatizada muda regras de confiança?
- Qual armazenamento se destina a esse ator?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-193:9d82048482e469f3efad399c8cfb3f83f43aa5df4fa444adddb261895c2d633e -->
## Question 193: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-193`

**Content revision:** `9d82048482e469f3efad399c8cfb3f83f43aa5df4fa444adddb261895c2d633e`

### English

An organization secret has selected-repository visibility. A newly created repository needs it but receives an empty value. What should the administrator check before duplicating the secret?

1. Whether the repository has a logo.

   A logo has no relation to secret access.

2. Whether the new repository was added to that secret's permitted repository set. **[CORRECT]**

   Selected-repository policies must explicitly include the consuming repository.

3. Whether its jobs all use the same display name.

   Job names do not expand organization secret visibility.

4. Whether it has uploaded an artifact.

   Artifact upload history does not authorize secret access.

**Concept:** Organization secret access diagnostics

**Authored coaching hints:**

- Is the value missing because it does not exist or because the caller is outside its scope?
- What does selected-repository visibility exclude by default?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un secreto organizacional limitado a repositorios seleccionados devuelve vacío en uno recién creado. ¿Qué revisar antes de duplicarlo?

1. Su logo.

   El logo no controla acceso.

2. Que esté incluido en el conjunto autorizado del secreto. **[CORRECT]**

   La política debe incluir explícitamente al consumidor.

3. Que todos los jobs tengan igual nombre.

   Los nombres no amplían visibilidad.

4. Que haya subido artefactos.

   Subir artefactos no autoriza secretos.

**Concept:** Diagnóstico de acceso a secretos

**Authored coaching hints:**

- ¿Falta el valor o el llamador está fuera del ámbito?
- ¿Qué excluye por defecto la visibilidad seleccionada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo organizacional com repositórios selecionados retorna vazio num repositório novo. O que verificar antes de duplicar?

1. Seu logo.

   Logo não governa acesso.

2. Se está no conjunto autorizado do segredo. **[CORRECT]**

   A política precisa incluir explicitamente o consumidor.

3. Se os jobs têm o mesmo nome.

   Nomes não ampliam visibilidade.

4. Se enviou um artefato.

   Enviar artefatos não autoriza segredos.

**Concept:** Diagnóstico de acesso a segredos

**Authored coaching hints:**

- O valor falta ou o chamador está fora do escopo?
- O que visibilidade selecionada exclui por padrão?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-194:59d0d74d3a6a55b6e9c97e6fb70c7432e500844f6c2ae83e58ca77179ec2fb43 -->
## Question 194: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-194`

**Content revision:** `59d0d74d3a6a55b6e9c97e6fb70c7432e500844f6c2ae83e58ca77179ec2fb43`

### English

A secret is rotated while a workflow run is waiting in the queue, but before its production job starts. Which documented timing distinction matters when comparing repository and environment secrets?

1. All secrets are read only after the workflow ends.

   Secrets must be available during execution, not only afterward.

2. All secrets are re-read on every shell command.

   GitHub does not re-fetch every secret on each shell command.

3. Repository secrets are read when the run is queued; environment secrets are read when the associated job starts. **[CORRECT]**

   The different read times can affect which rotated value an in-flight run observes.

4. Secrets are read only when the README changes.

   Documentation edits do not control secret retrieval timing.

**Concept:** Secret retrieval timing

**Authored coaching hints:**

- Which configuration belongs to the whole run and which to a protected job?
- Could queued work observe different rotation timing depending on secret scope?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un secreto rota mientras la ejecución espera en cola, antes del job production. ¿Qué diferencia de lectura importa?

1. Todos se leen al finalizar.

   Se necesitan durante ejecución.

2. Todos se releen en cada comando.

   No se recuperan en cada comando shell.

3. Los del repositorio se leen al encolar; los de entorno al iniciar el job asociado. **[CORRECT]**

   Los momentos distintos afectan qué valor rotado observa la ejecución.

4. Solo se leen al cambiar README.

   La documentación no controla lectura.

**Concept:** Momento de lectura de secretos

**Authored coaching hints:**

- ¿Qué configuración pertenece a toda la ejecución y cuál al job protegido?
- ¿El ámbito puede cambiar el efecto de una rotación en cola?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo é rotacionado enquanto a execução está na fila, antes do job production. Qual diferença de leitura importa?

1. Todos são lidos ao terminar.

   São necessários durante execução.

2. Todos são relidos a cada comando.

   Não são buscados a cada comando shell.

3. Segredos de repositório são lidos ao enfileirar; de ambiente ao iniciar o job associado. **[CORRECT]**

   Momentos distintos afetam qual valor a execução observa.

4. Só são lidos ao mudar README.

   Documentação não controla leitura.

**Concept:** Momento de leitura de segredos

**Authored coaching hints:**

- Qual configuração pertence à execução inteira e qual ao job protegido?
- O escopo pode mudar o efeito de rotação durante a fila?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:actions-195:d6ac118739d584b2356c72857fc6f009268872ce31767859e4697e3bc7aa135d -->
## Question 195: Manage GitHub Actions for the enterprise

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-195`

**Content revision:** `d6ac118739d584b2356c72857fc6f009268872ce31767859e4697e3bc7aa135d`

### English

An administrator needs to rotate a production environment secret using GitHub CLI rather than creating a repository-level secret of the same name. Which command targets the correct scope?

1. gh secret list only.

   Listing metadata does not update a secret value.

2. gh variable set DEPLOY\_KEY with the credential.

   A variable is not confidential environment-secret storage.

3. gh run rerun --failed.

   Re-running a workflow does not rotate stored credentials.

4. gh secret set --env production DEPLOY\_KEY **[CORRECT]**

   The --env flag selects the production environment for the secret write.

**Concept:** Scoped secret rotation with CLI

**Authored coaching hints:**

- Which command changes credential storage rather than execution?
- How must the destination scope be distinguished from the repository default?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando CLI rota DEPLOY\_KEY del entorno production y no crea un secreto de repositorio?

1. Solo gh secret list.

   Listar no modifica valores.

2. gh variable set DEPLOY\_KEY con la credencial.

   Una variable no es secreto confidencial.

3. gh run rerun --failed.

   Reejecutar no rota almacenamiento.

4. gh secret set --env production DEPLOY\_KEY **[CORRECT]**

   --env selecciona el entorno para la escritura.

**Concept:** Rotación por ámbito con CLI

**Authored coaching hints:**

- ¿Qué comando cambia almacenamiento y no ejecución?
- ¿Cómo distinguir el destino del ámbito repositorio predeterminado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando CLI rotaciona DEPLOY\_KEY do ambiente production sem criar segredo de repositório?

1. Somente gh secret list.

   Listar não modifica valores.

2. gh variable set DEPLOY\_KEY com a credencial.

   Variável não é segredo confidencial.

3. gh run rerun --failed.

   Reexecutar não rotaciona armazenamento.

4. gh secret set --env production DEPLOY\_KEY **[CORRECT]**

   --env seleciona o ambiente para escrita.

**Concept:** Rotação por escopo com CLI

**Authored coaching hints:**

- Qual comando altera armazenamento e não execução?
- Como distinguir o destino do escopo padrão de repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:actions-196:918d127b07c4c32103e0690c75cc455c2593d880c58b88af3dcfac48ff9393e5 -->
## Question 196: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-196`

**Content revision:** `918d127b07c4c32103e0690c75cc455c2593d880c58b88af3dcfac48ff9393e5`

### English

A release job needs repository authentication only while it runs. Why is a minimally scoped GITHUB\_TOKEN generally preferable to storing a maintainer's broad personal token?

1. It permanently impersonates the enterprise owner.

   GITHUB\_TOKEN represents the installed GitHub App, not an enterprise-owner identity.

2. It never expires.

   The token expires when the job ends or reaches its effective maximum lifetime.

3. It is job-specific, short-lived, and limited to the workflow repository's granted permissions. **[CORRECT]**

   Its lifecycle and repository scope reduce exposure compared with a broad persistent personal credential.

4. It automatically grants access to every private repository.

   Its default repository boundary does not include every private repository.

**Concept:** Ephemeral repository authentication

**Authored coaching hints:**

- What lifetime and resource boundary does this job actually require?
- How could a long-lived personal credential enlarge the impact of exposure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un job release solo necesita autenticación mientras corre. ¿Por qué preferir GITHUB\_TOKEN mínimo a un token personal amplio?

1. Suplanta permanentemente al dueño empresarial.

   Representa la GitHub App instalada, no al dueño.

2. Nunca vence.

   Vence al terminar el job o su duración máxima efectiva.

3. Es específico del job, temporal y limitado a permisos del repositorio. **[CORRECT]**

   Su ciclo y ámbito reducen exposición frente a credenciales persistentes.

4. Accede automáticamente a todos los privados.

   El límite del repositorio no incluye todos los privados.

**Concept:** Autenticación efímera de repositorio

**Authored coaching hints:**

- ¿Qué duración y recursos necesita realmente el job?
- ¿Cómo amplía el impacto una credencial personal persistente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de release só precisa autenticar enquanto executa. Por que preferir GITHUB\_TOKEN mínimo a token pessoal amplo?

1. Representa permanentemente o dono empresarial.

   Representa a GitHub App instalada, não o dono empresarial.

2. Nunca expira.

   Expira ao terminar o job ou atingir duração máxima efetiva.

3. É específico do job, temporário e limitado às permissões do repositório. **[CORRECT]**

   Ciclo e escopo reduzem exposição frente a credenciais persistentes.

4. Acessa automaticamente todos os privados.

   O limite do repositório não inclui todos os privados.

**Concept:** Autenticação efêmera de repositório

**Authored coaching hints:**

- Qual duração e quais recursos o job realmente exige?
- Como uma credencial pessoal persistente amplia impacto da exposição?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/github_token>

<!-- certification-coach-question:actions-197:898c0b77aee0b531b11472aee127f65e1231d5368e6813ebe28af893ce46426b -->
## Question 197: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-197`

**Content revision:** `898c0b77aee0b531b11472aee127f65e1231d5368e6813ebe28af893ce46426b`

### English

A cloud deployment currently uses a long-lived access key stored as an Actions secret. The provider supports workload federation. Which redesign removes that persistent cloud secret?

1. Use GitHub OIDC identity to obtain short-lived cloud credentials under a configured trust policy. **[CORRECT]**

   OIDC federation lets the provider validate workflow identity and issue short-lived access.

2. Store the same key in a repository variable.

   Moving a credential into a variable does not eliminate it and weakens confidentiality.

3. Put the key into a public container image.

   Embedding keys in images exposes reusable credentials.

4. Increase the key's lifetime and share it among all jobs.

   Broader sharing and longer lifetimes increase risk rather than remove the secret.

**Concept:** Federated cloud authentication

**Authored coaching hints:**

- Can the provider validate the workload's identity directly?
- Which part of authentication needs to persist: a secret or a trust relationship?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue usa clave cloud permanente como secreto. El proveedor admite federación. ¿Qué elimina esa credencial persistente?

1. OIDC de GitHub para credenciales temporales bajo política de confianza. **[CORRECT]**

   La federación valida identidad y emite acceso temporal.

2. Mover la clave a una variable.

   Moverla no la elimina y debilita confidencialidad.

3. Incluirla en imagen pública.

   Las imágenes exponen credenciales reutilizables.

4. Alargar vigencia y compartirla.

   Más vigencia y uso aumentan riesgo.

**Concept:** Autenticación cloud federada

**Authored coaching hints:**

- ¿El proveedor puede validar directamente la identidad del workload?
- ¿Qué debe persistir: secreto o relación de confianza?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação usa chave cloud permanente como segredo. O provedor suporta federação. O que elimina essa credencial persistente?

1. OIDC do GitHub para credenciais temporárias sob política de confiança. **[CORRECT]**

   Federação valida identidade e emite acesso temporário.

2. Mover a chave para variável.

   Mover não elimina e enfraquece sigilo.

3. Incluí-la em imagem pública.

   Imagens expõem credenciais reutilizáveis.

4. Ampliar validade e compartilhá-la.

   Mais validade e compartilhamento aumentam risco.

**Concept:** Autenticação cloud federada

**Authored coaching hints:**

- O provedor pode validar diretamente a identidade do workload?
- O que precisa persistir: segredo ou relação de confiança?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-198:9d602a9c299e888a12ac4f6af32ec34e02f4a296be8ba553bde5c83505dd470c -->
## Question 198: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-198`

**Content revision:** `9d602a9c299e888a12ac4f6af32ec34e02f4a296be8ba553bde5c83505dd470c`

### English

A job uses a cloud login action based on OIDC, but cannot request GitHub's identity token. Which explicit workflow permission is required for that request?

1. issues: write

   Issue permissions do not authorize OIDC token requests.

2. packages: read

   Package read permission does not grant identity-token issuance.

3. contents: write only

   Repository content writes are unrelated to requesting an OIDC token.

4. id-token: write **[CORRECT]**

   id-token: write allows the job to request the OIDC JWT.

**Concept:** OIDC request permissions

**Authored coaching hints:**

- Is this permission about modifying repository files or obtaining an identity assertion?
- Which permission category refers specifically to the requested token type?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un login cloud OIDC no puede solicitar el token de identidad GitHub. ¿Qué permiso explícito necesita?

1. issues: write

   Issues no autoriza solicitar OIDC.

2. packages: read

   Leer paquetes no emite identidad.

3. Solo contents: write

   Escribir archivos no permite solicitar este token.

4. id-token: write **[CORRECT]**

   id-token: write permite solicitar el JWT OIDC.

**Concept:** Permisos para solicitar OIDC

**Authored coaching hints:**

- ¿Se trata de modificar archivos o conseguir identidad?
- ¿Qué categoría de permiso corresponde al tipo de token?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um login cloud OIDC não consegue solicitar o token de identidade GitHub. Qual permissão explícita precisa?

1. issues: write

   Issues não autoriza solicitação OIDC.

2. packages: read

   Ler pacotes não emite identidade.

3. Somente contents: write

   Escrever arquivos não permite solicitar esse token.

4. id-token: write **[CORRECT]**

   id-token: write permite solicitar JWT OIDC.

**Concept:** Permissão para solicitar OIDC

**Authored coaching hints:**

- É modificar arquivos ou obter afirmação de identidade?
- Qual categoria corresponde ao tipo de token solicitado?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/oidc>

<!-- certification-coach-question:actions-199:bbd83549f2c6afb8e62ab1f335cd97e4315ef04a7a7685cf46b6ad5741562f1c -->
## Question 199: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-199`

**Content revision:** `bbd83549f2c6afb8e62ab1f335cd97e4315ef04a7a7685cf46b6ad5741562f1c`

### English

A job has id-token: write but its cloud deployment is rejected. Why does that permission alone not authorize changes to cloud resources?

1. OIDC can authenticate only human users.

   OIDC supports workload identity, including Actions jobs.

2. The cloud must separately trust the workflow's claims and authorize an appropriately scoped role. **[CORRECT]**

   Token issuance, provider trust validation, and cloud-role authorization are distinct controls.

3. id-token: write automatically grants all cloud administrator rights.

   Requesting an identity token does not grant cloud administrator privileges.

4. GitHub must store the cloud root password first.

   Federation is intended to avoid storing long-lived cloud passwords.

**Concept:** Identity issuance versus cloud authorization

**Authored coaching hints:**

- Who decides what a presented identity can do in the cloud?
- How are authentication and authorization different stages?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un job tiene id-token: write pero cloud rechaza desplegar. ¿Por qué no basta?

1. OIDC solo autentica humanos.

   OIDC admite identidad de workloads.

2. Cloud debe confiar en sus claims y autorizar un rol acotado. **[CORRECT]**

   Emisión, validación de confianza y autorización son controles distintos.

3. Concede automáticamente administración cloud.

   Solicitar identidad no concede administración.

4. Hay que guardar primero la contraseña root.

   Federar busca evitar contraseñas permanentes.

**Concept:** Identidad frente a autorización cloud

**Authored coaching hints:**

- ¿Quién decide qué puede hacer la identidad en cloud?
- ¿Cómo difieren autenticación y autorización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job tem id-token: write, mas a cloud rejeita implantação. Por que a permissão não basta?

1. OIDC só autentica humanos.

   OIDC admite identidade de workloads.

2. A cloud deve confiar nos claims e autorizar um papel restrito. **[CORRECT]**

   Emissão, validação de confiança e autorização são controles distintos.

3. Concede administração cloud automaticamente.

   Solicitar identidade não concede administração.

4. É preciso armazenar senha root primeiro.

   Federação evita senhas permanentes.

**Concept:** Identidade versus autorização cloud

**Authored coaching hints:**

- Quem decide o que a identidade pode fazer na cloud?
- Como autenticação difere de autorização?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:actions-200:cf6f1dfba6ed9fc7c789c2d99affa8a267f9972c027bcfd4e0514b009117e4fc -->
## Question 200: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-200`

**Content revision:** `cf6f1dfba6ed9fc7c789c2d99affa8a267f9972c027bcfd4e0514b009117e4fc`

### English

A cloud trust policy accepts any token issued by GitHub without checking which repository or environment produced it. What is the most important correction?

1. Log every token publicly for debugging.

   Logging bearer tokens can expose credentials and does not narrow trust.

2. Only check the workflow's display color.

   Display styling is not a security identity claim.

3. Constrain expected audience and subject or relevant workflow claims to the approved workload. **[CORRECT]**

   Claim constraints prevent unrelated GitHub workloads from obtaining the role.

4. Make the cloud role more privileged.

   More privileges increase the impact of the overly broad trust.

**Concept:** OIDC trust-policy scope

**Authored coaching hints:**

- Does a trusted issuer mean every workload using that issuer is authorized?
- Which token claims distinguish the specific workload allowed to deploy?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La confianza cloud acepta cualquier token GitHub sin comprobar repositorio ni entorno. ¿Qué corregir principalmente?

1. Publicar tokens en logs.

   Publicar tokens expone credenciales.

2. Comprobar el color del workflow.

   El estilo no identifica workloads.

3. Restringir audience y subject o claims pertinentes al workload aprobado. **[CORRECT]**

   Los límites de claims excluyen workloads ajenos.

4. Dar más privilegios al rol.

   Más privilegios aumentan el impacto.

**Concept:** Alcance de confianza OIDC

**Authored coaching hints:**

- ¿Confiar en el emisor autoriza todos sus workloads?
- ¿Qué claims distinguen al workload permitido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A confiança cloud aceita qualquer token GitHub sem conferir repositório ou ambiente. Qual correção é principal?

1. Publicar tokens nos logs.

   Publicar tokens expõe credenciais.

2. Conferir a cor do workflow.

   Estilo não identifica workloads.

3. Restringir audience e subject ou claims relevantes ao workload aprovado. **[CORRECT]**

   Limites de claims excluem workloads não autorizados.

4. Dar mais privilégios ao papel.

   Mais privilégios aumentam o impacto.

**Concept:** Escopo de confiança OIDC

**Authored coaching hints:**

- Confiar no emissor autoriza todos os seus workloads?
- Quais claims distinguem o workload permitido?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/oidc>

<!-- certification-coach-question:actions-201:0ec1fd94bd08feb6d824fee392ad89fe5ba7a13d14cdfbdb9d1ff9d78c34e89e -->
## Question 201: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-201`

**Content revision:** `0ec1fd94bd08feb6d824fee392ad89fe5ba7a13d14cdfbdb9d1ff9d78c34e89e`

### English

A workflow inserts github.event.pull\_request.title directly into a Bash run script. The title is attacker-controlled. Which design best prevents it from becoming generated shell syntax?

1. Pass the title through an environment variable and use a quoted shell expansion without eval. **[CORRECT]**

   An intermediate environment variable separates untrusted data from script generation; quoting avoids shell splitting.

2. Assume every PR title is safe because GitHub stores it.

   GitHub storage does not make user-controlled text trusted.

3. Increase GITHUB\_TOKEN permissions.

   More token privileges increase potential damage and do not prevent injection.

4. Put the same expression inside double quotes in the generated script and assume that is sufficient.

   Direct expression substitution can break out of generated quoting before the shell runs.

**Concept:** Script injection mitigation

**Authored coaching hints:**

- At what point is the shell script text constructed?
- How can attacker-controlled text remain data rather than part of the script?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow inserta github.event.pull\_request.title directamente en Bash; el atacante controla el título. ¿Qué evita convertirlo en sintaxis?

1. Pasarlo por env y usar expansión entre comillas, sin eval. **[CORRECT]**

   La variable intermedia separa datos del script y las comillas evitan separación shell.

2. Confiar porque GitHub lo almacena.

   Almacenar texto no lo hace confiable.

3. Aumentar permisos del token.

   Más permisos aumentan daño, no previenen inyección.

4. Insertar la expresión directamente entre comillas y suponer que basta.

   La sustitución directa puede romper las comillas antes de ejecutar.

**Concept:** Mitigación de inyección

**Authored coaching hints:**

- ¿En qué momento se construye el texto del script?
- ¿Cómo mantener el texto controlado como datos y no código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow insere github.event.pull\_request.title diretamente em Bash; o atacante controla o título. Como evitar que vire sintaxe?

1. Passar por env e expandir entre aspas, sem eval. **[CORRECT]**

   Variável intermediária separa dados do script e aspas evitam divisão pelo shell.

2. Confiar porque GitHub armazena o texto.

   Armazenar texto não o torna confiável.

3. Aumentar permissões do token.

   Mais permissões aumentam dano, não previnem injeção.

4. Inserir diretamente entre aspas e supor suficiente.

   Substituição direta pode escapar das aspas antes de executar.

**Concept:** Mitigação de injeção

**Authored coaching hints:**

- Quando o texto do script é construído?
- Como manter texto controlado como dados, não código?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-202:4a652983e0c09f98a80054919975b2468ae009c9b892388fbd550bb323db579b -->
## Question 202: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-202`

**Content revision:** `4a652983e0c09f98a80054919975b2468ae009c9b892388fbd550bb323db579b`

### English

A privileged pull\_request\_target workflow checks out a fork's head commit and executes its build script with repository secrets available. What is the central risk?

1. The build may run too quickly.

   Execution speed is not the security boundary at issue.

2. The fork's branch name is too short.

   Branch-name length does not determine code trust.

3. Artifacts cannot be uploaded from Linux.

   Linux can upload artifacts; the problem is privileged execution of untrusted code.

4. Untrusted fork code can execute in a privileged context and steal credentials or modify the repository. **[CORRECT]**

   Combining privileged triggers with untrusted checkout exposes secrets and token capabilities.

**Concept:** Privileged trigger trust boundaries

**Authored coaching hints:**

- Who controls the checked-out script?
- Which credentials and repository capabilities are available when it executes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un pull\_request\_target privilegiado descarga el head del fork y ejecuta su script con secretos. ¿Cuál es el riesgo central?

1. Compila demasiado rápido.

   La velocidad no es el límite de seguridad.

2. La rama es corta.

   La longitud no determina confianza.

3. Linux no permite artefactos.

   Linux sí sube artefactos.

4. Código no confiable roba credenciales o modifica el repositorio desde contexto privilegiado. **[CORRECT]**

   Combinar trigger privilegiado y código externo expone secretos y token.

**Concept:** Confianza de triggers privilegiados

**Authored coaching hints:**

- ¿Quién controla el script descargado?
- ¿Qué credenciales y capacidades tiene cuando ejecuta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pull\_request\_target privilegiado baixa head do fork e executa seu script com segredos. Qual risco central?

1. O build é rápido demais.

   Velocidade não é o limite relevante.

2. A branch é curta.

   Comprimento não determina confiança.

3. Linux não envia artefatos.

   Linux pode enviar artefatos.

4. Código não confiável rouba credenciais ou altera o repositório em contexto privilegiado. **[CORRECT]**

   Trigger privilegiado com checkout externo expõe segredos e token.

**Concept:** Confiança de triggers privilegiados

**Authored coaching hints:**

- Quem controla o script baixado?
- Quais credenciais e capacidades ele tem ao executar?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-203:b0f21d72bec42547c09dd23cd925a8ca70c5f43c5da7f23f7c6471eb3d2b3373 -->
## Question 203: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-203`

**Content revision:** `b0f21d72bec42547c09dd23cd925a8ca70c5f43c5da7f23f7c6471eb3d2b3373`

### English

A workflow\_run deployment consumes an artifact produced by untrusted pull-request code. Which precaution is most appropriate before using it in the privileged deployment?

1. Assume all Actions artifacts are trusted because GitHub stored them.

   Storage location alone does not establish that the producer was trusted.

2. Validate provenance and contents under an explicit trust policy; do not execute untrusted artifact content blindly. **[CORRECT]**

   A privileged consumer must verify what produced the artifact and how its contents will be used.

3. Grant the upstream workflow every secret.

   Sharing more credentials with untrusted code increases risk.

4. Rename the artifact to trusted.

   A name is not a cryptographically or procedurally enforced trust claim.

**Concept:** Untrusted artifact privilege escalation

**Authored coaching hints:**

- Can data crossing a workflow boundary carry attacker-controlled instructions?
- What evidence establishes a producer's trustworthiness independently of a filename?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue workflow\_run consume artefactos de código PR no confiable. ¿Qué precaución tomar antes de usarlos con privilegios?

1. Confiar porque GitHub los guardó.

   El almacenamiento no establece confianza del productor.

2. Validar procedencia y contenido con política explícita, sin ejecutar contenido ciegamente. **[CORRECT]**

   El consumidor privilegiado debe verificar origen y uso del contenido.

3. Dar todos los secretos al productor.

   Más credenciales aumentan el riesgo.

4. Renombrar como trusted.

   Un nombre no impone confianza verificable.

**Concept:** Escalación mediante artefactos

**Authored coaching hints:**

- ¿Los datos entre workflows pueden llevar instrucciones del atacante?
- ¿Qué prueba confianza del productor independientemente del nombre?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação workflow\_run consome artefato de código PR não confiável. Qual precaução antes do uso privilegiado?

1. Confiar porque GitHub armazenou.

   Armazenamento não estabelece confiança do produtor.

2. Validar procedência e conteúdo por política explícita, sem executar conteúdo cegamente. **[CORRECT]**

   O consumidor deve verificar origem e uso do conteúdo.

3. Dar todos os segredos ao produtor.

   Mais credenciais aumentam risco.

4. Renomear para trusted.

   Nome não impõe confiança verificável.

**Concept:** Escalada por artefatos

**Authored coaching hints:**

- Dados entre workflows podem conter instruções de atacante?
- O que prova confiança do produtor independentemente do nome?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-204:898dc7673db3d62b940dda191844e725affabfaba8bcb62b3b541ce5f5bb0fcc -->
## Question 204: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-204`

**Content revision:** `898dc7673db3d62b940dda191844e725affabfaba8bcb62b3b541ce5f5bb0fcc`

### English

A repository cannot adopt workflow dependency lockfiles yet. Which reference best fixes a third-party action to reviewed repository content rather than a movable branch or tag?

1. @main

   A branch can move to unreviewed code.

2. @v2 for a mutable major tag.

   A mutable major tag may be moved by its maintainer or an attacker.

3. A verified full-length commit SHA from the action's repository. **[CORRECT]**

   A full commit identifier pins the reviewed content; the repository provenance should also be checked.

4. The action's Marketplace display name alone.

   Display names do not provide a fixed executable version reference.

**Concept:** Fixed third-party action revisions

**Authored coaching hints:**

- Which references are pointers and which identify content?
- How can an update become an explicit reviewable dependency change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Sin poder adoptar lockfiles de dependencias de workflow aún, ¿qué fija una acción externa al contenido revisado?

1. @main

   Las ramas se mueven.

2. @v2 como etiqueta mutable.

   Una etiqueta mutable puede cambiar.

3. SHA completo verificado del repositorio de la acción. **[CORRECT]**

   El commit completo fija contenido; también se debe comprobar origen.

4. Solo el nombre Marketplace.

   El nombre no fija una versión ejecutable.

**Concept:** Revisiones fijas de acciones

**Authored coaching hints:**

- ¿Qué referencias son punteros y cuáles identifican contenido?
- ¿Cómo hacer revisable una actualización de dependencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Sem poder adotar lockfiles de dependências de workflow ainda, qual referência fixa ação externa ao conteúdo revisado?

1. @main

   Branches podem mudar.

2. @v2 como tag mutável.

   Uma tag mutável pode ser movida.

3. SHA completo verificado do repositório da ação. **[CORRECT]**

   O commit completo fixa conteúdo; a origem também deve ser verificada.

4. Somente nome Marketplace.

   Nome não fixa versão executável.

**Concept:** Revisões fixas de ações

**Authored coaching hints:**

- Quais referências são ponteiros e quais identificam conteúdo?
- Como tornar uma atualização de dependência explicitamente revisável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-205:a242c2e73619d595b8c4fdb19031c584a585c9fc40a613031b4ffb12095e860e -->
## Question 205: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-205`

**Content revision:** `a242c2e73619d595b8c4fdb19031c584a585c9fc40a613031b4ffb12095e860e`

### English

A third-party action has a verified creator badge in Marketplace. What is the appropriate security interpretation?

1. It is a publisher-identity signal, not proof that the code is safe or that every version was security-reviewed. **[CORRECT]**

   Creator verification supports identity assessment but does not replace code review and risk controls.

2. It guarantees the action never reads secrets.

   The badge does not constrain runtime secret handling.

3. It removes the need for least-privilege permissions.

   Identity verification does not justify unnecessary token privileges.

4. It automatically grants the action enterprise trust.

   Marketplace badges do not override enterprise authorization policies.

**Concept:** Marketplace trust signals

**Authored coaching hints:**

- What exactly has been verified: identity, code behavior, or your organization's approval?
- Which checks remain necessary even for a known publisher?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción tiene insignia de creador verificado Marketplace. ¿Cómo interpretarla?

1. Señal de identidad, no prueba de seguridad ni revisión de cada versión. **[CORRECT]**

   Verificar identidad no sustituye revisión ni controles.

2. Garantiza que nunca lee secretos.

   No restringe comportamiento en runtime.

3. Elimina privilegio mínimo.

   La identidad no justifica privilegios innecesarios.

4. Concede confianza empresarial automática.

   Las insignias no anulan políticas empresariales.

**Concept:** Señales de confianza Marketplace

**Authored coaching hints:**

- ¿Se verificó identidad, comportamiento o aprobación propia?
- ¿Qué controles siguen siendo necesarios con publicador conocido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação tem selo de criador verificado no Marketplace. Como interpretá-lo?

1. Sinal de identidade, não prova de segurança nem revisão de cada versão. **[CORRECT]**

   Verificar identidade não substitui revisão e controles.

2. Garante que nunca lê segredos.

   Não restringe comportamento em runtime.

3. Elimina privilégio mínimo.

   Identidade não justifica privilégios desnecessários.

4. Concede confiança empresarial automática.

   Selos não anulam políticas empresariais.

**Concept:** Sinais de confiança Marketplace

**Authored coaching hints:**

- Foi verificada identidade, comportamento ou aprovação da sua organização?
- Quais verificações continuam necessárias com publicador conhecido?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-206:b4cbe813a4e72229626c2adb00f3deeb800e4aea2b9a44071c3256982883e5c8 -->
## Question 206: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-206`

**Content revision:** `b4cbe813a4e72229626c2adb00f3deeb800e4aea2b9a44071c3256982883e5c8`

### English

A workflow obtains a new sensitive bearer token from an external service during execution. What should it do before any operation that might log that token?

1. Publish it as a normal job summary.

   Summaries are not secure secret stores.

2. Rely on its random-looking format to avoid disclosure.

   Randomness does not guarantee automatic log redaction.

3. Store it in an artifact accessible to all contributors.

   Broad artifact access can expose the bearer credential.

4. Register the value for masking and avoid unnecessary logging. **[CORRECT]**

   New sensitive values should be masked before potential logging and handled with minimal exposure.

**Concept:** Masking generated credentials

**Authored coaching hints:**

- Does automatic redaction know every newly generated sensitive value?
- When must masking be registered relative to the first possible log emission?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El workflow obtiene un bearer token nuevo de un servicio. ¿Qué hacer antes de una operación que pueda registrarlo?

1. Publicarlo en resumen.

   Los resúmenes no son almacenes seguros.

2. Confiar en su apariencia aleatoria.

   La aleatoriedad no garantiza ocultamiento automático.

3. Guardarlo en artefacto de todos.

   El acceso amplio expone la credencial.

4. Registrarlo para enmascaramiento y evitar logs innecesarios. **[CORRECT]**

   Hay que enmascarar valores nuevos antes de posibles logs.

**Concept:** Enmascaramiento de credenciales generadas

**Authored coaching hints:**

- ¿El ocultamiento automático conoce todo valor recién generado?
- ¿Cuándo registrar la máscara respecto al primer log posible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O workflow obtém novo bearer token de serviço externo. O que fazer antes de operação que possa registrá-lo?

1. Publicar em resumo.

   Resumos não são armazenamento seguro.

2. Confiar na aparência aleatória.

   Aleatoriedade não garante mascaramento automático.

3. Guardar em artefato acessível a todos.

   Acesso amplo expõe credencial.

4. Registrar para mascaramento e evitar logs desnecessários. **[CORRECT]**

   Valores novos devem ser mascarados antes de possíveis logs.

**Concept:** Mascaramento de credenciais geradas

**Authored coaching hints:**

- O mascaramento automático conhece todo valor recém-gerado?
- Quando registrar máscara em relação ao primeiro log possível?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-207:385d79b92d38ed2f68c7ff78b64395f8482016aaffed91ceef85477dc2050b24 -->
## Question 207: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-207`

**Content revision:** `385d79b92d38ed2f68c7ff78b64395f8482016aaffed91ceef85477dc2050b24`

### English

An engineer Base64-encodes a configured secret and prints the encoded result, assuming automatic masking covers it. Which correction is needed?

1. Base64 encryption makes the result safe to publish.

   Base64 is reversible encoding, not encryption.

2. Avoid logging it and explicitly mask transformed sensitive values when necessary. **[CORRECT]**

   Redaction may rely on exact matches, so transformed values need their own protection.

3. Set write-all so redaction has permission to work.

   Token write permissions do not improve log redaction.

4. Only change the variable's name to SECRET.

   Variable names do not make arbitrary transformed values automatically safe.

**Concept:** Secret transformation leakage

**Authored coaching hints:**

- Does the logged text still exactly match the stored secret?
- Can reversible encoding remove the sensitivity of a credential?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se imprime un secreto codificado Base64 suponiendo que se enmascara automáticamente. ¿Qué corregir?

1. Base64 cifra y permite publicarlo.

   Base64 es codificación reversible.

2. Evitar logs y enmascarar explícitamente transformaciones sensibles cuando haga falta. **[CORRECT]**

   El ocultamiento puede depender de coincidencias exactas.

3. Usar write-all.

   Los permisos de escritura del token no mejoran el ocultamiento.

4. Solo renombrar la variable SECRET.

   El nombre no hace segura una transformación.

**Concept:** Filtración por transformación

**Authored coaching hints:**

- ¿El texto registrado coincide exactamente con el secreto?
- ¿Una codificación reversible elimina sensibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo é impresso em Base64 supondo mascaramento automático. Qual correção é necessária?

1. Base64 criptografa e permite publicar.

   Base64 é codificação reversível.

2. Evitar logs e mascarar explicitamente transformações sensíveis quando necessário. **[CORRECT]**

   O mascaramento pode depender de correspondência exata.

3. Usar write-all.

   Permissões de escrita não melhoram o mascaramento.

4. Só renomear variável para SECRET.

   O nome não torna segura uma transformação.

**Concept:** Vazamento por transformação

**Authored coaching hints:**

- O texto registrado ainda corresponde exatamente ao segredo?
- Codificação reversível elimina sensibilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-208:e78a55fcb520776866b68085c151b906506641119165e8508088779058c47abf -->
## Question 208: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-208`

**Content revision:** `e78a55fcb520776866b68085c151b906506641119165e8508088779058c47abf`

### English

A credential was accidentally written unredacted into a workflow log. What response best addresses both the exposed value and the retained evidence containing it?

1. Only rename the workflow.

   Renaming does not invalidate credentials or remove old log contents.

2. Only add a mask for future runs.

   Future masking does not protect an already exposed credential.

3. Rotate or revoke the credential and remove the exposed logs under the incident procedure. **[CORRECT]**

   Rotation limits further use and log removal reduces ongoing disclosure.

4. Assume private repository access makes rotation unnecessary.

   Authorized log readers or compromised accounts may already have copied the credential.

**Concept:** Workflow credential exposure response

**Authored coaching hints:**

- Can redaction applied later revoke a value someone already copied?
- What separate actions address credential validity and retained disclosure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una credencial apareció sin ocultamiento en logs. ¿Qué atiende tanto el valor expuesto como la evidencia retenida?

1. Solo renombrar workflow.

   Renombrar no invalida ni elimina exposición.

2. Solo enmascarar futuras ejecuciones.

   Las máscaras futuras no protegen valores ya expuestos.

3. Rotar o revocar credencial y eliminar logs expuestos según procedimiento. **[CORRECT]**

   Rotación limita uso y eliminar logs reduce divulgación persistente.

4. No rotar porque el repositorio es privado.

   Lectores autorizados o cuentas comprometidas pudieron copiarla.

**Concept:** Respuesta a exposición

**Authored coaching hints:**

- ¿Ocultarla después revoca un valor ya copiado?
- ¿Qué acciones atienden validez y divulgación retenida por separado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma credencial apareceu sem mascaramento em logs. O que trata valor exposto e evidência retida?

1. Só renomear workflow.

   Renomear não invalida nem remove exposição.

2. Só mascarar futuras execuções.

   Máscaras futuras não protegem valor já exposto.

3. Rotacionar ou revogar e excluir logs expostos conforme procedimento. **[CORRECT]**

   Rotação limita uso e exclusão reduz divulgação contínua.

4. Não rotacionar porque o repositório é privado.

   Leitores autorizados ou contas comprometidas podem tê-la copiado.

**Concept:** Resposta a exposição

**Authored coaching hints:**

- Mascarar depois revoga um valor já copiado?
- Quais ações tratam validade e divulgação retida separadamente?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-209:cac9daff30543a7fd89d75d34476b4fd45e473fdbcc0a7879606f2cf3e2c02ee -->
## Question 209: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-209`

**Content revision:** `cac9daff30543a7fd89d75d34476b4fd45e473fdbcc0a7879606f2cf3e2c02ee`

### English

A cache path includes dependency packages and a cloud credentials file. External fork pull requests can restore applicable base-branch caches. Which correction is required?

1. Exclude credentials and other sensitive files from cached paths. **[CORRECT]**

   Caches must not contain secrets because their access model can include untrusted pull requests.

2. Use a more obscure cache key and keep the credentials.

   Key obscurity is not a safe secret-access boundary.

3. Rename the credentials file to data.bin.

   Renaming does not remove the sensitive contents.

4. Increase cache retention to protect it.

   Longer retention increases the exposure window.

**Concept:** Cache confidentiality boundaries

**Authored coaching hints:**

- Who can read a cache under the documented branch-access rules?
- Does performance storage have the same security properties as encrypted secret storage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El cache incluye paquetes y credenciales cloud; PR de forks pueden restaurar caches aplicables de la base. ¿Qué corregir?

1. Excluir credenciales y archivos sensibles del cache. **[CORRECT]**

   El cache puede ser accesible a PR no confiables.

2. Usar clave difícil de adivinar.

   Ocultar la clave no es límite seguro.

3. Renombrar credenciales data.bin.

   Renombrar no elimina sensibilidad.

4. Aumentar retención.

   Más retención amplía exposición.

**Concept:** Confidencialidad de caches

**Authored coaching hints:**

- ¿Quién puede leer según reglas de ramas?
- ¿El almacenamiento de rendimiento equivale al de secretos cifrados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O cache inclui pacotes e credenciais cloud; PRs de forks restauram caches aplicáveis da base. O que corrigir?

1. Excluir credenciais e arquivos sensíveis do cache. **[CORRECT]**

   O cache pode ser lido por PRs não confiáveis.

2. Usar chave obscura.

   Ocultar chave não é limite seguro.

3. Renomear credenciais para data.bin.

   Renomear não elimina sensibilidade.

4. Aumentar retenção.

   Maior retenção amplia exposição.

**Concept:** Confidencialidade de caches

**Authored coaching hints:**

- Quem pode ler pelas regras de acesso de branches?
- Armazenamento de desempenho equivale a segredos criptografados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-210:6ccca05e4d5a61a664024137899dcb7fb92bb07d7ae08bebd99d7ae451285767 -->
## Question 210: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-210`

**Content revision:** `6ccca05e4d5a61a664024137899dcb7fb92bb07d7ae08bebd99d7ae451285767`

### English

A release needs a verifiable statement connecting its binary to the repository and workflow that built it. Which feature addresses that provenance requirement?

1. A filename containing trusted.

   Names can be forged and do not establish origin.

2. Only a shorter artifact retention period.

   Retention affects availability rather than provenance.

3. Only a successful test badge.

   A badge does not bind a particular binary's digest to a build identity.

4. An artifact attestation generated by the build and verified by the consumer. **[CORRECT]**

   Attestations provide verifiable provenance tied to the produced artifact.

**Concept:** Build provenance attestations

**Authored coaching hints:**

- How can evidence bind exact artifact bytes to the identity of their producer?
- What must a consumer check rather than merely trust a label?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una release necesita vincular verificablemente el binario a su repositorio y workflow productor. ¿Qué función sirve?

1. Nombre trusted.

   Los nombres pueden falsificarse.

2. Solo menos retención.

   Retención cambia disponibilidad, no procedencia.

3. Solo insignia de pruebas exitosas.

   La insignia no vincula el digest del binario.

4. Atestación de artefacto creada al compilar y verificada por el consumidor. **[CORRECT]**

   La atestación aporta procedencia verificable del artefacto.

**Concept:** Atestaciones de procedencia

**Authored coaching hints:**

- ¿Cómo vincular bytes exactos e identidad del productor?
- ¿Qué debe verificar el consumidor en vez de confiar en una etiqueta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma release precisa vincular verificavelmente o binário ao repositório e workflow produtor. Qual recurso atende?

1. Nome contendo trusted.

   Nomes podem ser falsificados.

2. Somente menor retenção.

   Retenção afeta disponibilidade, não procedência.

3. Somente selo de testes aprovados.

   O selo não vincula o digest do binário.

4. Atestação de artefato gerada no build e verificada pelo consumidor. **[CORRECT]**

   Atestações fornecem procedência verificável do artefato.

**Concept:** Atestações de procedência

**Authored coaching hints:**

- Como vincular bytes exatos à identidade do produtor?
- O que o consumidor deve verificar em vez de confiar em rótulo?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/artifact-attestations>

<!-- certification-coach-question:actions-211:776b97213a7893b051c9da5e748156683e1184590f88aca04b8cac728382b072 -->
## Question 211: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-211`

**Content revision:** `776b97213a7893b051c9da5e748156683e1184590f88aca04b8cac728382b072`

### English

A trusted workflow generates provenance for a binary using GitHub's attestation action. Beyond reading contents, which permissions are shown in the documented binary-attestation setup?

1. issues: write and discussions: write.

   Issue and discussion permissions do not issue identity tokens or upload attestations.

2. id-token: write and attestations: write. **[CORRECT]**

   The documented setup requests identity-token issuance and attestation write access.

3. packages: read only.

   Package read access alone does not generate or publish binary provenance.

4. administration: write for every repository.

   Organization-wide administrative access is unnecessary for this operation.

**Concept:** Attestation generation permissions

**Authored coaching hints:**

- What identity evidence and repository resource must the attestation operation create?
- Which permission categories correspond to those two needs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al generar procedencia de un binario con la acción de atestación, ¿qué permisos documentados se necesitan además de leer contenido?

1. issues: write y discussions: write.

   Issues y discussions no emiten identidad ni atestaciones.

2. id-token: write y attestations: write. **[CORRECT]**

   Se solicita identidad y escritura de atestaciones.

3. Solo packages: read.

   Leer paquetes no genera ni publica procedencia.

4. administration: write en todos los repositorios.

   No hace falta administración general.

**Concept:** Permisos para atestaciones

**Authored coaching hints:**

- ¿Qué evidencia de identidad y recurso debe crear la operación?
- ¿Qué categorías corresponden a esas dos necesidades?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao gerar procedência de binário com a ação de atestação, quais permissões documentadas são necessárias além de ler conteúdo?

1. issues: write e discussions: write.

   Issues e discussions não emitem identidade nem atestações.

2. id-token: write e attestations: write. **[CORRECT]**

   São necessárias emissão de identidade e escrita de atestações.

3. Somente packages: read.

   Ler pacotes não gera nem publica procedência.

4. administration: write em todos os repositórios.

   Administração ampla não é necessária.

**Concept:** Permissões para atestações

**Authored coaching hints:**

- Qual evidência de identidade e recurso a operação deve criar?
- Quais categorias correspondem às duas necessidades?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>

<!-- certification-coach-question:actions-212:70df5ffeee140b24527516ef8177aba3c6eb5c51ef8ec0b3faea1c234bd3c73f -->
## Question 212: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-212`

**Content revision:** `70df5ffeee140b24527516ef8177aba3c6eb5c51ef8ec0b3faea1c234bd3c73f`

### English

A deployment pipeline has downloaded a binary and must verify its GitHub attestation against the expected repository before releasing it. Which CLI operation is designed for that?

1. gh secret list

   Secret inventory does not verify binary provenance.

2. gh run list only

   Run listing does not cryptographically bind the downloaded file to a producer.

3. gh attestation verify PATH -R OWNER/REPO **[CORRECT]**

   The verification command checks attestations for the specified artifact and expected repository.

4. gh repo rename

   Repository renaming is unrelated to artifact verification.

**Concept:** Consumer attestation verification

**Authored coaching hints:**

- Does knowing a build ran prove that this downloaded file came from it?
- Which operation evaluates the artifact itself against an expected producer identity?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se descargó un binario y hay que verificar su atestación contra el repositorio esperado antes de liberarlo. ¿Qué CLI sirve?

1. gh secret list

   Inventariar secretos no verifica procedencia.

2. Solo gh run list

   Listar runs no vincula criptográficamente el archivo.

3. gh attestation verify PATH -R OWNER/REPO **[CORRECT]**

   verify comprueba atestaciones del artefacto y repositorio esperado.

4. gh repo rename

   Renombrar repositorios no verifica artefactos.

**Concept:** Verificación por consumidores

**Authored coaching hints:**

- ¿Saber que hubo compilación prueba que produjo este archivo?
- ¿Qué operación evalúa el artefacto contra la identidad esperada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um binário foi baixado e sua atestação deve ser verificada contra o repositório esperado antes de liberar. Qual CLI serve?

1. gh secret list

   Inventariar segredos não verifica procedência.

2. Somente gh run list

   Listar runs não vincula criptograficamente o arquivo.

3. gh attestation verify PATH -R OWNER/REPO **[CORRECT]**

   verify verifica atestações do artefato e repositório esperado.

4. gh repo rename

   Renomear repositórios não verifica artefatos.

**Concept:** Verificação pelos consumidores

**Authored coaching hints:**

- Saber que houve build prova que produziu este arquivo?
- Qual operação avalia o artefato contra a identidade esperada?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>

<!-- certification-coach-question:actions-213:9249e42955ff8a5cae5b58e957ae989d4c91d57d2c76be40f75b4da2d4c37ccc -->
## Question 213: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-213`

**Content revision:** `9249e42955ff8a5cae5b58e957ae989d4c91d57d2c76be40f75b4da2d4c37ccc`

### English

A team treats a valid provenance attestation as proof that a binary contains no security defects. What limitation should the reviewer explain?

1. Provenance establishes origin and build information, not that the software is vulnerability-free. **[CORRECT]**

   Origin verification and vulnerability assessment answer different questions.

2. Attestations always replace testing and scanning.

   Tests and security scans still serve independent assurance goals.

3. A valid attestation means every dependency was manually reviewed.

   Provenance does not imply every dependency received manual review.

4. An attestation automatically patches the binary.

   An attestation is evidence, not a code-repair mechanism.

**Concept:** Provenance assurance limits

**Authored coaching hints:**

- What claim is actually being signed and verified?
- How is trustworthy origin different from defect-free behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se interpreta una atestación válida como prueba de que el binario no tiene vulnerabilidades. ¿Qué limitación explicar?

1. Establece origen e información de build, no ausencia de vulnerabilidades. **[CORRECT]**

   Origen y vulnerabilidades son preguntas diferentes.

2. Siempre reemplaza pruebas y escaneos.

   Las pruebas y escaneos cumplen objetivos independientes.

3. Implica revisión manual de toda dependencia.

   La procedencia no implica revisión manual completa.

4. Parchea el binario automáticamente.

   Es evidencia, no reparación de código.

**Concept:** Límites de garantía de procedencia

**Authored coaching hints:**

- ¿Qué afirmación se firma y verifica?
- ¿Cómo difiere origen confiable de comportamiento sin defectos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma atestação válida é tratada como prova de ausência de vulnerabilidades. Qual limitação explicar?

1. Estabelece origem e informações do build, não ausência de vulnerabilidades. **[CORRECT]**

   Origem e vulnerabilidades são perguntas distintas.

2. Sempre substitui testes e scans.

   Testes e scans têm objetivos independentes.

3. Implica revisão manual de toda dependência.

   Procedência não implica revisão manual completa.

4. Corrige o binário automaticamente.

   É evidência, não reparo de código.

**Concept:** Limites da garantia de procedência

**Authored coaching hints:**

- Qual afirmação é assinada e verificada?
- Como origem confiável difere de comportamento sem defeitos?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/artifact-attestations>

<!-- certification-coach-question:actions-214:150974b8ea8e8dcead11f12b9d435605bee0f77bd3b444d95399ca778f0b8891 -->
## Question 214: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-214`

**Content revision:** `150974b8ea8e8dcead11f12b9d435605bee0f77bd3b444d95399ca778f0b8891`

### English

A production environment requires approval from someone other than the person who initiated deployment. Which protection should be configured where available?

1. A public repository variable named approved.

   A variable does not establish reviewer identity or separation of duties.

2. A job name ending in reviewed.

   A display name does not enforce approval.

3. A cache restore key containing the actor.

   Cache keys do not implement deployment authorization.

4. Required reviewers with prevent self-review enabled. **[CORRECT]**

   Required reviewers plus self-review prevention enforce the requested separation.

**Concept:** Deployment separation of duties

**Authored coaching hints:**

- Must the gate verify only that approval exists or also who gave it?
- How can an environment rule prevent the initiator from approving their own deployment?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Production requiere aprobación de alguien distinto al iniciador del despliegue. ¿Qué protección configurar si está disponible?

1. Variable pública approved.

   La variable no verifica identidad ni separación.

2. Nombre del job terminado en reviewed.

   El nombre no exige aprobación.

3. Clave de cache con el actor.

   Cache no autoriza despliegues.

4. Revisores obligatorios con prevent self-review habilitado. **[CORRECT]**

   Los revisores y bloqueo de autoaprobación imponen separación.

**Concept:** Separación de funciones

**Authored coaching hints:**

- ¿Basta que exista aprobación o importa quién la dio?
- ¿Cómo impedir que el iniciador apruebe su despliegue?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Production exige aprovação de alguém diferente de quem iniciou a implantação. Qual proteção configurar se disponível?

1. Variável pública approved.

   Variável não verifica identidade nem separação.

2. Nome do job terminando em reviewed.

   Nome não exige aprovação.

3. Chave de cache com o ator.

   Cache não autoriza implantação.

4. Revisores obrigatórios com prevent self-review habilitado. **[CORRECT]**

   Revisores e prevenção de autoaprovação impõem separação.

**Concept:** Separação de funções

**Authored coaching hints:**

- Basta existir aprovação ou importa quem aprovou?
- Como impedir que o iniciador aprove a própria implantação?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments>

<!-- certification-coach-question:actions-215:a97c4d13487e11e8874c4d356ad9363689a9a276e20778d9825475c857aa81f0 -->
## Question 215: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-215`

**Content revision:** `a97c4d13487e11e8874c4d356ad9363689a9a276e20778d9825475c857aa81f0`

### English

A protected production environment should accept deployments only from approved release branches or tags. Which control is more appropriate than trusting an input string called approved?

1. Changing the artifact filename.

   A filename does not authenticate the deployment ref.

2. Environment deployment branch and tag restrictions. **[CORRECT]**

   Environment ref restrictions enforce allowed source branches and tags.

3. Increasing the runner disk size.

   Storage capacity does not constrain deployment source identity.

4. A longer summary message.

   Summary text documents results rather than enforces authorization.

**Concept:** Deployment ref restrictions

**Authored coaching hints:**

- Which source identity should the environment validate?
- Can caller-supplied descriptive text substitute for a repository-controlled rule?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Production solo admite ramas o tags release aprobados. ¿Qué es mejor que confiar en una entrada approved?

1. Renombrar artefactos.

   El nombre no autentica la referencia.

2. Restricciones de ramas y tags del entorno. **[CORRECT]**

   Las restricciones del entorno imponen fuentes permitidas.

3. Más disco.

   La capacidad no limita identidad de origen.

4. Un resumen más largo.

   El resumen documenta, no autoriza.

**Concept:** Restricciones de referencias de despliegue

**Authored coaching hints:**

- ¿Qué identidad de origen debe validar el entorno?
- ¿El texto del llamador sustituye una regla controlada por el repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Production só aceita branches ou tags de release aprovadas. O que é melhor que confiar numa entrada approved?

1. Renomear artefato.

   Nome não autentica referência.

2. Restrições de branches e tags do ambiente. **[CORRECT]**

   As restrições impõem fontes permitidas.

3. Mais disco no runner.

   Capacidade não limita identidade da fonte.

4. Resumo mais longo.

   Resumo documenta, não autoriza.

**Concept:** Restrições de referências de implantação

**Authored coaching hints:**

- Qual identidade de origem o ambiente deve validar?
- Texto do chamador substitui regra controlada pelo repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments>

<!-- certification-coach-question:actions-216:649819b6f2de366e1fea50e31060cfcb53b78122fc7ed4b30bb6b4fbbfe49998 -->
## Question 216: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-216`

**Content revision:** `649819b6f2de366e1fea50e31060cfcb53b78122fc7ed4b30bb6b4fbbfe49998`

### English

A public repository wants to run arbitrary fork code on a persistent self-hosted runner that can reach internal production services. What is the most important architectural concern?

1. The runner's name may be too long.

   Name length is not the relevant trust boundary.

2. The repository needs more status badges.

   Badges do not isolate attacker-controlled code.

3. Untrusted code could compromise the persistent runner and reachable internal resources. **[CORRECT]**

   Self-hosted execution can expose the machine, residual state, and connected network to untrusted submissions.

4. The cache must always use a constant key.

   A constant cache key does not mitigate host or network compromise.

**Concept:** Self-hosted untrusted code risk

**Authored coaching hints:**

- What resources become reachable from the execution host?
- Does a repository event approval alone turn submitted code into trusted code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio público ejecutará forks arbitrarios en runner propio persistente con acceso a producción interna. ¿Cuál es la preocupación principal?

1. El nombre es largo.

   La longitud no es el límite relevante.

2. Faltan insignias.

   Las insignias no aíslan código.

3. El código no confiable puede comprometer host y recursos internos accesibles. **[CORRECT]**

   El host, estado residual y red quedan expuestos.

4. El cache debe usar clave constante.

   Una clave constante no evita compromiso de host o red.

**Concept:** Código no confiable en runners propios

**Authored coaching hints:**

- ¿Qué recursos alcanza el host?
- ¿Aprobar un evento convierte automáticamente su código en confiable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório público executará forks arbitrários em runner próprio persistente com acesso à produção interna. Qual preocupação principal?

1. Nome longo.

   Comprimento não é o limite relevante.

2. Poucos selos.

   Selos não isolam código.

3. Código não confiável pode comprometer host e recursos internos acessíveis. **[CORRECT]**

   Host, estado residual e rede ficam expostos.

4. Cache precisa de chave constante.

   Chave constante não evita comprometimento de host ou rede.

**Concept:** Código não confiável em runners próprios

**Authored coaching hints:**

- Quais recursos o host alcança?
- Aprovar um evento torna automaticamente confiável seu código?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-217:f272977f1ab97f0d7952baad440c28b57ddaebcf9a56f1ce15edaa787b5dd593 -->
## Question 217: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-217`

**Content revision:** `f272977f1ab97f0d7952baad440c28b57ddaebcf9a56f1ce15edaa787b5dd593`

### English

Repeated dependency downloads dominate trusted CI execution time. Which optimization reuses suitable package files without treating a cache as the authoritative release output?

1. Cache package-manager data using compatibility-aware keys, then perform the normal dependency installation. **[CORRECT]**

   Dependency caching reduces downloads while installation still reconciles the declared dependency set.

2. Cache cloud credentials together with packages.

   Credentials must not be stored in dependency caches.

3. Disable lockfile checks entirely.

   Removing version integrity checks weakens reproducibility.

4. Replace every deployment artifact with an arbitrary cache entry.

   Caches are performance aids, not a substitute for identified release artifacts.

**Concept:** Safe dependency caching optimization

**Authored coaching hints:**

- Which work is expensive but safely reusable?
- How can correctness remain grounded in the dependency specification rather than cache contents?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las descargas repetidas de dependencias dominan CI confiable. ¿Qué optimización reutiliza paquetes sin convertir cache en release oficial?

1. Cache de datos del gestor con claves compatibles y luego instalación normal. **[CORRECT]**

   Cache reduce descarga mientras instalación concilia dependencias declaradas.

2. Cache de credenciales junto a paquetes.

   No deben almacenarse credenciales en caches.

3. Eliminar validación de lockfiles.

   Quitar controles debilita reproducibilidad.

4. Sustituir todo artefacto por cache arbitrario.

   Cache es ayuda de rendimiento, no artefacto identificado de release.

**Concept:** Cache seguro de dependencias

**Authored coaching hints:**

- ¿Qué trabajo es costoso pero reutilizable con seguridad?
- ¿Cómo basar corrección en la especificación y no en el cache?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Downloads repetidos de dependências dominam CI confiável. Qual otimização reutiliza pacotes sem tornar cache a saída oficial de release?

1. Cache de dados do gerenciador com chaves compatíveis e depois instalação normal. **[CORRECT]**

   Cache reduz downloads enquanto instalação reconcilia dependências declaradas.

2. Cache de credenciais junto com pacotes.

   Credenciais não devem ir para caches.

3. Eliminar verificação de lockfile.

   Remover verificações enfraquece reprodução.

4. Substituir artefatos por cache arbitrário.

   Cache ajuda desempenho, não substitui artefatos identificados.

**Concept:** Cache seguro de dependências

**Authored coaching hints:**

- Qual trabalho é caro mas reutilizável com segurança?
- Como fundamentar correção na especificação e não no cache?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-218:ab48c5815beaa36462525b5e9eea8469578095d297999ff5c2b839e549ea3010 -->
## Question 218: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-218`

**Content revision:** `ab48c5815beaa36462525b5e9eea8469578095d297999ff5c2b839e549ea3010`

### English

A dependency update needs a different cached directory layout, but the workflow keeps an existing exact cache key. Why should the author change the key or compatibility dimensions?

1. Caches automatically merge every later upload into the same key.

   Existing caches are not a mutable shared directory updated by every later run.

2. A longer workflow name updates all existing cache contents.

   Workflow naming does not replace cache data.

3. Artifacts and caches have identical overwrite semantics.

   Artifacts and caches serve different purposes and should not be assumed interchangeable.

4. An existing cache's contents cannot be changed in place; a new compatible cache identity is needed. **[CORRECT]**

   A new key or version-compatible identity permits saving the changed dependency layout.

**Concept:** Cache immutability and invalidation

**Authored coaching hints:**

- Is an exact cache key a mutable folder or a stored snapshot?
- How should a compatibility change be reflected in cache identity?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cambia la estructura de directorios de dependencias, pero se conserva una clave exacta existente. ¿Por qué cambiar clave o dimensiones compatibles?

1. El cache combina automáticamente futuras cargas.

   No es un directorio compartido mutable.

2. Renombrar workflow reemplaza todos los datos.

   El nombre no reemplaza datos.

3. Artefactos y caches tienen sobrescritura idéntica.

   Son mecanismos distintos.

4. El cache existente no cambia en sitio; hace falta nueva identidad compatible. **[CORRECT]**

   Una nueva identidad permite guardar la estructura cambiada.

**Concept:** Inmutabilidad e invalidación de cache

**Authored coaching hints:**

- ¿La clave exacta representa carpeta mutable o snapshot?
- ¿Cómo reflejar compatibilidad nueva en su identidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Muda o layout de diretórios de dependências, mas fica a mesma chave exata existente. Por que mudar chave ou dimensões compatíveis?

1. Cache combina automaticamente todo upload futuro.

   Não é diretório compartilhado mutável.

2. Renomear workflow atualiza dados.

   Nome não substitui dados.

3. Artefatos e caches têm sobrescrita idêntica.

   São mecanismos distintos.

4. O cache existente não muda no lugar; é necessária nova identidade compatível. **[CORRECT]**

   Nova identidade permite salvar o layout alterado.

**Concept:** Imutabilidade e invalidação de cache

**Authored coaching hints:**

- A chave exata representa pasta mutável ou snapshot?
- Como refletir nova compatibilidade na identidade?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:actions-219:e434b77366e9d40ed8bc9f002e8482b2b10b4c147a22ee6a19e4f0fe4e3d9fbd -->
## Question 219: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-219`

**Content revision:** `e434b77366e9d40ed8bc9f002e8482b2b10b4c147a22ee6a19e4f0fe4e3d9fbd`

### English

A 40-variant test matrix repeats combinations that provide little additional coverage and causes long queues. Which optimization should be evaluated first?

1. Increase privileges for every matrix job.

   Permissions do not reduce redundant compute or queue demand.

2. Identify meaningful compatibility combinations, prune redundant variants, and retain deliberate coverage. **[CORRECT]**

   A purposeful test matrix can reduce cost and latency without blindly discarding needed coverage.

3. Remove all tests without measuring risk.

   Removing all tests sacrifices validation rather than optimizing its design.

4. Duplicate every variant to increase confidence automatically.

   Duplication increases workload without necessarily adding useful coverage.

**Concept:** Coverage-aware matrix optimization

**Authored coaching hints:**

- Which combinations reveal distinct compatibility risks?
- How can execution cost be reduced while preserving the reasons tests exist?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una matriz de 40 variantes repite combinaciones con poco valor y produce colas largas. ¿Qué evaluar primero?

1. Aumentar privilegios.

   Permisos no reducen cómputo redundante.

2. Identificar combinaciones significativas y eliminar redundancia conservando cobertura deliberada. **[CORRECT]**

   Una matriz intencional reduce costo sin perder cobertura a ciegas.

3. Eliminar todas las pruebas sin medir riesgo.

   Quitar todo sacrifica validación.

4. Duplicar cada variante.

   Duplicar puede aumentar trabajo sin cobertura útil.

**Concept:** Optimización de matriz por cobertura

**Authored coaching hints:**

- ¿Qué combinaciones detectan riesgos distintos?
- ¿Cómo reducir costo preservando la razón de las pruebas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma matriz de 40 variantes repete combinações de pouco valor e gera filas longas. O que avaliar primeiro?

1. Aumentar privilégios.

   Permissões não reduzem computação redundante.

2. Identificar combinações relevantes e remover redundância mantendo cobertura deliberada. **[CORRECT]**

   Matriz intencional reduz custo sem descartar cobertura cegamente.

3. Eliminar testes sem medir riscos.

   Eliminar tudo sacrifica validação.

4. Duplicar cada variante.

   Duplicar pode aumentar trabalho sem cobertura útil.

**Concept:** Otimização da matriz por cobertura

**Authored coaching hints:**

- Quais combinações revelam riscos distintos?
- Como reduzir custo preservando a razão dos testes?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-220:29de51f3e255c4bdab418f8114c0168648222f65ab51109726111182cc1440c2 -->
## Question 220: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-220`

**Content revision:** `29de51f3e255c4bdab418f8114c0168648222f65ab51109726111182cc1440c2`

### English

Developers push frequently to feature branches, leaving many obsolete CI runs competing with the newest commit. Which optimization directly avoids spending capacity on those superseded runs?

1. Keep every old run at the highest priority.

   Prioritizing obsolete work delays current feedback.

2. Increase all artifact retention periods.

   Retention affects stored output, not active stale execution.

3. Use branch-scoped concurrency with cancel-in-progress for replaceable CI work. **[CORRECT]**

   Concurrency cancellation replaces old runs within the intended branch/workflow group.

4. Remove the branch from source control.

   Deleting branches is unnecessary and disrupts collaboration.

**Concept:** Eliminating stale CI work

**Authored coaching hints:**

- Which runs have become obsolete rather than merely slow?
- What grouping avoids canceling useful work from other branches?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Pushes frecuentes dejan ejecuciones CI obsoletas compitiendo con el commit reciente. ¿Qué evita gastar capacidad en ellas?

1. Prioridad máxima a las anteriores.

   Priorizar trabajo obsoleto retrasa feedback.

2. Más retención de artefactos.

   Retención no detiene ejecución activa.

3. Concurrencia por rama con cancel-in-progress para CI reemplazable. **[CORRECT]**

   La cancelación reemplaza runs anteriores del grupo previsto.

4. Eliminar la rama.

   Eliminar ramas interrumpe colaboración sin necesidad.

**Concept:** Eliminar CI obsoleto

**Authored coaching hints:**

- ¿Qué ejecuciones ya no aportan valor y no solo son lentas?
- ¿Qué agrupación evita cancelar trabajo de otras ramas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Pushes frequentes deixam runs CI obsoletos competindo com o commit recente. O que evita desperdiçar capacidade neles?

1. Prioridade máxima aos anteriores.

   Priorizar obsoletos atrasa feedback.

2. Mais retenção de artefatos.

   Retenção não interrompe execução ativa.

3. Concorrência por branch com cancel-in-progress para CI substituível. **[CORRECT]**

   Cancelamento substitui runs antigos no grupo previsto.

4. Excluir a branch.

   Excluir branches atrapalha colaboração sem necessidade.

**Concept:** Eliminar CI obsoleto

**Authored coaching hints:**

- Quais execuções perderam valor em vez de apenas serem lentas?
- Qual agrupamento evita cancelar trabalho de outras branches?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-221:5c86ae071abc8965728c0358554582cff559793956a6d4e75db929be946ccee5 -->
## Question 221: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-221`

**Content revision:** `5c86ae071abc8965728c0358554582cff559793956a6d4e75db929be946ccee5`

### English

Large temporary test recordings are retained as artifacts for months, though engineers need them for only three days. Which change directly reduces stored output while preserving that troubleshooting window?

1. Set a three-day artifact retention period within administrative limits. **[CORRECT]**

   A shorter appropriate artifact lifetime reduces accumulated storage while meeting the stated need.

2. Add more matrix axes.

   More variants may generate more recordings and storage.

3. Increase the token's write scopes.

   Token scopes do not control artifact lifetime.

4. Change runner labels to archived.

   Runner labels do not implement artifact deletion schedules.

**Concept:** Retention-based storage optimization

**Authored coaching hints:**

- How long does this evidence actually deliver value?
- Which configuration controls stored output after execution has ended?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Grabaciones temporales se guardan por meses, pero solo hacen falta tres días. ¿Qué reduce almacenamiento preservando diagnóstico?

1. Retención de artefactos de tres días dentro de límites administrativos. **[CORRECT]**

   Una vida útil adecuada reduce acumulación.

2. Más ejes de matriz.

   Más variantes pueden generar más archivos.

3. Más permisos de escritura.

   Los permisos no controlan retención.

4. Etiquetas archived en runners.

   Las etiquetas no programan eliminación.

**Concept:** Optimización de retención

**Authored coaching hints:**

- ¿Por cuánto tiempo aporta valor la evidencia?
- ¿Qué controla almacenamiento después de terminar la ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Gravações temporárias são retidas por meses, mas só importam por três dias. O que reduz armazenamento preservando diagnóstico?

1. Retenção de artefatos de três dias dentro dos limites administrativos. **[CORRECT]**

   Vida útil adequada reduz acúmulo.

2. Mais eixos de matriz.

   Mais variantes podem gerar mais arquivos.

3. Mais permissões de escrita.

   Permissões não controlam retenção.

4. Rótulos archived nos runners.

   Rótulos não programam exclusão.

**Concept:** Otimização de retenção

**Authored coaching hints:**

- Por quanto tempo a evidência oferece valor?
- O que controla armazenamento após terminar a execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/tutorials/store-and-share-data>

<!-- certification-coach-question:actions-222:0f5297365dcb143d557d3d2bd698f2c998e37d5edf860db18478ad3a910f6f32 -->
## Question 222: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-222`

**Content revision:** `0f5297365dcb143d557d3d2bd698f2c998e37d5edf860db18478ad3a910f6f32`

### English

A cleanup service must remove obsolete individual workflow artifacts before their normal expiration. Which supported mechanism should it use?

1. Erase a runner's workspace and assume server copies disappear.

   Runner-local deletion does not delete already uploaded server artifacts.

2. Rename the workflow's YAML file.

   Workflow filenames do not remove stored artifact records.

3. Delete the source branch only.

   Branch deletion is not artifact lifecycle management.

4. Use the Actions REST artifact deletion endpoint with the artifact ID and suitable authorization. **[CORRECT]**

   The artifact API supports explicit deletion of a stored artifact by its ID.

**Concept:** Programmatic artifact cleanup

**Authored coaching hints:**

- Where is the uploaded copy stored after its runner disappears?
- Which resource identifier is needed to delete one stored output rather than an entire repository?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servicio debe borrar artefactos individuales antes de su vencimiento normal. ¿Qué mecanismo usar?

1. Borrar workspace y suponer que elimina copias servidor.

   Borrado local no elimina cargas existentes.

2. Renombrar el YAML.

   El nombre del workflow no borra registros.

3. Solo eliminar la rama.

   Eliminar ramas no administra artefactos.

4. Endpoint REST de eliminación de artefactos Actions con ID y autorización adecuada. **[CORRECT]**

   El API elimina un artefacto almacenado por ID.

**Concept:** Limpieza programática de artefactos

**Authored coaching hints:**

- ¿Dónde queda la copia cuando desaparece el runner?
- ¿Qué identifica una salida individual y no todo el repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um serviço precisa excluir artefatos individuais antes do vencimento normal. Qual mecanismo usar?

1. Apagar workspace e presumir exclusão no servidor.

   Exclusão local não remove uploads existentes.

2. Renomear YAML.

   Nome de workflow não apaga registros.

3. Só excluir branch.

   Excluir branch não administra artefatos.

4. Endpoint REST de exclusão de artefatos Actions com ID e autorização adequada. **[CORRECT]**

   O API exclui artefato armazenado por ID.

**Concept:** Limpeza programática de artefatos

**Authored coaching hints:**

- Onde fica a cópia após o runner desaparecer?
- O que identifica uma saída individual e não o repositório inteiro?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/actions/artifacts>

<!-- certification-coach-question:actions-223:136df28bf330f483c95d2769ea5f5c681bc9c41a94f700d0056f8d8219bca652 -->
## Question 223: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-223`

**Content revision:** `136df28bf330f483c95d2769ea5f5c681bc9c41a94f700d0056f8d8219bca652`

### English

A workflow often hangs while waiting for an unreliable external test endpoint. What configuration limits wasted runner execution without treating incomplete tests as passing?

1. Set continue-on-error: true on every test.

   Blanket error tolerance can hide required test failures.

2. Apply an appropriate timeout and report the timed-out test as unsuccessful. **[CORRECT]**

   Timeouts bound wasted execution while preserving a failure signal for incomplete validation.

3. Remove the endpoint check from all builds.

   Removing validation entirely changes assurance rather than just resource use.

4. Increase retention-days.

   Retention controls stored files, not command runtime.

**Concept:** Bounded execution cost

**Authored coaching hints:**

- What distinguishes stopping unproductive work from ignoring its failed validation?
- Which limit applies to execution duration rather than storage lifetime?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Las pruebas se cuelgan esperando un endpoint externo inestable. ¿Qué limita desperdicio sin tratar pruebas incompletas como exitosas?

1. continue-on-error en todo.

   Tolerar todo puede ocultar fallas obligatorias.

2. Timeout adecuado e informar la prueba como fallida. **[CORRECT]**

   El timeout limita tiempo y conserva señal de fallo.

3. Quitar toda validación del endpoint.

   Quitar validación cambia garantías, no solo recursos.

4. Más retention-days.

   Retención no limita comandos.

**Concept:** Costo de ejecución acotado

**Authored coaching hints:**

- ¿Cómo difiere detener trabajo improductivo de ignorar validación fallida?
- ¿Qué límite controla duración y no almacenamiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Testes travam esperando endpoint externo instável. O que limita desperdício sem tratar testes incompletos como aprovados?

1. continue-on-error em tudo.

   Tolerar tudo pode ocultar falhas obrigatórias.

2. Timeout adequado e informar teste como malsucedido. **[CORRECT]**

   Timeout limita tempo e preserva sinal de falha.

3. Remover toda validação do endpoint.

   Remover validação altera garantias, não só recursos.

4. Mais retention-days.

   Retenção não limita comandos.

**Concept:** Custo de execução limitado

**Authored coaching hints:**

- Como parar trabalho improdutivo difere de ignorar validação malsucedida?
- Qual limite controla duração e não armazenamento?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>

<!-- certification-coach-question:actions-224:7892902d89f2b3886c402a0701930388710e3b4f0ee20ffa21f068bf46d95d40 -->
## Question 224: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-224`

**Content revision:** `7892902d89f2b3886c402a0701930388710e3b4f0ee20ffa21f068bf46d95d40`

### English

A project pins third-party actions to reviewed SHAs but needs a maintainable way to propose newer action revisions. Which approach supports security review without abandoning fixed references?

1. Switch every action to @main.

   Moving branches lose the explicit fixed-version review boundary.

2. Assume pinned dependencies never need updates.

   Pinned versions can still need security and compatibility updates.

3. Use Dependabot GitHub Actions updates and review the proposed dependency changes. **[CORRECT]**

   Dependabot can propose action and reusable workflow updates for reviewed adoption.

4. Place all action references in public log messages only.

   Logs do not define executable dependency versions.

**Concept:** Maintaining pinned action dependencies

**Authored coaching hints:**

- Can update discovery be automated while approval remains deliberate?
- How can a proposed new revision be inspected before changing execution?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se fijan acciones externas por SHA revisado. ¿Cómo proponer nuevas versiones de forma mantenible sin abandonar referencias fijas?

1. Cambiar todo a @main.

   Las ramas móviles pierden control de revisión.

2. Suponer que nunca necesitan actualización.

   Los pins también necesitan correcciones.

3. Actualizaciones GitHub Actions de Dependabot y revisión de propuestas. **[CORRECT]**

   Dependabot propone cambios de acciones y workflows reutilizables para adopción revisada.

4. Guardar referencias solo en logs públicos.

   Los logs no definen versiones ejecutables.

**Concept:** Mantenimiento de dependencias fijadas

**Authored coaching hints:**

- ¿Se puede automatizar descubrimiento manteniendo aprobación deliberada?
- ¿Cómo inspeccionar una revisión propuesta antes de ejecutarla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ações externas são fixadas por SHAs revisados. Como propor versões novas de modo sustentável sem abandonar referências fixas?

1. Mudar tudo para @main.

   Branches móveis perdem limite de revisão.

2. Supor que pins nunca precisam atualizar.

   Pins também precisam de correções.

3. Atualizações GitHub Actions do Dependabot e revisão das propostas. **[CORRECT]**

   Dependabot propõe mudanças de ações e workflows reutilizáveis para adoção revisada.

4. Guardar referências só em logs públicos.

   Logs não definem versões executáveis.

**Concept:** Manutenção de dependências fixadas

**Authored coaching hints:**

- É possível automatizar descoberta mantendo aprovação deliberada?
- Como inspecionar revisão proposta antes de mudar execução?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:actions-225:6e55476d7d6054da49dda34e4159f77706aba1c5c8110938fe43ea7170489a24 -->
## Question 225: Secure and optimize automation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `actions-225`

**Content revision:** `6e55476d7d6054da49dda34e4159f77706aba1c5c8110938fe43ea7170489a24`

### English

A deployment consumes a container image whose mutable tag can point to different contents over time. What should its provenance verification bind to when identifying the exact image built?

1. The image digest, checked against provenance from the expected producer. **[CORRECT]**

   A content digest identifies exact image bytes and can be tied to attested build provenance.

2. Only the tag's human-readable name.

   A mutable tag alone does not permanently identify the same image content.

3. The most recent comment on the repository.

   Comments do not cryptographically identify an image.

4. The runner group's display color.

   Display styling is unrelated to artifact identity.

**Concept:** Digest-bound container provenance

**Authored coaching hints:**

- Which image identifier changes when the content changes?
- How can a verifier distinguish a trusted name from the exact bytes being deployed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una imagen se despliega con tag mutable. ¿A qué debe vincularse la verificación de procedencia para identificar exactamente la imagen creada?

1. Al digest, comprobado contra procedencia del productor esperado. **[CORRECT]**

   El digest identifica contenido exacto y puede vincularse a procedencia.

2. Solo al nombre legible del tag.

   El tag mutable no fija contenido permanente.

3. Al último comentario.

   Los comentarios no identifican criptográficamente imágenes.

4. Al color del grupo de runners.

   El estilo no guarda relación con identidad.

**Concept:** Procedencia vinculada a digest

**Authored coaching hints:**

- ¿Qué identificador cambia cuando cambia contenido?
- ¿Cómo distinguir nombre confiable de bytes exactos desplegados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma imagem é implantada com tag mutável. A que vincular verificação de procedência para identificar exatamente a imagem criada?

1. Ao digest, conferido contra procedência do produtor esperado. **[CORRECT]**

   Digest identifica conteúdo exato e pode ligar-se à procedência.

2. Só ao nome legível da tag.

   Tag mutável não fixa conteúdo permanente.

3. Ao último comentário.

   Comentários não identificam imagens criptograficamente.

4. À cor do grupo de runners.

   Estilo não se relaciona à identidade.

**Concept:** Procedência vinculada ao digest

**Authored coaching hints:**

- Qual identificador muda quando o conteúdo muda?
- Como distinguir nome confiável dos bytes exatos implantados?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations>
