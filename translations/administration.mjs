// Preview: translations of original practice material; human approval is pending.
export const translations = {
  "es": {
    "admin-001": {
      "prompt": "Una empresa quiere que su proveedor de identidad cree cuentas GitHub y controle todo su ciclo de vida. Los empleados no deben utilizar esas cuentas para contribuciones públicas. ¿Qué modelo de cuenta encaja?",
      "choices": [
        "Enterprise Managed Users",
        "Cuentas personales con SAML SSO de la organización",
        "Cuentas personales con verificación de correo electrónico obligatoria",
        "Colaboradores externos con invitaciones al repositorio"
      ],
      "explanations": [
        "El IdP aprovisiona cuentas administradas, cuya colaboración está restringida a la empresa.",
        "La organización SSO vincula cuentas personales pero no hace que su ciclo de vida sea administrado por la empresa.",
        "La verificación por correo electrónico no le otorga al IdP el control del aprovisionamiento de cuentas.",
        "La colaboración externa otorga acceso al repositorio, no un ciclo de vida de cuenta administrado por la empresa."
      ],
      "concept": "Elegir un modelo de identidad empresarial",
      "hints": [
        "¿Quién debe controlar el ciclo de vida de la cuenta, en lugar de solo controlar el acceso?",
        "¿Qué límites de colaboración requiere la empresa?"
      ]
    },
    "admin-002": {
      "prompt": "Los ingenieros deben contribuir a proyectos públicos de código abierto utilizando las mismas identidades GitHub que utilizan para trabajar. La empresa quiere protección SAML para sus recursos empresariales. ¿Qué diseño cumple mejor con ambos requisitos?",
      "choices": [
        "Cuentas de usuario administradas con repositorios públicos habilitados",
        "Cuentas personales con SAML SSO empresarial",
        "Una cuenta administrada compartida por equipo de ingeniería",
        "Acceso anónimo a repositorios de trabajo privados"
      ],
      "explanations": [
        "Las cuentas de usuario administradas no pueden crear contenido público ni colaborar fuera de su empresa.",
        "Las cuentas personales pueden admitir la colaboración externa, mientras que SAML protege los recursos empresariales.",
        "Las cuentas compartidas socavan la identidad individual y no eliminan las restricciones de usuarios administrados.",
        "El acceso anónimo al repositorio privado no proporciona colaboración empresarial autenticada."
      ],
      "concept": "Cuentas personales versus usuarios administrados",
      "hints": [
        "¿Se requiere aquí el control de la identidad misma?",
        "¿Cómo afecta el modelo de cuenta a las aportaciones fuera del trabajo?"
      ]
    },
    "admin-003": {
      "prompt": "Después de habilitar SAML SSO para una organización que utiliza cuentas personales, un miembro puede iniciar sesión en GitHub, pero se le redirige a IdP antes de abrir el repositorio privado de una organización. ¿Qué explica esto?",
      "choices": [
        "La contraseña GitHub del miembro debe coincidir con la contraseña IdP",
        "SAML convierte automáticamente al miembro en un usuario administrado",
        "La autenticación de cuenta GitHub y el acceso SAML a los recursos de la organización están separados",
        "El miembro debe crear otra cuenta personal para cada organización protegida por SAML."
      ],
      "explanations": [
        "SAML no requiere contraseñas sincronizadas de GitHub y IdP.",
        "La organización habilitante SAML no convierte cuentas personales en usuarios administrados.",
        "El inicio de sesión de la cuenta personal y la sesión SAML de la organización son requisitos distintos.",
        "Una cuenta personal se puede vincular a la identidad externa sin crear una cuenta por organización."
      ],
      "concept": "Capas de autenticación con SAML",
      "hints": [
        "¿Qué identidad establece la sesión GitHub?",
        "¿Qué límite adicional protege los recursos de la organización?"
      ]
    },
    "admin-004": {
      "prompt": "Una organización ya utiliza SAML SSO con cuentas personales. Ahora necesita aprovisionamiento y eliminación de membresías compatibles con IdP en lugar de invitaciones manuales. ¿Qué integración aborda este requisito del ciclo de vida?",
      "choices": [
        "CODEOWNERS",
        "Una verificación de estado requerida",
        "Claves de implementación del repositorio",
        "Aprovisionamiento SCIM"
      ],
      "explanations": [
        "CODEOWNERS enruta las solicitudes de revisión en lugar de aprovisionar a los miembros de la organización.",
        "Las comprobaciones de estado rigen los cambios, no el ciclo de vida de la identidad.",
        "Las claves de implementación autentican las operaciones de Git para un repositorio, no el aprovisionamiento de membresía.",
        "SCIM automatiza el intercambio de información de identidad y las operaciones admitidas del ciclo de vida de la membresía."
      ],
      "concept": "Aprovisionamiento de membresía SCIM",
      "hints": [
        "¿El inicio de sesión gestiona automáticamente todos los eventos del ciclo de vida de la membresía?",
        "¿Qué estándar intercambia información de aprovisionamiento entre sistemas de identidad?"
      ]
    },
    "admin-005": {
      "prompt": "Un administrador dice que la sincronización del equipo y el SCIM son intercambiables porque ambos involucran un IdP. ¿Qué distinción es más útil al diseñar el acceso a la organización?",
      "choices": [
        "SCIM maneja el ciclo de vida del aprovisionamiento; La sincronización del equipo alinea la membresía del equipo con los grupos IdP.",
        "La sincronización del equipo reemplaza toda la autenticación GitHub",
        "SCIM define los requisitos de aprobación de ramas",
        "La sincronización del equipo convierte automáticamente a cada miembro en propietario de la organización"
      ],
      "explanations": [
        "Estas integraciones resuelven diferentes problemas de ciclo de vida y membresía de grupos.",
        "La sincronización de grupos no es un protocolo de autenticación.",
        "SCIM no configura reglas de revisión del repositorio.",
        "La sincronización de grupos no otorga inherentemente propiedad a la organización."
      ],
      "concept": "SCIM versus sincronización de equipos",
      "hints": [
        "¿El ciclo de vida de la cuenta y la membresía en un grupo de proyectos son la misma tarea?",
        "¿Qué necesitaría actualizarse cuando una persona cambia de departamento?"
      ]
    },
    "admin-006": {
      "prompt": "Un equipo está sincronizado con un grupo IdP. Un mantenedor del equipo GitHub necesita agregar otro miembro sincronizado. ¿Dónde debería realizarse normalmente el cambio de membresía autorizada?",
      "choices": [
        "En el archivo CODEOWNERS del repositorio",
        "En el grupo IdP conectado",
        "En la lista de excepciones de un ruleset de ramas",
        "En la configuración de Git local del miembro"
      ],
      "explanations": [
        "CODEOWNERS asigna la responsabilidad de revisión sin cambiar la membresía del grupo sincronizado.",
        "El grupo IdP conectado es la fuente de membresía del equipo sincronizado.",
        "Una lista de omisión cambia las excepciones de las reglas en lugar de la fuente de membresía del equipo.",
        "La configuración local de Git no puede actualizar un equipo administrado por IdP."
      ],
      "concept": "Fuente de autoridad de la membresía sincronizada",
      "hints": [
        "¿Qué sistema proporciona la lista de miembros?",
        "¿Sobreviviría una configuración local de repositorio a una sincronización de identidades?"
      ]
    },
    "admin-007": {
      "prompt": "Antes de imponer la autenticación de dos factores en una organización que utiliza cuentas personales, el propietario quiere reducir las interrupciones de acceso evitables. ¿Qué preparación es la más adecuada?",
      "choices": [
        "Comparta los códigos de recuperación de un propietario con cada miembro",
        "Deshabilitar el registro de auditoría durante la aplicación",
        "Revise la preparación, notifique a los colaboradores afectados y pídales que configuren 2FA",
        "Reemplace todos los permisos del repositorio con visibilidad pública"
      ],
      "explanations": [
        "Los códigos de recuperación son credenciales privadas y no deben distribuirse a los miembros.",
        "Deshabilitar la observabilidad no prepara a los usuarios para los requisitos de autenticación.",
        "La revisión de la preparación y la comunicación avanzada reducen las interrupciones causadas por la aplicación de la ley.",
        "La visibilidad pública expone el contenido y no resuelve la preparación de la autenticación."
      ],
      "concept": "Implementación segura de la organización 2FA",
      "hints": [
        "¿Quién podría perder el acceso cuando cambia un requisito de autenticación?",
        "¿Qué pueden establecer los administradores antes de hacer cumplir la política?"
      ]
    },
    "admin-008": {
      "prompt": "Un usuario se autentica exitosamente a través de SAML pero aún no puede abrir un repositorio privado en particular. Otros repositorios de organizaciones funcionan. ¿Qué debería comprobar primero el administrador?",
      "choices": [
        "Si se debe recrear la configuración SAML de la organización",
        "Si requerir commits firmado permitiría el acceso al navegador",
        "Si una regla de revisión obligatoria impide leer el repositorio",
        "Si el usuario tiene permiso efectivo para ese repositorio"
      ],
      "explanations": [
        "El acceso exitoso a SAML en otros lugares aleja la reconstrucción de la autenticación en toda la organización.",
        "Las firmas de confirmación rigen la verificación commit, no la autorización de lectura del repositorio privado.",
        "Los requisitos de revisión rigen la combinación de cambios, no la lectura de un repositorio privado.",
        "La autenticación por sí sola no otorga acceso a todos los repositorios privados."
      ],
      "concept": "Autenticación versus autorización",
      "hints": [
        "¿Una identidad verificada recibe automáticamente acceso a todos los recursos?",
        "¿Qué tareas específicas del repositorio podrían explicar la diferencia?"
      ]
    },
    "admin-009": {
      "prompt": "Un especialista de soporte debe etiquetar y cerrar issues en un repositorio privado, pero no debe enviar código. ¿Qué función del repositorio integrado es la más adecuada?",
      "choices": [
        "Triage",
        "Write",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Triage admite la gestión proactiva de issue sin acceso de escritura de código.",
        "Write permite cambios de código más allá de las funciones de soporte indicadas.",
        "Maintain incluye una gestión de repositorios más amplia que la que requiere la clasificación de issue.",
        "Admin incluye configuraciones sensibles y capacidades destructivas más allá de esta necesidad."
      ],
      "concept": "Gestión de privilegios mínimos issue",
      "hints": [
        "¿Qué tareas se refieren a la colaboración en lugar de la modificación del código?",
        "¿Cuál es el rol más limitado diseñado para esas tareas?"
      ]
    },
    "admin-010": {
      "prompt": "Un desarrollador debe hacer push de ramas de funcionalidades y contribuir con cambios al repositorio privado de una organización. No administra el repositorio. ¿Qué rol integrado es el mínimo adecuado?",
      "choices": [
        "Read",
        "Write",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Read no permite enviar ramas al repositorio.",
        "Write está destinado a colaboradores que hacen push de código activamente.",
        "Maintain agrega capacidades de administración innecesarias para la contribución de código normal.",
        "Admin otorga configuraciones y privilegios destructivos más allá de esta tarea."
      ],
      "concept": "Permisos del colaborador de código",
      "hints": [
        "¿El usuario está modificando el contenido o la gobernanza del repositorio?",
        "¿Qué permiso mínimo admite la inserción de código?"
      ]
    },
    "admin-011": {
      "prompt": "Un coordinador de proyecto necesita una gestión amplia del repositorio día a día sin operaciones administrativas sensibles o destructivas. ¿Qué función integrada está diseñada para esto?",
      "choices": [
        "Read",
        "Triage",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Read es para visualización y discusión en lugar de administración amplia de repositorios.",
        "Triage se centra en la gestión de la colaboración sin la función de mantenimiento más amplia.",
        "Maintain está dirigido a directores de proyectos que no necesitan acciones sensibles o destructivas.",
        "Admin incluye explícitamente operaciones sensibles y destructivas."
      ],
      "concept": "Rol de mantenimiento del repositorio",
      "hints": [
        "¿En qué se diferencia la gestión rutinaria de proyectos de la administración completa?",
        "¿Qué función deja deliberadamente de lado los poderes sensibles del administrador?"
      ]
    },
    "admin-012": {
      "prompt": "Un auditor externo necesita inspeccionar el código y discutir los hallazgos en un repositorio privado, sin cambios de código ni clasificación issue. ¿Qué función de repositorio es la más adecuada?",
      "choices": [
        "Admin",
        "Maintain",
        "Write",
        "Read"
      ],
      "explanations": [
        "Admin expondría capacidades confidenciales de administración de repositorios.",
        "Maintain otorga capacidades de gestión que la auditoría no requiere.",
        "Write permite cambios de código fuera del ámbito de competencia del auditor.",
        "Read admite visualización y discusión sin privilegios de escritura de código."
      ],
      "concept": "Acceso de auditoría exclusivo para Read",
      "hints": [
        "¿Qué acciones están explícitamente fuera del alcance del auditor?",
        "¿Qué función apoya la inspección sin modificaciones?"
      ]
    },
    "admin-013": {
      "prompt": "Actualmente, cada miembro de una organización puede leer todos sus repositorios privados mediante los permisos base. La empresa quiere que cada repositorio privado requiera un permiso otorgado explícitamente. ¿Cuál es el cambio más directo a nivel de organización?",
      "choices": [
        "Establezca los permisos básicos de la organización en No permission y revise las concesiones explícitas",
        "Establezca la función del repositorio de cada equipo en Read manteniendo el permiso base existente",
        "Requerir commits firmado en las ramas predeterminadas",
        "Elimine las concesiones directas del repositorio manteniendo el permiso base existente"
      ],
      "explanations": [
        "No permission elimina el permiso base general; los permisos otorgados a equipos y los permisos directos aún deben revisarse.",
        "Las concesiones de equipo más débiles no eliminan el acceso ya otorgado por los permisos básicos de la organización.",
        "El commits firmado rige la verificación del commit en lugar de los permisos de visibilidad del repositorio.",
        "Eliminar los permisos directos deja vigente el permiso base general."
      ],
      "concept": "Permisos básicos de la organización",
      "hints": [
        "¿Qué concesión se aplica antes de que se consideren los permisos específicos del equipo?",
        "¿Qué otros permisos otorgados permanecen después de cambiar los permisos base?"
      ]
    },
    "admin-014": {
      "prompt": "Un miembro tiene Read a través de un equipo y Write a través de otro en el mismo repositorio. No se aplican otras restricciones. ¿Cuál es su función de repositorio efectiva?",
      "choices": [
        "Read, porque gana el equipo más restrictivo",
        "Write, porque las concesiones de acceso son acumulativas",
        "Triage, porque GitHub promedia los roles",
        "Sin acceso porque varios equipos otorgan conflictos"
      ],
      "explanations": [
        "Una concesión de equipo más débil no anula una concesión de repositorio más sólida.",
        "El permiso de repositorio aplicable más fuerte del usuario rige estas concesiones acumulativas.",
        "GitHub no promedia las funciones del repositorio.",
        "La membresía en varios equipos no invalida sus concesiones de acceso."
      ],
      "concept": "Permisos de repositorio efectivos",
      "hints": [
        "¿Otro permiso otorgado actúa como una denegación?",
        "¿Qué sucede cuando una persona recibe diferentes niveles de acceso?"
      ]
    },
    "admin-015": {
      "prompt": "Un equipo principal tiene acceso Read a un repositorio. Un equipo secundario anidado necesita acceso Write. ¿Qué enfoque coincide con el modelo de permisos de equipo de GitHub?",
      "choices": [
        "Elimine el equipo secundario porque los equipos anidados no pueden acceder a los repositorios",
        "Convertir al equipo principal en propietario de la organización",
        "Otorgar Write al equipo secundario además de su acceso heredado",
        "Configurar el equipo principal con Write y confiar en que el equipo secundario lo deniegue"
      ],
      "explanations": [
        "Los equipos secundarios anidados pueden acceder a los repositorios y heredar los permisos principales.",
        "La propiedad de la organización no es una función de equipo ni es necesaria para la contribución al repositorio.",
        "Un equipo secundario hereda el acceso del equipo principal y puede recibir un permiso adicional más amplio.",
        "Los equipos secundarios no pueden utilizar un rol más débil para denegar los permisos principales heredados."
      ],
      "concept": "Herencia de equipos anidados",
      "hints": [
        "¿Qué hereda un equipo secundario de su equipo principal?",
        "¿Puede un permiso adicional ampliar el acceso sin modificar todos los equipos del mismo nivel?"
      ]
    },
    "admin-016": {
      "prompt": "Un empleado de una agencia necesita acceso a un repositorio privado, pero no debe convertirse en miembro de la organización. ¿Qué mecanismo de colaboración encaja?",
      "choices": [
        "Propiedad de la organización",
        "Propiedad de la empresa",
        "Membresía en todos los equipos internos.",
        "Acceso de colaborador externo a ese repositorio"
      ],
      "explanations": [
        "La propiedad de la organización es mucho más amplia que la colaboración de un solo repositorio.",
        "La propiedad de la empresa es inapropiada para el acceso al proyecto de un contratista.",
        "La membresía en un equipo requiere membresía en la organización y amplía el alcance innecesariamente.",
        "Los colaboradores externos reciben acceso a repositorios específicos sin ser miembros de una organización."
      ],
      "concept": "Ámbito de colaborador externo",
      "hints": [
        "¿Es necesaria la membresía de toda la organización para este compromiso?",
        "¿Qué mecanismo de acceso se adjunta directamente a un repositorio?"
      ]
    },
    "admin-017": {
      "prompt": "Un analista financiero sólo necesita acceso a la facturación de la organización. ¿Qué rol integrado en la organización es más apropiado que convertir al analista en propietario?",
      "choices": [
        "gerente de facturación",
        "Administrador del repositorio",
        "mantenedor del equipo",
        "Colaborador externo"
      ],
      "explanations": [
        "Los administradores de facturación pueden administrar la facturación de la organización sin tener la propiedad total de la misma.",
        "La administración del repositorio no proporciona la función de facturación de la organización prevista.",
        "Los mantenedores de equipos administran equipos en lugar de la facturación de la organización.",
        "La colaboración externa es acceso al repositorio, no una tarea de gestión de facturación."
      ],
      "concept": "Separar las responsabilidades de facturación",
      "hints": [
        "¿La tarea requiere control sobre los repositorios y los miembros?",
        "¿Qué responsabilidad se puede delegar independientemente de la propiedad de la organización?"
      ]
    },
    "admin-018": {
      "prompt": "Una persona debe gestionar la membresía y la configuración de un equipo, pero no debe controlar toda la organización. ¿Qué rol en el equipo debería considerar un propietario?",
      "choices": [
        "propietario de la empresa",
        "mantenedor del equipo",
        "Responsable de facturación de la organización",
        "Repositorio Read"
      ],
      "explanations": [
        "La propiedad de la empresa otorga autoridad no relacionada en toda la empresa.",
        "Los mantenedores de equipos administran su equipo sin necesidad de ser dueños de la organización.",
        "La gestión de facturación no confiere administración del equipo.",
        "Una función de repositorio en sí misma no delega la gestión del equipo."
      ],
      "concept": "Administración delegada del equipo",
      "hints": [
        "¿A qué ámbito pertenece la responsabilidad?",
        "¿Se puede delegar la gestión de equipos sin otorgar control a toda la organización?"
      ]
    },
    "admin-019": {
      "prompt": "Durante una revisión de acceso, un desarrollador mantiene el acceso al repositorio Write después de ser eliminado del equipo esperado. ¿Qué debería investigar el propietario a continuación?",
      "choices": [
        "Si es necesario habilitar la aplicación de firma commit",
        "Si eliminar la clave SSH del desarrollador por sí sola eliminaría la función del repositorio",
        "Otros equipos, permisos directos al repositorio y permisos base de la organización",
        "Si el desarrollador tiene clones locales"
      ],
      "explanations": [
        "Los requisitos de firma de compromiso no identifican la concesión de autorización restante.",
        "Revocar una credencial no elimina una función de repositorio otorgada de forma independiente.",
        "Otra concesión aplicable puede preservar el acceso después de que desaparezca la concesión de un equipo.",
        "Los clones locales retienen los datos pero no otorgan acceso al repositorio activo Write."
      ],
      "concept": "Seguimiento de permisos residuales",
      "hints": [
        "¿El equipo eliminado podría haber sido sólo una vía de acceso?",
        "¿Qué permisos otorgados existen por encima o además de los de ese equipo?"
      ]
    },
    "admin-020": {
      "prompt": "El propietario de una empresa está investigando un repositorio privado en una organización donde el propietario no tiene acceso al repositorio. ¿Qué suposición deberían evitar?",
      "choices": [
        "La administración de políticas empresariales y el acceso al repositorio tienen diferentes alcances",
        "Es posible que aún se necesite una concesión de repositorio para inspeccionar el contenido.",
        "Los propietarios de la organización pueden ayudar a establecer el acceso adecuado al repositorio",
        "La propiedad empresarial otorga automáticamente acceso a cada repositorio privado"
      ],
      "explanations": [
        "Esta distinción separa correctamente el gobierno empresarial de la autorización del repositorio.",
        "El contenido privado aún requiere los permisos de acceso pertinentes.",
        "Los administradores apropiados a nivel de organización pueden organizar el acceso autorizado.",
        "La propiedad empresarial por sí sola no otorga automáticamente acceso a todos los repositorios privados."
      ],
      "concept": "Límites de las facultades de los propietarios de la empresa",
      "hints": [
        "¿La autoridad política implica acceso al contenido en todas partes?",
        "¿Qué ámbito controla realmente la autorización de un repositorio privado?"
      ]
    },
    "admin-021": {
      "prompt": "Una organización con un plan que admita funciones de repositorio personalizadas necesita una responsabilidad personalizada más allá de una función estándar. ¿Cuál es el enfoque de diseño correcto?",
      "choices": [
        "Elija un rol base heredado adecuado y agregue solo los permisos admitidos necesarios",
        "Utilice un rol personalizado para restar Write heredado de un equipo",
        "Dar propiedad a cada organización receptora primero",
        "Edite el cliente Git de cada destinatario para definir el nuevo rol"
      ],
      "explanations": [
        "Los roles de repositorio personalizados amplían un rol básico heredado con permisos adicionales admitidos.",
        "Los roles personalizados no niegan el acceso ya otorgado a través de otras rutas.",
        "La propiedad de la organización anula el propósito de los permisos de repositorio estrictamente personalizados.",
        "Los roles del repositorio son configuraciones de autorización del lado del servidor, no una configuración de Git local."
      ],
      "concept": "Diseño de roles de repositorio personalizado",
      "hints": [
        "¿El rol es aditivo o un mecanismo de negación?",
        "¿Qué línea de base mínima se ajusta a la responsabilidad prevista?"
      ]
    },
    "admin-022": {
      "prompt": "Un administrador quiere que el mismo equipo de fuerza laboral esté disponible en varias organizaciones de una empresa que admita equipos empresariales. ¿Qué ámbito se adapta mejor a este requisito?",
      "choices": [
        "Una lista de colaboradores exclusiva del repositorio",
        "Un equipo empresarial",
        "Una entrada CODEOWNERS en un repositorio",
        "Una única clave de implementación de repositorio"
      ],
      "explanations": [
        "Una lista de colaboradores del repositorio no modela de forma centralizada un equipo entre organizaciones.",
        "Los equipos empresariales proporcionan una estructura de equipo a nivel empresarial en todas las organizaciones.",
        "CODEOWNERS define la responsabilidad de revisión dentro de un repositorio, no la membresía empresarial.",
        "Las claves de implementación autentican el acceso a Git y no representan equipos de fuerza laboral."
      ],
      "concept": "Alcance del equipo a nivel empresarial",
      "hints": [
        "¿Se pretende que el grupo se detenga en un límite de la organización?",
        "¿Qué ámbito administrativo coincide con su reutilización?"
      ]
    },
    "admin-023": {
      "prompt": "Antes de seleccionar un IdP para un Enterprise Managed Users, un arquitecto quiere la menor incertidumbre de integración. ¿Qué opción sigue el camino pavimentado recomendado por GitHub?",
      "choices": [
        "Elija cualquier implementación de SAML sin verificar el soporte de aprovisionamiento",
        "Utilice proveedores independientes no compatibles para la autenticación y el aprovisionamiento de cuentas",
        "Utilice un socio compatible IdP para la autenticación y el aprovisionamiento de SCIM",
        "Reemplazar el aprovisionamiento con contraseñas compartidas"
      ],
      "explanations": [
        "La compatibilidad con SAML por sí sola no establece soporte para el aprovisionamiento de usuarios administrados.",
        "Dividir integraciones no compatibles aumenta la incertidumbre en lugar de seguir el camino pavimentado.",
        "GitHub recomienda un único socio IdP para la autenticación y el aprovisionamiento.",
        "Las contraseñas compartidas no proporcionan soporte para el aprovisionamiento de usuarios administrados individuales."
      ],
      "concept": "Arquitectura IdP de usuario administrado compatible",
      "hints": [
        "¿Qué dos funciones de identidad deben trabajar juntas?",
        "¿Qué reduce la complejidad de la integración y el soporte?"
      ]
    },
    "admin-024": {
      "prompt": "Un empleado gestionado abandona una empresa Enterprise Managed Users. ¿Qué sistema debería impulsar el ciclo de vida de desaprovisionamiento admitido de la cuenta?",
      "choices": [
        "El asistente de credenciales Git local del empleado",
        "Una regla de protección de ramas del repositorio",
        "Una edición manual de cada archivo CODEOWNERS",
        "Integración de aprovisionamiento IdP y SCIM de la empresa"
      ],
      "explanations": [
        "Quitar una credencial local no desaprovisiona centralmente una cuenta administrada.",
        "Las reglas de ramas restringen los cambios, no el ciclo de vida de la cuenta.",
        "Los archivos de enrutamiento de revisión no son la autoridad para dar de baja la cuenta.",
        "El ciclo de vida de la cuenta administrada se controla mediante la integración del proveedor de identidad configurado."
      ],
      "concept": "Baja de usuarios administrados",
      "hints": [
        "¿Dónde se aprovisionó originalmente la identidad administrada?",
        "¿Cómo puede la exclusión cubrir la identidad en lugar de una sola credencial?"
      ]
    },
    "admin-025": {
      "prompt": "Una organización de cuenta personal requiere SAML SSO. Un PAT clásico con el alcance correcto funciona para los repositorios propios del usuario, pero no puede acceder al repositorio privado de la organización aunque el usuario tenga acceso en el navegador. ¿Qué paso específico de la credencial se debe verificar?",
      "choices": [
        "Si el PAT está autorizado para el SAML SSO de esa organización.",
        "Si la clave SSH del usuario está autorizada en lugar de la PAT",
        "Si las cookies del navegador deben integrarse en el valor PAT",
        "Si la contraseña GitHub del usuario debe cambiarse para que coincida con la contraseña IdP"
      ],
      "explanations": [
        "Las PAT clásicas necesitan autorización SSO para acceder a organizaciones que aplican SAML SSO.",
        "La autorización SSH no autoriza una credencial PAT separada.",
        "Un PAT no se amplía añadiendo material de sesión del navegador.",
        "SAML no requiere que la contraseña GitHub coincida con la contraseña IdP."
      ],
      "concept": "SAML autorización de PAT clásicos",
      "hints": [
        "¿Pueden una sesión de navegador y una credencial API tener estados de autorización diferentes?",
        "¿Qué límite organizacional adicional se aplica a esta credencial?"
      ]
    },
    "admin-026": {
      "prompt": "La clave SSH de un usuario funciona con repositorios personales pero falla en una organización protegida por SAML donde el usuario ya tiene permiso de repositorio. ¿Qué verificación está más directamente relacionada con SSO?",
      "choices": [
        "Comprobar si la rama local se llama main",
        "Compruebe si la clave SSH está autorizada para el SSO de la organización.",
        "Cambiar la licencia del repositorio",
        "Convertir al usuario en administrador de facturación empresarial"
      ],
      "explanations": [
        "El nombre de la rama no autoriza una credencial SSH para SAML.",
        "Se debe autorizar una clave SSH para acceder a una organización protegida por SAML.",
        "La licencia de software de un repositorio no controla la autorización SSH.",
        "La autoridad de facturación no está relacionada con la autorización de credencial SSH SSO."
      ],
      "concept": "Autorización SAML de claves SSH",
      "hints": [
        "¿Qué credencial utiliza esta conexión Git?",
        "¿Esa credencial está vinculada por separado al requisito de identidad de la organización?"
      ]
    },
    "admin-027": {
      "prompt": "Una organización planea hacer cumplir SAML SSO. ¿Qué preparación protege mejor la continuidad si el IdP deja de estar disponible?",
      "choices": [
        "Almacene la contraseña IdP en un issue público",
        "Convertir todos los repositorios privados en públicos",
        "Conserve y pruebe de forma segura el proceso de recuperación documentado de SAML",
        "Eliminar todos los propietarios de la organización"
      ],
      "explanations": [
        "La publicación de una contraseña compromete la autenticación en lugar de preservar la recuperación segura.",
        "La visibilidad pública expone datos y no es un mecanismo de recuperación SSO.",
        "Los procedimientos de recuperación documentados y los códigos de recuperación protegidos respaldan el acceso de emergencia autorizado.",
        "Eliminar propietarios reduce la capacidad de recuperación y la supervisión operativa."
      ],
      "concept": "Preparación de recuperación SAML",
      "hints": [
        "¿Qué sucede si el servicio de identidad es la dependencia fallida?",
        "¿Qué material de acceso de emergencia necesita protección antes de la aplicación de la ley?"
      ]
    },
    "admin-028": {
      "prompt": "El propietario de una organización quiere que solo los administradores seleccionados cambien la membresía de la organización. Una propuesta otorga a cada desarrollador el rol de propietario por conveniencia. ¿Cuál es la razón más fuerte para rechazarlo?",
      "choices": [
        "Los propietarios no pueden gestionar la membresía, por lo que la propuesta no funcionaría en absoluto",
        "El repositorio Write ya incluye todas las configuraciones de la organización",
        "La autoridad del propietario caduca automáticamente después de la siguiente inserción de código del desarrollador.",
        "La propiedad de la organización otorga una amplia autoridad administrativa más allá del desarrollo normal."
      ],
      "explanations": [
        "Los propietarios pueden gestionar la membresía de la organización; la preocupación es la autoridad excesiva.",
        "El repositorio Write no equivale a la administración de toda la organización.",
        "La propiedad no caduca automáticamente después de una contribución de código.",
        "Un privilegio mínimo requiere limitar el rol amplio de propietario de la organización."
      ],
      "concept": "Limitar la propiedad de la organización",
      "hints": [
        "¿En qué ámbito se produce la contribución diaria del código?",
        "¿Qué responsabilidades adicionales conlleva el puesto propuesto?"
      ]
    },
    "admin-029": {
      "prompt": "Finaliza un contrato de proveedor. El proveedor es un colaborador externo en dos repositorios privados. ¿Cuál es la acción de eliminación de acceso más específica?",
      "choices": [
        "Eliminar el acceso de colaborador del proveedor de los repositorios relevantes",
        "Eliminar toda la organización",
        "Eliminar todos los equipos de empleados",
        "Deshabilite GitHub Actions en toda la empresa"
      ],
      "explanations": [
        "Eliminar los permisos específicos del colaborador atiende la finalización de la colaboración sin causar interrupciones ajenas a ella.",
        "Eliminar la organización es desproporcionado y destructivo.",
        "Eliminar el equipo de empleados no atiende específicamente los permisos directos del proveedor.",
        "Deshabilitar Actions no revoca el acceso del proveedor al repositorio."
      ],
      "concept": "Baja de colaboradores con alcance limitado",
      "hints": [
        "¿Dónde se concede el acceso a esta persona?",
        "¿Qué cambio elimina ese acceso sin afectar el trabajo no relacionado?"
      ]
    },
    "admin-030": {
      "prompt": "Un revisor de acceso encuentra un contratista en un equipo secreto y asume que el equipo no tiene permisos de repositorio porque está oculto. ¿Qué corrección es precisa?",
      "choices": [
        "Los equipos secretos no pueden recibir permisos de repositorio",
        "La visibilidad del equipo y los permisos de acceso al repositorio son configuraciones independientes",
        "Los equipos secretos niegan automáticamente todo acceso heredado",
        "Los equipos secretos otorgan la propiedad empresarial a sus miembros"
      ],
      "explanations": [
        "A los equipos secretos se les puede conceder acceso al repositorio.",
        "Ocultar un equipo no elimina los permisos de repositorio que se le han asignado.",
        "La visibilidad no es un mecanismo de negación explícito.",
        "La membresía en un equipo secreto no confiere propiedad de la empresa."
      ],
      "concept": "Visibilidad del equipo versus autorización",
      "hints": [
        "¿Ocultar la existencia de un grupo cambia lo que pueden hacer sus miembros?",
        "¿Qué configuración realmente otorga acceso al repositorio?"
      ]
    },
    "admin-031": {
      "prompt": "Una entrada válida CODEOWNERS nombra el equipo de la base de datos, que tiene acceso Write. Los cambios aún pueden fusionarse sin la aprobación de ese equipo. ¿Qué control adicional se necesita?",
      "choices": [
        "Requerir solo una verificación exitosa del estado de la compilación",
        "Requerir cualquier revisión sin una condición de propietario del código",
        "Exigir la revisión de los propietarios del código mediante una regla de ramas o un ruleset aplicable",
        "Requerir firmas commit en lugar de revisión"
      ],
      "explanations": [
        "Un resultado de compilación valida CI, no la aprobación del equipo de la base de datos.",
        "No es necesario que una revisión arbitraria provenga de los propietarios del código designados.",
        "CODEOWNERS identifica a los propietarios; una norma aplicable exige su aprobación.",
        "La firma del compromiso no establece la aprobación del propietario del código."
      ],
      "concept": "Responsabilidad de revisión frente a exigencia de revisión",
      "hints": [
        "¿La asignación de un revisor bloquea una fusión?",
        "¿Qué capa convierte las expectativas de la revisión en un requisito obligatorio?"
      ]
    },
    "admin-032": {
      "prompt": "Una empresa aplica una política que impide que los miembros de la organización cambien la visibilidad del repositorio. Un administrador del repositorio no puede seleccionar una visibilidad diferente. ¿Cuál es la mejor explicación?",
      "choices": [
        "El repositorio Admin siempre anula la política empresarial",
        "Sólo la versión local de Git del usuario controla los cambios de visibilidad.",
        "La restricción debe ser un error de sincronización del grupo IdP",
        "La política empresarial puede limitar a los administradores de la organización y del repositorio"
      ],
      "explanations": [
        "La administración del repositorio no elude una restricción empresarial impuesta.",
        "La visibilidad está controlada por GitHub, no por la versión local de Git.",
        "Una política explícita de visibilidad empresarial no tiene por qué implicar sincronización de identidades.",
        "Las políticas aplicadas en un ámbito superior limitan las opciones disponibles en ámbitos inferiores."
      ],
      "concept": "Jerarquía de políticas y administración delegada",
      "hints": [
        "¿Puede un rol de menor alcance exceder un límite empresarial impuesto?",
        "¿Qué nivel administrativo impuso la restricción?"
      ]
    },
    "admin-033": {
      "prompt": "En una empresa que utiliza cuentas personales, el propietario del repositorio desea que el acceso confidencial al proyecto se limite a personas explícitamente autorizadas. ¿Por qué deberían elegir la visibilidad privada en lugar de la interna?",
      "choices": [
        "Los repositorios internos generalmente son accesibles para los miembros de la empresa, no solo para el equipo del proyecto.",
        "Los repositorios privados no pueden usar equipos",
        "La visibilidad interna requiere automáticamente la aprobación de CODEOWNERS para leer el código",
        "La visibilidad privada elimina la necesidad de asignar permisos"
      ],
      "explanations": [
        "La visibilidad interna está pensada para la colaboración en toda la empresa y no para la confidencialidad únicamente del proyecto.",
        "Los equipos pueden recibir permisos de repositorio privado.",
        "CODEOWNERS rige la propiedad de la revisión en lugar del acceso de lectura.",
        "Los repositorios privados aún requieren una gestión de acceso explícita y adecuada."
      ],
      "concept": "Límite de acceso al repositorio interno",
      "hints": [
        "¿Quién es el público objetivo de los repositorios de fuentes internas empresariales?",
        "¿Qué visibilidad coincide con una audiencia de proyecto explícitamente limitada?"
      ]
    },
    "admin-034": {
      "prompt": "Un desarrollador crea un fine-grained PAT con permiso de escritura del contenido del repositorio. El desarrollador sólo tiene Read en el repositorio seleccionado. ¿Puede el PAT elevar al desarrollador a Write?",
      "choices": [
        "Sí, porque los permisos de token anulan las funciones del repositorio",
        "No, el token no puede otorgar acceso que el usuario no tiene",
        "Sí, si falta más de un año para su vencimiento",
        "No, porque las PAT fine-grained nunca pueden escribir contenidos del repositorio"
      ],
      "explanations": [
        "Los permisos solicitados de un token no anulan el acceso subyacente del usuario.",
        "Los tokens de acceso personal están limitados por el acceso del usuario generador.",
        "La duración del vencimiento no eleva la autorización.",
        "Las PAT detalladas pueden escribir contenidos cuando tanto el token como los permisos del usuario lo permiten."
      ],
      "concept": "Permisos de token limitados por el acceso del usuario",
      "hints": [
        "¿De quién es la identidad que representa un PAT?",
        "¿Puede la delegación crear autoridad ausente de esa identidad?"
      ]
    },
    "admin-035": {
      "prompt": "Un usuario tiene el repositorio Write pero no puede cambiar la configuración de administración de acceso del repositorio. ¿Qué explicación se adapta mejor a las funciones del repositorio integrado?",
      "choices": [
        "Todos los usuarios autenticados pueden cambiar el acceso al repositorio.",
        "Write y Admin son idénticos fuera de los repositorios públicos",
        "El permiso de contribución de código no incluye toda la administración del repositorio.",
        "SAML siempre bloquea la configuración del repositorio para todos los miembros"
      ],
      "explanations": [
        "La autenticación por sí sola no confiere administración del repositorio.",
        "Write y Admin siguen siendo funciones distintas para los repositorios privados.",
        "Write admite contribuciones, mientras que Admin incluye configuraciones sensibles más amplias.",
        "SAML no impone una prohibición universal al acceso autorizado a la configuración del repositorio."
      ],
      "concept": "Contribución versus administración del repositorio",
      "hints": [
        "¿Para enviar código se requiere autoridad para otorgar acceso a otras personas?",
        "¿Qué límite de roles separa esas responsabilidades?"
      ]
    },
    "admin-036": {
      "prompt": "Un grupo de seguridad central necesita visibilidad de las alertas de seguridad de la organización sin propiedad rutinaria de la organización. En una organización elegible, ¿qué función incorporada está diseñada para esta responsabilidad?",
      "choices": [
        "gerente de facturación",
        "Solo miembro del equipo",
        "Colaborador externo sin permisos otorgados a repositorios",
        "gerente de seguridad"
      ],
      "explanations": [
        "Los administradores de facturación manejan la facturación en lugar de las alertas de seguridad de toda la organización.",
        "La pertenencia ordinaria a un equipo por sí sola no proporciona la función de gestión de la seguridad.",
        "Las concesiones sin repositorio no establecen visibilidad de seguridad en toda la organización.",
        "El administrador de seguridad delega responsabilidades de seguridad sin tener la propiedad total de la organización."
      ],
      "concept": "Gestión de seguridad delegada",
      "hints": [
        "¿Qué responsabilidad debería separarse de la propiedad general de la organización?",
        "¿El rol necesita un alcance organizacional específico de seguridad?"
      ]
    },
    "admin-037": {
      "prompt": "El grupo IdP de una empresa cambia después de una reorganización, pero el equipo GitHub conectado todavía muestra miembros anteriores. ¿Cuál es la primera investigación más útil?",
      "choices": [
        "Verifique el estado de sincronización y conexión del grupo IdP",
        "Reescribir el historial del repositorio",
        "Rotar los nombres de las etiquetas de lanzamiento del repositorio",
        "Reemplazar todas las reglas de ramas con visibilidad pública"
      ],
      "explanations": [
        "La asignación del grupo de origen y el estado de sincronización explican directamente la membresía sincronizada obsoleta.",
        "El historial de Git no controla la sincronización del equipo.",
        "Los nombres de las etiquetas de lanzamiento no determinan la membresía en la fuerza laboral.",
        "Los cambios de visibilidad no reparan la sincronización del grupo de identidad y pueden exponer datos."
      ],
      "concept": "Diagnóstico de deriva de sincronización",
      "hints": [
        "¿Qué datos deberían haber fluido desde el sistema fuente?",
        "¿Dónde podría haber divergido el proceso de mapeo o sincronización?"
      ]
    },
    "admin-038": {
      "prompt": "Una organización que utiliza cuentas personales elimina la membresía de la organización de un empleado saliente. ¿Qué afirmación sobre la cuenta personal GitHub del empleado es correcta?",
      "choices": [
        "La cuenta se elimina automáticamente de GitHub",
        "La cuenta sigue siendo del individuo; el acceso a la organización y la existencia de la cuenta son independientes",
        "La cuenta se convierte automáticamente en un usuario administrado por la empresa.",
        "Los repositorios públicos de la cuenta se transfieren a la organización."
      ],
      "explanations": [
        "La eliminación de una organización no elimina una cuenta personal de propiedad independiente.",
        "El ciclo de vida de la cuenta personal permanece separado de la membresía en una organización.",
        "La eliminación de la membresía no convierte los modelos de cuenta.",
        "La organización no adquiere repositorios públicos personales mediante la baja."
      ],
      "concept": "Límites de salida de cuentas personales",
      "hints": [
        "¿Quién posee una cuenta personal fuera de la organización?",
        "¿Qué relación se está eliminando realmente?"
      ]
    },
    "admin-039": {
      "prompt": "Una nueva organización quiere evitar que un único administrador se convierta en un punto de fallo operativo. ¿Cuál es la práctica de propiedad más adecuada?",
      "choices": [
        "Utilice un inicio de sesión de propietario compartido para todo el equipo",
        "Otorgar propiedad a cada contribuyente del repositorio",
        "Maintain múltiples propietarios individuales confiables con autenticación sólida",
        "Eliminar la propiedad después de la configuración inicial"
      ],
      "explanations": [
        "Los inicios de sesión compartidos debilitan la atribución y la gestión segura de credenciales.",
        "Cada colaborador no necesita una amplia autoridad organizacional.",
        "Múltiples propietarios confiables preservan la continuidad y al mismo tiempo conservan la responsabilidad individual.",
        "Una organización todavía necesita propietarios autorizados para su administración y recuperación."
      ],
      "concept": "Propiedad de una organización resiliente",
      "hints": [
        "¿Cómo puede coexistir la continuidad administrativa con el mínimo privilegio?",
        "¿Por qué es importante la responsabilidad individual para la administración de emergencias?"
      ]
    },
    "admin-040": {
      "prompt": "Un administrador quiere verificar quién puede acceder actualmente a un repositorio confidencial, no simplemente quién apareció en un registro de incidentes antiguo. ¿Qué evidencia es más directamente útil?",
      "choices": [
        "Una exportación histórica solo de contribuyentes al repositorio",
        "Una lista solo de los nombres de los autores de commit",
        "Solo la lista pública de miembros de la organización.",
        "Concesiones actuales de acceso directo, de equipo y heredado al repositorio"
      ],
      "explanations": [
        "La contribución histórica no establece la autorización actual.",
        "La confirmación de los metadatos del autor no prueba la autorización actual.",
        "La visibilidad pública de la membresía omite las membresías privadas y los permisos específicos de repositorios.",
        "Los permisos efectivos actuales determinan el acceso actual al repositorio."
      ],
      "concept": "Auditoría de acceso al estado actual",
      "hints": [
        "¿La actividad histórica y los permisos actuales son la misma evidencia?",
        "¿Qué rutas pueden otorgar acceso sin aparecer en una lista pública de miembros?"
      ]
    },
    "admin-041": {
      "prompt": "Una instalación de GitHub App está limitada a un repositorio de documentación. Un desarrollador sostiene que la instalación de la aplicación demuestra que también debería acceder al repositorio de finanzas. ¿Qué debe explicar el administrador?",
      "choices": [
        "La selección del repositorio de instalación es un límite de autorización y debe cambiarse explícitamente si se aprueba.",
        "Todas las aplicaciones instaladas acceden automáticamente a cada repositorio privado",
        "Los nombres de las aplicaciones determinan el acceso al repositorio mediante prefijos coincidentes",
        "La sesión del navegador del desarrollador SAML amplía la selección del repositorio de instalación."
      ],
      "explanations": [
        "Una instalación recibe acceso únicamente a la selección y los permisos del repositorio aprobados.",
        "La instalación no implica acceso ilimitado al repositorio privado.",
        "Las convenciones de nomenclatura no autorizan una aplicación.",
        "Una sesión de navegador no amplía la selección del repositorio de instalación de una aplicación."
      ],
      "concept": "Límites de acceso a la integración",
      "hints": [
        "¿Qué repositorios fueron realmente aprobados para la instalación?",
        "¿La aplicación utiliza los permisos del navegador del desarrollador o sus propios permisos?"
      ]
    },
    "admin-042": {
      "prompt": "Un miembro necesita acceso temporal al repositorio elevado para una migración. ¿Qué plan de administración preserva mejor el menor privilegio después del trabajo?",
      "choices": [
        "Otorgar propiedad permanente a la organización y omitir la revisión",
        "Otorgue solo el acceso requerido, registre el propósito y elimínelo después de la migración.",
        "Compartir el PAT de otro administrador hasta que finalice la migración",
        "Cambiar el repositorio a público durante la migración"
      ],
      "explanations": [
        "La propiedad permanente es más amplia y duradera que la tarea temporal.",
        "El acceso atribuible y con alcance con un paso de eliminación explícito limita los privilegios duraderos.",
        "Compartir un PAT elimina la responsabilidad individual y expone las credenciales de otro usuario.",
        "La visibilidad pública expone los datos en lugar de delegar de forma segura el acceso a la migración."
      ],
      "concept": "Administración de acceso con límite de tiempo",
      "hints": [
        "¿Qué autoridad y duración requiere realmente la obra?",
        "¿Cómo se identificará y retirará después el permiso adicional?"
      ]
    },
    "admin-043": {
      "prompt": "Un usuario propone crear una segunda cuenta personal GitHub para trabajo corporativo y la llama Usuario administrado empresarial. ¿Qué hecho determina si la cuenta está realmente administrada por la empresa?",
      "choices": [
        "Su nombre de usuario contiene el nombre de la empresa.",
        "Su correo electrónico principal utiliza el dominio de la empresa.",
        "Se aprovisionó y se rige a través de la integración de usuario administrado IdP de la empresa.",
        "Su perfil incluye a la empresa como empleador."
      ],
      "explanations": [
        "Una convención de nomenclatura no cambia el modelo de identidad de una cuenta.",
        "Un correo electrónico corporativo no convierte a una cuenta personal en administrada por la empresa.",
        "Enterprise Managed Users depende del modelo de aprovisionamiento de identidad empresarial configurado.",
        "El texto del perfil del empleador no es un mecanismo de aprovisionamiento de cuentas."
      ],
      "concept": "Reconocer identidades genuinamente gestionadas",
      "hints": [
        "¿El modelo de cuenta está determinado por la apariencia del perfil?",
        "¿Qué sistema controla la creación y el ciclo de vida?"
      ]
    },
    "admin-044": {
      "prompt": "Una empresa regulada debe ejecutar su implementación GitHub en la infraestructura que administra y programar las actualizaciones de los dispositivos por sí misma. ¿Qué implementación se adapta mejor?",
      "choices": [
        "GitHub Enterprise Cloud con cuentas personales",
        "GitHub Enterprise Cloud con usuarios administrados",
        "GitHub Enterprise Cloud con residencia de datos",
        "GitHub Enterprise Server"
      ],
      "explanations": [
        "Las empresas en la nube con cuentas personales siguen alojadas y operadas por GitHub.",
        "Los usuarios administrados cambian la administración de identidades, no quién opera la implementación de la nube.",
        "La residencia de datos en la nube selecciona una región compatible sin realizar el servicio self-hosted.",
        "Enterprise Server se implementa y administra en la infraestructura del cliente."
      ],
      "concept": "Implementación empresarial autohospedada",
      "hints": [
        "¿Quién debe operar la infraestructura de la aplicación?",
        "¿El alojamiento en la nube regional equivale a administrar un dispositivo?"
      ]
    },
    "admin-045": {
      "prompt": "Una empresa quiere que GitHub opere el servicio, con identidades administradas y una opción de región de residencia de datos compatible. ¿Qué oferta debería evaluar el administrador?",
      "choices": [
        "GitHub Enterprise Cloud con residencia de datos",
        "Un repositorio público en una cuenta personal gratuita",
        "GitHub Enterprise Server instalado en una computadora portátil",
        "Una organización que utiliza cuentas personales en GitHub.com sin residencia de datos"
      ],
      "explanations": [
        "Esta oferta combina alojamiento operado por GitHub, usuarios administrados y regiones de residencia admitidas.",
        "Un repositorio personal público no proporciona esta configuración de residencia empresarial.",
        "Enterprise Server requiere una infraestructura operada por el cliente.",
        "El alojamiento de organización estándar GitHub.com no selecciona esta implementación de residencia de datos."
      ],
      "concept": "Implementación de residencia de datos en la nube",
      "hints": [
        "¿Qué opción cambia la ubicación de hosting de la empresa sin autohospedaje?",
        "¿Cómo se manejan las identidades en esa oferta?"
      ]
    },
    "admin-046": {
      "prompt": "Un nuevo empleado no puede enviar acceso a un repositorio privado, mientras que los compañeros de trabajo con la concesión esperada del equipo sí pueden hacerlo. ¿Qué respuesta deben tener los administradores de la organización antes de escalar al soporte GitHub?",
      "choices": [
        "Solicite soporte para reemplazar el servicio de autenticación de GitHub",
        "Inspeccionar los permisos efectivos y la autorización de credenciales del empleado.",
        "Genere una restauración empresarial completa de recuperación ante desastres",
        "Migrar cada repositorio a una implementación diferente"
      ],
      "explanations": [
        "Un acceso de usuario único issue no establece una falla de autenticación de plataforma.",
        "Los administradores pueden inspeccionar y corregir el acceso con alcance y la configuración de credenciales.",
        "Una restauración es desproporcionada y no diagnostica un problema de permisos específico del usuario.",
        "Una migración de implementación no está relacionada con la verificación de autorización inmediata."
      ],
      "concept": "Acceso resoluble por administrador issues",
      "hints": [
        "¿El fracaso es amplio o se limita a una identidad?",
        "¿Qué entornos están bajo el control directo de la organización?"
      ]
    },
    "admin-047": {
      "prompt": "Un incidente GitHub Enterprise Server persiste después de verificaciones locales documentadas. El soporte solicita diagnósticos de dispositivos y registros desinfectados recientes. ¿Qué artefacto es la mejor combinación?",
      "choices": [
        "Sólo un archivo de diagnóstico GHES sin archivo de registro reciente",
        "Un paquete Git de la rama de funciones de un desarrollador",
        "Un paquete de soporte GitHub Enterprise Server",
        "Sólo una exportación de eventos de auditoría del repositorio"
      ],
      "explanations": [
        "Una descripción general del diagnóstico por sí sola no incluye la recopilación de registros de servicio recientes solicitada.",
        "Un paquete Git contiene el historial del repositorio en lugar de diagnósticos del dispositivo.",
        "Un paquete de soporte incluye información de diagnóstico y registros de servicio desinfectados.",
        "Los eventos de auditoría no reemplazan los registros de servicio y diagnóstico del dispositivo solicitados."
      ],
      "concept": "Propósito del paquete de soporte",
      "hints": [
        "¿Qué evidencia se refiere al dispositivo en lugar de a un repositorio?",
        "¿Qué artefacto combina información de configuración con registros?"
      ]
    },
    "admin-048": {
      "prompt": "Un administrador de GHES ha recopilado un paquete de soporte. ¿Cuál es la práctica de manipulación más segura antes de enviarlo?",
      "choices": [
        "Adjúntelo a un repositorio público issue para mayor transparencia.",
        "Envíalo a todos los desarrolladores a través de un chat compartido",
        "Supongamos que la desinfección significa que el paquete no contiene información operativa confidencial.",
        "Trátelo como confidencial y compártalo a través del canal de soporte autorizado."
      ],
      "explanations": [
        "La publicación pública puede exponer detalles operativos internos.",
        "Un amplio intercambio amplía innecesariamente el acceso a la información de diagnóstico.",
        "Los registros desinfectados aún pueden contener entornos sensibles y contexto operativo.",
        "El manejo de soporte autorizado limita la exposición de los datos de diagnóstico."
      ],
      "concept": "Protección de artefactos de diagnóstico",
      "hints": [
        "¿La eliminación de credenciales elimina todo el contexto sensible?",
        "¿Quién necesita realmente esta evidencia para resolver el caso?"
      ]
    },
    "admin-049": {
      "prompt": "El soporte solicita una descripción general del entorno y la configuración de GHES sin el archivo de registro reciente más grande. ¿Qué artefacto debería generar el administrador?",
      "choices": [
        "Un archivo de diagnóstico",
        "Un archivo fuente del repositorio",
        "Un artefacto de flujo de trabajo de una compilación no relacionada",
        "Un archivo CODEOWNERS"
      ],
      "explanations": [
        "El archivo de diagnóstico resume la configuración y el entorno de la instancia.",
        "Los archivos fuente contienen código en lugar de diagnósticos de configuración del dispositivo.",
        "Un artefacto de compilación no relacionado no es una descripción general de diagnóstico de instancia.",
        "Los documentos CODEOWNERS revisan la propiedad en lugar del entorno del sistema."
      ],
      "concept": "Paquetes de diagnóstico versus soporte",
      "hints": [
        "¿La solicitud es contexto del sistema o contenido del repositorio?",
        "¿Qué artefacto de soporte omite la colección de registros más grande?"
      ]
    },
    "admin-050": {
      "prompt": "Los equipos fusionan repetidamente cambios sin revisiones a pesar de un estándar escrito de dos aprobaciones. ¿Qué mejora administrativa convierte más directamente la norma en un control?",
      "choices": [
        "Agregue una plantilla de solicitud de extracción que solicite dos aprobaciones pero ninguna regla de cumplimiento",
        "Configurar una regla de solicitud de extracción aplicable que requiera dos aprobaciones",
        "Requerir solo una verificación exitosa del estado de la compilación",
        "Habilite las solicitudes de revisión automática sin necesidad de aprobación"
      ],
      "explanations": [
        "Una plantilla es una guía más que una puerta de fusión.",
        "Una regla de aprobación requerida bloquea las fusiones que no cumplen con el estándar configurado.",
        "El éxito de la compilación no prueba que dos revisores hayan aprobado.",
        "Solicitar revisiones no las convierte en obligatorias."
      ],
      "concept": "Hacer cumplir los estándares de procesos de desarrollador",
      "hints": [
        "¿Qué mecanismo evalúa un pull request antes de fusionarlo?",
        "¿Cómo se puede comprobar el proceso deseado en lugar de simplemente describirlo?"
      ]
    },
    "admin-051": {
      "prompt": "Una organización quiere que los nuevos repositorios comiencen con una guía consistente de solicitudes de extracción y expectativas de los contribuyentes. ¿Qué enfoque proporciona contenido inicial reutilizable sin pretender imponer revisiones?",
      "choices": [
        "Presupuestos de facturación de la organización",
        "Una contraseña de administrador compartida obligatoria",
        "Plantillas de repositorio que contienen documentación de los contribuyentes y plantillas de solicitud de extracción",
        "Una lista de permitidos empresarial IP"
      ],
      "explanations": [
        "Los presupuestos de facturación no inicializan la documentación de colaboración.",
        "Las contraseñas compartidas no son un mecanismo seguro de estandarización de procesos.",
        "Las plantillas de repositorio pueden distribuir una estructura y orientación iniciales coherentes.",
        "IP las listas de permisos restringen el acceso a la red en lugar de las plantillas de contenido del repositorio."
      ],
      "concept": "Estandarizar las prácticas de inicio de repositorios",
      "hints": [
        "¿El requisito se refiere al contenido inicial o al acceso en tiempo de ejecución?",
        "¿Qué característica reutiliza la estructura de un repositorio al crear otro?"
      ]
    },
    "admin-052": {
      "prompt": "Una empresa publica lanzamientos de producción a partir de etiquetas y desea evitar actualizaciones o eliminaciones accidentales de etiquetas. ¿Qué control debería considerar un administrador en un plan de soporte?",
      "choices": [
        "Un ruleset exclusivo de ramas que se aplica a la rama predeterminada",
        "Solo se requiere revisión del propietario del código para pull requests",
        "Solo requiere commits firmado en la rama predeterminada",
        "Una etiqueta ruleset dirigida al patrón de etiqueta de lanzamiento"
      ],
      "explanations": [
        "Una regla de solo rama no protege directamente las referencias de etiquetas coincidentes.",
        "Las revisiones de solicitud de extracción no restringen la eliminación o actualización de etiquetas posteriores.",
        "La verificación de confirmación no impide que se mueva o elimine una referencia de etiqueta.",
        "La etiqueta rulesets puede restringir las actualizaciones y la eliminación de etiquetas de lanzamiento coincidentes."
      ],
      "concept": "Gobernanza de referencia de versión",
      "hints": [
        "¿Qué referencias de Git identifican los lanzamientos?",
        "¿Qué tipo de regla puede apuntar directamente a esas referencias?"
      ]
    },
    "admin-053": {
      "prompt": "Una implementación GHES tiene una réplica de alta disponibilidad. Una parte interesada propone cancelar las copias de seguridad históricas. ¿Qué debe explicar el administrador?",
      "choices": [
        "La replicación puede propagar la corrupción o la eliminación, por lo que las copias de seguridad históricas siguen siendo necesarias",
        "Una réplica conserva cada estado anterior indefinidamente.",
        "La alta disponibilidad crea automáticamente instantáneas históricas externas",
        "Las copias de seguridad y las réplicas cumplen objetivos de recuperación idénticos"
      ],
      "explanations": [
        "Una réplica mejora la disponibilidad pero no reemplaza las instantáneas históricas recuperables.",
        "Las réplicas rastrean los cambios en vivo en lugar de preservar cada estado histórico.",
        "La replicación HA no proporciona automáticamente copias de seguridad históricas fuera del sitio.",
        "La conmutación por error de disponibilidad y la recuperación histórica abordan diferentes modos de error."
      ],
      "concept": "Disponibilidad versus recuperación histórica",
      "hints": [
        "¿Qué sucede cuando un cambio no deseado se replica exitosamente?",
        "¿Qué objetivo de recuperación requiere un estado anterior en buen estado?"
      ]
    },
    "admin-054": {
      "prompt": "Antes de una expansión del almacenamiento GHES, un operador sugiere cambiar el tamaño de un volumen activo inmediatamente para evitar gastos generales de planificación. ¿Qué respuesta sigue mejor el enfoque operativo documentado?",
      "choices": [
        "Continuar porque los cambios de almacenamiento no pueden afectar los datos de la aplicación",
        "Utilice el procedimiento específico de la versión, planifique el mantenimiento y confirme la preparación para la recuperación.",
        "Eliminar repositorios grandes sin la aprobación del propietario primero",
        "Deshabilite la autenticación permanentemente antes de cambiar el tamaño"
      ],
      "explanations": [
        "Los cambios de almacenamiento pueden interrumpir los servicios y requerir precauciones documentadas.",
        "Los procedimientos admitidos y la planificación de mantenimiento reducen el riesgo para los datos de instancia persistentes.",
        "La eliminación no aprobada es destructiva y no es un requisito previo seguro para la gestión de capacidad.",
        "La eliminación de la autenticación permanente no está relacionada y es insegura."
      ],
      "concept": "Cambios de infraestructura controlados GHES",
      "hints": [
        "¿Qué podría salir mal al cambiar un volumen persistente en uso?",
        "¿Qué documentación y requisitos previos de recuperación deberían regir el cambio?"
      ]
    },
    "admin-055": {
      "prompt": "Una propuesta de actualización GHES supone que la versión más reciente siempre se puede instalar directamente sobre cualquier versión anterior. ¿Qué debería hacer un administrador en su lugar?",
      "choices": [
        "Utilice el orden alfabético del número de versión",
        "Omita las notas de la versión para reducir el tiempo de actualización",
        "Verifique las rutas de actualización admitidas y los requisitos previos específicos de la versión antes de programar",
        "Actualice solo las extensiones del navegador"
      ],
      "explanations": [
        "La compatibilidad de versiones no está determinada por el orden alfabético.",
        "Las notas de la versión pueden contener requisitos previos requeridos y advertencias de actualización.",
        "Las actualizaciones de GHES deben seguir rutas compatibles documentadas para la versión instalada.",
        "Las extensiones del navegador no actualizan el dispositivo GHES."
      ],
      "concept": "Planificación de actualización compatible con GHES",
      "hints": [
        "¿Puede la distancia de liberación cambiar la secuencia de actualización permitida?",
        "¿Qué evidencia establece la compatibilidad de la versión instalada?"
      ]
    },
    "admin-056": {
      "prompt": "Un administrador de GHES realizó recientemente una copia de seguridad exitosa, pero nunca ha ensayado la recuperación. ¿Qué actividad mejora más directamente la confianza en la recuperación ante desastres?",
      "choices": [
        "Revisar los mensajes de finalización de la copia de seguridad sin realizar una restauración",
        "Aumente la frecuencia de las copias de seguridad sin verificar la restauración",
        "Trate el estado de replicación de HA como prueba de la capacidad de restauración de la copia de seguridad histórica",
        "Pruebe una restauración documentada en un entorno aislado apropiado"
      ],
      "explanations": [
        "Los mensajes de finalización por sí solos no validan el procedimiento de recuperación completo.",
        "La frecuencia mejora las opciones de los puntos de recuperación, pero no prueba que la restauración funcione.",
        "Una réplica en buen estado y una copia de seguridad histórica restaurable son capacidades de recuperación diferentes.",
        "Una prueba de restauración controlada valida tanto los datos como el proceso de recuperación."
      ],
      "concept": "Validar la preparación para la recuperación",
      "hints": [
        "¿La recopilación de datos de recuperación demuestra que se pueden utilizar?",
        "¿Cómo se puede ejercer la recuperación sin poner en riesgo la producción?"
      ]
    },
    "admin-057": {
      "prompt": "Una parte interesada pregunta si GitHub Enterprise Cloud con usuarios administrados elimina las responsabilidades de administración de identidades de la organización. ¿Qué respuesta es correcta?",
      "choices": [
        "GitHub aloja la plataforma, pero la empresa aún administra sus políticas de acceso e integración IdP.",
        "GitHub diseña automáticamente todos los grupos IdP del cliente",
        "Los usuarios administrados eliminan toda necesidad de revisiones de acceso",
        "El cliente debe parchear los servidores de aplicaciones Cloud de GitHub"
      ],
      "explanations": [
        "Las operaciones en la nube y el gobierno de la identidad del cliente siguen siendo responsabilidades separadas.",
        "El cliente aún controla el diseño y las asignaciones del grupo de proveedores de identidad.",
        "El aprovisionamiento gestionado no elimina la gobernanza del acceso.",
        "GitHub opera la infraestructura de aplicaciones en la nube en lugar de requerir parches por parte del cliente."
      ],
      "concept": "Responsabilidades de administración compartida en la nube",
      "hints": [
        "¿Qué responsabilidades se refieren al funcionamiento de la plataforma?",
        "¿Qué responsabilidades se refieren a decidir quién debe acceder a los recursos de la empresa?"
      ]
    },
    "admin-058": {
      "prompt": "Un equipo de adquisiciones suma el número de miembros de la organización para estimar las licencias empresariales, contando tres veces al mismo empleado en tres organizaciones. ¿Qué debe aclarar el administrador?",
      "choices": [
        "Las licencias empresariales siempre se facturan una vez por repositorio",
        "Cuentas empresariales de recuento de puestos para usuarios únicos en lugar de simplemente sumar membresías duplicadas",
        "Solo los propietarios de repositorios consumen licencias",
        "Cada equipo crea una licencia separada para cada miembro."
      ],
      "explanations": [
        "La concesión de licencias de puestos empresariales no es simplemente un cargo por repositorio.",
        "Las membresías duplicadas deben conciliarse con las reglas de consumo de licencias empresariales.",
        "El uso con licencia no se limita a los propietarios de repositorios.",
        "La membresía del equipo no se factura de forma independiente como un nuevo puesto para cada equipo."
      ],
      "concept": "Consumidores únicos de licencias empresariales",
      "hints": [
        "¿Una licencia está asociada con una persona o con cada membresía de una organización?",
        "¿Qué sucede cuando la misma identidad aparece en varias organizaciones?"
      ]
    },
    "admin-059": {
      "prompt": "Una organización con un plan pago basado en puestos agrega un colaborador externo a varios repositorios privados, excluyendo forks. ¿Cómo debe abordar el administrador el impacto del puesto?",
      "choices": [
        "Suponer que los colaboradores externos nunca pueden consumir licencias pagadas",
        "Contar una licencia separada por cada invitación a un repositorio",
        "Aplicar las reglas del plan para el colaborador como consumidor de puesto único, no un puesto por repositorio.",
        "Suponer que solo los colaboradores que hacen push a diario pueden consumir licencias"
      ],
      "explanations": [
        "Los colaboradores externos en repositorios privados pueden contar para el uso de puestos pagados.",
        "Un colaborador externo único no se cuenta una vez para cada repositorio.",
        "El modelo documentado cuenta al colaborador una vez dentro del alcance de la cuenta relevante.",
        "El consumo de licencias no está determinado por la frecuencia diaria de los pushes."
      ],
      "concept": "Licencias para colaboradores externos",
      "hints": [
        "¿El acceso a múltiples repositorios crea múltiples identidades?",
        "¿Qué categoría de colaborador es importante para los puestos remunerados de la organización?"
      ]
    },
    "admin-060": {
      "prompt": "Un equipo de finanzas pregunta por qué su factura GitHub excede la suscripción básica de puestos empresariales. ¿Cuál es la primera explicación más precisa para investigar?",
      "choices": [
        "Cada miembro adicional del equipo crea automáticamente otro puesto empresarial",
        "Los precios empresariales siempre cobran un puesto separado por cada repositorio al que puede acceder un usuario",
        "Las redirecciones SAML crean un puesto con licencia independiente por cada inicio de sesión",
        "La factura puede incluir suscripciones adicionales y uso de productos medidos."
      ],
      "explanations": [
        "Las asignaciones de equipo no crean automáticamente puestos de usuario empresarial separados.",
        "El acceso al repositorio no se factura como un nuevo puesto empresarial para cada repositorio.",
        "La frecuencia de autenticación SAML no define identidades con licencia independientes.",
        "Tanto las suscripciones por licencia como los productos basados en el uso pueden contribuir a la factura."
      ],
      "concept": "Facturación de suscripción versus consumo",
      "hints": [
        "¿La cuenta utiliza productos más allá del plan básico?",
        "¿Qué líneas de facturación reflejan el consumo y no las personas?"
      ]
    },
    "admin-061": {
      "prompt": "Un administrador quiere una línea base de utilización de licencia actual antes de una conversación de renovación. ¿Qué evidencia deberían priorizar?",
      "choices": [
        "La información de uso de licencia de la empresa y los registros de facturación relevantes.",
        "Sólo el número de repositorios creados este año.",
        "Una suma de miembros de la organización cuenta sin deduplicar identidades",
        "Solo los contribuyentes que enviaron código en las últimas veinticuatro horas."
      ],
      "explanations": [
        "Los registros de facturación y licencia empresarial reflejan el uso de la licencia que se está evaluando.",
        "La creación de repositorios no es la unidad de consumo de puestos empresariales.",
        "Las membresías duplicadas pueden exagerar los usuarios únicos con licencia.",
        "Un subconjunto de contribución de un día omite usuarios con licencia con otros patrones de actividad válidos."
      ],
      "concept": "Evidencia de utilización de licencia",
      "hints": [
        "¿Qué fuente registra directamente los derechos y el consumo?",
        "¿Son los recuentos de contenido del repositorio un proxy confiable para las personas con licencia?"
      ]
    },
    "admin-062": {
      "prompt": "Un servicio en la nube issue afecta a muchos repositorios después de las comprobaciones de acceso local y configuración de red. ¿Qué información hace que una escalada de soporte sea más procesable?",
      "choices": [
        "Sólo la frase GitHub está rota",
        "Alcance afectado, marcas de tiempo, síntomas reproducibles e identificadores de solicitud relevantes",
        "Una lista sin editar de todas las contraseñas de usuario",
        "Una exigencia de eliminar la empresa de inmediato"
      ],
      "explanations": [
        "Un informe inespecífico proporciona poco valor diagnóstico.",
        "La evidencia reproducible y con alcance ayuda al soporte a correlacionar e investigar la falla.",
        "Las contraseñas no se deben compartir como prueba de diagnóstico.",
        "La eliminación empresarial es destructiva y no proporciona un contexto de solución de problemas."
      ],
      "concept": "Escalamiento de soporte procesable",
      "hints": [
        "¿Qué permitiría a otro operador reproducir o localizar la solicitud fallida?",
        "¿Qué detalles describen el impacto sin exponer las credenciales?"
      ]
    },
    "admin-063": {
      "prompt": "Antes de tratar un informe de interrupción generalizada del GitHub.com como un defecto de configuración local, ¿qué recurso oficial debería comprobar un administrador?",
      "choices": [
        "README de un repositorio público no relacionado",
        "Reflog local de un desarrollador",
        "GitHub Status",
        "Una nueva publicación aleatoria en las redes sociales sin una fuente"
      ],
      "explanations": [
        "Un README no relacionado no es información autorizada sobre el estado del servicio.",
        "Un reflog local describe cambios de referencia locales, no la disponibilidad de la plataforma.",
        "GitHub Status informa los incidentes oficiales del servicio y su estado operativo.",
        "Las publicaciones no verificadas no sustituyen a la fuente de estado oficial."
      ],
      "concept": "Clasificación de incidentes en la plataforma",
      "hints": [
        "¿Podría ser este un incidente ascendente compartido?",
        "¿Dónde publica el operador del servicio información de salud?"
      ]
    },
    "admin-064": {
      "prompt": "Una empresa planea adoptar la residencia de datos en la nube y asume que todas las aplicaciones de terceros utilizadas en GitHub.com funcionarán sin cambios. ¿Qué preparación es la más adecuada?",
      "choices": [
        "Suponga que todas las aplicaciones se instalan automáticamente en el nuevo host",
        "Publicar contenidos de repositorios privados para probar la compatibilidad.",
        "Deshabilite todas las políticas de autenticación indefinidamente",
        "Revisión de la compatibilidad de integración y funciones para el entorno GHE.com"
      ],
      "explanations": [
        "La instalación de la aplicación y la compatibilidad del host deben establecerse en lugar de asumirse.",
        "La divulgación pública no es una prueba de compatibilidad segura.",
        "No es necesario eliminar la autenticación para la planificación de la integración.",
        "Las implementaciones de residencia de datos tienen consideraciones de host y características que las integraciones deben admitir."
      ],
      "concept": "Preparación para la integración de residencia de datos",
      "hints": [
        "¿El cambio a un host GitHub diferente afecta los puntos finales de integración?",
        "¿Qué dependencias se deben verificar antes de la migración?"
      ]
    },
    "admin-065": {
      "prompt": "Un administrador GHES quiere una réplica de conmutación por error para atender activamente el tráfico de escritura normal junto con la principal simplemente porque existe. ¿Qué corrección coincide con el diseño documentado de HA?",
      "choices": [
        "GHES HA utiliza una disposición active/passive en lugar de escrituras automáticas active/active",
        "Una réplica es sólo un archivo ZIP de código fuente.",
        "Todas las réplicas aceptan escrituras independientes y se fusionan más tarde.",
        "La conmutación por error nunca requiere planificación de enrutamiento del tráfico"
      ],
      "explanations": [
        "La réplica documentada HA es una copia en espera con replicación, no un escritor activo independiente.",
        "Una réplica es un dispositivo, no simplemente un archivo fuente.",
        "Las escrituras simultáneas independientes no son el modelo active/passive documentado.",
        "Se debe planificar y gestionar la redirección del tráfico para la conmutación por error."
      ],
      "concept": "Modelo operativo GHES HA",
      "hints": [
        "¿Qué aparato tiene autoridad durante el funcionamiento normal?",
        "¿Qué significa el modo de espera para el tráfico de aplicaciones?"
      ]
    },
    "admin-066": {
      "prompt": "Hace seis días ocurrió un incidente GHES y el soporte necesita registros que cubran ese período. El paquete de soporte predeterminado contiene solo la ventana predeterminada reciente. ¿Qué debe evaluar el administrador?",
      "choices": [
        "Una fuente ZIP de la rama predeterminada",
        "Un paquete de soporte extendido que cubre la ventana documentada más larga",
        "El archivo de licencia del repositorio",
        "Cambiar el reloj del aparato a seis días antes"
      ],
      "explanations": [
        "Una fuente ZIP no proporciona registros históricos del dispositivo.",
        "El paquete extendido incluye una ventana de registro reciente más larga que el paquete predeterminado.",
        "Un archivo de licencia de software no está relacionado con los registros de servicio.",
        "Cambiar el reloj del sistema no recupera los registros más antiguos y puede crear problemas operativos."
      ],
      "concept": "Selección de cobertura de tiempo de diagnóstico",
      "hints": [
        "¿El incidente solicitado se encuentra dentro de la ventana de recopilación predeterminada?",
        "¿Qué opción de cobro admitido amplía esa cobertura?"
      ]
    },
    "admin-067": {
      "prompt": "Una empresa quiere un comportamiento consistente de CI en muchos repositorios y al mismo tiempo permitir correcciones mantenidas centralmente. ¿Qué mecanismo de estandarización deberían recomendar los administradores?",
      "choices": [
        "Copie un flujo de trabajo una vez y nunca realice un seguimiento de cambios futuros",
        "Almacene las instrucciones ejecutables CI solo en un correo electrónico",
        "Utilice flujos de trabajo reutilizables versionados y regidos por la política empresarial",
        "Proporcione a cada repositorio un flujo de trabajo no relacionado y no revisado"
      ],
      "explanations": [
        "Las copias sin seguimiento se desvían y no reciben actualizaciones centrales controladas.",
        "El correo electrónico no es un estándar CI ejecutable y con versión controlada.",
        "Los flujos de trabajo reutilizables proporcionan una implementación compartida versionada con gobernanza de políticas.",
        "Los flujos de trabajo no relacionados y no revisados socavan la coherencia."
      ],
      "concept": "Estándares de flujo de trabajo gobernados centralmente",
      "hints": [
        "¿Cómo llegará una solución común CI a muchos repositorios?",
        "¿Qué hace que la implementación compartida sea auditable y reutilizable?"
      ]
    },
    "admin-068": {
      "prompt": "Un administrador explica las opciones de implementación de GitHub a un comité de riesgos. ¿Qué distinción es precisa?",
      "choices": [
        "Enterprise Managed Users es un reemplazo para las copias de seguridad GitHub Enterprise Server",
        "La residencia de datos en la nube significa que el cliente parchea los servidores de aplicaciones de GitHub",
        "Cuentas personales y usuarios administrados son dos nombres para el mismo modelo de ciclo de vida",
        "La ubicación de implementación y el modelo de identidad son opciones de diseño relacionadas, pero no son el mismo concepto."
      ],
      "explanations": [
        "Las identidades administradas no proporcionan respaldo ni recuperación ante desastres.",
        "La residencia de datos en la nube sigue siendo un servicio operado por GitHub.",
        "Los dos modelos de cuentas difieren en los límites de aprovisionamiento, propiedad y colaboración.",
        "El alojamiento, la residencia y el ciclo de vida de la identidad deben evaluarse explícitamente."
      ],
      "concept": "Separar las decisiones de alojamiento e identidad",
      "hints": [
        "¿Quién opera la plataforma y quién gobierna las identidades?",
        "¿El cambio de autenticación por sí solo puede reubicar los datos almacenados?"
      ]
    },
    "admin-069": {
      "prompt": "Un operador de GHES descubre que todos los repositorios son lentos y que el volumen de datos persistentes del dispositivo está casi lleno. ¿Qué siguiente paso se adapta mejor a la responsabilidad del administrador?",
      "choices": [
        "Investigue la capacidad y siga el procedimiento documentado de expansión de almacenamiento específico de la versión.",
        "Proporcione a todos los usuarios el repositorio Admin para mejorar el rendimiento del disco.",
        "Elimine SAML porque asigna almacenamiento de repositorio",
        "Pedir a los desarrolladores que cambien el nombre de sus remotos locales de Git"
      ],
      "explanations": [
        "La capacidad de la instancia es un issue operativo que los administradores pueden investigar y remediar de forma segura.",
        "Los cambios de función del repositorio no aumentan la capacidad de almacenamiento.",
        "Quitar la autenticación no es una solución para la capacidad de almacenamiento.",
        "Los nombres remotos en las estaciones de trabajo no amplían el almacenamiento persistente del dispositivo."
      ],
      "concept": "GHES administración de capacidad",
      "hints": [
        "¿El síntoma apunta a una autorización o una restricción de recursos compartidos?",
        "¿Qué métrica de instancia respalda una acción operativa concreta?"
      ]
    },
    "admin-070": {
      "prompt": "Un departamento quiere que cada repositorio identifique el equipo responsable de revisar los cambios de infraestructura. ¿Qué archivo está diseñado específicamente para esa convención?",
      "choices": [
        "dependabot.yml",
        "CODEOWNERS",
        "LICENSE",
        ".gitignore"
      ],
      "explanations": [
        "La configuración de Dependabot controla las actualizaciones de dependencia, no el enrutamiento de propiedad del código.",
        "CODEOWNERS asigna rutas a personas o equipos responsables para solicitudes de revisión.",
        "LICENSE establece términos legales en lugar de responsabilidad del revisor.",
        ".gitignore excluye archivos del seguimiento en lugar de asignar revisores."
      ],
      "concept": "Documentar la responsabilidad de la revisión",
      "hints": [
        "¿Qué convención asigna rutas a los revisores?",
        "¿El objetivo es la automatización de la dependencia, los términos legales o la propiedad?"
      ]
    },
    "admin-071": {
      "prompt": "Una empresa publica un estándar de ramificación pero no ha acordado cómo se aprobarán las excepciones. ¿Cuál es el mejor plan de implementación administrativa?",
      "choices": [
        "Otorgue a todos los usuarios privilegios de omisión permanentes",
        "Aplicarlo inmediatamente sin verificar los flujos de trabajo de lanzamiento existentes",
        "Ponga a prueba los controles, documente las excepciones de alcance y valide los flujos de trabajo afectados antes de una aplicación generalizada.",
        "Eliminar ramas que no coincidan con la propuesta sin consultar a los mantenedores"
      ],
      "explanations": [
        "La derivación permanente universal anula el estándar propuesto.",
        "La aplicación no validada corre el riesgo de interrumpir los flujos de trabajo de publicación legítimos.",
        "Un proceso piloto y de excepción explícito equilibra la gobernanza con la continuidad operativa.",
        "La eliminación de ramas no aprobadas es destructiva y no una implementación responsable."
      ],
      "concept": "Gestión del cambio de gobernanza",
      "hints": [
        "¿Qué flujos de trabajo legítimos podría interrumpir una regla no probada?",
        "¿Cómo pueden las excepciones seguir siendo explícitas en lugar de convertirse en elusiones irrestrictas?"
      ]
    },
    "admin-072": {
      "prompt": "Una parte interesada quiere que el soporte de GitHub decida qué empleados deben recibir acceso de Write a un repositorio financiero. ¿Quién debería ser el dueño de esa decisión de autorización comercial?",
      "choices": [
        "Cualquier visitante no autenticado",
        "El autor del más reciente commit",
        "El proveedor del cliente Git",
        "Los administradores autorizados y propietarios de recursos de la organización."
      ],
      "explanations": [
        "Los visitantes no tienen autoridad para determinar el acceso a empresas privadas.",
        "La autoría confirmada por sí sola no asigna responsabilidad de gobernanza del acceso.",
        "Un proveedor de cliente Git no controla la política de autorización de la empresa.",
        "Las decisiones de acceso empresarial pertenecen al proceso de gobierno autorizado del cliente."
      ],
      "concept": "Responsabilidades del cliente versus soporte",
      "hints": [
        "¿La solicitud soluciona un problema de la plataforma o decide un derecho?",
        "¿Quién entiende y autoriza la necesidad empresarial de acceso?"
      ]
    },
    "admin-073": {
      "prompt": "Una empresa posee suscripciones GitHub y desea determinar si se incluye un complemento específico antes de habilitarlo de manera generalizada. ¿Qué enfoque es más seguro?",
      "choices": [
        "Verifique el derecho actual del producto y la documentación de facturación de la cuenta real",
        "Suponga que cada función empresarial tiene un uso incluido ilimitado",
        "Trate la visibilidad de un botón de habilitación como prueba de que todo el consumo es prepago.",
        "Habilite el complemento en todas partes e investigue solo después de la facturación"
      ],
      "explanations": [
        "Los derechos y los cargos de uso dependen del producto real y del acuerdo de cuenta.",
        "Las suscripciones empresariales no implican un uso ilimitado incluido para todos los productos.",
        "Es posible que una función esté disponible para habilitarse mientras su uso todavía genera cargos adicionales.",
        "Una habilitación amplia sin verificar la facturación puede generar costos evitables."
      ],
      "concept": "Administración que considera los derechos de uso",
      "hints": [
        "¿Qué distingue la disponibilidad del consumo incluido?",
        "¿Qué evidencia específica de la cuenta debería preceder a la habilitación amplia?"
      ]
    },
    "admin-074": {
      "prompt": "Una rama del repositorio coincide con dos rulesets activos: uno requiere revisiones y otro requiere una verificación del estado de seguridad. ¿Qué debe satisfacer una fusión normal sin omisión?",
      "choices": [
        "Sólo el ruleset creado primero",
        "Ambos rulesets aplicables",
        "Sólo el ruleset con el nombre más corto",
        "Ninguno de los dos, porque los rulesets superpuestos se cancelan entre sí."
      ],
      "explanations": [
        "El orden de creación no descarta otros rulesets activos aplicables.",
        "Los rulesets aplicables están en capas, por lo que se aplican tanto los requisitos de revisión como los de estado.",
        "Los nombres de los conjuntos de reglas no determinan la prioridad.",
        "La superposición de rulesets no cancela sus requisitos."
      ],
      "concept": "Aplicación de ruleset en capas",
      "hints": [
        "¿Son las selecciones rulesets mutuamente excluyentes?",
        "¿Qué significa que se apliquen múltiples controles a la misma rama?"
      ]
    },
    "admin-075": {
      "prompt": "En un plan que respalda la evaluación ruleset, una organización quiere observar los efectos probables de una regla propuesta sin bloquear a los desarrolladores todavía. ¿Qué estado de aplicación es apropiado?",
      "choices": [
        "Activo con todos los desarrolladores a los que se les ha concedido una omisión permanente",
        "Deshabilitado sin datos de evaluación",
        "Evaluate",
        "Eliminar el ruleset después de cada push"
      ],
      "explanations": [
        "La omisión universal debilita la prueba y difiere de la evaluación de reglas sin bloqueo.",
        "Las reglas deshabilitadas no proporcionan la evaluación de cumplimiento prevista.",
        "Evalúe los resultados de las reglas de los informes sin hacer cumplir las reglas.",
        "La eliminación repetida impide un piloto estable y un historial de evaluación útil."
      ],
      "concept": "Implementación sin bloqueo de ruleset",
      "hints": [
        "¿Cómo se puede evaluar un control sin rechazar un trabajo?",
        "¿Qué estado distingue la observación de la aplicación?"
      ]
    },
    "admin-076": {
      "prompt": "Una aplicación de automatización de lanzamiento necesita una excepción aprobada estrictamente para una rama ruleset. ¿Qué diseño preserva mejor la responsabilidad?",
      "choices": [
        "Deshabilitar cada regla de rama para todos los contribuyentes",
        "Otorgue acceso bypass a todos los miembros de la organización",
        "Haga que la aplicación use la contraseña compartida de un propietario",
        "Otorgue una derivación documentada solo a la aplicación aprobada para el ruleset correspondiente"
      ],
      "explanations": [
        "La eliminación global descarta protecciones no relacionadas.",
        "La derivación amplia anula la excepción limitada prevista.",
        "Las contraseñas compartidas oscurecen la atribución y son credenciales de aplicaciones inapropiadas.",
        "Una omisión de aplicación con ámbito mantiene la excepción explícita y al mismo tiempo conserva otra gobernanza."
      ],
      "concept": "Excepción a un ruleset con alcance limitado",
      "hints": [
        "¿Qué identidad realmente necesita la excepción?",
        "¿Cómo puede seguir gobernado el resto de la población contribuyente?"
      ]
    },
    "admin-077": {
      "prompt": "Una organización quiere impedir que los colaboradores comunes reescriban el historial de la rama principal con un force push. ¿Qué regla aborda directamente este objetivo?",
      "choices": [
        "Bloquear los force pushes a la rama de destino",
        "Requiere una plantilla issue",
        "Habilitar gráfico de dependencia",
        "Requerir una descripción del repositorio"
      ],
      "explanations": [
        "Bloquear los force pushes evita ese tipo de actualización que reescribe el historial.",
        "Las plantillas de problemas no restringen las actualizaciones de referencias de Git.",
        "El gráfico de dependencia identifica las dependencias del software en lugar de controlar las presiones forzadas.",
        "Las descripciones son metadatos y no protegen el historial de la rama."
      ],
      "concept": "Evitar reescrituras del historial de ramas",
      "hints": [
        "¿Qué operación de Git reescribe una referencia de rama existente?",
        "¿El control propuesto rige las actualizaciones de referencias o los metadatos del repositorio?"
      ]
    },
    "admin-078": {
      "prompt": "Un pull request recibe la aprobación y luego su autor introduce un código nuevo sustancial. La organización quiere que esa aprobación anterior no cumpla con el requisito de revisión. ¿Qué configuración aborda esto?",
      "choices": [
        "Permitir force pushes",
        "Descartar aprobaciones de solicitudes de extracción obsoletas cuando se envía el nuevo commits",
        "Hacer el repositorio interno",
        "Deshabilitar las comprobaciones de estado requeridas"
      ],
      "explanations": [
        "El permiso forzado no invalida las aprobaciones obsoletas.",
        "Para descartar aprobaciones obsoletas es necesario revisar los cambios realizados después de la aprobación.",
        "La visibilidad no determina si una aprobación está obsoleta.",
        "La eliminación de las comprobaciones de estado debilita un control de validación independiente."
      ],
      "concept": "Revisar frescura",
      "hints": [
        "¿Qué aprobó realmente el revisor?",
        "¿Cómo debería cambiar la validez de la aprobación cuando cambia el código revisado?"
      ]
    },
    "admin-079": {
      "prompt": "Una verificación de estado requerida debe ser reportada por el CI GitHub App aprobado, no por otra integración que use el mismo nombre de verificación. ¿Qué configuración es más directamente relevante?",
      "choices": [
        "Requerir una verificación por nombre al aceptar resultados de cualquier fuente",
        "Requerir commits firmado sin restringir al productor de verificación de estado",
        "Seleccione la aplicación de origen esperada para la verificación de estado requerida",
        "Exigir que la rama esté actualizada sin restringir el origen de la verificación"
      ],
      "explanations": [
        "Un nombre por sí solo no identifica a la integración aprobada como productor.",
        "Las firmas de confirmación autentican commits en lugar de verificar el estado de procedencia.",
        "Vincular la verificación requerida a una aplicación esperada limita qué productor la satisface.",
        "Exigir una rama actualizada aborda el estado de la rama sometida a pruebas, no la identidad de quien genera la verificación."
      ],
      "concept": "Procedencia de verificación requerida",
      "hints": [
        "¿Basta el nombre de una verificación para establecer quién la generó?",
        "¿Qué identidad adicional se puede asociar con el requisito?"
      ]
    },
    "admin-080": {
      "prompt": "Un equipo de cumplimiento quiere que los commits de una rama protegida tengan firmas criptográficas verificadas. ¿Qué regla se ajusta mejor?",
      "choices": [
        "Requerir historia lineal",
        "Requerir dos aprobaciones de solicitudes de extracción",
        "Bloquear los force pushes",
        "Requerir commits firmado"
      ],
      "explanations": [
        "El historial lineal gobierna la estructura de fusión en lugar de las firmas criptográficas.",
        "La aprobación del revisor no establece una firma verificada en cada commit.",
        "Las restricciones de envío forzado protegen las actualizaciones de referencia en lugar de verificar las firmas commit.",
        "La regla firmada-commit aplica los requisitos de verificación de firma documentada de GitHub."
      ],
      "concept": "Requisitos de firma de compromiso",
      "hints": [
        "¿Qué control se refiere a la integridad del commit en lugar del texto de revisión?",
        "¿Qué evidencia verifica GitHub para un commit firmado?"
      ]
    },
    "admin-081": {
      "prompt": "En un plan que admite push rulesets, una organización quiere bloquear commits que contiene archivos que coinciden con un patrón de ruta prohibido. ¿Qué control se ajusta al requisito?",
      "choices": [
        "Un push ruleset que restringe las rutas de los archivos",
        "Una advertencia README sola",
        "Un hito issue",
        "Una función de facturación de la organización"
      ],
      "explanations": [
        "Push rulesets puede restringir las rutas de archivos coincidentes en el commits entrante.",
        "Una advertencia es informativa y no bloquea un push.",
        "Los hitos rastrean el trabajo en lugar de inspeccionar las rutas de los archivos entrantes.",
        "Las funciones de facturación no limitan el contenido del repositorio."
      ],
      "concept": "Restricciones de ruta de archivo en envíos",
      "hints": [
        "¿Debe actuar el control antes de que el código llegue al repositorio?",
        "¿Qué familia de reglas inspecciona el contenido enviado en lugar de solo las fusiones?"
      ]
    },
    "admin-082": {
      "prompt": "Una empresa quiere controlar si sus repositorios privados pueden bifurcarse. ¿Qué superficie administrativa es directamente relevante?",
      "choices": [
        "Solo restricciones de force push en la rama predeterminada",
        "Políticas de bifurcación de repositorios empresariales y organizacionales",
        "Sólo organización OAuth Restricciones de la aplicación",
        "Sólo reglas que requieren la aprobación del propietario del código antes de la fusión"
      ],
      "explanations": [
        "Las restricciones de envío forzado no determinan si se puede crear un fork privado.",
        "Las políticas de bifurcación controlan si se permiten los repositorios privados forks dentro de los límites admitidos.",
        "La aprobación OAuth no reemplaza la política de bifurcación de repositorios privados.",
        "Las aprobaciones de fusión rigen los cambios en lugar de la creación de fork."
      ],
      "concept": "Gobernanza de bifurcación de repositorio privado",
      "hints": [
        "¿Dónde se pueden establecer políticas de gestión de repositorios aplicadas de forma centralizada?",
        "¿La restricción deseada sobre cambios en una rama o creación de un repositorio es fork?"
      ]
    },
    "admin-083": {
      "prompt": "Un usuario se conecta desde una dirección IP en una lista de permitidos empresarial, pero carece de permiso para acceder a un repositorio privado. ¿Qué debe esperar el administrador?",
      "choices": [
        "La lista de permitidos otorga automáticamente el repositorio Write",
        "El repositorio se vuelve legible para cualquier persona en esa red.",
        "El usuario aún necesita autorización del repositorio.",
        "La lista de permitidos sustituye a SAML y cualquier otro requisito de autenticación."
      ],
      "explanations": [
        "Una dirección de red permitida no otorga una función de repositorio.",
        "La asignación de red no hace que el contenido privado sea público en la red.",
        "Las restricciones IP son una condición de acceso adicional, no un reemplazo de los permisos.",
        "La política de red no reemplaza los controles de autorización de identidad y recursos."
      ],
      "concept": "Controles de red versus autorización",
      "hints": [
        "¿Satisfacer una condición de acceso las satisface todas?",
        "¿Qué control determina quién puede leer el repositorio privado?"
      ]
    },
    "admin-084": {
      "prompt": "Un administrador de seguridad necesita un conjunto repetible de configuraciones de seguridad de repositorio que se puedan aplicar en muchos repositorios elegibles. ¿Qué característica deberían evaluar?",
      "choices": [
        "Solo una plantilla de repositorio que contenga un documento de política de seguridad",
        "Solo un ruleset de ramas que exige revisiones",
        "Sólo una exportación de alertas de seguridad existentes.",
        "Configuraciones de seguridad"
      ],
      "explanations": [
        "Un documento de política copiado no configura las funciones de seguridad del repositorio en vivo.",
        "Las reglas de revisión de ramas no agrupan la configuración de las funciones de seguridad del repositorio.",
        "Una exportación de alerta informa los hallazgos en lugar de aplicar la configuración de funciones.",
        "Las configuraciones de seguridad agrupan configuraciones de funciones de seguridad para aplicaciones a escala."
      ],
      "concept": "Configuraciones de seguridad a escala",
      "hints": [
        "¿El objetivo es informar los hallazgos o aplicar una configuración de funciones consistente?",
        "¿Qué característica gestiona varias configuraciones de seguridad juntas?"
      ]
    },
    "admin-085": {
      "prompt": "Una organización ha adjuntado una configuración de seguridad a los repositorios, pero quiere evitar que los administradores del repositorio anulen la configuración administrada donde se admite la aplicación. ¿Qué debería configurar?",
      "choices": [
        "Enforcement de la configuración de seguridad",
        "Una descripción del repositorio más larga",
        "Solo un correo electrónico de notificación compartido",
        "Un cesionario predeterminado de issue"
      ],
      "explanations": [
        "La aplicación restringe los cambios a nivel de repositorio en los ajustes de configuración administrados.",
        "Las descripciones no bloquean la configuración de las funciones de seguridad.",
        "Las notificaciones no imponen la coherencia de la configuración.",
        "La asignación de problemas no está relacionada con las anulaciones de la configuración de seguridad."
      ],
      "concept": "Configuraciones de seguridad obligatorias",
      "hints": [
        "¿Adjuntar una configuración prohíbe necesariamente las anulaciones locales?",
        "¿Qué estado político adicional controla esa distinción?"
      ]
    },
    "admin-086": {
      "prompt": "Un gerente de seguridad quiere encontrar repositorios a los que les faltan protecciones y comparar el riesgo de alertas en toda la organización en lugar de abrir cada repositorio por separado. ¿Qué vista está diseñada para esto?",
      "choices": [
        "El registro de auditoría de la organización solo",
        "Security overview",
        "Solo el informe de uso de facturación",
        "Gráfico de dependencia de un único repositorio"
      ],
      "explanations": [
        "Los eventos administrativos históricos no brindan la misma descripción general de cobertura y riesgo.",
        "La descripción general de seguridad proporciona visibilidad a nivel de organización de la cobertura y el riesgo de seguridad.",
        "Los cargos por productos no resumen por sí solos las protecciones y alertas faltantes.",
        "Un gráfico de dependencia no agrega toda la cobertura de seguridad del repositorio."
      ],
      "concept": "Visibilidad de la postura de seguridad de la organización",
      "hints": [
        "¿El depósito de evidencia requerido es local o agregado?",
        "¿Qué visión une la cobertura con el riesgo de seguridad?"
      ]
    },
    "admin-087": {
      "prompt": "Un auditor GitHub Enterprise Cloud ve solo tres meses de eventos que no son de Git en la vista de registro de auditoría predeterminada y necesita un evento de hace cuatro meses. ¿Cuál es el mejor siguiente paso dentro del período de retención documentado?",
      "choices": [
        "Supongamos que todos los eventos de más de tres meses se eliminan permanentemente",
        "En su lugar, busque títulos del repositorio issue",
        "Utilice un rango de fechas creado explícito en la búsqueda del registro de auditoría",
        "Cambiar la zona horaria del usuario para recuperar el evento"
      ],
      "explanations": [
        "El alcance de visualización predeterminado es más corto que la retención de auditoría documentada que no es de Git.",
        "Los títulos de las cuestiones no sustituyen a los eventos de auditoría administrativa.",
        "Un intervalo de fechas explícito puede recuperar eventos retenidos más antiguos más allá de la vista predeterminada.",
        "Los cambios de zona horaria no amplían la ventana de búsqueda del registro de auditoría."
      ],
      "concept": "Ventana de visualización de auditoría versus retención",
      "hints": [
        "¿Son idénticas la vista predeterminada y la ventana de datos retenidos?",
        "¿Qué restricción de búsqueda controla el período de tiempo?"
      ]
    },
    "admin-088": {
      "prompt": "Una política de cumplimiento requiere que la evidencia de auditoría empresarial pueda buscarse durante varios años, más allá de la retención nativa de GitHub. ¿Qué diseño aborda mejor esto?",
      "choices": [
        "Confíe siempre en la página de registro de auditoría predeterminada",
        "Mantenga solo capturas de pantalla de la página de inicio de la empresa",
        "Aumentar la retención de artefactos del repositorio y asumir que afecta los eventos de auditoría.",
        "Transmita o exporte eventos de auditoría a un sistema de retención externo aprobado"
      ],
      "explanations": [
        "El registro de auditoría nativo tiene retención finita en lugar de almacenamiento indefinido.",
        "Las capturas de pantalla de la página de inicio no conservan la evidencia de auditoría a nivel de evento.",
        "La retención de artefactos del flujo de trabajo no establece la retención del registro de auditoría empresarial.",
        "La retención externa puede preservar la evidencia de auditoría de acuerdo con la política de la organización."
      ],
      "concept": "Retención de evidencia de cumplimiento a largo plazo",
      "hints": [
        "¿Qué sucede cuando expira la ventana de retención de la plataforma?",
        "¿Qué sistema debe asumir la responsabilidad de la obligación de retención más prolongada?"
      ]
    },
    "admin-089": {
      "prompt": "Una investigación debe conectar la actividad sospechosa de API con un token de acceso en particular y no solo con su usuario. ¿Qué capacidad de auditoría empresarial es más relevante?",
      "choices": [
        "Identificación de eventos de registro de auditoría realizados por un token de acceso",
        "Filtrar solo por actor y asumir que todas las credenciales del actor son equivalentes",
        "Usar únicamente las fechas de vencimiento de los tokens para inferir cada llamada a API",
        "Usar solo los nombres de autor del repositorio commit para identificar las credenciales de API"
      ],
      "explanations": [
        "La identificación de auditoría específica del token ayuda a rastrear la credencial utilizada para la actividad auditada.",
        "El filtrado exclusivo de actor no puede distinguir varias credenciales utilizadas por esa persona.",
        "Los metadatos de vencimiento no enumeran la actividad del token.",
        "La atribución de autor de confirmación no establece qué credencial API realizó una acción."
      ],
      "concept": "Atribución de auditoría a nivel de credenciales",
      "hints": [
        "¿Puede una persona utilizar varias credenciales independientes?",
        "¿Qué dimensión de auditoría distingue esas credenciales?"
      ]
    },
    "admin-090": {
      "prompt": "El análisis de secretos detecta una credencial de producción activa en el historial del repositorio. ¿Cuál es la acción de contención inmediata más importante?",
      "choices": [
        "Elimine solo la línea visible del último README",
        "Revocar o rotar la credencial en su servicio emisor",
        "Cambiar el nombre del repositorio",
        "Descartar la alerta porque el repositorio es privado"
      ],
      "explanations": [
        "Eliminar una línea visible no invalida la credencial expuesta ni las copias históricas.",
        "La revocación o rotación impide el uso posterior de la credencial expuesta.",
        "El nombre del repositorio no cambia la validez de las credenciales.",
        "La exposición a los repositorios privados aún justifica la contención de credenciales."
      ],
      "concept": "Responder a credenciales expuestas",
      "hints": [
        "¿La eliminación de texto puede invalidar una credencial ya copiada en otro lugar?",
        "¿Dónde se controla la autoridad real de la credencial?"
      ]
    },
    "admin-091": {
      "prompt": "Un equipo quiere que los secretos codificados admitidos se bloqueen antes de que ingresen a un repositorio, en lugar de depender únicamente de las alertas después del envío. ¿Qué característica debería habilitar cuando esté disponible?",
      "choices": [
        "Actualizaciones de la versión Dependabot",
        "Una plantilla de nota de versión",
        "Protección de push del análisis de secretos",
        "Una descripción de la rama"
      ],
      "explanations": [
        "Las actualizaciones de dependencia no inspeccionan el código enviado en busca de credenciales integradas.",
        "Las plantillas de notas de la versión no bloquean los envíos de secretos.",
        "La protección de inserción comprueba los secretos admitidos durante una inserción y puede bloquearlos.",
        "Las descripciones no son controles de escaneo de contenido."
      ],
      "concept": "Prevenir la introducción secreta",
      "hints": [
        "¿En qué momento debe actuar la protección?",
        "¿Qué capacidad de seguridad inspecciona las credenciales durante la operación de inserción?"
      ]
    },
    "admin-092": {
      "prompt": "Un repositorio utiliza omisión delegada para protección de inserción. Un desarrollador dice que un valor detectado es un dispositivo de prueba. ¿Cuál es la respuesta mejor gobernada?",
      "choices": [
        "Deshabilitar la protección push en toda la organización",
        "Coloque el valor en un archivo diferente para evadir el detector.",
        "Dar a cada colaborador un bypass permanente",
        "Utilice el proceso de solicitud de omisión configurado con justificación y revisión autorizada"
      ],
      "explanations": [
        "La desactivación global es desproporcionada con respecto a una detección controvertida.",
        "Mover un secreto para evadir la detección no establece que sea seguro.",
        "La omisión universal permanente descarta el límite de revisión delegado.",
        "La omisión delegada permite una decisión autorizada con contexto en lugar de una inhabilitación general."
      ],
      "concept": "Excepciones controladas de la protección de push",
      "hints": [
        "¿Cómo se puede evaluar una detección cuestionada sin debilitar la protección de todos los demás?",
        "¿Quién está autorizado a aprobar esta excepción?"
      ]
    },
    "admin-093": {
      "prompt": "Una organización emite credenciales con un formato interno que no está cubierto por un patrón de secretos integrado compatible. En un plan elegible, ¿qué deberían evaluar los administradores?",
      "choices": [
        "Un patrón de escaneo de secretos personalizado y probado",
        "Habilite solo comprobaciones de validez para patrones de proveedores compatibles existentes",
        "Habilitar solo alertas de vulnerabilidad de dependencia",
        "Solo se requiere una verificación del estado del escaneo de códigos para los hallazgos de CodeQL"
      ],
      "explanations": [
        "Los patrones personalizados pueden detectar secretos específicos de la organización y deben validarse antes de su implementación.",
        "La verificación de validez de los patrones existentes no define un detector para el nuevo formato de credencial.",
        "Las alertas de vulnerabilidad de dependencia no identifican credenciales integradas personalizadas.",
        "Un requisito de estado CodeQL no agrega en sí mismo un patrón secreto personalizado."
      ],
      "concept": "Detección de secretos específicos de la organización",
      "hints": [
        "¿Una credencial personalizada coincide necesariamente con un patrón de proveedor integrado?",
        "¿Cómo se puede adaptar y probar la detección antes de una habilitación amplia?"
      ]
    },
    "admin-094": {
      "prompt": "Un administrador no ve alertas de escaneo de secretos y concluye que el repositorio no contiene credenciales confidenciales de ningún tipo. ¿Cuál es la evaluación más precisa?",
      "choices": [
        "Ninguna alerta demuestra que todos los datos históricos están seguros",
        "La cobertura de detección depende de las funciones habilitadas y los patrones reconocidos, por lo que la ausencia de alertas no es prueba",
        "El análisis de secretos solo puede inspeccionar los nombres de los repositorios",
        "Un repositorio privado nunca puede contener un secreto expuesto"
      ],
      "explanations": [
        "La ausencia de detecciones no es garantía de una cobertura completa de datos confidenciales.",
        "La cobertura y la configuración limitan lo que el escáner puede detectar.",
        "El análisis de secretos examina el contenido compatible del repositorio, no solo los nombres.",
        "Los secretos pueden quedar expuestos a partes no autorizadas incluso en repositorios privados."
      ],
      "concept": "Límites de la evidencia de detección de seguridad",
      "hints": [
        "¿Qué suposiciones sobre la cobertura de detección subyacen a la conclusión?",
        "¿No detectar ningún issue equivale a demostrar que no existe ningún issue?"
      ]
    },
    "admin-095": {
      "prompt": "Después de rotar un token filtrado, un mantenedor quiere cerrar la alerta de análisis de secretos. ¿Qué práctica de cierre respalda mejor la investigación futura?",
      "choices": [
        "Elija cualquier motivo simplemente para reducir el recuento de aperturas",
        "Eliminar primero la evidencia de auditoría",
        "Registre la resolución precisa y conserve el contexto de respuesta relevante",
        "Marcar la alerta como falso positivo aunque el token estuviera activo"
      ],
      "explanations": [
        "Una razón arbitraria corrompe el registro del incidente.",
        "La destrucción de pruebas socava la revisión posterior.",
        "La resolución precisa preserva la distinción entre contención y detección falsa.",
        "Un token filtrado en vivo no es un falso positivo simplemente porque fue rotado."
      ],
      "concept": "Resolución precisa de alertas de seguridad",
      "hints": [
        "¿Qué necesitará entender un futuro revisor sobre el incidente?",
        "¿La remediación cambia si la detección original fue real?"
      ]
    },
    "admin-096": {
      "prompt": "Un repositorio elegible necesita escaneo CodeQL con una configuración de flujo de trabajo inicial mínima. ¿Qué configuración normalmente debería evaluar primero su administrador?",
      "choices": [
        "SARIF escrito a mano sin motor de análisis",
        "Un README que afirma que los análisis están habilitados",
        "Actualizaciones de la versión Dependabot como reemplazo completo de CodeQL",
        "Configuración predeterminada de escaneo de código"
      ],
      "explanations": [
        "SARIF es un formato de resultados y no analiza el código fuente por sí mismo.",
        "La documentación por sí sola no configura el análisis.",
        "Las actualizaciones de dependencia y el análisis de fuente CodeQL abordan diferentes riesgos.",
        "GitHub recomienda la configuración predeterminada como punto de partida para los repositorios elegibles."
      ],
      "concept": "Iniciando CodeQL con la configuración predeterminada",
      "hints": [
        "¿El repositorio requiere inicialmente una orquestación de compilación personalizada?",
        "¿Qué configuración minimiza la cantidad de código de flujo de trabajo a mantener?"
      ]
    },
    "admin-097": {
      "prompt": "Un repositorio necesita un flujo de trabajo CodeQL con pasos de compilación personalizados y un comportamiento de análisis que la configuración predeterminada no proporciona. ¿Qué dirección es apropiada?",
      "choices": [
        "Utilice la configuración avanzada y mantenga el flujo de trabajo de análisis requerido",
        "Configure solo programas de actualización de versión Dependabot",
        "Cambiar solo la cantidad de revisiones exigida por el ruleset de ramas",
        "Cargue un informe SARIF existente y asuma que configura futuras compilaciones personalizadas de CodeQL."
      ],
      "explanations": [
        "La configuración avanzada admite flujos de trabajo personalizados CodeQL y configuración de compilación.",
        "Los programas de actualización de dependencias no personalizan las compilaciones de análisis de origen.",
        "Los requisitos de recuento de revisiones no definen los pasos de compilación de CodeQL.",
        "La carga de resultados no establece un flujo de trabajo de análisis CodeQL personalizado y recurrente."
      ],
      "concept": "Flujos de trabajo de análisis personalizados de CodeQL",
      "hints": [
        "¿Qué configuración ofrece control directo sobre el flujo de trabajo del análisis?",
        "¿Qué mantenimiento extra viene con ese control?"
      ]
    },
    "admin-098": {
      "prompt": "Una empresa ya utiliza un analizador estático de terceros y quiere que los resultados admitidos se muestren como alertas de escaneo de código GitHub. ¿Qué formato de intercambio debería producir la integración?",
      "choices": [
        "Un ZIP de capturas de pantalla del repositorio",
        "SARIF",
        "Una lista en texto plano de nombres de ramas de Git",
        "Una facturación no estructurada CSV"
      ],
      "explanations": [
        "Las capturas de pantalla no proporcionan la ingesta de resultados de escaneo de código estructurado.",
        "El escaneo de código GitHub admite resultados SARIF con el formato adecuado.",
        "Los nombres de las ramas no son un formato de resultados de análisis estático.",
        "Los registros de facturación CSV no codifican los resultados del escaneo de códigos."
      ],
      "concept": "Interoperabilidad de escaneo de códigos de terceros",
      "hints": [
        "¿GitHub requiere su propio analizador para cada hallazgo mostrado?",
        "¿Qué formato estandarizado representa los resultados del análisis estático?"
      ]
    },
    "admin-099": {
      "prompt": "Un equipo de seguridad necesita detectar flujos de datos inseguros en el código de su propia aplicación, no sólo vulnerabilidades conocidas en paquetes de terceros. ¿Qué capacidad del GitHub se adapta mejor?",
      "choices": [
        "Actualizaciones de versión Dependabot solas",
        "Detección de licencias de repositorio",
        "Escaneo de código con CodeQL",
        "Visibilidad de la membresía de la organización"
      ],
      "explanations": [
        "Las actualizaciones de versión mantienen dependencias en lugar de analizar el flujo de datos de la aplicación.",
        "La detección de licencias no identifica comportamientos inseguros del código fuente.",
        "CodeQL analiza el comportamiento del código fuente mediante consultas de seguridad.",
        "La visibilidad de la membresía no inspecciona el código de la aplicación."
      ],
      "concept": "Análisis de código fuente versus mantenimiento de dependencias",
      "hints": [
        "¿El riesgo está en una versión del paquete o en la implementación de la aplicación?",
        "¿Qué herramienta razona sobre el comportamiento del código?"
      ]
    },
    "admin-100": {
      "prompt": "Un desarrollador cree que un hallazgo del escaneo de código es un falso positivo. ¿Qué respuesta preserva mejor la integridad del proceso de seguridad?",
      "choices": [
        "Deshabilite todos los análisis inmediatamente",
        "Elimine el flujo de trabajo para que la alerta ya no sea visible",
        "Descartar todas las alertas del mismo idioma sin revisarlas",
        "Inspeccionar las pruebas y desestimar sólo si está justificado, registrando la razón apropiada."
      ],
      "explanations": [
        "Un hallazgo controvertido no justifica perder toda la cobertura del análisis.",
        "Eliminar el análisis oculta hallazgos futuros en lugar de evaluar éste.",
        "El despido en todo el idioma no es una evaluación basada en evidencia.",
        "Un despido justificado y registrado con precisión preserva un historial de seguridad útil."
      ],
      "concept": "Triaje de escaneo de códigos basado en evidencia",
      "hints": [
        "¿Qué evidencia distingue un falso positivo de un issue real?",
        "¿Cómo puede la decisión seguir siendo comprensible para otro revisor?"
      ]
    },
    "admin-101": {
      "prompt": "En un plan de soporte, una organización quiere que se bloqueen las fusiones cuando una herramienta de escaneo de código elegida informa alertas que cumplen con los criterios de gravedad definidos. ¿Qué control está diseñado para esto?",
      "choices": [
        "Un ruleset que requiere resultados de escaneo de códigos con la herramienta y los umbrales seleccionados",
        "Habilite solo la ejecución del escaneo sin un requisito de combinación",
        "Sólo requiere commits firmado",
        "Solo requiere una revisión sin condición de escaneo"
      ],
      "explanations": [
        "El requisito de escaneo de código ruleset puede imponer umbrales de alerta específicos de la herramienta antes de la fusión.",
        "La producción de resultados de análisis no impone por sí sola la puerta de fusión basada en alertas deseada.",
        "Las firmas de confirmación no evalúan la gravedad de las alertas de escaneo de código.",
        "Un requisito de revisión humana no implementa umbrales de escaneo específicos de la herramienta."
      ],
      "concept": "Protección de combinación de escaneo de código",
      "hints": [
        "¿Debe ser una señal visible o un control obligatorio que impida continuar?",
        "¿Qué control puede evaluar los resultados del escaneo según criterios explícitos?"
      ]
    },
    "admin-102": {
      "prompt": "Un repositorio incluye un idioma no admitido por CodeQL. ¿Qué plan de administración es técnicamente sólido?",
      "choices": [
        "Supongamos que CodeQL analiza todos los lenguajes de programación posibles.",
        "Verifique la cobertura de idiomas admitidos y utilice un analizador adicional apropiado cuando sea necesario",
        "Marcar todos los archivos como JavaScript independientemente de su idioma real",
        "Deshabilitar la seguridad de dependencia para compensar"
      ],
      "explanations": [
        "El soporte del lenguaje CodeQL es finito y está documentado.",
        "La revisión de la cobertura y una herramienta adicional adecuada abordan las lagunas reales del análisis.",
        "Etiquetar mal los archivos fuente no crea un análisis de lenguaje válido.",
        "Eliminar la protección de dependencias no relacionadas no llena un vacío en el análisis de fuentes."
      ],
      "concept": "Planificación de cobertura del lenguaje de análisis.",
      "hints": [
        "¿Qué debe entender un motor de análisis sobre la fuente?",
        "¿Cómo puede el código no compatible seguir recibiendo un análisis significativo?"
      ]
    },
    "admin-103": {
      "prompt": "Un administrador planea habilitar capacidades de seguridad pagas en cientos de repositorios privados. ¿Qué se debe comprobar antes de una implementación amplia?",
      "choices": [
        "Solo si GitHub Actions está habilitado, suponiendo que incluya todos los productos de seguridad",
        "Solo si la organización utiliza SAML, asumiendo que prepaga las características de seguridad.",
        "Las implicaciones del consumo de licencias y derechos de productos de seguridad de la cuenta",
        "Solo si los repositorios son privados, suponiendo que la visibilidad privada haga que todo el uso de la seguridad sea gratuito"
      ],
      "explanations": [
        "La disponibilidad de Actions no determina los derechos de uso de todos los productos de seguridad.",
        "La configuración de SAML no determina si el consumo de productos de seguridad es prepago.",
        "Las funciones de seguridad del repositorio privado pueden depender de los productos adquiridos y del uso con licencia.",
        "La visibilidad privada no incluye universalmente todas las capacidades de seguridad pagas."
      ],
      "concept": "Conocimiento de derechos de funciones de seguridad",
      "hints": [
        "¿Es la disponibilidad técnica lo mismo que un derecho incluido?",
        "¿Qué consumo podría generar una habilitación amplia?"
      ]
    },
    "admin-104": {
      "prompt": "Faltan alertas Dependabot para una dependencia compatible que el equipo esperaba que GitHub inventariara. ¿Qué capacidad subyacente deberían inspeccionar primero los administradores?",
      "choices": [
        "Patrones personalizados de análisis de secretos",
        "Selección de paquete de consultas CodeQL",
        "El recuento de aprobación de solicitudes de extracción",
        "Gráfico de dependencia y sus datos de dependencia reconocidos."
      ],
      "explanations": [
        "Los patrones secretos identifican credenciales en lugar de versiones de paquetes instalados.",
        "Los paquetes de consultas de análisis de código fuente no proporcionan el inventario de dependencias de Dependabot.",
        "Los requisitos de revisión no establecen qué paquetes son conocidos por GitHub.",
        "Las alertas Dependabot dependen de dependencias reconocidas en el gráfico de dependencias."
      ],
      "concept": "Inventario de dependencia como entrada de alerta",
      "hints": [
        "¿Cómo sabría GitHub qué versiones de paquetes utiliza el repositorio?",
        "¿Qué fuente de datos se compara con los avisos de vulnerabilidad?"
      ]
    },
    "admin-105": {
      "prompt": "Un equipo quiere pull requests automático para la actualización de dependencias de rutina incluso cuando no se conoce ninguna vulnerabilidad. ¿Qué característica se adapta mejor?",
      "choices": [
        "Actualizaciones de versión Dependabot",
        "Sólo alertas Dependabot",
        "Solo análisis de secretos",
        "Solo solicitudes de revisión del propietario del código"
      ],
      "explanations": [
        "Las actualizaciones de versión verifican las dependencias configuradas según un cronograma para obtener versiones más nuevas.",
        "Las alertas informan sobre vulnerabilidades conocidas en lugar de actualizar periódicamente todas las dependencias.",
        "El análisis de secretos detecta credenciales, no si las dependencias están actualizadas.",
        "La revisión del propietario del código dirige las revisiones sin generar una actualización de versión pull requests."
      ],
      "concept": "Actualizaciones de versión versus alertas de vulnerabilidad",
      "hints": [
        "¿El desencadenante es un aviso de seguridad conocido o un mantenimiento de rutina?",
        "¿Qué automatización de dependencias se basa en la programación?"
      ]
    },
    "admin-106": {
      "prompt": "Una organización desea actualizaciones de la versión Dependabot para paquetes npm en un subdirectorio monorepo según un cronograma semanal. ¿Dónde se debe definir la configuración de programación, directorio y ecosistema de paquetes específicos del repositorio?",
      "choices": [
        "Solo CODEOWNERS",
        ".github/dependabot.yml",
        "Sólo una programación GitHub Actions sin configuración Dependabot",
        "Sólo el documento de política de seguridad del repositorio."
      ],
      "explanations": [
        "CODEOWNERS no define programas de actualización de dependencias.",
        "El archivo de configuración Dependabot declara ecosistemas, directorios y programas de actualización.",
        "Una programación cron de Actions por sí sola no configura las actualizaciones de versiones de Dependabot.",
        "Una política de seguridad escrita no define la configuración de actualización ejecutable."
      ],
      "concept": "Configuración de actualización de versión Dependabot",
      "hints": [
        "¿Qué configuración pertenece al repositorio controlado por versiones?",
        "¿Qué información necesita un actualizador para localizar paquetes y elegir su cadencia?"
      ]
    },
    "admin-107": {
      "prompt": "Dependabot no puede autenticarse en un registro de paquetes privado. La credencial existente se almacena únicamente como un secreto de Actions. ¿Qué cambio debería evaluar el administrador?",
      "choices": [
        "Imprima la credencial en cada registro de compilación",
        "Hacer anónimo el registro privado",
        "Configure el registro en Dependabot y proporcione un secreto Dependabot con el alcance adecuado",
        "Agregue la credencial directamente a dependabot.yml"
      ],
      "explanations": [
        "El registro de una credencial de registro la expone.",
        "El acceso anónimo al registro elimina innecesariamente la autenticación.",
        "Dependabot tiene su propio contexto secreto y configuración de registro privado.",
        "Se debe hacer referencia a las credenciales de registro mediante secretos en lugar de confirmarlas como texto sin formato."
      ],
      "concept": "Autenticación de registro privado para Dependabot",
      "hints": [
        "¿Las funciones de automatización independientes comparten automáticamente el mismo almacén secreto?",
        "¿Dónde se debe hacer referencia a la credencial sin comprometer su valor?"
      ]
    },
    "admin-108": {
      "prompt": "Un pull request actualiza un archivo de bloqueo e introduce una dependencia transitiva con una vulnerabilidad conocida. ¿Qué característica está diseñada específicamente para exponer los cambios de dependencia y su impacto en la seguridad durante la revisión de la solicitud de extracción?",
      "choices": [
        "Análisis de secretos",
        "Una revisión del acceso al repositorio",
        "Un registro de instalación GitHub App",
        "Revisión de dependencia"
      ],
      "explanations": [
        "El análisis de secretos detecta credenciales, no cambios en las versiones de los paquetes.",
        "Una revisión de acceso evalúa la autorización, no las diferencias de dependencia.",
        "Los registros de instalación rastrean las integraciones en lugar de los cambios de vulnerabilidad de los paquetes.",
        "La revisión de dependencia muestra cambios de dependencia, incluidas dependencias indirectas y vulnerabilidades conocidas."
      ],
      "concept": "Riesgo de dependencia en el momento de la solicitud de extracción",
      "hints": [
        "¿Qué superficie de revisión comprende los manifiestos de paquetes y las diferencias de archivos de bloqueo?",
        "¿Necesita el equipo un inventario actual o el impacto de este cambio específico?"
      ]
    },
    "admin-109": {
      "prompt": "El responsable de un repositorio público debe colaborar de forma privada con investigadores seleccionados en una vulnerabilidad antes de su divulgación pública. ¿Qué característica respalda mejor esto?",
      "choices": [
        "Un borrador de aviso de seguridad del repositorio",
        "Un issue público normal con etiqueta de seguridad.",
        "Una discusión pública con solo los mantenedores mencionados.",
        "Un comunicado publicado que contiene los detalles del exploit de inmediato."
      ],
      "explanations": [
        "Los borradores de avisos de seguridad respaldan la coordinación privada de vulnerabilidades antes de su publicación.",
        "Una etiqueta no convierte a un issue público en confidencial.",
        "Mencionar a personas seleccionadas no restringe la audiencia de una discusión pública.",
        "La publicación pública inmediata anula el período de coordinación privada solicitado."
      ],
      "concept": "Coordinación privada de vulnerabilidad",
      "hints": [
        "¿Qué distingue la colaboración previa a la divulgación de la discusión pública ordinaria de un proyecto?",
        "¿Qué característica de seguridad admite un ciclo de vida de publicación controlado?"
      ]
    },
    "admin-110": {
      "prompt": "Una organización quiere que los investigadores sepan qué versiones admite y cómo informar una vulnerabilidad de forma segura. ¿Qué documento de repositorio está destinado a esta guía?",
      "choices": [
        "CODEOWNERS",
        "SECURITY.md",
        "dependabot.yml",
        "CODE_OF_CONDUCT.md"
      ],
      "explanations": [
        "CODEOWNERS identifica a los revisores, no la política de informes de vulnerabilidades del proyecto.",
        "SECURITY.md comunica versiones compatibles e instrucciones para informes de vulnerabilidades.",
        "La configuración de Dependabot controla las actualizaciones en lugar de las instrucciones de divulgación.",
        "Un código de conducta rige el comportamiento de participación en lugar de informar sobre vulnerabilidades."
      ],
      "concept": "Comunicar una política de seguridad",
      "hints": [
        "¿Qué documento debe consultar un investigador antes de abrir un issue público?",
        "¿Las versiones de soporte y los informes privados son parte de la propiedad o de la política de seguridad?"
      ]
    },
    "admin-111": {
      "prompt": "Un responsable de un proyecto público ha preparado un aviso de seguridad y necesita un identificador de vulnerabilidad reconocido como parte de la divulgación coordinada. ¿Qué capacidad GitHub deberían considerar?",
      "choices": [
        "Crear una rama con CVE en su nombre",
        "Utilice un número issue como reemplazo automático de CVE",
        "Solicite un CVE a través del proceso de asesoramiento de seguridad del repositorio",
        "Etiquetar cada lanzamiento como vulnerable sin publicar un aviso"
      ],
      "explanations": [
        "Los nombres de las ramas no asignan identificadores CVE reconocidos.",
        "Los números del repositorio issue no son automáticamente identificadores CVE.",
        "El flujo de trabajo de asesoramiento admite la solicitud de un CVE para vulnerabilidades elegibles.",
        "El etiquetado de versiones por sí solo no solicita un identificador de vulnerabilidad."
      ],
      "concept": "Identificación y divulgación de vulnerabilidades",
      "hints": [
        "¿Quién asigna un identificador de vulnerabilidad estandarizado?",
        "¿Qué flujo de trabajo de divulgación estructurado respalda esa solicitud?"
      ]
    },
    "admin-112": {
      "prompt": "Una cola de seguridad contiene muchas alertas Dependabot. ¿Qué enfoque de priorización es más defendible?",
      "choices": [
        "Corrija siempre alfabéticamente por nombre de paquete",
        "Descartar primero las alertas más antiguas independientemente del impacto",
        "Utilice únicamente la gravedad e ignore deliberadamente la explotabilidad y el contexto de la aplicación.",
        "Utilice gravedad, señales de explotabilidad, contexto de dependencia y exposición de la aplicación."
      ],
      "explanations": [
        "El orden alfabético no refleja riesgo de seguridad.",
        "La edad por sí sola no establece que sea seguro descartar una alerta.",
        "La gravedad por sí sola puede pasar por alto diferencias importantes en la probabilidad de explotación y la exposición.",
        "Múltiples señales de riesgo y el contexto de uso real respaldan una priorización significativa."
      ],
      "concept": "Triaje de vulnerabilidades basado en riesgos",
      "hints": [
        "¿Qué hallazgos tienen más probabilidades de perjudicar esta aplicación?",
        "¿Por qué unas clasificaciones de gravedad idénticas podrían implicar prioridades operativas diferentes?"
      ]
    },
    "admin-113": {
      "prompt": "Un equipo acepta una alerta Dependabot temporalmente porque no se puede acceder a la ruta del código afectado en su implementación. ¿Cuál es la mejor práctica de mantenimiento de registros?",
      "choices": [
        "Documentar la disposición justificada y revisarla si cambian los supuestos.",
        "Marcar el paquete como arreglado aunque su versión no haya cambiado",
        "Elimine todos los manifiestos de dependencia para ocultar la alerta.",
        "Deshabilite todas las alertas de vulnerabilidad de forma permanente"
      ],
      "explanations": [
        "La justificación registrada hace que el riesgo aceptado sea auditable y respalda una reevaluación posterior.",
        "Un paquete vulnerable sin cambios no debe describirse falsamente como parcheado.",
        "La eliminación de manifiestos socava la visibilidad de la dependencia en lugar de abordar el riesgo.",
        "Un riesgo aceptado con alcance no justifica deshabilitar permanentemente todas las alertas."
      ],
      "concept": "Aceptación documentada del riesgo de vulnerabilidad.",
      "hints": [
        "¿Qué supuestos hacen defendible la decisión actual?",
        "¿Cómo podrían los cambios futuros en la implementación invalidar esa decisión?"
      ]
    },
    "admin-114": {
      "prompt": "Una empresa quiere un plan práctico de respuesta de seguridad para incidentes en el repositorio. ¿Qué contenido es más útil?",
      "choices": [
        "Sólo un objetivo anual para menos alertas",
        "Respondedores nombrados, rutas de escalada, pasos de contención, reglas de comunicación y preservación de evidencia",
        "Solo una lista de productos de escaneo habilitados sin responsabilidades de respuesta",
        "Una regla para eliminar todos los repositorios afectados antes de la investigación"
      ],
      "explanations": [
        "Una métrica por sí sola no indica a quienes responden al incidente cómo actuar.",
        "Los roles, la escalada, la contención, la comunicación y la evidencia forman un proceso de respuesta procesable.",
        "La cobertura de detección por sí sola no explica quién debe actuar ante un incidente ni cómo.",
        "La eliminación inmediata e indiscriminada corre el riesgo de perder datos y destruir pruebas."
      ],
      "concept": "Planificación operativa de la respuesta de seguridad",
      "hints": [
        "¿Qué deben saber quienes responden al incidente en sus primeros minutos?",
        "¿Cómo se mantendrán claras la responsabilidad y el manejo de las pruebas bajo presión?"
      ]
    },
    "admin-115": {
      "prompt": "Un usuario humano necesita una operación API compatible que lea issues en dos repositorios de la organización. Un PAT es apropiado para esta tarea de corta duración. ¿Qué diseño de token sigue mejor el menor privilegio?",
      "choices": [
        "Un token clásico con todos los alcances disponibles y sin vencimiento",
        "Un token que pertenece al propietario de una organización compartido con el usuario.",
        "Un token fine-grained limitado a la organización, repositorios seleccionados, permisos requeridos y una caducidad adecuada",
        "Un token para todos los repositorios con permisos de administración innecesarios"
      ],
      "explanations": [
        "Los amplios alcances y la vida útil indefinida superan las necesidades de la tarea.",
        "Compartir el token de otra persona debilita la atribución y la seguridad de las credenciales.",
        "La selección detallada de permisos y repositorios limita la autoridad de la credencial.",
        "El acceso innecesario a la administración de todos los repositorios viola el privilegio mínimo."
      ],
      "concept": "Diseño de alcance de grano fino PAT",
      "hints": [
        "¿Qué recursos y operaciones necesita realmente esta tarea?",
        "¿Cómo se puede limitar la duración de la credencial junto con sus permisos?"
      ]
    },
    "admin-116": {
      "prompt": "Un miembro crea un fine-grained PAT para una organización que requiere aprobación de token. Permanece pendiente y no puede acceder al repositorio privado previsto. ¿Cuál es la siguiente acción apropiada?",
      "choices": [
        "Vuelva a crearlo repetidamente hasta que se omita la aprobación.",
        "Cambiar el repositorio a público únicamente para el token",
        "Supongamos que la creación de tokens satisface automáticamente la aprobación de la organización",
        "Haga que un administrador autorizado revise la solicitud de token pendiente"
      ],
      "explanations": [
        "La recreación no elimina la política de aprobación de la organización.",
        "Cambiar la visibilidad expone el contenido en lugar de seguir la gobernanza del acceso.",
        "La creación de tokens y la aprobación de la organización son pasos distintos.",
        "El administrador debe revisar el acceso solicitado según la política configurada."
      ],
      "concept": "Flujo de trabajo de aprobación detallado de PAT",
      "hints": [
        "¿Qué paso político aún no se ha completado?",
        "¿Quién puede decidir si el acceso a la organización solicitada es apropiado?"
      ]
    },
    "admin-117": {
      "prompt": "Una organización quiere limitar la vida útil de los tokens que acceden a sus recursos en lugar de depender únicamente de las preferencias de cada desarrollador. ¿Qué control de gobernanza debería evaluar?",
      "choices": [
        "Una política de duración máxima de organización compatible PAT para el tipo de token relevante",
        "Una configuración de retención de artefactos del repositorio",
        "Una restricción de eliminación de ramas",
        "Una entrada CODEOWNERS para el directorio de autenticación"
      ],
      "explanations": [
        "Las políticas PAT pueden limitar la duración de los tokens para el acceso de la organización.",
        "La retención de artefactos no controla la caducidad del token API.",
        "Las reglas de eliminación de ramas no establecen la duración de las credenciales.",
        "La propiedad del código dirige las revisiones en lugar de imponer la caducidad del token."
      ],
      "concept": "Gobernanza de por vida del token",
      "hints": [
        "¿En qué ámbito se pueden hacer cumplir las reglas de credenciales de manera consistente?",
        "¿La retención de datos controla cuánto tiempo funciona una credencial de acceso?"
      ]
    },
    "admin-118": {
      "prompt": "Posteriormente se descubre que un fine-grained PAT aprobado para una organización tiene privilegios excesivos. El propietario desea eliminar el acceso a la organización de ese token sin eliminar la membresía legítima del usuario. ¿Qué acción está más dirigida?",
      "choices": [
        "Eliminar todos los equipos de la organización",
        "Revocar el acceso de ese token a través de la gestión de tokens de la organización",
        "Eliminar los repositorios públicos personales del usuario",
        "Deshabilite todo el acceso a GitHub API para cada cuenta"
      ],
      "explanations": [
        "La eliminación del equipo interrumpe a las personas no relacionadas y no tiene como objetivo una sola credencial.",
        "La revocación específica de token elimina la concesión excesiva de credenciales sin cambios amplios de membresía.",
        "La organización no aborda la exposición de sus tokens eliminando repositorios personales.",
        "Una prohibición global de API es desproporcionada con respecto a un token aprobado."
      ],
      "concept": "Revocación de acceso a tokens dirigida",
      "hints": [
        "¿El riesgo está ligado a la persona o a una credencial?",
        "¿Qué superficie de gestión identifica la credencial aprobada específica?"
      ]
    },
    "admin-119": {
      "prompt": "Una integración de organización de larga duración utiliza el PAT de un empleado. El empleado se va. ¿Qué rediseño reduce más directamente la dependencia del acceso continuo de ese individuo?",
      "choices": [
        "Copie el PAT en más repositorios",
        "Eliminar solo la caducidad del PAT",
        "Utilice un GitHub App con una instalación adecuada y permisos de alcance limitado",
        "Cambie el nombre del PAT a cuenta de servicio sin cambiar de propietario"
      ],
      "explanations": [
        "Más copias aumentan la exposición de las credenciales sin cambiar de propietario.",
        "La caducidad no es la única dependencia; El acceso a PAT queda ligado al usuario.",
        "Una aplicación basada en instalación se adapta mejor a la automatización de organizaciones independientes de un solo empleado.",
        "Un nombre para mostrar no cambia la identidad ni el ciclo de vida del token."
      ],
      "concept": "Independencia de identidad de automatización",
      "hints": [
        "¿Qué sucede con la automatización cuando el propietario de la credencial humana pierde el acceso?",
        "¿Qué modelo de integración tiene una identidad de instalación?"
      ]
    },
    "admin-120": {
      "prompt": "Una empresa de cuenta personal quiere restringir el acceso clásico del PAT a los recursos de la organización. ¿Qué afirmación es importante a la hora de evaluar el alcance de la política?",
      "choices": [
        "La política revoca automáticamente todas las claves SSH y cada GitHub App",
        "La política impide que todos lean los repositorios públicos de la organización.",
        "La política elimina la necesidad de revisar la configuración de fine-grained PAT.",
        "Las restricciones clásicas de PAT no rigen todos los demás mecanismos de autenticación"
      ],
      "explanations": [
        "Las restricciones de tipo token no son la revocación universal de SSH y el acceso a la aplicación.",
        "Los recursos públicos siguen siendo accesibles públicamente a pesar de las restricciones PAT.",
        "Los controles de tokens Classic y fine-grained requieren su propia evaluación de políticas.",
        "Los administradores deben controlar por separado otras credenciales e integraciones."
      ],
      "concept": "Límites de la política PAT",
      "hints": [
        "¿A qué tipo de credencial se dirige realmente la política?",
        "¿Qué rutas de autenticación alternativas quedan fuera de ese control?"
      ]
    },
    "admin-121": {
      "prompt": "Una integración de proveedor solo necesita acceso de solo lectura al contenido del repositorio en repositorios seleccionados. ¿Por qué es generalmente preferible una GitHub App a una aplicación OAuth de amplio alcance para este diseño?",
      "choices": [
        "GitHub Apps ofrece permisos fine-grained y selección de repositorio de instalación.",
        "GitHub Apps nunca requiere revisión de seguridad",
        "GitHub Apps tiene automáticamente privilegios de propietario empresarial sin restricciones",
        "Las aplicaciones OAuth no pueden llamar a ningún GitHub API"
      ],
      "explanations": [
        "Las aplicaciones pueden solicitar operaciones estrechamente definidas y acceso al repositorio seleccionado.",
        "Los permisos detallados reducen el riesgo pero no eliminan la revisión de la integración.",
        "La instalación no confiere propiedad empresarial ilimitada.",
        "Las aplicaciones OAuth pueden utilizar API; su modelo de autorización es diferente."
      ],
      "concept": "Ventajas de privilegios mínimos GitHub App",
      "hints": [
        "¿Cuánta autoridad necesita realmente la integración?",
        "¿Qué modelo puede separar la lectura del contenido del repositorio del control más amplio del mismo?"
      ]
    },
    "admin-122": {
      "prompt": "Una aplicación OAuth solicita el alcance del repositorio clásico aunque la descripción del negocio dice que solo lee la fuente. ¿En qué debería centrarse un administrador durante la revisión?",
      "choices": [
        "Sólo la afirmación del proveedor de que su implementación actual realiza solicitudes de lectura.",
        "La amplia autoridad del alcance real, no solo la descripción del proveedor.",
        "Sólo si un empleado ya lo autorizó",
        "Solo si la organización requiere SAML, suponiendo que eso reduzca los alcances de OAuth."
      ],
      "explanations": [
        "La presente intención no reduce la autoridad otorgada por el alcance solicitado.",
        "El alcance solicitado determina la autoridad disponible y puede exceder la necesidad comercial declarada.",
        "La autorización de un usuario no sustituye la revisión de la política de la organización.",
        "La autenticación SAML no redefine las capacidades de un alcance OAuth."
      ],
      "concept": "Revisión del riesgo de alcance OAuth",
      "hints": [
        "¿Es la intención declarada lo mismo que la capacidad concedida?",
        "¿Qué puede autorizar el alcance solicitado más allá de la lectura de la fuente?"
      ]
    },
    "admin-123": {
      "prompt": "Una integración GitHub App debe actuar como su instalación para la automatización del repositorio en lugar de en nombre de un usuario que haya iniciado sesión. ¿Qué credencial es apropiada?",
      "choices": [
        "El cliente público de la aplicación ID por sí solo.",
        "Cookie del navegador de cualquier empleado",
        "Un token de acceso a la instalación",
        "Un repositorio webhook URL sin autenticación"
      ],
      "explanations": [
        "Un cliente público ID identifica una aplicación pero no es un token de autorización de instalación.",
        "Las cookies del navegador no son credenciales de instalación apropiadas.",
        "Un token de instalación representa el acceso aprobado a la instalación de la aplicación.",
        "Un punto final webhook URL no autentica las llamadas salientes GitHub API."
      ],
      "concept": "Instalación versus autenticación de usuario",
      "hints": [
        "¿Qué identidad debería figurar como ejecutora de la automatización?",
        "¿Qué credencial representa la concesión de la aplicación instalada?"
      ]
    },
    "admin-124": {
      "prompt": "Un GitHub App instalado solicita permisos adicionales después de una actualización. ¿Qué debe hacer el propietario de la organización?",
      "choices": [
        "Supongamos que la aprobación anterior autoriza automáticamente todos los permisos futuros",
        "Otorgar inmediatamente la propiedad de la organización a la aplicación",
        "Comparta un administrador PAT para que la aplicación pueda omitir la solicitud",
        "Revisar las nuevas capacidades y aprobarlas solo si cumplen con las políticas y las necesidades comerciales."
      ],
      "explanations": [
        "Los permisos adicionales solicitados tienen su propia decisión de aprobación.",
        "La revisión de permisos de la aplicación no requiere propiedad de la organización sin restricciones.",
        "Un PAT compartido omite la gobernanza de integración prevista.",
        "Los propietarios pueden evaluar y aceptar o rechazar los permisos adicionales solicitados."
      ],
      "concept": "Revisando cambios de permisos GitHub App",
      "hints": [
        "¿Cubre una decisión anterior un conjunto de capacidades recientemente ampliado?",
        "¿Qué nuevas operaciones permitiría la aprobación?"
      ]
    },
    "admin-125": {
      "prompt": "Un GitHub App instalado en una organización ya no está aprobado para ningún uso. ¿Qué acción elimina más directamente el acceso autorizado a esa instalación?",
      "choices": [
        "Desinstalar la aplicación de la organización.",
        "Revocar el PAT no relacionado de un empleado",
        "Elimine solo la suscripción webhook de la aplicación y deje intacto su acceso a la instalación.",
        "Eliminar la caché de credenciales Git local de un usuario"
      ],
      "explanations": [
        "La desinstalación elimina la instalación de la aplicación de la organización y su acceso.",
        "Un PAT no relacionado no rige la autorización de instalación de la aplicación.",
        "Deshabilitar las notificaciones no revoca en sí el acceso API a la instalación.",
        "La caché de credenciales local de un usuario no controla las credenciales de instalación."
      ],
      "concept": "Retirar una integración de organización",
      "hints": [
        "¿Dónde se concedió el acceso a la integración?",
        "¿Qué acción revoca esa concesión en lugar de limitarse a ocultar las referencias a ella?"
      ]
    },
    "admin-126": {
      "prompt": "Un cliente REST API recibe una respuesta de límite de velocidad con x-ratelimit-remaining igual a cero. ¿Qué comportamiento de respuesta es apropiado?",
      "choices": [
        "Reintentar continuamente sin demora",
        "Espere hasta el tiempo de reinicio indicado y reduzca las llamadas innecesarias",
        "Cree muchas copias de la misma solicitud en paralelo",
        "Supongamos que cada límite de tasa se puede eliminar cambiando el nombre del token"
      ],
      "explanations": [
        "Los reintentos repetidos inmediatamente no pueden reponer la asignación primaria agotada.",
        "Los encabezados de límite de tasa identifican cuándo se restablece la asignación principal.",
        "Más solicitudes paralelas aumentan la presión en lugar de restablecer la tolerancia.",
        "Las etiquetas de los tokens no determinan la política de límite de tasas subyacente."
      ],
      "concept": "Manejo de límites de tasa primarios REST",
      "hints": [
        "¿Qué encabezados describen la asignación agotada?",
        "¿Cuándo debería esperar el cliente que la capacidad vuelva a estar disponible?"
      ]
    },
    "admin-127": {
      "prompt": "Una respuesta REST incluye Reintentar después mientras el cliente tiene una velocidad limitada. ¿Qué comportamiento sigue la guía de GitHub?",
      "choices": [
        "Ignóralo si el cliente está autenticado.",
        "Multiplique la concurrencia de solicitudes inmediatamente",
        "Espere el intervalo indicado antes de volver a intentarlo.",
        "Reintentar sólo con una cadena de User-Agent diferente"
      ],
      "explanations": [
        "La autenticación no exime a los clientes de la guía Reintentar después.",
        "Una mayor concurrencia puede agravar la limitación de solicitudes.",
        "El intervalo proporcionado por el servidor indica cuánto tiempo debe esperar el cliente.",
        "Cambiar el encabezado de un cliente no satisface el retroceso requerido."
      ],
      "concept": "Respetar el retroceso de API dirigido por el servidor",
      "hints": [
        "¿Qué comunica explícitamente el servicio sobre el tiempo de reintento?",
        "¿Podría un ciclo de reintento más rápido mejorar una situación limitada?"
      ]
    },
    "admin-128": {
      "prompt": "A un cliente todavía le queda la asignación principal API, pero recibe una limitación después de una ráfaga de solicitudes simultáneas. ¿Qué explicación debería considerar el administrador?",
      "choices": [
        "Todas las solicitudes autenticadas están exentas de limitación.",
        "La asignación primaria garantiza una concurrencia ilimitada",
        "Solo las API públicas pueden tener una tarifa limitada",
        "Los límites de las tasas secundarias pueden aplicarse independientemente de la asignación primaria."
      ],
      "explanations": [
        "Los clientes autenticados siguen sujetos a límites de tarifas.",
        "Las solicitudes restantes principales no garantizan un patrón de solicitud aceptable.",
        "Las solicitudes de recursos privados API también se pueden limitar.",
        "Los límites secundarios protegen el servicio contra una concurrencia excesiva y otros patrones abusivos."
      ],
      "concept": "Límites de tasa secundaria independiente",
      "hints": [
        "¿El volumen de solicitudes y el patrón de solicitudes representan la misma restricción?",
        "¿Qué medidas de seguridad adicionales protegen la disponibilidad del API?"
      ]
    },
    "admin-129": {
      "prompt": "Una integración de cumplimiento descarga repetidamente metadatos del repositorio sin cambios y alcanza los límites API. ¿Qué optimización reduce mejor las solicitudes innecesarias y al mismo tiempo conserva la frescura?",
      "choices": [
        "Utilice notificaciones de eventos cuando corresponda y solicitudes condicionales o almacenamiento en caché para datos sin cambios",
        "Vuelva a intentar cada error con un paralelismo inmediato ilimitado",
        "Rotar entre los PAT de los empleados para evadir la limitación",
        "Solicite permisos de token más amplios sin cambiar el patrón de llamada"
      ],
      "explanations": [
        "Las actualizaciones basadas en eventos y la recuperación condicional reducen los sondeos redundantes.",
        "Los reintentos ilimitados empeoran la carga y pueden activar límites adicionales.",
        "La rotación de credenciales no sustituye responsablemente el uso eficiente de API.",
        "Los permisos más amplios no hacen que las solicitudes redundantes sean necesarias ni eficientes."
      ],
      "concept": "Diseño de integración eficiente API",
      "hints": [
        "¿Los datos sin cambios necesitan una descarga completa cada vez?",
        "¿Puede el servicio notificar a la integración cuando se produzcan cambios relevantes?"
      ]
    },
    "admin-130": {
      "prompt": "Un arquitecto compara un servicio respaldado por PAT con un GitHub App utilizando tokens de instalación. ¿Qué supuesto de límite de tasa es más seguro?",
      "choices": [
        "Cada tipo de credencial tiene la misma asignación fija en cada cuenta",
        "Verifique los límites documentados para el contexto empresarial y de credenciales; Los límites de instalación pueden escalar según reglas documentadas.",
        "Los tokens de instalación son siempre ilimitados",
        "Más alcances OAuth siempre aumentan el límite principal"
      ],
      "explanations": [
        "Los límites varían según el método de autenticación y el contexto relevante de la cuenta.",
        "Los límites de los tokens de instalación han documentado el escalamiento y el comportamiento específico de la empresa.",
        "Las credenciales de instalación aún tienen una tarifa limitada.",
        "Los alcances más amplios no son un mecanismo general para aumentar la asignación primaria."
      ],
      "concept": "Planificación de límite de velocidad basada en credenciales",
      "hints": [
        "¿Qué identidad y contexto de cuenta determinan la asignación?",
        "¿Por qué una estimación de capacidad debería evitar una suposición de solicitudes universales por hora?"
      ]
    },
    "admin-131": {
      "prompt": "Una organización quiere que los miembros soliciten aprobación antes de que las aplicaciones OAuth de terceros accedan a los recursos de su organización. ¿Qué política es directamente relevante?",
      "choices": [
        "Una regla firmada-commit requerida",
        "Una regla de ignorar Dependabot",
        "OAuth Restricciones de acceso a la aplicación",
        "Una regla de nomenclatura de etiquetas de lanzamiento del repositorio"
      ],
      "explanations": [
        "Las reglas de firma de confirmación no rigen la autorización OAuth de terceros.",
        "Las reglas de ignorar dependencia no aprueban el acceso a la aplicación.",
        "OAuth Las restricciones de aplicaciones permiten a los propietarios de la organización controlar el acceso de las aplicaciones a los recursos de la organización.",
        "Las reglas de etiqueta de lanzamiento no determinan el acceso a OAuth."
      ],
      "concept": "Organización OAuth Gobernanza de la aplicación",
      "hints": [
        "¿Qué tipo de integración se está autorizando?",
        "¿Dónde pueden los propietarios de las organizaciones exigir la revisión de ese acceso?"
      ]
    },
    "admin-132": {
      "prompt": "Un servicio recibe entregas de GitHub webhook sobre HTTPS. Debe verificar que cada carga útil provenga del remitente configurado y no haya sido modificada. ¿Qué control adicional es apropiado?",
      "choices": [
        "Confíe en cada solicitud con GitHub en el User-Agent",
        "Verifique solo que el JSON analice",
        "Publicar el secreto webhook en el repositorio para su verificación",
        "Valide la firma webhook utilizando el secreto configurado y una comparación segura en el tiempo"
      ],
      "explanations": [
        "Los valores de User-Agent no son prueba criptográfica de origen.",
        "El JSON válido todavía se puede falsificar.",
        "La publicación del secreto permite a los atacantes falsificar firmas.",
        "La verificación de firma autentica la carga útil utilizando el secreto webhook compartido."
      ],
      "concept": "Autenticidad de la carga útil del webhook",
      "hints": [
        "¿Puede un cliente de red falsificar encabezados de solicitud ordinarios?",
        "¿Qué evidencia depende de un secreto conocido sólo por las partes interesadas?"
      ]
    },
    "admin-133": {
      "prompt": "Una integración necesita una notificación rápida cuando se crean repositorios y no necesita realizar un sondeo cada pocos segundos. ¿Qué mecanismo debería evaluar un administrador?",
      "choices": [
        "Una organización o empresa apoyada webhook para el evento relevante",
        "Una exportación manual mensual de registros de auditoría",
        "Una verificación de estado requerida en un repositorio existente",
        "Un flujo de trabajo programado que verifica una vez por semana."
      ],
      "explanations": [
        "Los webhooks notifican a los receptores configurados sobre los eventos suscritos a medida que ocurren.",
        "La exportación mensual no cumple con los requisitos de notificación inmediata de eventos.",
        "Una verificación del estado del repositorio no es una suscripción a eventos de creación de repositorios de una organización.",
        "Las encuestas semanales no pueden proporcionar notificaciones rápidas de creación."
      ],
      "concept": "Integraciones administrativas basadas en eventos",
      "hints": [
        "¿La interacción deseada es una consulta repetida o una notificación?",
        "¿Qué origen de eventos puede enviar cambios relevantes al receptor?"
      ]
    },
    "admin-134": {
      "prompt": "Una empresa ruleset requiere revisión en un conjunto de repositorios. Un administrador del repositorio crea un ruleset local sin requisito de revisión y afirma que esto elimina el control empresarial. ¿Qué es correcto?",
      "choices": [
        "El ruleset local más nuevo gana automáticamente",
        "El requisito empresarial aplicable todavía se aplica",
        "Un ruleset local vacío elimina todas las políticas heredadas",
        "El repositorio Admin omite silenciosamente todas las empresas ruleset"
      ],
      "explanations": [
        "Las reglas locales más nuevas no anulan los requisitos aplicables de mayor alcance.",
        "Capa rulesets aplicable en lugar de permitir el debilitamiento local de los requisitos empresariales.",
        "Un ruleset vacío no borra otros rulesets activos.",
        "La función administrativa por sí sola no es una opción universal para todos los ruleset."
      ],
      "concept": "Reglas de mayor alcance no anulables",
      "hints": [
        "¿Las reglas locales son reemplazos o controles adicionales aplicables?",
        "¿Qué pasaría con la gobernanza empresarial si una norma local vacía la negara?"
      ]
    },
    "admin-135": {
      "prompt": "Una alerta de CodeQL incluye una ruta que muestra cómo una entrada no confiable llega a una operación sensible. ¿Qué debe inspeccionar quien atiende la alerta para evaluar el hallazgo?",
      "choices": [
        "Solo si todas las versiones de dependencia están actualizadas",
        "Sólo si el commit tiene una firma verificada",
        "El flujo de origen a receptor, el código relevante y el contexto de validación de la aplicación",
        "Solo si un revisor aprobó el pull request"
      ],
      "explanations": [
        "Las dependencias actuales no prueban que el manejo de entradas de aplicaciones sea seguro.",
        "Una firma verificada no establece que el código esté libre de vulnerabilidades.",
        "El flujo informado y la lógica circundante respaldan una evaluación de riesgos técnicos.",
        "La aprobación previa no es un análisis técnico del flujo de datos reportado."
      ],
      "concept": "Interpretación de la evidencia del escaneo de códigos",
      "hints": [
        "¿Qué evidencia vincula la entrada con la operación sensible?",
        "¿Podría la validación circundante afectar si el camino es peligroso?"
      ]
    },
    "admin-136": {
      "prompt": "Un repositorio privado tiene habilitadas las alertas de dependencia, pero el equipo quiere que Dependabot intente corregir pull requests para las dependencias admitidas vulnerables. ¿Qué capacidad adicional debería habilitar?",
      "choices": [
        "Sólo discusiones del repositorio",
        "Sólo organización SAML SSO",
        "Solo se requiere una regla de firma commit",
        "Actualizaciones de seguridad Dependabot"
      ],
      "explanations": [
        "Las discusiones no generan cambios de corrección de dependencias.",
        "SSO protege el acceso en lugar de reparar las versiones de los paquetes.",
        "Las firmas de confirmación no generan actualizaciones de dependencia.",
        "Las actualizaciones de seguridad intentan abrir correcciones para las dependencias vulnerables admitidas."
      ],
      "concept": "Alertas versus correcciones automáticas de vulnerabilidades",
      "hints": [
        "¿La identificación de un paquete vulnerable crea necesariamente una solución?",
        "¿Qué automatización se desencadena específicamente por vulnerabilidades de dependencia?"
      ]
    },
    "admin-137": {
      "prompt": "Un administrador escribe un script que necesita un PAT y propone enviar el token junto al script para que los compañeros de trabajo puedan ejecutarlo. ¿Qué alternativa es apropiada?",
      "choices": [
        "Mantenga la credencial en un almacén secreto aprobado e inyéctela solo en ejecución autorizada.",
        "Codificar el token en Base64 y guardarlo en un commit",
        "Coloque el token en una rama sin seguimiento y asuma que es inaccesible",
        "Utilice un nombre de variable menos descriptivo para ocultar el token"
      ],
      "explanations": [
        "Un almacén secreto separa las credenciales confidenciales del código fuente distribuido.",
        "Base64 es codificación reversible, no protección para una credencial comprometida.",
        "Una rama no es un límite de administración de secretos.",
        "Los nombres de variables oscuros no protegen una credencial expuesta."
      ],
      "concept": "Protección de credenciales administrativas API",
      "hints": [
        "¿Quién puede recuperar una credencial una vez que está en el historial del repositorio distribuido?",
        "¿Qué separa la fuente del script de su autoridad de ejecución?"
      ]
    },
    "admin-138": {
      "prompt": "Un equipo de seguridad empresarial necesita direcciones de origen IP en sus investigaciones de auditoría y las encuentra ausentes de los eventos actuales. ¿Qué debería comprobar?",
      "choices": [
        "Si habilitar solo una lista de permitidos IP agrega automáticamente los campos de auditoría",
        "Si la visualización de la dirección IP del registro de auditoría empresarial se ha habilitado y se aplica a los eventos",
        "Si la autenticación SAML por sí sola garantiza los campos fuente-IP en cada evento de auditoría",
        "Si el filtrado por actor agrega metadatos fuente-IP faltantes"
      ],
      "explanations": [
        "La restricción de acceso a la red y la visualización de la dirección IP de auditoría son controles distintos.",
        "La información IP es una configuración de registro de auditoría opcional con aplicabilidad documentada.",
        "El vínculo de identidad SAML no garantiza este campo opcional para cada evento.",
        "Un filtro de búsqueda limita los registros en lugar de agregar metadatos no recopilados."
      ],
      "concept": "Fuente de auditoría: visibilidad IP",
      "hints": [
        "¿Se muestran de forma predeterminada todos los campos de auditoría potencialmente útiles?",
        "¿Qué entorno a nivel empresarial controla esta evidencia en particular?"
      ]
    },
    "admin-139": {
      "prompt": "Dependabot abre un pull request que actualiza una biblioteca vulnerable. ¿Cuál es la política de fusión más adecuada?",
      "choices": [
        "Fusione cada cambio de bot sin pruebas porque es automáticamente seguro",
        "Rechace todas las actualizaciones automáticas independientemente de la vulnerabilidad",
        "Aplicar los requisitos de prueba y revisión del repositorio mientras se evalúa la solución de seguridad.",
        "Deshabilite las reglas de rama siempre que el autor sea un bot"
      ],
      "explanations": [
        "La autoría automatizada no garantiza la compatibilidad ni elimina las necesidades de revisión.",
        "El rechazo general impide la útil corrección de vulnerabilidades respaldada.",
        "Las actualizaciones de seguridad aún necesitan una validación adecuada según la gobernanza del repositorio.",
        "La desactivación general de las reglas elimina los controles en lugar de evaluar el cambio propuesto."
      ],
      "concept": "Validación de la corrección automatizada",
      "hints": [
        "¿Puede una actualización de paquete segura seguir afectando el comportamiento de la aplicación?",
        "¿Qué controles existentes generan confianza en un cambio?"
      ]
    },
    "admin-140": {
      "prompt": "Un ejecutivo pregunta si habilitar CodeQL, Dependabot y el análisis de secretos garantiza el cumplimiento de todos los requisitos de seguridad. ¿Qué respuesta es precisa?",
      "choices": [
        "Sí, habilitar las tres funciones reemplaza todos los procesos de gobernanza y respuesta.",
        "Sí, un panel de alerta cero es un certificado de cumplimiento universal",
        "No, por lo que se deben eliminar todos los controles de seguridad automatizados.",
        "No; Estos controles proporcionan evidencia y reducción de riesgos dentro de un programa más amplio de gobernanza, revisión y respuesta."
      ],
      "explanations": [
        "La habilitación de funciones no establece un cumplimiento normativo u operativo universal.",
        "Ninguna alerta no certifica todos los requisitos ni demuestra una cobertura de detección completa.",
        "Los límites de la automatización no niegan su valor de seguridad.",
        "Las herramientas de seguridad apoyan, en lugar de reemplazar, la gobernanza contextual y la respuesta a incidentes."
      ],
      "concept": "Herramientas de seguridad dentro de la gobernanza del cumplimiento",
      "hints": [
        "¿La configuración de un detector demuestra que se satisfacen todos los requisitos de la organización?",
        "¿Qué responsabilidades quedan después de que las herramientas producen hallazgos?"
      ]
    },
    "admin-141": {
      "prompt": "Una empresa solo permite acciones y flujos de trabajo reutilizables alojados dentro de la empresa. Un flujo de trabajo que utiliza actions/checkout está bloqueado. ¿Por qué?",
      "choices": [
        "Las acciones creadas por GitHub también están fuera de la empresa a menos que la política las permita explícitamente",
        "actions/checkout solo se puede ejecutar en repositorios públicos",
        "La política se aplica solo a flujos de trabajo reutilizables, nunca a acciones.",
        "El repositorio Write anula automáticamente la política"
      ],
      "explanations": [
        "La política solo empresarial también excluye acciones creadas por GitHub fuera de la empresa.",
        "Checkout admite repositorios privados con acceso adecuado.",
        "La política rige tanto las acciones como los flujos de trabajo reutilizables.",
        "Los permisos del repositorio no anulan la política de acciones empresariales aplicada."
      ],
      "concept": "Límites de las políticas empresariales que permiten acciones",
      "hints": [
        "¿Dónde está alojado el repositorio de origen de la acción en relación con la empresa?",
        "¿La autoría oficial crea automáticamente una excepción de política?"
      ]
    },
    "admin-142": {
      "prompt": "Una organización quiere una referencia de acción para identificar una revisión de fuente inmutable en lugar de una etiqueta de lanzamiento móvil. ¿Qué referencia es más fuerte?",
      "choices": [
        "Una etiqueta de versión principal mutable",
        "El largometraje completo de la acción commit SHA",
        "La rama predeterminada del repositorio de acciones",
        "La última etiqueta sin versión."
      ],
      "explanations": [
        "El editor puede mover las etiquetas de la versión principal.",
        "Un commit SHA completo identifica una revisión de acción inmutable específica.",
        "Una rama predeterminada puede cambiar con el futuro commits.",
        "Una etiqueta más reciente no fijada no establece una identidad de fuente inmutable."
      ],
      "concept": "Referencias de acciones inmutables",
      "hints": [
        "¿Qué referencias de Git se pueden mover a otra revisión?",
        "¿Qué identifica a un commit en particular en lugar de una convención de nomenclatura?"
      ]
    },
    "admin-143": {
      "prompt": "Una organización mantiene un flujo de trabajo reutilizable en un repositorio privado y quiere que los repositorios hermanos aprobados lo llamen. Además de la sintaxis de la persona que llama, ¿qué deben configurar los administradores?",
      "choices": [
        "Otorgar únicamente contents: write al GITHUB_TOKEN del flujo de trabajo que realiza la llamada",
        "Configure solo las etiquetas runner de la persona que llama",
        "La configuración de acceso a las acciones del repositorio de origen y las políticas de asignación aplicables",
        "Agregue solo los mantenedores de origen al archivo CODEOWNERS de la persona que llama"
      ],
      "explanations": [
        "Los permisos de operación de token por sí solos no permiten compartir el flujo de trabajo privado.",
        "Las etiquetas de los runners seleccionan máquinas de ejecución, no autorizan el uso compartido del código fuente.",
        "El uso compartido privado requiere acceso permitido a la fuente y el cumplimiento de las políticas de Actions.",
        "La propiedad de la revisión no otorga acceso al flujo de trabajo reutilizable."
      ],
      "concept": "Uso compartido privado de flujo de trabajo reutilizable",
      "hints": [
        "¿Puede otro repositorio leer la automatización privada únicamente porque se conoce su nombre?",
        "¿Qué límite del lado de la fuente rige el intercambio?"
      ]
    },
    "admin-144": {
      "prompt": "Un flujo de trabajo central debe poder ser invocado como un flujo de trabajo reutilizable por trabajos de repositorio. ¿Qué disparador debe incluir su definición de flujo de trabajo?",
      "choices": [
        "Sólo horario",
        "Solo push",
        "Solo workflow_dispatch",
        "workflow_call"
      ],
      "explanations": [
        "Una programación activa ejecuciones cronometradas en lugar de permitir llamadas de flujo de trabajo reutilizables.",
        "La inserción por sí sola no declara un flujo de trabajo reutilizable invocable.",
        "El envío manual es diferente a ser llamado por otro trabajo de flujo de trabajo.",
        "workflow_call declara la interfaz de flujo de trabajo reutilizable."
      ],
      "concept": "Punto de entrada del flujo de trabajo reutilizable",
      "hints": [
        "¿Este flujo de trabajo lo inicia un ser humano, un evento u otro flujo de trabajo?",
        "¿Qué disparador declara entradas y secretos para una persona que llama?"
      ]
    },
    "admin-145": {
      "prompt": "Un desarrollador coloca una referencia de flujo de trabajo reutilizable en los pasos[*].uses y obtiene un error de validación. ¿Cuál es la estructura correcta?",
      "choices": [
        "Invocar el flujo de trabajo reutilizable con jobs.<job_id>.uses",
        "Colocar la ruta del flujo de trabajo en jobs.<job_id>.runs-on",
        "Colocar la ruta del flujo de trabajo en jobs.<job_id>.needs",
        "Coloque la ruta del flujo de trabajo en el nivel superior de la persona que llama en el campo"
      ],
      "explanations": [
        "Los flujos de trabajo reutilizables se llaman a nivel de trabajo y no como pasos de acción ordinarios.",
        "runs-on selecciona un runner, no un flujo de trabajo invocable.",
        "Las necesidades identifican las dependencias del trabajo en lugar de archivos de flujo de trabajo reutilizables.",
        "on declara eventos desencadenantes en lugar del flujo de trabajo reutilizable para ejecutar."
      ],
      "concept": "Llamadas de flujo de trabajo reutilizables a nivel de trabajo",
      "hints": [
        "¿Un flujo de trabajo reutilizable describe un único paso de acción o un conjunto de trabajos?",
        "¿En qué nivel YAML se puede invocar esa unidad de ejecución más grande?"
      ]
    },
    "admin-146": {
      "prompt": "Un flujo de trabajo de implementación reutilizable necesita que las personas que llaman seleccionen un destino de implementación a través de una interfaz escrita sin tratar el nombre del destino como una credencial. ¿Qué debería definir?",
      "choices": [
        "Solo una salida de flujo de trabajo para el objetivo",
        "Una entrada tipada de workflow_call para el destino",
        "Sólo un secreto cuyo valor es el nombre del objetivo no secreto",
        "Sólo un destino codificado dentro del flujo de trabajo llamado"
      ],
      "explanations": [
        "Las salidas devuelven resultados en lugar de aceptar la configuración seleccionada por la persona que llama.",
        "Las entradas de workflow_call proporcionan una interfaz tipada para la configuración no secreta del flujo de trabajo que realiza la llamada.",
        "El paso secreto no proporciona el contrato de entrada no secreto mecanografiado solicitado.",
        "Un destino codificado no permite que las personas que llaman lo elijan a través de una interfaz."
      ],
      "concept": "Contratos de entrada de flujo de trabajo reutilizables",
      "hints": [
        "¿El valor es una configuración secreta o ordinaria?",
        "¿Cómo debería un flujo de trabajo reutilizable validar lo que proporciona su interlocutor?"
      ]
    },
    "admin-147": {
      "prompt": "Un flujo de trabajo reutilizable llama a otro flujo de trabajo reutilizable que necesita un secreto de implementación. La persona que llama externa pasó ese secreto solo al primer flujo de trabajo. ¿Qué debe hacer el primer flujo de trabajo llamado?",
      "choices": [
        "Suponga que todos los secretos llegan automáticamente a cada flujo de trabajo anidado",
        "Imprima el secreto para que el siguiente flujo de trabajo pueda leer los registros.",
        "Pasar explícitamente el secreto necesario a través de la interfaz de llamada admitida",
        "Ponga el secreto en una salida de flujo de trabajo público"
      ],
      "explanations": [
        "Los secretos se pasan directamente a los flujos de trabajo llamados, no automáticamente a través de todos los niveles de anidamiento.",
        "Los troncos no son un transporte secreto seguro.",
        "Cada llamada anidada debe pasar el secreto que requiere.",
        "Los resultados públicos o de acceso amplio no son un canal de credenciales seguro."
      ],
      "concept": "Secretos en flujos de trabajo reutilizables anidados",
      "hints": [
        "¿La concesión de una persona que llama directamente se propaga automáticamente a través de cada llamada posterior?",
        "¿En qué límite debe recibir sus credenciales el siguiente flujo de trabajo?"
      ]
    },
    "admin-148": {
      "prompt": "Una persona que llama otorga a un flujo de trabajo reutilizable un GITHUB_TOKEN de solo lectura. El flujo de trabajo llamado intenta solicitar acceso de escritura. ¿Cuál es la regla de permiso relevante?",
      "choices": [
        "Los flujos de trabajo llamados siempre reciben el repositorio Admin",
        "Los flujos de trabajo reutilizables ignoran los permisos del token de la persona que llama",
        "Un nombre de flujo de trabajo que contenga implementación otorga acceso de escritura",
        "Un flujo de trabajo llamado no puede elevar los permisos de token otorgados por su autor de llamada"
      ],
      "explanations": [
        "La invocación de flujo de trabajo reutilizable no otorga administración del repositorio.",
        "Los permisos de la persona que llama restringen el flujo de trabajo llamado.",
        "La denominación no autoriza las capacidades del token.",
        "Los permisos se pueden mantener o reducir a través de la cadena de llamadas, no elevarse."
      ],
      "concept": "Límites de permisos en la reutilización del flujo de trabajo",
      "hints": [
        "¿Puede un componente delegado otorgarse a sí mismo autoridad sin contar con la persona que lo llama?",
        "¿Qué debería pasar con los privilegios a lo largo de una cadena de llamadas reutilizable?"
      ]
    },
    "admin-149": {
      "prompt": "Un flujo de trabajo de compilación reutilizable debe devolver una versión del paquete no secreta a la persona que llama. ¿Qué interfaz compatible debería exponer?",
      "choices": [
        "Una salida del flujo de trabajo asignada a partir de la salida del trabajo relevante",
        "Solo una variable de entorno local de paso sin mapeo de salida",
        "Solo un archivo local runner sin transferencia ni mapeo de salida",
        "Una entrada de flujo de trabajo completada después de que se haya completado el flujo de trabajo llamado"
      ],
      "explanations": [
        "Las salidas de flujo de trabajo reutilizables exponen los resultados del trabajo seleccionado a la persona que llama.",
        "Una variable de entorno local no se convierte automáticamente en una salida de flujo de trabajo visible para la persona que llama.",
        "Los archivos locales del ejecutor no se comparten automáticamente entre entornos de ejecución no relacionados.",
        "Las entradas proporcionan datos al flujo de trabajo llamado en lugar de devolver el resultado completo."
      ],
      "concept": "Salidas de flujo de trabajo reutilizables",
      "hints": [
        "¿Cómo puede una persona que llama consumir un valor sin depender del estado del disco compartido?",
        "¿Qué interfaz declarada expone el resultado de un flujo de trabajo completo?"
      ]
    },
    "admin-150": {
      "prompt": "Un administrador quiere que muchos repositorios llamen a una implementación central CI, en lugar de copiarla en cada repositorio en el momento de la creación. ¿Qué característica se adapta mejor?",
      "choices": [
        "Una plantilla de repositorio utilizada solo durante la creación",
        "Un flujo de trabajo reutilizable",
        "Una plantilla de descripción de solicitud de extracción",
        "Un archivo de flujo de trabajo copiado sin referencia ascendente"
      ],
      "explanations": [
        "Las plantillas de creación producen copias que no permanecen inherentemente vinculadas.",
        "Los flujos de trabajo reutilizables permiten a las personas que llaman hacer referencia a una implementación mantenida centralmente.",
        "Las plantillas de descripción PR no implementan trabajos CI.",
        "Las copias no vinculadas se desvían y requieren mantenimiento independiente."
      ],
      "concept": "Ejecución reutilizable versus plantillas copiadas",
      "hints": [
        "¿Las ejecuciones futuras deberían ejecutar una implementación referenciada o una copia independiente?",
        "¿Qué pasará cuando se arregle la lógica central CI?"
      ]
    },
    "admin-151": {
      "prompt": "Un equipo de plataforma necesita una unidad reutilizable directamente invocable que contenga varios trabajos con dependencias, no solo varios pasos dentro de un trabajo. ¿Qué abstracción encaja mejor?",
      "choices": [
        "Una acción de JavaScript sola",
        "Una acción compuesta sola",
        "Un flujo de trabajo reutilizable",
        "Una acción de contenedor Docker sola"
      ],
      "explanations": [
        "Una acción de JavaScript se ejecuta como un paso de acción en lugar de definir el gráfico de trabajo de la persona que llama.",
        "Las acciones compuestas combinan pasos dentro de un trabajo en lugar de definir un gráfico de múltiples trabajos.",
        "Los flujos de trabajo reutilizables pueden encapsular múltiples trabajos y sus dependencias.",
        "Una acción de contenedor empaqueta la ejecución de pasos en lugar de un flujo de trabajo completo de múltiples trabajos."
      ],
      "concept": "Acciones versus flujos de trabajo reutilizables",
      "hints": [
        "¿La unidad compartida es una secuencia de pasos o un gráfico de trabajo completo?",
        "¿Qué abstracción puede seleccionar diferentes runners para diferentes trabajos?"
      ]
    },
    "admin-152": {
      "prompt": "La mayoría de los flujos de trabajo de las organizaciones solo leen el contenido del repositorio. Algunos trabajos de publicación requieren permisos de escritura. ¿Qué diseño de token predeterminado es el más seguro?",
      "choices": [
        "Por defecto, cada trabajo tiene todos los permisos de escritura.",
        "Utilice un PAT del propietario en cada flujo de trabajo",
        "Elimine todos los permisos simbólicos de los trabajos de publicación sin cambiar sus tareas.",
        "Utilice valores predeterminados restrictivos y otorgue solo los permisos requeridos por trabajos específicos"
      ],
      "explanations": [
        "La autoridad de escritura universal amplía el impacto de los flujos de trabajo comprometidos.",
        "Una autorización de propietario compartido PAT es más amplia y duradera que la autorización de ámbito laboral.",
        "Las tareas de publicación todavía necesitan la autoridad estrictamente necesaria.",
        "Los valores predeterminados restrictivos con excepciones explícitas a nivel de trabajo siguen el privilegio mínimo."
      ],
      "concept": "Valores predeterminados del token de flujo de trabajo con privilegios mínimos",
      "hints": [
        "¿Todos los trabajos deberían heredar la autoridad de un trabajo editorial?",
        "¿A qué alcance se puede limitar una excepción necesaria?"
      ]
    },
    "admin-153": {
      "prompt": "El GITHUB_TOKEN de un flujo de trabajo no puede leer un segundo repositorio privado. El trabajo ya tiene contents: read para su propio repositorio. ¿Cuál es la mejor explicación y el siguiente paso de diseño?",
      "choices": [
        "El token automático tiene como ámbito el repositorio de flujo de trabajo; organizar el acceso autorizado por separado al segundo repositorio",
        "contents: read otorga acceso de lectura a todos los repositorios privados de la empresa",
        "El segundo repositorio debe hacerse público.",
        "Cambiar el token a contents: write amplía automáticamente su alcance a repositorios hermanos"
      ],
      "explanations": [
        "GITHUB_TOKEN tiene alcance de repositorio; El acceso entre repositorios necesita una concesión separada adecuada.",
        "Los permisos de token no amplían automáticamente los límites de su repositorio.",
        "La exposición pública es innecesaria para la automatización autorizada entre repositorios.",
        "Aumentar el privilegio de una operación no expande los límites del repositorio del token."
      ],
      "concept": "Límite del repositorio GITHUB_TOKEN",
      "hints": [
        "¿Un permiso especifica una operación, un límite de recursos o ambos?",
        "¿Qué repositorio emitió el token automático para esta ejecución?"
      ]
    },
    "admin-154": {
      "prompt": "Bajo las protecciones predeterminadas de solicitud de extracción fork, un flujo de trabajo activado por pull_request desde un fork externo no puede leer el secreto de implementación del repositorio. ¿Cuál es la mejor interpretación?",
      "choices": [
        "El autor de fork debe cambiar el nombre del secreto para que coincida con el repositorio base.",
        "Los secretos se retienen de los flujos de trabajo activados por fork para proteger contra código que no es de confianza",
        "Aumentar los permisos de GITHUB_TOKEN a contents: write expondría automáticamente todos los secretos almacenados",
        "Una compilación exitosa en el fork desbloquea automáticamente los secretos del repositorio base"
      ],
      "explanations": [
        "Los nombres secretos no anulan el límite de ejecución fork.",
        "Las protecciones predeterminadas fork evitan exponer los secretos del repositorio a envíos que no son de confianza.",
        "Los permisos de operación de tokens no otorgan por sí solos acceso a secretos almacenados.",
        "El éxito de la compilación no establece la confianza necesaria para exponer las credenciales de implementación."
      ],
      "concept": "Aislamiento secreto de solicitud de extracción bifurcada",
      "hints": [
        "¿Quién controla el código propuesto por un fork externo?",
        "¿Qué pasaría si ese código pudiera leer las credenciales de implementación?"
      ]
    },
    "admin-155": {
      "prompt": "Un flujo de trabajo utiliza pull_request_target con secretos y luego verifica y ejecuta código desde un encabezado de solicitud de extracción que no es de confianza. ¿Cuál es el riesgo central?",
      "choices": [
        "El evento garantiza que el código enviado fue revisado.",
        "La operación de pago elimina automáticamente todos los privilegios.",
        "El código que no es de confianza puede ejecutarse en un contexto privilegiado y robar credenciales",
        "El enmascaramiento de registros evita que el código envíe credenciales a través de la red"
      ],
      "explanations": [
        "El evento no genera confianza en el código de solicitud de extracción enviado.",
        "La extracción de código que no es de confianza no elimina inherentemente las credenciales del flujo de trabajo.",
        "Combinar la ejecución privilegiada con código controlado por atacantes puede exponer tokens y secretos.",
        "El enmascaramiento de registros no impide que el código malicioso filtre valores a través de otros canales."
      ],
      "concept": "Riesgos de eventos de solicitud de extracción privilegiada",
      "hints": [
        "¿Qué código es confiable y qué contexto contiene las credenciales?",
        "¿El contexto de ejecución del evento hace que el código extraído sea seguro?"
      ]
    },
    "admin-156": {
      "prompt": "Una organización quiere un control de aprobación humana antes de ejecutar flujos de trabajo enviados por determinados colaboradores externos. ¿Qué política deberían evaluar los administradores?",
      "choices": [
        "Requerir revisión del propietario del código en cada commit histórico",
        "Establecer la retención de artefactos del repositorio en un día",
        "Dar a todos los contribuyentes externos el repositorio Write",
        "Configurar los requisitos de aprobación de ejecución de flujo de trabajo para fork pull requests"
      ],
      "explanations": [
        "La revisión histórica de commit no es la política de aprobación de ejecución de flujo de trabajo.",
        "La retención de artefactos no impide la ejecución de envíos de flujos de trabajo que no son de confianza.",
        "El acceso Write amplía la autoridad del colaborador en lugar de agregar una puerta de ejecución.",
        "Las políticas de aprobación del flujo de trabajo de bifurcación definen cuándo una persona de confianza debe aprobar la ejecución."
      ],
      "concept": "Aprobaciones de ejecución de flujo de trabajo externo",
      "hints": [
        "¿La puerta deseada está antes de la ejecución o solo antes de la fusión?",
        "¿Qué configuración evalúa la ejecución del flujo de trabajo del colaborador externo?"
      ]
    },
    "admin-157": {
      "prompt": "Una persona que llama solo necesita pasar una credencial de implementación a un flujo de trabajo reutilizable. ¿Qué opción hace más explícito el límite de las credenciales?",
      "choices": [
        "Declare y pase ese secreto con nombre en lugar de heredar innecesariamente todos los secretos disponibles.",
        "Coloque la credencial en una entrada de flujo de trabajo pública predeterminada",
        "Pase todos los secretos de la organización independientemente de la necesidad.",
        "Suponga que nunca es necesaria ninguna declaración o reenvío"
      ],
      "explanations": [
        "El paso secreto con nombre explícito limita el flujo de trabajo llamado a la credencial requerida.",
        "Los valores predeterminados públicos no son un almacén secreto apropiado.",
        "La herencia secreta innecesaria amplía la exposición de las credenciales.",
        "Los flujos de trabajo reutilizables necesitan transferencias secretas compatibles en lugar de suposiciones."
      ],
      "concept": "Interfaces secretas de flujo de trabajo reutilizables mínimas",
      "hints": [
        "¿Cuántas credenciales necesita realmente el flujo de trabajo llamado?",
        "¿Qué interfaz hace que el conjunto de secretos otorgado sea más fácil de revisar?"
      ]
    },
    "admin-158": {
      "prompt": "Un equipo regulado llama a un flujo de trabajo central reutilizable y desea una revisión estable y revisable para cada versión. ¿Qué práctica de referenciación respalda mejor ese objetivo?",
      "choices": [
        "Utilice siempre la rama predeterminada sin control de cambios",
        "Haga referencia a un commit SHA aprobado y actualícelo mediante cambios revisados",
        "Omitir la versión del flujo de trabajo por completo",
        "Utilice una etiqueta de versión mutable y prohíba toda revisión de dependencia"
      ],
      "explanations": [
        "Una rama no fijada puede cambiar sin que cambie el repositorio de la persona que llama.",
        "Un pin SHA revisado proporciona una referencia estable y un rastro de actualización explícito.",
        "Las referencias de flujo de trabajo reutilizables remotas requieren una referencia adecuada.",
        "Las etiquetas mutables no ofrecen la misma garantía de revisión inmutable."
      ],
      "concept": "Control de versiones del flujo de trabajo reutilizable controlado",
      "hints": [
        "¿Cómo verán los revisores de la persona que llama una actualización del flujo de trabajo central?",
        "¿Qué referencia queda adjunta a una revisión exacta?"
      ]
    },
    "admin-159": {
      "prompt": "Un equipo elige máquinas GitHub-hosted Ubuntu runners estándar en lugar de máquinas self-hosted persistentes. ¿Qué propiedad de ejecución es útil para el aislamiento de trabajos?",
      "choices": [
        "Cada trabajo comparte permanentemente el mismo directorio de inicio grabable",
        "Los clientes deben parchear ellos mismos el sistema operativo alojado subyacente VM",
        "Cada trabajo recibe una máquina virtual GitHub-hosted nueva",
        "Todos los secretos de trabajo se almacenan permanentemente en la imagen runner."
      ],
      "explanations": [
        "Los trabajos alojados estándar de Ubuntu no reutilizan intencionalmente un directorio de inicio persistente y grabable.",
        "GitHub administra el entorno alojado runner en lugar de requerir parches OS del cliente.",
        "El estándar GitHub-hosted Ubuntu runners utiliza máquinas virtuales nuevas para los trabajos.",
        "Los secretos no están destinados a integrarse permanentemente en la imagen alojada."
      ],
      "concept": "Aislamiento estándar alojado-runner",
      "hints": [
        "¿Qué estado debería permanecer después de un trabajo en un VM alojado desechable?",
        "¿Cómo se compara eso con una máquina persistente que mantiene la organización?"
      ]
    },
    "admin-160": {
      "prompt": "Una organización instala self-hosted runners en sus propias máquinas virtuales. ¿Quién es responsable de mantener seguros y actualizados los sistemas operativos runner y las herramientas adicionales instaladas?",
      "choices": [
        "GitHub parchea automáticamente cada herramienta instalada por el cliente",
        "El autor de la acción pública gestiona todas las máquinas virtuales del cliente.",
        "Nadie, porque el registro runner congela la imagen.",
        "La organización que opera las máquinas self-hosted."
      ],
      "explanations": [
        "GitHub no gestiona todo el entorno self-hosted, propiedad del cliente.",
        "Un autor de acción no opera la flota runner del cliente.",
        "El registro no elimina los requisitos de parches continuos.",
        "Los operadores runner autohospedados mantienen sus sistemas operativos y el software instalado."
      ],
      "concept": "Propiedad operativa autohospedada",
      "hints": [
        "¿Quién controla la máquina subyacente?",
        "¿El registro del agente runner transfiere la responsabilidad del resto de la pila de software?"
      ]
    },
    "admin-161": {
      "prompt": "Dos trabajos se ejecutan secuencialmente en el mismo self-hosted runner persistente. ¿Por qué los administradores no deberían asumir que el segundo trabajo comienza en un entorno limpio?",
      "choices": [
        "runners autohospedado no garantiza inherentemente una máquina nueva para cada trabajo",
        "Todos los trabajos GitHub Actions comparten secretos intencionalmente entre repositorios",
        "El segundo trabajo siempre se ejecuta con un sistema operativo diferente.",
        "La protección de la rama del repositorio borra automáticamente la máquina"
      ],
      "explanations": [
        "El estado puede persistir en una máquina self-hosted a menos que los operadores apliquen el aislamiento y la limpieza.",
        "Los secretos tienen un alcance; El intercambio universal entre repositorios no es el modelo.",
        "Los trabajos secuenciales no cambian inherentemente el sistema operativo.",
        "La protección de ramas no restablece los discos ni los procesos de los runners."
      ],
      "concept": "Estado runner persistente",
      "hints": [
        "¿Qué sucede con los archivos y procesos en una máquina que se reutiliza?",
        "¿Qué propiedades de aislamiento deben proporcionar los propios operadores?"
      ]
    },
    "admin-162": {
      "prompt": "Un repositorio público acepta pull requests que no es de confianza. Su propuesta self-hosted runner puede llegar a una red de producción interna. ¿Cuál es la preocupación más fuerte?",
      "choices": [
        "Un GITHUB_TOKEN de solo lectura elimina necesariamente todos los sistemas operativos y capacidades de red.",
        "El código de flujo de trabajo que no es de confianza podría comprometer el runner y los recursos internos accesibles",
        "La eliminación de los secretos del repositorio aísla automáticamente todos los servicios de la red interna",
        "Las revisiones de solicitud de extracción requeridas aíslan automáticamente la red runner"
      ],
      "explanations": [
        "Los permisos de token GitHub no protegen la máquina subyacente ni su red.",
        "La ejecución autohospedada puede exponer la máquina y su red a código que no es de confianza.",
        "La eliminación secreta por sí sola no elimina la accesibilidad de la red ni las credenciales a nivel de máquina.",
        "Los requisitos de revisión en sí mismos no protegen una máquina o su red."
      ],
      "concept": "Límites de confianza para la ejecución de self-hosted",
      "hints": [
        "¿Qué puede alcanzar el código arbitrario desde esta máquina?",
        "¿La revisión de una combinación protege cada ejecución anterior del flujo de trabajo?"
      ]
    },
    "admin-163": {
      "prompt": "Un administrador debe autorizar solo los repositorios seleccionados para utilizar un grupo confidencial self-hosted runner. Un desarrollador propone utilizar una etiqueta runner única como límite de seguridad completo. ¿Cuál es el mejor diseño?",
      "choices": [
        "Utilice únicamente etiquetas y permita que todos los repositorios entren al grupo",
        "Otorgue a cada flujo de trabajo el token de registro runner",
        "Utilice políticas de acceso al grupo runner; Utilice etiquetas para enrutar entre runners autorizados.",
        "Confíe en que el nombre de host runner sea difícil de adivinar"
      ],
      "explanations": [
        "Una etiqueta de enrutamiento no reemplaza una política de acceso al repositorio.",
        "Las credenciales de registro no deben distribuirse como autorización laboral.",
        "Los grupos controlan el acceso autorizado mientras que las etiquetas ayudan a seleccionar el runners coincidente.",
        "Los nombres de host oscuros no establecen autorización."
      ],
      "concept": "Autorización de runners frente a etiquetas de asignación",
      "hints": [
        "¿Qué configuración otorga acceso y cuál selecciona una máquina adecuada?",
        "¿Conocer una etiqueta sería suficiente aprobación de seguridad?"
      ]
    },
    "admin-164": {
      "prompt": "Los trabajos de un repositorio no pueden usar un self-hosted runner aunque sus etiquetas coincidan. El runner está en un grupo restringido a repositorios seleccionados. ¿Qué debe comprobar un administrador?",
      "choices": [
        "Si contents: write anularía las restricciones del grupo de runners",
        "Si la creación de un secreto de entorno autorizaría el runner",
        "Si deshabilitar las verificaciones de estado requeridas autorizaría el runner",
        "Si el repositorio está incluido en la política de acceso del grupo runner"
      ],
      "explanations": [
        "Las capacidades del token del repositorio no anulan la autorización del grupo runner.",
        "La disponibilidad secreta y la autorización del grupo runner son controles separados.",
        "Los requisitos de fusión no otorgan acceso al grupo runner.",
        "Las etiquetas coincidentes no son suficientes si el grupo no autoriza el repositorio."
      ],
      "concept": "Diagnóstico de fallas de acceso al grupo runner",
      "hints": [
        "¿El cumplimiento de los criterios de programación demuestra que el trabajo está autorizado?",
        "¿Qué lista define los repositorios autorizados a utilizar este grupo?"
      ]
    },
    "admin-165": {
      "prompt": "Una empresa comparte un grupo runner con una organización y ese grupo tiene una política de acceso empresarial restrictiva. ¿Puede el propietario de una organización ampliar el acceso más allá de la restricción empresarial?",
      "choices": [
        "No; la administración a nivel de organización sigue restringida por la política de grupo empresarial runner",
        "Sí; la organización puede borrar silenciosamente todas las restricciones heredadas",
        "Sí; cualquier colaborador del repositorio puede anularla mediante runs-on",
        "Sí; otorgar al trabajo un GITHUB_TOKEN con capacidad de escritura anula la política de grupo"
      ],
      "explanations": [
        "Las restricciones empresariales limitan el acceso permitido a runner de la organización.",
        "Las configuraciones de menor alcance no borran los límites impuestos por la empresa.",
        "runs-on selecciona destinos de ejecución, no anula la política de acceso.",
        "Los permisos del token del repositorio no anulan la autorización del grupo runner."
      ],
      "concept": "Jerarquía de políticas de grupo Enterprise runner",
      "hints": [
        "¿A quién pertenece el grupo compartido runner?",
        "¿Puede una organización de consumidores conceder más acceso del que permite el proveedor?"
      ]
    },
    "admin-166": {
      "prompt": "Un flujo de trabajo utiliza runs-on: [self-hosted, linux, gpu]. ¿Cómo se seleccionan los runners coincidentes cuando el repositorio está autorizado a usarlos?",
      "choices": [
        "Un runner necesita solo una de las etiquetas enumeradas",
        "Un runner debe coincidir con todas las etiquetas enumeradas",
        "GitHub ignora las etiquetas después de self-hosted",
        "Las etiquetas se interpretan como una lista alternativa ordenada por prioridad."
      ],
      "explanations": [
        "La matriz de etiquetas no coincide con ninguna etiqueta.",
        "Todas las etiquetas especificadas deben coincidir con el runner elegible.",
        "Las etiquetas adicionales reducen la selección de self-hosted.",
        "La matriz no es un mecanismo de reserva secuencial."
      ],
      "concept": "Intersección de etiquetas de runners",
      "hints": [
        "¿Es esta una intersección de requisitos o una lista de alternativas?",
        "¿Qué propiedades de hardware y plataforma debe satisfacer un runner seleccionado?"
      ]
    },
    "admin-167": {
      "prompt": "Un trabajo GPU permanece en cola mientras un runner autorizado en línea está inactivo. El runner tiene etiquetas Linux y x64, pero el trabajo también requiere gpu. ¿Cuál es el diagnóstico más directo?",
      "choices": [
        "El flujo de trabajo necesita el permiso del administrador de facturación de la organización.",
        "Los trabajos en cola nunca usan self-hosted runners",
        "Ningún runner elegible coincide con el conjunto completo de etiquetas solicitadas",
        "El repositorio debe desactivar el análisis de secretos."
      ],
      "explanations": [
        "Los roles de facturación no cumplen con los requisitos de la etiqueta runner.",
        "Los trabajos autohospedados se pueden ejecutar cuando hay disponible un runner elegible.",
        "El runner inactivo carece de la etiqueta de gpu solicitada y no coincide completamente.",
        "El análisis de secretos no está relacionado con las etiquetas de asignación de runners."
      ],
      "concept": "Diagnóstico de etiquetas runner inigualables",
      "hints": [
        "¿El estado en línea por sí solo hace que un runner sea adecuado?",
        "¿Qué propiedad solicitada falta en la máquina inactiva?"
      ]
    },
    "admin-168": {
      "prompt": "Un self-hosted runner que funcionaba anteriormente aparece sin conexión después de un cambio de firewall. ¿Qué evidencia debería inspeccionar primero el administrador?",
      "choices": [
        "Las aprobaciones del propietario del código del repositorio.",
        "Fallos de aserción de prueba de aplicación del flujo de trabajo",
        "La política de retención de artefactos",
        "Registros del servicio del runner y conectividad saliente a los endpoints de GitHub requeridos"
      ],
      "explanations": [
        "Las aprobaciones del propietario del código no diagnostican la conectividad del servicio runner.",
        "Las aserciones de prueba se ejecutan dentro de trabajos y no explican primero un servicio runner fuera de línea.",
        "La retención de artefactos almacenados no determina la conectividad del servicio.",
        "Los registros de servicio y las conexiones salientes requeridas prueban directamente la falla sospechada de la red."
      ],
      "concept": "Solución de problemas de conectividad autohospedada",
      "hints": [
        "¿Qué componente mantiene la conexión con GitHub?",
        "¿Qué cambió inmediatamente antes de que el runner se desconectara?"
      ]
    },
    "admin-169": {
      "prompt": "Un equipo está diseñando una flota self-hosted runner de escala automática y quiere que cada máquina acepte solo un trabajo antes de ser reemplazada. ¿Qué ciclo de vida de runner encaja?",
      "choices": [
        "Efímero self-hosted runners con preservación de registros externos",
        "Un único runner persistente sin limpieza",
        "Una estación de trabajo interactiva compartida utilizada por todos los desarrolladores.",
        "Un runner que se registra una vez y nunca se actualiza"
      ],
      "explanations": [
        "El efímero runners procesa un trabajo; Los registros externos preservan la evidencia después de su eliminación.",
        "Un runner persistente y sin limpiar no proporciona aislamiento del ciclo de vida de un solo trabajo.",
        "Las estaciones de trabajo compartidas combinan actividad interactiva con automatización y no cumplen con el objetivo del ciclo de vida.",
        "El registro permanente sin actualizaciones no proporciona ejecución desechable."
      ],
      "concept": "Diseño de ciclo de vida efímero runner",
      "hints": [
        "¿Qué debería pasar con el runner después de su trabajo asignado?",
        "¿Dónde sobrevivirán los diagnósticos si la máquina se destruye?"
      ]
    },
    "admin-170": {
      "prompt": "Un equipo de plataforma ya opera Kubernetes y quiere la solución basada en Kubernetes de GitHub para orquestar conjuntos de escalado self-hosted runner. ¿Qué componente debería evaluar?",
      "choices": [
        "Grupos de dependencia Dependabot",
        "Actions Runner Controller",
        "Evaluación del repositorio ruleset",
        "GitHub Pages"
      ],
      "explanations": [
        "Los grupos de dependencia organizan las actualizaciones, no los pods runner.",
        "Actions Runner Controller organiza conjuntos de escalado self-hosted runner en Kubernetes.",
        "La evaluación del conjunto de reglas observa las reglas del repositorio en lugar de crear capacidad runner.",
        "Pages aloja sitios estáticos en lugar de administrar flotas runner."
      ],
      "concept": "Orquestación de Kubernetes runner",
      "hints": [
        "¿Qué solución gestiona el ciclo de vida de las cargas de trabajo runner en Kubernetes?",
        "¿El requisito es CI capacidad o gobernanza del repositorio?"
      ]
    },
    "admin-171": {
      "prompt": "Una compilación debe llegar a un servidor de paquetes interno privado. La organización está evaluando self-hosted runners en su red. ¿Qué responsabilidad administrativa adicional es esencial?",
      "choices": [
        "Supongamos que GitHub configura automáticamente cada firewall interno",
        "Exponer el servidor de paquetes públicamente sin autenticación",
        "Controle el acceso a la red runner, el aislamiento de la máquina y las credenciales para el recurso privado",
        "Otorgar a todos los pull request externos acceso a las rutas de la red de producción"
      ],
      "explanations": [
        "La configuración de la red autohospedada sigue siendo responsabilidad del operador.",
        "No se requiere acceso público no autenticado para la conectividad privada.",
        "La ubicación de una red privada necesita límites explícitos de red y credenciales.",
        "Los envíos que no son de confianza no deben heredar una accesibilidad innecesaria a la red de producción."
      ],
      "concept": "Acceso a recursos privados desde self-hosted runners",
      "hints": [
        "¿Qué autoridad se obtiene al colocar la ejecución de código dentro de la red privada?",
        "¿Qué límites debe mantener el operador runner?"
      ]
    },
    "admin-172": {
      "prompt": "Una empresa elegible quiere una infraestructura runner administrada por GitHub con acceso privado a través de Azure VNET. ¿Qué opción documentada debería evaluar?",
      "choices": [
        "Supongamos que cualquier runner alojado estándar se une automáticamente al VNET.",
        "Usar GitHub Pages como túnel de red privada",
        "Deshabilite el firewall VNET y publique todos los servicios",
        "Redes privadas de Azure para GitHub-hosted compatibles con runners más grandes"
      ],
      "explanations": [
        "Los estándares runners no se conectan automáticamente a la red Azure de la empresa.",
        "Pages no proporciona esta integración de red runner.",
        "La publicación de servicios internos descarta el requisito de red privada.",
        "El runners más grande compatible puede usar la configuración de red privada de Azure de la empresa."
      ],
      "concept": "Redes privadas de Azure para runners alojado",
      "hints": [
        "¿El uso de computación administrada descarta la política de red controlada por el cliente?",
        "¿Qué categoría runner admite esta integración documentada?"
      ]
    },
    "admin-173": {
      "prompt": "Después de mover runners más grande admitido a una red privada de Azure, una organización bloquea todo el tráfico saliente y los trabajos dejan de comunicarse con GitHub. ¿Qué debería hacer?",
      "choices": [
        "Revise la conectividad requerida y permita destinos salientes documentados manteniendo restricciones de red deliberadas.",
        "Supongamos que la red privada elimina toda necesidad de comunicarse con GitHub",
        "Cambie solo las reglas de entrada mientras continúa negando todas las conexiones salientes requeridas",
        "Aumente los permisos de los tokens de flujo de trabajo sin cambiar las reglas de la red"
      ],
      "explanations": [
        "Las redes privadas aún requieren conectividad de servicio compatible según la política de red adecuada.",
        "La orquestación del ejecutor y las operaciones de acciones admitidas aún dependen de las conexiones del servicio.",
        "Los cambios solo de entrada no restauran la salida requerida bloqueada.",
        "Los permisos de la aplicación no pueden reparar la conectividad de red denegada."
      ],
      "concept": "Política de red sin romper el tráfico de control runner",
      "hints": [
        "¿Qué conexiones se requieren para que el runner reciba e informe del trabajo?",
        "¿Puede la denegación por defecto coexistir con la salida explícitamente admitida?"
      ]
    },
    "admin-174": {
      "prompt": "Un punto final de implementación privado requiere una pequeña lista de permitidos de origen estable-IP. Los rangos estándar alojados-runner son demasiado amplios para la organización. ¿Qué diseño deberían evaluar los administradores?",
      "choices": [
        "Permitir una dirección estándar runner observada y asumir que cada trabajo posterior la reutiliza",
        "Compatible con runners más grande con IP estáticas o una salida de red controlada self-hosted",
        "Establecer un grupo de simultaneidad para reservar un IP público alojado estándar runner",
        "Configurar contents: write para asignar una dirección de salida fija"
      ],
      "explanations": [
        "Una dirección observada en una ejecución alojada estándar no es una asignación futura estable.",
        "Estas opciones pueden proporcionar una salida estable controlada adecuada a la política del punto final.",
        "La simultaneidad controla la programación en lugar de la asignación pública-IP.",
        "Los permisos de operación de tokens no asignan direcciones de red."
      ],
      "concept": "Planificación de salida estable runner",
      "hints": [
        "¿El punto final requiere autorización por identidad, origen de red o ambos?",
        "¿Qué opciones de runner dan a los operadores control sobre las direcciones de salida?"
      ]
    },
    "admin-175": {
      "prompt": "Un self-hosted runner se encuentra detrás de un proxy corporativo HTTP y no puede registrarse. ¿Qué área de configuración debería inspeccionar el administrador?",
      "choices": [
        "Solo la cantidad de aprobaciones de pull requests",
        "Solo programas de actualización de dependencias",
        "La configuración de proxy admitida del runner y la accesibilidad requerida del punto final",
        "Solo la verificación de firmas de commits"
      ],
      "explanations": [
        "Los recuentos de revisiones no establecen la conectividad a Internet del servicio runner.",
        "Los programas de dependencia no configuran el proxy del runner.",
        "La configuración del proxy del runner y el acceso a los endpoints afectan directamente el registro y la comunicación.",
        "La verificación de confirmación no enruta las solicitudes de red a través de un proxy."
      ],
      "concept": "Administración del proxy de runners",
      "hints": [
        "¿Qué proceso necesita utilizar la ruta de salida de la organización?",
        "¿Qué configuración de red hereda realmente el servicio runner?"
      ]
    },
    "admin-176": {
      "prompt": "La respuesta al flujo de trabajo aumentó, pero las duraciones de ejecución de los trabajos no cambian. La mayor parte del tiempo añadido se dedica a hacer cola antes de que se inicie un runner. ¿Qué deberían investigar primero los administradores?",
      "choices": [
        "Solo optimización del compilador de aplicaciones",
        "Reemplazar cada acción con un script de shell más largo",
        "Aumento de los días de retención de artefactos",
        "Disponibilidad de runners, límites de concurrencia y capacidad de los grupos o etiquetas coincidentes"
      ],
      "explanations": [
        "La duración de ejecución sin cambios no apunta primero a la velocidad de compilación.",
        "Los scripts más largos no abordan la espera de un runner.",
        "La retención de artefactos no crea capacidad runner.",
        "El crecimiento de la cola apunta a la elegibilidad de programación o a la capacidad de ejecución disponible."
      ],
      "concept": "Diagnóstico en tiempo de cola frente a tiempo de ejecución",
      "hints": [
        "¿En qué parte del ciclo de vida del flujo de trabajo se produce el retraso añadido?",
        "¿Un código más rápido ayudaría a un trabajo que no ha comenzado?"
      ]
    },
    "admin-177": {
      "prompt": "Una organización deshabilita intencionalmente las actualizaciones automáticas del agente runner en sus imágenes self-hosted administradas. ¿Qué obligación queda?",
      "choices": [
        "Maintain un proceso para actualizar el software runner dentro de los requisitos de soporte documentados de GitHub",
        "Nunca actualices la imagen nuevamente.",
        "Supongamos que las actualizaciones de OS reemplazan automáticamente la aplicación GitHub runner.",
        "Requerir que los usuarios omitan las reglas de rama del repositorio"
      ],
      "explanations": [
        "Al deshabilitar las actualizaciones automáticas, se transfiere la programación de actualizaciones al operador runner.",
        "El software runner obsoleto puede dejar de recibir trabajos según los requisitos de actualización de GitHub.",
        "Las actualizaciones del sistema operativo no necesariamente actualizan la aplicación runner instalada por separado.",
        "La omisión de reglas de bifurcación no actualiza el software runner."
      ],
      "concept": "Actualizaciones controladas del agente runner",
      "hints": [
        "¿Quién posee ahora la cadencia de actualización?",
        "¿Qué sucede si una imagen administrada permanece detrás de la versión runner requerida?"
      ]
    },
    "admin-178": {
      "prompt": "Un entorno de producción requiere la aprobación del revisor y almacena un secreto de implementación. ¿Cuándo debería un trabajo de referencia obtener acceso a ese entorno secreto?",
      "choices": [
        "Tan pronto como la ejecución del flujo de trabajo esté en cola, antes de la revisión del entorno",
        "Después de que se cumplan las condiciones de protección y aprobación requeridas por el medio ambiente.",
        "Siempre que cualquier trabajo de construcción anterior tenga éxito, incluso sin la aprobación del medio ambiente.",
        "Tan pronto como un revisor apruebe el pull request, independientemente de la revisión del entorno"
      ],
      "explanations": [
        "La cola no satisface el umbral de revisor requerido por el entorno.",
        "Los secretos ambientales están protegidos por los requisitos de protección del medio ambiente.",
        "El éxito de la construcción no reemplaza el requisito de aprobación ambiental.",
        "La revisión de la solicitud de extracción y la aprobación del entorno requerida son controles separados."
      ],
      "concept": "Secretos de implementación controlados por el entorno",
      "hints": [
        "¿En qué límite deberían estar disponibles las credenciales de producción?",
        "¿Qué debe suceder antes de que continúe un trabajo de implementación protegida?"
      ]
    },
    "admin-179": {
      "prompt": "Un secreto de organización solo debe poder ser utilizado por tres repositorios de implementación. ¿Qué configuración se adapta mejor?",
      "choices": [
        "Dale el secreto a todos los repositorios y confía en su oscuro nombre.",
        "Confirmar el valor en un repositorio compartido",
        "Establecer la política de acceso al repositorio del secreto de la organización para los repositorios seleccionados",
        "Exponer el valor como variable de organización pública."
      ],
      "explanations": [
        "Un nombre oscuro no impone un límite de repositorio.",
        "Las credenciales confirmadas se distribuyen con el historial del repositorio.",
        "Las políticas de acceso secreto de la organización pueden limitar el uso a repositorios seleccionados.",
        "Las variables no reemplazan el almacenamiento secreto confidencial."
      ],
      "concept": "Secretos de la organización del repositorio seleccionado",
      "hints": [
        "¿Qué repositorios tienen una necesidad legítima de esta credencial?",
        "¿Qué entorno hace cumplir esa lista en lugar de simplemente documentarla?"
      ]
    },
    "admin-180": {
      "prompt": "Un trabajo hace referencia a un entorno. El mismo nombre secreto se configura en los ámbitos de organización, repositorio y entorno. ¿Qué valor tiene prioridad para el trabajo?",
      "choices": [
        "El valor de la organización porque es el más alto en la jerarquía.",
        "El valor de cadena más largo",
        "Los tres valores concatenados",
        "El valor del medio ambiente."
      ],
      "explanations": [
        "Para nombres secretos duplicados, el ámbito más específico tiene prioridad.",
        "La precedencia secreta no se basa en la longitud del valor.",
        "Los valores secretos duplicados no se concatenan.",
        "El secreto a nivel de entorno es el valor aplicable más específico."
      ],
      "concept": "Precedencia de alcance secreto",
      "hints": [
        "¿Se trata esta jerarquía de una aplicación amplia de políticas o de una especificidad de valores?",
        "¿Qué alcance configurado está más cerca del trabajo de implementación?"
      ]
    },
    "admin-181": {
      "prompt": "Existe un secreto de repositorio denominado SERVICE_KEY, pero un paso de shell que dice $SERVICE_KEY obtiene un valor vacío. El flujo de trabajo nunca asigna el secreto a una variable de entorno. ¿Qué debería cambiarse?",
      "choices": [
        "Asigne explícitamente el valor del contexto de los secretos a la variable de entorno del paso.",
        "Supongamos que cada secreto se convierte automáticamente en una variable de shell",
        "Haga referencia a vars.SERVICE_KEY mientras deja el valor almacenado solo como un secreto",
        "Agregar contents: write y suponer que esto exporta el secreto al proceso"
      ],
      "explanations": [
        "Un mapeo de entorno de nivel de paso proporciona el secreto almacenado al shell con el nombre deseado.",
        "La creación de un secreto no exporta automáticamente todos los secretos a todos los shells.",
        "El contexto vars lee las variables de configuración, no el almacén secreto separado.",
        "Los permisos de token del repositorio no completan automáticamente las variables de entorno del shell."
      ],
      "concept": "Proporcionar secretos a los pasos del flujo de trabajo",
      "hints": [
        "¿De dónde obtiene un proceso de shell sus variables de entorno?",
        "¿Cómo se hace referencia al secreto almacenado en la definición del flujo de trabajo?"
      ]
    },
    "admin-182": {
      "prompt": "Un flujo de trabajo transforma un secreto e imprime el resultado transformado. Un desarrollador asume que el enmascaramiento de registros de GitHub garantiza que no se producirán fugas. ¿Cuál es la evaluación correcta?",
      "choices": [
        "Cada posible secreto transformado siempre se reconoce automáticamente.",
        "El enmascaramiento automático no es una garantía completa; Evite el registro de secretos y proteja los valores derivados explícitamente.",
        "El enmascaramiento cifra todos los artefactos para cada visitante del repositorio.",
        "La codificación Base64 hace que la salida sea segura para publicar automáticamente"
      ],
      "explanations": [
        "El enmascaramiento no puede garantizar el reconocimiento de cada valor sensible transformado.",
        "El diseño del flujo de trabajo seguro para las credenciales debe evitar la divulgación en lugar de depender exclusivamente del enmascaramiento.",
        "El enmascaramiento de registros no es un cifrado de artefactos universal.",
        "Base64 es reversible y no hace que las credenciales sean seguras para el público."
      ],
      "concept": "Límites de la redacción automática de registros",
      "hints": [
        "¿El texto transformado seguiría coincidiendo con el secreto registrado originalmente?",
        "¿Puede una representación reversible conservar la misma sensibilidad?"
      ]
    },
    "admin-183": {
      "prompt": "Una empresa reemplaza una clave de implementación de nube de larga duración con OIDC. ¿Qué configuración de confianza del lado de la nube es esencial?",
      "choices": [
        "Confía en cualquier token de cualquier repositorio sin restricciones",
        "Utilice solo el nombre para mostrar del flujo de trabajo como límite de seguridad",
        "Restringir las reclamaciones OIDC aceptadas al repositorio previsto y al contexto de implementación",
        "Publique la clave de nube anterior para que OIDC pueda descubrirla"
      ],
      "explanations": [
        "La confianza ilimitada podría permitir que flujos de trabajo no relacionados obtengan autoridad en la nube.",
        "Los nombres para mostrar no son límites suficientes de autorización basada en notificaciones.",
        "La confianza en la nube debe validar el emisor, la audiencia y el tema apropiado u otras afirmaciones respaldadas.",
        "OIDC no requiere la publicación de una credencial de larga duración."
      ],
      "concept": "Confianza en la nube con alcance para el flujo de trabajo OIDC",
      "hints": [
        "¿En qué identidades de flujo de trabajo debería confiar realmente el proveedor de la nube?",
        "¿Qué evidencia distingue una implementación autorizada de un flujo de trabajo no relacionado?"
      ]
    },
    "admin-184": {
      "prompt": "Un flujo de trabajo establece id-token: write y un ingeniero afirma que esto por sí solo otorga acceso de administrador a la suscripción a la nube. ¿Qué corrección es precisa?",
      "choices": [
        "La configuración otorga el repositorio GitHub sin restricciones Write",
        "La configuración instala un administrador de nube automáticamente.",
        "La configuración pasa por alto la política de confianza del proveedor de la nube.",
        "Permite solicitar un token OIDC; La confianza en la nube y las asignaciones de roles determinan la autoridad en la nube."
      ],
      "explanations": [
        "El permiso id-token no otorga permisos de escritura sobre el contenido del repositorio.",
        "Los permisos de flujo de trabajo no instalan automáticamente los roles de administrador de la nube.",
        "La validación y autorización del lado de la nube aún se aplican.",
        "La emisión de tokens OIDC y la autorización en la nube son pasos separados."
      ],
      "concept": "Emisión de OIDC versus autorización en la nube",
      "hints": [
        "¿Obtener pruebas de identidad es lo mismo que otorgar permisos de recursos?",
        "¿Qué sistema decide qué puede hacer la credencial de nube intercambiada?"
      ]
    },
    "admin-185": {
      "prompt": "Una organización mantiene los secretos de implementación en una bóveda de terceros y admite la autenticación federada. ¿Qué integración evita mejor la duplicación de credenciales de bóveda de larga duración en cada repositorio?",
      "choices": [
        "Autenticar el flujo de trabajo en el almacén con confianza OIDC con alcance y recuperar solo secretos de tiempo de ejecución autorizados.",
        "Copie el token raíz del almacén en cada archivo de flujo de trabajo",
        "Deshabilite los controles de acceso a la bóveda para GitHub-hosted runners",
        "Utilice el nombre del repositorio como única contraseña de la bóveda"
      ],
      "explanations": [
        "La federación puede proporcionar acceso de corta duración sujeto a las políticas y la confianza del ámbito del almacén.",
        "Un token raíz en la fuente otorga autoridad excesiva y la expone.",
        "La ejecución alojada no justifica la eliminación de la autorización del almacén.",
        "Un nombre de repositorio público no es un secreto de autenticación."
      ],
      "concept": "Integración de bóveda de terceros federada",
      "hints": [
        "¿El flujo de trabajo debe contener una credencial de arranque permanente?",
        "¿Cómo puede la bóveda autorizar una identidad de flujo de trabajo y una ruta secreta limitada?"
      ]
    },
    "admin-186": {
      "prompt": "Una organización cambia el valor almacenado en un secreto de repositorio después de una sospecha de fuga de clave de nube. ¿Por qué el incidente podría seguir sin contenerse?",
      "choices": [
        "Los secretos del repositorio no se pueden actualizar",
        "La actualización del valor almacenado de GitHub no revoca la credencial anterior en el proveedor de la nube",
        "Cambiar un secreto siempre desactiva todas las credenciales externas automáticamente",
        "El nombre secreto debe acortarse antes de que funcione la rotación."
      ],
      "explanations": [
        "Los administradores autorizados pueden actualizar los secretos almacenados.",
        "El emisor de la credencial debe revocar o rotar la clave expuesta de forma independiente.",
        "El reemplazo de secretos GitHub no revoca universalmente claves de terceros.",
        "La longitud del nombre secreto no determina la validez de las credenciales externas."
      ],
      "concept": "Reemplazo secreto versus revocación del emisor",
      "hints": [
        "¿Dónde se valida realmente la credencial expuesta?",
        "¿Alguien todavía puede usar un valor copiado antiguo fuera de GitHub?"
      ]
    },
    "admin-187": {
      "prompt": "Una persona que llama pasa una credencial de implementación como una entrada de flujo de trabajo reutilizable normal porque tanto las entradas como los secretos aceptan valores. ¿Qué diseño es mejor?",
      "choices": [
        "Utilice una entrada pública predeterminada que contenga la credencial",
        "Coloque la credencial en el nombre de archivo del flujo de trabajo reutilizable",
        "Declararlo y pasarlo a través de la interfaz secreta del flujo de trabajo reutilizable",
        "Devolver la credencial como resultado de un flujo de trabajo no secreto"
      ],
      "explanations": [
        "Los valores predeterminados públicos exponen la credencial.",
        "Los nombres de archivos son metadatos visibles en lugar de transporte de credenciales confidenciales.",
        "La interfaz secreta expresa datos confidenciales y utiliza el manejo previsto.",
        "Las salidas no secretas exponen innecesariamente material de credenciales."
      ],
      "concept": "Secretos versus entradas de flujo de trabajo ordinarias",
      "hints": [
        "¿El valor tiene requisitos de confidencialidad?",
        "¿Qué parte de la interfaz reutilizable comunica y preserva esa distinción?"
      ]
    },
    "admin-188": {
      "prompt": "Un flujo de trabajo desencadenado por un Dependabot pull request necesita una credencial de registro aprobada, pero su secreto de acciones ordinario no está disponible en el contexto de ejecución restringida. ¿Qué deben evaluar los administradores?",
      "choices": [
        "Otorgar a todos los flujos de trabajo de bot propiedad empresarial sin restricciones",
        "Confirme la contraseña del registro para que todos los contextos puedan leerla.",
        "Deshabilitar las actualizaciones de dependencia permanentemente",
        "Configure un secreto Dependabot con el ámbito adecuado y conserve las restricciones de confianza del flujo de trabajo."
      ],
      "explanations": [
        "La propiedad empresarial no está relacionada y es demasiado amplia.",
        "La confirmación de credenciales vence el aislamiento secreto.",
        "La credencial faltante se puede solucionar sin abandonar el mantenimiento de dependencias.",
        "Los flujos de trabajo activados por Dependabot tienen un manejo secreto especial que los administradores deben configurar explícitamente."
      ],
      "concept": "Contexto secreto de flujo de trabajo activado por Dependabot",
      "hints": [
        "¿Qué actor desencadenó el flujo de trabajo?",
        "¿Ese contexto de ejecución utiliza los mismos secretos disponibles que un envío confiable?"
      ]
    },
    "admin-189": {
      "prompt": "Un flujo de trabajo inserta un título issue que no es de confianza directamente en un script de shell en línea mediante una expresión. ¿Qué cambio reduce mejor el riesgo de inyección de scripts?",
      "choices": [
        "Pase el valor que no es de confianza a través de una variable de entorno y cítelo apropiadamente, o use una entrada de acción adecuada",
        "Supongamos que los títulos issue no pueden contener metacaracteres de shell",
        "Conceder al trabajo más permisos simbólicos",
        "Ocultar el script en un archivo YAML más largo sin cambiar la interpolación"
      ],
      "explanations": [
        "Separar los datos del origen del shell generado reduce el riesgo de inyección cuando se maneja de forma segura.",
        "El texto issue controlado por el usuario puede contener caracteres significativos para el shell.",
        "Más permisos aumentan el impacto en lugar de prevenir la inyección.",
        "La longitud del archivo no cambia el comportamiento de interpolación inseguro."
      ],
      "concept": "Prevención de inyección de scripts de flujo de trabajo",
      "hints": [
        "¿El texto controlado por el usuario se está convirtiendo en código fuente ejecutable?",
        "¿Cómo puede el shell recibirlos como datos en lugar de sintaxis de script?"
      ]
    },
    "admin-190": {
      "prompt": "Un comando de implementación acepta una credencial como argumento de línea de comando o mediante entrada estándar. ¿Por qué el flujo de trabajo debería preferir un canal secreto apropiado sin argumentos?",
      "choices": [
        "Los argumentos de la línea de comandos revocan automáticamente las credenciales",
        "Los argumentos pueden exponerse mediante la inspección o el registro del proceso.",
        "La entrada estándar siempre otorga el repositorio Admin",
        "GitHub requiere que se confirmen todos los secretos antes de su uso"
      ],
      "explanations": [
        "La colocación de argumentos no revoca una credencial.",
        "Los argumentos de la línea de comandos pueden ser visibles para otros procesos o incluirse en los registros.",
        "La entrega de entradas no determina la autorización del repositorio.",
        "Los secretos no deben enviarse al origen para la ejecución del flujo de trabajo."
      ],
      "concept": "Evitar la exposición de credenciales en argumentos de proceso",
      "hints": [
        "¿Quién podría inspeccionar la invocación del proceso?",
        "¿Puede un comando recibir datos confidenciales sin incluirlos en su lista de argumentos visibles?"
      ]
    },
    "admin-191": {
      "prompt": "Un administrador fija una acción de terceros en un commit SHA completo y dice que no es necesaria ninguna revisión del código de esa revisión. ¿Cuál es la mejor corrección?",
      "choices": [
        "La fijación garantiza que la acción no contiene comportamiento malicioso",
        "Una etiqueta mutable siempre es más segura que una SHA",
        "La fijación evita la deriva de la referencia, pero no prueba que el código fijado sea confiable",
        "La fijación SHA restringe automáticamente cada llamada de red saliente"
      ],
      "explanations": [
        "Una revisión inmutable aún puede contener código malicioso o inseguro.",
        "Las etiquetas mutables proporcionan una estabilidad de revisión de fuente más débil.",
        "La integridad de la referencia y la confianza en la implementación a la que se hace referencia son distintas.",
        "La fijación no implementa restricciones de salida de la red."
      ],
      "concept": "Integridad versus confianza en las acciones",
      "hints": [
        "¿Qué garantiza exactamente una referencia inmutable?",
        "¿Es posible que la revisión elegida ya contenga un comportamiento no deseado?"
      ]
    },
    "admin-192": {
      "prompt": "Solo el trabajo de publicación necesita packages: write; los trabajos de prueba solo necesitan contents: read. ¿Cómo se deben configurar los permisos del token?",
      "choices": [
        "Otorgar packages: write a nivel de flujo de trabajo para todos los trabajos por comodidad",
        "Utilice un PAT de propietario empresarial compartido para todos los trabajos",
        "Elimine todos los permisos y espere que la publicación funcione",
        "Otorgar permisos predeterminados mínimos al flujo de trabajo y packages: write solo al trabajo de publicación"
      ],
      "explanations": [
        "La autoridad de escritura en todo el flujo de trabajo llega innecesariamente a los trabajos de prueba.",
        "Un propietario compartido PAT es más amplio que la necesidad específica del trabajo.",
        "La publicación requiere los permisos de paquete compatibles adecuados.",
        "Los permisos específicos de cada trabajo limitan la capacidad elevada a la operación que la necesita."
      ],
      "concept": "Elevación de permiso de token específico del trabajo",
      "hints": [
        "¿Qué trabajo realiza realmente la escritura?",
        "¿Cómo se le puede negar la autoridad de publicación a un trabajo de prueba comprometido?"
      ]
    },
    "admin-193": {
      "prompt": "Una rama recibe pushes frecuentes y las ejecuciones obsoletas de CI consumen capacidad de runners después de que llegan commits más recientes. ¿Qué control de flujo de trabajo puede cancelar las ejecuciones obsoletas del mismo grupo previsto?",
      "choices": [
        "Un grupo de concurrencia con cancel-in-progress configurado adecuadamente",
        "Un período de retención de artefactos más largo",
        "Más propietarios de organizaciones",
        "Un secreto con el mismo nombre que la rama"
      ],
      "explanations": [
        "La agrupación simultánea puede cancelar ejecuciones en curso reemplazadas dentro del grupo configurado.",
        "La retención de artefactos afecta el almacenamiento, no la cancelación de ejecuciones obsoletas activas.",
        "La propiedad no gestiona la simultaneidad del flujo de trabajo.",
        "La denominación secreta no controla la programación del flujo de trabajo."
      ],
      "concept": "Cancelar ejecuciones de flujo de trabajo reemplazadas",
      "hints": [
        "¿Qué ejecuciones representan trabajos reemplazados por un evento más nuevo?",
        "¿Cómo puede el flujo de trabajo identificar las ejecuciones que deberían compartir un límite de programación?"
      ]
    },
    "admin-194": {
      "prompt": "En ocasiones, una prueba de integración se bloquea indefinidamente en un self-hosted runner y bloquea el trabajo posterior. ¿Qué configuración del flujo de trabajo limita más directamente el tiempo de ejecución permitido del trabajo?",
      "choices": [
        "retention-days en un artefacto cargado",
        "timeout-minutes en el trabajo",
        "Los permisos básicos del repositorio.",
        "El número de cesionarios issue"
      ],
      "explanations": [
        "La retención de artefactos limita la vida útil de los artefactos almacenados, no el tiempo de ejecución del trabajo.",
        "El tiempo de espera de un trabajo detiene la ejecución después del límite de tiempo de ejecución configurado.",
        "Los permisos del repositorio base no establecen la duración de la ejecución.",
        "La asignación de problemas no controla los tiempos de espera de runner."
      ],
      "concept": "Ejecución de flujo de trabajo delimitante",
      "hints": [
        "¿El problema está esperando para comenzar o continúa demasiado tiempo después de comenzar?",
        "¿Qué configuración mide la duración de ejecución del trabajo?"
      ]
    },
    "admin-195": {
      "prompt": "Un equipo quiere almacenar en caché un directorio de compilación que también contiene un token de implementación. ¿Qué debe exigir el administrador?",
      "choices": [
        "Almacene en caché el directorio sin cambios porque las claves de caché son contraseñas",
        "Utilice el valor del token en sí como clave de caché",
        "Excluir credenciales y archivos confidenciales de las rutas almacenadas en caché",
        "Agrandar el caché para mejorar el aislamiento secreto"
      ],
      "explanations": [
        "Las claves de caché no crean un límite seguro de almacenamiento de credenciales.",
        "Poner un token en una clave expone datos confidenciales en metadatos.",
        "Las cachés de flujo de trabajo no deben almacenar secretos ni otro material confidencial.",
        "El tamaño de la caché no determina la confidencialidad ni el aislamiento del acceso."
      ],
      "concept": "Almacenamiento en caché de flujo de trabajo seguro para credenciales",
      "hints": [
        "¿Quién podría restaurar la caché de un flujo de trabajo?",
        "¿Es la optimización del rendimiento un almacén secreto adecuado?"
      ]
    },
    "admin-196": {
      "prompt": "Una empresa debe determinar quién cambió la política de una organización y cuándo. ¿Qué fuente de evidencia es el mejor punto de partida?",
      "choices": [
        "Solo la lista de propietarios de la organización actual",
        "El valor actual de la política por sí solo",
        "Solo historial del repositorio Git commit",
        "El registro de auditoría empresarial"
      ],
      "explanations": [
        "Las personas que podrían actuar no establecen quién realmente realizó este cambio.",
        "El estado actual no identifica el actor ni el momento de un cambio pasado.",
        "El historial de Git generalmente no registra la administración de políticas de la organización.",
        "Los eventos de auditoría registran acciones administrativas respaldadas con información de actor y tiempo."
      ],
      "concept": "Atribuir cambios administrativos",
      "hints": [
        "¿La configuración actual explica su historial de cambios?",
        "¿Qué registro está diseñado para conectar una acción con un actor y una marca de tiempo?"
      ]
    },
    "admin-197": {
      "prompt": "Un investigador conoce el actor, el repositorio y la fecha aproximada de una acción administrativa sospechosa. ¿Cómo deberían hacer que la búsqueda de auditoría empresarial sea más útil?",
      "choices": [
        "Combine filtros relevantes de actor, repositorio y fecha de creación, agregando un filtro de acción si se conoce",
        "Busque solo al actor mientras ignora deliberadamente el repositorio y las fechas conocidas.",
        "Busque mensajes commit locales en lugar de eventos administrativos",
        "Revisar solo la lista actual de miembros del equipo"
      ],
      "explanations": [
        "Los filtros de auditoría con alcance limitan la evidencia sin asumir un tipo de acción desconocido.",
        "Ignorar la información disponible sobre el alcance y el tiempo añade ruido innecesario a la investigación.",
        "Los mensajes de confirmación no sustituyen a los registros de auditoría administrativa.",
        "El estado actual del equipo no identifica la acción histórica solicitada."
      ],
      "concept": "Búsquedas enfocadas en registros de auditoría",
      "hints": [
        "¿Qué hechos conocidos pueden reducir resultados no relacionados?",
        "¿Cómo mejora una búsqueda con límite de tiempo la investigación de incidentes?"
      ]
    },
    "admin-198": {
      "prompt": "Un investigador GitHub Enterprise Cloud necesita eventos de Git de hace dos semanas, pero no se configuró ningún archivo externo. ¿Qué advertencia de retención es importante?",
      "choices": [
        "Los eventos de Git tienen la misma retención de varios años que un archivo externo",
        "Los eventos Git de registro de auditoría empresarial nativo tienen una ventana de retención más corta de siete días",
        "Los eventos de Git se almacenan indefinidamente en los comentarios del repositorio issue.",
        "Cambiar el tamaño de página de la vista de auditoría restaura los eventos caducados"
      ],
      "explanations": [
        "La retención de eventos Git nativos no equivale a un archivo a largo plazo configurado de forma independiente.",
        "Los eventos de Git se conservan durante siete días en el registro de auditoría empresarial.",
        "Los comentarios de problemas no preservan automáticamente estos eventos de auditoría.",
        "La configuración de visualización no puede restaurar eventos más allá de la ventana de retención."
      ],
      "concept": "Límites de retención de eventos de Git",
      "hints": [
        "¿Los eventos de Git se conservan durante la misma duración que otros eventos de auditoría?",
        "¿Estaba un sistema externo preservando esta evidencia antes de que expirara?"
      ]
    },
    "admin-199": {
      "prompt": "Una empresa transmite registros de auditoría a un sistema de cumplimiento. Un nuevo panel no muestra eventos durante una hora, aunque los usuarios estén activos. ¿Qué deberían investigar los administradores?",
      "choices": [
        "Supongamos que la empresa no tenía actividad sin verificar",
        "Eliminar el destino para restablecer el historial de cumplimiento",
        "La configuración de transmisión, el estado de la ingestión del destino y la evidencia de entrega reciente",
        "Solo los nombres de las ramas locales de Git"
      ],
      "explanations": [
        "Un destino vacío puede reflejar un error de ingesta, no necesariamente ausencia de actividad en el origen.",
        "La eliminación destruye la evidencia y no diagnostica el oleoducto.",
        "Tanto la entrega en origen como la ingesta en destino deben funcionar para obtener evidencia continua.",
        "Los nombres de las ramas locales no permiten determinar el estado de la canalización de transmisión.",
      ],
      "concept": "Supervisión de la integridad del flujo de auditoría",
      "hints": [
        "¿Podrían los datos faltantes reflejar el proceso de generación de informes en lugar del comportamiento del usuario?",
        "¿Qué etapas conectan los eventos de origen con el panel?"
      ]
    },
    "admin-200": {
      "prompt": "Un informe de licencia identifica a los usuarios con poca actividad reciente. ¿Cuál es el paso de optimización más responsable antes de eliminar el acceso?",
      "choices": [
        "Elimine inmediatamente a todos los usuarios de baja actividad, incluidos los propietarios de servicios.",
        "Supongamos que todos los usuarios que parecen inactivos han abandonado la empresa.",
        "Utilice solo el número de inserciones de código recientes para decidir quién conserva una licencia",
        "Validar las necesidades comerciales, el estado de identidad, las dependencias de automatización y el proceso de baja"
      ],
      "explanations": [
        "La eliminación no revisada puede interrumpir el trabajo legítimo y la automatización.",
        "La actividad reciente por sí sola no prueba la necesidad de empleo o acceso.",
        "Una métrica de solo inserción no detecta a revisores, auditores y otros usuarios legítimos de baja frecuencia.",
        "La revisión contextual distingue las licencias recuperables del acceso necesario pero poco frecuente."
      ],
      "concept": "Decisiones seguras de recuperación de licencias",
      "hints": [
        "¿Qué roles legítimos pueden producir poca actividad diaria?",
        "¿Qué dependencias podrían romperse si esta identidad pierde el acceso?"
      ]
    },
    "admin-201": {
      "prompt": "El gasto total en GitHub de una empresa aumentó mientras que su número de usuarios se mantuvo estable. ¿Qué desglose es más útil antes de recomendar una reducción de licencias?",
      "choices": [
        "Uso medido por producto, SKU, período de tiempo y alcance responsable",
        "Solo el número total de propietarios de organizaciones.",
        "Solo el número total actual de usuarios con licencia",
        "Solo el número de ejecuciones exitosas del flujo de trabajo, ignorando su duración y el tipo runner"
      ],
      "explanations": [
        "El consumo por producto puede explicar cambios de costos no relacionados con la cantidad de licencias.",
        "Los recuentos del propietario por sí solos no explican los cargos por productos medidos.",
        "Una cantidad de licencias sin cambios no explica el crecimiento en otras categorías de consumo.",
        "Los recuentos de ejecución omiten dimensiones importantes de costos de computación y almacenamiento."
      ],
      "concept": "Separar los costos de licencias del crecimiento del consumo medido",
      "hints": [
        "¿Podría el cambio de costos provenir del consumo de carga de trabajo y no de personas?",
        "¿Qué dimensiones del informe identifican la fuente de carga real?"
      ]
    },
    "admin-202": {
      "prompt": "Un administrador crea un presupuesto y asume que siempre detiene todo el uso del producto GitHub en el umbral. ¿Qué afirmación es exacta?",
      "choices": [
        "Cada presupuesto bloquea universalmente todos los productos exactamente en el mismo umbral.",
        "Las alertas y el comportamiento de interrupción del uso dependen de la configuración del producto y del presupuesto.",
        "Los presupuestos eliminan automáticamente los repositorios para reducir costos",
        "Un presupuesto sustituye a la autorización del repositorio"
      ],
      "explanations": [
        "GitHub documenta las diferencias específicas del producto en lugar de un tope universal.",
        "Los administradores deben verificar el control admitido y su comportamiento configurado.",
        "Los presupuestos no funcionan eliminando repositorios indiscriminadamente.",
        "Los controles de gasto no reemplazan los permisos de acceso."
      ],
      "concept": "Alertas de presupuesto versus aplicación de uso",
      "hints": [
        "¿Es lo mismo notificación que ejecución?",
        "¿Qué comportamiento específico del producto debe verificarse?"
      ]
    },
    "admin-203": {
      "prompt": "Una empresa necesita atribución departamental para el gasto medido compatible con GitHub. ¿Qué concepto de facturación debería evaluar en lugar de mantener sólo un total empresarial indiferenciado?",
      "choices": [
        "Una regla de nomenclatura de ramas",
        "Un borrador de aviso de seguridad",
        "Centros de costos",
        "Una entrada CODEOWNERS sola"
      ],
      "explanations": [
        "Los nombres de las ramas no establecen una estructura de atribución de facturación.",
        "Los borradores de asesoramiento gestionan las vulnerabilidades en lugar de los costos departamentales.",
        "Los centros de costos organizan la atribución de facturación admitida para los recursos empresariales.",
        "La propiedad del código en sí misma no asigna gastos medidos a los centros de costos de facturación."
      ],
      "concept": "Atribución de costos departamentales",
      "hints": [
        "¿Qué estructura conecta los recursos consumidos con un propietario financiero?",
        "¿La responsabilidad de revisión de código equivale automáticamente a la atribución de facturación?"
      ]
    },
    "admin-204": {
      "prompt": "Un repositorio público mueve compilaciones del GitHub-hosted runners estándar a un runners más grande. El equipo asume que la visibilidad pública hace que toda la ejecución de runner sea gratuita. ¿Qué debe aclarar el administrador?",
      "choices": [
        "La visibilidad pública garantiza que todos los tipos de runner son gratuitos",
        "Los runners más grandes consumen solo licencias de puestos de repositorio",
        "Las runners más grandes siempre reciben la misma asignación gratuita que las runners estándar.",
        "La asignación gratuita del repositorio público para el runners estándar no hace que el runners más grande sea universalmente gratuito."
      ],
      "explanations": [
        "El tratamiento estándar público runner no se aplica universalmente al runners más grande.",
        "El uso más grande de runner tiene su propia facturación en lugar de simplemente consumir puestos empresariales.",
        "Los runners más grandes tienen un tratamiento de facturación diferente al de las asignaciones estándar incluidas-runner.",
        "El tipo de runner y las reglas de facturación documentadas deben evaluarse por separado."
      ],
      "concept": "Diferencias de facturación entre clases de runners",
      "hints": [
        "¿Se aplica una excepción de facturación a todas las categorías informáticas?",
        "¿Qué categoría runner cambió el equipo?"
      ]
    },
    "admin-205": {
      "prompt": "Un equipo deja de ejecutar flujos de trabajo pero continúa reteniendo artefactos grandes. ¿Por qué el uso del almacenamiento relacionado con Actions podría seguir siendo relevante?",
      "choices": [
        "Los artefactos almacenados persisten hasta su vencimiento o eliminación según la política de retención aplicable.",
        "Al detener los flujos de trabajo se eliminan automáticamente todos los artefactos anteriores inmediatamente.",
        "Los artefactos se vuelven gratuitos simplemente porque su flujo de trabajo está inactivo",
        "Sólo los trabajos en ejecución pueden ocupar espacio de artefacto almacenado"
      ],
      "explanations": [
        "La detención de la ejecución no elimina por sí misma los datos de artefactos ya retenidos.",
        "Los artefactos anteriores no se eliminan automáticamente únicamente porque no se producen nuevas ejecuciones de flujo de trabajo.",
        "La inactividad no elimina universalmente las implicaciones en la facturación del almacenamiento.",
        "Los artefactos almacenados ocupan espacio independientemente de la ejecución del trabajo actual."
      ],
      "concept": "Consumo persistente de almacenamiento de artefactos",
      "hints": [
        "¿La vida útil de la computación es la misma que la vida útil de los datos almacenados?",
        "¿Qué evento realmente pone fin a la retención de los artefactos?"
      ]
    },
    "admin-206": {
      "prompt": "Una organización quiere reducir los costos de almacenamiento de artefactos, pero la evidencia de publicación debe conservarse durante un período de cumplimiento establecido. ¿Qué optimización es apropiada?",
      "choices": [
        "Eliminar todos los artefactos independientemente de su propósito",
        "Aplicar retención para fines específicos y eliminar artefactos innecesarios sin violar las obligaciones de evidencia.",
        "Incrementa la retención de cada artefacto al máximo.",
        "Almacene las credenciales de producción dentro de los artefactos para combinar categorías de almacenamiento."
      ],
      "explanations": [
        "La eliminación general puede violar los requisitos de divulgación de evidencia.",
        "Diferentes clases de artefactos pueden tener diferentes políticas justificadas de retención y limpieza.",
        "La retención máxima aumenta el almacenamiento cuando serían suficientes períodos más cortos.",
        "Las credenciales no pertenecen a los artefactos y no resuelven los costos de retención."
      ],
      "concept": "Retención de artefactos basada en evidencia",
      "hints": [
        "¿Qué resultados almacenados son evidencia de cumplimiento versus productos de construcción desechables?",
        "¿Cómo puede la retención reflejar esos diferentes propósitos?"
      ]
    },
    "admin-207": {
      "prompt": "Las compilaciones descargan repetidamente dependencias idénticas y las tasas de aciertos de caché son bajas porque cada ejecución utiliza una clave completamente única sin una estrategia de restauración útil. ¿Qué deberían recomendar los administradores?",
      "choices": [
        "Deshabilitar toda la verificación de paquetes",
        "Otorgar al flujo de trabajo más permisos de administración del repositorio",
        "Revise las claves de caché y restaure la estrategia frente a las entradas de dependencia, luego mida el efecto",
        "Almacene todos los secretos de implementación en el caché"
      ],
      "explanations": [
        "Eliminar la verificación debilita la seguridad de la cadena de suministro en lugar de mejorar el diseño de la caché.",
        "La administración del repositorio no mejora la reutilización de la clave de caché.",
        "Las claves que tienen en cuenta la dependencia pueden mejorar la reutilización y al mismo tiempo preservar la invalidación válida.",
        "Los cachés no deben utilizarse como almacenes secretos."
      ],
      "concept": "Medición de la reutilización útil de la caché de dependencias",
      "hints": [
        "¿Qué cambios deberían invalidar el caché de dependencia?",
        "¿Pueden las entradas de dependencia idénticas repetidas producir una clave reutilizable?"
      ]
    },
    "admin-208": {
      "prompt": "Los informes de uso muestran que muchas ejecuciones de CI completadas que prueban commits ya fueron reemplazadas por versiones más recientes en la misma rama. ¿Qué optimización se dirige mejor a ese desperdicio?",
      "choices": [
        "Eliminar todas las pruebas requeridas",
        "Aumentar la ventana de retención de artefactos",
        "Hacer público el repositorio para evitar revisar el flujo de trabajo.",
        "Utilice una cancelación de simultaneidad cuidadosamente delimitada para ejecuciones obsoletas"
      ],
      "explanations": [
        "La eliminación de las pruebas sacrifica la validación en lugar de eliminar el trabajo redundante.",
        "La retención de artefactos no impide la ejecución redundante.",
        "Los cambios de visibilidad no son un sustituto adecuado de la optimización del flujo de trabajo.",
        "La cancelación de ejecuciones reemplazadas puede recuperar capacidad sin descartar la validación actual."
      ],
      "concept": "Reducción del consumo redundante de CI",
      "hints": [
        "¿Qué ejecuciones ya no proporcionan comentarios útiles?",
        "¿Puede continuar la última validación requerida mientras se cancela el trabajo obsoleto?"
      ]
    },
    "admin-209": {
      "prompt": "Un trabajo de lint independiente de la plataforma se ejecuta en un sistema operativo runner más caro de lo necesario. ¿Cómo debería un administrador evaluar un cambio de costo?",
      "choices": [
        "Valídelo en un runner apropiado de menor costo y compare el tiempo de ejecución real y el uso facturado.",
        "Supongamos que todos los sistemas operativos tienen tarifas idénticas para siempre",
        "Eliminar la verificación de lint sin evaluar alternativas",
        "Elija solo la tarifa por minuto más baja anunciada sin verificar la compatibilidad o la duración"
      ],
      "explanations": [
        "La compatibilidad, la duración y el precio actual determinan juntos el resultado del costo útil.",
        "Las tarifas alojadas de runner y el tratamiento de facturación pueden variar según la plataforma.",
        "No es necesario eliminar la validación de calidad requerida para evaluar la eficiencia informática.",
        "Una tarifa unitaria más baja no garantiza un menor costo total ni un entorno de ejecución correcto."
      ],
      "concept": "Optimización de costos CI basada en el sistema operativo",
      "hints": [
        "¿Esta carga de trabajo realmente requiere el sistema operativo actual?",
        "¿Por qué deberían compararse tanto el tiempo de ejecución como el precio actual?"
      ]
    },
    "admin-210": {
      "prompt": "Un equipo propone trasladar cada flujo de trabajo al runner más grande porque cada trabajo podría terminar más rápido. ¿Qué medida prueba mejor si se trata de una optimización de costos?",
      "choices": [
        "Solo la cantidad de CPU anunciadas",
        "Tiempo de finalización de un extremo a otro y consumo total facturado para cargas de trabajo representativas",
        "Sólo el recuento de líneas del archivo de flujo de trabajo",
        "Sólo el número de contribuyentes al repositorio."
      ],
      "explanations": [
        "Más CPU no garantizan una velocidad proporcional o un menor costo.",
        "Las mediciones representativas de tiempo y consumo revelan compensaciones reales entre el rendimiento y los costos.",
        "El recuento de líneas YAML no mide la utilización de la computación.",
        "El recuento de contribuyentes no establece la eficiencia de un tamaño runner."
      ],
      "concept": "Medido runner tamaño correcto",
      "hints": [
        "¿Duplicar la computación puede costar menos si el tiempo de ejecución disminuye lo suficiente?",
        "¿Qué cargas de trabajo pueden no beneficiarse del hardware paralelo adicional?"
      ]
    },
    "admin-211": {
      "prompt": "Una organización considera runners autohospedados porque GitHub no cobra por ejecutar Actions en ellos. ¿Qué factor de costo aún debe considerarse en la decisión?",
      "choices": [
        "Solo el precio por minuto GitHub-hosted, suponiendo que se facture de forma idéntica para la ejecución de self-hosted",
        "Ningún otro costo; La ejecución gratuita significa cero gastos operativos totales.",
        "Infraestructura, parches, aislamiento de seguridad, escalamiento y soporte operativo",
        "Sólo el precio de compra de la máquina virtual, ignorando la administración en curso."
      ],
      "explanations": [
        "La ejecución autohospedada no utiliza el mismo modelo de facturación de ejecución GitHub-hosted.",
        "La facturación de ejecución de GitHub no es el costo total de operar una flota runner.",
        "La computación operada por el cliente tiene costos de infraestructura y administración incluso sin un cargo por ejecución de acciones.",
        "El costo de compra por sí solo omite los gastos operativos y de seguridad continuos."
      ],
      "concept": "Costo total de self-hosted runners",
      "hints": [
        "¿Quién paga y mantiene las máquinas?",
        "¿Qué trabajo desaparece de la factura del servicio alojado pero permanece en la organización?"
      ]
    },
    "admin-212": {
      "prompt": "Un departamento ha asignado muchos puestos de copiloto, pero ha medido una participación baja. ¿Cuál es la siguiente acción más útil?",
      "choices": [
        "Supongamos que la asignación demuestra una adopción exitosa",
        "Retirar de inmediato todas las licencias sin consultar a los equipos",
        "Utilice el recuento de Git commit solo para clasificar a los desarrolladores individuales",
        "Compare la evidencia de derechos y uso, luego investigue la incorporación y la necesidad comercial genuina."
      ],
      "explanations": [
        "La asignación mide la provisión de acceso, no necesariamente el uso activo.",
        "La eliminación no revisada puede descartar accesos valiosos o interrumpir los esfuerzos de adopción.",
        "El recuento de compromisos por sí solo no es una medida sólida de productividad individual o valor de Copilot.",
        "El contexto de uso y derechos puede identificar tanto las brechas de habilitación como los puestos reclamables."
      ],
      "concept": "Derecho versus adopción",
      "hints": [
        "¿Tener acceso significa que la función se está utilizando de forma eficaz?",
        "¿Qué barreras no técnicas podrían explicar la baja participación?"
      ]
    },
    "admin-213": {
      "prompt": "Después de una nueva política de flujo de trabajo, el tiempo promedio de entrega mejora. El propietario de un panel afirma que la política por sí sola provocó la mejora. ¿Qué interpretación es más defendible?",
      "choices": [
        "El momento sugiere una hipótesis; comparar la combinación de carga de trabajo y otros cambios antes de alegar causalidad",
        "Cualquier par de métricas que se muevan juntas establecen la causalidad",
        "La entrega más rápida demuestra que todos los controles de seguridad son innecesarios",
        "Un panel no puede informar ninguna decisión operativa"
      ],
      "explanations": [
        "La comparación contextual ayuda a separar los efectos de las políticas de otras condiciones cambiantes.",
        "La correlación y el momento por sí solos no prueban la causalidad.",
        "La velocidad de entrega no determina si se necesita una gobernanza de la seguridad.",
        "Las métricas pueden informar las decisiones cuando se reconocen sus limitaciones."
      ],
      "concept": "Interpretación de las tendencias de adopción y rendimiento",
      "hints": [
        "¿Qué más cambió durante el período de medición?",
        "¿Fueron similares las cargas de trabajo y las poblaciones comparadas?"
      ]
    },
    "admin-214": {
      "prompt": "Una empresa informa menos usuarios activos este mes, pero también fusionó varias organizaciones y cambió la población informante. ¿Qué debe hacer un administrador antes de declarar que la adopción ha declinado?",
      "choices": [
        "Ignorar el cambio de población",
        "Normalice la ventana de tiempo, la población y las definiciones de métricas antes de comparar períodos.",
        "Utilice sólo el número diario más grande de cada período",
        "Eliminar el informe anterior porque es inconveniente."
      ],
      "explanations": [
        "Una población cambiada puede producir comparaciones crudas y engañosas.",
        "Definiciones y poblaciones comparables son requisitos previos para interpretar una tendencia.",
        "Seleccionar picos introduce un sesgo de selección y no normaliza la cobertura.",
        "Descartar el historial impide un análisis transparente."
      ],
      "concept": "Líneas base de informes de uso comparables",
      "hints": [
        "¿Ambos informes miden a las mismas personas y la misma duración del período?",
        "¿Podría un cambio de denominador explicar la aparente tendencia?"
      ]
    },
    "admin-215": {
      "prompt": "Un gerente quiere clasificar la productividad de los desarrolladores utilizando únicamente recuentos de eventos de auditoría empresarial. ¿Cuál es la mejor orientación administrativa?",
      "choices": [
        "Los eventos de auditoría son una medida completa de la calidad del software",
        "El mayor número de eventos siempre identifica al ingeniero más productivo",
        "Los registros de auditoría respaldan la atribución y el cumplimiento de la actividad, no una medida de productividad individual completa",
        "Eliminar usuarios con un recuento bajo automáticamente"
      ],
      "explanations": [
        "Los recuentos de eventos administrativos no miden todas las dimensiones de la calidad del software.",
        "El volumen de eventos varía según la tarea y no establece un valor individual.",
        "El propósito y la cobertura del registro de auditoría limitan cómo se debe interpretar el conteo de su actividad.",
        "La eliminación del acceso requiere una revisión de la autorización en lugar de una clasificación de actividad simplista."
      ],
      "concept": "Límites de las métricas de productividad derivadas de auditorías",
      "hints": [
        "¿Qué tipos de trabajo no producen ningún hecho administrativo relevante?",
        "¿Esta fuente de datos fue diseñada para medir la calidad de la producción individual?"
      ]
    },
    "admin-216": {
      "prompt": "La limitación de API aumenta después de implementar una nueva integración de cumplimiento. ¿Qué evidencia deberían recopilar los administradores para encontrar una optimización útil?",
      "choices": [
        "Sólo la lista de permisos aprobados de la integración",
        "Sólo la fecha de vencimiento de su token.",
        "Sólo el número total de miembros de la organización.",
        "Frecuencia de solicitud, combinación de puntos finales, simultaneidad, encabezados de respuesta y comportamiento de reintento"
      ],
      "explanations": [
        "Los permisos describen la autoridad, pero no la frecuencia real de las solicitudes ni el comportamiento de reintento.",
        "Los metadatos de caducidad no explican las ráfagas ni los sondeos redundantes.",
        "El recuento de miembros por sí solo no revela el patrón de llamadas de la integración.",
        "La evidencia del patrón de solicitud identifica sondeos redundantes, ráfagas y manejo de reintentos incorrectos."
      ],
      "concept": "Diagnóstico de patrones de consumo API",
      "hints": [
        "¿Qué características pueden desencadenar límites primarios o secundarios?",
        "¿Qué cambió la nueva integración sobre el patrón de solicitud?"
      ]
    },
    "admin-217": {
      "prompt": "Dos informes de uso medido no están de acuerdo porque uno cubre un mes calendario y el otro un intervalo consecutivo de treinta días. ¿Qué debería pasar antes de investigar un defecto de facturación?",
      "choices": [
        "Alinear los rangos de fechas, alcances, unidades y definiciones de informes",
        "Supongamos que el informe más amplio debe ser fraudulento.",
        "Sume los informes como si estuvieran separados",
        "Eliminar permisos de repositorio de todos los usuarios"
      ],
      "explanations": [
        "Es necesario comparar alcances y períodos antes de conciliar los totales del informe.",
        "Una discrepancia en el período de presentación de informes no es evidencia de fraude.",
        "Los períodos superpuestos no se pueden sumar como consumo independiente.",
        "La eliminación de la autorización no concilia las definiciones de los informes."
      ],
      "concept": "Conciliación de informes de uso medido",
      "hints": [
        "¿Los informes realmente describen el mismo intervalo y recursos?",
        "¿Qué definiciones deben coincidir antes de que los totales coincidan?"
      ]
    },
    "admin-218": {
      "prompt": "Varios propietarios de organizaciones informan de forma independiente que el mismo empleado es un consumidor de licencia. Un informe central suma esas filas y parece exceder el recuento de usuarios únicos de la empresa. ¿Qué se debe comprobar?",
      "choices": [
        "Si el empleado tiene varios clones locales",
        "Si el informe deduplica identidades según el alcance de la licencia empresarial",
        "Si cada repositorio usa el mismo nombre de rama predeterminado",
        "Si todas las organizaciones utilizan plantillas issue idénticas"
      ],
      "explanations": [
        "Los clones locales no crean identidades de usuarios empresariales adicionales.",
        "Las membresías repetidas deben conciliarse con el modelo de licencia de usuario único documentado.",
        "La nomenclatura de ramas no elimina los duplicados entre quienes consumen licencias.",
        "Las plantillas de problemas no afectan la coincidencia de identidades del recuento de puestos."
      ],
      "concept": "Deduplicación de informes de consumo de licencias",
      "hints": [
        "¿Puede aparecer la misma identidad en varios informes fuente?",
        "¿Cuál es la unidad a la que se le otorga licencia en lugar del número de filas del informe?"
      ]
    },
    "admin-219": {
      "prompt": "El soporte necesita evidencia de un incidente de rendimiento del GHES, incluido el contexto del dispositivo y los registros relevantes. ¿Qué plan de recopilación respalda mejor el análisis respetando la confidencialidad?",
      "choices": [
        "Publique el paquete públicamente para que cualquiera pueda ayudar a interpretarlo.",
        "Envíe solo una captura de pantalla actual del consumo de licencia",
        "Recopile el paquete de soporte documentado que cubre el incidente y proporcione detalles específicos a través del canal de soporte.",
        "Elimine los registros antes de escalar para minimizar el archivo"
      ],
      "explanations": [
        "El intercambio público puede exponer información operativa interna a pesar del saneamiento de credenciales.",
        "La evidencia del consumo de licencias no proporciona los registros ni el contexto del appliance solicitados.",
        "Un paquete de soporte con el alcance correcto y los detalles del incidente proporcionan evidencia procesable con un manejo controlado.",
        "La eliminación de pruebas perjudica el análisis del incidente."
      ],
      "concept": "Evidencia diagnóstica para la escalada del desempeño",
      "hints": [
        "¿Qué puede correlacionar el soporte con el período del incidente reportado?",
        "¿Qué ruta de recopilación preserva el contexto útil sin una divulgación amplia?"
      ]
    },
    "admin-220": {
      "prompt": "Un problema de Cloud API persiste después de que el administrador verifica los permisos y las respuestas de límite de velocidad. ¿Qué debe incluir una transferencia de soporte útil?",
      "choices": [
        "Sólo una afirmación de que todos los productos GitHub no están disponibles",
        "Una contraseña de propietario compartida para que Soporte pueda hacerse pasar por cualquier empleado",
        "Una instrucción para eliminar todas las políticas empresariales sin investigación",
        "Solicitudes fallidas representativas, respuestas desinfectadas, marcas de tiempo, identificadores de solicitudes y alcance afectado"
      ],
      "explanations": [
        "Una afirmación amplia y sin fundamento oscurece el impacto real.",
        "Las contraseñas no se deben compartir para una transferencia de soporte.",
        "Eliminar todas las políticas no es una escalada basada en evidencia.",
        "La evidencia de solicitud desinfectada específica ayuda al soporte a localizar y diagnosticar la falla."
      ],
      "concept": "Transferencia de soporte en la nube basada en evidencia",
      "hints": [
        "¿Qué distingue la solicitud fallida de las exitosas?",
        "¿Qué información permite al operador del servicio correlacionar sus propios registros?"
      ]
    },
    "admin-221": {
      "prompt": "Los tiempos de clonación y respuesta web de GHES empeoran durante una actividad intensa. Antes de comprar más hardware, ¿qué investigación respalda mejor una decisión sobre capacidad?",
      "choices": [
        "Correlacione el tiempo de la carga de trabajo con los recursos de instancia relevantes y las métricas de estado del servicio.",
        "Aumentar la asignación de CPU sin medir la utilización de CPU",
        "Agregue memoria sin inspeccionar la presión de la memoria u otros cuellos de botella",
        "Migre el almacenamiento antes de comprobar la latencia y el rendimiento del disco"
      ],
      "explanations": [
        "La evidencia correlacionada de utilización y servicio ayuda a identificar el cuello de botella real.",
        "Es posible que más CPU no ayude a una instancia limitada por la memoria o el almacenamiento.",
        "La expansión de memoria no medida puede dejar sin cambios el recurso limitante real.",
        "La migración del almacenamiento debe seguir la evidencia de un cuello de botella en el almacenamiento."
      ],
      "concept": "Planificación de capacidad GHES basada en evidencia",
      "hints": [
        "¿Qué recurso compartido puede estar saturado durante el período lento?",
        "¿Qué demostraría que más hardware aborda el factor limitante?"
      ]
    },
    "admin-222": {
      "prompt": "Un equipo de plataforma pone a prueba un runner más grande para un tipo de construcción. ¿Qué resultado justificaría mejor una adopción más amplia?",
      "choices": [
        "El runner tiene un nombre más impresionante",
        "Las mediciones representativas muestran una confiabilidad aceptable y una mejora valiosa en relación con el costo.",
        "Una carrera inusualmente rápida es la única evidencia",
        "Se supone que todos los demás tipos de construcción escalan de manera idéntica"
      ],
      "explanations": [
        "Los nombres no miden el beneficio operativo.",
        "La confiabilidad, duración y evidencia representativa de costos respaldan una implementación mesurada.",
        "Un valor atípico no es una base de referencia confiable para tomar decisiones sobre capacidad.",
        "Diferentes cargas de trabajo pueden tener diferentes cuellos de botella y comportamientos de escalamiento."
      ],
      "concept": "Validación de pilotos de optimización del rendimiento",
      "hints": [
        "¿Cómo puede el piloto distinguir un beneficio repetible de un único valor atípico?",
        "¿Qué compensación importa además del tiempo de ejecución más corto observado?"
      ]
    },
    "admin-223": {
      "prompt": "Una integración API excede los límites porque sondea repetidamente datos sin cambios. Un desarrollador propone pedir prestados los PAT de varios compañeros de trabajo. ¿Qué deberían recomendar los administradores en su lugar?",
      "choices": [
        "Compartir todas las credenciales de propietario disponibles",
        "Elimine todos los registros de auditoría para reducir los registros API",
        "Mejore el sondeo, el almacenamiento en caché, el uso de eventos y la pausa bajo una identidad de integración con el alcance correcto",
        "Deshabilite SAML para toda la empresa"
      ],
      "explanations": [
        "Las credenciales compartidas aumentan el riesgo y oscurecen la atribución.",
        "La eliminación de la auditoría no aborda el tráfico redundante de API.",
        "El diseño eficiente de solicitudes aborda la causa raíz sin soluciones alternativas para compartir credenciales.",
        "La eliminación de SSO no hace que el comportamiento ineficiente de API sea apropiado."
      ],
      "concept": "Optimización responsable de la capacidad API",
      "hints": [
        "¿Agregar identidades prestadas reduce el trabajo innecesario?",
        "¿Qué cambios mejoran la eficiencia y al mismo tiempo preservan la rendición de cuentas?"
      ]
    },
    "admin-224": {
      "prompt": "Un propietario financiero quiere utilizar un presupuesto de producto medido GitHub para controlar un contrato de licencia por volumen prepago existente. ¿Qué limitación debe explicar el administrador?",
      "choices": [
        "Las alertas de presupuesto reescriben cada contrato prepago automáticamente",
        "Un presupuesto suspende permanentemente a todos los usuarios con licencia en su umbral",
        "La configuración del presupuesto determina la visibilidad del repositorio",
        "Los presupuestos medidos y las alertas no están disponibles para las licencias por volumen prepagas"
      ],
      "explanations": [
        "La configuración del presupuesto no modifica un contrato prepago.",
        "La suspensión universal de usuarios no es un comportamiento documentado de todos los presupuestos.",
        "Los controles de gastos no establecen la visibilidad del repositorio.",
        "GitHub distingue los presupuestos medidos de la gestión de licencias por volumen prepagas."
      ],
      "concept": "Aplicabilidad del presupuesto a los modelos de licencia",
      "hints": [
        "¿El gasto está medido o ya está comprometido por contrato?",
        "¿La función de presupuesto se aplica a ese modelo de compra?"
      ]
    },
    "admin-225": {
      "prompt": "Una revisión de costos encuentra que un repositorio es responsable de una gran parte del uso medido. ¿Qué siguiente paso equilibra la optimización con la continuidad del negocio?",
      "choices": [
        "Revise los impulsores a nivel de producto con el equipo propietario, luego pruebe los cambios específicos y mida el resultado.",
        "Elimine el repositorio inmediatamente porque el alto gasto resulta en desperdicio",
        "Eliminar a todos los usuarios de su organización",
        "Deshabilite todos los controles de seguridad antes de examinar el informe."
      ],
      "explanations": [
        "El análisis conjunto puede distinguir la carga de trabajo valiosa de los costos evitables y validar mejoras seguras.",
        "Un gasto elevado por sí solo no justifica la eliminación destructiva de un repositorio crítico para el negocio.",
        "La eliminación del acceso amplio no diagnostica el factor de consumo.",
        "Eliminar los controles de seguridad sin análisis introduce riesgos y puede no abordar los costos."
      ],
      "concept": "Optimización responsable del consumo",
      "hints": [
        "¿Qué carga de trabajo empresarial está produciendo el cargo?",
        "¿Cómo se puede probar el ahorro propuesto sin eliminar la capacidad necesaria?"
      ]
    }
  },
  "pt-BR": {
    "admin-001": {
      "prompt": "Uma empresa deseja que seu provedor de identidade crie contas GitHub e controle todo o seu ciclo de vida. Os funcionários não devem usar essas contas para contribuições públicas. Qual modelo de conta se adapta?",
      "choices": [
        "Enterprise Managed Users",
        "Contas pessoais com SAML SSO da organização",
        "Contas pessoais com verificação de e-mail obrigatória",
        "Colaboradores externos com convites de repositório"
      ],
      "explanations": [
        "O IdP provisiona contas gerenciadas, cuja colaboração é restrita à empresa.",
        "A organização SSO vincula contas pessoais, mas não torna seu ciclo de vida gerenciado pela empresa.",
        "A verificação de e-mail não dá ao IdP controle do provisionamento da conta.",
        "A colaboração externa concede acesso ao repositório, não um ciclo de vida de conta gerenciado pela empresa."
      ],
      "concept": "Escolhendo um modelo de identidade empresarial",
      "hints": [
        "Quem deve controlar o ciclo de vida da conta, em vez de apenas controlar o acesso?",
        "Qual limite de colaboração a empresa exige?"
      ]
    },
    "admin-002": {
      "prompt": "Os engenheiros precisam contribuir para projetos públicos de código aberto usando as mesmas identidades GitHub que usam para trabalhar. A empresa deseja proteção SAML para seus recursos empresariais. Qual design atende melhor a ambos os requisitos?",
      "choices": [
        "Contas de usuário gerenciadas com repositórios públicos ativados",
        "Contas pessoais com SAML SSO empresarial",
        "Uma conta gerenciada compartilhada por equipe de engenharia",
        "Acesso anônimo a repositórios de trabalho privados"
      ],
      "explanations": [
        "As contas de usuários gerenciados não podem criar conteúdo público ou colaborar fora da empresa.",
        "As contas pessoais podem oferecer suporte à colaboração externa, enquanto o SAML protege os recursos da empresa.",
        "As contas compartilhadas prejudicam a identidade individual e não removem as restrições de usuários gerenciados.",
        "O acesso anônimo ao repositório privado não fornece colaboração empresarial autenticada."
      ],
      "concept": "Contas pessoais versus usuários gerenciados",
      "hints": [
        "O controle da própria identidade é necessário aqui?",
        "Como o modelo de conta afeta as contribuições fora do trabalho?"
      ]
    },
    "admin-003": {
      "prompt": "Depois que SAML SSO for habilitado para uma organização que usa contas pessoais, um membro poderá entrar em GitHub, mas será redirecionado para IdP antes de abrir o repositório privado de uma organização. O que explica isso?",
      "choices": [
        "A senha GitHub do membro deve corresponder à senha IdP",
        "SAML converte automaticamente o membro em um usuário gerenciado",
        "A autenticação da conta GitHub e o acesso SAML aos recursos da organização são separados",
        "O membro deve criar outra conta pessoal para cada organização protegida por SAML"
      ],
      "explanations": [
        "SAML não requer senhas GitHub e IdP sincronizadas.",
        "A ativação da organização SAML não converte contas pessoais em usuários gerenciados.",
        "O login na conta pessoal e a sessão SAML da organização são requisitos distintos.",
        "Uma conta pessoal pode ser vinculada à identidade externa sem criar uma conta por organização."
      ],
      "concept": "Camadas de autenticação com SAML",
      "hints": [
        "Qual identidade estabelece a sessão GitHub?",
        "Que limite adicional protege os recursos da organização?"
      ]
    },
    "admin-004": {
      "prompt": "Uma organização já usa SAML SSO com contas pessoais. Agora ele precisa de provisionamento e remoção de associação orientados por IdP com suporte, em vez de convites manuais. Qual integração atende a esse requisito de ciclo de vida?",
      "choices": [
        "CODEOWNERS",
        "Uma verificação de status obrigatória",
        "Chaves de implantação do repositório",
        "Provisionamento SCIM"
      ],
      "explanations": [
        "CODEOWNERS roteia solicitações de revisão em vez de provisionar membros da organização.",
        "As verificações de status regem as mudanças, não o ciclo de vida da identidade.",
        "As chaves de implantação autenticam as operações do Git para um repositório, não o provisionamento de associação.",
        "SCIM automatiza a troca de informações de identidade e suporta operações de ciclo de vida de associação."
      ],
      "concept": "Provisionamento de associação SCIM",
      "hints": [
        "O login processa automaticamente todos os eventos do ciclo de vida da associação?",
        "Qual padrão troca informações de provisionamento entre sistemas de identidade?"
      ]
    },
    "admin-005": {
      "prompt": "Um administrador diz que a sincronização de equipe e SCIM são intercambiáveis porque ambos envolvem um IdP. Qual distinção é mais útil ao projetar o acesso à organização?",
      "choices": [
        "SCIM lida com o ciclo de vida de provisionamento; a sincronização da equipe alinha a associação da equipe com grupos IdP",
        "A sincronização da equipe substitui toda a autenticação GitHub",
        "SCIM define requisitos de aprovação de ramificações",
        "A sincronização da equipe torna automaticamente cada membro um proprietário da organização"
      ],
      "explanations": [
        "Essas integrações resolvem diferentes problemas de ciclo de vida e de associação a grupos.",
        "A sincronização de grupos não é um protocolo de autenticação.",
        "SCIM não configura regras de revisão de repositório.",
        "A sincronização de grupo não concede inerentemente a propriedade da organização."
      ],
      "concept": "SCIM versus sincronização de equipe",
      "hints": [
        "O ciclo de vida da conta e a associação ao grupo de projetos são a mesma tarefa?",
        "O que precisaria ser atualizado quando uma pessoa mudasse de departamento?"
      ]
    },
    "admin-006": {
      "prompt": "Uma equipe está sincronizada com um grupo IdP. Um mantenedor da equipe GitHub precisa adicionar outro membro sincronizado. Onde normalmente deveria ser feita a mudança oficial de associação?",
      "choices": [
        "No arquivo CODEOWNERS do repositório",
        "No grupo IdP conectado",
        "Na lista de exceções de um ruleset de ramificações",
        "Na configuração Git local do membro"
      ],
      "explanations": [
        "CODEOWNERS atribui responsabilidade de revisão sem alterar a associação ao grupo sincronizado.",
        "O grupo IdP conectado é a origem de associação da equipe sincronizada.",
        "Uma lista de bypass altera as exceções de regras em vez da origem de associação da equipe.",
        "A configuração local do Git não pode atualizar uma equipe gerenciada por IdP."
      ],
      "concept": "Fonte de autoridade da associação sincronizada",
      "hints": [
        "Qual sistema fornece a lista de membros?",
        "Uma configuração local de repositório sobreviveria a uma sincronização de identidade?"
      ]
    },
    "admin-007": {
      "prompt": "Antes de impor a autenticação de dois fatores em uma organização que usa contas pessoais, o proprietário deseja reduzir interrupções de acesso evitáveis. Qual preparação é mais apropriada?",
      "choices": [
        "Compartilhe os códigos de recuperação de um proprietário com todos os membros",
        "Desabilitar o log de auditoria durante a aplicação",
        "Revise a preparação, notifique os colaboradores afetados e peça-lhes que configurem 2FA",
        "Substitua todas as permissões do repositório por visibilidade pública"
      ],
      "explanations": [
        "Os códigos de recuperação são credenciais privadas e não devem ser distribuídos aos membros.",
        "Desabilitar a observabilidade não prepara os usuários para os requisitos de autenticação.",
        "A revisão da prontidão e a comunicação antecipada reduzem a interrupção da fiscalização.",
        "A visibilidade pública expõe o conteúdo e não resolve a prontidão para autenticação."
      ],
      "concept": "Implementação segura da organização 2FA",
      "hints": [
        "Quem poderá perder o acesso quando um requisito de autenticação for alterado?",
        "O que os administradores podem estabelecer antes de aplicar a política?"
      ]
    },
    "admin-008": {
      "prompt": "Um usuário é autenticado com êxito por meio de SAML, mas ainda não consegue abrir um repositório privado específico. Outros repositórios da organização funcionam. O que o administrador deve verificar primeiro?",
      "choices": [
        "Se a configuração SAML da organização deve ser recriada",
        "Se a exigência de commits assinado permitiria o acesso do navegador",
        "Se uma regra de revisão obrigatória impede a leitura do repositório",
        "Se o usuário tem permissão efetiva para esse repositório"
      ],
      "explanations": [
        "O acesso SAML bem-sucedido em outros lugares aponta para longe da reconstrução da autenticação em toda a organização.",
        "As assinaturas de commit controlam a verificação commit, não a autorização de leitura de repositório privado.",
        "Os requisitos de revisão regem a fusão de alterações, não a leitura de um repositório privado.",
        "A autenticação por si só não concede acesso a todos os repositórios privados."
      ],
      "concept": "Autenticação versus autorização",
      "hints": [
        "Uma identidade verificada recebe automaticamente acesso a todos os recursos?",
        "Quais atribuições específicas do repositório poderiam explicar a diferença?"
      ]
    },
    "admin-009": {
      "prompt": "Um especialista de suporte deve rotular e fechar issues em um repositório privado, mas não deve enviar código por push. Qual função de repositório integrada é a adequada com menos privilégios?",
      "choices": [
        "Triage",
        "Write",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Triage suporta gerenciamento proativo de issue sem acesso de gravação de código.",
        "Write permite alterações de código além das tarefas de suporte declaradas.",
        "Maintain inclui gerenciamento de repositório mais amplo do que o exigido pela triagem issue.",
        "Admin inclui configurações sensíveis e recursos destrutivos além dessa necessidade."
      ],
      "concept": "Gerenciamento issue com privilégios mínimos",
      "hints": [
        "Quais tarefas dizem respeito à colaboração e não à modificação do código?",
        "Qual é a função mais restrita projetada para essas tarefas?"
      ]
    },
    "admin-010": {
      "prompt": "Um desenvolvedor deve enviar ramificações de recursos e contribuir com alterações para o repositório privado de uma organização. Eles não administram o repositório. Qual função integrada é a escolha mínima adequada?",
      "choices": [
        "Read",
        "Write",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Read não permite enviar ramificações para o repositório.",
        "Write destina-se a colaboradores que enviam código ativamente.",
        "Maintain adiciona recursos de gerenciamento desnecessários para contribuição de código comum.",
        "Admin concede configurações e privilégios destrutivos além desta tarefa."
      ],
      "concept": "Permissões de contribuidor de código",
      "hints": [
        "O usuário está modificando o conteúdo do repositório ou a governança do repositório?",
        "Qual permissão mínima oferece suporte ao envio de código?"
      ]
    },
    "admin-011": {
      "prompt": "Um coordenador de projeto precisa de um amplo gerenciamento diário de repositórios, sem operações administrativas confidenciais ou destrutivas. Qual função integrada foi projetada para isso?",
      "choices": [
        "Read",
        "Triage",
        "Maintain",
        "Admin"
      ],
      "explanations": [
        "Read é para visualização e discussão, em vez de amplo gerenciamento de repositório.",
        "Triage concentra-se no gerenciamento de colaboração sem a função mais ampla de manutenção.",
        "Maintain é direcionado a gerentes de projeto que não precisam de ações sensíveis ou destrutivas.",
        "Admin inclui explicitamente operações confidenciais e destrutivas."
      ],
      "concept": "Função de manutenção do repositório",
      "hints": [
        "Como o gerenciamento rotineiro de projetos difere da administração completa?",
        "Qual função fica deliberadamente aquém dos poderes sensíveis do administrador?"
      ]
    },
    "admin-012": {
      "prompt": "Um auditor externo precisa inspecionar o código e discutir as descobertas em um repositório privado, sem alterações de código ou triagem issue. Qual função de repositório é a adequada com menos privilégios?",
      "choices": [
        "Admin",
        "Maintain",
        "Write",
        "Read"
      ],
      "explanations": [
        "Admin exporia recursos confidenciais de administração de repositórios.",
        "Maintain concede recursos de gerenciamento que a auditoria não exige.",
        "Write permite alterações de código fora da competência do auditor.",
        "Read suporta visualização e discussão sem privilégios de gravação de código."
      ],
      "concept": "Acesso de auditoria somente Read",
      "hints": [
        "Quais ações estão explicitamente fora do escopo do auditor?",
        "Qual função oferece suporte à inspeção sem modificação?"
      ]
    },
    "admin-013": {
      "prompt": "Cada membro de uma organização pode atualmente ler todos os seus repositórios privados através de permissões básicas. A empresa deseja que cada repositório privado exija uma concessão explícita. Qual é a mudança mais direta no nível da organização?",
      "choices": [
        "Defina as permissões básicas da organização como No permission e revise as concessões explícitas",
        "Defina a função de repositório de cada equipe como Read, mantendo a permissão base existente",
        "Exigir commits assinados nas ramificações padrão",
        "Remova as concessões diretas do repositório, mantendo a permissão base existente"
      ],
      "explanations": [
        "No permission remove a permissão base geral; permissões diretas e de equipes ainda precisam ser revisadas.",
        "Concessões de equipe mais fracas não removem o acesso já concedido pelas permissões básicas da organização.",
        "commits assinado rege a verificação commit em vez das permissões de visibilidade do repositório.",
        "Remover as permissões diretas mantém a permissão base geral em vigor."
      ],
      "concept": "Permissões básicas da organização",
      "hints": [
        "Qual concessão se aplica antes que as permissões específicas da equipe sejam consideradas?",
        "Que outras permissões concedidas permanecem após a alteração das permissões base?"
      ]
    },
    "admin-014": {
      "prompt": "Um membro possui Read por meio de uma equipe e Write por meio de outra no mesmo repositório. Nenhuma outra restrição se aplica. Qual é o seu papel efetivo no repositório?",
      "choices": [
        "Read, porque o time mais restritivo vence",
        "Write, porque as concessões de acesso são cumulativas",
        "Triage, porque GitHub calcula a média das funções",
        "Sem acesso, porque várias concessões de equipe estão em conflito"
      ],
      "explanations": [
        "Uma concessão de equipe mais fraca não substitui uma concessão de repositório mais forte.",
        "A permissão de repositório aplicável mais forte do usuário rege essas concessões cumulativas.",
        "GitHub não calcula a média das funções do repositório.",
        "A participação em várias equipes não invalida suas concessões de acesso."
      ],
      "concept": "Permissões efetivas de repositório",
      "hints": [
        "Outra concessão funciona como uma negação?",
        "O que acontece quando uma pessoa recebe diferentes níveis de acesso?"
      ]
    },
    "admin-015": {
      "prompt": "Uma equipe pai tem acesso Read a um repositório. Uma equipe filha aninhada precisa de acesso Write. Qual abordagem corresponde ao modelo de permissão de equipe do GitHub?",
      "choices": [
        "Remova a equipe secundária porque as equipes aninhadas não podem acessar os repositórios",
        "Tornar a equipe principal uma proprietária da organização",
        "Conceda Write à equipe filha além de seu acesso herdado",
        "Definir a equipe pai como Write e confiar que a equipe filha negue esse acesso"
      ],
      "explanations": [
        "As equipes filhas aninhadas podem acessar repositórios e herdar permissões dos pais.",
        "A propriedade da organização não é uma função da equipe nem é necessária para a contribuição do repositório.",
        "Uma equipe filha herda o acesso da equipe pai e pode receber uma permissão adicional mais ampla.",
        "As equipes filhas não podem usar uma função mais fraca para negar permissões herdadas dos pais."
      ],
      "concept": "Herança de equipe aninhada",
      "hints": [
        "O que uma equipe filha herda da equipe pai?",
        "Uma concessão adicional pode expandir o acesso sem alterar todos os irmãos?"
      ]
    },
    "admin-016": {
      "prompt": "Um funcionário de uma agência precisa de acesso a um repositório privado, mas não deve tornar-se membro da organização. Qual mecanismo de colaboração se adapta?",
      "choices": [
        "Propriedade da organização",
        "Propriedade empresarial",
        "Participação em todas as equipes internas",
        "Acesso de colaborador externo a esse repositório"
      ],
      "explanations": [
        "A propriedade da organização é muito mais ampla do que a colaboração de um único repositório.",
        "A propriedade da empresa é inadequada para o acesso ao projeto por parte de um empreiteiro.",
        "A adesão à equipe exige a adesão à organização e expande o escopo desnecessariamente.",
        "Colaboradores externos recebem acesso a repositórios específicos sem serem membros da organização."
      ],
      "concept": "Fora do escopo do colaborador",
      "hints": [
        "A adesão de toda a organização é necessária para este envolvimento?",
        "Qual mecanismo de acesso está anexado diretamente a um repositório?"
      ]
    },
    "admin-017": {
      "prompt": "Um analista financeiro só precisa de acesso ao faturamento da organização. Qual função organizacional integrada é mais apropriada do que tornar o analista um proprietário?",
      "choices": [
        "Gerente de faturamento",
        "Administrador do repositório",
        "Mantenedor da equipe",
        "Colaborador externo"
      ],
      "explanations": [
        "Os gerentes de faturamento podem gerenciar o faturamento da organização sem propriedade total da organização.",
        "A administração do repositório não fornece a função de cobrança da organização pretendida.",
        "Os mantenedores da equipe gerenciam as equipes em vez do faturamento da organização.",
        "A colaboração externa é o acesso ao repositório, não uma atribuição de gerenciamento de faturamento."
      ],
      "concept": "Separando responsabilidades de faturamento",
      "hints": [
        "A tarefa requer controle sobre repositórios e membros?",
        "Que responsabilidade pode ser delegada independentemente da propriedade da organização?"
      ]
    },
    "admin-018": {
      "prompt": "Uma pessoa deve gerenciar os membros e as configurações de uma equipe, mas não deve controlar toda a organização. Qual função da equipe um proprietário deve considerar?",
      "choices": [
        "Proprietário da empresa",
        "Mantenedor da equipe",
        "Gerente de faturamento da organização",
        "Repositório Read"
      ],
      "explanations": [
        "A propriedade empresarial concede autoridade não relacionada em toda a empresa.",
        "Os mantenedores da equipe administram sua equipe sem precisar de propriedade da organização.",
        "A gestão de faturamento não confere administração de equipe.",
        "Uma função de repositório por si só não delega o gerenciamento da equipe."
      ],
      "concept": "Administração de equipe delegada",
      "hints": [
        "A que âmbito pertence a responsabilidade?",
        "O gerenciamento de equipes pode ser delegado sem conceder controle a toda a organização?"
      ]
    },
    "admin-019": {
      "prompt": "Durante uma revisão de acesso, um desenvolvedor mantém acesso ao repositório Write após ser removido da equipe esperada. O que o proprietário deve investigar a seguir?",
      "choices": [
        "Se a aplicação da assinatura commit precisa ser habilitada",
        "Se a exclusão da chave SSH do desenvolvedor por si só removeria a função de repositório",
        "Outras equipes, concessões diretas de repositório e permissões básicas da organização",
        "Se o desenvolvedor possui clones locais"
      ],
      "explanations": [
        "Os requisitos de assinatura de confirmação não identificam a concessão de autorização restante.",
        "A revogação de uma credencial não remove uma função de repositório concedida independentemente.",
        "Outra concessão aplicável pode preservar o acesso após o desaparecimento da concessão de uma equipe.",
        "Os clones locais retêm dados, mas não concedem acesso ao repositório ativo Write."
      ],
      "concept": "Rastreando permissões residuais",
      "hints": [
        "A equipe removida poderia ter sido apenas um caminho de acesso?",
        "Quais bolsas existem acima ou ao lado dessa equipe?"
      ]
    },
    "admin-020": {
      "prompt": "O proprietário de uma empresa está investigando um repositório privado em uma organização onde o proprietário não tem acesso ao repositório. Qual suposição eles deveriam evitar?",
      "choices": [
        "A administração de políticas corporativas e o acesso a repositórios têm escopos diferentes",
        "Uma concessão de repositório ainda pode ser necessária para inspecionar o conteúdo",
        "Os proprietários da organização podem ajudar a estabelecer o acesso apropriado ao repositório",
        "A propriedade empresarial concede automaticamente acesso a todos os repositórios privados"
      ],
      "explanations": [
        "Esta distinção separa corretamente a governança empresarial da autorização de repositório.",
        "O conteúdo privado ainda requer as permissões de acesso relevantes.",
        "Administradores apropriados no nível da organização podem providenciar acesso autorizado.",
        "A propriedade corporativa por si só não concede automaticamente acesso a todos os repositórios privados."
      ],
      "concept": "Limites das atribuições dos proprietários da empresa",
      "hints": [
        "A autoridade política implica acesso ao conteúdo em todos os lugares?",
        "Qual escopo realmente controla a autorização de um repositório privado?"
      ]
    },
    "admin-021": {
      "prompt": "Uma organização com um plano de suporte a funções de repositório personalizadas precisa de uma responsabilidade personalizada além de uma função padrão. Qual é a abordagem de design correta?",
      "choices": [
        "Escolha uma função base herdada adequada e adicione apenas as permissões suportadas necessárias",
        "Use uma função personalizada para subtrair Write herdado de uma equipe",
        "Dê propriedade a cada organização beneficiária primeiro",
        "Edite o cliente Git de cada destinatário para definir a nova função"
      ],
      "explanations": [
        "As funções de repositório personalizadas estendem uma função base herdada com permissões adicionais suportadas.",
        "As funções personalizadas não negam o acesso já concedido por outros caminhos.",
        "A propriedade da organização anula o propósito de permissões de repositório estritamente personalizadas.",
        "As funções do repositório são configurações de autorização do lado do servidor, não configurações locais do Git."
      ],
      "concept": "Design de função de repositório personalizado",
      "hints": [
        "A função é aditiva ou um mecanismo de negação?",
        "Qual linha de base mínima se ajusta à responsabilidade pretendida?"
      ]
    },
    "admin-022": {
      "prompt": "Um administrador deseja que a mesma equipe de força de trabalho esteja disponível em diversas organizações em uma empresa que ofereça suporte a equipes empresariais. Qual escopo melhor atende a esse requisito?",
      "choices": [
        "Uma lista de colaboradores apenas para repositório",
        "Uma equipe empresarial",
        "Uma entrada CODEOWNERS em um repositório",
        "Uma única chave de implantação de repositório"
      ],
      "explanations": [
        "Uma lista de colaboradores do repositório não modela centralmente uma equipe interorganizacional.",
        "As equipes empresariais fornecem uma construção de equipe de nível empresarial em todas as organizações.",
        "CODEOWNERS define a responsabilidade de revisão dentro de um repositório, não a associação corporativa.",
        "As chaves de implantação autenticam o acesso ao Git e não representam equipes de força de trabalho."
      ],
      "concept": "Escopo da equipe de nível empresarial",
      "hints": [
        "O grupo pretende parar em um limite da organização?",
        "Qual escopo administrativo corresponde ao seu reaproveitamento?"
      ]
    },
    "admin-023": {
      "prompt": "Antes de selecionar um IdP para Enterprise Managed Users, um arquiteto deseja o mínimo de incerteza de integração. Qual opção segue o caminho pavimentado recomendado de GitHub?",
      "choices": [
        "Escolha qualquer implementação SAML sem verificar o suporte de provisionamento",
        "Use fornecedores separados sem suporte para autenticação e provisionamento de conta",
        "Use um parceiro compatível IdP para autenticação e provisionamento SCIM",
        "Substitua o provisionamento por senhas compartilhadas"
      ],
      "explanations": [
        "A compatibilidade do SAML por si só não estabelece suporte ao provisionamento de usuários gerenciados.",
        "A divisão de integrações não suportadas aumenta a incerteza em vez de seguir o caminho pavimentado.",
        "GitHub recomenda um único parceiro IdP para autenticação e provisionamento.",
        "As senhas compartilhadas não fornecem provisionamento de usuários gerenciados individuais com suporte."
      ],
      "concept": "Arquitetura IdP de usuário gerenciado compatível",
      "hints": [
        "Quais são as duas funções de identidade que devem funcionar juntas?",
        "O que reduz a complexidade de integração e suporte?"
      ]
    },
    "admin-024": {
      "prompt": "Um funcionário gerenciado deixa uma empresa Enterprise Managed Users. Qual sistema deve conduzir o ciclo de vida de desprovisionamento compatível da conta?",
      "choices": [
        "O auxiliar de credenciais Git local do funcionário",
        "Uma regra de proteção de branch de repositório",
        "Uma edição manual para cada arquivo CODEOWNERS",
        "A integração de provisionamento IdP e SCIM da empresa"
      ],
      "explanations": [
        "A remoção de uma credencial local não desprovisiona centralmente uma conta gerenciada.",
        "As regras de ramificações restringem alterações, não o ciclo de vida da conta.",
        "Os arquivos de roteamento de revisão não são a autoridade para o desprovisionamento de contas.",
        "O ciclo de vida da conta gerenciada é controlado por meio da integração configurada do provedor de identidade."
      ],
      "concept": "Desativação de usuários gerenciados",
      "hints": [
        "Onde a identidade gerenciada foi originalmente provisionada?",
        "Como o offboarding pode cobrir a identidade em vez de uma credencial?"
      ]
    },
    "admin-025": {
      "prompt": "Uma organização de conta pessoal requer SAML SSO. Um PAT clássico com escopo correto funciona para os repositórios do próprio usuário, mas não pode acessar o repositório privado da organização, mesmo que o usuário tenha acesso no navegador. Qual etapa específica da credencial deve ser verificada?",
      "choices": [
        "Se o PAT está autorizado para o SAML SSO dessa organização",
        "Se a chave SSH do usuário está autorizada em vez da PAT",
        "Se os cookies do navegador devem ser incorporados ao valor PAT",
        "Se a senha GitHub do usuário deve ser alterada para corresponder à senha IdP"
      ],
      "explanations": [
        "Os PATs clássicos precisam de autorização SSO para acessar organizações que aplicam SAML SSO.",
        "A autorização SSH não autoriza uma credencial PAT separada.",
        "Um PAT não é estendido anexando material de sessão do navegador.",
        "SAML não requer que a senha GitHub corresponda à senha IdP."
      ],
      "concept": "Autorização SAML de PATs clássicos",
      "hints": [
        "Uma sessão do navegador e uma credencial API podem ter estados de autorização diferentes?",
        "Que limite organizacional adicional se aplica a esta credencial?"
      ]
    },
    "admin-026": {
      "prompt": "A chave SSH de um usuário funciona com repositórios pessoais, mas falha em uma organização protegida por SAML onde o usuário já tem permissão de repositório. Qual verificação está mais diretamente relacionada a SSO?",
      "choices": [
        "Verificar se a ramificação local se chama main",
        "Verifique se a chave SSH está autorizada para o SSO da organização",
        "Alterar a licença do repositório",
        "Torne o usuário um gerente de faturamento corporativo"
      ],
      "explanations": [
        "O nome da ramificação não autoriza uma credencial SSH para SAML.",
        "Uma chave SSH deve ser autorizada para acesso a uma organização protegida por SAML.",
        "A licença de software de um repositório não controla a autorização SSH.",
        "A autoridade de cobrança não está relacionada à autorização de credencial SSH SSO."
      ],
      "concept": "Autorização SAML de chaves SSH",
      "hints": [
        "Qual credencial esta conexão Git está usando?",
        "Essa credencial está vinculada separadamente ao requisito de identidade da organização?"
      ]
    },
    "admin-027": {
      "prompt": "Uma organização planeja impor SAML SSO. Qual preparação protege melhor a continuidade se o IdP ficar indisponível?",
      "choices": [
        "Armazene a senha IdP em um issue público",
        "Torne todos os repositórios privados públicos",
        "Retenha e teste com segurança o processo de recuperação SAML documentado",
        "Remover todos os proprietários da organização"
      ],
      "explanations": [
        "A publicação de uma senha compromete a autenticação em vez de preservar a recuperação segura.",
        "A visibilidade pública expõe dados e não é um mecanismo de recuperação SSO.",
        "Procedimentos de recuperação documentados e códigos de recuperação protegidos dão suporte ao acesso de emergência autorizado.",
        "A remoção dos proprietários reduz a capacidade de recuperação e a supervisão operacional."
      ],
      "concept": "Prontidão de recuperação SAML",
      "hints": [
        "O que acontece se o serviço de identidade for a dependência com falha?",
        "Qual material de acesso de emergência precisa de proteção antes da aplicação?"
      ]
    },
    "admin-028": {
      "prompt": "O proprietário de uma organização deseja que apenas administradores selecionados alterem a associação à organização. Uma proposta dá a cada desenvolvedor o papel de proprietário por conveniência. Qual é a razão mais forte para rejeitá-lo?",
      "choices": [
        "Os proprietários não podem gerenciar a associação, então a proposta não funcionaria de jeito nenhum",
        "O repositório Write já inclui todas as configurações da organização",
        "A autoridade do proprietário expira automaticamente após o próximo envio de código do desenvolvedor",
        "A propriedade da organização concede ampla autoridade administrativa além do desenvolvimento normal"
      ],
      "explanations": [
        "Os proprietários podem gerenciar a associação à organização; a preocupação é a autoridade excessiva.",
        "O repositório Write não significa administração em toda a organização.",
        "A propriedade não expira automaticamente após uma contribuição de código.",
        "O privilégio mínimo requer a limitação da ampla função de proprietário da organização."
      ],
      "concept": "Limitando a propriedade da organização",
      "hints": [
        "Em qual escopo acontece a contribuição diária de código?",
        "Que responsabilidades adicionais acompanham a função proposta?"
      ]
    },
    "admin-029": {
      "prompt": "Um contrato de fornecedor termina. O fornecedor é um colaborador externo em dois repositórios privados. Qual é a ação de remoção de acesso mais direcionada?",
      "choices": [
        "Remova o acesso de colaborador do fornecedor dos repositórios relevantes",
        "Excluir toda a organização",
        "Remover todas as equipes de funcionários",
        "Desative GitHub Actions em toda a empresa"
      ],
      "explanations": [
        "A remoção das concessões específicas do colaborador resolve o envolvimento encerrado sem interrupções não relacionadas.",
        "Excluir a organização é desproporcional e destrutivo.",
        "Remover a equipe de funcionários não trata especificamente das permissões diretas do fornecedor.",
        "Desabilitar Ações não revoga o acesso ao repositório do fornecedor."
      ],
      "concept": "Desligamento de colaborador com escopo limitado",
      "hints": [
        "Onde é concedido o acesso desta pessoa?",
        "Qual mudança remove esse acesso sem afetar o trabalho não relacionado?"
      ]
    },
    "admin-030": {
      "prompt": "Um revisor de acesso encontra um contratado em uma equipe secreta e assume que a equipe não tem permissões de repositório porque está oculta. Qual correção é precisa?",
      "choices": [
        "As equipes secretas não podem receber permissões de repositório",
        "A visibilidade da equipe e as permissões de acesso ao repositório são configurações separadas",
        "As equipes secretas negam automaticamente todo o acesso herdado",
        "Equipes secretas concedem propriedade empresarial a seus membros"
      ],
      "explanations": [
        "As equipes secretas podem receber acesso ao repositório.",
        "Ocultar uma equipe não remove as permissões de repositório atribuídas a ela.",
        "A visibilidade não é um mecanismo de negação explícito.",
        "A adesão à equipe secreta não confere propriedade empresarial."
      ],
      "concept": "Visibilidade da equipe versus autorização",
      "hints": [
        "Esconder a existência de um grupo altera o que seus membros podem fazer?",
        "Qual configuração realmente concede acesso ao repositório?"
      ]
    },
    "admin-031": {
      "prompt": "Uma entrada CODEOWNERS válida nomeia a equipe do banco de dados, que tem acesso Write. As alterações ainda podem ser mescladas sem a aprovação da equipe. Que controle adicional é necessário?",
      "choices": [
        "Exigir apenas uma verificação de status de compilação bem-sucedida",
        "Exigir qualquer revisão sem condição de proprietário de código",
        "Exigir revisão do proprietário do código por meio de uma regra de ramificação aplicável ou ruleset",
        "Exigir assinaturas commit em vez de revisão"
      ],
      "explanations": [
        "Um resultado de construção valida CI, não a aprovação da equipe de banco de dados.",
        "Uma revisão arbitrária não precisa vir dos proprietários designados do código.",
        "CODEOWNERS identifica proprietários; uma regra aplicável torna necessária a sua aprovação.",
        "A assinatura do commit não estabelece a aprovação do proprietário do código."
      ],
      "concept": "Responsabilidade pela revisão versus exigência de revisão",
      "hints": [
        "A atribuição de um revisor bloqueia uma mesclagem?",
        "Qual camada transforma as expectativas de revisão em um requisito obrigatório?"
      ]
    },
    "admin-032": {
      "prompt": "Uma empresa impõe uma política que impede os membros da organização de alterar a visibilidade do repositório. Um administrador de repositório não pode selecionar uma visibilidade diferente. Qual é a melhor explicação?",
      "choices": [
        "O repositório Admin sempre substitui a política corporativa",
        "Somente a versão local do Git do usuário controla as alterações de visibilidade",
        "A restrição deve ser um erro de sincronização de grupo IdP",
        "A política empresarial pode restringir os administradores da organização e do repositório"
      ],
      "explanations": [
        "A administração do repositório não ignora uma restrição corporativa imposta.",
        "A visibilidade é controlada no GitHub, não pela versão local do Git.",
        "Uma política explícita de visibilidade empresarial não precisa envolver sincronização de identidade.",
        "As políticas aplicadas com âmbitos mais elevados limitam as escolhas disponíveis em âmbitos mais baixos."
      ],
      "concept": "Hierarquia de políticas e administração delegada",
      "hints": [
        "Uma função de escopo inferior pode exceder um limite corporativo imposto?",
        "Qual camada administrativa impôs a restrição?"
      ]
    },
    "admin-033": {
      "prompt": "Em uma empresa que usa contas pessoais, o proprietário do repositório deseja que o acesso confidencial ao projeto seja limitado a pessoas explicitamente autorizadas. Por que deveriam escolher a visibilidade privada em vez da visibilidade interna?",
      "choices": [
        "Os repositórios internos são geralmente acessíveis aos membros da empresa, não apenas à equipe do projeto",
        "Repositórios privados não podem usar equipes",
        "A visibilidade interna requer automaticamente a aprovação de CODEOWNERS para ler o código",
        "A visibilidade privada elimina a necessidade de atribuir permissões"
      ],
      "explanations": [
        "A visibilidade interna destina-se à colaboração em toda a empresa, e não à confidencialidade apenas do projeto.",
        "As equipes podem receber permissões de repositório privado.",
        "CODEOWNERS rege a propriedade de revisão em vez do acesso de leitura.",
        "Os repositórios privados ainda exigem gerenciamento de acesso explícito apropriado."
      ],
      "concept": "Limite de acesso ao repositório interno",
      "hints": [
        "Quem é o público-alvo dos repositórios empresariais de código-fonte interno?",
        "Qual visibilidade corresponde a um público de projeto explicitamente limitado?"
      ]
    },
    "admin-034": {
      "prompt": "Um desenvolvedor cria um fine-grained PAT com permissão de gravação de conteúdo do repositório. O desenvolvedor possui apenas Read no repositório selecionado. O PAT pode elevar o desenvolvedor para Write?",
      "choices": [
        "Sim, porque as permissões de token substituem as funções do repositório",
        "Não, o token não pode conceder acesso que o usuário não possui",
        "Sim, se o seu vencimento estiver a mais de um ano de distância",
        "Não, porque os PATs fine-grained nunca podem gravar conteúdo do repositório"
      ],
      "explanations": [
        "As permissões solicitadas por um token não substituem o acesso subjacente do usuário.",
        "Os tokens de acesso pessoal são limitados pelo acesso do usuário gerador.",
        "A duração da expiração não eleva a autorização.",
        "PATs refinados podem gravar conteúdo quando o token e as permissões do usuário permitirem."
      ],
      "concept": "Permissões de token limitadas pelo acesso do usuário",
      "hints": [
        "De quem é a identidade que um PAT representa?",
        "A delegação pode criar autoridade ausente dessa identidade?"
      ]
    },
    "admin-035": {
      "prompt": "Um usuário possui o repositório Write, mas não pode alterar as configurações de gerenciamento de acesso do repositório. Qual explicação corresponde melhor às funções de repositório integradas?",
      "choices": [
        "Todos os usuários autenticados podem alterar o acesso ao repositório",
        "Write e Admin são idênticos fora dos repositórios públicos",
        "A permissão de contribuição de código não inclui toda a administração do repositório",
        "SAML sempre bloqueia as configurações do repositório para todos os membros"
      ],
      "explanations": [
        "A autenticação por si só não confere administração do repositório.",
        "Write e Admin permanecem funções distintas para repositórios privados.",
        "Write suporta contribuição enquanto Admin inclui configurações sensíveis mais amplas.",
        "SAML não impõe uma proibição universal ao acesso autorizado às configurações do repositório."
      ],
      "concept": "Contribuição versus administração de repositório",
      "hints": [
        "O envio de código requer autoridade para conceder acesso a outras pessoas?",
        "Qual limite de função separa essas responsabilidades?"
      ]
    },
    "admin-036": {
      "prompt": "Um grupo de segurança central precisa de visibilidade dos alertas de segurança da organização sem propriedade rotineira da organização. Em uma organização elegível, qual função integrada foi projetada para essa responsabilidade?",
      "choices": [
        "Gerente de faturamento",
        "Somente membro da equipe",
        "Colaborador externo sem concessões de repositório",
        "Gerente de segurança"
      ],
      "explanations": [
        "Os gerentes de faturamento lidam com o faturamento em vez de alertas de segurança em toda a organização.",
        "A participação comum na equipe por si só não fornece a função de gerenciamento de segurança.",
        "Nenhuma concessão de repositório não estabelece visibilidade de segurança em toda a organização.",
        "O gerente de segurança delega responsabilidades de segurança sem propriedade total da organização."
      ],
      "concept": "Gerenciamento de segurança delegada",
      "hints": [
        "Qual responsabilidade deve ser separada da propriedade geral da organização?",
        "A função precisa de um escopo de organização específico de segurança?"
      ]
    },
    "admin-037": {
      "prompt": "O grupo IdP de uma empresa muda após uma reorganização, mas a equipe GitHub conectada ainda mostra ex-membros. Qual é a primeira investigação mais útil?",
      "choices": [
        "Verifique a conexão do grupo IdP e o estado de sincronização",
        "Reescrever o histórico do repositório",
        "Gire os nomes das tags de lançamento do repositório",
        "Substituir todas as regras de ramificações por visibilidade pública"
      ],
      "explanations": [
        "O mapeamento do grupo de origem e o estado de sincronização explicam diretamente a associação sincronizada obsoleta.",
        "O histórico do Git não controla a sincronização da equipe.",
        "Os nomes das tags de liberação não determinam a associação à força de trabalho.",
        "As alterações de visibilidade não reparam a sincronização do grupo de identidades e podem expor dados."
      ],
      "concept": "Diagnosticando desvio de sincronização",
      "hints": [
        "Quais dados deveriam ter fluído do sistema de origem?",
        "Onde o processo de mapeamento ou sincronização poderia ter divergido?"
      ]
    },
    "admin-038": {
      "prompt": "Uma organização que usa contas pessoais remove a associação de um funcionário que está saindo da organização. Qual afirmação sobre a conta pessoal GitHub do funcionário está correta?",
      "choices": [
        "A conta é excluída automaticamente de GitHub",
        "A conta continua sendo do indivíduo; o acesso da organização e a existência da conta são separados",
        "A conta se torna automaticamente um usuário gerenciado pela empresa",
        "Os repositórios públicos da conta são transferidos para a organização"
      ],
      "explanations": [
        "A remoção da organização não exclui uma conta pessoal de propriedade independente.",
        "O ciclo de vida da conta pessoal permanece separado da associação a uma organização.",
        "A remoção da associação não converte modelos de conta.",
        "A organização não adquire repositórios públicos pessoais por meio de offboarding."
      ],
      "concept": "Limites de exclusão de contas pessoais",
      "hints": [
        "Quem possui uma conta pessoal fora da organização?",
        "Qual relacionamento está realmente sendo removido?"
      ]
    },
    "admin-039": {
      "prompt": "Uma nova organização deseja evitar que um único administrador se torne um ponto de falha operacional. Qual é a prática de propriedade mais apropriada?",
      "choices": [
        "Use um login de proprietário compartilhado para toda a equipe",
        "Conceda propriedade a cada contribuidor do repositório",
        "Maintain vários proprietários individuais confiáveis com autenticação forte",
        "Remover propriedade após a configuração inicial"
      ],
      "explanations": [
        "Logins compartilhados enfraquecem a atribuição e o gerenciamento seguro de credenciais.",
        "Cada contribuidor não precisa de ampla autoridade organizacional.",
        "Vários proprietários confiáveis preservam a continuidade enquanto mantêm a responsabilidade individual.",
        "Uma organização ainda precisa de proprietários autorizados para administração e recuperação."
      ],
      "concept": "Propriedade resiliente da organização",
      "hints": [
        "Como a continuidade administrativa pode coexistir com privilégios mínimos?",
        "Por que a responsabilização individual é importante para a administração de emergências?"
      ]
    },
    "admin-040": {
      "prompt": "Um administrador deseja verificar quem pode acessar atualmente um repositório confidencial, e não apenas quem apareceu em um registro de incidente antigo. Qual evidência é mais diretamente útil?",
      "choices": [
        "Uma exportação histórica apenas dos contribuidores do repositório",
        "Uma lista apenas de nomes de autores commit",
        "Somente a lista pública de membros da organização",
        "Concessões atuais de acesso direto, de equipe e herdado ao repositório"
      ],
      "explanations": [
        "A contribuição histórica não estabelece autorização atual.",
        "Os metadados do autor do commit não comprovam a autorização atual.",
        "A visibilidade da associação pública omite a associação privada e concessões específicas do repositório.",
        "As atuais concessões efetivas estabelecem o acesso atual ao repositório."
      ],
      "concept": "Auditoria de acesso no estado atual",
      "hints": [
        "A atividade histórica e as permissões atuais são a mesma evidência?",
        "Quais rotas podem conceder acesso sem aparecer em uma lista pública de membros?"
      ]
    },
    "admin-041": {
      "prompt": "A instalação do GitHub App está limitada a um repositório de documentação. Um desenvolvedor argumenta que a instalação do aplicativo prova que ele também deve acessar o repositório financeiro. O que o administrador deve explicar?",
      "choices": [
        "A seleção do repositório de instalação é um limite de autorização e deve ser explicitamente alterada se aprovada",
        "Todos os aplicativos instalados acessam automaticamente todos os repositórios privados",
        "Os nomes dos aplicativos determinam o acesso ao repositório por meio de prefixos correspondentes",
        "A sessão SAML do navegador do desenvolvedor expande a seleção do repositório da instalação"
      ],
      "explanations": [
        "Uma instalação recebe acesso apenas à sua seleção e permissões de repositório aprovadas.",
        "A instalação não implica acesso irrestrito ao repositório privado.",
        "As convenções de nomenclatura não autorizam um aplicativo.",
        "Uma sessão do navegador não amplia a seleção de repositório de instalação de um aplicativo."
      ],
      "concept": "Limites de acesso de integração",
      "hints": [
        "Quais repositórios foram realmente aprovados para instalação?",
        "O aplicativo está usando as permissões do navegador do desenvolvedor ou sua própria concessão?"
      ]
    },
    "admin-042": {
      "prompt": "Um membro precisa de acesso temporário ao repositório elevado para uma migração. Qual plano de administração preserva melhor o mínimo de privilégios após o trabalho?",
      "choices": [
        "Conceder propriedade permanente da organização e ignorar a revisão",
        "Conceda apenas o acesso necessário, registre a finalidade e remova-o após a migração",
        "Compartilhe o PAT de outro administrador até que a migração termine",
        "Altere o repositório para público durante a migração"
      ],
      "explanations": [
        "A propriedade permanente é mais ampla e duradoura do que a tarefa temporária.",
        "O acesso atribuível e com escopo definido com uma etapa de remoção explícita limita privilégios duradouros.",
        "Compartilhar um PAT elimina a responsabilidade individual e expõe as credenciais de outro usuário.",
        "A visibilidade pública expõe os dados em vez de delegar com segurança o acesso à migração."
      ],
      "concept": "Administração de acesso com limite de tempo",
      "hints": [
        "Que autoridade e duração o trabalho realmente exige?",
        "Como a permissão adicional será identificada e removida posteriormente?"
      ]
    },
    "admin-043": {
      "prompt": "Um usuário propõe a criação de uma segunda conta GitHub pessoal para trabalho corporativo e a chama de Usuário gerenciado empresarial. Qual fato determina se a conta é realmente gerenciada pela empresa?",
      "choices": [
        "Seu nome de usuário contém o nome da empresa",
        "Seu e-mail principal usa o domínio da empresa",
        "Ele foi provisionado e é controlado por meio da integração de usuário gerenciado IdP da empresa",
        "Seu perfil lista a empresa como empregadora"
      ],
      "explanations": [
        "Uma convenção de nomenclatura não altera o modelo de identidade de uma conta.",
        "Um e-mail corporativo não torna uma conta pessoal gerenciada pela empresa.",
        "Enterprise Managed Users depende do modelo de provisionamento de identidade empresarial configurado.",
        "O texto do perfil do empregador não é um mecanismo de provisionamento de conta."
      ],
      "concept": "Reconhecendo identidades genuinamente gerenciadas",
      "hints": [
        "O modelo da conta é determinado pela aparência do perfil?",
        "Qual sistema controla a criação e o ciclo de vida?"
      ]
    },
    "admin-044": {
      "prompt": "Uma empresa regulamentada deve executar sua implantação GitHub na infraestrutura que ela administra e agendar atualizações de dispositivos por conta própria. Qual implantação é mais adequada?",
      "choices": [
        "GitHub Enterprise Cloud com contas pessoais",
        "GitHub Enterprise Cloud com usuários gerenciados",
        "GitHub Enterprise Cloud com residência de dados",
        "GitHub Enterprise Server"
      ],
      "explanations": [
        "As empresas de nuvem de contas pessoais permanecem hospedadas e operadas por GitHub.",
        "Os usuários gerenciados mudam o gerenciamento de identidade, não quem opera a implantação da nuvem.",
        "A residência de dados na nuvem seleciona uma região suportada sem tornar o serviço self-hosted.",
        "Enterprise Server é implantado e administrado na infraestrutura do cliente."
      ],
      "concept": "Implantação empresarial auto-hospedada",
      "hints": [
        "Quem deve operar a infraestrutura de aplicativos?",
        "A hospedagem em nuvem regional equivale à administração de um dispositivo?"
      ]
    },
    "admin-045": {
      "prompt": "Uma empresa deseja que GitHub opere o serviço, com identidades gerenciadas e uma opção de região de residência de dados com suporte. Qual oferta o administrador deve avaliar?",
      "choices": [
        "GitHub Enterprise Cloud com residência de dados",
        "Um repositório público em uma conta pessoal gratuita",
        "GitHub Enterprise Server instalado em um laptop",
        "Uma organização que usa contas pessoais em GitHub.com sem residência de dados"
      ],
      "explanations": [
        "Esta oferta combina hospedagem operada por GitHub, usuários gerenciados e regiões de residência suportadas.",
        "Um repositório pessoal público não fornece esta configuração de residência corporativa.",
        "Enterprise Server requer infraestrutura operada pelo cliente.",
        "A hospedagem da organização GitHub.com padrão não seleciona esta implantação de residência de dados."
      ],
      "concept": "Implantação de residência de dados na nuvem",
      "hints": [
        "Qual opção altera o local de hospedagem da empresa sem auto-hospedagem?",
        "Como as identidades são tratadas nessa oferta?"
      ]
    },
    "admin-046": {
      "prompt": "Um novo funcionário não pode enviar para um repositório privado, enquanto colegas de trabalho com a concessão de equipe esperada podem. Qual resposta pertence aos administradores da organização antes de escalar para o Suporte GitHub?",
      "choices": [
        "Peça ao suporte para substituir o serviço de autenticação do GitHub",
        "Inspecione as permissões efetivas e autorização de credenciais do funcionário",
        "Gere uma restauração completa de recuperação de desastres empresariais",
        "Migre cada repositório para uma implantação diferente"
      ],
      "explanations": [
        "Um acesso de usuário único issue não estabelece falha na autenticação da plataforma.",
        "Os administradores podem inspecionar e corrigir o acesso com escopo e a configuração de credenciais.",
        "Uma restauração é desproporcional e não diagnostica um problema de permissão específico do usuário.",
        "Uma migração de implantação não está relacionada à verificação de autorização imediata."
      ],
      "concept": "Acesso resolvível pelo administrador issues",
      "hints": [
        "A falha é ampla ou limitada a uma identidade?",
        "Quais configurações estão sob o controle direto da organização?"
      ]
    },
    "admin-047": {
      "prompt": "Um incidente GitHub Enterprise Server persiste após verificações locais documentadas. O suporte solicita diagnósticos do dispositivo e registros limpos recentes. Qual artefato é a melhor combinação?",
      "choices": [
        "Somente um arquivo de diagnóstico GHES sem arquivo de log recente",
        "Um pacote Git de uma ramificação de recursos do desenvolvedor",
        "Um pacote de suporte GitHub Enterprise Server",
        "Apenas uma exportação de eventos de auditoria de repositório"
      ],
      "explanations": [
        "Uma visão geral do diagnóstico por si só não inclui a coleta recente de logs de serviço solicitada.",
        "Um pacote Git contém o histórico do repositório em vez de diagnósticos do dispositivo.",
        "Um pacote de suporte inclui informações de diagnóstico e registros de serviço limpos.",
        "Os eventos de auditoria não substituem os diagnósticos do dispositivo e os registros de serviço solicitados."
      ],
      "concept": "Finalidade do pacote de suporte",
      "hints": [
        "Que evidências dizem respeito ao dispositivo e não a um repositório?",
        "Qual artefato combina informações de configurações com logs?"
      ]
    },
    "admin-048": {
      "prompt": "Um administrador GHES coletou um pacote de suporte. Qual é a prática de manuseio mais segura antes de enviá-lo?",
      "choices": [
        "Anexe-o a um repositório público issue para maior transparência",
        "Envie para todos os desenvolvedores por meio de um chat compartilhado",
        "Suponha que a higienização significa que o pacote não contém informações operacionais confidenciais",
        "Trate-o como confidencial e compartilhe-o através do canal de suporte autorizado"
      ],
      "explanations": [
        "A publicação pública pode expor detalhes operacionais internos.",
        "O amplo compartilhamento expande desnecessariamente o acesso às informações de diagnóstico.",
        "Os logs higienizados ainda podem conter ambiente confidencial e contexto operacional.",
        "O tratamento de suporte autorizado limita a exposição de dados de diagnóstico."
      ],
      "concept": "Protegendo artefatos de diagnóstico",
      "hints": [
        "A remoção de credenciais elimina todo o contexto confidencial?",
        "Quem realmente precisa dessas evidências para resolver o caso?"
      ]
    },
    "admin-049": {
      "prompt": "O suporte solicita uma visão geral das configurações e do ambiente do GHES sem o arquivo maior de log recente. Qual artefato o administrador deve gerar?",
      "choices": [
        "Um arquivo de diagnóstico",
        "Um arquivo fonte do repositório",
        "Um artefato de fluxo de trabalho de um build não relacionado",
        "Um arquivo CODEOWNERS"
      ],
      "explanations": [
        "O arquivo de diagnóstico resume as configurações e o ambiente da instância.",
        "Os arquivos de origem contêm código em vez de diagnósticos de configuração do dispositivo.",
        "Um artefato de construção não relacionado não é uma visão geral do diagnóstico da instância.",
        "Os documentos CODEOWNERS analisam a propriedade em vez do ambiente do sistema."
      ],
      "concept": "Diagnóstico versus pacotes de suporte",
      "hints": [
        "A solicitação é de contexto do sistema ou conteúdo do repositório?",
        "Qual artefato de suporte omite a coleção de logs maior?"
      ]
    },
    "admin-050": {
      "prompt": "As equipes mesclam alterações repetidamente sem revisões, apesar de um padrão escrito de duas aprovações. Qual melhoria administrativa transforma mais diretamente o padrão em um controle?",
      "choices": [
        "Adicione um modelo de solicitação pull solicitando duas aprovações, mas nenhuma regra de aplicação",
        "Configure uma regra de solicitação pull aplicável que exija duas aprovações",
        "Exigir apenas uma verificação de status de compilação bem-sucedida",
        "Habilite solicitações de revisão automática sem exigir aprovação"
      ],
      "explanations": [
        "Um modelo é uma orientação e não uma porta de mesclagem.",
        "Uma regra de aprovação obrigatória bloqueia mesclagens que não atendem ao padrão configurado.",
        "O sucesso da construção não prova que dois revisores aprovaram.",
        "Solicitar revisões não torna, por si só, essas revisões obrigatórias."
      ],
      "concept": "Aplicação de padrões de processo de desenvolvedor",
      "hints": [
        "Qual mecanismo avalia um pull request antes da mesclagem?",
        "Como o processo desejado pode ser verificado em vez de meramente descrito?"
      ]
    },
    "admin-051": {
      "prompt": "Uma organização deseja que novos repositórios comecem com orientações consistentes sobre solicitações pull e expectativas dos colaboradores. Qual abordagem fornece conteúdo inicial reutilizável sem a pretensão de impor revisões?",
      "choices": [
        "Orçamentos de faturamento da organização",
        "Uma senha de administrador compartilhada obrigatória",
        "Modelos de repositório contendo documentação do contribuidor e modelos de solicitação pull",
        "Uma lista de permissões corporativas IP"
      ],
      "explanations": [
        "Os orçamentos de cobrança não inicializam a documentação de colaboração.",
        "Senhas compartilhadas não são um mecanismo seguro de padronização de processos.",
        "Os modelos de repositório podem distribuir uma estrutura e orientação inicial consistente.",
        "As listas de permissões IP restringem o acesso à rede em vez dos modelos de conteúdo do repositório."
      ],
      "concept": "Padronizando práticas de inicialização de repositório",
      "hints": [
        "O requisito diz respeito ao conteúdo inicial ou ao acesso em tempo de execução?",
        "Qual recurso reutiliza a estrutura de um repositório ao criar outro?"
      ]
    },
    "admin-052": {
      "prompt": "Uma empresa publica versões de produção de tags e deseja evitar atualizações ou exclusões acidentais de tags. Qual controle um administrador deve considerar em um plano de suporte?",
      "choices": [
        "Um ruleset exclusivo de ramificações que se aplica à ramificação padrão",
        "Exigir apenas revisão do proprietário do código para pull requests",
        "Requer apenas commits assinado na ramificação padrão",
        "Uma tag ruleset direcionada ao padrão de tag de lançamento"
      ],
      "explanations": [
        "Uma regra somente de ramificação não protege diretamente as referências de tags correspondentes.",
        "As revisões de solicitação pull não restringem atualizações ou exclusões posteriores de tags.",
        "A verificação de confirmação não impede que uma referência de tag seja movida ou excluída.",
        "A tag rulesets pode restringir atualizações e exclusões de tags de lançamento correspondentes."
      ],
      "concept": "Governança de referência de lançamento",
      "hints": [
        "Quais referências do Git identificam os lançamentos?",
        "Que tipo de regra pode atingir essas referências diretamente?"
      ]
    },
    "admin-053": {
      "prompt": "Uma implantação GHES possui uma réplica de alta disponibilidade. Uma parte interessada propõe o cancelamento dos backups históricos. O que o administrador deve explicar?",
      "choices": [
        "A replicação pode propagar corrupção ou exclusão, portanto, backups históricos continuam sendo necessários",
        "Uma réplica preserva todos os estados anteriores indefinidamente",
        "A alta disponibilidade cria automaticamente instantâneos históricos externos",
        "Backups e réplicas atendem a objetivos de recuperação idênticos"
      ],
      "explanations": [
        "Uma réplica melhora a disponibilidade, mas não substitui instantâneos históricos recuperáveis.",
        "As réplicas rastreiam alterações em tempo real em vez de preservar todos os estados históricos.",
        "Os backups históricos externos não são fornecidos automaticamente pela replicação HA.",
        "O failover de disponibilidade e a recuperação histórica abordam diferentes modos de falha."
      ],
      "concept": "Disponibilidade versus recuperação histórica",
      "hints": [
        "O que acontece quando uma alteração indesejada é replicada com êxito?",
        "Qual objetivo de recuperação requer um estado antigo conhecido como bom?"
      ]
    },
    "admin-054": {
      "prompt": "Antes de uma expansão de armazenamento GHES, um operador sugere redimensionar um volume ativo imediatamente para evitar sobrecarga de planejamento. Qual resposta segue melhor a abordagem operacional documentada?",
      "choices": [
        "Prossiga porque as alterações no armazenamento não podem afetar os dados do aplicativo",
        "Use o procedimento específico da versão, planeje a manutenção e confirme a prontidão da recuperação",
        "Exclua repositórios grandes sem a aprovação do proprietário primeiro",
        "Desative a autenticação permanentemente antes de redimensionar"
      ],
      "explanations": [
        "As alterações no armazenamento podem interromper os serviços e exigir precauções documentadas.",
        "Os procedimentos suportados e o planejamento de manutenção reduzem o risco de dados de instância persistentes.",
        "A exclusão não aprovada é destrutiva e não é um pré-requisito seguro de gerenciamento de capacidade.",
        "A remoção permanente da autenticação não está relacionada e é insegura."
      ],
      "concept": "Mudanças controladas na infraestrutura GHES",
      "hints": [
        "O que poderia dar errado ao alterar um volume persistente em uso?",
        "Quais documentação e pré-requisitos de recuperação devem reger a mudança?"
      ]
    },
    "admin-055": {
      "prompt": "Uma proposta de atualização do GHES pressupõe que a versão mais recente sempre pode ser instalada diretamente sobre qualquer versão mais antiga. O que um administrador deve fazer em vez disso?",
      "choices": [
        "Use a ordem alfabética do número da versão",
        "Ignore as notas de versão para reduzir o tempo de atualização",
        "Verifique os caminhos de atualização suportados e os pré-requisitos específicos da versão antes de agendar",
        "Atualize apenas as extensões do navegador"
      ],
      "explanations": [
        "A compatibilidade de versões não é determinada por ordem alfabética.",
        "As notas de versão podem conter pré-requisitos necessários e advertências de atualização.",
        "As atualizações do GHES devem seguir caminhos documentados com suporte para a versão instalada.",
        "As extensões do navegador não atualizam o dispositivo GHES."
      ],
      "concept": "Planejamento de atualização GHES compatível",
      "hints": [
        "A distância de liberação pode alterar a sequência de atualização permitida?",
        "Que evidências estabelecem compatibilidade para a versão instalada?"
      ]
    },
    "admin-056": {
      "prompt": "Um administrador GHES tem uma tarefa de backup recente bem-sucedida, mas nunca ensaiou a recuperação. Qual atividade melhora mais diretamente a confiança na recuperação de desastres?",
      "choices": [
        "Revise as mensagens de conclusão do backup sem realizar uma restauração",
        "Aumente a frequência de backup sem verificar a restauração",
        "Trate a integridade da replicação HA como prova da capacidade de restauração do backup histórico",
        "Teste uma restauração documentada em um ambiente isolado apropriado"
      ],
      "explanations": [
        "As mensagens de conclusão por si só não validam o procedimento de recuperação completo.",
        "A frequência melhora as opções de ponto de recuperação, mas não prova que a restauração funciona.",
        "Uma réplica íntegra e um backup histórico restaurável são recursos de recuperação diferentes.",
        "Um teste de restauração controlado valida os dados e o processo de recuperação."
      ],
      "concept": "Validando a prontidão de recuperação",
      "hints": [
        "A coleta de dados de recuperação prova que eles podem ser usados?",
        "Como a recuperação pode ser exercida sem arriscar a produção?"
      ]
    },
    "admin-057": {
      "prompt": "Uma parte interessada pergunta se o GitHub Enterprise Cloud com usuários gerenciados elimina as responsabilidades de administração de identidade da organização. Qual resposta é correta?",
      "choices": [
        "GitHub hospeda a plataforma, mas a empresa ainda administra sua integração IdP e políticas de acesso",
        "GitHub projeta automaticamente todos os grupos IdP do cliente",
        "Os usuários gerenciados eliminam todas as necessidades de revisões de acesso",
        "O cliente deve corrigir os servidores de aplicativos em nuvem do GitHub"
      ],
      "explanations": [
        "As operações na nuvem e a governança da identidade do cliente permanecem responsabilidades separadas.",
        "O cliente ainda rege o design e as atribuições do grupo do provedor de identidade.",
        "O provisionamento gerenciado não elimina a governança de acesso.",
        "GitHub opera infraestrutura de aplicativos em nuvem em vez de exigir patches do cliente."
      ],
      "concept": "Responsabilidades de administração compartilhada na nuvem",
      "hints": [
        "Quais responsabilidades dizem respeito à operação da plataforma?",
        "Quais responsabilidades dizem respeito a decidir quem deve acessar os recursos da empresa?"
      ]
    },
    "admin-058": {
      "prompt": "Uma equipe de compras totaliza a contagem de membros da organização para estimar as licenças empresariais, contando três vezes o mesmo funcionário em três organizações. O que o administrador deve esclarecer?",
      "choices": [
        "As licenças empresariais são sempre cobradas uma vez por repositório",
        "Contas corporativas de contagem de licenças para usuários únicos, em vez de simplesmente somar associações duplicadas",
        "Somente proprietários de repositórios consomem licenças",
        "Cada equipe cria uma licença separada para cada membro"
      ],
      "explanations": [
        "O licenciamento de licença empresarial não é simplesmente uma cobrança por repositório.",
        "As associações duplicadas devem ser conciliadas com as regras de consumo de licença empresarial.",
        "O uso licenciado não está limitado aos proprietários do repositório.",
        "A adesão à equipe não é cobrada de forma independente como uma nova vaga para cada equipe."
      ],
      "concept": "Consumidores exclusivos de licença empresarial",
      "hints": [
        "Uma licença está associada a uma pessoa ou a cada vínculo com uma organização?",
        "O que acontece quando a mesma identidade aparece em várias organizações?"
      ]
    },
    "admin-059": {
      "prompt": "Uma organização com um plano pago por licença adiciona um colaborador externo a vários repositórios privados, excluindo forks. Como o administrador deve avaliar o impacto no consumo de licenças?",
      "choices": [
        "Suponha que colaboradores externos nunca possam consumir licenças pagas",
        "Contar uma licença separada para cada convite a um repositório",
        "Aplicar as regras do plano para o colaborador como um consumidor de licença exclusivo, e não como uma licença por repositório",
        "Supor que apenas colaboradores que fazem push diariamente podem consumir licenças"
      ],
      "explanations": [
        "Colaboradores externos em repositórios privados podem contar para o uso pago de licenças.",
        "Um colaborador externo único não é contado uma vez para cada repositório.",
        "O modelo documentado conta o colaborador uma vez dentro do escopo da conta relevante.",
        "O consumo de licenças não é determinado pela frequência diária de pushes."
      ],
      "concept": "Licenciamento de colaborador externo",
      "hints": [
        "O acesso a vários repositórios cria múltiplas identidades?",
        "Qual categoria de colaborador é importante para licenças pagas na organização?"
      ]
    },
    "admin-060": {
      "prompt": "Uma equipe financeira pergunta por que sua conta GitHub excede a assinatura básica da licença corporativa. Qual é a primeira explicação mais precisa a ser investigada?",
      "choices": [
        "Cada associação adicional à equipe cria automaticamente outra licença corporativa",
        "Os preços empresariais sempre cobram uma licença separada para cada repositório que um usuário pode acessar",
        "Os redirecionamentos SAML criam uma licença licenciada separada por login",
        "A conta pode incluir assinaturas adicionais e uso medido do produto"
      ],
      "explanations": [
        "As atribuições de equipe não criam automaticamente licenças de usuário corporativo separadas.",
        "O acesso ao repositório não é cobrado como uma nova licença corporativa para cada repositório.",
        "A frequência de autenticação SAML não define identidades licenciadas separadas.",
        "Assinaturas por licença e produtos baseados no uso podem contribuir para a fatura."
      ],
      "concept": "Assinatura versus faturamento de consumo",
      "hints": [
        "A conta usa produtos além do plano básico?",
        "Quais linhas de faturamento refletem o consumo e não as pessoas?"
      ]
    },
    "admin-061": {
      "prompt": "Um administrador deseja uma linha de base atual de utilização de licença antes de uma conversa de renovação. Quais evidências eles deveriam priorizar?",
      "choices": [
        "As informações de uso de licença da empresa e registros de faturamento relevantes",
        "Apenas o número de repositórios criados este ano",
        "Uma soma de contagens de membros da organização sem desduplicar identidades",
        "Somente colaboradores que enviaram código nas últimas vinte e quatro horas"
      ],
      "explanations": [
        "A licença empresarial e os registros de cobrança refletem o uso licenciado que está sendo avaliado.",
        "A criação do repositório não é a unidade de consumo de licenças corporativas.",
        "Assinaturas duplicadas podem exagerar os usuários licenciados únicos.",
        "Um subconjunto de contribuição de um dia perde usuários licenciados com outros padrões de atividade válidos."
      ],
      "concept": "Evidência de utilização de licença",
      "hints": [
        "Qual fonte registra diretamente o direito e o consumo?",
        "As contagens de conteúdo do repositório são um proxy confiável para pessoas licenciadas?"
      ]
    },
    "admin-062": {
      "prompt": "Um serviço em nuvem issue afeta muitos repositórios após verificações de acesso local e configuração de rede. Quais informações tornam um escalonamento de suporte mais acionável?",
      "choices": [
        "Apenas a frase GitHub está quebrada",
        "Escopo afetado, carimbos de data/hora, sintomas reproduzíveis e identificadores de solicitação relevantes",
        "Uma lista não editada de todas as senhas de usuários",
        "Uma exigência para excluir a empresa imediatamente"
      ],
      "explanations": [
        "Um relatório inespecífico fornece pouco valor diagnóstico.",
        "Evidências com escopo definido e reproduzíveis ajudam o Suporte a correlacionar e investigar a falha.",
        "As senhas não devem ser compartilhadas como prova de diagnóstico.",
        "A exclusão corporativa é destrutiva e não fornece contexto de solução de problemas."
      ],
      "concept": "Escalação de suporte acionável",
      "hints": [
        "O que permitiria que outro operador reproduzisse ou localizasse a solicitação com falha?",
        "Quais detalhes descrevem o impacto sem expor credenciais?"
      ]
    },
    "admin-063": {
      "prompt": "Antes de tratar um relatório de interrupção generalizada do GitHub.com como um defeito de configuração local, qual recurso oficial um administrador deve verificar?",
      "choices": [
        "README de um repositório público não relacionado",
        "Reflog local de um desenvolvedor",
        "GitHub Status",
        "Uma repostagem aleatória nas redes sociais sem fonte"
      ],
      "explanations": [
        "Um README não relacionado não é uma informação oficial sobre a integridade do serviço.",
        "Um reflog local descreve alterações de referência local, não a disponibilidade da plataforma.",
        "GitHub Status informa os incidentes oficiais do serviço e seu estado operacional.",
        "Repostagens não verificadas não substituem a fonte de status oficial."
      ],
      "concept": "Triagem de incidentes de plataforma",
      "hints": [
        "Este poderia ser um incidente upstream compartilhado?",
        "Onde o operador de serviço publica informações de saúde?"
      ]
    },
    "admin-064": {
      "prompt": "Uma empresa planeja adotar a residência de dados na nuvem e assume que todos os aplicativos de terceiros usados no GitHub.com funcionarão inalterados. Qual preparação é mais apropriada?",
      "choices": [
        "Suponha que todos os aplicativos sejam instalados automaticamente no novo host",
        "Publique o conteúdo do repositório privado para testar a compatibilidade",
        "Desative todas as políticas de autenticação indefinidamente",
        "Revise os recursos e a compatibilidade de integração para o ambiente GHE.com"
      ],
      "explanations": [
        "A instalação do aplicativo e a compatibilidade do host devem ser estabelecidas e não presumidas.",
        "A divulgação pública não é um teste de compatibilidade seguro.",
        "A remoção da autenticação não é necessária para o planejamento da integração.",
        "As implantações de residência de dados têm considerações de host e recursos que as integrações devem oferecer suporte."
      ],
      "concept": "Preparação para integração de residência de dados",
      "hints": [
        "A mudança para um host GitHub diferente afeta os endpoints de integração?",
        "Quais dependências devem ser verificadas antes da migração?"
      ]
    },
    "admin-065": {
      "prompt": "Um administrador GHES deseja que uma réplica de failover atenda ativamente ao tráfego de gravação comum junto com o primário, simplesmente porque ele existe. Qual correção corresponde ao design documentado do HA?",
      "choices": [
        "GHES HA usa um arranjo active/passive em vez de gravações active/active automáticas",
        "Uma réplica é apenas um arquivo ZIP de código-fonte",
        "Todas as réplicas aceitam gravações independentes e mesclam posteriormente",
        "O failover nunca requer planejamento de roteamento de tráfego"
      ],
      "explanations": [
        "A réplica HA documentada é um modo de espera com replicação, não um gravador ativo independente.",
        "Uma réplica é um dispositivo, não apenas um arquivo de origem.",
        "As gravações simultâneas independentes não são o modelo active/passive documentado.",
        "O redirecionamento de tráfego deve ser planejado e gerenciado para failover."
      ],
      "concept": "Modelo operacional GHES HA",
      "hints": [
        "Qual aparelho é autoritário durante a operação normal?",
        "O que significa espera para o tráfego de aplicativos?"
      ]
    },
    "admin-066": {
      "prompt": "Um incidente GHES aconteceu há seis dias e o suporte precisa de registros que cubram esse período. O pacote de suporte padrão contém apenas a janela padrão recente. O que o administrador deve avaliar?",
      "choices": [
        "Uma origem ZIP da ramificação padrão",
        "Um pacote de suporte estendido cobrindo a janela documentada mais longa",
        "O arquivo de licença do repositório",
        "Alterar o relógio do aparelho para seis dias antes"
      ],
      "explanations": [
        "Uma origem ZIP não fornece logs históricos do dispositivo.",
        "O pacote estendido inclui uma janela de log recente mais longa que o pacote padrão.",
        "Um arquivo de licença de software não está relacionado aos logs de serviço.",
        "Alterar o relógio do sistema não recupera logs antigos e pode criar problemas operacionais."
      ],
      "concept": "Selecionando cobertura de tempo de diagnóstico",
      "hints": [
        "O incidente solicitado está dentro da janela de coleta padrão?",
        "Qual opção de coleta suportada amplia essa cobertura?"
      ]
    },
    "admin-067": {
      "prompt": "Uma empresa deseja um comportamento CI consistente em muitos repositórios, ao mesmo tempo que permite correções mantidas centralmente. Qual mecanismo de padronização os administradores devem recomendar?",
      "choices": [
        "Copie um fluxo de trabalho uma vez e nunca acompanhe alterações futuras",
        "Armazene instruções executáveis CI apenas em um e-mail",
        "Use fluxos de trabalho reutilizáveis com controle de versão regidos pela política empresarial",
        "Dê a cada repositório um fluxo de trabalho não relacionado e não revisado"
      ],
      "explanations": [
        "As cópias não rastreadas são desviadas e não recebem atualizações centrais controladas.",
        "Email não é um padrão CI executável e controlado por versão.",
        "Fluxos de trabalho reutilizáveis fornecem uma implementação compartilhada com controle de versão com governança de políticas.",
        "Fluxos de trabalho não relacionados e não revisados prejudicam a consistência."
      ],
      "concept": "Padrões de fluxo de trabalho governados centralmente",
      "hints": [
        "Como uma correção comum do CI alcançará muitos repositórios?",
        "O que torna a implementação compartilhada auditável e reutilizável?"
      ]
    },
    "admin-068": {
      "prompt": "Um administrador está explicando as opções de implantação do GitHub a um comitê de risco. Qual distinção é precisa?",
      "choices": [
        "Enterprise Managed Users é um substituto para backups GitHub Enterprise Server",
        "Residência de dados na nuvem significa que o cliente corrige os servidores de aplicativos do GitHub",
        "Contas pessoais e usuários gerenciados são dois nomes para o mesmo modelo de ciclo de vida",
        "O local de implantação e o modelo de identidade são opções de design relacionadas, mas não são o mesmo conceito"
      ],
      "explanations": [
        "As identidades gerenciadas não fornecem backup ou recuperação de desastres.",
        "A residência de dados na nuvem continua sendo um serviço operado por GitHub.",
        "Os dois modelos de conta diferem em termos de provisionamento, propriedade e limites de colaboração.",
        "Hospedagem, residência e ciclo de vida da identidade devem ser avaliados explicitamente."
      ],
      "concept": "Separando decisões de hospedagem e identidade",
      "hints": [
        "Quem opera a plataforma e quem governa as identidades?",
        "A alteração da autenticação por si só pode realocar os dados armazenados?"
      ]
    },
    "admin-069": {
      "prompt": "Um operador GHES descobre que cada repositório está lento e o volume de dados persistentes do dispositivo está quase cheio. Qual próximo passo se adapta melhor à responsabilidade do administrador?",
      "choices": [
        "Investigue a capacidade e siga o procedimento documentado de expansão de armazenamento específico da versão",
        "Dê a todos os usuários o repositório Admin para melhorar o rendimento do disco",
        "Remova SAML porque aloca armazenamento de repositório",
        "Pedir aos desenvolvedores que renomeiem seus remotos locais do Git"
      ],
      "explanations": [
        "A capacidade da instância é um issue operacional que os administradores podem investigar e corrigir com segurança.",
        "As alterações na função do repositório não aumentam a capacidade de armazenamento.",
        "A remoção da autenticação não é uma solução para a capacidade de armazenamento.",
        "Os nomes remotos nas estações de trabalho não expandem o armazenamento persistente do dispositivo."
      ],
      "concept": "Administração de capacidade GHES",
      "hints": [
        "O sintoma aponta para autorização ou restrição de recursos compartilhados?",
        "Qual métrica de instância apoia uma ação operacional concreta?"
      ]
    },
    "admin-070": {
      "prompt": "Um departamento deseja que cada repositório identifique a equipe responsável pela revisão das alterações na infraestrutura. Qual arquivo foi criado especificamente para essa convenção?",
      "choices": [
        "dependabot.yml",
        "CODEOWNERS",
        "LICENSE",
        ".gitignore"
      ],
      "explanations": [
        "A configuração Dependabot controla atualizações de dependência, não roteamento de propriedade de código.",
        "CODEOWNERS mapeia caminhos para pessoas ou equipes responsáveis para solicitações de revisão.",
        "LICENSE estabelece termos legais em vez de responsabilidade do revisor.",
        ".gitignore exclui arquivos do rastreamento em vez de atribuir revisores."
      ],
      "concept": "Documentando a responsabilidade da revisão",
      "hints": [
        "Qual convenção mapeia caminhos para os revisores?",
        "A meta depende da automação, dos termos legais ou da propriedade?"
      ]
    },
    "admin-071": {
      "prompt": "Uma empresa publica uma norma de ramificação, mas não chegou a um acordo sobre como as exceções serão aprovadas. Qual é o melhor plano de implementação administrativa?",
      "choices": [
        "Conceda privilégios de bypass permanentes a todos os usuários",
        "Aplique-o imediatamente, sem verificar os fluxos de trabalho de lançamento existentes",
        "Teste os controles, documente exceções no escopo e valide os fluxos de trabalho afetados antes da aplicação ampla",
        "Exclua ramificações que não correspondam à proposta sem consultar os mantenedores"
      ],
      "explanations": [
        "O bypass permanente universal anula o padrão proposto.",
        "A aplicação não validada corre o risco de interromper os fluxos de trabalho de lançamento legítimos.",
        "Um processo piloto e de exceção explícita equilibra a governança com a continuidade operacional.",
        "A exclusão não aprovada de ramificações é destrutiva e não é uma implementação responsável."
      ],
      "concept": "Gestão de mudanças de governança",
      "hints": [
        "Quais fluxos de trabalho legítimos uma regra não testada poderia interromper?",
        "Como as exceções podem permanecer explícitas em vez de se tornarem um desvio irrestrito?"
      ]
    },
    "admin-072": {
      "prompt": "Uma parte interessada deseja que o Suporte GitHub decida quais funcionários devem receber acesso Write a um repositório financeiro. Quem deve ser o proprietário dessa decisão de autorização comercial?",
      "choices": [
        "Qualquer visitante não autenticado",
        "O autor do commit mais recente",
        "O fornecedor do cliente Git",
        "Os administradores autorizados e proprietários de recursos da organização"
      ],
      "explanations": [
        "Os visitantes não têm autoridade para determinar o acesso a empresas privadas.",
        "A autoria do commit por si só não atribui responsabilidade de governança de acesso.",
        "Um fornecedor de cliente Git não controla a política de autorização da empresa.",
        "As decisões de acesso comercial pertencem ao processo de governança autorizado do cliente."
      ],
      "concept": "Responsabilidades do cliente versus suporte",
      "hints": [
        "A solicitação está solucionando um defeito da plataforma ou decidindo o direito?",
        "Quem entende e autoriza a necessidade comercial de acesso?"
      ]
    },
    "admin-073": {
      "prompt": "Uma empresa possui assinaturas GitHub e deseja determinar se um complemento específico está incluído antes de ativá-lo amplamente. Qual abordagem é mais segura?",
      "choices": [
        "Verifique o direito atual do produto e a documentação de cobrança da conta real",
        "Suponha que todos os recursos empresariais tenham uso ilimitado incluído",
        "Trate a visibilidade de um botão de ativação como prova de que todo o consumo é pré-pago",
        "Habilite o complemento em qualquer lugar e investigue somente após o faturamento"
      ],
      "explanations": [
        "Os direitos e cobranças de uso dependem do produto real e do contrato da conta.",
        "As assinaturas empresariais não implicam uso ilimitado e incluído para todos os produtos.",
        "Um recurso pode estar disponível para ativação enquanto seu uso ainda incorrer em custos adicionais.",
        "A ampla capacitação sem verificação do faturamento pode criar custos evitáveis."
      ],
      "concept": "Administração que considera os direitos de uso",
      "hints": [
        "O que distingue a disponibilidade do consumo incluído?",
        "Quais evidências específicas da conta devem preceder a capacitação ampla?"
      ]
    },
    "admin-074": {
      "prompt": "Uma ramificação do repositório corresponde a dois rulesets ativos: um requer revisões e outro requer uma verificação de status de segurança. O que uma mesclagem normal sem bypass deve satisfazer?",
      "choices": [
        "Apenas o ruleset criado primeiro",
        "Ambos os rulesets aplicáveis",
        "Apenas o ruleset com o nome mais curto",
        "Nenhum dos dois, porque os rulesets sobrepostos se cancelam"
      ],
      "explanations": [
        "A ordem de criação não descarta outros rulesets ativos aplicáveis.",
        "Os rulesets aplicáveis são em camadas, portanto, aplicam-se os requisitos de revisão e status.",
        "Os nomes dos conjuntos de regras não determinam a precedência.",
        "A sobreposição de rulesets não cancela seus requisitos."
      ],
      "concept": "Aplicação ruleset em camadas",
      "hints": [
        "As seleções rulesets são mutuamente exclusivas?",
        "O que significa vários controles serem aplicados à mesma ramificação?"
      ]
    },
    "admin-075": {
      "prompt": "Em um plano que apoia a avaliação ruleset, uma organização deseja observar os prováveis efeitos de uma regra proposta sem bloquear ainda os desenvolvedores. Qual estado de aplicação é apropriado?",
      "choices": [
        "Ativo com todos os desenvolvedores com bypass permanente concedido",
        "Desativado sem dados de avaliação",
        "Evaluate",
        "Exclua o ruleset após cada push"
      ],
      "explanations": [
        "O desvio universal enfraquece o teste e difere da avaliação de regras sem bloqueio.",
        "As regras desativadas não fornecem a avaliação de aplicação pretendida.",
        "Avalie os resultados das regras dos relatórios sem aplicá-las.",
        "A exclusão repetida impede um piloto estável e um histórico de avaliação útil."
      ],
      "concept": "Implementação ruleset sem bloqueio",
      "hints": [
        "Como um controle pode ser avaliado sem rejeitar o trabalho?",
        "Qual estado distingue a observação da fiscalização?"
      ]
    },
    "admin-076": {
      "prompt": "Um aplicativo de automação de releases precisa de uma exceção aprovada com escopo restrito para um ruleset de ramificações. Qual abordagem preserva melhor a responsabilização?",
      "choices": [
        "Desative todas as regras de ramificação para todos os contribuidores",
        "Conceda acesso de bypass a todos os membros da organização",
        "Faça com que o aplicativo use uma senha compartilhada do proprietário",
        "Conceda um bypass documentado apenas ao aplicativo aprovado para o ruleset relevante"
      ],
      "explanations": [
        "A remoção global descarta proteções não relacionadas.",
        "O desvio amplo anula a exceção limitada pretendida.",
        "As senhas compartilhadas obscurecem a atribuição e são credenciais de aplicativos inadequadas.",
        "Um desvio de aplicativo com escopo mantém a exceção explícita, ao mesmo tempo que mantém outra governança."
      ],
      "concept": "Exceção a um ruleset com escopo limitado",
      "hints": [
        "Qual identidade realmente precisa da exceção?",
        "Como pode o resto da população contribuinte permanecer governado?"
      ]
    },
    "admin-077": {
      "prompt": "Uma organização quer impedir que colaboradores comuns reescrevam o histórico da ramificação principal com um force push. Qual regra atende diretamente a esse objetivo?",
      "choices": [
        "Bloquear force pushes na ramificação de destino",
        "Exigir um modelo issue",
        "Habilitar gráfico de dependência",
        "Exigir uma descrição do repositório"
      ],
      "explanations": [
        "O bloqueio de pushes forçados impede essa classe de atualização de reescrita do histórico.",
        "Os modelos de problemas não restringem as atualizações de referência do Git.",
        "O grafo de dependências identifica dependências de software, em vez de controlar force pushes.",
        "As descrições são metadados e não protegem o histórico da ramificação."
      ],
      "concept": "Impedindo reescritas do histórico de ramificações",
      "hints": [
        "Qual operação do Git reescreve uma referência de branch existente?",
        "O controle proposto rege atualizações de referência ou metadados de repositório?"
      ]
    },
    "admin-078": {
      "prompt": "Um pull request recebe aprovação e seu autor envia um novo código substancial. A organização deseja que a aprovação mais antiga não satisfaça o requisito de revisão. Qual configuração aborda isso?",
      "choices": [
        "Permitir force pushes",
        "Dispensar aprovações de solicitação pull obsoletas quando novos commits forem enviados",
        "Torne o repositório interno",
        "Desabilitar verificações de status necessárias"
      ],
      "explanations": [
        "A permissão de envio forçado não invalida aprovações desatualizadas.",
        "A dispensa de aprovações obsoletas requer a revisão das alterações feitas após a aprovação.",
        "A visibilidade não determina se uma aprovação está obsoleta.",
        "A remoção das verificações de status enfraquece um controle de validação separado."
      ],
      "concept": "Revise o frescor",
      "hints": [
        "O que o revisor realmente aprovou?",
        "Como a validade da aprovação deve mudar quando o código revisado for alterado?"
      ]
    },
    "admin-079": {
      "prompt": "Uma verificação de status necessária deve ser relatada pelo CI GitHub App aprovado, e não por outra integração usando o mesmo nome de verificação. Qual configuração é mais diretamente relevante?",
      "choices": [
        "Exigir uma verificação por nome ao aceitar resultados de qualquer fonte",
        "Exigir commits assinado sem restringir o produtor de verificação de status",
        "Selecione o aplicativo de origem esperado para a verificação de status necessária",
        "Exigir que a ramificação esteja atualizada sem restringir a origem da verificação"
      ],
      "explanations": [
        "O nome por si só não identifica a integração aprovada como o produtor.",
        "As assinaturas de confirmação autenticam commits em vez de verificar a proveniência do status.",
        "Vincular a verificação necessária a um aplicativo esperado restringe qual produtor a satisfaz.",
        "Exigir uma ramificação atualizada trata do estado da ramificação testada, não da identidade de quem gera a verificação."
      ],
      "concept": "Origem da verificação obrigatória",
      "hints": [
        "O nome de uma verificação é suficiente para estabelecer quem a gerou?",
        "Que identidade adicional pode ser associada ao requisito?"
      ]
    },
    "admin-080": {
      "prompt": "Uma equipe de conformidade quer que os commits de uma ramificação protegida tenham assinaturas criptográficas verificadas. Qual regra é a mais adequada?",
      "choices": [
        "Exigir histórico linear",
        "Exigir duas aprovações de solicitação pull",
        "Bloquear force pushes",
        "Exigir commits assinado"
      ],
      "explanations": [
        "A história linear governa a estrutura de mesclagem em vez de assinaturas criptográficas.",
        "A aprovação do revisor não estabelece uma assinatura verificada em cada commit.",
        "As restrições de envio forçado protegem as atualizações de referência em vez de verificar as assinaturas commit.",
        "A regra commit assinada impõe os requisitos de verificação de assinatura documentada de GitHub."
      ],
      "concept": "Requisitos de assinatura de commit",
      "hints": [
        "Qual controle diz respeito à integridade do commit em vez do texto de revisão?",
        "Que evidências o GitHub verifica para um commit assinado?"
      ]
    },
    "admin-081": {
      "prompt": "Em um plano que oferece suporte ao push rulesets, uma organização deseja bloquear commits contendo arquivos que correspondam a um padrão de caminho proibido. Qual controle atende ao requisito?",
      "choices": [
        "Um push ruleset restringindo caminhos de arquivo",
        "Um aviso README sozinho",
        "Um marco issue",
        "Uma função de faturamento da organização"
      ],
      "explanations": [
        "Push rulesets pode restringir caminhos de arquivo correspondentes no commits de entrada.",
        "Um aviso é consultivo e não bloqueia um push.",
        "Os marcos rastreiam o trabalho em vez de inspecionar os caminhos dos arquivos recebidos.",
        "As funções de cobrança não restringem o conteúdo do repositório."
      ],
      "concept": "Restrições de caminho de arquivo em pushes",
      "hints": [
        "O controle deve agir antes que o código chegue ao repositório?",
        "Qual família de regras inspeciona o conteúdo enviado em vez de apenas mesclar?"
      ]
    },
    "admin-082": {
      "prompt": "Uma empresa deseja controlar se seus repositórios privados podem ser bifurcados. Qual superfície administrativa é diretamente relevante?",
      "choices": [
        "Somente restrições de push forçado do branch padrão",
        "Políticas de bifurcação de repositórios corporativos e organizacionais",
        "Somente restrições de aplicativos da organização OAuth",
        "Somente regras que exigem aprovação do proprietário do código antes da mesclagem"
      ],
      "explanations": [
        "As restrições de envio forçado não determinam se um fork privado pode ser criado.",
        "As políticas de bifurcação controlam se o repositório privado forks é permitido dentro dos limites suportados.",
        "A aprovação OAuth não substitui a política de bifurcação de repositório privado.",
        "As aprovações de mesclagem regem as alterações em vez da criação de fork."
      ],
      "concept": "Governança de bifurcação de repositório privado",
      "hints": [
        "Onde podem ser definidas políticas de gerenciamento de repositórios aplicadas centralmente?",
        "A restrição desejada para alterações em uma ramificação ou criação de um repositório é fork?"
      ]
    },
    "admin-083": {
      "prompt": "Um usuário se conecta a partir de um endereço IP em uma lista de permissões corporativas, mas não tem permissão para um repositório privado. O que o administrador deve esperar?",
      "choices": [
        "A lista de permissões concede automaticamente ao repositório Write",
        "O repositório se torna legível para qualquer pessoa nessa rede",
        "O usuário ainda precisa de autorização do repositório",
        "A lista de permissões substitui SAML e todos os outros requisitos de autenticação"
      ],
      "explanations": [
        "Um endereço de rede permitido não concede uma função de repositório.",
        "A permissão da rede não torna o conteúdo privado público para a rede.",
        "As restrições IP são uma condição de acesso adicional e não uma substituição de permissões.",
        "A política de rede não substitui os controles de identidade e autorização de recursos."
      ],
      "concept": "Controles de rede versus autorização",
      "hints": [
        "A satisfação de uma condição de acesso satisfaz todas elas?",
        "Qual controle determina quem pode ler o repositório privado?"
      ]
    },
    "admin-084": {
      "prompt": "Um administrador de segurança precisa de um pacote repetível de configurações de segurança de repositório que possa ser aplicado em muitos repositórios elegíveis. Qual recurso eles devem avaliar?",
      "choices": [
        "Apenas um modelo de repositório contendo um documento de política de segurança",
        "Apenas um ruleset de ramificações que exige revisões",
        "Apenas uma exportação de alertas de segurança existentes",
        "Configurações de segurança"
      ],
      "explanations": [
        "Um documento de política copiado não configura recursos de segurança do repositório ativo.",
        "As regras de revisão de ramificação não agrupam as configurações do recurso de segurança do repositório.",
        "Uma exportação de alerta relata descobertas em vez de aplicar configuração de recursos.",
        "As configurações de segurança agrupam configurações de recursos de segurança para aplicativos em escala."
      ],
      "concept": "Configurações de segurança em escala",
      "hints": [
        "O objetivo é relatar descobertas ou aplicar uma configuração de recursos consistente?",
        "Qual recurso gerencia várias configurações de segurança juntas?"
      ]
    },
    "admin-085": {
      "prompt": "Uma organização anexou uma configuração de segurança aos repositórios, mas deseja evitar que os administradores do repositório substituam as configurações gerenciadas onde a aplicação é suportada. O que ele deve configurar?",
      "choices": [
        "Enforcement da configuração de segurança",
        "Uma descrição mais longa do repositório",
        "Apenas um e-mail de notificação compartilhado",
        "Um cessionário issue padrão"
      ],
      "explanations": [
        "A aplicação restringe as alterações no nível do repositório às definições de configuração gerenciadas.",
        "As descrições não bloqueiam as configurações dos recursos de segurança.",
        "As notificações não impõem consistência de configuração.",
        "A atribuição de problemas não está relacionada a substituições de configurações de segurança."
      ],
      "concept": "Configurações de segurança impostas",
      "hints": [
        "Anexar uma configuração proíbe necessariamente substituições locais?",
        "Qual estado político adicional controla essa distinção?"
      ]
    },
    "admin-086": {
      "prompt": "Um gerente de segurança deseja encontrar repositórios com proteções ausentes e comparar o risco de alerta em toda a organização, em vez de abrir cada repositório separadamente. Qual visualização foi projetada para isso?",
      "choices": [
        "Somente o log de auditoria da organização",
        "Security overview",
        "Somente o relatório de uso de faturamento",
        "Gráfico de dependência de um único repositório"
      ],
      "explanations": [
        "Os eventos administrativos históricos não fornecem a mesma visão geral de cobertura e risco.",
        "A visão geral da segurança fornece visibilidade em nível de organização sobre cobertura e riscos de segurança.",
        "As cobranças do produto por si só não resumem proteções e alertas ausentes.",
        "Um gráfico de dependência não agrega toda a cobertura de segurança do repositório."
      ],
      "concept": "Visibilidade da postura de segurança da organização",
      "hints": [
        "O repositório de evidências necessário é local ou agregado?",
        "Qual visão une cobertura com risco de segurança?"
      ]
    },
    "admin-087": {
      "prompt": "Um auditor GitHub Enterprise Cloud vê apenas três meses de eventos não-Git na visualização de log de auditoria padrão e precisa de um evento de quatro meses atrás. Qual é o melhor próximo passo dentro do período de retenção documentado?",
      "choices": [
        "Suponha que todos os eventos com mais de três meses sejam excluídos permanentemente",
        "Pesquise títulos do repositório issue",
        "Use um intervalo de datas criado explícito na pesquisa do log de auditoria",
        "Altere o fuso horário do usuário para recuperar o evento"
      ],
      "explanations": [
        "O escopo de exibição padrão é menor que a retenção de auditoria não-Git documentada.",
        "Os títulos das emissões não substituem eventos de auditoria administrativa.",
        "Um intervalo de datas explícito pode recuperar eventos retidos mais antigos além da visualização padrão.",
        "As alterações de fuso horário não expandem a janela de pesquisa do log de auditoria."
      ],
      "concept": "Janela de exibição de auditoria versus retenção",
      "hints": [
        "A visualização padrão e a janela de dados retidos são idênticas?",
        "Qual restrição de pesquisa controla o período de tempo?"
      ]
    },
    "admin-088": {
      "prompt": "Uma política de conformidade exige que as evidências de auditoria corporativa permaneçam pesquisáveis por vários anos, além da retenção nativa do GitHub. Qual design aborda melhor isso?",
      "choices": [
        "Confie na página de registro de auditoria padrão para sempre",
        "Mantenha apenas capturas de tela da página inicial da empresa",
        "Aumente a retenção de artefatos do repositório e assuma que isso afeta os eventos de auditoria",
        "Transmita ou exporte eventos de auditoria para um sistema de retenção externo aprovado"
      ],
      "explanations": [
        "O log de auditoria nativo tem retenção finita em vez de armazenamento indefinido.",
        "As capturas de tela da página inicial não preservam as evidências de auditoria no nível do evento.",
        "A retenção de artefatos de fluxo de trabalho não define a retenção de log de auditoria empresarial.",
        "A retenção externa pode preservar as evidências de auditoria de acordo com a política da organização."
      ],
      "concept": "Retenção de evidências de conformidade a longo prazo",
      "hints": [
        "O que acontece quando a janela de retenção da plataforma expira?",
        "Qual sistema deve assumir a responsabilidade pela obrigação de retenção mais longa?"
      ]
    },
    "admin-089": {
      "prompt": "Uma investigação deve conectar atividades suspeitas do API a um token de acesso específico, e não apenas ao seu usuário. Qual capacidade de auditoria empresarial é mais relevante?",
      "choices": [
        "Identificando eventos de log de auditoria realizados por um token de acesso",
        "Filtrando apenas por ator e assumindo que todas as credenciais do ator são equivalentes",
        "Usando apenas datas de expiração de token para inferir cada chamada API",
        "Usando apenas nomes de autores do repositório commit para identificar credenciais API"
      ],
      "explanations": [
        "A identificação de auditoria específica do token ajuda a rastrear a credencial usada para atividades auditadas.",
        "A filtragem somente de ator não consegue distinguir diversas credenciais usadas por essa pessoa.",
        "Os metadados de expiração não enumeram a atividade do token.",
        "A atribuição do autor do commit não estabelece qual credencial API executou uma ação."
      ],
      "concept": "Atribuição de auditoria em nível de credencial",
      "hints": [
        "Uma pessoa pode usar várias credenciais independentes?",
        "Qual dimensão de auditoria distingue essas credenciais?"
      ]
    },
    "admin-090": {
      "prompt": "A verificação de segredos detecta uma credencial de produção ativa no histórico do repositório. Qual é a ação de contenção imediata mais importante?",
      "choices": [
        "Exclua apenas a linha visível do README mais recente",
        "Revogar ou alternar a credencial no serviço emissor",
        "Renomeie o repositório",
        "Ignore o alerta porque o repositório é privado"
      ],
      "explanations": [
        "A remoção de uma linha visível não invalida as credenciais expostas ou as cópias históricas.",
        "A revogação ou rotação impede o uso adicional da credencial exposta.",
        "A nomenclatura do repositório não altera a validade da credencial.",
        "A exposição do repositório privado ainda garante a contenção de credenciais."
      ],
      "concept": "Respondendo a credenciais expostas",
      "hints": [
        "A remoção do texto pode invalidar uma credencial já copiada em outro lugar?",
        "Onde é controlada a autoridade real da credencial?"
      ]
    },
    "admin-091": {
      "prompt": "Uma equipe deseja que os segredos codificados com suporte sejam bloqueados antes de entrarem em um repositório, em vez de depender apenas de alertas após o push. Qual recurso deve ser ativado quando disponível?",
      "choices": [
        "Atualizações de versão Dependabot",
        "Um modelo de nota de lançamento",
        "Proteção de push da verificação de segredos",
        "Uma descrição do ramo"
      ],
      "explanations": [
        "As atualizações de dependência não inspecionam o código enviado em busca de credenciais incorporadas.",
        "Os modelos de notas de lançamento não bloqueiam pushes contendo segredos.",
        "A proteção push verifica os segredos suportados durante um push e pode bloqueá-lo.",
        "As descrições não são controles de verificação de conteúdo."
      ],
      "concept": "Impedindo a introdução secreta",
      "hints": [
        "Em que ponto a proteção deve agir?",
        "Qual recurso de segurança inspeciona credenciais durante a operação push?"
      ]
    },
    "admin-092": {
      "prompt": "Um repositório usa bypass delegado para proteção contra push. Um desenvolvedor diz que um valor detectado é um acessório de teste. Qual é a melhor resposta governada?",
      "choices": [
        "Desative a proteção contra push em toda a organização",
        "Coloque o valor em um arquivo diferente para escapar do detector",
        "Dê a cada colaborador um bypass permanente",
        "Use o processo de solicitação de bypass configurado com justificativa e revisão autorizada"
      ],
      "explanations": [
        "A deficiência global é desproporcional a uma detecção contestada.",
        "Mover um segredo para evitar a detecção não estabelece que ele seja seguro.",
        "O desvio universal permanente descarta o limite de revisão delegada.",
        "O desvio delegado permite uma decisão autorizada com contexto em vez de desativação geral."
      ],
      "concept": "Exceções de proteção contra push governadas",
      "hints": [
        "Como avaliar uma detecção contestada sem enfraquecer a proteção de todos os demais?",
        "Quem está autorizado a aprovar esta exceção?"
      ]
    },
    "admin-093": {
      "prompt": "Uma organização emite credenciais em um formato interno que não é coberto por um padrão de segredos integrado compatível. Em um plano elegível, o que os administradores devem avaliar?",
      "choices": [
        "Um padrão de verificação de segredo personalizado testado",
        "Habilite apenas verificações de validade para padrões de provedores suportados existentes",
        "Habilite apenas alertas de vulnerabilidade de dependência",
        "Exigir apenas uma verificação de status de leitura de código para descobertas CodeQL"
      ],
      "explanations": [
        "Os padrões personalizados podem detectar segredos específicos da organização e devem ser validados antes da implementação.",
        "A verificação de validade dos padrões existentes não define um detector para o novo formato de credencial.",
        "Alertas de vulnerabilidade de dependência não identificam credenciais incorporadas personalizadas.",
        "Um requisito de status CodeQL não adiciona por si só um padrão de segredo personalizado."
      ],
      "concept": "Detecção de segredo específico da organização",
      "hints": [
        "Uma credencial personalizada corresponde necessariamente a um padrão de provedor integrado?",
        "Como a detecção pode ser adaptada e testada antes da ampla habilitação?"
      ]
    },
    "admin-094": {
      "prompt": "Um administrador não vê alertas de verificação de segredos e conclui que o repositório não contém credenciais confidenciais de nenhum tipo. Qual é a avaliação mais precisa?",
      "choices": [
        "Nenhum alerta prova que todos os dados históricos estão seguros",
        "A cobertura da detecção depende dos recursos habilitados e dos padrões reconhecidos, portanto a ausência de alertas não é prova",
        "A verificação de segredos só pode inspecionar nomes de repositórios",
        "Um repositório privado nunca pode conter um segredo exposto"
      ],
      "explanations": [
        "A ausência de detecções não é garantia de cobertura completa de dados sensíveis.",
        "A cobertura e a configuração limitam o que o scanner pode detectar.",
        "A varredura secreta examina o conteúdo do repositório compatível, não apenas os nomes.",
        "Os segredos podem ser expostos a terceiros não autorizados, mesmo em repositórios privados."
      ],
      "concept": "Limites das evidências de detecção de segurança",
      "hints": [
        "Que suposições sobre a cobertura da detecção fundamentam a conclusão?",
        "Nenhum issue detectado é equivalente a provar que não existe issue?"
      ]
    },
    "admin-095": {
      "prompt": "Depois de rotacionar um token vazado, um mantenedor quer encerrar o alerta de verificação de segredos. Qual prática de encerramento oferece melhor suporte a investigações futuras?",
      "choices": [
        "Escolha qualquer motivo apenas para reduzir a contagem de aberturas",
        "Exclua a evidência de auditoria primeiro",
        "Registre a resolução precisa e retenha o contexto de resposta relevante",
        "Marcar o alerta como falso positivo mesmo que o token estivesse ativo"
      ],
      "explanations": [
        "Uma razão arbitrária corrompe o registro do incidente.",
        "A destruição de evidências prejudica a revisão posterior.",
        "A resolução precisa preserva a distinção entre contenção e detecção falsa.",
        "Um token vazado ao vivo não é um falso positivo apenas porque foi rotacionado."
      ],
      "concept": "Resolução precisa de alertas de segurança",
      "hints": [
        "O que um futuro revisor precisará entender sobre o incidente?",
        "A correção altera se a detecção original era real?"
      ]
    },
    "admin-096": {
      "prompt": "Um repositório elegível precisa de análise com CodeQL com configuração inicial mínima de fluxo de trabalho. Qual configuração seu administrador normalmente deve avaliar primeiro?",
      "choices": [
        "SARIF manuscrito sem mecanismo de análise",
        "Um README alegando que as varreduras estão habilitadas",
        "Atualizações da versão Dependabot como uma substituição completa do CodeQL",
        "Configuração padrão de verificação de código"
      ],
      "explanations": [
        "SARIF é um formato de resultados e não analisa o código-fonte.",
        "A documentação por si só não configura a análise.",
        "As atualizações de dependência e a análise de origem CodeQL abordam diferentes riscos.",
        "GitHub recomenda a configuração padrão como ponto de partida para repositórios qualificados."
      ],
      "concept": "Iniciando CodeQL com configuração padrão",
      "hints": [
        "O repositório requer orquestração de compilação personalizada inicialmente?",
        "Qual configuração minimiza a quantidade de código de fluxo de trabalho a ser mantido?"
      ]
    },
    "admin-097": {
      "prompt": "Um repositório precisa de um fluxo de trabalho CodeQL com etapas de construção personalizadas e comportamento de análise que a configuração padrão não fornece. Qual direção é apropriada?",
      "choices": [
        "Use a configuração avançada e mantenha o fluxo de trabalho de análise necessário",
        "Configurar apenas agendamentos de atualização de versão Dependabot",
        "Alterar apenas a quantidade de revisões exigida pelo ruleset de ramificações",
        "Faça upload de um relatório SARIF existente e presuma que ele configura futuras compilações CodeQL personalizadas"
      ],
      "explanations": [
        "A configuração avançada oferece suporte a fluxos de trabalho CodeQL personalizados e configuração de construção.",
        "Os cronogramas de atualização de dependência não personalizam compilações de análise de origem.",
        "Os requisitos de contagem de revisões não definem as etapas de construção CodeQL.",
        "O upload dos resultados não estabelece um fluxo de trabalho de análise CodeQL personalizado e recorrente."
      ],
      "concept": "Fluxos de trabalho de análise CodeQL personalizados",
      "hints": [
        "Qual configuração oferece controle direto sobre o fluxo de trabalho de análise?",
        "Que manutenção extra vem com esse controle?"
      ]
    },
    "admin-098": {
      "prompt": "Uma empresa já usa um analisador estático de terceiros e deseja que seus resultados suportados sejam exibidos como alertas de verificação de código GitHub. Qual formato de intercâmbio a integração deve produzir?",
      "choices": [
        "Um ZIP de capturas de tela do repositório",
        "SARIF",
        "Uma lista de texto simples de nomes de ramificações do Git",
        "Um faturamento não estruturado CSV"
      ],
      "explanations": [
        "As capturas de tela não fornecem ingestão estruturada de resultados de verificação de código.",
        "A análise de código do GitHub oferece suporte a resultados SARIF formatados adequadamente.",
        "Os nomes das ramificações não são um formato de resultados de análise estática.",
        "Os registros de cobrança CSV não codificam resultados de verificação de código."
      ],
      "concept": "Interoperabilidade de leitura de código de terceiros",
      "hints": [
        "O GitHub requer seu próprio analisador para cada descoberta exibida?",
        "Qual formato padronizado representa os resultados da análise estática?"
      ]
    },
    "admin-099": {
      "prompt": "Uma equipe de segurança precisa detectar fluxos de dados inseguros no código de seu próprio aplicativo, e não apenas vulnerabilidades conhecidas em pacotes de terceiros. Qual capacidade GitHub melhor corresponde?",
      "choices": [
        "Apenas atualizações de versão do Dependabot",
        "Detecção de licença de repositório",
        "Análise de código com CodeQL",
        "Visibilidade dos membros da organização"
      ],
      "explanations": [
        "As atualizações de versão mantêm dependências em vez de analisar o fluxo de dados do aplicativo.",
        "A detecção de licença não identifica comportamento inseguro do código-fonte.",
        "CodeQL analisa o comportamento do código-fonte usando consultas de segurança.",
        "A visibilidade da associação não inspeciona o código do aplicativo."
      ],
      "concept": "Análise de código-fonte versus manutenção de dependências",
      "hints": [
        "O risco está na versão do pacote ou na implementação da aplicação?",
        "Qual ferramenta raciocina sobre o comportamento do código?"
      ]
    },
    "admin-100": {
      "prompt": "Um desenvolvedor acredita que uma descoberta de verificação de código é um falso positivo. Qual resposta preserva melhor a integridade do processo de segurança?",
      "choices": [
        "Desative todas as verificações imediatamente",
        "Exclua o fluxo de trabalho para que o alerta não fique mais visível",
        "Dispensar todos os alertas do mesmo idioma sem revisão",
        "Inspecione as evidências e descarte somente se justificado, registrando o motivo apropriado"
      ],
      "explanations": [
        "Uma conclusão contestada não justifica a perda de toda a cobertura da análise.",
        "A remoção da análise oculta descobertas futuras em vez de avaliar esta.",
        "A demissão em todo o idioma não é uma avaliação baseada em evidências.",
        "Uma demissão justificada e registrada com precisão preserva um registro de segurança útil."
      ],
      "concept": "Triagem de leitura de código baseada em evidências",
      "hints": [
        "Que evidências distinguem um falso positivo de um issue real?",
        "Como a decisão pode permanecer compreensível para outro revisor?"
      ]
    },
    "admin-101": {
      "prompt": "Em um plano de suporte, uma organização deseja que as mesclagens sejam bloqueadas quando uma ferramenta de verificação de código escolhida relatar alertas que atendam aos critérios de gravidade definidos. Qual controle foi projetado para isso?",
      "choices": [
        "Um ruleset que requer resultados de leitura de código com a ferramenta e limites selecionados",
        "Habilite apenas a execução da verificação sem um requisito de mesclagem",
        "Exige apenas commits assinado",
        "Exigir apenas uma revisão sem condição de análise de código"
      ],
      "explanations": [
        "O requisito de verificação de código ruleset pode impor limites de alerta específicos da ferramenta antes da mesclagem.",
        "A produção de resultados de análise não impõe, por si só, a desejada porta de mesclagem baseada em alertas.",
        "As assinaturas de commit não avaliam a gravidade do alerta de verificação de código.",
        "Um requisito de revisão humana não implementa limites de verificação específicos da ferramenta."
      ],
      "concept": "Proteção de mesclagem de verificação de código",
      "hints": [
        "Deve ser um sinal visível ou um portão reforçado?",
        "Qual controle pode avaliar os resultados da varredura em relação a critérios explícitos?"
      ]
    },
    "admin-102": {
      "prompt": "Um repositório inclui um idioma não suportado por CodeQL. Qual plano de administração é tecnicamente sólido?",
      "choices": [
        "Suponha que CodeQL analise todas as linguagens de programação possíveis",
        "Verifique a cobertura de idiomas suportados e use um analisador adicional apropriado quando necessário",
        "Marcar todos os arquivos como JavaScript, independentemente do idioma real",
        "Desative a segurança de dependência para compensar"
      ],
      "explanations": [
        "O suporte ao idioma CodeQL é finito e documentado.",
        "A revisão da cobertura e uma ferramenta adicional adequada colmatam lacunas reais de análise.",
        "Rotular incorretamente os arquivos de origem não cria uma análise de linguagem válida.",
        "A remoção da proteção contra dependências não relacionadas não preenche uma lacuna na análise da origem."
      ],
      "concept": "Planejamento de cobertura de linguagem de análise",
      "hints": [
        "O que um mecanismo de análise deve entender sobre a fonte?",
        "Como o código não suportado ainda pode receber uma análise significativa?"
      ]
    },
    "admin-103": {
      "prompt": "Um administrador planeja habilitar recursos de segurança pagos em centenas de repositórios privados. O que deve ser verificado antes da implementação ampla?",
      "choices": [
        "Somente se GitHub Actions estiver habilitado, assumindo que inclui todos os produtos de segurança",
        "Somente se a organização usa SAML, assumindo que recursos de segurança pré-pagos",
        "O direito do produto de segurança da conta e as implicações no consumo de licença",
        "Somente se os repositórios são privados, assumir que a visibilidade privada torna todo o uso da segurança gratuito"
      ],
      "explanations": [
        "A disponibilidade de ações não estabelece todos os direitos de produtos de segurança.",
        "A configuração SAML não determina se o consumo do produto de segurança é pré-pago.",
        "Os recursos de segurança de repositório privado podem depender dos produtos adquiridos e do uso licenciado.",
        "A visibilidade privada não inclui universalmente todos os recursos de segurança pagos."
      ],
      "concept": "Conscientização de direitos de recursos de segurança",
      "hints": [
        "A disponibilidade técnica é o mesmo que um direito incluído?",
        "Que consumo a capacitação ampla poderia criar?"
      ]
    },
    "admin-104": {
      "prompt": "Os alertas Dependabot estão faltando para uma dependência suportada que a equipe esperava que GitHub inventariasse. Qual recurso subjacente os administradores devem inspecionar primeiro?",
      "choices": [
        "Padrões personalizados de verificação de segredos",
        "Seleção do pacote de consultas CodeQL",
        "A contagem de aprovação de solicitação pull",
        "Gráfico de dependência e seus dados de dependência reconhecidos"
      ],
      "explanations": [
        "Os padrões secretos identificam credenciais em vez de versões de pacotes instalados.",
        "Os pacotes de consulta de análise de origem não fornecem o inventário de dependência de Dependabot.",
        "Os requisitos de revisão não estabelecem quais pacotes são conhecidos por GitHub.",
        "Os alertas Dependabot dependem de dependências reconhecidas no gráfico de dependências."
      ],
      "concept": "Inventário de dependência como entrada de alerta",
      "hints": [
        "Como GitHub saberia quais versões de pacote o repositório usa?",
        "Qual fonte de dados é comparada com os avisos de vulnerabilidade?"
      ]
    },
    "admin-105": {
      "prompt": "Uma equipe deseja pull requests automático para atualização de dependência de rotina, mesmo quando nenhuma vulnerabilidade é conhecida. Qual recurso é o mais adequado?",
      "choices": [
        "Atualizações de versão Dependabot",
        "Apenas alertas Dependabot",
        "Apenas verificação de segredos",
        "Somente solicitações de revisão do proprietário do código"
      ],
      "explanations": [
        "As atualizações de versão verificam as dependências configuradas de acordo com uma programação para versões mais recentes.",
        "Os alertas relatam vulnerabilidades conhecidas em vez de atualizar rotineiramente todas as dependências.",
        "A verificação de segredos detecta credenciais, não se as dependências estão atualizadas.",
        "A revisão do proprietário do código roteia revisões sem gerar atualização de versão pull requests."
      ],
      "concept": "Atualizações de versão versus alertas de vulnerabilidade",
      "hints": [
        "O gatilho é um aviso de segurança conhecido ou uma manutenção de rotina?",
        "Qual automação de dependência é orientada por cronograma?"
      ]
    },
    "admin-106": {
      "prompt": "Uma organização deseja atualizações de versão Dependabot para pacotes npm em um subdiretório monorepo semanalmente. Onde o ecossistema de pacotes, o diretório e a configuração de agendamento específicos do repositório devem ser definidos?",
      "choices": [
        "Somente CODEOWNERS",
        ".github/dependabot.yml",
        "Somente uma programação GitHub Actions sem configuração Dependabot",
        "Somente o documento de política de segurança do repositório"
      ],
      "explanations": [
        "CODEOWNERS não define cronogramas de atualização de dependência.",
        "O arquivo de configuração Dependabot declara ecossistemas, diretórios e cronogramas de atualização.",
        "Um agendamento cron de ações por si só não configura atualizações de versão Dependabot.",
        "Uma política de segurança escrita não define a configuração de atualização executável."
      ],
      "concept": "Configuração de atualização de versão Dependabot",
      "hints": [
        "Qual configuração pertence ao repositório controlado por versão?",
        "De quais informações um atualizador precisa para localizar pacotes e escolher sua cadência?"
      ]
    },
    "admin-107": {
      "prompt": "Dependabot não pode autenticar em um registro de pacote privado. A credencial existente é armazenada apenas como um segredo de ações. Qual mudança o administrador deve avaliar?",
      "choices": [
        "Imprima a credencial em cada log de construção",
        "Tornar o registro privado anônimo",
        "Configure o registro em Dependabot e forneça um segredo Dependabot com escopo apropriado",
        "Adicione a credencial diretamente ao dependabot.yml"
      ],
      "explanations": [
        "Registrar uma credencial de registro a expõe.",
        "O acesso anônimo ao registro remove desnecessariamente a autenticação.",
        "Dependabot possui seu próprio contexto secreto e configuração de registro privado.",
        "As credenciais do registro devem ser referenciadas por meio de segredos, em vez de serem confirmadas como texto simples."
      ],
      "concept": "Autenticação de registro privado para Dependabot",
      "hints": [
        "Os recursos de automação separados compartilham automaticamente o mesmo armazenamento secreto?",
        "Onde a credencial deve ser referenciada sem comprometer seu valor?"
      ]
    },
    "admin-108": {
      "prompt": "Um pull request atualiza um arquivo de bloqueio e introduz uma dependência transitiva com uma vulnerabilidade conhecida. Qual recurso foi projetado especificamente para expor alterações de dependência e seu impacto na segurança durante a revisão da solicitação pull?",
      "choices": [
        "Verificação de segredos",
        "Uma revisão de acesso ao repositório",
        "Um log de instalação GitHub App",
        "Revisão de dependência"
      ],
      "explanations": [
        "A verificação de segredos detecta credenciais, não alterações nas versões dos pacotes.",
        "Uma revisão de acesso avalia a autorização, não as diferenças de dependência.",
        "Os logs de instalação rastreiam integrações em vez de alterações de vulnerabilidade de pacote.",
        "A revisão de dependência mostra alterações de dependência, incluindo dependências indiretas e vulnerabilidades conhecidas."
      ],
      "concept": "Risco de dependência no momento da solicitação pull",
      "hints": [
        "Qual superfície de revisão entende manifestos de pacotes e diferenças de arquivos de bloqueio?",
        "A equipe precisa do inventário atual ou do impacto dessa mudança específica?"
      ]
    },
    "admin-109": {
      "prompt": "O mantenedor de um repositório público precisa colaborar de forma privada com pesquisadores selecionados sobre uma vulnerabilidade antes da divulgação pública. Qual recurso suporta melhor isso?",
      "choices": [
        "Um rascunho de aviso de segurança do repositório",
        "Um issue público normal com uma etiqueta de segurança",
        "Uma discussão pública apenas com os mantenedores mencionados",
        "Uma versão publicada contendo os detalhes da exploração imediatamente"
      ],
      "explanations": [
        "Rascunhos de avisos de segurança apoiam a coordenação de vulnerabilidades privadas antes da publicação.",
        "Uma etiqueta não torna confidencial um issue público.",
        "Mencionar pessoas selecionadas não restringe o público da discussão pública.",
        "A divulgação pública imediata anula o período de coordenação privada solicitado."
      ],
      "concept": "Coordenação de vulnerabilidade privada",
      "hints": [
        "O que distingue a colaboração pré-divulgação da discussão pública comum do projeto?",
        "Qual recurso de segurança oferece suporte a um ciclo de vida de publicação controlado?"
      ]
    },
    "admin-110": {
      "prompt": "Uma organização deseja que os pesquisadores saibam quais versões ela suporta e como relatar uma vulnerabilidade com segurança. Qual documento do repositório se destina a esta orientação?",
      "choices": [
        "CODEOWNERS",
        "SECURITY.md",
        "dependabot.yml",
        "CODE_OF_CONDUCT.md"
      ],
      "explanations": [
        "CODEOWNERS identifica os revisores, não a política de relatório de vulnerabilidades do projeto.",
        "SECURITY.md comunica versões suportadas e instruções de relatório de vulnerabilidades.",
        "A configuração Dependabot controla atualizações em vez de instruções de divulgação.",
        "Um código de conduta rege o comportamento de participação em vez de reportar vulnerabilidades."
      ],
      "concept": "Comunicando uma política de segurança",
      "hints": [
        "Qual documento um pesquisador deve consultar antes de abrir um issue público?",
        "As versões de suporte e os relatórios privados fazem parte da propriedade ou da política de segurança?"
      ]
    },
    "admin-111": {
      "prompt": "Um mantenedor de projeto público preparou um comunicado de segurança e precisa de um identificador de vulnerabilidade reconhecido como parte da divulgação coordenada. Qual capacidade do GitHub eles deveriam considerar?",
      "choices": [
        "Criar uma ramificação com CVE no nome",
        "Use um número issue como uma substituição automática de CVE",
        "Solicite um CVE por meio do processo de aconselhamento de segurança do repositório",
        "Marque cada versão como vulnerável sem publicar um comunicado"
      ],
      "explanations": [
        "Os nomes das ramificações não atribuem identificadores CVE reconhecidos.",
        "Os números issue do repositório não são identificadores CVE automaticamente.",
        "O fluxo de trabalho de consultoria oferece suporte à solicitação de CVE para vulnerabilidades elegíveis.",
        "A marcação de versão por si só não solicita um identificador de vulnerabilidade."
      ],
      "concept": "Identificação e divulgação de vulnerabilidades",
      "hints": [
        "Quem aloca um identificador de vulnerabilidade padronizado?",
        "Qual fluxo de trabalho de divulgação estruturada dá suporte a essa solicitação?"
      ]
    },
    "admin-112": {
      "prompt": "Uma fila de segurança contém muitos alertas Dependabot. Qual abordagem de priorização é mais defensável?",
      "choices": [
        "Sempre corrija em ordem alfabética por nome do pacote",
        "Ignore alertas mais antigos primeiro, independentemente do impacto",
        "Use apenas a severidade e ignore deliberadamente a explorabilidade e o contexto do aplicativo",
        "Use gravidade, sinais de exploração, contexto de dependência e exposição do aplicativo"
      ],
      "explanations": [
        "A ordem alfabética não reflete o risco de segurança.",
        "A idade por si só não estabelece que um alerta seja seguro para ser descartado.",
        "A gravidade por si só pode ignorar diferenças importantes na probabilidade de exploração e exposição.",
        "Vários sinais de risco e contexto de uso real apoiam uma priorização significativa."
      ],
      "concept": "Triagem de vulnerabilidade baseada em risco",
      "hints": [
        "Quais descobertas têm maior probabilidade de prejudicar esta aplicação?",
        "Por que razão as classificações de gravidade idênticas ainda podem implicar prioridades operacionais diferentes?"
      ]
    },
    "admin-113": {
      "prompt": "Uma equipe aceita um alerta Dependabot temporariamente porque o caminho do código afetado não está acessível em sua implantação. Qual é a melhor prática de manutenção de registros?",
      "choices": [
        "Documente a disposição justificada e revise-a se as premissas mudarem",
        "Marcar o pacote como corrigido mesmo que sua versão não tenha mudado",
        "Remova todos os manifestos de dependência para ocultar o alerta",
        "Desative todos os alertas de vulnerabilidade permanentemente"
      ],
      "explanations": [
        "A justificativa registrada torna o risco aceito auditável e apoia uma reavaliação posterior.",
        "Um pacote vulnerável inalterado não deve ser falsamente descrito como corrigido.",
        "A remoção de manifestos prejudica a visibilidade da dependência em vez de abordar o risco.",
        "Um risco aceito com escopo definido não justifica a desativação permanente de todos os alertas."
      ],
      "concept": "Aceitação documentada do risco de vulnerabilidade",
      "hints": [
        "Que suposições tornam a decisão atual defensável?",
        "Como alterações futuras na implantação poderiam invalidar essa decisão?"
      ]
    },
    "admin-114": {
      "prompt": "Uma empresa deseja um plano prático de resposta de segurança para incidentes de repositório. Qual conteúdo é mais útil?",
      "choices": [
        "Apenas uma meta anual para menos alertas",
        "Respondentes nomeados, caminhos de escalonamento, etapas de contenção, regras de comunicação e preservação de evidências",
        "Apenas uma lista de produtos de verificação habilitados sem responsabilidades de resposta",
        "Uma regra para excluir todos os repositórios afetados antes da investigação"
      ],
      "explanations": [
        "Uma métrica por si só não informa aos respondentes como agir durante um incidente.",
        "Funções, escalonamento, contenção, comunicação e evidências formam um processo de resposta acionável.",
        "A cobertura de detecção por si só não explica quem deve agir em um incidente ou como.",
        "A exclusão indiscriminada imediata arrisca a perda de dados e destrói evidências."
      ],
      "concept": "Planejamento de resposta de segurança operacional",
      "hints": [
        "O que os responsáveis pela resposta devem saber nos primeiros minutos de um incidente?",
        "Como a responsabilidade e o tratamento das evidências permanecerão claros sob pressão?"
      ]
    },
    "admin-115": {
      "prompt": "Um usuário humano precisa de uma operação API suportada que leia issues em dois repositórios da organização. Um PAT é apropriado para esta tarefa de curta duração. Qual design de token segue melhor o menor privilégio?",
      "choices": [
        "Um token clássico com todos os escopos disponíveis e sem vencimento",
        "Um token pertencente ao proprietário de uma organização compartilhado com o usuário",
        "Um token fine-grained limitado à organização, repositórios selecionados, permissões necessárias e expiração adequada",
        "Um token para todos os repositórios com permissões de administração desnecessárias"
      ],
      "explanations": [
        "Escopos amplos e vida útil indefinida excedem as necessidades da tarefa.",
        "Compartilhar o token de outra pessoa enfraquece a atribuição e a segurança das credenciais.",
        "O repositório refinado e a seleção de permissões restringem a autoridade da credencial.",
        "O acesso desnecessário à administração de todos os repositórios viola o privilégio mínimo."
      ],
      "concept": "Design refinado do osciloscópio PAT",
      "hints": [
        "De quais recursos e operações essa tarefa realmente precisa?",
        "Como a duração da credencial pode ser limitada juntamente com suas permissões?"
      ]
    },
    "admin-116": {
      "prompt": "Um membro cria um fine-grained PAT para uma organização que requer aprovação de token. Permanece pendente e não pode acessar o repositório privado pretendido. Qual é a próxima ação apropriada?",
      "choices": [
        "Recrie-o repetidamente até que a aprovação seja ignorada",
        "Mude o repositório para público apenas para o token",
        "Suponha que a criação de token satisfaça automaticamente a aprovação da organização",
        "Peça a um administrador autorizado que analise a solicitação de token pendente"
      ],
      "explanations": [
        "A recreação não elimina a política de aprovação da organização.",
        "A alteração da visibilidade expõe o conteúdo em vez de seguir a governança de acesso.",
        "A criação de token e a aprovação da organização são etapas distintas.",
        "O administrador deve revisar o acesso solicitado de acordo com a política configurada."
      ],
      "concept": "Fluxo de trabalho de aprovação PAT refinado",
      "hints": [
        "Qual etapa da política ainda não foi concluída?",
        "Quem pode decidir se o acesso solicitado à organização é apropriado?"
      ]
    },
    "admin-117": {
      "prompt": "Uma organização quer limitar a vida útil dos tokens que acessam seus recursos, em vez de depender apenas da preferência de cada desenvolvedor. Qual controle de governança ela deve avaliar?",
      "choices": [
        "Uma política de vida útil máxima PAT da organização compatível para o tipo de token relevante",
        "Uma configuração de retenção de artefato de repositório",
        "Uma restrição de exclusão de ramificação",
        "Uma entrada CODEOWNERS para o diretório de autenticação"
      ],
      "explanations": [
        "As políticas PAT podem restringir a vida útil do token para acesso da organização.",
        "A retenção de artefato não controla a expiração do token API.",
        "As regras de exclusão de ramificação não definem a vida útil das credenciais.",
        "A propriedade do código encaminha revisões em vez de impor a expiração do token."
      ],
      "concept": "Governança vitalícia do token",
      "hints": [
        "Em que âmbito as regras de credenciais podem ser aplicadas de forma consistente?",
        "A retenção de dados controla por quanto tempo uma credencial de acesso funciona?"
      ]
    },
    "admin-118": {
      "prompt": "Um fine-grained PAT aprovado para uma organização é posteriormente considerado superprivilegiado. O proprietário deseja remover o acesso à organização desse token sem remover a associação legítima do usuário. Qual ação é mais direcionada?",
      "choices": [
        "Remova todas as equipes da organização",
        "Revogar o acesso desse token por meio do gerenciamento de tokens da organização",
        "Exclua os repositórios públicos pessoais do usuário",
        "Desative todo o acesso GitHub API para cada conta"
      ],
      "explanations": [
        "A exclusão da equipe perturba pessoas não relacionadas e não visa uma credencial.",
        "A revogação específica do token remove a concessão excessiva de credenciais sem grandes alterações na associação.",
        "A organização não aborda a exposição ao token excluindo repositórios pessoais.",
        "Uma proibição global de API é desproporcional a um token aprovado."
      ],
      "concept": "Revogação de acesso ao token direcionado",
      "hints": [
        "O risco está vinculado à pessoa ou a uma credencial?",
        "Qual superfície de gerenciamento identifica a credencial aprovada específica?"
      ]
    },
    "admin-119": {
      "prompt": "Uma integração organizacional de longa duração usa o PAT de um funcionário. O funcionário está saindo. Qual redesenho reduz mais diretamente a dependência do acesso contínuo desse indivíduo?",
      "choices": [
        "Copie o PAT em mais repositórios",
        "Remova apenas a expiração do PAT",
        "Use um GitHub App com uma instalação apropriada e permissões de escopo restrito",
        "Renomeie PAT para conta de serviço sem alterar seu proprietário"
      ],
      "explanations": [
        "Mais cópias aumentam a exposição da credencial sem alterar a propriedade.",
        "A expiração não é a única dependência; O acesso PAT permanece vinculado ao usuário.",
        "Um aplicativo baseado em instalação é mais adequado para automação organizacional independente de um funcionário.",
        "Um nome de exibição não altera a identidade ou o ciclo de vida do token."
      ],
      "concept": "Independência de identidade de automação",
      "hints": [
        "O que acontece com a automação quando o proprietário da credencial humana perde o acesso?",
        "Qual modelo de integração possui uma identidade de instalação?"
      ]
    },
    "admin-120": {
      "prompt": "Uma empresa de conta pessoal deseja restringir o acesso PAT clássico aos recursos da organização. Qual afirmação é importante ao avaliar o escopo da política?",
      "choices": [
        "A política revoga automaticamente todas as chaves SSH e todas as chaves GitHub App",
        "A política impede que todos leiam os repositórios públicos da organização",
        "A política elimina a necessidade de revisar as configurações de fine-grained PAT",
        "As restrições clássicas do PAT não regem todos os outros mecanismos de autenticação"
      ],
      "explanations": [
        "As restrições do tipo token não são revogação universal de SSH e acesso ao aplicativo.",
        "Os recursos públicos permanecem acessíveis ao público apesar das restrições PAT.",
        "Os controles de token Classic e fine-grained exigem sua própria avaliação de política.",
        "Os administradores devem controlar separadamente outras credenciais e integrações."
      ],
      "concept": "Limites da política PAT",
      "hints": [
        "Qual tipo de credencial a política realmente visa?",
        "Quais caminhos alternativos de autenticação permanecem fora desse controle?"
      ]
    },
    "admin-121": {
      "prompt": "Uma integração de fornecedor precisa apenas de acesso somente leitura ao conteúdo do repositório em repositórios selecionados. Por que um GitHub App geralmente é preferível a um aplicativo OAuth de escopo amplo para este design?",
      "choices": [
        "GitHub Apps oferece permissões fine-grained e seleção de repositório de instalação",
        "GitHub Apps nunca exige revisão de segurança",
        "GitHub Apps tem automaticamente privilégios irrestritos de proprietário empresarial",
        "Os aplicativos OAuth não podem chamar nenhum GitHub API"
      ],
      "explanations": [
        "Os aplicativos podem solicitar operações definidas de forma restrita e acesso a repositórios selecionados.",
        "Permissões refinadas reduzem o risco, mas não eliminam a revisão da integração.",
        "A instalação não confere propriedade empresarial irrestrita.",
        "Os aplicativos OAuth podem usar APIs; seu modelo de autorização é diferente."
      ],
      "concept": "Vantagens de privilégio mínimo GitHub App",
      "hints": [
        "De quanta autoridade a integração realmente precisa?",
        "Qual modelo pode separar a leitura do conteúdo do repositório do controle mais amplo do repositório?"
      ]
    },
    "admin-122": {
      "prompt": "Um aplicativo OAuth solicita o escopo do repositório clássico, mesmo que a descrição do negócio diga que ele lê apenas a fonte. Em que um administrador deve se concentrar durante a revisão?",
      "choices": [
        "Somente a afirmação do fornecedor de que sua implementação atual faz solicitações de leitura",
        "A ampla autoridade do escopo real, não apenas a descrição do fornecedor",
        "Somente se um funcionário já autorizou",
        "Somente se a organização requer SAML, assumindo que isso restringe os escopos de OAuth"
      ],
      "explanations": [
        "A intenção presente não reduz a autoridade concedida pelo escopo solicitado.",
        "O escopo solicitado determina a autoridade disponível e pode exceder a necessidade comercial declarada.",
        "A autorização de um usuário não substitui a revisão da política da organização.",
        "A autenticação SAML não redefine os recursos de um escopo OAuth."
      ],
      "concept": "Revendo o risco do escopo OAuth",
      "hints": [
        "A intenção declarada é o mesmo que a capacidade concedida?",
        "O que o escopo solicitado pode autorizar além da fonte de leitura?"
      ]
    },
    "admin-123": {
      "prompt": "Uma integração GitHub App precisa atuar como sua instalação para automação de repositório, e não em nome de um usuário conectado. Qual credencial é apropriada?",
      "choices": [
        "O cliente público do aplicativo ID sozinho",
        "Cookie do navegador de qualquer funcionário",
        "Um token de acesso à instalação",
        "Um repositório webhook URL sem autenticação"
      ],
      "explanations": [
        "Um cliente público ID identifica um aplicativo, mas não é um token de autorização de instalação.",
        "Os cookies do navegador não são credenciais de instalação apropriadas.",
        "Um token de instalação representa o acesso aprovado da instalação do aplicativo.",
        "Um terminal webhook URL não autentica chamadas de saída GitHub API."
      ],
      "concept": "Instalação versus autenticação do usuário",
      "hints": [
        "Qual identidade deve constar como executora da automação?",
        "Qual credencial representa a concessão do aplicativo instalado?"
      ]
    },
    "admin-124": {
      "prompt": "Um GitHub App instalado solicita permissões adicionais após uma atualização. O que o proprietário da organização deve fazer?",
      "choices": [
        "Suponha que a aprovação antiga autorize automaticamente todas as permissões futuras",
        "Conceda imediatamente a propriedade da organização do aplicativo",
        "Compartilhe um administrador PAT para que o aplicativo possa ignorar a solicitação",
        "Revise os novos recursos e aprove somente se eles atenderem às necessidades políticas e de negócios"
      ],
      "explanations": [
        "As permissões adicionais solicitadas têm sua própria decisão de aprovação.",
        "A revisão de permissão do aplicativo não exige propriedade irrestrita da organização.",
        "Um PAT compartilhado ignora a governança de integração pretendida.",
        "Os proprietários podem avaliar e aceitar ou recusar as permissões adicionais solicitadas."
      ],
      "concept": "Revisando alterações de permissão GitHub App",
      "hints": [
        "Uma decisão anterior abrange um conjunto de capacidades recentemente expandido?",
        "Que novas operações a aprovação permitiria?"
      ]
    },
    "admin-125": {
      "prompt": "Um GitHub App instalado em uma organização não está mais aprovado para qualquer uso. Qual ação remove mais diretamente o acesso autorizado dessa instalação?",
      "choices": [
        "Desinstale o aplicativo da organização",
        "Revogar PAT não relacionado de um funcionário",
        "Remova apenas a assinatura webhook do aplicativo, deixando intacto o acesso à instalação",
        "Exclua o cache de credenciais Git local de um usuário"
      ],
      "explanations": [
        "A desinstalação remove a instalação do aplicativo da organização e seu acesso.",
        "Um PAT não relacionado não rege a autorização de instalação do aplicativo.",
        "A desativação de notificações não revoga o acesso API da instalação.",
        "O cache de credenciais locais de um usuário não controla as credenciais de instalação."
      ],
      "concept": "Desativando uma integração organizacional",
      "hints": [
        "Onde foi concedido o acesso à integração?",
        "Qual ação revoga essa concessão em vez de simplesmente ocultar referências a ela?"
      ]
    },
    "admin-126": {
      "prompt": "Um cliente REST API recebe uma resposta de limite de taxa com x-ratelimit-remaining igual a zero. Qual comportamento de resposta é apropriado?",
      "choices": [
        "Tente novamente continuamente sem demora",
        "Aguarde até o tempo de reinicialização indicado e reduza chamadas desnecessárias",
        "Crie muitas cópias da mesma solicitação em paralelo",
        "Suponha que todo limite de taxa possa ser removido renomeando o token"
      ],
      "explanations": [
        "Tentativas repetidas imediatas não podem repor o limite primário esgotado.",
        "Os cabeçalhos de limite de taxa indicam quando a cota primária é renovada.",
        "Mais solicitações paralelas aumentam a pressão, em vez de restaurar a cota.",
        "Os rótulos de token não determinam a política de limite de taxa subjacente."
      ],
      "concept": "Lidando com limites de taxa REST primários",
      "hints": [
        "Quais cabeçalhos descrevem a cota esgotada?",
        "Quando o cliente deve esperar que a capacidade fique disponível novamente?"
      ]
    },
    "admin-127": {
      "prompt": "Uma resposta REST inclui Retry-After enquanto o cliente tem taxa limitada. Qual comportamento segue a orientação de GitHub?",
      "choices": [
        "Ignore se o cliente estiver autenticado",
        "Multiplique a simultaneidade da solicitação imediatamente",
        "Aguarde o intervalo indicado antes de tentar novamente",
        "Tente novamente apenas com uma string User-Agent diferente"
      ],
      "explanations": [
        "A autenticação não isenta os clientes da orientação Retry-After.",
        "Uma simultaneidade maior pode piorar a limitação.",
        "O intervalo fornecido pelo servidor indica quanto tempo o cliente deve esperar.",
        "A alteração de um cabeçalho de cliente não satisfaz a espera necessária."
      ],
      "concept": "Respeitando a espera API direcionada ao servidor",
      "hints": [
        "O que o serviço comunica explicitamente sobre o tempo de repetição?",
        "Um loop de repetição mais rápido poderia melhorar uma situação limitada?"
      ]
    },
    "admin-128": {
      "prompt": "Um cliente ainda tem permissão API primária restante, mas recebe limitação após uma explosão de solicitações simultâneas. Que explicação o administrador deve considerar?",
      "choices": [
        "Todas as solicitações autenticadas estão isentas de limitação",
        "A cota primária garante concorrência ilimitada",
        "Apenas APIs públicas podem ter taxa limitada",
        "Os limites de taxa secundários podem se aplicar independentemente da cota primária"
      ],
      "explanations": [
        "Os clientes autenticados permanecem sujeitos a limites de taxas.",
        "As solicitações primárias restantes não garantem um padrão de solicitação aceitável.",
        "As solicitações API de recursos privados também podem ser limitadas.",
        "Os limites secundários protegem o serviço contra simultaneidade excessiva e outros padrões abusivos."
      ],
      "concept": "Limites de taxa secundária independente",
      "hints": [
        "O volume e o padrão de solicitação representam a mesma restrição?",
        "Que salvaguardas adicionais protegem a disponibilidade do API?"
      ]
    },
    "admin-129": {
      "prompt": "Uma integração de conformidade baixa repetidamente metadados de repositório inalterados e atinge os limites API. Qual otimização reduz melhor as solicitações desnecessárias e preserva a atualização?",
      "choices": [
        "Use notificações de eventos quando apropriado e solicitações condicionais ou armazenamento em cache para dados inalterados",
        "Tente novamente todas as falhas com paralelismo imediato ilimitado",
        "Alterne entre os PATs dos funcionários para evitar a limitação",
        "Solicite permissões de token mais amplas sem alterar o padrão de chamada"
      ],
      "explanations": [
        "Atualizações orientadas por eventos e recuperação condicional reduzem pesquisas redundantes.",
        "Novas tentativas ilimitadas pioram a carga e podem acionar limites adicionais.",
        "A rotação de credenciais não é um substituto responsável para o uso eficiente do API.",
        "Permissões mais amplas não tornam as solicitações redundantes necessárias ou eficientes."
      ],
      "concept": "Design de integração API eficiente",
      "hints": [
        "Os dados inalterados precisam sempre de um download completo?",
        "O serviço pode notificar a integração quando ocorrerem alterações relevantes?"
      ]
    },
    "admin-130": {
      "prompt": "Um arquiteto compara um serviço apoiado por PAT com um GitHub App usando tokens de instalação. Qual suposição de limite de taxa é mais segura?",
      "choices": [
        "Cada tipo de credencial tem o mesmo limite fixo em todas as contas",
        "Verifique os limites documentados para o contexto credencial e empresarial; os limites de instalação podem ser dimensionados de acordo com regras documentadas",
        "Os tokens de instalação são sempre ilimitados",
        "Mais escopos OAuth sempre aumentam o limite primário"
      ],
      "explanations": [
        "Os limites variam de acordo com o método de autenticação e o contexto relevante da conta.",
        "Os limites do token de instalação documentaram o dimensionamento e o comportamento específico da empresa.",
        "As credenciais de instalação ainda têm taxa limitada.",
        "Escopos mais amplos não são um mecanismo geral para aumentar a cota primária."
      ],
      "concept": "Planejamento de limite de taxa com reconhecimento de credencial",
      "hints": [
        "Qual identidade e contexto da conta determinam a cota?",
        "Por que uma estimativa de capacidade deveria evitar uma suposição universal de solicitações por hora?"
      ]
    },
    "admin-131": {
      "prompt": "Uma organização deseja que os membros solicitem aprovação antes que os aplicativos OAuth de terceiros acessem os recursos da organização. Qual política é diretamente relevante?",
      "choices": [
        "Uma regra commit assinada obrigatória",
        "Uma regra de ignorar Dependabot",
        "OAuth Restrições de acesso ao aplicativo",
        "Uma regra de nomenclatura de tag de lançamento do repositório"
      ],
      "explanations": [
        "As regras de assinatura de confirmação não regem a autorização OAuth de terceiros.",
        "As regras para ignorar dependências não aprovam o acesso ao aplicativo.",
        "OAuth As restrições de aplicativos permitem que os proprietários da organização controlem o acesso do aplicativo aos recursos da organização.",
        "As regras de tag de liberação não determinam o acesso OAuth."
      ],
      "concept": "Governança de aplicativos da organização OAuth",
      "hints": [
        "Qual tipo de integração está sendo autorizada?",
        "Onde os proprietários da organização podem exigir a revisão desse acesso?"
      ]
    },
    "admin-132": {
      "prompt": "Um serviço recebe entregas GitHub webhook em HTTPS. Ele precisa verificar se cada carga veio do remetente configurado e não foi modificada. Qual controle adicional é apropriado?",
      "choices": [
        "Confie em cada solicitação com GitHub no User-Agent",
        "Verifique apenas se o JSON analisa",
        "Publique o segredo webhook no repositório para verificação",
        "Valide a assinatura webhook usando o segredo configurado e uma comparação segura de tempo"
      ],
      "explanations": [
        "Os valores do User-Agent não são prova criptográfica de origem.",
        "JSON válido ainda pode ser falsificado.",
        "A publicação do segredo permite que os invasores falsifiquem assinaturas.",
        "A verificação de assinatura autentica a carga usando o segredo webhook compartilhado."
      ],
      "concept": "Autenticidade da carga útil do webhook",
      "hints": [
        "Um cliente de rede pode forjar cabeçalhos de solicitação comuns?",
        "Qual evidência depende de um segredo conhecido apenas pelas partes pretendidas?"
      ]
    },
    "admin-133": {
      "prompt": "Uma integração precisa de notificação imediata quando os repositórios são criados e não precisa fazer pesquisas a cada poucos segundos. Qual mecanismo um administrador deve avaliar?",
      "choices": [
        "Uma organização ou empresa apoiada webhook para o evento relevante",
        "Uma exportação manual mensal de log de auditoria",
        "Uma verificação de status necessária em um repositório existente",
        "Um fluxo de trabalho agendado que verifica uma vez por semana"
      ],
      "explanations": [
        "Webhooks notificam os receptores configurados sobre eventos inscritos à medida que ocorrem.",
        "A exportação mensal não atende aos requisitos de notificação imediata de eventos.",
        "Uma verificação de status de repositório não é uma assinatura de eventos de criação de repositório da organização.",
        "A pesquisa semanal não pode fornecer notificações imediatas de criação."
      ],
      "concept": "Integrações administrativas orientadas a eventos",
      "hints": [
        "A interação desejada é uma consulta repetida ou uma notificação?",
        "Qual fonte de eventos pode enviar alterações relevantes ao receptor?"
      ]
    },
    "admin-134": {
      "prompt": "Uma empresa ruleset requer revisão em um conjunto de repositórios. Um administrador de repositório cria um ruleset local sem nenhum requisito de revisão e afirma que isso remove o controle corporativo. O que é correto?",
      "choices": [
        "O mais novo ruleset local vence automaticamente",
        "O requisito empresarial aplicável ainda se aplica",
        "Um ruleset local vazio exclui todas as políticas herdadas",
        "O repositório Admin ignora silenciosamente todas as empresas ruleset"
      ],
      "explanations": [
        "As regras locais mais recentes não substituem os requisitos aplicáveis de âmbito mais elevado.",
        "Camada rulesets aplicável em vez de permitir o enfraquecimento local dos requisitos empresariais.",
        "Um ruleset vazio não apaga outro rulesets ativo.",
        "A função administrativa por si só não é um desvio universal de cada ruleset."
      ],
      "concept": "Regras de escopo superior não substituíveis",
      "hints": [
        "As regras locais são substituições ou controles adicionais aplicáveis?",
        "O que aconteceria com a governança da empresa se uma regra local vazia a anulasse?"
      ]
    },
    "admin-135": {
      "prompt": "Um alerta CodeQL inclui um caminho que mostra uma entrada não confiável que atinge uma operação confidencial. O que um respondente deve inspecionar para avaliar a descoberta?",
      "choices": [
        "Somente se todas as versões de dependência são atuais",
        "Somente se o commit possui uma assinatura verificada",
        "O fluxo da origem ao coletor, o código relevante e o contexto de validação do aplicativo",
        "Somente se um revisor aprovou o pull request"
      ],
      "explanations": [
        "As dependências atuais não provam que o tratamento de entrada do aplicativo seja seguro.",
        "Uma assinatura verificada não estabelece que o código esteja livre de vulnerabilidades.",
        "O fluxo relatado e a lógica circundante apoiam uma avaliação técnica de risco.",
        "A aprovação prévia não constitui uma análise técnica do fluxo de dados reportado."
      ],
      "concept": "Interpretando evidências de leitura de código",
      "hints": [
        "Que evidências vinculam a entrada à operação sensível?",
        "A validação circundante poderia afetar se o caminho é perigoso?"
      ]
    },
    "admin-136": {
      "prompt": "Um repositório privado tem alertas de dependência habilitados, mas a equipe deseja que Dependabot tente remediar pull requests para dependências vulneráveis suportadas. Que capacidade adicional deve ser habilitada?",
      "choices": [
        "Apenas discussões de repositório",
        "Somente organização SAML SSO",
        "Apenas uma regra de assinatura commit obrigatória",
        "Atualizações de segurança Dependabot"
      ],
      "explanations": [
        "As discussões não geram alterações de correção de dependências.",
        "SSO protege o acesso em vez de reparar versões de pacotes.",
        "Assinaturas de commit não geram atualizações de dependência.",
        "As atualizações de segurança tentam abrir correções para dependências vulneráveis suportadas."
      ],
      "concept": "Alertas versus correções automatizadas de vulnerabilidades",
      "hints": [
        "A identificação de um pacote vulnerável cria necessariamente uma correção?",
        "Qual automação é acionada especificamente por vulnerabilidades de dependência?"
      ]
    },
    "admin-137": {
      "prompt": "Um administrador escreve um script que precisa de um PAT e propõe confirmar o token ao lado do script para que colegas de trabalho possam executá-lo. Qual alternativa é apropriada?",
      "choices": [
        "Mantenha a credencial em um armazenamento secreto aprovado e injete-a somente em execução autorizada",
        "Codificar o token em Base64 e salvá-lo em um commit",
        "Coloque o token em uma ramificação não rastreada e presuma que ele está inacessível",
        "Use um nome de variável menos descritivo para ocultar o token"
      ],
      "explanations": [
        "Um armazenamento secreto separa credenciais confidenciais do código-fonte distribuído.",
        "Base64 é uma codificação reversível, não uma proteção para uma credencial confirmada.",
        "Uma ramificação não é um limite de gerenciamento de segredos.",
        "Nomes de variáveis obscuros não protegem uma credencial exposta."
      ],
      "concept": "Protegendo credenciais administrativas API",
      "hints": [
        "Quem pode recuperar uma credencial quando ela estiver no histórico do repositório distribuído?",
        "O que separa a origem do script de sua autoridade em tempo de execução?"
      ]
    },
    "admin-138": {
      "prompt": "Uma equipe de segurança corporativa precisa dos endereços de origem IP em suas investigações de auditoria e os descobre ausentes dos eventos atuais. O que deveria verificar?",
      "choices": [
        "Se ativar apenas uma lista de permissões IP adiciona automaticamente os campos de auditoria",
        "Se a exibição do endereço IP do log de auditoria empresarial foi habilitada e se aplica aos eventos",
        "Se a autenticação SAML por si só garante os campos source-IP em cada evento de auditoria",
        "Se a filtragem por ator adiciona metadados de origem IP ausentes"
      ],
      "explanations": [
        "A restrição de acesso à rede e a exibição do endereço IP de auditoria são controles distintos.",
        "As informações IP são uma configuração opcional de log de auditoria com aplicabilidade documentada.",
        "A vinculação de identidade SAML não garante este campo opcional para cada evento.",
        "Um filtro de pesquisa restringe os registros em vez de adicionar metadados não coletados."
      ],
      "concept": "Fonte de auditoria - visibilidade IP",
      "hints": [
        "Todos os campos de auditoria potencialmente úteis são exibidos por padrão?",
        "Qual configuração de nível empresarial controla esta evidência específica?"
      ]
    },
    "admin-139": {
      "prompt": "Dependabot abre um pull request atualizando uma biblioteca vulnerável. Qual é a política de mesclagem mais apropriada?",
      "choices": [
        "Mesclar todas as alterações do bot sem testes porque é automaticamente seguro",
        "Rejeite todas as atualizações automatizadas, independentemente da vulnerabilidade",
        "Aplique os requisitos de teste e revisão do repositório enquanto avalia a correção de segurança",
        "Desative regras de ramificação sempre que o autor for um bot"
      ],
      "explanations": [
        "A autoria automatizada não garante compatibilidade nem elimina necessidades de revisão.",
        "A rejeição geral impede a correção útil de vulnerabilidades com suporte.",
        "As atualizações de segurança ainda precisam de validação apropriada sob a governança do repositório.",
        "Desabilitar amplamente as regras remove os controles em vez de avaliar a mudança proposta."
      ],
      "concept": "Validando a correção automatizada",
      "hints": [
        "Uma atualização segura de pacote ainda pode afetar o comportamento do aplicativo?",
        "Quais controles existentes estabelecem confiança em uma mudança?"
      ]
    },
    "admin-140": {
      "prompt": "Um executivo pergunta se a ativação de CodeQL, Dependabot e varredura secreta garante a conformidade com todos os requisitos de segurança. Qual resposta é precisa?",
      "choices": [
        "Sim, a ativação dos três recursos substitui todos os processos de governança e resposta",
        "Sim, um painel de alerta zero é um certificado de conformidade universal",
        "Não, portanto todas as verificações de segurança automatizadas devem ser removidas",
        "Não; esses controles fornecem evidências e redução de riscos dentro de um programa mais amplo de governança, revisão e resposta"
      ],
      "explanations": [
        "A habilitação de recursos não estabelece conformidade regulatória ou operacional universal.",
        "Nenhum alerta não certifica todos os requisitos ou comprova a cobertura completa da detecção.",
        "Os limites da automação não negam o seu valor de segurança.",
        "As ferramentas de segurança apoiam, em vez de substituir, a governança contextual e a resposta a incidentes."
      ],
      "concept": "Ferramentas de segurança na governança de conformidade",
      "hints": [
        "A configuração de um detector prova que todos os requisitos organizacionais foram atendidos?",
        "Que responsabilidades permanecem depois que as ferramentas produzem resultados?"
      ]
    },
    "admin-141": {
      "prompt": "Uma empresa permite apenas ações e fluxos de trabalho reutilizáveis hospedados dentro da empresa. Um fluxo de trabalho que usa actions/checkout está bloqueado. Por que?",
      "choices": [
        "As ações de autoria de GitHub também estão fora da empresa, a menos que a política as permita explicitamente",
        "actions/checkout só pode ser executado em repositórios públicos",
        "A política se aplica apenas a fluxos de trabalho reutilizáveis, nunca a ações",
        "O repositório Write substitui automaticamente a política"
      ],
      "explanations": [
        "A política somente empresarial também exclui ações de autoria de GitHub fora da empresa.",
        "Checkout oferece suporte a repositórios privados com acesso apropriado.",
        "A política rege ações e fluxos de trabalho reutilizáveis.",
        "As permissões do repositório não substituem a política de ações corporativas imposta."
      ],
      "concept": "Limites das permissões de uso de ações na empresa",
      "hints": [
        "Onde está hospedado o repositório de origem da ação em relação à empresa?",
        "A autoria oficial cria automaticamente uma exceção de política?"
      ]
    },
    "admin-142": {
      "prompt": "Uma organização deseja uma referência de ação para identificar uma revisão de origem imutável, em vez de um rótulo de liberação móvel. Qual referência é mais forte?",
      "choices": [
        "Uma tag mutável de versão principal",
        "O comprimento total da ação commit SHA",
        "O branch padrão do repositório de ações",
        "A tag mais recente sem versão"
      ],
      "explanations": [
        "Tags de versão principal podem ser movidas pelo editor.",
        "Um commit SHA completo identifica uma revisão de ação imutável específica.",
        "Uma ramificação padrão pode mudar com o futuro commits.",
        "Uma tag mais recente não fixada não estabelece uma identidade de origem imutável."
      ],
      "concept": "Referências de ação imutáveis",
      "hints": [
        "Quais referências do Git podem ser movidas para outra revisão?",
        "O que identifica um commit específico em vez de uma convenção de nomenclatura?"
      ]
    },
    "admin-143": {
      "prompt": "Uma organização mantém um fluxo de trabalho reutilizável em um repositório privado e deseja que repositórios irmãos aprovados o chamem. Além da sintaxe do chamador, o que os administradores devem configurar?",
      "choices": [
        "Conceder apenas contents: write ao GITHUB_TOKEN do fluxo de trabalho chamador",
        "Configure apenas os rótulos runner do chamador",
        "As configurações de acesso às ações do repositório de origem e as políticas de permissão aplicáveis",
        "Adicione apenas os mantenedores de origem ao arquivo CODEOWNERS do chamador"
      ],
      "explanations": [
        "As permissões de operação de token por si só não permitem o compartilhamento privado de fluxo de trabalho.",
        "Os rótulos dos executores selecionam máquinas de execução em vez de autorizar o compartilhamento de origem.",
        "O compartilhamento privado requer acesso permitido à fonte e conformidade com as políticas do Actions.",
        "A propriedade da revisão não concede acesso ao fluxo de trabalho reutilizável."
      ],
      "concept": "Compartilhamento privado de fluxo de trabalho reutilizável",
      "hints": [
        "Outro repositório pode ler automação privada apenas porque seu nome é conhecido?",
        "Qual limite do lado da origem rege o compartilhamento?"
      ]
    },
    "admin-144": {
      "prompt": "Um fluxo de trabalho central deve poder ser chamado como um fluxo de trabalho reutilizável por trabalhos de repositório. Qual gatilho sua definição de fluxo de trabalho deve incluir?",
      "choices": [
        "Apenas agendar",
        "Apenas empurre",
        "Somente workflow_dispatch",
        "workflow_call"
      ],
      "explanations": [
        "Uma programação aciona execuções cronometradas em vez de permitir chamadas de fluxo de trabalho reutilizáveis.",
        "Push sozinho não declara um fluxo de trabalho reutilizável que pode ser chamado.",
        "O despacho manual é diferente de ser chamado por outro trabalho de fluxo de trabalho.",
        "workflow_call declara a interface do fluxo de trabalho reutilizável."
      ],
      "concept": "Ponto de entrada do fluxo de trabalho reutilizável",
      "hints": [
        "Este fluxo de trabalho foi iniciado por um humano, um evento ou outro fluxo de trabalho?",
        "Qual gatilho declara entradas e segredos para um chamador?"
      ]
    },
    "admin-145": {
      "prompt": "Um desenvolvedor coloca uma referência de fluxo de trabalho reutilizável em steps[*].uses e obtém um erro de validação. Qual é a estrutura correta?",
      "choices": [
        "Chame o fluxo de trabalho reutilizável com jobs.<job_id>.uses",
        "Coloque o caminho do fluxo de trabalho em jobs.<job_id>.runs-on",
        "Coloque o caminho do fluxo de trabalho em jobs.<job_id>.needs",
        "Coloque o caminho do fluxo de trabalho no campo de nível superior do chamador"
      ],
      "explanations": [
        "Os fluxos de trabalho reutilizáveis são chamados no nível do trabalho e não como etapas de ação comuns.",
        "runs-on seleciona um runner, não um fluxo de trabalho reutilizável a ser chamado.",
        "necessidades identifica dependências de trabalho em vez de arquivos de fluxo de trabalho reutilizáveis.",
        "on declara eventos desencadeadores em vez do fluxo de trabalho reutilizável a ser executado."
      ],
      "concept": "Chamadas de fluxo de trabalho reutilizáveis em nível de trabalho",
      "hints": [
        "Um fluxo de trabalho reutilizável descreve uma única etapa de ação ou um conjunto de tarefas?",
        "Em qual nível YAML essa unidade de execução maior pode ser invocada?"
      ]
    },
    "admin-146": {
      "prompt": "Um fluxo de trabalho de implantação reutilizável precisa que os chamadores selecionem um destino de implantação por meio de uma interface digitada sem tratar o nome do destino como uma credencial. O que deveria definir?",
      "choices": [
        "Apenas uma saída de fluxo de trabalho para o destino",
        "Uma entrada tipada de workflow_call para o destino",
        "Apenas um segredo cujo valor é o nome do destino não secreto",
        "Apenas um destino codificado dentro do fluxo de trabalho chamado"
      ],
      "explanations": [
        "As saídas retornam resultados em vez de aceitar a configuração selecionada pelo chamador.",
        "As entradas de workflow_call fornecem uma interface tipada para configurações não secretas do fluxo de trabalho chamador.",
        "A passagem secreta não fornece o contrato de entrada não secreto digitado solicitado.",
        "Um destino codificado não permite que os chamadores o escolham por meio de uma interface."
      ],
      "concept": "Contratos de entrada de fluxo de trabalho reutilizáveis",
      "hints": [
        "O valor é secreto ou configuração comum?",
        "Como um fluxo de trabalho reutilizável deve validar o que seu chamador fornece?"
      ]
    },
    "admin-147": {
      "prompt": "Um fluxo de trabalho reutilizável chama outro fluxo de trabalho reutilizável que precisa de um segredo de implantação. O chamador externo passou esse segredo apenas para o primeiro fluxo de trabalho. O que o primeiro fluxo de trabalho chamado deve fazer?",
      "choices": [
        "Suponha que todos os segredos cheguem automaticamente a todos os fluxos de trabalho aninhados",
        "Imprima o segredo para que o próximo fluxo de trabalho possa ler os logs",
        "Transmita explicitamente o segredo necessário por meio da interface de chamada suportada",
        "Coloque o segredo em uma saída de fluxo de trabalho pública"
      ],
      "explanations": [
        "Os segredos são passados diretamente para os fluxos de trabalho chamados, e não automaticamente por todos os níveis de aninhamento.",
        "Os logs não são um transporte secreto seguro.",
        "Cada chamada aninhada deve passar o segredo necessário.",
        "Os resultados públicos ou amplamente acessíveis não são um canal de credenciais seguro."
      ],
      "concept": "Segredos em fluxos de trabalho reutilizáveis aninhados",
      "hints": [
        "A concessão de um chamador direto se propaga automaticamente em todas as chamadas posteriores?",
        "Em qual limite o próximo fluxo de trabalho deve receber suas credenciais?"
      ]
    },
    "admin-148": {
      "prompt": "Um chamador concede a um fluxo de trabalho reutilizável um GITHUB_TOKEN somente leitura. O fluxo de trabalho chamado tenta solicitar acesso de gravação. Qual é a regra de permissão relevante?",
      "choices": [
        "Os fluxos de trabalho chamados sempre recebem o repositório Admin",
        "Fluxos de trabalho reutilizáveis ignoram as permissões de token do chamador",
        "Um nome de fluxo de trabalho contendo implantação concede acesso de gravação",
        "Um fluxo de trabalho chamado não pode elevar as permissões de token concedidas pelo chamador"
      ],
      "explanations": [
        "A invocação de fluxo de trabalho reutilizável não concede administração do repositório.",
        "As permissões do chamador restringem o fluxo de trabalho chamado.",
        "A nomenclatura não autoriza recursos de token.",
        "As permissões podem ser mantidas ou reduzidas através da cadeia de chamadas, e não elevadas."
      ],
      "concept": "Limites de permissão na reutilização de fluxo de trabalho",
      "hints": [
        "Um componente delegado pode conceder a si mesmo autoridade ausente de seu chamador?",
        "O que deveria acontecer com os privilégios ao longo de uma cadeia de chamadas reutilizável?"
      ]
    },
    "admin-149": {
      "prompt": "Um fluxo de trabalho de construção reutilizável deve retornar uma versão de pacote não secreta ao chamador. Qual interface suportada deve ser exposta?",
      "choices": [
        "Uma saída de fluxo de trabalho mapeada a partir da saída de trabalho relevante",
        "Apenas uma variável de ambiente local em etapas sem mapeamento de saída",
        "Somente um arquivo local runner sem transferência ou mapeamento de saída",
        "Uma entrada de fluxo de trabalho preenchida após a conclusão do fluxo de trabalho chamado"
      ],
      "explanations": [
        "As saídas de fluxo de trabalho reutilizáveis expõem os resultados do trabalho selecionado ao chamador.",
        "Uma variável de ambiente local não se torna automaticamente uma saída de fluxo de trabalho visível ao chamador.",
        "Os arquivos locais do executor não são compartilhados automaticamente entre ambientes de execução não relacionados.",
        "As entradas fornecem dados ao fluxo de trabalho chamado em vez de retornar o resultado concluído."
      ],
      "concept": "Saídas de fluxo de trabalho reutilizáveis",
      "hints": [
        "Como um chamador pode consumir um valor sem depender do estado do disco compartilhado?",
        "Qual interface declarada expõe o resultado de um fluxo de trabalho concluído?"
      ]
    },
    "admin-150": {
      "prompt": "Um administrador deseja que uma implementação central CI seja chamada por vários repositórios, em vez de copiada para cada repositório no momento da criação. Qual recurso é mais adequado?",
      "choices": [
        "Um modelo de repositório usado apenas durante a criação",
        "Um fluxo de trabalho reutilizável",
        "Um modelo de descrição de solicitação pull",
        "Um arquivo de fluxo de trabalho copiado sem referência upstream"
      ],
      "explanations": [
        "Os modelos de criação produzem cópias que não permanecem inerentemente vinculadas.",
        "Fluxos de trabalho reutilizáveis permitem que os chamadores façam referência a uma implementação mantida centralmente.",
        "Os modelos de descrição PR não implementam tarefas CI.",
        "Cópias desvinculadas flutuam e requerem manutenção independente."
      ],
      "concept": "Execução reutilizável versus modelos copiados",
      "hints": [
        "As execuções futuras devem executar uma implementação referenciada ou uma cópia independente?",
        "O que acontecerá quando a lógica central CI for corrigida?"
      ]
    },
    "admin-151": {
      "prompt": "Uma equipe de plataforma precisa de uma unidade reutilizável que possa ser chamada diretamente, contendo vários trabalhos com dependências, e não apenas várias etapas dentro de um trabalho. Qual abstração melhor se adapta?",
      "choices": [
        "Uma ação JavaScript sozinha",
        "Uma ação composta sozinha",
        "Um fluxo de trabalho reutilizável",
        "Uma ação de contêiner Docker sozinha"
      ],
      "explanations": [
        "Uma ação JavaScript é executada como uma etapa de ação em vez de definir o gráfico de trabalho do chamador.",
        "As ações compostas combinam etapas dentro de um trabalho em vez de definir um gráfico de vários trabalhos.",
        "Fluxos de trabalho reutilizáveis podem encapsular vários trabalhos e suas dependências.",
        "Uma ação de contêiner empacota a execução de etapas em vez de um fluxo de trabalho completo com vários trabalhos."
      ],
      "concept": "Ações versus fluxos de trabalho reutilizáveis",
      "hints": [
        "A unidade compartilhada é uma sequência de etapas ou um gráfico de trabalho inteiro?",
        "Qual abstração pode selecionar runners diferentes para trabalhos diferentes?"
      ]
    },
    "admin-152": {
      "prompt": "A maioria dos fluxos de trabalho da organização lê apenas o conteúdo do repositório. Alguns trabalhos de publicação exigem permissões de gravação. Qual design de token padrão é mais seguro?",
      "choices": [
        "Padronize cada trabalho com todas as permissões de gravação",
        "Use o PAT de um proprietário em todos os fluxos de trabalho",
        "Remova todas as permissões de token dos trabalhos de publicação sem alterar suas tarefas",
        "Use padrões restritivos e conceda apenas as permissões exigidas por trabalhos específicos"
      ],
      "explanations": [
        "A autoridade universal de gravação amplia o impacto de fluxos de trabalho comprometidos.",
        "Um proprietário compartilhado PAT é mais amplo e duradouro do que a autorização com escopo de trabalho.",
        "As tarefas de publicação ainda precisam da autoridade estritamente exigida.",
        "Padrões restritivos com exceções explícitas no nível do trabalho seguem o privilégio mínimo."
      ],
      "concept": "Padrões de token de fluxo de trabalho com privilégios mínimos",
      "hints": [
        "Todo trabalho deveria herdar a autoridade de um trabalho editorial?",
        "Em que âmbito uma exceção necessária pode ser reduzida?"
      ]
    },
    "admin-153": {
      "prompt": "O GITHUB_TOKEN de um fluxo de trabalho não pode ler um segundo repositório privado. O trabalho já tem contents: read para seu próprio repositório. Qual é a melhor explicação e a próxima etapa do design?",
      "choices": [
        "O token automático tem como escopo o repositório de fluxo de trabalho; organizar acesso autorizado separadamente ao segundo repositório",
        "contents: read concede acesso de leitura a todos os repositórios privados da empresa",
        "O segundo repositório deve ser tornado público",
        "Alterar o token para contents: write expande automaticamente seu alcance para repositórios irmãos"
      ],
      "explanations": [
        "GITHUB_TOKEN tem escopo de repositório; o acesso entre repositórios precisa de uma concessão separada apropriada.",
        "As permissões de token não estendem automaticamente o limite do repositório.",
        "A exposição pública é desnecessária para a automação autorizada entre repositórios.",
        "Aumentar o privilégio de uma operação não expande o limite do repositório do token."
      ],
      "concept": "Limite do repositório GITHUB_TOKEN",
      "hints": [
        "Uma permissão especifica uma operação, um limite de recurso ou ambos?",
        "Qual repositório emitiu o token automático para esta execução?"
      ]
    },
    "admin-154": {
      "prompt": "Nas proteções de solicitação pull fork padrão, um fluxo de trabalho acionado por pull_request de um fork externo não pode ler o segredo de implantação do repositório. Qual é a melhor interpretação?",
      "choices": [
        "O autor fork deve renomear o segredo para corresponder ao repositório base",
        "Os segredos são ocultados dos fluxos de trabalho acionados por fork para proteção contra códigos não confiáveis",
        "Aumentar as permissões de GITHUB_TOKEN para contents: write exporia automaticamente todos os segredos armazenados",
        "Uma compilação bem-sucedida no fork desbloqueia automaticamente os segredos do repositório base"
      ],
      "explanations": [
        "Os nomes secretos não substituem o limite de execução fork.",
        "As proteções padrão do fork evitam a exposição de segredos do repositório a envios não confiáveis.",
        "As permissões de operação de token não concedem, por si só, acesso ao segredo armazenado.",
        "O sucesso da compilação não estabelece a confiança necessária para expor as credenciais de implantação."
      ],
      "concept": "Isolamento secreto de solicitação pull bifurcada",
      "hints": [
        "Quem controla o código proposto por um fork externo?",
        "O que aconteceria se esse código pudesse ler as credenciais de implantação?"
      ]
    },
    "admin-155": {
      "prompt": "Um fluxo de trabalho usa pull_request_target com segredos e, em seguida, faz check-out e executa código de um cabeçalho de solicitação pull não confiável. Qual é o risco central?",
      "choices": [
        "O evento garante que o código enviado foi revisado",
        "A operação de checkout remove automaticamente todos os privilégios",
        "Código não confiável pode ser executado em um contexto privilegiado e roubar credenciais",
        "O mascaramento de log impede que o código envie credenciais pela rede"
      ],
      "explanations": [
        "O evento não estabelece confiança no código de solicitação pull enviado.",
        "A verificação de código não confiável não remove inerentemente as credenciais do fluxo de trabalho.",
        "Combinar a execução privilegiada com código controlado pelo invasor pode expor tokens e segredos.",
        "O mascaramento de log não impede que códigos maliciosos exfiltrem valores por meio de outros canais."
      ],
      "concept": "Riscos de eventos de solicitação pull privilegiados",
      "hints": [
        "Qual código é confiável e qual contexto contém credenciais?",
        "O contexto de execução do evento torna o código verificado seguro?"
      ]
    },
    "admin-156": {
      "prompt": "Uma organização quer uma etapa de aprovação humana antes de executar fluxos de trabalho enviados por determinados colaboradores externos. Qual política os administradores devem avaliar?",
      "choices": [
        "Exigir revisão do proprietário do código em cada commit histórico",
        "Defina a retenção de artefatos do repositório para um dia",
        "Dê a todos os colaboradores externos o repositório Write",
        "Configurar requisitos de aprovação de execução de fluxo de trabalho para fork pull requests"
      ],
      "explanations": [
        "A revisão histórica do commit não é a política de aprovação de execução de fluxo de trabalho.",
        "A retenção de artefatos não impede a execução de envios de fluxo de trabalho não confiáveis.",
        "O acesso Write expande a autoridade do contribuidor em vez de adicionar uma porta de execução.",
        "As políticas de aprovação do fluxo de trabalho do fork definem quando uma pessoa confiável deve aprovar a execução."
      ],
      "concept": "Aprovações externas de execução de fluxo de trabalho",
      "hints": [
        "A porta desejada é antes da execução ou apenas antes da fusão?",
        "Qual configuração avalia a execução do fluxo de trabalho do colaborador externo?"
      ]
    },
    "admin-157": {
      "prompt": "Um chamador precisa passar apenas uma credencial de implantação para um fluxo de trabalho reutilizável. Qual opção torna melhor o limite da credencial?",
      "choices": [
        "Declare e passe esse segredo nomeado em vez de herdar desnecessariamente todos os segredos disponíveis",
        "Coloque a credencial em um padrão de entrada de fluxo de trabalho público",
        "Passe todos os segredos da organização, independentemente da necessidade",
        "Suponha que nenhuma declaração ou encaminhamento seja necessário"
      ],
      "explanations": [
        "A passagem secreta nomeada explícita limita o fluxo de trabalho chamado à credencial necessária.",
        "Os padrões públicos não são um armazenamento secreto apropriado.",
        "A herança secreta desnecessária amplia a exposição de credenciais.",
        "Fluxos de trabalho reutilizáveis precisam de passagem secreta suportada em vez de suposições."
      ],
      "concept": "Interfaces secretas mínimas de fluxo de trabalho reutilizável",
      "hints": [
        "De quantas credenciais o fluxo de trabalho chamado realmente precisa?",
        "Qual interface torna o conjunto de segredos concedido mais fácil de revisar?"
      ]
    },
    "admin-158": {
      "prompt": "Uma equipe regulamentada chama um fluxo de trabalho central reutilizável e deseja uma revisão estável e passível de revisão para cada versão. Qual prática de referência apoia melhor esse objetivo?",
      "choices": [
        "Sempre use o branch padrão sem controle de alterações",
        "Faça referência a um commit SHA aprovado e atualize-o por meio de alterações revisadas",
        "Omitir totalmente a versão do fluxo de trabalho",
        "Use uma tag de lançamento mutável e proíba todas as revisões de dependências"
      ],
      "explanations": [
        "Uma ramificação não fixada pode ser alterada sem uma alteração no repositório do chamador.",
        "Um pino SHA revisado fornece uma referência estável e uma trilha de atualização explícita.",
        "As referências de fluxo de trabalho reutilizáveis remotos exigem uma referência apropriada.",
        "Tags mutáveis não fornecem a mesma garantia de revisão imutável."
      ],
      "concept": "Controle de versão de fluxo de trabalho reutilizável",
      "hints": [
        "Como os revisores do chamador verão uma atualização do fluxo de trabalho central?",
        "Qual referência permanece anexada a uma revisão exata?"
      ]
    },
    "admin-159": {
      "prompt": "Uma equipe escolhe o Ubuntu GitHub-hosted padrão runners em vez de máquinas self-hosted persistentes. Qual propriedade de execução é útil para isolamento de tarefas?",
      "choices": [
        "Cada trabalho compartilha permanentemente o mesmo diretório inicial gravável",
        "Os próprios clientes devem corrigir o sistema operacional VM hospedado subjacente",
        "Cada trabalho recebe uma nova máquina virtual GitHub-hosted",
        "Todos os segredos do trabalho são armazenados permanentemente na imagem runner"
      ],
      "explanations": [
        "Os trabalhos padrão do Ubuntu hospedados não reutilizam intencionalmente um diretório inicial gravável persistente.",
        "GitHub gerencia o ambiente runner hospedado em vez de exigir patch OS do cliente.",
        "GitHub-hosted padrão Ubuntu runners usa máquinas virtuais novas para trabalhos.",
        "Os segredos não se destinam a ser incorporados permanentemente na imagem hospedada."
      ],
      "concept": "Isolamento runner hospedado padrão",
      "hints": [
        "Qual estado deve permanecer após um trabalho em um VM hospedado descartável?",
        "Como isso se compara a uma máquina persistente que a organização mantém?"
      ]
    },
    "admin-160": {
      "prompt": "Uma organização instala self-hosted runners em suas próprias máquinas virtuais. Quem é responsável por manter os sistemas operacionais runner e as ferramentas adicionais instaladas seguras e atualizadas?",
      "choices": [
        "GitHub corrige automaticamente todas as ferramentas instaladas pelo cliente",
        "O autor da ação pública gerencia todas as VMs do cliente",
        "Ninguém, porque o registro runner congela a imagem",
        "A organização que opera as máquinas self-hosted"
      ],
      "explanations": [
        "GitHub não gerencia todo o ambiente self-hosted de propriedade do cliente.",
        "Um autor de ação não opera a frota runner do cliente.",
        "O registro não elimina os requisitos contínuos de aplicação de patches.",
        "Operadores runner auto-hospedados mantêm seus sistemas operacionais e software instalado."
      ],
      "concept": "Propriedade operacional auto-hospedada",
      "hints": [
        "Quem controla a máquina subjacente?",
        "O registro do agente runner transfere a responsabilidade pelo restante da pilha de software?"
      ]
    },
    "admin-161": {
      "prompt": "Duas tarefas são executadas sequencialmente no mesmo self-hosted runner persistente. Por que os administradores não deveriam presumir que o segundo trabalho começa em um ambiente limpo?",
      "choices": [
        "runners auto-hospedado não garante inerentemente uma máquina nova para cada trabalho",
        "Todos os trabalhos GitHub Actions compartilham segredos intencionalmente entre repositórios",
        "O segundo trabalho sempre é executado como um sistema operacional diferente",
        "A proteção de ramificação do repositório limpa automaticamente a máquina"
      ],
      "explanations": [
        "O estado pode persistir em uma máquina self-hosted, a menos que os operadores imponham isolamento e limpeza.",
        "Os segredos têm escopo; o compartilhamento universal entre repositórios não é o modelo.",
        "Os trabalhos sequenciais não alteram inerentemente o sistema operacional.",
        "A proteção de ramificação não redefine discos ou processos runner."
      ],
      "concept": "Estado runner persistente",
      "hints": [
        "O que acontece com arquivos e processos em uma máquina reutilizada?",
        "Quais propriedades de isolamento os operadores devem fornecer?"
      ]
    },
    "admin-162": {
      "prompt": "Um repositório público aceita pull requests não confiável. Sua proposta self-hosted runner pode alcançar uma rede de produção interna. Qual é a preocupação mais forte?",
      "choices": [
        "Um GITHUB_TOKEN somente leitura remove necessariamente todos os sistemas operacionais e recursos de rede",
        "Código de fluxo de trabalho não confiável pode comprometer o runner e os recursos internos acessíveis",
        "A remoção dos segredos do repositório isola automaticamente todos os serviços de rede internos",
        "As revisões de solicitação pull necessárias isolam automaticamente a rede runner"
      ],
      "explanations": [
        "As permissões de token GitHub não colocam em sandbox a máquina subjacente ou sua rede.",
        "A execução auto-hospedada pode expor a máquina e sua rede a códigos não confiáveis.",
        "A remoção do segredo por si só não remove a acessibilidade da rede ou as credenciais no nível da máquina.",
        "Os requisitos de revisão não colocam em sandbox uma máquina ou sua rede."
      ],
      "concept": "Limites de confiança para execução self-hosted",
      "hints": [
        "O que o código arbitrário pode alcançar nesta máquina?",
        "A revisão de uma mesclagem protege todas as execuções anteriores de fluxo de trabalho?"
      ]
    },
    "admin-163": {
      "prompt": "Um administrador precisa autorizar apenas repositórios selecionados para usar um pool self-hosted runner confidencial. Um desenvolvedor propõe usar um rótulo runner exclusivo como todo o limite de segurança. Qual é o melhor design?",
      "choices": [
        "Use apenas rótulos e permita todos os repositórios no pool",
        "Dê a cada fluxo de trabalho o token de registro runner",
        "Use políticas de acesso do grupo runner; use rótulos para roteamento entre runners autorizados",
        "Confie no nome do host runner ser difícil de adivinhar"
      ],
      "explanations": [
        "Um rótulo de roteamento não substitui uma política de acesso ao repositório.",
        "As credenciais de registro não devem ser distribuídas como autorização de trabalho.",
        "Os grupos controlam o acesso autorizado enquanto os rótulos ajudam a selecionar runners correspondente.",
        "Nomes de host obscuros não estabelecem autorização."
      ],
      "concept": "Autorização de runners versus rótulos de agendamento",
      "hints": [
        "Qual configuração concede acesso e qual seleciona uma máquina adequada?",
        "Conhecer um rótulo seria uma aprovação de segurança suficiente?"
      ]
    },
    "admin-164": {
      "prompt": "Os trabalhos de um repositório não podem usar self-hosted runner mesmo que seus rótulos correspondam. O runner está em um grupo restrito a repositórios selecionados. O que um administrador deve verificar?",
      "choices": [
        "Se contents: write anularia as restrições do grupo de runners",
        "Se a criação de um segredo de ambiente autorizaria o runner",
        "Se a desativação das verificações de status necessárias autorizaria o runner",
        "Se o repositório está incluído na política de acesso do grupo runner"
      ],
      "explanations": [
        "Os recursos de token de repositório não substituem a autorização do grupo runner.",
        "A disponibilidade secreta e a autorização do pool runner são controles separados.",
        "Os requisitos de mesclagem não concedem acesso ao grupo runner.",
        "Os rótulos correspondentes serão insuficientes se o grupo não autorizar o repositório."
      ],
      "concept": "Diagnosticando falhas de acesso ao grupo runner",
      "hints": [
        "A correspondência aos critérios de agendamento prova que o trabalho está autorizado?",
        "Qual lista define os repositórios autorizados a usar este pool?"
      ]
    },
    "admin-165": {
      "prompt": "Uma empresa compartilha um grupo runner com uma organização e esse grupo tem uma política de acesso empresarial restritiva. O proprietário de uma organização pode ampliar o acesso além da restrição empresarial?",
      "choices": [
        "Não; a administração em nível de organização permanece limitada pela política do grupo empresarial runner",
        "Sim; a organização pode apagar silenciosamente todas as restrições herdadas",
        "Sim; qualquer colaborador do repositório pode anulá-la por meio de runs-on",
        "Sim; conceder ao trabalho um GITHUB_TOKEN com capacidade de gravação substitui a política de grupo"
      ],
      "explanations": [
        "As restrições empresariais limitam o acesso runner permitido pela organização.",
        "As configurações de escopo inferior não eliminam os limites impostos pela empresa.",
        "runs-on seleciona destinos de execução, em vez de anular a política de acesso.",
        "As permissões de token de repositório não substituem a autorização do grupo runner."
      ],
      "concept": "Hierarquia de política de grupo empresarial runner",
      "hints": [
        "Quem é o proprietário do pool runner compartilhado?",
        "Uma organização de consumidores pode conceder mais acesso do que o permitido pelo fornecedor?"
      ]
    },
    "admin-166": {
      "prompt": "Um fluxo de trabalho usa runs-on: [self-hosted, linux, gpu]. Como os runners correspondentes são selecionados quando o repositório está autorizado a usá-los?",
      "choices": [
        "Um runner precisa apenas de um dos rótulos listados",
        "Um runner deve corresponder a todos os rótulos listados",
        "GitHub ignora rótulos após self-hosted",
        "Os rótulos são interpretados como uma lista alternativa ordenada por prioridade"
      ],
      "explanations": [
        "A matriz de rótulos não corresponde a nenhum rótulo.",
        "Todos os rótulos especificados devem corresponder ao runner elegível.",
        "Etiquetas adicionais restringem a seleção self-hosted.",
        "A matriz não é um mecanismo de fallback sequencial."
      ],
      "concept": "Interseção de rótulos de runners",
      "hints": [
        "Isto é uma interseção de requisitos ou uma lista de alternativas?",
        "Quais propriedades de hardware e plataforma um runner selecionado deve satisfazer?"
      ]
    },
    "admin-167": {
      "prompt": "Uma tarefa GPU permanece na fila enquanto uma runner autorizada on-line está ociosa. O runner possui rótulos Linux e x64, mas o trabalho também solicita GPU. Qual é o diagnóstico mais direto?",
      "choices": [
        "O fluxo de trabalho precisa de permissão do gerente de faturamento da organização",
        "Trabalhos em fila nunca usam self-hosted runners",
        "Nenhum runner qualificado corresponde ao conjunto completo de rótulos solicitados",
        "O repositório deve desabilitar a verificação de segredos"
      ],
      "explanations": [
        "As funções de cobrança não atendem aos requisitos do rótulo runner.",
        "Os trabalhos auto-hospedados podem ser executados quando um runner qualificado estiver disponível.",
        "O runner inativo não possui o rótulo GPU solicitado e não é uma correspondência completa.",
        "A verificação de segredos não está relacionada aos rótulos de agendamento de runners."
      ],
      "concept": "Diagnosticando rótulos runner incomparáveis",
      "hints": [
        "O status online por si só torna um runner adequado?",
        "Qual propriedade solicitada está faltando na máquina ociosa?"
      ]
    },
    "admin-168": {
      "prompt": "Um self-hosted runner funcionando anteriormente aparece off-line após uma alteração no firewall. Quais evidências o administrador deve inspecionar primeiro?",
      "choices": [
        "As aprovações do proprietário do código do repositório",
        "As falhas de asserção de teste de aplicativo do fluxo de trabalho",
        "A política de retenção de artefatos",
        "Logs de serviço do executor e conectividade de saída para endpoints GitHub necessários"
      ],
      "explanations": [
        "As aprovações do proprietário do código não diagnosticam a conectividade do serviço runner.",
        "As asserções de teste são executadas dentro de tarefas e não explicam primeiro um serviço runner off-line.",
        "A retenção de artefatos armazenados não determina a conectividade do serviço.",
        "Os logs de serviço e as conexões de saída necessárias testam diretamente a suspeita de falha de rede."
      ],
      "concept": "Solução de problemas de conectividade auto-hospedada",
      "hints": [
        "Qual componente mantém a conexão com GitHub?",
        "O que mudou imediatamente antes de o runner ficar offline?"
      ]
    },
    "admin-169": {
      "prompt": "Uma equipe está projetando uma frota self-hosted runner com escalonamento automático e deseja que cada máquina aceite apenas um trabalho antes de ser substituída. Qual ciclo de vida do runner se adapta?",
      "choices": [
        "self-hosted runners efêmero com preservação de log externo",
        "Um único runner persistente sem limpeza",
        "Uma estação de trabalho interativa compartilhada usada por todos os desenvolvedores",
        "Um runner que registra uma vez e nunca atualiza"
      ],
      "explanations": [
        "O efêmero runners processa um trabalho; os registros externos preservam as evidências após o descarte.",
        "Um runner persistente e não limpo não fornece isolamento do ciclo de vida de uma tarefa.",
        "As estações de trabalho compartilhadas misturam atividade interativa com automação e não atendem à meta do ciclo de vida.",
        "O registro permanente sem atualizações não garante execução única."
      ],
      "concept": "Projeto efêmero do ciclo de vida runner",
      "hints": [
        "O que deve acontecer com o runner após a tarefa atribuída?",
        "Onde o diagnóstico sobreviverá se a máquina for destruída?"
      ]
    },
    "admin-170": {
      "prompt": "Uma equipe de plataforma já opera Kubernetes e deseja a solução GitHub baseada em Kubernetes para orquestrar conjuntos de escala self-hosted runner. Qual componente ele deve avaliar?",
      "choices": [
        "Grupos de dependência Dependabot",
        "Actions Runner Controller",
        "Avaliação do repositório ruleset",
        "GitHub Pages"
      ],
      "explanations": [
        "Os grupos de dependência organizam atualizações, não pods runner.",
        "Actions Runner Controller orquestra conjuntos de escala self-hosted runner no Kubernetes.",
        "A avaliação do conjunto de regras observa as regras do repositório em vez de criar capacidade runner.",
        "O Pages hospeda sites estáticos em vez de administrar frotas runner."
      ],
      "concept": "Orquestração Kubernetes runner",
      "hints": [
        "Qual solução gerencia o ciclo de vida das cargas de trabalho runner no Kubernetes?",
        "O requisito CI é capacidade ou governança de repositório?"
      ]
    },
    "admin-171": {
      "prompt": "Uma compilação deve alcançar um servidor de pacotes interno privado. A organização está avaliando self-hosted runners em sua rede. Que responsabilidade administrativa adicional é essencial?",
      "choices": [
        "Suponha que GitHub configure automaticamente todos os firewalls internos",
        "Expor o servidor de pacotes publicamente sem autenticação",
        "Controle o acesso à rede runner, o isolamento da máquina e as credenciais do recurso privado",
        "Conceda a todos os pull request acesso externo às rotas da rede de produção"
      ],
      "explanations": [
        "A configuração da rede auto-hospedada continua sendo de responsabilidade da operadora.",
        "O acesso público não autenticado não é necessário para conectividade privada.",
        "A colocação em rede privada precisa de limites explícitos de rede e credenciais.",
        "Envios não confiáveis não devem herdar acessibilidade desnecessária da rede de produção."
      ],
      "concept": "Acesso a recursos privados de self-hosted runners",
      "hints": [
        "Que autoridade vem ao colocar a execução de código dentro da rede privada?",
        "Quais limites o operador runner deve manter?"
      ]
    },
    "admin-172": {
      "prompt": "Uma empresa elegível deseja infraestrutura runner gerenciada por GitHub com acesso privado por meio de seu Azure VNET. Qual opção documentada deve ser avaliada?",
      "choices": [
        "Suponha que qualquer runner hospedado padrão se junte automaticamente ao VNET",
        "Usar GitHub Pages como um túnel de rede privada",
        "Desative o firewall VNET e publique todos os serviços",
        "Rede privada do Azure para GitHub-hosted maior runners compatível"
      ],
      "explanations": [
        "Os runners padrão não são automaticamente anexados à rede Azure da empresa.",
        "O Pages não fornece essa integração de rede runner.",
        "A publicação de serviços internos descarta o requisito de rede privada.",
        "runners maiores com suporte podem usar a configuração de rede privada do Azure da empresa."
      ],
      "concept": "Rede privada do Azure para runners hospedado",
      "hints": [
        "O uso da computação gerenciada exclui a política de rede controlada pelo cliente?",
        "Qual categoria runner oferece suporte a esta integração documentada?"
      ]
    },
    "admin-173": {
      "prompt": "Depois de mover o runners maior com suporte para a rede privada do Azure, uma organização bloqueia todo o tráfego de saída e os trabalhos param de se comunicar com o GitHub. O que deveria fazer?",
      "choices": [
        "Revise a conectividade necessária e permita destinos de saída documentados, mantendo as restrições de rede deliberadas",
        "Suponha que a rede privada elimine toda a necessidade de comunicação com GitHub",
        "Altere apenas as regras de entrada enquanto continua negando todas as conexões de saída necessárias",
        "Aumente as permissões de token de fluxo de trabalho sem alterar as regras de rede"
      ],
      "explanations": [
        "A rede privada ainda requer conectividade de serviço compatível sob a política de rede apropriada.",
        "A orquestração do executor e as operações de ações suportadas ainda dependem de conexões de serviço.",
        "As alterações somente de entrada não restauram a saída necessária bloqueada.",
        "As permissões do aplicativo não podem reparar a conectividade de rede negada."
      ],
      "concept": "Política de rede sem interromper o tráfego de controle runner",
      "hints": [
        "Quais conexões são necessárias para que o runner receba e relate trabalhos?",
        "A negação por padrão pode coexistir com a saída explícita com suporte?"
      ]
    },
    "admin-174": {
      "prompt": "Um endpoint de implantação privado requer uma pequena lista de permissões IP de origem estável. Os intervalos runner hospedados padrão são muito amplos para a organização. Qual design os administradores devem avaliar?",
      "choices": [
        "Permitir um endereço runner padrão observado e assumir que cada trabalho posterior o reutilizará",
        "runners maior compatível com IPs estáticos ou saída de rede self-hosted controlada",
        "Definir um grupo de concorrência para reservar um IP público de um runner hospedado padrão",
        "Definir contents: write para alocar um endereço de saída fixo"
      ],
      "explanations": [
        "Um endereço observado em uma execução hospedada padrão não é uma alocação futura estável.",
        "Essas opções podem fornecer saída estável controlada apropriada à política do endpoint.",
        "A simultaneidade controla o agendamento em vez da alocação pública IP.",
        "As permissões de operação de token não alocam endereços de rede."
      ],
      "concept": "Planejamento de saída runner estável",
      "hints": [
        "O endpoint requer autorização por identidade, origem de rede ou ambos?",
        "Quais opções de runner dão aos operadores controle sobre endereços de saída?"
      ]
    },
    "admin-175": {
      "prompt": "Um self-hosted runner fica atrás de um proxy HTTP corporativo e não pode ser registrado. Qual área de configuração o administrador deve inspecionar?",
      "choices": [
        "Somente contagem de aprovação de solicitação pull",
        "Somente agendamentos de atualização de dependência",
        "A configuração de proxy suportada do runner e a acessibilidade necessária do endpoint",
        "Somente verificação de assinatura de commit"
      ],
      "explanations": [
        "As contagens de revisão não estabelecem a conectividade com a Internet do serviço runner.",
        "Os agendamentos de dependência não configuram o proxy do runner.",
        "As configurações de proxy do executor e o acesso ao endpoint afetam diretamente o registro e a comunicação.",
        "A verificação de confirmação não roteia solicitações de rede por meio de um proxy."
      ],
      "concept": "Administração do proxy de runners",
      "hints": [
        "Qual processo precisa usar o caminho de saída da organização?",
        "Qual configuração de rede o serviço runner realmente herda?"
      ]
    },
    "admin-176": {
      "prompt": "O retorno do fluxo de trabalho aumentou, mas a duração da execução do trabalho permanece inalterada. A maior parte do tempo adicional é gasto na fila antes do início de um runner. O que os administradores devem investigar primeiro?",
      "choices": [
        "Apenas otimização do compilador de aplicativos",
        "Substituindo cada ação por um script de shell mais longo",
        "Aumentando os dias de retenção de artefatos",
        "Disponibilidade de runners, limites de concorrência e capacidade dos grupos ou rótulos correspondentes"
      ],
      "explanations": [
        "A duração de execução inalterada não aponta primeiro para a velocidade de compilação.",
        "Scripts mais longos não abordam a espera por um runner.",
        "A retenção de artefato não cria capacidade runner.",
        "O crescimento da fila aponta para a elegibilidade do agendamento ou para a capacidade de execução disponível."
      ],
      "concept": "Diagnóstico em tempo de fila versus tempo de execução",
      "hints": [
        "Onde está o atraso adicional no ciclo de vida do fluxo de trabalho?",
        "Um código mais rápido ajudaria um trabalho que ainda não foi iniciado?"
      ]
    },
    "admin-177": {
      "prompt": "Uma organização desativa intencionalmente as atualizações automáticas do agente runner em suas imagens self-hosted gerenciadas. Que obrigação resta?",
      "choices": [
        "Maintain um processo para atualizar o software runner dentro dos requisitos de suporte documentados do GitHub",
        "Nunca atualize a imagem novamente",
        "Suponha que as atualizações OS substituam automaticamente o aplicativo GitHub runner",
        "Exigir que os usuários ignorem as regras de ramificação do repositório"
      ],
      "explanations": [
        "Desativar atualizações automáticas transfere o agendamento de atualizações para o operador runner.",
        "O software runner desatualizado pode parar de receber trabalhos de acordo com os requisitos de atualização do GitHub.",
        "As atualizações do sistema operacional não atualizam necessariamente o aplicativo runner instalado separadamente.",
        "O desvio de regra de ramificação não atualiza o software runner."
      ],
      "concept": "Atualizações controladas do agente runner",
      "hints": [
        "Quem agora é o dono da cadência de atualização?",
        "O que acontece se uma imagem gerenciada permanecer atrás da versão runner necessária?"
      ]
    },
    "admin-178": {
      "prompt": "Um ambiente de produção requer aprovação do revisor e armazena um segredo de implantação. Quando um trabalho de referência deve obter acesso a esse segredo do ambiente?",
      "choices": [
        "Assim que a execução do fluxo de trabalho estiver na fila, antes da revisão do ambiente",
        "Depois que as condições exigidas de aprovação e proteção do meio ambiente forem satisfeitas",
        "Sempre que qualquer trabalho de construção anterior for bem-sucedido, mesmo sem aprovação do ambiente",
        "Assim que um revisor aprovar o pull request, independentemente da revisão ambiental"
      ],
      "explanations": [
        "O enfileiramento não satisfaz a porta do revisor exigida pelo ambiente.",
        "Os segredos ambientais são controlados pelos requisitos de proteção do meio ambiente.",
        "O sucesso da compilação não substitui o requisito de aprovação do ambiente.",
        "A revisão da solicitação pull e a aprovação do ambiente necessária são controles separados."
      ],
      "concept": "Segredos de implantação controlados pelo ambiente",
      "hints": [
        "Em que limite as credenciais de produção devem ficar disponíveis?",
        "O que deve acontecer antes que um trabalho de implantação protegido prossiga?"
      ]
    },
    "admin-179": {
      "prompt": "Um segredo de organização deve ser utilizável por apenas três repositórios de implantação. Qual configuração melhor se adapta?",
      "choices": [
        "Dê o segredo a todos os repositórios e confie em seu nome obscuro",
        "Confirme o valor em um repositório compartilhado",
        "Defina a política de acesso ao repositório do segredo da organização para os repositórios selecionados",
        "Expor o valor como uma variável de organização pública"
      ],
      "explanations": [
        "Um nome obscuro não impõe um limite de repositório.",
        "As credenciais confirmadas são distribuídas com o histórico do repositório.",
        "As políticas de acesso secreto da organização podem limitar o uso a repositórios selecionados.",
        "As variáveis não substituem o armazenamento secreto confidencial."
      ],
      "concept": "Segredos da organização do repositório selecionado",
      "hints": [
        "Quais repositórios têm uma necessidade legítima dessa credencial?",
        "Que configuração impõe essa lista em vez de apenas documentá-la?"
      ]
    },
    "admin-180": {
      "prompt": "Um trabalho faz referência a um ambiente. O mesmo nome secreto é configurado nos escopos de organização, repositório e ambiente. Qual valor tem precedência para o trabalho?",
      "choices": [
        "O valor da organização porque é o mais alto na hierarquia",
        "O valor de string mais longo",
        "Todos os três valores concatenados",
        "O valor ambiental"
      ],
      "explanations": [
        "Para nomes secretos duplicados, o escopo mais específico tem precedência.",
        "A precedência secreta não é baseada no comprimento do valor.",
        "Valores secretos duplicados não são concatenados.",
        "O segredo no nível do ambiente é o valor aplicável mais específico."
      ],
      "concept": "Precedência de escopo secreto",
      "hints": [
        "Esta hierarquia tem a ver com a aplicação ampla de políticas ou com especificidade de valores?",
        "Qual escopo configurado está mais próximo do trabalho de implantação?"
      ]
    },
    "admin-181": {
      "prompt": "Existe um segredo de repositório chamado SERVICE_KEY, mas uma etapa do shell que lê $SERVICE_KEY obtém um valor vazio. O fluxo de trabalho nunca mapeia o segredo para uma variável de ambiente. O que deveria ser mudado?",
      "choices": [
        "Mapeie explicitamente o valor do contexto dos segredos para a variável de ambiente da etapa",
        "Suponha que cada segredo se torne automaticamente uma variável shell",
        "Faça referência a vars.SERVICE_KEY deixando o valor armazenado apenas como segredo",
        "Adicionar contents: write e supor que isso exporta o segredo para o processo"
      ],
      "explanations": [
        "Um mapeamento de ambiente em nível de etapa fornece o segredo armazenado ao shell sob o nome pretendido.",
        "A criação de um segredo não exporta automaticamente todos os segredos para todos os shells.",
        "O contexto vars lê variáveis de configuração, não o armazenamento secreto separado.",
        "As permissões de token de repositório não preenchem automaticamente as variáveis de ambiente do shell."
      ],
      "concept": "Fornecendo segredos para etapas do fluxo de trabalho",
      "hints": [
        "Onde um processo shell obtém suas variáveis de ambiente?",
        "Como o segredo armazenado é referenciado pela definição de fluxo de trabalho?"
      ]
    },
    "admin-182": {
      "prompt": "Um fluxo de trabalho transforma um segredo e imprime o resultado transformado. Um desenvolvedor presume que o mascaramento de log do GitHub garante que ele não poderá vazar. Qual é a avaliação correta?",
      "choices": [
        "Todo segredo transformado possível é sempre reconhecido automaticamente",
        "O mascaramento automático não é uma garantia completa; evite registrar segredos e proteja explicitamente os valores derivados",
        "O mascaramento criptografa todos os artefatos de cada visitante do repositório",
        "A codificação Base64 torna automaticamente a saída segura para publicação"
      ],
      "explanations": [
        "O mascaramento não pode garantir o reconhecimento de todos os valores sensíveis transformados.",
        "O design do fluxo de trabalho seguro para credenciais deve evitar a divulgação, em vez de depender exclusivamente do mascaramento.",
        "O mascaramento de log não é uma criptografia de artefato universal.",
        "Base64 é reversível e não torna as credenciais públicas seguras."
      ],
      "concept": "Limites de redação automática de log",
      "hints": [
        "O texto transformado ainda corresponderia ao segredo registrado originalmente?",
        "Uma representação reversível pode reter a mesma sensibilidade?"
      ]
    },
    "admin-183": {
      "prompt": "Uma empresa substitui uma chave de implantação em nuvem de longa duração por OIDC. Qual configuração de confiança do lado da nuvem é essencial?",
      "choices": [
        "Confie em qualquer token de qualquer repositório sem restrições",
        "Use apenas o nome de exibição do fluxo de trabalho como limite de segurança",
        "Restringir declarações OIDC aceitas ao repositório pretendido e ao contexto de implantação",
        "Publique a antiga chave da nuvem para que OIDC possa descobri-la"
      ],
      "explanations": [
        "A confiança irrestrita pode permitir que fluxos de trabalho não relacionados obtenham autoridade na nuvem.",
        "Os nomes de exibição não são limites de autorização baseados em declarações suficientes.",
        "A confiança na nuvem deve validar o emissor, o público e o assunto apropriado ou outras declarações suportadas.",
        "OIDC não exige a publicação de uma credencial de longa duração."
      ],
      "concept": "Confiança na nuvem com escopo definido para fluxo de trabalho OIDC",
      "hints": [
        "Em quais identidades de fluxo de trabalho o provedor de nuvem deve realmente confiar?",
        "Que evidências distinguem uma implantação autorizada de um fluxo de trabalho não relacionado?"
      ]
    },
    "admin-184": {
      "prompt": "Um fluxo de trabalho define id-token: write e um engenheiro afirma que só isso concede ao administrador acesso à assinatura da nuvem. Qual correção é precisa?",
      "choices": [
        "A configuração concede repositório GitHub irrestrito Write",
        "A configuração instala um administrador de nuvem automaticamente",
        "A configuração ignora a política de confiança do provedor de nuvem",
        "Permite solicitar um token OIDC; a confiança na nuvem e as atribuições de funções determinam a autoridade da nuvem"
      ],
      "explanations": [
        "A permissão id-token não concede permissões de gravação de conteúdo do repositório.",
        "As funções de administrador de nuvem não são instaladas automaticamente pelas permissões de fluxo de trabalho.",
        "A validação e autorização do lado da nuvem ainda se aplicam.",
        "A emissão do token OIDC e a autorização na nuvem são etapas separadas."
      ],
      "concept": "Emissão OIDC versus autorização na nuvem",
      "hints": [
        "Obter provas de identidade é o mesmo que conceder permissões de recursos?",
        "Qual sistema decide o que a credencial de nuvem trocada pode fazer?"
      ]
    },
    "admin-185": {
      "prompt": "Uma organização mantém segredos de implantação em um cofre de terceiros e oferece suporte à autenticação federada. Qual integração evita melhor a duplicação de credenciais de cofre de longa duração em todos os repositórios?",
      "choices": [
        "Autentique o fluxo de trabalho no cofre com confiança OIDC com escopo definido e recupere apenas segredos de tempo de execução autorizados",
        "Copie o token raiz do vault em cada arquivo de fluxo de trabalho",
        "Desativar controles de acesso ao cofre para GitHub-hosted runners",
        "Use o nome do repositório como a única senha do vault"
      ],
      "explanations": [
        "A federação pode fornecer acesso de curta duração, sujeito à confiança e às políticas do cofre.",
        "Um token raiz na origem concede autoridade excessiva e a expõe.",
        "A execução hospedada não justifica a remoção da autorização do cofre.",
        "Um nome de repositório público não é um segredo de autenticação."
      ],
      "concept": "Integração federada de cofre de terceiros",
      "hints": [
        "O fluxo de trabalho deve conter uma credencial de inicialização permanente?",
        "Como o cofre pode autorizar uma identidade de fluxo de trabalho e um caminho secreto limitado?"
      ]
    },
    "admin-186": {
      "prompt": "Uma organização altera o valor armazenado em um segredo de repositório após uma suspeita de vazamento de chave de nuvem. Por que o incidente ainda pode não ser contido?",
      "choices": [
        "Os segredos do repositório não podem ser atualizados",
        "A atualização do valor armazenado de GitHub não revoga a credencial antiga no provedor de nuvem",
        "Alterar um segredo sempre desativa automaticamente todas as credenciais externas",
        "O nome secreto deve ser abreviado antes que a rotação funcione"
      ],
      "explanations": [
        "Os administradores autorizados podem atualizar os segredos armazenados.",
        "O emissor da credencial deve revogar ou alternar a chave exposta de forma independente.",
        "A substituição secreta GitHub não revoga universalmente chaves de terceiros.",
        "O comprimento do nome secreto não determina a validade da credencial externa."
      ],
      "concept": "Substituição secreta versus revogação do emissor",
      "hints": [
        "Onde a credencial exposta é realmente validada?",
        "Alguém ainda pode usar um valor antigo copiado fora de GitHub?"
      ]
    },
    "admin-187": {
      "prompt": "Um chamador transmite uma credencial de implantação como uma entrada comum de fluxo de trabalho reutilizável porque tanto as entradas quanto os segredos aceitam valores. Qual design é melhor?",
      "choices": [
        "Use um padrão de entrada pública contendo a credencial",
        "Coloque a credencial no nome do arquivo do fluxo de trabalho reutilizável",
        "Declare e passe-o pela interface secreta do fluxo de trabalho reutilizável",
        "Retornar a credencial como uma saída de fluxo de trabalho não secreta"
      ],
      "explanations": [
        "Os padrões públicos expõem a credencial.",
        "Os nomes de arquivos são metadados visíveis em vez de transporte de credenciais confidenciais.",
        "A interface secreta expressa dados confidenciais e utiliza o tratamento pretendido.",
        "Os resultados não secretos expõem desnecessariamente material de credenciais."
      ],
      "concept": "Segredos versus entradas comuns de fluxo de trabalho",
      "hints": [
        "O valor possui requisitos de confidencialidade?",
        "Qual parte da interface reutilizável comunica e preserva essa distinção?"
      ]
    },
    "admin-188": {
      "prompt": "Um fluxo de trabalho acionado por um Dependabot pull request precisa de uma credencial de registro aprovada, mas seu segredo de ações comum não está disponível no contexto de execução restrita. O que os administradores devem avaliar?",
      "choices": [
        "Conceda propriedade corporativa irrestrita a todos os fluxos de trabalho de bot",
        "Confirme a senha do registro para que todos os contextos possam lê-la",
        "Desative atualizações de dependência permanentemente",
        "Configure um segredo Dependabot com escopo adequado e mantenha as restrições de confiança do fluxo de trabalho"
      ],
      "explanations": [
        "A propriedade empresarial não está relacionada e é demasiado ampla.",
        "A confirmação de credenciais anula o isolamento secreto.",
        "A credencial ausente pode ser resolvida sem abandonar a manutenção de dependências.",
        "Os fluxos de trabalho acionados por Dependabot têm tratamento secreto especial que os administradores devem configurar explicitamente."
      ],
      "concept": "Contexto secreto do fluxo de trabalho acionado por Dependabot",
      "hints": [
        "Qual ator acionou o fluxo de trabalho?",
        "Esse contexto de execução usa os mesmos segredos disponíveis que um push confiável?"
      ]
    },
    "admin-189": {
      "prompt": "Um fluxo de trabalho insere um título issue não confiável diretamente em um script de shell embutido usando uma expressão. Qual mudança reduz melhor o risco de injeção de script?",
      "choices": [
        "Passe o valor não confiável por meio de uma variável de ambiente e cite-o adequadamente ou use uma entrada de ação adequada",
        "Suponha que os títulos issue não possam conter metacaracteres de shell",
        "Conceda ao trabalho mais permissões de token",
        "Oculte o script em um arquivo YAML mais longo sem alterar a interpolação"
      ],
      "explanations": [
        "Separar os dados da fonte de shell gerada reduz o risco de injeção quando manuseado com segurança.",
        "O texto issue controlado pelo usuário pode conter caracteres significativos do shell.",
        "Mais permissões aumentam o impacto em vez de impedir a injeção.",
        "O comprimento do arquivo não altera o comportamento inseguro da interpolação."
      ],
      "concept": "Prevenção de injeção de script de fluxo de trabalho",
      "hints": [
        "O texto controlado pelo usuário está se tornando código-fonte executável?",
        "Como o shell pode recebê-los como dados em vez de sintaxe de script?"
      ]
    },
    "admin-190": {
      "prompt": "Um comando de implantação aceita uma credencial como argumento de linha de comando ou por meio de entrada padrão. Por que o fluxo de trabalho deveria preferir um canal secreto sem discussão apropriado?",
      "choices": [
        "Argumentos de linha de comando revogam credenciais automaticamente",
        "Os argumentos podem ser expostos por meio de inspeção de processo ou registro",
        "A entrada padrão sempre concede o repositório Admin",
        "GitHub exige que todos os segredos sejam confirmados antes do uso"
      ],
      "explanations": [
        "A colocação de argumentos não revoga uma credencial.",
        "Os argumentos da linha de comando podem ser visíveis para outros processos ou incluídos nos logs.",
        "A entrega de entrada não determina a autorização do repositório.",
        "Os segredos não devem ser confirmados na origem para execução do fluxo de trabalho."
      ],
      "concept": "Evitando exposição de credenciais em argumentos de processo",
      "hints": [
        "Quem pode inspecionar a invocação do processo?",
        "Um comando pode receber dados confidenciais sem colocá-los em sua lista de argumentos visíveis?"
      ]
    },
    "admin-191": {
      "prompt": "Um administrador fixa uma ação de terceiros a um commit SHA completo e diz que nenhuma revisão de código dessa revisão é necessária. Qual é a melhor correção?",
      "choices": [
        "A fixação garante que a ação não contém comportamento malicioso",
        "Uma tag mutável é sempre mais segura que uma SHA",
        "A fixação evita desvios de referência, mas não prova que o código fixado é confiável",
        "A fixação SHA restringe automaticamente todas as chamadas de rede de saída"
      ],
      "explanations": [
        "Uma revisão imutável ainda pode conter código inseguro ou malicioso.",
        "Tags mutáveis fornecem estabilidade de revisão de origem mais fraca.",
        "A integridade da referência e a confiança na implementação referenciada são distintas.",
        "A fixação não implementa restrições de saída de rede."
      ],
      "concept": "Integridade versus confiança nas ações",
      "hints": [
        "O que exatamente uma referência imutável garante?",
        "A revisão escolhida já pode conter comportamento indesejado?"
      ]
    },
    "admin-192": {
      "prompt": "Somente o trabalho de publicação precisa de packages: write; os trabalhos de teste só precisam de contents: read. Como as permissões do token devem ser configuradas?",
      "choices": [
        "Conceder packages: write no nível do fluxo de trabalho a todos os trabalhos por conveniência",
        "Use um PAT de proprietário corporativo compartilhado para todos os trabalhos",
        "Remova todas as permissões e espere que a publicação funcione",
        "Conceder permissões padrão mínimas ao fluxo de trabalho e packages: write apenas ao trabalho de publicação"
      ],
      "explanations": [
        "A autoridade de gravação em todo o fluxo de trabalho atinge desnecessariamente os trabalhos de teste.",
        "Um proprietário compartilhado PAT é mais amplo do que a necessidade específica do trabalho.",
        "A publicação requer as permissões apropriadas do pacote suportado.",
        "As concessões específicas do trabalho limitam a capacidade elevada à operação que dela necessita."
      ],
      "concept": "Elevação de permissão de token específico do trabalho",
      "hints": [
        "Qual trabalho realmente executa a gravação?",
        "Como pode ser negada autoridade de publicação a um trabalho de teste comprometido?"
      ]
    },
    "admin-193": {
      "prompt": "Uma ramificação recebe pushes frequentes, e execuções obsoletas de CI consomem capacidade de runners após a chegada de commits mais recentes. Qual controle de fluxo de trabalho pode cancelar execuções obsoletas no mesmo grupo pretendido?",
      "choices": [
        "Um grupo de concorrência com cancel-in-progress configurado adequadamente",
        "Um período de retenção de artefato mais longo",
        "Mais proprietários de organizações",
        "Um segredo com o mesmo nome do branch"
      ],
      "explanations": [
        "O agrupamento de simultaneidade pode cancelar execuções em andamento substituídas no grupo configurado.",
        "A retenção de artefatos afeta o armazenamento, e não o cancelamento de execuções obsoletas ativas.",
        "A propriedade não gerencia a simultaneidade do fluxo de trabalho.",
        "A nomenclatura secreta não controla o agendamento do fluxo de trabalho."
      ],
      "concept": "Cancelando execuções de fluxo de trabalho substituídas",
      "hints": [
        "Quais execuções representam um trabalho substituído por um evento mais recente?",
        "Como o fluxo de trabalho pode identificar as execuções que devem compartilhar um limite de agendamento?"
      ]
    },
    "admin-194": {
      "prompt": "Um teste de integração ocasionalmente trava indefinidamente em um self-hosted runner e bloqueia o trabalho posterior. Qual configuração de fluxo de trabalho limita mais diretamente o tempo de execução permitido do trabalho?",
      "choices": [
        "retention-days em um artefato carregado",
        "timeout-minutes no trabalho",
        "As permissões básicas do repositório",
        "O número de cessionários issue"
      ],
      "explanations": [
        "A retenção de artefatos limita a vida útil do artefato armazenado, e não o tempo de execução do trabalho.",
        "O tempo limite de um trabalho interrompe a execução após seu limite de tempo de execução configurado.",
        "As permissões do repositório base não definem a duração da execução.",
        "A atribuição de problemas não controla os tempos limite de runner."
      ],
      "concept": "Limitando a execução do fluxo de trabalho",
      "hints": [
        "O problema está esperando para começar ou continua por muito tempo depois de começar?",
        "Qual configuração mede a duração da execução do trabalho?"
      ]
    },
    "admin-195": {
      "prompt": "Uma equipe deseja armazenar em cache um diretório de construção que também contém um token de implantação. O que o administrador deve exigir?",
      "choices": [
        "Armazene o diretório em cache inalterado porque as chaves de cache são senhas",
        "Use o próprio valor do token como chave de cache",
        "Exclua credenciais e arquivos confidenciais de caminhos armazenados em cache",
        "Aumente o cache para melhorar o isolamento secreto"
      ],
      "explanations": [
        "As chaves de cache não criam um limite seguro de armazenamento de credenciais.",
        "Colocar um token em uma chave expõe dados confidenciais em metadados.",
        "Os caches de fluxo de trabalho não devem armazenar segredos ou outros materiais confidenciais.",
        "O tamanho do cache não determina a confidencialidade ou o isolamento do acesso."
      ],
      "concept": "Cache de fluxo de trabalho seguro para credenciais",
      "hints": [
        "Quem poderá restaurar um cache de fluxo de trabalho?",
        "A otimização de desempenho é um armazenamento secreto apropriado?"
      ]
    },
    "admin-196": {
      "prompt": "Uma empresa deve determinar quem mudou uma política da organização e quando. Qual fonte de evidência é o melhor ponto de partida?",
      "choices": [
        "Somente a lista atual de proprietários da organização",
        "Somente o valor da política atual",
        "Apenas histórico do repositório Git commit",
        "O log de auditoria empresarial"
      ],
      "explanations": [
        "As pessoas que poderiam agir não estabelecem quem realmente fez essa mudança.",
        "O estado atual não identifica o ator ou o momento de uma mudança passada.",
        "O histórico do Git geralmente não registra a administração de políticas da organização.",
        "Os eventos de auditoria registram ações administrativas apoiadas com informações de ator e tempo."
      ],
      "concept": "Atribuição de alterações administrativas",
      "hints": [
        "A configuração atual explica seu histórico de alterações?",
        "Qual registro foi projetado para conectar uma ação a um ator e carimbo de data/hora?"
      ]
    },
    "admin-197": {
      "prompt": "Um investigador conhece o ator, o repositório e a data aproximada de uma ação administrativa suspeita. Como eles deveriam tornar a pesquisa de auditoria empresarial mais útil?",
      "choices": [
        "Combine filtros relevantes de ator, repositório e data de criação, adicionando um filtro de ação, se conhecido",
        "Pesquise apenas o ator, ignorando deliberadamente o repositório e as datas conhecidas",
        "Pesquise mensagens commit locais em vez de eventos administrativos",
        "Revise apenas a lista atual de membros da equipe"
      ],
      "explanations": [
        "Os filtros de auditoria com escopo restringem as evidências sem assumir um tipo de ação desconhecido.",
        "Ignorar as informações disponíveis sobre escopo e tempo adiciona ruído desnecessário à investigação.",
        "Mensagens de commit não substituem registros de auditoria administrativa.",
        "O estado atual da equipe não identifica a ação histórica solicitada."
      ],
      "concept": "Pesquisas focadas em registros de auditoria",
      "hints": [
        "Quais fatos conhecidos podem reduzir resultados não relacionados?",
        "Como uma pesquisa com limite de tempo melhora a investigação de incidentes?"
      ]
    },
    "admin-198": {
      "prompt": "Um investigador GitHub Enterprise Cloud precisa de eventos Git de duas semanas atrás, mas nenhum arquivo externo foi configurado. Qual advertência de retenção é importante?",
      "choices": [
        "Os eventos Git têm a mesma retenção plurianual que um arquivo externo",
        "Os eventos Git de registro de auditoria corporativo nativo têm uma janela de retenção mais curta de sete dias",
        "Os eventos Git são armazenados indefinidamente nos comentários do repositório issue",
        "Alterar o tamanho da página da visualização de auditoria restaura eventos expirados"
      ],
      "explanations": [
        "A retenção nativa de eventos Git não é equivalente a um arquivo de longo prazo configurado de forma independente.",
        "Os eventos Git são retidos por sete dias no log de auditoria empresarial.",
        "Os comentários do problema não preservam automaticamente esses eventos de auditoria.",
        "As configurações de exibição não podem restaurar eventos além da janela de retenção."
      ],
      "concept": "Limites de retenção de eventos Git",
      "hints": [
        "Os eventos do Git são retidos pela mesma duração que outros eventos de auditoria?",
        "Um sistema externo preservou essas evidências antes que elas expirassem?"
      ]
    },
    "admin-199": {
      "prompt": "Uma empresa transmite logs de auditoria para um sistema de conformidade. Um novo painel não mostra eventos durante uma hora, mesmo que os usuários estejam ativos. O que os administradores devem investigar?",
      "choices": [
        "Suponha que a empresa não tivesse atividade sem verificar",
        "Exclua o destino para redefinir o histórico de conformidade",
        "A configuração de streaming, a integridade da ingestão de destino e as evidências de entrega recentes",
        "Os nomes apenas das ramificações locais do Git"
      ],
      "explanations": [
        "Um destino vazio pode refletir uma falha de ingestão em vez de nenhuma atividade de origem.",
        "A exclusão destrói as evidências e não diagnostica o pipeline.",
        "Tanto a entrega na origem quanto a ingestão no destino devem funcionar para evidências contínuas.",
        "Os nomes das ramificações locais não permitem determinar a integridade do pipeline de streaming."
      ],
      "concept": "Monitorando a integridade do fluxo de auditoria",
      "hints": [
        "Os dados ausentes poderiam refletir o pipeline de relatórios em vez do comportamento do usuário?",
        "Quais estágios conectam os eventos de origem ao painel?"
      ]
    },
    "admin-200": {
      "prompt": "Um relatório de licença identifica usuários com pouca atividade recente. Qual é a etapa de otimização mais responsável antes de remover o acesso?",
      "choices": [
        "Remova todos os usuários com baixa atividade imediatamente, incluindo proprietários de serviços",
        "Suponha que todos os usuários com aparência inativa tenham saído da empresa",
        "Use apenas o número de envios de código recentes para decidir quem retém uma licença",
        "Valide a necessidade do negócio, o status da identidade, as dependências de automação e o processo de desligamento"
      ],
      "explanations": [
        "A remoção não revisada pode interromper o trabalho legítimo e a automação.",
        "A actividade recente por si só não prova a necessidade de emprego ou de acesso.",
        "Uma métrica somente push ignora revisores, auditores e outros usuários legítimos de baixa frequência.",
        "A revisão contextual distingue licenças recuperáveis de acessos necessários, mas pouco frequentes."
      ],
      "concept": "Decisões seguras de recuperação de licença",
      "hints": [
        "Que papéis legítimos podem produzir pouca atividade diária?",
        "Quais dependências poderão ser quebradas se esta identidade perder acesso?"
      ]
    },
    "admin-201": {
      "prompt": "Os gastos totais de uma empresa com GitHub aumentaram, enquanto o número de usuários permaneceu estável. Qual detalhamento é mais útil antes de recomendar uma redução de licenças?",
      "choices": [
        "Uso medido por produto, SKU, período de tempo e escopo responsável",
        "Somente o número total de proprietários da organização",
        "Somente o número total atual de usuários licenciados",
        "Apenas o número de execuções de fluxo de trabalho bem-sucedidas, ignorando sua duração e tipo runner"
      ],
      "explanations": [
        "O consumo por produto pode explicar alterações de custos não relacionadas ao número de licenças.",
        "As contagens de proprietários por si só não explicam as cobranças dos produtos medidos.",
        "Uma quantidade de licenças inalterada não explica o crescimento em outras categorias de consumo.",
        "As contagens de execução omitem dimensões importantes de custo de computação e armazenamento."
      ],
      "concept": "Separando custos de licenças do crescimento do consumo medido",
      "hints": [
        "A mudança de custo poderia vir do consumo da carga de trabalho e não das pessoas?",
        "Quais dimensões do relatório identificam a fonte de cobrança real?"
      ]
    },
    "admin-202": {
      "prompt": "Um administrador cria um orçamento e presume que ele sempre interrompe todo o uso do produto GitHub no limite. Qual afirmação é precisa?",
      "choices": [
        "Cada orçamento bloqueia universalmente todos os produtos exatamente no mesmo limite",
        "Alertas e comportamento de interrupção do uso dependem da configuração do produto e do orçamento",
        "Os orçamentos excluem repositórios automaticamente para reduzir custos",
        "Um orçamento substitui a autorização do repositório"
      ],
      "explanations": [
        "GitHub documenta diferenças específicas do produto em vez de uma parada brusca universal.",
        "Os administradores devem verificar o controle compatível e seu comportamento configurado.",
        "Os orçamentos não funcionam excluindo repositórios indiscriminadamente.",
        "Os controles de gastos não substituem as permissões de acesso."
      ],
      "concept": "Alertas de orçamento versus aplicação de uso",
      "hints": [
        "Notificação é a mesma coisa que fiscalização?",
        "Qual comportamento específico do produto deve ser verificado?"
      ]
    },
    "admin-203": {
      "prompt": "Uma empresa precisa de atribuição departamental para gastos medidos com suporte de GitHub. Qual construção de faturamento deveria ser avaliada em vez de manter apenas um total indiferenciado da empresa?",
      "choices": [
        "Uma regra de nomenclatura de ramificação",
        "Um rascunho de consultoria de segurança",
        "Centros de custo",
        "Uma entrada CODEOWNERS sozinha"
      ],
      "explanations": [
        "Os nomes das ramificações não estabelecem uma estrutura de atribuição de cobrança.",
        "Os rascunhos consultivos gerenciam vulnerabilidades em vez de custos departamentais.",
        "Os centros de custo organizam a atribuição de cobrança suportada para recursos empresariais.",
        "A propriedade do código não atribui gastos medidos aos centros de custo de faturamento."
      ],
      "concept": "Atribuição de custos departamentais",
      "hints": [
        "Que estrutura conecta os recursos consumidos a um proprietário financeiro?",
        "A responsabilidade da revisão do código é automaticamente equivalente à atribuição de cobrança?"
      ]
    },
    "admin-204": {
      "prompt": "Um repositório público move compilações do GitHub-hosted runners padrão para o runners maior. A equipe assume que a visibilidade pública torna toda a execução do runner gratuita. O que o administrador deve esclarecer?",
      "choices": [
        "A visibilidade pública garante que todos os tipos de runner sejam gratuitos",
        "runners maiores consomem apenas licenças de estação de repositório",
        "Runners maiores sempre utilizam a mesma franquia gratuita que os runners padrão",
        "A permissão gratuita de repositório público para o padrão runners não torna o runners maior universalmente gratuito"
      ],
      "explanations": [
        "O tratamento de padrão público runner não se aplica universalmente a runners maiores.",
        "O uso de Larger-runner tem seu próprio faturamento, em vez de simplesmente consumir licenças corporativas.",
        "runners maiores têm tratamento de cobrança diferente das licenças padrão incluídas - runner.",
        "O tipo de runner e as regras de cobrança documentadas devem ser avaliadas separadamente."
      ],
      "concept": "Diferenças de faturamento da classe Runner",
      "hints": [
        "Uma exceção de cobrança se aplica a todas as categorias de computação?",
        "Qual categoria runner a equipe mudou?"
      ]
    },
    "admin-205": {
      "prompt": "Uma equipe para de executar fluxos de trabalho, mas continua retendo artefatos grandes. Por que o uso de armazenamento relacionado ao Actions pode permanecer relevante?",
      "choices": [
        "Os artefatos armazenados persistem até a expiração ou exclusão de acordo com a política de retenção aplicável",
        "A interrupção dos fluxos de trabalho exclui automaticamente todos os artefatos anteriores imediatamente",
        "Os artefatos tornam-se gratuitos simplesmente porque seu fluxo de trabalho está inativo",
        "Somente trabalhos em execução podem ocupar espaço de artefato armazenado"
      ],
      "explanations": [
        "A interrupção da execução não remove, por si só, os dados do artefato já retidos.",
        "Os artefatos anteriores não são excluídos automaticamente apenas porque nenhuma nova execução de fluxo de trabalho ocorre.",
        "A inatividade não elimina universalmente as implicações da cobrança de armazenamento.",
        "Os artefatos armazenados ocupam espaço independentemente da execução atual do trabalho."
      ],
      "concept": "Consumo persistente de armazenamento de artefatos",
      "hints": [
        "A vida útil da computação é igual à vida útil dos dados armazenados?",
        "Qual evento realmente encerra a retenção dos artefatos?"
      ]
    },
    "admin-206": {
      "prompt": "Uma organização deseja custos mais baixos de armazenamento de artefatos, mas as evidências de liberação devem ser retidas por um período de conformidade estabelecido. Qual otimização é apropriada?",
      "choices": [
        "Exclua todos os artefatos, independentemente da finalidade",
        "Aplique retenção específica para uma finalidade e remova artefatos desnecessários sem violar obrigações de evidência",
        "Aumente ao máximo a retenção de cada artefato",
        "Armazene credenciais de produção dentro de artefatos para combinar categorias de armazenamento"
      ],
      "explanations": [
        "A exclusão geral pode violar os requisitos de evidência de liberação.",
        "Diferentes classes de artefatos podem ter diferentes políticas justificadas de retenção e limpeza.",
        "A retenção máxima aumenta o armazenamento quando períodos mais curtos seriam suficientes.",
        "As credenciais não pertencem aos artefatos e não resolvem os custos de retenção."
      ],
      "concept": "Retenção de artefatos com reconhecimento de evidências",
      "hints": [
        "Quais resultados armazenados são evidências de conformidade versus produtos de construção descartáveis?",
        "Como a retenção pode refletir esses diferentes propósitos?"
      ]
    },
    "admin-207": {
      "prompt": "As compilações baixam repetidamente dependências idênticas e as taxas de acertos no cache são baixas porque cada execução usa uma chave completamente exclusiva, sem nenhuma estratégia de restauração útil. O que os administradores devem recomendar?",
      "choices": [
        "Desative todas as verificações de pacotes",
        "Conceda ao fluxo de trabalho mais permissões de administração de repositório",
        "Revise as chaves de cache e a estratégia de restauração em relação às entradas de dependência e, em seguida, meça o efeito",
        "Armazene todos os segredos de implantação no cache"
      ],
      "explanations": [
        "A remoção da verificação enfraquece a segurança da cadeia de fornecimento em vez de melhorar o design do cache.",
        "A administração do repositório não melhora a reutilização de chaves de cache.",
        "Chaves com reconhecimento de dependência podem melhorar a reutilização enquanto preservam a invalidação válida.",
        "Os caches não devem ser usados como armazenamentos secretos."
      ],
      "concept": "Medindo a reutilização útil do cache de dependência",
      "hints": [
        "Quais alterações devem invalidar o cache de dependência?",
        "Entradas de dependência idênticas repetidas podem produzir uma chave reutilizável?"
      ]
    },
    "admin-208": {
      "prompt": "Os relatórios de uso mostram muitas execuções CI concluídas, testando commits já substituídas por push mais recentes na mesma ramificação. Qual otimização visa melhor esse desperdício?",
      "choices": [
        "Remova todos os testes necessários",
        "Aumentar a janela de retenção de artefatos",
        "Torne o repositório público para evitar a revisão do fluxo de trabalho",
        "Use o cancelamento de simultaneidade com escopo cuidadoso para execuções obsoletas"
      ],
      "explanations": [
        "A eliminação de testes sacrifica a validação em vez de remover o trabalho redundante.",
        "A retenção de artefato não impede a execução redundante.",
        "As alterações de visibilidade não são um substituto apropriado para a otimização do fluxo de trabalho.",
        "O cancelamento de execuções substituídas pode recuperar a capacidade sem descartar a validação atual."
      ],
      "concept": "Reduzindo o consumo redundante de CI",
      "hints": [
        "Quais execuções não fornecem mais feedback útil?",
        "A última validação exigida pode continuar enquanto o trabalho obsoleto é cancelado?"
      ]
    },
    "admin-209": {
      "prompt": "Um trabalho lint independente de plataforma é executado em um sistema operacional runner mais caro do que o necessário. Como um administrador deve avaliar uma mudança de custo?",
      "choices": [
        "Valide-o em um runner apropriado e de baixo custo e compare o tempo de execução real e o uso faturado",
        "Suponha que todos os sistemas operacionais tenham taxas idênticas para sempre",
        "Exclua a verificação de lint sem avaliar alternativas",
        "Escolha apenas a tarifa por minuto anunciada mais baixa, sem verificar a compatibilidade ou a duração"
      ],
      "explanations": [
        "Compatibilidade, duração e preços atuais determinam juntos o resultado do custo útil.",
        "As taxas runner hospedadas e o tratamento de cobrança podem variar de acordo com a plataforma.",
        "A remoção da validação de qualidade necessária não é necessária para avaliar a eficiência da computação.",
        "Uma taxa unitária mais baixa não garante um custo total mais baixo ou um ambiente de execução correto."
      ],
      "concept": "Otimização de custos CI com reconhecimento de sistema operacional",
      "hints": [
        "Essa carga de trabalho realmente requer o sistema operacional atual?",
        "Por que o tempo de execução e o preço atual devem ser comparados?"
      ]
    },
    "admin-210": {
      "prompt": "Uma equipe propõe mover todos os fluxos de trabalho para o maior runner porque cada trabalho pode ser concluído mais rapidamente. Qual medida testa melhor se isso é uma otimização de custos?",
      "choices": [
        "Apenas o número de CPUs anunciado",
        "Tempo de conclusão ponta a ponta e consumo total faturado para cargas de trabalho representativas",
        "Somente a contagem de linhas do arquivo de fluxo de trabalho",
        "Apenas o número de contribuidores do repositório"
      ],
      "explanations": [
        "Mais CPUs não garantem aceleração proporcional ou custo menor.",
        "Medições representativas de tempo e consumo revelam o desempenho real e as compensações de custos.",
        "A contagem de linhas YAML não mede a utilização da computação.",
        "A contagem de contribuidores não estabelece a eficiência de um tamanho runner."
      ],
      "concept": "Dimensionamento correto do runner medido",
      "hints": [
        "A duplicação da computação pode custar menos se o tempo de execução cair o suficiente?",
        "Quais cargas de trabalho podem não se beneficiar de hardware paralelo adicional?"
      ]
    },
    "admin-211": {
      "prompt": "Uma organização considera self-hosted runners porque GitHub não cobra a execução de ações por eles. Qual fator de custo ainda pertence à decisão?",
      "choices": [
        "Somente o preço por minuto de GitHub-hosted, presumindo que seja cobrado de forma idêntica para a execução de self-hosted",
        "Sem outros custos; execução livre significa zero despesa operacional total",
        "Infraestrutura, aplicação de patches, isolamento de segurança, escalabilidade e suporte operacional",
        "Apenas o preço de compra da máquina virtual, ignorando a administração contínua"
      ],
      "explanations": [
        "A execução auto-hospedada não usa o mesmo modelo de cobrança de execução GitHub-hosted.",
        "O faturamento de execução GitHub não representa o custo total de operação de uma frota runner.",
        "A computação operada pelo cliente tem custos de infraestrutura e administração mesmo sem cobrança de execução de Ações.",
        "O custo de aquisição por si só omite a segurança contínua e as despesas operacionais."
      ],
      "concept": "Custo total de self-hosted runners",
      "hints": [
        "Quem paga e mantém as máquinas?",
        "Que trabalho desaparece da conta do serviço hospedado, mas permanece na organização?"
      ]
    },
    "admin-212": {
      "prompt": "Um departamento atribuiu muitas licenças do Copilot, mas o engajamento medido é baixo. Qual é a próxima ação mais útil?",
      "choices": [
        "Suponha que a atribuição comprove uma adoção bem-sucedida",
        "Remover imediatamente todas as licenças sem consultar as equipes",
        "Use apenas a contagem Git commit para classificar desenvolvedores individuais",
        "Compare os direitos e as evidências de uso e, em seguida, investigue a integração e as necessidades comerciais genuínas"
      ],
      "explanations": [
        "A atribuição mede a provisão de acesso, não necessariamente o uso ativo.",
        "A remoção não revisada pode descartar acesso valioso ou interromper os esforços de adoção.",
        "A contagem de commits, por si só, não é uma medida sólida de produtividade individual ou do valor do Copilot.",
        "O contexto de uso e de direitos pode identificar lacunas de capacitação e licenças recuperáveis."
      ],
      "concept": "Direito versus adoção",
      "hints": [
        "Ter acesso significa que o recurso está sendo usado de forma eficaz?",
        "Que barreiras não técnicas podem explicar o baixo envolvimento?"
      ]
    },
    "admin-213": {
      "prompt": "Após uma nova política de fluxo de trabalho, o tempo médio de entrega melhora. O proprietário de um painel afirma que a política por si só causou a melhoria. Qual interpretação é mais defensável?",
      "choices": [
        "O momento sugere uma hipótese; compare o mix de carga de trabalho e outras mudanças antes de alegar causalidade",
        "Quaisquer duas métricas movendo-se juntas estabelecem causalidade",
        "A entrega mais rápida prova que todo controle de segurança é desnecessário",
        "Um painel não pode informar nenhuma decisão operacional"
      ],
      "explanations": [
        "A comparação contextual ajuda a separar os efeitos das políticas de outras condições em mudança.",
        "A correlação e o momento por si só não provam a causalidade.",
        "A velocidade de entrega não determina se a governança de segurança é necessária.",
        "As métricas podem informar as decisões quando as suas limitações são reconhecidas."
      ],
      "concept": "Interpretando tendências de adoção e desempenho",
      "hints": [
        "O que mais mudou durante o período de medição?",
        "As cargas de trabalho e as populações comparadas foram semelhantes?"
      ]
    },
    "admin-214": {
      "prompt": "Uma empresa relata menos usuários ativos neste mês, mas também unificou várias organizações e alterou a população do relatório. O que um administrador deve fazer antes de declarar que a adoção diminuiu?",
      "choices": [
        "Ignore a mudança populacional",
        "Normalize a janela de tempo, a população e as definições de métricas antes de comparar os períodos",
        "Use apenas o maior número diário de cada período",
        "Exclua o relatório anterior porque é inconveniente"
      ],
      "explanations": [
        "Uma população alterada pode produzir comparações brutas enganosas.",
        "Definições e populações comparáveis são pré-requisitos para a interpretação de uma tendência.",
        "A escolha dos picos introduz viés de seleção e não normaliza a cobertura.",
        "Descartar o histórico impede uma análise transparente."
      ],
      "concept": "Linhas de base de relatórios de uso comparáveis",
      "hints": [
        "Ambos os relatórios medem as mesmas pessoas e a mesma duração do período?",
        "Poderia uma mudança no denominador explicar a tendência aparente?"
      ]
    },
    "admin-215": {
      "prompt": "Um gerente deseja classificar a produtividade do desenvolvedor usando apenas contagens de eventos de auditoria empresarial. Qual a melhor orientação administrativa?",
      "choices": [
        "Os eventos de auditoria são uma medida completa da qualidade do software",
        "A maior contagem de eventos sempre identifica o engenheiro mais produtivo",
        "Os registros de auditoria apoiam a atribuição e conformidade de atividades, e não uma medida completa de produtividade individual",
        "Exclua usuários com contagem baixa automaticamente"
      ],
      "explanations": [
        "As contagens de eventos administrativos não medem todas as dimensões da qualidade do software.",
        "O volume de eventos varia de acordo com a tarefa e não estabelece valor individual.",
        "A finalidade e a cobertura do registo de auditoria limitam a forma como as suas contagens de atividades devem ser interpretadas.",
        "A remoção de acesso requer revisão de autorização em vez de uma classificação simplista de atividades."
      ],
      "concept": "Limites das métricas de produtividade derivadas de auditoria",
      "hints": [
        "Que tipos de trabalho não produzem nenhum evento administrativo relevante?",
        "Esta fonte de dados foi projetada para medir a qualidade individual dos resultados?"
      ]
    },
    "admin-216": {
      "prompt": "A limitação do API aumenta após a implantação de uma nova integração de conformidade. Quais evidências os administradores devem coletar para encontrar uma otimização útil?",
      "choices": [
        "Somente a lista de permissões aprovadas da integração",
        "Apenas a data de validade do seu token",
        "Somente o número total de membros da organização",
        "Frequência de solicitação, combinação de endpoints, simultaneidade, cabeçalhos de resposta e comportamento de repetição"
      ],
      "explanations": [
        "As permissões descrevem a autoridade, mas não a frequência real da solicitação e o comportamento de novas tentativas.",
        "Os metadados de expiração não explicam rajadas ou pesquisas redundantes.",
        "A contagem de membros por si só não revela o padrão de chamada da integração.",
        "A evidência do padrão de solicitação identifica pesquisas redundantes, rajadas e tratamento incorreto de novas tentativas."
      ],
      "concept": "Diagnosticando padrões de consumo API",
      "hints": [
        "Quais características podem acionar limites primários ou secundários?",
        "O que a nova integração mudou no padrão de solicitação?"
      ]
    },
    "admin-217": {
      "prompt": "Dois relatórios de uso medido discordam porque um cobre um mês e o outro um intervalo contínuo de trinta dias. O que deve acontecer antes de investigar um defeito de faturamento?",
      "choices": [
        "Alinhe os intervalos de datas, escopos, unidades e definições de relatório",
        "Suponha que o relatório maior deve ser fraudulento",
        "Adicione os relatórios como se fossem separados",
        "Remova as permissões de repositório de todos os usuários"
      ],
      "explanations": [
        "São necessários escopo e períodos comparáveis antes de reconciliar os totais do relatório.",
        "Uma incompatibilidade entre janelas de relatórios não é evidência de fraude.",
        "Os períodos sobrepostos não podem ser somados como consumo independente.",
        "A remoção da autorização não reconcilia as definições do relatório."
      ],
      "concept": "Reconciliando relatórios de uso medido",
      "hints": [
        "Os relatórios realmente descrevem o mesmo intervalo e recursos?",
        "Quais definições devem corresponder antes que os totais concordem?"
      ]
    },
    "admin-218": {
      "prompt": "Vários proprietários de organizações relatam independentemente o mesmo funcionário como consumidor de licença. Um relatório central soma essas linhas e parece exceder a contagem de usuários exclusivos da empresa. O que deve ser verificado?",
      "choices": [
        "Se o funcionário possui vários clones locais",
        "Se o relatório desduplica identidades de acordo com o escopo de licenciamento empresarial",
        "Se cada repositório usa o mesmo nome de branch padrão",
        "Se todas as organizações usam modelos issue idênticos"
      ],
      "explanations": [
        "Os clones locais não criam identidades de usuário corporativo adicionais.",
        "As associações repetidas devem ser conciliadas com o modelo documentado de licenciamento de usuário único.",
        "A nomenclatura de ramificações não elimina duplicidades entre os consumidores de licenças.",
        "Os modelos de issues não afetam a correspondência de identidades usada na contagem de licenças."
      ],
      "concept": "Desduplicando relatórios de consumo de licença",
      "hints": [
        "A mesma identidade pode aparecer em vários relatórios de origem?",
        "Qual é a unidade que está sendo licenciada em vez do número de linhas do relatório?"
      ]
    },
    "admin-219": {
      "prompt": "O suporte precisa de evidências de um incidente de desempenho GHES, incluindo contexto do dispositivo e logs relevantes. Qual plano de coleta apoia melhor a análise, respeitando a confidencialidade?",
      "choices": [
        "Publique o pacote publicamente para que qualquer pessoa possa ajudar a interpretá-lo",
        "Envie apenas uma captura de tela atual do consumo da licença",
        "Colete o pacote de suporte documentado que cobre o incidente e forneça detalhes do escopo por meio do canal de suporte",
        "Exclua os logs antes de escalar para minimizar o arquivo morto"
      ],
      "explanations": [
        "O compartilhamento público pode expor informações operacionais internas, apesar da higienização de credenciais.",
        "A evidência de consumo de licenças não fornece os logs e o contexto do appliance solicitados.",
        "Um pacote de suporte com escopo correto e detalhes do incidente fornecem evidências acionáveis com tratamento controlado.",
        "A exclusão de evidências prejudica a análise do incidente."
      ],
      "concept": "Evidência diagnóstica para escalonamento de desempenho",
      "hints": [
        "O que o Suporte pode correlacionar com o período do incidente relatado?",
        "Qual caminho de coleta preserva o contexto útil sem divulgação ampla?"
      ]
    },
    "admin-220": {
      "prompt": "Um problema do Cloud API persiste depois que o administrador verifica as permissões e as respostas de limite de taxa. O que uma transferência de suporte útil deve incluir?",
      "choices": [
        "Apenas uma alegação de que todos os produtos GitHub estão indisponíveis",
        "Uma senha de proprietário compartilhada para que o Support possa se passar por qualquer funcionário",
        "Uma instrução para remover todas as políticas empresariais sem investigação",
        "Solicitações representativas com falha, respostas higienizadas, carimbos de data/hora, identificadores de solicitação e escopo afetado"
      ],
      "explanations": [
        "Uma afirmação ampla e não fundamentada obscurece o impacto real.",
        "As senhas não devem ser compartilhadas para transferência de suporte.",
        "A remoção de todas as políticas não é uma escalada baseada em evidências.",
        "Evidências específicas de solicitação higienizadas ajudam o suporte a localizar e diagnosticar a falha."
      ],
      "concept": "Transferência de suporte na nuvem baseada em evidências",
      "hints": [
        "O que distingue a solicitação com falha das solicitações bem-sucedidas?",
        "Quais informações permitem ao operador de serviço correlacionar seus próprios logs?"
      ]
    },
    "admin-221": {
      "prompt": "O clone GHES e os tempos de resposta da web pioram durante atividades intensas. Antes de comprar mais hardware, qual investigação apoia melhor uma decisão de capacidade?",
      "choices": [
        "Correlacione o tempo da carga de trabalho com recursos de instância relevantes e métricas de integridade do serviço",
        "Aumente a alocação de CPU sem medir a utilização de CPU",
        "Adicione memória sem inspecionar a pressão da memória ou outros gargalos",
        "Migre o armazenamento antes de verificar a latência e a taxa de transferência do disco"
      ],
      "explanations": [
        "A utilização correlacionada e as evidências de serviço ajudam a identificar o gargalo real.",
        "Mais CPU pode não ajudar uma instância limitada por memória ou armazenamento.",
        "A expansão de memória não medida pode deixar o recurso limitante real inalterado.",
        "A migração de armazenamento deve seguir a evidência de um gargalo de armazenamento."
      ],
      "concept": "Planejamento de capacidade GHES baseado em evidências",
      "hints": [
        "Qual recurso compartilhado pode ficar saturado durante o período lento?",
        "O que demonstraria que mais hardware aborda o fator limitante?"
      ]
    },
    "admin-222": {
      "prompt": "Uma equipe de plataforma testa um runner maior para um tipo de construção. Qual resultado justificaria melhor uma adoção mais ampla?",
      "choices": [
        "O runner tem um nome mais impressionante",
        "Medições representativas mostram confiabilidade aceitável e uma melhoria de tempo versus custo que vale a pena",
        "Uma corrida invulgarmente rápida é a única evidência",
        "Presume-se que todos os outros tipos de construção sejam dimensionados de forma idêntica"
      ],
      "explanations": [
        "Os nomes não medem o benefício operacional.",
        "A confiabilidade representativa, a duração e as evidências de custos apoiam uma implementação medida.",
        "Um valor atípico não é uma linha de base confiável para decisão de capacidade.",
        "Cargas de trabalho diferentes podem ter gargalos e comportamentos de escalonamento diferentes."
      ],
      "concept": "Validando pilotos de otimização de desempenho",
      "hints": [
        "Como o piloto pode distinguir um benefício repetível de um único valor atípico?",
        "Qual compensação é importante além do menor tempo de execução observado?"
      ]
    },
    "admin-223": {
      "prompt": "Uma integração API excede os limites porque pesquisa repetidamente dados inalterados. Um desenvolvedor propõe emprestar PATs de vários colegas de trabalho. O que os administradores deveriam recomendar?",
      "choices": [
        "Compartilhe todas as credenciais de proprietário disponíveis",
        "Remova todas as trilhas de auditoria para reduzir os registros API",
        "Melhore a pesquisa, o armazenamento em cache, o uso de eventos e a espera sob uma identidade de integração com escopo correto",
        "Desative SAML para toda a empresa"
      ],
      "explanations": [
        "As credenciais compartilhadas aumentam o risco e obscurecem a atribuição.",
        "A remoção de auditoria não aborda o tráfego API redundante.",
        "O design eficiente da solicitação aborda a causa raiz sem soluções alternativas de compartilhamento de credenciais.",
        "A remoção de SSO não torna apropriado o comportamento ineficiente de API."
      ],
      "concept": "Otimização responsável da capacidade API",
      "hints": [
        "Adicionar identidades emprestadas reduz o trabalho desnecessário?",
        "Quais mudanças melhoram a eficiência e ao mesmo tempo preservam a responsabilidade?"
      ]
    },
    "admin-224": {
      "prompt": "Um proprietário financeiro deseja usar um orçamento de produto medido GitHub para controlar um contrato de licença por volume pré-pago existente. Que limitação o administrador deve explicar?",
      "choices": [
        "Alertas de orçamento reescrevem automaticamente todos os contratos pré-pagos",
        "Um orçamento suspende permanentemente todos os usuários licenciados no seu limite",
        "As configurações de orçamento determinam a visibilidade do repositório",
        "Orçamentos medidos e alertas não estão disponíveis para licenças por volume pré-pagas"
      ],
      "explanations": [
        "A configuração do orçamento não altera um contrato pré-pago.",
        "A suspensão universal do usuário não é o comportamento documentado de todos os orçamentos.",
        "Os controles de gastos não definem a visibilidade do repositório.",
        "GitHub distingue orçamentos medidos de gerenciamento de licença por volume pré-pago."
      ],
      "concept": "Aplicabilidade orçamentária aos modelos de licenciamento",
      "hints": [
        "A despesa é medida pelo uso ou já está comprometida por contrato?",
        "O recurso de orçamento se aplica a esse modelo de compra?"
      ]
    },
    "admin-225": {
      "prompt": "Uma revisão de custos encontra um repositório responsável por uma grande parcela do uso medido. Qual próximo passo equilibra a otimização com a continuidade dos negócios?",
      "choices": [
        "Revise os drivers no nível do produto com a equipe proprietária e, em seguida, teste as alterações direcionadas e avalie o resultado",
        "Exclua o repositório imediatamente porque gastos elevados provam desperdício",
        "Remover todos os usuários da organização",
        "Desative todos os controles de segurança antes de examinar o relatório"
      ],
      "explanations": [
        "A análise conjunta pode distinguir a carga de trabalho valiosa dos custos evitáveis e validar melhorias seguras.",
        "Gastos elevados por si só não justificam a remoção destrutiva de um repositório crítico para os negócios.",
        "A remoção de acesso amplo não diagnostica o driver de consumo.",
        "A remoção dos controles de segurança sem análise apresenta riscos e pode não resolver os custos."
      ],
      "concept": "Otimização do consumo responsável",
      "hints": [
        "Qual carga de trabalho comercial está gerando a cobrança?",
        "Como a economia proposta pode ser testada sem remover a capacidade necessária?"
      ]
    }
  }
};
