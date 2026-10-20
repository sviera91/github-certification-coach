<!-- certification-coach-review:security:1 -->
# GitHub Advanced Security: human review packet

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

<!-- certification-coach-question:ghas-ecosystem-001:512b0f45ebb8fe27922ecc3401856671b321a8e6f2388d5cb53b5762a51af0f6 -->
## Question 1: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-001`

**Content revision:** `512b0f45ebb8fe27922ecc3401856671b321a8e6f2388d5cb53b5762a51af0f6`

### English

A service commits a provider API token but has no vulnerable dependencies. Which capability is designed to detect this exposure?

1. Secret scanning **[CORRECT]**

   Secret scanning detects exposed credentials.

2. Dependency review

   Dependency review evaluates dependency changes.

3. Dependabot version updates

   Version updates refresh package versions.

4. CodeQL query packs

   Query packs analyze code rather than validate provider credentials.

**Concept:** Credential detection

**Authored coaching hints:**

- What kind of asset was exposed?
- Is the risk a package version or an authentication capability?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un servicio confirma en Git un token de API de un proveedor, pero no tiene dependencias vulnerables. ¿Qué capacidad está diseñada para detectar esta exposición?

1. Análisis de secretos **[CORRECT]**

   El análisis de secretos detecta credenciales expuestas.

2. Revisión de dependencias

   La revisión de dependencias evalúa cambios en dependencias.

3. Actualizaciones de versiones de Dependabot

   Las actualizaciones de versiones renuevan las versiones de paquetes.

4. Paquetes de consultas de CodeQL

   Los paquetes de consultas analizan código, no validan credenciales de proveedores.

**Concept:** Detección de credenciales

**Authored coaching hints:**

- ¿Qué tipo de activo se expuso?
- ¿El riesgo es una versión de paquete o una capacidad de autenticación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um serviço faz commit de um token de API de um provedor, mas não tem dependências vulneráveis. Qual recurso foi projetado para detectar essa exposição?

1. Verificação de segredos **[CORRECT]**

   A verificação de segredos detecta credenciais expostas.

2. Revisão de dependências

   A revisão de dependências avalia alterações nas dependências.

3. Atualizações de versão do Dependabot

   As atualizações de versão renovam as versões de pacotes.

4. Pacotes de consultas do CodeQL

   Pacotes de consultas analisam código, em vez de validar credenciais de provedores.

**Concept:** Detecção de credenciais

**Authored coaching hints:**

- Que tipo de ativo foi exposto?
- O risco é uma versão de pacote ou uma capacidade de autenticação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-ecosystem-002:e027895e8c89bd0cdb1a1e32254dd2c81d1a2f96463a8a03e4a9329cf4e81c1a -->
## Question 2: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-002`

**Content revision:** `e027895e8c89bd0cdb1a1e32254dd2c81d1a2f96463a8a03e4a9329cf4e81c1a`

### English

A reviewer wants to see whether a pull request adds a package with a known vulnerability. Which feature best matches that moment in development?

1. Secret scanning history scans

   History scans seek credentials, not dependency changes.

2. Dependency review **[CORRECT]**

   Dependency review evaluates dependencies changed by a pull request.

3. A repository security advisory

   An advisory coordinates vulnerability disclosure rather than inspecting dependency diffs.

4. Push protection

   Push protection checks for secrets in pushes.

**Concept:** Pre-merge dependency inspection

**Authored coaching hints:**

- What changed in this pull request?
- Which control provides feedback before the dependency is merged?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona revisora quiere saber si un pull request agrega un paquete con una vulnerabilidad conocida. ¿Qué función corresponde mejor a ese momento del desarrollo?

1. Análisis del historial en busca de secretos

   El análisis del historial busca credenciales, no cambios de dependencias.

2. Revisión de dependencias **[CORRECT]**

   La revisión de dependencias evalúa las dependencias modificadas por un pull request.

3. Un aviso de seguridad del repositorio

   Un aviso coordina la divulgación de vulnerabilidades, no inspecciona diferencias de dependencias.

4. Protección de inserciones

   La protección de inserciones busca secretos en los pushes.

**Concept:** Inspección de dependencias antes de la fusión

**Authored coaching hints:**

- ¿Qué cambió en este pull request?
- ¿Qué control informa antes de que se fusione la dependencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa revisora quer saber se um pull request adiciona um pacote com uma vulnerabilidade conhecida. Qual recurso corresponde melhor a esse momento do desenvolvimento?

1. Verificações de segredos no histórico

   Verificações do histórico buscam credenciais, não alterações de dependências.

2. Revisão de dependências **[CORRECT]**

   A revisão de dependências avalia dependências alteradas por um pull request.

3. Um comunicado de segurança do repositório

   Um comunicado coordena a divulgação de vulnerabilidades, em vez de inspecionar diferenças de dependências.

4. Proteção de push

   A proteção de push verifica segredos nos pushes.

**Concept:** Inspeção de dependências antes do merge

**Authored coaching hints:**

- O que mudou neste pull request?
- Qual controle fornece feedback antes do merge da dependência?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-003:5989de112ebdbc7bd21c3a62732078b892edc6d94e3a8385e8c914e815f6b675 -->
## Question 3: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-003`

**Content revision:** `5989de112ebdbc7bd21c3a62732078b892edc6d94e3a8385e8c914e815f6b675`

### English

An application passes untrusted request data to a dangerous operation. Which GitHub capability is designed to analyze this source-code behavior?

1. Dependency graph

   The dependency graph inventories packages.

2. Secret scanning

   Secret scanning searches for exposed credentials.

3. Code scanning with CodeQL **[CORRECT]**

   CodeQL can analyze data flow to identify vulnerable code paths.

4. Dependabot version updates

   Version updates do not inspect application data flow.

**Concept:** Static analysis purpose

**Authored coaching hints:**

- Is the issue in an external package or the application logic?
- What evidence would connect input to the operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una aplicación pasa datos no confiables de una solicitud a una operación peligrosa. ¿Qué capacidad de GitHub está diseñada para analizar este comportamiento del código fuente?

1. Gráfico de dependencias

   El gráfico de dependencias inventaría paquetes.

2. Análisis de secretos

   El análisis de secretos busca credenciales expuestas.

3. Análisis de código con CodeQL **[CORRECT]**

   CodeQL puede analizar el flujo de datos para identificar rutas de código vulnerables.

4. Actualizaciones de versiones de Dependabot

   Las actualizaciones de versiones no inspeccionan el flujo de datos de la aplicación.

**Concept:** Propósito del análisis estático

**Authored coaching hints:**

- ¿El problema está en un paquete externo o en la lógica de la aplicación?
- ¿Qué evidencia conectaría la entrada con la operación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma aplicação passa dados não confiáveis de uma requisição para uma operação perigosa. Qual recurso do GitHub foi projetado para analisar esse comportamento do código-fonte?

1. Grafo de dependências

   O grafo de dependências inventaria pacotes.

2. Verificação de segredos

   A verificação de segredos procura credenciais expostas.

3. Varredura de código com CodeQL **[CORRECT]**

   O CodeQL pode analisar o fluxo de dados para identificar caminhos de código vulneráveis.

4. Atualizações de versão do Dependabot

   Atualizações de versão não inspecionam o fluxo de dados da aplicação.

**Concept:** Objetivo da análise estática

**Authored coaching hints:**

- O problema está em um pacote externo ou na lógica da aplicação?
- Que evidência conectaria a entrada à operação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-ecosystem-004:1e0dd65c3e91368d924f8983e951ad091dd3a40fec582c23394a754b5e4ad8dc -->
## Question 4: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-004`

**Content revision:** `1e0dd65c3e91368d924f8983e951ad091dd3a40fec582c23394a754b5e4ad8dc`

### English

A security director needs a cross-repository view of enabled protections and security risk rather than opening every repository separately. Where should they start?

1. A single pull request's Files changed tab

   Files changed covers one pull request.

2. The package registry

   A registry stores packages rather than aggregating security posture.

3. The repository commit graph

   The commit graph shows development history.

4. Security overview **[CORRECT]**

   Security overview aggregates security information across repositories.

**Concept:** Portfolio security visibility

**Authored coaching hints:**

- What is the required scope?
- Is the goal individual code review or organizational posture?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una directora de seguridad necesita ver las protecciones habilitadas y el riesgo de varios repositorios sin abrirlos uno por uno. ¿Dónde debería empezar?

1. La pestaña Files changed de un solo pull request

   Files changed abarca un solo pull request.

2. El registro de paquetes

   Un registro almacena paquetes, no consolida la postura de seguridad.

3. El gráfico de commits del repositorio

   El gráfico de commits muestra el historial de desarrollo.

4. Security overview **[CORRECT]**

   Security overview consolida información de seguridad de varios repositorios.

**Concept:** Visibilidad de seguridad del portafolio

**Authored coaching hints:**

- ¿Qué alcance se necesita?
- ¿Se busca revisar código individual o la postura de la organización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma diretora de segurança precisa visualizar proteções habilitadas e riscos em vários repositórios, sem abrir cada um separadamente. Por onde deve começar?

1. A aba Files changed de um único pull request

   Files changed abrange um pull request.

2. O registro de pacotes

   Um registro armazena pacotes, em vez de agregar a postura de segurança.

3. O grafo de commits do repositório

   O grafo de commits mostra o histórico de desenvolvimento.

4. Security overview **[CORRECT]**

   Security overview agrega informações de segurança de vários repositórios.

**Concept:** Visibilidade de segurança do portfólio

**Authored coaching hints:**

- Qual é o escopo necessário?
- O objetivo é revisar código individual ou a postura organizacional?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-ecosystem-005:7a1845b41138347ec84f90e74a1937ea5a8c2c1a92f33b4b95cb889f8edd27b5 -->
## Question 5: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-005`

**Content revision:** `7a1845b41138347ec84f90e74a1937ea5a8c2c1a92f33b4b95cb889f8edd27b5`

### English

A team proposes replacing dependency alerts with secret scanning because both appear in the security interface. What is the best response?

1. Secret scanning also evaluates all package advisories

   Secret scanning does not replace package advisory matching.

2. The tools address different risks and should complement each other **[CORRECT]**

   Credential exposure and vulnerable dependencies require complementary detection.

3. Dependency alerts only detect credentials in lockfiles

   Dependency alerts concern vulnerable package versions.

4. Either feature provides identical findings

   The features use different evidence and produce different alerts.

**Concept:** Complementary security controls

**Authored coaching hints:**

- What evidence produces each type of alert?
- Could the same repository contain both risk types?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo propone reemplazar las alertas de dependencias por el análisis de secretos porque ambos aparecen en la interfaz de seguridad. ¿Cuál es la mejor respuesta?

1. El análisis de secretos también evalúa todos los avisos de paquetes

   El análisis de secretos no reemplaza la comparación con avisos de paquetes.

2. Las herramientas abordan riesgos distintos y deben complementarse **[CORRECT]**

   La exposición de credenciales y las dependencias vulnerables requieren detecciones complementarias.

3. Las alertas de dependencias solo detectan credenciales en archivos de bloqueo

   Las alertas de dependencias se refieren a versiones vulnerables de paquetes.

4. Ambas funciones producen hallazgos idénticos

   Las funciones usan evidencias distintas y producen alertas diferentes.

**Concept:** Controles de seguridad complementarios

**Authored coaching hints:**

- ¿Qué evidencia produce cada tipo de alerta?
- ¿Un mismo repositorio podría contener ambos tipos de riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe propõe substituir alertas de dependências pela verificação de segredos porque ambos aparecem na interface de segurança. Qual é a melhor resposta?

1. A verificação de segredos também avalia todos os comunicados de pacotes

   A verificação de segredos não substitui a correspondência com comunicados de pacotes.

2. As ferramentas tratam riscos diferentes e devem se complementar **[CORRECT]**

   Exposição de credenciais e dependências vulneráveis exigem detecções complementares.

3. Alertas de dependências só detectam credenciais em arquivos de lock

   Alertas de dependências tratam de versões vulneráveis de pacotes.

4. Os dois recursos produzem resultados idênticos

   Os recursos usam evidências distintas e produzem alertas diferentes.

**Concept:** Controles de segurança complementares

**Authored coaching hints:**

- Que evidência produz cada tipo de alerta?
- O mesmo repositório pode conter ambos os riscos?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-ecosystem-006:7b283b12a5035ee0ddd6d5cc5ae91a7743a2d35dc52146e5503c21b198e8ed0c -->
## Question 6: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-006`

**Content revision:** `7b283b12a5035ee0ddd6d5cc5ae91a7743a2d35dc52146e5503c21b198e8ed0c`

### English

Why combine push protection with scans of existing repository history?

1. A blocked push automatically removes old credentials

   Blocking a new push does not clean existing history.

2. Historical scans make prevention unnecessary

   Existing detection does not prevent new credential exposure.

3. Prevention limits new leaks while historical scanning finds existing exposures **[CORRECT]**

   The controls cover new introductions and already committed secrets.

4. Both controls only inspect the default branch's latest file contents

   Secret scanning examines Git history across branches.

**Concept:** Preventive and detective layering

**Authored coaching hints:**

- When does each control act?
- What happens to secrets committed before protection was enabled?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué combinar la protección de inserciones con el análisis del historial existente del repositorio?

1. Bloquear un push elimina automáticamente las credenciales antiguas

   Bloquear un nuevo push no limpia el historial existente.

2. Analizar el historial hace innecesaria la prevención

   Detectar exposiciones existentes no impide nuevas exposiciones de credenciales.

3. La prevención limita nuevas filtraciones y el análisis del historial encuentra exposiciones existentes **[CORRECT]**

   Los controles cubren tanto nuevas incorporaciones como secretos ya confirmados.

4. Ambos controles solo inspeccionan el contenido más reciente de los archivos de la rama predeterminada

   El análisis de secretos examina el historial de Git en todas las ramas.

**Concept:** Capas preventivas y de detección

**Authored coaching hints:**

- ¿Cuándo actúa cada control?
- ¿Qué pasa con los secretos confirmados antes de habilitar la protección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que combinar proteção de push com verificações do histórico existente do repositório?

1. Um push bloqueado remove automaticamente credenciais antigas

   Bloquear um novo push não limpa o histórico existente.

2. Verificações do histórico tornam a prevenção desnecessária

   Detectar exposições existentes não impede novas exposições de credenciais.

3. A prevenção limita novos vazamentos e a verificação do histórico encontra exposições existentes **[CORRECT]**

   Os controles cobrem novas introduções e segredos já commitados.

4. Os dois controles só inspecionam o conteúdo mais recente dos arquivos da branch padrão

   A verificação de segredos examina o histórico do Git nas diferentes branches.

**Concept:** Camadas preventivas e de detecção

**Authored coaching hints:**

- Quando cada controle atua?
- O que acontece com segredos commitados antes de habilitar a proteção?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-ecosystem-007:c78625cf9a6920810f503353cd094d661912d0f17c03a72892f1a6000e4931a7 -->
## Question 7: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-007`

**Content revision:** `c78625cf9a6920810f503353cd094d661912d0f17c03a72892f1a6000e4931a7`

### English

A project already uses an external static analyzer that produces supported SARIF. Must it replace the analyzer with CodeQL to show findings in GitHub code scanning?

1. No; it can upload supported SARIF results **[CORRECT]**

   Code scanning supports SARIF output from third-party tools.

2. Yes; GitHub accepts only CodeQL findings

   CodeQL is not the only supported analysis source.

3. Yes; SARIF only stores dependency alerts

   SARIF represents static analysis results.

4. No; it should upload the results as secret patterns

   Secret patterns are credential detectors, not a result-ingestion format.

**Concept:** Analysis ecosystem interoperability

**Authored coaching hints:**

- Is the display platform the same as the analysis engine?
- What is the purpose of a common results format?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un proyecto ya usa un analizador estático externo que genera SARIF compatible. ¿Debe reemplazarlo por CodeQL para mostrar hallazgos en el análisis de código de GitHub?

1. No; puede cargar resultados SARIF compatibles **[CORRECT]**

   El análisis de código admite salida SARIF de herramientas de terceros.

2. Sí; GitHub solo acepta hallazgos de CodeQL

   CodeQL no es la única fuente de análisis compatible.

3. Sí; SARIF solo almacena alertas de dependencias

   SARIF representa resultados de análisis estático.

4. No; debe cargar los resultados como patrones de secretos

   Los patrones de secretos detectan credenciales; no son un formato para incorporar resultados.

**Concept:** Interoperabilidad del ecosistema de análisis

**Authored coaching hints:**

- ¿La plataforma que muestra resultados es el motor de análisis?
- ¿Para qué sirve un formato común de resultados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um projeto já usa um analisador estático externo que produz SARIF compatível. Precisa substituí-lo pelo CodeQL para mostrar resultados na varredura de código do GitHub?

1. Não; pode enviar resultados SARIF compatíveis **[CORRECT]**

   A varredura de código aceita saída SARIF de ferramentas de terceiros.

2. Sim; o GitHub só aceita resultados do CodeQL

   O CodeQL não é a única fonte de análise compatível.

3. Sim; SARIF só armazena alertas de dependências

   SARIF representa resultados de análise estática.

4. Não; deve enviar os resultados como padrões de segredos

   Padrões de segredos detectam credenciais; não são um formato de ingestão de resultados.

**Concept:** Interoperabilidade do ecossistema de análise

**Authored coaching hints:**

- A plataforma de exibição é o mesmo que o mecanismo de análise?
- Qual é o objetivo de um formato comum de resultados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-008:c81bc6b3e18187e3f4b0f7ab8bc5ed0849e52451a1b12689b66d6c697c54772c -->
## Question 8: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-008`

**Content revision:** `c81bc6b3e18187e3f4b0f7ab8bc5ed0849e52451a1b12689b66d6c697c54772c`

### English

An engineering lead says enabling security tools guarantees that a repository is vulnerability-free. Which correction is most accurate?

1. Only repositories with dependencies need manual review

   Application logic also needs review.

2. A clean scan certifies all business logic

   Static analysis does not certify every business rule.

3. Dismissed alerts prove that no risk exists

   Dismissal records a decision, not proof of safety.

4. Detection has coverage limits, so secure design and human review remain necessary **[CORRECT]**

   Tools support secure development but do not guarantee complete detection.

**Concept:** Detection limitations

**Authored coaching hints:**

- What can a tool observe?
- Can absence of a finding establish absence of every vulnerability?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un líder de ingeniería afirma que habilitar herramientas de seguridad garantiza un repositorio sin vulnerabilidades. ¿Cuál es la corrección más precisa?

1. Solo los repositorios con dependencias necesitan revisión manual

   La lógica de la aplicación también necesita revisión.

2. Un análisis sin hallazgos certifica toda la lógica de negocio

   El análisis estático no certifica cada regla de negocio.

3. Las alertas descartadas demuestran que no hay riesgo

   Descartar registra una decisión, no una prueba de seguridad.

4. La detección tiene límites de cobertura; siguen siendo necesarios el diseño seguro y la revisión humana **[CORRECT]**

   Las herramientas apoyan el desarrollo seguro, pero no garantizan detección completa.

**Concept:** Limitaciones de detección

**Authored coaching hints:**

- ¿Qué puede observar una herramienta?
- ¿La ausencia de hallazgos demuestra la ausencia de toda vulnerabilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um líder de engenharia afirma que habilitar ferramentas de segurança garante um repositório sem vulnerabilidades. Qual correção é mais precisa?

1. Só repositórios com dependências precisam de revisão manual

   A lógica da aplicação também precisa de revisão.

2. Uma varredura sem resultados certifica toda a lógica de negócio

   A análise estática não certifica todas as regras de negócio.

3. Alertas descartados provam que não há risco

   O descarte registra uma decisão, não uma prova de segurança.

4. A detecção tem limites de cobertura; projeto seguro e revisão humana continuam necessários **[CORRECT]**

   Ferramentas apoiam o desenvolvimento seguro, mas não garantem detecção completa.

**Concept:** Limitações da detecção

**Authored coaching hints:**

- O que uma ferramenta consegue observar?
- A ausência de resultados comprova a ausência de toda vulnerabilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-009:4e20dd7a41b4ee40452b9c46ac5855bfb2c951b306ffd4ad38137f8c23590306 -->
## Question 9: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-009`

**Content revision:** `4e20dd7a41b4ee40452b9c46ac5855bfb2c951b306ffd4ad38137f8c23590306`

### English

A team only runs security analysis immediately before a quarterly release. Which change best implements a prevention-first approach?

1. Add pull-request analysis and pre-merge dependency checks **[CORRECT]**

   Earlier checks give developers feedback before risky changes merge.

2. Hide low-severity findings until release

   Hiding alerts changes visibility, not prevention.

3. Replace checks with a release checklist alone

   A checklist alone does not analyze changes.

4. Scan only archived repositories

   Archived repositories do not represent active change introduction.

**Concept:** Shift-left feedback

**Authored coaching hints:**

- When is a newly introduced issue easiest to correct?
- Which event is closest to development?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo solo ejecuta análisis de seguridad justo antes de una publicación trimestral. ¿Qué cambio implementa mejor un enfoque centrado en la prevención?

1. Agregar análisis de pull requests y comprobaciones de dependencias antes de fusionar **[CORRECT]**

   Las comprobaciones tempranas informan antes de fusionar cambios riesgosos.

2. Ocultar hallazgos de gravedad baja hasta la publicación

   Ocultar alertas cambia la visibilidad, no la prevención.

3. Reemplazar las comprobaciones únicamente por una lista de verificación de publicación

   Una lista de verificación por sí sola no analiza cambios.

4. Analizar solo repositorios archivados

   Los repositorios archivados no representan la incorporación activa de cambios.

**Concept:** Retroalimentación temprana

**Authored coaching hints:**

- ¿Cuándo es más fácil corregir un problema recién introducido?
- ¿Qué evento está más cerca del desarrollo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe só executa análises de segurança imediatamente antes de uma versão trimestral. Qual mudança implementa melhor uma abordagem que prioriza a prevenção?

1. Adicionar análise de pull requests e verificações de dependências antes do merge **[CORRECT]**

   Verificações antecipadas informam os desenvolvedores antes do merge de mudanças arriscadas.

2. Ocultar resultados de baixa severidade até o lançamento

   Ocultar alertas muda a visibilidade, não a prevenção.

3. Substituir verificações apenas por um checklist de lançamento

   Um checklist sozinho não analisa mudanças.

4. Verificar somente repositórios arquivados

   Repositórios arquivados não representam a introdução ativa de mudanças.

**Concept:** Feedback antecipado

**Authored coaching hints:**

- Quando é mais fácil corrigir um problema recém-introduzido?
- Qual evento está mais próximo do desenvolvimento?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-010:31df84299c1aa34967210a857978749c8a6b609bb97df4eef4a306e67cea5f47 -->
## Question 10: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-010`

**Content revision:** `31df84299c1aa34967210a857978749c8a6b609bb97df4eef4a306e67cea5f47`

### English

Which statement correctly separates the dependency graph from Dependabot alerts?

1. The graph detects hardcoded passwords; alerts inventory packages

   Credential detection belongs to secret scanning.

2. The graph inventories dependencies; alerts identify known vulnerabilities affecting them **[CORRECT]**

   The graph provides dependency data used for vulnerability matching.

3. The graph patches source code; alerts build binaries

   Neither capability builds binaries or directly patches application logic.

4. The graph and alerts are interchangeable names

   Inventory and vulnerability notifications are distinct functions.

**Concept:** Inventory versus vulnerability detection

**Authored coaching hints:**

- What information exists before a vulnerability is disclosed?
- Which capability adds advisory context?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación distingue correctamente el gráfico de dependencias de las alertas de Dependabot?

1. El gráfico detecta contraseñas incrustadas; las alertas inventarían paquetes

   La detección de credenciales corresponde al análisis de secretos.

2. El gráfico inventaría dependencias; las alertas identifican vulnerabilidades conocidas que las afectan **[CORRECT]**

   El gráfico aporta datos de dependencias para compararlos con vulnerabilidades.

3. El gráfico corrige código fuente; las alertas compilan binarios

   Ninguna capacidad compila binarios ni corrige directamente la lógica de la aplicación.

4. El gráfico y las alertas son nombres intercambiables

   El inventario y las notificaciones de vulnerabilidades son funciones distintas.

**Concept:** Inventario frente a detección de vulnerabilidades

**Authored coaching hints:**

- ¿Qué información existe antes de divulgar una vulnerabilidad?
- ¿Qué capacidad agrega el contexto de los avisos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação distingue corretamente o grafo de dependências dos alertas do Dependabot?

1. O grafo detecta senhas embutidas; os alertas inventariam pacotes

   A detecção de credenciais pertence à verificação de segredos.

2. O grafo inventaria dependências; os alertas identificam vulnerabilidades conhecidas que as afetam **[CORRECT]**

   O grafo fornece dados de dependências usados na correspondência com vulnerabilidades.

3. O grafo corrige código-fonte; os alertas compilam binários

   Nenhum dos recursos compila binários ou corrige diretamente a lógica da aplicação.

4. Grafo e alertas são nomes intercambiáveis

   Inventário e notificações de vulnerabilidades são funções distintas.

**Concept:** Inventário versus detecção de vulnerabilidades

**Authored coaching hints:**

- Que informação existe antes da divulgação de uma vulnerabilidade?
- Qual recurso acrescenta contexto de comunicados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-ecosystem-011:a5ecaee17aad78783f41fcef023527fc5a0ced801cbdcdf260bca4ec438df5f8 -->
## Question 11: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-011`

**Content revision:** `a5ecaee17aad78783f41fcef023527fc5a0ced801cbdcdf260bca4ec438df5f8`

### English

A maintainer wants automated pull requests that move vulnerable packages to patched versions. Which capability is the direct fit?

1. Security overview

   Overview aggregates posture rather than proposing package patches.

2. Push protection

   Push protection prevents credential leaks.

3. Dependabot security updates **[CORRECT]**

   Security updates propose fixes for vulnerable dependencies when possible.

4. Custom secret patterns

   Custom patterns detect organization-specific credentials.

**Concept:** Automated dependency remediation

**Authored coaching hints:**

- Is the desired output an alert or a proposed code change?
- What triggered the need for an update?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora quiere pull requests automáticos que actualicen paquetes vulnerables a versiones corregidas. ¿Qué capacidad corresponde directamente?

1. Security overview

   La vista general consolida la postura, no propone correcciones de paquetes.

2. Protección de inserciones

   La protección de inserciones previene filtraciones de credenciales.

3. Actualizaciones de seguridad de Dependabot **[CORRECT]**

   Las actualizaciones de seguridad proponen correcciones para dependencias vulnerables cuando es posible.

4. Patrones de secretos personalizados

   Los patrones personalizados detectan credenciales propias de la organización.

**Concept:** Remediación automatizada de dependencias

**Authored coaching hints:**

- ¿Se desea una alerta o un cambio de código propuesto?
- ¿Qué originó la necesidad de actualizar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora quer pull requests automáticos que atualizem pacotes vulneráveis para versões corrigidas. Qual recurso atende diretamente?

1. Security overview

   A visão geral agrega a postura, em vez de propor correções de pacotes.

2. Proteção de push

   A proteção de push previne vazamentos de credenciais.

3. Atualizações de segurança do Dependabot **[CORRECT]**

   Atualizações de segurança propõem correções para dependências vulneráveis quando possível.

4. Padrões personalizados de segredos

   Padrões personalizados detectam credenciais específicas da organização.

**Concept:** Remediação automatizada de dependências

**Authored coaching hints:**

- O resultado desejado é um alerta ou uma proposta de mudança de código?
- O que motivou a atualização?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-ecosystem-012:8d2c953fcf8b7c648868d77755f73e1c5a7b3ac49ac47b718ac4017c474aaa39 -->
## Question 12: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-012`

**Content revision:** `8d2c953fcf8b7c648868d77755f73e1c5a7b3ac49ac47b718ac4017c474aaa39`

### English

A researcher privately reports a vulnerability in a maintained library. Which GitHub mechanism best supports coordinated disclosure and a private fix discussion?

1. A public issue containing the full exploit details

   A public issue can disclose the vulnerability prematurely.

2. A dependency review check

   Dependency review inspects dependency changes.

3. A secret-scanning bypass request

   A bypass request concerns blocked secrets.

4. A repository security advisory **[CORRECT]**

   Repository security advisories support private vulnerability collaboration.

**Concept:** Coordinated vulnerability disclosure

**Authored coaching hints:**

- Who should see the report before a patch is ready?
- Is this a dependency change or a vulnerability in the maintained project?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una investigadora reporta en privado una vulnerabilidad en una biblioteca mantenida. ¿Qué mecanismo de GitHub facilita mejor la divulgación coordinada y una discusión privada sobre la corrección?

1. Una incidencia pública con todos los detalles del exploit

   Una incidencia pública puede divulgar la vulnerabilidad prematuramente.

2. Una comprobación de revisión de dependencias

   La revisión de dependencias inspecciona cambios en dependencias.

3. Una solicitud de omisión del análisis de secretos

   Una solicitud de omisión se refiere a secretos bloqueados.

4. Un aviso de seguridad del repositorio **[CORRECT]**

   Los avisos de seguridad del repositorio permiten colaborar en privado sobre vulnerabilidades.

**Concept:** Divulgación coordinada de vulnerabilidades

**Authored coaching hints:**

- ¿Quién debería ver el reporte antes de que esté lista la corrección?
- ¿Es un cambio de dependencias o una vulnerabilidad del proyecto mantenido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pesquisadora relata em particular uma vulnerabilidade em uma biblioteca mantida. Qual mecanismo do GitHub melhor apoia a divulgação coordenada e a discussão privada da correção?

1. Uma issue pública com todos os detalhes do exploit

   Uma issue pública pode divulgar a vulnerabilidade prematuramente.

2. Uma verificação de revisão de dependências

   A revisão de dependências inspeciona alterações de dependências.

3. Uma solicitação de bypass da verificação de segredos

   Uma solicitação de bypass trata de segredos bloqueados.

4. Um comunicado de segurança do repositório **[CORRECT]**

   Comunicados de segurança do repositório permitem colaboração privada sobre vulnerabilidades.

**Concept:** Divulgação coordenada de vulnerabilidades

**Authored coaching hints:**

- Quem deve ver o relato antes de a correção estar pronta?
- É uma alteração de dependência ou uma vulnerabilidade no projeto mantido?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-repository-security-advisories>

<!-- certification-coach-question:ghas-ecosystem-013:8288d2241c23aef934f956dd87dc02e0602611403d912055dba2aa7a871fcd77 -->
## Question 13: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-013`

**Content revision:** `8288d2241c23aef934f956dd87dc02e0602611403d912055dba2aa7a871fcd77`

### English

A company wants developers to fix related code-scanning findings together with a deadline and a named contact. Which feature is intended for this coordination?

1. Security campaigns **[CORRECT]**

   Campaigns organize selected alerts into collaborative remediation work.

2. Git tags

   Tags identify repository revisions.

3. Custom secret patterns

   Secret patterns define credential detection.

4. Dependency submission

   Dependency submission contributes inventory data.

**Concept:** Campaign-based remediation

**Authored coaching hints:**

- Is the requirement detection or organizing existing work?
- Which mechanism provides a shared remediation objective?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa quiere que los desarrolladores corrijan juntos hallazgos relacionados del análisis de código, con fecha límite y una persona de contacto. ¿Qué función está destinada a esa coordinación?

1. Campañas de seguridad **[CORRECT]**

   Las campañas organizan alertas seleccionadas en trabajo colaborativo de remediación.

2. Etiquetas de Git

   Las etiquetas identifican revisiones del repositorio.

3. Patrones de secretos personalizados

   Los patrones de secretos definen la detección de credenciales.

4. Envío de dependencias

   El envío de dependencias aporta datos de inventario.

**Concept:** Remediación mediante campañas

**Authored coaching hints:**

- ¿Se necesita detección u organizar trabajo existente?
- ¿Qué mecanismo ofrece un objetivo de remediación compartido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa quer que desenvolvedores corrijam juntos resultados relacionados da varredura de código, com prazo e uma pessoa de contato. Qual recurso se destina a essa coordenação?

1. Campanhas de segurança **[CORRECT]**

   Campanhas organizam alertas selecionados em trabalho colaborativo de remediação.

2. Tags do Git

   Tags identificam revisões do repositório.

3. Padrões personalizados de segredos

   Padrões de segredos definem a detecção de credenciais.

4. Envio de dependências

   O envio de dependências contribui com dados de inventário.

**Concept:** Remediação por campanhas

**Authored coaching hints:**

- A necessidade é detectar ou organizar trabalho existente?
- Qual mecanismo fornece um objetivo compartilhado de remediação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-ecosystem-014:3f41affce3249661ca6963cf5625ccae7afc189530e49d72d85e96ab003eaef9 -->
## Question 14: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-014`

**Content revision:** `3f41affce3249661ca6963cf5625ccae7afc189530e49d72d85e96ab003eaef9`

### English

What is the main security consequence of dismissing a valid code-scanning alert without changing the affected code?

1. The analyzer rewrites the vulnerable operation

   Dismissal does not rewrite source code.

2. The vulnerable behavior can remain despite the alert's changed status **[CORRECT]**

   Alert state and actual remediation are different.

3. The package registry revokes access

   Code-scanning dismissal does not revoke registry access.

4. The next build automatically removes the path

   Builds do not inherently remove dismissed code paths.

**Concept:** Alert state versus risk

**Authored coaching hints:**

- What artifact actually contains the weakness?
- Does changing a tracking state change program behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es la principal consecuencia de seguridad de descartar una alerta válida de análisis de código sin cambiar el código afectado?

1. El analizador reescribe la operación vulnerable

   Descartar no reescribe el código fuente.

2. El comportamiento vulnerable puede persistir aunque cambie el estado de la alerta **[CORRECT]**

   El estado de la alerta y la remediación real son distintos.

3. El registro de paquetes revoca el acceso

   Descartar una alerta de análisis de código no revoca el acceso al registro.

4. La siguiente compilación elimina automáticamente la ruta

   Las compilaciones no eliminan por sí mismas las rutas de código descartadas.

**Concept:** Estado de alerta frente a riesgo

**Authored coaching hints:**

- ¿Qué artefacto contiene realmente la debilidad?
- ¿Cambiar un estado de seguimiento cambia el comportamiento del programa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a principal consequência de segurança de descartar um alerta válido de varredura de código sem alterar o código afetado?

1. O analisador reescreve a operação vulnerável

   Descartar não reescreve código-fonte.

2. O comportamento vulnerável pode permanecer apesar da mudança de estado do alerta **[CORRECT]**

   Estado do alerta e remediação real são diferentes.

3. O registro de pacotes revoga o acesso

   Descartar um alerta de código não revoga acesso ao registro.

4. A próxima compilação remove automaticamente o caminho

   Compilações não removem por si só caminhos de código descartados.

**Concept:** Estado do alerta versus risco

**Authored coaching hints:**

- Qual artefato contém de fato a fraqueza?
- Mudar um estado de acompanhamento muda o comportamento do programa?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-ecosystem-015:dd48b17c6c5e54b66b2d6759b1367ddcf837ee4467471f214f9d638c69483a19 -->
## Question 15: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-015`

**Content revision:** `dd48b17c6c5e54b66b2d6759b1367ddcf837ee4467471f214f9d638c69483a19`

### English

An organization wants security specialists to oversee alerts without making every specialist an organization owner. Which built-in organizational role is designed for this work?

1. Billing manager

   Billing management does not provide security oversight.

2. Outside collaborator

   Outside collaborator describes membership scope, not an organization security role.

3. Security manager **[CORRECT]**

   Security managers receive organization security-management capabilities.

4. Repository reader only

   Read-only repository access is not the security-manager role.

**Concept:** Security-specific administration

**Authored coaching hints:**

- Which responsibilities actually need delegation?
- Can security authority be separated from full organization ownership?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere que especialistas supervisen las alertas sin que todos sean propietarios de la organización. ¿Qué rol organizacional integrado está diseñado para ello?

1. Administrador de facturación

   La administración de facturación no otorga supervisión de seguridad.

2. Colaborador externo

   Colaborador externo describe el alcance de pertenencia, no un rol de seguridad organizacional.

3. Administrador de seguridad **[CORRECT]**

   Los administradores de seguridad reciben capacidades de gestión de seguridad de la organización.

4. Solo lector del repositorio

   El acceso de solo lectura al repositorio no es el rol de administrador de seguridad.

**Concept:** Administración específica de seguridad

**Authored coaching hints:**

- ¿Qué responsabilidades necesitan delegarse?
- ¿Puede separarse la autoridad de seguridad de la propiedad total de la organización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer que especialistas supervisionem alertas sem tornar todos proprietários da organização. Qual função organizacional integrada foi projetada para isso?

1. Gerente de cobrança

   A gestão de cobrança não fornece supervisão de segurança.

2. Colaborador externo

   Colaborador externo descreve o escopo de participação, não uma função de segurança organizacional.

3. Gerente de segurança **[CORRECT]**

   Gerentes de segurança recebem capacidades de gestão de segurança da organização.

4. Apenas leitor do repositório

   Acesso somente leitura ao repositório não é a função de gerente de segurança.

**Concept:** Administração específica de segurança

**Authored coaching hints:**

- Quais responsabilidades precisam ser delegadas?
- A autoridade de segurança pode ser separada da propriedade total da organização?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization>

<!-- certification-coach-question:ghas-ecosystem-016:3679f69ce1f3e14214ea6b33d36a886913137bb91ba9d01739fe05281781da7d -->
## Question 16: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-016`

**Content revision:** `3679f69ce1f3e14214ea6b33d36a886913137bb91ba9d01739fe05281781da7d`

### English

A manager assumes public-repository security availability proves identical access for every private repository. What should the administrator do?

1. Treat visibility as irrelevant to availability

   Visibility can affect feature availability.

2. Enable a public fork to transfer all entitlements

   A public fork does not transfer private-repository entitlements.

3. Assume all security features are always paid everywhere

   Public-repository security features can be available without paid private coverage.

4. Check the specific feature's private-repository eligibility and licensing **[CORRECT]**

   Availability must be checked for the feature, repository ownership, and deployment.

**Concept:** Feature eligibility

**Authored coaching hints:**

- Which repository characteristics affect access?
- Would a public-repository example settle private entitlement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un gerente supone que la disponibilidad de seguridad en repositorios públicos demuestra acceso idéntico en todos los privados. ¿Qué debe hacer el administrador?

1. Considerar que la visibilidad no afecta la disponibilidad

   La visibilidad puede afectar la disponibilidad.

2. Habilitar una bifurcación pública para transferir todos los derechos de uso

   Una bifurcación pública no transfiere derechos de repositorios privados.

3. Suponer que todas las funciones de seguridad siempre son de pago en todas partes

   Las funciones de seguridad de repositorios públicos pueden estar disponibles sin cobertura privada de pago.

4. Verificar la elegibilidad y las licencias de la función concreta para repositorios privados **[CORRECT]**

   La disponibilidad debe verificarse según la función, la propiedad del repositorio y el despliegue.

**Concept:** Elegibilidad de funciones

**Authored coaching hints:**

- ¿Qué características del repositorio afectan el acceso?
- ¿Un ejemplo público resolvería los derechos de uso privados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um gerente supõe que a disponibilidade de segurança em repositórios públicos comprova acesso idêntico em todos os privados. O que o administrador deve fazer?

1. Tratar a visibilidade como irrelevante para a disponibilidade

   A visibilidade pode afetar a disponibilidade.

2. Habilitar um fork público para transferir todos os direitos de uso

   Um fork público não transfere direitos de repositórios privados.

3. Supor que todos os recursos de segurança são sempre pagos em qualquer lugar

   Recursos de segurança de repositórios públicos podem estar disponíveis sem cobertura privada paga.

4. Verificar a elegibilidade e o licenciamento do recurso específico para repositórios privados **[CORRECT]**

   A disponibilidade deve ser verificada conforme o recurso, a propriedade do repositório e a implantação.

**Concept:** Elegibilidade de recursos

**Authored coaching hints:**

- Quais características do repositório afetam o acesso?
- Um exemplo público resolveria a questão dos direitos privados?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-ecosystem-017:560fa90f234f8ffba0c1ed40002c0bb7a32a773e39df73856cd489428f19ad2a -->
## Question 17: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-017`

**Content revision:** `560fa90f234f8ffba0c1ed40002c0bb7a32a773e39df73856cd489428f19ad2a`

### English

Why should a dependency security program track transitive packages as well as directly declared packages?

1. Indirect packages can also contain known vulnerabilities **[CORRECT]**

   Dependencies of dependencies can introduce exploitable weaknesses.

2. Only direct dependencies execute code

   Indirect packages can execute as part of the application.

3. Transitive packages cannot be upgraded

   Indirect versions can often change through parent-package or lockfile updates.

4. Advisories apply only to package manifests

   Advisories describe packages and affected versions, not only manifest files.

**Concept:** Transitive dependency risk

**Authored coaching hints:**

- What does a dependency itself depend on?
- Does execution stop at the first layer of a package graph?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué un programa de seguridad de dependencias debe rastrear paquetes transitivos además de los declarados directamente?

1. Los paquetes indirectos también pueden contener vulnerabilidades conocidas **[CORRECT]**

   Las dependencias de dependencias pueden introducir debilidades explotables.

2. Solo las dependencias directas ejecutan código

   Los paquetes indirectos pueden ejecutarse como parte de la aplicación.

3. Los paquetes transitivos no se pueden actualizar

   Las versiones indirectas a menudo cambian actualizando el paquete padre o el archivo de bloqueo.

4. Los avisos solo se aplican a manifiestos de paquetes

   Los avisos describen paquetes y versiones afectadas, no solo archivos de manifiesto.

**Concept:** Riesgo de dependencias transitivas

**Authored coaching hints:**

- ¿De qué depende una dependencia?
- ¿La ejecución se detiene en la primera capa del gráfico de paquetes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que um programa de segurança de dependências deve acompanhar pacotes transitivos além dos declarados diretamente?

1. Pacotes indiretos também podem conter vulnerabilidades conhecidas **[CORRECT]**

   Dependências de dependências podem introduzir fraquezas exploráveis.

2. Só dependências diretas executam código

   Pacotes indiretos podem executar como parte da aplicação.

3. Pacotes transitivos não podem ser atualizados

   Versões indiretas frequentemente mudam por atualizações do pacote pai ou do arquivo de lock.

4. Comunicados se aplicam apenas a manifestos de pacotes

   Comunicados descrevem pacotes e versões afetadas, não apenas manifestos.

**Concept:** Risco de dependências transitivas

**Authored coaching hints:**

- De que uma dependência depende?
- A execução para na primeira camada do grafo de pacotes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-ecosystem-018:9d3bab65057661b901027476fc36bef04df2261daa19e08f11564602886e0805 -->
## Question 18: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-018`

**Content revision:** `9d3bab65057661b901027476fc36bef04df2261daa19e08f11564602886e0805`

### English

What is the best distinction between a code-scanning alert and a secret-scanning alert?

1. Both are always generated from package version advisories

   Package advisory matching is a supply-chain function.

2. One describes a potential code weakness; the other describes an exposed credential **[CORRECT]**

   The two alert families represent different underlying risks.

3. Code scanning only reports credentials; secret scanning only reports syntax errors

   This reverses and misstates their purposes.

4. Both require identical remediation steps

   Code changes and credential revocation address different problems.

**Concept:** Alert taxonomy

**Authored coaching hints:**

- What evidence is attached to each alert?
- Would editing logic invalidate a leaked credential?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es la mejor distinción entre una alerta de análisis de código y una de análisis de secretos?

1. Ambas siempre se generan a partir de avisos sobre versiones de paquetes

   La comparación con avisos de paquetes es una función de la cadena de suministro.

2. Una describe una posible debilidad del código; la otra, una credencial expuesta **[CORRECT]**

   Las dos familias de alertas representan riesgos subyacentes diferentes.

3. El análisis de código solo reporta credenciales; el de secretos, solo errores de sintaxis

   Esto invierte y tergiversa sus propósitos.

4. Ambas requieren pasos de remediación idénticos

   Los cambios de código y la revocación de credenciales resuelven problemas distintos.

**Concept:** Taxonomía de alertas

**Authored coaching hints:**

- ¿Qué evidencia acompaña cada alerta?
- ¿Editar la lógica invalidaría una credencial filtrada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a melhor distinção entre um alerta de varredura de código e um de verificação de segredos?

1. Ambos sempre são gerados por comunicados de versões de pacotes

   A correspondência com comunicados de pacotes é função da cadeia de suprimentos.

2. Um descreve uma possível fraqueza no código; o outro, uma credencial exposta **[CORRECT]**

   As duas famílias de alertas representam riscos subjacentes distintos.

3. A varredura de código só relata credenciais; a de segredos, só erros de sintaxe

   Isso inverte e descreve incorretamente seus objetivos.

4. Ambos exigem etapas idênticas de remediação

   Alterações de código e revogação de credenciais tratam problemas diferentes.

**Concept:** Taxonomia de alertas

**Authored coaching hints:**

- Que evidência acompanha cada alerta?
- Editar a lógica invalidaria uma credencial vazada?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-ecosystem-019:39e94bcb000362a3c6b38aae126f2c8ae9ac44eef72e1316beadb520364e46bf -->
## Question 19: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-019`

**Content revision:** `39e94bcb000362a3c6b38aae126f2c8ae9ac44eef72e1316beadb520364e46bf`

### English

A team wants to import resolved dependencies from a build that static manifest parsing misses. Which mechanism supplies this information to GitHub's dependency graph?

1. SARIF upload

   SARIF imports analysis findings, not dependency inventory.

2. A custom CodeQL query

   Queries inspect code rather than submit a build dependency snapshot.

3. Dependency submission API **[CORRECT]**

   The dependency submission API adds resolved dependency data.

4. A push-protection bypass reason

   Bypass reasons document secret exceptions.

**Concept:** Build-time dependency inventory

**Authored coaching hints:**

- What kind of data is being imported?
- Is the receiving system an alert engine or an inventory graph?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere importar dependencias resueltas durante una compilación que el análisis estático de manifiestos omite. ¿Qué mecanismo aporta esa información al gráfico de dependencias de GitHub?

1. Carga de SARIF

   SARIF importa hallazgos de análisis, no inventarios de dependencias.

2. Una consulta personalizada de CodeQL

   Las consultas inspeccionan código, no envían una instantánea de dependencias de compilación.

3. Dependency submission API **[CORRECT]**

   Dependency submission API agrega datos de dependencias resueltas.

4. Una justificación de omisión de la protección de inserciones

   Las justificaciones de omisión documentan excepciones de secretos.

**Concept:** Inventario de dependencias durante la compilación

**Authored coaching hints:**

- ¿Qué tipo de datos se importa?
- ¿El sistema receptor es un motor de alertas o un gráfico de inventario?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer importar dependências resolvidas em uma compilação que a análise estática de manifestos não identifica. Qual mecanismo fornece isso ao grafo de dependências do GitHub?

1. Upload de SARIF

   SARIF importa resultados de análise, não inventário de dependências.

2. Uma consulta personalizada do CodeQL

   Consultas inspecionam código, em vez de enviar um retrato das dependências da compilação.

3. Dependency submission API **[CORRECT]**

   A Dependency submission API acrescenta dados de dependências resolvidas.

4. Uma justificativa de bypass da proteção de push

   Justificativas de bypass documentam exceções de segredos.

**Concept:** Inventário de dependências na compilação

**Authored coaching hints:**

- Que tipo de dado está sendo importado?
- O sistema receptor é um mecanismo de alertas ou um grafo de inventário?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-ecosystem-020:29a9f57bfa0630e8f5c7df303af9856c5a792112ef9ea26cd19158df23b7857b -->
## Question 20: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-020`

**Content revision:** `29a9f57bfa0630e8f5c7df303af9856c5a792112ef9ea26cd19158df23b7857b`

### English

A risk review requests a machine-readable inventory of repository dependencies. Which deliverable best serves that purpose?

1. A list of dismissed secret alerts

   Dismissed secret alerts are not a component inventory.

2. A CodeQL source-to-sink trace

   A dataflow trace explains a code finding.

3. A screenshot of commit activity

   Commit activity does not enumerate dependency components.

4. An exported software bill of materials **[CORRECT]**

   An SBOM records software components in a machine-readable form.

**Concept:** SBOM purpose

**Authored coaching hints:**

- What does the reviewer need to inventory?
- Which artifact is designed for downstream tooling?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una revisión de riesgos solicita un inventario legible por máquinas de las dependencias del repositorio. ¿Qué entregable responde mejor?

1. Una lista de alertas de secretos descartadas

   Las alertas de secretos descartadas no son un inventario de componentes.

2. Un rastro de origen a destino de CodeQL

   Un rastro de flujo de datos explica un hallazgo de código.

3. Una captura de actividad de commits

   La actividad de commits no enumera componentes de dependencias.

4. Una lista de materiales de software exportada **[CORRECT]**

   Una SBOM registra componentes de software en formato legible por máquinas.

**Concept:** Propósito de una SBOM

**Authored coaching hints:**

- ¿Qué necesita inventariar la persona revisora?
- ¿Qué artefacto está diseñado para herramientas posteriores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma revisão de risco solicita um inventário legível por máquina das dependências do repositório. Qual entrega atende melhor?

1. Uma lista de alertas de segredos descartados

   Alertas de segredos descartados não são um inventário de componentes.

2. Um rastreamento de origem a destino do CodeQL

   Um rastreamento de fluxo de dados explica um resultado de código.

3. Uma captura da atividade de commits

   Atividade de commits não enumera componentes de dependências.

4. Uma lista de materiais de software exportada **[CORRECT]**

   Uma SBOM registra componentes de software em formato legível por máquina.

**Concept:** Objetivo de uma SBOM

**Authored coaching hints:**

- O que a pessoa revisora precisa inventariar?
- Qual artefato foi projetado para ferramentas posteriores?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-ecosystem-021:78d3ff56160e67b9bade10df255c48e655cdbc4ba03be144e9df99a9c4e8feaa -->
## Question 21: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-021`

**Content revision:** `78d3ff56160e67b9bade10df255c48e655cdbc4ba03be144e9df99a9c4e8feaa`

### English

A security analyst identifies a high-priority alert, while the application team understands the affected behavior. Which division of responsibility is most effective?

1. Security prioritizes and advises; application owners implement and validate a fix **[CORRECT]**

   Shared ownership combines risk expertise with application knowledge.

2. Security dismisses it because developers own the code

   Ownership does not justify dismissing a valid finding.

3. Developers wait for a billing administrator to patch it

   Billing administration is not code remediation.

4. Only the original committer may investigate

   Remediation is not restricted to the original author.

**Concept:** Shared remediation ownership

**Authored coaching hints:**

- Who understands risk context?
- Who can validate application behavior after the change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un analista de seguridad identifica una alerta de alta prioridad y el equipo de la aplicación conoce el comportamiento afectado. ¿Qué distribución de responsabilidades es más eficaz?

1. Seguridad prioriza y asesora; los responsables de la aplicación implementan y validan la corrección **[CORRECT]**

   La responsabilidad compartida combina conocimientos de riesgo y de la aplicación.

2. Seguridad la descarta porque los desarrolladores son responsables del código

   Ser responsable del código no justifica descartar un hallazgo válido.

3. Los desarrolladores esperan que un administrador de facturación la corrija

   La administración de facturación no remedia código.

4. Solo quien hizo el commit original puede investigar

   La remediación no se limita al autor original.

**Concept:** Responsabilidad compartida de remediación

**Authored coaching hints:**

- ¿Quién comprende el contexto de riesgo?
- ¿Quién puede validar el comportamiento de la aplicación tras el cambio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um analista de segurança identifica um alerta prioritário, e a equipe da aplicação entende o comportamento afetado. Qual divisão de responsabilidades é mais eficaz?

1. Segurança prioriza e orienta; responsáveis pela aplicação implementam e validam a correção **[CORRECT]**

   A responsabilidade compartilhada combina experiência em risco e conhecimento da aplicação.

2. Segurança descarta porque os desenvolvedores são responsáveis pelo código

   A responsabilidade pelo código não justifica descartar um resultado válido.

3. Desenvolvedores esperam que um administrador de cobrança corrija

   Administração de cobrança não é remediação de código.

4. Só quem fez o commit original pode investigar

   A remediação não se restringe ao autor original.

**Concept:** Responsabilidade compartilhada pela remediação

**Authored coaching hints:**

- Quem entende o contexto de risco?
- Quem pode validar o comportamento da aplicação após a mudança?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-ecosystem-022:1ed10386e5629ca3d084be9ca7b3e3393dd93368ff90df98e0b124e6974b218c -->
## Question 22: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-022`

**Content revision:** `1ed10386e5629ca3d084be9ca7b3e3393dd93368ff90df98e0b124e6974b218c`

### English

Which result most directly demonstrates a successful preventive dependency control?

1. More dependency alerts are hidden

   Visibility reduction does not prove prevention.

2. A proposed vulnerable dependency is rejected before merge **[CORRECT]**

   A pre-merge check can prevent introducing a known-vulnerable version.

3. An old issue is closed without a patch

   Closing an issue does not remove a vulnerable component.

4. A security dashboard has fewer repositories

   Reduced dashboard scope can hide risk.

**Concept:** Measuring prevention

**Authored coaching hints:**

- Did the risk enter the protected branch?
- Could a smaller visible count reflect missing data instead?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué resultado demuestra más directamente el éxito de un control preventivo de dependencias?

1. Se ocultan más alertas de dependencias

   Reducir la visibilidad no demuestra prevención.

2. Una dependencia vulnerable propuesta se rechaza antes de la fusión **[CORRECT]**

   Una comprobación previa a la fusión puede impedir introducir una versión con vulnerabilidades conocidas.

3. Se cierra una incidencia antigua sin corregirla

   Cerrar una incidencia no elimina un componente vulnerable.

4. Un panel de seguridad tiene menos repositorios

   Reducir el alcance del panel puede ocultar riesgo.

**Concept:** Medición de la prevención

**Authored coaching hints:**

- ¿El riesgo entró en la rama protegida?
- ¿Un recuento visible menor podría reflejar datos faltantes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual resultado demonstra mais diretamente o sucesso de um controle preventivo de dependências?

1. Mais alertas de dependências são ocultados

   Reduzir a visibilidade não comprova prevenção.

2. Uma dependência vulnerável proposta é rejeitada antes do merge **[CORRECT]**

   Uma verificação antes do merge pode impedir introduzir uma versão com vulnerabilidade conhecida.

3. Uma issue antiga é fechada sem correção

   Fechar uma issue não remove um componente vulnerável.

4. Um painel de segurança tem menos repositórios

   Reduzir o escopo do painel pode ocultar riscos.

**Concept:** Medição da prevenção

**Authored coaching hints:**

- O risco entrou na branch protegida?
- Uma contagem visível menor poderia refletir dados ausentes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-023:ab5fd294d68153c9d10c062825aa7e52c0a4839949d239b46a62ba171851188c -->
## Question 23: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-023`

**Content revision:** `ab5fd294d68153c9d10c062825aa7e52c0a4839949d239b46a62ba171851188c`

### English

An enterprise uses GitHub Actions for most projects but another CI system for one project. Which statement about CodeQL is accurate?

1. CodeQL cannot run outside Actions

   The CodeQL CLI supports external CI.

2. External CI can upload only secret alerts

   Code-scanning results can be uploaded from external systems.

3. The CLI can run in external CI and upload results for code scanning **[CORRECT]**

   External CI is a documented CodeQL integration path.

4. External CI requires converting findings into dependency manifests

   Dependency manifests are not static-analysis result files.

**Concept:** External CI integration

**Authored coaching hints:**

- Which component performs analysis?
- Does storing findings in GitHub require GitHub to execute the build?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa usa GitHub Actions en casi todos sus proyectos, pero otro sistema de CI en uno. ¿Qué afirmación sobre CodeQL es correcta?

1. CodeQL no puede ejecutarse fuera de Actions

   La CLI de CodeQL admite CI externa.

2. Una CI externa solo puede cargar alertas de secretos

   Los resultados de análisis de código se pueden cargar desde sistemas externos.

3. La CLI puede ejecutarse en una CI externa y cargar resultados para el análisis de código **[CORRECT]**

   La CI externa es una vía de integración documentada de CodeQL.

4. La CI externa exige convertir los hallazgos en manifiestos de dependencias

   Los manifiestos de dependencias no son archivos de resultados de análisis estático.

**Concept:** Integración con CI externa

**Authored coaching hints:**

- ¿Qué componente realiza el análisis?
- ¿Almacenar hallazgos en GitHub exige que GitHub ejecute la compilación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa usa GitHub Actions na maioria dos projetos, mas outro sistema de CI em um deles. Qual afirmação sobre CodeQL é correta?

1. CodeQL não pode executar fora do Actions

   A CLI do CodeQL admite CI externa.

2. CI externa só pode enviar alertas de segredos

   Resultados de varredura de código podem ser enviados de sistemas externos.

3. A CLI pode executar em CI externa e enviar resultados para a varredura de código **[CORRECT]**

   CI externa é um caminho documentado de integração do CodeQL.

4. CI externa exige converter resultados em manifestos de dependências

   Manifestos de dependências não são arquivos de resultados de análise estática.

**Concept:** Integração com CI externa

**Authored coaching hints:**

- Qual componente faz a análise?
- Armazenar resultados no GitHub exige que o GitHub execute a compilação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-ecosystem-024:dd83295f973266e7858cdfd974cd27eb37d790ba8d2f37ce755c2285b1d0db47 -->
## Question 24: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-024`

**Content revision:** `dd83295f973266e7858cdfd974cd27eb37d790ba8d2f37ce755c2285b1d0db47`

### English

A developer asks whether Copilot Autofix suggestions can be merged without review because they originate from a security alert. What is the best guidance?

1. Security origin guarantees functional correctness

   Security-focused suggestions can still contain mistakes.

2. A suggestion proves all related alerts are resolved

   A proposed fix is not proof of full remediation.

3. Disable tests when using an automatically generated fix

   Tests remain important for generated changes.

4. Review and test the suggestion against the vulnerability and intended behavior **[CORRECT]**

   Human validation checks both security intent and regressions.

**Concept:** Responsible autofix use

**Authored coaching hints:**

- Is a proposed change equivalent to verified behavior?
- What evidence would show the fix preserves functionality?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador pregunta si puede fusionar sugerencias de Copilot Autofix sin revisarlas porque provienen de una alerta de seguridad. ¿Cuál es la mejor orientación?

1. Su origen de seguridad garantiza corrección funcional

   Las sugerencias de seguridad aún pueden contener errores.

2. Una sugerencia demuestra que todas las alertas relacionadas están resueltas

   Una corrección propuesta no demuestra remediación completa.

3. Desactivar las pruebas al usar una corrección generada automáticamente

   Las pruebas siguen siendo importantes para cambios generados.

4. Revisar y probar la sugerencia frente a la vulnerabilidad y al comportamiento previsto **[CORRECT]**

   La validación humana comprueba la intención de seguridad y las regresiones.

**Concept:** Uso responsable de Autofix

**Authored coaching hints:**

- ¿Un cambio propuesto equivale a comportamiento verificado?
- ¿Qué evidencia mostraría que la corrección conserva la funcionalidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor pergunta se pode fazer merge de sugestões do Copilot Autofix sem revisão porque vêm de um alerta de segurança. Qual é a melhor orientação?

1. A origem de segurança garante correção funcional

   Sugestões voltadas à segurança ainda podem conter erros.

2. Uma sugestão comprova que todos os alertas relacionados foram resolvidos

   Uma correção proposta não comprova remediação completa.

3. Desabilitar testes ao usar uma correção gerada automaticamente

   Testes continuam importantes para mudanças geradas.

4. Revisar e testar a sugestão contra a vulnerabilidade e o comportamento pretendido **[CORRECT]**

   A validação humana verifica a intenção de segurança e as regressões.

**Concept:** Uso responsável do Autofix

**Authored coaching hints:**

- Uma mudança proposta equivale a comportamento verificado?
- Que evidência mostraria que a correção preserva a funcionalidade?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-025:f26b3ccd130ccc3479b3b3696d3b8fff33ef26e34f5e58a1c732bd84cbce5c12 -->
## Question 25: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-025`

**Content revision:** `f26b3ccd130ccc3479b3b3696d3b8fff33ef26e34f5e58a1c732bd84cbce5c12`

### English

An organization wants consistent feature-enablement settings across groups of repositories. Which capability packages those settings for reuse?

1. Security configurations **[CORRECT]**

   Security configurations collect security feature enablement settings.

2. Repository releases

   Releases package project versions.

3. Dependency lockfiles

   Lockfiles record resolved dependencies.

4. SARIF fingerprints

   Fingerprints identify analysis results rather than settings bundles.

**Concept:** Reusable security configuration

**Authored coaching hints:**

- Is the reusable item code, results, or settings?
- What must be applied across repositories?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere ajustes coherentes de habilitación de funciones en grupos de repositorios. ¿Qué capacidad los agrupa para reutilizarlos?

1. Configuraciones de seguridad **[CORRECT]**

   Las configuraciones de seguridad reúnen ajustes de habilitación de funciones de seguridad.

2. Publicaciones del repositorio

   Las publicaciones empaquetan versiones del proyecto.

3. Archivos de bloqueo de dependencias

   Los archivos de bloqueo registran dependencias resueltas.

4. Huellas digitales de SARIF

   Las huellas digitales identifican resultados de análisis, no grupos de ajustes.

**Concept:** Configuración de seguridad reutilizable

**Authored coaching hints:**

- ¿Se reutilizan código, resultados o ajustes?
- ¿Qué debe aplicarse en varios repositorios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer configurações consistentes de habilitação de recursos em grupos de repositórios. Qual recurso agrupa esses ajustes para reutilização?

1. Configurações de segurança **[CORRECT]**

   Configurações de segurança reúnem ajustes de habilitação de recursos de segurança.

2. Releases do repositório

   Releases empacotam versões do projeto.

3. Arquivos de lock de dependências

   Arquivos de lock registram dependências resolvidas.

4. Impressões digitais do SARIF

   Impressões digitais identificam resultados de análise, não conjuntos de ajustes.

**Concept:** Configuração de segurança reutilizável

**Authored coaching hints:**

- O item reutilizável é código, resultados ou ajustes?
- O que precisa ser aplicado a vários repositórios?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-ecosystem-026:19f29ea077bc264f764ad1a1934bd841ae4a795ac83e8bf4511fbacadb8ad8e6 -->
## Question 26: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-026`

**Content revision:** `19f29ea077bc264f764ad1a1934bd841ae4a795ac83e8bf4511fbacadb8ad8e6`

### English

A policy requires a clean dependency review before merge, but the team only displays the dependency diff to reviewers. What is missing for automated enforcement?

1. A custom token regex

   Token regexes do not enforce package policy.

2. A dependency review action check required by merge rules **[CORRECT]**

   The action plus required-check enforcement can gate merging.

3. A public security advisory

   An advisory coordinates disclosure, not merge eligibility.

4. A larger dependency graph screenshot

   A screenshot cannot enforce a check.

**Concept:** Visibility versus enforcement

**Authored coaching hints:**

- Can displaying information alone block a merge?
- Which component produces a check and which makes it mandatory?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política exige aprobar la revisión de dependencias antes de fusionar, pero el equipo solo muestra las diferencias a los revisores. ¿Qué falta para exigirlo automáticamente?

1. Una expresión regular de token personalizada

   Las expresiones de tokens no imponen políticas de paquetes.

2. Una comprobación de la acción de revisión de dependencias exigida por las reglas de fusión **[CORRECT]**

   La acción y la exigencia de su comprobación pueden condicionar la fusión.

3. Un aviso de seguridad público

   Un aviso coordina la divulgación, no la elegibilidad para fusionar.

4. Una captura más grande del gráfico de dependencias

   Una captura no puede exigir una comprobación.

**Concept:** Visibilidad frente a aplicación obligatoria

**Authored coaching hints:**

- ¿Mostrar información basta para bloquear una fusión?
- ¿Qué componente genera la comprobación y cuál la hace obligatoria?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política exige aprovação da revisão de dependências antes do merge, mas a equipe só exibe as diferenças aos revisores. O que falta para imposição automática?

1. Uma regex personalizada de token

   Regexes de tokens não impõem políticas de pacotes.

2. Uma verificação da ação de revisão de dependências exigida pelas regras de merge **[CORRECT]**

   A ação com a exigência da verificação pode condicionar o merge.

3. Um comunicado público de segurança

   Um comunicado coordena divulgação, não elegibilidade para merge.

4. Uma captura maior do grafo de dependências

   Uma captura não impõe uma verificação.

**Concept:** Visibilidade versus imposição

**Authored coaching hints:**

- Exibir informações basta para bloquear um merge?
- Qual componente produz a verificação e qual a torna obrigatória?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-027:a5b4163e6603e3332bd7ada6e0504c59cd6d6de92bacb6b5d01220537df84b0b -->
## Question 27: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-027`

**Content revision:** `a5b4163e6603e3332bd7ada6e0504c59cd6d6de92bacb6b5d01220537df84b0b`

### English

A leaked token was deleted from the latest commit. Why can it still be a security concern?

1. GitHub turns deleted strings into new tokens

   GitHub does not issue new tokens from deleted text.

2. Only dependency updates can delete secrets

   Secrets can be removed from code independently of dependency updates.

3. It may remain in history or copies and still authenticate **[CORRECT]**

   Credential validity and retained copies outlast a file edit.

4. Deleting a file automatically transfers the token to another repository

   File deletion does not transfer credentials.

**Concept:** Persistence of credential exposure

**Authored coaching hints:**

- What other copies may exist?
- What determines whether the issuing service still accepts a credential?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se eliminó un token filtrado del último commit. ¿Por qué aún puede ser un problema de seguridad?

1. GitHub convierte las cadenas eliminadas en tokens nuevos

   GitHub no emite tokens a partir de texto eliminado.

2. Solo las actualizaciones de dependencias pueden eliminar secretos

   Los secretos pueden quitarse del código independientemente de las actualizaciones de dependencias.

3. Puede permanecer en el historial o en copias y seguir autenticando **[CORRECT]**

   La validez de la credencial y las copias conservadas persisten tras editar un archivo.

4. Eliminar un archivo transfiere automáticamente el token a otro repositorio

   Eliminar archivos no transfiere credenciales.

**Concept:** Persistencia de la exposición de credenciales

**Authored coaching hints:**

- ¿Qué otras copias pueden existir?
- ¿Qué determina si el servicio emisor aún acepta una credencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um token vazado foi excluído do último commit. Por que ainda pode ser uma preocupação de segurança?

1. O GitHub transforma strings excluídas em tokens novos

   O GitHub não emite tokens a partir de texto excluído.

2. Só atualizações de dependências podem excluir segredos

   Segredos podem ser removidos do código independentemente de atualizações de dependências.

3. Ele pode permanecer no histórico ou em cópias e ainda autenticar **[CORRECT]**

   A validade da credencial e cópias retidas persistem após editar um arquivo.

4. Excluir um arquivo transfere automaticamente o token para outro repositório

   Excluir arquivos não transfere credenciais.

**Concept:** Persistência da exposição de credenciais

**Authored coaching hints:**

- Que outras cópias podem existir?
- O que determina se o serviço emissor ainda aceita uma credencial?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-ecosystem-028:340589a34a3ff1f8da5c8d33edb109900e41b0020e8d495506ed45fbe9545661 -->
## Question 28: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-028`

**Content revision:** `340589a34a3ff1f8da5c8d33edb109900e41b0020e8d495506ed45fbe9545661`

### English

Which security question is best answered by dependency review rather than by a whole-repository package inventory?

1. Which components exist in the current repository?

   The graph supports current inventory exploration.

2. Which other public repositories depend on this package?

   Dependents are graph information.

3. Which manifest declares a current dependency?

   The graph records declaring manifests.

4. Which dependency risks would this pull request introduce? **[CORRECT]**

   Dependency review evaluates the change between revisions.

**Concept:** Change-focused analysis

**Authored coaching hints:**

- Is the question about a snapshot or a delta?
- Why does the pull-request boundary matter?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué pregunta de seguridad responde mejor la revisión de dependencias que un inventario de paquetes de todo el repositorio?

1. ¿Qué componentes existen en el repositorio actual?

   El gráfico permite explorar el inventario actual.

2. ¿Qué otros repositorios públicos dependen de este paquete?

   Los dependientes son información del gráfico.

3. ¿Qué manifiesto declara una dependencia actual?

   El gráfico registra los manifiestos que declaran dependencias.

4. ¿Qué riesgos de dependencias introduciría este pull request? **[CORRECT]**

   La revisión de dependencias evalúa el cambio entre revisiones.

**Concept:** Análisis centrado en cambios

**Authored coaching hints:**

- ¿Se pregunta por una instantánea o por una diferencia?
- ¿Por qué importa el límite del pull request?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual pergunta de segurança é melhor respondida pela revisão de dependências do que por um inventário de pacotes de todo o repositório?

1. Quais componentes existem no repositório atual?

   O grafo permite explorar o inventário atual.

2. Quais outros repositórios públicos dependem deste pacote?

   Dependentes são informações do grafo.

3. Qual manifesto declara uma dependência atual?

   O grafo registra os manifestos que declaram dependências.

4. Quais riscos de dependências este pull request introduziria? **[CORRECT]**

   A revisão de dependências avalia a mudança entre revisões.

**Concept:** Análise focada em mudanças

**Authored coaching hints:**

- A pergunta é sobre um retrato ou uma diferença?
- Por que o limite do pull request importa?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-029:b25307b94992b15d9f5ddb700d9e8333e400ef9cd337a0a4eb3181ddf5c208de -->
## Question 29: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-029`

**Content revision:** `b25307b94992b15d9f5ddb700d9e8333e400ef9cd337a0a4eb3181ddf5c208de`

### English

A team uses a local credential check and asks whether server-side push protection is redundant. What is the strongest reason to retain both?

1. Server-side checks can cover pushes when local tooling is absent or bypassed **[CORRECT]**

   Server-side enforcement does not depend solely on developer workstation setup.

2. Local tools always rewrite remote history

   Local hooks do not inherently rewrite remote history.

3. Push protection replaces credential rotation

   Already exposed credentials still need revocation or rotation.

4. Using two checks guarantees detection of every password

   Layering improves coverage but does not guarantee universal detection.

**Concept:** Defense in depth

**Authored coaching hints:**

- Where does each control execute?
- What happens on a workstation without the local hook?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo usa una comprobación local de credenciales y pregunta si la protección de inserciones del servidor es redundante. ¿Cuál es la razón más sólida para conservar ambas?

1. Las comprobaciones del servidor cubren pushes cuando faltan o se omiten las herramientas locales **[CORRECT]**

   La aplicación del control en el servidor no depende solo de la estación del desarrollador.

2. Las herramientas locales siempre reescriben el historial remoto

   Los hooks locales no reescriben por sí mismos el historial remoto.

3. La protección de inserciones reemplaza la rotación de credenciales

   Las credenciales ya expuestas aún requieren revocación o rotación.

4. Dos comprobaciones garantizan detectar todas las contraseñas

   Las capas mejoran la cobertura, pero no garantizan detección universal.

**Concept:** Defensa en profundidad

**Authored coaching hints:**

- ¿Dónde se ejecuta cada control?
- ¿Qué ocurre en una estación sin el hook local?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe usa uma verificação local de credenciais e pergunta se a proteção de push no servidor é redundante. Qual é a razão mais forte para manter ambas?

1. Verificações no servidor cobrem pushes quando ferramentas locais estão ausentes ou são ignoradas **[CORRECT]**

   A imposição no servidor não depende apenas da configuração da estação do desenvolvedor.

2. Ferramentas locais sempre reescrevem o histórico remoto

   Hooks locais não reescrevem por si só o histórico remoto.

3. Proteção de push substitui rotação de credenciais

   Credenciais já expostas ainda precisam de revogação ou rotação.

4. Duas verificações garantem detectar todas as senhas

   Camadas melhoram a cobertura, mas não garantem detecção universal.

**Concept:** Defesa em profundidade

**Authored coaching hints:**

- Onde cada controle executa?
- O que ocorre em uma estação sem o hook local?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-ecosystem-030:1b5357a05e66920e0c8484cfebc5afb50119aaa09678050003028df51cfcfea9 -->
## Question 30: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-030`

**Content revision:** `1b5357a05e66920e0c8484cfebc5afb50119aaa09678050003028df51cfcfea9`

### English

Which approach makes a security overview most useful during rollout?

1. Count only alerts and ignore feature coverage

   Alert counts alone omit detection coverage.

2. Review both risk findings and which repositories have protections enabled **[CORRECT]**

   Findings and coverage together contextualize posture.

3. Treat an unscanned repository as clean

   No scan is not evidence of a clean result.

4. Compare teams only by raw alert totals

   Raw totals vary with repository size and scanning coverage.

**Concept:** Coverage-aware posture interpretation

**Authored coaching hints:**

- Could fewer findings mean fewer scans?
- What context is needed to interpret a portfolio count?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué enfoque hace más útil Security overview durante un despliegue?

1. Contar solo alertas e ignorar la cobertura de funciones

   Los recuentos por sí solos omiten la cobertura de detección.

2. Revisar tanto los hallazgos de riesgo como los repositorios con protecciones habilitadas **[CORRECT]**

   Los hallazgos y la cobertura juntos contextualizan la postura.

3. Considerar limpio un repositorio no analizado

   No analizar no demuestra un resultado limpio.

4. Comparar equipos solo por totales brutos de alertas

   Los totales brutos varían con el tamaño del repositorio y la cobertura.

**Concept:** Interpretación de postura considerando la cobertura

**Authored coaching hints:**

- ¿Menos hallazgos podrían significar menos análisis?
- ¿Qué contexto permite interpretar un recuento del portafolio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual abordagem torna o Security overview mais útil durante uma implantação?

1. Contar só alertas e ignorar a cobertura de recursos

   Contagens isoladas omitem a cobertura de detecção.

2. Revisar resultados de risco e quais repositórios têm proteções habilitadas **[CORRECT]**

   Resultados e cobertura juntos contextualizam a postura.

3. Tratar um repositório não verificado como limpo

   Ausência de varredura não comprova resultado limpo.

4. Comparar equipes só pelos totais brutos de alertas

   Totais brutos variam com o tamanho do repositório e a cobertura.

**Concept:** Interpretação da postura considerando a cobertura

**Authored coaching hints:**

- Menos resultados poderiam significar menos varreduras?
- Qual contexto é necessário para interpretar a contagem do portfólio?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-ecosystem-031:a8708fb9f09652b8e09cb42d3f4a472a7f8830c00b29f9fd7d95d9f995034529 -->
## Question 31: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-031`

**Content revision:** `a8708fb9f09652b8e09cb42d3f4a472a7f8830c00b29f9fd7d95d9f995034529`

### English

A vulnerability is disclosed today in a dependency that has not changed for months. Which capability can notify maintainers about this newly known risk?

1. A license-only pull-request check

   A license check does not monitor newly published vulnerability data.

2. Secret scanning validity checks

   Validity checks assess credentials.

3. Dependabot alerts **[CORRECT]**

   Dependabot alerts use vulnerability information affecting known dependencies.

4. A branch naming rule

   Branch naming rules do not match packages to advisories.

**Concept:** New advisory detection

**Authored coaching hints:**

- Did the code change or did vulnerability knowledge change?
- Which system combines package inventory with advisories?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Hoy se divulga una vulnerabilidad en una dependencia que no ha cambiado en meses. ¿Qué capacidad puede notificar este riesgo recién conocido?

1. Una comprobación de pull request solo de licencias

   Una comprobación de licencias no vigila nuevos datos de vulnerabilidades.

2. Comprobaciones de validez del análisis de secretos

   Las comprobaciones de validez evalúan credenciales.

3. Alertas de Dependabot **[CORRECT]**

   Las alertas de Dependabot usan información de vulnerabilidades que afecta dependencias conocidas.

4. Una regla de nombres de ramas

   Las reglas de nombres de ramas no comparan paquetes con avisos.

**Concept:** Detección de nuevos avisos

**Authored coaching hints:**

- ¿Cambió el código o el conocimiento de vulnerabilidades?
- ¿Qué sistema combina inventario de paquetes y avisos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma vulnerabilidade é divulgada hoje em uma dependência que não muda há meses. Qual recurso pode notificar os mantenedores desse risco recém-conhecido?

1. Uma verificação de pull request apenas de licenças

   Uma verificação de licenças não monitora novos dados de vulnerabilidades.

2. Verificações de validade de segredos

   Verificações de validade avaliam credenciais.

3. Alertas do Dependabot **[CORRECT]**

   Alertas do Dependabot usam informações de vulnerabilidades que afetam dependências conhecidas.

4. Uma regra de nomes de branches

   Regras de nomes de branches não comparam pacotes com comunicados.

**Concept:** Detecção de novos comunicados

**Authored coaching hints:**

- O código mudou ou mudou o conhecimento de vulnerabilidades?
- Qual sistema combina inventário de pacotes e comunicados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts>

<!-- certification-coach-question:ghas-ecosystem-032:d28f3109f97622edb1b000e42774ce301dc3d98048b6f9a214c27da96df5c84b -->
## Question 32: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-032`

**Content revision:** `d28f3109f97622edb1b000e42774ce301dc3d98048b6f9a214c27da96df5c84b`

### English

Why is a required pre-merge code-scanning check not a substitute for detecting secrets during a push?

1. Code scanning always runs before Git accepts a push

   Code scanning workflows generally analyze repository events after code reaches GitHub.

2. Secrets are safe until a release is tagged

   A credential can be used without a release.

3. Dependency review revokes credentials automatically

   Dependency review does not revoke credentials.

4. A secret can enter repository history before pull-request checks run **[CORRECT]**

   Push-time prevention closes an earlier exposure window.

**Concept:** Control timing

**Authored coaching hints:**

- What has already happened when a pull-request workflow starts?
- When does possession of a credential become dangerous?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué una comprobación obligatoria de análisis de código antes de fusionar no sustituye la detección de secretos durante un push?

1. El análisis de código siempre se ejecuta antes de que Git acepte un push

   Los flujos de análisis de código normalmente analizan eventos después de que el código llega a GitHub.

2. Los secretos son seguros hasta etiquetar una publicación

   Una credencial puede usarse sin una publicación.

3. La revisión de dependencias revoca credenciales automáticamente

   La revisión de dependencias no revoca credenciales.

4. Un secreto puede entrar en el historial antes de ejecutarse las comprobaciones del pull request **[CORRECT]**

   La prevención durante el push cierra una ventana de exposición anterior.

**Concept:** Momento de los controles

**Authored coaching hints:**

- ¿Qué ya ocurrió cuando empieza el flujo del pull request?
- ¿Cuándo se vuelve peligrosa la posesión de una credencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que uma verificação obrigatória de código antes do merge não substitui detectar segredos durante um push?

1. A varredura de código sempre executa antes de o Git aceitar um push

   Workflows de código geralmente analisam eventos após o código chegar ao GitHub.

2. Segredos são seguros até marcar uma release

   Uma credencial pode ser usada sem uma release.

3. A revisão de dependências revoga credenciais automaticamente

   A revisão de dependências não revoga credenciais.

4. Um segredo pode entrar no histórico antes de executarem as verificações do pull request **[CORRECT]**

   A prevenção no push fecha uma janela de exposição anterior.

**Concept:** Momento dos controles

**Authored coaching hints:**

- O que já aconteceu quando o workflow do pull request começa?
- Quando a posse de uma credencial se torna perigosa?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-ecosystem-033:dc031e81bf32a53df9d39ef3afa7fd2cfd0037d2b90b396962c5aa8fbc2173ba -->
## Question 33: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-033`

**Content revision:** `dc031e81bf32a53df9d39ef3afa7fd2cfd0037d2b90b396962c5aa8fbc2173ba`

### English

Which request belongs primarily to supply-chain security rather than credential security?

1. Assess an introduced library version and its license **[CORRECT]**

   Package versions and licenses are dependency concerns.

2. Revoke a leaked service token

   Revocation responds to credential exposure.

3. Detect an internal API-key format

   Custom token formats belong to secret detection.

4. Approve a secret push-protection exception

   Push-protection exceptions concern credential controls.

**Concept:** Security suite boundaries

**Authored coaching hints:**

- What is the object being evaluated?
- Is the concern a component or an authentication secret?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud corresponde principalmente a seguridad de la cadena de suministro y no de credenciales?

1. Evaluar una versión de biblioteca introducida y su licencia **[CORRECT]**

   Las versiones y licencias de paquetes son asuntos de dependencias.

2. Revocar un token de servicio filtrado

   La revocación responde a exposición de credenciales.

3. Detectar un formato interno de clave de API

   Los formatos de tokens personalizados corresponden a detección de secretos.

4. Aprobar una excepción de protección de inserciones para un secreto

   Las excepciones de protección de inserciones conciernen a controles de credenciales.

**Concept:** Límites de las suites de seguridad

**Authored coaching hints:**

- ¿Qué objeto se evalúa?
- ¿Preocupa un componente o un secreto de autenticación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação pertence principalmente à segurança da cadeia de suprimentos, e não à de credenciais?

1. Avaliar uma versão de biblioteca introduzida e sua licença **[CORRECT]**

   Versões e licenças de pacotes são questões de dependências.

2. Revogar um token de serviço vazado

   Revogação responde à exposição de credenciais.

3. Detectar um formato interno de chave de API

   Formatos personalizados de tokens pertencem à detecção de segredos.

4. Aprovar uma exceção de proteção de push para um segredo

   Exceções de proteção de push tratam de controles de credenciais.

**Concept:** Limites das suítes de segurança

**Authored coaching hints:**

- Qual objeto está sendo avaliado?
- A preocupação é um componente ou um segredo de autenticação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-034:583dae9ec96bb1dab3823f71eb64f519bb25d8ad372dab27d8e225694a4dbcfb -->
## Question 34: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-034`

**Content revision:** `583dae9ec96bb1dab3823f71eb64f519bb25d8ad372dab27d8e225694a4dbcfb`

### English

A security team wants an external ticketing integration to react when code-scanning alert states change. Which supported integration mechanism is appropriate?

1. Subscribe only to workflow\_run events and treat each successful run as an alert closure

   Workflow completion does not directly represent individual alert state changes.

2. Subscribe to code\_scanning\_alert webhook events **[CORRECT]**

   The code\_scanning\_alert webhook exposes alert events.

3. Subscribe only to pull\_request events and treat every merge as a verified security fix

   Merging a pull request does not necessarily resolve a particular alert.

4. Subscribe to dependabot\_alert events for all source-analysis findings

   Dependabot events concern dependency alerts rather than code-scanning alerts.

**Concept:** Security event integration

**Authored coaching hints:**

- What event should trigger the integration?
- Which interface publishes the particular security object's changes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que una integración externa de tickets reaccione a cambios de estado de alertas de análisis de código. ¿Qué mecanismo compatible corresponde?

1. Suscribirse solo a workflow\_run y tratar cada ejecución exitosa como cierre de alerta

   Finalizar un flujo no representa directamente cambios individuales de alertas.

2. Suscribirse a eventos del webhook code\_scanning\_alert **[CORRECT]**

   El webhook code\_scanning\_alert expone eventos de alertas.

3. Suscribirse solo a pull\_request y tratar toda fusión como corrección de seguridad verificada

   Fusionar un pull request no necesariamente resuelve una alerta concreta.

4. Suscribirse a dependabot\_alert para todos los hallazgos de análisis de código fuente

   Los eventos de Dependabot tratan alertas de dependencias, no de análisis de código.

**Concept:** Integración de eventos de seguridad

**Authored coaching hints:**

- ¿Qué evento debe activar la integración?
- ¿Qué interfaz publica los cambios de ese objeto de seguridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer que uma integração externa de tickets reaja a mudanças de estado de alertas de código. Qual mecanismo compatível é adequado?

1. Assinar só workflow\_run e tratar toda execução bem-sucedida como fechamento de alerta

   Concluir um workflow não representa diretamente mudanças individuais dos alertas.

2. Assinar eventos do webhook code\_scanning\_alert **[CORRECT]**

   O webhook code\_scanning\_alert expõe eventos dos alertas.

3. Assinar só pull\_request e tratar todo merge como correção de segurança verificada

   Fazer merge de um pull request não necessariamente resolve um alerta específico.

4. Assinar dependabot\_alert para todos os resultados de análise de código-fonte

   Eventos do Dependabot tratam alertas de dependências, não de código.

**Concept:** Integração de eventos de segurança

**Authored coaching hints:**

- Qual evento deve acionar a integração?
- Qual interface publica mudanças desse objeto de segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-035:46f5e49187b03dcd21b0fba704f0743b31d87a3257b9227dc7cd1b4023bd1403 -->
## Question 35: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-035`

**Content revision:** `46f5e49187b03dcd21b0fba704f0743b31d87a3257b9227dc7cd1b4023bd1403`

### English

A startup asks whether buying Code Security alone should be assumed to enable every Secret Protection capability in private repositories. What is the accurate approach?

1. Assume the product names are synonyms

   The products address different security areas.

2. Use public-repository behavior as proof

   Public availability does not establish private entitlement.

3. Evaluate Code Security and Secret Protection entitlements separately **[CORRECT]**

   Separate product packaging requires checking the relevant entitlement.

4. Assume all private repositories inherit every security product

   Private repositories do not automatically receive every product.

**Concept:** Security product packaging

**Authored coaching hints:**

- Are the product scopes identical?
- Which feature's documentation establishes its availability?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una startup pregunta si comprar solo Code Security habilita todas las capacidades de Secret Protection en repositorios privados. ¿Cuál es el enfoque correcto?

1. Suponer que los nombres de producto son sinónimos

   Los productos abordan áreas de seguridad distintas.

2. Usar el comportamiento de repositorios públicos como prueba

   La disponibilidad pública no establece derechos privados.

3. Evaluar por separado los derechos de Code Security y Secret Protection **[CORRECT]**

   El empaquetado separado exige verificar el derecho pertinente.

4. Suponer que todos los repositorios privados heredan todos los productos de seguridad

   Los repositorios privados no reciben automáticamente todos los productos.

**Concept:** Empaquetado de productos de seguridad

**Authored coaching hints:**

- ¿Son idénticos los alcances de los productos?
- ¿La documentación de qué función establece su disponibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma startup pergunta se comprar só Code Security deve ser considerado suficiente para habilitar todos os recursos do Secret Protection em repositórios privados. Qual é a abordagem correta?

1. Supor que os nomes dos produtos são sinônimos

   Os produtos tratam áreas distintas de segurança.

2. Usar o comportamento público como prova

   Disponibilidade pública não estabelece direitos privados.

3. Avaliar separadamente os direitos de Code Security e Secret Protection **[CORRECT]**

   O empacotamento separado exige verificar o direito pertinente.

4. Supor que todos os repositórios privados herdam todos os produtos de segurança

   Repositórios privados não recebem automaticamente todos os produtos.

**Concept:** Empacotamento de produtos de segurança

**Authored coaching hints:**

- Os escopos dos produtos são idênticos?
- A documentação de qual recurso estabelece sua disponibilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-ecosystem-036:9aca764038471fd2df1e61b5f4ea6a64cb6b8c8f6c9eeb0315cd50c38b74e6b0 -->
## Question 36: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-036`

**Content revision:** `9aca764038471fd2df1e61b5f4ea6a64cb6b8c8f6c9eeb0315cd50c38b74e6b0`

### English

A repository uses a language not supported by CodeQL. Which plan preserves the possibility of GitHub code-scanning visibility?

1. Rename files to a supported extension

   Renaming does not make unsupported code analyzable.

2. Run CodeQL and interpret no alerts as full coverage

   No findings from unsupported analysis do not establish coverage.

3. Use Dependabot to analyze all application logic

   Dependabot does not analyze arbitrary application logic.

4. Evaluate a suitable analyzer that exports supported SARIF **[CORRECT]**

   Third-party SARIF can extend the code-scanning tooling ecosystem.

**Concept:** Unsupported language strategy

**Authored coaching hints:**

- What must understand the source language?
- Can result storage accept findings from another engine?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio usa un lenguaje no compatible con CodeQL. ¿Qué plan conserva la posibilidad de visibilidad en el análisis de código de GitHub?

1. Renombrar archivos con una extensión compatible

   Renombrar no hace analizable código no compatible.

2. Ejecutar CodeQL e interpretar la ausencia de alertas como cobertura total

   La ausencia de hallazgos de un análisis no compatible no establece cobertura.

3. Usar Dependabot para analizar toda la lógica de la aplicación

   Dependabot no analiza lógica arbitraria de aplicaciones.

4. Evaluar un analizador adecuado que exporte SARIF compatible **[CORRECT]**

   SARIF de terceros puede ampliar el ecosistema de herramientas de análisis de código.

**Concept:** Estrategia para lenguajes no compatibles

**Authored coaching hints:**

- ¿Qué debe comprender el lenguaje fuente?
- ¿El almacenamiento de resultados puede aceptar hallazgos de otro motor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório usa uma linguagem não compatível com CodeQL. Qual plano preserva a possibilidade de visibilidade na varredura de código do GitHub?

1. Renomear arquivos com uma extensão compatível

   Renomear não torna código incompatível analisável.

2. Executar CodeQL e interpretar ausência de alertas como cobertura total

   Ausência de resultados de análise incompatível não estabelece cobertura.

3. Usar Dependabot para analisar toda a lógica da aplicação

   Dependabot não analisa lógica arbitrária de aplicações.

4. Avaliar um analisador adequado que exporte SARIF compatível **[CORRECT]**

   SARIF de terceiros pode ampliar o ecossistema de ferramentas de varredura de código.

**Concept:** Estratégia para linguagem incompatível

**Authored coaching hints:**

- O que precisa compreender a linguagem-fonte?
- O armazenamento de resultados pode aceitar resultados de outro mecanismo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-037:eb243fef9da77787263cad2259bfbf4592c5b58758157f04b09ead56539a28b5 -->
## Question 37: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-037`

**Content revision:** `eb243fef9da77787263cad2259bfbf4592c5b58758157f04b09ead56539a28b5`

### English

A campaign fixes dozens of related injection alerts. What additional use of the campaign most directly strengthens secure development?

1. Use the related fixes to teach developers the common unsafe pattern **[CORRECT]**

   Related remediation work can reinforce reusable secure-coding knowledge.

2. Turn off future analysis of those files

   Disabling analysis removes future detection.

3. Dismiss all future injection alerts automatically

   Future findings still require risk-based evaluation.

4. Replace dependency monitoring with the campaign report

   Code campaigns do not replace dependency monitoring.

**Concept:** Remediation as learning

**Authored coaching hints:**

- What knowledge can transfer between similar findings?
- How can a one-time cleanup reduce future introductions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una campaña corrige decenas de alertas de inyección relacionadas. ¿Qué uso adicional fortalece más directamente el desarrollo seguro?

1. Usar las correcciones relacionadas para enseñar el patrón inseguro común **[CORRECT]**

   La remediación relacionada puede reforzar conocimientos reutilizables de programación segura.

2. Desactivar futuros análisis de esos archivos

   Desactivar análisis elimina detección futura.

3. Descartar automáticamente todas las futuras alertas de inyección

   Los hallazgos futuros aún requieren evaluación basada en riesgo.

4. Reemplazar el monitoreo de dependencias por el informe de campaña

   Las campañas de código no reemplazan el monitoreo de dependencias.

**Concept:** Remediación como aprendizaje

**Authored coaching hints:**

- ¿Qué conocimientos se transfieren entre hallazgos similares?
- ¿Cómo puede una limpieza puntual reducir futuras incorporaciones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma campanha corrige dezenas de alertas de injeção relacionados. Qual uso adicional fortalece mais diretamente o desenvolvimento seguro?

1. Usar as correções relacionadas para ensinar o padrão inseguro comum **[CORRECT]**

   Remediações relacionadas reforçam conhecimentos reutilizáveis de codificação segura.

2. Desativar futuras análises desses arquivos

   Desativar análise remove detecção futura.

3. Descartar automaticamente todos os futuros alertas de injeção

   Resultados futuros ainda exigem avaliação baseada em risco.

4. Substituir monitoramento de dependências pelo relatório da campanha

   Campanhas de código não substituem monitoramento de dependências.

**Concept:** Remediação como aprendizado

**Authored coaching hints:**

- Que conhecimento pode ser transferido entre resultados semelhantes?
- Como uma limpeza pontual reduz futuras introduções?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-ecosystem-038:877709470329059c1108da627b79ee1a19278a3400d4c990a91c80655fc3a590 -->
## Question 38: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-038`

**Content revision:** `877709470329059c1108da627b79ee1a19278a3400d4c990a91c80655fc3a590`

### English

A project displays a green dependency-review check. Which conclusion is justified?

1. Every application code path is secure

   Dependency checks do not certify application logic.

2. The checked dependency changes passed that check's configured policy **[CORRECT]**

   A passing check is scoped to its inputs and policy.

3. No secret exists anywhere in Git history

   Secret exposure is a separate detection concern.

4. All dependencies will remain safe after future disclosures

   Future vulnerability disclosures can change risk.

**Concept:** Scope of security assurance

**Authored coaching hints:**

- What exactly did the check evaluate?
- Which risks fall outside its inputs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un proyecto muestra una comprobación verde de revisión de dependencias. ¿Qué conclusión está justificada?

1. Todas las rutas de código de la aplicación son seguras

   Las comprobaciones de dependencias no certifican la lógica de la aplicación.

2. Los cambios de dependencias evaluados cumplieron la política configurada de esa comprobación **[CORRECT]**

   Una comprobación aprobada se limita a sus entradas y política.

3. No hay secretos en ningún lugar del historial de Git

   La exposición de secretos es otra cuestión de detección.

4. Todas las dependencias seguirán siendo seguras tras divulgaciones futuras

   Las divulgaciones futuras pueden cambiar el riesgo.

**Concept:** Alcance de las garantías de seguridad

**Authored coaching hints:**

- ¿Qué evaluó exactamente la comprobación?
- ¿Qué riesgos quedan fuera de sus entradas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um projeto exibe uma verificação verde de revisão de dependências. Qual conclusão é justificada?

1. Todos os caminhos de código da aplicação são seguros

   Verificações de dependências não certificam a lógica da aplicação.

2. As mudanças de dependências verificadas passaram na política configurada da verificação **[CORRECT]**

   Uma aprovação se limita às entradas e à política da verificação.

3. Não há segredo em nenhum lugar do histórico do Git

   Exposição de segredos é outra questão de detecção.

4. Todas as dependências continuarão seguras após futuras divulgações

   Divulgações futuras podem mudar o risco.

**Concept:** Escopo da garantia de segurança

**Authored coaching hints:**

- O que exatamente a verificação avaliou?
- Quais riscos ficam fora das suas entradas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-039:5970dddab9ad0e24af710fc57a3003460225800a8852e113232710100f282c4d -->
## Question 39: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-039`

**Content revision:** `5970dddab9ad0e24af710fc57a3003460225800a8852e113232710100f282c4d`

### English

A maintainer wants scheduled non-security update proposals for supported dependencies. Which feature differs from security updates by serving this goal?

1. Secret scanning

   Secret scanning detects credentials.

2. Code scanning

   Code scanning analyzes source weaknesses.

3. Dependabot version updates **[CORRECT]**

   Version updates keep dependencies current according to configuration.

4. Security advisory publication

   Publishing an advisory discloses a vulnerability rather than scheduling refreshes.

**Concept:** Version versus security updates

**Authored coaching hints:**

- Must a vulnerability exist to justify the update?
- What controls routine package maintenance?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora quiere propuestas programadas de actualización no relacionadas con seguridad para dependencias compatibles. ¿Qué función, distinta de las actualizaciones de seguridad, cumple ese objetivo?

1. Análisis de secretos

   El análisis de secretos detecta credenciales.

2. Análisis de código

   El análisis de código analiza debilidades del código fuente.

3. Actualizaciones de versiones de Dependabot **[CORRECT]**

   Las actualizaciones de versiones mantienen dependencias al día según la configuración.

4. Publicación de avisos de seguridad

   Publicar un aviso divulga una vulnerabilidad, no programa renovaciones.

**Concept:** Actualizaciones de versiones frente a seguridad

**Authored coaching hints:**

- ¿Debe existir una vulnerabilidad para justificar la actualización?
- ¿Qué controla el mantenimiento rutinario de paquetes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora quer propostas agendadas de atualização não relacionadas à segurança para dependências compatíveis. Qual recurso difere das atualizações de segurança por atender esse objetivo?

1. Verificação de segredos

   A verificação de segredos detecta credenciais.

2. Varredura de código

   A varredura de código analisa fraquezas no código-fonte.

3. Atualizações de versão do Dependabot **[CORRECT]**

   Atualizações de versão mantêm dependências atuais conforme a configuração.

4. Publicação de comunicado de segurança

   Publicar um comunicado divulga uma vulnerabilidade, em vez de agendar atualizações.

**Concept:** Atualizações de versão versus de segurança

**Authored coaching hints:**

- Precisa existir uma vulnerabilidade para justificar a atualização?
- O que controla a manutenção rotineira de pacotes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates>

<!-- certification-coach-question:ghas-ecosystem-040:b6b6a75178abe497a1f131139209ed842301b756e63cbe6e714f73e2ffdfade2 -->
## Question 40: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-040`

**Content revision:** `b6b6a75178abe497a1f131139209ed842301b756e63cbe6e714f73e2ffdfade2`

### English

An alerting program finds issues but no team owns the remediation queue. What improvement most directly closes the operational gap?

1. Increase scan frequency without assigning work

   More findings do not establish accountability.

2. Add another dashboard with the same counts

   Duplicate visibility does not create ownership.

3. Automatically close every old alert

   Age alone does not make a vulnerability safe.

4. Define owners, priorities, and a verified remediation workflow **[CORRECT]**

   An actionable workflow connects detection to verified risk reduction.

**Concept:** Detection-to-remediation lifecycle

**Authored coaching hints:**

- What must happen after detection?
- Who confirms that risk was actually removed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un programa de alertas encuentra problemas, pero ningún equipo es responsable de la cola de remediación. ¿Qué mejora cierra más directamente esta brecha operativa?

1. Aumentar la frecuencia de análisis sin asignar trabajo

   Más hallazgos no establecen responsabilidad.

2. Agregar otro panel con los mismos recuentos

   Duplicar la visibilidad no crea responsables.

3. Cerrar automáticamente toda alerta antigua

   La antigüedad por sí sola no hace segura una vulnerabilidad.

4. Definir responsables, prioridades y un flujo de remediación verificada **[CORRECT]**

   Un flujo accionable conecta detección con reducción verificada de riesgo.

**Concept:** Ciclo de detección a remediación

**Authored coaching hints:**

- ¿Qué debe ocurrir después de detectar?
- ¿Quién confirma que realmente se eliminó el riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um programa de alertas encontra problemas, mas nenhuma equipe é responsável pela fila de remediação. Qual melhoria fecha mais diretamente essa lacuna operacional?

1. Aumentar a frequência de varredura sem atribuir trabalho

   Mais resultados não estabelecem responsabilidade.

2. Adicionar outro painel com as mesmas contagens

   Duplicar visibilidade não cria responsáveis.

3. Fechar automaticamente todo alerta antigo

   A idade sozinha não torna uma vulnerabilidade segura.

4. Definir responsáveis, prioridades e um workflow de remediação verificada **[CORRECT]**

   Um workflow acionável conecta detecção à redução verificada de risco.

**Concept:** Ciclo de detecção à remediação

**Authored coaching hints:**

- O que precisa acontecer após a detecção?
- Quem confirma que o risco foi realmente removido?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-secrets-001:1c6183196ec7786fb1fe3e343621b086164be7a440519de93781ad5cdbdae4a6 -->
## Question 41: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-001`

**Content revision:** `1c6183196ec7786fb1fe3e343621b086164be7a440519de93781ad5cdbdae4a6`

### English

A production credential appears in a secret-scanning alert. What is the most important immediate remediation?

1. Delete the current file while leaving the credential active

   Copies and history can retain a credential removed from the current file.

2. Revoke or rotate the credential with its issuer **[CORRECT]**

   Issuer-side revocation or rotation prevents use of the exposed credential.

3. Rewrite repository history while leaving the credential active

   History cleanup cannot invalidate copies already obtained.

4. Make the repository private while leaving the credential active

   Changing visibility does not revoke a copied credential.

**Concept:** Credential revocation

**Authored coaching hints:**

- Which system decides whether the credential authenticates?
- What action protects against copies already obtained?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una credencial de producción aparece en una alerta de secretos. ¿Cuál es la remediación inmediata más importante?

1. Eliminar el archivo actual dejando activa la credencial

   Las copias y el historial pueden conservar una credencial eliminada del archivo actual.

2. Revocar o rotar la credencial con su emisor **[CORRECT]**

   La revocación o rotación en el emisor impide usar la credencial expuesta.

3. Reescribir el historial dejando activa la credencial

   Limpiar el historial no invalida copias ya obtenidas.

4. Hacer privado el repositorio dejando activa la credencial

   Cambiar la visibilidad no revoca una credencial copiada.

**Concept:** Revocación de credenciales

**Authored coaching hints:**

- ¿Qué sistema decide si la credencial autentica?
- ¿Qué acción protege contra copias ya obtenidas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma credencial de produção aparece em um alerta de segredos. Qual é a remediação imediata mais importante?

1. Excluir o arquivo atual mantendo a credencial ativa

   Cópias e histórico podem reter uma credencial removida do arquivo atual.

2. Revogar ou rotacionar a credencial com o emissor **[CORRECT]**

   Revogação ou rotação no emissor impede o uso da credencial exposta.

3. Reescrever o histórico mantendo a credencial ativa

   Limpar o histórico não invalida cópias já obtidas.

4. Tornar o repositório privado mantendo a credencial ativa

   Mudar a visibilidade não revoga uma credencial copiada.

**Concept:** Revogação de credenciais

**Authored coaching hints:**

- Qual sistema decide se a credencial autentica?
- Qual ação protege contra cópias já obtidas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-002:c346701e94af213a100328f6970814bcf0daf0967913976ff50b7cffd78ae29c -->
## Question 42: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-002`

**Content revision:** `c346701e94af213a100328f6970814bcf0daf0967913976ff50b7cffd78ae29c`

### English

An old feature branch contains a token removed from the current default branch. What scanning scope is relevant?

1. Only the latest default-branch tree is scanned

   Secret scanning is not limited to the current default-branch tree.

2. Only files changed in the last pull request are scanned

   Its scope extends beyond a single pull request.

3. Secret scanning examines Git history across all repository branches **[CORRECT]**

   History across branches can expose older committed credentials.

4. Only tagged releases are scanned

   Release tagging is not required for detection.

**Concept:** Historical scan scope

**Authored coaching hints:**

- Does deleting current content remove earlier commits?
- Which branches may retain a credential?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una rama antigua contiene un token eliminado de la rama predeterminada actual. ¿Qué alcance de análisis es pertinente?

1. Solo se analiza el árbol más reciente de la rama predeterminada

   El análisis de secretos no se limita al árbol actual de la rama predeterminada.

2. Solo se analizan archivos cambiados en el último pull request

   Su alcance supera un solo pull request.

3. El análisis de secretos examina el historial de Git en todas las ramas del repositorio **[CORRECT]**

   El historial de distintas ramas puede exponer credenciales antiguas confirmadas.

4. Solo se analizan publicaciones etiquetadas

   No se necesita una etiqueta de publicación para detectar.

**Concept:** Alcance del análisis histórico

**Authored coaching hints:**

- ¿Eliminar contenido actual elimina commits anteriores?
- ¿Qué ramas pueden conservar una credencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma branch antiga contém um token removido da branch padrão atual. Qual escopo de verificação é relevante?

1. Só a árvore mais recente da branch padrão é verificada

   A verificação de segredos não se limita à árvore atual da branch padrão.

2. Só arquivos alterados no último pull request são verificados

   Seu escopo vai além de um pull request.

3. A verificação de segredos examina o histórico do Git em todas as branches do repositório **[CORRECT]**

   O histórico nas branches pode expor credenciais antigas commitadas.

4. Só releases com tags são verificadas

   Tags de release não são necessárias para detecção.

**Concept:** Escopo da verificação histórica

**Authored coaching hints:**

- Excluir conteúdo atual remove commits anteriores?
- Quais branches podem reter uma credencial?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-003:864cf8752bf9c7a286daf12649fa9bd252601172515e38e98a2dabc8997bdf24 -->
## Question 43: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-003`

**Content revision:** `864cf8752bf9c7a286daf12649fa9bd252601172515e38e98a2dabc8997bdf24`

### English

A push is blocked because an earlier incoming commit contains a supported secret, even though the final tree no longer has it. Which response addresses the cause without an exception?

1. Remove the secret from the affected incoming commits before retrying **[CORRECT]**

   The incoming history must no longer contain the detected secret.

2. Add another deletion commit after the already clean final tree

   An additional deletion does not remove the earlier commit's credential.

3. Delete the value only from the uncommitted working copy

   Uncommitted edits do not repair the commits being pushed.

4. Retry the unchanged history through a GitHub web file upload

   Changing the entry point does not make introducing a detected secret an appropriate fix.

**Concept:** Remediating a blocked push

**Authored coaching hints:**

- Which revisions does the incoming push contain?
- Does a clean final tree imply that every earlier incoming commit is clean?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se bloquea un push porque un commit entrante anterior contiene un secreto compatible, aunque el árbol final ya no lo tiene. ¿Qué respuesta resuelve la causa sin una excepción?

1. Quitar el secreto de los commits entrantes afectados antes de reintentar **[CORRECT]**

   El historial entrante ya no debe contener el secreto detectado.

2. Agregar otro commit de eliminación después del árbol final ya limpio

   Otra eliminación no quita la credencial del commit anterior.

3. Eliminar el valor solo de la copia de trabajo sin confirmar

   Las ediciones sin confirmar no reparan los commits enviados.

4. Reintentar el historial sin cambios mediante una carga web de archivos de GitHub

   Cambiar el punto de entrada no convierte la introducción del secreto en una corrección adecuada.

**Concept:** Remediar un push bloqueado

**Authored coaching hints:**

- ¿Qué revisiones contiene el push entrante?
- ¿Un árbol final limpio implica que cada commit entrante anterior esté limpio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um push é bloqueado porque um commit anterior de entrada contém um segredo compatível, embora a árvore final já não o tenha. Qual resposta trata a causa sem exceção?

1. Remover o segredo dos commits de entrada afetados antes de tentar novamente **[CORRECT]**

   O histórico de entrada não pode mais conter o segredo detectado.

2. Adicionar outro commit de exclusão após a árvore final já limpa

   Outra exclusão não remove a credencial do commit anterior.

3. Excluir o valor só da cópia de trabalho não commitada

   Edições não commitadas não corrigem os commits enviados.

4. Reenviar o histórico inalterado por upload de arquivo na web do GitHub

   Mudar o ponto de entrada não torna a introdução do segredo uma correção adequada.

**Concept:** Remediação de push bloqueado

**Authored coaching hints:**

- Quais revisões o push de entrada contém?
- Uma árvore final limpa implica que todo commit anterior de entrada está limpo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-004:40233062f5ad04800726d6e6dd1ef0560b5dc2297109aca9432d282d257883fc -->
## Question 44: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-004`

**Content revision:** `40233062f5ad04800726d6e6dd1ef0560b5dc2297109aca9432d282d257883fc`

### English

A supported provider token has validity status unknown. What conclusion is appropriate?

1. It is definitely revoked

   Unknown does not mean revoked.

2. It is definitely active

   Unknown does not confirm activity.

3. It is a false positive

   Validation uncertainty does not establish a false positive.

4. Its validity has not been established; investigate rather than assuming safety **[CORRECT]**

   The status warrants further investigation of the credential and issuer.

**Concept:** Unknown validity interpretation

**Authored coaching hints:**

- What does an inconclusive check prove?
- Could a service limitation affect validation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un token de proveedor compatible tiene estado de validez desconocido. ¿Qué conclusión corresponde?

1. Definitivamente está revocado

   Desconocido no significa revocado.

2. Definitivamente está activo

   Desconocido no confirma actividad.

3. Es un falso positivo

   La incertidumbre de validación no demuestra un falso positivo.

4. No se ha establecido su validez; hay que investigar, no suponer seguridad **[CORRECT]**

   El estado requiere investigar más la credencial y el emisor.

**Concept:** Interpretación de validez desconocida

**Authored coaching hints:**

- ¿Qué demuestra una comprobación inconclusa?
- ¿Una limitación del servicio podría afectar la validación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um token de provedor compatível tem validade desconhecida. Qual conclusão é adequada?

1. Está definitivamente revogado

   Desconhecido não significa revogado.

2. Está definitivamente ativo

   Desconhecido não confirma atividade.

3. É um falso positivo

   Incerteza na validação não estabelece falso positivo.

4. Sua validade não foi estabelecida; investigue em vez de presumir segurança **[CORRECT]**

   O estado exige investigar mais a credencial e o emissor.

**Concept:** Interpretação de validade desconhecida

**Authored coaching hints:**

- O que uma verificação inconclusiva prova?
- Uma limitação do serviço poderia afetar a validação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-secrets-005:37b6c4cf82ad555ff8b3476e476407f63de1122ecff54308ac24dd10a87a41be -->
## Question 45: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-005`

**Content revision:** `37b6c4cf82ad555ff8b3476e476407f63de1122ecff54308ac24dd10a87a41be`

### English

Two real leaked credentials are otherwise similar, but one is confirmed active and one is confirmed inactive. Which should normally receive the most urgent containment attention?

1. The inactive credential because inactivity implies greater current access

   Inactivity reduces immediate authentication risk, though historical investigation may remain necessary.

2. The active credential because it can still grant access **[CORRECT]**

   An active exposed credential poses immediate misuse risk.

3. Always the older alert, regardless of current validity

   Alert age alone should not outweigh confirmed current authentication capability.

4. Neither credential until a confirmed misuse report arrives

   Containment should not wait for evidence that someone exploited a known leak.

**Concept:** Validity-based prioritization

**Authored coaching hints:**

- What can each credential do at present?
- How does containment differ from investigating past use?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos credenciales reales filtradas son similares, pero una está confirmada activa y la otra inactiva. ¿Cuál normalmente requiere contención más urgente?

1. La inactiva, porque la inactividad implica mayor acceso actual

   La inactividad reduce el riesgo inmediato de autenticación, aunque aún puede ser necesaria una investigación histórica.

2. La activa, porque aún puede otorgar acceso **[CORRECT]**

   Una credencial expuesta activa presenta riesgo inmediato de uso indebido.

3. Siempre la alerta más antigua, sin importar la validez actual

   La antigüedad no debe pesar más que la capacidad actual confirmada de autenticar.

4. Ninguna hasta recibir un reporte de uso indebido confirmado

   La contención no debe esperar pruebas de explotación de una filtración conocida.

**Concept:** Priorización según validez

**Authored coaching hints:**

- ¿Qué puede hacer cada credencial actualmente?
- ¿Cómo difiere contener de investigar el uso pasado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Duas credenciais reais vazadas são semelhantes, mas uma está confirmada ativa e a outra inativa. Qual normalmente merece contenção mais urgente?

1. A inativa, porque inatividade implica maior acesso atual

   Inatividade reduz o risco imediato de autenticação, embora investigação histórica ainda possa ser necessária.

2. A ativa, porque ainda pode conceder acesso **[CORRECT]**

   Uma credencial exposta ativa apresenta risco imediato de uso indevido.

3. Sempre o alerta mais antigo, independentemente da validade atual

   A idade do alerta não deve superar a capacidade atual confirmada de autenticar.

4. Nenhuma até chegar um relato confirmado de uso indevido

   A contenção não deve esperar prova de exploração de um vazamento conhecido.

**Concept:** Priorização pela validade

**Authored coaching hints:**

- O que cada credencial pode fazer agora?
- Como conter difere de investigar uso passado?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-secrets-006:0a6388d42a31aadeba89278189bc755eca671422a7e5a51be54a86966fd5a130 -->
## Question 46: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-006`

**Content revision:** `0a6388d42a31aadeba89278189bc755eca671422a7e5a51be54a86966fd5a130`

### English

A security administrator enables automatic validity checks for supported secrets. What external interaction should the organization understand?

1. GitHub publishes each secret in a public advisory

   Validity checks are not public disclosure.

2. GitHub never transmits the credential outside its own systems

   Issuer interaction is part of supported validity checking.

3. GitHub sends the credential to its issuer to test validity through supported APIs **[CORRECT]**

   The issuer's APIs can establish whether the secret remains active.

4. GitHub asks Dependabot to upgrade the token

   Dependabot updates packages, not credentials.

**Concept:** Validity-check data flow

**Authored coaching hints:**

- Who can determine whether a provider credential works?
- Which service owns its authentication state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una administradora habilita comprobaciones automáticas de validez para secretos compatibles. ¿Qué interacción externa debe comprender la organización?

1. GitHub publica cada secreto en un aviso público

   Las comprobaciones de validez no son divulgación pública.

2. GitHub nunca transmite la credencial fuera de sus sistemas

   La interacción con el emisor forma parte de las comprobaciones compatibles.

3. GitHub envía la credencial al emisor para probar su validez mediante API compatibles **[CORRECT]**

   Las API del emisor pueden establecer si el secreto sigue activo.

4. GitHub pide a Dependabot que actualice el token

   Dependabot actualiza paquetes, no credenciales.

**Concept:** Flujo de datos de comprobación de validez

**Authored coaching hints:**

- ¿Quién puede determinar si funciona una credencial de proveedor?
- ¿Qué servicio controla su estado de autenticación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma administradora habilita verificações automáticas de validade de segredos compatíveis. Qual interação externa a organização deve entender?

1. O GitHub publica cada segredo em um comunicado público

   Verificações de validade não são divulgação pública.

2. O GitHub nunca transmite a credencial para fora dos seus sistemas

   Interagir com o emissor faz parte das verificações compatíveis.

3. O GitHub envia a credencial ao emissor para testar a validade por APIs compatíveis **[CORRECT]**

   As APIs do emissor podem estabelecer se o segredo continua ativo.

4. O GitHub pede ao Dependabot que atualize o token

   Dependabot atualiza pacotes, não credenciais.

**Concept:** Fluxo de dados da verificação de validade

**Authored coaching hints:**

- Quem pode determinar se uma credencial de provedor funciona?
- Qual serviço controla seu estado de autenticação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-secrets-007:055b3833be1f085c76fa6d54107fe3f8d29328cc798946a9a13307d4ffff2246 -->
## Question 47: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-007`

**Content revision:** `055b3833be1f085c76fa6d54107fe3f8d29328cc798946a9a13307d4ffff2246`

### English

An organization uses an internal credential format not covered by built-in patterns. What should it configure?

1. A custom secret-scanning pattern matching the format **[CORRECT]**

   Custom patterns extend credential detection to organization-specific formats.

2. A validity-check setting without a detector for the new format

   Validity checks do not define an organization-specific detection regex.

3. An exclusion for every file containing the new credential prefix

   Exclusions suppress detection rather than extend it.

4. A repository description documenting the credential prefix

   Documentation alone does not configure a detector.

**Concept:** Custom credential detection

**Authored coaching hints:**

- What distinguishes these credentials syntactically?
- Which setting defines recognition rather than response or exclusion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización usa un formato interno de credenciales no cubierto por patrones integrados. ¿Qué debe configurar?

1. Un patrón personalizado de análisis de secretos que coincida con el formato **[CORRECT]**

   Los patrones personalizados extienden la detección a formatos propios de la organización.

2. Un ajuste de validez sin detector para el nuevo formato

   Las comprobaciones de validez no definen una expresión de detección organizacional.

3. Una exclusión para todo archivo con el nuevo prefijo de credencial

   Las exclusiones suprimen detección en vez de ampliarla.

4. Una descripción del repositorio que documente el prefijo

   La documentación por sí sola no configura un detector.

**Concept:** Detección de credenciales personalizadas

**Authored coaching hints:**

- ¿Qué distingue sintácticamente estas credenciales?
- ¿Qué ajuste define el reconocimiento y no la respuesta o exclusión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização usa um formato interno de credenciais não coberto por padrões integrados. O que deve configurar?

1. Um padrão personalizado de verificação de segredos que corresponda ao formato **[CORRECT]**

   Padrões personalizados estendem a detecção a formatos específicos da organização.

2. Um ajuste de validade sem detector para o novo formato

   Verificações de validade não definem uma regex organizacional de detecção.

3. Uma exclusão para todo arquivo com o novo prefixo da credencial

   Exclusões suprimem detecção, em vez de ampliá-la.

4. Uma descrição do repositório documentando o prefixo

   Documentação sozinha não configura um detector.

**Concept:** Detecção de credenciais personalizadas

**Authored coaching hints:**

- O que distingue sintaticamente essas credenciais?
- Qual ajuste define reconhecimento, não resposta ou exclusão?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-008:bd3447937425d0417a14ea6d58a98b4cc712ac6712aa2e00dc726585a781b136 -->
## Question 48: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-008`

**Content revision:** `bd3447937425d0417a14ea6d58a98b4cc712ac6712aa2e00dc726585a781b136`

### English

Before publishing a broad custom token pattern, how can an administrator inspect repository matches without creating alerts?

1. Publish the pattern first and then dismiss generated findings

   Publishing creates operational findings before validation.

2. Test one synthetic example and assume it represents repository-wide results

   A single example does not show sampled repository matches.

3. Enable push protection before the required publication step

   Push-protection enablement follows successful testing and publication.

4. Use Save and dry run, then review the sampled matches **[CORRECT]**

   Dry runs test repository matches without creating alerts.

**Concept:** Custom-pattern dry runs

**Authored coaching hints:**

- What environment's matches does the administrator need to inspect?
- Which workflow separates evaluation from alert generation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Antes de publicar un patrón amplio de tokens, ¿cómo puede una administradora inspeccionar coincidencias en repositorios sin crear alertas?

1. Publicar primero el patrón y luego descartar los hallazgos

   Publicar crea hallazgos operativos antes de validar.

2. Probar un ejemplo sintético y suponer que representa todos los resultados

   Un ejemplo no muestra coincidencias muestreadas de repositorios.

3. Habilitar protección de inserciones antes del paso obligatorio de publicación

   Habilitar protección de inserciones sigue a las pruebas exitosas y la publicación.

4. Usar Save and dry run y revisar las coincidencias de muestra **[CORRECT]**

   Las ejecuciones de prueba evalúan coincidencias sin crear alertas.

**Concept:** Ejecuciones de prueba de patrones personalizados

**Authored coaching hints:**

- ¿De qué entorno necesita inspeccionar coincidencias?
- ¿Qué flujo separa evaluación de generación de alertas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Antes de publicar um padrão amplo de tokens, como uma administradora pode inspecionar correspondências em repositórios sem criar alertas?

1. Publicar primeiro e depois descartar os resultados

   Publicar cria resultados operacionais antes de validar.

2. Testar um exemplo sintético e supor que represente todos os resultados

   Um exemplo não mostra correspondências amostradas dos repositórios.

3. Habilitar proteção de push antes da publicação obrigatória

   A habilitação da proteção de push vem após testes bem-sucedidos e publicação.

4. Usar Save and dry run e revisar as correspondências amostradas **[CORRECT]**

   Dry runs testam correspondências sem criar alertas.

**Concept:** Dry runs de padrões personalizados

**Authored coaching hints:**

- As correspondências de qual ambiente precisam ser inspecionadas?
- Qual fluxo separa avaliação de geração de alertas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-009:bc59bc3cb782431cbd3ca94dde7ad8255a50b007a49bc75a0692f39c75376b35 -->
## Question 49: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-009`

**Content revision:** `bc59bc3cb782431cbd3ca94dde7ad8255a50b007a49bc75a0692f39c75376b35`

### English

A custom pattern matches thousands of ordinary order identifiers as well as tokens. What is the best next step?

1. Narrow the pattern using the real credential format and contextual requirements, then dry-run again **[CORRECT]**

   More precise format and context reduce false positives while preserving intended matches.

2. Dismiss all matching files as safe forever

   Blanket dismissal can hide actual credentials.

3. Disable all secret scanning in the organization

   Disabling all scanning removes unrelated protections.

4. Change every match's validity to active

   An administrator cannot establish validity by relabeling arbitrary matches.

**Concept:** Pattern precision tuning

**Authored coaching hints:**

- What syntax separates credentials from identifiers?
- How would you test both positive and negative examples?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un patrón personalizado coincide con miles de identificadores de pedidos comunes y también con tokens. ¿Cuál es el mejor paso siguiente?

1. Acotar el patrón según el formato real y el contexto de las credenciales, y repetir la prueba **[CORRECT]**

   Un formato y contexto más precisos reducen falsos positivos conservando coincidencias previstas.

2. Descartar para siempre como seguros todos los archivos coincidentes

   El descarte general puede ocultar credenciales reales.

3. Desactivar todo el análisis de secretos de la organización

   Desactivar todo el análisis elimina protecciones no relacionadas.

4. Cambiar la validez de toda coincidencia a activa

   Reetiquetar coincidencias arbitrarias no establece su validez.

**Concept:** Ajuste de precisión de patrones

**Authored coaching hints:**

- ¿Qué sintaxis distingue credenciales de identificadores?
- ¿Cómo probarías ejemplos positivos y negativos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um padrão personalizado corresponde a milhares de identificadores comuns de pedidos e também a tokens. Qual é o melhor próximo passo?

1. Restringir o padrão conforme o formato real da credencial e os requisitos de contexto, e repetir o dry run **[CORRECT]**

   Formato e contexto mais precisos reduzem falsos positivos preservando correspondências pretendidas.

2. Descartar todos os arquivos correspondentes como seguros para sempre

   Descarte indiscriminado pode ocultar credenciais reais.

3. Desativar toda verificação de segredos na organização

   Desativar toda verificação remove proteções não relacionadas.

4. Mudar a validade de todas as correspondências para ativa

   Reclassificar correspondências arbitrárias não estabelece validade.

**Concept:** Ajuste de precisão de padrões

**Authored coaching hints:**

- Qual sintaxe separa credenciais de identificadores?
- Como testar exemplos positivos e negativos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-010:8eebf8d6683d292af7c22e963aaabc1f736e0ce81b946ab3b5c531661ed1d35f -->
## Question 50: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-010`

**Content revision:** `8eebf8d6683d292af7c22e963aaabc1f736e0ce81b946ab3b5c531661ed1d35f`

### English

A new custom pattern passed its dry run but has not been published. Why is its push-protection enablement not yet available?

1. All custom patterns are detection-only

   Published custom patterns can support push protection.

2. The pattern must be published after a successful dry run before enabling push protection **[CORRECT]**

   Publication follows testing before the push-protection option becomes available.

3. Only CodeQL patterns support blocking

   Push protection belongs to secret detection, not CodeQL query syntax.

4. The pattern must first match a real production secret

   A production leak is not a prerequisite.

**Concept:** Custom-pattern activation sequence

**Authored coaching hints:**

- Which lifecycle state follows testing?
- Is evaluating a pattern equivalent to activating it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un nuevo patrón personalizado aprobó su ejecución de prueba, pero no se publicó. ¿Por qué aún no está disponible habilitar su protección de inserciones?

1. Todos los patrones personalizados son solo de detección

   Los patrones personalizados publicados pueden admitir protección de inserciones.

2. Tras una prueba exitosa, el patrón debe publicarse antes de habilitar protección de inserciones **[CORRECT]**

   La publicación sigue a las pruebas antes de que esté disponible la opción.

3. Solo los patrones de CodeQL admiten bloqueo

   La protección de inserciones corresponde a detección de secretos, no a sintaxis de consultas CodeQL.

4. Primero debe coincidir con un secreto real de producción

   Una filtración de producción no es requisito.

**Concept:** Secuencia de activación de patrones personalizados

**Authored coaching hints:**

- ¿Qué estado del ciclo sigue a las pruebas?
- ¿Evaluar un patrón equivale a activarlo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um novo padrão personalizado passou no dry run, mas não foi publicado. Por que habilitar sua proteção de push ainda não está disponível?

1. Todos os padrões personalizados são apenas de detecção

   Padrões personalizados publicados podem oferecer proteção de push.

2. O padrão precisa ser publicado após um dry run bem-sucedido antes de habilitar proteção de push **[CORRECT]**

   A publicação sucede os testes antes de a opção ficar disponível.

3. Só padrões do CodeQL permitem bloqueio

   Proteção de push pertence à detecção de segredos, não à sintaxe de consultas do CodeQL.

4. Primeiro precisa corresponder a um segredo real de produção

   Um vazamento de produção não é pré-requisito.

**Concept:** Sequência de ativação de padrões personalizados

**Authored coaching hints:**

- Qual estado do ciclo vem após os testes?
- Avaliar um padrão equivale a ativá-lo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-011:eaf3527af90e4316dadb13c4f5e403c53ab20bcedc8211950912cc180f6ef7d9 -->
## Question 51: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-011`

**Content revision:** `eaf3527af90e4316dadb13c4f5e403c53ab20bcedc8211950912cc180f6ef7d9`

### English

A contributor selects I'll fix it later when bypassing repository push protection. What alert state does this reason produce?

1. No alert is ever created

   Repository-level bypasses create alerts.

2. A closed false-positive alert

   False positive is a different bypass reason.

3. An open secret-scanning alert **[CORRECT]**

   Deferring remediation leaves the alert open.

4. A closed used-in-tests alert

   Used in tests is a different reason with a closed alert.

**Concept:** Deferred-fix bypass lifecycle

**Authored coaching hints:**

- Has remediation been completed?
- How should the tracking state reflect remaining work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un colaborador selecciona I'll fix it later al omitir la protección de inserciones del repositorio. ¿Qué estado de alerta produce?

1. Nunca se crea una alerta

   Las omisiones a nivel de repositorio crean alertas.

2. Una alerta cerrada de falso positivo

   Falso positivo es otra justificación de omisión.

3. Una alerta abierta de análisis de secretos **[CORRECT]**

   Diferir la remediación deja abierta la alerta.

4. Una alerta cerrada de uso en pruebas

   Uso en pruebas es otra justificación, con alerta cerrada.

**Concept:** Ciclo de omisión por corrección diferida

**Authored coaching hints:**

- ¿Se completó la remediación?
- ¿Cómo debe reflejar el estado el trabajo pendiente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um colaborador seleciona I'll fix it later ao ignorar a proteção de push do repositório. Qual estado de alerta esse motivo produz?

1. Nenhum alerta é criado

   Bypasses no repositório criam alertas.

2. Um alerta fechado de falso positivo

   Falso positivo é outro motivo de bypass.

3. Um alerta aberto de verificação de segredos **[CORRECT]**

   Adiar a remediação mantém o alerta aberto.

4. Um alerta fechado de uso em testes

   Uso em testes é outro motivo, com alerta fechado.

**Concept:** Ciclo do bypass por correção adiada

**Authored coaching hints:**

- A remediação foi concluída?
- Como o estado de acompanhamento deve refletir o trabalho restante?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-012:d459c01f13ec66a51853c88b80e60377c74e2a6d55cb5ea006014e58bec7b03a -->
## Question 52: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-012`

**Content revision:** `d459c01f13ec66a51853c88b80e60377c74e2a6d55cb5ea006014e58bec7b03a`

### English

A developer relies on account-level push protection rather than repository-level enablement. Which destination scope is documented for this user protection?

1. Every private and internal repository on every Server deployment

   User push protection is specific to GitHub.com and does not provide universal private or Server coverage.

2. Only repositories owned by the user's employer

   The documented scope is not limited to the user's employer.

3. Every local commit before it leaves the workstation

   Server-side protection does not inspect every offline local commit.

4. Public repositories on GitHub.com **[CORRECT]**

   Account-level user protection stops secret pushes to public repositories on GitHub.com.

**Concept:** User push-protection destination scope

**Authored coaching hints:**

- Which level of protection is enabled?
- How do account settings differ from an organization's repository policy?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador depende de la protección de inserciones de su cuenta y no de la habilitación del repositorio. ¿Qué destinos abarca esta protección de usuario según la documentación?

1. Todos los repositorios privados e internos en cualquier despliegue de Server

   La protección de usuario es específica de GitHub.com y no cubre universalmente repositorios privados o Server.

2. Solo repositorios del empleador del usuario

   El alcance documentado no se limita al empleador.

3. Todos los commits locales antes de salir de la estación

   La protección del servidor no inspecciona cada commit local sin conexión.

4. Repositorios públicos en GitHub.com **[CORRECT]**

   La protección de cuenta detiene pushes con secretos a repositorios públicos en GitHub.com.

**Concept:** Destinos de protección de inserciones de usuario

**Authored coaching hints:**

- ¿Qué nivel de protección está habilitado?
- ¿Cómo difieren los ajustes de cuenta de la política de repositorios de una organización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor depende da proteção de push da conta, não da habilitação no repositório. Qual escopo de destinos é documentado para essa proteção de usuário?

1. Todos os repositórios privados e internos em qualquer implantação Server

   A proteção de usuário é específica do GitHub.com e não cobre universalmente repositórios privados ou Server.

2. Só repositórios do empregador do usuário

   O escopo documentado não se limita ao empregador.

3. Todo commit local antes de sair da estação

   A proteção no servidor não inspeciona todo commit local offline.

4. Repositórios públicos no GitHub.com **[CORRECT]**

   A proteção da conta impede pushes de segredos para repositórios públicos no GitHub.com.

**Concept:** Destinos da proteção de push de usuário

**Authored coaching hints:**

- Qual nível de proteção está habilitado?
- Como ajustes de conta diferem da política de repositórios de uma organização?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-013:208626fe9224bd200450148fb269496fb135b9c545836f01ea9037b5f89cc69b -->
## Question 53: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-013`

**Content revision:** `208626fe9224bd200450148fb269496fb135b9c545836f01ea9037b5f89cc69b`

### English

A company wants non-designated contributors to request approval before bypassing a blocked secret. Which capability fits?

1. Delegated bypass for push protection **[CORRECT]**

   Delegated bypass gives designated reviewers control over requests.

2. Account-level user protection alone

   User protection alone does not implement this organization review flow.

3. Exempting all write-access contributors from push protection

   Exemptions skip protection rather than require approval.

4. Default self-bypass with no designated review requirement

   Unrestricted self-bypass does not provide the requested delegated approval.

**Concept:** Delegated bypass governance

**Authored coaching hints:**

- Who should decide whether an exception is justified?
- Which alternatives skip review rather than govern it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa quiere que colaboradores no designados soliciten aprobación antes de omitir un bloqueo de secretos. ¿Qué capacidad corresponde?

1. Omisión delegada de la protección de inserciones **[CORRECT]**

   La omisión delegada da control de solicitudes a revisores designados.

2. Solo protección de usuario a nivel de cuenta

   La protección de usuario por sí sola no implementa este flujo organizacional.

3. Eximir de la protección a todos los colaboradores con escritura

   Las exenciones saltan la protección en vez de exigir aprobación.

4. Omisión propia predeterminada sin revisión designada

   La omisión propia sin restricciones no proporciona aprobación delegada.

**Concept:** Gobernanza de omisiones delegadas

**Authored coaching hints:**

- ¿Quién debería decidir si se justifica una excepción?
- ¿Qué alternativas evitan la revisión en vez de gobernarla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa quer que colaboradores não designados solicitem aprovação antes de ignorar um bloqueio de segredo. Qual recurso atende?

1. Bypass delegado da proteção de push **[CORRECT]**

   O bypass delegado dá a revisores designados controle das solicitações.

2. Apenas proteção de usuário na conta

   Só a proteção de usuário não implementa esse fluxo organizacional.

3. Isentar da proteção todos os colaboradores com escrita

   Isenções pulam a proteção em vez de exigir aprovação.

4. Bypass próprio padrão sem revisão designada

   Bypass próprio irrestrito não fornece a aprovação delegada solicitada.

**Concept:** Governança de bypass delegado

**Authored coaching hints:**

- Quem deve decidir se uma exceção se justifica?
- Quais alternativas pulam a revisão em vez de governá-la?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-014:499ffd0513ada6fd50f59bb196945d125ccc11438287a46056e611862394fc6a -->
## Question 54: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-014`

**Content revision:** `499ffd0513ada6fd50f59bb196945d125ccc11438287a46056e611862394fc6a`

### English

Which distinction matters when configuring push-protection bypass privileges versus exemptions?

1. Both mean that pushes are never scanned

   The two actor treatments have different effects.

2. Bypass privileges allow bypass and request review; exemptions skip push protection for the actor **[CORRECT]**

   Privileged actors can handle bypasses; exempt actors do not trigger the control.

3. Exemptions require a request on every push

   Exempt actors skip protection rather than requesting each time.

4. Bypass privileges revoke all detected tokens

   Bypass authority does not revoke issuer credentials.

**Concept:** Bypass privileges versus exemptions

**Authored coaching hints:**

- Does the actor encounter a block at all?
- How does skipping a control differ from approving an exception?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué distinción importa al configurar privilegios de omisión frente a exenciones de protección de inserciones?

1. Ambos significan que nunca se analizan los pushes

   Los dos tratamientos de actores tienen efectos distintos.

2. Los privilegios permiten omitir y revisar solicitudes; las exenciones saltan la protección para el actor **[CORRECT]**

   Los actores privilegiados gestionan omisiones; los exentos no activan el control.

3. Las exenciones exigen una solicitud en cada push

   Los actores exentos saltan la protección en vez de pedir cada vez.

4. Los privilegios de omisión revocan todos los tokens detectados

   La autoridad de omisión no revoca credenciales del emisor.

**Concept:** Privilegios de omisión frente a exenciones

**Authored coaching hints:**

- ¿El actor encuentra un bloqueo?
- ¿Cómo difiere saltar un control de aprobar una excepción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual distinção importa ao configurar privilégios de bypass versus isenções da proteção de push?

1. Ambos significam que pushes nunca são verificados

   Os dois tratamentos de atores têm efeitos diferentes.

2. Privilégios permitem bypass e revisão de solicitações; isenções pulam a proteção para o ator **[CORRECT]**

   Atores privilegiados gerenciam bypasses; isentos não acionam o controle.

3. Isenções exigem solicitação em todo push

   Atores isentos pulam a proteção em vez de solicitar a cada vez.

4. Privilégios de bypass revogam todos os tokens detectados

   Autoridade de bypass não revoga credenciais do emissor.

**Concept:** Privilégios de bypass versus isenções

**Authored coaching hints:**

- O ator encontra um bloqueio?
- Como pular um controle difere de aprovar uma exceção?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-015:baf0fd8c3ec8db5e1b1e579aff5143d12bec5cb2d89b9a3f2ccb649fd9f3d7ff -->
## Question 55: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-015`

**Content revision:** `baf0fd8c3ec8db5e1b1e579aff5143d12bec5cb2d89b9a3f2ccb649fd9f3d7ff`

### English

A user bypasses account-level push protection in a public repository that has no repository-level push protection. What should the team avoid assuming?

1. That the user's public push can be inspected for supported secrets

   User push protection does inspect public pushes.

2. That user protection is account-specific

   Account-specific scope is documented.

3. That the bypass necessarily creates a repository secret-scanning alert **[CORRECT]**

   User-only bypass does not generate such an alert unless repository protection is also enabled.

4. That repository protection is configured separately

   Repository-level protection is a separate configuration.

**Concept:** User versus repository bypass alerts

**Authored coaching hints:**

- Which protection level was enabled?
- Are all bypass audit and alert behaviors shared across levels?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un usuario omite la protección de su cuenta en un repositorio público sin protección a nivel de repositorio. ¿Qué no debe suponer el equipo?

1. Que el push público puede inspeccionarse en busca de secretos compatibles

   La protección de usuario sí inspecciona pushes públicos.

2. Que la protección de usuario es específica de la cuenta

   El alcance específico de cuenta está documentado.

3. Que la omisión necesariamente crea una alerta de secretos del repositorio **[CORRECT]**

   La omisión solo de usuario no genera esa alerta salvo que también esté habilitada la protección del repositorio.

4. Que la protección del repositorio se configura por separado

   La protección del repositorio es una configuración separada.

**Concept:** Alertas de omisión de usuario frente a repositorio

**Authored coaching hints:**

- ¿Qué nivel de protección se habilitó?
- ¿Todos los niveles comparten los mismos comportamientos de auditoría y alertas de omisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um usuário ignora a proteção da conta em um repositório público sem proteção de push no repositório. O que a equipe não deve presumir?

1. Que o push público pode ser inspecionado por segredos compatíveis

   A proteção de usuário inspeciona pushes públicos.

2. Que a proteção de usuário é específica da conta

   O escopo específico da conta é documentado.

3. Que o bypass necessariamente cria um alerta de segredos do repositório **[CORRECT]**

   Bypass só do usuário não gera esse alerta, a menos que a proteção do repositório também esteja habilitada.

4. Que a proteção do repositório é configurada separadamente

   A proteção do repositório é uma configuração separada.

**Concept:** Alertas de bypass de usuário versus repositório

**Authored coaching hints:**

- Qual nível de proteção estava habilitado?
- Todos os níveis compartilham os mesmos comportamentos de auditoria e alertas de bypass?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-016:5943ff4f07fa6dd37c8107a3e2b1eac6c08c538ca0e1cee2e15f1286add405b4 -->
## Question 56: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-016`

**Content revision:** `5943ff4f07fa6dd37c8107a3e2b1eac6c08c538ca0e1cee2e15f1286add405b4`

### English

Which activity is covered by push protection beyond a command-line Git push?

1. Reading an existing issue

   Reading issue content is not a content introduction.

2. Downloading a release artifact

   Downloading artifacts is not a repository write.

3. Viewing an already committed file

   Viewing existing content does not introduce a secret.

4. Committing a file through the GitHub web interface **[CORRECT]**

   Push protection covers commits made through the GitHub UI.

**Concept:** Push-protection entry points

**Authored coaching hints:**

- Which operation introduces new repository content?
- Is the transport limited to a local Git client?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué actividad cubre la protección de inserciones además de un push de Git por línea de comandos?

1. Leer una incidencia existente

   Leer una incidencia no introduce contenido.

2. Descargar un artefacto de publicación

   Descargar artefactos no escribe en el repositorio.

3. Ver un archivo ya confirmado

   Ver contenido existente no introduce un secreto.

4. Confirmar un archivo mediante la interfaz web de GitHub **[CORRECT]**

   La protección cubre commits realizados mediante la interfaz de GitHub.

**Concept:** Puntos de entrada de protección de inserciones

**Authored coaching hints:**

- ¿Qué operación introduce contenido nuevo al repositorio?
- ¿El transporte se limita a un cliente Git local?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual atividade a proteção de push cobre além de um push Git na linha de comando?

1. Ler uma issue existente

   Ler conteúdo de issue não introduz conteúdo.

2. Baixar um artefato de release

   Baixar artefatos não é escrever no repositório.

3. Visualizar um arquivo já commitado

   Visualizar conteúdo existente não introduz um segredo.

4. Fazer commit de um arquivo pela interface web do GitHub **[CORRECT]**

   A proteção cobre commits pela interface do GitHub.

**Concept:** Pontos de entrada da proteção de push

**Authored coaching hints:**

- Qual operação introduz conteúdo novo no repositório?
- O transporte se limita a um cliente Git local?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-017:554bc5ce9a5267fa6a2a4fd91c3c40a509e0d8850a1edfbb9827952d4c43ec69 -->
## Question 57: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-017`

**Content revision:** `554bc5ce9a5267fa6a2a4fd91c3c40a509e0d8850a1edfbb9827952d4c43ec69`

### English

A maintainer believes secret scanning cannot find a credential pasted into a pull-request description. What is the accurate response for documented scanning scope?

1. Pull-request titles, descriptions, and comments are included in secret scanning **[CORRECT]**

   Documented secret scanning includes pull-request text surfaces.

2. Only executable source files can contain detectable secrets

   Credentials can appear in non-executable content.

3. Only the final merge commit is scanned

   Scanning extends beyond merge commits.

4. Descriptions are checked only for dependency licenses

   License review does not define secret scanning of descriptions.

**Concept:** Non-code secret exposure

**Authored coaching hints:**

- Where else do developers paste diagnostic information?
- Is a credential less sensitive outside a source file?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora cree que el análisis de secretos no puede detectar una credencial pegada en la descripción de un pull request. ¿Qué respuesta refleja el alcance documentado?

1. El análisis incluye títulos, descripciones y comentarios de pull requests **[CORRECT]**

   El alcance documentado incluye superficies de texto de pull requests.

2. Solo los archivos fuente ejecutables pueden contener secretos detectables

   Las credenciales pueden aparecer en contenido no ejecutable.

3. Solo se analiza el commit final de fusión

   El análisis supera los commits de fusión.

4. Las descripciones solo se revisan por licencias de dependencias

   La revisión de licencias no define el análisis de secretos en descripciones.

**Concept:** Exposición de secretos fuera del código

**Authored coaching hints:**

- ¿Dónde más pegan los desarrolladores información de diagnóstico?
- ¿Una credencial es menos sensible fuera de un archivo fuente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora acredita que a verificação de segredos não encontra uma credencial colada na descrição de um pull request. Qual resposta reflete o escopo documentado?

1. Títulos, descrições e comentários de pull requests são incluídos **[CORRECT]**

   O escopo documentado inclui superfícies de texto de pull requests.

2. Só arquivos-fonte executáveis podem conter segredos detectáveis

   Credenciais podem aparecer em conteúdo não executável.

3. Só o commit final de merge é verificado

   A verificação vai além dos commits de merge.

4. Descrições são verificadas apenas por licenças de dependências

   Revisão de licenças não define a verificação de segredos em descrições.

**Concept:** Exposição de segredos fora do código

**Authored coaching hints:**

- Onde mais desenvolvedores colam informações de diagnóstico?
- Uma credencial é menos sensível fora de um arquivo-fonte?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-018:f62d7ab1acb16c7d6cf113faede3900fa25d0967e3ac20129683acd2da40ea8b -->
## Question 58: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-018`

**Content revision:** `f62d7ab1acb16c7d6cf113faede3900fa25d0967e3ac20129683acd2da40ea8b`

### English

A repository is clean under existing detectors. Why can a new secret-scanning alert appear later without a new commit?

1. Every scan invents replacement tokens

   Scans detect content rather than generate credentials.

2. GitHub periodically rescans when support for new secret types is added **[CORRECT]**

   Newly supported patterns can match existing historical content.

3. The dependency graph changes secret validity

   Dependency inventory does not determine credential validity.

4. Closed pull requests always become open alerts

   Pull-request state does not mechanically create secret alerts.

**Concept:** Rescanning with new detectors

**Authored coaching hints:**

- Can detection capabilities change while code stays constant?
- What happens to historical content when a new pattern is supported?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio está limpio según los detectores existentes. ¿Por qué puede aparecer después una alerta de secretos sin un nuevo commit?

1. Cada análisis inventa tokens de reemplazo

   Los análisis detectan contenido, no generan credenciales.

2. GitHub vuelve a analizar periódicamente al agregar compatibilidad con nuevos tipos de secretos **[CORRECT]**

   Los nuevos patrones compatibles pueden coincidir con contenido histórico existente.

3. El gráfico de dependencias cambia la validez de secretos

   El inventario de dependencias no determina la validez de credenciales.

4. Los pull requests cerrados siempre se convierten en alertas abiertas

   El estado del pull request no crea mecánicamente alertas de secretos.

**Concept:** Nuevo análisis con nuevos detectores

**Authored coaching hints:**

- ¿Puede cambiar la detección sin cambiar el código?
- ¿Qué ocurre con el contenido histórico al admitir un nuevo patrón?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório está limpo segundo os detectores atuais. Por que um alerta de segredos pode aparecer depois sem novo commit?

1. Cada verificação inventa tokens substitutos

   Verificações detectam conteúdo, não geram credenciais.

2. O GitHub verifica novamente periodicamente ao adicionar suporte a novos tipos de segredos **[CORRECT]**

   Novos padrões compatíveis podem corresponder a conteúdo histórico existente.

3. O grafo de dependências muda a validade de segredos

   Inventário de dependências não determina validade de credenciais.

4. Pull requests fechados sempre viram alertas abertos

   O estado do pull request não cria mecanicamente alertas de segredos.

**Concept:** Nova verificação com novos detectores

**Authored coaching hints:**

- A detecção pode mudar com código constante?
- O que acontece com conteúdo histórico quando um novo padrão passa a ser compatível?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-019:fc1abf92aa09482e9240e22e1f5b157f2f423e4aa5509cf82bacf5e4dcba25ab -->
## Question 59: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-019`

**Content revision:** `fc1abf92aa09482e9240e22e1f5b157f2f423e4aa5509cf82bacf5e4dcba25ab`

### English

A scanner detects a private key whose use is not tied to one named provider. Which extension of detection is most relevant?

1. Dependabot grouping

   Grouping changes dependency update pull requests.

2. A license denylist

   License rules do not identify private keys.

3. Generic secret patterns **[CORRECT]**

   Generic patterns cover secret types not specific to one provider.

4. A compiled-language build mode

   Build mode controls code extraction.

**Concept:** Generic versus provider patterns

**Authored coaching hints:**

- Is the credential associated with a specific service?
- What category describes provider-independent secret formats?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un analizador detecta una clave privada cuyo uso no está ligado a un proveedor específico. ¿Qué extensión de detección es más pertinente?

1. Agrupación de Dependabot

   La agrupación cambia pull requests de actualización de dependencias.

2. Una lista de licencias denegadas

   Las reglas de licencias no identifican claves privadas.

3. Patrones genéricos de secretos **[CORRECT]**

   Los patrones genéricos cubren secretos no específicos de un proveedor.

4. Un modo de compilación para lenguajes compilados

   El modo de compilación controla la extracción de código.

**Concept:** Patrones genéricos frente a patrones de proveedores

**Authored coaching hints:**

- ¿La credencial está asociada a un servicio concreto?
- ¿Qué categoría describe formatos independientes del proveedor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um verificador detecta uma chave privada cujo uso não está ligado a um provedor específico. Qual extensão de detecção é mais relevante?

1. Agrupamento do Dependabot

   Agrupamento altera pull requests de atualização de dependências.

2. Uma lista de licenças negadas

   Regras de licenças não identificam chaves privadas.

3. Padrões genéricos de segredos **[CORRECT]**

   Padrões genéricos cobrem tipos de segredo não específicos de um provedor.

4. Um modo de build de linguagem compilada

   O modo de build controla a extração de código.

**Concept:** Padrões genéricos versus de provedores

**Authored coaching hints:**

- A credencial está associada a um serviço específico?
- Qual categoria descreve formatos independentes de provedor?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-020:1750c7991d1b6b9d8b76992b2bf75b748bf21eb26436da3ccee06fc8654d725e -->
## Question 60: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-020`

**Content revision:** `1750c7991d1b6b9d8b76992b2bf75b748bf21eb26436da3ccee06fc8654d725e`

### English

An incident owner has revoked an exposed key and verified replacement deployment. How should they use the secret alert's resolution information?

1. Mark false positive because the key no longer works

   A real leaked key is not retroactively a false positive.

2. Erase the alert before documenting the incident

   Deleting evidence undermines traceability.

3. Leave it open permanently regardless of remediation

   An accurate resolved state reflects completed containment.

4. Record a resolution consistent with the completed revocation **[CORRECT]**

   Resolution should accurately describe remediation performed.

**Concept:** Accurate secret alert closure

**Authored coaching hints:**

- Was the original detection genuine?
- What fact should the resolution reason preserve?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La persona responsable del incidente revocó una clave expuesta y verificó el despliegue del reemplazo. ¿Cómo debe usar la información de resolución de la alerta?

1. Marcar falso positivo porque la clave ya no funciona

   Una clave real filtrada no se vuelve retroactivamente un falso positivo.

2. Borrar la alerta antes de documentar el incidente

   Borrar evidencia perjudica la trazabilidad.

3. Dejarla abierta permanentemente sin importar la remediación

   Un estado resuelto preciso refleja contención completada.

4. Registrar una resolución coherente con la revocación completada **[CORRECT]**

   La resolución debe describir fielmente la remediación realizada.

**Concept:** Cierre preciso de alertas de secretos

**Authored coaching hints:**

- ¿La detección original fue genuina?
- ¿Qué hecho debe preservar el motivo de resolución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A pessoa responsável pelo incidente revogou uma chave exposta e verificou a implantação da substituta. Como deve usar as informações de resolução do alerta?

1. Marcar falso positivo porque a chave não funciona mais

   Uma chave real vazada não se torna retroativamente falso positivo.

2. Apagar o alerta antes de documentar o incidente

   Apagar evidências prejudica a rastreabilidade.

3. Deixá-lo aberto para sempre independentemente da remediação

   Um estado resolvido preciso reflete contenção concluída.

4. Registrar uma resolução coerente com a revogação concluída **[CORRECT]**

   A resolução deve descrever fielmente a remediação realizada.

**Concept:** Fechamento preciso de alertas de segredos

**Authored coaching hints:**

- A detecção original foi genuína?
- Qual fato o motivo da resolução deve preservar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-021:f5ba624c552146c6347b525ca2a60c487c3637743db509b177481a60e845de74 -->
## Question 61: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-021`

**Content revision:** `f5ba624c552146c6347b525ca2a60c487c3637743db509b177481a60e845de74`

### English

A team discovers the same credential in several historical locations. Which action most directly contains all copies' authentication risk?

1. Invalidate the credential at the issuing service **[CORRECT]**

   Issuer-side invalidation affects every copy of the same credential.

2. Delete only the newest matching file

   Other commits and copies can remain.

3. Dismiss all but one location as duplicates

   Reducing duplicate tracking does not stop authentication.

4. Move the repository to another organization

   Repository ownership does not invalidate external credentials.

**Concept:** Multi-location credential containment

**Authored coaching hints:**

- Are the locations different credentials or copies of one?
- Which action acts on identity rather than storage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo descubre la misma credencial en varias ubicaciones históricas. ¿Qué acción contiene más directamente el riesgo de autenticación de todas las copias?

1. Invalidar la credencial en el servicio emisor **[CORRECT]**

   La invalidación en el emisor afecta todas las copias de la misma credencial.

2. Eliminar solo el archivo coincidente más reciente

   Pueden persistir otros commits y copias.

3. Descartar todas las ubicaciones salvo una como duplicadas

   Reducir seguimiento duplicado no impide autenticar.

4. Mover el repositorio a otra organización

   La propiedad del repositorio no invalida credenciales externas.

**Concept:** Contención de credenciales en múltiples ubicaciones

**Authored coaching hints:**

- ¿Son credenciales distintas o copias de una?
- ¿Qué acción actúa sobre la identidad y no el almacenamiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe descobre a mesma credencial em vários locais históricos. Qual ação contém mais diretamente o risco de autenticação de todas as cópias?

1. Invalidar a credencial no serviço emissor **[CORRECT]**

   Invalidar no emissor afeta todas as cópias da mesma credencial.

2. Excluir só o arquivo correspondente mais recente

   Outros commits e cópias podem permanecer.

3. Descartar todos os locais menos um como duplicatas

   Reduzir acompanhamento duplicado não impede autenticação.

4. Mover o repositório para outra organização

   A propriedade do repositório não invalida credenciais externas.

**Concept:** Contenção de credenciais em vários locais

**Authored coaching hints:**

- São credenciais diferentes ou cópias de uma?
- Qual ação atua sobre identidade, não armazenamento?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-022:75e37a8bb0d9077836a7c6ab1326ff3409b7bbd7602f2f1bd88e726d255a5e6e -->
## Question 62: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-022`

**Content revision:** `75e37a8bb0d9077836a7c6ab1326ff3409b7bbd7602f2f1bd88e726d255a5e6e`

### English

A custom token detector should apply to many repositories in one organization. Where should the administrator define the shared pattern?

1. In each package's lockfile

   Lockfiles describe dependencies, not organization detectors.

2. At the organization level, with secret scanning enabled for target repositories **[CORRECT]**

   Organization custom patterns provide shared detection across eligible enabled repositories.

3. In a repository release note

   Release notes do not configure scanning.

4. As a dependency-review severity threshold

   Severity thresholds govern dependency policy.

**Concept:** Organization custom patterns

**Authored coaching hints:**

- What is the intended management scope?
- Do target repositories need the underlying scanner enabled?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un detector de tokens personalizados debe aplicarse a muchos repositorios de una organización. ¿Dónde se define el patrón compartido?

1. En el archivo de bloqueo de cada paquete

   Los archivos de bloqueo describen dependencias, no detectores organizacionales.

2. A nivel de organización, con análisis de secretos habilitado en los repositorios objetivo **[CORRECT]**

   Los patrones de organización comparten detección en repositorios elegibles y habilitados.

3. En una nota de publicación

   Las notas de publicación no configuran análisis.

4. Como umbral de gravedad de revisión de dependencias

   Los umbrales de gravedad gobiernan políticas de dependencias.

**Concept:** Patrones personalizados organizacionales

**Authored coaching hints:**

- ¿Cuál es el alcance de gestión previsto?
- ¿Los repositorios objetivo necesitan habilitar el analizador subyacente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um detector personalizado de tokens deve valer para muitos repositórios de uma organização. Onde definir o padrão compartilhado?

1. No arquivo de lock de cada pacote

   Arquivos de lock descrevem dependências, não detectores organizacionais.

2. No nível da organização, com verificação de segredos habilitada nos repositórios-alvo **[CORRECT]**

   Padrões da organização compartilham detecção entre repositórios elegíveis e habilitados.

3. Em uma nota de release

   Notas de release não configuram verificações.

4. Como limiar de severidade da revisão de dependências

   Limiares de severidade governam políticas de dependências.

**Concept:** Padrões personalizados da organização

**Authored coaching hints:**

- Qual é o escopo de gestão pretendido?
- Os repositórios-alvo precisam do verificador subjacente habilitado?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-023:9ea2350c737767cd0fc835388d23f9853f0c9c45b8ecb39c0414a6afc9efea47 -->
## Question 63: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-023`

**Content revision:** `9ea2350c737767cd0fc835388d23f9853f0c9c45b8ecb39c0414a6afc9efea47`

### English

A detector matches a token-like value in a test fixture. Which fact must be established before treating it as harmless test data?

1. The fixture directory is named tests

   A path name does not determine credential privileges.

2. The pull request has a test label

   A label does not invalidate a real token.

3. The value cannot grant real access in the relevant environment **[CORRECT]**

   Actual authentication capability determines whether the value poses credential-access risk.

4. The file is excluded from compilation

   Noncompiled files can still expose usable credentials.

**Concept:** Test-data risk assessment

**Authored coaching hints:**

- Does intended use determine actual capability?
- Which environment would accept this value?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un detector coincide con un valor parecido a un token en datos de prueba. ¿Qué hecho debe establecerse antes de considerarlo inofensivo?

1. El directorio de datos se llama tests

   El nombre de la ruta no determina privilegios de credenciales.

2. El pull request tiene una etiqueta de pruebas

   Una etiqueta no invalida un token real.

3. El valor no puede otorgar acceso real en el entorno pertinente **[CORRECT]**

   La capacidad real de autenticación determina si hay riesgo de acceso por credenciales.

4. El archivo está excluido de la compilación

   Los archivos no compilados también pueden exponer credenciales utilizables.

**Concept:** Evaluación de riesgo de datos de prueba

**Authored coaching hints:**

- ¿El uso previsto determina la capacidad real?
- ¿Qué entorno aceptaría este valor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um detector encontra um valor semelhante a token em dados de teste. Qual fato precisa ser estabelecido antes de considerá-lo inofensivo?

1. O diretório se chama tests

   O nome do caminho não determina privilégios da credencial.

2. O pull request tem um rótulo de teste

   Um rótulo não invalida um token real.

3. O valor não pode conceder acesso real no ambiente relevante **[CORRECT]**

   A capacidade real de autenticação determina o risco de acesso por credenciais.

4. O arquivo está excluído da compilação

   Arquivos não compilados também podem expor credenciais utilizáveis.

**Concept:** Avaliação de risco de dados de teste

**Authored coaching hints:**

- O uso pretendido determina a capacidade real?
- Qual ambiente aceitaria esse valor?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-024:bede05629c0f725ae5088a184906e6c2cc11c291a5da04e3ab5147ad5275b057 -->
## Question 64: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-024`

**Content revision:** `bede05629c0f725ae5088a184906e6c2cc11c291a5da04e3ab5147ad5275b057`

### English

A maintainer wants extended metadata checks for supported credentials. Which prerequisite should they verify?

1. Every alert is dismissed

   Dismissal is not a prerequisite for metadata checks.

2. CodeQL advanced setup is enabled

   CodeQL setup is independent of secret metadata.

3. A version-update schedule exists

   Dependency update schedules are unrelated.

4. Validity checks are enabled **[CORRECT]**

   Extended metadata checks require validity checks to be enabled.

**Concept:** Extended metadata prerequisite

**Authored coaching hints:**

- Which secret-checking capability underlies additional issuer context?
- Is this related to source-code analysis or credential validation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora quiere comprobaciones de metadatos extendidos para credenciales compatibles. ¿Qué requisito previo debe verificar?

1. Todas las alertas están descartadas

   Descartar no es requisito de las comprobaciones de metadatos.

2. La configuración avanzada de CodeQL está habilitada

   La configuración de CodeQL es independiente de los metadatos de secretos.

3. Existe un calendario de actualizaciones de versiones

   Los calendarios de dependencias no guardan relación.

4. Las comprobaciones de validez están habilitadas **[CORRECT]**

   Las comprobaciones de metadatos extendidos requieren habilitar las de validez.

**Concept:** Requisito de metadatos extendidos

**Authored coaching hints:**

- ¿Qué capacidad de comprobación de secretos sustenta el contexto adicional del emisor?
- ¿Es análisis de código fuente o validación de credenciales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora quer verificações de metadados estendidos para credenciais compatíveis. Qual pré-requisito deve verificar?

1. Todos os alertas estão descartados

   Descarte não é pré-requisito para verificar metadados.

2. A configuração avançada do CodeQL está habilitada

   A configuração do CodeQL é independente dos metadados de segredos.

3. Existe um agendamento de atualizações de versão

   Agendamentos de dependências não têm relação.

4. As verificações de validade estão habilitadas **[CORRECT]**

   Verificações de metadados estendidos exigem as de validade habilitadas.

**Concept:** Pré-requisito de metadados estendidos

**Authored coaching hints:**

- Qual verificação de segredos sustenta contexto adicional do emissor?
- Isso se relaciona à análise de código-fonte ou à validação de credenciais?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-secrets-025:c0c8d5b0ecc95c189222fc33fcade45772140dae633c34de3bb57ed24d55f4ed -->
## Question 65: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-025`

**Content revision:** `c0c8d5b0ecc95c189222fc33fcade45772140dae633c34de3bb57ed24d55f4ed`

### English

A blocked push is bypassed under repository-level protection. Which governance evidence does GitHub record in addition to the alert?

1. A bypass event in the audit log **[CORRECT]**

   Repository bypasses produce audit events.

2. An automatically published CVE

   Bypassing a token block does not publish a CVE.

3. A dependency license override

   License policy is unrelated to the secret exception.

4. An automatic production deployment rollback

   GitHub does not inherently control production rollback for the bypass.

**Concept:** Push-bypass auditability

**Authored coaching hints:**

- How can administrators later review exceptions?
- Which record captures a security-relevant action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se omite un push bloqueado bajo protección a nivel de repositorio. ¿Qué evidencia de gobernanza registra GitHub además de la alerta?

1. Un evento de omisión en el registro de auditoría **[CORRECT]**

   Las omisiones de repositorio producen eventos de auditoría.

2. Un CVE publicado automáticamente

   Omitir un bloqueo de token no publica un CVE.

3. Una excepción de licencia de dependencia

   La política de licencias no se relaciona con esta excepción.

4. Una reversión automática del despliegue de producción

   GitHub no controla por sí mismo una reversión de producción por la omisión.

**Concept:** Auditabilidad de omisiones de push

**Authored coaching hints:**

- ¿Cómo pueden revisar las excepciones posteriormente los administradores?
- ¿Qué registro captura una acción relevante para seguridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um push bloqueado é liberado por bypass sob proteção no repositório. Qual evidência de governança o GitHub registra além do alerta?

1. Um evento de bypass no log de auditoria **[CORRECT]**

   Bypasses do repositório produzem eventos de auditoria.

2. Um CVE publicado automaticamente

   Ignorar um bloqueio de token não publica um CVE.

3. Uma exceção de licença de dependência

   A política de licenças não se relaciona à exceção de segredo.

4. Um rollback automático da implantação de produção

   O GitHub não controla por si só rollback de produção pelo bypass.

**Concept:** Auditabilidade de bypass de push

**Authored coaching hints:**

- Como administradores podem revisar exceções posteriormente?
- Qual registro captura uma ação relevante à segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-026:ba4b19dc969a053f043b142086831788c8a77e46d3e51fc9e38fe15eed293c6a -->
## Question 66: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-026`

**Content revision:** `ba4b19dc969a053f043b142086831788c8a77e46d3e51fc9e38fe15eed293c6a`

### English

A contributor's push contains a detector match that is demonstrably not a credential. Under an allowed bypass workflow, which reason best preserves accurate records?

1. I'll fix it later

   Deferral implies real work remains rather than a mistaken match.

2. It's a false positive **[CORRECT]**

   False positive accurately records a noncredential match.

3. The package is outdated

   Package age is not a secret bypass reason.

4. The token is active

   Active is a validation state and contradicts the scenario.

**Concept:** False-positive bypass classification

**Authored coaching hints:**

- Was a real secret exposed?
- Which description explains the detector's mistake rather than postponing a fix?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El push de un colaborador contiene una coincidencia que demostradamente no es una credencial. En un flujo de omisión permitido, ¿qué motivo preserva mejor registros precisos?

1. I'll fix it later

   Diferir implica trabajo real pendiente, no una coincidencia errónea.

2. It's a false positive **[CORRECT]**

   Falso positivo registra correctamente una coincidencia que no es credencial.

3. El paquete está desactualizado

   La antigüedad del paquete no es un motivo de omisión de secretos.

4. El token está activo

   Activo es un estado de validación que contradice el escenario.

**Concept:** Clasificación de omisión por falso positivo

**Authored coaching hints:**

- ¿Se expuso un secreto real?
- ¿Qué descripción explica el error del detector en vez de posponer una corrección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O push de um colaborador contém uma correspondência comprovadamente não credencial. Em um fluxo de bypass permitido, qual motivo preserva registros precisos?

1. I'll fix it later

   Adiamento implica trabalho real pendente, não correspondência equivocada.

2. It's a false positive **[CORRECT]**

   Falso positivo registra corretamente uma correspondência não credencial.

3. O pacote está desatualizado

   Idade do pacote não é motivo de bypass de segredo.

4. O token está ativo

   Ativo é um estado de validação e contradiz o cenário.

**Concept:** Classificação de bypass por falso positivo

**Authored coaching hints:**

- Um segredo real foi exposto?
- Qual descrição explica o erro do detector em vez de adiar uma correção?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-027:7f5fcc9bc481a8fdf3df45a722843ee101a685849432748f0c1a6ce4ff2c832c -->
## Question 67: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-027`

**Content revision:** `7f5fcc9bc481a8fdf3df45a722843ee101a685849432748f0c1a6ce4ff2c832c`

### English

A security policy excludes a directory from secret alert generation because it contains fixtures. What trade-off should reviewers evaluate?

1. Exclusion automatically revokes tokens there

   Detection exclusions do not revoke credentials.

2. Excluded content cannot contain credentials

   Fixture locations can still contain real secrets.

3. Real leaks in excluded content may become less visible **[CORRECT]**

   Reducing scanning scope can conceal genuine exposures.

4. Exclusion makes the directory read-only

   Scanning configuration does not determine file write permissions.

**Concept:** Detection exclusion risk

**Authored coaching hints:**

- What evidence supports the exclusion?
- Could future contributors put different content in the same location?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política excluye un directorio de la generación de alertas de secretos porque contiene datos de prueba. ¿Qué contrapartida deben evaluar los revisores?

1. La exclusión revoca automáticamente sus tokens

   Las exclusiones de detección no revocan credenciales.

2. El contenido excluido no puede contener credenciales

   Las ubicaciones de prueba pueden contener secretos reales.

3. Las filtraciones reales en contenido excluido pueden perder visibilidad **[CORRECT]**

   Reducir el alcance puede ocultar exposiciones genuinas.

4. La exclusión vuelve el directorio de solo lectura

   La configuración de análisis no determina permisos de escritura.

**Concept:** Riesgo de exclusiones de detección

**Authored coaching hints:**

- ¿Qué evidencia respalda la exclusión?
- ¿Futuros colaboradores podrían poner contenido distinto en la misma ubicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política exclui um diretório da geração de alertas de segredos por conter dados de teste. Qual contrapartida os revisores devem avaliar?

1. A exclusão revoga automaticamente seus tokens

   Exclusões de detecção não revogam credenciais.

2. Conteúdo excluído não pode conter credenciais

   Locais de teste ainda podem conter segredos reais.

3. Vazamentos reais no conteúdo excluído podem perder visibilidade **[CORRECT]**

   Reduzir o escopo pode ocultar exposições genuínas.

4. A exclusão torna o diretório somente leitura

   A configuração de verificação não determina permissões de escrita.

**Concept:** Risco de exclusões de detecção

**Authored coaching hints:**

- Qual evidência sustenta a exclusão?
- Futuros colaboradores poderiam colocar outro conteúdo no mesmo local?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-028:42505bc02fddf8a9c70eee9d8df98332be290d8787bb6327cf5db35e3686fff9 -->
## Question 68: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-028`

**Content revision:** `42505bc02fddf8a9c70eee9d8df98332be290d8787bb6327cf5db35e3686fff9`

### English

Why should developers avoid pasting full detected token values into a broad incident discussion?

1. Tokens become invalid when quoted

   Quoting does not revoke a token.

2. Discussion text is never retained

   Discussion text may persist.

3. Secret values cannot be copied

   Readers can copy visible credential values.

4. It creates additional copies and exposes credentials to more readers **[CORRECT]**

   Minimizing propagation reduces further exposure during response.

**Concept:** Safe secret incident collaboration

**Authored coaching hints:**

- Who can read the destination?
- What information is necessary to coordinate without reproducing the credential?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué evitar pegar valores completos de tokens detectados en una discusión amplia de incidentes?

1. Los tokens se invalidan al citarlos

   Citar no revoca un token.

2. El texto de discusiones nunca se conserva

   El texto de discusiones puede persistir.

3. Los valores secretos no se pueden copiar

   Los lectores pueden copiar valores de credenciales visibles.

4. Crea copias adicionales y expone credenciales a más lectores **[CORRECT]**

   Minimizar la propagación reduce más exposición durante la respuesta.

**Concept:** Colaboración segura en incidentes de secretos

**Authored coaching hints:**

- ¿Quién puede leer el destino?
- ¿Qué información permite coordinar sin reproducir la credencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que evitar colar valores completos de tokens detectados em uma discussão ampla de incidente?

1. Tokens se invalidam quando citados

   Citar não revoga um token.

2. Textos de discussão nunca são retidos

   Textos de discussão podem persistir.

3. Valores secretos não podem ser copiados

   Leitores podem copiar credenciais visíveis.

4. Isso cria cópias adicionais e expõe credenciais a mais leitores **[CORRECT]**

   Minimizar propagação reduz exposição adicional durante a resposta.

**Concept:** Colaboração segura em incidentes de segredos

**Authored coaching hints:**

- Quem pode ler o destino?
- Que informação permite coordenar sem reproduzir a credencial?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-029:06a6f15c4313788dcf6acfe91f457136d69aa2f512b7dab8d11e2ce783ddcfa6 -->
## Question 69: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-029`

**Content revision:** `06a6f15c4313788dcf6acfe91f457136d69aa2f512b7dab8d11e2ce783ddcfa6`

### English

A token alert is marked inactive after a check. Which follow-up remains reasonable?

1. Investigate the exposure and whether unauthorized use occurred before the token became inactive **[CORRECT]**

   Current inactivity does not rule out earlier misuse.

2. Assume the token never worked

   Inactive describes current validity, not all historical states.

3. Republish the token as approved documentation

   Republishing secrets is unnecessary and can propagate sensitive information.

4. Re-enable it to remove the inactive label

   Reactivation would increase risk rather than remediate exposure.

**Concept:** Historical exposure investigation

**Authored coaching hints:**

- Does a present-time check describe the entire incident timeline?
- What could have happened before the credential stopped working?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras una comprobación, una alerta de token se marca inactiva. ¿Qué seguimiento sigue siendo razonable?

1. Investigar la exposición y posibles usos no autorizados antes de quedar inactivo **[CORRECT]**

   La inactividad actual no descarta usos indebidos anteriores.

2. Suponer que el token nunca funcionó

   Inactivo describe la validez actual, no todos los estados históricos.

3. Republicar el token como documentación aprobada

   Republicar secretos es innecesario y propaga información sensible.

4. Reactivarlo para quitar la etiqueta de inactivo

   Reactivar aumentaría el riesgo en vez de remediar la exposición.

**Concept:** Investigación histórica de exposición

**Authored coaching hints:**

- ¿Una comprobación actual describe todo el incidente?
- ¿Qué pudo ocurrir antes de que dejara de funcionar la credencial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta de token é marcado inativo após uma verificação. Qual acompanhamento ainda é razoável?

1. Investigar a exposição e possível uso não autorizado antes de ficar inativo **[CORRECT]**

   A inatividade atual não descarta uso indevido anterior.

2. Supor que o token nunca funcionou

   Inativo descreve a validade atual, não todos os estados históricos.

3. Republicar o token como documentação aprovada

   Republicar segredos é desnecessário e propaga informações sensíveis.

4. Reativá-lo para remover o rótulo de inativo

   Reativar aumentaria o risco, em vez de remediar a exposição.

**Concept:** Investigação histórica de exposição

**Authored coaching hints:**

- Uma verificação atual descreve toda a linha do tempo do incidente?
- O que pode ter ocorrido antes de a credencial parar de funcionar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-secrets-030:46f21d81638c42b9142f7420d5bba73c3e3f4bc6a6aa9fe7b3671f51c76c1da9 -->
## Question 70: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-030`

**Content revision:** `46f21d81638c42b9142f7420d5bba73c3e3f4bc6a6aa9fe7b3671f51c76c1da9`

### English

Which statement accurately describes the benefit of enabling push protection after historical secrets have been discovered?

1. It invalidates every token already in history

   Enabling detection does not revoke issuer credentials.

2. It helps prevent future introductions but existing exposures still need remediation **[CORRECT]**

   Prevention and cleanup of existing leaks are separate tasks.

3. It replaces all issuer-side credential controls

   Credential lifecycle controls remain necessary.

4. It makes prior clones forget historical commits

   Remote protection cannot erase other copies.

**Concept:** Protection enablement boundaries

**Authored coaching hints:**

- Can a new control undo past distribution?
- Which work concerns old exposure versus future changes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación describe correctamente el beneficio de habilitar protección de inserciones tras descubrir secretos históricos?

1. Invalida todos los tokens que ya están en el historial

   Habilitar detección no revoca credenciales del emisor.

2. Ayuda a prevenir nuevas incorporaciones, pero las exposiciones existentes aún requieren remediación **[CORRECT]**

   Prevenir y limpiar filtraciones existentes son tareas separadas.

3. Reemplaza todos los controles de credenciales del emisor

   Los controles del ciclo de vida de credenciales siguen siendo necesarios.

4. Hace que los clones anteriores olviden los commits históricos

   La protección remota no puede borrar otras copias.

**Concept:** Límites de habilitar protección

**Authored coaching hints:**

- ¿Un control nuevo puede deshacer la distribución pasada?
- ¿Qué trabajo corresponde a exposición antigua y cuál a cambios futuros?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação descreve corretamente o benefício de habilitar proteção de push após descobrir segredos históricos?

1. Invalida todos os tokens já no histórico

   Habilitar detecção não revoga credenciais do emissor.

2. Ajuda a prevenir novas introduções, mas exposições existentes ainda precisam de remediação **[CORRECT]**

   Prevenção e limpeza de vazamentos existentes são tarefas separadas.

3. Substitui todos os controles de credenciais do emissor

   Controles do ciclo de vida das credenciais continuam necessários.

4. Faz clones anteriores esquecerem commits históricos

   Proteção remota não apaga outras cópias.

**Concept:** Limites da habilitação da proteção

**Authored coaching hints:**

- Um novo controle desfaz distribuição passada?
- Qual trabalho trata exposição antiga versus mudanças futuras?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-031:23bd55ad2fcb48afaeafe1986a668dc6c48869ca8d3d1b8ecd214b420b2d897f -->
## Question 71: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-031`

**Content revision:** `23bd55ad2fcb48afaeafe1986a668dc6c48869ca8d3d1b8ecd214b420b2d897f`

### English

A dry run finds no matches for a custom pattern, even though approved synthetic examples should match. What should happen before publication?

1. Assume all historical content is safe

   A broken detector can produce an empty result.

2. Enable bypass exemptions for all users

   Exemptions do not repair matching logic.

3. Test and correct the pattern with expected matching and nonmatching samples **[CORRECT]**

   Representative tests establish whether the detector recognizes the intended format.

4. Create a dependency security update

   Package updates do not validate credential regexes.

**Concept:** Pattern recall validation

**Authored coaching hints:**

- Can an empty result indicate a detector problem?
- Which known examples would distinguish no exposure from no recognition?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una ejecución de prueba no encuentra coincidencias de un patrón, aunque ejemplos sintéticos aprobados deberían coincidir. ¿Qué debe ocurrir antes de publicarlo?

1. Suponer seguro todo el contenido histórico

   Un detector defectuoso puede producir un resultado vacío.

2. Habilitar exenciones de omisión para todos

   Las exenciones no reparan la lógica de coincidencia.

3. Probar y corregir el patrón con muestras que deben y no deben coincidir **[CORRECT]**

   Las pruebas representativas establecen si reconoce el formato previsto.

4. Crear una actualización de seguridad de dependencias

   Las actualizaciones de paquetes no validan expresiones de credenciales.

**Concept:** Validación de sensibilidad del patrón

**Authored coaching hints:**

- ¿Un resultado vacío puede indicar un problema del detector?
- ¿Qué ejemplos conocidos distinguen ausencia de exposición de ausencia de reconocimiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um dry run não encontra correspondências para um padrão, embora exemplos sintéticos aprovados devessem corresponder. O que fazer antes de publicar?

1. Supor que todo conteúdo histórico é seguro

   Um detector defeituoso pode produzir resultado vazio.

2. Habilitar isenções de bypass para todos

   Isenções não corrigem a lógica de correspondência.

3. Testar e corrigir o padrão com amostras que devem e não devem corresponder **[CORRECT]**

   Testes representativos estabelecem se o detector reconhece o formato pretendido.

4. Criar uma atualização de segurança de dependência

   Atualizações de pacotes não validam regexes de credenciais.

**Concept:** Validação da sensibilidade do padrão

**Authored coaching hints:**

- Um resultado vazio pode indicar problema no detector?
- Quais exemplos conhecidos distinguem falta de exposição de falta de reconhecimento?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-032:86d71155fd69e5dd0bc0b7e3d15f79120d1ac71e029a61c28836f400164da278 -->
## Question 72: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-032`

**Content revision:** `86d71155fd69e5dd0bc0b7e3d15f79120d1ac71e029a61c28836f400164da278`

### English

A team plans to rely on push protection to detect every possible password format. Which caveat matters?

1. Push protection checks only package versions

   Package version checking is a different control.

2. Every random string is automatically blocked

   Blocking all random strings would not describe documented behavior.

3. Custom patterns are forbidden

   Organizations can configure custom patterns.

4. Detection depends on supported and configured patterns, so it is not a universal secret oracle **[CORRECT]**

   Pattern coverage and configuration bound what can be detected.

**Concept:** Push-protection detection limits

**Authored coaching hints:**

- How does the system distinguish credentials from ordinary text?
- What happens to a format no detector recognizes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo planea confiar en la protección de inserciones para detectar cualquier formato posible de contraseña. ¿Qué salvedad importa?

1. Solo comprueba versiones de paquetes

   Comprobar versiones es otro control.

2. Bloquea automáticamente toda cadena aleatoria

   Bloquear todas las cadenas aleatorias no describe el comportamiento documentado.

3. Los patrones personalizados están prohibidos

   Las organizaciones pueden configurar patrones personalizados.

4. La detección depende de patrones compatibles y configurados; no es un oráculo universal de secretos **[CORRECT]**

   La cobertura y configuración de patrones limitan lo detectable.

**Concept:** Límites de detección de protección de inserciones

**Authored coaching hints:**

- ¿Cómo distingue el sistema credenciales de texto común?
- ¿Qué ocurre con un formato que ningún detector reconoce?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe pretende usar proteção de push para detectar todo formato possível de senha. Qual ressalva importa?

1. Só verifica versões de pacotes

   Verificar versões de pacotes é outro controle.

2. Toda string aleatória é bloqueada automaticamente

   Bloquear todas as strings aleatórias não descreve o comportamento documentado.

3. Padrões personalizados são proibidos

   Organizações podem configurar padrões personalizados.

4. A detecção depende de padrões compatíveis e configurados; não é um oráculo universal de segredos **[CORRECT]**

   Cobertura e configuração de padrões limitam o que é detectável.

**Concept:** Limites de detecção da proteção de push

**Authored coaching hints:**

- Como o sistema distingue credenciais de texto comum?
- O que ocorre com um formato que nenhum detector reconhece?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-033:f9755fc60ac8d862d6215aba94ef8560c5577aad3313496dba9aa67924cde16a -->
## Question 73: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-033`

**Content revision:** `f9755fc60ac8d862d6215aba94ef8560c5577aad3313496dba9aa67924cde16a`

### English

An organization wants a shared detector for internal tokens but also wants findings from built-in provider patterns. What configuration best fits?

1. Add the custom pattern while retaining relevant built-in scanning **[CORRECT]**

   Custom detection can extend existing coverage.

2. Replace all built-in patterns with the internal regex

   Replacing unrelated coverage would omit provider secrets.

3. Disable provider alerts whenever custom patterns exist

   Custom patterns do not require disabling provider detection.

4. Convert provider tokens into package names

   Package names are unrelated to credential matching.

**Concept:** Extending secret detection coverage

**Authored coaching hints:**

- Does adding a new format require removing existing formats?
- What risks would a replacement strategy leave uncovered?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere un detector compartido de tokens internos y conservar hallazgos de patrones integrados de proveedores. ¿Qué configuración conviene?

1. Agregar el patrón personalizado conservando el análisis integrado pertinente **[CORRECT]**

   La detección personalizada puede ampliar la cobertura existente.

2. Reemplazar todos los patrones integrados por la expresión interna

   Reemplazar cobertura no relacionada omitiría secretos de proveedores.

3. Desactivar alertas de proveedores cuando haya patrones personalizados

   Los patrones personalizados no exigen desactivar detección de proveedores.

4. Convertir tokens de proveedores en nombres de paquetes

   Los nombres de paquetes no se relacionan con coincidencias de credenciales.

**Concept:** Ampliación de cobertura de secretos

**Authored coaching hints:**

- ¿Agregar un formato exige quitar los existentes?
- ¿Qué riesgos dejaría sin cubrir una estrategia de reemplazo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer um detector compartilhado de tokens internos e também resultados de padrões integrados de provedores. Qual configuração atende melhor?

1. Adicionar o padrão personalizado mantendo a verificação integrada relevante **[CORRECT]**

   Detecção personalizada pode ampliar a cobertura existente.

2. Substituir todos os padrões integrados pela regex interna

   Substituir cobertura não relacionada omitiria segredos de provedores.

3. Desativar alertas de provedores quando houver padrões personalizados

   Padrões personalizados não exigem desativar detecção de provedores.

4. Converter tokens de provedores em nomes de pacotes

   Nomes de pacotes não se relacionam à correspondência de credenciais.

**Concept:** Ampliação da cobertura de segredos

**Authored coaching hints:**

- Adicionar um formato exige remover os existentes?
- Quais riscos uma estratégia de substituição deixaria descobertos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-034:4a1d3f6958bb364f2372963b005336b843f2337a933fa2537322164a8b4bf109 -->
## Question 74: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-034`

**Content revision:** `4a1d3f6958bb364f2372963b005336b843f2337a933fa2537322164a8b4bf109`

### English

A repository API write attempts to introduce a recognized secret. Does using the REST API inherently avoid push protection?

1. Yes; only Git clients are checked

   Coverage extends beyond Git clients.

2. No; documented protection includes REST API requests that introduce repository content **[CORRECT]**

   REST-based repository writes are among documented covered paths.

3. Yes; only release tags are checked

   Protection is not limited to tags.

4. No; because Dependabot validates API tokens in all requests

   The relevant mechanism is push protection, not Dependabot.

**Concept:** API content-write protection

**Authored coaching hints:**

- Is the concern the client or the content being introduced?
- Which product owns secret-introduction prevention?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una escritura por API intenta introducir un secreto reconocido en un repositorio. ¿Usar REST API evita por sí mismo la protección de inserciones?

1. Sí; solo se comprueban clientes Git

   La cobertura supera los clientes Git.

2. No; la protección documentada incluye solicitudes REST API que introducen contenido en repositorios **[CORRECT]**

   Las escrituras por REST son vías cubiertas documentadas.

3. Sí; solo se comprueban etiquetas de publicación

   La protección no se limita a etiquetas.

4. No; porque Dependabot valida tokens de API en todas las solicitudes

   El mecanismo pertinente es protección de inserciones, no Dependabot.

**Concept:** Protección de escrituras de contenido por API

**Authored coaching hints:**

- ¿Importa el cliente o el contenido introducido?
- ¿Qué producto previene la introducción de secretos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma escrita por API tenta introduzir um segredo reconhecido no repositório. Usar REST API evita por si só a proteção de push?

1. Sim; só clientes Git são verificados

   A cobertura vai além de clientes Git.

2. Não; a proteção documentada inclui requisições REST API que introduzem conteúdo no repositório **[CORRECT]**

   Escritas de repositório via REST estão entre os caminhos cobertos documentados.

3. Sim; só tags de release são verificadas

   A proteção não se limita a tags.

4. Não; porque Dependabot valida tokens de API em todas as requisições

   O mecanismo relevante é proteção de push, não Dependabot.

**Concept:** Proteção de escritas de conteúdo por API

**Authored coaching hints:**

- A preocupação é o cliente ou o conteúdo introduzido?
- Qual produto previne introduzir segredos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-035:552f4afef9e92949eb46ad5457531b2ecf57a1f16d099c0171d55fa04358b6d4 -->
## Question 75: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-035`

**Content revision:** `552f4afef9e92949eb46ad5457531b2ecf57a1f16d099c0171d55fa04358b6d4`

### English

A team wants designated reviewers to evaluate urgent secret bypass requests without granting them full organization ownership. What should it configure?

1. A public branch with no scanning

   Removing protection does not provide controlled review.

2. A dependency-review exclusion

   Dependency exclusions do not govern secret bypasses.

3. Appropriate delegated bypass privileges **[CORRECT]**

   Delegated bypass privileges support targeted exception authority.

4. Organization-owner status for every contributor

   Broad ownership exceeds the requested responsibility.

**Concept:** Least-privilege bypass review

**Authored coaching hints:**

- What exact decision must these reviewers make?
- How much authority is necessary for that decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que revisores designados evalúen solicitudes urgentes de omisión de secretos sin darles propiedad total de la organización. ¿Qué debe configurar?

1. Una rama pública sin análisis

   Quitar protección no ofrece revisión controlada.

2. Una exclusión de revisión de dependencias

   Las exclusiones de dependencias no gobiernan omisiones de secretos.

3. Privilegios adecuados de omisión delegada **[CORRECT]**

   Los privilegios delegados dan autoridad específica para excepciones.

4. El estado de propietario para todos los colaboradores

   La propiedad amplia excede la responsabilidad solicitada.

**Concept:** Revisión de omisiones con privilegio mínimo

**Authored coaching hints:**

- ¿Qué decisión exacta deben tomar estos revisores?
- ¿Cuánta autoridad requiere esa decisión?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer revisores designados avaliando solicitações urgentes de bypass de segredos sem dar a eles propriedade total da organização. O que configurar?

1. Uma branch pública sem verificação

   Remover proteção não oferece revisão controlada.

2. Uma exclusão de revisão de dependências

   Exclusões de dependências não governam bypasses de segredos.

3. Privilégios adequados de bypass delegado **[CORRECT]**

   Privilégios delegados permitem autoridade específica para exceções.

4. Função de proprietário para todo colaborador

   Propriedade ampla excede a responsabilidade solicitada.

**Concept:** Revisão de bypass com privilégio mínimo

**Authored coaching hints:**

- Qual decisão exata esses revisores precisam tomar?
- Quanta autoridade é necessária para essa decisão?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-secrets-036:5856478bb13ab13c0fadcbffbe664a79cf684155936495a17feda2b78d76a2b3 -->
## Question 76: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-036`

**Content revision:** `5856478bb13ab13c0fadcbffbe664a79cf684155936495a17feda2b78d76a2b3`

### English

Which observation justifies classifying a custom-pattern match as a false positive rather than merely a low-priority real leak?

1. The secret belongs to a staging service

   Staging credentials can still be genuine secrets.

2. The token grants read-only access

   Read-only credentials can still expose data.

3. The file is seldom edited

   File edit frequency does not determine secret validity.

4. The matched value is an order number and cannot authenticate **[CORRECT]**

   A noncredential match is a detector false positive.

**Concept:** False positive versus lower impact

**Authored coaching hints:**

- Is the detector wrong about the type of value?
- How does limited privilege differ from no authentication capability?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué observación justifica clasificar una coincidencia de patrón personalizado como falso positivo y no como filtración real de baja prioridad?

1. El secreto pertenece a un servicio de staging

   Las credenciales de staging pueden ser secretos genuinos.

2. El token otorga acceso de solo lectura

   Las credenciales de solo lectura pueden exponer datos.

3. El archivo se edita pocas veces

   La frecuencia de edición no determina la validez.

4. El valor es un número de pedido y no puede autenticar **[CORRECT]**

   Una coincidencia que no es credencial es un falso positivo.

**Concept:** Falso positivo frente a menor impacto

**Authored coaching hints:**

- ¿El detector se equivoca sobre el tipo de valor?
- ¿Cómo difiere un privilegio limitado de no poder autenticar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual observação justifica classificar uma correspondência de padrão personalizado como falso positivo, e não apenas vazamento real de baixa prioridade?

1. O segredo pertence a um serviço de staging

   Credenciais de staging podem ser segredos genuínos.

2. O token concede acesso somente leitura

   Credenciais somente leitura ainda podem expor dados.

3. O arquivo raramente é editado

   Frequência de edição não determina validade.

4. O valor é um número de pedido e não pode autenticar **[CORRECT]**

   Uma correspondência não credencial é falso positivo do detector.

**Concept:** Falso positivo versus menor impacto

**Authored coaching hints:**

- O detector está errado sobre o tipo do valor?
- Como privilégio limitado difere de nenhuma capacidade de autenticação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-037:558913850f027eb151c5380dc5a4e3e9034c62d62ec4b1cd62862b30952376ff -->
## Question 77: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-037`

**Content revision:** `558913850f027eb151c5380dc5a4e3e9034c62d62ec4b1cd62862b30952376ff`

### English

A security lead asks how to reduce repeated internal-token leaks after revoking one. Which follow-up is preventive?

1. Enable a tested custom detector with push protection for that credential format **[CORRECT]**

   Format-aware push protection can stop subsequent introductions.

2. Close the incident without changing controls

   Closing tracking alone does not reduce recurrence.

3. Use the old token as an example in every README

   Replicating the value creates additional secret copies.

4. Dismiss future matches from the same team

   Blanket team dismissal can hide real leaks.

**Concept:** Preventing secret recurrence

**Authored coaching hints:**

- What mechanism can act before the next exposure?
- Can the token's recognizable structure support a control?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras revocar un token interno, un líder quiere reducir filtraciones repetidas. ¿Qué seguimiento es preventivo?

1. Habilitar un detector personalizado probado con protección de inserciones para ese formato **[CORRECT]**

   La protección que reconoce el formato puede impedir nuevas incorporaciones.

2. Cerrar el incidente sin cambiar controles

   Cerrar el seguimiento no reduce la recurrencia.

3. Usar el token antiguo como ejemplo en cada README

   Replicar el valor crea más copias del secreto.

4. Descartar futuras coincidencias del mismo equipo

   Descartar por equipo indiscriminadamente puede ocultar filtraciones reales.

**Concept:** Prevención de recurrencia de secretos

**Authored coaching hints:**

- ¿Qué mecanismo puede actuar antes de la próxima exposición?
- ¿La estructura reconocible del token puede sustentar un control?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após revogar um token interno, um líder quer reduzir vazamentos recorrentes. Qual acompanhamento é preventivo?

1. Habilitar um detector personalizado testado com proteção de push para esse formato **[CORRECT]**

   Proteção que reconhece o formato pode impedir novas introduções.

2. Fechar o incidente sem mudar controles

   Fechar o acompanhamento não reduz a recorrência.

3. Usar o token antigo como exemplo em todo README

   Replicar o valor cria mais cópias do segredo.

4. Descartar futuras correspondências da mesma equipe

   Descarte indiscriminado por equipe pode ocultar vazamentos reais.

**Concept:** Prevenção de recorrência de segredos

**Authored coaching hints:**

- Qual mecanismo atua antes da próxima exposição?
- A estrutura reconhecível do token pode sustentar um controle?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:ghas-secrets-038:19e754f8dd2f16c848347728cca93dbb44bedf8200026632771e09dc556ade4e -->
## Question 78: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-038`

**Content revision:** `19e754f8dd2f16c848347728cca93dbb44bedf8200026632771e09dc556ade4e`

### English

What is the primary reason to configure a secret-scanning alert recipient who can coordinate with the credential owner?

1. Recipients automatically become token issuers

   Receiving an alert does not make a person the issuer.

2. Detection is useful only if someone can carry out containment **[CORRECT]**

   Routing to an actionable owner connects detection with response.

3. Notifications revoke all detected credentials

   Notification delivery is not credential revocation.

4. Recipient settings change the secret's permissions

   Notification configuration does not change token permissions.

**Concept:** Actionable secret notifications

**Authored coaching hints:**

- Who can arrange issuer-side changes?
- What action should follow receipt of an alert?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué configurar principalmente un destinatario de alertas de secretos que pueda coordinar con el propietario de la credencial?

1. Los destinatarios se vuelven automáticamente emisores de tokens

   Recibir una alerta no convierte a alguien en emisor.

2. La detección solo es útil si alguien puede ejecutar la contención **[CORRECT]**

   Dirigirla a un responsable que pueda actuar conecta detección y respuesta.

3. Las notificaciones revocan todas las credenciales detectadas

   Entregar una notificación no revoca credenciales.

4. Los ajustes de destinatario cambian los permisos del secreto

   La configuración de notificaciones no cambia permisos del token.

**Concept:** Notificaciones de secretos accionables

**Authored coaching hints:**

- ¿Quién puede coordinar cambios en el emisor?
- ¿Qué acción debería seguir a recibir una alerta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a principal razão para definir um destinatário de alertas de segredos capaz de coordenar com o dono da credencial?

1. Destinatários viram emissores de tokens automaticamente

   Receber um alerta não torna alguém emissor.

2. A detecção só é útil se alguém puder executar a contenção **[CORRECT]**

   Encaminhar a um responsável capaz de agir conecta detecção e resposta.

3. Notificações revogam todas as credenciais detectadas

   Entregar notificação não revoga credenciais.

4. Ajustes de destinatário mudam as permissões do segredo

   Configurar notificações não muda permissões de tokens.

**Concept:** Notificações de segredos acionáveis

**Authored coaching hints:**

- Quem consegue coordenar mudanças no emissor?
- Qual ação deve seguir o recebimento do alerta?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-039:93868d67a380598da5832e49f91a2c1f6f19642f57a922ac032150c30a3eea36 -->
## Question 79: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-039`

**Content revision:** `93868d67a380598da5832e49f91a2c1f6f19642f57a922ac032150c30a3eea36`

### English

An attacker might have copied a real token from a public commit before it was removed. Which evidence best demonstrates containment of future authentication with that token?

1. The pull request was closed

   Closing a pull request does not invalidate credentials.

2. The README no longer includes the value

   Current text does not determine the validity of copied credentials.

3. The issuer confirms the token is revoked **[CORRECT]**

   Issuer-side revocation prevents future authentication with that token.

4. The alert notification was read

   Reading a notification does not contain access.

**Concept:** Verifying credential containment

**Authored coaching hints:**

- What can a copied token still do?
- Which authority can stop its use regardless of location?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un atacante pudo copiar un token real de un commit público antes de eliminarlo. ¿Qué evidencia demuestra mejor contención de futuras autenticaciones con él?

1. Se cerró el pull request

   Cerrar un pull request no invalida credenciales.

2. El README ya no incluye el valor

   El texto actual no determina la validez de credenciales copiadas.

3. El emisor confirma que el token está revocado **[CORRECT]**

   La revocación en el emisor impide futuras autenticaciones con ese token.

4. Se leyó la notificación de alerta

   Leer una notificación no contiene el acceso.

**Concept:** Verificación de contención de credenciales

**Authored coaching hints:**

- ¿Qué puede hacer todavía un token copiado?
- ¿Qué autoridad puede detener su uso sin importar su ubicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um atacante pode ter copiado um token real de um commit público antes da remoção. Qual evidência demonstra melhor contenção de futuras autenticações com ele?

1. O pull request foi fechado

   Fechar um pull request não invalida credenciais.

2. O README não inclui mais o valor

   O texto atual não determina a validade de cópias.

3. O emissor confirma que o token foi revogado **[CORRECT]**

   Revogar no emissor impede futuras autenticações com esse token.

4. A notificação do alerta foi lida

   Ler uma notificação não contém o acesso.

**Concept:** Verificação da contenção de credenciais

**Authored coaching hints:**

- O que um token copiado ainda pode fazer?
- Qual autoridade pode impedir seu uso em qualquer local?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-secrets-040:62d3f27fb42ebd82fa68b309bf9257b355d1aaf550c58e6658d36d65b4b85152 -->
## Question 80: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-040`

**Content revision:** `62d3f27fb42ebd82fa68b309bf9257b355d1aaf550c58e6658d36d65b4b85152`

### English

An administrator sees many secret alerts after first enabling scanning on an old repository. What is the best interpretation?

1. All secrets were necessarily introduced that day

   Detection time can differ from introduction time.

2. Enabling scanning generated real credentials

   Scanning does not generate credentials.

3. The alerts must all be false positives

   Age does not establish false-positive status.

4. Historical scanning can reveal exposures that predate enablement **[CORRECT]**

   Newly enabled analysis can discover old content.

**Concept:** Detection time versus exposure time

**Authored coaching hints:**

- When was the credential committed?
- When did the detector first inspect it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una administradora ve muchas alertas de secretos al habilitar por primera vez el análisis de un repositorio antiguo. ¿Cuál es la mejor interpretación?

1. Todos los secretos necesariamente se introdujeron ese día

   La fecha de detección puede diferir de la introducción.

2. Habilitar el análisis generó credenciales reales

   El análisis no genera credenciales.

3. Todas las alertas deben ser falsos positivos

   La antigüedad no establece un falso positivo.

4. El análisis histórico puede revelar exposiciones anteriores a la habilitación **[CORRECT]**

   El análisis recién habilitado puede descubrir contenido antiguo.

**Concept:** Momento de detección frente a exposición

**Authored coaching hints:**

- ¿Cuándo se confirmó la credencial?
- ¿Cuándo la inspeccionó por primera vez el detector?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma administradora vê muitos alertas de segredos ao habilitar pela primeira vez a verificação de um repositório antigo. Qual é a melhor interpretação?

1. Todos os segredos necessariamente foram introduzidos naquele dia

   O momento da detecção pode diferir da introdução.

2. Habilitar a verificação gerou credenciais reais

   A verificação não gera credenciais.

3. Todos os alertas devem ser falsos positivos

   A idade não estabelece falso positivo.

4. A verificação histórica pode revelar exposições anteriores à habilitação **[CORRECT]**

   A análise recém-habilitada pode descobrir conteúdo antigo.

**Concept:** Momento da detecção versus exposição

**Authored coaching hints:**

- Quando a credencial foi commitada?
- Quando o detector a inspecionou pela primeira vez?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-supply-001:476ffcf02c7bb73bd851dceab51afd32ac3e3c933e8f334973b784d38bb885fe -->
## Question 81: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-001`

**Content revision:** `476ffcf02c7bb73bd851dceab51afd32ac3e3c933e8f334973b784d38bb885fe`

### English

A package appears only through a parent library. How should a maintainer identify why it is in the project?

1. Inspect the dependency graph's transitive paths **[CORRECT]**

   Transitive paths show the chain introducing the package.

2. Search the secret alert list

   Secret alerts do not explain dependency relationships.

3. Change the repository visibility

   Visibility does not reveal the dependency chain.

4. Disable all indirect dependency detection

   Disabling detection removes useful evidence.

**Concept:** Tracing indirect dependencies

**Authored coaching hints:**

- Which package introduced the component?
- Where is the relationship between dependencies represented?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un paquete aparece únicamente a través de una biblioteca padre. ¿Cómo identificar por qué está en el proyecto?

1. Inspeccionar las rutas transitivas del gráfico de dependencias **[CORRECT]**

   Las rutas transitivas muestran la cadena que introduce el paquete.

2. Buscar en las alertas de secretos

   Las alertas de secretos no explican relaciones de dependencias.

3. Cambiar la visibilidad del repositorio

   La visibilidad no revela la cadena.

4. Desactivar toda detección de dependencias indirectas

   Desactivar detección elimina evidencia útil.

**Concept:** Rastreo de dependencias indirectas

**Authored coaching hints:**

- ¿Qué paquete introdujo el componente?
- ¿Dónde se representa la relación entre dependencias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pacote aparece apenas por uma biblioteca pai. Como identificar por que está no projeto?

1. Inspecionar caminhos transitivos no grafo de dependências **[CORRECT]**

   Caminhos transitivos mostram a cadeia que introduziu o pacote.

2. Pesquisar a lista de alertas de segredos

   Alertas de segredos não explicam relações de dependências.

3. Mudar a visibilidade do repositório

   Visibilidade não revela a cadeia.

4. Desativar toda detecção de dependências indiretas

   Desativar detecção remove evidências úteis.

**Concept:** Rastreamento de dependências indiretas

**Authored coaching hints:**

- Qual pacote introduziu o componente?
- Onde a relação entre dependências é representada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-supply-002:b87c3c593747ffed97913f9bd73c7b7f19fa11d2489962d2d2bbd5e1741ffa11 -->
## Question 82: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-002`

**Content revision:** `b87c3c593747ffed97913f9bd73c7b7f19fa11d2489962d2d2bbd5e1741ffa11`

### English

A compliance reviewer requests the dependency graph's built-in SBOM export. Which format should they expect?

1. SARIF for code findings

   SARIF is an analysis-results format.

2. SPDX describing software components **[CORRECT]**

   The graph's native SBOM export uses SPDX.

3. A Git patch containing secret alerts

   Secret alerts are not a software component inventory.

4. A CodeQL database

   CodeQL databases represent code for analysis.

**Concept:** Native SBOM export format

**Authored coaching hints:**

- Is the artifact an inventory or an analysis result?
- Which standard describes software components and licensing?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una revisión de cumplimiento solicita la exportación SBOM integrada del gráfico de dependencias. ¿Qué formato debe esperar?

1. SARIF para hallazgos de código

   SARIF es un formato de resultados de análisis.

2. SPDX que describe componentes de software **[CORRECT]**

   La exportación SBOM nativa del gráfico usa SPDX.

3. Un parche Git con alertas de secretos

   Las alertas de secretos no son un inventario de componentes.

4. Una base de datos de CodeQL

   Las bases de CodeQL representan código para analizarlo.

**Concept:** Formato nativo de exportación SBOM

**Authored coaching hints:**

- ¿El artefacto es inventario o resultado de análisis?
- ¿Qué estándar describe componentes y licencias de software?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma revisão de conformidade solicita a exportação SBOM integrada do grafo de dependências. Qual formato esperar?

1. SARIF para resultados de código

   SARIF é formato de resultados de análise.

2. SPDX descrevendo componentes de software **[CORRECT]**

   A exportação SBOM nativa do grafo usa SPDX.

3. Um patch Git com alertas de segredos

   Alertas de segredos não são inventário de componentes.

4. Um banco de dados CodeQL

   Bancos CodeQL representam código para análise.

**Concept:** Formato nativo de exportação SBOM

**Authored coaching hints:**

- O artefato é inventário ou resultado de análise?
- Qual padrão descreve componentes de software e licenças?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom>

<!-- certification-coach-question:ghas-supply-003:4b17c7bb0ce84d5bc79d0c2cf6acfd5403402809d1aecef89c1e58dfafe70c35 -->
## Question 83: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-003`

**Content revision:** `4b17c7bb0ce84d5bc79d0c2cf6acfd5403402809d1aecef89c1e58dfafe70c35`

### English

A build resolves dependencies that GitHub cannot discover from checked-in manifest files alone. What should the team add?

1. A custom secret pattern

   Secret patterns do not record package inventories.

2. A manual CodeQL language name

   Language selection does not submit resolved packages.

3. Dependency submission from the build **[CORRECT]**

   Build dependency snapshots can supplement manifest-derived data.

4. A branch rename

   Branch names do not supply dependency information.

**Concept:** Supplemental dependency snapshots

**Authored coaching hints:**

- Where are the missing versions actually known?
- How could build results reach the dependency graph?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una compilación resuelve dependencias que GitHub no descubre solo a partir de manifiestos confirmados. ¿Qué debe agregar el equipo?

1. Un patrón personalizado de secretos

   Los patrones de secretos no registran inventarios de paquetes.

2. Un nombre manual de lenguaje de CodeQL

   Seleccionar lenguaje no envía paquetes resueltos.

3. Envío de dependencias desde la compilación **[CORRECT]**

   Las instantáneas de dependencias de compilación complementan los datos de manifiestos.

4. Un cambio de nombre de rama

   Los nombres de ramas no aportan datos de dependencias.

**Concept:** Instantáneas complementarias de dependencias

**Authored coaching hints:**

- ¿Dónde se conocen realmente las versiones faltantes?
- ¿Cómo podrían llegar los resultados de compilación al gráfico?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma compilação resolve dependências que o GitHub não descobre só pelos manifestos commitados. O que adicionar?

1. Um padrão personalizado de segredos

   Padrões de segredos não registram inventários de pacotes.

2. Um nome manual de linguagem do CodeQL

   Selecionar linguagem não envia pacotes resolvidos.

3. Envio de dependências a partir da compilação **[CORRECT]**

   Retratos de dependências da compilação complementam dados dos manifestos.

4. Uma renomeação de branch

   Nomes de branches não fornecem dados de dependências.

**Concept:** Retratos complementares de dependências

**Authored coaching hints:**

- Onde as versões ausentes são realmente conhecidas?
- Como os resultados da compilação chegariam ao grafo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-supply-004:c82ebff2012a66b3b9e6e4e87f4ebd831cea3cc1b62389791cf6a326e3ffa8b2 -->
## Question 84: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-004`

**Content revision:** `c82ebff2012a66b3b9e6e4e87f4ebd831cea3cc1b62389791cf6a326e3ffa8b2`

### English

A pull request upgrades one direct package, and its lockfile changes several nested packages. What does dependency review help assess?

1. Only the top-level package's display name

   Review is not limited to a direct package name.

2. Only newly added source files

   Dependency review concerns package changes.

3. Whether the author has signed in recently

   Login activity is not the dependency diff.

4. Security-relevant changes to direct and indirect dependencies **[CORRECT]**

   Lockfile changes can reveal indirect dependency updates and vulnerabilities.

**Concept:** Lockfile change review

**Authored coaching hints:**

- What information is recorded in a lockfile?
- Can a direct upgrade change more than one installed component?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un pull request actualiza un paquete directo y su archivo de bloqueo cambia varios paquetes anidados. ¿Qué ayuda a evaluar la revisión de dependencias?

1. Solo el nombre visible del paquete principal

   La revisión no se limita al nombre del paquete directo.

2. Solo archivos fuente nuevos

   La revisión de dependencias trata cambios de paquetes.

3. Si el autor inició sesión recientemente

   El inicio de sesión no es la diferencia de dependencias.

4. Cambios relevantes para seguridad en dependencias directas e indirectas **[CORRECT]**

   Los cambios del archivo de bloqueo pueden revelar actualizaciones y vulnerabilidades indirectas.

**Concept:** Revisión de cambios de archivos de bloqueo

**Authored coaching hints:**

- ¿Qué información registra un archivo de bloqueo?
- ¿Una actualización directa puede cambiar varios componentes instalados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pull request atualiza um pacote direto, e seu arquivo de lock muda vários pacotes aninhados. O que a revisão de dependências ajuda a avaliar?

1. Só o nome de exibição do pacote principal

   A revisão não se limita ao nome do pacote direto.

2. Só novos arquivos-fonte

   A revisão de dependências trata de alterações de pacotes.

3. Se o autor fez login recentemente

   Atividade de login não é a diferença de dependências.

4. Mudanças relevantes à segurança em dependências diretas e indiretas **[CORRECT]**

   Mudanças no lock podem revelar atualizações e vulnerabilidades indiretas.

**Concept:** Revisão de mudanças em arquivos de lock

**Authored coaching hints:**

- Que informação um arquivo de lock registra?
- Uma atualização direta pode mudar vários componentes instalados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-005:8b0ab2a17bb3cc52b359d20c111fc388837576fa415d527760a5eea9cac07345 -->
## Question 85: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-005`

**Content revision:** `8b0ab2a17bb3cc52b359d20c111fc388837576fa415d527760a5eea9cac07345`

### English

A dependency-review workflow reports a vulnerable addition, but maintainers can still merge. Which configuration completes the merge gate?

1. Require the dependency-review check through applicable merge rules **[CORRECT]**

   A required check connects a failing result to merge prevention.

2. Add a release label to the workflow

   Labels do not make a check mandatory.

3. Enable secret-scanning validity checks

   Credential validity does not govern dependency checks.

4. Move the lockfile into documentation

   Moving lockfiles can reduce visibility rather than enforce review.

**Concept:** Required dependency-review checks

**Authored coaching hints:**

- Who interprets the failed status when deciding merge eligibility?
- Is running a check the same as requiring it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo de revisión de dependencias reporta una incorporación vulnerable, pero aún se puede fusionar. ¿Qué configuración completa el control de fusión?

1. Exigir la comprobación de revisión mediante las reglas de fusión aplicables **[CORRECT]**

   Una comprobación obligatoria conecta el resultado fallido con impedir la fusión.

2. Agregar una etiqueta de publicación al flujo

   Las etiquetas no hacen obligatoria una comprobación.

3. Habilitar comprobaciones de validez de secretos

   La validez de credenciales no gobierna comprobaciones de dependencias.

4. Mover el archivo de bloqueo a documentación

   Mover archivos de bloqueo puede reducir visibilidad, no exigir revisión.

**Concept:** Comprobaciones obligatorias de revisión de dependencias

**Authored coaching hints:**

- ¿Quién interpreta el estado fallido al decidir si se puede fusionar?
- ¿Ejecutar una comprobación equivale a exigirla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow de revisão relata uma dependência vulnerável adicionada, mas mantenedores ainda podem fazer merge. Qual configuração completa o bloqueio?

1. Exigir a verificação de revisão pelas regras de merge aplicáveis **[CORRECT]**

   Uma verificação obrigatória conecta falha à prevenção do merge.

2. Adicionar um rótulo de release ao workflow

   Rótulos não tornam uma verificação obrigatória.

3. Habilitar verificações de validade de segredos

   Validade de credenciais não governa verificações de dependências.

4. Mover o arquivo de lock para documentação

   Mover arquivos de lock pode reduzir visibilidade, não impor revisão.

**Concept:** Verificações obrigatórias de revisão de dependências

**Authored coaching hints:**

- Quem interpreta a falha ao decidir elegibilidade para merge?
- Executar uma verificação é o mesmo que exigi-la?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-006:6781f6b7f6cf3fe84966c576a319f79f92431da64adfb1850e2b50d93aa45f13 -->
## Question 86: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-006`

**Content revision:** `6781f6b7f6cf3fe84966c576a319f79f92431da64adfb1850e2b50d93aa45f13`

### English

A legal policy prohibits a particular dependency license. Which dependency-review action capability is relevant?

1. Token validity checks

   Token checks concern credentials.

2. Configured license allow or deny lists **[CORRECT]**

   The action can evaluate dependency licenses against configured policy.

3. Custom CodeQL database extraction

   Code extraction does not implement dependency license lists.

4. Secret push bypass exemptions

   Secret bypasses do not enforce legal dependency policy.

**Concept:** Dependency license policy

**Authored coaching hints:**

- Which metadata describes usage terms?
- Is this a vulnerability-severity rule or a separate compliance rule?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política legal prohíbe cierta licencia de dependencia. ¿Qué capacidad de la acción de revisión de dependencias es pertinente?

1. Comprobaciones de validez de tokens

   Las comprobaciones de tokens tratan credenciales.

2. Listas configuradas de licencias permitidas o denegadas **[CORRECT]**

   La acción puede evaluar licencias de dependencias contra la política configurada.

3. Extracción personalizada de bases de CodeQL

   La extracción de código no implementa listas de licencias.

4. Exenciones de omisión de inserciones de secretos

   Las omisiones de secretos no imponen políticas legales de dependencias.

**Concept:** Política de licencias de dependencias

**Authored coaching hints:**

- ¿Qué metadatos describen términos de uso?
- ¿Es una regla de gravedad de vulnerabilidades o una regla de cumplimiento aparte?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política jurídica proíbe determinada licença de dependência. Qual capacidade da ação de revisão é relevante?

1. Verificações de validade de tokens

   Verificações de tokens tratam credenciais.

2. Listas configuradas de licenças permitidas ou negadas **[CORRECT]**

   A ação avalia licenças de dependências conforme a política configurada.

3. Extração personalizada de banco CodeQL

   Extração de código não implementa listas de licenças.

4. Isenções de bypass de push de segredos

   Bypasses de segredos não impõem políticas jurídicas de dependências.

**Concept:** Política de licenças de dependências

**Authored coaching hints:**

- Quais metadados descrevem termos de uso?
- É uma regra de severidade de vulnerabilidade ou uma regra de conformidade separada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-007:d94188c177b23e7319b8659ef672e5ed81b43b1770a4defdc11cc9dafcfe7e90 -->
## Question 87: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-007`

**Content revision:** `d94188c177b23e7319b8659ef672e5ed81b43b1770a4defdc11cc9dafcfe7e90`

### English

A team wants dependency review to fail only for newly introduced vulnerabilities at or above its chosen severity threshold. What should it configure?

1. Only a license denylist

   License restrictions do not express minimum vulnerability severity.

2. Only the dependency-update schedule

   Update scheduling does not establish review failure policy.

3. The dependency-review action's severity threshold **[CORRECT]**

   The action supports a configurable failure severity.

4. Only the comments emitted by the review action

   Changing comment presentation does not define the failure threshold.

**Concept:** Review severity thresholds

**Authored coaching hints:**

- Which configuration expresses a risk cutoff?
- Which alternatives affect a different policy dimension or presentation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que la revisión falle solo por vulnerabilidades recién introducidas que alcancen o superen cierto umbral de gravedad. ¿Qué debe configurar?

1. Solo una lista de licencias denegadas

   Las restricciones de licencias no expresan gravedad mínima.

2. Solo el calendario de actualizaciones de dependencias

   El calendario no establece la política de fallo de revisión.

3. El umbral de gravedad de la acción de revisión de dependencias **[CORRECT]**

   La acción admite gravedad configurable para fallar.

4. Solo los comentarios emitidos por la acción

   Cambiar la presentación de comentarios no define el umbral.

**Concept:** Umbrales de gravedad de revisión

**Authored coaching hints:**

- ¿Qué configuración expresa un límite de riesgo?
- ¿Qué alternativas afectan otra dimensión de política o la presentación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer que a revisão falhe só por vulnerabilidades recém-introduzidas no limiar de severidade escolhido ou acima dele. O que configurar?

1. Só uma lista de licenças negadas

   Restrições de licença não expressam severidade mínima.

2. Só o agendamento de atualizações de dependências

   Agendamento não estabelece política de falha da revisão.

3. O limiar de severidade da ação de revisão de dependências **[CORRECT]**

   A ação admite severidade de falha configurável.

4. Só os comentários emitidos pela ação

   Mudar a apresentação dos comentários não define o limiar.

**Concept:** Limiares de severidade da revisão

**Authored coaching hints:**

- Qual configuração expressa um corte de risco?
- Quais alternativas afetam outra dimensão da política ou a apresentação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-008:5679e9f42b7b2274cf86b7ec4a97077bd581490ebf492ea51e1c59ece938218d -->
## Question 88: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-008`

**Content revision:** `5679e9f42b7b2274cf86b7ec4a97077bd581490ebf492ea51e1c59ece938218d`

### English

When does Dependabot alert analysis primarily evaluate a repository's dependencies?

1. Only after a release is downloaded

   Release downloads are not required for alert creation.

2. Only on arbitrary local branches

   Repository alert monitoring is centered on the default branch.

3. Only while a developer is editing files offline

   Offline edits are not visible to GitHub.

4. On the repository's default branch as supported dependency or vulnerability data changes **[CORRECT]**

   Dependabot monitors default-branch dependencies and new vulnerability information.

**Concept:** Dependabot alert scope

**Authored coaching hints:**

- Which revision represents the repository's established dependency state?
- Can new advisory data create an alert without a commit?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuándo evalúa principalmente Dependabot las dependencias de un repositorio para alertas?

1. Solo después de descargar una publicación

   No se necesitan descargas de publicaciones para crear alertas.

2. Solo en ramas locales arbitrarias

   El monitoreo se centra en la rama predeterminada.

3. Solo mientras un desarrollador edita sin conexión

   GitHub no ve ediciones sin conexión.

4. En la rama predeterminada, cuando cambian datos compatibles de dependencias o vulnerabilidades **[CORRECT]**

   Dependabot monitorea dependencias de la rama predeterminada y nueva información de vulnerabilidades.

**Concept:** Alcance de alertas de Dependabot

**Authored coaching hints:**

- ¿Qué revisión representa el estado establecido de dependencias?
- ¿Nuevos avisos pueden crear alertas sin un commit?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando a análise de alertas do Dependabot avalia principalmente as dependências do repositório?

1. Só após baixar uma release

   Downloads de releases não são necessários para criar alertas.

2. Só em branches locais arbitrárias

   O monitoramento de alertas se concentra na branch padrão.

3. Só enquanto um desenvolvedor edita offline

   Edições offline não são visíveis ao GitHub.

4. Na branch padrão, quando mudam dados compatíveis de dependências ou vulnerabilidades **[CORRECT]**

   Dependabot monitora dependências da branch padrão e novas informações de vulnerabilidades.

**Concept:** Escopo dos alertas do Dependabot

**Authored coaching hints:**

- Qual revisão representa o estado estabelecido das dependências?
- Novos comunicados podem criar alertas sem commit?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts>

<!-- certification-coach-question:ghas-supply-009:f585ea2687310d3e17ec2124401a7fd78e1bf628bc7762ad2f641ee3dabc4227 -->
## Question 89: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-009`

**Content revision:** `f585ea2687310d3e17ec2124401a7fd78e1bf628bc7762ad2f641ee3dabc4227`

### English

A security update proposes a patched version with a high compatibility score. What does that score establish?

1. Observed CI success in other public repositories for that update, not a guarantee for this application **[CORRECT]**

   Compatibility scores summarize relevant observed CI results.

2. Formal proof that all application tests pass

   The score does not execute or prove this application's complete test suite.

3. A guarantee of no breaking API changes

   Other projects' success cannot guarantee local API compatibility.

4. That the original advisory was a false positive

   Compatibility information does not invalidate an advisory.

**Concept:** Compatibility score limitations

**Authored coaching hints:**

- Whose tests produced the score?
- What still needs validation in this repository?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una actualización de seguridad propone una versión corregida con puntuación alta de compatibilidad. ¿Qué establece esa puntuación?

1. Éxito de CI observado en otros repositorios públicos para esa actualización, no una garantía para esta aplicación **[CORRECT]**

   Las puntuaciones resumen resultados de CI pertinentes observados.

2. Prueba formal de que pasan todas las pruebas de la aplicación

   No ejecutan ni prueban toda la batería de esta aplicación.

3. Garantía de que no hay cambios incompatibles de API

   El éxito de otros proyectos no garantiza compatibilidad local de API.

4. Que el aviso original era falso positivo

   La información de compatibilidad no invalida un aviso.

**Concept:** Limitaciones de la puntuación de compatibilidad

**Authored coaching hints:**

- ¿Las pruebas de quién produjeron la puntuación?
- ¿Qué falta validar en este repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma atualização de segurança propõe uma versão corrigida com alta pontuação de compatibilidade. O que a pontuação estabelece?

1. Sucesso de CI observado em outros repositórios públicos para a atualização, não garantia para esta aplicação **[CORRECT]**

   Pontuações resumem resultados relevantes de CI observados.

2. Prova formal de que todos os testes da aplicação passam

   A pontuação não executa nem prova a suíte completa desta aplicação.

3. Garantia de ausência de mudanças incompatíveis de API

   Sucesso de outros projetos não garante compatibilidade local de API.

4. Que o comunicado original era falso positivo

   Informação de compatibilidade não invalida um comunicado.

**Concept:** Limitações da pontuação de compatibilidade

**Authored coaching hints:**

- Os testes de quem produziram a pontuação?
- O que ainda precisa ser validado neste repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-010:58af0252437064c2b8fff0a28d830202e38b3153630f5465beef01a2ae9935f7 -->
## Question 90: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-010`

**Content revision:** `58af0252437064c2b8fff0a28d830202e38b3153630f5465beef01a2ae9935f7`

### English

Which minimum capabilities should be enabled for Dependabot security updates to operate on supported repository dependencies?

1. Only CodeQL advanced setup

   CodeQL is independent of dependency update automation.

2. Dependency graph and Dependabot alerts, along with security updates **[CORRECT]**

   Security updates rely on dependency inventory and vulnerability alerts.

3. Only a public security advisory

   Publishing an advisory does not configure this repository's updates.

4. Only custom secret patterns

   Secret patterns do not supply dependency information.

**Concept:** Security update prerequisites

**Authored coaching hints:**

- How does the updater know what is vulnerable?
- Which feature supplies the package inventory?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué capacidades mínimas deben habilitarse para que las actualizaciones de seguridad de Dependabot operen sobre dependencias compatibles?

1. Solo configuración avanzada de CodeQL

   CodeQL es independiente de la automatización de actualizaciones.

2. Gráfico de dependencias y alertas de Dependabot, junto con actualizaciones de seguridad **[CORRECT]**

   Las actualizaciones de seguridad dependen del inventario y de alertas de vulnerabilidades.

3. Solo un aviso público de seguridad

   Publicar un aviso no configura las actualizaciones de este repositorio.

4. Solo patrones personalizados de secretos

   Los patrones de secretos no aportan información de dependencias.

**Concept:** Requisitos de actualizaciones de seguridad

**Authored coaching hints:**

- ¿Cómo sabe el actualizador qué es vulnerable?
- ¿Qué función aporta el inventario de paquetes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais capacidades mínimas devem estar habilitadas para atualizações de segurança do Dependabot operarem em dependências compatíveis?

1. Só configuração avançada do CodeQL

   CodeQL é independente da automação de atualizações.

2. Grafo de dependências e alertas do Dependabot, além das atualizações de segurança **[CORRECT]**

   Atualizações de segurança dependem de inventário e alertas de vulnerabilidades.

3. Só um comunicado público de segurança

   Publicar um comunicado não configura as atualizações deste repositório.

4. Só padrões personalizados de segredos

   Padrões de segredos não fornecem dados de dependências.

**Concept:** Pré-requisitos das atualizações de segurança

**Authored coaching hints:**

- Como o atualizador sabe o que é vulnerável?
- Qual recurso fornece o inventário de pacotes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-011:fd185afd70732f543eab4af17bf04360079df15296b4b19c1d29e83aeca2b402 -->
## Question 91: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-011`

**Content revision:** `fd185afd70732f543eab4af17bf04360079df15296b4b19c1d29e83aeca2b402`

### English

A dependency submitted only through the submission API receives an alert but no security-update pull request. Which documented distinction can explain this?

1. API-submitted dependencies cannot have advisories

   Submitted dependencies can receive vulnerability alerts.

2. All alerts must produce a pull request

   An alert does not guarantee automated remediation.

3. Security updates are triggered for dependencies specified in a manifest or lockfile **[CORRECT]**

   The graph may contain more dependencies than security updates can directly update.

4. CodeQL must run before every dependency update

   CodeQL is not a security-update prerequisite.

**Concept:** Alert coverage versus update coverage

**Authored coaching hints:**

- Does the updater have an editable dependency declaration?
- Can inventory coverage exceed automated update coverage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una dependencia enviada solo mediante submission API recibe una alerta, pero no un pull request de seguridad. ¿Qué distinción documentada puede explicarlo?

1. Las dependencias enviadas por API no pueden tener avisos

   Las dependencias enviadas pueden recibir alertas de vulnerabilidades.

2. Todas las alertas deben producir un pull request

   Una alerta no garantiza remediación automática.

3. Las actualizaciones de seguridad se activan para dependencias especificadas en manifiestos o archivos de bloqueo **[CORRECT]**

   El gráfico puede contener más dependencias de las que las actualizaciones pueden modificar directamente.

4. CodeQL debe ejecutarse antes de toda actualización de dependencias

   CodeQL no es requisito de actualizaciones de seguridad.

**Concept:** Cobertura de alertas frente a actualizaciones

**Authored coaching hints:**

- ¿El actualizador tiene una declaración de dependencia editable?
- ¿El inventario puede superar la cobertura de actualización automática?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma dependência enviada só pela submission API recebe um alerta, mas não um pull request de segurança. Qual distinção documentada pode explicar?

1. Dependências enviadas por API não podem ter comunicados

   Dependências enviadas podem receber alertas de vulnerabilidades.

2. Todo alerta deve produzir um pull request

   Um alerta não garante remediação automatizada.

3. Atualizações de segurança são acionadas para dependências especificadas em manifestos ou arquivos de lock **[CORRECT]**

   O grafo pode conter mais dependências do que as atualizações conseguem alterar diretamente.

4. CodeQL precisa executar antes de toda atualização de dependência

   CodeQL não é pré-requisito de atualização de segurança.

**Concept:** Cobertura de alertas versus atualizações

**Authored coaching hints:**

- O atualizador tem uma declaração editável da dependência?
- A cobertura de inventário pode superar a de atualização automatizada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-012:9a8d7f3f760fa42de9bd44f260d44f0df5dc75d1685c0ab19f075dda2b25fa2e -->
## Question 92: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-012`

**Content revision:** `9a8d7f3f760fa42de9bd44f260d44f0df5dc75d1685c0ab19f075dda2b25fa2e`

### English

Where should a repository commit configuration for routine Dependabot version updates?

1. A SARIF result file

   SARIF stores static analysis results.

2. An open secret alert's comment

   Secret alert comments do not configure package maintenance.

3. A security-advisory description

   An advisory description is not update configuration.

4. A .github/dependabot.yml file **[CORRECT]**

   The dependabot.yml file defines version-update ecosystems, directories, and schedules.

**Concept:** Version update configuration location

**Authored coaching hints:**

- Is the configuration repository content or an alert state?
- Which configuration is read by Dependabot?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde debe confirmar el repositorio la configuración de actualizaciones rutinarias de versiones de Dependabot?

1. En un archivo de resultados SARIF

   SARIF almacena resultados de análisis estático.

2. En un comentario de alerta de secretos abierta

   Los comentarios de alertas de secretos no configuran mantenimiento de paquetes.

3. En la descripción de un aviso de seguridad

   La descripción de un aviso no configura actualizaciones.

4. En un archivo .github/dependabot.yml **[CORRECT]**

   dependabot.yml define ecosistemas, directorios y calendarios de actualizaciones de versiones.

**Concept:** Ubicación de configuración de actualizaciones

**Authored coaching hints:**

- ¿La configuración es contenido del repositorio o estado de alerta?
- ¿Qué configuración lee Dependabot?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde o repositório deve commitar a configuração de atualizações rotineiras de versão do Dependabot?

1. Em um arquivo de resultados SARIF

   SARIF armazena resultados de análise estática.

2. Em um comentário de alerta de segredos aberto

   Comentários de alertas de segredos não configuram manutenção de pacotes.

3. Na descrição de um comunicado de segurança

   A descrição de um comunicado não é configuração de atualização.

4. Em um arquivo .github/dependabot.yml **[CORRECT]**

   dependabot.yml define ecossistemas, diretórios e agendamentos de atualizações de versão.

**Concept:** Local da configuração de atualizações

**Authored coaching hints:**

- A configuração é conteúdo do repositório ou estado de alerta?
- Qual configuração o Dependabot lê?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference>

<!-- certification-coach-question:ghas-supply-013:b68b373da6aa844f7cbba4b002618176dd70b79a427ce1552b499673d65a5128 -->
## Question 93: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-013`

**Content revision:** `b68b373da6aa844f7cbba4b002618176dd70b79a427ce1552b499673d65a5128`

### English

A monorepo has manifests in several directories. What information must version-update configuration provide so Dependabot knows where to look?

1. The relevant package ecosystem and manifest directory settings **[CORRECT]**

   Ecosystem and directory identify supported dependency declarations.

2. Only a daily update schedule, relying on it to identify every package manager

   Frequency does not specify which ecosystem and directories to inspect.

3. Only a registry credential, relying on it to locate all manifests

   Registry authentication does not identify repository manifest locations.

4. Only the default branch name, relying on it to identify all update targets

   Branch targeting does not replace ecosystem and directory configuration.

**Concept:** Monorepo update targeting

**Authored coaching hints:**

- What distinct information locates and interprets a dependency declaration?
- Does the time of a check identify its targets?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un monorepositorio tiene manifiestos en varios directorios. ¿Qué información necesita la configuración de actualizaciones para que Dependabot sepa dónde buscar?

1. El ecosistema de paquetes y ajustes de directorios de manifiestos pertinentes **[CORRECT]**

   El ecosistema y directorio identifican declaraciones de dependencias compatibles.

2. Solo un calendario diario, confiando en que identifique todos los gestores

   La frecuencia no especifica ecosistemas ni directorios a inspeccionar.

3. Solo una credencial de registro, confiando en que ubique todos los manifiestos

   Autenticarse en el registro no identifica ubicaciones de manifiestos.

4. Solo el nombre de rama predeterminada, confiando en que identifique todos los destinos

   La selección de rama no reemplaza ecosistema y directorio.

**Concept:** Destinos de actualización en monorepositorios

**Authored coaching hints:**

- ¿Qué información distinta ubica e interpreta una declaración de dependencia?
- ¿La hora de una comprobación identifica sus destinos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um monorepositório tem manifestos em vários diretórios. Que informação a configuração precisa fornecer para o Dependabot saber onde procurar?

1. O ecossistema de pacotes e os ajustes de diretórios de manifestos relevantes **[CORRECT]**

   Ecossistema e diretório identificam declarações compatíveis de dependências.

2. Só um agendamento diário, esperando que identifique todos os gerenciadores

   Frequência não especifica ecossistemas nem diretórios a inspecionar.

3. Só uma credencial de registro, esperando que localize todos os manifestos

   Autenticação no registro não identifica locais de manifestos.

4. Só o nome da branch padrão, esperando que identifique todos os alvos

   Selecionar branch não substitui ecossistema e diretório.

**Concept:** Alvos de atualização em monorepositório

**Authored coaching hints:**

- Quais informações distintas localizam e interpretam uma declaração de dependência?
- O horário de uma verificação identifica seus alvos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference>

<!-- certification-coach-question:ghas-supply-014:537ae64a1f18e7d7fd5095e485d360e60566d70ef7dee005ce33ebb6f4d2d72f -->
## Question 94: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-014`

**Content revision:** `537ae64a1f18e7d7fd5095e485d360e60566d70ef7dee005ce33ebb6f4d2d72f`

### English

The team wants fewer security-update pull requests while retaining automated fixes for related vulnerable packages in one ecosystem. What should it consider?

1. Turning off security updates and relying only on alert notifications

   Notifications alone do not retain automated fix pull requests.

2. Grouped Dependabot security updates **[CORRECT]**

   Grouping can combine compatible security updates into fewer pull requests.

3. Changing only the routine version-update interval

   Routine update timing does not provide the requested security-update grouping.

4. Adding all affected packages to a broad ignore rule

   Broad ignores can suppress updates rather than consolidate fixes.

**Concept:** Grouped security updates

**Authored coaching hints:**

- What output needs consolidation?
- Which alternatives reduce work by removing the desired automation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere menos pull requests de seguridad conservando correcciones automáticas de paquetes vulnerables relacionados en un ecosistema. ¿Qué debe considerar?

1. Desactivar actualizaciones de seguridad y depender solo de notificaciones

   Las notificaciones solas no conservan pull requests automáticos de corrección.

2. Actualizaciones de seguridad agrupadas de Dependabot **[CORRECT]**

   La agrupación combina actualizaciones compatibles en menos pull requests.

3. Cambiar solo el intervalo de actualizaciones rutinarias de versiones

   El calendario rutinario no ofrece la agrupación de seguridad solicitada.

4. Agregar todos los paquetes afectados a una regla amplia de ignore

   Las reglas amplias de ignore pueden suprimir actualizaciones, no consolidarlas.

**Concept:** Actualizaciones de seguridad agrupadas

**Authored coaching hints:**

- ¿Qué salida necesita consolidarse?
- ¿Qué alternativas reducen trabajo eliminando la automatización deseada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A equipe quer menos pull requests de segurança mantendo correções automáticas de pacotes vulneráveis relacionados em um ecossistema. O que considerar?

1. Desativar atualizações de segurança e depender só de notificações

   Só notificações não mantêm pull requests automáticos de correção.

2. Atualizações de segurança agrupadas do Dependabot **[CORRECT]**

   Agrupamento combina atualizações compatíveis em menos pull requests.

3. Mudar só o intervalo de atualizações rotineiras de versão

   O agendamento rotineiro não oferece o agrupamento de segurança solicitado.

4. Adicionar todos os pacotes afetados a uma regra ampla de ignore

   Regras amplas de ignore podem suprimir atualizações, não consolidá-las.

**Concept:** Atualizações de segurança agrupadas

**Authored coaching hints:**

- Qual saída precisa ser consolidada?
- Quais alternativas reduzem trabalho removendo a automação desejada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-015:324dcc76017ca21c7cdf04e9f0f24fd19c9cb97ef83d109fd9e2b54de186724c -->
## Question 95: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-015`

**Content revision:** `324dcc76017ca21c7cdf04e9f0f24fd19c9cb97ef83d109fd9e2b54de186724c`

### English

A maintainer expects one grouped Dependabot security pull request to combine npm security fixes, pip security fixes, and routine version refreshes. What is the documented limitation?

1. Security groups can cross ecosystems but cannot mix update types

   Different ecosystems are not combined by grouped security updates.

2. Security groups can mix update types but cannot cross ecosystems

   Security and version updates remain separate.

3. Security groups do not combine different ecosystems or mix security updates with version updates **[CORRECT]**

   Security-update groups have ecosystem and update-type boundaries.

4. Security groups can combine both when all packages have the same severity

   Matching severities do not remove the ecosystem and update-type boundaries.

**Concept:** Security update grouping boundaries

**Authored coaching hints:**

- Which boundaries apply to the proposed group?
- Does a shared risk rating change how different package managers are updated?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora espera que un pull request agrupado combine correcciones de seguridad npm, pip y renovaciones rutinarias de versiones. ¿Cuál es la limitación documentada?

1. Los grupos de seguridad cruzan ecosistemas, pero no mezclan tipos de actualización

   Las actualizaciones de seguridad agrupadas no combinan ecosistemas distintos.

2. Los grupos de seguridad mezclan tipos, pero no cruzan ecosistemas

   Las actualizaciones de seguridad y versiones siguen separadas.

3. Los grupos de seguridad no combinan ecosistemas distintos ni mezclan actualizaciones de seguridad y versiones **[CORRECT]**

   Los grupos tienen límites de ecosistema y tipo de actualización.

4. Pueden combinar ambos si todos los paquetes tienen igual gravedad

   La misma gravedad no elimina esos límites.

**Concept:** Límites de agrupación de seguridad

**Authored coaching hints:**

- ¿Qué límites se aplican al grupo propuesto?
- ¿Una calificación de riesgo compartida cambia cómo se actualizan gestores distintos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora espera um pull request agrupado combinando correções de segurança npm, pip e atualizações rotineiras de versão. Qual é a limitação documentada?

1. Grupos de segurança cruzam ecossistemas, mas não misturam tipos de atualização

   Atualizações de segurança agrupadas não combinam ecossistemas diferentes.

2. Grupos de segurança misturam tipos, mas não cruzam ecossistemas

   Atualizações de segurança e versão permanecem separadas.

3. Grupos de segurança não combinam ecossistemas diferentes nem misturam atualizações de segurança e versão **[CORRECT]**

   Grupos têm limites de ecossistema e tipo de atualização.

4. Podem combinar ambos quando os pacotes têm a mesma severidade

   Severidades iguais não removem esses limites.

**Concept:** Limites do agrupamento de segurança

**Authored coaching hints:**

- Quais limites se aplicam ao grupo proposto?
- Uma classificação de risco compartilhada muda como diferentes gerenciadores são atualizados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-016:da22cca77ab43f05809f64d0859e2cd0c69fec1d47f211eb8b404d6e60b4f32a -->
## Question 96: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-016`

**Content revision:** `da22cca77ab43f05809f64d0859e2cd0c69fec1d47f211eb8b404d6e60b4f32a`

### English

A low-risk development dependency alert is automatically dismissed by a rule. What happened to the installed dependency?

1. It was necessarily upgraded

   Auto-dismissal does not imply an upgrade.

2. It was deleted from every branch

   Rules do not remove packages from every branch.

3. Its vulnerable code was rewritten

   Triage does not rewrite package code.

4. Its alert state changed; remediation was not inherently performed **[CORRECT]**

   Auto-dismissal is alert management rather than remediation.

**Concept:** Auto-triage is not patching

**Authored coaching hints:**

- What object does the rule act on?
- Is changing alert state equivalent to changing the resolved package?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una regla descarta automáticamente una alerta de bajo riesgo de una dependencia de desarrollo. ¿Qué ocurrió con la dependencia instalada?

1. Necesariamente se actualizó

   Descartar automáticamente no implica actualizar.

2. Se eliminó de todas las ramas

   Las reglas no eliminan paquetes de todas las ramas.

3. Se reescribió su código vulnerable

   La clasificación no reescribe código de paquetes.

4. Cambió el estado de la alerta; no necesariamente se remedió **[CORRECT]**

   El descarte automático gestiona alertas, no remedia.

**Concept:** Clasificación automática no es corrección

**Authored coaching hints:**

- ¿Sobre qué objeto actúa la regla?
- ¿Cambiar el estado equivale a cambiar el paquete resuelto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma regra descarta automaticamente um alerta de baixo risco de dependência de desenvolvimento. O que aconteceu com a dependência instalada?

1. Foi necessariamente atualizada

   Descarte automático não implica atualização.

2. Foi excluída de todas as branches

   Regras não removem pacotes de todas as branches.

3. Seu código vulnerável foi reescrito

   Triagem não reescreve código de pacotes.

4. O estado do alerta mudou; não houve necessariamente remediação **[CORRECT]**

   Descarte automático gerencia alertas, não remedia.

**Concept:** Triagem automática não é correção

**Authored coaching hints:**

- Sobre qual objeto a regra atua?
- Mudar o estado do alerta equivale a mudar o pacote resolvido?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-017:16a45595087288671db0548a15747cb523ab9df43311c4613fa852667bc65823 -->
## Question 97: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-017`

**Content revision:** `16a45595087288671db0548a15747cb523ab9df43311c4613fa852667bc65823`

### English

Why can enabling a low-risk auto-dismiss rule reduce notifications even when alerts are still available for reporting?

1. Rules are applied before alert notifications are sent **[CORRECT]**

   Alerts dismissed on creation do not send their usual notifications.

2. GitHub deletes all matching advisory records

   Advisory records are not deleted by repository rules.

3. The rule disables the dependency graph

   Inventory can remain enabled.

4. All developers lose repository access

   Notification reduction does not require removing access.

**Concept:** Auto-triage notification timing

**Authored coaching hints:**

- At which point in the lifecycle is the rule evaluated?
- Can reporting visibility differ from notification delivery?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué habilitar una regla de descarte automático de bajo riesgo puede reducir notificaciones aunque las alertas sigan disponibles para informes?

1. Las reglas se aplican antes de enviar notificaciones **[CORRECT]**

   Las alertas descartadas al crearse no envían sus notificaciones habituales.

2. GitHub elimina todos los registros de avisos coincidentes

   Las reglas del repositorio no eliminan registros de avisos.

3. La regla desactiva el gráfico de dependencias

   El inventario puede seguir habilitado.

4. Todos los desarrolladores pierden acceso al repositorio

   Reducir notificaciones no exige quitar accesos.

**Concept:** Momento de notificación de clasificación automática

**Authored coaching hints:**

- ¿En qué momento del ciclo se evalúa la regla?
- ¿La visibilidad para informes puede diferir de la entrega de notificaciones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que habilitar descarte automático de baixo risco pode reduzir notificações mesmo com alertas ainda disponíveis para relatórios?

1. As regras são aplicadas antes de enviar notificações **[CORRECT]**

   Alertas descartados na criação não enviam suas notificações habituais.

2. O GitHub exclui todos os registros de comunicados correspondentes

   Regras do repositório não excluem registros de comunicados.

3. A regra desativa o grafo de dependências

   O inventário pode permanecer habilitado.

4. Todos os desenvolvedores perdem acesso ao repositório

   Reduzir notificações não exige remover acesso.

**Concept:** Momento das notificações de triagem automática

**Authored coaching hints:**

- Em qual ponto do ciclo a regra é avaliada?
- A visibilidade em relatórios pode diferir da entrega de notificações?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-018:e1e38dd5d53b569d04a0dd8db3f29e8c5e91512bc862453660f297fc3c4b9cf8 -->
## Question 98: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-018`

**Content revision:** `e1e38dd5d53b569d04a0dd8db3f29e8c5e91512bc862453660f297fc3c4b9cf8`

### English

A security reviewer wants to audit alerts dismissed automatically by Dependabot. What is supported?

1. They are permanently unavailable

   Automatic dismissal does not erase alerts.

2. Filter and review auto-dismissed alerts, with reopening available **[CORRECT]**

   Auto-dismissed alerts remain available for reporting and review.

3. Only package authors can see them

   Repository permissions govern access rather than package authorship alone.

4. They are converted into CodeQL findings

   Alert families are not converted by triage.

**Concept:** Reviewing automated triage

**Authored coaching hints:**

- Is dismissal deletion?
- How can the team validate that its automation remains appropriate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona revisora quiere auditar alertas descartadas automáticamente por Dependabot. ¿Qué se admite?

1. Ya no están disponibles permanentemente

   El descarte automático no borra alertas.

2. Filtrar y revisar alertas descartadas automáticamente, con posibilidad de reabrirlas **[CORRECT]**

   Las alertas siguen disponibles para informes y revisión.

3. Solo los autores de paquetes pueden verlas

   Los permisos del repositorio gobiernan el acceso, no solo la autoría del paquete.

4. Se convierten en hallazgos de CodeQL

   La clasificación no convierte familias de alertas.

**Concept:** Revisión de clasificación automatizada

**Authored coaching hints:**

- ¿Descartar es eliminar?
- ¿Cómo valida el equipo que la automatización siga siendo adecuada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa revisora quer auditar alertas descartados automaticamente pelo Dependabot. O que é possível?

1. Ficam permanentemente indisponíveis

   Descarte automático não apaga alertas.

2. Filtrar e revisar alertas descartados automaticamente, com possibilidade de reabertura **[CORRECT]**

   Alertas continuam disponíveis para relatórios e revisão.

3. Só autores dos pacotes podem vê-los

   Permissões do repositório governam acesso, não só autoria do pacote.

4. São convertidos em resultados do CodeQL

   Triagem não converte famílias de alertas.

**Concept:** Revisão de triagem automatizada

**Authored coaching hints:**

- Descartar é excluir?
- Como a equipe valida se sua automação continua adequada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-019:ef80d6f5c0b56363366c330fb438f4b9515eb8fc6564723687c4576e6984e78b -->
## Question 99: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-019`

**Content revision:** `ef80d6f5c0b56363366c330fb438f4b9515eb8fc6564723687c4576e6984e78b`

### English

A custom auto-triage policy should affect only one low-risk package and weakness category. Which inputs are appropriate?

1. Severity alone across every package

   Severity alone can include unrelated packages and weakness categories.

2. Package ecosystem alone across every weakness category

   An ecosystem is broader than the intended package-specific exception.

3. Targeted package and CWE metadata, with other relevant risk criteria **[CORRECT]**

   Custom rules can target package, CWE, severity, and related alert metadata.

4. A blanket development-scope condition without package or weakness restrictions

   Development scope alone does not express the requested narrow exception.

**Concept:** Metadata-targeted auto-triage

**Authored coaching hints:**

- What facts distinguish the approved exception?
- Which candidate criteria include alerts outside that scope?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política personalizada de clasificación automática debe afectar solo a un paquete de bajo riesgo y una categoría de debilidad. ¿Qué criterios corresponden?

1. Solo gravedad en todos los paquetes

   Solo la gravedad puede incluir paquetes y categorías ajenos.

2. Solo ecosistema en todas las categorías de debilidad

   Un ecosistema es más amplio que la excepción de un paquete.

3. Metadatos específicos de paquete y CWE, con otros criterios pertinentes de riesgo **[CORRECT]**

   Las reglas pueden usar paquete, CWE, gravedad y metadatos relacionados.

4. Una condición general de alcance de desarrollo sin restricciones de paquete o debilidad

   Solo el alcance de desarrollo no expresa la excepción limitada solicitada.

**Concept:** Clasificación automática por metadatos específicos

**Authored coaching hints:**

- ¿Qué hechos distinguen la excepción aprobada?
- ¿Qué criterios candidatos incluyen alertas fuera de ese alcance?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política personalizada de triagem deve afetar só um pacote de baixo risco e uma categoria de fraqueza. Quais critérios são adequados?

1. Só severidade em todos os pacotes

   Só severidade pode incluir pacotes e categorias não relacionados.

2. Só ecossistema em todas as categorias de fraqueza

   Um ecossistema é mais amplo que a exceção de um pacote.

3. Metadados específicos de pacote e CWE, com outros critérios relevantes de risco **[CORRECT]**

   Regras podem usar pacote, CWE, severidade e metadados relacionados.

4. Uma condição ampla de escopo de desenvolvimento sem restrições de pacote ou fraqueza

   Só escopo de desenvolvimento não expressa a exceção restrita solicitada.

**Concept:** Triagem automática por metadados específicos

**Authored coaching hints:**

- Quais fatos distinguem a exceção aprovada?
- Quais critérios candidatos incluem alertas fora desse escopo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-020:7bf139eea561dbfdb3c424d77fd1f89f56556960478640f5393baf8a146e2eb4 -->
## Question 100: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-020`

**Content revision:** `7bf139eea561dbfdb3c424d77fd1f89f56556960478640f5393baf8a146e2eb4`

### English

A dependency-review action runs before a build submits its dependency snapshot. Why can this be a problem?

1. The action revokes build credentials

   Dependency review does not inherently revoke credentials.

2. Every late snapshot creates a duplicate CVE

   Snapshot timing does not create CVE identifiers.

3. The build can no longer write a lockfile

   Review does not inherently prevent lockfile writes.

4. Review may compare incomplete dependency data because of a race **[CORRECT]**

   Missing snapshots can cause incomplete dependency comparisons.

**Concept:** Dependency submission ordering

**Authored coaching hints:**

- What data must exist before a comparison is meaningful?
- Could parallel execution produce a partial view?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una acción de revisión se ejecuta antes de que la compilación envíe su instantánea de dependencias. ¿Por qué puede ser un problema?

1. La acción revoca credenciales de compilación

   La revisión no revoca por sí misma credenciales.

2. Toda instantánea tardía crea un CVE duplicado

   El momento de la instantánea no crea identificadores CVE.

3. La compilación ya no puede escribir un archivo de bloqueo

   La revisión no impide por sí misma escribir archivos de bloqueo.

4. La revisión puede comparar datos incompletos por una condición de carrera **[CORRECT]**

   Las instantáneas faltantes pueden producir comparaciones incompletas.

**Concept:** Orden del envío de dependencias

**Authored coaching hints:**

- ¿Qué datos deben existir para una comparación significativa?
- ¿La ejecución paralela podría producir una vista parcial?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ação de revisão executa antes de a compilação enviar seu retrato de dependências. Por que isso pode ser um problema?

1. A ação revoga credenciais da compilação

   A revisão não revoga por si só credenciais.

2. Todo retrato atrasado cria um CVE duplicado

   O momento do retrato não cria identificadores CVE.

3. A compilação não pode mais escrever um arquivo de lock

   A revisão não impede por si só escrever arquivos de lock.

4. A revisão pode comparar dados incompletos por uma condição de corrida **[CORRECT]**

   Retratos ausentes podem produzir comparações incompletas.

**Concept:** Ordem do envio de dependências

**Authored coaching hints:**

- Quais dados precisam existir para uma comparação significativa?
- Execução paralela poderia produzir uma visão parcial?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-021:df1dfe81aa20ec93efcb32fa49915cd8209d75f0ff13c02af3eaf656a7b586e2 -->
## Question 101: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-021`

**Content revision:** `df1dfe81aa20ec93efcb32fa49915cd8209d75f0ff13c02af3eaf656a7b586e2`

### English

How should a team most directly avoid a dependency-submission and review race in one GitHub Actions workflow?

1. Run submission steps before dependency review **[CORRECT]**

   Ordering ensures review can use submitted dependency data.

2. Run dependency review before checkout in every case

   Review still needs relevant repository and snapshot inputs.

3. Disable snapshot generation

   Removing snapshots loses the missing dependency coverage.

4. Dismiss all alerts while the build runs

   Dismissal does not resolve missing comparison data.

**Concept:** Reliable dependency review orchestration

**Authored coaching hints:**

- Which operation produces input for the other?
- How can workflow dependencies make availability explicit?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo evitar más directamente una condición de carrera entre envío de dependencias y revisión en un flujo de GitHub Actions?

1. Ejecutar los pasos de envío antes de la revisión **[CORRECT]**

   El orden permite que la revisión use los datos enviados.

2. Ejecutar siempre la revisión antes de checkout

   La revisión aún necesita entradas pertinentes del repositorio y de instantáneas.

3. Desactivar la generación de instantáneas

   Eliminar instantáneas pierde cobertura de dependencias faltantes.

4. Descartar todas las alertas mientras se compila

   Descartar no resuelve datos faltantes para comparar.

**Concept:** Orquestación confiable de revisión de dependencias

**Authored coaching hints:**

- ¿Qué operación produce entradas para la otra?
- ¿Cómo pueden las dependencias del flujo hacer explícita la disponibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como evitar mais diretamente uma corrida entre envio de dependências e revisão em um workflow do GitHub Actions?

1. Executar etapas de envio antes da revisão **[CORRECT]**

   A ordem garante que a revisão possa usar os dados enviados.

2. Executar sempre a revisão antes de checkout

   A revisão ainda precisa de entradas relevantes do repositório e dos retratos.

3. Desativar a geração de retratos

   Remover retratos perde cobertura de dependências ausentes.

4. Descartar todos os alertas durante a compilação

   Descartar não resolve dados ausentes de comparação.

**Concept:** Orquestração confiável da revisão de dependências

**Authored coaching hints:**

- Qual operação produz entradas para a outra?
- Como dependências do workflow explicitam a disponibilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-022:b4c985d4232e9c6289c4f53aa0ce4b66065f12d04d90021e3eef7525ff20fbdf -->
## Question 102: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-022`

**Content revision:** `b4c985d4232e9c6289c4f53aa0ce4b66065f12d04d90021e3eef7525ff20fbdf`

### English

Submission and review must run in separate workflows. Which documented action option helps handle snapshots that are not ready yet?

1. A secret bypass exemption

   Bypass exemptions do not coordinate dependency data.

2. retry-on-snapshot-warnings with an appropriate timeout **[CORRECT]**

   Retry options can wait for dependency snapshots to become available.

3. A license allowlist containing every license

   Permissive license policy does not repair incomplete data.

4. A CodeQL build-mode override

   CodeQL extraction mode is unrelated.

**Concept:** Snapshot availability retries

**Authored coaching hints:**

- Is the condition permanent failure or temporary missing input?
- Which behavior waits rather than accepting incomplete evidence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El envío y la revisión deben ejecutarse en flujos separados. ¿Qué opción documentada de la acción ayuda si las instantáneas aún no están listas?

1. Una exención de omisión de secretos

   Las exenciones no coordinan datos de dependencias.

2. retry-on-snapshot-warnings con un tiempo de espera adecuado **[CORRECT]**

   Las opciones de reintento permiten esperar la disponibilidad de instantáneas.

3. Una lista que permita todas las licencias

   Una política permisiva de licencias no repara datos incompletos.

4. Una anulación de build-mode de CodeQL

   El modo de extracción de CodeQL no está relacionado.

**Concept:** Reintentos por disponibilidad de instantáneas

**Authored coaching hints:**

- ¿Es un fallo permanente o una entrada temporalmente faltante?
- ¿Qué comportamiento espera en lugar de aceptar evidencia incompleta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Envio e revisão precisam executar em workflows separados. Qual opção documentada da ação ajuda quando os retratos ainda não estão prontos?

1. Uma isenção de bypass de segredos

   Isenções não coordenam dados de dependências.

2. retry-on-snapshot-warnings com timeout adequado **[CORRECT]**

   Opções de repetição aguardam retratos ficarem disponíveis.

3. Uma lista permitindo todas as licenças

   Política permissiva de licenças não corrige dados incompletos.

4. Uma substituição de build-mode do CodeQL

   O modo de extração do CodeQL não se relaciona.

**Concept:** Repetição por disponibilidade de retratos

**Authored coaching hints:**

- É falha permanente ou entrada temporariamente ausente?
- Qual comportamento espera em vez de aceitar evidência incompleta?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-023:cb175d3b093d13b5285ef7fa477ab1a600f9a06cb319aa291cad6689ca189048 -->
## Question 103: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-023`

**Content revision:** `cb175d3b093d13b5285ef7fa477ab1a600f9a06cb319aa291cad6689ca189048`

### English

An SBOM export lists packages and licenses. What should auditors avoid concluding from the inventory alone?

1. It can support component review

   Component review is a valid use.

2. It describes recorded dependencies at export time

   The export is a dependency snapshot.

3. It certifies that every listed component is vulnerability-free **[CORRECT]**

   An inventory is not a security certification.

4. It can be processed by other tools

   Machine-readable inventories support downstream tooling.

**Concept:** SBOM assurance limits

**Authored coaching hints:**

- Does identifying a component prove its safety?
- What additional vulnerability and usage context is needed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una exportación SBOM enumera paquetes y licencias. ¿Qué deben evitar concluir los auditores solo del inventario?

1. Puede apoyar la revisión de componentes

   La revisión de componentes es un uso válido.

2. Describe dependencias registradas al exportar

   La exportación es una instantánea de dependencias.

3. Certifica que todos los componentes listados están libres de vulnerabilidades **[CORRECT]**

   Un inventario no es una certificación de seguridad.

4. Puede procesarse con otras herramientas

   Los inventarios legibles por máquinas admiten herramientas posteriores.

**Concept:** Límites de garantía de SBOM

**Authored coaching hints:**

- ¿Identificar un componente demuestra su seguridad?
- ¿Qué contexto adicional de vulnerabilidades y uso hace falta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma exportação SBOM lista pacotes e licenças. O que auditores não devem concluir só do inventário?

1. Pode apoiar revisão de componentes

   Revisão de componentes é uso válido.

2. Descreve dependências registradas no momento da exportação

   A exportação é um retrato de dependências.

3. Certifica que todo componente listado está livre de vulnerabilidades **[CORRECT]**

   Inventário não é certificação de segurança.

4. Pode ser processada por outras ferramentas

   Inventários legíveis por máquina apoiam ferramentas posteriores.

**Concept:** Limites da garantia de SBOM

**Authored coaching hints:**

- Identificar um componente prova sua segurança?
- Qual contexto adicional de vulnerabilidades e uso é necessário?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom>

<!-- certification-coach-question:ghas-supply-024:4ece6eed0cd580166dcfd4c8d1576a6dbb251a449b64963d43197f98c5b0f2e2 -->
## Question 104: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-024`

**Content revision:** `4ece6eed0cd580166dcfd4c8d1576a6dbb251a449b64963d43197f98c5b0f2e2`

### English

Does the dependency graph's exported SBOM include all other projects that depend on this repository?

1. Yes; every private dependent is included

   The SBOM does not enumerate all private dependents.

2. Yes; it includes only dependents and no dependencies

   Its focus is the project's dependencies.

3. Yes; it lists every GitHub organization

   Organizations are not the component inventory.

4. No; it inventories dependencies, not dependents **[CORRECT]**

   Dependencies are included; projects relying on this project are not.

**Concept:** SBOM dependencies versus dependents

**Authored coaching hints:**

- Which direction do the graph relationships point?
- Is the inventory about what this project uses or who uses it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿La SBOM exportada del gráfico de dependencias incluye todos los demás proyectos que dependen de este repositorio?

1. Sí; incluye todos los dependientes privados

   La SBOM no enumera todos los dependientes privados.

2. Sí; solo incluye dependientes, no dependencias

   Se centra en las dependencias del proyecto.

3. Sí; enumera todas las organizaciones de GitHub

   Las organizaciones no son el inventario de componentes.

4. No; inventaría dependencias, no dependientes **[CORRECT]**

   Incluye dependencias, no proyectos que usan este proyecto.

**Concept:** Dependencias frente a dependientes en SBOM

**Authored coaching hints:**

- ¿En qué dirección apuntan las relaciones del gráfico?
- ¿El inventario trata lo que usa este proyecto o quién lo usa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A SBOM exportada do grafo inclui todos os outros projetos que dependem deste repositório?

1. Sim; inclui todos os dependentes privados

   A SBOM não enumera todos os dependentes privados.

2. Sim; inclui só dependentes e nenhuma dependência

   O foco são as dependências do projeto.

3. Sim; lista todas as organizações do GitHub

   Organizações não são o inventário de componentes.

4. Não; inventaria dependências, não dependentes **[CORRECT]**

   Inclui dependências, não projetos que usam este projeto.

**Concept:** Dependências versus dependentes na SBOM

**Authored coaching hints:**

- Para qual direção apontam as relações do grafo?
- O inventário trata do que este projeto usa ou de quem o usa?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom>

<!-- certification-coach-question:ghas-supply-025:75a08e56000945ce4123de17f989be9c05907a92753815abcc88cb6d38d6c478 -->
## Question 105: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-025`

**Content revision:** `75a08e56000945ce4123de17f989be9c05907a92753815abcc88cb6d38d6c478`

### English

An update cannot be merged immediately because it breaks a critical integration. What is the best response to the valid dependency vulnerability?

1. Document the risk and mitigation, assign upgrade work, and reassess the exception **[CORRECT]**

   A documented exception and owned remediation preserve accountability.

2. Call it a false positive solely because upgrading is difficult

   Upgrade difficulty does not invalidate the finding.

3. Assume closing the update pull request removes the vulnerability

   Closing a proposal leaves the current vulnerable version.

4. Disable the graph for the whole organization

   Disabling inventory hides unrelated risk.

**Concept:** Dependency exception management

**Authored coaching hints:**

- Is the risk invalid or temporarily unresolved?
- What makes an exception reviewable rather than forgotten?

<details>
<summary>Español — same answer key and option order</summary>

### Español

No se puede fusionar inmediatamente una actualización porque rompe una integración crítica. ¿Cuál es la mejor respuesta ante la vulnerabilidad válida de dependencia?

1. Documentar riesgo y mitigación, asignar el trabajo de actualización y reevaluar la excepción **[CORRECT]**

   Una excepción documentada y remediación con responsable preservan rendición de cuentas.

2. Llamarla falso positivo solo porque actualizar es difícil

   La dificultad de actualizar no invalida el hallazgo.

3. Suponer que cerrar el pull request elimina la vulnerabilidad

   Cerrar una propuesta deja la versión vulnerable actual.

4. Desactivar el gráfico en toda la organización

   Desactivar el inventario oculta riesgos no relacionados.

**Concept:** Gestión de excepciones de dependencias

**Authored coaching hints:**

- ¿El riesgo es inválido o está temporalmente sin resolver?
- ¿Qué hace revisable una excepción en vez de olvidada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma atualização não pode ser integrada imediatamente porque quebra uma integração crítica. Qual é a melhor resposta à vulnerabilidade válida de dependência?

1. Documentar risco e mitigação, atribuir o trabalho de atualização e reavaliar a exceção **[CORRECT]**

   Uma exceção documentada e remediação com responsável preservam a responsabilização.

2. Chamá-la de falso positivo só porque atualizar é difícil

   Dificuldade de atualizar não invalida o resultado.

3. Supor que fechar o pull request remove a vulnerabilidade

   Fechar uma proposta mantém a versão vulnerável atual.

4. Desativar o grafo em toda a organização

   Desativar inventário oculta riscos não relacionados.

**Concept:** Gestão de exceções de dependências

**Authored coaching hints:**

- O risco é inválido ou está temporariamente não resolvido?
- O que torna uma exceção revisável em vez de esquecida?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts>

<!-- certification-coach-question:ghas-supply-026:d6fab3d4011e07a1eb345665a8cde0e1482b3371fbb0b52c455103a0381ae0fb -->
## Question 106: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-026`

**Content revision:** `d6fab3d4011e07a1eb345665a8cde0e1482b3371fbb0b52c455103a0381ae0fb`

### English

A dependency is used only during development. Why should the team avoid automatically treating every vulnerability in it as harmless?

1. Development packages cannot read files

   Development tools can read repository and environment data.

2. Build and test tools may access source, credentials, or publishing paths **[CORRECT]**

   Development environments can contain sensitive resources and privileged workflows.

3. All development dependencies ship to production unchanged

   Production packaging depends on the project.

4. Development scope makes every advisory a false positive

   Scope informs risk but does not nullify every vulnerability.

**Concept:** Development dependency context

**Authored coaching hints:**

- What privileges does the build environment have?
- Can a nonproduction tool influence release integrity?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una dependencia solo se usa durante desarrollo. ¿Por qué no considerar automáticamente inofensivas todas sus vulnerabilidades?

1. Los paquetes de desarrollo no pueden leer archivos

   Las herramientas de desarrollo pueden leer datos del repositorio y entorno.

2. Las herramientas de compilación y pruebas pueden acceder a código, credenciales o rutas de publicación **[CORRECT]**

   Los entornos de desarrollo pueden contener recursos sensibles y flujos privilegiados.

3. Todas las dependencias de desarrollo llegan a producción sin cambios

   El empaquetado de producción depende del proyecto.

4. El alcance de desarrollo vuelve falso positivo cualquier aviso

   El alcance informa el riesgo, pero no anula toda vulnerabilidad.

**Concept:** Contexto de dependencias de desarrollo

**Authored coaching hints:**

- ¿Qué privilegios tiene el entorno de compilación?
- ¿Una herramienta no productiva puede influir en la integridad de una publicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma dependência só é usada no desenvolvimento. Por que não tratar automaticamente toda vulnerabilidade nela como inofensiva?

1. Pacotes de desenvolvimento não leem arquivos

   Ferramentas de desenvolvimento leem dados do repositório e do ambiente.

2. Ferramentas de build e teste podem acessar código, credenciais ou caminhos de publicação **[CORRECT]**

   Ambientes de desenvolvimento podem conter recursos sensíveis e workflows privilegiados.

3. Todas as dependências de desenvolvimento chegam à produção inalteradas

   O empacotamento de produção depende do projeto.

4. Escopo de desenvolvimento torna todo comunicado falso positivo

   O escopo informa o risco, mas não anula toda vulnerabilidade.

**Concept:** Contexto de dependências de desenvolvimento

**Authored coaching hints:**

- Quais privilégios o ambiente de build tem?
- Uma ferramenta fora de produção pode influenciar a integridade da release?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-027:f20d8f68863091252cd17a0585d6e11bfbcef30d988a9815c209b9f53bd5cd80 -->
## Question 107: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-027`

**Content revision:** `f20d8f68863091252cd17a0585d6e11bfbcef30d988a9815c209b9f53bd5cd80`

### English

A patched package version is available, but the application's lockfile still resolves the vulnerable version. What should the maintainer verify before claiming remediation?

1. Only that the patched release exists upstream

   An upstream fix does not change this application's installed dependency.

2. Only that the manifest's allowed range includes the patched release

   An allowed range can still resolve to an old lockfile version.

3. The resolved dependency versions actually changed to safe versions **[CORRECT]**

   The effective dependency resolution must remove affected versions.

4. Only that a security-update pull request has been opened

   An open proposal has not necessarily changed the effective dependency state.

**Concept:** Effective dependency remediation

**Authored coaching hints:**

- What does the application actually install?
- Which evidence describes a proposed fix versus an applied one?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Hay una versión corregida disponible, pero el archivo de bloqueo aún resuelve la versión vulnerable. ¿Qué verificar antes de afirmar remediación?

1. Solo que exista la versión corregida en el proyecto original

   Una corrección en origen no cambia la dependencia instalada aquí.

2. Solo que el rango permitido del manifiesto incluya la versión corregida

   Un rango permitido aún puede resolver a una versión antigua del archivo de bloqueo.

3. Que las versiones resueltas efectivamente cambiaron a versiones seguras **[CORRECT]**

   La resolución efectiva debe eliminar las versiones afectadas.

4. Solo que se abrió un pull request de seguridad

   Una propuesta abierta no necesariamente cambió el estado efectivo.

**Concept:** Remediación efectiva de dependencias

**Authored coaching hints:**

- ¿Qué instala realmente la aplicación?
- ¿Qué evidencia describe una propuesta frente a una corrección aplicada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Existe uma versão corrigida, mas o arquivo de lock ainda resolve a vulnerável. O que verificar antes de afirmar remediação?

1. Só que a versão corrigida existe no projeto de origem

   Uma correção na origem não altera a dependência instalada aqui.

2. Só que a faixa permitida no manifesto inclui a versão corrigida

   Uma faixa permitida ainda pode resolver para uma versão antiga do lock.

3. Que as versões resolvidas realmente mudaram para versões seguras **[CORRECT]**

   A resolução efetiva precisa remover versões afetadas.

4. Só que foi aberto um pull request de segurança

   Uma proposta aberta não necessariamente alterou o estado efetivo.

**Concept:** Remediação efetiva de dependências

**Authored coaching hints:**

- O que a aplicação realmente instala?
- Qual evidência descreve uma proposta versus uma correção aplicada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-supply-028:6009ba57400aadb9227ab233797210b2e57c1d8f4aaa90a7f9f408e051242d85 -->
## Question 108: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-028`

**Content revision:** `6009ba57400aadb9227ab233797210b2e57c1d8f4aaa90a7f9f408e051242d85`

### English

How does dependency review complement existing Dependabot alerts?

1. It prevents all future disclosures

   No review can prevent future advisory discoveries.

2. It replaces the need for a dependency graph

   Dependency review uses graph data.

3. It revokes leaked package-registry tokens

   Credential revocation is a separate response.

4. It evaluates proposed dependency changes before they become established default-branch risk **[CORRECT]**

   Change-time review complements monitoring of existing dependencies.

**Concept:** Preventing versus detecting dependency risk

**Authored coaching hints:**

- Which tool sees proposed changes?
- Which tool monitors dependencies already present?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo complementa la revisión de dependencias las alertas existentes de Dependabot?

1. Impide toda divulgación futura

   Ninguna revisión evita futuros descubrimientos de avisos.

2. Reemplaza la necesidad del gráfico de dependencias

   La revisión usa datos del gráfico.

3. Revoca tokens filtrados de registros de paquetes

   Revocar credenciales es otra respuesta.

4. Evalúa cambios propuestos antes de que sean riesgo establecido en la rama predeterminada **[CORRECT]**

   Revisar al cambiar complementa el monitoreo de dependencias existentes.

**Concept:** Prevenir frente a detectar riesgo de dependencias

**Authored coaching hints:**

- ¿Qué herramienta ve cambios propuestos?
- ¿Qué herramienta monitorea dependencias ya presentes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como a revisão de dependências complementa alertas existentes do Dependabot?

1. Impede toda divulgação futura

   Nenhuma revisão impede futuras descobertas de comunicados.

2. Substitui a necessidade do grafo

   A revisão usa dados do grafo.

3. Revoga tokens vazados de registros de pacotes

   Revogar credenciais é uma resposta separada.

4. Avalia mudanças propostas antes de virarem risco estabelecido na branch padrão **[CORRECT]**

   Revisão no momento da mudança complementa monitoramento de dependências existentes.

**Concept:** Prevenir versus detectar risco de dependências

**Authored coaching hints:**

- Qual ferramenta vê mudanças propostas?
- Qual monitora dependências já presentes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-supply-029:7c367c5eb18e64eb005e527ec4a09cd9f29ffa866a72c99f73a1bbb896ed08f8 -->
## Question 109: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-029`

**Content revision:** `7c367c5eb18e64eb005e527ec4a09cd9f29ffa866a72c99f73a1bbb896ed08f8`

### English

A repository uses several package managers. Which is the safest configuration assumption for Dependabot?

1. Verify support and configure the relevant ecosystem and directories for each **[CORRECT]**

   Support and configuration are ecosystem-specific.

2. One arbitrary ecosystem entry covers every package manager

   One ecosystem entry does not describe unrelated managers.

3. CodeQL language detection configures all package updates

   CodeQL and Dependabot have distinct configuration.

4. The repository name determines the update ecosystem

   Repository names do not define package-manager support.

**Concept:** Multi-ecosystem update configuration

**Authored coaching hints:**

- How are manifests parsed?
- Does support for one manager imply support for another?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio usa varios gestores de paquetes. ¿Cuál es la suposición de configuración más segura para Dependabot?

1. Verificar compatibilidad y configurar ecosistema y directorios pertinentes para cada uno **[CORRECT]**

   La compatibilidad y configuración son específicas por ecosistema.

2. Una entrada de ecosistema arbitraria cubre todos los gestores

   Una entrada no describe gestores no relacionados.

3. La detección de lenguajes de CodeQL configura todas las actualizaciones

   CodeQL y Dependabot tienen configuraciones distintas.

4. El nombre del repositorio determina el ecosistema

   Los nombres de repositorios no definen compatibilidad de gestores.

**Concept:** Configuración de actualizaciones multiecosistema

**Authored coaching hints:**

- ¿Cómo se interpretan los manifiestos?
- ¿Compatibilidad con un gestor implica compatibilidad con otro?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório usa vários gerenciadores de pacotes. Qual pressuposto de configuração é mais seguro para o Dependabot?

1. Verificar suporte e configurar ecossistema e diretórios relevantes para cada um **[CORRECT]**

   Suporte e configuração são específicos por ecossistema.

2. Uma entrada arbitrária de ecossistema cobre todos os gerenciadores

   Uma entrada não descreve gerenciadores não relacionados.

3. A detecção de linguagens do CodeQL configura todas as atualizações

   CodeQL e Dependabot têm configurações distintas.

4. O nome do repositório determina o ecossistema

   Nomes de repositórios não definem suporte a gerenciadores.

**Concept:** Configuração de atualizações multiecossistema

**Authored coaching hints:**

- Como os manifestos são interpretados?
- Suporte a um gerenciador implica suporte a outro?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference>

<!-- certification-coach-question:ghas-supply-030:c68da8db33c129bf09b50baf1d84fc78b57d82518692146ce7cf21ca6522e04f -->
## Question 110: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-030`

**Content revision:** `c68da8db33c129bf09b50baf1d84fc78b57d82518692146ce7cf21ca6522e04f`

### English

A team wants updates to workflow action references, not just application packages. Which Dependabot configuration area is relevant?

1. The secret-scanning generic-pattern option

   Generic secret patterns detect credentials.

2. The github-actions package ecosystem **[CORRECT]**

   Dependabot supports updating action and reusable-workflow references.

3. The code-scanning SARIF category

   SARIF categories separate analysis results.

4. A security-advisory collaborator list

   Collaborator lists do not schedule workflow dependency updates.

**Concept:** Workflow dependency maintenance

**Authored coaching hints:**

- Are action references also dependencies?
- Which ecosystem describes workflow usage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere actualizar referencias a acciones de flujos, no solo paquetes de la aplicación. ¿Qué área de Dependabot corresponde?

1. La opción de patrones genéricos de secretos

   Los patrones genéricos detectan credenciales.

2. El ecosistema de paquetes github-actions **[CORRECT]**

   Dependabot admite actualizar referencias a acciones y flujos reutilizables.

3. La categoría SARIF del análisis de código

   Las categorías SARIF separan resultados de análisis.

4. Una lista de colaboradores de aviso de seguridad

   Las listas de colaboradores no programan actualizaciones de dependencias de flujos.

**Concept:** Mantenimiento de dependencias de flujos

**Authored coaching hints:**

- ¿Las referencias a acciones también son dependencias?
- ¿Qué ecosistema describe el uso en flujos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer atualizar referências a ações dos workflows, não apenas pacotes da aplicação. Qual área do Dependabot é relevante?

1. A opção de padrões genéricos de segredos

   Padrões genéricos detectam credenciais.

2. O ecossistema de pacotes github-actions **[CORRECT]**

   Dependabot atualiza referências a ações e workflows reutilizáveis.

3. A categoria SARIF da varredura de código

   Categorias SARIF separam resultados de análise.

4. Uma lista de colaboradores de comunicado de segurança

   Listas de colaboradores não agendam atualizações de dependências de workflows.

**Concept:** Manutenção de dependências de workflows

**Authored coaching hints:**

- Referências a ações também são dependências?
- Qual ecossistema descreve o uso em workflows?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates>

<!-- certification-coach-question:ghas-supply-031:8c7cd896f3e47047793d78ff09024bb9d8edc51ad93bf0cccbac0da1747a205b -->
## Question 111: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-031`

**Content revision:** `8c7cd896f3e47047793d78ff09024bb9d8edc51ad93bf0cccbac0da1747a205b`

### English

A developer configures a version-update ignore rule and assumes matching vulnerability alerts will disappear. What is the correct distinction?

1. Ignore rules revoke vulnerable package versions

   Ignore rules do not alter package validity or vulnerabilities.

2. Version configuration controls every alert's existence

   Alerts and update automation are separate concerns.

3. Update pull-request configuration is not a general filter suppressing Dependabot alerts **[CORRECT]**

   dependabot.yml update behavior does not generally determine which vulnerability alerts exist.

4. Ignoring a package proves it is safe

   Ignoring a package is a maintenance decision, not a safety finding.

**Concept:** Update settings versus alert generation

**Authored coaching hints:**

- Is the setting about proposing changes or detecting risk?
- What data source creates the alert?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador configura ignore para actualizaciones de versiones y supone que desaparecerán las alertas de vulnerabilidades coincidentes. ¿Cuál es la distinción correcta?

1. Las reglas ignore revocan versiones vulnerables

   ignore no altera la validez ni las vulnerabilidades de paquetes.

2. La configuración de versiones controla la existencia de toda alerta

   Las alertas y la automatización de actualizaciones son asuntos separados.

3. La configuración de pull requests de actualización no es un filtro general que suprima alertas de Dependabot **[CORRECT]**

   El comportamiento de dependabot.yml generalmente no determina qué alertas existen.

4. Ignorar un paquete demuestra que es seguro

   Ignorar es una decisión de mantenimiento, no un hallazgo de seguridad.

**Concept:** Ajustes de actualización frente a generación de alertas

**Authored coaching hints:**

- ¿El ajuste propone cambios o detecta riesgo?
- ¿Qué fuente de datos crea la alerta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor configura ignore para atualizações de versão e presume que alertas de vulnerabilidades correspondentes desaparecerão. Qual distinção é correta?

1. Regras ignore revogam versões vulneráveis

   ignore não altera validade nem vulnerabilidades de pacotes.

2. A configuração de versões controla a existência de todo alerta

   Alertas e automação de atualizações são questões separadas.

3. A configuração de pull requests de atualização não é filtro geral que suprime alertas do Dependabot **[CORRECT]**

   O comportamento de dependabot.yml em geral não determina quais alertas existem.

4. Ignorar um pacote prova que é seguro

   Ignorar é decisão de manutenção, não conclusão de segurança.

**Concept:** Ajustes de atualização versus geração de alertas

**Authored coaching hints:**

- O ajuste trata de propor mudanças ou detectar risco?
- Qual fonte de dados cria o alerta?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-032:b443a85e6e51a5640375f4ca90759e1947a40cee9428fbcbac1987ba60c63f42 -->
## Question 112: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-032`

**Content revision:** `b443a85e6e51a5640375f4ca90759e1947a40cee9428fbcbac1987ba60c63f42`

### English

What should maintainers review before merging a Dependabot security-update pull request?

1. Only whether the branch name starts with dependabot

   A branch prefix does not prove correctness.

2. Only whether the package has many users

   Popularity is not compatibility validation.

3. Only whether the alert is old

   Age does not establish that the update is safe.

4. Tests, relevant release notes, and whether the resolved version addresses the vulnerability **[CORRECT]**

   Review should verify remediation and application compatibility.

**Concept:** Reviewing automated updates

**Authored coaching hints:**

- Which evidence shows security improvement?
- Which evidence shows the application still works?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué deben revisar los mantenedores antes de fusionar un pull request de actualización de seguridad de Dependabot?

1. Solo si la rama empieza por dependabot

   El prefijo de rama no prueba corrección.

2. Solo si el paquete tiene muchos usuarios

   La popularidad no valida compatibilidad.

3. Solo si la alerta es antigua

   La antigüedad no establece que la actualización sea segura.

4. Pruebas, notas de versión pertinentes y si la versión resuelta corrige la vulnerabilidad **[CORRECT]**

   La revisión debe verificar remediación y compatibilidad de la aplicación.

**Concept:** Revisión de actualizaciones automáticas

**Authored coaching hints:**

- ¿Qué evidencia muestra mejora de seguridad?
- ¿Qué evidencia muestra que la aplicación sigue funcionando?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que mantenedores devem revisar antes do merge de um pull request de segurança do Dependabot?

1. Só se a branch começa com dependabot

   Um prefixo de branch não prova correção.

2. Só se o pacote tem muitos usuários

   Popularidade não valida compatibilidade.

3. Só se o alerta é antigo

   Idade não estabelece que a atualização é segura.

4. Testes, notas de versão relevantes e se a versão resolvida corrige a vulnerabilidade **[CORRECT]**

   A revisão deve verificar remediação e compatibilidade da aplicação.

**Concept:** Revisão de atualizações automatizadas

**Authored coaching hints:**

- Qual evidência mostra melhoria de segurança?
- Qual mostra que a aplicação continua funcionando?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates>

<!-- certification-coach-question:ghas-supply-033:3ae441566b50927ffc68f13eb604e96fdba0d1047b855f941b4544f00eb97a3d -->
## Question 113: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-033`

**Content revision:** `3ae441566b50927ffc68f13eb604e96fdba0d1047b855f941b4544f00eb97a3d`

### English

A maintainer wants fewer routine update pull requests for a set of related libraries. Which option is more appropriate than disabling version updates?

1. Define suitable update groups in dependabot.yml **[CORRECT]**

   Groups consolidate related update work while keeping automation.

2. Turn off the dependency graph

   Disabling inventory removes useful security information.

3. Mark all advisories as false positives

   Advisory classification should reflect validity, not workload.

4. Replace dependency review with secret scanning

   Secret scanning does not maintain package versions.

**Concept:** Routine update workload management

**Authored coaching hints:**

- Can review units be combined without suppressing updates?
- Which configuration changes pull-request granularity?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora quiere menos pull requests rutinarios para bibliotecas relacionadas. ¿Qué conviene más que desactivar actualizaciones de versiones?

1. Definir grupos adecuados de actualización en dependabot.yml **[CORRECT]**

   Los grupos consolidan trabajo relacionado conservando automatización.

2. Desactivar el gráfico de dependencias

   Desactivar inventario elimina información útil de seguridad.

3. Marcar todos los avisos como falsos positivos

   La clasificación de avisos debe reflejar validez, no carga de trabajo.

4. Reemplazar la revisión de dependencias por análisis de secretos

   El análisis de secretos no mantiene versiones de paquetes.

**Concept:** Gestión de carga de actualizaciones rutinarias

**Authored coaching hints:**

- ¿Se pueden combinar unidades de revisión sin suprimir actualizaciones?
- ¿Qué configuración cambia la granularidad de pull requests?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora quer menos pull requests rotineiros de bibliotecas relacionadas. Qual opção é melhor que desativar atualizações de versão?

1. Definir grupos adequados em dependabot.yml **[CORRECT]**

   Grupos consolidam trabalho relacionado mantendo automação.

2. Desativar o grafo de dependências

   Desativar inventário remove informação útil de segurança.

3. Marcar todos os comunicados como falsos positivos

   A classificação deve refletir validade, não carga de trabalho.

4. Substituir revisão de dependências por verificação de segredos

   Verificação de segredos não mantém versões de pacotes.

**Concept:** Gestão da carga de atualizações rotineiras

**Authored coaching hints:**

- Unidades de revisão podem ser combinadas sem suprimir atualizações?
- Qual configuração muda a granularidade dos pull requests?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference>

<!-- certification-coach-question:ghas-supply-034:7f449962bfc82e2779c19a65c4272e9c8a7b17a6cf4c3e1a2c66a9a79fe610e6 -->
## Question 114: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-034`

**Content revision:** `7f449962bfc82e2779c19a65c4272e9c8a7b17a6cf4c3e1a2c66a9a79fe610e6`

### English

A known-vulnerable library has no patched release. What should the application team do?

1. Assume no alert means no risk

   The scenario contains a valid known vulnerability.

2. Evaluate mitigation, removal, or replacement while tracking the upstream fix **[CORRECT]**

   Risk can require compensating action when no upgrade exists.

3. Fabricate a safe version in the lockfile

   An invented version cannot establish a valid safe dependency.

4. Dismiss it as fixed because no update is available

   Lack of a patch is not remediation.

**Concept:** Unpatched dependency response

**Authored coaching hints:**

- Is an upgrade the only way to reduce exposure?
- What application behavior depends on the vulnerable component?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una biblioteca con vulnerabilidad conocida no tiene versión corregida. ¿Qué debe hacer el equipo?

1. Suponer que sin alerta no hay riesgo

   El escenario contiene una vulnerabilidad conocida válida.

2. Evaluar mitigación, eliminación o reemplazo mientras rastrea la corrección en origen **[CORRECT]**

   El riesgo puede exigir medidas compensatorias sin una actualización.

3. Inventar una versión segura en el archivo de bloqueo

   Una versión inventada no establece una dependencia segura válida.

4. Descartarla como corregida porque no hay actualización

   La falta de corrección no es remediación.

**Concept:** Respuesta a dependencias sin corrección

**Authored coaching hints:**

- ¿Actualizar es la única forma de reducir exposición?
- ¿Qué comportamiento depende del componente vulnerable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma biblioteca com vulnerabilidade conhecida não tem versão corrigida. O que a equipe deve fazer?

1. Supor que sem alerta não há risco

   O cenário contém uma vulnerabilidade conhecida válida.

2. Avaliar mitigação, remoção ou substituição enquanto acompanha a correção na origem **[CORRECT]**

   O risco pode exigir medidas compensatórias sem atualização.

3. Inventar uma versão segura no arquivo de lock

   Uma versão inventada não estabelece dependência segura válida.

4. Descartar como corrigida porque não há atualização

   Ausência de correção não é remediação.

**Concept:** Resposta a dependência sem correção

**Authored coaching hints:**

- Atualizar é a única forma de reduzir exposição?
- Qual comportamento depende do componente vulnerável?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts>

<!-- certification-coach-question:ghas-supply-035:63cece432db0d175bd588f6f1693097f64fd21593f6688cbd2f18988ce0dd2a1 -->
## Question 115: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-035`

**Content revision:** `63cece432db0d175bd588f6f1693097f64fd21593f6688cbd2f18988ce0dd2a1`

### English

Which graph information helps a reviewer distinguish a direct dependency from an indirect one?

1. The package's security severity alone

   Severity describes vulnerability impact, not how the package entered the graph.

2. The package's license alone

   License terms do not establish declaration relationships.

3. The dependency relationship and its introducing path **[CORRECT]**

   Graph relationships and paths explain direct versus transitive inclusion.

4. The package's release date alone

   A release date does not identify the dependency chain.

**Concept:** Direct versus transitive classification

**Authored coaching hints:**

- Which metadata expresses a relationship rather than a package property?
- What chain links the component to the application's manifest?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué información del gráfico permite distinguir una dependencia directa de una indirecta?

1. Solo su gravedad de seguridad

   La gravedad describe impacto, no cómo entró al gráfico.

2. Solo su licencia

   La licencia no establece relaciones de declaración.

3. La relación de dependencia y la ruta que la introduce **[CORRECT]**

   Las relaciones y rutas explican inclusión directa o transitiva.

4. Solo su fecha de publicación

   Una fecha no identifica la cadena de dependencias.

**Concept:** Clasificación directa frente a transitiva

**Authored coaching hints:**

- ¿Qué metadato expresa una relación y no una propiedad del paquete?
- ¿Qué cadena conecta el componente con el manifiesto de la aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual informação do grafo distingue uma dependência direta de uma indireta?

1. Só sua severidade de segurança

   Severidade descreve impacto, não como o pacote entrou no grafo.

2. Só sua licença

   Licença não estabelece relações de declaração.

3. A relação de dependência e o caminho que a introduz **[CORRECT]**

   Relações e caminhos explicam inclusão direta ou transitiva.

4. Só sua data de lançamento

   Uma data não identifica a cadeia de dependências.

**Concept:** Classificação direta versus transitiva

**Authored coaching hints:**

- Qual metadado expressa uma relação, não uma propriedade do pacote?
- Qual cadeia liga o componente ao manifesto da aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-supply-036:23d6d154a786525114b290946a534a2bcee0f62bd0287ef6f0acd68b1d10688b -->
## Question 116: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-036`

**Content revision:** `23d6d154a786525114b290946a534a2bcee0f62bd0287ef6f0acd68b1d10688b`

### English

A policy owner proposes automatically dismissing every low-severity alert across all packages. What is the strongest review concern?

1. Auto-triage can never use severity

   Severity can be a rule criterion.

2. Dismissal always uninstalls packages

   Dismissal changes tracking rather than installation.

3. Rules cannot be reviewed later

   Auto-dismissed alerts remain reviewable.

4. A broad rule can hide contextually important risks and needs targeted criteria and oversight **[CORRECT]**

   Context and targeted policy reduce unintended risk acceptance.

**Concept:** Safe triage rule design

**Authored coaching hints:**

- Can the same severity have different impact in different environments?
- How will the team detect inappropriate automatic decisions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se propone descartar automáticamente toda alerta de gravedad baja en todos los paquetes. ¿Cuál es la preocupación más sólida?

1. La clasificación automática nunca puede usar gravedad

   La gravedad puede ser un criterio.

2. Descartar siempre desinstala paquetes

   Descartar cambia el seguimiento, no la instalación.

3. Las reglas no se pueden revisar después

   Las alertas descartadas siguen siendo revisables.

4. Una regla amplia puede ocultar riesgos importantes según el contexto y requiere criterios específicos y supervisión **[CORRECT]**

   El contexto y políticas específicas reducen la aceptación involuntaria de riesgo.

**Concept:** Diseño seguro de reglas de clasificación

**Authored coaching hints:**

- ¿La misma gravedad puede tener impacto distinto en diferentes entornos?
- ¿Cómo detectará el equipo decisiones automáticas inadecuadas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Propõe-se descartar automaticamente todo alerta de baixa severidade em todos os pacotes. Qual é a preocupação mais forte?

1. Triagem automática nunca pode usar severidade

   Severidade pode ser um critério.

2. Descarte sempre desinstala pacotes

   Descarte muda acompanhamento, não instalação.

3. Regras não podem ser revisadas depois

   Alertas descartados continuam revisáveis.

4. Uma regra ampla pode ocultar riscos importantes no contexto e exige critérios específicos e supervisão **[CORRECT]**

   Contexto e políticas específicas reduzem aceitação involuntária de risco.

**Concept:** Projeto seguro de regras de triagem

**Authored coaching hints:**

- A mesma severidade pode ter impacto distinto em ambientes diferentes?
- Como a equipe detectará decisões automáticas inadequadas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-supply-037:6d74a0ff1c7460bbad084bd9c5baed071a9f78cf2f1df70d3af3dd5fde4cd96d -->
## Question 117: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-037`

**Content revision:** `6d74a0ff1c7460bbad084bd9c5baed071a9f78cf2f1df70d3af3dd5fde4cd96d`

### English

A newly exported SBOM is requested after a dependency upgrade. Why not reuse last month's export as proof of the current inventory?

1. An SBOM reflects a particular dependency state and may become stale **[CORRECT]**

   A prior snapshot may not describe newly resolved dependencies.

2. SBOM files automatically mutate whenever code changes

   Downloaded exports do not automatically track repository changes.

3. All package inventories are permanently identical

   Inventories change with dependency updates.

4. Exporting again invalidates the repository's licenses

   Exporting does not alter license terms.

**Concept:** SBOM snapshot freshness

**Authored coaching hints:**

- Which repository state did the earlier export represent?
- What changed since that artifact was generated?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se solicita una SBOM nueva tras actualizar dependencias. ¿Por qué no reutilizar la del mes pasado como prueba del inventario actual?

1. Una SBOM refleja un estado concreto y puede quedar obsoleta **[CORRECT]**

   Una instantánea anterior puede no describir dependencias recién resueltas.

2. Los archivos SBOM se modifican solos cuando cambia el código

   Las exportaciones descargadas no siguen automáticamente los cambios.

3. Todos los inventarios de paquetes son idénticos para siempre

   Los inventarios cambian con las actualizaciones.

4. Exportar de nuevo invalida las licencias del repositorio

   Exportar no modifica los términos de licencia.

**Concept:** Vigencia de instantáneas SBOM

**Authored coaching hints:**

- ¿Qué estado representaba la exportación anterior?
- ¿Qué cambió desde que se generó ese artefacto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma nova SBOM é solicitada após atualizar dependências. Por que não reutilizar a do mês passado como prova do inventário atual?

1. Uma SBOM reflete um estado específico e pode ficar desatualizada **[CORRECT]**

   Um retrato anterior pode não descrever dependências recém-resolvidas.

2. Arquivos SBOM mudam automaticamente com o código

   Exportações baixadas não acompanham mudanças automaticamente.

3. Todos os inventários de pacotes são idênticos para sempre

   Inventários mudam com atualizações.

4. Exportar novamente invalida as licenças

   Exportar não altera termos de licença.

**Concept:** Atualidade do retrato SBOM

**Authored coaching hints:**

- Qual estado a exportação anterior representava?
- O que mudou desde a geração do artefato?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom>

<!-- certification-coach-question:ghas-supply-038:9b49662e8b7d9a76cec5cd93976c3b055278c17480b782dbec5925b6a805b825 -->
## Question 118: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-038`

**Content revision:** `9b49662e8b7d9a76cec5cd93976c3b055278c17480b782dbec5925b6a805b825`

### English

A team sees no security-update pull request for an open dependency alert. What is the best initial investigation?

1. Assume the advisory is invalid

   Missing automation does not disprove a vulnerability.

2. Check patch availability, supported update inputs, and update errors **[CORRECT]**

   Automation depends on available fixes and the ability to resolve and edit dependencies.

3. Close the alert because automation is silent

   Silence is not evidence of remediation.

4. Turn on a random CodeQL language

   CodeQL language selection does not repair dependency update resolution.

**Concept:** Security update troubleshooting

**Authored coaching hints:**

- What must an updater know and be able to change?
- Is there a patched version it can resolve?

<details>
<summary>Español — same answer key and option order</summary>

### Español

No hay pull request de seguridad para una alerta de dependencia abierta. ¿Cuál es la mejor investigación inicial?

1. Suponer inválido el aviso

   La ausencia de automatización no refuta una vulnerabilidad.

2. Comprobar disponibilidad de corrección, entradas compatibles y errores de actualización **[CORRECT]**

   La automatización depende de correcciones disponibles y de resolver y editar dependencias.

3. Cerrar la alerta porque la automatización no responde

   El silencio no demuestra remediación.

4. Activar un lenguaje de CodeQL al azar

   Seleccionar lenguaje de CodeQL no repara la resolución de actualizaciones.

**Concept:** Diagnóstico de actualizaciones de seguridad

**Authored coaching hints:**

- ¿Qué debe saber y poder cambiar un actualizador?
- ¿Hay una versión corregida que pueda resolver?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Não há pull request de segurança para um alerta aberto de dependência. Qual é a melhor investigação inicial?

1. Supor que o comunicado é inválido

   Falta de automação não refuta uma vulnerabilidade.

2. Verificar disponibilidade de correção, entradas compatíveis e erros de atualização **[CORRECT]**

   A automação depende de correções disponíveis e da capacidade de resolver e editar dependências.

3. Fechar o alerta porque a automação está silenciosa

   Silêncio não prova remediação.

4. Ativar uma linguagem aleatória do CodeQL

   Selecionar linguagem do CodeQL não corrige resolução de atualizações.

**Concept:** Diagnóstico de atualizações de segurança

**Authored coaching hints:**

- O que um atualizador precisa saber e poder mudar?
- Existe uma versão corrigida que ele possa resolver?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates>

<!-- certification-coach-question:ghas-supply-039:de6c9bf161d34b8d5efcf2625d42b3dab16c1d62bf1aa4898e445cd628bb4bbc -->
## Question 119: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-039`

**Content revision:** `de6c9bf161d34b8d5efcf2625d42b3dab16c1d62bf1aa4898e445cd628bb4bbc`

### English

A dependency graph entry lists a vulnerable transitive package under two different direct libraries. What should remediation verify?

1. Upgrading one parent necessarily changes the other's nested resolution

   Independent parent constraints can retain another vulnerable copy.

2. Every occurrence of a package name always resolves to one shared version

   Package managers can retain multiple versions of the same package.

3. All affected resolution paths are addressed rather than only one parent **[CORRECT]**

   Multiple parent paths can retain an affected version independently.

4. Only directly declared packages need vulnerability remediation

   Indirect packages can also be affected and reachable.

**Concept:** Multiple transitive paths

**Authored coaching hints:**

- Could one parent still install the vulnerable version?
- What does the full graph show after the change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El gráfico muestra un paquete transitivo vulnerable bajo dos bibliotecas directas. ¿Qué debe verificar la remediación?

1. Actualizar un padre necesariamente cambia la resolución anidada del otro

   Las restricciones de padres independientes pueden conservar otra copia vulnerable.

2. Cada nombre de paquete siempre resuelve a una versión compartida

   Los gestores pueden conservar varias versiones del mismo paquete.

3. Se atienden todas las rutas de resolución afectadas y no solo un padre **[CORRECT]**

   Varias rutas padre pueden retener una versión afectada de forma independiente.

4. Solo los paquetes declarados directamente requieren remediación

   Los paquetes indirectos también pueden estar afectados y ser alcanzables.

**Concept:** Múltiples rutas transitivas

**Authored coaching hints:**

- ¿Un padre podría seguir instalando la versión vulnerable?
- ¿Qué muestra el gráfico completo después del cambio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O grafo mostra um pacote transitivo vulnerável sob duas bibliotecas diretas. O que a remediação deve verificar?

1. Atualizar um pai necessariamente muda a resolução aninhada do outro

   Restrições de pais independentes podem reter outra cópia vulnerável.

2. Todo nome de pacote sempre resolve para uma única versão compartilhada

   Gerenciadores podem manter várias versões do mesmo pacote.

3. Todos os caminhos de resolução afetados são tratados, não só um pai **[CORRECT]**

   Vários caminhos pai podem manter uma versão afetada independentemente.

4. Só pacotes declarados diretamente precisam de remediação

   Pacotes indiretos também podem estar afetados e ser alcançáveis.

**Concept:** Múltiplos caminhos transitivos

**Authored coaching hints:**

- Um pai ainda poderia instalar a versão vulnerável?
- O que o grafo completo mostra após a mudança?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph>

<!-- certification-coach-question:ghas-supply-040:87851c70df47db28b5611de406db6c4664b1058a817a085ae91d969aaf19f780 -->
## Question 120: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-040`

**Content revision:** `87851c70df47db28b5611de406db6c4664b1058a817a085ae91d969aaf19f780`

### English

A dependency-review action accepts a configured license exception for one package. What should reviewers still consider?

1. That all vulnerabilities in the package are automatically waived

   License exceptions do not inherently waive vulnerability checks.

2. That future versions can never change license metadata

   Licensing metadata can change across releases.

3. That no review evidence is needed

   Exceptions should preserve documented justification.

4. Whether the narrow exception is authorized and vulnerability policy still passes **[CORRECT]**

   Different policy dimensions need separate validation and scoped approval.

**Concept:** Scoped dependency exceptions

**Authored coaching hints:**

- Which policy dimension was excepted?
- Does approval for one criterion imply approval for every risk?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La acción de revisión acepta una excepción de licencia para un paquete. ¿Qué deben seguir considerando los revisores?

1. Que se eximen automáticamente todas sus vulnerabilidades

   Las excepciones de licencia no eximen por sí mismas comprobaciones de vulnerabilidades.

2. Que las versiones futuras nunca cambiarán metadatos de licencia

   Los metadatos de licencia pueden cambiar entre versiones.

3. Que no se necesita evidencia de revisión

   Las excepciones deben conservar justificación documentada.

4. Si la excepción acotada está autorizada y la política de vulnerabilidades aún se cumple **[CORRECT]**

   Las dimensiones de política requieren validación separada y aprobación acotada.

**Concept:** Excepciones acotadas de dependencias

**Authored coaching hints:**

- ¿Qué dimensión de política recibió la excepción?
- ¿Aprobar un criterio implica aprobar todo riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A ação de revisão aceita uma exceção de licença para um pacote. O que revisores ainda devem considerar?

1. Que todas as suas vulnerabilidades são automaticamente dispensadas

   Exceções de licença não dispensam por si só verificações de vulnerabilidades.

2. Que versões futuras nunca mudarão metadados de licença

   Metadados de licença podem mudar entre versões.

3. Que não é necessária evidência de revisão

   Exceções devem preservar justificativa documentada.

4. Se a exceção restrita está autorizada e a política de vulnerabilidades ainda passa **[CORRECT]**

   Dimensões de política exigem validação separada e aprovação com escopo.

**Concept:** Exceções de dependências com escopo

**Authored coaching hints:**

- Qual dimensão da política recebeu exceção?
- Aprovar um critério implica aprovar todo risco?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-ecosystem-041:cfff795d6419a392a087476efdecee0d567e8b59148ba48439979571bf94fe04 -->
## Question 121: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-041`

**Content revision:** `cfff795d6419a392a087476efdecee0d567e8b59148ba48439979571bf94fe04`

### English

Which situation best illustrates why security feature enablement and security outcome should be measured separately?

1. A repository has code scanning enabled but its analysis has been failing **[CORRECT]**

   Enabled configuration does not prove analysis is producing usable results.

2. A repository has both direct and transitive dependencies

   Dependency types alone do not demonstrate a configuration-outcome gap.

3. Two developers review the same pull request

   Multiple reviewers are not evidence of failed analysis.

4. A project documents its release process

   Release documentation does not establish scan success or failure.

**Concept:** Enablement versus effective coverage

**Authored coaching hints:**

- What evidence shows a protection actually ran?
- Can a configured control fail to produce current findings?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué situación ilustra mejor por qué medir por separado la habilitación de funciones de seguridad y sus resultados?

1. Un repositorio tiene análisis de código habilitado, pero sus análisis están fallando **[CORRECT]**

   La configuración habilitada no prueba que el análisis produzca resultados utilizables.

2. Un repositorio tiene dependencias directas y transitivas

   Los tipos de dependencias no demuestran por sí solos una brecha entre configuración y resultados.

3. Dos desarrolladores revisan el mismo pull request

   Varios revisores no evidencian análisis fallido.

4. Un proyecto documenta su proceso de publicación

   La documentación de publicaciones no establece éxito o fallo del análisis.

**Concept:** Habilitación frente a cobertura efectiva

**Authored coaching hints:**

- ¿Qué evidencia muestra que una protección se ejecutó?
- ¿Un control configurado puede no producir hallazgos actuales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual situação ilustra melhor por que medir separadamente habilitação de recursos e resultado de segurança?

1. Um repositório tem varredura de código habilitada, mas suas análises estão falhando **[CORRECT]**

   Configuração habilitada não prova que a análise produz resultados utilizáveis.

2. Um repositório tem dependências diretas e transitivas

   Tipos de dependências não demonstram por si só lacuna entre configuração e resultado.

3. Dois desenvolvedores revisam o mesmo pull request

   Vários revisores não evidenciam falha de análise.

4. Um projeto documenta seu processo de release

   Documentar releases não estabelece sucesso ou falha da varredura.

**Concept:** Habilitação versus cobertura efetiva

**Authored coaching hints:**

- Qual evidência mostra que a proteção realmente executou?
- Um controle configurado pode falhar em produzir resultados atuais?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-ecosystem-042:d2ea826a2aeaafd31ec1bacbd760bc5e20cb1dd8424c7a2678cacbe43cdaa4d6 -->
## Question 122: Describe GitHub Security suites, features, and ecosystem

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-ecosystem-042`

**Content revision:** `d2ea826a2aeaafd31ec1bacbd760bc5e20cb1dd8424c7a2678cacbe43cdaa4d6`

### English

A team must prevent credentials from entering history, inspect risky library changes, and analyze application data flow. Which set of capabilities matches all three needs?

1. Dependency graph, SBOM export, and version-update schedules

   Inventory and update schedules do not cover all three introduction risks.

2. Push protection, dependency review, and CodeQL analysis **[CORRECT]**

   These controls address credential introduction, dependency changes, and application behavior respectively.

3. Secret alert dismissal, advisory drafts, and release tags

   Tracking and disclosure artifacts do not implement all three checks.

4. CodeQL query suites, code-scanning categories, and SARIF fingerprints

   These are code-analysis components, not credential and dependency controls.

**Concept:** Selecting layered product capabilities

**Authored coaching hints:**

- What evidence would each risk require a detector to inspect?
- Does the proposed set cover all three distinct assets?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo debe impedir que entren credenciales al historial, inspeccionar cambios riesgosos de bibliotecas y analizar el flujo de datos de la aplicación. ¿Qué conjunto cubre las tres necesidades?

1. Gráfico de dependencias, exportación SBOM y calendarios de versiones

   El inventario y los calendarios no cubren los tres riesgos de introducción.

2. Protección de inserciones, revisión de dependencias y análisis de CodeQL **[CORRECT]**

   Estos controles abordan respectivamente introducción de credenciales, cambios de dependencias y comportamiento de la aplicación.

3. Descarte de alertas de secretos, borradores de avisos y etiquetas de publicación

   Los artefactos de seguimiento y divulgación no implementan las tres comprobaciones.

4. Suites de consultas CodeQL, categorías de análisis y huellas SARIF

   Son componentes de análisis de código, no controles de credenciales y dependencias.

**Concept:** Selección de capacidades en capas

**Authored coaching hints:**

- ¿Qué evidencia necesitaría inspeccionar cada detector?
- ¿El conjunto propuesto cubre los tres activos distintos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe precisa impedir credenciais no histórico, inspecionar mudanças arriscadas de bibliotecas e analisar fluxo de dados da aplicação. Qual conjunto atende às três necessidades?

1. Grafo de dependências, exportação SBOM e agendamentos de versões

   Inventário e agendamentos não cobrem os três riscos de introdução.

2. Proteção de push, revisão de dependências e análise CodeQL **[CORRECT]**

   Esses controles tratam respectivamente introdução de credenciais, mudanças de dependências e comportamento da aplicação.

3. Descarte de alertas de segredos, rascunhos de comunicados e tags de release

   Artefatos de acompanhamento e divulgação não implementam as três verificações.

4. Suítes de consultas CodeQL, categorias de varredura e impressões digitais SARIF

   São componentes de análise de código, não controles de credenciais e dependências.

**Concept:** Seleção de capacidades em camadas

**Authored coaching hints:**

- Qual evidência cada detector precisaria inspecionar?
- O conjunto proposto cobre os três ativos distintos?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-secrets-041:82e389b7d166ec735554c1e2be0e8f871066d8b9faf534f511d18efea79a85de -->
## Question 123: Configure and use Secret Protection

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-secrets-041`

**Content revision:** `82e389b7d166ec735554c1e2be0e8f871066d8b9faf534f511d18efea79a85de`

### English

A validity check needs a token plus its associated service host. Why can examining only the token string be insufficient?

1. Host context changes every token into a password

   Context does not change the credential type.

2. Token syntax proves the token is inactive

   Syntax alone does not prove revocation.

3. Some issuers require contextual information to determine whether a credential is active **[CORRECT]**

   Some supported checks combine a credential with host or URL context.

4. Dependency graph parsing must supply every token's hostname

   The dependency graph is not a universal source of credential context.

**Concept:** Context-dependent validity checking

**Authored coaching hints:**

- What does the issuer need to identify the correct authentication endpoint?
- Can identical token formats exist across service instances?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una comprobación de validez necesita un token y el host del servicio asociado. ¿Por qué puede no bastar examinar solo el token?

1. El contexto del host convierte todo token en contraseña

   El contexto no cambia el tipo de credencial.

2. La sintaxis demuestra que el token está inactivo

   La sintaxis por sí sola no prueba revocación.

3. Algunos emisores requieren contexto para determinar si una credencial está activa **[CORRECT]**

   Algunas comprobaciones compatibles combinan credencial y contexto de host o URL.

4. El gráfico de dependencias debe aportar el hostname de todo token

   El gráfico no es una fuente universal de contexto de credenciales.

**Concept:** Comprobación de validez dependiente del contexto

**Authored coaching hints:**

- ¿Qué necesita el emisor para identificar el endpoint correcto?
- ¿Pueden existir formatos idénticos en distintas instancias de servicio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma verificação de validade precisa de um token e do host do serviço associado. Por que examinar só a string do token pode não bastar?

1. O contexto do host transforma todo token em senha

   Contexto não muda o tipo da credencial.

2. A sintaxe prova que o token está inativo

   Sintaxe sozinha não prova revogação.

3. Alguns emissores precisam de contexto para determinar se a credencial está ativa **[CORRECT]**

   Algumas verificações combinam credencial e contexto de host ou URL.

4. O grafo de dependências deve fornecer o hostname de todo token

   O grafo não é fonte universal de contexto de credenciais.

**Concept:** Verificação de validade dependente de contexto

**Authored coaching hints:**

- O que o emissor precisa para identificar o endpoint correto?
- Formatos idênticos podem existir em instâncias diferentes de serviço?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/validity-checks>

<!-- certification-coach-question:ghas-supply-041:394bfb27ece1208029c1ed314e594adc843b6873bbc3bba8436676c9b3bed344 -->
## Question 124: Configure and use supply chain security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-supply-041`

**Content revision:** `394bfb27ece1208029c1ed314e594adc843b6873bbc3bba8436676c9b3bed344`

### English

The head commit of a pull request has a dependency snapshot, but the base commit does not. How should a custom review integration treat a missing-snapshot warning?

1. As proof that the base has no dependencies

   Missing data is not an empty inventory.

2. As approval to merge without review

   An incomplete comparison does not justify bypassing policy.

3. As a secret-scanning false positive

   The warning concerns dependency data rather than credentials.

4. As incomplete comparison evidence requiring snapshot readiness or controlled retry **[CORRECT]**

   Review needs adequate snapshots for both sides of the comparison.

**Concept:** Base and head inventory completeness

**Authored coaching hints:**

- Which two states are being compared?
- How does unknown input differ from an empty input?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El commit head de un pull request tiene instantánea de dependencias, pero el base no. ¿Cómo debe tratar una integración personalizada la advertencia de instantánea faltante?

1. Como prueba de que base no tiene dependencias

   Datos faltantes no son un inventario vacío.

2. Como aprobación para fusionar sin revisión

   Una comparación incompleta no justifica omitir políticas.

3. Como falso positivo de secretos

   La advertencia trata datos de dependencias, no credenciales.

4. Como evidencia incompleta que requiere instantáneas listas o reintento controlado **[CORRECT]**

   La revisión requiere instantáneas adecuadas de ambos lados.

**Concept:** Integridad de inventarios base y head

**Authored coaching hints:**

- ¿Qué dos estados se comparan?
- ¿Cómo difiere una entrada desconocida de una vacía?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O commit head de um pull request tem retrato de dependências, mas o base não. Como uma integração personalizada deve tratar o aviso de retrato ausente?

1. Como prova de que base não tem dependências

   Dados ausentes não são inventário vazio.

2. Como aprovação para merge sem revisão

   Comparação incompleta não justifica ignorar política.

3. Como falso positivo de segredos

   O aviso trata de dados de dependências, não credenciais.

4. Como evidência incompleta exigindo retratos prontos ou repetição controlada **[CORRECT]**

   A revisão precisa de retratos adequados dos dois lados.

**Concept:** Completude dos inventários base e head

**Authored coaching hints:**

- Quais dois estados são comparados?
- Como entrada desconhecida difere de entrada vazia?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-code-001:503f426f550b9a29ccda88a682e7397539d196d1caae499b36a2193e86d9690d -->
## Question 125: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-001`

**Content revision:** `503f426f550b9a29ccda88a682e7397539d196d1caae499b36a2193e86d9690d`

### English

A repository needs CodeQL coverage quickly and has no specialized build or query requirements. Which setup is the best starting point?

1. Default setup **[CORRECT]**

   Default setup selects analysis languages, queries, and triggers with minimal configuration.

2. A custom external CI pipeline from scratch

   External CI is possible but adds unnecessary setup for this requirement.

3. A manually edited SARIF file

   Editing results does not perform analysis.

4. Only a dependency submission workflow

   Dependency submission inventories packages rather than scanning code.

**Concept:** Selecting default setup

**Authored coaching hints:**

- How much customization is actually required?
- Which path minimizes configuration while providing native analysis?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio necesita cobertura de CodeQL rápidamente y no tiene requisitos especializados de compilación o consultas. ¿Qué configuración es el mejor inicio?

1. Configuración predeterminada **[CORRECT]**

   La configuración predeterminada selecciona lenguajes, consultas y activadores con configuración mínima.

2. Una canalización de CI externa personalizada desde cero

   La CI externa es posible, pero agrega trabajo innecesario para esta necesidad.

3. Un archivo SARIF editado manualmente

   Editar resultados no realiza análisis.

4. Solo un flujo de envío de dependencias

   El envío de dependencias inventaría paquetes, no analiza código.

**Concept:** Selección de configuración predeterminada

**Authored coaching hints:**

- ¿Cuánta personalización se necesita realmente?
- ¿Qué vía minimiza configuración y proporciona análisis nativo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório precisa de cobertura CodeQL rapidamente e não tem requisitos especializados de build ou consultas. Qual configuração é o melhor começo?

1. Configuração padrão **[CORRECT]**

   A configuração padrão seleciona linguagens, consultas e gatilhos com configuração mínima.

2. Uma pipeline de CI externa personalizada do zero

   CI externa é possível, mas adiciona trabalho desnecessário para esta necessidade.

3. Um arquivo SARIF editado manualmente

   Editar resultados não realiza análise.

4. Só um workflow de envio de dependências

   Envio de dependências inventaria pacotes, não analisa código.

**Concept:** Seleção da configuração padrão

**Authored coaching hints:**

- Quanta personalização é realmente necessária?
- Qual caminho minimiza configuração e oferece análise nativa?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-002:9e3539b7d5b85a53a9f57bb6b397f0f224fbd246fb61f9982fb31ef3e9781815 -->
## Question 126: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-002`

**Content revision:** `9e3539b7d5b85a53a9f57bb6b397f0f224fbd246fb61f9982fb31ef3e9781815`

### English

A project requires a custom build sequence and additional published query packs. Which CodeQL approach provides direct workflow customization?

1. Default setup alone with no editable build workflow

   Default setup alone does not supply the requested custom workflow control.

2. Advanced setup with a repository workflow **[CORRECT]**

   Advanced setup provides an editable CodeQL analysis workflow.

3. A manual SARIF upload without executing analysis

   An upload step consumes results but does not implement extraction and queries.

4. Only changing the repository's displayed alert severity filters

   Display filters do not configure build steps or query packs.

**Concept:** Selecting advanced setup

**Authored coaching hints:**

- Which requirements exceed automatic setup?
- Where can the team express custom analysis steps?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un proyecto requiere una secuencia de compilación personalizada y paquetes de consultas publicados adicionales. ¿Qué enfoque de CodeQL permite personalizar directamente el flujo?

1. Solo configuración predeterminada sin flujo editable de compilación

   La configuración predeterminada sola no ofrece el control de flujo solicitado.

2. Configuración avanzada con un flujo del repositorio **[CORRECT]**

   La configuración avanzada aporta un flujo de análisis CodeQL editable.

3. Carga manual de SARIF sin ejecutar análisis

   La carga consume resultados, pero no implementa extracción ni consultas.

4. Solo cambiar filtros visibles de gravedad de alertas

   Los filtros visibles no configuran compilaciones ni paquetes de consultas.

**Concept:** Selección de configuración avanzada

**Authored coaching hints:**

- ¿Qué requisitos superan la configuración automática?
- ¿Dónde puede expresar el equipo pasos personalizados de análisis?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um projeto exige sequência de build personalizada e pacotes de consultas publicados adicionais. Qual abordagem CodeQL permite personalizar diretamente o workflow?

1. Só configuração padrão sem workflow de build editável

   Só a configuração padrão não oferece o controle de workflow solicitado.

2. Configuração avançada com um workflow no repositório **[CORRECT]**

   A configuração avançada fornece workflow de análise CodeQL editável.

3. Upload manual de SARIF sem executar análise

   O upload consome resultados, mas não implementa extração e consultas.

4. Só mudar filtros exibidos de severidade de alertas

   Filtros de exibição não configuram build nem pacotes de consultas.

**Concept:** Seleção da configuração avançada

**Authored coaching hints:**

- Quais requisitos excedem a configuração automática?
- Onde a equipe pode expressar etapas personalizadas de análise?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-003:185f9365822b38d5ac1c3ece4520739ed5fc8f86f8a65e38c57a5b5567fe7272 -->
## Question 127: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-003`

**Content revision:** `185f9365822b38d5ac1c3ece4520739ed5fc8f86f8a65e38c57a5b5567fe7272`

### English

What is the correct conceptual order for a CodeQL analysis?

1. Publish an advisory, then inventory packages

   Advisory publication is not the CodeQL pipeline.

2. Dismiss alerts, then extract secrets

   Dismissal and secret extraction do not describe CodeQL analysis.

3. Create a code database, run queries, and publish analysis results **[CORRECT]**

   CodeQL represents code as data and evaluates queries against that database.

4. Upload a lockfile, then revoke credentials

   Lockfiles and revocation belong to other security tasks.

**Concept:** CodeQL analysis pipeline

**Authored coaching hints:**

- What do the queries operate on?
- How does analyzed code become findings displayed in GitHub?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el orden conceptual correcto de un análisis de CodeQL?

1. Publicar un aviso y luego inventariar paquetes

   Publicar avisos no es la canalización de CodeQL.

2. Descartar alertas y luego extraer secretos

   Descartar y extraer secretos no describe el análisis CodeQL.

3. Crear una base de código, ejecutar consultas y publicar resultados de análisis **[CORRECT]**

   CodeQL representa código como datos y evalúa consultas sobre esa base.

4. Cargar un archivo de bloqueo y luego revocar credenciales

   Los archivos de bloqueo y la revocación corresponden a otras tareas.

**Concept:** Canalización de análisis CodeQL

**Authored coaching hints:**

- ¿Sobre qué operan las consultas?
- ¿Cómo se convierte el código analizado en hallazgos visibles en GitHub?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a ordem conceitual correta de uma análise CodeQL?

1. Publicar comunicado e depois inventariar pacotes

   Publicação de comunicado não é a pipeline CodeQL.

2. Descartar alertas e depois extrair segredos

   Descarte e extração de segredos não descrevem análise CodeQL.

3. Criar banco de código, executar consultas e publicar resultados de análise **[CORRECT]**

   CodeQL representa código como dados e avalia consultas nesse banco.

4. Enviar arquivo de lock e depois revogar credenciais

   Arquivos de lock e revogação pertencem a outras tarefas.

**Concept:** Pipeline de análise CodeQL

**Authored coaching hints:**

- Sobre o que as consultas operam?
- Como o código analisado vira resultados exibidos no GitHub?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-004:ff458dc26acca920108a9511305732b0f82135edcd39dbbf570c3aabc65aafd7 -->
## Question 128: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-004`

**Content revision:** `ff458dc26acca920108a9511305732b0f82135edcd39dbbf570c3aabc65aafd7`

### English

A CodeQL finding includes a path from request input to an unsafe operation. What is the most useful first review?

1. Only count how many files changed

   File counts do not establish dataflow safety.

2. Assume every request is trusted

   Trust must be established rather than assumed.

3. Dismiss it because multiple functions are involved

   Cross-function flow can be relevant to a vulnerability.

4. Inspect the source, transformations, and sink along the reported flow **[CORRECT]**

   The path provides evidence for evaluating whether untrusted data reaches a dangerous use.

**Concept:** Dataflow evidence interpretation

**Authored coaching hints:**

- Where does the value originate?
- What checks or transformations occur before its sensitive use?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un hallazgo de CodeQL incluye una ruta desde la entrada de una solicitud hasta una operación insegura. ¿Cuál es la primera revisión más útil?

1. Solo contar archivos cambiados

   Contar archivos no establece seguridad del flujo de datos.

2. Suponer confiables todas las solicitudes

   La confianza debe establecerse, no suponerse.

3. Descartarlo porque involucra varias funciones

   El flujo entre funciones puede ser relevante para una vulnerabilidad.

4. Inspeccionar origen, transformaciones y destino en el flujo reportado **[CORRECT]**

   La ruta permite evaluar si datos no confiables llegan a un uso peligroso.

**Concept:** Interpretación de evidencia de flujo de datos

**Authored coaching hints:**

- ¿De dónde proviene el valor?
- ¿Qué comprobaciones o transformaciones ocurren antes del uso sensible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um resultado CodeQL inclui caminho da entrada da requisição a uma operação insegura. Qual é a primeira revisão mais útil?

1. Só contar arquivos alterados

   Contar arquivos não estabelece segurança do fluxo.

2. Supor que toda requisição é confiável

   Confiança precisa ser estabelecida, não presumida.

3. Descartar porque envolve várias funções

   Fluxo entre funções pode ser relevante à vulnerabilidade.

4. Inspecionar origem, transformações e destino no fluxo relatado **[CORRECT]**

   O caminho permite avaliar se dados não confiáveis chegam a um uso perigoso.

**Concept:** Interpretação de evidências de fluxo de dados

**Authored coaching hints:**

- De onde o valor vem?
- Quais verificações ou transformações ocorrem antes do uso sensível?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-005:cbf69d8531f94fc224f504acf0af1eed0e7eeeebf09d0db962526d3a72509673 -->
## Question 129: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-005`

**Content revision:** `cbf69d8531f94fc224f504acf0af1eed0e7eeeebf09d0db962526d3a72509673`

### English

A third-party tool exports SARIF 1.0, but GitHub rejects the upload. Which format requirement should the integration check?

1. Generate supported SARIF 2.1.0 output **[CORRECT]**

   GitHub code scanning supports SARIF 2.1.0.

2. Convert results to a dependency lockfile

   Lockfiles are not analysis-result containers.

3. Rename the file extension without changing its structure

   Renaming does not change the SARIF version or schema.

4. Convert the results to a secret regex

   Regexes do not represent analysis results.

**Concept:** SARIF version compatibility

**Authored coaching hints:**

- Is the declared format version supported?
- Can a filename repair incompatible content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una herramienta externa exporta SARIF 1.0, pero GitHub rechaza la carga. ¿Qué requisito de formato debe comprobar la integración?

1. Generar salida SARIF 2.1.0 compatible **[CORRECT]**

   El análisis de código de GitHub admite SARIF 2.1.0.

2. Convertir resultados en un archivo de bloqueo

   Los archivos de bloqueo no contienen resultados de análisis.

3. Renombrar la extensión sin cambiar la estructura

   Renombrar no cambia la versión ni el esquema SARIF.

4. Convertir resultados en una expresión de secretos

   Las expresiones regulares no representan resultados de análisis.

**Concept:** Compatibilidad de versión SARIF

**Authored coaching hints:**

- ¿La versión declarada es compatible?
- ¿Un nombre de archivo puede reparar contenido incompatible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma ferramenta externa exporta SARIF 1.0, mas o GitHub rejeita o upload. Qual requisito de formato verificar?

1. Gerar saída SARIF 2.1.0 compatível **[CORRECT]**

   A varredura de código do GitHub admite SARIF 2.1.0.

2. Converter resultados em arquivo de lock

   Arquivos de lock não contêm resultados de análise.

3. Renomear a extensão sem mudar a estrutura

   Renomear não muda versão nem esquema SARIF.

4. Converter resultados em regex de segredos

   Regexes não representam resultados de análise.

**Concept:** Compatibilidade da versão SARIF

**Authored coaching hints:**

- A versão declarada é compatível?
- Um nome de arquivo corrige conteúdo incompatível?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support>

<!-- certification-coach-question:ghas-code-006:cf104572e228cef90621594935de8188fe4999665469fb8a613bfa0d2f887e15 -->
## Question 130: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-006`

**Content revision:** `cf104572e228cef90621594935de8188fe4999665469fb8a613bfa0d2f887e15`

### English

A custom analyzer produces duplicate alerts after every run because result paths change with each build directory. What should the integration stabilize?

1. The repository description

   Descriptions do not identify code results.

2. File paths, rule identifiers, and result fingerprint data **[CORRECT]**

   Stable result identity helps GitHub correlate logically identical findings.

3. The number of dependency licenses

   License counts do not control code-scanning identity.

4. The secret-scanning notification list

   Secret notifications do not correlate SARIF results.

**Concept:** Stable SARIF result identity

**Authored coaching hints:**

- How can the platform recognize the same issue across runs?
- Which result attributes change unnecessarily?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un analizador personalizado genera alertas duplicadas en cada ejecución porque las rutas cambian con cada directorio de compilación. ¿Qué debe estabilizar la integración?

1. La descripción del repositorio

   Las descripciones no identifican resultados de código.

2. Rutas de archivos, identificadores de reglas y huellas de resultados **[CORRECT]**

   La identidad estable permite correlacionar hallazgos lógicamente idénticos.

3. La cantidad de licencias de dependencias

   Los recuentos de licencias no controlan la identidad del análisis.

4. La lista de notificaciones de secretos

   Las notificaciones de secretos no correlacionan resultados SARIF.

**Concept:** Identidad estable de resultados SARIF

**Authored coaching hints:**

- ¿Cómo reconoce la plataforma el mismo problema entre ejecuciones?
- ¿Qué atributos cambian innecesariamente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um analisador personalizado gera alertas duplicados a cada execução porque caminhos mudam com o diretório de build. O que estabilizar?

1. A descrição do repositório

   Descrições não identificam resultados de código.

2. Caminhos de arquivos, identificadores de regras e impressões digitais de resultados **[CORRECT]**

   Identidade estável ajuda a correlacionar resultados logicamente idênticos.

3. O número de licenças de dependências

   Contagens de licenças não controlam identidade de resultados.

4. A lista de notificações de segredos

   Notificações de segredos não correlacionam SARIF.

**Concept:** Identidade estável de resultados SARIF

**Authored coaching hints:**

- Como a plataforma reconhece o mesmo problema entre execuções?
- Quais atributos mudam desnecessariamente?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support>

<!-- certification-coach-question:ghas-code-007:5627a327c57829f5e7ca816c92f7606be63541a16f01e1e3337433d0cf3e38de -->
## Question 131: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-007`

**Content revision:** `5627a327c57829f5e7ca816c92f7606be63541a16f01e1e3337433d0cf3e38de`

### English

A SARIF upload through the REST endpoint omits partialFingerprints. Which limitation should the integration owner consider?

1. The API automatically revokes its token

   Fingerprint omission does not inherently revoke authentication.

2. All findings become dependency alerts

   SARIF results remain code-scanning findings.

3. Results may display but duplicate alerts can occur without stable fingerprints **[CORRECT]**

   Fingerprint data helps correlate results and avoid duplicates.

4. The repository must be deleted and recreated

   Recreating the repository does not solve result identity.

**Concept:** API upload fingerprint handling

**Authored coaching hints:**

- What information identifies the same logical finding?
- Does an accepted upload guarantee ideal cross-run correlation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una carga SARIF mediante el endpoint REST omite partialFingerprints. ¿Qué limitación debe considerar su responsable?

1. La API revoca automáticamente su token

   Omitir huellas no revoca por sí mismo la autenticación.

2. Todos los hallazgos se vuelven alertas de dependencias

   Los resultados SARIF siguen siendo hallazgos de código.

3. Los resultados pueden mostrarse, pero sin huellas estables pueden aparecer alertas duplicadas **[CORRECT]**

   Las huellas ayudan a correlacionar resultados y evitar duplicados.

4. Se debe eliminar y recrear el repositorio

   Recrear el repositorio no resuelve la identidad de resultados.

**Concept:** Manejo de huellas en cargas por API

**Authored coaching hints:**

- ¿Qué información identifica el mismo hallazgo lógico?
- ¿Una carga aceptada garantiza correlación ideal entre ejecuciones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um upload SARIF pelo endpoint REST omite partialFingerprints. Qual limitação considerar?

1. A API revoga automaticamente seu token

   Omitir impressões digitais não revoga por si só autenticação.

2. Todos os resultados viram alertas de dependências

   Resultados SARIF continuam sendo de código.

3. Resultados podem aparecer, mas sem impressões digitais estáveis podem surgir alertas duplicados **[CORRECT]**

   Impressões digitais ajudam a correlacionar e evitar duplicatas.

4. O repositório precisa ser excluído e recriado

   Recriar o repositório não resolve identidade dos resultados.

**Concept:** Impressões digitais em uploads por API

**Authored coaching hints:**

- Qual informação identifica o mesmo resultado lógico?
- Upload aceito garante correlação ideal entre execuções?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support>

<!-- certification-coach-question:ghas-code-008:c78392062383daf124958455e101d6398f03b403a73a43608caeb470be8bec24 -->
## Question 132: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-008`

**Content revision:** `c78392062383daf124958455e101d6398f03b403a73a43608caeb470be8bec24`

### English

An advanced CodeQL workflow analyzes Java and JavaScript. Why might it use a language matrix?

1. To convert Java into JavaScript

   A matrix does not translate languages.

2. To make every language use the same compiler

   Different languages can require different extraction behavior.

3. To turn off language-specific extraction

   Language selection does not eliminate extraction requirements.

4. To run appropriate analysis jobs for the selected languages **[CORRECT]**

   Matrix jobs let workflows apply analysis to multiple supported languages.

**Concept:** Language matrix configuration

**Authored coaching hints:**

- What differs between the analysis targets?
- How can a workflow repeat a job with controlled language inputs?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo avanzado de CodeQL analiza Java y JavaScript. ¿Por qué podría usar una matriz de lenguajes?

1. Para convertir Java en JavaScript

   Una matriz no traduce lenguajes.

2. Para que todos los lenguajes usen el mismo compilador

   Distintos lenguajes pueden requerir extracción diferente.

3. Para desactivar extracción específica por lenguaje

   Seleccionar lenguaje no elimina requisitos de extracción.

4. Para ejecutar trabajos de análisis adecuados a los lenguajes seleccionados **[CORRECT]**

   Los trabajos matriciales aplican análisis a varios lenguajes compatibles.

**Concept:** Configuración de matriz de lenguajes

**Authored coaching hints:**

- ¿Qué difiere entre los destinos del análisis?
- ¿Cómo repite un flujo un trabajo con entradas controladas de lenguaje?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow avançado CodeQL analisa Java e JavaScript. Por que usar uma matriz de linguagens?

1. Para converter Java em JavaScript

   Uma matriz não traduz linguagens.

2. Para todas as linguagens usarem o mesmo compilador

   Linguagens diferentes podem exigir extração diferente.

3. Para desativar extração específica por linguagem

   Selecionar linguagem não elimina requisitos de extração.

4. Para executar jobs adequados às linguagens selecionadas **[CORRECT]**

   Jobs de matriz aplicam análise a várias linguagens compatíveis.

**Concept:** Configuração da matriz de linguagens

**Authored coaching hints:**

- O que difere entre os alvos de análise?
- Como um workflow repete um job com entradas controladas de linguagem?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning>

<!-- certification-coach-question:ghas-code-009:f263defc6c72d630628d36d33aedf792bd4f2d753257b1643d18cc71288b2966 -->
## Question 133: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-009`

**Content revision:** `f263defc6c72d630628d36d33aedf792bd4f2d753257b1643d18cc71288b2966`

### English

A custom build fails before CodeQL analysis completes. Why is interpreting zero new alerts as a clean scan incorrect?

1. The failed pipeline may not have produced a valid analysis result **[CORRECT]**

   Analysis completion and coverage must be verified before interpreting findings.

2. CodeQL failures prove all queries passed

   Failure is not successful query execution.

3. Build logs replace security analysis automatically

   Logs are diagnostic evidence, not substitute analysis.

4. Zero alerts always means every source file was checked

   An empty list does not establish successful coverage.

**Concept:** Scan failure versus clean result

**Authored coaching hints:**

- Did the analyzer finish successfully?
- What evidence distinguishes no findings from no usable analysis?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una compilación personalizada falla antes de completar CodeQL. ¿Por qué es incorrecto interpretar cero alertas nuevas como análisis limpio?

1. La canalización fallida quizá no produjo un resultado válido **[CORRECT]**

   Hay que verificar finalización y cobertura antes de interpretar hallazgos.

2. Los fallos de CodeQL prueban que pasaron todas las consultas

   Un fallo no es ejecución exitosa de consultas.

3. Los registros reemplazan automáticamente el análisis de seguridad

   Los registros diagnostican, no sustituyen el análisis.

4. Cero alertas siempre significa que se comprobó cada archivo fuente

   Una lista vacía no establece cobertura exitosa.

**Concept:** Fallo de análisis frente a resultado limpio

**Authored coaching hints:**

- ¿Terminó correctamente el analizador?
- ¿Qué distingue ausencia de hallazgos de ausencia de análisis utilizable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um build personalizado falha antes de concluir CodeQL. Por que interpretar zero alertas novos como varredura limpa é incorreto?

1. A pipeline com falha talvez não tenha produzido análise válida **[CORRECT]**

   É preciso verificar conclusão e cobertura antes de interpretar resultados.

2. Falhas do CodeQL provam que todas as consultas passaram

   Falha não é execução bem-sucedida de consultas.

3. Logs substituem automaticamente análise de segurança

   Logs diagnosticam, não substituem análise.

4. Zero alertas sempre significa que todo arquivo-fonte foi verificado

   Lista vazia não estabelece cobertura bem-sucedida.

**Concept:** Falha de varredura versus resultado limpo

**Authored coaching hints:**

- O analisador concluiu com sucesso?
- O que distingue ausência de resultados de ausência de análise utilizável?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-code-010:7f9b4ab6a6865d08866ddb4379928756ee3a2a55f0d1a0960854420451952ec7 -->
## Question 134: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-010`

**Content revision:** `7f9b4ab6a6865d08866ddb4379928756ee3a2a55f0d1a0960854420451952ec7`

### English

A security team chooses security-extended instead of the default CodeQL query suite. What trade-off should it expect?

1. Only dependency license findings

   These are code-analysis query suites, not license checks.

2. Additional security queries with potentially more lower-confidence findings **[CORRECT]**

   The extended suite includes default queries and additional queries with lower precision.

3. No default security queries at all

   It includes rather than removes the default suite.

4. Guaranteed elimination of false positives

   Broader coverage can increase false positives.

**Concept:** Extended query-suite trade-offs

**Authored coaching hints:**

- Does broader detection always preserve the same precision?
- What does the extended suite add to the default set?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo elige security-extended en vez de la suite predeterminada de CodeQL. ¿Qué contrapartida debe esperar?

1. Solo hallazgos de licencias de dependencias

   Son suites de análisis de código, no comprobaciones de licencias.

2. Consultas de seguridad adicionales con posibles hallazgos de menor confianza **[CORRECT]**

   La suite extendida incluye las consultas predeterminadas y otras de menor precisión.

3. Ninguna consulta de seguridad predeterminada

   Incluye la suite predeterminada en vez de quitarla.

4. Eliminación garantizada de falsos positivos

   Más cobertura puede aumentar falsos positivos.

**Concept:** Contrapartidas de suites extendidas

**Authored coaching hints:**

- ¿Una detección más amplia siempre conserva precisión?
- ¿Qué agrega la suite extendida al conjunto predeterminado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe escolhe security-extended em vez da suíte padrão CodeQL. Qual contrapartida esperar?

1. Só resultados de licenças de dependências

   São suítes de análise de código, não verificações de licença.

2. Consultas adicionais de segurança com possíveis resultados de menor confiança **[CORRECT]**

   A suíte estendida inclui consultas padrão e outras de menor precisão.

3. Nenhuma consulta padrão de segurança

   Inclui a suíte padrão em vez de removê-la.

4. Eliminação garantida de falsos positivos

   Cobertura maior pode aumentar falsos positivos.

**Concept:** Contrapartidas da suíte estendida

**Authored coaching hints:**

- Detecção mais ampla sempre mantém a precisão?
- O que a suíte estendida acrescenta ao conjunto padrão?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites>

<!-- certification-coach-question:ghas-code-011:d5fc4a3597538ff26d26de871142aaa9f517d69dea01fee5a2a29dfdc324d51f -->
## Question 135: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-011`

**Content revision:** `d5fc4a3597538ff26d26de871142aaa9f517d69dea01fee5a2a29dfdc324d51f`

### English

What is a CodeQL query pack used for in customized analysis?

1. Storing revoked tokens

   Query packs are not credential stores.

2. Scheduling Dependabot updates

   Dependabot uses separate configuration.

3. Distributing queries and their required dependencies **[CORRECT]**

   Published query packs package reusable analysis logic and dependencies.

4. Replacing every package manifest

   They do not replace application dependency declarations.

**Concept:** Reusable CodeQL query packs

**Authored coaching hints:**

- What artifact makes analysis logic portable?
- How are query dependencies supplied consistently?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Para qué sirve un paquete de consultas CodeQL en análisis personalizado?

1. Almacenar tokens revocados

   Los paquetes de consultas no almacenan credenciales.

2. Programar actualizaciones de Dependabot

   Dependabot usa configuración separada.

3. Distribuir consultas y sus dependencias requeridas **[CORRECT]**

   Los paquetes publicados agrupan lógica de análisis reutilizable y dependencias.

4. Reemplazar todos los manifiestos de paquetes

   No reemplazan declaraciones de dependencias de la aplicación.

**Concept:** Paquetes de consultas CodeQL reutilizables

**Authored coaching hints:**

- ¿Qué artefacto hace portátil la lógica de análisis?
- ¿Cómo se suministran coherentemente las dependencias de consultas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para que serve um pacote de consultas CodeQL na análise personalizada?

1. Armazenar tokens revogados

   Pacotes de consultas não armazenam credenciais.

2. Agendar atualizações do Dependabot

   Dependabot usa configuração separada.

3. Distribuir consultas e suas dependências necessárias **[CORRECT]**

   Pacotes publicados reúnem lógica reutilizável de análise e dependências.

4. Substituir todos os manifestos de pacotes

   Não substituem declarações de dependências da aplicação.

**Concept:** Pacotes reutilizáveis de consultas CodeQL

**Authored coaching hints:**

- Qual artefato torna a lógica de análise portátil?
- Como as dependências de consultas são fornecidas de modo consistente?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-012:36cdf205063a3c26c2083088f9c1b35540ed401496ba2d90cb8317cb8f31cabb -->
## Question 136: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-012`

**Content revision:** `36cdf205063a3c26c2083088f9c1b35540ed401496ba2d90cb8317cb8f31cabb`

### English

A code-scanning alert has general severity Warning and security severity High. Which severity does GitHub prefer for its displayed security risk?

1. Warning, because general severity always overrides security severity

   Security severity takes preference when present.

2. A combined Warning-High severity from a separate ranking scale

   GitHub does not define this combined severity scale.

3. Whichever severity value was added to the result first

   Field insertion order is not the documented precedence rule.

4. High, when security severity is present **[CORRECT]**

   GitHub displays and uses security severity in preference to general severity.

**Concept:** General versus security severity

**Authored coaching hints:**

- What does each severity field describe?
- Which precedence rule applies when both are available?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta de código tiene gravedad general Warning y de seguridad High. ¿Cuál prefiere GitHub para mostrar el riesgo de seguridad?

1. Warning, porque la gravedad general siempre prevalece

   La gravedad de seguridad tiene preferencia cuando existe.

2. Una gravedad combinada Warning-High de otra escala

   GitHub no define esa escala combinada.

3. La que se agregó primero al resultado

   El orden de inserción de campos no es la regla documentada.

4. High, cuando existe gravedad de seguridad **[CORRECT]**

   GitHub muestra y usa la gravedad de seguridad sobre la general.

**Concept:** Gravedad general frente a seguridad

**Authored coaching hints:**

- ¿Qué describe cada campo?
- ¿Qué regla de precedencia se aplica cuando ambos están disponibles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta de código tem severidade geral Warning e de segurança High. Qual o GitHub prefere ao exibir risco de segurança?

1. Warning, pois a severidade geral sempre prevalece

   A severidade de segurança tem preferência quando existe.

2. Uma severidade combinada Warning-High de outra escala

   O GitHub não define essa escala combinada.

3. A que foi adicionada primeiro ao resultado

   A ordem de inserção dos campos não é a regra documentada.

4. High, quando há severidade de segurança **[CORRECT]**

   O GitHub exibe e usa severidade de segurança em preferência à geral.

**Concept:** Severidade geral versus de segurança

**Authored coaching hints:**

- O que cada campo descreve?
- Qual regra de precedência vale quando ambos estão disponíveis?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-013:4eea7ba6877a01aff2eba8b7a526b0d52002d44ecf435e65354d26a0bc2a2be8 -->
## Question 137: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-013`

**Content revision:** `4eea7ba6877a01aff2eba8b7a526b0d52002d44ecf435e65354d26a0bc2a2be8`

### English

A fix is merged for a code-scanning alert. What should confirm remediation in the scanning workflow?

1. Successful subsequent analysis of the relevant code no longer reports the issue **[CORRECT]**

   Code scanning can close an alert when analysis confirms the triggering problem is fixed.

2. The pull request's ordinary unit-test job passed, without running analysis

   Ordinary tests can help but do not establish the scanner's result for the changed code.

3. A previous scan of the parent commit was successful

   A parent-commit scan does not verify the proposed fix.

4. An administrator manually dismissed the alert before rescanning

   Dismissal records a disposition, not a confirming analysis.

**Concept:** Verifying code-scanning fixes

**Authored coaching hints:**

- Which revision was examined?
- What distinguishes analysis evidence from a tracking decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se fusiona una corrección de una alerta de código. ¿Qué debe confirmar la remediación en el flujo de análisis?

1. Un análisis posterior exitoso del código pertinente ya no reporta el problema **[CORRECT]**

   El análisis puede cerrar una alerta al confirmar que se corrigió el problema que la activó.

2. Pasó el trabajo normal de pruebas unitarias, sin análisis

   Las pruebas normales ayudan, pero no establecen el resultado del analizador para el código cambiado.

3. Fue exitoso un análisis anterior del commit padre

   Analizar el commit padre no verifica la corrección propuesta.

4. Un administrador descartó manualmente la alerta antes del nuevo análisis

   Descartar registra una decisión, no un análisis confirmatorio.

**Concept:** Verificación de correcciones de análisis de código

**Authored coaching hints:**

- ¿Qué revisión se examinó?
- ¿Qué distingue evidencia de análisis de una decisión de seguimiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma correção de alerta de código foi integrada. O que deve confirmar a remediação no workflow?

1. Análise posterior bem-sucedida do código relevante não relata mais o problema **[CORRECT]**

   A varredura pode fechar um alerta quando confirma a correção do problema que o acionou.

2. O job comum de testes unitários passou, sem análise

   Testes comuns ajudam, mas não estabelecem o resultado do analisador no código alterado.

3. Uma análise anterior do commit pai foi bem-sucedida

   Analisar o commit pai não verifica a correção proposta.

4. Um administrador descartou manualmente antes de nova varredura

   Descarte registra decisão, não análise confirmatória.

**Concept:** Verificação de correções de varredura de código

**Authored coaching hints:**

- Qual revisão foi examinada?
- O que distingue evidência de análise de decisão de acompanhamento?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-code-014:340331a84a304c33b85577bea163517aecd513a730a62f952a5e9b0eac95580d -->
## Question 138: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-014`

**Content revision:** `340331a84a304c33b85577bea163517aecd513a730a62f952a5e9b0eac95580d`

### English

An alert is demonstrably a false positive because a validated sanitizer is effective on every reported path. What is the appropriate tracking action?

1. Delete all scanning configuration

   A local false positive does not justify removing all detection.

2. Dismiss the specific alert with the appropriate reason and supporting context **[CORRECT]**

   A justified, scoped dismissal preserves the decision context.

3. Mark every future alert from the tool as safe

   Other alerts may describe real weaknesses.

4. Rewrite unrelated dependencies

   Unrelated dependency changes do not address this finding.

**Concept:** Evidence-based code-alert dismissal

**Authored coaching hints:**

- How narrow is the evidence?
- What explanation would let another reviewer reproduce the decision?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta es un falso positivo demostrado porque un sanitizador validado es eficaz en todas las rutas reportadas. ¿Qué acción de seguimiento corresponde?

1. Eliminar toda configuración de análisis

   Un falso positivo local no justifica eliminar toda detección.

2. Descartar la alerta específica con motivo adecuado y contexto de respaldo **[CORRECT]**

   Un descarte justificado y acotado preserva el contexto de decisión.

3. Marcar segura toda futura alerta de la herramienta

   Otras alertas pueden describir debilidades reales.

4. Reescribir dependencias no relacionadas

   Cambios de dependencias ajenas no resuelven este hallazgo.

**Concept:** Descarte de alertas basado en evidencia

**Authored coaching hints:**

- ¿Qué tan acotada es la evidencia?
- ¿Qué explicación permitiría reproducir la decisión a otra persona?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta é comprovadamente falso positivo porque um sanitizador validado funciona em todos os caminhos relatados. Qual ação é adequada?

1. Excluir toda configuração de varredura

   Um falso positivo local não justifica remover toda detecção.

2. Descartar o alerta específico com motivo adequado e contexto de apoio **[CORRECT]**

   Descarte justificado e restrito preserva o contexto da decisão.

3. Marcar seguros todos os futuros alertas da ferramenta

   Outros alertas podem representar fraquezas reais.

4. Reescrever dependências não relacionadas

   Mudanças em dependências alheias não tratam este resultado.

**Concept:** Descarte de alertas baseado em evidências

**Authored coaching hints:**

- Quão restrita é a evidência?
- Qual explicação permitiria a outra pessoa reproduzir a decisão?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-015:bb4537c4bfbee9b67b35673365c83c9e8c5bb88074606bc652792c3a0674b20f -->
## Question 139: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-015`

**Content revision:** `bb4537c4bfbee9b67b35673365c83c9e8c5bb88074606bc652792c3a0674b20f`

### English

An external CI job must report CodeQL findings in GitHub. Which sequence is appropriate?

1. Create a public issue for every query match

   Issues are not the code-scanning ingestion path.

2. Upload the compiler binary as an SBOM

   Compiler binaries are not dependency inventories or findings.

3. Run CodeQL analysis in CI and upload the resulting supported SARIF **[CORRECT]**

   External CodeQL analysis can feed GitHub code scanning through SARIF.

4. Paste the database contents into a secret pattern

   Secret patterns do not ingest code databases.

**Concept:** External analysis result delivery

**Authored coaching hints:**

- Which artifact represents query findings?
- What format does the GitHub code-scanning platform ingest?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo de CI externa debe reportar hallazgos de CodeQL en GitHub. ¿Qué secuencia corresponde?

1. Crear una incidencia pública por coincidencia

   Las incidencias no son la vía de incorporación al análisis de código.

2. Cargar el binario del compilador como SBOM

   Los binarios de compiladores no son inventarios ni hallazgos.

3. Ejecutar análisis CodeQL en CI y cargar el SARIF compatible resultante **[CORRECT]**

   El análisis externo CodeQL puede alimentar GitHub mediante SARIF.

4. Pegar la base de datos en un patrón de secretos

   Los patrones de secretos no incorporan bases de código.

**Concept:** Entrega de resultados de análisis externo

**Authored coaching hints:**

- ¿Qué artefacto representa hallazgos de consultas?
- ¿Qué formato incorpora la plataforma de análisis de código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um job de CI externa precisa relatar resultados CodeQL no GitHub. Qual sequência é adequada?

1. Criar issue pública para cada correspondência

   Issues não são a via de ingestão da varredura.

2. Enviar o binário do compilador como SBOM

   Binários de compiladores não são inventários nem resultados.

3. Executar análise CodeQL na CI e enviar o SARIF compatível resultante **[CORRECT]**

   Análise CodeQL externa alimenta a varredura do GitHub via SARIF.

4. Colar o banco em um padrão de segredos

   Padrões de segredos não ingerem bancos de código.

**Concept:** Entrega de resultados de análise externa

**Authored coaching hints:**

- Qual artefato representa resultados de consultas?
- Qual formato a plataforma de varredura ingere?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-016:2087ede750f13838b123c3d7a2b0040b9ebc9e2595bc7ae4e306f35b0581ef4a -->
## Question 140: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-016`

**Content revision:** `2087ede750f13838b123c3d7a2b0040b9ebc9e2595bc7ae4e306f35b0581ef4a`

### English

Why retain both pull-request-triggered and periodic code analysis when appropriate?

1. Schedules make all pull-request checks unnecessary

   Periodic scans do not provide the same immediate change feedback.

2. Periodic scans revoke leaked credentials

   Code analysis does not revoke provider credentials.

3. Pull-request scans cannot inspect application code

   Pull-request scanning is designed to analyze proposed changes.

4. Change-time feedback catches new issues, while recurring scans can reevaluate existing code with current analysis **[CORRECT]**

   Different triggers support prevention and ongoing assessment.

**Concept:** Analysis trigger strategy

**Authored coaching hints:**

- What changes besides repository content over time?
- Which trigger gives feedback closest to a proposed change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué conservar tanto análisis activados por pull request como periódicos cuando corresponda?

1. Los calendarios hacen innecesarias las comprobaciones de pull requests

   Los análisis periódicos no dan la misma retroalimentación inmediata.

2. Los análisis periódicos revocan credenciales filtradas

   El análisis de código no revoca credenciales de proveedores.

3. Los análisis de pull requests no inspeccionan código de aplicaciones

   El análisis de pull requests está diseñado para cambios propuestos.

4. La retroalimentación al cambiar detecta problemas nuevos; los análisis recurrentes reevalúan código existente con análisis actual **[CORRECT]**

   Los distintos activadores apoyan prevención y evaluación continua.

**Concept:** Estrategia de activadores de análisis

**Authored coaching hints:**

- ¿Qué cambia con el tiempo además del contenido?
- ¿Qué activador informa más cerca de un cambio propuesto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que manter análises disparadas por pull request e periódicas quando adequado?

1. Agendamentos tornam verificações de pull request desnecessárias

   Varreduras periódicas não dão o mesmo feedback imediato.

2. Varreduras periódicas revogam credenciais vazadas

   Análise de código não revoga credenciais de provedores.

3. Varreduras de pull request não inspecionam código de aplicação

   Varredura de pull request foi projetada para mudanças propostas.

4. Feedback na mudança detecta problemas novos; varreduras recorrentes reavaliam código existente com análise atual **[CORRECT]**

   Gatilhos distintos apoiam prevenção e avaliação contínua.

**Concept:** Estratégia de gatilhos de análise

**Authored coaching hints:**

- O que muda com o tempo além do conteúdo?
- Qual gatilho fornece feedback mais próximo de uma mudança proposta?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-code-017:fe7da1022c59f484b7ca4a35a1798bc5163e848c1fc6d8511e3fd8bf58054f11 -->
## Question 141: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-017`

**Content revision:** `fe7da1022c59f484b7ca4a35a1798bc5163e848c1fc6d8511e3fd8bf58054f11`

### English

Two runs of the same analyzer cover different components of one repository and should retain separate result sets. Which SARIF integration concept is relevant?

1. Distinct analysis categories or automation identifiers **[CORRECT]**

   Categories distinguish analyses for the same tool and repository context.

2. A new ruleId for every result on every run

   Changing rule identifiers each run undermines stable result correlation.

3. Identical category and automation identifiers for both component scans

   Reusing the same analysis identity can cause separate runs to replace each other's results.

4. Different file extensions for otherwise identical upload files

   Upload filenames alone do not establish distinct analysis identities.

**Concept:** Separating analysis categories

**Authored coaching hints:**

- Are these the same analysis or different analysis configurations?
- What information lets results remain distinct while each scan stays stable over time?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos ejecuciones del mismo analizador cubren componentes distintos de un repositorio y deben conservar resultados separados. ¿Qué concepto SARIF corresponde?

1. Categorías de análisis o identificadores de automatización distintos **[CORRECT]**

   Las categorías distinguen análisis de la misma herramienta y contexto de repositorio.

2. Un ruleId nuevo para cada resultado en cada ejecución

   Cambiar identificadores en cada ejecución debilita la correlación estable.

3. Categoría e identificadores de automatización idénticos para ambos análisis

   Reutilizar la identidad puede hacer que ejecuciones separadas reemplacen sus resultados.

4. Extensiones distintas para archivos de carga por lo demás idénticos

   Los nombres de archivo no establecen identidades distintas.

**Concept:** Separación de categorías de análisis

**Authored coaching hints:**

- ¿Es el mismo análisis o son configuraciones distintas?
- ¿Qué permite separar resultados y mantener estable cada análisis con el tiempo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Duas execuções do mesmo analisador cobrem componentes distintos e devem manter resultados separados. Qual conceito SARIF é relevante?

1. Categorias de análise ou identificadores de automação distintos **[CORRECT]**

   Categorias distinguem análises da mesma ferramenta e contexto de repositório.

2. Um ruleId novo para cada resultado em cada execução

   Mudar identificadores a cada execução prejudica correlação estável.

3. Categoria e identificadores de automação idênticos para ambas

   Reutilizar a identidade pode fazer execuções separadas substituírem resultados entre si.

4. Extensões diferentes para arquivos de upload iguais no restante

   Nomes de arquivos não estabelecem identidades distintas.

**Concept:** Separação de categorias de análise

**Authored coaching hints:**

- É a mesma análise ou são configurações distintas?
- O que separa resultados e mantém cada análise estável no tempo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support>

<!-- certification-coach-question:ghas-code-018:f7cc535e296776acdec5b63ac6775bfffdfc9bc975173ffa8bb0c6ed9cea7e54 -->
## Question 142: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-018`

**Content revision:** `f7cc535e296776acdec5b63ac6775bfffdfc9bc975173ffa8bb0c6ed9cea7e54`

### English

A third-party SARIF result lacks the remediation guidance present in some CodeQL findings. Which interpretation is accurate?

1. The result must be a secret-scanning alert

   Missing guidance does not change the alert family.

2. Not all tools or custom queries provide every property seen in default CodeQL alerts **[CORRECT]**

   Result detail depends partly on the producing tool and query metadata.

3. All third-party uploads are invalid

   Valid third-party results can have fewer properties.

4. GitHub always invents missing remediation instructions

   The platform does not guarantee invented guidance for missing fields.

**Concept:** Tool-dependent alert detail

**Authored coaching hints:**

- Who supplies the finding's metadata?
- Does a shared display imply identical content from every producer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un resultado SARIF externo carece de instrucciones de remediación presentes en algunos hallazgos CodeQL. ¿Qué interpretación es correcta?

1. Debe ser una alerta de secretos

   La falta de orientación no cambia la familia de alerta.

2. No todas las herramientas o consultas personalizadas aportan cada propiedad de las alertas predeterminadas CodeQL **[CORRECT]**

   El detalle depende en parte de la herramienta y metadatos de consulta.

3. Todas las cargas de terceros son inválidas

   Los resultados externos válidos pueden tener menos propiedades.

4. GitHub siempre inventa instrucciones faltantes

   La plataforma no garantiza inventar orientación para campos faltantes.

**Concept:** Detalle de alertas dependiente de herramienta

**Authored coaching hints:**

- ¿Quién aporta los metadatos del hallazgo?
- ¿Una vista compartida implica contenido idéntico de cada productor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um resultado SARIF externo não tem as orientações de remediação presentes em alguns resultados CodeQL. Qual interpretação é correta?

1. Deve ser um alerta de segredos

   Falta de orientação não muda a família do alerta.

2. Nem toda ferramenta ou consulta personalizada fornece todas as propriedades de alertas padrão CodeQL **[CORRECT]**

   O detalhe depende em parte da ferramenta e dos metadados da consulta.

3. Todos os uploads de terceiros são inválidos

   Resultados externos válidos podem ter menos propriedades.

4. O GitHub sempre inventa instruções ausentes

   A plataforma não garante inventar orientações para campos ausentes.

**Concept:** Detalhes de alertas dependentes da ferramenta

**Authored coaching hints:**

- Quem fornece os metadados do resultado?
- Uma exibição compartilhada implica conteúdo idêntico de todo produtor?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-019:8e8faea1785371b2f5863a5d77dd977ade7253731101fbdf629995f374970c41 -->
## Question 143: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-019`

**Content revision:** `8e8faea1785371b2f5863a5d77dd977ade7253731101fbdf629995f374970c41`

### English

Several request handlers pass unsafe data into the same vulnerable operation. Why might code scanning display one alert with multiple paths?

1. Only one handler can be executed

   Multiple handlers can be reachable.

2. The paths are necessarily false positives

   Multiple paths do not establish a false positive.

3. Related paths to the same vulnerability may be grouped under one alert **[CORRECT]**

   GitHub can group related paths to show a vulnerability's full scope.

4. Only the shortest path is analyzed

   The display can include multiple paths rather than only one.

**Concept:** Multiple-path alert grouping

**Authored coaching hints:**

- What is shared by the reported flows?
- Would one alert necessarily mean one entry point?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Varios manejadores de solicitudes pasan datos inseguros a la misma operación vulnerable. ¿Por qué podría mostrarse una alerta con varias rutas?

1. Solo puede ejecutarse un manejador

   Varios manejadores pueden ser alcanzables.

2. Las rutas necesariamente son falsos positivos

   Varias rutas no establecen un falso positivo.

3. Las rutas relacionadas con la misma vulnerabilidad pueden agruparse en una alerta **[CORRECT]**

   GitHub puede agrupar rutas relacionadas para mostrar el alcance completo.

4. Solo se analiza la ruta más corta

   La vista puede incluir varias rutas, no solo una.

**Concept:** Agrupación de alertas con múltiples rutas

**Authored coaching hints:**

- ¿Qué comparten los flujos reportados?
- ¿Una alerta implica necesariamente un punto de entrada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Vários handlers de requisição passam dados inseguros para a mesma operação vulnerável. Por que pode aparecer um alerta com vários caminhos?

1. Só um handler pode executar

   Vários handlers podem ser alcançáveis.

2. Os caminhos são necessariamente falsos positivos

   Vários caminhos não estabelecem falso positivo.

3. Caminhos relacionados à mesma vulnerabilidade podem ser agrupados em um alerta **[CORRECT]**

   O GitHub agrupa caminhos relacionados para mostrar todo o escopo.

4. Só o caminho mais curto é analisado

   A exibição pode incluir vários caminhos, não apenas um.

**Concept:** Agrupamento de alertas com múltiplos caminhos

**Authored coaching hints:**

- O que os fluxos relatados compartilham?
- Um alerta necessariamente significa um ponto de entrada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-020:ecd5e0ed0e6d18c77f76bd19c7d59f4e148c8b83490b0c464a3b8bf7daf4d458 -->
## Question 144: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-020`

**Content revision:** `ecd5e0ed0e6d18c77f76bd19c7d59f4e148c8b83490b0c464a3b8bf7daf4d458`

### English

A repository includes generated test assets that receive code-scanning findings. What should a reviewer know about GitHub's file category labels?

1. Developers manually set every alert's file category

   GitHub categorizes source files by path.

2. Test labels guarantee the issue is harmless

   Test code can still create security risk.

3. File categories are dependency license categories

   These labels describe code location, not package licensing.

4. GitHub derives such file categories from paths; context still requires review **[CORRECT]**

   Path-based labels help contextualize findings but do not decide risk acceptance.

**Concept:** Code-location category labels

**Authored coaching hints:**

- What does the label describe: location or exploitability?
- Can a test-related process have meaningful privileges?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio incluye recursos de prueba generados con hallazgos de análisis de código. ¿Qué debe saberse de las etiquetas de categoría de archivo de GitHub?

1. Los desarrolladores asignan manualmente cada categoría

   GitHub categoriza archivos fuente por ruta.

2. Las etiquetas de prueba garantizan que el problema es inofensivo

   El código de pruebas aún puede crear riesgo.

3. Las categorías de archivos son categorías de licencias

   Estas etiquetas describen ubicación, no licencias de paquetes.

4. GitHub deriva esas categorías de las rutas; el contexto aún requiere revisión **[CORRECT]**

   Las etiquetas por ruta contextualizan, pero no deciden aceptación de riesgo.

**Concept:** Etiquetas de categoría de ubicación de código

**Authored coaching hints:**

- ¿La etiqueta describe ubicación o explotabilidad?
- ¿Un proceso de pruebas puede tener privilegios relevantes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório inclui recursos de teste gerados com resultados de varredura de código. O que saber sobre rótulos de categoria de arquivo do GitHub?

1. Desenvolvedores definem manualmente toda categoria

   O GitHub categoriza arquivos-fonte pelo caminho.

2. Rótulos de teste garantem que o problema é inofensivo

   Código de teste ainda pode criar risco.

3. Categorias de arquivos são categorias de licenças

   Esses rótulos descrevem localização, não licenciamento.

4. O GitHub deriva categorias dos caminhos; o contexto ainda exige revisão **[CORRECT]**

   Rótulos por caminho contextualizam, mas não decidem aceitação de risco.

**Concept:** Rótulos de categoria de localização de código

**Authored coaching hints:**

- O rótulo descreve localização ou explorabilidade?
- Um processo de teste pode ter privilégios relevantes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-code-021:2c401bb8afb5b1cb096a05b79718e5b5e2de36b2cf173f69e66e454f269f7685 -->
## Question 145: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-021`

**Content revision:** `2c401bb8afb5b1cb096a05b79718e5b5e2de36b2cf173f69e66e454f269f7685`

### English

An organization uses an internal framework that CodeQL does not fully model. What can improve dataflow understanding?

1. Add appropriate framework models through supported CodeQL customization **[CORRECT]**

   Models can describe how data flows through custom dependencies.

2. Rename all framework methods to safe

   Names alone do not establish safe behavior.

3. Disable every flow query

   Disabling queries loses detection rather than improving understanding.

4. Treat missing alerts as proof the framework sanitizes data

   Missing models can cause missed flows.

**Concept:** Custom framework modeling

**Authored coaching hints:**

- What behavior is unknown to the analyzer?
- How could analysis learn the framework's sources, sinks, and flow steps?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización usa un framework interno que CodeQL no modela completamente. ¿Qué puede mejorar la comprensión del flujo de datos?

1. Agregar modelos adecuados del framework mediante personalización compatible de CodeQL **[CORRECT]**

   Los modelos describen cómo fluyen datos por dependencias personalizadas.

2. Renombrar todos sus métodos a safe

   Los nombres no establecen comportamiento seguro.

3. Desactivar todas las consultas de flujo

   Desactivar consultas pierde detección, no mejora comprensión.

4. Interpretar la falta de alertas como prueba de sanitización

   La falta de modelos puede ocasionar flujos omitidos.

**Concept:** Modelado de frameworks personalizados

**Authored coaching hints:**

- ¿Qué comportamiento desconoce el analizador?
- ¿Cómo aprendería los orígenes, destinos y pasos de flujo del framework?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização usa um framework interno não totalmente modelado pelo CodeQL. O que melhora a compreensão do fluxo de dados?

1. Adicionar modelos adequados do framework pela personalização compatível do CodeQL **[CORRECT]**

   Modelos descrevem como dados fluem por dependências personalizadas.

2. Renomear todos os métodos para safe

   Nomes sozinhos não estabelecem comportamento seguro.

3. Desativar todas as consultas de fluxo

   Desativar consultas perde detecção, não melhora compreensão.

4. Tratar ausência de alertas como prova de sanitização

   Modelos ausentes podem causar fluxos não identificados.

**Concept:** Modelagem de frameworks personalizados

**Authored coaching hints:**

- Qual comportamento o analisador desconhece?
- Como aprenderia origens, destinos e etapas de fluxo do framework?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-022:801d1f170b2fb05d52e628bbd218b2b6ce3fb35d3aea50d0d8077a5ddcc48c09 -->
## Question 146: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-022`

**Content revision:** `801d1f170b2fb05d52e628bbd218b2b6ce3fb35d3aea50d0d8077a5ddcc48c09`

### English

A scan takes too long after custom queries are added. What is a useful first optimization step that preserves risk awareness?

1. Dismiss all existing alerts

   Dismissal does not improve query execution time.

2. Measure which analysis stage or query causes the delay before narrowing coverage **[CORRECT]**

   Evidence-based profiling supports targeted performance changes.

3. Disable the default branch scan without checking logs

   Blindly removing scans can create coverage gaps.

4. Remove every query with a high severity

   Severity does not directly identify performance cost.

**Concept:** Evidence-driven scan optimization

**Authored coaching hints:**

- Where is time actually spent?
- What security coverage would a proposed optimization remove?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un análisis tarda demasiado tras agregar consultas personalizadas. ¿Qué primer paso optimiza conservando conciencia del riesgo?

1. Descartar todas las alertas existentes

   Descartar no mejora el tiempo de ejecución.

2. Medir qué etapa o consulta causa la demora antes de reducir cobertura **[CORRECT]**

   Medir con evidencia permite cambios de rendimiento específicos.

3. Desactivar el análisis de la rama predeterminada sin ver registros

   Quitar análisis a ciegas puede crear brechas.

4. Eliminar toda consulta de gravedad alta

   La gravedad no identifica directamente el costo de rendimiento.

**Concept:** Optimización de análisis basada en evidencia

**Authored coaching hints:**

- ¿Dónde se consume realmente el tiempo?
- ¿Qué cobertura eliminaría una optimización propuesta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma varredura demora demais após adicionar consultas personalizadas. Qual primeiro passo otimiza preservando consciência do risco?

1. Descartar todos os alertas existentes

   Descarte não melhora tempo de execução.

2. Medir qual etapa ou consulta causa a demora antes de reduzir cobertura **[CORRECT]**

   Medição com evidências permite ajustes de desempenho específicos.

3. Desativar varredura da branch padrão sem ver logs

   Remover varreduras às cegas cria lacunas.

4. Remover toda consulta de alta severidade

   Severidade não identifica diretamente o custo de desempenho.

**Concept:** Otimização de varredura baseada em evidências

**Authored coaching hints:**

- Onde o tempo é realmente gasto?
- Qual cobertura a otimização proposta removeria?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-023:a95770eb9d3df4cdb8eb466aae2a46f6d4467ddd5f1d506842ebaca78c0e63e1 -->
## Question 147: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-023`

**Content revision:** `a95770eb9d3df4cdb8eb466aae2a46f6d4467ddd5f1d506842ebaca78c0e63e1`

### English

A maintainer adds pull\_request path filters to an analysis workflow. What should they evaluate?

1. Whether filtering makes all existing alerts false positives

   Trigger filters do not invalidate prior findings.

2. Whether paths automatically revoke tokens

   Path filters do not affect issuer credentials.

3. Whether relevant code changes could now avoid the intended analysis **[CORRECT]**

   Narrowing triggers can unintentionally skip security-relevant changes.

4. Whether dependency licenses are renamed

   Workflow trigger paths do not rename license metadata.

**Concept:** Trigger filtering coverage

**Authored coaching hints:**

- Which changes will actually start the workflow?
- Could shared code outside the selected paths affect the application?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se agregan filtros de rutas pull\_request a un flujo de análisis. ¿Qué debe evaluarse?

1. Si el filtrado vuelve falsos positivos todas las alertas

   Los filtros de activación no invalidan hallazgos previos.

2. Si las rutas revocan tokens automáticamente

   Los filtros de rutas no afectan credenciales del emisor.

3. Si cambios de código pertinentes podrían evitar el análisis previsto **[CORRECT]**

   Restringir activadores puede omitir cambios relevantes para seguridad.

4. Si se renombran licencias de dependencias

   Las rutas de activación no renombran metadatos de licencia.

**Concept:** Cobertura de filtrado de activadores

**Authored coaching hints:**

- ¿Qué cambios realmente iniciarán el flujo?
- ¿Código compartido fuera de las rutas seleccionadas puede afectar la aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Foram adicionados filtros de caminhos pull\_request ao workflow de análise. O que avaliar?

1. Se filtros tornam todos os alertas falsos positivos

   Filtros de gatilho não invalidam resultados anteriores.

2. Se caminhos revogam tokens automaticamente

   Filtros de caminhos não afetam credenciais do emissor.

3. Se mudanças relevantes podem agora evitar a análise pretendida **[CORRECT]**

   Restringir gatilhos pode pular mudanças relevantes à segurança.

4. Se licenças de dependências são renomeadas

   Caminhos de gatilho não renomeiam metadados de licença.

**Concept:** Cobertura de filtros de gatilhos

**Authored coaching hints:**

- Quais mudanças realmente iniciam o workflow?
- Código compartilhado fora dos caminhos selecionados pode afetar a aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning>

<!-- certification-coach-question:ghas-code-024:dbbec5bb5ef4885e00960a1692f960ebac434f14e3afb145c8bdc2d3b4457bcf -->
## Question 148: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-024`

**Content revision:** `dbbec5bb5ef4885e00960a1692f960ebac434f14e3afb145c8bdc2d3b4457bcf`

### English

A team wants a SARIF finding to link to the correct repository file. What must the integration represent consistently?

1. The package-registry hostname only

   Registry location does not identify a source finding.

2. The organization's billing contact

   Billing contacts do not map source locations.

3. The alert's notification count

   Notification counts are unrelated to file mapping.

4. Source locations and their paths relative to the analyzed repository root **[CORRECT]**

   Consistent source URIs allow GitHub to match findings to committed files.

**Concept:** SARIF source-location mapping

**Authored coaching hints:**

- Which file did the analyzer inspect?
- How does an absolute CI path map to a repository-relative location?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere que un hallazgo SARIF enlace al archivo correcto del repositorio. ¿Qué debe representar coherentemente la integración?

1. Solo el hostname del registro de paquetes

   La ubicación del registro no identifica un hallazgo fuente.

2. El contacto de facturación de la organización

   Los contactos de facturación no mapean ubicaciones fuente.

3. El recuento de notificaciones de la alerta

   Los recuentos no se relacionan con el mapeo.

4. Ubicaciones fuente y rutas relativas a la raíz del repositorio analizado **[CORRECT]**

   URI fuente coherentes permiten asociar hallazgos a archivos confirmados.

**Concept:** Mapeo de ubicaciones fuente SARIF

**Authored coaching hints:**

- ¿Qué archivo inspeccionó el analizador?
- ¿Cómo se mapea una ruta absoluta de CI a una relativa al repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer que um resultado SARIF aponte para o arquivo correto no repositório. O que representar consistentemente?

1. Só o hostname do registro de pacotes

   O local do registro não identifica um resultado no código.

2. O contato de cobrança da organização

   Contatos de cobrança não mapeiam locais de origem.

3. A contagem de notificações do alerta

   Contagens não se relacionam ao mapeamento.

4. Locais de origem e caminhos relativos à raiz do repositório analisado **[CORRECT]**

   URIs de origem consistentes permitem associar resultados a arquivos commitados.

**Concept:** Mapeamento de locais de origem SARIF

**Authored coaching hints:**

- Qual arquivo o analisador inspecionou?
- Como um caminho absoluto da CI mapeia para um relativo ao repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support>

<!-- certification-coach-question:ghas-code-025:7be90d1f02c8d4ea4f44baade59711fdc2a8472939df862a9900dd5387bd23e5 -->
## Question 149: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-025`

**Content revision:** `7be90d1f02c8d4ea4f44baade59711fdc2a8472939df862a9900dd5387bd23e5`

### English

CodeQL analyzes Java and Kotlin in the same supported language family. Which language identifier is documented for this analysis?

1. java-kotlin **[CORRECT]**

   java-kotlin is the documented identifier for Java, Kotlin, or both.

2. jvm-anything

   This is not the documented identifier.

3. kotlin-only

   This is not the combined supported language identifier.

4. java-script

   JavaScript is a different language family.

**Concept:** CodeQL language identifiers

**Authored coaching hints:**

- Do related source languages share an analysis extractor?
- Which identifier explicitly names both languages?

<details>
<summary>Español — same answer key and option order</summary>

### Español

CodeQL analiza Java y Kotlin en la misma familia compatible. ¿Qué identificador de lenguaje está documentado?

1. java-kotlin **[CORRECT]**

   java-kotlin es el identificador documentado para Java, Kotlin o ambos.

2. jvm-anything

   No es el identificador documentado.

3. kotlin-only

   No es el identificador combinado compatible.

4. java-script

   JavaScript es otra familia de lenguajes.

**Concept:** Identificadores de lenguajes CodeQL

**Authored coaching hints:**

- ¿Lenguajes relacionados comparten extractor de análisis?
- ¿Qué identificador nombra explícitamente ambos lenguajes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

CodeQL analisa Java e Kotlin na mesma família compatível. Qual identificador de linguagem é documentado?

1. java-kotlin **[CORRECT]**

   java-kotlin é o identificador documentado para Java, Kotlin ou ambos.

2. jvm-anything

   Não é o identificador documentado.

3. kotlin-only

   Não é o identificador combinado compatível.

4. java-script

   JavaScript é outra família de linguagens.

**Concept:** Identificadores de linguagens CodeQL

**Authored coaching hints:**

- Linguagens relacionadas compartilham extrator de análise?
- Qual identificador nomeia explicitamente as duas linguagens?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-026:68d550019d932ea4e31cd0805b812beb586c64a3b8451e8b4474747e4e500b03 -->
## Question 150: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-026`

**Content revision:** `68d550019d932ea4e31cd0805b812beb586c64a3b8451e8b4474747e4e500b03`

### English

A project wants CodeQL analysis for both JavaScript and TypeScript. Which documented language identifier covers both?

1. typescript-isolated

   This is not the documented combined identifier.

2. javascript-typescript **[CORRECT]**

   javascript-typescript covers JavaScript, TypeScript, or both.

3. java-kotlin

   This identifies the Java/Kotlin family.

4. ecmascript-all

   This is not the documented CodeQL identifier.

**Concept:** Combined JavaScript and TypeScript analysis

**Authored coaching hints:**

- Are the languages analyzed through a shared family?
- Which spelling corresponds to the documented extractor?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un proyecto quiere análisis CodeQL para JavaScript y TypeScript. ¿Qué identificador documentado cubre ambos?

1. typescript-isolated

   No es el identificador combinado documentado.

2. javascript-typescript **[CORRECT]**

   javascript-typescript cubre JavaScript, TypeScript o ambos.

3. java-kotlin

   Identifica la familia Java/Kotlin.

4. ecmascript-all

   No es el identificador documentado de CodeQL.

**Concept:** Análisis combinado de JavaScript y TypeScript

**Authored coaching hints:**

- ¿Los lenguajes se analizan mediante una familia compartida?
- ¿Qué escritura corresponde al extractor documentado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um projeto quer análise CodeQL de JavaScript e TypeScript. Qual identificador documentado cobre ambos?

1. typescript-isolated

   Não é o identificador combinado documentado.

2. javascript-typescript **[CORRECT]**

   javascript-typescript cobre JavaScript, TypeScript ou ambos.

3. java-kotlin

   Identifica a família Java/Kotlin.

4. ecmascript-all

   Não é o identificador documentado do CodeQL.

**Concept:** Análise combinada de JavaScript e TypeScript

**Authored coaching hints:**

- As linguagens são analisadas por uma família compartilhada?
- Qual grafia corresponde ao extrator documentado?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-027:e3099364e006504e6cc9a69eb1f71dfd44a35ca578126f5efcec0b42f28a7f51 -->
## Question 151: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-027`

**Content revision:** `e3099364e006504e6cc9a69eb1f71dfd44a35ca578126f5efcec0b42f28a7f51`

### English

A CodeQL workflow upload fails after analysis succeeded. What is the best interpretation of the repository's unchanged alert list?

1. Every issue was fixed

   An upload failure does not indicate code remediation.

2. No further diagnosis is necessary

   Delivery failure needs investigation.

3. The analysis may exist in CI but was not successfully ingested into GitHub **[CORRECT]**

   Analysis execution and result ingestion are separate stages.

4. The application must contain no supported code

   An ingestion problem does not prove language incompatibility.

**Concept:** Analysis versus ingestion success

**Authored coaching hints:**

- Did both production and delivery of results complete?
- Which stage supplies the repository's visible alert state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La carga de un flujo CodeQL falla después de un análisis exitoso. ¿Cómo interpretar mejor la lista de alertas sin cambios?

1. Se corrigieron todos los problemas

   Fallar la carga no indica remediación.

2. No hace falta más diagnóstico

   El fallo de entrega necesita investigación.

3. El análisis puede existir en CI, pero no se incorporó correctamente a GitHub **[CORRECT]**

   La ejecución del análisis y la incorporación son etapas separadas.

4. La aplicación no debe contener código compatible

   Un problema de incorporación no prueba incompatibilidad de lenguaje.

**Concept:** Éxito de análisis frente a incorporación

**Authored coaching hints:**

- ¿Se completaron tanto producción como entrega de resultados?
- ¿Qué etapa aporta el estado visible de alertas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O upload de um workflow CodeQL falha após análise bem-sucedida. Como interpretar melhor a lista de alertas inalterada?

1. Todos os problemas foram corrigidos

   Falha de upload não indica remediação.

2. Não é necessário diagnosticar mais

   Falha na entrega exige investigação.

3. A análise pode existir na CI, mas não foi ingerida com sucesso no GitHub **[CORRECT]**

   Executar análise e ingerir resultados são etapas separadas.

4. A aplicação não deve conter código compatível

   Problema de ingestão não prova incompatibilidade de linguagem.

**Concept:** Sucesso da análise versus ingestão

**Authored coaching hints:**

- Produção e entrega dos resultados foram concluídas?
- Qual etapa fornece o estado visível dos alertas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-code-028:c82ada4858708ffeb57f9487314e3a646fe852755365d51f3845220c25f26040 -->
## Question 152: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-028`

**Content revision:** `c82ada4858708ffeb57f9487314e3a646fe852755365d51f3845220c25f26040`

### English

A developer says a CodeQL database is a database of known CVEs. Which description is correct?

1. It stores only revoked secrets

   Credential revocation is unrelated to CodeQL databases.

2. It is the dependency graph's SPDX export

   SPDX exports inventory dependencies.

3. It is the GitHub Advisory Database mirror

   The Advisory Database stores vulnerability knowledge, not the code representation used by CodeQL.

4. It represents the analyzed code so queries can reason about program structure and behavior **[CORRECT]**

   CodeQL treats code as data for query-based analysis.

**Concept:** CodeQL database purpose

**Authored coaching hints:**

- What input is extracted before running code queries?
- Is the database about the project's code or published vulnerability records?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador dice que una base de CodeQL es una base de CVE conocidos. ¿Qué descripción es correcta?

1. Solo almacena secretos revocados

   La revocación no se relaciona con bases CodeQL.

2. Es la exportación SPDX del gráfico de dependencias

   SPDX inventaría dependencias.

3. Es una réplica de GitHub Advisory Database

   Advisory Database almacena conocimiento de vulnerabilidades, no la representación de código CodeQL.

4. Representa el código analizado para que las consultas razonen sobre estructura y comportamiento **[CORRECT]**

   CodeQL trata el código como datos para análisis por consultas.

**Concept:** Propósito de la base CodeQL

**Authored coaching hints:**

- ¿Qué entrada se extrae antes de ejecutar consultas de código?
- ¿La base trata código del proyecto o registros publicados de vulnerabilidades?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor diz que um banco CodeQL é um banco de CVEs conhecidos. Qual descrição é correta?

1. Armazena só segredos revogados

   Revogação não se relaciona a bancos CodeQL.

2. É a exportação SPDX do grafo de dependências

   SPDX inventaria dependências.

3. É um espelho do GitHub Advisory Database

   Advisory Database armazena conhecimento de vulnerabilidades, não a representação de código CodeQL.

4. Representa o código analisado para consultas raciocinarem sobre estrutura e comportamento **[CORRECT]**

   CodeQL trata código como dados para análise por consultas.

**Concept:** Objetivo do banco CodeQL

**Authored coaching hints:**

- Qual entrada é extraída antes das consultas de código?
- O banco trata do código do projeto ou de registros publicados de vulnerabilidades?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-code-029:ce52d8e7d06f47ca5552802b463ea8f3e5281aba92c093e2b39c8eea56533f45 -->
## Question 153: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-029`

**Content revision:** `ce52d8e7d06f47ca5552802b463ea8f3e5281aba92c093e2b39c8eea56533f45`

### English

An organization broadens analysis from default to security-extended and receives more findings. Which conclusion is most defensible before triage?

1. Coverage changed, so additional findings need review rather than automatic rejection **[CORRECT]**

   Additional queries can reveal existing issues or lower-confidence matches.

2. Every new result is necessarily a false positive

   Extended findings can include real vulnerabilities.

3. The application became vulnerable only when the suite changed

   Detection timing is not necessarily introduction timing.

4. The dependency graph must have been corrupted

   Query-suite changes do not imply dependency-graph corruption.

**Concept:** Interpreting suite expansion

**Authored coaching hints:**

- Did the code change or only the questions asked of it?
- How does broader coverage affect the need for triage?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización amplía de default a security-extended y recibe más hallazgos. ¿Qué conclusión es más defendible antes de clasificarlos?

1. Cambió la cobertura; hay que revisar los hallazgos adicionales, no rechazarlos automáticamente **[CORRECT]**

   Las consultas adicionales revelan problemas existentes o coincidencias de menor confianza.

2. Todo resultado nuevo necesariamente es falso positivo

   Los hallazgos extendidos pueden incluir vulnerabilidades reales.

3. La aplicación se volvió vulnerable solo al cambiar la suite

   La detección no necesariamente coincide con la introducción.

4. El gráfico de dependencias debe haberse dañado

   Cambiar suites no implica corrupción del gráfico.

**Concept:** Interpretación de ampliación de suites

**Authored coaching hints:**

- ¿Cambió el código o solo las preguntas que se le hacen?
- ¿Cómo afecta una cobertura mayor a la necesidad de clasificación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização amplia de default para security-extended e recebe mais resultados. Qual conclusão é mais defensável antes da triagem?

1. A cobertura mudou; resultados adicionais precisam de revisão, não rejeição automática **[CORRECT]**

   Consultas adicionais revelam problemas existentes ou correspondências de menor confiança.

2. Todo resultado novo necessariamente é falso positivo

   Resultados estendidos podem incluir vulnerabilidades reais.

3. A aplicação só ficou vulnerável quando a suíte mudou

   O momento da detecção não é necessariamente o da introdução.

4. O grafo de dependências deve ter sido corrompido

   Mudar suítes não implica corrupção do grafo.

**Concept:** Interpretação da ampliação de suítes

**Authored coaching hints:**

- O código mudou ou só as perguntas feitas a ele?
- Como cobertura maior afeta a necessidade de triagem?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites>

<!-- certification-coach-question:ghas-code-030:69cc1affaad6d182dde8e7b37830dd3ae3bbfeab836a5ab0f0690e4347d628ba -->
## Question 154: Configure and use Code Security

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-code-030`

**Content revision:** `69cc1affaad6d182dde8e7b37830dd3ae3bbfeab836a5ab0f0690e4347d628ba`

### English

A team wants code-quality findings in addition to the broader security query set. Which built-in suite adds maintainability and reliability queries?

1. default only

   The default suite emphasizes precise security queries rather than the expanded quality set.

2. security-and-quality **[CORRECT]**

   security-and-quality extends security-extended with maintainability and reliability checks.

3. A Dependabot update group

   Update groups manage dependency proposals.

4. A generic secret pattern

   Secret patterns detect credentials.

**Concept:** Security and quality query suite

**Authored coaching hints:**

- Which suite expands beyond vulnerability checks?
- What kinds of findings concern long-term code health?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere hallazgos de calidad además del conjunto ampliado de seguridad. ¿Qué suite integrada agrega consultas de mantenibilidad y confiabilidad?

1. Solo default

   La suite predeterminada enfatiza consultas precisas de seguridad, no el conjunto ampliado de calidad.

2. security-and-quality **[CORRECT]**

   security-and-quality amplía security-extended con mantenibilidad y confiabilidad.

3. Un grupo de actualización de Dependabot

   Los grupos gestionan propuestas de dependencias.

4. Un patrón genérico de secretos

   Los patrones detectan credenciales.

**Concept:** Suite de consultas de seguridad y calidad

**Authored coaching hints:**

- ¿Qué suite va más allá de comprobar vulnerabilidades?
- ¿Qué hallazgos conciernen a la salud del código a largo plazo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer resultados de qualidade além do conjunto ampliado de segurança. Qual suíte integrada adiciona consultas de manutenibilidade e confiabilidade?

1. Só default

   A suíte padrão enfatiza consultas precisas de segurança, não o conjunto ampliado de qualidade.

2. security-and-quality **[CORRECT]**

   security-and-quality estende security-extended com manutenibilidade e confiabilidade.

3. Um grupo de atualização do Dependabot

   Grupos gerenciam propostas de dependências.

4. Um padrão genérico de segredos

   Padrões detectam credenciais.

**Concept:** Suíte de consultas de segurança e qualidade

**Authored coaching hints:**

- Qual suíte vai além de verificar vulnerabilidades?
- Quais resultados tratam da saúde do código no longo prazo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites>

<!-- certification-coach-question:ghas-operations-001:c7e62134dd9d15626890092d07a44115166b4e5957689d2093609b7ccbe0fbee -->
## Question 155: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-001`

**Content revision:** `c7e62134dd9d15626890092d07a44115166b4e5957689d2093609b7ccbe0fbee`

### English

An incident report references CVE-YYYY-NNNN. What does the CVE identifier primarily identify?

1. A specific repository's alert instance

   One vulnerability can affect many repository alert instances.

2. A broad class of coding weakness

   CWE identifiers classify weakness types.

3. A specific vulnerability record in the CVE system **[CORRECT]**

   A CVE identifier names a particular tracked vulnerability, not a weakness category.

4. A required remediation deadline

   A CVE identifier does not encode an organization's deadline.

**Concept:** CVE versus alert identity

**Authored coaching hints:**

- Can the same identifier affect many projects?
- Is it naming an instance, a weakness category, or a disclosure record?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un informe de incidente menciona CVE-YYYY-NNNN. ¿Qué identifica principalmente un CVE?

1. Una instancia de alerta de un repositorio concreto

   Una vulnerabilidad puede afectar muchas instancias de alerta.

2. Una clase amplia de debilidad de programación

   Los CWE clasifican tipos de debilidades.

3. Un registro específico de vulnerabilidad del sistema CVE **[CORRECT]**

   Un CVE nombra una vulnerabilidad concreta rastreada, no una categoría.

4. Una fecha límite obligatoria de remediación

   Un CVE no codifica fechas límite de una organización.

**Concept:** CVE frente a identidad de alerta

**Authored coaching hints:**

- ¿El mismo identificador puede afectar muchos proyectos?
- ¿Nombra una instancia, categoría de debilidad o registro de divulgación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um relatório de incidente cita CVE-YYYY-NNNN. O que um CVE identifica principalmente?

1. Uma instância de alerta de um repositório específico

   Uma vulnerabilidade pode afetar muitas instâncias de alertas.

2. Uma classe ampla de fraqueza de programação

   CWEs classificam tipos de fraquezas.

3. Um registro específico de vulnerabilidade no sistema CVE **[CORRECT]**

   Um CVE nomeia uma vulnerabilidade específica rastreada, não uma categoria.

4. Um prazo obrigatório de remediação

   Um CVE não codifica o prazo de uma organização.

**Concept:** CVE versus identidade de alerta

**Authored coaching hints:**

- O mesmo identificador pode afetar muitos projetos?
- Ele nomeia uma instância, categoria de fraqueza ou registro de divulgação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-repository-security-advisories>

<!-- certification-coach-question:ghas-operations-002:f95e58ed9a7ea94d74b26a951e6d75edb7dab29936ea02e8492c5c6789aea8d2 -->
## Question 156: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-002`

**Content revision:** `f95e58ed9a7ea94d74b26a951e6d75edb7dab29936ea02e8492c5c6789aea8d2`

### English

A triage team groups several unrelated injection findings under a CWE. What does that grouping represent?

1. A single publicly tracked vulnerability

   CVE identifies a particular vulnerability rather than a recurring weakness category.

2. An advisory's patched-version range

   Affected and patched versions describe individual advisory applicability.

3. A unique repository alert instance

   Repository alert identity differs from a general weakness classification.

4. A shared weakness category rather than one specific vulnerability **[CORRECT]**

   CWE describes weakness types that can recur in different vulnerabilities.

**Concept:** CWE classification

**Authored coaching hints:**

- Can different products make the same kind of mistake?
- What distinguishes a type of defect from one disclosed occurrence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo agrupa hallazgos de inyección no relacionados bajo un CWE. ¿Qué representa esa agrupación?

1. Una única vulnerabilidad rastreada públicamente

   CVE identifica una vulnerabilidad, no una categoría recurrente.

2. El rango de versiones corregidas de un aviso

   Las versiones afectadas y corregidas describen aplicabilidad de un aviso individual.

3. Una instancia única de alerta de repositorio

   La identidad de alerta difiere de una clasificación general.

4. Una categoría de debilidad compartida, no una vulnerabilidad específica **[CORRECT]**

   CWE describe tipos de debilidades que pueden repetirse en distintas vulnerabilidades.

**Concept:** Clasificación CWE

**Authored coaching hints:**

- ¿Productos distintos pueden cometer el mismo tipo de error?
- ¿Qué distingue un tipo de defecto de una ocurrencia divulgada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe agrupa resultados de injeção não relacionados sob um CWE. O que isso representa?

1. Uma única vulnerabilidade rastreada publicamente

   CVE identifica vulnerabilidade específica, não categoria recorrente.

2. A faixa de versões corrigidas de um comunicado

   Versões afetadas e corrigidas descrevem aplicabilidade de um comunicado individual.

3. Uma instância única de alerta do repositório

   Identidade de alerta difere de classificação geral.

4. Uma categoria de fraqueza compartilhada, não uma vulnerabilidade específica **[CORRECT]**

   CWE descreve tipos de fraquezas que se repetem em vulnerabilidades diferentes.

**Concept:** Classificação CWE

**Authored coaching hints:**

- Produtos diferentes podem cometer o mesmo tipo de erro?
- O que distingue um tipo de defeito de uma ocorrência divulgada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/reference/supply-chain-security/criteria-for-preset-rules>

<!-- certification-coach-question:ghas-operations-003:1368e4fcbb6273898b9844cc98154d80a474b8949501508efebe6c5e05431bef -->
## Question 157: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-003`

**Content revision:** `1368e4fcbb6273898b9844cc98154d80a474b8949501508efebe6c5e05431bef`

### English

What does a GHSA identifier identify in GitHub's vulnerability ecosystem?

1. A GitHub security advisory record **[CORRECT]**

   Each advisory has a unique GHSA identifier.

2. An organization-wide remediation policy

   Policies have separate configuration and identity.

3. A CodeQL database build

   CodeQL database builds are not GHSA records.

4. A dependency-review run's status

   A check run is not a security advisory.

**Concept:** GHSA record identity

**Authored coaching hints:**

- Which database assigns this identifier?
- Could the advisory also link to a CVE?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué identifica un GHSA en el ecosistema de vulnerabilidades de GitHub?

1. Un registro de aviso de seguridad de GitHub **[CORRECT]**

   Cada aviso tiene un GHSA único.

2. Una política organizacional de remediación

   Las políticas tienen configuración e identidad separadas.

3. Una compilación de base CodeQL

   Las compilaciones de bases CodeQL no son registros GHSA.

4. El estado de una ejecución de revisión de dependencias

   Una ejecución de comprobación no es un aviso.

**Concept:** Identidad de registro GHSA

**Authored coaching hints:**

- ¿Qué base asigna este identificador?
- ¿El aviso también podría vincular un CVE?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que um GHSA identifica no ecossistema de vulnerabilidades do GitHub?

1. Um registro de comunicado de segurança do GitHub **[CORRECT]**

   Cada comunicado tem um GHSA único.

2. Uma política organizacional de remediação

   Políticas têm configuração e identidade separadas.

3. Um build de banco CodeQL

   Builds de bancos CodeQL não são registros GHSA.

4. O estado de uma execução de revisão de dependências

   Uma execução de verificação não é comunicado de segurança.

**Concept:** Identidade de registro GHSA

**Authored coaching hints:**

- Qual banco atribui esse identificador?
- O comunicado também poderia vincular um CVE?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-004:9ac0ba95eb7dbbe63937e398df5658d1940683c367d34ca1e60252567ab4178e -->
## Question 158: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-004`

**Content revision:** `9ac0ba95eb7dbbe63937e398df5658d1940683c367d34ca1e60252567ab4178e`

### English

A vulnerability has a high EPSS score. What does that signal mean?

1. Its fix is guaranteed to be easy

   EPSS estimates exploitation, not remediation effort.

2. The model estimates a relatively high likelihood of exploitation in the next 30 days **[CORRECT]**

   EPSS predicts near-term exploitation likelihood.

3. Every affected repository is already compromised

   A probability estimate is not evidence every installation was exploited.

4. Its source code must be public

   EPSS does not determine source visibility.

**Concept:** EPSS interpretation

**Authored coaching hints:**

- Is the metric about impact, likelihood, or effort?
- Does a forecast establish that a specific incident occurred?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una vulnerabilidad tiene EPSS alto. ¿Qué significa esa señal?

1. Se garantiza que corregirla es fácil

   EPSS estima explotación, no esfuerzo de remediación.

2. El modelo estima una probabilidad relativamente alta de explotación en los próximos 30 días **[CORRECT]**

   EPSS predice probabilidad de explotación a corto plazo.

3. Todos los repositorios afectados ya están comprometidos

   Una estimación no evidencia que cada instalación fuera explotada.

4. Su código fuente debe ser público

   EPSS no determina visibilidad del código.

**Concept:** Interpretación de EPSS

**Authored coaching hints:**

- ¿La métrica trata impacto, probabilidad o esfuerzo?
- ¿Un pronóstico establece un incidente específico?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma vulnerabilidade tem EPSS alto. O que esse sinal significa?

1. É garantido que a correção seja fácil

   EPSS estima exploração, não esforço de remediação.

2. O modelo estima probabilidade relativamente alta de exploração nos próximos 30 dias **[CORRECT]**

   EPSS prevê probabilidade de exploração em curto prazo.

3. Todos os repositórios afetados já estão comprometidos

   Estimativa não comprova que toda instalação foi explorada.

4. Seu código-fonte precisa ser público

   EPSS não determina visibilidade do código.

**Concept:** Interpretação de EPSS

**Authored coaching hints:**

- A métrica trata impacto, probabilidade ou esforço?
- Uma previsão estabelece um incidente específico?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-005:e651f698fb87f97f21c257ebbc4f701c20f0f1ea8c98d34bcb18b8f2a5d23e5b -->
## Question 159: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-005`

**Content revision:** `e651f698fb87f97f21c257ebbc4f701c20f0f1ea8c98d34bcb18b8f2a5d23e5b`

### English

A dependency advisory has EPSS probability 2% and percentile 90. Which interpretation is correct?

1. There is a 90% exploitation probability

   Percentile is relative ranking, not the event probability.

2. Exactly 2% of this repository's files are affected

   EPSS does not measure affected file percentage.

3. Its modeled exploitation probability is 2%, ranking above about 90% of scored vulnerabilities **[CORRECT]**

   Probability and percentile describe likelihood and relative position respectively.

4. The patch is 90% compatible

   Patch compatibility is a different metric.

**Concept:** EPSS probability versus percentile

**Authored coaching hints:**

- What does percentile compare against?
- Which number is the modeled event probability?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un aviso tiene probabilidad EPSS de 2% y percentil 90. ¿Qué interpretación es correcta?

1. Hay 90% de probabilidad de explotación

   El percentil es posición relativa, no probabilidad del evento.

2. Exactamente 2% de los archivos de este repositorio están afectados

   EPSS no mide porcentaje de archivos afectados.

3. La probabilidad modelada es 2%, por encima de aproximadamente 90% de las vulnerabilidades puntuadas **[CORRECT]**

   Probabilidad y percentil describen respectivamente posibilidad y posición relativa.

4. La corrección es 90% compatible

   La compatibilidad de corrección es otra métrica.

**Concept:** Probabilidad EPSS frente a percentil

**Authored coaching hints:**

- ¿Contra qué compara el percentil?
- ¿Qué número es la probabilidad modelada del evento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um comunicado tem probabilidade EPSS de 2% e percentil 90. Qual interpretação é correta?

1. Há 90% de probabilidade de exploração

   Percentil é posição relativa, não probabilidade do evento.

2. Exatamente 2% dos arquivos deste repositório são afetados

   EPSS não mede percentual de arquivos afetados.

3. A probabilidade modelada é 2%, acima de cerca de 90% das vulnerabilidades pontuadas **[CORRECT]**

   Probabilidade e percentil descrevem chance e posição relativa respectivamente.

4. A correção é 90% compatível

   Compatibilidade da correção é outra métrica.

**Concept:** Probabilidade EPSS versus percentil

**Authored coaching hints:**

- Com o que o percentil compara?
- Qual número é a probabilidade modelada do evento?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-006:4a957b34d5f529d6c009f1892e2b8eed88bbedfcb4b365cefa43e2c22e8869cc -->
## Question 160: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-006`

**Content revision:** `4a957b34d5f529d6c009f1892e2b8eed88bbedfcb4b365cefa43e2c22e8869cc`

### English

Two alerts have the same severity, but only one affects an internet-facing production path with an available exploit. What should guide remediation order?

1. Severity alone, treating every equally rated alert as equally urgent

   Equal severity does not establish equal practical risk.

2. Age alone, always working oldest first

   Age can matter but does not capture the stated exposure difference.

3. Patch effort alone, always fixing the easiest issue first

   Ease of fixing is not the sole measure of urgency.

4. Exposure, exploitability, asset impact, and available mitigation **[CORRECT]**

   Context differentiates risks with identical severity labels.

**Concept:** Context-aware risk prioritization

**Authored coaching hints:**

- Which facts differ between the two deployments?
- What would a severity-only queue fail to account for?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos alertas tienen igual gravedad, pero solo una afecta una ruta de producción pública en internet con exploit disponible. ¿Qué debe guiar el orden de remediación?

1. Solo gravedad, tratando igual toda alerta de la misma calificación

   Igual gravedad no establece igual riesgo práctico.

2. Solo antigüedad, siempre la más antigua primero

   La antigüedad importa, pero no capta la exposición indicada.

3. Solo esfuerzo, siempre la más fácil primero

   La facilidad no es la única medida de urgencia.

4. Exposición, explotabilidad, impacto en activos y mitigación disponible **[CORRECT]**

   El contexto diferencia riesgos con idéntica gravedad.

**Concept:** Priorización de riesgo según contexto

**Authored coaching hints:**

- ¿Qué hechos difieren entre los despliegues?
- ¿Qué omitiría una cola basada solo en gravedad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dois alertas têm mesma severidade, mas só um afeta caminho de produção exposto à internet com exploit disponível. O que deve orientar a ordem de remediação?

1. Só severidade, tratando alertas de mesma nota como igualmente urgentes

   Severidade igual não estabelece risco prático igual.

2. Só idade, sempre o mais antigo primeiro

   Idade importa, mas não captura a diferença de exposição.

3. Só esforço, sempre o mais fácil primeiro

   Facilidade não é a única medida de urgência.

4. Exposição, explorabilidade, impacto nos ativos e mitigação disponível **[CORRECT]**

   Contexto diferencia riscos com severidades idênticas.

**Concept:** Priorização de risco com contexto

**Authored coaching hints:**

- Quais fatos diferem entre as implantações?
- O que uma fila só por severidade deixaria de considerar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics>

<!-- certification-coach-question:ghas-operations-007:03546014a013df6d0d224226ac804993a1ad651beb940d840e0405f14d98ff27 -->
## Question 161: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-007`

**Content revision:** `03546014a013df6d0d224226ac804993a1ad651beb940d840e0405f14d98ff27`

### English

A critical alert is dismissed as accepted risk. Which record makes the decision most useful for future review?

1. Rationale, accountable owner, compensating controls, and a review date **[CORRECT]**

   A reviewable exception captures context and accountability.

2. Only a thumbs-up reaction

   A reaction does not explain risk acceptance.

3. Only the number of alerts remaining

   Queue size does not justify this decision.

4. A statement that dismissal patched the code

   Dismissal does not patch vulnerable code.

**Concept:** Documented risk acceptance

**Authored coaching hints:**

- What would a new reviewer need to understand the decision?
- When should the team revisit assumptions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se descarta una alerta crítica como riesgo aceptado. ¿Qué registro hace más útil la decisión para revisiones futuras?

1. Justificación, responsable, controles compensatorios y fecha de revisión **[CORRECT]**

   Una excepción revisable captura contexto y responsabilidad.

2. Solo una reacción de aprobación

   Una reacción no explica aceptación de riesgo.

3. Solo el número de alertas restantes

   El tamaño de cola no justifica la decisión.

4. Una afirmación de que descartar corrigió el código

   Descartar no corrige código vulnerable.

**Concept:** Aceptación de riesgo documentada

**Authored coaching hints:**

- ¿Qué necesitaría una nueva persona revisora para comprender la decisión?
- ¿Cuándo debe el equipo revisar los supuestos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta crítico é descartado como risco aceito. Qual registro torna a decisão mais útil em revisões futuras?

1. Justificativa, responsável, controles compensatórios e data de revisão **[CORRECT]**

   Exceção revisável captura contexto e responsabilidade.

2. Só uma reação de aprovação

   Uma reação não explica aceitação de risco.

3. Só a quantidade de alertas restantes

   Tamanho da fila não justifica a decisão.

4. Uma afirmação de que descartar corrigiu o código

   Descarte não corrige código vulnerável.

**Concept:** Aceitação de risco documentada

**Authored coaching hints:**

- O que uma nova pessoa revisora precisaria para entender a decisão?
- Quando a equipe deve rever os pressupostos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-operations-008:748ec31fede92eaccb7ab2ff91c3ba7d81e729617b65c2dc5772034c6c26791b -->
## Question 162: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-008`

**Content revision:** `748ec31fede92eaccb7ab2ff91c3ba7d81e729617b65c2dc5772034c6c26791b`

### English

A false-positive assessment covers one path, but the alert also lists other paths to the unsafe operation. What should happen before dismissal?

1. Assume every path has the same validation as the reviewed path

   Different paths can have different checks.

2. Review all relevant reported paths for the asserted protection **[CORRECT]**

   Evidence must address the full scope of the finding.

3. Dismiss the alert because at least one safe path exists

   One safe path does not make other unsafe paths harmless.

4. Treat the shared sink as proof that all input is trusted

   A shared sink can receive both validated and unvalidated input.

**Concept:** Complete dataflow triage

**Authored coaching hints:**

- What evidence exists for the unreviewed paths?
- Which shared components do not necessarily imply shared validation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una evaluación de falso positivo cubre una ruta, pero la alerta enumera otras hasta la operación insegura. ¿Qué hacer antes de descartarla?

1. Suponer que todas tienen la validación de la ruta revisada

   Las rutas pueden tener comprobaciones distintas.

2. Revisar todas las rutas pertinentes para comprobar la protección alegada **[CORRECT]**

   La evidencia debe abordar todo el alcance del hallazgo.

3. Descartar porque existe al menos una ruta segura

   Una ruta segura no vuelve inofensivas las inseguras.

4. Tratar el destino compartido como prueba de entradas confiables

   Un destino puede recibir entradas validadas y no validadas.

**Concept:** Clasificación completa de flujo de datos

**Authored coaching hints:**

- ¿Qué evidencia existe para rutas no revisadas?
- ¿Qué componentes compartidos no implican necesariamente validación compartida?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma avaliação de falso positivo cobre um caminho, mas o alerta lista outros até a operação insegura. O que fazer antes de descartar?

1. Supor que todos têm a validação do caminho revisado

   Caminhos podem ter verificações diferentes.

2. Revisar todos os caminhos relevantes quanto à proteção alegada **[CORRECT]**

   A evidência precisa cobrir todo o escopo do resultado.

3. Descartar porque existe pelo menos um caminho seguro

   Um caminho seguro não torna outros inseguros inofensivos.

4. Tratar o destino compartilhado como prova de entradas confiáveis

   Um destino pode receber entradas validadas e não validadas.

**Concept:** Triagem completa do fluxo de dados

**Authored coaching hints:**

- Qual evidência existe para caminhos não revisados?
- Quais componentes compartilhados não implicam necessariamente validação compartilhada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-operations-009:81dc78982a96f0892995b38dce7d05efe56aa62aef6d9e76ca50f0f21a79a988 -->
## Question 163: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-009`

**Content revision:** `81dc78982a96f0892995b38dce7d05efe56aa62aef6d9e76ca50f0f21a79a988`

### English

A security campaign needs to be actionable for developers. Which design is most effective?

1. Include every unrelated alert with no owner

   An unbounded unrelated set makes ownership and focus difficult.

2. Use a deadline without any support contact

   A deadline alone omits support and context.

3. Select a coherent alert set, explain priority, identify a contact, and set a remediation target **[CORRECT]**

   Campaigns work best as clear, collaborative remediation objectives.

4. Use only raw repository counts

   Counts alone do not tell developers what to fix.

**Concept:** Actionable campaign design

**Authored coaching hints:**

- Can an assigned developer identify the concrete next step?
- Who helps resolve uncertainty about the remediation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una campaña de seguridad debe ser accionable para desarrolladores. ¿Qué diseño es más eficaz?

1. Incluir todas las alertas no relacionadas sin responsables

   Un conjunto ilimitado y no relacionado dificulta enfoque y responsabilidad.

2. Usar una fecha límite sin contacto de apoyo

   Una fecha sola omite apoyo y contexto.

3. Seleccionar alertas coherentes, explicar prioridad, identificar contacto y fijar objetivo de remediación **[CORRECT]**

   Las campañas funcionan como objetivos claros y colaborativos de remediación.

4. Usar solo recuentos brutos de repositorios

   Los recuentos solos no indican qué corregir.

**Concept:** Diseño de campañas accionables

**Authored coaching hints:**

- ¿Un desarrollador asignado puede identificar el siguiente paso concreto?
- ¿Quién ayuda ante incertidumbre sobre la remediación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma campanha precisa ser acionável para desenvolvedores. Qual desenho é mais eficaz?

1. Incluir todo alerta não relacionado sem responsável

   Um conjunto ilimitado e não relacionado dificulta foco e responsabilidade.

2. Usar prazo sem contato de apoio

   Um prazo sozinho omite apoio e contexto.

3. Selecionar alertas coerentes, explicar prioridade, identificar contato e definir meta de remediação **[CORRECT]**

   Campanhas funcionam como objetivos claros e colaborativos de remediação.

4. Usar só contagens brutas de repositórios

   Contagens sozinhas não dizem o que corrigir.

**Concept:** Desenho de campanhas acionáveis

**Authored coaching hints:**

- Um desenvolvedor designado identifica o próximo passo concreto?
- Quem ajuda a resolver dúvidas sobre a remediação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-010:72d9d1c1c9b02106c1a800eb6312c3281d136805541348ab723d235d5f2c1f39 -->
## Question 164: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-010`

**Content revision:** `72d9d1c1c9b02106c1a800eb6312c3281d136805541348ab723d235d5f2c1f39`

### English

A campaign reaches its target date with unresolved valid alerts. What should the security lead do?

1. Declare them fixed because the date passed

   Time passing does not change vulnerable behavior.

2. Remove them from every report

   Hiding alerts obscures remaining work.

3. Treat the deadline as automatic risk acceptance

   Risk acceptance requires an accountable decision.

4. Review remaining owners and blockers, escalate risk, and update the remediation plan **[CORRECT]**

   Review and escalation keep unresolved risk visible and owned.

**Concept:** Campaign follow-through

**Authored coaching hints:**

- What did the date signify?
- What evidence shows whether the underlying risk remains?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una campaña llega a su fecha objetivo con alertas válidas sin resolver. ¿Qué debe hacer el líder de seguridad?

1. Declararlas corregidas porque pasó la fecha

   El tiempo no cambia comportamientos vulnerables.

2. Quitarlas de todos los informes

   Ocultarlas encubre trabajo pendiente.

3. Tratar el plazo como aceptación automática de riesgo

   La aceptación requiere una decisión con responsable.

4. Revisar responsables y bloqueos, escalar el riesgo y actualizar el plan **[CORRECT]**

   Revisar y escalar mantiene visible y asignado el riesgo.

**Concept:** Seguimiento de campañas

**Authored coaching hints:**

- ¿Qué significaba la fecha?
- ¿Qué evidencia muestra si persiste el riesgo subyacente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma campanha chega à data-alvo com alertas válidos não resolvidos. O que o líder deve fazer?

1. Declará-los corrigidos porque a data passou

   O tempo não muda comportamento vulnerável.

2. Removê-los de todos os relatórios

   Ocultar alertas encobre trabalho pendente.

3. Tratar o prazo como aceitação automática de risco

   Aceitação exige decisão com responsável.

4. Revisar responsáveis e bloqueios, escalar risco e atualizar o plano **[CORRECT]**

   Revisão e escalonamento mantêm risco visível e atribuído.

**Concept:** Acompanhamento de campanhas

**Authored coaching hints:**

- O que a data significava?
- Qual evidência mostra se o risco subjacente permanece?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-011:a0e1ae640cfe97e25efcae1ee2ec594c1c37b63227d19d716d372d9e0baa473e -->
## Question 165: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-011`

**Content revision:** `a0e1ae640cfe97e25efcae1ee2ec594c1c37b63227d19d716d372d9e0baa473e`

### English

An organization closes many alerts by disabling analysis on active repositories. Why is this not reliable evidence of risk reduction?

1. Reduced detection can reduce visible findings without fixing vulnerabilities **[CORRECT]**

   Reporting coverage and actual remediation must be distinguished.

2. Every disabled scan necessarily discovers more issues

   Disabled analysis does not inherently detect anything.

3. Disabling analysis automatically rotates credentials

   Analysis settings do not rotate external credentials.

4. Repository count is the only valid outcome metric

   Outcome assessment needs more than repository counts.

**Concept:** Avoiding misleading closure metrics

**Authored coaching hints:**

- What changed: code or visibility?
- What denominator is needed when comparing alert totals?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización cierra muchas alertas desactivando análisis en repositorios activos. ¿Por qué no demuestra confiablemente menor riesgo?

1. Menor detección reduce hallazgos visibles sin corregir vulnerabilidades **[CORRECT]**

   Hay que distinguir cobertura de informes de remediación real.

2. Todo análisis desactivado necesariamente descubre más problemas

   Un análisis desactivado no detecta por sí mismo.

3. Desactivar análisis rota credenciales automáticamente

   Los ajustes no rotan credenciales externas.

4. El recuento de repositorios es la única métrica válida

   Evaluar resultados requiere más que recuentos de repositorios.

**Concept:** Evitar métricas engañosas de cierre

**Authored coaching hints:**

- ¿Cambió el código o la visibilidad?
- ¿Qué denominador hace falta al comparar totales de alertas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização fecha muitos alertas desativando análises em repositórios ativos. Por que isso não prova confiavelmente redução de risco?

1. Menos detecção reduz resultados visíveis sem corrigir vulnerabilidades **[CORRECT]**

   Cobertura de relatórios e remediação real precisam ser distinguidas.

2. Toda varredura desativada necessariamente descobre mais problemas

   Análise desativada não detecta por si só.

3. Desativar análise rotaciona credenciais automaticamente

   Configurações não rotacionam credenciais externas.

4. A contagem de repositórios é a única métrica válida

   Avaliar resultados exige mais que contagens de repositórios.

**Concept:** Evitar métricas enganosas de fechamento

**Authored coaching hints:**

- O que mudou: código ou visibilidade?
- Qual denominador é necessário ao comparar totais de alertas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-operations-012:4c48040bfa20085aaae22187013690cd52690cb506c306482d14e9bc9aa093f1 -->
## Question 166: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-012`

**Content revision:** `4c48040bfa20085aaae22187013690cd52690cb506c306482d14e9bc9aa093f1`

### English

A pull request addresses a vulnerability but breaks required authorization behavior. Should it be considered a successful remediation?

1. Yes, because fewer alerts matter more than behavior

   Alert count alone does not establish a correct fix.

2. No; the fix must address the weakness while preserving intended security and functionality **[CORRECT]**

   Regression validation is part of successful remediation.

3. Yes, if an automated tool suggested it

   Generated changes still require review.

4. No, because security changes must never modify code

   Code changes are often necessary to remediate vulnerabilities.

**Concept:** Security regression validation

**Authored coaching hints:**

- What security properties must remain true after the change?
- Could removing one symptom introduce another weakness?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un pull request resuelve una vulnerabilidad, pero rompe la autorización requerida. ¿Es remediación exitosa?

1. Sí, menos alertas importa más que el comportamiento

   El recuento no establece una corrección adecuada.

2. No; debe resolver la debilidad conservando seguridad y funcionalidad previstas **[CORRECT]**

   Validar regresiones es parte de remediar exitosamente.

3. Sí, si lo sugirió una herramienta automática

   Los cambios generados requieren revisión.

4. No, los cambios de seguridad nunca deben modificar código

   A menudo hace falta cambiar código para remediar.

**Concept:** Validación de regresiones de seguridad

**Authored coaching hints:**

- ¿Qué propiedades de seguridad deben seguir cumpliéndose?
- ¿Eliminar un síntoma puede introducir otra debilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um pull request resolve vulnerabilidade, mas quebra a autorização necessária. É remediação bem-sucedida?

1. Sim, menos alertas importa mais que comportamento

   Contagem não estabelece correção adequada.

2. Não; precisa tratar a fraqueza preservando segurança e funcionalidade pretendidas **[CORRECT]**

   Validar regressões faz parte da remediação bem-sucedida.

3. Sim, se uma ferramenta automática sugeriu

   Mudanças geradas exigem revisão.

4. Não, mudanças de segurança nunca devem modificar código

   Mudar código frequentemente é necessário para remediar.

**Concept:** Validação de regressões de segurança

**Authored coaching hints:**

- Quais propriedades de segurança precisam continuar verdadeiras?
- Remover um sintoma pode introduzir outra fraqueza?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-operations-013:111e76b30990897c6f283482e0f32b6b5bebdc02ec2f123b26eb24172892421a -->
## Question 167: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-013`

**Content revision:** `111e76b30990897c6f283482e0f32b6b5bebdc02ec2f123b26eb24172892421a`

### English

A dependency has high severity but low EPSS. Which conclusion is most appropriate?

1. It is not a real vulnerability

   Low predicted exploitation does not invalidate the advisory.

2. It can never be exploited

   Probabilities can change and are not impossibility statements.

3. It may have high impact despite lower modeled near-term exploitation likelihood **[CORRECT]**

   Severity and exploitation likelihood describe different risk dimensions.

4. The package is automatically approved

   A model score does not grant policy approval.

**Concept:** Severity versus exploitation likelihood

**Authored coaching hints:**

- What harm could exploitation cause?
- How does likelihood differ from impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una dependencia tiene gravedad alta, pero EPSS bajo. ¿Cuál es la conclusión más apropiada?

1. No es una vulnerabilidad real

   La predicción baja no invalida el aviso.

2. Nunca podrá explotarse

   Las probabilidades cambian y no expresan imposibilidad.

3. Puede tener gran impacto pese a menor probabilidad modelada de explotación a corto plazo **[CORRECT]**

   Gravedad y probabilidad describen dimensiones distintas de riesgo.

4. El paquete queda aprobado automáticamente

   Una puntuación no otorga aprobación de política.

**Concept:** Gravedad frente a probabilidad de explotación

**Authored coaching hints:**

- ¿Qué daño causaría explotar la vulnerabilidad?
- ¿Cómo difiere probabilidad de impacto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma dependência tem alta severidade, mas baixo EPSS. Qual conclusão é mais adequada?

1. Não é vulnerabilidade real

   Previsão baixa não invalida o comunicado.

2. Nunca poderá ser explorada

   Probabilidades mudam e não expressam impossibilidade.

3. Pode ter alto impacto apesar da menor probabilidade modelada de exploração em curto prazo **[CORRECT]**

   Severidade e probabilidade descrevem dimensões diferentes de risco.

4. O pacote é aprovado automaticamente

   Uma pontuação não concede aprovação de política.

**Concept:** Severidade versus probabilidade de exploração

**Authored coaching hints:**

- Que dano a exploração causaria?
- Como probabilidade difere de impacto?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-014:f33e5e5d8339fab57a51066dec34dbe0b405f6f6106e106c9246ac67b33160f2 -->
## Question 168: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-014`

**Content revision:** `f33e5e5d8339fab57a51066dec34dbe0b405f6f6106e106c9246ac67b33160f2`

### English

An advisory has no EPSS value. How should a triage team interpret the missing value?

1. As a guaranteed zero probability

   Missing data is not a numeric zero.

2. As a guarantee of exploitation

   Absence of a score does not prove exploitation.

3. As proof that the alert was dismissed

   Score availability is not the alert's state.

4. As unavailable data, requiring other risk evidence rather than an invented score **[CORRECT]**

   EPSS coverage depends on corresponding CVE data and should not be fabricated.

**Concept:** Missing exploitation metrics

**Authored coaching hints:**

- What conditions are needed for an advisory to have EPSS data?
- Which other context remains available?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un aviso no tiene valor EPSS. ¿Cómo debe interpretarse?

1. Como probabilidad cero garantizada

   Un dato faltante no es cero numérico.

2. Como garantía de explotación

   No tener puntuación no demuestra explotación.

3. Como prueba de descarte de la alerta

   La disponibilidad de puntuación no es el estado de alerta.

4. Como dato no disponible: usar otras evidencias, no inventar una puntuación **[CORRECT]**

   La cobertura EPSS depende de datos CVE correspondientes y no debe inventarse.

**Concept:** Métricas de explotación faltantes

**Authored coaching hints:**

- ¿Qué condiciones necesita un aviso para tener EPSS?
- ¿Qué otro contexto sigue disponible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um comunicado não tem valor EPSS. Como interpretar a ausência?

1. Como probabilidade zero garantida

   Dado ausente não é zero numérico.

2. Como garantia de exploração

   Sem pontuação não prova exploração.

3. Como prova de descarte do alerta

   Disponibilidade da pontuação não é estado do alerta.

4. Como dado indisponível: usar outras evidências, não inventar pontuação **[CORRECT]**

   A cobertura EPSS depende dos dados CVE correspondentes e não deve ser fabricada.

**Concept:** Métricas de exploração ausentes

**Authored coaching hints:**

- Quais condições um comunicado precisa para ter EPSS?
- Qual outro contexto permanece disponível?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-015:7e6712316b9b3e0faba4a61e0aa92a6fe30580a261c28079ac8fc60f45ebb641 -->
## Question 169: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-015`

**Content revision:** `7e6712316b9b3e0faba4a61e0aa92a6fe30580a261c28079ac8fc60f45ebb641`

### English

A security team wants to triage all open dependency alerts with fixes available and high exploitability. Which approach best fits GitHub's metrics views?

1. Combine patch-availability and exploitability filters, then review application context **[CORRECT]**

   Combined metrics help focus actionable risk while retaining context.

2. Sort repositories by name only

   Alphabetical ordering does not identify urgent fixable risk.

3. Dismiss alerts without patches and stop tracking them

   No patch does not mean no risk or no mitigation.

4. Filter only by the author's email address

   Author identity alone is not this risk selection.

**Concept:** Risk-focused dependency filters

**Authored coaching hints:**

- Which alerts can be acted on immediately?
- Which evidence suggests likely near-term exploitation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo quiere clasificar todas las alertas de dependencias abiertas con corrección disponible y alta explotabilidad. ¿Qué enfoque encaja con las vistas de métricas de GitHub?

1. Combinar filtros de disponibilidad de corrección y explotabilidad, y revisar contexto de aplicación **[CORRECT]**

   Las métricas combinadas enfocan riesgo accionable conservando contexto.

2. Ordenar repositorios solo por nombre

   El orden alfabético no identifica riesgo urgente corregible.

3. Descartar alertas sin corrección y dejar de rastrearlas

   Sin corrección no significa sin riesgo o mitigación.

4. Filtrar solo por correo del autor

   La identidad del autor no hace esa selección de riesgo.

**Concept:** Filtros de dependencias centrados en riesgo

**Authored coaching hints:**

- ¿Sobre qué alertas se puede actuar de inmediato?
- ¿Qué evidencia sugiere explotación probable a corto plazo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe quer triar alertas abertos com correção disponível e alta explorabilidade. Qual abordagem combina com as visualizações de métricas do GitHub?

1. Combinar filtros de correção disponível e explorabilidade, e revisar contexto da aplicação **[CORRECT]**

   Métricas combinadas focam risco acionável mantendo contexto.

2. Ordenar repositórios só pelo nome

   Ordem alfabética não identifica risco urgente corrigível.

3. Descartar alertas sem correção e parar de acompanhá-los

   Sem correção não significa sem risco ou mitigação.

4. Filtrar só pelo e-mail do autor

   Identidade do autor não faz essa seleção de risco.

**Concept:** Filtros de dependências focados em risco

**Authored coaching hints:**

- Quais alertas permitem ação imediata?
- Qual evidência sugere exploração provável em curto prazo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics>

<!-- certification-coach-question:ghas-operations-016:3e6bf86c71e3d6cdbe2d99bcb108b5f221b4f704db91815272e2adb4992d85cd -->
## Question 170: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-016`

**Content revision:** `3e6bf86c71e3d6cdbe2d99bcb108b5f221b4f704db91815272e2adb4992d85cd`

### English

A bulk dismissal proposal includes valid, false-positive, and uninvestigated alerts. What is the best response?

1. Dismiss them all under the same reason to save time

   A uniform reason would misrepresent different situations.

2. Separate alerts by evidence and disposition before applying bulk actions **[CORRECT]**

   Bulk action should not replace alert-specific or genuinely shared justification.

3. Treat all old alerts as false positives

   Age does not establish a false positive.

4. Use the most optimistic assessment for every alert

   Uncertainty should not be converted into assumed safety.

**Concept:** Evidence-preserving bulk triage

**Authored coaching hints:**

- Do all selected alerts share the same justification?
- What would the audit trail imply after the action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una propuesta de descarte masivo incluye alertas válidas, falsos positivos y alertas no investigadas. ¿Cuál es la mejor respuesta?

1. Descartarlas todas con el mismo motivo para ahorrar tiempo

   Un motivo uniforme tergiversaría situaciones distintas.

2. Separarlas por evidencia y decisión antes de aplicar acciones masivas **[CORRECT]**

   La acción masiva no debe reemplazar justificación específica o genuinamente compartida.

3. Tratar todas las antiguas como falsos positivos

   La antigüedad no establece falso positivo.

4. Usar la evaluación más optimista para todas

   No se debe convertir incertidumbre en seguridad supuesta.

**Concept:** Clasificación masiva que conserva evidencia

**Authored coaching hints:**

- ¿Todas comparten la misma justificación?
- ¿Qué implicaría el registro de auditoría tras la acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma proposta de descarte em massa inclui alertas válidos, falsos positivos e não investigados. Qual é a melhor resposta?

1. Descartar todos pelo mesmo motivo para poupar tempo

   Um motivo uniforme deturparia situações diferentes.

2. Separar por evidência e decisão antes de ações em massa **[CORRECT]**

   Ação em massa não substitui justificativa específica ou genuinamente compartilhada.

3. Tratar todos os antigos como falsos positivos

   Idade não estabelece falso positivo.

4. Usar a avaliação mais otimista para todos

   Incerteza não deve virar segurança presumida.

**Concept:** Triagem em massa preservando evidências

**Authored coaching hints:**

- Todos compartilham a mesma justificativa?
- O que a trilha de auditoria implicaria após a ação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-operations-017:b18ac13c6e23793fbba0786003504feb0c31967b37dc2a642d538269a87d3217 -->
## Question 171: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-017`

**Content revision:** `b18ac13c6e23793fbba0786003504feb0c31967b37dc2a642d538269a87d3217`

### English

A team tunes away noisy CodeQL findings by removing an entire query category. What should be reviewed before accepting the change?

1. Only whether the alert list looks smaller

   A smaller list may hide real risk.

2. Only whether YAML syntax is valid

   Valid syntax does not establish a sound detection policy.

3. Which true-positive risks lose coverage and whether a narrower tuning option exists **[CORRECT]**

   Coverage loss must be weighed against precision and workload gains.

4. Only whether workflow runtime decreases

   Runtime is only one part of the trade-off.

**Concept:** Risk-aware detection tuning

**Authored coaching hints:**

- What security questions will no longer be asked?
- Can the noisy condition be scoped more narrowly?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo elimina toda una categoría de consultas para reducir ruido de CodeQL. ¿Qué revisar antes de aceptar?

1. Solo si la lista parece menor

   Una lista menor puede ocultar riesgo real.

2. Solo si YAML es válido

   Sintaxis válida no establece una política de detección sólida.

3. Qué riesgos verdaderos pierden cobertura y si hay un ajuste más acotado **[CORRECT]**

   Hay que sopesar pérdida de cobertura frente a precisión y carga.

4. Solo si baja el tiempo del flujo

   El tiempo es solo una parte de la contrapartida.

**Concept:** Ajuste de detección consciente del riesgo

**Authored coaching hints:**

- ¿Qué preguntas de seguridad dejarán de hacerse?
- ¿Se puede acotar más la condición ruidosa?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe remove toda uma categoria de consultas para reduzir ruído CodeQL. O que revisar antes de aceitar?

1. Só se a lista parece menor

   Lista menor pode ocultar risco real.

2. Só se YAML é válido

   Sintaxe válida não estabelece política sólida de detecção.

3. Quais riscos verdadeiros perdem cobertura e se há ajuste mais restrito **[CORRECT]**

   Perda de cobertura deve ser ponderada contra precisão e carga.

4. Só se o tempo do workflow diminui

   Tempo é só parte da contrapartida.

**Concept:** Ajuste de detecção consciente do risco

**Authored coaching hints:**

- Quais perguntas de segurança deixarão de ser feitas?
- A condição ruidosa pode ter escopo mais restrito?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites>

<!-- certification-coach-question:ghas-operations-018:1bc91d8f3af9a791c66a9e9a7248f5ca36a71c15bd4029ea7439003a25877598 -->
## Question 172: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-018`

**Content revision:** `1bc91d8f3af9a791c66a9e9a7248f5ca36a71c15bd4029ea7439003a25877598`

### English

A maintainer receives a private vulnerability report and needs to collaborate on a fix before disclosure. What is the safest GitHub-centered workflow?

1. Post the full report in a public issue immediately

   Immediate public disclosure can expose users before a patch.

2. Paste confidential details into a public dependency-review comment

   Public comments can prematurely disclose sensitive vulnerability information.

3. Wait until a public exploit appears before responding

   Delaying response increases exposure.

4. Use private collaboration through a repository security advisory and coordinate publication **[CORRECT]**

   Private advisory workflows support coordinated remediation and disclosure.

**Concept:** Private remediation coordination

**Authored coaching hints:**

- Who needs the information before a fix is ready?
- How can disclosure timing protect affected users?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora recibe un reporte privado y debe colaborar en la corrección antes de divulgar. ¿Qué flujo centrado en GitHub es más seguro?

1. Publicar inmediatamente el reporte completo en una incidencia pública

   Divulgar de inmediato puede exponer usuarios antes de corregir.

2. Pegar detalles confidenciales en un comentario público de revisión de dependencias

   Los comentarios públicos pueden divulgar información sensible prematuramente.

3. Esperar a que aparezca un exploit público para responder

   Retrasar la respuesta aumenta exposición.

4. Colaborar en privado mediante un aviso de seguridad del repositorio y coordinar la publicación **[CORRECT]**

   Los flujos privados de avisos apoyan remediación y divulgación coordinadas.

**Concept:** Coordinación privada de remediación

**Authored coaching hints:**

- ¿Quién necesita información antes de que esté lista la corrección?
- ¿Cómo protege a los usuarios afectados el momento de divulgación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora recebe relato privado e precisa colaborar na correção antes de divulgar. Qual fluxo centrado no GitHub é mais seguro?

1. Publicar imediatamente o relato completo em issue pública

   Divulgação imediata pode expor usuários antes da correção.

2. Colar detalhes confidenciais em comentário público de revisão de dependências

   Comentários públicos podem divulgar informações sensíveis prematuramente.

3. Esperar um exploit público antes de responder

   Adiar resposta aumenta exposição.

4. Colaborar em privado via comunicado de segurança do repositório e coordenar publicação **[CORRECT]**

   Fluxos privados apoiam remediação e divulgação coordenadas.

**Concept:** Coordenação privada da remediação

**Authored coaching hints:**

- Quem precisa das informações antes de a correção estar pronta?
- Como o momento da divulgação protege usuários afetados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-repository-security-advisories>

<!-- certification-coach-question:ghas-operations-019:77adc2a63512c5154481fb14c856c5e192140d61ccdf871e6f053674b71e61e0 -->
## Question 173: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-019`

**Content revision:** `77adc2a63512c5154481fb14c856c5e192140d61ccdf871e6f053674b71e61e0`

### English

A maintainer requests a CVE for a draft GitHub security advisory. Does that request itself publish the advisory?

1. No; requesting a CVE does not itself make the advisory public **[CORRECT]**

   CVE reservation and advisory publication are distinct steps.

2. Yes; every CVE request immediately publishes the draft

   Requesting an identifier does not inherently publish the advisory.

3. Yes; private collaboration becomes impossible

   Private collaboration can continue before publication.

4. No; because GitHub can never assign CVEs

   GitHub is a CVE Numbering Authority in eligible cases.

**Concept:** CVE reservation versus publication

**Authored coaching hints:**

- Is reserving an identifier the same as disclosing details?
- Which action controls advisory visibility?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se solicita un CVE para un borrador de aviso de GitHub. ¿La solicitud publica el aviso por sí misma?

1. No; solicitar un CVE no vuelve público el aviso por sí mismo **[CORRECT]**

   Reservar CVE y publicar avisos son pasos distintos.

2. Sí; toda solicitud publica inmediatamente el borrador

   Pedir un identificador no publica por sí mismo.

3. Sí; ya no es posible colaborar en privado

   La colaboración privada puede continuar antes de publicar.

4. No; porque GitHub nunca puede asignar CVE

   GitHub es una autoridad de numeración CVE en casos elegibles.

**Concept:** Reserva CVE frente a publicación

**Authored coaching hints:**

- ¿Reservar un identificador equivale a divulgar detalles?
- ¿Qué acción controla la visibilidad del aviso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Solicita-se CVE para um rascunho de comunicado do GitHub. A solicitação publica o comunicado por si só?

1. Não; solicitar CVE não torna o comunicado público por si só **[CORRECT]**

   Reserva de CVE e publicação são etapas diferentes.

2. Sim; toda solicitação publica o rascunho imediatamente

   Pedir identificador não publica por si só.

3. Sim; colaboração privada fica impossível

   Colaboração privada pode continuar antes de publicar.

4. Não; porque GitHub nunca pode atribuir CVEs

   GitHub é autoridade de numeração CVE em casos elegíveis.

**Concept:** Reserva de CVE versus publicação

**Authored coaching hints:**

- Reservar identificador equivale a divulgar detalhes?
- Qual ação controla a visibilidade do comunicado?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-repository-security-advisories>

<!-- certification-coach-question:ghas-operations-020:18b82addc9c2b5dbc328f98067ad4c4df75ebb30d13611d68d1efe5bb6cf1a1a -->
## Question 174: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-020`

**Content revision:** `18b82addc9c2b5dbc328f98067ad4c4df75ebb30d13611d68d1efe5bb6cf1a1a`

### English

A support engineer asks to copy a production token from a secret alert into a troubleshooting ticket. What is the best collaboration approach?

1. Share it with everyone so any person can test it

   Broad sharing propagates the credential.

2. Use a restricted alert reference and necessary redacted context instead **[CORRECT]**

   Restricted references and redacted context support response without needless exposure.

3. Publish it in the advisory database

   Advisories are not a credential-sharing channel.

4. Treat a ticket as an approved credential store

   Ticketing tools should not be assumed to be credential stores.

**Concept:** Least-exposure incident communication

**Authored coaching hints:**

- Who needs access to the sensitive value itself?
- Could a reference preserve context without duplicating the secret?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un ingeniero de soporte pide copiar un token de producción de una alerta a un ticket. ¿Cuál es el mejor enfoque de colaboración?

1. Compartirlo con todos para que cualquiera lo pruebe

   Compartir ampliamente propaga la credencial.

2. Usar una referencia restringida a la alerta y contexto necesario con datos sensibles ocultos **[CORRECT]**

   Las referencias restringidas y el contexto con datos sensibles ocultos permiten responder sin exposición innecesaria.

3. Publicarlo en la base de avisos

   Los avisos no son canales para compartir credenciales.

4. Tratar el ticket como almacén aprobado de credenciales

   No debe suponerse que los tickets son almacenes de credenciales.

**Concept:** Comunicación de incidentes con mínima exposición

**Authored coaching hints:**

- ¿Quién necesita el valor sensible en sí?
- ¿Una referencia conservaría contexto sin duplicar el secreto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um engenheiro de suporte pede para copiar um token de produção de um alerta para um ticket. Qual é a melhor colaboração?

1. Compartilhar com todos para qualquer pessoa testar

   Compartilhar amplamente propaga a credencial.

2. Usar referência restrita ao alerta e contexto necessário com dados sensíveis ocultos **[CORRECT]**

   Referências restritas e contexto com dados sensíveis ocultos permitem resposta sem exposição desnecessária.

3. Publicar no banco de comunicados

   Comunicados não são canais de compartilhamento de credenciais.

4. Tratar o ticket como armazenamento aprovado de credenciais

   Não se deve supor que tickets sejam armazenamentos de credenciais.

**Concept:** Comunicação de incidente com mínima exposição

**Authored coaching hints:**

- Quem precisa do valor sensível em si?
- Uma referência preservaria contexto sem duplicar o segredo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-operations-021:e2e8e538369fa87f49b9795f0eb5eb7e7d4214a39a614434109d727f1547ae24 -->
## Question 175: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-021`

**Content revision:** `e2e8e538369fa87f49b9795f0eb5eb7e7d4214a39a614434109d727f1547ae24`

### English

A risk exception was justified because a vulnerable endpoint was unreachable. The service is now exposed publicly. What should happen?

1. Retain the exception forever because it was once approved

   Risk acceptance depends on continuing validity of assumptions.

2. Delete the original evidence

   Evidence supports understanding why reassessment is necessary.

3. Reassess the exception and remediation priority because its assumptions changed **[CORRECT]**

   Changed exposure can materially change risk.

4. Treat the endpoint as patched automatically

   Exposure changes do not fix vulnerable code.

**Concept:** Revalidating exceptions

**Authored coaching hints:**

- What facts supported the original decision?
- Are those facts still true?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una excepción se justificó porque un endpoint vulnerable era inalcanzable. Ahora el servicio es público. ¿Qué debe ocurrir?

1. Conservarla para siempre porque se aprobó una vez

   La aceptación depende de que sigan siendo válidos sus supuestos.

2. Eliminar la evidencia original

   La evidencia permite entender por qué reevaluar.

3. Reevaluar la excepción y prioridad porque cambiaron sus supuestos **[CORRECT]**

   Cambiar exposición puede cambiar materialmente el riesgo.

4. Considerar corregido automáticamente el endpoint

   Los cambios de exposición no corrigen código.

**Concept:** Revalidación de excepciones

**Authored coaching hints:**

- ¿Qué hechos respaldaron la decisión original?
- ¿Siguen siendo ciertos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma exceção foi justificada porque um endpoint vulnerável era inalcançável. Agora o serviço é público. O que fazer?

1. Manter a exceção para sempre porque já foi aprovada

   Aceitação depende da validade contínua dos pressupostos.

2. Excluir a evidência original

   A evidência ajuda a entender por que reavaliar.

3. Reavaliar exceção e prioridade porque os pressupostos mudaram **[CORRECT]**

   Mudar exposição pode mudar materialmente o risco.

4. Tratar o endpoint como corrigido automaticamente

   Exposição diferente não corrige código.

**Concept:** Revalidação de exceções

**Authored coaching hints:**

- Quais fatos sustentaram a decisão original?
- Ainda são verdadeiros?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-operations-022:a691b323634f45af9075913d75ec77fa6e04f7be6eca04bbbdeb90caca4b6beb -->
## Question 176: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-022`

**Content revision:** `a691b323634f45af9075913d75ec77fa6e04f7be6eca04bbbdeb90caca4b6beb`

### English

A repository's alert count increases after previously missing languages are scanned. How should leaders evaluate the increase?

1. As proof that developers introduced every issue yesterday

   Discovery and introduction dates can differ.

2. As proof the scanner is broken

   More findings can result from valid expanded analysis.

3. As a reason to remove the new language coverage

   Removing coverage hides rather than resolves findings.

4. As potentially improved visibility, comparing coverage and introduction dates before judging performance **[CORRECT]**

   Coverage-aware interpretation avoids confusing discovery with regression.

**Concept:** Coverage-adjusted security trends

**Authored coaching hints:**

- What changed in the measurement process?
- Were these issues previously observable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Aumentan las alertas tras analizar lenguajes antes omitidos. ¿Cómo deben evaluar el aumento los líderes?

1. Como prueba de que todos los problemas se introdujeron ayer

   Las fechas de descubrimiento e introducción pueden diferir.

2. Como prueba de que el analizador está averiado

   Más hallazgos pueden resultar de un análisis ampliado válido.

3. Como motivo para quitar la cobertura nueva

   Quitar cobertura oculta hallazgos, no los resuelve.

4. Como posible mejora de visibilidad, comparando cobertura y fechas de introducción antes de juzgar desempeño **[CORRECT]**

   Considerar cobertura evita confundir descubrimiento con regresión.

**Concept:** Tendencias de seguridad ajustadas por cobertura

**Authored coaching hints:**

- ¿Qué cambió en el proceso de medición?
- ¿Estos problemas eran observables antes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Os alertas aumentam após analisar linguagens antes ausentes. Como líderes devem avaliar o aumento?

1. Como prova de que todos os problemas foram introduzidos ontem

   Datas de descoberta e introdução podem diferir.

2. Como prova de que o analisador está quebrado

   Mais resultados podem vir de análise ampliada válida.

3. Como razão para remover a nova cobertura

   Remover cobertura oculta resultados, não os resolve.

4. Como possível melhoria de visibilidade, comparando cobertura e datas de introdução antes de julgar desempenho **[CORRECT]**

   Considerar cobertura evita confundir descoberta com regressão.

**Concept:** Tendências de segurança ajustadas por cobertura

**Authored coaching hints:**

- O que mudou no processo de medição?
- Esses problemas eram observáveis antes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-operations-023:2b7e110dc4e50a5648ed5d8a9233921fb4ccd521e3d7a7590d98b41cda87c0e7 -->
## Question 177: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-023`

**Content revision:** `2b7e110dc4e50a5648ed5d8a9233921fb4ccd521e3d7a7590d98b41cda87c0e7`

### English

An organization wants to measure remediation effectiveness rather than only scanner activity. Which evidence is strongest?

1. Validated fixes and reduced unresolved risk over time, interpreted with coverage **[CORRECT]**

   Verified remediation is closer to risk reduction than activity counts.

2. Total workflow log lines

   Log volume does not prove vulnerabilities were fixed.

3. Number of times the dashboard was opened

   Dashboard viewing is activity, not an outcome.

4. The number of notification recipients

   More recipients do not establish remediation.

**Concept:** Outcome-focused security metrics

**Authored coaching hints:**

- Did the underlying issue change?
- Could activity increase while risk remains unchanged?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere medir eficacia de remediación, no solo actividad del analizador. ¿Qué evidencia es más sólida?

1. Correcciones validadas y reducción de riesgo pendiente con el tiempo, interpretadas con la cobertura **[CORRECT]**

   La remediación verificada se acerca más a reducción de riesgo que los recuentos de actividad.

2. Total de líneas de registros de flujos

   El volumen de registros no prueba correcciones.

3. Veces que se abrió el panel

   Ver paneles es actividad, no resultado.

4. Cantidad de destinatarios de notificaciones

   Más destinatarios no establecen remediación.

**Concept:** Métricas de seguridad centradas en resultados

**Authored coaching hints:**

- ¿Cambió el problema subyacente?
- ¿Puede aumentar la actividad sin cambiar el riesgo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer medir eficácia da remediação, não só atividade do analisador. Qual evidência é mais forte?

1. Correções validadas e redução de risco pendente ao longo do tempo, interpretadas com cobertura **[CORRECT]**

   Remediação verificada é mais próxima de redução de risco que contagens de atividade.

2. Total de linhas de logs de workflows

   Volume de logs não prova correção.

3. Vezes que o painel foi aberto

   Ver painéis é atividade, não resultado.

4. Quantidade de destinatários de notificações

   Mais destinatários não estabelecem remediação.

**Concept:** Métricas de segurança focadas em resultados

**Authored coaching hints:**

- O problema subjacente mudou?
- A atividade pode aumentar sem mudar o risco?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics>

<!-- certification-coach-question:ghas-operations-024:47f131699f90579933f09ee10b23a3f737b5783ff2787fd48cc94323c3a03b4d -->
## Question 178: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-024`

**Content revision:** `47f131699f90579933f09ee10b23a3f737b5783ff2787fd48cc94323c3a03b4d`

### English

A code alert is assigned to a developer who no longer maintains the affected service. What is the best operational response?

1. Assume assignment alone guarantees completion

   Assignment without an active owner can stall.

2. Reassign to the current accountable owner and preserve context and urgency **[CORRECT]**

   Accurate ownership keeps remediation actionable.

3. Close it because the original assignee left

   Personnel changes do not remove a vulnerability.

4. Remove it from campaign tracking

   Removing tracking can hide unresolved risk.

**Concept:** Maintaining alert ownership

**Authored coaching hints:**

- Who can change and test this service now?
- What context must survive the handoff?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta está asignada a quien ya no mantiene el servicio afectado. ¿Cuál es la mejor respuesta operativa?

1. Suponer que la asignación garantiza completarla

   La asignación sin responsable activo puede estancarse.

2. Reasignar al responsable actual conservando contexto y urgencia **[CORRECT]**

   La responsabilidad precisa mantiene accionable la remediación.

3. Cerrarla porque se fue la persona asignada

   Los cambios de personal no eliminan vulnerabilidades.

4. Quitarla del seguimiento de campaña

   Quitar seguimiento oculta riesgo pendiente.

**Concept:** Mantenimiento de responsabilidad de alertas

**Authored coaching hints:**

- ¿Quién puede modificar y probar el servicio ahora?
- ¿Qué contexto debe sobrevivir al traspaso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta está atribuído a quem não mantém mais o serviço afetado. Qual é a melhor resposta operacional?

1. Supor que atribuição garante conclusão

   Atribuição sem responsável ativo pode estagnar.

2. Reatribuir ao responsável atual preservando contexto e urgência **[CORRECT]**

   Responsabilidade precisa mantém remediação acionável.

3. Fechar porque a pessoa saiu

   Mudanças de pessoal não removem vulnerabilidade.

4. Remover do acompanhamento da campanha

   Remover acompanhamento oculta risco pendente.

**Concept:** Manutenção da responsabilidade por alertas

**Authored coaching hints:**

- Quem pode alterar e testar o serviço agora?
- Qual contexto deve sobreviver à passagem?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-025:5ca816f00ef997e750d9d9f9ac8b3b2250386bfa2e05e80ae691f1d591deff82 -->
## Question 179: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-025`

**Content revision:** `5ca816f00ef997e750d9d9f9ac8b3b2250386bfa2e05e80ae691f1d591deff82`

### English

An automatically generated fix removes an unsafe operation but also suppresses all validation errors. What should the reviewer do?

1. Merge because the original sink disappeared

   Removing a sink does not establish correct error handling.

2. Dismiss the alert before tests run

   Dismissal is not validation.

3. Review the changed security behavior and revise or reject the fix if necessary **[CORRECT]**

   Generated fixes require security and functional review.

4. Disable the query to match the new behavior

   Changing detection to accommodate a bad fix hides risk.

**Concept:** Autofix semantic review

**Authored coaching hints:**

- What behavior changed beyond the reported issue?
- Could the new control flow create another security problem?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una corrección generada elimina una operación insegura, pero también suprime todos los errores de validación. ¿Qué debe hacer quien revisa?

1. Fusionar porque desapareció el destino original

   Eliminar un destino no establece manejo correcto de errores.

2. Descartar antes de ejecutar pruebas

   Descartar no es validar.

3. Revisar el comportamiento de seguridad cambiado y modificar o rechazar la corrección si hace falta **[CORRECT]**

   Las correcciones generadas necesitan revisión funcional y de seguridad.

4. Desactivar la consulta para coincidir con el comportamiento nuevo

   Ajustar detección a una mala corrección oculta riesgo.

**Concept:** Revisión semántica de Autofix

**Authored coaching hints:**

- ¿Qué cambió además del problema reportado?
- ¿El flujo de control nuevo puede crear otro problema de seguridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma correção gerada remove operação insegura, mas também suprime todos os erros de validação. O que fazer na revisão?

1. Fazer merge porque o destino original desapareceu

   Remover um destino não estabelece tratamento correto de erros.

2. Descartar antes dos testes

   Descarte não é validação.

3. Revisar o comportamento de segurança alterado e modificar ou rejeitar a correção se necessário **[CORRECT]**

   Correções geradas exigem revisão funcional e de segurança.

4. Desativar a consulta para corresponder ao novo comportamento

   Adaptar detecção a uma correção ruim oculta risco.

**Concept:** Revisão semântica do Autofix

**Authored coaching hints:**

- O que mudou além do problema relatado?
- O novo fluxo de controle pode criar outro problema de segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-operations-026:05a4959376d41e3875717dcb0f83bb19eef153cdaf216a682d7025edbc4b187b -->
## Question 180: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-026`

**Content revision:** `05a4959376d41e3875717dcb0f83bb19eef153cdaf216a682d7025edbc4b187b`

### English

A team plans to accept risk because a vulnerable function appears unused. Which evidence would best support the assessment?

1. A lack of direct imports, without checking indirect callers

   Indirect usage can still make the function reachable.

2. A package-wide test pass, without testing the affected path

   General tests may not establish whether the vulnerable behavior can execute.

3. A developer's recollection that the feature is rarely used

   Recollection is weaker than a reproducible deployment-specific assessment.

4. A documented reachability and usage analysis for the affected deployment **[CORRECT]**

   Deployment-specific evidence can support a scoped risk assessment.

**Concept:** Reachability-based triage

**Authored coaching hints:**

- Which evidence actually establishes execution paths?
- Which configuration and deployment were evaluated?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo planea aceptar riesgo porque una función vulnerable parece no usarse. ¿Qué evidencia respalda mejor la evaluación?

1. Ausencia de importaciones directas sin revisar llamadas indirectas

   El uso indirecto aún puede volver alcanzable la función.

2. Pruebas generales del paquete aprobadas sin probar la ruta afectada

   Las pruebas generales quizá no establezcan si se ejecuta el comportamiento vulnerable.

3. El recuerdo de un desarrollador de que se usa poco

   Un recuerdo es más débil que una evaluación reproducible del despliegue.

4. Análisis documentado de alcanzabilidad y uso del despliegue afectado **[CORRECT]**

   La evidencia específica del despliegue apoya una evaluación acotada.

**Concept:** Clasificación según alcanzabilidad

**Authored coaching hints:**

- ¿Qué evidencia establece rutas de ejecución?
- ¿Qué configuración y despliegue se evaluaron?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe pretende aceitar risco porque uma função vulnerável parece sem uso. Qual evidência sustenta melhor a avaliação?

1. Falta de imports diretos sem checar chamadas indiretas

   Uso indireto ainda pode tornar a função alcançável.

2. Testes gerais do pacote aprovados sem testar o caminho afetado

   Testes gerais podem não estabelecer se o comportamento vulnerável executa.

3. A lembrança de um desenvolvedor de que o recurso é pouco usado

   Lembrança é mais fraca que avaliação reproduzível da implantação.

4. Análise documentada de alcançabilidade e uso da implantação afetada **[CORRECT]**

   Evidência específica da implantação apoia avaliação com escopo.

**Concept:** Triagem por alcançabilidade

**Authored coaching hints:**

- Qual evidência estabelece caminhos de execução?
- Qual configuração e implantação foram avaliadas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics>

<!-- certification-coach-question:ghas-operations-027:5180fdfc9f15fb39ae9a4b3116f063895b5c61b02d9f37a0fae09a8e4f2044f7 -->
## Question 181: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-027`

**Content revision:** `5180fdfc9f15fb39ae9a4b3116f063895b5c61b02d9f37a0fae09a8e4f2044f7`

### English

A campaign concentrates on one weakness pattern across several services. What remediation strategy provides the best reusable benefit?

1. Identify the common cause, share a reviewed fix pattern, and validate it in each service **[CORRECT]**

   Shared knowledge helps, while per-service validation respects context.

2. Apply an unreviewed identical patch to every repository

   Similar findings can have different code requirements.

3. Dismiss all findings in files with similar names

   Names do not prove false positives.

4. Assume one fixed repository proves all others are safe

   One fix does not modify other repositories.

**Concept:** Reusable remediation with local validation

**Authored coaching hints:**

- What part of the solution transfers?
- What still depends on each service's behavior?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una campaña se centra en un patrón de debilidad en varios servicios. ¿Qué estrategia aporta el mejor beneficio reutilizable?

1. Identificar causa común, compartir un patrón de corrección revisado y validarlo en cada servicio **[CORRECT]**

   El conocimiento compartido ayuda; validar por servicio respeta el contexto.

2. Aplicar un parche idéntico sin revisar a todos

   Hallazgos parecidos pueden requerir código distinto.

3. Descartar hallazgos en archivos de nombres similares

   Los nombres no prueban falsos positivos.

4. Suponer que corregir un repositorio prueba seguros a los demás

   Una corrección no modifica los otros repositorios.

**Concept:** Remediación reutilizable con validación local

**Authored coaching hints:**

- ¿Qué parte de la solución se transfiere?
- ¿Qué sigue dependiendo de cada servicio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma campanha foca um padrão de fraqueza em vários serviços. Qual estratégia dá o melhor benefício reutilizável?

1. Identificar causa comum, compartilhar padrão de correção revisado e validar em cada serviço **[CORRECT]**

   Conhecimento compartilhado ajuda; validação por serviço respeita contexto.

2. Aplicar patch idêntico sem revisão em todos

   Resultados parecidos podem exigir código diferente.

3. Descartar resultados em arquivos com nomes semelhantes

   Nomes não provam falsos positivos.

4. Supor que corrigir um repositório prova seguros os outros

   Uma correção não modifica outros repositórios.

**Concept:** Remediação reutilizável com validação local

**Authored coaching hints:**

- Qual parte da solução se transfere?
- O que ainda depende de cada serviço?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-028:aab015075fae6c3096929b0db7edd34d4c7fc90642d4c6e705a163ef6799b05a -->
## Question 182: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-028`

**Content revision:** `aab015075fae6c3096929b0db7edd34d4c7fc90642d4c6e705a163ef6799b05a`

### English

An alert was automatically dismissed under a policy, but new metadata increases its risk. What capability should the team understand?

1. Auto-dismissal permanently erases the alert

   Auto-dismissed alerts remain available.

2. Auto-dismissed alerts can be reviewed and may be reopened when metadata changes **[CORRECT]**

   Metadata changes can alter whether the dismissal policy remains appropriate.

3. A policy makes future risk changes impossible

   Policies do not freeze vulnerability knowledge.

4. New metadata only affects commit messages

   Risk metadata belongs to the alert context.

**Concept:** Reopening auto-triaged risk

**Authored coaching hints:**

- What assumptions did the rule use?
- Can changing facts make an earlier disposition obsolete?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política descartó automáticamente una alerta, pero nuevos metadatos aumentan el riesgo. ¿Qué capacidad debe comprender el equipo?

1. El descarte automático borra permanentemente la alerta

   Las alertas descartadas siguen disponibles.

2. Las alertas descartadas pueden revisarse y reabrirse si cambian metadatos **[CORRECT]**

   Los cambios de metadatos pueden alterar si la política sigue siendo apropiada.

3. Una política hace imposibles cambios futuros de riesgo

   Las políticas no congelan el conocimiento de vulnerabilidades.

4. Los metadatos nuevos solo afectan mensajes de commit

   Los metadatos de riesgo forman parte del contexto de la alerta.

**Concept:** Reapertura de riesgo clasificado automáticamente

**Authored coaching hints:**

- ¿Qué supuestos usó la regla?
- ¿Los hechos cambiantes pueden volver obsoleta una decisión anterior?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política descartou automaticamente um alerta, mas novos metadados aumentam o risco. Qual capacidade entender?

1. Descarte automático apaga permanentemente o alerta

   Alertas descartados continuam disponíveis.

2. Alertas descartados podem ser revisados e reabertos quando metadados mudam **[CORRECT]**

   Metadados diferentes podem mudar a adequação da política.

3. Uma política torna impossível mudar riscos futuros

   Políticas não congelam conhecimento de vulnerabilidades.

4. Novos metadados só afetam mensagens de commit

   Metadados de risco fazem parte do contexto do alerta.

**Concept:** Reabertura de risco triado automaticamente

**Authored coaching hints:**

- Quais pressupostos a regra usou?
- Fatos novos podem tornar uma decisão anterior obsoleta?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-operations-029:a88cec4b628bd6ed0dd2c2f2a3e5e2c2a46466188944a73c1799414c4c347856 -->
## Question 183: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-029`

**Content revision:** `a88cec4b628bd6ed0dd2c2f2a3e5e2c2a46466188944a73c1799414c4c347856`

### English

A fix is deployed for the default branch but a supported release branch still contains the same vulnerability. What should the response owner evaluate?

1. Whether a default-branch fix can be treated as automatically applied to every release

   Branch changes do not automatically propagate into other release lines.

2. Whether older supported releases can be omitted from the response merely because they are not default

   Support commitments and affected versions still matter.

3. Whether supported releases need a backport or other mitigation **[CORRECT]**

   Supported versions can require separate remediation work.

4. Whether closing the default-branch alert also proves installed releases are patched

   An alert's default-branch state does not establish every deployed version's safety.

**Concept:** Supported-version remediation scope

**Authored coaching hints:**

- Which versions are users still running?
- What changes actually reached each supported release?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se despliega una corrección de la rama predeterminada, pero una rama de publicación aún soportada conserva la vulnerabilidad. ¿Qué evaluar?

1. Si la corrección predeterminada puede considerarse aplicada automáticamente a todas las publicaciones

   Los cambios de rama no se propagan solos a otras líneas.

2. Si se pueden omitir versiones antiguas soportadas solo porque no son la rama predeterminada

   Los compromisos de soporte y versiones afectadas siguen importando.

3. Si las versiones soportadas requieren adaptación de la corrección u otra mitigación **[CORRECT]**

   Las versiones soportadas pueden requerir remediación separada.

4. Si cerrar la alerta predeterminada prueba corregidas las versiones instaladas

   El estado de alerta predeterminado no establece seguridad de cada versión desplegada.

**Concept:** Alcance de remediación de versiones soportadas

**Authored coaching hints:**

- ¿Qué versiones siguen ejecutando los usuarios?
- ¿Qué cambios llegaron realmente a cada publicación soportada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma correção da branch padrão foi implantada, mas uma branch de release ainda suportada conserva a vulnerabilidade. O que avaliar?

1. Se a correção padrão pode ser tratada como aplicada automaticamente a todas as releases

   Mudanças de branch não se propagam sozinhas para outras linhas.

2. Se versões antigas suportadas podem ser omitidas só por não serem a padrão

   Compromissos de suporte e versões afetadas ainda importam.

3. Se versões suportadas precisam de backport ou outra mitigação **[CORRECT]**

   Versões suportadas podem precisar de remediação separada.

4. Se fechar o alerta padrão prova corrigidas as releases instaladas

   Estado do alerta padrão não estabelece segurança de cada versão implantada.

**Concept:** Escopo da remediação de versões suportadas

**Authored coaching hints:**

- Quais versões os usuários ainda executam?
- Quais mudanças chegaram realmente a cada release suportada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-repository-security-advisories>

<!-- certification-coach-question:ghas-operations-030:3f4763289cc823b74e8e77150bf25302e5bec68ba32ad90fe816b04bdfc50592 -->
## Question 184: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-030`

**Content revision:** `3f4763289cc823b74e8e77150bf25302e5bec68ba32ad90fe816b04bdfc50592`

### English

A valid alert cannot be fixed within the target period. Which response best preserves governance?

1. Choose false positive to stop reminders

   False positive would misrepresent a genuine issue.

2. Remove the repository from reports

   Removing reporting conceals risk.

3. Wait silently until a scanner update

   Silence does not manage the missed target.

4. Escalate with impact, mitigation, accountable approval, and a revised plan **[CORRECT]**

   Explicit escalation and an approved plan make unresolved risk accountable.

**Concept:** Remediation-target exceptions

**Authored coaching hints:**

- Who can accept the residual risk?
- What temporary measures reduce exposure while work continues?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta válida no puede corregirse dentro del plazo objetivo. ¿Qué respuesta preserva mejor la gobernanza?

1. Elegir falso positivo para detener recordatorios

   Falso positivo tergiversaría un problema real.

2. Quitar el repositorio de informes

   Quitar informes oculta riesgo.

3. Esperar en silencio una actualización del analizador

   El silencio no gestiona el plazo incumplido.

4. Escalar con impacto, mitigación, aprobación responsable y plan revisado **[CORRECT]**

   Escalar explícitamente y aprobar un plan asigna responsabilidad por el riesgo pendiente.

**Concept:** Excepciones a plazos de remediación

**Authored coaching hints:**

- ¿Quién puede aceptar el riesgo residual?
- ¿Qué medidas temporales reducen exposición mientras continúa el trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta válido não pode ser corrigido no prazo-alvo. Qual resposta preserva melhor a governança?

1. Escolher falso positivo para parar lembretes

   Falso positivo deturparia um problema genuíno.

2. Remover o repositório dos relatórios

   Remover relatórios oculta risco.

3. Esperar em silêncio uma atualização do analisador

   Silêncio não gerencia o prazo perdido.

4. Escalar com impacto, mitigação, aprovação responsável e plano revisado **[CORRECT]**

   Escalonamento explícito e plano aprovado atribuem responsabilidade pelo risco pendente.

**Concept:** Exceções a prazos de remediação

**Authored coaching hints:**

- Quem pode aceitar o risco residual?
- Quais medidas temporárias reduzem exposição enquanto o trabalho continua?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-031:70877d8cc613f3a61f5897b81e9fbe74e5826effad2b0a0057618debaae9f3b0 -->
## Question 185: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-031`

**Content revision:** `70877d8cc613f3a61f5897b81e9fbe74e5826effad2b0a0057618debaae9f3b0`

### English

A dependency patch resolves one advisory but the same installed package remains affected by another. What should the team conclude?

1. Remediation is advisory- and version-specific; assess the remaining alert separately **[CORRECT]**

   Different vulnerabilities can have different affected and patched ranges.

2. Any upgrade resolves every advisory for that package

   An upgrade may fix some but not all vulnerabilities.

3. The second alert must be a duplicate

   Same-package alerts need not describe the same issue.

4. The dependency graph should be disabled

   Disabling inventory does not remove the remaining vulnerability.

**Concept:** Advisory-specific remediation validation

**Authored coaching hints:**

- Are the patched-version ranges identical?
- What does each remaining advisory say about the installed version?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un parche resuelve un aviso, pero el mismo paquete instalado sigue afectado por otro. ¿Qué concluir?

1. La remediación depende de aviso y versión; evaluar la alerta restante aparte **[CORRECT]**

   Vulnerabilidades distintas pueden tener rangos afectados y corregidos distintos.

2. Cualquier actualización resuelve todos los avisos del paquete

   Actualizar puede corregir algunas vulnerabilidades y no todas.

3. La segunda alerta debe ser duplicada

   Alertas del mismo paquete no necesariamente describen el mismo problema.

4. Se debe desactivar el gráfico

   Desactivar inventario no elimina la vulnerabilidad restante.

**Concept:** Validación de remediación por aviso

**Authored coaching hints:**

- ¿Son idénticos los rangos de versiones corregidas?
- ¿Qué dice cada aviso restante de la versión instalada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um patch resolve um comunicado, mas o mesmo pacote instalado continua afetado por outro. O que concluir?

1. Remediação depende de comunicado e versão; avaliar o alerta restante separadamente **[CORRECT]**

   Vulnerabilidades distintas têm faixas afetadas e corrigidas diferentes.

2. Qualquer atualização resolve todos os comunicados do pacote

   Atualizar pode corrigir algumas, não todas.

3. O segundo alerta deve ser duplicado

   Alertas do mesmo pacote não necessariamente descrevem o mesmo problema.

4. O grafo deve ser desativado

   Desativar inventário não remove a vulnerabilidade restante.

**Concept:** Validação da remediação por comunicado

**Authored coaching hints:**

- As faixas de versões corrigidas são idênticas?
- O que cada comunicado restante diz da versão instalada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-032:45a32f7e2a95cf89b77715877da4bb2a888da71ee6971db15ed7e55eb631f0fe -->
## Question 186: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-032`

**Content revision:** `45a32f7e2a95cf89b77715877da4bb2a888da71ee6971db15ed7e55eb631f0fe`

### English

An operations dashboard shows many closed alerts. Which distinction is essential when explaining actual risk reduction?

1. Closed alerts always represent deployed fixes

   Closure can reflect triage rather than remediation.

2. Fixed, dismissed, and automatically dismissed outcomes may have different meanings **[CORRECT]**

   Closure reasons distinguish remediation from risk decisions and automation.

3. Every dismissal means the original alert was false

   Valid findings can be dismissed for other reasons.

4. All closure reasons can be treated as equivalent

   Combining all reasons can overstate reduction in underlying risk.

**Concept:** Interpreting closure dispositions

**Authored coaching hints:**

- Why did each alert leave the open queue?
- Which outcomes changed vulnerable code or credentials?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un panel operativo muestra muchas alertas cerradas. ¿Qué distinción es esencial al explicar reducción real del riesgo?

1. Las alertas cerradas siempre representan correcciones desplegadas

   Cerrar puede reflejar clasificación, no remediación.

2. Corregida, descartada y descartada automáticamente pueden significar cosas distintas **[CORRECT]**

   Los motivos distinguen remediación, decisiones de riesgo y automatización.

3. Todo descarte implica que la alerta original era falsa

   Los hallazgos válidos pueden descartarse por otros motivos.

4. Todos los motivos de cierre son equivalentes

   Combinar motivos puede exagerar la reducción de riesgo subyacente.

**Concept:** Interpretación de decisiones de cierre

**Authored coaching hints:**

- ¿Por qué salió cada alerta de la cola abierta?
- ¿Qué resultados cambiaron código vulnerable o credenciales?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um painel operacional mostra muitos alertas fechados. Qual distinção é essencial ao explicar redução real do risco?

1. Alertas fechados sempre representam correções implantadas

   Fechar pode refletir triagem, não remediação.

2. Corrigido, descartado e descartado automaticamente podem ter significados distintos **[CORRECT]**

   Motivos distinguem remediação, decisões de risco e automação.

3. Todo descarte significa que o alerta original era falso

   Resultados válidos podem ser descartados por outros motivos.

4. Todos os motivos de fechamento são equivalentes

   Combinar motivos pode exagerar redução do risco subjacente.

**Concept:** Interpretação de decisões de fechamento

**Authored coaching hints:**

- Por que cada alerta saiu da fila aberta?
- Quais resultados mudaram código vulnerável ou credenciais?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules>

<!-- certification-coach-question:ghas-operations-033:965145f9f0edb97fe0e61d5d407d71b642cc116d3ab85e61dec430bfc7cda2e7 -->
## Question 187: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-033`

**Content revision:** `965145f9f0edb97fe0e61d5d407d71b642cc116d3ab85e61dec430bfc7cda2e7`

### English

A reviewer sees multiple repository alerts referencing the same GHSA. What can legitimately explain this?

1. GHSA identifiers must be unique to each repository alert

   GHSA identifies an advisory rather than a single repository instance.

2. The advisory database generated random duplicates

   Repeated references can be legitimate.

3. The same advisory can affect several repositories or dependency locations **[CORRECT]**

   One vulnerability can have many affected dependency instances.

4. All but one alert should be deleted automatically

   Each affected instance may need separate remediation.

**Concept:** Advisory versus affected instances

**Authored coaching hints:**

- Is a disclosure record the same thing as an installation?
- How many projects can use the same vulnerable package?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Varias alertas de repositorios hacen referencia al mismo GHSA. ¿Qué puede explicarlo legítimamente?

1. Los GHSA deben ser únicos para cada alerta de repositorio

   GHSA identifica un aviso, no una instancia de repositorio.

2. La base generó duplicados aleatorios

   Las referencias repetidas pueden ser legítimas.

3. El mismo aviso puede afectar varios repositorios o ubicaciones de dependencias **[CORRECT]**

   Una vulnerabilidad puede tener muchas instancias de dependencias afectadas.

4. Todas salvo una deben eliminarse automáticamente

   Cada instancia afectada puede necesitar remediación separada.

**Concept:** Aviso frente a instancias afectadas

**Authored coaching hints:**

- ¿Un registro de divulgación es una instalación?
- ¿Cuántos proyectos pueden usar el mismo paquete vulnerable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Vários alertas de repositórios referenciam o mesmo GHSA. O que pode explicar isso legitimamente?

1. GHSAs precisam ser únicos por alerta de repositório

   GHSA identifica comunicado, não uma instância de repositório.

2. O banco gerou duplicatas aleatórias

   Referências repetidas podem ser legítimas.

3. O mesmo comunicado pode afetar vários repositórios ou locais de dependências **[CORRECT]**

   Uma vulnerabilidade pode ter muitas instâncias afetadas.

4. Todos menos um devem ser excluídos automaticamente

   Cada instância pode precisar de remediação separada.

**Concept:** Comunicado versus instâncias afetadas

**Authored coaching hints:**

- Um registro de divulgação é uma instalação?
- Quantos projetos podem usar o mesmo pacote vulnerável?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/about-the-github-advisory-database>

<!-- certification-coach-question:ghas-operations-034:361365d13c450ae965ed145bb540c1e76dd996c3e8bbabcce4f21787bfd060cf -->
## Question 188: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-034`

**Content revision:** `361365d13c450ae965ed145bb540c1e76dd996c3e8bbabcce4f21787bfd060cf`

### English

A secret is revoked, but investigation indicates unauthorized use before revocation. What should the response team do?

1. Assume revocation reverses all past access

   Revocation prevents future use, not past consequences.

2. Reopen the token at the provider

   Reactivation would restore exposure.

3. Publish the full token to warn users

   Publishing the token adds unnecessary disclosure.

4. Continue incident investigation and impact response while keeping the credential invalid **[CORRECT]**

   Containment and investigation address different parts of incident response.

**Concept:** Containment versus incident impact

**Authored coaching hints:**

- What can revocation undo?
- Which consequences may persist after authentication is blocked?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se revoca un secreto, pero la investigación indica uso no autorizado anterior. ¿Qué debe hacer el equipo?

1. Suponer que revocar revierte todo acceso pasado

   Revocar previene uso futuro, no consecuencias pasadas.

2. Reactivar el token en el proveedor

   Reactivar restauraría exposición.

3. Publicar el token completo para advertir

   Publicar agrega divulgación innecesaria.

4. Continuar investigación y respuesta al impacto manteniendo inválida la credencial **[CORRECT]**

   Contención e investigación abordan partes distintas de la respuesta.

**Concept:** Contención frente a impacto de incidente

**Authored coaching hints:**

- ¿Qué puede deshacer la revocación?
- ¿Qué consecuencias persisten tras bloquear autenticación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo foi revogado, mas a investigação indica uso não autorizado anterior. O que fazer?

1. Supor que revogação reverte todo acesso passado

   Revogação impede uso futuro, não consequências passadas.

2. Reativar o token no provedor

   Reativar restauraria exposição.

3. Publicar o token completo como aviso

   Publicar acrescenta divulgação desnecessária.

4. Continuar investigação e resposta ao impacto mantendo a credencial inválida **[CORRECT]**

   Contenção e investigação tratam partes diferentes da resposta.

**Concept:** Contenção versus impacto do incidente

**Authored coaching hints:**

- O que a revogação pode desfazer?
- Quais consequências persistem após bloquear autenticação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning>

<!-- certification-coach-question:ghas-operations-035:4a3c0a4319ce6b1af0e4225d89bddada5e00fb9b124fedb524af38776ccfd399 -->
## Question 189: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-035`

**Content revision:** `4a3c0a4319ce6b1af0e4225d89bddada5e00fb9b124fedb524af38776ccfd399`

### English

A team writes regression tests after fixing a vulnerable input-handling path. What should those tests primarily establish?

1. The unsafe case is rejected or handled safely while valid behavior still works **[CORRECT]**

   Tests should cover the security condition and legitimate application behavior.

2. Only that the alert count is hidden

   Hiding counts does not test the application.

3. Only that the workflow file parses

   Workflow syntax does not establish the code fix.

4. That every future vulnerability is impossible

   Tests provide evidence for tested behavior, not universal guarantees.

**Concept:** Security regression test objectives

**Authored coaching hints:**

- Which input previously triggered the weakness?
- What valid behavior should the fix preserve?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo escribe pruebas de regresión tras corregir una ruta vulnerable de manejo de entradas. ¿Qué deben establecer principalmente?

1. Que el caso inseguro se rechaza o maneja de forma segura y el comportamiento válido sigue funcionando **[CORRECT]**

   Las pruebas deben cubrir la condición de seguridad y comportamiento legítimo.

2. Solo que se oculte el recuento de alertas

   Ocultar recuentos no prueba la aplicación.

3. Solo que se pueda interpretar el archivo del flujo

   La sintaxis del flujo no establece la corrección.

4. Que sea imposible toda vulnerabilidad futura

   Las pruebas evidencian comportamiento probado, no garantías universales.

**Concept:** Objetivos de pruebas de regresión de seguridad

**Authored coaching hints:**

- ¿Qué entrada activaba la debilidad?
- ¿Qué comportamiento válido debe conservar la corrección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe escreve testes de regressão após corrigir caminho vulnerável de entradas. O que estabelecer principalmente?

1. Que o caso inseguro é rejeitado ou tratado com segurança e comportamento válido continua funcionando **[CORRECT]**

   Testes devem cobrir a condição de segurança e comportamento legítimo.

2. Só que a contagem de alertas fique oculta

   Ocultar contagens não testa a aplicação.

3. Só que o arquivo de workflow possa ser interpretado

   Sintaxe do workflow não estabelece a correção.

4. Que toda vulnerabilidade futura seja impossível

   Testes evidenciam comportamento testado, não garantias universais.

**Concept:** Objetivos de testes de regressão de segurança

**Authored coaching hints:**

- Qual entrada acionava a fraqueza?
- Qual comportamento válido a correção deve preservar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-operations-036:1592c83a41285784fdc7af112c20092a544972e8dc6ef6d68a8e00cc5909f0ab -->
## Question 190: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-036`

**Content revision:** `1592c83a41285784fdc7af112c20092a544972e8dc6ef6d68a8e00cc5909f0ab`

### English

Security and development disagree about whether a reported sanitizer is effective. What is the best next step?

1. Dismiss based on whoever has more repository permissions

   Permission level is not evidence of correctness.

2. Inspect the modeled flow and implementation together, using reproducible evidence **[CORRECT]**

   Collaborative evidence-based review can establish whether the path is protected.

3. Stop all future scanning

   Removing scanning does not resolve the technical question.

4. Replace the discussion with an unverified severity label

   A label alone does not demonstrate sanitizer behavior.

**Concept:** Cross-role technical triage

**Authored coaching hints:**

- What claim can be tested or traced?
- Which code or analysis evidence would resolve the disagreement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Seguridad y desarrollo discrepan sobre la eficacia de un sanitizador reportado. ¿Cuál es el mejor paso siguiente?

1. Descartar según quién tenga más permisos

   Los permisos no evidencian corrección.

2. Inspeccionar juntos el flujo modelado y la implementación con evidencia reproducible **[CORRECT]**

   La revisión colaborativa con evidencia puede establecer si la ruta está protegida.

3. Detener todo análisis futuro

   Quitar análisis no resuelve la cuestión técnica.

4. Reemplazar la discusión por una etiqueta de gravedad no verificada

   Una etiqueta no demuestra comportamiento del sanitizador.

**Concept:** Clasificación técnica entre roles

**Authored coaching hints:**

- ¿Qué afirmación puede probarse o rastrearse?
- ¿Qué evidencia de código o análisis resolvería el desacuerdo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Segurança e desenvolvimento discordam sobre a eficácia de um sanitizador relatado. Qual é o melhor próximo passo?

1. Descartar com base em quem tem mais permissões

   Permissão não é evidência de correção.

2. Inspecionar juntos o fluxo modelado e a implementação com evidência reproduzível **[CORRECT]**

   Revisão colaborativa baseada em evidências estabelece se o caminho está protegido.

3. Parar toda varredura futura

   Remover varredura não resolve a questão técnica.

4. Substituir a discussão por um rótulo de severidade não verificado

   Um rótulo não demonstra comportamento do sanitizador.

**Concept:** Triagem técnica entre funções

**Authored coaching hints:**

- Qual alegação pode ser testada ou rastreada?
- Qual evidência de código ou análise resolveria a discordância?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-operations-037:01029f427555a293b9ed7152a50ab49f0889fd1e6d05ee3a59c2e8136ffde83a -->
## Question 191: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-037`

**Content revision:** `01029f427555a293b9ed7152a50ab49f0889fd1e6d05ee3a59c2e8136ffde83a`

### English

An organization wants to address newly introduced vulnerabilities separately from its historical backlog. Which program combines the goals effectively?

1. Only quarterly backlog reviews

   Backlog reviews alone do not prevent new introductions.

2. Only a release-day scan

   Release-day feedback arrives late and omits sustained backlog ownership.

3. Preventive pull-request checks plus owned, prioritized backlog remediation **[CORRECT]**

   Prevention and backlog remediation address different phases of risk.

4. Automatically dismiss every old finding

   Age-based dismissal can hide unresolved vulnerabilities.

**Concept:** Balancing prevention and backlog reduction

**Authored coaching hints:**

- Which control acts on new changes?
- Which process handles risks already present?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere atender vulnerabilidades nuevas aparte de su backlog histórico. ¿Qué programa combina eficazmente ambos objetivos?

1. Solo revisiones trimestrales del backlog

   Revisar backlog no previene por sí solo nuevas incorporaciones.

2. Solo un análisis el día de publicación

   El análisis del día de publicación llega tarde y omite responsabilidad continua del backlog.

3. Comprobaciones preventivas de pull requests más remediación del backlog priorizada y con responsables **[CORRECT]**

   Prevención y remediación del backlog abordan fases distintas.

4. Descartar automáticamente todo hallazgo antiguo

   Descartar por antigüedad oculta vulnerabilidades pendientes.

**Concept:** Equilibrio de prevención y reducción del backlog

**Authored coaching hints:**

- ¿Qué control actúa en cambios nuevos?
- ¿Qué proceso atiende riesgos existentes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer tratar vulnerabilidades novas separadamente do backlog histórico. Qual programa combina os objetivos?

1. Só revisões trimestrais do backlog

   Revisões do backlog sozinhas não previnem introduções.

2. Só varredura no dia da release

   Varredura na release chega tarde e omite responsabilidade contínua pelo backlog.

3. Verificações preventivas de pull requests com remediação priorizada do backlog e responsáveis **[CORRECT]**

   Prevenção e remediação do backlog tratam fases diferentes.

4. Descartar automaticamente todo resultado antigo

   Descarte por idade pode ocultar vulnerabilidades pendentes.

**Concept:** Equilíbrio entre prevenção e redução de backlog

**Authored coaching hints:**

- Qual controle atua em mudanças novas?
- Qual processo trata riscos já presentes?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-038:3c9a2fcd45fc96178c65822c6dd462d88648f6d89c3aaed79836c38fa4e36c61 -->
## Question 192: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-038`

**Content revision:** `3c9a2fcd45fc96178c65822c6dd462d88648f6d89c3aaed79836c38fa4e36c61`

### English

A security campaign contains a proposed fix that developers do not understand. What is the best use of the campaign's named contact?

1. Automatically approve the patch without review

   A named contact is not a reason to bypass review.

2. Transfer ownership of every repository permanently

   Campaign contact does not imply repository ownership transfer.

3. Override all tests for the campaign

   Tests remain necessary.

4. Clarify risk, expected remediation, and review support so developers can implement safely **[CORRECT]**

   The contact supports collaboration and resolution of remediation questions.

**Concept:** Campaign support responsibilities

**Authored coaching hints:**

- Why does a campaign identify a person to contact?
- What information blocks safe progress?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una campaña contiene una corrección propuesta que los desarrolladores no comprenden. ¿Cuál es el mejor uso de su contacto designado?

1. Aprobar automáticamente el parche sin revisión

   Un contacto no justifica omitir revisión.

2. Transferir permanentemente todos los repositorios

   El contacto no implica transferencia de propiedad.

3. Omitir todas las pruebas de la campaña

   Las pruebas siguen siendo necesarias.

4. Aclarar riesgo, remediación prevista y apoyo de revisión para implementar con seguridad **[CORRECT]**

   El contacto apoya colaboración y resuelve dudas de remediación.

**Concept:** Responsabilidades de apoyo en campañas

**Authored coaching hints:**

- ¿Por qué identifica la campaña una persona de contacto?
- ¿Qué información bloquea el progreso seguro?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma campanha contém correção proposta que os desenvolvedores não entendem. Qual é o melhor uso do contato designado?

1. Aprovar automaticamente o patch sem revisão

   Um contato não justifica pular revisão.

2. Transferir permanentemente todos os repositórios

   O contato não implica transferência de propriedade.

3. Ignorar todos os testes da campanha

   Testes continuam necessários.

4. Esclarecer risco, remediação esperada e apoio à revisão para implementar com segurança **[CORRECT]**

   O contato apoia colaboração e resolve dúvidas de remediação.

**Concept:** Responsabilidades de apoio em campanhas

**Authored coaching hints:**

- Por que a campanha identifica um contato?
- Qual informação bloqueia progresso seguro?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns>

<!-- certification-coach-question:ghas-operations-039:8238832081c3c3a76d9a327e9bf68e368634b04a34ebe38e91cea7dd3157cbe0 -->
## Question 193: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-039`

**Content revision:** `8238832081c3c3a76d9a327e9bf68e368634b04a34ebe38e91cea7dd3157cbe0`

### English

A company adds a custom CodeQL pack to enforce an internal security rule. How should it evaluate the pack before broad adoption?

1. Test representative vulnerable and safe examples, review findings, and assess coverage and precision **[CORRECT]**

   Representative tests check intended detection and unintended matches.

2. Assume custom queries cannot produce false positives

   Custom queries can be wrong or imprecise.

3. Treat successful package download as validation

   Download success only proves distribution worked.

4. Remove all standard queries first

   Removing standard coverage is not required to evaluate additions.

**Concept:** Validating custom detection

**Authored coaching hints:**

- What should the detector find?
- What safe cases should it leave unflagged?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa agrega un paquete CodeQL personalizado para una regla interna. ¿Cómo evaluarlo antes de adoptarlo ampliamente?

1. Probar ejemplos vulnerables y seguros representativos, revisar hallazgos y evaluar cobertura y precisión **[CORRECT]**

   Las pruebas representativas evalúan detección prevista y coincidencias no deseadas.

2. Suponer que las consultas personalizadas no generan falsos positivos

   Las consultas personalizadas pueden ser erróneas o imprecisas.

3. Tratar la descarga exitosa como validación

   Descargar solo prueba que funcionó la distribución.

4. Quitar primero todas las consultas estándar

   No hace falta quitar cobertura estándar para evaluar adiciones.

**Concept:** Validación de detección personalizada

**Authored coaching hints:**

- ¿Qué debe encontrar el detector?
- ¿Qué casos seguros no debería marcar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa adiciona pacote CodeQL personalizado para uma regra interna. Como avaliá-lo antes da adoção ampla?

1. Testar exemplos vulneráveis e seguros representativos, revisar resultados e avaliar cobertura e precisão **[CORRECT]**

   Testes representativos verificam detecção pretendida e correspondências indesejadas.

2. Supor que consultas personalizadas não geram falsos positivos

   Consultas personalizadas podem estar erradas ou ser imprecisas.

3. Tratar download bem-sucedido como validação

   Download só prova que a distribuição funcionou.

4. Remover primeiro todas as consultas padrão

   Não é preciso remover cobertura padrão para avaliar adições.

**Concept:** Validação de detecção personalizada

**Authored coaching hints:**

- O que o detector deve encontrar?
- Quais casos seguros não deveria marcar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:ghas-operations-040:c34a4162fd1278a0115000f8274b3050a7f96f2d125300541dc0e4794a54b400 -->
## Question 194: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-040`

**Content revision:** `c34a4162fd1278a0115000f8274b3050a7f96f2d125300541dc0e4794a54b400`

### English

An alert remains valid but has low current business impact. Which classification avoids confusing risk acceptance with detector error?

1. False positive solely because impact is low

   Low impact does not make a true finding false.

2. A documented lower-priority or accepted-risk decision with continued review **[CORRECT]**

   Risk decisions should preserve the finding's validity and context.

3. Fixed without a code change

   A fixed disposition needs remediation evidence.

4. Invalid because the service is small

   Service size alone does not invalidate the issue.

**Concept:** Validity versus priority

**Authored coaching hints:**

- Is the technical claim wrong?
- How does a real issue's priority differ from its existence?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta sigue siendo válida, pero tiene bajo impacto comercial actual. ¿Qué clasificación evita confundir aceptación de riesgo con error del detector?

1. Falso positivo solo por bajo impacto

   El bajo impacto no vuelve falso un hallazgo verdadero.

2. Decisión documentada de menor prioridad o riesgo aceptado con revisión continua **[CORRECT]**

   Las decisiones de riesgo deben preservar validez y contexto.

3. Corregida sin cambio de código

   Marcar corregida necesita evidencia de remediación.

4. Inválida porque el servicio es pequeño

   El tamaño del servicio no invalida por sí solo el problema.

**Concept:** Validez frente a prioridad

**Authored coaching hints:**

- ¿Es incorrecta la afirmación técnica?
- ¿Cómo difiere la prioridad de un problema real de su existencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um alerta continua válido, mas tem baixo impacto comercial atual. Qual classificação evita confundir aceitação de risco com erro do detector?

1. Falso positivo só pelo baixo impacto

   Baixo impacto não torna falso um resultado verdadeiro.

2. Decisão documentada de menor prioridade ou risco aceito com revisão contínua **[CORRECT]**

   Decisões de risco devem preservar validade e contexto.

3. Corrigido sem mudança no código

   Marcar corrigido exige evidência de remediação.

4. Inválido porque o serviço é pequeno

   Tamanho do serviço não invalida por si só o problema.

**Concept:** Validade versus prioridade

**Authored coaching hints:**

- A afirmação técnica está errada?
- Como a prioridade de um problema real difere da sua existência?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts>

<!-- certification-coach-question:ghas-operations-041:205ddf2debea2b0887979f5a7bdce0e975a80474a48ec891b620493c075bf812 -->
## Question 195: Security operations: best practices, prioritization, remediation

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-operations-041`

**Content revision:** `205ddf2debea2b0887979f5a7bdce0e975a80474a48ec891b620493c075bf812`

### English

A new high-risk alert arrives while a lower-risk cleanup campaign is underway. What should the security team do?

1. Ignore all work outside the campaign until it ends

   Campaign scope should not block urgent response.

2. Assign urgency only by alert creation order

   Chronology alone is not risk prioritization.

3. Reassess priorities using current risk and route the urgent issue without losing campaign accountability **[CORRECT]**

   Operational prioritization must adapt to new risk while keeping ongoing work owned.

4. Automatically add every new alert to the existing campaign

   Unbounded campaign growth can undermine its coherent objective.

**Concept:** Adaptive security prioritization

**Authored coaching hints:**

- Has the risk landscape changed?
- Can urgent incident work and planned remediation remain separately accountable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Llega una nueva alerta de alto riesgo durante una campaña de limpieza de menor riesgo. ¿Qué debe hacer seguridad?

1. Ignorar todo lo externo a la campaña hasta terminar

   El alcance de campaña no debe impedir respuesta urgente.

2. Asignar urgencia solo por orden de creación

   La cronología sola no prioriza riesgo.

3. Reevaluar prioridades según riesgo actual y encauzar lo urgente sin perder responsabilidad de campaña **[CORRECT]**

   La priorización debe adaptarse conservando responsables del trabajo en curso.

4. Agregar automáticamente toda alerta nueva a la campaña

   El crecimiento ilimitado puede perjudicar el objetivo coherente.

**Concept:** Priorización adaptativa de seguridad

**Authored coaching hints:**

- ¿Cambió el panorama de riesgo?
- ¿Pueden mantener responsabilidades separadas el trabajo urgente y la remediación planificada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Chega um alerta novo de alto risco durante uma campanha de limpeza de menor risco. O que segurança deve fazer?

1. Ignorar todo trabalho fora da campanha até terminar

   O escopo não deve bloquear resposta urgente.

2. Atribuir urgência só pela ordem de criação

   Cronologia sozinha não prioriza risco.

3. Reavaliar prioridades pelo risco atual e encaminhar a urgência sem perder responsabilidade da campanha **[CORRECT]**

   Priorização precisa se adaptar mantendo responsáveis pelo trabalho em curso.

4. Adicionar automaticamente todo alerta novo à campanha

   Crescimento ilimitado prejudica o objetivo coerente da campanha.

**Concept:** Priorização adaptativa de segurança

**Authored coaching hints:**

- O cenário de risco mudou?
- Trabalho urgente e remediação planejada podem manter responsabilidades separadas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics>

<!-- certification-coach-question:ghas-administration-001:f036b131214eb78bb7e8798906bf155e5a6d8097cf6497e6229232bba95946e1 -->
## Question 196: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-001`

**Content revision:** `f036b131214eb78bb7e8798906bf155e5a6d8097cf6497e6229232bba95946e1`

### English

An organization wants new private repositories to receive a tested baseline automatically. Which configuration should the administrator set?

1. Only a template README explaining security

   Documentation does not automatically apply feature settings.

2. Only a configuration attached to one existing repository

   An existing attachment does not itself define defaults for future repositories.

3. Only an enterprise billing contact

   Billing contacts do not configure scanning baselines.

4. A security configuration selected as the default for newly created private and internal repositories **[CORRECT]**

   Default security configurations can target newly created repository visibility groups.

**Concept:** New-repository security defaults

**Authored coaching hints:**

- Which repositories do not exist yet?
- What setting governs creation-time application?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización quiere que los repositorios privados nuevos reciban automáticamente una base probada. ¿Qué debe configurar?

1. Solo un README de plantilla que explique seguridad

   Documentar no aplica ajustes automáticamente.

2. Solo una configuración asociada a un repositorio existente

   Una asociación existente no define por sí sola valores para repositorios futuros.

3. Solo un contacto empresarial de facturación

   Los contactos de facturación no configuran bases de análisis.

4. Una configuración de seguridad predeterminada para repositorios privados e internos recién creados **[CORRECT]**

   Las configuraciones predeterminadas pueden dirigirse a grupos de visibilidad de repositorios nuevos.

**Concept:** Valores predeterminados para repositorios nuevos

**Authored coaching hints:**

- ¿Qué repositorios aún no existen?
- ¿Qué ajuste gobierna la aplicación al crearlos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização quer que repositórios privados novos recebam automaticamente uma base testada. O que configurar?

1. Só um README de modelo explicando segurança

   Documentar não aplica ajustes automaticamente.

2. Só configuração associada a um repositório existente

   Uma associação existente não define por si só padrões futuros.

3. Só contato empresarial de cobrança

   Contatos de cobrança não configuram bases de varredura.

4. Uma configuração de segurança padrão para repositórios privados e internos recém-criados **[CORRECT]**

   Configurações padrão podem atingir grupos de visibilidade de repositórios novos.

**Concept:** Padrões de segurança para novos repositórios

**Authored coaching hints:**

- Quais repositórios ainda não existem?
- Qual ajuste governa aplicação na criação?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-002:9ca0f257b4fe1db3fb52d2a8fc5b17326d159d7c84497bc68cf0f1b26844a0ec -->
## Question 197: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-002`

**Content revision:** `9ca0f257b4fe1db3fb52d2a8fc5b17326d159d7c84497bc68cf0f1b26844a0ec`

### English

A repository is transferred into an organization that has a default security configuration. What should the receiving administrator do?

1. Apply an appropriate configuration explicitly rather than assume the new-repository default applied **[CORRECT]**

   The documented new-repository default is not automatically applied to transferred repositories.

2. Assume the default always attaches during transfer

   Transfer differs from creating a new repository in the organization.

3. Disable all security features before checking

   Disabling controls is not necessary to assess configuration.

4. Treat transfer as proof all alerts are resolved

   Ownership transfer does not fix vulnerabilities.

**Concept:** Transferred-repository configuration

**Authored coaching hints:**

- Was the repository newly created or moved?
- What events does the default configuration actually cover?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se transfiere un repositorio a una organización con configuración de seguridad predeterminada. ¿Qué debe hacer el administrador receptor?

1. Aplicar explícitamente una configuración adecuada en vez de suponer que se aplicó la predeterminada **[CORRECT]**

   La predeterminada documentada para nuevos repositorios no se aplica automáticamente a transferidos.

2. Suponer que siempre se asocia durante la transferencia

   Transferir difiere de crear en la organización.

3. Desactivar toda función antes de comprobar

   No hace falta desactivar controles para evaluar configuración.

4. Tratar la transferencia como prueba de alertas resueltas

   Transferir propiedad no corrige vulnerabilidades.

**Concept:** Configuración de repositorios transferidos

**Authored coaching hints:**

- ¿Se creó o se movió el repositorio?
- ¿Qué eventos cubre realmente la configuración predeterminada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório é transferido para uma organização com configuração padrão de segurança. O que o administrador receptor deve fazer?

1. Aplicar explicitamente uma configuração adequada em vez de supor que a padrão foi aplicada **[CORRECT]**

   O padrão documentado para novos repositórios não se aplica automaticamente aos transferidos.

2. Supor que a padrão sempre se associa na transferência

   Transferir difere de criar na organização.

3. Desativar todos os recursos antes de verificar

   Não é preciso desativar controles para avaliar configuração.

4. Tratar transferência como prova de alertas resolvidos

   Transferir propriedade não corrige vulnerabilidades.

**Concept:** Configuração de repositórios transferidos

**Authored coaching hints:**

- O repositório foi criado ou movido?
- Quais eventos a configuração padrão realmente cobre?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-003:45c29a8fd4e7110c789ddaf616fe95cd70dd9b95b365b9236d40a7e19e3dc77e -->
## Question 198: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-003`

**Content revision:** `45c29a8fd4e7110c789ddaf616fe95cd70dd9b95b365b9236d40a7e19e3dc77e`

### English

A security configuration enables a feature, but administrators want repository owners unable to change that configured setting locally. Which option is relevant?

1. The dependency-review license list

   License lists control dependency policy, not configuration mutability.

2. Enforce configuration **[CORRECT]**

   Enforcement blocks local changes to enabled or disabled features covered by the configuration.

3. The CodeQL database name

   Database names do not govern repository settings.

4. A repository discussion category

   Discussion categories do not enforce security configuration.

**Concept:** Security configuration enforcement

**Authored coaching hints:**

- Is the issue applying a setting or preventing drift?
- Which option controls whether local owners can override configured values?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración habilita una función, pero se quiere impedir que propietarios del repositorio cambien ese ajuste localmente. ¿Qué opción corresponde?

1. La lista de licencias de revisión de dependencias

   Las listas de licencias controlan política de dependencias, no mutabilidad.

2. Enforce configuration **[CORRECT]**

   La aplicación obligatoria bloquea cambios locales en funciones habilitadas o deshabilitadas cubiertas.

3. El nombre de la base CodeQL

   Los nombres de bases no gobiernan ajustes de repositorio.

4. Una categoría de discusiones

   Las categorías de discusión no exigen configuración de seguridad.

**Concept:** Aplicación obligatoria de configuración de seguridad

**Authored coaching hints:**

- ¿Se trata de aplicar un ajuste o evitar desviaciones?
- ¿Qué opción controla si los propietarios pueden anular valores configurados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração habilita um recurso, mas quer-se impedir que donos do repositório alterem o ajuste localmente. Qual opção é relevante?

1. A lista de licenças da revisão de dependências

   Listas de licenças controlam política de dependências, não mutabilidade.

2. Enforce configuration **[CORRECT]**

   A imposição bloqueia mudanças locais em recursos habilitados ou desabilitados cobertos.

3. O nome do banco CodeQL

   Nomes de bancos não governam ajustes de repositório.

4. Uma categoria de discussões

   Categorias de discussão não impõem configuração de segurança.

**Concept:** Imposição de configuração de segurança

**Authored coaching hints:**

- O problema é aplicar um ajuste ou impedir desvio?
- Qual opção controla se donos locais podem sobrescrever valores?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-004:e7df8c5ce4607ce9c326da984e6038e64b249bbcbece5b09c1c9baa48f485e28 -->
## Question 199: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-004`

**Content revision:** `e7df8c5ce4607ce9c326da984e6038e64b249bbcbece5b09c1c9baa48f485e28`

### English

An enforced configuration leaves a feature as not set or keeps its existing value. What should administrators avoid assuming?

1. That enabled settings can be included

   Enabled settings can be included.

2. That different repositories may retain different existing values

   Preserving existing values can preserve repository differences.

3. That every unspecified feature is also locked by enforcement **[CORRECT]**

   Features not set by the configuration are not enforced as explicit enabled or disabled values.

4. That configurations can include multiple security products

   Configurations can collect settings from multiple security areas.

**Concept:** Enforcement scope of unspecified settings

**Authored coaching hints:**

- Did the configuration actually choose a value for this feature?
- What does preserving an existing value imply?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración obligatoria deja una función como not set o conserva su valor existente. ¿Qué no se debe suponer?

1. Que pueden incluirse ajustes habilitados

   Pueden incluirse ajustes habilitados.

2. Que distintos repositorios pueden conservar valores distintos

   Conservar valores existentes puede conservar diferencias.

3. Que todas las funciones sin especificar también quedan bloqueadas **[CORRECT]**

   Las funciones no configuradas no se exigen como valores explícitos habilitados o deshabilitados.

4. Que las configuraciones pueden incluir varios productos de seguridad

   Las configuraciones pueden reunir ajustes de varias áreas.

**Concept:** Alcance obligatorio de ajustes no especificados

**Authored coaching hints:**

- ¿La configuración eligió realmente un valor?
- ¿Qué implica conservar un valor existente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração imposta deixa um recurso como not set ou mantém seu valor existente. O que não presumir?

1. Que ajustes habilitados podem ser incluídos

   Ajustes habilitados podem ser incluídos.

2. Que repositórios distintos podem manter valores diferentes

   Preservar valores existentes pode preservar diferenças.

3. Que todos os recursos não especificados também ficam bloqueados **[CORRECT]**

   Recursos não definidos não são impostos como valores explícitos habilitados ou desabilitados.

4. Que configurações podem incluir vários produtos de segurança

   Configurações podem reunir ajustes de várias áreas.

**Concept:** Escopo de imposição de ajustes não especificados

**Authored coaching hints:**

- A configuração realmente escolheu um valor?
- O que preservar um valor existente implica?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-005:31586737d00b2744648841313d932c0f6ea2534f918fc428841ac69ccbab2e17 -->
## Question 200: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-005`

**Content revision:** `31586737d00b2744648841313d932c0f6ea2534f918fc428841ac69ccbab2e17`

### English

An enterprise migrates a security process from GitHub Enterprise Cloud to GitHub Enterprise Server. What should it verify before promising feature parity?

1. Only that the Cloud documentation mentions the feature

   Cloud availability does not prove support in a particular Server release.

2. Only that the same repository settings have been exported

   Exported settings cannot enable a capability absent from the destination.

3. Only that both deployments use an enterprise subscription

   Subscription category alone does not establish release-specific support.

4. The installed Server version, feature documentation, licensing, and infrastructure prerequisites **[CORRECT]**

   Server features and operational requirements can vary by release and deployment.

**Concept:** Cloud versus Server planning

**Authored coaching hints:**

- Which deployment's documentation applies?
- What technical prerequisites exist beyond copied settings?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa migra un proceso de seguridad de GitHub Enterprise Cloud a GitHub Enterprise Server. ¿Qué verificar antes de prometer paridad?

1. Solo que la documentación Cloud mencione la función

   La disponibilidad Cloud no prueba compatibilidad en una versión concreta de Server.

2. Solo que se exportaron los mismos ajustes

   Exportar ajustes no habilita capacidades ausentes en destino.

3. Solo que ambos usan suscripción empresarial

   La categoría de suscripción no establece compatibilidad por versión.

4. La versión instalada de Server, documentación de funciones, licencias y requisitos de infraestructura **[CORRECT]**

   Las funciones y requisitos de Server varían por versión y despliegue.

**Concept:** Planificación Cloud frente a Server

**Authored coaching hints:**

- ¿La documentación de qué despliegue se aplica?
- ¿Qué requisitos técnicos existen además de copiar ajustes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa migra processo de segurança do GitHub Enterprise Cloud para GitHub Enterprise Server. O que verificar antes de prometer paridade?

1. Só que a documentação Cloud menciona o recurso

   Disponibilidade Cloud não prova suporte em uma versão específica do Server.

2. Só que os mesmos ajustes foram exportados

   Exportar ajustes não habilita capacidade ausente no destino.

3. Só que ambos usam assinatura empresarial

   Categoria de assinatura não estabelece suporte por versão.

4. A versão instalada do Server, documentação de recursos, licenças e pré-requisitos de infraestrutura **[CORRECT]**

   Recursos e requisitos do Server variam por versão e implantação.

**Concept:** Planejamento Cloud versus Server

**Authored coaching hints:**

- A documentação de qual implantação se aplica?
- Quais requisitos técnicos existem além de copiar ajustes?

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:ghas-administration-006:8e1ae9d3ab7d496708349ef09771f4f5e8fc830e060e0475333594bf39e1bef4 -->
## Question 201: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-006`

**Content revision:** `8e1ae9d3ab7d496708349ef09771f4f5e8fc830e060e0475333594bf39e1bef4`

### English

A security team needs organization-wide alert access and security settings management without full organization ownership. Which role best fits?

1. Security manager **[CORRECT]**

   The security-manager role is intended for organization-wide security responsibilities.

2. Billing manager

   Billing administration does not provide the requested security authority.

3. Outside collaborator with no repository grants

   No repository grants do not provide security oversight.

4. Repository triage access to one project

   One repository's triage role does not cover organization settings.

**Concept:** Organization security manager role

**Authored coaching hints:**

- What is the scope of responsibility?
- Which role delegates security management specifically?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo necesita acceso organizacional a alertas y gestión de ajustes de seguridad sin propiedad total. ¿Qué rol encaja mejor?

1. Administrador de seguridad **[CORRECT]**

   El rol de administrador de seguridad está destinado a responsabilidades de seguridad organizacionales.

2. Administrador de facturación

   La facturación no otorga la autoridad solicitada.

3. Colaborador externo sin permisos de repositorio

   Sin permisos de repositorio no hay supervisión de seguridad.

4. Acceso de clasificación a un proyecto

   Clasificar en un repositorio no cubre ajustes de organización.

**Concept:** Rol organizacional de administrador de seguridad

**Authored coaching hints:**

- ¿Cuál es el alcance de responsabilidad?
- ¿Qué rol delega específicamente gestión de seguridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe precisa de acesso organizacional a alertas e gestão de ajustes de segurança sem propriedade total. Qual função atende melhor?

1. Gerente de segurança **[CORRECT]**

   A função de gerente de segurança se destina a responsabilidades organizacionais de segurança.

2. Gerente de cobrança

   Cobrança não fornece a autoridade solicitada.

3. Colaborador externo sem permissões de repositório

   Sem permissões de repositório não há supervisão.

4. Acesso de triagem a um projeto

   Triagem de um repositório não cobre ajustes da organização.

**Concept:** Função organizacional de gerente de segurança

**Authored coaching hints:**

- Qual é o escopo da responsabilidade?
- Qual função delega especificamente gestão de segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization>

<!-- certification-coach-question:ghas-administration-007:60c2410d45a55212433926e6d638de1585ee45969b1b311f759e54e74911fa92 -->
## Question 202: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-007`

**Content revision:** `60c2410d45a55212433926e6d638de1585ee45969b1b311f759e54e74911fa92`

### English

What additional access implication should be considered before assigning the security-manager role?

1. It grants unrestricted ownership of every enterprise

   The role is organization-scoped and not unrestricted enterprise ownership.

2. It includes read access to all repositories in the organization **[CORRECT]**

   Organization-wide repository read access accompanies the security role.

3. It grants no repository visibility

   The role includes broad security visibility and repository read permissions.

4. It permits only invoice review

   Invoice review is not its purpose.

**Concept:** Security-manager access footprint

**Authored coaching hints:**

- What code visibility is necessary for organization-wide security work?
- What should access reviewers understand beyond the role's name?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué implicación adicional de acceso debe considerarse antes de asignar el rol de administrador de seguridad?

1. Otorga propiedad irrestricta de toda empresa

   El rol es organizacional, no propiedad empresarial irrestricta.

2. Incluye lectura de todos los repositorios de la organización **[CORRECT]**

   El rol de seguridad incluye lectura de repositorios en toda la organización.

3. No otorga visibilidad de repositorios

   Incluye amplia visibilidad de seguridad y permisos de lectura.

4. Solo permite revisar facturas

   Revisar facturas no es su propósito.

**Concept:** Alcance de acceso del administrador de seguridad

**Authored coaching hints:**

- ¿Qué visibilidad de código requiere la seguridad organizacional?
- ¿Qué deben comprender los revisores de acceso además del nombre del rol?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual implicação adicional de acesso considerar antes de atribuir gerente de segurança?

1. Concede propriedade irrestrita de toda empresa

   A função é organizacional, não propriedade empresarial irrestrita.

2. Inclui leitura de todos os repositórios da organização **[CORRECT]**

   A função inclui leitura de repositórios em toda a organização.

3. Não concede visibilidade de repositórios

   Inclui ampla visibilidade de segurança e permissões de leitura.

4. Permite só revisar faturas

   Revisar faturas não é seu objetivo.

**Concept:** Alcance de acesso do gerente de segurança

**Authored coaching hints:**

- Qual visibilidade de código é necessária para segurança organizacional?
- O que revisores de acesso precisam entender além do nome da função?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization>

<!-- certification-coach-question:ghas-administration-008:640d8133436164bb24699a8eec0f509e633ac499835a68ded55bdead5fc5a81e -->
## Question 203: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-008`

**Content revision:** `640d8133436164bb24699a8eec0f509e633ac499835a68ded55bdead5fc5a81e`

### English

An auditor needs to know who dismissed dependency alerts and why. Which evidence is more appropriate than current alert counts alone?

1. The repository star history

   Stars do not record security decisions.

2. The latest dependency lockfile only

   Lockfiles record versions, not decision actors and reasons.

3. Security audit events and alert timelines with dismissal context **[CORRECT]**

   Audit records and timelines provide action, actor, time, and justification context.

4. The organization's public profile

   Public profiles do not contain alert decision histories.

**Concept:** Auditing alert governance

**Authored coaching hints:**

- Is the question about present state or prior actions?
- Where are actors and reasons recorded?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un auditor necesita saber quién descartó alertas de dependencias y por qué. ¿Qué evidencia es más adecuada que los recuentos actuales solos?

1. El historial de estrellas del repositorio

   Las estrellas no registran decisiones de seguridad.

2. Solo el archivo de bloqueo más reciente

   Los archivos de bloqueo registran versiones, no actores ni motivos.

3. Eventos de auditoría y cronologías de alertas con contexto de descarte **[CORRECT]**

   Los registros y cronologías aportan acción, actor, hora y justificación.

4. El perfil público de la organización

   Los perfiles públicos no contienen historiales de decisiones de alertas.

**Concept:** Auditoría de gobernanza de alertas

**Authored coaching hints:**

- ¿Se pregunta por estado actual o acciones previas?
- ¿Dónde se registran actores y motivos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um auditor precisa saber quem descartou alertas de dependências e por quê. Qual evidência é melhor que só contagens atuais?

1. Histórico de estrelas do repositório

   Estrelas não registram decisões de segurança.

2. Só o arquivo de lock mais recente

   Arquivos de lock registram versões, não atores e motivos.

3. Eventos de auditoria e linhas do tempo de alertas com contexto de descarte **[CORRECT]**

   Registros e linhas do tempo fornecem ação, ator, horário e justificativa.

4. O perfil público da organização

   Perfis públicos não contêm históricos de decisões de alertas.

**Concept:** Auditoria da governança de alertas

**Authored coaching hints:**

- A pergunta é sobre estado atual ou ações anteriores?
- Onde atores e motivos são registrados?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts>

<!-- certification-coach-question:ghas-administration-009:b767ff4da5a07dec9243b3730b1d155d3f2351ae28617bb56e43beca399aa2ff -->
## Question 204: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-009`

**Content revision:** `b767ff4da5a07dec9243b3730b1d155d3f2351ae28617bb56e43beca399aa2ff`

### English

An administrator rolls out security features to hundreds of repositories. Which sequence best controls rollout risk?

1. Apply untested settings everywhere and stop monitoring

   Unvalidated broad changes can create widespread failures.

2. Disable all repository access before reading the policy

   Removing access is not a prerequisite to rollout.

3. Rely only on a message asking maintainers to enable features

   Requests alone do not verify implementation.

4. Pilot representative repositories, verify successful coverage and cost implications, then expand with monitoring **[CORRECT]**

   A staged, measured rollout validates configuration, operations, and budget.

**Concept:** Controlled organization rollout

**Authored coaching hints:**

- Which repository types could behave differently?
- What evidence should a pilot produce before expansion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se despliegan funciones de seguridad en cientos de repositorios. ¿Qué secuencia controla mejor el riesgo?

1. Aplicar ajustes sin probar en todos y dejar de monitorear

   Los cambios amplios sin validar pueden causar fallos generalizados.

2. Desactivar todo acceso antes de leer la política

   Quitar acceso no es requisito.

3. Confiar solo en un mensaje pidiendo habilitar funciones

   Las solicitudes solas no verifican implementación.

4. Pilotar repositorios representativos, verificar cobertura exitosa y costos, luego ampliar con monitoreo **[CORRECT]**

   Un despliegue gradual medido valida configuración, operación y presupuesto.

**Concept:** Despliegue organizacional controlado

**Authored coaching hints:**

- ¿Qué tipos de repositorios podrían comportarse distinto?
- ¿Qué evidencia debe producir el piloto antes de ampliar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Recursos de segurança são implantados em centenas de repositórios. Qual sequência controla melhor o risco?

1. Aplicar ajustes não testados em todos e parar de monitorar

   Mudanças amplas sem validação podem causar falhas generalizadas.

2. Desativar todo acesso antes de ler a política

   Remover acesso não é pré-requisito.

3. Depender só de mensagem pedindo habilitação

   Pedidos sozinhos não verificam implementação.

4. Fazer piloto representativo, verificar cobertura bem-sucedida e custos, depois ampliar com monitoramento **[CORRECT]**

   Implantação gradual medida valida configuração, operação e orçamento.

**Concept:** Implantação organizacional controlada

**Authored coaching hints:**

- Quais tipos de repositórios poderiam agir diferente?
- Qual evidência o piloto deve produzir antes de ampliar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-010:e2ec043c1df6f3ba27bf4dcf259cd9e06398599a7ba1718ec0ba569884da5006 -->
## Question 205: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-010`

**Content revision:** `e2ec043c1df6f3ba27bf4dcf259cd9e06398599a7ba1718ec0ba569884da5006`

### English

A governance script must enumerate and update security settings at scale. What is the right integration strategy?

1. Use the documented security APIs with scoped permissions and inspect responses **[CORRECT]**

   Documented APIs support controlled automation and verifiable results.

2. Scrape developers' private browser data

   Private browser data is not an appropriate management interface.

3. Store an organization-owner token in every repository

   Duplicating powerful credentials violates least privilege.

4. Assume one successful request means all repositories changed

   Partial failures and differing repository conditions need per-result checking.

**Concept:** API-based security governance

**Authored coaching hints:**

- Which authority does the automation actually need?
- How will it detect partial application rather than assume success?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script de gobernanza debe enumerar y actualizar ajustes de seguridad a escala. ¿Cuál es la estrategia correcta?

1. Usar API de seguridad documentadas con permisos acotados e inspeccionar respuestas **[CORRECT]**

   Las API documentadas permiten automatización controlada y resultados verificables.

2. Extraer datos privados del navegador de desarrolladores

   Los datos privados del navegador no son una interfaz de gestión adecuada.

3. Guardar un token de propietario organizacional en cada repositorio

   Duplicar credenciales poderosas viola el privilegio mínimo.

4. Suponer que una solicitud exitosa significa que todos cambiaron

   Los fallos parciales y condiciones distintas requieren revisar cada resultado.

**Concept:** Gobernanza de seguridad mediante API

**Authored coaching hints:**

- ¿Qué autoridad necesita realmente la automatización?
- ¿Cómo detectará aplicación parcial en vez de suponer éxito?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script de governança precisa enumerar e atualizar ajustes de segurança em escala. Qual é a estratégia correta?

1. Usar APIs documentadas com permissões restritas e inspecionar respostas **[CORRECT]**

   APIs documentadas permitem automação controlada e resultados verificáveis.

2. Extrair dados privados do navegador dos desenvolvedores

   Dados privados do navegador não são interface adequada de gestão.

3. Guardar token de proprietário em todo repositório

   Duplicar credenciais poderosas viola privilégio mínimo.

4. Supor que uma solicitação bem-sucedida significa que todos mudaram

   Falhas parciais e condições distintas exigem verificar cada resultado.

**Concept:** Governança de segurança por APIs

**Authored coaching hints:**

- Qual autoridade a automação realmente precisa?
- Como detectará aplicação parcial em vez de presumir sucesso?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/code-security/configurations>

<!-- certification-coach-question:ghas-administration-011:f3e2df7d33cf94f8f83a02264909a6dc7d051d008bd8309ac6e2d1cecf0df370 -->
## Question 206: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-011`

**Content revision:** `f3e2df7d33cf94f8f83a02264909a6dc7d051d008bd8309ac6e2d1cecf0df370`

### English

A security dashboard does not show a repository that an analyst expects to inspect. What should be checked before assuming the repository has no alerts?

1. Only whether the repository's latest build passed

   Build success does not establish dashboard visibility or lack of findings.

2. The analyst's role and repository permissions, plus the view's filters **[CORRECT]**

   Overview data is permission-scoped and filters can narrow results.

3. Only whether the analyst receives email notifications

   Notification preferences do not establish access to a view.

4. Only whether another organization uses the same security configuration

   Another organization's configuration does not determine this analyst's visible scope.

**Concept:** Permission-scoped security overview

**Authored coaching hints:**

- Is the absence a risk result or a visibility issue?
- Which scope and filters are active?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un panel no muestra un repositorio que un analista esperaba inspeccionar. ¿Qué comprobar antes de suponer que no tiene alertas?

1. Solo si pasó la última compilación

   Una compilación exitosa no establece visibilidad ni ausencia de hallazgos.

2. El rol y permisos del analista, más los filtros de la vista **[CORRECT]**

   Los datos están limitados por permisos y filtros.

3. Solo si recibe notificaciones por correo

   Las preferencias de notificación no establecen acceso a una vista.

4. Solo si otra organización usa la misma configuración

   La configuración de otra organización no determina el alcance visible.

**Concept:** Vista general de seguridad limitada por permisos

**Authored coaching hints:**

- ¿La ausencia es un resultado de riesgo o un problema de visibilidad?
- ¿Qué alcance y filtros están activos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um painel não mostra um repositório esperado pelo analista. O que verificar antes de supor que não há alertas?

1. Só se o último build passou

   Build bem-sucedido não estabelece visibilidade nem ausência de resultados.

2. A função e permissões do analista, além dos filtros da visualização **[CORRECT]**

   Os dados são limitados por permissões e filtros.

3. Só se recebe notificações por e-mail

   Preferências de notificação não estabelecem acesso à visualização.

4. Só se outra organização usa a mesma configuração

   Configuração de outra organização não determina o escopo visível.

**Concept:** Visão geral de segurança limitada por permissões

**Authored coaching hints:**

- A ausência é resultado de risco ou problema de visibilidade?
- Quais escopo e filtros estão ativos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-administration-012:ba536a0b56ae171e5e4a38bfe30c42ee9c51a6fe2fbc8e2f7282d124be88d996 -->
## Question 207: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-012`

**Content revision:** `ba536a0b56ae171e5e4a38bfe30c42ee9c51a6fe2fbc8e2f7282d124be88d996`

### English

An enterprise owner needs repository-level details from an organization's security overview. Which nuance matters?

1. Enterprise ownership automatically gives every organization permission

   Enterprise ownership should not be assumed to bypass organization-level detail permissions.

2. Every public reader can see private alert details

   Private security data is access-controlled.

3. Appropriate organization-level roles and access are still required for detailed security data **[CORRECT]**

   Detailed visibility requires the appropriate organization role or repository access.

4. Only billing access is required

   Billing authority does not substitute for security access.

**Concept:** Enterprise versus organization visibility

**Authored coaching hints:**

- Which scope owns the repository-level data?
- Does enterprise administration imply all organization permissions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario empresarial necesita detalles de repositorio en la vista de seguridad de una organización. ¿Qué matiz importa?

1. La propiedad empresarial da automáticamente todos los permisos organizacionales

   No debe suponerse que la propiedad empresarial evita permisos de detalle organizacionales.

2. Todo lector público puede ver detalles privados de alertas

   Los datos privados de seguridad tienen control de acceso.

3. Aún se requieren roles y acceso organizacionales adecuados para datos detallados **[CORRECT]**

   La visibilidad detallada requiere rol organizacional o acceso de repositorio apropiado.

4. Solo se requiere acceso de facturación

   La facturación no sustituye acceso de seguridad.

**Concept:** Visibilidad empresarial frente a organizacional

**Authored coaching hints:**

- ¿Qué alcance posee los datos de repositorio?
- ¿Administrar la empresa implica todos los permisos de organización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário empresarial precisa de detalhes de repositório na visão de segurança de uma organização. Qual nuance importa?

1. Propriedade empresarial dá automaticamente toda permissão organizacional

   Não se deve supor que propriedade empresarial ignore permissões organizacionais de detalhes.

2. Todo leitor público vê detalhes privados de alertas

   Dados privados de segurança têm controle de acesso.

3. Ainda são necessárias funções e acesso organizacionais adequados para dados detalhados **[CORRECT]**

   Visibilidade detalhada exige função organizacional ou acesso de repositório adequado.

4. Só é necessário acesso de cobrança

   Cobrança não substitui acesso de segurança.

**Concept:** Visibilidade empresarial versus organizacional

**Authored coaching hints:**

- Qual escopo possui os dados de repositório?
- Administrar a empresa implica todas as permissões da organização?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-administration-013:d1799c78ea8935b784f6f3ed465e35a03ea36c05860c4cabf6ed66c730991331 -->
## Question 208: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-013`

**Content revision:** `d1799c78ea8935b784f6f3ed465e35a03ea36c05860c4cabf6ed66c730991331`

### English

A configuration uses CodeQL default setup but the organization already has specialized advanced workflows. What should be reviewed before application?

1. Only whether advanced workflows use the default query suite

   Matching query suites do not settle setup compatibility.

2. Only whether both setups use GitHub Actions

   A shared execution platform does not determine configuration behavior.

3. Only whether the same languages appear in both configurations

   Matching languages do not establish how existing setup will be handled.

4. How the chosen setting treats repositories with active advanced setup **[CORRECT]**

   Configuration options can distinguish enabling default setup from allowing existing advanced setup.

**Concept:** Preserving specialized CodeQL setup

**Authored coaching hints:**

- What setup state already exists?
- Which configuration behavior could preserve or disrupt that state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración usa CodeQL predeterminado, pero ya existen flujos avanzados especializados. ¿Qué revisar antes de aplicarla?

1. Solo si los flujos avanzados usan la suite predeterminada

   Coincidir en suite no resuelve compatibilidad de configuración.

2. Solo si ambos usan GitHub Actions

   Compartir plataforma de ejecución no determina el comportamiento.

3. Solo si aparecen los mismos lenguajes

   Coincidir en lenguajes no establece cómo se tratará lo existente.

4. Cómo trata el ajuste elegido a repositorios con configuración avanzada activa **[CORRECT]**

   Las opciones pueden distinguir habilitar lo predeterminado de permitir lo avanzado existente.

**Concept:** Preservación de configuración especializada CodeQL

**Authored coaching hints:**

- ¿Qué estado de configuración ya existe?
- ¿Qué comportamiento podría conservarlo o alterarlo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração usa CodeQL padrão, mas já existem workflows avançados especializados. O que revisar antes de aplicar?

1. Só se os workflows avançados usam a suíte padrão

   Suítes iguais não resolvem compatibilidade de configuração.

2. Só se ambos usam GitHub Actions

   Plataforma de execução compartilhada não determina comportamento.

3. Só se aparecem as mesmas linguagens

   Linguagens iguais não estabelecem como o existente será tratado.

4. Como o ajuste escolhido trata repositórios com configuração avançada ativa **[CORRECT]**

   Opções distinguem habilitar padrão de permitir avançado existente.

**Concept:** Preservação da configuração especializada CodeQL

**Authored coaching hints:**

- Qual estado de configuração já existe?
- Qual comportamento poderia preservá-lo ou interrompê-lo?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-014:1b1a2065f9f1b069370631bd66edba918c1c3afb1e3ee8e51bf0b1f9200c3faa -->
## Question 209: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-014`

**Content revision:** `1b1a2065f9f1b069370631bd66edba918c1c3afb1e3ee8e51bf0b1f9200c3faa`

### English

The organization selects Enabled with advanced setup allowed in a supported security configuration. Which behavior is documented?

1. Enable default setup where CodeQL is not actively running while allowing active advanced setup **[CORRECT]**

   This option supports baseline enablement without replacing active advanced analysis.

2. Delete all advanced workflows immediately

   Its purpose is to allow active advanced setup.

3. Run only secret scanning and never CodeQL

   The setting concerns CodeQL.

4. Make unsupported languages supported automatically

   Configuration cannot add language support to the engine.

**Concept:** Advanced-setup-aware baseline

**Authored coaching hints:**

- Why would this option mention advanced setup?
- Which repositories still need analysis enabled?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se selecciona Enabled with advanced setup allowed en una configuración compatible. ¿Qué comportamiento está documentado?

1. Habilitar lo predeterminado donde CodeQL no se ejecute activamente y permitir lo avanzado activo **[CORRECT]**

   Esta opción habilita una base sin reemplazar análisis avanzado activo.

2. Eliminar inmediatamente todos los flujos avanzados

   Su propósito es permitir la configuración avanzada activa.

3. Ejecutar solo análisis de secretos, nunca CodeQL

   El ajuste trata CodeQL.

4. Volver compatibles automáticamente lenguajes no admitidos

   La configuración no agrega lenguajes al motor.

**Concept:** Base compatible con configuración avanzada

**Authored coaching hints:**

- ¿Por qué menciona esta opción la configuración avanzada?
- ¿Qué repositorios aún necesitan habilitar análisis?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Seleciona-se Enabled with advanced setup allowed em uma configuração compatível. Qual comportamento é documentado?

1. Habilitar padrão onde CodeQL não executa ativamente, permitindo avançado ativo **[CORRECT]**

   A opção habilita uma base sem substituir análise avançada ativa.

2. Excluir imediatamente todos os workflows avançados

   Seu objetivo é permitir configuração avançada ativa.

3. Executar só verificação de segredos, nunca CodeQL

   O ajuste trata de CodeQL.

4. Tornar automaticamente compatíveis linguagens não suportadas

   Configuração não adiciona linguagens ao mecanismo.

**Concept:** Base compatível com configuração avançada

**Authored coaching hints:**

- Por que a opção menciona configuração avançada?
- Quais repositórios ainda precisam habilitar análise?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-015:275ce7b5cd91dda60ed2a449db9cd0cfc0c5d466b33853e99627196ece8a91f8 -->
## Question 210: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-015`

**Content revision:** `275ce7b5cd91dda60ed2a449db9cd0cfc0c5d466b33853e99627196ece8a91f8`

### English

A private-repository security configuration enables paid Code Security and Secret Protection features. What must administrators account for?

1. Only the security configuration's creation, assuming attachment has no cost implications

   Applying paid features can incur usage or licensing consequences.

2. Relevant entitlement, usage costs or licensing, and repository eligibility **[CORRECT]**

   Private/internal feature rollout can have licensing and usage implications.

3. An assumption that security-product entitlement makes all analysis compute free

   Product entitlement does not establish that every runner or Actions cost is included.

4. An assumption that public-repository availability covers all private use

   Public availability is not proof of private entitlement.

**Concept:** Budget-aware security enablement

**Authored coaching hints:**

- Which repository visibility and products are involved?
- Which costs concern product access versus execution resources?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración privada habilita funciones de pago de Code Security y Secret Protection. ¿Qué deben contemplar los administradores?

1. Solo crear la configuración, suponiendo que asociarla no cuesta

   Aplicar funciones de pago puede tener consecuencias de uso o licencias.

2. Derechos pertinentes, costos de uso o licencias y elegibilidad del repositorio **[CORRECT]**

   El despliegue privado o interno puede tener implicaciones de licencias y uso.

3. Suponer que el derecho de producto hace gratuito todo cómputo de análisis

   El derecho de producto no establece que estén incluidos todos los costos de runners o Actions.

4. Suponer que la disponibilidad pública cubre todo uso privado

   La disponibilidad pública no prueba derechos privados.

**Concept:** Habilitación de seguridad considerando presupuesto

**Authored coaching hints:**

- ¿Qué visibilidad y productos están implicados?
- ¿Qué costos corresponden al producto y cuáles a recursos de ejecución?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração privada habilita recursos pagos de Code Security e Secret Protection. O que administradores precisam considerar?

1. Só criar a configuração, supondo que associação não tem custo

   Aplicar recursos pagos pode ter consequências de uso ou licenças.

2. Direitos relevantes, custos de uso ou licenças e elegibilidade do repositório **[CORRECT]**

   Implantação privada ou interna pode ter implicações de licenciamento e uso.

3. Supor que direito ao produto torna todo processamento gratuito

   Direito ao produto não estabelece inclusão de todos os custos de runners ou Actions.

4. Supor que disponibilidade pública cobre todo uso privado

   Disponibilidade pública não prova direitos privados.

**Concept:** Habilitação de segurança com orçamento

**Authored coaching hints:**

- Quais visibilidade e produtos estão envolvidos?
- Quais custos são de produto versus recursos de execução?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-016:4eba82ad0aed1fa59812b6bf9b9bf2d72301f2fe1588db089e46e4f163ee0785 -->
## Question 211: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-016`

**Content revision:** `4eba82ad0aed1fa59812b6bf9b9bf2d72301f2fe1588db089e46e4f163ee0785`

### English

A configuration successfully enables CodeQL, but no runner can execute the analysis jobs. What should the administrator verify?

1. Only that the organization owns a Code Security entitlement

   Entitlement does not provide an available correctly configured runner by itself.

2. Only that the selected query suite exists

   A valid query selection does not schedule compute.

3. Runner availability, labels, permissions, and analysis execution status **[CORRECT]**

   An enabled workflow needs suitable execution infrastructure and authorization.

4. Only that CodeQL supports the source language

   Language support is necessary but does not resolve an unavailable runner.

**Concept:** Operational prerequisites for scanning

**Authored coaching hints:**

- What is the reported execution blocker?
- Which conditions can be valid while a job remains unable to start?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración habilita CodeQL correctamente, pero ningún runner puede ejecutar los trabajos. ¿Qué verificar?

1. Solo que la organización tenga derecho a Code Security

   El derecho no proporciona por sí solo un runner disponible y bien configurado.

2. Solo que exista la suite elegida

   Una selección válida de consultas no programa cómputo.

3. Disponibilidad de runners, etiquetas, permisos y estado de ejecución **[CORRECT]**

   Un flujo habilitado necesita infraestructura adecuada y autorización.

4. Solo que CodeQL admita el lenguaje fuente

   El lenguaje compatible no resuelve un runner no disponible.

**Concept:** Requisitos operativos del análisis

**Authored coaching hints:**

- ¿Cuál es el bloqueo de ejecución reportado?
- ¿Qué condiciones pueden ser válidas y aun así impedir iniciar un trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração habilita CodeQL corretamente, mas nenhum runner pode executar os jobs. O que verificar?

1. Só que a organização tenha direito ao Code Security

   Direito ao produto não fornece sozinho runner disponível e configurado.

2. Só que exista a suíte escolhida

   Consultas válidas não agendam processamento.

3. Disponibilidade de runners, rótulos, permissões e estado de execução **[CORRECT]**

   Um workflow habilitado precisa de infraestrutura adequada e autorização.

4. Só que CodeQL suporte a linguagem-fonte

   Linguagem compatível não resolve runner indisponível.

**Concept:** Pré-requisitos operacionais da varredura

**Authored coaching hints:**

- Qual é o bloqueio de execução relatado?
- Quais condições podem estar válidas e ainda impedir um job de iniciar?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-017:5ebc3f349cca5bbe01f929fed544feda51815c6da2d737035f5dae62fc983177 -->
## Question 212: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-017`

**Content revision:** `5ebc3f349cca5bbe01f929fed544feda51815c6da2d737035f5dae62fc983177`

### English

Organization policy requires dependency review across repositories rather than optional per-team use. What supported approach is relevant?

1. Publish an optional workflow template without requiring its use

   Optional templates do not ensure repository adoption or enforcement.

2. Enable Dependabot alerts and assume they block every dependency pull request

   Existing dependency alerts do not automatically implement this merge gate.

3. Enable dependency graphs without a required review check

   Inventory enablement does not itself create a required merge check.

4. Repository rulesets enforcing a required dependency-review workflow where supported **[CORRECT]**

   Rulesets can enforce an organization-wide required dependency-review workflow.

**Concept:** Organization-wide dependency enforcement

**Authored coaching hints:**

- Which candidate makes participation mandatory?
- Which mechanism connects analysis with merge eligibility?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una política exige revisión de dependencias en varios repositorios, no uso opcional por equipo. ¿Qué enfoque compatible corresponde?

1. Publicar una plantilla opcional sin exigir uso

   Las plantillas opcionales no garantizan adopción ni aplicación.

2. Habilitar alertas Dependabot y suponer que bloquean todo pull request de dependencias

   Las alertas existentes no implementan automáticamente este control de fusión.

3. Habilitar gráficos sin revisión obligatoria

   El inventario no crea por sí solo una comprobación obligatoria.

4. Conjuntos de reglas de repositorio que exijan un flujo de revisión de dependencias donde se admita **[CORRECT]**

   Los conjuntos de reglas pueden exigir un flujo organizacional de revisión.

**Concept:** Exigencia organizacional de dependencias

**Authored coaching hints:**

- ¿Qué alternativa hace obligatoria la participación?
- ¿Qué mecanismo conecta análisis con elegibilidad para fusionar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma política exige revisão de dependências nos repositórios, não uso opcional por equipe. Qual abordagem compatível atende?

1. Publicar modelo opcional sem exigir uso

   Modelos opcionais não garantem adoção nem imposição.

2. Habilitar alertas Dependabot e supor que bloqueiam todo pull request de dependências

   Alertas existentes não implementam automaticamente esse bloqueio de merge.

3. Habilitar grafos sem revisão obrigatória

   Inventário não cria por si só verificação obrigatória.

4. Conjuntos de regras de repositório exigindo workflow de revisão de dependências onde suportado **[CORRECT]**

   Conjuntos de regras podem exigir workflow organizacional de revisão.

**Concept:** Imposição organizacional de revisão de dependências

**Authored coaching hints:**

- Qual alternativa torna a participação obrigatória?
- Qual mecanismo conecta análise à elegibilidade de merge?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review>

<!-- certification-coach-question:ghas-administration-018:37aa52b289334916d0f46f05a875b76613d3101002a19dd2164124447bedd539 -->
## Question 213: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-018`

**Content revision:** `37aa52b289334916d0f46f05a875b76613d3101002a19dd2164124447bedd539`

### English

A team asks for a permanent exemption from secret push protection for a convenience script. What should the administrator assess first?

1. Whether a narrower privilege or workflow change can meet the need without skipping protection **[CORRECT]**

   Exemption skips the control, so less broad alternatives deserve evaluation.

2. Whether to extend the same exemption to all accounts maintained by the team

   Broader exemption should not be the starting assumption.

3. Whether a one-time successful run is sufficient justification for permanent exemption

   One successful run does not justify removing ongoing protection indefinitely.

4. Whether the script's private repository alone makes all secret checks unnecessary

   Private visibility does not eliminate the risk of exposed credentials.

**Concept:** Minimizing protection exemptions

**Authored coaching hints:**

- What authority does the script actually need?
- How does exception scope compare with the demonstrated requirement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo pide exención permanente de protección de inserciones para un script de conveniencia. ¿Qué evaluar primero?

1. Si privilegios más acotados o un cambio de flujo satisfacen la necesidad sin saltar protección **[CORRECT]**

   La exención salta el control; conviene evaluar alternativas más limitadas.

2. Si extender la misma exención a todas las cuentas del equipo

   No debe partirse de una exención más amplia.

3. Si una ejecución exitosa basta para justificar exención permanente

   Una ejecución exitosa no justifica quitar protección indefinidamente.

4. Si el repositorio privado vuelve innecesarias todas las comprobaciones

   La visibilidad privada no elimina riesgo de credenciales expuestas.

**Concept:** Minimización de exenciones de protección

**Authored coaching hints:**

- ¿Qué autoridad necesita realmente el script?
- ¿Cómo se compara el alcance de la excepción con la necesidad demostrada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe pede isenção permanente de proteção de push para um script de conveniência. O que avaliar primeiro?

1. Se privilégios mais restritos ou mudança de fluxo atendem sem pular proteção **[CORRECT]**

   Isenção pula o controle; alternativas mais restritas merecem avaliação.

2. Se estender a isenção a todas as contas da equipe

   Não se deve partir de isenção mais ampla.

3. Se uma execução bem-sucedida basta para justificar isenção permanente

   Uma execução bem-sucedida não justifica remover proteção indefinidamente.

4. Se o repositório privado torna toda verificação desnecessária

   Visibilidade privada não elimina risco de credenciais expostas.

**Concept:** Minimização de isenções de proteção

**Authored coaching hints:**

- Qual autoridade o script realmente precisa?
- Como o escopo da exceção compara com a necessidade demonstrada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-administration-019:e7a8dc2e245e53a2f44d1e454584e8b8247499041b1439b9a416741ac03a798e -->
## Question 214: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-019`

**Content revision:** `e7a8dc2e245e53a2f44d1e454584e8b8247499041b1439b9a416741ac03a798e`

### English

A configuration rollout reports mixed success across repository groups. How should automation report completion?

1. Declare success if the first repository changed

   The first success does not describe the entire rollout.

2. Record per-repository outcomes and investigate failures or ineligible cases **[CORRECT]**

   Granular outcomes preserve accurate coverage and actionable failure information.

3. Hide repositories that failed to apply the configuration

   Hiding failures overstates compliance.

4. Assume every response is transient and retry without limits

   Unbounded blind retries can repeat permanent failures or cause rate limiting.

**Concept:** Verifiable bulk administration

**Authored coaching hints:**

- Can a bulk operation partially succeed?
- Which repositories still need action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue de configuración reporta éxito mixto entre grupos. ¿Cómo debe informar la automatización la finalización?

1. Declarar éxito si cambió el primer repositorio

   El primer éxito no describe todo el despliegue.

2. Registrar resultados por repositorio e investigar fallos o casos no elegibles **[CORRECT]**

   Los resultados detallados preservan cobertura precisa e información accionable de fallos.

3. Ocultar los repositorios donde falló

   Ocultar fallos exagera cumplimiento.

4. Suponer toda respuesta transitoria y reintentar sin límites

   Los reintentos ciegos ilimitados repiten fallos permanentes o causan límites de tasa.

**Concept:** Administración masiva verificable

**Authored coaching hints:**

- ¿Una operación masiva puede tener éxito parcial?
- ¿Qué repositorios aún necesitan acción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação de configuração relata sucesso misto entre grupos. Como a automação deve informar conclusão?

1. Declarar sucesso se o primeiro repositório mudou

   O primeiro sucesso não descreve toda a implantação.

2. Registrar resultados por repositório e investigar falhas ou casos inelegíveis **[CORRECT]**

   Resultados detalhados preservam cobertura precisa e falhas acionáveis.

3. Ocultar repositórios onde falhou

   Ocultar falhas exagera conformidade.

4. Supor toda resposta transitória e repetir sem limites

   Repetições cegas ilimitadas repetem falhas permanentes ou causam limites de taxa.

**Concept:** Administração em massa verificável

**Authored coaching hints:**

- Uma operação em massa pode ter sucesso parcial?
- Quais repositórios ainda precisam de ação?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/code-security/configurations>

<!-- certification-coach-question:ghas-administration-020:c7ad27cb5baea9cd4aba237b6d7de67adc50180ae9ceb3fa5bc346ac4ddd6482 -->
## Question 215: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-020`

**Content revision:** `c7ad27cb5baea9cd4aba237b6d7de67adc50180ae9ceb3fa5bc346ac4ddd6482`

### English

An enforced configuration initially worked, but posture reporting later shows drift or detachment. What is the right response?

1. Assume enforcement can never be disrupted

   Documentation notes conditions that can break enforcement.

2. Remove the repository from inventory

   Removing inventory hides the gap.

3. Investigate configuration status and documented enforcement exceptions, then restore the intended baseline **[CORRECT]**

   Monitoring and reconciliation are necessary even for enforced settings.

4. Dismiss all alerts in the affected repository

   Alert dismissal does not repair feature settings.

**Concept:** Monitoring enforced configuration health

**Authored coaching hints:**

- What is the current attachment and enforcement state?
- Could a repository change have affected enforcement eligibility?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una configuración obligatoria funcionó, pero luego los informes muestran desviación o desasociación. ¿Cuál es la respuesta correcta?

1. Suponer que nunca puede interrumpirse su aplicación

   La documentación indica condiciones que pueden romper la aplicación obligatoria.

2. Quitar el repositorio del inventario

   Quitar inventario oculta la brecha.

3. Investigar estado y excepciones documentadas de aplicación, y restaurar la base prevista **[CORRECT]**

   Monitorear y reconciliar también es necesario para ajustes obligatorios.

4. Descartar todas las alertas del repositorio

   Descartar alertas no repara ajustes de funciones.

**Concept:** Monitoreo de salud de configuración obligatoria

**Authored coaching hints:**

- ¿Cuál es el estado actual de asociación y aplicación?
- ¿Un cambio de repositorio pudo afectar su elegibilidad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração imposta funcionou, mas relatórios depois mostram desvio ou desassociação. Qual é a resposta correta?

1. Supor que a imposição nunca pode ser interrompida

   A documentação aponta condições que quebram a imposição.

2. Remover o repositório do inventário

   Remover inventário oculta a lacuna.

3. Investigar estado e exceções documentadas de imposição, e restaurar a base pretendida **[CORRECT]**

   Monitorar e reconciliar também é necessário para ajustes impostos.

4. Descartar todos os alertas do repositório

   Descarte de alertas não corrige ajustes de recursos.

**Concept:** Monitoramento da saúde da configuração imposta

**Authored coaching hints:**

- Qual é o estado atual de associação e imposição?
- Uma mudança do repositório pode ter afetado sua elegibilidade?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-021:2600a17eb44b927633ba757be4e52923fc0d115169ae6523be192173f69f6622 -->
## Question 216: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-021`

**Content revision:** `2600a17eb44b927633ba757be4e52923fc0d115169ae6523be192173f69f6622`

### English

An administrator wants to leave repository-specific feature choices unchanged while applying other baseline settings. Which configuration option is appropriate for those features?

1. Disable them all

   Disabling overrides local choices.

2. Force-enable them all

   Enabling also overrides local choices.

3. Delete the repository's analysis history

   Deleting history is unrelated to preserving settings.

4. Keep existing settings rather than explicitly enable or disable **[CORRECT]**

   Keeping existing values preserves the repository-specific choice.

**Concept:** Selective security configuration

**Authored coaching hints:**

- Which values should the baseline own?
- What does a non-overriding setting communicate?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se quieren conservar decisiones de funciones propias de cada repositorio al aplicar otros ajustes base. ¿Qué opción corresponde para esas funciones?

1. Deshabilitarlas todas

   Deshabilitar anula decisiones locales.

2. Forzar habilitarlas todas

   Habilitar también las anula.

3. Eliminar el historial de análisis

   Eliminar historial no preserva ajustes.

4. Conservar los ajustes existentes en vez de habilitar o deshabilitar explícitamente **[CORRECT]**

   Conservar valores preserva la decisión del repositorio.

**Concept:** Configuración selectiva de seguridad

**Authored coaching hints:**

- ¿Qué valores debe controlar la base?
- ¿Qué comunica un ajuste que no anula valores?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quer-se preservar escolhas de recursos de cada repositório ao aplicar outros ajustes base. Qual opção usar nesses recursos?

1. Desabilitar todos

   Desabilitar sobrescreve escolhas locais.

2. Forçar habilitação de todos

   Habilitar também sobrescreve.

3. Excluir o histórico de análise

   Excluir histórico não preserva ajustes.

4. Manter ajustes existentes em vez de habilitar ou desabilitar explicitamente **[CORRECT]**

   Manter valores preserva a escolha do repositório.

**Concept:** Configuração seletiva de segurança

**Authored coaching hints:**

- Quais valores a base deve controlar?
- O que um ajuste que não sobrescreve comunica?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-022:65699e63684b8b24e5658faf6905fec555ca3d6afd0a0f5060cd6c8f6b13c504 -->
## Question 217: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-022`

**Content revision:** `65699e63684b8b24e5658faf6905fec555ca3d6afd0a0f5060cd6c8f6b13c504`

### English

The security team recommends a query suite for default setup across the organization. What should administrators understand about this decision?

1. It selects analysis coverage and precision characteristics, not dependency update policy **[CORRECT]**

   Query suites govern which CodeQL checks run and their trade-offs.

2. It changes every dependency license

   Query selection does not change licensing terms.

3. It automatically revokes all old tokens

   CodeQL settings do not revoke credentials.

4. It makes all future alerts human-approved

   Analysis findings still need review and disposition.

**Concept:** Organization query-suite governance

**Authored coaching hints:**

- Which engine uses the selected suite?
- What risk and workload trade-offs come from broader queries?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Seguridad recomienda una suite de consultas para configuración predeterminada de toda la organización. ¿Qué deben comprender los administradores?

1. Selecciona cobertura y precisión del análisis, no política de actualizaciones de dependencias **[CORRECT]**

   Las suites gobiernan qué comprobaciones CodeQL se ejecutan y sus contrapartidas.

2. Cambia toda licencia de dependencias

   Seleccionar consultas no cambia términos de licencia.

3. Revoca automáticamente todos los tokens antiguos

   Los ajustes CodeQL no revocan credenciales.

4. Hace que todas las alertas futuras estén aprobadas por humanos

   Los hallazgos aún requieren revisión y decisión.

**Concept:** Gobernanza organizacional de suites de consultas

**Authored coaching hints:**

- ¿Qué motor usa la suite?
- ¿Qué contrapartidas de riesgo y carga traen consultas más amplias?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Segurança recomenda uma suíte para configuração padrão em toda a organização. O que administradores devem entender?

1. Seleciona cobertura e precisão da análise, não política de atualizações de dependências **[CORRECT]**

   Suítes governam quais verificações CodeQL executam e suas contrapartidas.

2. Muda toda licença de dependência

   Selecionar consultas não muda termos de licença.

3. Revoga automaticamente todos os tokens antigos

   Ajustes CodeQL não revogam credenciais.

4. Torna todos os alertas futuros aprovados por humanos

   Resultados ainda exigem revisão e decisão.

**Concept:** Governança organizacional de suítes de consultas

**Authored coaching hints:**

- Qual mecanismo usa a suíte?
- Quais contrapartidas de risco e carga vêm de consultas mais amplas?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites>

<!-- certification-coach-question:ghas-administration-023:e80c55ee6d90bf616ce892c953b71880a6c3e7b3407b7b979f3b49e26ee8af8f -->
## Question 218: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-023`

**Content revision:** `e80c55ee6d90bf616ce892c953b71880a6c3e7b3407b7b979f3b49e26ee8af8f`

### English

A repository maintainer should remediate alerts but should not receive unnecessary organization-wide settings authority. Which access strategy best fits?

1. Grant organization owner to every maintainer

   Organization ownership exceeds this responsibility.

2. Use repository-scoped permissions sufficient for the required security tasks **[CORRECT]**

   Least privilege aligns access scope with actual remediation duties.

3. Publish all private alerts to avoid granting access

   Public disclosure is not an access-management solution.

4. Remove all security specialists from the organization

   Removing specialists does not provide maintainers appropriate permissions.

**Concept:** Repository-scoped least privilege

**Authored coaching hints:**

- Which repository and actions are needed?
- What authority is unrelated to this person's work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona mantenedora debe remediar alertas sin autoridad organizacional innecesaria. ¿Qué estrategia encaja?

1. Dar propiedad organizacional a todos los mantenedores

   La propiedad organizacional excede esta responsabilidad.

2. Usar permisos de repositorio suficientes para las tareas de seguridad requeridas **[CORRECT]**

   El privilegio mínimo alinea el acceso con las tareas reales.

3. Publicar todas las alertas privadas para evitar conceder acceso

   Divulgar públicamente no resuelve gestión de acceso.

4. Quitar a todos los especialistas de seguridad

   Quitar especialistas no da permisos adecuados a mantenedores.

**Concept:** Privilegio mínimo a nivel de repositorio

**Authored coaching hints:**

- ¿Qué repositorio y acciones se necesitan?
- ¿Qué autoridad no se relaciona con el trabajo de esta persona?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa mantenedora deve remediar alertas sem autoridade organizacional desnecessária. Qual estratégia atende?

1. Dar propriedade organizacional a todos os mantenedores

   Propriedade organizacional excede a responsabilidade.

2. Usar permissões de repositório suficientes para as tarefas necessárias **[CORRECT]**

   Privilégio mínimo alinha acesso às tarefas reais.

3. Publicar todos os alertas privados para evitar conceder acesso

   Divulgação pública não resolve gestão de acesso.

4. Remover todos os especialistas de segurança

   Remover especialistas não fornece permissões adequadas.

**Concept:** Privilégio mínimo no repositório

**Authored coaching hints:**

- Qual repositório e quais ações são necessários?
- Qual autoridade não se relaciona ao trabalho da pessoa?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization>

<!-- certification-coach-question:ghas-administration-024:60283a5b0a22beb1b0ad4edb2866fe6acb2667f7dd6c3e8ac4d46b25aba7f987 -->
## Question 219: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-024`

**Content revision:** `60283a5b0a22beb1b0ad4edb2866fe6acb2667f7dd6c3e8ac4d46b25aba7f987`

### English

A security integration's token can read alerts but cannot update them. What is the appropriate administration response?

1. Disable all alert access checks

   Authorization protects sensitive security operations.

2. Embed an organization-owner credential in the integration's logs

   Logging powerful credentials creates a serious exposure.

3. Check the endpoint's documented permission requirements and grant only the necessary scope **[CORRECT]**

   Read and write operations can require different permissions.

4. Interpret permission failure as an empty alert list

   A denied request is not evidence that no alerts exist.

**Concept:** Security API permission troubleshooting

**Authored coaching hints:**

- Which specific operation failed?
- Does read authority imply authority to change state?

<details>
<summary>Español — same answer key and option order</summary>

### Español

El token de una integración puede leer alertas, pero no actualizarlas. ¿Cuál es la respuesta administrativa adecuada?

1. Desactivar toda comprobación de acceso

   La autorización protege operaciones sensibles.

2. Incrustar credenciales de propietario en los registros de la integración

   Registrar credenciales poderosas crea exposición grave.

3. Consultar los permisos documentados del endpoint y otorgar solo el alcance necesario **[CORRECT]**

   Leer y escribir pueden requerir permisos distintos.

4. Interpretar el fallo de permisos como lista vacía

   Una solicitud denegada no prueba ausencia de alertas.

**Concept:** Diagnóstico de permisos de API de seguridad

**Authored coaching hints:**

- ¿Qué operación específica falló?
- ¿Poder leer implica poder cambiar estados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O token de uma integração lê alertas, mas não os atualiza. Qual é a resposta administrativa adequada?

1. Desativar toda verificação de acesso

   Autorização protege operações sensíveis.

2. Incluir credencial de proprietário nos logs da integração

   Registrar credenciais poderosas cria exposição grave.

3. Consultar permissões documentadas do endpoint e conceder só o escopo necessário **[CORRECT]**

   Ler e escrever podem exigir permissões distintas.

4. Interpretar falha de permissão como lista vazia

   Solicitação negada não prova ausência de alertas.

**Concept:** Diagnóstico de permissões da API de segurança

**Authored coaching hints:**

- Qual operação específica falhou?
- Poder ler implica poder mudar estado?

</details>

**Official supporting source:** <https://docs.github.com/en/rest/code-scanning/code-scanning>

<!-- certification-coach-question:ghas-administration-025:f7d591d2b1f6e4721aec840b33b81954fd9631d96bc1985d5b697faa73fa8ab9 -->
## Question 220: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-025`

**Content revision:** `f7d591d2b1f6e4721aec840b33b81954fd9631d96bc1985d5b697faa73fa8ab9`

### English

A security overview report is used to compare organizations. What scope limitation must the report owner communicate?

1. It includes all local unpushed branches

   Unpushed local content is not visible to GitHub.

2. It always includes repositories the viewer cannot access

   Overview respects permissions.

3. It measures production exploitation directly

   Detection metrics are not direct proof of exploitation.

4. Its views concern default-branch information within the viewer's permitted scope **[CORRECT]**

   Documented overview scope is default branches and accessible repositories.

**Concept:** Security overview reporting scope

**Authored coaching hints:**

- Which branches and repositories are visible?
- What should a reader not infer from a missing row?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se usa un informe de Security overview para comparar organizaciones. ¿Qué limitación debe comunicar su responsable?

1. Incluye todas las ramas locales sin enviar

   GitHub no ve contenido local sin enviar.

2. Siempre incluye repositorios inaccesibles al usuario

   La vista respeta permisos.

3. Mide directamente explotación en producción

   Las métricas de detección no prueban directamente explotación.

4. Sus vistas tratan información de la rama predeterminada dentro del alcance permitido al usuario **[CORRECT]**

   El alcance documentado son ramas predeterminadas y repositorios accesibles.

**Concept:** Alcance de informes de Security overview

**Authored coaching hints:**

- ¿Qué ramas y repositorios son visibles?
- ¿Qué no debe inferirse de una fila faltante?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um relatório de Security overview compara organizações. Qual limitação de escopo comunicar?

1. Inclui todas as branches locais sem push

   Conteúdo local sem push não é visível ao GitHub.

2. Sempre inclui repositórios inacessíveis ao usuário

   A visão respeita permissões.

3. Mede diretamente exploração em produção

   Métricas de detecção não provam diretamente exploração.

4. As visualizações tratam de informações da branch padrão dentro do escopo permitido ao usuário **[CORRECT]**

   O escopo documentado são branches padrão e repositórios acessíveis.

**Concept:** Escopo dos relatórios de Security overview

**Authored coaching hints:**

- Quais branches e repositórios são visíveis?
- O que não se deve inferir de uma linha ausente?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview>

<!-- certification-coach-question:ghas-administration-026:3c2dd8b9d9a0a56309e22e6d40c7f0619becf35b8f451af6af6735f2b4ccaf89 -->
## Question 221: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-026`

**Content revision:** `3c2dd8b9d9a0a56309e22e6d40c7f0619becf35b8f451af6af6735f2b4ccaf89`

### English

After acquiring a company, an enterprise inventories new organizations' security settings. Which rollout approach best preserves meaningful differences while improving consistency?

1. Use reviewed configurations for groups with different requirements and verify coverage **[CORRECT]**

   Configurations can reflect different security needs while providing reusable baselines.

2. Assume every organization has identical licensing and runner setup

   Entitlement and infrastructure can vary.

3. Copy one workflow everywhere without testing

   Untested copying can break specialized projects.

4. Treat an inventory spreadsheet as completed enforcement

   An inventory records state but does not apply controls.

**Concept:** Differentiated baseline governance

**Authored coaching hints:**

- Which differences are legitimate operational requirements?
- How can a baseline be standardized without assuming identical projects?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras una adquisición, una empresa inventaría ajustes de seguridad de nuevas organizaciones. ¿Qué despliegue preserva diferencias relevantes y mejora coherencia?

1. Usar configuraciones revisadas para grupos con requisitos distintos y verificar cobertura **[CORRECT]**

   Las configuraciones reflejan necesidades distintas con bases reutilizables.

2. Suponer idénticas licencias y configuración de runners

   Los derechos e infraestructura pueden variar.

3. Copiar un flujo a todas partes sin probar

   Copiar sin probar puede romper proyectos especializados.

4. Tratar una hoja de inventario como aplicación completada de controles

   Un inventario registra estado, no aplica controles.

**Concept:** Gobernanza de bases diferenciadas

**Authored coaching hints:**

- ¿Qué diferencias son requisitos operativos legítimos?
- ¿Cómo estandarizar una base sin suponer proyectos idénticos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após adquirir uma empresa, inventariam-se ajustes de segurança das novas organizações. Qual implantação preserva diferenças relevantes e melhora consistência?

1. Usar configurações revisadas para grupos com requisitos distintos e verificar cobertura **[CORRECT]**

   Configurações refletem necessidades diferentes com bases reutilizáveis.

2. Supor licenças e runners idênticos

   Direitos e infraestrutura podem variar.

3. Copiar um workflow em todos sem testar

   Copiar sem testar quebra projetos especializados.

4. Tratar planilha de inventário como imposição concluída

   Inventário registra estado, não aplica controles.

**Concept:** Governança de bases diferenciadas

**Authored coaching hints:**

- Quais diferenças são requisitos operacionais legítimos?
- Como padronizar uma base sem supor projetos idênticos?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-027:345a96b89cf5ea839df4086b421e18a8eda55b907bb64e21559cfd92f7d8f30a -->
## Question 222: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-027`

**Content revision:** `345a96b89cf5ea839df4086b421e18a8eda55b907bb64e21559cfd92f7d8f30a`

### English

A security-manager team contains people who no longer perform security duties. What should an access review prioritize?

1. Keep every member because alerts are historical

   Historical alerts do not justify indefinite broad access.

2. Remove unnecessary role assignments and team memberships while preserving current responsibilities **[CORRECT]**

   Periodic access review should align privileges with current duties.

3. Make the team an enterprise owner

   Increasing authority worsens unnecessary access.

4. Disable scanning so the role becomes unnecessary

   Removing detection is not a proper substitute for access management.

**Concept:** Security-role lifecycle review

**Authored coaching hints:**

- Who needs organization-wide security visibility now?
- How does team membership affect inherited authority?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo de administradores de seguridad contiene personas que ya no tienen esas tareas. ¿Qué debe priorizar la revisión de acceso?

1. Conservar a todos porque las alertas son históricas

   Las alertas históricas no justifican acceso amplio indefinido.

2. Quitar asignaciones y pertenencias innecesarias preservando responsabilidades actuales **[CORRECT]**

   Las revisiones periódicas deben alinear privilegios y tareas actuales.

3. Hacer al equipo propietario empresarial

   Aumentar autoridad empeora el acceso innecesario.

4. Desactivar análisis para volver innecesario el rol

   Quitar detección no sustituye gestionar acceso.

**Concept:** Revisión del ciclo de roles de seguridad

**Authored coaching hints:**

- ¿Quién necesita ahora visibilidad organizacional de seguridad?
- ¿Cómo afecta la pertenencia al equipo a la autoridad heredada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe de gerentes de segurança contém pessoas sem essas funções atuais. O que priorizar na revisão de acesso?

1. Manter todos porque os alertas são históricos

   Alertas históricos não justificam acesso amplo indefinido.

2. Remover atribuições e participações desnecessárias preservando responsabilidades atuais **[CORRECT]**

   Revisões periódicas devem alinhar privilégios às tarefas atuais.

3. Tornar a equipe proprietária empresarial

   Aumentar autoridade agrava acesso desnecessário.

4. Desativar análise para tornar a função desnecessária

   Remover detecção não substitui gestão de acesso.

**Concept:** Revisão do ciclo de funções de segurança

**Authored coaching hints:**

- Quem precisa agora de visibilidade organizacional de segurança?
- Como participação na equipe afeta autoridade herdada?

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization>

<!-- certification-coach-question:ghas-administration-028:1f1ce1516e141f0aa469fd2f2aa7f2621ffe9ee7e381c4ded2906c176ceb1c45 -->
## Question 223: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-028`

**Content revision:** `1f1ce1516e141f0aa469fd2f2aa7f2621ffe9ee7e381c4ded2906c176ceb1c45`

### English

A new organizational security configuration has been created but not applied to existing repositories. What should administrators conclude?

1. Creating it automatically remediated existing vulnerabilities

   Configuration creation is not vulnerability remediation.

2. Its name alone enforces settings everywhere

   Naming a definition does not attach it to every repository.

3. A configuration definition still needs appropriate application and verification **[CORRECT]**

   Defining, applying, and verifying a baseline are separate responsibilities.

4. All prior repository settings were necessarily deleted

   Creation alone does not establish repository changes.

**Concept:** Definition versus application

**Authored coaching hints:**

- Which repositories are actually attached?
- What evidence proves the intended settings took effect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se creó una configuración organizacional nueva, pero no se aplicó a repositorios existentes. ¿Qué concluir?

1. Crearla remedió automáticamente vulnerabilidades existentes

   Crear configuración no remedia vulnerabilidades.

2. Su nombre por sí solo impone ajustes en todas partes

   Nombrarla no la asocia a todos los repositorios.

3. La definición aún necesita aplicación y verificación adecuadas **[CORRECT]**

   Definir, aplicar y verificar una base son responsabilidades separadas.

4. Necesariamente se borraron todos los ajustes anteriores

   Crear no establece cambios de repositorio por sí solo.

**Concept:** Definición frente a aplicación

**Authored coaching hints:**

- ¿Qué repositorios están realmente asociados?
- ¿Qué evidencia prueba que surtieron efecto los ajustes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma configuração organizacional foi criada, mas não aplicada aos repositórios existentes. O que concluir?

1. Criá-la remediou automaticamente vulnerabilidades existentes

   Criar configuração não remedia vulnerabilidades.

2. Só seu nome impõe ajustes em todo lugar

   Nomear não associa a todos os repositórios.

3. A definição ainda precisa de aplicação e verificação adequadas **[CORRECT]**

   Definir, aplicar e verificar uma base são responsabilidades separadas.

4. Todos os ajustes anteriores necessariamente foram excluídos

   Criar não estabelece mudanças de repositório por si só.

**Concept:** Definição versus aplicação

**Authored coaching hints:**

- Quais repositórios estão realmente associados?
- Qual evidência prova que os ajustes surtiram efeito?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>

<!-- certification-coach-question:ghas-administration-029:ea4ba6a8e12a96f0ce8c96c9a412d2b50c01b57ca806fbc51976cc95564982d5 -->
## Question 224: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-029`

**Content revision:** `ea4ba6a8e12a96f0ce8c96c9a412d2b50c01b57ca806fbc51976cc95564982d5`

### English

An enterprise wants every security exception to be attributable to an authorized decision maker. Which governance design best supports this?

1. Share one broad bypass identity among all contributors

   Shared identities weaken attribution.

2. Exempt every automation account permanently

   Blanket exemptions remove review without a demonstrated need.

3. Hide exception reasons from reviewers

   Concealed reasons undermine accountability.

4. Use scoped bypass authority, recorded reasons, and audit review **[CORRECT]**

   Scoped authority and auditable evidence make exception decisions reviewable.

**Concept:** Auditable exception authority

**Authored coaching hints:**

- Can the organization tell who made the decision?
- What evidence explains why protection was bypassed?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa quiere atribuir toda excepción a un decisor autorizado. ¿Qué diseño de gobernanza lo apoya mejor?

1. Compartir una identidad amplia de omisión entre todos

   Las identidades compartidas debilitan atribución.

2. Eximir permanentemente toda cuenta automática

   Las exenciones generales eliminan revisión sin necesidad demostrada.

3. Ocultar motivos de excepción a revisores

   Ocultar motivos perjudica responsabilidad.

4. Usar autoridad acotada de omisión, motivos registrados y revisión de auditoría **[CORRECT]**

   La autoridad acotada y evidencia auditable permiten revisar decisiones.

**Concept:** Autoridad auditable para excepciones

**Authored coaching hints:**

- ¿Puede saberse quién decidió?
- ¿Qué evidencia explica por qué se omitió la protección?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa quer atribuir toda exceção a um decisor autorizado. Qual governança apoia melhor isso?

1. Compartilhar uma identidade ampla de bypass entre todos

   Identidades compartilhadas enfraquecem atribuição.

2. Isentar permanentemente toda conta de automação

   Isenções gerais removem revisão sem necessidade demonstrada.

3. Ocultar motivos de exceção dos revisores

   Ocultar motivos prejudica responsabilização.

4. Usar autoridade restrita de bypass, motivos registrados e revisão de auditoria **[CORRECT]**

   Autoridade restrita e evidência auditável permitem revisar decisões.

**Concept:** Autoridade auditável de exceções

**Authored coaching hints:**

- É possível saber quem decidiu?
- Qual evidência explica por que a proteção foi ignorada?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/push-protection>

<!-- certification-coach-question:ghas-administration-030:2112ec1267194bde6879db2b00c8758dd45d4390f20df05ea1d151e8c24388de -->
## Question 225: GitHub Security suites administration

- [ ] Human-reviewed: this question and supporting content, covering all three languages.

**Question ID:** `ghas-administration-030`

**Content revision:** `2112ec1267194bde6879db2b00c8758dd45d4390f20df05ea1d151e8c24388de`

### English

A security rollout is complete by configuration count, but several repositories have never produced successful analysis. What is the best final acceptance criterion?

1. Verify effective feature coverage, successful execution, and an actionable alert-response path **[CORRECT]**

   Acceptance should cover operational detection and response rather than configured intent alone.

2. Count only how many configurations exist

   Definition counts do not prove application or execution.

3. Count only how many enablement emails were sent

   Messages do not demonstrate controls are working.

4. Assume the settings page is sufficient proof of operation

   A setting can be enabled while analysis fails.

**Concept:** Operational rollout acceptance

**Authored coaching hints:**

- What evidence shows the control works end to end?
- Who acts on a valid finding after a successful scan?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue se considera completo por cantidad de configuraciones, pero varios repositorios nunca produjeron análisis exitosos. ¿Cuál es el mejor criterio final de aceptación?

1. Verificar cobertura efectiva, ejecución exitosa y una vía accionable de respuesta a alertas **[CORRECT]**

   La aceptación debe cubrir detección y respuesta operativas, no solo intención configurada.

2. Contar solo cuántas configuraciones existen

   Los recuentos de definiciones no prueban aplicación ni ejecución.

3. Contar solo correos de habilitación enviados

   Los mensajes no demuestran controles operativos.

4. Suponer que la página de ajustes prueba funcionamiento

   Un ajuste puede estar habilitado mientras falla el análisis.

**Concept:** Aceptación operativa de despliegue

**Authored coaching hints:**

- ¿Qué evidencia muestra que funciona de extremo a extremo?
- ¿Quién actúa ante un hallazgo válido tras un análisis exitoso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação é considerada completa pela quantidade de configurações, mas vários repositórios nunca produziram análise bem-sucedida. Qual é o melhor critério final de aceitação?

1. Verificar cobertura efetiva, execução bem-sucedida e caminho acionável de resposta a alertas **[CORRECT]**

   A aceitação deve cobrir detecção e resposta operacionais, não só intenção configurada.

2. Contar só quantas configurações existem

   Contagens de definições não provam aplicação nem execução.

3. Contar só e-mails de habilitação enviados

   Mensagens não demonstram controles funcionando.

4. Supor que a página de ajustes prova operação

   Um ajuste pode estar habilitado enquanto a análise falha.

**Concept:** Aceitação operacional da implantação

**Authored coaching hints:**

- Qual evidência mostra que o controle funciona de ponta a ponta?
- Quem age sobre um resultado válido após varredura bem-sucedida?

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration>
