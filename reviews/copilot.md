<!-- certification-coach-review:copilot:2 -->
# GitHub Copilot: human review packet

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

<!-- certification-coach-question:copilot-001:85e1a7a81dd9453d46beeca54d6ddb5b55b51f526e51bfd20d67b20ed639e37f -->
## Question 1: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-001`

**Content revision:** `85e1a7a81dd9453d46beeca54d6ddb5b55b51f526e51bfd20d67b20ed639e37f`

**en review revision:** `c47d7e18b8824a0dbf8bcfe3003fc8dd64e49001a83f58e73c2b29bf05bbccf4`
**es review revision:** `3182ed0f48d77e2f7a587b393171a39e918a41115450b8107c1261ef68b3aa1a`
**pt-BR review revision:** `2bd90dbf2885ee29c0f874cd555d8018430e3a24a5bd53332f98d5ad6ee3b091`

### English

What is the main reason to test Copilot-generated code against independently defined expected results?

1. To confirm which training data influenced the model

   Tests do not establish which training examples influenced a model.

2. To verify behavior against requirements **[CORRECT]**

   Independent expected results test whether implementation behavior meets the requirement.

3. To confirm code follows the preferred style guide

   Formatting checks do not determine functional correctness.

4. To confirm the prompt was read literally

   Literal prompt interpretation is not evidence that the result works.

**Concept:** Independent validation

**Authored coaching hints:**

- What defines correct behavior independently of the generated implementation?
- Which check could reveal a plausible but incorrect result?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué conviene probar código generado por Copilot con resultados esperados definidos de forma independiente?

1. Para conocer la procedencia de los datos de entrenamiento del modelo

   Las pruebas no establecen qué ejemplos de entrenamiento influyeron en el modelo.

2. Para verificar el comportamiento frente a los requisitos **[CORRECT]**

   Los resultados esperados independientes permiten comprobar si el comportamiento cumple el requisito.

3. Para confirmar que el código sigue la guía de estilo preferida

   Las comprobaciones de formato no determinan la corrección funcional.

4. Para confirmar que el prompt se interpretó literalmente

   Interpretar literalmente una solicitud no demuestra que el resultado funcione.

**Concept:** Validación independiente

**Authored coaching hints:**

- ¿Qué define el comportamiento correcto independientemente de la implementación generada?
- ¿Qué comprobación podría revelar un resultado plausible pero incorrecto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que testar código gerado pelo Copilot com resultados esperados definidos de forma independente?

1. Para identificar a origem dos dados de treinamento do modelo

   Testes não estabelecem quais exemplos de treinamento influenciaram o modelo.

2. Para verificar o comportamento em relação aos requisitos **[CORRECT]**

   Resultados esperados independentes verificam se o comportamento atende ao requisito.

3. Para confirmar que o código segue o guia de estilo preferido

   Verificações de formatação não determinam a correção funcional.

4. Para confirmar que o prompt foi interpretado literalmente

   Interpretar literalmente um pedido não prova que o resultado funciona.

**Concept:** Validação independente

**Authored coaching hints:**

- O que define o comportamento correto independentemente da implementação gerada?
- Qual verificação poderia revelar um resultado plausível, mas incorreto?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-002:32bab757914dcd32804563c0166b51fbe3421e6dd66c307a8d8b83a20f11e10d -->
## Question 2: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-002`

**Content revision:** `32bab757914dcd32804563c0166b51fbe3421e6dd66c307a8d8b83a20f11e10d`

**en review revision:** `b073ca8f348071676bf80d91fe89fc4817c2a8512111456cb45c8a089d2a6da4`
**es review revision:** `52ad97d9c4c84e57c367eba85c926cd964bbda8a6d361fd19b036c684d8cf23d`
**pt-BR review revision:** `c6cb6d2069da24d63773ece3474eaab3975745417cb9eddc884c473e45a4a812`

### English

A generated example calls a method absent from the installed package version. What should the developer verify first?

1. The method appears in generated comments and examples

   A comment can repeat an invented or outdated API name.

2. Another model repeats the same method name

   Repeated model output is not independent confirmation.

3. The package's version-specific API documentation **[CORRECT]**

   Versioned package documentation can establish whether the API exists for the dependency in use.

4. A placeholder method makes the code compile

   A placeholder can conceal the missing behavior rather than verify the API.

**Concept:** Hallucinated API names

**Authored coaching hints:**

- What source documents the installed dependency's actual interface?
- Does repetition establish that a method exists?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un ejemplo generado llama a un método que no existe en la versión instalada del paquete. ¿Qué debería verificar primero la persona desarrolladora?

1. El método aparece en comentarios y ejemplos generados

   Un comentario puede repetir un nombre inventado o desactualizado.

2. Otro modelo repite el mismo nombre del método

   Que un modelo repita la respuesta no es una confirmación independiente.

3. La documentación de la API para la versión del paquete **[CORRECT]**

   La documentación de la versión permite comprobar si la API existe para la dependencia utilizada.

4. Un método provisional permite compilar el código

   Un método provisional puede ocultar la funcionalidad ausente en vez de verificar la API.

**Concept:** Nombres de API alucinados

**Authored coaching hints:**

- ¿Qué fuente documenta la interfaz real de la dependencia instalada?
- ¿Repetir un nombre demuestra que el método existe?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um exemplo gerado chama um método ausente na versão instalada do pacote. O que o desenvolvedor deve verificar primeiro?

1. O método aparece em comentários e exemplos gerados

   Um comentário pode repetir um nome inventado ou desatualizado.

2. Outro modelo repete o mesmo nome de método

   A repetição por outro modelo não é confirmação independente.

3. A documentação da API específica da versão do pacote **[CORRECT]**

   A documentação da versão permite verificar se a API existe para a dependência usada.

4. Um método provisório permite compilar o código

   Um método provisório pode ocultar o comportamento ausente em vez de verificar a API.

**Concept:** Nomes de API alucinados

**Authored coaching hints:**

- Qual fonte documenta a interface real da dependência instalada?
- Repetir um nome comprova que o método existe?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-003:a7a5724b9df0c03cc2d025e71889cc73da2deaa0de75fa217ba13c4f522c77d0 -->
## Question 3: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-003`

**Content revision:** `a7a5724b9df0c03cc2d025e71889cc73da2deaa0de75fa217ba13c4f522c77d0`

**en review revision:** `4c6fc5363ebd926e94a995ad46fb2e5fca9bdd5975b0b0f06238a7cb983bc003`
**es review revision:** `f863cd7566b02ec9d4ed11ca5a0d9ec49da5cabdd2e74b7ef1bfb00106823688`
**pt-BR review revision:** `a1e4a0bbddd744b15d08378778d9713e8860b6a5a7c31f79ce529382cd76adb0`

### English

Which review technique best checks a generated function that parses untrusted request data?

1. Check variable names against the style guide

   Naming consistency does not show whether untrusted data is handled safely.

2. Ask Copilot to certify the function

   A generated assurance is not a security assessment.

3. Check whether the function has a comment

   Comments do not establish runtime security properties.

4. Trace untrusted data through the function **[CORRECT]**

   Tracing data flow helps reveal unsafe handling at trust boundaries.

**Concept:** Security review of generated code

**Authored coaching hints:**

- Where does untrusted data enter and where can it affect behavior?
- Which review considers data flow rather than presentation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué técnica de revisión comprueba mejor una función generada que analiza datos de solicitudes no confiables?

1. Comparar nombres con la guía de estilo

   La coherencia de nombres no muestra si los datos no confiables se manejan de forma segura.

2. Pedir a Copilot que certifique la función

   Una garantía generada no constituye una evaluación de seguridad.

3. Comprobar si la función tiene un comentario

   Los comentarios no demuestran propiedades de seguridad en tiempo de ejecución.

4. Seguir los datos no confiables por la función **[CORRECT]**

   Seguir el flujo de datos ayuda a detectar un manejo inseguro en los límites de confianza.

**Concept:** Revisión de seguridad del código generado

**Authored coaching hints:**

- ¿Dónde entra el dato no confiable y dónde puede afectar el comportamiento?
- ¿Qué revisión considera el flujo de datos en vez de la presentación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual técnica de revisão verifica melhor uma função gerada que analisa dados de solicitação não confiáveis?

1. Comparar nomes com o guia de estilo

   Consistência de nomes não mostra se dados não confiáveis são tratados com segurança.

2. Pedir ao Copilot que certifique a função

   Uma garantia gerada não é uma avaliação de segurança.

3. Verificar se a função tem um comentário

   Comentários não comprovam propriedades de segurança em tempo de execução.

4. Rastrear dados não confiáveis pela função **[CORRECT]**

   Rastrear o fluxo de dados ajuda a revelar tratamento inseguro nos limites de confiança.

**Concept:** Revisão de segurança do código gerado

**Authored coaching hints:**

- Onde o dado não confiável entra e onde pode afetar o comportamento?
- Qual revisão considera o fluxo de dados em vez da apresentação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-004:9e80170afb20b5cc36fd93e1fef83f508e30e6e8b0d1f73abd5f415ec63cf5b1 -->
## Question 4: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-004`

**Content revision:** `9e80170afb20b5cc36fd93e1fef83f508e30e6e8b0d1f73abd5f415ec63cf5b1`

**en review revision:** `1cbdaf827663dac200f64bdf9999b2cb834506a315c109071a04804ea7162600`
**es review revision:** `157ce804bbf680d61b7312cc152683f743af9726781bafdb78ec8bbc37a84b41`
**pt-BR review revision:** `07bac46b6032ccb386461dc6d3b2e09e7da8ce6467c84122c7a3feb368d1ae52`

### English

Which responsible AI principle is most directly concerned with whether a system disadvantages a group of people?

1. Fairness **[CORRECT]**

   Fairness concerns how system outcomes affect different people and groups.

2. Transparency

   Transparency concerns communicating how a system works and its limits.

3. Reliability

   Reliability concerns consistent operation under expected conditions.

4. Accountability

   Accountability concerns responsibility for decisions and outcomes.

**Concept:** Fairness

**Authored coaching hints:**

- Which principle focuses on distribution of benefits and harms?
- Separate outcome equity from disclosure and operational ownership.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué principio de IA responsable se ocupa más directamente de si un sistema perjudica a un grupo de personas?

1. Equidad **[CORRECT]**

   La equidad se ocupa de cómo los resultados afectan a distintas personas y grupos.

2. Transparencia

   La transparencia se ocupa de comunicar el funcionamiento y los límites del sistema.

3. Confiabilidad

   La confiabilidad se ocupa de la operación consistente en condiciones previstas.

4. Rendición de cuentas

   La rendición de cuentas se ocupa de la responsabilidad por decisiones y resultados.

**Concept:** Equidad

**Authored coaching hints:**

- ¿Qué principio se centra en cómo se distribuyen beneficios y daños?
- Distingue la equidad de resultados de la divulgación y la responsabilidad operativa.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual princípio de IA responsável trata mais diretamente de um sistema prejudicar um grupo de pessoas?

1. Equidade **[CORRECT]**

   Equidade trata de como os resultados afetam diferentes pessoas e grupos.

2. Transparência

   Transparência trata de comunicar como o sistema funciona e seus limites.

3. Confiabilidade

   Confiabilidade trata da operação consistente nas condições esperadas.

4. Responsabilização

   Responsabilização trata da responsabilidade por decisões e resultados.

**Concept:** Equidade

**Authored coaching hints:**

- Qual princípio se concentra na distribuição de benefícios e danos?
- Diferencie equidade de resultados de divulgação e responsabilidade operacional.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-005:debb3e6c6755b37d85e5d4b2111d2886bfc02bd8844d91f46766ee3bf1e55316 -->
## Question 5: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-005`

**Content revision:** `debb3e6c6755b37d85e5d4b2111d2886bfc02bd8844d91f46766ee3bf1e55316`

**en review revision:** `13d9f19ad32d2c65500ba99cd612b2bdf607f3390e0431746538ee1ca6f8da06`
**es review revision:** `20032b4e70f90e0b0d6b20127c6dede6369838e45f77a42ce012a29f11625497`
**pt-BR review revision:** `d3e06ca1a2a68f44dc884bad51f6a6d38a80054f2bad0dd78d2776c4fde79894`

### English

Which design goal is central to the inclusiveness principle when building an AI-assisted user interface?

1. Optimize only for the most common device size

   A common screen size does not represent every user's needs.

2. Support varied abilities and access needs **[CORRECT]**

   Inclusive design considers varied abilities and ways of interacting with a product.

3. Require every user to interact with a mouse

   Mouse-only interaction can exclude keyboard and assistive-technology users.

4. Use the same visual theme on every page

   Visual consistency alone does not ensure access.

**Concept:** Inclusiveness

**Authored coaching hints:**

- Which users might be unable to complete the flow with the proposed interaction?
- Think beyond visual appearance and a single input method.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué objetivo de diseño es central para la inclusión al crear una interfaz con ayuda de IA?

1. Optimizar solo para el tamaño de dispositivo más común

   El tamaño de pantalla más común no representa las necesidades de todas las personas.

2. Admitir distintas capacidades y necesidades de acceso **[CORRECT]**

   El diseño inclusivo considera distintas capacidades y formas de interactuar con un producto.

3. Exigir que todas las personas usen un mouse

   La interacción solo con mouse puede excluir a quienes usan teclado o tecnologías de asistencia.

4. Usar el mismo tema visual en cada página

   La coherencia visual por sí sola no garantiza el acceso.

**Concept:** Inclusión

**Authored coaching hints:**

- ¿Qué personas podrían no completar el flujo con la interacción propuesta?
- Considera más que la apariencia visual y un solo método de entrada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual objetivo de design é central para a inclusão ao criar uma interface com ajuda de IA?

1. Otimizar somente para o tamanho de dispositivo mais comum

   O tamanho de tela mais comum não representa as necessidades de todas as pessoas.

2. Atender diferentes habilidades e necessidades de acesso **[CORRECT]**

   O design inclusivo considera diferentes habilidades e formas de interagir com um produto.

3. Exigir que todas as pessoas usem um mouse

   A interação somente com mouse pode excluir quem usa teclado ou tecnologia assistiva.

4. Usar o mesmo tema visual em todas as páginas

   Consistência visual, por si só, não garante acesso.

**Concept:** Inclusão

**Authored coaching hints:**

- Quais pessoas talvez não consigam concluir o fluxo com a interação proposta?
- Considere mais que a aparência visual e um único método de entrada.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-006:2cb6c5c4063daf1046ed4e5adf9e3292d762032cc6a20ae66a66090763c2e066 -->
## Question 6: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-006`

**Content revision:** `2cb6c5c4063daf1046ed4e5adf9e3292d762032cc6a20ae66a66090763c2e066`

**en review revision:** `6437069596bb9b7e822e47d7c064035a3d2337681a756f39c1b77331970926ec`
**es review revision:** `19f5cf84aa57f5e6398d822dc123d57db47b9df2ed2661d166c063ece7c96b05`
**pt-BR review revision:** `064942322a2310f1d03c0313e7db8d5273c5cc84d887f3f4df38c0274824d6b1`

### English

Who remains accountable for approving and operating a change written with Copilot assistance?

1. The model that produced the suggestion

   A model cannot assume human release or system ownership.

2. Only the person who typed the prompt

   Responsibility includes review and operation, not only prompting.

3. The responsible team and organization **[CORRECT]**

   AI assistance does not transfer organizational or operational responsibility.

4. The package maintainer named in the code

   A dependency maintainer is not thereby responsible for this system's release.

**Concept:** Accountability

**Authored coaching hints:**

- Who has authority over the system and its release?
- Does the tool that suggested code own the production impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Quién sigue siendo responsable de aprobar y operar un cambio escrito con ayuda de Copilot?

1. El modelo que produjo la sugerencia

   Un modelo no puede asumir la responsabilidad humana de publicación o propiedad del sistema.

2. Solo quien escribió la solicitud

   La responsabilidad incluye revisión y operación, no solo la solicitud.

3. El equipo y la organización responsables **[CORRECT]**

   La ayuda de IA no transfiere la responsabilidad organizativa ni operativa.

4. La persona mantenedora del paquete nombrado en el código

   La persona mantenedora de una dependencia no es responsable por ello de publicar este sistema.

**Concept:** Rendición de cuentas

**Authored coaching hints:**

- ¿Quién tiene autoridad sobre el sistema y su publicación?
- ¿La herramienta que sugirió código asume el impacto en producción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quem continua responsável por aprovar e operar uma alteração escrita com ajuda do Copilot?

1. O modelo que produziu a sugestão

   Um modelo não pode assumir a responsabilidade humana pela publicação ou propriedade do sistema.

2. Somente quem escreveu o prompt

   A responsabilidade inclui revisão e operação, não apenas o prompt.

3. A equipe e a organização responsáveis **[CORRECT]**

   A ajuda de IA não transfere a responsabilidade organizacional nem operacional.

4. O mantenedor do pacote mencionado no código

   O mantenedor de uma dependência não se torna responsável pela publicação deste sistema.

**Concept:** Responsabilização

**Authored coaching hints:**

- Quem tem autoridade sobre o sistema e sua publicação?
- A ferramenta que sugeriu o código assume o impacto em produção?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-007:3b3ced4ad8833612d140132d2729e4646c28820289e05174c94d0dd175402270 -->
## Question 7: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-007`

**Content revision:** `3b3ced4ad8833612d140132d2729e4646c28820289e05174c94d0dd175402270`

**en review revision:** `6a9db3f02d00cf3978cd352f6e7db735b9db382234aa4703fd91a2fc688e022f`
**es review revision:** `fa1443e4254701ffcf68c6dd662289c8d9f8bef9035aaaf049d627cc92c4b7f3`
**pt-BR review revision:** `4873f565cc37a5b4a0df030bc877562e319490be7fd0605afe509d920986c9c3`

### English

What is the purpose of transparency when a team uses AI-assisted development?

1. Promise that outputs are always correct

   Disclosure cannot guarantee correctness.

2. Replace review with a transcript

   Prompt records do not replace review of the resulting change.

3. Publish every conversation

   Transparency does not require exposing confidential conversations.

4. Make use and limits understandable **[CORRECT]**

   Transparency supports informed understanding of how AI is used and what it can and cannot do.

**Concept:** Transparency

**Authored coaching hints:**

- What should affected reviewers or users be able to understand?
- Does disclosure remove the need to examine the result?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el propósito de la transparencia cuando un equipo usa desarrollo asistido por IA?

1. Prometer que las salidas siempre son correctas

   La divulgación no garantiza la corrección.

2. Reemplazar la revisión por una transcripción

   Los registros de solicitudes no reemplazan la revisión del cambio resultante.

3. Publicar todas las conversaciones

   La transparencia no exige exponer conversaciones confidenciales.

4. Hacer comprensibles el uso y sus límites **[CORRECT]**

   La transparencia permite entender cómo se usa la IA y qué puede y no puede hacer.

**Concept:** Transparencia

**Authored coaching hints:**

- ¿Qué deberían poder entender quienes revisan o reciben el sistema?
- ¿Divulgar el uso elimina la necesidad de examinar el resultado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o propósito da transparência quando uma equipe usa desenvolvimento assistido por IA?

1. Prometer que as saídas sempre são corretas

   A divulgação não garante correção.

2. Substituir a revisão por uma transcrição

   Registros de prompts não substituem a revisão da alteração resultante.

3. Publicar todas as conversas

   Transparência não exige expor conversas confidenciais.

4. Tornar compreensíveis o uso e seus limites **[CORRECT]**

   Transparência permite entender como a IA é usada e o que pode ou não fazer.

**Concept:** Transparência

**Authored coaching hints:**

- O que revisores ou usuários afetados devem conseguir entender?
- Divulgar o uso elimina a necessidade de examinar o resultado?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-008:b8113f5ba5ddc3fa708088226b3b7735815c7df15e145ff16417d6a4e84d5095 -->
## Question 8: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-008`

**Content revision:** `b8113f5ba5ddc3fa708088226b3b7735815c7df15e145ff16417d6a4e84d5095`

**en review revision:** `d6f0876e220b336c07d54ca862929cd60ba9e98ed98bcacc3a455930b7cda7fb`
**es review revision:** `b8f372d773e656352020d38932a34c7b3129602169f82fcec7886c81e686291f`
**pt-BR review revision:** `4bc62a4a270930e83fb787be1a29b7cd27c3e302d70365de58e02a8c1f61a13d`

### English

A generated shell command would recursively remove a directory. Which check is most important before execution?

1. Inspect the target; test within a limited scope **[CORRECT]**

   Inspecting the command's actual target and limiting its scope reduces destructive mistakes.

2. Approve the patch without inspecting its changes

   An explanation may not accurately describe a command's effects.

3. Run broad tests directly against production

   A broad working directory increases the potential impact.

4. Rely only on the agent's completion summary

   Permanent blanket approval removes a useful review checkpoint.

**Concept:** Safe use of generated commands

**Authored coaching hints:**

- What resources could the command affect if its assumptions are wrong?
- Can the behavior be tested on disposable data first?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un comando de shell generado eliminaría un directorio de forma recursiva. ¿Qué comprobación es más importante antes de ejecutarlo?

1. Inspeccionar el destino y probar en un ámbito limitado **[CORRECT]**

   Inspeccionar el destino real del comando y limitar su ámbito reduce errores destructivos.

2. Aprobar el cambio generado sin inspeccionar sus modificaciones

   La explicación puede no describir con precisión los efectos del comando.

3. Ejecutar pruebas amplias directamente en producción

   Un directorio de trabajo amplio aumenta el impacto potencial.

4. Confiar únicamente en el resumen de finalización del agente

   La aprobación general y permanente elimina un punto útil de revisión.

**Concept:** Uso seguro de comandos generados

**Authored coaching hints:**

- ¿Qué recursos podría afectar el comando si sus supuestos son incorrectos?
- ¿Se puede probar primero con datos desechables?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um comando de shell gerado removeria um diretório recursivamente. Qual verificação é mais importante antes da execução?

1. Inspecionar o destino e testar em escopo limitado **[CORRECT]**

   Inspecionar o destino real do comando e limitar o escopo reduz erros destrutivos.

2. Aprovar a alteração gerada sem inspecionar suas mudanças

   A explicação pode não descrever com precisão os efeitos do comando.

3. Executar testes amplos diretamente em produção

   Um diretório de trabalho amplo aumenta o impacto potencial.

4. Confiar apenas no resumo de conclusão do agente

   A aprovação geral e permanente elimina um ponto útil de revisão.

**Concept:** Uso seguro de comandos gerados

**Authored coaching hints:**

- Quais recursos o comando poderia afetar se as suposições estiverem erradas?
- É possível testá-lo primeiro com dados descartáveis?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-009:7d276df6a2cb6be75189273bffc2bf4fca8e5cc137d646b809b3f57a9ffa32d5 -->
## Question 9: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-009`

**Content revision:** `7d276df6a2cb6be75189273bffc2bf4fca8e5cc137d646b809b3f57a9ffa32d5`

**en review revision:** `33654c7bf40d62d32d70450769a7348ff8e7596cb6fc7b9cb2293c4d275cbf75`
**es review revision:** `aa745526f40ff90a8fe820316477a40e75c5f8c29c1a3493e598402a4090cc19`
**pt-BR review revision:** `4afae1ee2c4b92239e93264043e0abb65bcf5675516b9a91dac551573a6d6fcc`

### English

A developer wants help debugging a log parser, but a sample log contains an access token and customer details. What should be shared?

1. A full production log

   A full production log includes unnecessary sensitive information.

2. A minimal, sanitized example **[CORRECT]**

   A sanitized minimal example preserves useful structure while reducing exposure.

3. A partially masked access token

   Partially masking a token can leave it usable or identifying.

4. A screenshot with customer data

   A screenshot does not remove sensitive content.

**Concept:** Data minimization

**Authored coaching hints:**

- Which fields are necessary to reproduce the parsing behavior?
- Can the example retain structure without retaining identifiers or secrets?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona desarrolladora quiere ayuda para depurar un analizador de registros, pero un ejemplo contiene un token de acceso y datos de clientes. ¿Qué debería compartir?

1. Un registro completo de producción

   Un registro de producción completo incluye información sensible innecesaria.

2. Un ejemplo mínimo y saneado **[CORRECT]**

   Un ejemplo mínimo saneado conserva la estructura útil y reduce la exposición.

3. Un token de acceso parcialmente oculto

   Ocultar parcialmente un token puede dejarlo utilizable o identificable.

4. Una captura con datos de clientes

   Una captura de pantalla no elimina el contenido sensible.

**Concept:** Minimización de datos

**Authored coaching hints:**

- ¿Qué campos se necesitan para reproducir el comportamiento del análisis?
- ¿Puede el ejemplo conservar la estructura sin identificadores ni secretos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor quer ajuda para depurar um analisador de logs, mas uma amostra contém um token de acesso e dados de clientes. O que deve compartilhar?

1. Um log completo de produção

   Um log completo de produção inclui informações confidenciais desnecessárias.

2. Um exemplo mínimo e sanitizado **[CORRECT]**

   Um exemplo mínimo sanitizado preserva a estrutura útil e reduz a exposição.

3. Um token de acesso parcialmente oculto

   Mascarar parcialmente um token pode deixá-lo utilizável ou identificável.

4. Uma captura com dados de clientes

   Uma captura de tela não remove o conteúdo confidencial.

**Concept:** Minimização de dados

**Authored coaching hints:**

- Quais campos são necessários para reproduzir o comportamento da análise?
- O exemplo pode preservar a estrutura sem identificadores ou segredos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-010:c27c52a828258b701cab7bab822043ce2e64878ba219b1455c53cdf722e1e32b -->
## Question 10: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-010`

**Content revision:** `c27c52a828258b701cab7bab822043ce2e64878ba219b1455c53cdf722e1e32b`

**en review revision:** `6de6dc9e51bfaa6bafca005f7786095df99a4171fb60130857eff2762cb23694`
**es review revision:** `590a006043689c29b68fbff4a41a6ba0cb8c24e0d069e1e4f34a5b7ac36812c2`
**pt-BR review revision:** `e1fcc3eaa6e854ac1388e970783d591f15d5a792902e4ee195a1974ef357eb1a`

### English

Which validation approach is appropriate for generated code that calculates medication doses?

1. Check only whether the generated code parses

   Syntax checks do not validate clinical meaning or edge cases.

2. Ask the model to verify the arithmetic result

   Self-confirmation by the model is not independent evidence.

3. Use expert review and risk-focused tests **[CORRECT]**

   High-impact calculations need independent domain review and risk-focused validation.

4. Test only the most common input case

   Rare cases can carry serious consequences and need appropriate coverage.

**Concept:** Risk-proportionate validation

**Authored coaching hints:**

- What is the consequence of a plausible calculation error?
- Which domain expertise and boundary conditions are relevant?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué validación es apropiada para código generado que calcula dosis de medicamentos?

1. Comprobar únicamente si el código generado se analiza

   La sintaxis no valida el significado clínico ni los casos límite.

2. Pedir al modelo que verifique el resultado aritmético

   La autoconfirmación del modelo no es evidencia independiente.

3. Usar revisión experta y pruebas centradas en riesgos **[CORRECT]**

   Los cálculos de alto impacto requieren revisión independiente y validación centrada en riesgos.

4. Probar solo el caso de entrada más habitual

   Los casos poco frecuentes pueden tener consecuencias graves y requieren cobertura adecuada.

**Concept:** Validación proporcional al riesgo

**Authored coaching hints:**

- ¿Qué consecuencia tendría un error de cálculo plausible?
- ¿Qué experiencia de dominio y condiciones límite son pertinentes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual validação é apropriada para código gerado que calcula doses de medicamentos?

1. Verificar apenas se o código gerado é analisado

   Verificação de sintaxe não valida o significado clínico nem casos-limite.

2. Pedir ao modelo que confira o resultado aritmético

   A autoconfirmação do modelo não é evidência independente.

3. Usar revisão especializada e testes focados em riscos **[CORRECT]**

   Cálculos de alto impacto exigem revisão independente e validação focada em riscos.

4. Testar somente o caso de entrada mais comum

   Casos raros podem ter consequências graves e exigem cobertura adequada.

**Concept:** Validação proporcional ao risco

**Authored coaching hints:**

- Qual seria a consequência de um erro de cálculo plausível?
- Quais conhecimentos de domínio e condições-limite são relevantes?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-011:c693e6238971e9c81003fe0f219c6ea5f26ac73edbf140e3b7729f4fbe36fc56 -->
## Question 11: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-011`

**Content revision:** `c693e6238971e9c81003fe0f219c6ea5f26ac73edbf140e3b7729f4fbe36fc56`

**en review revision:** `cb2e58e36c937221d3201040e86df03f74c9c7ac6fafb21e44a57770525c0b64`
**es review revision:** `5bd51afd618fec0adbbdbb7ebdccc2bdcd930b0e5da4e73eaebc07b06d4610b9`
**pt-BR review revision:** `fc0e8c9c04ff0303b185be7d1196b0cfc719d6ca4639659b4e02a6e7c0eb63a7`

### English

How should synthetic survey records generated with Copilot be used?

1. Mix synthetic records without labels

   Unlabeled synthetic records can distort analysis.

2. Use realistic names and dates

   Realistic identifiers increase the risk of confusion or privacy concerns.

3. Report a larger generated survey

   Generated records do not increase the number of people surveyed.

4. Label and separate synthetic records **[CORRECT]**

   Clear labeling and separation prevent synthetic examples from being mistaken for observed data.

**Concept:** Responsible synthetic data

**Authored coaching hints:**

- How will readers distinguish simulated examples from observations?
- Can synthetic data be kept out of the evidence used for conclusions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo se deben usar los registros de encuesta sintéticos generados con Copilot?

1. Mezclar registros sintéticos sin etiquetas

   Los registros sintéticos sin marcar pueden distorsionar el análisis.

2. Usar nombres y fechas realistas

   Los identificadores realistas aumentan la confusión y los riesgos de privacidad.

3. Informar una encuesta generada más amplia

   Los registros generados no aumentan el número de personas encuestadas.

4. Etiquetar y separar los registros sintéticos **[CORRECT]**

   Etiquetar y separar claramente evita confundir ejemplos sintéticos con datos observados.

**Concept:** Datos sintéticos responsables

**Authored coaching hints:**

- ¿Cómo distinguirán los lectores los ejemplos simulados de las observaciones?
- ¿Se pueden excluir los datos sintéticos de la evidencia usada para conclusiones?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como registros de pesquisa sintéticos gerados pelo Copilot devem ser usados?

1. Misturar registros sintéticos sem rótulos

   Registros sintéticos sem identificação podem distorcer a análise.

2. Usar nomes e datas realistas

   Identificadores realistas aumentam o risco de confusão ou privacidade.

3. Relatar uma pesquisa sintética maior

   Registros gerados não aumentam o número de pessoas pesquisadas.

4. Identificar e separar os registros sintéticos **[CORRECT]**

   Identificação e separação claras evitam confundir exemplos sintéticos com dados observados.

**Concept:** Dados sintéticos responsáveis

**Authored coaching hints:**

- Como os leitores distinguirão exemplos simulados de observações?
- É possível manter dados sintéticos fora das evidências usadas nas conclusões?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-012:604dcb392d29d2921fb12dbed690884e52ba0c744aa5fdae13dae0e9c84baad5 -->
## Question 12: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-012`

**Content revision:** `604dcb392d29d2921fb12dbed690884e52ba0c744aa5fdae13dae0e9c84baad5`

**en review revision:** `56547aefc6daf0db3d708054a5ac0a0df12170baee05b32aead21265f86cd169`
**es review revision:** `1e3df185c6452b726b8a288b91632b1fe2b49e303b98cf4a3e0e4e6f6e6bc566`
**pt-BR review revision:** `f0efd1ecd74f1c1b9227ddaf2054262e1e3e8b913890ca2eb6af35382854b8ff`

### English

What should guide the choice of a password-storage design suggested by Copilot?

1. Use a vetted password-hashing method **[CORRECT]**

   Established password-hashing practices and current security review are preferable to an unvalidated design.

2. Design a custom password-hashing algorithm

   A detailed explanation does not establish cryptographic soundness.

3. Store the secret key beside the password database

   Storing the key beside the data weakens the protection and encryption is not password hashing.

4. Choose the shortest implementation available

   Code brevity is not a security criterion.

**Concept:** Cryptography review

**Authored coaching hints:**

- What property is needed when storing passwords for verification?
- Is the proposed algorithm reviewed and appropriate for this purpose?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debería guiar la elección de un diseño de almacenamiento de contraseñas sugerido por Copilot?

1. Usar un método probado de hash de contraseñas **[CORRECT]**

   Las prácticas establecidas de hash de contraseñas y una revisión actual son preferibles a un diseño no validado.

2. Diseñar un algoritmo personalizado para el hash de contraseñas

   Una explicación detallada no demuestra solidez criptográfica.

3. Guardar la clave secreta junto a la base de datos

   Guardar la clave junto a los datos debilita la protección y el cifrado no equivale al hash de contraseñas.

4. Elegir la implementación disponible más breve

   La brevedad del código no es un criterio de seguridad.

**Concept:** Revisión de criptografía

**Authored coaching hints:**

- ¿Qué propiedad se necesita al guardar contraseñas para verificarlas?
- ¿El algoritmo propuesto está revisado y es adecuado para este propósito?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que deve orientar a escolha de um projeto de armazenamento de senhas sugerido pelo Copilot?

1. Usar um método validado de hash de senhas **[CORRECT]**

   Práticas estabelecidas de hash de senhas e revisão atual são preferíveis a um projeto não validado.

2. Projetar um algoritmo personalizado de hash de senhas

   Uma explicação detalhada não comprova solidez criptográfica.

3. Guardar a chave secreta junto ao banco de senhas

   Armazenar a chave junto aos dados enfraquece a proteção e criptografia não é hash de senhas.

4. Escolher a implementação disponível mais curta

   Brevidade do código não é critério de segurança.

**Concept:** Revisão de criptografia

**Authored coaching hints:**

- Qual propriedade é necessária ao armazenar senhas para verificá-las?
- O algoritmo proposto foi revisado e é adequado para essa finalidade?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-013:8b74bac40f7f2bfdb2528fd57408567b34fbd18b41854e6be6ab67443c12d0ba -->
## Question 13: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-013`

**Content revision:** `8b74bac40f7f2bfdb2528fd57408567b34fbd18b41854e6be6ab67443c12d0ba`

**en review revision:** `a6ee0830dadcd1fd1ad142730f5d07d09077bd0a2561ba58ecc25c23cc2eaf36`
**es review revision:** `9f6df8affbdc3f6592809ffeec97498dad7867ff58671ba2518ab49f38555ee8`
**pt-BR review revision:** `f137c815c7ed288d99fe43b8a7fc37e9d09bdaa32b03299576d6527552bd3139`

### English

How should a claim that generated code is thread-safe be verified?

1. The confidence expressed in the explanation

   Confidence in generated text is not proof.

2. Concurrency analysis and tests of shared-state access **[CORRECT]**

   Shared-state safety depends on actual concurrent access and synchronization behavior.

3. The number of comments describing the cache

   Comments do not enforce safe concurrent access.

4. Whether the function names use consistent capitalization

   Naming style does not establish thread safety.

**Concept:** Explanations versus evidence

**Authored coaching hints:**

- What happens when multiple operations access the same state?
- Which evidence tests the underlying behavior rather than the claim?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo se debe verificar una afirmación de que el código generado es seguro para concurrencia?

1. La confianza expresada en la explicación

   La confianza expresada en texto generado no es una prueba.

2. Análisis de concurrencia y pruebas del acceso al estado compartido **[CORRECT]**

   La seguridad del estado compartido depende del acceso concurrente y la sincronización reales.

3. La cantidad de comentarios que describen la caché

   Los comentarios no imponen acceso concurrente seguro.

4. La coherencia de mayúsculas en los nombres de funciones

   El estilo de nombres no demuestra seguridad entre hilos.

**Concept:** Explicaciones y evidencia

**Authored coaching hints:**

- ¿Qué ocurre cuando varias operaciones acceden al mismo estado?
- ¿Qué evidencia prueba el comportamiento subyacente en vez de la afirmación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como uma afirmação de que o código gerado é seguro para concorrência deve ser verificada?

1. A confiança expressa na explicação

   Confiança em texto gerado não é prova.

2. Análise de concorrência e testes de acesso ao estado compartilhado **[CORRECT]**

   A segurança do estado compartilhado depende do acesso concorrente e da sincronização reais.

3. A quantidade de comentários que descrevem o cache

   Comentários não impõem acesso concorrente seguro.

4. A consistência de maiúsculas nos nomes das funções

   Estilo de nomes não comprova segurança entre threads.

**Concept:** Explicações e evidências

**Authored coaching hints:**

- O que ocorre quando várias operações acessam o mesmo estado?
- Qual evidência testa o comportamento subjacente em vez da afirmação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-014:e5bcb0a73b812f34b6ef427ce494a67a6465548957302ab9aae2c402ac921573 -->
## Question 14: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-014`

**Content revision:** `e5bcb0a73b812f34b6ef427ce494a67a6465548957302ab9aae2c402ac921573`

**en review revision:** `71e7d03022c0706db09a656def5508a05265d03fa63b034daf68388f144064f2`
**es review revision:** `dc0c3a9d08a130766f425fb1a08f433dcda1ab02182a38348fa04b0eb729a949`
**pt-BR review revision:** `9d1ff339ebcf5d49ecf2b1c1983fb2ead9f7514150b70b3edb506798a5d37196`

### English

Which action supports responsible use of a generated algorithm?

1. Assume the algorithm works for every group

   Syntactic validity does not establish suitability or maintainability.

2. Rely on the generated explanation alone

   The model cannot take operational ownership.

3. Understand its assumptions and failure modes **[CORRECT]**

   Understanding assumptions and failure modes is necessary for responsible maintenance.

4. Test only the easiest input cases

   Tests help detect behavior changes and should not be removed for that reason.

**Concept:** Human understanding and oversight

**Authored coaching hints:**

- What must the team know to diagnose or safely change the algorithm?
- Can compilation substitute for understanding its failure modes?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué acción favorece el uso responsable de un algoritmo generado?

1. Suponer que el algoritmo funciona para todos los grupos

   La validez sintáctica no demuestra idoneidad ni mantenibilidad.

2. Confiar únicamente en la explicación generada

   El modelo no puede asumir la responsabilidad operativa.

3. Entender sus supuestos y modos de fallo **[CORRECT]**

   Comprender los supuestos y modos de fallo es necesario para un mantenimiento responsable.

4. Probar solo los casos de entrada más sencillos

   Las pruebas ayudan a detectar cambios de comportamiento y no deben eliminarse por ese motivo.

**Concept:** Comprensión y supervisión humana

**Authored coaching hints:**

- ¿Qué necesita saber el equipo para diagnosticar o cambiar el algoritmo de forma segura?
- ¿Compilar sustituye la comprensión de sus modos de fallo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ação favorece o uso responsável de um algoritmo gerado?

1. Supor que o algoritmo funciona para todos os grupos

   Validade sintática não comprova adequação nem capacidade de manutenção.

2. Confiar apenas na explicação gerada

   O modelo não pode assumir responsabilidade operacional.

3. Entender suas suposições e modos de falha **[CORRECT]**

   Entender suposições e modos de falha é necessário para manutenção responsável.

4. Testar somente os casos de entrada mais simples

   Testes ajudam a detectar mudanças de comportamento e não devem ser removidos por esse motivo.

**Concept:** Compreensão e supervisão humana

**Authored coaching hints:**

- O que a equipe precisa saber para diagnosticar ou alterar o algoritmo com segurança?
- Compilar substitui entender os modos de falha?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-015:8f79052986b26e44cb403d4387f836c4f5f096343b5b68210469d11c6f196706 -->
## Question 15: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-015`

**Content revision:** `8f79052986b26e44cb403d4387f836c4f5f096343b5b68210469d11c6f196706`

**en review revision:** `988fe20bbe53b648458ade374e14478b99899f6b6769a81cf77de6cb669f5d3c`
**es review revision:** `6901d6b10f4515c1270dc555f5b219be856c12a820c5910b00bcbdda5d3e9eb3`
**pt-BR review revision:** `9b28cd4fed6f244a6b5e1a109cb9b032fd3aaaedde8c3dc1b749bc9009ceca0c`

### English

Which checks help assess an unfamiliar Copilot-recommended dependency?

1. Install a similarly named package

   Look-alike names can refer to unrelated or malicious packages.

2. Trust the version number alone

   A version number does not verify a package's legitimacy or suitability.

3. Copy its metadata without checking

   Uninspected metadata does not establish package trust.

4. Verify its identity and maintenance **[CORRECT]**

   Checking identity and maintenance helps assess dependency and supply-chain risk.

**Concept:** Dependency recommendation review

**Authored coaching hints:**

- What establishes that the package is the intended and maintained project?
- Could a plausible name or version be misleading?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comprobaciones ayudan a evaluar una dependencia desconocida recomendada por Copilot?

1. Instalar un paquete de nombre parecido

   Los nombres similares pueden corresponder a paquetes ajenos o maliciosos.

2. Confiar solo en el número de versión

   Un número de versión no verifica la legitimidad ni la idoneidad del paquete.

3. Copiar los metadatos sin verificarlos

   Los metadatos sin revisar no establecen la confianza en el paquete.

4. Verificar su identidad y mantenimiento **[CORRECT]**

   Verificar identidad y mantenimiento ayuda a evaluar riesgos de dependencia y cadena de suministro.

**Concept:** Revisión de dependencias sugeridas

**Authored coaching hints:**

- ¿Qué confirma que el paquete es el proyecto previsto y que se mantiene?
- ¿Podrían ser engañosos un nombre o una versión plausibles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais verificações ajudam a avaliar uma dependência desconhecida recomendada pelo Copilot?

1. Instalar um pacote de nome semelhante

   Nomes parecidos podem pertencer a pacotes não relacionados ou maliciosos.

2. Confiar apenas no número da versão

   Um número de versão não verifica legitimidade nem adequação do pacote.

3. Copiar os metadados sem verificá-los

   Metadados não inspecionados não estabelecem confiança no pacote.

4. Verificar sua identidade e manutenção **[CORRECT]**

   Verificar identidade e manutenção ajuda a avaliar riscos de dependência e cadeia de suprimentos.

**Concept:** Revisão de dependências sugeridas

**Authored coaching hints:**

- O que confirma que o pacote é o projeto pretendido e está mantido?
- Um nome ou uma versão plausíveis podem induzir ao erro?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-016:e6d574f7c0685e30de7b5f7ecc117823afbafb546f4313aa833e8c1b99ef5430 -->
## Question 16: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-016`

**Content revision:** `e6d574f7c0685e30de7b5f7ecc117823afbafb546f4313aa833e8c1b99ef5430`

**en review revision:** `99f2148ca0c76ad735d5329a5b57f9bd0e01034618e61b5e5e0c89d0f5590812`
**es review revision:** `9ff5147a2e1cec4a6aa58b978a8ac370627886ac71052407eec7cfc7e453aa99`
**pt-BR review revision:** `6adacbebc134547953d49e2d3a09894c638258a8bccf9c1619c43d081458639b`

### English

How should an agent treat instructions embedded in untrusted repository content?

1. As untrusted content, not as authorization to disclose data **[CORRECT]**

   Repository text does not authorize disclosure or override the user's intended task.

2. As a higher-priority instruction because it is in the repository

   A file's location does not make its instructions trustworthy or higher priority.

3. As consent from every credential owner

   A repository file cannot provide consent for credential owners.

4. As proof that uploading credentials is required for the task

   The instruction is unrelated to normal task authorization and creates a disclosure risk.

**Concept:** Untrusted instructions in context

**Authored coaching hints:**

- Does the content come from a trusted instruction source?
- What authorization would be needed to send secrets externally?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debe tratar un agente las instrucciones insertadas en contenido no confiable del repositorio?

1. Como contenido no confiable, no como autorización para divulgar datos **[CORRECT]**

   El texto del repositorio no autoriza divulgar datos ni reemplaza la tarea solicitada.

2. Como instrucción de mayor prioridad por estar en el repositorio

   La ubicación de un archivo no vuelve confiables ni prioritarias sus instrucciones.

3. Como consentimiento de todas las personas propietarias de las credenciales

   Un archivo del repositorio no puede dar consentimiento por quienes poseen las credenciales.

4. Como prueba de que la tarea requiere cargar las credenciales

   La instrucción no es una autorización normal para la tarea y crea riesgo de divulgación.

**Concept:** Instrucciones no confiables en el contexto

**Authored coaching hints:**

- ¿El contenido proviene de una fuente de instrucciones confiable?
- ¿Qué autorización se necesitaría para enviar secretos a otro lugar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um agente deve tratar instruções inseridas em conteúdo não confiável do repositório?

1. Como conteúdo não confiável, não como autorização para divulgar dados **[CORRECT]**

   O texto do repositório não autoriza divulgação nem substitui a tarefa solicitada.

2. Como instrução de prioridade maior por estar no repositório

   A localização de um arquivo não torna suas instruções confiáveis ou prioritárias.

3. Como consentimento de todos os proprietários das credenciais

   Um arquivo do repositório não pode consentir em nome de quem possui as credenciais.

4. Como prova de que a tarefa exige enviar as credenciais

   A instrução não é autorização normal para a tarefa e cria risco de divulgação.

**Concept:** Instruções não confiáveis no contexto

**Authored coaching hints:**

- O conteúdo vem de uma fonte confiável de instruções?
- Que autorização seria necessária para enviar segredos para fora?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-017:d59ed44824315e56b6d45b8b2b708e4ce6b3783c54439dc0655a99d7ceffeab9 -->
## Question 17: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-017`

**Content revision:** `d59ed44824315e56b6d45b8b2b708e4ce6b3783c54439dc0655a99d7ceffeab9`

**en review revision:** `3e48f1bc5c13df7df63a8c00783883295026a468f92db7cffa6d31311a8ca53b`
**es review revision:** `7069a45d3d9dacd422a90cc510c728071487d2e3ed0adaa6706ed5273e60ce4d`
**pt-BR review revision:** `e4461d131b4938ce19cb2f31c47b0d92960eea6a73abc2242a8945a612ad460b`

### English

Which statement best describes the role of Copilot in a pull request review process?

1. Let the tool replace human approval of the change

   Whether human approval is required is a repository or organizational process decision.

2. Assist review; people assess the findings **[CORRECT]**

   AI review can assist, but reviewers remain responsible for assessing the patch and findings.

3. Treat a clean automated review as proof of safety

   A review can miss defects and is not proof of their absence.

4. Accept every finding without verifying it

   Comments should be verified against the actual code and context.

**Concept:** Complementary code review

**Authored coaching hints:**

- Is the review output an aid or a proof of correctness?
- Who applies the repository's approval requirements?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación describe mejor el papel de Copilot en una revisión de pull request?

1. Permitir que la herramienta sustituya la aprobación humana del cambio

   La exigencia de aprobación humana depende del proceso del repositorio o la organización.

2. Ayudar en la revisión; las personas evalúan hallazgos **[CORRECT]**

   La revisión con IA puede ayudar, pero las personas siguen evaluando el parche y los hallazgos.

3. Tomar una revisión automatizada sin alertas como prueba de seguridad

   Una revisión puede pasar por alto defectos y no demuestra que estén ausentes.

4. Aceptar todos los hallazgos sin verificarlos

   Los comentarios deben comprobarse frente al código y su contexto.

**Concept:** Revisión de código complementaria

**Authored coaching hints:**

- ¿El resultado de la revisión es una ayuda o una prueba de corrección?
- ¿Quién aplica los requisitos de aprobación del repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação descreve melhor o papel do Copilot na revisão de pull request?

1. Permitir que a ferramenta substitua a aprovação humana da alteração

   A exigência de aprovação humana depende do processo do repositório ou da organização.

2. Apoiar a revisão; pessoas avaliam os achados **[CORRECT]**

   A revisão por IA pode ajudar, mas as pessoas continuam avaliando o patch e os achados.

3. Tratar uma revisão automatizada sem alertas como prova de segurança

   Uma revisão pode deixar passar defeitos e não prova que estejam ausentes.

4. Aceitar todos os achados sem verificá-los

   Os comentários devem ser verificados em relação ao código e ao contexto.

**Concept:** Revisão de código complementar

**Authored coaching hints:**

- O resultado da revisão é auxílio ou prova de correção?
- Quem aplica os requisitos de aprovação do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-018:55a558448781e4183301a1a59ece202c6b3821c8b2d006ef417ca37008f02baf -->
## Question 18: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-018`

**Content revision:** `55a558448781e4183301a1a59ece202c6b3821c8b2d006ef417ca37008f02baf`

**en review revision:** `0a64aa43565a90534748c5d1c50a8429fa749bfe0093fbf7a73fe923702d1eba`
**es review revision:** `1157e4a39a868baef61a9ee32f64f2544bad6eb0870905626b52ba3c8a78c980`
**pt-BR review revision:** `a95c83f9e285a23e3804e265ae37177563aaeebdf60c1f3fd8b750f6f2043b67`

### English

Which evidence supports adopting a suggested performance rewrite?

1. Prefer the shorter implementation without workload tests

   Fewer lines do not imply better runtime behavior.

2. Rely on the model's claim that quality improved

   A model claim is not a measurement.

3. Benchmark real workloads and regressions **[CORRECT]**

   Representative benchmarks and regression checks support evidence-based optimization.

4. Benchmark only the easiest production workloads

   A narrow easy-case benchmark may hide costs on real workloads.

**Concept:** Evidence-based optimization

**Authored coaching hints:**

- What workload reflects actual use?
- How will performance and behavioral regressions be measured?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué evidencia respalda adoptar una reescritura de rendimiento sugerida?

1. Preferir la implementación más breve sin probar cargas reales

   Menos líneas no implican mejor rendimiento.

2. Confiar en la afirmación del modelo sobre la calidad

   Una afirmación del modelo no es una medición.

3. Medir cargas reales y posibles regresiones **[CORRECT]**

   Las mediciones representativas y las comprobaciones de regresión respaldan una optimización basada en evidencia.

4. Medir solo las cargas de producción más sencillas

   Una prueba limitada al caso sencillo puede ocultar costos en cargas reales.

**Concept:** Optimización basada en evidencia

**Authored coaching hints:**

- ¿Qué carga de trabajo representa el uso real?
- ¿Cómo se medirán el rendimiento y las regresiones de comportamiento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Que evidência apoia a adoção de uma reescrita de desempenho sugerida?

1. Preferir a implementação mais curta sem testar cargas reais

   Menos linhas não implicam melhor desempenho.

2. Confiar na afirmação do modelo sobre a qualidade

   Uma afirmação do modelo não é uma medição.

3. Medir cargas reais e possíveis regressões **[CORRECT]**

   Benchmarks representativos e verificações de regressão apoiam otimização baseada em evidências.

4. Medir apenas as cargas de produção mais simples

   Um benchmark limitado ao caso fácil pode ocultar custos em cargas reais.

**Concept:** Otimização baseada em evidências

**Authored coaching hints:**

- Qual carga de trabalho representa o uso real?
- Como serão medidos o desempenho e as regressões de comportamento?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-019:159fb26dcc6fc50ed69c9c5841f1c77e0aa4244f80d9f7a3ea7d657bcbfceaba -->
## Question 19: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-019`

**Content revision:** `159fb26dcc6fc50ed69c9c5841f1c77e0aa4244f80d9f7a3ea7d657bcbfceaba`

**en review revision:** `9d097e19fd48f407c75aa0db1e1498b5aedc6cc876b0faaead8073eb28134472`
**es review revision:** `d804ff6dbfaf9bd1822009daf7e5ab41b10c3d40b6876cc517a0412812bffcf8`
**pt-BR review revision:** `a502a86eedab4bb3ea48ca7170e973ded5d8d9e60c0aea73d910086eb42e9b65`

### English

What does variation between repeated generative outputs demonstrate?

1. Treat the first output as most reliable

   Attempt order does not establish reliability.

2. Assume the model detected changed requirements

   Different outputs alone do not show that the requirements changed.

3. Treat a later correction as proof

   A later answer is not necessarily a corrected one.

4. Outputs vary; evaluate each implementation **[CORRECT]**

   Generative systems can produce varied responses to similar prompts; neither is automatically correct.

**Concept:** Generative variability

**Authored coaching hints:**

- What can be inferred from different outputs alone?
- What evidence determines which implementation fits the requirements?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué demuestra la variación entre resultados generativos repetidos?

1. Considerar más fiable la primera salida

   El orden de los intentos no demuestra confiabilidad.

2. Suponer que el modelo detectó el cambio

   Las diferencias por sí solas no muestran que cambiaran los requisitos.

3. Tomar una corrección posterior como prueba

   Una respuesta posterior no necesariamente corrige la anterior.

4. Las salidas varían; evalúa cada implementación **[CORRECT]**

   Los sistemas generativos pueden variar ante solicitudes similares; ninguna respuesta es correcta automáticamente.

**Concept:** Variabilidad generativa

**Authored coaching hints:**

- ¿Qué se puede inferir únicamente de las salidas distintas?
- ¿Qué evidencia determina qué implementación satisface los requisitos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a variação entre saídas generativas repetidas demonstra?

1. Considerar a primeira saída mais confiável

   A ordem das tentativas não comprova confiabilidade.

2. Supor que o modelo detectou a mudança

   Saídas diferentes, por si só, não mostram que os requisitos mudaram.

3. Tratar uma correção posterior como prova

   Uma resposta posterior não necessariamente corrige a anterior.

4. As saídas variam; avalie cada implementação **[CORRECT]**

   Sistemas generativos podem variar diante de prompts semelhantes; nenhuma resposta é automaticamente correta.

**Concept:** Variabilidade generativa

**Authored coaching hints:**

- O que pode ser inferido apenas de saídas diferentes?
- Que evidência determina qual implementação atende aos requisitos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-020:999e6fe037ad1b39c4d0c8151f7a26acb6b0ec6b9e77e766cf2513eb124e853f -->
## Question 20: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-020`

**Content revision:** `999e6fe037ad1b39c4d0c8151f7a26acb6b0ec6b9e77e766cf2513eb124e853f`

**en review revision:** `e576933b32b527f094ff1187bc1c7addbab703c7090f417e57f7358250481229`
**es review revision:** `c4498ddb1745a5a6930daf05f28d371e485f3c4db3ddbf6ba938e51141057695`
**pt-BR review revision:** `60e887e7beb98076bc113d86d9e319fca305aa37d4c1599266244488db627f04`

### English

What should change when a Copilot-generated prototype is prepared for production use?

1. Apply production security and release checks **[CORRECT]**

   Production use requires validation appropriate to the system's risks and requirements.

2. Keep prototype assumptions when preparing a production demo

   A demonstration does not verify operational or failure conditions.

3. Replace the required review with an agent transcript

   A transcript does not satisfy ordinary review and release controls.

4. Treat sample-data results as release evidence

   Sample data do not establish behavior under production conditions.

**Concept:** Prototype and production readiness

**Authored coaching hints:**

- Which operational conditions were not exercised in a demo?
- What release criteria apply to every production change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debería cambiar al preparar para producción un prototipo generado con Copilot?

1. Aplicar controles de seguridad y publicación **[CORRECT]**

   El uso en producción requiere validación acorde con los riesgos y requisitos del sistema.

2. Mantener los supuestos del prototipo al preparar la demostración de producción

   Una demostración no verifica condiciones operativas ni fallos.

3. Reemplazar la revisión requerida por una transcripción del agente

   Una transcripción no satisface los controles habituales de revisión y publicación.

4. Tomar resultados con datos de muestra como prueba de publicación

   Los datos de ejemplo no demuestran el comportamiento en producción.

**Concept:** Preparación para producción

**Authored coaching hints:**

- ¿Qué condiciones operativas no se probaron en la demostración?
- ¿Qué criterios de publicación se aplican a todo cambio de producción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que deve mudar quando um protótipo gerado com o Copilot é preparado para produção?

1. Aplicar verificações de segurança e lançamento **[CORRECT]**

   O uso em produção exige validação adequada aos riscos e requisitos do sistema.

2. Manter as suposições do protótipo ao preparar uma demonstração de produção

   Uma demonstração não verifica condições operacionais nem falhas.

3. Substituir a revisão exigida por uma transcrição do agente

   Uma transcrição não satisfaz os controles normais de revisão e lançamento.

4. Tratar resultados de dados de amostra como evidência de lançamento

   Dados de amostra não comprovam o comportamento em produção.

**Concept:** Preparação para produção

**Authored coaching hints:**

- Quais condições operacionais não foram exercitadas na demonstração?
- Quais critérios de lançamento se aplicam a toda alteração de produção?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-021:90c6dbe51fc83309de9451c349d2777531467f4115006878d2e20148e3c136be -->
## Question 21: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-021`

**Content revision:** `90c6dbe51fc83309de9451c349d2777531467f4115006878d2e20148e3c136be`

**en review revision:** `779bf8594d99b6dd5e1456ccca5bb96e6a6250374492a7014882e5ae8b609e26`
**es review revision:** `ded46885d6d6c9fe3930668fdd0c31218ac0fc365eaf6ca5affe2547c9ca0f4b`
**pt-BR review revision:** `552f6159a771848631c8543bc634f433e78c7d2e60e64cb4ae355ad18ac488e6`

### English

What should determine a project's published license notice?

1. Assume generated code is unrestricted

   Common practice does not establish this project's license terms.

2. The project's license and legal review **[CORRECT]**

   The project's selected license and suitable legal review provide the relevant basis.

3. Treat attribution as a license grant

   Editor licensing does not govern the project's license.

4. Skip review because the patch is small

   An unrelated notice may not match the project's rights or obligations.

**Concept:** Review of legal notices

**Authored coaching hints:**

- Which license applies to this project's own distribution?
- Does a generic draft establish the correct legal terms?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debería determinar el aviso de licencia publicado de un proyecto?

1. Suponer que el código generado no tiene restricciones

   La práctica común no establece los términos de licencia de este proyecto.

2. La licencia del proyecto y una revisión jurídica **[CORRECT]**

   La licencia elegida para el proyecto y una revisión jurídica apropiada son la base pertinente.

3. Tomar la atribución como licencia

   La licencia del editor no rige la licencia del proyecto.

4. Omitir la revisión porque el cambio es pequeño

   Un aviso ajeno puede no corresponder a los derechos u obligaciones del proyecto.

**Concept:** Revisión de avisos legales

**Authored coaching hints:**

- ¿Qué licencia se aplica a la distribución de este proyecto?
- ¿Un borrador genérico establece los términos legales correctos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que deve determinar o aviso de licença publicado de um projeto?

1. Supor que o código gerado não tem restrições

   Prática comum não estabelece os termos de licença deste projeto.

2. A licença do projeto e uma revisão jurídica **[CORRECT]**

   A licença escolhida para o projeto e uma revisão jurídica adequada são a base pertinente.

3. Tratar atribuição como concessão de licença

   A licença do editor não rege a licença do projeto.

4. Dispensar a revisão porque a alteração é pequena

   Um aviso alheio pode não corresponder aos direitos ou obrigações do projeto.

**Concept:** Revisão de avisos legais

**Authored coaching hints:**

- Qual licença se aplica à distribuição deste projeto?
- Um rascunho genérico estabelece os termos legais corretos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-022:60c7e3a9203d544567a302af7d8e70c0d6c2e24e33594a061ba7a00384d11a08 -->
## Question 22: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-022`

**Content revision:** `60c7e3a9203d544567a302af7d8e70c0d6c2e24e33594a061ba7a00384d11a08`

**en review revision:** `9a6d04a794f8c1d75d6f88412506c9f1ddc69b2f2302caf645832d6faf16490c`
**es review revision:** `00a21c3e769d533e8056ee0dae2cb2a6a18c8f2f66fa7408d8b1f45ba0d70997`
**pt-BR review revision:** `80591431517b32372a42e8adaea475d72d6fed3a687efed56babf94c6e85d8aa`

### English

How should a Copilot summary of an outage timeline be verified?

1. Treat a fluent generated summary as the authoritative timeline

   Fluent writing can still contain unsupported details.

2. Remove uncertainty when presenting the generated report

   Removing uncertainty can turn incomplete evidence into a false claim.

3. Verify the timeline against primary records **[CORRECT]**

   Verification against primary records preserves factual accuracy and traceability.

4. Replace links to primary records with a summary

   Source records allow readers to verify the narrative.

**Concept:** Validation of incident summaries

**Authored coaching hints:**

- Which records establish what happened and when?
- How should uncertainty be represented when evidence is incomplete?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo se debe verificar un resumen de Copilot sobre la cronología de una interrupción?

1. Tomar un resumen generado y fluido como cronología autorizada

   Una redacción fluida puede incluir detalles sin respaldo.

2. Eliminar la incertidumbre al presentar el informe generado

   Eliminar incertidumbre puede convertir evidencia incompleta en una afirmación falsa.

3. Verificar la cronología con registros primarios **[CORRECT]**

   La verificación con registros primarios mantiene exactitud y trazabilidad.

4. Reemplazar enlaces a registros primarios por un resumen

   Los registros de origen permiten verificar la narrativa.

**Concept:** Validación de resúmenes de incidentes

**Authored coaching hints:**

- ¿Qué registros establecen qué ocurrió y cuándo?
- ¿Cómo se debe expresar la incertidumbre si la evidencia está incompleta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um resumo do Copilot sobre a linha do tempo de uma interrupção deve ser verificado?

1. Tratar um resumo gerado e fluente como linha do tempo oficial

   Uma redação fluente ainda pode conter detalhes sem suporte.

2. Remover a incerteza ao apresentar o relatório gerado

   Remover incertezas pode transformar evidência incompleta em afirmação falsa.

3. Conferir a linha do tempo com registros primários **[CORRECT]**

   A conferência com registros primários preserva exatidão e rastreabilidade.

4. Substituir links de registros primários por um resumo

   Registros de origem permitem verificar a narrativa.

**Concept:** Validação de resumos de incidentes

**Authored coaching hints:**

- Quais registros estabelecem o que aconteceu e quando?
- Como a incerteza deve ser apresentada quando a evidência está incompleta?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-023:f1dc7e8956cc520591d79a21937876725f66087b59c80ee3f617012e447ca450 -->
## Question 23: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-023`

**Content revision:** `f1dc7e8956cc520591d79a21937876725f66087b59c80ee3f617012e447ca450`

**en review revision:** `6072610f0029b972fb2bb7066d14bc6afdc3af565b15cf58b4e44ea0be6c7089`
**es review revision:** `afbc1dc2c699efc5fbeea18fc57a2b3461ce7607b082bcec4e7ba053d8ee676f`
**pt-BR review revision:** `e9f8b11eb609fc00e5668b7a8f7f54dbf8676400ee55bf03f8479ed05469f7e6`

### English

What should code review address when generated logs contain authorization headers?

1. Keep sensitive values in the request and response headers

   Logs can be sensitive data and may be widely retained or accessed.

2. Retain the full diagnostic log indefinitely

   Indefinite retention increases exposure and exceeds typical diagnostic need.

3. Post every header to a publicly visible issue

   Public issue reports must not disclose authorization secrets.

4. Redact secrets and minimize logged data **[CORRECT]**

   Removing secrets and minimizing logged data reduces exposure.

**Concept:** Sensitive logging review

**Authored coaching hints:**

- Which information is needed to diagnose the failure?
- Could the logged value authenticate a user or reveal private data?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debería abordar la revisión cuando los registros generados contienen encabezados de autorización?

1. Conservar valores confidenciales en los encabezados de solicitud y respuesta

   Los registros pueden contener datos sensibles y conservarse o consultarse ampliamente.

2. Retener indefinidamente el registro de diagnóstico completo

   La retención indefinida aumenta la exposición y excede la necesidad habitual de diagnóstico.

3. Publicar todos los encabezados en un issue visible públicamente

   Los informes públicos no deben divulgar secretos de autorización.

4. Ocultar secretos y minimizar los datos registrados **[CORRECT]**

   Eliminar secretos y minimizar los datos registrados reduce la exposición.

**Concept:** Revisión de registros sensibles

**Authored coaching hints:**

- ¿Qué información se necesita para diagnosticar el fallo?
- ¿El valor registrado podría autenticar a alguien o revelar datos privados?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a revisão de código deve abordar quando logs gerados contêm cabeçalhos de autorização?

1. Manter valores confidenciais nos cabeçalhos da solicitação e da resposta

   Logs podem conter dados confidenciais e ser retidos ou acessados amplamente.

2. Reter indefinidamente o log de diagnóstico completo

   Retenção indefinida aumenta a exposição e excede a necessidade normal de diagnóstico.

3. Publicar todos os cabeçalhos em uma issue visível publicamente

   Relatos públicos não devem divulgar segredos de autorização.

4. Ocultar segredos e minimizar os dados registrados **[CORRECT]**

   Remover segredos e minimizar dados registrados reduz a exposição.

**Concept:** Revisão de logs confidenciais

**Authored coaching hints:**

- Quais informações são necessárias para diagnosticar a falha?
- O valor registrado poderia autenticar alguém ou revelar dados privados?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-024:ccac1994be7e6b0dfd1a73cb82bae82d0895d35f24bb866b2c568b3a8214a2da -->
## Question 24: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-024`

**Content revision:** `ccac1994be7e6b0dfd1a73cb82bae82d0895d35f24bb866b2c568b3a8214a2da`

**en review revision:** `8ffd09745b8a3a1021deef2560ab9466a7c6f1e509f446a650eca44610268d1b`
**es review revision:** `dccf20cb2dc7625bc4b2f80a07fe7648ae209bb5fd0050bd29749a5e64ce0495`
**pt-BR review revision:** `168774c8a214d065d93905e0988553bedc22e60e46e8f5086680ac51e95a0a30`

### English

Which source governs a rule when generated explanation conflicts with approved requirements?

1. The approved requirement **[CORRECT]**

   Approved requirements govern unless an authorized owner clarifies or changes them.

2. Use a newly generated explanation

   A generated explanation does not override an authoritative requirement.

3. Prefer the fewest code changes

   Implementation convenience does not establish business correctness.

4. Guess from similar products

   Similarity to other products is not authority for this system's policy.

**Concept:** Authority of requirements

**Authored coaching hints:**

- Which source is approved to define the business rule?
- Who can resolve conflicting or ambiguous requirements?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué fuente rige una regla cuando una explicación generada contradice requisitos aprobados?

1. El requisito aprobado **[CORRECT]**

   Los requisitos aprobados rigen salvo que una persona autorizada los aclare o cambie.

2. Usar una explicación recién generada

   Una explicación generada no reemplaza un requisito autorizado.

3. Preferir el menor número de cambios

   La comodidad de implementación no establece la corrección del negocio.

4. Adivinar a partir de productos similares

   La similitud con otros productos no define la política de este sistema.

**Concept:** Autoridad de los requisitos

**Authored coaching hints:**

- ¿Qué fuente está aprobada para definir la regla de negocio?
- ¿Quién puede resolver requisitos contradictorios o ambiguos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual fonte rege uma regra quando uma explicação gerada contradiz requisitos aprovados?

1. O requisito aprovado **[CORRECT]**

   Requisitos aprovados prevalecem, a menos que uma pessoa autorizada os esclareça ou altere.

2. Usar uma explicação recém-gerada

   Uma explicação gerada não substitui um requisito autorizado.

3. Preferir o menor número de alterações

   Conveniência de implementação não estabelece correção de negócio.

4. Deduzir com base em produtos semelhantes

   Semelhança com outros produtos não define a política deste sistema.

**Concept:** Autoridade dos requisitos

**Authored coaching hints:**

- Qual fonte está aprovada para definir a regra de negócio?
- Quem pode resolver requisitos conflitantes ou ambíguos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-025:14a644d02ba8d88502548acbe21f0bc9d914cc41f5b49799fdfe48c560a004fd -->
## Question 25: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-025`

**Content revision:** `14a644d02ba8d88502548acbe21f0bc9d914cc41f5b49799fdfe48c560a004fd`

**en review revision:** `4137a0cc2826cf42c6cfe518eca90d018fd8ffde021f377df1be4d1b752d86f0`
**es review revision:** `c9d3ae5130628008cb73eb741bd511904d5b7bf0c26757a1f6a9c83abaffe3a3`
**pt-BR review revision:** `5008b22d005153aa6a9e9e3691fb0c8efaddec52d7fe40a4a47ab76c9939ebdc`

### English

What risk arises when implementation and expected test values change together?

1. The tests use too many assertions

   The number of assertions alone does not indicate whether the test oracle is valid.

2. Expected values may mirror the same mistake **[CORRECT]**

   Changing implementation and oracle together can make incorrect behavior appear correct.

3. The code and tests were edited in the same commit

   A shared commit does not inherently invalidate a test.

4. The tests run automatically

   Automation does not resolve the concern about changed expected behavior.

**Concept:** Independent test oracles

**Authored coaching hints:**

- What independently defines the expected result?
- Could the test pass because both sides share the same mistaken assumption?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué riesgo surge si cambian a la vez la implementación y los valores esperados de las pruebas?

1. Las pruebas usan demasiadas aserciones

   La cantidad de aserciones no indica por sí sola si el resultado esperado es válido.

2. Los valores esperados podrían reflejar el mismo error **[CORRECT]**

   Cambiar conjuntamente la implementación y el oráculo puede hacer que un comportamiento incorrecto parezca correcto.

3. El código y las pruebas se editaron en el mismo commit

   Un commit compartido no invalida una prueba por sí mismo.

4. Las pruebas se ejecutan automáticamente

   La automatización no resuelve el problema de haber cambiado el resultado esperado.

**Concept:** Oráculos de prueba independientes

**Authored coaching hints:**

- ¿Qué define de manera independiente el resultado esperado?
- ¿La prueba podría pasar porque ambos lados comparten el mismo supuesto erróneo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual risco surge quando a implementação e os valores esperados dos testes mudam juntos?

1. Os testes usam muitas asserções

   A quantidade de asserções, por si só, não indica se o resultado esperado é válido.

2. Os valores esperados podem refletir o mesmo erro **[CORRECT]**

   Alterar implementação e oráculo juntos pode fazer um comportamento incorreto parecer correto.

3. O código e os testes foram editados no mesmo commit

   Um commit compartilhado não invalida um teste por si só.

4. Os testes são executados automaticamente

   Automação não resolve o problema de alterar o resultado esperado.

**Concept:** Oráculos de teste independentes

**Authored coaching hints:**

- O que define independentemente o resultado esperado?
- O teste poderia passar porque os dois lados compartilham a mesma suposição equivocada?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-026:c01a790323ba71a48d0a64ded78b2fcd8235701362bbd6b3a9000ca189e98a00 -->
## Question 26: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-026`

**Content revision:** `c01a790323ba71a48d0a64ded78b2fcd8235701362bbd6b3a9000ca189e98a00`

**en review revision:** `e396a933d5a910866f5d94b23564f50802bd6526a6782d50634e5fd4fde5bb72`
**es review revision:** `6f96498e469fff5fb488e9456a80b951841f88f7e1f084fbcd37403c0d05d466`
**pt-BR review revision:** `d3cc93a9cd245fd484c0ffc22ddcc6cc2a8392753aebc780494a53e7fc3e541b`

### English

Which checks matter before approving a migration that drops a database column?

1. Assume the model inspected the production database schema

   A model's description does not prove that no consumers or retention obligations exist.

2. Drop and restore production data without a recovery plan

   A production drop can cause irreversible loss or disruption.

3. Verify usage, retention, backup, and rollback **[CORRECT]**

   Usage and operational checks establish whether removal is safe and reversible.

4. Check only whether the migration file compiles

   Compilation does not validate data impact or rollback safety.

**Concept:** Review of destructive data changes

**Authored coaching hints:**

- What systems may still consume the column?
- What evidence supports a safe recovery plan?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comprobaciones importan antes de aprobar una migración que elimina una columna de base de datos?

1. Suponer que el modelo inspeccionó el esquema de producción

   La descripción del modelo no demuestra que no existan consumidores u obligaciones de retención.

2. Eliminar y restaurar datos de producción sin un plan de recuperación

   Eliminar en producción puede causar pérdida irreversible o interrupciones.

3. Verificar uso, retención, respaldo y reversión **[CORRECT]**

   Las comprobaciones de uso y operación determinan si la eliminación es segura y reversible.

4. Comprobar únicamente si el archivo de migración compila

   La compilación no valida el impacto en los datos ni la seguridad de la reversión.

**Concept:** Revisión de cambios destructivos en datos

**Authored coaching hints:**

- ¿Qué sistemas podrían seguir usando la columna?
- ¿Qué evidencia respalda un plan seguro de recuperación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais verificações importam antes de aprovar uma migração que remove uma coluna do banco de dados?

1. Supor que o modelo inspecionou o esquema de produção

   A descrição do modelo não prova que não existam consumidores ou obrigações de retenção.

2. Excluir e restaurar dados de produção sem um plano de recuperação

   Remover em produção pode causar perda irreversível ou interrupção.

3. Verificar uso, retenção, backup e reversão **[CORRECT]**

   Verificações de uso e operação estabelecem se a remoção é segura e reversível.

4. Verificar apenas se o arquivo de migração compila

   Compilação não valida impacto nos dados nem segurança da reversão.

**Concept:** Revisão de alterações destrutivas em dados

**Authored coaching hints:**

- Quais sistemas ainda podem consumir a coluna?
- Que evidência apoia um plano seguro de recuperação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-027:8a9ce2138e0d735a259da46583ec729bbd60b605108b48a71aa61865228f2d96 -->
## Question 27: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-027`

**Content revision:** `8a9ce2138e0d735a259da46583ec729bbd60b605108b48a71aa61865228f2d96`

**en review revision:** `321829d192fc37f2b8d3ddc48857e78d5d7b49298144bc35463cca8921747718`
**es review revision:** `1d014399bbad7cf626d02cd181fdc4d2047dac7d07d0b35722d9c2773fbd4957`
**pt-BR review revision:** `1a335927cecbecb184e03c848849a93f787080743654e6cc9e37a219c69e4dcb`

### English

How should generated translations of public-service messages be reviewed?

1. Preserve the word count without checking meaning

   Equal word counts do not guarantee equivalent meaning.

2. Rely only on machine translation review

   A single automated pass may miss language and cultural context.

3. Translate the title but not the instructions

   Mixed-language instructions can confuse users and omit needed guidance.

4. Have fluent reviewers check meaning and local use **[CORRECT]**

   Language and context review can catch misleading or inaccessible translations.

**Concept:** Responsible localization

**Authored coaching hints:**

- Does the translated text accurately describe the same action and consequence?
- Who can review the target language and local context?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo se deben revisar las traducciones generadas de mensajes de un servicio público?

1. Mantener la cantidad de palabras sin comprobar el significado

   La misma cantidad de palabras no garantiza equivalencia de significado.

2. Confiar solo en una revisión de traducción automática

   Una única pasada automatizada puede omitir el contexto lingüístico y cultural.

3. Traducir el título, pero no las instrucciones

   Las instrucciones en idiomas mezclados pueden confundir y omitir orientación.

4. Pedir a revisores competentes que comprueben significado y uso local **[CORRECT]**

   La revisión lingüística y contextual puede detectar traducciones engañosas o inaccesibles.

**Concept:** Localización responsable

**Authored coaching hints:**

- ¿El texto traducido describe la misma acción y consecuencia?
- ¿Quién puede revisar el idioma y el contexto local?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como traduções geradas de mensagens de um serviço público devem ser revisadas?

1. Manter a quantidade de palavras sem conferir o significado

   A mesma quantidade de palavras não garante equivalência de significado.

2. Confiar apenas na revisão da tradução automática

   Uma única passagem automatizada pode ignorar o contexto linguístico e cultural.

3. Traduzir o título, mas não as instruções

   Instruções em idiomas misturados podem confundir e omitir orientação.

4. Pedir a revisores fluentes que verifiquem significado e uso local **[CORRECT]**

   Revisores de idioma e contexto podem encontrar traduções enganosas ou inacessíveis.

**Concept:** Localização responsável

**Authored coaching hints:**

- O texto traduzido descreve a mesma ação e consequência?
- Quem pode revisar o idioma e o contexto local?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-028:bb4cd6d728cc9e11ebae236bdd1195557572d806d3000bc12b7ff274578ad154 -->
## Question 28: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-028`

**Content revision:** `bb4cd6d728cc9e11ebae236bdd1195557572d806d3000bc12b7ff274578ad154`

**en review revision:** `72b7ab8a670864ce948a772a68eeab32cf41fad2a1b088285dda494741332faa`
**es review revision:** `15aad513591ff8e72e606ea97f5eac2e4138e2bc28beed0520449a7da0040552`
**pt-BR review revision:** `89f534f1b69b2d23b40edfaec4faedd3df9e566fc0a0f70ef78860fd4cfda5af`

### English

Should human review be skipped based on an AI-generated label?

1. Apply normal risk-based review controls **[CORRECT]**

   Review should reflect impact and risk; origin labels do not establish correctness.

2. Exempt a generated patch from normal review

   AI assistance does not automatically exempt a change from existing controls.

3. Treat a label as proof of how code was authored

   Labels can be incomplete and do not prove authorship or safety.

4. Review comments instead of the executable change

   Comments do not determine whether a change needs review.

**Concept:** Consistent quality gates

**Authored coaching hints:**

- What determines the risk of a change: its origin or its effects?
- Which process should govern changes to this system?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Se debería omitir la revisión humana por una etiqueta de contenido generado por IA?

1. Aplicar los controles habituales según el riesgo **[CORRECT]**

   La revisión debe considerar el impacto y el riesgo; el origen no demuestra corrección.

2. Eximir un cambio generado de la revisión habitual

   La ayuda de IA no exime automáticamente un cambio de los controles existentes.

3. Tomar una etiqueta como prueba de cómo se escribió el código

   Las etiquetas pueden ser incompletas y no prueban autoría ni seguridad.

4. Revisar comentarios en vez del cambio ejecutable

   Los comentarios no determinan si un cambio requiere revisión.

**Concept:** Controles de calidad coherentes

**Authored coaching hints:**

- ¿Qué determina el riesgo: el origen o los efectos del cambio?
- ¿Qué proceso debe regir los cambios de este sistema?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A revisão humana deve ser ignorada com base em uma identificação de conteúdo gerado por IA?

1. Aplicar os controles normais de revisão baseada em risco **[CORRECT]**

   A revisão deve considerar impacto e risco; a origem não comprova correção.

2. Isentar uma alteração gerada da revisão normal

   Ajuda de IA não isenta automaticamente uma alteração dos controles existentes.

3. Tratar um rótulo como prova de como o código foi escrito

   Identificações podem estar incompletas e não comprovam autoria nem segurança.

4. Revisar comentários em vez da alteração executável

   Comentários não determinam se uma alteração precisa de revisão.

**Concept:** Controles de qualidade consistentes

**Authored coaching hints:**

- O que determina o risco: a origem ou os efeitos da alteração?
- Qual processo deve reger as alterações deste sistema?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-029:bd36fe4416dfbb22156424ac18ee3adc8907daff048fa91caff6742f8dddce69 -->
## Question 29: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-029`

**Content revision:** `bd36fe4416dfbb22156424ac18ee3adc8907daff048fa91caff6742f8dddce69`

**en review revision:** `f9d2d723f7a78a2cc44abfbb5f8643ad8cc54879961cb3844b4fdce603b17e19`
**es review revision:** `6bf494399135b00da8f0f25ea92916f69e403b027aa9f55fd09749404dc1ef71`
**pt-BR review revision:** `ecf7b1d059253802f577b796970f713e0bf785e1e3cbacb444af592fcada79b8`

### English

What evidence should support a generated bug fix before deployment?

1. Deploy because the explanation sounds plausible

   A plausible explanation does not confirm the cause.

2. Get a reproducible case; test the proposed fix **[CORRECT]**

   A reproducible case or verified evidence helps assess whether the change addresses the actual defect.

3. Review only unrelated components

   Unrelated changes make attribution and regression analysis harder.

4. Close the issue if it compiles

   Compilation does not establish that the bug was fixed.

**Concept:** Evidence-led debugging

**Authored coaching hints:**

- What observation connects the proposed change to the reported failure?
- How can the team distinguish a fix from a coincidental code change?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué evidencia debería respaldar una corrección generada antes del despliegue?

1. Publicar porque la explicación parece plausible

   Una explicación plausible no confirma la causa.

2. Obtener un caso reproducible y probar la solución **[CORRECT]**

   Un caso reproducible o evidencia verificada ayuda a determinar si el cambio resuelve el defecto real.

3. Revisar solo componentes no relacionados

   Los cambios ajenos dificultan atribuir resultados y analizar regresiones.

4. Cerrar el issue si compila

   La compilación no demuestra que se haya corregido el error.

**Concept:** Depuración basada en evidencia

**Authored coaching hints:**

- ¿Qué observación conecta el cambio propuesto con el fallo informado?
- ¿Cómo distinguir una reparación de un cambio de código coincidente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Que evidência deve apoiar uma correção gerada antes da implantação?

1. Implantar porque a explicação parece plausível

   Uma explicação plausível não confirma a causa.

2. Obter um caso reproduzível e testar a correção **[CORRECT]**

   Um caso reproduzível ou evidência verificada ajuda a avaliar se a alteração corrige o defeito real.

3. Revisar apenas componentes não relacionados

   Alterações não relacionadas dificultam atribuição de resultados e análise de regressões.

4. Fechar a issue se compilar

   Compilação não comprova que o bug foi corrigido.

**Concept:** Depuração baseada em evidências

**Authored coaching hints:**

- Qual observação conecta a alteração proposta à falha relatada?
- Como distinguir uma correção de uma alteração coincidente no código?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-030:a2b181da7005aba4ddde0fb99465c782dc1aa5dd9f53001e1282fc8f34ba8a4f -->
## Question 30: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-030`

**Content revision:** `a2b181da7005aba4ddde0fb99465c782dc1aa5dd9f53001e1282fc8f34ba8a4f`

**en review revision:** `92b6fa20e5abf5936fa5852e168a8bd0b574b7e0046f9bb0928dc54d7ddedaef`
**es review revision:** `1a17559a525e2db805415c95d5a78ee39c2af429751af9e4f1b7f4c344ce2ddf`
**pt-BR review revision:** `2a029a24527a7107db96b83a51507e7219acf76e3a881a90b6cc53db0c99b8c0`

### English

An agent requests permission to upload build artifacts to an unfamiliar service, but the task only requires local tests. What should the operator do?

1. Approve because the agent requested it

   A tool request is not sufficient authorization.

2. Upload first, then inspect

   Inspecting the destination later does not undo disclosure.

3. Decline the unrelated transfer **[CORRECT]**

   The transfer is outside the task and could disclose data; least privilege is appropriate.

4. Grant broad permissions for later

   Broad standing permissions exceed the current task's needs.

**Concept:** Task-scoped tool authorization

**Authored coaching hints:**

- Is this action necessary for the requested work?
- What is the least permission needed to complete the task?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente solicita permiso para cargar artefactos de compilación a un servicio desconocido, pero la tarea solo requiere pruebas locales. ¿Qué debería hacer quien lo opera?

1. Aprobar porque lo pidió el agente

   La solicitud de una herramienta no constituye autorización suficiente.

2. Cargar primero e inspeccionar después

   Revisar el destino después no revierte la divulgación.

3. Rechazar la transferencia ajena a la tarea **[CORRECT]**

   La transferencia no es necesaria y podría divulgar datos; conviene aplicar privilegio mínimo.

4. Conceder permisos amplios para más adelante

   Los permisos permanentes amplios exceden las necesidades de esta tarea.

**Concept:** Autorización de herramientas limitada a la tarea

**Authored coaching hints:**

- ¿Es necesaria esta acción para el trabajo solicitado?
- ¿Cuál es el permiso mínimo para completar la tarea?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente solicita permissão para enviar artefatos de build a um serviço desconhecido, mas a tarefa exige apenas testes locais. O que o operador deve fazer?

1. Aprovar porque o agente solicitou

   Uma solicitação de ferramenta não é autorização suficiente.

2. Enviar primeiro e inspecionar depois

   Inspecionar o destino depois não desfaz a divulgação.

3. Recusar a transferência não relacionada **[CORRECT]**

   A transferência não é necessária e pode divulgar dados; o privilégio mínimo é adequado.

4. Conceder permissões amplas para depois

   Permissões amplas permanentes excedem as necessidades da tarefa atual.

**Concept:** Autorização de ferramentas limitada à tarefa

**Authored coaching hints:**

- Esta ação é necessária para o trabalho solicitado?
- Qual é a permissão mínima para concluir a tarefa?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-031:59f562c312e4026c83d2d718a3f7c6a10d4af2d818a3e9634fbffa3f92b61b22 -->
## Question 31: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-031`

**Content revision:** `59f562c312e4026c83d2d718a3f7c6a10d4af2d818a3e9634fbffa3f92b61b22`

**en review revision:** `c8830d3a71155514badc9f7b0ae9a3b9cd552f8fe7b0563a8e2efc01cc98d764`
**es review revision:** `104610f700b6465855736db6adf727f370ebc3f3a8645542fbf0791744377567`
**pt-BR review revision:** `67cb4ec157a6d8a57586683d8744992f011791243ea7e145933662b7c5132af9`

### English

How should maintainers handle an unsupported compliance claim in generated documentation?

1. Present an unsupported claim as informal guidance

   Readers may rely on documentation even if it is generated.

2. Add regulatory language without supporting evidence

   Adding terminology does not supply evidence.

3. Use passing unit tests as proof of compliance

   Unit tests do not establish regulatory compliance.

4. Qualify or remove the unsupported claim **[CORRECT]**

   Unsupported compliance claims can mislead readers and should be evidence-based.

**Concept:** Unsupported assurance claims

**Authored coaching hints:**

- Is there a completed assessment behind the statement?
- What should readers be told until the claim is substantiated?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debería gestionarse una afirmación de cumplimiento sin respaldo en documentación generada?

1. Presentar una afirmación sin respaldo como orientación informal

   Los lectores pueden confiar en la documentación aunque sea generada.

2. Agregar lenguaje regulatorio sin evidencia que lo sustente

   Agregar terminología no aporta evidencia.

3. Usar pruebas unitarias aprobadas como prueba de cumplimiento

   Las pruebas unitarias no demuestran cumplimiento normativo.

4. Matizar o eliminar la afirmación sin respaldo **[CORRECT]**

   Las afirmaciones de cumplimiento sin respaldo pueden inducir a error y deben basarse en evidencia.

**Concept:** Afirmaciones de garantía sin respaldo

**Authored coaching hints:**

- ¿Existe una evaluación completa que respalde la afirmación?
- ¿Qué se debería comunicar hasta que la afirmación tenga sustento?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como mantenedores devem lidar com uma afirmação de conformidade sem suporte em documentação gerada?

1. Apresentar uma alegação sem comprovação como orientação informal

   Leitores podem confiar na documentação mesmo que ela tenha sido gerada.

2. Adicionar linguagem regulatória sem evidências que a sustentem

   Adicionar terminologia não fornece evidências.

3. Usar testes unitários aprovados como prova de conformidade

   Testes unitários não comprovam conformidade regulatória.

4. Qualificar ou remover a afirmação sem suporte **[CORRECT]**

   Afirmações de conformidade sem suporte podem induzir ao erro e devem se basear em evidências.

**Concept:** Afirmações de garantia sem suporte

**Authored coaching hints:**

- Existe uma avaliação concluída que apoie a afirmação?
- O que deve ser comunicado até que a afirmação tenha comprovação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-032:98aa4a8353a9609dd03c1dc4745f677134d1b6901ce7401f207009ad55e1b948 -->
## Question 32: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-032`

**Content revision:** `98aa4a8353a9609dd03c1dc4745f677134d1b6901ce7401f207009ad55e1b948`

**en review revision:** `84f746a99d3faf26701a77fa535c9d7da5150a665ba3729b0e90680009562f1e`
**es review revision:** `b712ff5e0a3441125f42b91207899a938e4af5afeba0453fe46b49592426b89a`
**pt-BR review revision:** `3169564435ddc8e804ccb029b88f3223f970b4ac97e7fa2693865232da3430c2`

### English

What determines whether generated automation may access a website?

1. Follow access rules and organizational policy **[CORRECT]**

   Authorization and applicable policy determine whether access is permitted.

2. The fact that the code can make successful requests

   Technical ability does not establish permission.

3. The model's description of the crawler as harmless

   Generated descriptions do not authorize activity.

4. The absence of a warning from the compiler

   A compiler does not assess legal or access requirements.

**Concept:** Authorized use of generated automation

**Authored coaching hints:**

- Does successful access mean the activity is authorized?
- Which rules govern access to the target service?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué determina si una automatización generada puede acceder a un sitio web?

1. Seguir las reglas de acceso y la política organizativa **[CORRECT]**

   La autorización y la política aplicable determinan si el acceso está permitido.

2. Que el código consiga hacer solicitudes exitosas

   La capacidad técnica no demuestra permiso.

3. Que el modelo describa el rastreador como inofensivo

   Las descripciones generadas no autorizan la actividad.

4. Que el compilador no emita advertencias

   El compilador no evalúa requisitos legales o de acceso.

**Concept:** Uso autorizado de automatización generada

**Authored coaching hints:**

- ¿Acceder correctamente significa que la actividad está autorizada?
- ¿Qué reglas rigen el acceso al servicio de destino?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que determina se uma automação gerada pode acessar um site?

1. Seguir as regras de acesso e a política organizacional **[CORRECT]**

   Autorização e política aplicável determinam se o acesso é permitido.

2. O fato de o código conseguir fazer solicitações

   Capacidade técnica não comprova permissão.

3. A descrição do modelo de que o rastreador é inofensivo

   Descrições geradas não autorizam a atividade.

4. A ausência de aviso do compilador

   O compilador não avalia requisitos legais ou de acesso.

**Concept:** Uso autorizado de automação gerada

**Authored coaching hints:**

- Acessar com sucesso significa que a atividade está autorizada?
- Quais regras regem o acesso ao serviço de destino?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-033:51837613e19e4fedd42fd11b7256e9486f4e599615c5159113da70b5364924b3 -->
## Question 33: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-033`

**Content revision:** `51837613e19e4fedd42fd11b7256e9486f4e599615c5159113da70b5364924b3`

**en review revision:** `435802244b82b34fc047c4c25a2146017991b2b4cd8a5789ec4fab2382030665`
**es review revision:** `a94f0477ff012b98038727280bbba1f6de39c373063291773842ab6234c660d2`
**pt-BR review revision:** `e34a42bc855aeb4e71645aa4458c863beee0eeba750080ab76679497ea005617`

### English

A generated payment retry loop may run after a timeout. Which failure case is especially important to test?

1. The payment page uses a different background color

   Presentation color does not test payment correctness.

2. Charge succeeds, but confirmation is lost **[CORRECT]**

   A timeout after a successful charge can lead to duplicate charges unless the flow is designed for it.

3. A log message contains a line break

   A line break in a log message does not cover the main financial failure mode.

4. The retry function has a descriptive name

   Naming does not test retry semantics.

**Concept:** Failure-mode review

**Authored coaching hints:**

- What might have happened on the remote side before the timeout?
- How could retrying affect a non-idempotent operation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un bucle de reintentos de pago generado podría ejecutarse tras un tiempo de espera agotado. ¿Qué caso de fallo es especialmente importante probar?

1. La página de pago usa otro color de fondo

   El color de presentación no prueba la corrección del pago.

2. El cargo se realiza, pero se pierde la confirmación **[CORRECT]**

   Un tiempo de espera tras un cargo exitoso puede duplicarlo si el flujo no lo contempla.

3. Un mensaje de registro contiene un salto de línea

   Un salto de línea en un registro no cubre el principal modo de fallo financiero.

4. La función de reintento tiene un nombre descriptivo

   El nombre no prueba la semántica de los reintentos.

**Concept:** Revisión de modos de fallo

**Authored coaching hints:**

- ¿Qué pudo ocurrir en el servicio remoto antes del tiempo de espera?
- ¿Cómo afectaría el reintento a una operación no idempotente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um loop de repetição de pagamentos gerado pode executar após um tempo limite. Qual caso de falha é especialmente importante testar?

1. A página de pagamento usa outra cor de fundo

   Cor de apresentação não testa a correção do pagamento.

2. A cobrança é concluída, mas a confirmação se perde **[CORRECT]**

   Um tempo limite após cobrança bem-sucedida pode gerar cobrança duplicada se o fluxo não tratar o caso.

3. Uma mensagem de log contém uma quebra de linha

   Uma quebra de linha no log não cobre o principal modo de falha financeira.

4. A função de repetição tem um nome descritivo

   O nome não testa a semântica de repetição.

**Concept:** Revisão de modos de falha

**Authored coaching hints:**

- O que pode ter ocorrido no serviço remoto antes do tempo limite?
- Como repetir pode afetar uma operação não idempotente?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-034:640cdad14b69ee08541d41d7b2566caa1f4affaf03125281e4eb288d73364c02 -->
## Question 34: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-034`

**Content revision:** `640cdad14b69ee08541d41d7b2566caa1f4affaf03125281e4eb288d73364c02`

**en review revision:** `b9c599e3869018e19cfbb86aa940de9a5efcdae8d890c529295328071042eebc`
**es review revision:** `328d2afe5bd6b21d3f201f153e80addf9b4a8e0d69d91bd20211ecb1e2b4e8f7`
**pt-BR review revision:** `29371a0519f4fd23f160281e6ccb9cd2616ba991ae47bd8bce3654fa94089974`

### English

A developer wants to paste a partner's proprietary implementation into Copilot Chat, but the agreement has not been checked. What should happen first?

1. Paste it because the repository is private

   A private repository does not itself authorize disclosure to a service.

2. Remove the header, then paste it

   Removing an attribution notice does not grant permission.

3. Confirm permission before sharing **[CORRECT]**

   Authorization and contractual or organizational requirements should be checked before sharing proprietary material.

4. Assume a short excerpt is always allowed

   A short excerpt is not automatically permitted in every context.

**Concept:** Authorized use of third-party context

**Authored coaching hints:**

- Who owns or controls the material?
- What terms govern sharing it with an external service?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona desarrolladora quiere pegar en Copilot Chat una implementación propietaria de un socio, pero no ha revisado el acuerdo. ¿Qué debería hacer primero?

1. Pegarla porque el repositorio es privado

   Un repositorio privado no autoriza por sí solo divulgar contenido a un servicio.

2. Quitar el encabezado y después pegarla

   Quitar un aviso de atribución no otorga permiso.

3. Confirmar el permiso antes de compartir **[CORRECT]**

   Se deben comprobar las autorizaciones y obligaciones contractuales u organizativas antes de compartir material propietario.

4. Suponer que un fragmento breve siempre está permitido

   Un fragmento corto no está permitido automáticamente en todos los contextos.

**Concept:** Uso autorizado de contexto de terceros

**Authored coaching hints:**

- ¿Quién posee o controla el material?
- ¿Qué condiciones rigen compartirlo con un servicio externo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor quer colar uma implementação proprietária de um parceiro no Copilot Chat, mas o contrato não foi verificado. O que deve fazer primeiro?

1. Colar porque o repositório é privado

   Um repositório privado não autoriza, por si só, divulgar conteúdo a um serviço.

2. Remover o cabeçalho e depois colar

   Remover um aviso de atribuição não concede permissão.

3. Confirmar a permissão antes de compartilhar **[CORRECT]**

   Autorizações e obrigações contratuais ou organizacionais devem ser verificadas antes de compartilhar material proprietário.

4. Supor que um trecho curto sempre é permitido

   Um trecho curto não é automaticamente permitido em todos os contextos.

**Concept:** Uso autorizado de contexto de terceiros

**Authored coaching hints:**

- Quem possui ou controla o material?
- Quais termos regem seu compartilhamento com um serviço externo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-035:208551bcd25857b867dccda988cb1a17c43c3a03308d79970aee7069b91be6a7 -->
## Question 35: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-035`

**Content revision:** `208551bcd25857b867dccda988cb1a17c43c3a03308d79970aee7069b91be6a7`

**en review revision:** `449f75c42aa185c538d5cbf8a10c4d1263dedebe3e8fd307c2e864876ed2101a`
**es review revision:** `e0d56bfb9cd989673ea05cc26ac26a37d3e90212d8f8e6c13e5ef9a1936512c6`
**pt-BR review revision:** `de19d2f53bc6e651b29d6a7b11a012526e9bafca4d184d9edb365137a956edec`

### English

What takes precedence when a performance change removes required input validation?

1. Treat the generated source as cleared for reuse

   A measurable speed gain is insufficient if important safeguards are lost.

2. Assume a matching reference grants permission

   Client behavior can vary and should not be assumed safe without evidence.

3. Skip the repository's license review process

   A comment does not enforce input validation.

4. Keep required validation; measure performance **[CORRECT]**

   Performance improvements do not justify violating required correctness or security constraints.

**Concept:** Preserving safety constraints

**Authored coaching hints:**

- Which requirements must remain true after the optimization?
- Can performance be improved without removing validation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué prevalece si un cambio de rendimiento elimina la validación de entradas requerida?

1. Dar por autorizado el código generado para reutilizarlo

   Una ganancia de velocidad medible no basta si se pierden protecciones importantes.

2. Suponer que una referencia coincidente concede permiso

   El comportamiento del cliente puede variar y no debe suponerse seguro sin evidencia.

3. Omitir el proceso de revisión de licencias del repositorio

   Un comentario no aplica la validación de entradas.

4. Mantener la validación requerida y medir el rendimiento **[CORRECT]**

   Una mejora de rendimiento no justifica incumplir requisitos de corrección o seguridad.

**Concept:** Conservación de restricciones de seguridad

**Authored coaching hints:**

- ¿Qué requisitos deben seguir cumpliéndose tras la optimización?
- ¿Se puede mejorar el rendimiento sin quitar la validación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que prevalece quando uma alteração de desempenho remove a validação de entrada exigida?

1. Considerar liberado para reutilização o código gerado

   Ganho mensurável de velocidade não basta se proteções importantes forem perdidas.

2. Supor que uma referência correspondente concede permissão

   O comportamento do cliente pode variar e não deve ser considerado seguro sem evidência.

3. Dispensar o processo de revisão de licenças do repositório

   Um comentário não aplica validação de entrada.

4. Manter a validação exigida e medir o desempenho **[CORRECT]**

   Melhoria de desempenho não justifica violar requisitos de correção ou segurança.

**Concept:** Preservação de restrições de segurança

**Authored coaching hints:**

- Quais requisitos devem continuar verdadeiros após a otimização?
- É possível melhorar o desempenho sem remover a validação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-036:ae474a33c1b3c9da562b1f89eb781082edb49486d342c230e377fa0fc10984ba -->
## Question 36: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-036`

**Content revision:** `ae474a33c1b3c9da562b1f89eb781082edb49486d342c230e377fa0fc10984ba`

**en review revision:** `4b33fbea15a405fb3a1aaf5b5b251bb0544b94a2cfe8854490d602fb681abdfc`
**es review revision:** `f2d6af4518dcc5c156f0133ee04534b4dc382607201368cd64aa54c4df899c73`
**pt-BR review revision:** `74be08cda32a1bd5ee4f8508ba2a217bd342d341f7e83c99c5c258bcb0b4a610`

### English

How should a reviewer assess a possible null dereference when a guard may apply?

1. Trace whether the guard covers each path **[CORRECT]**

   Checking control flow resolves whether the guard protects all relevant paths.

2. Dismiss the result because AI can be wrong

   AI findings can be false positives or valid issues; evidence is needed.

3. Accept the change without inspection

   A finding should be verified rather than accepted automatically.

4. Rewrite the whole module immediately

   A broad rewrite is unnecessary before confirming the behavior.

**Concept:** Triage of AI review findings

**Authored coaching hints:**

- Which execution paths reach the dereference?
- Does the guard dominate every path where the value is used?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debería evaluar una persona revisora una posible desreferencia nula si podría haber una guarda?

1. Comprobar si la guarda cubre cada ruta **[CORRECT]**

   Revisar el flujo de control permite saber si la guarda protege todos los caminos pertinentes.

2. Descartar el resultado porque la IA puede fallar

   Los hallazgos de IA pueden ser falsos positivos o problemas válidos; hace falta evidencia.

3. Aceptar el cambio sin inspeccionarlo

   Un hallazgo debe comprobarse, no aceptarse automáticamente.

4. Reescribir todo el módulo de inmediato

   No hace falta reescribir ampliamente antes de confirmar el comportamiento.

**Concept:** Clasificación de hallazgos de revisión de IA

**Authored coaching hints:**

- ¿Qué rutas de ejecución llegan a la desreferencia?
- ¿La guarda cubre todos los caminos en los que se usa el valor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um revisor deve avaliar uma possível desreferência nula quando uma proteção pode se aplicar?

1. Verificar se a proteção cobre cada caminho **[CORRECT]**

   Verificar o fluxo de controle determina se a proteção cobre todos os caminhos relevantes.

2. Descartar o resultado porque a IA pode errar

   Achados de IA podem ser falsos positivos ou problemas válidos; é preciso evidência.

3. Aceitar a alteração sem inspecioná-la

   Um achado deve ser verificado, não aceito automaticamente.

4. Reescrever todo o módulo imediatamente

   Uma reescrita ampla não é necessária antes de confirmar o comportamento.

**Concept:** Triagem de achados de revisão por IA

**Authored coaching hints:**

- Quais caminhos de execução chegam à desreferência?
- A proteção cobre todos os caminhos em que o valor é usado?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-037:0808996e9333f318a46eb841e3016ccd9f177a9cf61454e9bcc16e33ef988f0a -->
## Question 37: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-037`

**Content revision:** `0808996e9333f318a46eb841e3016ccd9f177a9cf61454e9bcc16e33ef988f0a`

**en review revision:** `58f813fcf0b7fd802afcc0afccd6f0f5ee0e6f8d820dbc2b2ea70c9ff2be9989`
**es review revision:** `c528b44aca49567970794ecce0f585a2819b37be2ae7e5941e1aa3e6a7551ff5`
**pt-BR review revision:** `e32e1a32085b90b4d6692a5cbb47e6acd4953df5cd9d337d94be7e8d0ae2300e`

### English

Why should a universal regex for international postal addresses be treated cautiously?

1. Assume the regex cannot match digits

   Regular expressions can match digits; that does not make this use universal.

2. Address formats vary by region **[CORRECT]**

   Postal formats differ and a universal pattern may reject valid addresses or accept invalid ones.

3. Prefer the shortest code to review

   Brevity does not guarantee readability or correctness.

4. Rely on the model's country-code claim

   Mentioning country codes does not prove coverage of all regional formats.

**Concept:** Challenging overbroad output

**Authored coaching hints:**

- How much variation exists across the intended regions?
- Could a universal rule exclude valid users?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué conviene tratar con cautela una expresión regular universal para direcciones postales internacionales?

1. Suponer que la expresión regular no coincide con dígitos

   Las expresiones regulares pueden reconocer dígitos, pero eso no vuelve universal este uso.

2. Los formatos varían según la región **[CORRECT]**

   Los formatos postales varían; un patrón universal puede rechazar direcciones válidas o aceptar inválidas.

3. Preferir el código más corto para revisar

   La brevedad no garantiza legibilidad ni corrección.

4. Confiar en la afirmación del modelo sobre el código de país

   Mencionar códigos de país no demuestra cobertura de todos los formatos regionales.

**Concept:** Cuestionamiento de resultados demasiado amplios

**Authored coaching hints:**

- ¿Cuánta variación existe entre las regiones previstas?
- ¿Una regla universal podría excluir a personas con direcciones válidas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que uma expressão regular universal para endereços postais internacionais deve ser tratada com cautela?

1. Supor que a expressão regular não corresponde a dígitos

   Expressões regulares podem corresponder a dígitos, mas isso não torna o uso universal.

2. Os formatos variam por região **[CORRECT]**

   Formatos postais variam; um padrão universal pode rejeitar endereços válidos ou aceitar inválidos.

3. Preferir o código mais curto para revisar

   Brevidade não garante legibilidade nem correção.

4. Confiar na afirmação do modelo sobre o código do país

   Mencionar códigos de país não comprova cobertura de todos os formatos regionais.

**Concept:** Questionamento de saídas amplas demais

**Authored coaching hints:**

- Quanta variação existe entre as regiões pretendidas?
- Uma regra universal poderia excluir pessoas com endereços válidos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-038:9cecee0015e54a05f2330ca27910d72c020a1002addf94bbf98600c36ccc39f8 -->
## Question 38: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-038`

**Content revision:** `9cecee0015e54a05f2330ca27910d72c020a1002addf94bbf98600c36ccc39f8`

**en review revision:** `4115c24e434a8590e4e37356fbf892d142f0f15c768102880c05039ca372bbaa`
**es review revision:** `33fdae2d817d2129a9be5cce71697b6d384727834e2864c1691b3450725a586f`
**pt-BR review revision:** `b3a97ee5359ed1762e76ff7c95093833969bac54eaeb9476a9dd2ca7dd18f7b5`

### English

Which outcomes help evaluate responsible Copilot adoption?

1. The total number of prompts sent

   Prompt volume measures use, not benefit or quality.

2. Whether every developer accepted at least one suggestion

   Any acceptance count alone is insufficient to evaluate outcomes.

3. Quality, time, defects, and accessibility **[CORRECT]**

   A balanced evaluation considers outcomes, quality, risks, and the people affected.

4. The number of generated lines, regardless of later rework

   Generated volume can rise even when work requires rework or creates defects.

**Concept:** Responsible evaluation of adoption

**Authored coaching hints:**

- What outcomes matter beyond tool activity?
- Can speed be assessed without also checking quality and impact?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué resultados ayudan a evaluar una adopción responsable de Copilot?

1. Cantidad total de solicitudes enviadas

   El volumen de solicitudes mide uso, no beneficio ni calidad.

2. Si cada persona aceptó al menos una sugerencia

   El número de aceptaciones por sí solo no basta para evaluar resultados.

3. Calidad, tiempo, defectos y accesibilidad **[CORRECT]**

   Una evaluación equilibrada considera resultados, calidad, riesgos y personas afectadas.

4. Cantidad de líneas generadas, sin considerar el retrabajo

   El volumen generado puede aumentar aunque haya retrabajo o defectos.

**Concept:** Evaluación responsable de la adopción

**Authored coaching hints:**

- ¿Qué resultados importan además de la actividad de la herramienta?
- ¿Se puede evaluar la rapidez sin revisar también calidad e impacto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais resultados ajudam a avaliar a adoção responsável do Copilot?

1. Número total de prompts enviados

   Volume de prompts mede uso, não benefício ou qualidade.

2. Se cada desenvolvedor aceitou ao menos uma sugestão

   Contagem de aceitações, sozinha, é insuficiente para avaliar resultados.

3. Qualidade, tempo, defeitos e acessibilidade **[CORRECT]**

   Uma avaliação equilibrada considera resultados, qualidade, riscos e as pessoas afetadas.

4. Quantidade de linhas geradas, independentemente do retrabalho

   Volume gerado pode crescer mesmo com retrabalho ou defeitos.

**Concept:** Avaliação responsável da adoção

**Authored coaching hints:**

- Quais resultados importam além da atividade da ferramenta?
- É possível avaliar rapidez sem verificar também qualidade e impacto?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-039:f3cd5e29844ee28fae8a43aa8d625708c2a20d74001cc0e3bfe040562e1df067 -->
## Question 39: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-039`

**Content revision:** `f3cd5e29844ee28fae8a43aa8d625708c2a20d74001cc0e3bfe040562e1df067`

**en review revision:** `f99829519bac114cc6cdb9203facf543a28c8bb4431238d23d00f3f52d9560f9`
**es review revision:** `a706dc99916898b9c579ac4c69c007bae647d5e5672c79c5a146dd8343e68a4a`
**pt-BR review revision:** `9b7d089c7793d6d53104551f4608ed21be22e3c771f05a8d720da779b913604a`

### English

How should a team respond to a serious defect in a released Copilot-assisted change?

1. Leave the serious defect because a person approved it

   Human approval does not make a serious defect harmless.

2. Wait for the next model update to correct it

   Model changes do not automatically change deployed software.

3. Remove AI attribution and close the issue without action

   Removing attribution does not mitigate impact or fix the defect.

4. Use the incident process to mitigate and correct **[CORRECT]**

   Existing operational processes apply to defects regardless of how code was authored.

**Concept:** Post-release accountability

**Authored coaching hints:**

- What immediate risks and affected users must be assessed?
- Does the origin of the code alter the response to an incident?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debería responder un equipo ante un defecto grave en un cambio publicado con ayuda de Copilot?

1. Dejar el defecto grave porque una persona lo aprobó

   La aprobación humana no vuelve inocuo un defecto grave.

2. Esperar la siguiente actualización del modelo para corregirlo

   Los cambios del modelo no modifican automáticamente el software desplegado.

3. Quitar la atribución de IA y cerrar el issue sin actuar

   Quitar la atribución no mitiga el impacto ni corrige el defecto.

4. Aplicar el proceso de incidentes para mitigar y corregir **[CORRECT]**

   Los procesos operativos existentes se aplican a los defectos sin importar cómo se escribió el código.

**Concept:** Responsabilidad posterior a la publicación

**Authored coaching hints:**

- ¿Qué riesgos inmediatos y usuarios afectados deben evaluarse?
- ¿El origen del código cambia la respuesta a un incidente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como uma equipe deve responder a um defeito grave em uma alteração publicada com ajuda do Copilot?

1. Manter o defeito grave porque uma pessoa aprovou

   A aprovação humana não torna um defeito grave inofensivo.

2. Aguardar a próxima atualização do modelo para corrigi-lo

   Mudanças no modelo não alteram automaticamente o software implantado.

3. Remover a atribuição de IA e fechar a issue sem agir

   Remover a atribuição não mitiga o impacto nem corrige o defeito.

4. Usar o processo de incidentes para mitigar e corrigir **[CORRECT]**

   Processos operacionais existentes se aplicam a defeitos independentemente de como o código foi escrito.

**Concept:** Responsabilização após a publicação

**Authored coaching hints:**

- Quais riscos imediatos e usuários afetados precisam ser avaliados?
- A origem do código muda a resposta a um incidente?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-040:4ccb9d7b53b580592bb7122f5e61ca748b752bdfe9c384ee15a9d363bad45d13 -->
## Question 40: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-040`

**Content revision:** `4ccb9d7b53b580592bb7122f5e61ca748b752bdfe9c384ee15a9d363bad45d13`

**en review revision:** `a16fae936a1b36dd8d73bc759121d16fc209cfaa7a036c477b19ce3c415c0b22`
**es review revision:** `32ebd6ac57c94aa2b9f91a51d01396113737052f460900078a09c4fd61fc7da0`
**pt-BR review revision:** `1d9dfcff7d6def440822ef375731121fa6e4f150405131e6ec7f178776a66626`

### English

A generated ranking feature will influence access to public housing. Which evaluation is most appropriate before deployment?

1. Assess impact, failure modes, and recourse **[CORRECT]**

   High-impact decisions need evaluation of outcomes, fairness, harms, and ways to address errors.

2. Measure execution speed without checking outcomes

   Performance does not establish fairness or suitability.

3. Compare only with historical results from the same system

   Historical decisions can encode prior bias and require scrutiny.

4. Ask the model to certify that its output is unbiased

   A model's own assertion is not evidence of unbiased outcomes.

**Concept:** Consequential AI-assisted systems

**Authored coaching hints:**

- Who could be materially affected by the ranking?
- What evidence can reveal unequal outcomes and provide recourse?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una función de clasificación generada influirá en el acceso a vivienda pública. ¿Qué evaluación es más apropiada antes del despliegue?

1. Evaluar impacto, fallos y vías de reclamación **[CORRECT]**

   Las decisiones de alto impacto requieren evaluar resultados, equidad, daños y mecanismos para corregir errores.

2. Medir la velocidad de ejecución sin comprobar los resultados

   El rendimiento no demuestra equidad ni idoneidad.

3. Comparar solo con resultados históricos del mismo sistema

   Las decisiones históricas pueden contener sesgos y deben examinarse.

4. Pedir al modelo que certifique que su salida es imparcial

   La afirmación del propio modelo no es evidencia de resultados imparciales.

**Concept:** Sistemas de IA de alto impacto

**Authored coaching hints:**

- ¿Quién podría verse afectado de forma importante por la clasificación?
- ¿Qué evidencia revelaría resultados desiguales y permitiría reclamar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um recurso de classificação gerado influenciará o acesso à moradia pública. Qual avaliação é mais apropriada antes da implantação?

1. Avaliar impacto, falhas e meios de contestação **[CORRECT]**

   Decisões de alto impacto exigem avaliar resultados, equidade, danos e formas de corrigir erros.

2. Medir a velocidade de execução sem conferir os resultados

   Desempenho não comprova equidade nem adequação.

3. Comparar apenas com resultados históricos do mesmo sistema

   Decisões históricas podem conter vieses e precisam de análise.

4. Pedir ao modelo que certifique que sua saída é imparcial

   A afirmação do próprio modelo não é evidência de resultados imparciais.

**Concept:** Sistemas de IA de alto impacto

**Authored coaching hints:**

- Quem pode ser significativamente afetado pela classificação?
- Que evidência revelaria resultados desiguais e permitiria contestação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-041:3eca69ebbcc2fc795249dbb17272aa743a891397a1d83c71d8622e69527c42f1 -->
## Question 41: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-041`

**Content revision:** `3eca69ebbcc2fc795249dbb17272aa743a891397a1d83c71d8622e69527c42f1`

**en review revision:** `66f905dd95a9dc6c48c8ce1781131e05fc5d06939742abfc04af3248ffe37525`
**es review revision:** `a3e33f8250130230799dbcbe4a1b6b7c00a39172e2a04a1d3b557fc7c778418d`
**pt-BR review revision:** `7f146370e8ef8358e6e3a97ed4b59f0d8dccd2271b9464d5c86da8b7c7341ebb`

### English

Which integration provides Copilot editor features in JetBrains IDEs?

1. GitHub Copilot plugin **[CORRECT]**

   The plugin integrates Copilot with the editor.

2. GitHub CLI executable

   GitHub CLI manages GitHub resources from a terminal.

3. GitHub Actions runner

   Actions runners execute workflows.

4. Git credential helper

   Credential helpers store Git authentication details.

**Concept:** IDE integration

**Authored coaching hints:**

- Distinguish editor integration from terminal tools.
- Which component adds features inside an IDE?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué integración proporciona las funciones de editor de Copilot en los IDE de JetBrains?

1. Plugin de GitHub Copilot **[CORRECT]**

   El plugin integra Copilot con el editor.

2. Ejecutable de GitHub CLI

   GitHub CLI administra recursos de GitHub desde una terminal.

3. Ejecutor de GitHub Actions

   Los ejecutores de Actions ejecutan flujos de trabajo.

4. Asistente de credenciales de Git

   Los asistentes de credenciales almacenan datos de autenticación de Git.

**Concept:** Integración con el IDE

**Authored coaching hints:**

- Distingue la integración del editor de las herramientas de terminal.
- ¿Qué componente añade funciones dentro de un IDE?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual integração oferece os recursos de editor do Copilot nos IDEs da JetBrains?

1. Plugin do GitHub Copilot **[CORRECT]**

   O plugin integra o Copilot ao editor.

2. Executável do GitHub CLI

   O GitHub CLI gerencia recursos do GitHub pelo terminal.

3. Executor do GitHub Actions

   Executores do Actions executam fluxos de trabalho.

4. Auxiliar de credenciais do Git

   Auxiliares de credenciais armazenam dados de autenticação do Git.

**Concept:** Integração com o IDE

**Authored coaching hints:**

- Diferencie integração com o editor de ferramentas de terminal.
- Qual componente adiciona recursos dentro de um IDE?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-042:5579640bf5f1c4d1692c2996feb0017c558fe320251cd011df751f1936133b3d -->
## Question 42: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-042`

**Content revision:** `5579640bf5f1c4d1692c2996feb0017c558fe320251cd011df751f1936133b3d`

**en review revision:** `bdfca1e6b90f1b23e2a9ca4af872b25655c568abe58303c0dfbc5f4610d7614a`
**es review revision:** `55e6def1587aaba9a6bbfecbc41dc6554e09be7f0b4773851623183480929e4b`
**pt-BR review revision:** `2cf0083b095c6c55636b7946a4d4b104846a71661d2151847e65e2cfa0ccf280`

### English

Which Copilot feature offers code continuations as you type?

1. Prompt files

   Prompt files store reusable requests.

2. Inline suggestions **[CORRECT]**

   Inline suggestions offer autocomplete-style code.

3. Pull request summaries

   PR summaries describe proposed changes.

4. Code review

   Code review provides feedback on code.

**Concept:** Code completions

**Authored coaching hints:**

- Consider where assistance appears while typing.
- Separate code entry from reviewing changes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función de Copilot ofrece continuaciones de código mientras escribes?

1. Archivos de prompts

   Los archivos de prompts guardan solicitudes reutilizables.

2. Sugerencias en línea **[CORRECT]**

   Las sugerencias en línea ofrecen autocompletado de código.

3. Resúmenes de pull requests

   Los resúmenes describen los cambios propuestos.

4. Revisión de código

   La revisión proporciona comentarios sobre el código.

**Concept:** Completado de código

**Authored coaching hints:**

- Piensa dónde aparece la ayuda mientras escribes.
- Distingue escribir código de revisar cambios.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do Copilot oferece continuações de código enquanto você digita?

1. Arquivos de prompts

   Arquivos de prompts guardam solicitações reutilizáveis.

2. Sugestões em linha **[CORRECT]**

   Sugestões em linha oferecem preenchimento de código.

3. Resumos de pull requests

   Resumos descrevem as alterações propostas.

4. Revisão de código

   A revisão fornece comentários sobre o código.

**Concept:** Preenchimento de código

**Authored coaching hints:**

- Considere onde a assistência aparece durante a digitação.
- Diferencie escrever código de revisar alterações.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-043:3865969b133632603a36c998d631ffa30bcb87a82cc3ae2a7b01278d3c34f0af -->
## Question 43: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-043`

**Content revision:** `3865969b133632603a36c998d631ffa30bcb87a82cc3ae2a7b01278d3c34f0af`

**en review revision:** `41febd3a2fdf5459f0fb1b7950e51dd027c5a5fc67de84dabefbabff68f5ab2b`
**es review revision:** `5dbdbbb80b073b0440969c1f9f5bfbdcefc0716da90eadfb63578d1ec0b2539b`
**pt-BR review revision:** `c6fb4031dd33dd72be90e49f5323353c2cf565b012c5c39b8aeaf74c4fa0d129`

### English

How can you request a focused change beside selected code in VS Code?

1. Open a shared Space

   Spaces organize shared context.

2. Generate a pull request summary

   A PR summary describes a set of changes.

3. Use inline chat **[CORRECT]**

   Inline chat provides help within the code editor.

4. Request a pull request review

   PR review evaluates changes in a review workflow.

**Concept:** Inline chat

**Authored coaching hints:**

- Consider the interaction location, not only the task.
- Which workflow keeps the request beside the code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puedes solicitar un cambio puntual junto al código seleccionado en VS Code?

1. Abrir un Space compartido

   Spaces organiza contexto compartido.

2. Generar un resumen de pull request

   Un resumen de pull request describe un conjunto de cambios.

3. Usar el chat en línea **[CORRECT]**

   El chat en línea ofrece ayuda dentro del editor de código.

4. Solicitar una revisión de pull request

   La revisión evalúa cambios en un flujo de revisión.

**Concept:** Chat en línea

**Authored coaching hints:**

- Piensa en el lugar de interacción, no solo en la tarea.
- ¿Qué flujo mantiene la solicitud junto al código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como solicitar uma alteração pontual junto ao código selecionado no VS Code?

1. Abrir um Space compartilhado

   Spaces organiza contexto compartilhado.

2. Gerar um resumo de pull request

   Um resumo de pull request descreve um conjunto de alterações.

3. Usar o chat em linha **[CORRECT]**

   O chat em linha oferece ajuda dentro do editor de código.

4. Solicitar uma revisão de pull request

   A revisão avalia alterações em um fluxo de revisão.

**Concept:** Chat em linha

**Authored coaching hints:**

- Considere o local da interação, não apenas a tarefa.
- Qual fluxo mantém a solicitação junto ao código?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-044:79f029c167d2d7a00b7a3dd5d664295bcc6c5d0ced4bb3bd375bae88f747fa1c -->
## Question 44: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-044`

**Content revision:** `79f029c167d2d7a00b7a3dd5d664295bcc6c5d0ced4bb3bd375bae88f747fa1c`

**en review revision:** `8e17922428a685214e9f5ee8de36e8f1fba6c97c8f5a003db46dfefac802d412`
**es review revision:** `a4634011442d306642d3efa2d5f81d0f7709cc606be1518f845b15e325b333c8`
**pt-BR review revision:** `c9557b63896eab19c4f30c87a673190a9f2d0dbe3bb6771f5ce01a2db31148b8`

### English

Which VS Code workflow can find files, edit code, and run tests iteratively?

1. Inline completion

   A completion proposes code while typing.

2. Pull request summary

   A PR summary describes changes.

3. Read-only code explanation

   An explanation does not itself execute an implementation workflow.

4. Agent mode **[CORRECT]**

   Agent mode combines discovery, edits, commands, and validation.

**Concept:** Agent mode

**Authored coaching hints:**

- Look for a workflow that uses tools as well as generates text.
- The task includes both modification and validation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué flujo de VS Code puede buscar archivos, editar código y ejecutar pruebas de forma iterativa?

1. Completado en línea

   El completado propone código mientras escribes.

2. Resumen de pull request

   Un resumen describe cambios.

3. Explicación de código de solo lectura

   Una explicación no ejecuta por sí misma un flujo de implementación.

4. Modo agente **[CORRECT]**

   El modo agente combina búsqueda, ediciones, comandos y validación.

**Concept:** Modo agente

**Authored coaching hints:**

- Busca un flujo que use herramientas además de generar texto.
- La tarea incluye modificación y validación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual fluxo do VS Code pode localizar arquivos, editar código e executar testes iterativamente?

1. Preenchimento em linha

   O preenchimento propõe código durante a digitação.

2. Resumo de pull request

   Um resumo descreve alterações.

3. Explicação de código somente leitura

   Uma explicação não executa por si só um fluxo de implementação.

4. Modo agente **[CORRECT]**

   O modo agente combina descoberta, edições, comandos e validação.

**Concept:** Modo agente

**Authored coaching hints:**

- Procure um fluxo que use ferramentas além de gerar texto.
- A tarefa inclui modificação e validação.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-045:325734abc79c70e61c360ea12f39422e2640c9c70c742defe77187fbb3239432 -->
## Question 45: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-045`

**Content revision:** `325734abc79c70e61c360ea12f39422e2640c9c70c742defe77187fbb3239432`

**en review revision:** `6a729cb9ac35ec7660baa9030eb506f32ab6b480b946000a547574eecf372eb4`
**es review revision:** `c75eed69db27329a22c7cbd13c4858ba77ab7cb66219b73126adf7808a1166bd`
**pt-BR review revision:** `0b5e278d2e90339706d30ca0405fd328960a4e2b7db1e491ef1c6dc47c94e375`

### English

Which VS Code Copilot Chat command describes how existing code works?

1. /explain **[CORRECT]**

   /explain requests an explanation of code.

2. /fix

   /fix requests a proposed correction.

3. /tests

   /tests requests unit tests.

4. /fixTestFailure

   /fixTestFailure investigates a failing test.

**Concept:** VS Code explanation command

**Authored coaching hints:**

- Identify the requested output: understanding, edits, or tests.
- Slash-command meanings depend on the client.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en VS Code describe cómo funciona el código existente?

1. /explain **[CORRECT]**

   /explain solicita una explicación del código.

2. /fix

   /fix solicita una corrección propuesta.

3. /tests

   /tests solicita pruebas unitarias.

4. /fixTestFailure

   /fixTestFailure investiga una prueba fallida.

**Concept:** Comando de explicación en VS Code

**Authored coaching hints:**

- Identifica el resultado solicitado: comprensión, ediciones o pruebas.
- El significado de los comandos depende del cliente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no VS Code descreve como o código existente funciona?

1. /explain **[CORRECT]**

   /explain solicita uma explicação do código.

2. /fix

   /fix solicita uma proposta de correção.

3. /tests

   /tests solicita testes unitários.

4. /fixTestFailure

   /fixTestFailure investiga um teste com falha.

**Concept:** Comando de explicação no VS Code

**Authored coaching hints:**

- Identifique o resultado solicitado: compreensão, edições ou testes.
- O significado dos comandos depende do cliente.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-046:89395f0fbc84b65743da16cca82b9689d590fa70e783cccd0a254abf875ec345 -->
## Question 46: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-046`

**Content revision:** `89395f0fbc84b65743da16cca82b9689d590fa70e783cccd0a254abf875ec345`

**en review revision:** `bfd9120b1a7ab8d708635f8b98492dec0bb0ca7988491e085bce56eee63a56ac`
**es review revision:** `55ca5b2eafb93d5198dd2fa45abc292f807671d7c08e6b5d40fe46f683eb0138`
**pt-BR review revision:** `df02b0be641b55110ecd71dcd1315e0483d0388eec23af7cddde836636d991c1`

### English

How do next edit suggestions differ from cursor-only completion?

1. They only generate a new file from a prompt

   They can modify existing code rather than only create files.

2. They predict edits beyond the cursor **[CORRECT]**

   They can predict both the location and content of a subsequent edit.

3. They only append code at the cursor

   Next edit suggestions are not limited to appending at the cursor.

4. They only explain existing code in chat

   They propose code edits rather than only explaining code.

**Concept:** Next edit suggestions

**Authored coaching hints:**

- Compare completing text with maintaining related code.
- Think about the edits needed after renaming a symbol.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo difieren las sugerencias de siguiente edición del completado limitado al cursor?

1. Solo generan un archivo nuevo a partir de un prompt

   Pueden modificar código existente, no solo crear archivos.

2. Predicen cambios más allá del cursor **[CORRECT]**

   Pueden predecir la ubicación y el contenido de un cambio posterior.

3. Solo añaden código en el cursor

   No se limitan a añadir código en el cursor.

4. Solo explican código existente en el chat

   Proponen cambios de código en lugar de limitarse a explicarlo.

**Concept:** Sugerencias de siguiente edición

**Authored coaching hints:**

- Compara completar texto con mantener código relacionado.
- Piensa en los cambios necesarios después de renombrar un símbolo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como as sugestões de próxima edição diferem do preenchimento limitado ao cursor?

1. Apenas geram um arquivo novo a partir de um prompt

   Podem modificar código existente, não apenas criar arquivos.

2. Preveem alterações além do cursor **[CORRECT]**

   Podem prever o local e o conteúdo de uma alteração posterior.

3. Apenas adicionam código no cursor

   Não se limitam a adicionar código no cursor.

4. Apenas explicam código existente no chat

   Propõem alterações de código em vez de apenas explicá-lo.

**Concept:** Sugestões de próxima edição

**Authored coaching hints:**

- Compare completar texto com manter código relacionado.
- Pense nas alterações necessárias após renomear um símbolo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-047:0381de6e349b6c3e213e2280b109156706ab0da228b782bb7b501dbc23f819ea -->
## Question 47: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-047`

**Content revision:** `0381de6e349b6c3e213e2280b109156706ab0da228b782bb7b501dbc23f819ea`

**en review revision:** `7dfd4fbb1c914b17d5632eb2fcf14f7e6a41ae215bfbd8fee95ef2fcb09312a4`
**es review revision:** `f154dec0c5cae577976ab3567628a144c620e9c8d8cb20fc747e967931301075`
**pt-BR review revision:** `cd3460390531cd4942bf0ce7ffd9cc205063a9c5ba1717d4ab4447c83b5f5a69`

### English

What is GitHub Copilot CLI designed to provide?

1. A hosted Git repository service

   It does not host Git repositories.

2. A replacement for the Git protocol

   It uses development tools rather than replacing Git protocols.

3. A terminal coding agent **[CORRECT]**

   Copilot CLI brings conversational coding and tool use to a terminal.

4. A graphical Git merge editor

   It is not a graphical merge editor.

**Concept:** Copilot CLI purpose

**Authored coaching hints:**

- Distinguish the interface from repository hosting.
- Consider how a developer interacts with this product.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué está diseñado para ofrecer GitHub Copilot CLI?

1. Un servicio de alojamiento de repositorios Git

   No aloja repositorios Git.

2. Un reemplazo del protocolo Git

   Usa herramientas de desarrollo en lugar de reemplazar protocolos de Git.

3. Un agente de programación en terminal **[CORRECT]**

   Copilot CLI lleva la programación conversacional y el uso de herramientas a una terminal.

4. Un editor gráfico de fusiones de Git

   No es un editor gráfico de fusiones.

**Concept:** Propósito de Copilot CLI

**Authored coaching hints:**

- Distingue la interfaz del alojamiento de repositorios.
- Piensa en cómo interactúa el desarrollador con este producto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que o GitHub Copilot CLI foi projetado para oferecer?

1. Um serviço de hospedagem de repositórios Git

   Não hospeda repositórios Git.

2. Um substituto do protocolo Git

   Usa ferramentas de desenvolvimento em vez de substituir protocolos do Git.

3. Um agente de programação no terminal **[CORRECT]**

   O Copilot CLI leva programação conversacional e uso de ferramentas ao terminal.

4. Um editor gráfico de mesclagens do Git

   Não é um editor gráfico de mesclagens.

**Concept:** Finalidade do Copilot CLI

**Authored coaching hints:**

- Diferencie a interface da hospedagem de repositórios.
- Considere como o desenvolvedor interage com esse produto.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-048:bff1eb7f5c45edb8a13e5696ed0020e0a14b79a512dabe827f7b1383e0a521e3 -->
## Question 48: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-048`

**Content revision:** `bff1eb7f5c45edb8a13e5696ed0020e0a14b79a512dabe827f7b1383e0a521e3`

**en review revision:** `5fbc98e13af9dfa2f24553ec4d439706b642c4ff5714ddfa68ee77a5f17e1ddb`
**es review revision:** `629c81bbb4a184e5617dfec4d18b962c76c29958bf2b335c9a2b44c4c889c83e`
**pt-BR review revision:** `a6876f0987c59ceef3f16e53301e3a21ffa1855e08589e777dd185743e3367d0`

### English

Which npm command installs the standalone GitHub Copilot CLI?

1. npm install -g @github/copilot-cli

   @github/copilot-cli is not the documented package name.

2. npm install -g github-copilot-chat

   github-copilot-chat is not the documented CLI package.

3. npm install -g @github/gh-copilot

   @github/gh-copilot is not the standalone package name.

4. npm install -g @github/copilot **[CORRECT]**

   @github/copilot is the documented package.

**Concept:** CLI installation package

**Authored coaching hints:**

- Use the current standalone CLI documentation.
- Do not infer a package name from an older extension.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de npm instala GitHub Copilot CLI independiente?

1. npm install -g @github/copilot-cli

   @github/copilot-cli no es el nombre de paquete documentado.

2. npm install -g github-copilot-chat

   github-copilot-chat no es el paquete de CLI documentado.

3. npm install -g @github/gh-copilot

   @github/gh-copilot no es el nombre del paquete independiente.

4. npm install -g @github/copilot **[CORRECT]**

   @github/copilot es el paquete documentado.

**Concept:** Paquete de instalación de CLI

**Authored coaching hints:**

- Usa la documentación actual de la CLI independiente.
- No deduzcas el paquete a partir de una extensión anterior.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando npm instala o GitHub Copilot CLI independente?

1. npm install -g @github/copilot-cli

   @github/copilot-cli não é o nome de pacote documentado.

2. npm install -g github-copilot-chat

   github-copilot-chat não é o pacote de CLI documentado.

3. npm install -g @github/gh-copilot

   @github/gh-copilot não é o nome do pacote independente.

4. npm install -g @github/copilot **[CORRECT]**

   @github/copilot é o pacote documentado.

**Concept:** Pacote de instalação da CLI

**Authored coaching hints:**

- Use a documentação atual da CLI independente.
- Não deduza o pacote a partir de uma extensão antiga.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>

<!-- certification-coach-question:copilot-049:679fd1c5263511c6ad85bf9a2ef4352ad0d266d35ad436008dcec3ecaf8e4f99 -->
## Question 49: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-049`

**Content revision:** `679fd1c5263511c6ad85bf9a2ef4352ad0d266d35ad436008dcec3ecaf8e4f99`

**en review revision:** `dced74ade86480b833c7ffe1b832ce5bb99445c93b353b5ca94ded86c849e7d8`
**es review revision:** `a270bac992b77acf8ccdc851037344e4e6c3ae6570fce51858204a6900bf4680`
**pt-BR review revision:** `49bc479a46640cf6458a6e0ae7d9e4740b33f5596dcc6aea99f686afbfccd0c1`

### English

Which terminal command opens the standalone Copilot CLI interactive interface?

1. copilot **[CORRECT]**

   copilot launches the interactive interface.

2. copilot init

   init initializes repository instructions.

3. copilot version

   version displays version information.

4. copilot completion bash

   completion prints a shell completion script.

**Concept:** Starting interactive CLI

**Authored coaching hints:**

- Distinguish starting a session from preparing configuration.
- The requested command should open a conversation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de terminal abre la interfaz interactiva de Copilot CLI independiente?

1. copilot **[CORRECT]**

   copilot inicia la interfaz interactiva.

2. copilot init

   init inicializa instrucciones del repositorio.

3. copilot version

   version muestra información de versión.

4. copilot completion bash

   completion imprime un script de autocompletado del shell.

**Concept:** Inicio de CLI interactiva

**Authored coaching hints:**

- Distingue iniciar una sesión de preparar la configuración.
- El comando solicitado debe abrir una conversación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando de terminal abre a interface interativa do Copilot CLI independente?

1. copilot **[CORRECT]**

   copilot inicia a interface interativa.

2. copilot init

   init inicializa instruções do repositório.

3. copilot version

   version exibe informações de versão.

4. copilot completion bash

   completion imprime um script de preenchimento do shell.

**Concept:** Inicialização da CLI interativa

**Authored coaching hints:**

- Diferencie iniciar uma sessão de preparar configurações.
- O comando solicitado deve abrir uma conversa.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference>

<!-- certification-coach-question:copilot-050:3111d78283787129e7bfe8a91fbfb5bde09228df044ab002e42f0417433ef057 -->
## Question 50: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-050`

**Content revision:** `3111d78283787129e7bfe8a91fbfb5bde09228df044ab002e42f0417433ef057`

**en review revision:** `8482bf44268da6ff06c2de177a26e8ded688dba3cda9dc51eec496cbfb5a6c87`
**es review revision:** `d488607ab5d816cfe6918f70d110d905441d7b2d338364229b96875715f1c15f`
**pt-BR review revision:** `62fa801c3393c646d5b73eb42e02e26c206920c17a406693e87c610ca068e25d`

### English

Which Copilot CLI invocation supplies a prompt without opening the interactive interface?

1. copilot --continue

   --continue resumes the most recent local session.

2. copilot -p "Summarize" **[CORRECT]**

   -p supplies a programmatic prompt.

3. copilot --agent reviewer

   --agent selects an agent but does not supply a request.

4. copilot --resume

   --resume selects a saved session.

**Concept:** Programmatic CLI prompt

**Authored coaching hints:**

- A script needs to provide its request as an argument.
- Separate prompt execution from help and setup.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué invocación de Copilot CLI proporciona un prompt sin abrir la interfaz interactiva?

1. copilot --continue

   --continue reanuda la sesión local más reciente.

2. copilot -p "Summarize" **[CORRECT]**

   -p proporciona un prompt programático.

3. copilot --agent reviewer

   --agent selecciona un agente, pero no proporciona una solicitud.

4. copilot --resume

   --resume selecciona una sesión guardada.

**Concept:** Prompt programático de CLI

**Authored coaching hints:**

- Un script necesita proporcionar la solicitud como argumento.
- Distingue la ejecución de prompts de la ayuda y la configuración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chamada do Copilot CLI fornece um prompt sem abrir a interface interativa?

1. copilot --continue

   --continue retoma a sessão local mais recente.

2. copilot -p "Summarize" **[CORRECT]**

   -p fornece um prompt programático.

3. copilot --agent reviewer

   --agent seleciona um agente, mas não fornece uma solicitação.

4. copilot --resume

   --resume seleciona uma sessão salva.

**Concept:** Prompt programático da CLI

**Authored coaching hints:**

- Um script precisa fornecer a solicitação como argumento.
- Diferencie execução de prompts de ajuda e configuração.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference>

<!-- certification-coach-question:copilot-051:e1a660d05a8dadcb6a0505e681367711bd13bdaac73f6024e2786c092e06fc0d -->
## Question 51: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-051`

**Content revision:** `e1a660d05a8dadcb6a0505e681367711bd13bdaac73f6024e2786c092e06fc0d`

**en review revision:** `733427683c8291124df362950b42b0eaf438c82fe179d8ceda09b7abcae5d211`
**es review revision:** `bd318aa19c0da9b2b918d7b70a692d1ebd21b0b7b6653fccf8e8c09059ef642f`
**pt-BR review revision:** `0c04a2c656e7bf2f9726741f2d01eaaedc47da7e9ca83b577f1f8cc3bf8f2ac7`

### English

Which Copilot CLI mode develops an implementation approach before writing code?

1. Allow-all permissions mode

   Allow-all changes permission handling, not planning intent.

2. Shell completion mode

   Shell completion completes terminal command syntax.

3. Plan mode **[CORRECT]**

   Plan mode supports discussing an implementation plan first.

4. Autopilot mode

   Autopilot proceeds with autonomous implementation.

**Concept:** CLI plan mode

**Authored coaching hints:**

- Consider whether the goal is planning or execution.
- Permission breadth is a different concern from task stages.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué modo de Copilot CLI desarrolla un enfoque de implementación antes de escribir código?

1. Modo de permisos Allow-all

   Allow-all cambia los permisos, no la intención de planificación.

2. Modo de autocompletado del shell

   El autocompletado completa la sintaxis de comandos de terminal.

3. Modo de planificación **[CORRECT]**

   El modo de planificación permite discutir primero un plan.

4. Modo Autopilot

   Autopilot avanza con la implementación autónoma.

**Concept:** Modo de planificación de CLI

**Authored coaching hints:**

- Considera si el objetivo es planificar o ejecutar.
- La amplitud de permisos es distinta de las etapas de una tarea.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual modo do Copilot CLI desenvolve uma abordagem de implementação antes de escrever código?

1. Modo de permissões Allow-all

   Allow-all altera permissões, não a intenção de planejamento.

2. Modo de preenchimento do shell

   O preenchimento completa a sintaxe de comandos de terminal.

3. Modo de planejamento **[CORRECT]**

   O modo de planejamento permite discutir um plano primeiro.

4. Modo Autopilot

   Autopilot avança com a implementação autônoma.

**Concept:** Modo de planejamento da CLI

**Authored coaching hints:**

- Considere se o objetivo é planejar ou executar.
- A abrangência de permissões é diferente das etapas de uma tarefa.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-052:e24741e469229498de07ccd1bbd75ccbdff536cf3928db03cc04611257634ecf -->
## Question 52: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-052`

**Content revision:** `e24741e469229498de07ccd1bbd75ccbdff536cf3928db03cc04611257634ecf`

**en review revision:** `8e19a89e19c5e8338a6585db0671dc32ff4b27d9426ecc0805114da782365b0c`
**es review revision:** `23a175a944e39e520aa9d5c453ad1d28873aa0e1002356c2292e0fe1c203ab0d`
**pt-BR review revision:** `7e31832467ae1d688b19117840fa509b327038a65999ff264a0ae1a654608bf8`

### English

At first launch, which interactive Copilot CLI command starts sign-in?

1. /agent

   /agent selects an agent.

2. /resume

   /resume selects a previous session.

3. /context

   /context shows context usage.

4. /login **[CORRECT]**

   /login starts authentication.

**Concept:** CLI interactive authentication

**Authored coaching hints:**

- Account authorization differs from selecting a task or session.
- Use the command appropriate to the interactive client.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En el primer inicio, ¿qué comando interactivo de Copilot CLI inicia la autenticación?

1. /agent

   /agent selecciona un agente.

2. /resume

   /resume selecciona una sesión anterior.

3. /context

   /context muestra el uso del contexto.

4. /login **[CORRECT]**

   /login inicia la autenticación.

**Concept:** Autenticación interactiva de CLI

**Authored coaching hints:**

- Autorizar una cuenta es distinto de seleccionar una tarea o sesión.
- Usa el comando adecuado para el cliente interactivo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na primeira inicialização, qual comando interativo do Copilot CLI inicia a autenticação?

1. /agent

   /agent seleciona um agente.

2. /resume

   /resume seleciona uma sessão anterior.

3. /context

   /context mostra o uso do contexto.

4. /login **[CORRECT]**

   /login inicia a autenticação.

**Concept:** Autenticação interativa da CLI

**Authored coaching hints:**

- Autorizar uma conta é diferente de selecionar uma tarefa ou sessão.
- Use o comando adequado ao cliente interativo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>

<!-- certification-coach-question:copilot-053:5804c4dc47b778d45657d0d1a5920eb05bce4d0e67212b96eb7b29d10471c3dd -->
## Question 53: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-053`

**Content revision:** `5804c4dc47b778d45657d0d1a5920eb05bce4d0e67212b96eb7b29d10471c3dd`

**en review revision:** `dbfa8d21eadb26d3b1b75f9d91c39ab72b9715e98352b7b08bb7c1b1ecb67f9a`
**es review revision:** `da40384c54f5207ff85be871159c835ad491570c1783bcbf09f4d96f6e78bd76`
**pt-BR review revision:** `3e4e8fea4cfe9f8e0296a4fe3d49dcd91ea80528a8c2b7b540b405a07045193b`

### English

Which VS Code Copilot Chat command resets the conversation for an unrelated topic?

1. /clear **[CORRECT]**

   /clear starts a new chat session in VS Code.

2. /new

   /new creates a project in this client.

3. /help

   /help displays usage information.

4. /fixTestFailure

   /fixTestFailure investigates a failing test.

**Concept:** VS Code conversation reset

**Authored coaching hints:**

- The same slash command can differ between clients.
- A fresh conversation is not a new project.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en VS Code reinicia la conversación para un tema no relacionado?

1. /clear **[CORRECT]**

   /clear inicia una nueva sesión de chat en VS Code.

2. /new

   /new crea un proyecto en este cliente.

3. /help

   /help muestra información de uso.

4. /fixTestFailure

   /fixTestFailure investiga una prueba fallida.

**Concept:** Reinicio de conversación en VS Code

**Authored coaching hints:**

- Un mismo comando puede tener funciones distintas según el cliente.
- Una conversación nueva no es un proyecto nuevo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no VS Code reinicia a conversa para um assunto não relacionado?

1. /clear **[CORRECT]**

   /clear inicia uma nova sessão de chat no VS Code.

2. /new

   /new cria um projeto neste cliente.

3. /help

   /help exibe informações de uso.

4. /fixTestFailure

   /fixTestFailure investiga um teste com falha.

**Concept:** Reinício de conversa no VS Code

**Authored coaching hints:**

- Um mesmo comando pode ter funções diferentes conforme o cliente.
- Uma conversa nova não é um projeto novo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-054:a2a24ddbae32aa7fe10f9e60b4cdc035fe97687992b8fa80cd05cf58f34d5581 -->
## Question 54: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-054`

**Content revision:** `a2a24ddbae32aa7fe10f9e60b4cdc035fe97687992b8fa80cd05cf58f34d5581`

**en review revision:** `418de8890ec09c43a982af57daeea55c8f6a1d0804d5ce406b54a787358aa17b`
**es review revision:** `fc81ce94c80e2fe136eaea48bf85c727ed6f9ff6466cd35690d6284325c4caac`
**pt-BR review revision:** `fa1a3717355a5626f8f40abe2eff61bf2179cbbdc2068d85b84ea8c3de62afd2`

### English

Which Copilot CLI command displays a visual overview of current token usage?

1. /agent

   /agent selects a custom agent.

2. /context **[CORRECT]**

   /context visualizes the current context usage.

3. /compact

   /compact compresses conversation history.

4. /resume

   /resume reopens a saved session.

**Concept:** Inspecting CLI context

**Authored coaching hints:**

- Monitoring usage is different from changing history.
- Choose an inspection operation rather than a session switch.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot CLI muestra una vista visual del uso actual de tokens?

1. /agent

   /agent selecciona un agente personalizado.

2. /context **[CORRECT]**

   /context visualiza el uso actual del contexto.

3. /compact

   /compact comprime el historial de conversación.

4. /resume

   /resume reabre una sesión guardada.

**Concept:** Inspección del contexto de CLI

**Authored coaching hints:**

- Supervisar el uso es distinto de modificar el historial.
- Elige una operación de inspección, no un cambio de sesión.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot CLI exibe uma visão visual do uso atual de tokens?

1. /agent

   /agent seleciona um agente personalizado.

2. /context **[CORRECT]**

   /context mostra o uso atual do contexto.

3. /compact

   /compact comprime o histórico da conversa.

4. /resume

   /resume reabre uma sessão salva.

**Concept:** Inspeção do contexto da CLI

**Authored coaching hints:**

- Monitorar o uso é diferente de alterar o histórico.
- Escolha uma operação de inspeção, não uma troca de sessão.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-055:ba92ff57aac9d449878eeef81ab3bd06446df89dc9c3d999bf2eeaef75cb5bdd -->
## Question 55: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-055`

**Content revision:** `ba92ff57aac9d449878eeef81ab3bd06446df89dc9c3d999bf2eeaef75cb5bdd`

**en review revision:** `b39fc8103317ed9e3c25026f5f3ac9e5d5484cb799e3726abbca52175aee3797`
**es review revision:** `21a53c400e1e43974d22a3dc26ba993358abbe1423b06f7a63dffbd01ec15ba4`
**pt-BR review revision:** `f186d9da700e0e71acf3b9aac7e2eb34c7b6be031883f8bc12be64ea328f0f2b`

### English

How can you manually reclaim context space in a long Copilot CLI conversation?

1. /usage

   /usage reports session statistics.

2. /agent

   /agent selects a custom agent.

3. /compact **[CORRECT]**

   /compact compresses conversation history.

4. /context

   /context reports usage rather than compressing history.

**Concept:** CLI context compaction

**Authored coaching hints:**

- The goal is to preserve useful history in less space.
- Reporting usage alone does not reclaim capacity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puedes recuperar manualmente espacio de contexto en una conversación larga de Copilot CLI?

1. /usage

   /usage informa de estadísticas de sesión.

2. /agent

   /agent selecciona un agente personalizado.

3. /compact **[CORRECT]**

   /compact comprime el historial de conversación.

4. /context

   /context informa del uso, pero no comprime el historial.

**Concept:** Compactación del contexto de CLI

**Authored coaching hints:**

- El objetivo es conservar historial útil en menos espacio.
- Informar del uso no recupera capacidad por sí solo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como recuperar manualmente espaço de contexto em uma conversa longa do Copilot CLI?

1. /usage

   /usage informa estatísticas da sessão.

2. /agent

   /agent seleciona um agente personalizado.

3. /compact **[CORRECT]**

   /compact comprime o histórico da conversa.

4. /context

   /context informa o uso, mas não comprime o histórico.

**Concept:** Compactação do contexto da CLI

**Authored coaching hints:**

- O objetivo é preservar histórico útil em menos espaço.
- Informar o uso não recupera capacidade por si só.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-056:51264b29fc61bffb76e1e7f7c00349ce943174365283f6cd4ccf53f801de3024 -->
## Question 56: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-056`

**Content revision:** `51264b29fc61bffb76e1e7f7c00349ce943174365283f6cd4ccf53f801de3024`

**en review revision:** `3d61fe1892ddece5fc528807c1fe270ee9c9b7e466c3acd8013b08accdceec8a`
**es review revision:** `e103dd2774a6cacce3ea960cc46c346d6fb9d15beafaed382b1ac9ef95733dab`
**pt-BR review revision:** `bb2be317b90c3868db347185c26bdb6c913275f4671f8f87d977424722fd6992`

### English

Copilot CLI requests a shell command you approve only this time. Which permission scope fits?

1. Approve the tool for the session

   Session approval permits later uses of that tool.

2. Enable allow-all permissions

   Allow-all grants much broader execution permission.

3. Trust the folder for future sessions

   Folder trust concerns repository contents, not one command invocation.

4. Approve this invocation **[CORRECT]**

   One-time approval authorizes this invocation only.

**Concept:** CLI permission scope

**Authored coaching hints:**

- Separate directory trust from tool execution permission.
- Match the authorization lifetime to the stated intent.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Copilot CLI solicita un comando de shell que autorizas solo esta vez. ¿Qué alcance de permiso corresponde?

1. Aprobar la herramienta para la sesión

   La aprobación de sesión permite usos posteriores de esa herramienta.

2. Activar permisos Allow-all

   Allow-all concede permisos de ejecución mucho más amplios.

3. Confiar en la carpeta para sesiones futuras

   La confianza en la carpeta afecta a su contenido, no a una invocación.

4. Aprobar esta invocación **[CORRECT]**

   La aprobación puntual autoriza solo esta invocación.

**Concept:** Alcance de permisos de CLI

**Authored coaching hints:**

- Distingue la confianza en el directorio del permiso de ejecución.
- Ajusta la duración de la autorización a la intención indicada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O Copilot CLI solicita um comando de shell que você autoriza apenas desta vez. Qual escopo de permissão corresponde?

1. Aprovar a ferramenta para a sessão

   A aprovação de sessão permite usos posteriores dessa ferramenta.

2. Ativar permissões Allow-all

   Allow-all concede permissões de execução muito mais amplas.

3. Confiar na pasta para sessões futuras

   A confiança na pasta diz respeito ao conteúdo, não a uma chamada.

4. Aprovar esta chamada **[CORRECT]**

   A aprovação pontual autoriza apenas esta chamada.

**Concept:** Escopo de permissões da CLI

**Authored coaching hints:**

- Diferencie confiança no diretório de permissão de execução.
- Ajuste a duração da autorização à intenção informada.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-057:0b76d23b18230ea3667e4a91124e3d5a84d5610a88ecf4b2388fd6827fa36186 -->
## Question 57: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-057`

**Content revision:** `0b76d23b18230ea3667e4a91124e3d5a84d5610a88ecf4b2388fd6827fa36186`

**en review revision:** `7cc23801c634378b2228408ee01c300c0555c2729ec58d59ae9fb17318a9beb7`
**es review revision:** `5b2749b48753f7864ea7590040e59bc623aac0622d64b3b3a38a115fec962371`
**pt-BR review revision:** `dd2ee5d5979f867308be8f65dd3390adf3d3ef5bfca483422961f0f6c8d2e201`

### English

Which VS Code Copilot Chat command proposes a correction for selected faulty code?

1. /fix **[CORRECT]**

   /fix requests a proposed correction.

2. /explain

   /explain describes how code works.

3. /tests

   /tests generates unit tests.

4. /help

   /help displays usage guidance.

**Concept:** VS Code code correction

**Authored coaching hints:**

- Identify whether the request is diagnosis, modification, or testing.
- The selection supplies the code to work on.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en VS Code propone una corrección para código defectuoso seleccionado?

1. /fix **[CORRECT]**

   /fix solicita una corrección propuesta.

2. /explain

   /explain describe cómo funciona el código.

3. /tests

   /tests genera pruebas unitarias.

4. /help

   /help muestra orientación de uso.

**Concept:** Corrección de código en VS Code

**Authored coaching hints:**

- Identifica si se solicita diagnóstico, modificación o pruebas.
- La selección proporciona el código sobre el que trabajar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no VS Code propõe uma correção para código defeituoso selecionado?

1. /fix **[CORRECT]**

   /fix solicita uma proposta de correção.

2. /explain

   /explain descreve como o código funciona.

3. /tests

   /tests gera testes unitários.

4. /help

   /help exibe orientações de uso.

**Concept:** Correção de código no VS Code

**Authored coaching hints:**

- Identifique se a solicitação pede diagnóstico, modificação ou testes.
- A seleção fornece o código a ser trabalhado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-058:1c8aa5ee743f8e39d8df730bf6d6f436044b68ec43ec911ae719f3f67b617568 -->
## Question 58: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-058`

**Content revision:** `1c8aa5ee743f8e39d8df730bf6d6f436044b68ec43ec911ae719f3f67b617568`

**en review revision:** `e393e5cb3b268c30bf9a390c3d609cc47cff3b7722eedfe3dda61ae0303d3142`
**es review revision:** `cf36bba839c6a5b9f86cce62f0830f0c6175b09189cab3690e89c33308f9d192`
**pt-BR review revision:** `a7548c835b19ff7430f7328a0ef191ca3de8ca6a6f81e45c464595db02f12b0b`

### English

Which notation attaches src/parser.js as file context in a Copilot CLI prompt?

1. \!src/parser.js

   \! introduces direct shell execution in this CLI.

2. @src/parser.js **[CORRECT]**

   @ followed by a relative path attaches the file contents.

3. \#src/parser.js

   \# is not the documented CLI file-attachment notation.

4. /src/parser.js

   A leading slash is not this file-context syntax.

**Concept:** CLI file attachment

**Authored coaching hints:**

- Keep CLI file references separate from IDE chat variables.
- A prefix can change whether input is context or a command.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué notación adjunta src/parser.js como contexto de archivo en un prompt de Copilot CLI?

1. \!src/parser.js

   \! introduce ejecución directa de shell en esta CLI.

2. @src/parser.js **[CORRECT]**

   @ seguido de una ruta relativa adjunta el contenido del archivo.

3. \#src/parser.js

   \# no es la notación documentada para adjuntar archivos en CLI.

4. /src/parser.js

   Una barra inicial no es esta sintaxis de contexto.

**Concept:** Archivos adjuntos en CLI

**Authored coaching hints:**

- Distingue las referencias de archivos de CLI de las variables de chat del IDE.
- Un prefijo puede determinar si la entrada es contexto o un comando.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual notação anexa src/parser.js como contexto de arquivo em um prompt do Copilot CLI?

1. \!src/parser.js

   \! introduz execução direta de shell nesta CLI.

2. @src/parser.js **[CORRECT]**

   @ seguido de um caminho relativo anexa o conteúdo do arquivo.

3. \#src/parser.js

   \# não é a notação documentada para anexar arquivos na CLI.

4. /src/parser.js

   Uma barra inicial não é essa sintaxe de contexto.

**Concept:** Anexos de arquivo na CLI

**Authored coaching hints:**

- Diferencie referências de arquivo da CLI de variáveis de chat do IDE.
- Um prefixo pode definir se a entrada é contexto ou um comando.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-059:6f94d25737c59d2bb3329a7d481ea9878b6b4e16187fbee57656d0ce854e2f85 -->
## Question 59: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-059`

**Content revision:** `6f94d25737c59d2bb3329a7d481ea9878b6b4e16187fbee57656d0ce854e2f85`

**en review revision:** `953cb9ebda130deb7196a5fd71325c41131b308c31a7c6e7e26c9c453d3737cb`
**es review revision:** `3b0f6ca13d387a45cb37aa3a27498e7bc9bb2c3119ceabd7cc6a012fb8ab7bbd`
**pt-BR review revision:** `1c08cca1731c800dc83ceca772c50fbc2873077f27d9c920e4ebebda0d61ab39`

### English

Which mechanism connects Copilot to tools in an external issue tracker?

1. A custom instructions file

   Instructions guide behavior but do not provide tracker tools.

2. An inline completion model

   An inline model generates suggestions rather than connecting the tracker.

3. An MCP server **[CORRECT]**

   MCP servers expose external tools and data to Copilot.

4. A prompt file

   Prompt files reuse requests but do not implement a service connection.

**Concept:** MCP tool integration

**Authored coaching hints:**

- Distinguish behavioral guidance from executable capabilities.
- The tracker must be queried, not merely described.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mecanismo conecta Copilot con herramientas de un gestor de incidencias externo?

1. Un archivo de instrucciones personalizadas

   Las instrucciones guían el comportamiento, pero no proporcionan herramientas del gestor.

2. Un modelo de completado en línea

   Un modelo en línea genera sugerencias en lugar de conectar el gestor.

3. Un servidor MCP **[CORRECT]**

   Los servidores MCP exponen herramientas y datos externos a Copilot.

4. Un archivo de prompts

   Los archivos de prompts reutilizan solicitudes, pero no implementan conexiones.

**Concept:** Integración de herramientas con MCP

**Authored coaching hints:**

- Distingue la orientación de comportamiento de las capacidades ejecutables.
- El gestor debe consultarse, no solo describirse.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mecanismo conecta o Copilot a ferramentas de um rastreador de problemas externo?

1. Um arquivo de instruções personalizadas

   Instruções orientam o comportamento, mas não fornecem ferramentas do rastreador.

2. Um modelo de preenchimento em linha

   Um modelo em linha gera sugestões em vez de conectar o rastreador.

3. Um servidor MCP **[CORRECT]**

   Servidores MCP expõem ferramentas e dados externos ao Copilot.

4. Um arquivo de prompts

   Arquivos de prompts reutilizam solicitações, mas não implementam conexões.

**Concept:** Integração de ferramentas com MCP

**Authored coaching hints:**

- Diferencie orientações de comportamento de capacidades executáveis.
- O rastreador precisa ser consultado, não apenas descrito.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-060:e7bd5213b2dbf4b756dccc184d89b89e3b84aff72dc409a92a740f5324410214 -->
## Question 60: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-060`

**Content revision:** `e7bd5213b2dbf4b756dccc184d89b89e3b84aff72dc409a92a740f5324410214`

**en review revision:** `146d358b687de8ae9f885c9d6d4003434f72dea6e99faca6b5d81f2b462c8ce5`
**es review revision:** `ed93aa87cf287a7e7b8fad31ef136b5ddef146138359c2c77a41fbd513952bc2`
**pt-BR review revision:** `61cf68849a7eb0b0532590cb802dd1ad55eb21a33d2da232166227bca0a21f8f`

### English

An MCP task only reads tickets. Which tool configuration limits unnecessary capabilities?

1. Allow every tool on the tracker server

   All tools expose capabilities the task does not need.

2. Disable lookup but keep ticket deletion

   Deletion is unnecessary and lookup is required.

3. Replace the tool list with a prompt to be careful

   Natural-language guidance does not remove available tools.

4. Allow ticket lookup but exclude ticket deletion **[CORRECT]**

   A narrow tool allowlist matches the read-only task.

**Concept:** MCP tool selection

**Authored coaching hints:**

- Compare the task with each exposed operation.
- Instructions and capability restrictions are different controls.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una tarea con MCP solo lee incidencias. ¿Qué configuración limita capacidades innecesarias?

1. Permitir todas las herramientas del servidor del gestor

   Todas las herramientas exponen capacidades innecesarias.

2. Desactivar consultas y conservar la eliminación

   Eliminar es innecesario y consultar es necesario.

3. Sustituir la lista de herramientas por una petición de cautela

   La orientación en lenguaje natural no retira herramientas disponibles.

4. Permitir consultas y excluir la eliminación de incidencias **[CORRECT]**

   Una lista limitada de herramientas coincide con la tarea de lectura.

**Concept:** Selección de herramientas MCP

**Authored coaching hints:**

- Compara la tarea con cada operación expuesta.
- Las instrucciones y las restricciones de capacidades son controles distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma tarefa com MCP apenas lê problemas. Qual configuração limita capacidades desnecessárias?

1. Permitir todas as ferramentas do servidor do rastreador

   Todas as ferramentas expõem capacidades desnecessárias.

2. Desativar consultas e manter a exclusão

   Excluir é desnecessário e consultar é necessário.

3. Substituir a lista de ferramentas por um pedido de cautela

   Orientações em linguagem natural não removem ferramentas disponíveis.

4. Permitir consultas e excluir a exclusão de problemas **[CORRECT]**

   Uma lista limitada de ferramentas corresponde à tarefa de leitura.

**Concept:** Seleção de ferramentas MCP

**Authored coaching hints:**

- Compare a tarefa com cada operação exposta.
- Instruções e restrições de capacidades são controles diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-061:cf2278d9b71d1bcd1650e3418a1d4869741c221d5dc78d20389924e73cfbae10 -->
## Question 61: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-061`

**Content revision:** `cf2278d9b71d1bcd1650e3418a1d4869741c221d5dc78d20389924e73cfbae10`

**en review revision:** `efb295c4da87b9653e1cf471eb7ad60953608e80c1c6c69377cdcb3bd3aa1ead`
**es review revision:** `f4160354cda647c0b9182692e995a16b591de5cff149505c26f9eafb289f44bb`
**pt-BR review revision:** `72ed0558918ee1f81fd3e680b35ed6288ed28520b0872b4776f10333ca61a361`

### English

Which organization policy controls GA MCP support for its Copilot Business license holders?

1. MCP servers in Copilot **[CORRECT]**

   This policy controls MCP use on supported GA surfaces.

2. Copilot code review

   Code review controls a different capability.

3. Copilot in GitHub.com

   Website availability is not the MCP-specific control.

4. Opt in to user feedback collection

   Feedback collection controls feedback options.

**Concept:** Organization MCP policy

**Authored coaching hints:**

- Identify the policy specific to the extension mechanism.
- The question concerns managed licenses, not a third-party host.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué política de organización controla el soporte GA de MCP para sus usuarios con licencia Copilot Business? Usa los nombres de la interfaz en inglés.

1. MCP servers in Copilot **[CORRECT]**

   Esta política controla el uso de MCP en superficies GA compatibles.

2. Copilot code review

   La revisión de código controla otra capacidad.

3. Copilot in GitHub.com

   La disponibilidad en el sitio web no es el control específico de MCP.

4. Opt in to user feedback collection

   La recopilación de comentarios controla las opciones de comentarios.

**Concept:** Política de MCP de la organización

**Authored coaching hints:**

- Identifica la política específica del mecanismo de extensión.
- La pregunta trata de licencias administradas, no de un cliente de terceros.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual política da organização controla o suporte GA a MCP para seus usuários com licença Copilot Business? Use os nomes da interface em inglês.

1. MCP servers in Copilot **[CORRECT]**

   Essa política controla o uso de MCP nas superfícies GA compatíveis.

2. Copilot code review

   A revisão de código controla outra capacidade.

3. Copilot in GitHub.com

   A disponibilidade no site não é o controle específico de MCP.

4. Opt in to user feedback collection

   A coleta de feedback controla as opções de feedback.

**Concept:** Política de MCP da organização

**Authored coaching hints:**

- Identifique a política específica do mecanismo de extensão.
- A pergunta trata de licenças gerenciadas, não de um cliente de terceiros.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies>

<!-- certification-coach-question:copilot-062:076fa1a1283722a1896d5eb66db159382a581a54ba307f5bb37e94e1db3f3518 -->
## Question 62: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-062`

**Content revision:** `076fa1a1283722a1896d5eb66db159382a581a54ba307f5bb37e94e1db3f3518`

**en review revision:** `0f1c0c8d9fbacd0cb8319c9daea543d220edce97f35992b841e341371f0af99d`
**es review revision:** `8a34a31b6f811e01e4b0762dd5c68a99a1575e797ced39080127ef4c0d5fa052`
**pt-BR review revision:** `97132f268dc540c9039bea828acff129a830f251fdd5b35a38b0784820d9d4d6`

### English

Which Visual Studio Copilot Chat command displays usage basics?

1. /explain

   /explain describes code behavior.

2. /help **[CORRECT]**

   /help provides a quick reference to Copilot usage.

3. /doc

   /doc adds symbol documentation.

4. /optimize

   /optimize analyzes runtime improvements.

**Concept:** Visual Studio command help

**Authored coaching hints:**

- Distinguish help about the tool from help about your code.
- The client named here is Visual Studio.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en Visual Studio muestra conceptos básicos de uso?

1. /explain

   /explain describe el comportamiento del código.

2. /help **[CORRECT]**

   /help proporciona una referencia rápida de uso de Copilot.

3. /doc

   /doc añade documentación de símbolos.

4. /optimize

   /optimize analiza mejoras del tiempo de ejecución.

**Concept:** Ayuda de comandos en Visual Studio

**Authored coaching hints:**

- Distingue la ayuda sobre la herramienta de la ayuda sobre tu código.
- El cliente indicado es Visual Studio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no Visual Studio exibe noções básicas de uso?

1. /explain

   /explain descreve o comportamento do código.

2. /help **[CORRECT]**

   /help fornece uma referência rápida de uso do Copilot.

3. /doc

   /doc adiciona documentação de símbolos.

4. /optimize

   /optimize analisa melhorias de tempo de execução.

**Concept:** Ajuda de comandos no Visual Studio

**Authored coaching hints:**

- Diferencie ajuda sobre a ferramenta de ajuda sobre seu código.
- O cliente indicado é o Visual Studio.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-063:9ea36a2e6555a2a606bd5c3929281528db1107017d8f434e63e07f1243502169 -->
## Question 63: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-063`

**Content revision:** `9ea36a2e6555a2a606bd5c3929281528db1107017d8f434e63e07f1243502169`

**en review revision:** `796452f68b6092750457e5da8dff15de30ca7ada3a1f8b42719cc98b8dede121`
**es review revision:** `3e91e61aac5184bce00a0059d5f335594566814f0ae1472aa076b7a4980fd5d1`
**pt-BR review revision:** `2437c95c2701ab45178814db7a4e8dafb0996a3f1f3b6f8e4ed0c890ad593491`

### English

Which VS Code Copilot Chat command specifically investigates a failing test?

1. /explain

   /explain describes existing code.

2. /new

   /new creates a project in VS Code.

3. /fixTestFailure **[CORRECT]**

   /fixTestFailure finds and fixes a failing test.

4. /tests

   /tests generates unit tests rather than specifically repairing a failure.

**Concept:** Failing-test command

**Authored coaching hints:**

- Generating tests differs from repairing an existing failure.
- Use the command defined for the named client.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en VS Code investiga específicamente una prueba fallida?

1. /explain

   /explain describe código existente.

2. /new

   /new crea un proyecto en VS Code.

3. /fixTestFailure **[CORRECT]**

   /fixTestFailure busca y corrige una prueba fallida.

4. /tests

   /tests genera pruebas unitarias en lugar de reparar específicamente un fallo.

**Concept:** Comando para pruebas fallidas

**Authored coaching hints:**

- Generar pruebas es distinto de reparar un fallo existente.
- Usa el comando definido para el cliente indicado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no VS Code investiga especificamente um teste com falha?

1. /explain

   /explain descreve código existente.

2. /new

   /new cria um projeto no VS Code.

3. /fixTestFailure **[CORRECT]**

   /fixTestFailure encontra e corrige um teste com falha.

4. /tests

   /tests gera testes unitários em vez de reparar especificamente uma falha.

**Concept:** Comando para testes com falha

**Authored coaching hints:**

- Gerar testes é diferente de reparar uma falha existente.
- Use o comando definido para o cliente indicado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-064:b647b32ac119150062d97c0bc878699b45570598f4b7af43228432f8007b5fd7 -->
## Question 64: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-064`

**Content revision:** `b647b32ac119150062d97c0bc878699b45570598f4b7af43228432f8007b5fd7`

**en review revision:** `3c60223808bb539d59338e3b44ff078512d807f3413a8b9efd042ec964e3da42`
**es review revision:** `5b6dc68eb1608963e76c64ba8833a23fd0126c88c7135b4ab2d69329964500aa`
**pt-BR review revision:** `5a56c3ca16bf4f66091c382c0a481bbb72156ba1c136920cd733bd14b64938a3`

### English

What context benefit does delegating a focused investigation to a Copilot CLI subagent provide?

1. A larger context limit for the main model

   Delegation does not enlarge the main model context limit.

2. Permanent storage of every tool result

   Separate context is not a permanent archive guarantee.

3. Removal of repository access restrictions

   Delegation does not grant new repository permissions.

4. A separate working context **[CORRECT]**

   The subagent works separately and returns results to the main conversation.

**Concept:** Subagent context isolation

**Authored coaching hints:**

- Distinguish organizing work from changing model capacity.
- Consider where detailed intermediate investigation happens.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ventaja de contexto aporta delegar una investigación puntual a un subagente de Copilot CLI?

1. Un límite de contexto mayor para el modelo principal

   Delegar no amplía el límite del modelo principal.

2. Almacenamiento permanente de cada resultado de herramienta

   El contexto separado no garantiza un archivo permanente.

3. Eliminación de restricciones de acceso al repositorio

   Delegar no concede nuevos permisos de repositorio.

4. Un contexto de trabajo separado **[CORRECT]**

   El subagente trabaja por separado y devuelve resultados a la conversación principal.

**Concept:** Aislamiento de contexto de subagentes

**Authored coaching hints:**

- Distingue organizar el trabajo de cambiar la capacidad del modelo.
- Piensa dónde ocurre la investigación intermedia detallada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual benefício de contexto a delegação de uma investigação pontual a um subagente do Copilot CLI oferece?

1. Um limite de contexto maior para o modelo principal

   Delegar não amplia o limite do modelo principal.

2. Armazenamento permanente de cada resultado de ferramenta

   Contexto separado não garante um arquivo permanente.

3. Remoção de restrições de acesso ao repositório

   Delegar não concede novas permissões de repositório.

4. Um contexto de trabalho separado **[CORRECT]**

   O subagente trabalha separadamente e retorna resultados à conversa principal.

**Concept:** Isolamento de contexto de subagentes

**Authored coaching hints:**

- Diferencie organizar o trabalho de mudar a capacidade do modelo.
- Considere onde ocorre a investigação intermediária detalhada.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview>

<!-- certification-coach-question:copilot-065:89707b248b668e2feee8f9bc37e0107e54ca501945e3f468b8239c6a2e52dc9d -->
## Question 65: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-065`

**Content revision:** `89707b248b668e2feee8f9bc37e0107e54ca501945e3f468b8239c6a2e52dc9d`

**en review revision:** `fb64d5fbe760f7f223b665f513d294016bd437a0386034a508dafbc5d74a09d0`
**es review revision:** `1603e8a105e1d7745400c667254444746472ddd075893ffca39751bb741f05cc`
**pt-BR review revision:** `a5ddbb6a61cd520c5fc93b2382f7ad3ce8fff5f89f61abe5326a1e9aa36b50ce`

### English

Which Xcode Copilot Chat command requests simpler selected code?

1. /simplify **[CORRECT]**

   /simplify requests simplification of the selection.

2. /doc

   /doc generates symbol documentation.

3. /explain

   /explain describes the selected code.

4. /tests

   /tests creates a unit test.

**Concept:** Xcode simplification command

**Authored coaching hints:**

- The desired output is revised code, not documentation.
- Check commands for Xcode rather than assuming IDE parity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en Xcode solicita simplificar el código seleccionado?

1. /simplify **[CORRECT]**

   /simplify solicita simplificar la selección.

2. /doc

   /doc genera documentación de símbolos.

3. /explain

   /explain describe el código seleccionado.

4. /tests

   /tests crea una prueba unitaria.

**Concept:** Comando de simplificación en Xcode

**Authored coaching hints:**

- El resultado deseado es código modificado, no documentación.
- Consulta los comandos de Xcode en lugar de suponer paridad entre IDE.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no Xcode solicita simplificar o código selecionado?

1. /simplify **[CORRECT]**

   /simplify solicita simplificar a seleção.

2. /doc

   /doc gera documentação de símbolos.

3. /explain

   /explain descreve o código selecionado.

4. /tests

   /tests cria um teste unitário.

**Concept:** Comando de simplificação no Xcode

**Authored coaching hints:**

- O resultado desejado é código alterado, não documentação.
- Consulte os comandos do Xcode em vez de presumir paridade entre IDEs.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-066:a3f74f0a703b806685d50bbf281be679759f7adbeaa8fcb4b8a4310b804102d0 -->
## Question 66: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-066`

**Content revision:** `a3f74f0a703b806685d50bbf281be679759f7adbeaa8fcb4b8a4310b804102d0`

**en review revision:** `18d1cf9e0ff06b7db4f5acfd4fd0e638fe406d29452cafaa86f9ea577af19041`
**es review revision:** `8af1cef510961c6aef1a2805589e067bd310961859bf60c523b59006e0e7f4a9`
**pt-BR review revision:** `8571eed4f8883bbf7b7f30e0323662305e64ef867ace18c9a5f0c2556c19b7d9`

### English

Where does Copilot execute a task assigned to a cloud development environment?

1. In the reviewer’s local Git hooks

   Reviewer hooks are not the agent execution environment.

2. In the selected cloud environment **[CORRECT]**

   Cloud tasks execute in the selected remote development environment.

3. In the browser JavaScript runtime

   The browser is a client, not the development runtime.

4. In the maintainer’s local editor process

   Cloud execution does not require the maintainer’s editor process.

**Concept:** Cloud execution location

**Authored coaching hints:**

- Separate the interface used to send a request from its compute.
- A session client and an execution environment are different.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde ejecuta Copilot una tarea asignada a un entorno de desarrollo en la nube?

1. En los hooks locales de Git del revisor

   Los hooks del revisor no son el entorno de ejecución del agente.

2. En el entorno de nube seleccionado **[CORRECT]**

   Las tareas en la nube se ejecutan en el entorno de desarrollo remoto seleccionado.

3. En el entorno de ejecución JavaScript del navegador

   El navegador es un cliente, no el entorno de desarrollo.

4. En el proceso del editor local del mantenedor

   La ejecución en la nube no requiere el proceso del editor del mantenedor.

**Concept:** Ubicación de ejecución en la nube

**Authored coaching hints:**

- Distingue la interfaz para enviar una solicitud del cómputo que la ejecuta.
- El cliente de sesión y el entorno de ejecución son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde o Copilot executa uma tarefa atribuída a um ambiente de desenvolvimento na nuvem?

1. Nos hooks locais do Git do revisor

   Os hooks do revisor não são o ambiente de execução do agente.

2. No ambiente de nuvem selecionado **[CORRECT]**

   Tarefas na nuvem são executadas no ambiente de desenvolvimento remoto selecionado.

3. No ambiente JavaScript do navegador

   O navegador é um cliente, não o ambiente de desenvolvimento.

4. No processo do editor local do mantenedor

   A execução na nuvem não exige o processo do editor do mantenedor.

**Concept:** Local de execução na nuvem

**Authored coaching hints:**

- Diferencie a interface para enviar uma solicitação da computação que a executa.
- O cliente da sessão e o ambiente de execução são diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-067:fe9996e93b563b00df51cc8dce9a2221804e86d9fc154b4ecea87a36df3a0122 -->
## Question 67: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-067`

**Content revision:** `fe9996e93b563b00df51cc8dce9a2221804e86d9fc154b4ecea87a36df3a0122`

**en review revision:** `eafadb7b69311bd7f049c1cdba12723666e13603f1786b53a11c07a3a16bcddf`
**es review revision:** `622b519c71462f0b7364bc4b17af1057d3ee29ed6ed56d46c952e9c3ca5e62d4`
**pt-BR review revision:** `90fca964041877084a7e8b66a9c6134f87890d88dd7429cd34469ac310383624`

### English

From an organization’s main page, where does its owner manage Copilot feature policies in the English UI?

1. Settings → Actions → General

   Actions settings govern workflows, not Copilot feature policies.

2. Settings → Member privileges

   Member privileges is not the Copilot policy page.

3. Settings → Copilot → Policies **[CORRECT]**

   Policies contains Copilot feature and privacy controls.

4. Settings → Copilot → Models

   Models controls additional model availability.

**Concept:** Organization policy path

**Authored coaching hints:**

- Identify both the administrative scope and the kind of control.
- Feature availability and model availability have separate pages.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Desde la página principal de una organización, ¿dónde administra su propietario las políticas de funciones de Copilot en la interfaz en inglés?

1. Settings → Actions → General

   La configuración de Actions gobierna flujos, no políticas de Copilot.

2. Settings → Member privileges

   Member privileges no es la página de políticas de Copilot.

3. Settings → Copilot → Policies **[CORRECT]**

   Policies contiene controles de funciones y privacidad de Copilot.

4. Settings → Copilot → Models

   Models controla la disponibilidad de modelos adicionales.

**Concept:** Ruta de políticas de organización

**Authored coaching hints:**

- Identifica el alcance administrativo y el tipo de control.
- La disponibilidad de funciones y de modelos tiene páginas separadas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na página principal de uma organização, onde seu proprietário gerencia políticas de recursos do Copilot na interface em inglês?

1. Settings → Actions → General

   As configurações de Actions governam fluxos, não políticas do Copilot.

2. Settings → Member privileges

   Member privileges não é a página de políticas do Copilot.

3. Settings → Copilot → Policies **[CORRECT]**

   Policies contém controles de recursos e privacidade do Copilot.

4. Settings → Copilot → Models

   Models controla a disponibilidade de modelos adicionais.

**Concept:** Caminho de políticas da organização

**Authored coaching hints:**

- Identifique o escopo administrativo e o tipo de controle.
- Disponibilidade de recursos e de modelos tem páginas separadas.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies>

<!-- certification-coach-question:copilot-068:5996f4deefc2c1933f25b9696242204d3c4e6212af425a962d1a1a453bb175b9 -->
## Question 68: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-068`

**Content revision:** `5996f4deefc2c1933f25b9696242204d3c4e6212af425a962d1a1a453bb175b9`

**en review revision:** `e718e6db3d6bfc86c1a2b4d4d665461450d7f723b84de788da1b59e888726e09`
**es review revision:** `fe16193e573484961c83d78c2fda6a3951c5552a0f6d10958f71bde057ff5c45`
**pt-BR review revision:** `e34d4fc412c8f217a2be2a7f1f4d4b3eaaba66392ee966b0131d5ef962bd9551`

### English

Which Copilot feature drafts a description of a pull request’s changes?

1. Code review

   Code review looks for issues and suggests fixes.

2. Next edit suggestions

   Next edit suggestions assist editing.

3. Agent session history

   Session history records agent activity rather than drafting the PR description.

4. Pull request summary **[CORRECT]**

   A PR summary explains the changes for readers.

**Concept:** PR summary versus review

**Authored coaching hints:**

- Describing changes differs from evaluating their quality.
- Choose the output intended for the pull request narrative.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función de Copilot redacta una descripción de los cambios de un pull request?

1. Revisión de código

   La revisión busca problemas y sugiere correcciones.

2. Sugerencias de siguiente edición

   Las sugerencias de siguiente edición ayudan a editar.

3. Historial de sesiones del agente

   El historial registra actividad del agente en lugar de redactar la descripción.

4. Resumen de pull request **[CORRECT]**

   Un resumen explica los cambios a los lectores.

**Concept:** Resumen frente a revisión de PR

**Authored coaching hints:**

- Describir cambios es distinto de evaluar su calidad.
- Elige el resultado destinado a la descripción del pull request.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do Copilot redige uma descrição das alterações de um pull request?

1. Revisão de código

   A revisão procura problemas e sugere correções.

2. Sugestões de próxima edição

   Sugestões de próxima edição auxiliam na edição.

3. Histórico de sessões do agente

   O histórico registra atividade do agente em vez de redigir a descrição.

4. Resumo de pull request **[CORRECT]**

   Um resumo explica as alterações aos leitores.

**Concept:** Resumo versus revisão de PR

**Authored coaching hints:**

- Descrever alterações é diferente de avaliar sua qualidade.
- Escolha o resultado destinado à descrição do pull request.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-069:f4ca761119292654e9b90b602d165e78af730449d8d973f46390e1c6a0906279 -->
## Question 69: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-069`

**Content revision:** `f4ca761119292654e9b90b602d165e78af730449d8d973f46390e1c6a0906279`

**en review revision:** `b92413aef313dd53dd4d71e190e51828d38fcacc68048ee5ac9f2683fec5826a`
**es review revision:** `ecb808cef1d730593125d65895e6f4aaa050cd33c58b549a644e56f67c99f358`
**pt-BR review revision:** `72ed7303e2faccf34cfd59ff5e3bea28d803e4dc93510ce9e14923b72ee0de87`

### English

Which organization settings page controls additional Copilot models? Use the English UI labels.

1. Settings → Copilot → Models **[CORRECT]**

   Models contains policies for additional model availability.

2. Settings → Copilot → Policies

   Policies contains feature and privacy controls.

3. Settings → Actions → General

   Actions settings do not select Copilot models.

4. Settings → Copilot → Access

   Access concerns assigning Copilot access, not selecting models.

**Concept:** Organization model path

**Authored coaching hints:**

- The question concerns model availability, not general feature access.
- Stay within organization settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué página de configuración de la organización controla los modelos adicionales de Copilot? Usa las etiquetas de la interfaz en inglés.

1. Settings → Copilot → Models **[CORRECT]**

   Models contiene las políticas de disponibilidad de modelos adicionales.

2. Settings → Copilot → Policies

   Policies contiene controles de funciones y privacidad.

3. Settings → Actions → General

   La configuración de Actions no selecciona modelos de Copilot.

4. Settings → Copilot → Access

   Access trata de asignar acceso a Copilot, no de seleccionar modelos.

**Concept:** Ruta de modelos de organización

**Authored coaching hints:**

- La pregunta trata de disponibilidad de modelos, no de acceso general a funciones.
- Mantente dentro de la configuración de la organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual página de configurações da organização controla os modelos adicionais do Copilot? Use os rótulos da interface em inglês.

1. Settings → Copilot → Models **[CORRECT]**

   Models contém políticas de disponibilidade de modelos adicionais.

2. Settings → Copilot → Policies

   Policies contém controles de recursos e privacidade.

3. Settings → Actions → General

   As configurações de Actions não selecionam modelos do Copilot.

4. Settings → Copilot → Access

   Access trata de atribuir acesso ao Copilot, não de selecionar modelos.

**Concept:** Caminho de modelos da organização

**Authored coaching hints:**

- A pergunta trata de disponibilidade de modelos, não de acesso geral a recursos.
- Permaneça nas configurações da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies>

<!-- certification-coach-question:copilot-070:dcc7a4e85255e120b458cf136ca3fc7c82e98edc4e9a92c851b0743fdd583159 -->
## Question 70: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-070`

**Content revision:** `dcc7a4e85255e120b458cf136ca3fc7c82e98edc4e9a92c851b0743fdd583159`

**en review revision:** `5d8c6fe2aa45a2d0da899b630080ae251b79b03d49bb8ba4cdd78f44206e4ba5`
**es review revision:** `679cf55548e6342f7c11756d6435d4899ee284f3a2b2a4db49c8104343bf23e2`
**pt-BR review revision:** `9b6d1ec57abb40c9505447475b1209b46b87983efb3e454024d6e88518e1cd8d`

### English

Which automatically supplied repository guidance can define error-handling conventions for Copilot code review?

1. An organization model policy

   Model policy governs model availability, not error-handling conventions.

2. Repository custom instructions **[CORRECT]**

   Repository instructions can provide review and coding guidance.

3. An on-demand prompt file

   A prompt file is invoked for a specific interaction, not automatically supplied to reviews.

4. A custom agent profile alone

   An agent definition alone does not provide repository instructions to code review.

**Concept:** Review customization

**Authored coaching hints:**

- Consider which repository content is intended to guide Copilot.
- Metadata and behavioral instructions have different roles.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué orientación del repositorio, proporcionada automáticamente, puede definir convenciones de manejo de errores para la revisión de Copilot?

1. Una política de modelos de organización

   La política de modelos gobierna su disponibilidad, no las convenciones de manejo de errores.

2. Instrucciones del repositorio **[CORRECT]**

   Las instrucciones del repositorio pueden orientar revisiones y programación.

3. Un archivo de prompts bajo demanda

   Un prompt se invoca para una interacción concreta, no se proporciona automáticamente a revisiones.

4. Solo un perfil de agente personalizado

   La definición de un agente por sí sola no proporciona instrucciones del repositorio a la revisión.

**Concept:** Personalización de revisiones

**Authored coaching hints:**

- Piensa qué contenido del repositorio está destinado a orientar a Copilot.
- Los metadatos y las instrucciones de comportamiento tienen funciones distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais orientações do repositório, fornecidas automaticamente, podem definir convenções de tratamento de erros para a revisão do Copilot?

1. Uma política de modelos da organização

   A política de modelos governa sua disponibilidade, não convenções de tratamento de erros.

2. Instruções do repositório **[CORRECT]**

   As instruções do repositório podem orientar revisões e programação.

3. Um arquivo de prompts sob demanda

   Um prompt é invocado para uma interação específica, não fornecido automaticamente às revisões.

4. Somente um perfil de agente personalizado

   A definição de um agente sozinha não fornece instruções do repositório à revisão.

**Concept:** Personalização de revisões

**Authored coaching hints:**

- Considere qual conteúdo do repositório deve orientar o Copilot.
- Metadados e instruções de comportamento têm papéis diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-071:9119edc33e010372a4b4b579afd2a5ac6b58bfb14399455347a6762b57ce7dcf -->
## Question 71: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-071`

**Content revision:** `9119edc33e010372a4b4b579afd2a5ac6b58bfb14399455347a6762b57ce7dcf`

**en review revision:** `84042e77362242747f87901783107dba5b84e8186b3d26579386baecb27dd38d`
**es review revision:** `a7227990717dfff3efd4ffaf0a2d89605c5ef6ba021c6addc862487d7fff4ab7`
**pt-BR review revision:** `5a26f904335751966e342c6fd50f98c558a14dbc2b0143669d1071e0c291cfdc`

### English

Starting at the enterprise page, which path opens Copilot feature and client policies in the English UI?

1. AI controls → Copilot → Models

   Model controls are distinct from feature and client policies.

2. Settings → Audit log

   The audit log records changes rather than configuring these policies.

3. AI controls → Copilot → Configure features &amp; clients **[CORRECT]**

   Configure features &amp; clients is the documented enterprise feature-policy page.

4. Settings → Copilot → Policies

   This is the organization policy path, not the enterprise path.

**Concept:** Enterprise feature-policy path

**Authored coaching hints:**

- Enterprise and organization navigation differ.
- Choose configuration rather than historical evidence.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Desde la página de la empresa, ¿qué ruta abre las políticas de funciones y clientes de Copilot en la interfaz en inglés?

1. AI controls → Copilot → Models

   Los controles de modelos son distintos de las políticas de funciones y clientes.

2. Settings → Audit log

   El registro de auditoría registra cambios en lugar de configurar estas políticas.

3. AI controls → Copilot → Configure features &amp; clients **[CORRECT]**

   Configure features &amp; clients es la página empresarial documentada.

4. Settings → Copilot → Policies

   Esta es la ruta de políticas de organización, no de empresa.

**Concept:** Ruta de políticas de funciones de empresa

**Authored coaching hints:**

- La navegación de empresa y de organización es distinta.
- Elige configuración en lugar de evidencia histórica.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na página da empresa, qual caminho abre as políticas de recursos e clientes do Copilot na interface em inglês?

1. AI controls → Copilot → Models

   Controles de modelos são distintos de políticas de recursos e clientes.

2. Settings → Audit log

   O log de auditoria registra alterações em vez de configurar essas políticas.

3. AI controls → Copilot → Configure features &amp; clients **[CORRECT]**

   Configure features &amp; clients é a página empresarial documentada.

4. Settings → Copilot → Policies

   Este é o caminho de políticas da organização, não da empresa.

**Concept:** Caminho de políticas de recursos da empresa

**Authored coaching hints:**

- A navegação da empresa difere da navegação da organização.
- Escolha configuração em vez de evidência histórica.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies>

<!-- certification-coach-question:copilot-072:834e08867527280f4ac7a0cc41c6f399ea0bebddbb9f03fb43fe3b159159cb5e -->
## Question 72: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-072`

**Content revision:** `834e08867527280f4ac7a0cc41c6f399ea0bebddbb9f03fb43fe3b159159cb5e`

**en review revision:** `9bb53598b0659e0239787e0cf7fb5ff8e1d65062a1b96fc31c3835ceee4121b8`
**es review revision:** `6e33c82817c593cd2f90959fb48879760570ce1aa92e32a18e4b78f55a212d7a`
**pt-BR review revision:** `bcae905e1955364bd80e9d631e22c2a0d717d5a8aa3f972947c7195a8433d2c2`

### English

Which requirement favors Copilot Business over separate personal Copilot Pro subscriptions?

1. Inline code suggestions

   Inline suggestions are not exclusive to Business.

2. Conversational coding assistance

   Conversational assistance is available on personal plans too.

3. Use from a terminal

   Terminal access is not unique to Business.

4. Centralized administration **[CORRECT]**

   Business adds centralized administration for managed users.

**Concept:** Managed versus personal plans

**Authored coaching hints:**

- Compare governance needs, not just coding interfaces.
- Separate individual capabilities from organization administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué requisito favorece Copilot Business frente a suscripciones personales separadas de Copilot Pro?

1. Sugerencias de código en línea

   Las sugerencias en línea no son exclusivas de Business.

2. Asistencia de programación conversacional

   La asistencia conversacional también está disponible en planes personales.

3. Uso desde una terminal

   El acceso desde terminal no es exclusivo de Business.

4. Administración centralizada **[CORRECT]**

   Business añade administración centralizada para usuarios administrados.

**Concept:** Planes administrados frente a personales

**Authored coaching hints:**

- Compara necesidades de gobierno, no solo interfaces de programación.
- Distingue capacidades individuales de administración de la organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual requisito favorece o Copilot Business em vez de assinaturas pessoais separadas do Copilot Pro?

1. Sugestões de código em linha

   Sugestões em linha não são exclusivas do Business.

2. Assistência de programação conversacional

   A assistência conversacional também existe em planos pessoais.

3. Uso pelo terminal

   O acesso pelo terminal não é exclusivo do Business.

4. Administração centralizada **[CORRECT]**

   O Business adiciona administração centralizada para usuários gerenciados.

**Concept:** Planos gerenciados versus pessoais

**Authored coaching hints:**

- Compare necessidades de governança, não apenas interfaces de programação.
- Diferencie capacidades individuais de administração da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/get-started/plans>

<!-- certification-coach-question:copilot-073:b9d3a01d1ded6bf219b7c9394531d01eb7342974a5b49273ea4a48e7a9e0efce -->
## Question 73: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-073`

**Content revision:** `b9d3a01d1ded6bf219b7c9394531d01eb7342974a5b49273ea4a48e7a9e0efce`

**en review revision:** `bc60b04734dab9526d63d532c72bfedb2bc8c4c1db1fc74e2d825fae1b9cd9ba`
**es review revision:** `94f89727fa63f0c6d2588260caede0e756912ee45e2ee110f015b08889cd6638`
**pt-BR review revision:** `4a8e72197cd4fb18448132190b273e86bf18829cdb4f358d3a00cc276455d603`

### English

Which GitHub hosting plan is Copilot Enterprise designed for?

1. GitHub Enterprise Cloud **[CORRECT]**

   Copilot Enterprise is designed for GitHub Enterprise Cloud.

2. GitHub Enterprise Server

   Copilot Enterprise is not a GitHub Enterprise Server deployment.

3. A self-hosted GitLab instance

   GitLab hosting is not the required GitHub plan.

4. An on-premises Azure DevOps Server

   Azure DevOps Server is not GitHub Enterprise Cloud.

**Concept:** Copilot Enterprise compatibility

**Authored coaching hints:**

- Do not treat cloud and self-hosted enterprise products as interchangeable.
- The shared word “Enterprise” does not establish compatibility.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Para qué plan de alojamiento de GitHub está diseñado Copilot Enterprise?

1. GitHub Enterprise Cloud **[CORRECT]**

   Copilot Enterprise está diseñado para GitHub Enterprise Cloud.

2. GitHub Enterprise Server

   Copilot Enterprise no es una implementación de GitHub Enterprise Server.

3. Una instancia autohospedada de GitLab

   El alojamiento GitLab no es el plan de GitHub requerido.

4. Un Azure DevOps Server local

   Azure DevOps Server no es GitHub Enterprise Cloud.

**Concept:** Compatibilidad de Copilot Enterprise

**Authored coaching hints:**

- No trates los productos empresariales en la nube y autohospedados como intercambiables.
- Compartir la palabra “Enterprise” no establece compatibilidad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para qual plano de hospedagem do GitHub o Copilot Enterprise foi projetado?

1. GitHub Enterprise Cloud **[CORRECT]**

   O Copilot Enterprise foi projetado para o GitHub Enterprise Cloud.

2. GitHub Enterprise Server

   O Copilot Enterprise não é uma implantação do GitHub Enterprise Server.

3. Uma instância auto-hospedada do GitLab

   A hospedagem GitLab não é o plano do GitHub exigido.

4. Um Azure DevOps Server local

   O Azure DevOps Server não é GitHub Enterprise Cloud.

**Concept:** Compatibilidade do Copilot Enterprise

**Authored coaching hints:**

- Não trate produtos empresariais na nuvem e auto-hospedados como intercambiáveis.
- Compartilhar a palavra “Enterprise” não estabelece compatibilidade.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/get-started/plans>

<!-- certification-coach-question:copilot-074:57687b1c350cce8a5636d88588090be4c3a4208488dbbb97d75bd1d2b7bb0d7e -->
## Question 74: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-074`

**Content revision:** `57687b1c350cce8a5636d88588090be4c3a4208488dbbb97d75bd1d2b7bb0d7e`

**en review revision:** `346b2b7cf508be1ededbaacc5a2cc0b2f71e96987dac58c3e0e94492adcf3b1c`
**es review revision:** `8233447e5d7d88e0a86f1ad9f6df41bf91a86f9d197cd7ad9c521c55c093fcfa`
**pt-BR review revision:** `4753f730277d6e2e8aafcfb840f9ead1cfa6ec13a411defe48ca7fe3bdceb729`

### English

Which plans provide centrally managed Copilot content exclusions?

1. Copilot Student and Copilot Free

   These plans do not provide centralized exclusion administration.

2. Copilot Business and Copilot Enterprise **[CORRECT]**

   Content exclusion is documented for Business and Enterprise.

3. Copilot Free and Copilot Pro

   These personal plans do not provide the managed exclusion feature.

4. Copilot Pro and Copilot Pro+

   More personal-plan capacity does not add this administrative feature.

**Concept:** Content exclusion plan eligibility

**Authored coaching hints:**

- Distinguish a managed policy from an editor preference.
- A higher individual allowance is not centralized governance.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué planes proporcionan exclusiones de contenido de Copilot administradas centralmente?

1. Copilot Student y Copilot Free

   Estos planes no proporcionan administración centralizada de exclusiones.

2. Copilot Business y Copilot Enterprise **[CORRECT]**

   La exclusión de contenido está documentada para Business y Enterprise.

3. Copilot Free y Copilot Pro

   Estos planes personales no proporcionan la exclusión administrada.

4. Copilot Pro y Copilot Pro+

   Más capacidad en un plan personal no añade esta función administrativa.

**Concept:** Planes aptos para exclusiones de contenido

**Authored coaching hints:**

- Distingue una política administrada de una preferencia del editor.
- Una asignación individual mayor no es gobierno centralizado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais planos oferecem exclusões de conteúdo do Copilot gerenciadas centralmente?

1. Copilot Student e Copilot Free

   Esses planos não oferecem administração centralizada de exclusões.

2. Copilot Business e Copilot Enterprise **[CORRECT]**

   A exclusão de conteúdo é documentada para Business e Enterprise.

3. Copilot Free e Copilot Pro

   Esses planos pessoais não oferecem a exclusão gerenciada.

4. Copilot Pro e Copilot Pro+

   Mais capacidade em um plano pessoal não adiciona esse recurso administrativo.

**Concept:** Planos elegíveis para exclusões de conteúdo

**Authored coaching hints:**

- Diferencie uma política gerenciada de uma preferência do editor.
- Uma cota individual maior não é governança centralizada.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-075:c447bcb7a7516ed651038e28aebaaaa34e9fe9a220b1c12145f13a0584aa856e -->
## Question 75: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-075`

**Content revision:** `c447bcb7a7516ed651038e28aebaaaa34e9fe9a220b1c12145f13a0584aa856e`

**en review revision:** `eb66803770dbbfa67e5e2039f2d82cf8f96373b5ab8edb6a920b17601736dcd9`
**es review revision:** `ae68844ace2e8c1fd55d2a162e0f46e4e9f4417081fc26c0645dc3dd1f64ad2f`
**pt-BR review revision:** `e1533ab65a6d16777fefecaf32b358c2b24e4dec779dc465a0bde2f6cc8b05e8`

### English

Whose policies generally govern a user licensed for Copilot by an organization?

1. Only the user’s local editor settings

   Local settings cannot replace applicable managed policies.

2. Only the user’s personal billing preferences

   Personal billing preferences do not supersede managed governance.

3. The license provider’s policies **[CORRECT]**

   Managed users are generally governed by their license provider’s policies.

4. Every public repository the user views

   Viewing a public repository does not make it the license provider.

**Concept:** Managed policy scope

**Authored coaching hints:**

- Identify where the user receives the managed entitlement.
- Distinguish licensing scope from the currently viewed repository.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué políticas gobiernan generalmente a un usuario cuya organización le asigna una licencia de Copilot?

1. Solo la configuración de su editor local

   La configuración local no sustituye las políticas administradas aplicables.

2. Solo sus preferencias personales de facturación

   Las preferencias personales de facturación no prevalecen sobre el gobierno administrado.

3. Las del proveedor de la licencia **[CORRECT]**

   Los usuarios administrados suelen estar sujetos a las políticas del proveedor de su licencia.

4. Las de cada repositorio público que consulta

   Consultar un repositorio público no lo convierte en proveedor de licencia.

**Concept:** Alcance de políticas administradas

**Authored coaching hints:**

- Identifica dónde recibe el usuario el derecho de acceso administrado.
- Distingue el alcance de la licencia del repositorio consultado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais políticas geralmente governam um usuário que recebe uma licença do Copilot de uma organização?

1. Somente as configurações do editor local

   Configurações locais não substituem políticas gerenciadas aplicáveis.

2. Somente suas preferências pessoais de cobrança

   Preferências pessoais de cobrança não prevalecem sobre a governança gerenciada.

3. As do provedor da licença **[CORRECT]**

   Usuários gerenciados geralmente seguem as políticas do provedor da licença.

4. As de cada repositório público que ele consulta

   Consultar um repositório público não o torna provedor da licença.

**Concept:** Escopo de políticas gerenciadas

**Authored coaching hints:**

- Identifique de onde vem o direito de acesso gerenciado.
- Diferencie o escopo da licença do repositório consultado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/enterprise/policies>

<!-- certification-coach-question:copilot-076:42e12cfef1cfaa26354b02a8860bcfb32853bbbaef04c9eaae8eb5902e5a4bc7 -->
## Question 76: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-076`

**Content revision:** `42e12cfef1cfaa26354b02a8860bcfb32853bbbaef04c9eaae8eb5902e5a4bc7`

**en review revision:** `2155595ede7362d79e2b5ae580992abe59729dd2f88e813d753ff7e44cfa9dbc`
**es review revision:** `b8263e586cfb2580f70f9c324bd822c34e87adc9467fd9ba216e59b2c80b319d`
**pt-BR review revision:** `26acd0670e9f27384d3055547c68ce6f490e7af4c342a6d6b3d93ca8fbe60655`

### English

An enterprise explicitly disables a Copilot feature. Can an organization owner enable it for that organization?

1. Yes; organization settings always take precedence

   An organization does not supersede explicit enterprise enforcement.

2. Yes; assigning another seat overrides the policy

   Assigning a seat does not override the feature policy.

3. No; the user must first enable it in the IDE

   An IDE preference cannot unlock an enterprise-disabled feature.

4. No; enterprise enforcement applies **[CORRECT]**

   Explicit enterprise enforcement cannot be overridden by the organization.

**Concept:** Enterprise policy enforcement

**Authored coaching hints:**

- Consider whether the enterprise delegated the decision.
- An entitlement and a feature permission are different.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa desactiva explícitamente una función de Copilot. ¿Puede el propietario de una organización activarla para su organización?

1. Sí; la configuración de organización siempre tiene prioridad

   Una organización no prevalece sobre la aplicación explícita empresarial.

2. Sí; asignar otra licencia anula la política

   Asignar una licencia no anula la política de funciones.

3. No; primero el usuario debe activarla en el IDE

   Una preferencia del IDE no desbloquea una función desactivada por la empresa.

4. No; se aplica la restricción empresarial **[CORRECT]**

   La aplicación explícita de la empresa no puede ser anulada por la organización.

**Concept:** Aplicación de políticas empresariales

**Authored coaching hints:**

- Considera si la empresa delegó la decisión.
- Un derecho de acceso y un permiso de función son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa desativa explicitamente um recurso do Copilot. O proprietário de uma organização pode ativá-lo para essa organização?

1. Sim; as configurações da organização sempre têm prioridade

   Uma organização não prevalece sobre a aplicação explícita empresarial.

2. Sim; atribuir outra licença substitui a política

   Atribuir uma licença não substitui a política de recursos.

3. Não; primeiro o usuário deve ativá-lo no IDE

   Uma preferência do IDE não libera um recurso desativado pela empresa.

4. Não; vale a restrição empresarial **[CORRECT]**

   A aplicação explícita da empresa não pode ser substituída pela organização.

**Concept:** Aplicação de políticas empresariais

**Authored coaching hints:**

- Considere se a empresa delegou a decisão.
- Um direito de acesso e uma permissão de recurso são diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/enterprise/policies>

<!-- certification-coach-question:copilot-077:e90c977b9a85c4e334875807ecbc105eb90924552b177ae8385b3489667fb372 -->
## Question 77: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-077`

**Content revision:** `e90c977b9a85c4e334875807ecbc105eb90924552b177ae8385b3489667fb372`

**en review revision:** `857839b9b382499e645a741ad7d76dda2a3184e59c8b2420015190d0f08eb929`
**es review revision:** `aacc3d442fb04a7057c94a5eea804318e58ee7ffe7769bc4bcd256347f85cfa6`
**pt-BR review revision:** `be2cce5a89ef12ae79c3a04033f199477ce8f1fac640104ad1a342a308ad36ca`

### English

Which record identifies historical Copilot license assignments and policy changes?

1. Administrative audit logs **[CORRECT]**

   Audit events record administrative license and policy changes.

2. The current seat count alone

   A current count does not identify historical actors or changes.

3. The repository commit history

   Git commits do not capture these administrative settings.

4. The IDE’s suggestion acceptance count

   Acceptance counts measure coding activity rather than administrative changes.

**Concept:** Copilot administrative audit evidence

**Authored coaching hints:**

- A current setting is not a history of changes.
- Look for records of administrative actions and actors.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué registro identifica asignaciones históricas de licencias de Copilot y cambios de políticas?

1. Registros de auditoría administrativa **[CORRECT]**

   Los eventos de auditoría registran cambios administrativos de licencias y políticas.

2. Solo el conteo actual de licencias

   Un conteo actual no identifica actores ni cambios históricos.

3. El historial de commits del repositorio

   Los commits de Git no capturan estos ajustes administrativos.

4. El conteo de sugerencias aceptadas del IDE

   Los conteos de aceptación miden actividad de programación, no cambios administrativos.

**Concept:** Evidencia de auditoría administrativa de Copilot

**Authored coaching hints:**

- Una configuración actual no es un historial de cambios.
- Busca registros de acciones y actores administrativos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual registro identifica atribuições históricas de licenças do Copilot e alterações de políticas?

1. Logs de auditoria administrativa **[CORRECT]**

   Eventos de auditoria registram alterações administrativas de licenças e políticas.

2. Somente a contagem atual de licenças

   Uma contagem atual não identifica atores ou alterações históricas.

3. O histórico de commits do repositório

   Commits do Git não capturam essas configurações administrativas.

4. A contagem de sugestões aceitas do IDE

   Contagens de aceitação medem atividade de programação, não alterações administrativas.

**Concept:** Evidência de auditoria administrativa do Copilot

**Authored coaching hints:**

- Uma configuração atual não é um histórico de alterações.
- Procure registros de ações e atores administrativos.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs>

<!-- certification-coach-question:copilot-078:5a2b205d5c86ec0717e0d88238e4a2628cde93b1ff68ac910a3eb547c955915b -->
## Question 78: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-078`

**Content revision:** `5a2b205d5c86ec0717e0d88238e4a2628cde93b1ff68ac910a3eb547c955915b`

**en review revision:** `065cd84a2af9d0f718c26ca3d531ae39b597e62c7ebd3f19e17cdc66c0ab3fec`
**es review revision:** `974493ccd29f3db7d0b16879266f61e87fdb8aca5dc692d41744d8bb85bd5d2b`
**pt-BR review revision:** `9c813471c60a0274be7065ed7fa18788c5ee6d0b480a5067b9baf05831766239`

### English

Which enterprise policy option delegates a Copilot feature decision to organization owners? Use English UI labels.

1. Enabled for selected organizations

   Selecting organizations is still an enterprise-level choice.

2. Let organizations decide **[CORRECT]**

   This option delegates the decision to organizations.

3. Enabled

   Enabled enforces an enterprise decision.

4. Disabled

   Disabled enforces an enterprise restriction.

**Concept:** Enterprise policy delegation

**Authored coaching hints:**

- Separate delegation from choosing an enterprise-wide outcome.
- Who should make the final decision in this question?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué opción de política empresarial delega una decisión sobre una función de Copilot a los propietarios de organizaciones? Usa las etiquetas de la interfaz en inglés.

1. Enabled for selected organizations

   Seleccionar organizaciones sigue siendo una decisión a nivel de empresa.

2. Let organizations decide **[CORRECT]**

   Esta opción delega la decisión a las organizaciones.

3. Enabled

   Enabled aplica una decisión empresarial.

4. Disabled

   Disabled aplica una restricción empresarial.

**Concept:** Delegación de políticas empresariales

**Authored coaching hints:**

- Distingue delegar de elegir un resultado para toda la empresa.
- ¿Quién debe tomar la decisión final en esta pregunta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual opção de política empresarial delega uma decisão sobre um recurso do Copilot aos proprietários das organizações? Use os rótulos da interface em inglês.

1. Enabled for selected organizations

   Selecionar organizações continua sendo uma escolha no nível da empresa.

2. Let organizations decide **[CORRECT]**

   Essa opção delega a decisão às organizações.

3. Enabled

   Enabled aplica uma decisão empresarial.

4. Disabled

   Disabled aplica uma restrição empresarial.

**Concept:** Delegação de políticas empresariais

**Authored coaching hints:**

- Diferencie delegar de escolher um resultado para toda a empresa.
- Quem deve tomar a decisão final nesta pergunta?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/enterprise/policies>

<!-- certification-coach-question:copilot-079:a81455eb65e6d67006418127815cac067da257b14be4b88f3ff874ea4cece3da -->
## Question 79: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-079`

**Content revision:** `a81455eb65e6d67006418127815cac067da257b14be4b88f3ff874ea4cece3da`

**en review revision:** `1ab52365952c9f32067158b39c7ca830be84e6b83217712669dc9b00945fc1fd`
**es review revision:** `0536449412278199b556e3a65f9b5927dd5bb1b4b3be0274f1cdbbf3e943eb9b`
**pt-BR review revision:** `37a1392337b650551105df6ff2ca6a7e3b436727c7118764e3422d0d23da6b02`

### English

Which REST endpoint lists organization-billed Copilot seat assignments?

1. GET /orgs/\{org\}/members

   Organization membership does not establish Copilot seat assignment.

2. GET /orgs/\{org\}/teams

   The team list is not the Copilot seat inventory.

3. GET /orgs/\{org\}/copilot/billing/seats **[CORRECT]**

   The seats endpoint lists assigned seats and assignee details.

4. GET /orgs/\{org\}/copilot/billing

   The billing endpoint returns subscription information and seat breakdowns.

**Concept:** Copilot seat inventory API

**Authored coaching hints:**

- A subscription summary differs from individual assignments.
- Organization membership does not imply a Copilot license.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué endpoint REST enumera las asignaciones de licencias de Copilot facturadas a una organización?

1. GET /orgs/\{org\}/members

   Ser miembro de la organización no establece una asignación de Copilot.

2. GET /orgs/\{org\}/teams

   La lista de equipos no es el inventario de licencias de Copilot.

3. GET /orgs/\{org\}/copilot/billing/seats **[CORRECT]**

   El endpoint seats enumera licencias asignadas y detalles de sus usuarios.

4. GET /orgs/\{org\}/copilot/billing

   El endpoint billing devuelve información de suscripción y desgloses de licencias.

**Concept:** API de inventario de licencias de Copilot

**Authored coaching hints:**

- Un resumen de suscripción difiere de las asignaciones individuales.
- Ser miembro de la organización no implica tener licencia de Copilot.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual endpoint REST lista as atribuições de licenças do Copilot cobradas de uma organização?

1. GET /orgs/\{org\}/members

   Ser membro da organização não comprova atribuição de licença do Copilot.

2. GET /orgs/\{org\}/teams

   A lista de equipes não é o inventário de licenças do Copilot.

3. GET /orgs/\{org\}/copilot/billing/seats **[CORRECT]**

   O endpoint seats lista licenças atribuídas e detalhes dos usuários.

4. GET /orgs/\{org\}/copilot/billing

   O endpoint billing retorna informações da assinatura e totais de licenças.

**Concept:** API de inventário de licenças do Copilot

**Authored coaching hints:**

- Um resumo da assinatura difere das atribuições individuais.
- Ser membro da organização não implica ter licença do Copilot.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/copilot/copilot-user-management>

<!-- certification-coach-question:copilot-080:e1df1fbba87404671aa8b93e02a55e47126bc72e0afb2a25664540d0b2773251 -->
## Question 80: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-080`

**Content revision:** `e1df1fbba87404671aa8b93e02a55e47126bc72e0afb2a25664540d0b2773251`

**en review revision:** `5d38f54471fa3d04955c67f799cf29bad49d0adedbfb0aff4fec84bc6976111d`
**es review revision:** `7e8ac1620d629e4c3fb7e9302136613d625f41c6e4f4b5bf7cd808bb9fa9dab6`
**pt-BR review revision:** `1d2f4ce9adb73be70cb98f4e38ca2c0228d508afbfd7638d0167efd95d55ea81`

### English

A seat-inventory script returns one page although total\_seats is larger. What should the script do?

1. Treat the first page as the complete inventory

   A successful response can still contain only one page.

2. Count organization repositories instead

   Repository counts do not measure assigned seats.

3. Retry with an unauthenticated request

   Unauthenticated retries do not retrieve protected inventory.

4. Retrieve the remaining result pages **[CORRECT]**

   The seat-list endpoint is paginated, so remaining pages are required.

**Concept:** Paginated seat inventory

**Authored coaching hints:**

- Check whether the response is a page or the entire collection.
- Successful status codes do not prove collection completeness.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un script de inventario devuelve una página aunque total\_seats es mayor. ¿Qué debe hacer el script?

1. Tratar la primera página como inventario completo

   Una respuesta correcta puede contener solo una página.

2. Contar repositorios de la organización

   Los conteos de repositorios no miden licencias asignadas.

3. Reintentar con una solicitud sin autenticación

   Los reintentos sin autenticación no recuperan inventarios protegidos.

4. Recuperar las páginas de resultados restantes **[CORRECT]**

   El endpoint de licencias está paginado, por lo que faltan páginas.

**Concept:** Inventario paginado de licencias

**Authored coaching hints:**

- Comprueba si la respuesta es una página o toda la colección.
- Un estado correcto no demuestra que la colección esté completa.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um script de inventário retorna uma página embora total\_seats seja maior. O que o script deve fazer?

1. Tratar a primeira página como inventário completo

   Uma resposta bem-sucedida pode conter apenas uma página.

2. Contar repositórios da organização

   Contagens de repositórios não medem licenças atribuídas.

3. Tentar novamente com uma solicitação não autenticada

   Tentativas sem autenticação não recuperam inventários protegidos.

4. Recuperar as páginas de resultados restantes **[CORRECT]**

   O endpoint de licenças é paginado, portanto faltam páginas.

**Concept:** Inventário paginado de licenças

**Authored coaching hints:**

- Verifique se a resposta é uma página ou toda a coleção.
- Um status de sucesso não prova que a coleção está completa.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/copilot/copilot-user-management>

<!-- certification-coach-question:copilot-081:f0c29385e4e61eea0d7340d3d736de6589dca5a3bd7a233fe3a43645bb6e6d9b -->
## Question 81: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-081`

**Content revision:** `f0c29385e4e61eea0d7340d3d736de6589dca5a3bd7a233fe3a43645bb6e6d9b`

**en review revision:** `cf20f75c38a7b8a3928b9d11188afcb34f751491c01cce7a7099c178cc2d0b85`
**es review revision:** `29b7b8431fa315cda72ef098bb10d57376dfe292456d5ecbd361fc91cccf0ff8`
**pt-BR review revision:** `6cd98a5253eb3578382ed8c5987ad335f462b910ecbb70c924f1c6242951ec7b`

### English

Which Copilot capability organizes a shared collection of context for questions?

1. Spaces **[CORRECT]**

   Spaces organize shared context for Copilot questions.

2. Prompt files

   Prompt files package reusable task requests.

3. Custom agent profiles

   Agent profiles configure specialized agents.

4. Code review policies

   Review policies control review availability and behavior.

**Concept:** Shared context with Spaces

**Authored coaching hints:**

- Distinguish a collection of knowledge from a reusable task.
- The goal is organizing shared reference material.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué capacidad de Copilot organiza una colección compartida de contexto para preguntas?

1. Spaces **[CORRECT]**

   Spaces organiza contexto compartido para preguntas a Copilot.

2. Archivos de prompts

   Los archivos de prompts empaquetan solicitudes reutilizables.

3. Perfiles de agentes personalizados

   Los perfiles configuran agentes especializados.

4. Políticas de revisión de código

   Las políticas de revisión controlan su disponibilidad y comportamiento.

**Concept:** Contexto compartido con Spaces

**Authored coaching hints:**

- Distingue una colección de conocimiento de una tarea reutilizable.
- El objetivo es organizar material de referencia compartido.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual capacidade do Copilot organiza uma coleção compartilhada de contexto para perguntas?

1. Spaces **[CORRECT]**

   Spaces organiza contexto compartilhado para perguntas ao Copilot.

2. Arquivos de prompts

   Arquivos de prompts empacotam solicitações reutilizáveis.

3. Perfis de agentes personalizados

   Perfis configuram agentes especializados.

4. Políticas de revisão de código

   Políticas de revisão controlam sua disponibilidade e comportamento.

**Concept:** Contexto compartilhado com Spaces

**Authored coaching hints:**

- Diferencie uma coleção de conhecimento de uma tarefa reutilizável.
- O objetivo é organizar material de referência compartilhado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-082:8d8099b60dad994d918443a749b84d482d3df67189aeaf56d4c82af49a206222 -->
## Question 82: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-082`

**Content revision:** `8d8099b60dad994d918443a749b84d482d3df67189aeaf56d4c82af49a206222`

**en review revision:** `f7dbffd26e63b9832674e6da81b25ee5d0e0c1abbd7f252113feffa2d1ee2eeb`
**es review revision:** `2b7b2f67c167f424085958ab33c44cbbb080d3e348b86061e222bf043479fa74`
**pt-BR review revision:** `4d51ca43584fffb9c62300924428c739190a0af90d9e2992d5fe56bc2ac52de1`

### English

Historically, what was GitHub Spark on github.com designed to create before its 2026 retirement?

1. Enterprise audit-log exports

   It was not an enterprise audit-export tool.

2. Applications from natural-language ideas **[CORRECT]**

   Spark helped users turn ideas into working applications.

3. Organization-wide Copilot license inventories

   It was not a seat-management product.

4. GitHub Actions runner images

   It was not a runner-image builder.

**Concept:** Historical GitHub Spark purpose

**Authored coaching hints:**

- Treat this as a historical capability, not a current recommendation.
- Identify the product’s primary creation workflow.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Históricamente, ¿qué estaba diseñado para crear GitHub Spark en github.com antes de su retirada en 2026?

1. Exportaciones de registros de auditoría empresariales

   No era una herramienta de exportación de auditoría empresarial.

2. Aplicaciones a partir de ideas en lenguaje natural **[CORRECT]**

   Spark ayudaba a convertir ideas en aplicaciones funcionales.

3. Inventarios de licencias de Copilot para organizaciones

   No era un producto de administración de licencias.

4. Imágenes de ejecutores de GitHub Actions

   No era un constructor de imágenes de ejecutores.

**Concept:** Propósito histórico de GitHub Spark

**Authored coaching hints:**

- Trátalo como una capacidad histórica, no como una recomendación actual.
- Identifica el flujo de creación principal del producto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Historicamente, o que o GitHub Spark no github.com foi projetado para criar antes de sua descontinuação em 2026?

1. Exportações de logs de auditoria empresariais

   Não era uma ferramenta de exportação de auditoria empresarial.

2. Aplicações a partir de ideias em linguagem natural **[CORRECT]**

   O Spark ajudava a transformar ideias em aplicações funcionais.

3. Inventários de licenças do Copilot para organizações

   Não era um produto de gerenciamento de licenças.

4. Imagens de executores do GitHub Actions

   Não era um construtor de imagens de executores.

**Concept:** Finalidade histórica do GitHub Spark

**Authored coaching hints:**

- Trate isso como uma capacidade histórica, não como uma recomendação atual.
- Identifique o principal fluxo de criação do produto.

</details>

**Official supporting source:** <https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/>

<!-- certification-coach-question:copilot-083:18710162ae367d82b692d6fdce8c1a4f95ddacb457cf861d48b29aba6c9fe03a -->
## Question 83: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-083`

**Content revision:** `18710162ae367d82b692d6fdce8c1a4f95ddacb457cf861d48b29aba6c9fe03a`

**en review revision:** `9e8c4969c9c1044f0ef08fb5d4de084d4bfd275cf777c99bf22a985c131d0db3`
**es review revision:** `aff474b920352c6b93f9784c8b7a3a300d16f910fa95f4deb03b448806f7fe84`
**pt-BR review revision:** `982545fef085a5a4ebe2243a574b15f3cf7b2dc6e2486e11afa7b32e58306216`

### English

Which file supplies repository-wide Copilot custom instructions?

1. .github/agents/reviewer.agent.md

   An agent profile defines a specialized agent.

2. .github/workflows/build.yml

   A workflow file defines automation for GitHub Actions.

3. .github/copilot-instructions.md **[CORRECT]**

   copilot-instructions.md is the repository-wide instructions entry point.

4. .github/prompts/build.prompt.md

   A prompt file is invoked for a specific interaction.

**Concept:** Repository-wide instructions file

**Authored coaching hints:**

- Match the file’s scope to all repository-context requests.
- Instructions, prompts, and agents are distinct customizations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo proporciona instrucciones personalizadas de Copilot para todo el repositorio?

1. .github/agents/reviewer.agent.md

   Un perfil define un agente especializado.

2. .github/workflows/build.yml

   Un archivo de flujo define automatización de GitHub Actions.

3. .github/copilot-instructions.md **[CORRECT]**

   copilot-instructions.md es el punto de entrada de instrucciones para todo el repositorio.

4. .github/prompts/build.prompt.md

   Un archivo de prompts se invoca para una interacción concreta.

**Concept:** Archivo de instrucciones de todo el repositorio

**Authored coaching hints:**

- Relaciona el alcance del archivo con todas las solicitudes en el contexto del repositorio.
- Instrucciones, prompts y agentes son personalizaciones distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo fornece instruções personalizadas do Copilot para todo o repositório?

1. .github/agents/reviewer.agent.md

   Um perfil define um agente especializado.

2. .github/workflows/build.yml

   Um arquivo de fluxo define automação do GitHub Actions.

3. .github/copilot-instructions.md **[CORRECT]**

   copilot-instructions.md é o ponto de entrada das instruções para todo o repositório.

4. .github/prompts/build.prompt.md

   Um arquivo de prompts é invocado para uma interação específica.

**Concept:** Arquivo de instruções de todo o repositório

**Authored coaching hints:**

- Relacione o escopo do arquivo a todas as solicitações no contexto do repositório.
- Instruções, prompts e agentes são personalizações diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-084:a0dbfa227e9730b1e018c2d2693d914ce238872f68c265f84d6dac792c0cfb45 -->
## Question 84: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-084`

**Content revision:** `a0dbfa227e9730b1e018c2d2693d914ce238872f68c265f84d6dac792c0cfb45`

**en review revision:** `a3e52fed0d24b69a595654996b67441880ceca19e2256c5aa42c11c65ef116db`
**es review revision:** `e2a8dd2f8bf3005b714db5de4d9a9bbed31f1ce410830dba201ee708f379ed8c`
**pt-BR review revision:** `ab45ad39c4402b7c4a4a8983e0bfda668798e4b59dae971941285baeb289a7e5`

### English

Which customization scopes Copilot guidance to matching file paths in a supported client?

1. Personal response preferences

   Personal preferences are not file-path rules.

2. A reusable prompt invoked manually

   A prompt is selected for an interaction, not automatically by path.

3. A repository-wide instructions file alone

   Repository-wide guidance applies broadly rather than only to matching paths.

4. Path-specific instructions **[CORRECT]**

   Path-specific instructions apply to files matching their configured scope.

**Concept:** Path-specific instructions

**Authored coaching hints:**

- Compare automatic applicability with manual invocation.
- Specialized guidance should not burden unrelated files.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué personalización limita la orientación de Copilot a rutas de archivo coincidentes en un cliente compatible?

1. Preferencias personales de respuesta

   Las preferencias personales no son reglas de rutas.

2. Un prompt reutilizable invocado manualmente

   Un prompt se elige para una interacción, no automáticamente por ruta.

3. Solo un archivo de instrucciones para todo el repositorio

   La orientación de todo el repositorio se aplica ampliamente, no solo a rutas coincidentes.

4. Instrucciones específicas de ruta **[CORRECT]**

   Las instrucciones de ruta se aplican a archivos que coinciden con su alcance configurado.

**Concept:** Instrucciones específicas de ruta

**Authored coaching hints:**

- Compara la aplicación automática con la invocación manual.
- La orientación especializada no debería cargar archivos no relacionados.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual personalização limita as orientações do Copilot a caminhos de arquivo correspondentes em um cliente compatível?

1. Preferências pessoais de resposta

   Preferências pessoais não são regras de caminhos.

2. Um prompt reutilizável invocado manualmente

   Um prompt é escolhido para uma interação, não automaticamente por caminho.

3. Somente um arquivo de instruções para todo o repositório

   Orientações de todo o repositório se aplicam amplamente, não apenas a caminhos correspondentes.

4. Instruções específicas de caminho **[CORRECT]**

   Instruções de caminho se aplicam a arquivos que correspondem ao escopo configurado.

**Concept:** Instruções específicas de caminho

**Authored coaching hints:**

- Compare aplicação automática com invocação manual.
- Orientações especializadas não devem sobrecarregar arquivos não relacionados.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-085:1590ceca73063e74f136f979f3857445a1b290c40699ed903c46f989ca0e190c -->
## Question 85: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-085`

**Content revision:** `1590ceca73063e74f136f979f3857445a1b290c40699ed903c46f989ca0e190c`

**en review revision:** `2ddd37a19464594b6a608d8c7835a29b5e85c25819586bb50fc1df7894ee38a5`
**es review revision:** `892301ff6dfb45519e5f37292886773381347e35c6cd269a63539559b2740893`
**pt-BR review revision:** `ed60f11c63076fd40a2a301181f9252d48ccfbfca432f37fcd83a4a23865592d`

### English

What distinguishes AGENTS.md from files under .github/agents?

1. Agent instructions versus specialized agent definitions **[CORRECT]**

   AGENTS.md provides instructions; .github/agents contains agent definitions.

2. Specialized agent definitions versus repository instructions

   This reverses the roles of the two locations.

3. IDE settings versus GitHub Actions workflows

   Neither location is primarily an IDE settings or workflow directory.

4. Prompt templates versus repository access policies

   These are not prompt-file and access-policy locations.

**Concept:** Agent instructions and definitions

**Authored coaching hints:**

- File names that mention agents can serve different purposes.
- Distinguish guidance consumed by an agent from defining the agent.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué distingue AGENTS.md de los archivos de .github/agents?

1. Instrucciones para agentes frente a definiciones de agentes especializados **[CORRECT]**

   AGENTS.md proporciona instrucciones; .github/agents contiene definiciones de agentes.

2. Definiciones de agentes especializados frente a instrucciones del repositorio

   Esto invierte las funciones de ambas ubicaciones.

3. Ajustes del IDE frente a flujos de GitHub Actions

   Ninguna ubicación es principalmente un directorio de ajustes del IDE o de flujos.

4. Plantillas de prompts frente a políticas de acceso al repositorio

   No son ubicaciones de prompts y políticas de acceso.

**Concept:** Instrucciones y definiciones de agentes

**Authored coaching hints:**

- Los nombres que mencionan agentes pueden tener propósitos distintos.
- Distingue orientar a un agente de definirlo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que diferencia AGENTS.md dos arquivos em .github/agents?

1. Instruções para agentes versus definições de agentes especializados **[CORRECT]**

   AGENTS.md fornece instruções; .github/agents contém definições de agentes.

2. Definições de agentes especializados versus instruções do repositório

   Isso inverte os papéis dos dois locais.

3. Configurações do IDE versus fluxos do GitHub Actions

   Nenhum local é principalmente um diretório de configurações do IDE ou de fluxos.

4. Modelos de prompts versus políticas de acesso ao repositório

   Não são locais de prompts e políticas de acesso.

**Concept:** Instruções e definições de agentes

**Authored coaching hints:**

- Nomes que mencionam agentes podem ter finalidades diferentes.
- Diferencie orientar um agente de defini-lo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-086:f2d68495f480bbf64e85cd64f7169ec6c134068ce8f608069219892babb464bc -->
## Question 86: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-086`

**Content revision:** `f2d68495f480bbf64e85cd64f7169ec6c134068ce8f608069219892babb464bc`

**en review revision:** `ea85d4e20bfceb4d9486a82e6453724f92edde8683bd694d99f4003f7f7001fe`
**es review revision:** `64a0b9c3d46f21298c732568473e6ea85b184d7e33be29c3e7bef7443335be81`
**pt-BR review revision:** `3bcdcfb6f430cb8f8f036cf0efa509c3b708164f55b3ca64822af26c2b0db550`

### English

Which customization stores a reusable task that a developer invokes when needed?

1. Personal language preferences

   Language preferences guide response style rather than define an on-demand task.

2. A prompt file **[CORRECT]**

   Prompt files package task-specific requests for explicit invocation.

3. Repository-wide custom instructions

   Repository instructions apply automatically within scope.

4. Organization feature policies

   Feature policies control availability rather than package a task.

**Concept:** On-demand prompt reuse

**Authored coaching hints:**

- Automatic background guidance differs from an explicit task request.
- Consider when the customization should take effect.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué personalización guarda una tarea reutilizable que el desarrollador invoca cuando la necesita?

1. Preferencias personales de idioma

   Las preferencias de idioma guían el estilo de respuesta, no una tarea bajo demanda.

2. Un archivo de prompts **[CORRECT]**

   Los archivos de prompts empaquetan solicitudes específicas para invocarlas explícitamente.

3. Instrucciones personalizadas para todo el repositorio

   Las instrucciones del repositorio se aplican automáticamente dentro de su alcance.

4. Políticas de funciones de organización

   Las políticas controlan disponibilidad en lugar de empaquetar tareas.

**Concept:** Reutilización de prompts bajo demanda

**Authored coaching hints:**

- La orientación automática difiere de una solicitud explícita de tarea.
- Piensa cuándo debería surtir efecto la personalización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual personalização armazena uma tarefa reutilizável que o desenvolvedor invoca quando precisa?

1. Preferências pessoais de idioma

   Preferências de idioma orientam o estilo de resposta, não uma tarefa sob demanda.

2. Um arquivo de prompts **[CORRECT]**

   Arquivos de prompts empacotam solicitações específicas para invocação explícita.

3. Instruções personalizadas para todo o repositório

   Instruções do repositório se aplicam automaticamente dentro do escopo.

4. Políticas de recursos da organização

   Políticas controlam disponibilidade em vez de empacotar tarefas.

**Concept:** Reutilização de prompts sob demanda

**Authored coaching hints:**

- Orientações automáticas diferem de uma solicitação explícita de tarefa.
- Considere quando a personalização deve entrar em ação.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-files>

<!-- certification-coach-question:copilot-087:4243ce84904dda25178b665bc69a4a1800db525b8345d76a43c64da7e289ad7e -->
## Question 87: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-087`

**Content revision:** `4243ce84904dda25178b665bc69a4a1800db525b8345d76a43c64da7e289ad7e`

**en review revision:** `043dc163ce131080ca9f30815e36301e3596d65dd4a5cd28aabb94870b4d31d4`
**es review revision:** `1015d77972b5faa0b89dc942d58ff2001c001e48f37a72710f789fdfadedb936`
**pt-BR review revision:** `f5482ac9d3d7266cf5c60f1a01ad41e3d7f629d1a1b4739cf5f7ec114c1b3f18`

### English

What do Copilot custom instructions provide rather than guaranteed policy enforcement?

1. A mandatory repository merge check

   Instructions alone do not configure required merge checks.

2. A deterministic code-formatting pass

   Model guidance is not a deterministic formatter.

3. Natural-language guidance **[CORRECT]**

   Instructions guide the model, which may not follow them consistently.

4. A compiler-enforced type rule

   Instructions do not add compiler rules.

**Concept:** Limits of instruction adherence

**Authored coaching hints:**

- Compare model guidance with executable validation.
- Non-deterministic generation affects compliance expectations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué proporcionan las instrucciones personalizadas de Copilot en lugar de aplicación garantizada de políticas?

1. Una comprobación obligatoria para fusionar en el repositorio

   Por sí solas no configuran comprobaciones obligatorias de fusión.

2. Una pasada determinista de formato de código

   La orientación del modelo no es un formateador determinista.

3. Orientación en lenguaje natural **[CORRECT]**

   Las instrucciones orientan al modelo, que puede no seguirlas de forma constante.

4. Una regla de tipos aplicada por el compilador

   Las instrucciones no añaden reglas al compilador.

**Concept:** Límites de cumplimiento de instrucciones

**Authored coaching hints:**

- Compara la orientación del modelo con la validación ejecutable.
- La generación no determinista afecta a las expectativas de cumplimiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que as instruções personalizadas do Copilot fornecem em vez de aplicação garantida de políticas?

1. Uma verificação obrigatória para mesclar no repositório

   Sozinhas, não configuram verificações obrigatórias de mesclagem.

2. Uma etapa determinística de formatação de código

   Orientação do modelo não é um formatador determinístico.

3. Orientações em linguagem natural **[CORRECT]**

   As instruções orientam o modelo, que pode não segui-las consistentemente.

4. Uma regra de tipos aplicada pelo compilador

   Instruções não adicionam regras ao compilador.

**Concept:** Limites de adesão a instruções

**Authored coaching hints:**

- Compare orientações do modelo com validação executável.
- A geração não determinística afeta as expectativas de conformidade.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-088:b73ada4b4ed1fc529e36b0d6f76b9a64217bc6817151d1107ddf90bda7e85f7c -->
## Question 88: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-088`

**Content revision:** `b73ada4b4ed1fc529e36b0d6f76b9a64217bc6817151d1107ddf90bda7e85f7c`

**en review revision:** `c00619a72ff52cd5ee58a0a7f201e3414c46edd73f777bb46d19bd1cdd2d574d`
**es review revision:** `7889e75002b2d189bec02d43ad6b92eb8058f2ac365eb044da1f160667af63f7`
**pt-BR review revision:** `94edf1b8935605a0c4113c1bd83f96f36050e40d1a0fd037b9ec8911be1e0db9`

### English

Which VS Code Copilot Chat reference includes only the currently selected text?

1. \#file

   \#file includes the file contents.

2. \#project

   \#project supplies project context.

3. \#path

   \#path supplies the file path.

4. \#selection **[CORRECT]**

   \#selection includes the selected text.

**Concept:** VS Code selected-code context

**Authored coaching hints:**

- Choose the context granularity requested in the stem.
- Selected text, file contents, and project context differ.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué referencia de Copilot Chat en VS Code incluye solo el texto seleccionado actualmente?

1. \#file

   \#file incluye el contenido del archivo.

2. \#project

   \#project proporciona contexto del proyecto.

3. \#path

   \#path proporciona la ruta del archivo.

4. \#selection **[CORRECT]**

   \#selection incluye el texto seleccionado.

**Concept:** Contexto de código seleccionado en VS Code

**Authored coaching hints:**

- Elige la granularidad de contexto solicitada en la pregunta.
- El texto seleccionado, el contenido del archivo y el contexto del proyecto son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual referência do Copilot Chat no VS Code inclui apenas o texto selecionado atualmente?

1. \#file

   \#file inclui o conteúdo do arquivo.

2. \#project

   \#project fornece contexto do projeto.

3. \#path

   \#path fornece o caminho do arquivo.

4. \#selection **[CORRECT]**

   \#selection inclui o texto selecionado.

**Concept:** Contexto de código selecionado no VS Code

**Authored coaching hints:**

- Escolha a granularidade de contexto solicitada na pergunta.
- Texto selecionado, conteúdo do arquivo e contexto do projeto são diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-089:6d55aeae641b1fd3e25e64bff2200ceb44d0cee79ad5d32a5e6a286f50d2c35d -->
## Question 89: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-089`

**Content revision:** `6d55aeae641b1fd3e25e64bff2200ceb44d0cee79ad5d32a5e6a286f50d2c35d`

**en review revision:** `9fc0e10febc0bc8a544f017eb5d10e1b51892acc20b6403dd2669eb9dd456cfb`
**es review revision:** `64816d17a3d072bd23659d76ee7d34f5f93b07c292027dd623b4c6ac2e7ea4ba`
**pt-BR review revision:** `486baa7b62b0c6358e8005d257273bfc55e9fd092c140096f85df11f1337842b`

### English

What should you type in Copilot Chat to discover the slash commands available in that environment?

1. / **[CORRECT]**

   Typing / lists the available slash commands.

2. @

   @ is used for participants or context mentions, depending on the client.

3. \#

   \# is used for context references in supported IDEs.

4. \!

   \! is not the documented Chat slash-command discovery prefix.

**Concept:** Discovering client commands

**Authored coaching hints:**

- Available commands vary by environment and chat context.
- Use discovery in the actual client rather than an assumed universal list.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debes escribir en Copilot Chat para descubrir los comandos de barra disponibles en ese entorno?

1. / **[CORRECT]**

   Escribir / muestra los comandos de barra disponibles.

2. @

   @ se usa para participantes o menciones de contexto, según el cliente.

3. \#

   \# se usa para referencias de contexto en IDE compatibles.

4. \!

   \! no es el prefijo documentado para descubrir comandos de barra en Chat.

**Concept:** Descubrimiento de comandos del cliente

**Authored coaching hints:**

- Los comandos disponibles varían según el entorno y el contexto del chat.
- Usa el descubrimiento en el cliente real, no una supuesta lista universal.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que você deve digitar no Copilot Chat para descobrir os comandos de barra disponíveis nesse ambiente?

1. / **[CORRECT]**

   Digitar / mostra os comandos de barra disponíveis.

2. @

   @ é usado para participantes ou menções de contexto, conforme o cliente.

3. \#

   \# é usado para referências de contexto em IDEs compatíveis.

4. \!

   \! não é o prefixo documentado para descobrir comandos de barra no Chat.

**Concept:** Descoberta de comandos do cliente

**Authored coaching hints:**

- Os comandos disponíveis variam conforme o ambiente e o contexto do chat.
- Use a descoberta no cliente real, não uma suposta lista universal.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-090:d8b29ab2928b3ed44501100f90f04527cba2e64842fa7844f4df4e1f86478595 -->
## Question 90: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-090`

**Content revision:** `d8b29ab2928b3ed44501100f90f04527cba2e64842fa7844f4df4e1f86478595`

**en review revision:** `613d67e6aaf11414dbc8f2ca299343c11a576c6c562d900b264c82f0d93d3871`
**es review revision:** `a4601af16724db90fc634beb3ecf91336642478fbe7a9b4fab2f66145e09d230`
**pt-BR review revision:** `61680d411790549a47f0c62790364c89c60312293a56e6b61c35a320e05ffcf5`

### English

Which VS Code Copilot Chat participant specializes in terminal commands and shell context?

1. @azure

   @azure specializes in Azure services.

2. @terminal **[CORRECT]**

   @terminal has context about the integrated terminal and shell.

3. @vscode

   @vscode specializes in VS Code features and commands.

4. @github

   @github provides GitHub-specific skills.

**Concept:** VS Code terminal participant

**Authored coaching hints:**

- Participants specialize in different domains.
- An editor command and a shell command are not the same.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué participante de Copilot Chat en VS Code se especializa en comandos de terminal y contexto del shell?

1. @azure

   @azure se especializa en servicios de Azure.

2. @terminal **[CORRECT]**

   @terminal tiene contexto sobre la terminal integrada y el shell.

3. @vscode

   @vscode se especializa en funciones y comandos de VS Code.

4. @github

   @github proporciona capacidades específicas de GitHub.

**Concept:** Participante de terminal en VS Code

**Authored coaching hints:**

- Los participantes se especializan en dominios distintos.
- Un comando del editor y uno del shell no son lo mismo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual participante do Copilot Chat no VS Code se especializa em comandos de terminal e contexto do shell?

1. @azure

   @azure se especializa em serviços do Azure.

2. @terminal **[CORRECT]**

   @terminal tem contexto sobre o terminal integrado e o shell.

3. @vscode

   @vscode se especializa em recursos e comandos do VS Code.

4. @github

   @github fornece capacidades específicas do GitHub.

**Concept:** Participante de terminal no VS Code

**Authored coaching hints:**

- Os participantes se especializam em domínios diferentes.
- Um comando do editor e um comando do shell não são a mesma coisa.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-091:08aad4f3b06bc62e17d1693869011ada0bab193e017695e701c6b0d7d4617e48 -->
## Question 91: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-091`

**Content revision:** `08aad4f3b06bc62e17d1693869011ada0bab193e017695e701c6b0d7d4617e48`

**en review revision:** `821c573f0d784c838bc4e286b3860b08a5655bd97d7622b002f0cb6a36b65165`
**es review revision:** `629bbec49bf27515bbbf2c3bf23dfb74db9183744677c68ceaaea2030d80759b`
**pt-BR review revision:** `a483eb34e7b9121c079695054163c0bf9c89ec0ff5abe7a6d2f7d3756ff49093`

### English

On the GitHub website, which Copilot Chat command begins a separate conversation?

1. /delete

   /delete deletes a conversation.

2. /clear

   /clear clears the conversation rather than being the separate new-conversation command.

3. /new **[CORRECT]**

   /new starts a new conversation on the website.

4. /rename

   /rename changes the conversation name.

**Concept:** Website conversation command

**Authored coaching hints:**

- Use the website meaning, not the VS Code meaning.
- Distinguish creating a conversation from clearing its contents.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En el sitio web de GitHub, ¿qué comando de Copilot Chat inicia una conversación independiente?

1. /delete

   /delete elimina una conversación.

2. /clear

   /clear limpia la conversación, en lugar de ser el comando para una conversación independiente.

3. /new **[CORRECT]**

   /new inicia una conversación nueva en el sitio web.

4. /rename

   /rename cambia el nombre de la conversación.

**Concept:** Comando de conversación del sitio web

**Authored coaching hints:**

- Usa el significado del sitio web, no el de VS Code.
- Distingue crear una conversación de limpiar su contenido.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No site do GitHub, qual comando do Copilot Chat inicia uma conversa separada?

1. /delete

   /delete exclui uma conversa.

2. /clear

   /clear limpa a conversa, em vez de ser o comando para uma conversa separada.

3. /new **[CORRECT]**

   /new inicia uma conversa nova no site.

4. /rename

   /rename altera o nome da conversa.

**Concept:** Comando de conversa do site

**Authored coaching hints:**

- Use o significado do site, não o do VS Code.
- Diferencie criar uma conversa de limpar seu conteúdo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-092:930f7f2257698f5c8b370bab132ba02bc913dd7f153e52f5ffe306d55ad21fe3 -->
## Question 92: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-092`

**Content revision:** `930f7f2257698f5c8b370bab132ba02bc913dd7f153e52f5ffe306d55ad21fe3`

**en review revision:** `0cb2bb368c7b58c59131e7cdb248ff0a9f8ddcbb46d87d479e3eb9963b08195d`
**es review revision:** `50277b7f362b652759278fc15fa489cb5f6bbcac26debc95f5683f32e27a97e5`
**pt-BR review revision:** `83a4ddb500ff7168fc5cad6786d6206862d87f5ada7bdd93053ab6eed81ead2c`

### English

Where can unlicensed organization members use Copilot code review when the required Business or Enterprise policies are enabled?

1. VS Code editor selections

   This policy does not grant unlicensed IDE review access.

2. Visual Studio local changes

   Unlicensed access under this policy is not available in IDEs.

3. JetBrains local changes

   The website policy does not grant local IDE review access.

4. GitHub.com pull requests **[CORRECT]**

   The unlicensed-member access option supports GitHub.com reviews.

**Concept:** Conditional review access without seats

**Authored coaching hints:**

- Separate website access policies from IDE entitlements.
- The question assumes paid usage and the required access policy are enabled.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde pueden usar la revisión de código de Copilot los miembros sin licencia cuando están activadas las políticas necesarias de Business o Enterprise?

1. Selecciones del editor de VS Code

   Esta política no concede revisión en el IDE sin licencia.

2. Cambios locales de Visual Studio

   El acceso sin licencia de esta política no está disponible en los IDE.

3. Cambios locales de JetBrains

   La política del sitio web no concede revisión local en el IDE.

4. Pull requests de GitHub.com **[CORRECT]**

   La opción de acceso para miembros sin licencia admite revisiones en GitHub.com.

**Concept:** Acceso condicional a revisión sin licencias

**Authored coaching hints:**

- Distingue las políticas de acceso web de los derechos del IDE.
- Se supone que están activados el uso de pago y la política de acceso necesaria.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde membros sem licença podem usar a revisão de código do Copilot quando as políticas necessárias de Business ou Enterprise estão ativadas?

1. Seleções do editor do VS Code

   Essa política não concede revisão no IDE sem licença.

2. Alterações locais do Visual Studio

   O acesso sem licença dessa política não está disponível nos IDEs.

3. Alterações locais do JetBrains

   A política do site não concede revisão local no IDE.

4. Pull requests do GitHub.com **[CORRECT]**

   A opção de acesso para membros sem licença permite revisões no GitHub.com.

**Concept:** Acesso condicional à revisão sem licenças

**Authored coaching hints:**

- Diferencie políticas de acesso web de direitos do IDE.
- Pressupõe-se que o uso pago e a política de acesso necessária estejam ativados.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review>

<!-- certification-coach-question:copilot-093:b70ca1184bf4fce8afea2901167720d7bf00bed21aab5fba8a616a0579867ce5 -->
## Question 93: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-093`

**Content revision:** `b70ca1184bf4fce8afea2901167720d7bf00bed21aab5fba8a616a0579867ce5`

**en review revision:** `a106767603ae3330f631e6a553ac939093975ad5772cc6623e8c584128c4ef2e`
**es review revision:** `36e3abb8061e87760c509f071bfc925f4b5465a73b0349da6b99b541f3e8d1ff`
**pt-BR review revision:** `6da8dc7d66c20fda8749e00b772801f571f387b64ed09a751591de72990238b7`

### English

Without write access to a repository, what access does a Copilot session on GitHub.com have to that repository?

1. Read-only access **[CORRECT]**

   Sessions without repository write access are read-only.

2. Write access inherited from Copilot

   Copilot does not confer the missing write permission.

3. Administrative access for the session

   Starting a session does not elevate repository privileges.

4. Write access after selecting another model

   Changing models does not change repository authorization.

**Concept:** Repository authorization for cloud sessions

**Authored coaching hints:**

- Separate AI feature access from repository permissions.
- Choosing a model does not grant a GitHub role.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Sin permiso de escritura en un repositorio, ¿qué acceso tiene una sesión de Copilot en GitHub.com a ese repositorio?

1. Acceso de solo lectura **[CORRECT]**

   Las sesiones sin permiso de escritura en el repositorio son de solo lectura.

2. Acceso de escritura heredado de Copilot

   Copilot no concede el permiso de escritura que falta.

3. Acceso administrativo durante la sesión

   Iniciar una sesión no eleva privilegios del repositorio.

4. Acceso de escritura al seleccionar otro modelo

   Cambiar de modelo no cambia la autorización del repositorio.

**Concept:** Autorización de repositorio para sesiones en la nube

**Authored coaching hints:**

- Distingue el acceso a funciones de IA de los permisos del repositorio.
- Elegir un modelo no concede un rol de GitHub.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Sem permissão de escrita em um repositório, qual acesso uma sessão do Copilot no GitHub.com tem a esse repositório?

1. Acesso somente leitura **[CORRECT]**

   Sessões sem permissão de escrita no repositório são somente leitura.

2. Acesso de escrita herdado do Copilot

   O Copilot não concede a permissão de escrita ausente.

3. Acesso administrativo durante a sessão

   Iniciar uma sessão não eleva privilégios do repositório.

4. Acesso de escrita após selecionar outro modelo

   Trocar de modelo não altera a autorização do repositório.

**Concept:** Autorização de repositório para sessões na nuvem

**Authored coaching hints:**

- Diferencie acesso a recursos de IA de permissões do repositório.
- Escolher um modelo não concede uma função do GitHub.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-094:32cee8fa2f2f6758155f6b1cf1d3f090db38d56510a1b40e943246245f3e4a17 -->
## Question 94: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-094`

**Content revision:** `32cee8fa2f2f6758155f6b1cf1d3f090db38d56510a1b40e943246245f3e4a17`

**en review revision:** `a1cf500e0d81e7f16478caf73985615309c9374c1bee47f2d44a6112c688bb73`
**es review revision:** `c565d289c28ba5fbb65fd89a628f0e60adbb3c51d280b33143129852f4aa0e05`
**pt-BR review revision:** `5226ee2a331ebbc0ef74ef3f82788665bc9c35a6e267227c4f910b2bd42176ab`

### English

Which Visual Studio Copilot Chat command targets the running time of selected code?

1. /explain

   /explain describes how code works.

2. /optimize **[CORRECT]**

   /optimize analyzes and improves the selected code’s running time.

3. /doc

   /doc adds documentation comments.

4. /tests

   /tests generates unit tests.

**Concept:** Visual Studio optimization command

**Authored coaching hints:**

- Identify the requested output rather than the programming language.
- Performance analysis differs from documentation and test generation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en Visual Studio se centra en el tiempo de ejecución del código seleccionado?

1. /explain

   /explain describe cómo funciona el código.

2. /optimize **[CORRECT]**

   /optimize analiza y mejora el tiempo de ejecución del código seleccionado.

3. /doc

   /doc añade comentarios de documentación.

4. /tests

   /tests genera pruebas unitarias.

**Concept:** Comando de optimización en Visual Studio

**Authored coaching hints:**

- Identifica el resultado solicitado, no el lenguaje de programación.
- Analizar rendimiento difiere de documentar y generar pruebas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no Visual Studio se concentra no tempo de execução do código selecionado?

1. /explain

   /explain descreve como o código funciona.

2. /optimize **[CORRECT]**

   /optimize analisa e melhora o tempo de execução do código selecionado.

3. /doc

   /doc adiciona comentários de documentação.

4. /tests

   /tests gera testes unitários.

**Concept:** Comando de otimização no Visual Studio

**Authored coaching hints:**

- Identifique o resultado solicitado, não a linguagem de programação.
- Analisar desempenho difere de documentar e gerar testes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-095:bbbdb1e6214d2a716f481c0804a908555401c6deef72941ad11fdcad899bdf57 -->
## Question 95: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-095`

**Content revision:** `bbbdb1e6214d2a716f481c0804a908555401c6deef72941ad11fdcad899bdf57`

**en review revision:** `2bc5464ac25615452d49d49c53c3547ad42aebb09b4909d2e469b7fc2b57ae91`
**es review revision:** `bf6f35876d9628a55b68ac61b36f4e015251f0f4a65d825aada5eaf087f235ba`
**pt-BR review revision:** `11ca3fee254d8ad19f30f48319dfc27af7a4a166ed6019cae609c0bcdc7f7bb4`

### English

Which organization policy must allow reviews on GitHub.com for users receiving Copilot from that organization? Use English UI labels.

1. Opt in to user feedback collection

   Feedback collection does not enable code review.

2. Copilot CLI

   The CLI policy controls a different client.

3. Copilot code review **[CORRECT]**

   The Copilot code review policy controls this review availability.

4. MCP servers in Copilot

   The MCP policy governs supported MCP use.

**Concept:** Code review organization policy

**Authored coaching hints:**

- Choose the capability-specific control.
- A working client or tool connection does not imply review access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué política de organización debe permitir revisiones en GitHub.com para quienes reciben Copilot de esa organización? Usa las etiquetas de la interfaz en inglés.

1. Opt in to user feedback collection

   La recopilación de comentarios no activa revisiones de código.

2. Copilot CLI

   La política CLI controla otro cliente.

3. Copilot code review **[CORRECT]**

   La política Copilot code review controla esta disponibilidad de revisión.

4. MCP servers in Copilot

   La política MCP gobierna el uso compatible de MCP.

**Concept:** Política de revisión de código de organización

**Authored coaching hints:**

- Elige el control específico de la capacidad.
- Un cliente o una conexión operativos no implican acceso a revisión.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual política da organização deve permitir revisões no GitHub.com para quem recebe o Copilot dessa organização? Use os rótulos da interface em inglês.

1. Opt in to user feedback collection

   A coleta de feedback não ativa revisões de código.

2. Copilot CLI

   A política CLI controla outro cliente.

3. Copilot code review **[CORRECT]**

   A política Copilot code review controla essa disponibilidade de revisão.

4. MCP servers in Copilot

   A política MCP governa o uso compatível de MCP.

**Concept:** Política de revisão de código da organização

**Authored coaching hints:**

- Escolha o controle específico da capacidade.
- Um cliente ou uma conexão funcionando não implica acesso à revisão.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review>

<!-- certification-coach-question:copilot-096:8377f095eff2129d41314478f593094a6ffe76679bbe4570bb7d99dab9475f6a -->
## Question 96: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-096`

**Content revision:** `8377f095eff2129d41314478f593094a6ffe76679bbe4570bb7d99dab9475f6a`

**en review revision:** `8b9830ff9a20000dd8700c3033fed0c205aa59aedfc2dfe8c26b76cf7ba41b50`
**es review revision:** `3509a4d29ae53685909a4e82e91addf09229bc26b9c1ac976a57374cb7c552ba`
**pt-BR review revision:** `35c84e51f581c67a90ae19e0858a722426a944a0e12038a34f2be42527ee76d8`

### English

Where do personal Copilot instructions configured on GitHub.com apply?

1. Every local CLI session automatically

   CLI personal instructions use local files instead.

2. All organization members’ conversations

   Personal instructions are not organization-wide instructions.

3. Every repository collaborator’s IDE

   They do not configure other collaborators’ IDEs.

4. Copilot Chat on GitHub **[CORRECT]**

   Website personal instructions apply to your Copilot Chat conversations on GitHub.

**Concept:** Personal instructions scope

**Authored coaching hints:**

- Distinguish the owner of the preference from its supported surface.
- Personal and organization instructions have different scopes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde se aplican las instrucciones personales de Copilot configuradas en GitHub.com?

1. Todas las sesiones locales de CLI automáticamente

   Las instrucciones personales de CLI usan archivos locales.

2. Las conversaciones de todos los miembros de la organización

   Las instrucciones personales no son instrucciones para toda la organización.

3. El IDE de cada colaborador del repositorio

   No configuran los IDE de otros colaboradores.

4. Copilot Chat en GitHub **[CORRECT]**

   Las instrucciones personales del sitio se aplican a tus conversaciones de Copilot Chat en GitHub.

**Concept:** Alcance de instrucciones personales

**Authored coaching hints:**

- Distingue al propietario de la preferencia de la superficie compatible.
- Las instrucciones personales y de organización tienen alcances distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde se aplicam as instruções pessoais do Copilot configuradas no GitHub.com?

1. Todas as sessões locais da CLI automaticamente

   Instruções pessoais da CLI usam arquivos locais.

2. As conversas de todos os membros da organização

   Instruções pessoais não são instruções para toda a organização.

3. O IDE de cada colaborador do repositório

   Elas não configuram os IDEs de outros colaboradores.

4. Copilot Chat no GitHub **[CORRECT]**

   As instruções pessoais do site se aplicam às suas conversas do Copilot Chat no GitHub.

**Concept:** Escopo de instruções pessoais

**Authored coaching hints:**

- Diferencie o proprietário da preferência da superfície compatível.
- Instruções pessoais e de organização têm escopos diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-097:2971375820da755975ce764d4f33dacabd8aa2cc883166c85c247709c7c5c72b -->
## Question 97: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-097`

**Content revision:** `2971375820da755975ce764d4f33dacabd8aa2cc883166c85c247709c7c5c72b`

**en review revision:** `34a447ab656f91fad30849e5b4b8b18df023417ba15398984aa625cc303825a5`
**es review revision:** `e8891ec745480cf1dcb1cc8700d5adfd85dc6b2ea22d39449bc9978e78173eed`
**pt-BR review revision:** `1d9187c3acc2bb591dc175af4ab7b30d4afd3ee2baecde1ee7c958dab192c964`

### English

Which IDE pair supports Copilot edit mode according to the public feature matrix?

1. VS Code and JetBrains **[CORRECT]**

   The matrix lists edit mode for VS Code and JetBrains.

2. Visual Studio and Eclipse

   Neither Visual Studio nor Eclipse is listed as supporting edit mode.

3. Xcode and NeoVim

   Neither Xcode nor NeoVim is listed as supporting edit mode.

4. Visual Studio and Xcode

   Neither Visual Studio nor Xcode is listed as supporting edit mode.

**Concept:** Copilot Edits client support

**Authored coaching hints:**

- Support for chat does not imply support for every editing workflow.
- Check the specific feature row rather than general Copilot availability.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué par de IDE admite el modo de edición de Copilot según la matriz pública de funciones?

1. VS Code y JetBrains **[CORRECT]**

   La matriz indica modo de edición para VS Code y JetBrains.

2. Visual Studio y Eclipse

   Ni Visual Studio ni Eclipse figuran con soporte para modo de edición.

3. Xcode y NeoVim

   Ni Xcode ni NeoVim figuran con soporte para modo de edición.

4. Visual Studio y Xcode

   Ni Visual Studio ni Xcode figuran con soporte para modo de edición.

**Concept:** Compatibilidad de clientes con Copilot Edits

**Authored coaching hints:**

- Admitir chat no implica admitir todos los flujos de edición.
- Consulta la fila de la función específica, no la disponibilidad general de Copilot.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual par de IDEs oferece o modo de edição do Copilot segundo a matriz pública de recursos?

1. VS Code e JetBrains **[CORRECT]**

   A matriz indica modo de edição para VS Code e JetBrains.

2. Visual Studio e Eclipse

   Nem Visual Studio nem Eclipse aparecem com suporte ao modo de edição.

3. Xcode e NeoVim

   Nem Xcode nem NeoVim aparecem com suporte ao modo de edição.

4. Visual Studio e Xcode

   Nem Visual Studio nem Xcode aparecem com suporte ao modo de edição.

**Concept:** Compatibilidade de clientes com Copilot Edits

**Authored coaching hints:**

- Oferecer chat não implica oferecer todos os fluxos de edição.
- Consulte a linha do recurso específico, não a disponibilidade geral do Copilot.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/copilot-feature-matrix>

<!-- certification-coach-question:copilot-098:adb9e6dddef43ede987582b676d8e1abd943699c52e1abb75576b4cf737067dc -->
## Question 98: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-098`

**Content revision:** `adb9e6dddef43ede987582b676d8e1abd943699c52e1abb75576b4cf737067dc`

**en review revision:** `10ab274dd27b245e9738ae21363de351c08047cdb1989794aa1d371dca990241`
**es review revision:** `7031d07ca34f7526cb11ddd4f9877250b3b3cfd9113eb2e519442b1ab42a3238`
**pt-BR review revision:** `bf741f6cbe63bcb6faffa31b316df2cab18cd00921283f3c61f11e3ba2709a77`

### English

Which repository scope applies to a Copilot task running on GitHub Actions?

1. Changes are limited to public repositories

   The restriction concerns repository scope, not public visibility.

2. Changes stay in the selected repository **[CORRECT]**

   Actions-based tasks can change only the selected repository.

3. Changes can span every repository in the organization

   Multi-repository changes are supported by cloud sandboxes, not this environment.

4. Changes can span repositories on any Git host

   The Actions workflow does not confer cross-host editing.

**Concept:** Environment-specific repository scope

**Authored coaching hints:**

- Do not generalize one environment’s limits to all cloud sessions.
- Distinguish GitHub Actions execution from cloud sandboxes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué alcance de repositorio corresponde a una tarea de Copilot que se ejecuta en GitHub Actions?

1. Los cambios se limitan a repositorios públicos

   La restricción trata del alcance del repositorio, no de su visibilidad pública.

2. Los cambios quedan en el repositorio seleccionado **[CORRECT]**

   Las tareas basadas en Actions solo pueden cambiar el repositorio seleccionado.

3. Los cambios pueden abarcar todos los repositorios de la organización

   Los cambios en varios repositorios se admiten en sandboxes de nube, no en este entorno.

4. Los cambios pueden abarcar repositorios en cualquier alojamiento Git

   El flujo de Actions no concede edición entre alojamientos.

**Concept:** Alcance de repositorio según el entorno

**Authored coaching hints:**

- No generalices los límites de un entorno a todas las sesiones en la nube.
- Distingue la ejecución en GitHub Actions de los sandboxes de nube.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual escopo de repositório se aplica a uma tarefa do Copilot executada no GitHub Actions?

1. As alterações se limitam a repositórios públicos

   A restrição trata do escopo do repositório, não da visibilidade pública.

2. As alterações ficam no repositório selecionado **[CORRECT]**

   Tarefas baseadas em Actions só podem alterar o repositório selecionado.

3. As alterações podem abranger todos os repositórios da organização

   Alterações em vários repositórios são compatíveis com sandboxes de nuvem, não com esse ambiente.

4. As alterações podem abranger repositórios em qualquer hospedagem Git

   O fluxo do Actions não concede edição entre hospedagens.

**Concept:** Escopo de repositório por ambiente

**Authored coaching hints:**

- Não generalize os limites de um ambiente para todas as sessões na nuvem.
- Diferencie a execução no GitHub Actions dos sandboxes de nuvem.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-099:d27263289d7d27cb2c9dd0a1adf2801d8169e5f631581146e5694da7f58d6c6f -->
## Question 99: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-099`

**Content revision:** `d27263289d7d27cb2c9dd0a1adf2801d8169e5f631581146e5694da7f58d6c6f`

**en review revision:** `3b624a05e389c58c6adc0a3e8c242562da198abd0992e01b6b52c7df28775468`
**es review revision:** `806c8f990c1081535e23fb31638caa7856b311d73a3e8496573bf74b1e7c5ccd`
**pt-BR review revision:** `f3338ed0c49e9e4497cc0277656984253c8c2da958ea90a6750ab6c90a674c29`

### English

A local Copilot CLI session is remotely controlled from GitHub.com. Where does it continue running?

1. In the browser tab controlling it

   The browser steers the session but does not execute its tools.

2. On a GitHub Actions runner

   Remote control does not turn the session into an Actions job.

3. On the original local machine **[CORRECT]**

   Remote control leaves execution on the original machine, which must stay online.

4. In a newly created cloud sandbox

   Remote control does not automatically migrate execution to a sandbox.

**Concept:** Remote control versus execution host

**Authored coaching hints:**

- Changing the control surface does not necessarily move compute.
- Consider which machine must remain online.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una sesión local de Copilot CLI se controla remotamente desde GitHub.com. ¿Dónde sigue ejecutándose?

1. En la pestaña del navegador que la controla

   El navegador dirige la sesión, pero no ejecuta sus herramientas.

2. En un ejecutor de GitHub Actions

   El control remoto no convierte la sesión en un trabajo de Actions.

3. En la máquina local original **[CORRECT]**

   El control remoto mantiene la ejecución en la máquina original, que debe seguir conectada.

4. En un sandbox de nube recién creado

   El control remoto no migra automáticamente la ejecución a un sandbox.

**Concept:** Control remoto frente a host de ejecución

**Authored coaching hints:**

- Cambiar la superficie de control no necesariamente mueve el cómputo.
- Piensa qué máquina debe permanecer conectada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma sessão local do Copilot CLI é controlada remotamente pelo GitHub.com. Onde ela continua sendo executada?

1. Na aba do navegador que a controla

   O navegador orienta a sessão, mas não executa suas ferramentas.

2. Em um executor do GitHub Actions

   O controle remoto não transforma a sessão em um trabalho do Actions.

3. Na máquina local original **[CORRECT]**

   O controle remoto mantém a execução na máquina original, que deve continuar online.

4. Em um sandbox de nuvem recém-criado

   O controle remoto não migra automaticamente a execução para um sandbox.

**Concept:** Controle remoto versus host de execução

**Authored coaching hints:**

- Mudar a superfície de controle não necessariamente move a computação.
- Considere qual máquina precisa permanecer online.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-100:c74318061aba3757c414b5d636fc711effa15ec9424fcca289e94f560e93284e -->
## Question 100: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-100`

**Content revision:** `c74318061aba3757c414b5d636fc711effa15ec9424fcca289e94f560e93284e`

**en review revision:** `d4b46dfb8ab44e94db65e5b3d2fd74a3ce94bafe9688a3c8f7c8b6f921fd40b1`
**es review revision:** `1526b9349ceb6e7128bad143022473b74ecf0cf6a51e0d7fd0db5ea1359077b9`
**pt-BR review revision:** `b874f28b109e70132a15adfd2655eb5d22b815bfc8ba6be3ff924bf40b35eb6a`

### English

Which Visual Studio Copilot Chat command adds a documentation comment for a symbol?

1. /explain

   /explain provides an explanation rather than adding that comment.

2. /optimize

   /optimize targets running time.

3. /tests

   /tests generates unit tests.

4. /doc **[CORRECT]**

   /doc adds a documentation comment for the symbol.

**Concept:** Visual Studio documentation command

**Authored coaching hints:**

- Documentation inserted into source differs from a conversational explanation.
- Use the command set of the named IDE.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en Visual Studio añade un comentario de documentación para un símbolo?

1. /explain

   /explain proporciona una explicación en lugar de añadir ese comentario.

2. /optimize

   /optimize se centra en el tiempo de ejecución.

3. /tests

   /tests genera pruebas unitarias.

4. /doc **[CORRECT]**

   /doc añade un comentario de documentación para el símbolo.

**Concept:** Comando de documentación en Visual Studio

**Authored coaching hints:**

- La documentación insertada en el código difiere de una explicación conversacional.
- Usa los comandos del IDE indicado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no Visual Studio adiciona um comentário de documentação para um símbolo?

1. /explain

   /explain fornece uma explicação em vez de adicionar esse comentário.

2. /optimize

   /optimize se concentra no tempo de execução.

3. /tests

   /tests gera testes unitários.

4. /doc **[CORRECT]**

   /doc adiciona um comentário de documentação para o símbolo.

**Concept:** Comando de documentação no Visual Studio

**Authored coaching hints:**

- A documentação inserida no código difere de uma explicação conversacional.
- Use os comandos do IDE indicado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-101:362096d07daa3d57d52c7396bea42be43ef09c2be96b388ee5d955d5c132feaa -->
## Question 101: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-101`

**Content revision:** `362096d07daa3d57d52c7396bea42be43ef09c2be96b388ee5d955d5c132feaa`

**en review revision:** `0510ee58b368e687691e0232e26918735388ade7e393b515bf7b25efc4649e7b`
**es review revision:** `29ecd4856c4c5f8f183774f006c46d6cf1a9868d00470138d06632be53ed3e30`
**pt-BR review revision:** `7a67fd5aa2de4de12f18692fb7ae3026ea1adefb74e205438d1aee2bf8e6a007`

### English

Which VS Code Copilot Chat command requests unit tests for the selected function?

1. /tests **[CORRECT]**

   /tests generates unit tests for selected code.

2. /fixTestFailure

   /fixTestFailure targets an existing failing test.

3. /explain

   /explain describes how the code works.

4. /help

   /help displays Copilot usage basics.

**Concept:** VS Code unit-test generation command

**Authored coaching hints:**

- Creating tests differs from diagnosing an existing failure.
- The selected function supplies the target context.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comando de Copilot Chat en VS Code solicita pruebas unitarias para la función seleccionada?

1. /tests **[CORRECT]**

   /tests genera pruebas unitarias para el código seleccionado.

2. /fixTestFailure

   /fixTestFailure se centra en una prueba existente que falla.

3. /explain

   /explain describe cómo funciona el código.

4. /help

   /help muestra conceptos básicos de uso de Copilot.

**Concept:** Comando de generación de pruebas unitarias en VS Code

**Authored coaching hints:**

- Crear pruebas es distinto de diagnosticar un fallo existente.
- La función seleccionada proporciona el contexto de destino.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comando do Copilot Chat no VS Code solicita testes unitários para a função selecionada?

1. /tests **[CORRECT]**

   /tests gera testes unitários para o código selecionado.

2. /fixTestFailure

   /fixTestFailure se concentra em um teste existente com falha.

3. /explain

   /explain descreve como o código funciona.

4. /help

   /help exibe noções básicas de uso do Copilot.

**Concept:** Comando de geração de testes unitários no VS Code

**Authored coaching hints:**

- Criar testes é diferente de diagnosticar uma falha existente.
- A função selecionada fornece o contexto de destino.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/chat-cheat-sheet>

<!-- certification-coach-question:copilot-102:2cfcd400429218c2110a7d818df90aff5d3faa1ed609093855de6736c678b662 -->
## Question 102: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-102`

**Content revision:** `2cfcd400429218c2110a7d818df90aff5d3faa1ed609093855de6736c678b662`

**en review revision:** `a8df23cc4f36b0ff70124df4546c2dede9feca633afc1c5f1cb96c756bc8d238`
**es review revision:** `309e47f1451239dd26a721b83071e81aaac66a80e688ba275736dddf6b5372d1`
**pt-BR review revision:** `bbaf5ad9f7bdb8241da2f52e5b05e8234b79ea73b6bd309b30fbf48b09cf1c04`

### English

Who can disable Copilot in the cloud for one repository while leaving other repositories eligible?

1. Any pull request reviewer

   Being a reviewer does not itself grant this administrative control.

2. Repository administrators **[CORRECT]**

   Repository owners and administrators can disable it for that repository.

3. Any reader of the repository

   Read access alone does not provide repository administration.

4. Any Copilot Pro subscriber

   A personal subscription does not grant repository administrative rights.

**Concept:** Repository-level cloud access control

**Authored coaching hints:**

- Match the control’s scope to the actor’s permissions.
- A Copilot entitlement is not a repository administrator role.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Quién puede desactivar Copilot en la nube para un repositorio sin desactivar otros repositorios?

1. Cualquier revisor de pull requests

   Ser revisor no concede por sí mismo este control administrativo.

2. Administradores del repositorio **[CORRECT]**

   Los propietarios y administradores pueden desactivarlo para ese repositorio.

3. Cualquier lector del repositorio

   El acceso de lectura por sí solo no permite administrarlo.

4. Cualquier suscriptor de Copilot Pro

   Una suscripción personal no concede derechos administrativos del repositorio.

**Concept:** Control de acceso a la nube por repositorio

**Authored coaching hints:**

- Relaciona el alcance del control con los permisos del actor.
- Tener acceso a Copilot no equivale a ser administrador del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quem pode desativar o Copilot na nuvem para um repositório sem desativar outros repositórios?

1. Qualquer revisor de pull requests

   Ser revisor não concede por si só esse controle administrativo.

2. Administradores do repositório **[CORRECT]**

   Proprietários e administradores podem desativá-lo para esse repositório.

3. Qualquer leitor do repositório

   Acesso de leitura por si só não permite administrá-lo.

4. Qualquer assinante do Copilot Pro

   Uma assinatura pessoal não concede direitos administrativos do repositório.

**Concept:** Controle de acesso à nuvem por repositório

**Authored coaching hints:**

- Relacione o escopo do controle às permissões do ator.
- Ter acesso ao Copilot não equivale a ser administrador do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-103:fcb9e6fa0d292adea04ad50a2c4d81e6cd56a1ffef63f8d9044de493541e044b -->
## Question 103: Use GitHub Copilot responsibly

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-103`

**Content revision:** `fcb9e6fa0d292adea04ad50a2c4d81e6cd56a1ffef63f8d9044de493541e044b`

**en review revision:** `e22b3c175ed7a14d2100b6c69eaa14f9fbb203bbc62a41a33c0a7176213a9922`
**es review revision:** `80ff3f66f8906f43a58619e61c122aee5d0d9f3b93b7e6aadaed04e12a9828d2`
**pt-BR review revision:** `fe60f46053b93cd8b89d21ca5369ff15590da36891cd7899f061beb2f6dc21ee`

### English

Which principle is most directly implicated when an AI-assisted feature works with a mouse but blocks screen-reader users from completing the task?

1. Transparency

   Transparency concerns communicating capabilities and limitations.

2. Reliability

   Reliability concerns consistent operation, not whether users can access the feature.

3. Accountability

   Accountability concerns responsibility for decisions and outcomes.

4. Inclusiveness **[CORRECT]**

   Inclusiveness requires considering users with different abilities and access needs.

**Concept:** Inclusive access

**Authored coaching hints:**

- Which users cannot complete the same task?
- Is the barrier about disclosure, dependable operation, or access?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué principio se ve más directamente afectado si una función asistida por IA funciona con mouse, pero impide completar la tarea a quienes usan lectores de pantalla?

1. Transparencia

   La transparencia comunica capacidades y límites.

2. Confiabilidad

   La confiabilidad trata de la operación consistente, no de si las personas pueden acceder a la función.

3. Rendición de cuentas

   La rendición de cuentas trata de la responsabilidad por decisiones y resultados.

4. Inclusión **[CORRECT]**

   La inclusión requiere considerar distintas capacidades y necesidades de acceso.

**Concept:** Acceso inclusivo

**Authored coaching hints:**

- ¿Qué usuarios no pueden completar la misma tarea?
- ¿La barrera se relaciona con divulgación, operación confiable o acceso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual princípio é mais diretamente afetado quando um recurso assistido por IA funciona com mouse, mas impede usuários de leitor de tela de concluir a tarefa?

1. Transparência

   Transparência comunica recursos e limites.

2. Confiabilidade

   Confiabilidade trata da operação consistente, não de os usuários conseguirem acessar o recurso.

3. Responsabilização

   Responsabilização trata da responsabilidade por decisões e resultados.

4. Inclusão **[CORRECT]**

   Inclusão exige considerar diferentes habilidades e necessidades de acesso.

**Concept:** Acesso inclusivo

**Authored coaching hints:**

- Quais usuários não conseguem concluir a mesma tarefa?
- A barreira se relaciona a divulgação, operação confiável ou acesso?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-104:de0d2d80f9b6b16f22454cef10ff1e4ee293e8818afd1f941e15d9df7f268af9 -->
## Question 104: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-104`

**Content revision:** `de0d2d80f9b6b16f22454cef10ff1e4ee293e8818afd1f941e15d9df7f268af9`

**en review revision:** `264847d7965b9f385239b965f3e1b18cda454fa45383a14cb4568e387e8a77fb`
**es review revision:** `129b493d1e75825ced705680f18b9964df0656572032a9e5f0d1654b6c71e781`
**pt-BR review revision:** `a823879642ff36027e773befc06d153c6054af3bf9a7e46c9532e309c4da6bc9`

### English

Which path follows the default repository prompt-file convention?

1. .github/agents/review.agent.md

   This path defines a custom agent.

2. .github/copilot-instructions.md

   This file supplies repository-wide instructions.

3. .github/prompts/review.prompt.md **[CORRECT]**

   Repository prompt files typically use .github/prompts and the .prompt.md extension.

4. .github/instructions/review.instructions.md

   This path stores path-specific instructions.

**Concept:** Prompt file path and extension

**Authored coaching hints:**

- Directory and extension both identify the customization type.
- Distinguish a reusable task from automatically applied guidance.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ruta sigue la convención predeterminada de archivos de prompts del repositorio?

1. .github/agents/review.agent.md

   Esta ruta define un agente personalizado.

2. .github/copilot-instructions.md

   Este archivo proporciona instrucciones para todo el repositorio.

3. .github/prompts/review.prompt.md **[CORRECT]**

   Los archivos de prompts suelen usar .github/prompts y la extensión .prompt.md.

4. .github/instructions/review.instructions.md

   Esta ruta guarda instrucciones específicas de ruta.

**Concept:** Ruta y extensión de archivos de prompts

**Authored coaching hints:**

- El directorio y la extensión identifican el tipo de personalización.
- Distingue una tarea reutilizable de la orientación aplicada automáticamente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual caminho segue a convenção padrão de arquivos de prompts do repositório?

1. .github/agents/review.agent.md

   Esse caminho define um agente personalizado.

2. .github/copilot-instructions.md

   Esse arquivo fornece instruções para todo o repositório.

3. .github/prompts/review.prompt.md **[CORRECT]**

   Arquivos de prompts normalmente usam .github/prompts e a extensão .prompt.md.

4. .github/instructions/review.instructions.md

   Esse caminho armazena instruções específicas de caminho.

**Concept:** Caminho e extensão de arquivos de prompts

**Authored coaching hints:**

- O diretório e a extensão identificam o tipo de personalização.
- Diferencie uma tarefa reutilizável de orientações aplicadas automaticamente.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-files>

<!-- certification-coach-question:copilot-105:7cbbe39395c705ccc8660bd95ca9071d02eeed222403fa00b517435977efd131 -->
## Question 105: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-105`

**Content revision:** `7cbbe39395c705ccc8660bd95ca9071d02eeed222403fa00b517435977efd131`

**en review revision:** `ffe02baa923b416e4977cbdbd7004ed2250e3445c889f2878093643e3b1cc3b1`
**es review revision:** `d982202f64214eff201418f85bb9d1e31d34b31e3878532966af01482e94bf46`
**pt-BR review revision:** `34397045c7596ffba8d07b3b6d731b9ac0a1f237f0066a9204e0b3f97d77dbbe`

### English

Which enterprise audit-log search term filters events related to the Copilot plan?

1. actor:Copilot

   actor:Copilot targets agent activity instead.

2. action:repo

   action:repo targets repository events rather than Copilot plan events.

3. actor:github-actions

   actor:github-actions filters by a different actor.

4. action:copilot **[CORRECT]**

   action:copilot filters Copilot plan events, including license and policy changes.

**Concept:** Copilot audit-log search

**Authored coaching hints:**

- The event category and the actor are different filters.
- The goal is plan administration, not agent activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué término de búsqueda del registro de auditoría empresarial filtra eventos relacionados con el plan de Copilot?

1. actor:Copilot

   actor:Copilot se centra en actividad del agente.

2. action:repo

   action:repo se centra en eventos de repositorio, no del plan de Copilot.

3. actor:github-actions

   actor:github-actions filtra por otro actor.

4. action:copilot **[CORRECT]**

   action:copilot filtra eventos del plan, incluidos cambios de licencias y políticas.

**Concept:** Búsqueda de auditoría de Copilot

**Authored coaching hints:**

- La categoría del evento y el actor son filtros distintos.
- El objetivo es administrar el plan, no la actividad del agente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual termo de pesquisa do log de auditoria empresarial filtra eventos relacionados ao plano do Copilot?

1. actor:Copilot

   actor:Copilot se concentra na atividade do agente.

2. action:repo

   action:repo se concentra em eventos do repositório, não do plano do Copilot.

3. actor:github-actions

   actor:github-actions filtra por outro ator.

4. action:copilot **[CORRECT]**

   action:copilot filtra eventos do plano, incluindo alterações de licenças e políticas.

**Concept:** Pesquisa de auditoria do Copilot

**Authored coaching hints:**

- A categoria do evento e o ator são filtros diferentes.
- O objetivo é administrar o plano, não a atividade do agente.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs>

<!-- certification-coach-question:copilot-106:d4820aa867f4cfb52fb236d754f95bdc42994fb35549ed35f9158c8bcfeebf76 -->
## Question 106: Use GitHub Copilot features

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-106`

**Content revision:** `d4820aa867f4cfb52fb236d754f95bdc42994fb35549ed35f9158c8bcfeebf76`

**en review revision:** `752c5a0da4b00e4c6d3aef354dd2384ea8b5561893066da7c7cf90f8c43fc46f`
**es review revision:** `fed23ec04ca977b13ceac3d6e2e81eb5846ea9b90204f853e5f5613e6f45237f`
**pt-BR review revision:** `9ea0904c80d121e2ecb5d14fc2954cc395bee963a772f684ae1497bff265ab54`

### English

When you delegate an issue to Copilot on GitHub.com, how are configured MCP tools used?

1. Autonomously, without per-call approval **[CORRECT]**

   Issue-assigned delegated work can call configured MCP tools without asking first.

2. Only after every call is approved in chat

   Per-call approval is not required in this delegated workflow.

3. Only when a local IDE remains open

   The delegated task does not depend on a local IDE staying open.

4. Only for tools that generate text files

   Configured tools are not limited to text-file generation.

**Concept:** MCP approval in delegated work

**Authored coaching hints:**

- Approval behavior depends on the workflow, not just the protocol.
- Consider why server and tool selection must be reviewed before delegation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cuando delegas una incidencia a Copilot en GitHub.com, ¿cómo se usan las herramientas MCP configuradas?

1. Autónomamente, sin aprobación por llamada **[CORRECT]**

   El trabajo delegado mediante una incidencia puede llamar a herramientas MCP configuradas sin preguntar primero.

2. Solo tras aprobar cada llamada en el chat

   Este flujo delegado no requiere aprobación de cada llamada.

3. Solo mientras siga abierto un IDE local

   La tarea delegada no depende de mantener abierto un IDE local.

4. Solo si las herramientas generan archivos de texto

   Las herramientas configuradas no se limitan a generar archivos de texto.

**Concept:** Aprobación de MCP en trabajo delegado

**Authored coaching hints:**

- El comportamiento de aprobación depende del flujo, no solo del protocolo.
- Piensa por qué hay que revisar servidores y herramientas antes de delegar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando você delega um problema ao Copilot no GitHub.com, como as ferramentas MCP configuradas são usadas?

1. Autonomamente, sem aprovação por chamada **[CORRECT]**

   O trabalho delegado por um problema pode chamar ferramentas MCP configuradas sem perguntar antes.

2. Somente após aprovar cada chamada no chat

   Esse fluxo delegado não exige aprovação de cada chamada.

3. Somente enquanto um IDE local estiver aberto

   A tarefa delegada não depende de manter um IDE local aberto.

4. Somente se as ferramentas gerarem arquivos de texto

   As ferramentas configuradas não se limitam a gerar arquivos de texto.

**Concept:** Aprovação de MCP em trabalho delegado

**Authored coaching hints:**

- O comportamento de aprovação depende do fluxo, não apenas do protocolo.
- Considere por que servidores e ferramentas precisam ser revisados antes da delegação.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-107:12ac3b0236458e0a74f2f014e368ff5e0e94976e0290343190afd3681a473c3f -->
## Question 107: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-107`

**Content revision:** `12ac3b0236458e0a74f2f014e368ff5e0e94976e0290343190afd3681a473c3f`

**en review revision:** `396b2209dc7173b29cf9c570a20ed1750ce43656f0da56ef1906ba075033e134`
**es review revision:** `63045e82a3ace8cd0994141a350a211bb6576d1b0ac44d189cbf9c0b2184ddd2`
**pt-BR review revision:** `0949a2261beccaf1141b226ab5fcc3585d42702e0d3104fa4a8d5bd3ecd1bdc6`

### English

What is a large language model used by Copilot?

1. A database of exact prompt-to-answer pairs

   Generation is not an exact-answer lookup.

2. A trained neural network for text and code **[CORRECT]**

   An LLM learns patterns from large amounts of training data.

3. A compiler that proves program behavior

   Compilation and proof are different tasks.

4. A search index of the current workspace

   A workspace index supports retrieval, not model generation.

**Concept:** Large language models

**Authored coaching hints:**

- Distinguish a learned model from a document store.
- What can generate a response rather than just locate one?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué es un modelo de lenguaje grande utilizado por Copilot?

1. Una base de datos de pares exactos de pregunta y respuesta

   La generación no es una búsqueda de respuestas exactas.

2. Una red neuronal entrenada para texto y código **[CORRECT]**

   Un LLM aprende patrones de grandes cantidades de datos de entrenamiento.

3. Un compilador que demuestra el comportamiento de programas

   Compilar y demostrar son tareas distintas.

4. Un índice de búsqueda del espacio de trabajo actual

   Un índice del espacio de trabajo facilita la recuperación, no la generación del modelo.

**Concept:** Modelos de lenguaje grandes

**Authored coaching hints:**

- Distingue un modelo aprendido de un almacén de documentos.
- ¿Qué puede generar una respuesta en vez de solo localizarla?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que é um modelo de linguagem grande usado pelo Copilot?

1. Um banco de dados de pares exatos de pergunta e resposta

   A geração não é uma busca de respostas exatas.

2. Uma rede neural treinada para texto e código **[CORRECT]**

   Um LLM aprende padrões com grandes quantidades de dados de treinamento.

3. Um compilador que comprova o comportamento de programas

   Compilar e comprovar são tarefas distintas.

4. Um índice de pesquisa do workspace atual

   Um índice do workspace auxilia a recuperação, não a geração do modelo.

**Concept:** Modelos de linguagem grandes

**Authored coaching hints:**

- Diferencie um modelo aprendido de um repositório de documentos.
- O que pode gerar uma resposta em vez de apenas localizá-la?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-108:2efb66a3777fcf5acdbde34d9c899c67fc017dcc8279a8d4d26745d9e1f3e692 -->
## Question 108: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-108`

**Content revision:** `2efb66a3777fcf5acdbde34d9c899c67fc017dcc8279a8d4d26745d9e1f3e692`

**en review revision:** `59f44ed4ca0d567411463ea3178c278fb723d6ee1cdc39e0b93b06625b426fa4`
**es review revision:** `2bfa21a709f0be8eaac99cb1387fa032f27ebd731818c17b6c5f56c3f41c2d20`
**pt-BR review revision:** `9ebd4c3b72741f5a4e3db6626e0f9ca17e913ca3c8f59e78c9f2ac0ee3f752ff`

### English

What is a token in language-model processing?

1. A complete source file

   A file usually contains many tokens.

2. An API authentication credential

   An authentication token has a different meaning.

3. A single unit test

   Tests are not the model's text units.

4. A unit of text processed by the model **[CORRECT]**

   Text is divided into tokens, which need not be whole words.

**Concept:** Tokens

**Authored coaching hints:**

- The same word has different meanings in security and language modeling.
- Consider how text is divided for model processing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué es un token en el procesamiento de modelos de lenguaje?

1. Un archivo de código completo

   Un archivo suele contener muchos tokens.

2. Una credencial de autenticación de API

   Un token de autenticación tiene otro significado.

3. Una prueba unitaria

   Las pruebas no son las unidades de texto del modelo.

4. Una unidad de texto procesada por el modelo **[CORRECT]**

   El texto se divide en tokens, que no tienen que ser palabras completas.

**Concept:** Tokens

**Authored coaching hints:**

- La misma palabra tiene significados distintos en seguridad y modelado del lenguaje.
- Considera cómo se divide el texto para que el modelo lo procese.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que é um token no processamento de modelos de linguagem?

1. Um arquivo de código completo

   Um arquivo geralmente contém muitos tokens.

2. Uma credencial de autenticação de API

   Um token de autenticação tem outro significado.

3. Um teste de unidade

   Testes não são as unidades de texto do modelo.

4. Uma unidade de texto processada pelo modelo **[CORRECT]**

   O texto é dividido em tokens, que não precisam ser palavras inteiras.

**Concept:** Tokens

**Authored coaching hints:**

- A mesma palavra tem significados diferentes em segurança e modelagem de linguagem.
- Considere como o texto é dividido para o processamento pelo modelo.

</details>

**Official supporting source:** <https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/>

<!-- certification-coach-question:copilot-109:b9d4c62a190809d49ccb5955ca96b86df0e7b10a09b606f4fe7e334a7d91c76c -->
## Question 109: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-109`

**Content revision:** `b9d4c62a190809d49ccb5955ca96b86df0e7b10a09b606f4fe7e334a7d91c76c`

**en review revision:** `653d68aff965d2a1d076582c7160bb5d16473f0394aad1b36784b5e1d2684ee4`
**es review revision:** `338088cba791126ee88c010afcde9b8c312817da050662f984c0f9e95eaeb5f1`
**pt-BR review revision:** `e32a1a8d4ff1aeb30d791905ae9c74f96f65ccc080cae241666af585c3ada2ec`

### English

Which sequence describes an IDE inline suggestion at a high level?

1. Assemble context, generate output, display a suggestion **[CORRECT]**

   Context is assembled before generation and presentation.

2. Generate a response, collect context, build a prompt

   Context must inform the request before generation.

3. Present a suggestion, train a model, collect context

   Presentation is not a trigger to train the foundation model.

4. Compile the project, prove correctness, generate a response

   Compilation and proof are not the documented generation pipeline.

**Concept:** Suggestion lifecycle

**Authored coaching hints:**

- Which information must be available before a response can use it?
- Separate generating a suggestion from applying it.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué secuencia describe una sugerencia en línea del IDE a alto nivel?

1. Reunir contexto, generar salida, mostrar una sugerencia **[CORRECT]**

   El contexto se reúne antes de generar y presentar.

2. Generar una respuesta, recopilar contexto, crear un prompt

   El contexto debe informar la solicitud antes de la generación.

3. Presentar una sugerencia, entrenar un modelo, recopilar contexto

   La presentación no desencadena el entrenamiento del modelo base.

4. Compilar el proyecto, demostrar su corrección, generar una respuesta

   La compilación y la demostración no son el flujo de generación documentado.

**Concept:** Ciclo de una sugerencia

**Authored coaching hints:**

- ¿Qué información debe estar disponible antes de que una respuesta pueda usarla?
- Separa generar una sugerencia de aplicarla.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual sequência descreve uma sugestão em linha no IDE em alto nível?

1. Reunir contexto, gerar saída, exibir uma sugestão **[CORRECT]**

   O contexto é reunido antes da geração e da apresentação.

2. Gerar uma resposta, coletar contexto, criar um prompt

   O contexto deve informar a solicitação antes da geração.

3. Apresentar uma sugestão, treinar um modelo, coletar contexto

   A apresentação não inicia o treinamento do modelo base.

4. Compilar o projeto, comprovar a correção, gerar uma resposta

   Compilação e comprovação não são o fluxo de geração documentado.

**Concept:** Ciclo de uma sugestão

**Authored coaching hints:**

- Que informação precisa estar disponível antes de uma resposta poder usá-la?
- Separe gerar uma sugestão de aplicá-la.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-110:a8347d03c9606afa2207772fcc3c620b15e64bbd111866fc647b86800bf07e90 -->
## Question 110: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-110`

**Content revision:** `a8347d03c9606afa2207772fcc3c620b15e64bbd111866fc647b86800bf07e90`

**en review revision:** `50bcc1fabe9192a228ab29e2c76c3e1ac5029cc75985dfdc44feced7972fc8c2`
**es review revision:** `bc39c72c1668edd6593443eb5f1428fb4ccf6fd4463abe52b843bcee40224859`
**pt-BR review revision:** `f5f127be93f12f1b20eff085b3480ad8e498474c70d0ccae7da1dd264e7d06cc`

### English

Which editor action helps provide context for inline completions?

1. Opening unrelated projects

   Unrelated code can add irrelevant context.

2. Hiding relevant type definitions

   Relevant definitions can help resolve usage.

3. Opening relevant source files **[CORRECT]**

   Relevant open files help Copilot understand the request.

4. Removing examples of local coding patterns

   Removing useful patterns reduces contextual guidance.

**Concept:** Editor context selection

**Authored coaching hints:**

- Think about relevance rather than the number of open tabs.
- What information would help another developer complete the code?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué acción en el editor ayuda a aportar contexto a las completaciones en línea?

1. Abrir proyectos no relacionados

   El código no relacionado puede añadir contexto irrelevante.

2. Ocultar definiciones de tipos relevantes

   Las definiciones relevantes ayudan a resolver el uso.

3. Abrir archivos fuente relevantes **[CORRECT]**

   Los archivos relevantes abiertos ayudan a Copilot a entender la solicitud.

4. Eliminar ejemplos de patrones de código locales

   Quitar patrones útiles reduce la orientación contextual.

**Concept:** Selección de contexto del editor

**Authored coaching hints:**

- Piensa en la relevancia y no en el número de pestañas abiertas.
- ¿Qué información ayudaría a otra persona a completar el código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ação no editor ajuda a fornecer contexto para conclusões em linha?

1. Abrir projetos não relacionados

   Código não relacionado pode acrescentar contexto irrelevante.

2. Ocultar definições de tipos relevantes

   Definições relevantes ajudam a entender o uso.

3. Abrir arquivos-fonte relevantes **[CORRECT]**

   Arquivos relevantes abertos ajudam o Copilot a entender a solicitação.

4. Remover exemplos de padrões locais de código

   Remover padrões úteis reduz a orientação contextual.

**Concept:** Seleção de contexto do editor

**Authored coaching hints:**

- Pense na relevância, não no número de abas abertas.
- Que informação ajudaria outra pessoa a completar o código?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-111:de6ac6dab23b6f9072b30f4cf8bb95933c143cf56b5fc8bf4a2bb9de14553bbf -->
## Question 111: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-111`

**Content revision:** `de6ac6dab23b6f9072b30f4cf8bb95933c143cf56b5fc8bf4a2bb9de14553bbf`

**en review revision:** `fd273086beaa367df241ee80fde4937530039f81dd67f890231853c2aba5572f`
**es review revision:** `7a5fef7a5c48e798c2679055973cef152ab702467ce0a383bbba066b1d3fb6a0`
**pt-BR review revision:** `44d13c58a5255aa49a50ca3dad6861fac3e6dce7320d2475d17f9be7ce9b7bf6`

### English

What does a model's context window limit?

1. A request's available token budget **[CORRECT]**

   Models have finite context budgets; exact limits vary by model.

2. The maximum number of requests per minute

   Request rate is a separate service limit.

3. The generated output length alone

   Context includes input, not just generated output.

4. The total tokens used during model training

   Training corpus size is not a request's context budget.

**Concept:** Context window

**Authored coaching hints:**

- Distinguish request capacity from training volume or request rate.
- Which resource is consumed by the text in a request?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué limita la ventana de contexto de un modelo?

1. El presupuesto de tokens de una solicitud **[CORRECT]**

   Los modelos tienen presupuestos de contexto finitos; los límites exactos varían.

2. El número máximo de solicitudes por minuto

   La tasa de solicitudes es otro límite del servicio.

3. Solo la longitud de la salida generada

   El contexto incluye entrada, no solo salida generada.

4. El total de tokens usados al entrenar el modelo

   El tamaño del corpus de entrenamiento no es el presupuesto de contexto de una solicitud.

**Concept:** Ventana de contexto

**Authored coaching hints:**

- Distingue capacidad de solicitud de volumen de entrenamiento o tasa de solicitudes.
- ¿Qué recurso consume el texto de una solicitud?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a janela de contexto de um modelo limita?

1. O orçamento de tokens de uma solicitação **[CORRECT]**

   Modelos têm orçamentos de contexto finitos; os limites exatos variam.

2. O número máximo de solicitações por minuto

   A taxa de solicitações é outro limite do serviço.

3. Apenas o tamanho da saída gerada

   O contexto inclui entrada, não apenas saída gerada.

4. O total de tokens usados ao treinar o modelo

   O tamanho do corpus de treinamento não é o orçamento de contexto de uma solicitação.

**Concept:** Janela de contexto

**Authored coaching hints:**

- Diferencie capacidade da solicitação de volume de treinamento ou taxa de solicitações.
- Que recurso é consumido pelo texto em uma solicitação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure>

<!-- certification-coach-question:copilot-112:3ef8376f9a8aa9cc5cd7551e2315d8bcf3cf6224aabdda20aaa362f4aecef90d -->
## Question 112: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-112`

**Content revision:** `3ef8376f9a8aa9cc5cd7551e2315d8bcf3cf6224aabdda20aaa362f4aecef90d`

**en review revision:** `3a2b0a82beba6a93cf745f9175415373042e6b2c4b248634da7d982741d7f7f9`
**es review revision:** `aec004942df865b36e64c4df6001250fb1474339bcdc751d4c643f46db05ca1d`
**pt-BR review revision:** `4170a3cb4ca945454b8477c5cf41272c1c137c726c497e5eae1aa5c23d75570f`

### English

Why can a very large pull request reduce description-completion relevance?

1. Its programming language becomes unsupported

   Size does not itself change language support.

2. Some relevant content may not fit into the model request **[CORRECT]**

   The application card identifies content that cannot fit as a limitation.

3. Every file is necessarily sent in a separate request

   The documentation does not guarantee a request per file.

4. The model stops using the pull request title

   The title remains a documented context source.

**Concept:** Bounded pull request context

**Authored coaching hints:**

- Consider the difference between available project data and submitted context.
- What happens when useful material exceeds a finite request budget?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué un pull request muy grande puede reducir la relevancia de la completación de su descripción?

1. Su lenguaje de programación deja de ser compatible

   El tamaño por sí solo no cambia la compatibilidad del lenguaje.

2. Parte del contenido relevante puede no caber en la solicitud al modelo **[CORRECT]**

   La ficha de aplicación identifica el contenido que no cabe como una limitación.

3. Cada archivo se envía necesariamente en una solicitud separada

   La documentación no garantiza una solicitud por archivo.

4. El modelo deja de usar el título del pull request

   El título sigue siendo una fuente de contexto documentada.

**Concept:** Contexto limitado de pull requests

**Authored coaching hints:**

- Considera la diferencia entre los datos disponibles del proyecto y el contexto enviado.
- ¿Qué pasa cuando el material útil excede un presupuesto finito de solicitud?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que um pull request muito grande pode reduzir a relevância da conclusão da descrição?

1. Sua linguagem de programação deixa de ser compatível

   O tamanho por si só não muda o suporte à linguagem.

2. Parte do conteúdo relevante pode não caber na solicitação ao modelo **[CORRECT]**

   O cartão de aplicação identifica o conteúdo que não cabe como uma limitação.

3. Cada arquivo é necessariamente enviado em uma solicitação separada

   A documentação não garante uma solicitação por arquivo.

4. O modelo deixa de usar o título do pull request

   O título continua sendo uma fonte de contexto documentada.

**Concept:** Contexto limitado de pull requests

**Authored coaching hints:**

- Considere a diferença entre os dados disponíveis do projeto e o contexto enviado.
- O que acontece quando o material útil excede um orçamento finito de solicitação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-113:10b7ba47ccbe7124755dfc308a27b4558f58278f2287667da9146d3c1989ce8a -->
## Question 113: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-113`

**Content revision:** `10b7ba47ccbe7124755dfc308a27b4558f58278f2287667da9146d3c1989ce8a`

**en review revision:** `0b1b4d32e6bd8e7c011a635232c312e09f6b3a0020673fd2c36d1c2faee1fbe2`
**es review revision:** `bd51fa88268ca59fae28c60dc1f3448d2bff54844e23b9dbe3f8cab845eaa33a`
**pt-BR review revision:** `60418de729de23cc73efaa7838c91d5a94bcb18f8c960f278f8672b90bdd3245`

### English

In fill-in-the-middle completion, what are the prefix and suffix?

1. The repository name and branch name

   Repository metadata is not the FIM prefix/suffix pair.

2. The system instruction and user instruction

   Instruction roles are a different distinction.

3. The first and last generated tokens

   Prefix and suffix are supplied context, not generated endpoints.

4. Code before and after the cursor **[CORRECT]**

   FIM conditions completion on both sides of the gap.

**Concept:** Fill-in-the-middle context

**Authored coaching hints:**

- Locate the gap where code will be inserted.
- Which surrounding material already exists before generation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la completación fill-in-the-middle, ¿qué son el prefijo y el sufijo?

1. El nombre del repositorio y de la rama

   Los metadatos del repositorio no son el par prefijo/sufijo de FIM.

2. La instrucción de sistema y de usuario

   Los roles de las instrucciones son otra distinción.

3. El primer y el último token generados

   El prefijo y el sufijo son contexto suministrado, no extremos generados.

4. Código antes y después del cursor **[CORRECT]**

   FIM condiciona la completación con ambos lados del espacio.

**Concept:** Contexto fill-in-the-middle

**Authored coaching hints:**

- Localiza el espacio donde se insertará el código.
- ¿Qué material circundante ya existe antes de la generación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na conclusão fill-in-the-middle, o que são o prefixo e o sufixo?

1. O nome do repositório e da branch

   Metadados do repositório não são o par prefixo/sufixo do FIM.

2. A instrução de sistema e de usuário

   Papéis de instruções são outra distinção.

3. O primeiro e o último token gerados

   Prefixo e sufixo são contexto fornecido, não extremidades geradas.

4. Código antes e depois do cursor **[CORRECT]**

   O FIM condiciona a conclusão aos dois lados da lacuna.

**Concept:** Contexto fill-in-the-middle

**Authored coaching hints:**

- Localize a lacuna onde o código será inserido.
- Que material ao redor já existe antes da geração?

</details>

**Official supporting source:** <https://github.blog/ai-and-ml/github-copilot/how-github-copilot-is-getting-better-at-understanding-your-code/>

<!-- certification-coach-question:copilot-114:23de0f70b9fda83ae15157bf6cc83ce21426a9a6270b2776c1f58c7dbb8eb111 -->
## Question 114: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-114`

**Content revision:** `23de0f70b9fda83ae15157bf6cc83ce21426a9a6270b2776c1f58c7dbb8eb111`

**en review revision:** `24143a27a896787a45bff3583bb9bbed652f14ef693d022b995e2e467ec3f893`
**es review revision:** `468bab0ddf510400e1eb6330bcdd5e81b5b0d628877ae351d93e2aa933f58e1b`
**pt-BR review revision:** `93d0894734164f0370a44e9e6c341a0be3d52c3e9f408f2786e600c348227cb1`

### English

What is the purpose of semantic repository indexing for Copilot?

1. To compile every branch before each answer

   Indexing is not compilation.

2. To replace repository access controls

   Search context does not replace authorization.

3. To help retrieve code relevant to a question's meaning **[CORRECT]**

   A semantic index helps locate relevant code for contextual answers.

4. To turn each repository into a newly trained foundation model

   GitHub states that indexed repositories are not used for model training.

**Concept:** Semantic repository indexing

**Authored coaching hints:**

- Compare finding relevant code with changing a model.
- Can useful code be located without knowing its exact symbol name?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el propósito de la indexación semántica de repositorios para Copilot?

1. Compilar todas las ramas antes de cada respuesta

   La indexación no es compilación.

2. Reemplazar los controles de acceso al repositorio

   El contexto de búsqueda no reemplaza la autorización.

3. Ayudar a recuperar código relevante para el significado de una pregunta **[CORRECT]**

   Un índice semántico ayuda a localizar código relevante para respuestas contextualizadas.

4. Convertir cada repositorio en un nuevo modelo base entrenado

   GitHub indica que los repositorios indexados no se usan para entrenar modelos.

**Concept:** Indexación semántica de repositorios

**Authored coaching hints:**

- Compara buscar código relevante con cambiar un modelo.
- ¿Se puede localizar código útil sin conocer el nombre exacto de su símbolo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a finalidade da indexação semântica de repositórios para o Copilot?

1. Compilar todas as branches antes de cada resposta

   Indexação não é compilação.

2. Substituir os controles de acesso ao repositório

   Contexto de pesquisa não substitui autorização.

3. Ajudar a recuperar código relevante para o significado de uma pergunta **[CORRECT]**

   Um índice semântico ajuda a localizar código relevante para respostas contextualizadas.

4. Transformar cada repositório em um novo modelo base treinado

   O GitHub informa que repositórios indexados não são usados para treinar modelos.

**Concept:** Indexação semântica de repositórios

**Authored coaching hints:**

- Compare encontrar código relevante com mudar um modelo.
- É possível localizar código útil sem saber o nome exato de seu símbolo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/repository-indexing>

<!-- certification-coach-question:copilot-115:b251d25d160c1e998b478c3cca90dc52f365997c6b84a7689127f839e5e5aa4f -->
## Question 115: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-115`

**Content revision:** `b251d25d160c1e998b478c3cca90dc52f365997c6b84a7689127f839e5e5aa4f`

**en review revision:** `d17f86e22d63e10eea2b0f0194c934072bee0130e6c9aad23ddb4c7463f41a44`
**es review revision:** `ea4b6f3aa0d60f8f583b6970312241d9aa813e50f1ed462d71b4880dd2cd294f`
**pt-BR review revision:** `24f995ad0ca64f8e0dd35001848f2ac79daaf3aa5ca153172b40a1acc2f51768`

### English

Which statement correctly distinguishes repository retrieval from model training?

1. Retrieval adds context; training changes parameters **[CORRECT]**

   Context retrieval and learning model parameters are different processes.

2. Retrieval changes model parameters; training only selects files

   This reverses retrieval and training.

3. Both require compiling the retrieved code

   Neither process is defined by compilation.

4. Both permanently add each retrieved file to model knowledge

   Retrieving a file does not permanently teach it to the model.

**Concept:** Retrieval versus training

**Authored coaching hints:**

- Distinguish information used for one request from learned parameters.
- Does looking up a document require retraining?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación distingue correctamente la recuperación de repositorios del entrenamiento del modelo?

1. La recuperación añade contexto; entrenar cambia parámetros **[CORRECT]**

   Recuperar contexto y aprender parámetros del modelo son procesos distintos.

2. La recuperación cambia parámetros; el entrenamiento solo selecciona archivos

   Esto invierte recuperación y entrenamiento.

3. Ambos requieren compilar el código recuperado

   Ningún proceso se define por la compilación.

4. Ambos añaden permanentemente cada archivo recuperado al conocimiento del modelo

   Recuperar un archivo no se lo enseña permanentemente al modelo.

**Concept:** Recuperación frente a entrenamiento

**Authored coaching hints:**

- Distingue información usada en una solicitud de los parámetros aprendidos.
- ¿Consultar un documento exige volver a entrenar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação distingue corretamente a recuperação de repositórios do treinamento do modelo?

1. A recuperação adiciona contexto; treinar muda parâmetros **[CORRECT]**

   Recuperar contexto e aprender parâmetros do modelo são processos distintos.

2. A recuperação muda parâmetros; o treinamento apenas seleciona arquivos

   Isso inverte recuperação e treinamento.

3. Ambos exigem compilar o código recuperado

   Nenhum processo é definido pela compilação.

4. Ambos adicionam permanentemente cada arquivo recuperado ao conhecimento do modelo

   Recuperar um arquivo não o ensina permanentemente ao modelo.

**Concept:** Recuperação versus treinamento

**Authored coaching hints:**

- Diferencie informações usadas em uma solicitação dos parâmetros aprendidos.
- Consultar um documento exige treinar novamente?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/repository-indexing>

<!-- certification-coach-question:copilot-116:f03807116c6a946bfc7590ed223a867de179b406d917f6ed3d898699b33f866c -->
## Question 116: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-116`

**Content revision:** `f03807116c6a946bfc7590ed223a867de179b406d917f6ed3d898699b33f866c`

**en review revision:** `7868ae7cfc6c5f7d061195d8bb24f96b2f13b75168cb3d017964da9bb10fdf66`
**es review revision:** `2abe197d90d75991eeaa22c5f30250cf8308a42c0fd74014c45c0fb5cc645c12`
**pt-BR review revision:** `34b517a9f40b224dc8fcc4eea13bf34bacca94fc269e1212b6bc057a560c1960`

### English

When is an IDE inline suggestion applied to the file?

1. As soon as the model generates it

   Generation alone does not apply the suggestion.

2. Upon explicit developer acceptance **[CORRECT]**

   Inline suggestions are applied only upon explicit acceptance.

3. When its public-code check finishes

   A filtering check is not acceptance.

4. When the editor displays it

   Displaying a proposal is not editing the file.

**Concept:** Suggestion presentation and acceptance

**Authored coaching hints:**

- Separate a proposed change from an applied change.
- Who controls whether a displayed completion enters the file?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuándo se aplica una sugerencia en línea del IDE al archivo?

1. En cuanto el modelo la genera

   La generación por sí sola no aplica la sugerencia.

2. Al aceptarla explícitamente el desarrollador **[CORRECT]**

   Las sugerencias en línea solo se aplican tras su aceptación explícita.

3. Cuando termina su comprobación de código público

   Una comprobación de filtrado no es aceptación.

4. Cuando el editor la muestra

   Mostrar una propuesta no es editar el archivo.

**Concept:** Presentación y aceptación de sugerencias

**Authored coaching hints:**

- Separa un cambio propuesto de uno aplicado.
- ¿Quién controla si una completación mostrada entra en el archivo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando uma sugestão em linha do IDE é aplicada ao arquivo?

1. Assim que o modelo a gera

   A geração por si só não aplica a sugestão.

2. Ao ser aceita explicitamente pelo desenvolvedor **[CORRECT]**

   Sugestões em linha só são aplicadas após aceitação explícita.

3. Quando termina a verificação de código público

   Uma verificação de filtragem não é aceitação.

4. Quando o editor a exibe

   Exibir uma proposta não é editar o arquivo.

**Concept:** Apresentação e aceitação de sugestões

**Authored coaching hints:**

- Separe uma mudança proposta de uma mudança aplicada.
- Quem controla se uma conclusão exibida entra no arquivo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-117:659ed9799e276d3403a678b15f4699706d8231c13edd0999a5444534f8d647d8 -->
## Question 117: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-117`

**Content revision:** `659ed9799e276d3403a678b15f4699706d8231c13edd0999a5444534f8d647d8`

**en review revision:** `94d8e1659d4d5c813108c35ef0a21f86c21302bb4953233da2a175ccecf87ee4`
**es review revision:** `2298fe1636222fd5d3447bab5a2c953b7a91ea7626b861c2120166c9dd297f15`
**pt-BR review revision:** `589f08ad229b5950703e932439a0b57c42679fd0a59638b8806cb6dba7eb586c`

### English

On a supporting Copilot surface, what do repository custom instructions provide?

1. A replacement for repository permissions

   Instructions do not grant repository access.

2. A semantic index of every dependency

   Guidance files are not dependency search indexes.

3. A newly trained model for each contributor

   Instruction files do not create contributor-specific models.

4. Reusable guidance for requests **[CORRECT]**

   Custom instructions supply recurring conventions and project context.

**Concept:** Custom instructions as context

**Authored coaching hints:**

- Separate guidance, retrieval, and authorization.
- What avoids repeating the same conventions in every request?

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una superficie compatible de Copilot, ¿qué aportan las instrucciones personalizadas del repositorio?

1. Un reemplazo de los permisos del repositorio

   Las instrucciones no conceden acceso al repositorio.

2. Un índice semántico de todas las dependencias

   Los archivos de orientación no son índices de búsqueda de dependencias.

3. Un modelo recién entrenado para cada colaborador

   Los archivos de instrucciones no crean modelos específicos por colaborador.

4. Orientación reutilizable para solicitudes **[CORRECT]**

   Las instrucciones personalizadas aportan convenciones recurrentes y contexto del proyecto.

**Concept:** Instrucciones personalizadas como contexto

**Authored coaching hints:**

- Separa orientación, recuperación y autorización.
- ¿Qué evita repetir las mismas convenciones en cada solicitud?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma superfície compatível do Copilot, o que as instruções personalizadas do repositório fornecem?

1. Uma substituição das permissões do repositório

   Instruções não concedem acesso ao repositório.

2. Um índice semântico de todas as dependências

   Arquivos de orientação não são índices de pesquisa de dependências.

3. Um modelo recém-treinado para cada colaborador

   Arquivos de instruções não criam modelos específicos por colaborador.

4. Orientação reutilizável para solicitações **[CORRECT]**

   Instruções personalizadas fornecem convenções recorrentes e contexto do projeto.

**Concept:** Instruções personalizadas como contexto

**Authored coaching hints:**

- Separe orientação, recuperação e autorização.
- O que evita repetir as mesmas convenções em cada solicitação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-118:1e78999a783f3e1c0b5ec4ec9865697f7e51f51612523eed4c354ccd23c4035d -->
## Question 118: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-118`

**Content revision:** `1e78999a783f3e1c0b5ec4ec9865697f7e51f51612523eed4c354ccd23c4035d`

**en review revision:** `cccbb2a1d0d6b8d5bab1489c71549d6a2d98adda700ff56eff0b863b1d433cd4`
**es review revision:** `dc6f4a996def987657a697f742ee67eafbe7a674f1d8fcb6a01d705266bd0b34`
**pt-BR review revision:** `89c9ace249694f9a1dc53459e8e5c40f2b090ffe684c60f0cf6b8311a6aed0d5`

### English

What does Model Context Protocol standardize?

1. How source code is compiled into binaries

   MCP is not a compiler protocol.

2. How model training datasets are labeled

   MCP does not define training-data labeling.

3. Connections to external tools and data **[CORRECT]**

   MCP provides a standard connection mechanism for context and tools.

4. How Git commits are signed

   Commit signing is independent of MCP.

**Concept:** Model Context Protocol

**Authored coaching hints:**

- Think about extending an assistant beyond supplied text.
- Which layer connects an application to external capabilities?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué estandariza Model Context Protocol?

1. Cómo se compila código fuente en binarios

   MCP no es un protocolo de compilación.

2. Cómo se etiquetan conjuntos de entrenamiento

   MCP no define el etiquetado de datos de entrenamiento.

3. Conexiones a herramientas y datos externos **[CORRECT]**

   MCP ofrece un mecanismo estándar de conexión para contexto y herramientas.

4. Cómo se firman commits de Git

   La firma de commits es independiente de MCP.

**Concept:** Model Context Protocol

**Authored coaching hints:**

- Piensa en ampliar un asistente más allá del texto suministrado.
- ¿Qué capa conecta una aplicación con capacidades externas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que o Model Context Protocol padroniza?

1. Como código-fonte é compilado em binários

   MCP não é um protocolo de compilação.

2. Como conjuntos de treinamento são rotulados

   MCP não define a rotulagem de dados de treinamento.

3. Conexões a ferramentas e dados externos **[CORRECT]**

   MCP fornece um mecanismo padrão de conexão para contexto e ferramentas.

4. Como commits do Git são assinados

   A assinatura de commits é independente do MCP.

**Concept:** Model Context Protocol

**Authored coaching hints:**

- Pense em ampliar um assistente além do texto fornecido.
- Que camada conecta uma aplicação a capacidades externas?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-119:17445509df78d70bf803181fb6f957feef165727c0208384577e12f26f3009fd -->
## Question 119: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-119`

**Content revision:** `17445509df78d70bf803181fb6f957feef165727c0208384577e12f26f3009fd`

**en review revision:** `a4f854a6e070e8d17ac3f726734b5cba0ec86f5fc8f4d3f8fdcb0b865b47b434`
**es review revision:** `d4747525d1375e060b77b5580e450f4d73dc2247a557c92388715c54fbfb0cb1`
**pt-BR review revision:** `5ef602155140dd25f8a065ff9e1317776bb2317c65d3de2afc22ddcba0b6be27`

### English

What can the cloud agent's default GitHub MCP credentials access?

1. The current repository with read-only scope **[CORRECT]**

   The documented default token is read-only and scoped to the current repository.

2. Every private repository on GitHub

   The default token is not globally authorized.

3. All repositories in the enterprise with write scope

   Enterprise-wide write access requires different authorization.

4. Any repository mentioned in a prompt with admin scope

   Mentioning a resource does not grant administrator permissions.

**Concept:** Tool authorization boundaries

**Authored coaching hints:**

- Distinguish a tool's existence from its credential scope.
- Can naming a resource change the permissions on its access token?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿A qué pueden acceder las credenciales predeterminadas de GitHub MCP del agente en la nube?

1. Al repositorio actual con ámbito de solo lectura **[CORRECT]**

   El token predeterminado documentado es de solo lectura y está limitado al repositorio actual.

2. A todos los repositorios privados de GitHub

   El token predeterminado no tiene autorización global.

3. A todos los repositorios de la empresa con ámbito de escritura

   La escritura en toda la empresa requiere otra autorización.

4. A cualquier repositorio mencionado en un prompt con ámbito de administración

   Mencionar un recurso no concede permisos de administración.

**Concept:** Límites de autorización de herramientas

**Authored coaching hints:**

- Distingue la existencia de una herramienta del ámbito de sus credenciales.
- ¿Nombrar un recurso puede cambiar los permisos de su token de acceso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que as credenciais padrão do GitHub MCP do agente na nuvem podem acessar?

1. O repositório atual com escopo de somente leitura **[CORRECT]**

   O token padrão documentado é de somente leitura e limitado ao repositório atual.

2. Todos os repositórios privados do GitHub

   O token padrão não tem autorização global.

3. Todos os repositórios da empresa com escopo de escrita

   Escrita em toda a empresa exige outra autorização.

4. Qualquer repositório mencionado em um prompt com escopo de administração

   Mencionar um recurso não concede permissões de administração.

**Concept:** Limites de autorização de ferramentas

**Authored coaching hints:**

- Diferencie a existência de uma ferramenta do escopo de suas credenciais.
- Nomear um recurso pode mudar as permissões de seu token de acesso?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-120:ebef2654ca831e963be5624243036ec59d6128181b89fba97ac5480e0a9985e3 -->
## Question 120: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-120`

**Content revision:** `ebef2654ca831e963be5624243036ec59d6128181b89fba97ac5480e0a9985e3`

**en review revision:** `9ffef9bd1d5b8d8e04eed388f35d132038746ed8b262e04844c0a00ac1c3e0e5`
**es review revision:** `e674ae5fd030fa72add7a929445e5d0897d1d1a92cef13f3d8498607d80f40c3`
**pt-BR review revision:** `95452122520057e57114fd57a4e2e59b18baed594d1874ee44ac0a2395abd9e0`

### English

What does grounding an answer in retrieved documentation mean?

1. Replacing the model with a document viewer

   Grounded answers are still generated.

2. Using relevant source material to inform the generated answer **[CORRECT]**

   Retrieved evidence provides context for the answer.

3. Proving that every generated statement is correct

   Grounding can improve relevance without guaranteeing accuracy.

4. Saving the answer as new foundation-model training data

   Using documentation as context is not training.

**Concept:** Grounding

**Authored coaching hints:**

- Consider the role of evidence in an answer.
- Separate informing generation from certifying its result.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué significa fundamentar una respuesta en documentación recuperada?

1. Reemplazar el modelo por un visor de documentos

   Las respuestas fundamentadas siguen siendo generadas.

2. Usar fuentes relevantes para orientar la respuesta generada **[CORRECT]**

   La evidencia recuperada aporta contexto a la respuesta.

3. Demostrar que cada afirmación generada es correcta

   La fundamentación puede mejorar la relevancia sin garantizar exactitud.

4. Guardar la respuesta como nuevos datos de entrenamiento del modelo base

   Usar documentación como contexto no es entrenar.

**Concept:** Fundamentación

**Authored coaching hints:**

- Considera el papel de la evidencia en una respuesta.
- Separa orientar la generación de certificar su resultado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que significa fundamentar uma resposta em documentação recuperada?

1. Substituir o modelo por um visualizador de documentos

   Respostas fundamentadas continuam sendo geradas.

2. Usar fontes relevantes para orientar a resposta gerada **[CORRECT]**

   A evidência recuperada fornece contexto para a resposta.

3. Comprovar que toda afirmação gerada está correta

   A fundamentação pode melhorar a relevância sem garantir exatidão.

4. Salvar a resposta como novos dados de treinamento do modelo base

   Usar documentação como contexto não é treinar.

**Concept:** Fundamentação

**Authored coaching hints:**

- Considere o papel da evidência em uma resposta.
- Separe orientar a geração de certificar seu resultado.

</details>

**Official supporting source:** <https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/>

<!-- certification-coach-question:copilot-121:63d63803b922439d18db6979eb3f80aaf7f5adebcb2268e4c893f04be20b6a13 -->
## Question 121: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-121`

**Content revision:** `63d63803b922439d18db6979eb3f80aaf7f5adebcb2268e4c893f04be20b6a13`

**en review revision:** `0c4d587599c9fe70f40c01b1fb44a369b92a4694c6aef854164820d20b6a5688`
**es review revision:** `139b1175030301ba21f9360c0fe80a9dad951ad65f309226c759a2b53f8adcbf`
**pt-BR review revision:** `6077653ce9550aacadeb2423a74d64a98168d5cdc70302918d6af9dea788efe3`

### English

What is the role of Copilot content filtering?

1. To execute every suggestion in a test sandbox

   Filtering is not test execution.

2. To establish the program's business requirements

   Requirements come from the task and its stakeholders.

3. To assign licenses to all generated code

   Filtering does not determine all licensing obligations.

4. To detect and block certain harmful or insecure content **[CORRECT]**

   Filters are safeguards, not complete correctness or security proofs.

**Concept:** Content filtering

**Authored coaching hints:**

- Distinguish a safety screen from program verification.
- Which function concerns unsuitable generated content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es la función del filtrado de contenido de Copilot?

1. Ejecutar cada sugerencia en un entorno de pruebas aislado

   El filtrado no es ejecución de pruebas.

2. Establecer los requisitos de negocio del programa

   Los requisitos provienen de la tarea y sus responsables.

3. Asignar licencias a todo el código generado

   El filtrado no determina todas las obligaciones de licencia.

4. Detectar y bloquear cierto contenido dañino o inseguro **[CORRECT]**

   Los filtros son salvaguardas, no pruebas completas de corrección o seguridad.

**Concept:** Filtrado de contenido

**Authored coaching hints:**

- Distingue un filtro de seguridad de la verificación de programas.
- ¿Qué función trata del contenido generado inadecuado?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a função da filtragem de conteúdo do Copilot?

1. Executar cada sugestão em um ambiente de teste isolado

   Filtragem não é execução de testes.

2. Estabelecer os requisitos de negócio do programa

   Requisitos vêm da tarefa e de seus responsáveis.

3. Atribuir licenças a todo o código gerado

   A filtragem não determina todas as obrigações de licença.

4. Detectar e bloquear certos conteúdos prejudiciais ou inseguros **[CORRECT]**

   Filtros são salvaguardas, não provas completas de correção ou segurança.

**Concept:** Filtragem de conteúdo

**Authored coaching hints:**

- Diferencie um filtro de segurança da verificação de programas.
- Que função trata de conteúdo gerado inadequado?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-122:7fa6ee59206e0af4f4c2bc4f29cf1388a7bcf4b178887cd3e2bbce318ce49c07 -->
## Question 122: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-122`

**Content revision:** `7fa6ee59206e0af4f4c2bc4f29cf1388a7bcf4b178887cd3e2bbce318ce49c07`

**en review revision:** `178a851ff7f49d2eb42d5213b52ef37cc5b6431161f558882efdccd3590fcd69`
**es review revision:** `7414d72ffbcee5f720f1b02cbc89cbdf079ceadeb25886a82a2e50af422883c9`
**pt-BR review revision:** `7f6960fccc9a6fa2eb289964c092d9b8af149bbbdc95ae43fe1928ea133c5cd4`

### English

Which check compares Copilot suggestions with publicly available code?

1. Type checking

   Type checking evaluates language type rules.

2. Unit testing

   Unit tests check selected behaviors.

3. Public code matching **[CORRECT]**

   Public code matching checks similarity to public code.

4. Dependency vulnerability scanning

   Dependency scanning checks package risks, not suggestion matches.

**Concept:** Public code matching

**Authored coaching hints:**

- Compare the target of each check.
- Is the question about runtime behavior, package risks, or code similarity?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comprobación compara sugerencias de Copilot con código disponible públicamente?

1. Comprobación de tipos

   La comprobación de tipos evalúa las reglas de tipos del lenguaje.

2. Pruebas unitarias

   Las pruebas unitarias comprueban comportamientos seleccionados.

3. Coincidencia con código público **[CORRECT]**

   La coincidencia con código público comprueba la similitud con código público.

4. Análisis de vulnerabilidades de dependencias

   El análisis de dependencias comprueba riesgos de paquetes, no coincidencias de sugerencias.

**Concept:** Coincidencia con código público

**Authored coaching hints:**

- Compara el objeto de cada comprobación.
- ¿Se pregunta por comportamiento en ejecución, riesgos de paquetes o similitud de código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual verificação compara sugestões do Copilot com código disponível publicamente?

1. Verificação de tipos

   A verificação de tipos avalia as regras de tipos da linguagem.

2. Testes de unidade

   Testes de unidade verificam comportamentos selecionados.

3. Correspondência com código público **[CORRECT]**

   A correspondência com código público verifica similaridade com código público.

4. Análise de vulnerabilidades de dependências

   A análise de dependências verifica riscos de pacotes, não correspondências de sugestões.

**Concept:** Correspondência com código público

**Authored coaching hints:**

- Compare o alvo de cada verificação.
- A pergunta trata de comportamento em execução, riscos de pacotes ou similaridade de código?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-123:723aabfc6302b789d409ddf5a2f7111b1696687f1251dbaae34e9751bcc5018f -->
## Question 123: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-123`

**Content revision:** `723aabfc6302b789d409ddf5a2f7111b1696687f1251dbaae34e9751bcc5018f`

**en review revision:** `56399f96b90e52768c3b564b90061c286efb3f21c7bcdf5e578ccd4ed75a564f`
**es review revision:** `b3367af5e8fdbc624a2366f3ca00f520be849bf040aad7c8f10d61005de88f8a`
**pt-BR review revision:** `4dd34b397d3a2d8c44d8f102bbd2b8b369ebc3a63a3755068346250e12319c55`

### English

Which information can inform pull request text completion on GitHub.com?

1. PR title, description, commit titles, and partial diffs **[CORRECT]**

   These are documented sources for description completion.

2. Only repository-level build and deployment settings

   Build settings alone omit the change-specific context.

3. Only files from the repository's first commit

   The first commit does not describe the current changes.

4. Only the latest successful build duration

   Build duration alone does not describe the change.

**Concept:** Pull request completion inputs

**Authored coaching hints:**

- Which inputs describe what the pull request changes?
- Distinguish change context from account or execution metadata.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué información puede orientar la completación de texto de pull requests en GitHub.com?

1. Título y descripción del PR, títulos de commits y diffs parciales **[CORRECT]**

   Estas son fuentes documentadas para completar descripciones.

2. Solo los ajustes de compilación y despliegue del repositorio

   Los ajustes de compilación por sí solos omiten el contexto específico del cambio.

3. Solo archivos del primer commit del repositorio

   El primer commit no describe los cambios actuales.

4. Solo la duración de la última compilación exitosa

   La duración de la compilación por sí sola no describe el cambio.

**Concept:** Entradas para completar pull requests

**Authored coaching hints:**

- ¿Qué entradas describen lo que cambia el pull request?
- Distingue contexto del cambio de metadatos de cuenta o ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Que informações podem orientar a conclusão de texto de pull requests no GitHub.com?

1. Título e descrição do PR, títulos de commits e diffs parciais **[CORRECT]**

   Essas são fontes documentadas para completar descrições.

2. Apenas as configurações de compilação e implantação do repositório

   Configurações de compilação sozinhas omitem o contexto específico da mudança.

3. Apenas arquivos do primeiro commit do repositório

   O primeiro commit não descreve as mudanças atuais.

4. Apenas a duração da última compilação bem-sucedida

   A duração da compilação por si só não descreve a mudança.

**Concept:** Entradas para completar pull requests

**Authored coaching hints:**

- Quais entradas descrevem o que o pull request muda?
- Diferencie contexto da mudança de metadados de conta ou execução.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-124:b447daf8b8521034ad059519991090b1444ab48ce888c3d329aa77037dc55be5 -->
## Question 124: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-124`

**Content revision:** `b447daf8b8521034ad059519991090b1444ab48ce888c3d329aa77037dc55be5`

**en review revision:** `fb58f4627d3c9e85c40d05ed7cb2c72bda4d72bf350339237b806a7a056213a5`
**es review revision:** `d2db8e376a370716c1f07d53aa3003c72a954b843930ae3327066ea2c55755e4`
**pt-BR review revision:** `80e70c9834fc7ea99586dd9a73fc4e749d2931b8404b0599b335a83964c25955`

### English

How does conversation history affect a Copilot chat request?

1. It permanently retrains the model after each message

   History used as context is not model training.

2. It can contextualize follow-up requests **[CORRECT]**

   Conversational surfaces use history to contextualize responses.

3. It replaces the need to identify relevant files

   History may not contain the relevant code.

4. It guarantees access to every earlier session

   History in one conversation does not guarantee all-session access.

**Concept:** Conversation history

**Authored coaching hints:**

- Think about pronouns and references in follow-up questions.
- Distinguish conversation context from permanent model knowledge.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo afecta el historial de conversación a una solicitud de chat de Copilot?

1. Vuelve a entrenar permanentemente el modelo tras cada mensaje

   Usar historial como contexto no es entrenar el modelo.

2. Puede contextualizar solicitudes de seguimiento **[CORRECT]**

   Las superficies conversacionales usan historial para contextualizar respuestas.

3. Reemplaza la necesidad de identificar archivos relevantes

   El historial puede no contener el código relevante.

4. Garantiza acceso a todas las sesiones anteriores

   El historial de una conversación no garantiza acceso a todas las sesiones.

**Concept:** Historial de conversación

**Authored coaching hints:**

- Piensa en pronombres y referencias de preguntas de seguimiento.
- Distingue contexto de conversación de conocimiento permanente del modelo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como o histórico da conversa afeta uma solicitação de chat do Copilot?

1. Treina novamente o modelo de forma permanente após cada mensagem

   Usar histórico como contexto não é treinar o modelo.

2. Pode contextualizar solicitações de acompanhamento **[CORRECT]**

   Superfícies conversacionais usam histórico para contextualizar respostas.

3. Substitui a necessidade de identificar arquivos relevantes

   O histórico pode não conter o código relevante.

4. Garante acesso a todas as sessões anteriores

   O histórico de uma conversa não garante acesso a todas as sessões.

**Concept:** Histórico de conversa

**Authored coaching hints:**

- Pense em pronomes e referências nas perguntas de acompanhamento.
- Diferencie contexto da conversa de conhecimento permanente do modelo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-125:1aeb5589e223c3bacf918face323b4001d3fb646c3c33bf18c525ce74b628676 -->
## Question 125: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-125`

**Content revision:** `1aeb5589e223c3bacf918face323b4001d3fb646c3c33bf18c525ce74b628676`

**en review revision:** `acde00d6c9f26f78b825943b37cf974340db0c9ca855acb18156c29c195dc8b1`
**es review revision:** `9c74b42064be85ff8001942d220358cc0f307f5fd6337b7ff887fc7bfe1cbb2a`
**pt-BR review revision:** `f3b64054974a7d924821c90bff395f04ee3d7da6661eb523043849aa9f51d69c`

### English

Which example is an LLM hallucination?

1. Returning a real API method documented in the supplied reference

   A supported API reference is not an invention.

2. Reporting the compiler error shown in a tool result

   Accurately reporting observed output is not fabrication.

3. Summarizing a branch visible in the supplied code

   A faithful summary of supplied code is grounded.

4. Inventing a plausible API method that does not exist **[CORRECT]**

   Plausible but fabricated information is a hallucination.

**Concept:** Hallucinations

**Authored coaching hints:**

- Separate a factual mistake from an observed error message.
- Does the claim have support in the code or documentation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ejemplo es una alucinación de un LLM?

1. Devolver un método real de API documentado en la referencia aportada

   Una referencia de API respaldada no es una invención.

2. Informar del error de compilación mostrado en un resultado de herramienta

   Informar con precisión de un resultado observado no es fabricar.

3. Resumir una rama visible en el código suministrado

   Un resumen fiel del código suministrado está fundamentado.

4. Inventar un método de API plausible que no existe **[CORRECT]**

   La información plausible pero inventada es una alucinación.

**Concept:** Alucinaciones

**Authored coaching hints:**

- Separa un error factual de un mensaje de error observado.
- ¿La afirmación tiene respaldo en el código o la documentación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual exemplo é uma alucinação de um LLM?

1. Retornar um método real de API documentado na referência fornecida

   Uma referência de API respaldada não é uma invenção.

2. Relatar o erro de compilação exibido no resultado de uma ferramenta

   Relatar com precisão um resultado observado não é fabricar.

3. Resumir um ramo visível no código fornecido

   Um resumo fiel do código fornecido é fundamentado.

4. Inventar um método de API plausível que não existe **[CORRECT]**

   Informação plausível, mas inventada, é uma alucinação.

**Concept:** Alucinações

**Authored coaching hints:**

- Separe um erro factual de uma mensagem de erro observada.
- A afirmação tem respaldo no código ou na documentação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-126:1134ca7797f8f1b460c330e5c15c43754839cc7a59fa84789a820be046237d11 -->
## Question 126: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-126`

**Content revision:** `1134ca7797f8f1b460c330e5c15c43754839cc7a59fa84789a820be046237d11`

**en review revision:** `af4198aa11177f03ee893f2f353fc63b5e825c160483c95b65888c5923221abb`
**es review revision:** `be366062fbc6b1d1780756abcff0491ecb47b5395c01b0d14dea5df076bac8cc`
**pt-BR review revision:** `851e3a1ea981b81ea7ba704f486132f628142481b1b2a90a21e0ef9205a2866a`

### English

Which factors are relevant when choosing a Copilot model for a task?

1. Only model popularity and release recency

   Popularity and recency alone do not establish task suitability.

2. Only the largest advertised context window

   Context capacity is relevant but does not capture all trade-offs.

3. Task capability, latency, and usage cost **[CORRECT]**

   Models differ in strengths, latency, and usage cost.

4. Only the longest generated response

   Response length is not a measure of task suitability.

**Concept:** Model selection trade-offs

**Authored coaching hints:**

- A quick completion and a complex investigation have different demands.
- Compare task requirements with model characteristics.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué factores son relevantes al elegir un modelo de Copilot para una tarea?

1. Solo la popularidad del modelo y lo reciente de su lanzamiento

   La popularidad y la novedad por sí solas no establecen idoneidad para la tarea.

2. Solo la mayor ventana de contexto anunciada

   La capacidad de contexto importa, pero no recoge todos los equilibrios.

3. Capacidad para la tarea, latencia y coste de uso **[CORRECT]**

   Los modelos difieren en fortalezas, latencia y coste de uso.

4. Solo la respuesta generada más larga

   La longitud de respuesta no mide idoneidad para la tarea.

**Concept:** Equilibrios en la selección de modelos

**Authored coaching hints:**

- Una completación rápida y una investigación compleja exigen cosas distintas.
- Compara requisitos de la tarea con características del modelo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais fatores são relevantes ao escolher um modelo do Copilot para uma tarefa?

1. Apenas a popularidade do modelo e quão recente é o lançamento

   Popularidade e novidade sozinhas não estabelecem adequação à tarefa.

2. Apenas a maior janela de contexto anunciada

   A capacidade de contexto importa, mas não abrange todas as compensações.

3. Capacidade para a tarefa, latência e custo de uso **[CORRECT]**

   Modelos diferem em pontos fortes, latência e custo de uso.

4. Apenas a resposta gerada mais longa

   O tamanho da resposta não mede adequação à tarefa.

**Concept:** Compensações na seleção de modelos

**Authored coaching hints:**

- Uma conclusão rápida e uma investigação complexa têm exigências distintas.
- Compare requisitos da tarefa com características do modelo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/reference/ai-models/model-comparison>

<!-- certification-coach-question:copilot-127:0f5c267a19907a59e2b9bb3516a4cc14fd147c4ecf104feb673e8fd58a8dd1e4 -->
## Question 127: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-127`

**Content revision:** `0f5c267a19907a59e2b9bb3516a4cc14fd147c4ecf104feb673e8fd58a8dd1e4`

**en review revision:** `c99f7d9e8a10504991e1260bc160bf21cc80437c658fb34028434e9cdf8d84df`
**es review revision:** `f3631d43e52c9b718d75a2b3f4bbcb19882e3114a99b533d6f161fc66191eff8`
**pt-BR review revision:** `19a8fc202988ea7a3a84ae2efeecf5dec3576384e91ad17f3fff4c4a874ba31d`

### English

Why can Copilot's inline suggestion quality vary across programming languages?

1. Unequal training-data representation **[CORRECT]**

   The application card identifies representation in training data as a factor.

2. Every language has an identical training corpus

   Training representation is not identical for every language.

3. The editor font determines language understanding

   Font choice does not determine learned language support.

4. Public repository names determine syntax validity

   Repository names do not establish syntactic correctness.

**Concept:** Language coverage limitations

**Authored coaching hints:**

- Consider how a model gains examples of language usage.
- Does support for many languages imply equal performance in each?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué puede variar la calidad de las sugerencias en línea de Copilot entre lenguajes?

1. Representación desigual en los datos de entrenamiento **[CORRECT]**

   La ficha de aplicación identifica la representación en datos de entrenamiento como un factor.

2. Todos los lenguajes tienen un corpus de entrenamiento idéntico

   La representación en el entrenamiento no es idéntica en todos los lenguajes.

3. La fuente del editor determina la comprensión del lenguaje

   La fuente tipográfica no determina la compatibilidad aprendida.

4. Los nombres de repositorios públicos determinan la validez sintáctica

   Los nombres de repositorios no establecen la corrección sintáctica.

**Concept:** Limitaciones de cobertura de lenguajes

**Authored coaching hints:**

- Considera cómo obtiene un modelo ejemplos de uso de un lenguaje.
- ¿Admitir muchos lenguajes implica rendir igual en cada uno?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que a qualidade das sugestões em linha do Copilot pode variar entre linguagens?

1. Representação desigual nos dados de treinamento **[CORRECT]**

   O cartão de aplicação identifica a representação nos dados de treinamento como um fator.

2. Todas as linguagens têm um corpus de treinamento idêntico

   A representação no treinamento não é idêntica em todas as linguagens.

3. A fonte do editor determina a compreensão da linguagem

   A fonte tipográfica não determina o suporte aprendido.

4. Os nomes de repositórios públicos determinam a validade sintática

   Nomes de repositórios não estabelecem correção sintática.

**Concept:** Limitações de cobertura de linguagens

**Authored coaching hints:**

- Considere como um modelo obtém exemplos de uso de uma linguagem.
- Suportar muitas linguagens implica ter desempenho igual em cada uma?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-128:cc092a964483ce3d4581876881a7ff936d01306ce01e0194ab8f68d2fc2f84af -->
## Question 128: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-128`

**Content revision:** `cc092a964483ce3d4581876881a7ff936d01306ce01e0194ab8f68d2fc2f84af`

**en review revision:** `6b8d762acb111d9ffb8a67899a134e33196fafb19401c96c1c99d3ea84f608c9`
**es review revision:** `230d5b4b9820e425d400004f75d411cbe4da719023f9dd84b3919a66e998ccca`
**pt-BR review revision:** `6cad8a08902418bd6d36dcfd0998f40200ab881ac74afa154a6420d2f7198db8`

### English

Copilot receives an obsolete API guide as context. What risk does this introduce?

1. The guide automatically updates the installed dependency

   Supplying text does not update installed packages.

2. The response may reflect obsolete API behavior **[CORRECT]**

   Incorrect or stale context can misdirect generation.

3. The model must refuse to generate any answer

   Obsolete context does not guarantee a refusal.

4. The guide changes the repository's access permissions

   Documentation text is not an authorization change.

**Concept:** Context freshness

**Authored coaching hints:**

- Relevant-looking information can still be outdated.
- What version does the supplied evidence describe?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Copilot recibe una guía de API obsoleta como contexto. ¿Qué riesgo introduce?

1. La guía actualiza automáticamente la dependencia instalada

   Aportar texto no actualiza paquetes instalados.

2. La respuesta puede reflejar un comportamiento obsoleto de la API **[CORRECT]**

   El contexto incorrecto o antiguo puede desorientar la generación.

3. El modelo debe negarse a generar cualquier respuesta

   El contexto obsoleto no garantiza una negativa.

4. La guía cambia los permisos de acceso del repositorio

   El texto de documentación no cambia autorizaciones.

**Concept:** Vigencia del contexto

**Authored coaching hints:**

- La información aparentemente relevante puede estar desactualizada.
- ¿Qué versión describe la evidencia suministrada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O Copilot recebe um guia de API obsoleto como contexto. Que risco isso introduz?

1. O guia atualiza automaticamente a dependência instalada

   Fornecer texto não atualiza pacotes instalados.

2. A resposta pode refletir um comportamento obsoleto da API **[CORRECT]**

   Contexto incorreto ou antigo pode desorientar a geração.

3. O modelo deve recusar a geração de qualquer resposta

   Contexto obsoleto não garante uma recusa.

4. O guia muda as permissões de acesso do repositório

   Texto de documentação não muda autorizações.

**Concept:** Atualidade do contexto

**Authored coaching hints:**

- Informações aparentemente relevantes ainda podem estar desatualizadas.
- Que versão a evidência fornecida descreve?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-129:b45a1c513ec3bed57a3ddec540278f8cb1b0688bbe80f1c92747f36bd529cbaf -->
## Question 129: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-129`

**Content revision:** `b45a1c513ec3bed57a3ddec540278f8cb1b0688bbe80f1c92747f36bd529cbaf`

**en review revision:** `6b05bff0d73237e69e48e0b93cd2fac4ab7655c4ead408e52e9184bb616f910a`
**es review revision:** `29ab1b7ee0e28ea16a6624fbf44f5aefbaba2753622da8adaf940a5d435378f8`
**pt-BR review revision:** `6474695c8b9965903393220ef51971657628468b9df899d64de0fb406ec1edee`

### English

What does Copilot's nondeterministic behavior imply?

1. Every answer must differ from every previous answer

   Nondeterminism allows variation; it does not require uniqueness.

2. Instructions have no influence on responses

   Instructions still guide generation.

3. A longer prompt guarantees identical output

   Prompt length is not a reproducibility guarantee.

4. Repeated requests may produce different responses **[CORRECT]**

   GitHub warns that instructions may not be followed identically each time.

**Concept:** Nondeterministic generation

**Authored coaching hints:**

- Distinguish possible variation from mandatory variation.
- Would a correct answer today certify every future response?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué implica el comportamiento no determinista de Copilot?

1. Cada respuesta debe diferir de todas las anteriores

   El no determinismo permite variación; no exige unicidad.

2. Las instrucciones no influyen en las respuestas

   Las instrucciones siguen orientando la generación.

3. Un prompt más largo garantiza resultados idénticos

   La longitud del prompt no garantiza reproducibilidad.

4. Las solicitudes repetidas pueden producir respuestas distintas **[CORRECT]**

   GitHub advierte que las instrucciones pueden no seguirse de forma idéntica cada vez.

**Concept:** Generación no determinista

**Authored coaching hints:**

- Distingue variación posible de variación obligatoria.
- ¿Una respuesta correcta hoy certificaría todas las respuestas futuras?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que o comportamento não determinístico do Copilot implica?

1. Toda resposta deve diferir de todas as anteriores

   O não determinismo permite variação; não exige resultados únicos.

2. Instruções não influenciam as respostas

   Instruções continuam orientando a geração.

3. Um prompt mais longo garante resultados idênticos

   O tamanho do prompt não garante reprodutibilidade.

4. Solicitações repetidas podem produzir respostas diferentes **[CORRECT]**

   O GitHub alerta que instruções podem não ser seguidas de forma idêntica a cada vez.

**Concept:** Geração não determinística

**Authored coaching hints:**

- Diferencie variação possível de variação obrigatória.
- Uma resposta correta hoje certificaria todas as respostas futuras?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-130:046bf391081f06a6fd21f6edbd214ba3fac2e808d641f9a3afaac620f288e73c -->
## Question 130: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-130`

**Content revision:** `046bf391081f06a6fd21f6edbd214ba3fac2e808d641f9a3afaac620f288e73c`

**en review revision:** `f457495528a1860dd6902d072fc5ab22d4e8f97bcdab8aa643bb04d604fea7c4`
**es review revision:** `3ca02748b9228d61e12e3743fbaaebf33854084bf79e5a00427832425916bdf9`
**pt-BR review revision:** `8d94bd7641a4801f7892b1dda4020611feee697d2c779c1e001ca94217c0aadb`

### English

For an indexed repository covered by a content exclusion policy, when is data filtered for Copilot Chat?

1. Only after the answer is displayed

   Post-display filtering would not prevent use as context.

2. Only when a Git commit is created

   Commit creation is not the documented filtering boundary.

3. Before the data is passed to Copilot Chat **[CORRECT]**

   The indexing documentation states that policy filtering precedes passing data to Chat.

4. Only after the user copies the answer

   Copying an answer is unrelated to context filtering.

**Concept:** Exclusions in retrieval flow

**Authored coaching hints:**

- Follow the retrieved data toward the model.
- At which boundary must an exclusion affect context?

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un repositorio indexado cubierto por una política de exclusión de contenido, ¿cuándo se filtran los datos para Copilot Chat?

1. Solo después de mostrar la respuesta

   Filtrar después de mostrar no impediría usar el contenido como contexto.

2. Solo al crear un commit de Git

   Crear un commit no es el límite de filtrado documentado.

3. Antes de pasar los datos a Copilot Chat **[CORRECT]**

   La documentación de indexación indica que el filtrado por políticas precede al envío a Chat.

4. Solo después de que el usuario copie la respuesta

   Copiar una respuesta no está relacionado con filtrar contexto.

**Concept:** Exclusiones en el flujo de recuperación

**Authored coaching hints:**

- Sigue los datos recuperados hacia el modelo.
- ¿En qué límite debe afectar una exclusión al contexto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um repositório indexado coberto por uma política de exclusão de conteúdo, quando os dados são filtrados para o Copilot Chat?

1. Somente depois de exibir a resposta

   Filtrar após a exibição não impediria o uso do conteúdo como contexto.

2. Somente ao criar um commit do Git

   Criar um commit não é o limite de filtragem documentado.

3. Antes de passar os dados para o Copilot Chat **[CORRECT]**

   A documentação de indexação informa que a filtragem por políticas precede o envio ao Chat.

4. Somente depois que o usuário copia a resposta

   Copiar uma resposta não está relacionado à filtragem de contexto.

**Concept:** Exclusões no fluxo de recuperação

**Authored coaching hints:**

- Siga os dados recuperados em direção ao modelo.
- Em que limite uma exclusão precisa afetar o contexto?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/repository-indexing>

<!-- certification-coach-question:copilot-131:addc5e5ebdcaaa5dc361dab593387432d6dc81a7606524c8b9e46300a21cf007 -->
## Question 131: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-131`

**Content revision:** `addc5e5ebdcaaa5dc361dab593387432d6dc81a7606524c8b9e46300a21cf007`

**en review revision:** `7ff836d8a2debe5641aae899f8cf90f97a54b4279e8ed299c91a4a770a160f9b`
**es review revision:** `4c09bf1fa6c24f0090c385ffbfc59712d23a2e2c09ab8340acff81ea5e431f5a`
**pt-BR review revision:** `57ab7f910c6309fcf27d4d13ffa362df3e6617ec642cbb2724c759f3ee991c83`

### English

Which Copilot data is usage telemetry rather than source-code content?

1. Counts of active users and accepted suggestions **[CORRECT]**

   These counts describe feature usage.

2. The body of a generated function

   A function body is generated content.

3. A source file attached to a request

   An attached source file is request context.

4. A code snippet retrieved for an answer

   A retrieved snippet is contextual content.

**Concept:** Content and usage telemetry

**Authored coaching hints:**

- Separate what code says from how a feature is used.
- Which data describes activity rather than an implementation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué datos de Copilot son telemetría de uso y no contenido de código fuente?

1. Conteos de usuarios activos y sugerencias aceptadas **[CORRECT]**

   Estos conteos describen el uso de funciones.

2. El cuerpo de una función generada

   El cuerpo de una función es contenido generado.

3. Un archivo fuente adjunto a una solicitud

   Un archivo fuente adjunto es contexto de la solicitud.

4. Un fragmento de código recuperado para una respuesta

   Un fragmento recuperado es contenido contextual.

**Concept:** Contenido y telemetría de uso

**Authored coaching hints:**

- Separa lo que dice el código de cómo se usa una función.
- ¿Qué datos describen actividad y no una implementación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais dados do Copilot são telemetria de uso, e não conteúdo de código-fonte?

1. Contagens de usuários ativos e sugestões aceitas **[CORRECT]**

   Essas contagens descrevem o uso de funções.

2. O corpo de uma função gerada

   O corpo de uma função é conteúdo gerado.

3. Um arquivo-fonte anexado a uma solicitação

   Um arquivo-fonte anexado é contexto da solicitação.

4. Um trecho de código recuperado para uma resposta

   Um trecho recuperado é conteúdo contextual.

**Concept:** Conteúdo e telemetria de uso

**Authored coaching hints:**

- Separe o que o código diz de como uma função é usada.
- Quais dados descrevem atividade, e não uma implementação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics>

<!-- certification-coach-question:copilot-132:502df06c2b57994e3237e9afbbcab63d3ab080935c8ec271d3cf42a70ff2cdc4 -->
## Question 132: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-132`

**Content revision:** `502df06c2b57994e3237e9afbbcab63d3ab080935c8ec271d3cf42a70ff2cdc4`

**en review revision:** `be948f474c272f56e823f9e1f8f461e04d8b87a90511f303f43ee877035afc49`
**es review revision:** `a9a5a597a8801f526b2a7ee67ae2df9ba137f3c0bbe11a6687df3746f21272e2`
**pt-BR review revision:** `e35361806bb5051acd7f59ea4d23bc63a247d9cf6ec854331b13ec2b1c7e4fce`

### English

What distinguishes an agent's tool execution result from an ordinary generated claim?

1. The result always proves the entire task is correct

   A single result has limited scope.

2. It records an operation's observed output **[CORRECT]**

   Tool outputs provide execution evidence beyond generated prose.

3. The result is a permanent update to model weights

   Execution does not imply model retraining.

4. The result grants permission for all later operations

   One operation does not authorize unrelated later actions.

**Concept:** Model responses and tool execution

**Authored coaching hints:**

- Compare saying an action happened with observing its output.
- What evidence comes from the environment rather than language generation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué distingue el resultado de ejecución de una herramienta de un agente de una afirmación generada ordinaria?

1. El resultado siempre demuestra que toda la tarea es correcta

   Un resultado individual tiene alcance limitado.

2. Registra la salida observada de una operación **[CORRECT]**

   Las salidas de herramientas aportan evidencia de ejecución más allá del texto generado.

3. El resultado actualiza permanentemente los pesos del modelo

   La ejecución no implica volver a entrenar el modelo.

4. El resultado concede permiso para todas las operaciones posteriores

   Una operación no autoriza acciones posteriores no relacionadas.

**Concept:** Respuestas del modelo y ejecución de herramientas

**Authored coaching hints:**

- Compara decir que una acción ocurrió con observar su salida.
- ¿Qué evidencia proviene del entorno y no de la generación de lenguaje?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que distingue o resultado de execução de uma ferramenta de um agente de uma afirmação gerada comum?

1. O resultado sempre comprova que toda a tarefa está correta

   Um resultado individual tem escopo limitado.

2. Registra a saída observada de uma operação **[CORRECT]**

   Saídas de ferramentas fornecem evidência de execução além do texto gerado.

3. O resultado atualiza permanentemente os pesos do modelo

   Execução não implica treinar novamente o modelo.

4. O resultado concede permissão para todas as operações posteriores

   Uma operação não autoriza ações posteriores não relacionadas.

**Concept:** Respostas do modelo e execução de ferramentas

**Authored coaching hints:**

- Compare dizer que uma ação aconteceu com observar sua saída.
- Que evidência vem do ambiente, e não da geração de linguagem?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-133:289a11d9ea1f40fef124a0cc3de1e4d5fe1425d6b40aa02d815036a1128e4dea -->
## Question 133: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-133`

**Content revision:** `289a11d9ea1f40fef124a0cc3de1e4d5fe1425d6b40aa02d815036a1128e4dea`

**en review revision:** `3c4f1ed1ac8785e19d929118d869a72f0fd07117f7f039bd61c9485f76d48699`
**es review revision:** `604f614a4d3d7017f4fccc215e7e66746fa0b44439ece8cab3b91ceb369a1f36`
**pt-BR review revision:** `67ae19c2d7f8e479f2d57abb56639a57735fbada5c62a062f413a492f99a3472`

### English

How can a code comment influence an inline suggestion?

1. It automatically becomes a compiler-enforced requirement

   Comments are not compiler-enforced requirements.

2. It replaces all surrounding source-code context

   Comments complement rather than necessarily replace other context.

3. It directly changes the foundation model's weights

   Request context does not change model weights.

4. It can describe the intended code as part of prompt context **[CORRECT]**

   Comment-driven generation is a documented inline capability.

**Concept:** Comment-driven prompt input

**Authored coaching hints:**

- Natural-language intent can appear inside a source file.
- Distinguish contextual guidance from executable enforcement.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puede influir un comentario de código en una sugerencia en línea?

1. Se convierte automáticamente en un requisito impuesto por el compilador

   Los comentarios no son requisitos impuestos por el compilador.

2. Reemplaza todo el contexto del código circundante

   Los comentarios complementan y no necesariamente reemplazan el resto del contexto.

3. Cambia directamente los pesos del modelo base

   El contexto de una solicitud no cambia los pesos del modelo.

4. Puede describir el código deseado como parte del contexto del prompt **[CORRECT]**

   La generación guiada por comentarios es una capacidad en línea documentada.

**Concept:** Comentarios como entrada del prompt

**Authored coaching hints:**

- La intención en lenguaje natural puede aparecer dentro de un archivo fuente.
- Distingue orientación contextual de imposición ejecutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um comentário de código pode influenciar uma sugestão em linha?

1. Ele se torna automaticamente um requisito imposto pelo compilador

   Comentários não são requisitos impostos pelo compilador.

2. Ele substitui todo o contexto do código ao redor

   Comentários complementam, e não necessariamente substituem, o restante do contexto.

3. Ele muda diretamente os pesos do modelo base

   O contexto de uma solicitação não muda os pesos do modelo.

4. Ele pode descrever o código desejado como parte do contexto do prompt **[CORRECT]**

   A geração orientada por comentários é uma capacidade em linha documentada.

**Concept:** Comentários como entrada do prompt

**Authored coaching hints:**

- A intenção em linguagem natural pode aparecer dentro de um arquivo-fonte.
- Diferencie orientação contextual de imposição executável.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-134:535b8bfa297d9499e071a7867d2244f4d6c3caef6655392ca2a86da8b2e8e2be -->
## Question 134: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-134`

**Content revision:** `535b8bfa297d9499e071a7867d2244f4d6c3caef6655392ca2a86da8b2e8e2be`

**en review revision:** `0eb1d40aa2cba0df6722de6366902ed1a527ae321486a84dea348285a3a51d48`
**es review revision:** `a6d9565b8a0abe193bd99ea8a68d83bff6917d8a98d4d393ec459beb7f006edf`
**pt-BR review revision:** `2e65f72b291cb94879ba0496834a29f7ac7cac9c2315b9f7bbb92ba42007aa5e`

### English

Which statement about the models behind Copilot is supported by current documentation?

1. Every surface permanently uses the original Codex model

   Historical origins do not define every current model.

2. Every feature uses the same model with the same configuration

   The application card distinguishes models and experiences.

3. Models vary by task and experience **[CORRECT]**

   Current documentation describes a variety of models and links model-specific details.

4. Selecting a model makes its generated code formally verified

   Model selection does not supply a correctness proof.

**Concept:** Model and surface variation

**Authored coaching hints:**

- Separate a product's early implementation from its current capabilities.
- Would a single historical model name describe every surface today?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación sobre los modelos de Copilot respalda la documentación actual?

1. Todas las superficies usan permanentemente el modelo Codex original

   El origen histórico no define todos los modelos actuales.

2. Todas las funciones usan el mismo modelo con la misma configuración

   La ficha de aplicación distingue modelos y experiencias.

3. Los modelos varían según la tarea y la experiencia **[CORRECT]**

   La documentación actual describe varios modelos y enlaza detalles específicos.

4. Seleccionar un modelo verifica formalmente su código generado

   Seleccionar un modelo no aporta una demostración de corrección.

**Concept:** Variación de modelos y superficies

**Authored coaching hints:**

- Separa la implementación inicial de un producto de sus capacidades actuales.
- ¿Un solo nombre histórico de modelo describiría todas las superficies hoy?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação sobre os modelos do Copilot é respaldada pela documentação atual?

1. Todas as superfícies usam permanentemente o modelo Codex original

   A origem histórica não define todos os modelos atuais.

2. Todas as funções usam o mesmo modelo com a mesma configuração

   O cartão de aplicação distingue modelos e experiências.

3. Os modelos variam conforme a tarefa e a experiência **[CORRECT]**

   A documentação atual descreve vários modelos e vincula detalhes específicos.

4. Selecionar um modelo verifica formalmente seu código gerado

   Selecionar um modelo não fornece uma prova de correção.

**Concept:** Variação de modelos e superfícies

**Authored coaching hints:**

- Separe a implementação inicial de um produto de suas capacidades atuais.
- Um único nome histórico de modelo descreveria todas as superfícies hoje?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-135:f00b2647b0b115a63d0bae7fdff8c5bf9ca56b7f3ad44cc6c0c8360b1fba1d1e -->
## Question 135: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-135`

**Content revision:** `f00b2647b0b115a63d0bae7fdff8c5bf9ca56b7f3ad44cc6c0c8360b1fba1d1e`

**en review revision:** `460fc380171ea6bc299f766b4dd83f1f87345732f181c0b1ae0f9ef0f1e51f93`
**es review revision:** `96474d564d0ffba0fb08455f1efc9b7635070c953f3edf8d0dda40e0cb345e93`
**pt-BR review revision:** `c20dcf4563540f53a01f2cec682f4fd512f96a74c81e9e79bfb680ef9f37a472`

### English

How do MCP connections differ from custom instructions?

1. Connections expose tools or data; instructions provide guidance **[CORRECT]**

   MCP complements prompt guidance by adding external capabilities.

2. Connections define coding style; instructions authenticate services

   Guidance and service authentication are different mechanisms.

3. Connections train model weights; instructions build search indexes

   Neither description matches these customization mechanisms.

4. Connections and instructions are interchangeable names for one file

   They are separate mechanisms with different roles.

**Concept:** Tools versus guidance

**Authored coaching hints:**

- Separate what an assistant can access from how it should work.
- Does describing a service establish a working connection to it?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿En qué se diferencian las conexiones MCP de las instrucciones personalizadas?

1. Las conexiones exponen herramientas o datos; las instrucciones aportan orientación **[CORRECT]**

   MCP complementa la orientación del prompt con capacidades externas.

2. Las conexiones definen estilo de código; las instrucciones autentican servicios

   La orientación y la autenticación de servicios son mecanismos distintos.

3. Las conexiones entrenan pesos; las instrucciones crean índices de búsqueda

   Ninguna descripción corresponde a estos mecanismos de personalización.

4. Conexiones e instrucciones son nombres intercambiables de un archivo

   Son mecanismos separados con funciones diferentes.

**Concept:** Herramientas frente a orientación

**Authored coaching hints:**

- Separa a qué puede acceder un asistente de cómo debería trabajar.
- ¿Describir un servicio establece una conexión funcional con él?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como as conexões MCP diferem das instruções personalizadas?

1. Conexões expõem ferramentas ou dados; instruções fornecem orientação **[CORRECT]**

   MCP complementa a orientação do prompt com capacidades externas.

2. Conexões definem estilo de código; instruções autenticam serviços

   Orientação e autenticação de serviços são mecanismos distintos.

3. Conexões treinam pesos; instruções criam índices de pesquisa

   Nenhuma descrição corresponde a esses mecanismos de personalização.

4. Conexões e instruções são nomes intercambiáveis de um arquivo

   São mecanismos separados com funções diferentes.

**Concept:** Ferramentas versus orientação

**Authored coaching hints:**

- Separe o que um assistente pode acessar de como ele deve trabalhar.
- Descrever um serviço estabelece uma conexão funcional com ele?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/customizations/mcp>

<!-- certification-coach-question:copilot-136:cc4bfe4743885180316d67e0521056f3c55b63ff0c238cdb9511699c685b081b -->
## Question 136: Understand GitHub Copilot data and architecture

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-136`

**Content revision:** `cc4bfe4743885180316d67e0521056f3c55b63ff0c238cdb9511699c685b081b`

**en review revision:** `ade0ca3f4dbf96a1cf60bee6edfc6298d7b66074626d316b7f4f5259693ca866`
**es review revision:** `70966b4c52e8b6dd47d9b5ace9a70a9993ef05fe98ea8656a48f0cc2155cdbc7`
**pt-BR review revision:** `65ebe3b2260f608fe2b3fa968aa6068e37e83264ad480c9151636416bb14cb79`

### English

At a conceptual level, how does an LLM generate a text continuation?

1. By executing each proposed word as a shell command

   Text generation is not shell execution.

2. By predicting successive tokens from context **[CORRECT]**

   Successive token prediction is the basic language-model generation process.

3. By requiring an exact stored answer for the entire prompt

   Generation does not require a matching stored answer.

4. By compiling all possible responses before selecting one

   Compilation of all responses is not the generation mechanism.

**Concept:** Token prediction

**Authored coaching hints:**

- Think about producing a sequence incrementally.
- How can earlier context influence what comes next?

<details>
<summary>Español — same answer key and option order</summary>

### Español

A nivel conceptual, ¿cómo genera un LLM la continuación de un texto?

1. Ejecutando cada palabra propuesta como un comando de shell

   Generar texto no es ejecutar comandos de shell.

2. Prediciendo tokens sucesivos a partir del contexto **[CORRECT]**

   La predicción sucesiva de tokens es el proceso básico de generación de modelos de lenguaje.

3. Exigiendo una respuesta exacta almacenada para todo el prompt

   La generación no requiere una respuesta almacenada coincidente.

4. Compilando todas las respuestas posibles antes de seleccionar una

   Compilar todas las respuestas no es el mecanismo de generación.

**Concept:** Predicción de tokens

**Authored coaching hints:**

- Piensa en producir una secuencia de manera incremental.
- ¿Cómo puede influir el contexto anterior en lo que viene después?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em nível conceitual, como um LLM gera a continuação de um texto?

1. Executando cada palavra proposta como um comando de shell

   Gerar texto não é executar comandos de shell.

2. Prevendo tokens sucessivos a partir do contexto **[CORRECT]**

   A previsão sucessiva de tokens é o processo básico de geração de modelos de linguagem.

3. Exigindo uma resposta exata armazenada para todo o prompt

   A geração não exige uma resposta armazenada correspondente.

4. Compilando todas as respostas possíveis antes de selecionar uma

   Compilar todas as respostas não é o mecanismo de geração.

**Concept:** Previsão de tokens

**Authored coaching hints:**

- Pense em produzir uma sequência de forma incremental.
- Como o contexto anterior pode influenciar o que vem depois?

</details>

**Official supporting source:** <https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/>

<!-- certification-coach-question:copilot-137:1b913b3e0714ab1fd96e433c1cce5d9e7ad36caae3ee9c0496983b7d3c993e9b -->
## Question 137: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-137`

**Content revision:** `1b913b3e0714ab1fd96e433c1cce5d9e7ad36caae3ee9c0496983b7d3c993e9b`

**en review revision:** `4a6441390bb000c43928f3857972a9530b538ef3f0c8422e397e5f35eb9566d2`
**es review revision:** `f4657aedddfd2a17f31f452d486213de5ce4b341ebb84a45b0ae2b8462014bf5`
**pt-BR review revision:** `2b731cbef3644923ac4cf1113abc9ab898962099dd146219d4c5622775e1dc45`

### English

What is the purpose of prompt engineering when using Copilot?

1. Replace acceptance tests with detailed instructions

   Clear instructions do not replace independent validation.

2. Guide responses using instructions and context **[CORRECT]**

   Prompt engineering shapes the request and relevant context.

3. Change model parameters through conversation

   Providing a prompt does not retrain model parameters.

4. Increase repository permissions for the model

   Prompt wording does not grant repository access.

**Concept:** Purpose of prompt engineering

**Authored coaching hints:**

- Separate improving a request from changing the underlying model.
- Consider which inputs the developer directly controls.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Para qué sirve la ingeniería de prompts al usar Copilot?

1. Sustituir pruebas de aceptación por instrucciones detalladas

   Las instrucciones claras no sustituyen la validación independiente.

2. Orientar respuestas con instrucciones y contexto **[CORRECT]**

   La ingeniería de prompts mejora la solicitud y el contexto relevante.

3. Cambiar parámetros del modelo mediante la conversación

   Un prompt no reentrena los parámetros del modelo.

4. Aumentar los permisos del modelo sobre repositorios

   El texto del prompt no concede acceso a repositorios.

**Concept:** Propósito de la ingeniería de prompts

**Authored coaching hints:**

- Distingue mejorar una solicitud de cambiar el modelo subyacente.
- Considera qué entradas controla directamente el desarrollador.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para que serve a engenharia de prompts ao usar o Copilot?

1. Substituir testes de aceitação por instruções detalhadas

   Instruções claras não substituem a validação independente.

2. Orientar respostas com instruções e contexto **[CORRECT]**

   A engenharia de prompts melhora a solicitação e o contexto relevante.

3. Alterar parâmetros do modelo pela conversa

   Um prompt não retreina os parâmetros do modelo.

4. Aumentar as permissões do modelo em repositórios

   O texto do prompt não concede acesso a repositórios.

**Concept:** Finalidade da engenharia de prompts

**Authored coaching hints:**

- Diferencie melhorar uma solicitação de alterar o modelo subjacente.
- Considere quais entradas o desenvolvedor controla diretamente.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-138:25dc217362f3e7b0188cd919fc1d26a84c208bdd4dd9f4015732924ccc4de722 -->
## Question 138: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-138`

**Content revision:** `25dc217362f3e7b0188cd919fc1d26a84c208bdd4dd9f4015732924ccc4de722`

**en review revision:** `685995d1b032cd04cc6e6df303261672a9f8b444d592b59056467ff2b3fae892`
**es review revision:** `9a4f64b5d505504dd72ebd9d1852d84bc4a492dcb4c0c336ef2450e6551bf311`
**pt-BR review revision:** `c4f901e2f496bcb6cb5f60b841f63614aeec96836b1c5e86d644d0fb89af77b1`

### English

Which input characterizes zero-shot prompting?

1. Several examples followed by a task

   Several demonstrations characterize few-shot prompting.

2. A dataset used to update model weights

   Updating weights is training, not a prompting technique.

3. A task request without examples **[CORRECT]**

   Zero-shot prompting supplies no task demonstrations.

4. One completed example followed by a task

   One demonstration characterizes one-shot prompting.

**Concept:** Zero-shot prompting

**Authored coaching hints:**

- Count task demonstrations, not sentences in the request.
- A detailed requirement is not necessarily a worked example.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué entrada caracteriza el prompting zero-shot?

1. Varios ejemplos seguidos de una tarea

   Varias demostraciones caracterizan el prompting few-shot.

2. Un conjunto de datos para actualizar pesos del modelo

   Actualizar pesos es entrenamiento, no una técnica de prompting.

3. Una tarea solicitada sin ejemplos **[CORRECT]**

   El prompting zero-shot no incluye demostraciones de la tarea.

4. Un ejemplo resuelto seguido de una tarea

   Una demostración caracteriza el prompting one-shot.

**Concept:** Prompting zero-shot

**Authored coaching hints:**

- Cuenta demostraciones de la tarea, no oraciones de la solicitud.
- Un requisito detallado no es necesariamente un ejemplo resuelto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual entrada caracteriza o prompting zero-shot?

1. Vários exemplos seguidos de uma tarefa

   Várias demonstrações caracterizam o prompting few-shot.

2. Um conjunto de dados para atualizar pesos do modelo

   Atualizar pesos é treinamento, não uma técnica de prompting.

3. Uma tarefa solicitada sem exemplos **[CORRECT]**

   O prompting zero-shot não inclui demonstrações da tarefa.

4. Um exemplo resolvido seguido de uma tarefa

   Uma demonstração caracteriza o prompting one-shot.

**Concept:** Prompting zero-shot

**Authored coaching hints:**

- Conte demonstrações da tarefa, não frases na solicitação.
- Um requisito detalhado não é necessariamente um exemplo resolvido.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-139:fbbfd7641c347b4fa7ffd5b58edc3129dc14f102b25ea1cd1acea2d8e6a1a625 -->
## Question 139: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-139`

**Content revision:** `fbbfd7641c347b4fa7ffd5b58edc3129dc14f102b25ea1cd1acea2d8e6a1a625`

**en review revision:** `4d6cdc64859017ace83af15f44dfcf557fc8144ce53ca17fbcc23a82bf8f15da`
**es review revision:** `92e4a46a57e7edce46eff820daf9b5471907eed7513a951029fe64c932907649`
**pt-BR review revision:** `a4d287bf3c25ca28f46ccce9b11ef7d2cf81d172978115714df2deb0c45dfe0a`

### English

A prompt says, 'Write a validator that rejects empty identifiers.' No example is supplied. Which technique does it use?

1. One-shot prompting

   There is no worked example.

2. Few-shot prompting

   There is no set of worked examples.

3. Model fine-tuning

   The request does not update model weights.

4. Zero-shot prompting **[CORRECT]**

   The request describes a task without demonstrations.

**Concept:** Recognizing a zero-shot request

**Authored coaching hints:**

- Identify whether the request demonstrates a completed task.
- Do not confuse a constraint with a demonstration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un prompt dice: «Escribe un validador que rechace identificadores vacíos». No incluye ejemplos. ¿Qué técnica utiliza?

1. Prompting one-shot

   No hay un ejemplo resuelto.

2. Prompting few-shot

   No hay un conjunto de ejemplos resueltos.

3. Ajuste fino del modelo

   La solicitud no actualiza los pesos del modelo.

4. Prompting zero-shot **[CORRECT]**

   La solicitud describe una tarea sin demostraciones.

**Concept:** Reconocer una solicitud zero-shot

**Authored coaching hints:**

- Identifica si la solicitud demuestra una tarea ya resuelta.
- No confundas una restricción con una demostración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um prompt diz: 'Escreva um validador que rejeite identificadores vazios'. Não inclui exemplos. Qual técnica utiliza?

1. Prompting one-shot

   Não há um exemplo resolvido.

2. Prompting few-shot

   Não há um conjunto de exemplos resolvidos.

3. Ajuste fino do modelo

   A solicitação não atualiza os pesos do modelo.

4. Prompting zero-shot **[CORRECT]**

   A solicitação descreve uma tarefa sem demonstrações.

**Concept:** Reconhecer uma solicitação zero-shot

**Authored coaching hints:**

- Identifique se a solicitação demonstra uma tarefa já resolvida.
- Não confunda uma restrição com uma demonstração.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-140:d04000936dd430599ab777a637e2195545ecd18aadb3aa54211c332377f0f2db -->
## Question 140: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-140`

**Content revision:** `d04000936dd430599ab777a637e2195545ecd18aadb3aa54211c332377f0f2db`

**en review revision:** `6df96d1ba7aa69dbf0787006109311e568d3be5ee69ab50594c1d0c39bcffe55`
**es review revision:** `b01833e985522994e36500027d4631437596cc38f9ca7a09893dc92367ac5ef4`
**pt-BR review revision:** `6300d6b3def00d8f0b2d169bef192e50538a028eccdd2e8dc1bb0accf704eda3`

### English

A developer shows one completed error-message rewrite before requesting another rewrite. What type of prompting is this?

1. One-shot **[CORRECT]**

   One completed demonstration makes this one-shot prompting.

2. Zero-shot

   Zero-shot would omit the demonstration.

3. Few-shot

   Few-shot would include multiple demonstrations.

4. Fine-tuning

   An example in a prompt does not update model weights.

**Concept:** Recognizing one-shot prompting

**Authored coaching hints:**

- Count completed demonstrations in the input.
- The requested new output is not an additional demonstration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un desarrollador muestra una reescritura completa de un mensaje de error antes de solicitar otra. ¿Qué tipo de prompting es?

1. One-shot **[CORRECT]**

   Una demostración completa corresponde a prompting one-shot.

2. Zero-shot

   Zero-shot omitiría la demostración.

3. Few-shot

   Few-shot incluiría varias demostraciones.

4. Ajuste fino

   Un ejemplo en un prompt no actualiza los pesos del modelo.

**Concept:** Reconocer prompting one-shot

**Authored coaching hints:**

- Cuenta las demostraciones completas de la entrada.
- La nueva salida solicitada no es otra demostración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor mostra uma reescrita completa de uma mensagem de erro antes de solicitar outra. Qual é o tipo de prompting?

1. One-shot **[CORRECT]**

   Uma demonstração completa corresponde a prompting one-shot.

2. Zero-shot

   Zero-shot omitiria a demonstração.

3. Few-shot

   Few-shot incluiria várias demonstrações.

4. Ajuste fino

   Um exemplo no prompt não atualiza os pesos do modelo.

**Concept:** Reconhecer prompting one-shot

**Authored coaching hints:**

- Conte as demonstrações completas na entrada.
- A nova saída solicitada não é outra demonstração.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-141:cc9828d838f8716fe4d571c2a760a73993ceab77522ace0330e92c585fc13ace -->
## Question 141: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-141`

**Content revision:** `cc9828d838f8716fe4d571c2a760a73993ceab77522ace0330e92c585fc13ace`

**en review revision:** `b2db134023c5c379fb99a0dcf660da366a6ac874090c6c3a9d8c98938f41d6ff`
**es review revision:** `f40aa8b97550ae4e643455ca01740651e4992a5d31012fcbcb9d9f82b86bb523`
**pt-BR review revision:** `1c4b95490eb422c1deaf892e02dcf88fb97b0296a0c2c9b3e28d3fcfd7d16fd5`

### English

In the '4 Ss' of prompt engineering, what does Single recommend?

1. Keep only one source file open

   Relevant file context relates to Surround.

2. Focus on one well-defined task **[CORRECT]**

   Single concerns task focus, not a fixed input length.

3. Use exactly one sentence

   A focused task may need multiple sentences.

4. Include exactly one worked example

   Example count describes shot-based prompting.

**Concept:** Single-task prompting

**Authored coaching hints:**

- Distinguish scope from message length.
- Which property keeps a request focused?

<details>
<summary>Español — same answer key and option order</summary>

### Español

En las «4 S» de la ingeniería de prompts, ¿qué recomienda Single?

1. Mantener abierto solo un archivo fuente

   El contexto de archivos relevantes corresponde a Surround.

2. Centrarse en una tarea bien definida **[CORRECT]**

   Single trata del enfoque de la tarea, no de una longitud fija.

3. Usar exactamente una oración

   Una tarea enfocada puede necesitar varias oraciones.

4. Incluir exactamente un ejemplo resuelto

   La cantidad de ejemplos describe técnicas basadas en ejemplos.

**Concept:** Prompting centrado en una tarea

**Authored coaching hints:**

- Distingue el alcance de la longitud del mensaje.
- ¿Qué propiedad mantiene enfocada una solicitud?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Nos '4 Ss' da engenharia de prompts, o que Single recomenda?

1. Manter aberto apenas um arquivo-fonte

   O contexto de arquivos relevantes corresponde a Surround.

2. Focar em uma tarefa bem definida **[CORRECT]**

   Single trata do foco da tarefa, não de um tamanho fixo.

3. Usar exatamente uma frase

   Uma tarefa focada pode precisar de várias frases.

4. Incluir exatamente um exemplo resolvido

   A quantidade de exemplos descreve técnicas baseadas em exemplos.

**Concept:** Prompting focado em uma tarefa

**Authored coaching hints:**

- Diferencie escopo de tamanho da mensagem.
- Qual propriedade mantém uma solicitação focada?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-142:6540b0f007bc9227ef5a0d889ecb808042aa37443b13c9f4a729dd1c9f2f9ff1 -->
## Question 142: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-142`

**Content revision:** `6540b0f007bc9227ef5a0d889ecb808042aa37443b13c9f4a729dd1c9f2f9ff1`

**en review revision:** `6c1fa19451e5e0649b4190bb1e863b07b17ff41dd603656464e3d2dede516575`
**es review revision:** `066cf4eaf2d59e8b38bf7a9c61593ae012d1239f633ace0effbda9ddf455c546`
**pt-BR review revision:** `e78b793ba44983e8ad8bafcc861929f9e6e7615c537e1261cb8f9e55605b700f`

### English

Which prompting strategy makes a large implementation task easier to evaluate?

1. Repeat the entire request without changing its scope

   Repetition does not address excessive scope.

2. Remove intermediate checks until everything is generated

   Skipping checks delays detection of misunderstandings.

3. Divide it into smaller tasks with clear requirements **[CORRECT]**

   Smaller tasks make progress and correctness easier to assess.

4. Combine implementation and unrelated cleanup

   Unrelated work expands the evaluation scope.

**Concept:** Task decomposition

**Authored coaching hints:**

- Consider how much behavior must be assessed at once.
- Choose a strategy that exposes misunderstandings early.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué estrategia de prompting facilita evaluar una implementación grande?

1. Repetir toda la solicitud sin cambiar su alcance

   La repetición no resuelve un alcance excesivo.

2. Eliminar comprobaciones intermedias hasta generar todo

   Omitir comprobaciones retrasa la detección de malentendidos.

3. Dividirla en tareas menores con requisitos claros **[CORRECT]**

   Las tareas menores facilitan evaluar avances y corrección.

4. Combinar implementación y limpieza no relacionada

   El trabajo no relacionado amplía el alcance de evaluación.

**Concept:** Descomposición de tareas

**Authored coaching hints:**

- Considera cuánto comportamiento debe evaluarse a la vez.
- Elige una estrategia que detecte malentendidos temprano.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual estratégia de prompting facilita avaliar uma implementação grande?

1. Repetir toda a solicitação sem alterar seu escopo

   Repetir não resolve um escopo excessivo.

2. Eliminar verificações intermediárias até gerar tudo

   Omitir verificações adia a detecção de mal-entendidos.

3. Dividi-la em tarefas menores com requisitos claros **[CORRECT]**

   Tarefas menores facilitam avaliar o progresso e a correção.

4. Combinar implementação e limpeza não relacionada

   Trabalho não relacionado amplia o escopo da avaliação.

**Concept:** Decomposição de tarefas

**Authored coaching hints:**

- Considere quanto comportamento precisa ser avaliado de uma vez.
- Escolha uma estratégia que revele mal-entendidos cedo.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-143:d2d3002f4e608a0d08a6bb055fe490fe8a69543d165f3bb7e2feb9f944148f44 -->
## Question 143: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-143`

**Content revision:** `d2d3002f4e608a0d08a6bb055fe490fe8a69543d165f3bb7e2feb9f944148f44`

**en review revision:** `891bd2060e28b2c4adc57ed977018734e8f30c0db532b92b51e2345a6797c2ad`
**es review revision:** `6e3a25966c80398b2a80e28886997a52b8798cf719ee0040b06ac225a88ba890`
**pt-BR review revision:** `a47615082046e3c218921721caae508bba3c257473e7d53f7c1f2b238e90c804`

### English

Which prompt uses few-shot demonstrations to teach a custom category format?

1. Name the category format without showing examples

   Naming a format provides no demonstrations.

2. Show one labeled example, then ask for a new label

   One example is one-shot prompting.

3. Ask three questions without demonstrating any labels

   The number of questions does not determine the shot count.

4. Give several labeled examples before a new input **[CORRECT]**

   Multiple labeled examples demonstrate the desired pattern.

**Concept:** Applying few-shot prompting

**Authored coaching hints:**

- Look for completed input/output demonstrations.
- Count examples, not questions or constraints.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué prompt usa demostraciones few-shot para enseñar un formato de categorías propio?

1. Nombrar el formato de categorías sin mostrar ejemplos

   Nombrar un formato no aporta demostraciones.

2. Mostrar un ejemplo etiquetado y pedir otra etiqueta

   Un ejemplo corresponde a prompting one-shot.

3. Hacer tres preguntas sin demostrar ninguna etiqueta

   La cantidad de preguntas no determina la cantidad de ejemplos.

4. Dar varios ejemplos etiquetados antes de otra entrada **[CORRECT]**

   Varios ejemplos etiquetados demuestran el patrón deseado.

**Concept:** Aplicar prompting few-shot

**Authored coaching hints:**

- Busca demostraciones completas de entrada y salida.
- Cuenta ejemplos, no preguntas ni restricciones.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual prompt usa demonstrações few-shot para ensinar um formato próprio de categorias?

1. Nomear o formato de categorias sem mostrar exemplos

   Nomear um formato não fornece demonstrações.

2. Mostrar um exemplo rotulado e pedir outro rótulo

   Um exemplo corresponde a prompting one-shot.

3. Fazer três perguntas sem demonstrar nenhum rótulo

   A quantidade de perguntas não determina a quantidade de exemplos.

4. Dar vários exemplos rotulados antes de outra entrada **[CORRECT]**

   Vários exemplos rotulados demonstram o padrão desejado.

**Concept:** Aplicar prompting few-shot

**Authored coaching hints:**

- Procure demonstrações completas de entrada e saída.
- Conte exemplos, não perguntas ou restrições.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-144:9d3935da5531bc8290f07e74ba3e25384c820d69d34438a4f58381a780ddef6a -->
## Question 144: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-144`

**Content revision:** `9d3935da5531bc8290f07e74ba3e25384c820d69d34438a4f58381a780ddef6a`

**en review revision:** `10c56880124ca215abff08c355f85f400844a5e1ab5afe4f890b5e0a7a88711f`
**es review revision:** `4bb01b748b9d04bcb74c063014fa8ebccd4a1642ab982fcbf759f70f935c000f`
**pt-BR review revision:** `f238db2bade93a40f8915a3ebfdcf53e35f4783b1c5b90bddb02f04c7848aa00`

### English

Which instruction specifies a machine-readable output contract most precisely?

1. Return only JSON with the keys title and priority **[CORRECT]**

   It specifies the serialization format and permitted keys.

2. Return a concise explanation of title and priority

   An explanation does not require valid JSON.

3. Return a table listing title and priority

   A table is not the requested JSON object.

4. Return whichever format best explains title and priority

   An open format choice does not define a fixed contract.

**Concept:** Explicit output format

**Authored coaching hints:**

- Distinguish readable content from a fixed serialization contract.
- What would a downstream parser need to know?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué instrucción define con mayor precisión un contrato de salida legible por máquina?

1. Devuelve solo JSON con las claves title y priority **[CORRECT]**

   Especifica el formato de serialización y las claves permitidas.

2. Devuelve una explicación breve de title y priority

   Una explicación no exige JSON válido.

3. Devuelve una tabla con title y priority

   Una tabla no es el objeto JSON solicitado.

4. Devuelve el formato que mejor explique title y priority

   Dejar abierto el formato no define un contrato fijo.

**Concept:** Formato de salida explícito

**Authored coaching hints:**

- Distingue contenido legible de un contrato de serialización fijo.
- ¿Qué necesita conocer un analizador posterior?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual instrução define com mais precisão um contrato de saída legível por máquina?

1. Retorne apenas JSON com as chaves title e priority **[CORRECT]**

   Especifica o formato de serialização e as chaves permitidas.

2. Retorne uma explicação breve de title e priority

   Uma explicação não exige JSON válido.

3. Retorne uma tabela com title e priority

   Uma tabela não é o objeto JSON solicitado.

4. Retorne o formato que melhor explique title e priority

   Deixar o formato em aberto não define um contrato fixo.

**Concept:** Formato de saída explícito

**Authored coaching hints:**

- Diferencie conteúdo legível de um contrato de serialização fixo.
- O que um analisador posterior precisa saber?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-145:9bbc81aa76154b1d5a9ee5b9ca313de4f9f73d5e4e47bf4fcc411988fa4498e5 -->
## Question 145: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-145`

**Content revision:** `9bbc81aa76154b1d5a9ee5b9ca313de4f9f73d5e4e47bf4fcc411988fa4498e5`

**en review revision:** `4efb2d81b78f324bd552260d3dd99b0a437f1f9e74b0b49e1e1afd7217aa90a9`
**es review revision:** `85d2b7b4d6b2abbaabaebcb587d758651c2e6bfa91442ab07d5b73a6ce22f39f`
**pt-BR review revision:** `e912be4682999c77afa4bb3202a84575ee25e18fe2f53e8be1016ad20de4775b`

### English

What does 'preserve the public method signatures' express in a refactoring prompt?

1. A request to add a new public API

   Preserving an interface is different from expanding it.

2. A compatibility constraint **[CORRECT]**

   It states behavior of the interface that must remain unchanged.

3. An example of the expected output

   It supplies a requirement, not a worked output.

4. A repository access permission

   Prompt constraints do not configure access control.

**Concept:** Constraints and invariants

**Authored coaching hints:**

- Separate what may change from what must remain stable.
- Classify the instruction's role rather than its wording.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué expresa «conserva las firmas de los métodos públicos» en un prompt de refactorización?

1. Una solicitud de añadir una API pública

   Conservar una interfaz no es ampliarla.

2. Una restricción de compatibilidad **[CORRECT]**

   Indica qué parte de la interfaz debe permanecer sin cambios.

3. Un ejemplo de la salida esperada

   Aporta un requisito, no un resultado de ejemplo.

4. Un permiso de acceso al repositorio

   Las restricciones del prompt no configuran permisos.

**Concept:** Restricciones e invariantes

**Authored coaching hints:**

- Separa lo que puede cambiar de lo que debe mantenerse.
- Clasifica la función de la instrucción, no su redacción.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que 'preserve as assinaturas dos métodos públicos' expressa em um prompt de refatoração?

1. Uma solicitação para adicionar uma API pública

   Preservar uma interface não é ampliá-la.

2. Uma restrição de compatibilidade **[CORRECT]**

   Indica qual parte da interface deve permanecer inalterada.

3. Um exemplo da saída esperada

   Fornece um requisito, não uma saída de exemplo.

4. Uma permissão de acesso ao repositório

   Restrições do prompt não configuram permissões.

**Concept:** Restrições e invariantes

**Authored coaching hints:**

- Separe o que pode mudar do que deve permanecer estável.
- Classifique a função da instrução, não sua redação.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-146:6b8ab1675088fcf7f95e29972f222b55a4490366d01ccff4a6b0c60887e37ae3 -->
## Question 146: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-146`

**Content revision:** `6b8ab1675088fcf7f95e29972f222b55a4490366d01ccff4a6b0c60887e37ae3`

**en review revision:** `a31a0f558cc9b5ffe481b68c1895ed8574ced20753bc2708bbaa5bd56a9987f7`
**es review revision:** `3d017c0616acfc0eeaa7d795376dab9a9d1680ecb121eb02f41a99e2a2e333d3`
**pt-BR review revision:** `c7bf04eddcc0948743d51f03653e6ebb39e4cee67c31195b5d94da07104b9bf4`

### English

What context best supports a request involving an unfamiliar internal library?

1. Usage examples from an incompatible library release

   A different release may expose incompatible APIs.

2. A list of libraries used by a different project

   Another project's libraries do not explain this internal API.

3. API signatures and relevant usage examples **[CORRECT]**

   Signatures and examples describe how the actual library is used.

4. A high-level description of the library's purpose

   A high-level purpose omits the interface needed to write calls.

**Concept:** Supplying unfamiliar API context

**Authored coaching hints:**

- Think about information absent from general model knowledge.
- Which context demonstrates the interface being used?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué contexto ayuda más en una solicitud sobre una biblioteca interna poco conocida?

1. Ejemplos de una versión incompatible de la biblioteca

   Otra versión puede exponer API incompatibles.

2. Una lista de bibliotecas utilizadas por otro proyecto

   Las bibliotecas de otro proyecto no explican esta API interna.

3. Firmas de API y ejemplos de uso relevantes **[CORRECT]**

   Las firmas y los ejemplos muestran cómo usar la biblioteca real.

4. Una descripción general del propósito de la biblioteca

   Un propósito general omite la interfaz necesaria para las llamadas.

**Concept:** Aportar contexto de una API poco conocida

**Authored coaching hints:**

- Piensa en información ausente del conocimiento general del modelo.
- ¿Qué contexto demuestra la interfaz que se utiliza?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual contexto mais ajuda em uma solicitação sobre uma biblioteca interna pouco conhecida?

1. Exemplos de uma versão incompatível da biblioteca

   Outra versão pode expor APIs incompatíveis.

2. Uma lista de bibliotecas utilizadas por outro projeto

   As bibliotecas de outro projeto não explicam esta API interna.

3. Assinaturas de API e exemplos de uso relevantes **[CORRECT]**

   Assinaturas e exemplos mostram como usar a biblioteca real.

4. Uma descrição geral da finalidade da biblioteca

   Uma finalidade geral omite a interface necessária para as chamadas.

**Concept:** Fornecer contexto de uma API pouco conhecida

**Authored coaching hints:**

- Pense em informações ausentes do conhecimento geral do modelo.
- Qual contexto demonstra a interface utilizada?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-147:4243aa110dc7aff2e90f0a972cffd36b5894d7cc5cee1a104613ddc23295f461 -->
## Question 147: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-147`

**Content revision:** `4243aa110dc7aff2e90f0a972cffd36b5894d7cc5cee1a104613ddc23295f461`

**en review revision:** `7da6ef7e0ff58f8ce3714e05f42b0711bd0083450dabf767f72407abceb382f3`
**es review revision:** `e0ad4409fe42abd78ff14e47d70cb42dff8e0becbeac01d70dcd0134fce0ed01`
**pt-BR review revision:** `44af04772ff64e8b8dbce9f12334198e02617bd2e1a68c544d53fedcd716ab2e`

### English

Which comment gives Copilot the clearest implementation requirement?

1. Implement tree processing using a suitable approach

   The traversal strategy is left unspecified.

2. Improve this tree function as much as possible

   The improvement goal has no concrete requirement.

3. Use the normal traversal style for this tree

   The expected convention is not identified.

4. Use iterative traversal, not recursion **[CORRECT]**

   It specifies the operation and an explicit implementation constraint.

**Concept:** Precise comment-driven requests

**Authored coaching hints:**

- Look for explicit behavior and constraints.
- A familiar-sounding instruction can still leave key decisions ambiguous.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comentario comunica a Copilot el requisito de implementación con mayor claridad?

1. Implementa el procesamiento del árbol con un enfoque adecuado

   Deja sin especificar la estrategia de recorrido.

2. Mejora esta función de árbol todo lo posible

   El objetivo de mejora no tiene un requisito concreto.

3. Usa el estilo de recorrido habitual para este árbol

   No identifica la convención esperada.

4. Usa recorrido iterativo, no recursión **[CORRECT]**

   Especifica la operación y una restricción explícita.

**Concept:** Solicitudes precisas mediante comentarios

**Authored coaching hints:**

- Busca comportamiento y restricciones explícitos.
- Una instrucción familiar puede dejar ambiguas decisiones importantes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comentário comunica ao Copilot o requisito de implementação com mais clareza?

1. Implemente o processamento da árvore com uma abordagem adequada

   Deixa a estratégia de percurso indefinida.

2. Melhore esta função de árvore o máximo possível

   O objetivo de melhoria não tem um requisito concreto.

3. Use o estilo de percurso habitual para esta árvore

   Não identifica a convenção esperada.

4. Use percurso iterativo, não recursão **[CORRECT]**

   Especifica a operação e uma restrição explícita.

**Concept:** Solicitações precisas por comentários

**Authored coaching hints:**

- Procure comportamento e restrições explícitos.
- Uma instrução familiar pode deixar decisões importantes ambíguas.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-148:0aaf9ed2c7002cd8cf1190417f72c62eca435da6f2e42add38888319366e4237 -->
## Question 148: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-148`

**Content revision:** `0aaf9ed2c7002cd8cf1190417f72c62eca435da6f2e42add38888319366e4237`

**en review revision:** `25282e228ea7885e0fde34d803a5de91bacc60b3f864803b9a08a7d52cf0a7e7`
**es review revision:** `2f9a08ff10245857cbbd87ffd0a35dd63a394f442d65790fa703a9183e60a1d8`
**pt-BR review revision:** `e1ee0e6c899971299d8c63ba8e9d90b57bbe0a78d7e26552465a8f7c9093c0a9`

### English

Which comparison best measures whether a revised prompt improves generated code?

1. Apply the same acceptance tests to both outputs **[CORRECT]**

   Shared criteria allow a task-relevant comparison of correctness.

2. Compare only the word counts of both prompts

   Prompt length does not establish output quality.

3. Prefer whichever response sounds more confident

   Confidence is not independent evidence of correctness.

4. Prefer whichever implementation has fewer lines

   Shorter code may still violate requirements.

**Concept:** Evaluating prompt revisions

**Authored coaching hints:**

- Keep the evaluation criteria constant.
- Distinguish a useful outcome from an easy-to-count proxy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué comparación mide mejor si un prompt revisado mejora el código generado?

1. Aplicar las mismas pruebas de aceptación a ambas salidas **[CORRECT]**

   Los mismos criterios permiten comparar la corrección para la tarea.

2. Comparar solo la cantidad de palabras de ambos prompts

   La longitud del prompt no demuestra calidad de salida.

3. Preferir la respuesta que suene más segura

   La confianza no es evidencia independiente de corrección.

4. Preferir la implementación que tenga menos líneas

   El código más corto puede incumplir requisitos.

**Concept:** Evaluar revisiones de prompts

**Authored coaching hints:**

- Mantén constantes los criterios de evaluación.
- Distingue un resultado útil de un indicador fácil de contar.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual comparação mede melhor se um prompt revisado melhora o código gerado?

1. Aplicar os mesmos testes de aceitação às duas saídas **[CORRECT]**

   Os mesmos critérios permitem comparar a correção para a tarefa.

2. Comparar apenas a quantidade de palavras dos prompts

   O tamanho do prompt não comprova qualidade da saída.

3. Preferir a resposta que pareça mais confiante

   Confiança não é evidência independente de correção.

4. Preferir a implementação que tenha menos linhas

   Código mais curto pode descumprir requisitos.

**Concept:** Avaliar revisões de prompts

**Authored coaching hints:**

- Mantenha os critérios de avaliação constantes.
- Diferencie um resultado útil de um indicador fácil de contar.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-149:f9c83e460c96caebd96f53a0ea7c993fe1138d0e5db4f9cf842fa67758308ca8 -->
## Question 149: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-149`

**Content revision:** `f9c83e460c96caebd96f53a0ea7c993fe1138d0e5db4f9cf842fa67758308ca8`

**en review revision:** `caf93e4136ee96101b143e05c7fd6d871f87d8e4d4bebcb221932cfa0bbf6d47`
**es review revision:** `02f71599d027f14624a1a41345c2649e0149aa4c4923013931f155fac13b9612`
**pt-BR review revision:** `52c5c05324d34941ade10246774c9fce546216248672f6307e5fdc5cfec409fa`

### English

When moving from an unrelated task to a new task in Copilot Chat, what is the recommended approach to conversation history?

1. Replace the new task's details with the old summary

   The old summary does not describe the new task.

2. Start a new chat with the new task's context **[CORRECT]**

   A fresh conversation avoids irrelevant prior task context.

3. Keep the old discussion to maximize history length

   Longer history is not inherently more relevant.

4. Repeat the new request without removing irrelevant context

   Repetition leaves the unrelated context present.

**Concept:** Relevant conversation history

**Authored coaching hints:**

- Think about whether earlier turns help the current goal.
- More context is useful only when it is relevant.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al pasar de una tarea no relacionada a otra nueva en Copilot Chat, ¿qué se recomienda respecto al historial?

1. Sustituir los detalles nuevos por el resumen anterior

   El resumen anterior no describe la nueva tarea.

2. Iniciar un chat nuevo con el contexto de la nueva tarea **[CORRECT]**

   Una conversación nueva evita contexto irrelevante de otra tarea.

3. Mantener la conversación anterior para maximizar el historial

   Un historial más largo no es necesariamente más relevante.

4. Repetir la solicitud sin quitar el contexto irrelevante

   La repetición mantiene presente el contexto no relacionado.

**Concept:** Historial de conversación relevante

**Authored coaching hints:**

- Piensa si los turnos anteriores ayudan al objetivo actual.
- Más contexto solo es útil si es relevante.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao passar de uma tarefa não relacionada para outra nova no Copilot Chat, o que se recomenda sobre o histórico?

1. Substituir os detalhes novos pelo resumo anterior

   O resumo anterior não descreve a nova tarefa.

2. Iniciar um chat novo com o contexto da nova tarefa **[CORRECT]**

   Uma conversa nova evita contexto irrelevante de outra tarefa.

3. Manter a conversa anterior para maximizar o histórico

   Um histórico maior não é necessariamente mais relevante.

4. Repetir a solicitação sem remover o contexto irrelevante

   A repetição mantém presente o contexto não relacionado.

**Concept:** Histórico de conversa relevante

**Authored coaching hints:**

- Pense se as mensagens anteriores ajudam o objetivo atual.
- Mais contexto só é útil quando é relevante.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-150:2c3c412556887ad1ad0afb36c16e714255b503797af3a06f835e595a21493520 -->
## Question 150: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-150`

**Content revision:** `2c3c412556887ad1ad0afb36c16e714255b503797af3a06f835e595a21493520`

**en review revision:** `96757792445e68c52d2242a8efc384727b39bdd8e4157cabade9103abc4f5ed5`
**es review revision:** `55760d0534fad469a2d20a9e886474d25a25f0c66346004b811a14fcbe8b1887`
**pt-BR review revision:** `85e8e40f3e35ae8c7028133b9dee18a11280d973b52d8ebc000ac1909ad2c2b4`

### English

Which action illustrates Surround in the '4 Ss' of prompting for IDE code completions?

1. Provide exactly one input/output example

   One example characterizes one-shot prompting.

2. Remove file context and rely on the task name

   Removing relevant file context works against Surround.

3. Open related files with descriptive names **[CORRECT]**

   Surround concerns useful surrounding context and descriptive names.

4. Put every requirement into one sentence

   Conciseness relates to Short, not Surround.

**Concept:** Surround and editor context

**Authored coaching hints:**

- The principles address different aspects of a request.
- Consider information available around the code being edited.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué acción ilustra Surround en las «4 S» para completados de código en el IDE?

1. Proporcionar exactamente un ejemplo de entrada y salida

   Un ejemplo caracteriza el prompting one-shot.

2. Quitar el contexto de archivos y usar solo el nombre de la tarea

   Quitar contexto relevante contradice Surround.

3. Abrir archivos relacionados con nombres descriptivos **[CORRECT]**

   Surround trata del contexto circundante útil y los nombres descriptivos.

4. Poner todos los requisitos en una sola oración

   La concisión corresponde a Short, no a Surround.

**Concept:** Surround y contexto del editor

**Authored coaching hints:**

- Los principios abordan aspectos distintos de una solicitud.
- Considera la información alrededor del código que se edita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ação ilustra Surround nos '4 Ss' para completamentos de código no IDE?

1. Fornecer exatamente um exemplo de entrada e saída

   Um exemplo caracteriza o prompting one-shot.

2. Remover o contexto de arquivos e usar só o nome da tarefa

   Remover contexto relevante contraria Surround.

3. Abrir arquivos relacionados com nomes descritivos **[CORRECT]**

   Surround trata do contexto ao redor e de nomes descritivos.

4. Colocar todos os requisitos em uma única frase

   Concisão corresponde a Short, não a Surround.

**Concept:** Surround e contexto do editor

**Authored coaching hints:**

- Os princípios abordam aspectos diferentes de uma solicitação.
- Considere as informações ao redor do código em edição.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-151:722ce65fa30e16023a920307c257d673bf694d2e7d7c4585a1be7fc2a1333112 -->
## Question 151: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-151`

**Content revision:** `722ce65fa30e16023a920307c257d673bf694d2e7d7c4585a1be7fc2a1333112`

**en review revision:** `d4679659b4f904c56ae7db78af97e171e2b597dae22987466f39b620ec922a98`
**es review revision:** `49f3c8697e7fec8cd024c6e904cb3af2f7b92fc852108b68cdb57e4403d30742`
**pt-BR review revision:** `b5d5685f65c1a6421d6d5c4127acd7216bfdff13da658233e334991a6883584f`

### English

How can unit tests serve as context in an implementation prompt?

1. Grant access to files outside the repository

   Tests do not change access permissions.

2. Guarantee that the implementation is correct

   Examples do not guarantee that generated code passes or is complete.

3. Set the model's training parameters for the task

   Prompt examples do not configure model training.

4. Show required inputs and outputs **[CORRECT]**

   Tests can demonstrate the behavior the implementation should satisfy.

**Concept:** Tests as behavioral examples

**Authored coaching hints:**

- Distinguish examples of requirements from proof of the result.
- What information does a test communicate before code exists?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo pueden servir las pruebas unitarias como contexto en un prompt de implementación?

1. Conceder acceso a archivos fuera del repositorio

   Las pruebas no cambian permisos de acceso.

2. Garantizar que la implementación sea correcta

   Los ejemplos no garantizan que el código pase ni que sea completo.

3. Fijar parámetros de entrenamiento del modelo para la tarea

   Los ejemplos del prompt no configuran el entrenamiento.

4. Mostrar entradas y salidas requeridas **[CORRECT]**

   Las pruebas pueden demostrar el comportamiento que se debe cumplir.

**Concept:** Pruebas como ejemplos de comportamiento

**Authored coaching hints:**

- Distingue ejemplos de requisitos de pruebas sobre el resultado.
- ¿Qué comunica una prueba antes de que exista el código?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como testes unitários podem servir de contexto em um prompt de implementação?

1. Conceder acesso a arquivos fora do repositório

   Testes não alteram permissões de acesso.

2. Garantir que a implementação esteja correta

   Exemplos não garantem que o código passe nem que esteja completo.

3. Definir parâmetros de treinamento do modelo para a tarefa

   Exemplos no prompt não configuram treinamento.

4. Mostrar entradas e saídas exigidas **[CORRECT]**

   Testes podem demonstrar o comportamento que deve ser atendido.

**Concept:** Testes como exemplos de comportamento

**Authored coaching hints:**

- Diferencie exemplos de requisitos de evidências sobre o resultado.
- O que um teste comunica antes de o código existir?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-152:8fb263f6cbe224c2ca222204ae2fa2d9c874d22f3841a985c7cfb8e85755473f -->
## Question 152: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-152`

**Content revision:** `8fb263f6cbe224c2ca222204ae2fa2d9c874d22f3841a985c7cfb8e85755473f`

**en review revision:** `a2d318a97e8c904a8a07d95057b0234bed44bc58a29b50e593e8f31830da71f0`
**es review revision:** `902a2e1f616cf1cd6befcbb72f6e4ef4f7efa00cf9a29f89fa1ece589c27e03e`
**pt-BR review revision:** `b6ea9c40b494c0f6022c473cf5f941daae70357dd836991c0523fbea4ea6a8ec`

### English

A parser must interpret 06/07 as 6 July. Which prompt detail removes the date ambiguity?

1. Use day/month order; 06/07 means 6 July **[CORRECT]**

   It states the convention and illustrates the required interpretation.

2. Use the most common date format

   The most common format depends on locale.

3. Use the date convention preferred by the model

   A model preference is not a product requirement.

4. Use the same separator in every date

   A consistent separator does not determine field order.

**Concept:** Disambiguating requirements

**Authored coaching hints:**

- Consider which part of the representation admits two interpretations.
- A useful example connects syntax to the intended meaning.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un analizador debe interpretar 06/07 como 6 de julio. ¿Qué detalle elimina la ambigüedad?

1. Usa orden día/mes; 06/07 significa 6 de julio **[CORRECT]**

   Indica la convención e ilustra la interpretación requerida.

2. Usa el formato de fecha más común

   El formato más común depende de la configuración regional.

3. Usa la convención de fechas que prefiera el modelo

   La preferencia del modelo no es un requisito del producto.

4. Usa el mismo separador en todas las fechas

   Un separador uniforme no determina el orden de los campos.

**Concept:** Eliminar ambigüedades en requisitos

**Authored coaching hints:**

- Considera qué parte admite dos interpretaciones.
- Un ejemplo útil conecta la sintaxis con el significado deseado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um analisador deve interpretar 06/07 como 6 de julho. Qual detalhe elimina a ambiguidade?

1. Use ordem dia/mês; 06/07 significa 6 de julho **[CORRECT]**

   Indica a convenção e ilustra a interpretação exigida.

2. Use o formato de data mais comum

   O formato mais comum depende da localidade.

3. Use a convenção de datas preferida pelo modelo

   A preferência do modelo não é um requisito do produto.

4. Use o mesmo separador em todas as datas

   Um separador uniforme não determina a ordem dos campos.

**Concept:** Eliminar ambiguidades nos requisitos

**Authored coaching hints:**

- Considere qual parte admite duas interpretações.
- Um exemplo útil conecta a sintaxe ao significado desejado.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-153:18086b67e80fa1a093901bebee154c9d682fa6ba537218a027fb7854630038d4 -->
## Question 153: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-153`

**Content revision:** `18086b67e80fa1a093901bebee154c9d682fa6ba537218a027fb7854630038d4`

**en review revision:** `7d645a589071fe05a1f28133811aeb1302c367fe583105fac784fc23a10cb606`
**es review revision:** `68aa1cd6caade69644d10a31cb8ca8ea89fe023da4984d56f2b920e174dba0a9`
**pt-BR review revision:** `764a7051a5294af06ee992433d3f452473cd7df3534e999cf67590e9d7a09b9d`

### English

Which detail makes 'improve this function's performance' a more specific request?

1. Replace the implementation with a longer one

   Implementation length is not a performance objective.

2. Lower latency on the supplied benchmark **[CORRECT]**

   It identifies a performance objective and representative workload.

3. Reduce whitespace in the implementation

   Whitespace reduction does not define runtime performance.

4. Adopt the newest dependency release

   A newer dependency alone is not a performance requirement.

**Concept:** Measurable prompt objectives

**Authored coaching hints:**

- Identify the outcome that could be measured.
- Specificity describes success, not just activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué detalle hace más específica la solicitud «mejora el rendimiento de esta función»?

1. Sustituye la implementación por una más larga

   La longitud de la implementación no es un objetivo de rendimiento.

2. Reduce la latencia en el benchmark adjunto **[CORRECT]**

   Identifica un objetivo de rendimiento y una carga representativa.

3. Reduce espacios en la implementación

   Reducir espacios no define el rendimiento de ejecución.

4. Adopta la versión más nueva de la dependencia

   Una dependencia nueva no es por sí sola un requisito de rendimiento.

**Concept:** Objetivos de prompt medibles

**Authored coaching hints:**

- Identifica un resultado que pueda medirse.
- La especificidad describe éxito, no solo actividad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual detalhe torna mais específica a solicitação 'melhore o desempenho desta função'?

1. Substitua a implementação por uma mais longa

   O tamanho da implementação não é um objetivo de desempenho.

2. Reduza a latência no benchmark fornecido **[CORRECT]**

   Identifica um objetivo de desempenho e uma carga representativa.

3. Reduza espaços na implementação

   Reduzir espaços não define desempenho de execução.

4. Adote a versão mais nova da dependência

   Uma dependência nova não é, por si só, um requisito de desempenho.

**Concept:** Objetivos de prompt mensuráveis

**Authored coaching hints:**

- Identifique um resultado que possa ser medido.
- Especificidade descreve sucesso, não apenas atividade.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-154:2cb14034d97fba426609d3980c6a5feaa20fe6437b1a4c966e763573b7634938 -->
## Question 154: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-154`

**Content revision:** `2cb14034d97fba426609d3980c6a5feaa20fe6437b1a4c966e763573b7634938`

**en review revision:** `028075a7b125b0ab57380d594ab0bfcb910488d4614084937bc09cbb976202a6`
**es review revision:** `4c7dc8e2f9e0728ca75b51427840f4fe3dd95406ec7b1ecf028045243e73f180`
**pt-BR review revision:** `f5e949d9ec0c35c7fff921d7f196b2ec1df39bdf653b71bc68d82ce4d8dca73c`

### English

Which instruction best establishes the audience for a code explanation?

1. Explain without specifying the reader's background

   Omitting background leaves the audience unspecified.

2. Explain every file before discussing this function

   Expanding scope does not identify the reader.

3. Explain async code to a Python developer **[CORRECT]**

   It identifies prior knowledge and the topic that needs explanation.

4. Explain using whichever detail level is most common

   A common detail level may not match the reader.

**Concept:** Audience and explanation depth

**Authored coaching hints:**

- Think about what the intended reader already knows.
- Audience information differs from the amount of code supplied.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué instrucción define mejor el público de una explicación de código?

1. Explica sin especificar los conocimientos del lector

   Omitir los conocimientos previos deja el público sin definir.

2. Explica cada archivo antes de hablar de esta función

   Ampliar el alcance no identifica al lector.

3. Explica código asíncrono a quien programa Python **[CORRECT]**

   Identifica conocimientos previos y el tema que requiere explicación.

4. Explica con el nivel de detalle más común

   Un nivel habitual puede no corresponder al lector.

**Concept:** Público y profundidad de explicación

**Authored coaching hints:**

- Piensa en lo que el lector previsto ya conoce.
- La información del público no es la cantidad de código aportado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual instrução define melhor o público de uma explicação de código?

1. Explique sem especificar os conhecimentos do leitor

   Omitir conhecimentos prévios deixa o público indefinido.

2. Explique cada arquivo antes de abordar esta função

   Ampliar o escopo não identifica o leitor.

3. Explique código assíncrono para quem programa em Python **[CORRECT]**

   Identifica conhecimentos prévios e o tema que requer explicação.

4. Explique com o nível de detalhe mais comum

   Um nível habitual pode não corresponder ao leitor.

**Concept:** Público e profundidade da explicação

**Authored coaching hints:**

- Pense no que o leitor pretendido já conhece.
- Informações do público não são a quantidade de código fornecida.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-155:ba1bf86221f249e1e25c14a31c5e3fe21c751cc1d88d8a416275a0ca74d2e914 -->
## Question 155: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-155`

**Content revision:** `ba1bf86221f249e1e25c14a31c5e3fe21c751cc1d88d8a416275a0ca74d2e914`

**en review revision:** `e5329950767f44239361af61d6f64025dbfac529ef9de55c34341a5e3bf9d9a5`
**es review revision:** `722d4f616c39fdbec04dfd06503f77108170dfc84d644f74080c2f07d293b98f`
**pt-BR review revision:** `3492c6c962ac2c451b927129fc9e76729ae19dddbe59b961f1adbef78fefe48c`

### English

Which ordering follows GitHub's guidance for structuring a prompt?

1. List unrelated background before introducing the task

   Unrelated background obscures the goal.

2. Omit the overall goal and provide only filenames

   Filenames alone do not describe the intended outcome.

3. Mix mandatory requirements with optional ideas without labels

   Unlabeled priorities make the requirements harder to interpret.

4. State the overall goal, then the most important requirements **[CORRECT]**

   The guidance recommends a broad goal followed by specific, prioritized requirements.

**Concept:** Organizing prompt requirements

**Authored coaching hints:**

- Distinguish orientation from implementation detail.
- Consider how the reader identifies the task and its priorities.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué orden sigue la guía de GitHub para estructurar un prompt?

1. Dar contexto no relacionado antes de presentar la tarea

   El contexto no relacionado oculta el objetivo.

2. Omitir el objetivo general y dar solo nombres de archivos

   Los nombres de archivos no describen por sí solos el resultado.

3. Mezclar requisitos obligatorios e ideas opcionales sin distinguirlos

   Las prioridades sin identificar dificultan interpretar los requisitos.

4. Indicar el objetivo general y luego los requisitos más importantes **[CORRECT]**

   La guía recomienda un objetivo general seguido de requisitos específicos y priorizados.

**Concept:** Organizar requisitos del prompt

**Authored coaching hints:**

- Distingue orientación de detalles de implementación.
- Considera cómo se identifican la tarea y sus prioridades.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ordem segue a orientação do GitHub para estruturar um prompt?

1. Dar contexto não relacionado antes de apresentar a tarefa

   Contexto não relacionado oculta o objetivo.

2. Omitir o objetivo geral e fornecer apenas nomes de arquivos

   Nomes de arquivos não descrevem sozinhos o resultado.

3. Misturar requisitos obrigatórios e ideias opcionais sem distingui-los

   Prioridades não identificadas dificultam interpretar os requisitos.

4. Indicar o objetivo geral e depois os requisitos mais importantes **[CORRECT]**

   A orientação recomenda um objetivo geral seguido de requisitos específicos e priorizados.

**Concept:** Organizar requisitos do prompt

**Authored coaching hints:**

- Diferencie orientação de detalhes de implementação.
- Considere como a tarefa e suas prioridades são identificadas.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-156:4568d61d315cc4131af296f440c9a13e1291012ce5be60d5a68346261d994d2b -->
## Question 156: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-156`

**Content revision:** `4568d61d315cc4131af296f440c9a13e1291012ce5be60d5a68346261d994d2b`

**en review revision:** `0a7ac6be395b843eeaf2fc08992ab237db29b089706e28583733393bf1b43f92`
**es review revision:** `6fd37b5ee6e2ea67788fcedab4d42c43fcc0e9bfea348e2841e6ffb504db2d2f`
**pt-BR review revision:** `4ee0f0e77b9a31147c52dbdacd41f57d8e3457357232be26985b5f54a5d8db23`

### English

Copilot's response handles successful requests correctly but mishandles timeouts. Which follow-up is most focused?

1. Fix timeout handling; retain success behavior **[CORRECT]**

   It identifies the failed requirement and the behavior to retain.

2. Regenerate everything without referring to the problem

   A complete restart omits useful targeted feedback.

3. Ask for more code without identifying a requirement

   Requesting volume does not explain the defect.

4. Repeat the original prompt without feedback

   Repeating the request does not describe the mismatch.

**Concept:** Targeted iterative prompting

**Authored coaching hints:**

- Feedback should identify what changed and what should stay.
- Which request communicates the observed gap?

<details>
<summary>Español — same answer key and option order</summary>

### Español

La respuesta de Copilot procesa bien los casos exitosos, pero maneja mal los tiempos de espera. ¿Qué seguimiento es más concreto?

1. Corrige tiempos de espera; conserva los casos exitosos **[CORRECT]**

   Identifica el requisito fallido y el comportamiento que se debe conservar.

2. Regenera todo sin mencionar el problema

   Reiniciar todo omite comentarios específicos útiles.

3. Pide más código sin identificar un requisito

   Pedir más cantidad no explica el defecto.

4. Repite el prompt original sin comentarios

   Repetir la solicitud no describe la discrepancia.

**Concept:** Prompting iterativo específico

**Authored coaching hints:**

- Los comentarios deben indicar qué cambiar y qué conservar.
- ¿Qué solicitud comunica la diferencia observada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A resposta do Copilot processa bem os casos de sucesso, mas trata mal os tempos limite. Qual acompanhamento é mais focado?

1. Corrija tempos limite; preserve os casos de sucesso **[CORRECT]**

   Identifica o requisito não atendido e o comportamento a preservar.

2. Gere tudo novamente sem mencionar o problema

   Recomeçar tudo omite comentários específicos úteis.

3. Peça mais código sem identificar um requisito

   Pedir mais quantidade não explica o defeito.

4. Repita o prompt original sem comentários

   Repetir a solicitação não descreve a discrepância.

**Concept:** Prompting iterativo específico

**Authored coaching hints:**

- Os comentários devem indicar o que mudar e o que preservar.
- Qual solicitação comunica a diferença observada?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-157:22488bfeed994a26e9401d30f3b8b6f842b070d7c70d82ad71b207b6d0c54f4d -->
## Question 157: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-157`

**Content revision:** `22488bfeed994a26e9401d30f3b8b6f842b070d7c70d82ad71b207b6d0c54f4d`

**en review revision:** `b954a6cfa2c137ad5cc9790c1491486bfefebd7c99856674efb205cc83d91d2f`
**es review revision:** `1338a60b0940982f9f116cf61408c9717ed26297e03b241666a1e9a9cadc9376`
**pt-BR review revision:** `ce7158acef3a86e4b019360ca9de850888353914c37f6d0cabae32f864bff134`

### English

Which design makes a test-generation prompt reusable across modules?

1. Every repository file included in every request

   Unrelated files add noise without defining the target.

2. Shared criteria with replaceable module context **[CORRECT]**

   Stable guidance and replaceable context support reuse.

3. A permanently embedded module implementation

   Hard-coding one implementation ties the prompt to that module.

4. No test criteria and a newly selected goal each time

   Removing criteria loses consistency rather than enabling useful reuse.

**Concept:** Reusable prompting guidance

**Authored coaching hints:**

- Separate instructions that stay constant from inputs that vary.
- Reusability should retain the task's evaluation criteria.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué diseño permite reutilizar un prompt de generación de pruebas entre módulos?

1. Todos los archivos del repositorio incluidos en cada solicitud

   Los archivos no relacionados añaden ruido sin definir el objetivo.

2. Criterios comunes con contexto de módulo reemplazable **[CORRECT]**

   La guía estable y el contexto reemplazable permiten reutilización.

3. Una implementación de módulo incrustada permanentemente

   Fijar una implementación vincula el prompt a ese módulo.

4. Ningún criterio de prueba y una meta nueva cada vez

   Quitar criterios pierde consistencia, no aporta reutilización útil.

**Concept:** Guía de prompting reutilizable

**Authored coaching hints:**

- Separa las instrucciones constantes de las entradas variables.
- La reutilización debe conservar los criterios de evaluación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual projeto permite reutilizar um prompt de geração de testes entre módulos?

1. Todos os arquivos do repositório incluídos em cada solicitação

   Arquivos não relacionados adicionam ruído sem definir o alvo.

2. Critérios comuns com contexto de módulo substituível **[CORRECT]**

   Orientação estável e contexto substituível permitem reutilização.

3. Uma implementação de módulo incorporada permanentemente

   Fixar uma implementação vincula o prompt àquele módulo.

4. Nenhum critério de teste e uma meta nova a cada vez

   Remover critérios perde consistência, não traz reutilização útil.

**Concept:** Orientação de prompting reutilizável

**Authored coaching hints:**

- Separe instruções constantes de entradas variáveis.
- A reutilização deve preservar os critérios de avaliação.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-158:8e6d97957b00b8853a137fd820324ca819aed118e93696b7f76cf95899b8dfda -->
## Question 158: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-158`

**Content revision:** `8e6d97957b00b8853a137fd820324ca819aed118e93696b7f76cf95899b8dfda`

**en review revision:** `fff03c45a666b6268f154acc74b938a53f216403ff61c5133cda39d17f53f759`
**es review revision:** `8501ca34929aa37c705b28f7bd5f133de68b886016a740ae2a423fc8e4b7f0a0`
**pt-BR review revision:** `8e4b31dc8d9dfe28fa86adf348066d9a53a26d6b7412c1089babf3a0327f2f87`

### English

Which information helps Copilot avoid suggesting an incompatible dependency API?

1. The API signature from the latest preview release

   Preview APIs may not exist in the project's supported release.

2. Usage examples from an unspecified version

   An unspecified version cannot establish API compatibility.

3. The supported version and API constraints **[CORRECT]**

   The actual version and constraints narrow the valid APIs.

4. A tutorial written for a different major release

   Another major release may expose incompatible methods.

**Concept:** Version-specific context

**Authored coaching hints:**

- A method can exist in one release but not another.
- Choose context that defines the project's supported interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué información ayuda a Copilot a evitar una API de dependencia incompatible?

1. La firma de API de la última versión preliminar

   Las API preliminares pueden no existir en la versión admitida.

2. Ejemplos de uso de una versión sin especificar

   Sin especificar la versión no se establece compatibilidad.

3. La versión admitida y las restricciones de la API **[CORRECT]**

   La versión real y las restricciones delimitan las API válidas.

4. Un tutorial de otra versión principal

   Otra versión principal puede exponer métodos incompatibles.

**Concept:** Contexto específico de versión

**Authored coaching hints:**

- Un método puede existir en una versión y no en otra.
- Elige contexto que defina la interfaz admitida por el proyecto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual informação ajuda o Copilot a evitar uma API de dependência incompatível?

1. A assinatura de API da última versão de prévia

   APIs de prévia podem não existir na versão suportada.

2. Exemplos de uso de uma versão não especificada

   Sem especificar a versão não se estabelece compatibilidade.

3. A versão suportada e as restrições da API **[CORRECT]**

   A versão real e as restrições delimitam as APIs válidas.

4. Um tutorial de outra versão principal

   Outra versão principal pode expor métodos incompatíveis.

**Concept:** Contexto específico de versão

**Authored coaching hints:**

- Um método pode existir em uma versão e não em outra.
- Escolha contexto que defina a interface suportada pelo projeto.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-159:f6466ece388c0b49cc98275162c240ec776a69e5efc076d6fbce05f64725667b -->
## Question 159: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-159`

**Content revision:** `f6466ece388c0b49cc98275162c240ec776a69e5efc076d6fbce05f64725667b`

**en review revision:** `b08c877e1044cf05ef25d772035a0d7ca3748eba7d4edd3e8802c80a7a95457f`
**es review revision:** `6ceb73b5e135a8fb6def0590516135a607052ebfcdcab4707daaca4f65e3285a`
**pt-BR review revision:** `84935758210bb2ea32002c96117c96e58712aa7c5d9823a8e4b0ec3940dc905d`

### English

Which context is most relevant when asking Copilot to diagnose a reproducible failure?

1. A list of all contributors to the affected repository

   Contributor metadata does not explain the failing behavior.

2. The repository's full commit history without error details

   Unfocused history omits the evidence needed to reproduce this error.

3. An unrelated successful run from another environment

   An unrelated run does not demonstrate this failure.

4. The error, reproduction, and expected result **[CORRECT]**

   These details describe how to reproduce and recognize the failure.

**Concept:** Debugging prompt evidence

**Authored coaching hints:**

- Separate evidence of the failure from project metadata.
- The assistant needs to compare what happened with what should happen.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué contexto es más relevante al pedir a Copilot que diagnostique un fallo reproducible?

1. Una lista de todos los colaboradores del repositorio

   Los metadatos de colaboradores no explican el comportamiento.

2. Todo el historial de commits sin detalles del error

   El historial sin enfoque omite evidencia para reproducir este error.

3. Una ejecución correcta no relacionada en otro entorno

   Una ejecución no relacionada no demuestra este fallo.

4. El error, la reproducción y el resultado esperado **[CORRECT]**

   Estos detalles permiten reproducir y reconocer el fallo.

**Concept:** Evidencia en prompts de depuración

**Authored coaching hints:**

- Distingue evidencia del fallo de metadatos del proyecto.
- El asistente necesita comparar qué ocurrió con qué debería ocurrir.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual contexto é mais relevante ao pedir ao Copilot que diagnostique uma falha reproduzível?

1. Uma lista de todos os colaboradores do repositório

   Metadados de colaboradores não explicam o comportamento.

2. Todo o histórico de commits sem detalhes do erro

   O histórico sem foco omite evidências para reproduzir este erro.

3. Uma execução correta não relacionada em outro ambiente

   Uma execução não relacionada não demonstra esta falha.

4. O erro, a reprodução e o resultado esperado **[CORRECT]**

   Esses detalhes permitem reproduzir e reconhecer a falha.

**Concept:** Evidências em prompts de depuração

**Authored coaching hints:**

- Diferencie evidências da falha de metadados do projeto.
- O assistente precisa comparar o que ocorreu com o que deveria ocorrer.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-160:a81341f8d923e575d8b278e6c80a9b96db78c531942babbdc000c66ba62b806a -->
## Question 160: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-160`

**Content revision:** `a81341f8d923e575d8b278e6c80a9b96db78c531942babbdc000c66ba62b806a`

**en review revision:** `98392efd11a5464acde03e8cf18d0d653389e1dd8afaf6345d63f77cd2349c74`
**es review revision:** `b8e081f759212e926f8e144d94142524eeea0d73078c8dd568da2dd45dfa39d2`
**pt-BR review revision:** `374a92096689bc849f9ef341171b54d1c1d9f70281d2a4be5508f9c71073f4ec`

### English

In a Copilot prompt, what does intent describe?

1. The outcome the user wants to achieve **[CORRECT]**

   Intent describes the desired goal or outcome.

2. The surrounding source code available to the model

   Surrounding source code is context, not the goal itself.

3. The number of tokens the model can process

   Token capacity is a model limitation, not user intent.

4. The organization's subscription management scope

   Subscription scope is an administrative concept.

**Concept:** Intent versus context

**Authored coaching hints:**

- A request can include both background and a desired result.
- Determine which part answers why the task is being requested.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un prompt de Copilot, ¿qué describe la intención?

1. El resultado que el usuario quiere lograr **[CORRECT]**

   La intención describe el objetivo o resultado deseado.

2. El código fuente circundante disponible para el modelo

   El código circundante es contexto, no el objetivo en sí.

3. La cantidad de tokens que el modelo puede procesar

   La capacidad de tokens es una limitación del modelo, no intención.

4. El alcance de administración de la suscripción

   El alcance de la suscripción es un concepto administrativo.

**Concept:** Intención frente a contexto

**Authored coaching hints:**

- Una solicitud puede incluir antecedentes y un resultado deseado.
- Determina qué parte explica para qué se solicita la tarea.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um prompt do Copilot, o que a intenção descreve?

1. O resultado que o usuário quer alcançar **[CORRECT]**

   A intenção descreve o objetivo ou resultado desejado.

2. O código-fonte ao redor disponível para o modelo

   O código ao redor é contexto, não o objetivo em si.

3. A quantidade de tokens que o modelo pode processar

   A capacidade de tokens é uma limitação do modelo, não intenção.

4. O escopo de administração da assinatura

   O escopo da assinatura é um conceito administrativo.

**Concept:** Intenção versus contexto

**Authored coaching hints:**

- Uma solicitação pode incluir informações prévias e um resultado desejado.
- Determine qual parte explica para que a tarefa é solicitada.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-161:878b8fbc48e12a5c2497b06a542f7da6828c00c7da23ce36dbdf6c67ceef9933 -->
## Question 161: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-161`

**Content revision:** `878b8fbc48e12a5c2497b06a542f7da6828c00c7da23ce36dbdf6c67ceef9933`

**en review revision:** `3290a5bc8a4a6f7da790848c33c31ce476a25a6767b1ec9456671d92602d7176`
**es review revision:** `9c8ad2ae43aae68b1bef2dcd3bbf535d6d3559b95c9bd0bb6cc2e401b3665f26`
**pt-BR review revision:** `8d8b80c080352b737ce0f2daa4fbfc28d896ce56b1ee01a0cc058c5188ab337f`

### English

What is the purpose of asking Copilot to 'act as a performance reviewer'?

1. Replace workload measurements with the assigned role

   The role does not replace empirical measurement.

2. Focus the response on a relevant expert perspective **[CORRECT]**

   Role prompting guides the perspective and focus of the response.

3. Grant the model permission to change production

   A role description does not authorize production changes.

4. Guarantee that every suggested optimization is faster

   An expert persona does not guarantee better performance.

**Concept:** Role prompting

**Authored coaching hints:**

- Separate a requested perspective from authority or proof.
- How can wording influence the focus without changing permissions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Para qué sirve pedir a Copilot que «actúe como revisor de rendimiento»?

1. Sustituir mediciones de carga por el rol asignado

   El rol no sustituye mediciones empíricas.

2. Enfocar la respuesta desde una perspectiva experta relevante **[CORRECT]**

   El prompting de rol orienta la perspectiva y el enfoque.

3. Conceder al modelo permiso para cambiar producción

   Una descripción de rol no autoriza cambios en producción.

4. Garantizar que toda optimización sugerida sea más rápida

   Una identidad experta no garantiza mejoras de rendimiento.

**Concept:** Prompting de rol

**Authored coaching hints:**

- Separa una perspectiva solicitada de autoridad o prueba.
- ¿Cómo influye la redacción en el enfoque sin cambiar permisos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para que serve pedir ao Copilot que 'atue como revisor de desempenho'?

1. Substituir medições de carga pelo papel atribuído

   O papel não substitui medições empíricas.

2. Focar a resposta em uma perspectiva especializada relevante **[CORRECT]**

   O prompting de papel orienta a perspectiva e o foco.

3. Conceder ao modelo permissão para alterar produção

   Uma descrição de papel não autoriza mudanças em produção.

4. Garantir que toda otimização sugerida seja mais rápida

   Uma identidade especializada não garante melhor desempenho.

**Concept:** Prompting de papel

**Authored coaching hints:**

- Separe uma perspectiva solicitada de autoridade ou prova.
- Como a redação influencia o foco sem alterar permissões?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-162:de7ada87a912e3aed34adfcbe98a8a3850f606a288f56bb3f116d3e7389f05c2 -->
## Question 162: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-162`

**Content revision:** `de7ada87a912e3aed34adfcbe98a8a3850f606a288f56bb3f116d3e7389f05c2`

**en review revision:** `c843ae4f27bc6b25b756c3c504d5b512db69ac3588011a31f152379b885621ac`
**es review revision:** `6f6fd3407d239bba61ee217db5ae362c10ec90d155f7715b9e6007432096f995`
**pt-BR review revision:** `539f705d3c5e286f0b74048325db0a9b952cb0bfe8afa786858b0c44fbc50c49`

### English

Several coding patterns exist in a repository. How should a prompt identify the pattern to follow?

1. Ask the model to infer which convention is newest

   Recency inference does not establish the approved convention.

2. Attach unrelated files to increase the amount of context

   More unrelated context does not select an authoritative example.

3. Name an approved reference and its convention **[CORRECT]**

   A specific reference resolves which pattern is intended.

4. Ask for the existing pattern without specifying which one

   The instruction remains ambiguous when patterns conflict.

**Concept:** Authoritative reference examples

**Authored coaching hints:**

- A repository can contain both current and legacy patterns.
- What context resolves conflicting examples?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Hay varios patrones de código en un repositorio. ¿Cómo debe un prompt identificar cuál seguir?

1. Pedir al modelo que deduzca qué convención es más nueva

   Inferir la antigüedad no establece la convención aprobada.

2. Adjuntar archivos no relacionados para aumentar el contexto

   Más contexto no relacionado no selecciona un ejemplo autorizado.

3. Nombrar una referencia aprobada y su convención **[CORRECT]**

   Una referencia concreta resuelve qué patrón se pretende usar.

4. Pedir el patrón existente sin especificar cuál

   La instrucción sigue siendo ambigua si los patrones difieren.

**Concept:** Ejemplos de referencia autorizados

**Authored coaching hints:**

- Un repositorio puede contener patrones actuales y heredados.
- ¿Qué contexto resuelve ejemplos contradictorios?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Há vários padrões de código em um repositório. Como um prompt deve identificar qual seguir?

1. Pedir ao modelo que deduza qual convenção é mais nova

   Inferir a idade não estabelece a convenção aprovada.

2. Anexar arquivos não relacionados para aumentar o contexto

   Mais contexto não relacionado não seleciona um exemplo autorizado.

3. Nomear uma referência aprovada e sua convenção **[CORRECT]**

   Uma referência concreta resolve qual padrão se pretende usar.

4. Pedir o padrão existente sem especificar qual

   A instrução permanece ambígua se os padrões diferirem.

**Concept:** Exemplos de referência autorizados

**Authored coaching hints:**

- Um repositório pode conter padrões atuais e legados.
- Qual contexto resolve exemplos conflitantes?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-163:100c936fdc7bd40ca6ff1ab905d7d7409268db99c6ae7a914188ac83573396c8 -->
## Question 163: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-163`

**Content revision:** `100c936fdc7bd40ca6ff1ab905d7d7409268db99c6ae7a914188ac83573396c8`

**en review revision:** `e121c21433ddf50f5b8c39abb31ce7b5b4635e75e3d88bda3d528110c240771a`
**es review revision:** `121775b0b2b13f21b2f69ec23867733380087d207ad7b96790aef2245ccf5141`
**pt-BR review revision:** `a4d5a176dd7ea13aaa9561be2ab647840812b0b98ffafede0c9b1aa04cb2dbea`

### English

Which prompt requirement best specifies safe sample customer data for a demo?

1. Copy representative customer records from production

   Production records can expose personal information.

2. Retain real addresses but replace the display names

   Real addresses remain personal data despite changed names.

3. Use realistic identities without specifying their source

   Unspecified provenance does not constrain the output to synthetic records.

4. Use fictional records and reserved email domains **[CORRECT]**

   Explicit synthetic-data constraints avoid requesting real customer identities.

**Concept:** Explicit sample-data constraints

**Authored coaching hints:**

- Decide whether the demo needs real identities at all.
- Changing one field may leave other identifying fields intact.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué requisito define mejor datos de clientes seguros para una demostración?

1. Copiar registros representativos de clientes de producción

   Los registros de producción pueden exponer información personal.

2. Conservar direcciones reales pero cambiar nombres visibles

   Las direcciones reales siguen siendo datos personales aunque cambien los nombres.

3. Usar identidades realistas sin especificar su procedencia

   Sin procedencia definida no se exige que los registros sean sintéticos.

4. Usar registros ficticios y dominios de correo reservados **[CORRECT]**

   Las restricciones explícitas de datos sintéticos evitan pedir identidades reales.

**Concept:** Restricciones explícitas para datos de ejemplo

**Authored coaching hints:**

- Decide si la demostración necesita identidades reales.
- Cambiar un campo puede dejar otros campos identificadores intactos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual requisito define melhor dados de clientes seguros para uma demonstração?

1. Copiar registros representativos de clientes de produção

   Registros de produção podem expor informações pessoais.

2. Manter endereços reais mas trocar nomes de exibição

   Endereços reais continuam sendo dados pessoais mesmo com nomes alterados.

3. Usar identidades realistas sem especificar sua origem

   Sem origem definida, não se exige que os registros sejam sintéticos.

4. Usar registros fictícios e domínios de e-mail reservados **[CORRECT]**

   Restrições explícitas de dados sintéticos evitam solicitar identidades reais.

**Concept:** Restrições explícitas para dados de exemplo

**Authored coaching hints:**

- Decida se a demonstração precisa de identidades reais.
- Alterar um campo pode deixar outros campos identificadores intactos.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-164:7eaa7ba50113dad5fe297f4541e1e3c99eaff95ddff4e43a39c90eded7c79711 -->
## Question 164: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-164`

**Content revision:** `7eaa7ba50113dad5fe297f4541e1e3c99eaff95ddff4e43a39c90eded7c79711`

**en review revision:** `beab0e74ee73834a41194c567000e4ab3eda0cc5713424a7eb6d0a8f7d6b4d9a`
**es review revision:** `d77a10e7035f72b55648bdeeb7a77feea53bb58359dfddea08e4a7a98a74241b`
**pt-BR review revision:** `3163bb2784270c926102c4828cfa5c6e78ade53e7963279f0a1b1471d47c2dd7`

### English

Why request a behavior-preserving refactor separately from a new feature?

1. To assess structure and behavior separately **[CORRECT]**

   Separate tasks make the purpose and evaluation of each change clearer.

2. To eliminate the need for regression tests

   Refactoring still requires regression checks.

3. To ensure both requests produce identical code

   Distinct tasks do not require identical implementations.

4. To prevent Copilot from using any repository context

   Task separation does not remove relevant context.

**Concept:** Separating prompt objectives

**Authored coaching hints:**

- Consider how a reviewer attributes a changed behavior.
- Task boundaries can make evaluation more precise.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué pedir una refactorización que conserve el comportamiento por separado de una función nueva?

1. Para evaluar estructura y comportamiento por separado **[CORRECT]**

   Separar tareas aclara el propósito y la evaluación de cada cambio.

2. Para eliminar la necesidad de pruebas de regresión

   La refactorización sigue necesitando comprobaciones de regresión.

3. Para asegurar que ambas solicitudes produzcan código idéntico

   Las tareas distintas no requieren implementaciones idénticas.

4. Para impedir que Copilot use contexto del repositorio

   Separar tareas no elimina el contexto relevante.

**Concept:** Separar objetivos de prompts

**Authored coaching hints:**

- Considera cómo atribuye un revisor un cambio de comportamiento.
- Los límites de tareas pueden precisar la evaluación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que pedir uma refatoração que preserve o comportamento separadamente de uma funcionalidade nova?

1. Para avaliar estrutura e comportamento separadamente **[CORRECT]**

   Separar tarefas esclarece o propósito e a avaliação de cada mudança.

2. Para eliminar a necessidade de testes de regressão

   Refatoração ainda exige verificações de regressão.

3. Para garantir que as duas solicitações produzam código idêntico

   Tarefas distintas não exigem implementações idênticas.

4. Para impedir que o Copilot use contexto do repositório

   Separar tarefas não remove o contexto relevante.

**Concept:** Separar objetivos de prompts

**Authored coaching hints:**

- Considere como um revisor atribui uma mudança de comportamento.
- Limites de tarefas podem tornar a avaliação mais precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-165:664f58fe248cfc06ccabe9649ccd8d1afd86cc91d9375d214a366d2c1c89ffbb -->
## Question 165: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-165`

**Content revision:** `664f58fe248cfc06ccabe9649ccd8d1afd86cc91d9375d214a366d2c1c89ffbb`

**en review revision:** `59f02bde070ed13142b74357abef6b8f1eea253a5a1952706be9f098755ad477`
**es review revision:** `11aec0b326c1d284cbefd8ae031a20588e018f51f45005f86a8f5d5e1c3d5179`
**pt-BR review revision:** `49973982a27e35f2d3bbc9ca78e98646b86bcc8c1f242fa9f6b5955db1b3d3e7`

### English

What makes a set of few-shot examples most useful?

1. A large number of examples unrelated to the requested task

   Irrelevant volume does not demonstrate the target task.

2. Consistent examples of the intended mapping **[CORRECT]**

   Consistent demonstrations communicate a recognizable task pattern.

3. Conflicting labels for identical inputs without explanation

   Unexplained conflicts make the intended pattern ambiguous.

4. Several outputs without their corresponding inputs

   Missing input/output relationships reduce the examples' usefulness.

**Concept:** Quality of few-shot demonstrations

**Authored coaching hints:**

- Examples should clarify the relationship being demonstrated.
- More examples are not helpful when they conflict or miss the task.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué hace más útil un conjunto de ejemplos few-shot?

1. Muchos ejemplos no relacionados con la tarea solicitada

   La cantidad irrelevante no demuestra la tarea objetivo.

2. Ejemplos coherentes de la correspondencia deseada **[CORRECT]**

   Las demostraciones coherentes comunican un patrón reconocible.

3. Etiquetas contradictorias para entradas idénticas sin explicación

   Los conflictos sin explicar vuelven ambiguo el patrón deseado.

4. Varias salidas sin sus entradas correspondientes

   Sin relaciones entre entrada y salida los ejemplos son menos útiles.

**Concept:** Calidad de las demostraciones few-shot

**Authored coaching hints:**

- Los ejemplos deben aclarar la relación que demuestran.
- Más ejemplos no ayudan si se contradicen o no corresponden a la tarea.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que torna mais útil um conjunto de exemplos few-shot?

1. Muitos exemplos não relacionados à tarefa solicitada

   Quantidade irrelevante não demonstra a tarefa-alvo.

2. Exemplos consistentes do mapeamento desejado **[CORRECT]**

   Demonstrações consistentes comunicam um padrão reconhecível.

3. Rótulos conflitantes para entradas idênticas sem explicação

   Conflitos sem explicação tornam o padrão pretendido ambíguo.

4. Várias saídas sem suas entradas correspondentes

   Sem relações entre entrada e saída, os exemplos são menos úteis.

**Concept:** Qualidade das demonstrações few-shot

**Authored coaching hints:**

- Os exemplos devem esclarecer a relação demonstrada.
- Mais exemplos não ajudam se forem conflitantes ou não corresponderem à tarefa.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices>

<!-- certification-coach-question:copilot-166:f88c81b3189fb745f76532c24ac1154a2f15b9ccc1e2bf1ea2c78d7ba9fbd7bc -->
## Question 166: Apply prompt engineering and context crafting

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-166`

**Content revision:** `f88c81b3189fb745f76532c24ac1154a2f15b9ccc1e2bf1ea2c78d7ba9fbd7bc`

**en review revision:** `acc480849baebfc361339ae4a49e4e703e76c24c72f3091c405503c8b2998701`
**es review revision:** `ebb5b9fd194c43bf81bbcac2e9b59b62bc5170cae235c20e4986341efb42d6bc`
**pt-BR review revision:** `947f43494418d470a0ec8953f48850ae1826a69a2081a3feb2e5fe69ee793ccd`

### English

Which statement correctly describes the limits of a well-crafted prompt?

1. It guarantees the model uses only current APIs

   A prompt cannot guarantee current or valid API usage.

2. It makes every repeated response deterministic

   Good wording does not make model generation deterministic.

3. It guides output without proving it correct **[CORRECT]**

   Clear guidance still requires validation of the resulting output.

4. It removes the need to inspect generated code

   GitHub recommends reviewing AI-generated output.

**Concept:** Prompt quality versus output assurance

**Authored coaching hints:**

- Separate helpful guidance from verified evidence.
- Could a precise request still produce a plausible mistake?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación describe correctamente los límites de un prompt bien elaborado?

1. Garantiza que el modelo use solo API actuales

   Un prompt no garantiza API actuales ni válidas.

2. Hace determinista cada respuesta repetida

   La buena redacción no vuelve determinista la generación.

3. Orienta la salida, pero no prueba su corrección **[CORRECT]**

   La guía clara sigue requiriendo validar el resultado.

4. Elimina la necesidad de inspeccionar el código generado

   GitHub recomienda revisar la salida generada por IA.

**Concept:** Calidad del prompt frente a garantías del resultado

**Authored coaching hints:**

- Separa orientación útil de evidencia verificada.
- ¿Podría una solicitud precisa producir un error plausible?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação descreve corretamente os limites de um prompt bem elaborado?

1. Garante que o modelo use apenas APIs atuais

   Um prompt não garante APIs atuais nem válidas.

2. Torna determinística cada resposta repetida

   Boa redação não torna a geração determinística.

3. Orienta a saída, mas não comprova sua correção **[CORRECT]**

   Orientação clara ainda exige validar o resultado.

4. Elimina a necessidade de inspecionar o código gerado

   O GitHub recomenda revisar a saída gerada por IA.

**Concept:** Qualidade do prompt versus garantia do resultado

**Authored coaching hints:**

- Separe orientação útil de evidência verificada.
- Uma solicitação precisa ainda poderia produzir um erro plausível?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering>

<!-- certification-coach-question:copilot-167:ef67d98c1e827ccc7272d0c199b622871787e40e8d29dfc4b0885991197b9107 -->
## Question 167: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-167`

**Content revision:** `ef67d98c1e827ccc7272d0c199b622871787e40e8d29dfc4b0885991197b9107`

**en review revision:** `1eff77e3db6c0db7b5d6bdcf7fe8e62e03ecf9555f24a3739f3f420f10cf3c85`
**es review revision:** `509bc43f35a85ef96a0c3df906cb64a6dd97a50dd0ecf3a42894f8063bab3f7d`
**pt-BR review revision:** `9e8ab917d463d4b5310f5bde7a2251829ede85171735e3cce0c30d39857fd51b`

### English

Which task is an example of boilerplate generation with Copilot?

1. Explaining why an algorithm terminates

   Algorithm explanation is a learning task.

2. Comparing database execution plans

   Execution-plan comparison is performance analysis.

3. Diagnosing an intermittent network timeout

   Timeout diagnosis is debugging.

4. Drafting repeated class structures **[CORRECT]**

   Repeated standard structures are boilerplate.

**Concept:** Boilerplate generation

**Authored coaching hints:**

- Identify work that repeats a known structure.
- Separate repetitive authoring from diagnosis or explanation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tarea es un ejemplo de generación de código repetitivo con Copilot?

1. Explicar por qué termina un algoritmo

   Explicar un algoritmo es una tarea de aprendizaje.

2. Comparar planes de ejecución de bases de datos

   Comparar planes de ejecución es análisis de rendimiento.

3. Diagnosticar un tiempo de espera de red intermitente

   Diagnosticar tiempos de espera es depuración.

4. Redactar estructuras de clases repetidas **[CORRECT]**

   Las estructuras estándar repetidas son código repetitivo.

**Concept:** Generación de código repetitivo

**Authored coaching hints:**

- Identifica el trabajo que repite una estructura conocida.
- Separa la escritura repetitiva del diagnóstico o la explicación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tarefa é um exemplo de geração de código repetitivo com o Copilot?

1. Explicar por que um algoritmo termina

   Explicar um algoritmo é uma tarefa de aprendizado.

2. Comparar planos de execução de bancos de dados

   Comparar planos de execução é análise de desempenho.

3. Diagnosticar um tempo limite de rede intermitente

   Diagnosticar tempos limite é depuração.

4. Criar estruturas de classes repetidas **[CORRECT]**

   Estruturas padrão repetidas são código repetitivo.

**Concept:** Geração de código repetitivo

**Authored coaching hints:**

- Identifique o trabalho que repete uma estrutura conhecida.
- Separe a escrita repetitiva do diagnóstico ou da explicação.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity>

<!-- certification-coach-question:copilot-168:8bb4a25e572facbc95eb0731966c00d709f03f926035b563cb2c07d0274fae74 -->
## Question 168: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-168`

**Content revision:** `8bb4a25e572facbc95eb0731966c00d709f03f926035b563cb2c07d0274fae74`

**en review revision:** `e40888cbe5bc77e9358f781bcde971d28f260761ffc48b0f58e6ffb394b787bb`
**es review revision:** `597d5993745fbf7ce8b2a3576e7006684bc64e4c7c42a7c581b18505a2c289aa`
**pt-BR review revision:** `51a5fb4d1dc830c2020ca90dd0f4134255fb7d679591d087643223a6e5be1ad8`

### English

Which Copilot task directly supports understanding an unfamiliar function without rewriting it?

1. Translate it into a different language

   Translation changes the implementation language.

2. Explain its inputs, control flow, and outputs **[CORRECT]**

   An explanation supports comprehension of existing behavior.

3. Extract its loops into helper methods

   Extraction is a refactoring task.

4. Replace its API calls with newer ones

   API replacement is modernization, not just explanation.

**Concept:** Code explanation

**Authored coaching hints:**

- Distinguish learning what exists from proposing a change.
- Which request leaves the implementation as the subject of analysis?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tarea de Copilot ayuda directamente a entender una función desconocida sin reescribirla?

1. Traducirla a otro lenguaje

   La traducción cambia el lenguaje de implementación.

2. Explicar sus entradas, flujo de control y salidas **[CORRECT]**

   Una explicación ayuda a comprender el comportamiento existente.

3. Extraer sus bucles a métodos auxiliares

   La extracción es una tarea de refactorización.

4. Reemplazar sus llamadas de API por otras más recientes

   Reemplazar APIs es modernización, no solo explicación.

**Concept:** Explicación de código

**Authored coaching hints:**

- Distingue aprender lo que existe de proponer un cambio.
- ¿Qué solicitud mantiene la implementación como objeto de análisis?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tarefa do Copilot ajuda diretamente a entender uma função desconhecida sem reescrevê-la?

1. Traduzi-la para outra linguagem

   A tradução muda a linguagem de implementação.

2. Explicar suas entradas, fluxo de controle e saídas **[CORRECT]**

   Uma explicação ajuda a compreender o comportamento existente.

3. Extrair seus laços para métodos auxiliares

   A extração é uma tarefa de refatoração.

4. Substituir suas chamadas de API por outras mais recentes

   Substituir APIs é modernização, não apenas explicação.

**Concept:** Explicação de código

**Authored coaching hints:**

- Diferencie aprender o que existe de propor uma mudança.
- Qual solicitação mantém a implementação como objeto de análise?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity>

<!-- certification-coach-question:copilot-169:2d8f91ce093c1f63473db19592b615179055b82adf90b32250385f241e28a0c8 -->
## Question 169: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-169`

**Content revision:** `2d8f91ce093c1f63473db19592b615179055b82adf90b32250385f241e28a0c8`

**en review revision:** `76a0d1834c5caa7f7000704aa2251aa759400e56ff8044a848a639684ad84175`
**es review revision:** `3854222c204d728909931fcd9506bfc8f4dab3877e2ec95b8c7a9417f79f72cb`
**pt-BR review revision:** `cbc91c0fe0ca512f6fe39b2833ed5c0fba0d1f223bde04b3f33caeb35a73c148`

### English

What is the goal of a behavior-preserving refactoring?

1. Introduce a new externally visible requirement

   Adding a requirement changes behavior.

2. Improve structure without changing behavior **[CORRECT]**

   Refactoring improves structure without intentionally changing the contract.

3. Change accepted input ranges to simplify implementation

   Changing input acceptance changes behavior.

4. Replace documented outputs with a new response format

   Changing the public format changes the contract.

**Concept:** Refactoring versus behavior change

**Authored coaching hints:**

- Compare the public contract before and after the edit.
- An internal cleanup and a new feature have different goals.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el objetivo de una refactorización que conserva el comportamiento?

1. Introducir un nuevo requisito visible externamente

   Añadir un requisito cambia el comportamiento.

2. Mejorar la estructura sin cambiar el comportamiento **[CORRECT]**

   La refactorización mejora la estructura sin cambiar intencionalmente el contrato.

3. Cambiar los rangos de entrada aceptados para simplificar la implementación

   Cambiar la aceptación de entradas cambia el comportamiento.

4. Reemplazar las salidas documentadas por un formato de respuesta nuevo

   Cambiar el formato público cambia el contrato.

**Concept:** Refactorización frente a cambio de comportamiento

**Authored coaching hints:**

- Compara el contrato público antes y después de la edición.
- Una limpieza interna y una nueva función tienen objetivos distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o objetivo de uma refatoração que preserva o comportamento?

1. Introduzir um novo requisito visível externamente

   Adicionar um requisito muda o comportamento.

2. Melhorar a estrutura sem mudar o comportamento **[CORRECT]**

   A refatoração melhora a estrutura sem mudar intencionalmente o contrato.

3. Mudar os intervalos de entrada aceitos para simplificar a implementação

   Mudar a aceitação de entradas muda o comportamento.

4. Substituir as saídas documentadas por um novo formato de resposta

   Mudar o formato público muda o contrato.

**Concept:** Refatoração versus mudança de comportamento

**Authored coaching hints:**

- Compare o contrato público antes e depois da edição.
- Uma limpeza interna e uma nova função têm objetivos diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/improve-code-readability>

<!-- certification-coach-question:copilot-170:71c98eb05c07adb3077a449490d47d370a027a50b4c3d6256bb893d7190c12a7 -->
## Question 170: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-170`

**Content revision:** `71c98eb05c07adb3077a449490d47d370a027a50b4c3d6256bb893d7190c12a7`

**en review revision:** `274fce4c5b3844a1f1c555fded459623a7424ff72b6936dee05a8adf70b93c5b`
**es review revision:** `0c8075cc5ad07c3a77ddb4fd72e8b640748bd4e4576cd799fd9d530c95d004d4`
**pt-BR review revision:** `15d052b737735cf2068f0c67f95e590a304a0485a04bf482ce25993c67aa7a93`

### English

Which content belongs in a generated function reference?

1. Parameters, returns, and error behavior **[CORRECT]**

   These describe how callers use the function.

2. Only internal variable names and loop counters

   Internal names do not describe the caller's contract.

3. Only a line-by-line description of the syntax

   Syntax descriptions alone omit usage and behavior.

4. Only the commit history of the function's source file

   Change history alone does not explain the current interface.

**Concept:** Function documentation

**Authored coaching hints:**

- Think about what a caller needs to know.
- Distinguish the interface contract from project metadata.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué contenido corresponde a una referencia de función generada?

1. Parámetros, retornos y comportamiento de errores **[CORRECT]**

   Estos describen cómo usan la función sus llamadores.

2. Solo nombres de variables internas y contadores de bucles

   Los nombres internos no describen el contrato para quien llama.

3. Solo una descripción de la sintaxis línea por línea

   Describir sintaxis no basta para explicar uso y comportamiento.

4. Solo el historial de commits del archivo de la función

   El historial de cambios por sí solo no explica la interfaz actual.

**Concept:** Documentación de funciones

**Authored coaching hints:**

- Piensa en lo que necesita saber quien llama a la función.
- Distingue el contrato de la interfaz de los metadatos del proyecto.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual conteúdo pertence a uma referência de função gerada?

1. Parâmetros, retornos e comportamento de erros **[CORRECT]**

   Esses elementos descrevem como os chamadores usam a função.

2. Apenas nomes de variáveis internas e contadores de laços

   Nomes internos não descrevem o contrato para o chamador.

3. Apenas uma descrição da sintaxe linha por linha

   Descrever sintaxe não basta para explicar uso e comportamento.

4. Apenas o histórico de commits do arquivo da função

   O histórico de mudanças por si só não explica a interface atual.

**Concept:** Documentação de funções

**Authored coaching hints:**

- Pense no que quem chama a função precisa saber.
- Diferencie o contrato da interface dos metadados do projeto.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity>

<!-- certification-coach-question:copilot-171:aa830cc066f50b13edcddf44bef60be5cc47336e73d0736c03c4c5fce3d73031 -->
## Question 171: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-171`

**Content revision:** `aa830cc066f50b13edcddf44bef60be5cc47336e73d0736c03c4c5fce3d73031`

**en review revision:** `fc8687d985fcadb1eb845650654783fed3c15686ab1d488ee1b2bf52867a0c3f`
**es review revision:** `5804797b31407707ef2504384b9766415c7e4db6410cf1887ed8b14cedd7696b`
**pt-BR review revision:** `26072d93cafc6fb595e99eadfc920ea6839188113a843b9d3d6db11a6503712c`

### English

A function must return 12 for a specified input. Which JavaScript assertion directly checks that requirement?

1. assert.ok(result)

   Many incorrect values are truthy.

2. assert.notEqual(result, null)

   Non-null does not establish the required value.

3. assert.equal(result, 12) **[CORRECT]**

   This compares the actual value with the required result.

4. assert.equal(typeof result, 'number')

   A numeric type alone does not establish the correct value.

**Concept:** Behavioral assertions

**Authored coaching hints:**

- Distinguish checking a value from checking its presence or type.
- Could an incorrect number satisfy the proposed assertion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una función debe devolver 12 para una entrada específica. ¿Qué aserción de JavaScript comprueba directamente ese requisito?

1. assert.ok(result)

   Muchos valores incorrectos se evalúan como verdaderos.

2. assert.notEqual(result, null)

   No ser nulo no establece el valor requerido.

3. assert.equal(result, 12) **[CORRECT]**

   Esto compara el valor real con el resultado requerido.

4. assert.equal(typeof result, 'number')

   Un tipo numérico por sí solo no establece el valor correcto.

**Concept:** Aserciones de comportamiento

**Authored coaching hints:**

- Distingue comprobar un valor de comprobar su presencia o tipo.
- ¿Podría un número incorrecto satisfacer la aserción propuesta?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma função deve retornar 12 para uma entrada específica. Qual asserção JavaScript verifica diretamente esse requisito?

1. assert.ok(result)

   Muitos valores incorretos são avaliados como verdadeiros.

2. assert.notEqual(result, null)

   Não ser nulo não estabelece o valor exigido.

3. assert.equal(result, 12) **[CORRECT]**

   Isso compara o valor real com o resultado exigido.

4. assert.equal(typeof result, 'number')

   Um tipo numérico por si só não estabelece o valor correto.

**Concept:** Asserções de comportamento

**Authored coaching hints:**

- Diferencie verificar um valor de verificar sua presença ou tipo.
- Um número incorreto poderia satisfazer a asserção proposta?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-172:90dce6385625a41f535fea4ca31c7e76f53cf9b12389f3873ac3c38ae64a938e -->
## Question 172: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-172`

**Content revision:** `90dce6385625a41f535fea4ca31c7e76f53cf9b12389f3873ac3c38ae64a938e`

**en review revision:** `92a779c703d7296fc529bde5c6cabc977e383f2f3c6388fd6bd4e775fa95052d`
**es review revision:** `316f89c0fa499c786478f67e8f49af99614c10f8c014fe9e9861e43533967cdf`
**pt-BR review revision:** `ae6b4b48811dea4459139beccb6bb8a313122b56a18c13d4d6c3183ca6dc8c59`

### English

For an integer field valid from 1 through 100 inclusive, which set tests both valid boundaries and adjacent invalid values?

1. 25, 50, 75, 90

   These values test only the interior.

2. 1, 25, 75, 100

   The boundaries are included, but adjacent invalid values are missing.

3. -100, -50, 150, 200

   These values miss the valid boundaries and their immediate neighbors.

4. 0, 1, 100, 101 **[CORRECT]**

   This set checks both limits and values just outside them.

**Concept:** Boundary-value tests

**Authored coaching hints:**

- Locate both ends of the permitted interval.
- Consider values immediately inside and outside each limit.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para un campo entero válido de 1 a 100 inclusive, ¿qué conjunto prueba ambos límites válidos y los valores inválidos adyacentes?

1. 25, 50, 75, 90

   Estos valores solo prueban el interior.

2. 1, 25, 75, 100

   Incluye los límites, pero faltan valores inválidos adyacentes.

3. -100, -50, 150, 200

   Estos valores omiten los límites válidos y sus vecinos inmediatos.

4. 0, 1, 100, 101 **[CORRECT]**

   Este conjunto comprueba ambos límites y valores justo fuera de ellos.

**Concept:** Pruebas de valores límite

**Authored coaching hints:**

- Localiza ambos extremos del intervalo permitido.
- Considera valores inmediatamente dentro y fuera de cada límite.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para um campo inteiro válido de 1 a 100 inclusive, qual conjunto testa os dois limites válidos e os valores inválidos adjacentes?

1. 25, 50, 75, 90

   Esses valores testam apenas o interior.

2. 1, 25, 75, 100

   Inclui os limites, mas faltam valores inválidos adjacentes.

3. -100, -50, 150, 200

   Esses valores omitem os limites válidos e seus vizinhos imediatos.

4. 0, 1, 100, 101 **[CORRECT]**

   Esse conjunto verifica os dois limites e valores logo fora deles.

**Concept:** Testes de valores-limite

**Authored coaching hints:**

- Localize os dois extremos do intervalo permitido.
- Considere valores imediatamente dentro e fora de cada limite.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/3-generate-unit-tests-chat-view>

<!-- certification-coach-question:copilot-173:e1a4b5bace9b2e603be4055b5c6209d9755746ef10d3083a5de13c102d37eba7 -->
## Question 173: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-173`

**Content revision:** `e1a4b5bace9b2e603be4055b5c6209d9755746ef10d3083a5de13c102d37eba7`

**en review revision:** `6533a53013e5c179d972432d8a97b65ba6e287bb4f6209f0dd4fe9144a34b9fc`
**es review revision:** `34918a547587690750e0e45db4c5b32d47cb2d7cd9ea69da73526e4c5937e008`
**pt-BR review revision:** `63a5e410d7c029c8eab2fa86121328ec3db3e4e419cbb36476464af09e4ba736`

### English

Which generated test is an integration test?

1. A pure function tested with fixed inputs

   A pure function in isolation is a unit-test target.

2. A parser tested with an in-memory string

   Parsing an in-memory string does not require infrastructure integration.

3. A repository adapter tested against a test database **[CORRECT]**

   Using the real adapter with database infrastructure tests their integration.

4. A validator tested with a stubbed collaborator

   A stub supports isolating the unit under test.

**Concept:** Integration versus unit tests

**Authored coaching hints:**

- Look for a real boundary between components or infrastructure.
- Which dependency has not been replaced by an in-process test double?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué prueba generada es una prueba de integración?

1. Una función pura probada con entradas fijas

   Una función pura aislada es un objetivo de pruebas unitarias.

2. Un analizador probado con una cadena en memoria

   Analizar una cadena en memoria no requiere integración con infraestructura.

3. Un adaptador de repositorio probado contra una base de datos de pruebas **[CORRECT]**

   Usar el adaptador real con infraestructura de base de datos prueba su integración.

4. Un validador probado con un colaborador sustituido por un stub

   Un stub ayuda a aislar la unidad bajo prueba.

**Concept:** Pruebas de integración frente a unitarias

**Authored coaching hints:**

- Busca un límite real entre componentes o infraestructura.
- ¿Qué dependencia no ha sido sustituida por un doble de prueba dentro del proceso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual teste gerado é um teste de integração?

1. Uma função pura testada com entradas fixas

   Uma função pura isolada é um alvo de testes de unidade.

2. Um analisador testado com uma string em memória

   Analisar uma string em memória não exige integração com infraestrutura.

3. Um adaptador de repositório testado contra um banco de dados de teste **[CORRECT]**

   Usar o adaptador real com infraestrutura de banco de dados testa sua integração.

4. Um validador testado com um colaborador substituído por um stub

   Um stub ajuda a isolar a unidade sob teste.

**Concept:** Testes de integração versus testes de unidade

**Authored coaching hints:**

- Procure um limite real entre componentes ou infraestrutura.
- Qual dependência não foi substituída por um dublê de teste dentro do processo?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-174:e6adadf4e349d4c4c9a4b61d6afb6e339417f52415e2ea491e05a4e5c7dcd101 -->
## Question 174: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-174`

**Content revision:** `e6adadf4e349d4c4c9a4b61d6afb6e339417f52415e2ea491e05a4e5c7dcd101`

**en review revision:** `68e61b32ca02fa942b9b2b93656e6c5aa0fe9ad66f0e2dabcdd8730eda4385ca`
**es review revision:** `72dc038deee68f959692353ee5e767402c1a0d621b456b9ed1d475b148c451bd`
**pt-BR review revision:** `f154d60a09e0e7aebd94055cba1d45d40a682590b5ed49529a244c9baabce704`

### English

What is the role of a stub in a unit test?

1. Replace a dependency with controlled behavior **[CORRECT]**

   A stub supplies controlled collaborator behavior to isolate the test.

2. Measure execution time under production load

   Timing under load is performance testing.

3. Run the full application through its user interface

   UI-driven full application checks are end-to-end testing.

4. Check third-party package licenses

   License checks are dependency governance.

**Concept:** Stubs and test isolation

**Authored coaching hints:**

- Separate a dependency replacement from a test runner.
- How can a test avoid relying on a remote service's current response?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el papel de un stub en una prueba unitaria?

1. Sustituir una dependencia con comportamiento controlado **[CORRECT]**

   Un stub aporta comportamiento controlado del colaborador para aislar la prueba.

2. Medir tiempo de ejecución bajo carga de producción

   Medir tiempo bajo carga es una prueba de rendimiento.

3. Ejecutar toda la aplicación mediante su interfaz de usuario

   Comprobar toda la aplicación mediante la interfaz es una prueba de extremo a extremo.

4. Comprobar licencias de paquetes de terceros

   Comprobar licencias es gobernanza de dependencias.

**Concept:** Stubs y aislamiento de pruebas

**Authored coaching hints:**

- Separa un reemplazo de dependencia de un ejecutor de pruebas.
- ¿Cómo puede una prueba evitar depender de la respuesta actual de un servicio remoto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o papel de um stub em um teste de unidade?

1. Substituir uma dependência com comportamento controlado **[CORRECT]**

   Um stub fornece comportamento controlado do colaborador para isolar o teste.

2. Medir tempo de execução sob carga de produção

   Medir tempo sob carga é um teste de desempenho.

3. Executar toda a aplicação por sua interface de usuário

   Verificar toda a aplicação pela interface é um teste de ponta a ponta.

4. Verificar licenças de pacotes de terceiros

   Verificar licenças é governança de dependências.

**Concept:** Stubs e isolamento de testes

**Authored coaching hints:**

- Separe uma substituição de dependência de um executor de testes.
- Como um teste pode evitar depender da resposta atual de um serviço remoto?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-175:fa7b5912c65e124f66daef8d39dcb4b8e244f2d6d246bce17e54b92d04e8a89b -->
## Question 175: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-175`

**Content revision:** `fa7b5912c65e124f66daef8d39dcb4b8e244f2d6d246bce17e54b92d04e8a89b`

**en review revision:** `d814ca6ef9bab414dc700922ddb7ed137614a7d0b7501c440c3eb6454993d21d`
**es review revision:** `59443008c1fc6278571c61d9f2d140a9ef7cbbedbf8b08bf4e9c60f5be94319d`
**pt-BR review revision:** `d35ceff5545c246239c5a0a3235f7a75c1d5a47d428a22d1d3683ee56fc30d79`

### English

Which evidence measures whether a Copilot-proposed optimization actually runs faster?

1. A shorter generated explanation

   Explanation length does not measure runtime.

2. Execution timings on comparable workloads **[CORRECT]**

   Comparable execution measurements test the performance claim.

3. A larger number of helper functions

   Function count does not establish speed.

4. A higher suggestion acceptance rate

   Acceptance measures usage, not execution performance.

**Concept:** Measured optimization

**Authored coaching hints:**

- Separate an improvement hypothesis from observed performance.
- What evidence comes from running the alternatives?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué evidencia mide si una optimización propuesta por Copilot realmente se ejecuta más rápido?

1. Una explicación generada más corta

   La longitud de la explicación no mide el tiempo de ejecución.

2. Tiempos de ejecución con cargas comparables **[CORRECT]**

   Las mediciones de ejecución comparables prueban la afirmación de rendimiento.

3. Un mayor número de funciones auxiliares

   El número de funciones no establece la velocidad.

4. Una tasa mayor de aceptación de sugerencias

   La aceptación mide uso, no rendimiento de ejecución.

**Concept:** Optimización medida

**Authored coaching hints:**

- Separa una hipótesis de mejora del rendimiento observado.
- ¿Qué evidencia proviene de ejecutar las alternativas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Que evidência mede se uma otimização proposta pelo Copilot realmente executa mais rápido?

1. Uma explicação gerada mais curta

   O tamanho da explicação não mede o tempo de execução.

2. Tempos de execução com cargas comparáveis **[CORRECT]**

   Medições comparáveis de execução testam a afirmação de desempenho.

3. Um número maior de funções auxiliares

   O número de funções não estabelece a velocidade.

4. Uma taxa maior de aceitação de sugestões

   A aceitação mede uso, não desempenho de execução.

**Concept:** Otimização medida

**Authored coaching hints:**

- Separe uma hipótese de melhoria do desempenho observado.
- Que evidência vem da execução das alternativas?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/refactor-for-optimization>

<!-- certification-coach-question:copilot-176:249f3e334294afb9646b7ebad064500d33e94c7529bcf7e30e39f2c1a2d07f32 -->
## Question 176: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-176`

**Content revision:** `249f3e334294afb9646b7ebad064500d33e94c7529bcf7e30e39f2c1a2d07f32`

**en review revision:** `cdc0aa4bc51a96c6d401f2fbab8e0bfa6a42a5f737bd9818ad9589a96e9a13fb`
**es review revision:** `e21396bfd310572b620a920b839eb4802f2ff4bf85bfe5b0bdedb72539a17e8d`
**pt-BR review revision:** `364af377d03848c5db89ee80ab9968265f3adcbc44c796f6e69f96c4cbb77035`

### English

What should a behavior-equivalent code translation preserve across languages?

1. The original language's keyword spelling

   Keywords differ across languages.

2. The exact number of source lines

   Line count is not a behavioral contract.

3. The original package manager's command syntax

   Tooling may differ in the target language.

4. The required operations and observable results **[CORRECT]**

   The translation should retain intended functionality and outputs.

**Concept:** Cross-language code conversion

**Authored coaching hints:**

- Distinguish syntax from semantics.
- What would a caller observe before and after conversion?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debe conservar entre lenguajes una traducción de código con comportamiento equivalente?

1. La escritura de las palabras clave del lenguaje original

   Las palabras clave difieren entre lenguajes.

2. El número exacto de líneas de código

   El número de líneas no es un contrato de comportamiento.

3. La sintaxis de comandos del gestor de paquetes original

   Las herramientas pueden diferir en el lenguaje de destino.

4. Las operaciones requeridas y los resultados observables **[CORRECT]**

   La traducción debe mantener la funcionalidad y las salidas previstas.

**Concept:** Conversión de código entre lenguajes

**Authored coaching hints:**

- Distingue sintaxis de semántica.
- ¿Qué observaría quien llama al código antes y después de convertirlo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que uma tradução de código com comportamento equivalente deve preservar entre linguagens?

1. A grafia das palavras-chave da linguagem original

   Palavras-chave diferem entre linguagens.

2. O número exato de linhas de código

   O número de linhas não é um contrato de comportamento.

3. A sintaxe dos comandos do gerenciador de pacotes original

   As ferramentas podem diferir na linguagem de destino.

4. As operações exigidas e os resultados observáveis **[CORRECT]**

   A tradução deve manter a funcionalidade e as saídas pretendidas.

**Concept:** Conversão de código entre linguagens

**Authored coaching hints:**

- Diferencie sintaxe de semântica.
- O que quem chama o código observaria antes e depois da conversão?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/translate-code>

<!-- certification-coach-question:copilot-177:7416afd6d34bc61b0dc4dfc748f359eb97054e591c29815689b2a66ab0a32b98 -->
## Question 177: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-177`

**Content revision:** `7416afd6d34bc61b0dc4dfc748f359eb97054e591c29815689b2a66ab0a32b98`

**en review revision:** `7e9fb075012a88f5b8a5f3014d25888a243ceac006470936fb711b144c9bbd7b`
**es review revision:** `2fc67acdf2967c67b9b5872e910967428b3e98a879ff9b65cfb78c4c584da05c`
**pt-BR review revision:** `2b4d83223c8bf6709b46f0b6bcae7eaeebb832e68f92afb171c77c85effe8dc7`

### English

How can in-editor Copilot assistance reduce context switching?

1. By supplying help in the current editor **[CORRECT]**

   In-editor help can reduce interruptions while the developer works.

2. By moving every question to a separate browser session

   Repeatedly leaving the editor adds switching.

3. By hiding the surrounding code during each question

   Hiding relevant code removes useful working context.

4. By replacing code explanations with unrelated tutorials

   Unrelated material does not support the current task.

**Concept:** Reducing context switching

**Authored coaching hints:**

- Consider interruptions to the current development task.
- Which interaction keeps useful help near the work?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puede la asistencia de Copilot en el editor reducir los cambios de contexto?

1. Ofreciendo ayuda en el editor actual **[CORRECT]**

   La ayuda en el editor puede reducir interrupciones durante el trabajo.

2. Trasladando cada pregunta a una sesión de navegador separada

   Salir repetidamente del editor añade cambios de contexto.

3. Ocultando el código circundante durante cada pregunta

   Ocultar código relevante elimina contexto de trabajo útil.

4. Reemplazando explicaciones de código por tutoriales no relacionados

   El material no relacionado no ayuda a la tarea actual.

**Concept:** Reducción de cambios de contexto

**Authored coaching hints:**

- Considera las interrupciones de la tarea de desarrollo actual.
- ¿Qué interacción mantiene la ayuda útil cerca del trabajo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como a assistência do Copilot no editor pode reduzir trocas de contexto?

1. Oferecendo ajuda no editor atual **[CORRECT]**

   A ajuda no editor pode reduzir interrupções durante o trabalho.

2. Transferindo cada pergunta para uma sessão separada do navegador

   Sair repetidamente do editor acrescenta trocas de contexto.

3. Ocultando o código ao redor durante cada pergunta

   Ocultar código relevante remove contexto de trabalho útil.

4. Substituindo explicações de código por tutoriais não relacionados

   Material não relacionado não ajuda na tarefa atual.

**Concept:** Redução de trocas de contexto

**Authored coaching hints:**

- Considere as interrupções da tarefa de desenvolvimento atual.
- Qual interação mantém a ajuda útil perto do trabalho?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity>

<!-- certification-coach-question:copilot-178:252c191b32f795b5619be61329828c7e4bc87305f65100c640a34febda166641 -->
## Question 178: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-178`

**Content revision:** `252c191b32f795b5619be61329828c7e4bc87305f65100c640a34febda166641`

**en review revision:** `c1aaf2070200bfb2fdd512237b31e7504564b5a75a29c6cfa4a2f6236948616c`
**es review revision:** `7f797533fce8f98e2aa9b1ac578b80e357a0391297159f4b5cb2bdfe917c7139`
**pt-BR review revision:** `f73c5ff77526ee4c277c9dd141bf9817cc1b42073ec0b847d07210b636f9497d`

### English

Which Copilot task produces synthetic test data?

1. Summarize the schema's design history

   A history summary is documentation.

2. List the schema's unused indexes

   Index analysis does not create records.

3. Generate schema-valid fictional records **[CORRECT]**

   Fictional constrained records are synthetic data.

4. Explain how the schema's tables relate

   Relationship explanation supports understanding, not data creation.

**Concept:** Synthetic test data

**Authored coaching hints:**

- Distinguish describing a schema from creating examples that satisfy it.
- What would populate a test fixture without using customer records?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tarea de Copilot produce datos sintéticos de prueba?

1. Resumir el historial de diseño del esquema

   Un resumen histórico es documentación.

2. Enumerar los índices no usados del esquema

   El análisis de índices no crea registros.

3. Generar registros ficticios válidos según el esquema **[CORRECT]**

   Los registros ficticios con restricciones son datos sintéticos.

4. Explicar cómo se relacionan las tablas del esquema

   Explicar relaciones ayuda a comprender, no a crear datos.

**Concept:** Datos sintéticos de prueba

**Authored coaching hints:**

- Distingue describir un esquema de crear ejemplos que lo cumplan.
- ¿Qué poblaría un conjunto de prueba sin usar registros de clientes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tarefa do Copilot produz dados sintéticos de teste?

1. Resumir o histórico de design do esquema

   Um resumo histórico é documentação.

2. Listar os índices não usados do esquema

   A análise de índices não cria registros.

3. Gerar registros fictícios válidos pelo esquema **[CORRECT]**

   Registros fictícios com restrições são dados sintéticos.

4. Explicar como as tabelas do esquema se relacionam

   Explicar relações ajuda a compreender, não a criar dados.

**Concept:** Dados sintéticos de teste

**Authored coaching hints:**

- Diferencie descrever um esquema de criar exemplos que o atendam.
- O que preencheria uma massa de teste sem usar registros de clientes?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity>

<!-- certification-coach-question:copilot-179:d06b8cc3259dbcc9fabb1ca206c9a85b41eb0bb84b941015cedf0404a75bcbed -->
## Question 179: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-179`

**Content revision:** `d06b8cc3259dbcc9fabb1ca206c9a85b41eb0bb84b941015cedf0404a75bcbed`

**en review revision:** `e5ff10eb398bf7af6aa3518ab93e287b1a61d2730c4c72390528209f7da022c6`
**es review revision:** `ec51a74b92bc5bad2817f83560d09187a90eab5814c326fafc5583e2754a8ea4`
**pt-BR review revision:** `f149f99bd85a11b9a57e5c4a60746538a9998a654f31f28af27cf60ca76cdcc5`

### English

What should guide Copilot-assisted replacement of a deprecated API?

1. Only the replacement method's similar name

   Similar names can hide different semantics.

2. Only examples written for an unspecified package version

   Unspecified versions can suggest incompatible APIs.

3. Only the number of characters removed

   Character count does not establish migration correctness.

4. Target-version contracts and project requirements **[CORRECT]**

   Version-specific contracts and requirements define a suitable replacement.

**Concept:** Version-aware modernization

**Authored coaching hints:**

- A newer API may differ in errors, defaults, or return types.
- Which evidence describes the version actually being adopted?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debería orientar el reemplazo de una API obsoleta con ayuda de Copilot?

1. Solo la similitud del nombre del método de reemplazo

   Los nombres similares pueden ocultar semánticas distintas.

2. Solo ejemplos escritos para una versión no especificada del paquete

   Las versiones no especificadas pueden sugerir APIs incompatibles.

3. Solo el número de caracteres eliminados

   El número de caracteres no establece la corrección de la migración.

4. Contratos de la versión de destino y requisitos del proyecto **[CORRECT]**

   Los contratos específicos de versión y los requisitos definen un reemplazo adecuado.

**Concept:** Modernización consciente de versiones

**Authored coaching hints:**

- Una API más reciente puede diferir en errores, valores predeterminados o tipos devueltos.
- ¿Qué evidencia describe la versión que realmente se adoptará?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que deve orientar a substituição de uma API obsoleta com ajuda do Copilot?

1. Apenas a semelhança do nome do método substituto

   Nomes semelhantes podem esconder semânticas diferentes.

2. Apenas exemplos escritos para uma versão não especificada do pacote

   Versões não especificadas podem sugerir APIs incompatíveis.

3. Apenas o número de caracteres removidos

   O número de caracteres não estabelece a correção da migração.

4. Contratos da versão de destino e requisitos do projeto **[CORRECT]**

   Contratos específicos da versão e requisitos definem uma substituição adequada.

**Concept:** Modernização sensível a versões

**Authored coaching hints:**

- Uma API mais recente pode diferir em erros, padrões ou tipos retornados.
- Que evidência descreve a versão que será realmente adotada?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-180:2c6c805bc1fee73848e0621c99eecbcb031509374388728a337103d72d917975 -->
## Question 180: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-180`

**Content revision:** `2c6c805bc1fee73848e0621c99eecbcb031509374388728a337103d72d917975`

**en review revision:** `60a3641c9bd4da5c507bd5513822ee87b2785e3da9e340da4bb45468ab82eaae`
**es review revision:** `9f22e8f6c055f3a287c6db0285c9519be3f4b768c4759896776c43f03bef5f51`
**pt-BR review revision:** `8029be9a71481fbff548b71363cb1da6d862ed30e34566a3db92bb745b0d40fb`

### English

Which technique complements Copilot review by examining code for rule-based issues without running the application?

1. Load testing

   Load testing executes workloads.

2. Static analysis **[CORRECT]**

   Static analysis examines code without executing the application.

3. User acceptance testing

   Acceptance testing evaluates behavior against user needs.

4. Runtime profiling

   Runtime profiling observes execution.

**Concept:** Static analysis

**Authored coaching hints:**

- Compare tools that inspect code with tools that observe a running program.
- Which technique does not require an application workload?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué técnica complementa la revisión de Copilot examinando el código en busca de problemas basados en reglas sin ejecutar la aplicación?

1. Pruebas de carga

   Las pruebas de carga ejecutan cargas de trabajo.

2. Análisis estático **[CORRECT]**

   El análisis estático examina código sin ejecutar la aplicación.

3. Pruebas de aceptación de usuarios

   Las pruebas de aceptación evalúan comportamiento frente a necesidades del usuario.

4. Perfilado en tiempo de ejecución

   El perfilado observa la ejecución.

**Concept:** Análisis estático

**Authored coaching hints:**

- Compara herramientas que inspeccionan código con las que observan un programa en ejecución.
- ¿Qué técnica no requiere una carga de trabajo de la aplicación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual técnica complementa a revisão do Copilot examinando o código em busca de problemas baseados em regras sem executar a aplicação?

1. Testes de carga

   Testes de carga executam cargas de trabalho.

2. Análise estática **[CORRECT]**

   A análise estática examina código sem executar a aplicação.

3. Testes de aceitação de usuários

   Testes de aceitação avaliam comportamento em relação às necessidades do usuário.

4. Perfilamento em tempo de execução

   O perfilamento observa a execução.

**Concept:** Análise estática

**Authored coaching hints:**

- Compare ferramentas que inspecionam código com as que observam um programa em execução.
- Qual técnica não exige uma carga de trabalho da aplicação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-181:b7c5c8a98936045a942ca7f44d747ff18b148f4eef5a66a14d8e5e7baf811174 -->
## Question 181: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-181`

**Content revision:** `b7c5c8a98936045a942ca7f44d747ff18b148f4eef5a66a14d8e5e7baf811174`

**en review revision:** `4dd6cc509f3367ac3d77424a7dba68b4eac314ac1295b4386eb5af853ebb9e1c`
**es review revision:** `4a9c94b1484487a5c73f8cbec42ed70d9af4309aab2c7b60cef263e456affaf4`
**pt-BR review revision:** `43a615088c06fa3f2fa02250d8917fbc2902912afbc7a56b542560fae6f483d0`

### English

What does 100% line coverage establish about a generated test suite?

1. Every requirement has a correct assertion

   Coverage does not judge assertion quality.

2. Every possible input has been tested

   Executing lines does not enumerate all inputs.

3. Every measured source line was executed by tests **[CORRECT]**

   Line coverage measures execution of source lines.

4. Every security vulnerability has been excluded

   Coverage does not prove security.

**Concept:** Code coverage limits

**Authored coaching hints:**

- Distinguish executing code from checking its outcomes.
- What does the coverage instrument actually observe?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué establece una cobertura de líneas del 100 % sobre un conjunto de pruebas generado?

1. Cada requisito tiene una aserción correcta

   La cobertura no juzga la calidad de las aserciones.

2. Se ha probado toda entrada posible

   Ejecutar líneas no enumera todas las entradas.

3. Las pruebas ejecutaron cada línea de código medida **[CORRECT]**

   La cobertura de líneas mide la ejecución de líneas de código.

4. Se ha descartado toda vulnerabilidad de seguridad

   La cobertura no demuestra seguridad.

**Concept:** Límites de cobertura de código

**Authored coaching hints:**

- Distingue ejecutar código de comprobar sus resultados.
- ¿Qué observa realmente el instrumento de cobertura?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que uma cobertura de linhas de 100% estabelece sobre uma suíte de testes gerada?

1. Todo requisito tem uma asserção correta

   A cobertura não julga a qualidade das asserções.

2. Toda entrada possível foi testada

   Executar linhas não enumera todas as entradas.

3. Os testes executaram cada linha de código medida **[CORRECT]**

   A cobertura de linhas mede a execução de linhas de código.

4. Toda vulnerabilidade de segurança foi descartada

   A cobertura não comprova segurança.

**Concept:** Limites de cobertura de código

**Authored coaching hints:**

- Diferencie executar código de verificar seus resultados.
- O que o instrumento de cobertura realmente observa?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-182:87678435593a1e56cfa2f5bf631298359f17f3d6071b173c5b2e177aaa498570 -->
## Question 182: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-182`

**Content revision:** `87678435593a1e56cfa2f5bf631298359f17f3d6071b173c5b2e177aaa498570`

**en review revision:** `36f2ab096955e053d6a84424b9b0f92a7c60f9366fc0187b9c446e3e3e296cd5`
**es review revision:** `32f5e3d4d3323dedc926dcb0b456d2e5591037ee837632d4c255278045c89c4f`
**pt-BR review revision:** `d222ba5ce76e7e38aa15a205bb62342e340a137f0cfe900018b3c9f6133257c3`

### English

What is the purpose of a regression test added with a bug fix?

1. Measure how many lines the fix removes

   Patch size does not detect a recurring defect.

2. Detect recurrence of the faulty behavior **[CORRECT]**

   A regression test guards the corrected behavior against later breakage.

3. Document only the patch's implementation steps

   A useful test checks behavior rather than merely describing edits.

4. Replace all tests of neighboring functionality

   One regression test does not replace other coverage.

**Concept:** Regression testing

**Authored coaching hints:**

- Think beyond whether the current patch works once.
- What should happen if a later edit reintroduces the defect?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el propósito de una prueba de regresión añadida con la corrección de un error?

1. Medir cuántas líneas elimina la corrección

   El tamaño del parche no detecta un defecto recurrente.

2. Detectar la reaparición del comportamiento defectuoso **[CORRECT]**

   Una prueba de regresión protege el comportamiento corregido frente a roturas posteriores.

3. Documentar solo los pasos de implementación del parche

   Una prueba útil comprueba comportamiento en vez de solo describir ediciones.

4. Reemplazar todas las pruebas de funcionalidades vecinas

   Una prueba de regresión no reemplaza el resto de la cobertura.

**Concept:** Pruebas de regresión

**Authored coaching hints:**

- Piensa más allá de si el parche actual funciona una vez.
- ¿Qué debería pasar si una edición posterior reintroduce el defecto?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a finalidade de um teste de regressão adicionado com uma correção de bug?

1. Medir quantas linhas a correção remove

   O tamanho do patch não detecta um defeito recorrente.

2. Detectar o retorno do comportamento defeituoso **[CORRECT]**

   Um teste de regressão protege o comportamento corrigido contra falhas posteriores.

3. Documentar apenas as etapas de implementação do patch

   Um teste útil verifica comportamento em vez de apenas descrever edições.

4. Substituir todos os testes de funcionalidades vizinhas

   Um teste de regressão não substitui o restante da cobertura.

**Concept:** Testes de regressão

**Authored coaching hints:**

- Pense além de o patch atual funcionar uma vez.
- O que deve acontecer se uma edição posterior reintroduzir o defeito?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-183:ce4be76adef5d4a227c735d346f447bc06eaac34df87d98a55c6d10938405068 -->
## Question 183: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-183`

**Content revision:** `ce4be76adef5d4a227c735d346f447bc06eaac34df87d98a55c6d10938405068`

**en review revision:** `4acac13954936a284727264c5cbee52995a2aac43d4eab5d62ced73d6a307308`
**es review revision:** `a166f90c63628f554de22edabad384b04d9887a4426fa803b785e0098b9fd7fa`
**pt-BR review revision:** `7df89e28bb9756db6177f50e2f3f1dfc8d93881ce78a0da5eeb8140e36764798`

### English

Which refactoring separates a long function into smaller named operations?

1. Extract method **[CORRECT]**

   Extraction moves a cohesive operation into a separate method.

2. Inline method

   Inlining moves a method's body into its callers.

3. Rename variable

   Renaming improves naming without separating operations.

4. Change signature

   Changing a signature changes parameters or the callable interface.

**Concept:** Extract-method refactoring

**Authored coaching hints:**

- Consider the direction in which code moves.
- Which transformation creates a callable unit from part of a larger body?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué refactorización separa una función larga en operaciones más pequeñas con nombre?

1. Extraer método **[CORRECT]**

   La extracción traslada una operación coherente a un método separado.

2. Insertar método en sus llamadores

   La inserción traslada el cuerpo de un método a sus llamadores.

3. Renombrar variable

   Renombrar mejora el nombre sin separar operaciones.

4. Cambiar firma

   Cambiar una firma cambia parámetros o la interfaz invocable.

**Concept:** Refactorización de extracción de métodos

**Authored coaching hints:**

- Considera la dirección en que se mueve el código.
- ¿Qué transformación crea una unidad invocable a partir de parte de un cuerpo mayor?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual refatoração separa uma função longa em operações menores nomeadas?

1. Extrair método **[CORRECT]**

   A extração move uma operação coesa para um método separado.

2. Inserir método nos chamadores

   A inserção move o corpo de um método para seus chamadores.

3. Renomear variável

   Renomear melhora o nome sem separar operações.

4. Alterar assinatura

   Alterar uma assinatura muda parâmetros ou a interface invocável.

**Concept:** Refatoração de extração de métodos

**Authored coaching hints:**

- Considere a direção em que o código se move.
- Qual transformação cria uma unidade invocável a partir de parte de um corpo maior?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/improve-code-readability>

<!-- certification-coach-question:copilot-184:403d36409d5f7eb6517ac718f44a68a6763f0004007d99804d9bab8562f2e5de -->
## Question 184: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-184`

**Content revision:** `403d36409d5f7eb6517ac718f44a68a6763f0004007d99804d9bab8562f2e5de`

**en review revision:** `f608629cf830bd222c97181b263cd5a21d586e5daf1f700c4a657aabf1ca36b8`
**es review revision:** `a3f8a14269de6aea18385279ac91d10e7b483f7cbf2fc814dc40319ab4e811bd`
**pt-BR review revision:** `783ddf83a162a912c94562e8abb67be927d0dee414a7a7c9798fc34b65c92784`

### English

Which request targets a security review rather than a readability review?

1. Suggest clearer names for the handler's local variables

   Naming focuses on readability.

2. Split the handler into smaller, named functions

   Decomposition focuses on structure and maintainability.

3. Explain the handler's nested conditional branches

   Explaining control flow supports comprehension.

4. Trace untrusted input into sensitive operations **[CORRECT]**

   Tracing trust boundaries can expose injection or validation flaws.

**Concept:** Security-focused code review

**Authored coaching hints:**

- Distinguish understandable code from safe handling of outside data.
- Where can input influence a security-sensitive action?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud se centra en revisar seguridad y no legibilidad?

1. Sugerir nombres más claros para las variables locales del manejador

   La nomenclatura se centra en la legibilidad.

2. Dividir el manejador en funciones más pequeñas con nombre

   La descomposición se centra en estructura y mantenibilidad.

3. Explicar las ramas condicionales anidadas del manejador

   Explicar el flujo de control ayuda a comprender.

4. Rastrear entradas no confiables hasta operaciones sensibles **[CORRECT]**

   Rastrear límites de confianza puede revelar fallos de inyección o validación.

**Concept:** Revisión de código centrada en seguridad

**Authored coaching hints:**

- Distingue código comprensible de manejo seguro de datos externos.
- ¿Dónde puede influir una entrada en una acción sensible para la seguridad?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação se concentra em revisar segurança, e não legibilidade?

1. Sugerir nomes mais claros para as variáveis locais do manipulador

   A nomenclatura se concentra na legibilidade.

2. Dividir o manipulador em funções menores nomeadas

   A decomposição se concentra em estrutura e manutenibilidade.

3. Explicar os ramos condicionais aninhados do manipulador

   Explicar o fluxo de controle ajuda a compreender.

4. Rastrear entradas não confiáveis até operações sensíveis **[CORRECT]**

   Rastrear limites de confiança pode revelar falhas de injeção ou validação.

**Concept:** Revisão de código focada em segurança

**Authored coaching hints:**

- Diferencie código compreensível de tratamento seguro de dados externos.
- Onde uma entrada pode influenciar uma ação sensível à segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-185:d41a81b44d36134818c85f096f89488f80966f9e575fce1a3264e52e1c1cce7b -->
## Question 185: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-185`

**Content revision:** `d41a81b44d36134818c85f096f89488f80966f9e575fce1a3264e52e1c1cce7b`

**en review revision:** `6fb1938b4f88d7939fd95b5652997548e0e3894fab8015460e8b3edd483327e8`
**es review revision:** `76674089c2473444f30f22557ee4541951abc89f7b85bb5aacae1a38fc4f3ca9`
**pt-BR review revision:** `69071887d0038a358cace843d2660a3cee5b18fab237f10c70265221e775e291`

### English

Which tool is designed to locate where a running program spends its time?

1. A code formatter

   Formatting standardizes source layout.

2. A dependency license scanner

   License scanning examines dependency terms.

3. A runtime profiler **[CORRECT]**

   Profiling observes runtime costs and hotspots.

4. A source diff viewer

   Diffs show changes, not measured execution costs.

**Concept:** Runtime profiling

**Authored coaching hints:**

- Separate inspecting source text from observing execution.
- What helps test an assistant's hypothesis about a bottleneck?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué herramienta está diseñada para localizar dónde consume tiempo un programa en ejecución?

1. Un formateador de código

   El formateo estandariza la presentación del código.

2. Un analizador de licencias de dependencias

   El análisis de licencias examina términos de dependencias.

3. Un perfilador en tiempo de ejecución **[CORRECT]**

   El perfilado observa costes de ejecución y puntos críticos.

4. Un visor de diferencias de código

   Los diffs muestran cambios, no costes de ejecución medidos.

**Concept:** Perfilado en tiempo de ejecución

**Authored coaching hints:**

- Separa inspeccionar el texto fuente de observar la ejecución.
- ¿Qué ayuda a comprobar la hipótesis de un asistente sobre un cuello de botella?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ferramenta foi projetada para localizar onde um programa em execução gasta tempo?

1. Um formatador de código

   A formatação padroniza a apresentação do código.

2. Um analisador de licenças de dependências

   A análise de licenças examina termos de dependências.

3. Um perfilador em tempo de execução **[CORRECT]**

   O perfilamento observa custos de execução e pontos críticos.

4. Um visualizador de diferenças de código

   Diffs mostram mudanças, não custos de execução medidos.

**Concept:** Perfilamento em tempo de execução

**Authored coaching hints:**

- Separe inspecionar o texto-fonte de observar a execução.
- O que ajuda a verificar a hipótese de um assistente sobre um gargalo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/refactor-for-optimization>

<!-- certification-coach-question:copilot-186:45901fab24f8aa6e5558a025a71c04572ca8acd0d3c642af9add886efc22191b -->
## Question 186: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-186`

**Content revision:** `45901fab24f8aa6e5558a025a71c04572ca8acd0d3c642af9add886efc22191b`

**en review revision:** `47029d9204a715956fefb94dea46d45bb35f65afde1f78029e2fba49912351a0`
**es review revision:** `ee7c4c331cf24f0fe8f70eeaa230a6e9895feaeac7f99ea600ad5f5fb1225bcb`
**pt-BR review revision:** `cb7150912dd40d5879f6bd9bd4d9d9c36dd80df0aa2b673aa4ee7d8ccb2203c8`

### English

What should generated onboarding instructions be checked against?

1. The number of headings in the draft

   Heading count does not establish accuracy.

2. The repository's setup and workflow **[CORRECT]**

   Repository evidence determines whether the steps are usable.

3. The assistant's confidence about the installation

   Confidence is not verification of the steps.

4. The conventions of an unrelated sample project

   Another project's conventions may not apply.

**Concept:** Onboarding documentation validation

**Authored coaching hints:**

- A plausible setup guide can still describe the wrong project.
- Which evidence establishes that a newcomer can follow the steps?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Con qué se deben contrastar las instrucciones de incorporación generadas?

1. Con el número de encabezados del borrador

   El número de encabezados no establece exactitud.

2. Con la configuración y el flujo del repositorio **[CORRECT]**

   La evidencia del repositorio determina si los pasos son utilizables.

3. Con la confianza del asistente sobre la instalación

   La confianza no verifica los pasos.

4. Con las convenciones de un proyecto de ejemplo no relacionado

   Las convenciones de otro proyecto pueden no ser aplicables.

**Concept:** Validación de documentación de incorporación

**Authored coaching hints:**

- Una guía de configuración plausible puede describir el proyecto equivocado.
- ¿Qué evidencia establece que una persona nueva pueda seguir los pasos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com o que as instruções de integração de novos colaboradores geradas devem ser verificadas?

1. Com o número de títulos do rascunho

   O número de títulos não estabelece exatidão.

2. Com a configuração e o fluxo do repositório **[CORRECT]**

   A evidência do repositório determina se as etapas são utilizáveis.

3. Com a confiança do assistente sobre a instalação

   A confiança não verifica as etapas.

4. Com as convenções de um projeto de exemplo não relacionado

   Convenções de outro projeto podem não se aplicar.

**Concept:** Validação de documentação de integração

**Authored coaching hints:**

- Um guia de configuração plausível ainda pode descrever o projeto errado.
- Que evidência estabelece que uma pessoa nova consegue seguir as etapas?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-187:7526ed7c10d4e13ceeed65d903bec243c9fe0d78c3c62ef679e6c35f5c72cdc7 -->
## Question 187: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-187`

**Content revision:** `7526ed7c10d4e13ceeed65d903bec243c9fe0d78c3c62ef679e6c35f5c72cdc7`

**en review revision:** `620c7ff4ff3938183cdfd73cec28fc55bae1eb7df63e856b4567364d0f77f198`
**es review revision:** `50bde764d2350db8cb012a5f53024660ec69671fb0a055e2e325d65e66114798`
**pt-BR review revision:** `757bca2c84ca9b8418d03ed71cb91185eead6d867531c687f0603763a20e14f2`

### English

A test sometimes checks a result before its background task finishes. Which design addresses this race?

1. Assert immediately after starting the task

   An immediate check preserves the race.

2. Retry the entire suite until it happens to pass

   Repeated suite retries hide rather than correct synchronization.

3. Increase a fixed sleep without observing completion

   A longer arbitrary sleep is still timing-dependent.

4. Wait for completion with a bounded timeout **[CORRECT]**

   An explicit completion condition with a timeout synchronizes the assertion.

**Concept:** Asynchronous test synchronization

**Authored coaching hints:**

- Consider ordering rather than just elapsed time.
- How can the test distinguish completed work from work still in progress?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una prueba a veces comprueba el resultado antes de que termine su tarea en segundo plano. ¿Qué diseño aborda esta condición de carrera?

1. Comprobar inmediatamente después de iniciar la tarea

   Una comprobación inmediata conserva la condición de carrera.

2. Reintentar todo el conjunto hasta que pase por casualidad

   Reintentar el conjunto oculta el problema en vez de corregir la sincronización.

3. Aumentar una pausa fija sin observar la finalización

   Una pausa arbitraria más larga sigue dependiendo del tiempo.

4. Esperar la finalización con un tiempo límite **[CORRECT]**

   Una condición explícita de finalización con tiempo límite sincroniza la aserción.

**Concept:** Sincronización de pruebas asíncronas

**Authored coaching hints:**

- Considera el orden y no solo el tiempo transcurrido.
- ¿Cómo puede la prueba distinguir trabajo terminado de trabajo aún en curso?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um teste às vezes verifica o resultado antes de sua tarefa em segundo plano terminar. Qual design resolve essa condição de corrida?

1. Verificar imediatamente após iniciar a tarefa

   Uma verificação imediata preserva a condição de corrida.

2. Repetir toda a suíte até ela passar por acaso

   Repetir a suíte esconde o problema em vez de corrigir a sincronização.

3. Aumentar uma pausa fixa sem observar a conclusão

   Uma pausa arbitrária maior continua dependendo do tempo.

4. Esperar a conclusão com um tempo limite **[CORRECT]**

   Uma condição explícita de conclusão com tempo limite sincroniza a asserção.

**Concept:** Sincronização de testes assíncronos

**Authored coaching hints:**

- Considere a ordem, não apenas o tempo decorrido.
- Como o teste pode distinguir trabalho concluído de trabalho ainda em andamento?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/debug-errors/diagnose-ci-test-failures>

<!-- certification-coach-question:copilot-188:5bc5804c35d80dedd03595255b14d4bd7207cd1fb94cdbd34bbc4aa4db3ce050 -->
## Question 188: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-188`

**Content revision:** `5bc5804c35d80dedd03595255b14d4bd7207cd1fb94cdbd34bbc4aa4db3ce050`

**en review revision:** `196af2316893fa393a826f53ac66f7f3566b48a8d3d2e82b2818e929cb1344ee`
**es review revision:** `0c1f97676d6f44faab9bce1151fd13f3a495d83b35a147c0424ca2fc0ac64d3c`
**pt-BR review revision:** `8b31673654f75372a0ea2eb14c967d28706615f3c63fc9510e1947c0a19ea98b`

### English

Which sequence is the Arrange-Act-Assert pattern for a generated unit test?

1. Prepare inputs, invoke the behavior, check the result **[CORRECT]**

   Arrange sets up; Act executes; Assert verifies.

2. Invoke the behavior, check the result, prepare inputs

   Setup must precede the invocation.

3. Check the result, prepare inputs, invoke the behavior

   The result is not available before the behavior executes.

4. Prepare inputs, check the result, invoke the behavior

   The assertion belongs after the action.

**Concept:** Arrange-Act-Assert

**Authored coaching hints:**

- Follow when test inputs and outputs become available.
- Keep setup, execution, and verification distinct.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué secuencia corresponde al patrón Arrange-Act-Assert para una prueba unitaria generada?

1. Preparar entradas, invocar el comportamiento, comprobar el resultado **[CORRECT]**

   Arrange prepara; Act ejecuta; Assert verifica.

2. Invocar el comportamiento, comprobar el resultado, preparar entradas

   La preparación debe preceder a la invocación.

3. Comprobar el resultado, preparar entradas, invocar el comportamiento

   El resultado no está disponible antes de ejecutar el comportamiento.

4. Preparar entradas, comprobar el resultado, invocar el comportamiento

   La aserción corresponde después de la acción.

**Concept:** Arrange-Act-Assert

**Authored coaching hints:**

- Sigue el momento en que están disponibles las entradas y salidas de prueba.
- Mantén separadas preparación, ejecución y verificación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual sequência corresponde ao padrão Arrange-Act-Assert para um teste de unidade gerado?

1. Preparar entradas, invocar o comportamento, verificar o resultado **[CORRECT]**

   Arrange prepara; Act executa; Assert verifica.

2. Invocar o comportamento, verificar o resultado, preparar entradas

   A preparação deve preceder a invocação.

3. Verificar o resultado, preparar entradas, invocar o comportamento

   O resultado não está disponível antes de executar o comportamento.

4. Preparar entradas, verificar o resultado, invocar o comportamento

   A asserção vem depois da ação.

**Concept:** Arrange-Act-Assert

**Authored coaching hints:**

- Acompanhe quando as entradas e saídas do teste ficam disponíveis.
- Mantenha preparação, execução e verificação separadas.

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-189:685ce6bb71fb5444f30602c815fe12c67d52249dac7e87ddb972b414f186359a -->
## Question 189: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-189`

**Content revision:** `685ce6bb71fb5444f30602c815fe12c67d52249dac7e87ddb972b414f186359a`

**en review revision:** `b630f411fb4f4fefe56f3a773f20f2a55d9284a83e19edd6c03a7382eb3d6c79`
**es review revision:** `5d5b2375f96dbb979a691ccaa5fc8d368e72ed5813b212e3ec09afe4394f799a`
**pt-BR review revision:** `6f012702b5ed016ac570e369db585950f7ab5fab21e9086b08cccc3e6803c563`

### English

What is the purpose of a Copilot-generated pull request summary?

1. Certify that all changed code is vulnerability-free

   A summary is not a security certification.

2. Help reviewers understand the proposed changes **[CORRECT]**

   A summary communicates changes; it is distinct from code review.

3. Replace the repository's required status checks

   Summarization does not replace required checks.

4. Establish that every requirement has passed testing

   A summary is not test execution evidence.

**Concept:** Pull request summaries

**Authored coaching hints:**

- Separate communication about a change from verification of it.
- What does a reviewer need before inspecting the details?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el propósito de un resumen de pull request generado por Copilot?

1. Certificar que todo el código cambiado está libre de vulnerabilidades

   Un resumen no es una certificación de seguridad.

2. Ayudar a quienes revisan a entender los cambios propuestos **[CORRECT]**

   Un resumen comunica cambios; es distinto de una revisión de código.

3. Reemplazar las comprobaciones de estado requeridas del repositorio

   Resumir no reemplaza las comprobaciones requeridas.

4. Establecer que todos los requisitos superaron las pruebas

   Un resumen no es evidencia de ejecución de pruebas.

**Concept:** Resúmenes de pull requests

**Authored coaching hints:**

- Separa comunicar un cambio de verificarlo.
- ¿Qué necesita quien revisa antes de inspeccionar los detalles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a finalidade de um resumo de pull request gerado pelo Copilot?

1. Certificar que todo o código alterado está livre de vulnerabilidades

   Um resumo não é uma certificação de segurança.

2. Ajudar revisores a entender as mudanças propostas **[CORRECT]**

   Um resumo comunica mudanças; é diferente de uma revisão de código.

3. Substituir as verificações de status exigidas pelo repositório

   Resumir não substitui as verificações exigidas.

4. Estabelecer que todos os requisitos passaram nos testes

   Um resumo não é evidência de execução de testes.

**Concept:** Resumos de pull requests

**Authored coaching hints:**

- Separe comunicar uma mudança de verificá-la.
- Do que um revisor precisa antes de inspecionar os detalhes?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github>

<!-- certification-coach-question:copilot-190:79fddcd8cf23dc646afcf327789a6982676a17ab1523bd04edebce4c5cfc5217 -->
## Question 190: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-190`

**Content revision:** `79fddcd8cf23dc646afcf327789a6982676a17ab1523bd04edebce4c5cfc5217`

**en review revision:** `e133d5aeb57b31742cd7920363105abe99719486a54839ba2870a5edf4b949b9`
**es review revision:** `61c1fc394ea68a635bfca9adc7223aa8f2a18661892224d3e3c5ecf697dc4f66`
**pt-BR review revision:** `4b777fe70e902b475139fd1d50ab7d919b8987d001811757b54c74c21a95daaa`

### English

Which evidence supports adopting a package suggested by Copilot?

1. Its name resembles the requested feature

   Plausible names can refer to nonexistent or malicious packages.

2. The generated import statement has valid syntax

   Valid import syntax does not verify the package.

3. Verified existence, maintenance, and compatible licensing **[CORRECT]**

   Dependency review checks existence, maintenance, provenance, and licensing.

4. The answer repeats the package name several times

   Repetition does not establish trustworthiness.

**Concept:** Suggested dependency verification

**Authored coaching hints:**

- Separate a plausible recommendation from a trustworthy dependency.
- Which facts can be checked independently of the generated answer?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué evidencia respalda adoptar un paquete sugerido por Copilot?

1. Su nombre se parece a la función solicitada

   Los nombres plausibles pueden referirse a paquetes inexistentes o maliciosos.

2. La declaración de importación generada tiene sintaxis válida

   Una importación con sintaxis válida no verifica el paquete.

3. Existencia, mantenimiento y licencia compatible verificados **[CORRECT]**

   La revisión de dependencias comprueba existencia, mantenimiento, procedencia y licencias.

4. La respuesta repite el nombre del paquete varias veces

   La repetición no establece confiabilidad.

**Concept:** Verificación de dependencias sugeridas

**Authored coaching hints:**

- Separa una recomendación plausible de una dependencia confiable.
- ¿Qué hechos pueden comprobarse independientemente de la respuesta generada?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Que evidência respalda adotar um pacote sugerido pelo Copilot?

1. Seu nome se parece com a função solicitada

   Nomes plausíveis podem se referir a pacotes inexistentes ou maliciosos.

2. A instrução de importação gerada tem sintaxe válida

   Uma importação com sintaxe válida não verifica o pacote.

3. Existência, manutenção e licença compatível verificadas **[CORRECT]**

   A revisão de dependências verifica existência, manutenção, procedência e licenças.

4. A resposta repete o nome do pacote várias vezes

   A repetição não estabelece confiabilidade.

**Concept:** Verificação de dependências sugeridas

**Authored coaching hints:**

- Separe uma recomendação plausível de uma dependência confiável.
- Que fatos podem ser verificados independentemente da resposta gerada?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-191:3ee18886cad3c9e976eae5e554440131a1508c422e40819861adec9e99e47357 -->
## Question 191: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-191`

**Content revision:** `3ee18886cad3c9e976eae5e554440131a1508c422e40819861adec9e99e47357`

**en review revision:** `f9c9a23d244167edb9c28ca97077311cd00c45af382cfb383fe076af0efc7eb6`
**es review revision:** `40882f6ba9b4ff64322a556148d9cbd81c36bebe45b341173d40f6c36eecaaf7`
**pt-BR review revision:** `da23851796e553858d158b4a633cdf53d9fbf47c532862eb780feb5a116ee290`

### English

What is a parameterized test?

1. One test body run with multiple input and expected-result sets **[CORRECT]**

   Parameterization reuses test logic across explicit cases.

2. One test that chooses its expected result from the actual output

   Deriving expectations from actual output can conceal defects.

3. One test body that always uses the same fixed input

   A single fixed case is not parameterization.

4. One test that skips assertions when an input changes

   Parameterized cases still require meaningful assertions.

**Concept:** Parameterized tests

**Authored coaching hints:**

- Separate test logic from the table of cases.
- How can several examples share the same verification structure?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué es una prueba parametrizada?

1. Un cuerpo de prueba ejecutado con varios conjuntos de entradas y resultados esperados **[CORRECT]**

   La parametrización reutiliza la lógica de prueba en casos explícitos.

2. Una prueba que elige el resultado esperado a partir de la salida real

   Derivar expectativas de la salida real puede ocultar defectos.

3. Un cuerpo de prueba que siempre usa la misma entrada fija

   Un único caso fijo no es parametrización.

4. Una prueba que omite aserciones cuando cambia una entrada

   Los casos parametrizados siguen necesitando aserciones significativas.

**Concept:** Pruebas parametrizadas

**Authored coaching hints:**

- Separa la lógica de prueba de la tabla de casos.
- ¿Cómo pueden varios ejemplos compartir la misma estructura de verificación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que é um teste parametrizado?

1. Um corpo de teste executado com vários conjuntos de entradas e resultados esperados **[CORRECT]**

   A parametrização reutiliza a lógica de teste em casos explícitos.

2. Um teste que escolhe o resultado esperado a partir da saída real

   Derivar expectativas da saída real pode ocultar defeitos.

3. Um corpo de teste que sempre usa a mesma entrada fixa

   Um único caso fixo não é parametrização.

4. Um teste que ignora asserções quando uma entrada muda

   Casos parametrizados ainda exigem asserções significativas.

**Concept:** Testes parametrizados

**Authored coaching hints:**

- Separe a lógica de teste da tabela de casos.
- Como vários exemplos podem compartilhar a mesma estrutura de verificação?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices>

<!-- certification-coach-question:copilot-192:da551e0590711bb004089a1e79305e77961fad91e6e13e46f0788479c886bc18 -->
## Question 192: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-192`

**Content revision:** `da551e0590711bb004089a1e79305e77961fad91e6e13e46f0788479c886bc18`

**en review revision:** `99fce2227f2b4b23ab879b4d83bec9203f7f3f4d36d15c09912ba09bc5ea4a23`
**es review revision:** `81914e7b47c2ce4313e0d48190aa05397e62e68fbe476cf2a58b65703f2c49e2`
**pt-BR review revision:** `354568c6e28f1a0f134beec5585e7bfe9b1effbcd8106c422ac13fae6174d767`

### English

A generated test copies an implementation's incorrect output as its expected value. What should determine the expected value instead?

1. The implementation's current return statement

   Repeating faulty behavior preserves the defect.

2. The assistant's repeated prediction of the output

   Repeated prediction is not independent validation.

3. The value that makes the existing test pass

   Passing alone does not establish correct behavior.

4. The independently established requirement **[CORRECT]**

   Requirements or authoritative examples define intended behavior.

**Concept:** Independent test expectations

**Authored coaching hints:**

- A test can agree with code while both are wrong.
- Which evidence exists independently of the implementation?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una prueba generada copia una salida incorrecta de la implementación como valor esperado. ¿Qué debería determinar ese valor?

1. La sentencia de retorno actual de la implementación

   Repetir el comportamiento defectuoso conserva el defecto.

2. La predicción repetida de la salida por el asistente

   Una predicción repetida no es validación independiente.

3. El valor que hace pasar la prueba existente

   Pasar por sí solo no establece comportamiento correcto.

4. El requisito establecido de forma independiente **[CORRECT]**

   Los requisitos o ejemplos autorizados definen el comportamiento previsto.

**Concept:** Expectativas de prueba independientes

**Authored coaching hints:**

- Una prueba puede coincidir con el código y ambos estar equivocados.
- ¿Qué evidencia existe independientemente de la implementación?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um teste gerado copia uma saída incorreta da implementação como valor esperado. O que deve determinar esse valor?

1. A instrução de retorno atual da implementação

   Repetir o comportamento defeituoso preserva o defeito.

2. A previsão repetida da saída pelo assistente

   Uma previsão repetida não é validação independente.

3. O valor que faz o teste existente passar

   Passar por si só não estabelece comportamento correto.

4. O requisito estabelecido de forma independente **[CORRECT]**

   Requisitos ou exemplos confiáveis definem o comportamento pretendido.

**Concept:** Expectativas de teste independentes

**Authored coaching hints:**

- Um teste pode concordar com o código e ambos estarem errados.
- Que evidência existe independentemente da implementação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-193:5acaea35d2a040e207747f6d00c821b3d3eb0bb7f671ec538329805bd579dc09 -->
## Question 193: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-193`

**Content revision:** `5acaea35d2a040e207747f6d00c821b3d3eb0bb7f671ec538329805bd579dc09`

**en review revision:** `5391b49e8507f1b92cb88a8c1a64a5bec59101ecf57cc79e600ea392f3eaf6db`
**es review revision:** `9d857a39c658cce9bb0041807e36cf15a108fe6c20bf44dde71b0f1bbf087a1d`
**pt-BR review revision:** `9905e09ce69960b25138b634a5327f16589d4d4cc3319e011826701ddb7c26ca`

### English

Which information is most useful to Copilot when diagnosing a CI-only test failure?

1. Only stack traces from passing workflow runs

   Passing runs alone omit the observed failure.

2. Only the latest formatter configuration

   Formatter settings alone rarely explain CI-only behavior.

3. Logs, code, and environment differences **[CORRECT]**

   Logs, code, and environment differences help explain local-versus-CI behavior.

4. A new expected value copied from the failure output

   Copying faulty output can conceal the defect instead of explaining it.

**Concept:** Evidence-based debugging

**Authored coaching hints:**

- What differs between the passing and failing runs?
- Look for observations that can test a causal explanation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué información es más útil para Copilot al diagnosticar una prueba que falla solo en CI?

1. Solo trazas de pila de ejecuciones exitosas del flujo

   Las ejecuciones exitosas por sí solas omiten el fallo observado.

2. Solo la configuración más reciente del formateador

   Los ajustes del formateador por sí solos rara vez explican comportamiento exclusivo de CI.

3. Registros, código y diferencias de entorno **[CORRECT]**

   Los registros, el código y las diferencias de entorno ayudan a explicar el comportamiento local frente a CI.

4. Un nuevo valor esperado copiado de la salida del fallo

   Copiar la salida defectuosa puede ocultar el defecto en vez de explicarlo.

**Concept:** Depuración basada en evidencia

**Authored coaching hints:**

- ¿Qué difiere entre las ejecuciones exitosas y fallidas?
- Busca observaciones que puedan comprobar una explicación causal.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais informações são mais úteis para o Copilot ao diagnosticar um teste que falha apenas na CI?

1. Apenas rastreamentos de pilha de execuções bem-sucedidas do fluxo

   Execuções bem-sucedidas sozinhas omitem a falha observada.

2. Apenas a configuração mais recente do formatador

   Configurações do formatador sozinhas raramente explicam comportamento exclusivo da CI.

3. Logs, código e diferenças de ambiente **[CORRECT]**

   Logs, código e diferenças de ambiente ajudam a explicar o comportamento local versus CI.

4. Um novo valor esperado copiado da saída da falha

   Copiar a saída defeituosa pode esconder o defeito em vez de explicá-lo.

**Concept:** Depuração baseada em evidências

**Authored coaching hints:**

- O que difere entre as execuções bem-sucedidas e as que falharam?
- Procure observações que possam verificar uma explicação causal.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/copilot-cookbook/debug-errors/diagnose-ci-test-failures>

<!-- certification-coach-question:copilot-194:d071ae181a7d33591aa3e613bfc90ad32b59d1db643e448ad4ac984e40be46d0 -->
## Question 194: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-194`

**Content revision:** `d071ae181a7d33591aa3e613bfc90ad32b59d1db643e448ad4ac984e40be46d0`

**en review revision:** `2dbad964488fa1f06e212e3b1a8cdd0adc8bdfd792aae53cb29d0bbfffd1664a`
**es review revision:** `33a2b9d536d1aeef3d3227ef7eff9f5480d257ae4f08090efcaf17a657aeba0f`
**pt-BR review revision:** `ab96e1dd5a4467a660d79478ac64f981710161f8958b6d9e06011d07069a50f5`

### English

How should a team interpret Copilot suggestion acceptance rate when evaluating productivity?

1. As proof that accepted code contains no defects

   Acceptance does not establish correctness.

2. As one signal alongside outcomes and feedback **[CORRECT]**

   GitHub recommends patterns across metrics plus developer feedback.

3. As a direct measurement of hours saved for every developer

   Acceptance does not directly measure time saved.

4. As proof that higher adoption caused faster delivery

   An association does not establish causation.

**Concept:** Evidence-based productivity metrics

**Authored coaching hints:**

- Separate adoption, quality, and delivery outcomes.
- What can a single activity measure establish, and what can it not?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debe interpretar un equipo la tasa de aceptación de sugerencias de Copilot al evaluar productividad?

1. Como prueba de que el código aceptado no contiene defectos

   La aceptación no establece corrección.

2. Como una señal junto con resultados y comentarios **[CORRECT]**

   GitHub recomienda patrones entre métricas junto con comentarios de desarrolladores.

3. Como una medición directa de horas ahorradas por cada desarrollador

   La aceptación no mide directamente tiempo ahorrado.

4. Como prueba de que una mayor adopción causó entregas más rápidas

   Una asociación no establece causalidad.

**Concept:** Métricas de productividad basadas en evidencia

**Authored coaching hints:**

- Separa adopción, calidad y resultados de entrega.
- ¿Qué puede establecer una sola medida de actividad y qué no?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como uma equipe deve interpretar a taxa de aceitação de sugestões do Copilot ao avaliar produtividade?

1. Como prova de que o código aceito não contém defeitos

   A aceitação não estabelece correção.

2. Como um sinal junto com resultados e feedback **[CORRECT]**

   O GitHub recomenda padrões entre métricas junto com feedback de desenvolvedores.

3. Como uma medição direta de horas economizadas por desenvolvedor

   A aceitação não mede diretamente tempo economizado.

4. Como prova de que maior adoção causou entregas mais rápidas

   Uma associação não estabelece causalidade.

**Concept:** Métricas de produtividade baseadas em evidências

**Authored coaching hints:**

- Separe adoção, qualidade e resultados de entrega.
- O que uma única medida de atividade pode estabelecer e o que não pode?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics>

<!-- certification-coach-question:copilot-195:0afb1c6585c9b756dc8291f4eec93beb315e003ed5911d28b7fed3a3f83d6a83 -->
## Question 195: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-195`

**Content revision:** `0afb1c6585c9b756dc8291f4eec93beb315e003ed5911d28b7fed3a3f83d6a83`

**en review revision:** `2496fe19ae10bc9beaa52648d16c370a07aa4034ba0089ce74e76fc11325b344`
**es review revision:** `2c0eef88913bd7c534d9ac1ce0da1ce5640b16b062bf49c8a94ff4c5b4c0bb44`
**pt-BR review revision:** `864362b944a15d024cf7a24a271280c2b2b8f9f385a067a18bf89bc25798e993`

### English

Which review request targets accessibility of a Copilot-generated form?

1. Check labels and keyboard operation **[CORRECT]**

   Accessible names and keyboard interaction support users with different access needs.

2. Standardize indentation and quote style

   Formatting concerns source consistency, not interaction accessibility.

3. Compare bundle sizes across builds

   Bundle size is a performance concern.

4. Measure database query latency

   Query latency does not establish accessible form interaction.

**Concept:** Accessibility review

**Authored coaching hints:**

- Consider users who do not interact visually or with a mouse.
- Which properties affect operating and understanding the form?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué solicitud de revisión se centra en la accesibilidad de un formulario generado por Copilot?

1. Comprobar etiquetas y uso con teclado **[CORRECT]**

   Los nombres accesibles y la interacción con teclado ayudan a usuarios con distintas necesidades de acceso.

2. Estandarizar sangría y estilo de comillas

   El formato trata de coherencia del código, no de accesibilidad de interacción.

3. Comparar tamaños de paquetes entre compilaciones

   El tamaño del paquete es una cuestión de rendimiento.

4. Medir latencia de consultas a la base de datos

   La latencia de consultas no establece interacción accesible con el formulario.

**Concept:** Revisión de accesibilidad

**Authored coaching hints:**

- Considera usuarios que no interactúan visualmente o con un ratón.
- ¿Qué propiedades afectan a operar y entender el formulario?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual solicitação de revisão se concentra na acessibilidade de um formulário gerado pelo Copilot?

1. Verificar rótulos e operação por teclado **[CORRECT]**

   Nomes acessíveis e interação por teclado ajudam usuários com diferentes necessidades de acesso.

2. Padronizar indentação e estilo de aspas

   A formatação trata de consistência do código, não de acessibilidade de interação.

3. Comparar tamanhos de pacotes entre compilações

   O tamanho do pacote é uma questão de desempenho.

4. Medir latência de consultas ao banco de dados

   A latência de consultas não estabelece interação acessível com o formulário.

**Concept:** Revisão de acessibilidade

**Authored coaching hints:**

- Considere usuários que não interagem visualmente ou com um mouse.
- Quais propriedades afetam operar e entender o formulário?

</details>

**Official supporting source:** <https://github.blog/developer-skills/github/prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/>

<!-- certification-coach-question:copilot-196:f212fd6387085e1b96973fb6c555940087809e86e016cb5ff0d787f7b3b79001 -->
## Question 196: Improve developer productivity with GitHub Copilot

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-196`

**Content revision:** `f212fd6387085e1b96973fb6c555940087809e86e016cb5ff0d787f7b3b79001`

**en review revision:** `303e392cbd0c35c4f969f923cffc9f1e123e7ae022aa05e2a9f085263d1d4079`
**es review revision:** `07f8ee8855f0becdc20942759b84251783f277f8a969653ee494d9c817ce4a18`
**pt-BR review revision:** `a71f89ba0272f0a14f4c99ab02a2c62fc65ff9313d2a6d6adf94ff6e928c16f5`

### English

An agent writes tests but cannot execute them because a service is unavailable. What is the accurate handoff?

1. All new tests passed because their syntax looks valid

   Plausible syntax is not evidence of passing execution.

2. All new tests failed because the service was unavailable

   An unavailable prerequisite is not evidence that each test failed.

3. Execution is unnecessary because the agent generated the tests

   Generated tests still need validation.

4. Tests added; execution blocked by the missing service **[CORRECT]**

   The report separates completed authoring from blocked verification.

**Concept:** Verification status reporting

**Authored coaching hints:**

- Distinguish a blocked check from a passed or failed check.
- What evidence was actually obtained?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un agente escribe pruebas pero no puede ejecutarlas porque un servicio no está disponible. ¿Cuál es la entrega precisa?

1. Todas las pruebas nuevas pasaron porque su sintaxis parece válida

   La sintaxis plausible no es evidencia de una ejecución exitosa.

2. Todas las pruebas nuevas fallaron porque el servicio no estaba disponible

   Un requisito previo no disponible no demuestra que cada prueba falló.

3. No hace falta ejecutarlas porque el agente generó las pruebas

   Las pruebas generadas siguen necesitando validación.

4. Pruebas añadidas; ejecución bloqueada por el servicio ausente **[CORRECT]**

   El informe separa la escritura completada de la verificación bloqueada.

**Concept:** Comunicación del estado de verificación

**Authored coaching hints:**

- Distingue una comprobación bloqueada de una exitosa o fallida.
- ¿Qué evidencia se obtuvo realmente?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um agente escreve testes, mas não consegue executá-los porque um serviço está indisponível. Qual é a entrega precisa?

1. Todos os novos testes passaram porque a sintaxe parece válida

   Sintaxe plausível não é evidência de execução bem-sucedida.

2. Todos os novos testes falharam porque o serviço estava indisponível

   Um pré-requisito indisponível não comprova que cada teste falhou.

3. A execução é desnecessária porque o agente gerou os testes

   Testes gerados ainda precisam de validação.

4. Testes adicionados; execução bloqueada pelo serviço ausente **[CORRECT]**

   O relatório separa a escrita concluída da verificação bloqueada.

**Concept:** Comunicação do status de verificação

**Authored coaching hints:**

- Diferencie uma verificação bloqueada de uma bem-sucedida ou malsucedida.
- Que evidência foi realmente obtida?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/tutorials/review-ai-generated-code>

<!-- certification-coach-question:copilot-197:e3a11ba9648bfed27c14f117b7dee067d69344c7258e2fef4a62d974b593382e -->
## Question 197: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-197`

**Content revision:** `e3a11ba9648bfed27c14f117b7dee067d69344c7258e2fef4a62d974b593382e`

**en review revision:** `77c5e1ccd5fb3cd553fe6b78470e678d4f5b8ddc2a1c84c92427c61e65ea5368`
**es review revision:** `ba16360d48261212ab03a33dfc852c01c7ed5f19a2c4e2b3dfb7af65d7675213`
**pt-BR review revision:** `ec828c0adc33895918ab277a4d5a74cd670da2d56be266095295e318d30dfb81`

### English

Which Copilot CLI experiences support content exclusions in the documented matrix?

1. Inline suggestions and completions only

   Inline suggestions are not applicable to the CLI entry in the matrix.

2. Chat and agent sessions **[CORRECT]**

   The current matrix marks Copilot CLI chat and agent support; it does not guarantee every possible file-access path is covered.

3. Every indirect access, including scripts

   The documentation warns that indirect file access may not be detected.

4. Chat on GitHub.com only

   CLI support is not limited to GitHub.com conversations.

**Concept:** Copilot CLI exclusion support

**Authored coaching hints:**

- Which interaction types does the support matrix list?
- Does support for agent tools imply complete filesystem enforcement?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué experiencias de Copilot CLI admiten exclusiones de contenido según la matriz documentada?

1. Solo sugerencias y finalizaciones en línea

   Las sugerencias en línea no son aplicables a la fila de CLI en la matriz.

2. Sesiones de chat y agente **[CORRECT]**

   La matriz actual indica compatibilidad con chat y agentes de Copilot CLI; no garantiza cubrir todas las vías de acceso a archivos.

3. Todo acceso indirecto, incluidos los scripts

   La documentación advierte que quizá no se detecte el acceso indirecto a archivos.

4. Solo el chat en GitHub.com

   La compatibilidad de CLI no se limita a conversaciones en GitHub.com.

**Concept:** Compatibilidad de exclusión en Copilot CLI

**Authored coaching hints:**

- ¿Qué tipos de interacción enumera la matriz?
- ¿La compatibilidad con herramientas de agente implica controlar todo acceso al sistema de archivos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais experiências do Copilot CLI oferecem suporte a exclusões de conteúdo na matriz documentada?

1. Apenas sugestões e conclusões em linha

   Sugestões em linha não se aplicam à entrada do CLI na matriz.

2. Sessões de chat e agente **[CORRECT]**

   A matriz atual indica suporte a chat e agente no Copilot CLI; não garante cobertura de toda forma de acesso a arquivos.

3. Todo acesso indireto, inclusive scripts

   A documentação alerta que o acesso indireto a arquivos talvez não seja detectado.

4. Somente o chat no GitHub.com

   O suporte do CLI não se limita a conversas no GitHub.com.

**Concept:** Suporte a exclusões no Copilot CLI

**Authored coaching hints:**

- Quais tipos de interação a matriz lista?
- O suporte a ferramentas de agente implica controle completo do sistema de arquivos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-198:ead4bd300f2c26ae1fc9dc0dad0a6ae1e8f4f3c6c3a93b2784bf75c11411243d -->
## Question 198: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-198`

**Content revision:** `ead4bd300f2c26ae1fc9dc0dad0a6ae1e8f4f3c6c3a93b2784bf75c11411243d`

**en review revision:** `cd435b8a6e4366f503fdbcb39b481df17dd65170f29306def17ec9eca6410df5`
**es review revision:** `c5745a9babbe3efb934f50dd8558cd1e44bd51b947c25a4e7f616ea48127a8fa`
**pt-BR review revision:** `9794eca7900432ac810c2379324d5e631ae1d366c63d71455cb50f8c00d9c043`

### English

Why should an administrator check the support matrix before relying on content exclusions in a Copilot surface?

1. Every Copilot surface behaves identically

   Support on one surface does not guarantee identical support elsewhere.

2. Business and Enterprise plans cover every tool

   The plans have documented surface-specific exceptions.

3. Support differs by client and interaction **[CORRECT]**

   The matrix distinguishes supported surfaces and can identify unsupported or inapplicable experiences.

4. Exclusions apply only when chat is off

   Using chat does not universally disable exclusion support.

**Concept:** Surface-specific exclusion support

**Authored coaching hints:**

- Which exact client and interaction are in use?
- Can a safeguard's support vary between inline, chat, and agent use?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué debe consultar una persona administradora la matriz de compatibilidad antes de confiar en exclusiones en una superficie de Copilot?

1. Todas las superficies de Copilot funcionan igual

   La compatibilidad en una superficie no garantiza la misma compatibilidad en otra.

2. Business y Enterprise cubren todas las herramientas

   Los planes tienen excepciones documentadas según la superficie.

3. La compatibilidad varía según el cliente y la interacción **[CORRECT]**

   La matriz distingue superficies compatibles y puede identificar experiencias no compatibles o no aplicables.

4. Las exclusiones solo se aplican si se desactiva el chat

   Usar el chat no desactiva universalmente la compatibilidad con exclusiones.

**Concept:** Compatibilidad de exclusión por superficie

**Authored coaching hints:**

- ¿Qué cliente e interacción se utilizan exactamente?
- ¿La compatibilidad puede variar entre sugerencias en línea, chat y agentes?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que um administrador deve consultar a matriz de suporte antes de confiar em exclusões em uma interface do Copilot?

1. Todas as interfaces do Copilot funcionam da mesma forma

   Suporte em uma interface não garante suporte igual em outra.

2. Business e Enterprise abrangem todas as ferramentas

   Os planos têm exceções documentadas por interface.

3. O suporte varia conforme o cliente e a interação **[CORRECT]**

   A matriz distingue interfaces com suporte e pode identificar experiências sem suporte ou não aplicáveis.

4. As exclusões só se aplicam quando o chat está desativado

   Usar chat não desativa universalmente o suporte a exclusões.

**Concept:** Suporte a exclusões por interface

**Authored coaching hints:**

- Qual cliente e interação estão sendo usados?
- O suporte a uma proteção pode variar entre sugestões em linha, chat e agente?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-199:c122c5754f91a25432c42a30b9721fd61bd96872eaf9d0f82cbaa62fc170cfc6 -->
## Question 199: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-199`

**Content revision:** `c122c5754f91a25432c42a30b9721fd61bd96872eaf9d0f82cbaa62fc170cfc6`

**en review revision:** `5b8bfbfd37cf4b17e108263157ac8d875160115fa3e04b02997f005c284c47c5`
**es review revision:** `faf878dedecc74664f4b730f9472def5364731ca5e30756785ba8b1037715b74`
**pt-BR review revision:** `904c6826b945afd57f1be27a633660a3be0ec56972f6cefa3ec44bd40bd6afae`

### English

What does adding a file to .gitignore establish about Copilot access to that file?

1. Copilot cannot read the file on any surface

   A .gitignore entry is not a universal Copilot access control.

2. The file must be removed from the working tree

   Ignoring a file does not delete it from disk.

3. Encryption alone excludes it from context

   Git ignore does not encrypt file contents.

4. Git ignore is not Copilot policy **[CORRECT]**

   Git ignore controls Git's treatment of untracked files, not Copilot's context access.

**Concept:** Git ignore and Copilot policy

**Authored coaching hints:**

- Which system does .gitignore configure?
- Does omitting a file from Git tracking remove it from the filesystem?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué establece agregar un archivo a .gitignore sobre el acceso de Copilot a ese archivo?

1. Copilot no puede leer el archivo en ninguna superficie

   Una entrada de .gitignore no es un control de acceso universal de Copilot.

2. Hay que quitar el archivo del árbol de trabajo

   Ignorar un archivo no lo elimina del disco.

3. El cifrado por sí solo lo excluye del contexto

   Git ignore no cifra el contenido de los archivos.

4. Git ignore no es una política de Copilot **[CORRECT]**

   Git ignore controla cómo trata Git los archivos no rastreados, no el acceso de Copilot al contexto.

**Concept:** Git ignore y política de Copilot

**Authored coaching hints:**

- ¿Qué sistema configura .gitignore?
- ¿Dejar de rastrear un archivo en Git lo quita del sistema de archivos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que adicionar um arquivo ao .gitignore estabelece sobre o acesso do Copilot a esse arquivo?

1. O Copilot não pode ler o arquivo em nenhuma interface

   Uma entrada no .gitignore não é um controle universal de acesso do Copilot.

2. É necessário remover o arquivo da árvore de trabalho

   Ignorar um arquivo não o remove do disco.

3. Apenas a criptografia o exclui do contexto

   Git ignore não criptografa o conteúdo dos arquivos.

4. Git ignore não é uma política do Copilot **[CORRECT]**

   Git ignore controla como o Git trata arquivos não rastreados, não o acesso do Copilot ao contexto.

**Concept:** Git ignore e política do Copilot

**Authored coaching hints:**

- Qual sistema o .gitignore configura?
- Deixar de rastrear um arquivo no Git o remove do sistema de arquivos?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-200:35a077fdd6be2a5a2a40a72aff6612ecd2f33412fa5ec2e07c40dadc7417d452 -->
## Question 200: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-200`

**Content revision:** `35a077fdd6be2a5a2a40a72aff6612ecd2f33412fa5ec2e07c40dadc7417d452`

**en review revision:** `2e02647ba12f6e4ee1e5d2fef308e91f30783bad9e7cee87d289812a541d158d`
**es review revision:** `3fbfb053e568ff5b79ba3d65e07c6e2276bc122304cf44532b04b2b582032fd8`
**pt-BR review revision:** `abb4ff093f98511d9d06b8776c8d689be56acd3a7b945d6f9f4f47dcf3db344a`

### English

In GitHub.com's English interface, which route opens content exclusion for a single repository?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   This repository path opens the repository's Copilot content-exclusion settings.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Models

   The organization path and Models setting target different scopes and features.

3. Repository -&gt; Settings -&gt; Actions -&gt; General

   Actions settings configure workflow behavior, not Copilot exclusions.

4. Personal settings -&gt; Developer settings -&gt; Tokens

   Token settings manage credentials rather than content paths.

**Concept:** Repository exclusion navigation

**Authored coaching hints:**

- Is the policy for one repository or an organization?
- Which settings area governs Copilot's access to repository content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la interfaz en inglés de GitHub.com, ¿qué ruta abre la exclusión de contenido de un solo repositorio?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   Esta ruta del repositorio abre sus ajustes de exclusión de contenido de Copilot.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Models

   La ruta de organización y Models corresponden a otros ámbitos y funciones.

3. Repository -&gt; Settings -&gt; Actions -&gt; General

   Actions configura flujos de trabajo, no exclusiones de Copilot.

4. Personal settings -&gt; Developer settings -&gt; Tokens

   Tokens administra credenciales, no rutas de contenido.

**Concept:** Navegación de exclusión del repositorio

**Authored coaching hints:**

- ¿La política es para un repositorio o para una organización?
- ¿Qué área de ajustes controla el acceso de Copilot al contenido del repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na interface em inglês do GitHub.com, qual caminho abre a exclusão de conteúdo de um único repositório?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   Esse caminho do repositório abre suas configurações de exclusão de conteúdo do Copilot.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Models

   O caminho da organização e Models tratam de outros escopos e recursos.

3. Repository -&gt; Settings -&gt; Actions -&gt; General

   Actions configura fluxos de trabalho, não exclusões do Copilot.

4. Personal settings -&gt; Developer settings -&gt; Tokens

   Tokens gerencia credenciais, não caminhos de conteúdo.

**Concept:** Navegação de exclusão do repositório

**Authored coaching hints:**

- A política é para um repositório ou para uma organização?
- Qual área de configurações controla o acesso do Copilot ao conteúdo do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-201:265e9688f7f146f2d183b949c5da251ec767955db2e01eaa85b82cd986602e20 -->
## Question 201: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-201`

**Content revision:** `265e9688f7f146f2d183b949c5da251ec767955db2e01eaa85b82cd986602e20`

**en review revision:** `8e4456c29b99bf0a9c4dbab37364672502570250a57a7e84c85c620b614a52c0`
**es review revision:** `e93d44a9e4f391bf5b278d468dcf5237d1486fbefc89e69503a0619490cf4bd6`
**pt-BR review revision:** `fa16d03b67856c73f16b9aaeaa0582126e45fab9a036e0a577d1f5c0f3450ce8`

### English

An organization owner configures exclusions for users assigned Copilot seats by that organization. Which English-interface route is documented?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion

   This route configures one repository rather than the organization's seat holders.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   This is the organization-level content-exclusion location.

3. Personal settings -&gt; Copilot -&gt; Content exclusion

   Personal settings do not configure an organization's managed exclusions.

4. Organization -&gt; Settings -&gt; Actions -&gt; General

   Actions settings do not configure Copilot content exclusions.

**Concept:** Organization exclusion navigation

**Authored coaching hints:**

- Which scope matches users assigned seats by this organization?
- Is the setting in Copilot or Actions administration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona propietaria de una organización configura exclusiones para usuarios con licencias de Copilot asignadas por esa organización. ¿Qué ruta de la interfaz en inglés está documentada?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion

   Esta ruta configura un repositorio, no a las personas con licencias de la organización.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   Esta es la ubicación de exclusión de contenido a nivel de organización.

3. Personal settings -&gt; Copilot -&gt; Content exclusion

   Los ajustes personales no configuran exclusiones administradas por una organización.

4. Organization -&gt; Settings -&gt; Actions -&gt; General

   Actions no configura exclusiones de contenido de Copilot.

**Concept:** Navegación de exclusión de organización

**Authored coaching hints:**

- ¿Qué ámbito corresponde a las personas con licencias asignadas por esta organización?
- ¿El ajuste está en administración de Copilot o de Actions?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa proprietária da organização configura exclusões para usuários que receberam licenças do Copilot por essa organização. Qual caminho da interface em inglês está documentado?

1. Repository -&gt; Settings -&gt; Copilot -&gt; Content exclusion

   Esse caminho configura um repositório, não os usuários licenciados pela organização.

2. Organization -&gt; Settings -&gt; Copilot -&gt; Content exclusion **[CORRECT]**

   Esse é o local de exclusão de conteúdo no nível da organização.

3. Personal settings -&gt; Copilot -&gt; Content exclusion

   Configurações pessoais não configuram exclusões gerenciadas por uma organização.

4. Organization -&gt; Settings -&gt; Actions -&gt; General

   Actions não configura exclusões de conteúdo do Copilot.

**Concept:** Navegação de exclusão da organização

**Authored coaching hints:**

- Qual escopo corresponde aos usuários licenciados por esta organização?
- A configuração fica na administração do Copilot ou do Actions?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-202:c60637ff3ed0b6d5414dd8e006b618c22d6d0326915b244de6fd708dacbc6516 -->
## Question 202: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-202`

**Content revision:** `c60637ff3ed0b6d5414dd8e006b618c22d6d0326915b244de6fd708dacbc6516`

**en review revision:** `35acf4aa63bf8234bf33665ef31a5f4016ec8f83e0a3137a901175f3ba3c464a`
**es review revision:** `2d94d0a78cb2ef2292d1ad62d97551b11bdfa578c81dfc6e37b78ca8d604e226`
**pt-BR review revision:** `c653fdf03ef988315571dcdef1044fc0516eb8dcbd40b5e90a41acebcf3ac6f1`

### English

Which repository exclusion pattern matches files in or below the /scripts directory?

1. "/scripts/\*"

   A single-star pattern is not the documented recursive subtree example.

2. "scripts.md"

   This names a file rather than the directory tree.

3. "/scripts/\*\*" **[CORRECT]**

   The documented recursive pattern covers files in or below /scripts.

4. "/script/"

   This names a different path and does not specify descendants.

**Concept:** Recursive path patterns

**Authored coaching hints:**

- Does the rule need to include nested directories?
- Which documented pattern uses a recursive wildcard?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué patrón de exclusión de repositorio coincide con los archivos dentro de /scripts o en sus subdirectorios?

1. "/scripts/\*"

   El patrón con un solo asterisco no es el ejemplo documentado para todo el árbol.

2. "scripts.md"

   Esto nombra un archivo, no el árbol de directorios.

3. "/scripts/\*\*" **[CORRECT]**

   El patrón recursivo documentado cubre archivos dentro de /scripts y sus subdirectorios.

4. "/script/"

   Esto nombra otra ruta y no especifica descendientes.

**Concept:** Patrones recursivos de rutas

**Authored coaching hints:**

- ¿La regla debe incluir directorios anidados?
- ¿Qué patrón documentado usa un comodín recursivo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual padrão de exclusão do repositório corresponde a arquivos dentro de /scripts ou abaixo desse diretório?

1. "/scripts/\*"

   O padrão com um único asterisco não é o exemplo documentado para toda a árvore.

2. "scripts.md"

   Isto nomeia um arquivo, não a árvore de diretórios.

3. "/scripts/\*\*" **[CORRECT]**

   O padrão recursivo documentado cobre arquivos em /scripts e abaixo dele.

4. "/script/"

   Isto nomeia outro caminho e não especifica descendentes.

**Concept:** Padrões recursivos de caminhos

**Authored coaching hints:**

- A regra precisa incluir diretórios aninhados?
- Qual padrão documentado usa um curinga recursivo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-203:608df5577998bbc5a6e9500d954f1416b22e18b3a930ad89a3d9f19a67f69d2d -->
## Question 203: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-203`

**Content revision:** `608df5577998bbc5a6e9500d954f1416b22e18b3a930ad89a3d9f19a67f69d2d`

**en review revision:** `3dd4770de19f5d0ac92d731c4643ed16c3c8f9ce901e949f9137b0a7b7afbe8c`
**es review revision:** `ee7c8791fc00564f103aa04b2b88c6e5d9a121f5c499adf402d718aabfaf822d`
**pt-BR review revision:** `d70961a30ba7d26cc9d63350f76c08ee04bad4cee7c6315fd220e3d193150fb0`

### English

An organization owner needs to exclude matching files in Git repositories and elsewhere on the file system for organization-assigned users. Which scope is required?

1. A rule in one repository's settings

   A repository rule does not cover files outside that repository.

2. A local .gitignore entry in each checkout

   .gitignore affects Git tracking and is not an organization Copilot rule.

3. A personal editor preference

   A personal editor preference does not configure organization-managed exclusions.

4. An organization-level exclusion rule **[CORRECT]**

   Organization exclusions can cover relevant Git and non-Git file-system locations for that managed user scope.

**Concept:** Organization-wide exclusion scope

**Authored coaching hints:**

- Does the requirement include files outside Git repositories?
- Which administrative scope can cover the organization's assigned users?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona propietaria de una organización necesita excluir archivos coincidentes en repositorios Git y en otras ubicaciones del sistema de archivos para usuarios con licencias de la organización. ¿Qué ámbito se requiere?

1. Una regla en los ajustes de un repositorio

   Una regla de repositorio no cubre archivos fuera de ese repositorio.

2. Una entrada local en .gitignore para cada clon

   .gitignore afecta el seguimiento de Git y no es una regla organizativa de Copilot.

3. Una preferencia personal del editor

   Una preferencia personal no configura exclusiones administradas por la organización.

4. Una regla de exclusión a nivel de organización **[CORRECT]**

   Las exclusiones de organización pueden abarcar ubicaciones pertinentes con y sin Git para ese ámbito de usuarios administrados.

**Concept:** Ámbito de exclusión de organización

**Authored coaching hints:**

- ¿El requisito incluye archivos fuera de repositorios Git?
- ¿Qué ámbito administrativo puede cubrir a los usuarios asignados por la organización?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa proprietária da organização precisa excluir arquivos correspondentes em repositórios Git e em outros locais do sistema de arquivos para usuários licenciados pela organização. Qual escopo é necessário?

1. Uma regra nas configurações de um repositório

   Uma regra de repositório não cobre arquivos fora dele.

2. Uma entrada local no .gitignore em cada checkout

   .gitignore afeta o rastreamento do Git e não é uma regra organizacional do Copilot.

3. Uma preferência pessoal do editor

   Uma preferência pessoal não configura exclusões gerenciadas pela organização.

4. Uma regra de exclusão no nível da organização **[CORRECT]**

   Exclusões da organização podem abranger locais relevantes com e sem Git para esse escopo de usuários gerenciados.

**Concept:** Escopo de exclusão da organização

**Authored coaching hints:**

- O requisito inclui arquivos fora de repositórios Git?
- Qual escopo administrativo pode cobrir os usuários licenciados pela organização?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-204:cf31ce7d3ec669fc824e4a3149669a4c46bf3f140cec4db250bbd6cb5fd49a71 -->
## Question 204: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-204`

**Content revision:** `cf31ce7d3ec669fc824e4a3149669a4c46bf3f140cec4db250bbd6cb5fd49a71`

**en review revision:** `950407dd02681af36a19526a9c5383184f1f692577e3ee50077fa9412dbf9694`
**es review revision:** `4bafdf43d4aa545824da89b57c3b5682585b66b2475ffc871474c21010d62377`
**pt-BR review revision:** `8571648b7fd2b51ab60a4f448d4a25dfd32dd6c34867e99052ba23282b46abe2`

### English

A repository administrator sees an inherited content-exclusion rule in repository settings. Where can that rule be changed?

1. At the scope that supplied the rule **[CORRECT]**

   Inherited rules are not editable on the repository page; changes belong at their source scope.

2. Edit inherited settings from the repository page

   The documentation says inherited settings cannot be edited there.

3. Use .gitignore as the Copilot control

   .gitignore does not change a managed Copilot exclusion.

4. Set the rule on the default branch only

   A default branch change does not edit an inherited policy.

**Concept:** Inherited exclusion administration

**Authored coaching hints:**

- Which scope originated the visible rule?
- Does visibility at repository level imply local edit permission?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona administradora de repositorio ve una regla de exclusión heredada en sus ajustes. ¿Dónde se puede cambiar?

1. En el ámbito que proporcionó la regla **[CORRECT]**

   Las reglas heredadas no se editan en la página del repositorio; se cambian en su ámbito de origen.

2. Editar la configuración heredada desde el repositorio

   La documentación indica que esos ajustes heredados no se pueden editar allí.

3. Usar .gitignore como control de Copilot

   .gitignore no cambia una exclusión de Copilot administrada.

4. Definir la regla solo en la rama predeterminada

   Cambiar la rama predeterminada no modifica una política heredada.

**Concept:** Administración de exclusiones heredadas

**Authored coaching hints:**

- ¿Qué ámbito originó la regla visible?
- ¿Ver un ajuste en el repositorio implica permiso para editarlo allí?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa administradora de repositório vê uma regra de exclusão herdada nas configurações. Onde essa regra pode ser alterada?

1. No escopo que forneceu a regra **[CORRECT]**

   Regras herdadas não são editáveis na página do repositório; a alteração pertence ao escopo de origem.

2. Editar configurações herdadas na página do repositório

   A documentação diz que configurações herdadas não podem ser editadas ali.

3. Usar .gitignore como controle do Copilot

   .gitignore não altera uma exclusão gerenciada do Copilot.

4. Definir a regra apenas na branch padrão

   Alterar a branch padrão não modifica uma política herdada.

**Concept:** Administração de exclusões herdadas

**Authored coaching hints:**

- Qual escopo originou a regra visível?
- Ver uma configuração no repositório implica permissão para editá-la ali?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-205:1c8006c31ca632c300d1f4b14dbcafdd50a5a70304a887df900f8d1dca2deb2e -->
## Question 205: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-205`

**Content revision:** `1c8006c31ca632c300d1f4b14dbcafdd50a5a70304a887df900f8d1dca2deb2e`

**en review revision:** `c11828cd512b04c25ae47ea4bb77ab2ddfd2824698e5b28bcdd7b569956f438a`
**es review revision:** `908e704ed6531659ef4c8c9c1c4420e7bf272dc2eea6994b16b29b81bf495e26`
**pt-BR review revision:** `22559bdcdcdadccf7ca7ddbcc6023506f0ff02dd7e24c7fa80df61817893bf5e`

### English

Which role can configure content exclusions for a specific repository, subject to the applicable plan and permissions?

1. Any repository contributor can change it

   Read access alone does not grant administrative configuration rights.

2. Repository administrator **[CORRECT]**

   Repository administrators can configure exclusions for their repositories.

3. Any Copilot seat holder can change it

   A Copilot seat grants product access, not repository administration.

4. A project-board maintainer can change it

   Project board permissions do not necessarily grant repository settings access.

**Concept:** Repository exclusion role

**Authored coaching hints:**

- Which role manages repository settings?
- Does a product seat equal repository administration?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol puede configurar exclusiones de contenido para un repositorio específico, sujeto al plan y los permisos aplicables?

1. Cualquier colaborador del repositorio puede cambiarla

   El acceso de lectura por sí solo no concede derechos de administración.

2. Repository administrator **[CORRECT]**

   Las personas con rol Repository administrator pueden configurar exclusiones de sus repositorios.

3. Cualquier persona con licencia de Copilot puede cambiarla

   Una licencia de Copilot da acceso al producto, no administración del repositorio.

4. Un mantenedor del tablero del proyecto puede cambiarla

   Los permisos de proyecto no necesariamente permiten cambiar los ajustes del repositorio.

**Concept:** Rol para exclusiones de repositorio

**Authored coaching hints:**

- ¿Qué rol administra los ajustes del repositorio?
- ¿Una licencia de producto equivale a administrar el repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função pode configurar exclusões de conteúdo para um repositório específico, conforme o plano e as permissões aplicáveis?

1. Qualquer colaborador do repositório pode alterá-la

   Acesso de leitura, por si só, não concede direitos administrativos.

2. Repository administrator **[CORRECT]**

   Pessoas com a função Repository administrator podem configurar exclusões em seus repositórios.

3. Qualquer pessoa com licença do Copilot pode alterá-la

   Uma licença do Copilot concede acesso ao produto, não administração do repositório.

4. Um mantenedor do quadro do projeto pode alterá-la

   Permissões de projeto não necessariamente permitem alterar configurações do repositório.

**Concept:** Função para exclusões de repositório

**Authored coaching hints:**

- Qual função administra as configurações do repositório?
- Uma licença do produto equivale à administração do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-206:d53abbd2ddb8f6808388b5a0cf58a2c277c02f872c87bc332059b26c55bc8549 -->
## Question 206: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-206`

**Content revision:** `d53abbd2ddb8f6808388b5a0cf58a2c277c02f872c87bc332059b26c55bc8549`

**en review revision:** `235da3a093ce92da88fff30f9e95c09441a931ce32bef8dbdf8c63ea742810f3`
**es review revision:** `9b516b0262314eaf4e047b2d41214e0fee0bcfa73177f0a58c9c7316e869cef6`
**pt-BR review revision:** `4881665f98a34b1807d93fbd6ce82afe3ee99f9407b6ee534051740c1735644c`

### English

Which record is most useful for determining whether an enterprise Copilot policy changed before an incident?

1. The current policy page

   Current settings do not establish what was configured earlier.

2. A count of generated suggestions

   Suggestion counts do not record administrative policy changes.

3. The enterprise audit log **[CORRECT]**

   The enterprise audit log records Copilot plan setting and policy changes.

4. The latest source-code commit

   A source commit does not necessarily capture administrative settings.

**Concept:** Policy change audit trail

**Authored coaching hints:**

- Does current state show the earlier state?
- Which record tracks administrative changes over time?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué registro es más útil para determinar si una política de Copilot empresarial cambió antes de un incidente?

1. La página de política actual

   Los ajustes actuales no establecen cómo estaban configurados antes.

2. El recuento de sugerencias generadas

   Los conteos de sugerencias no registran cambios administrativos de políticas.

3. El registro de auditoría empresarial **[CORRECT]**

   El registro de auditoría empresarial registra cambios de ajustes y políticas del plan Copilot.

4. La confirmación de código más reciente

   Un commit de código no necesariamente registra ajustes administrativos.

**Concept:** Registro de auditoría de cambios de política

**Authored coaching hints:**

- ¿El estado actual muestra el estado anterior?
- ¿Qué registro sigue los cambios administrativos en el tiempo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual registro é mais útil para determinar se uma política do Copilot empresarial mudou antes de um incidente?

1. A página de política atual

   Configurações atuais não estabelecem como estavam antes.

2. A contagem de sugestões geradas

   Contagens de sugestões não registram alterações administrativas de políticas.

3. O log de auditoria empresarial **[CORRECT]**

   O log de auditoria empresarial registra alterações de configurações e políticas do plano Copilot.

4. O commit de código mais recente

   Um commit de código não necessariamente registra configurações administrativas.

**Concept:** Trilha de auditoria de alterações de política

**Authored coaching hints:**

- O estado atual mostra o estado anterior?
- Qual registro acompanha mudanças administrativas ao longo do tempo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs>

<!-- certification-coach-question:copilot-207:715a40442e177e9cab1828e69b759c54984e53ab67131d822c80c100c324f41b -->
## Question 207: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-207`

**Content revision:** `715a40442e177e9cab1828e69b759c54984e53ab67131d822c80c100c324f41b`

**en review revision:** `9d1633069e7ae3c379edec9b6c4a13f2537c732ff5d475dab20129e00b356517`
**es review revision:** `a0ca32907037e6284f7780d17115675c2b06e3e66dee3d81f71b4e9c771f4c95`
**pt-BR review revision:** `8d2c7e829f4bc68f06b32e84c4ca2f20d0413f5145a2255e64aed08f1f2c8175`

### English

In an experience where content exclusion is supported and effective, how does excluded file content affect Copilot responses?

1. It remains available whenever a neighboring file is open

   The policy applies to excluded content, not merely whether its own tab is open.

2. It is hidden from human collaborators as well

   Content exclusion is not a repository authorization rule for people.

3. It is sent only when the file name is omitted

   Omitting a filename does not override an effective exclusion.

4. Excluded content does not inform Copilot responses **[CORRECT]**

   The documented exclusion prevents affected content from informing Copilot responses.

**Concept:** Effect of content exclusion

**Authored coaching hints:**

- What does exclusion apply to: the file's content or its tab?
- Separate Copilot context behavior from human repository access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una experiencia compatible donde la exclusión está activa, ¿cómo afecta el contenido excluido a las respuestas de Copilot?

1. Sigue disponible cuando se abre un archivo cercano

   La política se aplica al contenido excluido, no solo a si su pestaña está abierta.

2. También queda oculto para las personas colaboradoras

   La exclusión de contenido no es una regla de autorización para las personas.

3. Solo se envía si se omite el nombre del archivo

   Omitir el nombre del archivo no invalida una exclusión activa.

4. El contenido excluido no aporta contexto a Copilot **[CORRECT]**

   La exclusión documentada impide que el contenido afectado informe las respuestas de Copilot.

**Concept:** Efecto de la exclusión de contenido

**Authored coaching hints:**

- ¿La exclusión se aplica al contenido o a su pestaña?
- Distingue el contexto de Copilot del acceso humano al repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma experiência com suporte e exclusão efetiva, como o conteúdo excluído afeta as respostas do Copilot?

1. Continua disponível quando um arquivo próximo está aberto

   A política se aplica ao conteúdo excluído, não apenas à abertura de sua aba.

2. Também fica oculto para colaboradores humanos

   Exclusão de conteúdo não é regra de autorização para pessoas.

3. Só é enviado quando o nome do arquivo é omitido

   Omitir o nome do arquivo não invalida uma exclusão efetiva.

4. O conteúdo excluído não informa as respostas do Copilot **[CORRECT]**

   A exclusão documentada impede que o conteúdo afetado informe respostas do Copilot.

**Concept:** Efeito da exclusão de conteúdo

**Authored coaching hints:**

- A exclusão se aplica ao conteúdo ou à aba do arquivo?
- Diferencie o contexto do Copilot do acesso humano ao repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-208:deaa2fdc6f8791612700ee0a648ced382864dc0339d37bf87359a1ee91603beb -->
## Question 208: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-208`

**Content revision:** `deaa2fdc6f8791612700ee0a648ced382864dc0339d37bf87359a1ee91603beb`

**en review revision:** `22677ee53965ed8eaf746f6ce7877da3a9587922a9ba153e4c5ec2e2e44470e8`
**es review revision:** `18411c3af6dd384ffd05f992fcc587fc808f2ce018784ffbbf4ba9778b6efb0b`
**pt-BR review revision:** `7c7c124173eadbb454ad542ca02bf23af20c58eea496f511f342c95f0c94238f`

### English

What does the absence of a public-code match reference establish about a Copilot suggestion?

1. No match is not proof of originality or clearance **[CORRECT]**

   No reference is not proof of originality or a legal clearance.

2. The suggestion is certified original

   The matching feature does not certify originality.

3. All third-party rights have been cleared

   A missing reference does not waive applicable rights or obligations.

4. The search covered every repository and code host

   The documented matching scope is not every code host or all code.

**Concept:** Limits of no-match results

**Authored coaching hints:**

- What can a search fail to find?
- Does the absence of a detected match answer a licensing question?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué demuestra que una sugerencia de Copilot no tenga una referencia de coincidencia con código público?

1. No hallar coincidencias no prueba originalidad ni autorización **[CORRECT]**

   La falta de referencia no demuestra originalidad ni autorización legal.

2. La sugerencia está certificada como original

   La función de coincidencias no certifica originalidad.

3. Se han despejado todos los derechos de terceros

   La falta de una referencia no elimina derechos u obligaciones aplicables.

4. La búsqueda cubrió todos los repositorios y sitios de código

   El alcance documentado no incluye todo el código ni todos los sitios.

**Concept:** Límites de resultados sin coincidencia

**Authored coaching hints:**

- ¿Qué podría no encontrar una búsqueda?
- ¿La ausencia de una coincidencia detectada resuelve una cuestión de licencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a ausência de uma referência de correspondência com código público comprova sobre uma sugestão do Copilot?

1. Não encontrar correspondência não comprova originalidade nem liberação **[CORRECT]**

   A falta de referência não comprova originalidade nem liberação jurídica.

2. A sugestão está certificada como original

   O recurso de correspondência não certifica originalidade.

3. Todos os direitos de terceiros foram liberados

   A falta de referência não elimina direitos ou obrigações aplicáveis.

4. A pesquisa cobriu todos os repositórios e sites de código

   O escopo documentado não inclui todo o código nem todos os sites.

**Concept:** Limites de resultados sem correspondência

**Authored coaching hints:**

- O que uma pesquisa pode deixar de encontrar?
- A ausência de correspondência detectada resolve uma questão de licença?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-209:a321dc8384ba780a56ca1b7056580578a2acad1fada1cafc006ef11242d203ff -->
## Question 209: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-209`

**Content revision:** `a321dc8384ba780a56ca1b7056580578a2acad1fada1cafc006ef11242d203ff`

**en review revision:** `cf92f400a425617ab0afc5c2cbac929a7103707ca8190fab5dfad296bc10ec5d`
**es review revision:** `5d30a5c233454b38fa9f8f246b23d0d1e6696519a6089bba229cb77a99dc4eb7`
**pt-BR review revision:** `bb89b43929d890b978b8e64378cef6caa6649c97e62704f3b706d146a37e9081`

### English

Copilot provides a public repository and license reference for a matching suggestion. What should a developer do before reusing the code?

1. A code reference grants a reuse license

   A match reference is not permission from the rights holder.

2. Review the source and applicable license **[CORRECT]**

   A reference helps identify source and license information for a rights assessment.

3. Deleting the reference removes the original rights

   Removing a reference does not remove obligations or establish originality.

4. Every repository uses the same license

   Licenses vary among repositories.

**Concept:** Public-code reference review

**Authored coaching hints:**

- What does the reference help you inspect?
- Who determines whether the intended use complies with the source license?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Copilot proporciona una referencia a un repositorio público y su licencia para una sugerencia coincidente. ¿Qué debería hacer la persona desarrolladora antes de reutilizar el código?

1. Una referencia de código concede licencia de reutilización

   Una referencia de coincidencia no es permiso del titular de derechos.

2. Revisar la fuente y la licencia aplicable **[CORRECT]**

   La referencia ayuda a identificar la fuente y la licencia para evaluar los derechos.

3. Borrar la referencia elimina los derechos originales

   Quitar la referencia no elimina obligaciones ni demuestra originalidad.

4. Todos los repositorios usan la misma licencia

   Las licencias varían entre repositorios.

**Concept:** Revisión de referencias de código público

**Authored coaching hints:**

- ¿Qué permite inspeccionar la referencia?
- ¿Quién determina si el uso previsto cumple la licencia de origen?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O Copilot fornece uma referência a um repositório público e à licença para uma sugestão correspondente. O que o desenvolvedor deve fazer antes de reutilizar o código?

1. Uma referência de código concede licença de reutilização

   Uma referência de correspondência não é permissão do titular dos direitos.

2. Revisar a fonte e a licença aplicável **[CORRECT]**

   A referência ajuda a identificar fonte e licença para avaliar os direitos.

3. Excluir a referência remove os direitos originais

   Remover a referência não elimina obrigações nem comprova originalidade.

4. Todos os repositórios usam a mesma licença

   As licenças variam entre repositórios.

**Concept:** Revisão de referências de código público

**Authored coaching hints:**

- O que a referência ajuda a inspecionar?
- Quem determina se o uso pretendido cumpre a licença de origem?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-210:5e3b5627b80b0a5db8104dd20b96cc629986e06005b374252b142c3b1c4c9076 -->
## Question 210: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-210`

**Content revision:** `5e3b5627b80b0a5db8104dd20b96cc629986e06005b374252b142c3b1c4c9076`

**en review revision:** `7cb5a8f0049158fca902f833832fdd60fdb1099ad9d4305f00f4617dea221300`
**es review revision:** `a291eced948291a969f139153118da9380bf8c138cb06ff7fd0524378c67c173`
**pt-BR review revision:** `b47dce4e22449091888dedfc99c404ea31dd455e2f9f297882922388eae13bb7`

### English

Which statement matches the documented scope of GitHub Copilot public-code matching?

1. Search all public and private repositories

   The documentation does not describe a universal live search or private-repository search.

2. Treat matching as a legal assessment

   Matching references are not a complete legal opinion.

3. A periodically updated public GitHub index **[CORRECT]**

   The documented matching corpus is a periodically updated public GitHub index with scope limits.

4. Search only the current repository

   The index is not restricted to the current repository.

**Concept:** Public-code matching scope

**Authored coaching hints:**

- What corpus does the documentation identify?
- Does a matching feature replace legal review?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación coincide con el alcance documentado de la coincidencia con código público de GitHub Copilot?

1. Buscar en todos los repositorios públicos y privados

   La documentación no describe una búsqueda universal en vivo ni de repositorios privados.

2. Tomar la coincidencia como evaluación jurídica

   Las referencias de coincidencia no son una opinión jurídica completa.

3. Un índice público de GitHub actualizado periódicamente **[CORRECT]**

   El corpus documentado es un índice público de GitHub que se actualiza periódicamente y tiene límites.

4. Buscar solo en el repositorio actual

   El índice no se limita al repositorio actual.

**Concept:** Alcance de coincidencias con código público

**Authored coaching hints:**

- ¿Qué corpus identifica la documentación?
- ¿Una función de coincidencia reemplaza la revisión jurídica?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação corresponde ao escopo documentado de correspondência com código público do GitHub Copilot?

1. Pesquisar em todos os repositórios públicos e privados

   A documentação não descreve uma pesquisa universal ao vivo nem de repositórios privados.

2. Tratar a correspondência como análise jurídica

   Referências de correspondência não são uma opinião jurídica completa.

3. Um índice público do GitHub atualizado periodicamente **[CORRECT]**

   O corpus documentado é um índice público do GitHub atualizado periodicamente e com limites.

4. Pesquisar apenas no repositório atual

   O índice não se limita ao repositório atual.

**Concept:** Escopo de correspondência com código público

**Authored coaching hints:**

- Qual corpus a documentação identifica?
- Um recurso de correspondência substitui a revisão jurídica?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides>

<!-- certification-coach-question:copilot-211:f19903a7405d54632362cc8c6bb218413e2be9bf6a7a8b42d95ed7e3654c87af -->
## Question 211: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-211`

**Content revision:** `f19903a7405d54632362cc8c6bb218413e2be9bf6a7a8b42d95ed7e3654c87af`

**en review revision:** `09000589c9e965703cb6cd3976b3f168b6ee121796340a8695565aa6dac0c1ab`
**es review revision:** `bad5073db2e1da1f258d5281c04521782438b0f2a8972e8b4141402e4f88fe3b`
**pt-BR review revision:** `dca01791f9b9313388d9f54005bd442605f1a66229d0f00748827fe90980bf74`

### English

Which repository exclusion pattern is documented for files ending in .cfg anywhere in the repository?

1. \*.pem

   This targets a directory named cfg, not the extension.

2. secrets/\*\*

   This matches a different suffix.

3. config/local.json

   This limits the rule to one directory rather than the repository.

4. "\*.cfg" **[CORRECT]**

   The documented suffix pattern matches files ending in .cfg throughout the repository.

**Concept:** Filename glob patterns

**Authored coaching hints:**

- Is the requirement based on a filename suffix or a directory?
- Which pattern covers matching names throughout the repository?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué patrón de exclusión de repositorio está documentado para archivos terminados en .cfg en cualquier lugar del repositorio?

1. \*.pem

   Esto apunta a un directorio llamado cfg, no a la extensión.

2. secrets/\*\*

   Esto coincide con otro sufijo.

3. config/local.json

   Esto limita la regla a un directorio y no a todo el repositorio.

4. "\*.cfg" **[CORRECT]**

   El patrón de sufijo documentado coincide con archivos terminados en .cfg en todo el repositorio.

**Concept:** Patrones glob de nombres

**Authored coaching hints:**

- ¿El requisito se basa en un sufijo o en un directorio?
- ¿Qué patrón cubre los nombres coincidentes en todo el repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual padrão de exclusão do repositório está documentado para arquivos terminados em .cfg em qualquer lugar do repositório?

1. \*.pem

   Isto aponta para um diretório chamado cfg, não para a extensão.

2. secrets/\*\*

   Isto corresponde a outro sufixo.

3. config/local.json

   Isto limita a regra a um diretório, não ao repositório inteiro.

4. "\*.cfg" **[CORRECT]**

   O padrão de sufixo documentado corresponde a arquivos terminados em .cfg em todo o repositório.

**Concept:** Padrões glob de nomes

**Authored coaching hints:**

- O requisito é baseado em sufixo de nome ou diretório?
- Qual padrão cobre os nomes correspondentes em todo o repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-212:11b295d08526c38dbff859c165805e6e175b84a1849dcbfeef2c02ea7d44eef3 -->
## Question 212: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-212`

**Content revision:** `11b295d08526c38dbff859c165805e6e175b84a1849dcbfeef2c02ea7d44eef3`

**en review revision:** `8241234f56c45a1bf919def8c909d0208e1955a2fd5a71f4f0f83e4c165b0cba`
**es review revision:** `2b56c673ec8f201ccd6ec11a894321106e617cba4d6f3b1e3361edacd3ae3d7e`
**pt-BR review revision:** `64b51c313d4f014a7a93286d873aceabacdc39053b1a5b58fc4adb7d07c7fe0a`

### English

Does purchasing a Copilot plan grant permission to reuse any third-party code that appears in an output?

1. No; assess third-party rights and licenses **[CORRECT]**

   A subscription does not grant blanket permission to use third-party material.

2. Generated code always receives one universal license

   Copilot plans do not relicense other repositories.

3. A paid Copilot plan changes third-party source licenses

   Editing code does not automatically remove applicable rights or obligations.

4. A public-code match never needs attribution or review

   The correct response is assessment, not a universal prohibition.

**Concept:** Third-party rights and output

**Authored coaching hints:**

- What does a subscription authorize, and what rights belong to others?
- Does editing alone settle licensing questions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Comprar un plan de Copilot otorga permiso para reutilizar cualquier código de terceros que aparezca en una salida?

1. No; evaluar los derechos y las licencias de terceros **[CORRECT]**

   Una suscripción no otorga permiso general para usar material de terceros.

2. El código generado siempre recibe una licencia universal

   Los planes de Copilot no relicencian otros repositorios.

3. Un plan de pago de Copilot cambia las licencias de terceros

   Editar código no elimina automáticamente los derechos u obligaciones aplicables.

4. Una coincidencia con código público nunca requiere atribución ni revisión

   La respuesta adecuada es evaluar, no imponer una prohibición universal.

**Concept:** Derechos de terceros y resultados

**Authored coaching hints:**

- ¿Qué autoriza una suscripción y qué derechos pertenecen a terceros?
- ¿Editar por sí solo resuelve las cuestiones de licencia?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Comprar um plano do Copilot concede permissão para reutilizar qualquer código de terceiros que apareça em uma saída?

1. Não; avalie direitos e licenças de terceiros **[CORRECT]**

   Uma assinatura não concede permissão geral para usar material de terceiros.

2. O código gerado sempre recebe uma licença universal

   Planos do Copilot não relicenciam outros repositórios.

3. Um plano pago do Copilot altera licenças de código de terceiros

   Editar o código não remove automaticamente direitos ou obrigações aplicáveis.

4. Uma correspondência com código público nunca exige atribuição nem revisão

   A resposta adequada é avaliar, não impor uma proibição universal.

**Concept:** Direitos de terceiros e saídas

**Authored coaching hints:**

- O que uma assinatura autoriza e quais direitos pertencem a terceiros?
- Editar, por si só, resolve questões de licença?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300>

<!-- certification-coach-question:copilot-213:251f5dbec52a0596c3095c7bda97fe447f82a8b068177299c1c23750ddc6e74a -->
## Question 213: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-213`

**Content revision:** `251f5dbec52a0596c3095c7bda97fe447f82a8b068177299c1c23750ddc6e74a`

**en review revision:** `6987251bd39abe00be60788cd8fdc3f77ef3b0e6777ec495167a8fb889564ca6`
**es review revision:** `ffd5dc8c2523d324f4f80030ab65356407ba04a4b813876607f27fb94b2d4ecf`
**pt-BR review revision:** `b488b65366470c82cbbcf604f34fb50688780558d53a5b47ae03492c67d3b687`

### English

How should a privacy reviewer evaluate a claim about Copilot prompt retention?

1. Assume the same retention for every plan and surface

   A universal period may not reflect the relevant plan and feature.

2. Check the plan, feature, and current terms **[CORRECT]**

   Handling claims need scope and current authoritative terms; they may differ by product configuration.

3. Infer retention from the prompt text

   Content type alone does not establish the service's retention terms.

4. Treat no-training as no data processing

   Training-use terms and request processing or retention are distinct questions.

**Concept:** Scoped data-handling claims

**Authored coaching hints:**

- Which product configuration and purpose are being discussed?
- Are training and retention the same data-handling question?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo debería evaluar una persona revisora de privacidad una afirmación sobre la retención de solicitudes de Copilot?

1. Suponer la misma retención en todos los planes y superficies

   Un plazo universal puede no reflejar el plan y la función pertinentes.

2. Consultar el plan, la función y los términos vigentes **[CORRECT]**

   Las afirmaciones deben acotarse a los términos autorizados vigentes y pueden variar según la configuración.

3. Inferir la retención del texto de la solicitud

   El tipo de contenido por sí solo no establece los términos de retención del servicio.

4. Tomar la ausencia de entrenamiento como ausencia de procesamiento

   El uso para entrenamiento y el procesamiento o retención de solicitudes son cuestiones distintas.

**Concept:** Afirmaciones acotadas sobre manejo de datos

**Authored coaching hints:**

- ¿Qué configuración del producto y finalidad se analizan?
- ¿Entrenamiento y retención son la misma cuestión de datos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um revisor de privacidade deve avaliar uma afirmação sobre retenção de prompts do Copilot?

1. Supor a mesma retenção em todos os planos e interfaces

   Um prazo universal pode não refletir o plano e o recurso pertinentes.

2. Conferir o plano, o recurso e os termos atuais **[CORRECT]**

   Afirmações de tratamento precisam de escopo e termos atuais autorizados; podem variar por configuração.

3. Deduzir a retenção pelo texto do prompt

   O tipo de conteúdo, sozinho, não estabelece os termos de retenção do serviço.

4. Tratar ausência de treinamento como ausência de processamento

   Uso para treinamento e processamento ou retenção de prompts são questões distintas.

**Concept:** Afirmações delimitadas sobre tratamento de dados

**Authored coaching hints:**

- Qual configuração do produto e finalidade estão em questão?
- Treinamento e retenção são a mesma questão de dados?

</details>

**Official supporting source:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300>

<!-- certification-coach-question:copilot-214:81f97d0f532fd3a3b3f1222dbbb9a2bc7e92cff4e627a87e0986f7db819470f0 -->
## Question 214: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-214`

**Content revision:** `81f97d0f532fd3a3b3f1222dbbb9a2bc7e92cff4e627a87e0986f7db819470f0`

**en review revision:** `9808bd253399284f3fe2706cc9eb36745be1ffdb4eb5a4636cb92a646fe402fc`
**es review revision:** `ae3c82eeb24a32d197f6d0fd4aad524273e10d88eb8acdb529abd1c322e7c384`
**pt-BR review revision:** `1d79d8850ab72ced693a94d06e806234e433e644c267d082b92ef3c69d36fb54`

### English

Organization owners can configure content exclusions for which Copilot users, according to the documented scope?

1. A matching reference proves authorization

   The policy does not apply universally to public repository visitors.

2. A match filter covers all Copilot surfaces

   An organization does not control every personal Copilot subscription.

3. Users assigned seats by that organization **[CORRECT]**

   The documented organization scope covers users assigned a Copilot seat through that organization.

4. No match proves the code is original

   The rule is intended to govern the organization's seat-assigned users, not only its author.

**Concept:** Organization exclusion scope

**Authored coaching hints:**

- Which organization supplies the Copilot seat?
- Does an organization policy apply to every GitHub user?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Según el alcance documentado, ¿para qué usuarios de Copilot pueden configurar exclusiones las personas propietarias de una organización?

1. Una referencia coincidente demuestra autorización

   La política no se aplica universalmente a quienes visitan repositorios públicos.

2. El filtro de coincidencias cubre todas las superficies

   Una organización no controla todas las suscripciones personales de Copilot.

3. Usuarios con licencias asignadas por esa organización **[CORRECT]**

   El ámbito organizativo documentado cubre usuarios con licencia asignada por esa organización.

4. No hallar coincidencias demuestra originalidad

   La regla busca regir a usuarios con licencia asignada, no solo a quien la creó.

**Concept:** Ámbito de exclusión de organización

**Authored coaching hints:**

- ¿Qué organización asigna la licencia de Copilot?
- ¿Una política organizativa se aplica a todas las personas en GitHub?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Segundo o escopo documentado, para quais usuários do Copilot os proprietários da organização podem configurar exclusões?

1. Uma referência correspondente comprova autorização

   A política não se aplica universalmente a visitantes de repositórios públicos.

2. O filtro de correspondência cobre todas as interfaces

   Uma organização não controla todas as assinaturas pessoais do Copilot.

3. Usuários licenciados por essa organização **[CORRECT]**

   O escopo organizacional documentado abrange usuários licenciados por essa organização.

4. Não encontrar correspondência comprova originalidade

   A regra se destina aos usuários licenciados, não apenas a quem a criou.

**Concept:** Escopo de exclusão da organização

**Authored coaching hints:**

- Qual organização fornece a licença do Copilot?
- Uma política organizacional se aplica a todas as pessoas no GitHub?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-215:a5f3a96d1309b0fece9f46cb5c16d7facb695de9e88f161fdb242e7a2ef52b57 -->
## Question 215: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-215`

**Content revision:** `a5f3a96d1309b0fece9f46cb5c16d7facb695de9e88f161fdb242e7a2ef52b57`

**en review revision:** `b781dc09eed2ccc150127ecc6464898d2a92eb933c558951f6d70696c94fc060`
**es review revision:** `67c4b62fc2d44ae69d043afed3f130e27eb74bcc3a89da0615012b983de6cf9e`
**pt-BR review revision:** `685420d37e34eb988d01a11e8a022ed757ac3647162ae7bbd855dc5dd41f3e6d`

### English

What is the difference between a restriction on model training and processing a prompt for an inference response?

1. Training restrictions prevent processing any prompt context

   A training restriction does not mean that no service processing occurs.

2. Inference is equivalent to changing model weights

   Inference generates an answer; model training updates or improves model parameters.

3. Public-code reference controls apply only during training

   Training-use rules are not limited to public-code matching.

4. Inference can process a prompt without training on it **[CORRECT]**

   Processing a prompt to answer it is distinct from using the data to train or improve a model.

**Concept:** Training versus request processing

**Authored coaching hints:**

- What must happen to provide an answer to a current request?
- Does using data to answer differ from using it to train?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es la diferencia entre restringir el entrenamiento del modelo y procesar una solicitud para generar una respuesta?

1. Las restricciones de entrenamiento impiden procesar cualquier contexto de solicitud

   Una restricción de entrenamiento no significa que el servicio no procese datos.

2. La inferencia equivale a modificar los pesos del modelo

   La inferencia genera una respuesta; el entrenamiento actualiza o mejora parámetros.

3. Los controles de referencias de código público solo se aplican durante el entrenamiento

   Las reglas de uso para entrenamiento no se limitan a coincidencias de código público.

4. La inferencia procesa una solicitud sin entrenar con ella **[CORRECT]**

   Procesar una solicitud para responderla es distinto de usar los datos para entrenar o mejorar un modelo.

**Concept:** Entrenamiento y procesamiento de solicitudes

**Authored coaching hints:**

- ¿Qué debe ocurrir para responder una solicitud actual?
- ¿Usar datos para responder es distinto de usarlos para entrenar?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a diferença entre restringir o treinamento do modelo e processar um prompt para gerar uma resposta?

1. Restrições de treinamento impedem processar qualquer contexto do prompt

   Uma restrição de treinamento não significa que o serviço não processe dados.

2. Inferência equivale a alterar os pesos do modelo

   Inferência gera uma resposta; treinamento atualiza ou aprimora parâmetros do modelo.

3. Controles de referência de código público só se aplicam durante o treinamento

   Regras de uso para treinamento não se limitam à correspondência com código público.

4. A inferência processa um prompt sem treinar com ele **[CORRECT]**

   Processar um prompt para responder é diferente de usar dados para treinar ou melhorar um modelo.

**Concept:** Treinamento versus processamento de solicitações

**Authored coaching hints:**

- O que precisa ocorrer para responder a uma solicitação atual?
- Usar dados para responder é diferente de usá-los para treinamento?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/responsible-use/inline-suggestions>

<!-- certification-coach-question:copilot-216:91bdf15c356956b9ac34f58a56b386cde1599a7e7166fdc5e54506df7546ad03 -->
## Question 216: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-216`

**Content revision:** `91bdf15c356956b9ac34f58a56b386cde1599a7e7166fdc5e54506df7546ad03`

**en review revision:** `2b2e9e854f49d5360ff44ca744ceb93d31cc1aa9b7c21eb42b93c88e69a70ffb`
**es review revision:** `401af50b31157e93cb55f4f2b6d6f39d0578d9a2dc9da4cb14039c9534234b69`
**pt-BR review revision:** `df4c177025d8a0519b47d46dd639cd111e206e9ab72f4f09ed45d8dbee2015ff`

### English

What does turning off inline suggestions for one language establish about Copilot agent access to files?

1. A language toggle is not universal access control **[CORRECT]**

   A language-specific suggestion setting does not establish universal protections for agent tools.

2. Turning off suggestions revokes operating-system file permissions

   An editor preference does not revoke filesystem permissions.

3. The editor setting deletes prompts already sent

   Disabling suggestions is not a data-deletion control.

4. Every Copilot tool always inherits the editor setting

   Connected tools have separate support and permission behavior.

**Concept:** Settings versus access safeguards

**Authored coaching hints:**

- Which feature does the language preference configure?
- Does an inline setting govern every agent or tool surface?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué establece desactivar las sugerencias en línea para un idioma sobre el acceso de un agente de Copilot a los archivos?

1. Un ajuste de idioma no controla todo acceso **[CORRECT]**

   Un ajuste de sugerencias por idioma no establece protecciones universales para herramientas de agente.

2. Desactivar las sugerencias revoca los permisos de archivos del sistema operativo

   Una preferencia del editor no revoca permisos del sistema de archivos.

3. La opción del editor elimina las solicitudes ya enviadas

   Desactivar sugerencias no es un control de eliminación de datos.

4. Todas las herramientas de Copilot siempre heredan la opción del editor

   Las herramientas conectadas tienen comportamientos de permisos y compatibilidad distintos.

**Concept:** Ajustes y controles de acceso

**Authored coaching hints:**

- ¿Qué función configura la preferencia de idioma?
- ¿Un ajuste en línea rige todas las superficies de agente y herramientas?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que desativar sugestões em linha para um idioma estabelece sobre o acesso de um agente do Copilot aos arquivos?

1. Uma configuração de idioma não controla todo acesso **[CORRECT]**

   Uma configuração de sugestões por idioma não estabelece proteções universais para ferramentas de agente.

2. Desativar sugestões revoga as permissões de arquivos do sistema operacional

   Uma preferência do editor não revoga permissões do sistema de arquivos.

3. A opção do editor exclui prompts já enviados

   Desativar sugestões não é um controle de exclusão de dados.

4. Todas as ferramentas do Copilot sempre herdam a configuração do editor

   Ferramentas conectadas têm comportamentos distintos de suporte e permissão.

**Concept:** Configurações versus proteções de acesso

**Authored coaching hints:**

- Qual recurso a preferência de idioma configura?
- Uma configuração em linha rege todas as interfaces de agente e ferramentas?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-217:5fc3ccbded4ad0be99e3420b879e508b19bb3601a0318f115d791232415a95f8 -->
## Question 217: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-217`

**Content revision:** `5fc3ccbded4ad0be99e3420b879e508b19bb3601a0318f115d791232415a95f8`

**en review revision:** `175796e4b01140984bf369b8c4f0a7881e0880e85ac24bc33fa033537c17a4f1`
**es review revision:** `64cc5a6c795c452f5ea952f41fa6281eba56f6db708b705e1d47719482bbce8d`
**pt-BR review revision:** `ad52e1261a5340a5df22940b00be65e03a6c7e466d6c57010dcdeda791b8abf4`

### English

A developer still sees inline suggestions in a file expected to be excluded. What should be checked first?

1. Rely on .gitignore to exclude the matching path

   .gitignore does not configure Copilot content exclusions.

2. Check path matching and surface support **[CORRECT]**

   Pattern scope and surface support determine whether the exclusion applies as expected.

3. Block every variable whose name resembles a secret

   Variable names do not establish content-exclusion behavior.

4. Assume the model changed the excluded file

   Changing models does not by itself correct a path or support mismatch.

**Concept:** Troubleshooting exclusion applicability

**Authored coaching hints:**

- Does the configured path actually match this file?
- Is content exclusion supported in this client and interaction?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona desarrolladora sigue recibiendo sugerencias en línea en un archivo que esperaba excluir. ¿Qué debería revisar primero?

1. Confiar en .gitignore para excluir la ruta coincidente

   .gitignore no configura exclusiones de contenido de Copilot.

2. Comprobar la ruta y la compatibilidad de la superficie **[CORRECT]**

   El patrón y la compatibilidad de la superficie determinan si se aplica la exclusión.

3. Bloquear toda variable cuyo nombre parezca un secreto

   Los nombres de variables no determinan el comportamiento de exclusión.

4. Suponer que el modelo modificó el archivo excluido

   Cambiar el modelo no corrige por sí solo un patrón o una incompatibilidad.

**Concept:** Diagnóstico de aplicación de exclusiones

**Authored coaching hints:**

- ¿La ruta configurada coincide con este archivo?
- ¿El cliente y la interacción admiten exclusión de contenido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um desenvolvedor ainda recebe sugestões em linha em um arquivo que esperava excluir. O que deve verificar primeiro?

1. Confiar no .gitignore para excluir o caminho correspondente

   .gitignore não configura exclusões de conteúdo do Copilot.

2. Verificar o caminho e o suporte da interface **[CORRECT]**

   O padrão e o suporte da interface determinam se a exclusão se aplica como esperado.

3. Bloquear toda variável cujo nome pareça um segredo

   Nomes de variáveis não determinam o comportamento da exclusão.

4. Supor que o modelo alterou o arquivo excluído

   Alterar o modelo não corrige, por si só, um padrão ou incompatibilidade.

**Concept:** Diagnóstico da aplicabilidade de exclusões

**Authored coaching hints:**

- O caminho configurado realmente corresponde a este arquivo?
- Este cliente e interação oferecem suporte à exclusão de conteúdo?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-218:30523f58f0e80490f23896a828377d20dca5840124f81f8310691808c5262f63 -->
## Question 218: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-218`

**Content revision:** `30523f58f0e80490f23896a828377d20dca5840124f81f8310691808c5262f63`

**en review revision:** `960be3c00d4a7a27220cf91cf917f5f930d7577ed9ed8a0e944ae71e713c03a2`
**es review revision:** `6879f4053a3af4ccdf089c02424eac3076890305ff9f7ee1a7582f8769c0e828`
**pt-BR review revision:** `70324075bcaf1732c9f065562900cbd6591931850886759abca9241f46f7e816`

### English

A supported editor session does not reflect a newly changed exclusion rule. What is a sensible diagnostic step?

1. Assume the change immediately rewrites every existing conversation

   An exclusion change does not rewrite prior conversation content.

2. Add the file to .gitignore and wait

   .gitignore is not the Copilot exclusion mechanism.

3. Refresh the client; verify scope and match **[CORRECT]**

   Refreshing the client and checking configuration can help determine whether updated settings are applied.

4. Change the organization's Copilot plan

   Changing a plan is not a diagnostic for a path or client refresh issue.

**Concept:** Exclusion configuration troubleshooting

**Authored coaching hints:**

- Could the current session still reflect earlier configuration?
- Which checks distinguish propagation from a pattern mismatch?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una sesión de editor compatible no refleja una regla de exclusión recién modificada. ¿Qué paso de diagnóstico es razonable?

1. Suponer que el cambio reescribe de inmediato todas las conversaciones existentes

   Una exclusión no reescribe el contenido de conversaciones anteriores.

2. Agregar el archivo a .gitignore y esperar

   .gitignore no es el mecanismo de exclusión de Copilot.

3. Actualizar el cliente; verificar ámbito y coincidencia **[CORRECT]**

   Actualizar el cliente y revisar la configuración ayuda a comprobar si se aplicó el cambio.

4. Cambiar el plan de Copilot de la organización

   Cambiar de plan no diagnostica un problema de ruta o actualización del cliente.

**Concept:** Diagnóstico de configuración de exclusiones

**Authored coaching hints:**

- ¿La sesión actual podría reflejar todavía la configuración anterior?
- ¿Qué comprobaciones distinguen propagación de un patrón que no coincide?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma sessão de editor com suporte não reflete uma regra de exclusão recém-alterada. Qual etapa de diagnóstico é razoável?

1. Supor que a mudança reescreve imediatamente todas as conversas existentes

   Uma exclusão não reescreve o conteúdo de conversas anteriores.

2. Adicionar o arquivo ao .gitignore e aguardar

   .gitignore não é o mecanismo de exclusão do Copilot.

3. Atualizar o cliente; verificar escopo e correspondência **[CORRECT]**

   Atualizar o cliente e conferir a configuração ajuda a verificar se a mudança foi aplicada.

4. Alterar o plano do Copilot da organização

   Alterar o plano não diagnostica um problema de caminho ou atualização do cliente.

**Concept:** Diagnóstico da configuração de exclusões

**Authored coaching hints:**

- A sessão atual ainda pode refletir a configuração anterior?
- Quais verificações distinguem propagação de um padrão que não corresponde?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-219:ab12e44babd8e420c2389c5e2a0faedfbb87f06faa4da9f884c2f4c73f852333 -->
## Question 219: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-219`

**Content revision:** `ab12e44babd8e420c2389c5e2a0faedfbb87f06faa4da9f884c2f4c73f852333`

**en review revision:** `4ff28e426d34c1d84ea41d172d427033500116125449e4902c7e7af2fdfbdf24`
**es review revision:** `da7dcb6ee889efcf8f8cfe7aa8a042bbc3e711d164d3325591a7394fe0c67543`
**pt-BR review revision:** `ad82d97f0d90634b3d0b548822f6c0967be3ae598afe7e06280bc29b46b995d5`

### English

A sensitive directory moves from /private to /services/confidential, but the exclusion still names /private/\*\*. What should the administrator do?

1. Assume an old rule follows renamed files

   A path pattern does not automatically follow moved files.

2. Rename the file to .gitignore

   A directory rename does not configure Copilot exclusion.

3. Disable Copilot across the organization

   A broad feature shutdown is not needed to correct a specific path rule.

4. Update the rule for the new path **[CORRECT]**

   Path-based rules must be reviewed when files move so the intended content remains covered.

**Concept:** Maintaining path-based exclusions

**Authored coaching hints:**

- What path does the policy currently match?
- What should be retested after moving the protected content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un directorio sensible se mueve de /private a /services/confidential, pero la exclusión sigue nombrando /private/\*\*. ¿Qué debería hacer la persona administradora?

1. Suponer que una regla anterior sigue al archivo renombrado

   Un patrón de ruta no sigue automáticamente los archivos movidos.

2. Cambiar el nombre del archivo a .gitignore

   Cambiar el nombre de un directorio no configura la exclusión de Copilot.

3. Desactivar Copilot en toda la organización

   No hace falta desactivar todas las funciones para corregir una ruta específica.

4. Actualizar la regla para la nueva ruta **[CORRECT]**

   Las reglas basadas en rutas deben revisarse cuando se mueven archivos para mantener la cobertura prevista.

**Concept:** Mantenimiento de exclusiones por ruta

**Authored coaching hints:**

- ¿Qué ruta coincide actualmente con la política?
- ¿Qué se debería volver a probar tras mover el contenido protegido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um diretório confidencial é movido de /private para /services/confidential, mas a exclusão ainda aponta para /private/\*\*. O que o administrador deve fazer?

1. Supor que uma regra antiga acompanha arquivos renomeados

   Um padrão de caminho não acompanha automaticamente arquivos movidos.

2. Renomear o arquivo para .gitignore

   Renomear um diretório não configura exclusão do Copilot.

3. Desativar o Copilot em toda a organização

   Não é necessário desativar todos os recursos para corrigir um caminho específico.

4. Atualizar a regra para o novo caminho **[CORRECT]**

   Regras baseadas em caminhos devem ser revisadas quando arquivos são movidos para manter a cobertura pretendida.

**Concept:** Manutenção de exclusões baseadas em caminhos

**Authored coaching hints:**

- Qual caminho a política corresponde atualmente?
- O que deve ser testado novamente após mover o conteúdo protegido?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot>

<!-- certification-coach-question:copilot-220:ed1a37cc87ae79cabc94482af993b733a4639f54902861cd7dd620b8ac2215f8 -->
## Question 220: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-220`

**Content revision:** `ed1a37cc87ae79cabc94482af993b733a4639f54902861cd7dd620b8ac2215f8`

**en review revision:** `994d04a97075a0e792047e3e3a5094a7b6ca2fd18dc636567602bdd91ce370e7`
**es review revision:** `f466a0606fafd6849ce19a25a38d88e57cd183097897cf29fb00cbfdc67dac04`
**pt-BR review revision:** `82f7190b1512fc6c4ca0effb4896521d95fc6702aae5a0e4fc85a2a99202cb91`

### English

A file is excluded from automatic context on a supported surface. A developer considers pasting its contents into chat manually. What is the key privacy point?

1. Exclusion does not authorize manual disclosure **[CORRECT]**

   A content-exclusion rule is not consent or authorization to share sensitive content manually.

2. Assume manually pasting excluded content is always blocked

   The documented path rule does not claim to block every manual paste.

3. Treat the required human review process as inaccessible

   Exclusion does not change repository permissions for people.

4. Rely on encryption to prevent sending prompt content

   Exclusion is not an encryption control.

**Concept:** Manual disclosure and exclusion scope

**Authored coaching hints:**

- Does excluding automatic context decide whether a person may share the content?
- What separate approval is needed before sending sensitive data?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un archivo está excluido del contexto automático en una superficie compatible. Una persona considera pegar manualmente su contenido en el chat. ¿Cuál es el punto clave de privacidad?

1. La exclusión no autoriza la divulgación manual **[CORRECT]**

   Una regla de exclusión no es consentimiento ni autorización para compartir manualmente contenido sensible.

2. Suponer que pegar manualmente contenido excluido siempre está bloqueado

   La regla de ruta documentada no afirma bloquear todo pegado manual.

3. Considerar inaccesible el proceso de revisión humana requerido

   La exclusión no cambia los permisos del repositorio para las personas.

4. Confiar en el cifrado para impedir el envío del contenido

   La exclusión no cifra el contenido.

**Concept:** Divulgación manual y alcance de exclusión

**Authored coaching hints:**

- ¿Excluir el contexto automático decide si una persona puede compartir el contenido?
- ¿Qué aprobación independiente se necesita antes de enviar datos sensibles?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um arquivo está excluído do contexto automático em uma interface com suporte. Um desenvolvedor pensa em colar manualmente seu conteúdo no chat. Qual é o ponto principal de privacidade?

1. A exclusão não autoriza divulgação manual **[CORRECT]**

   Uma regra de exclusão não é consentimento nem autorização para compartilhar manualmente conteúdo confidencial.

2. Supor que colar manualmente conteúdo excluído sempre é bloqueado

   A regra de caminho documentada não afirma bloquear toda colagem manual.

3. Tratar o processo exigido de revisão humana como inacessível

   A exclusão não altera permissões do repositório para pessoas.

4. Confiar na criptografia para impedir o envio do conteúdo do prompt

   Exclusão não é controle de criptografia.

**Concept:** Divulgação manual e escopo da exclusão

**Authored coaching hints:**

- Excluir o contexto automático decide se uma pessoa pode compartilhar o conteúdo?
- Qual aprovação separada é necessária antes de enviar dados confidenciais?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-221:6c80e4a7e383c5ee3e2e99cda6feaa8b049117d9c010c9474701e7aa1e266957 -->
## Question 221: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-221`

**Content revision:** `6c80e4a7e383c5ee3e2e99cda6feaa8b049117d9c010c9474701e7aa1e266957`

**en review revision:** `1c861910c369dc83c1c56afe782fd42f34616a64e079671306674f58f849f04e`
**es review revision:** `2ab1b2d533de3433931c8bfa2710c48b13d12bbca1f3de5b1a93528c855f5401`
**pt-BR review revision:** `48d1ac5bb71b6a623da3046db0a4056dcda17eae2d352286de53bcf39dd5a4c1`

### English

A team proposes putting a production API token in repository Copilot instructions so generated examples can authenticate. What should it do?

1. An inherited policy grants no repository access

   A private repository or file is not a substitute for secret handling.

2. Keep credentials in approved secret management **[CORRECT]**

   Instructions are project context, not a secure secret store; approved secret management is appropriate.

3. Content exclusion replaces repository permissions

   Encoding does not protect a committed secret.

4. A matching file becomes unreadable to every user

   Comments can still expose credentials and do not provide secret management.

**Concept:** Secrets in customization files

**Authored coaching hints:**

- What is the intended purpose of an instructions file?
- Where should production credentials be stored and provided securely?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo propone incluir un token de API de producción en instrucciones del repositorio para autenticar ejemplos generados. ¿Qué debería hacer?

1. Una política heredada no concede acceso al repositorio

   Un repositorio o archivo privado no reemplaza la gestión de secretos.

2. Guardar credenciales en el sistema aprobado de secretos **[CORRECT]**

   Las instrucciones aportan contexto al proyecto; no son un almacén seguro de secretos.

3. La exclusión de contenido sustituye permisos del repositorio

   Codificar no protege un secreto confirmado en el repositorio.

4. Un archivo coincidente se vuelve ilegible para todos

   Los comentarios también pueden exponer credenciales y no gestionan secretos.

**Concept:** Secretos en archivos de personalización

**Authored coaching hints:**

- ¿Cuál es la finalidad de un archivo de instrucciones?
- ¿Dónde se deben guardar y proporcionar credenciales de producción?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe propõe colocar um token de API de produção nas instruções do repositório para autenticar exemplos gerados. O que deve fazer?

1. Uma política herdada não concede acesso ao repositório

   Um repositório ou arquivo privado não substitui o tratamento adequado de segredos.

2. Manter credenciais no gerenciamento aprovado de segredos **[CORRECT]**

   Instruções fornecem contexto do projeto, não são um cofre seguro de segredos.

3. A exclusão de conteúdo substitui permissões do repositório

   Codificar não protege um segredo confirmado no repositório.

4. Um arquivo correspondente fica ilegível para todos

   Comentários também podem expor credenciais e não gerenciam segredos.

**Concept:** Segredos em arquivos de personalização

**Authored coaching hints:**

- Qual é a finalidade de um arquivo de instruções?
- Onde credenciais de produção devem ser armazenadas e fornecidas com segurança?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions>

<!-- certification-coach-question:copilot-222:a6c2c5919ef57a05cf75c1104024e0c9b986c37afc50e8de67da6da73ed18645 -->
## Question 222: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-222`

**Content revision:** `a6c2c5919ef57a05cf75c1104024e0c9b986c37afc50e8de67da6da73ed18645`

**en review revision:** `b7aaa56c5f96f0b6e08c1479857a646dee1d9b7b198ab4298b50355dee311b85`
**es review revision:** `7fcbf364f1bb49b520b6f2cac5037dabe54b04c9b0f8b1263ad15a2a89d16a3f`
**pt-BR review revision:** `4a6eb55071cbce4cc520c248138b96f4c9e0657a72b2b6eb2e01855d713e3c21`

### English

What does excluding a repository file from Copilot establish about human collaborator permissions?

1. The file becomes unreadable to every collaborator

   Exclusion does not change who can read repository content.

2. Only the repository owner can open the file

   The rule does not grant exclusive access to the owner.

3. Exclusion does not change repository permissions **[CORRECT]**

   Content exclusion governs Copilot context, not human repository authorization.

4. The file is removed from version control

   Exclusion does not delete or untrack the file.

**Concept:** Exclusion versus authorization

**Authored coaching hints:**

- Which policy controls human access?
- Does a Copilot context rule change repository permissions?

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué establece excluir un archivo del repositorio de Copilot sobre los permisos de las personas colaboradoras?

1. El archivo queda ilegible para todas las personas colaboradoras

   La exclusión no cambia quién puede leer el contenido del repositorio.

2. Solo la persona propietaria puede abrirlo

   La regla no concede acceso exclusivo a la persona propietaria.

3. La exclusión no cambia los permisos del repositorio **[CORRECT]**

   La exclusión de contenido rige el contexto de Copilot, no la autorización humana del repositorio.

4. El archivo se elimina del control de versiones

   La exclusión no elimina ni deja de rastrear el archivo.

**Concept:** Exclusión y autorización

**Authored coaching hints:**

- ¿Qué política controla el acceso humano?
- ¿Una regla de contexto de Copilot cambia los permisos del repositorio?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que excluir um arquivo do Copilot estabelece sobre as permissões de colaboradores humanos?

1. O arquivo fica ilegível para todos os colaboradores

   A exclusão não altera quem pode ler o conteúdo do repositório.

2. Somente o proprietário do repositório pode abri-lo

   A regra não concede acesso exclusivo ao proprietário.

3. A exclusão não altera as permissões do repositório **[CORRECT]**

   Exclusão de conteúdo rege o contexto do Copilot, não a autorização humana do repositório.

4. O arquivo é removido do controle de versão

   A exclusão não apaga nem deixa de rastrear o arquivo.

**Concept:** Exclusão versus autorização

**Authored coaching hints:**

- Qual política controla o acesso humano?
- Uma regra de contexto do Copilot altera as permissões do repositório?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-223:4ad5f531a9b89bfe6604d21cbda99642fb82d38bda300e8fbd6c8d5b39dfa628 -->
## Question 223: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-223`

**Content revision:** `4ad5f531a9b89bfe6604d21cbda99642fb82d38bda300e8fbd6c8d5b39dfa628`

**en review revision:** `e284d1cb7a897692c9c8698d06264b38a66c7c12435778e28a05b6f3286bce4d`
**es review revision:** `9c9e7cd03ae0118b010da9eb2ec234cfa38857d4a9ff124fc8ae58141d12fffe`
**pt-BR review revision:** `8d59794253210f93692f9fc04be98db08521d1349b9cb74118bebb28c8c71351`

### English

An excluded file is absent from Copilot code review. Which practice ensures the change still receives appropriate review?

1. The omission proves the file has no defects

   An omitted file has not been assessed, so absence of findings is not a clean result.

2. The exclusion prevents human reviewers from seeing the file

   Content exclusion does not restrict human reviewers' repository permissions.

3. The file is automatically approved by repository rules

   Exclusion is not an approval or branch-protection action.

4. Use the repository's required review process **[CORRECT]**

   An excluded file is omitted from Copilot code review, so route it through the repository's required human or other review controls.

**Concept:** Alternative review coverage for excluded files

**Authored coaching hints:**

- Which review process can still examine the change?
- Does omission from Copilot review count as approval?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un archivo excluido no aparece en Copilot code review. ¿Qué práctica garantiza que el cambio reciba una revisión adecuada?

1. La omisión demuestra que el archivo no tiene defectos

   Un archivo omitido no fue evaluado; la ausencia de hallazgos no indica que esté limpio.

2. La exclusión impide que las personas revisoras vean el archivo

   La exclusión no restringe los permisos de lectura de quienes revisan.

3. Las reglas del repositorio aprueban automáticamente el archivo

   La exclusión no es una aprobación ni una acción de protección de ramas.

4. Usar el proceso de revisión requerido por el repositorio **[CORRECT]**

   Los archivos excluidos no pasan por Copilot code review; inclúyelos en los controles humanos u otros que exige el repositorio.

**Concept:** Cobertura de revisión alternativa para archivos excluidos

**Authored coaching hints:**

- ¿Qué proceso de revisión aún puede examinar el cambio?
- ¿Omitirlo de la revisión de Copilot equivale a aprobarlo?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um arquivo excluído não aparece no Copilot code review. Qual prática garante que a alteração ainda receba revisão adequada?

1. A omissão prova que o arquivo não tem defeitos

   Um arquivo omitido não foi avaliado; ausência de achados não significa que esteja correto.

2. A exclusão impede revisores humanos de ver o arquivo

   A exclusão não restringe permissões de leitura de revisores humanos.

3. As regras do repositório aprovam o arquivo automaticamente

   Exclusão não é aprovação nem ação de proteção de branches.

4. Usar o processo de revisão exigido pelo repositório **[CORRECT]**

   Arquivos excluídos não passam pelo Copilot code review; encaminhe-os aos controles humanos ou outros exigidos pelo repositório.

**Concept:** Cobertura alternativa de revisão para arquivos excluídos

**Authored coaching hints:**

- Qual processo de revisão ainda pode examinar a alteração?
- A omissão da revisão do Copilot equivale a aprovação?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-224:4e0326ae6c48d1626a2e5bf41e764e75b22d18013ba197807e8987305fd63d9e -->
## Question 224: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-224`

**Content revision:** `4e0326ae6c48d1626a2e5bf41e764e75b22d18013ba197807e8987305fd63d9e`

**en review revision:** `4dd69aa4d59e4fb40fbed4a8f0421324516e01758effd963d3ec621c6a4d8deb`
**es review revision:** `2c9b2201ec6fda1f41dd97c3a9b22c42c5ffcbad299b19ed21026734e5dfdf9e`
**pt-BR review revision:** `103df9c8e835430712810e3761ecc8c5175856d3789dfdbfcd621e4ef813a94b`

### English

A support engineer must investigate an unexpected suggestion involving excluded content. Which diagnostic package minimizes disclosure?

1. Send a sanitized reproduction and configuration details **[CORRECT]**

   Minimal redacted evidence and precise configuration details support diagnosis while reducing disclosure.

2. A full chat transcript containing source and credentials

   A full transcript can reveal sensitive content and credentials.

3. A public link to the protected repository

   A public repository link would expose the project.

4. An unredacted screen recording of the developer's session

   An unredacted recording may contain secrets or personal data.

**Concept:** Privacy-safe diagnostics

**Authored coaching hints:**

- Which evidence is needed to reproduce the behavior?
- How can the report avoid exposing protected content?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona de soporte debe investigar una sugerencia inesperada relacionada con contenido excluido. ¿Qué paquete de diagnóstico minimiza la divulgación?

1. Enviar una reproducción saneada y detalles de configuración **[CORRECT]**

   La evidencia mínima saneada y los detalles de configuración ayudan a diagnosticar sin divulgar de más.

2. Una transcripción completa con código fuente y credenciales

   Una transcripción completa puede revelar contenido sensible y credenciales.

3. Un enlace público al repositorio protegido

   Un enlace público expondría el proyecto.

4. Una grabación sin censura de la sesión de la persona desarrolladora

   Una grabación sin censura podría contener secretos o datos personales.

**Concept:** Diagnóstico respetuoso de la privacidad

**Authored coaching hints:**

- ¿Qué evidencia se necesita para reproducir el comportamiento?
- ¿Cómo evitar que el informe exponga contenido protegido?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa de suporte precisa investigar uma sugestão inesperada relacionada a conteúdo excluído. Qual pacote de diagnóstico minimiza a divulgação?

1. Enviar uma reprodução sanitizada e detalhes de configuração **[CORRECT]**

   Evidência mínima sanitizada e detalhes de configuração apoiam o diagnóstico com menos divulgação.

2. Uma transcrição completa com código-fonte e credenciais

   Uma transcrição completa pode revelar conteúdo confidencial e credenciais.

3. Um link público para o repositório protegido

   Um link público exporia o projeto.

4. Uma gravação sem ocultação da sessão do desenvolvedor

   Uma gravação sem ocultação pode conter segredos ou dados pessoais.

**Concept:** Diagnóstico que preserva a privacidade

**Authored coaching hints:**

- Quais evidências são necessárias para reproduzir o comportamento?
- Como o relato pode evitar expor conteúdo protegido?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>

<!-- certification-coach-question:copilot-225:dac0e4aee22082598a67db1c8e49439ab328c82918b60d2b187646b1c150f073 -->
## Question 225: Configure privacy, content exclusions, and safeguards

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `copilot-225`

**Content revision:** `dac0e4aee22082598a67db1c8e49439ab328c82918b60d2b187646b1c150f073`

**en review revision:** `847f07cd569b72e88070a7271f2466d76b66823acf1ac691aa85f24b979792bb`
**es review revision:** `9f525a937d0df62464948cf0bf4d8a3550918acbceb1a596dc535923e7557652`
**pt-BR review revision:** `bc1f1afab84fef6fb59b9d58332f5f1a422ae2f7a21594652c3b749f352239c5`

### English

A rollout combines content exclusions, public-code matching controls, and human review. How should the team describe the result?

1. Guarantee that no sensitive data is processed

   No single safeguard establishes that sensitive data can never be processed.

2. Layered risk reduction with residual risk **[CORRECT]**

   Multiple safeguards can reduce different risks but do not eliminate every limitation or risk.

3. Replace repository ACLs and license review

   Exclusions do not replace repository authorization or rights assessment.

4. Prove safety across every Copilot surface

   Support and behavior can differ by surface, and human review remains necessary.

**Concept:** Layered safeguards and residual risk

**Authored coaching hints:**

- What risks does each control address, and what remains?
- Does a safeguard guarantee a result across all clients and workflows?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un despliegue combina exclusiones de contenido, controles de coincidencia con código público y revisión humana. ¿Cómo debería describir el equipo el resultado?

1. Garantizar que no se procese ningún dato confidencial

   Ninguna protección garantiza que nunca se procese información sensible.

2. Reducción de riesgos por capas, con riesgo residual **[CORRECT]**

   Varias protecciones reducen riesgos distintos, pero no eliminan todas las limitaciones o riesgos.

3. Reemplazar permisos del repositorio y revisión de licencias

   Las exclusiones no reemplazan la autorización del repositorio ni la evaluación de derechos.

4. Demostrar seguridad en todas las superficies de Copilot

   La compatibilidad y el comportamiento varían por superficie; la revisión humana sigue siendo necesaria.

**Concept:** Protecciones por capas y riesgo residual

**Authored coaching hints:**

- ¿Qué riesgo aborda cada control y qué queda pendiente?
- ¿Una protección garantiza el resultado en todos los clientes y flujos?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma implantação combina exclusões de conteúdo, controles de correspondência com código público e revisão humana. Como a equipe deve descrever o resultado?

1. Garantir que nenhum dado confidencial seja processado

   Nenhuma proteção garante que dados confidenciais nunca sejam processados.

2. Redução de riscos em camadas, com risco residual **[CORRECT]**

   Várias proteções reduzem riscos diferentes, mas não eliminam todas as limitações ou riscos.

3. Substituir permissões do repositório e revisão de licenças

   Exclusões não substituem autorização do repositório nem avaliação de direitos.

4. Comprovar segurança em todas as interfaces do Copilot

   Suporte e comportamento variam por interface; a revisão humana continua necessária.

**Concept:** Proteções em camadas e risco residual

**Authored coaching hints:**

- Qual risco cada controle aborda e o que permanece?
- Uma proteção garante o resultado em todos os clientes e fluxos de trabalho?

</details>

**Official supporting source:** <https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion>
