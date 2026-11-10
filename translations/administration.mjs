export const translations = {
    "es": {
        "admin-001": {
            "prompt": "¿Qué define una cuenta de Enterprise Managed Users en GitHub Enterprise Cloud?",
            "choices": [
                "Una cuenta personal restringida por rulesets del repositorio",
                "Un colaborador externo invitado a repositorios seleccionados",
                "Una cuenta aprovisionada y autenticada mediante el IdP empresarial",
                "Una cuenta personal vinculada a una identidad SAML de la organización"
            ],
            "explanations": [
                "Los rulesets regulan la actividad del repositorio, no la propiedad de la cuenta.",
                "Una invitación no establece una identidad administrada por el IdP.",
                "El IdP gestiona el ciclo de vida y la autenticación de la cuenta administrada.",
                "La vinculación SAML por sí sola no crea una cuenta administrada."
            ],
            "concept": "Propiedad de las cuentas administradas",
            "hints": [
                "Distingue la propiedad de una cuenta del permiso para usar recursos.",
                "Considera el límite entre la colaboración empresarial y la pública."
            ]
        },
        "admin-002": {
            "prompt": "En una empresa de GitHub Enterprise Cloud con cuentas personales, ¿quién crea y mantiene la cuenta de GitHub de cada miembro?",
            "choices": [
                "El servicio SCIM de la empresa",
                "El responsable del equipo de la organización",
                "El administrador de facturación empresarial",
                "El usuario individual"
            ],
            "explanations": [
                "El aprovisionamiento de cuentas a nivel empresarial corresponde a EMU.",
                "Gestionar un equipo no incluye ser propietario de las cuentas de sus miembros.",
                "La autoridad de facturación no incluye crear cuentas personales.",
                "Cada usuario mantiene su cuenta personal aunque SAML proteja el acceso empresarial."
            ],
            "concept": "Responsabilidad sobre cuentas personales",
            "hints": [
                "Distingue la propiedad de una cuenta del permiso para usar recursos.",
                "Considera el límite entre la colaboración empresarial y la pública."
            ]
        },
        "admin-003": {
            "prompt": "¿Qué añade SAML SSO a las cuentas personales que acceden a una organización protegida de GitHub Enterprise Cloud?",
            "choices": [
                "Autenticación con el IdP externo de la organización",
                "Aprovisionamiento automático de cuentas personales nuevas",
                "Asignación automática del acceso Admin al repositorio",
                "Sustitución del inicio de sesión de la cuenta de GitHub"
            ],
            "explanations": [
                "SAML añade autenticación externa para los recursos protegidos.",
                "La autenticación SAML no aprovisiona cuentas.",
                "La autorización del repositorio es independiente de SAML.",
                "Se mantiene el inicio de sesión de la cuenta personal."
            ],
            "concept": "Ámbito de autenticación SAML",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-004": {
            "prompt": "¿Qué protocolo aprovisiona y actualiza cuentas de usuario administradas en GitHub Enterprise Cloud?",
            "choices": [
                "SSH",
                "SCIM",
                "SAML",
                "WebAuthn"
            ],
            "explanations": [
                "SSH autentica conexiones, no aprovisiona cuentas.",
                "SCIM proporciona el aprovisionamiento del ciclo de vida de las cuentas.",
                "SAML se ocupa de la autenticación federada.",
                "WebAuthn admite autenticación con claves públicas."
            ],
            "concept": "Protocolo de aprovisionamiento",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-005": {
            "prompt": "Para cuentas personales en GitHub Enterprise Cloud, ¿cuál es la finalidad principal de la sincronización de equipos?",
            "choices": [
                "Establecer roles de repositorio directamente en el IdP",
                "Sustituir la autenticación SAML de la organización",
                "Reflejar la pertenencia a grupos del IdP en un equipo de GitHub",
                "Crear cuentas personales para todos los usuarios del IdP"
            ],
            "explanations": [
                "El acceso del equipo al repositorio se configura en GitHub.",
                "Complementa SAML en vez de sustituirlo.",
                "La sincronización actualiza los miembros del equipo desde los grupos vinculados.",
                "No es un servicio de aprovisionamiento de cuentas personales."
            ],
            "concept": "Finalidad de la sincronización de equipos",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-006": {
            "prompt": "¿Qué IdP asociado admite autenticación OIDC para Enterprise Managed Users?",
            "choices": [
                "Okta",
                "PingFederate",
                "OneLogin",
                "Microsoft Entra ID"
            ],
            "explanations": [
                "La integración de autenticación de Okta para EMU utiliza SAML.",
                "PingFederate no es el IdP asociado documentado para OIDC de EMU.",
                "OneLogin no es el IdP asociado documentado para OIDC de EMU.",
                "Microsoft Entra ID admite la integración OIDC documentada de EMU."
            ],
            "concept": "Proveedor OIDC para EMU",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-007": {
            "prompt": "¿Qué diseño de identidad sigue la integración asociada recomendada por GitHub para autenticar y aprovisionar EMU?",
            "choices": [
                "Usar un único IdP asociado para ambas funciones",
                "Usar Okta para SSO y Microsoft Entra ID para SCIM",
                "Usar Microsoft Entra ID para SSO y Okta para SCIM",
                "Usar solo SAML para ambas funciones"
            ],
            "explanations": [
                "Un único IdP asociado proporciona la integración recomendada y documentada.",
                "Esta combinación de proveedores no se admite expresamente.",
                "La combinación inversa tampoco se admite.",
                "SAML por sí solo no aprovisiona el ciclo de vida."
            ],
            "concept": "Integración EMU admitida",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-008": {
            "prompt": "En la configuración SAML en inglés de GitHub Enterprise Cloud, ¿qué se introduce en Public Certificate?",
            "choices": [
                "Un certificado de cliente TLS del repositorio",
                "El certificado público del IdP para verificar respuestas SAML",
                "La clave privada de firma del IdP",
                "La clave pública SSH personal de un miembro"
            ],
            "explanations": [
                "Un certificado de cliente del repositorio no verifica las firmas SAML del IdP.",
                "GitHub usa el certificado público para verificar las respuestas SAML firmadas.",
                "El IdP debe conservar su clave privada de firma.",
                "La clave SSH del usuario autentica conexiones Git."
            ],
            "concept": "Verificación de respuestas SAML",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-009": {
            "prompt": "Al configurar SAML empresarial para cuentas personales en GitHub Enterprise Cloud, ¿qué es Sign on URL?",
            "choices": [
                "El identificador del emisor del IdP en vez de su punto de acceso",
                "La página principal habitual de la empresa en GitHub",
                "El punto de conexión HTTPS del IdP para solicitudes SSO",
                "El punto de conexión del servicio consumidor de aserciones de GitHub"
            ],
            "explanations": [
                "El emisor identifica al remitente y se configura por separado.",
                "La página empresarial no es el punto de autenticación del IdP.",
                "Este campo dirige las solicitudes de autenticación al IdP.",
                "El servicio consumidor recibe respuestas en GitHub, no solicitudes de acceso en el IdP."
            ],
            "concept": "Configuración del punto de conexión SAML",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-010": {
            "prompt": "¿Qué distingue la autenticación de dos factores del inicio de sesión solo con contraseña?",
            "choices": [
                "Concede un rol de repositorio adicional",
                "Aprovisiona una segunda cuenta de GitHub",
                "Crea una pertenencia adicional a una organización",
                "Exige un factor de autenticación adicional"
            ],
            "explanations": [
                "Los factores no conceden roles de repositorio.",
                "2FA no crea cuentas.",
                "2FA no asigna pertenencia a organizaciones.",
                "2FA añade otro factor para verificar el acceso a la cuenta."
            ],
            "concept": "Factores de autenticación",
            "hints": [
                "Distingue la prueba de identidad del acceso a un recurso concreto.",
                "Comprueba si se trata de una cuenta personal o del acceso empresarial."
            ]
        },
        "admin-011": {
            "prompt": "En una cuenta personal de GitHub.com, ¿qué puede satisfacer una passkey en un solo paso de inicio de sesión?",
            "choices": [
                "Los requisitos de contraseña y 2FA",
                "Solo el requisito SAML de la organización",
                "Solo el requisito de contraseña",
                "Solo el requisito de autorización del repositorio"
            ],
            "explanations": [
                "Una passkey puede satisfacer tanto la contraseña como 2FA.",
                "La passkey de la cuenta no sustituye SAML de la organización.",
                "Las passkeys pueden cumplir 2FA además del requisito de contraseña.",
                "Los permisos del repositorio siguen separados de la autenticación."
            ],
            "concept": "Inicio de sesión con passkey",
            "hints": [
                "Distingue la prueba de identidad del acceso a un recurso concreto.",
                "Comprueba si se trata de una cuenta personal o del acceso empresarial."
            ]
        },
        "admin-012": {
            "prompt": "Un usuario de cuenta personal de GitHub.com pierde su dispositivo 2FA, pero conserva códigos de recuperación. ¿Qué credencial permite recuperar el acceso?",
            "choices": [
                "El archivo de licencia de la empresa",
                "Un código de recuperación 2FA sin usar",
                "El certificado de firma SAML de la organización",
                "El archivo CODEOWNERS del repositorio"
            ],
            "explanations": [
                "Un archivo de licencia no demuestra posesión de la cuenta.",
                "Los códigos guardados son un método de recuperación documentado.",
                "Un certificado del IdP no recupera 2FA de una cuenta personal.",
                "La propiedad del código no interviene en la recuperación de cuentas."
            ],
            "concept": "Preparación para recuperar cuentas",
            "hints": [
                "Distingue la prueba de identidad del acceso a un recurso concreto.",
                "Comprueba si se trata de una cuenta personal o del acceso empresarial."
            ]
        },
        "admin-013": {
            "prompt": "Como propietario de una organización de GitHub Enterprise Cloud con interfaz en inglés, ¿dónde exiges 2FA para cuentas personales?",
            "choices": [
                "Repository Settings → Rules → Rulesets",
                "Enterprise People → Enterprise teams",
                "Organization Settings → Authentication security",
                "Organization Settings → Member privileges"
            ],
            "explanations": [
                "Los rulesets regulan contribuciones, no 2FA de las cuentas.",
                "Enterprise teams gestiona grupos, no el ajuste 2FA de la organización.",
                "Authentication security contiene el requisito 2FA de la organización.",
                "Member privileges controla las capacidades de los miembros."
            ],
            "concept": "Navegación a 2FA de la organización",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-014": {
            "prompt": "Un propietario empresarial configura SAML para toda la empresa con cuentas personales en la interfaz inglesa de GitHub Enterprise Cloud. ¿Qué sección contiene Require SAML authentication?",
            "choices": [
                "Enterprise People → Enterprise teams",
                "Organization Settings → Member privileges",
                "Repository Settings → Collaborators & teams",
                "Enterprise Settings → Authentication security"
            ],
            "explanations": [
                "Enterprise teams contiene la administración de equipos.",
                "Member privileges regula permisos de la organización.",
                "Los ajustes de acceso del repositorio no configuran la autenticación empresarial.",
                "Authentication security empresarial contiene el requisito SAML de la empresa."
            ],
            "concept": "Navegación a SAML empresarial",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-015": {
            "prompt": "¿Qué configuración SCIM está disponible en una empresa de GitHub Enterprise Cloud que usa cuentas personales en vez de EMU?",
            "choices": [
                "SCIM de organización con SAML de organización",
                "SCIM empresarial con SAML empresarial",
                "SCIM empresarial sin SAML",
                "SCIM de organización que crea cuentas administradas"
            ],
            "explanations": [
                "Para cuentas personales, SCIM aprovisiona acceso a la organización con SAML de ese nivel.",
                "Aprovisionar cuentas con SCIM empresarial requiere EMU.",
                "Quitar SAML no habilita SCIM empresarial para cuentas personales.",
                "SCIM de organización no convierte cuentas personales en administradas."
            ],
            "concept": "Ámbito SCIM para cuentas personales",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-016": {
            "prompt": "¿Dónde se mantiene el correo del perfil de un usuario de Enterprise Managed Users?",
            "choices": [
                "En los permisos de repositorio del equipo",
                "En el proveedor de identidad",
                "En los ajustes personales de GitHub del usuario",
                "En los ajustes de colaboradores del repositorio"
            ],
            "explanations": [
                "Los permisos del equipo controlan acceso, no atributos de identidad.",
                "El IdP proporciona los nombres y correos de los perfiles administrados.",
                "Los usuarios administrados no pueden cambiar ese correo en GitHub.",
                "Los ajustes de colaboradores no controlan los datos del perfil administrado."
            ],
            "concept": "Atributos de perfiles administrados",
            "hints": [
                "Distingue la propiedad de una cuenta del permiso para usar recursos.",
                "Considera el límite entre la colaboración empresarial y la pública."
            ]
        },
        "admin-017": {
            "prompt": "Un equipo de organización de GitHub Enterprise Cloud con cuentas personales está sincronizado con un grupo del IdP. ¿Dónde deben cambiarse sus miembros?",
            "choices": [
                "En las invitaciones a colaboradores del repositorio",
                "En la lista de contactos de facturación empresarial",
                "En el grupo del IdP vinculado",
                "En el editor de miembros del equipo en GitHub"
            ],
            "explanations": [
                "Las invitaciones al repositorio no cambian el grupo del IdP.",
                "Los contactos de facturación no controlan esa pertenencia.",
                "El IdP controla los miembros del equipo sincronizado.",
                "GitHub no permite editar manualmente los miembros de equipos sincronizados."
            ],
            "concept": "Fuente de pertenencia al equipo",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-018": {
            "prompt": "Un usuario inicia sesión correctamente, pero no tiene permiso para hacer push a un repositorio de organización. ¿Qué distinción explica el fallo?",
            "choices": [
                "La autorización funcionó; la autenticación es insuficiente",
                "El aprovisionamiento SCIM concede push automáticamente",
                "Un inicio de sesión válido concede Write automáticamente",
                "La autenticación funcionó; la autorización es insuficiente"
            ],
            "explanations": [
                "El usuario ya se autenticó, pero carece del permiso necesario.",
                "El aprovisionamiento no concede automáticamente escritura en repositorios.",
                "La autenticación por sí sola no concede Write.",
                "Iniciar sesión demuestra identidad; los permisos determinan las acciones permitidas."
            ],
            "concept": "Autenticación frente a autorización",
            "hints": [
                "Distingue la prueba de identidad del acceso a un recurso concreto.",
                "Comprueba si se trata de una cuenta personal o del acceso empresarial."
            ]
        },
        "admin-019": {
            "prompt": "Para cuentas personales en una organización de GitHub Enterprise Cloud que exige SAML, ¿qué paso adicional permite que una clave SSH existente acceda a recursos protegidos?",
            "choices": [
                "Autorizar la clave SSH para la organización",
                "Añadir la clave al campo SAML Public Certificate",
                "Cargar la clave privada en el IdP de la organización",
                "Asignar al usuario el rol empresarial Billing manager"
            ],
            "explanations": [
                "La credencial SSH debe autorizarse para la organización protegida.",
                "El certificado SAML verifica firmas del IdP, no usuarios SSH.",
                "Las claves privadas SSH deben permanecer privadas; cargarlas no autoriza SSO.",
                "El rol de facturación no autoriza una credencial SSH."
            ],
            "concept": "Credenciales SSH autorizadas para SAML",
            "hints": [
                "Distingue la prueba de identidad del acceso a un recurso concreto.",
                "Comprueba si se trata de una cuenta personal o del acceso empresarial."
            ]
        },
        "admin-020": {
            "prompt": "¿Qué ocurre con la pertenencia a equipos sincronizados si se revoca la identidad SAML vinculada de un usuario con cuenta personal en GitHub Enterprise Cloud?",
            "choices": [
                "La cuenta personal pasa a ser una cuenta administrada",
                "Se elimina al usuario de los equipos vinculados a grupos del IdP",
                "El usuario pasa a ser responsable del equipo",
                "El usuario recibe acceso Write directo al repositorio"
            ],
            "explanations": [
                "Revocar el vínculo SAML no cambia el modelo de cuenta.",
                "Revocar la identidad vinculada elimina la pertenencia a los equipos asociados.",
                "La revocación no asciende al usuario.",
                "La revocación no sustituye el acceso del equipo por un permiso directo."
            ],
            "concept": "Identidad vinculada y acceso a equipos",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-021": {
            "prompt": "¿Qué rol estándar de repositorio concede los mínimos privilegios para ver código y comentar issues en un repositorio privado de organización?",
            "choices": [
                "Write",
                "Maintain",
                "Read",
                "Triage"
            ],
            "explanations": [
                "Write añade permisos para contribuir código.",
                "Maintain añade gestión más amplia del repositorio.",
                "Read permite lectura y discusión sin derechos de gestión más amplios.",
                "Triage añade gestión de issues y pull requests."
            ],
            "concept": "Contribución de solo lectura",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-022": {
            "prompt": "¿Qué rol estándar corresponde a quien gestiona issues y pull requests de otros colaboradores, pero no debe hacer push de código a un repositorio de organización?",
            "choices": [
                "Read",
                "Write",
                "Admin",
                "Triage"
            ],
            "explanations": [
                "Read no proporciona todas las capacidades de clasificación.",
                "Write concede permisos innecesarios para enviar código.",
                "Admin concede poderes administrativos sensibles innecesarios.",
                "Triage permite gestionar issues y pull requests sin acceso de escritura."
            ],
            "concept": "Clasificación sin escritura de código",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-023": {
            "prompt": "¿Cuál es el rol estándar mínimo de repositorio que permite hacer push de código, sujeto a las reglas de rama aplicables?",
            "choices": [
                "Write",
                "Read",
                "Triage",
                "Maintain"
            ],
            "explanations": [
                "Write es el primer rol estándar que permite enviar código.",
                "Read permite ver, no hacer push.",
                "Triage gestiona issues y pull requests sin escritura.",
                "Maintain permite push, pero concede más privilegios de los necesarios."
            ],
            "concept": "Rol para contribuir código",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-024": {
            "prompt": "¿Qué rol estándar de repositorio de organización está pensado para responsables de proyecto que gestionan el repositorio sin acciones administrativas sensibles o destructivas?",
            "choices": [
                "Admin",
                "Maintain",
                "Triage",
                "Write"
            ],
            "explanations": [
                "Admin incluye los poderes sensibles excluidos por la tarea.",
                "Maintain está diseñado para gestionar el repositorio sin acciones sensibles o destructivas.",
                "Triage se centra en issues y pull requests.",
                "Write se centra en contribuir código."
            ],
            "concept": "Límite del mantenimiento de repositorios",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-025": {
            "prompt": "¿Qué rol estándar de repositorio puede gestionar el acceso individual y de equipos a un repositorio de organización?",
            "choices": [
                "Write",
                "Triage",
                "Admin",
                "Maintain"
            ],
            "explanations": [
                "Write no permite gestionar el acceso al repositorio.",
                "Triage no administra permisos de acceso.",
                "Admin incluye gestionar el acceso al repositorio.",
                "Maintain no incluye administrar el acceso individual y de equipos."
            ],
            "concept": "Administración del acceso a repositorios",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-026": {
            "prompt": "¿Qué rol de organización incluye acceso administrativo a todos los repositorios que pertenecen a esa organización?",
            "choices": [
                "Organization member",
                "Billing manager",
                "Team maintainer",
                "Organization owner"
            ],
            "explanations": [
                "Los miembros reciben acceso mediante permisos base y concesiones explícitas.",
                "Gestionar facturación no concede administración de todos los repositorios.",
                "Los responsables gestionan su equipo, no todos los repositorios.",
                "Los propietarios tienen acceso administrativo a todos los repositorios de la organización."
            ],
            "concept": "Autoridad del propietario de organización",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-027": {
            "prompt": "Un propietario de organización en GitHub Enterprise Cloud quiere cambiar los permisos predeterminados de repositorio de sus miembros. ¿Qué ruta de la interfaz inglesa contiene Base permissions?",
            "choices": [
                "Organization Settings → Member privileges",
                "Organization Settings → Authentication security",
                "Enterprise People → Enterprise teams",
                "Repository Settings → Rules → Rulesets"
            ],
            "explanations": [
                "Member privileges contiene los permisos base de la organización.",
                "Authentication security controla requisitos de autenticación.",
                "Enterprise teams gestiona grupos empresariales.",
                "Los rulesets regulan actividad del repositorio, no permisos predeterminados de miembros."
            ],
            "concept": "Navegación a permisos base",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-028": {
            "prompt": "En una organización de GitHub Enterprise Cloud con cuentas personales, ¿qué caracteriza a un colaborador externo?",
            "choices": [
                "Un responsable de equipo que gestiona grupos sincronizados",
                "Una persona no miembro con acceso a uno o más repositorios de la organización",
                "Un miembro de organización sin permisos administrativos",
                "Un propietario empresarial que gestiona políticas de organización"
            ],
            "explanations": [
                "Ser responsable de equipo no define la condición de colaborador externo.",
                "Los colaboradores externos acceden a repositorios sin pertenecer a la organización.",
                "Un miembro sin administración sigue perteneciendo a la organización.",
                "La propiedad empresarial es un rol administrativo empresarial."
            ],
            "concept": "Límite de colaboración externa",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-029": {
            "prompt": "Un miembro tiene permiso base Read y una concesión directa Write en un repositorio privado. ¿Cuál es su rol efectivo en ese repositorio?",
            "choices": [
                "Triage",
                "Sin acceso",
                "Write",
                "Read"
            ],
            "explanations": [
                "Ninguna concesión especifica Triage y se dispone de Write.",
                "El miembro tiene dos fuentes válidas de acceso.",
                "La concesión directa superior prevalece sobre Read base.",
                "Read base no reduce una concesión explícita superior."
            ],
            "concept": "Permisos efectivos concedidos",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-030": {
            "prompt": "¿Convertirse en propietario empresarial proporciona automáticamente acceso al contenido de los repositorios privados de todas las organizaciones en GitHub Enterprise Cloud?",
            "choices": [
                "Sí; la propiedad empresarial concede Admin en todos los repositorios",
                "No; un propietario empresarial nunca puede unirse a organizaciones",
                "Sí; el derecho de facturación incluye todo el código privado",
                "No; el propietario puede unirse a organizaciones para obtener acceso"
            ],
            "explanations": [
                "La propiedad empresarial no concede automáticamente ese acceso.",
                "Los propietarios pueden unirse a organizaciones de su empresa.",
                "La autoridad de facturación no da acceso general al código privado.",
                "No se recibe acceso al contenido por defecto, pero el propietario puede unirse a organizaciones."
            ],
            "concept": "Límite de contenido del propietario empresarial",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-031": {
            "prompt": "¿Qué rol empresarial predefinido corresponde a un administrador financiero que necesita los ajustes de facturación, pero no administrar políticas empresariales?",
            "choices": [
                "Billing manager",
                "Enterprise owner",
                "App manager",
                "User"
            ],
            "explanations": [
                "Billing manager proporciona la autoridad de facturación necesaria.",
                "Enterprise owner añade control innecesario sobre miembros y políticas.",
                "App manager gestiona registros de GitHub Apps de la empresa.",
                "User no tiene acceso administrativo empresarial por defecto."
            ],
            "concept": "Delegación de facturación empresarial",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-032": {
            "prompt": "¿Cómo puede un propietario de GitHub Enterprise Cloud delegar permisos concretos de ajustes empresariales sin conceder la propiedad completa de la empresa?",
            "choices": [
                "Conceder Write base en una organización",
                "Crear y asignar un rol empresarial personalizado",
                "Asignar Admin en un repositorio",
                "Nombrar al usuario responsable de equipo de organización"
            ],
            "explanations": [
                "Los permisos base de organización afectan a repositorios, no a administración empresarial.",
                "Los roles empresariales personalizados definen permisos empresariales seleccionados.",
                "Admin de repositorio no controla ajustes empresariales.",
                "Mantener un equipo no concede permisos de ajustes empresariales."
            ],
            "concept": "Delegación empresarial granular",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-033": {
            "prompt": "¿Qué recurso de GitHub Enterprise Cloud agrupa usuarios de forma central para asignar roles empresariales y acceso a varias organizaciones?",
            "choices": [
                "Lista de colaboradores del repositorio",
                "Permiso base de organización",
                "Enterprise team",
                "Proyecto de organización"
            ],
            "explanations": [
                "La lista de colaboradores se limita a un repositorio.",
                "Los permisos base son un nivel predeterminado, no un grupo central.",
                "Los equipos empresariales pueden recibir roles empresariales y añadirse a organizaciones.",
                "Los proyectos organizan trabajo, no pertenencia y roles empresariales."
            ],
            "concept": "Finalidad del equipo empresarial",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-034": {
            "prompt": "Un propietario empresarial quiere crear un equipo empresarial en la interfaz inglesa de GitHub Enterprise Cloud. ¿Qué ruta está documentada?",
            "choices": [
                "Organization Settings → Member privileges → Create Enterprise team",
                "Repository Settings → Collaborators & teams → Create Enterprise team",
                "Enterprise Settings → Authentication security → Create Enterprise team",
                "Enterprise People → Enterprise teams → Create Enterprise team"
            ],
            "explanations": [
                "Los privilegios de miembros de organización no crean equipos empresariales.",
                "Administrar colaboradores del repositorio no crea equipos empresariales.",
                "Authentication security configura requisitos de acceso, no crea equipos.",
                "La pestaña People empresarial contiene Enterprise teams y su control de creación."
            ],
            "concept": "Navegación a equipos empresariales",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-035": {
            "prompt": "Cuando se concede acceso a una organización a un equipo empresarial de GitHub Enterprise Cloud, ¿qué acceso inicial a repositorios reciben sus miembros por esa pertenencia?",
            "choices": [
                "Los permisos base de repositorio de la organización",
                "Admin en todos los repositorios de la organización",
                "Write en todos los repositorios de la organización",
                "Ninguna pertenencia hasta aceptar invitaciones"
            ],
            "explanations": [
                "Los miembros se añaden directamente y reciben el nivel base de la organización.",
                "El acceso del equipo no concede Admin automáticamente.",
                "Write no es automático salvo que sea el nivel base o se conceda aparte.",
                "El flujo documentado añade miembros sin invitaciones."
            ],
            "concept": "Acceso de equipos empresariales a organizaciones",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-036": {
            "prompt": "¿Qué efecto documentado tiene eliminar a alguien de un equipo empresarial en GitHub Enterprise Cloud?",
            "choices": [
                "Se revocan todos los permisos independientes de repositorio",
                "Se retiran los privilegios concedidos por el equipo",
                "Se elimina la cuenta de GitHub",
                "Se elimina al usuario de la cuenta empresarial"
            ],
            "explanations": [
                "Los permisos independientes no se revocan automáticamente por ese cambio.",
                "La eliminación retira los privilegios asociados a ese equipo.",
                "Salir del equipo no elimina la cuenta del usuario.",
                "Eliminar la pertenencia al equipo no elimina por sí solo la pertenencia empresarial."
            ],
            "concept": "Ámbito de baja de equipos empresariales",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-037": {
            "prompt": "En una empresa con EMU, ¿cómo se propagan los cambios de un grupo del IdP a los miembros de un equipo empresarial vinculado?",
            "choices": [
                "Mediante autenticación con certificados SSH",
                "Mediante autenticación WebAuthn",
                "Mediante sincronización SCIM",
                "Solo mediante aserciones SAML"
            ],
            "explanations": [
                "Los certificados SSH autentican conexiones, no aprovisionan miembros de equipos.",
                "WebAuthn verifica la autenticación, no sincroniza grupos.",
                "La sincronización de grupos de equipos empresariales EMU utiliza SCIM.",
                "Las aserciones SAML autentican usuarios, no sincronizan estas pertenencias."
            ],
            "concept": "Sincronización de equipos empresariales EMU",
            "hints": [
                "Distingue el inicio de sesión, el aprovisionamiento y la pertenencia a grupos.",
                "Identifica qué sistema proporciona la información que GitHub necesita."
            ]
        },
        "admin-038": {
            "prompt": "Se añade un equipo empresarial a una organización en GitHub Enterprise Cloud. ¿Pueden los administradores de organización retirar permisos que los administradores empresariales concedieron al equipo?",
            "choices": [
                "Sí; cualquier propietario de organización puede anular concesiones empresariales",
                "Sí; asignar Read siempre cancela las concesiones empresariales",
                "No; los administradores de organización no pueden conceder acceso adicional al equipo",
                "No; los permisos empresariales no pueden retirarse a nivel de organización"
            ],
            "explanations": [
                "Ser propietario de organización no autoriza a eliminar esas concesiones heredadas.",
                "Una concesión local menor no cancela permisos empresariales superiores.",
                "Sí pueden conceder acceso adicional y roles de organización.",
                "Los administradores de organización no pueden retirar permisos del equipo concedidos por la empresa."
            ],
            "concept": "Herencia de permisos de equipos empresariales",
            "hints": [
                "Identifica qué nivel administrativo controla la configuración.",
                "Considera tanto los requisitos heredados como los ajustes locales."
            ]
        },
        "admin-039": {
            "prompt": "Un administrador de repositorio de GitHub Enterprise Cloud audita quién tiene acceso a un repositorio privado de organización. ¿Qué área de la interfaz inglesa muestra sus colaboradores y equipos?",
            "choices": [
                "Repository Settings → Collaborators & teams",
                "Repository Settings → Webhooks",
                "Organization Settings → Authentication security",
                "Organization Settings → Member privileges"
            ],
            "explanations": [
                "Collaborators & teams es el área de gestión del acceso al repositorio.",
                "Webhooks muestra integraciones de entrega de eventos.",
                "Authentication security trata requisitos de autenticación, no la lista de acceso del repositorio.",
                "Member privileges establece valores generales de la organización, no enumera los permisos de este repositorio."
            ],
            "concept": "Auditoría de acceso al repositorio",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-040": {
            "prompt": "¿A quién se aplican los permisos base de repositorio de una organización?",
            "choices": [
                "A los miembros de todas las organizaciones de la empresa",
                "A los miembros de esa organización",
                "A todos los colaboradores externos",
                "A todos los usuarios de GitHub.com"
            ],
            "explanations": [
                "Pertenecer a otra organización no concede estos permisos base.",
                "Los permisos base se aplican a miembros de esa organización.",
                "Los colaboradores externos quedan expresamente fuera de ese ámbito.",
                "Los ajustes de organización no conceden acceso a todos los usuarios de GitHub."
            ],
            "concept": "Destinatarios de permisos base",
            "hints": [
                "Revisa todas las fuentes de pertenencia y permisos.",
                "Distingue los límites de empresa, organización, equipo y repositorio."
            ]
        },
        "admin-041": {
            "prompt": "En GitHub Enterprise Cloud, dos rulesets activos se aplican a la misma rama y exigen distintas cantidades de aprobaciones. Para un colaborador sin bypass, ¿qué requisito se aplica?",
            "choices": [
                "Solo el ruleset de repositorio",
                "El requisito de revisión menos restrictivo",
                "El requisito de revisión más restrictivo",
                "Solo el ruleset creado más recientemente"
            ],
            "explanations": [
                "Un ruleset local no sustituye los demás aplicables.",
                "El requisito más débil no anula el más fuerte.",
                "Las reglas aplicables se agregan y prevalece la versión más restrictiva de la misma regla.",
                "Los rulesets no tienen prioridad por fecha de creación."
            ],
            "concept": "Agregación de rulesets",
            "hints": [
                "Identifica qué nivel administrativo controla la configuración.",
                "Considera tanto los requisitos heredados como los ajustes locales."
            ]
        },
        "admin-042": {
            "prompt": "¿Qué acceso mínimo al repositorio se necesita para ver sus rulesets activos en GitHub Enterprise Cloud?",
            "choices": [
                "Triage",
                "Maintain",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Triage es más acceso del necesario para ver rulesets.",
                "Maintain es innecesario para ver reglas activas.",
                "Admin se necesita para muchos cambios, no para consultar rulesets activos.",
                "Cualquier persona con Read puede ver los rulesets activos del repositorio."
            ],
            "concept": "Visibilidad de rulesets para auditores",
            "hints": [
                "Identifica el conjunto mínimo de capacidades que exige la tarea.",
                "Distingue lectura, contribución, mantenimiento y administración."
            ]
        },
        "admin-043": {
            "prompt": "Un propietario de GitHub Enterprise Cloud exige una política que restringe cambios de visibilidad de repositorios en las organizaciones. ¿Quién puede flexibilizar esa restricción empresarial?",
            "choices": [
                "Un propietario empresarial que cambie la política empresarial",
                "Un propietario de organización que cambie una preferencia local",
                "Un administrador de repositorio que cambie sus ajustes",
                "Un responsable de equipo que cambie sus miembros"
            ],
            "explanations": [
                "La restricción se controla y exige a nivel empresarial.",
                "Una organización no puede anular una política empresarial obligatoria.",
                "Administrar un repositorio no permite eludir esa política.",
                "Gestionar equipos no controla políticas empresariales."
            ],
            "concept": "Autoridad de políticas empresariales",
            "hints": [
                "Identifica qué nivel administrativo controla la configuración.",
                "Considera tanto los requisitos heredados como los ajustes locales."
            ]
        },
        "admin-044": {
            "prompt": "¿Qué implementación permite alojar GitHub en el centro de datos propio de una empresa o en un entorno de nube compatible?",
            "choices": [
                "GitHub Enterprise Cloud con residencia de datos",
                "GitHub Enterprise Server",
                "GitHub Enterprise Cloud con cuentas personales",
                "GitHub Enterprise Cloud con EMU"
            ],
            "explanations": [
                "La residencia de datos ofrece alojamiento regional, no una instalación autogestionada.",
                "GitHub Enterprise Server se aloja en infraestructura gestionada por el cliente.",
                "Cloud con cuentas personales sigue siendo un servicio operado por GitHub.",
                "Cloud con EMU cambia el control de identidad, no la propiedad de la infraestructura."
            ],
            "concept": "Implementación autohospedada",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-045": {
            "prompt": "¿Qué tarea operativa realiza GitHub en vez del cliente al usar GitHub Enterprise Cloud en lugar de GitHub Enterprise Server?",
            "choices": [
                "Definir los estándares de revisión de la organización",
                "Asignar administradores de facturación empresarial",
                "Mantener y actualizar la plataforma alojada",
                "Elegir los colaboradores del repositorio"
            ],
            "explanations": [
                "El cliente sigue definiendo sus procesos de desarrollo.",
                "El cliente sigue eligiendo sus administradores empresariales.",
                "GitHub opera Cloud y evita al cliente gestionar actualizaciones de la plataforma.",
                "El cliente sigue gestionando el acceso al repositorio."
            ],
            "concept": "Límite operativo de Cloud",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-046": {
            "prompt": "Una empresa necesita alojamiento operado por GitHub en GitHub.com y ciclos de vida de cuentas controlados por el IdP, sin elegir residencia regional de datos. ¿Qué implementación encaja?",
            "choices": [
                "GitHub Enterprise Cloud con cuentas personales",
                "GitHub Enterprise Server con cuentas locales",
                "GitHub Enterprise Server con autenticación SAML",
                "GitHub Enterprise Cloud con EMU en GitHub.com"
            ],
            "explanations": [
                "Las cuentas personales siguen perteneciendo a cada individuo.",
                "Server lo aloja el cliente y las cuentas locales no cumplen el ciclo de vida requerido.",
                "SAML en Server no lo convierte en un servicio Cloud operado por GitHub.",
                "EMU está disponible en GitHub.com y ofrece cuentas gestionadas por el IdP."
            ],
            "concept": "Implementación Cloud con identidad administrada",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-047": {
            "prompt": "¿Qué combinación se requiere para GitHub Enterprise Cloud con residencia de datos?",
            "choices": [
                "Enterprise Managed Users en un subdominio dedicado de GHE.com",
                "Cuentas personales en una organización dedicada de GitHub.com",
                "Cuentas locales en una instalación GHES alojada por el cliente",
                "Cuentas personales en un dominio personalizado arbitrario de GitHub.com"
            ],
            "explanations": [
                "Las empresas Cloud con residencia de datos usan EMU y un subdominio dedicado de GHE.com.",
                "Una organización GitHub.com con cuentas personales no es ese modelo.",
                "GHES es una implementación autohospedada distinta.",
                "Un dominio arbitrario no establece una empresa Cloud con residencia de datos."
            ],
            "concept": "Identidad y alojamiento con residencia de datos",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-048": {
            "prompt": "¿Qué requiere adoptar EMU en una empresa existente de GitHub.com que usa cuentas personales?",
            "choices": [
                "Asignar un rol de administrador de facturación",
                "Migrar a una cuenta empresarial nueva",
                "Convertir cada cuenta personal en la misma empresa",
                "Cambiar la visibilidad de los repositorios a internal"
            ],
            "explanations": [
                "Asignar roles de facturación no cambia el modelo de cuentas.",
                "GitHub documenta la migración a una cuenta empresarial nueva para cambiar este modelo.",
                "Las cuentas personales existentes no se convierten directamente en administradas.",
                "Cambiar la visibilidad no cambia el tipo de identidad empresarial."
            ],
            "concept": "Migración del modelo de identidad",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-049": {
            "prompt": "En una implementación combinada de GitHub Enterprise Cloud y Server, ¿cómo se gestionan la mayoría de las políticas administrativas?",
            "choices": [
                "Solo en Management Console de Server para ambas implementaciones",
                "Automáticamente mediante sincronización del uso de licencias",
                "Por separado en cada cuenta empresarial",
                "Solo en la cuenta Cloud para ambas implementaciones"
            ],
            "explanations": [
                "Management Console de Server no administra las políticas de Cloud.",
                "Sincronizar licencias no sincroniza políticas empresariales.",
                "La mayor parte de la administración, incluidas las políticas, sigue separada por cuenta.",
                "La cuenta Cloud no administra universalmente las políticas de Server."
            ],
            "concept": "Límites de administración híbrida",
            "hints": [
                "Distingue la responsabilidad del alojamiento del modelo de identidad.",
                "Considera por separado ubicación de datos, operaciones y colaboración."
            ]
        },
        "admin-050": {
            "prompt": "Un repositorio se transfiere entre organizaciones de GitHub.com y nadie reutiliza su ubicación anterior. ¿Qué ocurre si un clon usa la URL remota anterior para fetch?",
            "choices": [
                "Fetch falla hasta descargar de nuevo todo el historial del clon.",
                "La URL anterior se convierte en una copia independiente permanente.",
                "La URL anterior concede acceso sin importar los nuevos permisos.",
                "Git redirige a la nueva ubicación; aun así se recomienda actualizar origin."
            ],
            "explanations": [
                "La transferencia conserva el historial Git y redirige la URL anterior.",
                "La ubicación anterior redirige; no es una segunda copia del repositorio.",
                "La redirección no evita la autenticación ni la autorización del repositorio.",
                "Las solicitudes clone, fetch y push se redirigen, pero la URL nueva evita depender de ello."
            ],
            "concept": "Las transferencias redirigen las URL Git sin evitar comprobaciones de acceso.",
            "hints": [
                "Distingue la ubicación del repositorio de su historial Git.",
                "Considera si una redirección también cambia la autorización."
            ]
        },
        "admin-051": {
            "prompt": "Un error reproducible del producto GitHub Enterprise Cloud persiste tras verificar la configuración. ¿Qué pruebas ayudan más al ingeniero de soporte autorizado a reproducirlo?",
            "choices": [
                "Pasos, errores exactos, URL afectadas y resultados esperados",
                "Fechas de contrato, cantidades de licencias y números de factura",
                "Nombres de equipo, cargos y datos del contacto de facturación",
                "Cantidades de repositorios, fechas de renovación y órdenes de compra"
            ],
            "explanations": [
                "Estos datos identifican el comportamiento que falla y cómo reproducirlo.",
                "Los datos comerciales no describen el comportamiento que falla.",
                "Los datos de contacto administrativos no aportan instrucciones de reproducción.",
                "El inventario y los datos de compra no reproducen el error."
            ],
            "concept": "Escalación útil a soporte",
            "hints": [
                "Distingue los ajustes del cliente de los fallos del producto o servicio.",
                "Relaciona las pruebas y el derecho a soporte con el entorno afectado."
            ]
        },
        "admin-052": {
            "prompt": "¿Por qué puede GitHub Support pedir a un administrador de GitHub Enterprise Server diagnósticos y un paquete de soporte?",
            "choices": [
                "El paquete cambia automáticamente la configuración de la instancia",
                "Soporte no tiene acceso directo al entorno del cliente",
                "Los paquetes sustituyen el contrato de licencias de la empresa",
                "Los diagnósticos conceden acceso administrativo permanente a soporte"
            ],
            "explanations": [
                "Generar un paquete recopila información, no reconfigura la instancia.",
                "Los administradores aportan información del entorno y registros para investigar.",
                "Los paquetes aportan pruebas técnicas, no derechos de licencia.",
                "Los archivos de diagnóstico no conceden acceso administrativo persistente."
            ],
            "concept": "Límite de pruebas para soporte de Server",
            "hints": [
                "Distingue los ajustes del cliente de los fallos del producto o servicio.",
                "Relaciona las pruebas y el derecho a soporte con el entorno afectado."
            ]
        },
        "admin-053": {
            "prompt": "En GitHub Enterprise Server 3.19, ¿qué archivo ofrece un resumen en texto sin formato de los ajustes y el entorno de la instancia?",
            "choices": [
                "Paquete de soporte ampliado",
                "Archivo de código fuente del repositorio",
                "Archivo de diagnóstico",
                "Paquete de soporte"
            ],
            "explanations": [
                "Un paquete ampliado también es un archivo comprimido con más historial de registros.",
                "El archivo de código contiene archivos del repositorio, no diagnósticos de la instancia.",
                "El archivo de diagnóstico resume los ajustes y el entorno.",
                "Un paquete de soporte es un archivo comprimido con diagnósticos y registros depurados."
            ],
            "concept": "Archivo de diagnóstico de Server",
            "hints": [
                "Considera si se necesitan solo ajustes o también registros.",
                "Comprueba la topología y la interfaz administrativa documentada."
            ]
        },
        "admin-054": {
            "prompt": "¿Qué añade un paquete de soporte de GitHub Enterprise Server 3.19 respecto a un archivo de diagnóstico independiente?",
            "choices": [
                "Una copia completa de repositorios para recuperación ante desastres",
                "Una exportación del código fuente de todos los repositorios",
                "Una exportación de miembros de organización sin registros de instancia",
                "Registros depurados de la instancia junto con diagnósticos"
            ],
            "explanations": [
                "Un paquete de soporte no es una copia para recuperación ante desastres.",
                "Su finalidad es recopilar pruebas de diagnóstico, no exportar todo el código.",
                "Los datos de miembros por sí solos omiten los registros del paquete.",
                "Los paquetes combinan diagnósticos y registros depurados relevantes."
            ],
            "concept": "Contenido del paquete de soporte",
            "hints": [
                "Considera si se necesitan solo ajustes o también registros.",
                "Comprueba la topología y la interfaz administrativa documentada."
            ]
        },
        "admin-055": {
            "prompt": "Un administrador tiene una sesión SSH administrativa en GitHub Enterprise Server 3.19. ¿Qué utilidad obtiene la información de diagnóstico de la instancia?",
            "choices": [
                "ghe-diagnostics",
                "ghe-support-bundle",
                "ghe-cluster-support-bundle",
                "git archive"
            ],
            "explanations": [
                "ghe-diagnostics genera información de diagnóstico de la instancia.",
                "ghe-support-bundle recopila un paquete de soporte, no solo diagnósticos.",
                "La utilidad de clúster recopila un paquete específico para esa topología.",
                "git archive empaqueta contenido del repositorio, no diagnósticos de la instancia."
            ],
            "concept": "Utilidad de diagnóstico de Server",
            "hints": [
                "Considera si se necesitan solo ajustes o también registros.",
                "Comprueba la topología y la interfaz administrativa documentada."
            ]
        },
        "admin-056": {
            "prompt": "Para una instancia independiente de GitHub Enterprise Server 3.19, ¿qué comando SSH documentado descarga un paquete de soporte al equipo local?",
            "choices": [
                "git bundle create repository.bundle --all",
                "ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz",
                "ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt",
                "git archive --format=tar HEAD > repository.tar"
            ],
            "explanations": [
                "git bundle exporta objetos Git, no diagnósticos y registros de la instancia.",
                "Este comando SSH administrativo transmite el paquete a un archivo local.",
                "Este comando descarga diagnósticos sin los registros del paquete de soporte.",
                "git archive exporta código del repositorio, no un paquete de Server."
            ],
            "concept": "Descargar un paquete de soporte de Server",
            "hints": [
                "Considera si se necesitan solo ajustes o también registros.",
                "Comprueba la topología y la interfaz administrativa documentada."
            ]
        },
        "admin-057": {
            "prompt": "¿Qué utilidad de paquetes de soporte está documentada para instancias de GitHub Enterprise Server 3.19 con clústeres o replicación geográfica?",
            "choices": [
                "git bundle",
                "git archive",
                "ghe-cluster-support-bundle",
                "ghe-diagnostics"
            ],
            "explanations": [
                "git bundle transporta objetos Git.",
                "git archive exporta el árbol de un repositorio.",
                "La utilidad de clúster está documentada para clústeres y replicación geográfica.",
                "ghe-diagnostics genera diagnósticos, no el paquete para toda la topología."
            ],
            "concept": "Recopilación de soporte según topología",
            "hints": [
                "Considera si se necesitan solo ajustes o también registros.",
                "Comprueba la topología y la interfaz administrativa documentada."
            ]
        },
        "admin-058": {
            "prompt": "Un administrador accede a Management Console de GitHub Enterprise Server 3.19, pero no a SSH. ¿Qué ruta de la interfaz inglesa descarga diagnósticos?",
            "choices": [
                "Management Console → Support → Download support bundle",
                "Repository Settings → Collaborators & teams",
                "Organization Settings → Authentication security",
                "Management Console → Support → Download diagnostics info"
            ],
            "explanations": [
                "Esta opción descarga un paquete con registros, no el diagnóstico independiente solicitado.",
                "La administración de acceso al repositorio no genera diagnósticos de instancia.",
                "Los ajustes de autenticación de organización no exportan diagnósticos de Server.",
                "La pestaña Support ofrece Download diagnostics info sin necesitar SSH."
            ],
            "concept": "Diagnósticos de Management Console",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-059": {
            "prompt": "Para un cliente empresarial, ¿qué es GitHub Premium Support?",
            "choices": [
                "Un nivel adicional de pago con compromisos de soporte adicionales",
                "El soporte Enterprise predeterminado incluido con las licencias de usuario",
                "Un servicio profesional limitado a consultoría de implementación",
                "Un foro comunitario dedicado a administración empresarial"
            ],
            "explanations": [
                "Premium Support complementa el soporte Enterprise con compromisos según el plan.",
                "El soporte Enterprise incluido no es la oferta adicional Premium.",
                "Premium Support es un nivel de soporte, no solo un proyecto de implementación.",
                "Los foros no proporcionan los compromisos de servicio de Premium Support."
            ],
            "concept": "Niveles de soporte empresarial",
            "hints": [
                "Distingue los ajustes del cliente de los fallos del producto o servicio.",
                "Relaciona las pruebas y el derecho a soporte con el entorno afectado."
            ]
        },
        "admin-060": {
            "prompt": "Un cliente de GitHub Enterprise Cloud con Premium Support sufre errores críticos del servicio que bloquean flujos de producción y afectan directamente al negocio. ¿Qué prioridad documentada corresponde al ticket?",
            "choices": [
                "Low",
                "Urgent",
                "High",
                "Normal"
            ],
            "explanations": [
                "Low cubre preguntas y sugerencias sin urgencia.",
                "Urgent cubre fallos críticos de producción con impacto directo en el negocio para clientes Premium Support.",
                "High cubre los casos documentados de cuenta o seguridad con impacto limitado.",
                "Normal cubre problemas limitados o moderados y preguntas generales."
            ],
            "concept": "Prioridad de incidentes con Premium Support",
            "hints": [
                "Distingue los ajustes del cliente de los fallos del producto o servicio.",
                "Relaciona las pruebas y el derecho a soporte con el entorno afectado."
            ]
        },
        "admin-061": {
            "prompt": "Un administrador quiere que los cambios a la rama predeterminada lleguen mediante pull requests y no con pushes directos. ¿Qué regla de ruleset de rama establece ese estándar?",
            "choices": [
                "Require linear history",
                "Block force pushes",
                "Require a pull request before merging",
                "Require signed commits"
            ],
            "explanations": [
                "El historial lineal restringe la estructura de merges, no la vía de contribución.",
                "Bloquear pushes forzados no impide pushes directos ordinarios.",
                "La regla exige que los cambios se asocien a un pull request, sujeta a los ajustes de bypass.",
                "Las firmas verifican commits, pero no exigen pull requests."
            ],
            "concept": "Estándar de ramas con pull requests",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-062": {
            "prompt": "¿Qué archivo de repositorio asigna a personas o equipos de organización la responsabilidad de revisar cambios en rutas coincidentes?",
            "choices": [
                "CONTRIBUTING.md",
                "SECURITY.md",
                "README.md",
                "CODEOWNERS"
            ],
            "explanations": [
                "CONTRIBUTING.md describe directrices sin asignar revisores por ruta.",
                "SECURITY.md describe la política para comunicar problemas de seguridad.",
                "README.md presenta el proyecto, no define el enrutamiento de revisiones.",
                "CODEOWNERS vincula rutas con responsables y solicita revisiones en pull requests aptos."
            ],
            "concept": "Responsabilidad de revisión por ruta",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-063": {
            "prompt": "Un repositorio tiene CODEOWNERS, pero se necesita aprobación obligatoria de sus responsables antes de integrar cambios protegidos. ¿Qué control adicional hace falta?",
            "choices": [
                "Exigir revisión de code owners en la protección de rama o ruleset",
                "Añadir los responsables a los observadores del repositorio",
                "Mencionar los responsables solo en la plantilla del pull request",
                "Dar a los responsables una suscripción a notificaciones del repositorio"
            ],
            "explanations": [
                "CODEOWNERS solicita revisiones; una regla obligatoria exige la aprobación.",
                "Observar cambia notificaciones, no requisitos de integración.",
                "Mencionar en una plantilla no exige aprobación.",
                "Las suscripciones no imponen condiciones de integración."
            ],
            "concept": "Exigir aprobación de responsables del código",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-064": {
            "prompt": "¿Qué vincula un release de GitHub con un punto concreto del historial del repositorio?",
            "choices": [
                "Un hito del proyecto",
                "Una etiqueta Git",
                "El extremo cambiante de una rama",
                "Un número de pull request"
            ],
            "explanations": [
                "Un hito agrupa trabajo, no sitúa un release en el historial Git.",
                "Los releases se basan en etiquetas Git que marcan puntos del historial.",
                "El extremo cambia al añadir commits y no es la referencia de versión del release.",
                "El número identifica un cambio propuesto, no la etiqueta del release."
            ],
            "concept": "Referencia de versiones publicadas",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-065": {
            "prompt": "En el editor de releases de GitHub en inglés, ¿qué control conserva un release sin terminar para seguir trabajando después en vez de publicarlo?",
            "choices": [
                "Generate release notes",
                "This is a pre-release",
                "Save draft",
                "Publish release"
            ],
            "explanations": [
                "Generar notas prepara texto sin guardar el release como borrador.",
                "Marcar una versión preliminar no equivale a mantenerla sin publicar.",
                "Save draft conserva el release para seguir preparándolo.",
                "Publish release lo publica para su audiencia permitida."
            ],
            "concept": "Estado de preparación del release",
            "hints": [
                "Empieza en el ámbito administrativo indicado en la pregunta.",
                "Relaciona la finalidad del ajuste, no solo una etiqueta conocida."
            ]
        },
        "admin-066": {
            "prompt": "¿Qué mecanismo aporta indicaciones reutilizables o estructura al crear issues y pull requests?",
            "choices": [
                "Etiquetas de temas del repositorio",
                "Asignaciones de rutas de CODEOWNERS",
                "Descripciones de hitos del proyecto",
                "Plantillas de issues y pull requests"
            ],
            "explanations": [
                "Los temas clasifican repositorios, no estructuran contribuciones nuevas.",
                "CODEOWNERS dirige revisiones, no estructura las descripciones.",
                "Los hitos agrupan trabajo, no proporcionan plantillas de creación.",
                "Las plantillas estructuran la información aportada al crear issues y pull requests."
            ],
            "concept": "Recepción estandarizada de contribuciones",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-067": {
            "prompt": "¿Qué enfoque comparte un workflow CI de varios jobs mantenido centralmente entre repositorios sin copiar su implementación en cada invocador?",
            "choices": [
                "Invocar un workflow reutilizable",
                "Generar copias independientes desde una plantilla de workflow",
                "Empaquetar solo una secuencia de pasos en una acción compuesta",
                "Mantener copias completas separadas en cada repositorio"
            ],
            "explanations": [
                "Un workflow reutilizable comparte lógica de workflow, incluidos varios jobs.",
                "Las plantillas crean copias, no una implementación compartida.",
                "Una acción compuesta reutiliza pasos de un job, no un workflow de varios jobs.",
                "Las copias independientes duplican la implementación y su mantenimiento."
            ],
            "concept": "Estándares de proceso reutilizables",
            "hints": [
                "Distingue las convenciones escritas de los controles obligatorios.",
                "Identifica el archivo o la regla que regula esta parte del desarrollo."
            ]
        },
        "admin-068": {
            "prompt": "Una misma cuenta de GitHub pertenece a varias organizaciones de una implementación de GitHub Enterprise Cloud. ¿Cómo cuenta a esa persona el modelo empresarial de usuarios únicos?",
            "choices": [
                "Una vez por pertenencia a equipo",
                "Una vez en toda la implementación empresarial",
                "Una vez por pertenencia a organización",
                "Una vez por repositorio con acceso Write"
            ],
            "explanations": [
                "Las pertenencias a equipos no multiplican sus licencias empresariales.",
                "El modelo cuenta a la persona una vez entre las organizaciones de la implementación.",
                "Pertenecer a varias organizaciones no multiplica sus licencias.",
                "Los permisos de repositorio no multiplican sus licencias empresariales."
            ],
            "concept": "Licencias empresariales por usuario único",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-069": {
            "prompt": "En GitHub Enterprise Cloud con cuentas personales, ¿qué colaborador externo consume una licencia empresarial según el criterio documentado de acceso a repositorios?",
            "choices": [
                "Uno con solo una invitación pendiente a un repositorio público",
                "Uno cuya invitación a un repositorio privado falló",
                "Uno con acceso aceptado a un repositorio privado que no sea fork",
                "Uno con acceso solo a repositorios públicos"
            ],
            "explanations": [
                "Una invitación pendiente para colaboración solo pública no consume una.",
                "Las invitaciones fallidas quedan excluidas del consumo.",
                "Los colaboradores con acceso a repositorios privados que no sean forks consumen licencias.",
                "La colaboración externa solo pública no consume licencia empresarial."
            ],
            "concept": "Ámbito de licencias para colaboradores externos",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-070": {
            "prompt": "¿Qué pareja nombra los dos modelos documentados de facturación de licencias de usuario GitHub Enterprise?",
            "choices": [
                "Mensual y anual",
                "Tarjeta de crédito y factura",
                "Cloud y Server",
                "Basado en uso y por volumen"
            ],
            "explanations": [
                "Mensual y anual describen frecuencia, no estos modelos de licencia.",
                "Tarjeta y factura tratan del pago, no de modelos de licencia.",
                "Cloud y Server son implementaciones, no modelos de facturación de licencias.",
                "GitHub documenta modelos basados en uso y por volumen para licencias empresariales."
            ],
            "concept": "Modelos de facturación de licencias empresariales",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-071": {
            "prompt": "¿Qué afirmación describe correctamente la relación entre licencias de usuario y consumo de funciones de pago en GitHub Enterprise Cloud?",
            "choices": [
                "Las licencias y el uso facturable de funciones pueden generar cargos",
                "Los cargos de licencia siempre incluyen todo el consumo de funciones de pago",
                "El consumo facturable sustituye los cargos de licencia empresarial",
                "Cada pertenencia adicional a una organización sustituye cargos de funciones"
            ],
            "explanations": [
                "La factura puede incluir licencias, uso de funciones de pago y productos adicionales.",
                "Las cantidades incluidas no hacen gratuito todo consumo adicional.",
                "El consumo de funciones no sustituye el componente de licencias.",
                "Pertenecer a organizaciones no sustituye la facturación de funciones."
            ],
            "concept": "Licencias frente a consumo de servicios",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-072": {
            "prompt": "¿Cuál es la finalidad de los centros de costos en la facturación de GitHub Enterprise Cloud?",
            "choices": [
                "Deduplicar licencias de usuario entre Cloud y Server",
                "Atribuir gastos medidos a unidades de negocio",
                "Agrupar contratos separados de licencias empresariales",
                "Convertir suscripciones por volumen en licencias basadas en uso"
            ],
            "explanations": [
                "La sincronización de licencias, no los centros, deduplica usuarios entre entornos.",
                "Los centros asignan gastos medidos, no facturación por volumen o suscripción.",
                "Los centros no combinan contratos de licencias separados.",
                "Los centros no cambian el modelo de facturación de licencias."
            ],
            "concept": "Asignación empresarial de costos",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-073": {
            "prompt": "¿Qué se necesita para deduplicar el uso de licencia de una persona entre GitHub Enterprise Cloud y GitHub Enterprise Server?",
            "choices": [
                "Conectar ambas implementaciones al mismo IdP SAML solamente",
                "Unificar contactos de facturación sin sincronizar licencias",
                "Sincronizar el uso de licencias entre entornos",
                "Configurar nombres de usuario coincidentes sin sincronizar licencias"
            ],
            "explanations": [
                "Un IdP compartido no sincroniza por sí solo los datos de licencias.",
                "Los contactos de facturación compartidos no establecen sincronización de licencias.",
                "La sincronización permite deduplicar usuarios mediante criterios documentados de identidad.",
                "Los nombres coincidentes por sí solos no sincronizan el uso de licencias."
            ],
            "concept": "Sincronización de licencias entre implementaciones",
            "hints": [
                "Distingue las personas con licencia del consumo de servicios de pago.",
                "Comprueba el modelo de facturación y el ámbito antes de contar o asignar cargos."
            ]
        },
        "admin-074": {
            "prompt": "Una persona administra un repositorio y quiere importar una definición de ruleset existente desde la interfaz de otro repositorio. ¿Qué formato de archivo usa esta importación?",
            "choices": [
                "JSON",
                "CSV",
                "TOML",
                "SARIF"
            ],
            "explanations": [
                "La interfaz de importación acepta una definición de ruleset en JSON.",
                "Las tablas CSV no son el formato de importación de rulesets.",
                "TOML no es el formato documentado de este importador.",
                "SARIF representa resultados de análisis estático, no definiciones de rulesets."
            ],
            "concept": "Las definiciones de rulesets pueden importarse desde archivos JSON.",
            "hints": [
                "Identifica el objeto que se transfiere, no su resultado de aplicación.",
                "Distingue una definición de política de un informe de análisis."
            ]
        },
        "admin-075": {
            "prompt": "¿Qué estado de aplicación de un conjunto de reglas registra posibles infracciones sin bloquear operaciones en GitHub Enterprise Cloud?",
            "choices": [
                "Active",
                "Disabled",
                "Evaluate",
                "Archived"
            ],
            "explanations": [
                "Los conjuntos Active imponen sus requisitos.",
                "Los conjuntos Disabled no evalúan la actividad.",
                "Evaluate mide los efectos sin imponer las reglas.",
                "Archived no es un estado de aplicación de conjuntos de reglas."
            ],
            "concept": "Evaluación sin bloqueo de reglas",
            "hints": [
                "Distingue observar una política de imponerla.",
                "Una política inactiva no necesariamente recopila evaluaciones."
            ]
        },
        "admin-076": {
            "prompt": "Una GitHub App de publicación necesita una excepción a un conjunto de reglas de rama. ¿Qué cambio limita la excepción a esa integración?",
            "choices": [
                "Añadir esa aplicación a la lista de omisión",
                "Permitir la omisión al rol de escritura",
                "Desactivar la aplicación de reglas para la rama",
                "Permitir la omisión a todos los administradores del repositorio"
            ],
            "explanations": [
                "Una entrada específica limita la omisión al actor de instalación.",
                "Una excepción por rol incluye a todos sus usuarios.",
                "Desactivar la aplicación exime a todos los actores.",
                "Eximir a todos los administradores excede la integración."
            ],
            "concept": "Excepciones de reglas acotadas",
            "hints": [
                "Identifica al actor que realiza la publicación.",
                "Compara excepciones individuales con excepciones por rol."
            ]
        },
        "admin-077": {
            "prompt": "¿Qué regla de rama rechaza los envíos que no son fast-forward de actores sin permiso de omisión?",
            "choices": [
                "Require linear history",
                "Restrict deletions",
                "Block force pushes",
                "Require signed commits"
            ],
            "explanations": [
                "El historial lineal impide commits de fusión, no todas las reescrituras.",
                "Restringir eliminaciones protege la referencia de la rama.",
                "Bloquear envíos forzados impide actualizaciones que no son fast-forward.",
                "Los commits firmados también pueden reescribir el historial."
            ],
            "concept": "Protección del historial de ramas",
            "hints": [
                "Distingue la forma de los commits de las actualizaciones de referencias.",
                "Un historial firmado también puede reescribirse."
            ]
        },
        "admin-078": {
            "prompt": "¿Qué ajuste de revisión invalida aprobaciones anteriores cuando un envío cambia el diff de la solicitud de incorporación?",
            "choices": [
                "Dismiss stale pull request approvals when new commits are pushed",
                "Require review from Code Owners",
                "Require conversation resolution before merging",
                "Require approval of the most recent reviewable push"
            ],
            "explanations": [
                "Descartar revisiones obsoletas elimina aprobaciones del diff anterior.",
                "La revisión de propietarios selecciona revisores responsables.",
                "Resolver conversaciones atiende los hilos de discusión.",
                "Aprobar el último envío puede conservar aprobaciones anteriores."
            ],
            "concept": "Descarte de aprobaciones obsoletas",
            "hints": [
                "Considera si las aprobaciones se eliminan o se complementan.",
                "Piensa qué cambia al modificarse el diff revisado."
            ]
        },
        "admin-079": {
            "prompt": "¿Qué atributo de una comprobación de estado obligatoria restringe los resultados aceptados a una GitHub App instalada concreta?",
            "choices": [
                "El nombre de la comprobación",
                "El origen esperado",
                "El nombre del archivo de flujo",
                "El patrón de selección de ramas"
            ],
            "explanations": [
                "El nombre de una comprobación no demuestra quién la produjo.",
                "El origen esperado vincula la comprobación con la aplicación elegida.",
                "Un nombre de archivo no es el productor autenticado de la comprobación.",
                "Los patrones seleccionan ramas, no productores de comprobaciones."
            ],
            "concept": "Origen de comprobaciones obligatorias",
            "hints": [
                "El nombre de una comprobación no demuestra quién la produjo.",
                "Busca el ajuste que limita el origen del resultado."
            ]
        },
        "admin-080": {
            "prompt": "¿Qué regla de rama exige firmas verificadas criptográficamente en los commits?",
            "choices": [
                "Require signed commits",
                "Require linear history",
                "Require a pull request before merging",
                "Require status checks to pass"
            ],
            "explanations": [
                "Esta regla exige firmas de commits verificadas.",
                "El historial lineal excluye commits de fusión sin verificar firmas.",
                "Exigir una solicitud de incorporación controla el proceso de fusión.",
                "Las comprobaciones de estado no verifican firmas por sí mismas."
            ],
            "concept": "Exigencia de firmas de commits",
            "hints": [
                "Distingue pruebas de autoría de aprobaciones de revisión.",
                "Considera qué control actúa sobre cada commit."
            ]
        },
        "admin-081": {
            "prompt": "En GitHub Enterprise Cloud, ¿qué regla de envío bloquea archivos bajo un patrón de directorio prohibido en la red de bifurcaciones de un repositorio privado?",
            "choices": [
                "Restrict file extensions",
                "Restrict file path length",
                "Restrict file size",
                "Restrict file paths"
            ],
            "explanations": [
                "Restringir extensiones compara sufijos, no patrones de directorio.",
                "Restringir longitud mide caracteres, no la identidad del directorio.",
                "Restringir tamaño mide el tamaño del archivo.",
                "Restringir rutas compara patrones de rutas prohibidas."
            ],
            "concept": "Restricciones de envío por ruta",
            "hints": [
                "Relaciona la regla con la propiedad prohibida.",
                "El nombre de un directorio no es un límite de tamaño."
            ]
        },
        "admin-082": {
            "prompt": "¿Qué política de repositorios de empresa controla si pueden bifurcarse repositorios privados e internos en GitHub Enterprise Cloud?",
            "choices": [
                "Política de bifurcación de repositorios",
                "Política de creación de repositorios",
                "Política de visibilidad de repositorios",
                "Política de transferencia de repositorios"
            ],
            "explanations": [
                "La política de bifurcación controla las bifurcaciones privadas e internas.",
                "La política de creación controla quién puede crear repositorios.",
                "La política de visibilidad controla cambios de visibilidad.",
                "La política de transferencia regula cambios de propietario."
            ],
            "concept": "Políticas empresariales de protección de datos",
            "hints": [
                "Identifica la operación que crea una copia relacionada.",
                "No confundas copiar con transferir la propiedad."
            ]
        },
        "admin-083": {
            "prompt": "La dirección de un usuario figura en la lista de IP permitidas de GitHub Enterprise Cloud. ¿Qué acceso concede eso por sí solo a repositorios privados?",
            "choices": [
                "Lectura en toda la empresa",
                "Escritura en la organización de origen",
                "Ningún permiso adicional de repositorio",
                "Lectura en repositorios enumerados explícitamente"
            ],
            "explanations": [
                "Admitir una red no concede lectura en toda la empresa.",
                "La lista de red no asigna roles de organización.",
                "La autorización del repositorio sigue siendo necesaria por separado.",
                "Las entradas IP describen redes, no permisos de repositorio."
            ],
            "concept": "Controles de red frente a autorización",
            "hints": [
                "Distingue el origen de una solicitud de quién puede acceder a los datos.",
                "La condición de red es solo una parte del control de acceso."
            ]
        },
        "admin-084": {
            "prompt": "En la interfaz de GitHub.com en inglés, ¿qué ruta de ajustes permite al propietario de una organización aplicar configuraciones de seguridad a repositorios?",
            "choices": [
                "Settings > Member privileges",
                "Settings > Advanced Security > Configurations",
                "Settings > Authentication security",
                "Settings > Third-party access"
            ],
            "explanations": [
                "Member privileges controla capacidades de miembros, no la asignación de configuraciones.",
                "Configurations permite seleccionar repositorios y asignar configuraciones.",
                "Authentication security controla la autenticación.",
                "Third-party access controla integraciones, no paquetes de ajustes de seguridad."
            ],
            "concept": "Aplicación de configuraciones de seguridad de organización",
            "hints": [
                "Busca la activación de seguridad de repositorios, no autenticación de usuarios.",
                "Distingue acceso de integraciones de cobertura de funciones."
            ]
        },
        "admin-085": {
            "prompt": "¿Qué opción de una configuración de seguridad impide que los administradores de repositorio cambien sus ajustes administrados cuando se admite la aplicación obligatoria?",
            "choices": [
                "Definirla como configuración predeterminada",
                "Exigir el cumplimiento de la configuración",
                "Desvincularla de los repositorios",
                "Aplicarla a todos los repositorios actuales"
            ],
            "explanations": [
                "La asignación predeterminada afecta repositorios nuevos, no derechos de modificación.",
                "La aplicación obligatoria restringe cambios en los ajustes administrados.",
                "Desvincular elimina la relación de configuración administrada.",
                "La aplicación amplia no impone por sí sola los ajustes administrados."
            ],
            "concept": "Aplicación obligatoria de configuraciones de seguridad",
            "hints": [
                "El alcance de asignación y las restricciones de modificación son distintos.",
                "Mantener una relación administrada no equivale a impedir cambios locales."
            ]
        },
        "admin-086": {
            "prompt": "¿Quién puede ver datos de seguridad de todos los repositorios de una organización mediante la vista general de seguridad, según la disponibilidad de funciones?",
            "choices": [
                "Todos los mantenedores de repositorios",
                "Todos los miembros de la organización",
                "Propietarios de organización y administradores de seguridad",
                "Todos los colaboradores externos"
            ],
            "explanations": [
                "El acceso de mantenedor se limita a repositorios autorizados.",
                "Ser miembro no expone los datos de seguridad de cada repositorio.",
                "Estos roles tienen visibilidad de seguridad en toda la organización.",
                "La colaboración externa no confiere visibilidad en toda la organización."
            ],
            "concept": "Límites de visibilidad de la vista general de seguridad",
            "hints": [
                "Considera si el rol abarca la organización o un repositorio.",
                "Acceder a un repositorio no implica acceder a todas las alertas."
            ]
        },
        "admin-087": {
            "prompt": "Un propietario de empresa no ve un evento antiguo no relacionado con Git en la vista predeterminada del registro de auditoría, pero sigue dentro del plazo de retención. ¿Qué debe cambiar primero?",
            "choices": [
                "La rama predeterminada de la empresa",
                "La visibilidad del repositorio",
                "El filtro de fechas del registro de auditoría",
                "Las notificaciones del miembro"
            ],
            "explanations": [
                "La rama predeterminada no controla las fechas de búsqueda de auditoría.",
                "La visibilidad no es un filtro temporal de auditoría.",
                "La vista predeterminada abarca menos que el plazo total de retención.",
                "Las notificaciones no amplían las búsquedas del registro."
            ],
            "concept": "Ventana de búsqueda de auditoría frente a retención",
            "hints": [
                "La ventana inicial puede ser menor que el historial almacenado.",
                "Cambia el alcance de búsqueda antes que las políticas de seguridad."
            ]
        },
        "admin-088": {
            "prompt": "¿Qué diseño permite conservar evidencias de auditoría de GitHub Enterprise Cloud más allá de la retención nativa de GitHub?",
            "choices": [
                "Guardar la URL de búsqueda del registro",
                "Suscribir a los propietarios a notificaciones por correo",
                "Archivar repositorios con mayor frecuencia",
                "Transmitir eventos a almacenamiento con retención externa"
            ],
            "explanations": [
                "Una URL de búsqueda no conserva los eventos subyacentes.",
                "Las notificaciones no constituyen una transmisión completa de auditoría.",
                "Los archivos de repositorio conservan código, no eventos de auditoría de empresa.",
                "El almacenamiento externo puede aplicar la política de retención propia."
            ],
            "concept": "Arquitectura de retención de evidencias de auditoría",
            "hints": [
                "Considera dónde persistirán los registros de eventos.",
                "Una vista guardada no es una copia conservada."
            ]
        },
        "admin-089": {
            "prompt": "¿Qué valor permite identificar eventos del registro de auditoría de empresa realizados con un token de acceso concreto?",
            "choices": [
                "El nombre visible del propietario del token",
                "La fecha de caducidad del token",
                "Los ámbitos solicitados por el token",
                "El hash SHA-256 del token"
            ],
            "explanations": [
                "Un nombre visible no distingue los tokens de un usuario.",
                "Las fechas de caducidad no son identificadores únicos.",
                "Muchos tokens pueden compartir los mismos ámbitos.",
                "Las búsquedas específicas de token usan su hash."
            ],
            "concept": "Atribución de auditoría por token",
            "hints": [
                "Un usuario puede tener varias credenciales.",
                "Prefiere un identificador de una credencial a sus capacidades."
            ]
        },
        "admin-090": {
            "prompt": "Una alerta de detección de secretos muestra una clave de API de producción válida. ¿Qué acción contiene la exposición de la credencial?",
            "choices": [
                "Revocar o rotar la clave en su proveedor",
                "Eliminar el último commit que contiene la clave",
                "Cerrar la alerta como resuelta",
                "Convertir el repositorio en solo lectura"
            ],
            "explanations": [
                "La revocación o rotación en el proveedor invalida la credencial expuesta.",
                "Eliminar un commit no invalida credenciales copiadas.",
                "Cerrar una alerta no revoca la clave.",
                "El acceso de solo lectura no impide usar la clave expuesta."
            ],
            "concept": "Contención de una credencial filtrada",
            "hints": [
                "Distingue eliminar evidencias de deshabilitar acceso.",
                "La credencial podría existir ya fuera del repositorio."
            ]
        },
        "admin-091": {
            "prompt": "¿Qué función de repositorio puede bloquear secretos compatibles durante un envío, antes de que entren en el repositorio?",
            "choices": [
                "Protección de inserción de secretos",
                "Comprobaciones de validez de secretos",
                "Actualizaciones de seguridad de Dependabot",
                "Configuración predeterminada de CodeQL"
            ],
            "explanations": [
                "La protección de inserción comprueba patrones de secretos compatibles al enviar.",
                "Las comprobaciones de validez evalúan si las credenciales detectadas siguen activas.",
                "Las actualizaciones de seguridad corrigen dependencias vulnerables.",
                "CodeQL analiza código, no proporciona esta barrera de envío."
            ],
            "concept": "Protección preventiva de secretos",
            "hints": [
                "Distingue prevención al ingresar datos de clasificación posterior.",
                "No todas las funciones de seguridad se ejecutan durante el envío."
            ]
        },
        "admin-092": {
            "prompt": "Con la omisión delegada habilitada, ¿qué debe hacer un colaborador sin privilegios de omisión para enviar una credencial de prueba bloqueada?",
            "choices": [
                "Renombrar la rama y reintentar",
                "Cerrar la alerta de detección resultante",
                "Solicitar una omisión para revisión",
                "Añadir un comentario al commit"
            ],
            "explanations": [
                "Cambiar el nombre de la rama no concede privilegios de omisión.",
                "Cerrar una alerta no autoriza el envío bloqueado.",
                "La omisión delegada dirige la solicitud a revisores autorizados.",
                "Un comentario de commit no concede una omisión."
            ],
            "concept": "Revisión de omisiones delegadas de secretos",
            "hints": [
                "Considera quién puede autorizar una excepción.",
                "La clasificación del desarrollador no es por sí sola una autorización."
            ]
        },
        "admin-093": {
            "prompt": "¿Qué capacidad de detección de secretos reconoce el formato de credenciales propio de una organización cuando ningún patrón integrado lo cubre?",
            "choices": [
                "Patrones personalizados",
                "Envío de dependencias",
                "Conjuntos de consultas de CodeQL",
                "Comprobaciones de validez"
            ],
            "explanations": [
                "Los patrones personalizados definen reglas para secretos propios de la organización.",
                "El envío de dependencias inventaría dependencias de software.",
                "Las consultas de CodeQL analizan código, no configuran patrones de secretos.",
                "Las comprobaciones de validez prueban credenciales detectadas, no definen formatos."
            ],
            "concept": "Detección personalizada de secretos",
            "hints": [
                "Lo que falta es reconocer un formato.",
                "Distingue reglas de detección de validación de credenciales."
            ]
        },
        "admin-094": {
            "prompt": "¿Qué demuestra una lista vacía de alertas de detección de secretos sobre un repositorio?",
            "choices": [
                "Todas las credenciales del historial se han revocado",
                "No hay alertas visibles dentro de la cobertura habilitada",
                "Se han analizado todos los formatos de datos sensibles",
                "Ningún secreto compatible puede entrar en un commit futuro"
            ],
            "explanations": [
                "Una lista vacía no demuestra revocación en el proveedor.",
                "Los resultados dependen de la cobertura, los ajustes y el acceso.",
                "La detección de secretos no reconoce todos los formatos sensibles.",
                "Una lista vacía no garantiza prevención futura."
            ],
            "concept": "Límites de la ausencia de hallazgos",
            "hints": [
                "La ausencia de hallazgos no demuestra cobertura universal.",
                "Considera los ajustes, los patrones compatibles y la visibilidad."
            ]
        },
        "admin-095": {
            "prompt": "Se ha revocado una credencial filtrada, pero su alerta de detección de secretos sigue abierta. ¿Qué debe registrar el mantenedor al cerrarla?",
            "choices": [
                "Un motivo de falso positivo porque terminó el acceso",
                "Un motivo de secreto de prueba porque el token está inactivo",
                "Un motivo de revocación que refleje la corrección",
                "Ningún motivo porque eliminar el archivo la cierra"
            ],
            "explanations": [
                "La revocación no convierte la detección original en incorrecta.",
                "Una credencial de producción no se convierte en secreto de prueba.",
                "El motivo de cierre debe reflejar la revocación real.",
                "Eliminar un archivo no cierra automáticamente la alerta."
            ],
            "concept": "Resolución precisa de alertas de secretos",
            "hints": [
                "Clasifica el hallazgo original aparte de su estado actual.",
                "Registra la acción realmente realizada para corregirlo."
            ]
        },
        "admin-096": {
            "prompt": "¿Qué configuración de CodeQL elige los lenguajes y desencadenadores de análisis sin añadir un archivo de flujo de trabajo personalizable al repositorio?",
            "choices": [
                "Configuración predeterminada",
                "Configuración en CI externa",
                "Configuración avanzada",
                "Envío de dependencias"
            ],
            "explanations": [
                "La configuración predeterminada administra estas opciones sin un flujo versionado.",
                "La CI externa requiere configurar el proceso externo de análisis.",
                "La configuración avanzada usa un archivo de flujo personalizable.",
                "El envío de dependencias aporta inventario, no análisis de CodeQL."
            ],
            "concept": "Configuración predeterminada de CodeQL",
            "hints": [
                "Compara configuración administrada con personalización mediante archivos.",
                "La pregunta trata de análisis de código, no de inventario de dependencias."
            ]
        },
        "admin-097": {
            "prompt": "Un repositorio necesita comandos de compilación personalizados en su análisis de CodeQL mediante GitHub Actions. ¿Qué configuración permite editar esos pasos?",
            "choices": [
                "Configuración predeterminada con otro conjunto de consultas",
                "Configuración avanzada con archivo de flujo de trabajo",
                "Configuración predeterminada con otras etiquetas de ejecutor",
                "Configuración predeterminada con otros lenguajes de análisis"
            ],
            "explanations": [
                "Cambiar el conjunto de consultas no expone pasos de compilación personalizados.",
                "La configuración avanzada permite personalizar los pasos del flujo.",
                "Las etiquetas seleccionan hosts de ejecución, no pasos de compilación personalizados.",
                "Seleccionar lenguajes no proporciona comandos personalizados de compilación."
            ],
            "concept": "Configuración de compilación personalizada de CodeQL",
            "hints": [
                "Considera dónde se definen los pasos de compilación ejecutables.",
                "Cambiar una alerta no cambia la ejecución del análisis."
            ]
        },
        "admin-098": {
            "prompt": "¿Qué formato de resultados permite a un analizador externo compatible cargar hallazgos en el análisis de código de GitHub?",
            "choices": [
                "SPDX",
                "SARIF",
                "JUnit XML",
                "LCOV"
            ],
            "explanations": [
                "SPDX describe listas de materiales de software.",
                "SARIF representa resultados de análisis estático aceptados por el análisis de código.",
                "JUnit XML suele describir resultados de pruebas.",
                "LCOV describe resultados de cobertura de código."
            ],
            "concept": "Intercambio de resultados de análisis de código",
            "hints": [
                "Relaciona el formato con hallazgos de análisis estático.",
                "Los informes de inventario, pruebas y cobertura tienen otros fines."
            ]
        },
        "admin-099": {
            "prompt": "¿Qué capacidad analiza código fuente de aplicaciones compatibles para encontrar flujos de datos inseguros, como inyección SQL?",
            "choices": [
                "Alertas de Dependabot",
                "Análisis de código con CodeQL",
                "Comprobaciones de validez de secretos",
                "Revisión de dependencias"
            ],
            "explanations": [
                "Las alertas de Dependabot identifican vulnerabilidades conocidas en dependencias.",
                "CodeQL puede analizar flujos entre origen y destino en código compatible.",
                "Las comprobaciones de validez evalúan credenciales detectadas.",
                "La revisión de dependencias examina cambios de dependencias, no flujos de aplicación."
            ],
            "concept": "Análisis de aplicaciones frente a cadena de suministro",
            "hints": [
                "Identifica si el riesgo está en la lógica de aplicación o versiones de paquetes.",
                "Considera cómo la entrada no confiable llega a una operación sensible."
            ]
        },
        "admin-100": {
            "prompt": "Una revisión demuestra que un hallazgo de análisis de código es un falso positivo. ¿Cómo debe descartarlo el mantenedor?",
            "choices": [
                "Seleccionar el motivo de falso positivo y documentarlo",
                "Eliminar los archivos de resultados del flujo",
                "Desactivar el análisis del lenguaje",
                "Reducir la visibilidad del repositorio y repetir"
            ],
            "explanations": [
                "Un motivo admitido y un comentario conservan la justificación.",
                "Eliminar resultados no constituye un descarte trazable.",
                "Desactivar un lenguaje elimina la cobertura de otros hallazgos.",
                "Cambiar la visibilidad no resuelve un falso positivo."
            ],
            "concept": "Descarte documentado de análisis de código",
            "hints": [
                "Conserva evidencias de la decisión sin eliminar cobertura útil.",
                "La clasificación debe explicar por qué no aplica el hallazgo."
            ]
        },
        "admin-101": {
            "prompt": "¿Qué control de conjuntos de reglas de GitHub Enterprise Cloud puede bloquear fusiones según una herramienta de análisis de código y umbrales de gravedad de alertas?",
            "choices": [
                "Require signed commits",
                "Require linear history",
                "Require deployments to succeed",
                "Require code scanning results"
            ],
            "explanations": [
                "Las firmas verifican commits, no umbrales de vulnerabilidades.",
                "El historial lineal regula la estructura de commits.",
                "Las comprobaciones de despliegue dependen del éxito de los despliegues.",
                "Esta regla selecciona herramientas y umbrales de gravedad."
            ],
            "concept": "Barreras de fusión basadas en seguridad",
            "hints": [
                "Un análisis ejecutado correctamente aún puede contener vulnerabilidades.",
                "Busca un control que evalúe hallazgos, no solo ejecución."
            ]
        },
        "admin-102": {
            "prompt": "En GitHub Enterprise Server 3.19, ¿qué requisito previo se exige explícitamente para que los repositorios usen análisis de código?",
            "choices": [
                "El propietario de la organización publica todos los repositorios",
                "El propietario enlaza un repositorio público de GitHub.com",
                "El administrador del sitio habilita el análisis de código en la instancia",
                "El usuario autoriza una OAuth App con ámbito repo"
            ],
            "explanations": [
                "Publicar repositorios no es necesario ni apropiado para código privado.",
                "Un repositorio público enlazado no es este requisito de GHES.",
                "GHES exige que el administrador del sitio habilite el análisis en la instancia.",
                "Una autorización OAuth no habilita la función de la instancia."
            ],
            "concept": "Requisitos de análisis de código específicos de GHES",
            "hints": [
                "Distingue administración de la instancia de configuración del repositorio.",
                "Usa documentación correspondiente a la versión de Server instalada."
            ]
        },
        "admin-103": {
            "prompt": "Para repositorios privados en GitHub Team, ¿qué pareja de productos cubre respectivamente análisis de código y detección de secretos?",
            "choices": [
                "GitHub Secret Protection; GitHub Code Security",
                "GitHub Copilot Business; GitHub Code Security",
                "GitHub Code Security; GitHub Secret Protection",
                "Solo GitHub Team; GitHub Secret Protection"
            ],
            "explanations": [
                "Los productos están invertidos: Secret Protection atiende credenciales.",
                "Copilot Business por sí solo no concede análisis de código.",
                "Code Security cubre análisis de código; Secret Protection, detección de secretos.",
                "GitHub Team por sí solo no incluye análisis de código en repositorios privados."
            ],
            "concept": "Licencias actuales de productos de seguridad",
            "hints": [
                "Distingue análisis de vulnerabilidades del código de detección de credenciales.",
                "El plan base de colaboración no concede todas las funciones de seguridad."
            ]
        },
        "admin-104": {
            "prompt": "¿Qué capacidad de repositorio proporciona el inventario de dependencias que usan las alertas de Dependabot?",
            "choices": [
                "Base de datos de CodeQL",
                "Patrones personalizados de secretos",
                "Grafo de dependencias",
                "Avisos de seguridad del repositorio"
            ],
            "explanations": [
                "Una base de CodeQL representa código fuente para análisis.",
                "Los patrones de secretos identifican credenciales, no paquetes.",
                "Las alertas usan el grafo para identificar dependencias vulnerables.",
                "Los avisos describen vulnerabilidades, no generan el inventario de este repositorio."
            ],
            "concept": "Grafo de dependencias y alertas de vulnerabilidad",
            "hints": [
                "Las alertas necesitan inventario e información de vulnerabilidades.",
                "Identifica el componente de inventario del repositorio."
            ]
        },
        "admin-105": {
            "prompt": "¿Qué función de Dependabot abre solicitudes de incorporación para mantener dependencias compatibles actualizadas aunque no haya una vulnerabilidad conocida?",
            "choices": [
                "Actualizaciones de versión de Dependabot",
                "Actualizaciones de seguridad de Dependabot",
                "Revisión de dependencias",
                "Alertas de Dependabot"
            ],
            "explanations": [
                "Las actualizaciones de versión proponen mejoras periódicas de dependencias.",
                "Las actualizaciones de seguridad se dirigen a dependencias vulnerables.",
                "La revisión evalúa cambios de dependencias en solicitudes de incorporación.",
                "Las alertas notifican dependencias con vulnerabilidades conocidas."
            ],
            "concept": "Actualizaciones periódicas frente a actualizaciones de seguridad",
            "hints": [
                "Distingue mantenimiento de versiones de corrección de vulnerabilidades.",
                "Una notificación no es una solicitud de actualización."
            ]
        },
        "admin-106": {
            "prompt": "¿Qué archivo define ecosistemas de paquetes, directorios y horarios de las actualizaciones de versión de Dependabot?",
            "choices": [
                ".github/SECURITY.md",
                ".github/CODEOWNERS",
                ".github/dependabot.yml",
                ".github/workflows/codeql.yml"
            ],
            "explanations": [
                "SECURITY.md describe cómo informar vulnerabilidades y las versiones compatibles.",
                "CODEOWNERS define responsables de revisión.",
                "Dependabot lee la configuración de actualizaciones de versión de este archivo.",
                "Un flujo de CodeQL configura análisis, no horarios de Dependabot."
            ],
            "concept": "Ubicación de la configuración de Dependabot",
            "hints": [
                "Relaciona el archivo con la automatización que configura.",
                "La documentación de seguridad difiere de una configuración ejecutable."
            ]
        },
        "admin-107": {
            "prompt": "Dependabot necesita una credencial de registro privado. ¿A qué almacén de secretos debe hacer referencia su configuración de registro?",
            "choices": [
                "A un secreto de Dependabot",
                "Solo a un secreto de Actions",
                "Solo a un secreto de Codespaces",
                "A un secreto de webhook"
            ],
            "explanations": [
                "La autenticación de registros de Dependabot usa secretos de Dependabot.",
                "Los secretos exclusivos de Actions no se proporcionan a las tareas de Dependabot.",
                "Los secretos de Codespaces sirven a entornos de desarrollo, no a estas tareas.",
                "Los secretos de webhook autentican entregas, no acceso a registros de paquetes."
            ],
            "concept": "Autenticación de registros de Dependabot",
            "hints": [
                "Los secretos pertenecen a consumidores y almacenes distintos.",
                "Una credencial existente no está disponible para todas las funciones."
            ]
        },
        "admin-108": {
            "prompt": "¿Qué función muestra dependencias añadidas o eliminadas por una solicitud de incorporación y señala vulnerabilidades conocidas en esos cambios?",
            "choices": [
                "Creación de una base de CodeQL",
                "Revisión de alertas de secretos",
                "Revisión de dependencias",
                "Publicación de avisos del repositorio"
            ],
            "explanations": [
                "Crear una base de CodeQL prepara el análisis del código.",
                "La revisión de secretos trata credenciales, no diferencias de dependencias.",
                "La revisión de dependencias muestra cambios e información de vulnerabilidades asociadas.",
                "Publicar avisos divulga vulnerabilidades, no revisa cambios de dependencias."
            ],
            "concept": "Riesgo de dependencias en solicitudes de incorporación",
            "hints": [
                "Céntrate en los cambios introducidos antes de fusionar.",
                "La entrada pertinente es un diff de dependencias, no credenciales."
            ]
        },
        "admin-109": {
            "prompt": "El mantenedor de un repositorio público debe coordinar en privado una corrección de vulnerabilidad con investigadores invitados. ¿Qué función permite esa colaboración?",
            "choices": [
                "Una incidencia pública con etiqueta de seguridad",
                "El descarte de una alerta de Dependabot",
                "Una discusión de versión publicada",
                "Un borrador de aviso de seguridad del repositorio"
            ],
            "explanations": [
                "Una incidencia pública expone la vulnerabilidad antes de su divulgación coordinada.",
                "Descartar alertas no crea un espacio privado de colaboración.",
                "Una discusión publicada no ofrece coordinación privada.",
                "Los borradores de avisos permiten discusión privada y correcciones coordinadas."
            ],
            "concept": "Coordinación privada de vulnerabilidades",
            "hints": [
                "Elige un flujo de divulgación con participantes restringidos.",
                "Una etiqueta no cambia la visibilidad pública."
            ]
        },
        "admin-110": {
            "prompt": "¿Qué archivo del repositorio documenta versiones compatibles e instrucciones para informar vulnerabilidades?",
            "choices": [
                "dependabot.yml",
                "CODEOWNERS",
                "SECURITY.md",
                "CODE_OF_CONDUCT.md"
            ],
            "explanations": [
                "dependabot.yml configura actualizaciones automatizadas de dependencias.",
                "CODEOWNERS asigna archivos a revisores responsables.",
                "SECURITY.md es el documento de política de seguridad del repositorio.",
                "CODE_OF_CONDUCT.md define normas de conducta comunitaria."
            ],
            "concept": "Política de notificación de vulnerabilidades",
            "hints": [
                "Identifica orientación para investigadores, no ajustes de automatización.",
                "La conducta comunitaria y la notificación de vulnerabilidades son políticas distintas."
            ]
        },
        "admin-111": {
            "prompt": "¿Dónde puede el mantenedor de un repositorio público solicitar un identificador CVE para una vulnerabilidad que aún no tiene uno?",
            "choices": [
                "En una regla de protección de rama",
                "En un aviso de seguridad del repositorio",
                "En un archivo de configuración de Dependabot",
                "En una búsqueda del registro de auditoría"
            ],
            "explanations": [
                "La protección de ramas no asigna identificadores de vulnerabilidad.",
                "GitHub puede asignar un CVE mediante el flujo de avisos.",
                "La configuración de Dependabot controla actualizaciones, no asignaciones CVE.",
                "Las búsquedas de auditoría recuperan eventos, no identificadores de vulnerabilidad."
            ],
            "concept": "Asignación de CVE mediante GitHub",
            "hints": [
                "Considera cómo se coordina la divulgación de vulnerabilidades.",
                "Solicitar un identificador no es una política de acceso al repositorio."
            ]
        },
        "admin-112": {
            "prompt": "¿Qué información ayuda más directamente a priorizar alertas de Dependabot según el riesgo de seguridad?",
            "choices": [
                "Antigüedad de alerta y popularidad del paquete",
                "Fecha de publicación y frecuencia de actualización",
                "Gravedad, posibilidad de explotación y uso",
                "Actividad del mantenedor y popularidad del repositorio"
            ],
            "explanations": [
                "La antigüedad y popularidad no establecen posibilidad de explotación ni impacto.",
                "Las fechas de publicación no miden por sí solas la exposición.",
                "Estas señales relacionan el impacto con el uso real.",
                "El mantenimiento y popularidad no miden por sí solos la exposición de esta aplicación."
            ],
            "concept": "Clasificación de dependencias basada en riesgo",
            "hints": [
                "Distingue metadatos de presentación de evidencias de exposición.",
                "El impacto por sí solo no describe el uso del código afectado."
            ]
        },
        "admin-113": {
            "prompt": "Un equipo descarta una alerta de Dependabot porque no usa el código vulnerable. ¿Qué registro facilita mejor una reevaluación posterior?",
            "choices": [
                "La URL de alerta sin justificación del descarte",
                "Una versión corregida sin evidencias de aplicabilidad",
                "La versión del paquete sin motivo de descarte",
                "El motivo de descarte con evidencias de uso"
            ],
            "explanations": [
                "Un enlace localiza el hallazgo, pero no explica su aceptación.",
                "Una versión corregida identifica la solución, no por qué se aplazó.",
                "La versión del paquete no explica por sí sola la decisión.",
                "Un motivo y evidencias conservan la base para reevaluar."
            ],
            "concept": "Aceptación trazable del riesgo de dependencias",
            "hints": [
                "Los futuros revisores necesitan entender la decisión de aplicabilidad.",
                "Registra por qué no se expone la funcionalidad afectada."
            ]
        },
        "admin-114": {
            "prompt": "¿Qué responsabilidades debe asignar un plan de respuesta de seguridad al equipo de la empresa, en vez de asumir que GitHub Support las realizará?",
            "choices": [
                "Conservación legal indefinida de datos de auditoría en GitHub",
                "Reparación de la infraestructura alojada subyacente de GitHub",
                "Cambio de la retención nativa para un incidente",
                "Contención, recopilación de evidencias e investigación del incidente"
            ],
            "explanations": [
                "GitHub Support no impone retenciones de datos de auditoría por investigación.",
                "La infraestructura alojada de GitHub está fuera de la administración del cliente.",
                "Un ticket no amplía la retención nativa de auditoría.",
                "La organización es responsable de responder y conservar sus evidencias."
            ],
            "concept": "Responsabilidad en respuesta a incidentes",
            "hints": [
                "Distingue asistencia sobre funciones de realizar la investigación.",
                "Planifica la conservación de evidencias antes de que caduquen."
            ]
        },
        "admin-115": {
            "prompt": "Una operación REST compatible solo lee incidencias de dos repositorios de organización. ¿Qué permiso de PAT detallado encaja mejor?",
            "choices": [
                "Contents: write",
                "Members: read",
                "Administration: write",
                "Issues: read"
            ],
            "explanations": [
                "La escritura de contenido no está relacionada y concede permisos excesivos.",
                "Leer miembros de organización no autoriza leer incidencias del repositorio.",
                "La escritura de administración excede la tarea.",
                "La lectura de incidencias encaja; selecciona solo los dos repositorios."
            ],
            "concept": "Mínimo privilegio de PAT detallados",
            "hints": [
                "Relaciona el permiso de recurso con la operación del endpoint.",
                "La selección de repositorios y el nivel de permiso limitan el acceso."
            ]
        },
        "admin-116": {
            "prompt": "Una organización exige aprobar los PAT detallados. ¿Quién puede aprobar la solicitud pendiente de un miembro?",
            "choices": [
                "Un propietario de la organización",
                "Cualquier colaborador del repositorio",
                "Cualquier miembro de la organización",
                "El creador del token por sí solo"
            ],
            "explanations": [
                "Los propietarios revisan y aprueban solicitudes pendientes.",
                "Los derechos de contribución no conceden aprobación de tokens de organización.",
                "Ser miembro no concede autoridad de aprobación de tokens.",
                "Crear un token no evita el requisito de aprobación."
            ],
            "concept": "Autoridad de aprobación de PAT detallados",
            "hints": [
                "Distingue solicitar acceso de autorizarlo.",
                "La política se aplica en el ámbito de organización."
            ]
        },
        "admin-117": {
            "prompt": "¿Qué política de organización limita cuánto tiempo pueden seguir usándose los tokens de acceso personal aplicables para sus recursos?",
            "choices": [
                "Política de archivado de repositorios",
                "Política de aprobación de OAuth Apps",
                "Política de sesiones SAML",
                "Política de duración máxima de tokens de acceso personal"
            ],
            "explanations": [
                "Archivar controla la actividad del repositorio, no la edad del token.",
                "La aprobación OAuth regula aplicaciones, no la duración de PAT.",
                "La duración de sesiones SAML no es una política de caducidad de PAT.",
                "Las políticas de duración máxima regulan la vigencia de PAT para acceder a la organización."
            ],
            "concept": "Gobierno de la caducidad de tokens",
            "hints": [
                "Relaciona el control con la duración de credenciales, no sesiones del navegador.",
                "Aprobación y caducidad resuelven problemas de gobierno distintos."
            ]
        },
        "admin-118": {
            "prompt": "En la interfaz de organización en inglés, un propietario abre Settings > Personal access tokens > Active tokens. ¿Qué acción elimina el acceso de un PAT detallado sin eliminar al usuario?",
            "choices": [
                "Eliminar al usuario de todos los equipos",
                "Revocar el acceso de ese token a la organización",
                "Eliminar todas las autorizaciones de OAuth Apps",
                "Archivar los repositorios afectados"
            ],
            "explanations": [
                "Eliminar equipos modifica más ampliamente el acceso legítimo del usuario.",
                "La revocación afecta al acceso del token seleccionado a recursos de organización.",
                "Las autorizaciones OAuth son distintas de este PAT.",
                "Archivar cambia el comportamiento del repositorio, no la autorización del token."
            ],
            "concept": "Revocación específica de tokens de organización",
            "hints": [
                "Elige un control sobre la credencial comprometida, no la pertenencia personal.",
                "Los tipos de credencial tienen autorizaciones separadas."
            ]
        },
        "admin-119": {
            "prompt": "¿Qué diseño de autenticación evita vincular una automatización desatendida de repositorio a la permanencia de un empleado?",
            "choices": [
                "El PAT clásico del empleado",
                "El token de acceso OAuth del empleado",
                "Un token de instalación de GitHub App",
                "El PAT detallado del empleado"
            ],
            "explanations": [
                "Un PAT clásico depende del acceso de su usuario.",
                "Un token OAuth de usuario sigue vinculado a esa persona.",
                "La autenticación de instalación actúa como aplicación instalada, no como empleado.",
                "Un PAT detallado también depende del acceso de su usuario."
            ],
            "concept": "Identidad de servicio para integraciones duraderas",
            "hints": [
                "La granularidad no elimina la dependencia de un usuario.",
                "Identifica si el actor es una persona o una instalación."
            ]
        },
        "admin-120": {
            "prompt": "Un miembro tiene identidad SAML vinculada y un PAT clásico con ámbitos adecuados. La política permite el token, pero carece de autorización SSO. ¿Qué se necesita?",
            "choices": [
                "Autorizar el token para esa organización",
                "Desactivar SAML SSO en la organización",
                "Regenerar el token con todos los ámbitos",
                "Cambiar el repositorio a visibilidad interna"
            ],
            "explanations": [
                "Los PAT clásicos necesitan autorización para la organización con SSO.",
                "Desactivar SSO debilita la política y no es necesario.",
                "Más ámbitos no sustituyen la autorización SSO.",
                "Cambiar la visibilidad no aporta la autorización faltante."
            ],
            "concept": "Autorización SSO de PAT clásicos",
            "hints": [
                "Distingue los ámbitos de la autorización de identidad de la organización.",
                "Un token utilizable aún puede carecer de acceso a una organización con SSO."
            ]
        },
        "admin-121": {
            "prompt": "¿Qué propiedad de GitHub Apps sirve para una integración que solo necesita leer contenido de repositorios seleccionados?",
            "choices": [
                "Ámbito clásico repo sobre repositorios del usuario",
                "Permisos detallados y selección de repositorios",
                "Escritura en todos los repositorios de la organización instalada",
                "Acceso de propietario heredado de su creador"
            ],
            "explanations": [
                "El ámbito clásico repo es más amplio y corresponde a autorizaciones por ámbitos.",
                "GitHub Apps admite repositorios seleccionados y niveles de permiso específicos.",
                "La instalación no implica escritura en todos los repositorios.",
                "Una aplicación no hereda la propiedad de organización de su creador."
            ],
            "concept": "Instalación de GitHub App con mínimo privilegio",
            "hints": [
                "Compara selección de recursos con ámbitos amplios de usuario.",
                "La instalación y el nivel de permiso son límites de acceso separados."
            ]
        },
        "admin-122": {
            "prompt": "Una OAuth App dice que solo lee código privado, pero solicita el ámbito repo. ¿Qué capacidad incluye realmente ese ámbito?",
            "choices": [
                "Lectura y escritura en repositorios públicos y privados",
                "Solo lectura en el repositorio privado seleccionado",
                "Solo acceso a metadatos de repositorios públicos",
                "Solo acceso a avisos de seguridad del repositorio"
            ],
            "explanations": [
                "El ámbito amplio repo incluye escritura, según el acceso del usuario.",
                "repo no es un permiso detallado de solo lectura para un repositorio.",
                "repo va más allá de metadatos públicos.",
                "repo no se limita a avisos de seguridad."
            ],
            "concept": "Revisión de ámbitos OAuth",
            "hints": [
                "Evalúa el ámbito solicitado, no la descripción del proveedor.",
                "Una concesión de usuario no equivale a un permiso por repositorio seleccionado."
            ]
        },
        "admin-123": {
            "prompt": "¿Qué credencial autentica solicitudes REST como instalación de GitHub App después de que la aplicación intercambie su JWT?",
            "choices": [
                "El secreto de webhook de la aplicación",
                "La clave pública de la aplicación",
                "Un identificador de cliente OAuth",
                "Un token de acceso de instalación"
            ],
            "explanations": [
                "Un secreto de webhook valida entregas, no llamadas API de instalación.",
                "Una clave pública no autoriza operaciones API de instalación.",
                "Un identificador de cliente por sí solo no autentica estas solicitudes.",
                "El token obtenido autoriza operaciones API de la instalación."
            ],
            "concept": "Autenticación de instalación de GitHub App",
            "hints": [
                "Distingue identidad de aplicación de credencial para operaciones de repositorio.",
                "Un secreto de verificación no es un token de acceso API."
            ]
        },
        "admin-124": {
            "prompt": "Una GitHub App instalada solicita permisos adicionales. ¿Qué ocurre si el propietario de la organización no los aprueba?",
            "choices": [
                "La aplicación recibe inmediatamente los nuevos permisos",
                "La instalación se desinstala automáticamente",
                "La aplicación conserva sus permisos actuales",
                "Se revocan los permisos actuales de la aplicación"
            ],
            "explanations": [
                "Los nuevos permisos requieren aprobación.",
                "No aprobar no desinstala automáticamente la aplicación.",
                "Se conservan los permisos actuales, aunque pueden fallar funciones nuevas.",
                "No aprobar una ampliación no revoca los permisos existentes."
            ],
            "concept": "Revisión de ampliación de permisos de aplicaciones",
            "hints": [
                "Una solicitud de ampliación no es una autorización automática.",
                "Distingue acceso existente de capacidades nuevas solicitadas."
            ]
        },
        "admin-125": {
            "prompt": "¿Qué acción elimina permanentemente el acceso autorizado de una instalación de GitHub App a una organización?",
            "choices": [
                "Eliminar la suscripción de webhook de la aplicación",
                "Quitar un repositorio de su instalación",
                "Suspender la instalación temporalmente",
                "Desinstalar la aplicación de la organización"
            ],
            "explanations": [
                "Eliminar entregas de webhook no elimina el acceso API de la aplicación.",
                "Quitar un repositorio mantiene el acceso a otros repositorios seleccionados.",
                "La suspensión bloquea el acceso temporalmente y es reversible.",
                "Desinstalar elimina la instalación de esa organización."
            ],
            "concept": "Eliminación del acceso de integraciones",
            "hints": [
                "Distingue desactivación temporal de eliminación de una instalación.",
                "Cambiar notificaciones no revoca la autorización."
            ]
        },
        "admin-126": {
            "prompt": "Una solicitud REST alcanza el límite con x-ratelimit-remaining: 0 y sin cabecera Retry-After. ¿Qué cabecera indica cuándo se restablece la ventana principal?",
            "choices": [
                "x-ratelimit-used",
                "x-ratelimit-reset",
                "x-ratelimit-resource",
                "x-github-request-id"
            ],
            "explanations": [
                "x-ratelimit-used informa consumo, no la hora de restablecimiento.",
                "x-ratelimit-reset expresa el restablecimiento en segundos desde la época UTC.",
                "x-ratelimit-resource identifica la categoría del límite.",
                "El identificador sirve para trazabilidad, no para programar reintentos."
            ],
            "concept": "Recuperación del límite principal de REST",
            "hints": [
                "Usa la información temporal del servidor, no reintentos inmediatos.",
                "Los contadores de consumo y las marcas de restablecimiento cumplen funciones distintas."
            ]
        },
        "admin-127": {
            "prompt": "Una respuesta REST de GitHub limitada incluye Retry-After: 60. ¿Qué debe hacer el cliente antes de reintentar?",
            "choices": [
                "Reintentar de inmediato con otro identificador",
                "Esperar a que terminen 60 solicitudes correctas",
                "Enviar 60 solicitudes paralelas",
                "Esperar al menos 60 segundos"
            ],
            "explanations": [
                "Otro identificador no evita el límite de solicitudes.",
                "La cabecera indica un retraso, no un número de éxitos.",
                "Los reintentos paralelos pueden empeorar la limitación secundaria.",
                "Retry-After indica el período mínimo de espera en segundos."
            ],
            "concept": "Tiempo de reintento indicado por el servidor",
            "hints": [
                "Interpreta correctamente la unidad de la cabecera.",
                "Reintentar con mayor intensidad no es una estrategia de recuperación."
            ]
        },
        "admin-128": {
            "prompt": "Un cliente REST aún tiene cuota principal, pero se limita tras muchas solicitudes concurrentes. ¿Qué mecanismo puede explicarlo?",
            "choices": [
                "Limitación secundaria de solicitudes",
                "Caducidad del token de acceso",
                "Limitación principal de solicitudes REST",
                "Revocación de autorización SSO"
            ],
            "explanations": [
                "Los límites secundarios pueden aplicarse independientemente de la cuota principal.",
                "La caducidad invalida credenciales, no limita ráfagas de solicitudes.",
                "La cuota principal no se ha agotado en este caso.",
                "La revocación elimina autorización, no limita la concurrencia de solicitudes."
            ],
            "concept": "Límites secundarios de API",
            "hints": [
                "El contador principal no es la única protección.",
                "Considera los patrones de ráfagas y el trabajo concurrente."
            ]
        },
        "admin-129": {
            "prompt": "Una respuesta REST GET incluye un ETag. ¿Qué cabecera de solicitud permite comprobar si esa representación cambió?",
            "choices": [
                "X-Hub-Signature-256",
                "X-GitHub-Event",
                "Retry-After",
                "If-None-Match"
            ],
            "explanations": [
                "X-Hub-Signature-256 valida firmas de cargas de webhook.",
                "X-GitHub-Event identifica un evento de webhook.",
                "Retry-After indica cuándo reintentar en una respuesta.",
                "If-None-Match envía el ETag guardado en una solicitud condicional."
            ],
            "concept": "Solicitudes REST condicionales",
            "hints": [
                "Usa un validador devuelto con la representación del recurso.",
                "Una cabecera de webhook pertenece a otro flujo de transporte."
            ]
        },
        "admin-130": {
            "prompt": "¿Cómo difiere el cómputo del límite REST principal entre el PAT de un usuario y un token de acceso de instalación de GitHub App?",
            "choices": [
                "Ambos comparten siempre la cuota del propietario del repositorio",
                "Cada PAT tiene cuota independiente; todas las instalaciones comparten la del creador",
                "El PAT usa la cuota del usuario; el token de instalación usa la de su instalación",
                "Ambos tienen siempre cuotas idénticas independientemente del plan"
            ],
            "explanations": [
                "Las solicitudes de instalación no consumen la cuota de usuario del propietario del repositorio.",
                "Crear más PAT no genera cuotas de usuario separadas.",
                "Los tokens de usuario y de instalación tienen cómputos de límite principal distintos.",
                "El tipo de autenticación y el contexto de empresa pueden afectar los límites."
            ],
            "concept": "Cómputo de límites de usuario e instalación",
            "hints": [
                "Determina qué identidad es dueña del presupuesto de solicitudes.",
                "No supongas un límite numérico universal para todos los planes."
            ]
        },
        "admin-131": {
            "prompt": "¿Qué política de organización exige aprobación del propietario antes de que OAuth Apps accedan a sus recursos?",
            "choices": [
                "Aprobación de PAT detallados",
                "Restricciones de acceso de OAuth Apps",
                "Restricciones de creación de repositorios",
                "Suspensión de instalación de GitHub App"
            ],
            "explanations": [
                "La aprobación de PAT corresponde a tokens personales, no a OAuth Apps.",
                "Las restricciones OAuth regulan la aprobación del acceso OAuth de terceros.",
                "Restringir la creación de repositorios no aprueba integraciones OAuth.",
                "La suspensión afecta a una instalación de GitHub App, otro modelo de aplicación."
            ],
            "concept": "Aprobación de OAuth Apps de organización",
            "hints": [
                "Elige la política que corresponde al modelo de autorización de la aplicación.",
                "GitHub Apps, OAuth Apps y PAT tienen controles distintos."
            ]
        },
        "admin-132": {
            "prompt": "¿Qué verificación autentica una carga de webhook de GitHub mediante su secreto compartido configurado?",
            "choices": [
                "Comparar la IP del remitente con direcciones permitidas",
                "Validar X-Hub-Signature-256 mediante HMAC-SHA256",
                "Verificar User-Agent frente a GitHub-Hookshot",
                "Comparar X-GitHub-Delivery con identificadores de entregas previas"
            ],
            "explanations": [
                "Comprobar solo la IP no verifica el contenido de la carga.",
                "Un HMAC derivado del secreto verifica autenticidad e integridad.",
                "Una cadena User-Agent se puede falsificar.",
                "Los identificadores detectan duplicados, pero no autentican contenido."
            ],
            "concept": "Autenticidad e integridad de webhooks",
            "hints": [
                "Las cabeceras controladas por el remitente no prueban autenticidad por sí solas.",
                "La verificación debe vincular el secreto con la carga exacta."
            ]
        },
        "admin-133": {
            "prompt": "¿Qué mecanismo de integración envía notificaciones cuando se crean repositorios, en lugar de exigir consultas repetidas a la API?",
            "choices": [
                "Una tarea REST de inventario programada",
                "Una suscripción de webhook de organización",
                "Un bucle GET condicional",
                "Una búsqueda de auditoría guardada"
            ],
            "explanations": [
                "Una tarea de inventario sigue consultando el estado periódicamente.",
                "Los webhooks de organización entregan eventos de repositorio suscritos.",
                "Las solicitudes GET condicionales siguen requiriendo consultas periódicas.",
                "Una búsqueda guardada no entrega notificaciones de eventos."
            ],
            "concept": "Diseño de integraciones por eventos",
            "hints": [
                "Distingue recibir un evento de comprobar periódicamente el estado.",
                "Elige un mecanismo con ámbito de actividad de organización."
            ]
        },
        "admin-134": {
            "prompt": "Un equipo de organización aparece en CODEOWNERS, pero no recibe solicitudes de revisión. ¿Qué condición debe cumplir para ser propietario del código?",
            "choices": [
                "Ser visible y tener acceso explícito de escritura",
                "Ser secreto y tener acceso de lectura",
                "Ser visible y tener acceso de clasificación",
                "Ser secreto y tener miembros con escritura individual"
            ],
            "explanations": [
                "Un equipo propietario debe ser visible y tener acceso propio de escritura.",
                "Un equipo secreto con lectura no cumple los requisitos.",
                "El acceso de clasificación es insuficiente.",
                "El acceso individual no sustituye los requisitos de acceso y visibilidad del equipo."
            ],
            "concept": "Requisitos de equipos en CODEOWNERS",
            "hints": [
                "Evalúa los permisos otorgados al propio equipo.",
                "Los permisos individuales y los del equipo no son intercambiables."
            ]
        },
        "admin-135": {
            "prompt": "¿Qué permite inspeccionar la vista de ruta de una alerta de análisis de código?",
            "choices": [
                "La cadena de actualizaciones de versiones de dependencias",
                "El flujo de datos de origen a destino",
                "El orden de ejecución de tareas del flujo",
                "La lista de archivos cambiados por una solicitud de incorporación"
            ],
            "explanations": [
                "El historial de actualizaciones no es la ruta de flujo de datos de la alerta.",
                "La ruta muestra cómo llegan datos a la operación vulnerable señalada.",
                "El orden de tareas no es el flujo de datos de la aplicación.",
                "Una lista de archivos no muestra el flujo señalado por el código."
            ],
            "concept": "Interpretación de hallazgos de rutas de CodeQL",
            "hints": [
                "Una ruta resaltada describe comportamiento del programa, no historial administrativo.",
                "Sigue la entrada a través de sus transformaciones hasta el destino."
            ]
        },
        "admin-136": {
            "prompt": "¿Qué función intenta crear solicitudes de corrección para dependencias compatibles vulnerables tras habilitar alertas de Dependabot?",
            "choices": [
                "Protección de inserción de secretos",
                "Actualizaciones de seguridad de Dependabot",
                "Revisión de dependencias",
                "Notificaciones de alertas de Dependabot"
            ],
            "explanations": [
                "La protección de inserción bloquea secretos, no actualiza paquetes.",
                "Las actualizaciones de seguridad proponen correcciones cuando es posible generar una actualización compatible.",
                "La revisión evalúa cambios, pero no genera estas solicitudes de corrección.",
                "Las notificaciones informan hallazgos sin abrir por sí mismas solicitudes de corrección."
            ],
            "concept": "Corrección automatizada de vulnerabilidades con Dependabot",
            "hints": [
                "Distingue identificar un paquete vulnerable de proponer su corrección.",
                "No todas las alertas pueden producir una actualización compatible."
            ]
        },
        "admin-137": {
            "prompt": "¿De dónde debe obtener un script un PAT necesario, en vez de guardarlo en un archivo de código versionado?",
            "choices": [
                "Del README de un repositorio privado",
                "De una constante codificada en el script",
                "De un mensaje de commit en una rama protegida",
                "De un almacén de secretos aprobado durante la ejecución"
            ],
            "explanations": [
                "Los lectores de un repositorio privado también pueden ver sus credenciales.",
                "Codificar no equivale a almacenar secretos de forma segura.",
                "La protección de ramas no oculta mensajes de commit.",
                "Un almacén separa la credencial del código versionado."
            ],
            "concept": "Manejo seguro de tokens de acceso personal",
            "hints": [
                "Las restricciones de acceso no hacen seguras las credenciales versionadas.",
                "Codificar cambia la representación, no la confidencialidad."
            ]
        },
        "admin-138": {
            "prompt": "En la interfaz de GitHub Enterprise Cloud en inglés, un propietario de empresa abre Settings > Audit log > Settings. ¿Qué opción añade IP de origen a eventos de auditoría aplicables?",
            "choices": [
                "Require fine-grained PAT approval",
                "Require signed commits",
                "Restrict repository forking",
                "Enable source IP disclosure"
            ],
            "explanations": [
                "La aprobación de PAT no regula la divulgación de IP en auditoría.",
                "Las firmas de commits no configuran campos IP de auditoría.",
                "La política de bifurcación no habilita el registro de IP.",
                "Source IP disclosure controla la inclusión de datos IP en eventos aplicables."
            ],
            "concept": "Divulgación de IP de origen en auditoría",
            "hints": [
                "Una lista de redes permitidas y la divulgación de campos cumplen fines distintos.",
                "No supongas que todos los eventos muestran una dirección."
            ]
        },
        "admin-139": {
            "prompt": "Dependabot abre una solicitud de actualización de seguridad. ¿Qué debe determinar si se fusiona?",
            "choices": [
                "Solo que el autor sea un bot",
                "La ausencia de un título escrito por una persona",
                "Solo el nombre del paquete",
                "Las comprobaciones obligatorias y la política de revisión del repositorio"
            ],
            "explanations": [
                "La autoría del bot no prueba compatibilidad ni cumple todos los requisitos.",
                "La autoría del título no establece corrección.",
                "El nombre del paquete no establece la seguridad de la actualización.",
                "Las actualizaciones deben superar las comprobaciones y revisiones aplicables."
            ],
            "concept": "Revisión de correcciones automatizadas de dependencias",
            "hints": [
                "La automatización propone un cambio; no demuestra todos sus efectos.",
                "Aplica los controles de integración pertinentes a los cambios de dependencias."
            ]
        },
        "admin-140": {
            "prompt": "¿Qué aporta habilitar herramientas de seguridad de repositorio al programa de cumplimiento de una empresa?",
            "choices": [
                "Certificación frente a toda normativa",
                "Controles y hallazgos que aún requieren evaluación de riesgo",
                "Prueba de ausencia de todas las vulnerabilidades",
                "Sustitución de respuesta a incidentes y revisiones de acceso"
            ],
            "explanations": [
                "Habilitar funciones no equivale a certificación normativa universal.",
                "Las herramientas aportan evidencias y protecciones que requieren interpretación y respuesta.",
                "El análisis no demuestra ausencia de todas las vulnerabilidades.",
                "La respuesta a incidentes y el gobierno de acceso siguen siendo necesarios."
            ],
            "concept": "Herramientas de seguridad y riesgo residual de cumplimiento",
            "hints": [
                "Distingue un control técnico de una determinación de cumplimiento.",
                "Considera qué responsabilidades permanecen tras habilitar la detección."
            ]
        },
        "admin-141": {
            "prompt": "En GitHub Enterprise Cloud, ¿quién puede flexibilizar una restricción de Actions impuesta por una política empresarial?",
            "choices": [
                "Un administrador del repositorio",
                "Un propietario de la empresa",
                "Un miembro de la organización",
                "Un responsable del flujo de trabajo"
            ],
            "explanations": [
                "La configuración del repositorio no puede anularla.",
                "Los propietarios controlan las políticas empresariales.",
                "Ser miembro no permite controlar políticas.",
                "Editar YAML no flexibiliza la política empresarial."
            ],
            "concept": "Herencia de políticas de Actions",
            "hints": [
                "Identifica el ámbito que impone la restricción.",
                "Distingue editar flujos de administrar políticas."
            ]
        },
        "admin-142": {
            "prompt": "Una empresa permite solo acciones definidas en sus propios repositorios. ¿Por qué se bloquea actions/checkout?",
            "choices": [
                "Falta su etiqueta de ejecutor",
                "Primero debe bifurcarse su repositorio",
                "Las acciones de GitHub quedan fuera de esa política",
                "Las acciones públicas necesitan un secreto de entorno"
            ],
            "explanations": [
                "Las etiquetas seleccionan ejecutores, no acciones permitidas.",
                "Bifurcar no es un requisito general.",
                "El permiso empresarial excluye las organizaciones externas de GitHub.",
                "Un secreto no evita la política de acciones."
            ],
            "concept": "Políticas de acciones solo empresariales",
            "hints": [
                "Considera quién posee el repositorio de la acción.",
                "Distingue confianza en el editor de ámbito permitido."
            ]
        },
        "admin-143": {
            "prompt": "Un propietario empresarial quiere habilitar Actions solo en dos organizaciones. ¿Qué control corresponde a ese ámbito?",
            "choices": [
                "Habilitar Actions para organizaciones específicas",
                "Permitir solo acciones y flujos reutilizables de la empresa",
                "Deshabilitar la creación de ejecutores autohospedados de repositorio",
                "Exigir SHA completos de commits para acciones"
            ],
            "explanations": [
                "La política empresarial permite seleccionar organizaciones.",
                "Restringir dependencias no selecciona organizaciones que pueden usar Actions.",
                "La política de registro no deshabilita Actions.",
                "La fijación controla dependencias, no disponibilidad organizativa."
            ],
            "concept": "Disponibilidad empresarial de Actions",
            "hints": [
                "Relaciona el control con el límite organizativo.",
                "Disponibilidad y asignación de trabajos son distintas."
            ]
        },
        "admin-144": {
            "prompt": "En una lista de permitidos de Actions, ¿qué patrón permite todas las acciones y flujos reutilizables de octo-tools?",
            "choices": [
                "octo-tools",
                "@octo-tools",
                "*/octo-tools",
                "octo-tools/*"
            ],
            "explanations": [
                "El propietario solo no es el patrón documentado.",
                "El prefijo @ no selecciona un propietario.",
                "Esto selecciona un nombre de repositorio bajo cualquier propietario.",
                "El comodín abarca los repositorios de ese propietario."
            ],
            "concept": "Sintaxis de la lista de acciones permitidas",
            "hints": [
                "Identifica las posiciones de propietario y repositorio.",
                "Un comodín amplía una parte de la referencia."
            ]
        },
        "admin-145": {
            "prompt": "Sin un archivo de bloqueo de dependencias, ¿qué referencia de acción tiene el formato exigido por una política de fijación al SHA completo?",
            "choices": [
                "octo-tools/build@v2",
                "octo-tools/build@0123456789abcdef0123456789abcdef01234567",
                "octo-tools/build@main",
                "octo-tools/build@0123456"
            ],
            "explanations": [
                "Una etiqueta de versión es mutable.",
                "Tiene el formato completo de commit de 40 caracteres.",
                "Una rama puede cambiar.",
                "Un SHA abreviado no es completo."
            ],
            "concept": "Referencias de acciones con SHA completo",
            "hints": [
                "Distingue identidad del commit de referencias con nombre.",
                "La política especifica la longitud de referencia."
            ]
        },
        "admin-146": {
            "prompt": "¿Qué dependencia puede seguir usando una etiqueta con la opción empresarial 'Require actions to be pinned to a full-length commit SHA'?",
            "choices": [
                "Una acción creada por GitHub",
                "Una acción JavaScript interna obtenida remotamente",
                "Un flujo de trabajo reutilizable",
                "Una acción de Marketplace de creador verificado"
            ],
            "explanations": [
                "Las acciones de GitHub están incluidas.",
                "Las acciones internas referenciadas remotamente están incluidas.",
                "Esta política permite etiquetas para flujos reutilizables.",
                "La verificación no exime a una acción."
            ],
            "concept": "Alcance de la política de fijación",
            "hints": [
                "Acciones y flujos son tipos de dependencia distintos.",
                "La identidad del editor no define la excepción."
            ]
        },
        "admin-147": {
            "prompt": "¿Qué referencia queda fuera de las restricciones empresariales de la lista de acciones obtenidas remotamente?",
            "choices": [
                "./.github/actions/check",
                "octo-tools/check@v1",
                "actions/checkout@v6",
                "partner/check@main"
            ],
            "explanations": [
                "Esta política no restringe las acciones del sistema de archivos local.",
                "Esta referencia obtiene una acción remota.",
                "Ser de GitHub no la convierte en local.",
                "Esta también obtiene una acción remota."
            ],
            "concept": "Límites de políticas para acciones locales",
            "hints": [
                "Examina desde dónde se carga el código.",
                "Propiedad del repositorio y ubicación local son distintas."
            ]
        },
        "admin-148": {
            "prompt": "¿Dónde debe almacenarse un flujo reutilizable dentro de su repositorio?",
            "choices": [
                ".github/actions/build.yml",
                "workflow-templates/build.yml",
                ".github/workflows/shared/build.yml",
                ".github/workflows/build.yml"
            ],
            "explanations": [
                "No es el directorio de flujos.",
                "Es un directorio de plantillas, no de flujos ejecutables.",
                "No se admiten subdirectorios de flujos.",
                "Los flujos reutilizables van directamente en .github/workflows."
            ],
            "concept": "Ubicación de flujos reutilizables",
            "hints": [
                "Un flujo reutilizable sigue siendo un flujo.",
                "Comprueba si se permiten directorios anidados."
            ]
        },
        "admin-149": {
            "prompt": "¿Qué desencadenador permite que otros flujos llamen a un flujo?",
            "choices": [
                "workflow_call",
                "workflow_dispatch",
                "workflow_run",
                "repository_dispatch"
            ],
            "explanations": [
                "Declara la interfaz del flujo reutilizable.",
                "Permite iniciarlo manualmente o mediante API.",
                "Reacciona a la actividad de ejecución de otro flujo.",
                "Recibe un evento personalizado del repositorio."
            ],
            "concept": "Desencadenador de flujos reutilizables",
            "hints": [
                "Llamar a un componente difiere de iniciar una ejecución.",
                "Busca una interfaz explícita de entradas."
            ]
        },
        "admin-150": {
            "prompt": "¿En qué ubicación YAML referencia el flujo llamador un flujo reutilizable?",
            "choices": [
                "jobs.build.steps[0].run",
                "on.workflow_call",
                "jobs.build.uses",
                "defaults.run"
            ],
            "explanations": [
                "run ejecuta comandos de shell en un paso.",
                "Declara el desencadenador del flujo llamado.",
                "Los flujos reutilizables se llaman a nivel de trabajo.",
                "defaults configura valores predeterminados del shell."
            ],
            "concept": "Llamadas a flujos a nivel de trabajo",
            "hints": [
                "Distingue un trabajo de sus pasos.",
                "El llamador necesita una referencia al componente."
            ]
        },
        "admin-151": {
            "prompt": "Un workflow reutilizable declara enabled con type: boolean. ¿Qué entrada de with del llamador pasa el booleano false en lugar de una cadena, número o lista?",
            "choices": [
                "enabled: [false]",
                "enabled: false",
                "enabled: \"false\"",
                "enabled: 0"
            ],
            "explanations": [
                "Una lista no es un valor de entrada booleano.",
                "El valor false sin comillas tiene el tipo booleano requerido.",
                "Las comillas convierten false en una cadena, no en el booleano declarado.",
                "El cero numérico no es el tipo booleano declarado."
            ],
            "concept": "Los valores de entrada de workflows reutilizables deben respetar sus tipos declarados.",
            "hints": [
                "Lee el tipo declarado antes de evaluar el valor.",
                "Considera cómo las comillas y las colecciones YAML afectan al tipo."
            ]
        },
        "admin-152": {
            "prompt": "Una organización publica ci.yml como plantilla de flujo. ¿Qué repositorio y ruta son correctos?",
            "choices": [
                "Repository .github; .github/workflows/ci.yml",
                "Repository templates; .github/workflows/ci.yml",
                "Repository .github; .github/workflow-templates/ci.yml",
                "Repository .github; workflow-templates/ci.yml"
            ],
            "explanations": [
                "Almacena un flujo, no una plantilla organizativa.",
                "El repositorio de plantillas debe llamarse .github.",
                "El directorio .github adicional es incorrecto.",
                "Las plantillas usan workflow-templates en la raíz del repositorio .github."
            ],
            "concept": "Ubicación de plantillas organizativas",
            "hints": [
                "Distingue el nombre del repositorio de un directorio.",
                "Las plantillas y los flujos ejecutables tienen ubicaciones distintas."
            ]
        },
        "admin-153": {
            "prompt": "¿Qué archivo proporciona metadatos de presentación para la plantilla organizativa ci.yml?",
            "choices": [
                "ci.properties.json",
                "ci.metadata.yml",
                "ci.action.yml",
                "ci.properties.yml"
            ],
            "explanations": [
                "El nombre base va seguido de .properties.json.",
                "No es el nombre de metadatos documentado.",
                "Los metadatos de acciones son otro mecanismo.",
                "Los metadatos de plantillas usan JSON, no este YAML."
            ],
            "concept": "Metadatos de plantillas de flujos",
            "hints": [
                "Mantén el nombre base de la plantilla.",
                "Los metadatos de presentación se separan del YAML del flujo."
            ]
        },
        "admin-154": {
            "prompt": "¿Qué marcador permite que una plantilla organizativa use la rama predeterminada de cada repositorio consumidor?",
            "choices": [
                "${{ github.template_branch }}",
                "$main-branch",
                "$default-branch",
                "${{ defaults.branch }}"
            ],
            "explanations": [
                "No es un contexto de plantilla admitido.",
                "No es el marcador documentado.",
                "GitHub lo sustituye al crear el flujo.",
                "No es una expresión de rama admitida."
            ],
            "concept": "Sustitución de ramas en plantillas",
            "hints": [
                "El valor se sustituye al crear el flujo.",
                "No confundas marcadores de plantilla con expresiones de ejecución."
            ]
        },
        "admin-155": {
            "prompt": "El flujo A llama a B con contents: read. ¿Puede B obtener contents: write declarándolo localmente?",
            "choices": [
                "Sí, si B es privado",
                "No, un flujo llamado no puede elevar permisos del token",
                "Sí, si B usa un SHA completo",
                "No, los flujos reutilizables no pueden usar GITHUB_TOKEN"
            ],
            "explanations": [
                "La visibilidad no eleva permisos.",
                "Los permisos del llamador son el límite superior.",
                "Fijar un commit no concede privilegios.",
                "Los flujos reutilizables pueden usar GITHUB_TOKEN."
            ],
            "concept": "Límites de permisos en flujos reutilizables",
            "hints": [
                "Sigue los permisos por la cadena de llamadas.",
                "Identidad del código y autorización son distintas."
            ]
        },
        "admin-156": {
            "prompt": "A pasa un secreto al flujo reutilizable B, que llama a C. ¿Qué debe hacer B para que C lo reciba?",
            "choices": [
                "Pasarlo a C explícitamente o mediante herencia permitida",
                "Declararlo solo como variable de entorno de flujo en B",
                "Conceder contents: read a C sin asignarle secretos",
                "Confiar en secrets: inherit de A para saltar el límite entre B y C"
            ],
            "explanations": [
                "Los secretos solo pasan entre llamadas directas.",
                "Un valor de entorno local no es una interfaz para pasar secretos.",
                "Los permisos de contenido no pasan valores secretos.",
                "La herencia se aplica a llamadas directas, no a todos los descendientes."
            ],
            "concept": "Secretos en llamadas anidadas",
            "hints": [
                "Sigue cada enlace de la cadena de llamadas.",
                "Compartir ubicación no implica compartir credenciales."
            ]
        },
        "admin-157": {
            "prompt": "Un repositorio privado no puede acceder a un flujo reutilizable permitido de otro repositorio privado de la organización. ¿Qué configuración debe revisar su administrador?",
            "choices": [
                "La política de acceso a repositorios del grupo de ejecutores",
                "La protección del entorno de despliegue del trabajo llamador",
                "Las reglas de protección de ramas del repositorio llamado",
                "La política de acceso de Actions del repositorio llamado"
            ],
            "explanations": [
                "Acceder al ejecutor no concede acceso al componente privado.",
                "Aprobar el entorno no concede acceso al repositorio llamado.",
                "La protección de ramas controla cambios, no compartir componentes.",
                "Los componentes privados necesitan una política explícita para compartirlos."
            ],
            "concept": "Compartir componentes privados",
            "hints": [
                "Revisa el permiso para obtener el componente.",
                "Permitir una dependencia y compartir su repositorio son distintos."
            ]
        },
        "admin-158": {
            "prompt": "Un trabajo solo obtiene archivos del repositorio. ¿Qué permiso de GITHUB_TOKEN corresponde a esa operación?",
            "choices": [
                "contents: write",
                "packages: write",
                "contents: read",
                "issues: read"
            ],
            "explanations": [
                "Obtener archivos no requiere escribir en el repositorio.",
                "Escribir paquetes no autoriza obtener archivos.",
                "Leer contenido permite obtener los archivos.",
                "Acceder a incidencias no permite leer archivos."
            ],
            "concept": "Tokens de trabajo con privilegios mínimos",
            "hints": [
                "Identifica el recurso que se lee.",
                "Concede solo lo necesario para la operación."
            ]
        },
        "admin-159": {
            "prompt": "¿Qué método evita guardar una clave de acceso permanente de nube como secreto de Actions?",
            "choices": [
                "Una variable de repositorio que contenga la clave",
                "Federación OIDC con el proveedor de nube",
                "Una clave incluida en una etiqueta de ejecutor",
                "Un archivo de credenciales en caché entre ejecuciones"
            ],
            "explanations": [
                "Las variables no eliminan credenciales permanentes.",
                "El proveedor emite credenciales temporales tras validar la identidad.",
                "Las etiquetas no almacenan credenciales.",
                "La caché conserva y expone las credenciales."
            ],
            "concept": "Autenticación federada de flujos",
            "hints": [
                "Considera duración y emisión de credenciales.",
                "Verificar identidad puede sustituir una clave almacenada."
            ]
        },
        "admin-160": {
            "prompt": "¿Qué permiso del trabajo permite solicitar un token OIDC de GitHub para una bóveda externa?",
            "choices": [
                "id-token: write",
                "contents: write",
                "secrets: read",
                "deployments: write"
            ],
            "explanations": [
                "Permite obtener un token OIDC, no escribir recursos de nube.",
                "Escribir contenido no habilita OIDC.",
                "No es una clave de permiso de GITHUB_TOKEN.",
                "Escribir despliegues no habilita OIDC."
            ],
            "concept": "Permiso para solicitar OIDC",
            "hints": [
                "Distingue emitir tokens de autorizar recursos.",
                "La bóveda evalúa su propia política de confianza."
            ]
        },
        "admin-161": {
            "prompt": "¿Qué debe restringir un administrador de Vault al confiar en OIDC de GitHub Actions?",
            "choices": [
                "Solo el nombre visible del flujo",
                "Solo el nombre temporal del host del ejecutor",
                "Solo el orden de los pasos",
                "Las declaraciones de identidad aceptadas y las rutas de secretos legibles"
            ],
            "explanations": [
                "Un nombre visible no es un límite de confianza sólido.",
                "Los nombres temporales no vinculan la identidad del flujo.",
                "El orden no autoriza acceso a la bóveda.",
                "Las declaraciones vinculan identidad; las políticas limitan los secretos."
            ],
            "concept": "Confianza y autorización en Vault",
            "hints": [
                "Autenticación y autorización necesitan límites distintos.",
                "Vincula el acceso a la carga de trabajo prevista."
            ]
        },
        "admin-162": {
            "prompt": "Un secreto de organización debe estar disponible solo para tres repositorios privados en GitHub Enterprise Cloud. ¿Qué política corresponde?",
            "choices": [
                "Todos los repositorios",
                "Repositorios privados",
                "Repositorios seleccionados",
                "Repositorios con etiquetas de ejecutor coincidentes"
            ],
            "explanations": [
                "También permite acceder a otros repositorios.",
                "Permite acceder a todos los repositorios privados aptos.",
                "La selección explícita limita el acceso.",
                "Las etiquetas no delimitan secretos de organización."
            ],
            "concept": "Acceso a secretos de organización",
            "hints": [
                "Delimita credenciales independientemente de los ejecutores.",
                "Elige el menor conjunto de repositorios."
            ]
        },
        "admin-163": {
            "prompt": "DEPLOY_KEY existe en la organización, el repositorio y el entorno production. ¿Qué valor recibe un trabajo que referencia production?",
            "choices": [
                "El valor de la organización",
                "El valor del entorno",
                "El valor del repositorio",
                "El valor creado más recientemente"
            ],
            "explanations": [
                "Un ámbito inferior aplicable lo sustituye.",
                "El entorno tiene prioridad sobre repositorio y organización.",
                "El entorno sustituye este valor.",
                "El orden de creación no determina la prioridad."
            ],
            "concept": "Prioridad de secretos",
            "hints": [
                "Identifica los ámbitos aplicables al trabajo.",
                "La prioridad depende de la estructura, no de la fecha."
            ]
        },
        "admin-164": {
            "prompt": "En un repositorio privado de GitHub Enterprise Cloud, un trabajo de producción debe esperar aprobación humana antes de recibir secretos de despliegue. ¿Qué mecanismo corresponde?",
            "choices": [
                "Secretos de entorno con revisores obligatorios",
                "Secretos de repositorio con nombres más largos",
                "Secretos de organización limitados a repositorios privados",
                "Variables enmascaradas en una plantilla de flujo"
            ],
            "explanations": [
                "La protección del entorno puede condicionar el acceso a sus secretos.",
                "Los nombres no crean una aprobación.",
                "La visibilidad no da aprobación por trabajo.",
                "Enmascarar no controla la aprobación del trabajo."
            ],
            "concept": "Control de entrega de credenciales",
            "hints": [
                "Elige un ámbito con protección de despliegue.",
                "Almacenar y entregar credenciales son controles distintos."
            ]
        },
        "admin-165": {
            "prompt": "Con la configuración predeterminada de bifurcaciones, ¿por qué un flujo pull_request desde una bifurcación pública no recibe el secreto de despliegue del repositorio base?",
            "choices": [
                "Los secretos exigen un ejecutor de mayor tamaño",
                "El autor debe cambiar el nombre del secreto",
                "Los repositorios públicos no almacenan secretos",
                "Las solicitudes desde bifurcaciones no reciben estos secretos por defecto"
            ],
            "explanations": [
                "El tamaño del ejecutor no concede secretos.",
                "Cambiar nombres no cambia el límite de confianza.",
                "Los repositorios públicos pueden guardar secretos de Actions.",
                "No entregar secretos protege frente a código no confiable."
            ],
            "concept": "Límites de secretos en bifurcaciones",
            "hints": [
                "Considera el origen del código enviado.",
                "Iniciar una ejecución no implica acceso a credenciales."
            ]
        },
        "admin-166": {
            "prompt": "¿Qué devuelve una expresión que referencia un secreto de Actions no disponible?",
            "choices": [
                "El nombre del secreto",
                "El token del propietario de la organización",
                "Una cadena vacía",
                "El valor de la ejecución anterior"
            ],
            "explanations": [
                "GitHub no sustituye el nombre.",
                "No se usa el token del propietario como alternativa.",
                "Un secreto no definido devuelve una cadena vacía.",
                "Los valores anteriores no son una alternativa."
            ],
            "concept": "Comportamiento de secretos no disponibles",
            "hints": [
                "Las credenciales ausentes requieren validación explícita.",
                "No supongas valores alternativos automáticos."
            ]
        },
        "admin-167": {
            "prompt": "Un flujo transforma un secreto en otro valor sensible. ¿Qué debe hacer antes de que los registros puedan exponerlo?",
            "choices": [
                "Confiar en el enmascaramiento automático del secreto original",
                "Registrar el valor transformado para enmascararlo",
                "Enmascarar solo tras aparecer el valor transformado en el registro",
                "Confiar en desactivar depuración para ocultar toda salida sensible"
            ],
            "explanations": [
                "No se garantiza ocultar valores transformados.",
                "Los valores derivados requieren su propio registro de enmascaramiento.",
                "El enmascaramiento debe preceder a una posible divulgación.",
                "Los registros normales también pueden mostrar datos sensibles."
            ],
            "concept": "Límites del enmascaramiento automático",
            "hints": [
                "Las transformaciones cambian el texto buscado al ocultar.",
                "Prevén la exposición sin probar con secretos reales."
            ]
        },
        "admin-168": {
            "prompt": "Un registro de Actions contiene una credencial de nube sin ocultar. ¿Qué respuesta aborda exposición y acceso posterior?",
            "choices": [
                "Eliminar el registro expuesto y rotar la credencial",
                "Renombrar el secreto y conservar la misma credencial",
                "Repetir el trabajo sin registros de depuración",
                "Reducir la retención de artefactos sin cambiar la credencial"
            ],
            "explanations": [
                "Eliminar limita exposición; rotar invalida la credencial filtrada.",
                "Renombrar no invalida una credencial.",
                "Repetir no revoca la credencial expuesta.",
                "La retención no revoca credenciales ni elimina este registro."
            ],
            "concept": "Respuesta a exposición de credenciales",
            "hints": [
                "Considera quién podría tener ya el valor divulgado.",
                "¿Cuánto tiempo podría seguir siendo utilizable?"
            ]
        },
        "admin-169": {
            "prompt": "Con GitHub CLI en un repositorio, ¿qué comando crea o actualiza el secreto API_KEY del entorno production?",
            "choices": [
                "gh variable set API_KEY --env production",
                "gh secret set API_KEY --org production",
                "gh secret set API_KEY --repo production",
                "gh secret set API_KEY --env production"
            ],
            "explanations": [
                "Guarda una variable, no un secreto cifrado.",
                "Apunta a una organización llamada production.",
                "Apunta a un repositorio, no a un entorno.",
                "La opción --env selecciona el ámbito de entorno."
            ],
            "concept": "Selección de ámbito de secretos con CLI",
            "hints": [
                "Distingue variable de secreto.",
                "El destino está dentro de un repositorio."
            ]
        },
        "admin-170": {
            "prompt": "¿Qué tipo de ejecutor da al administrador control directo del hardware físico y del software del sistema operativo instalado?",
            "choices": [
                "Un ejecutor estándar hospedado por GitHub",
                "Un ejecutor de mayor tamaño hospedado por GitHub",
                "Un ejecutor autohospedado",
                "Un ejecutor hospedado por GitHub con imagen personalizada"
            ],
            "explanations": [
                "GitHub administra la máquina hospedada.",
                "Más recursos hospedados no transfieren control del hardware.",
                "El cliente despliega y administra la máquina.",
                "Una imagen personalizada no transfiere administración del hardware físico."
            ],
            "concept": "Responsabilidades según alojamiento del ejecutor",
            "hints": [
                "Distingue propiedad de la máquina de tamaño de recursos.",
                "El control implica responsabilidades de mantenimiento."
            ]
        },
        "admin-171": {
            "prompt": "La aplicación de un ejecutor autohospedado se actualiza automáticamente. ¿Quién sigue siendo responsable de aplicar parches a su sistema operativo?",
            "choices": [
                "El equipo de imágenes hospedadas de GitHub",
                "El administrador de la máquina autohospedada",
                "El responsable de la acción de checkout",
                "El servicio de actualización de dependencias del repositorio"
            ],
            "explanations": [
                "El equipo de imágenes no administra esta máquina.",
                "Actualizar la aplicación no aplica parches al sistema operativo.",
                "El responsable de una acción no administra el host.",
                "Las actualizaciones de dependencias no administran el sistema operativo."
            ],
            "concept": "Actualizaciones de aplicación y sistema operativo",
            "hints": [
                "Identifica qué componente se actualiza.",
                "La propiedad del alojamiento determina el mantenimiento del sistema."
            ]
        },
        "admin-172": {
            "prompt": "Un propietario de organización necesita restringir un conjunto de ejecutores autohospedados a repositorios seleccionados. ¿Qué función proporciona ese límite?",
            "choices": [
                "Grupos de ejecutores",
                "Nombres visibles de ejecutores",
                "Nombres de ejecuciones de flujos",
                "Nombres de salidas de trabajos"
            ],
            "explanations": [
                "Los grupos tienen políticas de acceso por repositorio.",
                "Los nombres identifican ejecutores, pero no conceden acceso.",
                "Los nombres de ejecución son metadatos descriptivos.",
                "Las salidas transmiten datos, no controlan el acceso."
            ],
            "concept": "Autorización mediante grupos de ejecutores",
            "hints": [
                "Asignación y autorización son cuestiones distintas.",
                "Busca una colección de ejecutores con políticas."
            ]
        },
        "admin-173": {
            "prompt": "¿Qué clave del flujo selecciona un ejecutor mediante etiquetas como self-hosted y linux?",
            "choices": [
                "needs",
                "environment",
                "permissions",
                "runs-on"
            ],
            "explanations": [
                "needs declara dependencias entre trabajos.",
                "environment selecciona un entorno de despliegue.",
                "permissions delimita el token del trabajo.",
                "runs-on selecciona las capacidades del ejecutor."
            ],
            "concept": "Selección mediante etiquetas de ejecutor",
            "hints": [
                "Identifica la plataforma de ejecución del trabajo.",
                "No confundas entorno de despliegue con selección de máquina."
            ]
        },
        "admin-174": {
            "prompt": "Un trabajo sin ARC especifica runs-on: [self-hosted, linux, gpu]. ¿Qué ejecutor coincide?",
            "choices": [
                "Cualquiera con al menos una etiqueta indicada",
                "Cualquier ejecutor Linux, sin importar sus otras etiquetas",
                "Un ejecutor accesible con las tres etiquetas",
                "Cualquier ejecutor de un grupo llamado gpu"
            ],
            "explanations": [
                "La lista no es una condición OR.",
                "Las demás etiquetas también deben coincidir.",
                "Deben coincidir todas las etiquetas en un ejecutor accesible.",
                "El nombre del grupo no sustituye las etiquetas."
            ],
            "concept": "Combinación de etiquetas de ejecutor",
            "hints": [
                "Determina si las restricciones son acumulativas.",
                "El acceso al grupo sigue siendo necesario."
            ]
        },
        "admin-175": {
            "prompt": "Un ejecutor autohospedado está registrado directamente en el repositorio alpha. ¿Qué repositorios pueden asignarle trabajos mediante ese registro?",
            "choices": [
                "Todos los de la organización de alpha",
                "Solo el repositorio alpha",
                "Todos los privados de la empresa",
                "Cualquiera que comparta las etiquetas de alpha"
            ],
            "explanations": [
                "Un registro de repositorio no abarca la organización.",
                "Los ejecutores de repositorio se dedican a ese repositorio.",
                "Compartir en la empresa exige otro ámbito de registro.",
                "Compartir etiquetas no concede acceso entre repositorios."
            ],
            "concept": "Ámbito de registro de ejecutores",
            "hints": [
                "Identifica dónde se registró el ejecutor.",
                "El ámbito limita el acceso antes de seleccionar por etiquetas."
            ]
        },
        "admin-176": {
            "prompt": "¿Qué ocurre al registrar un ejecutor en una organización sin especificar un grupo?",
            "choices": [
                "Entra en el grupo de ejecutores predeterminado",
                "Crea un grupo con el nombre de su host",
                "Queda disponible para todas las organizaciones empresariales",
                "El registro falla hasta que exista un grupo personalizado"
            ],
            "explanations": [
                "Se utiliza el grupo predeterminado de la organización.",
                "Los nombres de host no crean grupos automáticamente.",
                "El registro organizativo no concede acceso empresarial completo.",
                "No se necesita un grupo personalizado."
            ],
            "concept": "Ubicación predeterminada de ejecutores",
            "hints": [
                "Considera la estructura de grupos existente.",
                "Los valores de registro no amplían el ámbito organizativo."
            ]
        },
        "admin-177": {
            "prompt": "¿Qué configuración autohospedada admite acciones de contenedores Docker y contenedores de servicio?",
            "choices": [
                "Windows con Docker instalado",
                "macOS con Docker instalado",
                "Linux con Docker instalado",
                "Linux con solo un cliente Git instalado"
            ],
            "explanations": [
                "GitHub exige Linux para estos trabajos.",
                "macOS no cumple este requisito de ejecutor.",
                "Estos flujos necesitan Linux y Docker instalado.",
                "Un cliente Git no proporciona el runtime de contenedores."
            ],
            "concept": "Requisitos del host para contenedores",
            "hints": [
                "La plataforma impone requisitos al host.",
                "Se necesitan runtime de contenedores y sistema compatible."
            ]
        },
        "admin-178": {
            "prompt": "¿Cuántos trabajos asigna GitHub a un ejecutor autohospedado registrado con --ephemeral?",
            "choices": [
                "Tantos como CPU tenga",
                "Todos los de una ejecución de flujo",
                "Trabajos hasta una limpieza nocturna",
                "Un trabajo antes de darlo de baja"
            ],
            "explanations": [
                "La CPU no determina la duración efímera.",
                "Una ejecución puede contener varios trabajos.",
                "La baja no se programa cada noche.",
                "GitHub da de baja el ejecutor tras procesar un trabajo."
            ],
            "concept": "Duración de ejecutores efímeros",
            "hints": [
                "La unidad de aislamiento es el trabajo, no el flujo.",
                "El ciclo de registro difiere de eliminar la máquina."
            ]
        },
        "admin-179": {
            "prompt": "Tras darse de baja un ejecutor efímero autohospedado, ¿qué evita que su espacio de trabajo contamine la siguiente máquina?",
            "choices": [
                "Automatización que destruya o borre el host",
                "Cambiar el nombre del registro del ejecutor",
                "Reutilizar el disco con otra etiqueta de ejecutor",
                "Mover el ejecutor al grupo predeterminado"
            ],
            "explanations": [
                "Limpiar el host sigue siendo responsabilidad del operador.",
                "Un nombre nuevo no borra el disco.",
                "Cambiar etiquetas no limpia el disco.",
                "El grupo no elimina datos locales."
            ],
            "concept": "Limpieza de infraestructura efímera",
            "hints": [
                "La baja es una operación del lado de GitHub.",
                "Considera el estado que queda en el host."
            ]
        },
        "admin-180": {
            "prompt": "¿Qué práctica conserva evidencia de diagnóstico al destruir hosts de ejecutores efímeros?",
            "choices": [
                "Guardar registros solo en el directorio del ejecutor",
                "Aumentar el número visible de ejecución",
                "Enviar registros del ejecutor a almacenamiento externo",
                "Guardar registros solo en el historial del shell del host destruido"
            ],
            "explanations": [
                "Destruir el host elimina esos registros locales.",
                "Los números de ejecución no conservan registros de aplicación.",
                "El almacenamiento externo sobrevive a la destrucción del host.",
                "El historial local no es duradero ni suficiente."
            ],
            "concept": "Observabilidad de ejecutores efímeros",
            "hints": [
                "La evidencia debe sobrevivir al recurso.",
                "Los registros del flujo y de la aplicación son distintos."
            ]
        },
        "admin-181": {
            "prompt": "Una imagen de ejecutor se registra con --disableupdate. ¿Qué obligación de mantenimiento permanece?",
            "choices": [
                "Actualizar solo cuando los trabajos usen funciones nuevas",
                "Mantener versiones dentro de los requisitos de actualización de GitHub",
                "Mantener una versión durante todo el ciclo de vida del sistema operativo",
                "Aplicar parches al sistema sin sustituir el binario del ejecutor"
            ],
            "explanations": [
                "Los requisitos de actualización también afectan al uso de funciones existentes.",
                "Desactivar actualizaciones automáticas traslada su programación al operador.",
                "El ciclo del sistema no sustituye los requisitos del ejecutor.",
                "Los parches del sistema no sustituyen actualizar la aplicación."
            ],
            "concept": "Versiones de ejecutor mantenidas manualmente",
            "hints": [
                "Desactivar automatización no elimina la obligación.",
                "Distingue actualizaciones de aplicación y host."
            ]
        },
        "admin-182": {
            "prompt": "Un ejecutor autohospedado aparece Offline. ¿Qué condición puede explicar directamente ese estado?",
            "choices": [
                "No tiene trabajos pendientes",
                "Su último trabajo terminó con una prueba fallida",
                "Su grupo contiene un solo repositorio",
                "Su aplicación no puede comunicarse con GitHub"
            ],
            "explanations": [
                "Un ejecutor conectado sin trabajo está Idle.",
                "Fallar una prueba no implica desconexión.",
                "El tamaño del grupo no determina conectividad.",
                "Offline indica que el ejecutor no está conectado."
            ],
            "concept": "Interpretación del estado del ejecutor",
            "hints": [
                "El estado describe conexión o ejecución.",
                "Distingue trabajo fallido de ejecutor desconectado."
            ]
        },
        "admin-183": {
            "prompt": "En un ejecutor Linux autohospedado, ¿qué comando comprueba la conexión a servicios GitHub necesarios con un token de diagnóstico autorizado?",
            "choices": [
                "./config.sh --check --url URL --pat TOKEN",
                "./config.sh --ephemeral --url URL --token TOKEN",
                "./run.sh --labels network-check",
                "./config.sh --remove --token TOKEN"
            ],
            "explanations": [
                "El modo --check prueba la conexión a servicios necesarios.",
                "Esto registra un ejecutor efímero.",
                "No es la comprobación de conexión documentada.",
                "Elimina un registro en lugar de comprobar conexión."
            ],
            "concept": "Diagnóstico de conectividad del ejecutor",
            "hints": [
                "Usa el modo de diagnóstico del ejecutor.",
                "Los tokens de registro y de diagnóstico tienen fines distintos."
            ]
        },
        "admin-184": {
            "prompt": "¿Qué archivos contienen los registros detallados por trabajo en una instalación de ejecutor autohospedado?",
            "choices": [
                "_diag/Runner_*.log",
                ".git/logs/HEAD",
                "_diag/Worker_*.log",
                ".github/workflows/*.yml"
            ],
            "explanations": [
                "Los archivos Runner_ describen la aplicación del ejecutor.",
                "Los reflogs de Git no son registros de ejecución.",
                "Los archivos Worker_ detallan cada trabajo procesado.",
                "Son definiciones de flujos, no registros de ejecución."
            ],
            "concept": "Registros de aplicación y de trabajo",
            "hints": [
                "Identifica si el problema afecta al proceso o al trabajo.",
                "El directorio de diagnóstico contiene distintos tipos de registro."
            ]
        },
        "admin-185": {
            "prompt": "Un trabajo sigue en cola aunque varios ejecutores autohospedados están Idle. ¿Qué debe verificar primero el administrador?",
            "choices": [
                "Si caducaron descargas de artefactos de trabajos terminados",
                "Si coinciden acceso, etiquetas y grupo del ejecutor",
                "Si los pasos necesitan versiones nuevas de dependencias de compilación",
                "Si la compilación necesita más memoria una vez iniciada"
            ],
            "explanations": [
                "La caducidad de artefactos no explica un trabajo sin asignar.",
                "Los ejecutores libres deben cumplir restricciones de asignación y acceso.",
                "Las dependencias importan tras recibir el trabajo.",
                "La memoria durante ejecución no explica esta incompatibilidad."
            ],
            "concept": "Diagnóstico de incompatibilidades en la cola",
            "hints": [
                "Capacidad libre no siempre es capacidad apta.",
                "Compara requisitos del trabajo con acceso a ejecutores."
            ]
        },
        "admin-186": {
            "prompt": "¿Qué conexión necesita un ejecutor autohospedado para recibir trabajos de GitHub Actions?",
            "choices": [
                "HTTPS saliente a los servicios GitHub necesarios",
                "HTTPS entrante iniciado por GitHub hacia el ejecutor",
                "Un túnel SSH entrante que GitHub abre por trabajo",
                "Acceso saliente solo a la URL de clonación Git del repositorio"
            ],
            "explanations": [
                "El ejecutor se comunica con GitHub para obtener trabajos.",
                "GitHub no exige este servicio de entrega entrante.",
                "Los trabajos no se entregan por túneles SSH entrantes.",
                "Entregar trabajos requiere más que acceso al repositorio Git."
            ],
            "concept": "Dirección de red del ejecutor autohospedado",
            "hints": [
                "Determina qué lado inicia la comunicación.",
                "El acceso administrativo y la entrega de trabajos usan canales distintos."
            ]
        },
        "admin-187": {
            "prompt": "¿Qué opción de ejecutor hospedado por GitHub admite un rango IP estático para una lista de permitidos de un firewall externo?",
            "choices": [
                "Ejecutores estándar seleccionados con ubuntu-latest",
                "Ejecutores macOS de mayor tamaño",
                "Ejecutores Linux o Windows de mayor tamaño",
                "Cualquier ejecutor seleccionado por una plantilla"
            ],
            "explanations": [
                "La etiqueta estándar no proporciona IP estáticas dedicadas.",
                "Esta función no está disponible en ejecutores macOS de mayor tamaño.",
                "Los ejecutores Linux y Windows de mayor tamaño admiten IP estáticas.",
                "Las plantillas no proporcionan capacidad de red."
            ],
            "concept": "Direcciones estáticas de ejecutores hospedados",
            "hints": [
                "Distingue clases de ejecutor y sistemas operativos.",
                "Una etiqueta de asignación no es una asignación IP."
            ]
        },
        "admin-188": {
            "prompt": "¿Qué conecta los ejecutores hospedados aptos de GitHub con la red virtual Azure de una organización?",
            "choices": [
                "Un paso VPN sin configuración de red en GitHub",
                "Recursos Azure y configuración de red privada en GitHub",
                "Una lista IP de organización con el rango de subred Azure",
                "Una acción de inicio de sesión autorizada para leer secretos de la aplicación"
            ],
            "explanations": [
                "Una VPN ad hoc no es la integración de red privada Azure.",
                "Se necesitan recursos Azure y configuración en GitHub.",
                "Una lista de acceso no conecta el ejecutor a una VNET.",
                "La autenticación de nube no crea una conexión de red."
            ],
            "concept": "Configuración de red privada Azure",
            "hints": [
                "La integración abarca dos planos de control.",
                "Los valores de configuración no aprovisionan conectividad por sí solos."
            ]
        },
        "admin-189": {
            "prompt": "Para redes privadas Azure con ejecutores hospedados de GitHub, ¿qué filtrado saliente recomienda la documentación actual?",
            "choices": [
                "Congelar la lista IP copiada durante la instalación",
                "Permitir solo el DNS de la aplicación privada",
                "Bloquear dominios GitHub tras registrar el ejecutor",
                "Mantener controles DNS/dominio con los metadatos publicados por GitHub"
            ],
            "explanations": [
                "Las listas IP copiadas pueden quedar obsoletas.",
                "El ejecutor también necesita servicios GitHub.",
                "Registrar no elimina la comunicación continua con GitHub.",
                "Las listas publicadas reflejan cambios de requisitos."
            ],
            "concept": "Mantenimiento del tráfico saliente de ejecutores",
            "hints": [
                "Las dependencias de red cambian tras el despliegue.",
                "La aplicación privada no es el único destino necesario."
            ]
        },
        "admin-190": {
            "prompt": "Un trabajo usa GITHUB_TOKEN para acceder a un repositorio privado protegido por una lista IP de GitHub Enterprise Cloud. ¿Qué debe cumplir su ruta de red?",
            "choices": [
                "La IP de origen del ejecutor debe estar permitida",
                "Un GITHUB_TOKEN válido permite cualquier IP de ejecutor",
                "Solo debe permitirse la IP del navegador de quien inició el flujo",
                "Un inicio de sesión de nube aprobado evita la comprobación IP de GitHub"
            ],
            "explanations": [
                "La lista se aplica a este acceso autenticado.",
                "Un token válido no evita esta restricción de red.",
                "La IP de origen de la solicitud API también importa.",
                "La autenticación de nube no evita la lista de GitHub."
            ],
            "concept": "Acceso de ejecutores con listas IP",
            "hints": [
                "Autenticación y permiso de red son comprobaciones distintas.",
                "Evalúa la dirección que ve GitHub."
            ]
        },
        "admin-191": {
            "prompt": "Un trabajo privilegiado workflow_run consume un artefacto de una compilación de bifurcación. ¿Cómo debe tratarlo?",
            "choices": [
                "Como confiable porque GitHub lo almacena",
                "Como confiable si la compilación terminó correctamente",
                "Como entrada no confiable que requiere validación",
                "Como seguro de ejecutar tras cambiar su extensión"
            ],
            "explanations": [
                "La ubicación no demuestra confianza en el productor.",
                "Una ejecución correcta no autentica el contenido.",
                "El consumidor privilegiado debe validar entradas de menor confianza.",
                "Renombrar no elimina contenido malicioso."
            ],
            "concept": "Confianza entre flujos workflow_run",
            "hints": [
                "Identifica quién puede influir en el productor.",
                "Un resultado correcto no certifica seguridad de los datos."
            ]
        },
        "admin-192": {
            "prompt": "¿Qué patrón debe rechazar un administrador en un flujo privilegiado pull_request_target?",
            "choices": [
                "Etiquetar la solicitud mediante código confiable",
                "Obtener y ejecutar el código propuesto de la bifurcación",
                "Leer metadatos de la solicitud sin ejecutarlos",
                "Limitar el token del trabajo a los permisos necesarios"
            ],
            "explanations": [
                "Operaciones confiables sobre metadatos pueden ser adecuadas.",
                "El código no confiable se ejecutaría con privilegios.",
                "Leer metadatos difiere de ejecutar código enviado.",
                "El mínimo privilegio reduce el riesgo."
            ],
            "concept": "Límite de confianza de pull_request_target",
            "hints": [
                "Identifica qué revisión de código se ejecuta.",
                "Compara la procedencia del código con los privilegios de ejecución."
            ]
        },
        "admin-193": {
            "prompt": "Una compilación terminada debe conservar un informe de pruebas para descargarlo después. ¿Qué mecanismo corresponde?",
            "choices": [
                "Una caché de dependencias",
                "Un secreto de Actions del repositorio",
                "Un directorio de trabajo local del ejecutor",
                "Un artefacto del flujo"
            ],
            "explanations": [
                "Las cachés optimizan regeneración, no conservan entregables de ejecución.",
                "Los secretos guardan valores sensibles, no informes descargables.",
                "Los archivos locales no se conservan como descargas de la ejecución.",
                "Los artefactos conservan archivos generados por una ejecución."
            ],
            "concept": "Artefactos para resultados de ejecución",
            "hints": [
                "Distingue un resultado de una dependencia reutilizable.",
                "El consumidor necesita el archivo tras terminar el trabajo."
            ]
        },
        "admin-194": {
            "prompt": "¿Qué debe contener una caché de dependencias para acelerar compilaciones repetidas?",
            "choices": [
                "Dependencias descargadas que puedan regenerarse",
                "Paquetes de versión firmados para auditoría a largo plazo",
                "Credenciales de producción obtenidas para despliegues posteriores",
                "Informes de pruebas conservados para descarga manual posterior"
            ],
            "explanations": [
                "Las cachés aceleran reutilización; los trabajos deben tolerar fallos de caché.",
                "Los registros duraderos no deben depender de cachés descartables.",
                "No deben guardarse secretos en cachés.",
                "Los entregables van en artefactos, no en cachés de dependencias."
            ],
            "concept": "Caché segura de dependencias",
            "hints": [
                "Prevé que no haya coincidencia en la caché.",
                "Acelerar reutilización difiere de almacenar datos duraderos o secretos."
            ]
        },
        "admin-195": {
            "prompt": "Una empresa deshabilita la creación de ejecutores autohospedados de repositorio. ¿Qué acceso puede seguir disponible?",
            "choices": [
                "Nuevos registros de repositorio creados por administradores",
                "Registros de repositorio creados mediante YAML",
                "Ejecutores de organización o empresa compartidos con el repositorio",
                "Registros de repositorio creados con una acción verificada"
            ],
            "explanations": [
                "Los administradores no pueden evitar la restricción.",
                "YAML no evita la política de registro.",
                "La restricción no deshabilita ejecutores compartidos de ámbitos superiores.",
                "Una acción verificada no anula la política empresarial."
            ],
            "concept": "Restricción del ámbito de registro de ejecutores",
            "hints": [
                "Una restricción de creación tiene un ámbito definido.",
                "Capacidad compartida y registro propio del repositorio son distintos."
            ]
        },
        "admin-196": {
            "prompt": "¿Qué filtro del registro de auditoría empresarial encuentra eventos iniciados por alex, en lugar de eventos que afectan a alex?",
            "choices": [
                "user:alex",
                "actor:alex",
                "author:alex",
                "owner:alex"
            ],
            "explanations": [
                "user identifica al usuario afectado.",
                "actor identifica la cuenta que inicia la acción.",
                "author no es este filtro de auditoría.",
                "owner no es este filtro de auditoría."
            ],
            "concept": "Iniciador frente a usuario afectado",
            "hints": [
                "Distingue quién actuó de quién resultó afectado.",
                "Usa filtros específicos de auditoría."
            ]
        },
        "admin-197": {
            "prompt": "¿Qué consulta de auditoría empresarial selecciona eventos de creación de repositorios desde el 1 de octubre de 2026 inclusive?",
            "choices": [
                "event:repo.create after:2026-10-01",
                "action:repo.create updated:>=2026-10-01",
                "type:repo.create date:2026-10-01",
                "action:repo.create created:>=2026-10-01"
            ],
            "explanations": [
                "event y after no son estos filtros documentados.",
                "El filtro temporal es created, no updated.",
                "type y date no son estos filtros documentados.",
                "action selecciona el evento; created fija el límite temporal."
            ],
            "concept": "Filtros de evento y fecha en auditoría",
            "hints": [
                "Combina acción y momento del evento.",
                "La sintaxis de repositorios no sustituye la de auditoría."
            ]
        },
        "admin-198": {
            "prompt": "En GitHub Enterprise Cloud, ¿cuánto tiempo conserva GitHub los eventos empresariales de auditoría que no son de Git?",
            "choices": [
                "180 días",
                "7 días",
                "30 días",
                "Indefinidamente"
            ],
            "explanations": [
                "El registro empresarial de Cloud conserva estos eventos 180 días.",
                "Siete días corresponde a eventos Git.",
                "No es la retención documentada de auditoría Cloud.",
                "La retención nativa es finita; conservar externamente es distinto."
            ],
            "concept": "Retención de auditoría en Cloud",
            "hints": [
                "Identifica el despliegue y la categoría del evento.",
                "La ventana visible predeterminada no equivale a retención."
            ]
        },
        "admin-199": {
            "prompt": "¿Qué retención corresponde específicamente a eventos Git en el registro empresarial de GitHub Enterprise Cloud?",
            "choices": [
                "180 días",
                "90 días",
                "7 días",
                "El periodo de retención de artefactos del repositorio"
            ],
            "explanations": [
                "Es la retención general de auditoría, no la de eventos Git.",
                "La ventana visible predeterminada no es la retención Git.",
                "Los registros Cloud conservan eventos Git siete días.",
                "La retención de artefactos es otra configuración."
            ],
            "concept": "Eventos Git de corta retención",
            "hints": [
                "No todas las categorías tienen la misma duración.",
                "Planifica recopilar antes de que caduquen los datos."
            ]
        },
        "admin-200": {
            "prompt": "Una solicitud a la API de auditoría empresarial devuelve 100 registros y un encabezado Link con rel=\"next\". ¿Cómo debe recopilar la integración los demás registros coincidentes?",
            "choices": [
                "Quitar el filtro de fecha para obtener una única página mayor.",
                "Seguir la URL de la siguiente página hasta que no haya otro enlace next.",
                "Considerar los 100 registros como todos los eventos coincidentes.",
                "Repetir la primera solicitud idéntica hasta que cambie el número."
            ],
            "explanations": [
                "Quitar filtros amplía la consulta y no elimina la paginación.",
                "La API proporciona enlaces de paginación para recuperar las páginas siguientes.",
                "El enlace de página siguiente indica explícitamente que hay más resultados.",
                "Repetir la misma primera página no avanza por los resultados."
            ],
            "concept": "Los recopiladores de auditoría deben consumir todas las páginas.",
            "hints": [
                "Revisa los metadatos de respuesta antes de dar por completa la recopilación.",
                "Distingue repetir una página de avanzar por los resultados."
            ]
        },
        "admin-201": {
            "prompt": "Una integración autorizada consulta eventos clone, fetch y push en la API de auditoría empresarial. ¿Qué parámetro URL selecciona específicamente eventos Git?",
            "choices": [
                "include=web",
                "per_page=100",
                "order=asc",
                "include=git"
            ],
            "explanations": [
                "Esto selecciona eventos web, no los eventos Git solicitados.",
                "El tamaño de página controla la paginación, no la clase de evento.",
                "El orden no selecciona eventos Git en lugar de eventos web.",
                "Este parámetro selecciona eventos Git; include=all también incluye eventos web."
            ],
            "concept": "La selección de eventos y la paginación son controles distintos de la API.",
            "hints": [
                "Identifica si se pregunta por el tipo de evento, el orden o el tamaño de página.",
                "Distingue operaciones Git de actividad de la interfaz web."
            ]
        },
        "admin-202": {
            "prompt": "Un GET REST usa un encabezado Authorization válido e If-None-Match. GitHub devuelve 304 Not Modified. ¿Cómo afecta esta respuesta condicional al límite primario?",
            "choices": [
                "No cuenta para el límite de solicitudes primario.",
                "Consume todo el cupo primario restante.",
                "Siempre cuenta como dos solicitudes GET normales.",
                "Restituye todas las solicitudes usadas antes en esa hora."
            ],
            "explanations": [
                "Las solicitudes condicionales correctamente autorizadas con respuesta 304 no consumen el cupo primario.",
                "Un 304 no agota el cupo del cliente autenticado.",
                "El comportamiento documentado no duplica el coste de la solicitud.",
                "Evitar un cargo por esta respuesta no devuelve solicitudes anteriores."
            ],
            "concept": "Las respuestas 304 condicionales autorizadas evitan cargos al límite primario.",
            "hints": [
                "Distingue una representación sin cambios de un cuerpo nuevo.",
                "Considera tanto el estado de respuesta como la autenticación."
            ]
        },
        "admin-203": {
            "prompt": "Una integración alcanza repetidamente límites REST secundarios al enviar muchas solicitudes simultáneas. ¿Qué cambio de planificación sigue las recomendaciones preventivas de GitHub?",
            "choices": [
                "Eliminar la autenticación de todas las solicitudes.",
                "Reintentar inmediatamente cada solicitud fallida desde todos los procesos.",
                "Poner las solicitudes en una cola y enviarlas en serie.",
                "Iniciar más procesos paralelos con la misma credencial."
            ],
            "explanations": [
                "Quitar la autenticación no resuelve la presión de solicitudes concurrentes.",
                "Los reintentos paralelos inmediatos mantienen la ráfaga en lugar de controlarla.",
                "Las solicitudes en serie reducen la concurrencia que puede activar límites secundarios.",
                "Más procesos concurrentes empeoran el patrón de planificación."
            ],
            "concept": "La planificación de solicitudes puede prevenir límites secundarios antes de reintentar.",
            "hints": [
                "Busca el patrón de carga que provoca la limitación.",
                "Distingue controlar la concurrencia de cambiar credenciales."
            ]
        },
        "admin-204": {
            "prompt": "Una integración recibe 404 para un repositorio privado cuya existencia confirma el administrador. ¿Qué debe comprobar primero?",
            "choices": [
                "Si el repositorio tiene suficientes estrellas",
                "La autenticación y el acceso de la integración al recurso",
                "Si el repositorio tiene una versión pública",
                "El nivel predeterminado de compresión de artefactos"
            ],
            "explanations": [
                "Las estrellas no autorizan acceso API.",
                "GitHub puede ocultar recursos privados con 404 si falta acceso.",
                "Las versiones no conceden acceso al repositorio privado.",
                "La compresión no se relaciona con autorización API."
            ],
            "concept": "Diagnóstico de respuestas sobre recursos privados",
            "hints": [
                "Un código puede evitar revelar que existe un recurso privado.",
                "Comprueba credenciales antes de suponer eliminación."
            ]
        },
        "admin-205": {
            "prompt": "Tras validar la firma de un webhook, una integración debe reconocer una reentrega solicitada de un evento ya procesado. ¿Qué encabezado de GitHub conserva el identificador original?",
            "choices": [
                "X-GitHub-Event",
                "User-Agent",
                "Content-Type",
                "X-GitHub-Delivery"
            ],
            "explanations": [
                "Esto identifica un tipo de evento compartido por muchas entregas distintas.",
                "El agente de usuario no es el identificador único de entrega.",
                "El tipo de contenido describe la representación, no la entrega individual.",
                "Una reentrega solicitada conserva el valor X-GitHub-Delivery original."
            ],
            "concept": "Los identificadores de entrega ayudan a evitar duplicados, pero no sustituyen la validación de firma.",
            "hints": [
                "Distingue el tipo de evento de la identidad de una entrega.",
                "Considera qué valor debe mantenerse cuando se solicita la misma entrega otra vez."
            ]
        },
        "admin-206": {
            "prompt": "¿Cómo puede distinguir un administrador la limitación REST principal de la secundaria si ambas pueden devolver 403 o 429?",
            "choices": [
                "Examinar el mensaje y las cabeceras de límites",
                "Tratar cada 403 como un token caducado",
                "Tratar cada 429 como un repositorio ausente",
                "Contar solo las solicitudes de cambios abiertas"
            ],
            "explanations": [
                "El mensaje y las cabeceras explican la limitación.",
                "403 puede indicar limitación u otros fallos.",
                "429 indica exceso de solicitudes, no repositorios ausentes.",
                "Contar solicitudes de cambios no clasifica límites."
            ],
            "concept": "Clasificación de limitaciones de API",
            "hints": [
                "El estado HTTP puede no ser suficiente.",
                "Usa los metadatos de diagnóstico del error."
            ]
        },
        "admin-207": {
            "prompt": "Una persona administra GHES 3.19 e investiga una partición raíz casi llena antes de decidir qué borrar. ¿Qué utilidad busca archivos grandes y archivos eliminados con manejadores abiertos?",
            "choices": [
                "ghe-config-apply",
                "ghe-announce",
                "ghe-check-disk-usage",
                "ghe-cleanup-caches"
            ],
            "explanations": [
                "Esto aplica cambios de configuración, no localiza esos archivos.",
                "Esto cambia el anuncio para usuarios, no diagnostica el disco.",
                "Esta utilidad investiga archivos grandes y eliminados que conservan manejadores abiertos.",
                "Esto elimina cachés, en lugar de realizar la investigación de uso de disco indicada."
            ],
            "concept": "Inspecciona el uso de disco antes de elegir una operación de limpieza.",
            "hints": [
                "Distingue investigar de ejecutar un comando que cambia datos almacenados.",
                "Relaciona el propósito documentado de la utilidad con el problema de recursos."
            ]
        },
        "admin-208": {
            "prompt": "En una sesión SSH administrativa de GHES 3.19, ¿qué comando lee core.github-hostname sin definir otro nombre ni aplicar cambios de configuración?",
            "choices": [
                "ghe-config-check",
                "ghe-config core.github-hostname",
                "ghe-config core.github-hostname new.example.com",
                "ghe-config-apply"
            ],
            "explanations": [
                "Esto valida la configuración en vez de recuperar el valor solicitado.",
                "Con solo la clave, ghe-config recupera su valor actual.",
                "Añadir un valor modifica el ajuste en lugar de solo leerlo.",
                "Esto aplica cambios en vez de recuperar únicamente esta clave."
            ],
            "concept": "Los argumentos de ghe-config distinguen consulta de modificación.",
            "hints": [
                "Compara una clave sola con una clave seguida de un valor nuevo.",
                "Distingue consultar la configuración de validarla o aplicarla."
            ]
        },
        "admin-209": {
            "prompt": "Durante un incidente de GHES 3.19, una persona con SSH administrativo quiere observar los registros de la instalación a medida que llegan entradas, no descargar un paquete estático. ¿Qué utilidad corresponde?",
            "choices": [
                "ghe-support-bundle",
                "ghe-config-check",
                "ghe-nwo",
                "ghe-logs-tail"
            ],
            "explanations": [
                "Un paquete agrupa evidencia diagnóstica en lugar de seguir registros en directo.",
                "Esto valida la configuración, no observa nuevas entradas de registro.",
                "Esto relaciona un ID de repositorio con su propietario y nombre, no muestra registros en directo.",
                "Esta utilidad sigue los registros relevantes para observarlos continuamente."
            ],
            "concept": "Seguir registros en directo y empaquetar diagnósticos cumplen tareas distintas.",
            "hints": [
                "Identifica si se necesita una instantánea o una salida continua.",
                "Relaciona la observación solicitada con el propósito de la utilidad."
            ]
        },
        "admin-210": {
            "prompt": "Una empresa usa residencia de datos en octocorp.ghe.com. ¿Qué cuenta debe usar su administrador para crear un ticket sobre esa empresa?",
            "choices": [
                "La cuenta GHE.com de la empresa.",
                "Una cuenta personal de GitHub.com con el mismo correo de trabajo.",
                "Una cuenta GitHub.com que administra otra empresa.",
                "Una cuenta GHE.com que pertenece a otra empresa."
            ],
            "explanations": [
                "Los tickets de una empresa con residencia de datos deben usar su cuenta GHE.com correspondiente.",
                "Coincidir en el correo no sustituye el contexto de cuenta GHE.com requerido.",
                "Administrar otra empresa no establece este contexto de cuenta con residencia de datos.",
                "La cuenta debe corresponder a la empresa que necesita soporte."
            ],
            "concept": "Las empresas con residencia de datos requieren su contexto de cuenta GHE.com en soporte.",
            "hints": [
                "Comprueba qué host posee la identidad empresarial.",
                "Distingue el contexto de cuenta de la información incluida en el ticket."
            ]
        },
        "admin-211": {
            "prompt": "Una persona administra GHES 3.19 y sospecha acumulación de trabajos en segundo plano. ¿Qué utilidad muestra la distribución de trabajos en cola y los que se procesan actualmente?",
            "choices": [
                "ghe-es-index-status",
                "ghe-announce",
                "ghe-aqueduct-info",
                "ghe-check-disk-usage"
            ],
            "explanations": [
                "Esto informa del estado de índices Elasticsearch, no de la distribución de colas.",
                "Esto gestiona un anuncio en lugar de inspeccionar trabajos en segundo plano.",
                "Esta utilidad informa de los trabajos en cola y los que se están procesando.",
                "Esto investiga archivos grandes o eliminados aún abiertos, no colas de trabajos."
            ],
            "concept": "Selecciona evidencia del subsistema que presenta la acumulación.",
            "hints": [
                "Identifica si el cuello de botella está en una cola, el disco o un índice.",
                "Distingue observar la cola de informar a usuarios de un incidente."
            ]
        },
        "admin-212": {
            "prompt": "El informe empresarial de usuarios inactivos marca una cuenta. ¿Cómo debe usar el administrador esta evidencia?",
            "choices": [
                "Suponer que no hubo trabajo en repositorios privados durante el periodo",
                "Revisar actividad medida y necesidad empresarial",
                "Concluir que no se usó ningún token ni clave SSH durante el periodo",
                "Retirar la licencia inmediatamente sin comprobar necesidades empresariales"
            ],
            "explanations": [
                "El informe excluye parte del trabajo en repositorios privados.",
                "Revisa cobertura y necesidad antes de recuperar acceso.",
                "La actividad con tokens y SSH no siempre cuenta como activa aquí.",
                "La inactividad no demuestra por sí sola que el acceso sobre."
            ],
            "concept": "Interpretación de evidencia de inactividad",
            "hints": [
                "Una métrica tiene un ámbito documentado.",
                "Una marca es señal de revisión, no veredicto completo."
            ]
        },
        "admin-213": {
            "prompt": "¿Qué actividad puede quedar fuera de la definición documentada de actividad del informe de inactividad de GitHub Enterprise Cloud?",
            "choices": [
                "Operaciones Git en repositorios privados",
                "Crear una solicitud de cambios en la empresa",
                "Comentar una solicitud de cambios en la empresa",
                "Publicar una versión en la empresa"
            ],
            "explanations": [
                "Las operaciones Git en repositorios privados no cuentan como actividad aquí.",
                "Crear solicitudes de cambios figura como actividad.",
                "Los comentarios en solicitudes de cambios figuran como actividad.",
                "Publicar versiones figura como actividad."
            ],
            "concept": "Cobertura de la métrica de inactividad",
            "hints": [
                "Un informe puede excluir trabajo válido.",
                "Revisa la definición exacta antes de interpretar una ausencia."
            ]
        },
        "admin-214": {
            "prompt": "Un miembro no hizo commits, pero revisó solicitudes de cambios durante el periodo. ¿Cómo debe evaluar su actividad el administrador?",
            "choices": [
                "Clasificarlo como inactivo solo por sus commits",
                "Reasignar su licencia sin comprobar otra actividad",
                "Usar estrellas como única medida de productividad",
                "Incluir actividad pertinente de revisión y colaboración"
            ],
            "explanations": [
                "Los commits no capturan toda la colaboración.",
                "Las decisiones de licencia requieren más contexto.",
                "Las estrellas no miden completamente la actividad individual.",
                "Las revisiones son participación significativa registrada."
            ],
            "concept": "Evaluación de adopción más allá de commits",
            "hints": [
                "Los distintos roles contribuyen de maneras distintas.",
                "Usa medidas acordes al trabajo realizado."
            ]
        },
        "admin-215": {
            "prompt": "¿Dónde genera un propietario empresarial el informe de usuarios inactivos en la interfaz inglesa actual de GitHub Enterprise Cloud?",
            "choices": [
                "Repository > Insights > Traffic",
                "Organization > Settings > Actions > Runners",
                "Enterprise > Compliance > Reports > Dormant Users",
                "Enterprise > Billing & Licensing > Budgets and alerts"
            ],
            "explanations": [
                "El tráfico del repositorio no es un informe empresarial de inactividad.",
                "El inventario de ejecutores no genera este informe.",
                "Los informes de Compliance incluyen Dormant Users.",
                "Los presupuestos miden gasto, no inactividad de cuentas."
            ],
            "concept": "Ubicación de informes de actividad empresarial",
            "hints": [
                "Elige un informe empresarial, no telemetría de repositorio.",
                "Revisar actividad y controlar gasto tienen accesos distintos."
            ]
        },
        "admin-216": {
            "prompt": "Dos equipos comparten un centro de costos, pero necesitan presupuestos controlados por separado. ¿Qué diseño documentado cumple ese requisito?",
            "choices": [
                "Usar un presupuesto compartido con dos umbrales de alerta.",
                "Crear un centro de costos separado para cada equipo.",
                "Crear dos presupuestos dirigidos al mismo centro compartido.",
                "Añadir los dos equipos empresariales como recursos del centro compartido."
            ],
            "explanations": [
                "Varios umbrales de alerta no crean presupuestos independientes por equipo.",
                "El presupuesto abarca todo el centro; los presupuestos independientes requieren centros separados.",
                "Ambos siguen abarcando el centro compartido, no gastos de equipos separados.",
                "Añadir recursos separados no divide el ámbito presupuestario del centro."
            ],
            "concept": "Los límites presupuestarios independientes requieren un ámbito adecuado de centros de costos.",
            "hints": [
                "Distingue nombrar un equipo de crear un límite presupuestario.",
                "Comprueba si un presupuesto abarca una parte o todo el centro."
            ]
        },
        "admin-217": {
            "prompt": "Antes de comparar quantity entre filas de facturación GitHub, ¿qué campos evitan mezclar medidas incompatibles?",
            "choices": [
                "sku and unit_type",
                "repository and username only",
                "workflow_path and repository only",
                "date and cost_center_name only"
            ],
            "explanations": [
                "El SKU y la unidad identifican qué mide la cantidad.",
                "La propiedad no identifica la unidad.",
                "La atribución al flujo no define la unidad.",
                "La fecha y la asignación no establecen unidades comparables."
            ],
            "concept": "Interpretación de unidades de consumo",
            "hints": [
                "Un número necesita producto y unidad.",
                "Las cantidades de cómputo y almacenamiento no son intercambiables."
            ]
        },
        "admin-218": {
            "prompt": "¿Qué campo del informe de facturación GitHub representa el importe facturable tras descuentos y ajustes por consumo incluido?",
            "choices": [
                "quantity",
                "gross_amount",
                "discount_amount",
                "net_amount"
            ],
            "explanations": [
                "La cantidad mide unidades, no cargos finales.",
                "El importe bruto precede a restar descuentos.",
                "El descuento es la reducción, no el total facturable.",
                "El neto es el bruto menos el descuento."
            ],
            "concept": "Costo medido bruto frente a neto",
            "hints": [
                "Distingue volumen de uso de dinero.",
                "Aplica ajustes antes de interpretar el importe facturable."
            ]
        },
        "admin-219": {
            "prompt": "¿Qué informe descargable de facturación incluye workflow_path para investigar qué flujo de Actions generó consumo?",
            "choices": [
                "El informe resumido de consumo",
                "El informe de usuarios inactivos",
                "El informe detallado de consumo",
                "El informe de tráfico del repositorio"
            ],
            "explanations": [
                "El resumen no incluye workflow_path.",
                "La inactividad mide actividad definida de cuentas.",
                "El informe detallado incluye atribución por flujo cuando corresponde.",
                "El tráfico no atribuye cargos medidos a flujos."
            ],
            "concept": "Investigación de facturación por flujo",
            "hints": [
                "Elige la granularidad necesaria del informe.",
                "Un resumen puede omitir el campo de atribución."
            ]
        },
        "admin-220": {
            "prompt": "Un presupuesto empresarial de Actions envía alertas, pero tiene desactivado 'Stop usage when budget limit is reached'. ¿Qué ocurre al superar el importe?",
            "choices": [
                "Se bloquea inmediatamente el nuevo uso cubierto de Actions",
                "El uso continúa mientras las alertas notifican",
                "El presupuesto aumenta automáticamente para igualar el gasto real",
                "Solo se bloquea el repositorio de mayor consumo"
            ],
            "explanations": [
                "Bloquear requiere la opción de parada, no solo alertas.",
                "Sin la opción de parada, el presupuesto no bloquea uso.",
                "Una alerta no aumenta automáticamente el presupuesto.",
                "Las alertas no bloquean selectivamente un repositorio."
            ],
            "concept": "Alertas frente a cumplimiento de presupuestos",
            "hints": [
                "Notificar y bloquear son opciones distintas.",
                "Lee la configuración real de parada."
            ]
        },
        "admin-221": {
            "prompt": "Se agota un presupuesto de Actions con parada habilitada, pero un presupuesto SKU de ejecutor superpuesto tiene saldo. ¿Qué presupuesto controla el uso cubierto posterior?",
            "choices": [
                "El presupuesto aplicable agotado con parada",
                "Solo el presupuesto de mayor importe",
                "Solo el presupuesto creado más recientemente",
                "Solo el presupuesto SKU del ejecutor"
            ],
            "explanations": [
                "Cualquier presupuesto aplicable agotado con parada puede bloquear uso.",
                "Un importe mayor no anula otro límite obligatorio.",
                "El orden de creación no determina prioridad.",
                "Un presupuesto SKU no evita un límite de producto aplicable."
            ],
            "concept": "Cumplimiento de presupuestos superpuestos",
            "hints": [
                "Varios presupuestos pueden cubrir el mismo uso.",
                "Compara los ámbitos y las opciones de cumplimiento."
            ]
        },
        "admin-222": {
            "prompt": "Un repositorio expulsa repetidamente cachés útiles al alcanzar su límite. ¿Qué cambio reduce esa rotación sin aumentar el espacio permitido?",
            "choices": [
                "Aumentar el espacio de caché permitido del repositorio",
                "Generar una clave única por cada reintento",
                "Guardar espacios de trabajo completos con archivos generados",
                "Limitar el contenido a dependencias reutilizadas con frecuencia"
            ],
            "explanations": [
                "Aumenta el espacio, contra el requisito.",
                "Las claves únicas crean entradas adicionales y reducen reutilización.",
                "Las rutas amplias consumen más espacio y pueden agravar la expulsión.",
                "Reducir contenido de poco valor conserva espacio para reutilización útil."
            ],
            "concept": "Optimización de almacenamiento y expulsión de caché",
            "hints": [
                "Compara creación de entradas con reutilización útil.",
                "Considera qué archivos justifican el espacio ocupado."
            ]
        },
        "admin-223": {
            "prompt": "Una organización paga codespaces detenidos y sin uso. ¿Qué política reduce la duración futura de su almacenamiento?",
            "choices": [
                "Un tiempo menor antes de detener codespaces inactivos",
                "Un tamaño de máquina de codespace permitido menor",
                "Una retención máxima de codespaces más corta",
                "Menos regiones disponibles para precompilaciones de codespaces"
            ],
            "explanations": [
                "Detener no termina la duración de almacenamiento retenido.",
                "El tamaño no fija la retención de recursos detenidos.",
                "Las restricciones limitan cuánto duran los codespaces detenidos.",
                "Las regiones no definen cuándo se eliminan estos codespaces."
            ],
            "concept": "Limpieza de entornos de desarrollo sin uso",
            "hints": [
                "El cómputo detenido puede seguir dejando datos almacenados.",
                "Elige un control del ciclo de vida del recurso facturado."
            ]
        },
        "admin-224": {
            "prompt": "Trabajos aptos esperan durante picos breves, pero las máquinas están libres gran parte del día. ¿Qué estrategia de capacidad corresponde?",
            "choices": [
                "Mantener capacidad para el pico durante periodos tranquilos",
                "Autoescalar ejecutores efímeros según la demanda",
                "Serializar todos los trabajos en un ejecutor persistente",
                "Aumentar CPU por ejecutor sin cambiar el tamaño de la flota"
            ],
            "explanations": [
                "Una flota fija para el pico mantiene la capacidad ociosa medida.",
                "Escalar según demanda ajusta capacidad a picos y periodos tranquilos.",
                "Serializar todo agrava la cola durante los picos.",
                "Más CPU no adapta directamente la flota a la demanda."
            ],
            "concept": "Optimización de ejecutores según demanda",
            "hints": [
                "Distingue presión de cola de duración del trabajo.",
                "Ajusta el aprovisionamiento a la curva de demanda observada."
            ]
        },
        "admin-225": {
            "prompt": "En una solicitud de facturación autenticada, ¿qué ruta obtiene el resumen de consumo de ENTERPRISE para septiembre de 2026?",
            "choices": [
                "/enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
                "/enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09",
                "/orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
                "/enterprises/ENTERPRISE/audit-log?phrase=created:2026-09"
            ],
            "explanations": [
                "Selecciona el resumen empresarial y los parámetros temporales documentados.",
                "created no es el filtro temporal documentado para este resumen.",
                "Apunta a una organización, no a la empresa.",
                "El endpoint de auditoría no devuelve resúmenes de consumo facturado."
            ],
            "concept": "Automatización de informes de costos empresariales",
            "hints": [
                "Relaciona ámbito de cuenta y finalidad del endpoint.",
                "Los filtros temporales de facturación difieren de los de auditoría."
            ]
        }
    },
    "pt-BR": {
        "admin-001": {
            "prompt": "O que define uma conta do Enterprise Managed Users no GitHub Enterprise Cloud?",
            "choices": [
                "Uma conta pessoal restrita por rulesets do repositório",
                "Um colaborador externo convidado para repositórios selecionados",
                "Uma conta provisionada e autenticada pelo IdP empresarial",
                "Uma conta pessoal vinculada a uma identidade SAML da organização"
            ],
            "explanations": [
                "Rulesets regem a atividade do repositório, não a propriedade da conta.",
                "Um convite não estabelece uma identidade gerenciada pelo IdP.",
                "O IdP gerencia o ciclo de vida e a autenticação da conta gerenciada.",
                "O vínculo SAML, por si só, não cria uma conta gerenciada."
            ],
            "concept": "Propriedade de contas gerenciadas",
            "hints": [
                "Diferencie a propriedade da conta da permissão para usar recursos.",
                "Considere o limite entre colaboração empresarial e pública."
            ]
        },
        "admin-002": {
            "prompt": "Em uma empresa do GitHub Enterprise Cloud com contas pessoais, quem cria e mantém a conta do GitHub de cada membro?",
            "choices": [
                "O serviço SCIM da empresa",
                "O mantenedor da equipe da organização",
                "O gerente de cobrança empresarial",
                "O próprio usuário"
            ],
            "explanations": [
                "O provisionamento de contas no nível empresarial é um recurso do EMU.",
                "Gerenciar uma equipe não inclui ser proprietário das contas de seus membros.",
                "A autoridade de cobrança não inclui criar contas pessoais.",
                "Cada usuário mantém sua conta pessoal mesmo quando o SAML protege o acesso empresarial."
            ],
            "concept": "Responsabilidade por contas pessoais",
            "hints": [
                "Diferencie a propriedade da conta da permissão para usar recursos.",
                "Considere o limite entre colaboração empresarial e pública."
            ]
        },
        "admin-003": {
            "prompt": "O que o SAML SSO acrescenta para contas pessoais que acessam uma organização protegida do GitHub Enterprise Cloud?",
            "choices": [
                "Autenticação no IdP externo da organização",
                "Provisionamento automático de novas contas pessoais",
                "Atribuição automática de acesso Admin ao repositório",
                "Substituição do login da conta do GitHub"
            ],
            "explanations": [
                "O SAML acrescenta autenticação externa para recursos protegidos.",
                "A autenticação SAML não provisiona contas.",
                "A autorização do repositório é independente do SAML.",
                "O login da conta pessoal continua necessário."
            ],
            "concept": "Escopo da autenticação SAML",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-004": {
            "prompt": "Qual protocolo provisiona e atualiza contas de usuário gerenciadas no GitHub Enterprise Cloud?",
            "choices": [
                "SSH",
                "SCIM",
                "SAML",
                "WebAuthn"
            ],
            "explanations": [
                "O SSH autentica conexões, não provisiona contas.",
                "O SCIM fornece provisionamento do ciclo de vida das contas.",
                "O SAML trata da autenticação federada.",
                "O WebAuthn oferece autenticação com chaves públicas."
            ],
            "concept": "Protocolo de provisionamento",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-005": {
            "prompt": "Para contas pessoais no GitHub Enterprise Cloud, qual é a principal finalidade da sincronização de equipes?",
            "choices": [
                "Definir funções de repositório diretamente no IdP",
                "Substituir a autenticação SAML da organização",
                "Refletir a associação a grupos do IdP em uma equipe do GitHub",
                "Criar contas pessoais para todos os usuários do IdP"
            ],
            "explanations": [
                "O acesso da equipe ao repositório é configurado no GitHub.",
                "Ela complementa o SAML em vez de substituí-lo.",
                "A sincronização atualiza os membros da equipe a partir dos grupos vinculados.",
                "Não é um serviço de provisionamento de contas pessoais."
            ],
            "concept": "Finalidade da sincronização de equipes",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-006": {
            "prompt": "Qual IdP parceiro oferece autenticação OIDC para Enterprise Managed Users?",
            "choices": [
                "Okta",
                "PingFederate",
                "OneLogin",
                "Microsoft Entra ID"
            ],
            "explanations": [
                "A integração de autenticação do Okta para EMU utiliza SAML.",
                "PingFederate não é o IdP parceiro documentado para OIDC do EMU.",
                "OneLogin não é o IdP parceiro documentado para OIDC do EMU.",
                "O Microsoft Entra ID oferece a integração OIDC documentada do EMU."
            ],
            "concept": "Provedor OIDC para EMU",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-007": {
            "prompt": "Qual projeto de identidade segue a integração parceira recomendada pelo GitHub para autenticação e provisionamento do EMU?",
            "choices": [
                "Usar um único IdP parceiro para ambas as funções",
                "Usar Okta para SSO e Microsoft Entra ID para SCIM",
                "Usar Microsoft Entra ID para SSO e Okta para SCIM",
                "Usar apenas SAML para ambas as funções"
            ],
            "explanations": [
                "Um único IdP parceiro fornece a integração recomendada e documentada.",
                "Essa combinação de provedores é explicitamente incompatível.",
                "A combinação inversa também não é compatível.",
                "O SAML sozinho não provisiona o ciclo de vida."
            ],
            "concept": "Integração EMU compatível",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-008": {
            "prompt": "Na configuração SAML em inglês do GitHub Enterprise Cloud, o que deve ser inserido em Public Certificate?",
            "choices": [
                "Um certificado de cliente TLS do repositório",
                "O certificado público do IdP para verificar respostas SAML",
                "A chave privada de assinatura do IdP",
                "A chave pública SSH pessoal de um membro"
            ],
            "explanations": [
                "Um certificado de cliente do repositório não verifica as assinaturas SAML do IdP.",
                "O GitHub usa o certificado público para verificar respostas SAML assinadas.",
                "O IdP deve manter sua chave privada de assinatura.",
                "A chave SSH do usuário autentica conexões Git."
            ],
            "concept": "Verificação de respostas SAML",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-009": {
            "prompt": "Ao configurar SAML empresarial para contas pessoais no GitHub Enterprise Cloud, o que é Sign on URL?",
            "choices": [
                "O identificador do emissor do IdP em vez do seu endpoint de login",
                "A página inicial habitual da empresa no GitHub",
                "O endpoint HTTPS do IdP para solicitações SSO",
                "O endpoint do serviço consumidor de asserções do GitHub"
            ],
            "explanations": [
                "O emissor identifica o remetente e é configurado separadamente.",
                "A página empresarial não é o endpoint de autenticação do IdP.",
                "Esse campo direciona as solicitações de autenticação ao IdP.",
                "O serviço consumidor recebe respostas no GitHub, não solicitações de login no IdP."
            ],
            "concept": "Configuração do endpoint SAML",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-010": {
            "prompt": "O que diferencia a autenticação de dois fatores do login apenas com senha?",
            "choices": [
                "Concede uma função adicional no repositório",
                "Provisiona uma segunda conta do GitHub",
                "Cria uma associação adicional a uma organização",
                "Exige um fator adicional de autenticação"
            ],
            "explanations": [
                "Fatores de autenticação não concedem funções no repositório.",
                "A 2FA não cria contas.",
                "A 2FA não atribui associação a organizações.",
                "A 2FA acrescenta outro fator para verificar o acesso à conta."
            ],
            "concept": "Fatores de autenticação",
            "hints": [
                "Diferencie a comprovação de identidade do acesso a um recurso específico.",
                "Verifique se a questão trata de uma conta pessoal ou do acesso empresarial."
            ]
        },
        "admin-011": {
            "prompt": "Para uma conta pessoal no GitHub.com, o que uma passkey pode atender em uma única etapa de login?",
            "choices": [
                "Os requisitos de senha e 2FA",
                "Apenas o requisito SAML da organização",
                "Apenas o requisito de senha",
                "Apenas o requisito de autorização do repositório"
            ],
            "explanations": [
                "Uma passkey pode atender aos requisitos de senha e 2FA.",
                "A passkey da conta não substitui o SAML da organização.",
                "Passkeys podem atender à 2FA e ao requisito de senha.",
                "As permissões do repositório continuam separadas da autenticação."
            ],
            "concept": "Login com passkey",
            "hints": [
                "Diferencie a comprovação de identidade do acesso a um recurso específico.",
                "Verifique se a questão trata de uma conta pessoal ou do acesso empresarial."
            ]
        },
        "admin-012": {
            "prompt": "Um usuário de conta pessoal do GitHub.com perde seu dispositivo 2FA, mas guardou códigos de recuperação. Qual credencial permite recuperar o acesso?",
            "choices": [
                "O arquivo de licença da empresa",
                "Um código de recuperação 2FA não utilizado",
                "O certificado de assinatura SAML da organização",
                "O arquivo CODEOWNERS do repositório"
            ],
            "explanations": [
                "Um arquivo de licença não comprova posse da conta.",
                "Os códigos salvos são um método documentado de recuperação.",
                "Um certificado do IdP não recupera a 2FA de uma conta pessoal.",
                "A propriedade do código não participa da recuperação de contas."
            ],
            "concept": "Preparação para recuperar contas",
            "hints": [
                "Diferencie a comprovação de identidade do acesso a um recurso específico.",
                "Verifique se a questão trata de uma conta pessoal ou do acesso empresarial."
            ]
        },
        "admin-013": {
            "prompt": "Como proprietário de uma organização do GitHub Enterprise Cloud na interface em inglês, onde você exige 2FA para contas pessoais?",
            "choices": [
                "Repository Settings → Rules → Rulesets",
                "Enterprise People → Enterprise teams",
                "Organization Settings → Authentication security",
                "Organization Settings → Member privileges"
            ],
            "explanations": [
                "Rulesets regem contribuições, não a 2FA das contas.",
                "Enterprise teams gerencia grupos, não a configuração de 2FA da organização.",
                "Authentication security contém o requisito de 2FA da organização.",
                "Member privileges controla as capacidades dos membros."
            ],
            "concept": "Navegação para 2FA da organização",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-014": {
            "prompt": "Um proprietário empresarial configura SAML para toda a empresa com contas pessoais na interface em inglês do GitHub Enterprise Cloud. Qual seção contém Require SAML authentication?",
            "choices": [
                "Enterprise People → Enterprise teams",
                "Organization Settings → Member privileges",
                "Repository Settings → Collaborators & teams",
                "Enterprise Settings → Authentication security"
            ],
            "explanations": [
                "Enterprise teams contém a administração de equipes.",
                "Member privileges rege permissões da organização.",
                "As configurações de acesso do repositório não definem autenticação empresarial.",
                "Authentication security empresarial contém o requisito SAML da empresa."
            ],
            "concept": "Navegação para SAML empresarial",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-015": {
            "prompt": "Qual configuração SCIM está disponível em uma empresa do GitHub Enterprise Cloud que usa contas pessoais em vez de EMU?",
            "choices": [
                "SCIM da organização com SAML da organização",
                "SCIM empresarial com SAML empresarial",
                "SCIM empresarial sem SAML",
                "SCIM da organização que cria contas gerenciadas"
            ],
            "explanations": [
                "Para contas pessoais, o SCIM provisiona acesso à organização com SAML nesse nível.",
                "Provisionar contas com SCIM empresarial exige EMU.",
                "Remover SAML não habilita SCIM empresarial para contas pessoais.",
                "O SCIM da organização não converte contas pessoais em gerenciadas."
            ],
            "concept": "Escopo SCIM para contas pessoais",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-016": {
            "prompt": "Onde é mantido o e-mail do perfil de um usuário do Enterprise Managed Users?",
            "choices": [
                "Nas permissões de repositório da equipe",
                "No provedor de identidade",
                "Nas configurações pessoais do GitHub do usuário",
                "Nas configurações de colaboradores do repositório"
            ],
            "explanations": [
                "Permissões da equipe controlam acesso, não atributos de identidade.",
                "O IdP fornece nomes e e-mails dos perfis gerenciados.",
                "Usuários gerenciados não podem alterar esse e-mail no GitHub.",
                "As configurações de colaboradores não controlam os dados do perfil gerenciado."
            ],
            "concept": "Atributos de perfis gerenciados",
            "hints": [
                "Diferencie a propriedade da conta da permissão para usar recursos.",
                "Considere o limite entre colaboração empresarial e pública."
            ]
        },
        "admin-017": {
            "prompt": "Uma equipe de organização do GitHub Enterprise Cloud com contas pessoais está sincronizada com um grupo do IdP. Onde seus membros devem ser alterados?",
            "choices": [
                "Nos convites de colaboradores do repositório",
                "Na lista de contatos de cobrança empresarial",
                "No grupo do IdP conectado",
                "No editor de membros da equipe no GitHub"
            ],
            "explanations": [
                "Convites do repositório não alteram o grupo do IdP.",
                "Contatos de cobrança não controlam essa associação.",
                "O IdP controla os membros da equipe sincronizada.",
                "O GitHub não permite editar manualmente membros de equipes sincronizadas."
            ],
            "concept": "Fonte de associação à equipe",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-018": {
            "prompt": "Um usuário entra com sucesso, mas não tem permissão para fazer push em um repositório da organização. Qual distinção explica a falha?",
            "choices": [
                "A autorização funcionou; a autenticação é insuficiente",
                "O provisionamento SCIM concede push automaticamente",
                "Um login válido concede Write automaticamente",
                "A autenticação funcionou; a autorização é insuficiente"
            ],
            "explanations": [
                "O usuário já se autenticou, mas não tem a permissão necessária.",
                "O provisionamento não concede escrita em repositórios automaticamente.",
                "A autenticação por si só não concede Write.",
                "O login comprova identidade; as permissões determinam as ações permitidas."
            ],
            "concept": "Autenticação versus autorização",
            "hints": [
                "Diferencie a comprovação de identidade do acesso a um recurso específico.",
                "Verifique se a questão trata de uma conta pessoal ou do acesso empresarial."
            ]
        },
        "admin-019": {
            "prompt": "Para contas pessoais em uma organização do GitHub Enterprise Cloud que exige SAML, qual etapa adicional permite que uma chave SSH existente acesse recursos protegidos?",
            "choices": [
                "Autorizar a chave SSH para a organização",
                "Adicionar a chave ao campo SAML Public Certificate",
                "Enviar a chave privada ao IdP da organização",
                "Atribuir ao usuário a função empresarial Billing manager"
            ],
            "explanations": [
                "A credencial SSH precisa ser autorizada para a organização protegida.",
                "O certificado SAML verifica assinaturas do IdP, não usuários SSH.",
                "Chaves privadas SSH devem permanecer privadas; enviá-las não autoriza SSO.",
                "A função de cobrança não autoriza uma credencial SSH."
            ],
            "concept": "Credenciais SSH autorizadas para SAML",
            "hints": [
                "Diferencie a comprovação de identidade do acesso a um recurso específico.",
                "Verifique se a questão trata de uma conta pessoal ou do acesso empresarial."
            ]
        },
        "admin-020": {
            "prompt": "O que acontece com a associação a equipes sincronizadas quando a identidade SAML vinculada de um usuário com conta pessoal é revogada no GitHub Enterprise Cloud?",
            "choices": [
                "A conta pessoal se torna uma conta gerenciada",
                "O usuário é removido das equipes vinculadas a grupos do IdP",
                "O usuário se torna mantenedor da equipe",
                "O usuário recebe acesso Write direto ao repositório"
            ],
            "explanations": [
                "Revogar o vínculo SAML não muda o modelo de conta.",
                "Revogar a identidade vinculada remove a associação às equipes mapeadas.",
                "A revogação não promove usuários.",
                "A revogação não substitui o acesso da equipe por uma concessão direta."
            ],
            "concept": "Identidade vinculada e acesso a equipes",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-021": {
            "prompt": "Qual função padrão de repositório concede o menor privilégio para ler código e discutir issues em um repositório privado da organização?",
            "choices": [
                "Write",
                "Maintain",
                "Read",
                "Triage"
            ],
            "explanations": [
                "Write acrescenta permissões para contribuir código.",
                "Maintain acrescenta gerenciamento mais amplo do repositório.",
                "Read permite leitura e discussão sem direitos de gerenciamento mais amplos.",
                "Triage acrescenta gerenciamento de issues e pull requests."
            ],
            "concept": "Contribuição somente leitura",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-022": {
            "prompt": "Qual função padrão atende a quem gerencia issues e pull requests de outros colaboradores, mas não deve fazer push de código em um repositório da organização?",
            "choices": [
                "Read",
                "Write",
                "Admin",
                "Triage"
            ],
            "explanations": [
                "Read não fornece todas as capacidades de triagem.",
                "Write concede direitos desnecessários para enviar código.",
                "Admin concede poderes administrativos sensíveis desnecessários.",
                "Triage permite gerenciar issues e pull requests sem acesso de escrita."
            ],
            "concept": "Triagem sem escrita de código",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-023": {
            "prompt": "Qual é a menor função padrão de repositório que permite fazer push de código, respeitando as regras de branch aplicáveis?",
            "choices": [
                "Write",
                "Read",
                "Triage",
                "Maintain"
            ],
            "explanations": [
                "Write é a primeira função padrão que permite enviar código.",
                "Read permite visualizar, não fazer push.",
                "Triage gerencia issues e pull requests sem escrita.",
                "Maintain permite push, mas concede mais privilégios do que o necessário."
            ],
            "concept": "Função para contribuir código",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-024": {
            "prompt": "Qual função padrão de repositório da organização se destina a gerentes de projeto que gerenciam o repositório sem ações administrativas sensíveis ou destrutivas?",
            "choices": [
                "Admin",
                "Maintain",
                "Triage",
                "Write"
            ],
            "explanations": [
                "Admin inclui os poderes sensíveis excluídos pela tarefa.",
                "Maintain foi projetada para gerenciar o repositório sem ações sensíveis ou destrutivas.",
                "Triage se concentra em issues e pull requests.",
                "Write se concentra em contribuir código."
            ],
            "concept": "Limite da manutenção de repositórios",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-025": {
            "prompt": "Qual função padrão de repositório pode gerenciar o acesso individual e de equipes a um repositório da organização?",
            "choices": [
                "Write",
                "Triage",
                "Admin",
                "Maintain"
            ],
            "explanations": [
                "Write não permite gerenciar o acesso ao repositório.",
                "Triage não administra permissões de acesso.",
                "Admin inclui gerenciar o acesso ao repositório.",
                "Maintain não inclui administrar o acesso individual e de equipes."
            ],
            "concept": "Administração do acesso a repositórios",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-026": {
            "prompt": "Qual função da organização inclui acesso administrativo a todos os repositórios pertencentes a ela?",
            "choices": [
                "Organization member",
                "Billing manager",
                "Team maintainer",
                "Organization owner"
            ],
            "explanations": [
                "Membros recebem acesso por permissões básicas e concessões explícitas.",
                "Gerenciar cobrança não concede administração de todos os repositórios.",
                "Mantenedores administram sua equipe, não todos os repositórios.",
                "Proprietários têm acesso administrativo a todos os repositórios da organização."
            ],
            "concept": "Autoridade do proprietário da organização",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-027": {
            "prompt": "Um proprietário de organização no GitHub Enterprise Cloud quer alterar as permissões padrão de repositório dos membros. Qual caminho da interface em inglês contém Base permissions?",
            "choices": [
                "Organization Settings → Member privileges",
                "Organization Settings → Authentication security",
                "Enterprise People → Enterprise teams",
                "Repository Settings → Rules → Rulesets"
            ],
            "explanations": [
                "Member privileges contém as permissões básicas da organização.",
                "Authentication security controla requisitos de autenticação.",
                "Enterprise teams gerencia grupos empresariais.",
                "Rulesets regem a atividade do repositório, não permissões padrão de membros."
            ],
            "concept": "Navegação para permissões básicas",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-028": {
            "prompt": "Em uma organização do GitHub Enterprise Cloud com contas pessoais, o que caracteriza um colaborador externo?",
            "choices": [
                "Um mantenedor de equipe que gerencia grupos sincronizados",
                "Uma pessoa não membro com acesso a um ou mais repositórios da organização",
                "Um membro da organização sem permissões administrativas",
                "Um proprietário empresarial que gerencia políticas da organização"
            ],
            "explanations": [
                "Ser mantenedor de equipe não define a condição de colaborador externo.",
                "Colaboradores externos acessam repositórios sem pertencer à organização.",
                "Um membro sem administração continua pertencendo à organização.",
                "A propriedade empresarial é uma função administrativa empresarial."
            ],
            "concept": "Limite da colaboração externa",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-029": {
            "prompt": "Um membro tem permissão básica Read e uma concessão direta Write em um repositório privado. Qual é sua função efetiva nesse repositório?",
            "choices": [
                "Triage",
                "Sem acesso",
                "Write",
                "Read"
            ],
            "explanations": [
                "Nenhuma concessão especifica Triage, e Write está disponível.",
                "O membro tem duas fontes válidas de acesso.",
                "A concessão direta superior prevalece sobre Read básica.",
                "Read básica não reduz uma concessão explícita superior."
            ],
            "concept": "Permissões efetivas concedidas",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-030": {
            "prompt": "Tornar-se proprietário empresarial fornece automaticamente acesso ao conteúdo dos repositórios privados de todas as organizações no GitHub Enterprise Cloud?",
            "choices": [
                "Sim; a propriedade empresarial concede Admin em todos os repositórios",
                "Não; um proprietário empresarial nunca pode ingressar em organizações",
                "Sim; o direito de cobrança inclui todo o código privado",
                "Não; o proprietário pode ingressar em organizações para obter acesso"
            ],
            "explanations": [
                "A propriedade empresarial não concede automaticamente esse acesso.",
                "Proprietários podem ingressar nas organizações da empresa.",
                "A autoridade de cobrança não dá acesso geral ao código privado.",
                "Não há acesso ao conteúdo por padrão, mas o proprietário pode ingressar em organizações."
            ],
            "concept": "Limite de conteúdo do proprietário empresarial",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-031": {
            "prompt": "Qual função empresarial predefinida atende a um administrador financeiro que precisa das configurações de cobrança, mas não da administração de políticas empresariais?",
            "choices": [
                "Billing manager",
                "Enterprise owner",
                "App manager",
                "User"
            ],
            "explanations": [
                "Billing manager fornece a autoridade de cobrança necessária.",
                "Enterprise owner acrescenta controle desnecessário sobre membros e políticas.",
                "App manager gerencia registros de GitHub Apps da empresa.",
                "User não tem acesso administrativo empresarial por padrão."
            ],
            "concept": "Delegação de cobrança empresarial",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-032": {
            "prompt": "Como um proprietário do GitHub Enterprise Cloud pode delegar permissões específicas de configurações empresariais sem conceder propriedade completa da empresa?",
            "choices": [
                "Conceder Write básica em uma organização",
                "Criar e atribuir uma função empresarial personalizada",
                "Atribuir Admin em um repositório",
                "Nomear o usuário mantenedor de equipe da organização"
            ],
            "explanations": [
                "Permissões básicas da organização afetam repositórios, não a administração empresarial.",
                "Funções empresariais personalizadas definem permissões empresariais selecionadas.",
                "Admin de repositório não controla configurações empresariais.",
                "Manter uma equipe não concede permissões de configurações empresariais."
            ],
            "concept": "Delegação empresarial granular",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-033": {
            "prompt": "Qual recurso do GitHub Enterprise Cloud agrupa usuários centralmente para atribuir funções empresariais e acesso a várias organizações?",
            "choices": [
                "Lista de colaboradores do repositório",
                "Permissão básica da organização",
                "Enterprise team",
                "Projeto da organização"
            ],
            "explanations": [
                "A lista de colaboradores se limita a um repositório.",
                "Permissões básicas são um nível padrão, não um grupo central.",
                "Equipes empresariais podem receber funções empresariais e ser adicionadas a organizações.",
                "Projetos organizam trabalho, não associação e funções empresariais."
            ],
            "concept": "Finalidade da equipe empresarial",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-034": {
            "prompt": "Um proprietário empresarial quer criar uma equipe empresarial na interface em inglês do GitHub Enterprise Cloud. Qual caminho é documentado?",
            "choices": [
                "Organization Settings → Member privileges → Create Enterprise team",
                "Repository Settings → Collaborators & teams → Create Enterprise team",
                "Enterprise Settings → Authentication security → Create Enterprise team",
                "Enterprise People → Enterprise teams → Create Enterprise team"
            ],
            "explanations": [
                "Privilégios de membros da organização não criam equipes empresariais.",
                "Administrar colaboradores do repositório não cria equipes empresariais.",
                "Authentication security configura requisitos de acesso, não cria equipes.",
                "A aba People empresarial contém Enterprise teams e seu controle de criação."
            ],
            "concept": "Navegação para equipes empresariais",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-035": {
            "prompt": "Quando uma equipe empresarial recebe acesso a uma organização no GitHub Enterprise Cloud, qual acesso inicial aos repositórios seus membros recebem por essa associação?",
            "choices": [
                "As permissões básicas de repositório da organização",
                "Admin em todos os repositórios da organização",
                "Write em todos os repositórios da organização",
                "Nenhuma associação até aceitarem convites"
            ],
            "explanations": [
                "Membros são adicionados diretamente e recebem o nível básico da organização.",
                "O acesso da equipe não concede Admin automaticamente.",
                "Write não é automático, salvo quando é o nível básico ou concedido separadamente.",
                "O fluxo documentado adiciona membros sem convites."
            ],
            "concept": "Acesso de equipes empresariais a organizações",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-036": {
            "prompt": "Qual é o efeito documentado de remover alguém de uma equipe empresarial no GitHub Enterprise Cloud?",
            "choices": [
                "Todas as concessões independentes de repositório são revogadas",
                "Os privilégios concedidos pela equipe são removidos",
                "A conta é excluída do GitHub",
                "O usuário é removido da conta empresarial"
            ],
            "explanations": [
                "Concessões independentes não são revogadas automaticamente por essa alteração.",
                "A remoção retira os privilégios associados àquela equipe.",
                "Sair da equipe não exclui a conta do usuário.",
                "Remover a associação à equipe não remove, por si só, a associação empresarial."
            ],
            "concept": "Escopo de desligamento de equipes empresariais",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-037": {
            "prompt": "Em uma empresa com EMU, como alterações em um grupo do IdP são propagadas aos membros de uma equipe empresarial vinculada?",
            "choices": [
                "Por autenticação com certificados SSH",
                "Por autenticação WebAuthn",
                "Por sincronização SCIM",
                "Apenas por asserções SAML"
            ],
            "explanations": [
                "Certificados SSH autenticam conexões, não provisionam membros de equipes.",
                "WebAuthn verifica a autenticação, não sincroniza grupos.",
                "A sincronização de grupos de equipes empresariais EMU usa SCIM.",
                "Asserções SAML autenticam usuários, não sincronizam essas associações."
            ],
            "concept": "Sincronização de equipes empresariais EMU",
            "hints": [
                "Diferencie autenticação, provisionamento e associação a grupos.",
                "Identifique qual sistema fornece as informações de que o GitHub precisa."
            ]
        },
        "admin-038": {
            "prompt": "Uma equipe empresarial é adicionada a uma organização no GitHub Enterprise Cloud. Administradores da organização podem remover permissões concedidas à equipe por administradores empresariais?",
            "choices": [
                "Sim; qualquer proprietário da organização pode anular concessões empresariais",
                "Sim; atribuir Read sempre cancela concessões empresariais",
                "Não; administradores da organização não podem conceder acesso adicional à equipe",
                "Não; permissões empresariais não podem ser removidas no nível da organização"
            ],
            "explanations": [
                "Ser proprietário da organização não autoriza remover essas concessões herdadas.",
                "Uma concessão local menor não cancela permissões empresariais superiores.",
                "Eles podem conceder acesso adicional e funções da organização.",
                "Administradores da organização não podem remover permissões da equipe concedidas pela empresa."
            ],
            "concept": "Herança de permissões de equipes empresariais",
            "hints": [
                "Identifique qual nível administrativo controla a configuração.",
                "Considere os requisitos herdados e as configurações locais."
            ]
        },
        "admin-039": {
            "prompt": "Um administrador de repositório do GitHub Enterprise Cloud audita quem tem acesso a um repositório privado da organização. Qual área da interface em inglês lista seus colaboradores e equipes?",
            "choices": [
                "Repository Settings → Collaborators & teams",
                "Repository Settings → Webhooks",
                "Organization Settings → Authentication security",
                "Organization Settings → Member privileges"
            ],
            "explanations": [
                "Collaborators & teams é a área de gerenciamento de acesso ao repositório.",
                "Webhooks lista integrações de entrega de eventos.",
                "Authentication security trata de requisitos de autenticação, não da lista de acesso do repositório.",
                "Member privileges define padrões gerais da organização, não lista as concessões deste repositório."
            ],
            "concept": "Auditoria de acesso ao repositório",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-040": {
            "prompt": "A quem se aplicam as permissões básicas de repositório de uma organização?",
            "choices": [
                "Aos membros de todas as organizações da empresa",
                "Aos membros dessa organização",
                "A todos os colaboradores externos",
                "A todos os usuários do GitHub.com"
            ],
            "explanations": [
                "Pertencer a outra organização não concede essas permissões básicas.",
                "As permissões básicas se aplicam a membros dessa organização.",
                "Colaboradores externos ficam explicitamente fora desse escopo.",
                "Configurações da organização não concedem acesso a todos os usuários do GitHub."
            ],
            "concept": "Destinatários das permissões básicas",
            "hints": [
                "Examine todas as origens de associação e permissões.",
                "Diferencie os limites de empresa, organização, equipe e repositório."
            ]
        },
        "admin-041": {
            "prompt": "No GitHub Enterprise Cloud, dois rulesets ativos se aplicam à mesma branch e exigem quantidades diferentes de aprovações. Para um colaborador sem bypass, qual requisito se aplica?",
            "choices": [
                "Apenas o ruleset do repositório",
                "O requisito de revisão menos restritivo",
                "O requisito de revisão mais restritivo",
                "Apenas o ruleset criado mais recentemente"
            ],
            "explanations": [
                "Um ruleset local não substitui os demais aplicáveis.",
                "O requisito mais fraco não anula o mais forte.",
                "As regras aplicáveis são agregadas, e prevalece a versão mais restritiva da mesma regra.",
                "Rulesets não têm prioridade por data de criação."
            ],
            "concept": "Agregação de rulesets",
            "hints": [
                "Identifique qual nível administrativo controla a configuração.",
                "Considere os requisitos herdados e as configurações locais."
            ]
        },
        "admin-042": {
            "prompt": "Qual é o acesso mínimo ao repositório necessário para visualizar seus rulesets ativos no GitHub Enterprise Cloud?",
            "choices": [
                "Triage",
                "Maintain",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Triage é mais acesso do que o necessário para visualizar rulesets.",
                "Maintain é desnecessário para visualizar regras ativas.",
                "Admin é necessário para muitas alterações, não para consultar rulesets ativos.",
                "Qualquer pessoa com Read pode visualizar os rulesets ativos do repositório."
            ],
            "concept": "Visibilidade de rulesets para auditores",
            "hints": [
                "Identifique o menor conjunto de capacidades exigido pela tarefa.",
                "Diferencie leitura, contribuição, manutenção e administração."
            ]
        },
        "admin-043": {
            "prompt": "Um proprietário do GitHub Enterprise Cloud impõe uma política que restringe alterações de visibilidade dos repositórios nas organizações. Quem pode flexibilizar essa restrição empresarial?",
            "choices": [
                "Um proprietário empresarial alterando a política empresarial",
                "Um proprietário da organização alterando uma preferência local",
                "Um administrador de repositório alterando suas configurações",
                "Um mantenedor de equipe alterando seus membros"
            ],
            "explanations": [
                "A restrição é controlada e imposta no nível empresarial.",
                "Uma organização não pode anular uma política empresarial obrigatória.",
                "Administrar um repositório não permite contornar essa política.",
                "Gerenciar equipes não controla políticas empresariais."
            ],
            "concept": "Autoridade de políticas empresariais",
            "hints": [
                "Identifique qual nível administrativo controla a configuração.",
                "Considere os requisitos herdados e as configurações locais."
            ]
        },
        "admin-044": {
            "prompt": "Qual implantação permite hospedar o GitHub no próprio datacenter da empresa ou em um ambiente de nuvem compatível?",
            "choices": [
                "GitHub Enterprise Cloud com residência de dados",
                "GitHub Enterprise Server",
                "GitHub Enterprise Cloud com contas pessoais",
                "GitHub Enterprise Cloud com EMU"
            ],
            "explanations": [
                "A residência de dados oferece hospedagem regional, não uma instalação autogerenciada.",
                "O GitHub Enterprise Server é hospedado em infraestrutura gerenciada pelo cliente.",
                "Cloud com contas pessoais continua sendo um serviço operado pelo GitHub.",
                "Cloud com EMU muda o controle de identidade, não a propriedade da infraestrutura."
            ],
            "concept": "Implantação auto-hospedada",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-045": {
            "prompt": "Qual tarefa operacional é realizada pelo GitHub, em vez do cliente, ao usar GitHub Enterprise Cloud no lugar do GitHub Enterprise Server?",
            "choices": [
                "Definir os padrões de revisão da organização",
                "Atribuir administradores de cobrança empresarial",
                "Manter e atualizar a plataforma hospedada",
                "Escolher os colaboradores do repositório"
            ],
            "explanations": [
                "O cliente continua definindo seus processos de desenvolvimento.",
                "O cliente continua escolhendo seus administradores empresariais.",
                "O GitHub opera Cloud, dispensando o cliente de gerenciar atualizações da plataforma.",
                "O cliente continua gerenciando o acesso ao repositório."
            ],
            "concept": "Limite operacional do Cloud",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-046": {
            "prompt": "Uma empresa precisa de hospedagem operada pelo GitHub no GitHub.com e ciclos de vida de contas controlados pelo IdP, sem escolher residência regional dos dados. Qual implantação atende?",
            "choices": [
                "GitHub Enterprise Cloud com contas pessoais",
                "GitHub Enterprise Server com contas locais",
                "GitHub Enterprise Server com autenticação SAML",
                "GitHub Enterprise Cloud com EMU no GitHub.com"
            ],
            "explanations": [
                "Contas pessoais continuam pertencendo a cada indivíduo.",
                "Server é hospedado pelo cliente, e contas locais não atendem ao ciclo de vida exigido.",
                "SAML no Server não o torna um serviço Cloud operado pelo GitHub.",
                "EMU está disponível no GitHub.com e oferece contas gerenciadas pelo IdP."
            ],
            "concept": "Implantação Cloud com identidade gerenciada",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-047": {
            "prompt": "Qual combinação é necessária para GitHub Enterprise Cloud com residência de dados?",
            "choices": [
                "Enterprise Managed Users em um subdomínio dedicado do GHE.com",
                "Contas pessoais em uma organização dedicada do GitHub.com",
                "Contas locais em uma instalação GHES hospedada pelo cliente",
                "Contas pessoais em um domínio personalizado arbitrário do GitHub.com"
            ],
            "explanations": [
                "Empresas Cloud com residência de dados usam EMU e um subdomínio dedicado do GHE.com.",
                "Uma organização GitHub.com com contas pessoais não é esse modelo.",
                "GHES é uma implantação auto-hospedada distinta.",
                "Um domínio arbitrário não estabelece uma empresa Cloud com residência de dados."
            ],
            "concept": "Identidade e hospedagem com residência de dados",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-048": {
            "prompt": "O que a adoção do EMU exige em uma empresa existente do GitHub.com que usa contas pessoais?",
            "choices": [
                "Atribuir uma função de gerente de cobrança",
                "Migrar para uma nova conta empresarial",
                "Converter cada conta pessoal na mesma empresa",
                "Alterar a visibilidade dos repositórios para internal"
            ],
            "explanations": [
                "Atribuir funções de cobrança não muda o modelo de contas.",
                "O GitHub documenta a migração para uma nova conta empresarial para mudar esse modelo.",
                "Contas pessoais existentes não são convertidas diretamente em gerenciadas.",
                "Alterar a visibilidade não muda o tipo de identidade empresarial."
            ],
            "concept": "Migração do modelo de identidade",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-049": {
            "prompt": "Em uma implantação combinada de GitHub Enterprise Cloud e Server, como a maioria das políticas administrativas é gerenciada?",
            "choices": [
                "Exclusivamente no Management Console do Server para ambas as implantações",
                "Automaticamente pela sincronização do uso de licenças",
                "Separadamente em cada conta empresarial",
                "Exclusivamente na conta Cloud para ambas as implantações"
            ],
            "explanations": [
                "O Management Console do Server não administra políticas do Cloud.",
                "Sincronizar licenças não sincroniza políticas empresariais.",
                "A maior parte da administração, incluindo políticas, continua separada por conta.",
                "A conta Cloud não administra universalmente as políticas do Server."
            ],
            "concept": "Limites da administração híbrida",
            "hints": [
                "Diferencie a responsabilidade pela hospedagem do modelo de identidade.",
                "Considere separadamente localização dos dados, operações e colaboração."
            ]
        },
        "admin-050": {
            "prompt": "Um repositório é transferido entre organizações do GitHub.com, e ninguém reutiliza o endereço antigo. O que acontece se um clone fizer fetch pela URL remota antiga?",
            "choices": [
                "O fetch falha até baixar novamente todo o histórico do clone.",
                "A URL antiga vira uma cópia independente e permanente do repositório.",
                "A URL antiga concede acesso independentemente das novas permissões.",
                "O Git redireciona ao novo endereço; ainda é recomendado atualizar origin."
            ],
            "explanations": [
                "A transferência preserva o histórico Git e redireciona a URL antiga.",
                "O endereço antigo redireciona; ele não é uma segunda cópia do repositório.",
                "O redirecionamento não ignora a autenticação nem a autorização do repositório.",
                "Solicitações clone, fetch e push são redirecionadas, mas a URL nova evita depender disso."
            ],
            "concept": "Transferências redirecionam URLs Git sem ignorar verificações de acesso.",
            "hints": [
                "Diferencie a localização do repositório de seu histórico Git.",
                "Considere se um redirecionamento também altera a autorização."
            ]
        },
        "admin-051": {
            "prompt": "Um erro reproduzível do produto GitHub Enterprise Cloud persiste após verificar a configuração. Quais evidências mais ajudam o engenheiro de suporte autorizado a reproduzi-lo?",
            "choices": [
                "Etapas, erros exatos, URLs afetadas e resultados esperados",
                "Datas de contrato, quantidades de licenças e números de faturas",
                "Nomes de equipe, cargos e dados do contato de cobrança",
                "Quantidades de repositórios, datas de renovação e ordens de compra"
            ],
            "explanations": [
                "Esses dados identificam o comportamento com falha e como reproduzi-lo.",
                "Dados comerciais não descrevem o comportamento com falha.",
                "Dados de contato administrativos não fornecem instruções de reprodução.",
                "Inventário e dados de compras não reproduzem o erro."
            ],
            "concept": "Escalonamento útil ao suporte",
            "hints": [
                "Diferencie configurações do cliente de falhas do produto ou serviço.",
                "Associe as evidências e o direito a suporte ao ambiente afetado."
            ]
        },
        "admin-052": {
            "prompt": "Por que o GitHub Support pode pedir diagnósticos e um pacote de suporte a um administrador do GitHub Enterprise Server?",
            "choices": [
                "O pacote altera automaticamente a configuração da instância",
                "O suporte não tem acesso direto ao ambiente do cliente",
                "Os pacotes substituem o contrato de licenciamento da empresa",
                "Os diagnósticos concedem acesso administrativo permanente ao suporte"
            ],
            "explanations": [
                "Gerar um pacote coleta informações, não reconfigura a instância.",
                "Administradores fornecem informações do ambiente e logs para investigação.",
                "Pacotes fornecem evidências técnicas, não direitos de licença.",
                "Arquivos de diagnóstico não concedem acesso administrativo persistente."
            ],
            "concept": "Limite de evidências para suporte do Server",
            "hints": [
                "Diferencie configurações do cliente de falhas do produto ou serviço.",
                "Associe as evidências e o direito a suporte ao ambiente afetado."
            ]
        },
        "admin-053": {
            "prompt": "No GitHub Enterprise Server 3.19, qual artefato oferece um resumo em texto simples das configurações e do ambiente da instância?",
            "choices": [
                "Pacote de suporte estendido",
                "Arquivo de código-fonte do repositório",
                "Arquivo de diagnóstico",
                "Pacote de suporte"
            ],
            "explanations": [
                "Um pacote estendido também é um arquivo compactado com mais histórico de logs.",
                "O arquivo de código contém arquivos do repositório, não diagnósticos da instância.",
                "O arquivo de diagnóstico resume as configurações e o ambiente.",
                "Um pacote de suporte é um arquivo compactado com diagnósticos e logs sanitizados."
            ],
            "concept": "Arquivo de diagnóstico do Server",
            "hints": [
                "Considere se são necessárias apenas configurações ou também logs.",
                "Verifique a topologia e a interface administrativa documentada."
            ]
        },
        "admin-054": {
            "prompt": "O que um pacote de suporte do GitHub Enterprise Server 3.19 acrescenta em relação a um arquivo de diagnóstico isolado?",
            "choices": [
                "Um backup completo de repositórios para recuperação de desastres",
                "Uma exportação do código-fonte de todos os repositórios",
                "Uma exportação de membros da organização sem logs da instância",
                "Logs sanitizados da instância junto com diagnósticos"
            ],
            "explanations": [
                "Um pacote de suporte não é um backup para recuperação de desastres.",
                "Sua finalidade é coletar evidências de diagnóstico, não exportar todo o código.",
                "Dados de membros por si só omitem os logs do pacote.",
                "Os pacotes combinam diagnósticos e logs sanitizados relevantes."
            ],
            "concept": "Conteúdo do pacote de suporte",
            "hints": [
                "Considere se são necessárias apenas configurações ou também logs.",
                "Verifique a topologia e a interface administrativa documentada."
            ]
        },
        "admin-055": {
            "prompt": "Um administrador tem uma sessão SSH administrativa no GitHub Enterprise Server 3.19. Qual utilitário obtém as informações de diagnóstico da instância?",
            "choices": [
                "ghe-diagnostics",
                "ghe-support-bundle",
                "ghe-cluster-support-bundle",
                "git archive"
            ],
            "explanations": [
                "ghe-diagnostics gera informações de diagnóstico da instância.",
                "ghe-support-bundle coleta um pacote de suporte, não apenas diagnósticos.",
                "O utilitário de cluster coleta um pacote específico para essa topologia.",
                "git archive empacota conteúdo do repositório, não diagnósticos da instância."
            ],
            "concept": "Utilitário de diagnóstico do Server",
            "hints": [
                "Considere se são necessárias apenas configurações ou também logs.",
                "Verifique a topologia e a interface administrativa documentada."
            ]
        },
        "admin-056": {
            "prompt": "Para uma instância independente do GitHub Enterprise Server 3.19, qual comando SSH documentado baixa um pacote de suporte para a máquina local?",
            "choices": [
                "git bundle create repository.bundle --all",
                "ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz",
                "ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt",
                "git archive --format=tar HEAD > repository.tar"
            ],
            "explanations": [
                "git bundle exporta objetos Git, não diagnósticos e logs da instância.",
                "Esse comando SSH administrativo transmite o pacote para um arquivo local.",
                "Esse comando baixa diagnósticos sem os logs do pacote de suporte.",
                "git archive exporta código do repositório, não um pacote do Server."
            ],
            "concept": "Baixar um pacote de suporte do Server",
            "hints": [
                "Considere se são necessárias apenas configurações ou também logs.",
                "Verifique a topologia e a interface administrativa documentada."
            ]
        },
        "admin-057": {
            "prompt": "Qual utilitário de pacotes de suporte é documentado para instâncias do GitHub Enterprise Server 3.19 com cluster ou replicação geográfica?",
            "choices": [
                "git bundle",
                "git archive",
                "ghe-cluster-support-bundle",
                "ghe-diagnostics"
            ],
            "explanations": [
                "git bundle transporta objetos Git.",
                "git archive exporta a árvore de um repositório.",
                "O utilitário de cluster é documentado para clusters e replicação geográfica.",
                "ghe-diagnostics gera diagnósticos, não o pacote para toda a topologia."
            ],
            "concept": "Coleta de suporte conforme a topologia",
            "hints": [
                "Considere se são necessárias apenas configurações ou também logs.",
                "Verifique a topologia e a interface administrativa documentada."
            ]
        },
        "admin-058": {
            "prompt": "Um administrador acessa o Management Console do GitHub Enterprise Server 3.19, mas não o SSH. Qual caminho da interface em inglês baixa diagnósticos?",
            "choices": [
                "Management Console → Support → Download support bundle",
                "Repository Settings → Collaborators & teams",
                "Organization Settings → Authentication security",
                "Management Console → Support → Download diagnostics info"
            ],
            "explanations": [
                "Essa opção baixa um pacote com logs, não o diagnóstico isolado solicitado.",
                "A administração de acesso ao repositório não gera diagnósticos da instância.",
                "Configurações de autenticação da organização não exportam diagnósticos do Server.",
                "A aba Support oferece Download diagnostics info sem precisar de SSH."
            ],
            "concept": "Diagnósticos do Management Console",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-059": {
            "prompt": "Para um cliente empresarial, o que é GitHub Premium Support?",
            "choices": [
                "Um nível adicional pago com compromissos de suporte adicionais",
                "O suporte Enterprise padrão incluído com as licenças de usuário",
                "Um serviço profissional limitado à consultoria de implantação",
                "Um fórum comunitário dedicado à administração empresarial"
            ],
            "explanations": [
                "Premium Support complementa o suporte Enterprise com compromissos conforme o plano.",
                "O suporte Enterprise incluído não é a oferta adicional Premium.",
                "Premium Support é um nível de suporte, não apenas um projeto de implantação.",
                "Fóruns não fornecem os compromissos de serviço do Premium Support."
            ],
            "concept": "Níveis de suporte empresarial",
            "hints": [
                "Diferencie configurações do cliente de falhas do produto ou serviço.",
                "Associe as evidências e o direito a suporte ao ambiente afetado."
            ]
        },
        "admin-060": {
            "prompt": "Um cliente do GitHub Enterprise Cloud com Premium Support enfrenta erros críticos do serviço que bloqueiam fluxos de produção e afetam diretamente o negócio. Qual prioridade documentada corresponde ao ticket?",
            "choices": [
                "Low",
                "Urgent",
                "High",
                "Normal"
            ],
            "explanations": [
                "Low cobre perguntas e sugestões sem urgência.",
                "Urgent cobre falhas críticas de produção com impacto direto no negócio para clientes Premium Support.",
                "High cobre os casos documentados de conta ou segurança com impacto limitado.",
                "Normal cobre problemas limitados ou moderados e perguntas gerais."
            ],
            "concept": "Prioridade de incidentes com Premium Support",
            "hints": [
                "Diferencie configurações do cliente de falhas do produto ou serviço.",
                "Associe as evidências e o direito a suporte ao ambiente afetado."
            ]
        },
        "admin-061": {
            "prompt": "Um administrador quer que alterações na branch padrão cheguem por pull requests, não por pushes diretos. Qual regra de ruleset de branch estabelece esse padrão?",
            "choices": [
                "Require linear history",
                "Block force pushes",
                "Require a pull request before merging",
                "Require signed commits"
            ],
            "explanations": [
                "O histórico linear restringe a estrutura de merges, não o caminho de contribuição.",
                "Bloquear pushes forçados não impede pushes diretos comuns.",
                "A regra exige que alterações estejam associadas a um pull request, sujeita às configurações de bypass.",
                "Assinaturas verificam commits, mas não exigem pull requests."
            ],
            "concept": "Padrão de branches com pull requests",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-062": {
            "prompt": "Qual arquivo de repositório atribui a pessoas ou equipes da organização a responsabilidade por revisar alterações em caminhos correspondentes?",
            "choices": [
                "CONTRIBUTING.md",
                "SECURITY.md",
                "README.md",
                "CODEOWNERS"
            ],
            "explanations": [
                "CONTRIBUTING.md descreve diretrizes sem atribuir revisores por caminho.",
                "SECURITY.md descreve a política para relatar problemas de segurança.",
                "README.md apresenta o projeto, não define o encaminhamento de revisões.",
                "CODEOWNERS vincula caminhos a responsáveis e solicita revisões em pull requests elegíveis."
            ],
            "concept": "Responsabilidade de revisão por caminho",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-063": {
            "prompt": "Um repositório tem CODEOWNERS, mas a aprovação dos responsáveis precisa ser obrigatória antes de integrar alterações protegidas. Qual controle adicional é necessário?",
            "choices": [
                "Exigir revisão de code owners na proteção de branch ou ruleset",
                "Adicionar os responsáveis aos observadores do repositório",
                "Mencionar os responsáveis apenas no template do pull request",
                "Dar aos responsáveis uma assinatura de notificações do repositório"
            ],
            "explanations": [
                "CODEOWNERS solicita revisões; uma regra obrigatória exige a aprovação.",
                "Observar altera notificações, não requisitos de integração.",
                "Uma menção no template não exige aprovação.",
                "Assinaturas não impõem condições de integração."
            ],
            "concept": "Exigir aprovação dos responsáveis pelo código",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-064": {
            "prompt": "O que vincula uma release do GitHub a um ponto específico do histórico do repositório?",
            "choices": [
                "Um marco do projeto",
                "Uma tag Git",
                "A ponta móvel de uma branch",
                "Um número de pull request"
            ],
            "explanations": [
                "Um marco agrupa trabalho, não localiza uma release no histórico Git.",
                "Releases se baseiam em tags Git que marcam pontos do histórico.",
                "A ponta muda quando chegam commits e não é a referência de versão da release.",
                "O número identifica uma alteração proposta, não a tag da release."
            ],
            "concept": "Referência de versões publicadas",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-065": {
            "prompt": "No editor de releases do GitHub em inglês, qual controle preserva uma release inacabada para continuar depois, em vez de publicá-la?",
            "choices": [
                "Generate release notes",
                "This is a pre-release",
                "Save draft",
                "Publish release"
            ],
            "explanations": [
                "Gerar notas prepara texto sem salvar a release como rascunho.",
                "Marcar uma pré-release não equivale a mantê-la sem publicação.",
                "Save draft mantém a release para continuar a preparação.",
                "Publish release publica a release para seu público permitido."
            ],
            "concept": "Estado de preparação da release",
            "hints": [
                "Comece no escopo administrativo indicado na pergunta.",
                "Associe a finalidade da configuração, não apenas um rótulo conhecido."
            ]
        },
        "admin-066": {
            "prompt": "Qual mecanismo fornece orientações reutilizáveis ou estrutura ao criar issues e pull requests?",
            "choices": [
                "Tags de tópicos do repositório",
                "Atribuições de caminhos de CODEOWNERS",
                "Descrições de marcos do projeto",
                "Templates de issues e pull requests"
            ],
            "explanations": [
                "Tópicos classificam repositórios, não estruturam novas contribuições.",
                "CODEOWNERS encaminha revisões, não estrutura descrições.",
                "Marcos agrupam trabalho, não fornecem templates de criação.",
                "Templates estruturam as informações fornecidas ao criar issues e pull requests."
            ],
            "concept": "Recebimento padronizado de contribuições",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-067": {
            "prompt": "Qual abordagem compartilha um workflow CI com vários jobs, mantido centralmente, entre repositórios sem copiar sua implementação para cada chamador?",
            "choices": [
                "Chamar um workflow reutilizável",
                "Gerar cópias independentes a partir de um template de workflow",
                "Empacotar apenas uma sequência de etapas em uma ação composta",
                "Manter cópias completas separadas em cada repositório"
            ],
            "explanations": [
                "Um workflow reutilizável compartilha lógica de workflow, incluindo vários jobs.",
                "Templates criam cópias, não uma implementação compartilhada.",
                "Uma ação composta reutiliza etapas de um job, não um workflow com vários jobs.",
                "Cópias independentes duplicam a implementação e sua manutenção."
            ],
            "concept": "Padrões de processo reutilizáveis",
            "hints": [
                "Diferencie convenções escritas de controles obrigatórios.",
                "Identifique o arquivo ou a regra que rege essa etapa do desenvolvimento."
            ]
        },
        "admin-068": {
            "prompt": "Uma mesma conta do GitHub pertence a várias organizações de uma implantação do GitHub Enterprise Cloud. Como o modelo empresarial de usuários únicos conta essa pessoa?",
            "choices": [
                "Uma vez por associação a equipe",
                "Uma vez em toda a implantação empresarial",
                "Uma vez por associação a organização",
                "Uma vez por repositório com acesso Write"
            ],
            "explanations": [
                "Associações a equipes não multiplicam suas licenças empresariais.",
                "O modelo conta a pessoa uma vez entre as organizações da implantação.",
                "Pertencer a várias organizações não multiplica suas licenças.",
                "Permissões de repositório não multiplicam suas licenças empresariais."
            ],
            "concept": "Licenciamento empresarial por usuário único",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-069": {
            "prompt": "No GitHub Enterprise Cloud com contas pessoais, qual colaborador externo consome uma licença empresarial segundo o critério documentado de acesso a repositórios?",
            "choices": [
                "Um com apenas um convite pendente para repositório público",
                "Um cujo convite para repositório privado falhou",
                "Um com acesso aceito a um repositório privado que não seja fork",
                "Um com acesso apenas a repositórios públicos"
            ],
            "explanations": [
                "Um convite pendente para colaboração apenas pública não consome uma.",
                "Convites que falharam ficam excluídos do consumo.",
                "Colaboradores com acesso a repositórios privados que não são forks consomem licenças.",
                "Colaboração externa apenas pública não consome licença empresarial."
            ],
            "concept": "Escopo de licenças para colaboradores externos",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-070": {
            "prompt": "Qual par nomeia os dois modelos documentados de cobrança de licenças de usuário GitHub Enterprise?",
            "choices": [
                "Mensal e anual",
                "Cartão de crédito e fatura",
                "Cloud e Server",
                "Baseado em uso e por volume"
            ],
            "explanations": [
                "Mensal e anual descrevem frequência, não esses modelos de licença.",
                "Cartão e fatura tratam do pagamento, não de modelos de licença.",
                "Cloud e Server são implantações, não modelos de cobrança de licenças.",
                "O GitHub documenta modelos baseados em uso e por volume para licenças empresariais."
            ],
            "concept": "Modelos de cobrança de licenças empresariais",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-071": {
            "prompt": "Qual afirmação descreve corretamente a relação entre licenças de usuário e consumo de recursos pagos no GitHub Enterprise Cloud?",
            "choices": [
                "Licenças e uso faturável de recursos podem gerar cobranças",
                "As cobranças de licença sempre incluem todo o consumo de recursos pagos",
                "O consumo faturável substitui as cobranças de licença empresarial",
                "Cada associação adicional a uma organização substitui cobranças de recursos"
            ],
            "explanations": [
                "A fatura pode incluir licenças, uso de recursos pagos e produtos adicionais.",
                "As franquias incluídas não tornam todo consumo adicional gratuito.",
                "O consumo de recursos não substitui o componente de licenças.",
                "Pertencer a organizações não substitui a cobrança de recursos."
            ],
            "concept": "Licenças versus consumo de serviços",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-072": {
            "prompt": "Qual é a finalidade dos centros de custo na cobrança do GitHub Enterprise Cloud?",
            "choices": [
                "Deduplicar licenças de usuário entre Cloud e Server",
                "Atribuir gastos medidos a unidades de negócio",
                "Agrupar contratos separados de licenças empresariais",
                "Converter assinaturas por volume em licenças baseadas em uso"
            ],
            "explanations": [
                "A sincronização de licenças, não os centros, deduplica usuários entre ambientes.",
                "Centros alocam gastos medidos, não cobrança por volume ou assinatura.",
                "Centros não combinam contratos de licenças separados.",
                "Centros não alteram o modelo de cobrança de licenças."
            ],
            "concept": "Alocação empresarial de custos",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-073": {
            "prompt": "O que é necessário para deduplicar o uso de licença de uma pessoa entre GitHub Enterprise Cloud e GitHub Enterprise Server?",
            "choices": [
                "Conectar ambas as implantações ao mesmo IdP SAML apenas",
                "Unificar contatos de cobrança sem sincronizar licenças",
                "Sincronizar o uso de licenças entre ambientes",
                "Configurar nomes de usuário correspondentes sem sincronizar licenças"
            ],
            "explanations": [
                "Um IdP compartilhado não sincroniza por si só os dados de licenças.",
                "Contatos de cobrança compartilhados não estabelecem sincronização de licenças.",
                "A sincronização permite deduplicar usuários usando critérios documentados de identidade.",
                "Nomes correspondentes por si só não sincronizam o uso de licenças."
            ],
            "concept": "Sincronização de licenças entre implantações",
            "hints": [
                "Diferencie pessoas licenciadas do consumo de serviços pagos.",
                "Verifique o modelo de cobrança e o escopo antes de contar ou alocar cobranças."
            ]
        },
        "admin-074": {
            "prompt": "Uma pessoa administra um repositório e quer importar uma definição existente de ruleset pela interface de outro repositório. Qual formato de arquivo essa importação usa?",
            "choices": [
                "JSON",
                "CSV",
                "TOML",
                "SARIF"
            ],
            "explanations": [
                "A interface de importação aceita uma definição de ruleset em JSON.",
                "Tabelas CSV não são o formato de importação de rulesets.",
                "TOML não é o formato documentado para esse importador.",
                "SARIF representa resultados de análise estática, não definições de rulesets."
            ],
            "concept": "Definições de rulesets podem ser importadas de arquivos JSON.",
            "hints": [
                "Identifique o objeto transferido, não seu resultado de aplicação.",
                "Diferencie uma definição de política de um relatório de análise."
            ]
        },
        "admin-075": {
            "prompt": "Qual status de aplicação de um conjunto de regras registra possíveis violações sem bloquear operações no GitHub Enterprise Cloud?",
            "choices": [
                "Active",
                "Disabled",
                "Evaluate",
                "Archived"
            ],
            "explanations": [
                "Conjuntos Active impõem seus requisitos.",
                "Conjuntos Disabled não avaliam a atividade.",
                "Evaluate mede os efeitos sem impor as regras.",
                "Archived não é um status de aplicação de conjuntos de regras."
            ],
            "concept": "Avaliação de regras sem bloqueio",
            "hints": [
                "Diferencie observar uma política de impô-la.",
                "Uma política inativa não necessariamente coleta avaliações."
            ]
        },
        "admin-076": {
            "prompt": "Uma GitHub App de lançamento precisa de uma exceção a um conjunto de regras de branch. Qual mudança limita a exceção à integração?",
            "choices": [
                "Adicionar esse aplicativo à lista de bypass",
                "Permitir bypass ao papel de escrita",
                "Desativar a aplicação das regras para a branch",
                "Permitir bypass a todos os administradores do repositório"
            ],
            "explanations": [
                "Uma entrada específica limita o bypass ao ator da instalação.",
                "Uma exceção por papel abrange todos os seus usuários.",
                "Desativar a aplicação isenta todos os atores.",
                "Isentar todos os administradores excede a integração."
            ],
            "concept": "Exceções de regras com escopo limitado",
            "hints": [
                "Identifique o ator que realiza o lançamento.",
                "Compare exceções individuais com exceções por papel."
            ]
        },
        "admin-077": {
            "prompt": "Qual regra de branch rejeita pushes que não sejam fast-forward feitos por atores sem bypass?",
            "choices": [
                "Require linear history",
                "Restrict deletions",
                "Block force pushes",
                "Require signed commits"
            ],
            "explanations": [
                "Histórico linear impede commits de merge, não toda reescrita.",
                "Restringir exclusões protege a referência da branch.",
                "Bloquear pushes forçados impede atualizações que não sejam fast-forward.",
                "Commits assinados também podem reescrever o histórico."
            ],
            "concept": "Proteção do histórico de branches",
            "hints": [
                "Diferencie o formato dos commits das atualizações de referências.",
                "Um histórico assinado também pode ser reescrito."
            ]
        },
        "admin-078": {
            "prompt": "Qual configuração de revisão invalida aprovações anteriores quando um push altera o diff do pull request?",
            "choices": [
                "Dismiss stale pull request approvals when new commits are pushed",
                "Require review from Code Owners",
                "Require conversation resolution before merging",
                "Require approval of the most recent reviewable push"
            ],
            "explanations": [
                "Descartar revisões obsoletas remove aprovações do diff anterior.",
                "A revisão de responsáveis seleciona os revisores adequados.",
                "Resolver conversas trata dos tópicos de discussão.",
                "Aprovar o último push pode preservar aprovações anteriores."
            ],
            "concept": "Descarte de aprovações obsoletas",
            "hints": [
                "Considere se as aprovações são removidas ou complementadas.",
                "Pense no que muda quando o diff revisado é alterado."
            ]
        },
        "admin-079": {
            "prompt": "Qual atributo de uma verificação de status obrigatória restringe os resultados aceitos a uma GitHub App instalada específica?",
            "choices": [
                "O nome da verificação",
                "A origem esperada",
                "O nome do arquivo de workflow",
                "O padrão de seleção de branches"
            ],
            "explanations": [
                "O nome de uma verificação não comprova seu produtor.",
                "A origem esperada vincula a verificação ao aplicativo escolhido.",
                "Um nome de arquivo não é o produtor autenticado da verificação.",
                "Padrões selecionam branches, não produtores de verificações."
            ],
            "concept": "Origem de verificações obrigatórias",
            "hints": [
                "O nome de uma verificação não comprova seu produtor.",
                "Procure a configuração que restringe a origem do resultado."
            ]
        },
        "admin-080": {
            "prompt": "Qual regra de branch exige assinaturas verificadas criptograficamente nos commits?",
            "choices": [
                "Require signed commits",
                "Require linear history",
                "Require a pull request before merging",
                "Require status checks to pass"
            ],
            "explanations": [
                "Essa regra exige assinaturas verificadas nos commits.",
                "Histórico linear exclui commits de merge sem verificar assinaturas.",
                "Exigir um pull request controla o processo de merge.",
                "Verificações de status não verificam assinaturas por si só."
            ],
            "concept": "Exigência de assinaturas de commits",
            "hints": [
                "Diferencie evidências de autoria de aprovações de revisão.",
                "Considere qual controle atua em cada commit."
            ]
        },
        "admin-081": {
            "prompt": "No GitHub Enterprise Cloud, qual regra de push bloqueia arquivos sob um padrão de diretório proibido na rede de forks de um repositório privado?",
            "choices": [
                "Restrict file extensions",
                "Restrict file path length",
                "Restrict file size",
                "Restrict file paths"
            ],
            "explanations": [
                "Restringir extensões compara sufixos, não padrões de diretório.",
                "Restringir comprimento mede caracteres, não a identidade do diretório.",
                "Restringir tamanho mede o tamanho do arquivo.",
                "Restringir caminhos compara padrões de caminhos proibidos."
            ],
            "concept": "Restrições de push por caminho",
            "hints": [
                "Relacione a regra à propriedade proibida.",
                "O nome de um diretório não é um limite de tamanho."
            ]
        },
        "admin-082": {
            "prompt": "Qual política de repositórios da enterprise controla se repositórios privados e internos podem ter forks no GitHub Enterprise Cloud?",
            "choices": [
                "Política de forks de repositórios",
                "Política de criação de repositórios",
                "Política de visibilidade de repositórios",
                "Política de transferência de repositórios"
            ],
            "explanations": [
                "A política de forks controla forks privados e internos.",
                "A política de criação controla quem pode criar repositórios.",
                "A política de visibilidade controla mudanças de visibilidade.",
                "A política de transferência regula mudanças de proprietário."
            ],
            "concept": "Políticas empresariais de proteção de dados",
            "hints": [
                "Identifique a operação que cria uma cópia relacionada.",
                "Não confunda copiar com transferir a propriedade."
            ]
        },
        "admin-083": {
            "prompt": "O endereço de um usuário está na lista de IPs permitidos do GitHub Enterprise Cloud. Que acesso isso, isoladamente, concede a repositórios privados?",
            "choices": [
                "Leitura em toda a enterprise",
                "Escrita na organização de origem",
                "Nenhuma permissão adicional de repositório",
                "Leitura nos repositórios listados explicitamente"
            ],
            "explanations": [
                "Admitir uma rede não concede leitura em toda a enterprise.",
                "A lista de rede não atribui papéis de organização.",
                "A autorização do repositório continua sendo necessária separadamente.",
                "Entradas de IP descrevem redes, não permissões de repositório."
            ],
            "concept": "Controles de rede versus autorização",
            "hints": [
                "Diferencie a origem de uma solicitação de quem pode acessar os dados.",
                "A condição de rede é apenas uma parte do controle de acesso."
            ]
        },
        "admin-084": {
            "prompt": "Na interface do GitHub.com em inglês, qual caminho de configurações permite ao proprietário da organização aplicar configurações de segurança a repositórios?",
            "choices": [
                "Settings > Member privileges",
                "Settings > Advanced Security > Configurations",
                "Settings > Authentication security",
                "Settings > Third-party access"
            ],
            "explanations": [
                "Member privileges controla capacidades de membros, não a atribuição de configurações.",
                "Configurations permite selecionar repositórios e atribuir configurações.",
                "Authentication security controla a autenticação.",
                "Third-party access controla integrações, não conjuntos de ajustes de segurança."
            ],
            "concept": "Aplicação de configurações de segurança da organização",
            "hints": [
                "Procure habilitação de segurança de repositórios, não autenticação de usuários.",
                "Diferencie acesso de integrações de cobertura de recursos."
            ]
        },
        "admin-085": {
            "prompt": "Qual opção de uma configuração de segurança impede que administradores de repositório alterem seus ajustes gerenciados quando há suporte à imposição?",
            "choices": [
                "Defini-la como configuração padrão",
                "Impor a configuração",
                "Desvinculá-la dos repositórios",
                "Aplicá-la a todos os repositórios atuais"
            ],
            "explanations": [
                "A atribuição padrão afeta repositórios novos, não direitos de alteração.",
                "A imposição restringe mudanças nos ajustes gerenciados.",
                "Desvincular remove a relação de configuração gerenciada.",
                "A aplicação ampla não impõe os ajustes gerenciados por si só."
            ],
            "concept": "Imposição de configurações de segurança",
            "hints": [
                "O escopo de atribuição e as restrições de alteração são distintos.",
                "Manter uma relação gerenciada não equivale a impedir alterações locais."
            ]
        },
        "admin-086": {
            "prompt": "Quem pode visualizar dados de segurança de todos os repositórios de uma organização pela visão geral de segurança, conforme a disponibilidade dos recursos?",
            "choices": [
                "Todos os mantenedores de repositórios",
                "Todos os membros da organização",
                "Proprietários da organização e gerentes de segurança",
                "Todos os colaboradores externos"
            ],
            "explanations": [
                "O acesso de mantenedor se limita a repositórios autorizados.",
                "Ser membro não expõe os dados de segurança de todos os repositórios.",
                "Esses papéis têm visibilidade de segurança em toda a organização.",
                "A colaboração externa não concede visibilidade em toda a organização."
            ],
            "concept": "Limites de visibilidade da visão geral de segurança",
            "hints": [
                "Considere se o papel abrange a organização ou um repositório.",
                "Acessar um repositório não implica acessar todos os alertas."
            ]
        },
        "admin-087": {
            "prompt": "Um proprietário da enterprise não vê um evento antigo não relacionado ao Git na visão padrão do log de auditoria, embora esteja dentro da retenção. O que deve alterar primeiro?",
            "choices": [
                "A branch padrão da enterprise",
                "A visibilidade do repositório",
                "O filtro de datas do log de auditoria",
                "As notificações do membro"
            ],
            "explanations": [
                "A branch padrão não controla as datas da pesquisa de auditoria.",
                "A visibilidade não é um filtro temporal de auditoria.",
                "A visão padrão abrange menos que a janela total de retenção.",
                "As notificações não ampliam as pesquisas no log."
            ],
            "concept": "Janela de pesquisa de auditoria versus retenção",
            "hints": [
                "A janela inicial pode ser menor que o histórico armazenado.",
                "Altere o escopo da pesquisa antes das políticas de segurança."
            ]
        },
        "admin-088": {
            "prompt": "Qual projeto permite reter evidências de auditoria do GitHub Enterprise Cloud além da retenção nativa do GitHub?",
            "choices": [
                "Salvar a URL de pesquisa do log",
                "Inscrever proprietários em notificações por e-mail",
                "Arquivar repositórios com maior frequência",
                "Transmitir eventos para armazenamento com retenção externa"
            ],
            "explanations": [
                "Uma URL de pesquisa não preserva os eventos subjacentes.",
                "Notificações não constituem um fluxo completo de auditoria.",
                "Arquivos de repositório preservam código, não eventos de auditoria da enterprise.",
                "O armazenamento externo pode aplicar a política de retenção própria."
            ],
            "concept": "Arquitetura de retenção de evidências de auditoria",
            "hints": [
                "Considere onde os registros de eventos vão persistir.",
                "Uma visão salva não é uma cópia retida."
            ]
        },
        "admin-089": {
            "prompt": "Qual valor permite identificar eventos do log de auditoria da enterprise realizados com um token de acesso específico?",
            "choices": [
                "O nome de exibição do proprietário do token",
                "A data de expiração do token",
                "Os escopos solicitados pelo token",
                "O hash SHA-256 do token"
            ],
            "explanations": [
                "Um nome de exibição não diferencia os tokens de um usuário.",
                "Datas de expiração não são identificadores únicos.",
                "Muitos tokens podem compartilhar os mesmos escopos.",
                "Pesquisas específicas por token usam seu hash."
            ],
            "concept": "Atribuição de auditoria por token",
            "hints": [
                "Um usuário pode ter várias credenciais.",
                "Prefira um identificador de uma credencial às suas capacidades."
            ]
        },
        "admin-090": {
            "prompt": "Uma chave de API de produção válida aparece em um alerta de detecção de segredos. Qual ação contém a exposição da credencial?",
            "choices": [
                "Revogar ou rotacionar a chave no provedor",
                "Excluir o último commit que contém a chave",
                "Fechar o alerta como resolvido",
                "Tornar o repositório somente leitura"
            ],
            "explanations": [
                "A revogação ou rotação no provedor invalida a credencial exposta.",
                "Excluir um commit não invalida credenciais copiadas.",
                "Fechar um alerta não revoga a chave.",
                "O acesso somente leitura não impede o uso da chave exposta."
            ],
            "concept": "Contenção de uma credencial vazada",
            "hints": [
                "Diferencie remover evidências de desabilitar o acesso.",
                "A credencial pode já existir fora do repositório."
            ]
        },
        "admin-091": {
            "prompt": "Qual recurso do repositório pode bloquear segredos compatíveis durante um push, antes de entrarem no repositório?",
            "choices": [
                "Proteção de push para segredos",
                "Verificações de validade de segredos",
                "Atualizações de segurança do Dependabot",
                "Configuração padrão do CodeQL"
            ],
            "explanations": [
                "A proteção de push verifica padrões de segredos compatíveis durante o envio.",
                "Verificações de validade avaliam se credenciais detectadas continuam ativas.",
                "Atualizações de segurança corrigem dependências vulneráveis.",
                "CodeQL analisa código, não fornece essa barreira de push."
            ],
            "concept": "Proteção preventiva de segredos",
            "hints": [
                "Diferencie prevenção na entrada de triagem após a detecção.",
                "Nem todo recurso de segurança é executado durante o push."
            ]
        },
        "admin-092": {
            "prompt": "Com bypass delegado habilitado, o que um colaborador sem privilégios de bypass deve fazer para enviar uma credencial de teste bloqueada?",
            "choices": [
                "Renomear a branch e tentar novamente",
                "Fechar o alerta de detecção resultante",
                "Solicitar um bypass para revisão",
                "Adicionar um comentário ao commit"
            ],
            "explanations": [
                "Alterar o nome da branch não concede privilégios de bypass.",
                "Fechar um alerta não autoriza o push bloqueado.",
                "O bypass delegado encaminha a solicitação a revisores autorizados.",
                "Um comentário de commit não concede bypass."
            ],
            "concept": "Revisão de bypass delegado para segredos",
            "hints": [
                "Considere quem pode autorizar uma exceção.",
                "A classificação do desenvolvedor não é, por si só, uma autorização."
            ]
        },
        "admin-093": {
            "prompt": "Qual capacidade de detecção de segredos reconhece o formato próprio de credenciais de uma organização quando nenhum padrão integrado o abrange?",
            "choices": [
                "Padrões personalizados",
                "Envio de dependências",
                "Conjuntos de consultas do CodeQL",
                "Verificações de validade"
            ],
            "explanations": [
                "Padrões personalizados definem regras para segredos próprios da organização.",
                "O envio de dependências inventaria dependências de software.",
                "Consultas do CodeQL analisam código, não configuram padrões de segredos.",
                "Verificações de validade testam credenciais detectadas, não definem formatos."
            ],
            "concept": "Detecção personalizada de segredos",
            "hints": [
                "O que falta é reconhecer um formato.",
                "Diferencie regras de detecção de validação de credenciais."
            ]
        },
        "admin-094": {
            "prompt": "O que uma lista vazia de alertas de detecção de segredos demonstra sobre um repositório?",
            "choices": [
                "Todas as credenciais do histórico foram revogadas",
                "Não há alertas visíveis dentro da cobertura habilitada",
                "Todos os formatos de dados sensíveis foram analisados",
                "Nenhum segredo compatível pode entrar em um commit futuro"
            ],
            "explanations": [
                "Uma lista vazia não comprova revogação no provedor.",
                "Os resultados dependem da cobertura, das configurações e do acesso.",
                "A detecção de segredos não reconhece todo formato sensível.",
                "Uma lista vazia não garante prevenção futura."
            ],
            "concept": "Limites da ausência de achados",
            "hints": [
                "A ausência de achados não comprova cobertura universal.",
                "Considere configurações, padrões compatíveis e visibilidade."
            ]
        },
        "admin-095": {
            "prompt": "Uma credencial vazada foi revogada, mas seu alerta de detecção de segredos continua aberto. O que o mantenedor deve registrar ao fechá-lo?",
            "choices": [
                "Um motivo de falso positivo porque o acesso terminou",
                "Um motivo de segredo de teste porque o token está inativo",
                "Um motivo de revogação que reflita a correção",
                "Nenhum motivo porque excluir o arquivo o fecha"
            ],
            "explanations": [
                "A revogação não torna a detecção original incorreta.",
                "Uma credencial de produção não se torna um segredo de teste.",
                "O motivo de fechamento deve refletir a revogação real.",
                "Excluir um arquivo não fecha automaticamente o alerta."
            ],
            "concept": "Resolução precisa de alertas de segredos",
            "hints": [
                "Classifique o achado original separadamente do estado atual.",
                "Registre a ação realmente realizada para corrigi-lo."
            ]
        },
        "admin-096": {
            "prompt": "Qual configuração do CodeQL escolhe linguagens e gatilhos de análise sem adicionar um arquivo de workflow personalizável ao repositório?",
            "choices": [
                "Configuração padrão",
                "Configuração em CI externa",
                "Configuração avançada",
                "Envio de dependências"
            ],
            "explanations": [
                "A configuração padrão gerencia essas escolhas sem um workflow versionado.",
                "A CI externa exige configurar o processo externo de análise.",
                "A configuração avançada usa um arquivo de workflow personalizável.",
                "O envio de dependências fornece inventário, não análises do CodeQL."
            ],
            "concept": "Configuração padrão do CodeQL",
            "hints": [
                "Compare configuração gerenciada com personalização por arquivos.",
                "A pergunta trata de análise de código, não de inventário de dependências."
            ]
        },
        "admin-097": {
            "prompt": "Um repositório precisa de comandos de build personalizados na análise do CodeQL pelo GitHub Actions. Qual configuração permite editar essas etapas?",
            "choices": [
                "Configuração padrão com outro conjunto de consultas",
                "Configuração avançada com arquivo de workflow",
                "Configuração padrão com outras etiquetas de executor",
                "Configuração padrão com outras linguagens de análise"
            ],
            "explanations": [
                "Alterar o conjunto de consultas não expõe etapas personalizadas de build.",
                "A configuração avançada permite personalizar as etapas do workflow.",
                "Etiquetas selecionam hosts de execução, não etapas personalizadas de build.",
                "Selecionar linguagens não fornece comandos personalizados de build."
            ],
            "concept": "Configuração de build personalizado do CodeQL",
            "hints": [
                "Considere onde as etapas executáveis de build são definidas.",
                "Alterar um alerta não altera a execução da análise."
            ]
        },
        "admin-098": {
            "prompt": "Qual formato de resultados permite que um analisador externo compatível envie achados para a análise de código do GitHub?",
            "choices": [
                "SPDX",
                "SARIF",
                "JUnit XML",
                "LCOV"
            ],
            "explanations": [
                "SPDX descreve listas de materiais de software.",
                "SARIF representa resultados de análise estática aceitos pela análise de código.",
                "JUnit XML normalmente descreve resultados de testes.",
                "LCOV descreve resultados de cobertura de código."
            ],
            "concept": "Intercâmbio de resultados de análise de código",
            "hints": [
                "Relacione o formato a achados de análise estática.",
                "Relatórios de inventário, testes e cobertura têm outros fins."
            ]
        },
        "admin-099": {
            "prompt": "Qual capacidade analisa código-fonte de aplicações compatíveis em busca de fluxos de dados inseguros, como injeção de SQL?",
            "choices": [
                "Alertas do Dependabot",
                "Análise de código com CodeQL",
                "Verificações de validade de segredos",
                "Revisão de dependências"
            ],
            "explanations": [
                "Alertas do Dependabot identificam vulnerabilidades conhecidas em dependências.",
                "CodeQL pode analisar fluxos entre origem e destino em código compatível.",
                "Verificações de validade avaliam credenciais detectadas.",
                "A revisão de dependências examina mudanças de dependências, não fluxos da aplicação."
            ],
            "concept": "Análise de aplicações versus cadeia de suprimentos",
            "hints": [
                "Identifique se o risco está na lógica da aplicação ou em versões de pacotes.",
                "Considere como uma entrada não confiável chega a uma operação sensível."
            ]
        },
        "admin-100": {
            "prompt": "Uma revisão demonstra que um achado da análise de código é um falso positivo. Como o mantenedor deve descartá-lo?",
            "choices": [
                "Selecionar o motivo de falso positivo e documentá-lo",
                "Excluir os arquivos de resultados do workflow",
                "Desativar a análise da linguagem",
                "Reduzir a visibilidade do repositório e executar novamente"
            ],
            "explanations": [
                "Um motivo aceito e um comentário preservam a justificativa.",
                "Excluir resultados não constitui um descarte rastreável.",
                "Desativar uma linguagem elimina a cobertura de outros achados.",
                "Alterar a visibilidade não resolve um falso positivo."
            ],
            "concept": "Descarte documentado da análise de código",
            "hints": [
                "Preserve evidências da decisão sem remover cobertura útil.",
                "A triagem deve explicar por que o achado não se aplica."
            ]
        },
        "admin-101": {
            "prompt": "Qual controle de conjuntos de regras do GitHub Enterprise Cloud pode bloquear merges por ferramenta de análise de código e limites de severidade dos alertas?",
            "choices": [
                "Require signed commits",
                "Require linear history",
                "Require deployments to succeed",
                "Require code scanning results"
            ],
            "explanations": [
                "Assinaturas verificam commits, não limites de vulnerabilidades.",
                "Histórico linear regula a estrutura dos commits.",
                "Verificações de implantação dependem do sucesso das implantações.",
                "Essa regra seleciona ferramentas e limites de severidade."
            ],
            "concept": "Barreiras de merge baseadas em segurança",
            "hints": [
                "Uma análise executada com sucesso ainda pode conter vulnerabilidades.",
                "Procure um controle que avalie achados, não apenas a execução."
            ]
        },
        "admin-102": {
            "prompt": "No GitHub Enterprise Server 3.19, qual pré-requisito é explicitamente exigido para os repositórios usarem análise de código?",
            "choices": [
                "O proprietário da organização publica todos os repositórios",
                "O proprietário vincula um repositório público do GitHub.com",
                "O administrador do site habilita a análise de código na instância",
                "O usuário autoriza uma OAuth App com escopo repo"
            ],
            "explanations": [
                "Publicar repositórios não é necessário nem adequado para código privado.",
                "Um repositório público vinculado não é esse pré-requisito do GHES.",
                "GHES exige que o administrador do site habilite a análise na instância.",
                "Uma autorização OAuth não habilita o recurso da instância."
            ],
            "concept": "Pré-requisitos de análise de código específicos do GHES",
            "hints": [
                "Diferencie administração da instância de configuração do repositório.",
                "Use documentação correspondente à versão do Server instalada."
            ]
        },
        "admin-103": {
            "prompt": "Para repositórios privados no GitHub Team, qual par de produtos cobre análise de código e detecção de segredos, respectivamente?",
            "choices": [
                "GitHub Secret Protection; GitHub Code Security",
                "GitHub Copilot Business; GitHub Code Security",
                "GitHub Code Security; GitHub Secret Protection",
                "Somente GitHub Team; GitHub Secret Protection"
            ],
            "explanations": [
                "Os produtos estão invertidos: Secret Protection trata de credenciais.",
                "Copilot Business sozinho não concede análise de código.",
                "Code Security cobre análise de código; Secret Protection, detecção de segredos.",
                "GitHub Team sozinho não inclui análise de código em repositórios privados."
            ],
            "concept": "Licenciamento atual de produtos de segurança",
            "hints": [
                "Diferencie análise de vulnerabilidades do código de detecção de credenciais.",
                "O plano básico de colaboração não concede todos os recursos de segurança."
            ]
        },
        "admin-104": {
            "prompt": "Qual capacidade do repositório fornece o inventário de dependências usado pelos alertas do Dependabot?",
            "choices": [
                "Banco de dados do CodeQL",
                "Padrões personalizados de segredos",
                "Grafo de dependências",
                "Avisos de segurança do repositório"
            ],
            "explanations": [
                "Um banco do CodeQL representa código-fonte para análise.",
                "Padrões de segredos identificam credenciais, não pacotes.",
                "Os alertas usam o grafo para identificar dependências vulneráveis.",
                "Avisos descrevem vulnerabilidades, não geram o inventário deste repositório."
            ],
            "concept": "Grafo de dependências e alertas de vulnerabilidade",
            "hints": [
                "Alertas precisam de inventário e informações de vulnerabilidades.",
                "Identifique o componente de inventário do repositório."
            ]
        },
        "admin-105": {
            "prompt": "Qual recurso do Dependabot abre pull requests para manter dependências compatíveis atualizadas mesmo sem vulnerabilidade conhecida?",
            "choices": [
                "Atualizações de versão do Dependabot",
                "Atualizações de segurança do Dependabot",
                "Revisão de dependências",
                "Alertas do Dependabot"
            ],
            "explanations": [
                "Atualizações de versão propõem atualizações periódicas de dependências.",
                "Atualizações de segurança tratam dependências vulneráveis.",
                "A revisão avalia mudanças de dependências em pull requests.",
                "Alertas notificam dependências com vulnerabilidades conhecidas."
            ],
            "concept": "Atualizações periódicas versus atualizações de segurança",
            "hints": [
                "Diferencie manutenção de versões de correção de vulnerabilidades.",
                "Uma notificação não é um pull request de atualização."
            ]
        },
        "admin-106": {
            "prompt": "Qual arquivo define ecossistemas de pacotes, diretórios e agendamentos das atualizações de versão do Dependabot?",
            "choices": [
                ".github/SECURITY.md",
                ".github/CODEOWNERS",
                ".github/dependabot.yml",
                ".github/workflows/codeql.yml"
            ],
            "explanations": [
                "SECURITY.md descreve como relatar vulnerabilidades e versões com suporte.",
                "CODEOWNERS define responsáveis por revisão.",
                "Dependabot lê a configuração de atualizações de versão desse arquivo.",
                "Um workflow do CodeQL configura análises, não agendamentos do Dependabot."
            ],
            "concept": "Local da configuração do Dependabot",
            "hints": [
                "Relacione o arquivo à automação que ele configura.",
                "Documentação de segurança difere de configuração executável."
            ]
        },
        "admin-107": {
            "prompt": "Dependabot precisa de uma credencial de registro privado. Qual armazenamento de segredos sua configuração de registro deve referenciar?",
            "choices": [
                "Um segredo do Dependabot",
                "Somente um segredo do Actions",
                "Somente um segredo do Codespaces",
                "Um segredo de webhook"
            ],
            "explanations": [
                "A autenticação de registros do Dependabot usa segredos do Dependabot.",
                "Segredos exclusivos do Actions não são fornecidos às tarefas do Dependabot.",
                "Segredos do Codespaces servem a ambientes de desenvolvimento, não a essas tarefas.",
                "Segredos de webhook autenticam entregas, não acesso a registros de pacotes."
            ],
            "concept": "Autenticação de registros do Dependabot",
            "hints": [
                "Segredos pertencem a consumidores e armazenamentos distintos.",
                "Uma credencial existente não está disponível para todos os recursos."
            ]
        },
        "admin-108": {
            "prompt": "Qual recurso mostra dependências adicionadas ou removidas por um pull request e sinaliza vulnerabilidades conhecidas nessas mudanças?",
            "choices": [
                "Criação de banco do CodeQL",
                "Revisão de alertas de segredos",
                "Revisão de dependências",
                "Publicação de avisos do repositório"
            ],
            "explanations": [
                "Criar um banco do CodeQL prepara a análise do código.",
                "A revisão de segredos trata credenciais, não diferenças de dependências.",
                "A revisão de dependências mostra mudanças e informações de vulnerabilidades associadas.",
                "Publicar avisos divulga vulnerabilidades, não revisa mudanças de dependências."
            ],
            "concept": "Risco de dependências em pull requests",
            "hints": [
                "Concentre-se nas mudanças introduzidas antes do merge.",
                "A entrada relevante é um diff de dependências, não credenciais."
            ]
        },
        "admin-109": {
            "prompt": "O mantenedor de um repositório público precisa coordenar em privado uma correção de vulnerabilidade com pesquisadores convidados. Qual recurso permite essa colaboração?",
            "choices": [
                "Uma issue pública com etiqueta de segurança",
                "O descarte de um alerta do Dependabot",
                "Uma discussão de versão publicada",
                "Um rascunho de aviso de segurança do repositório"
            ],
            "explanations": [
                "Uma issue pública expõe a vulnerabilidade antes da divulgação coordenada.",
                "Descartar alertas não cria um espaço privado de colaboração.",
                "Uma discussão publicada não oferece coordenação privada.",
                "Rascunhos de avisos permitem discussão privada e correções coordenadas."
            ],
            "concept": "Coordenação privada de vulnerabilidades",
            "hints": [
                "Escolha um fluxo de divulgação com participantes restritos.",
                "Uma etiqueta não altera a visibilidade pública."
            ]
        },
        "admin-110": {
            "prompt": "Qual arquivo do repositório documenta versões com suporte e instruções para relatar vulnerabilidades?",
            "choices": [
                "dependabot.yml",
                "CODEOWNERS",
                "SECURITY.md",
                "CODE_OF_CONDUCT.md"
            ],
            "explanations": [
                "dependabot.yml configura atualizações automatizadas de dependências.",
                "CODEOWNERS associa arquivos aos revisores responsáveis.",
                "SECURITY.md é o documento de política de segurança do repositório.",
                "CODE_OF_CONDUCT.md define normas de conduta da comunidade."
            ],
            "concept": "Política de relato de vulnerabilidades",
            "hints": [
                "Identifique orientações para pesquisadores, não ajustes de automação.",
                "Conduta da comunidade e relato de vulnerabilidades são políticas distintas."
            ]
        },
        "admin-111": {
            "prompt": "Onde o mantenedor de um repositório público pode solicitar um identificador CVE para uma vulnerabilidade que ainda não tem um?",
            "choices": [
                "Em uma regra de proteção de branch",
                "Em um aviso de segurança do repositório",
                "Em um arquivo de configuração do Dependabot",
                "Em uma pesquisa do log de auditoria"
            ],
            "explanations": [
                "A proteção de branches não atribui identificadores de vulnerabilidade.",
                "GitHub pode atribuir um CVE pelo fluxo de avisos.",
                "A configuração do Dependabot controla atualizações, não atribuições de CVE.",
                "Pesquisas de auditoria recuperam eventos, não identificadores de vulnerabilidade."
            ],
            "concept": "Atribuição de CVE pelo GitHub",
            "hints": [
                "Considere como a divulgação de vulnerabilidades é coordenada.",
                "Solicitar um identificador não é uma política de acesso ao repositório."
            ]
        },
        "admin-112": {
            "prompt": "Quais informações ajudam mais diretamente a priorizar alertas do Dependabot pelo risco de segurança?",
            "choices": [
                "Idade do alerta e popularidade do pacote",
                "Data de lançamento e frequência de atualização",
                "Severidade, possibilidade de exploração e uso",
                "Atividade do mantenedor e popularidade do repositório"
            ],
            "explanations": [
                "Idade e popularidade não estabelecem possibilidade de exploração ou impacto.",
                "Datas de lançamento sozinhas não medem a exposição.",
                "Esses sinais relacionam o impacto ao uso real.",
                "Manutenção e popularidade sozinhas não medem a exposição desta aplicação."
            ],
            "concept": "Triagem de dependências baseada em risco",
            "hints": [
                "Diferencie metadados de apresentação de evidências de exposição.",
                "O impacto isolado não descreve o uso do código afetado."
            ]
        },
        "admin-113": {
            "prompt": "Uma equipe descarta um alerta do Dependabot porque não usa o código vulnerável. Qual registro melhor apoia uma reavaliação futura?",
            "choices": [
                "A URL do alerta sem justificativa do descarte",
                "Uma versão corrigida sem evidências de aplicabilidade",
                "A versão do pacote sem motivo de descarte",
                "O motivo do descarte com evidências de uso"
            ],
            "explanations": [
                "Um link localiza o achado, mas não explica sua aceitação.",
                "Uma versão corrigida identifica a solução, não por que foi adiada.",
                "A versão do pacote sozinha não explica a decisão.",
                "Um motivo e evidências preservam a base para reavaliação."
            ],
            "concept": "Aceitação rastreável de risco de dependências",
            "hints": [
                "Futuros revisores precisam entender a decisão de aplicabilidade.",
                "Registre por que a funcionalidade afetada não está exposta."
            ]
        },
        "admin-114": {
            "prompt": "Quais responsabilidades um plano de resposta de segurança deve atribuir à equipe da enterprise, em vez de presumir que o GitHub Support as realizará?",
            "choices": [
                "Retenção legal indefinida dos dados de auditoria no GitHub",
                "Reparo da infraestrutura hospedada subjacente do GitHub",
                "Alteração da retenção nativa para um incidente",
                "Contenção, coleta de evidências e investigação do incidente"
            ],
            "explanations": [
                "GitHub Support não impõe retenções de dados de auditoria para investigações.",
                "A infraestrutura hospedada do GitHub está fora da administração do cliente.",
                "Um chamado não amplia a retenção nativa de auditoria.",
                "A organização é responsável pela resposta e preservação de suas evidências."
            ],
            "concept": "Responsabilidade na resposta a incidentes",
            "hints": [
                "Diferencie assistência sobre recursos de conduzir a investigação.",
                "Planeje a preservação de evidências antes de expirarem."
            ]
        },
        "admin-115": {
            "prompt": "Uma operação REST compatível apenas lê issues em dois repositórios da organização. Qual permissão de PAT refinado é mais adequada?",
            "choices": [
                "Contents: write",
                "Members: read",
                "Administration: write",
                "Issues: read"
            ],
            "explanations": [
                "A escrita de conteúdo não está relacionada e concede privilégios excessivos.",
                "Ler membros da organização não autoriza ler issues do repositório.",
                "A escrita de administração excede a tarefa.",
                "A leitura de issues corresponde à operação; selecione apenas os dois repositórios."
            ],
            "concept": "Privilégio mínimo de PATs refinados",
            "hints": [
                "Relacione a permissão de recurso à operação do endpoint.",
                "A seleção de repositórios e o nível de permissão limitam o acesso."
            ]
        },
        "admin-116": {
            "prompt": "Uma organização exige aprovação de PATs refinados. Quem pode aprovar a solicitação pendente de um membro?",
            "choices": [
                "Um proprietário da organização",
                "Qualquer colaborador do repositório",
                "Qualquer membro da organização",
                "O criador do token por conta própria"
            ],
            "explanations": [
                "Proprietários revisam e aprovam solicitações pendentes.",
                "Direitos de contribuição não concedem aprovação de tokens da organização.",
                "Ser membro não concede autoridade de aprovação de tokens.",
                "Criar um token não evita o requisito de aprovação."
            ],
            "concept": "Autoridade de aprovação de PATs refinados",
            "hints": [
                "Diferencie solicitar acesso de autorizá-lo.",
                "A política é aplicada no escopo da organização."
            ]
        },
        "admin-117": {
            "prompt": "Qual política da organização limita por quanto tempo tokens de acesso pessoal aplicáveis podem continuar sendo usados em seus recursos?",
            "choices": [
                "Política de arquivamento de repositórios",
                "Política de aprovação de OAuth Apps",
                "Política de sessões SAML",
                "Política de duração máxima de tokens de acesso pessoal"
            ],
            "explanations": [
                "Arquivar controla a atividade do repositório, não a idade do token.",
                "A aprovação OAuth regula aplicativos, não a duração dos PATs.",
                "A duração de sessões SAML não é uma política de expiração de PAT.",
                "Políticas de duração máxima regulam a validade dos PATs para acessar a organização."
            ],
            "concept": "Governança da expiração de tokens",
            "hints": [
                "Relacione o controle à duração das credenciais, não a sessões do navegador.",
                "Aprovação e expiração resolvem problemas distintos de governança."
            ]
        },
        "admin-118": {
            "prompt": "Na interface da organização em inglês, um proprietário abre Settings > Personal access tokens > Active tokens. Qual ação remove o acesso de um PAT refinado sem remover o usuário?",
            "choices": [
                "Remover o usuário de todas as equipes",
                "Revogar o acesso desse token à organização",
                "Excluir todas as autorizações de OAuth Apps",
                "Arquivar os repositórios afetados"
            ],
            "explanations": [
                "Remover equipes altera de forma mais ampla o acesso legítimo do usuário.",
                "A revogação afeta o acesso do token selecionado aos recursos da organização.",
                "Autorizações OAuth são distintas desse PAT.",
                "Arquivar altera o comportamento do repositório, não a autorização do token."
            ],
            "concept": "Revogação específica de tokens da organização",
            "hints": [
                "Escolha um controle sobre a credencial comprometida, não a associação pessoal.",
                "Tipos de credencial têm autorizações separadas."
            ]
        },
        "admin-119": {
            "prompt": "Qual projeto de autenticação evita vincular a automação não assistida de repositório à permanência de um funcionário?",
            "choices": [
                "O PAT clássico do funcionário",
                "O token de acesso OAuth do funcionário",
                "Um token de instalação de GitHub App",
                "O PAT refinado do funcionário"
            ],
            "explanations": [
                "Um PAT clássico depende do acesso de seu usuário.",
                "Um token OAuth de usuário continua vinculado à pessoa.",
                "A autenticação de instalação atua como aplicativo instalado, não como funcionário.",
                "Um PAT refinado também depende do acesso de seu usuário."
            ],
            "concept": "Identidade de serviço para integrações duradouras",
            "hints": [
                "A granularidade não elimina a dependência de um usuário.",
                "Identifique se o ator é uma pessoa ou uma instalação."
            ]
        },
        "admin-120": {
            "prompt": "Um membro tem identidade SAML vinculada e um PAT clássico com escopos adequados. A política permite o token, mas falta autorização de SSO. O que é necessário?",
            "choices": [
                "Autorizar o token para essa organização",
                "Desativar SAML SSO na organização",
                "Regenerar o token com todos os escopos",
                "Alterar o repositório para visibilidade interna"
            ],
            "explanations": [
                "PATs clássicos precisam de autorização para a organização com SSO.",
                "Desativar SSO enfraquece a política e não é necessário.",
                "Mais escopos não substituem a autorização de SSO.",
                "Alterar a visibilidade não fornece a autorização ausente."
            ],
            "concept": "Autorização de SSO de PATs clássicos",
            "hints": [
                "Diferencie os escopos da autorização de identidade da organização.",
                "Um token utilizável ainda pode não acessar uma organização com SSO."
            ]
        },
        "admin-121": {
            "prompt": "Qual propriedade de GitHub Apps atende uma integração que só precisa ler conteúdo de repositórios selecionados?",
            "choices": [
                "Escopo clássico repo nos repositórios do usuário",
                "Permissões refinadas e seleção de repositórios",
                "Escrita em todos os repositórios da organização instalada",
                "Acesso de proprietário herdado de seu criador"
            ],
            "explanations": [
                "O escopo clássico repo é mais amplo e pertence à autorização por escopos.",
                "GitHub Apps oferece repositórios selecionados e níveis específicos de permissão.",
                "A instalação não implica escrita em todos os repositórios.",
                "Um aplicativo não herda a propriedade da organização de seu criador."
            ],
            "concept": "Instalação de GitHub App com privilégio mínimo",
            "hints": [
                "Compare seleção de recursos com escopos amplos de usuário.",
                "A instalação e o nível de permissão são limites de acesso separados."
            ]
        },
        "admin-122": {
            "prompt": "Uma OAuth App diz que só lê código privado, mas solicita o escopo repo. Qual capacidade esse escopo realmente inclui?",
            "choices": [
                "Leitura e escrita em repositórios públicos e privados",
                "Somente leitura no repositório privado selecionado",
                "Somente acesso a metadados de repositórios públicos",
                "Somente acesso a avisos de segurança do repositório"
            ],
            "explanations": [
                "O escopo amplo repo inclui escrita, conforme o acesso do usuário.",
                "repo não é uma permissão refinada de leitura para um repositório.",
                "repo vai além de metadados públicos.",
                "repo não se limita a avisos de segurança."
            ],
            "concept": "Revisão de escopos OAuth",
            "hints": [
                "Avalie o escopo solicitado, não a descrição do fornecedor.",
                "Uma concessão de usuário não equivale a uma permissão por repositório selecionado."
            ]
        },
        "admin-123": {
            "prompt": "Qual credencial autentica solicitações REST como instalação de GitHub App após o aplicativo trocar seu JWT?",
            "choices": [
                "O segredo de webhook do aplicativo",
                "A chave pública do aplicativo",
                "Um identificador de cliente OAuth",
                "Um token de acesso de instalação"
            ],
            "explanations": [
                "Um segredo de webhook valida entregas, não chamadas de API da instalação.",
                "Uma chave pública não autoriza operações de API da instalação.",
                "Um identificador de cliente sozinho não autentica essas solicitações.",
                "O token obtido autoriza operações de API da instalação."
            ],
            "concept": "Autenticação de instalação de GitHub App",
            "hints": [
                "Diferencie identidade do aplicativo de credencial para operações do repositório.",
                "Um segredo de verificação não é um token de acesso à API."
            ]
        },
        "admin-124": {
            "prompt": "Uma GitHub App instalada solicita permissões adicionais. O que acontece se o proprietário da organização não as aprovar?",
            "choices": [
                "O aplicativo recebe imediatamente as novas permissões",
                "A instalação é desinstalada automaticamente",
                "O aplicativo mantém suas permissões atuais",
                "As permissões atuais do aplicativo são revogadas"
            ],
            "explanations": [
                "Novas permissões exigem aprovação.",
                "Não aprovar não desinstala automaticamente o aplicativo.",
                "As permissões atuais permanecem, embora novas funções possam falhar.",
                "Não aprovar uma ampliação não revoga as permissões existentes."
            ],
            "concept": "Revisão de ampliação de permissões de aplicativos",
            "hints": [
                "Uma solicitação de ampliação não é uma autorização automática.",
                "Diferencie acesso existente de novas capacidades solicitadas."
            ]
        },
        "admin-125": {
            "prompt": "Qual ação remove permanentemente o acesso autorizado de uma instalação de GitHub App a uma organização?",
            "choices": [
                "Excluir a assinatura de webhook do aplicativo",
                "Remover um repositório de sua instalação",
                "Suspender a instalação temporariamente",
                "Desinstalar o aplicativo da organização"
            ],
            "explanations": [
                "Excluir entregas de webhook não remove o acesso à API do aplicativo.",
                "Remover um repositório mantém o acesso a outros repositórios selecionados.",
                "A suspensão bloqueia o acesso temporariamente e é reversível.",
                "Desinstalar remove a instalação dessa organização."
            ],
            "concept": "Remoção de acesso de integrações",
            "hints": [
                "Diferencie desativação temporária de remoção de uma instalação.",
                "Alterar notificações não revoga a autorização."
            ]
        },
        "admin-126": {
            "prompt": "Uma solicitação REST atinge o limite com x-ratelimit-remaining: 0 e sem cabeçalho Retry-After. Qual cabeçalho indica quando a janela principal é reiniciada?",
            "choices": [
                "x-ratelimit-used",
                "x-ratelimit-reset",
                "x-ratelimit-resource",
                "x-github-request-id"
            ],
            "explanations": [
                "x-ratelimit-used informa consumo, não o horário de reinício.",
                "x-ratelimit-reset expressa o reinício em segundos desde a época UTC.",
                "x-ratelimit-resource identifica a categoria do limite.",
                "O identificador serve para rastreamento, não para agendar tentativas."
            ],
            "concept": "Recuperação do limite principal de REST",
            "hints": [
                "Use as informações de tempo do servidor, não tentativas imediatas.",
                "Contadores de consumo e horários de reinício têm funções distintas."
            ]
        },
        "admin-127": {
            "prompt": "Uma resposta REST do GitHub limitada inclui Retry-After: 60. O que o cliente deve fazer antes de tentar novamente?",
            "choices": [
                "Tentar imediatamente com outro identificador",
                "Esperar 60 solicitações bem-sucedidas terminarem",
                "Enviar 60 solicitações paralelas",
                "Esperar pelo menos 60 segundos"
            ],
            "explanations": [
                "Outro identificador não evita o limite de solicitações.",
                "O cabeçalho indica um atraso, não um número de sucessos.",
                "Novas tentativas paralelas podem piorar a limitação secundária.",
                "Retry-After indica o período mínimo de espera em segundos."
            ],
            "concept": "Tempo de nova tentativa indicado pelo servidor",
            "hints": [
                "Interprete corretamente a unidade do cabeçalho.",
                "Tentar com mais intensidade não é uma estratégia de recuperação."
            ]
        },
        "admin-128": {
            "prompt": "Um cliente REST ainda tem cota principal, mas é limitado após muitas solicitações simultâneas. Qual mecanismo pode explicar isso?",
            "choices": [
                "Limitação secundária de solicitações",
                "Expiração do token de acesso",
                "Limitação principal de solicitações REST",
                "Revogação de autorização de SSO"
            ],
            "explanations": [
                "Limites secundários podem se aplicar independentemente da cota principal.",
                "A expiração invalida credenciais, não limita rajadas de solicitações.",
                "A cota principal não foi esgotada neste caso.",
                "A revogação remove autorização, não limita a simultaneidade de solicitações."
            ],
            "concept": "Limites secundários da API",
            "hints": [
                "O contador principal não é a única proteção.",
                "Considere padrões de rajadas e trabalho simultâneo."
            ]
        },
        "admin-129": {
            "prompt": "Uma resposta REST GET inclui um ETag. Qual cabeçalho de solicitação permite verificar se essa representação mudou?",
            "choices": [
                "X-Hub-Signature-256",
                "X-GitHub-Event",
                "Retry-After",
                "If-None-Match"
            ],
            "explanations": [
                "X-Hub-Signature-256 valida assinaturas de payloads de webhook.",
                "X-GitHub-Event identifica um evento de webhook.",
                "Retry-After orienta novas tentativas em uma resposta.",
                "If-None-Match envia o ETag salvo em uma solicitação condicional."
            ],
            "concept": "Solicitações REST condicionais",
            "hints": [
                "Use um validador retornado com a representação do recurso.",
                "Um cabeçalho de webhook pertence a outro fluxo de transporte."
            ]
        },
        "admin-130": {
            "prompt": "Como a contabilização do limite REST principal difere entre o PAT de um usuário e um token de acesso de instalação de GitHub App?",
            "choices": [
                "Ambos sempre compartilham a cota do proprietário do repositório",
                "Cada PAT tem cota independente; todas as instalações compartilham a do criador",
                "O PAT usa a cota do usuário; o token de instalação usa a cota da instalação",
                "Ambos sempre têm cotas idênticas independentemente do plano"
            ],
            "explanations": [
                "Solicitações da instalação não consomem a cota de usuário do proprietário do repositório.",
                "Criar mais PATs não gera cotas de usuário separadas.",
                "Tokens de usuário e de instalação têm contabilizações distintas do limite principal.",
                "O tipo de autenticação e o contexto da enterprise podem afetar os limites."
            ],
            "concept": "Contabilização de limites de usuário e instalação",
            "hints": [
                "Determine qual identidade possui o orçamento de solicitações.",
                "Não presuma um limite numérico universal para todos os planos."
            ]
        },
        "admin-131": {
            "prompt": "Qual política da organização exige aprovação do proprietário antes de OAuth Apps acessarem seus recursos?",
            "choices": [
                "Aprovação de PATs refinados",
                "Restrições de acesso de OAuth Apps",
                "Restrições de criação de repositórios",
                "Suspensão de instalação de GitHub App"
            ],
            "explanations": [
                "A aprovação de PATs se aplica a tokens pessoais, não a OAuth Apps.",
                "Restrições OAuth regulam a aprovação do acesso OAuth de terceiros.",
                "Restringir a criação de repositórios não aprova integrações OAuth.",
                "A suspensão afeta uma instalação de GitHub App, outro modelo de aplicativo."
            ],
            "concept": "Aprovação de OAuth Apps da organização",
            "hints": [
                "Escolha a política correspondente ao modelo de autorização do aplicativo.",
                "GitHub Apps, OAuth Apps e PATs têm controles distintos."
            ]
        },
        "admin-132": {
            "prompt": "Qual verificação autentica um payload de webhook do GitHub usando seu segredo compartilhado configurado?",
            "choices": [
                "Comparar o IP do remetente com endereços permitidos",
                "Validar X-Hub-Signature-256 usando HMAC-SHA256",
                "Verificar User-Agent em relação a GitHub-Hookshot",
                "Comparar X-GitHub-Delivery com IDs de entregas anteriores"
            ],
            "explanations": [
                "Verificar somente o IP não verifica o conteúdo do payload.",
                "Um HMAC derivado do segredo verifica autenticidade e integridade.",
                "Uma string User-Agent pode ser falsificada.",
                "IDs ajudam a detectar duplicatas, mas não autenticam o conteúdo."
            ],
            "concept": "Autenticidade e integridade de webhooks",
            "hints": [
                "Cabeçalhos controlados pelo remetente não comprovam autenticidade sozinhos.",
                "A verificação deve vincular o segredo ao payload exato."
            ]
        },
        "admin-133": {
            "prompt": "Qual mecanismo de integração envia notificações quando repositórios são criados, em vez de exigir consultas repetidas à API?",
            "choices": [
                "Uma tarefa REST de inventário agendada",
                "Uma assinatura de webhook da organização",
                "Um loop GET condicional",
                "Uma pesquisa de auditoria salva"
            ],
            "explanations": [
                "Uma tarefa de inventário continua consultando o estado periodicamente.",
                "Webhooks da organização entregam os eventos de repositório selecionados na assinatura.",
                "Solicitações GET condicionais continuam exigindo consultas periódicas.",
                "Uma pesquisa salva não entrega notificações de eventos."
            ],
            "concept": "Projeto de integrações por eventos",
            "hints": [
                "Diferencie receber um evento de verificar o estado periodicamente.",
                "Escolha um mecanismo no escopo da atividade da organização."
            ]
        },
        "admin-134": {
            "prompt": "Uma equipe da organização aparece em CODEOWNERS, mas não recebe solicitações de revisão. Qual condição ela precisa cumprir para ser responsável pelo código?",
            "choices": [
                "Ser visível e ter acesso explícito de escrita",
                "Ser secreta e ter acesso de leitura",
                "Ser visível e ter acesso de triagem",
                "Ser secreta e ter membros com escrita individual"
            ],
            "explanations": [
                "Uma equipe responsável precisa ser visível e ter acesso próprio de escrita.",
                "Uma equipe secreta com leitura não cumpre os requisitos.",
                "O acesso de triagem é insuficiente.",
                "O acesso individual não substitui os requisitos de acesso e visibilidade da equipe."
            ],
            "concept": "Requisitos de equipes em CODEOWNERS",
            "hints": [
                "Avalie as permissões concedidas à própria equipe.",
                "Permissões individuais e da equipe não são intercambiáveis."
            ]
        },
        "admin-135": {
            "prompt": "O que a visualização de caminho de um alerta de análise de código permite inspecionar?",
            "choices": [
                "A cadeia de atualizações de versões de dependências",
                "O fluxo de dados da origem ao destino",
                "A ordem de execução dos jobs do workflow",
                "A lista de arquivos alterados por um pull request"
            ],
            "explanations": [
                "O histórico de atualizações não é o caminho de fluxo de dados do alerta.",
                "O caminho mostra como dados chegam à operação vulnerável indicada.",
                "A ordem dos jobs não é o fluxo de dados da aplicação.",
                "Uma lista de arquivos não mostra o fluxo indicado pelo código."
            ],
            "concept": "Interpretação de achados de caminhos do CodeQL",
            "hints": [
                "Um caminho destacado descreve comportamento do programa, não histórico administrativo.",
                "Siga a entrada pelas transformações até seu destino."
            ]
        },
        "admin-136": {
            "prompt": "Qual recurso tenta criar pull requests de correção para dependências compatíveis vulneráveis após habilitar alertas do Dependabot?",
            "choices": [
                "Proteção de push para segredos",
                "Atualizações de segurança do Dependabot",
                "Revisão de dependências",
                "Notificações de alertas do Dependabot"
            ],
            "explanations": [
                "A proteção de push bloqueia segredos, não atualiza pacotes.",
                "Atualizações de segurança propõem correções quando é possível gerar uma atualização compatível.",
                "A revisão avalia mudanças, mas não gera esses pull requests de correção.",
                "Notificações informam achados sem abrir pull requests de correção por si só."
            ],
            "concept": "Correção automatizada de vulnerabilidades com Dependabot",
            "hints": [
                "Diferencie identificar um pacote vulnerável de propor sua correção.",
                "Nem todo alerta pode produzir uma atualização compatível."
            ]
        },
        "admin-137": {
            "prompt": "De onde um script deve obter um PAT necessário, em vez de mantê-lo em um arquivo de código versionado?",
            "choices": [
                "Do README de um repositório privado",
                "De uma constante codificada no script",
                "De uma mensagem de commit em uma branch protegida",
                "De um armazenamento de segredos aprovado durante a execução"
            ],
            "explanations": [
                "Leitores de um repositório privado também podem ver suas credenciais.",
                "Codificar não equivale a armazenar segredos com segurança.",
                "A proteção de branches não oculta mensagens de commit.",
                "Um armazenamento separa a credencial do código versionado."
            ],
            "concept": "Tratamento seguro de tokens de acesso pessoal",
            "hints": [
                "Restrições de acesso não tornam seguras as credenciais versionadas.",
                "Codificar muda a representação, não a confidencialidade."
            ]
        },
        "admin-138": {
            "prompt": "Na interface do GitHub Enterprise Cloud em inglês, um proprietário da enterprise abre Settings > Audit log > Settings. Qual opção adiciona IPs de origem aos eventos de auditoria aplicáveis?",
            "choices": [
                "Require fine-grained PAT approval",
                "Require signed commits",
                "Restrict repository forking",
                "Enable source IP disclosure"
            ],
            "explanations": [
                "A aprovação de PATs não regula a divulgação de IP na auditoria.",
                "Assinaturas de commits não configuram campos de IP da auditoria.",
                "A política de forks não habilita o registro de IP.",
                "Source IP disclosure controla a inclusão de dados de IP em eventos aplicáveis."
            ],
            "concept": "Divulgação de IP de origem na auditoria",
            "hints": [
                "Uma lista de redes permitidas e a divulgação de campos têm fins distintos.",
                "Não presuma que todo evento exponha um endereço."
            ]
        },
        "admin-139": {
            "prompt": "Dependabot abre um pull request de atualização de segurança. O que deve determinar se ele será mesclado?",
            "choices": [
                "Somente a autoria do bot",
                "A ausência de título escrito por uma pessoa",
                "Somente o nome do pacote",
                "As verificações obrigatórias e a política de revisão do repositório"
            ],
            "explanations": [
                "A autoria do bot não comprova compatibilidade nem cumpre todos os requisitos.",
                "A autoria do título não estabelece correção.",
                "O nome do pacote não estabelece a segurança da atualização.",
                "Atualizações devem passar pelas verificações e revisões aplicáveis."
            ],
            "concept": "Revisão de correções automatizadas de dependências",
            "hints": [
                "A automação propõe uma mudança; não comprova todos os efeitos.",
                "Aplique os controles de integração relevantes às mudanças de dependências."
            ]
        },
        "admin-140": {
            "prompt": "O que habilitar ferramentas de segurança de repositório oferece ao programa de conformidade de uma enterprise?",
            "choices": [
                "Certificação em todas as normas regulatórias",
                "Controles e achados que ainda exigem avaliação de risco",
                "Prova de ausência de todas as vulnerabilidades",
                "Substituição da resposta a incidentes e das revisões de acesso"
            ],
            "explanations": [
                "Habilitar recursos não equivale a uma certificação regulatória universal.",
                "As ferramentas fornecem evidências e proteções que exigem interpretação e resposta.",
                "A análise não comprova ausência de todas as vulnerabilidades.",
                "A resposta a incidentes e a governança de acesso continuam necessárias."
            ],
            "concept": "Ferramentas de segurança e risco residual de conformidade",
            "hints": [
                "Diferencie um controle técnico de uma determinação de conformidade.",
                "Considere quais responsabilidades permanecem após habilitar a detecção."
            ]
        },
        "admin-141": {
            "prompt": "No GitHub Enterprise Cloud, quem pode flexibilizar uma restrição de Actions imposta pela política empresarial?",
            "choices": [
                "Um administrador do repositório",
                "Um proprietário da empresa",
                "Um membro da organização",
                "Um responsável pelo fluxo de trabalho"
            ],
            "explanations": [
                "As configurações do repositório não podem anulá-la.",
                "Proprietários controlam as políticas empresariais.",
                "Ser membro não permite controlar políticas.",
                "Editar YAML não flexibiliza a política empresarial."
            ],
            "concept": "Herança de políticas de Actions",
            "hints": [
                "Identifique o escopo que impõe a restrição.",
                "Diferencie editar fluxos de administrar políticas."
            ]
        },
        "admin-142": {
            "prompt": "Uma empresa permite apenas ações definidas em seus próprios repositórios. Por que actions/checkout é bloqueada?",
            "choices": [
                "Falta seu rótulo de executor",
                "Seu repositório precisa ser bifurcado antes",
                "Ações do GitHub estão fora dessa política",
                "Ações públicas exigem um segredo de ambiente"
            ],
            "explanations": [
                "Rótulos selecionam executores, não ações permitidas.",
                "Bifurcar não é um pré-requisito geral.",
                "A permissão empresarial exclui as organizações externas do GitHub.",
                "Um segredo não contorna a política de ações."
            ],
            "concept": "Políticas de ações somente empresariais",
            "hints": [
                "Considere quem possui o repositório da ação.",
                "Diferencie confiança no editor de escopo permitido."
            ]
        },
        "admin-143": {
            "prompt": "Um proprietário empresarial quer habilitar Actions em apenas duas organizações. Qual controle corresponde a esse escopo?",
            "choices": [
                "Habilitar Actions para organizações específicas",
                "Permitir somente ações e fluxos reutilizáveis da empresa",
                "Desabilitar a criação de executores auto-hospedados de repositório",
                "Exigir SHAs completos de commits para ações"
            ],
            "explanations": [
                "A política empresarial permite selecionar organizações.",
                "Restringir dependências não seleciona organizações que podem usar Actions.",
                "A política de registro não desabilita Actions.",
                "A fixação controla dependências, não disponibilidade organizacional."
            ],
            "concept": "Disponibilidade empresarial de Actions",
            "hints": [
                "Relacione o controle ao limite organizacional.",
                "Disponibilidade difere do roteamento de trabalhos."
            ]
        },
        "admin-144": {
            "prompt": "Em uma lista de permissões de Actions, qual padrão permite todas as ações e fluxos reutilizáveis de octo-tools?",
            "choices": [
                "octo-tools",
                "@octo-tools",
                "*/octo-tools",
                "octo-tools/*"
            ],
            "explanations": [
                "Somente o proprietário não é o padrão documentado.",
                "O prefixo @ não seleciona um proprietário.",
                "Isso seleciona um nome de repositório de qualquer proprietário.",
                "O curinga abrange os repositórios desse proprietário."
            ],
            "concept": "Sintaxe da lista de ações permitidas",
            "hints": [
                "Identifique as posições de proprietário e repositório.",
                "Um curinga amplia uma parte da referência."
            ]
        },
        "admin-145": {
            "prompt": "Sem um arquivo de bloqueio de dependências, qual referência de ação tem o formato exigido por uma política de fixação ao SHA completo?",
            "choices": [
                "octo-tools/build@v2",
                "octo-tools/build@0123456789abcdef0123456789abcdef01234567",
                "octo-tools/build@main",
                "octo-tools/build@0123456"
            ],
            "explanations": [
                "Uma tag de versão é mutável.",
                "Tem o formato completo de commit de 40 caracteres.",
                "Uma branch pode mudar.",
                "Um SHA abreviado não é completo."
            ],
            "concept": "Referências de ações com SHA completo",
            "hints": [
                "Diferencie identidade do commit de referências nomeadas.",
                "A política especifica o comprimento da referência."
            ]
        },
        "admin-146": {
            "prompt": "Qual dependência ainda pode usar uma tag com a opção empresarial 'Require actions to be pinned to a full-length commit SHA'?",
            "choices": [
                "Uma ação criada pelo GitHub",
                "Uma ação JavaScript interna obtida remotamente",
                "Um fluxo de trabalho reutilizável",
                "Uma ação do Marketplace de criador verificado"
            ],
            "explanations": [
                "As ações do GitHub estão incluídas.",
                "Ações internas referenciadas remotamente estão incluídas.",
                "Essa política permite tags para fluxos reutilizáveis.",
                "A verificação não isenta uma ação."
            ],
            "concept": "Abrangência da política de fixação",
            "hints": [
                "Ações e fluxos são tipos de dependência diferentes.",
                "A identidade do editor não define a exceção."
            ]
        },
        "admin-147": {
            "prompt": "Qual referência fica fora das restrições empresariais da lista de ações obtidas remotamente?",
            "choices": [
                "./.github/actions/check",
                "octo-tools/check@v1",
                "actions/checkout@v6",
                "partner/check@main"
            ],
            "explanations": [
                "Essa política não restringe ações do sistema de arquivos local.",
                "Essa referência obtém uma ação remota.",
                "Ser do GitHub não a torna local.",
                "Essa também obtém uma ação remota."
            ],
            "concept": "Limites de políticas para ações locais",
            "hints": [
                "Examine de onde o código é carregado.",
                "Propriedade do repositório e localização local diferem."
            ]
        },
        "admin-148": {
            "prompt": "Onde um arquivo de fluxo reutilizável deve ficar em seu repositório?",
            "choices": [
                ".github/actions/build.yml",
                "workflow-templates/build.yml",
                ".github/workflows/shared/build.yml",
                ".github/workflows/build.yml"
            ],
            "explanations": [
                "Não é o diretório de fluxos.",
                "É um diretório de modelos, não de fluxos executáveis.",
                "Subdiretórios de fluxos não são aceitos.",
                "Fluxos reutilizáveis ficam diretamente em .github/workflows."
            ],
            "concept": "Local de fluxos reutilizáveis",
            "hints": [
                "Um fluxo reutilizável continua sendo um fluxo.",
                "Verifique se diretórios aninhados são aceitos."
            ]
        },
        "admin-149": {
            "prompt": "Qual gatilho permite que outros fluxos chamem um fluxo?",
            "choices": [
                "workflow_call",
                "workflow_dispatch",
                "workflow_run",
                "repository_dispatch"
            ],
            "explanations": [
                "Declara a interface do fluxo reutilizável.",
                "Permite acionamento manual ou pela API.",
                "Reage à atividade de execução de outro fluxo.",
                "Recebe um evento personalizado do repositório."
            ],
            "concept": "Gatilho de fluxos reutilizáveis",
            "hints": [
                "Chamar um componente difere de disparar uma execução.",
                "Procure uma interface explícita de entradas."
            ]
        },
        "admin-150": {
            "prompt": "Em qual local do YAML o chamador referencia um fluxo reutilizável?",
            "choices": [
                "jobs.build.steps[0].run",
                "on.workflow_call",
                "jobs.build.uses",
                "defaults.run"
            ],
            "explanations": [
                "run executa comandos de shell em uma etapa.",
                "Declara o gatilho do fluxo chamado.",
                "Fluxos reutilizáveis são chamados no nível do trabalho.",
                "defaults configura padrões de execução do shell."
            ],
            "concept": "Chamadas de fluxos no nível do trabalho",
            "hints": [
                "Diferencie um trabalho de suas etapas.",
                "O chamador precisa de uma referência ao componente."
            ]
        },
        "admin-151": {
            "prompt": "Um workflow reutilizável declara enabled com type: boolean. Qual entrada with do chamador passa o booleano false, e não uma string, número ou lista?",
            "choices": [
                "enabled: [false]",
                "enabled: false",
                "enabled: \"false\"",
                "enabled: 0"
            ],
            "explanations": [
                "Uma lista não é um valor de entrada booleano.",
                "O valor false sem aspas tem o tipo booleano exigido.",
                "As aspas transformam false em uma string, não no booleano declarado.",
                "O zero numérico não corresponde ao tipo booleano declarado."
            ],
            "concept": "Valores de entrada de workflows reutilizáveis devem corresponder aos tipos declarados.",
            "hints": [
                "Leia o tipo declarado antes de avaliar o valor.",
                "Considere como aspas e coleções YAML afetam o tipo do valor."
            ]
        },
        "admin-152": {
            "prompt": "Uma organização publica ci.yml como modelo de fluxo. Qual repositório e caminho estão corretos?",
            "choices": [
                "Repository .github; .github/workflows/ci.yml",
                "Repository templates; .github/workflows/ci.yml",
                "Repository .github; .github/workflow-templates/ci.yml",
                "Repository .github; workflow-templates/ci.yml"
            ],
            "explanations": [
                "Armazena um fluxo, não um modelo organizacional.",
                "O repositório de modelos deve se chamar .github.",
                "O diretório .github adicional está incorreto.",
                "Modelos usam workflow-templates na raiz do repositório .github."
            ],
            "concept": "Local de modelos organizacionais",
            "hints": [
                "Diferencie o nome do repositório de um diretório.",
                "Modelos e fluxos executáveis têm locais diferentes."
            ]
        },
        "admin-153": {
            "prompt": "Qual arquivo fornece metadados de apresentação para o modelo organizacional ci.yml?",
            "choices": [
                "ci.properties.json",
                "ci.metadata.yml",
                "ci.action.yml",
                "ci.properties.yml"
            ],
            "explanations": [
                "O nome-base é seguido de .properties.json.",
                "Não é o nome de metadados documentado.",
                "Metadados de ações são outro mecanismo.",
                "Metadados de modelos usam JSON, não esse YAML."
            ],
            "concept": "Metadados de modelos de fluxos",
            "hints": [
                "Mantenha o nome-base do modelo.",
                "Metadados de apresentação são separados do YAML do fluxo."
            ]
        },
        "admin-154": {
            "prompt": "Qual marcador permite que um modelo organizacional use a branch padrão de cada repositório consumidor?",
            "choices": [
                "${{ github.template_branch }}",
                "$main-branch",
                "$default-branch",
                "${{ defaults.branch }}"
            ],
            "explanations": [
                "Não é um contexto de modelo aceito.",
                "Não é o marcador documentado.",
                "O GitHub o substitui ao criar o fluxo.",
                "Não é uma expressão de branch aceita."
            ],
            "concept": "Substituição de branches em modelos",
            "hints": [
                "O valor é substituído ao criar o fluxo.",
                "Não confunda marcadores de modelo com expressões de execução."
            ]
        },
        "admin-155": {
            "prompt": "O fluxo A chama B com contents: read. B pode obter contents: write declarando isso localmente?",
            "choices": [
                "Sim, se B for privado",
                "Não, um fluxo chamado não pode elevar permissões do token",
                "Sim, se B usar um SHA completo",
                "Não, fluxos reutilizáveis não podem usar GITHUB_TOKEN"
            ],
            "explanations": [
                "A visibilidade não eleva permissões.",
                "As permissões do chamador são o limite superior.",
                "Fixar um commit não concede privilégios.",
                "Fluxos reutilizáveis podem usar GITHUB_TOKEN."
            ],
            "concept": "Limites de permissões em fluxos reutilizáveis",
            "hints": [
                "Acompanhe permissões pela cadeia de chamadas.",
                "Identidade do código e autorização são diferentes."
            ]
        },
        "admin-156": {
            "prompt": "A passa um segredo ao fluxo reutilizável B, que chama C. O que B deve fazer para C recebê-lo?",
            "choices": [
                "Passá-lo a C explicitamente ou por herança permitida",
                "Declará-lo apenas como variável de ambiente do fluxo em B",
                "Conceder contents: read a C sem mapear segredos",
                "Confiar em secrets: inherit de A para pular o limite entre B e C"
            ],
            "explanations": [
                "Segredos passam apenas entre chamadas diretas.",
                "Um valor de ambiente local não é uma interface para passar segredos.",
                "Permissões de conteúdo não passam valores secretos.",
                "A herança se aplica a chamadas diretas, não a todos os descendentes."
            ],
            "concept": "Segredos em chamadas aninhadas",
            "hints": [
                "Acompanhe cada ligação da cadeia de chamadas.",
                "Compartilhar local não implica compartilhar credenciais."
            ]
        },
        "admin-157": {
            "prompt": "Um repositório privado não acessa um fluxo reutilizável permitido de outro repositório privado da organização. Qual configuração seu administrador deve verificar?",
            "choices": [
                "A política de acesso a repositórios do grupo de executores",
                "A proteção do ambiente de implantação do trabalho chamador",
                "As regras de proteção de branches do repositório chamado",
                "A política de acesso de Actions do repositório chamado"
            ],
            "explanations": [
                "Acessar o executor não concede acesso ao componente privado.",
                "Aprovar o ambiente não concede acesso ao repositório chamado.",
                "A proteção de branches controla mudanças, não compartilhar componentes.",
                "Componentes privados exigem uma política explícita de compartilhamento."
            ],
            "concept": "Compartilhamento de componentes privados",
            "hints": [
                "Verifique a permissão para obter o componente.",
                "Permitir uma dependência e compartilhar seu repositório são coisas distintas."
            ]
        },
        "admin-158": {
            "prompt": "Um trabalho apenas obtém arquivos do repositório. Qual permissão de GITHUB_TOKEN é adequada para essa operação?",
            "choices": [
                "contents: write",
                "packages: write",
                "contents: read",
                "issues: read"
            ],
            "explanations": [
                "Obter arquivos não exige escrever no repositório.",
                "Escrever pacotes não autoriza obter arquivos.",
                "Ler conteúdo permite obter os arquivos.",
                "Acesso a issues não permite ler arquivos."
            ],
            "concept": "Tokens de trabalho com privilégio mínimo",
            "hints": [
                "Identifique o recurso que será lido.",
                "Conceda apenas o necessário para a operação."
            ]
        },
        "admin-159": {
            "prompt": "Qual método evita guardar uma chave de acesso permanente à nuvem como segredo de Actions?",
            "choices": [
                "Uma variável de repositório contendo a chave",
                "Federação OIDC com o provedor de nuvem",
                "Uma chave incluída em um rótulo de executor",
                "Um arquivo de credenciais em cache entre execuções"
            ],
            "explanations": [
                "Variáveis não eliminam credenciais permanentes.",
                "O provedor emite credenciais temporárias após validar a identidade.",
                "Rótulos não são um armazenamento de credenciais.",
                "O cache preserva e expõe as credenciais."
            ],
            "concept": "Autenticação federada de fluxos",
            "hints": [
                "Considere a duração e a emissão de credenciais.",
                "Verificar identidade pode substituir uma chave armazenada."
            ]
        },
        "admin-160": {
            "prompt": "Qual permissão do trabalho permite solicitar um token OIDC do GitHub para um cofre externo?",
            "choices": [
                "id-token: write",
                "contents: write",
                "secrets: read",
                "deployments: write"
            ],
            "explanations": [
                "Permite obter um token OIDC, não escrever recursos na nuvem.",
                "Escrever conteúdo não habilita OIDC.",
                "Não é uma chave de permissão de GITHUB_TOKEN.",
                "Escrever implantações não habilita OIDC."
            ],
            "concept": "Permissão para solicitar OIDC",
            "hints": [
                "Diferencie emitir tokens de autorizar recursos.",
                "O cofre avalia sua própria política de confiança."
            ]
        },
        "admin-161": {
            "prompt": "O que um administrador do Vault deve restringir ao confiar no OIDC do GitHub Actions?",
            "choices": [
                "Apenas o nome de exibição do fluxo",
                "Apenas o hostname temporário do executor",
                "Apenas a ordem das etapas do fluxo",
                "As declarações de identidade aceitas e os caminhos de segredos legíveis"
            ],
            "explanations": [
                "Um nome de exibição não é um limite de confiança robusto.",
                "Hostnames temporários não vinculam a identidade do fluxo.",
                "A ordem não autoriza acesso ao cofre.",
                "Declarações vinculam identidade; políticas limitam os segredos."
            ],
            "concept": "Confiança e autorização no Vault",
            "hints": [
                "Autenticação e autorização precisam de limites distintos.",
                "Vincule o acesso à carga de trabalho pretendida."
            ]
        },
        "admin-162": {
            "prompt": "Um segredo da organização deve ficar disponível somente para três repositórios privados no GitHub Enterprise Cloud. Qual política atende?",
            "choices": [
                "Todos os repositórios",
                "Repositórios privados",
                "Repositórios selecionados",
                "Repositórios com rótulos de executor correspondentes"
            ],
            "explanations": [
                "Também concede acesso a outros repositórios.",
                "Concede acesso a todos os repositórios privados elegíveis.",
                "A seleção explícita limita o acesso.",
                "Rótulos não delimitam segredos da organização."
            ],
            "concept": "Acesso a segredos da organização",
            "hints": [
                "Delimite credenciais independentemente dos executores.",
                "Escolha o menor conjunto de repositórios."
            ]
        },
        "admin-163": {
            "prompt": "DEPLOY_KEY existe na organização, no repositório e no ambiente production. Qual valor um trabalho que referencia production recebe?",
            "choices": [
                "O valor da organização",
                "O valor do ambiente",
                "O valor do repositório",
                "O valor criado mais recentemente"
            ],
            "explanations": [
                "Um escopo inferior aplicável o substitui.",
                "O ambiente tem precedência sobre repositório e organização.",
                "O ambiente substitui esse valor.",
                "A ordem de criação não determina a precedência."
            ],
            "concept": "Precedência de segredos",
            "hints": [
                "Identifique os escopos aplicáveis ao trabalho.",
                "A precedência depende da estrutura, não da data."
            ]
        },
        "admin-164": {
            "prompt": "Em um repositório privado do GitHub Enterprise Cloud, um trabalho de produção deve esperar aprovação humana antes de receber segredos de implantação. Qual mecanismo atende?",
            "choices": [
                "Segredos de ambiente com revisores obrigatórios",
                "Segredos de repositório com nomes mais longos",
                "Segredos da organização restritos a repositórios privados",
                "Variáveis mascaradas em um modelo de fluxo"
            ],
            "explanations": [
                "A proteção do ambiente pode condicionar o acesso aos seus segredos.",
                "Nomes não criam uma aprovação.",
                "A visibilidade não fornece aprovação por trabalho.",
                "Mascarar não controla a aprovação do trabalho."
            ],
            "concept": "Controle da entrega de credenciais",
            "hints": [
                "Escolha um escopo com proteção de implantação.",
                "Armazenar e liberar credenciais são controles distintos."
            ]
        },
        "admin-165": {
            "prompt": "Com as configurações padrão de forks, por que um fluxo pull_request de um fork público não recebe o segredo de implantação do repositório base?",
            "choices": [
                "Segredos exigem um executor maior",
                "O autor deve renomear o segredo",
                "Repositórios públicos não armazenam segredos",
                "Pull requests de forks não recebem esses segredos por padrão"
            ],
            "explanations": [
                "O tamanho do executor não concede segredos.",
                "Renomear não muda o limite de confiança.",
                "Repositórios públicos podem guardar segredos de Actions.",
                "Não fornecer segredos protege contra código não confiável."
            ],
            "concept": "Limites de segredos em forks",
            "hints": [
                "Considere a origem do código enviado.",
                "Iniciar uma execução não implica acesso a credenciais."
            ]
        },
        "admin-166": {
            "prompt": "O que uma expressão que referencia um segredo de Actions indisponível retorna?",
            "choices": [
                "O nome do segredo",
                "O token do proprietário da organização",
                "Uma string vazia",
                "O valor da execução anterior"
            ],
            "explanations": [
                "O GitHub não substitui pelo nome.",
                "Não há alternativa com o token do proprietário.",
                "Um segredo não definido retorna uma string vazia.",
                "Valores anteriores não são uma alternativa."
            ],
            "concept": "Comportamento de segredos indisponíveis",
            "hints": [
                "Credenciais ausentes exigem validação explícita.",
                "Não presuma valores alternativos automáticos."
            ]
        },
        "admin-167": {
            "prompt": "Um fluxo transforma um segredo em outro valor sensível. O que deve fazer antes que os logs possam expô-lo?",
            "choices": [
                "Confiar no mascaramento automático do segredo original",
                "Registrar o valor transformado para mascaramento",
                "Mascarar somente após o valor transformado aparecer no log",
                "Confiar em desativar depuração para ocultar toda saída sensível"
            ],
            "explanations": [
                "Não há garantia de ocultar valores transformados.",
                "Valores derivados exigem seu próprio registro de mascaramento.",
                "O mascaramento deve preceder uma possível divulgação.",
                "Logs normais também podem mostrar dados sensíveis."
            ],
            "concept": "Limites do mascaramento automático",
            "hints": [
                "Transformações mudam o texto procurado pela ocultação.",
                "Previna a exposição sem testar com segredos reais."
            ]
        },
        "admin-168": {
            "prompt": "Um log de Actions contém uma credencial de nuvem sem ocultação. Qual resposta trata exposição e acesso posterior?",
            "choices": [
                "Excluir o log exposto e rotacionar a credencial",
                "Renomear o segredo e manter a mesma credencial",
                "Executar novamente sem logs de depuração",
                "Reduzir a retenção de artefatos sem mudar a credencial"
            ],
            "explanations": [
                "Excluir limita a exposição; rotacionar invalida a credencial vazada.",
                "Renomear não invalida uma credencial.",
                "Reexecutar não revoga a credencial exposta.",
                "Retenção não revoga credenciais nem exclui esse log."
            ],
            "concept": "Resposta à exposição de credenciais",
            "hints": [
                "Considere quem já pode ter o valor divulgado.",
                "Por quanto tempo esse valor poderia continuar utilizável?"
            ]
        },
        "admin-169": {
            "prompt": "Com o GitHub CLI em um repositório, qual comando cria ou atualiza o segredo API_KEY do ambiente production?",
            "choices": [
                "gh variable set API_KEY --env production",
                "gh secret set API_KEY --org production",
                "gh secret set API_KEY --repo production",
                "gh secret set API_KEY --env production"
            ],
            "explanations": [
                "Guarda uma variável, não um segredo criptografado.",
                "Aponta para uma organização chamada production.",
                "Aponta para um repositório, não um ambiente.",
                "A opção --env seleciona o escopo do ambiente."
            ],
            "concept": "Seleção de escopo de segredos pela CLI",
            "hints": [
                "Diferencie variável de segredo.",
                "O destino está dentro de um repositório."
            ]
        },
        "admin-170": {
            "prompt": "Qual tipo de executor dá ao administrador controle direto do hardware físico e do software do sistema operacional instalado?",
            "choices": [
                "Um executor padrão hospedado pelo GitHub",
                "Um executor maior hospedado pelo GitHub",
                "Um executor auto-hospedado",
                "Um executor hospedado pelo GitHub com imagem personalizada"
            ],
            "explanations": [
                "O GitHub administra a máquina hospedada.",
                "Mais recursos hospedados não transferem controle do hardware.",
                "O cliente implanta e administra a máquina.",
                "Uma imagem personalizada não transfere administração do hardware físico."
            ],
            "concept": "Responsabilidades conforme a hospedagem do executor",
            "hints": [
                "Diferencie propriedade da máquina de tamanho dos recursos.",
                "Controle traz responsabilidades de manutenção."
            ]
        },
        "admin-171": {
            "prompt": "O aplicativo de um executor auto-hospedado é atualizado automaticamente. Quem continua responsável por aplicar patches no sistema operacional?",
            "choices": [
                "A equipe de imagens hospedadas do GitHub",
                "O administrador da máquina auto-hospedada",
                "O responsável pela ação de checkout",
                "O serviço de atualização de dependências do repositório"
            ],
            "explanations": [
                "A equipe de imagens não administra essa máquina.",
                "Atualizar o aplicativo não aplica patches no sistema operacional.",
                "O responsável por uma ação não administra o host.",
                "Atualizações de dependências não administram o sistema operacional."
            ],
            "concept": "Atualizações do aplicativo e do sistema operacional",
            "hints": [
                "Identifique qual componente é atualizado.",
                "A propriedade da hospedagem determina a manutenção do sistema."
            ]
        },
        "admin-172": {
            "prompt": "Um proprietário da organização precisa restringir um conjunto de executores auto-hospedados a repositórios selecionados. Qual recurso fornece esse limite?",
            "choices": [
                "Grupos de executores",
                "Nomes de exibição dos executores",
                "Nomes de execuções de fluxos",
                "Nomes de saídas dos trabalhos"
            ],
            "explanations": [
                "Grupos têm políticas de acesso por repositório.",
                "Nomes identificam executores, mas não concedem acesso.",
                "Nomes de execução são metadados descritivos.",
                "Saídas transmitem dados, não controlam acesso."
            ],
            "concept": "Autorização por grupos de executores",
            "hints": [
                "Roteamento e autorização são questões distintas.",
                "Procure uma coleção de executores com políticas."
            ]
        },
        "admin-173": {
            "prompt": "Qual chave do fluxo seleciona um executor por rótulos como self-hosted e linux?",
            "choices": [
                "needs",
                "environment",
                "permissions",
                "runs-on"
            ],
            "explanations": [
                "needs declara dependências entre trabalhos.",
                "environment seleciona um ambiente de implantação.",
                "permissions delimita o token do trabalho.",
                "runs-on seleciona as capacidades do executor."
            ],
            "concept": "Seleção por rótulos de executor",
            "hints": [
                "Identifique a plataforma de execução do trabalho.",
                "Não confunda ambiente de implantação com seleção da máquina."
            ]
        },
        "admin-174": {
            "prompt": "Um trabalho sem ARC especifica runs-on: [self-hosted, linux, gpu]. Qual executor corresponde?",
            "choices": [
                "Qualquer um com pelo menos um rótulo listado",
                "Qualquer executor Linux, independentemente dos outros rótulos",
                "Um executor acessível com os três rótulos",
                "Qualquer executor de um grupo chamado gpu"
            ],
            "explanations": [
                "A lista não é uma condição OR.",
                "Os demais rótulos também precisam corresponder.",
                "Todos os rótulos devem corresponder em um executor acessível.",
                "O nome do grupo não substitui os rótulos."
            ],
            "concept": "Combinação de rótulos de executor",
            "hints": [
                "Determine se as restrições são cumulativas.",
                "O acesso ao grupo continua necessário."
            ]
        },
        "admin-175": {
            "prompt": "Um executor auto-hospedado está registrado diretamente no repositório alpha. Quais repositórios podem atribuir trabalhos por esse registro?",
            "choices": [
                "Todos da organização de alpha",
                "Somente o repositório alpha",
                "Todos os privados da empresa",
                "Qualquer um que compartilhe os rótulos de alpha"
            ],
            "explanations": [
                "Um registro de repositório não abrange a organização.",
                "Executores de repositório são dedicados a esse repositório.",
                "Compartilhar na empresa exige outro escopo de registro.",
                "Compartilhar rótulos não concede acesso entre repositórios."
            ],
            "concept": "Escopo de registro de executores",
            "hints": [
                "Identifique onde o executor foi registrado.",
                "O escopo limita o acesso antes da seleção por rótulos."
            ]
        },
        "admin-176": {
            "prompt": "O que acontece ao registrar um executor em uma organização sem especificar um grupo?",
            "choices": [
                "Ele entra no grupo de executores padrão",
                "Ele cria um grupo com o nome de seu host",
                "Ele fica disponível para todas as organizações empresariais",
                "O registro falha até existir um grupo personalizado"
            ],
            "explanations": [
                "É usado o grupo padrão da organização.",
                "Nomes de host não criam grupos automaticamente.",
                "O registro organizacional não concede acesso empresarial completo.",
                "Um grupo personalizado não é necessário."
            ],
            "concept": "Local padrão de executores",
            "hints": [
                "Considere a estrutura de grupos existente.",
                "Padrões de registro não ampliam o escopo organizacional."
            ]
        },
        "admin-177": {
            "prompt": "Qual configuração auto-hospedada aceita ações de contêiner Docker e contêineres de serviço?",
            "choices": [
                "Windows com Docker instalado",
                "macOS com Docker instalado",
                "Linux com Docker instalado",
                "Linux apenas com um cliente Git instalado"
            ],
            "explanations": [
                "O GitHub exige Linux para esses trabalhos.",
                "macOS não atende a esse requisito de executor.",
                "Esses fluxos exigem Linux e Docker instalado.",
                "Um cliente Git não fornece o runtime de contêineres."
            ],
            "concept": "Requisitos do host para contêineres",
            "hints": [
                "A plataforma impõe requisitos ao host.",
                "São necessários runtime de contêineres e sistema compatível."
            ]
        },
        "admin-178": {
            "prompt": "Quantos trabalhos o GitHub atribui a um executor auto-hospedado registrado com --ephemeral?",
            "choices": [
                "Tantos quantas forem suas CPUs",
                "Todos de uma execução de fluxo",
                "Trabalhos até uma limpeza noturna",
                "Um trabalho antes de cancelar o registro"
            ],
            "explanations": [
                "A CPU não determina a duração efêmera.",
                "Uma execução pode conter vários trabalhos.",
                "O cancelamento não é agendado por noite.",
                "O GitHub cancela o registro após processar um trabalho."
            ],
            "concept": "Duração de executores efêmeros",
            "hints": [
                "A unidade de isolamento é o trabalho, não o fluxo.",
                "O ciclo de registro difere de excluir a máquina."
            ]
        },
        "admin-179": {
            "prompt": "Após cancelar o registro de um executor efêmero auto-hospedado, o que impede que seu workspace contamine a próxima máquina?",
            "choices": [
                "Automação que destrua ou limpe o host",
                "Renomear o registro do executor",
                "Reutilizar o disco com outro rótulo de executor",
                "Mover o executor para o grupo padrão"
            ],
            "explanations": [
                "Limpar o host continua sendo responsabilidade do operador.",
                "Um nome novo não apaga o disco.",
                "Mudar rótulos não limpa o disco.",
                "O grupo não remove dados locais."
            ],
            "concept": "Limpeza de infraestrutura efêmera",
            "hints": [
                "Cancelar o registro é uma operação do lado do GitHub.",
                "Considere o estado restante no host."
            ]
        },
        "admin-180": {
            "prompt": "Qual prática preserva evidências de diagnóstico ao destruir hosts de executores efêmeros?",
            "choices": [
                "Guardar logs apenas no diretório do executor",
                "Aumentar o número de execução exibido",
                "Enviar logs do executor para armazenamento externo",
                "Guardar logs apenas no histórico do shell do host destruído"
            ],
            "explanations": [
                "Destruir o host remove esses logs locais.",
                "Números de execução não preservam logs do aplicativo.",
                "O armazenamento externo sobrevive à destruição do host.",
                "O histórico local não é durável nem suficiente."
            ],
            "concept": "Observabilidade de executores efêmeros",
            "hints": [
                "A evidência deve sobreviver ao recurso.",
                "Logs do fluxo e do aplicativo são diferentes."
            ]
        },
        "admin-181": {
            "prompt": "Uma imagem de executor é registrada com --disableupdate. Qual obrigação de manutenção permanece?",
            "choices": [
                "Atualizar somente quando trabalhos usarem recursos novos",
                "Manter versões dentro dos requisitos de atualização do GitHub",
                "Manter uma versão durante todo o ciclo de vida do sistema operacional",
                "Aplicar patches no sistema sem substituir o binário do executor"
            ],
            "explanations": [
                "Requisitos de atualização também afetam o uso de recursos existentes.",
                "Desativar atualizações automáticas transfere seu agendamento ao operador.",
                "O ciclo do sistema não substitui os requisitos do executor.",
                "Patches do sistema não substituem atualizar o aplicativo."
            ],
            "concept": "Versões de executor mantidas manualmente",
            "hints": [
                "Desativar automação não elimina a obrigação.",
                "Diferencie atualizações do aplicativo e do host."
            ]
        },
        "admin-182": {
            "prompt": "Um executor auto-hospedado aparece Offline. Qual condição pode explicar diretamente esse estado?",
            "choices": [
                "Ele não tem trabalhos pendentes",
                "Seu último trabalho terminou com um teste falho",
                "Seu grupo contém somente um repositório",
                "Seu aplicativo não consegue se comunicar com o GitHub"
            ],
            "explanations": [
                "Um executor conectado sem trabalho está Idle.",
                "Falhar um teste não implica desconexão.",
                "O tamanho do grupo não determina conectividade.",
                "Offline indica que o executor não está conectado."
            ],
            "concept": "Interpretação do estado do executor",
            "hints": [
                "O estado descreve conexão ou execução.",
                "Diferencie trabalho falho de executor desconectado."
            ]
        },
        "admin-183": {
            "prompt": "Em um executor Linux auto-hospedado, qual comando verifica a conexão aos serviços GitHub necessários com um token de diagnóstico autorizado?",
            "choices": [
                "./config.sh --check --url URL --pat TOKEN",
                "./config.sh --ephemeral --url URL --token TOKEN",
                "./run.sh --labels network-check",
                "./config.sh --remove --token TOKEN"
            ],
            "explanations": [
                "O modo --check testa a conexão aos serviços necessários.",
                "Isso registra um executor efêmero.",
                "Não é a verificação de conexão documentada.",
                "Remove um registro em vez de verificar conexão."
            ],
            "concept": "Diagnóstico de conectividade do executor",
            "hints": [
                "Use o modo de diagnóstico do executor.",
                "Tokens de registro e de diagnóstico têm finalidades distintas."
            ]
        },
        "admin-184": {
            "prompt": "Quais arquivos contêm logs detalhados por trabalho em uma instalação de executor auto-hospedado?",
            "choices": [
                "_diag/Runner_*.log",
                ".git/logs/HEAD",
                "_diag/Worker_*.log",
                ".github/workflows/*.yml"
            ],
            "explanations": [
                "Arquivos Runner_ descrevem o aplicativo do executor.",
                "Reflogs do Git não são logs de execução.",
                "Arquivos Worker_ detalham cada trabalho processado.",
                "São definições de fluxos, não logs de execução."
            ],
            "concept": "Logs do aplicativo e do trabalho",
            "hints": [
                "Identifique se o problema afeta o processo ou o trabalho.",
                "O diretório de diagnóstico contém tipos diferentes de log."
            ]
        },
        "admin-185": {
            "prompt": "Um trabalho continua na fila embora vários executores auto-hospedados estejam Idle. O que o administrador deve verificar primeiro?",
            "choices": [
                "Se expiraram downloads de artefatos de trabalhos concluídos",
                "Se acesso, rótulos e grupo do executor correspondem",
                "Se as etapas precisam de novas versões de dependências de build",
                "Se o build precisa de mais memória após iniciar a execução"
            ],
            "explanations": [
                "A expiração de artefatos não explica um trabalho sem atribuição.",
                "Executores livres devem atender às restrições de roteamento e acesso.",
                "Dependências importam depois de receber o trabalho.",
                "Memória durante execução não explica essa incompatibilidade."
            ],
            "concept": "Diagnóstico de incompatibilidades na fila",
            "hints": [
                "Capacidade livre nem sempre é capacidade elegível.",
                "Compare requisitos do trabalho com acesso aos executores."
            ]
        },
        "admin-186": {
            "prompt": "Qual conexão um executor auto-hospedado precisa para receber trabalhos do GitHub Actions?",
            "choices": [
                "HTTPS de saída aos serviços GitHub necessários",
                "HTTPS de entrada iniciado pelo GitHub para o executor",
                "Um túnel SSH de entrada que o GitHub abre por trabalho",
                "Acesso de saída somente à URL de clone Git do repositório"
            ],
            "explanations": [
                "O executor se comunica com o GitHub para obter trabalhos.",
                "O GitHub não exige esse serviço de entrega de entrada.",
                "Trabalhos não são entregues por túneis SSH de entrada.",
                "Entregar trabalhos exige mais que acesso ao repositório Git."
            ],
            "concept": "Direção de rede do executor auto-hospedado",
            "hints": [
                "Determine qual lado inicia a comunicação.",
                "Acesso administrativo e entrega de trabalhos usam canais distintos."
            ]
        },
        "admin-187": {
            "prompt": "Qual opção de executor hospedado pelo GitHub aceita uma faixa IP estática para a lista de permissões de um firewall externo?",
            "choices": [
                "Executores padrão selecionados com ubuntu-latest",
                "Executores macOS maiores",
                "Executores Linux ou Windows maiores",
                "Qualquer executor selecionado por um modelo"
            ],
            "explanations": [
                "O rótulo padrão não fornece IPs estáticos dedicados.",
                "Esse recurso não está disponível em executores macOS maiores.",
                "Executores Linux e Windows maiores aceitam IPs estáticos.",
                "Modelos não fornecem capacidade de rede."
            ],
            "concept": "Endereços estáticos de executores hospedados",
            "hints": [
                "Diferencie classes de executor e sistemas operacionais.",
                "Um rótulo de roteamento não é uma alocação IP."
            ]
        },
        "admin-188": {
            "prompt": "O que conecta executores hospedados elegíveis do GitHub à rede virtual Azure de uma organização?",
            "choices": [
                "Uma etapa VPN sem configuração de rede no GitHub",
                "Recursos Azure e configuração de rede privada no GitHub",
                "Uma lista IP da organização com a faixa da sub-rede Azure",
                "Uma ação de login autorizada a ler segredos do aplicativo"
            ],
            "explanations": [
                "Uma VPN ad hoc não é a integração de rede privada Azure.",
                "São necessários recursos Azure e configuração no GitHub.",
                "Uma lista de acesso não conecta o executor a uma VNET.",
                "Autenticação na nuvem não cria uma conexão de rede."
            ],
            "concept": "Configuração de rede privada Azure",
            "hints": [
                "A integração abrange dois planos de controle.",
                "Valores de configuração não provisionam conectividade sozinhos."
            ]
        },
        "admin-189": {
            "prompt": "Para redes privadas Azure com executores hospedados do GitHub, qual filtragem de saída a documentação atual recomenda?",
            "choices": [
                "Congelar a lista IP copiada durante a instalação",
                "Permitir apenas o DNS do aplicativo privado",
                "Bloquear domínios GitHub após registrar o executor",
                "Manter controles DNS/domínio com os metadados publicados pelo GitHub"
            ],
            "explanations": [
                "Listas IP copiadas podem ficar desatualizadas.",
                "O executor também precisa dos serviços GitHub.",
                "Registrar não elimina a comunicação contínua com o GitHub.",
                "As listas publicadas refletem mudanças de requisitos."
            ],
            "concept": "Manutenção do tráfego de saída dos executores",
            "hints": [
                "Dependências de rede mudam após a implantação.",
                "O aplicativo privado não é o único destino necessário."
            ]
        },
        "admin-190": {
            "prompt": "Um trabalho usa GITHUB_TOKEN para acessar um repositório privado protegido por uma lista IP do GitHub Enterprise Cloud. O que sua rota de rede deve atender?",
            "choices": [
                "O IP de origem do executor deve ser permitido",
                "Um GITHUB_TOKEN válido permite qualquer IP de executor",
                "Somente o IP do navegador de quem iniciou o fluxo deve ser permitido",
                "Um login aprovado na nuvem contorna a verificação IP do GitHub"
            ],
            "explanations": [
                "A lista se aplica a esse acesso autenticado.",
                "Um token válido não contorna essa restrição de rede.",
                "O IP de origem da solicitação API também importa.",
                "Autenticação na nuvem não contorna a lista do GitHub."
            ],
            "concept": "Acesso de executores com listas IP",
            "hints": [
                "Autenticação e permissão de rede são verificações distintas.",
                "Avalie o endereço visto pelo GitHub."
            ]
        },
        "admin-191": {
            "prompt": "Um trabalho privilegiado workflow_run consome um artefato de um build de fork. Como deve tratá-lo?",
            "choices": [
                "Como confiável porque o GitHub o armazena",
                "Como confiável se o build terminou com sucesso",
                "Como entrada não confiável que exige validação",
                "Como seguro para executar após mudar sua extensão"
            ],
            "explanations": [
                "O local não estabelece confiança no produtor.",
                "Uma execução bem-sucedida não autentica o conteúdo.",
                "O consumidor privilegiado deve validar entradas de menor confiança.",
                "Renomear não remove conteúdo malicioso."
            ],
            "concept": "Confiança entre fluxos workflow_run",
            "hints": [
                "Identifique quem pode influenciar o produtor.",
                "Um resultado bem-sucedido não certifica segurança dos dados."
            ]
        },
        "admin-192": {
            "prompt": "Qual padrão um administrador deve rejeitar em um fluxo privilegiado pull_request_target?",
            "choices": [
                "Rotular o pull request usando código confiável",
                "Obter e executar o código proposto do fork",
                "Ler metadados do pull request sem executá-los",
                "Limitar o token do trabalho às permissões necessárias"
            ],
            "explanations": [
                "Operações confiáveis sobre metadados podem ser adequadas.",
                "Código não confiável seria executado com privilégios.",
                "Ler metadados difere de executar código enviado.",
                "O privilégio mínimo reduz o risco."
            ],
            "concept": "Limite de confiança de pull_request_target",
            "hints": [
                "Identifique qual revisão de código é executada.",
                "Compare a procedência do código com os privilégios de execução."
            ]
        },
        "admin-193": {
            "prompt": "Um build concluído deve preservar um relatório de testes para download posterior. Qual mecanismo atende?",
            "choices": [
                "Um cache de dependências",
                "Um segredo de Actions do repositório",
                "Um diretório de trabalho local do executor",
                "Um artefato do fluxo"
            ],
            "explanations": [
                "Caches otimizam regeneração, não preservam entregáveis da execução.",
                "Segredos guardam valores sensíveis, não relatórios para download.",
                "Arquivos locais não são mantidos como downloads da execução.",
                "Artefatos preservam arquivos gerados por uma execução."
            ],
            "concept": "Artefatos para resultados de execução",
            "hints": [
                "Diferencie um resultado de uma dependência reutilizável.",
                "O consumidor precisa do arquivo após o trabalho terminar."
            ]
        },
        "admin-194": {
            "prompt": "O que um cache de dependências deve conter para acelerar builds repetidos?",
            "choices": [
                "Dependências baixadas que possam ser regeneradas",
                "Pacotes de versão assinados para auditoria de longo prazo",
                "Credenciais de produção obtidas para implantações posteriores",
                "Relatórios de testes mantidos para download manual posterior"
            ],
            "explanations": [
                "Caches aceleram reutilização; trabalhos devem tolerar falhas de cache.",
                "Registros duráveis não devem depender de caches descartáveis.",
                "Segredos não devem ser guardados em caches.",
                "Entregáveis ficam em artefatos, não em caches de dependências."
            ],
            "concept": "Cache seguro de dependências",
            "hints": [
                "Planeje para a ausência de correspondência no cache.",
                "Acelerar reutilização difere de armazenar dados duráveis ou segredos."
            ]
        },
        "admin-195": {
            "prompt": "Uma empresa desabilita a criação de executores auto-hospedados de repositório. Qual acesso pode continuar disponível?",
            "choices": [
                "Novos registros de repositório criados por administradores",
                "Registros de repositório criados por YAML",
                "Executores da organização ou empresa compartilhados com o repositório",
                "Registros de repositório criados com uma ação verificada"
            ],
            "explanations": [
                "Administradores não podem contornar a restrição.",
                "YAML não contorna a política de registro.",
                "A restrição não desabilita executores compartilhados de escopos superiores.",
                "Uma ação verificada não anula a política empresarial."
            ],
            "concept": "Restrição do escopo de registro de executores",
            "hints": [
                "Uma restrição de criação tem um escopo definido.",
                "Capacidade compartilhada e registro próprio do repositório diferem."
            ]
        },
        "admin-196": {
            "prompt": "Qual filtro do log de auditoria empresarial encontra eventos iniciados por alex, em vez de eventos que afetam alex?",
            "choices": [
                "user:alex",
                "actor:alex",
                "author:alex",
                "owner:alex"
            ],
            "explanations": [
                "user identifica o usuário afetado.",
                "actor identifica a conta que inicia a ação.",
                "author não é esse filtro de auditoria.",
                "owner não é esse filtro de auditoria."
            ],
            "concept": "Iniciador versus usuário afetado",
            "hints": [
                "Diferencie quem agiu de quem foi afetado.",
                "Use filtros específicos de auditoria."
            ]
        },
        "admin-197": {
            "prompt": "Qual consulta de auditoria empresarial seleciona eventos de criação de repositórios desde 1º de outubro de 2026, inclusive?",
            "choices": [
                "event:repo.create after:2026-10-01",
                "action:repo.create updated:>=2026-10-01",
                "type:repo.create date:2026-10-01",
                "action:repo.create created:>=2026-10-01"
            ],
            "explanations": [
                "event e after não são esses filtros documentados.",
                "O filtro temporal é created, não updated.",
                "type e date não são esses filtros documentados.",
                "action seleciona o evento; created define o limite temporal."
            ],
            "concept": "Filtros de evento e data na auditoria",
            "hints": [
                "Combine ação e momento do evento.",
                "A sintaxe de repositórios não substitui a de auditoria."
            ]
        },
        "admin-198": {
            "prompt": "No GitHub Enterprise Cloud, por quanto tempo o GitHub mantém eventos empresariais de auditoria que não são de Git?",
            "choices": [
                "180 dias",
                "7 dias",
                "30 dias",
                "Indefinidamente"
            ],
            "explanations": [
                "O log empresarial do Cloud mantém esses eventos por 180 dias.",
                "Sete dias se aplica a eventos Git.",
                "Não é a retenção documentada de auditoria do Cloud.",
                "A retenção nativa é finita; preservar externamente é diferente."
            ],
            "concept": "Retenção de auditoria no Cloud",
            "hints": [
                "Identifique a implantação e a categoria do evento.",
                "A janela visível padrão não equivale à retenção."
            ]
        },
        "admin-199": {
            "prompt": "Qual retenção se aplica especificamente a eventos Git no log empresarial do GitHub Enterprise Cloud?",
            "choices": [
                "180 dias",
                "90 dias",
                "7 dias",
                "O período de retenção de artefatos do repositório"
            ],
            "explanations": [
                "É a retenção geral de auditoria, não a de eventos Git.",
                "A janela visível padrão não é a retenção Git.",
                "Logs do Cloud mantêm eventos Git por sete dias.",
                "A retenção de artefatos é outra configuração."
            ],
            "concept": "Eventos Git de curta retenção",
            "hints": [
                "Nem todas as categorias têm a mesma duração.",
                "Planeje coletar antes que os dados expirem."
            ]
        },
        "admin-200": {
            "prompt": "Uma solicitação à API de auditoria empresarial retorna 100 registros e um cabeçalho Link com rel=\"next\". Como a integração deve coletar os demais registros correspondentes?",
            "choices": [
                "Remover o filtro de data para obter uma única página maior.",
                "Seguir a URL da próxima página até não haver outro link next.",
                "Considerar os 100 registros como todos os eventos correspondentes.",
                "Repetir a primeira solicitação idêntica até a contagem mudar."
            ],
            "explanations": [
                "Remover filtros amplia a consulta e não elimina a paginação.",
                "A API fornece links de paginação para recuperar as páginas seguintes.",
                "O link da próxima página indica explicitamente que existem mais resultados.",
                "Repetir a mesma primeira página não avança pelos resultados."
            ],
            "concept": "Coletores de auditoria devem consumir todas as páginas de resultados.",
            "hints": [
                "Confira os metadados da resposta antes de considerar a coleta completa.",
                "Diferencie repetir uma página de avançar pelos resultados."
            ]
        },
        "admin-201": {
            "prompt": "Uma integração autorizada consulta eventos clone, fetch e push na API de auditoria empresarial. Qual parâmetro de URL seleciona especificamente eventos Git?",
            "choices": [
                "include=web",
                "per_page=100",
                "order=asc",
                "include=git"
            ],
            "explanations": [
                "Isso seleciona eventos web, não os eventos Git solicitados.",
                "O tamanho da página controla a paginação, não a classe de evento.",
                "A ordenação não seleciona eventos Git em vez de eventos web.",
                "Esse parâmetro seleciona eventos Git; include=all também inclui eventos web."
            ],
            "concept": "Seleção de eventos e paginação são controles distintos da API.",
            "hints": [
                "Identifique se a questão trata de tipo de evento, ordenação ou tamanho de página.",
                "Diferencie operações Git de atividades da interface web."
            ]
        },
        "admin-202": {
            "prompt": "Um GET REST usa um cabeçalho Authorization válido e If-None-Match. O GitHub retorna 304 Not Modified. Como essa resposta condicional afeta o limite primário?",
            "choices": [
                "Não conta para o limite de requisições primário.",
                "Consome toda a cota primária restante.",
                "Sempre conta como duas solicitações GET comuns.",
                "Devolve todas as solicitações gastas antes naquela hora."
            ],
            "explanations": [
                "Solicitações condicionais corretamente autorizadas com resposta 304 não consomem a cota primária.",
                "Uma resposta 304 não esgota a cota do cliente autenticado.",
                "O comportamento documentado não duplica o custo da solicitação.",
                "Evitar a cobrança desta resposta não devolve solicitações anteriores."
            ],
            "concept": "Respostas condicionais 304 autorizadas evitam consumo do limite primário.",
            "hints": [
                "Diferencie uma representação sem mudanças de um corpo novo.",
                "Considere o status da resposta e a autenticação da solicitação."
            ]
        },
        "admin-203": {
            "prompt": "Uma integração atinge repetidamente limites REST secundários ao enviar muitas solicitações simultâneas. Qual mudança de agendamento segue a recomendação preventiva do GitHub?",
            "choices": [
                "Remover a autenticação de todas as solicitações.",
                "Repetir imediatamente cada solicitação com falha em todos os processos.",
                "Colocar as solicitações em uma fila e enviá-las em série.",
                "Iniciar mais processos paralelos com a mesma credencial."
            ],
            "explanations": [
                "Remover a autenticação não resolve a pressão de solicitações concorrentes.",
                "Repetições paralelas imediatas mantêm o pico em vez de controlá-lo.",
                "Solicitações em série reduzem a concorrência que pode acionar limites secundários.",
                "Mais processos concorrentes pioram o padrão de agendamento."
            ],
            "concept": "O agendamento pode prevenir limites secundários antes de precisar repetir solicitações.",
            "hints": [
                "Procure o padrão de carga que causa a limitação.",
                "Diferencie controlar concorrência de mudar credenciais."
            ]
        },
        "admin-204": {
            "prompt": "Uma integração recebe 404 para um repositório privado cuja existência o administrador confirma. O que deve verificar primeiro?",
            "choices": [
                "Se o repositório tem estrelas suficientes",
                "A autenticação e o acesso da integração ao recurso",
                "Se o repositório tem uma versão pública",
                "O nível padrão de compactação de artefatos"
            ],
            "explanations": [
                "Estrelas não autorizam acesso à API.",
                "O GitHub pode ocultar recursos privados com 404 quando falta acesso.",
                "Versões não concedem acesso ao repositório privado.",
                "Compactação não se relaciona à autorização da API."
            ],
            "concept": "Diagnóstico de respostas sobre recursos privados",
            "hints": [
                "Um código pode evitar revelar a existência de recurso privado.",
                "Verifique credenciais antes de presumir exclusão."
            ]
        },
        "admin-205": {
            "prompt": "Após validar a assinatura de um webhook, uma integração precisa reconhecer uma reentrega solicitada de um evento já processado. Qual cabeçalho do GitHub preserva o identificador original?",
            "choices": [
                "X-GitHub-Event",
                "User-Agent",
                "Content-Type",
                "X-GitHub-Delivery"
            ],
            "explanations": [
                "Isso identifica um tipo de evento compartilhado por várias entregas diferentes.",
                "O agente do usuário não é o identificador único da entrega.",
                "O tipo de conteúdo descreve a representação, não a entrega individual.",
                "Uma reentrega solicitada preserva o valor X-GitHub-Delivery original."
            ],
            "concept": "Identificadores de entrega ajudam a evitar duplicações, mas não substituem a validação de assinatura.",
            "hints": [
                "Diferencie o tipo de evento da identidade de uma entrega.",
                "Considere qual valor permanece estável quando a mesma entrega é solicitada novamente."
            ]
        },
        "admin-206": {
            "prompt": "Como um administrador distingue a limitação REST principal da secundária se ambas podem retornar 403 ou 429?",
            "choices": [
                "Examinar a mensagem e os cabeçalhos de limites",
                "Tratar todo 403 como um token expirado",
                "Tratar todo 429 como um repositório ausente",
                "Contar apenas os pull requests abertos"
            ],
            "explanations": [
                "A mensagem e os cabeçalhos explicam a limitação.",
                "403 pode indicar limitação ou outras falhas.",
                "429 indica excesso de solicitações, não repositórios ausentes.",
                "Contar pull requests não classifica limites."
            ],
            "concept": "Classificação de limitações da API",
            "hints": [
                "O status HTTP pode não ser suficiente.",
                "Use os metadados de diagnóstico do erro."
            ]
        },
        "admin-207": {
            "prompt": "Uma pessoa administra GHES 3.19 e investiga uma partição raiz quase cheia antes de decidir o que remover. Qual utilitário procura arquivos grandes e arquivos excluídos com identificadores abertos?",
            "choices": [
                "ghe-config-apply",
                "ghe-announce",
                "ghe-check-disk-usage",
                "ghe-cleanup-caches"
            ],
            "explanations": [
                "Isso aplica configurações, não localiza esses arquivos.",
                "Isso altera o anúncio para usuários, não diagnostica o disco.",
                "Esse utilitário investiga arquivos grandes e excluídos cujos identificadores continuam abertos.",
                "Isso remove caches em vez de executar a investigação de uso de disco solicitada."
            ],
            "concept": "Inspecione o uso de disco antes de escolher uma operação de limpeza.",
            "hints": [
                "Diferencie investigação de um comando que altera dados armazenados.",
                "Relacione o propósito documentado do utilitário ao problema de recursos."
            ]
        },
        "admin-208": {
            "prompt": "Em uma sessão SSH administrativa do GHES 3.19, qual comando lê core.github-hostname sem definir outro nome nem aplicar mudanças de configuração?",
            "choices": [
                "ghe-config-check",
                "ghe-config core.github-hostname",
                "ghe-config core.github-hostname new.example.com",
                "ghe-config-apply"
            ],
            "explanations": [
                "Isso valida a configuração em vez de recuperar o valor solicitado.",
                "Com apenas a chave, ghe-config recupera seu valor atual.",
                "Adicionar um valor altera a configuração em vez de apenas consultá-la.",
                "Isso aplica alterações em vez de recuperar somente essa chave."
            ],
            "concept": "Os argumentos de ghe-config distinguem consulta de modificação.",
            "hints": [
                "Compare uma chave isolada com uma chave seguida de um valor novo.",
                "Diferencie consultar a configuração de validá-la ou aplicá-la."
            ]
        },
        "admin-209": {
            "prompt": "Durante um incidente no GHES 3.19, uma pessoa com SSH administrativo quer observar os logs da instalação conforme novas entradas chegam, e não baixar um pacote estático. Qual utilitário atende a isso?",
            "choices": [
                "ghe-support-bundle",
                "ghe-config-check",
                "ghe-nwo",
                "ghe-logs-tail"
            ],
            "explanations": [
                "Um pacote reúne evidências de diagnóstico em vez de acompanhar logs ao vivo.",
                "Isso valida a configuração, não observa novas entradas de log.",
                "Isso relaciona um ID de repositório ao proprietário e nome, não exibe logs ao vivo.",
                "Esse utilitário acompanha logs relevantes para observação contínua."
            ],
            "concept": "Acompanhar logs ao vivo e empacotar diagnósticos atendem a tarefas distintas.",
            "hints": [
                "Identifique se é necessário um retrato ou uma saída contínua.",
                "Relacione a observação solicitada ao propósito do utilitário."
            ]
        },
        "admin-210": {
            "prompt": "Uma empresa usa residência de dados em octocorp.ghe.com. Qual conta seu administrador deve usar para criar um chamado sobre essa empresa?",
            "choices": [
                "A conta GHE.com da empresa.",
                "Uma conta pessoal do GitHub.com com o mesmo email de trabalho.",
                "Uma conta GitHub.com que administra outra empresa.",
                "Uma conta GHE.com pertencente a outra empresa."
            ],
            "explanations": [
                "Chamados de empresas com residência de dados devem usar a conta GHE.com correspondente.",
                "O mesmo email não substitui o contexto da conta GHE.com exigido.",
                "Administrar outra empresa não estabelece esse contexto de conta com residência de dados.",
                "A conta deve corresponder à empresa que precisa de suporte."
            ],
            "concept": "Empresas com residência de dados exigem seu contexto de conta GHE.com no suporte.",
            "hints": [
                "Confira qual host possui a identidade empresarial.",
                "Diferencie o contexto da conta das informações incluídas no chamado."
            ]
        },
        "admin-211": {
            "prompt": "Uma pessoa administra GHES 3.19 e suspeita de acúmulo nas filas de tarefas em segundo plano. Qual utilitário mostra a distribuição das tarefas em fila e das que estão sendo processadas?",
            "choices": [
                "ghe-es-index-status",
                "ghe-announce",
                "ghe-aqueduct-info",
                "ghe-check-disk-usage"
            ],
            "explanations": [
                "Isso informa o status dos índices Elasticsearch, não a distribuição das filas.",
                "Isso gerencia um anúncio em vez de inspecionar tarefas em segundo plano.",
                "Esse utilitário informa tarefas em fila e as que estão sendo processadas.",
                "Isso investiga arquivos grandes ou excluídos ainda abertos, não filas de tarefas."
            ],
            "concept": "Escolha evidências do subsistema que apresenta o acúmulo.",
            "hints": [
                "Identifique se o gargalo está em uma fila, no disco ou em um índice.",
                "Diferencie observar uma fila de informar usuários sobre um incidente."
            ]
        },
        "admin-212": {
            "prompt": "O relatório empresarial de usuários inativos sinaliza uma conta. Como o administrador deve usar essa evidência?",
            "choices": [
                "Presumir que não houve trabalho em repositórios privados no período",
                "Revisar atividade medida e necessidade do negócio",
                "Concluir que nenhum token ou chave SSH foi usado no período",
                "Remover a licença imediatamente sem verificar necessidades do negócio"
            ],
            "explanations": [
                "O relatório exclui parte do trabalho em repositórios privados.",
                "Revise cobertura e necessidade antes de recuperar acesso.",
                "A atividade com tokens e SSH nem sempre conta como ativa aqui.",
                "A inatividade sozinha não demonstra que o acesso é desnecessário."
            ],
            "concept": "Interpretação de evidências de inatividade",
            "hints": [
                "Uma métrica tem um escopo documentado.",
                "Uma marca é sinal de revisão, não um veredito completo."
            ]
        },
        "admin-213": {
            "prompt": "Qual atividade pode ficar fora da definição documentada de atividade do relatório de inatividade do GitHub Enterprise Cloud?",
            "choices": [
                "Operações Git em repositórios privados",
                "Criar um pull request na empresa",
                "Comentar um pull request na empresa",
                "Publicar uma versão na empresa"
            ],
            "explanations": [
                "Operações Git em repositórios privados não contam como atividade aqui.",
                "Criar pull requests consta como atividade.",
                "Comentários em pull requests constam como atividade.",
                "Publicar versões consta como atividade."
            ],
            "concept": "Cobertura da métrica de inatividade",
            "hints": [
                "Um relatório pode excluir trabalho válido.",
                "Confira a definição exata antes de interpretar uma ausência."
            ]
        },
        "admin-214": {
            "prompt": "Um membro não fez commits, mas revisou pull requests durante o período. Como o administrador deve avaliar sua atividade?",
            "choices": [
                "Classificá-lo como inativo apenas pelos commits",
                "Reatribuir sua licença sem verificar outra atividade",
                "Usar estrelas como única medida de produtividade",
                "Incluir atividades pertinentes de revisão e colaboração"
            ],
            "explanations": [
                "Commits não capturam toda a colaboração.",
                "Decisões de licença exigem mais contexto.",
                "Estrelas não medem completamente a atividade individual.",
                "Revisões são participação significativa registrada."
            ],
            "concept": "Avaliação da adoção além de commits",
            "hints": [
                "Papéis diferentes contribuem de maneiras diferentes.",
                "Use medidas alinhadas ao trabalho realizado."
            ]
        },
        "admin-215": {
            "prompt": "Onde um proprietário empresarial gera o relatório de usuários inativos na interface atual em inglês do GitHub Enterprise Cloud?",
            "choices": [
                "Repository > Insights > Traffic",
                "Organization > Settings > Actions > Runners",
                "Enterprise > Compliance > Reports > Dormant Users",
                "Enterprise > Billing & Licensing > Budgets and alerts"
            ],
            "explanations": [
                "Tráfego do repositório não é relatório empresarial de inatividade.",
                "O inventário de executores não gera esse relatório.",
                "Relatórios de Compliance incluem Dormant Users.",
                "Orçamentos medem gastos, não inatividade de contas."
            ],
            "concept": "Local de relatórios de atividade empresarial",
            "hints": [
                "Escolha um relatório empresarial, não telemetria de repositório.",
                "Revisar atividade e controlar gastos têm entradas distintas."
            ]
        },
        "admin-216": {
            "prompt": "Duas equipes compartilham um centro de custos, mas precisam de orçamentos controlados separadamente. Qual desenho documentado atende a esse requisito?",
            "choices": [
                "Usar um orçamento compartilhado com dois limites de alerta.",
                "Criar um centro de custos separado para cada equipe.",
                "Criar dois orçamentos direcionados ao mesmo centro compartilhado.",
                "Adicionar as duas equipes empresariais como recursos do centro compartilhado."
            ],
            "explanations": [
                "Vários limites de alerta não criam orçamentos independentes por equipe.",
                "O orçamento abrange todo o centro; orçamentos independentes exigem centros separados.",
                "Ambos continuam cobrindo o centro compartilhado, não gastos de equipes separadas.",
                "Adicionar recursos separados não divide o escopo orçamentário do centro."
            ],
            "concept": "Limites orçamentários independentes exigem o escopo adequado de centros de custos.",
            "hints": [
                "Diferencie nomear uma equipe de criar um limite orçamentário.",
                "Confira se um orçamento abrange parte ou todo o centro."
            ]
        },
        "admin-217": {
            "prompt": "Antes de comparar quantity entre linhas de cobrança GitHub, quais campos evitam misturar medidas incompatíveis?",
            "choices": [
                "sku and unit_type",
                "repository and username only",
                "workflow_path and repository only",
                "date and cost_center_name only"
            ],
            "explanations": [
                "O SKU e a unidade identificam o que a quantidade mede.",
                "A propriedade não identifica a unidade.",
                "A atribuição ao fluxo não define a unidade.",
                "Data e alocação não estabelecem unidades comparáveis."
            ],
            "concept": "Interpretação de unidades de consumo",
            "hints": [
                "Um número precisa de produto e unidade.",
                "Quantidades de computação e armazenamento não são intercambiáveis."
            ]
        },
        "admin-218": {
            "prompt": "Qual campo do relatório de cobrança GitHub representa o valor faturável após descontos e ajustes de uso incluído?",
            "choices": [
                "quantity",
                "gross_amount",
                "discount_amount",
                "net_amount"
            ],
            "explanations": [
                "A quantidade mede unidades, não cobranças finais.",
                "O valor bruto vem antes da subtração dos descontos.",
                "O desconto é a redução, não o total faturável.",
                "O líquido é o bruto menos o desconto."
            ],
            "concept": "Custo medido bruto versus líquido",
            "hints": [
                "Diferencie volume de uso de dinheiro.",
                "Aplique ajustes antes de interpretar o valor faturável."
            ]
        },
        "admin-219": {
            "prompt": "Qual relatório de cobrança para download inclui workflow_path para investigar qual fluxo de Actions gerou consumo?",
            "choices": [
                "O relatório resumido de consumo",
                "O relatório de usuários inativos",
                "O relatório detalhado de consumo",
                "O relatório de tráfego do repositório"
            ],
            "explanations": [
                "O resumo não inclui workflow_path.",
                "A inatividade mede atividades definidas de contas.",
                "O relatório detalhado inclui atribuição por fluxo quando aplicável.",
                "O tráfego não atribui cobranças medidas a fluxos."
            ],
            "concept": "Investigação de cobrança por fluxo",
            "hints": [
                "Escolha a granularidade necessária do relatório.",
                "Um resumo pode omitir o campo de atribuição."
            ]
        },
        "admin-220": {
            "prompt": "Um orçamento empresarial de Actions envia alertas, mas tem 'Stop usage when budget limit is reached' desativado. O que ocorre ao exceder o valor?",
            "choices": [
                "O novo uso coberto de Actions é bloqueado imediatamente",
                "O uso continua enquanto os alertas notificam",
                "O orçamento aumenta automaticamente para igualar o gasto real",
                "Somente o repositório de maior consumo é bloqueado"
            ],
            "explanations": [
                "Bloquear exige a opção de parada, não apenas alertas.",
                "Sem a opção de parada, o orçamento não bloqueia o uso.",
                "Um alerta não aumenta automaticamente o orçamento.",
                "Alertas não bloqueiam seletivamente um repositório."
            ],
            "concept": "Alertas versus aplicação de orçamentos",
            "hints": [
                "Notificar e bloquear são opções distintas.",
                "Leia a configuração real de parada."
            ]
        },
        "admin-221": {
            "prompt": "Um orçamento de Actions com parada habilitada se esgota, mas um orçamento SKU de executor sobreposto tem saldo. Qual orçamento controla o uso coberto posterior?",
            "choices": [
                "O orçamento aplicável esgotado com parada",
                "Somente o orçamento de maior valor",
                "Somente o orçamento criado mais recentemente",
                "Somente o orçamento SKU do executor"
            ],
            "explanations": [
                "Qualquer orçamento aplicável esgotado com parada pode bloquear uso.",
                "Um valor maior não anula outro limite obrigatório.",
                "A ordem de criação não determina precedência.",
                "Um orçamento SKU não contorna um limite de produto aplicável."
            ],
            "concept": "Aplicação de orçamentos sobrepostos",
            "hints": [
                "Vários orçamentos podem cobrir o mesmo uso.",
                "Compare os escopos e as opções de aplicação."
            ]
        },
        "admin-222": {
            "prompt": "Um repositório remove repetidamente caches úteis ao atingir seu limite. Qual mudança reduz essa rotatividade sem aumentar o espaço permitido?",
            "choices": [
                "Aumentar o espaço de cache permitido do repositório",
                "Gerar uma chave única para cada nova tentativa",
                "Guardar workspaces completos com arquivos gerados",
                "Limitar o conteúdo a dependências reutilizadas com frequência"
            ],
            "explanations": [
                "Aumenta o espaço, contrariando o requisito.",
                "Chaves únicas criam entradas adicionais e reduzem reutilização.",
                "Caminhos amplos consomem mais espaço e podem agravar a remoção.",
                "Reduzir conteúdo de pouco valor preserva espaço para reutilização útil."
            ],
            "concept": "Otimização de armazenamento e remoção de cache",
            "hints": [
                "Compare criação de entradas com reutilização útil.",
                "Considere quais arquivos justificam o espaço ocupado."
            ]
        },
        "admin-223": {
            "prompt": "Uma organização paga por codespaces parados e sem uso. Qual política reduz a duração futura de seu armazenamento?",
            "choices": [
                "Um tempo menor antes de parar codespaces ociosos",
                "Um tamanho de máquina de codespace permitido menor",
                "Uma retenção máxima de codespaces mais curta",
                "Menos regiões disponíveis para pré-compilações de codespaces"
            ],
            "explanations": [
                "Parar não encerra a duração do armazenamento retido.",
                "O tamanho não define a retenção de recursos parados.",
                "Restrições limitam quanto tempo codespaces parados permanecem.",
                "Regiões não definem quando esses codespaces são excluídos."
            ],
            "concept": "Limpeza de ambientes de desenvolvimento sem uso",
            "hints": [
                "Computação parada ainda pode deixar dados armazenados.",
                "Escolha um controle de ciclo de vida do recurso cobrado."
            ]
        },
        "admin-224": {
            "prompt": "Trabalhos elegíveis esperam durante picos curtos, mas as máquinas ficam ociosas boa parte do dia. Qual estratégia de capacidade atende?",
            "choices": [
                "Manter capacidade para o pico durante períodos tranquilos",
                "Autoescalar executores efêmeros conforme a demanda",
                "Serializar todos os trabalhos em um executor persistente",
                "Aumentar CPU por executor sem mudar o tamanho da frota"
            ],
            "explanations": [
                "Uma frota fixa para o pico mantém a capacidade ociosa medida.",
                "Escalar por demanda ajusta capacidade a picos e períodos tranquilos.",
                "Serializar tudo agrava a fila durante os picos.",
                "Mais CPU não adapta diretamente a frota à demanda."
            ],
            "concept": "Otimização de executores por demanda",
            "hints": [
                "Diferencie pressão da fila de duração do trabalho.",
                "Ajuste o provisionamento à curva de demanda observada."
            ]
        },
        "admin-225": {
            "prompt": "Em uma solicitação de cobrança autenticada, qual rota obtém o resumo de consumo de ENTERPRISE para setembro de 2026?",
            "choices": [
                "/enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
                "/enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09",
                "/orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
                "/enterprises/ENTERPRISE/audit-log?phrase=created:2026-09"
            ],
            "explanations": [
                "Seleciona o resumo empresarial e os parâmetros temporais documentados.",
                "created não é o filtro temporal documentado para esse resumo.",
                "Aponta para uma organização, não para a empresa.",
                "O endpoint de auditoria não retorna resumos de consumo faturado."
            ],
            "concept": "Automação de relatórios de custos empresariais",
            "hints": [
                "Relacione escopo da conta e finalidade do endpoint.",
                "Filtros temporais de cobrança diferem dos de auditoria."
            ]
        }
    }
};
