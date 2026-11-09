export const translations = {
    "es": {
        "ghas-ecosystem-001": {
            "prompt": "¿Qué producto de GitHub que se compra por separado incluye análisis de código y revisión de dependencias?",
            "choices": [
                "GitHub Team",
                "GitHub Enterprise Cloud",
                "GitHub Code Security",
                "GitHub Secret Protection"
            ],
            "explanations": [
                "Team es un plan de GitHub, no el producto de análisis de código que se compra por separado.",
                "Enterprise Cloud es un plan de alojamiento, no un sustituto de la licencia del producto de seguridad correspondiente.",
                "Este producto incluye análisis de código, revisión de dependencias y funciones avanzadas de Dependabot.",
                "Este producto se centra en detectar y prevenir la exposición de credenciales."
            ],
            "concept": "Alcance del producto Code Security",
            "hints": [
                "Distingue la licencia del producto del plan base de GitHub.",
                "Compara el tipo de riesgo que aborda cada producto."
            ]
        },
        "ghas-ecosystem-002": {
            "prompt": "¿Qué producto de seguridad de pago reúne detección de filtraciones de credenciales y push protection?",
            "choices": [
                "GitHub Team",
                "GitHub Enterprise Cloud",
                "GitHub Code Security",
                "GitHub Secret Protection"
            ],
            "explanations": [
                "Team es un plan de GitHub, no el producto de análisis de código que se compra por separado.",
                "Enterprise Cloud es un plan de alojamiento, no un sustituto de la licencia del producto de seguridad correspondiente.",
                "Este producto incluye análisis de código, revisión de dependencias y funciones avanzadas de Dependabot.",
                "Este producto se centra en detectar y prevenir la exposición de credenciales."
            ],
            "concept": "Alcance del producto Secret Protection",
            "hints": [
                "Distingue la licencia del producto del plan base de GitHub.",
                "Compara el tipo de riesgo que aborda cada producto."
            ]
        },
        "ghas-ecosystem-003": {
            "prompt": "¿Qué función de dependencias puede usar una organización sin comprar Code Security ni Secret Protection?",
            "choices": [
                "Análisis de secretos en repositorios privados",
                "Dependabot alerts",
                "Análisis de código en repositorios privados",
                "Análisis de código en repositorios públicos"
            ],
            "explanations": [
                "En GitHub.com, el análisis de secretos privado requiere la licencia de Secret Protection o de GHAS anterior correspondiente.",
                "Las alertas básicas de vulnerabilidades de Dependabot están disponibles sin comprar ninguno de los dos productos de seguridad.",
                "En GitHub.com, requiere un plan de organización apto y licencia de Code Security o la licencia anterior de GHAS correspondiente.",
                "El análisis de código es gratuito en repositorios públicos; la configuración y los permisos siguen siendo necesarios."
            ],
            "concept": "Alertas básicas de dependencias sin licencia aparte de cadena de suministro",
            "hints": [
                "Comprueba por separado la visibilidad del repositorio y la licencia de la función.",
                "Una etiqueta general de seguridad no implica que todas las funciones tengan la misma disponibilidad."
            ]
        },
        "ghas-ecosystem-004": {
            "prompt": "Una analista autorizada quiere Security overview de una organización, no de un solo repositorio. ¿Qué ruta de la interfaz en inglés abre ese ámbito?",
            "choices": [
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality",
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning"
            ],
            "explanations": [
                "Esta vista contiene alertas de exposición de credenciales para usuarios autorizados.",
                "La pestaña de la organización ofrece Security overview de los repositorios accesibles.",
                "El gráfico de dependencias es un inventario accesible desde Insights en el repositorio.",
                "Esta vista del repositorio enumera hallazgos de herramientas de análisis de código."
            ],
            "concept": "Navegación de seguridad organizativa",
            "hints": [
                "Distingue el ámbito del repositorio del de la organización.",
                "Considera si estás revisando hallazgos o el inventario de dependencias."
            ]
        },
        "ghas-ecosystem-005": {
            "prompt": "¿Qué vista de Security overview responde «¿Qué repositorios no han adoptado las funciones de seguridad?»?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume las tendencias de detección, corrección y prevención.",
                "Campaigns coordina trabajo de corrección específico y sigue su progreso.",
                "Coverage muestra la adopción de funciones de seguridad en los repositorios.",
                "Risk permite investigar repositorios y alertas que representan exposición actual."
            ],
            "concept": "Adopción de funciones de seguridad",
            "hints": [
                "Decide si necesitas adopción, exposición, tendencias o trabajo coordinado.",
                "Relaciona la pregunta con el propósito de la vista, no con su diseño visual."
            ]
        },
        "ghas-ecosystem-006": {
            "prompt": "¿Qué vista de Security overview permite investigar la exposición actual entre tipos de alerta?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume las tendencias de detección, corrección y prevención.",
                "Campaigns coordina trabajo de corrección específico y sigue su progreso.",
                "Coverage muestra la adopción de funciones de seguridad en los repositorios.",
                "Risk permite investigar repositorios y alertas que representan exposición actual."
            ],
            "concept": "Investigación del riesgo entre funciones",
            "hints": [
                "Decide si necesitas adopción, exposición, tendencias o trabajo coordinado.",
                "Relaciona la pregunta con el propósito de la vista, no con su diseño visual."
            ]
        },
        "ghas-ecosystem-007": {
            "prompt": "¿Dónde resume Security overview las tendencias de detección, corrección y prevención?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume las tendencias de detección, corrección y prevención.",
                "Campaigns coordina trabajo de corrección específico y sigue su progreso.",
                "Coverage muestra la adopción de funciones de seguridad en los repositorios.",
                "Risk permite investigar repositorios y alertas que representan exposición actual."
            ],
            "concept": "Panel de tendencias de seguridad",
            "hints": [
                "Decide si necesitas adopción, exposición, tendencias o trabajo coordinado.",
                "Relaciona la pregunta con el propósito de la vista, no con su diseño visual."
            ]
        },
        "ghas-ecosystem-008": {
            "prompt": "¿Qué vista de Security overview coordina un esfuerzo de corrección seleccionado entre repositorios?",
            "choices": [
                "Coverage",
                "Risk",
                "Overview",
                "Campaigns"
            ],
            "explanations": [
                "Coverage muestra la adopción de funciones de seguridad en los repositorios.",
                "Risk permite investigar repositorios y alertas que representan exposición actual.",
                "Overview resume las tendencias de detección, corrección y prevención.",
                "Campaigns coordina trabajo de corrección específico y sigue su progreso."
            ],
            "concept": "Vista de coordinación de campañas",
            "hints": [
                "Decide si necesitas adopción, exposición, tendencias o trabajo coordinado.",
                "Relaciona la pregunta con el propósito de la vista, no con su diseño visual."
            ]
        },
        "ghas-ecosystem-009": {
            "prompt": "En la interfaz del repositorio en inglés, ¿dónde puedes consultar el inventario de dependencias reconocidas?",
            "choices": [
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality"
            ],
            "explanations": [
                "El gráfico de dependencias es un inventario accesible desde Insights en el repositorio.",
                "Esta vista del repositorio enumera hallazgos de herramientas de análisis de código.",
                "Esta vista contiene alertas de exposición de credenciales para usuarios autorizados.",
                "La pestaña de la organización ofrece Security overview de los repositorios accesibles."
            ],
            "concept": "Navegación del inventario de dependencias",
            "hints": [
                "Distingue el ámbito del repositorio del de la organización.",
                "Considera si estás revisando hallazgos o el inventario de dependencias."
            ]
        },
        "ghas-ecosystem-010": {
            "prompt": "¿Qué ruta de la interfaz en inglés enumera los hallazgos del repositorio de CodeQL y otros analizadores estáticos integrados?",
            "choices": [
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality",
                "Repository > Insights > Dependency graph"
            ],
            "explanations": [
                "Esta vista del repositorio enumera hallazgos de herramientas de análisis de código.",
                "Esta vista contiene alertas de exposición de credenciales para usuarios autorizados.",
                "La pestaña de la organización ofrece Security overview de los repositorios accesibles.",
                "El gráfico de dependencias es un inventario accesible desde Insights en el repositorio."
            ],
            "concept": "Navegación de hallazgos de análisis de código",
            "hints": [
                "Distingue el ámbito del repositorio del de la organización.",
                "Considera si estás revisando hallazgos o el inventario de dependencias."
            ]
        },
        "ghas-ecosystem-011": {
            "prompt": "Una persona autorizada necesita alertas de exposición de credenciales del repositorio. ¿Qué ruta de la interfaz en inglés corresponde?",
            "choices": [
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality"
            ],
            "explanations": [
                "El gráfico de dependencias es un inventario accesible desde Insights en el repositorio.",
                "Esta vista del repositorio enumera hallazgos de herramientas de análisis de código.",
                "Esta vista contiene alertas de exposición de credenciales para usuarios autorizados.",
                "La pestaña de la organización ofrece Security overview de los repositorios accesibles."
            ],
            "concept": "Navegación de alertas de credenciales",
            "hints": [
                "Distingue el ámbito del repositorio del de la organización.",
                "Considera si estás revisando hallazgos o el inventario de dependencias."
            ]
        },
        "ghas-ecosystem-012": {
            "prompt": "¿Qué detector compara versiones de dependencias reconocidas con avisos de vulnerabilidades revisados?",
            "choices": [
                "Dependabot alerts",
                "Dependency review",
                "Code scanning",
                "Secret scanning"
            ],
            "explanations": [
                "Las alertas de Dependabot relacionan vulnerabilidades conocidas con dependencias del gráfico de dependencias.",
                "La revisión de dependencias muestra el impacto de los cambios de dependencias en un pull request.",
                "El análisis de código busca vulnerabilidades y errores de programación en el código fuente.",
                "El análisis de secretos identifica credenciales expuestas, no versiones vulnerables de paquetes."
            ],
            "concept": "Detección de dependencias basada en avisos",
            "hints": [
                "Identifica si la evidencia es código, una credencial o un paquete.",
                "Los mecanismos de detección usan entradas distintas; compáralas."
            ]
        },
        "ghas-ecosystem-013": {
            "prompt": "¿Qué función investiga comportamientos inseguros del código fuente en vez de comparar versiones de paquetes o patrones de credenciales?",
            "choices": [
                "Dependabot alerts",
                "Dependency review",
                "Code scanning",
                "Secret scanning"
            ],
            "explanations": [
                "Las alertas de Dependabot relacionan vulnerabilidades conocidas con dependencias del gráfico de dependencias.",
                "La revisión de dependencias muestra el impacto de los cambios de dependencias en un pull request.",
                "El análisis de código busca vulnerabilidades y errores de programación en el código fuente.",
                "El análisis de secretos identifica credenciales expuestas, no versiones vulnerables de paquetes."
            ],
            "concept": "Detección de vulnerabilidades del código fuente",
            "hints": [
                "Identifica si la evidencia es código, una credencial o un paquete.",
                "Los mecanismos de detección usan entradas distintas; compáralas."
            ]
        },
        "ghas-ecosystem-014": {
            "prompt": "¿Qué función busca material de autenticación expuesto en el contenido del repositorio?",
            "choices": [
                "Secret scanning",
                "Dependabot alerts",
                "Dependency review",
                "Code scanning"
            ],
            "explanations": [
                "El análisis de secretos identifica credenciales expuestas, no versiones vulnerables de paquetes.",
                "Las alertas de Dependabot relacionan vulnerabilidades conocidas con dependencias del gráfico de dependencias.",
                "La revisión de dependencias muestra el impacto de los cambios de dependencias en un pull request.",
                "El análisis de código busca vulnerabilidades y errores de programación en el código fuente."
            ],
            "concept": "Detección de patrones de credenciales",
            "hints": [
                "Identifica si la evidencia es código, una credencial o un paquete.",
                "Los mecanismos de detección usan entradas distintas; compáralas."
            ]
        },
        "ghas-ecosystem-015": {
            "prompt": "¿Qué función explica el impacto de seguridad de agregar y eliminar dependencias en un pull request?",
            "choices": [
                "Secret scanning",
                "Dependabot alerts",
                "Dependency review",
                "Code scanning"
            ],
            "explanations": [
                "El análisis de secretos identifica credenciales expuestas, no versiones vulnerables de paquetes.",
                "Las alertas de Dependabot relacionan vulnerabilidades conocidas con dependencias del gráfico de dependencias.",
                "La revisión de dependencias muestra el impacto de los cambios de dependencias en un pull request.",
                "El análisis de código busca vulnerabilidades y errores de programación en el código fuente."
            ],
            "concept": "Revisión de cambios de dependencias",
            "hints": [
                "Identifica si la evidencia es código, una credencial o un paquete.",
                "Los mecanismos de detección usan entradas distintas; compáralas."
            ]
        },
        "ghas-ecosystem-016": {
            "prompt": "¿Qué función mantiene relaciones de dependencias directas y transitivas reconocidas en GitHub en vez de exportar una instantánea del inventario?",
            "choices": [
                "Software bill of materials (SBOM)",
                "Artifact attestations",
                "GitHub Advisory Database",
                "Dependency graph"
            ],
            "explanations": [
                "Un SBOM exporta un inventario de dependencias; no demuestra que todos los componentes sean seguros.",
                "Las atestaciones aportan evidencia verificable de procedencia e integridad de una compilación.",
                "Esta base ofrece avisos de vulnerabilidades publicados, no un inventario del repositorio.",
                "El gráfico de dependencias inventaría dependencias reconocidas y sus relaciones."
            ],
            "concept": "Inventario de relaciones de dependencias",
            "hints": [
                "Distingue inventario, procedencia, información de vulnerabilidades y automatización de actualizaciones.",
                "Piensa qué artefacto o proceso aporta la evidencia que necesitas."
            ]
        },
        "ghas-ecosystem-017": {
            "prompt": "¿Qué control puede impedir que una credencial compatible entre en un repositorio durante el push?",
            "choices": [
                "Code scanning",
                "Repository rulesets",
                "Push protection",
                "Dependency review"
            ],
            "explanations": [
                "Code scanning puede detectar vulnerabilidades del código fuente al analizar un pull request.",
                "Los rulesets pueden exigir comprobaciones y otras condiciones antes de aceptar cambios.",
                "Push protection bloquea secretos compatibles durante un push, antes de que entren en el repositorio.",
                "Dependency review aporta información sobre dependencias modificadas antes de la fusión."
            ],
            "concept": "Prevención de credenciales en el punto de entrada",
            "hints": [
                "Sitúa el control en el momento en que proporciona información.",
                "Distingue un detector de la política que exige su resultado."
            ]
        },
        "ghas-ecosystem-018": {
            "prompt": "¿Qué mecanismo convierte una comprobación aprobada en condición obligatoria de fusión en vez de limitarse a mostrar sus hallazgos?",
            "choices": [
                "Push protection",
                "Dependency review",
                "Code scanning",
                "Repository rulesets"
            ],
            "explanations": [
                "Push protection bloquea secretos compatibles durante un push, antes de que entren en el repositorio.",
                "Dependency review aporta información sobre dependencias modificadas antes de la fusión.",
                "Code scanning puede detectar vulnerabilidades del código fuente al analizar un pull request.",
                "Los rulesets pueden exigir comprobaciones y otras condiciones antes de aceptar cambios."
            ],
            "concept": "Detección frente a aplicación obligatoria",
            "hints": [
                "Sitúa el control en el momento en que proporciona información.",
                "Distingue un detector de la política que exige su resultado."
            ]
        },
        "ghas-ecosystem-019": {
            "prompt": "¿Qué función aporta evidencia verificable de dónde y cómo se produjo un artefacto de compilación?",
            "choices": [
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "El gráfico de dependencias inventaría dependencias reconocidas y sus relaciones.",
                "Un SBOM exporta un inventario de dependencias; no demuestra que todos los componentes sean seguros.",
                "Las atestaciones aportan evidencia verificable de procedencia e integridad de una compilación.",
                "Esta base ofrece avisos de vulnerabilidades publicados, no un inventario del repositorio."
            ],
            "concept": "Evidencia de procedencia de compilaciones",
            "hints": [
                "Distingue inventario, procedencia, información de vulnerabilidades y automatización de actualizaciones.",
                "Piensa qué artefacto o proceso aporta la evidencia que necesitas."
            ]
        },
        "ghas-ecosystem-020": {
            "prompt": "¿Qué exportación ofrece un inventario de componentes para análisis posteriores de la cadena de suministro sin certificar que sean seguros?",
            "choices": [
                "GitHub Advisory Database",
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations"
            ],
            "explanations": [
                "Esta base ofrece avisos de vulnerabilidades publicados, no un inventario del repositorio.",
                "El gráfico de dependencias inventaría dependencias reconocidas y sus relaciones.",
                "Un SBOM exporta un inventario de dependencias; no demuestra que todos los componentes sean seguros.",
                "Las atestaciones aportan evidencia verificable de procedencia e integridad de una compilación."
            ],
            "concept": "Límites del inventario SBOM",
            "hints": [
                "Distingue inventario, procedencia, información de vulnerabilidades y automatización de actualizaciones.",
                "Piensa qué artefacto o proceso aporta la evidencia que necesitas."
            ]
        },
        "ghas-ecosystem-021": {
            "prompt": "¿Dónde puede un desarrollador consultar registros de vulnerabilidades publicados de varios ecosistemas, en vez de inspeccionar dependencias de un repositorio?",
            "choices": [
                "GitHub Advisory Database",
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations"
            ],
            "explanations": [
                "Esta base ofrece avisos de vulnerabilidades publicados, no un inventario del repositorio.",
                "El gráfico de dependencias inventaría dependencias reconocidas y sus relaciones.",
                "Un SBOM exporta un inventario de dependencias; no demuestra que todos los componentes sean seguros.",
                "Las atestaciones aportan evidencia verificable de procedencia e integridad de una compilación."
            ],
            "concept": "Información pública de vulnerabilidades",
            "hints": [
                "Distingue inventario, procedencia, información de vulnerabilidades y automatización de actualizaciones.",
                "Piensa qué artefacto o proceso aporta la evidencia que necesitas."
            ]
        },
        "ghas-ecosystem-022": {
            "prompt": "¿Qué función permite colaborar en privado sobre una vulnerabilidad del repositorio y divulgarla públicamente de forma coordinada después?",
            "choices": [
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "Una política de seguridad explica las versiones compatibles y cómo informar de vulnerabilidades.",
                "Esta función ofrece a investigadores un canal privado para informar a quienes mantienen el repositorio.",
                "Los avisos del repositorio permiten discutir en privado, coordinar correcciones y publicar después.",
                "La base es una colección de avisos de seguridad publicados que se puede consultar."
            ],
            "concept": "Flujo de avisos coordinados",
            "hints": [
                "Distingue instrucciones, recepción confidencial, corrección coordinada y datos de referencia públicos.",
                "Considera el público y la fase de divulgación."
            ]
        },
        "ghas-ecosystem-023": {
            "prompt": "¿Qué convención de archivo del repositorio comunica las versiones compatibles y el proceso preferido para informar de vulnerabilidades?",
            "choices": [
                "GitHub Advisory Database",
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories"
            ],
            "explanations": [
                "La base es una colección de avisos de seguridad publicados que se puede consultar.",
                "Una política de seguridad explica las versiones compatibles y cómo informar de vulnerabilidades.",
                "Esta función ofrece a investigadores un canal privado para informar a quienes mantienen el repositorio.",
                "Los avisos del repositorio permiten discutir en privado, coordinar correcciones y publicar después."
            ],
            "concept": "Comunicación de la política de seguridad",
            "hints": [
                "Distingue instrucciones, recepción confidencial, corrección coordinada y datos de referencia públicos.",
                "Considera el público y la fase de divulgación."
            ]
        },
        "ghas-ecosystem-024": {
            "prompt": "¿Qué función habilitada permite a un investigador externo informar confidencialmente de un posible fallo a los mantenedores?",
            "choices": [
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database",
                "SECURITY.md"
            ],
            "explanations": [
                "Esta función ofrece a investigadores un canal privado para informar a quienes mantienen el repositorio.",
                "Los avisos del repositorio permiten discutir en privado, coordinar correcciones y publicar después.",
                "La base es una colección de avisos de seguridad publicados que se puede consultar.",
                "Una política de seguridad explica las versiones compatibles y cómo informar de vulnerabilidades."
            ],
            "concept": "Recepción confidencial de vulnerabilidades",
            "hints": [
                "Distingue instrucciones, recepción confidencial, corrección coordinada y datos de referencia públicos.",
                "Considera el público y la fase de divulgación."
            ]
        },
        "ghas-ecosystem-025": {
            "prompt": "¿Quién suele implementar y probar contra regresiones una corrección del código de aplicación una vez que seguridad ha explicado el hallazgo?",
            "choices": [
                "Desarrollador del repositorio",
                "Security manager",
                "Organization owner",
                "Investigador de seguridad externo"
            ],
            "explanations": [
                "Los desarrolladores implementan y prueban correcciones en el código que mantienen; el acceso depende de los permisos asignados.",
                "Los security managers pueden gestionar ajustes y alertas de seguridad en toda la organización sin acceso general de escritura al código.",
                "Los organization owners pueden asignar roles de organización, incluido security manager.",
                "Un investigador comunica un posible problema; informar no otorga permisos de administración del repositorio."
            ],
            "concept": "Responsabilidad del desarrollador en la corrección",
            "hints": [
                "Distingue el trabajo de implementación de la autoridad en toda la organización.",
                "Elige el rol cuya responsabilidad habitual corresponde a la tarea."
            ]
        },
        "ghas-ecosystem-026": {
            "prompt": "¿Qué rol de organización corresponde a clasificar alertas y gestionar ajustes de seguridad entre repositorios sin escritura general en el código?",
            "choices": [
                "Security manager",
                "Organization owner",
                "Investigador de seguridad externo",
                "Desarrollador del repositorio"
            ],
            "explanations": [
                "Los security managers pueden gestionar ajustes y alertas de seguridad en toda la organización sin acceso general de escritura al código.",
                "Los organization owners pueden asignar roles de organización, incluido security manager.",
                "Un investigador comunica un posible problema; informar no otorga permisos de administración del repositorio.",
                "Los desarrolladores implementan y prueban correcciones en el código que mantienen; el acceso depende de los permisos asignados."
            ],
            "concept": "Responsabilidad de seguridad especializada",
            "hints": [
                "Distingue el trabajo de implementación de la autoridad en toda la organización.",
                "Elige el rol cuya responsabilidad habitual corresponde a la tarea."
            ]
        },
        "ghas-ecosystem-027": {
            "prompt": "¿Quién puede asignar el rol predefinido security manager a una persona o equipo de la organización?",
            "choices": [
                "Investigador de seguridad externo",
                "Desarrollador del repositorio",
                "Security manager",
                "Organization owner"
            ],
            "explanations": [
                "Un investigador comunica un posible problema; informar no otorga permisos de administración del repositorio.",
                "Los desarrolladores implementan y prueban correcciones en el código que mantienen; el acceso depende de los permisos asignados.",
                "Los security managers pueden gestionar ajustes y alertas de seguridad en toda la organización sin acceso general de escritura al código.",
                "Los organization owners pueden asignar roles de organización, incluido security manager."
            ],
            "concept": "Responsabilidad de delegar roles de seguridad",
            "hints": [
                "Distingue el trabajo de implementación de la autoridad en toda la organización.",
                "Elige el rol cuya responsabilidad habitual corresponde a la tarea."
            ]
        },
        "ghas-ecosystem-028": {
            "prompt": "¿Qué participante informa de una posible vulnerabilidad, pero no obtiene derechos de administración por el mero hecho de comunicarla?",
            "choices": [
                "Security manager",
                "Organization owner",
                "Investigador de seguridad externo",
                "Desarrollador del repositorio"
            ],
            "explanations": [
                "Los security managers pueden gestionar ajustes y alertas de seguridad en toda la organización sin acceso general de escritura al código.",
                "Los organization owners pueden asignar roles de organización, incluido security manager.",
                "Un investigador comunica un posible problema; informar no otorga permisos de administración del repositorio.",
                "Los desarrolladores implementan y prueban correcciones en el código que mantienen; el acceso depende de los permisos asignados."
            ],
            "concept": "Informante frente a administrador",
            "hints": [
                "Distingue el trabajo de implementación de la autoridad en toda la organización.",
                "Elige el rol cuya responsabilidad habitual corresponde a la tarea."
            ]
        },
        "ghas-ecosystem-029": {
            "prompt": "¿Qué uso de análisis de código es gratuito en GitHub.com sin licencia de Code Security para repositorios privados?",
            "choices": [
                "Análisis de código en repositorios públicos",
                "Análisis de secretos en repositorios privados",
                "Dependabot alerts",
                "Análisis de código en repositorios privados"
            ],
            "explanations": [
                "El análisis de código es gratuito en repositorios públicos; la configuración y los permisos siguen siendo necesarios.",
                "En GitHub.com, el análisis de secretos privado requiere la licencia de Secret Protection o de GHAS anterior correspondiente.",
                "Las alertas básicas de vulnerabilidades de Dependabot están disponibles sin comprar ninguno de los dos productos de seguridad.",
                "En GitHub.com, requiere un plan de organización apto y licencia de Code Security o la licencia anterior de GHAS correspondiente."
            ],
            "concept": "Disponibilidad del análisis de código público",
            "hints": [
                "Comprueba por separado la visibilidad del repositorio y la licencia de la función.",
                "Una etiqueta general de seguridad no implica que todas las funciones tengan la misma disponibilidad."
            ]
        },
        "ghas-ecosystem-030": {
            "prompt": "¿Qué función necesita específicamente Code Security o la licencia anterior de GHAS correspondiente en repositorios privados de una organización en GitHub.com?",
            "choices": [
                "Dependabot alerts",
                "Análisis de código en repositorios privados",
                "Análisis de código en repositorios públicos",
                "Análisis de secretos en repositorios privados"
            ],
            "explanations": [
                "Las alertas básicas de vulnerabilidades de Dependabot están disponibles sin comprar ninguno de los dos productos de seguridad.",
                "En GitHub.com, requiere un plan de organización apto y licencia de Code Security o la licencia anterior de GHAS correspondiente.",
                "El análisis de código es gratuito en repositorios públicos; la configuración y los permisos siguen siendo necesarios.",
                "En GitHub.com, el análisis de secretos privado requiere la licencia de Secret Protection o de GHAS anterior correspondiente."
            ],
            "concept": "Licencias del análisis de código privado",
            "hints": [
                "Comprueba por separado la visibilidad del repositorio y la licencia de la función.",
                "Una etiqueta general de seguridad no implica que todas las funciones tengan la misma disponibilidad."
            ]
        },
        "ghas-ecosystem-031": {
            "prompt": "Security overview muestra cero alertas en un repositorio. ¿Qué paso de interpretación es razonable antes de calificarlo como de bajo riesgo?",
            "choices": [
                "Exportar los datos disponibles de la vista como CSV.",
                "Comprobar la cobertura antes de concluir que el riesgo es bajo.",
                "Comparar los permisos de alertas de ambas personas.",
                "Usar el ámbito de la rama predeterminada al interpretar las métricas."
            ],
            "explanations": [
                "Varias páginas de Security overview permiten exportar CSV para análisis posteriores.",
                "Una vista sin alertas puede reflejar detección deshabilitada o problemas no detectados, no ausencia de vulnerabilidades.",
                "Los datos de Security overview se filtran según los permisos de quien los consulta.",
                "Las vistas de Security overview informan sobre las ramas predeterminadas de repositorios accesibles."
            ],
            "concept": "Interpretación de paneles sin alertas",
            "hints": [
                "Trata los resultados del panel como observaciones con un ámbito, no como una prueba universal.",
                "Comprueba tanto lo medido como lo que la persona tiene permiso para ver."
            ]
        },
        "ghas-ecosystem-032": {
            "prompt": "Dos personas ven totales distintos en Security overview de la misma organización. ¿Qué deben comprobar antes de suponer que los datos son incoherentes?",
            "choices": [
                "Comprobar la cobertura antes de concluir que el riesgo es bajo.",
                "Comparar los permisos de alertas de ambas personas.",
                "Usar el ámbito de la rama predeterminada al interpretar las métricas.",
                "Exportar los datos disponibles de la vista como CSV."
            ],
            "explanations": [
                "Una vista sin alertas puede reflejar detección deshabilitada o problemas no detectados, no ausencia de vulnerabilidades.",
                "Los datos de Security overview se filtran según los permisos de quien los consulta.",
                "Las vistas de Security overview informan sobre las ramas predeterminadas de repositorios accesibles.",
                "Varias páginas de Security overview permiten exportar CSV para análisis posteriores."
            ],
            "concept": "Informes de seguridad filtrados por permisos",
            "hints": [
                "Trata los resultados del panel como observaciones con un ámbito, no como una prueba universal.",
                "Comprueba tanto lo medido como lo que la persona tiene permiso para ver."
            ]
        },
        "ghas-ecosystem-033": {
            "prompt": "Una rama de trabajo tiene un hallazgo que no aparece en el panel organizativo. ¿Qué ámbito debe considerar primero el analista?",
            "choices": [
                "Comprobar la cobertura antes de concluir que el riesgo es bajo.",
                "Comparar los permisos de alertas de ambas personas.",
                "Usar el ámbito de la rama predeterminada al interpretar las métricas.",
                "Exportar los datos disponibles de la vista como CSV."
            ],
            "explanations": [
                "Una vista sin alertas puede reflejar detección deshabilitada o problemas no detectados, no ausencia de vulnerabilidades.",
                "Los datos de Security overview se filtran según los permisos de quien los consulta.",
                "Las vistas de Security overview informan sobre las ramas predeterminadas de repositorios accesibles.",
                "Varias páginas de Security overview permiten exportar CSV para análisis posteriores."
            ],
            "concept": "Límite de rama predeterminada de Overview",
            "hints": [
                "Trata los resultados del panel como observaciones con un ámbito, no como una prueba universal.",
                "Comprueba tanto lo medido como lo que la persona tiene permiso para ver."
            ]
        },
        "ghas-ecosystem-034": {
            "prompt": "Una analista necesita combinar datos disponibles de Security overview con datos de informes internos. ¿Qué transferencia admitida corresponde?",
            "choices": [
                "Comparar los permisos de alertas de ambas personas.",
                "Usar el ámbito de la rama predeterminada al interpretar las métricas.",
                "Exportar los datos disponibles de la vista como CSV.",
                "Comprobar la cobertura antes de concluir que el riesgo es bajo."
            ],
            "explanations": [
                "Los datos de Security overview se filtran según los permisos de quien los consulta.",
                "Las vistas de Security overview informan sobre las ramas predeterminadas de repositorios accesibles.",
                "Varias páginas de Security overview permiten exportar CSV para análisis posteriores.",
                "Una vista sin alertas puede reflejar detección deshabilitada o problemas no detectados, no ausencia de vulnerabilidades."
            ],
            "concept": "Exportación de datos de Security overview",
            "hints": [
                "Trata los resultados del panel como observaciones con un ámbito, no como una prueba universal.",
                "Comprueba tanto lo medido como lo que la persona tiene permiso para ver."
            ]
        },
        "ghas-ecosystem-035": {
            "prompt": "¿Qué práctica desplaza más directamente el descubrimiento de vulnerabilidades de una revisión solo al lanzar una versión?",
            "choices": [
                "Seguir supervisando tras incorporar correcciones a la rama predeterminada.",
                "Dar información de seguridad a los desarrolladores antes de fusionar.",
                "Combinar detección temprana con comprobaciones de fusión obligatorias.",
                "Coordinar una campaña enfocada en corregir alertas pendientes."
            ],
            "explanations": [
                "Los avisos nuevos y los cambios de código pueden introducir riesgos después de una corrección.",
                "La información temprana ayuda a evitar vulnerabilidades en vez de descubrirlas todas al lanzar una versión.",
                "La detección aporta hallazgos; las comprobaciones obligatorias deciden si los cambios pueden continuar. Se complementan.",
                "Una campaña organiza correcciones pendientes; no previene todas las vulnerabilidades nuevas."
            ],
            "concept": "Momento de la información shift-left",
            "hints": [
                "Considera cuándo llega la información y si todavía se necesita corregir el problema.",
                "Un control preventivo y una condición de lanzamiento pueden abordar fallos distintos."
            ]
        },
        "ghas-ecosystem-036": {
            "prompt": "¿Cómo deben combinarse la información preventiva temprana y las condiciones obligatorias de fusión?",
            "choices": [
                "Coordinar una campaña enfocada en corregir alertas pendientes.",
                "Seguir supervisando tras incorporar correcciones a la rama predeterminada.",
                "Dar información de seguridad a los desarrolladores antes de fusionar.",
                "Combinar detección temprana con comprobaciones de fusión obligatorias."
            ],
            "explanations": [
                "Una campaña organiza correcciones pendientes; no previene todas las vulnerabilidades nuevas.",
                "Los avisos nuevos y los cambios de código pueden introducir riesgos después de una corrección.",
                "La información temprana ayuda a evitar vulnerabilidades en vez de descubrirlas todas al lanzar una versión.",
                "La detección aporta hallazgos; las comprobaciones obligatorias deciden si los cambios pueden continuar. Se complementan."
            ],
            "concept": "Controles complementarios del SDLC",
            "hints": [
                "Considera cuándo llega la información y si todavía se necesita corregir el problema.",
                "Un control preventivo y una condición de lanzamiento pueden abordar fallos distintos."
            ]
        },
        "ghas-ecosystem-037": {
            "prompt": "¿Qué tipo actual de campaña puede organizar hallazgos del código fuente y activar sugerencias de Copilot Autofix?",
            "choices": [
                "Alertas de análisis de código de la rama predeterminada",
                "Alertas de análisis de secretos",
                "Alertas de vulnerabilidades de Dependabot",
                "Fallos de comprobaciones de estado obligatorias"
            ],
            "explanations": [
                "Las campañas de análisis de código incluyen alertas de la rama predeterminada y pueden activar sugerencias de Copilot Autofix.",
                "Las campañas de secretos figuran como versión preliminar pública; Copilot Autofix no realiza la corrección de credenciales.",
                "La documentación actual enumera campañas de análisis de código y secretos, no alertas de Dependabot como tipo de campaña.",
                "Una comprobación obligatoria fallida es un resultado de política de fusión, no un tipo de alerta de campaña."
            ],
            "concept": "Compatibilidad de campañas de código",
            "hints": [
                "Usa los tipos de alerta documentados, sin suponer que se admiten todas las listas de seguridad.",
                "Distingue la coordinación de la campaña del mecanismo real de corrección."
            ]
        },
        "ghas-ecosystem-038": {
            "prompt": "¿Qué tipo de alerta de campaña documentado está en versión preliminar pública y no recibe correcciones de credenciales de Copilot Autofix?",
            "choices": [
                "Alertas de análisis de secretos",
                "Alertas de vulnerabilidades de Dependabot",
                "Fallos de comprobaciones de estado obligatorias",
                "Alertas de análisis de código de la rama predeterminada"
            ],
            "explanations": [
                "Las campañas de secretos figuran como versión preliminar pública; Copilot Autofix no realiza la corrección de credenciales.",
                "La documentación actual enumera campañas de análisis de código y secretos, no alertas de Dependabot como tipo de campaña.",
                "Una comprobación obligatoria fallida es un resultado de política de fusión, no un tipo de alerta de campaña.",
                "Las campañas de análisis de código incluyen alertas de la rama predeterminada y pueden activar sugerencias de Copilot Autofix."
            ],
            "concept": "Límite preliminar de campañas de secretos",
            "hints": [
                "Usa los tipos de alerta documentados, sin suponer que se admiten todas las listas de seguridad.",
                "Distingue la coordinación de la campaña del mecanismo real de corrección."
            ]
        },
        "ghas-ecosystem-039": {
            "prompt": "Los hallazgos conocidos de un repositorio se corrigieron el mes pasado. ¿Qué práctica aborda el riesgo de cambios posteriores de código o avisos?",
            "choices": [
                "Dar información de seguridad a los desarrolladores antes de fusionar.",
                "Combinar detección temprana con comprobaciones de fusión obligatorias.",
                "Coordinar una campaña enfocada en corregir alertas pendientes.",
                "Seguir supervisando tras incorporar correcciones a la rama predeterminada."
            ],
            "explanations": [
                "La información temprana ayuda a evitar vulnerabilidades en vez de descubrirlas todas al lanzar una versión.",
                "La detección aporta hallazgos; las comprobaciones obligatorias deciden si los cambios pueden continuar. Se complementan.",
                "Una campaña organiza correcciones pendientes; no previene todas las vulnerabilidades nuevas.",
                "Los avisos nuevos y los cambios de código pueden introducir riesgos después de una corrección."
            ],
            "concept": "Ciclo continuo de seguridad",
            "hints": [
                "Considera cuándo llega la información y si todavía se necesita corregir el problema.",
                "Un control preventivo y una condición de lanzamiento pueden abordar fallos distintos."
            ]
        },
        "ghas-ecosystem-040": {
            "prompt": "¿Qué automatización mantiene al día las versiones de dependencias compatibles incluso sin una vulnerabilidad recién divulgada?",
            "choices": [
                "Dependabot alerts",
                "Code scanning",
                "Dependabot version updates",
                "Dependabot security updates"
            ],
            "explanations": [
                "Las alertas notifican dependencias con vulnerabilidades conocidas; una alerta no es por sí misma un pull request de actualización.",
                "El análisis de código examina el código fuente de la aplicación en vez de actualizar versiones de paquetes.",
                "Las actualizaciones de versiones proponen mejoras de dependencias aunque ningún aviso de vulnerabilidad las exija.",
                "Las actualizaciones de seguridad proponen cambios para corregir vulnerabilidades conocidas en dependencias."
            ],
            "concept": "Mantenimiento habitual de dependencias",
            "hints": [
                "Distingue mantenerse actualizado de responder a una vulnerabilidad identificada.",
                "Considera si el resultado buscado es una alerta, un cambio de dependencia o análisis del código."
            ]
        },
        "ghas-secrets-001": {
            "prompt": "Un desarrollador confirma un token de acceso a la nube activo y encuentra una alerta de análisis de secretos. ¿Qué debe hacerse primero?",
            "choices": [
                "Revoca o rota el token",
                "Descartar la alerta como falso positivo",
                "Esperar al siguiente análisis programado",
                "Reescribir el historial del repositorio"
            ],
            "explanations": [
                "La revocación del proveedor impide usar la credencial expuesta.",
                "Descartar cambia el estado de la alerta, no el del token.",
                "Un análisis posterior no contiene una credencial activa.",
                "Limpiar el historial por sí solo no inutiliza la credencial."
            ],
            "concept": "Revocación de credenciales",
            "hints": [
                "¿Qué acción invalida la propia credencial?",
                "¿Qué paso reduce la exposición inmediata?"
            ]
        },
        "ghas-secrets-002": {
            "prompt": "Se habilita el análisis de secretos después de que un repositorio haya existido durante años. ¿Qué contenido entra en el alcance del análisis del historial de Git?",
            "choices": [
                "Solo los commits nuevos de la rama predeterminada",
                "Todo el historial de Git de todas las ramas del repositorio",
                "Solo los archivos visibles en las puntas actuales de las ramas del repositorio",
                "Solo los pull requests abiertos después de habilitar el análisis de secretos"
            ],
            "explanations": [
                "El análisis no se limita a commits posteriores a la activación.",
                "El análisis de secretos examina el historial del repositorio en todas las ramas.",
                "Los archivos actuales omiten secretos eliminados en revisiones posteriores.",
                "La fecha de habilitación no excluye los commits anteriores."
            ],
            "concept": "Alcance del análisis histórico",
            "hints": [
                "¿Qué contenido del repositorio puede conservar una filtración anterior?",
                "¿Habilitar la función borra los commits previos?"
            ]
        },
        "ghas-secrets-003": {
            "prompt": "La protección de inserciones bloquea un commit porque contiene un token real de un proveedor. ¿Qué debería hacer la persona autora para continuar de forma segura?",
            "choices": [
                "Cambiar el nombre del archivo para que el análisis no lo reconozca",
                "Deshabilitar el análisis de secretos del repositorio",
                "Retira el token y rótalo si se expuso",
                "Elegir un motivo de omisión y dejar el token en el cambio"
            ],
            "explanations": [
                "Cambiar el nombre del archivo no neutraliza una credencial.",
                "Deshabilitar la detección debilita la protección en vez de corregir el secreto.",
                "Quitar la credencial y gestionar su exposición resuelve el bloqueo de forma segura.",
                "La omisión permite insertar; no vuelve seguro el token."
            ],
            "concept": "Respuesta ante una inserción bloqueada",
            "hints": [
                "¿Qué provocó el bloqueo y el valor es una credencial real?",
                "¿Qué corrección elimina el valor sensible en vez de evadir la detección?"
            ]
        },
        "ghas-secrets-004": {
            "prompt": "Una alerta de análisis de secretos no muestra un resultado de validez para un token detectado. ¿Qué establece ese estado?",
            "choices": [
                "La alerta necesariamente es un falso positivo",
                "Se confirmó que el token está revocado",
                "Se confirmó que el token está activo",
                "Ese resultado no permite concluir su validez"
            ],
            "explanations": [
                "El estado de validez por sí solo no clasifica la detección como falsa.",
                "Un resultado desconocido no confirma la revocación.",
                "La falta de validación no demuestra que el token esté activo.",
                "Desconocido significa que el servicio no pudo determinar la validez."
            ],
            "concept": "Interpretación del estado de validez",
            "hints": [
                "¿Qué dice realmente el resultado sobre la verificación?",
                "¿La falta de comprobación demuestra que está activo o revocado?"
            ]
        },
        "ghas-secrets-005": {
            "prompt": "Un equipo de respuesta tiene muchas alertas de secretos y quiere investigar primero las credenciales que aún podrían funcionar. ¿Qué señal ayuda a priorizar esa revisión?",
            "choices": [
                "Si una comprobación de validez informa que el secreto está activo",
                "La cantidad de archivos del repositorio",
                "La antigüedad del nombre de la rama",
                "Si la alerta se creó un día laborable"
            ],
            "explanations": [
                "Un resultado positivo indica que la credencial podría seguir utilizándose.",
                "El tamaño del repositorio no determina el estado de la credencial.",
                "La antigüedad del nombre de la rama no se relaciona con la validez.",
                "El día de creación de la alerta no comprueba su uso."
            ],
            "concept": "Priorización basada en validez",
            "hints": [
                "¿Qué señal se relaciona directamente con la posibilidad de usar la credencial?",
                "¿Qué puede indicar a quienes responden una validación del proveedor?"
            ]
        },
        "ghas-secrets-006": {
            "prompt": "Una comprobación de validez no puede verificar una credencial detectada porque su proveedor no admite esas comprobaciones. ¿Cuál es la interpretación correcta?",
            "choices": [
                "El secreto se puede publicar sin riesgo",
                "El estado de la credencial sigue sin verificarse",
                "El analizador debería eliminar la alerta automáticamente",
                "La protección de inserciones del repositorio está deshabilitada"
            ],
            "explanations": [
                "Una comprobación no admitida no demuestra que sea segura.",
                "Sin resultado del proveedor, la validez sigue siendo desconocida.",
                "La falta de validación no justifica eliminar el hallazgo.",
                "Una comprobación de validez no informa la configuración de protección de inserciones."
            ],
            "concept": "Límites de la comprobación de validez",
            "hints": [
                "¿El proveedor verificó la credencial correctamente?",
                "¿Qué conclusión corresponde cuando la validación no está disponible?"
            ]
        },
        "ghas-secrets-007": {
            "prompt": "Una empresa emite credenciales con un formato que los patrones integrados de GitHub no reconocen. ¿Qué puede agregar Secret Protection para ese formato?",
            "choices": [
                "Una entrada de registro de Dependabot",
                "Un conjunto de reglas del repositorio que reescribe commits",
                "Un patrón personalizado de análisis de secretos",
                "Un paquete de consultas de CodeQL para alertas de dependencias"
            ],
            "explanations": [
                "Los registros indican a Dependabot dónde se alojan los paquetes.",
                "Los conjuntos de reglas rigen acciones del repositorio, pero no definen detectores de secretos.",
                "Los patrones personalizados amplían la detección a formatos de secretos propios de la organización.",
                "Los paquetes de consultas de CodeQL analizan código fuente, no formatos de secretos."
            ],
            "concept": "Detección de credenciales personalizadas",
            "hints": [
                "¿El formato es de un proveedor o exclusivo de la organización?",
                "¿Qué mecanismo acepta un patrón para un secreto específico de la organización?"
            ]
        },
        "ghas-secrets-008": {
            "prompt": "Un administrador redactó un patrón de secretos personalizado y quiere evaluar las coincidencias antes de publicarlo. ¿Qué paso está destinado a esa comprobación?",
            "choices": [
                "Publica el patrón antes de habilitar la protección de inserciones",
                "Carga SARIF de un analizador externo",
                "Descarta las alertas existentes como coincidencias conocidas",
                "Prueba el patrón en seco con muestras representativas"
            ],
            "explanations": [
                "Publicar y habilitar la protección de inserciones son pasos de activación posteriores, no una prueba previa.",
                "Las cargas SARIF incorporan resultados de análisis externos, pero no previsualizan un patrón personalizado de secretos.",
                "Descartar alertas cambia su tratamiento, pero no prueba cómo coincide un detector.",
                "Una prueba en seco previsualiza coincidencias del patrón en el contenido antes de publicarlo."
            ],
            "concept": "Pruebas preliminares de patrones personalizados",
            "hints": [
                "¿Qué conviene comprobar antes de activar un detector nuevo?",
                "¿Qué flujo de patrones permite previsualizar coincidencias sin publicarlo?"
            ]
        },
        "ghas-secrets-009": {
            "prompt": "Durante una prueba piloto, un patrón personalizado señala identificadores sintéticos que no pueden autenticar. ¿Qué debería ajustar el administrador antes de habilitar el detector?",
            "choices": [
                "Ajustar la expresión y probar ejemplos positivos y negativos representativos",
                "Publicarlo y descartar todas las alertas resultantes",
                "Usar la misma expresión como restricción de versión de un paquete",
                "Excluir el repositorio de todas las funciones de seguridad"
            ],
            "explanations": [
                "Probar coincidencias y no coincidencias ayuda a reducir falsos positivos.",
                "Publicar un patrón ruidoso traslada a quienes responden una clasificación evitable.",
                "Las restricciones de paquetes no definen formatos de secretos.",
                "Desactivar todas las funciones de seguridad excede el ajuste de un detector."
            ],
            "concept": "Ajuste de precisión de patrones",
            "hints": [
                "¿Qué evidencia demuestra que una coincidencia propuesta es un secreto real?",
                "¿Qué paso refina la cobertura sin aceptar falsos positivos conocidos?"
            ]
        },
        "ghas-secrets-010": {
            "prompt": "La prueba del patrón personalizado produce resultados aceptables. ¿Qué secuencia lo convierte en un detector activo?",
            "choices": [
                "Esperar a que Dependabot importe el patrón",
                "Publicar el patrón y luego habilitar su protección de inserciones si se necesita prevención",
                "Habilitar primero la protección de inserciones y después descartar el patrón",
                "Crear una regla de protección de rama con la expresión regular"
            ],
            "explanations": [
                "Dependabot no administra patrones de análisis de secretos.",
                "El patrón debe publicarse antes de habilitar su opción de protección de inserciones.",
                "Una configuración de protección no activa un detector sin publicar.",
                "Las reglas de rama no registran patrones personalizados de secretos."
            ],
            "concept": "Secuencia de activación de patrones personalizados",
            "hints": [
                "¿Qué paso del ciclo de vida sigue a una prueba satisfactoria?",
                "¿El control preventivo se aplica antes de publicar el detector?"
            ]
        },
        "ghas-secrets-011": {
            "prompt": "Una persona colaboradora omite la protección de inserciones porque necesita brevemente un token bloqueado para una prueba. ¿Qué debería hacer el equipo a continuación?",
            "choices": [
                "Eliminar el evento de auditoría de la omisión",
                "Deshabilitar todas las alertas de secretos futuras",
                "Evalúa el secreto y revócalo o retíralo cuanto antes",
                "Suponer que el token es seguro porque GitHub registró un motivo"
            ],
            "explanations": [
                "Los registros de auditoría deben seguir disponibles para revisión.",
                "Suprimir alertas no resuelve el riesgo de la credencial.",
                "La omisión no elimina la exposición ni vuelve inocua la credencial.",
                "Registrar un motivo documenta la decisión, pero no neutraliza el secreto."
            ],
            "concept": "Ciclo de vida de una omisión con corrección diferida",
            "hints": [
                "¿Qué cambia una omisión y qué sigue expuesto?",
                "¿Qué seguimiento atiende tanto la excepción como el riesgo de la credencial?"
            ]
        },
        "ghas-secrets-012": {
            "prompt": "Una persona en GitHub.com tiene habilitada la protección de inserciones a nivel de usuario, pero no el análisis de secretos a nivel del repositorio. ¿Qué describe ese control?",
            "choices": [
                "Analiza el historial completo de los repositorios privados de la cuenta",
                "Crea alertas del repositorio por cada omisión, sin análisis de secretos",
                "Sustituye la configuración organizativa de Secret Protection",
                "Puede bloquear pushes compatibles de secretos en repositorios públicos"
            ],
            "explanations": [
                "La protección de usuario no analiza todo el historial privado.",
                "Una omisión no garantiza una alerta con el control exclusivo del usuario.",
                "Los controles de cuenta no reemplazan las funciones del repositorio o la organización.",
                "La protección a nivel de usuario es un control de cuenta para repositorios públicos."
            ],
            "concept": "Alcance de destino de la protección de inserciones del usuario",
            "hints": [
                "¿Qué repositorios cubre la función a nivel de cuenta?",
                "¿La prevención del usuario equivale a generar alertas del repositorio?"
            ]
        },
        "ghas-secrets-013": {
            "prompt": "Una empresa quiere que quienes contribuyen soliciten aprobación en vez de omitir por su cuenta un bloqueo de protección de inserciones. ¿Qué control corresponde a esa política?",
            "choices": [
                "Omisión delegada de la protección de inserciones",
                "Una regla ignore de Dependabot",
                "Una revisión de código obligatoria",
                "Una comprobación de validez del análisis de secretos"
            ],
            "explanations": [
                "La omisión delegada dirige una solicitud de excepción para su aprobación.",
                "Las reglas ignore de Dependabot afectan las actualizaciones de dependencias.",
                "La revisión de código no es el flujo delegado para omitir la protección de inserciones.",
                "Las comprobaciones de validez evalúan credenciales detectadas, no aprueban omisiones."
            ],
            "concept": "Gobernanza de omisiones delegadas",
            "hints": [
                "¿Qué acción requiere una persona aprobadora y no solo quien contribuye?",
                "¿Qué función somete la autoridad de omisión a revisión?"
            ]
        },
        "ghas-secrets-014": {
            "prompt": "Un equipo de seguridad quiere que una persona colaboradora omita una inserción bloqueada específica después de revisarla, sin excluir futuras coincidencias. ¿Qué debería usar?",
            "choices": [
                "Deshabilitar la protección de inserciones para todo el repositorio",
                "Una solicitud de omisión o una omisión aprobada para esa inserción",
                "Una exclusión global para la ruta del archivo del secreto",
                "Un patrón personalizado nuevo que nunca coincida"
            ],
            "explanations": [
                "Deshabilitar la protección es más amplio que aprobar una excepción revisada.",
                "La omisión se aplica a la inserción revisada, no crea una excepción permanente.",
                "Una exclusión de ruta puede ocultar detecciones futuras en esa ubicación.",
                "Un patrón que nunca coincide desactiva la detección de ese formato."
            ],
            "concept": "Privilegios de omisión frente a exclusiones",
            "hints": [
                "¿Se quiere aprobar una inserción o suprimir detecciones posteriores?",
                "¿Qué mecanismo limita la excepción al evento bloqueado?"
            ]
        },
        "ghas-secrets-015": {
            "prompt": "Un administrador del repositorio quiere visibilidad cuando alguien omite la protección de inserciones a nivel del repositorio. ¿Qué debería esperar?",
            "choices": [
                "La inserción se rechaza después de almacenar el commit",
                "Solo se genera una alerta de Dependabot",
                "Puede generarse una alerta de análisis de secretos",
                "La omisión cambia silenciosamente el secreto por un valor de prueba"
            ],
            "explanations": [
                "La omisión permite la inserción; no la rechaza después.",
                "Las alertas de Dependabot se refieren a dependencias vulnerables.",
                "Las omisiones a nivel del repositorio pueden generar una alerta para seguimiento.",
                "La omisión no modifica el valor ni la exposición de la credencial."
            ],
            "concept": "Visibilidad de omisiones del repositorio",
            "hints": [
                "¿Qué debe seguir visible cuando alguien anula la prevención?",
                "¿Qué registro de detección permite dar seguimiento a una omisión?"
            ]
        },
        "ghas-secrets-016": {
            "prompt": "Un repositorio recibe cambios mediante inserciones de línea de comandos y una edición web de GitHub. ¿Qué afirmación sobre la protección de inserciones es correcta?",
            "choices": [
                "Solo se aplica a commits creados en el editor web",
                "Es un análisis programado posterior a la fusión",
                "Comprueba avisos de paquetes en vez de credenciales",
                "Varios puntos de entrada compatibles de GitHub"
            ],
            "explanations": [
                "El control no se limita a commits creados en la web.",
                "La protección actúa durante la inserción, no como análisis programado posterior a la fusión.",
                "Los avisos de dependencias son otra función de seguridad.",
                "La protección cubre inserciones compatibles mediante varias interfaces admitidas."
            ],
            "concept": "Puntos de entrada de la protección de inserciones",
            "hints": [
                "¿En qué momento del flujo de contribución se debería bloquear el secreto?",
                "¿El control se limita a una interfaz o a un tipo de hallazgo?"
            ]
        },
        "ghas-secrets-017": {
            "prompt": "Una persona pega una credencial en un comentario de pull request en vez de un archivo fuente. ¿Qué afirmación es correcta?",
            "choices": [
                "Contenido compatible del pull request",
                "El análisis de secretos solo analiza binarios compilados",
                "CodeQL es quien comprueba los comentarios",
                "La credencial es segura porque está fuera del historial de Git"
            ],
            "explanations": [
                "El análisis de secretos incluye contenido compatible de pull requests, no solo archivos de código.",
                "El análisis de binarios no es el único alcance del análisis de secretos.",
                "CodeQL no es la única función que puede inspeccionar texto.",
                "Un secreto en un comentario también puede quedar expuesto."
            ],
            "concept": "Exposición de secretos fuera del código",
            "hints": [
                "¿Dónde se publicó la credencial?",
                "¿El texto de las funciones de colaboración puede exponer un secreto utilizable?"
            ]
        },
        "ghas-secrets-018": {
            "prompt": "GitHub agrega detección para un nuevo token de proveedor reconocido. ¿Qué puede hacer el análisis de secretos con los repositorios existentes?",
            "choices": [
                "Dejar de analizar ramas antiguas",
                "Volver a analizar el contenido para el nuevo tipo de secreto",
                "Cambiar todos los commits históricos para quitar los valores coincidentes",
                "Rotar todas las credenciales sin intervención del proveedor"
            ],
            "explanations": [
                "Los detectores nuevos no deshabilitan el análisis de ramas históricas.",
                "GitHub vuelve a analizar periódicamente los repositorios al agregar nuevos tipos de secretos.",
                "La detección no reescribe el historial de commits.",
                "La rotación de credenciales se realiza con el proveedor emisor."
            ],
            "concept": "Nuevo análisis con detectores recientes",
            "hints": [
                "¿Qué cambió en la capacidad de detección?",
                "¿La compatibilidad con un patrón nuevo puede revelar exposiciones anteriores?"
            ]
        },
        "ghas-secrets-019": {
            "prompt": "Un analizador detecta un token emitido por un proveedor y le notifica mediante una integración de socios. ¿En qué se diferencia de la detección genérica?",
            "choices": [
                "Los patrones de socios solo se aplican a manifiestos de paquetes",
                "Ambos tipos impiden que se confirme cualquier secreto",
                "Los patrones de socios pueden incluir validación del proveedor",
                "Los patrones genéricos revocan automáticamente todos los tokens de proveedores"
            ],
            "explanations": [
                "Los manifiestos de paquetes no definen el alcance de los patrones de socios.",
                "La detección no garantiza que se bloquee toda filtración.",
                "La integración puede validar una credencial conocida; la detección genérica no tiene esa comprobación específica del proveedor.",
                "Un detector no revoca por sí mismo todas las credenciales."
            ],
            "concept": "Patrones de proveedores y genéricos",
            "hints": [
                "¿El tipo de credencial tiene un proveedor que pueda validarla?",
                "¿Qué diferencia trata de integración del proveedor y no solo del formato?"
            ]
        },
        "ghas-secrets-020": {
            "prompt": "Un hallazgo de análisis de secretos parece coincidir con un dato de prueba, pero el equipo no verificó si el valor es inerte. ¿Cuál es la respuesta correcta?",
            "choices": [
                "Cerrar porque los directorios de prueba siempre son seguros",
                "Eliminar la alerta sin comprobar la credencial",
                "Suponer que una comprobación de validez siempre identifica valores de prueba",
                "Confirmar que el valor no funciona o está revocado antes de cerrar la alerta como resuelta"
            ],
            "explanations": [
                "Una ubicación de prueba no demuestra que un valor sea inocuo.",
                "Eliminar un registro no verifica ni contiene la credencial.",
                "No se garantizan comprobaciones de validez para todos los tipos de secretos.",
                "La resolución debe basarse en pruebas de que no se puede usar la credencial."
            ],
            "concept": "Cierre preciso de alertas",
            "hints": [
                "¿Qué evidencia justifica un cierre seguro?",
                "¿El nombre de un archivo o carpeta demuestra que una credencial es inerte?"
            ]
        },
        "ghas-secrets-021": {
            "prompt": "Un token aparece en un comentario de incidencia y en un commit. ¿Qué respuesta aborda el riesgo de credenciales en ambas ubicaciones?",
            "choices": [
                "Revoca o rota el token y luego limpia las copias expuestas",
                "Cerrar la alerta del commit y dejar intacto el comentario",
                "Cambiar el título de la incidencia y seguir usando el token",
                "Ejecutar CodeQL sin cambiar la credencial"
            ],
            "explanations": [
                "Invalidar la credencial contiene el uso indebido y la limpieza trata las copias restantes.",
                "Cerrar una alerta no quita otra exposición.",
                "Cambiar el nombre del contenido no invalida un token.",
                "El análisis de CodeQL no puede revocar una credencial expuesta."
            ],
            "concept": "Contención de credenciales en varias ubicaciones",
            "hints": [
                "¿Dónde más podría seguir expuesto el mismo valor?",
                "¿Qué paso neutraliza su reutilización independientemente de la limpieza?"
            ]
        },
        "ghas-secrets-022": {
            "prompt": "Varios repositorios necesitan detectar de forma coherente un formato de token emitido por la organización. ¿Qué ámbito de configuración permite compartir el detector?",
            "choices": [
                "En la carga SARIF del análisis de código",
                "Patrones personalizados de la organización",
                "En la configuración local de Git de cada desarrollador",
                "En un registro de paquetes de Dependabot"
            ],
            "explanations": [
                "Las cargas SARIF incorporan hallazgos, no configuran detectores de credenciales.",
                "Los patrones de la organización pueden aplicarse a varios repositorios seleccionados.",
                "La configuración local de Git no publica un detector organizativo.",
                "Los registros de Dependabot proporcionan acceso a paquetes, no patrones de secretos."
            ],
            "concept": "Patrones personalizados de la organización",
            "hints": [
                "¿Qué alcance debería administrar un detector compartido por varios repositorios?",
                "¿Qué configuración pertenece a la función de detección de secretos?"
            ]
        },
        "ghas-secrets-023": {
            "prompt": "Un repositorio contiene una credencial realista en un archivo de pruebas. ¿Qué debería verificar la persona mantenedora antes de decidir no corregirla?",
            "choices": [
                "Que el repositorio no tenga despliegues de producción",
                "Que la alerta sea anterior a la rama",
                "Que el valor sea intencionalmente inoperante y no pueda autenticar",
                "Que el nombre del archivo contenga la palabra test"
            ],
            "explanations": [
                "El código no productivo también puede contener credenciales utilizables.",
                "La antigüedad de una rama no determina si un secreto funciona.",
                "Un valor de prueba es inocuo solo si no puede conceder acceso.",
                "El nombre del archivo no demuestra que la credencial sea inerte."
            ],
            "concept": "Evaluación del riesgo de datos de prueba",
            "hints": [
                "¿Qué propiedad del valor determina si es peligroso?",
                "¿Su ubicación demuestra que no puede autenticar?"
            ]
        },
        "ghas-secrets-024": {
            "prompt": "Un equipo espera resultados de validez del proveedor, pero la alerta no incluye esa información. ¿Qué requisito debería comprobar?",
            "choices": [
                "Si el repositorio tiene un archivo de bloqueo de paquetes",
                "Si CodeQL usa la suite security-extended",
                "Si el token se confirmó en la rama predeterminada",
                "Verifica el soporte del tipo y la disponibilidad"
            ],
            "explanations": [
                "Un archivo de bloqueo no se relaciona con validar credenciales.",
                "La selección de consultas de CodeQL no habilita la validación del proveedor.",
                "La rama por sí sola no determina si se admiten comprobaciones de validez.",
                "Las comprobaciones de validez solo están disponibles para tipos y configuraciones compatibles."
            ],
            "concept": "Compatibilidad con comprobaciones de validez",
            "hints": [
                "¿El tipo de credencial detectado tiene una integración de validación compatible?",
                "¿Qué capacidad es independiente de encontrar el secreto en el código?"
            ]
        },
        "ghas-secrets-025": {
            "prompt": "Un administrador revisa una omisión de la protección de inserciones. ¿Qué información ayuda a entender y auditar la excepción?",
            "choices": [
                "La persona colaboradora, el motivo y el contexto del secreto o la inserción afectada",
                "Solo la programación de Dependabot del repositorio",
                "El tamaño de la base de datos de CodeQL",
                "La cantidad de estrellas del repositorio"
            ],
            "explanations": [
                "El registro de omisión aporta contexto sobre quién la realizó y por qué.",
                "La programación de dependencias no explica una excepción de protección de secretos.",
                "El tamaño de la base de datos no describe el evento de omisión.",
                "La popularidad no demuestra la justificación de la decisión."
            ],
            "concept": "Auditoría de omisiones de inserciones",
            "hints": [
                "¿Qué hechos explican la decisión de anular el bloqueo?",
                "¿Qué registro ayuda a investigar después una excepción?"
            ]
        },
        "ghas-secrets-026": {
            "prompt": "La protección de inserciones marca un valor que la persona autora confirma que es un marcador inoperante. ¿Qué motivo de omisión describe mejor la situación?",
            "choices": [
                "El proveedor no tiene una política de seguridad",
                "Es un falso positivo",
                "Se usa en pruebas",
                "Es una credencial de bajo impacto"
            ],
            "explanations": [
                "La política del proveedor no determina si la coincidencia es falsa.",
                "Un marcador confirmado que no es credencial constituye un falso positivo.",
                "La ubicación de prueba no explica por sí sola por qué la detección fue incorrecta.",
                "Una credencial real de bajo impacto sigue siendo una credencial."
            ],
            "concept": "Clasificación de omisión por falso positivo",
            "hints": [
                "¿El valor detectado es realmente una credencial?",
                "¿Qué motivo distingue una detección incorrecta de un uso de prueba deliberado?"
            ]
        },
        "ghas-secrets-027": {
            "prompt": "Un repositorio usa `.github/secret_scanning.yml` con `paths-ignore` para documentación generada. ¿Cuál es la consecuencia principal?",
            "choices": [
                "La regla cifra los archivos excluidos",
                "El archivo suprime alertas de Dependabot para paquetes coincidentes",
                "Las rutas quedan fuera del análisis de secretos y de la protección de inserciones",
                "Oculta alertas, pero mantiene activa la protección de inserciones en esas rutas"
            ],
            "explanations": [
                "Las exclusiones de rutas no cifran ni neutralizan las credenciales.",
                "Las exclusiones del análisis de secretos no suprimen alertas de vulnerabilidades de paquetes.",
                "La configuración excluye las rutas coincidentes del análisis de secretos y de la protección de inserciones.",
                "La exclusión también afecta la protección de inserciones; no solo controla la visibilidad de alertas."
            ],
            "concept": "Riesgo de exclusión de detección",
            "hints": [
                "¿Qué cobertura de seguridad reduce una ruta ignorada?",
                "¿Podría aparecer una credencial real en el contenido excluido?"
            ]
        },
        "ghas-secrets-028": {
            "prompt": "El equipo de respuesta necesita hablar de una credencial expuesta en un repositorio público. ¿Qué práctica evita crear otra filtración?",
            "choices": [
                "Pegar el token completo en una incidencia pública como contexto",
                "Agregar el token a la descripción de un pull request",
                "Incluir el valor en el mensaje de commit que nombra el incidente",
                "Compartir una referencia de alerta redactada y coordinar en un canal restringido"
            ],
            "explanations": [
                "El texto de una incidencia pública puede crear otra exposición.",
                "Las descripciones de pull requests también pueden quedar expuestas y analizarse.",
                "Los mensajes de commit pueden persistir en el historial del repositorio.",
                "Una referencia redactada facilita la investigación sin volver a divulgar la credencial."
            ],
            "concept": "Colaboración segura ante incidentes de secretos",
            "hints": [
                "¿La conversación repetiría el valor sensible?",
                "¿Qué comunicación conserva el contexto sin reproducir la credencial?"
            ]
        },
        "ghas-secrets-029": {
            "prompt": "Se encuentra un secreto en un commit antiguo, pero ya no está en el archivo actual. ¿Por qué aún puede requerir respuesta?",
            "choices": [
                "El valor permanece en el historial de Git y podría seguir utilizándose",
                "El análisis de secretos solo informa valores de la rama actual",
                "Un commit antiguo invalida automáticamente la credencial",
                "La alerta demuestra que nadie copió el token"
            ],
            "explanations": [
                "Quitar un valor del archivo más reciente no borra commits anteriores ni lo invalida.",
                "El análisis de secretos cubre el historial de las ramas del repositorio.",
                "La antigüedad del commit no revoca una credencial.",
                "La detección no puede determinar si alguien copió el valor."
            ],
            "concept": "Investigación de exposición histórica",
            "hints": [
                "¿El valor podría seguir accesible en una revisión anterior?",
                "¿Que desaparezca del archivo actual revoca una credencial?"
            ]
        },
        "ghas-secrets-030": {
            "prompt": "Un repositorio privado de una organización necesita análisis de secretos y protección de inserciones. ¿Qué derecho de uso de Advanced Security corresponde?",
            "choices": [
                "GitHub Packages",
                "GitHub Secret Protection",
                "GitHub Code Security",
                "GitHub Actions"
            ],
            "explanations": [
                "Packages aloja artefactos y no es el producto de seguridad.",
                "Secret Protection incluye funciones de análisis de secretos y protección de inserciones.",
                "Code Security se centra en análisis de código y funciones avanzadas de cadena de suministro.",
                "Actions ejecuta flujos de automatización, no concede este derecho de producto."
            ],
            "concept": "Alcance del producto Secret Protection",
            "hints": [
                "¿El requisito es detectar credenciales o analizar código y dependencias?",
                "¿Qué producto agrupa funciones que previenen y detectan filtraciones de secretos?"
            ]
        },
        "ghas-secrets-031": {
            "prompt": "Una expresión regular personalizada debe detectar un formato nuevo de credencial sin coincidir con identificadores comunes. ¿Cómo debería evaluar esa meta quien la crea?",
            "choices": [
                "Reemplazar la expresión regular por el nombre del repositorio",
                "Comparar el número de alertas de Dependabot antes y después",
                "Ejecutar una prueba con ejemplos que deben coincidir y valores similares que no",
                "Probar solo una credencial conocida y publicar de inmediato"
            ],
            "explanations": [
                "El nombre del repositorio no describe la sintaxis de credenciales.",
                "El recuento de alertas de dependencias no mide la precisión del patrón de secretos.",
                "Los ejemplos positivos y negativos revelan tanto omisiones como falsos positivos.",
                "Un ejemplo no demuestra precisión ante cadenas similares."
            ],
            "concept": "Validación de cobertura de patrones",
            "hints": [
                "¿Qué ejemplos prueban si la expresión es útil y selectiva?",
                "¿Qué podría no revelar una única prueba positiva?"
            ]
        },
        "ghas-secrets-032": {
            "prompt": "Un equipo habilita la protección de inserciones y supone que ninguna credencial podrá llegar al repositorio. ¿Cuál es la evaluación más precisa?",
            "choices": [
                "Revoca retroactivamente todos los secretos del historial",
                "Solo analiza manifiestos de dependencias",
                "Impide compartir credenciales fuera de GitHub",
                "Bloquea pushes compatibles, no todas las filtraciones"
            ],
            "explanations": [
                "La protección de inserciones no revoca credenciales históricas.",
                "Los manifiestos de dependencias no son su único alcance.",
                "Un control del repositorio no puede impedir toda divulgación externa.",
                "La cobertura depende de tipos de secretos y rutas de inserción admitidos; no es una garantía universal."
            ],
            "concept": "Límites de detección de la protección de inserciones",
            "hints": [
                "¿Qué cobertura puede garantizar razonablemente un control preventivo?",
                "¿Un secreto no compatible o ya expuesto podría quedar fuera de este control?"
            ]
        },
        "ghas-secrets-033": {
            "prompt": "Una organización ve alertas recurrentes por un formato de credencial propio que los detectores integrados no reconocen. ¿Qué configuración resuelve esa brecha?",
            "choices": [
                "Definir y probar un patrón personalizado de análisis de secretos",
                "Agregar el formato de credencial a `dependabot.yml`",
                "Crear una base de datos de CodeQL para el token",
                "Agregar un identificador SPDX al repositorio"
            ],
            "explanations": [
                "Un patrón personalizado agrega detección para formatos de secretos propios de la organización.",
                "La configuración de Dependabot controla las actualizaciones de dependencias.",
                "Una base de CodeQL modela código fuente para analizarlo con consultas.",
                "Los identificadores SPDX describen licencias de software."
            ],
            "concept": "Ampliación de la cobertura de detección de secretos",
            "hints": [
                "¿Qué tipo de detector falta para este formato de credencial?",
                "¿Qué función permite definir un patrón propio de coincidencia?"
            ]
        },
        "ghas-secrets-034": {
            "prompt": "Una integración del repositorio escribe contenido mediante la API REST de GitHub. ¿Qué afirmación debería usar el equipo al evaluar la cobertura de protección de inserciones?",
            "choices": [
                "Reemplazar la integración por Dependabot",
                "Comprobar el comportamiento documentado de la API y habilitar la protección compatible a nivel del repositorio",
                "Suponer que toda escritura mediante API omite las comprobaciones de secretos",
                "Suponer que la protección de usuario genera alertas del repositorio para escrituras por API"
            ],
            "explanations": [
                "Dependabot no protege escrituras por API frente a secretos.",
                "El comportamiento de la API y la configuración del repositorio determinan las protecciones aplicables.",
                "No es seguro suponer que todas las escrituras omiten los controles.",
                "La protección de usuario no sustituye la cobertura ni las alertas del repositorio."
            ],
            "concept": "Protección de escrituras de API",
            "hints": [
                "¿Qué interfaz de escritura se usa y qué promete su documentación?",
                "¿Qué conviene comprobar antes de afirmar que una integración está cubierta o exenta?"
            ]
        },
        "ghas-secrets-035": {
            "prompt": "Solo un grupo pequeño de respuesta debería aprobar solicitudes de omisión de la protección de inserciones. ¿Qué configuración satisface mejor ese requisito?",
            "choices": [
                "Deshabilitar la protección de inserciones en la empresa",
                "Usar un tema del repositorio como señal de aprobación",
                "Configurar la omisión delegada con un equipo revisor de alcance adecuado",
                "Dar permisos de propietario de la organización a cada persona colaboradora"
            ],
            "explanations": [
                "Deshabilitar la protección elimina por completo el flujo de aprobación.",
                "Un tema no autoriza ni registra una decisión de omisión.",
                "La omisión delegada permite asignar deliberadamente la autoridad de aprobación.",
                "El acceso de propietario de la organización es más amplio de lo necesario."
            ],
            "concept": "Revisión de omisiones con privilegios mínimos",
            "hints": [
                "¿Quién necesita autoridad para aprobar una excepción?",
                "¿Qué configuración limita el poder de aprobación sin quitar el bloqueo?"
            ]
        },
        "ghas-secrets-036": {
            "prompt": "Una clave de API real es válida, pero ahora solo concede acceso a un servicio de pruebas de bajo riesgo. ¿Qué motivo de omisión es más preciso que llamarla falso positivo?",
            "choices": [
                "Es un falso positivo",
                "El analizador encontró un aviso de paquete",
                "La clave no es una credencial",
                "Se usa en pruebas"
            ],
            "explanations": [
                "Una clave válida no es una coincidencia falsa solo porque su impacto parezca limitado.",
                "El análisis de secretos no informa avisos de paquetes.",
                "El caso confirma que el valor es una clave de API real.",
                "Una credencial real usada en pruebas no es automáticamente un falso positivo."
            ],
            "concept": "Falso positivo frente a impacto menor",
            "hints": [
                "¿El hallazgo es incorrecto o se usa un secreto real en un contexto limitado?",
                "¿Qué distinción conserva un registro preciso de la detección?"
            ]
        },
        "ghas-secrets-037": {
            "prompt": "Un patrón personalizado detecta una credencial propia en el historial confirmado. ¿Qué configuración adicional permite bloquear futuras inserciones mediante pushes compatibles?",
            "choices": [
                "Habilitar la protección de inserciones para el patrón personalizado publicado",
                "Agregar el patrón a `dependabot.yml`",
                "Crear una suite de consultas de análisis de código",
                "Deshabilitar el análisis histórico"
            ],
            "explanations": [
                "Un patrón personalizado publicado puede habilitarse para la protección de inserciones.",
                "La configuración de Dependabot no controla la prevención de secretos al insertar.",
                "Las suites de consultas analizan código, no bloquean este formato de credencial.",
                "Detener el análisis histórico no impide inserciones nuevas."
            ],
            "concept": "Detección frente a prevención de secretos",
            "hints": [
                "¿Qué función actúa antes de que un push compatible llegue al repositorio?",
                "¿Detectar equivale a bloquear futuras exposiciones?"
            ]
        },
        "ghas-secrets-038": {
            "prompt": "Un equipo quiere que quienes responden por la seguridad del repositorio reciban alertas de análisis de secretos. ¿Qué debería configurar un administrador?",
            "choices": [
                "Un identificador de licencia SPDX",
                "Revisa el acceso a alertas y las notificaciones",
                "La URL del registro del administrador de paquetes",
                "Un modo de compilación de CodeQL"
            ],
            "explanations": [
                "Los identificadores SPDX describen licencias, no destinatarios de alertas.",
                "El acceso y las notificaciones determinan quién puede ver o recibir alertas compatibles.",
                "Las URL de registro configuran la obtención de paquetes.",
                "El modo de compilación afecta el análisis de código compilado."
            ],
            "concept": "Notificaciones de secretos accionables",
            "hints": [
                "¿Quién necesita acceso para revisar y corregir la alerta?",
                "¿Qué configuración rige visibilidad y entrega, no la sintaxis de detección?"
            ]
        },
        "ghas-secrets-039": {
            "prompt": "Un desarrollador quita un token filtrado del archivo más reciente y cierra su alerta. ¿Qué evidencia deberían buscar aún quienes responden?",
            "choices": [
                "Una descarga correcta del paquete de consultas de CodeQL",
                "Una comprobación aprobada de revisión de dependencias",
                "Confirmación del proveedor de que la credencial fue revocada o reemplazada",
                "Un tamaño menor del repositorio"
            ],
            "explanations": [
                "Descargar un paquete de consultas no se relaciona con contener credenciales.",
                "La revisión de dependencias analiza cambios de paquetes, no el estado del token.",
                "La confirmación del proveedor verifica que no se pueda usar la credencial expuesta.",
                "El tamaño del repositorio no informa la validez del token."
            ],
            "concept": "Verificación de contención de credenciales",
            "hints": [
                "¿Qué demuestra que la credencial original ya no se puede usar?",
                "¿Eliminar la aparición visible invalida las copias existentes?"
            ]
        },
        "ghas-secrets-040": {
            "prompt": "El análisis de secretos informa una credencial meses después de que se confirmó. ¿Qué afirmación describe mejor la cronología?",
            "choices": [
                "La credencial quedó expuesta solo cuando se creó la alerta",
                "La alerta tardía demuestra que nunca se usó la credencial",
                "La detección restablece automáticamente la fecha de vencimiento",
                "La hora de la alerta indica cuándo se detectó, no necesariamente cuándo comenzó la exposición"
            ],
            "explanations": [
                "La hora de la alerta no determina cuándo se hizo público el valor por primera vez.",
                "Una detección tardía no demuestra si se usó la credencial.",
                "El análisis no cambia el vencimiento de una credencial en el proveedor.",
                "Un hallazgo puede descubrirse después del commit y de la exposición inicial."
            ],
            "concept": "Hora de detección frente a hora de exposición",
            "hints": [
                "¿Cuándo apareció por primera vez el valor en una ubicación accesible?",
                "¿La hora de la alerta necesariamente marca el comienzo de la exposición?"
            ]
        },
        "ghas-supply-001": {
            "prompt": "Un paquete vulnerable no aparece directamente en un manifiesto, pero sí en el gráfico de dependencias. ¿Qué debería inspeccionar la persona mantenedora para saber cómo llegó al proyecto?",
            "choices": [
                "Solo la licencia SPDX del paquete",
                "La ruta de dependencia transitiva",
                "El historial de omisiones del análisis de secretos",
                "La suite de consultas de CodeQL"
            ],
            "explanations": [
                "Los metadatos de licencia no muestran cómo se incluyó un paquete.",
                "La vista de rutas conecta relaciones indirectas con una dependencia directa.",
                "El historial de omisiones registra excepciones de secretos, no el origen del paquete.",
                "Las suites de consultas analizan código fuente."
            ],
            "concept": "Trazado de dependencias indirectas",
            "hints": [
                "¿Qué relación conecta el paquete con una dependencia declarada?",
                "¿Qué detalle del gráfico explica cómo llegó un componente transitivo?"
            ]
        },
        "ghas-supply-002": {
            "prompt": "Un equipo de compras solicita una lista legible por máquinas de las dependencias actuales de un repositorio. ¿Qué artefacto de GitHub corresponde?",
            "choices": [
                "Un registro de omisión de Dependabot",
                "Un conjunto de reglas de protección de rama",
                "Una SBOM exportada en formato SPDX",
                "Un archivo SARIF de análisis de código"
            ],
            "explanations": [
                "Un registro de omisión documenta una excepción de protección de secretos.",
                "Los conjuntos de reglas rigen políticas, no generan inventarios de software.",
                "GitHub puede exportar el gráfico de dependencias como una SBOM SPDX.",
                "SARIF contiene resultados de análisis de código, no el inventario de dependencias."
            ],
            "concept": "Formato de exportación SBOM",
            "hints": [
                "¿Qué artefacto inventaría componentes de software para otras herramientas?",
                "¿Qué formato estándar usa la exportación del gráfico de dependencias de GitHub?"
            ]
        },
        "ghas-supply-003": {
            "prompt": "Una compilación resuelve dependencias que no aparecen en manifiestos analizables del repositorio. ¿Qué mecanismo puede agregar esa instantánea de compilación a GitHub?",
            "choices": [
                "Carga SARIF",
                "Un patrón de secretos personalizado",
                "Clasificación automática de Dependabot",
                "Dependency submission API"
            ],
            "explanations": [
                "SARIF incorpora hallazgos de análisis de código.",
                "Los patrones de secretos detectan formatos de credenciales.",
                "La clasificación automática cambia el tratamiento de alertas, no el inventario.",
                "El envío de dependencias agrega datos resueltos al gráfico."
            ],
            "concept": "Instantáneas complementarias de dependencias",
            "hints": [
                "¿Qué datos faltan en el análisis estático de manifiestos?",
                "¿Qué interfaz envía un inventario de compilación resuelto?"
            ]
        },
        "ghas-supply-004": {
            "prompt": "Un pull request modifica un archivo de bloqueo y actualiza un paquete transitivo. ¿Qué función muestra el impacto de las dependencias antes de fusionarlo?",
            "choices": [
                "Revisión de dependencias",
                "Solo alertas de Dependabot",
                "Análisis del historial de secretos",
                "Análisis de flujo de datos de CodeQL"
            ],
            "explanations": [
                "La revisión de dependencias muestra paquetes agregados, quitados y actualizados en el pull request.",
                "Las alertas informan dependencias vulnerables, pero no muestran toda la diferencia de cambios.",
                "El análisis del historial busca credenciales expuestas.",
                "El análisis de flujo de datos evalúa rutas del código de la aplicación."
            ],
            "concept": "Revisión de cambios en archivos de bloqueo",
            "hints": [
                "¿Qué cambió en el pull request además de la entrada directa del manifiesto?",
                "¿Qué vista resume incorporaciones y cambios de versión antes de fusionar?"
            ]
        },
        "ghas-supply-005": {
            "prompt": "La protección de rama trata actualmente la revisión de dependencias como informativa. ¿Qué control convierte el resultado del flujo en una condición obligatoria para fusionar?",
            "choices": [
                "Definir una programación de actualizaciones de Dependabot",
                "Exige la revisión de dependencias antes de fusionar",
                "Habilitar el gráfico de dependencias sin exigir una comprobación",
                "Agregar una entrada de CODEOWNERS para el archivo de bloqueo"
            ],
            "explanations": [
                "Las programaciones crean propuestas de actualización, no requisitos de fusión.",
                "Una comprobación fallida bloquea la fusión solo si la política del repositorio exige que pase.",
                "El inventario por sí solo no aplica una comprobación de estado.",
                "CODEOWNERS solicita revisión, pero no convierte esta acción en estado obligatorio."
            ],
            "concept": "Comprobaciones obligatorias de revisión de dependencias",
            "hints": [
                "¿Qué convierte el resultado de un flujo en una condición de cumplimiento?",
                "¿Una comprobación fallida bloquea sin una regla que exija su aprobación?"
            ]
        },
        "ghas-supply-006": {
            "prompt": "Un pull request incorpora un paquete con una licencia prohibida por la política de la empresa. ¿Qué configuración de la acción de revisión de dependencias puede aplicarla?",
            "choices": [
                "Una suite de consultas de CodeQL",
                "Una credencial `registries` de Dependabot",
                "Una lista de licencias permitidas o denegadas",
                "Una entrada `paths-ignore` del análisis de secretos"
            ],
            "explanations": [
                "Las suites de consultas seleccionan reglas de análisis de código.",
                "Las credenciales de registro autentican la obtención de paquetes.",
                "La acción de revisión de dependencias puede comparar identificadores de licencia con la política.",
                "Las exclusiones de rutas configuran el alcance del análisis de secretos."
            ],
            "concept": "Política de licencias de dependencias",
            "hints": [
                "¿Qué comprobación del pull request evalúa licencias de paquetes modificados?",
                "¿La restricción trata de términos del paquete o de detección de secretos?"
            ]
        },
        "ghas-supply-007": {
            "prompt": "Un repositorio quiere que su flujo de revisión de dependencias falle solo si la vulnerabilidad nueva tiene gravedad alta o superior. ¿Qué configuración expresa ese umbral?",
            "choices": [
                "`schedule: weekly`",
                "`paths-ignore: high`",
                "`query-filters: security-extended`",
                "`fail-on-severity: high`"
            ],
            "explanations": [
                "Una programación controla cuándo Dependabot busca actualizaciones.",
                "`paths-ignore` no es una opción de gravedad de la revisión de dependencias.",
                "Los filtros de consultas configuran análisis de código, no revisión de dependencias.",
                "`fail-on-severity` define el umbral de gravedad de vulnerabilidades de la acción."
            ],
            "concept": "Umbrales de gravedad en la revisión",
            "hints": [
                "¿Qué entrada de la acción nombra directamente un umbral de gravedad?",
                "¿Qué opción distingue hallazgos altos de los de menor gravedad?"
            ]
        },
        "ghas-supply-008": {
            "prompt": "Se publica un nuevo aviso para un paquete que ya está en el gráfico de dependencias del repositorio. ¿Qué función notifica a quienes lo mantienen?",
            "choices": [
                "Alertas de Dependabot",
                "Actualizaciones de versiones de Dependabot",
                "Envío de dependencias",
                "Análisis de secretos"
            ],
            "explanations": [
                "Las alertas de Dependabot relacionan dependencias con avisos de GitHub Advisory Database.",
                "Las actualizaciones de versiones mantienen paquetes, pero no notifican vulnerabilidades.",
                "El envío agrega datos de dependencias, no avisos de vulnerabilidad.",
                "El análisis de secretos detecta credenciales expuestas."
            ],
            "concept": "Alcance de alertas de Dependabot",
            "hints": [
                "¿Qué relaciona nuevos datos de vulnerabilidades con paquetes existentes?",
                "¿Qué función informa dependencias vulnerables conocidas en el gráfico?"
            ]
        },
        "ghas-supply-009": {
            "prompt": "Una dependencia está varias versiones atrasada, pero ningún aviso marca su versión como vulnerable. ¿Qué afirmación distingue ambas condiciones?",
            "choices": [
                "No puede aparecer en el gráfico de dependencias",
                "Desactualizada no significa vulnerable",
                "Debe tener una alerta de seguridad de Dependabot",
                "Es seguro ignorar todas las actualizaciones futuras"
            ],
            "explanations": [
                "El gráfico puede enumerar paquetes aunque no tengan alertas.",
                "Estar por detrás de la versión más reciente no equivale a coincidir con una versión vulnerable conocida.",
                "Las alertas dependen de vulnerabilidades conocidas, no solo de una versión más reciente.",
                "Un paquete desactualizado aún puede requerir mantenimiento o actualizaciones de seguridad futuras."
            ],
            "concept": "Vulnerable frente a desactualizado",
            "hints": [
                "¿La preocupación es una versión afectada conocida o simplemente una versión anterior?",
                "¿Qué evidencia genera una alerta de vulnerabilidad y no solo una actualización rutinaria?"
            ]
        },
        "ghas-supply-010": {
            "prompt": "Un repositorio tiene una alerta de Dependabot por un paquete vulnerable, pero no recibe una propuesta de corrección. ¿Qué debería verificar primero un administrador?",
            "choices": [
                "Si el README tiene un encabezado SPDX",
                "Si CodeQL analiza según una programación",
                "Si están habilitadas las actualizaciones de seguridad",
                "Si el repositorio tiene un patrón personalizado de secretos"
            ],
            "explanations": [
                "Un encabezado SPDX no configura Dependabot.",
                "La programación de CodeQL es independiente de las actualizaciones de seguridad.",
                "Las propuestas de actualización de seguridad se crean si la función está habilitada y hay una corrección disponible.",
                "La configuración de patrones de secretos no habilita actualizaciones de paquetes."
            ],
            "concept": "Habilitación de actualizaciones de seguridad",
            "hints": [
                "¿Qué función crea una propuesta de corrección de paquetes después de una alerta?",
                "¿Las alertas por sí solas garantizan un pull request de actualización?"
            ]
        },
        "ghas-supply-011": {
            "prompt": "Una organización habilita alertas de Dependabot, pero quiere pull requests automáticos para paquetes vulnerables. ¿Qué distinción importa?",
            "choices": [
                "Las alertas fusionan automáticamente todas las actualizaciones",
                "Las actualizaciones de versiones son necesarias para generar alertas de vulnerabilidad",
                "Las actualizaciones de seguridad deshabilitan el gráfico de dependencias",
                "Las alertas señalan riesgos; las actualizaciones proponen correcciones"
            ],
            "explanations": [
                "Dependabot no fusiona automáticamente todos los cambios propuestos.",
                "Las alertas dependen de datos de dependencias y avisos, no de la programación de versiones.",
                "Las actualizaciones de seguridad no reemplazan el inventario de dependencias.",
                "Las alertas y los pull requests automatizados de seguridad son capacidades distintas."
            ],
            "concept": "Cobertura de alertas frente a actualizaciones",
            "hints": [
                "¿Qué función informa al equipo y cuál crea una propuesta de corrección?",
                "¿Una notificación cambia por sí sola la versión de la dependencia?"
            ]
        },
        "ghas-supply-012": {
            "prompt": "Una persona mantenedora necesita definir ecosistemas, directorios y programaciones de actualización de Dependabot. ¿Qué archivo del repositorio debería editar?",
            "choices": [
                "`.github/dependabot.yml`",
                "`.github/codeql.yml`",
                "`.github/secret_scanning.yml`",
                "`CODEOWNERS`"
            ],
            "explanations": [
                "El comportamiento de actualizaciones de Dependabot se configura en `.github/dependabot.yml`.",
                "Este no es el archivo predeterminado para programaciones y ecosistemas de Dependabot.",
                "Este archivo configura exclusiones de rutas del análisis de secretos.",
                "CODEOWNERS asigna responsabilidades de revisión de código."
            ],
            "concept": "Ubicación de configuración de actualizaciones",
            "hints": [
                "¿Qué configuración administra las entradas de actualización de paquetes de Dependabot?",
                "¿Dónde se definen ecosistema, directorio y programación?"
            ]
        },
        "ghas-supply-013": {
            "prompt": "Una fuente privada de paquetes debe estar disponible para las actualizaciones de Dependabot. ¿Qué sección de `.github/dependabot.yml` declara las definiciones de registros?",
            "choices": [
                "`ignore`",
                "`registries`",
                "`groups`",
                "`updates`"
            ],
            "explanations": [
                "`ignore` excluye dependencias o versiones coincidentes de las actualizaciones.",
                "La sección superior `registries` define el acceso a registros para Dependabot.",
                "`groups` combina actualizaciones de paquetes compatibles.",
                "`updates` configura trabajos por ecosistema y puede hacer referencia a registros."
            ],
            "concept": "Configuración de registros de Dependabot",
            "hints": [
                "¿Qué sección de configuración define las fuentes de paquetes que usa Dependabot?",
                "¿Esta sección define una fuente, un cronograma o una exclusión de actualizaciones?"
            ]
        },
        "ghas-supply-014": {
            "prompt": "Un equipo quiere reducir la cantidad de pull requests de Dependabot combinando actualizaciones de paquetes compatibles. ¿Dónde puede definir reglas de agrupación?",
            "choices": [
                "Un bloque `queries` de un flujo de CodeQL",
                "La SBOM SPDX del repositorio",
                "La configuración `groups` de `.github/dependabot.yml`",
                "Un bloque `paths-ignore` en `.github/secret_scanning.yml`"
            ],
            "explanations": [
                "La configuración de consultas de CodeQL sirve para analizar código.",
                "Una SBOM es un inventario, no una política de actualización.",
                "Las reglas de agrupación de Dependabot se definen en su configuración YAML.",
                "Las exclusiones de análisis de secretos no agrupan actualizaciones de paquetes."
            ],
            "concept": "Agrupación de actualizaciones de seguridad",
            "hints": [
                "¿Qué configuración controla cómo Dependabot combina pull requests de paquetes?",
                "¿Qué archivo ya define ecosistemas y programaciones?"
            ]
        },
        "ghas-supply-015": {
            "prompt": "Un repositorio configura grupos de Dependabot para actualizaciones rutinarias de versiones. ¿Qué debería comprobar el equipo antes de suponer que los pull requests de seguridad usan los mismos grupos?",
            "choices": [
                "Si el repositorio tiene una alerta de secretos",
                "Si CodeQL usa un modo de compilación para lenguajes compilados",
                "Si su SBOM incluye dependientes",
                "La agrupación de actualizaciones de seguridad está habilitada"
            ],
            "explanations": [
                "Las alertas de secretos no determinan la agrupación de paquetes.",
                "Los modos de compilación de CodeQL no configuran Dependabot.",
                "La SBOM exportada no incluye dependientes.",
                "La agrupación de actualizaciones de seguridad puede requerir una configuración de habilitación para los directorios aplicables."
            ],
            "concept": "Límites de agrupación de actualizaciones de seguridad",
            "hints": [
                "¿Los grupos de actualización rutinaria y de seguridad siempre se habilitan juntos?",
                "¿Qué alcance de configuración conviene revisar para agrupar pull requests de seguridad?"
            ]
        },
        "ghas-supply-016": {
            "prompt": "Una regla de clasificación automática de Dependabot pospone una alerta. ¿Qué hace esa acción?",
            "choices": [
                "Cambia el tratamiento de la alerta, no el paquete",
                "Publica automáticamente una versión corregida del paquete",
                "Quita el paquete vulnerable de todas las ramas",
                "Deshabilita futuras comparaciones con avisos"
            ],
            "explanations": [
                "Las reglas de clasificación administran alertas, no cambian el código fuente.",
                "Posponer no publica una corrección del paquete.",
                "Una regla de alertas no reescribe todas las declaraciones de dependencias.",
                "Posponer no equivale a deshabilitar la detección de vulnerabilidades."
            ],
            "concept": "La clasificación automática no corrige paquetes",
            "hints": [
                "¿Cambió la versión de la dependencia o solo su tratamiento en alertas?",
                "¿Qué mecanismo distinto propondría una actualización del código?"
            ]
        },
        "ghas-supply-017": {
            "prompt": "Un equipo pospone una alerta de Dependabot hasta una fecha de revisión. ¿Qué debería esperar cuando termine ese período?",
            "choices": [
                "El gráfico de dependencias se deshabilita permanentemente",
                "Posponer no corrige la vulnerabilidad",
                "El paquete se actualiza automáticamente en la fecha límite",
                "El aviso se quita de GitHub Advisory Database"
            ],
            "explanations": [
                "Cambiar el estado de una alerta no deshabilita el inventario de dependencias.",
                "Posponer aplaza la atención, pero no demuestra que se haya corregido.",
                "El período de aplazamiento no es una programación de actualizaciones.",
                "La clasificación del repositorio no retira un aviso publicado."
            ],
            "concept": "Momento de notificación de clasificación automática",
            "hints": [
                "¿Qué aplaza el período de espera?",
                "¿Qué evento debería impulsar al equipo a revisar el riesgo?"
            ]
        },
        "ghas-supply-018": {
            "prompt": "Una regla de clasificación automática descarta alertas que cumplen una condición de metadatos. ¿Qué salvaguarda reduce mejor la supresión accidental de hallazgos importantes?",
            "choices": [
                "Desactivar las notificaciones de la regla",
                "Limitar la regla a un ecosistema y revisar pocas veces las coincidencias",
                "Revisar los criterios y auditar periódicamente las alertas afectadas",
                "Aplicar la regla a todas las coincidencias y aplazar la revisión manual"
            ],
            "explanations": [
                "Desactivar notificaciones reduce la visibilidad, pero no evita una supresión insegura.",
                "Limitar el ámbito puede ayudar, pero revisar pocas veces deja errores sin detectar.",
                "Revisar condiciones y alertas afectadas ayuda a detectar descartes no deseados.",
                "Aplicar una regla amplia antes de revisarla puede suprimir alertas no relacionadas."
            ],
            "concept": "Revisión de clasificación automatizada",
            "hints": [
                "¿Qué riesgo surge si una regla coincide con demasiadas alertas?",
                "¿Qué práctica supervisa la automatización sin abandonarla?"
            ]
        },
        "ghas-supply-019": {
            "prompt": "Una organización quiere que una regla de clasificación automática se aplique a un ecosistema de paquetes y alcance de dependencia específicos. ¿Qué información deberían usar sus condiciones?",
            "choices": [
                "El motivo de omisión de protección de inserciones de quien contribuye",
                "Una ubicación de origen SARIF",
                "La cantidad de estrellas del repositorio",
                "Los metadatos del paquete y la dependencia de la alerta"
            ],
            "explanations": [
                "Los motivos de omisión pertenecen al análisis de secretos.",
                "Las ubicaciones SARIF describen hallazgos de análisis de código.",
                "La popularidad del repositorio no describe el riesgo de dependencias.",
                "Las reglas de Dependabot pueden dirigirse a metadatos como paquete y alcance."
            ],
            "concept": "Clasificación automática dirigida por metadatos",
            "hints": [
                "¿Qué atributos distinguen las alertas de paquetes que deberían coincidir?",
                "¿Qué tipo de datos debería evaluar una regla de tratamiento de alertas?"
            ]
        },
        "ghas-supply-020": {
            "prompt": "Un flujo de compilación envía una instantánea de dependencias antes de terminar el trabajo que las resuelve. ¿Cuál es el problema probable?",
            "choices": [
                "Dependencias sin resolver pueden faltar del inventario",
                "El análisis de secretos convertirá la instantánea a SARIF",
                "Dependabot inferirá todos los paquetes del nombre del flujo",
                "La instantánea incluirá automáticamente los paquetes dependientes"
            ],
            "explanations": [
                "La instantánea debería reflejar el conjunto de dependencias resuelto por la compilación.",
                "El análisis de secretos no transforma envíos de dependencias.",
                "El nombre del flujo no identifica paquetes resueltos.",
                "Una SBOM enumera dependencias, no todos los proyectos que dependen del repositorio."
            ],
            "concept": "Orden del envío de dependencias",
            "hints": [
                "¿En qué momento se conoce el conjunto completo de dependencias de la compilación?",
                "¿Una instantánea temprana podría omitir componentes que aún no se resolvieron?"
            ]
        },
        "ghas-supply-021": {
            "prompt": "Un equipo quiere ejecutar comprobaciones de dependencias en cambios dirigidos a su rama principal. ¿Dónde configura el disparador de la acción de revisión de dependencias?",
            "choices": [
                "En un paquete de consultas de CodeQL",
                "En un flujo de GitHub Actions activado por `pull_request`",
                "En `dependabot.yml` bajo `registries`",
                "En la SBOM del repositorio"
            ],
            "explanations": [
                "Los paquetes de consultas configuran análisis estático.",
                "La acción se ejecuta desde un flujo, habitualmente en pull requests.",
                "Los registros configuran orígenes de paquetes, no eventos de flujos.",
                "Una SBOM es un inventario exportado, no un disparador."
            ],
            "concept": "Orquestación del flujo de revisión de dependencias",
            "hints": [
                "¿Qué evento debería evaluar la diferencia propuesta antes de fusionar?",
                "¿Qué tipo de archivo declara eventos de GitHub Actions?"
            ]
        },
        "ghas-supply-022": {
            "prompt": "La acción de revisión de dependencias no encuentra datos para un pull request. ¿Qué base debería verificar un administrador?",
            "choices": [
                "Que el repositorio tenga una base de CodeQL",
                "Que se hayan publicado patrones personalizados de secretos",
                "Habilita el gráfico para ese ecosistema",
                "Que la protección de inserciones esté configurada para bloquear"
            ],
            "explanations": [
                "Las bases de CodeQL contienen código para analizar con consultas.",
                "Los patrones de secretos no proporcionan metadatos de paquetes.",
                "La revisión depende de datos del gráfico de dependencias y de ecosistemas compatibles.",
                "La protección de inserciones analiza credenciales, no inventarios de paquetes."
            ],
            "concept": "Requisitos de datos para revisión de dependencias",
            "hints": [
                "¿Qué fuente de inventario de paquetes usa la revisión?",
                "¿Qué función del repositorio debe habilitarse para obtener información de dependencias?"
            ]
        },
        "ghas-supply-023": {
            "prompt": "Se usa una SBOM SPDX generada como prueba de que todos los componentes desplegados son seguros. ¿Qué limitación deberían tener presente quienes la revisan?",
            "choices": [
                "Una SBOM corrige automáticamente paquetes vulnerables",
                "Una SBOM contiene solo dependencias directas",
                "Una SBOM reemplaza el gráfico de dependencias",
                "El inventario no evalúa vulnerabilidades"
            ],
            "explanations": [
                "Una SBOM informa componentes, no aplica correcciones de paquetes.",
                "La exportación puede incluir rutas transitivas y dependencias.",
                "GitHub exporta el estado del gráfico; no lo reemplaza.",
                "El inventario aporta transparencia, pero no demuestra seguridad."
            ],
            "concept": "Límites de garantía de una SBOM",
            "hints": [
                "¿Qué pregunta responde un inventario y qué no demuestra?",
                "¿Enumerar un componente prueba que su versión no tenga vulnerabilidades conocidas?"
            ]
        },
        "ghas-supply-024": {
            "prompt": "Un socio solicita una lista de bibliotecas que usa un repositorio, no de proyectos que lo consumen. ¿Qué representa la SBOM exportada del repositorio?",
            "choices": [
                "Dependencias y metadatos del repositorio",
                "Todos los repositorios que dependen de este repositorio",
                "Cada paquete publicado en GitHub",
                "Solo vulnerabilidades de la base de avisos"
            ],
            "explanations": [
                "La SBOM exporta el inventario de componentes del gráfico de dependencias.",
                "Los proyectos dependientes no aparecen en la SBOM del repositorio.",
                "Una SBOM no es un catálogo de todos los paquetes de GitHub.",
                "La SBOM registra componentes, no solo vulnerabilidades."
            ],
            "concept": "Dependencias frente a dependientes en SBOM",
            "hints": [
                "¿Se solicitan paquetes que usa el proyecto o proyectos que lo usan?",
                "¿Qué lado de la relación aparece en una SBOM exportada?"
            ]
        },
        "ghas-supply-025": {
            "prompt": "Un paquete aún no tiene una versión corregida, pero su alerta de Dependabot es válida. ¿Qué respuesta conserva la visibilidad mientras el equipo mitiga el riesgo?",
            "choices": [
                "Quitar la referencia directa y asumir que no quedan copias transitivas",
                "Mantén abierta la alerta y registra la mitigación específica",
                "Descartarla como corregida sin una versión con parche",
                "Suprimir las alertas del ecosistema hasta que se publique un parche"
            ],
            "explanations": [
                "Quitar una referencia directa puede dejar otra ruta y no conserva el seguimiento de la alerta.",
                "Una mitigación específica mantiene visible la alerta válida para reevaluarla.",
                "Sin una versión corregida, marcar la alerta como resuelta exagera la remediación.",
                "Suprimir todo un ecosistema oculta riesgos no relacionados en vez de contener este problema."
            ],
            "concept": "Administración de excepciones de dependencias",
            "hints": [
                "¿Se resolvió la vulnerabilidad o solo se mitigó temporalmente?",
                "¿Qué mantiene visible el problema cuando aún no hay una versión corregida?"
            ]
        },
        "ghas-supply-026": {
            "prompt": "Un equipo prioriza una dependencia vulnerable con CVSS y EPSS. ¿Qué distinción debería guiar su interpretación?",
            "choices": [
                "Ambas puntuaciones miden la antigüedad del paquete",
                "EPSS identifica la versión corregida; CVSS cuenta rutas de dependencias",
                "CVSS describe la gravedad; EPSS estima la probabilidad de explotación",
                "CVSS mide la probabilidad de explotación; EPSS describe compatibilidad de licencias"
            ],
            "explanations": [
                "Ninguna puntuación mide la antigüedad de un paquete.",
                "Las versiones corregidas y las rutas de dependencias son otros datos de alertas.",
                "CVSS califica la gravedad de la vulnerabilidad y EPSS estima la probabilidad de explotación.",
                "La compatibilidad de licencias no es lo que mide EPSS."
            ],
            "concept": "EPSS frente a CVSS",
            "hints": [
                "¿Qué señal describe el impacto y cuál estima la probabilidad de explotación?",
                "¿Son puntuaciones intercambiables de la misma propiedad?"
            ]
        },
        "ghas-supply-027": {
            "prompt": "Una alerta de Dependabot identifica un paquete transitivo vulnerable. ¿Qué información ayuda a encontrar una corrección práctica?",
            "choices": [
                "Los motivos de omisión de la protección de inserciones",
                "La cantidad actual de consultas de CodeQL",
                "Los repositorios dependientes de la SBOM",
                "Ruta de dependencia y corrección disponible"
            ],
            "explanations": [
                "Los motivos de omisión de secretos no explican el origen del paquete.",
                "La cantidad de consultas no identifica una ruta de corrección de dependencias.",
                "La SBOM exportada no enumera dependientes.",
                "La ruta identifica qué paquete padre incorpora el componente y la alerta puede indicar una versión corregida."
            ],
            "concept": "Corrección eficaz de dependencias",
            "hints": [
                "¿Qué dependencia padre podría actualizarse para quitar la versión transitiva?",
                "¿Qué detalle de la alerta señala una versión corregida disponible?"
            ]
        },
        "ghas-supply-028": {
            "prompt": "Un flujo de revisión de dependencias debe cargar una política específica del repositorio desde un archivo YAML local. ¿Qué entrada de la acción señala la ruta predeterminada documentada?",
            "choices": [
                "`config-file: './.github/dependency-review-config.yml'`",
                "`config-file: './.github/dependency-review.yml'`",
                "`config-file: './.github/dependency-review-config.yaml'`",
                "`config-file: './.github/dependency-config.yml'`"
            ],
            "explanations": [
                "Esta es la ruta de ejemplo predeterminada documentada para el archivo de configuración local de revisión de dependencias.",
                "Este nombre no es la ruta predeterminada documentada para la configuración de la acción.",
                "La acción puede usar otra ruta, pero esta no es el ejemplo predeterminado documentado.",
                "La acción puede usar otra ruta, pero esta no es el ejemplo predeterminado documentado."
            ],
            "concept": "Ruta del archivo de configuración de revisión de dependencias",
            "hints": [
                "¿Qué entrada nombra un archivo en vez de definir una política directamente?",
                "¿Dónde se guarda la configuración local documentada del repositorio?"
            ]
        },
        "ghas-supply-029": {
            "prompt": "Un repositorio quiere combinar actualizaciones rutinarias de varios ecosistemas en un solo pull request de Dependabot. ¿Qué función de configuración está diseñada para ello?",
            "choices": [
                "Una suite de consultas de CodeQL",
                "Grupos multiecosistema en `dependabot.yml`",
                "Una sola lista `paths-ignore`",
                "La exportación de SBOM del gráfico de dependencias"
            ],
            "explanations": [
                "Las suites de consultas seleccionan reglas de análisis de código.",
                "Los grupos multiecosistema coordinan actualizaciones compatibles entre ecosistemas.",
                "Las exclusiones de rutas configuran el alcance del análisis de secretos.",
                "La exportación de SBOM genera inventario, no grupos de actualizaciones."
            ],
            "concept": "Configuración multiecosistema de actualizaciones",
            "hints": [
                "¿La agrupación deseada cruza límites entre ecosistemas?",
                "¿Qué opción de Dependabot agrupa actualizaciones de varios administradores de paquetes?"
            ]
        },
        "ghas-supply-030": {
            "prompt": "Un flujo fija acciones como `actions/checkout` en etiquetas de versión. ¿Qué ecosistema de Dependabot puede proponer actualizaciones para esas referencias?",
            "choices": [
                "`docker`",
                "`pip`",
                "`github-actions`",
                "`npm`"
            ],
            "explanations": [
                "Docker supervisa dependencias de imágenes de contenedor.",
                "pip gestiona paquetes de Python.",
                "Dependabot admite el ecosistema `github-actions` para referencias de acciones en flujos.",
                "npm supervisa paquetes JavaScript, no referencias de acciones."
            ],
            "concept": "Mantenimiento de dependencias de flujos",
            "hints": [
                "¿Qué ecosistema identifica acciones reutilizables en archivos de flujo?",
                "¿Qué tipo de dependencia se escribe en un campo `uses` de Actions?"
            ]
        },
        "ghas-supply-031": {
            "prompt": "Las alertas de Dependabot están habilitadas, pero el equipo quiere pull requests automáticos para paquetes vulnerables. ¿Qué suposición debería evitar?",
            "choices": [
                "Que las actualizaciones de seguridad requieran una dependencia vulnerable corregible",
                "Que los datos de alertas provengan de dependencias y avisos",
                "Que las actualizaciones propuestas deban revisarse",
                "Que habilitar solo alertas garantice pull requests de actualización de seguridad"
            ],
            "explanations": [
                "Puede que una alerta no tenga una versión corregida disponible.",
                "Dependabot relaciona avisos con datos de dependencias.",
                "Las propuestas automáticas aún requieren revisión y pruebas.",
                "Las alertas y los pull requests de seguridad tienen condiciones de habilitación distintas."
            ],
            "concept": "Configuración de actualizaciones frente a generación de alertas",
            "hints": [
                "¿Qué función propone una corrección en vez de notificar un riesgo?",
                "¿Qué configuración conviene verificar además de generar alertas?"
            ]
        },
        "ghas-supply-032": {
            "prompt": "La actualización pasa CI, pero también cambia un paquete transitivo además del padre. ¿Qué debería evaluar todavía quien mantiene el proyecto antes de fusionar?",
            "choices": [
                "Revisa los cambios del paquete padre y del transitivo aunque CI pase",
                "Considera que pasar CI demuestra que el paquete actualizado es seguro en cualquier entorno",
                "Supón que actualizar borra el aviso del paquete",
                "Deja de revisar rutas de dependencias al cambiar el paquete directo"
            ],
            "explanations": [
                "Las comprobaciones locales ayudan a validar el cambio, pero no garantizan todo comportamiento.",
                "Un flujo aprobado no garantiza seguridad en todos los entornos.",
                "Actualizar un paquete no elimina su historial de avisos.",
                "El gráfico sigue ayudando a rastrear la versión nueva y sus dependencias."
            ],
            "concept": "Revisión de actualizaciones automatizadas",
            "hints": [
                "¿Qué evidencia corresponde al cambio probado en este repositorio?",
                "¿Pasar CI elimina la necesidad de revisar el alcance y el comportamiento?"
            ]
        },
        "ghas-supply-033": {
            "prompt": "Las actualizaciones rutinarias de versiones de Dependabot generan más pull requests de los que el equipo puede revisar. ¿Qué opción puede limitar los pull requests de actualización abiertos?",
            "choices": [
                "`category` de una carga SARIF",
                "`open-pull-requests-limit` en `dependabot.yml`",
                "`fail-on-severity` de la acción de revisión de dependencias",
                "`paths-ignore` en `secret_scanning.yml`"
            ],
            "explanations": [
                "Las categorías SARIF distinguen análisis de código.",
                "Dependabot usa esta opción para limitar los pull requests abiertos de una entrada de actualización.",
                "`fail-on-severity` define un umbral de vulnerabilidad para la acción de revisión.",
                "`paths-ignore` se refiere a rutas del análisis de secretos."
            ],
            "concept": "Administración de volumen de actualizaciones rutinarias",
            "hints": [
                "¿Qué opción limita las propuestas de actualización pendientes?",
                "¿El problema es el volumen de actualizaciones o la gravedad de vulnerabilidades?"
            ]
        },
        "ghas-supply-034": {
            "prompt": "Una alerta de Dependabot no muestra una versión corregida. ¿Qué debería hacer la persona mantenedora?",
            "choices": [
                "Suponer que el paquete no es vulnerable",
                "Deshabilitar alertas para el ecosistema",
                "Evaluar exposición y mitigaciones, seguir la alerta y revisarla cuando cambien las opciones",
                "Cerrar la alerta porque no hay actualización"
            ],
            "explanations": [
                "La alerta demuestra una vulnerabilidad conocida aunque no haya parche.",
                "Deshabilitar alertas futuras reduce visibilidad, no mitiga este problema.",
                "La falta de corrección no elimina el riesgo; importan la mitigación y la reevaluación.",
                "Cerrar no corrige la dependencia vulnerable."
            ],
            "concept": "Respuesta ante dependencias sin parche",
            "hints": [
                "¿La falta de una corrección equivale a ausencia de riesgo?",
                "¿Qué mantiene bajo revisión una vulnerabilidad conocida mientras no haya solución?"
            ]
        },
        "ghas-supply-035": {
            "prompt": "Un informe de vulnerabilidad marca un paquete como transitivo. ¿Qué significa esa clasificación?",
            "choices": [
                "Ninguna dependencia declarada lo incorpora al proyecto",
                "Solo se usa como dependencia de desarrollo",
                "Se detectó en un envío SARIF",
                "Otra dependencia lo incorpora al proyecto"
            ],
            "explanations": [
                "El estado transitivo por sí solo no demuestra que el paquete sea inalcanzable.",
                "La relación y el alcance de ejecución son propiedades distintas.",
                "SARIF es un formato de análisis de código, no una clasificación de dependencias.",
                "Una dependencia transitiva llega mediante otra dependencia."
            ],
            "concept": "Clasificación directa frente a transitiva",
            "hints": [
                "¿El proyecto declara el paquete o lo hereda de otro?",
                "¿Qué relación muestra el gráfico de dependencias?"
            ]
        },
        "ghas-supply-036": {
            "prompt": "Un equipo quiere actualizaciones de versión solo para ciertos paquetes, excepto uno que decidió excluir. ¿Qué configuración de Dependabot expresa ambas políticas?",
            "choices": [
                "Definir `allow` para seleccionar dependencias y luego excluir una con `ignore`",
                "Definir `ignore` para seleccionar dependencias y luego excluir una con `allow`",
                "Definir `registries` para seleccionar dependencias y luego excluir una con `ignore`",
                "Definir `groups` para seleccionar dependencias y luego excluir una con `ignore`"
            ],
            "explanations": [
                "`allow` selecciona dependencias para actualizar; después, una regla coincidente de `ignore` prevalece y las excluye a ellas o a determinadas versiones.",
                "`ignore` filtra coincidencias en lugar de seleccionar dependencias; `allow` no es una regla de exclusión.",
                "`registries` configura el acceso a fuentes de paquetes, no una política de selección de dependencias.",
                "`groups` combina actualizaciones; no selecciona dependencias permitidas ni expresa exclusiones."
            ],
            "concept": "Reglas allow e ignore de Dependabot",
            "hints": [
                "¿Qué reglas seleccionan dependencias y cuál prevalece para una coincidencia excluida?",
                "¿Cómo puede coexistir una exclusión específica con una lista permitida de actualizaciones?"
            ]
        },
        "ghas-supply-037": {
            "prompt": "Un analista exporta una SBOM el lunes y la compara con una versión del trimestre anterior. ¿Qué representa la exportación?",
            "choices": [
                "El conjunto de repositorios que dependen del proyecto",
                "El estado actual del gráfico de dependencias cuando se genera la SBOM",
                "Un registro inmutable de todas las dependencias de compilaciones anteriores",
                "Solo componentes con alertas de Dependabot"
            ],
            "explanations": [
                "La SBOM exportada no incluye dependientes.",
                "GitHub exporta el estado actual del gráfico de dependencias del repositorio.",
                "Una exportación actual no es un archivo histórico de todas las compilaciones.",
                "La SBOM incluye dependencias aunque no tengan alertas."
            ],
            "concept": "Vigencia de la instantánea SBOM",
            "hints": [
                "¿De qué momento informa un inventario recién generado?",
                "¿Una exportación del gráfico actual conserva el contenido de versiones anteriores?"
            ]
        },
        "ghas-supply-038": {
            "prompt": "Hay una alerta abierta, pero no aparece ningún pull request de actualización de seguridad. ¿Qué dos condiciones conviene investigar?",
            "choices": [
                "Si CodeQL tiene una ejecución programada y una categoría SARIF",
                "Si la alerta se asignó a un equipo y el repositorio tiene estrellas",
                "Si las actualizaciones de seguridad están habilitadas y si hay una corrección compatible",
                "Si el repositorio tiene un patrón personalizado y un encabezado SPDX"
            ],
            "explanations": [
                "La programación de CodeQL y las categorías SARIF son independientes de Dependabot.",
                "La asignación y la popularidad no demuestran que exista una corrección compatible.",
                "La función debe estar disponible y la vulnerabilidad debe tener una ruta de actualización viable.",
                "Los patrones de secretos y encabezados SPDX no crean pull requests de seguridad."
            ],
            "concept": "Solución de problemas de actualizaciones de seguridad",
            "hints": [
                "¿Qué debe estar habilitado y qué debe existir para proponer una actualización?",
                "¿Una alerta válida podría no tener una versión compatible disponible?"
            ]
        },
        "ghas-supply-039": {
            "prompt": "Una biblioteca vulnerable aparece mediante dos dependencias directas distintas. ¿Por qué debería inspeccionar cada ruta la persona mantenedora?",
            "choices": [
                "El gráfico muestra solo una ruta por diseño",
                "El paquete debe ser una dependencia directa",
                "El análisis de secretos necesita cada ruta para validar la credencial",
                "Actualizar un paquete padre podría dejar otra ruta hacia la versión vulnerable"
            ],
            "explanations": [
                "Las rutas de dependencias no se limitan a una relación.",
                "El caso describe expresamente una inclusión indirecta.",
                "La validación de secretos no se relaciona con rutas del gráfico de paquetes.",
                "Un paquete transitivo puede incorporarse mediante varios paquetes padre."
            ],
            "concept": "Varias rutas transitivas",
            "hints": [
                "¿Otro paquete padre podría seguir incorporando la misma versión vulnerable?",
                "¿Qué conviene comprobar tras cambiar solo una dependencia directa?"
            ]
        },
        "ghas-supply-040": {
            "prompt": "Un flujo debe fallar si un pull request incorpora un paquete con licencia prohibida y seguir informando vulnerabilidades. ¿Qué configuración corresponde?",
            "choices": [
                "Configura la política de licencias de la acción",
                "Agregar la licencia a `registries` de `dependabot.yml`",
                "Excluir la ruta del paquete en `secret_scanning.yml`",
                "Descartar el aviso del paquete"
            ],
            "explanations": [
                "La acción de revisión admite políticas de licencias y ajustes de gravedad de vulnerabilidades.",
                "Las entradas de registro configuran orígenes, no reglas de licencias.",
                "Las exclusiones de secretos no afectan las comprobaciones de licencias.",
                "Descartar un aviso no aplica una política de licencias."
            ],
            "concept": "Política de dependencias con alcance limitado",
            "hints": [
                "¿Qué acción de pull request evalúa riesgo de paquetes y política de licencias?",
                "¿Dónde debería configurarse una regla sobre identificadores de licencia permitidos?"
            ]
        },
        "ghas-ecosystem-041": {
            "prompt": "¿Qué automatización propone pull requests de actualización de dependencias específicamente para corregir vulnerabilidades conocidas?",
            "choices": [
                "Code scanning",
                "Dependabot version updates",
                "Dependabot security updates",
                "Dependabot alerts"
            ],
            "explanations": [
                "El análisis de código examina el código fuente de la aplicación en vez de actualizar versiones de paquetes.",
                "Las actualizaciones de versiones proponen mejoras de dependencias aunque ningún aviso de vulnerabilidad las exija.",
                "Las actualizaciones de seguridad proponen cambios para corregir vulnerabilidades conocidas en dependencias.",
                "Las alertas notifican dependencias con vulnerabilidades conocidas; una alerta no es por sí misma un pull request de actualización."
            ],
            "concept": "Actualizaciones de dependencias motivadas por vulnerabilidades",
            "hints": [
                "Distingue mantenerse actualizado de responder a una vulnerabilidad identificada.",
                "Considera si el resultado buscado es una alerta, un cambio de dependencia o análisis del código."
            ]
        },
        "ghas-ecosystem-042": {
            "prompt": "¿Qué recurso de seguridad pueden consultar las integraciones mediante la API REST o GraphQL de GitHub para obtener avisos publicados?",
            "choices": [
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "Una política de seguridad explica las versiones compatibles y cómo informar de vulnerabilidades.",
                "Esta función ofrece a investigadores un canal privado para informar a quienes mantienen el repositorio.",
                "Los avisos del repositorio permiten discutir en privado, coordinar correcciones y publicar después.",
                "La base es una colección de avisos de seguridad publicados que se puede consultar."
            ],
            "concept": "Integración del ecosistema de avisos",
            "hints": [
                "Distingue instrucciones, recepción confidencial, corrección coordinada y datos de referencia públicos.",
                "Considera el público y la fase de divulgación."
            ]
        },
        "ghas-secrets-041": {
            "prompt": "Dos alertas muestran el mismo tipo de secreto, pero solo uno tiene un resultado de validez del proveedor. ¿Qué debería concluir el equipo de respuesta?",
            "choices": [
                "Evaluar cada resultado en su contexto; la falta de validación no demuestra seguridad",
                "La alerta sin resultado debe ser un falso positivo",
                "Ambas credenciales están activas porque una lo estaba",
                "El analizador valida todos los tipos de secretos de la misma manera"
            ],
            "explanations": [
                "Los resultados pueden variar según el tipo o la disponibilidad y requieren interpretación individual.",
                "La falta de comprobación no demuestra que la detección sea falsa.",
                "El estado de una credencial no determina el de otra.",
                "La compatibilidad con validez del proveedor no es igual para todos los tipos."
            ],
            "concept": "Comprobación de validez según el contexto",
            "hints": [
                "¿Qué indica el resultado para cada credencial individual?",
                "¿Se puede generalizar a otra alerta el estado de validación de una?"
            ]
        },
        "ghas-supply-041": {
            "prompt": "La acción de revisión de dependencias no informa cambios aunque un pull request actualiza un archivo de bloqueo. ¿Qué debería comprobar el equipo antes de considerarlo una revisión limpia?",
            "choices": [
                "Que el flujo de CodeQL se ejecute cada noche",
                "Que el gráfico resuelva manifiestos compatibles para el estado base y el estado de dependencias propuesto",
                "Que el repositorio no tenga alertas de análisis de secretos",
                "Que la SBOM enumere repositorios dependientes"
            ],
            "explanations": [
                "La programación de CodeQL no garantiza datos para la revisión de dependencias.",
                "Una diferencia útil requiere información de dependencias para ambos estados comparados.",
                "Las alertas de secretos no determinan la cobertura de cambios de paquetes.",
                "La SBOM del repositorio no enumera repositorios dependientes."
            ],
            "concept": "Integridad del inventario base y propuesto",
            "hints": [
                "¿Qué dos estados de dependencias compara la revisión?",
                "¿La falta de inventario podría hacer que un resultado vacío no sea concluyente?"
            ]
        },
        "ghas-code-001": {
            "prompt": "Un repositorio necesita una configuración rápida de CodeQL y no tiene requisitos especiales de flujo. ¿Qué configuración debería considerar primero su administrador?",
            "choices": [
                "Solo una carga SARIF",
                "Una entrada de actualización de Dependabot",
                "Configuración predeterminada",
                "Configuración avanzada"
            ],
            "explanations": [
                "La carga SARIF incorpora resultados de otro proceso de análisis.",
                "Las entradas de Dependabot configuran actualizaciones de paquetes.",
                "La configuración predeterminada selecciona automáticamente lenguajes, una suite de consultas y eventos de análisis.",
                "La configuración avanzada permite personalizar el flujo."
            ],
            "concept": "Selección de configuración predeterminada",
            "hints": [
                "¿El repositorio necesita personalización o un inicio administrado sencillo?",
                "¿Qué configuración elige automáticamente valores comunes de CodeQL?"
            ]
        },
        "ghas-code-002": {
            "prompt": "Un equipo debe definir comandos de compilación y eventos de análisis personalizados en un flujo de CodeQL. ¿Qué configuración proporciona ese control?",
            "choices": [
                "Configuración predeterminada sin cambios en el flujo",
                "Actualizaciones de versiones de Dependabot",
                "Patrones personalizados de análisis de secretos",
                "Configuración avanzada con un flujo personalizable"
            ],
            "explanations": [
                "La configuración predeterminada administra opciones comunes sin esos cambios de flujo.",
                "Dependabot actualiza paquetes, no compila bases de datos de CodeQL.",
                "Los patrones personalizados detectan formatos de credenciales.",
                "La configuración avanzada proporciona un flujo personalizable para analizar con CodeQL."
            ],
            "concept": "Selección de configuración avanzada",
            "hints": [
                "¿Qué parte del análisis debe controlar directamente el equipo?",
                "¿Qué configuración expone el flujo de CodeQL para personalizarlo?"
            ]
        },
        "ghas-code-003": {
            "prompt": "¿Qué secuencia describe cómo CodeQL produce hallazgos de análisis de código?",
            "choices": [
                "Crear una base, ejecutar consultas y publicar resultados",
                "Exportar una SBOM SPDX, ejecutar Dependabot y cargar un patrón de secretos",
                "Crear un archivo SARIF a partir de la lista de licencias del repositorio",
                "Ejecutar una consulta antes de representar el código"
            ],
            "explanations": [
                "CodeQL representa el código en una base, ejecuta consultas y muestra los resultados.",
                "Una SBOM y los patrones de secretos pertenecen a otras funciones.",
                "El inventario de licencias no es el flujo de análisis de CodeQL.",
                "Las consultas operan sobre una representación del código en una base."
            ],
            "concept": "Flujo de análisis de CodeQL",
            "hints": [
                "¿Qué representación analiza el motor de consultas?",
                "¿Qué pasos convierten el código fuente en alertas del repositorio?"
            ]
        },
        "ghas-code-004": {
            "prompt": "Una alerta de CodeQL sigue datos de una solicitud desde un origen hasta un destino peligroso. ¿Cómo debería usar ese rastro el desarrollador?",
            "choices": [
                "Suponer que CodeQL reescribió automáticamente la ruta",
                "Valida en el código el flujo de datos señalado",
                "Tratar el rastro como prueba de que un atacante ya explotó el código",
                "Descartar la alerta porque el flujo de datos solo informa dependencias"
            ],
            "explanations": [
                "El rastro de una alerta no modifica por sí mismo el código fuente.",
                "El rastro explica un flujo potencial que el equipo debe evaluar en contexto.",
                "La evidencia de análisis estático no demuestra que haya ocurrido una explotación.",
                "El flujo de datos es evidencia de análisis de código, no inventario de dependencias."
            ],
            "concept": "Interpretación de evidencia de flujo de datos",
            "hints": [
                "¿Qué muestra sobre el código la ruta desde el origen al destino?",
                "¿Qué se debe validar antes de elegir una corrección?"
            ]
        },
        "ghas-code-005": {
            "prompt": "Un analizador de terceros prepara resultados para el análisis de código de GitHub. ¿Qué versión de SARIF debería usar?",
            "choices": [
                "3.0.0",
                "Un formato personalizado ajeno a SARIF",
                "2.1.0",
                "1.0.0"
            ],
            "explanations": [
                "SARIF 3.0.0 no es la versión admitida descrita para las cargas.",
                "La carga debe ser un archivo SARIF compatible.",
                "GitHub admite un subconjunto de SARIF 2.1.0 para cargar análisis de código.",
                "La versión 1.0.0 no es el formato compatible documentado."
            ],
            "concept": "Compatibilidad de versión SARIF",
            "hints": [
                "¿Qué versión estándar documenta GitHub para los resultados de análisis de código?",
                "¿Qué formato permite que un análisis de terceros cree alertas de GitHub?"
            ]
        },
        "ghas-code-006": {
            "prompt": "Una herramienta de terceros carga el mismo hallazgo en cada análisis, pero GitHub crea alertas repetidas. ¿Qué datos SARIF ayudan a relacionar el resultado entre ejecuciones?",
            "choices": [
                "Una categoría aleatoria nueva en cada análisis",
                "La programación de `dependabot.yml` del repositorio",
                "Solo el título visible de la alerta",
                "Rutas estables y huellas"
            ],
            "explanations": [
                "Cambiar categorías puede separar análisis en vez de identificar un resultado estable.",
                "Las programaciones de Dependabot no afectan la correlación SARIF.",
                "El título por sí solo no es el mecanismo documentado de huellas.",
                "La identidad estable de regla, las rutas y las huellas permiten rastrear hallazgos equivalentes."
            ],
            "concept": "Identidad estable de resultados SARIF",
            "hints": [
                "¿Qué propiedades deberían mantenerse coherentes entre análisis?",
                "¿Qué metadatos ayudan a distinguir un hallazgo persistente de uno nuevo?"
            ]
        },
        "ghas-code-007": {
            "prompt": "Una integración carga SARIF directamente mediante la API de análisis de código sin `partialFingerprints`. ¿Qué riesgo debería atender su responsable?",
            "choices": [
                "Sin huellas, pueden aparecer alertas duplicadas",
                "La API convierte cada resultado en una alerta de Dependabot",
                "El repositorio obtiene automáticamente una base de CodeQL",
                "La carga deshabilita todos los análisis futuros"
            ],
            "explanations": [
                "La API puede procesar resultados sin huellas, pero podrían aparecer duplicados.",
                "Las cargas SARIF crean hallazgos de análisis de código, no alertas de dependencias.",
                "Cargar resultados no genera una base de CodeQL.",
                "Una carga de análisis no deshabilita análisis futuros."
            ],
            "concept": "Manejo de huellas en cargas de API",
            "hints": [
                "¿Qué podría ocurrir si faltan datos de identidad del resultado?",
                "¿Qué propiedad SARIF ayuda a evitar hallazgos repetidos entre cargas?"
            ]
        },
        "ghas-code-008": {
            "prompt": "Un flujo avanzado de CodeQL debe analizar Java y Python. ¿Qué configuración debería revisar quien lo mantiene?",
            "choices": [
                "La lista `paths-ignore` del análisis de secretos",
                "Una matriz que incluya ambos lenguajes",
                "La versión SPDX de la SBOM del repositorio",
                "La sección `registries` de Dependabot"
            ],
            "explanations": [
                "Las exclusiones del análisis de secretos no configuran análisis de código.",
                "El flujo de CodeQL define qué lenguajes analiza cada trabajo.",
                "La versión SPDX no selecciona lenguajes de CodeQL.",
                "Los registros configuran acceso a paquetes."
            ],
            "concept": "Configuración de matriz de lenguajes",
            "hints": [
                "¿Qué lenguajes recibe realmente el trabajo de análisis?",
                "¿Dónde declara un flujo avanzado su matriz de análisis?"
            ]
        },
        "ghas-code-009": {
            "prompt": "Un proyecto de C/C++ necesita comandos de compilación explícitos que la detección automática de CodeQL no puede proporcionar. ¿Qué modo de compilación corresponde a su flujo avanzado?",
            "choices": [
                "`autobuild`",
                "`security-extended`",
                "`manual`",
                "`none`"
            ],
            "explanations": [
                "`autobuild` intenta detectar y ejecutar un sistema de compilación compatible.",
                "`security-extended` nombra una suite de consultas, no un modo de compilación.",
                "`manual` permite que el flujo ejecute los pasos de compilación explícitos para extraer información.",
                "`none` analiza sin ejecutar una compilación, lo que puede reducir la precisión."
            ],
            "concept": "Modos de compilación para lenguajes compilados",
            "hints": [
                "¿Puede CodeQL inferir la compilación necesaria o el flujo debe proporcionar sus pasos?",
                "¿Qué modo usa los comandos de compilación definidos por el flujo?"
            ]
        },
        "ghas-code-010": {
            "prompt": "Un equipo quiere una cobertura de seguridad más amplia que la suite predeterminada de CodeQL y acepta revisar hallazgos adicionales. ¿Qué suite debería evaluar?",
            "choices": [
                "Solo `default`",
                "`dependabot`",
                "`secret-scanning`",
                "`security-extended`"
            ],
            "explanations": [
                "La suite predeterminada no ofrece la ampliación solicitada.",
                "Dependabot administra alertas y actualizaciones de dependencias.",
                "El análisis de secretos detecta credenciales, no consultas de CodeQL.",
                "La suite extendida agrega consultas de seguridad más allá de la selección predeterminada."
            ],
            "concept": "Compensaciones de suites extendidas",
            "hints": [
                "¿Qué suite de CodeQL amplía las consultas de seguridad predeterminadas?",
                "¿Qué costo operativo puede acompañar una cobertura más amplia?"
            ]
        },
        "ghas-code-011": {
            "prompt": "Un equipo quiere incluir un conjunto mantenido de consultas adicionales de CodeQL en un análisis avanzado. ¿Qué artefacto debería configurar?",
            "choices": [
                "Un paquete de consultas de CodeQL",
                "Una lista de licencias de revisión de dependencias",
                "Una exclusión de ruta del análisis de secretos",
                "Una SBOM SPDX"
            ],
            "explanations": [
                "Los paquetes de consultas agrupan consultas de CodeQL reutilizables para el análisis.",
                "Las listas de licencias configuran políticas de revisión de dependencias.",
                "Las exclusiones de rutas configuran el alcance del análisis de secretos.",
                "Una SBOM inventaría componentes de software."
            ],
            "concept": "Paquetes reutilizables de consultas CodeQL",
            "hints": [
                "¿Qué artefacto empaqueta un conjunto reutilizable de consultas de análisis?",
                "¿Qué configuración de CodeQL agrega consultas además de la selección integrada?"
            ]
        },
        "ghas-code-012": {
            "prompt": "Una alerta de análisis de código tiene gravedad alta. ¿Qué describe principalmente esa etiqueta?",
            "choices": [
                "El porcentaje de pruebas fallidas",
                "Impacto potencial, no certeza de explotación",
                "La probabilidad de que el código ya haya sido atacado",
                "La cantidad de repositorios que usan la dependencia"
            ],
            "explanations": [
                "La tasa de pruebas fallidas no define la gravedad de una alerta.",
                "La gravedad caracteriza el impacto potencial del problema en el contexto de la alerta.",
                "Una etiqueta de gravedad no demuestra que haya ocurrido una explotación.",
                "La cantidad de repositorios es información separada sobre dependencias."
            ],
            "concept": "Interpretación de gravedad de seguridad",
            "hints": [
                "¿Qué propiedad de la debilidad comunica la gravedad?",
                "¿Una etiqueta de gravedad alta demuestra que alguien explotó la falla?"
            ]
        },
        "ghas-code-013": {
            "prompt": "Una alerta elegible de CodeQL ofrece una sugerencia de corrección automática. ¿Qué debería hacer quien mantiene el proyecto?",
            "choices": [
                "Descartar la alerta sin inspeccionar el código fuente",
                "Usar la sugerencia para actualizar todas las dependencias",
                "Revisar, probar y adaptar el cambio propuesto antes de fusionarlo",
                "Suponer que la sugerencia es correcta y fusionarla automáticamente"
            ],
            "explanations": [
                "Descartar no corrige el código.",
                "La corrección automática trata alertas de código, no todas las actualizaciones de dependencias.",
                "La corrección automática propone una solución que aún debe validarse.",
                "Una sugerencia generada no garantiza que sea correcta."
            ],
            "concept": "La corrección automática no garantiza el resultado",
            "hints": [
                "¿Qué responsabilidad conserva quien mantiene el código después de recibir una sugerencia?",
                "¿Un cambio propuesto podría requerir pruebas específicas del contexto?"
            ]
        },
        "ghas-code-014": {
            "prompt": "Un desarrollador cree que una alerta de análisis de código es un falso positivo. ¿Qué debería hacer antes de descartarla?",
            "choices": [
                "Descartarla porque el flujo pasó",
                "Cambiar el título de la alerta",
                "Eliminar la base de CodeQL del repositorio",
                "Revisa el código y registra evidencia"
            ],
            "explanations": [
                "Que un flujo pase no demuestra que un hallazgo específico sea inválido.",
                "Cambiar el nombre de una alerta no evalúa el comportamiento informado.",
                "Eliminar una base no justifica descartar una alerta.",
                "La alerta debe evaluarse frente al código y registrar el motivo del descarte."
            ],
            "concept": "Descarte de alertas basado en evidencia",
            "hints": [
                "¿Qué prueba demostraría que el comportamiento señalado no ocurre o no es un defecto?",
                "¿Qué acción registra una decisión de clasificación deliberada?"
            ]
        },
        "ghas-code-015": {
            "prompt": "Una empresa ejecuta análisis de CodeQL en un servicio de CI externo en vez de GitHub Actions. ¿Cómo pueden aparecer sus hallazgos en el análisis de código de GitHub?",
            "choices": [
                "Ejecuta CodeQL CLI en CI externo y carga SARIF",
                "Convertir alertas en un archivo de bloqueo de Dependabot",
                "Crear un patrón personalizado de secretos para cada resultado",
                "Habilitar la configuración predeterminada y dejar locales los resultados externos"
            ],
            "explanations": [
                "CodeQL CLI permite analizar en una CI externa y cargar los resultados a GitHub.",
                "Un archivo de bloqueo representa dependencias, no hallazgos de análisis de código.",
                "Los patrones de secretos detectan credenciales, no importan resultados.",
                "Los resultados solo locales no se cargan al repositorio."
            ],
            "concept": "Entrega de resultados de análisis externo",
            "hints": [
                "¿Dónde se ejecuta el análisis y dónde deben enviarse los hallazgos?",
                "¿Qué interfaz admite CodeQL fuera de GitHub Actions?"
            ]
        },
        "ghas-code-016": {
            "prompt": "Un equipo quiere análisis de código en pull requests y según una programación recurrente para detectar problemas divulgados recientemente. ¿Qué configuración debería definir estos eventos?",
            "choices": [
                "Las credenciales de registro de Dependabot",
                "Configura los eventos de análisis",
                "La configuración de exportación del gráfico de dependencias",
                "La expresión regular del patrón de secretos del repositorio"
            ],
            "explanations": [
                "Las credenciales de registro configuran acceso a paquetes.",
                "El análisis de código puede ejecutarse ante eventos y según una programación, según su configuración.",
                "La exportación de SBOM no programa análisis de código.",
                "Una expresión regular de secretos no define disparadores de análisis."
            ],
            "concept": "Estrategia de disparadores de análisis",
            "hints": [
                "¿Cuándo debería ejecutarse el análisis para dar comentarios antes de fusionar y de forma recurrente?",
                "¿Qué configuración administra los eventos y la programación del análisis de código?"
            ]
        },
        "ghas-code-017": {
            "prompt": "Dos cargas SARIF de la misma herramienta analizan áreas de producto distintas. ¿Qué entrada puede mantener separados esos análisis en GitHub?",
            "choices": [
                "La programación predeterminada de Dependabot del repositorio",
                "Un motivo de omisión del análisis de secretos",
                "Una `category` estable y significativa para cada análisis",
                "Un `ruleId` aleatorio distinto en cada análisis"
            ],
            "explanations": [
                "Las programaciones de Dependabot no separan análisis SARIF.",
                "Los motivos de omisión no se relacionan con categorías de análisis de código.",
                "La categoría identifica un análisis y ayuda a mantener separados sus resultados.",
                "Cambiar los ID de regla entre ejecuciones perjudica el seguimiento estable de alertas."
            ],
            "concept": "Separación por categorías de análisis",
            "hints": [
                "¿Qué metadato etiqueta una ejecución para una fuente o configuración distinta?",
                "¿Qué campo de carga distingue varios análisis de una misma herramienta?"
            ]
        },
        "ghas-code-018": {
            "prompt": "Una alerta SARIF de terceros tiene menos contexto que una alerta predeterminada de CodeQL. ¿Qué debería entender quien mantiene el proyecto?",
            "choices": [
                "GitHub completa automáticamente todos los campos SARIF ausentes desde el código",
                "La alerta no es válida porque no proviene de CodeQL",
                "El repositorio carece de acceso al análisis de código",
                "Herramientas externas pueden omitir detalles de CodeQL"
            ],
            "explanations": [
                "GitHub no garantiza que pueda reconstruir todos los detalles opcionales.",
                "El análisis de código admite resultados SARIF compatibles de terceros.",
                "Una diferencia en los detalles no demuestra un problema de acceso.",
                "Los detalles dependen de la información que proporciona cada herramienta de análisis."
            ],
            "concept": "Detalles de alertas según la herramienta",
            "hints": [
                "¿Qué herramienta generó el resultado y qué información incluyó?",
                "¿Puede una alerta ser válida aunque muestre menos propiedades de análisis?"
            ]
        },
        "ghas-code-019": {
            "prompt": "Varias rutas de origen llegan a la misma operación insegura. ¿Cómo puede presentar el análisis de código esos hallazgos relacionados?",
            "choices": [
                "Mostrar una alerta con varias rutas para un mismo problema",
                "Crear una alerta distinta por cada ruta del mismo problema",
                "Conservar solo la ruta más corta como evidencia del hallazgo",
                "Combinar rutas de problemas diferentes en una sola alerta"
            ],
            "explanations": [
                "Las rutas relacionadas pueden agruparse en una alerta para el problema subyacente.",
                "Una alerta por ruta puede fragmentar una debilidad en alertas duplicadas.",
                "Descartar rutas pierde evidencia útil sobre cómo se alcanza el problema.",
                "Las debilidades distintas no deberían combinarse en una sola alerta."
            ],
            "concept": "Agrupación de rutas en alertas",
            "hints": [
                "¿Las rutas representan debilidades distintas o caminos hacia una misma debilidad?",
                "¿Cómo puede una alerta mostrar varias formas de llegar al mismo problema?"
            ]
        },
        "ghas-code-020": {
            "prompt": "Un repositorio carga resultados de dos configuraciones del mismo analizador. ¿Cuál es el propósito principal de la categoría?",
            "choices": [
                "Nombrar el ecosistema de dependencias",
                "Identificar y distinguir el conjunto de resultados del análisis",
                "Definir la gravedad de la alerta",
                "Elegir un patrón de análisis de secretos"
            ],
            "explanations": [
                "Los ecosistemas de dependencias se configuran aparte.",
                "Una categoría etiqueta un análisis concreto, como una ejecución de herramienta o configuración.",
                "La gravedad describe un hallazgo individual, no la etiqueta del conjunto.",
                "Los patrones de secretos tienen su propia configuración."
            ],
            "concept": "Etiquetas de categoría de análisis",
            "hints": [
                "¿Qué debería distinguir una etiqueta estable entre análisis separados?",
                "¿La categoría describe un conjunto de resultados o el riesgo de un hallazgo individual?"
            ]
        },
        "ghas-code-021": {
            "prompt": "Un repositorio que usa la configuración predeterminada de CodeQL ahora necesita un flujo personalizado. ¿Qué debería hacer quien lo mantiene al cambiar a la configuración avanzada?",
            "choices": [
                "Eliminar todas las alertas de análisis de código existentes",
                "Reemplazar el flujo de CodeQL por un cronograma de Dependabot",
                "Usa `Switch to advanced` y confirma `Disable CodeQL`",
                "Habilitar la configuración avanzada y dejar activa la predeterminada"
            ],
            "explanations": [
                "Eliminar alertas no cambia qué configuración se ejecuta.",
                "Los cronogramas de Dependabot no configuran el análisis de código.",
                "El flujo de cambio de GitHub deshabilita la configuración predeterminada antes de configurar el flujo avanzado.",
                "Los tipos de configuración se alternan; no se mantienen activos juntos para la misma configuración de CodeQL."
            ],
            "concept": "Cambio entre tipos de configuración de CodeQL",
            "hints": [
                "¿Qué configuración debe deshabilitarse al pasar a un flujo personalizable?",
                "¿Qué cambia la confirmación del cambio antes de configurar el modo avanzado?"
            ]
        },
        "ghas-code-022": {
            "prompt": "El análisis de CodeQL deja de producir alertas después de modificar un flujo. ¿Qué debería inspeccionar primero quien lo mantiene?",
            "choices": [
                "La lista de licencias SPDX del repositorio",
                "El estado de validez del análisis de secretos",
                "El límite de pull requests abiertos de Dependabot",
                "Revisa los registros y el estado de carga"
            ],
            "explanations": [
                "Los metadatos de licencias no diagnostican una ejecución de CodeQL.",
                "El estado de validez se refiere a credenciales detectadas.",
                "El límite de Dependabot solo restringe pull requests de actualización.",
                "Los registros y la configuración revelan fallos de análisis o carga."
            ],
            "concept": "Solución de problemas de análisis basada en evidencia",
            "hints": [
                "¿El trabajo analizó los lenguajes previstos y terminó de cargar resultados?",
                "¿Qué evidencia distingue un fallo de configuración de un análisis limpio?"
            ]
        },
        "ghas-code-023": {
            "prompt": "Un flujo de CodeQL usa un filtro `pull_request.paths-ignore` para documentación. También cambia un archivo fuente en el mismo pull request. ¿Qué debería esperar el equipo?",
            "choices": [
                "El flujo puede ejecutarse; `paths-ignore` filtra el evento, no los archivos analizados",
                "Solo se analizan archivos no ignorados porque el filtro excluye esas rutas",
                "El filtro elimina del historial Git la documentación coincidente",
                "El filtro descarta alertas en las rutas ignoradas"
            ],
            "explanations": [
                "Un cambio en un archivo fuente puede iniciar el flujo; el filtro del evento no excluye archivos del análisis.",
                "Los filtros de rutas del flujo no quitan automáticamente archivos coincidentes del alcance del análisis.",
                "Un filtro del flujo no reescribe ni elimina el historial del repositorio.",
                "El filtro del evento no descarta alertas de análisis de código en esas rutas."
            ],
            "concept": "Filtros de disparador frente a exclusiones de análisis",
            "hints": [
                "¿El filtro controla la ejecución del flujo o la selección de archivos dentro de la ejecución?",
                "¿Qué puede ocurrir si también cambia un archivo no ignorado?"
            ]
        },
        "ghas-code-024": {
            "prompt": "Una alerta SARIF apunta al archivo equivocado después de cargarse. ¿Qué propiedad debería verificar primero la integración?",
            "choices": [
                "Que la base de CodeQL tenga más consultas",
                "Que `artifactLocation.uri` se corresponda de forma coherente con la ruta fuente del repositorio",
                "Que la programación de Dependabot coincida con la hora de carga",
                "Que el patrón de secretos tenga un grupo de captura"
            ],
            "explanations": [
                "La cantidad de consultas no corrige una ruta fuente incorrecta.",
                "Las ubicaciones SARIF necesitan rutas que GitHub pueda relacionar con archivos del repositorio.",
                "Las programaciones de Dependabot no controlan rutas SARIF.",
                "Los grupos de expresiones regulares no localizan resultados de análisis de código."
            ],
            "concept": "Correspondencia de ubicaciones de origen SARIF",
            "hints": [
                "¿Qué campo del resultado identifica el archivo fuente afectado?",
                "¿Las rutas cargadas coinciden con la estructura del repositorio analizada?"
            ]
        },
        "ghas-code-025": {
            "prompt": "Un flujo avanzado de CodeQL necesita analizar Kotlin. ¿Qué identificador agrupa Kotlin con Java?",
            "choices": [
                "`jvm-bytecode`",
                "Solo `java`",
                "`java-kotlin`",
                "`kotlin-java`"
            ],
            "explanations": [
                "Esta no es una clave de lenguaje admitida por CodeQL.",
                "El identificador combinado documentado incluye Kotlin.",
                "CodeQL usa `java-kotlin` para Java, Kotlin o ambos.",
                "La etiqueta invertida no es el identificador documentado."
            ],
            "concept": "Identificadores de lenguajes de CodeQL",
            "hints": [
                "¿Qué clave de configuración cubre los lenguajes JVM de este repositorio?",
                "¿Cómo nombra CodeQL el destino de análisis conjunto de Java y Kotlin?"
            ]
        },
        "ghas-code-026": {
            "prompt": "Una base de código contiene JavaScript y TypeScript. ¿Cómo debería nombrar el flujo de CodeQL ese análisis de lenguaje?",
            "choices": [
                "`javascript` y `typescript` como bases obligatorias no relacionadas",
                "`node-web`",
                "`typescript-only`",
                "`javascript-typescript`"
            ],
            "explanations": [
                "El identificador documentado combina estos lenguajes.",
                "Este no es un identificador de lenguaje de CodeQL documentado.",
                "El análisis combinado admite ambos lenguajes.",
                "CodeQL usa `javascript-typescript` para analizar JavaScript, TypeScript o ambos."
            ],
            "concept": "Análisis combinado de JavaScript y TypeScript",
            "hints": [
                "¿CodeQL trata estos archivos como un solo destino de análisis compatible?",
                "¿Qué identificador configurado incluye ambos lenguajes?"
            ]
        },
        "ghas-code-027": {
            "prompt": "Un análisis de terceros termina correctamente, pero no aparecen alertas nuevas en GitHub. ¿Qué etapa debería verificar su responsable?",
            "choices": [
                "Que la carga SARIF terminara y se aceptara para el repositorio y la categoría previstos",
                "Que se ejecutara la comprobación de validez de secretos",
                "Que Dependabot tenga un pull request de actualización abierto",
                "Que el repositorio tenga una versión reciente"
            ],
            "explanations": [
                "El análisis correcto y la incorporación correcta de resultados son etapas distintas.",
                "Las comprobaciones de validez no importan resultados de análisis de código.",
                "Las actualizaciones de Dependabot no incorporan SARIF.",
                "Una versión publicada no demuestra que se haya cargado un análisis."
            ],
            "concept": "Éxito del análisis frente a incorporación",
            "hints": [
                "¿La herramienta terminó el análisis y GitHub aceptó sus resultados?",
                "¿Qué transferencia puede fallar después de completar el análisis?"
            ]
        },
        "ghas-code-028": {
            "prompt": "¿Qué representa una base de CodeQL en el proceso de análisis?",
            "choices": [
                "Un inventario SPDX del software",
                "Una representación consultable del código fuente",
                "Un catálogo de versiones vulnerables de paquetes",
                "Un historial de omisiones de protección de push"
            ],
            "explanations": [
                "Un inventario SPDX es una SBOM, no una base de CodeQL.",
                "Las bases de CodeQL representan código y estructura pertinente para las consultas.",
                "Los registros de paquetes vulnerables provienen de avisos y datos de dependencias.",
                "Los eventos de omisión pertenecen a la protección de inserciones."
            ],
            "concept": "Propósito de la base de CodeQL",
            "hints": [
                "¿Qué necesita inspeccionar el motor de consultas además del texto sin procesar?",
                "¿Qué artefacto prepara una base de código para consultas CodeQL?"
            ]
        },
        "ghas-code-029": {
            "prompt": "Después de cambiar a una suite ampliada de consultas CodeQL, un equipo ve alertas adicionales. ¿Cuál es la mejor interpretación?",
            "choices": [
                "El repositorio cambió a Dependabot",
                "Las alertas adicionales demuestran que se comprometió la compilación",
                "La suite puede añadir consultas; revisa los nuevos hallazgos",
                "Todas las alertas nuevas deben ser falsos positivos"
            ],
            "explanations": [
                "La selección de consultas de CodeQL no cambia la herramienta de dependencias.",
                "Encontrar más problemas no demuestra una intrusión.",
                "Las suites más amplias pueden aumentar las consultas y requieren clasificación normal de alertas.",
                "Cada resultado nuevo debe evaluarse, no descartarse en bloque."
            ],
            "concept": "Interpretación de ampliación de suites",
            "hints": [
                "¿Qué cambió en la cobertura de análisis seleccionada?",
                "¿Cómo deberían evaluarse los hallazgos nuevos antes de cambiar la suite?"
            ]
        },
        "ghas-code-030": {
            "prompt": "Un proyecto quiere que el análisis de CodeQL incluya hallazgos de seguridad y comprobaciones de calidad del código. ¿Qué suite de consultas está diseñada para ambas cosas?",
            "choices": [
                "Solo `security-extended`",
                "Solo `default`",
                "`github-actions`",
                "`security-and-quality`"
            ],
            "explanations": [
                "Security-extended se centra en consultas de seguridad adicionales.",
                "Default es la suite estándar, no la suite combinada de calidad.",
                "`github-actions` es un identificador de lenguaje, no una suite de consultas.",
                "La suite security-and-quality incluye consultas de seguridad y calidad."
            ],
            "concept": "Suite de consultas de seguridad y calidad",
            "hints": [
                "¿El equipo necesita solo comprobaciones de seguridad o también de calidad?",
                "¿Qué suite combina ambos objetivos de consulta?"
            ]
        },
        "ghas-operations-001": {
            "prompt": "¿Qué identificador nombra una vulnerabilidad concreta divulgada públicamente, no una categoría de debilidad ni un registro de aviso?",
            "choices": [
                "CVE",
                "CWE",
                "GHSA",
                "CVSS"
            ],
            "explanations": [
                "Un CVE identifica una vulnerabilidad divulgada públicamente, no una clase general de debilidad.",
                "Un CWE identifica una categoría de debilidad del software, como validación incorrecta de entradas.",
                "Un identificador GHSA identifica de forma única un aviso en GitHub Advisory Database.",
                "CVSS expresa la gravedad de una vulnerabilidad; no es un identificador de vulnerabilidad ni de aviso."
            ],
            "concept": "Identidad de vulnerabilidades",
            "hints": [
                "Distingue una vulnerabilidad concreta de una categoría de debilidad recurrente.",
                "Un identificador nombra algo; una puntuación mide una propiedad."
            ]
        },
        "ghas-operations-002": {
            "prompt": "Un informe de formación agrupa hallazgos por la debilidad subyacente, como validación incorrecta de entradas. ¿Qué clasificación corresponde?",
            "choices": [
                "CVSS",
                "CVE",
                "CWE",
                "GHSA"
            ],
            "explanations": [
                "CVSS expresa la gravedad de una vulnerabilidad; no es un identificador de vulnerabilidad ni de aviso.",
                "Un CVE identifica una vulnerabilidad divulgada públicamente, no una clase general de debilidad.",
                "Un CWE identifica una categoría de debilidad del software, como validación incorrecta de entradas.",
                "Un identificador GHSA identifica de forma única un aviso en GitHub Advisory Database."
            ],
            "concept": "Taxonomía de debilidades",
            "hints": [
                "Distingue una vulnerabilidad concreta de una categoría de debilidad recurrente.",
                "Un identificador nombra algo; una puntuación mide una propiedad."
            ]
        },
        "ghas-operations-003": {
            "prompt": "¿Qué identificador se asigna a cada registro de GitHub Advisory Database, incluidos los que no tienen CVE?",
            "choices": [
                "CVSS",
                "CVE",
                "CWE",
                "GHSA"
            ],
            "explanations": [
                "CVSS expresa la gravedad de una vulnerabilidad; no es un identificador de vulnerabilidad ni de aviso.",
                "Un CVE identifica una vulnerabilidad divulgada públicamente, no una clase general de debilidad.",
                "Un CWE identifica una categoría de debilidad del software, como validación incorrecta de entradas.",
                "Un identificador GHSA identifica de forma única un aviso en GitHub Advisory Database."
            ],
            "concept": "Identidad de avisos de GitHub",
            "hints": [
                "Distingue una vulnerabilidad concreta de una categoría de debilidad recurrente.",
                "Un identificador nombra algo; una puntuación mide una propiedad."
            ]
        },
        "ghas-operations-004": {
            "prompt": "¿Qué señal representa la gravedad de una vulnerabilidad, no la probabilidad prevista de explotación?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Ámbito de la dependencia"
            ],
            "explanations": [
                "CVSS mide gravedad; la exposición del negocio y la probabilidad de explotación necesitan contexto adicional.",
                "EPSS estima la probabilidad de explotación real; no demuestra que una aplicación concreta sea explotable.",
                "El análisis de alcanzabilidad examina si el código de la aplicación puede llegar al código vulnerable de una dependencia, donde se admite.",
                "El ámbito distingue uso en producción y desarrollo; las dependencias de desarrollo también pueden importar para la seguridad."
            ],
            "concept": "Gravedad frente a probabilidad de explotación",
            "hints": [
                "No equipares la gravedad intrínseca con la probabilidad o el impacto de explotación en este caso.",
                "Combina señales independientes y considera los análisis no disponibles."
            ]
        },
        "ghas-operations-005": {
            "prompt": "¿Qué señal estima la explotación real y debe combinarse con el contexto específico del repositorio?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Ámbito de la dependencia"
            ],
            "explanations": [
                "CVSS mide gravedad; la exposición del negocio y la probabilidad de explotación necesitan contexto adicional.",
                "EPSS estima la probabilidad de explotación real; no demuestra que una aplicación concreta sea explotable.",
                "El análisis de alcanzabilidad examina si el código de la aplicación puede llegar al código vulnerable de una dependencia, donde se admite.",
                "El ámbito distingue uso en producción y desarrollo; las dependencias de desarrollo también pueden importar para la seguridad."
            ],
            "concept": "Interpretación de EPSS",
            "hints": [
                "No equipares la gravedad intrínseca con la probabilidad o el impacto de explotación en este caso.",
                "Combina señales independientes y considera los análisis no disponibles."
            ]
        },
        "ghas-operations-006": {
            "prompt": "Donde se admite, ¿qué análisis determina si el código de la aplicación puede llamar al código vulnerable de la dependencia?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Ámbito de la dependencia"
            ],
            "explanations": [
                "CVSS mide gravedad; la exposición del negocio y la probabilidad de explotación necesitan contexto adicional.",
                "EPSS estima la probabilidad de explotación real; no demuestra que una aplicación concreta sea explotable.",
                "El análisis de alcanzabilidad examina si el código de la aplicación puede llegar al código vulnerable de una dependencia, donde se admite.",
                "El ámbito distingue uso en producción y desarrollo; las dependencias de desarrollo también pueden importar para la seguridad."
            ],
            "concept": "Evidencia de alcanzabilidad de dependencias",
            "hints": [
                "No equipares la gravedad intrínseca con la probabilidad o el impacto de explotación en este caso.",
                "Combina señales independientes y considera los análisis no disponibles."
            ]
        },
        "ghas-operations-007": {
            "prompt": "¿Qué contexto de la alerta distingue un paquete usado en ejecución de uno declarado solo para desarrollo?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Ámbito de la dependencia"
            ],
            "explanations": [
                "CVSS mide gravedad; la exposición del negocio y la probabilidad de explotación necesitan contexto adicional.",
                "EPSS estima la probabilidad de explotación real; no demuestra que una aplicación concreta sea explotable.",
                "El análisis de alcanzabilidad examina si el código de la aplicación puede llegar al código vulnerable de una dependencia, donde se admite.",
                "El ámbito distingue uso en producción y desarrollo; las dependencias de desarrollo también pueden importar para la seguridad."
            ],
            "concept": "Contexto de dependencias de producción y desarrollo",
            "hints": [
                "No equipares la gravedad intrínseca con la probabilidad o el impacto de explotación en este caso.",
                "Combina señales independientes y considera los análisis no disponibles."
            ]
        },
        "ghas-operations-008": {
            "prompt": "Un aviso identifica una versión corregida. ¿Qué prepara la corrección propuesta de la dependencia para decidir una fusión segura?",
            "choices": [
                "Revisar la versión corregida y probar la compatibilidad de la actualización.",
                "Usar gravedad y otras señales si la alcanzabilidad no está disponible.",
                "Reducir la prioridad con cautela y reevaluar un resultado Unreachable.",
                "Priorizar uso expuesto en producción con evidencia creíble de explotación."
            ],
            "explanations": [
                "Una corrección publicada permite actuar, pero aún hay que verificar compatibilidad y adopción real.",
                "Un análisis no disponible es un dato desconocido, no un hallazgo de código inalcanzable.",
                "Un resultado inalcanzable puede cambiar con el código o el aviso y no basta por sí solo para descartar la alerta.",
                "La exposición en producción y la evidencia de explotación pueden aumentar la urgencia más allá de la etiqueta de gravedad."
            ],
            "concept": "Validación de parches aplicables",
            "hints": [
                "La falta de evidencia no equivale a demostrar que una ruta no existe.",
                "La priorización debe reflejar exposición, explotabilidad y evidencia de corrección."
            ]
        },
        "ghas-operations-009": {
            "prompt": "Dos hallazgos tienen gravedad similar. ¿Qué respuesta prioriza mejor el que se usa en una ruta expuesta de producción con evidencia creíble de explotación?",
            "choices": [
                "Reducir la prioridad con cautela y reevaluar un resultado Unreachable.",
                "Priorizar uso expuesto en producción con evidencia creíble de explotación.",
                "Revisar la versión corregida y probar la compatibilidad de la actualización.",
                "Usar gravedad y otras señales si la alcanzabilidad no está disponible."
            ],
            "explanations": [
                "Un resultado inalcanzable puede cambiar con el código o el aviso y no basta por sí solo para descartar la alerta.",
                "La exposición en producción y la evidencia de explotación pueden aumentar la urgencia más allá de la etiqueta de gravedad.",
                "Una corrección publicada permite actuar, pero aún hay que verificar compatibilidad y adopción real.",
                "Un análisis no disponible es un dato desconocido, no un hallazgo de código inalcanzable."
            ],
            "concept": "Prioridad contextual de corrección",
            "hints": [
                "La falta de evidencia no equivale a demostrar que una ruta no existe.",
                "La priorización debe reflejar exposición, explotabilidad y evidencia de corrección."
            ]
        },
        "ghas-operations-010": {
            "prompt": "Una alerta de Dependabot indica «Reachability unavailable». ¿Cuál es la respuesta de priorización adecuada?",
            "choices": [
                "Reducir la prioridad con cautela y reevaluar un resultado Unreachable.",
                "Priorizar uso expuesto en producción con evidencia creíble de explotación.",
                "Revisar la versión corregida y probar la compatibilidad de la actualización.",
                "Usar gravedad y otras señales si la alcanzabilidad no está disponible."
            ],
            "explanations": [
                "Un resultado inalcanzable puede cambiar con el código o el aviso y no basta por sí solo para descartar la alerta.",
                "La exposición en producción y la evidencia de explotación pueden aumentar la urgencia más allá de la etiqueta de gravedad.",
                "Una corrección publicada permite actuar, pero aún hay que verificar compatibilidad y adopción real.",
                "Un análisis no disponible es un dato desconocido, no un hallazgo de código inalcanzable."
            ],
            "concept": "La alcanzabilidad ausente no demuestra seguridad",
            "hints": [
                "La falta de evidencia no equivale a demostrar que una ruta no existe.",
                "La priorización debe reflejar exposición, explotabilidad y evidencia de corrección."
            ]
        },
        "ghas-operations-011": {
            "prompt": "¿Cómo debe tratar un analista un hallazgo de dependencia «Unreachable» si no hay otra justificación para descartarlo?",
            "choices": [
                "Revisar la versión corregida y probar la compatibilidad de la actualización.",
                "Usar gravedad y otras señales si la alcanzabilidad no está disponible.",
                "Reducir la prioridad con cautela y reevaluar un resultado Unreachable.",
                "Priorizar uso expuesto en producción con evidencia creíble de explotación."
            ],
            "explanations": [
                "Una corrección publicada permite actuar, pero aún hay que verificar compatibilidad y adopción real.",
                "Un análisis no disponible es un dato desconocido, no un hallazgo de código inalcanzable.",
                "Un resultado inalcanzable puede cambiar con el código o el aviso y no basta por sí solo para descartar la alerta.",
                "La exposición en producción y la evidencia de explotación pueden aumentar la urgencia más allá de la etiqueta de gravedad."
            ],
            "concept": "Uso prudente de resultados inalcanzables",
            "hints": [
                "La falta de evidencia no equivale a demostrar que una ruta no existe.",
                "La priorización debe reflejar exposición, explotabilidad y evidencia de corrección."
            ]
        },
        "ghas-operations-012": {
            "prompt": "Se expuso una credencial de producción. ¿Qué acción elimina su autoridad, en vez de limitarse a cambiar el contenido del repositorio?",
            "choices": [
                "Resolver la alerta con un motivo preciso.",
                "Revocar o rotar la credencial expuesta.",
                "Eliminar el secreto del código fuente actual.",
                "Revisar la exposición y la actividad del proveedor."
            ],
            "explanations": [
                "Resolver la alerta registra la respuesta; cambiar el estado no revoca por sí mismo la credencial.",
                "Revocar o rotar elimina la autoridad de la credencial en su proveedor; borrar un archivo no lo hace.",
                "Limpiar el código evita seguir distribuyendo el secreto, pero no invalida copias ya filtradas.",
                "La revisión del incidente ayuda a determinar uso indebido e impacto; no equivale a cambiar la validez de la credencial."
            ],
            "concept": "Contención de credenciales",
            "hints": [
                "Distingue eliminar una credencial de eliminar su autoridad.",
                "El registro de alerta y la exposición subyacente son cosas distintas."
            ]
        },
        "ghas-operations-013": {
            "prompt": "Un desarrollador ha cambiado el código de una alerta de análisis. ¿Qué hace falta antes de dar el problema por corregido?",
            "choices": [
                "Verificar la corrección con análisis reciente y pertinente.",
                "Reabrir la alerta cuando el descarte ya no esté justificado.",
                "Documentar un descarte justificado como falso positivo.",
                "Registrar el riesgo aceptado y su justificación."
            ],
            "explanations": [
                "Una corrección se demuestra con análisis pertinente del código modificado, no solo editando o descartando una alerta.",
                "Un supuesto que cambia o una ruta de código ahora aplicable puede invalidar un descarte anterior.",
                "Descartar como falso positivo requiere evidencia de que la vulnerabilidad no se aplica al código analizado.",
                "Aceptar un riesgo reconoce un problema sin corregir; no debe informarse como una corrección verificada."
            ],
            "concept": "Verificación de correcciones basada en evidencia",
            "hints": [
                "Distingue la evidencia sobre un hallazgo de una decisión de tolerar el riesgo.",
                "Elige una resolución que siga siendo veraz cuando la lea otra persona."
            ]
        },
        "ghas-operations-014": {
            "prompt": "Un equipo tolera deliberadamente por ahora una vulnerabilidad real del código. ¿Qué resolución describe honestamente esa decisión?",
            "choices": [
                "Verificar la corrección con análisis reciente y pertinente.",
                "Reabrir la alerta cuando el descarte ya no esté justificado.",
                "Documentar un descarte justificado como falso positivo.",
                "Registrar el riesgo aceptado y su justificación."
            ],
            "explanations": [
                "Una corrección se demuestra con análisis pertinente del código modificado, no solo editando o descartando una alerta.",
                "Un supuesto que cambia o una ruta de código ahora aplicable puede invalidar un descarte anterior.",
                "Descartar como falso positivo requiere evidencia de que la vulnerabilidad no se aplica al código analizado.",
                "Aceptar un riesgo reconoce un problema sin corregir; no debe informarse como una corrección verificada."
            ],
            "concept": "Riesgo aceptado frente a estado corregido",
            "hints": [
                "Distingue la evidencia sobre un hallazgo de una decisión de tolerar el riesgo.",
                "Elige una resolución que siga siendo veraz cuando la lea otra persona."
            ]
        },
        "ghas-operations-015": {
            "prompt": "Una revisión demuestra que la ruta insegura modelada de una alerta no puede ocurrir en la implementación analizada. ¿Qué resolución documentada corresponde?",
            "choices": [
                "Verificar la corrección con análisis reciente y pertinente.",
                "Reabrir la alerta cuando el descarte ya no esté justificado.",
                "Documentar un descarte justificado como falso positivo.",
                "Registrar el riesgo aceptado y su justificación."
            ],
            "explanations": [
                "Una corrección se demuestra con análisis pertinente del código modificado, no solo editando o descartando una alerta.",
                "Un supuesto que cambia o una ruta de código ahora aplicable puede invalidar un descarte anterior.",
                "Descartar como falso positivo requiere evidencia de que la vulnerabilidad no se aplica al código analizado.",
                "Aceptar un riesgo reconoce un problema sin corregir; no debe informarse como una corrección verificada."
            ],
            "concept": "Descarte de falsos positivos sustentado en evidencia",
            "hints": [
                "Distingue la evidencia sobre un hallazgo de una decisión de tolerar el riesgo.",
                "Elige una resolución que siga siendo veraz cuando la lea otra persona."
            ]
        },
        "ghas-operations-016": {
            "prompt": "Se aprueba descartar en bloque hallazgos con una condición verificada común. ¿Qué registro conserva mejor por qué no se trataron como correcciones?",
            "choices": [
                "Audit log",
                "Justificación del descarte de alertas",
                "Revisión periódica de excepciones",
                "Informes limitados por permisos"
            ],
            "explanations": [
                "Los registros de auditoría conservan eventos admitidos de secretos y Dependabot; no incluyen eventos de la cronología de alertas de código.",
                "Una justificación útil explica por qué se descartó un hallazgo sin insinuar que se corrigió.",
                "Revisar excepciones comprueba si siguen siendo válidos los supuestos de riesgo y la responsabilidad anteriores.",
                "Los informes deben respetar el acceso a alertas, no distribuir detalles sensibles a lectores no autorizados."
            ],
            "concept": "Documentación de descartes en bloque",
            "hints": [
                "Distingue la comodidad operativa de la evidencia duradera de gobernanza.",
                "Piensa qué necesitaría una revisión futura para entender la decisión."
            ]
        },
        "ghas-operations-017": {
            "prompt": "Una excepción de riesgo se basó en un supuesto antiguo del despliegue. ¿Qué práctica detecta cuándo caduca esa justificación?",
            "choices": [
                "Revisión periódica de excepciones",
                "Informes limitados por permisos",
                "Audit log",
                "Justificación del descarte de alertas"
            ],
            "explanations": [
                "Revisar excepciones comprueba si siguen siendo válidos los supuestos de riesgo y la responsabilidad anteriores.",
                "Los informes deben respetar el acceso a alertas, no distribuir detalles sensibles a lectores no autorizados.",
                "Los registros de auditoría conservan eventos admitidos de secretos y Dependabot; no incluyen eventos de la cronología de alertas de código.",
                "Una justificación útil explica por qué se descartó un hallazgo sin insinuar que se corrigió."
            ],
            "concept": "Reevaluación de excepciones",
            "hints": [
                "Distingue la comodidad operativa de la evidencia duradera de gobernanza.",
                "Piensa qué necesitaría una revisión futura para entender la decisión."
            ]
        },
        "ghas-operations-018": {
            "prompt": "La clasificación automática oculta una clase de alertas de bajo riesgo. ¿Qué evidencia debe acompañar la regla para explicar los hallazgos suprimidos?",
            "choices": [
                "Revisión periódica de excepciones",
                "Informes limitados por permisos",
                "Audit log",
                "Justificación del descarte de alertas"
            ],
            "explanations": [
                "Revisar excepciones comprueba si siguen siendo válidos los supuestos de riesgo y la responsabilidad anteriores.",
                "Los informes deben respetar el acceso a alertas, no distribuir detalles sensibles a lectores no autorizados.",
                "Los registros de auditoría conservan eventos admitidos de secretos y Dependabot; no incluyen eventos de la cronología de alertas de código.",
                "Una justificación útil explica por qué se descartó un hallazgo sin insinuar que se corrigió."
            ],
            "concept": "Resolución automática de alertas auditable",
            "hints": [
                "Distingue la comodidad operativa de la evidencia duradera de gobernanza.",
                "Piensa qué necesitaría una revisión futura para entender la decisión."
            ]
        },
        "ghas-operations-019": {
            "prompt": "¿Qué suite integrada de CodeQL es la base cuando se priorizan alta precisión y menos falsos positivos?",
            "choices": [
                "security-and-quality",
                "Suite .qls personalizada",
                "default",
                "security-extended"
            ],
            "explanations": [
                "Esta suite de configuración avanzada añade consultas de mantenibilidad y fiabilidad a security-extended.",
                "Una suite personalizada selecciona consultas por metadatos, ubicación u otros criterios y requiere configuración avanzada.",
                "La suite default prioriza hallazgos de seguridad de alta precisión y menos falsos positivos.",
                "Incluye las consultas de default más otras de seguridad de menor precisión; puede aumentar la clasificación necesaria."
            ],
            "concept": "Base de CodeQL de alta precisión",
            "hints": [
                "Compara precisión, amplitud y los tipos de hallazgos buscados.",
                "Un conjunto de consultas más amplio cambia tanto la detección como la carga de clasificación."
            ]
        },
        "ghas-operations-020": {
            "prompt": "¿Qué suite amplía la cobertura de seguridad predeterminada de CodeQL aceptando algunos hallazgos adicionales de menor precisión?",
            "choices": [
                "Suite .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Una suite personalizada selecciona consultas por metadatos, ubicación u otros criterios y requiere configuración avanzada.",
                "La suite default prioriza hallazgos de seguridad de alta precisión y menos falsos positivos.",
                "Incluye las consultas de default más otras de seguridad de menor precisión; puede aumentar la clasificación necesaria.",
                "Esta suite de configuración avanzada añade consultas de mantenibilidad y fiabilidad a security-extended."
            ],
            "concept": "Equilibrio de cobertura de seguridad ampliada",
            "hints": [
                "Compara precisión, amplitud y los tipos de hallazgos buscados.",
                "Un conjunto de consultas más amplio cambia tanto la detección como la carga de clasificación."
            ]
        },
        "ghas-operations-021": {
            "prompt": "Con la configuración avanzada de CodeQL, ¿qué suite integrada también detecta problemas de mantenibilidad y fiabilidad?",
            "choices": [
                "Suite .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Una suite personalizada selecciona consultas por metadatos, ubicación u otros criterios y requiere configuración avanzada.",
                "La suite default prioriza hallazgos de seguridad de alta precisión y menos falsos positivos.",
                "Incluye las consultas de default más otras de seguridad de menor precisión; puede aumentar la clasificación necesaria.",
                "Esta suite de configuración avanzada añade consultas de mantenibilidad y fiabilidad a security-extended."
            ],
            "concept": "Alcance de seguridad y calidad",
            "hints": [
                "Compara precisión, amplitud y los tipos de hallazgos buscados.",
                "Un conjunto de consultas más amplio cambia tanto la detección como la carga de clasificación."
            ]
        },
        "ghas-operations-022": {
            "prompt": "¿Qué enfoque selecciona consultas CodeQL adaptadas mediante metadatos o ubicación, en vez de elegir una suite integrada sin cambios?",
            "choices": [
                "Suite .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Una suite personalizada selecciona consultas por metadatos, ubicación u otros criterios y requiere configuración avanzada.",
                "La suite default prioriza hallazgos de seguridad de alta precisión y menos falsos positivos.",
                "Incluye las consultas de default más otras de seguridad de menor precisión; puede aumentar la clasificación necesaria.",
                "Esta suite de configuración avanzada añade consultas de mantenibilidad y fiabilidad a security-extended."
            ],
            "concept": "Selección de consultas CodeQL adaptada al riesgo",
            "hints": [
                "Compara precisión, amplitud y los tipos de hallazgos buscados.",
                "Un conjunto de consultas más amplio cambia tanto la detección como la carga de clasificación."
            ]
        },
        "ghas-operations-023": {
            "prompt": "Un repositorio multilenguaje adopta una suite de CodeQL. ¿Qué revisión hace falta antes de suponer que detecta las mismas debilidades en todos los lenguajes?",
            "choices": [
                "Usar solo el volumen de alertas como medida de éxito de detección.",
                "Revisar la cobertura de consultas de cada lenguaje según debilidades pertinentes.",
                "Medir hallazgos útiles y carga de falsos positivos en un piloto.",
                "Tratar todos los lenguajes como si tuvieran consultas idénticas."
            ],
            "explanations": [
                "Más alertas pueden incluir más falsos positivos; su número por sí solo no demuestra valor de detección.",
                "Las consultas CodeQL varían por lenguaje; el nombre de una suite no implica comprobaciones idénticas para todos.",
                "Las suites más amplias añaden consultas de menor precisión; un piloto permite evaluar si compensan el esfuerzo de clasificación.",
                "Las listas documentadas son específicas de cada lenguaje; etiquetas iguales no demuestran cobertura igual."
            ],
            "concept": "Adaptación de detección por lenguaje",
            "hints": [
                "La cobertura de detección debe reflejar los lenguajes y riesgos presentes.",
                "Evalúa la utilidad del análisis además del número bruto de hallazgos."
            ]
        },
        "ghas-operations-024": {
            "prompt": "¿Qué evaluación informa mejor a una organización que decide si ampliar la suite predeterminada de CodeQL?",
            "choices": [
                "Usar solo el volumen de alertas como medida de éxito de detección.",
                "Revisar la cobertura de consultas de cada lenguaje según debilidades pertinentes.",
                "Medir hallazgos útiles y carga de falsos positivos en un piloto.",
                "Tratar todos los lenguajes como si tuvieran consultas idénticas."
            ],
            "explanations": [
                "Más alertas pueden incluir más falsos positivos; su número por sí solo no demuestra valor de detección.",
                "Las consultas CodeQL varían por lenguaje; el nombre de una suite no implica comprobaciones idénticas para todos.",
                "Las suites más amplias añaden consultas de menor precisión; un piloto permite evaluar si compensan el esfuerzo de clasificación.",
                "Las listas documentadas son específicas de cada lenguaje; etiquetas iguales no demuestran cobertura igual."
            ],
            "concept": "Planificación de carga de suites de consultas",
            "hints": [
                "La cobertura de detección debe reflejar los lenguajes y riesgos presentes.",
                "Evalúa la utilidad del análisis además del número bruto de hallazgos."
            ]
        },
        "ghas-operations-025": {
            "prompt": "El total de alertas baja tras fallar un flujo de trabajo. ¿Qué vista de la interfaz en inglés ayuda a comprobar si el análisis realmente se ejecutó?",
            "choices": [
                "Affected branches",
                "Assignees",
                "Show paths",
                "Tool status page"
            ],
            "explanations": [
                "Affected branches muestra el estado de una alerta en ramas distintas de la predeterminada.",
                "Assignees identifica a la persona responsable de corregir una alerta, no valida una ejecución de análisis.",
                "Para alertas de flujo de datos, Show paths muestra los pasos del origen al destino que sustentan la clasificación.",
                "La página de estado de herramientas muestra cuándo se ejecutó el análisis y ayuda a detectar problemas."
            ],
            "concept": "Estado del análisis antes de concluir sobre riesgo",
            "hints": [
                "Comprueba qué evidencia responde a la pregunta inmediata del análisis.",
                "Un resultado limpio solo tiene sentido si realmente se ejecutó el análisis previsto."
            ]
        },
        "ghas-operations-026": {
            "prompt": "Para una alerta de flujo de datos de CodeQL, ¿qué control de la interfaz en inglés muestra los pasos desde la entrada no confiable hasta la operación insegura?",
            "choices": [
                "Show paths",
                "Tool status page",
                "Affected branches",
                "Assignees"
            ],
            "explanations": [
                "Para alertas de flujo de datos, Show paths muestra los pasos del origen al destino que sustentan la clasificación.",
                "La página de estado de herramientas muestra cuándo se ejecutó el análisis y ayuda a detectar problemas.",
                "Affected branches muestra el estado de una alerta en ramas distintas de la predeterminada.",
                "Assignees identifica a la persona responsable de corregir una alerta, no valida una ejecución de análisis."
            ],
            "concept": "Evidencia de flujo de datos para clasificación",
            "hints": [
                "Comprueba qué evidencia responde a la pregunta inmediata del análisis.",
                "Un resultado limpio solo tiene sentido si realmente se ejecutó el análisis previsto."
            ]
        },
        "ghas-operations-027": {
            "prompt": "Un equipo quiere que los resultados de seguridad limiten las fusiones. ¿Qué mecanismo aporta aplicación obligatoria, en vez de otro detector?",
            "choices": [
                "Code scanning",
                "Repository rulesets",
                "Push protection",
                "Dependency review"
            ],
            "explanations": [
                "Code scanning puede detectar vulnerabilidades del código fuente al analizar un pull request.",
                "Los rulesets pueden exigir comprobaciones y otras condiciones antes de aceptar cambios.",
                "Push protection bloquea secretos compatibles durante un push, antes de que entren en el repositorio.",
                "Dependency review aporta información sobre dependencias modificadas antes de la fusión."
            ],
            "concept": "Aplicación obligatoria de comprobaciones de corrección",
            "hints": [
                "Sitúa el control en el momento en que proporciona información.",
                "Distingue un detector de la política que exige su resultado."
            ]
        },
        "ghas-operations-028": {
            "prompt": "¿Qué selección convierte una campaña de análisis de código en aprendizaje y corrección enfocados, no en un volcado de alertas sin relación?",
            "choices": [
                "Agrupar alertas de código relacionadas de la rama predeterminada.",
                "Nombrar un contacto para la campaña.",
                "Asignar alertas a personas con escritura en el repositorio.",
                "Seguir el progreso de corrección de las alertas seleccionadas."
            ],
            "explanations": [
                "Los hallazgos relacionados permiten reutilizar conocimientos de corrección; las campañas de código se centran en la rama predeterminada.",
                "Un contacto identificado ofrece una vía clara para preguntas, revisiones y colaboración.",
                "Las alertas de código y secretos de campañas se pueden asignar a usuarios con escritura; el acceso a la alerta de secreto puede elevarse temporalmente.",
                "El seguimiento mide el esfuerzo de corrección enfocado; crear una campaña no es por sí mismo corregir."
            ],
            "concept": "Definición enfocada del ámbito de campaña",
            "hints": [
                "Distingue ámbito, coordinación, responsabilidad y progreso de la campaña.",
                "Un programa de corrección necesita trabajo trazable, no solo una cifra menor en pantalla."
            ]
        },
        "ghas-operations-029": {
            "prompt": "Los desarrolladores necesitan una vía clara para preguntas y revisiones de correcciones de la campaña. ¿Qué práctica responde a esa necesidad?",
            "choices": [
                "Agrupar alertas de código relacionadas de la rama predeterminada.",
                "Nombrar un contacto para la campaña.",
                "Asignar alertas a personas con escritura en el repositorio.",
                "Seguir el progreso de corrección de las alertas seleccionadas."
            ],
            "explanations": [
                "Los hallazgos relacionados permiten reutilizar conocimientos de corrección; las campañas de código se centran en la rama predeterminada.",
                "Un contacto identificado ofrece una vía clara para preguntas, revisiones y colaboración.",
                "Las alertas de código y secretos de campañas se pueden asignar a usuarios con escritura; el acceso a la alerta de secreto puede elevarse temporalmente.",
                "El seguimiento mide el esfuerzo de corrección enfocado; crear una campaña no es por sí mismo corregir."
            ],
            "concept": "Contacto de colaboración de campaña",
            "hints": [
                "Distingue ámbito, coordinación, responsabilidad y progreso de la campaña.",
                "Un programa de corrección necesita trabajo trazable, no solo una cifra menor en pantalla."
            ]
        },
        "ghas-operations-030": {
            "prompt": "Después de lanzar una campaña, ¿qué actividad continua muestra si avanza el trabajo de corrección seleccionado?",
            "choices": [
                "Asignar alertas a personas con escritura en el repositorio.",
                "Seguir el progreso de corrección de las alertas seleccionadas.",
                "Agrupar alertas de código relacionadas de la rama predeterminada.",
                "Nombrar un contacto para la campaña."
            ],
            "explanations": [
                "Las alertas de código y secretos de campañas se pueden asignar a usuarios con escritura; el acceso a la alerta de secreto puede elevarse temporalmente.",
                "El seguimiento mide el esfuerzo de corrección enfocado; crear una campaña no es por sí mismo corregir.",
                "Los hallazgos relacionados permiten reutilizar conocimientos de corrección; las campañas de código se centran en la rama predeterminada.",
                "Un contacto identificado ofrece una vía clara para preguntas, revisiones y colaboración."
            ],
            "concept": "Medición de correcciones de campaña",
            "hints": [
                "Distingue ámbito, coordinación, responsabilidad y progreso de la campaña.",
                "Un programa de corrección necesita trabajo trazable, no solo una cifra menor en pantalla."
            ]
        },
        "ghas-operations-031": {
            "prompt": "¿A qué grupo propuesto de alertas no debe prometerse una campaña según los tipos documentados actualmente?",
            "choices": [
                "Alertas de código sobre inyección SQL de la rama predeterminada",
                "Alertas de secretos por credenciales expuestas en versión preliminar pública",
                "Alertas de dependencias de Dependabot por vulnerabilidades conocidas",
                "Alertas de código sobre recorrido de rutas de la rama predeterminada"
            ],
            "explanations": [
                "Son alertas de análisis de código en la rama predeterminada, un tipo documentado de campaña.",
                "Las campañas de secretos están documentadas explícitamente como versión preliminar pública.",
                "La documentación actual enumera campañas de análisis de código y secretos, no alertas de vulnerabilidades de Dependabot.",
                "También son alertas de código de la rama predeterminada y pueden agruparse en una campaña."
            ],
            "concept": "Compatibilidad de campañas frente al texto del temario",
            "hints": [
                "Comprueba si los tipos de alerta de campaña documentados incluyen el detector propuesto.",
                "Un objetivo del temario no garantiza la disponibilidad de todas las funciones relacionadas."
            ]
        },
        "ghas-operations-032": {
            "prompt": "Una campaña necesita responsables identificados para sus alertas de código y secretos. ¿Qué acción admitida los establece?",
            "choices": [
                "Seguir el progreso de corrección de las alertas seleccionadas.",
                "Agrupar alertas de código relacionadas de la rama predeterminada.",
                "Nombrar un contacto para la campaña.",
                "Asignar alertas a personas con escritura en el repositorio."
            ],
            "explanations": [
                "El seguimiento mide el esfuerzo de corrección enfocado; crear una campaña no es por sí mismo corregir.",
                "Los hallazgos relacionados permiten reutilizar conocimientos de corrección; las campañas de código se centran en la rama predeterminada.",
                "Un contacto identificado ofrece una vía clara para preguntas, revisiones y colaboración.",
                "Las alertas de código y secretos de campañas se pueden asignar a usuarios con escritura; el acceso a la alerta de secreto puede elevarse temporalmente."
            ],
            "concept": "Responsabilidad apta de alertas de campaña",
            "hints": [
                "Distingue ámbito, coordinación, responsabilidad y progreso de la campaña.",
                "Un programa de corrección necesita trabajo trazable, no solo una cifra menor en pantalla."
            ]
        },
        "ghas-operations-033": {
            "prompt": "Un informe entre equipos contiene detalles sensibles de alertas. ¿Qué enfoque preserva el límite de acceso a esas alertas?",
            "choices": [
                "Audit log",
                "Justificación del descarte de alertas",
                "Revisión periódica de excepciones",
                "Informes limitados por permisos"
            ],
            "explanations": [
                "Los registros de auditoría conservan eventos admitidos de secretos y Dependabot; no incluyen eventos de la cronología de alertas de código.",
                "Una justificación útil explica por qué se descartó un hallazgo sin insinuar que se corrigió.",
                "Revisar excepciones comprueba si siguen siendo válidos los supuestos de riesgo y la responsabilidad anteriores.",
                "Los informes deben respetar el acceso a alertas, no distribuir detalles sensibles a lectores no autorizados."
            ],
            "concept": "Informes de seguridad confidenciales",
            "hints": [
                "Distingue la comodidad operativa de la evidencia duradera de gobernanza.",
                "Piensa qué necesitaría una revisión futura para entender la decisión."
            ]
        },
        "ghas-operations-034": {
            "prompt": "La cifra de alertas de un equipo baja tras dejar de ejecutarse varias funciones de seguridad. ¿Qué comprobación evita informar falsamente que se redujo el riesgo?",
            "choices": [
                "Comparar los permisos de alertas de ambas personas.",
                "Usar el ámbito de la rama predeterminada al interpretar las métricas.",
                "Exportar los datos disponibles de la vista como CSV.",
                "Comprobar la cobertura antes de concluir que el riesgo es bajo."
            ],
            "explanations": [
                "Los datos de Security overview se filtran según los permisos de quien los consulta.",
                "Las vistas de Security overview informan sobre las ramas predeterminadas de repositorios accesibles.",
                "Varias páginas de Security overview permiten exportar CSV para análisis posteriores.",
                "Una vista sin alertas puede reflejar detección deshabilitada o problemas no detectados, no ausencia de vulnerabilidades."
            ],
            "concept": "Informes de corrección conscientes de la cobertura",
            "hints": [
                "Trata los resultados del panel como observaciones con un ámbito, no como una prueba universal.",
                "Comprueba tanto lo medido como lo que la persona tiene permiso para ver."
            ]
        },
        "ghas-operations-035": {
            "prompt": "Los mantenedores necesitan coordinar una corrección con un investigador antes de publicar detalles. ¿Qué función permite este flujo?",
            "choices": [
                "Repository security advisories",
                "GitHub Advisory Database",
                "SECURITY.md",
                "Private vulnerability reporting"
            ],
            "explanations": [
                "Los avisos del repositorio permiten discutir en privado, coordinar correcciones y publicar después.",
                "La base es una colección de avisos de seguridad publicados que se puede consultar.",
                "Una política de seguridad explica las versiones compatibles y cómo informar de vulnerabilidades.",
                "Esta función ofrece a investigadores un canal privado para informar a quienes mantienen el repositorio."
            ],
            "concept": "Flujo de corrección de privado a público",
            "hints": [
                "Distingue instrucciones, recepción confidencial, corrección coordinada y datos de referencia públicos.",
                "Considera el público y la fase de divulgación."
            ]
        },
        "ghas-operations-036": {
            "prompt": "¿Qué estrategia evita tratar una condición final de lanzamiento como el único control de seguridad del desarrollo?",
            "choices": [
                "Dar información de seguridad a los desarrolladores antes de fusionar.",
                "Combinar detección temprana con comprobaciones de fusión obligatorias.",
                "Coordinar una campaña enfocada en corregir alertas pendientes.",
                "Seguir supervisando tras incorporar correcciones a la rama predeterminada."
            ],
            "explanations": [
                "La información temprana ayuda a evitar vulnerabilidades en vez de descubrirlas todas al lanzar una versión.",
                "La detección aporta hallazgos; las comprobaciones obligatorias deciden si los cambios pueden continuar. Se complementan.",
                "Una campaña organiza correcciones pendientes; no previene todas las vulnerabilidades nuevas.",
                "Los avisos nuevos y los cambios de código pueden introducir riesgos después de una corrección."
            ],
            "concept": "Operaciones preventivas por capas",
            "hints": [
                "Considera cuándo llega la información y si todavía se necesita corregir el problema.",
                "Un control preventivo y una condición de lanzamiento pueden abordar fallos distintos."
            ]
        },
        "ghas-operations-037": {
            "prompt": "Una alerta de código está corregida en la rama predeterminada, pero sigue abierta en una rama de versión. ¿Qué sección de la interfaz en inglés distingue esos estados?",
            "choices": [
                "Assignees",
                "Show paths",
                "Tool status page",
                "Affected branches"
            ],
            "explanations": [
                "Assignees identifica a la persona responsable de corregir una alerta, no valida una ejecución de análisis.",
                "Para alertas de flujo de datos, Show paths muestra los pasos del origen al destino que sustentan la clasificación.",
                "La página de estado de herramientas muestra cuándo se ejecutó el análisis y ayuda a detectar problemas.",
                "Affected branches muestra el estado de una alerta en ramas distintas de la predeterminada."
            ],
            "concept": "Verificación de correcciones por rama",
            "hints": [
                "Comprueba qué evidencia responde a la pregunta inmediata del análisis.",
                "Un resultado limpio solo tiene sentido si realmente se ejecutó el análisis previsto."
            ]
        },
        "ghas-operations-038": {
            "prompt": "¿Qué filtro literal de análisis de código selecciona alertas abiertas de gravedad alta en main?",
            "choices": [
                "is:closed severity:high branch:main",
                "is:open severity:high branch:main",
                "is:open severity:low branch:main",
                "is:open severity:high branch:release"
            ],
            "explanations": [
                "Selecciona alertas de código cerradas, de gravedad alta y presentes en main.",
                "Selecciona alertas de código abiertas de gravedad alta en main.",
                "Restringe las alertas abiertas a gravedad baja, no alta.",
                "Usa release como ámbito de rama en vez de main."
            ],
            "concept": "Filtrado de listas de alertas con ámbito",
            "hints": [
                "Lee cada filtro como una restricción del conjunto de resultados.",
                "Distingue el estado de la alerta de la gravedad y el ámbito de rama."
            ]
        },
        "ghas-operations-039": {
            "prompt": "¿Qué fuente de evidencia debe consultar una investigación para atribuir acciones de alertas de seguridad admitidas a sus autores?",
            "choices": [
                "Audit log",
                "Justificación del descarte de alertas",
                "Revisión periódica de excepciones",
                "Informes limitados por permisos"
            ],
            "explanations": [
                "Los registros de auditoría conservan eventos admitidos de secretos y Dependabot; no incluyen eventos de la cronología de alertas de código.",
                "Una justificación útil explica por qué se descartó un hallazgo sin insinuar que se corrigió.",
                "Revisar excepciones comprueba si siguen siendo válidos los supuestos de riesgo y la responsabilidad anteriores.",
                "Los informes deben respetar el acceso a alertas, no distribuir detalles sensibles a lectores no autorizados."
            ],
            "concept": "Auditabilidad de acciones de seguridad",
            "hints": [
                "Distingue la comodidad operativa de la evidencia duradera de gobernanza.",
                "Piensa qué necesitaría una revisión futura para entender la decisión."
            ]
        },
        "ghas-operations-040": {
            "prompt": "Copilot Autofix sugiere un parche para una alerta de código. ¿Qué sigue siendo necesario antes de informar de una corrección exitosa?",
            "choices": [
                "Documentar un descarte justificado como falso positivo.",
                "Registrar el riesgo aceptado y su justificación.",
                "Verificar la corrección con análisis reciente y pertinente.",
                "Reabrir la alerta cuando el descarte ya no esté justificado."
            ],
            "explanations": [
                "Descartar como falso positivo requiere evidencia de que la vulnerabilidad no se aplica al código analizado.",
                "Aceptar un riesgo reconoce un problema sin corregir; no debe informarse como una corrección verificada.",
                "Una corrección se demuestra con análisis pertinente del código modificado, no solo editando o descartando una alerta.",
                "Un supuesto que cambia o una ruta de código ahora aplicable puede invalidar un descarte anterior."
            ],
            "concept": "Verificación de correcciones generadas",
            "hints": [
                "Distingue la evidencia sobre un hallazgo de una decisión de tolerar el riesgo.",
                "Elige una resolución que siga siendo veraz cuando la lea otra persona."
            ]
        },
        "ghas-operations-041": {
            "prompt": "Una alerta descartada pasa a ser aplicable tras un cambio de código que invalida su justificación original. ¿Qué resolución corresponde?",
            "choices": [
                "Documentar un descarte justificado como falso positivo.",
                "Registrar el riesgo aceptado y su justificación.",
                "Verificar la corrección con análisis reciente y pertinente.",
                "Reabrir la alerta cuando el descarte ya no esté justificado."
            ],
            "explanations": [
                "Descartar como falso positivo requiere evidencia de que la vulnerabilidad no se aplica al código analizado.",
                "Aceptar un riesgo reconoce un problema sin corregir; no debe informarse como una corrección verificada.",
                "Una corrección se demuestra con análisis pertinente del código modificado, no solo editando o descartando una alerta.",
                "Un supuesto que cambia o una ruta de código ahora aplicable puede invalidar un descarte anterior."
            ],
            "concept": "Revisión de descartes de alertas",
            "hints": [
                "Distingue la evidencia sobre un hallazgo de una decisión de tolerar el riesgo.",
                "Elige una resolución que siga siendo veraz cuando la lea otra persona."
            ]
        },
        "ghas-administration-001": {
            "prompt": "Un administrador autorizado de una organización en GitHub.com necesita crear una configuración de seguridad. ¿Qué ruta de la interfaz en inglés es correcta?",
            "choices": [
                "Repository > Settings > Rules > Rulesets",
                "Organization > Security and quality > Risk",
                "Repository > Insights > Dependency graph",
                "Organization > Settings > Advanced Security > Configurations"
            ],
            "explanations": [
                "Los rulesets del repositorio regulan restricciones de ramas, etiquetas o pushes, no configuraciones de seguridad organizativas.",
                "Risk es una vista de investigación, no el editor de configuraciones de seguridad.",
                "Esta ruta abre el inventario de dependencias, no las políticas de habilitación organizativas.",
                "Las configuraciones de seguridad de la organización se administran en esta sección de ajustes."
            ],
            "concept": "Administración de configuraciones organizativas",
            "hints": [
                "Elige el ámbito administrativo antes de elegir el ajuste.",
                "Administrar configuraciones e investigar alertas son tareas distintas."
            ]
        },
        "ghas-administration-002": {
            "prompt": "¿Qué política de configuración en inglés aplica automáticamente una base elegida a repositorios recién creados de una visibilidad seleccionada?",
            "choices": [
                "Aplicar la configuración a repositorios seleccionados.",
                "Use as default for newly created repositories",
                "Enforce configuration",
                "Keep existing settings"
            ],
            "explanations": [
                "Aplicar vincula la configuración a repositorios existentes seleccionados, en vez de limitarse a definir un valor para futuros repositorios.",
                "Esta política aplica automáticamente la configuración a repositorios nuevos de la visibilidad elegida.",
                "La aplicación obligatoria impide que administradores cambien funciones habilitadas o deshabilitadas explícitamente por la configuración.",
                "Dejar una función sin establecer conserva su ajuste existente; esta configuración no obliga a cambiarla."
            ],
            "concept": "Valores predeterminados de configuración para repositorios nuevos",
            "hints": [
                "Distingue un valor predeterminado para repositorios futuros de una acción sobre los existentes.",
                "Estar seleccionada, aplicada y exigida son estados distintos."
            ]
        },
        "ghas-administration-003": {
            "prompt": "Se transfiere un repositorio a una organización con configuración de seguridad predeterminada. ¿Qué acción de configuración sigue siendo necesaria?",
            "choices": [
                "Comprobar la configuración vinculada y si es obligatoria.",
                "Revisar la licencia de funciones de pago antes de aplicar a gran escala.",
                "Aplicar manualmente una configuración adecuada tras la transferencia.",
                "Crear una configuración personalizada con las funciones necesarias."
            ],
            "explanations": [
                "El comportamiento depende de la vinculación y de la aplicación obligatoria, no solo del nombre de la configuración.",
                "Aplicar funciones de pago a repositorios privados o internos puede consumir uso con licencia y requiere la autorización correspondiente.",
                "Los valores predeterminados se aplican a repositorios recién creados, no automáticamente a los transferidos.",
                "Las configuraciones personalizadas permiten elegir una combinación adaptada de ajustes de habilitación."
            ],
            "concept": "Cobertura de repositorios transferidos",
            "hints": [
                "Comprueba si el repositorio es nuevo, transferido o ya está gestionado.",
                "No supongas que un valor predeterminado cambia retroactivamente todos los repositorios."
            ]
        },
        "ghas-administration-004": {
            "prompt": "¿Qué política en inglés impide que administradores de repositorios cambien funciones habilitadas o deshabilitadas explícitamente por su configuración aplicada?",
            "choices": [
                "Keep existing settings",
                "Aplicar la configuración a repositorios seleccionados.",
                "Use as default for newly created repositories",
                "Enforce configuration"
            ],
            "explanations": [
                "Dejar una función sin establecer conserva su ajuste existente; esta configuración no obliga a cambiarla.",
                "Aplicar vincula la configuración a repositorios existentes seleccionados, en vez de limitarse a definir un valor para futuros repositorios.",
                "Esta política aplica automáticamente la configuración a repositorios nuevos de la visibilidad elegida.",
                "La aplicación obligatoria impide que administradores cambien funciones habilitadas o deshabilitadas explícitamente por la configuración."
            ],
            "concept": "Límite de aplicación obligatoria de configuraciones",
            "hints": [
                "Distingue un valor predeterminado para repositorios futuros de una acción sobre los existentes.",
                "Estar seleccionada, aplicada y exigida son estados distintos."
            ]
        },
        "ghas-administration-005": {
            "prompt": "En una configuración de seguridad obligatoria, ¿qué opción conserva la habilitación actual de una función sin imponerla desde esa configuración?",
            "choices": [
                "Keep existing settings",
                "Aplicar la configuración a repositorios seleccionados.",
                "Use as default for newly created repositories",
                "Enforce configuration"
            ],
            "explanations": [
                "Dejar una función sin establecer conserva su ajuste existente; esta configuración no obliga a cambiarla.",
                "Aplicar vincula la configuración a repositorios existentes seleccionados, en vez de limitarse a definir un valor para futuros repositorios.",
                "Esta política aplica automáticamente la configuración a repositorios nuevos de la visibilidad elegida.",
                "La aplicación obligatoria impide que administradores cambien funciones habilitadas o deshabilitadas explícitamente por la configuración."
            ],
            "concept": "Ajustes sin establecer bajo aplicación obligatoria",
            "hints": [
                "Distingue un valor predeterminado para repositorios futuros de una acción sobre los existentes.",
                "Estar seleccionada, aplicada y exigida son estados distintos."
            ]
        },
        "ghas-administration-006": {
            "prompt": "Un grupo de repositorios necesita una combinación de habilitación distinta de la base recomendada por GitHub. ¿Qué enfoque administrativo corresponde?",
            "choices": [
                "Aplicar manualmente una configuración adecuada tras la transferencia.",
                "Crear una configuración personalizada con las funciones necesarias.",
                "Comprobar la configuración vinculada y si es obligatoria.",
                "Revisar la licencia de funciones de pago antes de aplicar a gran escala."
            ],
            "explanations": [
                "Los valores predeterminados se aplican a repositorios recién creados, no automáticamente a los transferidos.",
                "Las configuraciones personalizadas permiten elegir una combinación adaptada de ajustes de habilitación.",
                "El comportamiento depende de la vinculación y de la aplicación obligatoria, no solo del nombre de la configuración.",
                "Aplicar funciones de pago a repositorios privados o internos puede consumir uso con licencia y requiere la autorización correspondiente."
            ],
            "concept": "Diseño de configuraciones personalizadas",
            "hints": [
                "Comprueba si el repositorio es nuevo, transferido o ya está gestionado.",
                "No supongas que un valor predeterminado cambia retroactivamente todos los repositorios."
            ]
        },
        "ghas-administration-007": {
            "prompt": "Se ha guardado un valor predeterminado para repositorios nuevos. ¿Cómo incorpora un administrador repositorios ya existentes a esa configuración?",
            "choices": [
                "Enforce configuration",
                "Keep existing settings",
                "Aplicar la configuración a repositorios seleccionados.",
                "Use as default for newly created repositories"
            ],
            "explanations": [
                "La aplicación obligatoria impide que administradores cambien funciones habilitadas o deshabilitadas explícitamente por la configuración.",
                "Dejar una función sin establecer conserva su ajuste existente; esta configuración no obliga a cambiarla.",
                "Aplicar vincula la configuración a repositorios existentes seleccionados, en vez de limitarse a definir un valor para futuros repositorios.",
                "Esta política aplica automáticamente la configuración a repositorios nuevos de la visibilidad elegida."
            ],
            "concept": "Vinculación de configuraciones a repositorios existentes",
            "hints": [
                "Distingue un valor predeterminado para repositorios futuros de una acción sobre los existentes.",
                "Estar seleccionada, aplicada y exigida son estados distintos."
            ]
        },
        "ghas-administration-008": {
            "prompt": "¿Qué estado de configuración indica que la vinculación de un repositorio está en curso, no completada?",
            "choices": [
                "attaching",
                "enforced",
                "failed",
                "attached"
            ],
            "explanations": [
                "La configuración todavía se está aplicando; este estado transitorio no demuestra que haya terminado.",
                "La configuración está activa y es obligatoria, lo que restringe cambios en las funciones controladas.",
                "Una vinculación fallida requiere investigación y no demuestra que las funciones previstas estén activas.",
                "La configuración está aplicada activamente y el repositorio hereda sus ajustes."
            ],
            "concept": "Aplicación pendiente de configuraciones",
            "hints": [
                "Que una solicitud se acepte no equivale a una vinculación completada.",
                "Interpreta la relación actual del repositorio con la configuración."
            ]
        },
        "ghas-administration-009": {
            "prompt": "¿Qué estado exige investigar una vinculación no exitosa en vez de contar el repositorio como cubierto?",
            "choices": [
                "enforced",
                "failed",
                "attached",
                "attaching"
            ],
            "explanations": [
                "La configuración está activa y es obligatoria, lo que restringe cambios en las funciones controladas.",
                "Una vinculación fallida requiere investigación y no demuestra que las funciones previstas estén activas.",
                "La configuración está aplicada activamente y el repositorio hereda sus ajustes.",
                "La configuración todavía se está aplicando; este estado transitorio no demuestra que haya terminado."
            ],
            "concept": "Vinculación fallida de configuración",
            "hints": [
                "Que una solicitud se acepte no equivale a una vinculación completada.",
                "Interpreta la relación actual del repositorio con la configuración."
            ]
        },
        "ghas-administration-010": {
            "prompt": "¿Qué estado indica tanto herencia activa de configuración como restricciones a cambios de habilitación del administrador del repositorio?",
            "choices": [
                "attaching",
                "enforced",
                "failed",
                "attached"
            ],
            "explanations": [
                "La configuración todavía se está aplicando; este estado transitorio no demuestra que haya terminado.",
                "La configuración está activa y es obligatoria, lo que restringe cambios en las funciones controladas.",
                "Una vinculación fallida requiere investigación y no demuestra que las funciones previstas estén activas.",
                "La configuración está aplicada activamente y el repositorio hereda sus ajustes."
            ],
            "concept": "Relación de configuración obligatoria",
            "hints": [
                "Que una solicitud se acepte no equivale a una vinculación completada.",
                "Interpreta la relación actual del repositorio con la configuración."
            ]
        },
        "ghas-administration-011": {
            "prompt": "Un equipo necesita que se le asigne el rol organizativo predefinido security manager. ¿Qué rol debe realizar esa delegación?",
            "choices": [
                "Investigador de seguridad externo",
                "Desarrollador del repositorio",
                "Security manager",
                "Organization owner"
            ],
            "explanations": [
                "Un investigador comunica un posible problema; informar no otorga permisos de administración del repositorio.",
                "Los desarrolladores implementan y prueban correcciones en el código que mantienen; el acceso depende de los permisos asignados.",
                "Los security managers pueden gestionar ajustes y alertas de seguridad en toda la organización sin acceso general de escritura al código.",
                "Los organization owners pueden asignar roles de organización, incluido security manager."
            ],
            "concept": "Autoridad para asignar security managers",
            "hints": [
                "Distingue el trabajo de implementación de la autoridad en toda la organización.",
                "Elige el rol cuya responsabilidad habitual corresponde a la tarea."
            ]
        },
        "ghas-administration-012": {
            "prompt": "¿Qué combinación de permisos aporta el rol predefinido security manager sin necesitar escritura general en el código?",
            "choices": [
                "Configurar funciones de seguridad de la organización.",
                "Leer repositorios y gestionar alertas de seguridad en toda la organización.",
                "Escribir código de aplicación en todos los repositorios.",
                "Asignar el rol de organización security manager."
            ],
            "explanations": [
                "El rol concede autoridad administrativa de seguridad; las licencias de funciones siguen siendo un requisito aparte.",
                "Security manager concede lectura de repositorios y escritura sobre alertas de seguridad en toda la organización.",
                "Security manager por sí solo no concede escritura general sobre el código fuente de las aplicaciones.",
                "La asignación de este rol corresponde a un organization owner."
            ],
            "concept": "Mínimo privilegio de security manager",
            "hints": [
                "Distingue acceso al código de autoridad sobre alertas y ajustes de seguridad.",
                "Un rol especializado de organización no tiene por qué ser administrador general de repositorios."
            ]
        },
        "ghas-administration-013": {
            "prompt": "¿Qué capacidad NO se concede únicamente por el rol predefinido security manager?",
            "choices": [
                "Asignar el rol de organización security manager.",
                "Configurar funciones de seguridad de la organización.",
                "Leer repositorios y gestionar alertas de seguridad en toda la organización.",
                "Escribir código de aplicación en todos los repositorios."
            ],
            "explanations": [
                "La asignación de este rol corresponde a un organization owner.",
                "El rol concede autoridad administrativa de seguridad; las licencias de funciones siguen siendo un requisito aparte.",
                "Security manager concede lectura de repositorios y escritura sobre alertas de seguridad en toda la organización.",
                "Security manager por sí solo no concede escritura general sobre el código fuente de las aplicaciones."
            ],
            "concept": "Administrar seguridad no equivale a escribir código",
            "hints": [
                "Distingue acceso al código de autoridad sobre alertas y ajustes de seguridad.",
                "Un rol especializado de organización no tiene por qué ser administrador general de repositorios."
            ]
        },
        "ghas-administration-014": {
            "prompt": "Sin permisos personalizados de alertas, ¿qué rol estándar mínimo permite ver el resumen completo de alertas de código, no solo anotaciones en pull requests?",
            "choices": [
                "Triage",
                "Write",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Triage permite gestionar issues y pull requests más allá de Read, pero no alcanza Write, necesario para toda la lista de alertas de código.",
                "Write es el rol estándar mínimo para ver el resumen completo de alertas de código, sin permisos personalizados adicionales.",
                "Admin incluye administración del repositorio y permite ver el resumen de alertas, pero supera el mínimo necesario.",
                "Read permite ver anotaciones de código en pull requests y consultar rulesets activos, pero no por sí solo toda la lista de alertas de código."
            ],
            "concept": "Visibilidad de alertas de código del repositorio",
            "hints": [
                "Compara el rol estándar mínimo, no todos los roles con mayor autoridad.",
                "Ver anotaciones, ver una lista de alertas y administrar un repositorio son permisos distintos."
            ]
        },
        "ghas-administration-015": {
            "prompt": "Una rama coincide con dos rulesets y una regla de protección de rama. ¿Cómo se resuelven sus restricciones aplicables?",
            "choices": [
                "Se combinan todas las reglas aplicables; prevalece el requisito duplicado más estricto.",
                "Conceder omisión solo a actores aptos seleccionados explícitamente.",
                "Coincidir con los patrones de ramas o etiquetas del ruleset.",
                "Consultar los rulesets activos con acceso de lectura al repositorio."
            ],
            "explanations": [
                "Los rulesets se combinan con otros rulesets y protección de ramas; no tienen orden de prioridad.",
                "Los rulesets pueden designar roles, equipos o GitHub Apps para omisión, sin eximir implícitamente a todo el mundo.",
                "Los rulesets de ramas y etiquetas se aplican a las referencias de sus patrones configurados.",
                "Quienes tienen lectura pueden consultar rulesets activos sin obtener permiso para cambiarlos."
            ],
            "concept": "Combinación de políticas sin orden de prioridad",
            "hints": [
                "Comprueba los destinos, la aplicabilidad y los actores de omisión explícitos.",
                "Varias fuentes de políticas pueden limitar el mismo cambio."
            ]
        },
        "ghas-administration-016": {
            "prompt": "Un ruleset necesita una excepción limitada para una aplicación de automatización aprobada. ¿Qué enfoque de gobernanza corresponde?",
            "choices": [
                "Se combinan todas las reglas aplicables; prevalece el requisito duplicado más estricto.",
                "Conceder omisión solo a actores aptos seleccionados explícitamente.",
                "Coincidir con los patrones de ramas o etiquetas del ruleset.",
                "Consultar los rulesets activos con acceso de lectura al repositorio."
            ],
            "explanations": [
                "Los rulesets se combinan con otros rulesets y protección de ramas; no tienen orden de prioridad.",
                "Los rulesets pueden designar roles, equipos o GitHub Apps para omisión, sin eximir implícitamente a todo el mundo.",
                "Los rulesets de ramas y etiquetas se aplican a las referencias de sus patrones configurados.",
                "Quienes tienen lectura pueden consultar rulesets activos sin obtener permiso para cambiarlos."
            ],
            "concept": "Gobernanza de actores de omisión de rulesets",
            "hints": [
                "Comprueba los destinos, la aplicabilidad y los actores de omisión explícitos.",
                "Varias fuentes de políticas pueden limitar el mismo cambio."
            ]
        },
        "ghas-administration-017": {
            "prompt": "¿Qué hace el estado de aplicación Active de un ruleset en la interfaz en inglés?",
            "choices": [
                "Conservar la definición sin exigir sus reglas.",
                "Conceder a cada lector del repositorio permiso para editar reglas.",
                "Conceder a quienes escriben en el repositorio una exención automática.",
                "Exigir las reglas configuradas en los destinos coincidentes."
            ],
            "explanations": [
                "Conservar un ruleset sin exigirlo describe Disabled, no Active.",
                "Los lectores pueden consultar rulesets activos; activarlos no les concede autoridad para editarlos.",
                "Un ruleset Active no exime automáticamente a quienes tienen escritura; los actores de omisión se configuran aparte.",
                "Active significa exigir las reglas en los destinos coincidentes, según la política de omisión configurada."
            ],
            "concept": "Aplicación de rulesets activos",
            "hints": [
                "Interpreta el estado de aplicación por separado del contenido de la política.",
                "Ver una regla no implica necesariamente autoridad para editarla."
            ]
        },
        "ghas-administration-018": {
            "prompt": "¿Qué acceso mínimo al repositorio permite consultar rulesets activos sin administrarlos?",
            "choices": [
                "Admin",
                "Read",
                "Triage",
                "Write"
            ],
            "explanations": [
                "Admin incluye administración del repositorio y permite ver el resumen de alertas, pero supera el mínimo necesario.",
                "Read permite ver anotaciones de código en pull requests y consultar rulesets activos, pero no por sí solo toda la lista de alertas de código.",
                "Triage permite gestionar issues y pull requests más allá de Read, pero no alcanza Write, necesario para toda la lista de alertas de código.",
                "Write es el rol estándar mínimo para ver el resumen completo de alertas de código, sin permisos personalizados adicionales."
            ],
            "concept": "Transparencia de políticas de solo lectura",
            "hints": [
                "Compara el rol estándar mínimo, no todos los roles con mayor autoridad.",
                "Ver anotaciones, ver una lista de alertas y administrar un repositorio son permisos distintos."
            ]
        },
        "ghas-administration-019": {
            "prompt": "Los contribuidores sin derechos de omisión de push protection deben obtener aprobación para excepciones. ¿Qué ajuste de omisión delegada aporta esa revisión?",
            "choices": [
                "Configurar revisores de omisión designados.",
                "Conceder un privilegio de omisión explícito.",
                "Conceder una exención de push protection.",
                "Conservar los permisos ordinarios del repositorio."
            ],
            "explanations": [
                "La omisión delegada dirige las solicitudes de contribuidores sin derechos de omisión a revisores designados.",
                "Un privilegio de omisión permite a actores seleccionados omitir el bloqueo; no equivale a solicitar aprobación.",
                "Una exención omite push protection para actores seleccionados, a diferencia de revisar solicitudes individuales.",
                "La delegación de omisiones no concede por sí misma administración general ni acceso al código."
            ],
            "concept": "Límite de aprobación de omisión delegada",
            "hints": [
                "Una excepción delegada no debe ampliar permisos ajenos a ella.",
                "Distingue solicitar una excepción de estar autorizado para aprobarla."
            ]
        },
        "ghas-administration-020": {
            "prompt": "Se añade a una persona como revisora de omisiones de push protection. ¿Qué debe mantenerse separado de esa función delegada?",
            "choices": [
                "Configurar revisores de omisión designados.",
                "Conceder un privilegio de omisión explícito.",
                "Conceder una exención de push protection.",
                "Conservar los permisos ordinarios del repositorio."
            ],
            "explanations": [
                "La omisión delegada dirige las solicitudes de contribuidores sin derechos de omisión a revisores designados.",
                "Un privilegio de omisión permite a actores seleccionados omitir el bloqueo; no equivale a solicitar aprobación.",
                "Una exención omite push protection para actores seleccionados, a diferencia de revisar solicitudes individuales.",
                "La delegación de omisiones no concede por sí misma administración general ni acceso al código."
            ],
            "concept": "Delegación de omisión frente a administración del repositorio",
            "hints": [
                "Una excepción delegada no debe ampliar permisos ajenos a ella.",
                "Distingue solicitar una excepción de estar autorizado para aprobarla."
            ]
        },
        "ghas-administration-021": {
            "prompt": "En GHES 3.19 con Actions instalado faltan controles de Secret Protection y Code Security. ¿Qué requisitos deben comprobarse?",
            "choices": [
                "Comprobar funciones instaladas y licencia de seguridad correspondiente.",
                "Comprobar que GitHub Actions esté instalado en la instancia.",
                "Usar la documentación de GHES 3.19 para ese despliegue.",
                "Revisar la habilitación organizativa tras los requisitos de instancia."
            ],
            "explanations": [
                "En GHES 3.19, la interfaz de configuración depende de funciones instaladas en la instancia y de la licencia del producto.",
                "La configuración predeterminada de análisis de código y las actualizaciones de seguridad de Dependabot en GHES 3.19 requieren GitHub Actions.",
                "Una versión concreta de Server puede diferir del Cloud actual; la comparación depende de su documentación específica.",
                "Instalar una función en Server no sustituye los ajustes adecuados de organización y repositorio."
            ],
            "concept": "Disponibilidad de funciones de Server por versión",
            "hints": [
                "Usa la documentación de la versión instalada de Server, no supuestos de Cloud.",
                "Comprueba los requisitos de instalación por separado de los ajustes de organización."
            ]
        },
        "ghas-administration-022": {
            "prompt": "En GHES 3.19, ¿qué requisito de instalación comparten la configuración predeterminada de análisis de código y las actualizaciones de seguridad de Dependabot?",
            "choices": [
                "Comprobar funciones instaladas y licencia de seguridad correspondiente.",
                "Comprobar que GitHub Actions esté instalado en la instancia.",
                "Usar la documentación de GHES 3.19 para ese despliegue.",
                "Revisar la habilitación organizativa tras los requisitos de instancia."
            ],
            "explanations": [
                "En GHES 3.19, la interfaz de configuración depende de funciones instaladas en la instancia y de la licencia del producto.",
                "La configuración predeterminada de análisis de código y las actualizaciones de seguridad de Dependabot en GHES 3.19 requieren GitHub Actions.",
                "Una versión concreta de Server puede diferir del Cloud actual; la comparación depende de su documentación específica.",
                "Instalar una función en Server no sustituye los ajustes adecuados de organización y repositorio."
            ],
            "concept": "Requisito de Actions en Server",
            "hints": [
                "Usa la documentación de la versión instalada de Server, no supuestos de Cloud.",
                "Comprueba los requisitos de instalación por separado de los ajustes de organización."
            ]
        },
        "ghas-administration-023": {
            "prompt": "Un enterprise owner de Enterprise Cloud no ve datos de Security overview de una organización donde no tiene rol. ¿Qué acción prescribe la referencia de permisos?",
            "choices": [
                "Unirse a un equipo con lectura en el repositorio.",
                "Activar notificaciones de seguridad por correo para la organización.",
                "Unirse a la organización como organization owner.",
                "Confiar en ser enterprise owner sin un rol en la organización."
            ],
            "explanations": [
                "El acceso Read o Triage a repositorios no concede las vistas de alertas de Security overview organizativo.",
                "Las preferencias de notificación no crean los roles organizativos necesarios para ver datos de seguridad.",
                "La referencia de permisos indica a los enterprise owners que se unan como organization owners para ver los datos de repositorios de esa organización.",
                "Ser enterprise owner no concede por sí solo datos ilimitados de Security overview de todas las organizaciones."
            ],
            "concept": "Propiedad empresarial frente a acceso de seguridad organizativo",
            "hints": [
                "La propiedad de la empresa y el acceso de seguridad organizativo son roles distintos.",
                "Comprueba el rol dentro de la organización cuyos datos faltan."
            ]
        },
        "ghas-administration-024": {
            "prompt": "¿Qué operación REST literal enumera las configuraciones de seguridad disponibles para una organización?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Este endpoint crea una configuración de seguridad de organización, no vincula una existente.",
                "Este endpoint vincula una configuración existente a repositorios seleccionados con autorización adecuada.",
                "Este endpoint obtiene la configuración de seguridad asociada a un repositorio.",
                "Este endpoint enumera las configuraciones de seguridad disponibles para la organización."
            ],
            "concept": "API de consulta de configuraciones",
            "hints": [
                "Distingue leer definiciones de configuración de aplicarlas.",
                "Relaciona el método HTTP y el ámbito del recurso con la operación solicitada."
            ]
        },
        "ghas-administration-025": {
            "prompt": "Una automatización autorizada ya conoce el ID de una configuración. ¿Qué operación REST la aplica a repositorios seleccionados?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Este endpoint vincula una configuración existente a repositorios seleccionados con autorización adecuada.",
                "Este endpoint obtiene la configuración de seguridad asociada a un repositorio.",
                "Este endpoint enumera las configuraciones de seguridad disponibles para la organización.",
                "Este endpoint crea una configuración de seguridad de organización, no vincula una existente."
            ],
            "concept": "API de vinculación masiva de configuraciones",
            "hints": [
                "Distingue leer definiciones de configuración de aplicarlas.",
                "Relaciona el método HTTP y el ámbito del recurso con la operación solicitada."
            ]
        },
        "ghas-administration-026": {
            "prompt": "¿Qué operación REST literal lee la configuración de seguridad asociada a un solo repositorio?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Este endpoint vincula una configuración existente a repositorios seleccionados con autorización adecuada.",
                "Este endpoint obtiene la configuración de seguridad asociada a un repositorio.",
                "Este endpoint enumera las configuraciones de seguridad disponibles para la organización.",
                "Este endpoint crea una configuración de seguridad de organización, no vincula una existente."
            ],
            "concept": "Consulta de configuración del repositorio",
            "hints": [
                "Distingue leer definiciones de configuración de aplicarlas.",
                "Relaciona el método HTTP y el ámbito del recurso con la operación solicitada."
            ]
        },
        "ghas-administration-027": {
            "prompt": "Una llamada API para anular una habilitación obligatoria parece exitosa. ¿Qué verifica si realmente cambió algo?",
            "choices": [
                "Investigar cambios en las exclusiones de lenguajes de la configuración predeterminada.",
                "Revisar la configuración central en vez de forzar una anulación local.",
                "Volver a consultar los ajustes efectivos tras la llamada API.",
                "Comprobar la disponibilidad y la política de Actions necesarias."
            ],
            "explanations": [
                "Cambiar los lenguajes excluidos de la configuración predeterminada es una circunstancia documentada que puede romper la aplicación.",
                "Los administradores de repositorios no pueden alterar habilitaciones controladas explícitamente por una configuración obligatoria.",
                "Un intento API de anular una habilitación obligatoria puede parecer exitoso sin cambiar el ajuste.",
                "Deshabilitar Actions o impedir las acciones necesarias puede romper la aplicación de la configuración de análisis de código."
            ],
            "concept": "Verificación de automatización mediante estado efectivo",
            "hints": [
                "Verifica el estado efectivo, no solo la respuesta del transporte.",
                "La aplicación central y los permisos de automatización siguen siendo restricciones independientes."
            ]
        },
        "ghas-administration-028": {
            "prompt": "Una configuración obligatoria habilitaba el análisis de código, pero deja de ejecutarse tras cambiar políticas del repositorio. ¿Qué dependencia debe comprobarse?",
            "choices": [
                "Volver a consultar los ajustes efectivos tras la llamada API.",
                "Comprobar la disponibilidad y la política de Actions necesarias.",
                "Investigar cambios en las exclusiones de lenguajes de la configuración predeterminada.",
                "Revisar la configuración central en vez de forzar una anulación local."
            ],
            "explanations": [
                "Un intento API de anular una habilitación obligatoria puede parecer exitoso sin cambiar el ajuste.",
                "Deshabilitar Actions o impedir las acciones necesarias puede romper la aplicación de la configuración de análisis de código.",
                "Cambiar los lenguajes excluidos de la configuración predeterminada es una circunstancia documentada que puede romper la aplicación.",
                "Los administradores de repositorios no pueden alterar habilitaciones controladas explícitamente por una configuración obligatoria."
            ],
            "concept": "Requisitos de aplicación obligatoria de configuraciones",
            "hints": [
                "Verifica el estado efectivo, no solo la respuesta del transporte.",
                "La aplicación central y los permisos de automatización siguen siendo restricciones independientes."
            ]
        },
        "ghas-administration-029": {
            "prompt": "¿Qué opción de configuración en inglés habilita la configuración predeterminada de CodeQL donde hace falta y conserva los repositorios que ya usan la avanzada?",
            "choices": [
                "Enforce configuration",
                "Use as default for newly created repositories",
                "Enabled with advanced setup allowed",
                "Keep existing settings"
            ],
            "explanations": [
                "La aplicación obligatoria bloquea habilitaciones controladas; no crea un flujo personalizado aprobado.",
                "Un valor predeterminado para repositorios nuevos elige su vinculación futura, no el contenido detallado de un flujo personalizado.",
                "Esta opción habilita la configuración predeterminada donde CodeQL no está activo y permite la configuración avanzada existente.",
                "Conservar los ajustes existentes evita imponer un nuevo valor de habilitación para esa función."
            ],
            "concept": "Configuración predeterminada con flujos avanzados aprobados",
            "hints": [
                "Conserva el análisis aprobado y evalúa qué cambiará el despliegue central.",
                "La habilitación de funciones y el flujo de análisis detallado son capas distintas."
            ]
        },
        "ghas-administration-030": {
            "prompt": "Antes de aplicar funciones de seguridad de pago a muchos repositorios privados e internos, ¿qué revisión administrativa evita suponer que basta el plan base?",
            "choices": [
                "Revisar la licencia de funciones de pago antes de aplicar a gran escala.",
                "Aplicar manualmente una configuración adecuada tras la transferencia.",
                "Crear una configuración personalizada con las funciones necesarias.",
                "Comprobar la configuración vinculada y si es obligatoria."
            ],
            "explanations": [
                "Aplicar funciones de pago a repositorios privados o internos puede consumir uso con licencia y requiere la autorización correspondiente.",
                "Los valores predeterminados se aplican a repositorios recién creados, no automáticamente a los transferidos.",
                "Las configuraciones personalizadas permiten elegir una combinación adaptada de ajustes de habilitación.",
                "El comportamiento depende de la vinculación y de la aplicación obligatoria, no solo del nombre de la configuración."
            ],
            "concept": "Despliegue de seguridad consciente de licencias",
            "hints": [
                "Comprueba si el repositorio es nuevo, transferido o ya está gestionado.",
                "No supongas que un valor predeterminado cambia retroactivamente todos los repositorios."
            ]
        }
    },
    "pt-BR": {
        "ghas-ecosystem-001": {
            "prompt": "Qual produto do GitHub adquirido separadamente inclui análise de código e revisão de dependências?",
            "choices": [
                "GitHub Team",
                "GitHub Enterprise Cloud",
                "GitHub Code Security",
                "GitHub Secret Protection"
            ],
            "explanations": [
                "Team é um plano do GitHub, não o produto de análise de código adquirido separadamente.",
                "Enterprise Cloud é um plano de hospedagem, não um substituto da licença do produto de segurança aplicável.",
                "Este produto inclui análise de código, revisão de dependências e recursos premium do Dependabot.",
                "Este produto se concentra em detectar e prevenir a exposição de credenciais."
            ],
            "concept": "Escopo do produto Code Security",
            "hints": [
                "Diferencie a licença do produto do plano base do GitHub.",
                "Compare o tipo de risco que cada produto aborda."
            ]
        },
        "ghas-ecosystem-002": {
            "prompt": "Qual produto de segurança pago reúne detecção de vazamentos de credenciais e push protection?",
            "choices": [
                "GitHub Team",
                "GitHub Enterprise Cloud",
                "GitHub Code Security",
                "GitHub Secret Protection"
            ],
            "explanations": [
                "Team é um plano do GitHub, não o produto de análise de código adquirido separadamente.",
                "Enterprise Cloud é um plano de hospedagem, não um substituto da licença do produto de segurança aplicável.",
                "Este produto inclui análise de código, revisão de dependências e recursos premium do Dependabot.",
                "Este produto se concentra em detectar e prevenir a exposição de credenciais."
            ],
            "concept": "Escopo do produto Secret Protection",
            "hints": [
                "Diferencie a licença do produto do plano base do GitHub.",
                "Compare o tipo de risco que cada produto aborda."
            ]
        },
        "ghas-ecosystem-003": {
            "prompt": "Qual recurso de dependências uma organização pode usar sem comprar Code Security nem Secret Protection?",
            "choices": [
                "Verificação de segredos em repositórios privados",
                "Dependabot alerts",
                "Análise de código em repositórios privados",
                "Análise de código em repositórios públicos"
            ],
            "explanations": [
                "No GitHub.com, a verificação de segredos em repositórios privados exige a licença de Secret Protection ou de GHAS anterior aplicável.",
                "Os alertas básicos de vulnerabilidades do Dependabot estão disponíveis sem comprar nenhum dos dois produtos de segurança.",
                "No GitHub.com, exige um plano de organização elegível e licença de Code Security ou a licença anterior de GHAS aplicável.",
                "A análise de código é gratuita em repositórios públicos; a configuração e as permissões continuam necessárias."
            ],
            "concept": "Alertas básicos de dependências sem licença separada de cadeia de suprimentos",
            "hints": [
                "Verifique separadamente a visibilidade do repositório e a licença do recurso.",
                "Um rótulo geral de segurança não significa que todos os recursos tenham a mesma disponibilidade."
            ]
        },
        "ghas-ecosystem-004": {
            "prompt": "Uma analista autorizada quer Security overview de uma organização, não de um único repositório. Qual caminho da interface em inglês abre esse escopo?",
            "choices": [
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality",
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning"
            ],
            "explanations": [
                "Esta visualização contém alertas de exposição de credenciais para usuários autorizados.",
                "A aba da organização oferece Security overview dos repositórios acessíveis.",
                "O grafo de dependências é um inventário acessível por Insights no repositório.",
                "Esta visualização do repositório lista resultados de ferramentas de análise de código."
            ],
            "concept": "Navegação de segurança organizacional",
            "hints": [
                "Diferencie o escopo do repositório do escopo da organização.",
                "Considere se está examinando resultados ou o inventário de dependências."
            ]
        },
        "ghas-ecosystem-005": {
            "prompt": "Qual visualização de Security overview responde “Quais repositórios não adotaram os recursos de segurança?”?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume as tendências de detecção, correção e prevenção.",
                "Campaigns coordena o trabalho de correção direcionado e acompanha o progresso.",
                "Coverage mostra a adoção de recursos de segurança nos repositórios.",
                "Risk permite investigar repositórios e alertas que representam exposição atual."
            ],
            "concept": "Adoção de recursos de segurança",
            "hints": [
                "Decida se precisa de adoção, exposição, tendências ou trabalho coordenado.",
                "Relacione a pergunta à finalidade da visualização, não ao seu layout."
            ]
        },
        "ghas-ecosystem-006": {
            "prompt": "Qual visualização de Security overview permite investigar a exposição atual entre tipos de alerta?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume as tendências de detecção, correção e prevenção.",
                "Campaigns coordena o trabalho de correção direcionado e acompanha o progresso.",
                "Coverage mostra a adoção de recursos de segurança nos repositórios.",
                "Risk permite investigar repositórios e alertas que representam exposição atual."
            ],
            "concept": "Investigação de risco entre recursos",
            "hints": [
                "Decida se precisa de adoção, exposição, tendências ou trabalho coordenado.",
                "Relacione a pergunta à finalidade da visualização, não ao seu layout."
            ]
        },
        "ghas-ecosystem-007": {
            "prompt": "Onde Security overview resume as tendências de detecção, correção e prevenção?",
            "choices": [
                "Overview",
                "Campaigns",
                "Coverage",
                "Risk"
            ],
            "explanations": [
                "Overview resume as tendências de detecção, correção e prevenção.",
                "Campaigns coordena o trabalho de correção direcionado e acompanha o progresso.",
                "Coverage mostra a adoção de recursos de segurança nos repositórios.",
                "Risk permite investigar repositórios e alertas que representam exposição atual."
            ],
            "concept": "Painel de tendências de segurança",
            "hints": [
                "Decida se precisa de adoção, exposição, tendências ou trabalho coordenado.",
                "Relacione a pergunta à finalidade da visualização, não ao seu layout."
            ]
        },
        "ghas-ecosystem-008": {
            "prompt": "Qual visualização de Security overview coordena um esforço selecionado de correção entre repositórios?",
            "choices": [
                "Coverage",
                "Risk",
                "Overview",
                "Campaigns"
            ],
            "explanations": [
                "Coverage mostra a adoção de recursos de segurança nos repositórios.",
                "Risk permite investigar repositórios e alertas que representam exposição atual.",
                "Overview resume as tendências de detecção, correção e prevenção.",
                "Campaigns coordena o trabalho de correção direcionado e acompanha o progresso."
            ],
            "concept": "Visualização de coordenação de campanhas",
            "hints": [
                "Decida se precisa de adoção, exposição, tendências ou trabalho coordenado.",
                "Relacione a pergunta à finalidade da visualização, não ao seu layout."
            ]
        },
        "ghas-ecosystem-009": {
            "prompt": "Na interface do repositório em inglês, onde é possível consultar o inventário de dependências reconhecidas?",
            "choices": [
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality"
            ],
            "explanations": [
                "O grafo de dependências é um inventário acessível por Insights no repositório.",
                "Esta visualização do repositório lista resultados de ferramentas de análise de código.",
                "Esta visualização contém alertas de exposição de credenciais para usuários autorizados.",
                "A aba da organização oferece Security overview dos repositórios acessíveis."
            ],
            "concept": "Navegação do inventário de dependências",
            "hints": [
                "Diferencie o escopo do repositório do escopo da organização.",
                "Considere se está examinando resultados ou o inventário de dependências."
            ]
        },
        "ghas-ecosystem-010": {
            "prompt": "Qual caminho da interface em inglês lista os resultados do repositório do CodeQL e de outros analisadores estáticos integrados?",
            "choices": [
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality",
                "Repository > Insights > Dependency graph"
            ],
            "explanations": [
                "Esta visualização do repositório lista resultados de ferramentas de análise de código.",
                "Esta visualização contém alertas de exposição de credenciais para usuários autorizados.",
                "A aba da organização oferece Security overview dos repositórios acessíveis.",
                "O grafo de dependências é um inventário acessível por Insights no repositório."
            ],
            "concept": "Navegação dos resultados de análise de código",
            "hints": [
                "Diferencie o escopo do repositório do escopo da organização.",
                "Considere se está examinando resultados ou o inventário de dependências."
            ]
        },
        "ghas-ecosystem-011": {
            "prompt": "Uma pessoa autorizada precisa dos alertas de exposição de credenciais do repositório. Qual caminho da interface em inglês corresponde?",
            "choices": [
                "Repository > Insights > Dependency graph",
                "Repository > Security and quality > Code scanning",
                "Repository > Security and quality > Secret scanning",
                "Organization > Security and quality"
            ],
            "explanations": [
                "O grafo de dependências é um inventário acessível por Insights no repositório.",
                "Esta visualização do repositório lista resultados de ferramentas de análise de código.",
                "Esta visualização contém alertas de exposição de credenciais para usuários autorizados.",
                "A aba da organização oferece Security overview dos repositórios acessíveis."
            ],
            "concept": "Navegação dos alertas de credenciais",
            "hints": [
                "Diferencie o escopo do repositório do escopo da organização.",
                "Considere se está examinando resultados ou o inventário de dependências."
            ]
        },
        "ghas-ecosystem-012": {
            "prompt": "Qual detector compara versões de dependências reconhecidas com avisos de vulnerabilidades revisados?",
            "choices": [
                "Dependabot alerts",
                "Dependency review",
                "Code scanning",
                "Secret scanning"
            ],
            "explanations": [
                "Os alertas do Dependabot relacionam vulnerabilidades conhecidas a dependências do grafo de dependências.",
                "A revisão de dependências mostra o impacto das alterações de dependências em um pull request.",
                "A análise de código procura vulnerabilidades e erros de programação no código-fonte.",
                "A verificação de segredos identifica credenciais expostas, não versões vulneráveis de pacotes."
            ],
            "concept": "Detecção de dependências baseada em avisos",
            "hints": [
                "Identifique se a evidência é código, uma credencial ou um pacote.",
                "Os mecanismos de detecção usam entradas diferentes; compare essas entradas."
            ]
        },
        "ghas-ecosystem-013": {
            "prompt": "Qual recurso investiga comportamentos inseguros do código-fonte em vez de comparar versões de pacotes ou padrões de credenciais?",
            "choices": [
                "Dependabot alerts",
                "Dependency review",
                "Code scanning",
                "Secret scanning"
            ],
            "explanations": [
                "Os alertas do Dependabot relacionam vulnerabilidades conhecidas a dependências do grafo de dependências.",
                "A revisão de dependências mostra o impacto das alterações de dependências em um pull request.",
                "A análise de código procura vulnerabilidades e erros de programação no código-fonte.",
                "A verificação de segredos identifica credenciais expostas, não versões vulneráveis de pacotes."
            ],
            "concept": "Detecção de vulnerabilidades do código-fonte",
            "hints": [
                "Identifique se a evidência é código, uma credencial ou um pacote.",
                "Os mecanismos de detecção usam entradas diferentes; compare essas entradas."
            ]
        },
        "ghas-ecosystem-014": {
            "prompt": "Qual recurso procura material de autenticação exposto no conteúdo do repositório?",
            "choices": [
                "Secret scanning",
                "Dependabot alerts",
                "Dependency review",
                "Code scanning"
            ],
            "explanations": [
                "A verificação de segredos identifica credenciais expostas, não versões vulneráveis de pacotes.",
                "Os alertas do Dependabot relacionam vulnerabilidades conhecidas a dependências do grafo de dependências.",
                "A revisão de dependências mostra o impacto das alterações de dependências em um pull request.",
                "A análise de código procura vulnerabilidades e erros de programação no código-fonte."
            ],
            "concept": "Detecção de padrões de credenciais",
            "hints": [
                "Identifique se a evidência é código, uma credencial ou um pacote.",
                "Os mecanismos de detecção usam entradas diferentes; compare essas entradas."
            ]
        },
        "ghas-ecosystem-015": {
            "prompt": "Qual recurso explica o impacto de segurança das adições e remoções de dependências em um pull request?",
            "choices": [
                "Secret scanning",
                "Dependabot alerts",
                "Dependency review",
                "Code scanning"
            ],
            "explanations": [
                "A verificação de segredos identifica credenciais expostas, não versões vulneráveis de pacotes.",
                "Os alertas do Dependabot relacionam vulnerabilidades conhecidas a dependências do grafo de dependências.",
                "A revisão de dependências mostra o impacto das alterações de dependências em um pull request.",
                "A análise de código procura vulnerabilidades e erros de programação no código-fonte."
            ],
            "concept": "Revisão de alterações de dependências",
            "hints": [
                "Identifique se a evidência é código, uma credencial ou um pacote.",
                "Os mecanismos de detecção usam entradas diferentes; compare essas entradas."
            ]
        },
        "ghas-ecosystem-016": {
            "prompt": "Qual recurso mantém relações de dependências diretas e transitivas reconhecidas no GitHub em vez de exportar um retrato do inventário?",
            "choices": [
                "Software bill of materials (SBOM)",
                "Artifact attestations",
                "GitHub Advisory Database",
                "Dependency graph"
            ],
            "explanations": [
                "Um SBOM exporta um inventário de dependências; não comprova que todos os componentes são seguros.",
                "As atestações fornecem evidências verificáveis de proveniência e integridade de uma compilação.",
                "Essa base oferece avisos de vulnerabilidades publicados, não um inventário do repositório.",
                "O grafo de dependências inventaria dependências reconhecidas e suas relações."
            ],
            "concept": "Inventário de relações de dependências",
            "hints": [
                "Diferencie inventário, proveniência, informações de vulnerabilidades e automação de atualizações.",
                "Pense em qual artefato ou processo fornece a evidência necessária."
            ]
        },
        "ghas-ecosystem-017": {
            "prompt": "Qual controle pode impedir que uma credencial compatível entre em um repositório durante o push?",
            "choices": [
                "Code scanning",
                "Repository rulesets",
                "Push protection",
                "Dependency review"
            ],
            "explanations": [
                "Code scanning pode detectar vulnerabilidades do código-fonte ao analisar um pull request.",
                "Os rulesets podem exigir verificações e outras condições antes de aceitar alterações.",
                "Push protection bloqueia segredos compatíveis durante um push, antes que entrem no repositório.",
                "Dependency review fornece informações sobre dependências alteradas antes do merge."
            ],
            "concept": "Prevenção de credenciais no ponto de entrada",
            "hints": [
                "Posicione o controle no momento em que fornece informações.",
                "Diferencie um detector da política que exige seu resultado."
            ]
        },
        "ghas-ecosystem-018": {
            "prompt": "Qual mecanismo torna a aprovação de uma verificação uma condição obrigatória de merge em vez de apenas mostrar seus resultados?",
            "choices": [
                "Push protection",
                "Dependency review",
                "Code scanning",
                "Repository rulesets"
            ],
            "explanations": [
                "Push protection bloqueia segredos compatíveis durante um push, antes que entrem no repositório.",
                "Dependency review fornece informações sobre dependências alteradas antes do merge.",
                "Code scanning pode detectar vulnerabilidades do código-fonte ao analisar um pull request.",
                "Os rulesets podem exigir verificações e outras condições antes de aceitar alterações."
            ],
            "concept": "Detecção versus imposição",
            "hints": [
                "Posicione o controle no momento em que fornece informações.",
                "Diferencie um detector da política que exige seu resultado."
            ]
        },
        "ghas-ecosystem-019": {
            "prompt": "Qual recurso fornece evidências verificáveis de onde e como um artefato de compilação foi produzido?",
            "choices": [
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "O grafo de dependências inventaria dependências reconhecidas e suas relações.",
                "Um SBOM exporta um inventário de dependências; não comprova que todos os componentes são seguros.",
                "As atestações fornecem evidências verificáveis de proveniência e integridade de uma compilação.",
                "Essa base oferece avisos de vulnerabilidades publicados, não um inventário do repositório."
            ],
            "concept": "Evidências de proveniência de compilações",
            "hints": [
                "Diferencie inventário, proveniência, informações de vulnerabilidades e automação de atualizações.",
                "Pense em qual artefato ou processo fornece a evidência necessária."
            ]
        },
        "ghas-ecosystem-020": {
            "prompt": "Qual exportação fornece um inventário de componentes para análises posteriores da cadeia de suprimentos sem certificar que sejam seguros?",
            "choices": [
                "GitHub Advisory Database",
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations"
            ],
            "explanations": [
                "Essa base oferece avisos de vulnerabilidades publicados, não um inventário do repositório.",
                "O grafo de dependências inventaria dependências reconhecidas e suas relações.",
                "Um SBOM exporta um inventário de dependências; não comprova que todos os componentes são seguros.",
                "As atestações fornecem evidências verificáveis de proveniência e integridade de uma compilação."
            ],
            "concept": "Limites do inventário SBOM",
            "hints": [
                "Diferencie inventário, proveniência, informações de vulnerabilidades e automação de atualizações.",
                "Pense em qual artefato ou processo fornece a evidência necessária."
            ]
        },
        "ghas-ecosystem-021": {
            "prompt": "Onde um desenvolvedor pode consultar registros publicados de vulnerabilidades de vários ecossistemas, em vez de examinar as dependências de um repositório?",
            "choices": [
                "GitHub Advisory Database",
                "Dependency graph",
                "Software bill of materials (SBOM)",
                "Artifact attestations"
            ],
            "explanations": [
                "Essa base oferece avisos de vulnerabilidades publicados, não um inventário do repositório.",
                "O grafo de dependências inventaria dependências reconhecidas e suas relações.",
                "Um SBOM exporta um inventário de dependências; não comprova que todos os componentes são seguros.",
                "As atestações fornecem evidências verificáveis de proveniência e integridade de uma compilação."
            ],
            "concept": "Informações públicas de vulnerabilidades",
            "hints": [
                "Diferencie inventário, proveniência, informações de vulnerabilidades e automação de atualizações.",
                "Pense em qual artefato ou processo fornece a evidência necessária."
            ]
        },
        "ghas-ecosystem-022": {
            "prompt": "Qual recurso permite colaboração privada sobre uma vulnerabilidade do repositório e divulgação pública coordenada depois?",
            "choices": [
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "Uma política de segurança explica as versões com suporte e como relatar vulnerabilidades.",
                "Esse recurso oferece a pesquisadores um canal privado para relatar problemas aos mantenedores.",
                "Os avisos do repositório permitem discussão privada, correções coordenadas e publicação posterior.",
                "A base é uma coleção pesquisável de avisos de segurança publicados."
            ],
            "concept": "Fluxo de avisos coordenados",
            "hints": [
                "Diferencie instruções, recebimento confidencial, correção coordenada e dados públicos de referência.",
                "Considere o público e a etapa de divulgação."
            ]
        },
        "ghas-ecosystem-023": {
            "prompt": "Qual convenção de arquivo do repositório comunica as versões com suporte e o processo preferido para relatar vulnerabilidades?",
            "choices": [
                "GitHub Advisory Database",
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories"
            ],
            "explanations": [
                "A base é uma coleção pesquisável de avisos de segurança publicados.",
                "Uma política de segurança explica as versões com suporte e como relatar vulnerabilidades.",
                "Esse recurso oferece a pesquisadores um canal privado para relatar problemas aos mantenedores.",
                "Os avisos do repositório permitem discussão privada, correções coordenadas e publicação posterior."
            ],
            "concept": "Comunicação da política de segurança",
            "hints": [
                "Diferencie instruções, recebimento confidencial, correção coordenada e dados públicos de referência.",
                "Considere o público e a etapa de divulgação."
            ]
        },
        "ghas-ecosystem-024": {
            "prompt": "Qual recurso habilitado permite que um pesquisador externo relate confidencialmente uma possível falha aos mantenedores?",
            "choices": [
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database",
                "SECURITY.md"
            ],
            "explanations": [
                "Esse recurso oferece a pesquisadores um canal privado para relatar problemas aos mantenedores.",
                "Os avisos do repositório permitem discussão privada, correções coordenadas e publicação posterior.",
                "A base é uma coleção pesquisável de avisos de segurança publicados.",
                "Uma política de segurança explica as versões com suporte e como relatar vulnerabilidades."
            ],
            "concept": "Recebimento confidencial de vulnerabilidades",
            "hints": [
                "Diferencie instruções, recebimento confidencial, correção coordenada e dados públicos de referência.",
                "Considere o público e a etapa de divulgação."
            ]
        },
        "ghas-ecosystem-025": {
            "prompt": "Quem normalmente implementa e testa contra regressões uma correção no código da aplicação depois que a equipe de segurança explica o resultado?",
            "choices": [
                "Desenvolvedor do repositório",
                "Security manager",
                "Organization owner",
                "Pesquisador de segurança externo"
            ],
            "explanations": [
                "Desenvolvedores implementam e testam correções no código que mantêm; o acesso depende das permissões atribuídas.",
                "Security managers podem gerenciar configurações e alertas de segurança em toda a organização sem acesso geral de escrita no código.",
                "Organization owners podem atribuir funções de organização, incluindo security manager.",
                "Um pesquisador relata uma possível falha; relatar não concede permissões de administração do repositório."
            ],
            "concept": "Responsabilidade do desenvolvedor na correção",
            "hints": [
                "Diferencie o trabalho de implementação da autoridade em toda a organização.",
                "Escolha a função cuja responsabilidade habitual corresponde à tarefa."
            ]
        },
        "ghas-ecosystem-026": {
            "prompt": "Qual função de organização corresponde à triagem de alertas e ao gerenciamento de configurações de segurança entre repositórios sem escrita geral no código?",
            "choices": [
                "Security manager",
                "Organization owner",
                "Pesquisador de segurança externo",
                "Desenvolvedor do repositório"
            ],
            "explanations": [
                "Security managers podem gerenciar configurações e alertas de segurança em toda a organização sem acesso geral de escrita no código.",
                "Organization owners podem atribuir funções de organização, incluindo security manager.",
                "Um pesquisador relata uma possível falha; relatar não concede permissões de administração do repositório.",
                "Desenvolvedores implementam e testam correções no código que mantêm; o acesso depende das permissões atribuídas."
            ],
            "concept": "Responsabilidade de segurança especializada",
            "hints": [
                "Diferencie o trabalho de implementação da autoridade em toda a organização.",
                "Escolha a função cuja responsabilidade habitual corresponde à tarefa."
            ]
        },
        "ghas-ecosystem-027": {
            "prompt": "Quem pode atribuir a função predefinida security manager a uma pessoa ou equipe da organização?",
            "choices": [
                "Pesquisador de segurança externo",
                "Desenvolvedor do repositório",
                "Security manager",
                "Organization owner"
            ],
            "explanations": [
                "Um pesquisador relata uma possível falha; relatar não concede permissões de administração do repositório.",
                "Desenvolvedores implementam e testam correções no código que mantêm; o acesso depende das permissões atribuídas.",
                "Security managers podem gerenciar configurações e alertas de segurança em toda a organização sem acesso geral de escrita no código.",
                "Organization owners podem atribuir funções de organização, incluindo security manager."
            ],
            "concept": "Responsabilidade pela delegação de funções de segurança",
            "hints": [
                "Diferencie o trabalho de implementação da autoridade em toda a organização.",
                "Escolha a função cuja responsabilidade habitual corresponde à tarefa."
            ]
        },
        "ghas-ecosystem-028": {
            "prompt": "Qual participante relata uma possível vulnerabilidade, mas não recebe direitos administrativos pelo simples fato de relatá-la?",
            "choices": [
                "Security manager",
                "Organization owner",
                "Pesquisador de segurança externo",
                "Desenvolvedor do repositório"
            ],
            "explanations": [
                "Security managers podem gerenciar configurações e alertas de segurança em toda a organização sem acesso geral de escrita no código.",
                "Organization owners podem atribuir funções de organização, incluindo security manager.",
                "Um pesquisador relata uma possível falha; relatar não concede permissões de administração do repositório.",
                "Desenvolvedores implementam e testam correções no código que mantêm; o acesso depende das permissões atribuídas."
            ],
            "concept": "Relator versus administrador",
            "hints": [
                "Diferencie o trabalho de implementação da autoridade em toda a organização.",
                "Escolha a função cuja responsabilidade habitual corresponde à tarefa."
            ]
        },
        "ghas-ecosystem-029": {
            "prompt": "Qual uso de análise de código é gratuito no GitHub.com sem licença de Code Security para repositórios privados?",
            "choices": [
                "Análise de código em repositórios públicos",
                "Verificação de segredos em repositórios privados",
                "Dependabot alerts",
                "Análise de código em repositórios privados"
            ],
            "explanations": [
                "A análise de código é gratuita em repositórios públicos; a configuração e as permissões continuam necessárias.",
                "No GitHub.com, a verificação de segredos em repositórios privados exige a licença de Secret Protection ou de GHAS anterior aplicável.",
                "Os alertas básicos de vulnerabilidades do Dependabot estão disponíveis sem comprar nenhum dos dois produtos de segurança.",
                "No GitHub.com, exige um plano de organização elegível e licença de Code Security ou a licença anterior de GHAS aplicável."
            ],
            "concept": "Disponibilidade da análise de código público",
            "hints": [
                "Verifique separadamente a visibilidade do repositório e a licença do recurso.",
                "Um rótulo geral de segurança não significa que todos os recursos tenham a mesma disponibilidade."
            ]
        },
        "ghas-ecosystem-030": {
            "prompt": "Qual recurso exige especificamente Code Security ou a licença anterior de GHAS aplicável em repositórios privados de uma organização no GitHub.com?",
            "choices": [
                "Dependabot alerts",
                "Análise de código em repositórios privados",
                "Análise de código em repositórios públicos",
                "Verificação de segredos em repositórios privados"
            ],
            "explanations": [
                "Os alertas básicos de vulnerabilidades do Dependabot estão disponíveis sem comprar nenhum dos dois produtos de segurança.",
                "No GitHub.com, exige um plano de organização elegível e licença de Code Security ou a licença anterior de GHAS aplicável.",
                "A análise de código é gratuita em repositórios públicos; a configuração e as permissões continuam necessárias.",
                "No GitHub.com, a verificação de segredos em repositórios privados exige a licença de Secret Protection ou de GHAS anterior aplicável."
            ],
            "concept": "Licenciamento da análise de código privado",
            "hints": [
                "Verifique separadamente a visibilidade do repositório e a licença do recurso.",
                "Um rótulo geral de segurança não significa que todos os recursos tenham a mesma disponibilidade."
            ]
        },
        "ghas-ecosystem-031": {
            "prompt": "Security overview mostra zero alertas em um repositório. Qual etapa de interpretação é adequada antes de classificá-lo como de baixo risco?",
            "choices": [
                "Exportar os dados disponíveis da visualização como CSV.",
                "Verificar a cobertura antes de concluir que o risco é baixo.",
                "Comparar as permissões de alertas das duas pessoas.",
                "Usar o escopo da branch padrão ao interpretar as métricas."
            ],
            "explanations": [
                "Várias páginas de Security overview permitem exportar CSV para análises posteriores.",
                "Uma visualização sem alertas pode refletir detecção desabilitada ou falhas não detectadas, não ausência de vulnerabilidades.",
                "Os dados de Security overview são filtrados pelas permissões de quem os consulta.",
                "As visualizações de Security overview informam sobre as branches padrão dos repositórios acessíveis."
            ],
            "concept": "Interpretação de painéis sem alertas",
            "hints": [
                "Trate os resultados do painel como observações com escopo, não como prova universal.",
                "Verifique tanto o que foi medido quanto o que a pessoa tem permissão para ver."
            ]
        },
        "ghas-ecosystem-032": {
            "prompt": "Duas pessoas veem totais diferentes em Security overview da mesma organização. O que devem verificar antes de presumir inconsistência nos dados?",
            "choices": [
                "Verificar a cobertura antes de concluir que o risco é baixo.",
                "Comparar as permissões de alertas das duas pessoas.",
                "Usar o escopo da branch padrão ao interpretar as métricas.",
                "Exportar os dados disponíveis da visualização como CSV."
            ],
            "explanations": [
                "Uma visualização sem alertas pode refletir detecção desabilitada ou falhas não detectadas, não ausência de vulnerabilidades.",
                "Os dados de Security overview são filtrados pelas permissões de quem os consulta.",
                "As visualizações de Security overview informam sobre as branches padrão dos repositórios acessíveis.",
                "Várias páginas de Security overview permitem exportar CSV para análises posteriores."
            ],
            "concept": "Relatórios de segurança filtrados por permissões",
            "hints": [
                "Trate os resultados do painel como observações com escopo, não como prova universal.",
                "Verifique tanto o que foi medido quanto o que a pessoa tem permissão para ver."
            ]
        },
        "ghas-ecosystem-033": {
            "prompt": "Uma branch de trabalho tem um resultado ausente do painel organizacional. Qual escopo o analista deve considerar primeiro?",
            "choices": [
                "Verificar a cobertura antes de concluir que o risco é baixo.",
                "Comparar as permissões de alertas das duas pessoas.",
                "Usar o escopo da branch padrão ao interpretar as métricas.",
                "Exportar os dados disponíveis da visualização como CSV."
            ],
            "explanations": [
                "Uma visualização sem alertas pode refletir detecção desabilitada ou falhas não detectadas, não ausência de vulnerabilidades.",
                "Os dados de Security overview são filtrados pelas permissões de quem os consulta.",
                "As visualizações de Security overview informam sobre as branches padrão dos repositórios acessíveis.",
                "Várias páginas de Security overview permitem exportar CSV para análises posteriores."
            ],
            "concept": "Limite da branch padrão em Overview",
            "hints": [
                "Trate os resultados do painel como observações com escopo, não como prova universal.",
                "Verifique tanto o que foi medido quanto o que a pessoa tem permissão para ver."
            ]
        },
        "ghas-ecosystem-034": {
            "prompt": "Uma analista precisa combinar dados disponíveis de Security overview com dados de relatórios internos. Qual transferência suportada corresponde?",
            "choices": [
                "Comparar as permissões de alertas das duas pessoas.",
                "Usar o escopo da branch padrão ao interpretar as métricas.",
                "Exportar os dados disponíveis da visualização como CSV.",
                "Verificar a cobertura antes de concluir que o risco é baixo."
            ],
            "explanations": [
                "Os dados de Security overview são filtrados pelas permissões de quem os consulta.",
                "As visualizações de Security overview informam sobre as branches padrão dos repositórios acessíveis.",
                "Várias páginas de Security overview permitem exportar CSV para análises posteriores.",
                "Uma visualização sem alertas pode refletir detecção desabilitada ou falhas não detectadas, não ausência de vulnerabilidades."
            ],
            "concept": "Exportação de dados de Security overview",
            "hints": [
                "Trate os resultados do painel como observações com escopo, não como prova universal.",
                "Verifique tanto o que foi medido quanto o que a pessoa tem permissão para ver."
            ]
        },
        "ghas-ecosystem-035": {
            "prompt": "Qual prática desloca mais diretamente a descoberta de vulnerabilidades de uma revisão apenas no lançamento?",
            "choices": [
                "Continuar monitorando após incorporar correções à branch padrão.",
                "Fornecer informações de segurança aos desenvolvedores antes do merge.",
                "Combinar detecção antecipada com verificações obrigatórias de merge.",
                "Coordenar uma campanha focada na correção de alertas pendentes."
            ],
            "explanations": [
                "Novos avisos e alterações de código podem introduzir riscos após uma correção anterior.",
                "As informações antecipadas ajudam a evitar vulnerabilidades em vez de descobri-las apenas no lançamento.",
                "A detecção fornece resultados; as verificações obrigatórias decidem se as alterações podem prosseguir. Os controles se complementam.",
                "Uma campanha organiza correções pendentes; não previne todas as novas vulnerabilidades."
            ],
            "concept": "Momento das informações shift-left",
            "hints": [
                "Considere quando as informações chegam e se ainda é necessário corrigir a falha.",
                "Um controle preventivo e uma condição de lançamento podem abordar falhas diferentes."
            ]
        },
        "ghas-ecosystem-036": {
            "prompt": "Como devem se combinar as informações preventivas antecipadas e as condições obrigatórias de merge?",
            "choices": [
                "Coordenar uma campanha focada na correção de alertas pendentes.",
                "Continuar monitorando após incorporar correções à branch padrão.",
                "Fornecer informações de segurança aos desenvolvedores antes do merge.",
                "Combinar detecção antecipada com verificações obrigatórias de merge."
            ],
            "explanations": [
                "Uma campanha organiza correções pendentes; não previne todas as novas vulnerabilidades.",
                "Novos avisos e alterações de código podem introduzir riscos após uma correção anterior.",
                "As informações antecipadas ajudam a evitar vulnerabilidades em vez de descobri-las apenas no lançamento.",
                "A detecção fornece resultados; as verificações obrigatórias decidem se as alterações podem prosseguir. Os controles se complementam."
            ],
            "concept": "Controles complementares do SDLC",
            "hints": [
                "Considere quando as informações chegam e se ainda é necessário corrigir a falha.",
                "Um controle preventivo e uma condição de lançamento podem abordar falhas diferentes."
            ]
        },
        "ghas-ecosystem-037": {
            "prompt": "Qual tipo atual de campanha pode organizar resultados do código-fonte e acionar sugestões do Copilot Autofix?",
            "choices": [
                "Alertas de análise de código da branch padrão",
                "Alertas de verificação de segredos",
                "Alertas de vulnerabilidades do Dependabot",
                "Falhas de verificações de status obrigatórias"
            ],
            "explanations": [
                "As campanhas de análise de código incluem alertas da branch padrão e podem acionar sugestões do Copilot Autofix.",
                "As campanhas de segredos constam como versão prévia pública; o Copilot Autofix não realiza a correção de credenciais.",
                "A documentação atual lista campanhas de análise de código e segredos, não alertas do Dependabot como tipo de campanha.",
                "Uma verificação obrigatória com falha é um resultado de política de merge, não um tipo de alerta de campanha."
            ],
            "concept": "Suporte a campanhas de código",
            "hints": [
                "Use os tipos de alerta documentados, sem presumir que todas as listas de segurança são aceitas.",
                "Diferencie a coordenação da campanha do mecanismo real de correção."
            ]
        },
        "ghas-ecosystem-038": {
            "prompt": "Qual tipo de alerta de campanha documentado está em versão prévia pública e não recebe correções de credenciais do Copilot Autofix?",
            "choices": [
                "Alertas de verificação de segredos",
                "Alertas de vulnerabilidades do Dependabot",
                "Falhas de verificações de status obrigatórias",
                "Alertas de análise de código da branch padrão"
            ],
            "explanations": [
                "As campanhas de segredos constam como versão prévia pública; o Copilot Autofix não realiza a correção de credenciais.",
                "A documentação atual lista campanhas de análise de código e segredos, não alertas do Dependabot como tipo de campanha.",
                "Uma verificação obrigatória com falha é um resultado de política de merge, não um tipo de alerta de campanha.",
                "As campanhas de análise de código incluem alertas da branch padrão e podem acionar sugestões do Copilot Autofix."
            ],
            "concept": "Limite prévio de campanhas de segredos",
            "hints": [
                "Use os tipos de alerta documentados, sem presumir que todas as listas de segurança são aceitas.",
                "Diferencie a coordenação da campanha do mecanismo real de correção."
            ]
        },
        "ghas-ecosystem-039": {
            "prompt": "Os resultados conhecidos de um repositório foram corrigidos no mês passado. Qual prática trata o risco de alterações posteriores de código ou avisos?",
            "choices": [
                "Fornecer informações de segurança aos desenvolvedores antes do merge.",
                "Combinar detecção antecipada com verificações obrigatórias de merge.",
                "Coordenar uma campanha focada na correção de alertas pendentes.",
                "Continuar monitorando após incorporar correções à branch padrão."
            ],
            "explanations": [
                "As informações antecipadas ajudam a evitar vulnerabilidades em vez de descobri-las apenas no lançamento.",
                "A detecção fornece resultados; as verificações obrigatórias decidem se as alterações podem prosseguir. Os controles se complementam.",
                "Uma campanha organiza correções pendentes; não previne todas as novas vulnerabilidades.",
                "Novos avisos e alterações de código podem introduzir riscos após uma correção anterior."
            ],
            "concept": "Ciclo contínuo de segurança",
            "hints": [
                "Considere quando as informações chegam e se ainda é necessário corrigir a falha.",
                "Um controle preventivo e uma condição de lançamento podem abordar falhas diferentes."
            ]
        },
        "ghas-ecosystem-040": {
            "prompt": "Qual automação mantém atualizadas as versões de dependências compatíveis mesmo sem uma vulnerabilidade recém-divulgada?",
            "choices": [
                "Dependabot alerts",
                "Code scanning",
                "Dependabot version updates",
                "Dependabot security updates"
            ],
            "explanations": [
                "Os alertas notificam dependências com vulnerabilidades conhecidas; um alerta não é por si só um pull request de atualização.",
                "A análise de código examina o código-fonte da aplicação em vez de atualizar versões de pacotes.",
                "As atualizações de versão propõem upgrades de dependências mesmo quando nenhum aviso de vulnerabilidade os exige.",
                "As atualizações de segurança propõem alterações para corrigir vulnerabilidades conhecidas em dependências."
            ],
            "concept": "Manutenção rotineira de dependências",
            "hints": [
                "Diferencie manter as versões atualizadas de responder a uma vulnerabilidade identificada.",
                "Considere se o resultado desejado é um alerta, uma alteração de dependência ou análise do código."
            ]
        },
        "ghas-secrets-001": {
            "prompt": "Uma pessoa desenvolvedora confirma um token de acesso ativo à nuvem e encontra um alerta de análise de segredos. O que deve acontecer primeiro?",
            "choices": [
                "Revogue ou troque o token",
                "Descartar o alerta como falso positivo",
                "Esperar a próxima verificação agendada",
                "Reescrever o histórico do repositório"
            ],
            "explanations": [
                "A revogação no provedor impede o uso da credencial exposta.",
                "Descartar altera o estado do alerta, não o do token.",
                "Uma verificação posterior não contém uma credencial ativa.",
                "Limpar o histórico sozinho não invalida a credencial."
            ],
            "concept": "Revogação de credenciais",
            "hints": [
                "Qual ação invalida a própria credencial?",
                "Qual etapa reduz a exposição imediata?"
            ]
        },
        "ghas-secrets-002": {
            "prompt": "A análise de segredos é habilitada depois que um repositório existe há anos. Qual conteúdo está no escopo da análise do histórico Git?",
            "choices": [
                "Somente novos commits na branch padrão",
                "Todo o histórico Git em todas as branches do repositório",
                "Somente arquivos visíveis nas pontas atuais das branches do repositório",
                "Somente pull requests abertos após habilitar a análise de segredos"
            ],
            "explanations": [
                "A análise não se limita a commits feitos após a ativação.",
                "A análise de segredos examina o histórico do repositório em todas as branches.",
                "Somente os arquivos atuais omitem segredos removidos em revisões posteriores.",
                "A data de habilitação não exclui commits anteriores."
            ],
            "concept": "Escopo da verificação histórica",
            "hints": [
                "Que conteúdo do repositório pode preservar um vazamento antigo?",
                "Habilitar o recurso apaga commits anteriores?"
            ]
        },
        "ghas-secrets-003": {
            "prompt": "A proteção de push bloqueia um commit porque ele contém um token real de um provedor. O que a pessoa autora deve fazer para prosseguir com segurança?",
            "choices": [
                "Renomear o arquivo para o scanner não reconhecê-lo",
                "Desabilitar a análise de segredos do repositório",
                "Remova o token e troque-o se foi exposto",
                "Escolher um motivo de bypass e manter o token na alteração"
            ],
            "explanations": [
                "Renomear o arquivo não neutraliza uma credencial.",
                "Desabilitar a detecção enfraquece a proteção em vez de corrigir o segredo.",
                "Remover a credencial e tratar sua exposição resolve o bloqueio com segurança.",
                "O bypass permite o envio; não torna o token seguro."
            ],
            "concept": "Resposta a um push bloqueado",
            "hints": [
                "O que causou o bloqueio e o valor é uma credencial real?",
                "Qual correção remove o valor sensível em vez de contornar a detecção?"
            ]
        },
        "ghas-secrets-004": {
            "prompt": "Um alerta de análise de segredos não mostra um resultado de validade para um token detectado. O que esse status estabelece?",
            "choices": [
                "O alerta é necessariamente um falso positivo",
                "O token foi confirmado como revogado",
                "O token foi confirmado como ativo",
                "Esse resultado não permite concluir a validade"
            ],
            "explanations": [
                "O status de validade, por si só, não classifica a detecção como falsa.",
                "Um resultado desconhecido não confirma a revogação.",
                "A falta de validação não prova que o token esteja ativo.",
                "Desconhecido significa que o serviço não conseguiu determinar a validade."
            ],
            "concept": "Interpretação do status de validade",
            "hints": [
                "O que o resultado realmente informa sobre a verificação?",
                "A ausência de verificação prova que está ativo ou revogado?"
            ]
        },
        "ghas-secrets-005": {
            "prompt": "Uma equipe de resposta tem muitos alertas de segredos e quer investigar primeiro as credenciais que ainda podem funcionar. Qual sinal ajuda a priorizar essa análise?",
            "choices": [
                "Se uma verificação de validade informa que o segredo está ativo",
                "A quantidade de arquivos no repositório",
                "A idade do nome da branch",
                "Se o alerta foi criado em um dia útil"
            ],
            "explanations": [
                "Um resultado positivo indica que a credencial ainda pode ser utilizável.",
                "O tamanho do repositório não determina o status da credencial.",
                "A idade do nome da branch não se relaciona à validade.",
                "O dia de criação do alerta não verifica seu uso."
            ],
            "concept": "Priorização baseada em validade",
            "hints": [
                "Qual sinal se relaciona diretamente à possibilidade de uso da credencial?",
                "O que uma validação do provedor pode indicar a quem responde?"
            ]
        },
        "ghas-secrets-006": {
            "prompt": "Uma verificação de validade não consegue validar uma credencial detectada porque o provedor não oferece suporte a essas verificações. Qual é a interpretação correta?",
            "choices": [
                "O segredo pode ser publicado com segurança",
                "O status da credencial continua sem verificação",
                "O scanner deve remover o alerta automaticamente",
                "A proteção de push do repositório está desabilitada"
            ],
            "explanations": [
                "Uma verificação sem suporte não comprova segurança.",
                "Sem resultado do provedor, a validade continua desconhecida.",
                "A falta de validação não justifica remover a descoberta.",
                "Uma verificação de validade não informa a configuração da proteção de push."
            ],
            "concept": "Limites da verificação de validade",
            "hints": [
                "O provedor validou a credencial com sucesso?",
                "Qual conclusão cabe quando a validação não está disponível?"
            ]
        },
        "ghas-secrets-007": {
            "prompt": "Uma empresa emite credenciais em um formato que os padrões internos do GitHub não reconhecem. O que o Secret Protection pode adicionar para esse formato?",
            "choices": [
                "Uma entrada de registro do Dependabot",
                "Um conjunto de regras do repositório que reescreve commits",
                "Um padrão personalizado de análise de segredos",
                "Um pacote de consultas CodeQL para alertas de dependências"
            ],
            "explanations": [
                "Registros informam ao Dependabot onde os pacotes estão hospedados.",
                "Conjuntos de regras regem ações do repositório, mas não definem detectores de segredos.",
                "Padrões personalizados ampliam a detecção para formatos de segredos próprios da organização.",
                "Pacotes de consultas CodeQL analisam código-fonte, não formatos de segredos."
            ],
            "concept": "Detecção de credenciais personalizada",
            "hints": [
                "O formato é de um provedor ou exclusivo da organização?",
                "Qual mecanismo aceita um padrão para um segredo específico da organização?"
            ]
        },
        "ghas-secrets-008": {
            "prompt": "Uma pessoa administradora criou um padrão de segredo personalizado e quer avaliar as correspondências antes de publicá-lo. Qual etapa serve para essa análise?",
            "choices": [
                "Publique o padrão antes de habilitar a proteção de push",
                "Envie SARIF de um scanner externo",
                "Descarte alertas existentes como correspondências conhecidas",
                "Execute uma simulação do padrão com amostras representativas"
            ],
            "explanations": [
                "Publicar e habilitar a proteção de push são etapas posteriores de ativação, não um teste prévio.",
                "Envios SARIF incorporam resultados de análises externas, mas não pré-visualizam um padrão de segredos.",
                "Descartar alertas altera o tratamento, mas não testa como o detector corresponde.",
                "Uma simulação prévia exibe correspondências do padrão no conteúdo antes da publicação."
            ],
            "concept": "Simulação de padrões personalizados",
            "hints": [
                "O que deve ser verificado antes de ativar um novo detector?",
                "Qual fluxo de padrões permite pré-visualizar correspondências sem publicar?"
            ]
        },
        "ghas-secrets-009": {
            "prompt": "Durante um piloto, um padrão personalizado sinaliza identificadores sintéticos que não podem autenticar. O que a pessoa administradora deve ajustar antes de habilitar o detector?",
            "choices": [
                "Ajustar a expressão e testar exemplos positivos e negativos representativos",
                "Publicar e descartar todos os alertas resultantes",
                "Usar a mesma expressão como restrição de versão de pacote",
                "Excluir o repositório de todos os recursos de segurança"
            ],
            "explanations": [
                "Testar correspondências e não correspondências ajuda a reduzir falsos positivos.",
                "Publicar um padrão ruidoso transfere uma triagem evitável para quem responde.",
                "Restrições de pacote não definem formatos de segredos.",
                "Desativar todos os recursos de segurança excede o ajuste de um detector."
            ],
            "concept": "Ajuste de precisão de padrões",
            "hints": [
                "Que evidência mostra se uma correspondência proposta é um segredo real?",
                "Qual etapa refina a cobertura sem aceitar falsos positivos conhecidos?"
            ]
        },
        "ghas-secrets-010": {
            "prompt": "A simulação do padrão personalizado produz resultados aceitáveis. Qual sequência o torna um detector ativo?",
            "choices": [
                "Esperar o Dependabot importar o padrão",
                "Publicar o padrão e então habilitar a proteção de push para ele, se a prevenção for necessária",
                "Habilitar primeiro a proteção de push e depois descartar o padrão",
                "Criar uma regra de proteção de branch com a expressão regular"
            ],
            "explanations": [
                "O Dependabot não administra padrões de análise de segredos.",
                "O padrão precisa ser publicado antes de habilitar sua opção de proteção de push.",
                "Uma configuração de proteção não ativa um detector ainda não publicado.",
                "Regras de branch não registram padrões personalizados de segredos."
            ],
            "concept": "Sequência de ativação de padrões personalizados",
            "hints": [
                "Qual etapa do ciclo de vida vem após um teste bem-sucedido?",
                "A opção de prevenção se aplica antes de publicar o detector?"
            ]
        },
        "ghas-secrets-011": {
            "prompt": "Uma pessoa colaboradora contorna a proteção de push porque precisa brevemente de um token bloqueado para um teste. O que a equipe deve fazer em seguida?",
            "choices": [
                "Excluir o evento de auditoria do bypass",
                "Desabilitar todos os próximos alertas de segredos",
                "Avalie o segredo e revogue-o ou remova-o prontamente",
                "Presumir que o token é seguro porque o GitHub registrou um motivo"
            ],
            "explanations": [
                "Os registros de auditoria devem continuar disponíveis para análise.",
                "Suprimir alertas não resolve o risco da credencial.",
                "O bypass não elimina a exposição nem torna a credencial inofensiva.",
                "Registrar um motivo documenta a decisão, mas não neutraliza o segredo."
            ],
            "concept": "Ciclo de vida do bypass com correção adiada",
            "hints": [
                "O que um bypass altera e o que continua exposto?",
                "Qual acompanhamento trata tanto a exceção quanto o risco da credencial?"
            ]
        },
        "ghas-secrets-012": {
            "prompt": "Uma pessoa no GitHub.com tem proteção de push no nível do usuário habilitada, mas não ativou a análise de segredos no repositório. Qual afirmação descreve esse controle?",
            "choices": [
                "Analisa o histórico completo dos repositórios privados da conta",
                "Gera alertas do repositório para cada bypass sem análise de segredos",
                "Substitui as configurações organizacionais do Secret Protection",
                "Bloqueia pushes compatíveis de segredos em repositórios públicos"
            ],
            "explanations": [
                "A proteção do usuário não analisa todo o histórico privado.",
                "Um bypass não garante alerta com o controle somente do usuário.",
                "Controles da conta não substituem recursos do repositório ou da organização.",
                "A proteção no nível do usuário é um controle da conta para repositórios públicos."
            ],
            "concept": "Escopo de destino da proteção de push do usuário",
            "hints": [
                "Quais repositórios o recurso no nível da conta cobre?",
                "A prevenção do usuário equivale a gerar alertas no repositório?"
            ]
        },
        "ghas-secrets-013": {
            "prompt": "Uma empresa quer que colaboradores solicitem aprovação em vez de contornar por conta própria um bloqueio da proteção de push. Qual controle corresponde a essa política?",
            "choices": [
                "Bypass delegado para proteção de push",
                "Uma regra ignore do Dependabot",
                "Uma revisão de código obrigatória",
                "Uma verificação de validade da análise de segredos"
            ],
            "explanations": [
                "O bypass delegado encaminha uma solicitação de exceção para aprovação.",
                "Regras ignore do Dependabot afetam atualizações de dependências.",
                "Revisão de código não é o fluxo delegado para contornar a proteção de push.",
                "Verificações de validade avaliam credenciais detectadas, não aprovam bypasses."
            ],
            "concept": "Governança de bypass delegado",
            "hints": [
                "Qual ação exige uma pessoa aprovadora em vez de uma decisão apenas do colaborador?",
                "Qual recurso submete a autoridade de bypass a uma revisão?"
            ]
        },
        "ghas-secrets-014": {
            "prompt": "Uma equipe de segurança quer que um colaborador contorne um push específico bloqueado após revisão, sem excluir correspondências futuras. O que deve usar?",
            "choices": [
                "Desabilitar a proteção de push em todo o repositório",
                "Uma solicitação de bypass ou bypass aprovado para aquele push",
                "Uma exclusão global para o caminho do arquivo do segredo",
                "Um novo padrão personalizado que nunca corresponde"
            ],
            "explanations": [
                "Desabilitar a proteção é mais amplo que aprovar uma exceção revisada.",
                "O bypass se aplica ao push revisado, não cria uma exceção permanente.",
                "Uma exclusão de caminho pode ocultar detecções futuras naquele local.",
                "Um padrão que nunca corresponde desativa a detecção daquele formato."
            ],
            "concept": "Privilégios de bypass versus exclusões",
            "hints": [
                "A intenção é aprovar um push ou suprimir detecções posteriores?",
                "Qual mecanismo limita a exceção ao evento bloqueado?"
            ]
        },
        "ghas-secrets-015": {
            "prompt": "Uma pessoa administradora do repositório quer visibilidade quando alguém contorna a proteção de push no nível do repositório. O que deve esperar?",
            "choices": [
                "O push é rejeitado depois que o commit já foi armazenado",
                "Somente um alerta do Dependabot é gerado",
                "Pode ser criado um alerta de análise de segredos",
                "O bypass altera silenciosamente o segredo para um valor de teste"
            ],
            "explanations": [
                "O bypass permite o push, não o rejeita depois.",
                "Alertas do Dependabot tratam de dependências vulneráveis.",
                "Bypasses no nível do repositório podem gerar um alerta para acompanhamento.",
                "O bypass não altera o valor nem a exposição da credencial."
            ],
            "concept": "Visibilidade de bypass do repositório",
            "hints": [
                "O que deve continuar visível quando alguém sobrepõe a prevenção?",
                "Qual registro de detecção permite acompanhar um bypass?"
            ]
        },
        "ghas-secrets-016": {
            "prompt": "Um repositório recebe alterações por pushes de linha de comando e por uma edição web do GitHub. Qual afirmação sobre a proteção de push está correta?",
            "choices": [
                "Ela se aplica somente a commits criados no editor web",
                "Ela é uma verificação agendada após a mesclagem",
                "Ela verifica avisos de pacotes em vez de credenciais",
                "Vários pontos de envio compatíveis do GitHub"
            ],
            "explanations": [
                "O controle não se limita a commits criados na web.",
                "A proteção atua durante o push, não como verificação agendada após a mesclagem.",
                "Avisos de dependências são outro recurso de segurança.",
                "A proteção cobre pushes compatíveis por várias interfaces suportadas."
            ],
            "concept": "Pontos de entrada da proteção de push",
            "hints": [
                "Em que momento do fluxo de contribuição o segredo deve ser bloqueado?",
                "O controle se limita a uma interface ou tipo de descoberta?"
            ]
        },
        "ghas-secrets-017": {
            "prompt": "Uma pessoa cola uma credencial em um comentário de pull request, e não em um arquivo-fonte. Qual afirmação está correta?",
            "choices": [
                "Conteúdo compatível do pull request",
                "A análise de segredos verifica somente binários compilados",
                "Somente o CodeQL verifica comentários",
                "A credencial é segura porque está fora do histórico Git"
            ],
            "explanations": [
                "A análise de segredos inclui conteúdo compatível de pull requests, não apenas arquivos de código.",
                "A análise de binários não é o único escopo da análise de segredos.",
                "CodeQL não é o único recurso que pode inspecionar texto.",
                "Um segredo em um comentário também pode ficar exposto."
            ],
            "concept": "Exposição de segredos fora do código",
            "hints": [
                "Onde a credencial foi publicada?",
                "Texto em recursos de colaboração pode expor um segredo utilizável?"
            ]
        },
        "ghas-secrets-018": {
            "prompt": "O GitHub adiciona detecção para um novo token de provedor reconhecido. O que a análise de segredos pode fazer nos repositórios existentes?",
            "choices": [
                "Parar de analisar branches antigas",
                "Reanalisar o conteúdo para o novo tipo de segredo",
                "Alterar todos os commits históricos para remover valores correspondentes",
                "Trocar todas as credenciais sem envolver o provedor"
            ],
            "explanations": [
                "Novos detectores não desabilitam a análise de branches históricas.",
                "O GitHub verifica repositórios periodicamente quando novos tipos de segredos são adicionados.",
                "A detecção não reescreve o histórico de commits.",
                "A troca de credenciais é feita com o provedor emissor."
            ],
            "concept": "Nova verificação com detectores recentes",
            "hints": [
                "O que mudou na capacidade de detecção?",
                "O suporte a um padrão novo pode revelar exposições anteriores?"
            ]
        },
        "ghas-secrets-019": {
            "prompt": "Um scanner detecta um token emitido por um provedor e o notifica pela integração de parceiros. Como isso difere da detecção genérica?",
            "choices": [
                "Padrões de parceiros servem somente para manifestos de pacotes",
                "Ambos os tipos impedem que qualquer segredo seja enviado",
                "Padrões de parceiros podem incluir validação do provedor",
                "Padrões genéricos revogam automaticamente todos os tokens de provedores"
            ],
            "explanations": [
                "Manifestos de pacotes não definem o escopo dos padrões de parceiros.",
                "A detecção não garante que todo vazamento será bloqueado.",
                "A integração pode validar uma credencial conhecida; a detecção genérica não tem essa verificação específica do provedor.",
                "Um detector não revoga todas as credenciais por conta própria."
            ],
            "concept": "Padrões de provedores e genéricos",
            "hints": [
                "O tipo de credencial tem um provedor que pode validá-la?",
                "Qual diferença trata da integração do provedor, e não apenas do formato?"
            ]
        },
        "ghas-secrets-020": {
            "prompt": "Uma descoberta da análise de segredos parece corresponder a um dado de teste, mas a equipe não verificou se o valor é inerte. Qual é a resposta correta?",
            "choices": [
                "Encerrar porque diretórios de teste são sempre seguros",
                "Remover o alerta sem verificar a credencial",
                "Presumir que uma verificação de validade sempre identifica valores de teste",
                "Confirmar que o valor não funciona ou foi revogado antes de encerrar o alerta como resolvido"
            ],
            "explanations": [
                "Um local de teste não prova que o valor seja inofensivo.",
                "Remover um registro não verifica nem contém a credencial.",
                "Verificações de validade não são garantidas para todos os tipos de segredos.",
                "A resolução deve refletir evidências de que a credencial não pode ser usada."
            ],
            "concept": "Encerramento preciso de alertas",
            "hints": [
                "Que evidência justifica um encerramento seguro?",
                "O nome de um arquivo ou pasta prova que uma credencial é inerte?"
            ]
        },
        "ghas-secrets-021": {
            "prompt": "Um token aparece em um comentário de issue e em um commit. Qual resposta trata o risco da credencial nos dois locais?",
            "choices": [
                "Revogue ou troque o token e limpe as cópias expostas",
                "Encerrar o alerta do commit e deixar o comentário intacto",
                "Renomear a issue e continuar usando o token",
                "Executar CodeQL sem alterar a credencial"
            ],
            "explanations": [
                "Invalidar a credencial contém o uso indevido e a limpeza trata as cópias restantes.",
                "Encerrar um alerta não remove outra exposição.",
                "Renomear o conteúdo não invalida um token.",
                "A análise CodeQL não pode revogar uma credencial exposta."
            ],
            "concept": "Contenção de credenciais em vários locais",
            "hints": [
                "Onde mais o mesmo valor pode continuar exposto?",
                "Qual etapa neutraliza a reutilização independentemente da limpeza?"
            ]
        },
        "ghas-secrets-022": {
            "prompt": "Vários repositórios precisam detectar de forma consistente um formato de token emitido pela organização. Qual escopo de configuração permite compartilhar o detector?",
            "choices": [
                "No envio SARIF da análise de código",
                "Padrões personalizados da organização",
                "Na configuração local do Git de cada pessoa desenvolvedora",
                "Em um registro de pacotes do Dependabot"
            ],
            "explanations": [
                "Envios SARIF incorporam descobertas, não configuram detectores de credenciais.",
                "Padrões da organização podem ser aplicados a vários repositórios escolhidos.",
                "A configuração local do Git não publica um detector organizacional.",
                "Registros do Dependabot fornecem acesso a pacotes, não padrões de segredos."
            ],
            "concept": "Padrões personalizados da organização",
            "hints": [
                "Qual escopo deve administrar um detector compartilhado por vários repositórios?",
                "Qual configuração pertence ao próprio recurso de detecção de segredos?"
            ]
        },
        "ghas-secrets-023": {
            "prompt": "Um repositório contém uma credencial realista em um arquivo de teste. O que a pessoa mantenedora deve verificar antes de decidir não corrigi-la?",
            "choices": [
                "Que o repositório não tenha implantação de produção",
                "Que o alerta seja mais antigo que a branch",
                "Que o valor seja intencionalmente inoperante e não possa autenticar",
                "Que o nome do arquivo contenha a palavra test"
            ],
            "explanations": [
                "Código não produtivo também pode conter credenciais utilizáveis.",
                "A idade de uma branch não determina se um segredo funciona.",
                "Um valor de teste é inofensivo somente se não puder conceder acesso.",
                "O nome do arquivo não comprova que a credencial seja inerte."
            ],
            "concept": "Avaliação de risco de dados de teste",
            "hints": [
                "Qual propriedade do valor determina se ele é perigoso?",
                "O local prova que ele não pode autenticar?"
            ]
        },
        "ghas-secrets-024": {
            "prompt": "Uma equipe espera resultados de validade do provedor, mas o alerta não inclui essa informação. Qual requisito deve verificar?",
            "choices": [
                "Se o repositório tem um arquivo de bloqueio de pacotes",
                "Se o CodeQL usa a suíte security-extended",
                "Se o token foi confirmado na branch padrão",
                "Verifique o suporte ao tipo e a disponibilidade"
            ],
            "explanations": [
                "Um arquivo de bloqueio não se relaciona à validação de credenciais.",
                "A seleção de consultas CodeQL não habilita a validação do provedor.",
                "A branch, por si só, não determina o suporte a verificações de validade.",
                "Verificações de validade só estão disponíveis para tipos e configurações compatíveis."
            ],
            "concept": "Suporte à verificação de validade",
            "hints": [
                "O tipo de credencial detectado tem uma integração de validação compatível?",
                "Qual capacidade é separada de encontrar o segredo no código?"
            ]
        },
        "ghas-secrets-025": {
            "prompt": "Uma pessoa administradora analisa um bypass da proteção de push. Qual informação ajuda a entender e auditar a exceção?",
            "choices": [
                "A pessoa colaboradora, o motivo e o contexto do segredo ou push afetado",
                "Somente o cronograma do Dependabot do repositório",
                "O tamanho do banco de dados do CodeQL",
                "A quantidade de estrelas do repositório"
            ],
            "explanations": [
                "O registro do bypass fornece contexto sobre quem o fez e por quê.",
                "O cronograma de dependências não explica uma exceção da proteção de segredos.",
                "O tamanho do banco de dados não descreve o evento de bypass.",
                "Popularidade não comprova a justificativa da decisão."
            ],
            "concept": "Auditabilidade de bypass de push",
            "hints": [
                "Quais fatos explicam a decisão de sobrepor o bloqueio?",
                "Qual registro ajuda a investigar uma exceção posteriormente?"
            ]
        },
        "ghas-secrets-026": {
            "prompt": "A proteção de push sinaliza um valor que a pessoa autora confirma ser um marcador inoperante. Qual motivo de bypass descreve melhor a situação?",
            "choices": [
                "O provedor não tem política de segurança",
                "É um falso positivo",
                "É usado em testes",
                "É uma credencial de baixo impacto"
            ],
            "explanations": [
                "A política do provedor não determina se a correspondência é falsa.",
                "Um marcador confirmado que não é credencial constitui um falso positivo.",
                "O local de teste, por si só, não explica por que a detecção está incorreta.",
                "Uma credencial real de baixo impacto ainda é uma credencial."
            ],
            "concept": "Classificação de bypass por falso positivo",
            "hints": [
                "O valor detectado é realmente uma credencial?",
                "Qual motivo distingue uma detecção incorreta de um uso de teste intencional?"
            ]
        },
        "ghas-secrets-027": {
            "prompt": "Um repositório usa `.github/secret_scanning.yml` com `paths-ignore` para documentação gerada. Qual é a principal consequência?",
            "choices": [
                "A regra criptografa arquivos excluídos",
                "O arquivo suprime alertas do Dependabot para pacotes correspondentes",
                "Caminhos ficam fora da análise de segredos e da proteção de push",
                "Oculta alertas, mas mantém ativa a proteção de push nesses caminhos"
            ],
            "explanations": [
                "Exclusões de caminhos não criptografam nem neutralizam credenciais.",
                "Exclusões da análise de segredos não suprimem alertas de vulnerabilidades de pacotes.",
                "A configuração exclui caminhos correspondentes da análise de segredos e da proteção de push.",
                "A exclusão também afeta a proteção de push; não é apenas uma configuração de visibilidade de alertas."
            ],
            "concept": "Risco de exclusão da detecção",
            "hints": [
                "Qual cobertura de segurança um caminho ignorado reduz?",
                "Uma credencial real poderia aparecer no conteúdo excluído?"
            ]
        },
        "ghas-secrets-028": {
            "prompt": "A equipe de resposta precisa discutir uma credencial exposta em um repositório público. Qual prática evita criar outro vazamento?",
            "choices": [
                "Colar o token completo em uma issue pública como contexto",
                "Adicionar o token à descrição de um pull request",
                "Incluir o valor na mensagem de commit que nomeia o incidente",
                "Compartilhar uma referência redigida do alerta e coordenar em um canal restrito"
            ],
            "explanations": [
                "O texto de uma issue pública pode criar outra exposição.",
                "Descrições de pull requests também podem ficar expostas e ser analisadas.",
                "Mensagens de commit podem persistir no histórico do repositório.",
                "Uma referência redigida apoia a investigação sem divulgar a credencial novamente."
            ],
            "concept": "Colaboração segura em incidente de segredos",
            "hints": [
                "A conversa repetiria o valor sensível?",
                "Qual comunicação mantém o contexto sem reproduzir a credencial?"
            ]
        },
        "ghas-secrets-029": {
            "prompt": "Um segredo é encontrado em um commit antigo, mas está ausente do arquivo atual. Por que ainda pode exigir resposta?",
            "choices": [
                "O valor permanece no histórico Git e ainda pode ser utilizável",
                "A análise de segredos informa somente valores na branch atual",
                "Um commit antigo invalida automaticamente a credencial",
                "O alerta prova que ninguém copiou o token"
            ],
            "explanations": [
                "Remover um valor do arquivo mais recente não apaga commits anteriores nem o invalida.",
                "A análise de segredos cobre o histórico das branches do repositório.",
                "A idade do commit não revoga uma credencial.",
                "A detecção não determina se alguém copiou o valor."
            ],
            "concept": "Investigação de exposição histórica",
            "hints": [
                "O valor pode continuar acessível em uma revisão anterior?",
                "O fato de desaparecer do arquivo atual revoga uma credencial?"
            ]
        },
        "ghas-secrets-030": {
            "prompt": "Um repositório privado de uma organização precisa de análise de segredos e proteção de push. Qual direito de Advanced Security é pertinente?",
            "choices": [
                "GitHub Packages",
                "GitHub Secret Protection",
                "GitHub Code Security",
                "GitHub Actions"
            ],
            "explanations": [
                "Packages hospeda artefatos e não é o produto de segurança.",
                "Secret Protection inclui recursos de análise de segredos e proteção de push.",
                "Code Security se concentra em análise de código e recursos avançados da cadeia de suprimentos.",
                "Actions executa fluxos de automação, não concede esse direito do produto."
            ],
            "concept": "Escopo do produto Secret Protection",
            "hints": [
                "O requisito é detectar credenciais ou analisar código e dependências?",
                "Qual produto reúne recursos que previnem e detectam vazamentos de segredos?"
            ]
        },
        "ghas-secrets-031": {
            "prompt": "Uma expressão regular personalizada deve detectar um novo formato de credencial sem corresponder a IDs comuns. Como a pessoa autora deve avaliar esse objetivo?",
            "choices": [
                "Substituir a expressão regular pelo nome do repositório",
                "Comparar a quantidade de alertas do Dependabot antes e depois",
                "Executar uma simulação com exemplos que devem corresponder e valores semelhantes que não devem",
                "Testar somente uma credencial conhecida e publicar imediatamente"
            ],
            "explanations": [
                "O nome do repositório não descreve a sintaxe de credenciais.",
                "A contagem de alertas de dependências não mede a precisão do padrão de segredos.",
                "Exemplos positivos e negativos revelam omissões e falsos positivos.",
                "Um exemplo não demonstra precisão diante de strings semelhantes."
            ],
            "concept": "Validação de cobertura de padrões",
            "hints": [
                "Quais exemplos testam se a expressão é útil e seletiva?",
                "O que um único teste positivo pode deixar de revelar?"
            ]
        },
        "ghas-secrets-032": {
            "prompt": "Uma equipe habilita a proteção de push e presume que nenhuma credencial poderá chegar ao repositório. Qual avaliação é mais precisa?",
            "choices": [
                "Ela revoga retroativamente todos os segredos do histórico",
                "Ela verifica somente manifestos de dependências",
                "Ela impede o compartilhamento de credenciais fora do GitHub",
                "Bloqueia pushes compatíveis, não todo vazamento"
            ],
            "explanations": [
                "A proteção de push não revoga credenciais históricas.",
                "Manifestos de dependências não são seu único escopo.",
                "Um controle do repositório não pode impedir toda divulgação externa.",
                "A cobertura depende dos tipos de segredos e fluxos de push suportados; não é uma garantia universal."
            ],
            "concept": "Limites de detecção da proteção de push",
            "hints": [
                "Que cobertura um controle preventivo pode garantir razoavelmente?",
                "Um segredo sem suporte ou já exposto poderia ficar fora desse controle?"
            ]
        },
        "ghas-secrets-033": {
            "prompt": "Uma organização vê alertas recorrentes para um formato de credencial proprietário que os detectores internos não reconhecem. Qual configuração resolve essa lacuna?",
            "choices": [
                "Definir e testar um padrão personalizado de análise de segredos",
                "Adicionar o formato da credencial a `dependabot.yml`",
                "Criar um banco de dados CodeQL para o token",
                "Adicionar um identificador SPDX ao repositório"
            ],
            "explanations": [
                "Um padrão personalizado adiciona detecção para formatos de segredos próprios da organização.",
                "A configuração do Dependabot controla atualizações de dependências.",
                "Um banco CodeQL modela o código-fonte para análise por consultas.",
                "Identificadores SPDX descrevem licenças de software."
            ],
            "concept": "Ampliação da cobertura de detecção de segredos",
            "hints": [
                "Que tipo de detector falta para esse formato de credencial?",
                "Qual recurso permite definir um padrão próprio de correspondência?"
            ]
        },
        "ghas-secrets-034": {
            "prompt": "Uma integração do repositório grava conteúdo pela API REST do GitHub. Qual afirmação a equipe deve usar ao avaliar a cobertura da proteção de push?",
            "choices": [
                "Substituir a integração pelo Dependabot",
                "Verificar o comportamento documentado da API e habilitar a proteção compatível no nível do repositório",
                "Presumir que toda gravação pela API ignora verificações de segredos",
                "Presumir que a proteção do usuário cria alertas do repositório para gravações pela API"
            ],
            "explanations": [
                "O Dependabot não protege gravações pela API contra exposição de segredos.",
                "O comportamento da API e a configuração do repositório determinam as proteções aplicáveis.",
                "Não é seguro presumir que todas as gravações ignoram os controles.",
                "A proteção do usuário não substitui cobertura nem alertas do repositório."
            ],
            "concept": "Proteção de gravações pela API",
            "hints": [
                "Qual interface de gravação é usada e o que a documentação promete?",
                "O que deve ser verificado antes de afirmar que uma integração está coberta ou isenta?"
            ]
        },
        "ghas-secrets-035": {
            "prompt": "Somente um pequeno grupo de resposta deve aprovar solicitações de bypass da proteção de push. Qual configuração atende melhor a esse requisito?",
            "choices": [
                "Desabilitar a proteção de push na empresa",
                "Usar um tópico do repositório como sinal de aprovação",
                "Configurar bypass delegado com uma equipe revisora de escopo apropriado",
                "Dar permissões de proprietária da organização a cada colaborador"
            ],
            "explanations": [
                "Desabilitar a proteção remove completamente o fluxo de aprovação.",
                "Um tópico não autoriza nem registra uma decisão de bypass.",
                "O bypass delegado permite atribuir deliberadamente a autoridade de aprovação.",
                "O acesso de proprietária da organização é mais amplo que o necessário."
            ],
            "concept": "Revisão de bypass com privilégio mínimo",
            "hints": [
                "Quem precisa de autoridade para aprovar uma exceção?",
                "Qual configuração restringe o poder de aprovação sem remover o bloqueio?"
            ]
        },
        "ghas-secrets-036": {
            "prompt": "Uma chave de API real é válida, mas atualmente concede acesso somente a um serviço de teste de baixo risco. Qual motivo de bypass é mais preciso do que chamá-la de falso positivo?",
            "choices": [
                "É um falso positivo",
                "O scanner encontrou um aviso de pacote",
                "A chave não é uma credencial",
                "É usada em testes"
            ],
            "explanations": [
                "Uma chave válida não é uma correspondência falsa só porque seu impacto parece limitado.",
                "A análise de segredos não relata avisos de pacotes.",
                "O cenário confirma que o valor é uma chave de API real.",
                "Uma credencial real usada em teste não é automaticamente um falso positivo."
            ],
            "concept": "Falso positivo versus impacto menor",
            "hints": [
                "A descoberta está incorreta ou um segredo real é usado em contexto limitado?",
                "Qual distinção preserva um registro preciso da detecção?"
            ]
        },
        "ghas-secrets-037": {
            "prompt": "Um padrão personalizado detecta uma credencial própria no histórico confirmado. Qual configuração adicional permite bloquear futuras introduções por pushes compatíveis?",
            "choices": [
                "Habilitar a proteção de push para o padrão personalizado publicado",
                "Adicionar o padrão a `dependabot.yml`",
                "Criar uma suíte de consultas de análise de código",
                "Desabilitar a análise histórica"
            ],
            "explanations": [
                "Um padrão personalizado publicado pode ser habilitado para proteção de push.",
                "A configuração do Dependabot não controla a prevenção de segredos no push.",
                "Suítes de consultas analisam código, não bloqueiam esse formato de credencial.",
                "Parar a análise histórica não impede novos pushes."
            ],
            "concept": "Detecção versus prevenção de segredos",
            "hints": [
                "Qual recurso atua antes que um push compatível chegue ao repositório?",
                "Detectar equivale a bloquear exposições futuras?"
            ]
        },
        "ghas-secrets-038": {
            "prompt": "Uma equipe quer que as pessoas responsáveis pela segurança do repositório recebam alertas da análise de segredos. O que uma pessoa administradora deve configurar?",
            "choices": [
                "Um identificador de licença SPDX",
                "Revise o acesso a alertas e notificações",
                "A URL do registro do gerenciador de pacotes",
                "Um modo de build do CodeQL"
            ],
            "explanations": [
                "Identificadores SPDX descrevem licenças, não destinatários de alertas.",
                "Acesso e notificações determinam quem pode ver ou receber alertas compatíveis.",
                "URLs de registro configuram a obtenção de pacotes.",
                "O modo de build afeta a análise de código compilado."
            ],
            "concept": "Notificações acionáveis de segredos",
            "hints": [
                "Quem precisa de acesso para revisar e corrigir o alerta?",
                "Qual configuração rege visibilidade e entrega, e não a sintaxe da detecção?"
            ]
        },
        "ghas-secrets-039": {
            "prompt": "Uma pessoa desenvolvedora remove um token vazado do arquivo mais recente e encerra o alerta. Que evidência quem responde ainda deve buscar?",
            "choices": [
                "Um download bem-sucedido do pacote de consultas CodeQL",
                "Uma verificação de revisão de dependências aprovada",
                "Confirmação do provedor de que a credencial foi revogada ou substituída",
                "Um tamanho menor do repositório"
            ],
            "explanations": [
                "Baixar um pacote de consultas não se relaciona à contenção de credenciais.",
                "A revisão de dependências verifica mudanças em pacotes, não o status do token.",
                "A confirmação do provedor verifica que a credencial exposta não pode ser usada.",
                "O tamanho do repositório não informa a validade do token."
            ],
            "concept": "Verificação da contenção de credenciais",
            "hints": [
                "O que comprova que a credencial original não pode mais ser usada?",
                "Excluir a ocorrência visível invalida cópias já obtidas?"
            ]
        },
        "ghas-secrets-040": {
            "prompt": "A análise de segredos relata uma credencial meses depois de ela ter sido confirmada. Qual afirmação descreve melhor o momento?",
            "choices": [
                "A credencial ficou exposta somente quando o alerta foi criado",
                "O alerta tardio prova que a credencial nunca foi usada",
                "A detecção redefine automaticamente a data de expiração da credencial",
                "O horário do alerta indica quando houve detecção, não necessariamente quando começou a exposição"
            ],
            "explanations": [
                "O horário do alerta não define quando o valor se tornou público pela primeira vez.",
                "A detecção tardia não comprova se a credencial foi usada.",
                "A análise não altera a expiração da credencial no provedor.",
                "Uma descoberta pode ocorrer depois do commit e da exposição inicial."
            ],
            "concept": "Momento da detecção versus exposição",
            "hints": [
                "Quando o valor apareceu pela primeira vez em um local acessível?",
                "O horário do alerta necessariamente marca o início da exposição?"
            ]
        },
        "ghas-supply-001": {
            "prompt": "Um pacote vulnerável não aparece diretamente em um manifesto, mas consta no gráfico de dependências. O que a pessoa mantenedora deve inspecionar para saber como ele chegou ao projeto?",
            "choices": [
                "Somente a licença SPDX do pacote",
                "O caminho da dependência transitiva",
                "O histórico de bypass da análise de segredos",
                "A suíte de consultas CodeQL"
            ],
            "explanations": [
                "Metadados de licença não mostram como um pacote foi incluído.",
                "A visualização de caminhos conecta relações indiretas a uma dependência direta.",
                "O histórico de bypass registra exceções de segredos, não a origem do pacote.",
                "Suítes de consultas analisam código-fonte."
            ],
            "concept": "Rastreamento de dependências indiretas",
            "hints": [
                "Qual relação conecta o pacote a uma dependência declarada?",
                "Qual detalhe do gráfico explica como um componente transitivo chegou ao projeto?"
            ]
        },
        "ghas-supply-002": {
            "prompt": "Uma equipe de compras solicita uma lista legível por máquina das dependências atuais de um repositório. Qual artefato do GitHub atende ao pedido?",
            "choices": [
                "Um registro de bypass do Dependabot",
                "Um conjunto de regras de proteção de branch",
                "Uma SBOM exportada no formato SPDX",
                "Um arquivo SARIF de análise de código"
            ],
            "explanations": [
                "Um registro de bypass documenta uma exceção da proteção de segredos.",
                "Conjuntos de regras regem políticas, não produzem inventários de software.",
                "O GitHub pode exportar o gráfico de dependências como uma SBOM SPDX.",
                "SARIF contém resultados de análise de código, não o inventário de dependências."
            ],
            "concept": "Formato nativo de exportação de SBOM",
            "hints": [
                "Qual artefato inventaria componentes de software para outras ferramentas?",
                "Qual formato padrão a exportação do gráfico de dependências do GitHub usa?"
            ]
        },
        "ghas-supply-003": {
            "prompt": "Um build resolve dependências ausentes dos manifestos analisáveis do repositório. Qual mecanismo pode adicionar esse snapshot de build ao GitHub?",
            "choices": [
                "Envio SARIF",
                "Um padrão personalizado de segredos",
                "Triagem automática do Dependabot",
                "Dependency submission API"
            ],
            "explanations": [
                "SARIF incorpora descobertas de análise de código.",
                "Padrões de segredos detectam formatos de credenciais.",
                "A triagem automática altera o tratamento de alertas, não o inventário.",
                "O envio de dependências adiciona dados resolvidos ao gráfico."
            ],
            "concept": "Snapshots complementares de dependências",
            "hints": [
                "Que dados faltam na análise estática dos manifestos?",
                "Qual interface envia um inventário de build resolvido?"
            ]
        },
        "ghas-supply-004": {
            "prompt": "Um pull request altera um arquivo de bloqueio e atualiza um pacote transitivo. Qual recurso mostra o impacto das dependências antes da mesclagem?",
            "choices": [
                "Revisão de dependências",
                "Somente alertas do Dependabot",
                "Análise do histórico de segredos",
                "Análise de fluxo de dados do CodeQL"
            ],
            "explanations": [
                "A revisão de dependências mostra pacotes adicionados, removidos e atualizados no pull request.",
                "Alertas relatam dependências vulneráveis, mas não mostram toda a diferença de alterações.",
                "A análise do histórico procura credenciais expostas.",
                "A análise de fluxo de dados avalia caminhos no código da aplicação."
            ],
            "concept": "Revisão de alterações no arquivo de bloqueio",
            "hints": [
                "O que mudou no pull request além da entrada direta do manifesto?",
                "Qual visualização resume adições e alterações de versão antes da mesclagem?"
            ]
        },
        "ghas-supply-005": {
            "prompt": "A proteção de branch atualmente trata a revisão de dependências como informativa. Qual controle transforma o resultado do fluxo em uma condição obrigatória para mesclar?",
            "choices": [
                "Definir um cronograma de atualizações do Dependabot",
                "Exija a revisão de dependências antes de mesclar",
                "Habilitar o gráfico de dependências sem exigir uma verificação",
                "Adicionar uma entrada CODEOWNERS para o arquivo de bloqueio"
            ],
            "explanations": [
                "Cronogramas criam propostas de atualização, não requisitos de mesclagem.",
                "Uma verificação com falha bloqueia a mesclagem somente quando a política do repositório exige aprovação.",
                "O recurso de inventário sozinho não aplica uma verificação de status.",
                "CODEOWNERS solicita revisão, mas não torna esta ação um status obrigatório."
            ],
            "concept": "Verificações obrigatórias de revisão de dependências",
            "hints": [
                "O que transforma o resultado de um fluxo em uma condição de aplicação?",
                "Uma verificação com falha bloqueia sem uma regra que exija aprovação?"
            ]
        },
        "ghas-supply-006": {
            "prompt": "Um pull request introduz um pacote sob uma licença proibida pela política da empresa. Qual configuração da ação de revisão de dependências pode aplicar essa política?",
            "choices": [
                "Uma suíte de consultas CodeQL",
                "Uma credencial `registries` do Dependabot",
                "Uma lista de licenças permitidas ou negadas",
                "Uma entrada `paths-ignore` da análise de segredos"
            ],
            "explanations": [
                "Suítes de consultas selecionam regras de análise de código.",
                "Credenciais de registro autenticam a obtenção de pacotes.",
                "A ação de revisão de dependências pode comparar identificadores de licença com a política.",
                "Exclusões de caminho configuram o escopo da análise de segredos."
            ],
            "concept": "Política de licenças de dependências",
            "hints": [
                "Qual verificação do pull request avalia licenças dos pacotes alterados?",
                "A restrição trata dos termos do pacote ou da detecção de segredos?"
            ]
        },
        "ghas-supply-007": {
            "prompt": "Um repositório quer que seu fluxo de revisão de dependências falhe somente quando uma nova vulnerabilidade tiver gravidade alta ou superior. Qual configuração expressa esse limite?",
            "choices": [
                "`schedule: weekly`",
                "`paths-ignore: high`",
                "`query-filters: security-extended`",
                "`fail-on-severity: high`"
            ],
            "explanations": [
                "Um cronograma controla quando o Dependabot procura atualizações.",
                "`paths-ignore` não é uma opção de gravidade da revisão de dependências.",
                "Filtros de consultas configuram análise de código, não revisão de dependências.",
                "`fail-on-severity` define o limite de gravidade das vulnerabilidades para a ação."
            ],
            "concept": "Limites de gravidade na revisão",
            "hints": [
                "Qual entrada da ação nomeia diretamente um limite de gravidade?",
                "Qual opção distingue descobertas altas das de menor gravidade?"
            ]
        },
        "ghas-supply-008": {
            "prompt": "Um novo aviso é publicado para um pacote já presente no gráfico de dependências do repositório. Qual recurso notifica quem mantém o projeto?",
            "choices": [
                "Alertas do Dependabot",
                "Atualizações de versão do Dependabot",
                "Envio de dependências",
                "Análise de segredos"
            ],
            "explanations": [
                "Alertas do Dependabot relacionam dependências a avisos do GitHub Advisory Database.",
                "Atualizações de versão mantêm pacotes, mas não notificam vulnerabilidades.",
                "O envio adiciona dados de dependências, não avisos de vulnerabilidade.",
                "A análise de segredos detecta credenciais expostas."
            ],
            "concept": "Escopo dos alertas do Dependabot",
            "hints": [
                "O que relaciona novos dados de vulnerabilidade a pacotes existentes?",
                "Qual recurso relata dependências vulneráveis conhecidas no gráfico?"
            ]
        },
        "ghas-supply-009": {
            "prompt": "Uma dependência está várias versões atrasada, mas nenhum aviso marca sua versão como vulnerável. Qual afirmação distingue as duas condições?",
            "choices": [
                "Ela não pode aparecer no gráfico de dependências",
                "Desatualizada não significa vulnerável",
                "Ela precisa ter um alerta de segurança do Dependabot",
                "É seguro ignorar todas as atualizações futuras"
            ],
            "explanations": [
                "O gráfico pode listar pacotes mesmo sem alertas.",
                "Estar atrás da versão mais recente não equivale a corresponder a uma versão vulnerável conhecida.",
                "Alertas dependem de vulnerabilidades conhecidas, não apenas de uma versão mais recente.",
                "Um pacote desatualizado ainda pode exigir manutenção ou atualizações de segurança futuras."
            ],
            "concept": "Vulnerável versus desatualizado",
            "hints": [
                "A preocupação é uma versão afetada conhecida ou apenas uma versão antiga?",
                "Que evidência gera um alerta de vulnerabilidade, e não somente uma atualização rotineira?"
            ]
        },
        "ghas-supply-010": {
            "prompt": "Um repositório tem um alerta do Dependabot para um pacote vulnerável, mas não recebe uma correção proposta. O que a pessoa administradora deve verificar primeiro?",
            "choices": [
                "Se o README tem um cabeçalho SPDX",
                "Se o CodeQL verifica conforme um cronograma",
                "Se as atualizações de segurança estão habilitadas",
                "Se o repositório tem um padrão personalizado de segredos"
            ],
            "explanations": [
                "Um cabeçalho SPDX não configura o Dependabot.",
                "O cronograma do CodeQL é independente das atualizações de segurança.",
                "Pull requests de atualização de segurança são criados quando o recurso está habilitado e há uma correção disponível.",
                "A configuração de padrões de segredos não habilita atualizações de pacotes."
            ],
            "concept": "Habilitação de atualizações de segurança",
            "hints": [
                "Qual recurso cria uma proposta de correção de pacote após um alerta?",
                "Somente alertas garantem um pull request de atualização?"
            ]
        },
        "ghas-supply-011": {
            "prompt": "Uma organização habilita alertas do Dependabot, mas quer pull requests automáticos para pacotes vulneráveis. Qual distinção importa?",
            "choices": [
                "Alertas mesclam automaticamente todas as atualizações de pacotes",
                "Atualizações de versão são necessárias para criar alertas de vulnerabilidade",
                "Atualizações de segurança desabilitam o gráfico de dependências",
                "Alertas sinalizam riscos; atualizações podem propor correções"
            ],
            "explanations": [
                "O Dependabot não mescla automaticamente todas as alterações propostas.",
                "Alertas dependem de dados de dependências e avisos, não do cronograma de versões.",
                "Atualizações de segurança não substituem o inventário de dependências.",
                "Alertas e pull requests automáticos de atualização de segurança são recursos distintos."
            ],
            "concept": "Cobertura de alertas versus atualizações",
            "hints": [
                "Qual recurso informa a equipe e qual cria uma proposta de correção?",
                "Uma notificação altera por si só a versão da dependência?"
            ]
        },
        "ghas-supply-012": {
            "prompt": "Uma pessoa mantenedora precisa definir ecossistemas, diretórios e cronogramas de atualização do Dependabot. Qual arquivo do repositório deve editar?",
            "choices": [
                "`.github/dependabot.yml`",
                "`.github/codeql.yml`",
                "`.github/secret_scanning.yml`",
                "`CODEOWNERS`"
            ],
            "explanations": [
                "O comportamento de atualização do Dependabot é configurado em `.github/dependabot.yml`.",
                "Este não é o arquivo padrão para cronogramas e ecossistemas do Dependabot.",
                "Este arquivo configura exclusões de caminho da análise de segredos.",
                "CODEOWNERS atribui responsabilidades de revisão de código."
            ],
            "concept": "Local da configuração de atualizações",
            "hints": [
                "Qual configuração administra as entradas de atualização de pacotes do Dependabot?",
                "Onde são definidos ecossistema, diretório e cronograma?"
            ]
        },
        "ghas-supply-013": {
            "prompt": "Uma fonte privada de pacotes precisa estar disponível para as atualizações do Dependabot. Qual seção de `.github/dependabot.yml` declara as definições de registros?",
            "choices": [
                "`ignore`",
                "`registries`",
                "`groups`",
                "`updates`"
            ],
            "explanations": [
                "`ignore` exclui dependências ou versões correspondentes das atualizações.",
                "A seção de nível superior `registries` define o acesso a registros para o Dependabot.",
                "`groups` combina atualizações de pacotes compatíveis.",
                "`updates` configura trabalhos por ecossistema e pode referenciar registros."
            ],
            "concept": "Configuração de registros do Dependabot",
            "hints": [
                "Qual seção de configuração define as fontes de pacotes usadas pelo Dependabot?",
                "Esta seção define uma fonte, um cronograma ou uma exclusão de atualização?"
            ]
        },
        "ghas-supply-014": {
            "prompt": "Uma equipe quer reduzir a quantidade de pull requests do Dependabot combinando atualizações de pacotes compatíveis. Onde pode definir regras de agrupamento?",
            "choices": [
                "Um bloco `queries` em um fluxo CodeQL",
                "A SBOM SPDX do repositório",
                "A configuração `groups` em `.github/dependabot.yml`",
                "Um bloco `paths-ignore` em `.github/secret_scanning.yml`"
            ],
            "explanations": [
                "A configuração de consultas CodeQL serve para análise de código.",
                "Uma SBOM é um inventário, não uma política de atualização.",
                "Regras de agrupamento do Dependabot são definidas em sua configuração YAML.",
                "Exclusões da análise de segredos não agrupam atualizações de pacotes."
            ],
            "concept": "Agrupamento de atualizações de segurança",
            "hints": [
                "Qual configuração controla como o Dependabot combina pull requests de pacotes?",
                "Qual arquivo já define ecossistemas e cronogramas?"
            ]
        },
        "ghas-supply-015": {
            "prompt": "Um repositório configura grupos do Dependabot para atualizações rotineiras de versões. O que a equipe deve verificar antes de presumir que pull requests de segurança usam os mesmos grupos?",
            "choices": [
                "Se o repositório tem um alerta de segredos",
                "Se o CodeQL usa um modo de build para linguagens compiladas",
                "Se a SBOM inclui dependentes",
                "O agrupamento de atualizações de segurança está habilitado"
            ],
            "explanations": [
                "Alertas de segredos não determinam agrupamento de pacotes.",
                "Modos de build do CodeQL não configuram o Dependabot.",
                "A SBOM exportada não inclui dependentes.",
                "O agrupamento de atualizações de segurança pode exigir uma configuração de habilitação para os diretórios aplicáveis."
            ],
            "concept": "Limites do agrupamento de atualizações de segurança",
            "hints": [
                "Grupos de atualização rotineira e de segurança sempre são habilitados juntos?",
                "Qual escopo de configuração deve ser verificado para agrupar pull requests de segurança?"
            ]
        },
        "ghas-supply-016": {
            "prompt": "Uma regra de triagem automática do Dependabot adia um alerta. O que essa ação faz?",
            "choices": [
                "Altera o tratamento do alerta, não o pacote",
                "Publica automaticamente uma versão corrigida do pacote",
                "Remove o pacote vulnerável de todas as branches",
                "Desabilita futuras correspondências com avisos"
            ],
            "explanations": [
                "Regras de triagem administram alertas, não alterações no código-fonte.",
                "Adiar não publica uma correção do pacote.",
                "Uma regra de alertas não reescreve todas as declarações de dependências.",
                "Adiar não equivale a desabilitar a detecção de vulnerabilidades."
            ],
            "concept": "Triagem automática não corrige pacotes",
            "hints": [
                "A versão da dependência mudou ou somente o tratamento do alerta?",
                "Qual mecanismo separado proporia uma atualização de código?"
            ]
        },
        "ghas-supply-017": {
            "prompt": "Uma equipe adia um alerta do Dependabot até uma data de revisão. O que deve esperar quando esse período terminar?",
            "choices": [
                "O gráfico de dependências é desabilitado permanentemente",
                "Adiar não corrige a vulnerabilidade",
                "O pacote é atualizado automaticamente no prazo final",
                "O aviso é removido do GitHub Advisory Database"
            ],
            "explanations": [
                "Alterar o estado de um alerta não desabilita o inventário de dependências.",
                "Adiar posterga a atenção, mas não comprova que houve correção.",
                "O período de adiamento não é um cronograma de atualização.",
                "A triagem do repositório não retira um aviso publicado."
            ],
            "concept": "Momento da notificação de triagem automática",
            "hints": [
                "O que o período de adiamento posterga?",
                "Qual evento deve levar a equipe a revisar o risco?"
            ]
        },
        "ghas-supply-018": {
            "prompt": "Uma regra de triagem automática descarta alertas que atendem a uma condição de metadados. Qual proteção reduz melhor a supressão acidental de descobertas importantes?",
            "choices": [
                "Desabilitar notificações dos alertas correspondentes à regra",
                "Limitar a regra a um ecossistema e raramente revisar as correspondências",
                "Revisar os critérios da regra e auditar alertas afetados regularmente",
                "Aplicar a regra a todas as correspondências e adiar a revisão manual"
            ],
            "explanations": [
                "Desativar notificações reduz a visibilidade, mas não evita uma supressão insegura.",
                "Limitar o escopo pode ajudar, mas revisar raramente deixa erros sem detecção.",
                "Revisar condições e alertas afetados ajuda a identificar descartes indevidos.",
                "Aplicar uma regra ampla antes da revisão pode suprimir alertas não relacionados."
            ],
            "concept": "Revisão da triagem automatizada",
            "hints": [
                "Que risco surge se uma regra corresponder a alertas demais?",
                "Qual prática supervisiona a automação sem abandoná-la?"
            ]
        },
        "ghas-supply-019": {
            "prompt": "Uma organização quer que uma regra de triagem automática atinja um ecossistema de pacotes e escopo de dependência específicos. Que informações as condições devem usar?",
            "choices": [
                "O motivo do bypass da proteção de push de quem contribui",
                "Uma localização de origem SARIF",
                "A quantidade de estrelas do repositório",
                "Os metadados do pacote e da dependência do alerta"
            ],
            "explanations": [
                "Motivos de bypass pertencem à análise de segredos.",
                "Localizações SARIF descrevem descobertas de análise de código.",
                "Popularidade do repositório não descreve risco de dependências.",
                "Regras do Dependabot podem direcionar metadados como pacote e escopo."
            ],
            "concept": "Triagem automática direcionada por metadados",
            "hints": [
                "Quais atributos distinguem os alertas de pacotes que devem corresponder?",
                "Que tipo de dados uma regra de tratamento de alertas deve avaliar?"
            ]
        },
        "ghas-supply-020": {
            "prompt": "Um fluxo de build envia um snapshot de dependências antes de terminar o trabalho que as resolve. Qual é o provável problema?",
            "choices": [
                "Dependências não resolvidas podem faltar no inventário",
                "A análise de segredos converterá o snapshot para SARIF",
                "O Dependabot inferirá todos os pacotes pelo nome do fluxo",
                "O snapshot incluirá automaticamente os pacotes dependentes"
            ],
            "explanations": [
                "O snapshot deve refletir o conjunto de dependências resolvido pelo build.",
                "A análise de segredos não transforma envios de dependências.",
                "O nome do fluxo não identifica pacotes resolvidos.",
                "Uma SBOM lista dependências, não todos os projetos que dependem do repositório."
            ],
            "concept": "Ordem do envio de dependências",
            "hints": [
                "Em que momento o conjunto completo de dependências do build é conhecido?",
                "Um snapshot antecipado pode omitir componentes ainda não resolvidos?"
            ]
        },
        "ghas-supply-021": {
            "prompt": "Uma equipe quer executar verificações de dependências em alterações destinadas à branch principal. Onde configura o gatilho da ação de revisão de dependências?",
            "choices": [
                "Em um pacote de consultas CodeQL",
                "Em um fluxo do GitHub Actions acionado por `pull_request`",
                "Em `dependabot.yml` em `registries`",
                "Na SBOM do repositório"
            ],
            "explanations": [
                "Pacotes de consultas configuram análise estática.",
                "A ação é executada por um fluxo, normalmente em pull requests.",
                "Registros configuram origens de pacotes, não eventos de fluxos.",
                "Uma SBOM é um inventário exportado, não um gatilho de fluxo."
            ],
            "concept": "Orquestração do fluxo de revisão de dependências",
            "hints": [
                "Qual evento deve avaliar a diferença de dependências proposta antes da mesclagem?",
                "Que tipo de arquivo declara eventos do GitHub Actions?"
            ]
        },
        "ghas-supply-022": {
            "prompt": "A ação de revisão de dependências não encontra dados para um pull request. Qual fundamento a pessoa administradora deve verificar?",
            "choices": [
                "Se o repositório tem um banco CodeQL",
                "Se padrões personalizados de segredos foram publicados",
                "Habilite o gráfico para esse ecossistema",
                "Se a proteção de push está configurada para bloquear"
            ],
            "explanations": [
                "Bancos CodeQL contêm código para análise por consultas.",
                "Padrões de segredos não fornecem metadados de pacotes.",
                "A revisão depende de dados do gráfico de dependências e de ecossistemas compatíveis.",
                "A proteção de push verifica credenciais, não inventários de pacotes."
            ],
            "concept": "Pré-requisitos de dados da revisão de dependências",
            "hints": [
                "Qual fonte de inventário de pacotes a revisão usa?",
                "Qual recurso do repositório deve ser habilitado para obter dados de dependências?"
            ]
        },
        "ghas-supply-023": {
            "prompt": "Uma SBOM SPDX gerada é usada como prova de que todos os componentes implantados são seguros. Qual limitação os revisores devem considerar?",
            "choices": [
                "Uma SBOM corrige automaticamente pacotes vulneráveis",
                "Uma SBOM contém somente dependências diretas",
                "Uma SBOM substitui o gráfico de dependências",
                "O inventário não avalia vulnerabilidades"
            ],
            "explanations": [
                "Uma SBOM relata componentes, não aplica correções de pacotes.",
                "A exportação pode incluir caminhos transitivos e dependências.",
                "O GitHub exporta o estado do gráfico; não o substitui.",
                "O inventário oferece transparência, mas não comprova segurança."
            ],
            "concept": "Limites de garantia da SBOM",
            "hints": [
                "Que pergunta um inventário responde e o que ele não comprova?",
                "Listar um componente comprova que sua versão não tem vulnerabilidades conhecidas?"
            ]
        },
        "ghas-supply-024": {
            "prompt": "Um parceiro solicita uma lista de bibliotecas usadas por um repositório, e não de projetos que o consomem. O que a SBOM exportada do repositório representa?",
            "choices": [
                "Dependências e metadados do repositório",
                "Todos os repositórios que dependem deste repositório",
                "Cada pacote publicado no GitHub",
                "Somente vulnerabilidades do banco de avisos"
            ],
            "explanations": [
                "A SBOM exporta o inventário de componentes do gráfico de dependências.",
                "Projetos dependentes não aparecem na SBOM do repositório.",
                "Uma SBOM não é um catálogo de todos os pacotes do GitHub.",
                "A SBOM registra componentes, não somente vulnerabilidades."
            ],
            "concept": "Dependências versus dependentes na SBOM",
            "hints": [
                "O pedido trata dos pacotes usados pelo projeto ou dos projetos que o usam?",
                "Qual lado da relação de dependência aparece em uma SBOM exportada?"
            ]
        },
        "ghas-supply-025": {
            "prompt": "Um pacote ainda não tem uma versão corrigida, mas seu alerta do Dependabot é válido. Qual resposta preserva a visibilidade enquanto a equipe mitiga o risco?",
            "choices": [
                "Remover a referência direta e presumir que não restam cópias transitivas",
                "Mantenha o alerta aberto e registre a mitigação restrita",
                "Descartar como corrigido sem versão corrigida",
                "Suprimir os alertas do ecossistema até que seja publicada uma correção"
            ],
            "explanations": [
                "Remover uma referência direta pode deixar outro caminho e não mantém o alerta em acompanhamento.",
                "Uma mitigação restrita mantém o alerta válido visível para reavaliação.",
                "Sem uma versão corrigida, marcar o alerta como resolvido exagera a remediação.",
                "Suprimir todo um ecossistema oculta riscos não relacionados em vez de conter este problema."
            ],
            "concept": "Gestão de exceções de dependências",
            "hints": [
                "A vulnerabilidade foi resolvida ou somente mitigada temporariamente?",
                "O que mantém o problema visível quando ainda não há versão corrigida?"
            ]
        },
        "ghas-supply-026": {
            "prompt": "Uma equipe prioriza uma dependência vulnerável usando CVSS e EPSS. Qual distinção deve orientar a interpretação?",
            "choices": [
                "As duas pontuações medem a idade do pacote",
                "EPSS identifica a versão corrigida; CVSS conta caminhos de dependência",
                "CVSS descreve a gravidade; EPSS estima a probabilidade de exploração",
                "CVSS mede a probabilidade de exploração; EPSS descreve compatibilidade de licença"
            ],
            "explanations": [
                "Nenhuma pontuação mede a idade do pacote.",
                "Versões corrigidas e caminhos de dependência são outros detalhes do alerta.",
                "CVSS classifica a gravidade da vulnerabilidade, enquanto EPSS estima a probabilidade de exploração.",
                "Compatibilidade de licença não é o que EPSS mede."
            ],
            "concept": "EPSS versus CVSS",
            "hints": [
                "Qual sinal descreve impacto e qual estima a probabilidade de exploração?",
                "Essas pontuações são medidas intercambiáveis da mesma propriedade?"
            ]
        },
        "ghas-supply-027": {
            "prompt": "Um alerta do Dependabot identifica um pacote transitivo vulnerável. Que informação ajuda a encontrar uma correção prática?",
            "choices": [
                "Os motivos de bypass da proteção de push",
                "A quantidade atual de consultas CodeQL",
                "Os repositórios dependentes da SBOM",
                "Caminho da dependência e correção disponível"
            ],
            "explanations": [
                "Motivos de bypass de segredos não explicam a origem do pacote.",
                "A quantidade de consultas não identifica um caminho de correção de dependência.",
                "A SBOM exportada não lista dependentes.",
                "O caminho identifica qual pacote pai traz o componente, e o alerta pode indicar uma versão corrigida."
            ],
            "concept": "Correção eficaz de dependências",
            "hints": [
                "Qual dependência pai poderia ser atualizada para remover a versão transitiva?",
                "Qual detalhe do alerta aponta para uma versão corrigida disponível?"
            ]
        },
        "ghas-supply-028": {
            "prompt": "Um fluxo de revisão de dependências deve carregar uma política específica do repositório a partir de um arquivo YAML local. Qual entrada da ação aponta para o caminho padrão documentado?",
            "choices": [
                "`config-file: './.github/dependency-review-config.yml'`",
                "`config-file: './.github/dependency-review.yml'`",
                "`config-file: './.github/dependency-review-config.yaml'`",
                "`config-file: './.github/dependency-config.yml'`"
            ],
            "explanations": [
                "Este é o caminho de exemplo padrão documentado para o arquivo local de configuração da revisão de dependências.",
                "Este nome não é o caminho padrão documentado para a configuração da ação.",
                "A ação pode usar outro caminho, mas este não é o exemplo padrão documentado.",
                "A ação pode usar outro caminho, mas este não é o exemplo padrão documentado."
            ],
            "concept": "Caminho do arquivo de configuração da revisão de dependências",
            "hints": [
                "Qual entrada nomeia um arquivo em vez de definir uma política diretamente?",
                "Onde fica a configuração local documentada para o repositório?"
            ]
        },
        "ghas-supply-029": {
            "prompt": "Um repositório quer combinar atualizações rotineiras de vários ecossistemas em um único pull request do Dependabot. Qual recurso de configuração foi criado para isso?",
            "choices": [
                "Uma suíte de consultas CodeQL",
                "Grupos multiecossistema em `dependabot.yml`",
                "Uma única lista `paths-ignore`",
                "A exportação de SBOM do gráfico de dependências"
            ],
            "explanations": [
                "Suítes de consultas selecionam regras de análise de código.",
                "Grupos multiecossistema coordenam atualizações elegíveis entre ecossistemas.",
                "Exclusões de caminho configuram o escopo da análise de segredos.",
                "A exportação de SBOM gera inventário, não grupos de atualização."
            ],
            "concept": "Configuração multiecossistema de atualizações",
            "hints": [
                "O agrupamento desejado cruza limites entre ecossistemas?",
                "Qual opção do Dependabot agrupa atualizações de vários gerenciadores de pacotes?"
            ]
        },
        "ghas-supply-030": {
            "prompt": "Um fluxo fixa ações como `actions/checkout` em tags de versão. Qual ecossistema do Dependabot pode propor atualizações para essas referências?",
            "choices": [
                "`docker`",
                "`pip`",
                "`github-actions`",
                "`npm`"
            ],
            "explanations": [
                "Docker monitora dependências de imagens de contêiner.",
                "pip gerencia pacotes Python.",
                "O Dependabot oferece o ecossistema `github-actions` para referências de ações em fluxos.",
                "npm monitora pacotes JavaScript, não referências de ações."
            ],
            "concept": "Manutenção de dependências de fluxos",
            "hints": [
                "Qual ecossistema identifica ações reutilizáveis em arquivos de fluxo?",
                "Que tipo de dependência aparece em um campo `uses` do Actions?"
            ]
        },
        "ghas-supply-031": {
            "prompt": "Os alertas do Dependabot estão habilitados, mas a equipe quer pull requests automáticos para pacotes vulneráveis. Qual suposição deve evitar?",
            "choices": [
                "Que atualizações de segurança exigem uma dependência vulnerável corrigível",
                "Que os dados de alerta vêm da correspondência entre dependências e avisos",
                "Que atualizações propostas devem ser revisadas",
                "Que habilitar somente alertas garante pull requests de atualização de segurança"
            ],
            "explanations": [
                "Pode não haver uma versão corrigida para um alerta.",
                "O Dependabot relaciona avisos a dados de dependências.",
                "Propostas automáticas ainda exigem revisão e testes.",
                "Alertas e pull requests de segurança têm condições de habilitação distintas."
            ],
            "concept": "Configuração de atualizações versus geração de alertas",
            "hints": [
                "Qual recurso propõe uma correção em vez de notificar um risco?",
                "Qual configuração deve ser verificada além da geração de alertas?"
            ]
        },
        "ghas-supply-032": {
            "prompt": "A atualização passa no CI, mas também altera um pacote transitivo além do pacote pai. O que a pessoa mantenedora ainda deve avaliar antes da mesclagem?",
            "choices": [
                "Revise as alterações no pacote pai e no transitivo mesmo com CI aprovado",
                "Considere que passar no CI prova que a atualização é segura em qualquer ambiente",
                "Suponha que atualizar apaga o aviso do pacote",
                "Pare de verificar caminhos após alterar o pacote direto"
            ],
            "explanations": [
                "Verificações locais ajudam a validar a alteração, mas não garantem todo comportamento.",
                "Um fluxo aprovado não garante segurança em todos os ambientes.",
                "Atualizar um pacote não apaga seu histórico de avisos.",
                "O gráfico ainda ajuda a acompanhar a nova versão e suas dependências."
            ],
            "concept": "Revisão de atualizações automatizadas",
            "hints": [
                "Que evidência é específica à alteração testada neste repositório?",
                "Passar no CI elimina a necessidade de revisar escopo e comportamento?"
            ]
        },
        "ghas-supply-033": {
            "prompt": "Atualizações rotineiras de versão do Dependabot criam mais pull requests do que a equipe consegue revisar. Qual opção pode limitar os pull requests de atualização abertos?",
            "choices": [
                "`category` de um envio SARIF",
                "`open-pull-requests-limit` em `dependabot.yml`",
                "`fail-on-severity` da ação de revisão de dependências",
                "`paths-ignore` em `secret_scanning.yml`"
            ],
            "explanations": [
                "Categorias SARIF distinguem análises de código.",
                "O Dependabot usa essa opção para limitar pull requests abertos de uma entrada de atualização.",
                "`fail-on-severity` define um limite de vulnerabilidade para a ação de revisão.",
                "`paths-ignore` trata de caminhos da análise de segredos."
            ],
            "concept": "Gestão do volume de atualizações rotineiras",
            "hints": [
                "Qual opção limita propostas de atualização pendentes?",
                "O problema é volume de atualizações ou gravidade de vulnerabilidades?"
            ]
        },
        "ghas-supply-034": {
            "prompt": "Um alerta do Dependabot não mostra uma versão corrigida. O que a pessoa mantenedora deve fazer?",
            "choices": [
                "Presumir que o pacote não é vulnerável",
                "Desabilitar alertas para o ecossistema",
                "Avaliar exposição e mitigações, acompanhar o alerta e revisá-lo quando as opções mudarem",
                "Encerrar o alerta porque não há atualização"
            ],
            "explanations": [
                "O alerta comprova uma vulnerabilidade conhecida mesmo sem patch.",
                "Desabilitar alertas futuros reduz visibilidade, em vez de mitigar o problema.",
                "A falta de correção não elimina o risco; mitigação e reavaliação continuam importantes.",
                "Encerrar não corrige a dependência vulnerável."
            ],
            "concept": "Resposta a dependência sem patch",
            "hints": [
                "A ausência de correção equivale à ausência de risco?",
                "O que mantém uma vulnerabilidade conhecida em revisão enquanto não há solução?"
            ]
        },
        "ghas-supply-035": {
            "prompt": "Um relatório de vulnerabilidade marca um pacote como transitivo. O que essa classificação significa?",
            "choices": [
                "Nenhuma dependência declarada o inclui no projeto",
                "É usado somente como dependência de desenvolvimento",
                "A descoberta veio de um envio SARIF",
                "Outra dependência o traz para o projeto"
            ],
            "explanations": [
                "O status transitivo, por si só, não prova que o pacote seja inacessível.",
                "Relação de dependência e escopo de execução são propriedades distintas.",
                "SARIF é um formato de análise de código, não uma classificação de dependências.",
                "Uma dependência transitiva chega por meio de outra dependência."
            ],
            "concept": "Classificação direta versus transitiva",
            "hints": [
                "O projeto declara o pacote ou o herda de outro?",
                "Qual relação o gráfico de dependências mostra?"
            ]
        },
        "ghas-supply-036": {
            "prompt": "Uma equipe quer atualizações de versão somente para determinados pacotes, exceto um pacote que decidiu excluir. Qual configuração do Dependabot expressa as duas políticas?",
            "choices": [
                "Definir `allow` para selecionar dependências e depois excluir uma com `ignore`",
                "Definir `ignore` para selecionar dependências e depois excluir uma com `allow`",
                "Definir `registries` para selecionar dependências e depois excluir uma com `ignore`",
                "Definir `groups` para selecionar dependências e depois excluir uma com `ignore`"
            ],
            "explanations": [
                "`allow` seleciona dependências para atualização; depois, uma regra correspondente de `ignore` prevalece e as exclui ou exclui determinadas versões.",
                "`ignore` filtra correspondências em vez de selecionar dependências; `allow` não é uma regra de exclusão.",
                "`registries` configura o acesso a fontes de pacotes, não uma política de seleção de dependências.",
                "`groups` combina atualizações; não seleciona dependências permitidas nem expressa exclusões."
            ],
            "concept": "Regras allow e ignore do Dependabot",
            "hints": [
                "Quais regras selecionam dependências e qual prevalece para uma correspondência excluída?",
                "Como uma exclusão específica pode coexistir com uma lista permitida de atualizações?"
            ]
        },
        "ghas-supply-037": {
            "prompt": "Uma pessoa analista exporta uma SBOM na segunda-feira e a compara com uma versão do trimestre anterior. O que a exportação representa?",
            "choices": [
                "O conjunto de repositórios que depende deste projeto",
                "O estado atual do gráfico de dependências quando a SBOM é gerada",
                "Um registro imutável de todas as dependências usadas em builds anteriores",
                "Somente componentes com alertas do Dependabot"
            ],
            "explanations": [
                "A SBOM exportada não inclui dependentes.",
                "O GitHub exporta o estado atual do gráfico de dependências do repositório.",
                "Uma exportação atual não é um arquivo histórico de todos os builds.",
                "A SBOM inclui dependências mesmo sem alertas."
            ],
            "concept": "Atualidade do snapshot da SBOM",
            "hints": [
                "De que momento um inventário recém-gerado trata?",
                "Uma exportação do gráfico atual preserva o conteúdo de versões anteriores?"
            ]
        },
        "ghas-supply-038": {
            "prompt": "Há um alerta aberto, mas nenhum pull request de atualização de segurança aparece. Quais duas condições são mais relevantes para investigar?",
            "choices": [
                "Se o CodeQL tem uma execução agendada e uma categoria SARIF",
                "Se o alerta foi atribuído a uma equipe e o repositório tem estrelas",
                "Se as atualizações de segurança estão habilitadas e se existe uma correção compatível",
                "Se o repositório tem um padrão personalizado e um cabeçalho SPDX"
            ],
            "explanations": [
                "Cronogramas do CodeQL e categorias SARIF são independentes das atualizações do Dependabot.",
                "Atribuição e popularidade não comprovam que exista uma correção compatível.",
                "O recurso precisa estar disponível e a vulnerabilidade precisa ter um caminho de atualização viável.",
                "Padrões de segredos e cabeçalhos SPDX não criam pull requests de segurança."
            ],
            "concept": "Solução de problemas de atualizações de segurança",
            "hints": [
                "O que precisa estar habilitado e o que precisa existir para propor uma atualização?",
                "Um alerta válido pode não ter uma versão compatível disponível?"
            ]
        },
        "ghas-supply-039": {
            "prompt": "Uma biblioteca vulnerável aparece por meio de duas dependências diretas diferentes. Por que a pessoa mantenedora deve inspecionar cada caminho?",
            "choices": [
                "O gráfico mostra somente um caminho por projeto",
                "O pacote precisa ser uma dependência direta",
                "A análise de segredos precisa de cada caminho para validar a credencial",
                "Atualizar um pacote pai pode deixar outro caminho até a versão vulnerável"
            ],
            "explanations": [
                "Caminhos de dependências não se limitam a uma relação.",
                "O cenário descreve especificamente uma inclusão indireta.",
                "A validação de segredos não se relaciona a caminhos do gráfico de pacotes.",
                "Um pacote transitivo pode ser trazido por vários pacotes pais."
            ],
            "concept": "Vários caminhos transitivos",
            "hints": [
                "Outro pacote pai ainda pode trazer a mesma versão vulnerável?",
                "O que deve ser verificado após alterar somente uma dependência direta?"
            ]
        },
        "ghas-supply-040": {
            "prompt": "Um fluxo deve falhar quando um pull request introduzir um pacote com licença proibida e continuar relatando vulnerabilidades. Qual configuração é apropriada?",
            "choices": [
                "Configure a política de licença da ação",
                "Adicionar a licença a `registries` em `dependabot.yml`",
                "Excluir o caminho do pacote em `secret_scanning.yml`",
                "Descartar o aviso do pacote"
            ],
            "explanations": [
                "A ação de revisão oferece política de licença e configurações de gravidade de vulnerabilidade.",
                "Entradas de registro configuram origens, não regras de licença.",
                "Exclusões da análise de segredos não afetam verificações de licença.",
                "Descartar um aviso não aplica a política de licença."
            ],
            "concept": "Política de dependências com escopo",
            "hints": [
                "Qual ação de pull request avalia risco de pacotes e política de licença?",
                "Onde uma regra sobre identificadores de licença permitidos deve ser configurada?"
            ]
        },
        "ghas-ecosystem-041": {
            "prompt": "Qual automação propõe pull requests de atualização de dependências especificamente para corrigir vulnerabilidades conhecidas?",
            "choices": [
                "Code scanning",
                "Dependabot version updates",
                "Dependabot security updates",
                "Dependabot alerts"
            ],
            "explanations": [
                "A análise de código examina o código-fonte da aplicação em vez de atualizar versões de pacotes.",
                "As atualizações de versão propõem upgrades de dependências mesmo quando nenhum aviso de vulnerabilidade os exige.",
                "As atualizações de segurança propõem alterações para corrigir vulnerabilidades conhecidas em dependências.",
                "Os alertas notificam dependências com vulnerabilidades conhecidas; um alerta não é por si só um pull request de atualização."
            ],
            "concept": "Atualizações de dependências motivadas por vulnerabilidades",
            "hints": [
                "Diferencie manter as versões atualizadas de responder a uma vulnerabilidade identificada.",
                "Considere se o resultado desejado é um alerta, uma alteração de dependência ou análise do código."
            ]
        },
        "ghas-ecosystem-042": {
            "prompt": "Qual recurso de segurança as integrações podem consultar pela API REST ou GraphQL do GitHub para obter avisos publicados?",
            "choices": [
                "SECURITY.md",
                "Private vulnerability reporting",
                "Repository security advisories",
                "GitHub Advisory Database"
            ],
            "explanations": [
                "Uma política de segurança explica as versões com suporte e como relatar vulnerabilidades.",
                "Esse recurso oferece a pesquisadores um canal privado para relatar problemas aos mantenedores.",
                "Os avisos do repositório permitem discussão privada, correções coordenadas e publicação posterior.",
                "A base é uma coleção pesquisável de avisos de segurança publicados."
            ],
            "concept": "Integração do ecossistema de avisos",
            "hints": [
                "Diferencie instruções, recebimento confidencial, correção coordenada e dados públicos de referência.",
                "Considere o público e a etapa de divulgação."
            ]
        },
        "ghas-secrets-041": {
            "prompt": "Dois alertas mostram o mesmo tipo de segredo, mas somente um tem resultado de validade do provedor. O que a equipe de resposta deve concluir?",
            "choices": [
                "Avaliar cada resultado em seu contexto; a falta de validação não comprova segurança",
                "O alerta sem resultado deve ser um falso positivo",
                "As duas credenciais estão ativas porque uma estava ativa",
                "O scanner valida todos os tipos de segredos da mesma forma"
            ],
            "explanations": [
                "Os resultados podem variar por tipo ou disponibilidade e exigem interpretação individual.",
                "A falta de verificação não prova que a detecção seja falsa.",
                "O status de uma credencial não determina o de outra.",
                "O suporte à validade do provedor não é igual para todos os tipos."
            ],
            "concept": "Verificação de validade dependente do contexto",
            "hints": [
                "O que o resultado informa para cada credencial individual?",
                "É possível generalizar o status de validação de um alerta para outro?"
            ]
        },
        "ghas-supply-041": {
            "prompt": "A ação de revisão de dependências não relata alterações, embora um pull request atualize um arquivo de bloqueio. O que a equipe deve verificar antes de considerar a revisão limpa?",
            "choices": [
                "Se o fluxo CodeQL executa toda noite",
                "Se o gráfico resolve manifestos compatíveis para o estado base e o estado de dependências proposto",
                "Se o repositório não tem alertas da análise de segredos",
                "Se a SBOM lista repositórios dependentes"
            ],
            "explanations": [
                "O cronograma do CodeQL não garante dados para a revisão de dependências.",
                "Uma diferença útil exige informações de dependências para os dois estados comparados.",
                "Alertas de segredos não determinam a cobertura das alterações de pacotes.",
                "A SBOM do repositório não lista repositórios dependentes."
            ],
            "concept": "Integridade do inventário base e proposto",
            "hints": [
                "Quais dois estados de dependências a revisão compara?",
                "A falta de inventário pode tornar inconclusivo um resultado vazio?"
            ]
        },
        "ghas-code-001": {
            "prompt": "Um repositório precisa de uma configuração rápida do CodeQL e não tem requisitos especiais de fluxo. Qual configuração a pessoa administradora deve considerar primeiro?",
            "choices": [
                "Somente um envio SARIF",
                "Uma entrada de atualização do Dependabot",
                "Configuração padrão",
                "Configuração avançada"
            ],
            "explanations": [
                "O envio SARIF incorpora resultados produzidos por outro processo de análise.",
                "Entradas do Dependabot configuram atualizações de pacotes.",
                "A configuração padrão seleciona automaticamente linguagens, uma suíte de consultas e eventos de análise.",
                "A configuração avançada permite personalizar o fluxo."
            ],
            "concept": "Seleção da configuração padrão",
            "hints": [
                "O repositório precisa de personalização ou de um início gerenciado simples?",
                "Qual configuração escolhe automaticamente opções comuns do CodeQL?"
            ]
        },
        "ghas-code-002": {
            "prompt": "Uma equipe precisa definir comandos de build e eventos de análise personalizados em um fluxo CodeQL. Qual configuração fornece esse controle?",
            "choices": [
                "Configuração padrão sem alterações no fluxo",
                "Atualizações de versão do Dependabot",
                "Padrões personalizados de análise de segredos",
                "Configuração avançada com um fluxo personalizável"
            ],
            "explanations": [
                "A configuração padrão gerencia opções comuns sem essas edições no fluxo.",
                "O Dependabot atualiza pacotes, não compila bancos CodeQL.",
                "Padrões personalizados detectam formatos de credenciais.",
                "A configuração avançada fornece um fluxo personalizável para análise CodeQL."
            ],
            "concept": "Seleção da configuração avançada",
            "hints": [
                "Que parte da análise a equipe precisa controlar diretamente?",
                "Qual configuração expõe o fluxo CodeQL para personalização?"
            ]
        },
        "ghas-code-003": {
            "prompt": "Qual sequência descreve como o CodeQL produz descobertas de análise de código?",
            "choices": [
                "Criar um banco, executar consultas e publicar resultados",
                "Exportar uma SBOM SPDX, executar Dependabot e enviar um padrão de segredos",
                "Criar um arquivo SARIF a partir da lista de licenças do repositório",
                "Executar uma consulta antes de representar o código"
            ],
            "explanations": [
                "O CodeQL representa o código em um banco, executa consultas e exibe os resultados.",
                "Uma SBOM e padrões de segredos pertencem a outros recursos.",
                "Inventário de licenças não é o fluxo de análise CodeQL.",
                "Consultas operam sobre uma representação do código em um banco."
            ],
            "concept": "Fluxo de análise do CodeQL",
            "hints": [
                "Qual representação o mecanismo de consultas analisa?",
                "Quais etapas transformam código-fonte em alertas do repositório?"
            ]
        },
        "ghas-code-004": {
            "prompt": "Um alerta CodeQL rastreia a entrada de uma solicitação de uma origem até um destino perigoso. Como a pessoa desenvolvedora deve usar esse rastro?",
            "choices": [
                "Presumir que o CodeQL reescreveu o caminho automaticamente",
                "Valide no código o fluxo de dados relatado",
                "Tratar o rastro como prova de que um invasor já explorou o código",
                "Descartar o alerta porque fluxo de dados só relata dependências"
            ],
            "explanations": [
                "O rastro de um alerta não altera o código-fonte por si só.",
                "O rastro explica um fluxo potencial que a equipe deve avaliar no contexto.",
                "Evidência de análise estática não prova que ocorreu uma exploração.",
                "Fluxo de dados é evidência de análise de código, não inventário de dependências."
            ],
            "concept": "Interpretação de evidência de fluxo de dados",
            "hints": [
                "O que o caminho da origem ao destino mostra sobre o código?",
                "O que precisa ser validado antes de escolher uma correção?"
            ]
        },
        "ghas-code-005": {
            "prompt": "Um analisador de terceiros prepara resultados para a análise de código do GitHub. Qual versão do SARIF deve usar?",
            "choices": [
                "3.0.0",
                "Um formato personalizado sem relação com SARIF",
                "2.1.0",
                "1.0.0"
            ],
            "explanations": [
                "SARIF 3.0.0 não é a versão suportada descrita para envios.",
                "O envio precisa ser um arquivo SARIF compatível.",
                "O GitHub oferece suporte a um subconjunto do SARIF 2.1.0 para envios de análise de código.",
                "A versão 1.0.0 não é o formato compatível documentado."
            ],
            "concept": "Compatibilidade da versão SARIF",
            "hints": [
                "Qual versão padrão o GitHub documenta para resultados de análise de código?",
                "Qual formato permite que uma análise de terceiros crie alertas no GitHub?"
            ]
        },
        "ghas-code-006": {
            "prompt": "Uma ferramenta de terceiros envia a mesma descoberta em cada análise, mas o GitHub cria alertas repetidos. Quais dados SARIF ajudam a corresponder o resultado entre execuções?",
            "choices": [
                "Uma nova categoria aleatória para cada análise",
                "O cronograma de `dependabot.yml` do repositório",
                "Somente o título exibido do alerta",
                "Caminhos e impressões digitais estáveis"
            ],
            "explanations": [
                "Alterar categorias pode separar análises, em vez de identificar um resultado estável.",
                "Cronogramas do Dependabot não afetam a correspondência SARIF.",
                "O título, sozinho, não é o mecanismo documentado de impressão digital.",
                "Identidade estável da regra, caminhos e impressões digitais permitem rastrear descobertas equivalentes."
            ],
            "concept": "Identidade estável de resultado SARIF",
            "hints": [
                "Quais propriedades do resultado devem permanecer consistentes entre análises?",
                "Quais metadados ajudam a distinguir uma descoberta contínua de uma nova?"
            ]
        },
        "ghas-code-007": {
            "prompt": "Uma integração envia SARIF diretamente pela API de análise de código sem `partialFingerprints`. Qual risco a pessoa responsável deve tratar?",
            "choices": [
                "Sem impressões digitais, podem surgir duplicatas",
                "A API converte cada resultado em um alerta do Dependabot",
                "O repositório recebe automaticamente um banco CodeQL",
                "O envio desabilita todas as análises futuras"
            ],
            "explanations": [
                "A API pode processar resultados sem impressões digitais, mas duplicatas podem aparecer.",
                "Envios SARIF criam descobertas de análise de código, não alertas de dependências.",
                "Enviar resultados não gera um banco CodeQL.",
                "Um envio de análise não desabilita verificações futuras."
            ],
            "concept": "Tratamento de impressões digitais no envio pela API",
            "hints": [
                "O que pode acontecer quando faltam dados de identidade do resultado?",
                "Qual propriedade SARIF ajuda a evitar descobertas repetidas entre envios?"
            ]
        },
        "ghas-code-008": {
            "prompt": "Um fluxo avançado do CodeQL precisa analisar Java e Python. Qual configuração a pessoa mantenedora deve inspecionar?",
            "choices": [
                "A lista `paths-ignore` da análise de segredos",
                "Uma matriz com ambas as linguagens",
                "A versão SPDX da SBOM do repositório",
                "A seção `registries` do Dependabot"
            ],
            "explanations": [
                "Exclusões da análise de segredos não configuram análise de código.",
                "O fluxo CodeQL define quais linguagens cada trabalho analisa.",
                "A versão SPDX não seleciona linguagens CodeQL.",
                "Registros configuram acesso a pacotes."
            ],
            "concept": "Configuração da matriz de linguagens",
            "hints": [
                "Quais linguagens são realmente passadas ao trabalho de análise?",
                "Onde um fluxo avançado declara sua matriz de análise?"
            ]
        },
        "ghas-code-009": {
            "prompt": "Um projeto C/C++ precisa de comandos de build explícitos que a detecção automática do CodeQL não consegue fornecer. Qual modo de build é adequado ao fluxo avançado?",
            "choices": [
                "`autobuild`",
                "`security-extended`",
                "`manual`",
                "`none`"
            ],
            "explanations": [
                "`autobuild` tenta detectar e executar um sistema de build compatível.",
                "`security-extended` nomeia uma suíte de consultas, não um modo de build.",
                "`manual` permite que o fluxo execute as etapas de build explícitas para a extração.",
                "`none` analisa sem executar um build, o que pode reduzir a precisão."
            ],
            "concept": "Modos de build para linguagens compiladas",
            "hints": [
                "O CodeQL consegue inferir o build necessário ou o fluxo precisa fornecer as etapas?",
                "Qual modo usa os comandos de build definidos pelo fluxo?"
            ]
        },
        "ghas-code-010": {
            "prompt": "Uma equipe quer uma cobertura de segurança mais ampla que a suíte padrão do CodeQL e aceita revisar descobertas adicionais. Qual suíte deve avaliar?",
            "choices": [
                "Somente `default`",
                "`dependabot`",
                "`secret-scanning`",
                "`security-extended`"
            ],
            "explanations": [
                "A suíte padrão não oferece a expansão solicitada.",
                "O Dependabot administra alertas e atualizações de dependências.",
                "A análise de segredos detecta credenciais, não consultas CodeQL.",
                "A suíte estendida adiciona consultas de segurança além da seleção padrão."
            ],
            "concept": "Compensações de suítes estendidas",
            "hints": [
                "Qual suíte CodeQL amplia as consultas de segurança padrão?",
                "Qual custo operacional pode acompanhar uma cobertura mais ampla?"
            ]
        },
        "ghas-code-011": {
            "prompt": "Uma equipe quer incluir um conjunto mantido de consultas adicionais do CodeQL na análise avançada. Qual artefato deve configurar?",
            "choices": [
                "Um pacote de consultas CodeQL",
                "Uma lista de licenças da revisão de dependências",
                "Uma exclusão de caminho da análise de segredos",
                "Uma SBOM SPDX"
            ],
            "explanations": [
                "Pacotes de consultas agrupam consultas CodeQL reutilizáveis para análise.",
                "Listas de licenças configuram políticas de revisão de dependências.",
                "Exclusões de caminho configuram o escopo da análise de segredos.",
                "Uma SBOM inventaria componentes de software."
            ],
            "concept": "Pacotes reutilizáveis de consultas CodeQL",
            "hints": [
                "Qual artefato empacota um conjunto reutilizável de consultas de análise?",
                "Qual configuração CodeQL adiciona consultas além da seleção integrada?"
            ]
        },
        "ghas-code-012": {
            "prompt": "Um alerta de análise de código tem gravidade alta. O que esse rótulo descreve principalmente?",
            "choices": [
                "A porcentagem de testes que falharam",
                "Impacto potencial, não certeza de exploração",
                "A probabilidade de o código já ter sido atacado",
                "A quantidade de repositórios que usam a dependência"
            ],
            "explanations": [
                "A taxa de falha dos testes não define a gravidade de um alerta.",
                "A gravidade caracteriza o impacto potencial do problema no contexto do alerta.",
                "Um rótulo de gravidade não comprova que ocorreu exploração.",
                "A quantidade de repositórios é informação separada de dependências."
            ],
            "concept": "Interpretação da gravidade de segurança",
            "hints": [
                "Qual propriedade da fraqueza a gravidade comunica?",
                "Um rótulo de gravidade alta comprova que alguém explorou a falha?"
            ]
        },
        "ghas-code-013": {
            "prompt": "Um alerta CodeQL elegível oferece uma sugestão de correção automática. O que a pessoa mantenedora deve fazer?",
            "choices": [
                "Descartar o alerta sem inspecionar o código-fonte",
                "Usar a sugestão para atualizar todas as dependências",
                "Revisar, testar e adaptar a alteração proposta antes de mesclar",
                "Presumir que a sugestão está correta e mesclar automaticamente"
            ],
            "explanations": [
                "Descartar não corrige o código.",
                "A correção automática trata alertas de código, não todas as atualizações de dependências.",
                "A correção automática propõe uma solução que ainda precisa ser validada.",
                "Uma sugestão gerada não garante que esteja correta."
            ],
            "concept": "Correção automática não garante uma solução",
            "hints": [
                "Qual responsabilidade permanece com quem mantém o código após uma sugestão?",
                "Uma alteração proposta pode exigir testes específicos do contexto?"
            ]
        },
        "ghas-code-014": {
            "prompt": "Uma pessoa desenvolvedora acredita que um alerta de análise de código é falso positivo. O que deve fazer antes de descartá-lo?",
            "choices": [
                "Descartá-lo porque o fluxo passou",
                "Alterar o título do alerta",
                "Excluir o banco CodeQL do repositório",
                "Revise o código e registre evidências"
            ],
            "explanations": [
                "Um fluxo aprovado não comprova que uma descoberta específica seja inválida.",
                "Renomear um alerta não avalia o comportamento relatado.",
                "Excluir um banco não justifica descartar um alerta.",
                "O alerta deve ser avaliado em relação ao código e o motivo do descarte registrado."
            ],
            "concept": "Descarte de alerta de código baseado em evidências",
            "hints": [
                "Que evidência mostraria que o comportamento sinalizado não ocorre ou não é uma falha?",
                "Qual ação registra uma decisão de triagem intencional?"
            ]
        },
        "ghas-code-015": {
            "prompt": "Uma empresa executa análise CodeQL em um serviço de CI externo em vez do GitHub Actions. Como as descobertas podem aparecer na análise de código do GitHub?",
            "choices": [
                "Execute o CodeQL CLI em CI externo e envie SARIF",
                "Converter alertas em um arquivo de bloqueio do Dependabot",
                "Criar um padrão personalizado de segredos para cada resultado",
                "Habilitar a configuração padrão e deixar os resultados externos locais"
            ],
            "explanations": [
                "O CodeQL CLI permite analisar em CI externa e enviar os resultados ao GitHub.",
                "Um arquivo de bloqueio representa dependências, não descobertas de análise de código.",
                "Padrões de segredos detectam credenciais, não importam resultados.",
                "Resultados apenas locais não são enviados ao repositório."
            ],
            "concept": "Entrega de resultados de análise externa",
            "hints": [
                "Onde a análise é executada e para onde as descobertas devem ser enviadas?",
                "Qual interface oferece suporte ao CodeQL fora do GitHub Actions?"
            ]
        },
        "ghas-code-016": {
            "prompt": "Uma equipe quer análise de código em pull requests e em um cronograma recorrente para problemas divulgados recentemente. Qual configuração deve definir esses eventos?",
            "choices": [
                "As credenciais de registro do Dependabot",
                "Configure os eventos de análise",
                "As configurações de exportação do gráfico de dependências",
                "A expressão regular do padrão de segredos do repositório"
            ],
            "explanations": [
                "Credenciais de registro configuram acesso a pacotes.",
                "A análise de código pode executar em eventos do repositório e conforme um cronograma, dependendo da configuração.",
                "A exportação de SBOM não agenda análise de código.",
                "Uma expressão regular de segredos não define gatilhos de análise."
            ],
            "concept": "Estratégia de gatilhos de análise",
            "hints": [
                "Quando a análise deve executar para fornecer retorno pré-mesclagem e recorrente?",
                "Qual configuração administra eventos e cronograma da análise de código?"
            ]
        },
        "ghas-code-017": {
            "prompt": "Dois envios SARIF da mesma ferramenta analisam áreas de produto separadas. Qual entrada pode manter as análises distintas no GitHub?",
            "choices": [
                "O cronograma padrão do Dependabot do repositório",
                "Um motivo de bypass da análise de segredos",
                "Uma `category` estável e significativa para cada análise",
                "Um `ruleId` aleatório diferente em cada verificação"
            ],
            "explanations": [
                "Cronogramas do Dependabot não separam análises SARIF.",
                "Motivos de bypass não se relacionam a categorias de análise de código.",
                "A categoria identifica uma análise e ajuda a manter separados seus resultados.",
                "Alterar IDs de regra entre execuções prejudica o rastreamento estável de alertas."
            ],
            "concept": "Separação por categorias de análise",
            "hints": [
                "Qual metadado identifica uma execução para uma fonte ou configuração distinta?",
                "Qual campo do envio distingue várias análises da mesma ferramenta?"
            ]
        },
        "ghas-code-018": {
            "prompt": "Um alerta SARIF de terceiros tem menos contexto que um alerta padrão do CodeQL. O que a pessoa mantenedora deve entender?",
            "choices": [
                "O GitHub preenche automaticamente todos os campos SARIF ausentes a partir do código",
                "O alerta é inválido porque não veio do CodeQL",
                "O repositório não tem acesso à análise de código",
                "Ferramentas externas podem omitir detalhes específicos do CodeQL"
            ],
            "explanations": [
                "O GitHub não garante reconstruir todos os detalhes opcionais.",
                "A análise de código aceita descobertas SARIF compatíveis de terceiros.",
                "Uma diferença nos detalhes não comprova falha de acesso.",
                "Os detalhes dependem das informações fornecidas por cada ferramenta de análise."
            ],
            "concept": "Detalhes do alerta dependentes da ferramenta",
            "hints": [
                "Qual ferramenta gerou o resultado e o que ela incluiu?",
                "Um alerta pode ser válido e ainda mostrar menos propriedades de análise?"
            ]
        },
        "ghas-code-019": {
            "prompt": "Vários caminhos de origem chegam à mesma operação insegura. Como a análise de código pode apresentar essas descobertas relacionadas?",
            "choices": [
                "Exibir um alerta com vários caminhos para o mesmo problema",
                "Criar um alerta separado para cada caminho do mesmo problema",
                "Manter somente o caminho mais curto como evidência",
                "Combinar caminhos de problemas distintos em um alerta"
            ],
            "explanations": [
                "Caminhos relacionados podem ser agrupados em um alerta para o problema subjacente.",
                "Um alerta por caminho pode fragmentar uma mesma fraqueza em duplicatas.",
                "Descartar caminhos perde evidências úteis sobre como o problema pode ser alcançado.",
                "Fraquezas distintas não devem ser combinadas em um único alerta."
            ],
            "concept": "Agrupamento de caminhos em alertas",
            "hints": [
                "Os caminhos representam fraquezas distintas ou rotas até a mesma fraqueza?",
                "Como um alerta pode mostrar várias formas de chegar ao mesmo problema?"
            ]
        },
        "ghas-code-020": {
            "prompt": "Um repositório envia resultados de duas configurações do mesmo analisador. Qual é a principal finalidade da categoria?",
            "choices": [
                "Nomear o ecossistema de dependências",
                "Identificar e distinguir o conjunto de resultados da análise",
                "Definir a gravidade do alerta",
                "Escolher um padrão de análise de segredos"
            ],
            "explanations": [
                "Ecossistemas de dependências são configurados separadamente.",
                "Uma categoria identifica uma análise, como uma execução de ferramenta ou configuração.",
                "A gravidade descreve uma descoberta individual, não o rótulo do conjunto.",
                "Padrões de segredos têm sua própria configuração."
            ],
            "concept": "Rótulos de categoria de análise",
            "hints": [
                "O que um rótulo estável deve distinguir entre análises separadas?",
                "A categoria descreve um conjunto de resultados ou o risco de uma descoberta individual?"
            ]
        },
        "ghas-code-021": {
            "prompt": "Um repositório que usa a configuração padrão do CodeQL agora precisa de um fluxo personalizado. O que a pessoa mantenedora deve fazer ao mudar para a configuração avançada?",
            "choices": [
                "Excluir todos os alertas de análise de código existentes",
                "Substituir o fluxo CodeQL por um cronograma do Dependabot",
                "Use `Switch to advanced` e confirme `Disable CodeQL`",
                "Habilitar a configuração avançada e manter a padrão ativa"
            ],
            "explanations": [
                "Excluir alertas não altera qual configuração é executada.",
                "Cronogramas do Dependabot não configuram análise de código.",
                "O fluxo de mudança do GitHub desabilita a configuração padrão antes de configurar o fluxo avançado.",
                "Os tipos de configuração são alternados; não permanecem ativos juntos para a mesma configuração CodeQL."
            ],
            "concept": "Mudança entre tipos de configuração do CodeQL",
            "hints": [
                "Qual configuração precisa ser desabilitada ao migrar para um fluxo personalizável?",
                "O que a confirmação da mudança altera antes da configuração avançada?"
            ]
        },
        "ghas-code-022": {
            "prompt": "A análise CodeQL para de produzir alertas depois de uma edição no fluxo. O que a pessoa mantenedora deve inspecionar primeiro?",
            "choices": [
                "A lista de licenças SPDX do repositório",
                "O status de validade da análise de segredos",
                "O limite de pull requests abertos do Dependabot",
                "Verifique os logs e o status do envio"
            ],
            "explanations": [
                "Metadados de licença não diagnosticam uma execução CodeQL.",
                "O status de validade trata de credenciais detectadas.",
                "O limite do Dependabot restringe somente pull requests de atualização.",
                "Logs e configuração do fluxo revelam falhas de análise ou envio."
            ],
            "concept": "Solução de problemas de análise baseada em evidências",
            "hints": [
                "O trabalho analisou as linguagens previstas e concluiu o envio dos resultados?",
                "Qual evidência distingue falha de configuração de uma análise limpa?"
            ]
        },
        "ghas-code-023": {
            "prompt": "Um fluxo CodeQL usa um filtro `pull_request.paths-ignore` para documentação. Outro arquivo-fonte também muda no mesmo pull request. O que a equipe deve esperar?",
            "choices": [
                "O fluxo pode executar; `paths-ignore` filtra o evento, não os arquivos analisados",
                "Somente arquivos não ignorados são analisados porque o filtro exclui esses caminhos",
                "O filtro remove do histórico Git a documentação correspondente",
                "O filtro descarta alertas nos caminhos ignorados"
            ],
            "explanations": [
                "Uma alteração em arquivo-fonte pode iniciar o fluxo; o filtro do evento não exclui arquivos da própria análise.",
                "Filtros de caminho do fluxo não removem automaticamente arquivos correspondentes do escopo de análise.",
                "Um filtro do fluxo não reescreve nem remove o histórico do repositório.",
                "O filtro do evento não descarta alertas de análise de código nesses caminhos."
            ],
            "concept": "Filtros de gatilho versus exclusões de análise",
            "hints": [
                "O filtro controla a execução do fluxo ou a seleção de arquivos dentro da execução?",
                "O que pode ocorrer se também mudar um arquivo não ignorado?"
            ]
        },
        "ghas-code-024": {
            "prompt": "Um alerta SARIF aponta para o arquivo errado após o envio. Qual propriedade a integração deve verificar primeiro?",
            "choices": [
                "Se o banco CodeQL tem mais consultas",
                "Se `artifactLocation.uri` corresponde de forma consistente ao caminho-fonte do repositório",
                "Se o cronograma do Dependabot coincide com o horário do envio",
                "Se o padrão de segredos contém um grupo de captura"
            ],
            "explanations": [
                "A quantidade de consultas não corrige um caminho-fonte incompatível.",
                "Localizações SARIF precisam de caminhos que o GitHub possa mapear aos arquivos do repositório.",
                "Cronogramas do Dependabot não controlam caminhos SARIF.",
                "Grupos de expressão regular não localizam resultados de análise de código."
            ],
            "concept": "Mapeamento de localização de origem SARIF",
            "hints": [
                "Qual campo do resultado identifica o arquivo-fonte afetado?",
                "Os caminhos enviados correspondem à estrutura do repositório analisado?"
            ]
        },
        "ghas-code-025": {
            "prompt": "Um fluxo avançado do CodeQL precisa analisar Kotlin. Qual identificador agrupa Kotlin com Java?",
            "choices": [
                "`jvm-bytecode`",
                "Somente `java`",
                "`java-kotlin`",
                "`kotlin-java`"
            ],
            "explanations": [
                "Esta não é uma chave de linguagem compatível com o CodeQL.",
                "O identificador combinado documentado inclui Kotlin.",
                "O CodeQL usa `java-kotlin` para Java, Kotlin ou ambos.",
                "O rótulo invertido não é o identificador documentado."
            ],
            "concept": "Identificadores de linguagens do CodeQL",
            "hints": [
                "Qual chave de configuração cobre as linguagens JVM deste repositório?",
                "Como o CodeQL nomeia o destino de análise conjunto de Java e Kotlin?"
            ]
        },
        "ghas-code-026": {
            "prompt": "Uma base de código contém JavaScript e TypeScript. Como o fluxo CodeQL deve nomear essa análise de linguagem?",
            "choices": [
                "`javascript` e `typescript` como bancos obrigatórios não relacionados",
                "`node-web`",
                "`typescript-only`",
                "`javascript-typescript`"
            ],
            "explanations": [
                "O identificador documentado combina essas linguagens.",
                "Este não é um identificador de linguagem CodeQL documentado.",
                "A análise combinada oferece suporte às duas linguagens.",
                "O CodeQL usa `javascript-typescript` para analisar JavaScript, TypeScript ou ambos."
            ],
            "concept": "Análise combinada de JavaScript e TypeScript",
            "hints": [
                "O CodeQL trata esses arquivos como um único destino de análise compatível?",
                "Qual identificador configurado inclui as duas linguagens?"
            ]
        },
        "ghas-code-027": {
            "prompt": "Uma análise de terceiros termina com sucesso, mas nenhum alerta novo aparece no GitHub. Qual etapa a pessoa responsável deve verificar?",
            "choices": [
                "Se o envio SARIF terminou e foi aceito para o repositório e a categoria pretendidos",
                "Se a verificação de validade de segredos executou",
                "Se o Dependabot tem um pull request de atualização aberto",
                "Se o repositório tem uma versão recente"
            ],
            "explanations": [
                "Análise bem-sucedida e ingestão de resultados bem-sucedida são etapas distintas.",
                "Verificações de validade não importam resultados de análise de código.",
                "Atualizações do Dependabot não incorporam SARIF.",
                "Uma versão publicada não comprova que uma análise foi enviada."
            ],
            "concept": "Sucesso da análise versus ingestão",
            "hints": [
                "A ferramenta concluiu a análise e o GitHub aceitou os resultados?",
                "Qual transferência pode falhar após a análise terminar?"
            ]
        },
        "ghas-code-028": {
            "prompt": "O que um banco CodeQL representa no processo de análise?",
            "choices": [
                "Um inventário SPDX do software",
                "Uma representação consultável do código-fonte",
                "Um catálogo de versões vulneráveis de pacotes",
                "Um histórico de bypasses da proteção de push"
            ],
            "explanations": [
                "Um inventário SPDX é uma SBOM, não um banco CodeQL.",
                "Bancos CodeQL representam código e estrutura relevante para consultas.",
                "Registros de pacotes vulneráveis vêm de avisos e dados de dependências.",
                "Eventos de bypass pertencem à proteção de push."
            ],
            "concept": "Finalidade do banco CodeQL",
            "hints": [
                "O que o mecanismo de consultas precisa inspecionar além do texto bruto?",
                "Qual artefato prepara uma base de código para consultas CodeQL?"
            ]
        },
        "ghas-code-029": {
            "prompt": "Depois de mudar para uma suíte ampliada de consultas CodeQL, uma equipe vê alertas adicionais. Qual é a melhor interpretação?",
            "choices": [
                "O repositório mudou para o Dependabot",
                "Os alertas adicionais comprovam que o build foi comprometido",
                "Consultas adicionais podem gerar achados; revise os novos alertas",
                "Todos os alertas novos devem ser falsos positivos"
            ],
            "explanations": [
                "A seleção de consultas CodeQL não troca a ferramenta de dependências.",
                "Encontrar mais problemas não comprova uma invasão.",
                "Suítes mais amplas podem aumentar o conjunto de consultas e exigem triagem normal de alertas.",
                "Cada resultado novo deve ser avaliado, não descartado em bloco."
            ],
            "concept": "Interpretação da expansão de suíte",
            "hints": [
                "O que mudou na cobertura de análise selecionada?",
                "Como as novas descobertas devem ser avaliadas antes de alterar a suíte?"
            ]
        },
        "ghas-code-030": {
            "prompt": "Um projeto quer que a análise CodeQL inclua descobertas de segurança e verificações de qualidade de código. Qual suíte de consultas foi criada para ambos?",
            "choices": [
                "Somente `security-extended`",
                "Somente `default`",
                "`github-actions`",
                "`security-and-quality`"
            ],
            "explanations": [
                "Security-extended se concentra em consultas adicionais de segurança.",
                "Default é a suíte padrão, não a suíte combinada de qualidade.",
                "`github-actions` é um identificador de linguagem, não uma suíte de consultas.",
                "A suíte security-and-quality inclui cobertura de consultas de segurança e qualidade."
            ],
            "concept": "Suíte de consultas de segurança e qualidade",
            "hints": [
                "A equipe precisa somente de verificações de segurança ou também de qualidade?",
                "Qual suíte combina os dois objetivos de consulta?"
            ]
        },
        "ghas-operations-001": {
            "prompt": "Qual identificador dá nome a uma vulnerabilidade específica divulgada publicamente, não a uma categoria de fraqueza nem a um registro de aviso?",
            "choices": [
                "CVE",
                "CWE",
                "GHSA",
                "CVSS"
            ],
            "explanations": [
                "Um CVE identifica uma vulnerabilidade divulgada publicamente, não uma classe geral de fraqueza.",
                "Um CWE identifica uma categoria de fraqueza de software, como validação inadequada de entradas.",
                "Um identificador GHSA identifica de forma única um aviso no GitHub Advisory Database.",
                "CVSS expressa a gravidade de uma vulnerabilidade; não é um identificador de vulnerabilidade nem de aviso."
            ],
            "concept": "Identidade de vulnerabilidades",
            "hints": [
                "Diferencie uma vulnerabilidade específica de uma categoria recorrente de fraqueza.",
                "Um identificador dá nome a algo; uma pontuação mede uma propriedade."
            ]
        },
        "ghas-operations-002": {
            "prompt": "Um relatório de treinamento agrupa resultados pela fraqueza subjacente, como validação inadequada de entradas. Qual classificação corresponde?",
            "choices": [
                "CVSS",
                "CVE",
                "CWE",
                "GHSA"
            ],
            "explanations": [
                "CVSS expressa a gravidade de uma vulnerabilidade; não é um identificador de vulnerabilidade nem de aviso.",
                "Um CVE identifica uma vulnerabilidade divulgada publicamente, não uma classe geral de fraqueza.",
                "Um CWE identifica uma categoria de fraqueza de software, como validação inadequada de entradas.",
                "Um identificador GHSA identifica de forma única um aviso no GitHub Advisory Database."
            ],
            "concept": "Taxonomia de fraquezas",
            "hints": [
                "Diferencie uma vulnerabilidade específica de uma categoria recorrente de fraqueza.",
                "Um identificador dá nome a algo; uma pontuação mede uma propriedade."
            ]
        },
        "ghas-operations-003": {
            "prompt": "Qual identificador é atribuído a cada registro do GitHub Advisory Database, incluindo os que não têm CVE?",
            "choices": [
                "CVSS",
                "CVE",
                "CWE",
                "GHSA"
            ],
            "explanations": [
                "CVSS expressa a gravidade de uma vulnerabilidade; não é um identificador de vulnerabilidade nem de aviso.",
                "Um CVE identifica uma vulnerabilidade divulgada publicamente, não uma classe geral de fraqueza.",
                "Um CWE identifica uma categoria de fraqueza de software, como validação inadequada de entradas.",
                "Um identificador GHSA identifica de forma única um aviso no GitHub Advisory Database."
            ],
            "concept": "Identidade dos avisos do GitHub",
            "hints": [
                "Diferencie uma vulnerabilidade específica de uma categoria recorrente de fraqueza.",
                "Um identificador dá nome a algo; uma pontuação mede uma propriedade."
            ]
        },
        "ghas-operations-004": {
            "prompt": "Qual sinal representa a gravidade de uma vulnerabilidade, não a probabilidade prevista de exploração?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Escopo da dependência"
            ],
            "explanations": [
                "CVSS mede gravidade; a exposição do negócio e a probabilidade de exploração exigem contexto adicional.",
                "EPSS estima a probabilidade de exploração real; não comprova que uma aplicação específica possa ser explorada.",
                "A análise de alcançabilidade examina se o código da aplicação pode alcançar código vulnerável de uma dependência, quando há suporte.",
                "O escopo diferencia uso em produção e desenvolvimento; dependências de desenvolvimento também podem importar para a segurança."
            ],
            "concept": "Gravidade versus probabilidade de exploração",
            "hints": [
                "Não iguale a gravidade intrínseca à probabilidade ou ao impacto de exploração neste caso.",
                "Combine sinais independentes e considere as análises indisponíveis."
            ]
        },
        "ghas-operations-005": {
            "prompt": "Qual sinal estima a exploração real e deve ser combinado com o contexto específico do repositório?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Escopo da dependência"
            ],
            "explanations": [
                "CVSS mede gravidade; a exposição do negócio e a probabilidade de exploração exigem contexto adicional.",
                "EPSS estima a probabilidade de exploração real; não comprova que uma aplicação específica possa ser explorada.",
                "A análise de alcançabilidade examina se o código da aplicação pode alcançar código vulnerável de uma dependência, quando há suporte.",
                "O escopo diferencia uso em produção e desenvolvimento; dependências de desenvolvimento também podem importar para a segurança."
            ],
            "concept": "Interpretação do EPSS",
            "hints": [
                "Não iguale a gravidade intrínseca à probabilidade ou ao impacto de exploração neste caso.",
                "Combine sinais independentes e considere as análises indisponíveis."
            ]
        },
        "ghas-operations-006": {
            "prompt": "Quando há suporte, qual análise verifica se o código da aplicação pode chamar o código vulnerável da dependência?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Escopo da dependência"
            ],
            "explanations": [
                "CVSS mede gravidade; a exposição do negócio e a probabilidade de exploração exigem contexto adicional.",
                "EPSS estima a probabilidade de exploração real; não comprova que uma aplicação específica possa ser explorada.",
                "A análise de alcançabilidade examina se o código da aplicação pode alcançar código vulnerável de uma dependência, quando há suporte.",
                "O escopo diferencia uso em produção e desenvolvimento; dependências de desenvolvimento também podem importar para a segurança."
            ],
            "concept": "Evidências de alcançabilidade de dependências",
            "hints": [
                "Não iguale a gravidade intrínseca à probabilidade ou ao impacto de exploração neste caso.",
                "Combine sinais independentes e considere as análises indisponíveis."
            ]
        },
        "ghas-operations-007": {
            "prompt": "Qual contexto do alerta diferencia um pacote usado em execução de outro declarado apenas para desenvolvimento?",
            "choices": [
                "CVSS",
                "EPSS",
                "Reachability",
                "Escopo da dependência"
            ],
            "explanations": [
                "CVSS mede gravidade; a exposição do negócio e a probabilidade de exploração exigem contexto adicional.",
                "EPSS estima a probabilidade de exploração real; não comprova que uma aplicação específica possa ser explorada.",
                "A análise de alcançabilidade examina se o código da aplicação pode alcançar código vulnerável de uma dependência, quando há suporte.",
                "O escopo diferencia uso em produção e desenvolvimento; dependências de desenvolvimento também podem importar para a segurança."
            ],
            "concept": "Contexto de dependências de produção e desenvolvimento",
            "hints": [
                "Não iguale a gravidade intrínseca à probabilidade ou ao impacto de exploração neste caso.",
                "Combine sinais independentes e considere as análises indisponíveis."
            ]
        },
        "ghas-operations-008": {
            "prompt": "Um aviso identifica uma versão corrigida. O que prepara a correção proposta da dependência para uma decisão segura de merge?",
            "choices": [
                "Revisar a versão corrigida e testar a compatibilidade da atualização.",
                "Usar gravidade e outros sinais quando a alcançabilidade estiver indisponível.",
                "Reduzir a prioridade com cautela e reavaliar um resultado Unreachable.",
                "Priorizar uso exposto em produção com evidências confiáveis de exploração."
            ],
            "explanations": [
                "Uma correção publicada permite agir, mas ainda é preciso verificar a compatibilidade e a adoção real.",
                "Uma análise indisponível é uma informação desconhecida, não uma conclusão de código inalcançável.",
                "Um resultado inalcançável pode mudar com o código ou o aviso e não basta por si só para dispensar o alerta.",
                "A exposição em produção e as evidências de exploração podem aumentar a urgência além do rótulo de gravidade."
            ],
            "concept": "Validação de patches aplicáveis",
            "hints": [
                "A ausência de evidência não equivale a comprovar que um caminho não existe.",
                "A priorização deve refletir exposição, possibilidade de exploração e evidências de correção."
            ]
        },
        "ghas-operations-009": {
            "prompt": "Dois resultados têm gravidade semelhante. Qual resposta prioriza melhor aquele usado em um caminho exposto de produção com evidências confiáveis de exploração?",
            "choices": [
                "Reduzir a prioridade com cautela e reavaliar um resultado Unreachable.",
                "Priorizar uso exposto em produção com evidências confiáveis de exploração.",
                "Revisar a versão corrigida e testar a compatibilidade da atualização.",
                "Usar gravidade e outros sinais quando a alcançabilidade estiver indisponível."
            ],
            "explanations": [
                "Um resultado inalcançável pode mudar com o código ou o aviso e não basta por si só para dispensar o alerta.",
                "A exposição em produção e as evidências de exploração podem aumentar a urgência além do rótulo de gravidade.",
                "Uma correção publicada permite agir, mas ainda é preciso verificar a compatibilidade e a adoção real.",
                "Uma análise indisponível é uma informação desconhecida, não uma conclusão de código inalcançável."
            ],
            "concept": "Prioridade contextual de correção",
            "hints": [
                "A ausência de evidência não equivale a comprovar que um caminho não existe.",
                "A priorização deve refletir exposição, possibilidade de exploração e evidências de correção."
            ]
        },
        "ghas-operations-010": {
            "prompt": "Um alerta do Dependabot indica “Reachability unavailable”. Qual é a resposta adequada de priorização?",
            "choices": [
                "Reduzir a prioridade com cautela e reavaliar um resultado Unreachable.",
                "Priorizar uso exposto em produção com evidências confiáveis de exploração.",
                "Revisar a versão corrigida e testar a compatibilidade da atualização.",
                "Usar gravidade e outros sinais quando a alcançabilidade estiver indisponível."
            ],
            "explanations": [
                "Um resultado inalcançável pode mudar com o código ou o aviso e não basta por si só para dispensar o alerta.",
                "A exposição em produção e as evidências de exploração podem aumentar a urgência além do rótulo de gravidade.",
                "Uma correção publicada permite agir, mas ainda é preciso verificar a compatibilidade e a adoção real.",
                "Uma análise indisponível é uma informação desconhecida, não uma conclusão de código inalcançável."
            ],
            "concept": "A ausência de alcançabilidade não comprova segurança",
            "hints": [
                "A ausência de evidência não equivale a comprovar que um caminho não existe.",
                "A priorização deve refletir exposição, possibilidade de exploração e evidências de correção."
            ]
        },
        "ghas-operations-011": {
            "prompt": "Como um analista deve tratar um resultado de dependência “Unreachable” se não há outra justificativa para dispensá-lo?",
            "choices": [
                "Revisar a versão corrigida e testar a compatibilidade da atualização.",
                "Usar gravidade e outros sinais quando a alcançabilidade estiver indisponível.",
                "Reduzir a prioridade com cautela e reavaliar um resultado Unreachable.",
                "Priorizar uso exposto em produção com evidências confiáveis de exploração."
            ],
            "explanations": [
                "Uma correção publicada permite agir, mas ainda é preciso verificar a compatibilidade e a adoção real.",
                "Uma análise indisponível é uma informação desconhecida, não uma conclusão de código inalcançável.",
                "Um resultado inalcançável pode mudar com o código ou o aviso e não basta por si só para dispensar o alerta.",
                "A exposição em produção e as evidências de exploração podem aumentar a urgência além do rótulo de gravidade."
            ],
            "concept": "Uso cauteloso de resultados inalcançáveis",
            "hints": [
                "A ausência de evidência não equivale a comprovar que um caminho não existe.",
                "A priorização deve refletir exposição, possibilidade de exploração e evidências de correção."
            ]
        },
        "ghas-operations-012": {
            "prompt": "Uma credencial de produção foi exposta. Qual ação elimina sua autoridade, em vez de apenas alterar o conteúdo do repositório?",
            "choices": [
                "Resolver o alerta com um motivo preciso.",
                "Revogar ou rotacionar a credencial exposta.",
                "Remover o segredo do código-fonte atual.",
                "Revisar a exposição e a atividade do provedor."
            ],
            "explanations": [
                "Resolver o alerta registra a resposta; alterar o status não revoga por si só a credencial.",
                "Revogar ou rotacionar elimina a autoridade da credencial no provedor; excluir um arquivo não faz isso.",
                "Limpar o código evita continuar distribuindo o segredo, mas não invalida cópias já vazadas.",
                "A revisão do incidente ajuda a determinar uso indevido e impacto; não equivale a alterar a validade da credencial."
            ],
            "concept": "Contenção de credenciais",
            "hints": [
                "Diferencie remover uma credencial de remover sua autoridade.",
                "O registro do alerta e a exposição subjacente são coisas diferentes."
            ]
        },
        "ghas-operations-013": {
            "prompt": "Um desenvolvedor alterou o código de um alerta de análise. O que é necessário antes de considerar a falha corrigida?",
            "choices": [
                "Verificar a correção com análise recente e pertinente.",
                "Reabrir o alerta quando a dispensa deixar de ser justificada.",
                "Documentar uma dispensa justificada como falso positivo.",
                "Registrar o risco aceito e sua justificativa."
            ],
            "explanations": [
                "Uma correção é demonstrada por análise pertinente do código alterado, não apenas por editar ou dispensar um alerta.",
                "Uma premissa alterada ou um caminho de código agora aplicável pode invalidar uma dispensa anterior.",
                "Dispensar como falso positivo exige evidências de que a vulnerabilidade não se aplica ao código analisado.",
                "Aceitar um risco reconhece uma falha não corrigida; isso não deve ser relatado como correção verificada."
            ],
            "concept": "Verificação de correções baseada em evidências",
            "hints": [
                "Diferencie evidências sobre um resultado de uma decisão de tolerar o risco.",
                "Escolha uma decisão que continue verdadeira quando outra pessoa a revisar."
            ]
        },
        "ghas-operations-014": {
            "prompt": "Uma equipe tolera deliberadamente por enquanto uma vulnerabilidade real no código. Qual decisão descreve isso com honestidade?",
            "choices": [
                "Verificar a correção com análise recente e pertinente.",
                "Reabrir o alerta quando a dispensa deixar de ser justificada.",
                "Documentar uma dispensa justificada como falso positivo.",
                "Registrar o risco aceito e sua justificativa."
            ],
            "explanations": [
                "Uma correção é demonstrada por análise pertinente do código alterado, não apenas por editar ou dispensar um alerta.",
                "Uma premissa alterada ou um caminho de código agora aplicável pode invalidar uma dispensa anterior.",
                "Dispensar como falso positivo exige evidências de que a vulnerabilidade não se aplica ao código analisado.",
                "Aceitar um risco reconhece uma falha não corrigida; isso não deve ser relatado como correção verificada."
            ],
            "concept": "Risco aceito versus status corrigido",
            "hints": [
                "Diferencie evidências sobre um resultado de uma decisão de tolerar o risco.",
                "Escolha uma decisão que continue verdadeira quando outra pessoa a revisar."
            ]
        },
        "ghas-operations-015": {
            "prompt": "Uma revisão demonstra que o caminho inseguro modelado de um alerta não pode ocorrer na implementação analisada. Qual decisão documentada corresponde?",
            "choices": [
                "Verificar a correção com análise recente e pertinente.",
                "Reabrir o alerta quando a dispensa deixar de ser justificada.",
                "Documentar uma dispensa justificada como falso positivo.",
                "Registrar o risco aceito e sua justificativa."
            ],
            "explanations": [
                "Uma correção é demonstrada por análise pertinente do código alterado, não apenas por editar ou dispensar um alerta.",
                "Uma premissa alterada ou um caminho de código agora aplicável pode invalidar uma dispensa anterior.",
                "Dispensar como falso positivo exige evidências de que a vulnerabilidade não se aplica ao código analisado.",
                "Aceitar um risco reconhece uma falha não corrigida; isso não deve ser relatado como correção verificada."
            ],
            "concept": "Dispensa de falsos positivos sustentada por evidências",
            "hints": [
                "Diferencie evidências sobre um resultado de uma decisão de tolerar o risco.",
                "Escolha uma decisão que continue verdadeira quando outra pessoa a revisar."
            ]
        },
        "ghas-operations-016": {
            "prompt": "Foi aprovada a dispensa em massa de resultados com uma condição verificada em comum. Qual registro preserva melhor por que não foram tratados como correções?",
            "choices": [
                "Audit log",
                "Justificativa da dispensa de alertas",
                "Revisão periódica de exceções",
                "Relatórios limitados por permissões"
            ],
            "explanations": [
                "Os logs de auditoria registram eventos suportados de segredos e Dependabot; não incluem eventos da linha do tempo dos alertas de código.",
                "Uma justificativa útil explica por que um resultado foi dispensado sem sugerir que ele foi corrigido.",
                "Revisar exceções verifica se as premissas de risco e a responsabilidade anteriores continuam válidas.",
                "Os relatórios devem respeitar o acesso aos alertas, sem distribuir detalhes sensíveis a leitores não autorizados."
            ],
            "concept": "Documentação de dispensas em massa",
            "hints": [
                "Diferencie conveniência operacional de evidências duradouras de governança.",
                "Pense no que uma revisão futura precisaria para entender a decisão."
            ]
        },
        "ghas-operations-017": {
            "prompt": "Uma exceção de risco se baseou em uma premissa antiga da implantação. Qual prática detecta quando essa justificativa fica desatualizada?",
            "choices": [
                "Revisão periódica de exceções",
                "Relatórios limitados por permissões",
                "Audit log",
                "Justificativa da dispensa de alertas"
            ],
            "explanations": [
                "Revisar exceções verifica se as premissas de risco e a responsabilidade anteriores continuam válidas.",
                "Os relatórios devem respeitar o acesso aos alertas, sem distribuir detalhes sensíveis a leitores não autorizados.",
                "Os logs de auditoria registram eventos suportados de segredos e Dependabot; não incluem eventos da linha do tempo dos alertas de código.",
                "Uma justificativa útil explica por que um resultado foi dispensado sem sugerir que ele foi corrigido."
            ],
            "concept": "Reavaliação de exceções",
            "hints": [
                "Diferencie conveniência operacional de evidências duradouras de governança.",
                "Pense no que uma revisão futura precisaria para entender a decisão."
            ]
        },
        "ghas-operations-018": {
            "prompt": "A triagem automática oculta uma classe de alertas de baixo risco. Quais evidências devem acompanhar a regra para explicar os resultados suprimidos?",
            "choices": [
                "Revisão periódica de exceções",
                "Relatórios limitados por permissões",
                "Audit log",
                "Justificativa da dispensa de alertas"
            ],
            "explanations": [
                "Revisar exceções verifica se as premissas de risco e a responsabilidade anteriores continuam válidas.",
                "Os relatórios devem respeitar o acesso aos alertas, sem distribuir detalhes sensíveis a leitores não autorizados.",
                "Os logs de auditoria registram eventos suportados de segredos e Dependabot; não incluem eventos da linha do tempo dos alertas de código.",
                "Uma justificativa útil explica por que um resultado foi dispensado sem sugerir que ele foi corrigido."
            ],
            "concept": "Decisão automática de alertas auditável",
            "hints": [
                "Diferencie conveniência operacional de evidências duradouras de governança.",
                "Pense no que uma revisão futura precisaria para entender a decisão."
            ]
        },
        "ghas-operations-019": {
            "prompt": "Qual suíte integrada do CodeQL é a opção base quando a prioridade é alta precisão e menos falsos positivos?",
            "choices": [
                "security-and-quality",
                "Suíte .qls personalizada",
                "default",
                "security-extended"
            ],
            "explanations": [
                "Essa suíte de configuração avançada adiciona consultas de manutenibilidade e confiabilidade a security-extended.",
                "Uma suíte personalizada seleciona consultas por metadados, localização ou outros critérios e exige configuração avançada.",
                "A suíte default prioriza resultados de segurança de alta precisão e menos falsos positivos.",
                "Inclui as consultas de default e outras de segurança com menor precisão; a carga de triagem pode aumentar."
            ],
            "concept": "Base do CodeQL de alta precisão",
            "hints": [
                "Compare precisão, abrangência e os tipos de resultados desejados.",
                "Um conjunto mais amplo de consultas altera tanto a detecção quanto a carga de triagem."
            ]
        },
        "ghas-operations-020": {
            "prompt": "Qual suíte amplia a cobertura de segurança padrão do CodeQL aceitando alguns resultados adicionais de menor precisão?",
            "choices": [
                "Suíte .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Uma suíte personalizada seleciona consultas por metadados, localização ou outros critérios e exige configuração avançada.",
                "A suíte default prioriza resultados de segurança de alta precisão e menos falsos positivos.",
                "Inclui as consultas de default e outras de segurança com menor precisão; a carga de triagem pode aumentar.",
                "Essa suíte de configuração avançada adiciona consultas de manutenibilidade e confiabilidade a security-extended."
            ],
            "concept": "Compromisso da cobertura de segurança ampliada",
            "hints": [
                "Compare precisão, abrangência e os tipos de resultados desejados.",
                "Um conjunto mais amplo de consultas altera tanto a detecção quanto a carga de triagem."
            ]
        },
        "ghas-operations-021": {
            "prompt": "Com a configuração avançada do CodeQL, qual suíte integrada também detecta problemas de manutenibilidade e confiabilidade?",
            "choices": [
                "Suíte .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Uma suíte personalizada seleciona consultas por metadados, localização ou outros critérios e exige configuração avançada.",
                "A suíte default prioriza resultados de segurança de alta precisão e menos falsos positivos.",
                "Inclui as consultas de default e outras de segurança com menor precisão; a carga de triagem pode aumentar.",
                "Essa suíte de configuração avançada adiciona consultas de manutenibilidade e confiabilidade a security-extended."
            ],
            "concept": "Escopo de segurança e qualidade",
            "hints": [
                "Compare precisão, abrangência e os tipos de resultados desejados.",
                "Um conjunto mais amplo de consultas altera tanto a detecção quanto a carga de triagem."
            ]
        },
        "ghas-operations-022": {
            "prompt": "Qual abordagem seleciona consultas CodeQL adaptadas por metadados ou localização, em vez de escolher uma suíte integrada sem alterações?",
            "choices": [
                "Suíte .qls personalizada",
                "default",
                "security-extended",
                "security-and-quality"
            ],
            "explanations": [
                "Uma suíte personalizada seleciona consultas por metadados, localização ou outros critérios e exige configuração avançada.",
                "A suíte default prioriza resultados de segurança de alta precisão e menos falsos positivos.",
                "Inclui as consultas de default e outras de segurança com menor precisão; a carga de triagem pode aumentar.",
                "Essa suíte de configuração avançada adiciona consultas de manutenibilidade e confiabilidade a security-extended."
            ],
            "concept": "Seleção de consultas CodeQL adaptada ao risco",
            "hints": [
                "Compare precisão, abrangência e os tipos de resultados desejados.",
                "Um conjunto mais amplo de consultas altera tanto a detecção quanto a carga de triagem."
            ]
        },
        "ghas-operations-023": {
            "prompt": "Um repositório multilíngue adota uma suíte do CodeQL. Qual revisão é necessária antes de presumir que ela detecta as mesmas fraquezas em todas as linguagens?",
            "choices": [
                "Usar apenas o volume de alertas como medida de sucesso da detecção.",
                "Revisar a cobertura de consultas de cada linguagem segundo fraquezas relevantes.",
                "Medir resultados úteis e carga de falsos positivos em um piloto.",
                "Tratar todas as linguagens como se tivessem consultas idênticas."
            ],
            "explanations": [
                "Mais alertas podem incluir mais falsos positivos; a quantidade por si só não comprova valor de detecção.",
                "As consultas CodeQL variam por linguagem; o nome de uma suíte não implica verificações idênticas para todas.",
                "Suítes mais amplas adicionam consultas de menor precisão; um piloto permite avaliar se compensam o esforço de triagem.",
                "As listas documentadas são específicas de cada linguagem; rótulos iguais não comprovam cobertura igual."
            ],
            "concept": "Adaptação da detecção por linguagem",
            "hints": [
                "A cobertura de detecção deve refletir as linguagens e os riscos presentes.",
                "Avalie a utilidade da análise além da quantidade bruta de resultados."
            ]
        },
        "ghas-operations-024": {
            "prompt": "Qual avaliação informa melhor uma organização que decide se deve ampliar a suíte padrão do CodeQL?",
            "choices": [
                "Usar apenas o volume de alertas como medida de sucesso da detecção.",
                "Revisar a cobertura de consultas de cada linguagem segundo fraquezas relevantes.",
                "Medir resultados úteis e carga de falsos positivos em um piloto.",
                "Tratar todas as linguagens como se tivessem consultas idênticas."
            ],
            "explanations": [
                "Mais alertas podem incluir mais falsos positivos; a quantidade por si só não comprova valor de detecção.",
                "As consultas CodeQL variam por linguagem; o nome de uma suíte não implica verificações idênticas para todas.",
                "Suítes mais amplas adicionam consultas de menor precisão; um piloto permite avaliar se compensam o esforço de triagem.",
                "As listas documentadas são específicas de cada linguagem; rótulos iguais não comprovam cobertura igual."
            ],
            "concept": "Planejamento de carga de suítes de consultas",
            "hints": [
                "A cobertura de detecção deve refletir as linguagens e os riscos presentes.",
                "Avalie a utilidade da análise além da quantidade bruta de resultados."
            ]
        },
        "ghas-operations-025": {
            "prompt": "O total de alertas cai após uma falha no fluxo de trabalho. Qual visualização da interface em inglês ajuda a verificar se a análise realmente foi executada?",
            "choices": [
                "Affected branches",
                "Assignees",
                "Show paths",
                "Tool status page"
            ],
            "explanations": [
                "Affected branches mostra o estado de um alerta em branches diferentes da branch padrão.",
                "Assignees identifica a pessoa responsável por corrigir um alerta, não valida uma execução de análise.",
                "Para alertas de fluxo de dados, Show paths mostra as etapas da origem ao destino que fundamentam a triagem.",
                "A página de status das ferramentas mostra quando a análise foi executada e ajuda a identificar problemas."
            ],
            "concept": "Integridade da análise antes de conclusões sobre risco",
            "hints": [
                "Verifique quais evidências respondem à pergunta imediata da análise.",
                "Um resultado limpo só é significativo se a análise prevista realmente foi executada."
            ]
        },
        "ghas-operations-026": {
            "prompt": "Para um alerta de fluxo de dados do CodeQL, qual controle da interface em inglês mostra as etapas da entrada não confiável até a operação insegura?",
            "choices": [
                "Show paths",
                "Tool status page",
                "Affected branches",
                "Assignees"
            ],
            "explanations": [
                "Para alertas de fluxo de dados, Show paths mostra as etapas da origem ao destino que fundamentam a triagem.",
                "A página de status das ferramentas mostra quando a análise foi executada e ajuda a identificar problemas.",
                "Affected branches mostra o estado de um alerta em branches diferentes da branch padrão.",
                "Assignees identifica a pessoa responsável por corrigir um alerta, não valida uma execução de análise."
            ],
            "concept": "Evidências de fluxo de dados para triagem",
            "hints": [
                "Verifique quais evidências respondem à pergunta imediata da análise.",
                "Um resultado limpo só é significativo se a análise prevista realmente foi executada."
            ]
        },
        "ghas-operations-027": {
            "prompt": "Uma equipe quer que os resultados das verificações de segurança restrinjam o merge. Qual mecanismo fornece imposição, em vez de outro detector?",
            "choices": [
                "Code scanning",
                "Repository rulesets",
                "Push protection",
                "Dependency review"
            ],
            "explanations": [
                "Code scanning pode detectar vulnerabilidades do código-fonte ao analisar um pull request.",
                "Os rulesets podem exigir verificações e outras condições antes de aceitar alterações.",
                "Push protection bloqueia segredos compatíveis durante um push, antes que entrem no repositório.",
                "Dependency review fornece informações sobre dependências alteradas antes do merge."
            ],
            "concept": "Imposição de verificações de correção",
            "hints": [
                "Posicione o controle no momento em que fornece informações.",
                "Diferencie um detector da política que exige seu resultado."
            ]
        },
        "ghas-operations-028": {
            "prompt": "Qual seleção torna uma campanha de análise de código um exercício focado de aprendizado e correção, não uma lista de alertas sem relação?",
            "choices": [
                "Agrupar alertas de código relacionados da branch padrão.",
                "Nomear um contato para a campanha.",
                "Atribuir alertas a pessoas com escrita no repositório.",
                "Acompanhar o progresso de correção dos alertas selecionados."
            ],
            "explanations": [
                "Resultados relacionados permitem reutilizar conhecimentos de correção; campanhas de código se concentram na branch padrão.",
                "Um contato identificado oferece um caminho claro para dúvidas, revisões e colaboração.",
                "Alertas de código e segredos de campanhas podem ser atribuídos a usuários com escrita; o acesso ao alerta de segredo pode ser elevado temporariamente.",
                "O acompanhamento mede o esforço direcionado de correção; criar uma campanha não é por si só corrigir."
            ],
            "concept": "Definição focada do escopo da campanha",
            "hints": [
                "Diferencie escopo, coordenação, responsabilidade e progresso da campanha.",
                "Um programa de correção precisa de trabalho rastreável, não apenas de uma contagem menor na tela."
            ]
        },
        "ghas-operations-029": {
            "prompt": "Desenvolvedores precisam de um caminho claro para dúvidas e revisões de correções da campanha. Qual prática atende a essa necessidade?",
            "choices": [
                "Agrupar alertas de código relacionados da branch padrão.",
                "Nomear um contato para a campanha.",
                "Atribuir alertas a pessoas com escrita no repositório.",
                "Acompanhar o progresso de correção dos alertas selecionados."
            ],
            "explanations": [
                "Resultados relacionados permitem reutilizar conhecimentos de correção; campanhas de código se concentram na branch padrão.",
                "Um contato identificado oferece um caminho claro para dúvidas, revisões e colaboração.",
                "Alertas de código e segredos de campanhas podem ser atribuídos a usuários com escrita; o acesso ao alerta de segredo pode ser elevado temporariamente.",
                "O acompanhamento mede o esforço direcionado de correção; criar uma campanha não é por si só corrigir."
            ],
            "concept": "Contato de colaboração da campanha",
            "hints": [
                "Diferencie escopo, coordenação, responsabilidade e progresso da campanha.",
                "Um programa de correção precisa de trabalho rastreável, não apenas de uma contagem menor na tela."
            ]
        },
        "ghas-operations-030": {
            "prompt": "Depois de lançar uma campanha, qual atividade contínua mostra se o trabalho selecionado de correção está avançando?",
            "choices": [
                "Atribuir alertas a pessoas com escrita no repositório.",
                "Acompanhar o progresso de correção dos alertas selecionados.",
                "Agrupar alertas de código relacionados da branch padrão.",
                "Nomear um contato para a campanha."
            ],
            "explanations": [
                "Alertas de código e segredos de campanhas podem ser atribuídos a usuários com escrita; o acesso ao alerta de segredo pode ser elevado temporariamente.",
                "O acompanhamento mede o esforço direcionado de correção; criar uma campanha não é por si só corrigir.",
                "Resultados relacionados permitem reutilizar conhecimentos de correção; campanhas de código se concentram na branch padrão.",
                "Um contato identificado oferece um caminho claro para dúvidas, revisões e colaboração."
            ],
            "concept": "Medição de correções da campanha",
            "hints": [
                "Diferencie escopo, coordenação, responsabilidade e progresso da campanha.",
                "Um programa de correção precisa de trabalho rastreável, não apenas de uma contagem menor na tela."
            ]
        },
        "ghas-operations-031": {
            "prompt": "Para qual grupo proposto de alertas não se deve prometer uma campanha com base nos tipos documentados atualmente?",
            "choices": [
                "Alertas de código sobre injeção SQL da branch padrão",
                "Alertas de segredos por credenciais expostas em versão prévia pública",
                "Alertas de dependências do Dependabot por vulnerabilidades conhecidas",
                "Alertas de código sobre travessia de caminhos da branch padrão"
            ],
            "explanations": [
                "São alertas de análise de código na branch padrão, um tipo documentado de campanha.",
                "As campanhas de segredos estão documentadas explicitamente como versão prévia pública.",
                "A documentação atual lista campanhas de análise de código e segredos, não alertas de vulnerabilidades do Dependabot.",
                "Também são alertas de código da branch padrão e podem ser agrupados em uma campanha."
            ],
            "concept": "Suporte a campanhas versus texto do programa",
            "hints": [
                "Verifique se os tipos de alerta de campanha documentados incluem o detector proposto.",
                "Um objetivo do programa não garante a disponibilidade de todos os recursos relacionados."
            ]
        },
        "ghas-operations-032": {
            "prompt": "Uma campanha precisa de responsáveis identificados para seus alertas de código e segredos. Qual ação suportada os estabelece?",
            "choices": [
                "Acompanhar o progresso de correção dos alertas selecionados.",
                "Agrupar alertas de código relacionados da branch padrão.",
                "Nomear um contato para a campanha.",
                "Atribuir alertas a pessoas com escrita no repositório."
            ],
            "explanations": [
                "O acompanhamento mede o esforço direcionado de correção; criar uma campanha não é por si só corrigir.",
                "Resultados relacionados permitem reutilizar conhecimentos de correção; campanhas de código se concentram na branch padrão.",
                "Um contato identificado oferece um caminho claro para dúvidas, revisões e colaboração.",
                "Alertas de código e segredos de campanhas podem ser atribuídos a usuários com escrita; o acesso ao alerta de segredo pode ser elevado temporariamente."
            ],
            "concept": "Responsabilidade elegível de alertas da campanha",
            "hints": [
                "Diferencie escopo, coordenação, responsabilidade e progresso da campanha.",
                "Um programa de correção precisa de trabalho rastreável, não apenas de uma contagem menor na tela."
            ]
        },
        "ghas-operations-033": {
            "prompt": "Um relatório entre equipes contém detalhes sensíveis de alertas. Qual abordagem preserva o limite de acesso a esses alertas?",
            "choices": [
                "Audit log",
                "Justificativa da dispensa de alertas",
                "Revisão periódica de exceções",
                "Relatórios limitados por permissões"
            ],
            "explanations": [
                "Os logs de auditoria registram eventos suportados de segredos e Dependabot; não incluem eventos da linha do tempo dos alertas de código.",
                "Uma justificativa útil explica por que um resultado foi dispensado sem sugerir que ele foi corrigido.",
                "Revisar exceções verifica se as premissas de risco e a responsabilidade anteriores continuam válidas.",
                "Os relatórios devem respeitar o acesso aos alertas, sem distribuir detalhes sensíveis a leitores não autorizados."
            ],
            "concept": "Relatórios de segurança confidenciais",
            "hints": [
                "Diferencie conveniência operacional de evidências duradouras de governança.",
                "Pense no que uma revisão futura precisaria para entender a decisão."
            ]
        },
        "ghas-operations-034": {
            "prompt": "A contagem de alertas de uma equipe cai após vários recursos de segurança pararem de executar. Qual verificação evita relatar falsamente isso como redução de risco?",
            "choices": [
                "Comparar as permissões de alertas das duas pessoas.",
                "Usar o escopo da branch padrão ao interpretar as métricas.",
                "Exportar os dados disponíveis da visualização como CSV.",
                "Verificar a cobertura antes de concluir que o risco é baixo."
            ],
            "explanations": [
                "Os dados de Security overview são filtrados pelas permissões de quem os consulta.",
                "As visualizações de Security overview informam sobre as branches padrão dos repositórios acessíveis.",
                "Várias páginas de Security overview permitem exportar CSV para análises posteriores.",
                "Uma visualização sem alertas pode refletir detecção desabilitada ou falhas não detectadas, não ausência de vulnerabilidades."
            ],
            "concept": "Relatórios de correção atentos à cobertura",
            "hints": [
                "Trate os resultados do painel como observações com escopo, não como prova universal.",
                "Verifique tanto o que foi medido quanto o que a pessoa tem permissão para ver."
            ]
        },
        "ghas-operations-035": {
            "prompt": "Mantenedores precisam coordenar uma correção com um pesquisador antes de publicar detalhes. Qual recurso permite esse fluxo?",
            "choices": [
                "Repository security advisories",
                "GitHub Advisory Database",
                "SECURITY.md",
                "Private vulnerability reporting"
            ],
            "explanations": [
                "Os avisos do repositório permitem discussão privada, correções coordenadas e publicação posterior.",
                "A base é uma coleção pesquisável de avisos de segurança publicados.",
                "Uma política de segurança explica as versões com suporte e como relatar vulnerabilidades.",
                "Esse recurso oferece a pesquisadores um canal privado para relatar problemas aos mantenedores."
            ],
            "concept": "Fluxo de correção do privado ao público",
            "hints": [
                "Diferencie instruções, recebimento confidencial, correção coordenada e dados públicos de referência.",
                "Considere o público e a etapa de divulgação."
            ]
        },
        "ghas-operations-036": {
            "prompt": "Qual estratégia evita tratar uma condição final de lançamento como o único controle de segurança do desenvolvimento?",
            "choices": [
                "Fornecer informações de segurança aos desenvolvedores antes do merge.",
                "Combinar detecção antecipada com verificações obrigatórias de merge.",
                "Coordenar uma campanha focada na correção de alertas pendentes.",
                "Continuar monitorando após incorporar correções à branch padrão."
            ],
            "explanations": [
                "As informações antecipadas ajudam a evitar vulnerabilidades em vez de descobri-las apenas no lançamento.",
                "A detecção fornece resultados; as verificações obrigatórias decidem se as alterações podem prosseguir. Os controles se complementam.",
                "Uma campanha organiza correções pendentes; não previne todas as novas vulnerabilidades.",
                "Novos avisos e alterações de código podem introduzir riscos após uma correção anterior."
            ],
            "concept": "Operações preventivas em camadas",
            "hints": [
                "Considere quando as informações chegam e se ainda é necessário corrigir a falha.",
                "Um controle preventivo e uma condição de lançamento podem abordar falhas diferentes."
            ]
        },
        "ghas-operations-037": {
            "prompt": "Um alerta de código está corrigido na branch padrão, mas continua aberto em uma branch de lançamento. Qual seção da interface em inglês diferencia esses estados?",
            "choices": [
                "Assignees",
                "Show paths",
                "Tool status page",
                "Affected branches"
            ],
            "explanations": [
                "Assignees identifica a pessoa responsável por corrigir um alerta, não valida uma execução de análise.",
                "Para alertas de fluxo de dados, Show paths mostra as etapas da origem ao destino que fundamentam a triagem.",
                "A página de status das ferramentas mostra quando a análise foi executada e ajuda a identificar problemas.",
                "Affected branches mostra o estado de um alerta em branches diferentes da branch padrão."
            ],
            "concept": "Verificação de correções por branch",
            "hints": [
                "Verifique quais evidências respondem à pergunta imediata da análise.",
                "Um resultado limpo só é significativo se a análise prevista realmente foi executada."
            ]
        },
        "ghas-operations-038": {
            "prompt": "Qual filtro literal de análise de código seleciona alertas abertos de gravidade alta em main?",
            "choices": [
                "is:closed severity:high branch:main",
                "is:open severity:high branch:main",
                "is:open severity:low branch:main",
                "is:open severity:high branch:release"
            ],
            "explanations": [
                "Seleciona alertas de código fechados, de gravidade alta e presentes em main.",
                "Seleciona alertas de código abertos de gravidade alta em main.",
                "Restringe os alertas abertos à gravidade baixa, não alta.",
                "Usa release como escopo da branch em vez de main."
            ],
            "concept": "Filtragem de listas de alertas com escopo",
            "hints": [
                "Leia cada filtro como uma restrição do conjunto de resultados.",
                "Diferencie o estado do alerta da gravidade e do escopo da branch."
            ]
        },
        "ghas-operations-039": {
            "prompt": "Qual fonte de evidências uma investigação deve consultar para atribuir ações suportadas de alertas de segurança aos seus autores?",
            "choices": [
                "Audit log",
                "Justificativa da dispensa de alertas",
                "Revisão periódica de exceções",
                "Relatórios limitados por permissões"
            ],
            "explanations": [
                "Os logs de auditoria registram eventos suportados de segredos e Dependabot; não incluem eventos da linha do tempo dos alertas de código.",
                "Uma justificativa útil explica por que um resultado foi dispensado sem sugerir que ele foi corrigido.",
                "Revisar exceções verifica se as premissas de risco e a responsabilidade anteriores continuam válidas.",
                "Os relatórios devem respeitar o acesso aos alertas, sem distribuir detalhes sensíveis a leitores não autorizados."
            ],
            "concept": "Auditabilidade de ações de segurança",
            "hints": [
                "Diferencie conveniência operacional de evidências duradouras de governança.",
                "Pense no que uma revisão futura precisaria para entender a decisão."
            ]
        },
        "ghas-operations-040": {
            "prompt": "O Copilot Autofix sugere um patch para um alerta de código. O que continua necessário antes de relatar uma correção bem-sucedida?",
            "choices": [
                "Documentar uma dispensa justificada como falso positivo.",
                "Registrar o risco aceito e sua justificativa.",
                "Verificar a correção com análise recente e pertinente.",
                "Reabrir o alerta quando a dispensa deixar de ser justificada."
            ],
            "explanations": [
                "Dispensar como falso positivo exige evidências de que a vulnerabilidade não se aplica ao código analisado.",
                "Aceitar um risco reconhece uma falha não corrigida; isso não deve ser relatado como correção verificada.",
                "Uma correção é demonstrada por análise pertinente do código alterado, não apenas por editar ou dispensar um alerta.",
                "Uma premissa alterada ou um caminho de código agora aplicável pode invalidar uma dispensa anterior."
            ],
            "concept": "Verificação de correções geradas",
            "hints": [
                "Diferencie evidências sobre um resultado de uma decisão de tolerar o risco.",
                "Escolha uma decisão que continue verdadeira quando outra pessoa a revisar."
            ]
        },
        "ghas-operations-041": {
            "prompt": "Um alerta dispensado passa a ser aplicável após uma alteração de código que invalida sua justificativa original. Qual decisão é adequada?",
            "choices": [
                "Documentar uma dispensa justificada como falso positivo.",
                "Registrar o risco aceito e sua justificativa.",
                "Verificar a correção com análise recente e pertinente.",
                "Reabrir o alerta quando a dispensa deixar de ser justificada."
            ],
            "explanations": [
                "Dispensar como falso positivo exige evidências de que a vulnerabilidade não se aplica ao código analisado.",
                "Aceitar um risco reconhece uma falha não corrigida; isso não deve ser relatado como correção verificada.",
                "Uma correção é demonstrada por análise pertinente do código alterado, não apenas por editar ou dispensar um alerta.",
                "Uma premissa alterada ou um caminho de código agora aplicável pode invalidar uma dispensa anterior."
            ],
            "concept": "Revisão de dispensas de alertas",
            "hints": [
                "Diferencie evidências sobre um resultado de uma decisão de tolerar o risco.",
                "Escolha uma decisão que continue verdadeira quando outra pessoa a revisar."
            ]
        },
        "ghas-administration-001": {
            "prompt": "Um administrador autorizado de uma organização no GitHub.com precisa criar uma configuração de segurança. Qual caminho da interface em inglês está correto?",
            "choices": [
                "Repository > Settings > Rules > Rulesets",
                "Organization > Security and quality > Risk",
                "Repository > Insights > Dependency graph",
                "Organization > Settings > Advanced Security > Configurations"
            ],
            "explanations": [
                "Os rulesets do repositório regulam restrições de branches, tags ou pushes, não configurações de segurança organizacionais.",
                "Risk é uma visualização de investigação, não o editor de configurações de segurança.",
                "Esse caminho abre o inventário de dependências, não as políticas de habilitação organizacionais.",
                "As configurações de segurança da organização são administradas nessa área de configurações."
            ],
            "concept": "Administração de configurações organizacionais",
            "hints": [
                "Escolha o escopo administrativo antes de escolher a configuração.",
                "Administrar configurações e investigar alertas são tarefas diferentes."
            ]
        },
        "ghas-administration-002": {
            "prompt": "Qual política de configuração em inglês aplica automaticamente uma base escolhida aos repositórios recém-criados com uma visibilidade selecionada?",
            "choices": [
                "Aplicar a configuração aos repositórios selecionados.",
                "Use as default for newly created repositories",
                "Enforce configuration",
                "Keep existing settings"
            ],
            "explanations": [
                "Aplicar vincula a configuração aos repositórios existentes selecionados, em vez de apenas definir um padrão para futuros repositórios.",
                "Essa política aplica automaticamente a configuração a novos repositórios da visibilidade escolhida.",
                "A imposição impede que administradores alterem recursos explicitamente habilitados ou desabilitados pela configuração.",
                "Deixar um recurso sem definição preserva a configuração existente; esse recurso não é imposto por essa configuração."
            ],
            "concept": "Padrões de configuração para novos repositórios",
            "hints": [
                "Diferencie um padrão para futuros repositórios de uma ação sobre os existentes.",
                "Estar selecionada, aplicada e imposta são estados diferentes."
            ]
        },
        "ghas-administration-003": {
            "prompt": "Um repositório é transferido para uma organização com configuração de segurança padrão. Qual ação de configuração continua necessária?",
            "choices": [
                "Verificar a configuração vinculada e seu status de imposição.",
                "Revisar a licença dos recursos pagos antes de aplicar em escala.",
                "Aplicar manualmente uma configuração adequada após a transferência.",
                "Criar uma configuração personalizada com os recursos necessários."
            ],
            "explanations": [
                "O comportamento depende do vínculo e da imposição, não apenas do nome da configuração.",
                "Aplicar recursos pagos a repositórios privados ou internos pode consumir uso licenciado e exige a licença aplicável.",
                "Os padrões se aplicam a repositórios recém-criados, não automaticamente aos transferidos.",
                "Configurações personalizadas permitem escolher uma combinação adaptada de configurações de habilitação."
            ],
            "concept": "Cobertura de repositórios transferidos",
            "hints": [
                "Verifique se o repositório é novo, transferido ou já está gerenciado.",
                "Não presuma que um padrão altere retroativamente todos os repositórios."
            ]
        },
        "ghas-administration-004": {
            "prompt": "Qual política em inglês impede que administradores de repositórios alterem recursos explicitamente habilitados ou desabilitados pela configuração aplicada?",
            "choices": [
                "Keep existing settings",
                "Aplicar a configuração aos repositórios selecionados.",
                "Use as default for newly created repositories",
                "Enforce configuration"
            ],
            "explanations": [
                "Deixar um recurso sem definição preserva a configuração existente; esse recurso não é imposto por essa configuração.",
                "Aplicar vincula a configuração aos repositórios existentes selecionados, em vez de apenas definir um padrão para futuros repositórios.",
                "Essa política aplica automaticamente a configuração a novos repositórios da visibilidade escolhida.",
                "A imposição impede que administradores alterem recursos explicitamente habilitados ou desabilitados pela configuração."
            ],
            "concept": "Limite de imposição de configurações",
            "hints": [
                "Diferencie um padrão para futuros repositórios de uma ação sobre os existentes.",
                "Estar selecionada, aplicada e imposta são estados diferentes."
            ]
        },
        "ghas-administration-005": {
            "prompt": "Em uma configuração de segurança imposta, qual opção mantém a habilitação atual de um recurso sem impô-la por essa configuração?",
            "choices": [
                "Keep existing settings",
                "Aplicar a configuração aos repositórios selecionados.",
                "Use as default for newly created repositories",
                "Enforce configuration"
            ],
            "explanations": [
                "Deixar um recurso sem definição preserva a configuração existente; esse recurso não é imposto por essa configuração.",
                "Aplicar vincula a configuração aos repositórios existentes selecionados, em vez de apenas definir um padrão para futuros repositórios.",
                "Essa política aplica automaticamente a configuração a novos repositórios da visibilidade escolhida.",
                "A imposição impede que administradores alterem recursos explicitamente habilitados ou desabilitados pela configuração."
            ],
            "concept": "Configurações sem definição sob imposição",
            "hints": [
                "Diferencie um padrão para futuros repositórios de uma ação sobre os existentes.",
                "Estar selecionada, aplicada e imposta são estados diferentes."
            ]
        },
        "ghas-administration-006": {
            "prompt": "Um grupo de repositórios precisa de uma combinação de habilitação diferente da base recomendada pelo GitHub. Qual abordagem administrativa corresponde?",
            "choices": [
                "Aplicar manualmente uma configuração adequada após a transferência.",
                "Criar uma configuração personalizada com os recursos necessários.",
                "Verificar a configuração vinculada e seu status de imposição.",
                "Revisar a licença dos recursos pagos antes de aplicar em escala."
            ],
            "explanations": [
                "Os padrões se aplicam a repositórios recém-criados, não automaticamente aos transferidos.",
                "Configurações personalizadas permitem escolher uma combinação adaptada de configurações de habilitação.",
                "O comportamento depende do vínculo e da imposição, não apenas do nome da configuração.",
                "Aplicar recursos pagos a repositórios privados ou internos pode consumir uso licenciado e exige a licença aplicável."
            ],
            "concept": "Projeto de configurações personalizadas",
            "hints": [
                "Verifique se o repositório é novo, transferido ou já está gerenciado.",
                "Não presuma que um padrão altere retroativamente todos os repositórios."
            ]
        },
        "ghas-administration-007": {
            "prompt": "Foi salvo um padrão para novos repositórios. Como um administrador incorpora repositórios já existentes a essa configuração?",
            "choices": [
                "Enforce configuration",
                "Keep existing settings",
                "Aplicar a configuração aos repositórios selecionados.",
                "Use as default for newly created repositories"
            ],
            "explanations": [
                "A imposição impede que administradores alterem recursos explicitamente habilitados ou desabilitados pela configuração.",
                "Deixar um recurso sem definição preserva a configuração existente; esse recurso não é imposto por essa configuração.",
                "Aplicar vincula a configuração aos repositórios existentes selecionados, em vez de apenas definir um padrão para futuros repositórios.",
                "Essa política aplica automaticamente a configuração a novos repositórios da visibilidade escolhida."
            ],
            "concept": "Vinculação de configurações a repositórios existentes",
            "hints": [
                "Diferencie um padrão para futuros repositórios de uma ação sobre os existentes.",
                "Estar selecionada, aplicada e imposta são estados diferentes."
            ]
        },
        "ghas-administration-008": {
            "prompt": "Qual status de configuração indica que a vinculação de um repositório está em andamento, não concluída?",
            "choices": [
                "attaching",
                "enforced",
                "failed",
                "attached"
            ],
            "explanations": [
                "A configuração ainda está sendo aplicada; esse estado transitório não comprova a conclusão.",
                "A configuração está ativa e imposta, restringindo alterações na habilitação dos recursos controlados.",
                "Uma vinculação com falha exige investigação e não comprova que os recursos previstos estejam ativos.",
                "A configuração está aplicada ativamente e o repositório herda suas configurações."
            ],
            "concept": "Aplicação pendente de configurações",
            "hints": [
                "Uma solicitação aceita não equivale a uma vinculação concluída.",
                "Interprete a relação atual do repositório com a configuração."
            ]
        },
        "ghas-administration-009": {
            "prompt": "Qual status exige investigar uma vinculação malsucedida em vez de contar o repositório como coberto?",
            "choices": [
                "enforced",
                "failed",
                "attached",
                "attaching"
            ],
            "explanations": [
                "A configuração está ativa e imposta, restringindo alterações na habilitação dos recursos controlados.",
                "Uma vinculação com falha exige investigação e não comprova que os recursos previstos estejam ativos.",
                "A configuração está aplicada ativamente e o repositório herda suas configurações.",
                "A configuração ainda está sendo aplicada; esse estado transitório não comprova a conclusão."
            ],
            "concept": "Vinculação de configuração com falha",
            "hints": [
                "Uma solicitação aceita não equivale a uma vinculação concluída.",
                "Interprete a relação atual do repositório com a configuração."
            ]
        },
        "ghas-administration-010": {
            "prompt": "Qual status indica tanto herança ativa da configuração quanto restrições a alterações de habilitação pelo administrador do repositório?",
            "choices": [
                "attaching",
                "enforced",
                "failed",
                "attached"
            ],
            "explanations": [
                "A configuração ainda está sendo aplicada; esse estado transitório não comprova a conclusão.",
                "A configuração está ativa e imposta, restringindo alterações na habilitação dos recursos controlados.",
                "Uma vinculação com falha exige investigação e não comprova que os recursos previstos estejam ativos.",
                "A configuração está aplicada ativamente e o repositório herda suas configurações."
            ],
            "concept": "Relação de configuração imposta",
            "hints": [
                "Uma solicitação aceita não equivale a uma vinculação concluída.",
                "Interprete a relação atual do repositório com a configuração."
            ]
        },
        "ghas-administration-011": {
            "prompt": "Uma equipe precisa receber a função organizacional predefinida security manager. Qual função deve realizar essa delegação?",
            "choices": [
                "Pesquisador de segurança externo",
                "Desenvolvedor do repositório",
                "Security manager",
                "Organization owner"
            ],
            "explanations": [
                "Um pesquisador relata uma possível falha; relatar não concede permissões de administração do repositório.",
                "Desenvolvedores implementam e testam correções no código que mantêm; o acesso depende das permissões atribuídas.",
                "Security managers podem gerenciar configurações e alertas de segurança em toda a organização sem acesso geral de escrita no código.",
                "Organization owners podem atribuir funções de organização, incluindo security manager."
            ],
            "concept": "Autoridade para atribuir security managers",
            "hints": [
                "Diferencie o trabalho de implementação da autoridade em toda a organização.",
                "Escolha a função cuja responsabilidade habitual corresponde à tarefa."
            ]
        },
        "ghas-administration-012": {
            "prompt": "Qual combinação de permissões a função predefinida security manager oferece sem exigir escrita geral no código?",
            "choices": [
                "Configurar recursos de segurança da organização.",
                "Ler repositórios e gerenciar alertas de segurança em toda a organização.",
                "Escrever código da aplicação em todos os repositórios.",
                "Atribuir a função de organização security manager."
            ],
            "explanations": [
                "A função concede autoridade administrativa de segurança; as licenças de recursos continuam sendo um requisito separado.",
                "Security manager concede leitura dos repositórios e escrita nos alertas de segurança em toda a organização.",
                "Security manager por si só não concede escrita geral no código-fonte das aplicações.",
                "A atribuição dessa função é responsabilidade de um organization owner."
            ],
            "concept": "Privilégio mínimo de security manager",
            "hints": [
                "Diferencie acesso ao código de autoridade sobre alertas e configurações de segurança.",
                "Uma função especializada de organização não precisa ser administradora geral de repositórios."
            ]
        },
        "ghas-administration-013": {
            "prompt": "Qual capacidade NÃO é concedida apenas pela função predefinida security manager?",
            "choices": [
                "Atribuir a função de organização security manager.",
                "Configurar recursos de segurança da organização.",
                "Ler repositórios e gerenciar alertas de segurança em toda a organização.",
                "Escrever código da aplicação em todos os repositórios."
            ],
            "explanations": [
                "A atribuição dessa função é responsabilidade de um organization owner.",
                "A função concede autoridade administrativa de segurança; as licenças de recursos continuam sendo um requisito separado.",
                "Security manager concede leitura dos repositórios e escrita nos alertas de segurança em toda a organização.",
                "Security manager por si só não concede escrita geral no código-fonte das aplicações."
            ],
            "concept": "Administrar segurança não equivale a escrever código",
            "hints": [
                "Diferencie acesso ao código de autoridade sobre alertas e configurações de segurança.",
                "Uma função especializada de organização não precisa ser administradora geral de repositórios."
            ]
        },
        "ghas-administration-014": {
            "prompt": "Sem permissões personalizadas de alertas, qual função padrão mínima permite ver o resumo completo de alertas de código, não apenas anotações em pull requests?",
            "choices": [
                "Triage",
                "Write",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Triage permite gerenciar issues e pull requests além de Read, mas fica abaixo de Write, necessário para toda a lista de alertas de código.",
                "Write é a função padrão mínima para ver o resumo completo de alertas de código, sem permissões personalizadas adicionais.",
                "Admin inclui administração do repositório e permite ver o resumo dos alertas, mas supera o mínimo necessário.",
                "Read permite ver anotações de código em pull requests e consultar rulesets ativos, mas não por si só toda a lista de alertas de código."
            ],
            "concept": "Visibilidade dos alertas de código do repositório",
            "hints": [
                "Compare a função padrão mínima, não todas as funções com maior autoridade.",
                "Ver anotações, ver uma lista de alertas e administrar um repositório são permissões diferentes."
            ]
        },
        "ghas-administration-015": {
            "prompt": "Uma branch corresponde a dois rulesets e uma regra de proteção de branch. Como suas restrições aplicáveis são resolvidas?",
            "choices": [
                "Todas as regras aplicáveis se combinam; prevalece o requisito duplicado mais restritivo.",
                "Conceder bypass apenas a atores elegíveis selecionados explicitamente.",
                "Corresponder aos padrões de branches ou tags do ruleset.",
                "Consultar rulesets ativos com acesso de leitura ao repositório."
            ],
            "explanations": [
                "Rulesets se combinam com outros rulesets e proteção de branches; não têm ordem de prioridade.",
                "Rulesets podem designar funções, equipes ou GitHub Apps para bypass, sem isentar implicitamente todas as pessoas.",
                "Rulesets de branches e tags se aplicam às referências dos padrões configurados.",
                "Quem tem leitura pode consultar rulesets ativos sem receber permissão para alterá-los."
            ],
            "concept": "Combinação de políticas sem ordem de prioridade",
            "hints": [
                "Verifique os alvos, a aplicabilidade e os atores com bypass explícito.",
                "Várias fontes de políticas podem restringir a mesma alteração."
            ]
        },
        "ghas-administration-016": {
            "prompt": "Um ruleset precisa de uma exceção restrita para um aplicativo de automação aprovado. Qual abordagem de governança corresponde?",
            "choices": [
                "Todas as regras aplicáveis se combinam; prevalece o requisito duplicado mais restritivo.",
                "Conceder bypass apenas a atores elegíveis selecionados explicitamente.",
                "Corresponder aos padrões de branches ou tags do ruleset.",
                "Consultar rulesets ativos com acesso de leitura ao repositório."
            ],
            "explanations": [
                "Rulesets se combinam com outros rulesets e proteção de branches; não têm ordem de prioridade.",
                "Rulesets podem designar funções, equipes ou GitHub Apps para bypass, sem isentar implicitamente todas as pessoas.",
                "Rulesets de branches e tags se aplicam às referências dos padrões configurados.",
                "Quem tem leitura pode consultar rulesets ativos sem receber permissão para alterá-los."
            ],
            "concept": "Governança de atores de bypass de rulesets",
            "hints": [
                "Verifique os alvos, a aplicabilidade e os atores com bypass explícito.",
                "Várias fontes de políticas podem restringir a mesma alteração."
            ]
        },
        "ghas-administration-017": {
            "prompt": "O que faz o estado de imposição Active de um ruleset na interface em inglês?",
            "choices": [
                "Manter a definição sem impor suas regras.",
                "Conceder a cada leitor do repositório permissão para editar regras.",
                "Conceder a quem escreve no repositório uma isenção automática.",
                "Impor as regras configuradas nos alvos correspondentes."
            ],
            "explanations": [
                "Manter um ruleset sem imposição descreve Disabled, não Active.",
                "Leitores podem consultar rulesets ativos; a ativação não lhes concede autoridade para editá-los.",
                "Um ruleset Active não isenta automaticamente quem tem escrita; os atores de bypass são configurados separadamente.",
                "Active significa impor as regras nos alvos correspondentes, conforme a política de bypass configurada."
            ],
            "concept": "Imposição de rulesets ativos",
            "hints": [
                "Interprete o estado de imposição separadamente do conteúdo da política.",
                "Ver uma regra não implica necessariamente autoridade para editá-la."
            ]
        },
        "ghas-administration-018": {
            "prompt": "Qual acesso mínimo ao repositório permite consultar rulesets ativos sem administrá-los?",
            "choices": [
                "Admin",
                "Read",
                "Triage",
                "Write"
            ],
            "explanations": [
                "Admin inclui administração do repositório e permite ver o resumo dos alertas, mas supera o mínimo necessário.",
                "Read permite ver anotações de código em pull requests e consultar rulesets ativos, mas não por si só toda a lista de alertas de código.",
                "Triage permite gerenciar issues e pull requests além de Read, mas fica abaixo de Write, necessário para toda a lista de alertas de código.",
                "Write é a função padrão mínima para ver o resumo completo de alertas de código, sem permissões personalizadas adicionais."
            ],
            "concept": "Transparência de políticas somente leitura",
            "hints": [
                "Compare a função padrão mínima, não todas as funções com maior autoridade.",
                "Ver anotações, ver uma lista de alertas e administrar um repositório são permissões diferentes."
            ]
        },
        "ghas-administration-019": {
            "prompt": "Contribuidores sem direitos de bypass de push protection precisam obter aprovação para exceções. Qual configuração de bypass delegado fornece essa revisão?",
            "choices": [
                "Configurar revisores de bypass designados.",
                "Conceder um privilégio explícito de bypass.",
                "Conceder uma isenção de push protection.",
                "Manter as permissões normais do repositório."
            ],
            "explanations": [
                "O bypass delegado encaminha solicitações de contribuidores sem direitos de bypass aos revisores designados.",
                "Um privilégio de bypass permite que atores selecionados contornem o bloqueio; não equivale a solicitar aprovação.",
                "Uma isenção pula push protection para atores selecionados, diferentemente de revisar solicitações individuais.",
                "A delegação de bypass não concede por si só administração geral nem acesso ao código."
            ],
            "concept": "Limite de aprovação de bypass delegado",
            "hints": [
                "Uma exceção delegada não deve ampliar permissões não relacionadas.",
                "Diferencie solicitar uma exceção de estar autorizado a aprová-la."
            ]
        },
        "ghas-administration-020": {
            "prompt": "Uma pessoa é adicionada como revisora de bypass de push protection. O que deve permanecer separado dessa função delegada?",
            "choices": [
                "Configurar revisores de bypass designados.",
                "Conceder um privilégio explícito de bypass.",
                "Conceder uma isenção de push protection.",
                "Manter as permissões normais do repositório."
            ],
            "explanations": [
                "O bypass delegado encaminha solicitações de contribuidores sem direitos de bypass aos revisores designados.",
                "Um privilégio de bypass permite que atores selecionados contornem o bloqueio; não equivale a solicitar aprovação.",
                "Uma isenção pula push protection para atores selecionados, diferentemente de revisar solicitações individuais.",
                "A delegação de bypass não concede por si só administração geral nem acesso ao código."
            ],
            "concept": "Delegação de bypass versus administração do repositório",
            "hints": [
                "Uma exceção delegada não deve ampliar permissões não relacionadas.",
                "Diferencie solicitar uma exceção de estar autorizado a aprová-la."
            ]
        },
        "ghas-administration-021": {
            "prompt": "No GHES 3.19 com Actions instalado faltam controles de Secret Protection e Code Security. Quais pré-requisitos devem ser verificados?",
            "choices": [
                "Verificar recursos instalados e a licença de segurança aplicável.",
                "Verificar se o GitHub Actions está instalado na instância.",
                "Usar a documentação do GHES 3.19 para essa implantação.",
                "Revisar a habilitação organizacional após os pré-requisitos da instância."
            ],
            "explanations": [
                "No GHES 3.19, a interface de configuração depende dos recursos instalados na instância e da licença do produto.",
                "A configuração padrão de análise de código e as atualizações de segurança do Dependabot no GHES 3.19 exigem GitHub Actions.",
                "Uma versão específica do Server pode diferir do Cloud atual; a comparação depende da documentação dessa versão.",
                "Instalar um recurso no Server não substitui as configurações adequadas da organização e do repositório."
            ],
            "concept": "Disponibilidade de recursos do Server por versão",
            "hints": [
                "Use a documentação da versão instalada do Server, não suposições do Cloud.",
                "Verifique os pré-requisitos de instalação separadamente das configurações da organização."
            ]
        },
        "ghas-administration-022": {
            "prompt": "No GHES 3.19, qual pré-requisito de instalação é compartilhado pela configuração padrão de análise de código e pelas atualizações de segurança do Dependabot?",
            "choices": [
                "Verificar recursos instalados e a licença de segurança aplicável.",
                "Verificar se o GitHub Actions está instalado na instância.",
                "Usar a documentação do GHES 3.19 para essa implantação.",
                "Revisar a habilitação organizacional após os pré-requisitos da instância."
            ],
            "explanations": [
                "No GHES 3.19, a interface de configuração depende dos recursos instalados na instância e da licença do produto.",
                "A configuração padrão de análise de código e as atualizações de segurança do Dependabot no GHES 3.19 exigem GitHub Actions.",
                "Uma versão específica do Server pode diferir do Cloud atual; a comparação depende da documentação dessa versão.",
                "Instalar um recurso no Server não substitui as configurações adequadas da organização e do repositório."
            ],
            "concept": "Pré-requisito do Actions no Server",
            "hints": [
                "Use a documentação da versão instalada do Server, não suposições do Cloud.",
                "Verifique os pré-requisitos de instalação separadamente das configurações da organização."
            ]
        },
        "ghas-administration-023": {
            "prompt": "Um enterprise owner do Enterprise Cloud não vê dados de Security overview de uma organização onde não tem função. Qual ação a referência de permissões orienta?",
            "choices": [
                "Ingressar em uma equipe com leitura no repositório.",
                "Ativar notificações de segurança por email para a organização.",
                "Ingressar na organização como organization owner.",
                "Confiar em ser enterprise owner sem uma função na organização."
            ],
            "explanations": [
                "O acesso Read ou Triage aos repositórios não concede as visualizações de alertas de Security overview organizacional.",
                "As preferências de notificação não criam as funções organizacionais necessárias para ver dados de segurança.",
                "A referência de permissões orienta enterprise owners a ingressar como organization owners para ver os dados de repositórios dessa organização.",
                "Ser enterprise owner não concede por si só dados irrestritos de Security overview de todas as organizações."
            ],
            "concept": "Propriedade empresarial versus acesso de segurança organizacional",
            "hints": [
                "A propriedade da empresa e o acesso de segurança organizacional são funções diferentes.",
                "Verifique a função dentro da organização cujos dados estão ausentes."
            ]
        },
        "ghas-administration-024": {
            "prompt": "Qual operação REST literal lista as configurações de segurança disponíveis para uma organização?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Esse endpoint cria uma configuração de segurança da organização, não vincula uma existente.",
                "Esse endpoint vincula uma configuração existente a repositórios selecionados com autorização adequada.",
                "Esse endpoint obtém a configuração de segurança associada a um repositório.",
                "Esse endpoint lista as configurações de segurança disponíveis para a organização."
            ],
            "concept": "API de consulta de configurações",
            "hints": [
                "Diferencie ler definições de configuração de aplicá-las.",
                "Relacione o método HTTP e o escopo do recurso à operação solicitada."
            ]
        },
        "ghas-administration-025": {
            "prompt": "Uma automação autorizada já conhece o ID de uma configuração. Qual operação REST a aplica aos repositórios selecionados?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Esse endpoint vincula uma configuração existente a repositórios selecionados com autorização adequada.",
                "Esse endpoint obtém a configuração de segurança associada a um repositório.",
                "Esse endpoint lista as configurações de segurança disponíveis para a organização.",
                "Esse endpoint cria uma configuração de segurança da organização, não vincula uma existente."
            ],
            "concept": "API de vinculação em massa de configurações",
            "hints": [
                "Diferencie ler definições de configuração de aplicá-las.",
                "Relacione o método HTTP e o escopo do recurso à operação solicitada."
            ]
        },
        "ghas-administration-026": {
            "prompt": "Qual operação REST literal lê a configuração de segurança associada a um único repositório?",
            "choices": [
                "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
                "GET /repos/{owner}/{repo}/code-security-configuration",
                "GET /orgs/{org}/code-security/configurations",
                "POST /orgs/{org}/code-security/configurations"
            ],
            "explanations": [
                "Esse endpoint vincula uma configuração existente a repositórios selecionados com autorização adequada.",
                "Esse endpoint obtém a configuração de segurança associada a um repositório.",
                "Esse endpoint lista as configurações de segurança disponíveis para a organização.",
                "Esse endpoint cria uma configuração de segurança da organização, não vincula uma existente."
            ],
            "concept": "Consulta de configuração do repositório",
            "hints": [
                "Diferencie ler definições de configuração de aplicá-las.",
                "Relacione o método HTTP e o escopo do recurso à operação solicitada."
            ]
        },
        "ghas-administration-027": {
            "prompt": "Uma chamada de API para substituir uma habilitação imposta parece bem-sucedida. O que verifica se ela realmente alterou algo?",
            "choices": [
                "Investigar alterações nas exclusões de linguagens da configuração padrão.",
                "Revisar a configuração central em vez de forçar uma substituição local.",
                "Consultar novamente as configurações efetivas após a chamada de API.",
                "Verificar a disponibilidade e a política do Actions necessárias."
            ],
            "explanations": [
                "Alterar as linguagens excluídas da configuração padrão é uma circunstância documentada que pode interromper a imposição.",
                "Administradores de repositórios não podem alterar habilitações explicitamente controladas por uma configuração imposta.",
                "Uma tentativa pela API de substituir uma habilitação imposta pode parecer bem-sucedida sem alterar a configuração.",
                "Desabilitar Actions ou impedir as actions necessárias pode interromper a imposição da configuração de análise de código."
            ],
            "concept": "Verificação da automação pelo estado efetivo",
            "hints": [
                "Verifique o estado efetivo, não apenas a resposta do transporte.",
                "A imposição central e as permissões de automação continuam sendo restrições independentes."
            ]
        },
        "ghas-administration-028": {
            "prompt": "Uma configuração imposta habilitava a análise de código, mas ela para após alterações nas políticas do repositório. Qual dependência deve ser verificada?",
            "choices": [
                "Consultar novamente as configurações efetivas após a chamada de API.",
                "Verificar a disponibilidade e a política do Actions necessárias.",
                "Investigar alterações nas exclusões de linguagens da configuração padrão.",
                "Revisar a configuração central em vez de forçar uma substituição local."
            ],
            "explanations": [
                "Uma tentativa pela API de substituir uma habilitação imposta pode parecer bem-sucedida sem alterar a configuração.",
                "Desabilitar Actions ou impedir as actions necessárias pode interromper a imposição da configuração de análise de código.",
                "Alterar as linguagens excluídas da configuração padrão é uma circunstância documentada que pode interromper a imposição.",
                "Administradores de repositórios não podem alterar habilitações explicitamente controladas por uma configuração imposta."
            ],
            "concept": "Pré-requisitos de imposição de configurações",
            "hints": [
                "Verifique o estado efetivo, não apenas a resposta do transporte.",
                "A imposição central e as permissões de automação continuam sendo restrições independentes."
            ]
        },
        "ghas-administration-029": {
            "prompt": "Qual opção de configuração em inglês habilita a configuração padrão do CodeQL onde necessário e preserva os repositórios que já usam a avançada?",
            "choices": [
                "Enforce configuration",
                "Use as default for newly created repositories",
                "Enabled with advanced setup allowed",
                "Keep existing settings"
            ],
            "explanations": [
                "A imposição bloqueia habilitações controladas; não cria um fluxo personalizado aprovado.",
                "Um padrão para novos repositórios escolhe seu vínculo futuro, não o conteúdo detalhado de um fluxo personalizado.",
                "Essa opção habilita a configuração padrão onde o CodeQL não está ativo e permite a configuração avançada existente.",
                "Manter as configurações existentes evita impor um novo valor de habilitação para esse recurso."
            ],
            "concept": "Configuração padrão com fluxos avançados aprovados",
            "hints": [
                "Preserve a análise aprovada e avalie o que a implantação central alterará.",
                "A habilitação de recursos e o fluxo detalhado de análise são camadas diferentes."
            ]
        },
        "ghas-administration-030": {
            "prompt": "Antes de aplicar recursos de segurança pagos a muitos repositórios privados e internos, qual revisão administrativa evita presumir que o plano base basta?",
            "choices": [
                "Revisar a licença dos recursos pagos antes de aplicar em escala.",
                "Aplicar manualmente uma configuração adequada após a transferência.",
                "Criar uma configuração personalizada com os recursos necessários.",
                "Verificar a configuração vinculada e seu status de imposição."
            ],
            "explanations": [
                "Aplicar recursos pagos a repositórios privados ou internos pode consumir uso licenciado e exige a licença aplicável.",
                "Os padrões se aplicam a repositórios recém-criados, não automaticamente aos transferidos.",
                "Configurações personalizadas permitem escolher uma combinação adaptada de configurações de habilitação.",
                "O comportamento depende do vínculo e da imposição, não apenas do nome da configuração."
            ],
            "concept": "Implantação de segurança atenta às licenças",
            "hints": [
                "Verifique se o repositório é novo, transferido ou já está gerenciado.",
                "Não presuma que um padrão altere retroativamente todos os repositórios."
            ]
        }
    }
};
