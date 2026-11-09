<!-- certification-coach-review:administration:2 -->
# GitHub Administration: human review packet

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

<!-- certification-coach-question:admin-001:505cc260829649c9cc6b517245fb2836353b2ba23429b4baa1e64658c281d3d0 -->
## Question 1: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-001`

**Content revision:** `505cc260829649c9cc6b517245fb2836353b2ba23429b4baa1e64658c281d3d0`

**en review revision:** `4b2a987096699bf37196737dc0f2d6d3e22b0693098ef17954e2a8a1ff93f7d6`
**es review revision:** `cbafd1944eb44e16e5b259992ae79a7a23b82623b574f264a1fbe524482ba38e`
**pt-BR review revision:** `2ee773a27de815c95de0b9424e25732329317b911953f0e2df10e6281af2d27b`

### English

What defines an Enterprise Managed Users account in GitHub Enterprise Cloud?

1. A personal account restricted by repository rulesets

   Rulesets govern repository activity, not account ownership.

2. An outside collaborator invited to selected repositories

   A repository invitation does not establish an IdP-managed identity.

3. An account provisioned and authenticated through the enterprise IdP **[CORRECT]**

   The IdP manages the managed account's lifecycle and authentication.

4. A personal account linked to an organization SAML identity

   SAML linking alone does not create a managed account.

**Concept:** Managed account ownership

**Authored coaching hints:**

- Separate ownership of an account from permission to use resources.
- Consider the boundary between enterprise and public collaboration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué define una cuenta de Enterprise Managed Users en GitHub Enterprise Cloud?

1. Una cuenta personal restringida por rulesets del repositorio

   Los rulesets regulan la actividad del repositorio, no la propiedad de la cuenta.

2. Un colaborador externo invitado a repositorios seleccionados

   Una invitación no establece una identidad administrada por el IdP.

3. Una cuenta aprovisionada y autenticada mediante el IdP empresarial **[CORRECT]**

   El IdP gestiona el ciclo de vida y la autenticación de la cuenta administrada.

4. Una cuenta personal vinculada a una identidad SAML de la organización

   La vinculación SAML por sí sola no crea una cuenta administrada.

**Concept:** Propiedad de las cuentas administradas

**Authored coaching hints:**

- Distingue la propiedad de una cuenta del permiso para usar recursos.
- Considera el límite entre la colaboración empresarial y la pública.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que define uma conta do Enterprise Managed Users no GitHub Enterprise Cloud?

1. Uma conta pessoal restrita por rulesets do repositório

   Rulesets regem a atividade do repositório, não a propriedade da conta.

2. Um colaborador externo convidado para repositórios selecionados

   Um convite não estabelece uma identidade gerenciada pelo IdP.

3. Uma conta provisionada e autenticada pelo IdP empresarial **[CORRECT]**

   O IdP gerencia o ciclo de vida e a autenticação da conta gerenciada.

4. Uma conta pessoal vinculada a uma identidade SAML da organização

   O vínculo SAML, por si só, não cria uma conta gerenciada.

**Concept:** Propriedade de contas gerenciadas

**Authored coaching hints:**

- Diferencie a propriedade da conta da permissão para usar recursos.
- Considere o limite entre colaboração empresarial e pública.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users>

<!-- certification-coach-question:admin-002:dbc81c4aca559a9737e675d184b8138a5bc56e62b9f5536feee0bcb531ef703c -->
## Question 2: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-002`

**Content revision:** `dbc81c4aca559a9737e675d184b8138a5bc56e62b9f5536feee0bcb531ef703c`

**en review revision:** `b055cf990f07cc4c010eae2ab91a11cfd8b3af5c481cd2e9ca997c55b8cb8e20`
**es review revision:** `450c199a591a9d0707e835f9cd560ba49b69aca5957cb8ef37116da9f493a8f0`
**pt-BR review revision:** `7d5020f098ed182b61167f5d178d7c9184ff35945efd1a12736cb4f95a41ae11`

### English

In a GitHub Enterprise Cloud enterprise with personal accounts, who creates and maintains each member's GitHub account?

1. The enterprise SCIM service

   Enterprise-level account provisioning is an EMU capability.

2. The organization's team maintainer

   Team maintenance does not include ownership of members' accounts.

3. The enterprise billing manager

   Billing authority does not include personal-account creation.

4. The individual user **[CORRECT]**

   Users own and maintain personal accounts even when SAML protects enterprise access.

**Concept:** Personal account responsibility

**Authored coaching hints:**

- Separate ownership of an account from permission to use resources.
- Consider the boundary between enterprise and public collaboration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una empresa de GitHub Enterprise Cloud con cuentas personales, ¿quién crea y mantiene la cuenta de GitHub de cada miembro?

1. El servicio SCIM de la empresa

   El aprovisionamiento de cuentas a nivel empresarial corresponde a EMU.

2. El responsable del equipo de la organización

   Gestionar un equipo no incluye ser propietario de las cuentas de sus miembros.

3. El administrador de facturación empresarial

   La autoridad de facturación no incluye crear cuentas personales.

4. El usuario individual **[CORRECT]**

   Cada usuario mantiene su cuenta personal aunque SAML proteja el acceso empresarial.

**Concept:** Responsabilidad sobre cuentas personales

**Authored coaching hints:**

- Distingue la propiedad de una cuenta del permiso para usar recursos.
- Considera el límite entre la colaboración empresarial y la pública.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma empresa do GitHub Enterprise Cloud com contas pessoais, quem cria e mantém a conta do GitHub de cada membro?

1. O serviço SCIM da empresa

   O provisionamento de contas no nível empresarial é um recurso do EMU.

2. O mantenedor da equipe da organização

   Gerenciar uma equipe não inclui ser proprietário das contas de seus membros.

3. O gerente de cobrança empresarial

   A autoridade de cobrança não inclui criar contas pessoais.

4. O próprio usuário **[CORRECT]**

   Cada usuário mantém sua conta pessoal mesmo quando o SAML protege o acesso empresarial.

**Concept:** Responsabilidade por contas pessoais

**Authored coaching hints:**

- Diferencie a propriedade da conta da permissão para usar recursos.
- Considere o limite entre colaboração empresarial e pública.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type>

<!-- certification-coach-question:admin-003:d45ae53ced257fadcb8bf8e06e8b5969c2b1c9d71d9ba5abf5da1c693daf262c -->
## Question 3: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-003`

**Content revision:** `d45ae53ced257fadcb8bf8e06e8b5969c2b1c9d71d9ba5abf5da1c693daf262c`

**en review revision:** `9d7b7352f2eff374ad350ce1c1ae4f4636b805eadc328ba3bfdd77e1012b1525`
**es review revision:** `6943c23d8f484bdcba3ead600445cba3dd68aa214226ed9092e1cba1c23d895b`
**pt-BR review revision:** `a83fb89ccf4dd88f2f6db4012e2d8fadaa434a7e5da0c252a62fc4ddc464599a`

### English

What does SAML SSO add for personal accounts accessing a protected GitHub Enterprise Cloud organization?

1. Authentication against the organization's external IdP **[CORRECT]**

   SAML adds an external authentication requirement for protected resources.

2. Automatic provisioning of new personal accounts

   SAML authentication is not an account-provisioning service.

3. Automatic assignment of repository Admin access

   Repository authorization is separate from SAML authentication.

4. Replacement of GitHub account sign-in

   Personal-account sign-in remains required.

**Concept:** SAML authentication scope

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué añade SAML SSO a las cuentas personales que acceden a una organización protegida de GitHub Enterprise Cloud?

1. Autenticación con el IdP externo de la organización **[CORRECT]**

   SAML añade autenticación externa para los recursos protegidos.

2. Aprovisionamiento automático de cuentas personales nuevas

   La autenticación SAML no aprovisiona cuentas.

3. Asignación automática del acceso Admin al repositorio

   La autorización del repositorio es independiente de SAML.

4. Sustitución del inicio de sesión de la cuenta de GitHub

   Se mantiene el inicio de sesión de la cuenta personal.

**Concept:** Ámbito de autenticación SAML

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que o SAML SSO acrescenta para contas pessoais que acessam uma organização protegida do GitHub Enterprise Cloud?

1. Autenticação no IdP externo da organização **[CORRECT]**

   O SAML acrescenta autenticação externa para recursos protegidos.

2. Provisionamento automático de novas contas pessoais

   A autenticação SAML não provisiona contas.

3. Atribuição automática de acesso Admin ao repositório

   A autorização do repositório é independente do SAML.

4. Substituição do login da conta do GitHub

   O login da conta pessoal continua necessário.

**Concept:** Escopo da autenticação SAML

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-004:d81462c0b5b9453e6b536ecdab57ac901d70fe1b9a3394043cdd40cb6fbedbef -->
## Question 4: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-004`

**Content revision:** `d81462c0b5b9453e6b536ecdab57ac901d70fe1b9a3394043cdd40cb6fbedbef`

**en review revision:** `0218432b8a0326bc66cd83aa1aa4f301af519f92b2fbc52b9250f295439688b9`
**es review revision:** `066404c64b37aeebbb4155b744fcd54b186d1918adbd6202807f3f1900fed7f5`
**pt-BR review revision:** `a717fe45169c3e2007f2669eefc3a2efce81938ce5d60e994262192a227e7469`

### English

Which protocol provisions and updates managed user accounts for GitHub Enterprise Cloud?

1. SSH

   SSH authenticates connections, not account provisioning.

2. SCIM **[CORRECT]**

   SCIM supplies account-lifecycle provisioning.

3. SAML

   SAML handles federated authentication.

4. WebAuthn

   WebAuthn supports public-key authentication.

**Concept:** Identity provisioning protocol

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué protocolo aprovisiona y actualiza cuentas de usuario administradas en GitHub Enterprise Cloud?

1. SSH

   SSH autentica conexiones, no aprovisiona cuentas.

2. SCIM **[CORRECT]**

   SCIM proporciona el aprovisionamiento del ciclo de vida de las cuentas.

3. SAML

   SAML se ocupa de la autenticación federada.

4. WebAuthn

   WebAuthn admite autenticación con claves públicas.

**Concept:** Protocolo de aprovisionamiento

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual protocolo provisiona e atualiza contas de usuário gerenciadas no GitHub Enterprise Cloud?

1. SSH

   O SSH autentica conexões, não provisiona contas.

2. SCIM **[CORRECT]**

   O SCIM fornece provisionamento do ciclo de vida das contas.

3. SAML

   O SAML trata da autenticação federada.

4. WebAuthn

   O WebAuthn oferece autenticação com chaves públicas.

**Concept:** Protocolo de provisionamento

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users>

<!-- certification-coach-question:admin-005:c1273784b5f37043b1a0be83d50b7fc6791403a74c4653c4426dfd3b0a2b22da -->
## Question 5: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-005`

**Content revision:** `c1273784b5f37043b1a0be83d50b7fc6791403a74c4653c4426dfd3b0a2b22da`

**en review revision:** `01d1e25fb82e3ebd0e27264c991c5cd76b18877e39e29c7ba47db31744321b25`
**es review revision:** `58d547a569b620f7f854b33b8db296a1b90b4771c48983eda36095c5cffa0d2b`
**pt-BR review revision:** `59b32b804ce27d2ee8c45dda884173623f867964b07ea228407435538df63615`

### English

For personal accounts on GitHub Enterprise Cloud, what is the primary purpose of team synchronization?

1. Set repository roles directly in the IdP

   Repository access for the team is configured on GitHub.

2. Replace the organization's SAML authentication

   It complements rather than replaces SAML.

3. Reflect IdP group membership in a GitHub team **[CORRECT]**

   Team synchronization updates team membership from connected IdP groups.

4. Create personal accounts for all IdP users

   It is not a personal-account provisioning service.

**Concept:** Team synchronization purpose

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para cuentas personales en GitHub Enterprise Cloud, ¿cuál es la finalidad principal de la sincronización de equipos?

1. Establecer roles de repositorio directamente en el IdP

   El acceso del equipo al repositorio se configura en GitHub.

2. Sustituir la autenticación SAML de la organización

   Complementa SAML en vez de sustituirlo.

3. Reflejar la pertenencia a grupos del IdP en un equipo de GitHub **[CORRECT]**

   La sincronización actualiza los miembros del equipo desde los grupos vinculados.

4. Crear cuentas personales para todos los usuarios del IdP

   No es un servicio de aprovisionamiento de cuentas personales.

**Concept:** Finalidad de la sincronización de equipos

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para contas pessoais no GitHub Enterprise Cloud, qual é a principal finalidade da sincronização de equipes?

1. Definir funções de repositório diretamente no IdP

   O acesso da equipe ao repositório é configurado no GitHub.

2. Substituir a autenticação SAML da organização

   Ela complementa o SAML em vez de substituí-lo.

3. Refletir a associação a grupos do IdP em uma equipe do GitHub **[CORRECT]**

   A sincronização atualiza os membros da equipe a partir dos grupos vinculados.

4. Criar contas pessoais para todos os usuários do IdP

   Não é um serviço de provisionamento de contas pessoais.

**Concept:** Finalidade da sincronização de equipes

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group>

<!-- certification-coach-question:admin-006:cc1340d3886db63b73af39a4385528fbefc5ca93ffdc126bb1921cfa2d62e06d -->
## Question 6: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-006`

**Content revision:** `cc1340d3886db63b73af39a4385528fbefc5ca93ffdc126bb1921cfa2d62e06d`

**en review revision:** `abd672908600199eddf27db48c571c7cfa2d76e59b9d71615fba6ed0f45ebc17`
**es review revision:** `76ddb8620e8b3034f8350f8c3ee06abc70dfd3d83102a06e52410a3fe98e67a5`
**pt-BR review revision:** `c129e9ac99f928ccb5f7473ed5bad48726a628f8834e4b54d0ba491fec3a4783`

### English

Which partner IdP supports OIDC authentication for Enterprise Managed Users?

1. Okta

   Okta's partner EMU authentication integration uses SAML.

2. PingFederate

   PingFederate is not the documented EMU OIDC partner.

3. OneLogin

   OneLogin is not the documented EMU OIDC partner.

4. Microsoft Entra ID **[CORRECT]**

   Microsoft Entra ID supports the documented EMU OIDC integration.

**Concept:** EMU OIDC provider

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué IdP asociado admite autenticación OIDC para Enterprise Managed Users?

1. Okta

   La integración de autenticación de Okta para EMU utiliza SAML.

2. PingFederate

   PingFederate no es el IdP asociado documentado para OIDC de EMU.

3. OneLogin

   OneLogin no es el IdP asociado documentado para OIDC de EMU.

4. Microsoft Entra ID **[CORRECT]**

   Microsoft Entra ID admite la integración OIDC documentada de EMU.

**Concept:** Proveedor OIDC para EMU

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual IdP parceiro oferece autenticação OIDC para Enterprise Managed Users?

1. Okta

   A integração de autenticação do Okta para EMU utiliza SAML.

2. PingFederate

   PingFederate não é o IdP parceiro documentado para OIDC do EMU.

3. OneLogin

   OneLogin não é o IdP parceiro documentado para OIDC do EMU.

4. Microsoft Entra ID **[CORRECT]**

   O Microsoft Entra ID oferece a integração OIDC documentada do EMU.

**Concept:** Provedor OIDC para EMU

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users>

<!-- certification-coach-question:admin-007:8b87353a93099faae9c1f866c2195fa208405105d185d12dbcf6822ed3619176 -->
## Question 7: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-007`

**Content revision:** `8b87353a93099faae9c1f866c2195fa208405105d185d12dbcf6822ed3619176`

**en review revision:** `a618094902cccc0bbb948caf47d22cf534f9a94f46b093f21856db5e9ed281c4`
**es review revision:** `0dd052a3cd90f34145732be63533910c159351c42dea908064d82bbbeed7010e`
**pt-BR review revision:** `3c05bfa3bac7f2172c2041714d7c830110533643b64317e3811a05e0c5f4f5df`

### English

Which identity design follows GitHub's recommended partner integration for EMU authentication and provisioning?

1. Use one partner IdP for both functions **[CORRECT]**

   A single partner IdP provides the documented paved-path integration.

2. Use Okta for SSO and Microsoft Entra ID for SCIM

   This mixed-provider combination is explicitly unsupported.

3. Use Microsoft Entra ID for SSO and Okta for SCIM

   The reverse mixed-provider combination is also unsupported.

4. Use SAML alone for both functions

   SAML alone does not provide lifecycle provisioning.

**Concept:** Supported EMU integration

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué diseño de identidad sigue la integración asociada recomendada por GitHub para autenticar y aprovisionar EMU?

1. Usar un único IdP asociado para ambas funciones **[CORRECT]**

   Un único IdP asociado proporciona la integración recomendada y documentada.

2. Usar Okta para SSO y Microsoft Entra ID para SCIM

   Esta combinación de proveedores no se admite expresamente.

3. Usar Microsoft Entra ID para SSO y Okta para SCIM

   La combinación inversa tampoco se admite.

4. Usar solo SAML para ambas funciones

   SAML por sí solo no aprovisiona el ciclo de vida.

**Concept:** Integración EMU admitida

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual projeto de identidade segue a integração parceira recomendada pelo GitHub para autenticação e provisionamento do EMU?

1. Usar um único IdP parceiro para ambas as funções **[CORRECT]**

   Um único IdP parceiro fornece a integração recomendada e documentada.

2. Usar Okta para SSO e Microsoft Entra ID para SCIM

   Essa combinação de provedores é explicitamente incompatível.

3. Usar Microsoft Entra ID para SSO e Okta para SCIM

   A combinação inversa também não é compatível.

4. Usar apenas SAML para ambas as funções

   O SAML sozinho não provisiona o ciclo de vida.

**Concept:** Integração EMU compatível

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users>

<!-- certification-coach-question:admin-008:cbcdee64bed355c92b3213c343cadfaba5ba3cab59f85ab0b3b4af073f3b9b96 -->
## Question 8: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-008`

**Content revision:** `cbcdee64bed355c92b3213c343cadfaba5ba3cab59f85ab0b3b4af073f3b9b96`

**en review revision:** `ab32f004f619efb04b9ad5b9a20a255a35412e3df50fd26bbb0ed5f80acb5939`
**es review revision:** `4093408f8010d9995dac46d390c802c44ee23bbe3e994ea3ee16a3727ba3c334`
**pt-BR review revision:** `7e5e275ba4a4017fcb13c4227d4e3c226593d4db34154b64d041c8286c4a83be`

### English

In GitHub Enterprise Cloud's English SAML configuration, what belongs in Public Certificate?

1. A repository's TLS client certificate

   A repository client certificate does not verify the IdP's SAML signatures.

2. The IdP's public certificate for verifying SAML responses **[CORRECT]**

   GitHub uses the public certificate to verify signed SAML responses.

3. The IdP's private signing key

   The IdP must retain its private signing key.

4. A member's personal SSH public key

   A user's SSH key authenticates Git connections.

**Concept:** SAML response verification

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la configuración SAML en inglés de GitHub Enterprise Cloud, ¿qué se introduce en Public Certificate?

1. Un certificado de cliente TLS del repositorio

   Un certificado de cliente del repositorio no verifica las firmas SAML del IdP.

2. El certificado público del IdP para verificar respuestas SAML **[CORRECT]**

   GitHub usa el certificado público para verificar las respuestas SAML firmadas.

3. La clave privada de firma del IdP

   El IdP debe conservar su clave privada de firma.

4. La clave pública SSH personal de un miembro

   La clave SSH del usuario autentica conexiones Git.

**Concept:** Verificación de respuestas SAML

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na configuração SAML em inglês do GitHub Enterprise Cloud, o que deve ser inserido em Public Certificate?

1. Um certificado de cliente TLS do repositório

   Um certificado de cliente do repositório não verifica as assinaturas SAML do IdP.

2. O certificado público do IdP para verificar respostas SAML **[CORRECT]**

   O GitHub usa o certificado público para verificar respostas SAML assinadas.

3. A chave privada de assinatura do IdP

   O IdP deve manter sua chave privada de assinatura.

4. A chave pública SSH pessoal de um membro

   A chave SSH do usuário autentica conexões Git.

**Concept:** Verificação de respostas SAML

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-009:e39f4e34d6d09784da9d6a87e938ccd113c049dd4eda6f710743104afe0437fc -->
## Question 9: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-009`

**Content revision:** `e39f4e34d6d09784da9d6a87e938ccd113c049dd4eda6f710743104afe0437fc`

**en review revision:** `601c0319e96121ce22af637b3d7bea26f379e5a1f5f32dcc07d5e2e003d5b8a5`
**es review revision:** `dfd7add545d6684338041610147c4137db2a938d8efdf3dc775cc3acecdda6dc`
**pt-BR review revision:** `39d014a40ae41be158cfceab6124f22a7881933bd0a27f6c073a6d2db6c2eb83`

### English

When configuring enterprise SAML for personal accounts in GitHub Enterprise Cloud, what is the Sign on URL?

1. The IdP's issuer identifier rather than its login endpoint

   The issuer identifies the sender and is configured separately.

2. The enterprise's ordinary GitHub home page

   The enterprise home page is not the IdP's authentication endpoint.

3. The IdP's HTTPS endpoint for SSO requests **[CORRECT]**

   This field directs authentication requests to the IdP.

4. GitHub's assertion consumer service endpoint

   The assertion consumer service receives responses at GitHub rather than sign-in requests at the IdP.

**Concept:** SAML endpoint configuration

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Al configurar SAML empresarial para cuentas personales en GitHub Enterprise Cloud, ¿qué es Sign on URL?

1. El identificador del emisor del IdP en vez de su punto de acceso

   El emisor identifica al remitente y se configura por separado.

2. La página principal habitual de la empresa en GitHub

   La página empresarial no es el punto de autenticación del IdP.

3. El punto de conexión HTTPS del IdP para solicitudes SSO **[CORRECT]**

   Este campo dirige las solicitudes de autenticación al IdP.

4. El punto de conexión del servicio consumidor de aserciones de GitHub

   El servicio consumidor recibe respuestas en GitHub, no solicitudes de acceso en el IdP.

**Concept:** Configuración del punto de conexión SAML

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Ao configurar SAML empresarial para contas pessoais no GitHub Enterprise Cloud, o que é Sign on URL?

1. O identificador do emissor do IdP em vez do seu endpoint de login

   O emissor identifica o remetente e é configurado separadamente.

2. A página inicial habitual da empresa no GitHub

   A página empresarial não é o endpoint de autenticação do IdP.

3. O endpoint HTTPS do IdP para solicitações SSO **[CORRECT]**

   Esse campo direciona as solicitações de autenticação ao IdP.

4. O endpoint do serviço consumidor de asserções do GitHub

   O serviço consumidor recebe respostas no GitHub, não solicitações de login no IdP.

**Concept:** Configuração do endpoint SAML

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-010:f1e52beeab19229a3a79596a1bc182ecdbcaa56594122fa3fb8b767d7bccf60f -->
## Question 10: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-010`

**Content revision:** `f1e52beeab19229a3a79596a1bc182ecdbcaa56594122fa3fb8b767d7bccf60f`

**en review revision:** `370da2e73a22553438ad313d36dcd595690f1ace12d3367db585dcebe2944b06`
**es review revision:** `b31ff3e74c25e7d69920c239327a3fd685f1583e8fc8d9b954f6a8117196efe3`
**pt-BR review revision:** `cd572ff6f9b3aa57d28ecee5ff51d6311fcef7c7d6bf6e5ac12471a49647271d`

### English

Which description distinguishes two-factor authentication from signing in with a password alone?

1. It grants an additional repository role

   Authentication factors do not grant repository roles.

2. It provisions a second GitHub account

   2FA does not create accounts.

3. It creates an additional organization membership

   2FA does not assign organization membership.

4. It requires an additional authentication factor **[CORRECT]**

   2FA adds another factor to verify account access.

**Concept:** Authentication factors

**Authored coaching hints:**

- Separate proof of identity from access to a particular resource.
- Check whether the question concerns a personal account or enterprise access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué distingue la autenticación de dos factores del inicio de sesión solo con contraseña?

1. Concede un rol de repositorio adicional

   Los factores no conceden roles de repositorio.

2. Aprovisiona una segunda cuenta de GitHub

   2FA no crea cuentas.

3. Crea una pertenencia adicional a una organización

   2FA no asigna pertenencia a organizaciones.

4. Exige un factor de autenticación adicional **[CORRECT]**

   2FA añade otro factor para verificar el acceso a la cuenta.

**Concept:** Factores de autenticación

**Authored coaching hints:**

- Distingue la prueba de identidad del acceso a un recurso concreto.
- Comprueba si se trata de una cuenta personal o del acceso empresarial.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que diferencia a autenticação de dois fatores do login apenas com senha?

1. Concede uma função adicional no repositório

   Fatores de autenticação não concedem funções no repositório.

2. Provisiona uma segunda conta do GitHub

   A 2FA não cria contas.

3. Cria uma associação adicional a uma organização

   A 2FA não atribui associação a organizações.

4. Exige um fator adicional de autenticação **[CORRECT]**

   A 2FA acrescenta outro fator para verificar o acesso à conta.

**Concept:** Fatores de autenticação

**Authored coaching hints:**

- Diferencie a comprovação de identidade do acesso a um recurso específico.
- Verifique se a questão trata de uma conta pessoal ou do acesso empresarial.

</details>

**Official supporting source:** <https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication>

<!-- certification-coach-question:admin-011:edc573f36d58d72adb7520514161e31c2919bc378da855d0bb389dcd9030e5c1 -->
## Question 11: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-011`

**Content revision:** `edc573f36d58d72adb7520514161e31c2919bc378da855d0bb389dcd9030e5c1`

**en review revision:** `10805dbdd5998b8352a3db88a312f49d7e31b2d754ab2dcdf7d09e40c560ba95`
**es review revision:** `37051dc7a6416d0fbf5f37fa483b8ad339f63c1e3025089ae8e38cfecde7ee4f`
**pt-BR review revision:** `d00eb5eea885e5375d29c34120f6925a1de51f403828f21cd457fe3b619f33fb`

### English

For a personal account on GitHub.com, what can a passkey satisfy in a single sign-in step?

1. Both the password and 2FA requirements **[CORRECT]**

   A passkey can satisfy both account password and 2FA requirements.

2. Only the organization's SAML requirement

   An account passkey does not replace organization SAML.

3. Only the password requirement

   Passkeys can meet 2FA as well as password requirements.

4. Only the repository authorization requirement

   Repository permissions remain separate from account authentication.

**Concept:** Passkey sign-in

**Authored coaching hints:**

- Separate proof of identity from access to a particular resource.
- Check whether the question concerns a personal account or enterprise access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una cuenta personal de GitHub.com, ¿qué puede satisfacer una passkey en un solo paso de inicio de sesión?

1. Los requisitos de contraseña y 2FA **[CORRECT]**

   Una passkey puede satisfacer tanto la contraseña como 2FA.

2. Solo el requisito SAML de la organización

   La passkey de la cuenta no sustituye SAML de la organización.

3. Solo el requisito de contraseña

   Las passkeys pueden cumplir 2FA además del requisito de contraseña.

4. Solo el requisito de autorización del repositorio

   Los permisos del repositorio siguen separados de la autenticación.

**Concept:** Inicio de sesión con passkey

**Authored coaching hints:**

- Distingue la prueba de identidad del acceso a un recurso concreto.
- Comprueba si se trata de una cuenta personal o del acceso empresarial.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para uma conta pessoal no GitHub.com, o que uma passkey pode atender em uma única etapa de login?

1. Os requisitos de senha e 2FA **[CORRECT]**

   Uma passkey pode atender aos requisitos de senha e 2FA.

2. Apenas o requisito SAML da organização

   A passkey da conta não substitui o SAML da organização.

3. Apenas o requisito de senha

   Passkeys podem atender à 2FA e ao requisito de senha.

4. Apenas o requisito de autorização do repositório

   As permissões do repositório continuam separadas da autenticação.

**Concept:** Login com passkey

**Authored coaching hints:**

- Diferencie a comprovação de identidade do acesso a um recurso específico.
- Verifique se a questão trata de uma conta pessoal ou do acesso empresarial.

</details>

**Official supporting source:** <https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication>

<!-- certification-coach-question:admin-012:130be1a40d1788d63ef20a06d847e1849cdf224890af06080e700563f0bbd85d -->
## Question 12: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-012`

**Content revision:** `130be1a40d1788d63ef20a06d847e1849cdf224890af06080e700563f0bbd85d`

**en review revision:** `b38b7aca63f5c05f3daaa4f45c8bc7bb220c141edb2fe47c821fd53525aacea1`
**es review revision:** `2042939250cec883fa0a3fd05a8fbc79ed61345dc26694a055a997e555b6c949`
**pt-BR review revision:** `3ac01682623b5c014effc3f597ef4817b1deff97446e557d07fb2af8a2546903`

### English

A GitHub.com personal-account user loses their 2FA device but has saved recovery codes. Which credential supports recovery?

1. The enterprise's license file

   A license file cannot prove possession of a personal account.

2. An unused 2FA recovery code **[CORRECT]**

   Saved recovery codes provide a documented recovery method.

3. The organization's SAML signing certificate

   An IdP certificate cannot recover personal-account 2FA.

4. The repository's CODEOWNERS file

   Code ownership is unrelated to account recovery.

**Concept:** Account recovery preparation

**Authored coaching hints:**

- Separate proof of identity from access to a particular resource.
- Check whether the question concerns a personal account or enterprise access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un usuario de cuenta personal de GitHub.com pierde su dispositivo 2FA, pero conserva códigos de recuperación. ¿Qué credencial permite recuperar el acceso?

1. El archivo de licencia de la empresa

   Un archivo de licencia no demuestra posesión de la cuenta.

2. Un código de recuperación 2FA sin usar **[CORRECT]**

   Los códigos guardados son un método de recuperación documentado.

3. El certificado de firma SAML de la organización

   Un certificado del IdP no recupera 2FA de una cuenta personal.

4. El archivo CODEOWNERS del repositorio

   La propiedad del código no interviene en la recuperación de cuentas.

**Concept:** Preparación para recuperar cuentas

**Authored coaching hints:**

- Distingue la prueba de identidad del acceso a un recurso concreto.
- Comprueba si se trata de una cuenta personal o del acceso empresarial.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um usuário de conta pessoal do GitHub.com perde seu dispositivo 2FA, mas guardou códigos de recuperação. Qual credencial permite recuperar o acesso?

1. O arquivo de licença da empresa

   Um arquivo de licença não comprova posse da conta.

2. Um código de recuperação 2FA não utilizado **[CORRECT]**

   Os códigos salvos são um método documentado de recuperação.

3. O certificado de assinatura SAML da organização

   Um certificado do IdP não recupera a 2FA de uma conta pessoal.

4. O arquivo CODEOWNERS do repositório

   A propriedade do código não participa da recuperação de contas.

**Concept:** Preparação para recuperar contas

**Authored coaching hints:**

- Diferencie a comprovação de identidade do acesso a um recurso específico.
- Verifique se a questão trata de uma conta pessoal ou do acesso empresarial.

</details>

**Official supporting source:** <https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication>

<!-- certification-coach-question:admin-013:159a0a6d4f073938bd90c7f1fe5e0aad45dceb3d74988ff8c2fa2e24733b18d7 -->
## Question 13: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-013`

**Content revision:** `159a0a6d4f073938bd90c7f1fe5e0aad45dceb3d74988ff8c2fa2e24733b18d7`

**en review revision:** `f34612ba3614ab98d144e5a4ff4fe2e7b7369ddd36736cdb5828ebe47f9ec702`
**es review revision:** `5e90defe24f8008a1bc058c12f81d5a403519844bf1a4f24f386022680547974`
**pt-BR review revision:** `093a6fada2a20ef652b6edc2455d649708c1189584679bbafbc72366f4bdd559`

### English

As a GitHub Enterprise Cloud organization owner using the English UI, where do you require 2FA for personal accounts?

1. Repository Settings → Rules → Rulesets

   Rulesets govern repository contributions, not account 2FA.

2. Enterprise People → Enterprise teams

   Enterprise teams manages groups rather than the organization's 2FA setting.

3. Organization Settings → Authentication security **[CORRECT]**

   Authentication security contains the organization's 2FA requirement.

4. Organization Settings → Member privileges

   Member privileges controls organization member capabilities.

**Concept:** Organization 2FA navigation

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Como propietario de una organización de GitHub Enterprise Cloud con interfaz en inglés, ¿dónde exiges 2FA para cuentas personales?

1. Repository Settings → Rules → Rulesets

   Los rulesets regulan contribuciones, no 2FA de las cuentas.

2. Enterprise People → Enterprise teams

   Enterprise teams gestiona grupos, no el ajuste 2FA de la organización.

3. Organization Settings → Authentication security **[CORRECT]**

   Authentication security contiene el requisito 2FA de la organización.

4. Organization Settings → Member privileges

   Member privileges controla las capacidades de los miembros.

**Concept:** Navegación a 2FA de la organización

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como proprietário de uma organização do GitHub Enterprise Cloud na interface em inglês, onde você exige 2FA para contas pessoais?

1. Repository Settings → Rules → Rulesets

   Rulesets regem contribuições, não a 2FA das contas.

2. Enterprise People → Enterprise teams

   Enterprise teams gerencia grupos, não a configuração de 2FA da organização.

3. Organization Settings → Authentication security **[CORRECT]**

   Authentication security contém o requisito de 2FA da organização.

4. Organization Settings → Member privileges

   Member privileges controla as capacidades dos membros.

**Concept:** Navegação para 2FA da organização

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization>

<!-- certification-coach-question:admin-014:94889bb51b3480319932be278884d721b5a69e04b1135dad38c745c919493e34 -->
## Question 14: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-014`

**Content revision:** `94889bb51b3480319932be278884d721b5a69e04b1135dad38c745c919493e34`

**en review revision:** `86fc552a0f3ada2104e28f92fc5069fc6c971673c1a79cdc1c6acf20bf6ebb6c`
**es review revision:** `5c2ad3178b28ddbd95acbf3325653ce94c27899c87b5998458afaec3efe5462d`
**pt-BR review revision:** `6916481316852986a47ddff90cfcd7c7f6310506cf78bf9d03e3fa5cf3320d08`

### English

An enterprise owner is configuring enterprise-wide SAML for personal accounts in GitHub Enterprise Cloud's English UI. Which section contains Require SAML authentication?

1. Enterprise People → Enterprise teams

   Enterprise teams contains team administration.

2. Organization Settings → Member privileges

   Member privileges governs organization permissions.

3. Repository Settings → Collaborators &amp; teams

   Repository access settings do not configure enterprise authentication.

4. Enterprise Settings → Authentication security **[CORRECT]**

   Enterprise Authentication security contains the enterprise SAML requirement.

**Concept:** Enterprise SAML navigation

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario empresarial configura SAML para toda la empresa con cuentas personales en la interfaz inglesa de GitHub Enterprise Cloud. ¿Qué sección contiene Require SAML authentication?

1. Enterprise People → Enterprise teams

   Enterprise teams contiene la administración de equipos.

2. Organization Settings → Member privileges

   Member privileges regula permisos de la organización.

3. Repository Settings → Collaborators &amp; teams

   Los ajustes de acceso del repositorio no configuran la autenticación empresarial.

4. Enterprise Settings → Authentication security **[CORRECT]**

   Authentication security empresarial contiene el requisito SAML de la empresa.

**Concept:** Navegación a SAML empresarial

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário empresarial configura SAML para toda a empresa com contas pessoais na interface em inglês do GitHub Enterprise Cloud. Qual seção contém Require SAML authentication?

1. Enterprise People → Enterprise teams

   Enterprise teams contém a administração de equipes.

2. Organization Settings → Member privileges

   Member privileges rege permissões da organização.

3. Repository Settings → Collaborators &amp; teams

   As configurações de acesso do repositório não definem autenticação empresarial.

4. Enterprise Settings → Authentication security **[CORRECT]**

   Authentication security empresarial contém o requisito SAML da empresa.

**Concept:** Navegação para SAML empresarial

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-015:3dffbcb4a3ffc4c5f73932df5f4c9342e3163d3521f7997ad83736f9e6237e6b -->
## Question 15: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-015`

**Content revision:** `3dffbcb4a3ffc4c5f73932df5f4c9342e3163d3521f7997ad83736f9e6237e6b`

**en review revision:** `0adc8948379ac7818300ad4d6c03c0356c222b90ed0e42925d45ace43e01bd6b`
**es review revision:** `23e2f85c517dda17a4323d5804e11910c937377cc3e1ea79e54d1302dc4007d9`
**pt-BR review revision:** `cc1c465cbba7c51b963d213d179b37914ea50d360f14b8a86dd4fcf096a82d23`

### English

Which SCIM configuration is available for a GitHub Enterprise Cloud enterprise that uses personal accounts rather than EMU?

1. Organization-level SCIM with organization-level SAML **[CORRECT]**

   For personal accounts, SCIM provisions organization access with organization-level SAML.

2. Enterprise-level SCIM with enterprise-level SAML

   Enterprise-level SCIM account provisioning requires EMU.

3. Enterprise-level SCIM without SAML

   Removing SAML does not enable enterprise SCIM for personal accounts.

4. Organization-level SCIM that creates managed accounts

   Organization SCIM does not turn personal accounts into managed accounts.

**Concept:** SCIM scope for personal accounts

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué configuración SCIM está disponible en una empresa de GitHub Enterprise Cloud que usa cuentas personales en vez de EMU?

1. SCIM de organización con SAML de organización **[CORRECT]**

   Para cuentas personales, SCIM aprovisiona acceso a la organización con SAML de ese nivel.

2. SCIM empresarial con SAML empresarial

   Aprovisionar cuentas con SCIM empresarial requiere EMU.

3. SCIM empresarial sin SAML

   Quitar SAML no habilita SCIM empresarial para cuentas personales.

4. SCIM de organización que crea cuentas administradas

   SCIM de organización no convierte cuentas personales en administradas.

**Concept:** Ámbito SCIM para cuentas personales

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração SCIM está disponível em uma empresa do GitHub Enterprise Cloud que usa contas pessoais em vez de EMU?

1. SCIM da organização com SAML da organização **[CORRECT]**

   Para contas pessoais, o SCIM provisiona acesso à organização com SAML nesse nível.

2. SCIM empresarial com SAML empresarial

   Provisionar contas com SCIM empresarial exige EMU.

3. SCIM empresarial sem SAML

   Remover SAML não habilita SCIM empresarial para contas pessoais.

4. SCIM da organização que cria contas gerenciadas

   O SCIM da organização não converte contas pessoais em gerenciadas.

**Concept:** Escopo SCIM para contas pessoais

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-016:b19d95132b1adb9425f88ab6ebc15667611195e6f1a8190a957e1d66c909d98b -->
## Question 16: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-016`

**Content revision:** `b19d95132b1adb9425f88ab6ebc15667611195e6f1a8190a957e1d66c909d98b`

**en review revision:** `533b6ff5efe5967052eb15d7ccbd8b2afd70771bffe496feed053aee8261396d`
**es review revision:** `ead1f2c24ce452b7eb3f590bc0494c791138c497d859f977a2d025185cd0839d`
**pt-BR review revision:** `7af490bb562f635fe909007c9f839283c4bd9efd0763e10c52e1c0b102b48fb3`

### English

Where is a managed user's profile email maintained for Enterprise Managed Users?

1. In the team's repository permissions

   Team permissions control access, not identity profile attributes.

2. In the identity provider **[CORRECT]**

   The IdP supplies managed-user profile names and email addresses.

3. In the user's GitHub personal settings

   Managed users cannot change their profile email on GitHub.

4. In the repository's contributor settings

   Contributor settings do not own managed-user profile data.

**Concept:** Managed profile attributes

**Authored coaching hints:**

- Separate ownership of an account from permission to use resources.
- Consider the boundary between enterprise and public collaboration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde se mantiene el correo del perfil de un usuario de Enterprise Managed Users?

1. En los permisos de repositorio del equipo

   Los permisos del equipo controlan acceso, no atributos de identidad.

2. En el proveedor de identidad **[CORRECT]**

   El IdP proporciona los nombres y correos de los perfiles administrados.

3. En los ajustes personales de GitHub del usuario

   Los usuarios administrados no pueden cambiar ese correo en GitHub.

4. En los ajustes de colaboradores del repositorio

   Los ajustes de colaboradores no controlan los datos del perfil administrado.

**Concept:** Atributos de perfiles administrados

**Authored coaching hints:**

- Distingue la propiedad de una cuenta del permiso para usar recursos.
- Considera el límite entre la colaboración empresarial y la pública.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde é mantido o e-mail do perfil de um usuário do Enterprise Managed Users?

1. Nas permissões de repositório da equipe

   Permissões da equipe controlam acesso, não atributos de identidade.

2. No provedor de identidade **[CORRECT]**

   O IdP fornece nomes e e-mails dos perfis gerenciados.

3. Nas configurações pessoais do GitHub do usuário

   Usuários gerenciados não podem alterar esse e-mail no GitHub.

4. Nas configurações de colaboradores do repositório

   As configurações de colaboradores não controlam os dados do perfil gerenciado.

**Concept:** Atributos de perfis gerenciados

**Authored coaching hints:**

- Diferencie a propriedade da conta da permissão para usar recursos.
- Considere o limite entre colaboração empresarial e pública.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users>

<!-- certification-coach-question:admin-017:87fc37b5e8da943e97bb99b71ba5a7ddd5f0bd066e59a52f67d284be5d12d3a0 -->
## Question 17: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-017`

**Content revision:** `87fc37b5e8da943e97bb99b71ba5a7ddd5f0bd066e59a52f67d284be5d12d3a0`

**en review revision:** `b0411158b6e0a1104e528c54eea750d4e052f774792fff98e8218dd34d7c3d3c`
**es review revision:** `bb0f4cade8b8375503276d455c1f2a12ad54393f111106551b0864e040c97524`
**pt-BR review revision:** `1be633d77da4e5b2003f377e8866e2f67601b17e145ce8c96eb8e0375f1ff85f`

### English

A GitHub Enterprise Cloud organization team using personal accounts is synchronized with an IdP group. Where must its membership changes be made?

1. In repository collaborator invitations

   Repository invitations do not change the connected IdP group.

2. In the enterprise billing contact list

   Billing contacts are unrelated to synchronized membership.

3. In the connected IdP group **[CORRECT]**

   The IdP controls membership once the team is synchronized.

4. In the team's GitHub member editor

   GitHub does not allow manual team membership edits for synchronized teams.

**Concept:** Membership source of truth

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo de organización de GitHub Enterprise Cloud con cuentas personales está sincronizado con un grupo del IdP. ¿Dónde deben cambiarse sus miembros?

1. En las invitaciones a colaboradores del repositorio

   Las invitaciones al repositorio no cambian el grupo del IdP.

2. En la lista de contactos de facturación empresarial

   Los contactos de facturación no controlan esa pertenencia.

3. En el grupo del IdP vinculado **[CORRECT]**

   El IdP controla los miembros del equipo sincronizado.

4. En el editor de miembros del equipo en GitHub

   GitHub no permite editar manualmente los miembros de equipos sincronizados.

**Concept:** Fuente de pertenencia al equipo

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe de organização do GitHub Enterprise Cloud com contas pessoais está sincronizada com um grupo do IdP. Onde seus membros devem ser alterados?

1. Nos convites de colaboradores do repositório

   Convites do repositório não alteram o grupo do IdP.

2. Na lista de contatos de cobrança empresarial

   Contatos de cobrança não controlam essa associação.

3. No grupo do IdP conectado **[CORRECT]**

   O IdP controla os membros da equipe sincronizada.

4. No editor de membros da equipe no GitHub

   O GitHub não permite editar manualmente membros de equipes sincronizadas.

**Concept:** Fonte de associação à equipe

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group>

<!-- certification-coach-question:admin-018:0d62e98de1754ace46e508cb2de8f8eeceea631312ac2229ec8dd8b3919d0261 -->
## Question 18: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-018`

**Content revision:** `0d62e98de1754ace46e508cb2de8f8eeceea631312ac2229ec8dd8b3919d0261`

**en review revision:** `cae015607ad82b4413bf0e04c6b779d1154d0ee05dee7c9002345f114d460afb`
**es review revision:** `dc69bfc61054a02525881da402bfc6f01ad6c8e9eb474d6c87b38e30f1678e31`
**pt-BR review revision:** `eac618d9f75dc7d949dcb11cd28a2852116d3e4d84eba847c42e8445961c1e1c`

### English

A user signs in successfully but lacks permission to push to an organization repository. Which distinction explains the failure?

1. Authorization succeeded; authentication is insufficient

   The user already authenticated, but lacks the required permission.

2. SCIM provisioning automatically grants push access

   Provisioning does not automatically confer repository write privileges.

3. A valid sign-in automatically grants Write access

   Authentication alone does not grant Write.

4. Authentication succeeded; authorization is insufficient **[CORRECT]**

   Sign-in proves identity; repository permissions determine allowed actions.

**Concept:** Authentication versus authorization

**Authored coaching hints:**

- Separate proof of identity from access to a particular resource.
- Check whether the question concerns a personal account or enterprise access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un usuario inicia sesión correctamente, pero no tiene permiso para hacer push a un repositorio de organización. ¿Qué distinción explica el fallo?

1. La autorización funcionó; la autenticación es insuficiente

   El usuario ya se autenticó, pero carece del permiso necesario.

2. El aprovisionamiento SCIM concede push automáticamente

   El aprovisionamiento no concede automáticamente escritura en repositorios.

3. Un inicio de sesión válido concede Write automáticamente

   La autenticación por sí sola no concede Write.

4. La autenticación funcionó; la autorización es insuficiente **[CORRECT]**

   Iniciar sesión demuestra identidad; los permisos determinan las acciones permitidas.

**Concept:** Autenticación frente a autorización

**Authored coaching hints:**

- Distingue la prueba de identidad del acceso a un recurso concreto.
- Comprueba si se trata de una cuenta personal o del acceso empresarial.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um usuário entra com sucesso, mas não tem permissão para fazer push em um repositório da organização. Qual distinção explica a falha?

1. A autorização funcionou; a autenticação é insuficiente

   O usuário já se autenticou, mas não tem a permissão necessária.

2. O provisionamento SCIM concede push automaticamente

   O provisionamento não concede escrita em repositórios automaticamente.

3. Um login válido concede Write automaticamente

   A autenticação por si só não concede Write.

4. A autenticação funcionou; a autorização é insuficiente **[CORRECT]**

   O login comprova identidade; as permissões determinam as ações permitidas.

**Concept:** Autenticação versus autorização

**Authored coaching hints:**

- Diferencie a comprovação de identidade do acesso a um recurso específico.
- Verifique se a questão trata de uma conta pessoal ou do acesso empresarial.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-019:b409c086bdade87639cefebd1e804bfe5a13c635c274337c102ae1560c47a5e4 -->
## Question 19: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-019`

**Content revision:** `b409c086bdade87639cefebd1e804bfe5a13c635c274337c102ae1560c47a5e4`

**en review revision:** `c3c33e0462a5817822eca3bc09cbacf30f6da23ce33b83da10c071f258ae16d2`
**es review revision:** `667b57cedbd0c1008e5648620b6c4bcd5656c53b2689db9f62911b05e10d59ce`
**pt-BR review revision:** `8b9a48372108defe7d323b54545d209e6409a8f31c801115328ac79e978c9a7f`

### English

For personal accounts in a SAML-enforced GitHub Enterprise Cloud organization, what additional step permits an existing SSH key to access protected resources?

1. Authorize the SSH key for the organization **[CORRECT]**

   The SSH credential must be authorized for the protected organization.

2. Add the key to the SAML Public Certificate field

   The SAML certificate field verifies IdP signatures, not SSH users.

3. Upload the private key to the organization's IdP

   Private SSH keys should remain private and are not the SSO authorization step.

4. Assign the user the enterprise Billing manager role

   Billing authority does not authorize an SSH credential.

**Concept:** SAML-authorized SSH credentials

**Authored coaching hints:**

- Separate proof of identity from access to a particular resource.
- Check whether the question concerns a personal account or enterprise access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para cuentas personales en una organización de GitHub Enterprise Cloud que exige SAML, ¿qué paso adicional permite que una clave SSH existente acceda a recursos protegidos?

1. Autorizar la clave SSH para la organización **[CORRECT]**

   La credencial SSH debe autorizarse para la organización protegida.

2. Añadir la clave al campo SAML Public Certificate

   El certificado SAML verifica firmas del IdP, no usuarios SSH.

3. Cargar la clave privada en el IdP de la organización

   Las claves privadas SSH deben permanecer privadas; cargarlas no autoriza SSO.

4. Asignar al usuario el rol empresarial Billing manager

   El rol de facturación no autoriza una credencial SSH.

**Concept:** Credenciales SSH autorizadas para SAML

**Authored coaching hints:**

- Distingue la prueba de identidad del acceso a un recurso concreto.
- Comprueba si se trata de una cuenta personal o del acceso empresarial.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para contas pessoais em uma organização do GitHub Enterprise Cloud que exige SAML, qual etapa adicional permite que uma chave SSH existente acesse recursos protegidos?

1. Autorizar a chave SSH para a organização **[CORRECT]**

   A credencial SSH precisa ser autorizada para a organização protegida.

2. Adicionar a chave ao campo SAML Public Certificate

   O certificado SAML verifica assinaturas do IdP, não usuários SSH.

3. Enviar a chave privada ao IdP da organização

   Chaves privadas SSH devem permanecer privadas; enviá-las não autoriza SSO.

4. Atribuir ao usuário a função empresarial Billing manager

   A função de cobrança não autoriza uma credencial SSH.

**Concept:** Credenciais SSH autorizadas para SAML

**Authored coaching hints:**

- Diferencie a comprovação de identidade do acesso a um recurso específico.
- Verifique se a questão trata de uma conta pessoal ou do acesso empresarial.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise>

<!-- certification-coach-question:admin-020:6f8e354168258f05be1064a21061523d04efe9acfa540490e8bbf0ea0afd4158 -->
## Question 20: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-020`

**Content revision:** `6f8e354168258f05be1064a21061523d04efe9acfa540490e8bbf0ea0afd4158`

**en review revision:** `be881b69266e90cd8ad89b566495bf7bb6b30d43831f330fb48bcdcfc04501dc`
**es review revision:** `3946aee26d05806792f0cdbe428f6e9704dd2cf3e0bb6d5c0791bc77cd6e641f`
**pt-BR review revision:** `81f67b0bdce4b6bdd521148ca18e89701b8dad70d0bd4a8fbacc3de79ac29a82`

### English

What happens to IdP-synchronized team membership when a personal-account user's linked SAML identity is revoked in GitHub Enterprise Cloud?

1. The user's personal account becomes a managed account

   Revoking a SAML link does not change the account model.

2. The user is removed from teams mapped to IdP groups **[CORRECT]**

   Revoking the linked identity removes membership in mapped teams.

3. The user becomes a team maintainer

   Revocation does not promote users.

4. The user receives direct repository Write access

   Revocation does not replace team access with a direct grant.

**Concept:** Linked identity and team access

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ocurre con la pertenencia a equipos sincronizados si se revoca la identidad SAML vinculada de un usuario con cuenta personal en GitHub Enterprise Cloud?

1. La cuenta personal pasa a ser una cuenta administrada

   Revocar el vínculo SAML no cambia el modelo de cuenta.

2. Se elimina al usuario de los equipos vinculados a grupos del IdP **[CORRECT]**

   Revocar la identidad vinculada elimina la pertenencia a los equipos asociados.

3. El usuario pasa a ser responsable del equipo

   La revocación no asciende al usuario.

4. El usuario recibe acceso Write directo al repositorio

   La revocación no sustituye el acceso del equipo por un permiso directo.

**Concept:** Identidad vinculada y acceso a equipos

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que acontece com a associação a equipes sincronizadas quando a identidade SAML vinculada de um usuário com conta pessoal é revogada no GitHub Enterprise Cloud?

1. A conta pessoal se torna uma conta gerenciada

   Revogar o vínculo SAML não muda o modelo de conta.

2. O usuário é removido das equipes vinculadas a grupos do IdP **[CORRECT]**

   Revogar a identidade vinculada remove a associação às equipes mapeadas.

3. O usuário se torna mantenedor da equipe

   A revogação não promove usuários.

4. O usuário recebe acesso Write direto ao repositório

   A revogação não substitui o acesso da equipe por uma concessão direta.

**Concept:** Identidade vinculada e acesso a equipes

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group>

<!-- certification-coach-question:admin-021:faa1bb63e6cb9d3bc46ccf447e2741f4427d6828d35ed3e13916d2f35ba71375 -->
## Question 21: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-021`

**Content revision:** `faa1bb63e6cb9d3bc46ccf447e2741f4427d6828d35ed3e13916d2f35ba71375`

**en review revision:** `7c09946473befdb68b64aacc0043b2aff423093d326e412d29f5852c5d2c4961`
**es review revision:** `ee4eb0a2bbc9eacf23186a6e7baace371fe5adbb5a84113e539be70176efb87b`
**pt-BR review revision:** `409c7cc8c420dbcd9f26f6f5c257a18041f91dba83f452066c454908ef0a1394`

### English

Which standard repository role is the least privileged for viewing code and discussing issues in a private organization repository?

1. Write

   Write adds code contribution permissions.

2. Maintain

   Maintain adds broader repository management.

3. Read **[CORRECT]**

   Read supports viewing and discussion without broader management rights.

4. Triage

   Triage adds issue and pull-request management.

**Concept:** Read-only contribution

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol estándar de repositorio concede los mínimos privilegios para ver código y comentar issues en un repositorio privado de organización?

1. Write

   Write añade permisos para contribuir código.

2. Maintain

   Maintain añade gestión más amplia del repositorio.

3. Read **[CORRECT]**

   Read permite lectura y discusión sin derechos de gestión más amplios.

4. Triage

   Triage añade gestión de issues y pull requests.

**Concept:** Contribución de solo lectura

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função padrão de repositório concede o menor privilégio para ler código e discutir issues em um repositório privado da organização?

1. Write

   Write acrescenta permissões para contribuir código.

2. Maintain

   Maintain acrescenta gerenciamento mais amplo do repositório.

3. Read **[CORRECT]**

   Read permite leitura e discussão sem direitos de gerenciamento mais amplos.

4. Triage

   Triage acrescenta gerenciamento de issues e pull requests.

**Concept:** Contribuição somente leitura

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-022:7e43e3403d3017921fe9a1adf9447f2e4453ed7874f67de0aa330ef13287358a -->
## Question 22: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-022`

**Content revision:** `7e43e3403d3017921fe9a1adf9447f2e4453ed7874f67de0aa330ef13287358a`

**en review revision:** `51b3857de80423c89630ad493a16d6d81977ba202303aa6dc590b7383e16324d`
**es review revision:** `8fd20ed183dbbb294b07554fd1aebbb30e9b4caeaf1a643d3b1b34ae8f481268`
**pt-BR review revision:** `02364c7e80863d79c5de3ebe6d32bc690e19cd86883b13d1c107f376bdeb60af`

### English

Which standard role fits someone who manages other contributors' issues and pull requests but must not push code to an organization repository?

1. Read

   Read does not provide the full triage capability set.

2. Write

   Write grants unnecessary code-pushing rights.

3. Admin

   Admin grants unnecessary sensitive administrative powers.

4. Triage **[CORRECT]**

   Triage supports proactive issue and pull-request management without write access.

**Concept:** Triage without code writes

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol estándar corresponde a quien gestiona issues y pull requests de otros colaboradores, pero no debe hacer push de código a un repositorio de organización?

1. Read

   Read no proporciona todas las capacidades de clasificación.

2. Write

   Write concede permisos innecesarios para enviar código.

3. Admin

   Admin concede poderes administrativos sensibles innecesarios.

4. Triage **[CORRECT]**

   Triage permite gestionar issues y pull requests sin acceso de escritura.

**Concept:** Clasificación sin escritura de código

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função padrão atende a quem gerencia issues e pull requests de outros colaboradores, mas não deve fazer push de código em um repositório da organização?

1. Read

   Read não fornece todas as capacidades de triagem.

2. Write

   Write concede direitos desnecessários para enviar código.

3. Admin

   Admin concede poderes administrativos sensíveis desnecessários.

4. Triage **[CORRECT]**

   Triage permite gerenciar issues e pull requests sem acesso de escrita.

**Concept:** Triagem sem escrita de código

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-023:8ef29046762e7b0401426189332210560202c8b1f5cf2f83b3f2d7aa9e3e5f62 -->
## Question 23: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-023`

**Content revision:** `8ef29046762e7b0401426189332210560202c8b1f5cf2f83b3f2d7aa9e3e5f62`

**en review revision:** `1d95c4bf7e9a4e83ffa2da6e634967949cd27edd3504b8fab8d1a04826baa882`
**es review revision:** `2cefe74f92d38e5bb2eaead75d189f3c16e85594f393d8e119717bb15d7cff6e`
**pt-BR review revision:** `5744fc19929ebd155a3e71e3e903a694b5953e67044a5386391ed7d649cdbf12`

### English

What is the lowest standard repository role that permits pushing code, subject to applicable branch rules?

1. Write **[CORRECT]**

   Write is the first standard role that permits pushing code.

2. Read

   Read permits viewing, not pushing.

3. Triage

   Triage manages issues and pull requests without write access.

4. Maintain

   Maintain can push but grants more privileges than required.

**Concept:** Code contribution role

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es el rol estándar mínimo de repositorio que permite hacer push de código, sujeto a las reglas de rama aplicables?

1. Write **[CORRECT]**

   Write es el primer rol estándar que permite enviar código.

2. Read

   Read permite ver, no hacer push.

3. Triage

   Triage gestiona issues y pull requests sin escritura.

4. Maintain

   Maintain permite push, pero concede más privilegios de los necesarios.

**Concept:** Rol para contribuir código

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a menor função padrão de repositório que permite fazer push de código, respeitando as regras de branch aplicáveis?

1. Write **[CORRECT]**

   Write é a primeira função padrão que permite enviar código.

2. Read

   Read permite visualizar, não fazer push.

3. Triage

   Triage gerencia issues e pull requests sem escrita.

4. Maintain

   Maintain permite push, mas concede mais privilégios do que o necessário.

**Concept:** Função para contribuir código

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-024:c1d14dbf1db3e9edae0153753749118cce4680c340d9263cecb81da1d798d55a -->
## Question 24: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-024`

**Content revision:** `c1d14dbf1db3e9edae0153753749118cce4680c340d9263cecb81da1d798d55a`

**en review revision:** `5effbd05eda53a63b24a3187035a90971ca819ea7339de25d70e8c9adcff02e4`
**es review revision:** `6c82a90b5efe9572325bce5deea02cd872b531e8c8e8a8ea4dfa5c890f872167`
**pt-BR review revision:** `c73d519a811bfedad0e42afc504a40c06e0eee082d85927d09618da5c18f2b05`

### English

Which standard organization-repository role is intended for project managers who manage the repository without sensitive or destructive administrative actions?

1. Admin

   Admin includes the sensitive powers the task excludes.

2. Maintain **[CORRECT]**

   Maintain is designed for repository management without sensitive or destructive actions.

3. Triage

   Triage is focused on issues and pull requests.

4. Write

   Write is focused on contributing code.

**Concept:** Repository maintenance boundary

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol estándar de repositorio de organización está pensado para responsables de proyecto que gestionan el repositorio sin acciones administrativas sensibles o destructivas?

1. Admin

   Admin incluye los poderes sensibles excluidos por la tarea.

2. Maintain **[CORRECT]**

   Maintain está diseñado para gestionar el repositorio sin acciones sensibles o destructivas.

3. Triage

   Triage se centra en issues y pull requests.

4. Write

   Write se centra en contribuir código.

**Concept:** Límite del mantenimiento de repositorios

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função padrão de repositório da organização se destina a gerentes de projeto que gerenciam o repositório sem ações administrativas sensíveis ou destrutivas?

1. Admin

   Admin inclui os poderes sensíveis excluídos pela tarefa.

2. Maintain **[CORRECT]**

   Maintain foi projetada para gerenciar o repositório sem ações sensíveis ou destrutivas.

3. Triage

   Triage se concentra em issues e pull requests.

4. Write

   Write se concentra em contribuir código.

**Concept:** Limite da manutenção de repositórios

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-025:fec8e3af684f128d28788b078680c4c77edd78a79196f43b21a44bbc0f5fc84f -->
## Question 25: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-025`

**Content revision:** `fec8e3af684f128d28788b078680c4c77edd78a79196f43b21a44bbc0f5fc84f`

**en review revision:** `9713215b7ab960f6979af118ceaf3777a471da8d8b797ab077686de60f747254`
**es review revision:** `d5795ba67d96132f9e7f97aab819e2b3a6ad68a665dd7ffa8263d1f9bf9308e4`
**pt-BR review revision:** `e823d9fd43ef1bb97e02a8f319549bc7caf71e6e627e9102299cdd629400edc6`

### English

Which standard repository role can manage individual and team access to an organization repository?

1. Write

   Write does not allow managing repository access.

2. Triage

   Triage does not administer access permissions.

3. Admin **[CORRECT]**

   Admin includes management of repository access.

4. Maintain

   Maintain does not include individual and team access administration.

**Concept:** Repository access administration

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol estándar de repositorio puede gestionar el acceso individual y de equipos a un repositorio de organización?

1. Write

   Write no permite gestionar el acceso al repositorio.

2. Triage

   Triage no administra permisos de acceso.

3. Admin **[CORRECT]**

   Admin incluye gestionar el acceso al repositorio.

4. Maintain

   Maintain no incluye administrar el acceso individual y de equipos.

**Concept:** Administración del acceso a repositorios

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função padrão de repositório pode gerenciar o acesso individual e de equipes a um repositório da organização?

1. Write

   Write não permite gerenciar o acesso ao repositório.

2. Triage

   Triage não administra permissões de acesso.

3. Admin **[CORRECT]**

   Admin inclui gerenciar o acesso ao repositório.

4. Maintain

   Maintain não inclui administrar o acesso individual e de equipes.

**Concept:** Administração do acesso a repositórios

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization>

<!-- certification-coach-question:admin-026:829ff7801be63c9b19f8eb73b01f100a3a4e4f15edecc571664c01e2016e29da -->
## Question 26: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-026`

**Content revision:** `829ff7801be63c9b19f8eb73b01f100a3a4e4f15edecc571664c01e2016e29da`

**en review revision:** `6bed6efb06a0591251a39cf64af27756ff9643785d77f4ec760e7334d4b93db7`
**es review revision:** `156c5890def81e9741fdf1d4a267c5e9aeda601e9d1328cc3399e3880faccc84`
**pt-BR review revision:** `a339cb204abb0c46c7f64a88ea9a3ad5df9517eea1f803a89a804077ee376f76`

### English

Which organization role includes administrative access to every repository owned by that organization?

1. Organization member

   Members receive access through base permissions and explicit grants.

2. Billing manager

   Billing management does not grant organization-wide repository administration.

3. Team maintainer

   Team maintainers administer their team, not every repository.

4. Organization owner **[CORRECT]**

   Organization owners have admin access to all organization repositories.

**Concept:** Organization owner authority

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol de organización incluye acceso administrativo a todos los repositorios que pertenecen a esa organización?

1. Organization member

   Los miembros reciben acceso mediante permisos base y concesiones explícitas.

2. Billing manager

   Gestionar facturación no concede administración de todos los repositorios.

3. Team maintainer

   Los responsables gestionan su equipo, no todos los repositorios.

4. Organization owner **[CORRECT]**

   Los propietarios tienen acceso administrativo a todos los repositorios de la organización.

**Concept:** Autoridad del propietario de organización

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função da organização inclui acesso administrativo a todos os repositórios pertencentes a ela?

1. Organization member

   Membros recebem acesso por permissões básicas e concessões explícitas.

2. Billing manager

   Gerenciar cobrança não concede administração de todos os repositórios.

3. Team maintainer

   Mantenedores administram sua equipe, não todos os repositórios.

4. Organization owner **[CORRECT]**

   Proprietários têm acesso administrativo a todos os repositórios da organização.

**Concept:** Autoridade do proprietário da organização

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization>

<!-- certification-coach-question:admin-027:8606110210eb702da88bc7ff133ef2d61d03319d06efbf6bb0fe1ab4ecc70626 -->
## Question 27: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-027`

**Content revision:** `8606110210eb702da88bc7ff133ef2d61d03319d06efbf6bb0fe1ab4ecc70626`

**en review revision:** `5a3a1b9c3f25116c2593d085ad67ab6179c693b8dc462aa473c85599d47cedee`
**es review revision:** `0b9d2e18127e190ae346d845cac286e37e70ee2bf39e445950bcb1d24966e32e`
**pt-BR review revision:** `38e6b448aacd6a195363e451c17416b80188be19d8e0b496fe29cd458b2f7c79`

### English

An organization owner on GitHub Enterprise Cloud wants to change members' default repository permissions. Which English UI path contains Base permissions?

1. Organization Settings → Member privileges **[CORRECT]**

   Member privileges contains organization-wide base permissions.

2. Organization Settings → Authentication security

   Authentication security controls authentication requirements.

3. Enterprise People → Enterprise teams

   Enterprise teams manages enterprise groups.

4. Repository Settings → Rules → Rulesets

   Rulesets govern repository activity rather than membership defaults.

**Concept:** Base-permission navigation

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de organización en GitHub Enterprise Cloud quiere cambiar los permisos predeterminados de repositorio de sus miembros. ¿Qué ruta de la interfaz inglesa contiene Base permissions?

1. Organization Settings → Member privileges **[CORRECT]**

   Member privileges contiene los permisos base de la organización.

2. Organization Settings → Authentication security

   Authentication security controla requisitos de autenticación.

3. Enterprise People → Enterprise teams

   Enterprise teams gestiona grupos empresariales.

4. Repository Settings → Rules → Rulesets

   Los rulesets regulan actividad del repositorio, no permisos predeterminados de miembros.

**Concept:** Navegación a permisos base

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário de organização no GitHub Enterprise Cloud quer alterar as permissões padrão de repositório dos membros. Qual caminho da interface em inglês contém Base permissions?

1. Organization Settings → Member privileges **[CORRECT]**

   Member privileges contém as permissões básicas da organização.

2. Organization Settings → Authentication security

   Authentication security controla requisitos de autenticação.

3. Enterprise People → Enterprise teams

   Enterprise teams gerencia grupos empresariais.

4. Repository Settings → Rules → Rulesets

   Rulesets regem a atividade do repositório, não permissões padrão de membros.

**Concept:** Navegação para permissões básicas

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization>

<!-- certification-coach-question:admin-028:a2d7edc3d29c4e438b3adc528019a7b885322a7be5b6532e47125bd8a5cdc9dd -->
## Question 28: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-028`

**Content revision:** `a2d7edc3d29c4e438b3adc528019a7b885322a7be5b6532e47125bd8a5cdc9dd`

**en review revision:** `595dda08f115add0f50ed099df20f9c0930e828ffde39960cd610609c1bbd366`
**es review revision:** `1f8cdf217e6807cf3103749502e8ac0b6faa27c0ff6d2449a8bf800095c6e7df`
**pt-BR review revision:** `ca2425e8c40a9cd8170e3f26f98b0e7a8ae801e3d9a15d6aa8d1aae8d871e38a`

### English

In a GitHub Enterprise Cloud organization with personal accounts, what identifies an outside collaborator?

1. A team maintainer who manages synchronized groups

   Team maintainers are not defined by outside-collaborator status.

2. A non-member with access to one or more organization repositories **[CORRECT]**

   Outside collaborators have repository access without organization membership.

3. An organization member without administrative permissions

   A non-admin member is still an organization member.

4. An enterprise owner who manages organization policies

   Enterprise ownership is an enterprise administrative role.

**Concept:** Outside collaboration boundary

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una organización de GitHub Enterprise Cloud con cuentas personales, ¿qué caracteriza a un colaborador externo?

1. Un responsable de equipo que gestiona grupos sincronizados

   Ser responsable de equipo no define la condición de colaborador externo.

2. Una persona no miembro con acceso a uno o más repositorios de la organización **[CORRECT]**

   Los colaboradores externos acceden a repositorios sin pertenecer a la organización.

3. Un miembro de organización sin permisos administrativos

   Un miembro sin administración sigue perteneciendo a la organización.

4. Un propietario empresarial que gestiona políticas de organización

   La propiedad empresarial es un rol administrativo empresarial.

**Concept:** Límite de colaboración externa

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma organização do GitHub Enterprise Cloud com contas pessoais, o que caracteriza um colaborador externo?

1. Um mantenedor de equipe que gerencia grupos sincronizados

   Ser mantenedor de equipe não define a condição de colaborador externo.

2. Uma pessoa não membro com acesso a um ou mais repositórios da organização **[CORRECT]**

   Colaboradores externos acessam repositórios sem pertencer à organização.

3. Um membro da organização sem permissões administrativas

   Um membro sem administração continua pertencendo à organização.

4. Um proprietário empresarial que gerencia políticas da organização

   A propriedade empresarial é uma função administrativa empresarial.

**Concept:** Limite da colaboração externa

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization>

<!-- certification-coach-question:admin-029:b6d0ced59c1648d9b3473216780d65e9e0363c227c4b960bc9a2eaed7993b745 -->
## Question 29: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-029`

**Content revision:** `b6d0ced59c1648d9b3473216780d65e9e0363c227c4b960bc9a2eaed7993b745`

**en review revision:** `cb54e43bf78be8edf4ddf39241f58ace2c8f98be84db9f7be314bb71dd930354`
**es review revision:** `0d7bef9a400430077e3851ab1308778203641fcd79e59ab550105cb8610317e7`
**pt-BR review revision:** `3f34053fd00d4f2d46a53c47165abbdc0c3d0182c43d0ac569d5552fd2714537`

### English

An organization member has base Read permission and a direct Write grant on a private repository. What is their effective repository role?

1. Triage

   Neither grant specifies Triage, and Write is available.

2. No access

   The member has two valid sources of access.

3. Write **[CORRECT]**

   The higher direct repository grant takes precedence over base Read.

4. Read

   Base Read does not reduce a higher explicit grant.

**Concept:** Effective permission grants

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un miembro tiene permiso base Read y una concesión directa Write en un repositorio privado. ¿Cuál es su rol efectivo en ese repositorio?

1. Triage

   Ninguna concesión especifica Triage y se dispone de Write.

2. Sin acceso

   El miembro tiene dos fuentes válidas de acceso.

3. Write **[CORRECT]**

   La concesión directa superior prevalece sobre Read base.

4. Read

   Read base no reduce una concesión explícita superior.

**Concept:** Permisos efectivos concedidos

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um membro tem permissão básica Read e uma concessão direta Write em um repositório privado. Qual é sua função efetiva nesse repositório?

1. Triage

   Nenhuma concessão especifica Triage, e Write está disponível.

2. Sem acesso

   O membro tem duas fontes válidas de acesso.

3. Write **[CORRECT]**

   A concessão direta superior prevalece sobre Read básica.

4. Read

   Read básica não reduz uma concessão explícita superior.

**Concept:** Permissões efetivas concedidas

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization>

<!-- certification-coach-question:admin-030:74a4a168f8d8a7d3770ab0366bb31e1ec5ffb8c0e18315cbecbba299405fb843 -->
## Question 30: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-030`

**Content revision:** `74a4a168f8d8a7d3770ab0366bb31e1ec5ffb8c0e18315cbecbba299405fb843`

**en review revision:** `ef52be54d2adb74c69e375cc7032bd6206de4f4be70ed986eadbedbea13c6e4e`
**es review revision:** `758239201e4bf88943fd15d409b5d517fe89059c732f56529e522c19d4263886`
**pt-BR review revision:** `bc40d20170586b100785946fd6fba4de8307b7402cb0c21d59fedab22de100e6`

### English

Does becoming an enterprise owner automatically provide access to every organization's private repository content in GitHub Enterprise Cloud?

1. Yes; enterprise ownership directly grants repository Admin everywhere

   Enterprise ownership does not automatically grant this content access.

2. No; an enterprise owner can never join organizations

   Enterprise owners can join organizations they own.

3. Yes; the billing entitlement includes all private code

   Billing authority does not provide blanket access to private code.

4. No; the owner can join organizations to gain access **[CORRECT]**

   Enterprise owners do not receive organization content access by default but can join organizations.

**Concept:** Enterprise owner content boundary

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Convertirse en propietario empresarial proporciona automáticamente acceso al contenido de los repositorios privados de todas las organizaciones en GitHub Enterprise Cloud?

1. Sí; la propiedad empresarial concede Admin en todos los repositorios

   La propiedad empresarial no concede automáticamente ese acceso.

2. No; un propietario empresarial nunca puede unirse a organizaciones

   Los propietarios pueden unirse a organizaciones de su empresa.

3. Sí; el derecho de facturación incluye todo el código privado

   La autoridad de facturación no da acceso general al código privado.

4. No; el propietario puede unirse a organizaciones para obtener acceso **[CORRECT]**

   No se recibe acceso al contenido por defecto, pero el propietario puede unirse a organizaciones.

**Concept:** Límite de contenido del propietario empresarial

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Tornar-se proprietário empresarial fornece automaticamente acesso ao conteúdo dos repositórios privados de todas as organizações no GitHub Enterprise Cloud?

1. Sim; a propriedade empresarial concede Admin em todos os repositórios

   A propriedade empresarial não concede automaticamente esse acesso.

2. Não; um proprietário empresarial nunca pode ingressar em organizações

   Proprietários podem ingressar nas organizações da empresa.

3. Sim; o direito de cobrança inclui todo o código privado

   A autoridade de cobrança não dá acesso geral ao código privado.

4. Não; o proprietário pode ingressar em organizações para obter acesso **[CORRECT]**

   Não há acesso ao conteúdo por padrão, mas o proprietário pode ingressar em organizações.

**Concept:** Limite de conteúdo do proprietário empresarial

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles>

<!-- certification-coach-question:admin-031:6e8081b66096e2e8f42460e91fb108a5cee6fbeb96e2e29b8650992c12e1f100 -->
## Question 31: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-031`

**Content revision:** `6e8081b66096e2e8f42460e91fb108a5cee6fbeb96e2e29b8650992c12e1f100`

**en review revision:** `a581b63bb0b1790f108e5edff3e2fd83e217891792f37066c3a191c98ea03866`
**es review revision:** `512ee9fc8fb48198c7e854048c63573dabccd7f8036a3bf8c36d2b1f5ea3acb4`
**pt-BR review revision:** `bc49d95761cbae9b293c79dd7473e069c92f8018c83a9d81aa1df479d249661c`

### English

Which predefined enterprise role fits a finance administrator who needs enterprise billing settings but not enterprise-wide policy administration?

1. Billing manager **[CORRECT]**

   Billing manager provides the billing authority required.

2. Enterprise owner

   Enterprise owner adds unnecessary control over members and policies.

3. App manager

   App manager manages enterprise-owned GitHub App registrations.

4. User

   User has no enterprise administrative access by default.

**Concept:** Delegated enterprise billing

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué rol empresarial predefinido corresponde a un administrador financiero que necesita los ajustes de facturación, pero no administrar políticas empresariales?

1. Billing manager **[CORRECT]**

   Billing manager proporciona la autoridad de facturación necesaria.

2. Enterprise owner

   Enterprise owner añade control innecesario sobre miembros y políticas.

3. App manager

   App manager gestiona registros de GitHub Apps de la empresa.

4. User

   User no tiene acceso administrativo empresarial por defecto.

**Concept:** Delegación de facturación empresarial

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual função empresarial predefinida atende a um administrador financeiro que precisa das configurações de cobrança, mas não da administração de políticas empresariais?

1. Billing manager **[CORRECT]**

   Billing manager fornece a autoridade de cobrança necessária.

2. Enterprise owner

   Enterprise owner acrescenta controle desnecessário sobre membros e políticas.

3. App manager

   App manager gerencia registros de GitHub Apps da empresa.

4. User

   User não tem acesso administrativo empresarial por padrão.

**Concept:** Delegação de cobrança empresarial

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles>

<!-- certification-coach-question:admin-032:5c30bd45a6f1ababc39087125f5a019ceb7fb5d36fba9ade08140dc80e82cdd8 -->
## Question 32: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-032`

**Content revision:** `5c30bd45a6f1ababc39087125f5a019ceb7fb5d36fba9ade08140dc80e82cdd8`

**en review revision:** `dee9d2eba5680248ff871c5bfce9203e6dd768c7427419bd57a07d25a8d4327f`
**es review revision:** `7ce9bf4d8472bb343418dd605f66e54d4a41ff40243933229545cbdc8f0d2ab1`
**pt-BR review revision:** `13548868076f3444b9b74ecf8ec97f0e424834d481989d7a8064f8daf47c331f`

### English

How can a GitHub Enterprise Cloud owner delegate a selected set of enterprise-settings permissions without granting full enterprise ownership?

1. Grant base Write permission in one organization

   Organization base permissions apply to repositories, not enterprise administration.

2. Create and assign a custom enterprise role **[CORRECT]**

   Custom enterprise roles define selected enterprise permissions.

3. Assign repository Admin on one repository

   Repository Admin controls a repository, not enterprise settings.

4. Make the user an organization team maintainer

   Team maintenance does not grant enterprise-settings permissions.

**Concept:** Granular enterprise delegation

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puede un propietario de GitHub Enterprise Cloud delegar permisos concretos de ajustes empresariales sin conceder la propiedad completa de la empresa?

1. Conceder Write base en una organización

   Los permisos base de organización afectan a repositorios, no a administración empresarial.

2. Crear y asignar un rol empresarial personalizado **[CORRECT]**

   Los roles empresariales personalizados definen permisos empresariales seleccionados.

3. Asignar Admin en un repositorio

   Admin de repositorio no controla ajustes empresariales.

4. Nombrar al usuario responsable de equipo de organización

   Mantener un equipo no concede permisos de ajustes empresariales.

**Concept:** Delegación empresarial granular

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um proprietário do GitHub Enterprise Cloud pode delegar permissões específicas de configurações empresariais sem conceder propriedade completa da empresa?

1. Conceder Write básica em uma organização

   Permissões básicas da organização afetam repositórios, não a administração empresarial.

2. Criar e atribuir uma função empresarial personalizada **[CORRECT]**

   Funções empresariais personalizadas definem permissões empresariais selecionadas.

3. Atribuir Admin em um repositório

   Admin de repositório não controla configurações empresariais.

4. Nomear o usuário mantenedor de equipe da organização

   Manter uma equipe não concede permissões de configurações empresariais.

**Concept:** Delegação empresarial granular

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles>

<!-- certification-coach-question:admin-033:bc3b6bfbd7e3ad95a0f739b2d5f1efd6a1821bc153727fe28ff1396c486e12ec -->
## Question 33: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-033`

**Content revision:** `bc3b6bfbd7e3ad95a0f739b2d5f1efd6a1821bc153727fe28ff1396c486e12ec`

**en review revision:** `4fbe8868f8d5e1558add3230945e0d76496b9541f9682dcab6a9bb7ac11d92cb`
**es review revision:** `7c37e71d4b93fac1c74ee6a336d826e57ec9b654027bbc3484797c07c3dd0376`
**pt-BR review revision:** `661a267bd888430271c5aa3f3acd9981d12ff9b898cb95175472bb3b2bc9b760`

### English

Which GitHub Enterprise Cloud construct groups users centrally for enterprise role assignments and access to multiple organizations?

1. Repository collaborator list

   A repository collaborator list is scoped to one repository.

2. Organization base permission

   Base permissions are a default access level, not a central group.

3. Enterprise team **[CORRECT]**

   Enterprise teams can receive enterprise roles and be added to organizations.

4. Organization project

   Projects organize work rather than enterprise membership and roles.

**Concept:** Enterprise team purpose

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué recurso de GitHub Enterprise Cloud agrupa usuarios de forma central para asignar roles empresariales y acceso a varias organizaciones?

1. Lista de colaboradores del repositorio

   La lista de colaboradores se limita a un repositorio.

2. Permiso base de organización

   Los permisos base son un nivel predeterminado, no un grupo central.

3. Enterprise team **[CORRECT]**

   Los equipos empresariales pueden recibir roles empresariales y añadirse a organizaciones.

4. Proyecto de organización

   Los proyectos organizan trabajo, no pertenencia y roles empresariales.

**Concept:** Finalidad del equipo empresarial

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do GitHub Enterprise Cloud agrupa usuários centralmente para atribuir funções empresariais e acesso a várias organizações?

1. Lista de colaboradores do repositório

   A lista de colaboradores se limita a um repositório.

2. Permissão básica da organização

   Permissões básicas são um nível padrão, não um grupo central.

3. Enterprise team **[CORRECT]**

   Equipes empresariais podem receber funções empresariais e ser adicionadas a organizações.

4. Projeto da organização

   Projetos organizam trabalho, não associação e funções empresariais.

**Concept:** Finalidade da equipe empresarial

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-034:4ae7d13604037e2534d80a137a9a073a611f1e37c87e10f6abea5791b8563eb5 -->
## Question 34: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-034`

**Content revision:** `4ae7d13604037e2534d80a137a9a073a611f1e37c87e10f6abea5791b8563eb5`

**en review revision:** `14f5a9ba36cd2d64e33f94108a8b5c78b225d2bb8fe6528537d70d4f9d3c6d18`
**es review revision:** `e850b4c9e3b080b12cf3f21ff8be684c48fce8094f8971d4e08f28622e704554`
**pt-BR review revision:** `fa287a4b30709bf95de9c94ebe3dc27067646ce5f5a9eba44f3b16d5fb548d8b`

### English

An enterprise owner wants to create an enterprise team in GitHub Enterprise Cloud's English UI. Which route is documented?

1. Organization Settings → Member privileges → Create Enterprise team

   Organization member privileges does not create enterprise teams.

2. Repository Settings → Collaborators &amp; teams → Create Enterprise team

   Repository collaborator administration does not create enterprise teams.

3. Enterprise Settings → Authentication security → Create Enterprise team

   Authentication security configures sign-in requirements, not team creation.

4. Enterprise People → Enterprise teams → Create Enterprise team **[CORRECT]**

   The enterprise People tab contains Enterprise teams and its creation control.

**Concept:** Enterprise team navigation

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario empresarial quiere crear un equipo empresarial en la interfaz inglesa de GitHub Enterprise Cloud. ¿Qué ruta está documentada?

1. Organization Settings → Member privileges → Create Enterprise team

   Los privilegios de miembros de organización no crean equipos empresariales.

2. Repository Settings → Collaborators &amp; teams → Create Enterprise team

   Administrar colaboradores del repositorio no crea equipos empresariales.

3. Enterprise Settings → Authentication security → Create Enterprise team

   Authentication security configura requisitos de acceso, no crea equipos.

4. Enterprise People → Enterprise teams → Create Enterprise team **[CORRECT]**

   La pestaña People empresarial contiene Enterprise teams y su control de creación.

**Concept:** Navegación a equipos empresariales

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário empresarial quer criar uma equipe empresarial na interface em inglês do GitHub Enterprise Cloud. Qual caminho é documentado?

1. Organization Settings → Member privileges → Create Enterprise team

   Privilégios de membros da organização não criam equipes empresariais.

2. Repository Settings → Collaborators &amp; teams → Create Enterprise team

   Administrar colaboradores do repositório não cria equipes empresariais.

3. Enterprise Settings → Authentication security → Create Enterprise team

   Authentication security configura requisitos de acesso, não cria equipes.

4. Enterprise People → Enterprise teams → Create Enterprise team **[CORRECT]**

   A aba People empresarial contém Enterprise teams e seu controle de criação.

**Concept:** Navegação para equipes empresariais

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-035:7843a2b267fad7a281176ae22566625636b84bfc7db41bee72274473bcd4b2a2 -->
## Question 35: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-035`

**Content revision:** `7843a2b267fad7a281176ae22566625636b84bfc7db41bee72274473bcd4b2a2`

**en review revision:** `9e0381c44f415e8629e81d15f51b45dc4a9e04327ee77fe18db3a438b726ff2e`
**es review revision:** `09e9bc39e86989ebe906b8438875fb047d3be500414ef1d7cad6ca601c4ab358`
**pt-BR review revision:** `3aa164f844dfbb4226a9a1e8bcc81d684b60c5614d2225eef94db867536773c0`

### English

When an enterprise team is granted organization access in GitHub Enterprise Cloud, what repository access do its members initially receive through organization membership?

1. The organization's base repository permissions **[CORRECT]**

   Members are added directly and receive the organization's base permission level.

2. Admin on every organization repository

   Team organization access does not automatically grant Admin.

3. Write on every organization repository

   Write is not automatic unless it is the applicable base level or separately granted.

4. No organization membership until invitations are accepted

   The documented enterprise-team flow adds members without invitations.

**Concept:** Enterprise team organization access

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Cuando se concede acceso a una organización a un equipo empresarial de GitHub Enterprise Cloud, ¿qué acceso inicial a repositorios reciben sus miembros por esa pertenencia?

1. Los permisos base de repositorio de la organización **[CORRECT]**

   Los miembros se añaden directamente y reciben el nivel base de la organización.

2. Admin en todos los repositorios de la organización

   El acceso del equipo no concede Admin automáticamente.

3. Write en todos los repositorios de la organización

   Write no es automático salvo que sea el nivel base o se conceda aparte.

4. Ninguna pertenencia hasta aceptar invitaciones

   El flujo documentado añade miembros sin invitaciones.

**Concept:** Acceso de equipos empresariales a organizaciones

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quando uma equipe empresarial recebe acesso a uma organização no GitHub Enterprise Cloud, qual acesso inicial aos repositórios seus membros recebem por essa associação?

1. As permissões básicas de repositório da organização **[CORRECT]**

   Membros são adicionados diretamente e recebem o nível básico da organização.

2. Admin em todos os repositórios da organização

   O acesso da equipe não concede Admin automaticamente.

3. Write em todos os repositórios da organização

   Write não é automático, salvo quando é o nível básico ou concedido separadamente.

4. Nenhuma associação até aceitarem convites

   O fluxo documentado adiciona membros sem convites.

**Concept:** Acesso de equipes empresariais a organizações

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-036:d0708858a3146a6916fd8e5587b7be23a10bad3210bc90f4e4dacc17a2bfcb8c -->
## Question 36: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-036`

**Content revision:** `d0708858a3146a6916fd8e5587b7be23a10bad3210bc90f4e4dacc17a2bfcb8c`

**en review revision:** `38e771b74220a48f8dec8ca2b1d055eebdf95dcdbef6f75d1c3c01563c600e0d`
**es review revision:** `0c3497c6accf5c267451948fbac864a81e1170909e2867e26af53de8886a02f7`
**pt-BR review revision:** `3d64f0f8bfff2788b9fcc019bf1581f40b1fad162e3f3f3bef1ac60854490e5d`

### English

What is the documented effect of removing someone from an enterprise team in GitHub Enterprise Cloud?

1. Every independent repository grant is revoked

   Independent grants are not automatically revoked by a team-membership change.

2. Privileges granted by the team are removed **[CORRECT]**

   Removal withdraws the privileges associated with that team.

3. The account is deleted from GitHub

   Team removal does not delete the user's account.

4. The user is removed from the enterprise account

   Removing team membership does not itself remove enterprise membership.

**Concept:** Enterprise team offboarding scope

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué efecto documentado tiene eliminar a alguien de un equipo empresarial en GitHub Enterprise Cloud?

1. Se revocan todos los permisos independientes de repositorio

   Los permisos independientes no se revocan automáticamente por ese cambio.

2. Se retiran los privilegios concedidos por el equipo **[CORRECT]**

   La eliminación retira los privilegios asociados a ese equipo.

3. Se elimina la cuenta de GitHub

   Salir del equipo no elimina la cuenta del usuario.

4. Se elimina al usuario de la cuenta empresarial

   Eliminar la pertenencia al equipo no elimina por sí solo la pertenencia empresarial.

**Concept:** Ámbito de baja de equipos empresariales

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o efeito documentado de remover alguém de uma equipe empresarial no GitHub Enterprise Cloud?

1. Todas as concessões independentes de repositório são revogadas

   Concessões independentes não são revogadas automaticamente por essa alteração.

2. Os privilégios concedidos pela equipe são removidos **[CORRECT]**

   A remoção retira os privilégios associados àquela equipe.

3. A conta é excluída do GitHub

   Sair da equipe não exclui a conta do usuário.

4. O usuário é removido da conta empresarial

   Remover a associação à equipe não remove, por si só, a associação empresarial.

**Concept:** Escopo de desligamento de equipes empresariais

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-037:a65f7e82ae4b57b8493f1ee1d6083be9641c7633fc4fd4f39758de202bacffbb -->
## Question 37: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-037`

**Content revision:** `a65f7e82ae4b57b8493f1ee1d6083be9641c7633fc4fd4f39758de202bacffbb`

**en review revision:** `d677bdd91ccd0684997bba26300e9463aa81072687250e7800b9f42aeeb8c601`
**es review revision:** `964d816a5348ceaa84c846892a3a78ac07cf2d8260c87a2bffef29dc8b45dc95`
**pt-BR review revision:** `adb29263210d81fd751382842777d368fc812c29a1ee8acfbe80aca9f3bcb99a`

### English

For an enterprise using EMU, how are changes in an IdP group propagated to a linked enterprise team's membership?

1. Through SSH certificate authentication

   SSH certificates authenticate connections rather than provision team membership.

2. Through WebAuthn authentication

   WebAuthn verifies authentication rather than synchronize groups.

3. Through SCIM synchronization **[CORRECT]**

   EMU enterprise-team group synchronization uses SCIM.

4. Through SAML assertions alone

   SAML assertions authenticate users rather than synchronize these group memberships.

**Concept:** EMU enterprise-team synchronization

**Authored coaching hints:**

- Distinguish sign-in, lifecycle provisioning, and group membership.
- Identify which system supplies the information GitHub needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una empresa con EMU, ¿cómo se propagan los cambios de un grupo del IdP a los miembros de un equipo empresarial vinculado?

1. Mediante autenticación con certificados SSH

   Los certificados SSH autentican conexiones, no aprovisionan miembros de equipos.

2. Mediante autenticación WebAuthn

   WebAuthn verifica la autenticación, no sincroniza grupos.

3. Mediante sincronización SCIM **[CORRECT]**

   La sincronización de grupos de equipos empresariales EMU utiliza SCIM.

4. Solo mediante aserciones SAML

   Las aserciones SAML autentican usuarios, no sincronizan estas pertenencias.

**Concept:** Sincronización de equipos empresariales EMU

**Authored coaching hints:**

- Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.
- Identifica qué sistema proporciona la información que GitHub necesita.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma empresa com EMU, como alterações em um grupo do IdP são propagadas aos membros de uma equipe empresarial vinculada?

1. Por autenticação com certificados SSH

   Certificados SSH autenticam conexões, não provisionam membros de equipes.

2. Por autenticação WebAuthn

   WebAuthn verifica a autenticação, não sincroniza grupos.

3. Por sincronização SCIM **[CORRECT]**

   A sincronização de grupos de equipes empresariais EMU usa SCIM.

4. Apenas por asserções SAML

   Asserções SAML autenticam usuários, não sincronizam essas associações.

**Concept:** Sincronização de equipes empresariais EMU

**Authored coaching hints:**

- Diferencie autenticação, provisionamento e associação a grupos.
- Identifique qual sistema fornece as informações de que o GitHub precisa.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-038:ae99d8d955479c37c062e6323dff26d1b50a0a9692a6636fbd830f86360167f5 -->
## Question 38: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-038`

**Content revision:** `ae99d8d955479c37c062e6323dff26d1b50a0a9692a6636fbd830f86360167f5`

**en review revision:** `ad156b89049837d4f77f994718d850ee8d0eb633ecaa13d1e365293f5dbfdc52`
**es review revision:** `d21540688dfad656499119f39a6e5a8c0579a41992c055fb900e67bcbd4aee4d`
**pt-BR review revision:** `f6bd2c6102957fa80365861c9be6fe7414ebb6478cffa4173b5f368df002b166`

### English

An enterprise team is added to an organization in GitHub Enterprise Cloud. Can organization administrators remove permissions granted to that team by enterprise administrators?

1. Yes; any organization owner can override enterprise grants

   Organization ownership does not authorize removal of these inherited grants.

2. Yes; assigning Read always cancels enterprise grants

   A lower local grant does not cancel higher enterprise-granted permissions.

3. No; organization administrators cannot grant the team any additional access

   Organization administrators can grant additional access and organization roles.

4. No; enterprise-granted permissions cannot be removed at organization level **[CORRECT]**

   Organization administrators cannot remove enterprise-granted team permissions.

**Concept:** Enterprise team permission inheritance

**Authored coaching hints:**

- Identify which administrative level owns the control.
- Consider inherited requirements as well as local settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se añade un equipo empresarial a una organización en GitHub Enterprise Cloud. ¿Pueden los administradores de organización retirar permisos que los administradores empresariales concedieron al equipo?

1. Sí; cualquier propietario de organización puede anular concesiones empresariales

   Ser propietario de organización no autoriza a eliminar esas concesiones heredadas.

2. Sí; asignar Read siempre cancela las concesiones empresariales

   Una concesión local menor no cancela permisos empresariales superiores.

3. No; los administradores de organización no pueden conceder acceso adicional al equipo

   Sí pueden conceder acceso adicional y roles de organización.

4. No; los permisos empresariales no pueden retirarse a nivel de organización **[CORRECT]**

   Los administradores de organización no pueden retirar permisos del equipo concedidos por la empresa.

**Concept:** Herencia de permisos de equipos empresariales

**Authored coaching hints:**

- Identifica qué nivel administrativo controla la configuración.
- Considera tanto los requisitos heredados como los ajustes locales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe empresarial é adicionada a uma organização no GitHub Enterprise Cloud. Administradores da organização podem remover permissões concedidas à equipe por administradores empresariais?

1. Sim; qualquer proprietário da organização pode anular concessões empresariais

   Ser proprietário da organização não autoriza remover essas concessões herdadas.

2. Sim; atribuir Read sempre cancela concessões empresariais

   Uma concessão local menor não cancela permissões empresariais superiores.

3. Não; administradores da organização não podem conceder acesso adicional à equipe

   Eles podem conceder acesso adicional e funções da organização.

4. Não; permissões empresariais não podem ser removidas no nível da organização **[CORRECT]**

   Administradores da organização não podem remover permissões da equipe concedidas pela empresa.

**Concept:** Herança de permissões de equipes empresariais

**Authored coaching hints:**

- Identifique qual nível administrativo controla a configuração.
- Considere os requisitos herdados e as configurações locais.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams>

<!-- certification-coach-question:admin-039:46426c940d82c8997dadd951655b96f9e5dddf64795510e5f783605ec83e4b21 -->
## Question 39: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-039`

**Content revision:** `46426c940d82c8997dadd951655b96f9e5dddf64795510e5f783605ec83e4b21`

**en review revision:** `810f9be272e621d408f8a628ce24f93bf7bac6f7cbffd414e34b9c669c940581`
**es review revision:** `887312a1a04b58cf74e9e4799c563433c86339d803686ef763ffe22405ac3716`
**pt-BR review revision:** `b463ee6ca2a05a1a35351a8fd6b0bcd0d649dcdd5c9f6b34a8b5393fd9ede4f0`

### English

A repository administrator on GitHub Enterprise Cloud is auditing who has access to a private organization repository. Which English UI area lists its collaborators and teams?

1. Repository Settings → Collaborators &amp; teams **[CORRECT]**

   Collaborators &amp; teams is the repository access-management area.

2. Repository Settings → Webhooks

   Webhooks lists event delivery integrations.

3. Organization Settings → Authentication security

   Authentication security concerns sign-in requirements, not this repository's access list.

4. Organization Settings → Member privileges

   Member privileges sets organization-wide defaults rather than listing this repository's grants.

**Concept:** Repository access audit

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador de repositorio de GitHub Enterprise Cloud audita quién tiene acceso a un repositorio privado de organización. ¿Qué área de la interfaz inglesa muestra sus colaboradores y equipos?

1. Repository Settings → Collaborators &amp; teams **[CORRECT]**

   Collaborators &amp; teams es el área de gestión del acceso al repositorio.

2. Repository Settings → Webhooks

   Webhooks muestra integraciones de entrega de eventos.

3. Organization Settings → Authentication security

   Authentication security trata requisitos de autenticación, no la lista de acceso del repositorio.

4. Organization Settings → Member privileges

   Member privileges establece valores generales de la organización, no enumera los permisos de este repositorio.

**Concept:** Auditoría de acceso al repositorio

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador de repositório do GitHub Enterprise Cloud audita quem tem acesso a um repositório privado da organização. Qual área da interface em inglês lista seus colaboradores e equipes?

1. Repository Settings → Collaborators &amp; teams **[CORRECT]**

   Collaborators &amp; teams é a área de gerenciamento de acesso ao repositório.

2. Repository Settings → Webhooks

   Webhooks lista integrações de entrega de eventos.

3. Organization Settings → Authentication security

   Authentication security trata de requisitos de autenticação, não da lista de acesso do repositório.

4. Organization Settings → Member privileges

   Member privileges define padrões gerais da organização, não lista as concessões deste repositório.

**Concept:** Auditoria de acesso ao repositório

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository>

<!-- certification-coach-question:admin-040:af63f3c441cc891f413c12a0b109442d3606a5a170ecd1f75755abf026905a41 -->
## Question 40: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-040`

**Content revision:** `af63f3c441cc891f413c12a0b109442d3606a5a170ecd1f75755abf026905a41`

**en review revision:** `b952140dc103d987be58d379f2b18298386d1603875933d24cc74f0ae3b1418b`
**es review revision:** `e3cad5b15ce1198e88d099139b9f91c77ce098d70ee9c3f9e6fe28c983ec1ef0`
**pt-BR review revision:** `766411cec5c0354db7572a6cecb7d7bc9b707018ffb7c5b9bc08dba50b9dbdf7`

### English

To whom do an organization's base repository permissions apply?

1. All members of every enterprise organization

   Membership in another organization does not confer this organization's base permissions.

2. Organization members **[CORRECT]**

   Base permissions apply to members of that organization.

3. All outside collaborators

   Outside collaborators are explicitly outside base-permission scope.

4. All users of GitHub.com

   Organization settings do not grant access to all GitHub users.

**Concept:** Base-permission population

**Authored coaching hints:**

- Trace all membership and permission sources.
- Distinguish enterprise, organization, team, and repository boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿A quién se aplican los permisos base de repositorio de una organización?

1. A los miembros de todas las organizaciones de la empresa

   Pertenecer a otra organización no concede estos permisos base.

2. A los miembros de esa organización **[CORRECT]**

   Los permisos base se aplican a miembros de esa organización.

3. A todos los colaboradores externos

   Los colaboradores externos quedan expresamente fuera de ese ámbito.

4. A todos los usuarios de GitHub.com

   Los ajustes de organización no conceden acceso a todos los usuarios de GitHub.

**Concept:** Destinatarios de permisos base

**Authored coaching hints:**

- Revisa todas las fuentes de pertenencia y permisos.
- Distingue los límites de empresa, organización, equipo y repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A quem se aplicam as permissões básicas de repositório de uma organização?

1. Aos membros de todas as organizações da empresa

   Pertencer a outra organização não concede essas permissões básicas.

2. Aos membros dessa organização **[CORRECT]**

   As permissões básicas se aplicam a membros dessa organização.

3. A todos os colaboradores externos

   Colaboradores externos ficam explicitamente fora desse escopo.

4. A todos os usuários do GitHub.com

   Configurações da organização não concedem acesso a todos os usuários do GitHub.

**Concept:** Destinatários das permissões básicas

**Authored coaching hints:**

- Examine todas as origens de associação e permissões.
- Diferencie os limites de empresa, organização, equipe e repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization>

<!-- certification-coach-question:admin-041:b78c8bffc869f25446cdb4d6637c5f12f003dd420efa14023452766690389ce8 -->
## Question 41: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-041`

**Content revision:** `b78c8bffc869f25446cdb4d6637c5f12f003dd420efa14023452766690389ce8`

**en review revision:** `1c65387906efd73d16cc41e3482103d69f9ee8a2da2010c6732a2c4f9de2b851`
**es review revision:** `6b727c5e69b93c60dc765a5175d2ea903d2d88fcc1407e4cf08dc7ee4272f0fc`
**pt-BR review revision:** `0f47c0e41711572c5be6b0406cad5534a5e53322d4ab3e5954283c52e42f0f1e`

### English

In GitHub Enterprise Cloud, two active rulesets target the same branch and require different numbers of approving reviews. For a contributor without bypass, which requirement applies?

1. Only the repository-level ruleset

   A local ruleset does not replace other applicable rulesets.

2. The less restrictive review requirement

   The weaker requirement does not override the stronger one.

3. The more restrictive review requirement **[CORRECT]**

   Applicable rules aggregate, and the most restrictive version of the same rule applies.

4. Only the most recently created ruleset

   Rulesets do not use creation-order priority.

**Concept:** Ruleset aggregation

**Authored coaching hints:**

- Identify which administrative level owns the control.
- Consider inherited requirements as well as local settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, dos rulesets activos se aplican a la misma rama y exigen distintas cantidades de aprobaciones. Para un colaborador sin bypass, ¿qué requisito se aplica?

1. Solo el ruleset de repositorio

   Un ruleset local no sustituye los demás aplicables.

2. El requisito de revisión menos restrictivo

   El requisito más débil no anula el más fuerte.

3. El requisito de revisión más restrictivo **[CORRECT]**

   Las reglas aplicables se agregan y prevalece la versión más restrictiva de la misma regla.

4. Solo el ruleset creado más recientemente

   Los rulesets no tienen prioridad por fecha de creación.

**Concept:** Agregación de rulesets

**Authored coaching hints:**

- Identifica qué nivel administrativo controla la configuración.
- Considera tanto los requisitos heredados como los ajustes locales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, dois rulesets ativos se aplicam à mesma branch e exigem quantidades diferentes de aprovações. Para um colaborador sem bypass, qual requisito se aplica?

1. Apenas o ruleset do repositório

   Um ruleset local não substitui os demais aplicáveis.

2. O requisito de revisão menos restritivo

   O requisito mais fraco não anula o mais forte.

3. O requisito de revisão mais restritivo **[CORRECT]**

   As regras aplicáveis são agregadas, e prevalece a versão mais restritiva da mesma regra.

4. Apenas o ruleset criado mais recentemente

   Rulesets não têm prioridade por data de criação.

**Concept:** Agregação de rulesets

**Authored coaching hints:**

- Identifique qual nível administrativo controla a configuração.
- Considere os requisitos herdados e as configurações locais.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>

<!-- certification-coach-question:admin-042:773f271b4bfbe7d9f5cce59877caa5dcc97b5ae6a8b4ca69993df328c017a8a8 -->
## Question 42: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-042`

**Content revision:** `773f271b4bfbe7d9f5cce59877caa5dcc97b5ae6a8b4ca69993df328c017a8a8`

**en review revision:** `8153c83910782277b5c18f2ba6abaabb4a62c101863af42a03f66093f0028778`
**es review revision:** `de527ee19c9a0feaf4a11f15e00017f5a7ea81586400f30c79674615cbe1990d`
**pt-BR review revision:** `24e11001972032f227143e9bcd08b1ebb4b0902925a6b8cd6c7b1b8f18b7e861`

### English

What is the minimum repository access needed to view its active rulesets in GitHub Enterprise Cloud?

1. Triage

   Triage is more access than required for viewing rulesets.

2. Maintain

   Maintain is unnecessary for viewing active rules.

3. Admin

   Admin is required for many changes, not for merely viewing active rulesets.

4. Read **[CORRECT]**

   Anyone with Read access can view active repository rulesets.

**Concept:** Ruleset visibility for auditors

**Authored coaching hints:**

- Identify the smallest set of capabilities the task requires.
- Separate reading, contribution, maintenance, and administration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué acceso mínimo al repositorio se necesita para ver sus rulesets activos en GitHub Enterprise Cloud?

1. Triage

   Triage es más acceso del necesario para ver rulesets.

2. Maintain

   Maintain es innecesario para ver reglas activas.

3. Admin

   Admin se necesita para muchos cambios, no para consultar rulesets activos.

4. Read **[CORRECT]**

   Cualquier persona con Read puede ver los rulesets activos del repositorio.

**Concept:** Visibilidad de rulesets para auditores

**Authored coaching hints:**

- Identifica el conjunto mínimo de capacidades que exige la tarea.
- Distingue lectura, contribución, mantenimiento y administración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é o acesso mínimo ao repositório necessário para visualizar seus rulesets ativos no GitHub Enterprise Cloud?

1. Triage

   Triage é mais acesso do que o necessário para visualizar rulesets.

2. Maintain

   Maintain é desnecessário para visualizar regras ativas.

3. Admin

   Admin é necessário para muitas alterações, não para consultar rulesets ativos.

4. Read **[CORRECT]**

   Qualquer pessoa com Read pode visualizar os rulesets ativos do repositório.

**Concept:** Visibilidade de rulesets para auditores

**Authored coaching hints:**

- Identifique o menor conjunto de capacidades exigido pela tarefa.
- Diferencie leitura, contribuição, manutenção e administração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>

<!-- certification-coach-question:admin-043:487c03dc0916b4e7c8b9eb32efe8493a04fbde12c449e9be712bb54eaa8273f4 -->
## Question 43: Manage GitHub identities and access

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-043`

**Content revision:** `487c03dc0916b4e7c8b9eb32efe8493a04fbde12c449e9be712bb54eaa8273f4`

**en review revision:** `86b967f7a4bc801c67c46791bb9f34997b30a186600cd2ef40a8dec4c2158a48`
**es review revision:** `8aef32d3e9cc8e9b777c2de3f139109f7b1d430861f43adb05166ceee4fe9027`
**pt-BR review revision:** `d3a6a383b06172353a830a2cc183394ea4d484307810e78ca51808819a369205`

### English

A GitHub Enterprise Cloud owner enforces a policy restricting repository visibility changes across organizations. Who can relax that enterprise-enforced restriction?

1. An enterprise owner changing the enterprise policy **[CORRECT]**

   The restriction is owned and enforced at enterprise scope.

2. An organization owner changing a local preference

   An organization cannot override an enforced enterprise policy.

3. A repository administrator changing repository settings

   Repository administration cannot bypass an enterprise-enforced policy.

4. A team maintainer changing team membership

   Team maintenance does not control enterprise policy.

**Concept:** Enterprise policy authority

**Authored coaching hints:**

- Identify which administrative level owns the control.
- Consider inherited requirements as well as local settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de GitHub Enterprise Cloud exige una política que restringe cambios de visibilidad de repositorios en las organizaciones. ¿Quién puede flexibilizar esa restricción empresarial?

1. Un propietario empresarial que cambie la política empresarial **[CORRECT]**

   La restricción se controla y exige a nivel empresarial.

2. Un propietario de organización que cambie una preferencia local

   Una organización no puede anular una política empresarial obligatoria.

3. Un administrador de repositorio que cambie sus ajustes

   Administrar un repositorio no permite eludir esa política.

4. Un responsable de equipo que cambie sus miembros

   Gestionar equipos no controla políticas empresariales.

**Concept:** Autoridad de políticas empresariales

**Authored coaching hints:**

- Identifica qué nivel administrativo controla la configuración.
- Considera tanto los requisitos heredados como los ajustes locales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário do GitHub Enterprise Cloud impõe uma política que restringe alterações de visibilidade dos repositórios nas organizações. Quem pode flexibilizar essa restrição empresarial?

1. Um proprietário empresarial alterando a política empresarial **[CORRECT]**

   A restrição é controlada e imposta no nível empresarial.

2. Um proprietário da organização alterando uma preferência local

   Uma organização não pode anular uma política empresarial obrigatória.

3. Um administrador de repositório alterando suas configurações

   Administrar um repositório não permite contornar essa política.

4. Um mantenedor de equipe alterando seus membros

   Gerenciar equipes não controla políticas empresariais.

**Concept:** Autoridade de políticas empresariais

**Authored coaching hints:**

- Identifique qual nível administrativo controla a configuração.
- Considere os requisitos herdados e as configurações locais.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise>

<!-- certification-coach-question:admin-044:1517b77c87ee6c75b972f591240929dee13ded6e8818b7edc33cf98fb8d80ef6 -->
## Question 44: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-044`

**Content revision:** `1517b77c87ee6c75b972f591240929dee13ded6e8818b7edc33cf98fb8d80ef6`

**en review revision:** `91f5001c73e811f009343e28c973810d53566d3001b76720120975bd5868207c`
**es review revision:** `9bc33d2efba3603c54857459391761b48c2289a68fb66da03079f66f00d43cd9`
**pt-BR review revision:** `2b5e522a21a3d790389dc0f13e02fb6d4382c333ef215452b0886bf1ee0e1f63`

### English

Which deployment lets an enterprise host GitHub in its own data center or a supported cloud environment?

1. GitHub Enterprise Cloud with data residency

   Cloud data residency provides regional hosting, not a self-hosted appliance.

2. GitHub Enterprise Server **[CORRECT]**

   GitHub Enterprise Server is self-hosted on customer-managed infrastructure.

3. GitHub Enterprise Cloud with personal accounts

   Cloud with personal accounts remains a GitHub-operated service.

4. GitHub Enterprise Cloud with EMU

   Cloud with EMU changes identity control, not infrastructure ownership.

**Concept:** Self-hosted deployment

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué implementación permite alojar GitHub en el centro de datos propio de una empresa o en un entorno de nube compatible?

1. GitHub Enterprise Cloud con residencia de datos

   La residencia de datos ofrece alojamiento regional, no una instalación autogestionada.

2. GitHub Enterprise Server **[CORRECT]**

   GitHub Enterprise Server se aloja en infraestructura gestionada por el cliente.

3. GitHub Enterprise Cloud con cuentas personales

   Cloud con cuentas personales sigue siendo un servicio operado por GitHub.

4. GitHub Enterprise Cloud con EMU

   Cloud con EMU cambia el control de identidad, no la propiedad de la infraestructura.

**Concept:** Implementación autohospedada

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual implantação permite hospedar o GitHub no próprio datacenter da empresa ou em um ambiente de nuvem compatível?

1. GitHub Enterprise Cloud com residência de dados

   A residência de dados oferece hospedagem regional, não uma instalação autogerenciada.

2. GitHub Enterprise Server **[CORRECT]**

   O GitHub Enterprise Server é hospedado em infraestrutura gerenciada pelo cliente.

3. GitHub Enterprise Cloud com contas pessoais

   Cloud com contas pessoais continua sendo um serviço operado pelo GitHub.

4. GitHub Enterprise Cloud com EMU

   Cloud com EMU muda o controle de identidade, não a propriedade da infraestrutura.

**Concept:** Implantação auto-hospedada

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use>

<!-- certification-coach-question:admin-045:9dcf922537b3cc68ee3fe41a82934f5bf2dd1c891c05af6b242079a8ecdf09fa -->
## Question 45: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-045`

**Content revision:** `9dcf922537b3cc68ee3fe41a82934f5bf2dd1c891c05af6b242079a8ecdf09fa`

**en review revision:** `eb1df63fc7a9a7e433c7c40a10be54622130a69f2013765d233acf7f9abd7762`
**es review revision:** `e07344df719c89c1015b66931e9fbdf3ed1930b356807b20e12635772a8630ae`
**pt-BR review revision:** `7e67ba3bf760dbb885086c2a7401e81bc925cdc3bcf6ef4d24c3dcb9255e53c2`

### English

Which operational task is handled by GitHub rather than the customer when using GitHub Enterprise Cloud instead of GitHub Enterprise Server?

1. Defining the organization's review standards

   Customers still define their developer-process standards.

2. Assigning enterprise billing administrators

   Customers still choose their enterprise administrators.

3. Maintaining and upgrading the hosted platform **[CORRECT]**

   GitHub operates the Cloud platform, avoiding customer-managed platform upgrades.

4. Choosing repository collaborators

   Customers still manage repository access.

**Concept:** Cloud operations boundary

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tarea operativa realiza GitHub en vez del cliente al usar GitHub Enterprise Cloud en lugar de GitHub Enterprise Server?

1. Definir los estándares de revisión de la organización

   El cliente sigue definiendo sus procesos de desarrollo.

2. Asignar administradores de facturación empresarial

   El cliente sigue eligiendo sus administradores empresariales.

3. Mantener y actualizar la plataforma alojada **[CORRECT]**

   GitHub opera Cloud y evita al cliente gestionar actualizaciones de la plataforma.

4. Elegir los colaboradores del repositorio

   El cliente sigue gestionando el acceso al repositorio.

**Concept:** Límite operativo de Cloud

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tarefa operacional é realizada pelo GitHub, em vez do cliente, ao usar GitHub Enterprise Cloud no lugar do GitHub Enterprise Server?

1. Definir os padrões de revisão da organização

   O cliente continua definindo seus processos de desenvolvimento.

2. Atribuir administradores de cobrança empresarial

   O cliente continua escolhendo seus administradores empresariais.

3. Manter e atualizar a plataforma hospedada **[CORRECT]**

   O GitHub opera Cloud, dispensando o cliente de gerenciar atualizações da plataforma.

4. Escolher os colaboradores do repositório

   O cliente continua gerenciando o acesso ao repositório.

**Concept:** Limite operacional do Cloud

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency>

<!-- certification-coach-question:admin-046:69a67df5e10b5f7fbaacc4b1c544139e1775235dacb41e4c25c69bae1f8e8194 -->
## Question 46: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-046`

**Content revision:** `69a67df5e10b5f7fbaacc4b1c544139e1775235dacb41e4c25c69bae1f8e8194`

**en review revision:** `0fc17e1ae1a689e9089d0e979040e5267cece28ac1a5b3310b56f3709b5baa38`
**es review revision:** `f57ecea02b7f9f5580333e17cab3f4eeec62d9df108effd6b22b7e0bd00c6ed2`
**pt-BR review revision:** `f49389890170bebcd0738cf8579c27f772607c22759a03e80de2d17e098b1df1`

### English

An enterprise needs GitHub-operated hosting on GitHub.com and IdP-controlled user-account lifecycles, without selecting regional data residency. Which deployment fits?

1. GitHub Enterprise Cloud with personal accounts

   Personal accounts remain individually owned.

2. GitHub Enterprise Server with local accounts

   Server is customer-hosted and local accounts lack the required IdP lifecycle.

3. GitHub Enterprise Server with SAML authentication

   Server SAML does not make the deployment a GitHub-operated Cloud service.

4. GitHub Enterprise Cloud with EMU on GitHub.com **[CORRECT]**

   EMU is available on GitHub.com and provides IdP-managed accounts.

**Concept:** Cloud managed-identity deployment

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa necesita alojamiento operado por GitHub en GitHub.com y ciclos de vida de cuentas controlados por el IdP, sin elegir residencia regional de datos. ¿Qué implementación encaja?

1. GitHub Enterprise Cloud con cuentas personales

   Las cuentas personales siguen perteneciendo a cada individuo.

2. GitHub Enterprise Server con cuentas locales

   Server lo aloja el cliente y las cuentas locales no cumplen el ciclo de vida requerido.

3. GitHub Enterprise Server con autenticación SAML

   SAML en Server no lo convierte en un servicio Cloud operado por GitHub.

4. GitHub Enterprise Cloud con EMU en GitHub.com **[CORRECT]**

   EMU está disponible en GitHub.com y ofrece cuentas gestionadas por el IdP.

**Concept:** Implementación Cloud con identidad administrada

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa precisa de hospedagem operada pelo GitHub no GitHub.com e ciclos de vida de contas controlados pelo IdP, sem escolher residência regional dos dados. Qual implantação atende?

1. GitHub Enterprise Cloud com contas pessoais

   Contas pessoais continuam pertencendo a cada indivíduo.

2. GitHub Enterprise Server com contas locais

   Server é hospedado pelo cliente, e contas locais não atendem ao ciclo de vida exigido.

3. GitHub Enterprise Server com autenticação SAML

   SAML no Server não o torna um serviço Cloud operado pelo GitHub.

4. GitHub Enterprise Cloud com EMU no GitHub.com **[CORRECT]**

   EMU está disponível no GitHub.com e oferece contas gerenciadas pelo IdP.

**Concept:** Implantação Cloud com identidade gerenciada

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type>

<!-- certification-coach-question:admin-047:8d98b3787449b30fb740eb161ddb5879afb0cf09e40b539ded9184aab0f4df31 -->
## Question 47: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-047`

**Content revision:** `8d98b3787449b30fb740eb161ddb5879afb0cf09e40b539ded9184aab0f4df31`

**en review revision:** `1ea3ce13f930945759110d0e7fdf257ac86850d35a9cdbf01e23298f706c9b37`
**es review revision:** `76e1bfdeba925b37e3ec9502332ac992d0ee1c8f8b67c1a5a33487d5b31e6fed`
**pt-BR review revision:** `a1f45f7bd853786349f258b7dd088701ef466544d0bbec70c6c9d14878ddd23b`

### English

What combination is required for GitHub Enterprise Cloud with data residency?

1. Enterprise Managed Users on a dedicated GHE.com subdomain **[CORRECT]**

   Data-resident Cloud enterprises use EMU and a dedicated GHE.com subdomain.

2. Personal accounts on a dedicated GitHub.com organization

   A GitHub.com organization with personal accounts is not the data-residency model.

3. Local accounts on a customer-hosted GHES appliance

   GHES is a separate self-hosted deployment.

4. Personal accounts on an arbitrary custom GitHub.com domain

   An arbitrary custom domain does not establish a data-resident Cloud enterprise.

**Concept:** Data-residency identity and host

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué combinación se requiere para GitHub Enterprise Cloud con residencia de datos?

1. Enterprise Managed Users en un subdominio dedicado de GHE.com **[CORRECT]**

   Las empresas Cloud con residencia de datos usan EMU y un subdominio dedicado de GHE.com.

2. Cuentas personales en una organización dedicada de GitHub.com

   Una organización GitHub.com con cuentas personales no es ese modelo.

3. Cuentas locales en una instalación GHES alojada por el cliente

   GHES es una implementación autohospedada distinta.

4. Cuentas personales en un dominio personalizado arbitrario de GitHub.com

   Un dominio arbitrario no establece una empresa Cloud con residencia de datos.

**Concept:** Identidad y alojamiento con residencia de datos

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual combinação é necessária para GitHub Enterprise Cloud com residência de dados?

1. Enterprise Managed Users em um subdomínio dedicado do GHE.com **[CORRECT]**

   Empresas Cloud com residência de dados usam EMU e um subdomínio dedicado do GHE.com.

2. Contas pessoais em uma organização dedicada do GitHub.com

   Uma organização GitHub.com com contas pessoais não é esse modelo.

3. Contas locais em uma instalação GHES hospedada pelo cliente

   GHES é uma implantação auto-hospedada distinta.

4. Contas pessoais em um domínio personalizado arbitrário do GitHub.com

   Um domínio arbitrário não estabelece uma empresa Cloud com residência de dados.

**Concept:** Identidade e hospedagem com residência de dados

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency>

<!-- certification-coach-question:admin-048:a6a2b271c8b67bae585f6849d95f85f5533406bc5f878ac2f94a4d2f39288537 -->
## Question 48: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-048`

**Content revision:** `a6a2b271c8b67bae585f6849d95f85f5533406bc5f878ac2f94a4d2f39288537`

**en review revision:** `59e6b9c1c2ad161caa3932f53a8aac59f0e6fd03a76c9a035a4a3ad17c1be60e`
**es review revision:** `23fda7c5bee5dc1a9ade45633177d8c027aacf5dd429f65913d836bdb0843266`
**pt-BR review revision:** `9f06e355f1f4dfd78da4a9bee3b2f8dd58049f4ba244ede3cf6d98be044cda2b`

### English

What does adopting EMU require for an existing GitHub.com enterprise that currently uses personal accounts?

1. A billing-manager role assignment

   Billing role assignments do not change the account model.

2. Migration to a new enterprise account **[CORRECT]**

   GitHub documents migration to a new enterprise account for this identity-model change.

3. An in-place conversion of every personal account

   Existing personal accounts are not converted in place into managed accounts.

4. A repository visibility change to internal

   Changing visibility does not change enterprise identity type.

**Concept:** Identity-model migration

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué requiere adoptar EMU en una empresa existente de GitHub.com que usa cuentas personales?

1. Asignar un rol de administrador de facturación

   Asignar roles de facturación no cambia el modelo de cuentas.

2. Migrar a una cuenta empresarial nueva **[CORRECT]**

   GitHub documenta la migración a una cuenta empresarial nueva para cambiar este modelo.

3. Convertir cada cuenta personal en la misma empresa

   Las cuentas personales existentes no se convierten directamente en administradas.

4. Cambiar la visibilidad de los repositorios a internal

   Cambiar la visibilidad no cambia el tipo de identidad empresarial.

**Concept:** Migración del modelo de identidad

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a adoção do EMU exige em uma empresa existente do GitHub.com que usa contas pessoais?

1. Atribuir uma função de gerente de cobrança

   Atribuir funções de cobrança não muda o modelo de contas.

2. Migrar para uma nova conta empresarial **[CORRECT]**

   O GitHub documenta a migração para uma nova conta empresarial para mudar esse modelo.

3. Converter cada conta pessoal na mesma empresa

   Contas pessoais existentes não são convertidas diretamente em gerenciadas.

4. Alterar a visibilidade dos repositórios para internal

   Alterar a visibilidade não muda o tipo de identidade empresarial.

**Concept:** Migração do modelo de identidade

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type>

<!-- certification-coach-question:admin-049:c004a97fd2fdeafdc4f2fcb86f0df1c2fd8029db341e55ec356b4b6ada34f233 -->
## Question 49: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-049`

**Content revision:** `c004a97fd2fdeafdc4f2fcb86f0df1c2fd8029db341e55ec356b4b6ada34f233`

**en review revision:** `eda44c2d233b076cc14ca532a4bb3528a0b7013bc3d53e104b41cb2b453f6384`
**es review revision:** `96a97a48611686e5b085e379796fbd05c0c9dec77193bad7b9de201e3b099069`
**pt-BR review revision:** `7b25f17f1afbf9d0236286a27b4093e97f366194818cdcc74e236f55e18dcad1`

### English

In a combined GitHub Enterprise Cloud and Server deployment, how are most administrative policies managed?

1. Exclusively in the Server Management Console for both deployments

   Server's Management Console does not administer Cloud policies.

2. Automatically through license-usage synchronization

   License synchronization does not synchronize enterprise policies.

3. Separately in each enterprise account **[CORRECT]**

   Most administration, including policies, remains separate per enterprise account.

4. Exclusively in the Cloud account for both deployments

   The Cloud account does not universally administer Server policies.

**Concept:** Hybrid administration boundaries

**Authored coaching hints:**

- Separate hosting responsibility from the identity model.
- Consider data location, operations, and collaboration requirements independently.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una implementación combinada de GitHub Enterprise Cloud y Server, ¿cómo se gestionan la mayoría de las políticas administrativas?

1. Solo en Management Console de Server para ambas implementaciones

   Management Console de Server no administra las políticas de Cloud.

2. Automáticamente mediante sincronización del uso de licencias

   Sincronizar licencias no sincroniza políticas empresariales.

3. Por separado en cada cuenta empresarial **[CORRECT]**

   La mayor parte de la administración, incluidas las políticas, sigue separada por cuenta.

4. Solo en la cuenta Cloud para ambas implementaciones

   La cuenta Cloud no administra universalmente las políticas de Server.

**Concept:** Límites de administración híbrida

**Authored coaching hints:**

- Distingue la responsabilidad del alojamiento del modelo de identidad.
- Considera por separado ubicación de datos, operaciones y colaboración.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma implantação combinada de GitHub Enterprise Cloud e Server, como a maioria das políticas administrativas é gerenciada?

1. Exclusivamente no Management Console do Server para ambas as implantações

   O Management Console do Server não administra políticas do Cloud.

2. Automaticamente pela sincronização do uso de licenças

   Sincronizar licenças não sincroniza políticas empresariais.

3. Separadamente em cada conta empresarial **[CORRECT]**

   A maior parte da administração, incluindo políticas, continua separada por conta.

4. Exclusivamente na conta Cloud para ambas as implantações

   A conta Cloud não administra universalmente as políticas do Server.

**Concept:** Limites da administração híbrida

**Authored coaching hints:**

- Diferencie a responsabilidade pela hospedagem do modelo de identidade.
- Considere separadamente localização dos dados, operações e colaboração.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use>

<!-- certification-coach-question:admin-050:7e5324402fe5b24b7a7c6d0a15f5444ff27a446bde1865a7a21ecba36eaf134d -->
## Question 50: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-050`

**Content revision:** `7e5324402fe5b24b7a7c6d0a15f5444ff27a446bde1865a7a21ecba36eaf134d`

**en review revision:** `ef9f196fe527290063d704b3d80748fff29a69bef69fe09b7915c9e4b7a450e0`
**es review revision:** `ae02974d92f4c19f13ff8ebb6dea231f8214d95de507984b19f1cafad6306a41`
**pt-BR review revision:** `7c63b5413b33cee335fbc252a82e8440e54646b4131966ba7a412d80872c6e8f`

### English

A repository moves from one GitHub.com organization to another, and nobody reuses its old location. What happens when an existing clone fetches using the old remote URL?

1. Fetch fails until the clone's entire commit history is downloaded again.

   A transfer preserves Git history and redirects the old Git URL.

2. The old URL becomes a permanent independent copy of the repository.

   The old location redirects; it is not a second repository copy.

3. The old URL grants the clone access regardless of its new permissions.

   Redirection does not bypass authentication or repository authorization.

4. Git redirects to the new location; updating origin is still recommended. **[CORRECT]**

   Git clone, fetch, and push requests redirect after transfer, but the new URL avoids reliance on that redirect.

**Concept:** Repository transfers redirect Git URLs without bypassing access checks.

**Authored coaching hints:**

- Separate the repository's location from its Git history.
- Consider whether a redirect also changes authorization.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio se transfiere entre organizaciones de GitHub.com y nadie reutiliza su ubicación anterior. ¿Qué ocurre si un clon usa la URL remota anterior para fetch?

1. Fetch falla hasta descargar de nuevo todo el historial del clon.

   La transferencia conserva el historial Git y redirige la URL anterior.

2. La URL anterior se convierte en una copia independiente permanente.

   La ubicación anterior redirige; no es una segunda copia del repositorio.

3. La URL anterior concede acceso sin importar los nuevos permisos.

   La redirección no evita la autenticación ni la autorización del repositorio.

4. Git redirige a la nueva ubicación; aun así se recomienda actualizar origin. **[CORRECT]**

   Las solicitudes clone, fetch y push se redirigen, pero la URL nueva evita depender de ello.

**Concept:** Las transferencias redirigen las URL Git sin evitar comprobaciones de acceso.

**Authored coaching hints:**

- Distingue la ubicación del repositorio de su historial Git.
- Considera si una redirección también cambia la autorización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório é transferido entre organizações do GitHub.com, e ninguém reutiliza o endereço antigo. O que acontece se um clone fizer fetch pela URL remota antiga?

1. O fetch falha até baixar novamente todo o histórico do clone.

   A transferência preserva o histórico Git e redireciona a URL antiga.

2. A URL antiga vira uma cópia independente e permanente do repositório.

   O endereço antigo redireciona; ele não é uma segunda cópia do repositório.

3. A URL antiga concede acesso independentemente das novas permissões.

   O redirecionamento não ignora a autenticação nem a autorização do repositório.

4. O Git redireciona ao novo endereço; ainda é recomendado atualizar origin. **[CORRECT]**

   Solicitações clone, fetch e push são redirecionadas, mas a URL nova evita depender disso.

**Concept:** Transferências redirecionam URLs Git sem ignorar verificações de acesso.

**Authored coaching hints:**

- Diferencie a localização do repositório de seu histórico Git.
- Considere se um redirecionamento também altera a autorização.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository>

<!-- certification-coach-question:admin-051:629217906e1ca36e6f2fb02ea2373f12d75b9e5fba9ec1c631ac09c587f9af69 -->
## Question 51: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-051`

**Content revision:** `629217906e1ca36e6f2fb02ea2373f12d75b9e5fba9ec1c631ac09c587f9af69`

**en review revision:** `65faad6b4d2cf354c908107741de95e45f50c412fc00c14c583fe91f2f85c57b`
**es review revision:** `48bce1eeee3b4b5b76f561358a47b7c986cdb4ded29e05c358942dca2a654f40`
**pt-BR review revision:** `9bb5802995f67f86a4b1797db63ed65885977e14fbcf395008357d8761b53b78`

### English

A reproducible GitHub Enterprise Cloud product error remains after administrators verify configuration. Which evidence best helps an entitled support engineer reproduce it?

1. Steps, exact errors, affected URLs, and expected results **[CORRECT]**

   These details identify the failing behavior and how to reproduce it.

2. Contract dates, license quantities, and invoice numbers

   Commercial details do not describe the failing behavior.

3. Team names, job titles, and billing contact details

   Administrative contact details do not provide reproduction instructions.

4. Repository counts, renewal dates, and purchase orders

   Inventory and procurement data do not reproduce the product error.

**Concept:** Actionable support escalation

**Authored coaching hints:**

- Separate customer-controlled settings from product or service faults.
- Match the evidence and entitlement to the affected deployment.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un error reproducible del producto GitHub Enterprise Cloud persiste tras verificar la configuración. ¿Qué pruebas ayudan más al ingeniero de soporte autorizado a reproducirlo?

1. Pasos, errores exactos, URL afectadas y resultados esperados **[CORRECT]**

   Estos datos identifican el comportamiento que falla y cómo reproducirlo.

2. Fechas de contrato, cantidades de licencias y números de factura

   Los datos comerciales no describen el comportamiento que falla.

3. Nombres de equipo, cargos y datos del contacto de facturación

   Los datos de contacto administrativos no aportan instrucciones de reproducción.

4. Cantidades de repositorios, fechas de renovación y órdenes de compra

   El inventario y los datos de compra no reproducen el error.

**Concept:** Escalación útil a soporte

**Authored coaching hints:**

- Distingue los ajustes del cliente de los fallos del producto o servicio.
- Relaciona las pruebas y el derecho a soporte con el entorno afectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um erro reproduzível do produto GitHub Enterprise Cloud persiste após verificar a configuração. Quais evidências mais ajudam o engenheiro de suporte autorizado a reproduzi-lo?

1. Etapas, erros exatos, URLs afetadas e resultados esperados **[CORRECT]**

   Esses dados identificam o comportamento com falha e como reproduzi-lo.

2. Datas de contrato, quantidades de licenças e números de faturas

   Dados comerciais não descrevem o comportamento com falha.

3. Nomes de equipe, cargos e dados do contato de cobrança

   Dados de contato administrativos não fornecem instruções de reprodução.

4. Quantidades de repositórios, datas de renovação e ordens de compra

   Inventário e dados de compras não reproduzem o erro.

**Concept:** Escalonamento útil ao suporte

**Authored coaching hints:**

- Diferencie configurações do cliente de falhas do produto ou serviço.
- Associe as evidências e o direito a suporte ao ambiente afetado.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/support/contacting-github-support/creating-a-support-ticket>

<!-- certification-coach-question:admin-052:85382a9ab5a6418c23dabea60308b6ac9130270f362ba17fe4efc1b97c79ac59 -->
## Question 52: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-052`

**Content revision:** `85382a9ab5a6418c23dabea60308b6ac9130270f362ba17fe4efc1b97c79ac59`

**en review revision:** `a00771e7e329b129c1cc4f5b939d6b7f70c54ba6bee15a6ca759f7d37e0bcd25`
**es review revision:** `6d447d9e5c264cb4a944a8ada0685075a9f62b59cf13e5f419a670ba76377036`
**pt-BR review revision:** `376af6e595724cc8e4b3807044bc7e93b671a93595d40f36f09e14be3fdb399a`

### English

Why may GitHub Support ask a GitHub Enterprise Server administrator to provide diagnostics and a support bundle?

1. The bundle automatically changes the instance's configuration

   Generating a bundle collects information rather than reconfiguring the instance.

2. Support does not have direct access to the customer's environment **[CORRECT]**

   Administrators supply environment information and logs for investigation.

3. Support bundles replace the enterprise's licensing agreement

   Bundles provide troubleshooting evidence, not licensing rights.

4. Diagnostics automatically grant Support permanent administrative access

   Diagnostic files do not grant persistent administrative access.

**Concept:** Server support evidence boundary

**Authored coaching hints:**

- Separate customer-controlled settings from product or service faults.
- Match the evidence and entitlement to the affected deployment.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Por qué puede GitHub Support pedir a un administrador de GitHub Enterprise Server diagnósticos y un paquete de soporte?

1. El paquete cambia automáticamente la configuración de la instancia

   Generar un paquete recopila información, no reconfigura la instancia.

2. Soporte no tiene acceso directo al entorno del cliente **[CORRECT]**

   Los administradores aportan información del entorno y registros para investigar.

3. Los paquetes sustituyen el contrato de licencias de la empresa

   Los paquetes aportan pruebas técnicas, no derechos de licencia.

4. Los diagnósticos conceden acceso administrativo permanente a soporte

   Los archivos de diagnóstico no conceden acceso administrativo persistente.

**Concept:** Límite de pruebas para soporte de Server

**Authored coaching hints:**

- Distingue los ajustes del cliente de los fallos del producto o servicio.
- Relaciona las pruebas y el derecho a soporte con el entorno afectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Por que o GitHub Support pode pedir diagnósticos e um pacote de suporte a um administrador do GitHub Enterprise Server?

1. O pacote altera automaticamente a configuração da instância

   Gerar um pacote coleta informações, não reconfigura a instância.

2. O suporte não tem acesso direto ao ambiente do cliente **[CORRECT]**

   Administradores fornecem informações do ambiente e logs para investigação.

3. Os pacotes substituem o contrato de licenciamento da empresa

   Pacotes fornecem evidências técnicas, não direitos de licença.

4. Os diagnósticos concedem acesso administrativo permanente ao suporte

   Arquivos de diagnóstico não concedem acesso administrativo persistente.

**Concept:** Limite de evidências para suporte do Server

**Authored coaching hints:**

- Diferencie configurações do cliente de falhas do produto ou serviço.
- Associe as evidências e o direito a suporte ao ambiente afetado.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-053:295cd9c581a225ce60ed5b790666b87bc9f6d068322614fe68281b612436dab5 -->
## Question 53: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-053`

**Content revision:** `295cd9c581a225ce60ed5b790666b87bc9f6d068322614fe68281b612436dab5`

**en review revision:** `ad314dd3a5762282dc51d98f37d0bbc8b14d51728122ba3e7678d1d0ec807403`
**es review revision:** `8b4e33e241d3abf95057f16697c59da32163b68f1b604dc51009429a571b69e6`
**pt-BR review revision:** `3b77752a414fb2fb647df3a68905d78f0de8b2f43571fd8f4ae7042b689ea7ac`

### English

In GitHub Enterprise Server 3.19, which artifact is a plaintext overview of the instance's settings and environment?

1. Extended support bundle

   An extended bundle is also an archive with a longer log range.

2. Repository source archive

   A source archive contains repository files rather than instance diagnostics.

3. Diagnostic file **[CORRECT]**

   A diagnostic file summarizes settings and environment information.

4. Support bundle

   A support bundle is an archive containing diagnostics and sanitized logs.

**Concept:** Server diagnostic artifact

**Authored coaching hints:**

- Consider whether settings alone or logs are required.
- Check the deployment topology and the documented administrative interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Server 3.19, ¿qué archivo ofrece un resumen en texto sin formato de los ajustes y el entorno de la instancia?

1. Paquete de soporte ampliado

   Un paquete ampliado también es un archivo comprimido con más historial de registros.

2. Archivo de código fuente del repositorio

   El archivo de código contiene archivos del repositorio, no diagnósticos de la instancia.

3. Archivo de diagnóstico **[CORRECT]**

   El archivo de diagnóstico resume los ajustes y el entorno.

4. Paquete de soporte

   Un paquete de soporte es un archivo comprimido con diagnósticos y registros depurados.

**Concept:** Archivo de diagnóstico de Server

**Authored coaching hints:**

- Considera si se necesitan solo ajustes o también registros.
- Comprueba la topología y la interfaz administrativa documentada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Server 3.19, qual artefato oferece um resumo em texto simples das configurações e do ambiente da instância?

1. Pacote de suporte estendido

   Um pacote estendido também é um arquivo compactado com mais histórico de logs.

2. Arquivo de código-fonte do repositório

   O arquivo de código contém arquivos do repositório, não diagnósticos da instância.

3. Arquivo de diagnóstico **[CORRECT]**

   O arquivo de diagnóstico resume as configurações e o ambiente.

4. Pacote de suporte

   Um pacote de suporte é um arquivo compactado com diagnósticos e logs sanitizados.

**Concept:** Arquivo de diagnóstico do Server

**Authored coaching hints:**

- Considere se são necessárias apenas configurações ou também logs.
- Verifique a topologia e a interface administrativa documentada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-054:7af50fa974318f22cd1ec2193959b8339c881a811ca56ea19924280588982219 -->
## Question 54: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-054`

**Content revision:** `7af50fa974318f22cd1ec2193959b8339c881a811ca56ea19924280588982219`

**en review revision:** `c9d0ce857e138920dc5bb1893c35cb1c54c9bdcb5ccce7d34141a68459c52177`
**es review revision:** `9ea05e151e3713b8b6c632620c298424fc3c4c0206c7ab3398b4527252e5e410`
**pt-BR review revision:** `c1e83e04a0beb9ce10063b72d4519cc74ecfc240c55b7bb73b6e355ad12f782b`

### English

What does a GitHub Enterprise Server 3.19 support bundle add beyond a standalone diagnostic file?

1. A complete repository backup for disaster recovery

   A support bundle is not a disaster-recovery backup.

2. A source-code export of every repository

   Its purpose is collecting diagnostic evidence, not exporting all source code.

3. An export of organization membership without instance logs

   Membership-only data omits the logs included in a support bundle.

4. Sanitized instance logs packaged with diagnostics **[CORRECT]**

   Support bundles combine diagnostic information with relevant sanitized logs.

**Concept:** Support bundle contents

**Authored coaching hints:**

- Consider whether settings alone or logs are required.
- Check the deployment topology and the documented administrative interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué añade un paquete de soporte de GitHub Enterprise Server 3.19 respecto a un archivo de diagnóstico independiente?

1. Una copia completa de repositorios para recuperación ante desastres

   Un paquete de soporte no es una copia para recuperación ante desastres.

2. Una exportación del código fuente de todos los repositorios

   Su finalidad es recopilar pruebas de diagnóstico, no exportar todo el código.

3. Una exportación de miembros de organización sin registros de instancia

   Los datos de miembros por sí solos omiten los registros del paquete.

4. Registros depurados de la instancia junto con diagnósticos **[CORRECT]**

   Los paquetes combinan diagnósticos y registros depurados relevantes.

**Concept:** Contenido del paquete de soporte

**Authored coaching hints:**

- Considera si se necesitan solo ajustes o también registros.
- Comprueba la topología y la interfaz administrativa documentada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que um pacote de suporte do GitHub Enterprise Server 3.19 acrescenta em relação a um arquivo de diagnóstico isolado?

1. Um backup completo de repositórios para recuperação de desastres

   Um pacote de suporte não é um backup para recuperação de desastres.

2. Uma exportação do código-fonte de todos os repositórios

   Sua finalidade é coletar evidências de diagnóstico, não exportar todo o código.

3. Uma exportação de membros da organização sem logs da instância

   Dados de membros por si só omitem os logs do pacote.

4. Logs sanitizados da instância junto com diagnósticos **[CORRECT]**

   Os pacotes combinam diagnósticos e logs sanitizados relevantes.

**Concept:** Conteúdo do pacote de suporte

**Authored coaching hints:**

- Considere se são necessárias apenas configurações ou também logs.
- Verifique a topologia e a interface administrativa documentada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-055:f7090d134b9d5d58219568b246cd4045313b58e6a10655bac6ef6f3bad081a55 -->
## Question 55: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-055`

**Content revision:** `f7090d134b9d5d58219568b246cd4045313b58e6a10655bac6ef6f3bad081a55`

**en review revision:** `ba541ac7ad352c3901335ce96feb21f34d7785dc32b0934bbd8a483b65c2314a`
**es review revision:** `5553dea6fdf48a6faaabdfc573c98888e5e792c8096e90e2da3c52a42c99a56d`
**pt-BR review revision:** `c207f540f7444f93e14a49a644ca29a4df1bbfb494de9a2bdba7730c4f3df992`

### English

An administrator has an administrative SSH session on GitHub Enterprise Server 3.19. Which utility retrieves the instance's diagnostic information?

1. ghe-diagnostics **[CORRECT]**

   ghe-diagnostics produces the instance diagnostic information.

2. ghe-support-bundle

   ghe-support-bundle collects a support archive rather than only diagnostics.

3. ghe-cluster-support-bundle

   The cluster utility collects a topology-specific support bundle.

4. git archive

   git archive packages repository content, not instance diagnostics.

**Concept:** Server diagnostics utility

**Authored coaching hints:**

- Consider whether settings alone or logs are required.
- Check the deployment topology and the documented administrative interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador tiene una sesión SSH administrativa en GitHub Enterprise Server 3.19. ¿Qué utilidad obtiene la información de diagnóstico de la instancia?

1. ghe-diagnostics **[CORRECT]**

   ghe-diagnostics genera información de diagnóstico de la instancia.

2. ghe-support-bundle

   ghe-support-bundle recopila un paquete de soporte, no solo diagnósticos.

3. ghe-cluster-support-bundle

   La utilidad de clúster recopila un paquete específico para esa topología.

4. git archive

   git archive empaqueta contenido del repositorio, no diagnósticos de la instancia.

**Concept:** Utilidad de diagnóstico de Server

**Authored coaching hints:**

- Considera si se necesitan solo ajustes o también registros.
- Comprueba la topología y la interfaz administrativa documentada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador tem uma sessão SSH administrativa no GitHub Enterprise Server 3.19. Qual utilitário obtém as informações de diagnóstico da instância?

1. ghe-diagnostics **[CORRECT]**

   ghe-diagnostics gera informações de diagnóstico da instância.

2. ghe-support-bundle

   ghe-support-bundle coleta um pacote de suporte, não apenas diagnósticos.

3. ghe-cluster-support-bundle

   O utilitário de cluster coleta um pacote específico para essa topologia.

4. git archive

   git archive empacota conteúdo do repositório, não diagnósticos da instância.

**Concept:** Utilitário de diagnóstico do Server

**Authored coaching hints:**

- Considere se são necessárias apenas configurações ou também logs.
- Verifique a topologia e a interface administrativa documentada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-056:64b4a8d312df1a686c29ec597683fbe8d9aa8124548ca98f0c258b0ab82bb4c4 -->
## Question 56: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-056`

**Content revision:** `64b4a8d312df1a686c29ec597683fbe8d9aa8124548ca98f0c258b0ab82bb4c4`

**en review revision:** `a8fe19c197e917534056e9cfd8bbc36a17ec0a9f0850dd2f294ed8d16ef02f6b`
**es review revision:** `97d949b950fd62c5929cefd0bc8c6c248e1c8a6e95938ac77840baf9340d1fb9`
**pt-BR review revision:** `d96d544abab793fb87f4f2048c3987fd8392d36479c712c653a4a37696d628da`

### English

For a standalone GitHub Enterprise Server 3.19 instance, which documented SSH command downloads a support bundle to the local machine?

1. git bundle create repository.bundle --all

   git bundle exports Git objects, not instance diagnostics and logs.

2. ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' &gt; support-bundle.tgz **[CORRECT]**

   This administrative SSH command streams the support archive to a local file.

3. ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' &gt; diagnostics.txt

   This command downloads diagnostics without the support-bundle logs.

4. git archive --format=tar HEAD &gt; repository.tar

   git archive exports repository source, not a Server support bundle.

**Concept:** Downloading a Server support bundle

**Authored coaching hints:**

- Consider whether settings alone or logs are required.
- Check the deployment topology and the documented administrative interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para una instancia independiente de GitHub Enterprise Server 3.19, ¿qué comando SSH documentado descarga un paquete de soporte al equipo local?

1. git bundle create repository.bundle --all

   git bundle exporta objetos Git, no diagnósticos y registros de la instancia.

2. ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' &gt; support-bundle.tgz **[CORRECT]**

   Este comando SSH administrativo transmite el paquete a un archivo local.

3. ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' &gt; diagnostics.txt

   Este comando descarga diagnósticos sin los registros del paquete de soporte.

4. git archive --format=tar HEAD &gt; repository.tar

   git archive exporta código del repositorio, no un paquete de Server.

**Concept:** Descargar un paquete de soporte de Server

**Authored coaching hints:**

- Considera si se necesitan solo ajustes o también registros.
- Comprueba la topología y la interfaz administrativa documentada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para uma instância independente do GitHub Enterprise Server 3.19, qual comando SSH documentado baixa um pacote de suporte para a máquina local?

1. git bundle create repository.bundle --all

   git bundle exporta objetos Git, não diagnósticos e logs da instância.

2. ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' &gt; support-bundle.tgz **[CORRECT]**

   Esse comando SSH administrativo transmite o pacote para um arquivo local.

3. ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' &gt; diagnostics.txt

   Esse comando baixa diagnósticos sem os logs do pacote de suporte.

4. git archive --format=tar HEAD &gt; repository.tar

   git archive exporta código do repositório, não um pacote do Server.

**Concept:** Baixar um pacote de suporte do Server

**Authored coaching hints:**

- Considere se são necessárias apenas configurações ou também logs.
- Verifique a topologia e a interface administrativa documentada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-057:3f7fcb6bed793a8fe45612552032559011841f49b36d27c02e8de368c60f720c -->
## Question 57: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-057`

**Content revision:** `3f7fcb6bed793a8fe45612552032559011841f49b36d27c02e8de368c60f720c`

**en review revision:** `9c3f6fab81941ea0b389aef54c517a3d35023acd842bf216ce94bad1e1e58aee`
**es review revision:** `da018171683df761efeedcaf8ebcbbf0cd240f6edd2341c9b215abab2955a6c6`
**pt-BR review revision:** `62f2b251f752f245ac3160389e051f435b853776a84f1894064100974ea1927d`

### English

Which support-bundle utility is documented for GitHub Enterprise Server 3.19 instances using clustering or geo-replication?

1. git bundle

   git bundle transports Git objects.

2. git archive

   git archive exports a repository tree.

3. ghe-cluster-support-bundle **[CORRECT]**

   The cluster utility is documented for cluster and geo-replication topologies.

4. ghe-diagnostics

   ghe-diagnostics produces diagnostic information rather than the required topology-wide bundle.

**Concept:** Topology-aware support collection

**Authored coaching hints:**

- Consider whether settings alone or logs are required.
- Check the deployment topology and the documented administrative interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué utilidad de paquetes de soporte está documentada para instancias de GitHub Enterprise Server 3.19 con clústeres o replicación geográfica?

1. git bundle

   git bundle transporta objetos Git.

2. git archive

   git archive exporta el árbol de un repositorio.

3. ghe-cluster-support-bundle **[CORRECT]**

   La utilidad de clúster está documentada para clústeres y replicación geográfica.

4. ghe-diagnostics

   ghe-diagnostics genera diagnósticos, no el paquete para toda la topología.

**Concept:** Recopilación de soporte según topología

**Authored coaching hints:**

- Considera si se necesitan solo ajustes o también registros.
- Comprueba la topología y la interfaz administrativa documentada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual utilitário de pacotes de suporte é documentado para instâncias do GitHub Enterprise Server 3.19 com cluster ou replicação geográfica?

1. git bundle

   git bundle transporta objetos Git.

2. git archive

   git archive exporta a árvore de um repositório.

3. ghe-cluster-support-bundle **[CORRECT]**

   O utilitário de cluster é documentado para clusters e replicação geográfica.

4. ghe-diagnostics

   ghe-diagnostics gera diagnósticos, não o pacote para toda a topologia.

**Concept:** Coleta de suporte conforme a topologia

**Authored coaching hints:**

- Considere se são necessárias apenas configurações ou também logs.
- Verifique a topologia e a interface administrativa documentada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-058:68815db05a320710b81e9cdfe322bf1070879bae03ba4ee130dc9224f981ce9d -->
## Question 58: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-058`

**Content revision:** `68815db05a320710b81e9cdfe322bf1070879bae03ba4ee130dc9224f981ce9d`

**en review revision:** `8e391199f32eae39b72d9f3174d1d6d5ef785f49f2b636531c8d6d2b82aaab61`
**es review revision:** `bdcc2e27fef01a4fcab15972025de8da3f156c6b63088a4c8378fadb49f40ed4`
**pt-BR review revision:** `dcf8dfdc1c0e83b087d28826196ed07a32bfda241789402844d91908f3219201`

### English

An administrator can access the GitHub Enterprise Server 3.19 Management Console but not SSH. Which English UI path downloads diagnostics?

1. Management Console → Support → Download support bundle

   This downloads a bundle with logs, not the standalone diagnostic file requested.

2. Repository Settings → Collaborators &amp; teams

   Repository access administration does not produce instance diagnostics.

3. Organization Settings → Authentication security

   Organization authentication settings do not export Server diagnostics.

4. Management Console → Support → Download diagnostics info **[CORRECT]**

   The Support tab offers Download diagnostics info without requiring SSH.

**Concept:** Management Console diagnostics

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador accede a Management Console de GitHub Enterprise Server 3.19, pero no a SSH. ¿Qué ruta de la interfaz inglesa descarga diagnósticos?

1. Management Console → Support → Download support bundle

   Esta opción descarga un paquete con registros, no el diagnóstico independiente solicitado.

2. Repository Settings → Collaborators &amp; teams

   La administración de acceso al repositorio no genera diagnósticos de instancia.

3. Organization Settings → Authentication security

   Los ajustes de autenticación de organización no exportan diagnósticos de Server.

4. Management Console → Support → Download diagnostics info **[CORRECT]**

   La pestaña Support ofrece Download diagnostics info sin necesitar SSH.

**Concept:** Diagnósticos de Management Console

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador acessa o Management Console do GitHub Enterprise Server 3.19, mas não o SSH. Qual caminho da interface em inglês baixa diagnósticos?

1. Management Console → Support → Download support bundle

   Essa opção baixa um pacote com logs, não o diagnóstico isolado solicitado.

2. Repository Settings → Collaborators &amp; teams

   A administração de acesso ao repositório não gera diagnósticos da instância.

3. Organization Settings → Authentication security

   Configurações de autenticação da organização não exportam diagnósticos do Server.

4. Management Console → Support → Download diagnostics info **[CORRECT]**

   A aba Support oferece Download diagnostics info sem precisar de SSH.

**Concept:** Diagnósticos do Management Console

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support>

<!-- certification-coach-question:admin-059:b86b55c1105542c9c257cb8650fc18d6e9f9887abb7382df0c6c107027f2d099 -->
## Question 59: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-059`

**Content revision:** `b86b55c1105542c9c257cb8650fc18d6e9f9887abb7382df0c6c107027f2d099`

**en review revision:** `68026d2c8e3f442ca5877bb20e5cbf22017d75a59e2d75c70e96dbcb0a33914b`
**es review revision:** `cd5a25fab0d59fd40f8bef084929343545a3b382abd4008f52ba4cdc65e1fedb`
**pt-BR review revision:** `34eae1bc8bae3d26812b6c48ba998b0466d31fb0891634b6853d9beca80cd2f1`

### English

For an enterprise customer, what is GitHub Premium Support?

1. A paid supplemental tier with additional support commitments **[CORRECT]**

   Premium Support supplements Enterprise support with plan-specific commitments.

2. The default Enterprise support included with user licensing

   Included Enterprise support is not the supplemental Premium offering.

3. A professional-services engagement limited to implementation consulting

   Premium Support is a support tier, not merely an implementation project.

4. A community forum dedicated to enterprise administration

   Community forums do not provide the Premium Support service commitments.

**Concept:** Enterprise support tiers

**Authored coaching hints:**

- Separate customer-controlled settings from product or service faults.
- Match the evidence and entitlement to the affected deployment.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para un cliente empresarial, ¿qué es GitHub Premium Support?

1. Un nivel adicional de pago con compromisos de soporte adicionales **[CORRECT]**

   Premium Support complementa el soporte Enterprise con compromisos según el plan.

2. El soporte Enterprise predeterminado incluido con las licencias de usuario

   El soporte Enterprise incluido no es la oferta adicional Premium.

3. Un servicio profesional limitado a consultoría de implementación

   Premium Support es un nivel de soporte, no solo un proyecto de implementación.

4. Un foro comunitario dedicado a administración empresarial

   Los foros no proporcionan los compromisos de servicio de Premium Support.

**Concept:** Niveles de soporte empresarial

**Authored coaching hints:**

- Distingue los ajustes del cliente de los fallos del producto o servicio.
- Relaciona las pruebas y el derecho a soporte con el entorno afectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para um cliente empresarial, o que é GitHub Premium Support?

1. Um nível adicional pago com compromissos de suporte adicionais **[CORRECT]**

   Premium Support complementa o suporte Enterprise com compromissos conforme o plano.

2. O suporte Enterprise padrão incluído com as licenças de usuário

   O suporte Enterprise incluído não é a oferta adicional Premium.

3. Um serviço profissional limitado à consultoria de implantação

   Premium Support é um nível de suporte, não apenas um projeto de implantação.

4. Um fórum comunitário dedicado à administração empresarial

   Fóruns não fornecem os compromissos de serviço do Premium Support.

**Concept:** Níveis de suporte empresarial

**Authored coaching hints:**

- Diferencie configurações do cliente de falhas do produto ou serviço.
- Associe as evidências e o direito a suporte ao ambiente afetado.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/support/learning-about-github-support/about-github-premium-support>

<!-- certification-coach-question:admin-060:2e19bfb1d2f0711bf7e10d12560ebe030f9ca444bac433185d758cc23615d94c -->
## Question 60: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-060`

**Content revision:** `2e19bfb1d2f0711bf7e10d12560ebe030f9ca444bac433185d758cc23615d94c`

**en review revision:** `2a8477a6016dea305854e73f3831290662be6dedb015bf07d77942b5aba415b5`
**es review revision:** `289536ea7a84ff33861abfc0763906045427e1d976e453c5f6e69b7f5f7e7ab4`
**pt-BR review revision:** `1d16522c5a7b1a823757dc917d3bdb4ba03124617651a57f55b6ff16f619437c`

### English

A GitHub Enterprise Cloud customer with Premium Support has critical service errors blocking production workflows and directly affecting business operations. Which documented ticket priority fits?

1. Low

   Low covers non-time-sensitive questions and suggestions.

2. Urgent **[CORRECT]**

   Urgent covers critical production service failures with direct business impact for Premium Support customers.

3. High

   High covers the documented limited-impact account or security cases.

4. Normal

   Normal covers limited or moderate issues and general questions.

**Concept:** Premium Support incident priority

**Authored coaching hints:**

- Separate customer-controlled settings from product or service faults.
- Match the evidence and entitlement to the affected deployment.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un cliente de GitHub Enterprise Cloud con Premium Support sufre errores críticos del servicio que bloquean flujos de producción y afectan directamente al negocio. ¿Qué prioridad documentada corresponde al ticket?

1. Low

   Low cubre preguntas y sugerencias sin urgencia.

2. Urgent **[CORRECT]**

   Urgent cubre fallos críticos de producción con impacto directo en el negocio para clientes Premium Support.

3. High

   High cubre los casos documentados de cuenta o seguridad con impacto limitado.

4. Normal

   Normal cubre problemas limitados o moderados y preguntas generales.

**Concept:** Prioridad de incidentes con Premium Support

**Authored coaching hints:**

- Distingue los ajustes del cliente de los fallos del producto o servicio.
- Relaciona las pruebas y el derecho a soporte con el entorno afectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cliente do GitHub Enterprise Cloud com Premium Support enfrenta erros críticos do serviço que bloqueiam fluxos de produção e afetam diretamente o negócio. Qual prioridade documentada corresponde ao ticket?

1. Low

   Low cobre perguntas e sugestões sem urgência.

2. Urgent **[CORRECT]**

   Urgent cobre falhas críticas de produção com impacto direto no negócio para clientes Premium Support.

3. High

   High cobre os casos documentados de conta ou segurança com impacto limitado.

4. Normal

   Normal cobre problemas limitados ou moderados e perguntas gerais.

**Concept:** Prioridade de incidentes com Premium Support

**Authored coaching hints:**

- Diferencie configurações do cliente de falhas do produto ou serviço.
- Associe as evidências e o direito a suporte ao ambiente afetado.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/support/learning-about-github-support/about-ticket-priority>

<!-- certification-coach-question:admin-061:6ac09238b25b2e8a2592c25fcf6677271e92f11937ea6f26b8f4c8f5897d0f1f -->
## Question 61: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-061`

**Content revision:** `6ac09238b25b2e8a2592c25fcf6677271e92f11937ea6f26b8f4c8f5897d0f1f`

**en review revision:** `cd7763650d44feb0043ffbc4afa2822cd8615a2103dc9e6d21060fcdaa719f3a`
**es review revision:** `84c224a15fd0f946418cda5caceddcd71a0d24488b7da168308453afb4ac28cf`
**pt-BR review revision:** `f3ff2d9c13e52d633ed46e85a4a2cf9a403cf658648c6f3b1d294b0799f3e643`

### English

A repository administrator wants changes to the default branch to arrive through pull requests rather than direct pushes. Which branch-ruleset rule establishes that standard?

1. Require linear history

   Linear history restricts merge-commit structure, not the contribution route.

2. Block force pushes

   Blocking force pushes does not prevent ordinary direct pushes.

3. Require a pull request before merging **[CORRECT]**

   The pull-request rule requires changes to be associated with a pull request, subject to bypass settings.

4. Require signed commits

   Signed commits verify signatures but do not require a pull request.

**Concept:** Pull-request branching standard

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un administrador quiere que los cambios a la rama predeterminada lleguen mediante pull requests y no con pushes directos. ¿Qué regla de ruleset de rama establece ese estándar?

1. Require linear history

   El historial lineal restringe la estructura de merges, no la vía de contribución.

2. Block force pushes

   Bloquear pushes forzados no impide pushes directos ordinarios.

3. Require a pull request before merging **[CORRECT]**

   La regla exige que los cambios se asocien a un pull request, sujeta a los ajustes de bypass.

4. Require signed commits

   Las firmas verifican commits, pero no exigen pull requests.

**Concept:** Estándar de ramas con pull requests

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um administrador quer que alterações na branch padrão cheguem por pull requests, não por pushes diretos. Qual regra de ruleset de branch estabelece esse padrão?

1. Require linear history

   O histórico linear restringe a estrutura de merges, não o caminho de contribuição.

2. Block force pushes

   Bloquear pushes forçados não impede pushes diretos comuns.

3. Require a pull request before merging **[CORRECT]**

   A regra exige que alterações estejam associadas a um pull request, sujeita às configurações de bypass.

4. Require signed commits

   Assinaturas verificam commits, mas não exigem pull requests.

**Concept:** Padrão de branches com pull requests

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-062:99bd10c75fffd61c51d5a4e281ca2e3843f9f9e989c7cfa5a49165431fcf4277 -->
## Question 62: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-062`

**Content revision:** `99bd10c75fffd61c51d5a4e281ca2e3843f9f9e989c7cfa5a49165431fcf4277`

**en review revision:** `b234af9e2d2cc9698da012efc8133139a2e4f184820959e6797a39d8c84bd454`
**es review revision:** `23386b3e64dbc7c1df52c866a1d93065b9c586492675d3d2c12ccd184150d744`
**pt-BR review revision:** `16b81cca6a883363f68f7274ec5b3d1016a40f5357cf516a7773d1d00679a549`

### English

Which repository file assigns individuals or organization teams responsibility for reviewing changes to matching paths?

1. CONTRIBUTING.md

   CONTRIBUTING.md describes contribution guidelines without assigning path-based review owners.

2. SECURITY.md

   SECURITY.md describes security reporting policy.

3. README.md

   README.md introduces the project rather than defining review routing.

4. CODEOWNERS **[CORRECT]**

   CODEOWNERS maps paths to owners and triggers review requests for eligible pull requests.

**Concept:** Path-based review ownership

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo de repositorio asigna a personas o equipos de organización la responsabilidad de revisar cambios en rutas coincidentes?

1. CONTRIBUTING.md

   CONTRIBUTING.md describe directrices sin asignar revisores por ruta.

2. SECURITY.md

   SECURITY.md describe la política para comunicar problemas de seguridad.

3. README.md

   README.md presenta el proyecto, no define el enrutamiento de revisiones.

4. CODEOWNERS **[CORRECT]**

   CODEOWNERS vincula rutas con responsables y solicita revisiones en pull requests aptos.

**Concept:** Responsabilidad de revisión por ruta

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo de repositório atribui a pessoas ou equipes da organização a responsabilidade por revisar alterações em caminhos correspondentes?

1. CONTRIBUTING.md

   CONTRIBUTING.md descreve diretrizes sem atribuir revisores por caminho.

2. SECURITY.md

   SECURITY.md descreve a política para relatar problemas de segurança.

3. README.md

   README.md apresenta o projeto, não define o encaminhamento de revisões.

4. CODEOWNERS **[CORRECT]**

   CODEOWNERS vincula caminhos a responsáveis e solicita revisões em pull requests elegíveis.

**Concept:** Responsabilidade de revisão por caminho

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners>

<!-- certification-coach-question:admin-063:8e4460ee244d39499569f2714e87fa1a2e4127efd24e1e61fb2060eab857ca8b -->
## Question 63: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-063`

**Content revision:** `8e4460ee244d39499569f2714e87fa1a2e4127efd24e1e61fb2060eab857ca8b`

**en review revision:** `214b3959562be36de4ec887a50369d407baecf81f1423992ae53a6dc157e2b96`
**es review revision:** `5ff0d63219b29c329507dc432d27d04c205a2f2a4c9005ac1872f371ab2dcf1c`
**pt-BR review revision:** `2cd425efa5b2f76d34bd1faa8338a50413f34d706e186c83e3f7a3b7dfcfdf10`

### English

A repository has CODEOWNERS, but code-owner approval must be mandatory before merging protected changes. What additional control is needed?

1. Require review from code owners in the branch protection or ruleset **[CORRECT]**

   CODEOWNERS requests reviews; an enforced review rule makes owner approval required.

2. Add the owners to the repository's watchers

   Watching affects notifications, not merge requirements.

3. Mention the owners only in the pull-request template

   A template mention does not enforce approval.

4. Give the owners a repository notification subscription

   Notification subscriptions do not enforce merge gates.

**Concept:** Enforcing code-owner approval

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio tiene CODEOWNERS, pero se necesita aprobación obligatoria de sus responsables antes de integrar cambios protegidos. ¿Qué control adicional hace falta?

1. Exigir revisión de code owners en la protección de rama o ruleset **[CORRECT]**

   CODEOWNERS solicita revisiones; una regla obligatoria exige la aprobación.

2. Añadir los responsables a los observadores del repositorio

   Observar cambia notificaciones, no requisitos de integración.

3. Mencionar los responsables solo en la plantilla del pull request

   Mencionar en una plantilla no exige aprobación.

4. Dar a los responsables una suscripción a notificaciones del repositorio

   Las suscripciones no imponen condiciones de integración.

**Concept:** Exigir aprobación de responsables del código

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório tem CODEOWNERS, mas a aprovação dos responsáveis precisa ser obrigatória antes de integrar alterações protegidas. Qual controle adicional é necessário?

1. Exigir revisão de code owners na proteção de branch ou ruleset **[CORRECT]**

   CODEOWNERS solicita revisões; uma regra obrigatória exige a aprovação.

2. Adicionar os responsáveis aos observadores do repositório

   Observar altera notificações, não requisitos de integração.

3. Mencionar os responsáveis apenas no template do pull request

   Uma menção no template não exige aprovação.

4. Dar aos responsáveis uma assinatura de notificações do repositório

   Assinaturas não impõem condições de integração.

**Concept:** Exigir aprovação dos responsáveis pelo código

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners>

<!-- certification-coach-question:admin-064:22c676f94840ee1634c41704ff887dfc102a1cd54910a662e5b52f36fb0ee314 -->
## Question 64: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-064`

**Content revision:** `22c676f94840ee1634c41704ff887dfc102a1cd54910a662e5b52f36fb0ee314`

**en review revision:** `34fafa0ce880b38df70a3f7703846b20d9aec7c7677ba0a77a976c409c7c474c`
**es review revision:** `2cd1c639b7ecc1f10acc1beff6f04783422bc786bb5c3106449b47f85d6bd29b`
**pt-BR review revision:** `6d6a1499880ea3d411e377898ebeac39aacb4b993e90d8168e99790c090a358b`

### English

What anchors a GitHub release to a specific point in repository history?

1. A project milestone

   A milestone groups work rather than locating a release in Git history.

2. A Git tag **[CORRECT]**

   GitHub releases are based on Git tags marking points in repository history.

3. A moving branch tip

   A branch tip changes as commits arrive and is not the release's version anchor.

4. A pull-request number

   A pull-request number identifies a proposed change, not the release tag.

**Concept:** Release version anchors

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué vincula un release de GitHub con un punto concreto del historial del repositorio?

1. Un hito del proyecto

   Un hito agrupa trabajo, no sitúa un release en el historial Git.

2. Una etiqueta Git **[CORRECT]**

   Los releases se basan en etiquetas Git que marcan puntos del historial.

3. El extremo cambiante de una rama

   El extremo cambia al añadir commits y no es la referencia de versión del release.

4. Un número de pull request

   El número identifica un cambio propuesto, no la etiqueta del release.

**Concept:** Referencia de versiones publicadas

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que vincula uma release do GitHub a um ponto específico do histórico do repositório?

1. Um marco do projeto

   Um marco agrupa trabalho, não localiza uma release no histórico Git.

2. Uma tag Git **[CORRECT]**

   Releases se baseiam em tags Git que marcam pontos do histórico.

3. A ponta móvel de uma branch

   A ponta muda quando chegam commits e não é a referência de versão da release.

4. Um número de pull request

   O número identifica uma alteração proposta, não a tag da release.

**Concept:** Referência de versões publicadas

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/releasing-projects-on-github/about-releases>

<!-- certification-coach-question:admin-065:01967e8ea8b53e11d241f6c6180d7f0bca07cd31c7c1af71e6f17b5c2f4886b1 -->
## Question 65: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-065`

**Content revision:** `01967e8ea8b53e11d241f6c6180d7f0bca07cd31c7c1af71e6f17b5c2f4886b1`

**en review revision:** `d8ff945584b17961c1fadb6011fccd3d02d241e1cdeaa842854718dbca445ab3`
**es review revision:** `70f849ff7c3f8a727737a70bfd66cefccaf10cc7a966a9dc50214b05f6912d5d`
**pt-BR review revision:** `1bbbcb80df09c94ba8bba219976423698d7c48a4e61b63b22f00eeb33ea4344c`

### English

In the English GitHub release editor, which control preserves an unfinished release for later work instead of publishing it?

1. Generate release notes

   Generating notes prepares text without saving the release as a draft.

2. This is a pre-release

   A pre-release designation is not the same as keeping a release unpublished.

3. Save draft **[CORRECT]**

   Save draft retains the release for further preparation.

4. Publish release

   Publish release makes the release public to its permitted audience.

**Concept:** Release preparation state

**Authored coaching hints:**

- Start at the administrative scope named in the question.
- Match the setting's purpose, not just a familiar menu label.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En el editor de releases de GitHub en inglés, ¿qué control conserva un release sin terminar para seguir trabajando después en vez de publicarlo?

1. Generate release notes

   Generar notas prepara texto sin guardar el release como borrador.

2. This is a pre-release

   Marcar una versión preliminar no equivale a mantenerla sin publicar.

3. Save draft **[CORRECT]**

   Save draft conserva el release para seguir preparándolo.

4. Publish release

   Publish release lo publica para su audiencia permitida.

**Concept:** Estado de preparación del release

**Authored coaching hints:**

- Empieza en el ámbito administrativo indicado en la pregunta.
- Relaciona la finalidad del ajuste, no solo una etiqueta conocida.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No editor de releases do GitHub em inglês, qual controle preserva uma release inacabada para continuar depois, em vez de publicá-la?

1. Generate release notes

   Gerar notas prepara texto sem salvar a release como rascunho.

2. This is a pre-release

   Marcar uma pré-release não equivale a mantê-la sem publicação.

3. Save draft **[CORRECT]**

   Save draft mantém a release para continuar a preparação.

4. Publish release

   Publish release publica a release para seu público permitido.

**Concept:** Estado de preparação da release

**Authored coaching hints:**

- Comece no escopo administrativo indicado na pergunta.
- Associe a finalidade da configuração, não apenas um rótulo conhecido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/releasing-projects-on-github/managing-releases-in-a-repository>

<!-- certification-coach-question:admin-066:24c74bd6849900b20693531f1582275a88691b263cce438450b254597ee81ed8 -->
## Question 66: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-066`

**Content revision:** `24c74bd6849900b20693531f1582275a88691b263cce438450b254597ee81ed8`

**en review revision:** `a985888fc85abe11ac2ac6abacb0a2662c8620713b69d4ee2fe3b14956d3ddab`
**es review revision:** `b945062f7222d443dca412eb5fd7563f9e23fe15525cf29328df24fc7e39fb8d`
**pt-BR review revision:** `2749b31fb73f206412c7b67b3485b5e19220da190295ff14c4a3c417e638cf08`

### English

Which mechanism supplies reusable prompts or structure in the issue and pull-request creation experience?

1. Repository topic tags

   Topics classify repositories rather than structure new contributions.

2. CODEOWNERS path assignments

   CODEOWNERS routes code reviews rather than structure issue and pull-request descriptions.

3. Project milestone descriptions

   Milestones group related work rather than supply creation templates.

4. Issue and pull-request templates **[CORRECT]**

   Templates structure the information contributors provide when creating issues and pull requests.

**Concept:** Standardized contribution intake

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mecanismo aporta indicaciones reutilizables o estructura al crear issues y pull requests?

1. Etiquetas de temas del repositorio

   Los temas clasifican repositorios, no estructuran contribuciones nuevas.

2. Asignaciones de rutas de CODEOWNERS

   CODEOWNERS dirige revisiones, no estructura las descripciones.

3. Descripciones de hitos del proyecto

   Los hitos agrupan trabajo, no proporcionan plantillas de creación.

4. Plantillas de issues y pull requests **[CORRECT]**

   Las plantillas estructuran la información aportada al crear issues y pull requests.

**Concept:** Recepción estandarizada de contribuciones

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mecanismo fornece orientações reutilizáveis ou estrutura ao criar issues e pull requests?

1. Tags de tópicos do repositório

   Tópicos classificam repositórios, não estruturam novas contribuições.

2. Atribuições de caminhos de CODEOWNERS

   CODEOWNERS encaminha revisões, não estrutura descrições.

3. Descrições de marcos do projeto

   Marcos agrupam trabalho, não fornecem templates de criação.

4. Templates de issues e pull requests **[CORRECT]**

   Templates estruturam as informações fornecidas ao criar issues e pull requests.

**Concept:** Recebimento padronizado de contribuições

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates>

<!-- certification-coach-question:admin-067:38afe20886050aa624ef3a1ac3b6062aab9f2868d4d058dff6f3f18576031039 -->
## Question 67: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-067`

**Content revision:** `38afe20886050aa624ef3a1ac3b6062aab9f2868d4d058dff6f3f18576031039`

**en review revision:** `32ed8dcd0406b8efd7ccad2ac2f591105d601fe937aeea32f0f98b6bc21bc3f3`
**es review revision:** `3e8ff75a6fc2d0d5548b7d6b31b23a1a74536da3cfdf9c2ff5fe9bf39503fcda`
**pt-BR review revision:** `b7c3b5b662ce01842bf84e9861b9378642bf7284076a06037df97771d88aefd6`

### English

Which approach shares a centrally maintained, multi-job CI workflow across repositories without copying its implementation into each caller?

1. Call a reusable workflow **[CORRECT]**

   A reusable workflow shares workflow-level logic, including multiple jobs.

2. Generate independent copies from a workflow template

   Templates help create workflows but produce copies rather than a shared implementation.

3. Package only a step sequence in a composite action

   A composite action reuses steps within a job, not an entire multi-job workflow.

4. Maintain separate full workflow copies in each repository

   Independent copies duplicate the implementation and its maintenance.

**Concept:** Reusable process standards

**Authored coaching hints:**

- Distinguish written conventions from enforced controls.
- Identify the artifact or rule that governs this part of development.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué enfoque comparte un workflow CI de varios jobs mantenido centralmente entre repositorios sin copiar su implementación en cada invocador?

1. Invocar un workflow reutilizable **[CORRECT]**

   Un workflow reutilizable comparte lógica de workflow, incluidos varios jobs.

2. Generar copias independientes desde una plantilla de workflow

   Las plantillas crean copias, no una implementación compartida.

3. Empaquetar solo una secuencia de pasos en una acción compuesta

   Una acción compuesta reutiliza pasos de un job, no un workflow de varios jobs.

4. Mantener copias completas separadas en cada repositorio

   Las copias independientes duplican la implementación y su mantenimiento.

**Concept:** Estándares de proceso reutilizables

**Authored coaching hints:**

- Distingue las convenciones escritas de los controles obligatorios.
- Identifica el archivo o la regla que regula esta parte del desarrollo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual abordagem compartilha um workflow CI com vários jobs, mantido centralmente, entre repositórios sem copiar sua implementação para cada chamador?

1. Chamar um workflow reutilizável **[CORRECT]**

   Um workflow reutilizável compartilha lógica de workflow, incluindo vários jobs.

2. Gerar cópias independentes a partir de um template de workflow

   Templates criam cópias, não uma implementação compartilhada.

3. Empacotar apenas uma sequência de etapas em uma ação composta

   Uma ação composta reutiliza etapas de um job, não um workflow com vários jobs.

4. Manter cópias completas separadas em cada repositório

   Cópias independentes duplicam a implementação e sua manutenção.

**Concept:** Padrões de processo reutilizáveis

**Authored coaching hints:**

- Diferencie convenções escritas de controles obrigatórios.
- Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:admin-068:afe03fed53e39eb2daa8947fad024e32e78f767fcd101528e9aa31460ff7b174 -->
## Question 68: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-068`

**Content revision:** `afe03fed53e39eb2daa8947fad024e32e78f767fcd101528e9aa31460ff7b174`

**en review revision:** `d0043e08861f1e4d423bd4914f9c54754996c982bfaf6859bc8fdd23dc212c08`
**es review revision:** `fa3b5708c3a2a6e53e8798dac32bdd198a95c919373634c66b896413d8a5a0e9`
**pt-BR review revision:** `4fd7edd664ce32286566a34f8d9eca3e0713b07e3f8223d4933ab2fa2cd74210`

### English

A single GitHub account is a member of several organizations within one GitHub Enterprise Cloud deployment. How does unique-user enterprise licensing count that person?

1. Once per team membership

   Team memberships do not multiply the person's enterprise license count.

2. Once across the enterprise deployment **[CORRECT]**

   The unique-user model counts one person once across organizations in the deployment.

3. Once per organization membership

   Organization memberships do not multiply that person's licenses.

4. Once per repository with Write access

   Repository grants do not multiply the person's enterprise license count.

**Concept:** Unique-user enterprise licensing

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una misma cuenta de GitHub pertenece a varias organizaciones de una implementación de GitHub Enterprise Cloud. ¿Cómo cuenta a esa persona el modelo empresarial de usuarios únicos?

1. Una vez por pertenencia a equipo

   Las pertenencias a equipos no multiplican sus licencias empresariales.

2. Una vez en toda la implementación empresarial **[CORRECT]**

   El modelo cuenta a la persona una vez entre las organizaciones de la implementación.

3. Una vez por pertenencia a organización

   Pertenecer a varias organizaciones no multiplica sus licencias.

4. Una vez por repositorio con acceso Write

   Los permisos de repositorio no multiplican sus licencias empresariales.

**Concept:** Licencias empresariales por usuario único

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma mesma conta do GitHub pertence a várias organizações de uma implantação do GitHub Enterprise Cloud. Como o modelo empresarial de usuários únicos conta essa pessoa?

1. Uma vez por associação a equipe

   Associações a equipes não multiplicam suas licenças empresariais.

2. Uma vez em toda a implantação empresarial **[CORRECT]**

   O modelo conta a pessoa uma vez entre as organizações da implantação.

3. Uma vez por associação a organização

   Pertencer a várias organizações não multiplica suas licenças.

4. Uma vez por repositório com acesso Write

   Permissões de repositório não multiplicam suas licenças empresariais.

**Concept:** Licenciamento empresarial por usuário único

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use>

<!-- certification-coach-question:admin-069:ab1f843ad4ee6aa98875e4568bc29d9c46664259f61d6ec90c3606714a6eaca2 -->
## Question 69: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-069`

**Content revision:** `ab1f843ad4ee6aa98875e4568bc29d9c46664259f61d6ec90c3606714a6eaca2`

**en review revision:** `a89126941ad3c7612521d3a74532f19af74e12dbf66d459d433b075622dd7931`
**es review revision:** `30607aebf5cc6281a565419a600c4d316a26329074bbb57612aced94f471b94b`
**pt-BR review revision:** `05745d15ede0594cee10418575cd141cf0b7108f514ffa680e6421ef4e8207a3`

### English

In GitHub Enterprise Cloud with personal accounts, which outside collaborator consumes an enterprise license under the documented repository-access criterion?

1. One with only a pending public-repository invitation

   A pending invitation for public-only outside collaboration does not consume one.

2. One whose private-repository invitation failed

   Failed invitations are excluded from license consumption.

3. One with accepted access to a private non-fork repository **[CORRECT]**

   Outside collaborators with access to private non-fork repositories consume licenses.

4. One with access only to public repositories

   Public-only outside collaboration does not consume an enterprise license.

**Concept:** Outside-collaborator license scope

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud con cuentas personales, ¿qué colaborador externo consume una licencia empresarial según el criterio documentado de acceso a repositorios?

1. Uno con solo una invitación pendiente a un repositorio público

   Una invitación pendiente para colaboración solo pública no consume una.

2. Uno cuya invitación a un repositorio privado falló

   Las invitaciones fallidas quedan excluidas del consumo.

3. Uno con acceso aceptado a un repositorio privado que no sea fork **[CORRECT]**

   Los colaboradores con acceso a repositorios privados que no sean forks consumen licencias.

4. Uno con acceso solo a repositorios públicos

   La colaboración externa solo pública no consume licencia empresarial.

**Concept:** Ámbito de licencias para colaboradores externos

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud com contas pessoais, qual colaborador externo consome uma licença empresarial segundo o critério documentado de acesso a repositórios?

1. Um com apenas um convite pendente para repositório público

   Um convite pendente para colaboração apenas pública não consome uma.

2. Um cujo convite para repositório privado falhou

   Convites que falharam ficam excluídos do consumo.

3. Um com acesso aceito a um repositório privado que não seja fork **[CORRECT]**

   Colaboradores com acesso a repositórios privados que não são forks consomem licenças.

4. Um com acesso apenas a repositórios públicos

   Colaboração externa apenas pública não consome licença empresarial.

**Concept:** Escopo de licenças para colaboradores externos

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/reference/github-license-users>

<!-- certification-coach-question:admin-070:62597f9ceae7df5caf3426ae224ffa5618bcab4395a90b27082a5f3a12d11525 -->
## Question 70: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-070`

**Content revision:** `62597f9ceae7df5caf3426ae224ffa5618bcab4395a90b27082a5f3a12d11525`

**en review revision:** `498f7bb04c6c235e0a3561820372232baa2f3ba4e5fbe6cfa18a5fedb9a598dd`
**es review revision:** `14a2447ee0a8a2ab4da8d0955abc21ec8c6caf0599752265c842dd3715f006e8`
**pt-BR review revision:** `511c028090338f2b2bd8bbc0e481a8ebed8e832b8ade8eee4466862d6fa028ad`

### English

Which pair names the two documented billing models for GitHub Enterprise user licenses?

1. Monthly and annual

   Monthly and annual describe billing frequency, not these license models.

2. Credit card and invoice

   Credit card and invoice concern payment arrangements, not license models.

3. Cloud and Server

   Cloud and Server are deployment options rather than license billing models.

4. Usage-based and volume **[CORRECT]**

   GitHub documents usage-based and volume models for enterprise licenses.

**Concept:** Enterprise license billing models

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué pareja nombra los dos modelos documentados de facturación de licencias de usuario GitHub Enterprise?

1. Mensual y anual

   Mensual y anual describen frecuencia, no estos modelos de licencia.

2. Tarjeta de crédito y factura

   Tarjeta y factura tratan del pago, no de modelos de licencia.

3. Cloud y Server

   Cloud y Server son implementaciones, no modelos de facturación de licencias.

4. Basado en uso y por volumen **[CORRECT]**

   GitHub documenta modelos basados en uso y por volumen para licencias empresariales.

**Concept:** Modelos de facturación de licencias empresariales

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual par nomeia os dois modelos documentados de cobrança de licenças de usuário GitHub Enterprise?

1. Mensal e anual

   Mensal e anual descrevem frequência, não esses modelos de licença.

2. Cartão de crédito e fatura

   Cartão e fatura tratam do pagamento, não de modelos de licença.

3. Cloud e Server

   Cloud e Server são implantações, não modelos de cobrança de licenças.

4. Baseado em uso e por volume **[CORRECT]**

   O GitHub documenta modelos baseados em uso e por volume para licenças empresariais.

**Concept:** Modelos de cobrança de licenças empresariais

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises>

<!-- certification-coach-question:admin-071:111ae4eba5b990d9445cad2cf7f94fbb417dbf31766de6e43560094baff1e59d -->
## Question 71: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-071`

**Content revision:** `111ae4eba5b990d9445cad2cf7f94fbb417dbf31766de6e43560094baff1e59d`

**en review revision:** `d022a87be4ca4db7ee00ec70eb6323d07ca4b0237532e3de061a0a3b0aafb181`
**es review revision:** `14123b18de1a06d5d5d8e97bb6431557c7ef53fd70695f37208ae4f2ffbfdb49`
**pt-BR review revision:** `d12760eb8ff32b2bdc86d7ac5a0484468c0f609e53d8bc8db378100893961cd6`

### English

Which statement correctly describes the relationship between GitHub Enterprise Cloud user licenses and paid feature consumption?

1. User licenses and billable feature usage can both contribute charges **[CORRECT]**

   The bill can include enterprise licenses, paid feature usage, and extra purchased products.

2. User-license charges always include all paid feature consumption

   Included allowances do not make all additional usage free.

3. Billable feature consumption replaces enterprise user-license charges

   Feature usage does not replace the enterprise-license component.

4. Each additional organization membership replaces feature charges

   Organization membership does not substitute for feature billing.

**Concept:** License charges versus service consumption

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué afirmación describe correctamente la relación entre licencias de usuario y consumo de funciones de pago en GitHub Enterprise Cloud?

1. Las licencias y el uso facturable de funciones pueden generar cargos **[CORRECT]**

   La factura puede incluir licencias, uso de funciones de pago y productos adicionales.

2. Los cargos de licencia siempre incluyen todo el consumo de funciones de pago

   Las cantidades incluidas no hacen gratuito todo consumo adicional.

3. El consumo facturable sustituye los cargos de licencia empresarial

   El consumo de funciones no sustituye el componente de licencias.

4. Cada pertenencia adicional a una organización sustituye cargos de funciones

   Pertenecer a organizaciones no sustituye la facturación de funciones.

**Concept:** Licencias frente a consumo de servicios

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual afirmação descreve corretamente a relação entre licenças de usuário e consumo de recursos pagos no GitHub Enterprise Cloud?

1. Licenças e uso faturável de recursos podem gerar cobranças **[CORRECT]**

   A fatura pode incluir licenças, uso de recursos pagos e produtos adicionais.

2. As cobranças de licença sempre incluem todo o consumo de recursos pagos

   As franquias incluídas não tornam todo consumo adicional gratuito.

3. O consumo faturável substitui as cobranças de licença empresarial

   O consumo de recursos não substitui o componente de licenças.

4. Cada associação adicional a uma organização substitui cobranças de recursos

   Pertencer a organizações não substitui a cobrança de recursos.

**Concept:** Licenças versus consumo de serviços

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises>

<!-- certification-coach-question:admin-072:9096855b7349e48517e6b26fb94722a61b730eb10e6a41a39e6f23f958fa1edf -->
## Question 72: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-072`

**Content revision:** `9096855b7349e48517e6b26fb94722a61b730eb10e6a41a39e6f23f958fa1edf`

**en review revision:** `3a4e1cd3f95c8ac8369d2c29f6439dfd2a52cfdacb4934c436cccde23d22633c`
**es review revision:** `a56d01ca70d1a916cd3d43ad763fe1d90bd39daa27fd6ed1ea83fbadd8230e50`
**pt-BR review revision:** `393b02b62a355f9b9561d90a4bdce5b36712f968ccf602298bdcf0c1663fab00`

### English

What is the purpose of cost centers in GitHub Enterprise Cloud billing?

1. Deduplicate Cloud and Server user licenses

   License synchronization, not cost centers, deduplicates users across deployments.

2. Attribute metered spending to business units **[CORRECT]**

   Cost centers allocate metered spending, not volume or subscription billing.

3. Pool separate enterprise license contracts

   Cost centers do not combine separate license contracts.

4. Convert volume subscriptions to usage-based licenses

   Cost centers do not change the license billing model.

**Concept:** Enterprise cost allocation

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuál es la finalidad de los centros de costos en la facturación de GitHub Enterprise Cloud?

1. Deduplicar licencias de usuario entre Cloud y Server

   La sincronización de licencias, no los centros, deduplica usuarios entre entornos.

2. Atribuir gastos medidos a unidades de negocio **[CORRECT]**

   Los centros asignan gastos medidos, no facturación por volumen o suscripción.

3. Agrupar contratos separados de licencias empresariales

   Los centros no combinan contratos de licencias separados.

4. Convertir suscripciones por volumen en licencias basadas en uso

   Los centros no cambian el modelo de facturación de licencias.

**Concept:** Asignación empresarial de costos

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual é a finalidade dos centros de custo na cobrança do GitHub Enterprise Cloud?

1. Deduplicar licenças de usuário entre Cloud e Server

   A sincronização de licenças, não os centros, deduplica usuários entre ambientes.

2. Atribuir gastos medidos a unidades de negócio **[CORRECT]**

   Centros alocam gastos medidos, não cobrança por volume ou assinatura.

3. Agrupar contratos separados de licenças empresariais

   Centros não combinam contratos de licenças separados.

4. Converter assinaturas por volume em licenças baseadas em uso

   Centros não alteram o modelo de cobrança de licenças.

**Concept:** Alocação empresarial de custos

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/cost-centers>

<!-- certification-coach-question:admin-073:4d03568ecf232a06c39f669c47e0fcf4ecce9c9720dec85bd7faf1165b12bca6 -->
## Question 73: Administer GitHub Enterprise environment

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-073`

**Content revision:** `4d03568ecf232a06c39f669c47e0fcf4ecce9c9720dec85bd7faf1165b12bca6`

**en review revision:** `a1b81306a38ef74820853286cfc960d516359c683334a658f29679eba3d01a7a`
**es review revision:** `317257f0541d34d33df4ff0f73e19be8d1583023c13bae9c768561aef3b1703b`
**pt-BR review revision:** `76518248d6cb6eb54999a73ba8aee8918fa235aa51d27c5a1c204b2be09c7c40`

### English

What is needed to deduplicate a person's license usage across GitHub Enterprise Cloud and GitHub Enterprise Server?

1. Connect both deployments to the same SAML IdP alone

   A shared IdP does not by itself synchronize license data.

2. Combine invoice contacts without license synchronization

   Shared billing contacts do not establish license synchronization.

3. Synchronize license usage between environments **[CORRECT]**

   License synchronization enables GitHub to deduplicate users using documented identity-matching criteria.

4. Configure matching usernames without license synchronization

   Matching usernames alone do not synchronize license usage.

**Concept:** Combined deployment license synchronization

**Authored coaching hints:**

- Separate licensed people from consumption of paid services.
- Check the billing model and scope before counting or allocating charges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué se necesita para deduplicar el uso de licencia de una persona entre GitHub Enterprise Cloud y GitHub Enterprise Server?

1. Conectar ambas implementaciones al mismo IdP SAML solamente

   Un IdP compartido no sincroniza por sí solo los datos de licencias.

2. Unificar contactos de facturación sin sincronizar licencias

   Los contactos de facturación compartidos no establecen sincronización de licencias.

3. Sincronizar el uso de licencias entre entornos **[CORRECT]**

   La sincronización permite deduplicar usuarios mediante criterios documentados de identidad.

4. Configurar nombres de usuario coincidentes sin sincronizar licencias

   Los nombres coincidentes por sí solos no sincronizan el uso de licencias.

**Concept:** Sincronización de licencias entre implementaciones

**Authored coaching hints:**

- Distingue las personas con licencia del consumo de servicios de pago.
- Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que é necessário para deduplicar o uso de licença de uma pessoa entre GitHub Enterprise Cloud e GitHub Enterprise Server?

1. Conectar ambas as implantações ao mesmo IdP SAML apenas

   Um IdP compartilhado não sincroniza por si só os dados de licenças.

2. Unificar contatos de cobrança sem sincronizar licenças

   Contatos de cobrança compartilhados não estabelecem sincronização de licenças.

3. Sincronizar o uso de licenças entre ambientes **[CORRECT]**

   A sincronização permite deduplicar usuários usando critérios documentados de identidade.

4. Configurar nomes de usuário correspondentes sem sincronizar licenças

   Nomes correspondentes por si só não sincronizam o uso de licenças.

**Concept:** Sincronização de licenças entre implantações

**Authored coaching hints:**

- Diferencie pessoas licenciadas do consumo de serviços pagos.
- Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use>

<!-- certification-coach-question:admin-074:624711c7dab9095b762b6257d4f9525d777db3a877a6c852c024b4e695d974f4 -->
## Question 74: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-074`

**Content revision:** `624711c7dab9095b762b6257d4f9525d777db3a877a6c852c024b4e695d974f4`

**en review revision:** `a7c0c04b50751d437e4b28532309028f62532d15f8808e373b42c5b4762dc226`
**es review revision:** `cdc3b3bba762a33992626b2deca8556260a31fb758472c489e2900c42fed46f2`
**pt-BR review revision:** `bc79e68456aedeebf2b338eb582c7f63aa8279fa6debfd775c538ac85797e9dc`

### English

An administrator has an existing ruleset definition and wants to import it through another repository's ruleset interface. Which file format does this import use?

1. JSON **[CORRECT]**

   The ruleset import interface accepts a JSON ruleset definition.

2. CSV

   CSV tables are not the ruleset import format.

3. TOML

   TOML is not the documented format for this ruleset importer.

4. SARIF

   SARIF represents static-analysis results, not ruleset definitions.

**Concept:** Ruleset definitions can be imported from JSON files.

**Authored coaching hints:**

- Identify the kind of object being transferred, not its enforcement result.
- Distinguish a policy definition from an analysis report.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona administra un repositorio y quiere importar una definición de ruleset existente desde la interfaz de otro repositorio. ¿Qué formato de archivo usa esta importación?

1. JSON **[CORRECT]**

   La interfaz de importación acepta una definición de ruleset en JSON.

2. CSV

   Las tablas CSV no son el formato de importación de rulesets.

3. TOML

   TOML no es el formato documentado de este importador.

4. SARIF

   SARIF representa resultados de análisis estático, no definiciones de rulesets.

**Concept:** Las definiciones de rulesets pueden importarse desde archivos JSON.

**Authored coaching hints:**

- Identifica el objeto que se transfiere, no su resultado de aplicación.
- Distingue una definición de política de un informe de análisis.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa administra um repositório e quer importar uma definição existente de ruleset pela interface de outro repositório. Qual formato de arquivo essa importação usa?

1. JSON **[CORRECT]**

   A interface de importação aceita uma definição de ruleset em JSON.

2. CSV

   Tabelas CSV não são o formato de importação de rulesets.

3. TOML

   TOML não é o formato documentado para esse importador.

4. SARIF

   SARIF representa resultados de análise estática, não definições de rulesets.

**Concept:** Definições de rulesets podem ser importadas de arquivos JSON.

**Authored coaching hints:**

- Identifique o objeto transferido, não seu resultado de aplicação.
- Diferencie uma definição de política de um relatório de análise.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository>

<!-- certification-coach-question:admin-075:cecd57543b4c06a94e40092038f344fc1a9d68caf9f1173e81e8856506325b51 -->
## Question 75: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-075`

**Content revision:** `cecd57543b4c06a94e40092038f344fc1a9d68caf9f1173e81e8856506325b51`

**en review revision:** `176d4a65595c7f8ab0e9cd0c20ad763860111df25f0d1e3646a28761a31f353d`
**es review revision:** `f284e03fa0ca755a6eb58fe5cb7186a25503c41611da8058bca8e0c042c40b99`
**pt-BR review revision:** `ff6935172c6de16cf9b6680651de26974252df22a3cda3a98ef360f5f204da3b`

### English

Which ruleset enforcement status records potential violations without blocking operations on GitHub Enterprise Cloud?

1. Active

   Active rulesets enforce their requirements.

2. Disabled

   Disabled rulesets do not evaluate activity.

3. Evaluate **[CORRECT]**

   Evaluate measures effects without enforcing the rules.

4. Archived

   Archived is not a ruleset enforcement status.

**Concept:** Nonblocking ruleset evaluation

**Authored coaching hints:**

- Separate observing a policy from enforcing it.
- An inactive policy need not collect evaluation results.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué estado de aplicación de un conjunto de reglas registra posibles infracciones sin bloquear operaciones en GitHub Enterprise Cloud?

1. Active

   Los conjuntos Active imponen sus requisitos.

2. Disabled

   Los conjuntos Disabled no evalúan la actividad.

3. Evaluate **[CORRECT]**

   Evaluate mide los efectos sin imponer las reglas.

4. Archived

   Archived no es un estado de aplicación de conjuntos de reglas.

**Concept:** Evaluación sin bloqueo de reglas

**Authored coaching hints:**

- Distingue observar una política de imponerla.
- Una política inactiva no necesariamente recopila evaluaciones.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual status de aplicação de um conjunto de regras registra possíveis violações sem bloquear operações no GitHub Enterprise Cloud?

1. Active

   Conjuntos Active impõem seus requisitos.

2. Disabled

   Conjuntos Disabled não avaliam a atividade.

3. Evaluate **[CORRECT]**

   Evaluate mede os efeitos sem impor as regras.

4. Archived

   Archived não é um status de aplicação de conjuntos de regras.

**Concept:** Avaliação de regras sem bloqueio

**Authored coaching hints:**

- Diferencie observar uma política de impô-la.
- Uma política inativa não necessariamente coleta avaliações.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>

<!-- certification-coach-question:admin-076:a04250b7bd2d2aeeb0e05357b4e48c43f919cca1f5a7773c88851f02e5b5085a -->
## Question 76: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-076`

**Content revision:** `a04250b7bd2d2aeeb0e05357b4e48c43f919cca1f5a7773c88851f02e5b5085a`

**en review revision:** `de1e4d69a13ad41ce244cc42bd5476f32a52a8b9791c82c4424f6a06ee9d17d8`
**es review revision:** `6c6c7011ad8ff161964a7df6e24eac15b8f6c71d7b4830c8cff812f0240a0b0b`
**pt-BR review revision:** `7b86e64f8d27df9d441bbbbb0662a9e44a62066dd9bbdc2360dabf733f103a29`

### English

A release GitHub App needs an exception to one branch ruleset. Which change limits the exception to that integration?

1. Add that app to the bypass list **[CORRECT]**

   An app-specific entry scopes bypass to the installation actor.

2. Grant bypass to the write role

   A role-based exemption covers all users with that role.

3. Disable enforcement for the branch

   Disabling enforcement exempts every actor.

4. Grant bypass to all repository admins

   An admin-wide exemption is broader than the integration.

**Concept:** Scoped ruleset exceptions

**Authored coaching hints:**

- Identify the actor that actually performs the release.
- Compare individual exceptions with role-wide exceptions.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una GitHub App de publicación necesita una excepción a un conjunto de reglas de rama. ¿Qué cambio limita la excepción a esa integración?

1. Añadir esa aplicación a la lista de omisión **[CORRECT]**

   Una entrada específica limita la omisión al actor de instalación.

2. Permitir la omisión al rol de escritura

   Una excepción por rol incluye a todos sus usuarios.

3. Desactivar la aplicación de reglas para la rama

   Desactivar la aplicación exime a todos los actores.

4. Permitir la omisión a todos los administradores del repositorio

   Eximir a todos los administradores excede la integración.

**Concept:** Excepciones de reglas acotadas

**Authored coaching hints:**

- Identifica al actor que realiza la publicación.
- Compara excepciones individuales con excepciones por rol.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma GitHub App de lançamento precisa de uma exceção a um conjunto de regras de branch. Qual mudança limita a exceção à integração?

1. Adicionar esse aplicativo à lista de bypass **[CORRECT]**

   Uma entrada específica limita o bypass ao ator da instalação.

2. Permitir bypass ao papel de escrita

   Uma exceção por papel abrange todos os seus usuários.

3. Desativar a aplicação das regras para a branch

   Desativar a aplicação isenta todos os atores.

4. Permitir bypass a todos os administradores do repositório

   Isentar todos os administradores excede a integração.

**Concept:** Exceções de regras com escopo limitado

**Authored coaching hints:**

- Identifique o ator que realiza o lançamento.
- Compare exceções individuais com exceções por papel.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>

<!-- certification-coach-question:admin-077:8d0b7b61665a92e81e038b5893669b43236d2aa95469fdb2e90263d8242047aa -->
## Question 77: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-077`

**Content revision:** `8d0b7b61665a92e81e038b5893669b43236d2aa95469fdb2e90263d8242047aa`

**en review revision:** `c0c7145723e462435ea87140bc53d11c912dfe2f1304e5ef6a066ef7e8cfe32c`
**es review revision:** `60964e46406f47670d0a2ff40b82d1ce49a91169e14d795b1159b67d5bf85f49`
**pt-BR review revision:** `d087836c51036f293fae9ed3cd467cf6e4239af3de0bfda3ed6d418daed88297`

### English

Which branch ruleset rule rejects non-fast-forward pushes by actors without bypass?

1. Require linear history

   Linear history prevents merge commits, not all history rewrites.

2. Restrict deletions

   Deletion restrictions protect the branch reference from removal.

3. Block force pushes **[CORRECT]**

   Blocking force pushes prevents non-fast-forward updates.

4. Require signed commits

   Signed commits can still rewrite branch history.

**Concept:** Protecting branch history

**Authored coaching hints:**

- Separate commit shape from reference updates.
- A signed history can still be rewritten.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué regla de rama rechaza los envíos que no son fast-forward de actores sin permiso de omisión?

1. Require linear history

   El historial lineal impide commits de fusión, no todas las reescrituras.

2. Restrict deletions

   Restringir eliminaciones protege la referencia de la rama.

3. Block force pushes **[CORRECT]**

   Bloquear envíos forzados impide actualizaciones que no son fast-forward.

4. Require signed commits

   Los commits firmados también pueden reescribir el historial.

**Concept:** Protección del historial de ramas

**Authored coaching hints:**

- Distingue la forma de los commits de las actualizaciones de referencias.
- Un historial firmado también puede reescribirse.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual regra de branch rejeita pushes que não sejam fast-forward feitos por atores sem bypass?

1. Require linear history

   Histórico linear impede commits de merge, não toda reescrita.

2. Restrict deletions

   Restringir exclusões protege a referência da branch.

3. Block force pushes **[CORRECT]**

   Bloquear pushes forçados impede atualizações que não sejam fast-forward.

4. Require signed commits

   Commits assinados também podem reescrever o histórico.

**Concept:** Proteção do histórico de branches

**Authored coaching hints:**

- Diferencie o formato dos commits das atualizações de referências.
- Um histórico assinado também pode ser reescrito.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-078:82146358f668dbe225e5b54b1aa87d9358b4175998da9cc18cd6738e6ea65c6e -->
## Question 78: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-078`

**Content revision:** `82146358f668dbe225e5b54b1aa87d9358b4175998da9cc18cd6738e6ea65c6e`

**en review revision:** `464890f5b05befa192ff43d3dee7986116c83d46e268785b15d7380e69c29354`
**es review revision:** `b5e55a5c561aeb02196ac0f1b4c3a8ae358a8248373020b36da7d3d16474d251`
**pt-BR review revision:** `9d670fc77e7d263bc1899c1cf0f0d9f04d65c815e6625025759f3c3106529952`

### English

Which review setting invalidates earlier approvals when a push changes the pull request's diff?

1. Dismiss stale pull request approvals when new commits are pushed **[CORRECT]**

   Stale-review dismissal removes approvals tied to the earlier diff.

2. Require review from Code Owners

   Code-owner review selects responsible reviewers.

3. Require conversation resolution before merging

   Conversation resolution addresses discussion threads.

4. Require approval of the most recent reviewable push

   Latest-push approval can retain earlier approvals.

**Concept:** Stale approval dismissal

**Authored coaching hints:**

- Consider whether approvals are removed or merely supplemented.
- Focus on what changes after the reviewed diff changes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ajuste de revisión invalida aprobaciones anteriores cuando un envío cambia el diff de la solicitud de incorporación?

1. Dismiss stale pull request approvals when new commits are pushed **[CORRECT]**

   Descartar revisiones obsoletas elimina aprobaciones del diff anterior.

2. Require review from Code Owners

   La revisión de propietarios selecciona revisores responsables.

3. Require conversation resolution before merging

   Resolver conversaciones atiende los hilos de discusión.

4. Require approval of the most recent reviewable push

   Aprobar el último envío puede conservar aprobaciones anteriores.

**Concept:** Descarte de aprobaciones obsoletas

**Authored coaching hints:**

- Considera si las aprobaciones se eliminan o se complementan.
- Piensa qué cambia al modificarse el diff revisado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração de revisão invalida aprovações anteriores quando um push altera o diff do pull request?

1. Dismiss stale pull request approvals when new commits are pushed **[CORRECT]**

   Descartar revisões obsoletas remove aprovações do diff anterior.

2. Require review from Code Owners

   A revisão de responsáveis seleciona os revisores adequados.

3. Require conversation resolution before merging

   Resolver conversas trata dos tópicos de discussão.

4. Require approval of the most recent reviewable push

   Aprovar o último push pode preservar aprovações anteriores.

**Concept:** Descarte de aprovações obsoletas

**Authored coaching hints:**

- Considere se as aprovações são removidas ou complementadas.
- Pense no que muda quando o diff revisado é alterado.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-079:7adc5d5fb599a2e389eb06874fec01527982230edf56027c60188fc8023d197a -->
## Question 79: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-079`

**Content revision:** `7adc5d5fb599a2e389eb06874fec01527982230edf56027c60188fc8023d197a`

**en review revision:** `d75e2dd32f1f426aa248eeeca3a88235c9f24c857f1ab25dd54928a35e109ff2`
**es review revision:** `31f34e54c6cb6c23f04969f9de9f10a60396e9ec9e70ca9f60feca4ba5efc7d5`
**pt-BR review revision:** `91f197162a7428ffe580df83ef4200333a23370b9c44772c5cd508ef6efa189e`

### English

Which required status check attribute restricts its accepted results to a particular installed GitHub App?

1. The check name

   A check name alone does not establish its producer.

2. The expected source **[CORRECT]**

   The expected source binds the check to the chosen app.

3. The workflow filename

   A filename is not the check's authenticated producer.

4. The branch targeting pattern

   Branch patterns select branches, not check producers.

**Concept:** Required check provenance

**Authored coaching hints:**

- A check name alone does not establish its producer.
- Look for the setting that constrains result origin.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué atributo de una comprobación de estado obligatoria restringe los resultados aceptados a una GitHub App instalada concreta?

1. El nombre de la comprobación

   El nombre de una comprobación no demuestra quién la produjo.

2. El origen esperado **[CORRECT]**

   El origen esperado vincula la comprobación con la aplicación elegida.

3. El nombre del archivo de flujo

   Un nombre de archivo no es el productor autenticado de la comprobación.

4. El patrón de selección de ramas

   Los patrones seleccionan ramas, no productores de comprobaciones.

**Concept:** Origen de comprobaciones obligatorias

**Authored coaching hints:**

- El nombre de una comprobación no demuestra quién la produjo.
- Busca el ajuste que limita el origen del resultado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual atributo de uma verificação de status obrigatória restringe os resultados aceitos a uma GitHub App instalada específica?

1. O nome da verificação

   O nome de uma verificação não comprova seu produtor.

2. A origem esperada **[CORRECT]**

   A origem esperada vincula a verificação ao aplicativo escolhido.

3. O nome do arquivo de workflow

   Um nome de arquivo não é o produtor autenticado da verificação.

4. O padrão de seleção de branches

   Padrões selecionam branches, não produtores de verificações.

**Concept:** Origem de verificações obrigatórias

**Authored coaching hints:**

- O nome de uma verificação não comprova seu produtor.
- Procure a configuração que restringe a origem do resultado.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-080:32e01347a224a6671f85f9d3a8f6bb87b683331dcdcc264cb60b51f79b10ad9e -->
## Question 80: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-080`

**Content revision:** `32e01347a224a6671f85f9d3a8f6bb87b683331dcdcc264cb60b51f79b10ad9e`

**en review revision:** `f7f3e7cead6c0c6ee10962dfb2d55c7e1b6f1c150775fe2c6b00176650ffe34c`
**es review revision:** `c6f0b7dfc1ec33e205de38144503cd28ae328b5424b19ce344c6fd3ef9b0b0f5`
**pt-BR review revision:** `ca1225f7d814abaadd310895605e347184501adfe7f2bf1e23a27e56363c5e3c`

### English

Which branch rule requires cryptographically verified signatures on commits?

1. Require signed commits **[CORRECT]**

   This rule requires verified commit signatures.

2. Require linear history

   Linear history excludes merge commits without verifying signatures.

3. Require a pull request before merging

   A pull request requirement controls the merge process.

4. Require status checks to pass

   Status checks report configured checks, not inherently commit signatures.

**Concept:** Commit signature enforcement

**Authored coaching hints:**

- Distinguish authorship evidence from review approval.
- Consider which control operates on each commit.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué regla de rama exige firmas verificadas criptográficamente en los commits?

1. Require signed commits **[CORRECT]**

   Esta regla exige firmas de commits verificadas.

2. Require linear history

   El historial lineal excluye commits de fusión sin verificar firmas.

3. Require a pull request before merging

   Exigir una solicitud de incorporación controla el proceso de fusión.

4. Require status checks to pass

   Las comprobaciones de estado no verifican firmas por sí mismas.

**Concept:** Exigencia de firmas de commits

**Authored coaching hints:**

- Distingue pruebas de autoría de aprobaciones de revisión.
- Considera qué control actúa sobre cada commit.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual regra de branch exige assinaturas verificadas criptograficamente nos commits?

1. Require signed commits **[CORRECT]**

   Essa regra exige assinaturas verificadas nos commits.

2. Require linear history

   Histórico linear exclui commits de merge sem verificar assinaturas.

3. Require a pull request before merging

   Exigir um pull request controla o processo de merge.

4. Require status checks to pass

   Verificações de status não verificam assinaturas por si só.

**Concept:** Exigência de assinaturas de commits

**Authored coaching hints:**

- Diferencie evidências de autoria de aprovações de revisão.
- Considere qual controle atua em cada commit.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-081:3e042ab7efda8251e4b6eabad47c7e3aeec0263b42a4abfefb308878d0b1388e -->
## Question 81: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-081`

**Content revision:** `3e042ab7efda8251e4b6eabad47c7e3aeec0263b42a4abfefb308878d0b1388e`

**en review revision:** `033a8555ee7cf9e2d1b01eab8be3a5046dd1b4c4920b2ed8310d66b25126dc16`
**es review revision:** `504a4600a6131ceac41a6df85623af8818180d620efd8e39cca39c9acae7cd6f`
**pt-BR review revision:** `8d444a07d0cb4d7d53a3a89f2f383d16c57d4a5d2de7afa376a4146c2be9bebe`

### English

On GitHub Enterprise Cloud, which push rule blocks files under a prohibited directory pattern across a private repository's fork network?

1. Restrict file extensions

   Extension restrictions match file suffixes rather than directory patterns.

2. Restrict file path length

   Path-length restrictions measure length, not directory identity.

3. Restrict file size

   Size restrictions measure file size.

4. Restrict file paths **[CORRECT]**

   File-path restrictions match prohibited path patterns.

**Concept:** Path-based push restrictions

**Authored coaching hints:**

- Match the rule to the property being prohibited.
- A directory name is not a file-size limit.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, ¿qué regla de envío bloquea archivos bajo un patrón de directorio prohibido en la red de bifurcaciones de un repositorio privado?

1. Restrict file extensions

   Restringir extensiones compara sufijos, no patrones de directorio.

2. Restrict file path length

   Restringir longitud mide caracteres, no la identidad del directorio.

3. Restrict file size

   Restringir tamaño mide el tamaño del archivo.

4. Restrict file paths **[CORRECT]**

   Restringir rutas compara patrones de rutas prohibidas.

**Concept:** Restricciones de envío por ruta

**Authored coaching hints:**

- Relaciona la regla con la propiedad prohibida.
- El nombre de un directorio no es un límite de tamaño.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, qual regra de push bloqueia arquivos sob um padrão de diretório proibido na rede de forks de um repositório privado?

1. Restrict file extensions

   Restringir extensões compara sufixos, não padrões de diretório.

2. Restrict file path length

   Restringir comprimento mede caracteres, não a identidade do diretório.

3. Restrict file size

   Restringir tamanho mede o tamanho do arquivo.

4. Restrict file paths **[CORRECT]**

   Restringir caminhos compara padrões de caminhos proibidos.

**Concept:** Restrições de push por caminho

**Authored coaching hints:**

- Relacione a regra à propriedade proibida.
- O nome de um diretório não é um limite de tamanho.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-082:19030ace760ee9f403bcab8fc5c08c866fe0f851fb238444dc5c9690ea9c44ab -->
## Question 82: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-082`

**Content revision:** `19030ace760ee9f403bcab8fc5c08c866fe0f851fb238444dc5c9690ea9c44ab`

**en review revision:** `ca55fffb46bb80ef163e10eda5962cffff32386d029d0d3a79602f4668fd4240`
**es review revision:** `378a304f22c5d3f1b300cbf82ed5a0c56b618c68e36aab9b248d1a625a7767f4`
**pt-BR review revision:** `216774bb8d907848a0eebc5d846d092d5bc10b6dadfd3e1d5f55fac46d9b85b2`

### English

Which enterprise repository policy controls whether private and internal repositories can be forked in GitHub Enterprise Cloud?

1. Repository forking policy **[CORRECT]**

   Forking policy governs creation of private and internal forks.

2. Repository creation policy

   Creation policy controls who can create repositories.

3. Repository visibility policy

   Visibility policy controls visibility changes.

4. Repository transfer policy

   Transfer policy governs moving repository ownership.

**Concept:** Enterprise data protection policies

**Authored coaching hints:**

- Identify the operation that creates a related copy.
- Do not confuse copying with transferring ownership.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué política de repositorios de empresa controla si pueden bifurcarse repositorios privados e internos en GitHub Enterprise Cloud?

1. Política de bifurcación de repositorios **[CORRECT]**

   La política de bifurcación controla las bifurcaciones privadas e internas.

2. Política de creación de repositorios

   La política de creación controla quién puede crear repositorios.

3. Política de visibilidad de repositorios

   La política de visibilidad controla cambios de visibilidad.

4. Política de transferencia de repositorios

   La política de transferencia regula cambios de propietario.

**Concept:** Políticas empresariales de protección de datos

**Authored coaching hints:**

- Identifica la operación que crea una copia relacionada.
- No confundas copiar con transferir la propiedad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual política de repositórios da enterprise controla se repositórios privados e internos podem ter forks no GitHub Enterprise Cloud?

1. Política de forks de repositórios **[CORRECT]**

   A política de forks controla forks privados e internos.

2. Política de criação de repositórios

   A política de criação controla quem pode criar repositórios.

3. Política de visibilidade de repositórios

   A política de visibilidade controla mudanças de visibilidade.

4. Política de transferência de repositórios

   A política de transferência regula mudanças de proprietário.

**Concept:** Políticas empresariais de proteção de dados

**Authored coaching hints:**

- Identifique a operação que cria uma cópia relacionada.
- Não confunda copiar com transferir a propriedade.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise>

<!-- certification-coach-question:admin-083:aa6a8ca586ed574ae8ce2788000b51810ccedf06a1ae599f129729873fee4a9a -->
## Question 83: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-083`

**Content revision:** `aa6a8ca586ed574ae8ce2788000b51810ccedf06a1ae599f129729873fee4a9a`

**en review revision:** `ac9b1266b1d9b1bd4d517d336701aaac0df12f669bca500a6c22dc69800d9847`
**es review revision:** `819f9b5fb62c3a642448760fcfba34d3630d60a3acd30c3946f2e0c78916df34`
**pt-BR review revision:** `851bacee5ba214eb6688055086abcd3e1318b75e5e0e0ff5bd928c0393d051de`

### English

A user's address is on a GitHub Enterprise Cloud IP allow list. What access does this alone grant to private repositories?

1. Read access throughout the enterprise

   Network admission does not grant enterprise-wide read access.

2. Write access within the home organization

   The network list does not assign organization roles.

3. No additional repository permissions **[CORRECT]**

   Repository authorization is still required independently.

4. Read access to explicitly listed repositories

   IP entries describe networks, not repository grants.

**Concept:** Network controls versus authorization

**Authored coaching hints:**

- Separate where a request originates from who may access data.
- A network condition is only one part of access control.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La dirección de un usuario figura en la lista de IP permitidas de GitHub Enterprise Cloud. ¿Qué acceso concede eso por sí solo a repositorios privados?

1. Lectura en toda la empresa

   Admitir una red no concede lectura en toda la empresa.

2. Escritura en la organización de origen

   La lista de red no asigna roles de organización.

3. Ningún permiso adicional de repositorio **[CORRECT]**

   La autorización del repositorio sigue siendo necesaria por separado.

4. Lectura en repositorios enumerados explícitamente

   Las entradas IP describen redes, no permisos de repositorio.

**Concept:** Controles de red frente a autorización

**Authored coaching hints:**

- Distingue el origen de una solicitud de quién puede acceder a los datos.
- La condición de red es solo una parte del control de acceso.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O endereço de um usuário está na lista de IPs permitidos do GitHub Enterprise Cloud. Que acesso isso, isoladamente, concede a repositórios privados?

1. Leitura em toda a enterprise

   Admitir uma rede não concede leitura em toda a enterprise.

2. Escrita na organização de origem

   A lista de rede não atribui papéis de organização.

3. Nenhuma permissão adicional de repositório **[CORRECT]**

   A autorização do repositório continua sendo necessária separadamente.

4. Leitura nos repositórios listados explicitamente

   Entradas de IP descrevem redes, não permissões de repositório.

**Concept:** Controles de rede versus autorização

**Authored coaching hints:**

- Diferencie a origem de uma solicitação de quem pode acessar os dados.
- A condição de rede é apenas uma parte do controle de acesso.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list>

<!-- certification-coach-question:admin-084:daad2531e568cffa9dc59e4a1c8f732e3b23d5091599825cfa32d09c9eabab07 -->
## Question 84: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-084`

**Content revision:** `daad2531e568cffa9dc59e4a1c8f732e3b23d5091599825cfa32d09c9eabab07`

**en review revision:** `f44accf889a1b61da08e40b35a087c8da089b65c2806a982949b572d87dd6c22`
**es review revision:** `f8b8c3546a511688828c83956d4808fa2540820e865eef6c1d70cb5834b3f142`
**pt-BR review revision:** `3374da237ade8cbbbd37a0f2da800ac20d75be13677aaa9a8ed75865b876a933`

### English

In the English GitHub.com UI, which organization settings path lets an organization owner apply security configurations to repositories?

1. Settings &gt; Member privileges

   Member privileges governs member capabilities, not security configuration assignment.

2. Settings &gt; Advanced Security &gt; Configurations **[CORRECT]**

   Configurations provides repository selection and configuration assignment.

3. Settings &gt; Authentication security

   Authentication security governs authentication controls.

4. Settings &gt; Third-party access

   Third-party access governs integrations rather than security bundles.

**Concept:** Applying organization security configurations

**Authored coaching hints:**

- Look for repository security enablement rather than user authentication.
- Consider the distinction between integration access and feature coverage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la interfaz de GitHub.com en inglés, ¿qué ruta de ajustes permite al propietario de una organización aplicar configuraciones de seguridad a repositorios?

1. Settings &gt; Member privileges

   Member privileges controla capacidades de miembros, no la asignación de configuraciones.

2. Settings &gt; Advanced Security &gt; Configurations **[CORRECT]**

   Configurations permite seleccionar repositorios y asignar configuraciones.

3. Settings &gt; Authentication security

   Authentication security controla la autenticación.

4. Settings &gt; Third-party access

   Third-party access controla integraciones, no paquetes de ajustes de seguridad.

**Concept:** Aplicación de configuraciones de seguridad de organización

**Authored coaching hints:**

- Busca la activación de seguridad de repositorios, no autenticación de usuarios.
- Distingue acceso de integraciones de cobertura de funciones.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na interface do GitHub.com em inglês, qual caminho de configurações permite ao proprietário da organização aplicar configurações de segurança a repositórios?

1. Settings &gt; Member privileges

   Member privileges controla capacidades de membros, não a atribuição de configurações.

2. Settings &gt; Advanced Security &gt; Configurations **[CORRECT]**

   Configurations permite selecionar repositórios e atribuir configurações.

3. Settings &gt; Authentication security

   Authentication security controla a autenticação.

4. Settings &gt; Third-party access

   Third-party access controla integrações, não conjuntos de ajustes de segurança.

**Concept:** Aplicação de configurações de segurança da organização

**Authored coaching hints:**

- Procure habilitação de segurança de repositórios, não autenticação de usuários.
- Diferencie acesso de integrações de cobertura de recursos.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration>

<!-- certification-coach-question:admin-085:ea0cb15eb76093da6fe52305c666bd44e5275dec9e21e5ae4eccf577d2a0d414 -->
## Question 85: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-085`

**Content revision:** `ea0cb15eb76093da6fe52305c666bd44e5275dec9e21e5ae4eccf577d2a0d414`

**en review revision:** `2da28e46692c4c5f784d7fd8428f8477f42a0b91e1332d72a50ea35b24aa68be`
**es review revision:** `608b52d6b4a46f73f7ea01e15c22997b7c9781f110e478143f10fb795e6f1554`
**pt-BR review revision:** `53387357facb5a22806519244079845409c340bfe627a3bd11752e8204d8385d`

### English

Which security configuration option prevents repository administrators from changing its managed feature settings where enforcement is supported?

1. Set it as the default configuration

   Default assignment affects new repositories, not administrator override rights.

2. Enforce the configuration **[CORRECT]**

   Enforcement restricts changes to the managed settings.

3. Detach it from the repositories

   Detaching removes the managed configuration relationship.

4. Apply it to all current repositories

   Broad application does not itself enforce the managed settings.

**Concept:** Security configuration enforcement

**Authored coaching hints:**

- Assignment scope and modification restrictions are different.
- Keeping a managed relationship differs from preventing overrides.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué opción de una configuración de seguridad impide que los administradores de repositorio cambien sus ajustes administrados cuando se admite la aplicación obligatoria?

1. Definirla como configuración predeterminada

   La asignación predeterminada afecta repositorios nuevos, no derechos de modificación.

2. Exigir el cumplimiento de la configuración **[CORRECT]**

   La aplicación obligatoria restringe cambios en los ajustes administrados.

3. Desvincularla de los repositorios

   Desvincular elimina la relación de configuración administrada.

4. Aplicarla a todos los repositorios actuales

   La aplicación amplia no impone por sí sola los ajustes administrados.

**Concept:** Aplicación obligatoria de configuraciones de seguridad

**Authored coaching hints:**

- El alcance de asignación y las restricciones de modificación son distintos.
- Mantener una relación administrada no equivale a impedir cambios locales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual opção de uma configuração de segurança impede que administradores de repositório alterem seus ajustes gerenciados quando há suporte à imposição?

1. Defini-la como configuração padrão

   A atribuição padrão afeta repositórios novos, não direitos de alteração.

2. Impor a configuração **[CORRECT]**

   A imposição restringe mudanças nos ajustes gerenciados.

3. Desvinculá-la dos repositórios

   Desvincular remove a relação de configuração gerenciada.

4. Aplicá-la a todos os repositórios atuais

   A aplicação ampla não impõe os ajustes gerenciados por si só.

**Concept:** Imposição de configurações de segurança

**Authored coaching hints:**

- O escopo de atribuição e as restrições de alteração são distintos.
- Manter uma relação gerenciada não equivale a impedir alterações locais.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-configurations>

<!-- certification-coach-question:admin-086:54760cb65a46ea90001d9fc5aa42014db08ec89bbb5d1fb6c08bd86a7723f20a -->
## Question 86: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-086`

**Content revision:** `54760cb65a46ea90001d9fc5aa42014db08ec89bbb5d1fb6c08bd86a7723f20a`

**en review revision:** `54aca30679d29d9551b23b6120572b1602e7f244c7064081ea37b44291bc9b1e`
**es review revision:** `2b2a9c23d8a14de9aa34904eb0f99187ec850cd1cb025958119639b9c14a65f8`
**pt-BR review revision:** `2a6d45ff2ab79544711dc040ef91a8a0c1fab5682a38ca9b53d974a4194f657c`

### English

Who can view security data across all repositories in an organization through security overview, subject to feature availability?

1. All repository maintainers

   Maintainer access is limited to authorized repositories.

2. All organization members

   Membership alone does not expose every repository's security data.

3. Organization owners and security managers **[CORRECT]**

   These roles have organization-wide security visibility.

4. All outside collaborators

   Outside collaboration does not confer organization-wide visibility.

**Concept:** Security overview visibility boundaries

**Authored coaching hints:**

- Consider whether a role is organization-wide or repository-scoped.
- Access to one repository does not imply access to all alerts.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Quién puede ver datos de seguridad de todos los repositorios de una organización mediante la vista general de seguridad, según la disponibilidad de funciones?

1. Todos los mantenedores de repositorios

   El acceso de mantenedor se limita a repositorios autorizados.

2. Todos los miembros de la organización

   Ser miembro no expone los datos de seguridad de cada repositorio.

3. Propietarios de organización y administradores de seguridad **[CORRECT]**

   Estos roles tienen visibilidad de seguridad en toda la organización.

4. Todos los colaboradores externos

   La colaboración externa no confiere visibilidad en toda la organización.

**Concept:** Límites de visibilidad de la vista general de seguridad

**Authored coaching hints:**

- Considera si el rol abarca la organización o un repositorio.
- Acceder a un repositorio no implica acceder a todas las alertas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quem pode visualizar dados de segurança de todos os repositórios de uma organização pela visão geral de segurança, conforme a disponibilidade dos recursos?

1. Todos os mantenedores de repositórios

   O acesso de mantenedor se limita a repositórios autorizados.

2. Todos os membros da organização

   Ser membro não expõe os dados de segurança de todos os repositórios.

3. Proprietários da organização e gerentes de segurança **[CORRECT]**

   Esses papéis têm visibilidade de segurança em toda a organização.

4. Todos os colaboradores externos

   A colaboração externa não concede visibilidade em toda a organização.

**Concept:** Limites de visibilidade da visão geral de segurança

**Authored coaching hints:**

- Considere se o papel abrange a organização ou um repositório.
- Acessar um repositório não implica acessar todos os alertas.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/security-overview/about-security-overview>

<!-- certification-coach-question:admin-087:120fb7c6831ee6034316045aee778b229810193f93c168f5ec90777982ddb2c4 -->
## Question 87: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-087`

**Content revision:** `120fb7c6831ee6034316045aee778b229810193f93c168f5ec90777982ddb2c4`

**en review revision:** `1721880e2ab9889df0b743bf034073b4ad4a66200651035b6acba57ba50005a0`
**es review revision:** `7fd5d9ae25a95724fdca02e080a24f740c5aa19adb355d302654da71b4649a18`
**pt-BR review revision:** `7139f6ab6692aaa971835be6595f8d4ae2e3d66d7f320ae7638d9adfb00e6938`

### English

An enterprise owner cannot see an older non-Git event in the default audit-log view, but it is still within retention. What should they change first?

1. The enterprise's default branch

   The default branch does not control audit search dates.

2. The repository's visibility

   Repository visibility is not an audit search time filter.

3. The audit-log date filter **[CORRECT]**

   The default view covers less than the full retention window.

4. The member's notification settings

   Notification settings do not expand audit-log searches.

**Concept:** Audit search window versus retention

**Authored coaching hints:**

- The initial display window may be narrower than stored history.
- Change the search scope before changing security policies.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de empresa no ve un evento antiguo no relacionado con Git en la vista predeterminada del registro de auditoría, pero sigue dentro del plazo de retención. ¿Qué debe cambiar primero?

1. La rama predeterminada de la empresa

   La rama predeterminada no controla las fechas de búsqueda de auditoría.

2. La visibilidad del repositorio

   La visibilidad no es un filtro temporal de auditoría.

3. El filtro de fechas del registro de auditoría **[CORRECT]**

   La vista predeterminada abarca menos que el plazo total de retención.

4. Las notificaciones del miembro

   Las notificaciones no amplían las búsquedas del registro.

**Concept:** Ventana de búsqueda de auditoría frente a retención

**Authored coaching hints:**

- La ventana inicial puede ser menor que el historial almacenado.
- Cambia el alcance de búsqueda antes que las políticas de seguridad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário da enterprise não vê um evento antigo não relacionado ao Git na visão padrão do log de auditoria, embora esteja dentro da retenção. O que deve alterar primeiro?

1. A branch padrão da enterprise

   A branch padrão não controla as datas da pesquisa de auditoria.

2. A visibilidade do repositório

   A visibilidade não é um filtro temporal de auditoria.

3. O filtro de datas do log de auditoria **[CORRECT]**

   A visão padrão abrange menos que a janela total de retenção.

4. As notificações do membro

   As notificações não ampliam as pesquisas no log.

**Concept:** Janela de pesquisa de auditoria versus retenção

**Authored coaching hints:**

- A janela inicial pode ser menor que o histórico armazenado.
- Altere o escopo da pesquisa antes das políticas de segurança.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise>

<!-- certification-coach-question:admin-088:d40136a02095ff5b97f6d906e9fc6217501d1a769ea71923a35a59252fcfce58 -->
## Question 88: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-088`

**Content revision:** `d40136a02095ff5b97f6d906e9fc6217501d1a769ea71923a35a59252fcfce58`

**en review revision:** `ab546d23fa076c2ee64287294b8b0531c7ba66c362d5e852d5723e3d5e9a2b8d`
**es review revision:** `b787a862da6bbb50dfac5955abb8146c5ab82c8c45a0b374e8837f3602ecbada`
**pt-BR review revision:** `fa536965a6d48229c9cf4b454fe27b3ace2082fb916ee9e4df31cb564b5df16e`

### English

Which design supports retaining GitHub Enterprise Cloud audit evidence beyond GitHub's native retention?

1. Save the audit-log search URL

   A search URL does not preserve the underlying events.

2. Subscribe owners to email notifications

   Email notifications do not constitute a complete audit stream.

3. Increase repository archive frequency

   Repository archives preserve code, not enterprise audit events.

4. Stream events to externally retained storage **[CORRECT]**

   External storage can apply the organization's retention policy.

**Concept:** Audit evidence retention architecture

**Authored coaching hints:**

- Consider where the event records themselves will persist.
- A saved view is not a retained copy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué diseño permite conservar evidencias de auditoría de GitHub Enterprise Cloud más allá de la retención nativa de GitHub?

1. Guardar la URL de búsqueda del registro

   Una URL de búsqueda no conserva los eventos subyacentes.

2. Suscribir a los propietarios a notificaciones por correo

   Las notificaciones no constituyen una transmisión completa de auditoría.

3. Archivar repositorios con mayor frecuencia

   Los archivos de repositorio conservan código, no eventos de auditoría de empresa.

4. Transmitir eventos a almacenamiento con retención externa **[CORRECT]**

   El almacenamiento externo puede aplicar la política de retención propia.

**Concept:** Arquitectura de retención de evidencias de auditoría

**Authored coaching hints:**

- Considera dónde persistirán los registros de eventos.
- Una vista guardada no es una copia conservada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual projeto permite reter evidências de auditoria do GitHub Enterprise Cloud além da retenção nativa do GitHub?

1. Salvar a URL de pesquisa do log

   Uma URL de pesquisa não preserva os eventos subjacentes.

2. Inscrever proprietários em notificações por e-mail

   Notificações não constituem um fluxo completo de auditoria.

3. Arquivar repositórios com maior frequência

   Arquivos de repositório preservam código, não eventos de auditoria da enterprise.

4. Transmitir eventos para armazenamento com retenção externa **[CORRECT]**

   O armazenamento externo pode aplicar a política de retenção própria.

**Concept:** Arquitetura de retenção de evidências de auditoria

**Authored coaching hints:**

- Considere onde os registros de eventos vão persistir.
- Uma visão salva não é uma cópia retida.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise>

<!-- certification-coach-question:admin-089:7ca374a8763f51c1297b5311227dff0245ae065970c5cabd32a5cc9c7416093a -->
## Question 89: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-089`

**Content revision:** `7ca374a8763f51c1297b5311227dff0245ae065970c5cabd32a5cc9c7416093a`

**en review revision:** `1fad02ef4242df58b72bd21ed929e14d1096e8dd272dbfb9a161c0ca8fb23416`
**es review revision:** `4c7443a1ace5865d864d07dc4109ff7b8408cf4bb48c2688166d849bebd49979`
**pt-BR review revision:** `48408bb9e437232f3713dcc9ec712931f4936f64a747f5df56210e2b1a820c43`

### English

Which value supports identifying enterprise audit-log events performed by a particular access token?

1. The token owner's display name

   A display name does not distinguish a user's tokens.

2. The token's expiration date

   Expiration dates are not unique token identifiers.

3. The token's requested scopes

   Many tokens can share the same scopes.

4. The token's SHA-256 hash **[CORRECT]**

   Token-specific audit searches use the token's hash.

**Concept:** Token-level audit attribution

**Authored coaching hints:**

- A user can own several credentials.
- Prefer an identifier tied to one credential rather than its capabilities.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué valor permite identificar eventos del registro de auditoría de empresa realizados con un token de acceso concreto?

1. El nombre visible del propietario del token

   Un nombre visible no distingue los tokens de un usuario.

2. La fecha de caducidad del token

   Las fechas de caducidad no son identificadores únicos.

3. Los ámbitos solicitados por el token

   Muchos tokens pueden compartir los mismos ámbitos.

4. El hash SHA-256 del token **[CORRECT]**

   Las búsquedas específicas de token usan su hash.

**Concept:** Atribución de auditoría por token

**Authored coaching hints:**

- Un usuario puede tener varias credenciales.
- Prefiere un identificador de una credencial a sus capacidades.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual valor permite identificar eventos do log de auditoria da enterprise realizados com um token de acesso específico?

1. O nome de exibição do proprietário do token

   Um nome de exibição não diferencia os tokens de um usuário.

2. A data de expiração do token

   Datas de expiração não são identificadores únicos.

3. Os escopos solicitados pelo token

   Muitos tokens podem compartilhar os mesmos escopos.

4. O hash SHA-256 do token **[CORRECT]**

   Pesquisas específicas por token usam seu hash.

**Concept:** Atribuição de auditoria por token

**Authored coaching hints:**

- Um usuário pode ter várias credenciais.
- Prefira um identificador de uma credencial às suas capacidades.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token>

<!-- certification-coach-question:admin-090:b8cc85531e0a12a059aa89edee6b4a86e6a501ba596ef8fccfe8cb2034f0d4a7 -->
## Question 90: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-090`

**Content revision:** `b8cc85531e0a12a059aa89edee6b4a86e6a501ba596ef8fccfe8cb2034f0d4a7`

**en review revision:** `77d252225e71e2a27cc4f9d05fe6bdc43958263da3ead399c629d970eab38f5c`
**es review revision:** `2984d759e9d239bcec9fc00c0487d0f207fb627df78b27e744eb6063ebaa4c7b`
**pt-BR review revision:** `83b2c08819374dfa45431fbf306f42e6b9373157e3f0bcb0d81147184b4e8011`

### English

A valid production API key appears in a secret-scanning alert. Which action contains the credential exposure?

1. Revoke or rotate the key at its provider **[CORRECT]**

   Provider-side revocation or rotation invalidates the exposed credential.

2. Delete the latest commit containing the key

   Deleting a commit does not invalidate copied credentials.

3. Close the alert as resolved

   Closing an alert does not revoke a key.

4. Make the repository read-only

   Read-only access does not prevent use of an exposed key.

**Concept:** Containing a leaked credential

**Authored coaching hints:**

- Distinguish removing evidence from disabling access.
- The credential may already exist outside the repository.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una alerta de detección de secretos muestra una clave de API de producción válida. ¿Qué acción contiene la exposición de la credencial?

1. Revocar o rotar la clave en su proveedor **[CORRECT]**

   La revocación o rotación en el proveedor invalida la credencial expuesta.

2. Eliminar el último commit que contiene la clave

   Eliminar un commit no invalida credenciales copiadas.

3. Cerrar la alerta como resuelta

   Cerrar una alerta no revoca la clave.

4. Convertir el repositorio en solo lectura

   El acceso de solo lectura no impide usar la clave expuesta.

**Concept:** Contención de una credencial filtrada

**Authored coaching hints:**

- Distingue eliminar evidencias de deshabilitar acceso.
- La credencial podría existir ya fuera del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma chave de API de produção válida aparece em um alerta de detecção de segredos. Qual ação contém a exposição da credencial?

1. Revogar ou rotacionar a chave no provedor **[CORRECT]**

   A revogação ou rotação no provedor invalida a credencial exposta.

2. Excluir o último commit que contém a chave

   Excluir um commit não invalida credenciais copiadas.

3. Fechar o alerta como resolvido

   Fechar um alerta não revoga a chave.

4. Tornar o repositório somente leitura

   O acesso somente leitura não impede o uso da chave exposta.

**Concept:** Contenção de uma credencial vazada

**Authored coaching hints:**

- Diferencie remover evidências de desabilitar o acesso.
- A credencial pode já existir fora do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning>

<!-- certification-coach-question:admin-091:616878dd23b0df8dc84de158d5c5f8264ab5dddc186186e77bb133f873027f77 -->
## Question 91: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-091`

**Content revision:** `616878dd23b0df8dc84de158d5c5f8264ab5dddc186186e77bb133f873027f77`

**en review revision:** `2b12e8bcc669510b10592e9db10bbdbcb81fff37022cb6884aa024c176407e98`
**es review revision:** `e9ce03448cb8eabbeee3f2a62c047f8180460de61e207aec3eab98497e3c2b5b`
**pt-BR review revision:** `063a3ba9020b4f88de175a391997e3d37850cec84e8ef99d27701ffaed86648f`

### English

Which repository feature can block supported secrets during a push, before they enter the repository?

1. Secret-scanning push protection **[CORRECT]**

   Push protection checks pushes for supported secret patterns.

2. Secret-scanning validity checks

   Validity checks assess whether detected credentials remain active.

3. Dependabot security updates

   Security updates remediate vulnerable dependencies.

4. CodeQL default setup

   CodeQL analyzes application code rather than providing this push gate.

**Concept:** Preventive secret protection

**Authored coaching hints:**

- Separate prevention at ingestion from post-detection triage.
- Not every security feature runs during a push.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función de repositorio puede bloquear secretos compatibles durante un envío, antes de que entren en el repositorio?

1. Protección de inserción de secretos **[CORRECT]**

   La protección de inserción comprueba patrones de secretos compatibles al enviar.

2. Comprobaciones de validez de secretos

   Las comprobaciones de validez evalúan si las credenciales detectadas siguen activas.

3. Actualizaciones de seguridad de Dependabot

   Las actualizaciones de seguridad corrigen dependencias vulnerables.

4. Configuración predeterminada de CodeQL

   CodeQL analiza código, no proporciona esta barrera de envío.

**Concept:** Protección preventiva de secretos

**Authored coaching hints:**

- Distingue prevención al ingresar datos de clasificación posterior.
- No todas las funciones de seguridad se ejecutan durante el envío.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do repositório pode bloquear segredos compatíveis durante um push, antes de entrarem no repositório?

1. Proteção de push para segredos **[CORRECT]**

   A proteção de push verifica padrões de segredos compatíveis durante o envio.

2. Verificações de validade de segredos

   Verificações de validade avaliam se credenciais detectadas continuam ativas.

3. Atualizações de segurança do Dependabot

   Atualizações de segurança corrigem dependências vulneráveis.

4. Configuração padrão do CodeQL

   CodeQL analisa código, não fornece essa barreira de push.

**Concept:** Proteção preventiva de segredos

**Authored coaching hints:**

- Diferencie prevenção na entrada de triagem após a detecção.
- Nem todo recurso de segurança é executado durante o push.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/about-push-protection>

<!-- certification-coach-question:admin-092:917454f73bf6a4c39665bfe9e277d80871416bc4f7a7ecf99d68495868931c2a -->
## Question 92: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-092`

**Content revision:** `917454f73bf6a4c39665bfe9e277d80871416bc4f7a7ecf99d68495868931c2a`

**en review revision:** `95023e704493e5ada88e07da18c60578c234b99563e6f585cc5473b68c005d8b`
**es review revision:** `98e4fea1ba6c2a829b1a7a842de113b595e013bfc91694fb411c4b7bb421439c`
**pt-BR review revision:** `dc881241471dc42a345a38e49e10880c2ff0b75dc8d48a9315900c3d9b081671`

### English

With delegated bypass enabled, what must a contributor without bypass privileges do to push a blocked test credential?

1. Rename the branch and retry

   Changing the branch name does not grant bypass privileges.

2. Close the resulting scanning alert

   Closing an alert does not authorize the blocked push.

3. Request a bypass for review **[CORRECT]**

   Delegated bypass routes an exception request to authorized reviewers.

4. Add a comment to the commit

   A commit comment does not grant a bypass.

**Concept:** Delegated secret bypass review

**Authored coaching hints:**

- Consider who is authorized to approve an exception.
- A developer's classification is not itself an authorization.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con la omisión delegada habilitada, ¿qué debe hacer un colaborador sin privilegios de omisión para enviar una credencial de prueba bloqueada?

1. Renombrar la rama y reintentar

   Cambiar el nombre de la rama no concede privilegios de omisión.

2. Cerrar la alerta de detección resultante

   Cerrar una alerta no autoriza el envío bloqueado.

3. Solicitar una omisión para revisión **[CORRECT]**

   La omisión delegada dirige la solicitud a revisores autorizados.

4. Añadir un comentario al commit

   Un comentario de commit no concede una omisión.

**Concept:** Revisión de omisiones delegadas de secretos

**Authored coaching hints:**

- Considera quién puede autorizar una excepción.
- La clasificación del desarrollador no es por sí sola una autorización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com bypass delegado habilitado, o que um colaborador sem privilégios de bypass deve fazer para enviar uma credencial de teste bloqueada?

1. Renomear a branch e tentar novamente

   Alterar o nome da branch não concede privilégios de bypass.

2. Fechar o alerta de detecção resultante

   Fechar um alerta não autoriza o push bloqueado.

3. Solicitar um bypass para revisão **[CORRECT]**

   O bypass delegado encaminha a solicitação a revisores autorizados.

4. Adicionar um comentário ao commit

   Um comentário de commit não concede bypass.

**Concept:** Revisão de bypass delegado para segredos

**Authored coaching hints:**

- Considere quem pode autorizar uma exceção.
- A classificação do desenvolvedor não é, por si só, uma autorização.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass>

<!-- certification-coach-question:admin-093:589029fdc10caf91c0d863c4ddfe2d0899519790bb34950d6d793d2c297b0971 -->
## Question 93: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-093`

**Content revision:** `589029fdc10caf91c0d863c4ddfe2d0899519790bb34950d6d793d2c297b0971`

**en review revision:** `83c8ffdf29bd8ff04ba943434d754341be89db1bfc9f8b22bd6d086e48b9706a`
**es review revision:** `a269ff00dfe04203149f5903a20a585c4d80f1ad68e4186b100a2171347f5993`
**pt-BR review revision:** `cfae3f25f92f4a172e6b61e80a89148b685733734cf2ada66194799784958396`

### English

Which secret-scanning capability detects an organization's own credential format when no built-in pattern covers it?

1. Custom patterns **[CORRECT]**

   Custom patterns define matching rules for organization-specific secrets.

2. Dependency submission

   Dependency submission inventories software dependencies.

3. CodeQL query suites

   CodeQL queries analyze code rather than configure secret patterns.

4. Validity checks

   Validity checks test detected credentials, not define new formats.

**Concept:** Custom secret detection

**Authored coaching hints:**

- The missing capability is recognition of a format.
- Distinguish discovery rules from credential validation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué capacidad de detección de secretos reconoce el formato de credenciales propio de una organización cuando ningún patrón integrado lo cubre?

1. Patrones personalizados **[CORRECT]**

   Los patrones personalizados definen reglas para secretos propios de la organización.

2. Envío de dependencias

   El envío de dependencias inventaría dependencias de software.

3. Conjuntos de consultas de CodeQL

   Las consultas de CodeQL analizan código, no configuran patrones de secretos.

4. Comprobaciones de validez

   Las comprobaciones de validez prueban credenciales detectadas, no definen formatos.

**Concept:** Detección personalizada de secretos

**Authored coaching hints:**

- Lo que falta es reconocer un formato.
- Distingue reglas de detección de validación de credenciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual capacidade de detecção de segredos reconhece o formato próprio de credenciais de uma organização quando nenhum padrão integrado o abrange?

1. Padrões personalizados **[CORRECT]**

   Padrões personalizados definem regras para segredos próprios da organização.

2. Envio de dependências

   O envio de dependências inventaria dependências de software.

3. Conjuntos de consultas do CodeQL

   Consultas do CodeQL analisam código, não configuram padrões de segredos.

4. Verificações de validade

   Verificações de validade testam credenciais detectadas, não definem formatos.

**Concept:** Detecção personalizada de segredos

**Authored coaching hints:**

- O que falta é reconhecer um formato.
- Diferencie regras de detecção de validação de credenciais.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns>

<!-- certification-coach-question:admin-094:f85110b29bacaff22d7804a89dd09023ca3cf60f1f056fd5b9397e921b1df8dc -->
## Question 94: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-094`

**Content revision:** `f85110b29bacaff22d7804a89dd09023ca3cf60f1f056fd5b9397e921b1df8dc`

**en review revision:** `e83d83cc2ba680a349a839822c30ce0a75353adde2d0a4cf2c04e0360125e35b`
**es review revision:** `93cc13337e52d65cc4850792e2500e51751128da2010e6bc3226a5bf9dcb05b5`
**pt-BR review revision:** `8c280053ac8fbcda3ce90f2d634dd8d60e75a7aa3d50a932b15e50b59e183d18`

### English

What does an empty secret-scanning alert list establish about a repository?

1. Every credential in history has been revoked

   An empty list does not prove provider-side revocation.

2. No alerts are visible within the enabled coverage **[CORRECT]**

   Results depend on scanning coverage, settings, and access.

3. All sensitive data formats have been scanned

   Secret scanning does not recognize every sensitive data format.

4. No supported secret can enter a future commit

   An empty list does not guarantee future prevention.

**Concept:** Limits of negative scanning evidence

**Authored coaching hints:**

- Absence of findings is not proof of universal coverage.
- Consider configuration, supported patterns, and visibility.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué demuestra una lista vacía de alertas de detección de secretos sobre un repositorio?

1. Todas las credenciales del historial se han revocado

   Una lista vacía no demuestra revocación en el proveedor.

2. No hay alertas visibles dentro de la cobertura habilitada **[CORRECT]**

   Los resultados dependen de la cobertura, los ajustes y el acceso.

3. Se han analizado todos los formatos de datos sensibles

   La detección de secretos no reconoce todos los formatos sensibles.

4. Ningún secreto compatible puede entrar en un commit futuro

   Una lista vacía no garantiza prevención futura.

**Concept:** Límites de la ausencia de hallazgos

**Authored coaching hints:**

- La ausencia de hallazgos no demuestra cobertura universal.
- Considera los ajustes, los patrones compatibles y la visibilidad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que uma lista vazia de alertas de detecção de segredos demonstra sobre um repositório?

1. Todas as credenciais do histórico foram revogadas

   Uma lista vazia não comprova revogação no provedor.

2. Não há alertas visíveis dentro da cobertura habilitada **[CORRECT]**

   Os resultados dependem da cobertura, das configurações e do acesso.

3. Todos os formatos de dados sensíveis foram analisados

   A detecção de segredos não reconhece todo formato sensível.

4. Nenhum segredo compatível pode entrar em um commit futuro

   Uma lista vazia não garante prevenção futura.

**Concept:** Limites da ausência de achados

**Authored coaching hints:**

- A ausência de achados não comprova cobertura universal.
- Considere configurações, padrões compatíveis e visibilidade.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning>

<!-- certification-coach-question:admin-095:df51c8bd2afbfa49f05266c5ca3dba6cf34a3247b42a1f09d8490e0899dbc01c -->
## Question 95: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-095`

**Content revision:** `df51c8bd2afbfa49f05266c5ca3dba6cf34a3247b42a1f09d8490e0899dbc01c`

**en review revision:** `46f17d2ac79190c7967933abed246b3a97e0c2627b4877e8a9b2241b31ed7241`
**es review revision:** `8908362c4ef44f442beb5e04c53b1474ba025ede1561b6f80b96ee782b53678c`
**pt-BR review revision:** `f9d9cb1f73e3a68b0477988f8022e296059c867c949e7009a4219dfe5d377335`

### English

A leaked credential has been revoked, but its secret-scanning alert remains open. What should a maintainer record when closing it?

1. A false-positive reason because access ended

   Revocation does not make the original detection incorrect.

2. A test-secret reason because the token is inactive

   A production credential does not become a test secret.

3. A revoked reason reflecting the remediation **[CORRECT]**

   The closure reason should reflect the actual revocation.

4. No reason because removing the file closes it

   Removing a file does not automatically close the alert.

**Concept:** Accurate secret alert resolution

**Authored coaching hints:**

- Classify the original finding separately from its current status.
- Record the action actually taken to remediate it.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se ha revocado una credencial filtrada, pero su alerta de detección de secretos sigue abierta. ¿Qué debe registrar el mantenedor al cerrarla?

1. Un motivo de falso positivo porque terminó el acceso

   La revocación no convierte la detección original en incorrecta.

2. Un motivo de secreto de prueba porque el token está inactivo

   Una credencial de producción no se convierte en secreto de prueba.

3. Un motivo de revocación que refleje la corrección **[CORRECT]**

   El motivo de cierre debe reflejar la revocación real.

4. Ningún motivo porque eliminar el archivo la cierra

   Eliminar un archivo no cierra automáticamente la alerta.

**Concept:** Resolución precisa de alertas de secretos

**Authored coaching hints:**

- Clasifica el hallazgo original aparte de su estado actual.
- Registra la acción realmente realizada para corregirlo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma credencial vazada foi revogada, mas seu alerta de detecção de segredos continua aberto. O que o mantenedor deve registrar ao fechá-lo?

1. Um motivo de falso positivo porque o acesso terminou

   A revogação não torna a detecção original incorreta.

2. Um motivo de segredo de teste porque o token está inativo

   Uma credencial de produção não se torna um segredo de teste.

3. Um motivo de revogação que reflita a correção **[CORRECT]**

   O motivo de fechamento deve refletir a revogação real.

4. Nenhum motivo porque excluir o arquivo o fecha

   Excluir um arquivo não fecha automaticamente o alerta.

**Concept:** Resolução precisa de alertas de segredos

**Authored coaching hints:**

- Classifique o achado original separadamente do estado atual.
- Registre a ação realmente realizada para corrigi-lo.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning/resolving-alerts>

<!-- certification-coach-question:admin-096:7b385991b41b21068a7f5f02403f48c4116bfdfb58b13ac8629d24163c2d2077 -->
## Question 96: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-096`

**Content revision:** `7b385991b41b21068a7f5f02403f48c4116bfdfb58b13ac8629d24163c2d2077`

**en review revision:** `cbabc3c84e4072a9016d08fd6c3441c816af3b10e930f2c13951205a9a67746d`
**es review revision:** `11d947a6cd99bb9f3b192c058547bde525c76b5a88d711d5ede79d95c28a5ce4`
**pt-BR review revision:** `940841b6e2e86aec6aec2ecba8817e8191c9b3207241ab38b33627358980a57b`

### English

Which CodeQL setup chooses analysis languages and scan triggers without adding a customizable workflow file to the repository?

1. Default setup **[CORRECT]**

   Default setup manages these choices without a checked-in workflow.

2. External CI setup

   External CI requires configuring the external analysis process.

3. Advanced setup

   Advanced setup uses a customizable workflow file.

4. Dependency submission

   Dependency submission supplies inventory data, not CodeQL scans.

**Concept:** CodeQL default setup

**Authored coaching hints:**

- Compare managed setup with workflow-file customization.
- The question concerns code analysis, not dependency inventory.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué configuración de CodeQL elige los lenguajes y desencadenadores de análisis sin añadir un archivo de flujo de trabajo personalizable al repositorio?

1. Configuración predeterminada **[CORRECT]**

   La configuración predeterminada administra estas opciones sin un flujo versionado.

2. Configuración en CI externa

   La CI externa requiere configurar el proceso externo de análisis.

3. Configuración avanzada

   La configuración avanzada usa un archivo de flujo personalizable.

4. Envío de dependencias

   El envío de dependencias aporta inventario, no análisis de CodeQL.

**Concept:** Configuración predeterminada de CodeQL

**Authored coaching hints:**

- Compara configuración administrada con personalización mediante archivos.
- La pregunta trata de análisis de código, no de inventario de dependencias.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração do CodeQL escolhe linguagens e gatilhos de análise sem adicionar um arquivo de workflow personalizável ao repositório?

1. Configuração padrão **[CORRECT]**

   A configuração padrão gerencia essas escolhas sem um workflow versionado.

2. Configuração em CI externa

   A CI externa exige configurar o processo externo de análise.

3. Configuração avançada

   A configuração avançada usa um arquivo de workflow personalizável.

4. Envio de dependências

   O envio de dependências fornece inventário, não análises do CodeQL.

**Concept:** Configuração padrão do CodeQL

**Authored coaching hints:**

- Compare configuração gerenciada com personalização por arquivos.
- A pergunta trata de análise de código, não de inventário de dependências.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning>

<!-- certification-coach-question:admin-097:ce03a8af670b729aa27a1f4a82e42bb41ad98113031ffce868ec590f1597b3bc -->
## Question 97: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-097`

**Content revision:** `ce03a8af670b729aa27a1f4a82e42bb41ad98113031ffce868ec590f1597b3bc`

**en review revision:** `67bbf9aeba5f94b6bc5d9a9ac1593f52349d8cc2ce03765719f0c9dc953303fc`
**es review revision:** `fd854aaf3abed46990432563143027be1586aff142ae211dad59596be513c9ad`
**pt-BR review revision:** `2d5bec904dc8b3e3029c784979645df206a7e7fa4a02ce944cd2258830ec9170`

### English

A repository needs custom build commands in its GitHub Actions CodeQL analysis. Which setup supports editing those steps?

1. Default setup with a different query suite

   Changing the query suite does not expose custom build steps.

2. Advanced setup with a workflow file **[CORRECT]**

   Advanced setup exposes workflow steps for customization.

3. Default setup with different runner labels

   Runner labels select execution hosts rather than custom build steps.

4. Default setup with different analysis languages

   Language selection does not provide custom build commands.

**Concept:** Custom CodeQL build configuration

**Authored coaching hints:**

- Consider where executable build steps are defined.
- Changing alert state does not change analysis execution.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio necesita comandos de compilación personalizados en su análisis de CodeQL mediante GitHub Actions. ¿Qué configuración permite editar esos pasos?

1. Configuración predeterminada con otro conjunto de consultas

   Cambiar el conjunto de consultas no expone pasos de compilación personalizados.

2. Configuración avanzada con archivo de flujo de trabajo **[CORRECT]**

   La configuración avanzada permite personalizar los pasos del flujo.

3. Configuración predeterminada con otras etiquetas de ejecutor

   Las etiquetas seleccionan hosts de ejecución, no pasos de compilación personalizados.

4. Configuración predeterminada con otros lenguajes de análisis

   Seleccionar lenguajes no proporciona comandos personalizados de compilación.

**Concept:** Configuración de compilación personalizada de CodeQL

**Authored coaching hints:**

- Considera dónde se definen los pasos de compilación ejecutables.
- Cambiar una alerta no cambia la ejecución del análisis.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório precisa de comandos de build personalizados na análise do CodeQL pelo GitHub Actions. Qual configuração permite editar essas etapas?

1. Configuração padrão com outro conjunto de consultas

   Alterar o conjunto de consultas não expõe etapas personalizadas de build.

2. Configuração avançada com arquivo de workflow **[CORRECT]**

   A configuração avançada permite personalizar as etapas do workflow.

3. Configuração padrão com outras etiquetas de executor

   Etiquetas selecionam hosts de execução, não etapas personalizadas de build.

4. Configuração padrão com outras linguagens de análise

   Selecionar linguagens não fornece comandos personalizados de build.

**Concept:** Configuração de build personalizado do CodeQL

**Authored coaching hints:**

- Considere onde as etapas executáveis de build são definidas.
- Alterar um alerta não altera a execução da análise.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning>

<!-- certification-coach-question:admin-098:3f4d2b051dab8f76e0f261806148a60282f28d9eecd6fc705f35156c536f5b67 -->
## Question 98: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-098`

**Content revision:** `3f4d2b051dab8f76e0f261806148a60282f28d9eecd6fc705f35156c536f5b67`

**en review revision:** `31cc2890fb0de95782271ae34db2c29240b5cab7a888d5c83c5c5f312e6302fd`
**es review revision:** `1819bc58dcc9675c44d7a1b7f9a32993a15d754bbf52c0e2cffc83a9f8e9c89f`
**pt-BR review revision:** `8dce299cce3a6eadf19ae52a94a39c8c6aee110e6a115a6a4c4bc2ce7ed67ded`

### English

Which result format lets a supported third-party analyzer upload findings to GitHub code scanning?

1. SPDX

   SPDX describes software bills of materials.

2. SARIF **[CORRECT]**

   SARIF represents static-analysis results accepted by code scanning.

3. JUnit XML

   JUnit XML typically describes test results.

4. LCOV

   LCOV describes code coverage results.

**Concept:** Code scanning result interchange

**Authored coaching hints:**

- Match the format to static-analysis findings.
- Inventory, test, and coverage reports serve different purposes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué formato de resultados permite a un analizador externo compatible cargar hallazgos en el análisis de código de GitHub?

1. SPDX

   SPDX describe listas de materiales de software.

2. SARIF **[CORRECT]**

   SARIF representa resultados de análisis estático aceptados por el análisis de código.

3. JUnit XML

   JUnit XML suele describir resultados de pruebas.

4. LCOV

   LCOV describe resultados de cobertura de código.

**Concept:** Intercambio de resultados de análisis de código

**Authored coaching hints:**

- Relaciona el formato con hallazgos de análisis estático.
- Los informes de inventario, pruebas y cobertura tienen otros fines.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual formato de resultados permite que um analisador externo compatível envie achados para a análise de código do GitHub?

1. SPDX

   SPDX descreve listas de materiais de software.

2. SARIF **[CORRECT]**

   SARIF representa resultados de análise estática aceitos pela análise de código.

3. JUnit XML

   JUnit XML normalmente descreve resultados de testes.

4. LCOV

   LCOV descreve resultados de cobertura de código.

**Concept:** Intercâmbio de resultados de análise de código

**Authored coaching hints:**

- Relacione o formato a achados de análise estática.
- Relatórios de inventário, testes e cobertura têm outros fins.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning>

<!-- certification-coach-question:admin-099:e3b864adbc747397722a718cb17eb5db07c82334c0c988ce14cf206ff887cbb4 -->
## Question 99: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-099`

**Content revision:** `e3b864adbc747397722a718cb17eb5db07c82334c0c988ce14cf206ff887cbb4`

**en review revision:** `01632c86a75cb4573993256c2f0628e396c6524dbcad00e3687654a3bea80be5`
**es review revision:** `6c23854752658be32a87905ffec8fc4e4d7520a40e2785af6e7b22456674582f`
**pt-BR review revision:** `406c7a6191d22a9e3e13b0bfe140a79461e063d1e780a878e5c62e2041a15f21`

### English

Which capability analyzes supported application source code for unsafe data flows such as SQL injection?

1. Dependabot alerts

   Dependabot alerts identify known vulnerabilities in dependencies.

2. CodeQL code scanning **[CORRECT]**

   CodeQL can analyze source-to-sink data flows in supported code.

3. Secret-scanning validity checks

   Validity checks assess detected credentials.

4. Dependency review

   Dependency review examines dependency changes rather than application data flow.

**Concept:** Application analysis versus supply-chain analysis

**Authored coaching hints:**

- Identify whether the risk lies in application logic or package versions.
- Consider how untrusted input reaches a sensitive operation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué capacidad analiza código fuente de aplicaciones compatibles para encontrar flujos de datos inseguros, como inyección SQL?

1. Alertas de Dependabot

   Las alertas de Dependabot identifican vulnerabilidades conocidas en dependencias.

2. Análisis de código con CodeQL **[CORRECT]**

   CodeQL puede analizar flujos entre origen y destino en código compatible.

3. Comprobaciones de validez de secretos

   Las comprobaciones de validez evalúan credenciales detectadas.

4. Revisión de dependencias

   La revisión de dependencias examina cambios de dependencias, no flujos de aplicación.

**Concept:** Análisis de aplicaciones frente a cadena de suministro

**Authored coaching hints:**

- Identifica si el riesgo está en la lógica de aplicación o versiones de paquetes.
- Considera cómo la entrada no confiable llega a una operación sensible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual capacidade analisa código-fonte de aplicações compatíveis em busca de fluxos de dados inseguros, como injeção de SQL?

1. Alertas do Dependabot

   Alertas do Dependabot identificam vulnerabilidades conhecidas em dependências.

2. Análise de código com CodeQL **[CORRECT]**

   CodeQL pode analisar fluxos entre origem e destino em código compatível.

3. Verificações de validade de segredos

   Verificações de validade avaliam credenciais detectadas.

4. Revisão de dependências

   A revisão de dependências examina mudanças de dependências, não fluxos da aplicação.

**Concept:** Análise de aplicações versus cadeia de suprimentos

**Authored coaching hints:**

- Identifique se o risco está na lógica da aplicação ou em versões de pacotes.
- Considere como uma entrada não confiável chega a uma operação sensível.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning>

<!-- certification-coach-question:admin-100:162340a539e0ff014ff9861864bfa2e89d9b6840be30f8675b8a736b9f5d8fed -->
## Question 100: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-100`

**Content revision:** `162340a539e0ff014ff9861864bfa2e89d9b6840be30f8675b8a736b9f5d8fed`

**en review revision:** `82be5ba51479411cec3a8dbb84beeaab1a21d3904e667f505ec6fae858733e2c`
**es review revision:** `24d40d68967cb18895782e7052361482ca63a79906cc79b78b08e503bbcc51bc`
**pt-BR review revision:** `59826868c048f884b474c6bbc238894dc49044aae9b40c03f00de0908fdc64e1`

### English

A reviewed code-scanning finding is demonstrably a false positive. How should a maintainer dismiss it?

1. Select the false-positive reason and document why **[CORRECT]**

   A supported reason and comment preserve the triage rationale.

2. Delete the workflow's result files

   Deleting results is not an accountable dismissal.

3. Disable scanning for the language

   Disabling a language removes coverage for other findings.

4. Reduce repository visibility and rerun

   Visibility changes do not resolve a false-positive finding.

**Concept:** Documented code-scanning dismissal

**Authored coaching hints:**

- Keep evidence of the decision without removing useful coverage.
- A triage action should explain why the finding is inapplicable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una revisión demuestra que un hallazgo de análisis de código es un falso positivo. ¿Cómo debe descartarlo el mantenedor?

1. Seleccionar el motivo de falso positivo y documentarlo **[CORRECT]**

   Un motivo admitido y un comentario conservan la justificación.

2. Eliminar los archivos de resultados del flujo

   Eliminar resultados no constituye un descarte trazable.

3. Desactivar el análisis del lenguaje

   Desactivar un lenguaje elimina la cobertura de otros hallazgos.

4. Reducir la visibilidad del repositorio y repetir

   Cambiar la visibilidad no resuelve un falso positivo.

**Concept:** Descarte documentado de análisis de código

**Authored coaching hints:**

- Conserva evidencias de la decisión sin eliminar cobertura útil.
- La clasificación debe explicar por qué no aplica el hallazgo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma revisão demonstra que um achado da análise de código é um falso positivo. Como o mantenedor deve descartá-lo?

1. Selecionar o motivo de falso positivo e documentá-lo **[CORRECT]**

   Um motivo aceito e um comentário preservam a justificativa.

2. Excluir os arquivos de resultados do workflow

   Excluir resultados não constitui um descarte rastreável.

3. Desativar a análise da linguagem

   Desativar uma linguagem elimina a cobertura de outros achados.

4. Reduzir a visibilidade do repositório e executar novamente

   Alterar a visibilidade não resolve um falso positivo.

**Concept:** Descarte documentado da análise de código

**Authored coaching hints:**

- Preserve evidências da decisão sem remover cobertura útil.
- A triagem deve explicar por que o achado não se aplica.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts>

<!-- certification-coach-question:admin-101:949985cdbe0559d8d85b563d8f93cbf87f76b868ff464b9174f5b9d35fc08701 -->
## Question 101: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-101`

**Content revision:** `949985cdbe0559d8d85b563d8f93cbf87f76b868ff464b9174f5b9d35fc08701`

**en review revision:** `0a7b004db0d8e70bb851d28ce27f7f911d910e8064545cc13bfbdbdaffbe8c8c`
**es review revision:** `9708e839849a30f09d5c15890eda02693e4f280b061e1618b4028b02fd6e134f`
**pt-BR review revision:** `25a98e7a6b8cdb05aa37e43728d8b8c71c5af78a8656238b65f028dfd9f5fad9`

### English

Which GitHub Enterprise Cloud ruleset control can block merges based on a chosen code-scanning tool and alert severity thresholds?

1. Require signed commits

   Signatures verify commits rather than vulnerability thresholds.

2. Require linear history

   Linear history governs commit structure.

3. Require deployments to succeed

   Deployment checks depend on environment deployment success.

4. Require code scanning results **[CORRECT]**

   This rule selects scanning tools and severity thresholds.

**Concept:** Security-based merge gates

**Authored coaching hints:**

- A successful analysis run can still contain vulnerabilities.
- Look for a control that evaluates findings, not just execution.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué control de conjuntos de reglas de GitHub Enterprise Cloud puede bloquear fusiones según una herramienta de análisis de código y umbrales de gravedad de alertas?

1. Require signed commits

   Las firmas verifican commits, no umbrales de vulnerabilidades.

2. Require linear history

   El historial lineal regula la estructura de commits.

3. Require deployments to succeed

   Las comprobaciones de despliegue dependen del éxito de los despliegues.

4. Require code scanning results **[CORRECT]**

   Esta regla selecciona herramientas y umbrales de gravedad.

**Concept:** Barreras de fusión basadas en seguridad

**Authored coaching hints:**

- Un análisis ejecutado correctamente aún puede contener vulnerabilidades.
- Busca un control que evalúe hallazgos, no solo ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual controle de conjuntos de regras do GitHub Enterprise Cloud pode bloquear merges por ferramenta de análise de código e limites de severidade dos alertas?

1. Require signed commits

   Assinaturas verificam commits, não limites de vulnerabilidades.

2. Require linear history

   Histórico linear regula a estrutura dos commits.

3. Require deployments to succeed

   Verificações de implantação dependem do sucesso das implantações.

4. Require code scanning results **[CORRECT]**

   Essa regra seleciona ferramentas e limites de severidade.

**Concept:** Barreiras de merge baseadas em segurança

**Authored coaching hints:**

- Uma análise executada com sucesso ainda pode conter vulnerabilidades.
- Procure um controle que avalie achados, não apenas a execução.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets>

<!-- certification-coach-question:admin-102:0ab05cf9d8ac081ce4642a94e8be1c6cec1931c2fa73d782b68d167857fe8e69 -->
## Question 102: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-102`

**Content revision:** `0ab05cf9d8ac081ce4642a94e8be1c6cec1931c2fa73d782b68d167857fe8e69`

**en review revision:** `3b8c202d5603a5b61361e7ee3647e0c572a9e8e64a844c399bbbe55a638949a1`
**es review revision:** `c1fb7b5ac506d2923f00af3c915aac7912ecfef33427b907825d28dc7dfe04e3`
**pt-BR review revision:** `a0c730c27b76be862733eff60da775634de2bc4c4efe4134456fab1e16501e36`

### English

On GitHub Enterprise Server 3.19, what prerequisite is explicitly required before repositories can use code scanning?

1. The organization owner publishes every repository

   Publishing repositories is neither required nor appropriate for private code.

2. The repository owner links a GitHub.com public repository

   A linked public repository is not this GHES prerequisite.

3. The site administrator enables code scanning on the appliance **[CORRECT]**

   GHES requires appliance-level code-scanning enablement by the site administrator.

4. The user authorizes an OAuth App with repo scope

   An OAuth grant does not enable the appliance feature.

**Concept:** GHES-specific code scanning prerequisites

**Authored coaching hints:**

- Distinguish appliance administration from repository configuration.
- Use documentation matching the deployed Server version.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Server 3.19, ¿qué requisito previo se exige explícitamente para que los repositorios usen análisis de código?

1. El propietario de la organización publica todos los repositorios

   Publicar repositorios no es necesario ni apropiado para código privado.

2. El propietario enlaza un repositorio público de GitHub.com

   Un repositorio público enlazado no es este requisito de GHES.

3. El administrador del sitio habilita el análisis de código en la instancia **[CORRECT]**

   GHES exige que el administrador del sitio habilite el análisis en la instancia.

4. El usuario autoriza una OAuth App con ámbito repo

   Una autorización OAuth no habilita la función de la instancia.

**Concept:** Requisitos de análisis de código específicos de GHES

**Authored coaching hints:**

- Distingue administración de la instancia de configuración del repositorio.
- Usa documentación correspondiente a la versión de Server instalada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Server 3.19, qual pré-requisito é explicitamente exigido para os repositórios usarem análise de código?

1. O proprietário da organização publica todos os repositórios

   Publicar repositórios não é necessário nem adequado para código privado.

2. O proprietário vincula um repositório público do GitHub.com

   Um repositório público vinculado não é esse pré-requisito do GHES.

3. O administrador do site habilita a análise de código na instância **[CORRECT]**

   GHES exige que o administrador do site habilite a análise na instância.

4. O usuário autoriza uma OAuth App com escopo repo

   Uma autorização OAuth não habilita o recurso da instância.

**Concept:** Pré-requisitos de análise de código específicos do GHES

**Authored coaching hints:**

- Diferencie administração da instância de configuração do repositório.
- Use documentação correspondente à versão do Server instalada.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/code-security/concepts/code-scanning/codeql/codeql-code-scanning>

<!-- certification-coach-question:admin-103:9acc103201cb12d844bb08baf2f4d5bd173fe98fa6e93a5876a67c10f65a5209 -->
## Question 103: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-103`

**Content revision:** `9acc103201cb12d844bb08baf2f4d5bd173fe98fa6e93a5876a67c10f65a5209`

**en review revision:** `64b570f430691c74cfff947639f2feb96d7cf47cef870e64e6929375deb7f599`
**es review revision:** `cadecff447d9c76c5196efdf8c69e96ffb7ea397757c47fd6ab3c8816e6652e3`
**pt-BR review revision:** `2526ff86538f861382fee39991f346ba77c1f849ff6fdad25574bd997a906042`

### English

For private repositories on GitHub Team, which product pairing covers code scanning and secret scanning respectively?

1. GitHub Secret Protection; GitHub Code Security

   The products are reversed: secret protection addresses credentials.

2. GitHub Copilot Business; GitHub Code Security

   Copilot Business alone is not the code-scanning entitlement.

3. GitHub Code Security; GitHub Secret Protection **[CORRECT]**

   Code Security covers code scanning; Secret Protection covers secret scanning.

4. GitHub Team alone; GitHub Secret Protection

   GitHub Team alone does not include private-repository code scanning.

**Concept:** Current security product licensing

**Authored coaching hints:**

- Separate source-code vulnerability analysis from credential leak detection.
- A base collaboration plan is not every security entitlement.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para repositorios privados en GitHub Team, ¿qué pareja de productos cubre respectivamente análisis de código y detección de secretos?

1. GitHub Secret Protection; GitHub Code Security

   Los productos están invertidos: Secret Protection atiende credenciales.

2. GitHub Copilot Business; GitHub Code Security

   Copilot Business por sí solo no concede análisis de código.

3. GitHub Code Security; GitHub Secret Protection **[CORRECT]**

   Code Security cubre análisis de código; Secret Protection, detección de secretos.

4. Solo GitHub Team; GitHub Secret Protection

   GitHub Team por sí solo no incluye análisis de código en repositorios privados.

**Concept:** Licencias actuales de productos de seguridad

**Authored coaching hints:**

- Distingue análisis de vulnerabilidades del código de detección de credenciales.
- El plan base de colaboración no concede todas las funciones de seguridad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para repositórios privados no GitHub Team, qual par de produtos cobre análise de código e detecção de segredos, respectivamente?

1. GitHub Secret Protection; GitHub Code Security

   Os produtos estão invertidos: Secret Protection trata de credenciais.

2. GitHub Copilot Business; GitHub Code Security

   Copilot Business sozinho não concede análise de código.

3. GitHub Code Security; GitHub Secret Protection **[CORRECT]**

   Code Security cobre análise de código; Secret Protection, detecção de segredos.

4. Somente GitHub Team; GitHub Secret Protection

   GitHub Team sozinho não inclui análise de código em repositórios privados.

**Concept:** Licenciamento atual de produtos de segurança

**Authored coaching hints:**

- Diferencie análise de vulnerabilidades do código de detecção de credenciais.
- O plano básico de colaboração não concede todos os recursos de segurança.

</details>

**Official supporting source:** <https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security>

<!-- certification-coach-question:admin-104:f33b992564572d367875489153e5ca06eb38e83589394e93e91187a4890156a7 -->
## Question 104: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-104`

**Content revision:** `f33b992564572d367875489153e5ca06eb38e83589394e93e91187a4890156a7`

**en review revision:** `8f3c346da52cf0a59374793cb17a0da3c7ceaeab88c9b330e38c07bcb6788ad9`
**es review revision:** `7b922f70c17c1eb46c836034674eef310e692456f3161de66f78dfef857edd0c`
**pt-BR review revision:** `0eb795559b732e2dd8321eaec5826b2d2481c8536533f5431faba9308a3abf6e`

### English

Which repository capability supplies dependency inventory used by Dependabot alerts?

1. CodeQL database

   A CodeQL database represents source code for analysis.

2. Secret-scanning custom patterns

   Secret patterns identify credentials, not package inventory.

3. Dependency graph **[CORRECT]**

   Dependabot alerts use the dependency graph to identify vulnerable dependencies.

4. Repository security advisories

   Advisories describe vulnerabilities rather than inventorying this repository.

**Concept:** Dependency graph and vulnerability alerts

**Authored coaching hints:**

- Alerts need both an inventory and vulnerability information.
- Identify the repository's inventory component.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué capacidad de repositorio proporciona el inventario de dependencias que usan las alertas de Dependabot?

1. Base de datos de CodeQL

   Una base de CodeQL representa código fuente para análisis.

2. Patrones personalizados de secretos

   Los patrones de secretos identifican credenciales, no paquetes.

3. Grafo de dependencias **[CORRECT]**

   Las alertas usan el grafo para identificar dependencias vulnerables.

4. Avisos de seguridad del repositorio

   Los avisos describen vulnerabilidades, no generan el inventario de este repositorio.

**Concept:** Grafo de dependencias y alertas de vulnerabilidad

**Authored coaching hints:**

- Las alertas necesitan inventario e información de vulnerabilidades.
- Identifica el componente de inventario del repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual capacidade do repositório fornece o inventário de dependências usado pelos alertas do Dependabot?

1. Banco de dados do CodeQL

   Um banco do CodeQL representa código-fonte para análise.

2. Padrões personalizados de segredos

   Padrões de segredos identificam credenciais, não pacotes.

3. Grafo de dependências **[CORRECT]**

   Os alertas usam o grafo para identificar dependências vulneráveis.

4. Avisos de segurança do repositório

   Avisos descrevem vulnerabilidades, não geram o inventário deste repositório.

**Concept:** Grafo de dependências e alertas de vulnerabilidade

**Authored coaching hints:**

- Alertas precisam de inventário e informações de vulnerabilidades.
- Identifique o componente de inventário do repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts>

<!-- certification-coach-question:admin-105:51b11c33fcace4e444e2f849ebe37b6f44fdbff983f9b250fc53a9fdaaf71a03 -->
## Question 105: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-105`

**Content revision:** `51b11c33fcace4e444e2f849ebe37b6f44fdbff983f9b250fc53a9fdaaf71a03`

**en review revision:** `8ecea7c1b586db9255a66a9e8102781181a1e33dac794cf4971d9c8ef45d10c2`
**es review revision:** `6722e209c0d8a7ea54b342a88f7095bc5d6950f76178dbd47949f4cba129c53d`
**pt-BR review revision:** `d2f3eff9d3730413037a3ce2c79538738c56578c4556c82660c8443d11455f82`

### English

Which Dependabot feature opens pull requests to keep supported dependencies current even without a known vulnerability?

1. Dependabot version updates **[CORRECT]**

   Version updates propose routine dependency upgrades.

2. Dependabot security updates

   Security updates target vulnerable dependencies.

3. Dependency review

   Dependency review evaluates dependency changes in pull requests.

4. Dependabot alerts

   Alerts notify about known vulnerable dependencies.

**Concept:** Routine versus security dependency updates

**Authored coaching hints:**

- Separate freshness maintenance from vulnerability remediation.
- A notification is not an update pull request.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función de Dependabot abre solicitudes de incorporación para mantener dependencias compatibles actualizadas aunque no haya una vulnerabilidad conocida?

1. Actualizaciones de versión de Dependabot **[CORRECT]**

   Las actualizaciones de versión proponen mejoras periódicas de dependencias.

2. Actualizaciones de seguridad de Dependabot

   Las actualizaciones de seguridad se dirigen a dependencias vulnerables.

3. Revisión de dependencias

   La revisión evalúa cambios de dependencias en solicitudes de incorporación.

4. Alertas de Dependabot

   Las alertas notifican dependencias con vulnerabilidades conocidas.

**Concept:** Actualizaciones periódicas frente a actualizaciones de seguridad

**Authored coaching hints:**

- Distingue mantenimiento de versiones de corrección de vulnerabilidades.
- Una notificación no es una solicitud de actualización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso do Dependabot abre pull requests para manter dependências compatíveis atualizadas mesmo sem vulnerabilidade conhecida?

1. Atualizações de versão do Dependabot **[CORRECT]**

   Atualizações de versão propõem atualizações periódicas de dependências.

2. Atualizações de segurança do Dependabot

   Atualizações de segurança tratam dependências vulneráveis.

3. Revisão de dependências

   A revisão avalia mudanças de dependências em pull requests.

4. Alertas do Dependabot

   Alertas notificam dependências com vulnerabilidades conhecidas.

**Concept:** Atualizações periódicas versus atualizações de segurança

**Authored coaching hints:**

- Diferencie manutenção de versões de correção de vulnerabilidades.
- Uma notificação não é um pull request de atualização.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates>

<!-- certification-coach-question:admin-106:2a796a07ff4091f7bb5ddc9a30ec64ed0a0e2cd9059b1f91c9718afa9250de73 -->
## Question 106: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-106`

**Content revision:** `2a796a07ff4091f7bb5ddc9a30ec64ed0a0e2cd9059b1f91c9718afa9250de73`

**en review revision:** `ca047fd9618fb7c9193a8cd461b163518138edd6a5c65c85727d7cfc97e38aca`
**es review revision:** `97a90e2ee2bc6342efd39f5d76b3c18c34046f09ac6f3fe9dea0cecd204fa655`
**pt-BR review revision:** `46370d7b154acab9e34bdf72a215973d7788b7724c1f6de12590d6496c208d00`

### English

Which file defines package ecosystems, directories, and schedules for Dependabot version updates?

1. .github/SECURITY.md

   SECURITY.md describes vulnerability reporting and supported versions.

2. .github/CODEOWNERS

   CODEOWNERS defines code review responsibility.

3. .github/dependabot.yml **[CORRECT]**

   Dependabot reads version-update configuration from this file.

4. .github/workflows/codeql.yml

   A CodeQL workflow configures code analysis, not Dependabot schedules.

**Concept:** Dependabot configuration location

**Authored coaching hints:**

- Match the filename to the automation being configured.
- Security documentation differs from executable configuration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo define ecosistemas de paquetes, directorios y horarios de las actualizaciones de versión de Dependabot?

1. .github/SECURITY.md

   SECURITY.md describe cómo informar vulnerabilidades y las versiones compatibles.

2. .github/CODEOWNERS

   CODEOWNERS define responsables de revisión.

3. .github/dependabot.yml **[CORRECT]**

   Dependabot lee la configuración de actualizaciones de versión de este archivo.

4. .github/workflows/codeql.yml

   Un flujo de CodeQL configura análisis, no horarios de Dependabot.

**Concept:** Ubicación de la configuración de Dependabot

**Authored coaching hints:**

- Relaciona el archivo con la automatización que configura.
- La documentación de seguridad difiere de una configuración ejecutable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo define ecossistemas de pacotes, diretórios e agendamentos das atualizações de versão do Dependabot?

1. .github/SECURITY.md

   SECURITY.md descreve como relatar vulnerabilidades e versões com suporte.

2. .github/CODEOWNERS

   CODEOWNERS define responsáveis por revisão.

3. .github/dependabot.yml **[CORRECT]**

   Dependabot lê a configuração de atualizações de versão desse arquivo.

4. .github/workflows/codeql.yml

   Um workflow do CodeQL configura análises, não agendamentos do Dependabot.

**Concept:** Local da configuração do Dependabot

**Authored coaching hints:**

- Relacione o arquivo à automação que ele configura.
- Documentação de segurança difere de configuração executável.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates>

<!-- certification-coach-question:admin-107:8c92eed8dd1aa692c627ee2b48eac82f66ccb02936a769c90ac0c6b7cf76565b -->
## Question 107: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-107`

**Content revision:** `8c92eed8dd1aa692c627ee2b48eac82f66ccb02936a769c90ac0c6b7cf76565b`

**en review revision:** `9fa80c600fd79a2b567ac0feca2f36210e37e53d8867662e6afe209f68b4ec2a`
**es review revision:** `5bf33d01de19c49c304716cf68f46d918b5bd41c8e6c9ff4490a9c832da5c2ba`
**pt-BR review revision:** `aa83c50354b74884a0f0598807105533eb9fc9b47bc94316343a840689754e36`

### English

Dependabot needs a private registry credential. Which secret store should its registry configuration reference?

1. A Dependabot secret **[CORRECT]**

   Dependabot registry authentication uses Dependabot secrets.

2. An Actions secret only

   Actions secrets alone are not supplied to Dependabot update jobs.

3. A Codespaces secret only

   Codespaces secrets serve development environments, not update jobs.

4. A webhook secret

   Webhook secrets authenticate deliveries rather than package registry access.

**Concept:** Dependabot registry authentication

**Authored coaching hints:**

- Secrets belong to distinct consumers and stores.
- A credential's existence does not make it available to every feature.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dependabot necesita una credencial de registro privado. ¿A qué almacén de secretos debe hacer referencia su configuración de registro?

1. A un secreto de Dependabot **[CORRECT]**

   La autenticación de registros de Dependabot usa secretos de Dependabot.

2. Solo a un secreto de Actions

   Los secretos exclusivos de Actions no se proporcionan a las tareas de Dependabot.

3. Solo a un secreto de Codespaces

   Los secretos de Codespaces sirven a entornos de desarrollo, no a estas tareas.

4. A un secreto de webhook

   Los secretos de webhook autentican entregas, no acceso a registros de paquetes.

**Concept:** Autenticación de registros de Dependabot

**Authored coaching hints:**

- Los secretos pertenecen a consumidores y almacenes distintos.
- Una credencial existente no está disponible para todas las funciones.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dependabot precisa de uma credencial de registro privado. Qual armazenamento de segredos sua configuração de registro deve referenciar?

1. Um segredo do Dependabot **[CORRECT]**

   A autenticação de registros do Dependabot usa segredos do Dependabot.

2. Somente um segredo do Actions

   Segredos exclusivos do Actions não são fornecidos às tarefas do Dependabot.

3. Somente um segredo do Codespaces

   Segredos do Codespaces servem a ambientes de desenvolvimento, não a essas tarefas.

4. Um segredo de webhook

   Segredos de webhook autenticam entregas, não acesso a registros de pacotes.

**Concept:** Autenticação de registros do Dependabot

**Authored coaching hints:**

- Segredos pertencem a consumidores e armazenamentos distintos.
- Uma credencial existente não está disponível para todos os recursos.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot>

<!-- certification-coach-question:admin-108:b9887e2668b5d25797e19084e2a026b56fa6704a2bfb60e3b934b4c8ea4b6f50 -->
## Question 108: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-108`

**Content revision:** `b9887e2668b5d25797e19084e2a026b56fa6704a2bfb60e3b934b4c8ea4b6f50`

**en review revision:** `68a083f7477f8e844bd7f22be48fdeb371b3841d717ee7c0dabca54dd9448eb4`
**es review revision:** `861c4d859aae6d0afeabf9425dd117cfdb3c642c433ec70bf15ea145be1de50d`
**pt-BR review revision:** `56a39ff303ce4dca639f4284cda24d7e9486320183573ed16491c105513b3c63`

### English

Which feature shows dependencies added or removed by a pull request and flags known vulnerabilities in those changes?

1. CodeQL database creation

   CodeQL database creation prepares source-code analysis.

2. Secret-scanning alert review

   Secret review concerns credentials, not dependency diffs.

3. Dependency review **[CORRECT]**

   Dependency review exposes changed dependencies and associated vulnerability information.

4. Repository advisory publication

   Advisory publication discloses vulnerabilities rather than reviewing dependency changes.

**Concept:** Pull-request dependency risk

**Authored coaching hints:**

- Focus on changes introduced before merging.
- The relevant input is a dependency diff, not credential content.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función muestra dependencias añadidas o eliminadas por una solicitud de incorporación y señala vulnerabilidades conocidas en esos cambios?

1. Creación de una base de CodeQL

   Crear una base de CodeQL prepara el análisis del código.

2. Revisión de alertas de secretos

   La revisión de secretos trata credenciales, no diferencias de dependencias.

3. Revisión de dependencias **[CORRECT]**

   La revisión de dependencias muestra cambios e información de vulnerabilidades asociadas.

4. Publicación de avisos del repositorio

   Publicar avisos divulga vulnerabilidades, no revisa cambios de dependencias.

**Concept:** Riesgo de dependencias en solicitudes de incorporación

**Authored coaching hints:**

- Céntrate en los cambios introducidos antes de fusionar.
- La entrada pertinente es un diff de dependencias, no credenciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso mostra dependências adicionadas ou removidas por um pull request e sinaliza vulnerabilidades conhecidas nessas mudanças?

1. Criação de banco do CodeQL

   Criar um banco do CodeQL prepara a análise do código.

2. Revisão de alertas de segredos

   A revisão de segredos trata credenciais, não diferenças de dependências.

3. Revisão de dependências **[CORRECT]**

   A revisão de dependências mostra mudanças e informações de vulnerabilidades associadas.

4. Publicação de avisos do repositório

   Publicar avisos divulga vulnerabilidades, não revisa mudanças de dependências.

**Concept:** Risco de dependências em pull requests

**Authored coaching hints:**

- Concentre-se nas mudanças introduzidas antes do merge.
- A entrada relevante é um diff de dependências, não credenciais.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review>

<!-- certification-coach-question:admin-109:0c00069997203825d22cc4404a33b0191a354e5a80c2a7e8c2170124ec2d6676 -->
## Question 109: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-109`

**Content revision:** `0c00069997203825d22cc4404a33b0191a354e5a80c2a7e8c2170124ec2d6676`

**en review revision:** `671d0b5189456eae15eacded4d28b45c982d6aa2fa348cf0966b921cbf7e427c`
**es review revision:** `c96072b491488c77ac52b55b78407ebfce1d5c8c5319515ca0c0ce0113690e1e`
**pt-BR review revision:** `06b3019797d86cdc8488c37ec26f3f471acaad480595d422089991955863c6ed`

### English

A public repository maintainer must coordinate a vulnerability fix privately with invited researchers. Which feature supports that collaboration?

1. A public issue with a security label

   A public issue exposes the vulnerability before coordinated disclosure.

2. A Dependabot alert dismissal

   Alert dismissal does not create a private collaboration workspace.

3. A published release discussion

   A published discussion is not private coordination.

4. A draft repository security advisory **[CORRECT]**

   Draft advisories support private discussion and coordinated fixes.

**Concept:** Private vulnerability coordination

**Authored coaching hints:**

- Choose a disclosure workflow with restricted participants.
- A label does not change public visibility.

<details>
<summary>Español — same answer key and option order</summary>

### Español

El mantenedor de un repositorio público debe coordinar en privado una corrección de vulnerabilidad con investigadores invitados. ¿Qué función permite esa colaboración?

1. Una incidencia pública con etiqueta de seguridad

   Una incidencia pública expone la vulnerabilidad antes de su divulgación coordinada.

2. El descarte de una alerta de Dependabot

   Descartar alertas no crea un espacio privado de colaboración.

3. Una discusión de versión publicada

   Una discusión publicada no ofrece coordinación privada.

4. Un borrador de aviso de seguridad del repositorio **[CORRECT]**

   Los borradores de avisos permiten discusión privada y correcciones coordinadas.

**Concept:** Coordinación privada de vulnerabilidades

**Authored coaching hints:**

- Elige un flujo de divulgación con participantes restringidos.
- Una etiqueta no cambia la visibilidad pública.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O mantenedor de um repositório público precisa coordenar em privado uma correção de vulnerabilidade com pesquisadores convidados. Qual recurso permite essa colaboração?

1. Uma issue pública com etiqueta de segurança

   Uma issue pública expõe a vulnerabilidade antes da divulgação coordenada.

2. O descarte de um alerta do Dependabot

   Descartar alertas não cria um espaço privado de colaboração.

3. Uma discussão de versão publicada

   Uma discussão publicada não oferece coordenação privada.

4. Um rascunho de aviso de segurança do repositório **[CORRECT]**

   Rascunhos de avisos permitem discussão privada e correções coordenadas.

**Concept:** Coordenação privada de vulnerabilidades

**Authored coaching hints:**

- Escolha um fluxo de divulgação com participantes restritos.
- Uma etiqueta não altera a visibilidade pública.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories>

<!-- certification-coach-question:admin-110:3e50ce2125b372177345478afc594d8964f09431535bac10a3285e1b34d62f8c -->
## Question 110: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-110`

**Content revision:** `3e50ce2125b372177345478afc594d8964f09431535bac10a3285e1b34d62f8c`

**en review revision:** `2ebd4a42fe0fa086f62c3a8dba40161f110b0d6413f81712e04988df0a0e46af`
**es review revision:** `0282ab2469826653ded6041c91b0b41f7c091df33d5a7f8b6c3041e29d09a1fa`
**pt-BR review revision:** `e527cc886ef0b95b18e5466657e20ead6ca7bb544d7b84b037c414e95ced09b7`

### English

Which repository file documents supported versions and instructions for reporting vulnerabilities?

1. dependabot.yml

   dependabot.yml configures dependency update automation.

2. CODEOWNERS

   CODEOWNERS maps files to responsible reviewers.

3. SECURITY.md **[CORRECT]**

   SECURITY.md is the repository's security policy document.

4. CODE\_OF\_CONDUCT.md

   CODE\_OF\_CONDUCT.md defines community behavior standards.

**Concept:** Repository vulnerability reporting policy

**Authored coaching hints:**

- Identify guidance for researchers rather than automation settings.
- Community behavior and vulnerability reporting are different policies.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo del repositorio documenta versiones compatibles e instrucciones para informar vulnerabilidades?

1. dependabot.yml

   dependabot.yml configura actualizaciones automatizadas de dependencias.

2. CODEOWNERS

   CODEOWNERS asigna archivos a revisores responsables.

3. SECURITY.md **[CORRECT]**

   SECURITY.md es el documento de política de seguridad del repositorio.

4. CODE\_OF\_CONDUCT.md

   CODE\_OF\_CONDUCT.md define normas de conducta comunitaria.

**Concept:** Política de notificación de vulnerabilidades

**Authored coaching hints:**

- Identifica orientación para investigadores, no ajustes de automatización.
- La conducta comunitaria y la notificación de vulnerabilidades son políticas distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo do repositório documenta versões com suporte e instruções para relatar vulnerabilidades?

1. dependabot.yml

   dependabot.yml configura atualizações automatizadas de dependências.

2. CODEOWNERS

   CODEOWNERS associa arquivos aos revisores responsáveis.

3. SECURITY.md **[CORRECT]**

   SECURITY.md é o documento de política de segurança do repositório.

4. CODE\_OF\_CONDUCT.md

   CODE\_OF\_CONDUCT.md define normas de conduta da comunidade.

**Concept:** Política de relato de vulnerabilidades

**Authored coaching hints:**

- Identifique orientações para pesquisadores, não ajustes de automação.
- Conduta da comunidade e relato de vulnerabilidades são políticas distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository>

<!-- certification-coach-question:admin-111:389705b84bc71dead5a943a39326dddc39704c89e73e22db14f94a529a065729 -->
## Question 111: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-111`

**Content revision:** `389705b84bc71dead5a943a39326dddc39704c89e73e22db14f94a529a065729`

**en review revision:** `5e2348f33df0296cdacc9efa0fd34cf67ea6da34f0e675e77b035161e10051ec`
**es review revision:** `103bbe4eefcbf71c2e6a44dafec5de22a1c530ccf187a95f597ef899f26cbe94`
**pt-BR review revision:** `641ee113eded476d79f07989720142b8477ab721e3a00c1b9d64ae77ac217bde`

### English

Where can a public repository maintainer request a CVE identifier for a vulnerability without an existing CVE?

1. In a branch protection rule

   Branch protection does not allocate vulnerability identifiers.

2. In a repository security advisory **[CORRECT]**

   GitHub can assign a CVE through the advisory workflow.

3. In a Dependabot configuration file

   Dependabot configuration controls updates rather than CVE assignment.

4. In an organization audit-log search

   Audit searches retrieve events, not vulnerability identifiers.

**Concept:** CVE assignment through GitHub

**Authored coaching hints:**

- Consider how vulnerability disclosure is coordinated.
- An identifier request is not a repository access policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde puede el mantenedor de un repositorio público solicitar un identificador CVE para una vulnerabilidad que aún no tiene uno?

1. En una regla de protección de rama

   La protección de ramas no asigna identificadores de vulnerabilidad.

2. En un aviso de seguridad del repositorio **[CORRECT]**

   GitHub puede asignar un CVE mediante el flujo de avisos.

3. En un archivo de configuración de Dependabot

   La configuración de Dependabot controla actualizaciones, no asignaciones CVE.

4. En una búsqueda del registro de auditoría

   Las búsquedas de auditoría recuperan eventos, no identificadores de vulnerabilidad.

**Concept:** Asignación de CVE mediante GitHub

**Authored coaching hints:**

- Considera cómo se coordina la divulgación de vulnerabilidades.
- Solicitar un identificador no es una política de acceso al repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde o mantenedor de um repositório público pode solicitar um identificador CVE para uma vulnerabilidade que ainda não tem um?

1. Em uma regra de proteção de branch

   A proteção de branches não atribui identificadores de vulnerabilidade.

2. Em um aviso de segurança do repositório **[CORRECT]**

   GitHub pode atribuir um CVE pelo fluxo de avisos.

3. Em um arquivo de configuração do Dependabot

   A configuração do Dependabot controla atualizações, não atribuições de CVE.

4. Em uma pesquisa do log de auditoria

   Pesquisas de auditoria recuperam eventos, não identificadores de vulnerabilidade.

**Concept:** Atribuição de CVE pelo GitHub

**Authored coaching hints:**

- Considere como a divulgação de vulnerabilidades é coordenada.
- Solicitar um identificador não é uma política de acesso ao repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories>

<!-- certification-coach-question:admin-112:7756a386d78acd112f03a60f4383393b2fd77596da15f65b48cc214b244e1d6b -->
## Question 112: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-112`

**Content revision:** `7756a386d78acd112f03a60f4383393b2fd77596da15f65b48cc214b244e1d6b`

**en review revision:** `d4fb4d2724d3e171dab0e0af65f0b3b218c72fbf672064204fc23e2bab1c6220`
**es review revision:** `fe2b40b51a9bc6f1cfcf6ea8aeae6cd3e66202cad5a164b91fc379775183fcc7`
**pt-BR review revision:** `65f44b499085aade19ecbf20f635663757bb062f7089ae7cfe0a35d308f5de84`

### English

Which information most directly helps prioritize Dependabot alerts by security risk?

1. Alert age and package popularity

   Age and popularity do not establish exploitability or impact.

2. Package release date and update frequency

   Release timing alone does not measure vulnerability exposure.

3. Severity, exploitability, and use **[CORRECT]**

   These signals connect vulnerability impact with actual use.

4. Maintainer activity and repository popularity

   Maintenance and popularity alone do not measure this application's exposure.

**Concept:** Risk-based dependency triage

**Authored coaching hints:**

- Separate display metadata from evidence of exposure.
- Impact alone may not describe the affected code's use.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué información ayuda más directamente a priorizar alertas de Dependabot según el riesgo de seguridad?

1. Antigüedad de alerta y popularidad del paquete

   La antigüedad y popularidad no establecen posibilidad de explotación ni impacto.

2. Fecha de publicación y frecuencia de actualización

   Las fechas de publicación no miden por sí solas la exposición.

3. Gravedad, posibilidad de explotación y uso **[CORRECT]**

   Estas señales relacionan el impacto con el uso real.

4. Actividad del mantenedor y popularidad del repositorio

   El mantenimiento y popularidad no miden por sí solos la exposición de esta aplicación.

**Concept:** Clasificación de dependencias basada en riesgo

**Authored coaching hints:**

- Distingue metadatos de presentación de evidencias de exposición.
- El impacto por sí solo no describe el uso del código afectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais informações ajudam mais diretamente a priorizar alertas do Dependabot pelo risco de segurança?

1. Idade do alerta e popularidade do pacote

   Idade e popularidade não estabelecem possibilidade de exploração ou impacto.

2. Data de lançamento e frequência de atualização

   Datas de lançamento sozinhas não medem a exposição.

3. Severidade, possibilidade de exploração e uso **[CORRECT]**

   Esses sinais relacionam o impacto ao uso real.

4. Atividade do mantenedor e popularidade do repositório

   Manutenção e popularidade sozinhas não medem a exposição desta aplicação.

**Concept:** Triagem de dependências baseada em risco

**Authored coaching hints:**

- Diferencie metadados de apresentação de evidências de exposição.
- O impacto isolado não descreve o uso do código afetado.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts>

<!-- certification-coach-question:admin-113:918435d75ea90b9442c778f81dee8f02b84c2d2e88bc4e155b0bf8178fedd864 -->
## Question 113: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-113`

**Content revision:** `918435d75ea90b9442c778f81dee8f02b84c2d2e88bc4e155b0bf8178fedd864`

**en review revision:** `3454aad91675c5d95fb3e32f190c545347dd64ffcc750bb5445f6af28ab26631`
**es review revision:** `d8dad4a7f68782ffccb6417345bc2ea0967dfbbf8c8bbfbc72fbc442896d9631`
**pt-BR review revision:** `30454c4d560c1ba37505bf7929533bdaac050c42c43a9b5511496aa469bd5edb`

### English

A team dismisses a Dependabot alert because the vulnerable code is not used. Which record best supports later reassessment?

1. The alert URL without a dismissal rationale

   An alert link locates the finding but does not explain acceptance.

2. A fixed version without applicability evidence

   A fixed version identifies a remedy, not why it was deferred.

3. The package version without a dismissal reason

   A package version alone does not explain the decision.

4. The dismissal reason with usage evidence **[CORRECT]**

   A reason and evidence preserve the basis for reassessment.

**Concept:** Traceable dependency risk acceptance

**Authored coaching hints:**

- Future reviewers need to understand the applicability decision.
- Record why the affected functionality is not exposed.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo descarta una alerta de Dependabot porque no usa el código vulnerable. ¿Qué registro facilita mejor una reevaluación posterior?

1. La URL de alerta sin justificación del descarte

   Un enlace localiza el hallazgo, pero no explica su aceptación.

2. Una versión corregida sin evidencias de aplicabilidad

   Una versión corregida identifica la solución, no por qué se aplazó.

3. La versión del paquete sin motivo de descarte

   La versión del paquete no explica por sí sola la decisión.

4. El motivo de descarte con evidencias de uso **[CORRECT]**

   Un motivo y evidencias conservan la base para reevaluar.

**Concept:** Aceptación trazable del riesgo de dependencias

**Authored coaching hints:**

- Los futuros revisores necesitan entender la decisión de aplicabilidad.
- Registra por qué no se expone la funcionalidad afectada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe descarta um alerta do Dependabot porque não usa o código vulnerável. Qual registro melhor apoia uma reavaliação futura?

1. A URL do alerta sem justificativa do descarte

   Um link localiza o achado, mas não explica sua aceitação.

2. Uma versão corrigida sem evidências de aplicabilidade

   Uma versão corrigida identifica a solução, não por que foi adiada.

3. A versão do pacote sem motivo de descarte

   A versão do pacote sozinha não explica a decisão.

4. O motivo do descarte com evidências de uso **[CORRECT]**

   Um motivo e evidências preservam a base para reavaliação.

**Concept:** Aceitação rastreável de risco de dependências

**Authored coaching hints:**

- Futuros revisores precisam entender a decisão de aplicabilidade.
- Registre por que a funcionalidade afetada não está exposta.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts>

<!-- certification-coach-question:admin-114:1e5e70b888af31ed9a03ab14dedb93ffd464037404f2a5becc80952b16cfb29f -->
## Question 114: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-114`

**Content revision:** `1e5e70b888af31ed9a03ab14dedb93ffd464037404f2a5becc80952b16cfb29f`

**en review revision:** `49f80bab9a212bfe86d9e23913c461cc0bd563fcca5c9807718e6929303c9e5a`
**es review revision:** `c6a8e2dea085da1192fd4f66609d0720af161bc15e3c6648601c46b244d0cb42`
**pt-BR review revision:** `01c24b3874743a4ecc84511c85b48fc484696c0d7bbacb94e78093f868d4eacb`

### English

Which responsibilities should an enterprise security response plan assign to its own team rather than assume GitHub Support will perform?

1. Placing GitHub audit data on an indefinite legal hold

   GitHub Support does not place audit data on investigation holds.

2. Repairing GitHub's underlying hosted infrastructure

   GitHub's hosted infrastructure is outside customer administration.

3. Changing GitHub's native audit retention for one incident

   A support ticket does not extend native audit retention.

4. Containment, evidence collection, and incident investigation **[CORRECT]**

   The organization owns incident response and preservation of its evidence.

**Concept:** Security incident response ownership

**Authored coaching hints:**

- Distinguish assistance with product features from running the investigation.
- Plan evidence preservation before records expire.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué responsabilidades debe asignar un plan de respuesta de seguridad al equipo de la empresa, en vez de asumir que GitHub Support las realizará?

1. Conservación legal indefinida de datos de auditoría en GitHub

   GitHub Support no impone retenciones de datos de auditoría por investigación.

2. Reparación de la infraestructura alojada subyacente de GitHub

   La infraestructura alojada de GitHub está fuera de la administración del cliente.

3. Cambio de la retención nativa para un incidente

   Un ticket no amplía la retención nativa de auditoría.

4. Contención, recopilación de evidencias e investigación del incidente **[CORRECT]**

   La organización es responsable de responder y conservar sus evidencias.

**Concept:** Responsabilidad en respuesta a incidentes

**Authored coaching hints:**

- Distingue asistencia sobre funciones de realizar la investigación.
- Planifica la conservación de evidencias antes de que caduquen.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais responsabilidades um plano de resposta de segurança deve atribuir à equipe da enterprise, em vez de presumir que o GitHub Support as realizará?

1. Retenção legal indefinida dos dados de auditoria no GitHub

   GitHub Support não impõe retenções de dados de auditoria para investigações.

2. Reparo da infraestrutura hospedada subjacente do GitHub

   A infraestrutura hospedada do GitHub está fora da administração do cliente.

3. Alteração da retenção nativa para um incidente

   Um chamado não amplia a retenção nativa de auditoria.

4. Contenção, coleta de evidências e investigação do incidente **[CORRECT]**

   A organização é responsável pela resposta e preservação de suas evidências.

**Concept:** Responsabilidade na resposta a incidentes

**Authored coaching hints:**

- Diferencie assistência sobre recursos de conduzir a investigação.
- Planeje a preservação de evidências antes de expirarem.

</details>

**Official supporting source:** <https://docs.github.com/en/support/learning-about-github-support/understanding-how-github-support-can-help-during-a-security-incident>

<!-- certification-coach-question:admin-115:4c6d7a7bdacd110d00082f32bbaf4769c39e88cf9180fed0135caca606bab600 -->
## Question 115: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-115`

**Content revision:** `4c6d7a7bdacd110d00082f32bbaf4769c39e88cf9180fed0135caca606bab600`

**en review revision:** `b4f647df3896f13a0dca8ef2abbc86e5fc4dd91406e494d74cd46797db7dff82`
**es review revision:** `77533c0dd4e6f973628ba9b91bc471eec04053f551ce97c054e1e07b31588907`
**pt-BR review revision:** `a2f00b17bb141740691a41525078a5c50d47912dd22878dd5c86f19b8f75ea68`

### English

A supported REST operation only reads issues in two organization repositories. Which fine-grained PAT permission best fits?

1. Contents: write

   Contents write access is unrelated and overprivileged.

2. Members: read

   Organization member access does not authorize reading repository issues.

3. Administration: write

   Repository administration write access exceeds the task.

4. Issues: read **[CORRECT]**

   Read-only issue access matches the operation; select only the two repositories.

**Concept:** Fine-grained PAT least privilege

**Authored coaching hints:**

- Match the resource permission to the endpoint's operation.
- Repository selection and permission level both limit access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una operación REST compatible solo lee incidencias de dos repositorios de organización. ¿Qué permiso de PAT detallado encaja mejor?

1. Contents: write

   La escritura de contenido no está relacionada y concede permisos excesivos.

2. Members: read

   Leer miembros de organización no autoriza leer incidencias del repositorio.

3. Administration: write

   La escritura de administración excede la tarea.

4. Issues: read **[CORRECT]**

   La lectura de incidencias encaja; selecciona solo los dos repositorios.

**Concept:** Mínimo privilegio de PAT detallados

**Authored coaching hints:**

- Relaciona el permiso de recurso con la operación del endpoint.
- La selección de repositorios y el nivel de permiso limitan el acceso.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma operação REST compatível apenas lê issues em dois repositórios da organização. Qual permissão de PAT refinado é mais adequada?

1. Contents: write

   A escrita de conteúdo não está relacionada e concede privilégios excessivos.

2. Members: read

   Ler membros da organização não autoriza ler issues do repositório.

3. Administration: write

   A escrita de administração excede a tarefa.

4. Issues: read **[CORRECT]**

   A leitura de issues corresponde à operação; selecione apenas os dois repositórios.

**Concept:** Privilégio mínimo de PATs refinados

**Authored coaching hints:**

- Relacione a permissão de recurso à operação do endpoint.
- A seleção de repositórios e o nível de permissão limitam o acesso.

</details>

**Official supporting source:** <https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens>

<!-- certification-coach-question:admin-116:c4988fdd939ae6d1ceda42b1d1f861f9de98a1d20497806d0bc9f1aa5614b79f -->
## Question 116: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-116`

**Content revision:** `c4988fdd939ae6d1ceda42b1d1f861f9de98a1d20497806d0bc9f1aa5614b79f`

**en review revision:** `f503f5e56f8d5d527954a469a99610283b0f9a0fc5a5b79b4720403bd24d52cd`
**es review revision:** `e40ae7b753034fa538aea07ea016ace55f0bc622dbc9f32330e92f1dbce755ce`
**pt-BR review revision:** `178c0f5ceaa401de687220d2726bdf4b8efd7e5b1da2599e05c1cec9a0a06e3d`

### English

An organization requires approval of fine-grained PATs. Who can approve a member's pending token request?

1. An organization owner **[CORRECT]**

   Organization owners review and approve pending token requests.

2. Any repository contributor

   Contribution rights do not grant organization token approval.

3. Any member of the organization

   Ordinary membership does not confer token approval authority.

4. The token creator acting alone

   Creating a token does not bypass the organization's approval requirement.

**Concept:** Fine-grained PAT approval authority

**Authored coaching hints:**

- Separate requesting access from authorizing it.
- The policy is enforced at organization scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización exige aprobar los PAT detallados. ¿Quién puede aprobar la solicitud pendiente de un miembro?

1. Un propietario de la organización **[CORRECT]**

   Los propietarios revisan y aprueban solicitudes pendientes.

2. Cualquier colaborador del repositorio

   Los derechos de contribución no conceden aprobación de tokens de organización.

3. Cualquier miembro de la organización

   Ser miembro no concede autoridad de aprobación de tokens.

4. El creador del token por sí solo

   Crear un token no evita el requisito de aprobación.

**Concept:** Autoridad de aprobación de PAT detallados

**Authored coaching hints:**

- Distingue solicitar acceso de autorizarlo.
- La política se aplica en el ámbito de organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização exige aprovação de PATs refinados. Quem pode aprovar a solicitação pendente de um membro?

1. Um proprietário da organização **[CORRECT]**

   Proprietários revisam e aprovam solicitações pendentes.

2. Qualquer colaborador do repositório

   Direitos de contribuição não concedem aprovação de tokens da organização.

3. Qualquer membro da organização

   Ser membro não concede autoridade de aprovação de tokens.

4. O criador do token por conta própria

   Criar um token não evita o requisito de aprovação.

**Concept:** Autoridade de aprovação de PATs refinados

**Authored coaching hints:**

- Diferencie solicitar acesso de autorizá-lo.
- A política é aplicada no escopo da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization>

<!-- certification-coach-question:admin-117:3f0c5b2b1544ae1691426999aaad86030e54b55d675cab2114540bd81cc7f218 -->
## Question 117: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-117`

**Content revision:** `3f0c5b2b1544ae1691426999aaad86030e54b55d675cab2114540bd81cc7f218`

**en review revision:** `b10ef02a72a0ac12aa63486aa23f00d7e33b12c70587077ddb4a1e8f52da089f`
**es review revision:** `f587ceb4927c5d15de055773204eba09bb8953ca454567670196d305578d3379`
**pt-BR review revision:** `de760c1e4ba2e6371cbebdae71f468775186bd7151ae84ff632d2fc973d934bc`

### English

Which organization policy limits how long eligible personal access tokens may remain usable for its resources?

1. Repository archive policy

   Archiving controls repository activity, not token age.

2. OAuth App approval policy

   OAuth approval governs applications, not PAT lifetime.

3. SAML session policy

   SAML session duration is not a PAT expiration policy.

4. Personal access token maximum lifetime policy **[CORRECT]**

   Maximum lifetime policies govern PAT lifetimes for organization access.

**Concept:** Token expiration governance

**Authored coaching hints:**

- Match the control to credential lifetime rather than browser sessions.
- Approval and expiration solve different governance problems.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué política de organización limita cuánto tiempo pueden seguir usándose los tokens de acceso personal aplicables para sus recursos?

1. Política de archivado de repositorios

   Archivar controla la actividad del repositorio, no la edad del token.

2. Política de aprobación de OAuth Apps

   La aprobación OAuth regula aplicaciones, no la duración de PAT.

3. Política de sesiones SAML

   La duración de sesiones SAML no es una política de caducidad de PAT.

4. Política de duración máxima de tokens de acceso personal **[CORRECT]**

   Las políticas de duración máxima regulan la vigencia de PAT para acceder a la organización.

**Concept:** Gobierno de la caducidad de tokens

**Authored coaching hints:**

- Relaciona el control con la duración de credenciales, no sesiones del navegador.
- Aprobación y caducidad resuelven problemas de gobierno distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual política da organização limita por quanto tempo tokens de acesso pessoal aplicáveis podem continuar sendo usados em seus recursos?

1. Política de arquivamento de repositórios

   Arquivar controla a atividade do repositório, não a idade do token.

2. Política de aprovação de OAuth Apps

   A aprovação OAuth regula aplicativos, não a duração dos PATs.

3. Política de sessões SAML

   A duração de sessões SAML não é uma política de expiração de PAT.

4. Política de duração máxima de tokens de acesso pessoal **[CORRECT]**

   Políticas de duração máxima regulam a validade dos PATs para acessar a organização.

**Concept:** Governança da expiração de tokens

**Authored coaching hints:**

- Relacione o controle à duração das credenciais, não a sessões do navegador.
- Aprovação e expiração resolvem problemas distintos de governança.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization>

<!-- certification-coach-question:admin-118:acad684919ea4ffd7621ece2e7946b2fb1b1f89bd4057976dedb7081cdc6716a -->
## Question 118: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-118`

**Content revision:** `acad684919ea4ffd7621ece2e7946b2fb1b1f89bd4057976dedb7081cdc6716a`

**en review revision:** `8d85efd382237ff3944222862626485f4e70a549b93e7b0a889c785a4016ddff`
**es review revision:** `631ce5f8f6672cd6da5587c0bb97c18cb063ef2f2a2d844d7f0c30bd636cd934`
**pt-BR review revision:** `cb07c3f314a4d633cabfc95f3fac2fee5ec7a2e73a4fe665c6c07dab54473310`

### English

In the English organization UI, an owner opens Settings &gt; Personal access tokens &gt; Active tokens. Which action removes one fine-grained PAT's access without removing its user?

1. Remove the user from all teams

   Team removal changes the user's legitimate access more broadly.

2. Revoke that token's organization access **[CORRECT]**

   Revocation targets the selected token's access to organization resources.

3. Delete every OAuth App authorization

   OAuth authorizations are separate from this PAT.

4. Archive the affected repositories

   Archiving changes repository behavior, not token authorization.

**Concept:** Targeted organization token revocation

**Authored coaching hints:**

- Choose a control on the compromised credential, not the person's membership.
- Different credential types have separate authorizations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la interfaz de organización en inglés, un propietario abre Settings &gt; Personal access tokens &gt; Active tokens. ¿Qué acción elimina el acceso de un PAT detallado sin eliminar al usuario?

1. Eliminar al usuario de todos los equipos

   Eliminar equipos modifica más ampliamente el acceso legítimo del usuario.

2. Revocar el acceso de ese token a la organización **[CORRECT]**

   La revocación afecta al acceso del token seleccionado a recursos de organización.

3. Eliminar todas las autorizaciones de OAuth Apps

   Las autorizaciones OAuth son distintas de este PAT.

4. Archivar los repositorios afectados

   Archivar cambia el comportamiento del repositorio, no la autorización del token.

**Concept:** Revocación específica de tokens de organización

**Authored coaching hints:**

- Elige un control sobre la credencial comprometida, no la pertenencia personal.
- Los tipos de credencial tienen autorizaciones separadas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na interface da organização em inglês, um proprietário abre Settings &gt; Personal access tokens &gt; Active tokens. Qual ação remove o acesso de um PAT refinado sem remover o usuário?

1. Remover o usuário de todas as equipes

   Remover equipes altera de forma mais ampla o acesso legítimo do usuário.

2. Revogar o acesso desse token à organização **[CORRECT]**

   A revogação afeta o acesso do token selecionado aos recursos da organização.

3. Excluir todas as autorizações de OAuth Apps

   Autorizações OAuth são distintas desse PAT.

4. Arquivar os repositórios afetados

   Arquivar altera o comportamento do repositório, não a autorização do token.

**Concept:** Revogação específica de tokens da organização

**Authored coaching hints:**

- Escolha um controle sobre a credencial comprometida, não a associação pessoal.
- Tipos de credencial têm autorizações separadas.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization>

<!-- certification-coach-question:admin-119:d663d4d4cf78c5cff60d23d3204d0f19d736da05fee273b51691c448262029fa -->
## Question 119: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-119`

**Content revision:** `d663d4d4cf78c5cff60d23d3204d0f19d736da05fee273b51691c448262029fa`

**en review revision:** `b8396d96df2a4fc529ca1db757e5e2898f2522d23fc6e25c803fd0c8e97ea58f`
**es review revision:** `41fcdf7108f96eaaba3a56ca131202e34c98b745e53b436fec4bde17a951c1f1`
**pt-BR review revision:** `92f03e014626b91400c0b717434f99d697c85d2b3ef34f41e069e1cbd4d07b66`

### English

Which authentication design avoids tying unattended repository automation to an employee's continued membership?

1. The employee's classic PAT

   A classic PAT depends on its user's access.

2. The employee's OAuth access token

   An OAuth user token remains tied to that user.

3. A GitHub App installation token **[CORRECT]**

   Installation authentication acts as the installed app, not the employee.

4. The employee's fine-grained PAT

   A fine-grained PAT still depends on its user's access.

**Concept:** Service identity for long-lived integrations

**Authored coaching hints:**

- Permission granularity does not remove a credential's user dependency.
- Identify whether the actor is a person or an installation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué diseño de autenticación evita vincular una automatización desatendida de repositorio a la permanencia de un empleado?

1. El PAT clásico del empleado

   Un PAT clásico depende del acceso de su usuario.

2. El token de acceso OAuth del empleado

   Un token OAuth de usuario sigue vinculado a esa persona.

3. Un token de instalación de GitHub App **[CORRECT]**

   La autenticación de instalación actúa como aplicación instalada, no como empleado.

4. El PAT detallado del empleado

   Un PAT detallado también depende del acceso de su usuario.

**Concept:** Identidad de servicio para integraciones duraderas

**Authored coaching hints:**

- La granularidad no elimina la dependencia de un usuario.
- Identifica si el actor es una persona o una instalación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual projeto de autenticação evita vincular a automação não assistida de repositório à permanência de um funcionário?

1. O PAT clássico do funcionário

   Um PAT clássico depende do acesso de seu usuário.

2. O token de acesso OAuth do funcionário

   Um token OAuth de usuário continua vinculado à pessoa.

3. Um token de instalação de GitHub App **[CORRECT]**

   A autenticação de instalação atua como aplicativo instalado, não como funcionário.

4. O PAT refinado do funcionário

   Um PAT refinado também depende do acesso de seu usuário.

**Concept:** Identidade de serviço para integrações duradouras

**Authored coaching hints:**

- A granularidade não elimina a dependência de um usuário.
- Identifique se o ator é uma pessoa ou uma instalação.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app>

<!-- certification-coach-question:admin-120:37d5c2f09f2b772fd14e0e64c96563ec796d2574e7f1e7a856c8c51037cf8d27 -->
## Question 120: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-120`

**Content revision:** `37d5c2f09f2b772fd14e0e64c96563ec796d2574e7f1e7a856c8c51037cf8d27`

**en review revision:** `2e8ad1784c23f280c1226483a14c7f2239ad3f646a52c3e2d5c4e80164d568d4`
**es review revision:** `d99617b4f83cc7114d816f146ba9222f3f3a4001ab37e94693fb83d0a5e05d46`
**pt-BR review revision:** `05b30d894df26b31be43e8a5b0dbb288667250c74d13b601f5ce0c724cfc4587`

### English

A member has a linked SAML identity and a classic PAT with suitable scopes. Organization policy permits the token, but it lacks SSO authorization. What is required?

1. Authorize the token for that organization **[CORRECT]**

   Classic PATs need authorization for the SSO organization.

2. Disable the organization's SAML SSO

   Disabling SSO weakens policy and is not required.

3. Regenerate the token with every scope

   Additional scopes do not replace SSO authorization.

4. Convert the repository to internal visibility

   Changing visibility does not supply the missing authorization.

**Concept:** Classic PAT SSO authorization

**Authored coaching hints:**

- Separate scopes from the organization's identity authorization.
- A usable token can still lack access to an SSO-protected organization.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un miembro tiene identidad SAML vinculada y un PAT clásico con ámbitos adecuados. La política permite el token, pero carece de autorización SSO. ¿Qué se necesita?

1. Autorizar el token para esa organización **[CORRECT]**

   Los PAT clásicos necesitan autorización para la organización con SSO.

2. Desactivar SAML SSO en la organización

   Desactivar SSO debilita la política y no es necesario.

3. Regenerar el token con todos los ámbitos

   Más ámbitos no sustituyen la autorización SSO.

4. Cambiar el repositorio a visibilidad interna

   Cambiar la visibilidad no aporta la autorización faltante.

**Concept:** Autorización SSO de PAT clásicos

**Authored coaching hints:**

- Distingue los ámbitos de la autorización de identidad de la organización.
- Un token utilizable aún puede carecer de acceso a una organización con SSO.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um membro tem identidade SAML vinculada e um PAT clássico com escopos adequados. A política permite o token, mas falta autorização de SSO. O que é necessário?

1. Autorizar o token para essa organização **[CORRECT]**

   PATs clássicos precisam de autorização para a organização com SSO.

2. Desativar SAML SSO na organização

   Desativar SSO enfraquece a política e não é necessário.

3. Regenerar o token com todos os escopos

   Mais escopos não substituem a autorização de SSO.

4. Alterar o repositório para visibilidade interna

   Alterar a visibilidade não fornece a autorização ausente.

**Concept:** Autorização de SSO de PATs clássicos

**Authored coaching hints:**

- Diferencie os escopos da autorização de identidade da organização.
- Um token utilizável ainda pode não acessar uma organização com SSO.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on>

<!-- certification-coach-question:admin-121:c6a25becbd39201bf417f5e58975078e816950d5f9b7d862c5460be17948dce2 -->
## Question 121: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-121`

**Content revision:** `c6a25becbd39201bf417f5e58975078e816950d5f9b7d862c5460be17948dce2`

**en review revision:** `20bcfb9525c58428bf9042a38ae6b0ce18c71ca0ec8b7feaab7b07d588d7dea9`
**es review revision:** `ef6b45fdc077fc5cda2fc7d8bfeebcb410cb967817e4123132ec47742ec3c4f7`
**pt-BR review revision:** `35075f8cfa0570e15db5f66f3e17d6ef81150013b841b1fdf7ede9a677b3c1ab`

### English

Which GitHub App property supports an integration that only needs read-only contents access to selected repositories?

1. Classic repo scope across the user's repositories

   Classic repo scope is broader and belongs to OAuth-style scope authorization.

2. Fine-grained permissions and repository selection **[CORRECT]**

   GitHub Apps support selected repositories and specific permission levels.

3. Write access to every installed organization's repository

   Installation does not imply write access to every repository.

4. Organization owner access inherited from its creator

   An app does not inherit organization ownership from its creator.

**Concept:** GitHub App least-privilege installation

**Authored coaching hints:**

- Compare resource selection with broad user scopes.
- Installation and permission level are separate access boundaries.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué propiedad de GitHub Apps sirve para una integración que solo necesita leer contenido de repositorios seleccionados?

1. Ámbito clásico repo sobre repositorios del usuario

   El ámbito clásico repo es más amplio y corresponde a autorizaciones por ámbitos.

2. Permisos detallados y selección de repositorios **[CORRECT]**

   GitHub Apps admite repositorios seleccionados y niveles de permiso específicos.

3. Escritura en todos los repositorios de la organización instalada

   La instalación no implica escritura en todos los repositorios.

4. Acceso de propietario heredado de su creador

   Una aplicación no hereda la propiedad de organización de su creador.

**Concept:** Instalación de GitHub App con mínimo privilegio

**Authored coaching hints:**

- Compara selección de recursos con ámbitos amplios de usuario.
- La instalación y el nivel de permiso son límites de acceso separados.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual propriedade de GitHub Apps atende uma integração que só precisa ler conteúdo de repositórios selecionados?

1. Escopo clássico repo nos repositórios do usuário

   O escopo clássico repo é mais amplo e pertence à autorização por escopos.

2. Permissões refinadas e seleção de repositórios **[CORRECT]**

   GitHub Apps oferece repositórios selecionados e níveis específicos de permissão.

3. Escrita em todos os repositórios da organização instalada

   A instalação não implica escrita em todos os repositórios.

4. Acesso de proprietário herdado de seu criador

   Um aplicativo não herda a propriedade da organização de seu criador.

**Concept:** Instalação de GitHub App com privilégio mínimo

**Authored coaching hints:**

- Compare seleção de recursos com escopos amplos de usuário.
- A instalação e o nível de permissão são limites de acesso separados.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app>

<!-- certification-coach-question:admin-122:0ee15337740a92271cf8914c1ef89c7927370cdddca6955e8e9779b77a698b19 -->
## Question 122: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-122`

**Content revision:** `0ee15337740a92271cf8914c1ef89c7927370cdddca6955e8e9779b77a698b19`

**en review revision:** `094daa99f996240ad0f5c78c3381b5a23e00984610f4187f41114eadcbd33a57`
**es review revision:** `f7bb7095827d2c14d7595b3a6b70070fa1e8adeb63f98e59789e77f0c00f971c`
**pt-BR review revision:** `a3824fde20729f1800d47e0207aee40af2ecfc38b82af3fdda5a8a59fac1e07f`

### English

An OAuth App says it only reads private source code but requests repo scope. What capability does that scope actually include?

1. Read and write access to public and private repositories **[CORRECT]**

   The broad repo scope includes write capabilities, subject to user access.

2. Read-only access to the selected private repository

   repo is not a fine-grained read-only repository grant.

3. Only access to public repository metadata

   repo extends beyond public metadata.

4. Only access to repository security advisories

   repo is not limited to security advisories.

**Concept:** OAuth scope review

**Authored coaching hints:**

- Evaluate the requested scope, not the vendor's description.
- A user-scoped grant is not the same as a selected-repository permission.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una OAuth App dice que solo lee código privado, pero solicita el ámbito repo. ¿Qué capacidad incluye realmente ese ámbito?

1. Lectura y escritura en repositorios públicos y privados **[CORRECT]**

   El ámbito amplio repo incluye escritura, según el acceso del usuario.

2. Solo lectura en el repositorio privado seleccionado

   repo no es un permiso detallado de solo lectura para un repositorio.

3. Solo acceso a metadatos de repositorios públicos

   repo va más allá de metadatos públicos.

4. Solo acceso a avisos de seguridad del repositorio

   repo no se limita a avisos de seguridad.

**Concept:** Revisión de ámbitos OAuth

**Authored coaching hints:**

- Evalúa el ámbito solicitado, no la descripción del proveedor.
- Una concesión de usuario no equivale a un permiso por repositorio seleccionado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma OAuth App diz que só lê código privado, mas solicita o escopo repo. Qual capacidade esse escopo realmente inclui?

1. Leitura e escrita em repositórios públicos e privados **[CORRECT]**

   O escopo amplo repo inclui escrita, conforme o acesso do usuário.

2. Somente leitura no repositório privado selecionado

   repo não é uma permissão refinada de leitura para um repositório.

3. Somente acesso a metadados de repositórios públicos

   repo vai além de metadados públicos.

4. Somente acesso a avisos de segurança do repositório

   repo não se limita a avisos de segurança.

**Concept:** Revisão de escopos OAuth

**Authored coaching hints:**

- Avalie o escopo solicitado, não a descrição do fornecedor.
- Uma concessão de usuário não equivale a uma permissão por repositório selecionado.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps>

<!-- certification-coach-question:admin-123:c8a22105fce70bcdf59844bdc87cfb34828a1a7a25e01b2c57250ae532a9d067 -->
## Question 123: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-123`

**Content revision:** `c8a22105fce70bcdf59844bdc87cfb34828a1a7a25e01b2c57250ae532a9d067`

**en review revision:** `85ac1c9738a121e10d980b97150f35c0abd95452244a4cbdc6eaa6e7363d2d6a`
**es review revision:** `784daa39565a8f98b41ef1388bfc6ed6a3dce37ce9dffb95c5490d34519c8412`
**pt-BR review revision:** `b19223e4cec9249f1a0fe5cba73c206392097fe8401c056337d19a1b455d3bcc`

### English

Which credential authenticates REST requests as a GitHub App installation after the app exchanges its JWT?

1. The app's webhook secret

   A webhook secret validates deliveries, not installation API calls.

2. The app's public key

   A public key cannot authorize installation API operations.

3. An OAuth client identifier

   A client identifier alone does not authenticate these requests.

4. An installation access token **[CORRECT]**

   The exchanged installation token authorizes installation-level API operations.

**Concept:** GitHub App installation authentication

**Authored coaching hints:**

- Distinguish app identity from the credential used for repository operations.
- A verification secret is not an API access token.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué credencial autentica solicitudes REST como instalación de GitHub App después de que la aplicación intercambie su JWT?

1. El secreto de webhook de la aplicación

   Un secreto de webhook valida entregas, no llamadas API de instalación.

2. La clave pública de la aplicación

   Una clave pública no autoriza operaciones API de instalación.

3. Un identificador de cliente OAuth

   Un identificador de cliente por sí solo no autentica estas solicitudes.

4. Un token de acceso de instalación **[CORRECT]**

   El token obtenido autoriza operaciones API de la instalación.

**Concept:** Autenticación de instalación de GitHub App

**Authored coaching hints:**

- Distingue identidad de aplicación de credencial para operaciones de repositorio.
- Un secreto de verificación no es un token de acceso API.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual credencial autentica solicitações REST como instalação de GitHub App após o aplicativo trocar seu JWT?

1. O segredo de webhook do aplicativo

   Um segredo de webhook valida entregas, não chamadas de API da instalação.

2. A chave pública do aplicativo

   Uma chave pública não autoriza operações de API da instalação.

3. Um identificador de cliente OAuth

   Um identificador de cliente sozinho não autentica essas solicitações.

4. Um token de acesso de instalação **[CORRECT]**

   O token obtido autoriza operações de API da instalação.

**Concept:** Autenticação de instalação de GitHub App

**Authored coaching hints:**

- Diferencie identidade do aplicativo de credencial para operações do repositório.
- Um segredo de verificação não é um token de acesso à API.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation>

<!-- certification-coach-question:admin-124:459e6fdf8051ada9121e8c02b2e7c3a8c88cf012136a6b82eb2462cdccbb9b48 -->
## Question 124: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-124`

**Content revision:** `459e6fdf8051ada9121e8c02b2e7c3a8c88cf012136a6b82eb2462cdccbb9b48`

**en review revision:** `85fcf8c077e4c7f104dfa5839b995a8980a616a820e9fffe99fd13b641b1d942`
**es review revision:** `6c52bbc43445fde342c0897235a992568b22f42933322005bc48775a745ef8f4`
**pt-BR review revision:** `e247ed05cec2608642cf0b7eb36c06eec719bbc98d7b659079e9f8f79b78670c`

### English

An installed GitHub App requests additional permissions. What happens if the organization owner does not approve them?

1. The app immediately receives the new permissions

   New permissions require approval.

2. The installation is automatically uninstalled

   Declining to approve does not automatically uninstall the app.

3. The app retains its existing permissions **[CORRECT]**

   Existing permissions remain, though new functionality may not work.

4. The app's existing permissions are revoked

   Not approving an expansion does not revoke existing permissions.

**Concept:** Reviewing app permission expansion

**Authored coaching hints:**

- An upgrade request is not an automatic authorization.
- Separate existing access from requested new capabilities.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una GitHub App instalada solicita permisos adicionales. ¿Qué ocurre si el propietario de la organización no los aprueba?

1. La aplicación recibe inmediatamente los nuevos permisos

   Los nuevos permisos requieren aprobación.

2. La instalación se desinstala automáticamente

   No aprobar no desinstala automáticamente la aplicación.

3. La aplicación conserva sus permisos actuales **[CORRECT]**

   Se conservan los permisos actuales, aunque pueden fallar funciones nuevas.

4. Se revocan los permisos actuales de la aplicación

   No aprobar una ampliación no revoca los permisos existentes.

**Concept:** Revisión de ampliación de permisos de aplicaciones

**Authored coaching hints:**

- Una solicitud de ampliación no es una autorización automática.
- Distingue acceso existente de capacidades nuevas solicitadas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma GitHub App instalada solicita permissões adicionais. O que acontece se o proprietário da organização não as aprovar?

1. O aplicativo recebe imediatamente as novas permissões

   Novas permissões exigem aprovação.

2. A instalação é desinstalada automaticamente

   Não aprovar não desinstala automaticamente o aplicativo.

3. O aplicativo mantém suas permissões atuais **[CORRECT]**

   As permissões atuais permanecem, embora novas funções possam falhar.

4. As permissões atuais do aplicativo são revogadas

   Não aprovar uma ampliação não revoga as permissões existentes.

**Concept:** Revisão de ampliação de permissões de aplicativos

**Authored coaching hints:**

- Uma solicitação de ampliação não é uma autorização automática.
- Diferencie acesso existente de novas capacidades solicitadas.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app>

<!-- certification-coach-question:admin-125:23112a97decb24892e131be671e731cfb2d6d2fb2f16e84405d3af4514ff8d30 -->
## Question 125: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-125`

**Content revision:** `23112a97decb24892e131be671e731cfb2d6d2fb2f16e84405d3af4514ff8d30`

**en review revision:** `cb79ba78d5e8c98b7dc4e4279526da2404436c3db27c52893f1c5c1e09ceb3c4`
**es review revision:** `c607fcc2026734e065353c24d72def716d368595cc78a5f1b2d88be6e41a68c6`
**pt-BR review revision:** `b60ef8bb0004e8a595ff04e9927b802779f1c2b0ae698a442b1f48edd5b5d9a6`

### English

Which action permanently removes a GitHub App installation's authorized access from an organization?

1. Delete the app's webhook subscription

   Removing webhook delivery does not remove the app's API access.

2. Remove one repository from its installation

   Removing one repository leaves access to other selected repositories.

3. Suspend the installation temporarily

   Suspension blocks access temporarily and is reversible.

4. Uninstall the app from the organization **[CORRECT]**

   Uninstalling removes that organization's installation.

**Concept:** Removing integration access

**Authored coaching hints:**

- Distinguish temporary disablement from removing an installation.
- Changing notification behavior does not revoke authorization.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué acción elimina permanentemente el acceso autorizado de una instalación de GitHub App a una organización?

1. Eliminar la suscripción de webhook de la aplicación

   Eliminar entregas de webhook no elimina el acceso API de la aplicación.

2. Quitar un repositorio de su instalación

   Quitar un repositorio mantiene el acceso a otros repositorios seleccionados.

3. Suspender la instalación temporalmente

   La suspensión bloquea el acceso temporalmente y es reversible.

4. Desinstalar la aplicación de la organización **[CORRECT]**

   Desinstalar elimina la instalación de esa organización.

**Concept:** Eliminación del acceso de integraciones

**Authored coaching hints:**

- Distingue desactivación temporal de eliminación de una instalación.
- Cambiar notificaciones no revoca la autorización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual ação remove permanentemente o acesso autorizado de uma instalação de GitHub App a uma organização?

1. Excluir a assinatura de webhook do aplicativo

   Excluir entregas de webhook não remove o acesso à API do aplicativo.

2. Remover um repositório de sua instalação

   Remover um repositório mantém o acesso a outros repositórios selecionados.

3. Suspender a instalação temporariamente

   A suspensão bloqueia o acesso temporariamente e é reversível.

4. Desinstalar o aplicativo da organização **[CORRECT]**

   Desinstalar remove a instalação dessa organização.

**Concept:** Remoção de acesso de integrações

**Authored coaching hints:**

- Diferencie desativação temporária de remoção de uma instalação.
- Alterar notificações não revoga a autorização.

</details>

**Official supporting source:** <https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps>

<!-- certification-coach-question:admin-126:5f7df0c62ec989a2e332398cab7eca1c782feebbcda265b2da82f58dd6c7c851 -->
## Question 126: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-126`

**Content revision:** `5f7df0c62ec989a2e332398cab7eca1c782feebbcda265b2da82f58dd6c7c851`

**en review revision:** `6b548555902315e1e3a0efcae570c2ffbd15d2fbaf3943fd9eba82f69ddead31`
**es review revision:** `2ad807395de23268ee5005af67be2d4a38e39117f457b14061d45b0755aae948`
**pt-BR review revision:** `d616c650690446d73fae97f4b3537775bdb3cb205499a7cb425ef13df1e44bba`

### English

A REST request is rate limited with x-ratelimit-remaining: 0 and no Retry-After header. Which header tells the client when the primary window resets?

1. x-ratelimit-used

   x-ratelimit-used reports consumption, not the reset time.

2. x-ratelimit-reset **[CORRECT]**

   x-ratelimit-reset gives the reset time as UTC epoch seconds.

3. x-ratelimit-resource

   x-ratelimit-resource names the limit category.

4. x-github-request-id

   The request identifier is for tracing rather than retry scheduling.

**Concept:** Primary REST rate-limit recovery

**Authored coaching hints:**

- Use the server's timing information instead of immediate retries.
- Consumption counts and reset timestamps serve different purposes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una solicitud REST alcanza el límite con x-ratelimit-remaining: 0 y sin cabecera Retry-After. ¿Qué cabecera indica cuándo se restablece la ventana principal?

1. x-ratelimit-used

   x-ratelimit-used informa consumo, no la hora de restablecimiento.

2. x-ratelimit-reset **[CORRECT]**

   x-ratelimit-reset expresa el restablecimiento en segundos desde la época UTC.

3. x-ratelimit-resource

   x-ratelimit-resource identifica la categoría del límite.

4. x-github-request-id

   El identificador sirve para trazabilidad, no para programar reintentos.

**Concept:** Recuperación del límite principal de REST

**Authored coaching hints:**

- Usa la información temporal del servidor, no reintentos inmediatos.
- Los contadores de consumo y las marcas de restablecimiento cumplen funciones distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma solicitação REST atinge o limite com x-ratelimit-remaining: 0 e sem cabeçalho Retry-After. Qual cabeçalho indica quando a janela principal é reiniciada?

1. x-ratelimit-used

   x-ratelimit-used informa consumo, não o horário de reinício.

2. x-ratelimit-reset **[CORRECT]**

   x-ratelimit-reset expressa o reinício em segundos desde a época UTC.

3. x-ratelimit-resource

   x-ratelimit-resource identifica a categoria do limite.

4. x-github-request-id

   O identificador serve para rastreamento, não para agendar tentativas.

**Concept:** Recuperação do limite principal de REST

**Authored coaching hints:**

- Use as informações de tempo do servidor, não tentativas imediatas.
- Contadores de consumo e horários de reinício têm funções distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api>

<!-- certification-coach-question:admin-127:a889d9a6d55adc95f7ccd2ee1f54bc414003a98a6c66471ea7c91c306ddea817 -->
## Question 127: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-127`

**Content revision:** `a889d9a6d55adc95f7ccd2ee1f54bc414003a98a6c66471ea7c91c306ddea817`

**en review revision:** `85152f458db81d7246d72302f560ef27f3b41f2e9c066eb80f344aafe4260f74`
**es review revision:** `10079ee1b1c191dd8b72d73ba508201139e4fdb6a864f3aa3d82a2599c25fb5d`
**pt-BR review revision:** `6591e0a41b59853e46e5cd2092cc00a9529e50c1cbc535d12bac53fa7653da4d`

### English

A rate-limited GitHub REST response includes Retry-After: 60. What should the client do before retrying?

1. Retry immediately with a new request identifier

   A new identifier does not bypass the rate limit.

2. Wait until 60 successful requests finish

   The header specifies a delay, not a success count.

3. Send 60 parallel requests

   Parallel retries can worsen secondary throttling.

4. Wait at least 60 seconds **[CORRECT]**

   Retry-After specifies the minimum waiting period in seconds.

**Concept:** Server-directed retry timing

**Authored coaching hints:**

- Interpret the response header's unit correctly.
- Retrying more aggressively is not a recovery strategy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una respuesta REST de GitHub limitada incluye Retry-After: 60. ¿Qué debe hacer el cliente antes de reintentar?

1. Reintentar de inmediato con otro identificador

   Otro identificador no evita el límite de solicitudes.

2. Esperar a que terminen 60 solicitudes correctas

   La cabecera indica un retraso, no un número de éxitos.

3. Enviar 60 solicitudes paralelas

   Los reintentos paralelos pueden empeorar la limitación secundaria.

4. Esperar al menos 60 segundos **[CORRECT]**

   Retry-After indica el período mínimo de espera en segundos.

**Concept:** Tiempo de reintento indicado por el servidor

**Authored coaching hints:**

- Interpreta correctamente la unidad de la cabecera.
- Reintentar con mayor intensidad no es una estrategia de recuperación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma resposta REST do GitHub limitada inclui Retry-After: 60. O que o cliente deve fazer antes de tentar novamente?

1. Tentar imediatamente com outro identificador

   Outro identificador não evita o limite de solicitações.

2. Esperar 60 solicitações bem-sucedidas terminarem

   O cabeçalho indica um atraso, não um número de sucessos.

3. Enviar 60 solicitações paralelas

   Novas tentativas paralelas podem piorar a limitação secundária.

4. Esperar pelo menos 60 segundos **[CORRECT]**

   Retry-After indica o período mínimo de espera em segundos.

**Concept:** Tempo de nova tentativa indicado pelo servidor

**Authored coaching hints:**

- Interprete corretamente a unidade do cabeçalho.
- Tentar com mais intensidade não é uma estratégia de recuperação.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api>

<!-- certification-coach-question:admin-128:fd9ff9aa58bc807b5de36a69e5f83fbcd29a4b7138fc4b67c92ecf91a0ff57a0 -->
## Question 128: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-128`

**Content revision:** `fd9ff9aa58bc807b5de36a69e5f83fbcd29a4b7138fc4b67c92ecf91a0ff57a0`

**en review revision:** `0ff95a9a0a51c08cd39ebd7c30679f7b95752517571146ec7a8773562fd86a2a`
**es review revision:** `cbe7f71f788285c56d767b1257772b47a6a5751929dbe2478d999615b8365ee5`
**pt-BR review revision:** `657d89e75397cd761a59e7b81c2265c870806ce4b991a0911c769b3ff2808923`

### English

A REST client has primary allowance remaining but is throttled after many concurrent requests. Which mechanism can explain this?

1. Secondary rate limiting **[CORRECT]**

   Secondary limits can apply independently of the primary allowance.

2. Access token expiration

   Expiration invalidates a credential rather than throttling request bursts.

3. Primary REST rate limiting

   The primary allowance has not been exhausted in this scenario.

4. SSO authorization revocation

   Revocation removes authorization rather than throttling request concurrency.

**Concept:** Secondary API rate limits

**Authored coaching hints:**

- The primary request counter is not the only protection.
- Consider burst patterns and concurrent work.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un cliente REST aún tiene cuota principal, pero se limita tras muchas solicitudes concurrentes. ¿Qué mecanismo puede explicarlo?

1. Limitación secundaria de solicitudes **[CORRECT]**

   Los límites secundarios pueden aplicarse independientemente de la cuota principal.

2. Caducidad del token de acceso

   La caducidad invalida credenciales, no limita ráfagas de solicitudes.

3. Limitación principal de solicitudes REST

   La cuota principal no se ha agotado en este caso.

4. Revocación de autorización SSO

   La revocación elimina autorización, no limita la concurrencia de solicitudes.

**Concept:** Límites secundarios de API

**Authored coaching hints:**

- El contador principal no es la única protección.
- Considera los patrones de ráfagas y el trabajo concurrente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um cliente REST ainda tem cota principal, mas é limitado após muitas solicitações simultâneas. Qual mecanismo pode explicar isso?

1. Limitação secundária de solicitações **[CORRECT]**

   Limites secundários podem se aplicar independentemente da cota principal.

2. Expiração do token de acesso

   A expiração invalida credenciais, não limita rajadas de solicitações.

3. Limitação principal de solicitações REST

   A cota principal não foi esgotada neste caso.

4. Revogação de autorização de SSO

   A revogação remove autorização, não limita a simultaneidade de solicitações.

**Concept:** Limites secundários da API

**Authored coaching hints:**

- O contador principal não é a única proteção.
- Considere padrões de rajadas e trabalho simultâneo.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api>

<!-- certification-coach-question:admin-129:9d18673d54ce0bdb1bd1eaabcddbee60d49f01c4db1120985851f51f145dc4a8 -->
## Question 129: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-129`

**Content revision:** `9d18673d54ce0bdb1bd1eaabcddbee60d49f01c4db1120985851f51f145dc4a8`

**en review revision:** `896c9960f9920166f5aa4223e28b07a2e71570e1d380ddc933e505fcd42c2a4d`
**es review revision:** `01c210b741b70a8b348894aeb7f71fe73d3a6c04ab67a349c0b626c016ae5dd3`
**pt-BR review revision:** `cc6b90124e534a15067aed02ee96d8861ab76073ee56635c538e26c06cdbe460`

### English

A REST GET response includes an ETag. Which request header lets the client check whether that representation has changed?

1. X-Hub-Signature-256

   X-Hub-Signature-256 validates webhook payload signatures.

2. X-GitHub-Event

   X-GitHub-Event identifies a webhook event.

3. Retry-After

   Retry-After is retry guidance in a response.

4. If-None-Match **[CORRECT]**

   If-None-Match sends the saved ETag for a conditional request.

**Concept:** Conditional REST requests

**Authored coaching hints:**

- Use a validator returned with the resource representation.
- A webhook header serves a different transport workflow.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una respuesta REST GET incluye un ETag. ¿Qué cabecera de solicitud permite comprobar si esa representación cambió?

1. X-Hub-Signature-256

   X-Hub-Signature-256 valida firmas de cargas de webhook.

2. X-GitHub-Event

   X-GitHub-Event identifica un evento de webhook.

3. Retry-After

   Retry-After indica cuándo reintentar en una respuesta.

4. If-None-Match **[CORRECT]**

   If-None-Match envía el ETag guardado en una solicitud condicional.

**Concept:** Solicitudes REST condicionales

**Authored coaching hints:**

- Usa un validador devuelto con la representación del recurso.
- Una cabecera de webhook pertenece a otro flujo de transporte.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma resposta REST GET inclui um ETag. Qual cabeçalho de solicitação permite verificar se essa representação mudou?

1. X-Hub-Signature-256

   X-Hub-Signature-256 valida assinaturas de payloads de webhook.

2. X-GitHub-Event

   X-GitHub-Event identifica um evento de webhook.

3. Retry-After

   Retry-After orienta novas tentativas em uma resposta.

4. If-None-Match **[CORRECT]**

   If-None-Match envia o ETag salvo em uma solicitação condicional.

**Concept:** Solicitações REST condicionais

**Authored coaching hints:**

- Use um validador retornado com a representação do recurso.
- Um cabeçalho de webhook pertence a outro fluxo de transporte.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api>

<!-- certification-coach-question:admin-130:fdaafa121848b146aeb523f2f39882771f87633df258b92fc2e96b5717174c7e -->
## Question 130: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-130`

**Content revision:** `fdaafa121848b146aeb523f2f39882771f87633df258b92fc2e96b5717174c7e`

**en review revision:** `ddcba3d89e18153fa811ebc4bc71068494dc64503af9e5033aa092c11926ed89`
**es review revision:** `e41aaa37d29a4ecd72318070df676b192faabc9be4dd6586c87f34b9bd27cde0`
**pt-BR review revision:** `503b3170a57ac7f0defa0a72970c052204460f50113739c05fab64676bfb432b`

### English

How does primary REST rate-limit accounting differ between a user's PAT and a GitHub App installation access token?

1. Both always share the repository owner's allowance

   Installation requests are not charged to the repository owner's user bucket.

2. Each PAT has an independent allowance; all installations share the creator's allowance

   Additional PATs do not each create a separate user allowance.

3. The PAT uses the user's allowance; the installation token uses its installation allowance **[CORRECT]**

   User tokens and installation tokens have different primary limit accounting.

4. Both always have identical allowances regardless of plan

   Authentication type and enterprise context can affect limits.

**Concept:** User versus installation rate-limit accounting

**Authored coaching hints:**

- Determine which identity owns the request budget.
- Do not infer a universal numeric limit across plans.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo difiere el cómputo del límite REST principal entre el PAT de un usuario y un token de acceso de instalación de GitHub App?

1. Ambos comparten siempre la cuota del propietario del repositorio

   Las solicitudes de instalación no consumen la cuota de usuario del propietario del repositorio.

2. Cada PAT tiene cuota independiente; todas las instalaciones comparten la del creador

   Crear más PAT no genera cuotas de usuario separadas.

3. El PAT usa la cuota del usuario; el token de instalación usa la de su instalación **[CORRECT]**

   Los tokens de usuario y de instalación tienen cómputos de límite principal distintos.

4. Ambos tienen siempre cuotas idénticas independientemente del plan

   El tipo de autenticación y el contexto de empresa pueden afectar los límites.

**Concept:** Cómputo de límites de usuario e instalación

**Authored coaching hints:**

- Determina qué identidad es dueña del presupuesto de solicitudes.
- No supongas un límite numérico universal para todos los planes.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como a contabilização do limite REST principal difere entre o PAT de um usuário e um token de acesso de instalação de GitHub App?

1. Ambos sempre compartilham a cota do proprietário do repositório

   Solicitações da instalação não consomem a cota de usuário do proprietário do repositório.

2. Cada PAT tem cota independente; todas as instalações compartilham a do criador

   Criar mais PATs não gera cotas de usuário separadas.

3. O PAT usa a cota do usuário; o token de instalação usa a cota da instalação **[CORRECT]**

   Tokens de usuário e de instalação têm contabilizações distintas do limite principal.

4. Ambos sempre têm cotas idênticas independentemente do plano

   O tipo de autenticação e o contexto da enterprise podem afetar os limites.

**Concept:** Contabilização de limites de usuário e instalação

**Authored coaching hints:**

- Determine qual identidade possui o orçamento de solicitações.
- Não presuma um limite numérico universal para todos os planos.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api>

<!-- certification-coach-question:admin-131:fa926bda2cbe12239cbd82a65565a2ab5b95f628ab00210087c89e2e568ec410 -->
## Question 131: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-131`

**Content revision:** `fa926bda2cbe12239cbd82a65565a2ab5b95f628ab00210087c89e2e568ec410`

**en review revision:** `d969dfa87ed1e16e09f31d762d2e5c013a978ee95214060b1304ed6bc38293ab`
**es review revision:** `13180eebf301ff0773dabed857384c3b1a3b0362e761778a7f6e2a19a88cc240`
**pt-BR review revision:** `2ea255ff2f59b62cd4ee8bf2dec2e529cc9644e74f8f6481fc623c9a14e4674a`

### English

Which organization policy requires owner approval before OAuth Apps can access organization resources?

1. Fine-grained PAT approval

   PAT approval applies to personal tokens, not OAuth App grants.

2. OAuth App access restrictions **[CORRECT]**

   OAuth App restrictions govern approval of third-party OAuth access.

3. Repository creation restrictions

   Repository creation restrictions do not approve OAuth integrations.

4. GitHub App installation suspension

   Suspension affects one GitHub App installation, a different app model.

**Concept:** Organization OAuth App approval

**Authored coaching hints:**

- Choose the policy matching the application's authorization model.
- GitHub Apps, OAuth Apps, and PATs have distinct controls.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué política de organización exige aprobación del propietario antes de que OAuth Apps accedan a sus recursos?

1. Aprobación de PAT detallados

   La aprobación de PAT corresponde a tokens personales, no a OAuth Apps.

2. Restricciones de acceso de OAuth Apps **[CORRECT]**

   Las restricciones OAuth regulan la aprobación del acceso OAuth de terceros.

3. Restricciones de creación de repositorios

   Restringir la creación de repositorios no aprueba integraciones OAuth.

4. Suspensión de instalación de GitHub App

   La suspensión afecta a una instalación de GitHub App, otro modelo de aplicación.

**Concept:** Aprobación de OAuth Apps de organización

**Authored coaching hints:**

- Elige la política que corresponde al modelo de autorización de la aplicación.
- GitHub Apps, OAuth Apps y PAT tienen controles distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual política da organização exige aprovação do proprietário antes de OAuth Apps acessarem seus recursos?

1. Aprovação de PATs refinados

   A aprovação de PATs se aplica a tokens pessoais, não a OAuth Apps.

2. Restrições de acesso de OAuth Apps **[CORRECT]**

   Restrições OAuth regulam a aprovação do acesso OAuth de terceiros.

3. Restrições de criação de repositórios

   Restringir a criação de repositórios não aprova integrações OAuth.

4. Suspensão de instalação de GitHub App

   A suspensão afeta uma instalação de GitHub App, outro modelo de aplicativo.

**Concept:** Aprovação de OAuth Apps da organização

**Authored coaching hints:**

- Escolha a política correspondente ao modelo de autorização do aplicativo.
- GitHub Apps, OAuth Apps e PATs têm controles distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions>

<!-- certification-coach-question:admin-132:90ae475cb4d3c81d12be62ad745e6d481b9316960009bc25c48a2735065617c0 -->
## Question 132: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-132`

**Content revision:** `90ae475cb4d3c81d12be62ad745e6d481b9316960009bc25c48a2735065617c0`

**en review revision:** `2b56ceb94f20275bf005e9a5450062a6d42fe6b02c1c0a88da781e81dfe032ba`
**es review revision:** `ef19d1b719aaf64bb7e24d95066c5303cc4a90042aab41c111aaa1d1ad4faada`
**pt-BR review revision:** `72635373391ac925561845c836d03164610848ed90470d065576f4f8643e4596`

### English

Which verification authenticates a GitHub webhook payload using its configured shared secret?

1. Compare the sender's IP with allowed addresses

   An IP check alone does not verify the payload's contents.

2. Validate X-Hub-Signature-256 using HMAC-SHA256 **[CORRECT]**

   A secret-derived HMAC verifies authenticity and payload integrity.

3. Verify User-Agent against GitHub-Hookshot

   A User-Agent string can be forged.

4. Check X-GitHub-Delivery against prior delivery IDs

   Delivery IDs help detect duplicates but do not authenticate contents.

**Concept:** Webhook authenticity and integrity

**Authored coaching hints:**

- Sender-controlled headers alone do not prove authenticity.
- The verification must bind the secret to the exact payload.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué verificación autentica una carga de webhook de GitHub mediante su secreto compartido configurado?

1. Comparar la IP del remitente con direcciones permitidas

   Comprobar solo la IP no verifica el contenido de la carga.

2. Validar X-Hub-Signature-256 mediante HMAC-SHA256 **[CORRECT]**

   Un HMAC derivado del secreto verifica autenticidad e integridad.

3. Verificar User-Agent frente a GitHub-Hookshot

   Una cadena User-Agent se puede falsificar.

4. Comparar X-GitHub-Delivery con identificadores de entregas previas

   Los identificadores detectan duplicados, pero no autentican contenido.

**Concept:** Autenticidad e integridad de webhooks

**Authored coaching hints:**

- Las cabeceras controladas por el remitente no prueban autenticidad por sí solas.
- La verificación debe vincular el secreto con la carga exacta.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual verificação autentica um payload de webhook do GitHub usando seu segredo compartilhado configurado?

1. Comparar o IP do remetente com endereços permitidos

   Verificar somente o IP não verifica o conteúdo do payload.

2. Validar X-Hub-Signature-256 usando HMAC-SHA256 **[CORRECT]**

   Um HMAC derivado do segredo verifica autenticidade e integridade.

3. Verificar User-Agent em relação a GitHub-Hookshot

   Uma string User-Agent pode ser falsificada.

4. Comparar X-GitHub-Delivery com IDs de entregas anteriores

   IDs ajudam a detectar duplicatas, mas não autenticam o conteúdo.

**Concept:** Autenticidade e integridade de webhooks

**Authored coaching hints:**

- Cabeçalhos controlados pelo remetente não comprovam autenticidade sozinhos.
- A verificação deve vincular o segredo ao payload exato.

</details>

**Official supporting source:** <https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries>

<!-- certification-coach-question:admin-133:9296b1da68d46f7388624a1c0a7dace94baa1d1249a45fac3a16408ffe533c2e -->
## Question 133: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-133`

**Content revision:** `9296b1da68d46f7388624a1c0a7dace94baa1d1249a45fac3a16408ffe533c2e`

**en review revision:** `343b333b5ed916b72cff1e3dcccf09659161359e504141a7b1f4bc5815cc6dce`
**es review revision:** `46c061ef0913535f1aef5ddffd01a154b2d15f57abece2d918d4c545e18100ee`
**pt-BR review revision:** `f764f43671b195f433822bdf1e327a04666cceaf3b63335ecc00fa2235167e28`

### English

Which integration mechanism sends event notifications when repositories are created instead of requiring repeated API polling?

1. A scheduled REST inventory job

   A scheduled inventory job still polls for state.

2. An organization webhook subscription **[CORRECT]**

   Organization webhooks can deliver subscribed repository events.

3. A conditional GET loop

   Conditional GET requests still require polling.

4. A saved audit-log search

   A saved search does not deliver event notifications.

**Concept:** Event-driven integration design

**Authored coaching hints:**

- Distinguish a pushed event from periodically checking state.
- Choose a mechanism scoped to organization activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué mecanismo de integración envía notificaciones cuando se crean repositorios, en lugar de exigir consultas repetidas a la API?

1. Una tarea REST de inventario programada

   Una tarea de inventario sigue consultando el estado periódicamente.

2. Una suscripción de webhook de organización **[CORRECT]**

   Los webhooks de organización entregan eventos de repositorio suscritos.

3. Un bucle GET condicional

   Las solicitudes GET condicionales siguen requiriendo consultas periódicas.

4. Una búsqueda de auditoría guardada

   Una búsqueda guardada no entrega notificaciones de eventos.

**Concept:** Diseño de integraciones por eventos

**Authored coaching hints:**

- Distingue recibir un evento de comprobar periódicamente el estado.
- Elige un mecanismo con ámbito de actividad de organización.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual mecanismo de integração envia notificações quando repositórios são criados, em vez de exigir consultas repetidas à API?

1. Uma tarefa REST de inventário agendada

   Uma tarefa de inventário continua consultando o estado periodicamente.

2. Uma assinatura de webhook da organização **[CORRECT]**

   Webhooks da organização entregam os eventos de repositório selecionados na assinatura.

3. Um loop GET condicional

   Solicitações GET condicionais continuam exigindo consultas periódicas.

4. Uma pesquisa de auditoria salva

   Uma pesquisa salva não entrega notificações de eventos.

**Concept:** Projeto de integrações por eventos

**Authored coaching hints:**

- Diferencie receber um evento de verificar o estado periodicamente.
- Escolha um mecanismo no escopo da atividade da organização.

</details>

**Official supporting source:** <https://docs.github.com/en/webhooks/about-webhooks>

<!-- certification-coach-question:admin-134:93764b98442fafd962402cd73b424df4d8cd798e257b4b95a6b4972fd84eafc7 -->
## Question 134: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-134`

**Content revision:** `93764b98442fafd962402cd73b424df4d8cd798e257b4b95a6b4972fd84eafc7`

**en review revision:** `ca7c5a29e215ef6d3bc0aaa33c866331e5b940b98928e549dea9480f36104dbf`
**es review revision:** `b68bf731e02da1de7a3c64cb937c7121c6930482718bacf698e72c5a7edb9915`
**pt-BR review revision:** `b426e868fcaba065116c287287d782b813e0119e5fadee391db39d0a5c8c5cfb`

### English

An organization team is named in CODEOWNERS but receives no review requests. Which team condition is required for code ownership?

1. The team is visible and has explicit write access **[CORRECT]**

   A code-owner team must be visible and have its own write access.

2. The team is secret and has read access

   A secret team with read access does not meet the requirements.

3. The team is visible and has triage access

   Triage is insufficient for code ownership.

4. The team is secret and its members individually have write access

   Individual member access does not replace the team's required access or visibility.

**Concept:** CODEOWNERS team eligibility

**Authored coaching hints:**

- Evaluate permissions granted to the team itself.
- Membership permissions and team permissions are not interchangeable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un equipo de organización aparece en CODEOWNERS, pero no recibe solicitudes de revisión. ¿Qué condición debe cumplir para ser propietario del código?

1. Ser visible y tener acceso explícito de escritura **[CORRECT]**

   Un equipo propietario debe ser visible y tener acceso propio de escritura.

2. Ser secreto y tener acceso de lectura

   Un equipo secreto con lectura no cumple los requisitos.

3. Ser visible y tener acceso de clasificación

   El acceso de clasificación es insuficiente.

4. Ser secreto y tener miembros con escritura individual

   El acceso individual no sustituye los requisitos de acceso y visibilidad del equipo.

**Concept:** Requisitos de equipos en CODEOWNERS

**Authored coaching hints:**

- Evalúa los permisos otorgados al propio equipo.
- Los permisos individuales y los del equipo no son intercambiables.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma equipe da organização aparece em CODEOWNERS, mas não recebe solicitações de revisão. Qual condição ela precisa cumprir para ser responsável pelo código?

1. Ser visível e ter acesso explícito de escrita **[CORRECT]**

   Uma equipe responsável precisa ser visível e ter acesso próprio de escrita.

2. Ser secreta e ter acesso de leitura

   Uma equipe secreta com leitura não cumpre os requisitos.

3. Ser visível e ter acesso de triagem

   O acesso de triagem é insuficiente.

4. Ser secreta e ter membros com escrita individual

   O acesso individual não substitui os requisitos de acesso e visibilidade da equipe.

**Concept:** Requisitos de equipes em CODEOWNERS

**Authored coaching hints:**

- Avalie as permissões concedidas à própria equipe.
- Permissões individuais e da equipe não são intercambiáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners>

<!-- certification-coach-question:admin-135:4d724df6d3c19f0eec4a365d545baa9e430ecdd457e8451a481b3a20aa8701b2 -->
## Question 135: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-135`

**Content revision:** `4d724df6d3c19f0eec4a365d545baa9e430ecdd457e8451a481b3a20aa8701b2`

**en review revision:** `3b15d97633035c0bc52feb33c44a0286493dce63d32402008ef28f189c3821be`
**es review revision:** `a00794a94f36a92b0dea0c10cbe5878a2d063681164e61037a9bd34b95d625ad`
**pt-BR review revision:** `3f7369a1341cedb52968fbb690814f20c76da8764c7d38b1dc29941acb12bcfb`

### English

What does a code-scanning alert's path view help a responder inspect?

1. The chain of dependency version upgrades

   Dependency upgrade history is not the alert's data-flow path.

2. Data flow from source to sink **[CORRECT]**

   The path traces how data reaches the reported vulnerable operation.

3. The execution order of workflow jobs

   Workflow job order is not the application's data flow.

4. The list of files changed by a pull request

   A changed-file list does not show the reported flow through code.

**Concept:** Interpreting CodeQL path findings

**Authored coaching hints:**

- A highlighted path describes program behavior, not administrative history.
- Follow the input through transformations to its destination.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué permite inspeccionar la vista de ruta de una alerta de análisis de código?

1. La cadena de actualizaciones de versiones de dependencias

   El historial de actualizaciones no es la ruta de flujo de datos de la alerta.

2. El flujo de datos de origen a destino **[CORRECT]**

   La ruta muestra cómo llegan datos a la operación vulnerable señalada.

3. El orden de ejecución de tareas del flujo

   El orden de tareas no es el flujo de datos de la aplicación.

4. La lista de archivos cambiados por una solicitud de incorporación

   Una lista de archivos no muestra el flujo señalado por el código.

**Concept:** Interpretación de hallazgos de rutas de CodeQL

**Authored coaching hints:**

- Una ruta resaltada describe comportamiento del programa, no historial administrativo.
- Sigue la entrada a través de sus transformaciones hasta el destino.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que a visualização de caminho de um alerta de análise de código permite inspecionar?

1. A cadeia de atualizações de versões de dependências

   O histórico de atualizações não é o caminho de fluxo de dados do alerta.

2. O fluxo de dados da origem ao destino **[CORRECT]**

   O caminho mostra como dados chegam à operação vulnerável indicada.

3. A ordem de execução dos jobs do workflow

   A ordem dos jobs não é o fluxo de dados da aplicação.

4. A lista de arquivos alterados por um pull request

   Uma lista de arquivos não mostra o fluxo indicado pelo código.

**Concept:** Interpretação de achados de caminhos do CodeQL

**Authored coaching hints:**

- Um caminho destacado descreve comportamento do programa, não histórico administrativo.
- Siga a entrada pelas transformações até seu destino.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository>

<!-- certification-coach-question:admin-136:03f7d8745003722604e4db130d5484cb765b3a997845bd8e6d9c426cb58d6950 -->
## Question 136: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-136`

**Content revision:** `03f7d8745003722604e4db130d5484cb765b3a997845bd8e6d9c426cb58d6950`

**en review revision:** `eaf433341e090af7095c6b003f3ee65380c781da314508d286467031cfa4f749`
**es review revision:** `68c8f4cceed40aa48f7fc9d26b1843e7207d516f74c3ef7c273cfa0bcfbbdc90`
**pt-BR review revision:** `03e2dc0409c677c284e9672a601622c1fde12015e63d4ff810c8a5439c5cb56d`

### English

Which feature attempts remediation pull requests for vulnerable supported dependencies after Dependabot alerts are enabled?

1. Secret-scanning push protection

   Push protection blocks secrets rather than updating packages.

2. Dependabot security updates **[CORRECT]**

   Security updates propose fixes when Dependabot can generate a compatible update.

3. Dependency review

   Dependency review assesses changes but does not generate these remediation PRs.

4. Dependabot alert notifications

   Alert notifications report findings without themselves opening fix PRs.

**Concept:** Dependabot automated vulnerability remediation

**Authored coaching hints:**

- Distinguish identifying a vulnerable package from proposing its fix.
- Not every alert can produce a compatible update.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué función intenta crear solicitudes de corrección para dependencias compatibles vulnerables tras habilitar alertas de Dependabot?

1. Protección de inserción de secretos

   La protección de inserción bloquea secretos, no actualiza paquetes.

2. Actualizaciones de seguridad de Dependabot **[CORRECT]**

   Las actualizaciones de seguridad proponen correcciones cuando es posible generar una actualización compatible.

3. Revisión de dependencias

   La revisión evalúa cambios, pero no genera estas solicitudes de corrección.

4. Notificaciones de alertas de Dependabot

   Las notificaciones informan hallazgos sin abrir por sí mismas solicitudes de corrección.

**Concept:** Corrección automatizada de vulnerabilidades con Dependabot

**Authored coaching hints:**

- Distingue identificar un paquete vulnerable de proponer su corrección.
- No todas las alertas pueden producir una actualización compatible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual recurso tenta criar pull requests de correção para dependências compatíveis vulneráveis após habilitar alertas do Dependabot?

1. Proteção de push para segredos

   A proteção de push bloqueia segredos, não atualiza pacotes.

2. Atualizações de segurança do Dependabot **[CORRECT]**

   Atualizações de segurança propõem correções quando é possível gerar uma atualização compatível.

3. Revisão de dependências

   A revisão avalia mudanças, mas não gera esses pull requests de correção.

4. Notificações de alertas do Dependabot

   Notificações informam achados sem abrir pull requests de correção por si só.

**Concept:** Correção automatizada de vulnerabilidades com Dependabot

**Authored coaching hints:**

- Diferencie identificar um pacote vulnerável de propor sua correção.
- Nem todo alerta pode produzir uma atualização compatível.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates>

<!-- certification-coach-question:admin-137:791b565eaaae73d9da1994a8e2a07deff5aca5eef2135a0f4e8e12031b27b82c -->
## Question 137: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-137`

**Content revision:** `791b565eaaae73d9da1994a8e2a07deff5aca5eef2135a0f4e8e12031b27b82c`

**en review revision:** `86e60dcdbe86813d65cb2283626de7f2fd1339788075fb5f088689351d3d1b03`
**es review revision:** `a078dd98d1285c02a1b897c29fa2b911d1305e6619c82fdb0ef44356dd92cc7b`
**pt-BR review revision:** `30a4b0b23a79b1940e31198f6d92484080517f0f4dc66ef1d80f69143731fd91`

### English

Where should a script obtain a required PAT instead of keeping it in a tracked source file?

1. A private repository's README

   Private repository access still exposes credentials to readers.

2. An encoded constant in the script

   Encoding is not secure secret storage.

3. A commit message on a protected branch

   Branch protection does not conceal commit messages.

4. An approved secret store at runtime **[CORRECT]**

   A secret store separates the credential from tracked source.

**Concept:** Secure personal access token handling

**Authored coaching hints:**

- Access restrictions do not make committed credentials safe.
- Encoding changes representation, not confidentiality.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿De dónde debe obtener un script un PAT necesario, en vez de guardarlo en un archivo de código versionado?

1. Del README de un repositorio privado

   Los lectores de un repositorio privado también pueden ver sus credenciales.

2. De una constante codificada en el script

   Codificar no equivale a almacenar secretos de forma segura.

3. De un mensaje de commit en una rama protegida

   La protección de ramas no oculta mensajes de commit.

4. De un almacén de secretos aprobado durante la ejecución **[CORRECT]**

   Un almacén separa la credencial del código versionado.

**Concept:** Manejo seguro de tokens de acceso personal

**Authored coaching hints:**

- Las restricciones de acceso no hacen seguras las credenciales versionadas.
- Codificar cambia la representación, no la confidencialidad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

De onde um script deve obter um PAT necessário, em vez de mantê-lo em um arquivo de código versionado?

1. Do README de um repositório privado

   Leitores de um repositório privado também podem ver suas credenciais.

2. De uma constante codificada no script

   Codificar não equivale a armazenar segredos com segurança.

3. De uma mensagem de commit em uma branch protegida

   A proteção de branches não oculta mensagens de commit.

4. De um armazenamento de segredos aprovado durante a execução **[CORRECT]**

   Um armazenamento separa a credencial do código versionado.

**Concept:** Tratamento seguro de tokens de acesso pessoal

**Authored coaching hints:**

- Restrições de acesso não tornam seguras as credenciais versionadas.
- Codificar muda a representação, não a confidencialidade.

</details>

**Official supporting source:** <https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens>

<!-- certification-coach-question:admin-138:23fa2ade7e9234e4ad9861dd2694890447485faecf2f4bea0fccff7af99b591c -->
## Question 138: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-138`

**Content revision:** `23fa2ade7e9234e4ad9861dd2694890447485faecf2f4bea0fccff7af99b591c`

**en review revision:** `0147f01e5c2989cc56d6e56e4d95f31611353daa8b77daa4797c5178da1c9b9c`
**es review revision:** `c521766016a0f1483ce1b12771c2a3a7f94e8cb08b527e6192b2e67d9d4c329c`
**pt-BR review revision:** `6487996c7cd7164703614f0f51f910042c2b6badfdaf41176781657d9107031f`

### English

In the English GitHub Enterprise Cloud UI, an enterprise owner opens Settings &gt; Audit log &gt; Settings. Which option adds source IPs to eligible audit events?

1. Require fine-grained PAT approval

   PAT approval does not govern audit IP disclosure.

2. Require signed commits

   Commit signatures do not configure audit IP fields.

3. Restrict repository forking

   Forking policy does not enable source IP recording.

4. Enable source IP disclosure **[CORRECT]**

   Source IP disclosure controls inclusion of IP data for eligible events.

**Concept:** Audit source IP disclosure

**Authored coaching hints:**

- A network allow list and event field disclosure serve different purposes.
- Do not assume every event exposes an address.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En la interfaz de GitHub Enterprise Cloud en inglés, un propietario de empresa abre Settings &gt; Audit log &gt; Settings. ¿Qué opción añade IP de origen a eventos de auditoría aplicables?

1. Require fine-grained PAT approval

   La aprobación de PAT no regula la divulgación de IP en auditoría.

2. Require signed commits

   Las firmas de commits no configuran campos IP de auditoría.

3. Restrict repository forking

   La política de bifurcación no habilita el registro de IP.

4. Enable source IP disclosure **[CORRECT]**

   Source IP disclosure controla la inclusión de datos IP en eventos aplicables.

**Concept:** Divulgación de IP de origen en auditoría

**Authored coaching hints:**

- Una lista de redes permitidas y la divulgación de campos cumplen fines distintos.
- No supongas que todos los eventos muestran una dirección.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Na interface do GitHub Enterprise Cloud em inglês, um proprietário da enterprise abre Settings &gt; Audit log &gt; Settings. Qual opção adiciona IPs de origem aos eventos de auditoria aplicáveis?

1. Require fine-grained PAT approval

   A aprovação de PATs não regula a divulgação de IP na auditoria.

2. Require signed commits

   Assinaturas de commits não configuram campos de IP da auditoria.

3. Restrict repository forking

   A política de forks não habilita o registro de IP.

4. Enable source IP disclosure **[CORRECT]**

   Source IP disclosure controla a inclusão de dados de IP em eventos aplicáveis.

**Concept:** Divulgação de IP de origem na auditoria

**Authored coaching hints:**

- Uma lista de redes permitidas e a divulgação de campos têm fins distintos.
- Não presuma que todo evento exponha um endereço.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise>

<!-- certification-coach-question:admin-139:3184807e04df4badb25f3d2bf3c5878d1fb9d2271b8ca7fac8f8859480d391b0 -->
## Question 139: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-139`

**Content revision:** `3184807e04df4badb25f3d2bf3c5878d1fb9d2271b8ca7fac8f8859480d391b0`

**en review revision:** `1301995a3c25164247a1efd685006b1263a4b9e54efa82b84799660a56014413`
**es review revision:** `dbfd772f1076e1f4746206379979f16caf909977f08775b2f7551a042c036b5c`
**pt-BR review revision:** `f4aeec65602ec45b466905ebaa7d1eb0634f6bd134a95957999eef825d01d54a`

### English

Dependabot opens a security update pull request. What should determine whether it is merged?

1. The bot author alone

   Bot authorship does not prove compatibility or satisfy all merge requirements.

2. The absence of a human-written title

   Title authorship does not establish correctness.

3. The package name alone

   The package name does not establish update safety.

4. The repository's required checks and review policy **[CORRECT]**

   Dependency updates should pass applicable checks and review before merging.

**Concept:** Reviewing automated dependency fixes

**Authored coaching hints:**

- Automation proposes a change; it does not prove every effect.
- Apply the same relevant integration controls to dependency changes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dependabot abre una solicitud de actualización de seguridad. ¿Qué debe determinar si se fusiona?

1. Solo que el autor sea un bot

   La autoría del bot no prueba compatibilidad ni cumple todos los requisitos.

2. La ausencia de un título escrito por una persona

   La autoría del título no establece corrección.

3. Solo el nombre del paquete

   El nombre del paquete no establece la seguridad de la actualización.

4. Las comprobaciones obligatorias y la política de revisión del repositorio **[CORRECT]**

   Las actualizaciones deben superar las comprobaciones y revisiones aplicables.

**Concept:** Revisión de correcciones automatizadas de dependencias

**Authored coaching hints:**

- La automatización propone un cambio; no demuestra todos sus efectos.
- Aplica los controles de integración pertinentes a los cambios de dependencias.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Dependabot abre um pull request de atualização de segurança. O que deve determinar se ele será mesclado?

1. Somente a autoria do bot

   A autoria do bot não comprova compatibilidade nem cumpre todos os requisitos.

2. A ausência de título escrito por uma pessoa

   A autoria do título não estabelece correção.

3. Somente o nome do pacote

   O nome do pacote não estabelece a segurança da atualização.

4. As verificações obrigatórias e a política de revisão do repositório **[CORRECT]**

   Atualizações devem passar pelas verificações e revisões aplicáveis.

**Concept:** Revisão de correções automatizadas de dependências

**Authored coaching hints:**

- A automação propõe uma mudança; não comprova todos os efeitos.
- Aplique os controles de integração relevantes às mudanças de dependências.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates>

<!-- certification-coach-question:admin-140:0ffef8d98698b14a539516722103e0188903c2ce7781d44585bf4fbc89e5c1fd -->
## Question 140: Implement secure software development and compliance

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-140`

**Content revision:** `0ffef8d98698b14a539516722103e0188903c2ce7781d44585bf4fbc89e5c1fd`

**en review revision:** `efa850765f340727400150f244a39e228ae3ecd7776c4406a4e0588cec69af0a`
**es review revision:** `642d3a2aea969b06c2b830ad91a6f4483eebd94db61277adf38342f0d116076d`
**pt-BR review revision:** `1057bd7e9f575b87a76c38634d8dd0aa9345de5039a4c667662f517f609be4da`

### English

What does enabling repository security tools establish for an enterprise's compliance program?

1. Certification against every regulatory standard

   Feature enablement is not universal regulatory certification.

2. Controls and findings that still require risk assessment **[CORRECT]**

   Tools provide evidence and protections that require interpretation and response.

3. Proof that all vulnerabilities are absent

   Scanning cannot prove the absence of all vulnerabilities.

4. Replacement of incident response and access reviews

   Incident response and access governance remain necessary.

**Concept:** Security tooling and residual compliance risk

**Authored coaching hints:**

- Distinguish a technical control from a compliance determination.
- Consider responsibilities that remain after detection is enabled.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué aporta habilitar herramientas de seguridad de repositorio al programa de cumplimiento de una empresa?

1. Certificación frente a toda normativa

   Habilitar funciones no equivale a certificación normativa universal.

2. Controles y hallazgos que aún requieren evaluación de riesgo **[CORRECT]**

   Las herramientas aportan evidencias y protecciones que requieren interpretación y respuesta.

3. Prueba de ausencia de todas las vulnerabilidades

   El análisis no demuestra ausencia de todas las vulnerabilidades.

4. Sustitución de respuesta a incidentes y revisiones de acceso

   La respuesta a incidentes y el gobierno de acceso siguen siendo necesarios.

**Concept:** Herramientas de seguridad y riesgo residual de cumplimiento

**Authored coaching hints:**

- Distingue un control técnico de una determinación de cumplimiento.
- Considera qué responsabilidades permanecen tras habilitar la detección.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que habilitar ferramentas de segurança de repositório oferece ao programa de conformidade de uma enterprise?

1. Certificação em todas as normas regulatórias

   Habilitar recursos não equivale a uma certificação regulatória universal.

2. Controles e achados que ainda exigem avaliação de risco **[CORRECT]**

   As ferramentas fornecem evidências e proteções que exigem interpretação e resposta.

3. Prova de ausência de todas as vulnerabilidades

   A análise não comprova ausência de todas as vulnerabilidades.

4. Substituição da resposta a incidentes e das revisões de acesso

   A resposta a incidentes e a governança de acesso continuam necessárias.

**Concept:** Ferramentas de segurança e risco residual de conformidade

**Authored coaching hints:**

- Diferencie um controle técnico de uma determinação de conformidade.
- Considere quais responsabilidades permanecem após habilitar a detecção.

</details>

**Official supporting source:** <https://docs.github.com/en/code-security/security-overview/about-security-overview>

<!-- certification-coach-question:admin-141:d378e07d6e24f84bc3100bfcbb8c756c93e5d38c1562e6346486074a04e9719e -->
## Question 141: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-141`

**Content revision:** `d378e07d6e24f84bc3100bfcbb8c756c93e5d38c1562e6346486074a04e9719e`

**en review revision:** `5802ba28f0ced5ca866ad94b5bbee2a3318b230cbe76569dcb6abee9188df5b2`
**es review revision:** `ac435cfc88720d9b65cb2b0065b7d25e153d4ef62da2a8029ca09bf7c0043e68`
**pt-BR review revision:** `b3f1a0d6f4b5b855bb2a105da5401e4b8ef15052ab2ee73a6f3613fdb99244e5`

### English

In GitHub Enterprise Cloud, who can relax an Actions restriction enforced by enterprise policy?

1. A repository administrator

   Repository settings cannot override it.

2. An enterprise owner **[CORRECT]**

   Enterprise owners control enterprise policies.

3. An organization member

   Membership does not grant policy control.

4. A workflow maintainer

   Editing YAML cannot relax enterprise policy.

**Concept:** Actions policy inheritance

**Authored coaching hints:**

- Identify the enforcing scope.
- Separate workflow edits from policy authority.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, ¿quién puede flexibilizar una restricción de Actions impuesta por una política empresarial?

1. Un administrador del repositorio

   La configuración del repositorio no puede anularla.

2. Un propietario de la empresa **[CORRECT]**

   Los propietarios controlan las políticas empresariales.

3. Un miembro de la organización

   Ser miembro no permite controlar políticas.

4. Un responsable del flujo de trabajo

   Editar YAML no flexibiliza la política empresarial.

**Concept:** Herencia de políticas de Actions

**Authored coaching hints:**

- Identifica el ámbito que impone la restricción.
- Distingue editar flujos de administrar políticas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, quem pode flexibilizar uma restrição de Actions imposta pela política empresarial?

1. Um administrador do repositório

   As configurações do repositório não podem anulá-la.

2. Um proprietário da empresa **[CORRECT]**

   Proprietários controlam as políticas empresariais.

3. Um membro da organização

   Ser membro não permite controlar políticas.

4. Um responsável pelo fluxo de trabalho

   Editar YAML não flexibiliza a política empresarial.

**Concept:** Herança de políticas de Actions

**Authored coaching hints:**

- Identifique o escopo que impõe a restrição.
- Diferencie editar fluxos de administrar políticas.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-142:eb6e566d5eafa41dd207a497ef95b2a64ffe6c4be7b63bf62d8875e7b3542ae6 -->
## Question 142: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-142`

**Content revision:** `eb6e566d5eafa41dd207a497ef95b2a64ffe6c4be7b63bf62d8875e7b3542ae6`

**en review revision:** `be1cf43df21ee143a39d9fdb2986241957980ae701511f1d7b8bd6d9df33318b`
**es review revision:** `5ac0fb3d57b23d8cbe06f7251e204a952b0e41d666c9fcdf7b66c7c1e75199f6`
**pt-BR review revision:** `7d80e4a52d1213df43db2af7189d2ff17828ad2c84f7fee4270c63b9cc9e3dbd`

### English

An enterprise permits only actions defined inside its own repositories. Why is actions/checkout blocked?

1. Its runner label is missing

   Labels select runners, not allowed actions.

2. Its repository must be forked first

   Forking is not a general prerequisite.

3. GitHub-authored actions are outside that policy **[CORRECT]**

   Enterprise-only permission excludes GitHub's external organizations.

4. Public actions require an environment secret

   A secret does not bypass action policy.

**Concept:** Enterprise-only action policies

**Authored coaching hints:**

- Consider who owns the action repository.
- Distinguish publisher trust from policy scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa permite solo acciones definidas en sus propios repositorios. ¿Por qué se bloquea actions/checkout?

1. Falta su etiqueta de ejecutor

   Las etiquetas seleccionan ejecutores, no acciones permitidas.

2. Primero debe bifurcarse su repositorio

   Bifurcar no es un requisito general.

3. Las acciones de GitHub quedan fuera de esa política **[CORRECT]**

   El permiso empresarial excluye las organizaciones externas de GitHub.

4. Las acciones públicas necesitan un secreto de entorno

   Un secreto no evita la política de acciones.

**Concept:** Políticas de acciones solo empresariales

**Authored coaching hints:**

- Considera quién posee el repositorio de la acción.
- Distingue confianza en el editor de ámbito permitido.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa permite apenas ações definidas em seus próprios repositórios. Por que actions/checkout é bloqueada?

1. Falta seu rótulo de executor

   Rótulos selecionam executores, não ações permitidas.

2. Seu repositório precisa ser bifurcado antes

   Bifurcar não é um pré-requisito geral.

3. Ações do GitHub estão fora dessa política **[CORRECT]**

   A permissão empresarial exclui as organizações externas do GitHub.

4. Ações públicas exigem um segredo de ambiente

   Um segredo não contorna a política de ações.

**Concept:** Políticas de ações somente empresariais

**Authored coaching hints:**

- Considere quem possui o repositório da ação.
- Diferencie confiança no editor de escopo permitido.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-143:d9e27b2f3a22be0f05aa3165e8cdf0fff06c1d308a580cb30ecc6cf4a7a9a287 -->
## Question 143: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-143`

**Content revision:** `d9e27b2f3a22be0f05aa3165e8cdf0fff06c1d308a580cb30ecc6cf4a7a9a287`

**en review revision:** `b6efd2a1e9dc21759ee204f6c361a0d06fb007d8c7ba0c0ebce00298daa65f6b`
**es review revision:** `b0b49c08436915b82244fdb4796dd403755d489b1d49943b184331f68d2ffe3b`
**pt-BR review revision:** `c38b60c2dd019dbd7f9a95a69b3a4bd354bc05f1f885d85f4fc22a9b9bd81a02`

### English

An enterprise owner wants Actions enabled in only two organizations. Which control matches that scope?

1. Enable Actions for specific organizations **[CORRECT]**

   Enterprise policy can select organizations.

2. Allow only enterprise actions and reusable workflows

   Dependency restrictions do not select organizations that can use Actions.

3. Disable repository-level self-hosted runner creation

   Runner registration policy does not disable Actions itself.

4. Require actions to use full-length commit SHAs

   Pinning controls dependencies, not organization availability.

**Concept:** Enterprise Actions availability

**Authored coaching hints:**

- Match the setting to the organizational boundary.
- Availability differs from job routing.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario empresarial quiere habilitar Actions solo en dos organizaciones. ¿Qué control corresponde a ese ámbito?

1. Habilitar Actions para organizaciones específicas **[CORRECT]**

   La política empresarial permite seleccionar organizaciones.

2. Permitir solo acciones y flujos reutilizables de la empresa

   Restringir dependencias no selecciona organizaciones que pueden usar Actions.

3. Deshabilitar la creación de ejecutores autohospedados de repositorio

   La política de registro no deshabilita Actions.

4. Exigir SHA completos de commits para acciones

   La fijación controla dependencias, no disponibilidad organizativa.

**Concept:** Disponibilidad empresarial de Actions

**Authored coaching hints:**

- Relaciona el control con el límite organizativo.
- Disponibilidad y asignación de trabajos son distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário empresarial quer habilitar Actions em apenas duas organizações. Qual controle corresponde a esse escopo?

1. Habilitar Actions para organizações específicas **[CORRECT]**

   A política empresarial permite selecionar organizações.

2. Permitir somente ações e fluxos reutilizáveis da empresa

   Restringir dependências não seleciona organizações que podem usar Actions.

3. Desabilitar a criação de executores auto-hospedados de repositório

   A política de registro não desabilita Actions.

4. Exigir SHAs completos de commits para ações

   A fixação controla dependências, não disponibilidade organizacional.

**Concept:** Disponibilidade empresarial de Actions

**Authored coaching hints:**

- Relacione o controle ao limite organizacional.
- Disponibilidade difere do roteamento de trabalhos.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-144:c8274834935a70200af06a9b09d1e9837065939fbff802b4dbdf2622d25c7f10 -->
## Question 144: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-144`

**Content revision:** `c8274834935a70200af06a9b09d1e9837065939fbff802b4dbdf2622d25c7f10`

**en review revision:** `0d3cb16d0e2ad5e04fe2dbb3c309cb61da19ee00d833914d0efe25fd700ae511`
**es review revision:** `cdf77d612b64661a8615aea99eb6670a4ab08f63739943f6c30e45f401ffeb93`
**pt-BR review revision:** `df19afffaa3c22054b6d9ab89258216ddca56b7aa9f06bcacb1f514f4e8fe6f9`

### English

In an Actions allowlist, which pattern permits all actions and reusable workflows owned by octo-tools?

1. octo-tools

   The owner alone is not the documented pattern.

2. @octo-tools

   An @ prefix does not select an owner.

3. \*/octo-tools

   This selects a repository name under any owner.

4. octo-tools/\* **[CORRECT]**

   The wildcard covers repositories under that owner.

**Concept:** Action allowlist syntax

**Authored coaching hints:**

- Read owner and repository positions.
- A wildcard expands one part of a reference.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una lista de permitidos de Actions, ¿qué patrón permite todas las acciones y flujos reutilizables de octo-tools?

1. octo-tools

   El propietario solo no es el patrón documentado.

2. @octo-tools

   El prefijo @ no selecciona un propietario.

3. \*/octo-tools

   Esto selecciona un nombre de repositorio bajo cualquier propietario.

4. octo-tools/\* **[CORRECT]**

   El comodín abarca los repositorios de ese propietario.

**Concept:** Sintaxis de la lista de acciones permitidas

**Authored coaching hints:**

- Identifica las posiciones de propietario y repositorio.
- Un comodín amplía una parte de la referencia.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma lista de permissões de Actions, qual padrão permite todas as ações e fluxos reutilizáveis de octo-tools?

1. octo-tools

   Somente o proprietário não é o padrão documentado.

2. @octo-tools

   O prefixo @ não seleciona um proprietário.

3. \*/octo-tools

   Isso seleciona um nome de repositório de qualquer proprietário.

4. octo-tools/\* **[CORRECT]**

   O curinga abrange os repositórios desse proprietário.

**Concept:** Sintaxe da lista de ações permitidas

**Authored coaching hints:**

- Identifique as posições de proprietário e repositório.
- Um curinga amplia uma parte da referência.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-145:1d1f46b44de4675c92fa341600be27a4025fa0cf54ca7e2256f7fa3a479888c5 -->
## Question 145: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-145`

**Content revision:** `1d1f46b44de4675c92fa341600be27a4025fa0cf54ca7e2256f7fa3a479888c5`

**en review revision:** `692160e2a599db605999a0cbf25c3a225ebac247873fe885cb124da0b9a38fb8`
**es review revision:** `1d56f4c42b13c3047463ad046f98740f87486de37a191f69c93e3bd3dbf849f1`
**pt-BR review revision:** `87be7be20734e1f3d0e66959b02292c2481752b0222614ce5c50fd558ae471bf`

### English

Without a dependency lockfile, which action reference has the form required by a full-length commit-SHA pinning policy?

1. octo-tools/build@v2

   A release tag is mutable.

2. octo-tools/build@0123456789abcdef0123456789abcdef01234567 **[CORRECT]**

   This has the full 40-character commit form.

3. octo-tools/build@main

   A branch can move.

4. octo-tools/build@0123456

   An abbreviated SHA is not full-length.

**Concept:** Full-SHA action references

**Authored coaching hints:**

- Distinguish commit identity from named references.
- The policy specifies reference length.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Sin un archivo de bloqueo de dependencias, ¿qué referencia de acción tiene el formato exigido por una política de fijación al SHA completo?

1. octo-tools/build@v2

   Una etiqueta de versión es mutable.

2. octo-tools/build@0123456789abcdef0123456789abcdef01234567 **[CORRECT]**

   Tiene el formato completo de commit de 40 caracteres.

3. octo-tools/build@main

   Una rama puede cambiar.

4. octo-tools/build@0123456

   Un SHA abreviado no es completo.

**Concept:** Referencias de acciones con SHA completo

**Authored coaching hints:**

- Distingue identidad del commit de referencias con nombre.
- La política especifica la longitud de referencia.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Sem um arquivo de bloqueio de dependências, qual referência de ação tem o formato exigido por uma política de fixação ao SHA completo?

1. octo-tools/build@v2

   Uma tag de versão é mutável.

2. octo-tools/build@0123456789abcdef0123456789abcdef01234567 **[CORRECT]**

   Tem o formato completo de commit de 40 caracteres.

3. octo-tools/build@main

   Uma branch pode mudar.

4. octo-tools/build@0123456

   Um SHA abreviado não é completo.

**Concept:** Referências de ações com SHA completo

**Authored coaching hints:**

- Diferencie identidade do commit de referências nomeadas.
- A política especifica o comprimento da referência.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-146:44b605e661608d83647628b8650cfcb2913d596d75d457d0651e616116758a84 -->
## Question 146: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-146`

**Content revision:** `44b605e661608d83647628b8650cfcb2913d596d75d457d0651e616116758a84`

**en review revision:** `94818db3196b44c2914bb7917c40973b4205fc1249dc8dd790565e8a242dc2c5`
**es review revision:** `e0a1e6e8b1a4004bda8ea9f21553cc4f66f7daed8444f99df3d9b57755b63872`
**pt-BR review revision:** `74f582fe7f0532d0bbd08f343cc2bd1bb02032881d1da0a960751370f96048a3`

### English

Which dependency can still use a tag under the enterprise setting 'Require actions to be pinned to a full-length commit SHA'?

1. A GitHub-authored action

   GitHub-authored actions are included.

2. An internal JavaScript action fetched remotely

   Remotely referenced internal actions are included.

3. A reusable workflow **[CORRECT]**

   This policy permits tag references for reusable workflows.

4. A verified Marketplace action

   Verified status does not exempt an action.

**Concept:** Pinning policy coverage

**Authored coaching hints:**

- Actions and workflows are different dependency types.
- Publisher identity does not define the exception.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué dependencia puede seguir usando una etiqueta con la opción empresarial 'Require actions to be pinned to a full-length commit SHA'?

1. Una acción creada por GitHub

   Las acciones de GitHub están incluidas.

2. Una acción JavaScript interna obtenida remotamente

   Las acciones internas referenciadas remotamente están incluidas.

3. Un flujo de trabajo reutilizable **[CORRECT]**

   Esta política permite etiquetas para flujos reutilizables.

4. Una acción de Marketplace de creador verificado

   La verificación no exime a una acción.

**Concept:** Alcance de la política de fijación

**Authored coaching hints:**

- Acciones y flujos son tipos de dependencia distintos.
- La identidad del editor no define la excepción.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual dependência ainda pode usar uma tag com a opção empresarial 'Require actions to be pinned to a full-length commit SHA'?

1. Uma ação criada pelo GitHub

   As ações do GitHub estão incluídas.

2. Uma ação JavaScript interna obtida remotamente

   Ações internas referenciadas remotamente estão incluídas.

3. Um fluxo de trabalho reutilizável **[CORRECT]**

   Essa política permite tags para fluxos reutilizáveis.

4. Uma ação do Marketplace de criador verificado

   A verificação não isenta uma ação.

**Concept:** Abrangência da política de fixação

**Authored coaching hints:**

- Ações e fluxos são tipos de dependência diferentes.
- A identidade do editor não define a exceção.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-147:a75f1c55ab0221f06817690e90bbec22cdc5cda50c1f71d275c457e7db620078 -->
## Question 147: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-147`

**Content revision:** `a75f1c55ab0221f06817690e90bbec22cdc5cda50c1f71d275c457e7db620078`

**en review revision:** `c9351191621bc54152a770af2c0ecb22267ce9832b23c0e0abc41c9af055910b`
**es review revision:** `f38d70553266b244972e60c23293fae80d7fffa6e9e69e47b9e102c8ed14e646`
**pt-BR review revision:** `f3f5f23c658d436d73030fad2f09bcc1876fafd9ff4db075a4e47e1ba15caf39`

### English

Which action reference is outside the enterprise allowlist restrictions on remotely sourced actions?

1. ./.github/actions/check **[CORRECT]**

   Local filesystem actions are not restricted by this policy.

2. octo-tools/check@v1

   This is a remote action reference.

3. actions/checkout@v6

   GitHub ownership does not make it local.

4. partner/check@main

   This also fetches a remote action.

**Concept:** Local action policy boundaries

**Authored coaching hints:**

- Examine where the code is loaded from.
- Repository ownership and filesystem locality differ.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué referencia queda fuera de las restricciones empresariales de la lista de acciones obtenidas remotamente?

1. ./.github/actions/check **[CORRECT]**

   Esta política no restringe las acciones del sistema de archivos local.

2. octo-tools/check@v1

   Esta referencia obtiene una acción remota.

3. actions/checkout@v6

   Ser de GitHub no la convierte en local.

4. partner/check@main

   Esta también obtiene una acción remota.

**Concept:** Límites de políticas para acciones locales

**Authored coaching hints:**

- Examina desde dónde se carga el código.
- Propiedad del repositorio y ubicación local son distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual referência fica fora das restrições empresariais da lista de ações obtidas remotamente?

1. ./.github/actions/check **[CORRECT]**

   Essa política não restringe ações do sistema de arquivos local.

2. octo-tools/check@v1

   Essa referência obtém uma ação remota.

3. actions/checkout@v6

   Ser do GitHub não a torna local.

4. partner/check@main

   Essa também obtém uma ação remota.

**Concept:** Limites de políticas para ações locais

**Authored coaching hints:**

- Examine de onde o código é carregado.
- Propriedade do repositório e localização local diferem.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-148:1a7cc6bf3614830aa3b392b541eac4cbb06a0926c97c35b425a215ea2ed8cedb -->
## Question 148: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-148`

**Content revision:** `1a7cc6bf3614830aa3b392b541eac4cbb06a0926c97c35b425a215ea2ed8cedb`

**en review revision:** `b84d714b6610d930e848174c82e7c9609c09a78ea6b58f0698184a82ae014a4b`
**es review revision:** `229afe1f5ae5a744a99fd82ecb7d45c67f6361a0aa4d3ea748e28a0f517135e7`
**pt-BR review revision:** `fbc5180184e2dd4132e293339e01936881b843b0a6e8418730baf311e136a849`

### English

Where must a reusable workflow file be stored in its repository?

1. .github/actions/build.yml

   This is not the workflow directory.

2. workflow-templates/build.yml

   This is a template directory, not an executable workflow location.

3. .github/workflows/shared/build.yml

   Workflow subdirectories are unsupported.

4. .github/workflows/build.yml **[CORRECT]**

   Reusable workflows belong directly in .github/workflows.

**Concept:** Reusable workflow location

**Authored coaching hints:**

- A reusable workflow is still a workflow.
- Check whether nested directories are supported.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde debe almacenarse un flujo reutilizable dentro de su repositorio?

1. .github/actions/build.yml

   No es el directorio de flujos.

2. workflow-templates/build.yml

   Es un directorio de plantillas, no de flujos ejecutables.

3. .github/workflows/shared/build.yml

   No se admiten subdirectorios de flujos.

4. .github/workflows/build.yml **[CORRECT]**

   Los flujos reutilizables van directamente en .github/workflows.

**Concept:** Ubicación de flujos reutilizables

**Authored coaching hints:**

- Un flujo reutilizable sigue siendo un flujo.
- Comprueba si se permiten directorios anidados.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde um arquivo de fluxo reutilizável deve ficar em seu repositório?

1. .github/actions/build.yml

   Não é o diretório de fluxos.

2. workflow-templates/build.yml

   É um diretório de modelos, não de fluxos executáveis.

3. .github/workflows/shared/build.yml

   Subdiretórios de fluxos não são aceitos.

4. .github/workflows/build.yml **[CORRECT]**

   Fluxos reutilizáveis ficam diretamente em .github/workflows.

**Concept:** Local de fluxos reutilizáveis

**Authored coaching hints:**

- Um fluxo reutilizável continua sendo um fluxo.
- Verifique se diretórios aninhados são aceitos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:admin-149:c329529879e5633a3ea518d973ea3f346db5655c8ea8f9bb33c2dc1827e13cf3 -->
## Question 149: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-149`

**Content revision:** `c329529879e5633a3ea518d973ea3f346db5655c8ea8f9bb33c2dc1827e13cf3`

**en review revision:** `18c65b5ce109ad4a32d8abf5765c485803346deb078a3aaa8677210ba36204d8`
**es review revision:** `ed2ba3d051b28f1eb95b21e91bfd63523ffe6383f4308cb1b994759edf7f7d26`
**pt-BR review revision:** `ef10039c6dd8c8cced40dfeb5a5c4188251c455c814e4717a503ed71a2e0d2b8`

### English

Which trigger exposes a workflow for calls from other workflows?

1. workflow\_call **[CORRECT]**

   It declares the reusable workflow interface.

2. workflow\_dispatch

   It enables manual or API dispatch.

3. workflow\_run

   It reacts to another workflow's run activity.

4. repository\_dispatch

   It receives a custom repository event.

**Concept:** Reusable workflow trigger

**Authored coaching hints:**

- Calling a component differs from dispatching a run.
- Look for an explicit input interface.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué desencadenador permite que otros flujos llamen a un flujo?

1. workflow\_call **[CORRECT]**

   Declara la interfaz del flujo reutilizable.

2. workflow\_dispatch

   Permite iniciarlo manualmente o mediante API.

3. workflow\_run

   Reacciona a la actividad de ejecución de otro flujo.

4. repository\_dispatch

   Recibe un evento personalizado del repositorio.

**Concept:** Desencadenador de flujos reutilizables

**Authored coaching hints:**

- Llamar a un componente difiere de iniciar una ejecución.
- Busca una interfaz explícita de entradas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual gatilho permite que outros fluxos chamem um fluxo?

1. workflow\_call **[CORRECT]**

   Declara a interface do fluxo reutilizável.

2. workflow\_dispatch

   Permite acionamento manual ou pela API.

3. workflow\_run

   Reage à atividade de execução de outro fluxo.

4. repository\_dispatch

   Recebe um evento personalizado do repositório.

**Concept:** Gatilho de fluxos reutilizáveis

**Authored coaching hints:**

- Chamar um componente difere de disparar uma execução.
- Procure uma interface explícita de entradas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:admin-150:c61108fe85a8e8dbcefef7f90957a6faeef550b4d9f6ab49287a3b6e7f6864b3 -->
## Question 150: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-150`

**Content revision:** `c61108fe85a8e8dbcefef7f90957a6faeef550b4d9f6ab49287a3b6e7f6864b3`

**en review revision:** `fce082453d6a303396a51db54f4f2fb5492907a62011bfca8a9d9d7a808756ed`
**es review revision:** `a9590559383bcb3c1f67587af7cdc331fb6b91f5d0ffba670f084b0514c3b8c2`
**pt-BR review revision:** `17983d0bc7410f45a5141ae804874d72ae2cc2e8c54227b3515a4f20ca452b5d`

### English

At which YAML location does a caller reference a reusable workflow?

1. jobs.build.steps\[0\].run

   run executes shell commands in a step.

2. on.workflow\_call

   This declares the called workflow's trigger.

3. jobs.build.uses **[CORRECT]**

   Reusable workflows are called at job level.

4. defaults.run

   defaults configures shell execution defaults.

**Concept:** Job-level workflow calls

**Authored coaching hints:**

- Separate a job from its steps.
- The caller needs a component reference.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿En qué ubicación YAML referencia el flujo llamador un flujo reutilizable?

1. jobs.build.steps\[0\].run

   run ejecuta comandos de shell en un paso.

2. on.workflow\_call

   Declara el desencadenador del flujo llamado.

3. jobs.build.uses **[CORRECT]**

   Los flujos reutilizables se llaman a nivel de trabajo.

4. defaults.run

   defaults configura valores predeterminados del shell.

**Concept:** Llamadas a flujos a nivel de trabajo

**Authored coaching hints:**

- Distingue un trabajo de sus pasos.
- El llamador necesita una referencia al componente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em qual local do YAML o chamador referencia um fluxo reutilizável?

1. jobs.build.steps\[0\].run

   run executa comandos de shell em uma etapa.

2. on.workflow\_call

   Declara o gatilho do fluxo chamado.

3. jobs.build.uses **[CORRECT]**

   Fluxos reutilizáveis são chamados no nível do trabalho.

4. defaults.run

   defaults configura padrões de execução do shell.

**Concept:** Chamadas de fluxos no nível do trabalho

**Authored coaching hints:**

- Diferencie um trabalho de suas etapas.
- O chamador precisa de uma referência ao componente.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:admin-151:3d9dd5b0cb883063f30d5aa59b1b936f7caf1fc250ae2127bbe9d9c6dfcc2777 -->
## Question 151: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-151`

**Content revision:** `3d9dd5b0cb883063f30d5aa59b1b936f7caf1fc250ae2127bbe9d9c6dfcc2777`

**en review revision:** `59a8f48a20b42b542c5a6ae6d853865d5604d89cb3f376c298cb64ecf08b12eb`
**es review revision:** `fcb7a85a0cee0957377867c59de3b8cada1202de4a016e645ddd49bd332b1f6d`
**pt-BR review revision:** `e5a50e78fb1d49b3c2ea30b6f91a56cbc2ee826e2b1e27346c3ec6d4d56d0876`

### English

A reusable workflow declares an input named enabled with type: boolean. Which caller with entry passes the boolean false rather than a string, number, or list?

1. enabled: \[false\]

   A list is not a boolean input value.

2. enabled: false **[CORRECT]**

   The unquoted false value has the required boolean type.

3. enabled: "false"

   Quoting false makes the value a string rather than the declared boolean.

4. enabled: 0

   A numeric zero is not the declared boolean input type.

**Concept:** Values supplied to reusable workflow inputs must match their declared types.

**Authored coaching hints:**

- Read the input's declared type before evaluating its value.
- Consider how YAML quoting and collection syntax affect a value's type.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un workflow reutilizable declara enabled con type: boolean. ¿Qué entrada de with del llamador pasa el booleano false en lugar de una cadena, número o lista?

1. enabled: \[false\]

   Una lista no es un valor de entrada booleano.

2. enabled: false **[CORRECT]**

   El valor false sin comillas tiene el tipo booleano requerido.

3. enabled: "false"

   Las comillas convierten false en una cadena, no en el booleano declarado.

4. enabled: 0

   El cero numérico no es el tipo booleano declarado.

**Concept:** Los valores de entrada de workflows reutilizables deben respetar sus tipos declarados.

**Authored coaching hints:**

- Lee el tipo declarado antes de evaluar el valor.
- Considera cómo las comillas y las colecciones YAML afectan al tipo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um workflow reutilizável declara enabled com type: boolean. Qual entrada with do chamador passa o booleano false, e não uma string, número ou lista?

1. enabled: \[false\]

   Uma lista não é um valor de entrada booleano.

2. enabled: false **[CORRECT]**

   O valor false sem aspas tem o tipo booleano exigido.

3. enabled: "false"

   As aspas transformam false em uma string, não no booleano declarado.

4. enabled: 0

   O zero numérico não corresponde ao tipo booleano declarado.

**Concept:** Valores de entrada de workflows reutilizáveis devem corresponder aos tipos declarados.

**Authored coaching hints:**

- Leia o tipo declarado antes de avaliar o valor.
- Considere como aspas e coleções YAML afetam o tipo do valor.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:admin-152:2ef9e79253613a24931e4fa7eb58b39bf50b3afe226b7fef27d64424be2f5d3e -->
## Question 152: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-152`

**Content revision:** `2ef9e79253613a24931e4fa7eb58b39bf50b3afe226b7fef27d64424be2f5d3e`

**en review revision:** `80e63890a5d9539fede7437bc2247c74d1c1199900c18f05ae267d9ad901129e`
**es review revision:** `85fa9604f3f1dbd9f5f7f4e0e70eb88ee982283be4e5c142b3d49e78241b8eb2`
**pt-BR review revision:** `641ee794ce1252111120a5ed0e5b14c2ee7edfdce2f94b46c90388aa0fbc2ee0`

### English

An organization publishes ci.yml as a workflow template. Which repository and path are correct?

1. Repository .github; .github/workflows/ci.yml

   This stores a workflow, not an organization template.

2. Repository templates; .github/workflows/ci.yml

   The organization template repository must be .github.

3. Repository .github; .github/workflow-templates/ci.yml

   The extra .github directory is incorrect.

4. Repository .github; workflow-templates/ci.yml **[CORRECT]**

   Templates use workflow-templates at the .github repository root.

**Concept:** Organization workflow template location

**Authored coaching hints:**

- Distinguish the repository name from a directory.
- Templates and runnable workflows have different locations.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización publica ci.yml como plantilla de flujo. ¿Qué repositorio y ruta son correctos?

1. Repository .github; .github/workflows/ci.yml

   Almacena un flujo, no una plantilla organizativa.

2. Repository templates; .github/workflows/ci.yml

   El repositorio de plantillas debe llamarse .github.

3. Repository .github; .github/workflow-templates/ci.yml

   El directorio .github adicional es incorrecto.

4. Repository .github; workflow-templates/ci.yml **[CORRECT]**

   Las plantillas usan workflow-templates en la raíz del repositorio .github.

**Concept:** Ubicación de plantillas organizativas

**Authored coaching hints:**

- Distingue el nombre del repositorio de un directorio.
- Las plantillas y los flujos ejecutables tienen ubicaciones distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização publica ci.yml como modelo de fluxo. Qual repositório e caminho estão corretos?

1. Repository .github; .github/workflows/ci.yml

   Armazena um fluxo, não um modelo organizacional.

2. Repository templates; .github/workflows/ci.yml

   O repositório de modelos deve se chamar .github.

3. Repository .github; .github/workflow-templates/ci.yml

   O diretório .github adicional está incorreto.

4. Repository .github; workflow-templates/ci.yml **[CORRECT]**

   Modelos usam workflow-templates na raiz do repositório .github.

**Concept:** Local de modelos organizacionais

**Authored coaching hints:**

- Diferencie o nome do repositório de um diretório.
- Modelos e fluxos executáveis têm locais diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:admin-153:ef73c9c2c2282055084b3f42a9b12a7caf1d8ac5d828d45ed632ab8aab46b7cc -->
## Question 153: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-153`

**Content revision:** `ef73c9c2c2282055084b3f42a9b12a7caf1d8ac5d828d45ed632ab8aab46b7cc`

**en review revision:** `7829cc24060777f5036c740abceef82d36336a11504ff6ff57abb0982d97fb03`
**es review revision:** `88f775fd3cbc0489c475d31f0979e39ea9684f38e9451a9312318f6e0c50050a`
**pt-BR review revision:** `fcd0881a14729b4f992c5240e84871fcd5211cbe386902ae04d66e780bcf38c6`

### English

Which file supplies display metadata for the organization workflow template ci.yml?

1. ci.properties.json **[CORRECT]**

   The basename is followed by .properties.json.

2. ci.metadata.yml

   This is not the documented metadata filename.

3. ci.action.yml

   Action metadata is a different mechanism.

4. ci.properties.yml

   Template metadata uses JSON, not this YAML file.

**Concept:** Workflow template metadata

**Authored coaching hints:**

- Match the template basename.
- Presentation metadata is separate from workflow YAML.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivo proporciona metadatos de presentación para la plantilla organizativa ci.yml?

1. ci.properties.json **[CORRECT]**

   El nombre base va seguido de .properties.json.

2. ci.metadata.yml

   No es el nombre de metadatos documentado.

3. ci.action.yml

   Los metadatos de acciones son otro mecanismo.

4. ci.properties.yml

   Los metadatos de plantillas usan JSON, no este YAML.

**Concept:** Metadatos de plantillas de flujos

**Authored coaching hints:**

- Mantén el nombre base de la plantilla.
- Los metadatos de presentación se separan del YAML del flujo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual arquivo fornece metadados de apresentação para o modelo organizacional ci.yml?

1. ci.properties.json **[CORRECT]**

   O nome-base é seguido de .properties.json.

2. ci.metadata.yml

   Não é o nome de metadados documentado.

3. ci.action.yml

   Metadados de ações são outro mecanismo.

4. ci.properties.yml

   Metadados de modelos usam JSON, não esse YAML.

**Concept:** Metadados de modelos de fluxos

**Authored coaching hints:**

- Mantenha o nome-base do modelo.
- Metadados de apresentação são separados do YAML do fluxo.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:admin-154:08f3098216586f7d93510ca67da853ebb6a0acbc794ef91a8231e22a7ce70776 -->
## Question 154: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-154`

**Content revision:** `08f3098216586f7d93510ca67da853ebb6a0acbc794ef91a8231e22a7ce70776`

**en review revision:** `c755e0ab3a074a1f17dd2adac25b72b26233b4d875279d5b6d018a9c83fb1f47`
**es review revision:** `16fa03b7a4af1bb57b40088fd5920ffebc3328a6129fd1573272c3d1a099fd85`
**pt-BR review revision:** `015cf0e48e83221cbcc74cadc9f8d73b0734d789b2a0ae9c9ff23d7f2a7b41bc`

### English

Which placeholder lets an organization workflow template target each consuming repository's default branch?

1. $\{\{ github.template\_branch \}\}

   This is not a supported template context.

2. $main-branch

   This is not the documented placeholder.

3. $default-branch **[CORRECT]**

   GitHub replaces it when creating the workflow.

4. $\{\{ defaults.branch \}\}

   This is not a supported branch expression.

**Concept:** Template branch substitution

**Authored coaching hints:**

- The value is substituted when creating a workflow.
- Do not confuse template placeholders with runtime expressions.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué marcador permite que una plantilla organizativa use la rama predeterminada de cada repositorio consumidor?

1. $\{\{ github.template\_branch \}\}

   No es un contexto de plantilla admitido.

2. $main-branch

   No es el marcador documentado.

3. $default-branch **[CORRECT]**

   GitHub lo sustituye al crear el flujo.

4. $\{\{ defaults.branch \}\}

   No es una expresión de rama admitida.

**Concept:** Sustitución de ramas en plantillas

**Authored coaching hints:**

- El valor se sustituye al crear el flujo.
- No confundas marcadores de plantilla con expresiones de ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual marcador permite que um modelo organizacional use a branch padrão de cada repositório consumidor?

1. $\{\{ github.template\_branch \}\}

   Não é um contexto de modelo aceito.

2. $main-branch

   Não é o marcador documentado.

3. $default-branch **[CORRECT]**

   O GitHub o substitui ao criar o fluxo.

4. $\{\{ defaults.branch \}\}

   Não é uma expressão de branch aceita.

**Concept:** Substituição de branches em modelos

**Authored coaching hints:**

- O valor é substituído ao criar o fluxo.
- Não confunda marcadores de modelo com expressões de execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates>

<!-- certification-coach-question:admin-155:409ae2ebdc1a3a74a17dd51152ffa0c69de8c21fcaeebf49ce9467729f14e8a7 -->
## Question 155: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-155`

**Content revision:** `409ae2ebdc1a3a74a17dd51152ffa0c69de8c21fcaeebf49ce9467729f14e8a7`

**en review revision:** `4f684f79156e48cd1f32f91dfb2c3e69ce7e7378a5244fae36c49e2e54d4c8b4`
**es review revision:** `cc4a8ef8c4a203ba5b7a697af0655ef34face54ccc8251bfd6bae1dccc619021`
**pt-BR review revision:** `632369b32fd02ae19aa555ba94be1aedbbf6b4e4e9dc5a82a58272aabfae65e6`

### English

Workflow A calls B with contents: read. Can B obtain contents: write by declaring it locally?

1. Yes, if B is private

   Visibility does not elevate permissions.

2. No, a called workflow cannot elevate token permissions **[CORRECT]**

   The caller's permissions are an upper bound.

3. Yes, if B uses a full commit SHA

   Pinning does not grant token privileges.

4. No, reusable workflows cannot use GITHUB\_TOKEN

   Reusable workflows can use GITHUB\_TOKEN.

**Concept:** Permission limits in workflow reuse

**Authored coaching hints:**

- Follow permissions along the call chain.
- Code identity and authorization are separate.

<details>
<summary>Español — same answer key and option order</summary>

### Español

El flujo A llama a B con contents: read. ¿Puede B obtener contents: write declarándolo localmente?

1. Sí, si B es privado

   La visibilidad no eleva permisos.

2. No, un flujo llamado no puede elevar permisos del token **[CORRECT]**

   Los permisos del llamador son el límite superior.

3. Sí, si B usa un SHA completo

   Fijar un commit no concede privilegios.

4. No, los flujos reutilizables no pueden usar GITHUB\_TOKEN

   Los flujos reutilizables pueden usar GITHUB\_TOKEN.

**Concept:** Límites de permisos en flujos reutilizables

**Authored coaching hints:**

- Sigue los permisos por la cadena de llamadas.
- Identidad del código y autorización son distintas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O fluxo A chama B com contents: read. B pode obter contents: write declarando isso localmente?

1. Sim, se B for privado

   A visibilidade não eleva permissões.

2. Não, um fluxo chamado não pode elevar permissões do token **[CORRECT]**

   As permissões do chamador são o limite superior.

3. Sim, se B usar um SHA completo

   Fixar um commit não concede privilégios.

4. Não, fluxos reutilizáveis não podem usar GITHUB\_TOKEN

   Fluxos reutilizáveis podem usar GITHUB\_TOKEN.

**Concept:** Limites de permissões em fluxos reutilizáveis

**Authored coaching hints:**

- Acompanhe permissões pela cadeia de chamadas.
- Identidade do código e autorização são diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:admin-156:6fb7a8c683c8df77cecffbf9a4f1effc71eecf89b2ef287118600f023bdb2641 -->
## Question 156: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-156`

**Content revision:** `6fb7a8c683c8df77cecffbf9a4f1effc71eecf89b2ef287118600f023bdb2641`

**en review revision:** `2162ac8078028d8373eb228c9623e93d0bebcf1531d8559bf7eaa21ec078e21e`
**es review revision:** `0dc703000bf275d36afed9521304e072d1dfd742d9283ca4dd49cf92773ba768`
**pt-BR review revision:** `b6c5e75ad13cbe3ebfa3218a4d233465e34a8b9703684944e33ac8da5bf5c18c`

### English

A passes a secret to reusable workflow B, which calls C. What must B do for C to receive that secret?

1. Pass it to C explicitly or through permitted inheritance **[CORRECT]**

   Secrets move only across direct calls.

2. Declare it only as a workflow-level environment variable in B

   A local environment value is not a secret-passing interface.

3. Grant C contents: read without mapping any secrets

   Content permissions do not pass secret values.

4. Rely on A's secrets: inherit to skip the B-to-C call boundary

   Inheritance applies to direct calls, not every descendant.

**Concept:** Secrets across nested workflow calls

**Authored coaching hints:**

- Trace each edge of the call chain.
- A shared location does not imply shared credentials.

<details>
<summary>Español — same answer key and option order</summary>

### Español

A pasa un secreto al flujo reutilizable B, que llama a C. ¿Qué debe hacer B para que C lo reciba?

1. Pasarlo a C explícitamente o mediante herencia permitida **[CORRECT]**

   Los secretos solo pasan entre llamadas directas.

2. Declararlo solo como variable de entorno de flujo en B

   Un valor de entorno local no es una interfaz para pasar secretos.

3. Conceder contents: read a C sin asignarle secretos

   Los permisos de contenido no pasan valores secretos.

4. Confiar en secrets: inherit de A para saltar el límite entre B y C

   La herencia se aplica a llamadas directas, no a todos los descendientes.

**Concept:** Secretos en llamadas anidadas

**Authored coaching hints:**

- Sigue cada enlace de la cadena de llamadas.
- Compartir ubicación no implica compartir credenciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

A passa um segredo ao fluxo reutilizável B, que chama C. O que B deve fazer para C recebê-lo?

1. Passá-lo a C explicitamente ou por herança permitida **[CORRECT]**

   Segredos passam apenas entre chamadas diretas.

2. Declará-lo apenas como variável de ambiente do fluxo em B

   Um valor de ambiente local não é uma interface para passar segredos.

3. Conceder contents: read a C sem mapear segredos

   Permissões de conteúdo não passam valores secretos.

4. Confiar em secrets: inherit de A para pular o limite entre B e C

   A herança se aplica a chamadas diretas, não a todos os descendentes.

**Concept:** Segredos em chamadas aninhadas

**Authored coaching hints:**

- Acompanhe cada ligação da cadeia de chamadas.
- Compartilhar local não implica compartilhar credenciais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows>

<!-- certification-coach-question:admin-157:bc3b66d1dcdaeb008f7ed1678727aeb203b68cab9ddf15c6e6f9b7d9360a9c23 -->
## Question 157: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-157`

**Content revision:** `bc3b66d1dcdaeb008f7ed1678727aeb203b68cab9ddf15c6e6f9b7d9360a9c23`

**en review revision:** `c4e9bec49ba6aa08a495538dd7b2e73242f3f3ed5a052a41be99e9dccf99a165`
**es review revision:** `8dc4626b80742a3df17335e2fd25b90874c4489679a679b992a84635bd6a3612`
**pt-BR review revision:** `1205efbaf30c656065c3ef19fd0714d07d9d05dd4ff6efa293a5cc7a278e9e2a`

### English

An allowed reusable workflow in a private organization repository is inaccessible to another private repository. Which setting should its administrator check?

1. The runner group's repository access policy

   Runner access does not grant private component access.

2. The calling job's deployment environment protection

   Environment approval does not grant access to the called repository.

3. The called repository's branch protection rules

   Branch protection governs changes, not component sharing.

4. The called repository's Actions access policy **[CORRECT]**

   Private components require an explicit sharing access policy.

**Concept:** Sharing private workflow components

**Authored coaching hints:**

- Check permission to fetch the component.
- Allowing a dependency and sharing its repository are separate.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio privado no puede acceder a un flujo reutilizable permitido de otro repositorio privado de la organización. ¿Qué configuración debe revisar su administrador?

1. La política de acceso a repositorios del grupo de ejecutores

   Acceder al ejecutor no concede acceso al componente privado.

2. La protección del entorno de despliegue del trabajo llamador

   Aprobar el entorno no concede acceso al repositorio llamado.

3. Las reglas de protección de ramas del repositorio llamado

   La protección de ramas controla cambios, no compartir componentes.

4. La política de acceso de Actions del repositorio llamado **[CORRECT]**

   Los componentes privados necesitan una política explícita para compartirlos.

**Concept:** Compartir componentes privados

**Authored coaching hints:**

- Revisa el permiso para obtener el componente.
- Permitir una dependencia y compartir su repositorio son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório privado não acessa um fluxo reutilizável permitido de outro repositório privado da organização. Qual configuração seu administrador deve verificar?

1. A política de acesso a repositórios do grupo de executores

   Acessar o executor não concede acesso ao componente privado.

2. A proteção do ambiente de implantação do trabalho chamador

   Aprovar o ambiente não concede acesso ao repositório chamado.

3. As regras de proteção de branches do repositório chamado

   A proteção de branches controla mudanças, não compartilhar componentes.

4. A política de acesso de Actions do repositório chamado **[CORRECT]**

   Componentes privados exigem uma política explícita de compartilhamento.

**Concept:** Compartilhamento de componentes privados

**Authored coaching hints:**

- Verifique a permissão para obter o componente.
- Permitir uma dependência e compartilhar seu repositório são coisas distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations>

<!-- certification-coach-question:admin-158:77545110d522f466ac5e16f92bc3946d17df01c1dbc3a5eab4e412dfc8c69bd5 -->
## Question 158: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-158`

**Content revision:** `77545110d522f466ac5e16f92bc3946d17df01c1dbc3a5eab4e412dfc8c69bd5`

**en review revision:** `44aa69daeb47f9891e30f6cb83e86aec78c48f67aa0844551e0418e58a2da64b`
**es review revision:** `7484ccc4131cca02186f85835829f51765d79ff6ba77fbb1420868892c92defb`
**pt-BR review revision:** `76ac71df7015fd4d67a2894a93eaadfedb6da4dc2501a8d121dddf5dd6bb0736`

### English

A job only checks out repository files. Which GITHUB\_TOKEN permission is appropriate for that operation?

1. contents: write

   Checkout does not require repository writes.

2. packages: write

   Package writes do not authorize checkout.

3. contents: read **[CORRECT]**

   Reading repository contents supports checkout.

4. issues: read

   Issue access is unrelated to reading files.

**Concept:** Least-privilege job tokens

**Authored coaching hints:**

- Identify the resource being read.
- Grant only what the operation needs.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo solo obtiene archivos del repositorio. ¿Qué permiso de GITHUB\_TOKEN corresponde a esa operación?

1. contents: write

   Obtener archivos no requiere escribir en el repositorio.

2. packages: write

   Escribir paquetes no autoriza obtener archivos.

3. contents: read **[CORRECT]**

   Leer contenido permite obtener los archivos.

4. issues: read

   Acceder a incidencias no permite leer archivos.

**Concept:** Tokens de trabajo con privilegios mínimos

**Authored coaching hints:**

- Identifica el recurso que se lee.
- Concede solo lo necesario para la operación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho apenas obtém arquivos do repositório. Qual permissão de GITHUB\_TOKEN é adequada para essa operação?

1. contents: write

   Obter arquivos não exige escrever no repositório.

2. packages: write

   Escrever pacotes não autoriza obter arquivos.

3. contents: read **[CORRECT]**

   Ler conteúdo permite obter os arquivos.

4. issues: read

   Acesso a issues não permite ler arquivos.

**Concept:** Tokens de trabalho com privilégio mínimo

**Authored coaching hints:**

- Identifique o recurso que será lido.
- Conceda apenas o necessário para a operação.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-159:52462e08847a46776455b41164ed12b66ee85934036867700fd04ff8094862fc -->
## Question 159: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-159`

**Content revision:** `52462e08847a46776455b41164ed12b66ee85934036867700fd04ff8094862fc`

**en review revision:** `2ff832f5732f116b1b2c4af3d40e06f4b5e0362ef264075bbfed4f9f8ee1552d`
**es review revision:** `24dcaccd9ad2aa036a24c3dd75e00905b17734308e5f77c979ecc0d627d7bd6d`
**pt-BR review revision:** `37a5e0aabcec5ef0dfdbc95fca75d1e606de8dead88f00daa9df48fd33a599db`

### English

Which authentication approach avoids storing a long-lived cloud access key as an Actions secret?

1. A repository variable holding the key

   Variables do not eliminate long-lived credentials.

2. OIDC federation with the cloud provider **[CORRECT]**

   The provider issues short-lived credentials after validating identity.

3. A key embedded in a runner label

   Labels are not a credential store.

4. A cached credentials file shared across runs

   Caching credentials preserves and exposes them.

**Concept:** Federated workflow authentication

**Authored coaching hints:**

- Consider credential lifetime and issuance.
- Identity verification can replace a stored access key.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué método evita guardar una clave de acceso permanente de nube como secreto de Actions?

1. Una variable de repositorio que contenga la clave

   Las variables no eliminan credenciales permanentes.

2. Federación OIDC con el proveedor de nube **[CORRECT]**

   El proveedor emite credenciales temporales tras validar la identidad.

3. Una clave incluida en una etiqueta de ejecutor

   Las etiquetas no almacenan credenciales.

4. Un archivo de credenciales en caché entre ejecuciones

   La caché conserva y expone las credenciales.

**Concept:** Autenticación federada de flujos

**Authored coaching hints:**

- Considera duración y emisión de credenciales.
- Verificar identidad puede sustituir una clave almacenada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual método evita guardar uma chave de acesso permanente à nuvem como segredo de Actions?

1. Uma variável de repositório contendo a chave

   Variáveis não eliminam credenciais permanentes.

2. Federação OIDC com o provedor de nuvem **[CORRECT]**

   O provedor emite credenciais temporárias após validar a identidade.

3. Uma chave incluída em um rótulo de executor

   Rótulos não são um armazenamento de credenciais.

4. Um arquivo de credenciais em cache entre execuções

   O cache preserva e expõe as credenciais.

**Concept:** Autenticação federada de fluxos

**Authored coaching hints:**

- Considere a duração e a emissão de credenciais.
- Verificar identidade pode substituir uma chave armazenada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/security/openid-connect>

<!-- certification-coach-question:admin-160:14c29310f1d25da9e6a7152359702a4bbcbd2549cfd54d7b3da35519d9a6ca92 -->
## Question 160: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-160`

**Content revision:** `14c29310f1d25da9e6a7152359702a4bbcbd2549cfd54d7b3da35519d9a6ca92`

**en review revision:** `6ec53acb97f3f128d5621012efbb9a8380e02c36e18e91f1a08c87dd11b6b333`
**es review revision:** `75eba3db2703285005d1d67fbfde9542b53291f5560e58cb74a1586ae5e92ebd`
**pt-BR review revision:** `bcae2087df4dc85bc0cf810eff6576e46a8d927e57908fb6019b5fcf62a3f3a6`

### English

Which job permission allows requesting a GitHub OIDC token for a third-party vault?

1. id-token: write **[CORRECT]**

   It allows fetching an OIDC token, not writing cloud resources.

2. contents: write

   Repository content writes do not enable OIDC.

3. secrets: read

   This is not a GITHUB\_TOKEN permission key.

4. deployments: write

   Deployment writes do not enable OIDC.

**Concept:** OIDC request permission

**Authored coaching hints:**

- Separate token issuance from resource authorization.
- The vault still evaluates its own trust policy.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué permiso del trabajo permite solicitar un token OIDC de GitHub para una bóveda externa?

1. id-token: write **[CORRECT]**

   Permite obtener un token OIDC, no escribir recursos de nube.

2. contents: write

   Escribir contenido no habilita OIDC.

3. secrets: read

   No es una clave de permiso de GITHUB\_TOKEN.

4. deployments: write

   Escribir despliegues no habilita OIDC.

**Concept:** Permiso para solicitar OIDC

**Authored coaching hints:**

- Distingue emitir tokens de autorizar recursos.
- La bóveda evalúa su propia política de confianza.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual permissão do trabalho permite solicitar um token OIDC do GitHub para um cofre externo?

1. id-token: write **[CORRECT]**

   Permite obter um token OIDC, não escrever recursos na nuvem.

2. contents: write

   Escrever conteúdo não habilita OIDC.

3. secrets: read

   Não é uma chave de permissão de GITHUB\_TOKEN.

4. deployments: write

   Escrever implantações não habilita OIDC.

**Concept:** Permissão para solicitar OIDC

**Authored coaching hints:**

- Diferencie emitir tokens de autorizar recursos.
- O cofre avalia sua própria política de confiança.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-hashicorp-vault>

<!-- certification-coach-question:admin-161:54a900ccec4b879db61421b3ccd99351718c6a1b933dbfdc2f4751fd60562717 -->
## Question 161: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-161`

**Content revision:** `54a900ccec4b879db61421b3ccd99351718c6a1b933dbfdc2f4751fd60562717`

**en review revision:** `dffe4c49ac8ef69820c2523df24ae87d0b69d03dc73ec618831f2403e268b68d`
**es review revision:** `8eac3c9cca25bc6e3290f74b2fff7ec67f0ba580edf82acab366249afe4021bb`
**pt-BR review revision:** `68490785ab737ab784ea9c399bd48ed31141ace34b681a85545ccd65df5acdeb`

### English

What should a Vault administrator restrict when trusting GitHub Actions OIDC?

1. Only the workflow's display name

   A display name alone is not a robust trust boundary.

2. Only the runner's temporary hostname

   Temporary hostnames do not bind workflow identity.

3. Only the order of workflow steps

   Step ordering does not authorize vault access.

4. Accepted identity claims and readable secret paths **[CORRECT]**

   Claims bind identity; vault policies limit secret access.

**Concept:** Vault trust and authorization

**Authored coaching hints:**

- Authentication and authorization need separate limits.
- Bind access to the intended workload.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debe restringir un administrador de Vault al confiar en OIDC de GitHub Actions?

1. Solo el nombre visible del flujo

   Un nombre visible no es un límite de confianza sólido.

2. Solo el nombre temporal del host del ejecutor

   Los nombres temporales no vinculan la identidad del flujo.

3. Solo el orden de los pasos

   El orden no autoriza acceso a la bóveda.

4. Las declaraciones de identidad aceptadas y las rutas de secretos legibles **[CORRECT]**

   Las declaraciones vinculan identidad; las políticas limitan los secretos.

**Concept:** Confianza y autorización en Vault

**Authored coaching hints:**

- Autenticación y autorización necesitan límites distintos.
- Vincula el acceso a la carga de trabajo prevista.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que um administrador do Vault deve restringir ao confiar no OIDC do GitHub Actions?

1. Apenas o nome de exibição do fluxo

   Um nome de exibição não é um limite de confiança robusto.

2. Apenas o hostname temporário do executor

   Hostnames temporários não vinculam a identidade do fluxo.

3. Apenas a ordem das etapas do fluxo

   A ordem não autoriza acesso ao cofre.

4. As declarações de identidade aceitas e os caminhos de segredos legíveis **[CORRECT]**

   Declarações vinculam identidade; políticas limitam os segredos.

**Concept:** Confiança e autorização no Vault

**Authored coaching hints:**

- Autenticação e autorização precisam de limites distintos.
- Vincule o acesso à carga de trabalho pretendida.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-hashicorp-vault>

<!-- certification-coach-question:admin-162:1c5b8eedb08e3a6b07cd01937cea714896b688e551c1bd807a5518d91fff1e67 -->
## Question 162: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-162`

**Content revision:** `1c5b8eedb08e3a6b07cd01937cea714896b688e551c1bd807a5518d91fff1e67`

**en review revision:** `812a54a28309c7972f542326fc99600dfb565ffa0e50ca621d378bd47f308d09`
**es review revision:** `27db04860a4d922e35bc1699012b044694ce354328eb0b003494ae6c40127b24`
**pt-BR review revision:** `4a4ac6af7a70292c9ec481e618e81bcb01f25fbb4f69c57a6dbacf54af443209`

### English

An organization secret should be available to only three private repositories on GitHub Enterprise Cloud. Which access policy fits?

1. All repositories

   This also grants other repositories access.

2. Private repositories

   This grants every eligible private repository access.

3. Selected repositories **[CORRECT]**

   An explicit repository selection limits access.

4. Repositories with matching runner labels

   Runner labels do not scope organization secrets.

**Concept:** Organization secret access

**Authored coaching hints:**

- Scope credentials independently of runner routing.
- Choose the smallest repository audience.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un secreto de organización debe estar disponible solo para tres repositorios privados en GitHub Enterprise Cloud. ¿Qué política corresponde?

1. Todos los repositorios

   También permite acceder a otros repositorios.

2. Repositorios privados

   Permite acceder a todos los repositorios privados aptos.

3. Repositorios seleccionados **[CORRECT]**

   La selección explícita limita el acceso.

4. Repositorios con etiquetas de ejecutor coincidentes

   Las etiquetas no delimitan secretos de organización.

**Concept:** Acceso a secretos de organización

**Authored coaching hints:**

- Delimita credenciales independientemente de los ejecutores.
- Elige el menor conjunto de repositorios.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um segredo da organização deve ficar disponível somente para três repositórios privados no GitHub Enterprise Cloud. Qual política atende?

1. Todos os repositórios

   Também concede acesso a outros repositórios.

2. Repositórios privados

   Concede acesso a todos os repositórios privados elegíveis.

3. Repositórios selecionados **[CORRECT]**

   A seleção explícita limita o acesso.

4. Repositórios com rótulos de executor correspondentes

   Rótulos não delimitam segredos da organização.

**Concept:** Acesso a segredos da organização

**Authored coaching hints:**

- Delimite credenciais independentemente dos executores.
- Escolha o menor conjunto de repositórios.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:admin-163:3ec617fc468653c1ea491acd4ad02a76c1d9c9939637154093efb8984d27e150 -->
## Question 163: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-163`

**Content revision:** `3ec617fc468653c1ea491acd4ad02a76c1d9c9939637154093efb8984d27e150`

**en review revision:** `b8d47ba91f6d1254de63e8438179ba01fb9178bdc68dfa93a92126dc5537da22`
**es review revision:** `48b434e8765bf57aeabca9d57e0ffb731dffe3db59565559e895096e38476e15`
**pt-BR review revision:** `b084f34d23b97beda6ec95f3c90ed6a6f90fcf26b6a0c403f711ef2fdbb686cb`

### English

DEPLOY\_KEY exists at organization, repository, and production environment scope. Which value does a job referencing production receive?

1. The organization value

   A lower applicable scope overrides it.

2. The environment value **[CORRECT]**

   Environment secrets take precedence over repository and organization secrets.

3. The repository value

   The environment overrides this value.

4. The most recently created value

   Creation order does not determine precedence.

**Concept:** Secret precedence

**Authored coaching hints:**

- Find the applicable scopes for this job.
- Precedence is structural, not chronological.

<details>
<summary>Español — same answer key and option order</summary>

### Español

DEPLOY\_KEY existe en la organización, el repositorio y el entorno production. ¿Qué valor recibe un trabajo que referencia production?

1. El valor de la organización

   Un ámbito inferior aplicable lo sustituye.

2. El valor del entorno **[CORRECT]**

   El entorno tiene prioridad sobre repositorio y organización.

3. El valor del repositorio

   El entorno sustituye este valor.

4. El valor creado más recientemente

   El orden de creación no determina la prioridad.

**Concept:** Prioridad de secretos

**Authored coaching hints:**

- Identifica los ámbitos aplicables al trabajo.
- La prioridad depende de la estructura, no de la fecha.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

DEPLOY\_KEY existe na organização, no repositório e no ambiente production. Qual valor um trabalho que referencia production recebe?

1. O valor da organização

   Um escopo inferior aplicável o substitui.

2. O valor do ambiente **[CORRECT]**

   O ambiente tem precedência sobre repositório e organização.

3. O valor do repositório

   O ambiente substitui esse valor.

4. O valor criado mais recentemente

   A ordem de criação não determina a precedência.

**Concept:** Precedência de segredos

**Authored coaching hints:**

- Identifique os escopos aplicáveis ao trabalho.
- A precedência depende da estrutura, não da data.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secrets>

<!-- certification-coach-question:admin-164:b2f9ca59a3090e03c6be0f7012023c695a52eadddc276eb945d75f67bc857a40 -->
## Question 164: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-164`

**Content revision:** `b2f9ca59a3090e03c6be0f7012023c695a52eadddc276eb945d75f67bc857a40`

**en review revision:** `65026c91e3ce810ce5c4dc7a7aaad2b54241860bcabc8fea22d6775049ada465`
**es review revision:** `6764e7addf097a50041f0e33247b39408f63d0a680db148e9bc6d19d968a1973`
**pt-BR review revision:** `e1cde5d7c163f119a47b72580632ef9e1db6339d625eddf1c11ed9a4bbaf0f46`

### English

In a private GitHub Enterprise Cloud repository, a production job must wait for human approval before receiving deployment secrets. Which mechanism fits?

1. Environment secrets with required reviewers **[CORRECT]**

   Environment protection can gate access to its secrets.

2. Repository secrets with longer names

   Names do not create an approval gate.

3. Organization secrets restricted to private repositories

   Repository visibility does not provide per-job approval.

4. Masked variables in a workflow template

   Masking does not control job approval.

**Concept:** Gating deployment credentials

**Authored coaching hints:**

- Choose a scope with deployment protection.
- Storage and release of credentials are different controls.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un repositorio privado de GitHub Enterprise Cloud, un trabajo de producción debe esperar aprobación humana antes de recibir secretos de despliegue. ¿Qué mecanismo corresponde?

1. Secretos de entorno con revisores obligatorios **[CORRECT]**

   La protección del entorno puede condicionar el acceso a sus secretos.

2. Secretos de repositorio con nombres más largos

   Los nombres no crean una aprobación.

3. Secretos de organización limitados a repositorios privados

   La visibilidad no da aprobación por trabajo.

4. Variables enmascaradas en una plantilla de flujo

   Enmascarar no controla la aprobación del trabajo.

**Concept:** Control de entrega de credenciales

**Authored coaching hints:**

- Elige un ámbito con protección de despliegue.
- Almacenar y entregar credenciales son controles distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um repositório privado do GitHub Enterprise Cloud, um trabalho de produção deve esperar aprovação humana antes de receber segredos de implantação. Qual mecanismo atende?

1. Segredos de ambiente com revisores obrigatórios **[CORRECT]**

   A proteção do ambiente pode condicionar o acesso aos seus segredos.

2. Segredos de repositório com nomes mais longos

   Nomes não criam uma aprovação.

3. Segredos da organização restritos a repositórios privados

   A visibilidade não fornece aprovação por trabalho.

4. Variáveis mascaradas em um modelo de fluxo

   Mascarar não controla a aprovação do trabalho.

**Concept:** Controle da entrega de credenciais

**Authored coaching hints:**

- Escolha um escopo com proteção de implantação.
- Armazenar e liberar credenciais são controles distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-165:05c8b44256e4ff61572bcc6e57bbf7b131ef8063b0b8a2c62431f397960ab097 -->
## Question 165: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-165`

**Content revision:** `05c8b44256e4ff61572bcc6e57bbf7b131ef8063b0b8a2c62431f397960ab097`

**en review revision:** `07eca87196f5c89ceba926e854cebcee10b8e30d39d54a1c2501380b73a6e793`
**es review revision:** `ea966a792c8130972ddcdfbb44f2d43495f056d02ef00f899c1f01b80025a622`
**pt-BR review revision:** `19183ad476c9ce7775589ba3392024f71b9e47f6c31764405680b738f25e4477`

### English

With default fork settings, why does a pull\_request workflow from a public fork lack the base repository's deployment secret?

1. Secrets require a larger runner

   Runner size does not grant secret access.

2. Fork authors must rename the secret

   Renaming does not change the trust boundary.

3. Public repositories cannot store secrets

   Public repositories can store Actions secrets.

4. Fork pull requests do not receive these secrets by default **[CORRECT]**

   Withholding secrets protects against untrusted fork code.

**Concept:** Fork workflow secret boundaries

**Authored coaching hints:**

- Consider the source of the submitted code.
- A triggered run does not imply credential access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con la configuración predeterminada de bifurcaciones, ¿por qué un flujo pull\_request desde una bifurcación pública no recibe el secreto de despliegue del repositorio base?

1. Los secretos exigen un ejecutor de mayor tamaño

   El tamaño del ejecutor no concede secretos.

2. El autor debe cambiar el nombre del secreto

   Cambiar nombres no cambia el límite de confianza.

3. Los repositorios públicos no almacenan secretos

   Los repositorios públicos pueden guardar secretos de Actions.

4. Las solicitudes desde bifurcaciones no reciben estos secretos por defecto **[CORRECT]**

   No entregar secretos protege frente a código no confiable.

**Concept:** Límites de secretos en bifurcaciones

**Authored coaching hints:**

- Considera el origen del código enviado.
- Iniciar una ejecución no implica acceso a credenciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com as configurações padrão de forks, por que um fluxo pull\_request de um fork público não recebe o segredo de implantação do repositório base?

1. Segredos exigem um executor maior

   O tamanho do executor não concede segredos.

2. O autor deve renomear o segredo

   Renomear não muda o limite de confiança.

3. Repositórios públicos não armazenam segredos

   Repositórios públicos podem guardar segredos de Actions.

4. Pull requests de forks não recebem esses segredos por padrão **[CORRECT]**

   Não fornecer segredos protege contra código não confiável.

**Concept:** Limites de segredos em forks

**Authored coaching hints:**

- Considere a origem do código enviado.
- Iniciar uma execução não implica acesso a credenciais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:admin-166:4be54ac1803f8d46558f04d71a46a29c98b5c27768b7704988e3b006dcea96ab -->
## Question 166: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-166`

**Content revision:** `4be54ac1803f8d46558f04d71a46a29c98b5c27768b7704988e3b006dcea96ab`

**en review revision:** `e402109c69dce3815f3e6f37b22b4fca85b22e4575ffaad28ea414d85cf21702`
**es review revision:** `1b125cf015520e3a62a0e5db5b4b9e4db12911ccd91854c60fbffc03f37213d8`
**pt-BR review revision:** `e96056383391628c40004d9a77dea04405117617cd8be9ccc82b005a36699207`

### English

What does an expression referencing an unavailable Actions secret evaluate to?

1. The secret's name

   GitHub does not substitute the name.

2. The organization owner's token

   There is no owner-token fallback.

3. An empty string **[CORRECT]**

   An unset secret reference returns an empty string.

4. The previous run's value

   Previous values are not a fallback.

**Concept:** Unavailable secret behavior

**Authored coaching hints:**

- Missing credentials need explicit validation.
- Do not assume automatic fallback values.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué devuelve una expresión que referencia un secreto de Actions no disponible?

1. El nombre del secreto

   GitHub no sustituye el nombre.

2. El token del propietario de la organización

   No se usa el token del propietario como alternativa.

3. Una cadena vacía **[CORRECT]**

   Un secreto no definido devuelve una cadena vacía.

4. El valor de la ejecución anterior

   Los valores anteriores no son una alternativa.

**Concept:** Comportamiento de secretos no disponibles

**Authored coaching hints:**

- Las credenciales ausentes requieren validación explícita.
- No supongas valores alternativos automáticos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que uma expressão que referencia um segredo de Actions indisponível retorna?

1. O nome do segredo

   O GitHub não substitui pelo nome.

2. O token do proprietário da organização

   Não há alternativa com o token do proprietário.

3. Uma string vazia **[CORRECT]**

   Um segredo não definido retorna uma string vazia.

4. O valor da execução anterior

   Valores anteriores não são uma alternativa.

**Concept:** Comportamento de segredos indisponíveis

**Authored coaching hints:**

- Credenciais ausentes exigem validação explícita.
- Não presuma valores alternativos automáticos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:admin-167:38c65342f91ca5522a4f8930a6d7f375c0b8f4aa0f520acb09ae3cf03eb55ad9 -->
## Question 167: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-167`

**Content revision:** `38c65342f91ca5522a4f8930a6d7f375c0b8f4aa0f520acb09ae3cf03eb55ad9`

**en review revision:** `6b86e24a17087cf2b1d66a6cd6473f0bc0a29f82a14402521c4c47649c19df34`
**es review revision:** `028db2cef6a95844a7b121d2e88740a8863b3bf35f40f23e3d2fa80e9dfa82ad`
**pt-BR review revision:** `ec0cfbd3a2a06fb0b237a244dd5b1a853f2021c55916c779750d416e3faf4452`

### English

A workflow transforms a secret into a new sensitive value. What should it do before logging could expose that value?

1. Rely on automatic masking of the original secret

   Redaction of transformed values is not guaranteed.

2. Register the transformed value for masking **[CORRECT]**

   Sensitive derived values need their own masking registration.

3. Mask only after the transformed value first appears in the log

   Masking must be in place before potential disclosure.

4. Rely on disabling debug logging to hide all sensitive output

   Sensitive output can appear in ordinary logs too.

**Concept:** Limits of automatic masking

**Authored coaching hints:**

- Transformations change the text matched by redaction.
- Prevent disclosure rather than testing with a real secret.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un flujo transforma un secreto en otro valor sensible. ¿Qué debe hacer antes de que los registros puedan exponerlo?

1. Confiar en el enmascaramiento automático del secreto original

   No se garantiza ocultar valores transformados.

2. Registrar el valor transformado para enmascararlo **[CORRECT]**

   Los valores derivados requieren su propio registro de enmascaramiento.

3. Enmascarar solo tras aparecer el valor transformado en el registro

   El enmascaramiento debe preceder a una posible divulgación.

4. Confiar en desactivar depuración para ocultar toda salida sensible

   Los registros normales también pueden mostrar datos sensibles.

**Concept:** Límites del enmascaramiento automático

**Authored coaching hints:**

- Las transformaciones cambian el texto buscado al ocultar.
- Prevén la exposición sin probar con secretos reales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um fluxo transforma um segredo em outro valor sensível. O que deve fazer antes que os logs possam expô-lo?

1. Confiar no mascaramento automático do segredo original

   Não há garantia de ocultar valores transformados.

2. Registrar o valor transformado para mascaramento **[CORRECT]**

   Valores derivados exigem seu próprio registro de mascaramento.

3. Mascarar somente após o valor transformado aparecer no log

   O mascaramento deve preceder uma possível divulgação.

4. Confiar em desativar depuração para ocultar toda saída sensível

   Logs normais também podem mostrar dados sensíveis.

**Concept:** Limites do mascaramento automático

**Authored coaching hints:**

- Transformações mudam o texto procurado pela ocultação.
- Previna a exposição sem testar com segredos reais.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-168:73cca646eec9dd6603608956f59312bb05beab697eef719f5294051e9bd99973 -->
## Question 168: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-168`

**Content revision:** `73cca646eec9dd6603608956f59312bb05beab697eef719f5294051e9bd99973`

**en review revision:** `0284e1a0f5636640e8bef600f32c62b3e6e9d88ed4916ecc29d75dda274718bf`
**es review revision:** `3aac71e57d249e59d8d1590abc7b0698a24b084dce8193df2c36c299dd073731`
**pt-BR review revision:** `b79b4ec4010c1889e7b52263d9d07f8af553271e912d9c62b302325d71bb2a18`

### English

An Actions log contains an unredacted cloud credential. Which response addresses both exposure and continued access?

1. Delete the exposed log and rotate the credential **[CORRECT]**

   Log removal limits exposure; rotation invalidates the leaked credential.

2. Rename the secret and retain the same credential

   Renaming does not invalidate a credential.

3. Rerun the job with debug logging disabled

   A rerun does not revoke the exposed credential.

4. Reduce artifact retention without changing the credential

   Artifact retention does not revoke credentials or remove this log.

**Concept:** Responding to workflow credential exposure

**Authored coaching hints:**

- Consider who may already possess the disclosed value.
- How long could that value remain usable?

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un registro de Actions contiene una credencial de nube sin ocultar. ¿Qué respuesta aborda exposición y acceso posterior?

1. Eliminar el registro expuesto y rotar la credencial **[CORRECT]**

   Eliminar limita exposición; rotar invalida la credencial filtrada.

2. Renombrar el secreto y conservar la misma credencial

   Renombrar no invalida una credencial.

3. Repetir el trabajo sin registros de depuración

   Repetir no revoca la credencial expuesta.

4. Reducir la retención de artefactos sin cambiar la credencial

   La retención no revoca credenciales ni elimina este registro.

**Concept:** Respuesta a exposición de credenciales

**Authored coaching hints:**

- Considera quién podría tener ya el valor divulgado.
- ¿Cuánto tiempo podría seguir siendo utilizable?

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um log de Actions contém uma credencial de nuvem sem ocultação. Qual resposta trata exposição e acesso posterior?

1. Excluir o log exposto e rotacionar a credencial **[CORRECT]**

   Excluir limita a exposição; rotacionar invalida a credencial vazada.

2. Renomear o segredo e manter a mesma credencial

   Renomear não invalida uma credencial.

3. Executar novamente sem logs de depuração

   Reexecutar não revoga a credencial exposta.

4. Reduzir a retenção de artefatos sem mudar a credencial

   Retenção não revoga credenciais nem exclui esse log.

**Concept:** Resposta à exposição de credenciais

**Authored coaching hints:**

- Considere quem já pode ter o valor divulgado.
- Por quanto tempo esse valor poderia continuar utilizável?

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-169:169841848f558032046625a165008a304e1b3eb8a032f7049bc4f63f819f1ee2 -->
## Question 169: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-169`

**Content revision:** `169841848f558032046625a165008a304e1b3eb8a032f7049bc4f63f819f1ee2`

**en review revision:** `b10803ab1bce9f2888b869df7b37189d065d5d60b41f0229806fc9c289f21162`
**es review revision:** `9613bab5f0f92df2175e33a61f2827bf26f673ed573ed241040b68ee075f1787`
**pt-BR review revision:** `c9c1cc2111aeea1d40fbac2941e06edc80ebe6d9d6402303de40f7256bbda881`

### English

Using GitHub CLI in a repository, which command creates or updates the production environment's API\_KEY secret?

1. gh variable set API\_KEY --env production

   This stores a variable, not an encrypted secret.

2. gh secret set API\_KEY --org production

   This targets an organization named production.

3. gh secret set API\_KEY --repo production

   This targets a repository, not an environment.

4. gh secret set API\_KEY --env production **[CORRECT]**

   The --env flag selects the environment secret scope.

**Concept:** CLI secret scope selection

**Authored coaching hints:**

- Distinguish a variable from a secret.
- The target is inside a repository.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Con GitHub CLI en un repositorio, ¿qué comando crea o actualiza el secreto API\_KEY del entorno production?

1. gh variable set API\_KEY --env production

   Guarda una variable, no un secreto cifrado.

2. gh secret set API\_KEY --org production

   Apunta a una organización llamada production.

3. gh secret set API\_KEY --repo production

   Apunta a un repositorio, no a un entorno.

4. gh secret set API\_KEY --env production **[CORRECT]**

   La opción --env selecciona el ámbito de entorno.

**Concept:** Selección de ámbito de secretos con CLI

**Authored coaching hints:**

- Distingue variable de secreto.
- El destino está dentro de un repositorio.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Com o GitHub CLI em um repositório, qual comando cria ou atualiza o segredo API\_KEY do ambiente production?

1. gh variable set API\_KEY --env production

   Guarda uma variável, não um segredo criptografado.

2. gh secret set API\_KEY --org production

   Aponta para uma organização chamada production.

3. gh secret set API\_KEY --repo production

   Aponta para um repositório, não um ambiente.

4. gh secret set API\_KEY --env production **[CORRECT]**

   A opção --env seleciona o escopo do ambiente.

**Concept:** Seleção de escopo de segredos pela CLI

**Authored coaching hints:**

- Diferencie variável de segredo.
- O destino está dentro de um repositório.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets>

<!-- certification-coach-question:admin-170:19f881def999a87528da69000516717f4d6c1d3e0f2566597e64664bfbf5eb14 -->
## Question 170: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-170`

**Content revision:** `19f881def999a87528da69000516717f4d6c1d3e0f2566597e64664bfbf5eb14`

**en review revision:** `66a536b3c578c06e7659bb08fcc68b28ea8e87a2f892e4722d78f5aededa9614`
**es review revision:** `1c3508dd86d00314f4c140530810b5b4ec3013e04ddda6b551a87e8c46884c33`
**pt-BR review revision:** `ca0495793f9b3bb0b972c2b26968a877025cae8a6065763e7bf6cf05724573d0`

### English

Which runner type gives an administrator direct control over physical hardware and installed operating-system software?

1. A standard GitHub-hosted runner

   GitHub manages the underlying hosted machine.

2. A GitHub-hosted larger runner

   More hosted resources do not transfer physical hardware control.

3. A self-hosted runner **[CORRECT]**

   The customer deploys and administers the machine.

4. A GitHub-hosted runner using a custom image

   A custom image does not transfer physical hardware administration.

**Concept:** Runner hosting responsibilities

**Authored coaching hints:**

- Distinguish machine ownership from resource size.
- Control brings maintenance responsibilities.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué tipo de ejecutor da al administrador control directo del hardware físico y del software del sistema operativo instalado?

1. Un ejecutor estándar hospedado por GitHub

   GitHub administra la máquina hospedada.

2. Un ejecutor de mayor tamaño hospedado por GitHub

   Más recursos hospedados no transfieren control del hardware.

3. Un ejecutor autohospedado **[CORRECT]**

   El cliente despliega y administra la máquina.

4. Un ejecutor hospedado por GitHub con imagen personalizada

   Una imagen personalizada no transfiere administración del hardware físico.

**Concept:** Responsabilidades según alojamiento del ejecutor

**Authored coaching hints:**

- Distingue propiedad de la máquina de tamaño de recursos.
- El control implica responsabilidades de mantenimiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual tipo de executor dá ao administrador controle direto do hardware físico e do software do sistema operacional instalado?

1. Um executor padrão hospedado pelo GitHub

   O GitHub administra a máquina hospedada.

2. Um executor maior hospedado pelo GitHub

   Mais recursos hospedados não transferem controle do hardware.

3. Um executor auto-hospedado **[CORRECT]**

   O cliente implanta e administra a máquina.

4. Um executor hospedado pelo GitHub com imagem personalizada

   Uma imagem personalizada não transfere administração do hardware físico.

**Concept:** Responsabilidades conforme a hospedagem do executor

**Authored coaching hints:**

- Diferencie propriedade da máquina de tamanho dos recursos.
- Controle traz responsabilidades de manutenção.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:admin-171:dd063f5e9cadf0ca42b94a0cf61175a01b6184335137b9f9495e374fa739a93e -->
## Question 171: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-171`

**Content revision:** `dd063f5e9cadf0ca42b94a0cf61175a01b6184335137b9f9495e374fa739a93e`

**en review revision:** `5723aef91b754c16232aacd5eb5180b356ab316c070ac67cca784e51976b7169`
**es review revision:** `83f9904dec3c74705576a26101fd227b258f3e12fdb0cfc72e58fa974892c960`
**pt-BR review revision:** `6021c787c23256a6f1546161bc83a0f1241b4cf7f472621080399e6a74374c3c`

### English

A self-hosted runner application updates automatically. Who remains responsible for patching its host operating system?

1. GitHub's hosted-runner image team

   The hosted-image team does not administer this machine.

2. The administrator of the self-hosted machine **[CORRECT]**

   Runner application updates do not patch the host OS.

3. The maintainer of the checkout action

   An action maintainer does not manage the host.

4. The repository's dependency update service

   Dependency updates do not administer the host OS.

**Concept:** Runner application versus operating-system updates

**Authored coaching hints:**

- Identify the component being updated.
- Hosting ownership determines OS maintenance.

<details>
<summary>Español — same answer key and option order</summary>

### Español

La aplicación de un ejecutor autohospedado se actualiza automáticamente. ¿Quién sigue siendo responsable de aplicar parches a su sistema operativo?

1. El equipo de imágenes hospedadas de GitHub

   El equipo de imágenes no administra esta máquina.

2. El administrador de la máquina autohospedada **[CORRECT]**

   Actualizar la aplicación no aplica parches al sistema operativo.

3. El responsable de la acción de checkout

   El responsable de una acción no administra el host.

4. El servicio de actualización de dependencias del repositorio

   Las actualizaciones de dependencias no administran el sistema operativo.

**Concept:** Actualizaciones de aplicación y sistema operativo

**Authored coaching hints:**

- Identifica qué componente se actualiza.
- La propiedad del alojamiento determina el mantenimiento del sistema.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O aplicativo de um executor auto-hospedado é atualizado automaticamente. Quem continua responsável por aplicar patches no sistema operacional?

1. A equipe de imagens hospedadas do GitHub

   A equipe de imagens não administra essa máquina.

2. O administrador da máquina auto-hospedada **[CORRECT]**

   Atualizar o aplicativo não aplica patches no sistema operacional.

3. O responsável pela ação de checkout

   O responsável por uma ação não administra o host.

4. O serviço de atualização de dependências do repositório

   Atualizações de dependências não administram o sistema operacional.

**Concept:** Atualizações do aplicativo e do sistema operacional

**Authored coaching hints:**

- Identifique qual componente é atualizado.
- A propriedade da hospedagem determina a manutenção do sistema.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:admin-172:11e4cddf26b8c5bdfaea46b557553fc2104b01ff97b0557468e7de6a33bab19b -->
## Question 172: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-172`

**Content revision:** `11e4cddf26b8c5bdfaea46b557553fc2104b01ff97b0557468e7de6a33bab19b`

**en review revision:** `5aec41f3d0bb4830b248d8a3b2b243be6f9ee9103caa77fe39c2a65061e3c06e`
**es review revision:** `659e4a948824b9fb7d4e9345f90f880942bf8b01e8864eda6a672b60b7c03cad`
**pt-BR review revision:** `5f0457dc85f7e049473e817551de669b41c26ed85d137880235e4a4cb9dadeb2`

### English

An organization owner needs to restrict a self-hosted runner pool to selected repositories. Which feature provides the access boundary?

1. Runner groups **[CORRECT]**

   Groups have repository access policies.

2. Runner display names

   Names identify runners but do not grant access.

3. Workflow run names

   Run names are descriptive metadata.

4. Job output names

   Outputs pass data rather than control runner access.

**Concept:** Runner group authorization

**Authored coaching hints:**

- Routing and authorization are separate concerns.
- Look for a policy-bearing collection of runners.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un propietario de organización necesita restringir un conjunto de ejecutores autohospedados a repositorios seleccionados. ¿Qué función proporciona ese límite?

1. Grupos de ejecutores **[CORRECT]**

   Los grupos tienen políticas de acceso por repositorio.

2. Nombres visibles de ejecutores

   Los nombres identifican ejecutores, pero no conceden acceso.

3. Nombres de ejecuciones de flujos

   Los nombres de ejecución son metadatos descriptivos.

4. Nombres de salidas de trabajos

   Las salidas transmiten datos, no controlan el acceso.

**Concept:** Autorización mediante grupos de ejecutores

**Authored coaching hints:**

- Asignación y autorización son cuestiones distintas.
- Busca una colección de ejecutores con políticas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um proprietário da organização precisa restringir um conjunto de executores auto-hospedados a repositórios selecionados. Qual recurso fornece esse limite?

1. Grupos de executores **[CORRECT]**

   Grupos têm políticas de acesso por repositório.

2. Nomes de exibição dos executores

   Nomes identificam executores, mas não concedem acesso.

3. Nomes de execuções de fluxos

   Nomes de execução são metadados descritivos.

4. Nomes de saídas dos trabalhos

   Saídas transmitem dados, não controlam acesso.

**Concept:** Autorização por grupos de executores

**Authored coaching hints:**

- Roteamento e autorização são questões distintas.
- Procure uma coleção de executores com políticas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:admin-173:5b2009fd6be42225dbcf8a1e20fff65b565fa7176486146ee02e08946d9f1740 -->
## Question 173: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-173`

**Content revision:** `5b2009fd6be42225dbcf8a1e20fff65b565fa7176486146ee02e08946d9f1740`

**en review revision:** `cb07f5a5ecc4f4f83a5acff322b369afb1bf80831bd97c6e4447d7140cb37d28`
**es review revision:** `133c453ae421aaad6bd3fb197952a2a62ed1540b93a25215e4013ff4765a9670`
**pt-BR review revision:** `7fe945790125505ab46c85b2a00f12b79fe29108a95da1f8c1c0c3d477644101`

### English

Which workflow key selects a runner using labels such as self-hosted and linux?

1. needs

   needs declares job dependencies.

2. environment

   environment selects a deployment environment.

3. permissions

   permissions scopes the job token.

4. runs-on **[CORRECT]**

   runs-on selects matching runner capabilities.

**Concept:** Runner label selection

**Authored coaching hints:**

- Identify the job's execution platform.
- Do not confuse deployment scope with machine selection.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué clave del flujo selecciona un ejecutor mediante etiquetas como self-hosted y linux?

1. needs

   needs declara dependencias entre trabajos.

2. environment

   environment selecciona un entorno de despliegue.

3. permissions

   permissions delimita el token del trabajo.

4. runs-on **[CORRECT]**

   runs-on selecciona las capacidades del ejecutor.

**Concept:** Selección mediante etiquetas de ejecutor

**Authored coaching hints:**

- Identifica la plataforma de ejecución del trabajo.
- No confundas entorno de despliegue con selección de máquina.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual chave do fluxo seleciona um executor por rótulos como self-hosted e linux?

1. needs

   needs declara dependências entre trabalhos.

2. environment

   environment seleciona um ambiente de implantação.

3. permissions

   permissions delimita o token do trabalho.

4. runs-on **[CORRECT]**

   runs-on seleciona as capacidades do executor.

**Concept:** Seleção por rótulos de executor

**Authored coaching hints:**

- Identifique a plataforma de execução do trabalho.
- Não confunda ambiente de implantação com seleção da máquina.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-174:019bdf80d0e99c09a9923ed55555908afc8dd5dece4d440300d26282d1646b89 -->
## Question 174: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-174`

**Content revision:** `019bdf80d0e99c09a9923ed55555908afc8dd5dece4d440300d26282d1646b89`

**en review revision:** `1ffebd2e9950ec27c9802b4f8e5646cc97b249092275352897e94040bb21352f`
**es review revision:** `434b7850e59b17565dcb267c03dae169a28e2f6bdfcac6138ba918b504b8ed55`
**pt-BR review revision:** `505a838d9f89f919702e4468c732b247bfcf65de15f766230587fac0a1f7b57a`

### English

A non-ARC job specifies runs-on: \[self-hosted, linux, gpu\]. Which runner matches?

1. Any runner with at least one listed label

   The label list is not an OR condition.

2. Any Linux runner, regardless of its other labels

   The other requested labels must also match.

3. An accessible runner with all three labels **[CORRECT]**

   All requested labels must match an accessible runner.

4. Any runner in a group named gpu

   A group name does not substitute for matching labels.

**Concept:** Combining runner labels

**Authored coaching hints:**

- Determine whether the constraints are cumulative.
- Group access still applies to matching machines.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo sin ARC especifica runs-on: \[self-hosted, linux, gpu\]. ¿Qué ejecutor coincide?

1. Cualquiera con al menos una etiqueta indicada

   La lista no es una condición OR.

2. Cualquier ejecutor Linux, sin importar sus otras etiquetas

   Las demás etiquetas también deben coincidir.

3. Un ejecutor accesible con las tres etiquetas **[CORRECT]**

   Deben coincidir todas las etiquetas en un ejecutor accesible.

4. Cualquier ejecutor de un grupo llamado gpu

   El nombre del grupo no sustituye las etiquetas.

**Concept:** Combinación de etiquetas de ejecutor

**Authored coaching hints:**

- Determina si las restricciones son acumulativas.
- El acceso al grupo sigue siendo necesario.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho sem ARC especifica runs-on: \[self-hosted, linux, gpu\]. Qual executor corresponde?

1. Qualquer um com pelo menos um rótulo listado

   A lista não é uma condição OR.

2. Qualquer executor Linux, independentemente dos outros rótulos

   Os demais rótulos também precisam corresponder.

3. Um executor acessível com os três rótulos **[CORRECT]**

   Todos os rótulos devem corresponder em um executor acessível.

4. Qualquer executor de um grupo chamado gpu

   O nome do grupo não substitui os rótulos.

**Concept:** Combinação de rótulos de executor

**Authored coaching hints:**

- Determine se as restrições são cumulativas.
- O acesso ao grupo continua necessário.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-175:cafbe63bd5c861121212ac1d1369027642516ef92a8e0c9cbd026fad294495b8 -->
## Question 175: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-175`

**Content revision:** `cafbe63bd5c861121212ac1d1369027642516ef92a8e0c9cbd026fad294495b8`

**en review revision:** `0e98e2f54c7ffcaf2696d5f9c832a21e2c76c38bd646ea48adc187295c93df42`
**es review revision:** `edfb941262f5804405dee7af34dc51fae0cd8a8a0c9fadf755e475fb736099b7`
**pt-BR review revision:** `181791dd6a4b154b83ecae5916118b2c4a5ad860f599092a1b08953d224b5a37`

### English

A self-hosted runner is registered directly to repository alpha. Which repositories can schedule jobs on that registration?

1. Every repository owned by alpha's organization

   Repository registrations are not organization-wide.

2. Only repository alpha **[CORRECT]**

   Repository-level runners are dedicated to that repository.

3. Every private repository in the enterprise

   Enterprise sharing requires a different registration scope.

4. Any repository sharing alpha's runner labels

   Matching labels do not grant cross-repository access.

**Concept:** Runner registration scope

**Authored coaching hints:**

- Locate where the runner was registered.
- Scope limits access before labels select a machine.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un ejecutor autohospedado está registrado directamente en el repositorio alpha. ¿Qué repositorios pueden asignarle trabajos mediante ese registro?

1. Todos los de la organización de alpha

   Un registro de repositorio no abarca la organización.

2. Solo el repositorio alpha **[CORRECT]**

   Los ejecutores de repositorio se dedican a ese repositorio.

3. Todos los privados de la empresa

   Compartir en la empresa exige otro ámbito de registro.

4. Cualquiera que comparta las etiquetas de alpha

   Compartir etiquetas no concede acceso entre repositorios.

**Concept:** Ámbito de registro de ejecutores

**Authored coaching hints:**

- Identifica dónde se registró el ejecutor.
- El ámbito limita el acceso antes de seleccionar por etiquetas.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um executor auto-hospedado está registrado diretamente no repositório alpha. Quais repositórios podem atribuir trabalhos por esse registro?

1. Todos da organização de alpha

   Um registro de repositório não abrange a organização.

2. Somente o repositório alpha **[CORRECT]**

   Executores de repositório são dedicados a esse repositório.

3. Todos os privados da empresa

   Compartilhar na empresa exige outro escopo de registro.

4. Qualquer um que compartilhe os rótulos de alpha

   Compartilhar rótulos não concede acesso entre repositórios.

**Concept:** Escopo de registro de executores

**Authored coaching hints:**

- Identifique onde o executor foi registrado.
- O escopo limita o acesso antes da seleção por rótulos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/self-hosted-runners>

<!-- certification-coach-question:admin-176:a46912b2f5dcacc4f874f81b935da1d0b4966499417f0980e7f71d136d0ff3b5 -->
## Question 176: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-176`

**Content revision:** `a46912b2f5dcacc4f874f81b935da1d0b4966499417f0980e7f71d136d0ff3b5`

**en review revision:** `9d523afbf2d2124acd337d9b11b92c45728e29e803668a7457fdf1beca1a8bb6`
**es review revision:** `0faa9fc8606b3f23677500d87500e543debc20d86e25b722760be5a74271db75`
**pt-BR review revision:** `4d4851c76b7b783e68b51bee4512301d7e098f1edf4baa5fe9743cb225bf7967`

### English

What happens when a runner is registered to an organization without specifying a runner group?

1. It enters the default runner group **[CORRECT]**

   Unspecified groups default to the organization's default group.

2. It creates a group named after its hostname

   Hostnames do not automatically create groups.

3. It becomes available to every enterprise organization

   Organization registration does not grant enterprise-wide access.

4. Its registration fails until a custom group exists

   A custom group is not required.

**Concept:** Default runner group placement

**Authored coaching hints:**

- Consider the organization's existing group structure.
- Registration defaults do not expand organizational scope.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué ocurre al registrar un ejecutor en una organización sin especificar un grupo?

1. Entra en el grupo de ejecutores predeterminado **[CORRECT]**

   Se utiliza el grupo predeterminado de la organización.

2. Crea un grupo con el nombre de su host

   Los nombres de host no crean grupos automáticamente.

3. Queda disponible para todas las organizaciones empresariales

   El registro organizativo no concede acceso empresarial completo.

4. El registro falla hasta que exista un grupo personalizado

   No se necesita un grupo personalizado.

**Concept:** Ubicación predeterminada de ejecutores

**Authored coaching hints:**

- Considera la estructura de grupos existente.
- Los valores de registro no amplían el ámbito organizativo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que acontece ao registrar um executor em uma organização sem especificar um grupo?

1. Ele entra no grupo de executores padrão **[CORRECT]**

   É usado o grupo padrão da organização.

2. Ele cria um grupo com o nome de seu host

   Nomes de host não criam grupos automaticamente.

3. Ele fica disponível para todas as organizações empresariais

   O registro organizacional não concede acesso empresarial completo.

4. O registro falha até existir um grupo personalizado

   Um grupo personalizado não é necessário.

**Concept:** Local padrão de executores

**Authored coaching hints:**

- Considere a estrutura de grupos existente.
- Padrões de registro não ampliam o escopo organizacional.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access>

<!-- certification-coach-question:admin-177:babd3994483cfd79f086ba4893c27f31ee4080f5c439d5137f3bae822ebb783e -->
## Question 177: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-177`

**Content revision:** `babd3994483cfd79f086ba4893c27f31ee4080f5c439d5137f3bae822ebb783e`

**en review revision:** `fb269af2e128cd3d8b673af5b21dcbc5f6d683d4dfcdf525c02d4b1b63feab6d`
**es review revision:** `eaf61ba44bcb51ca5207bf4f4a2a9642964dd0436a5bfca479396e672cba3827`
**pt-BR review revision:** `04d1612de91d6727c6985083e242a7a6c25c89fd38b7b75b94a71473f1ed944e`

### English

Which self-hosted configuration supports Docker container actions and service containers?

1. Windows with Docker installed

   GitHub requires a Linux host for these jobs.

2. macOS with Docker installed

   A macOS host does not meet this runner requirement.

3. Linux with Docker installed **[CORRECT]**

   These workflows require Linux and installed Docker.

4. Linux with only a Git client installed

   A Git client does not supply the container runtime.

**Concept:** Container job host requirements

**Authored coaching hints:**

- The workflow platform has host requirements.
- A container runtime and a supported OS are both needed.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué configuración autohospedada admite acciones de contenedores Docker y contenedores de servicio?

1. Windows con Docker instalado

   GitHub exige Linux para estos trabajos.

2. macOS con Docker instalado

   macOS no cumple este requisito de ejecutor.

3. Linux con Docker instalado **[CORRECT]**

   Estos flujos necesitan Linux y Docker instalado.

4. Linux con solo un cliente Git instalado

   Un cliente Git no proporciona el runtime de contenedores.

**Concept:** Requisitos del host para contenedores

**Authored coaching hints:**

- La plataforma impone requisitos al host.
- Se necesitan runtime de contenedores y sistema compatible.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual configuração auto-hospedada aceita ações de contêiner Docker e contêineres de serviço?

1. Windows com Docker instalado

   O GitHub exige Linux para esses trabalhos.

2. macOS com Docker instalado

   macOS não atende a esse requisito de executor.

3. Linux com Docker instalado **[CORRECT]**

   Esses fluxos exigem Linux e Docker instalado.

4. Linux apenas com um cliente Git instalado

   Um cliente Git não fornece o runtime de contêineres.

**Concept:** Requisitos do host para contêineres

**Authored coaching hints:**

- A plataforma impõe requisitos ao host.
- São necessários runtime de contêineres e sistema compatível.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-178:4b8bdd40a68347cf83ecafb8ab26271ff7fbc0ee78d3a1a4faa5cb91ee0abd7b -->
## Question 178: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-178`

**Content revision:** `4b8bdd40a68347cf83ecafb8ab26271ff7fbc0ee78d3a1a4faa5cb91ee0abd7b`

**en review revision:** `a06e7661d3bb78eb9ae7c1813847a56cdab31638b5a1a6f7db93fd27716f45ee`
**es review revision:** `46ca24088db8061c4d23e0873c77bf5e8b7971c3aa1251c9b0491e899df8b9d1`
**pt-BR review revision:** `6ba1d2e3ee709644ea4189cadc4e62434c28bda96ec3ccb01d5ffb124a29b53c`

### English

How many jobs does GitHub assign to a self-hosted runner registered with --ephemeral?

1. As many as its CPU count

   CPU count does not determine ephemeral lifetime.

2. All jobs in one workflow run

   A workflow run can contain multiple jobs.

3. Jobs until a nightly cleanup

   Deregistration is not scheduled nightly.

4. One job before deregistration **[CORRECT]**

   GitHub deregisters the runner after one processed job.

**Concept:** Ephemeral runner lifetime

**Authored coaching hints:**

- The isolation unit is a job, not a workflow.
- Registration lifecycle differs from machine deletion.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cuántos trabajos asigna GitHub a un ejecutor autohospedado registrado con --ephemeral?

1. Tantos como CPU tenga

   La CPU no determina la duración efímera.

2. Todos los de una ejecución de flujo

   Una ejecución puede contener varios trabajos.

3. Trabajos hasta una limpieza nocturna

   La baja no se programa cada noche.

4. Un trabajo antes de darlo de baja **[CORRECT]**

   GitHub da de baja el ejecutor tras procesar un trabajo.

**Concept:** Duración de ejecutores efímeros

**Authored coaching hints:**

- La unidad de aislamiento es el trabajo, no el flujo.
- El ciclo de registro difiere de eliminar la máquina.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quantos trabalhos o GitHub atribui a um executor auto-hospedado registrado com --ephemeral?

1. Tantos quantas forem suas CPUs

   A CPU não determina a duração efêmera.

2. Todos de uma execução de fluxo

   Uma execução pode conter vários trabalhos.

3. Trabalhos até uma limpeza noturna

   O cancelamento não é agendado por noite.

4. Um trabalho antes de cancelar o registro **[CORRECT]**

   O GitHub cancela o registro após processar um trabalho.

**Concept:** Duração de executores efêmeros

**Authored coaching hints:**

- A unidade de isolamento é o trabalho, não o fluxo.
- O ciclo de registro difere de excluir a máquina.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-179:bc76ddff6ffa7bc9b89972d4c6d30c113ffa19fff0c8e37529b4f4ac2d6f6b70 -->
## Question 179: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-179`

**Content revision:** `bc76ddff6ffa7bc9b89972d4c6d30c113ffa19fff0c8e37529b4f4ac2d6f6b70`

**en review revision:** `e11ff6e6c0f493aaed21e1fc9920363fb288b8fee9874a1bea94548d3c349fcc`
**es review revision:** `22abed895c4e07f967fe80126a76203dc04ffb1627ff52bca14ad1687b291646`
**pt-BR review revision:** `cfad654832f2096200d67cfa0325c94721940c0918971ce14801c24445ecbc05`

### English

After an ephemeral self-hosted runner deregisters, what ensures its workspace cannot contaminate the next machine?

1. Automation that destroys or wipes the host **[CORRECT]**

   Host cleanup remains the operator's responsibility.

2. Renaming the runner's registration

   A new name does not erase disk contents.

3. Reusing the same disk under a new runner label

   A label change does not clean the disk.

4. Moving the runner into the default group

   Group placement does not remove local data.

**Concept:** Ephemeral infrastructure cleanup

**Authored coaching hints:**

- Deregistration is a GitHub-side operation.
- Consider the state left on the host.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras darse de baja un ejecutor efímero autohospedado, ¿qué evita que su espacio de trabajo contamine la siguiente máquina?

1. Automatización que destruya o borre el host **[CORRECT]**

   Limpiar el host sigue siendo responsabilidad del operador.

2. Cambiar el nombre del registro del ejecutor

   Un nombre nuevo no borra el disco.

3. Reutilizar el disco con otra etiqueta de ejecutor

   Cambiar etiquetas no limpia el disco.

4. Mover el ejecutor al grupo predeterminado

   El grupo no elimina datos locales.

**Concept:** Limpieza de infraestructura efímera

**Authored coaching hints:**

- La baja es una operación del lado de GitHub.
- Considera el estado que queda en el host.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após cancelar o registro de um executor efêmero auto-hospedado, o que impede que seu workspace contamine a próxima máquina?

1. Automação que destrua ou limpe o host **[CORRECT]**

   Limpar o host continua sendo responsabilidade do operador.

2. Renomear o registro do executor

   Um nome novo não apaga o disco.

3. Reutilizar o disco com outro rótulo de executor

   Mudar rótulos não limpa o disco.

4. Mover o executor para o grupo padrão

   O grupo não remove dados locais.

**Concept:** Limpeza de infraestrutura efêmera

**Authored coaching hints:**

- Cancelar o registro é uma operação do lado do GitHub.
- Considere o estado restante no host.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-180:cd61eb0d47963fc91db94c83466c01e836a7d1c854f180e845bdc27406975407 -->
## Question 180: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-180`

**Content revision:** `cd61eb0d47963fc91db94c83466c01e836a7d1c854f180e845bdc27406975407`

**en review revision:** `63164b298fe6e058035c2f91fc0845f7e7c20639032f9ba235e8a7321385d377`
**es review revision:** `0cc7123d24e4f9a0c870537dcf1c397b54e524360f21ba8d08e138bb6e82407e`
**pt-BR review revision:** `20b9c0f0e4ba2dfb72b6034403e2b1fb2047ef9f78bca4b427a551816814cd1b`

### English

Which logging practice preserves troubleshooting evidence when ephemeral runner hosts are destroyed?

1. Keep logs only in the runner installation directory

   Host destruction removes these local logs.

2. Increase the workflow's displayed run number

   Run numbers do not preserve application logs.

3. Forward runner logs to external storage **[CORRECT]**

   External preservation survives host destruction.

4. Store logs only in the destroyed host's shell history

   Local shell history is neither durable nor sufficient.

**Concept:** Ephemeral runner observability

**Authored coaching hints:**

- Evidence must outlive the resource.
- Workflow logs and runner application logs differ.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué práctica conserva evidencia de diagnóstico al destruir hosts de ejecutores efímeros?

1. Guardar registros solo en el directorio del ejecutor

   Destruir el host elimina esos registros locales.

2. Aumentar el número visible de ejecución

   Los números de ejecución no conservan registros de aplicación.

3. Enviar registros del ejecutor a almacenamiento externo **[CORRECT]**

   El almacenamiento externo sobrevive a la destrucción del host.

4. Guardar registros solo en el historial del shell del host destruido

   El historial local no es duradero ni suficiente.

**Concept:** Observabilidad de ejecutores efímeros

**Authored coaching hints:**

- La evidencia debe sobrevivir al recurso.
- Los registros del flujo y de la aplicación son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual prática preserva evidências de diagnóstico ao destruir hosts de executores efêmeros?

1. Guardar logs apenas no diretório do executor

   Destruir o host remove esses logs locais.

2. Aumentar o número de execução exibido

   Números de execução não preservam logs do aplicativo.

3. Enviar logs do executor para armazenamento externo **[CORRECT]**

   O armazenamento externo sobrevive à destruição do host.

4. Guardar logs apenas no histórico do shell do host destruído

   O histórico local não é durável nem suficiente.

**Concept:** Observabilidade de executores efêmeros

**Authored coaching hints:**

- A evidência deve sobreviver ao recurso.
- Logs do fluxo e do aplicativo são diferentes.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-181:f11ed8d26bb5b8ec8ccb9f2cc9e13791ab1f76108ae13b2290c64c13aeb5abfc -->
## Question 181: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-181`

**Content revision:** `f11ed8d26bb5b8ec8ccb9f2cc9e13791ab1f76108ae13b2290c64c13aeb5abfc`

**en review revision:** `c6d8e12143c6a8d3f01d8c70207cca0c2d980e1446bca1d86770c891a5cf167d`
**es review revision:** `68d37f7793c3f5e45409b79d501a363a651736889f674718541315844b3b21a7`
**pt-BR review revision:** `51fdbd13be1e521c8d9b4dcba3f1f4c1d70f12926589715930342131b753f14b`

### English

A runner image is registered with --disableupdate. What maintenance obligation remains?

1. Update only when jobs request newly introduced features

   Runner update requirements apply beyond new-feature use.

2. Maintain runner versions within GitHub's update requirements **[CORRECT]**

   Disabling automatic updates transfers update scheduling to the operator.

3. Keep one runner version for the entire image's operating-system lifecycle

   The OS lifecycle does not replace runner update requirements.

4. Apply host OS patches without replacing the runner binary

   OS patches do not replace runner application updates.

**Concept:** Manually maintained runner versions

**Authored coaching hints:**

- Disabling automation does not remove the requirement.
- Distinguish application updates from host updates.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una imagen de ejecutor se registra con --disableupdate. ¿Qué obligación de mantenimiento permanece?

1. Actualizar solo cuando los trabajos usen funciones nuevas

   Los requisitos de actualización también afectan al uso de funciones existentes.

2. Mantener versiones dentro de los requisitos de actualización de GitHub **[CORRECT]**

   Desactivar actualizaciones automáticas traslada su programación al operador.

3. Mantener una versión durante todo el ciclo de vida del sistema operativo

   El ciclo del sistema no sustituye los requisitos del ejecutor.

4. Aplicar parches al sistema sin sustituir el binario del ejecutor

   Los parches del sistema no sustituyen actualizar la aplicación.

**Concept:** Versiones de ejecutor mantenidas manualmente

**Authored coaching hints:**

- Desactivar automatización no elimina la obligación.
- Distingue actualizaciones de aplicación y host.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma imagem de executor é registrada com --disableupdate. Qual obrigação de manutenção permanece?

1. Atualizar somente quando trabalhos usarem recursos novos

   Requisitos de atualização também afetam o uso de recursos existentes.

2. Manter versões dentro dos requisitos de atualização do GitHub **[CORRECT]**

   Desativar atualizações automáticas transfere seu agendamento ao operador.

3. Manter uma versão durante todo o ciclo de vida do sistema operacional

   O ciclo do sistema não substitui os requisitos do executor.

4. Aplicar patches no sistema sem substituir o binário do executor

   Patches do sistema não substituem atualizar o aplicativo.

**Concept:** Versões de executor mantidas manualmente

**Authored coaching hints:**

- Desativar automação não elimina a obrigação.
- Diferencie atualizações do aplicativo e do host.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-182:19c1305749fcdb6af138ddead46be933714eb2a632db3b9f45b9b0a4135f1662 -->
## Question 182: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-182`

**Content revision:** `19c1305749fcdb6af138ddead46be933714eb2a632db3b9f45b9b0a4135f1662`

**en review revision:** `d5c5fe8bd46d31320a11a6a956f5eab932d432720eaa71788fc826158ae5625c`
**es review revision:** `15dcb0d84b5a6d601b923c051e370010f63914c74b961d07595c4e16703d2965`
**pt-BR review revision:** `4065f7e5ca15ba9df9637b61130e55929d10361600a38f93ffa42178bcd77c2c`

### English

A self-hosted runner appears Offline. Which condition can directly explain that state?

1. It has no job waiting in the queue

   A connected runner without work is Idle.

2. Its last completed job failed a test

   A test failure does not itself mean disconnected.

3. Its group contains only one repository

   Group size does not define connectivity.

4. Its runner application cannot communicate with GitHub **[CORRECT]**

   Offline indicates the runner is not connected.

**Concept:** Interpreting runner status

**Authored coaching hints:**

- Status describes connectivity or execution state.
- Separate a failed job from a disconnected runner.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un ejecutor autohospedado aparece Offline. ¿Qué condición puede explicar directamente ese estado?

1. No tiene trabajos pendientes

   Un ejecutor conectado sin trabajo está Idle.

2. Su último trabajo terminó con una prueba fallida

   Fallar una prueba no implica desconexión.

3. Su grupo contiene un solo repositorio

   El tamaño del grupo no determina conectividad.

4. Su aplicación no puede comunicarse con GitHub **[CORRECT]**

   Offline indica que el ejecutor no está conectado.

**Concept:** Interpretación del estado del ejecutor

**Authored coaching hints:**

- El estado describe conexión o ejecución.
- Distingue trabajo fallido de ejecutor desconectado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um executor auto-hospedado aparece Offline. Qual condição pode explicar diretamente esse estado?

1. Ele não tem trabalhos pendentes

   Um executor conectado sem trabalho está Idle.

2. Seu último trabalho terminou com um teste falho

   Falhar um teste não implica desconexão.

3. Seu grupo contém somente um repositório

   O tamanho do grupo não determina conectividade.

4. Seu aplicativo não consegue se comunicar com o GitHub **[CORRECT]**

   Offline indica que o executor não está conectado.

**Concept:** Interpretação do estado do executor

**Authored coaching hints:**

- O estado descreve conexão ou execução.
- Diferencie trabalho falho de executor desconectado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:admin-183:bd1a5d8234d11819b17f6f35f0efd1f7f31f47e421cc9862c29fab9f5392c564 -->
## Question 183: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-183`

**Content revision:** `bd1a5d8234d11819b17f6f35f0efd1f7f31f47e421cc9862c29fab9f5392c564`

**en review revision:** `c4fa11d3816380a29c4c2d6c79c88517eb8fc8f8b896ae4d693739c93e6d96f9`
**es review revision:** `f280d6bc42494a9e5d5d78ffbac03b5eba6c4a7c8953f0eae24cd358fd2a06ae`
**pt-BR review revision:** `2b083cbe178cdf61044908c134cddb682d6a7c2ef893dbea8534abffbb174f52`

### English

On a Linux self-hosted runner, which command checks connectivity to required GitHub services using an authorized diagnostic token?

1. ./config.sh --check --url URL --pat TOKEN **[CORRECT]**

   The --check mode tests required service connectivity.

2. ./config.sh --ephemeral --url URL --token TOKEN

   This registers an ephemeral runner.

3. ./run.sh --labels network-check

   This is not the documented connectivity check.

4. ./config.sh --remove --token TOKEN

   This removes a registration rather than checking connectivity.

**Concept:** Runner connectivity diagnostics

**Authored coaching hints:**

- Use the runner's diagnostic mode.
- Registration tokens and diagnostic credentials have different purposes.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En un ejecutor Linux autohospedado, ¿qué comando comprueba la conexión a servicios GitHub necesarios con un token de diagnóstico autorizado?

1. ./config.sh --check --url URL --pat TOKEN **[CORRECT]**

   El modo --check prueba la conexión a servicios necesarios.

2. ./config.sh --ephemeral --url URL --token TOKEN

   Esto registra un ejecutor efímero.

3. ./run.sh --labels network-check

   No es la comprobación de conexión documentada.

4. ./config.sh --remove --token TOKEN

   Elimina un registro en lugar de comprobar conexión.

**Concept:** Diagnóstico de conectividad del ejecutor

**Authored coaching hints:**

- Usa el modo de diagnóstico del ejecutor.
- Los tokens de registro y de diagnóstico tienen fines distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em um executor Linux auto-hospedado, qual comando verifica a conexão aos serviços GitHub necessários com um token de diagnóstico autorizado?

1. ./config.sh --check --url URL --pat TOKEN **[CORRECT]**

   O modo --check testa a conexão aos serviços necessários.

2. ./config.sh --ephemeral --url URL --token TOKEN

   Isso registra um executor efêmero.

3. ./run.sh --labels network-check

   Não é a verificação de conexão documentada.

4. ./config.sh --remove --token TOKEN

   Remove um registro em vez de verificar conexão.

**Concept:** Diagnóstico de conectividade do executor

**Authored coaching hints:**

- Use o modo de diagnóstico do executor.
- Tokens de registro e de diagnóstico têm finalidades distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:admin-184:21554b4dcaf505429909f8ab12a0f6b5ea0592d066c5a37714618c0e69d631c3 -->
## Question 184: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-184`

**Content revision:** `21554b4dcaf505429909f8ab12a0f6b5ea0592d066c5a37714618c0e69d631c3`

**en review revision:** `6cfa493dcd37312cd8bcbfa07b25670eb16b45d5cab18d2568414ffbff9674e7`
**es review revision:** `236d5e7b5c0e415d30069401c8736d93cea10db49c81d03bd7265cd6797fccd9`
**pt-BR review revision:** `a3e157dd40a0599156778fbc43263459752191b4441ec4ce2ac1500692026063`

### English

Which files contain detailed per-job execution logs in a self-hosted runner installation?

1. \_diag/Runner\_\*.log

   Runner\_ files describe the runner application.

2. .git/logs/HEAD

   Git reflogs are not runner execution logs.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Worker\_ files contain each processed job's detailed logs.

4. .github/workflows/\*.yml

   These are workflow definitions, not execution logs.

**Concept:** Runner application and worker logs

**Authored coaching hints:**

- Identify whether the issue concerns a process or a job.
- The diagnostic directory contains different log types.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué archivos contienen los registros detallados por trabajo en una instalación de ejecutor autohospedado?

1. \_diag/Runner\_\*.log

   Los archivos Runner\_ describen la aplicación del ejecutor.

2. .git/logs/HEAD

   Los reflogs de Git no son registros de ejecución.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Los archivos Worker\_ detallan cada trabajo procesado.

4. .github/workflows/\*.yml

   Son definiciones de flujos, no registros de ejecución.

**Concept:** Registros de aplicación y de trabajo

**Authored coaching hints:**

- Identifica si el problema afecta al proceso o al trabajo.
- El directorio de diagnóstico contiene distintos tipos de registro.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Quais arquivos contêm logs detalhados por trabalho em uma instalação de executor auto-hospedado?

1. \_diag/Runner\_\*.log

   Arquivos Runner\_ descrevem o aplicativo do executor.

2. .git/logs/HEAD

   Reflogs do Git não são logs de execução.

3. \_diag/Worker\_\*.log **[CORRECT]**

   Arquivos Worker\_ detalham cada trabalho processado.

4. .github/workflows/\*.yml

   São definições de fluxos, não logs de execução.

**Concept:** Logs do aplicativo e do trabalho

**Authored coaching hints:**

- Identifique se o problema afeta o processo ou o trabalho.
- O diretório de diagnóstico contém tipos diferentes de log.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot>

<!-- certification-coach-question:admin-185:8e57371d8788000be400b6218ddad13083e67dcec1e3e5cdaa72406555e45855 -->
## Question 185: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-185`

**Content revision:** `8e57371d8788000be400b6218ddad13083e67dcec1e3e5cdaa72406555e45855`

**en review revision:** `92b2ee37cead9310ec451f0bd849ce2d5dda833a0e0d10c5ac6444c097ca8514`
**es review revision:** `0ddfeadcf8a21f5095e33a92befe5b4304456e5b1c2be56d4c655adaec63c8d7`
**pt-BR review revision:** `b52909a595dd73a070120e76b45bdb784978d643a68bfaab1c0d4a0c2b2198e0`

### English

A job remains queued although several self-hosted runners are Idle. What should the administrator verify first?

1. Whether completed jobs have expired artifact downloads

   Artifact expiration does not explain an unassigned job.

2. Whether runner access, labels, and group match **[CORRECT]**

   Idle runners must still satisfy routing and access constraints.

3. Whether job steps need newer versions of their build dependencies

   Step dependencies matter after a runner receives the job.

4. Whether the build needs more memory after it starts executing

   Runtime memory does not explain this routing mismatch.

**Concept:** Diagnosing runner queue mismatches

**Authored coaching hints:**

- Idle capacity is not necessarily eligible capacity.
- Compare the job requirements with runner access.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo sigue en cola aunque varios ejecutores autohospedados están Idle. ¿Qué debe verificar primero el administrador?

1. Si caducaron descargas de artefactos de trabajos terminados

   La caducidad de artefactos no explica un trabajo sin asignar.

2. Si coinciden acceso, etiquetas y grupo del ejecutor **[CORRECT]**

   Los ejecutores libres deben cumplir restricciones de asignación y acceso.

3. Si los pasos necesitan versiones nuevas de dependencias de compilación

   Las dependencias importan tras recibir el trabajo.

4. Si la compilación necesita más memoria una vez iniciada

   La memoria durante ejecución no explica esta incompatibilidad.

**Concept:** Diagnóstico de incompatibilidades en la cola

**Authored coaching hints:**

- Capacidad libre no siempre es capacidad apta.
- Compara requisitos del trabajo con acceso a ejecutores.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho continua na fila embora vários executores auto-hospedados estejam Idle. O que o administrador deve verificar primeiro?

1. Se expiraram downloads de artefatos de trabalhos concluídos

   A expiração de artefatos não explica um trabalho sem atribuição.

2. Se acesso, rótulos e grupo do executor correspondem **[CORRECT]**

   Executores livres devem atender às restrições de roteamento e acesso.

3. Se as etapas precisam de novas versões de dependências de build

   Dependências importam depois de receber o trabalho.

4. Se o build precisa de mais memória após iniciar a execução

   Memória durante execução não explica essa incompatibilidade.

**Concept:** Diagnóstico de incompatibilidades na fila

**Authored coaching hints:**

- Capacidade livre nem sempre é capacidade elegível.
- Compare requisitos do trabalho com acesso aos executores.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-186:ed614bc0565e82ffe9cee6aa107d6e90c753462224fb1b6867e518b2ecaa9dd2 -->
## Question 186: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-186`

**Content revision:** `ed614bc0565e82ffe9cee6aa107d6e90c753462224fb1b6867e518b2ecaa9dd2`

**en review revision:** `aefcceaf2d0de704ad0d295521c8fc96b13c303010151886ffd41e83830236cc`
**es review revision:** `6bdd704cc4e5de8e498e272bd49a7ff9f1cda53514d23501590421483095e1d0`
**pt-BR review revision:** `7221dc15164d4b55aa261acf45ffa2e2fee7de41c5b2e8dc724cf1647b27f28a`

### English

What connection does a self-hosted runner need to receive jobs from GitHub Actions?

1. Outbound HTTPS to required GitHub services **[CORRECT]**

   The runner communicates with GitHub to obtain jobs.

2. Inbound HTTPS initiated by GitHub to the runner

   GitHub does not require this inbound job-delivery listener.

3. An inbound SSH tunnel that GitHub opens for each job

   Jobs are not delivered through inbound SSH tunnels.

4. Outbound access only to the repository's Git clone URL

   Job delivery requires more than Git repository access.

**Concept:** Self-hosted runner network direction

**Authored coaching hints:**

- Determine which side initiates communication.
- Administrative login and job delivery are different channels.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué conexión necesita un ejecutor autohospedado para recibir trabajos de GitHub Actions?

1. HTTPS saliente a los servicios GitHub necesarios **[CORRECT]**

   El ejecutor se comunica con GitHub para obtener trabajos.

2. HTTPS entrante iniciado por GitHub hacia el ejecutor

   GitHub no exige este servicio de entrega entrante.

3. Un túnel SSH entrante que GitHub abre por trabajo

   Los trabajos no se entregan por túneles SSH entrantes.

4. Acceso saliente solo a la URL de clonación Git del repositorio

   Entregar trabajos requiere más que acceso al repositorio Git.

**Concept:** Dirección de red del ejecutor autohospedado

**Authored coaching hints:**

- Determina qué lado inicia la comunicación.
- El acceso administrativo y la entrega de trabajos usan canales distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual conexão um executor auto-hospedado precisa para receber trabalhos do GitHub Actions?

1. HTTPS de saída aos serviços GitHub necessários **[CORRECT]**

   O executor se comunica com o GitHub para obter trabalhos.

2. HTTPS de entrada iniciado pelo GitHub para o executor

   O GitHub não exige esse serviço de entrega de entrada.

3. Um túnel SSH de entrada que o GitHub abre por trabalho

   Trabalhos não são entregues por túneis SSH de entrada.

4. Acesso de saída somente à URL de clone Git do repositório

   Entregar trabalhos exige mais que acesso ao repositório Git.

**Concept:** Direção de rede do executor auto-hospedado

**Authored coaching hints:**

- Determine qual lado inicia a comunicação.
- Acesso administrativo e entrega de trabalhos usam canais distintos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-187:c8f00ddeefc2984bf2117ccd4b9dfc98baa20da5995989759d67e713b70bbacd -->
## Question 187: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-187`

**Content revision:** `c8f00ddeefc2984bf2117ccd4b9dfc98baa20da5995989759d67e713b70bbacd`

**en review revision:** `78d5aaf14bda08a726bb7d7758b23ca92460f4661ee96e319e17810dbdbaf048`
**es review revision:** `578e8852dc27ee4a859b894b129c6a11abcfcdfcdcf853ef32b907eb76f0a208`
**pt-BR review revision:** `f60e6758b3c1bf95a687d8d059c3ef9d51f4fd8c65582ced5056fa5f0e9176cd`

### English

Which GitHub-hosted runner option supports a static IP range for a downstream firewall allowlist?

1. Standard runners selected by ubuntu-latest

   The standard label does not provide dedicated static IPs.

2. macOS larger runners

   This capability is not supported on macOS larger runners.

3. Linux or Windows larger runners **[CORRECT]**

   Linux and Windows larger runners support static IP addresses.

4. Any runner selected by a workflow template

   Templates do not supply a networking capability.

**Concept:** Hosted runner static addressing

**Authored coaching hints:**

- Separate hosted runner classes and operating systems.
- A routing label is not an IP allocation.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué opción de ejecutor hospedado por GitHub admite un rango IP estático para una lista de permitidos de un firewall externo?

1. Ejecutores estándar seleccionados con ubuntu-latest

   La etiqueta estándar no proporciona IP estáticas dedicadas.

2. Ejecutores macOS de mayor tamaño

   Esta función no está disponible en ejecutores macOS de mayor tamaño.

3. Ejecutores Linux o Windows de mayor tamaño **[CORRECT]**

   Los ejecutores Linux y Windows de mayor tamaño admiten IP estáticas.

4. Cualquier ejecutor seleccionado por una plantilla

   Las plantillas no proporcionan capacidad de red.

**Concept:** Direcciones estáticas de ejecutores hospedados

**Authored coaching hints:**

- Distingue clases de ejecutor y sistemas operativos.
- Una etiqueta de asignación no es una asignación IP.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual opção de executor hospedado pelo GitHub aceita uma faixa IP estática para a lista de permissões de um firewall externo?

1. Executores padrão selecionados com ubuntu-latest

   O rótulo padrão não fornece IPs estáticos dedicados.

2. Executores macOS maiores

   Esse recurso não está disponível em executores macOS maiores.

3. Executores Linux ou Windows maiores **[CORRECT]**

   Executores Linux e Windows maiores aceitam IPs estáticos.

4. Qualquer executor selecionado por um modelo

   Modelos não fornecem capacidade de rede.

**Concept:** Endereços estáticos de executores hospedados

**Authored coaching hints:**

- Diferencie classes de executor e sistemas operacionais.
- Um rótulo de roteamento não é uma alocação IP.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/runners/larger-runners>

<!-- certification-coach-question:admin-188:6073edd2710449fcb01a0a721b8995b01770985853cbe80f48ad49ecad18314f -->
## Question 188: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-188`

**Content revision:** `6073edd2710449fcb01a0a721b8995b01770985853cbe80f48ad49ecad18314f`

**en review revision:** `e04949c16d4d662539d289fe6cbb0da791c31510a721989f8bc5b9504f9af21b`
**es review revision:** `365a50ec4e0295e291e0129d8ed881f940508b927f401f2bd2ab77df5542411d`
**pt-BR review revision:** `e41681ce9c794ddf86159ce383900fbbc095a4fe850df71de52d3098c79d8887`

### English

What connects eligible GitHub-hosted runners to an organization's Azure virtual network?

1. A workflow VPN step without a GitHub network configuration

   An ad hoc VPN is not the Azure private networking integration.

2. Azure resources plus a GitHub private network configuration **[CORRECT]**

   Both Azure resources and GitHub configuration are required.

3. An organization IP allowlist containing the Azure subnet range

   An access allowlist does not attach a runner to a VNET.

4. A cloud login action authorized to read the private application's secrets

   Cloud authentication does not create network attachment.

**Concept:** Azure private networking setup

**Authored coaching hints:**

- The integration spans two control planes.
- Configuration values alone do not provision connectivity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué conecta los ejecutores hospedados aptos de GitHub con la red virtual Azure de una organización?

1. Un paso VPN sin configuración de red en GitHub

   Una VPN ad hoc no es la integración de red privada Azure.

2. Recursos Azure y configuración de red privada en GitHub **[CORRECT]**

   Se necesitan recursos Azure y configuración en GitHub.

3. Una lista IP de organización con el rango de subred Azure

   Una lista de acceso no conecta el ejecutor a una VNET.

4. Una acción de inicio de sesión autorizada para leer secretos de la aplicación

   La autenticación de nube no crea una conexión de red.

**Concept:** Configuración de red privada Azure

**Authored coaching hints:**

- La integración abarca dos planos de control.
- Los valores de configuración no aprovisionan conectividad por sí solos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que conecta executores hospedados elegíveis do GitHub à rede virtual Azure de uma organização?

1. Uma etapa VPN sem configuração de rede no GitHub

   Uma VPN ad hoc não é a integração de rede privada Azure.

2. Recursos Azure e configuração de rede privada no GitHub **[CORRECT]**

   São necessários recursos Azure e configuração no GitHub.

3. Uma lista IP da organização com a faixa da sub-rede Azure

   Uma lista de acesso não conecta o executor a uma VNET.

4. Uma ação de login autorizada a ler segredos do aplicativo

   Autenticação na nuvem não cria uma conexão de rede.

**Concept:** Configuração de rede privada Azure

**Authored coaching hints:**

- A integração abrange dois planos de controle.
- Valores de configuração não provisionam conectividade sozinhos.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization>

<!-- certification-coach-question:admin-189:125d29d7808b9b8b1db1ed96a34f349fe0dbfb9ea0ef7596bacb9b52a70bf7b0 -->
## Question 189: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-189`

**Content revision:** `125d29d7808b9b8b1db1ed96a34f349fe0dbfb9ea0ef7596bacb9b52a70bf7b0`

**en review revision:** `9d2ec8606a7628f26bb3d0d3e2a1aa4851403af9e26b46f806a9387378325066`
**es review revision:** `19fbb85566530645713f2a43dc052c0d37dd33f7c7ae0d2fe0b977901a7b2659`
**pt-BR review revision:** `5d74929da27d03dd784ddd3797cec36e443a69c876970af3e0c29685f0715cf6`

### English

For Azure private networking with GitHub-hosted runners, which outbound filtering approach does current documentation recommend?

1. Freeze the IP list copied during initial setup

   Static copied IP lists can become stale.

2. Allow only the private application's DNS name

   The runner also needs GitHub service connectivity.

3. Block GitHub domains after runner registration

   Registration does not eliminate ongoing GitHub communication.

4. Maintain DNS/domain controls using GitHub's published meta data **[CORRECT]**

   Published domain lists track changing service requirements.

**Concept:** Maintaining runner network egress

**Authored coaching hints:**

- Network dependencies change after deployment.
- Private application access is not the only required traffic.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Para redes privadas Azure con ejecutores hospedados de GitHub, ¿qué filtrado saliente recomienda la documentación actual?

1. Congelar la lista IP copiada durante la instalación

   Las listas IP copiadas pueden quedar obsoletas.

2. Permitir solo el DNS de la aplicación privada

   El ejecutor también necesita servicios GitHub.

3. Bloquear dominios GitHub tras registrar el ejecutor

   Registrar no elimina la comunicación continua con GitHub.

4. Mantener controles DNS/dominio con los metadatos publicados por GitHub **[CORRECT]**

   Las listas publicadas reflejan cambios de requisitos.

**Concept:** Mantenimiento del tráfico saliente de ejecutores

**Authored coaching hints:**

- Las dependencias de red cambian tras el despliegue.
- La aplicación privada no es el único destino necesario.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Para redes privadas Azure com executores hospedados do GitHub, qual filtragem de saída a documentação atual recomenda?

1. Congelar a lista IP copiada durante a instalação

   Listas IP copiadas podem ficar desatualizadas.

2. Permitir apenas o DNS do aplicativo privado

   O executor também precisa dos serviços GitHub.

3. Bloquear domínios GitHub após registrar o executor

   Registrar não elimina a comunicação contínua com o GitHub.

4. Manter controles DNS/domínio com os metadados publicados pelo GitHub **[CORRECT]**

   As listas publicadas refletem mudanças de requisitos.

**Concept:** Manutenção do tráfego de saída dos executores

**Authored coaching hints:**

- Dependências de rede mudam após a implantação.
- O aplicativo privado não é o único destino necessário.

</details>

**Official supporting source:** <https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization>

<!-- certification-coach-question:admin-190:32c83905755db666508f75f41a1c9ec259af4ef529f03a343f5c4ea7adf211f9 -->
## Question 190: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-190`

**Content revision:** `32c83905755db666508f75f41a1c9ec259af4ef529f03a343f5c4ea7adf211f9`

**en review revision:** `fb322b3c750d524df30f3507d3c9121ae53c4599355393e4a64c60edc8b3138a`
**es review revision:** `a20c0bcdcf9406319acada200d44521666b82c5444e0a1d0012cbaf88bd1d09b`
**pt-BR review revision:** `9a030f1f4b01e2c9e1634f6f3a34a9e2acbef4a8177ea28fdf88bf47b76bf2f1`

### English

An Actions job uses GITHUB\_TOKEN to access a private organization repository protected by a GitHub Enterprise Cloud IP allowlist. What must its network path satisfy?

1. The runner's source IP must be allowed **[CORRECT]**

   The allowlist applies to this authenticated access.

2. A valid GITHUB\_TOKEN permits any runner source IP

   A valid token does not bypass this network restriction.

3. Only the triggering user's browser IP must be allowed

   The API request's source IP also matters.

4. An approved cloud login bypasses GitHub's source-IP check

   Cloud authentication does not bypass GitHub's allowlist.

**Concept:** Runner access under IP allowlists

**Authored coaching hints:**

- Authentication and network permission are separate checks.
- Evaluate the address seen by GitHub.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo usa GITHUB\_TOKEN para acceder a un repositorio privado protegido por una lista IP de GitHub Enterprise Cloud. ¿Qué debe cumplir su ruta de red?

1. La IP de origen del ejecutor debe estar permitida **[CORRECT]**

   La lista se aplica a este acceso autenticado.

2. Un GITHUB\_TOKEN válido permite cualquier IP de ejecutor

   Un token válido no evita esta restricción de red.

3. Solo debe permitirse la IP del navegador de quien inició el flujo

   La IP de origen de la solicitud API también importa.

4. Un inicio de sesión de nube aprobado evita la comprobación IP de GitHub

   La autenticación de nube no evita la lista de GitHub.

**Concept:** Acceso de ejecutores con listas IP

**Authored coaching hints:**

- Autenticación y permiso de red son comprobaciones distintas.
- Evalúa la dirección que ve GitHub.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho usa GITHUB\_TOKEN para acessar um repositório privado protegido por uma lista IP do GitHub Enterprise Cloud. O que sua rota de rede deve atender?

1. O IP de origem do executor deve ser permitido **[CORRECT]**

   A lista se aplica a esse acesso autenticado.

2. Um GITHUB\_TOKEN válido permite qualquer IP de executor

   Um token válido não contorna essa restrição de rede.

3. Somente o IP do navegador de quem iniciou o fluxo deve ser permitido

   O IP de origem da solicitação API também importa.

4. Um login aprovado na nuvem contorna a verificação IP do GitHub

   Autenticação na nuvem não contorna a lista do GitHub.

**Concept:** Acesso de executores com listas IP

**Authored coaching hints:**

- Autenticação e permissão de rede são verificações distintas.
- Avalie o endereço visto pelo GitHub.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization>

<!-- certification-coach-question:admin-191:145e0f0cc0fc26bcd69fe7d7aad28a7c72d93bdb59c0557559bdf2bc2d59af39 -->
## Question 191: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-191`

**Content revision:** `145e0f0cc0fc26bcd69fe7d7aad28a7c72d93bdb59c0557559bdf2bc2d59af39`

**en review revision:** `e154ab042d47ac4074ee34789ec7c9c857b8066b7e7231e809ccb979037a5b75`
**es review revision:** `8c6a2337d48b1e31e3cf82607aecb61e222423362d13ef5c271b4fde82b261fe`
**pt-BR review revision:** `d0b0a1171bc9a9db0c9f72190e84bcc970707521fbc3648b59782c51185812e1`

### English

A privileged workflow\_run job consumes an artifact from a fork's build. How should the artifact be treated?

1. As trusted because GitHub stores it

   Storage location does not establish producer trust.

2. As trusted if the build concluded successfully

   Successful execution does not authenticate artifact contents.

3. As untrusted input requiring validation **[CORRECT]**

   A privileged consumer must validate lower-trust inputs.

4. As safe to execute after renaming its extension

   Renaming does not remove malicious content.

**Concept:** Trust across workflow\_run boundaries

**Authored coaching hints:**

- Track who could influence the producer.
- A status result does not certify data safety.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un trabajo privilegiado workflow\_run consume un artefacto de una compilación de bifurcación. ¿Cómo debe tratarlo?

1. Como confiable porque GitHub lo almacena

   La ubicación no demuestra confianza en el productor.

2. Como confiable si la compilación terminó correctamente

   Una ejecución correcta no autentica el contenido.

3. Como entrada no confiable que requiere validación **[CORRECT]**

   El consumidor privilegiado debe validar entradas de menor confianza.

4. Como seguro de ejecutar tras cambiar su extensión

   Renombrar no elimina contenido malicioso.

**Concept:** Confianza entre flujos workflow\_run

**Authored coaching hints:**

- Identifica quién puede influir en el productor.
- Un resultado correcto no certifica seguridad de los datos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um trabalho privilegiado workflow\_run consome um artefato de um build de fork. Como deve tratá-lo?

1. Como confiável porque o GitHub o armazena

   O local não estabelece confiança no produtor.

2. Como confiável se o build terminou com sucesso

   Uma execução bem-sucedida não autentica o conteúdo.

3. Como entrada não confiável que exige validação **[CORRECT]**

   O consumidor privilegiado deve validar entradas de menor confiança.

4. Como seguro para executar após mudar sua extensão

   Renomear não remove conteúdo malicioso.

**Concept:** Confiança entre fluxos workflow\_run

**Authored coaching hints:**

- Identifique quem pode influenciar o produtor.
- Um resultado bem-sucedido não certifica segurança dos dados.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-192:ba501207355688bd1948d85df618fffddaea7b69d26712aa3fcadba63a74311e -->
## Question 192: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-192`

**Content revision:** `ba501207355688bd1948d85df618fffddaea7b69d26712aa3fcadba63a74311e`

**en review revision:** `959304751544ed7896c3ce778de5fa0b3207f9f5b71c8bc1f03fc0480b5bff35`
**es review revision:** `2f50f91d42c65187aeba4205a4e1bc78580db18561800bb21bf8b0968c939eed`
**pt-BR review revision:** `10804c83f9dec3171d2f45c19cb3552b8acc98bb14b07fdf8bff2947d7acea2e`

### English

Which pattern should an administrator reject in a privileged pull\_request\_target workflow?

1. Labeling the pull request using trusted code

   Trusted metadata operations can fit this event.

2. Checking out and executing the fork's proposed code **[CORRECT]**

   Untrusted code would execute in a privileged context.

3. Reading pull-request metadata without executing it

   Reading metadata is different from executing submitted code.

4. Limiting the job token to required permissions

   Least privilege reduces rather than introduces risk.

**Concept:** pull\_request\_target trust boundary

**Authored coaching hints:**

- Identify which code revision runs.
- Compare the code's provenance with the execution privileges.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué patrón debe rechazar un administrador en un flujo privilegiado pull\_request\_target?

1. Etiquetar la solicitud mediante código confiable

   Operaciones confiables sobre metadatos pueden ser adecuadas.

2. Obtener y ejecutar el código propuesto de la bifurcación **[CORRECT]**

   El código no confiable se ejecutaría con privilegios.

3. Leer metadatos de la solicitud sin ejecutarlos

   Leer metadatos difiere de ejecutar código enviado.

4. Limitar el token del trabajo a los permisos necesarios

   El mínimo privilegio reduce el riesgo.

**Concept:** Límite de confianza de pull\_request\_target

**Authored coaching hints:**

- Identifica qué revisión de código se ejecuta.
- Compara la procedencia del código con los privilegios de ejecución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual padrão um administrador deve rejeitar em um fluxo privilegiado pull\_request\_target?

1. Rotular o pull request usando código confiável

   Operações confiáveis sobre metadados podem ser adequadas.

2. Obter e executar o código proposto do fork **[CORRECT]**

   Código não confiável seria executado com privilégios.

3. Ler metadados do pull request sem executá-los

   Ler metadados difere de executar código enviado.

4. Limitar o token do trabalho às permissões necessárias

   O privilégio mínimo reduz o risco.

**Concept:** Limite de confiança de pull\_request\_target

**Authored coaching hints:**

- Identifique qual revisão de código é executada.
- Compare a procedência do código com os privilégios de execução.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/security/secure-use>

<!-- certification-coach-question:admin-193:8e17cf5b03c59bc14051a5eacd65dc04bd621c77231eae3fdeab811743ffd13a -->
## Question 193: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-193`

**Content revision:** `8e17cf5b03c59bc14051a5eacd65dc04bd621c77231eae3fdeab811743ffd13a`

**en review revision:** `cfeba8b81e974a45d61570a30889029627d43342f782cfd6552572532c0a0a99`
**es review revision:** `35262a6f97c0bcce775910379ef591ad62612e6e2915cd57d774a2ac4a80a518`
**pt-BR review revision:** `27772fc00c70a8984c18fa6f75029cec7946da34126a834669de736bf91df2e9`

### English

A completed build must retain a test report for later download. Which storage mechanism fits?

1. A dependency cache

   Caches optimize regeneration rather than preserve run deliverables.

2. A repository Actions secret

   Secrets store sensitive values, not downloadable run reports.

3. A runner-local workspace directory

   Local workspace files are not retained as GitHub run downloads.

4. A workflow artifact **[CORRECT]**

   Artifacts preserve files produced by a workflow run.

**Concept:** Artifacts for run deliverables

**Authored coaching hints:**

- Distinguish a result from a reusable dependency.
- The consumer needs the file after the job ends.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una compilación terminada debe conservar un informe de pruebas para descargarlo después. ¿Qué mecanismo corresponde?

1. Una caché de dependencias

   Las cachés optimizan regeneración, no conservan entregables de ejecución.

2. Un secreto de Actions del repositorio

   Los secretos guardan valores sensibles, no informes descargables.

3. Un directorio de trabajo local del ejecutor

   Los archivos locales no se conservan como descargas de la ejecución.

4. Un artefacto del flujo **[CORRECT]**

   Los artefactos conservan archivos generados por una ejecución.

**Concept:** Artefactos para resultados de ejecución

**Authored coaching hints:**

- Distingue un resultado de una dependencia reutilizable.
- El consumidor necesita el archivo tras terminar el trabajo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um build concluído deve preservar um relatório de testes para download posterior. Qual mecanismo atende?

1. Um cache de dependências

   Caches otimizam regeneração, não preservam entregáveis da execução.

2. Um segredo de Actions do repositório

   Segredos guardam valores sensíveis, não relatórios para download.

3. Um diretório de trabalho local do executor

   Arquivos locais não são mantidos como downloads da execução.

4. Um artefato do fluxo **[CORRECT]**

   Artefatos preservam arquivos gerados por uma execução.

**Concept:** Artefatos para resultados de execução

**Authored coaching hints:**

- Diferencie um resultado de uma dependência reutilizável.
- O consumidor precisa do arquivo após o trabalho terminar.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:admin-194:260bc50b3ac74150eae8900a2f4bbd81f5bf4913daf6c7f871e622e4fc76947d -->
## Question 194: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-194`

**Content revision:** `260bc50b3ac74150eae8900a2f4bbd81f5bf4913daf6c7f871e622e4fc76947d`

**en review revision:** `95fe5a51e926769fbe61976ce8ad32598bfbdbe8c1927a32d0f474b44dab5464`
**es review revision:** `9a7240213d2a7f55736f4f6903895fa825b8a3e1ef215cce0353237eccd6e44f`
**pt-BR review revision:** `597b787dd6fba33acd520bac24bc60419a28f57af108dd94579766b6b28bae57`

### English

What should a dependency cache contain to speed up repeat builds?

1. Regenerable downloaded dependencies **[CORRECT]**

   Caches accelerate reuse; jobs should tolerate cache misses.

2. Signed release packages retained as long-term audit records

   Long-term records need durable retention, not disposable caches.

3. Production credentials retrieved for later deployments

   Secrets must not be stored in caches.

4. Test reports retained for later manual download

   Run deliverables belong in artifacts, not dependency caches.

**Concept:** Safe dependency caching

**Authored coaching hints:**

- Plan for cache misses.
- Reusable acceleration is different from durable or secret storage.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué debe contener una caché de dependencias para acelerar compilaciones repetidas?

1. Dependencias descargadas que puedan regenerarse **[CORRECT]**

   Las cachés aceleran reutilización; los trabajos deben tolerar fallos de caché.

2. Paquetes de versión firmados para auditoría a largo plazo

   Los registros duraderos no deben depender de cachés descartables.

3. Credenciales de producción obtenidas para despliegues posteriores

   No deben guardarse secretos en cachés.

4. Informes de pruebas conservados para descarga manual posterior

   Los entregables van en artefactos, no en cachés de dependencias.

**Concept:** Caché segura de dependencias

**Authored coaching hints:**

- Prevé que no haya coincidencia en la caché.
- Acelerar reutilización difiere de almacenar datos duraderos o secretos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O que um cache de dependências deve conter para acelerar builds repetidos?

1. Dependências baixadas que possam ser regeneradas **[CORRECT]**

   Caches aceleram reutilização; trabalhos devem tolerar falhas de cache.

2. Pacotes de versão assinados para auditoria de longo prazo

   Registros duráveis não devem depender de caches descartáveis.

3. Credenciais de produção obtidas para implantações posteriores

   Segredos não devem ser guardados em caches.

4. Relatórios de testes mantidos para download manual posterior

   Entregáveis ficam em artefatos, não em caches de dependências.

**Concept:** Cache seguro de dependências

**Authored coaching hints:**

- Planeje para a ausência de correspondência no cache.
- Acelerar reutilização difere de armazenar dados duráveis ou segredos.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:admin-195:86d937ea218a786e6aa90a724c7d96aec4210073256076b3b2b7c4e80616807a -->
## Question 195: Manage GitHub Actions

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-195`

**Content revision:** `86d937ea218a786e6aa90a724c7d96aec4210073256076b3b2b7c4e80616807a`

**en review revision:** `fb18164edf182a339c083bf8860bd567ca59ac12a046d7ba5428c3668882a097`
**es review revision:** `40cfcb6314d9a629da55d23d03568638416733dfa5701076544e86082d1ee28f`
**pt-BR review revision:** `995cf9abaf96588a1974f50abd1896e4a15f5783ab8f129080fd57e0888704bf`

### English

An enterprise disables creation of repository-level self-hosted runners. Which runner access may remain available?

1. New repository registrations created by administrators

   Repository administrators cannot bypass the restriction.

2. Repository registrations created through workflow YAML

   YAML does not bypass the registration policy.

3. Organization or enterprise runners shared with the repository **[CORRECT]**

   The restriction does not disable higher-scope shared runners.

4. Repository registrations created using a verified action

   A verified action does not override enterprise policy.

**Concept:** Restricting runner registration scope

**Authored coaching hints:**

- A creation restriction has a defined scope.
- Shared capacity and repository-owned registration differ.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa deshabilita la creación de ejecutores autohospedados de repositorio. ¿Qué acceso puede seguir disponible?

1. Nuevos registros de repositorio creados por administradores

   Los administradores no pueden evitar la restricción.

2. Registros de repositorio creados mediante YAML

   YAML no evita la política de registro.

3. Ejecutores de organización o empresa compartidos con el repositorio **[CORRECT]**

   La restricción no deshabilita ejecutores compartidos de ámbitos superiores.

4. Registros de repositorio creados con una acción verificada

   Una acción verificada no anula la política empresarial.

**Concept:** Restricción del ámbito de registro de ejecutores

**Authored coaching hints:**

- Una restricción de creación tiene un ámbito definido.
- Capacidad compartida y registro propio del repositorio son distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa desabilita a criação de executores auto-hospedados de repositório. Qual acesso pode continuar disponível?

1. Novos registros de repositório criados por administradores

   Administradores não podem contornar a restrição.

2. Registros de repositório criados por YAML

   YAML não contorna a política de registro.

3. Executores da organização ou empresa compartilhados com o repositório **[CORRECT]**

   A restrição não desabilita executores compartilhados de escopos superiores.

4. Registros de repositório criados com uma ação verificada

   Uma ação verificada não anula a política empresarial.

**Concept:** Restrição do escopo de registro de executores

**Authored coaching hints:**

- Uma restrição de criação tem um escopo definido.
- Capacidade compartilhada e registro próprio do repositório diferem.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise>

<!-- certification-coach-question:admin-196:161dfb84ab74b8b6f3db764cec8fd3c6c5f7c69235d90671526baf380bbad633 -->
## Question 196: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-196`

**Content revision:** `161dfb84ab74b8b6f3db764cec8fd3c6c5f7c69235d90671526baf380bbad633`

**en review revision:** `c066dce07ffb348d6abecae6581f51034797d9b5a275c725daabe363a105114c`
**es review revision:** `3fcb6433db18c4f13e56d2e46fe1a18331c1d3554f43671947967fcd0731547f`
**pt-BR review revision:** `2def1fd52c685d5da6c8393d2fe65eb3d10bd652e96dcef3b86bb3bf0a72e170`

### English

Which enterprise audit-log qualifier finds events initiated by account alex rather than events affecting alex?

1. user:alex

   user identifies the affected user.

2. actor:alex **[CORRECT]**

   actor identifies the account initiating the action.

3. author:alex

   author is not this audit-log qualifier.

4. owner:alex

   owner is not this audit-log qualifier.

**Concept:** Audit initiator versus affected user

**Authored coaching hints:**

- Separate who acted from who was affected.
- Use audit-specific search qualifiers.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué filtro del registro de auditoría empresarial encuentra eventos iniciados por alex, en lugar de eventos que afectan a alex?

1. user:alex

   user identifica al usuario afectado.

2. actor:alex **[CORRECT]**

   actor identifica la cuenta que inicia la acción.

3. author:alex

   author no es este filtro de auditoría.

4. owner:alex

   owner no es este filtro de auditoría.

**Concept:** Iniciador frente a usuario afectado

**Authored coaching hints:**

- Distingue quién actuó de quién resultó afectado.
- Usa filtros específicos de auditoría.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual filtro do log de auditoria empresarial encontra eventos iniciados por alex, em vez de eventos que afetam alex?

1. user:alex

   user identifica o usuário afetado.

2. actor:alex **[CORRECT]**

   actor identifica a conta que inicia a ação.

3. author:alex

   author não é esse filtro de auditoria.

4. owner:alex

   owner não é esse filtro de auditoria.

**Concept:** Iniciador versus usuário afetado

**Authored coaching hints:**

- Diferencie quem agiu de quem foi afetado.
- Use filtros específicos de auditoria.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise>

<!-- certification-coach-question:admin-197:cb5a212a8c8a4f9bb018edf5285d008b8ce33b73717650752c31d07f31fd9eb8 -->
## Question 197: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-197`

**Content revision:** `cb5a212a8c8a4f9bb018edf5285d008b8ce33b73717650752c31d07f31fd9eb8`

**en review revision:** `46a110b604ee62392a064a8dd5bf094315043023b33ed4914f746bec1cf4209c`
**es review revision:** `3388efad71df1e13985253805322be3c19c141078659ca69d603c134489bfeea`
**pt-BR review revision:** `b2e48bfc5a4529b47c892c55a94bfc90f8b0be15f9a1786e8e7a8b73edfa2c1f`

### English

Which enterprise audit-log query selects repository creation events on or after October 1, 2026?

1. event:repo.create after:2026-10-01

   event and after are not these documented qualifiers.

2. action:repo.create updated:&gt;=2026-10-01

   The audit timestamp qualifier is created, not updated.

3. type:repo.create date:2026-10-01

   type and date are not these documented qualifiers.

4. action:repo.create created:&gt;=2026-10-01 **[CORRECT]**

   action selects the event; created sets the time boundary.

**Concept:** Audit event and time filters

**Authored coaching hints:**

- Combine the action and occurrence time.
- Repository search syntax is not interchangeable with audit syntax.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué consulta de auditoría empresarial selecciona eventos de creación de repositorios desde el 1 de octubre de 2026 inclusive?

1. event:repo.create after:2026-10-01

   event y after no son estos filtros documentados.

2. action:repo.create updated:&gt;=2026-10-01

   El filtro temporal es created, no updated.

3. type:repo.create date:2026-10-01

   type y date no son estos filtros documentados.

4. action:repo.create created:&gt;=2026-10-01 **[CORRECT]**

   action selecciona el evento; created fija el límite temporal.

**Concept:** Filtros de evento y fecha en auditoría

**Authored coaching hints:**

- Combina acción y momento del evento.
- La sintaxis de repositorios no sustituye la de auditoría.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual consulta de auditoria empresarial seleciona eventos de criação de repositórios desde 1º de outubro de 2026, inclusive?

1. event:repo.create after:2026-10-01

   event e after não são esses filtros documentados.

2. action:repo.create updated:&gt;=2026-10-01

   O filtro temporal é created, não updated.

3. type:repo.create date:2026-10-01

   type e date não são esses filtros documentados.

4. action:repo.create created:&gt;=2026-10-01 **[CORRECT]**

   action seleciona o evento; created define o limite temporal.

**Concept:** Filtros de evento e data na auditoria

**Authored coaching hints:**

- Combine ação e momento do evento.
- A sintaxe de repositórios não substitui a de auditoria.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise>

<!-- certification-coach-question:admin-198:1f036d8d9ae0b50a2e92eed78ab600e2924372b9f9f2b20c456f3c0cea3af63a -->
## Question 198: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-198`

**Content revision:** `1f036d8d9ae0b50a2e92eed78ab600e2924372b9f9f2b20c456f3c0cea3af63a`

**en review revision:** `c99a1a20ac0e066f47b58fedc4d33a8376c4a13bae0b02ec9cc8b450ee10c3cf`
**es review revision:** `2dc7b2c6231928d177a9da92c5998e127150c448bbaf9ffd962f82302b270d41`
**pt-BR review revision:** `d08b1ca72ea55c7bbe60f58ca8996e26eabfb82b047ba06cff4cf70ce6f365ba`

### English

For GitHub Enterprise Cloud, how long are non-Git enterprise audit events retained in GitHub's audit log?

1. 180 days **[CORRECT]**

   The Cloud enterprise audit log retains these events for 180 days.

2. 7 days

   Seven days applies to Git events.

3. 30 days

   This is not the documented Cloud audit retention.

4. Indefinitely

   Native retention is finite; external preservation is separate.

**Concept:** Cloud audit retention

**Authored coaching hints:**

- Identify the deployment and event category.
- A default display window differs from retention.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En GitHub Enterprise Cloud, ¿cuánto tiempo conserva GitHub los eventos empresariales de auditoría que no son de Git?

1. 180 días **[CORRECT]**

   El registro empresarial de Cloud conserva estos eventos 180 días.

2. 7 días

   Siete días corresponde a eventos Git.

3. 30 días

   No es la retención documentada de auditoría Cloud.

4. Indefinidamente

   La retención nativa es finita; conservar externamente es distinto.

**Concept:** Retención de auditoría en Cloud

**Authored coaching hints:**

- Identifica el despliegue y la categoría del evento.
- La ventana visible predeterminada no equivale a retención.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

No GitHub Enterprise Cloud, por quanto tempo o GitHub mantém eventos empresariais de auditoria que não são de Git?

1. 180 dias **[CORRECT]**

   O log empresarial do Cloud mantém esses eventos por 180 dias.

2. 7 dias

   Sete dias se aplica a eventos Git.

3. 30 dias

   Não é a retenção documentada de auditoria do Cloud.

4. Indefinidamente

   A retenção nativa é finita; preservar externamente é diferente.

**Concept:** Retenção de auditoria no Cloud

**Authored coaching hints:**

- Identifique a implantação e a categoria do evento.
- A janela visível padrão não equivale à retenção.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise>

<!-- certification-coach-question:admin-199:73bce50f1151bf7be91272878648ba53f89f53d254adc7fe11c2c3d7ca57df5e -->
## Question 199: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-199`

**Content revision:** `73bce50f1151bf7be91272878648ba53f89f53d254adc7fe11c2c3d7ca57df5e`

**en review revision:** `61b1686f68dcde61b44afa5154c1a5bb73f044d80e722736ca881a45c75cf2a6`
**es review revision:** `e6070da380e07fbe32ac9900ae24b8f51a90edd4aa2a830a031aa896ee46f8d9`
**pt-BR review revision:** `ffa66bcd933fced1401a73f3032c6f1c0ea775a1ccba84154ecec4603ca045e0`

### English

Which retention period applies specifically to Git events in a GitHub Enterprise Cloud enterprise audit log?

1. 180 days

   This is the broader audit-event retention, not Git-event retention.

2. 90 days

   The default UI window is not Git-event retention.

3. 7 days **[CORRECT]**

   Cloud audit logs retain Git events for seven days.

4. The repository's artifact retention period

   Artifact retention is a separate setting.

**Concept:** Short-lived Git audit events

**Authored coaching hints:**

- Not every event type has the same lifetime.
- Plan collection before data expires.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué retención corresponde específicamente a eventos Git en el registro empresarial de GitHub Enterprise Cloud?

1. 180 días

   Es la retención general de auditoría, no la de eventos Git.

2. 90 días

   La ventana visible predeterminada no es la retención Git.

3. 7 días **[CORRECT]**

   Los registros Cloud conservan eventos Git siete días.

4. El periodo de retención de artefactos del repositorio

   La retención de artefactos es otra configuración.

**Concept:** Eventos Git de corta retención

**Authored coaching hints:**

- No todas las categorías tienen la misma duración.
- Planifica recopilar antes de que caduquen los datos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual retenção se aplica especificamente a eventos Git no log empresarial do GitHub Enterprise Cloud?

1. 180 dias

   É a retenção geral de auditoria, não a de eventos Git.

2. 90 dias

   A janela visível padrão não é a retenção Git.

3. 7 dias **[CORRECT]**

   Logs do Cloud mantêm eventos Git por sete dias.

4. O período de retenção de artefatos do repositório

   A retenção de artefatos é outra configuração.

**Concept:** Eventos Git de curta retenção

**Authored coaching hints:**

- Nem todas as categorias têm a mesma duração.
- Planeje coletar antes que os dados expirem.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise>

<!-- certification-coach-question:admin-200:9f927efca11b8686ca5f0ef80395ebbf93cc942d45f12887d3c0a832c5998e6d -->
## Question 200: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-200`

**Content revision:** `9f927efca11b8686ca5f0ef80395ebbf93cc942d45f12887d3c0a832c5998e6d`

**en review revision:** `b14348c90596c3252eebac1a4de0fd7c91218911c265fa1a7a7aeaac9b114317`
**es review revision:** `ed324d19f3afe380cda6f09ca5c87eeb40f4a6458a8162a515756d716304192b`
**pt-BR review revision:** `a271bb894f2987a224f9bda3cd7a2d8cc8e03e54843f8f6e883dc7e24ffc39cf`

### English

An enterprise audit-log API request returns 100 records and a Link header containing rel="next". How should the integration collect the rest of the matching records?

1. Drop the date filter to force the API to return one larger page.

   Removing filters broadens the query and does not remove pagination.

2. Follow the next-page URL until no next link remains. **[CORRECT]**

   The API provides pagination links for retrieving subsequent result pages.

3. Treat 100 records as the complete matching event set.

   A next-page link explicitly indicates more results are available.

4. Repeat the identical first-page request until the count changes.

   Repeating the same first page does not advance through the results.

**Concept:** Audit evidence collectors must consume every result page.

**Authored coaching hints:**

- Check response metadata before declaring collection complete.
- Distinguish repeating a page from advancing through a result set.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una solicitud a la API de auditoría empresarial devuelve 100 registros y un encabezado Link con rel="next". ¿Cómo debe recopilar la integración los demás registros coincidentes?

1. Quitar el filtro de fecha para obtener una única página mayor.

   Quitar filtros amplía la consulta y no elimina la paginación.

2. Seguir la URL de la siguiente página hasta que no haya otro enlace next. **[CORRECT]**

   La API proporciona enlaces de paginación para recuperar las páginas siguientes.

3. Considerar los 100 registros como todos los eventos coincidentes.

   El enlace de página siguiente indica explícitamente que hay más resultados.

4. Repetir la primera solicitud idéntica hasta que cambie el número.

   Repetir la misma primera página no avanza por los resultados.

**Concept:** Los recopiladores de auditoría deben consumir todas las páginas.

**Authored coaching hints:**

- Revisa los metadatos de respuesta antes de dar por completa la recopilación.
- Distingue repetir una página de avanzar por los resultados.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma solicitação à API de auditoria empresarial retorna 100 registros e um cabeçalho Link com rel="next". Como a integração deve coletar os demais registros correspondentes?

1. Remover o filtro de data para obter uma única página maior.

   Remover filtros amplia a consulta e não elimina a paginação.

2. Seguir a URL da próxima página até não haver outro link next. **[CORRECT]**

   A API fornece links de paginação para recuperar as páginas seguintes.

3. Considerar os 100 registros como todos os eventos correspondentes.

   O link da próxima página indica explicitamente que existem mais resultados.

4. Repetir a primeira solicitação idêntica até a contagem mudar.

   Repetir a mesma primeira página não avança pelos resultados.

**Concept:** Coletores de auditoria devem consumir todas as páginas de resultados.

**Authored coaching hints:**

- Confira os metadados da resposta antes de considerar a coleta completa.
- Diferencie repetir uma página de avançar pelos resultados.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise>

<!-- certification-coach-question:admin-201:26627bffc0d2cbc153040cd38594ed6b84d1d73c71985d1c88e01a436336f6a3 -->
## Question 201: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-201`

**Content revision:** `26627bffc0d2cbc153040cd38594ed6b84d1d73c71985d1c88e01a436336f6a3`

**en review revision:** `4d36bf42e46bc1b8fef79eb27a9d1e4c7f7a14243fdc157206e5778d18484294`
**es review revision:** `664bfc1e2b5a7c790f4ed8bfa4ec9461c6105bf5fabf8487435fce02d8933c62`
**pt-BR review revision:** `f38ff2d123ed98b3246e85e5c3f302d9abe0774434a84578d965cc5b009cba77`

### English

An authorized integration queries the enterprise audit-log API for clone, fetch, and push events. Which URL parameter specifically selects Git events?

1. include=web

   This selects web events rather than the requested Git events.

2. per\_page=100

   Page size controls pagination, not the event class.

3. order=asc

   Sort order does not select Git rather than web events.

4. include=git **[CORRECT]**

   This parameter selects Git events; include=all also includes web events.

**Concept:** Event-class selection and pagination are separate audit API controls.

**Authored coaching hints:**

- Identify whether the request is about event type, order, or page size.
- Separate Git operations from web-interface activity.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una integración autorizada consulta eventos clone, fetch y push en la API de auditoría empresarial. ¿Qué parámetro URL selecciona específicamente eventos Git?

1. include=web

   Esto selecciona eventos web, no los eventos Git solicitados.

2. per\_page=100

   El tamaño de página controla la paginación, no la clase de evento.

3. order=asc

   El orden no selecciona eventos Git en lugar de eventos web.

4. include=git **[CORRECT]**

   Este parámetro selecciona eventos Git; include=all también incluye eventos web.

**Concept:** La selección de eventos y la paginación son controles distintos de la API.

**Authored coaching hints:**

- Identifica si se pregunta por el tipo de evento, el orden o el tamaño de página.
- Distingue operaciones Git de actividad de la interfaz web.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma integração autorizada consulta eventos clone, fetch e push na API de auditoria empresarial. Qual parâmetro de URL seleciona especificamente eventos Git?

1. include=web

   Isso seleciona eventos web, não os eventos Git solicitados.

2. per\_page=100

   O tamanho da página controla a paginação, não a classe de evento.

3. order=asc

   A ordenação não seleciona eventos Git em vez de eventos web.

4. include=git **[CORRECT]**

   Esse parâmetro seleciona eventos Git; include=all também inclui eventos web.

**Concept:** Seleção de eventos e paginação são controles distintos da API.

**Authored coaching hints:**

- Identifique se a questão trata de tipo de evento, ordenação ou tamanho de página.
- Diferencie operações Git de atividades da interface web.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise>

<!-- certification-coach-question:admin-202:96702f5804394b4fd52deda9c6f694a5e68f8b2b9ac97ff19f5d3b1a6333e6f9 -->
## Question 202: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-202`

**Content revision:** `96702f5804394b4fd52deda9c6f694a5e68f8b2b9ac97ff19f5d3b1a6333e6f9`

**en review revision:** `db19f9302e7360f52b725de350d59a39d36c4507a1a8988a3c15fbfea34c63d1`
**es review revision:** `436d4a1b6fe79f999da4036fecb43f09df92057855e9d5e05a03fdd96be4944b`
**pt-BR review revision:** `f2b761488fdd7ac9a176ff4d3d2c9db74b757b44d9e25d7886d3b099dbacbfdb`

### English

A REST GET uses a valid Authorization header and If-None-Match. GitHub returns 304 Not Modified. How does this conditional response affect the primary rate limit?

1. It does not count against the primary rate limit. **[CORRECT]**

   Correctly authorized conditional requests returning 304 do not consume primary allowance.

2. It consumes the entire remaining primary allowance.

   A 304 does not exhaust the authenticated client's allowance.

3. It always counts as two ordinary GET requests.

   The documented conditional-request behavior does not double its rate-limit cost.

4. It restores all requests spent earlier in the hour.

   Avoiding a charge for this response does not refund previous requests.

**Concept:** Authorized conditional 304 responses avoid primary-rate-limit charges.

**Authored coaching hints:**

- Distinguish an unchanged representation from a newly returned body.
- Consider both the response status and the request's authentication.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un GET REST usa un encabezado Authorization válido e If-None-Match. GitHub devuelve 304 Not Modified. ¿Cómo afecta esta respuesta condicional al límite primario?

1. No cuenta para el límite de solicitudes primario. **[CORRECT]**

   Las solicitudes condicionales correctamente autorizadas con respuesta 304 no consumen el cupo primario.

2. Consume todo el cupo primario restante.

   Un 304 no agota el cupo del cliente autenticado.

3. Siempre cuenta como dos solicitudes GET normales.

   El comportamiento documentado no duplica el coste de la solicitud.

4. Restituye todas las solicitudes usadas antes en esa hora.

   Evitar un cargo por esta respuesta no devuelve solicitudes anteriores.

**Concept:** Las respuestas 304 condicionales autorizadas evitan cargos al límite primario.

**Authored coaching hints:**

- Distingue una representación sin cambios de un cuerpo nuevo.
- Considera tanto el estado de respuesta como la autenticación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um GET REST usa um cabeçalho Authorization válido e If-None-Match. O GitHub retorna 304 Not Modified. Como essa resposta condicional afeta o limite primário?

1. Não conta para o limite de requisições primário. **[CORRECT]**

   Solicitações condicionais corretamente autorizadas com resposta 304 não consomem a cota primária.

2. Consome toda a cota primária restante.

   Uma resposta 304 não esgota a cota do cliente autenticado.

3. Sempre conta como duas solicitações GET comuns.

   O comportamento documentado não duplica o custo da solicitação.

4. Devolve todas as solicitações gastas antes naquela hora.

   Evitar a cobrança desta resposta não devolve solicitações anteriores.

**Concept:** Respostas condicionais 304 autorizadas evitam consumo do limite primário.

**Authored coaching hints:**

- Diferencie uma representação sem mudanças de um corpo novo.
- Considere o status da resposta e a autenticação da solicitação.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api>

<!-- certification-coach-question:admin-203:adfd109bf44618c4b5454185f62e00b6a2993d8330a790ce98cebc5441a8888b -->
## Question 203: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-203`

**Content revision:** `adfd109bf44618c4b5454185f62e00b6a2993d8330a790ce98cebc5441a8888b`

**en review revision:** `02b584edd83d826e529bc986789a4eed4fd5fa407d57c4d1c10aca242798f6b5`
**es review revision:** `89e13fb5b04bbfd1dde04c355dffef8922f0132562721f39872ccfca5eaef33a`
**pt-BR review revision:** `09476c89e0d88251e642df9b2c88a974611de9ad60b9eb26f430d3550d8448d9`

### English

An integration repeatedly reaches secondary REST limits while issuing many simultaneous requests. Which scheduling change follows GitHub's prevention guidance?

1. Remove authentication from all requests.

   Removing authentication does not solve concurrent-request pressure.

2. Retry each failed request immediately in every worker.

   Immediate parallel retries sustain the burst instead of controlling it.

3. Queue requests and issue them serially. **[CORRECT]**

   Serial requests reduce concurrency that can trigger secondary limits.

4. Start more parallel workers with the same credential.

   Additional concurrent workers worsen the scheduling behavior.

**Concept:** Request scheduling can prevent secondary throttling before retries are needed.

**Authored coaching hints:**

- Look for the load pattern causing the throttling.
- Distinguish controlling concurrency from changing credentials.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una integración alcanza repetidamente límites REST secundarios al enviar muchas solicitudes simultáneas. ¿Qué cambio de planificación sigue las recomendaciones preventivas de GitHub?

1. Eliminar la autenticación de todas las solicitudes.

   Quitar la autenticación no resuelve la presión de solicitudes concurrentes.

2. Reintentar inmediatamente cada solicitud fallida desde todos los procesos.

   Los reintentos paralelos inmediatos mantienen la ráfaga en lugar de controlarla.

3. Poner las solicitudes en una cola y enviarlas en serie. **[CORRECT]**

   Las solicitudes en serie reducen la concurrencia que puede activar límites secundarios.

4. Iniciar más procesos paralelos con la misma credencial.

   Más procesos concurrentes empeoran el patrón de planificación.

**Concept:** La planificación de solicitudes puede prevenir límites secundarios antes de reintentar.

**Authored coaching hints:**

- Busca el patrón de carga que provoca la limitación.
- Distingue controlar la concurrencia de cambiar credenciales.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma integração atinge repetidamente limites REST secundários ao enviar muitas solicitações simultâneas. Qual mudança de agendamento segue a recomendação preventiva do GitHub?

1. Remover a autenticação de todas as solicitações.

   Remover a autenticação não resolve a pressão de solicitações concorrentes.

2. Repetir imediatamente cada solicitação com falha em todos os processos.

   Repetições paralelas imediatas mantêm o pico em vez de controlá-lo.

3. Colocar as solicitações em uma fila e enviá-las em série. **[CORRECT]**

   Solicitações em série reduzem a concorrência que pode acionar limites secundários.

4. Iniciar mais processos paralelos com a mesma credencial.

   Mais processos concorrentes pioram o padrão de agendamento.

**Concept:** O agendamento pode prevenir limites secundários antes de precisar repetir solicitações.

**Authored coaching hints:**

- Procure o padrão de carga que causa a limitação.
- Diferencie controlar concorrência de mudar credenciais.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api>

<!-- certification-coach-question:admin-204:5282e1737f15c42ffc3ea1fad2780e6371abf49c275df2b746804dd38ff1584d -->
## Question 204: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-204`

**Content revision:** `5282e1737f15c42ffc3ea1fad2780e6371abf49c275df2b746804dd38ff1584d`

**en review revision:** `a92551155811991b7634a11f6791053cf33cc5fff09168cde4fdd8aaed9b3527`
**es review revision:** `98de6a571ca72c81ffc14c6c546aa58d9e35525305a1f579bccae379c28b034d`
**pt-BR review revision:** `c2ba9e6bb9c66a04998a9b9cacb2c9ddfd3670d906b4d407450f27011ac10339`

### English

An integration receives 404 for a private repository that its administrator confirms exists. What should be checked first?

1. Whether the repository has enough stars

   Stars do not authorize API access.

2. The integration's authentication and resource access **[CORRECT]**

   GitHub can hide private resources behind 404 when access is insufficient.

3. Whether the repository has a public release

   Releases do not grant private repository access.

4. The default artifact compression level

   Compression is unrelated to API authorization.

**Concept:** Diagnosing private-resource API responses

**Authored coaching hints:**

- A status code can avoid revealing private resource existence.
- Check credentials before assuming deletion.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una integración recibe 404 para un repositorio privado cuya existencia confirma el administrador. ¿Qué debe comprobar primero?

1. Si el repositorio tiene suficientes estrellas

   Las estrellas no autorizan acceso API.

2. La autenticación y el acceso de la integración al recurso **[CORRECT]**

   GitHub puede ocultar recursos privados con 404 si falta acceso.

3. Si el repositorio tiene una versión pública

   Las versiones no conceden acceso al repositorio privado.

4. El nivel predeterminado de compresión de artefactos

   La compresión no se relaciona con autorización API.

**Concept:** Diagnóstico de respuestas sobre recursos privados

**Authored coaching hints:**

- Un código puede evitar revelar que existe un recurso privado.
- Comprueba credenciales antes de suponer eliminación.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma integração recebe 404 para um repositório privado cuja existência o administrador confirma. O que deve verificar primeiro?

1. Se o repositório tem estrelas suficientes

   Estrelas não autorizam acesso à API.

2. A autenticação e o acesso da integração ao recurso **[CORRECT]**

   O GitHub pode ocultar recursos privados com 404 quando falta acesso.

3. Se o repositório tem uma versão pública

   Versões não concedem acesso ao repositório privado.

4. O nível padrão de compactação de artefatos

   Compactação não se relaciona à autorização da API.

**Concept:** Diagnóstico de respostas sobre recursos privados

**Authored coaching hints:**

- Um código pode evitar revelar a existência de recurso privado.
- Verifique credenciais antes de presumir exclusão.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api>

<!-- certification-coach-question:admin-205:6226c389eff612e7f323db7d1d262895fdb07f2e16eaa3715df60625f03cd6fb -->
## Question 205: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-205`

**Content revision:** `6226c389eff612e7f323db7d1d262895fdb07f2e16eaa3715df60625f03cd6fb`

**en review revision:** `716dd42e0fc92be108c7cf4cf61e159ec8b6f2d65863f0ac034935a86cecefae`
**es review revision:** `75a34513fa9a78a673f8a915d1b29499ccdfd0e28ded740c17551e196890ed39`
**pt-BR review revision:** `4a34fe9615fcd2b497e16bea4c9562ce6d616c391c1d8963f3bb811c5e68e24d`

### English

After validating a webhook signature, an integration must recognize a requested redelivery of an event it already processed. Which GitHub header retains the original delivery identifier?

1. X-GitHub-Event

   This identifies an event type, which many different deliveries can share.

2. User-Agent

   The user agent is not the unique delivery identifier.

3. Content-Type

   The content type describes the representation rather than the individual delivery.

4. X-GitHub-Delivery **[CORRECT]**

   A requested redelivery preserves the original X-GitHub-Delivery value.

**Concept:** Delivery IDs support deduplication but do not replace signature validation.

**Authored coaching hints:**

- Separate an event's type from an individual delivery's identity.
- Consider which value should stay stable when that delivery is requested again.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Tras validar la firma de un webhook, una integración debe reconocer una reentrega solicitada de un evento ya procesado. ¿Qué encabezado de GitHub conserva el identificador original?

1. X-GitHub-Event

   Esto identifica un tipo de evento compartido por muchas entregas distintas.

2. User-Agent

   El agente de usuario no es el identificador único de entrega.

3. Content-Type

   El tipo de contenido describe la representación, no la entrega individual.

4. X-GitHub-Delivery **[CORRECT]**

   Una reentrega solicitada conserva el valor X-GitHub-Delivery original.

**Concept:** Los identificadores de entrega ayudan a evitar duplicados, pero no sustituyen la validación de firma.

**Authored coaching hints:**

- Distingue el tipo de evento de la identidad de una entrega.
- Considera qué valor debe mantenerse cuando se solicita la misma entrega otra vez.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Após validar a assinatura de um webhook, uma integração precisa reconhecer uma reentrega solicitada de um evento já processado. Qual cabeçalho do GitHub preserva o identificador original?

1. X-GitHub-Event

   Isso identifica um tipo de evento compartilhado por várias entregas diferentes.

2. User-Agent

   O agente do usuário não é o identificador único da entrega.

3. Content-Type

   O tipo de conteúdo descreve a representação, não a entrega individual.

4. X-GitHub-Delivery **[CORRECT]**

   Uma reentrega solicitada preserva o valor X-GitHub-Delivery original.

**Concept:** Identificadores de entrega ajudam a evitar duplicações, mas não substituem a validação de assinatura.

**Authored coaching hints:**

- Diferencie o tipo de evento da identidade de uma entrega.
- Considere qual valor permanece estável quando a mesma entrega é solicitada novamente.

</details>

**Official supporting source:** <https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks>

<!-- certification-coach-question:admin-206:3cf2e6ff1e914e9694e5a3201d36d8a73cb00d5d184da6688de5da5e2ec4bec9 -->
## Question 206: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-206`

**Content revision:** `3cf2e6ff1e914e9694e5a3201d36d8a73cb00d5d184da6688de5da5e2ec4bec9`

**en review revision:** `9001db597935fa02a81d8e083ee0f49dc35a8d03213a5215eb73b36b732a6a38`
**es review revision:** `4559cf8ef1786b8fe8f6f9a9c8be16bc92ab90cdd7d6e9b3b69fe99d150e8014`
**pt-BR review revision:** `e04784309822a1bec269ca4448aa254dcf078121d33dc570b2eaaa0b07c6a456`

### English

How can an administrator distinguish primary from secondary REST API throttling when both may return 403 or 429?

1. Inspect the response message and rate-limit headers **[CORRECT]**

   The message and headers explain the limiting condition.

2. Treat every 403 response as an expired token

   403 can represent throttling or other failures.

3. Treat every 429 response as a missing repository

   429 indicates excessive requests, not missing repositories.

4. Count only the number of open pull requests

   Pull-request counts do not classify throttling.

**Concept:** Classifying API throttling

**Authored coaching hints:**

- HTTP status alone may be insufficient.
- Use the diagnostic metadata returned with the error.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Cómo puede distinguir un administrador la limitación REST principal de la secundaria si ambas pueden devolver 403 o 429?

1. Examinar el mensaje y las cabeceras de límites **[CORRECT]**

   El mensaje y las cabeceras explican la limitación.

2. Tratar cada 403 como un token caducado

   403 puede indicar limitación u otros fallos.

3. Tratar cada 429 como un repositorio ausente

   429 indica exceso de solicitudes, no repositorios ausentes.

4. Contar solo las solicitudes de cambios abiertas

   Contar solicitudes de cambios no clasifica límites.

**Concept:** Clasificación de limitaciones de API

**Authored coaching hints:**

- El estado HTTP puede no ser suficiente.
- Usa los metadatos de diagnóstico del error.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Como um administrador distingue a limitação REST principal da secundária se ambas podem retornar 403 ou 429?

1. Examinar a mensagem e os cabeçalhos de limites **[CORRECT]**

   A mensagem e os cabeçalhos explicam a limitação.

2. Tratar todo 403 como um token expirado

   403 pode indicar limitação ou outras falhas.

3. Tratar todo 429 como um repositório ausente

   429 indica excesso de solicitações, não repositórios ausentes.

4. Contar apenas os pull requests abertos

   Contar pull requests não classifica limites.

**Concept:** Classificação de limitações da API

**Authored coaching hints:**

- O status HTTP pode não ser suficiente.
- Use os metadados de diagnóstico do erro.

</details>

**Official supporting source:** <https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api>

<!-- certification-coach-question:admin-207:b9b23252244ccfd27f00bf4e7ad9e8bbb04e4c6ab10956384d03d9180be4af7b -->
## Question 207: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-207`

**Content revision:** `b9b23252244ccfd27f00bf4e7ad9e8bbb04e4c6ab10956384d03d9180be4af7b`

**en review revision:** `193e787e914b92fb316a24cd18d48286deafee0dda5f1e4b415dfb17014c3b57`
**es review revision:** `d3300cd192d90575cab1da25e969e2751865d3c483216c5a3371919100e766f9`
**pt-BR review revision:** `022a6b229eaee83936b8c7b70cc4f804b3f47dbfe26ab48c3ae46eb5bd8e4200`

### English

A GHES 3.19 administrator is investigating a nearly full root partition before choosing what to remove. Which utility checks for large files and deleted files with open handles?

1. ghe-config-apply

   This applies configuration changes rather than locating large or still-open deleted files.

2. ghe-announce

   This changes the user announcement banner, not disk diagnostics.

3. ghe-check-disk-usage **[CORRECT]**

   This utility investigates large files and deleted files whose handles remain open.

4. ghe-cleanup-caches

   This removes caches rather than performing the specified disk-usage investigation.

**Concept:** Inspect disk usage before choosing a cleanup operation.

**Authored coaching hints:**

- Distinguish investigation from a command that changes stored data.
- Match the utility's documented purpose to the observed resource problem.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona administra GHES 3.19 e investiga una partición raíz casi llena antes de decidir qué borrar. ¿Qué utilidad busca archivos grandes y archivos eliminados con manejadores abiertos?

1. ghe-config-apply

   Esto aplica cambios de configuración, no localiza esos archivos.

2. ghe-announce

   Esto cambia el anuncio para usuarios, no diagnostica el disco.

3. ghe-check-disk-usage **[CORRECT]**

   Esta utilidad investiga archivos grandes y eliminados que conservan manejadores abiertos.

4. ghe-cleanup-caches

   Esto elimina cachés, en lugar de realizar la investigación de uso de disco indicada.

**Concept:** Inspecciona el uso de disco antes de elegir una operación de limpieza.

**Authored coaching hints:**

- Distingue investigar de ejecutar un comando que cambia datos almacenados.
- Relaciona el propósito documentado de la utilidad con el problema de recursos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa administra GHES 3.19 e investiga uma partição raiz quase cheia antes de decidir o que remover. Qual utilitário procura arquivos grandes e arquivos excluídos com identificadores abertos?

1. ghe-config-apply

   Isso aplica configurações, não localiza esses arquivos.

2. ghe-announce

   Isso altera o anúncio para usuários, não diagnostica o disco.

3. ghe-check-disk-usage **[CORRECT]**

   Esse utilitário investiga arquivos grandes e excluídos cujos identificadores continuam abertos.

4. ghe-cleanup-caches

   Isso remove caches em vez de executar a investigação de uso de disco solicitada.

**Concept:** Inspecione o uso de disco antes de escolher uma operação de limpeza.

**Authored coaching hints:**

- Diferencie investigação de um comando que altera dados armazenados.
- Relacione o propósito documentado do utilitário ao problema de recursos.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities>

<!-- certification-coach-question:admin-208:c94079a3e64d1823fd9c3cb650b59f572dde8c145ce93c128b2345fe03cadcd1 -->
## Question 208: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-208`

**Content revision:** `c94079a3e64d1823fd9c3cb650b59f572dde8c145ce93c128b2345fe03cadcd1`

**en review revision:** `772f33d7f8572b62d107dda5b3306c9043e1ee7ee4207743e3b6312adb9453b6`
**es review revision:** `a8e6dbdae7510a8276b9edf0abbd1d2d12e5b71688b50830c0932c1f53f342d9`
**pt-BR review revision:** `7fc67b54f3ff00a132acf9ce93b9f06cdd18474fa6f9aafd04bd5ba8254a9468`

### English

In a GHES 3.19 administrative SSH session, which command reads core.github-hostname without setting a new hostname or applying configuration changes?

1. ghe-config-check

   This validates configuration rather than retrieving the requested value.

2. ghe-config core.github-hostname **[CORRECT]**

   With only the key, ghe-config retrieves its current value.

3. ghe-config core.github-hostname new.example.com

   Adding a value changes the setting rather than merely reading it.

4. ghe-config-apply

   This applies configuration changes instead of retrieving just this key.

**Concept:** ghe-config distinguishes retrieval from modification by its arguments.

**Authored coaching hints:**

- Compare a key-only command with a key followed by a new value.
- Separate reading configuration from validating or applying it.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una sesión SSH administrativa de GHES 3.19, ¿qué comando lee core.github-hostname sin definir otro nombre ni aplicar cambios de configuración?

1. ghe-config-check

   Esto valida la configuración en vez de recuperar el valor solicitado.

2. ghe-config core.github-hostname **[CORRECT]**

   Con solo la clave, ghe-config recupera su valor actual.

3. ghe-config core.github-hostname new.example.com

   Añadir un valor modifica el ajuste en lugar de solo leerlo.

4. ghe-config-apply

   Esto aplica cambios en vez de recuperar únicamente esta clave.

**Concept:** Los argumentos de ghe-config distinguen consulta de modificación.

**Authored coaching hints:**

- Compara una clave sola con una clave seguida de un valor nuevo.
- Distingue consultar la configuración de validarla o aplicarla.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma sessão SSH administrativa do GHES 3.19, qual comando lê core.github-hostname sem definir outro nome nem aplicar mudanças de configuração?

1. ghe-config-check

   Isso valida a configuração em vez de recuperar o valor solicitado.

2. ghe-config core.github-hostname **[CORRECT]**

   Com apenas a chave, ghe-config recupera seu valor atual.

3. ghe-config core.github-hostname new.example.com

   Adicionar um valor altera a configuração em vez de apenas consultá-la.

4. ghe-config-apply

   Isso aplica alterações em vez de recuperar somente essa chave.

**Concept:** Os argumentos de ghe-config distinguem consulta de modificação.

**Authored coaching hints:**

- Compare uma chave isolada com uma chave seguida de um valor novo.
- Diferencie consultar a configuração de validá-la ou aplicá-la.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities>

<!-- certification-coach-question:admin-209:ef9682665bb09212a17fcee6e1ead6d86399eb8eb1354d9feb33422662a16e85 -->
## Question 209: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-209`

**Content revision:** `ef9682665bb09212a17fcee6e1ead6d86399eb8eb1354d9feb33422662a16e85`

**en review revision:** `91b3788582abdb8d05f80887849264b2ea4d97aaa4c24d014927f024c5a3fe6e`
**es review revision:** `48e88244183700c69580d9d0b9033d2fa62d9f142594a16ffbc147448a4f35e7`
**pt-BR review revision:** `1e820f24efbb7e4b250bb1c5b5f44cdb80798b7bdca307edc995602893146aea`

### English

During a GHES 3.19 incident, an SSH administrator wants to watch relevant installation log files as new entries arrive, not download a static bundle. Which utility fits?

1. ghe-support-bundle

   A support bundle packages diagnostic evidence instead of following live logs.

2. ghe-config-check

   This validates configuration rather than watching log entries arrive.

3. ghe-nwo

   This maps a repository ID to its owner and name, not to live log output.

4. ghe-logs-tail **[CORRECT]**

   This utility tails relevant installation logs for ongoing observation.

**Concept:** Live log following and packaged diagnostic evidence serve different tasks.

**Authored coaching hints:**

- Identify whether the responder needs a snapshot or ongoing output.
- Match the requested observation to the utility's purpose.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Durante un incidente de GHES 3.19, una persona con SSH administrativo quiere observar los registros de la instalación a medida que llegan entradas, no descargar un paquete estático. ¿Qué utilidad corresponde?

1. ghe-support-bundle

   Un paquete agrupa evidencia diagnóstica en lugar de seguir registros en directo.

2. ghe-config-check

   Esto valida la configuración, no observa nuevas entradas de registro.

3. ghe-nwo

   Esto relaciona un ID de repositorio con su propietario y nombre, no muestra registros en directo.

4. ghe-logs-tail **[CORRECT]**

   Esta utilidad sigue los registros relevantes para observarlos continuamente.

**Concept:** Seguir registros en directo y empaquetar diagnósticos cumplen tareas distintas.

**Authored coaching hints:**

- Identifica si se necesita una instantánea o una salida continua.
- Relaciona la observación solicitada con el propósito de la utilidad.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Durante um incidente no GHES 3.19, uma pessoa com SSH administrativo quer observar os logs da instalação conforme novas entradas chegam, e não baixar um pacote estático. Qual utilitário atende a isso?

1. ghe-support-bundle

   Um pacote reúne evidências de diagnóstico em vez de acompanhar logs ao vivo.

2. ghe-config-check

   Isso valida a configuração, não observa novas entradas de log.

3. ghe-nwo

   Isso relaciona um ID de repositório ao proprietário e nome, não exibe logs ao vivo.

4. ghe-logs-tail **[CORRECT]**

   Esse utilitário acompanha logs relevantes para observação contínua.

**Concept:** Acompanhar logs ao vivo e empacotar diagnósticos atendem a tarefas distintas.

**Authored coaching hints:**

- Identifique se é necessário um retrato ou uma saída contínua.
- Relacione a observação solicitada ao propósito do utilitário.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities>

<!-- certification-coach-question:admin-210:5c7f0254f560c0759206e0f79d746f0256656b83730e2cafd759de39afbe9e80 -->
## Question 210: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-210`

**Content revision:** `5c7f0254f560c0759206e0f79d746f0256656b83730e2cafd759de39afbe9e80`

**en review revision:** `0d61670d44d19518226e8d7f442a41c646e3af8eb3fb11536f221c80381d499b`
**es review revision:** `34341590e51246491dfddbd26191b142a7bfa1c0cc1cfbaeedb9f5630df8c30e`
**pt-BR review revision:** `adbf8037d516643b7d3a026281182cfdd5edbb66ed06c1de2f07d1c8c24166a8`

### English

An enterprise uses data residency at octocorp.ghe.com. Which account should its administrator use to create a support ticket about that enterprise?

1. The enterprise's GHE.com account. **[CORRECT]**

   Data-resident enterprise support tickets must use the corresponding GHE.com account.

2. A personal GitHub.com account using the same work email.

   Matching email addresses do not replace the required GHE.com account context.

3. A GitHub.com account that administers a different enterprise.

   Administration of another enterprise does not establish this data-resident account context.

4. A GHE.com account belonging to a different enterprise.

   The account must correspond to the enterprise that needs support.

**Concept:** Data-resident enterprises require their GHE.com account context in Support.

**Authored coaching hints:**

- Check which host owns the enterprise identity.
- Distinguish the support account context from the information included in a ticket.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una empresa usa residencia de datos en octocorp.ghe.com. ¿Qué cuenta debe usar su administrador para crear un ticket sobre esa empresa?

1. La cuenta GHE.com de la empresa. **[CORRECT]**

   Los tickets de una empresa con residencia de datos deben usar su cuenta GHE.com correspondiente.

2. Una cuenta personal de GitHub.com con el mismo correo de trabajo.

   Coincidir en el correo no sustituye el contexto de cuenta GHE.com requerido.

3. Una cuenta GitHub.com que administra otra empresa.

   Administrar otra empresa no establece este contexto de cuenta con residencia de datos.

4. Una cuenta GHE.com que pertenece a otra empresa.

   La cuenta debe corresponder a la empresa que necesita soporte.

**Concept:** Las empresas con residencia de datos requieren su contexto de cuenta GHE.com en soporte.

**Authored coaching hints:**

- Comprueba qué host posee la identidad empresarial.
- Distingue el contexto de cuenta de la información incluida en el ticket.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma empresa usa residência de dados em octocorp.ghe.com. Qual conta seu administrador deve usar para criar um chamado sobre essa empresa?

1. A conta GHE.com da empresa. **[CORRECT]**

   Chamados de empresas com residência de dados devem usar a conta GHE.com correspondente.

2. Uma conta pessoal do GitHub.com com o mesmo email de trabalho.

   O mesmo email não substitui o contexto da conta GHE.com exigido.

3. Uma conta GitHub.com que administra outra empresa.

   Administrar outra empresa não estabelece esse contexto de conta com residência de dados.

4. Uma conta GHE.com pertencente a outra empresa.

   A conta deve corresponder à empresa que precisa de suporte.

**Concept:** Empresas com residência de dados exigem seu contexto de conta GHE.com no suporte.

**Authored coaching hints:**

- Confira qual host possui a identidade empresarial.
- Diferencie o contexto da conta das informações incluídas no chamado.

</details>

**Official supporting source:** <https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket>

<!-- certification-coach-question:admin-211:abcec80190533e44f75e15d40633612f7391a5aac09e1f4fddf5f84dd4a40897 -->
## Question 211: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-211`

**Content revision:** `abcec80190533e44f75e15d40633612f7391a5aac09e1f4fddf5f84dd4a40897`

**en review revision:** `b841c50557207fed9d313502c0b40f77afccfc99d4d31e884a0d12612559a0a0`
**es review revision:** `62b4d8b59d7b449a7bfc54dabcbf449b305928417aa4f1fbff423e70c613db24`
**pt-BR review revision:** `f8a5964775b7b0eea050cc7c173590c04d1620b3b0b39f0ae144e3b1e1ba540c`

### English

A GHES 3.19 administrator suspects background-job queues are backing up. Which utility displays the distribution of queued jobs and jobs currently processing?

1. ghe-es-index-status

   This reports Elasticsearch index status instead of background-job queue distribution.

2. ghe-announce

   This manages an announcement banner rather than inspecting background jobs.

3. ghe-aqueduct-info **[CORRECT]**

   This utility reports queued background jobs and those being processed.

4. ghe-check-disk-usage

   This investigates large or still-open deleted files rather than job queues.

**Concept:** Choose monitoring evidence for the subsystem exhibiting the backlog.

**Authored coaching hints:**

- Identify whether the bottleneck is a work queue, disk, or search index.
- Distinguish observing a queue from notifying users about an incident.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una persona administra GHES 3.19 y sospecha acumulación de trabajos en segundo plano. ¿Qué utilidad muestra la distribución de trabajos en cola y los que se procesan actualmente?

1. ghe-es-index-status

   Esto informa del estado de índices Elasticsearch, no de la distribución de colas.

2. ghe-announce

   Esto gestiona un anuncio en lugar de inspeccionar trabajos en segundo plano.

3. ghe-aqueduct-info **[CORRECT]**

   Esta utilidad informa de los trabajos en cola y los que se están procesando.

4. ghe-check-disk-usage

   Esto investiga archivos grandes o eliminados aún abiertos, no colas de trabajos.

**Concept:** Selecciona evidencia del subsistema que presenta la acumulación.

**Authored coaching hints:**

- Identifica si el cuello de botella está en una cola, el disco o un índice.
- Distingue observar la cola de informar a usuarios de un incidente.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma pessoa administra GHES 3.19 e suspeita de acúmulo nas filas de tarefas em segundo plano. Qual utilitário mostra a distribuição das tarefas em fila e das que estão sendo processadas?

1. ghe-es-index-status

   Isso informa o status dos índices Elasticsearch, não a distribuição das filas.

2. ghe-announce

   Isso gerencia um anúncio em vez de inspecionar tarefas em segundo plano.

3. ghe-aqueduct-info **[CORRECT]**

   Esse utilitário informa tarefas em fila e as que estão sendo processadas.

4. ghe-check-disk-usage

   Isso investiga arquivos grandes ou excluídos ainda abertos, não filas de tarefas.

**Concept:** Escolha evidências do subsistema que apresenta o acúmulo.

**Authored coaching hints:**

- Identifique se o gargalo está em uma fila, no disco ou em um índice.
- Diferencie observar uma fila de informar usuários sobre um incidente.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-server@3.19/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities>

<!-- certification-coach-question:admin-212:9a875e6894ef95c8303f292da8dd137733340f9f8f0a4d124a6d382df946e976 -->
## Question 212: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-212`

**Content revision:** `9a875e6894ef95c8303f292da8dd137733340f9f8f0a4d124a6d382df946e976`

**en review revision:** `9c76a2701907b5dba9bde5c7e5d968d911fa8ff903f0897b712097dc4cd690a7`
**es review revision:** `11337dbf24dda4d5bfda77f16f1077699daaf409c6104a9df2d5c4869f3aeb3e`
**pt-BR review revision:** `f27d202e2dd941180c26c48390521430f45341196d759f3030622e4f5866ba33`

### English

An enterprise dormant-user report flags an account. How should the administrator use this evidence?

1. Assume no work occurred in private repositories during the period

   The report excludes some private-repository work.

2. Review measured activity and business need **[CORRECT]**

   Review coverage and business need before reclaiming access.

3. Conclude that no token or SSH key was used during the period

   Token and SSH activity are not all counted as active here.

4. Remove its assigned license immediately without checking business needs

   Dormancy alone does not establish that access is unnecessary.

**Concept:** Interpreting dormant-user evidence

**Authored coaching hints:**

- A metric has a documented scope.
- Treat a flag as a review signal, not a complete verdict.

<details>
<summary>Español — same answer key and option order</summary>

### Español

El informe empresarial de usuarios inactivos marca una cuenta. ¿Cómo debe usar el administrador esta evidencia?

1. Suponer que no hubo trabajo en repositorios privados durante el periodo

   El informe excluye parte del trabajo en repositorios privados.

2. Revisar actividad medida y necesidad empresarial **[CORRECT]**

   Revisa cobertura y necesidad antes de recuperar acceso.

3. Concluir que no se usó ningún token ni clave SSH durante el periodo

   La actividad con tokens y SSH no siempre cuenta como activa aquí.

4. Retirar la licencia inmediatamente sin comprobar necesidades empresariales

   La inactividad no demuestra por sí sola que el acceso sobre.

**Concept:** Interpretación de evidencia de inactividad

**Authored coaching hints:**

- Una métrica tiene un ámbito documentado.
- Una marca es señal de revisión, no veredicto completo.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

O relatório empresarial de usuários inativos sinaliza uma conta. Como o administrador deve usar essa evidência?

1. Presumir que não houve trabalho em repositórios privados no período

   O relatório exclui parte do trabalho em repositórios privados.

2. Revisar atividade medida e necessidade do negócio **[CORRECT]**

   Revise cobertura e necessidade antes de recuperar acesso.

3. Concluir que nenhum token ou chave SSH foi usado no período

   A atividade com tokens e SSH nem sempre conta como ativa aqui.

4. Remover a licença imediatamente sem verificar necessidades do negócio

   A inatividade sozinha não demonstra que o acesso é desnecessário.

**Concept:** Interpretação de evidências de inatividade

**Authored coaching hints:**

- Uma métrica tem um escopo documentado.
- Uma marca é sinal de revisão, não um veredito completo.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users>

<!-- certification-coach-question:admin-213:3db51ed3f058f0ef036a6aee937f4567c04bae636b6ac1aa95ecf0ffafbcf192 -->
## Question 213: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-213`

**Content revision:** `3db51ed3f058f0ef036a6aee937f4567c04bae636b6ac1aa95ecf0ffafbcf192`

**en review revision:** `15635f63e4207f7153bb95e6ccaf9771c6c70abb9d91009fb09031a53bd5c34f`
**es review revision:** `3f52fdb7420d02f0f702b0a5b4d28b203db1f3cf2c20b47243f11455883700ce`
**pt-BR review revision:** `7f03f971809ddb85b0300e14de82de3bb3594fb40835ad3bf43dfd805d37e7ef`

### English

Which activity can be missed by GitHub Enterprise Cloud's documented dormant-user activity definition?

1. Git operations on private repositories **[CORRECT]**

   Private-repository Git operations are not counted as active here.

2. Creating a pull request in the enterprise

   Creating pull requests is a listed active behavior.

3. Commenting on a pull request in the enterprise

   Pull-request comments are a listed active behavior.

4. Publishing a release in the enterprise

   Publishing releases is a listed active behavior.

**Concept:** Dormancy metric coverage

**Authored coaching hints:**

- An activity report may exclude valid work.
- Check the precise definition before interpreting absence.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué actividad puede quedar fuera de la definición documentada de actividad del informe de inactividad de GitHub Enterprise Cloud?

1. Operaciones Git en repositorios privados **[CORRECT]**

   Las operaciones Git en repositorios privados no cuentan como actividad aquí.

2. Crear una solicitud de cambios en la empresa

   Crear solicitudes de cambios figura como actividad.

3. Comentar una solicitud de cambios en la empresa

   Los comentarios en solicitudes de cambios figuran como actividad.

4. Publicar una versión en la empresa

   Publicar versiones figura como actividad.

**Concept:** Cobertura de la métrica de inactividad

**Authored coaching hints:**

- Un informe puede excluir trabajo válido.
- Revisa la definición exacta antes de interpretar una ausencia.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual atividade pode ficar fora da definição documentada de atividade do relatório de inatividade do GitHub Enterprise Cloud?

1. Operações Git em repositórios privados **[CORRECT]**

   Operações Git em repositórios privados não contam como atividade aqui.

2. Criar um pull request na empresa

   Criar pull requests consta como atividade.

3. Comentar um pull request na empresa

   Comentários em pull requests constam como atividade.

4. Publicar uma versão na empresa

   Publicar versões consta como atividade.

**Concept:** Cobertura da métrica de inatividade

**Authored coaching hints:**

- Um relatório pode excluir trabalho válido.
- Confira a definição exata antes de interpretar uma ausência.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users>

<!-- certification-coach-question:admin-214:46f56608842ae220a190de0607fd347cdca7cfa30ac230e6be554f87b5d7960e -->
## Question 214: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-214`

**Content revision:** `46f56608842ae220a190de0607fd347cdca7cfa30ac230e6be554f87b5d7960e`

**en review revision:** `e3cc4faf913ca02d2fc58c89f658c85281486bdee71d2f574fa6f84477c0e978`
**es review revision:** `0f26108a66a5c3d8a3d5e75e88b7e63cc797e8a923fc25503b0e33f805bbf786`
**pt-BR review revision:** `a55a0b945a6a4d7d5bfcf5b7604b7f024506e6faee91868579f5590944939ae4`

### English

A team member made no commits but reviewed pull requests during the reporting period. How should an administrator assess activity?

1. Classify the member as inactive from commit count alone

   Commits alone do not capture collaboration.

2. Reassign the member's license without checking other activity

   License decisions need broader context.

3. Use repository stars as the sole productivity measure

   Stars are not a complete individual activity measure.

4. Include relevant review and collaboration activity **[CORRECT]**

   Pull-request review activity is meaningful recorded participation.

**Concept:** Assessing adoption beyond commits

**Authored coaching hints:**

- Different roles contribute in different ways.
- Use measures aligned with the work being performed.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un miembro no hizo commits, pero revisó solicitudes de cambios durante el periodo. ¿Cómo debe evaluar su actividad el administrador?

1. Clasificarlo como inactivo solo por sus commits

   Los commits no capturan toda la colaboración.

2. Reasignar su licencia sin comprobar otra actividad

   Las decisiones de licencia requieren más contexto.

3. Usar estrellas como única medida de productividad

   Las estrellas no miden completamente la actividad individual.

4. Incluir actividad pertinente de revisión y colaboración **[CORRECT]**

   Las revisiones son participación significativa registrada.

**Concept:** Evaluación de adopción más allá de commits

**Authored coaching hints:**

- Los distintos roles contribuyen de maneras distintas.
- Usa medidas acordes al trabajo realizado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um membro não fez commits, mas revisou pull requests durante o período. Como o administrador deve avaliar sua atividade?

1. Classificá-lo como inativo apenas pelos commits

   Commits não capturam toda a colaboração.

2. Reatribuir sua licença sem verificar outra atividade

   Decisões de licença exigem mais contexto.

3. Usar estrelas como única medida de produtividade

   Estrelas não medem completamente a atividade individual.

4. Incluir atividades pertinentes de revisão e colaboração **[CORRECT]**

   Revisões são participação significativa registrada.

**Concept:** Avaliação da adoção além de commits

**Authored coaching hints:**

- Papéis diferentes contribuem de maneiras diferentes.
- Use medidas alinhadas ao trabalho realizado.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users>

<!-- certification-coach-question:admin-215:52d2d5ed69eb5c97655dbbfd1d50436fdbd2ece76fdd5821c23a90b3e6a910b5 -->
## Question 215: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-215`

**Content revision:** `52d2d5ed69eb5c97655dbbfd1d50436fdbd2ece76fdd5821c23a90b3e6a910b5`

**en review revision:** `1f8c7e5c5b721d04d52207c80194cb526650ee6909f073be028bc88611336f75`
**es review revision:** `1ad0c0b721f01db3a8df73950402cd9b6c230060d0186522ef116f7219ec8426`
**pt-BR review revision:** `bd1a05b14cc494949417f20adf9ea4034c10ec048ed19844f96fa8307c165cac`

### English

Where does an enterprise owner generate a dormant-user report in the current GitHub Enterprise Cloud English UI?

1. Repository &gt; Insights &gt; Traffic

   Repository traffic is not an enterprise dormant-user report.

2. Organization &gt; Settings &gt; Actions &gt; Runners

   Runner inventory does not generate this report.

3. Enterprise &gt; Compliance &gt; Reports &gt; Dormant Users **[CORRECT]**

   Compliance reports include Dormant Users.

4. Enterprise &gt; Billing &amp; Licensing &gt; Budgets and alerts

   Budgets track spending rather than account dormancy.

**Concept:** Locating enterprise activity reports

**Authored coaching hints:**

- Choose an enterprise-wide report rather than repository telemetry.
- Activity review and spending controls have different entry points.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Dónde genera un propietario empresarial el informe de usuarios inactivos en la interfaz inglesa actual de GitHub Enterprise Cloud?

1. Repository &gt; Insights &gt; Traffic

   El tráfico del repositorio no es un informe empresarial de inactividad.

2. Organization &gt; Settings &gt; Actions &gt; Runners

   El inventario de ejecutores no genera este informe.

3. Enterprise &gt; Compliance &gt; Reports &gt; Dormant Users **[CORRECT]**

   Los informes de Compliance incluyen Dormant Users.

4. Enterprise &gt; Billing &amp; Licensing &gt; Budgets and alerts

   Los presupuestos miden gasto, no inactividad de cuentas.

**Concept:** Ubicación de informes de actividad empresarial

**Authored coaching hints:**

- Elige un informe empresarial, no telemetría de repositorio.
- Revisar actividad y controlar gasto tienen accesos distintos.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Onde um proprietário empresarial gera o relatório de usuários inativos na interface atual em inglês do GitHub Enterprise Cloud?

1. Repository &gt; Insights &gt; Traffic

   Tráfego do repositório não é relatório empresarial de inatividade.

2. Organization &gt; Settings &gt; Actions &gt; Runners

   O inventário de executores não gera esse relatório.

3. Enterprise &gt; Compliance &gt; Reports &gt; Dormant Users **[CORRECT]**

   Relatórios de Compliance incluem Dormant Users.

4. Enterprise &gt; Billing &amp; Licensing &gt; Budgets and alerts

   Orçamentos medem gastos, não inatividade de contas.

**Concept:** Local de relatórios de atividade empresarial

**Authored coaching hints:**

- Escolha um relatório empresarial, não telemetria de repositório.
- Revisar atividade e controlar gastos têm entradas distintas.

</details>

**Official supporting source:** <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users>

<!-- certification-coach-question:admin-216:b28de3ddc49596373f1c504751a000dda22ca8eac3006e11fd2d413bf02d2969 -->
## Question 216: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-216`

**Content revision:** `b28de3ddc49596373f1c504751a000dda22ca8eac3006e11fd2d413bf02d2969`

**en review revision:** `5984f9fad9548e067d726b127070dff447765c8e79e504bc309d5fd97ef26c61`
**es review revision:** `802c407da0ef2b11f32d49b6dc449ee7987d33f372196711ea4bfec4339e08ba`
**pt-BR review revision:** `0af2b50dc9fe138afaf34d1a88f1365216f2825e65aca60955f5bfcdba56158f`

### English

Two teams share one cost center but need independently controlled budgets. Which documented cost-center design meets that requirement?

1. Use one shared budget with two alert thresholds.

   Multiple alert thresholds do not create independent team budgets.

2. Create a separate cost center for each team. **[CORRECT]**

   A cost-center budget applies to the whole cost center, so independent team budgets need separate centers.

3. Create two budgets targeting the same shared cost center.

   Both budgets still cover the shared center rather than separate team spending.

4. Add both enterprise teams as resources in the shared center.

   Adding separate team resources does not split the center's budget scope.

**Concept:** Independent budget boundaries require appropriate cost-center scope.

**Authored coaching hints:**

- Distinguish naming a team from creating a budget boundary.
- Check whether a cost-center budget applies to part or all of that center.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Dos equipos comparten un centro de costos, pero necesitan presupuestos controlados por separado. ¿Qué diseño documentado cumple ese requisito?

1. Usar un presupuesto compartido con dos umbrales de alerta.

   Varios umbrales de alerta no crean presupuestos independientes por equipo.

2. Crear un centro de costos separado para cada equipo. **[CORRECT]**

   El presupuesto abarca todo el centro; los presupuestos independientes requieren centros separados.

3. Crear dos presupuestos dirigidos al mismo centro compartido.

   Ambos siguen abarcando el centro compartido, no gastos de equipos separados.

4. Añadir los dos equipos empresariales como recursos del centro compartido.

   Añadir recursos separados no divide el ámbito presupuestario del centro.

**Concept:** Los límites presupuestarios independientes requieren un ámbito adecuado de centros de costos.

**Authored coaching hints:**

- Distingue nombrar un equipo de crear un límite presupuestario.
- Comprueba si un presupuesto abarca una parte o todo el centro.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Duas equipes compartilham um centro de custos, mas precisam de orçamentos controlados separadamente. Qual desenho documentado atende a esse requisito?

1. Usar um orçamento compartilhado com dois limites de alerta.

   Vários limites de alerta não criam orçamentos independentes por equipe.

2. Criar um centro de custos separado para cada equipe. **[CORRECT]**

   O orçamento abrange todo o centro; orçamentos independentes exigem centros separados.

3. Criar dois orçamentos direcionados ao mesmo centro compartilhado.

   Ambos continuam cobrindo o centro compartilhado, não gastos de equipes separadas.

4. Adicionar as duas equipes empresariais como recursos do centro compartilhado.

   Adicionar recursos separados não divide o escopo orçamentário do centro.

**Concept:** Limites orçamentários independentes exigem o escopo adequado de centros de custos.

**Authored coaching hints:**

- Diferencie nomear uma equipe de criar um limite orçamentário.
- Confira se um orçamento abrange parte ou todo o centro.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/concepts/cost-centers>

<!-- certification-coach-question:admin-217:54b2062afae5c5f3e2f2c92a1a6e5969ff7ed38fb4a244588f01d2dc5f21814b -->
## Question 217: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-217`

**Content revision:** `54b2062afae5c5f3e2f2c92a1a6e5969ff7ed38fb4a244588f01d2dc5f21814b`

**en review revision:** `9d492012836f5e1d8f4ba8d5e73b0627e2865454c5d953c0b5d2fc859a5be095`
**es review revision:** `48d55d5908557b3fe05c470c0dd50d18c810a44162b2d609b1a981dabd70477b`
**pt-BR review revision:** `e09e7a5371055ebafef916aced9fa0e5e2ae05495c4698c36d936c34408fb244`

### English

Before comparing quantity values across GitHub billing report rows, which fields should be checked to avoid mixing incompatible measurements?

1. sku and unit\_type **[CORRECT]**

   The SKU and unit identify what the quantity measures.

2. repository and username only

   Ownership does not identify the measurement unit.

3. workflow\_path and repository only

   Workflow attribution does not define the unit.

4. date and cost\_center\_name only

   Time and allocation do not establish comparable units.

**Concept:** Interpreting metered usage units

**Authored coaching hints:**

- A number needs a product and a unit.
- Compute and storage quantities are not interchangeable.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Antes de comparar quantity entre filas de facturación GitHub, ¿qué campos evitan mezclar medidas incompatibles?

1. sku and unit\_type **[CORRECT]**

   El SKU y la unidad identifican qué mide la cantidad.

2. repository and username only

   La propiedad no identifica la unidad.

3. workflow\_path and repository only

   La atribución al flujo no define la unidad.

4. date and cost\_center\_name only

   La fecha y la asignación no establecen unidades comparables.

**Concept:** Interpretación de unidades de consumo

**Authored coaching hints:**

- Un número necesita producto y unidad.
- Las cantidades de cómputo y almacenamiento no son intercambiables.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Antes de comparar quantity entre linhas de cobrança GitHub, quais campos evitam misturar medidas incompatíveis?

1. sku and unit\_type **[CORRECT]**

   O SKU e a unidade identificam o que a quantidade mede.

2. repository and username only

   A propriedade não identifica a unidade.

3. workflow\_path and repository only

   A atribuição ao fluxo não define a unidade.

4. date and cost\_center\_name only

   Data e alocação não estabelecem unidades comparáveis.

**Concept:** Interpretação de unidades de consumo

**Authored coaching hints:**

- Um número precisa de produto e unidade.
- Quantidades de computação e armazenamento não são intercambiáveis.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/reference/billing-reports>

<!-- certification-coach-question:admin-218:3189276272c700f527e6342e0ef0c6d071149ab50769b1079b232d40b91b6c5a -->
## Question 218: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-218`

**Content revision:** `3189276272c700f527e6342e0ef0c6d071149ab50769b1079b232d40b91b6c5a`

**en review revision:** `2703b3388c326c98a195b9ba2a6626fd41aa1c402761cab14f1f4005fb04e118`
**es review revision:** `338c7615e3d6e8cae634ecdd92da04035187644ca8e51a4f97ef763ff44d43b4`
**pt-BR review revision:** `500467ec948388978c11e9d171a260c5f1a8b4bccacbfd8e81875dd13db78dd1`

### English

Which GitHub billing report field represents the billable amount after discounts and included-usage adjustments?

1. quantity

   Quantity measures units, not final charges.

2. gross\_amount

   Gross amount is before discount subtraction.

3. discount\_amount

   Discount amount is the reduction, not the billable total.

4. net\_amount **[CORRECT]**

   Net amount equals gross amount minus discount amount.

**Concept:** Gross versus net metered cost

**Authored coaching hints:**

- Distinguish usage volume from money.
- Apply adjustments before interpreting the billable amount.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué campo del informe de facturación GitHub representa el importe facturable tras descuentos y ajustes por consumo incluido?

1. quantity

   La cantidad mide unidades, no cargos finales.

2. gross\_amount

   El importe bruto precede a restar descuentos.

3. discount\_amount

   El descuento es la reducción, no el total facturable.

4. net\_amount **[CORRECT]**

   El neto es el bruto menos el descuento.

**Concept:** Costo medido bruto frente a neto

**Authored coaching hints:**

- Distingue volumen de uso de dinero.
- Aplica ajustes antes de interpretar el importe facturable.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual campo do relatório de cobrança GitHub representa o valor faturável após descontos e ajustes de uso incluído?

1. quantity

   A quantidade mede unidades, não cobranças finais.

2. gross\_amount

   O valor bruto vem antes da subtração dos descontos.

3. discount\_amount

   O desconto é a redução, não o total faturável.

4. net\_amount **[CORRECT]**

   O líquido é o bruto menos o desconto.

**Concept:** Custo medido bruto versus líquido

**Authored coaching hints:**

- Diferencie volume de uso de dinheiro.
- Aplique ajustes antes de interpretar o valor faturável.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/reference/billing-reports>

<!-- certification-coach-question:admin-219:494c5c442b285cbdede89385a3c8abd26e789ce199f87a2946bc32947f8fe208 -->
## Question 219: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-219`

**Content revision:** `494c5c442b285cbdede89385a3c8abd26e789ce199f87a2946bc32947f8fe208`

**en review revision:** `532088824db6326027c4378588cf132981bc7dc8fa43dbc0d37610fd9109f9a8`
**es review revision:** `1d38769595cb2a730c4981a9b7b29faa0a92aacea1ed16189900fe6142e52a83`
**pt-BR review revision:** `7e6c9086f167393ae7aac7314692936f0df9cdec070d988093dac5794de2c986`

### English

Which downloadable billing report includes workflow\_path for investigating which Actions workflow generated usage?

1. The summarized usage report

   Summarized reports do not include workflow\_path.

2. The dormant-user report

   Dormancy reports measure defined account activity.

3. The detailed usage report **[CORRECT]**

   Detailed usage reports include workflow-level attribution where applicable.

4. The repository traffic report

   Traffic reports do not attribute metered workflow charges.

**Concept:** Workflow-level billing investigation

**Authored coaching hints:**

- Choose the report's required granularity.
- A summary may omit the field needed for attribution.

<details>
<summary>Español — same answer key and option order</summary>

### Español

¿Qué informe descargable de facturación incluye workflow\_path para investigar qué flujo de Actions generó consumo?

1. El informe resumido de consumo

   El resumen no incluye workflow\_path.

2. El informe de usuarios inactivos

   La inactividad mide actividad definida de cuentas.

3. El informe detallado de consumo **[CORRECT]**

   El informe detallado incluye atribución por flujo cuando corresponde.

4. El informe de tráfico del repositorio

   El tráfico no atribuye cargos medidos a flujos.

**Concept:** Investigación de facturación por flujo

**Authored coaching hints:**

- Elige la granularidad necesaria del informe.
- Un resumen puede omitir el campo de atribución.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Qual relatório de cobrança para download inclui workflow\_path para investigar qual fluxo de Actions gerou consumo?

1. O relatório resumido de consumo

   O resumo não inclui workflow\_path.

2. O relatório de usuários inativos

   A inatividade mede atividades definidas de contas.

3. O relatório detalhado de consumo **[CORRECT]**

   O relatório detalhado inclui atribuição por fluxo quando aplicável.

4. O relatório de tráfego do repositório

   O tráfego não atribui cobranças medidas a fluxos.

**Concept:** Investigação de cobrança por fluxo

**Authored coaching hints:**

- Escolha a granularidade necessária do relatório.
- Um resumo pode omitir o campo de atribuição.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/reference/billing-reports>

<!-- certification-coach-question:admin-220:0edede93f2bc18e3f872fbd3d7688acbbd9106699a139bede0cdbf300ebeb557 -->
## Question 220: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-220`

**Content revision:** `0edede93f2bc18e3f872fbd3d7688acbbd9106699a139bede0cdbf300ebeb557`

**en review revision:** `9e56dd86a19c5c72cfa638e869d78b2ff6374c4a731f89fdcacd36b56a6f086c`
**es review revision:** `e5b136851f87ec593a80a6118be5577b8a614ed44627d5d3b3be2ce63f408a9b`
**pt-BR review revision:** `db8ba33509ec6724e52d6c6adb6cc668ef1e69cf97b068ff8fa6f647cfbb8d74`

### English

An enterprise Actions budget sends threshold alerts but has 'Stop usage when budget limit is reached' disabled. What happens when its amount is exceeded?

1. New covered Actions usage is blocked immediately

   Blocking requires the stop option, not alerts alone.

2. Usage continues while alerts notify **[CORRECT]**

   Without the stop option, the budget does not block usage.

3. The budget automatically increases to match actual spending

   An alert does not automatically increase a budget.

4. Only the repository with the highest usage is blocked

   Alerts alone do not selectively block a repository.

**Concept:** Budget alerts versus enforcement

**Authored coaching hints:**

- Notification and blocking are separate settings.
- Read the actual stop-use configuration.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un presupuesto empresarial de Actions envía alertas, pero tiene desactivado 'Stop usage when budget limit is reached'. ¿Qué ocurre al superar el importe?

1. Se bloquea inmediatamente el nuevo uso cubierto de Actions

   Bloquear requiere la opción de parada, no solo alertas.

2. El uso continúa mientras las alertas notifican **[CORRECT]**

   Sin la opción de parada, el presupuesto no bloquea uso.

3. El presupuesto aumenta automáticamente para igualar el gasto real

   Una alerta no aumenta automáticamente el presupuesto.

4. Solo se bloquea el repositorio de mayor consumo

   Las alertas no bloquean selectivamente un repositorio.

**Concept:** Alertas frente a cumplimiento de presupuestos

**Authored coaching hints:**

- Notificar y bloquear son opciones distintas.
- Lee la configuración real de parada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um orçamento empresarial de Actions envia alertas, mas tem 'Stop usage when budget limit is reached' desativado. O que ocorre ao exceder o valor?

1. O novo uso coberto de Actions é bloqueado imediatamente

   Bloquear exige a opção de parada, não apenas alertas.

2. O uso continua enquanto os alertas notificam **[CORRECT]**

   Sem a opção de parada, o orçamento não bloqueia o uso.

3. O orçamento aumenta automaticamente para igualar o gasto real

   Um alerta não aumenta automaticamente o orçamento.

4. Somente o repositório de maior consumo é bloqueado

   Alertas não bloqueiam seletivamente um repositório.

**Concept:** Alertas versus aplicação de orçamentos

**Authored coaching hints:**

- Notificar e bloquear são opções distintas.
- Leia a configuração real de parada.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/how-tos/set-up-budgets>

<!-- certification-coach-question:admin-221:ba2bc80769adc8302eaf9a7fd470fb228cf1e35f2ff11b6df7af55df4ffacbe1 -->
## Question 221: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-221`

**Content revision:** `ba2bc80769adc8302eaf9a7fd470fb228cf1e35f2ff11b6df7af55df4ffacbe1`

**en review revision:** `646d1cc1f1fb7c3b43b3b0775d36d051c2cec2348bba1f928ecc1b1d77d38033`
**es review revision:** `c6c13ea2e964ff5b45ed396576b354edeeb8e0ea100019b8756763d38a2b5e9d`
**pt-BR review revision:** `d31ac5c8bfc59a5f5f746abbf105c6743ec5554b0e4f5e24739797c69f06d6c6`

### English

An Actions product budget with stop-use enabled is exhausted, while an overlapping runner-SKU budget still has capacity. Which budget controls further covered usage?

1. The exhausted applicable stop-use budget **[CORRECT]**

   Any exhausted applicable stop-use budget can block additional usage.

2. Only the budget with the largest amount

   A larger budget does not override another hard limit.

3. Only the most recently created budget

   Creation order does not determine precedence.

4. Only the runner-SKU budget

   A SKU budget does not bypass an applicable product limit.

**Concept:** Overlapping budget enforcement

**Authored coaching hints:**

- Multiple budgets can apply to the same usage.
- Compare both scopes and enforcement settings.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Se agota un presupuesto de Actions con parada habilitada, pero un presupuesto SKU de ejecutor superpuesto tiene saldo. ¿Qué presupuesto controla el uso cubierto posterior?

1. El presupuesto aplicable agotado con parada **[CORRECT]**

   Cualquier presupuesto aplicable agotado con parada puede bloquear uso.

2. Solo el presupuesto de mayor importe

   Un importe mayor no anula otro límite obligatorio.

3. Solo el presupuesto creado más recientemente

   El orden de creación no determina prioridad.

4. Solo el presupuesto SKU del ejecutor

   Un presupuesto SKU no evita un límite de producto aplicable.

**Concept:** Cumplimiento de presupuestos superpuestos

**Authored coaching hints:**

- Varios presupuestos pueden cubrir el mismo uso.
- Compara los ámbitos y las opciones de cumplimiento.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um orçamento de Actions com parada habilitada se esgota, mas um orçamento SKU de executor sobreposto tem saldo. Qual orçamento controla o uso coberto posterior?

1. O orçamento aplicável esgotado com parada **[CORRECT]**

   Qualquer orçamento aplicável esgotado com parada pode bloquear uso.

2. Somente o orçamento de maior valor

   Um valor maior não anula outro limite obrigatório.

3. Somente o orçamento criado mais recentemente

   A ordem de criação não determina precedência.

4. Somente o orçamento SKU do executor

   Um orçamento SKU não contorna um limite de produto aplicável.

**Concept:** Aplicação de orçamentos sobrepostos

**Authored coaching hints:**

- Vários orçamentos podem cobrir o mesmo uso.
- Compare os escopos e as opções de aplicação.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/how-tos/set-up-budgets>

<!-- certification-coach-question:admin-222:b911c8121180df1713faec5ce36b38db4dbccc53b6936ed9e2f305f296c2b647 -->
## Question 222: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-222`

**Content revision:** `b911c8121180df1713faec5ce36b38db4dbccc53b6936ed9e2f305f296c2b647`

**en review revision:** `3266e7d5484499e014d47b1efc74c4eeee702dffcdcf7f2a185903265a614ccf`
**es review revision:** `1c382b28781d29301ac20c02646b851e441e4f9513fc6bcadfeb3c0a0c4c484d`
**pt-BR review revision:** `ebbf8063174d2b470d541a36f61b6495c87f5eec5c0bbeec967199c5e985ba6b`

### English

A repository repeatedly evicts useful caches at its storage limit. Which change reduces cache thrashing without increasing the storage allowance?

1. Raise the repository cache storage allowance

   This increases the allowance, contrary to the requirement.

2. Generate a unique cache key for every retry

   Unique keys create additional entries and reduce reuse.

3. Cache complete workspaces including generated files

   Broader paths consume more storage and can worsen eviction.

4. Limit cache contents to frequently reused dependencies **[CORRECT]**

   Reducing low-value cache contents preserves space for useful reuse.

**Concept:** Cache storage and eviction optimization

**Authored coaching hints:**

- Compare cache creation rate with useful reuse.
- Consider which stored files justify their space.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Un repositorio expulsa repetidamente cachés útiles al alcanzar su límite. ¿Qué cambio reduce esa rotación sin aumentar el espacio permitido?

1. Aumentar el espacio de caché permitido del repositorio

   Aumenta el espacio, contra el requisito.

2. Generar una clave única por cada reintento

   Las claves únicas crean entradas adicionales y reducen reutilización.

3. Guardar espacios de trabajo completos con archivos generados

   Las rutas amplias consumen más espacio y pueden agravar la expulsión.

4. Limitar el contenido a dependencias reutilizadas con frecuencia **[CORRECT]**

   Reducir contenido de poco valor conserva espacio para reutilización útil.

**Concept:** Optimización de almacenamiento y expulsión de caché

**Authored coaching hints:**

- Compara creación de entradas con reutilización útil.
- Considera qué archivos justifican el espacio ocupado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Um repositório remove repetidamente caches úteis ao atingir seu limite. Qual mudança reduz essa rotatividade sem aumentar o espaço permitido?

1. Aumentar o espaço de cache permitido do repositório

   Aumenta o espaço, contrariando o requisito.

2. Gerar uma chave única para cada nova tentativa

   Chaves únicas criam entradas adicionais e reduzem reutilização.

3. Guardar workspaces completos com arquivos gerados

   Caminhos amplos consomem mais espaço e podem agravar a remoção.

4. Limitar o conteúdo a dependências reutilizadas com frequência **[CORRECT]**

   Reduzir conteúdo de pouco valor preserva espaço para reutilização útil.

**Concept:** Otimização de armazenamento e remoção de cache

**Authored coaching hints:**

- Compare criação de entradas com reutilização útil.
- Considere quais arquivos justificam o espaço ocupado.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching>

<!-- certification-coach-question:admin-223:226f68aaca0ffe56a0d7977b921d4bc35f03f55e246772519a3ceb0f3498a2b9 -->
## Question 223: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-223`

**Content revision:** `226f68aaca0ffe56a0d7977b921d4bc35f03f55e246772519a3ceb0f3498a2b9`

**en review revision:** `4961ebd3fb704db87ec73fbd75977ec0ce24b5ebc4af47a387bd0176cf1ed6d4`
**es review revision:** `a0c2c96401c0107f80c91b605786ab69b6e65eecea9e8f2f1e359cafbd39e7a4`
**pt-BR review revision:** `e6536753dee2b07e83c66225d4520cc1ffae637ecd5d2f70a56edef21ffcace9`

### English

An organization pays for stopped, unused codespaces. Which policy reduces their future storage lifetime?

1. A shorter timeout before stopping idle codespaces

   Stopping a codespace does not end its retained storage lifetime.

2. A smaller allowed codespace machine size

   Machine size does not set stopped-resource retention.

3. A shorter maximum codespace retention period **[CORRECT]**

   Retention constraints limit how long stopped codespaces persist.

4. Fewer regions for codespace prebuild availability

   Prebuild regions do not define these codespaces' deletion schedule.

**Concept:** Cleaning up unused development environments

**Authored coaching hints:**

- Stopped compute can still leave stored data.
- Choose a lifecycle control for the billed resource.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Una organización paga codespaces detenidos y sin uso. ¿Qué política reduce la duración futura de su almacenamiento?

1. Un tiempo menor antes de detener codespaces inactivos

   Detener no termina la duración de almacenamiento retenido.

2. Un tamaño de máquina de codespace permitido menor

   El tamaño no fija la retención de recursos detenidos.

3. Una retención máxima de codespaces más corta **[CORRECT]**

   Las restricciones limitan cuánto duran los codespaces detenidos.

4. Menos regiones disponibles para precompilaciones de codespaces

   Las regiones no definen cuándo se eliminan estos codespaces.

**Concept:** Limpieza de entornos de desarrollo sin uso

**Authored coaching hints:**

- El cómputo detenido puede seguir dejando datos almacenados.
- Elige un control del ciclo de vida del recurso facturado.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Uma organização paga por codespaces parados e sem uso. Qual política reduz a duração futura de seu armazenamento?

1. Um tempo menor antes de parar codespaces ociosos

   Parar não encerra a duração do armazenamento retido.

2. Um tamanho de máquina de codespace permitido menor

   O tamanho não define a retenção de recursos parados.

3. Uma retenção máxima de codespaces mais curta **[CORRECT]**

   Restrições limitam quanto tempo codespaces parados permanecem.

4. Menos regiões disponíveis para pré-compilações de codespaces

   Regiões não definem quando esses codespaces são excluídos.

**Concept:** Limpeza de ambientes de desenvolvimento sem uso

**Authored coaching hints:**

- Computação parada ainda pode deixar dados armazenados.
- Escolha um controle de ciclo de vida do recurso cobrado.

</details>

**Official supporting source:** <https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces>

<!-- certification-coach-question:admin-224:24aae37f27b65f3569e9837fb084eccf71399c9e7aaf349a0f0417153b0d6551 -->
## Question 224: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-224`

**Content revision:** `24aae37f27b65f3569e9837fb084eccf71399c9e7aaf349a0f0417153b0d6551`

**en review revision:** `71c8939fffcf9a4fab5655d089d89062ca524ad931157b2ac7ce68e07913ba39`
**es review revision:** `abed68c0fde72905daa2853158c9bfb06594b0ea8c13e03e26c1a0977c16f2e6`
**pt-BR review revision:** `dc5b0549a27b2fabe35d7b599e4a2fd9286ce937dba4b8f75505efb41c04e0f9`

### English

Eligible self-hosted jobs queue during short demand spikes, while machines sit idle most of the day. Which capacity strategy fits that pattern?

1. Keep peak capacity provisioned throughout quiet periods

   A peak-sized fixed fleet preserves the measured idle capacity.

2. Autoscale ephemeral runners with workload demand **[CORRECT]**

   Demand-based scaling can match capacity to peaks and quiet periods.

3. Serialize all jobs onto one persistent runner

   Serializing all work aggravates peak queueing.

4. Increase each runner's CPU count without changing fleet size

   More CPU does not directly adapt fleet capacity to demand.

**Concept:** Demand-based runner resource optimization

**Authored coaching hints:**

- Distinguish queue pressure from job runtime.
- Match provisioning to the observed demand curve.

<details>
<summary>Español — same answer key and option order</summary>

### Español

Trabajos aptos esperan durante picos breves, pero las máquinas están libres gran parte del día. ¿Qué estrategia de capacidad corresponde?

1. Mantener capacidad para el pico durante periodos tranquilos

   Una flota fija para el pico mantiene la capacidad ociosa medida.

2. Autoescalar ejecutores efímeros según la demanda **[CORRECT]**

   Escalar según demanda ajusta capacidad a picos y periodos tranquilos.

3. Serializar todos los trabajos en un ejecutor persistente

   Serializar todo agrava la cola durante los picos.

4. Aumentar CPU por ejecutor sin cambiar el tamaño de la flota

   Más CPU no adapta directamente la flota a la demanda.

**Concept:** Optimización de ejecutores según demanda

**Authored coaching hints:**

- Distingue presión de cola de duración del trabajo.
- Ajusta el aprovisionamiento a la curva de demanda observada.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Trabalhos elegíveis esperam durante picos curtos, mas as máquinas ficam ociosas boa parte do dia. Qual estratégia de capacidade atende?

1. Manter capacidade para o pico durante períodos tranquilos

   Uma frota fixa para o pico mantém a capacidade ociosa medida.

2. Autoescalar executores efêmeros conforme a demanda **[CORRECT]**

   Escalar por demanda ajusta capacidade a picos e períodos tranquilos.

3. Serializar todos os trabalhos em um executor persistente

   Serializar tudo agrava a fila durante os picos.

4. Aumentar CPU por executor sem mudar o tamanho da frota

   Mais CPU não adapta diretamente a frota à demanda.

**Concept:** Otimização de executores por demanda

**Authored coaching hints:**

- Diferencie pressão da fila de duração do trabalho.
- Ajuste o provisionamento à curva de demanda observada.

</details>

**Official supporting source:** <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>

<!-- certification-coach-question:admin-225:04b07d6868908c739db5df563a625f744ef9ddc63bbd7320a55adb4acc8de4dc -->
## Question 225: Monitor and optimize GitHub usage

- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.

- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.

**Question ID:** `admin-225`

**Content revision:** `04b07d6868908c739db5df563a625f744ef9ddc63bbd7320a55adb4acc8de4dc`

**en review revision:** `3288af927e7b4fe60ca48c81d0158a1509e4e0125f5cb841e892ad9d63ee8efb`
**es review revision:** `19a5d0ee4bbdf4acfc679f00deca02b0e66b51175f9f804013076bd37c86c047`
**pt-BR review revision:** `9f8d5fb45cf7cdb2191066d1e40d6e4d1dea0654ab46b899b496f8acbb7619a4`

### English

For an authenticated billing request, which route retrieves ENTERPRISE's usage summary for September 2026?

1. /enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9 **[CORRECT]**

   This selects the enterprise usage summary and documented time parameters.

2. /enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09

   created is not the documented billing summary time filter.

3. /orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9

   This targets an organization, not the enterprise.

4. /enterprises/ENTERPRISE/audit-log?phrase=created:2026-09

   The audit-log endpoint does not return billing usage summaries.

**Concept:** Automating enterprise cost reporting

**Authored coaching hints:**

- Match the account scope and endpoint purpose.
- Billing time filters differ from audit-log qualifiers.

<details>
<summary>Español — same answer key and option order</summary>

### Español

En una solicitud de facturación autenticada, ¿qué ruta obtiene el resumen de consumo de ENTERPRISE para septiembre de 2026?

1. /enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9 **[CORRECT]**

   Selecciona el resumen empresarial y los parámetros temporales documentados.

2. /enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09

   created no es el filtro temporal documentado para este resumen.

3. /orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9

   Apunta a una organización, no a la empresa.

4. /enterprises/ENTERPRISE/audit-log?phrase=created:2026-09

   El endpoint de auditoría no devuelve resúmenes de consumo facturado.

**Concept:** Automatización de informes de costos empresariales

**Authored coaching hints:**

- Relaciona ámbito de cuenta y finalidad del endpoint.
- Los filtros temporales de facturación difieren de los de auditoría.

</details>

<details>
<summary>Português (Brasil) — same answer key and option order</summary>

### Português (Brasil)

Em uma solicitação de cobrança autenticada, qual rota obtém o resumo de consumo de ENTERPRISE para setembro de 2026?

1. /enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9 **[CORRECT]**

   Seleciona o resumo empresarial e os parâmetros temporais documentados.

2. /enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09

   created não é o filtro temporal documentado para esse resumo.

3. /orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&amp;month=9

   Aponta para uma organização, não para a empresa.

4. /enterprises/ENTERPRISE/audit-log?phrase=created:2026-09

   O endpoint de auditoria não retorna resumos de consumo faturado.

**Concept:** Automação de relatórios de custos empresariais

**Authored coaching hints:**

- Relacione escopo da conta e finalidade do endpoint.
- Filtros temporais de cobrança diferem dos de auditoria.

</details>

**Official supporting source:** <https://docs.github.com/en/billing/tutorials/automate-usage-reporting>
