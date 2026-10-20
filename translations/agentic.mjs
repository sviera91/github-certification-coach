// Original practice translations (LATAM Spanish and Brazilian Portuguese), not an official translation
// of the English-only GH-600 exam. Offline machine-assisted, AI-checked; Preview, NOT human approved.
// Prepared October 20, 2026; bilingual human review is still required.
// Source answer keys and choice/hint order remain unchanged. Human approval is shared across languages.
export const translations = {
  "es": {
    "agentic-001": {
      "prompt": "Un equipo está introduciendo agentes en un servicio de pago. ¿Qué asignación inicial proporciona la responsabilidad más clara y limitada de SDLC?",
      "choices": [
        "Añadir pruebas de reglas de redondeo documentadas en una rama PR",
        "Confiabilidad del pago propio desde el diseño hasta la producción",
        "Mejorar el servicio donde el agente encuentre oportunidades",
        "Resolver todos los incidentes de pago sin un límite de escalada"
      ],
      "explanations": [
        "Las reglas documentadas, un test de entrega y una rama definen una tarea que se puede revisar.",
        "La propiedad de fiabilidad de extremo a extremo carece de entradas y autoridad limitadas.",
        "La mejora abierta invita a cambios no relacionados.",
        "El manejo de incidentes requiere límites de riesgo y caminos de escalada."
      ],
      "concept": "Delegación delimitada en el SDLC",
      "hints": [
        "¿Qué le permitirá a un revisor decidir cuándo terminará la tarea?",
        "¿Cuánta autoridad implica cada tarea?"
      ]
    },
    "agentic-002": {
      "prompt": "Un agente recibe 'hacer que el proceso de pago sea más rápido' y propone reemplazar la base de datos. ¿Qué debe establecer el titular de la tarea antes de autorizar la ejecución?",
      "choices": [
        "Un proveedor de base de datos preferido",
        "Una línea de base medida, latencia objetivo, alcance y restricciones",
        "Un plazo de ejecución sin requisitos adicionales",
        "Un presupuesto de ejecución más amplio para explorar los reemplazos"
      ],
      "explanations": [
        "La selección del proveedor no establece si el reemplazo es justificado.",
        "Un contrato medible permite la comparación y limita los cambios arquitectónicos.",
        "Un plazo no resuelve ambiguos criterios de éxito.",
        "Un mayor presupuesto de exploración no define el resultado previsto."
      ],
      "concept": "Ingresos y criterios de éxito",
      "hints": [
        "¿Cómo pudieron dos revisores estar de acuerdo en que el rendimiento mejoró lo suficiente?",
        "¿Qué información faltante afecta si un rediseño es apropiado?"
      ]
    },
    "agentic-003": {
      "prompt": "Un refactor sensible a la seguridad no podrá modificar los archivos fuente hasta que se apruebe su plan. ¿Qué arquitectura hace cumplir ese requisito?",
      "choices": [
        "Un agente escriturable instruido a esperar",
        "Una revisión posterior de todos los archivos editados",
        "Una etapa de planificación de solo lectura seguida de una etapa de ejecución con aprobación obligatoria",
        "Un plan y código combinados PR con protección contra la fusión"
      ],
      "explanations": [
        "Las instrucciones por sí solas no eliminan la capacidad de edición.",
        "La revisión después de la edición es posterior al límite requerido.",
        "La capacidad de solo lectura y una puerta explícita impiden la edición prematura de la fuente.",
        "La protección contra la fusión no impide la generación de fuentes de preaprobación."
      ],
      "concept": "Cumplimiento de la planificación antes de actuar",
      "hints": [
        "¿En qué momento debe entrar en vigor la restricción?",
        "¿Qué opción controla la capacidad en lugar de simplemente describir el comportamiento?"
      ]
    },
    "agentic-004": {
      "prompt": "Los revisores reciben un plan que dice solo 'actualizar archivos, ejecutar controles, terminar'. ¿Qué mejora les ayuda más a validar la intención antes de la ejecución?",
      "choices": [
        "Reemplazar el plan con el puntaje de confianza del modelo",
        "adjunta una transcripción no filtrada de cada pensamiento interno",
        "Requerir una diferencia final detallada antes de discutir la intención",
        "Especificar los componentes afectados, los pasos, los riesgos, los pruebas y las condiciones de parada"
      ],
      "explanations": [
        "La confianza no es un contrato de ejecución que pueda ser revisado.",
        "La deliberación interna no es necesaria para un plan inspectable.",
        "Esperar una diferencia pierde la oportunidad de validación temprana.",
        "El alcance y la validación explícitos permiten a los revisores evaluar el trabajo propuesto."
      ],
      "concept": "Artefactos del plan estructurado",
      "hints": [
        "¿Qué preguntas se haría un propietario antes de otorgar autoridad para ejecutar?",
        "¿Qué información conecta la intención con pruebas posteriores?"
      ]
    },
    "agentic-005": {
      "prompt": "Un agente corrige un error del parser pero también reorganiza un código de autenticación no relacionado. Bajo el modelo de contribución, ¿qué debe hacer el revisor?",
      "choices": [
        "Requerir justificación o eliminación de los cambios no relacionados",
        "Acepta toda la diferencia porque las pruebas del parser pasan",
        "Rechazar todas las contribuciones de agentes independientemente de la evidencia",
        "Revisa sólo los archivos mencionados en el número original"
      ],
      "explanations": [
        "El alcance se revisa junto con la corrección, independientemente de la autoría.",
        "Las pruebas de parser no validan las modificaciones de autenticación no relacionadas.",
        "El modelo colaborador evalúa el trabajo, no el tipo de autor.",
        "Ignorar archivos inesperados deja riesgos no revisados."
      ],
      "concept": "Revisión del alcance según el modelo de contribución",
      "hints": [
        "¿Se justifica todo cambio si se resuelve el defecto reportado?",
        "¿Qué norma de revisión debería aplicarse a cualquier contribuyente?"
      ]
    },
    "agentic-006": {
      "prompt": "Un agente de documentación de bajo riesgo espera la aprobación humana antes de cada búsqueda y lectura de archivos. La entrega se ha ralentizado sin reducir el riesgo significativo. ¿Cuál es el mejor rediseño?",
      "choices": [
        "Eliminar todos los controles, incluidos los controles de publicación",
        "Permitir lecturas delimitadas automáticamente y exigir aprobación para escrituras de impacto significativo",
        "Trasladar las aprobaciones a un lote semanal después de su publicación",
        "Requerir dos revisores para cada lectura para mejorar la confianza"
      ],
      "explanations": [
        "La publicación todavía necesita controles adecuados.",
        "Los límites basados en el riesgo reducen la fricción mientras se conserva la supervisión del impacto.",
        "La aprobación posterior al hecho no puede impedir una publicación inapropiada.",
        "Más aprobaciones de lectura aumentan el cuello de botella existente."
      ],
      "concept": "Autonomía proporcional",
      "hints": [
        "¿Qué operaciones pueden cambiar algo fuera del contexto del agente?",
        "¿Dónde el juicio humano reduce materialmente el riesgo?"
      ]
    },
    "agentic-007": {
      "prompt": "Un equipo mantiene los planes de los agentes sólo en una charla efímera. Los auditores no pueden conectar los cambios publicados con su ámbito de aplicación previsto. ¿Qué debería añadir la arquitectura?",
      "choices": [
        "Una ventana de contexto de chat más larga",
        "Un requisito para que los agentes reafirmen su confianza",
        "Enlaces de planes duraderos y pruebas asociados con el PR y el commit",
        "Un agente de eliminación de reglas se ramifica tan pronto como pasan las pruebas"
      ],
      "explanations": [
        "Una ventana de contexto más amplia no crea un artefacto de auditoría accesible.",
        "La confianza no establece la intención o procedencia.",
        "Los artefactos vinculados conectan la intención aprobada, ejecución y validación.",
        "La eliminación temprana puede reducir en lugar de mejorar la reconstrucibilidad."
      ],
      "concept": "GitHub como sistema de registro",
      "hints": [
        "¿Qué debe quedarse disponible después del final de una sesión?",
        "¿Cómo podría alguien localizar la evidencia de un commit liberado?"
      ]
    },
    "agentic-008": {
      "prompt": "Un equipo quiere que un agente redacte cambios rápidamente para el trabajo de formato reversible, con validación antes de fusionarse en lugar de antes de editar. ¿Qué flujo de trabajo encaja?",
      "choices": [
        "Ejecución de la producción seguida de un plan retrospectivo",
        "Planificación de lectura exclusiva sin transferencias de ejecución",
        "Actualizaciones directas de la rama predeterminada después de ejecutar un formatador local",
        "Un plan y ejecución PR sujeto a controles y revisiones configuradas"
      ],
      "explanations": [
        "El plan debe informar el trabajo, no racionalizar las acciones de producción después.",
        "La sola planificación de lectura no puede lograr los cambios.",
        "La validación local no sustituye el límite de fusión requerido.",
        "Un combinado PR se ajusta a la iteración de bajo riesgo mientras se conserva la revisión antes de la aceptación."
      ],
      "concept": "Plan primero versus plan y ejecución",
      "hints": [
        "¿Es la puerta requerida antes de editar o antes de aceptar cambios?",
        "¿Cómo afecta la reversibilidad al flujo de trabajo adecuado?"
      ]
    },
    "agentic-009": {
      "prompt": "Una tarea pide a un agente que actualice un cliente API sin cambiar su interfaz pública. ¿Qué criterio de éxito propuesto es más útil?",
      "choices": [
        "Las pruebas de compatibilidad existentes y las nuevas pruebas de defecto pasan sin cambios públicos API",
        "El parche elimina la mayor cantidad de líneas posibles",
        "El agente produce al menos tres commits",
        "La implementación utiliza la biblioteca disponible más reciente"
      ],
      "explanations": [
        "Esto comprueba tanto la corrección deseada como la restricción de compatibilidad.",
        "El volumen de eliminación no es evidencia de comportamiento compatible.",
        "El número de compromisos es una medida del proceso, no la corrección de la tarea.",
        "La adopción de la biblioteca más reciente puede violar la compatibilidad."
      ],
      "concept": "Los contratos de tareas orientados a los resultados",
      "hints": [
        "¿Qué comportamiento debe cambiar, y qué debe permanecer estable?",
        "¿Qué métrica podría mejorar mientras aún rompe a los usuarios?"
      ]
    },
    "agentic-010": {
      "prompt": "A un agente se le asigna un incidente de producción y descubre un paso de recuperación destructivo no documentado. ¿Qué límite de responsabilidad debe definir la arquitectura?",
      "choices": [
        "Deja que el agente deduzca la autoridad de la urgencia",
        "Preparar pruebas y una propuesta de recuperación, luego preguntar al responsable sobre acciones fuera del alcance autorizado",
        "Permitir cualquier acción que apareció en un incidente anterior",
        "Tratar el acceso a un comando como permiso para ejecutarlo"
      ],
      "explanations": [
        "La urgencia no otorga autoridad destructiva.",
        "La escalación preserva el diagnóstico útil sin exceder la autoridad delegada.",
        "Un incidente anterior puede haber tenido diferentes aprobaciones y condiciones.",
        "La capacidad técnica y la autorización son límites diferentes."
      ],
      "concept": "Escalación por límite de tarea",
      "hints": [
        "¿A quién pertenece el riesgo de una recuperación destructiva?",
        "¿Puede continuar el diagnóstico sin tomar la acción controvertida?"
      ]
    },
    "agentic-011": {
      "prompt": "Un gerente describe a un agente como \"un asistente que sugiere código\". ¿Qué comportamiento adicional hace que un sistema SDLC esté basado en un agente en lugar de simplemente asesoramiento?",
      "choices": [
        "Responde con explicaciones más largas",
        "Siempre utiliza un modelo más grande",
        "Planifica, invoca herramientas autorizadas y evalúa el progreso hacia una meta",
        "Produce sugerencias en una interfaz de chat"
      ],
      "explanations": [
        "La duración de la respuesta no establece una ejecución autónoma.",
        "El tamaño del modelo no define el flujo de trabajo.",
        "La acción dirigida al objetivo y la retroalimentación distinguen un ciclo de vida basado en agentes.",
        "Una interfaz de chat puede seguir siendo puramente asesora."
      ],
      "concept": "Plan-acto-evaluación del ciclo de vida de los agentes",
      "hints": [
        "¿El sistema sólo propone, o puede actuar sobre su entorno?",
        "¿Qué retroalimentación informa su siguiente paso?"
      ]
    },
    "agentic-012": {
      "prompt": "Un agente modifica repetidamente las pruebas hasta que pasan, pero nadie verifica si la funcionalidad aún cumple los requisitos de la issue. ¿Qué omisión arquitectónica es más importante?",
      "choices": [
        "Un tamaño mínimo de parche obligatorio",
        "Un segundo formato de código",
        "Un puntaje de productividad generado por agentes",
        "Una fase de evaluación vinculada a la intención de desarrollo"
      ],
      "explanations": [
        "El tamaño del parche no establece el comportamiento correcto.",
        "El formato no puede verificar la intención de la función.",
        "La productividad autoinformada no valida los resultados.",
        "La evaluación debe comparar el comportamiento entregado con el requisito previsto."
      ],
      "concept": "Cerrar el ciclo de vida del agente",
      "hints": [
        "¿Pueden coexistir las pruebas verdes con una característica implementada incorrectamente?",
        "¿Dónde se comprueba el contrato original de tarea?"
      ]
    },
    "agentic-013": {
      "prompt": "Una tarea propuesta para un agente combina una migración de esquema, un rediseño de UI y un cambio de política de despliegue en un solo PR. ¿Qué rediseño facilita más la revisión?",
      "choices": [
        "Separar entregables coherentes y registrar sus dependencias",
        "Esconder el intermediario commits detrás de un resumen",
        "Asignar a un revisor para aprobar el paquete completo rápidamente",
        "Utilice un aviso más largo manteniendo el mismo alcance ilimitado"
      ],
      "explanations": [
        "Las unidades coherentes permiten inspeccionar riesgos y requisitos previos distintos.",
        "Un resumen no reduce el alcance de la revisión.",
        "Un revisor puede no poseer todas las áreas afectadas.",
        "La longitud del prompt no crea límites arquitectónicos."
      ],
      "concept": "Descomposición de tareas SDLC",
      "hints": [
        "¿Estos cambios comparten una sola decisión de aceptación?",
        "¿Qué límites permiten a los dueños adecuados revisar el riesgo correcto?"
      ]
    },
    "agentic-014": {
      "prompt": "Un agente de planificación recomienda un cambio de infraestructura sin una estrategia de reversión conocida. El equipo exige preparación para la reversión antes de implementar. ¿Qué debe concluir la validación del plan?",
      "choices": [
        "Aprobar porque el retroceso puede ser investigado después del despliegue",
        "Regresar el plan para el análisis de recuperación antes de la ejecución",
        "Aprobar si el agente informa de alta confianza",
        "Reemplazar las revisiones requeridas con un tiempo de ejecución más largo"
      ],
      "explanations": [
        "El descubrimiento después del despliegue se pierde el límite de preparación requerido.",
        "Un requisito de recuperación no cumplido hace que el plan sea incompleto.",
        "La confianza no puede sustituir a una estrategia de recuperación.",
        "Las tiempos de espera agotados no establecen la reversibilidad."
      ],
      "concept": "Validación de la preparación para la recuperación",
      "hints": [
        "¿Qué condición previa no se ha demostrado?",
        "¿Cuándo se haría más caro un retroceso desconocido?"
      ]
    },
    "agentic-015": {
      "prompt": "Un equipo de agentes utiliza los PR de GitHub como plano de control. ¿Qué correspondencia separa mejor la intención, la implementación y la evidencia?",
      "choices": [
        "Los tres sólo existen en una respuesta de chat final",
        "La intención se deduce de los nombres de archivos; la evidencia es la confianza del agente",
        "Plan en la issue o el PR, cambios en commits y validación en verificaciones e informes",
        "La ejecución se documenta antes de la planificación; los pruebas son opcionales si se revisan"
      ],
      "explanations": [
        "El chat ephemeral no proporciona el mismo registro revisable.",
        "Los nombres de archivo y la confianza no capturan la intención y la validación.",
        "Cada etapa del ciclo de vida tiene una representación duradera e inspectable.",
        "La revisión no elimina la necesidad de una validación adecuada."
      ],
      "concept": "cartografía de artefactos del ciclo de vida",
      "hints": [
        "¿Qué artefacto responde por qué, qué cambió y cómo se verificó?",
        "¿Se pueden examinar esas respuestas de forma independiente?"
      ]
    },
    "agentic-016": {
      "prompt": "Un equipo quiere que un agente elabore planes de implementación pero nunca los ejecute. ¿Qué diseño de agente personalizado expresa mejor ese papel?",
      "choices": [
        "Un agente de uso general con credenciales de despliegue",
        "Un agente ejecutivo cuyo nombre contiene \"planificador\"",
        "Un agente sin restricciones con una nota para evitar cambios",
        "Un prompt centrado en la planificación y el acceso explícito a herramientas de solo lectura"
      ],
      "explanations": [
        "La autoridad de despliegue no es necesaria para la planificación.",
        "Un nombre de rol no limita las capacidades.",
        "El texto de asesoramiento es más débil que un límite de capacidad real.",
        "El prompt define la responsabilidad y las herramientas hacen cumplir sus límites de acción."
      ],
      "concept": "Alineación de funciones y capacidades",
      "hints": [
        "¿Qué podría necesitar inspeccionar este papel?",
        "¿Qué capacidad contradeciría su responsabilidad declarada?"
      ]
    },
    "agentic-017": {
      "prompt": "Un agente propone un refactor basado en la suposición de que un legado API no tiene consumidores. ¿Cuál es la mejor respuesta a la revisión del plan previo a la ejecución?",
      "choices": [
        "Requerir pruebas sobre los consumidores o revisar el enfoque de compatibilidad",
        "Aprobar porque la suposición está claramente escrita",
        "Aprobar si la eliminación del API reduce la complejidad",
        "Solicitar más detalles de implementación sin comprobar la suposición"
      ],
      "explanations": [
        "Una suposición crítica necesita validación antes de impulsar un diseño destructivo.",
        "La visibilidad hace que una suposición sea revisable, no verdadera.",
        "La reducción de la complejidad no justifica romper con los consumidores desconocidos.",
        "Los detalles de implementación no pueden reparar una premisa no respaldada."
      ],
      "concept": "Validación de suposiciones",
      "hints": [
        "¿Qué premisa podría invalidar todo el plan?",
        "¿Qué evidencia distinguiría una remoción segura de un cambio repentino?"
      ]
    },
    "agentic-018": {
      "prompt": "Un repositorio requiere la aprobación del propietario para cambios en el flujo de trabajo. La adición de las entradas CODEOWNERS por sí sola no ha bloqueado las fusiones no revisadas. ¿Qué control arquitectónico falta?",
      "choices": [
        "Periodo de retención del registro de flujo de trabajo más largo",
        "Una regla aplicable que requiera la revisión del propietario del código",
        "Un comentario pidiendo a los agentes que se pongan en contacto con los propietarios",
        "Una etiqueta de tarea que nombra al equipo afectado"
      ],
      "explanations": [
        "La retención mejora la auditabilidad, no la ejecución de la aprobación.",
        "La propiedad debe estar acompañada de un requisito de revisión obligatoria.",
        "Un comentario no impone el límite de fusión.",
        "Las etiquetas ayudan al enrutamiento pero no bloquean la aceptación."
      ],
      "concept": "Responsabilidad y aplicación efectiva de controles",
      "hints": [
        "¿Qué hace que una sugerencia del revisor sea una decisión requerida?",
        "¿Qué límite acepta el código?"
      ]
    },
    "agentic-019": {
      "prompt": "La descripción de un PR afirma que todas las pruebas pasaron, pero no incluye referencias a ejecuciones ni commits. ¿Qué requisito de observabilidad mejoraría más la rendición de cuentas?",
      "choices": [
        "Exigir al agente que repita la reclamación en su mensaje final",
        "Registrar únicamente las tasas de aprobación mensuales agregadas",
        "Vincular la evidencia de validación con la ejecución y la revisión exactas del código",
        "Incluya la temperatura del modelo en el título PR"
      ],
      "explanations": [
        "La repetición de un reclamo no respaldado no añade ninguna procedencia.",
        "Los agregados mensuales no pueden validar esta revisión PR.",
        "La vinculación entre ejecución y revisión hace que la reclamación pueda ser inspeccionada de forma independiente.",
        "Las configuraciones de generación no demuestran la ejecución de los pruebas."
      ],
      "concept": "Procedencia de la evidencia",
      "hints": [
        "¿Cómo podría un revisor verificar la afirmación sin confiar en el autor?",
        "¿Podrían las pruebas haber corrido contra el código más antiguo?"
      ]
    },
    "agentic-020": {
      "prompt": "Un propietario de tarea quiere automatizar la redacción de notas de lanzamiento, pero mantiene la responsabilidad humana por los compromisos públicos. ¿Qué división de responsabilidades encaja?",
      "choices": [
        "El agente redacta y publica siempre que la prosa es fluida",
        "Los humanos sólo proporcionan preferencias de formato",
        "El agente decide cuáles promesas no publicadas son aceptables",
        "El agente escribe un borrador basado en cambios aprobados; un propietario autorizado aprueba la publicación"
      ],
      "explanations": [
        "La fluidez no establece la autorización de las reclamaciones públicas.",
        "Las orientaciones de formato no cubren el riesgo de compromiso.",
        "Los compromisos públicos requieren un juicio empresarial delegado.",
        "La redacción está limitada mientras que la publicación retiene al titular de la decisión apropiada."
      ],
      "concept": "Fronteras de la responsabilidad humana",
      "hints": [
        "¿Qué paso crea un compromiso externo?",
        "¿Qué se puede automatizar sin transferir esa autoridad?"
      ]
    },
    "agentic-021": {
      "prompt": "Un equipo define el éxito del agente como \"producir muchos PRs fusionados\". Los agentes comienzan a dividir los cambios triviales para aumentar el puntaje. ¿Qué debería enfatizar la arquitectura en su lugar?",
      "choices": [
        "Los resultados de los usuarios y las limitaciones de calidad junto con las medidas de entrega",
        "Un número mínimo de líneas en cada PR",
        "El número de llamadas de herramientas de agentes por día",
        "Una regla que sólo acepta las revisiones de los agentes"
      ],
      "explanations": [
        "Las medidas de resultados equilibrados desalientan la optimización de la actividad en lugar del valor.",
        "Los mínimos de línea crean otro objetivo de actividad jugable.",
        "Las llamadas de herramienta miden la actividad y pueden recompensar la ineficiencia.",
        "Las restricciones de autor no alinean el trabajo con los resultados de los usuarios."
      ],
      "concept": "Evitar los antipatrones impulsados por proxy",
      "hints": [
        "¿Puede elevarse la puntuación elegida sin beneficiar a los usuarios?",
        "¿Qué impide que la velocidad enmasque las regresiones de calidad?"
      ]
    },
    "agentic-022": {
      "prompt": "Se pide a un agente que implemente un tema, pero sus criterios de aceptación contradicen una decisión de arquitectura aprobada. ¿Qué debe suceder antes de la acción?",
      "choices": [
        "Sigue en silencio el texto de aspecto más nuevo",
        "Informar el conflicto y obtener una decisión de alcance del propietario autorizado",
        "Combine ambos diseños, incluso si son incompatibles",
        "Ignora el problema porque los documentos de arquitectura siempre tienen prioridad"
      ],
      "explanations": [
        "La apariencia reciente no resuelve la autoridad o la intención.",
        "Un conflicto de alcance requiere una decisión explícita antes de su aplicación.",
        "La combinación de requisitos incompatibles no los hace satisfactorios.",
        "Es posible que los documentos necesiten ser revisados; el despido unilateral no es una resolución."
      ],
      "concept": "Ingresos de tareas en conflicto",
      "hints": [
        "¿Qué haría que la próxima acción sea defendible para ambos dueños?",
        "¿El conflicto es real, o requiere una decisión?"
      ]
    },
    "agentic-023": {
      "prompt": "Un agente termina la implementación pero descubre que un escáner requerido no está disponible. Su contrato de tarea requiere pruebas de escaneo. ¿Qué estado de finalización es apropiado?",
      "choices": [
        "Completo, porque el agente no puede controlar la disponibilidad del escáner",
        "Completo, si se han aprobado los pruebas unitarios",
        "Preparación de la implementación, validación bloqueada con registro de escalada",
        "Completo, con un resultado estimado del escáner"
      ],
      "explanations": [
        "Un bloqueador externo no satisface el requisito faltante.",
        "Los pruebas unitarios no sustituyen la señal de seguridad especificada.",
        "El estado parcial explícito preserva el progreso sin exagerar la preparación.",
        "Los resultados estimados no son pruebas ejecutadas."
      ],
      "concept": "Cumplimiento y contratos de estados bloqueados",
      "hints": [
        "¿Qué entregable existe, y qué requisito previo sigue sin cumplirse?",
        "¿Cómo puede la entrega preservar el progreso con honestidad?"
      ]
    },
    "agentic-024": {
      "prompt": "Un equipo considera reemplazar los flujos habituales de issues, PR y verificaciones por un canal de aprobación separado exclusivo para agentes. ¿Cuál es el motivo más importante para conservar los artefactos estándar de desarrollo?",
      "choices": [
        "Garantizan que el código generado no tiene defectos",
        "Eliminan la necesidad de definir el alcance del agente",
        "Hacen reversible todas las acciones del agente.",
        "Ellos mantienen la propiedad, la evidencia y la aceptación en el plano de control establecido"
      ],
      "explanations": [
        "Los artefactos de desarrollo apoyan la revisión, pero no pueden garantizar su exactitud.",
        "El alcance aún debe definirse explícitamente.",
        "Algunos efectos externos siguen siendo irreversibles.",
        "Los controles compartidos preservan la inspección y una gobernanza de ingeniería coherente."
      ],
      "concept": "Integración de herramientas estándar",
      "hints": [
        "¿Dónde ya toman las decisiones de aceptación los revisores existentes?",
        "¿Qué se pierde cuando el trabajo de los agentes es revisado fuera de ese sistema?"
      ]
    },
    "agentic-025": {
      "prompt": "Un agente necesita explorar un repositorio desconocido antes de estimar un cambio. La estimación debe preceder a la aprobación de la aplicación. ¿Cuál es la mejor fase inicial?",
      "choices": [
        "Investigación de lectura exclusiva dentro de límites definidos, registro de suposiciones y conclusiones",
        "Crear cambios de código especulativos para descubrir el alcance",
        "Acceso al despliegue de subvenciones para mejorar la precisión de las estimaciones",
        "Skip exploración y commit a un plan de ejecución fijo"
      ],
      "explanations": [
        "El descubrimiento puede reducir la incertidumbre sin cruzar la puerta de ejecución.",
        "Las ediciones especulativas violan el límite de fase requerido.",
        "La capacidad de despliegue no es necesaria para inspeccionar la estructura del repositorio.",
        "Una estimación no informada oculta más que maneja la incertidumbre."
      ],
      "concept": "Descubrimiento antes de compromiso",
      "hints": [
        "¿Qué incertidumbre se puede reducir sin cambiar el sistema?",
        "¿Qué artefacto haría posible revisar una estimación?"
      ]
    },
    "agentic-026": {
      "prompt": "Se permite a un agente de corrección de errores revisar una rama de PR pero falla repetidamente en la misma verificación requerida. ¿Qué debe definir de antemano su flujo de trabajo?",
      "choices": [
        "Iteraciones ilimitadas hasta que el cheque pase",
        "Un presupuesto limitado de iteración y una escalada rica en pruebas",
        "Eliminación automática de la verificación de fallas",
        "Un retroceso que marca todos los controles restantes exitosos"
      ],
      "explanations": [
        "Los bucles ilimitados consumen recursos sin garantizar la convergencia.",
        "Un presupuesto y una entrega hacen que los fracasos persistentes sean manejables.",
        "Eliminar una señal requerida oculta el fallo.",
        "El éxito sintético representa incorrectamente el resultado de la validación."
      ],
      "concept": "Iteración autónoma limitada",
      "hints": [
        "¿Qué distingue la iteración útil de un bucle estancado?",
        "¿Qué debe recibir un ser humano cuando la recuperación automática se detiene?"
      ]
    },
    "agentic-027": {
      "prompt": "Un equipo asigna agentes a cada etapa de SDLC únicamente porque la automatización está disponible. ¿Qué principio de selección es más apropiado?",
      "choices": [
        "Preferir tareas con el mayor radio de explosión no restringido",
        "Fases de delegación en las que no se pueden escribir criterios de aceptación",
        "Asignar tareas delimitadas según las capacidades, los resultados verificables y los controles de riesgo",
        "Automatizar sólo tareas que no requieren contexto"
      ],
      "explanations": [
        "El gran impacto no restringido aumenta el riesgo de supervisión.",
        "Los objetivos no verificables son los candidatos de delegación pobres.",
        "La capacidad, la evidencia y la alineación de riesgos apoyan una delegación confiable.",
        "Las tareas útiles pueden requerir contexto cuando se proporcionan y alcanzan el alcance."
      ],
      "concept": "Selección de trabajo adecuado para el agente",
      "hints": [
        "¿Qué hace que un resultado delegado pueda ser evaluado de forma independiente?",
        "¿Se puede limitar la tarea sin eliminar su utilidad?"
      ]
    },
    "agentic-028": {
      "prompt": "Un plan de despliegue indica: 'usar la rama actual cuando se apruebe la próxima semana'. ¿Por qué debe el revisor solicitar una referencia de ejecución más precisa?",
      "choices": [
        "No se pueden utilizar nombres de ramas en los flujos de trabajo GitHub",
        "La aprobación congela automáticamente todas las ramas del repositorio",
        "Las referencias de compromiso eliminan la necesidad de pruebas",
        "La rama puede cambiar entre revisión y ejecución"
      ],
      "explanations": [
        "Las ramas son referencias útiles pero pueden ser mutantes.",
        "La aprobación no congela inherentemente una rama.",
        "Pinning identifica el código; no lo valida.",
        "Una revisión explícita vincula la ejecución al estado de código revisado."
      ],
      "concept": "Planes vinculantes a las revisiones inmutables",
      "hints": [
        "¿El mismo nombre necesariamente identificará el mismo código más tarde?",
        "¿Qué es exactamente lo que inspeccionó el revisor?"
      ]
    },
    "agentic-029": {
      "prompt": "Un PR generado por un agente pasa los controles pero no ofrece ninguna explicación para una nueva dependencia. ¿En qué debe centrarse la revisión arquitectónica?",
      "choices": [
        "Si la dependencia es necesaria, alcanzada y consistente con las restricciones",
        "Si el agente utilizó un nombre de paquete reconocible",
        "Si el PR se generó rápidamente",
        "Si la dependencia aumenta el número de paquetes del repositorio"
      ],
      "explanations": [
        "La aprobación de los controles no justifica un cambio arquitectónico o de la cadena de suministro.",
        "El reconocimiento no es evidencia de necesidad o idoneidad.",
        "La velocidad no establece la calidad del diseño.",
        "El número de paquetes por sí solo no determina la adecuación arquitectónica."
      ],
      "concept": "Revisión arquitectónica más allá de los controles ecológicos",
      "hints": [
        "¿Qué limitación de tareas podría afectar una nueva dependencia?",
        "¿Una construcción exitosa explica por qué el diseño cambió?"
      ]
    },
    "agentic-030": {
      "prompt": "Un propietario de un producto cambia el comportamiento requerido después de que se apruebe un plan pero antes de que comience la implementación. ¿Qué debe requerir el límite de orquestación?",
      "choices": [
        "Continúe usando el viejo plan porque la aprobación es permanente",
        "Revisar el plan y revalidar la autorización afectada",
        "Implementar ambos comportamientos sin discutir el conflicto",
        "Ocultar el cambio en el resumen de ejecución"
      ],
      "explanations": [
        "La aprobación se aplica a la intención revisada, no a los requisitos posteriores arbitrarios.",
        "El cambio de intención material requiere un contrato de ejecución actualizado correspondiente.",
        "La combinación de comportamientos puede ser contradictoria o fuera de alcance.",
        "Los cambios ocultos socavan la inspección y la aprobación informada."
      ],
      "concept": "Revisión del plan y alcance de la aprobación",
      "hints": [
        "¿El trabajo autorizado sigue siendo el trabajo propuesto?",
        "¿Cuál es el cambio que invalida la decisión de aceptación anterior?"
      ]
    },
    "agentic-031": {
      "prompt": "Un equipo quiere inspeccionar el comportamiento de los agentes sin grabar deliberaciones internas privadas. ¿Qué debe producir el agente?",
      "choices": [
        "Sólo los archivos de origen finales",
        "Cada símbolo de razonamiento oculto",
        "Decisiones, suposiciones, resultados de las herramientas y pruebas de validación",
        "Una declaración de confianza sin artefactos de apoyo"
      ],
      "explanations": [
        "Los archivos por sí solos omiten el historial de intención y ejecución.",
        "Los artefactos inspectables no requieren transcripciones de deliberación privada.",
        "Los registros de decisiones y resultados proporcionan una transparencia operativa útil.",
        "La confianza sola no puede reconstruir el comportamiento."
      ],
      "concept": "artefactos de decisión inspectables",
      "hints": [
        "¿Qué información se necesita para reconstruir las acciones y su justificación?",
        "¿Qué evidencia es útil para un operador en lugar de meramente verbal?"
      ]
    },
    "agentic-032": {
      "prompt": "El contrato de tareas de un agente incluye el repositorio objetivo, la revisión de la base, los caminos permitidos, las pruebas y una entregable PR. ¿Qué adición aclara más directamente cuándo detenerse y buscar ayuda?",
      "choices": [
        "Un estilo de escritura preferido",
        "Una longitud máxima de descripción de PR",
        "Un apodo modelo",
        "Los desencadenantes y no objetivos explícitos de la escalada"
      ],
      "explanations": [
        "El estilo de escritura no identifica un límite de autoridad.",
        "La longitud de descripción no define las condiciones bloqueadas.",
        "La identidad del modelo no establece condiciones de parada.",
        "La escalación desencadena y no vincula la solución autónoma de problemas sin objetivos."
      ],
      "concept": "Detener las condiciones y los no objetivos",
      "hints": [
        "¿Qué sucede cuando la solución requiere trabajo fuera del contrato?",
        "¿Qué instrucción faltante impide una expansión incontrolada del alcance?"
      ]
    },
    "agentic-033": {
      "prompt": "Un equipo confía en un agente PR más que en un humano PR porque fue generado automáticamente. ¿Cuál es la mejor corrección del modelo de contribución?",
      "choices": [
        "Aplicar la misma intención, alcance, evidencia, propiedad y normas políticas",
        "Aceptar el trabajo automatizado si la prosa suena consistente",
        "No requieren controles porque la generación es repetible",
        "Rechazar las correcciones de autor humano para mantener un flujo de trabajo uniforme"
      ],
      "explanations": [
        "La contribución se evalúa por pruebas de ingeniería en lugar de por el tipo de autor.",
        "La prosa consistente no es validación.",
        "La generación no elimina defectos ni requisitos de validación.",
        "La gobernanza uniforme no requiere excluir las contribuciones humanas."
      ],
      "concept": "Evitar el sesgo de automatización",
      "hints": [
        "¿Sería suficiente la misma evidencia de un contribuyente humano?",
        "¿Qué normas evalúan el cambio en lugar de su autor?"
      ]
    },
    "agentic-034": {
      "prompt": "Un equipo necesita intervención humana sólo cuando un agente propone cruzar un límite de repositorio aprobado. ¿Qué diseño conserva mejor la velocidad?",
      "choices": [
        "Requerir la aprobación para cada búsqueda local",
        "Automatizar los pasos dentro del alcance y hacer una pausa en la frontera con una propuesta de cambio",
        "Conceder acceso a toda la organización para que no sea necesario una pausa",
        "Permitir que el repositorio cruzado escriba y solicite la aprobación retroactiva"
      ],
      "explanations": [
        "La aprobación lectura por lectura no se dirige al límite significativo.",
        "Una puerta enfocada preserva el progreso de rutina y controla la expansión del alcance.",
        "El acceso más amplio elimina en lugar de gobernar el límite.",
        "La aprobación retroactiva no puede prevenir el impacto no autorizado."
      ],
      "concept": "Intervención desencadenada por fronteras",
      "hints": [
        "¿En qué ámbitos el trabajo propuesto excede del ámbito delegado?",
        "¿Pueden continuar los progresos normales sin aprobar todas las observaciones?"
      ]
    },
    "agentic-035": {
      "prompt": "Un agente mantiene un tablero de control privado que informa sobre el éxito, mientras que los controles requeridos del PR muestran fallas. ¿Qué artefacto debería controlar la aceptación?",
      "choices": [
        "El panel privado porque es específico para el agente",
        "El último mensaje de chat porque es más nuevo",
        "Los requisitos de control y revisión del repositorio configurado",
        "La tasa de éxito histórica del agente"
      ],
      "explanations": [
        "Un panel auxiliar no puede anular las reglas de aceptación del repositorio.",
        "Recency no otorga autoridad sobre los controles requeridos.",
        "La aceptación pertenece a los controles de desarrollo establecidos y aplicados.",
        "El desempeño histórico no valida este cambio."
      ],
      "concept": "señales de aceptación autorizadas",
      "hints": [
        "¿Qué sistema en realidad impone la aceptación?",
        "¿Puede un resumen anular la evidencia que resume?"
      ]
    },
    "agentic-036": {
      "prompt": "Un agente de planificación propone cambiar la configuración de producción únicamente para aprender cómo funciona el servicio. ¿Qué alternativa respeta mejor los límites de las etapas?",
      "choices": [
        "Ejecutar el cambio durante un período tranquilo",
        "En primer lugar, pide credenciales sin restricciones.",
        "Trate el cambio exploratorio como sólo para leer porque su propósito es aprender",
        "Inspeccionar la documentación y los entornos de prueba seguros antes de proponer acciones de producción"
      ],
      "explanations": [
        "Un período tranquilo no hace apropiados los cambios de producción exploratoria.",
        "Una mayor autoridad aumenta el riesgo sin resolver la necesidad de planificación.",
        "El efecto de una acción, no su propósito declarado, determina si es una escritura.",
        "La observación segura reduce la incertidumbre sin confundir descubrimiento y ejecución."
      ],
      "concept": "Racionalización frente a acción del entorno",
      "hints": [
        "¿Un propósito exploratorio elimina los efectos secundarios de una operación?",
        "¿Qué fuentes podrían responder a la pregunta sin impacto en la producción?"
      ]
    },
    "agentic-037": {
      "prompt": "El plan de ejecución de un agente incluye cambios pero no pruebas porque \"los revisores detectarán errores\". ¿Cuál es la mejor conclusión de la revisión del plan?",
      "choices": [
        "Las responsabilidades de validación y la evidencia faltan",
        "La revisión humana hace que la validación automática sea innecesaria",
        "El plan sólo necesita un resumen más largo",
        "Los pruebas deben elegirse después de la fusión para evitar el sesgo"
      ],
      "explanations": [
        "Un plan fiable identifica cómo se demostrará el resultado previsto.",
        "La revisión y la validación automática proporcionan pruebas complementarias.",
        "La longitud de resumen no proporciona una validación faltante.",
        "La selección del prueba posterior a la fusión es demasiado tarde para una aceptación informada."
      ],
      "concept": "Validación de la planificación como un paso de primera clase",
      "hints": [
        "¿Qué evidencia demostrará el éxito antes de ser aceptado?",
        "¿Puede un revisor verificar de forma independiente cada comportamiento mediante la inspección?"
      ]
    },
    "agentic-038": {
      "prompt": "A un agente de mantenimiento se le otorga una amplia propiedad de un repositorio pero ningún contacto de escalada humano nombrado. ¿Qué debilidad operativa se introduce más directamente?",
      "choices": [
        "El agente no puede leer los archivos de origen",
        "Las decisiones bloqueadas o de alto riesgo no tienen un camino de resolución responsable",
        "GitHub no puede conservar el historial de commit",
        "Todos los cambios de rutina requieren la aprobación de producción"
      ],
      "explanations": [
        "La falta de propiedad técnicamente no impide la lectura.",
        "Un titular de la decisión definida es necesario cuando la autoridad delegada es insuficiente.",
        "La retención de compromisos no está relacionada con la escalada.",
        "Una falta de contacto no impone en sí misma una política de aprobación particular."
      ],
      "concept": "Propiedad operativa responsable",
      "hints": [
        "¿Quién decide cuándo el agente no puede proceder con seguridad?",
        "¿Qué pasa con un riesgo no resuelto al borde de la autonomía?"
      ]
    },
    "agentic-039": {
      "prompt": "Un equipo introduce agentes para arreglar los defectos de accesibilidad. ¿Qué paquete de entradas apoya mejor la implementación confiable?",
      "choices": [
        "Una captura de pantalla y una instrucción para hacer que el UI se vea moderno",
        "Un parche anterior con instrucciones para imitar su estilo",
        "Los flujos afectados, los requisitos de accesibilidad, las etapas de reproducción y los controles de aceptación",
        "Una lista de todos los archivos del repositorio sin prioridad"
      ],
      "explanations": [
        "La modernización visual no es un contrato de accesibilidad.",
        "La imitación no identifica el defecto actual o el comportamiento esperado.",
        "La evidencia y los criterios pertinentes a la tarea hacen que la asignación sea implementable y testable.",
        "Un inventario no priorizado no establece la intención."
      ],
      "concept": "diseño de entradas relevantes para las tareas",
      "hints": [
        "¿Qué necesita el agente para reproducir el problema?",
        "¿Cómo distinguirá el dueño de una solución real de un cambio cosmético?"
      ]
    },
    "agentic-040": {
      "prompt": "Tras un piloto exitoso, un equipo elimina los límites de alcance y los controles de revisión para todas las tareas de agentes. ¿Cuál es la respuesta arquitectónica más adecuada?",
      "choices": [
        "Utilice el éxito del piloto como autorización permanente",
        "Aumentar la autonomía por igual en todos los repositorios",
        "Reemplazar los controles con encuestas periódicas de satisfacción",
        "Ampliar la autonomía incrementalmente utilizando riesgos, pruebas y límites explícitos"
      ],
      "explanations": [
        "El éxito pasado no autoriza nuevas categorías de impacto.",
        "Los riesgos del repositorio y de la tarea pueden diferir sustancialmente.",
        "Las encuestas no pueden imponer restricciones operativas.",
        "La expansión basada en la evidencia preserva controles útiles a medida que cambia el alcance."
      ],
      "concept": "Expansión controlada de la autonomía",
      "hints": [
        "¿Cobre un piloto los riesgos de cada asignación futura?",
        "¿Qué límites deben cambiar sólo después de la evidencia y la revisión?"
      ]
    },
    "agentic-041": {
      "prompt": "Un agente debe resumir los problemas abiertos pero no debe cambiarlos. ¿Qué configuración de herramienta es la más adecuada?",
      "choices": [
        "Exponer las herramientas de lectura de problemas con credenciales de lectura",
        "Exponer todas las herramientas de problema y solicitar un comportamiento de solo lectura",
        "Proporcionar acceso a la administración del repositorio para una configuración más fácil",
        "Utilice una señal de escritura y mutaciones de registro después de la ejecución"
      ],
      "explanations": [
        "Tanto las herramientas disponibles como la autorización del servicio se alinean con la tarea de solo lectura.",
        "Una llamada no elimina la capacidad de mutación expuesta.",
        "La administración excede la capacidad requerida.",
        "El registro después de los hechos no impide los escritos no autorizados."
      ],
      "concept": "Selección de herramientas basadas en tareas",
      "hints": [
        "¿Qué capacidades son realmente necesarias?",
        "¿Dónde puede hacer cumplir el mismo límite el servicio externo?"
      ]
    },
    "agentic-042": {
      "prompt": "Un desarrollador agrega una URL de registro MCP y asume que cada servidor no listado está ahora bloqueado. ¿Qué hay que distinguir?",
      "choices": [
        "Descripciones del registro y longitud del contexto del modelo",
        "La configuración de descubrimiento de servidores y la aplicación de la lista de servidores permitidos",
        "Archivos fuente locales y autoría de Git commit",
        "Formación de la respuesta de las herramientas y cobertura de las pruebas"
      ],
      "explanations": [
        "La longitud del contexto no determina la admisión del servidor.",
        "Un registro cataloga los servidores; una política de restricción determina lo que está permitido.",
        "La autoría del compromiso no está relacionada con la admisión a MCP.",
        "El formato y la cobertura no imponen la membresía en el registro."
      ],
      "concept": "Registro versus lista de permisos",
      "hints": [
        "¿Saber dónde encontrar los servidores mismo prohíbe otros servidores?",
        "¿En qué entorno se expresa la decisión de admisión?"
      ]
    },
    "agentic-043": {
      "prompt": "Un servidor MCP remoto se conecta con éxito, pero sus herramientas de escritura fallan en la autorización mientras las lecturas tienen éxito. ¿Qué debe investigarse primero?",
      "choices": [
        "Si el modelo necesita una ventana de contexto más grande",
        "Si se deben ignorar todas las fallas de las herramientas",
        "La identidad autenticada y los permisos específicos de la operación",
        "Si el servidor debe ser reemplazado por un endpoint público"
      ],
      "explanations": [
        "La longitud del contexto no otorga la autorización de servicio.",
        "Ignorar errores de autorización equivoca la ejecución.",
        "La conectividad exitosa y las lecturas no implican permiso para escribir.",
        "El cambio de endpoints no resuelve la autoridad de la identidad prevista."
      ],
      "concept": "Conectividad frente a autorización",
      "hints": [
        "¿Qué ha demostrado una lectura exitosa?",
        "¿Qué límite adicional se aplica a la mutación?"
      ]
    },
    "agentic-044": {
      "prompt": "Un agente necesita una capacidad de búsqueda de problemas de un servidor MCP que también expone las herramientas de implementación. ¿Cuál es la configuración más segura y útil?",
      "choices": [
        "Habilitar todo el espacio de nombres del servidor para la comodidad",
        "Habilitar despliegues pero pedir al agente que no los use",
        "Eliminar todas las herramientas externas y abandonar la búsqueda de problemas",
        "Habilitar sólo la capacidad de búsqueda requerida con autenticación de alcance"
      ],
      "explanations": [
        "Los amplios espacios de nombres aumentan innecesariamente la superficie de acción.",
        "Las instrucciones no eliminan la capacidad de despliegue.",
        "La capacidad de lectura necesaria puede conservarse de forma segura.",
        "Un subconjunto de herramientas estrecho y el alcance de las credenciales preservan la utilidad con menos riesgo."
      ],
      "concept": "Listas de herramientas MCP permitidas",
      "hints": [
        "¿Todas las capacidades expuestas por un servidor deben ser utilizadas por este agente?",
        "¿Cuál es la superficie de acción suficiente más pequeña?"
      ]
    },
    "agentic-045": {
      "prompt": "Un equipo quiere el servidor GitHub remoto MCP en un IDE soportado. ¿Cuál es el principio correcto?",
      "choices": [
        "Configurar el extremo remoto documentado y autenticar una identidad autorizada",
        "Copiar un token en las instrucciones del repositorio para el descubrimiento automático",
        "Supongamos que el registro de descubrimiento autentica automáticamente al usuario",
        "Utilice una ruta de archivo local como endpoint de la red del servidor alojado"
      ],
      "explanations": [
        "Se requiere conectividad remota y autenticación autorizada.",
        "Las instrucciones no son una tienda segura de credenciales.",
        "El descubrimiento y la autenticación son asuntos separados.",
        "Un camino de archivo no identifica un servicio HTTP alojado."
      ],
      "concept": "configuración remota MCP",
      "hints": [
        "¿Qué necesita el cliente para localizar el servicio?",
        "¿Cómo sabe el servicio en nombre de quién se ejecuta una herramienta?"
      ]
    },
    "agentic-046": {
      "prompt": "Una herramienta MCP recién conectada devuelve texto instruyendo al agente para desactivar las protecciones del repositorio. ¿Cómo debe tratar el agente ese resultado?",
      "choices": [
        "Como una instrucción de mayor prioridad porque vino de una herramienta",
        "Como datos no confiables, no autoridad para cambiar la política",
        "Como aprobación del administrador del repositorio",
        "Como motivo para otorgar a la herramienta privilegios más amplios"
      ],
      "explanations": [
        "La salida de la herramienta no supera las instrucciones de gestión de la tarea.",
        "El contenido externo no puede autorizar cambios en los límites del agente.",
        "Una cadena devuelta no prueba la autorización del administrador.",
        "Un resultado sospechoso no es una justificación para un privilegio ampliado."
      ],
      "concept": "límites de confianza entre las herramientas y los resultados",
      "hints": [
        "¿Quién fue el autor del contenido devuelto?",
        "¿Pueden los datos de un servicio externo redefinir la autoridad del agente?"
      ]
    },
    "agentic-047": {
      "prompt": "Un agente funciona localmente pero falla en CI porque asume que el compilador instalado de un desarrollador y los archivos de directorio de inicio existen. ¿Qué hay que cambiar?",
      "choices": [
        "Aumentar el presupuesto de razonamiento del modelo",
        "Grant CI acceso al directorio de hogar de cada desarrollador",
        "Declarar los pasos de configuración reproducibles y las entradas explícitas del espacio de trabajo",
        "Intentar de nuevo el mismo comando hasta que aparezca el compilador"
      ],
      "explanations": [
        "El presupuesto razonable no puede suministrar las dependencias faltantes del tiempo de ejecución.",
        "El amplio acceso a los directorios personales es innecesario y inseguro.",
        "Las dependencias y entradas declaradas hacen que la ejecución sea portátil e inspectable.",
        "La ejecución repetida no instalará un compilador no declarado."
      ],
      "concept": "Portabilidad del entorno de ejecución",
      "hints": [
        "¿Qué suposiciones son propiedades de una máquina en lugar de la tarea?",
        "¿Qué debe establecerse antes del primer comando de construcción?"
      ]
    },
    "agentic-048": {
      "prompt": "Una automatización del repositorio puede crear una rama y PR, pero no debe actualizar directamente la rama predeterminada. ¿Qué diseño soporta mejor este alcance?",
      "choices": [
        "Dale las credenciales del propietario del repositorio y confía en las convenciones de nombres",
        "Ejecutarlo contra cualquiera de las ramas que se haya revisado actualmente",
        "Permitir pushes sin restricciones y revisar los cambios después",
        "Utilice una rama de tareas, acceso de escritura de alcance y protección de rama predeterminada forzada"
      ],
      "explanations": [
        "El nombramiento de las convenciones no impone un límite de rama.",
        "Un checkout accidental puede apuntar a la rama equivocada.",
        "La revisión posterior a los hechos no puede impedir una actualización directa.",
        "Los controles de ejecución y repositorio basados en ramas limitan el camino de escritura."
      ],
      "concept": "Ejecución delimitada por rama",
      "hints": [
        "¿Dónde deben llegar los cambios propuestos antes de su aceptación?",
        "¿Qué control sigue siendo efectivo si el agente elige un objetivo equivocado?"
      ]
    },
    "agentic-049": {
      "prompt": "Un API informa de una interrupción de servicio transitorio durante una lectura idempotente. ¿Cuál es la política más adecuada?",
      "choices": [
        "Nuevos intentos limitados con retraso y escalada después del agotamiento del presupuesto",
        "Repeticiones inmediatas sin límite",
        "Cambiar las credenciales después de cada solicitud fallida",
        "Marque el éxito de la lectura e invente una respuesta"
      ],
      "explanations": [
        "Los intentos retrasados restringidos resuelven el fallo transitorio sin un bucle incontrolado.",
        "Las llamadas inmediatas ilimitadas pueden amplificar una interrupción.",
        "La rotación de credenciales no repara la disponibilidad del servicio.",
        "La producción inventada corrompe las decisiones posteriores."
      ],
      "concept": "Manejo de errores transitorios",
      "hints": [
        "¿Es probable que otro intento cambie el resultado?",
        "¿Cómo puede volver a intentar un comportamiento que no empeore un incidente de servicio?"
      ]
    },
    "agentic-050": {
      "prompt": "Una solicitud para crear una issue agota el tiempo de espera después de enviarse, por lo que se desconoce el resultado. ¿Qué debe hacer el agente antes de reintentar la escritura?",
      "choices": [
        "Crear otro número con un título ligeramente diferente",
        "Reconciliar si ya existe la cuestión prevista",
        "Supongamos que un tiempo fuera significa que el servidor no hizo nada",
        "Cambiar a un token de administrador y repetir la solicitud"
      ],
      "explanations": [
        "Un título diferente puede crear un duplicado en lugar de recuperarse de forma segura.",
        "La reconciliación evita repetir una escritura que ya puede haber cometido.",
        "Un plazo de respuesta no demuestra la ausencia de efectos secundarios del servidor.",
        "Un mayor privilegio no resuelve la incertidumbre de la finalización."
      ],
      "concept": "Resultados de escritura ambiguos",
      "hints": [
        "¿Podría haberse cometido el servicio antes de que se perdiera la respuesta?",
        "¿Qué evidencia distingue la recuperación de la duplicación?"
      ]
    },
    "agentic-051": {
      "prompt": "Una API de despliegue admite claves de idempotencia. Un agente reintenta el mismo despliegue lógico tras una falla de red. ¿Cómo debe usar la clave?",
      "choices": [
        "Generar una nueva llave para cada intento de transporte",
        "Utilice una clave para cada implementación en todos los proyectos",
        "Reutilizar la clave de la operación en los reintentos según el contrato de la API",
        "Colocar la clave sólo en el resumen final de la auditoría"
      ],
      "explanations": [
        "Las nuevas teclas pueden hacer que los retos parezcan nuevas operaciones.",
        "Las operaciones no relacionadas no deben confundirse.",
        "Una identidad de operación estable permite al servicio deduplicar los intentos soportados.",
        "Los metadatos posteriores a la ejecución no pueden influir en la deduplicación del lado del servidor."
      ],
      "concept": "Nuevos intentos de mutación idempotentes",
      "hints": [
        "¿Es el nuevo intento una nueva operación comercial o otro intento en la misma?",
        "¿Qué componente realiza la deduplicación?"
      ]
    },
    "agentic-052": {
      "prompt": "Un trabajo de comentarios PR también tiene un gatillo manual. Las ejecuciones manuales fallan porque no existe el número PR. ¿Cuál es la mejor solución?",
      "choices": [
        "Supongo que el número PR de la última rama",
        "Dar al trabajo permisos de repositorio más amplios",
        "Prueba de nuevo el número de fallas faltantes automáticamente",
        "Condicionar el trabajo específico de PR a un contexto de evento de PR validado"
      ],
      "explanations": [
        "Adivinar los riesgos de comentar sobre un PR no relacionado.",
        "Los permisos no crean datos de eventos faltantes.",
        "Un nuevo intento no cambia el contexto del gatillo.",
        "El gating de conocimiento de acontecimientos evita acciones que requieren la ausencia de metadatos PR."
      ],
      "concept": "Puertas de eventos de flujo de trabajo defensivas",
      "hints": [
        "¿Todos los disparadores proporcionan los mismos campos de eventos?",
        "¿Qué condición previa debe cumplirse antes de que se ejecute la acción de comentarios?"
      ]
    },
    "agentic-053": {
      "prompt": "Un trabajo de planificación produce una pequeña bandera validada que un trabajo de implementación dependiente necesita. ¿Cuál es la ruta de datos GitHub Actions apropiada?",
      "choices": [
        "Exponer una salida de job y consumirla mediante la dependencia",
        "Supongamos que una variable de cáscara persiste automáticamente en todos los trabajos",
        "Descargar el texto de la consola del trabajo anterior",
        "Almacenar la bandera en un archivo de código fuente comprometido"
      ],
      "explanations": [
        "Los resultados de los trabajos proporcionan un contrato explícito de valor entre trabajos.",
        "Los trabajos separados no comparten el estado de la cáscara arbitrario.",
        "El rascado de troncos es frágil y no una entrega estructurada.",
        "Cometer el estado de orquestación transitorio cambia innecesariamente el repositorio."
      ],
      "concept": "resultados estructurados entre trabajos",
      "hints": [
        "¿Qué mecanismo de datos está diseñado para empleos dependientes?",
        "¿Es el código de valor, un informe o una pequeña señal de flujo de trabajo?"
      ]
    },
    "agentic-054": {
      "prompt": "Un agente genera un gran informe de prueba en un trabajo para inspección en otro. ¿Qué mecanismo conserva mejor el informe?",
      "choices": [
        "Imprima el informe y espera que el próximo trabajo hereda stdout",
        "Cargar un artefacto del flujo de trabajo y descargarlo cuando sea necesario",
        "Pon todo el informe en una salida de trabajo booleano corto",
        "Almacenar el informe en la conversación privada de un agente sólo"
      ],
      "explanations": [
        "Stdout no es una transmisión automática de archivos.",
        "Los artefactos conservan archivos para uso transversal y posterior revisión.",
        "Una bandera no puede representar el archivo completo de pruebas.",
        "La conversación privada no proporciona al trabajo dependiente el informe."
      ],
      "concept": "Transferencia de artefactos del flujo de trabajo",
      "hints": [
        "¿Necesita el consumidor un valor o un archivo?",
        "¿Qué debe seguir siendo inspectable después de la salida del proceso de producción?"
      ]
    },
    "agentic-055": {
      "prompt": "Una llamada de herramienta falla con una respuesta explícita de permiso insuficiente. La tarea no autoriza privilegios ampliados. ¿Cuál es la mejor respuesta?",
      "choices": [
        "Intentar de nuevo con cada token disponible",
        "Deshabilitar las verificaciones de permisos del servicio",
        "Graba la operación bloqueada y solicita una ruta de resolución autorizada",
        "Salte silenciosamente la operación y reportar el éxito completo."
      ],
      "explanations": [
        "Probar tokens no relacionados corre el riesgo de cruzar los límites de identidad.",
        "Las verificaciones de permisos no son errores a omitir.",
        "Un fallo de permiso requiere una decisión de la autoridad, no reintentos ciegos.",
        "El omitir una acción requerida sin divulgarla equivoca la finalización."
      ],
      "concept": "La escalada de las fallas de autorización",
      "hints": [
        "¿La repetición cambiará la autorización de la persona que llama?",
        "¿Quién puede decidir legítimamente si el acceso debe expandirse?"
      ]
    },
    "agentic-056": {
      "prompt": "La descarga de dependencia aprobada de un agente está bloqueada por el tiempo de ejecución firewall. ¿Cuál es el siguiente paso más seguro?",
      "choices": [
        "Deshabilitar el firewall durante toda la sesión",
        "Descargar el paquete a través de un espejo arbitrario",
        "Comprometer las credenciales almacenadas en caché de un desarrollador para acceder a otra fuente",
        "Compruebe el destino requerido y solicite un cambio de acceso revisado estrechamente"
      ],
      "explanations": [
        "La eliminación general de los controles de salida excede la necesidad demostrada.",
        "Un espejo arbitrario introduce riesgos en la cadena de suministro.",
        "No se deben comprometer las credenciales.",
        "Una excepción revisada precisa aborda la limitación ambiental."
      ],
      "concept": "Manejo de las restricciones de red",
      "hints": [
        "¿Es realmente necesario y confiable el destino bloqueado?",
        "¿Qué tan estrecho puede ser el cambio de acceso?"
      ]
    },
    "agentic-057": {
      "prompt": "Un servidor MCP local puede inspeccionar archivos sensibles en la máquina del desarrollador. ¿Qué debe considerar la revisión de la configuración?",
      "choices": [
        "Sus permisos de proceso y recursos accesibles, no sólo sus nombres de herramientas listados",
        "Sólo si el servidor está en localhost",
        "Sólo si aparece en un resultado de búsqueda",
        "Si su nombre incluye la palabra seguro"
      ],
      "explanations": [
        "La propia autoridad de ejecución del servidor determina a qué puede acceder.",
        "Localhost es una ubicación, no prueba de capacidad segura.",
        "La descubribilidad no crea confianza.",
        "Un nombre no puede hacer cumplir un límite de recursos."
      ],
      "concept": "Autoridad local de ejecución MCP",
      "hints": [
        "¿Bajo cuya identidad del sistema operativo se ejecuta el servidor?",
        "¿Puede una interfaz de aspecto estrecho ocultar el acceso subyacente amplio?"
      ]
    },
    "agentic-058": {
      "prompt": "Se aprueba el uso de un servidor MCP, pero una nueva herramienta añadida puede eliminar los registros de producción. ¿Qué sigue de la aprobación del servidor?",
      "choices": [
        "Cada herramienta futura es automáticamente segura para cada tarea",
        "La nueva capacidad todavía necesita revisión y restricciones específicas de las tareas",
        "La eliminación ya no requiere autorización de servicio",
        "Las descripciones de herramientas pueden reemplazar las verificaciones de permisos de tiempo de ejecución"
      ],
      "explanations": [
        "La aprobación de un servidor no justifica un crecimiento de capacidad sin restricciones.",
        "Las nuevas mutaciones cambian el radio de explosión y deben evaluarse por separado.",
        "La admisión del servidor no pasa por alto las autorizaciones de backend.",
        "Las descripciones informan la selección pero no obligan al acceso."
      ],
      "concept": "Revisión de la expansión de las capacidades",
      "hints": [
        "¿Ha cambiado la superficie de acción aprobada?",
        "¿La confianza a nivel de servidor responde al riesgo a nivel de operación?"
      ]
    },
    "agentic-059": {
      "prompt": "El esquema de entrada de una herramienta requiere un identificador de repositorio explícito. El agente no está seguro de cuál de los dos repositorios de nombres similares está destinado. ¿Qué debería hacer?",
      "choices": [
        "Seleccione el repositorio que aparezca primero",
        "Llame a ambos repositorios para aumentar la cobertura",
        "Resolver el objetivo canónico desde el contexto de la tarea autorizada antes de llamar",
        "Omitir el campo y confiar en un valor predeterminado no documentado"
      ],
      "explanations": [
        "El pedido no es prueba del alcance previsto.",
        "Llamar a ambos amplía el alcance sin autorización.",
        "La resolución objetivo evita una llamada válida contra el recurso equivocado.",
        "Un defecto indocumentado puede dirigirse silenciosamente al repositorio equivocado."
      ],
      "concept": "Argumento de la herramienta y validación del objetivo",
      "hints": [
        "¿Pueden argumentos sintacticamente válidos todavía identificar el recurso equivocado?",
        "¿Qué prueba de tarea establece el objetivo?"
      ]
    },
    "agentic-060": {
      "prompt": "Un flujo de trabajo necesita saber qué evento desencadenó la ejecución, no un valor de configuración gestionado centralmente. ¿Qué contexto GitHub Actions es apropiado?",
      "choices": [
        "vars",
        "secrets",
        "Una variable terminal heredada asumida",
        "github"
      ],
      "explanations": [
        "El contexto de vars contiene valores configurados en lugar de metadatos de eventos.",
        "Los secretos no son la fuente de la identidad desencadenante.",
        "El estado terminal no es un contrato confiable de eventos.",
        "El contexto de github expone los metadatos de ejecución y evento."
      ],
      "concept": "Selección de contexto de flujo de trabajo",
      "hints": [
        "¿Son estos datos una configuración o información de eventos de tiempo de ejecución?",
        "¿En qué contexto se describe la invocación del flujo de trabajo?"
      ]
    },
    "agentic-061": {
      "prompt": "Un agente ejecuta pruebas en un checkout, pero informa resultados de otra rama después de que un script cambia de directorio. ¿Qué debe validar la ruta de ejecución?",
      "choices": [
        "Directorio de trabajo, repositorio y revisión antes de los comandos consecuentes",
        "Sólo el nombre del agente.",
        "Sólo que un proceso de prueba salió en algún lugar",
        "El número de núcleos CPU disponibles"
      ],
      "explanations": [
        "La identidad de ejecución explícita impide que los comandos válidos validen el código equivocado.",
        "Los nombres de la pantalla no identifican el objetivo del sistema de archivos.",
        "Una salida del proceso sin procedencia es una prueba insuficiente.",
        "El recuento de CPU no establece qué código fue probado."
      ],
      "concept": "Verificación del contexto de ejecución",
      "hints": [
        "¿En qué código operaba el comando?",
        "¿Qué suposiciones puede invalidar un cambio de directorio?"
      ]
    },
    "agentic-062": {
      "prompt": "Un agente recibe una respuesta de límite de solicitudes que indica cuánto esperar antes de reintentar. ¿Qué respuesta favorece más una operación robusta?",
      "choices": [
        "Inicie las llamadas paralelas para evadir el límite",
        "Respetar la espera indicada dentro de una política de reintentos limitados",
        "Rotar las identidades para evitar la contabilidad",
        "Repita inmediatamente porque las lecturas son inofensivas"
      ],
      "explanations": [
        "La presión paralela puede empeorar la estrangulación.",
        "El cumplimiento de las instrucciones de servicio reduce la carga y preserva un camino de recuperación controlado.",
        "La rotación de identidad no es un método adecuado de recuperación de los límites de tasa.",
        "Las operaciones de lectura siguen consumiendo una capacidad de servicio limitada."
      ],
      "concept": "Nuevos intentos conscientes de los límites de tasa",
      "hints": [
        "¿Qué señal ha proporcionado el servicio sobre el tiempo de recuperación?",
        "¿Podría volver a intentar el tráfico por sí mismo mantener el fracaso?"
      ]
    },
    "agentic-063": {
      "prompt": "Una herramienta de mutación devuelve un error de validación porque falta un campo requerido. ¿Cuál es el mejor siguiente paso?",
      "choices": [
        "Intentar de nuevo la solicitud idéntica con retroceso exponencial",
        "Ignorar el error si el nombre de la herramienta era correcto",
        "Validar y corregir los argumentos utilizando el contrato de herramienta",
        "Aumentar el tiempo de espera de la red para permitir la validación"
      ],
      "explanations": [
        "El retroceso no puede proporcionar un argumento faltante.",
        "La selección de la herramienta correcta no hace que una llamada inválida tenga éxito.",
        "Una falla de entrada determinista requiere una corrección de entrada.",
        "El tiempo de espera de la red no cambia la validación del esquema."
      ],
      "concept": "errores deterministas versus transitorios de las herramientas",
      "hints": [
        "¿Se aceptaría una solicitud sin cambios más tarde?",
        "¿Qué parte de la llamada está bajo el control de quien llama?"
      ]
    },
    "agentic-064": {
      "prompt": "Una herramienta de corrección informa una revisión de base obsoleta en lugar de aplicar una edición. ¿Qué debería hacer el agente?",
      "choices": [
        "Forzar a sobrescribir el archivo desde su antiguo buffer",
        "Intentar de nuevo hasta que la verificación de versiones sea pasada",
        "Eliminar el archivo y recrear el contenido antiguo",
        "Leer la revisión actual y reconciliar el cambio previsto"
      ],
      "explanations": [
        "Forzar el contenido obsoleto puede destruir el trabajo simultáneo.",
        "Las comprobaciones de versiones protegen la coherencia y no deben pasarse por alto.",
        "La recreación todavía superpone las nuevas intenciones.",
        "La reconciliación aplica el cambio autorizado al estado actual."
      ],
      "concept": "Manejo optimista de la concurrencia",
      "hints": [
        "¿Qué cambió entre la lectura y la escritura?",
        "¿Qué información debe actualizarse antes de intentar otra edición?"
      ]
    },
    "agentic-065": {
      "prompt": "Un agente debe cambiar el repositorio A, pero su credencial también puede escribir el repositorio B. ¿Cuál configuración restringe mejor el alcance efectivo?",
      "choices": [
        "Limitar las credenciales y objetivos de las herramientas al repositorio A",
        "Mención del repositorio A sólo en el título PR",
        "Permitir los dos repositorios pero revisar semanalmente",
        "Utilice el repositorio que sea más fácil de acceder"
      ],
      "explanations": [
        "Las autorizaciones a escala de recursos y los objetivos validados hacen cumplir el límite de asignación.",
        "Un título no limita el acceso.",
        "La revisión semanal no puede evitar escritos no deseados.",
        "La conveniencia no define el alcance autorizado."
      ],
      "concept": "Permisos específicos del repositorio",
      "hints": [
        "¿Qué sucede si el agente selecciona el argumento de repositorio equivocado?",
        "¿Puede la autorización reducir ese posible impacto?"
      ]
    },
    "agentic-066": {
      "prompt": "Un agente de CI necesita un secreto para una herramienta externa. ¿Cuál es el mejor enfoque de manejo?",
      "choices": [
        "Incluirlo en la descripción de tareas del agente",
        "Inyectar en tiempo de ejecución sólo en el componente que lo necesita",
        "Guardar en un archivo de ejemplos comprometido MCP",
        "Echo en el PR para que los operadores puedan reproducir la llamada"
      ],
      "explanations": [
        "El texto de la tarea puede persistir o exponerse más allá de la herramienta.",
        "El objetivo de la inyección en tiempo de ejecución limita la exposición innecesaria.",
        "La configuración comprometida no es un límite secreto.",
        "El contenido de PR expone las credenciales en lugar de permitir una reproducibilidad segura."
      ],
      "concept": "límites de credenciales de tiempo de ejecución",
      "hints": [
        "¿Qué componente realmente necesita la credencial?",
        "¿Dónde se pueden conservar el texto y los registros de tareas?"
      ]
    },
    "agentic-067": {
      "prompt": "Una herramienta inicia con éxito una construcción asíncrona y devuelve un identificador de ejecución. ¿Qué debe pasar antes de que el agente afirme que la construcción pasó?",
      "choices": [
        "Tratar la aceptación de las solicitudes como un éxito constructivo",
        "Esperar un retraso corto fijo y asumir la finalización",
        "Consultar el resultado final de la ejecución identificada",
        "Cuenta el número de líneas de registro de construcción"
      ],
      "explanations": [
        "Comenzar el trabajo no es evidencia de su resultado.",
        "Un retraso fijo no establece la finalización.",
        "El resultado final de la ejecución real respalda la afirmación de éxito.",
        "El volumen del registro no indica el paso o el fracaso."
      ],
      "concept": "finalización asíncrona de la herramienta",
      "hints": [
        "¿Qué confirmó la respuesta inicial?",
        "¿Qué evidencia distingue entre hacer cola, correr y hacer un trabajo exitoso?"
      ]
    },
    "agentic-068": {
      "prompt": "Una actualización automática cambia tres configuraciones externas antes de que falle la cuarta. Las operaciones no son transaccionales. ¿Qué debe hacer la recuperación primero?",
      "choices": [
        "Supongamos que los cuatro cambios fueron revertidos",
        "Rerun todos escribe sin comprobar sus resultados",
        "Declare la tarea exitosa porque la mayoría de los escritos funcionaron",
        "Inventariar los efectos confirmados y seguir un plan autorizado de compensación o escalamiento"
      ],
      "explanations": [
        "Los servicios no transaccionales no implican el retroceso automático.",
        "La repetición ciega puede duplicar o combinar efectos.",
        "El éxito parcial no cumple con el contrato completo de tareas.",
        "La recuperación necesita un registro exacto de efectos y un camino de decisión seguro."
      ],
      "concept": "ejecución externa parcial",
      "hints": [
        "¿Qué efectos se sabe que han ocurrido?",
        "¿Se requiere autoridad para deshacer una acción?"
      ]
    },
    "agentic-069": {
      "prompt": "Un equipo usa un agente personalizado en el Copilot SDK y omite la restricción tools, suponiendo que la omisión significa ninguna herramienta. ¿Qué debe entender sobre la configuración documentada?",
      "choices": [
        "Si tools se omite o es null, se permiten todas las herramientas; restringir la lista explícitamente",
        "Las herramientas omitidas siempre hacen que el agente sólo sea leído",
        "El nombre de la pantalla determina automáticamente las herramientas permitidas",
        "El título de papel del prompt se convierte en una política de permisos"
      ],
      "explanations": [
        "El defecto documentado es de acceso amplio, por lo que la omisión no es una política de negación.",
        "El comportamiento de solo lectura no debe deducirse de la omisión.",
        "Un nombre de pantalla es metadatos de presentación.",
        "Una descripción de rol no impone automáticamente los permisos de las herramientas."
      ],
      "concept": "Restricciones explícitas de las herramientas de agentes personalizados",
      "hints": [
        "¿Cuál es la configuración por defecto documentada?",
        "¿Se puede confundir una restricción faltante con un límite seguro?"
      ]
    },
    "agentic-070": {
      "prompt": "Una organización configuró acceso MCP limitado a los servidores del registro en un IDE compatible. Un servidor local está bloqueado. ¿Qué debe verificarse antes de cambiar la política?",
      "choices": [
        "Si los servidores locales están exentos automáticamente",
        "Si el servidor es una entrada de registro aprobada con el identificador correspondiente",
        "Si las descripciones de sus herramientas son especialmente detalladas",
        "Si el desarrollador puede renombrarlo a un servidor aprobado"
      ],
      "explanations": [
        "La ubicación local no exime inherentemente a un servidor de las restricciones de registro.",
        "Se aprobó la membresía y la identidad correspondiente en virtud de la política declarada.",
        "La calidad de la descripción no satisface la membresía permitida.",
        "Impersonar otra entrada derrota la intención de gobierno."
      ],
      "concept": "admisión de permisos de servidor local",
      "hints": [
        "¿Qué identidad compara la política?",
        "¿Un transporte local cambia el estado de aprobación del servidor?"
      ]
    },
    "agentic-071": {
      "prompt": "Un equipo asume que su política privada de registro MCP limita automáticamente el agente de nube Copilot. ¿Qué respuesta de configuración coincide con la actual guía de GitHub?",
      "choices": [
        "Suponga que todas las superficies de Copilot apliquen políticas de registro idénticas",
        "Eliminar la configuración de repositorio MCP porque el registro lo reemplaza",
        "Verificar la aplicabilidad específica de la superficie; la política de registro privado no se aplica a los agentes en la nube",
        "Grant cloud agent todas las herramientas registradas para garantizar la compatibilidad"
      ],
      "explanations": [
        "La aplicabilidad de las políticas difiere entre las superficies Copilot.",
        "La configuración del agente en la nube MCP todavía necesita su propia revisión.",
        "La documentación actual de salvaguardas identifica explícitamente esta limitación de política.",
        "La presencia del registro no justifica el acceso a una amplia capacidad."
      ],
      "concept": "Aplicabilidad de la política MCP específica de la superficie",
      "hints": [
        "¿Es un control de IDE necesariamente un control de tiempo de ejecución en la nube?",
        "¿Qué documentación define la superficie de aplicación?"
      ]
    },
    "agentic-072": {
      "prompt": "Un comando de shell generado por un agente inserta un título del problema directamente en la sintaxis ejecutable. ¿Cuál es la mejor mejora del camino de ejecución?",
      "choices": [
        "Títulos de confianza porque se almacenan en GitHub",
        "Pídale al modelo que prometa no generar metacaracteres",
        "Ejecutar el comando con acceso al administrador para evitar errores",
        "Pasar valores no confiables como datos manejados de forma segura y validar la intención del comando"
      ],
      "explanations": [
        "El contenido del repositorio aún puede contener entradas adversas.",
        "Una promesa no impone la separación del código de datos.",
        "Un privilegio mayor aumenta los posibles daños.",
        "La manipulación de datos y la validación de la intención reducen el riesgo de inyección."
      ],
      "concept": "manejo seguro de los argumentos de comando",
      "hints": [
        "¿Dónde se convierte el texto externo en estructura ejecutable?",
        "¿Se puede expresar la misma operación sin interpretar ese texto como código?"
      ]
    },
    "agentic-073": {
      "prompt": "Un trabajo de construcción tiene acceso al repositorio solo para lectura. Sólo un trabajo posterior de creación de PR necesita acceso de escritura. ¿Qué diseño de permiso es más apropiado?",
      "choices": [
        "Mantenga la construcción de solo lectura y otorgar el trabajo posterior sólo sus escritos requeridos",
        "Grant escribe acceso a nivel mundial para que cada trabajo sea consistente",
        "Utilice un token de administrador personal en todo",
        "Deshabilitar la autenticación y confiar en los nombres de las ramas"
      ],
      "explanations": [
        "La elevación específica del trabajo limita la exposición a la etapa que la necesita.",
        "Global escribe ampliando innecesariamente la autoridad de la construcción.",
        "Un token de administrador excede las necesidades de ambos trabajos.",
        "El nombre de la rama no puede reemplazar la autorización."
      ],
      "concept": "elevación de permisos a escala de trabajo",
      "hints": [
        "¿En qué etapa se muta realmente un recurso?",
        "¿Qué autoridad queda expuesta si se compromete una dependencia de construcción?"
      ]
    },
    "agentic-074": {
      "prompt": "Una configuración local utiliza un endpoint remoto MCP que es inaccesible desde la red de ejecución en la nube. ¿Qué debe comprobar la preparación para el despliegue?",
      "choices": [
        "Sólo que la URL funcionó en la computadora portátil del autor",
        "Accesividad, autenticación y compatibilidad de las políticas desde el tiempo de ejecución real",
        "Sólo que el endpoint aparece en el aviso",
        "Que todos los controles de la red están desactivados"
      ],
      "explanations": [
        "La conectividad de la computadora portátil no prueba la conectividad en la nube.",
        "La preparación de la herramienta debe establecerse en el entorno que la ejecutará.",
        "Mencionar el endpoint en un prompt no configura una conexión.",
        "Desactivar los controles elimina los límites útiles en lugar de probar la compatibilidad."
      ],
      "concept": "Preparación MCP específica para el tiempo de ejecución",
      "hints": [
        "¿De qué red e identidad se procederá la solicitud?",
        "¿Qué suposiciones cambian cuando la ejecución mueve ambientes?"
      ]
    },
    "agentic-075": {
      "prompt": "Una herramienta de búsqueda sólo devuelve la primera página de problemas de coincidencia. El agente debe producir un inventario completo. ¿Qué debería hacer?",
      "choices": [
        "Tratar la primera página como exhaustiva",
        "Estimación de los elementos faltantes de la distribución de títulos",
        "Seguir la paginación documentada dentro de los límites de la tarea o informar la cobertura incompleta",
        "Repita la solicitud de la primera página hasta que el recuento parezca estable"
      ],
      "explanations": [
        "Una página limitada no establece la integridad.",
        "Los números estimados no son un inventario.",
        "La paginación o una limitación explícita preserva la información basada en la evidencia.",
        "La repetición de la misma página no recupera resultados omitidos."
      ],
      "concept": "Completidad del resultado de la herramienta",
      "hints": [
        "¿La respuesta indica truncation o otra página?",
        "¿Qué evidencia apoya la palabra completa?"
      ]
    },
    "agentic-076": {
      "prompt": "Una herramienta de ejecución devuelve el estado de salida cero, pero su salida dice 'no se han descubierto pruebas'. ¿Qué debería concluir el agente?",
      "choices": [
        "Pasaron todos los pruebas previstos",
        "No se necesitan pruebas porque la herramienta ha tenido éxito",
        "La tarea está completa si la compilación ha pasado",
        "El comando completado, pero la prueba requerida todavía falta."
      ],
      "explanations": [
        "Ninguna prueba descubierta no es prueba de que las pruebas previstas hayan sido aprobadas.",
        "El contrato de tarea aún requiere ejecución.",
        "La compilación no sustituye a las pruebas especificadas.",
        "El éxito del proceso debe interpretarse en función del resultado real de la herramienta."
      ],
      "concept": "interpretación semántica del éxito de las herramientas",
      "hints": [
        "¿Qué confirmaba en realidad el comando?",
        "¿Es un proceso exitoso idéntico a una tarea exitosa?"
      ]
    },
    "agentic-077": {
      "prompt": "Un equipo diseña un retroceso para un despliegue de configuración generado por un agente. ¿Qué preparación es más útil?",
      "choices": [
        "Registrar la revisión anterior de funcionamiento comprobado y una ruta de restauración probada y autorizada",
        "Supongamos que la eliminación de la nueva rama restaura todos los sistemas externos",
        "Confía en el modelo para reconstruir valores antiguos a partir de la memoria",
        "Eliminar todos los registros de ejecución después del despliegue"
      ],
      "explanations": [
        "Un objetivo y una ruta de recuperación precisos apoyan una restauración fiable.",
        "Los efectos externos no se eliminan simplemente eliminando una rama.",
        "La reconstrucción de la memoria no es una fuente de recuperación confiable.",
        "Eliminar registros elimina la evidencia necesaria para la recuperación."
      ],
      "concept": "Preparación para la reversión",
      "hints": [
        "¿Qué estado debe restaurar la recuperación?",
        "¿Puede el operador identificar ese estado independientemente del recuerdo del agente?"
      ]
    },
    "agentic-078": {
      "prompt": "Un agente utiliza una herramienta soportada para crear un PR, pero las reglas del repositorio rechazan la operación propuesta. ¿Qué debería hacer?",
      "choices": [
        "Usar otra identidad para evitar el rechazo",
        "Explicar el conflicto de reglas y seguir un camino de conformidad aprobado",
        "Deshabilitar las reglas porque la tarea solicitó un PR",
        "Informar el PR como creado porque la herramienta estaba disponible"
      ],
      "explanations": [
        "Cambiar las identidades para eludir los controles excede la autorización.",
        "Las reglas del repositorio limitan la ruta de ejecución permitida.",
        "Una solicitud de tarea no autoriza la eliminación de protecciones.",
        "La disponibilidad de herramientas no es evidencia de que se haya creado un recurso."
      ],
      "concept": "Cumplimiento de los controles del repositorio",
      "hints": [
        "¿La capacidad implica el permiso para eludir las reglas de aceptación?",
        "¿Qué haría que el próximo intento sea compatible?"
      ]
    },
    "agentic-079": {
      "prompt": "Un flujo de trabajo transfiere un nombre objetivo generado por un agente a un trabajo de despliegue privilegiado. ¿Cuál es la protección más importante antes de su uso?",
      "choices": [
        "Confía en él porque es una producción de trabajo",
        "Utilice el objetivo con los permisos de administrador primero",
        "Validalo en relación con los objetivos autorizados y el contexto de tarea aprobado",
        "Conviértelo en mayúsculas para que sea seguro"
      ],
      "explanations": [
        "La transferencia estructurada no hace que los datos generados sean fiables.",
        "El privilegio no valida el objetivo.",
        "La validación evita que una transmisión válida de otra manera se realice por parte de la autoridad redirigente.",
        "El formato no establece la autorización."
      ],
      "concept": "Validación de las entradas de las herramientas transversales",
      "hints": [
        "¿Qué hace que el destino sea autorizado y no simplemente bien formado?",
        "¿Establece un mecanismo de transporte confianza en su contenido?"
      ]
    },
    "agentic-080": {
      "prompt": "Un agente debe detener un proceso de fondo que lanzó para las pruebas. Otros usuarios tienen procesos similares en el host compartido. ¿Cuál es el método más seguro?",
      "choices": [
        "Detener todos los procesos con el mismo nombre ejecutable",
        "Reiniciar el host compartido",
        "Dejar cada proceso en funcionamiento para evitar identificar la propiedad",
        "Utilice el proceso grabado o la identidad de sesión para detener sólo su propio ayudante"
      ],
      "explanations": [
        "La interrupción basada en el nombre puede afectar a usuarios no relacionados.",
        "Un reinicio del anfitrión tiene un radio de explosión excesivo.",
        "Los ayudantes de propiedad todavía necesitan limpieza del ciclo de vida.",
        "La propiedad registrada permite la limpieza dirigida sin perturbar otros trabajos."
      ],
      "concept": "Ciclo de vida de los recursos de ejecución",
      "hints": [
        "¿Qué recurso creó esta tarea?",
        "¿Cómo puede la limpieza distinguir la propiedad de un nombre ejecutable compartido?"
      ]
    },
    "agentic-081": {
      "prompt": "Una herramienta externa cambia su esquema de respuesta. El analizador del agente ahora trata los campos de estado faltantes como un éxito. ¿Qué hay que arreglar?",
      "choices": [
        "Validar los contratos de respuesta y fallar con seguridad en resultados no reconocidos",
        "Default todos los campos ausentes para completar con éxito",
        "Aumentar el número de intentos de repetición sin cambiar el análisis",
        "Ignorar la salida de la herramienta y confiar en la operación prevista"
      ],
      "explanations": [
        "Los esquemas desconocidos no deben convertirse en señales de éxito inventadas.",
        "La falta de información no demuestra el éxito.",
        "Los pruebas retrospectivos no reparan las suposiciones deterministas del parser.",
        "La intención no puede establecer el resultado de una acción externa."
      ],
      "concept": "Validación del contrato de respuesta a la herramienta",
      "hints": [
        "¿Qué establece realmente un estado de ausencia?",
        "¿Cómo debe diferir un resultado desconocido de un resultado confirmado?"
      ]
    },
    "agentic-082": {
      "prompt": "Una herramienta puede publicar versiones, pero la tarea actual solo solicita un borrador PR. ¿Qué debe deducir el agente de la disponibilidad de las herramientas?",
      "choices": [
        "La publicación está implícitamente autorizada",
        "La capacidad existe, pero la tarea todavía limita el uso permitido",
        "Cada herramienta expuesta debe ser llamada una vez",
        "Los trabajos de proyecto no pueden continuar hasta que la publicación esté habilitada"
      ],
      "explanations": [
        "Las capacidades disponibles no amplían la autorización de la tarea.",
        "El alcance de las tareas sigue siendo vinculante incluso cuando una herramienta puede hacer más.",
        "El uso de herramientas debe servir a la tarea en lugar de maximizar las llamadas.",
        "Un proyecto de PR no requiere publicación de la publicación."
      ],
      "concept": "Capacidad frente a la autoridad de tareas",
      "hints": [
        "¿Qué autorizó el usuario como entregable?",
        "¿Es una acción expuesta automáticamente parte de esa entregable?"
      ]
    },
    "agentic-083": {
      "prompt": "La configuración CI de un agente no puede llegar a un servicio de paquetes porque su autenticación ha expirado. ¿Cuál es la recuperación más específica?",
      "choices": [
        "Reescribir la aplicación para eliminar todas las dependencias",
        "Prueba de nuevo la credencial expirada indefinidamente",
        "Renovar la autenticación a través de la vía de gestión de secretos aprobada",
        "Incluye un token de trabajo en el manifiesto del paquete"
      ],
      "explanations": [
        "Una reescritura amplia no aborda la falla ambiental identificada.",
        "La autenticación caducada no se reparará a través de la repetición.",
        "La renovación aprobada restablece la capacidad requerida sin exponer las credenciales.",
        "Los manifiestos no son un lugar seguro para tokens."
      ],
      "concept": "Recuperación de fallas de autenticación",
      "hints": [
        "¿Qué capa está fallando antes de que la construcción pueda continuar?",
        "¿Cómo se puede restaurar el acceso sin cambiar el comportamiento de la fuente?"
      ]
    },
    "agentic-084": {
      "prompt": "Se puede activar un flujo de trabajo CI en el contenido PR no fiable. También tiene un trabajo privilegiado que puede modificar la configuración del repositorio. ¿Cuál es el límite más importante?",
      "choices": [
        "Utilice títulos más descriptivos de PR",
        "Deje que el agente decida si el contenido entrante parece confiable",
        "Hacer que las credenciales privilegiadas estén disponibles en cada paso para la coherencia",
        "Separar el procesamiento no confiable de la ejecución privilegiada con validación explícita y puertas"
      ],
      "explanations": [
        "Los títulos no imponen un límite de confianza.",
        "El criterio de modelo subjetivo no es un límite de credencialidad suficiente.",
        "La amplia exposición a las credenciales aumenta el impacto del código no confiable.",
        "La separación limita el camino de las entradas no fiables a las operaciones consecuentes."
      ],
      "concept": "Diseño de límites de confianza CI",
      "hints": [
        "¿En qué entradas puede influir un colaborador externo?",
        "¿Dónde podrían esas entradas adquirir autoridad de escritura?"
      ]
    },
    "agentic-085": {
      "prompt": "El comando de un agente falla porque falta un ejecutable requerido en el entorno. ¿Qué comprobación previa lo habría detectado antes?",
      "choices": [
        "Verificar las herramientas y versiones requeridas en el entorno de ejecución previsto",
        "Solo compruebe si el repositorio tiene un README",
        "Pregunte al modelo si recuerda haber usado el comando antes",
        "Cuenta el número de ejecuciones exitosas del flujo de trabajo pasado"
      ],
      "explanations": [
        "Las verificaciones de capacidad de ejecución verifican directamente el requisito previo faltante.",
        "Un README no demuestra que se haya instalado una dependencia.",
        "La experiencia del modelo pasado no describe este tiempo de ejecución.",
        "Las ejecuciones históricas pueden haber utilizado diferentes imágenes o dependencias."
      ],
      "concept": "Control del entorno antes del vuelo",
      "hints": [
        "¿Qué condición previa falló antes de que comenzara el trabajo real del comando?",
        "¿Dónde debe comprobarse ese requisito previo?"
      ]
    },
    "agentic-086": {
      "prompt": "Un equipo migra un agente de una máquina de desarrollo a una efímera runner. ¿Qué debería pasar con las dependencias y credenciales?",
      "choices": [
        "Supongamos que ambos persistan desde la sesión anterior del desarrollador",
        "Recrear dependencias explícitamente e inyectar credenciales autorizadas para esa ejecución",
        "Copie todo el directorio de la casa del desarrollador en la imagen runner",
        "Deshabilitar la autenticación para que la ejecución efímera se mantenga simple"
      ],
      "explanations": [
        "Un efímero runner no hereda el estado local arbitrario.",
        "Configuración reproducible y tiempo de ejecución de alcance secrets adaptado a entornos desechables.",
        "La copia general del estado personal expone datos innecesarios y secrets.",
        "La efemeralidad no elimina los requisitos de autenticación."
      ],
      "concept": "Configuración de ejecución efímera",
      "hints": [
        "¿Qué hay en un nuevo runner al arrancar?",
        "¿Qué estado local es esencial, y cuál nunca debe ser copiado?"
      ]
    },
    "agentic-087": {
      "prompt": "Una herramienta modifica correctamente una configuración externa, pero falla el checkpoint local posterior. Al reiniciar, ¿qué debe ocurrir antes de otra escritura?",
      "choices": [
        "Supongamos que la escritura externa falló con el checkpoint",
        "Siempre restablezca los valores predeterminados de fábrica",
        "Conciliar el estado externo con el registro de operación y recuperación previsto",
        "Elige un nuevo objetivo para que el estado anterior ya no importe."
      ],
      "explanations": [
        "El fracaso local de la persistencia no deshace una acción externa completa.",
        "La restauración de la fábrica puede ser no autorizada y destructiva.",
        "La reconciliación aborda la brecha entre los efectos externos y los registros locales.",
        "Cambiar los objetivos no resuelve la operación original."
      ],
      "concept": "efectos externos frente a la persistencia local",
      "hints": [
        "¿Fue la escritura externa y checkpoint una sola transacción?",
        "¿Qué puede revelar el servicio sobre el estado actual de la operación?"
      ]
    },
    "agentic-088": {
      "prompt": "Se actualiza un paquete de servidor MCP y ahora solicita un acceso más amplio al sistema de archivos. ¿Qué debe hacer el equipo antes de adoptar la actualización?",
      "choices": [
        "Aceptar porque todas las actualizaciones son mejoras de seguridad",
        "Aprobar basándose únicamente en un nombre de servidor no modificado",
        "Los efectos de la concesión de acceso e inspección después de un mes",
        "Revisar la capacidad cambiada y probarla en un entorno limitado"
      ],
      "explanations": [
        "Una actualización puede aumentar el riesgo incluso cuando incluye correcciones.",
        "Un nombre estable no implica comportamiento o permisos estables.",
        "La revisión tardía expone los recursos antes de que se evalúe el riesgo.",
        "La revisión del estilo de dependencia y las pruebas restringidas evalúan el límite cambiado."
      ],
      "concept": "MCP gobernanza de la dependencia",
      "hints": [
        "¿Qué cambió en la autoridad efectiva del servidor?",
        "¿La aprobación previa cubre el acceso recientemente solicitado?"
      ]
    },
    "agentic-089": {
      "prompt": "Un agente tiene que comentar sobre un PR pero no el código push. ¿Qué principio de permiso debería guiar su flujo de trabajo?",
      "choices": [
        "Conceder sólo los permisos necesarios para la operación de comentarios",
        "El contenido de la subvención se escribe porque los comentarios contienen texto",
        "Administración de los repositorios de subvenciones para evitar futuras fallas",
        "Utilice el token completo de un mantenedor para toda la automatización"
      ],
      "explanations": [
        "La autorización específica de operación evita el acceso innecesario al código de escritura.",
        "Un comentario de PR no requiere en sí mismo la modificación del contenido del repositorio.",
        "La conveniencia futura no justifica el acceso administrativo.",
        "Un token personal amplio expande la exposición más allá de la tarea."
      ],
      "concept": "Permisos de flujo de trabajo específicos de la operación",
      "hints": [
        "¿Qué recurso se está cambiando?",
        "¿Son las actualizaciones de contenido parte de la operación solicitada?"
      ]
    },
    "agentic-090": {
      "prompt": "Una herramienta permite simular una operación sin aplicar cambios, pero la tarea requiere un cambio real autorizado. El agente solo ejecuta la simulación. ¿Qué debe informar?",
      "choices": [
        "El cambio se aplicó porque la validación fue exitosa.",
        "La operación propuesta ha sido verificada, pero no se ha aplicado",
        "El servicio lo aplicará automáticamente más tarde",
        "La operación falló porque las corrientes secas no pueden ser útiles"
      ],
      "explanations": [
        "Una simulación no demuestra un efecto comprometido.",
        "El informe debe distinguir la intención validada de la mutación ejecutada.",
        "No se puede asumir una aplicación automática posterior.",
        "Una simulación sin cambios puede proporcionar pruebas útiles sin completar la ejecución."
      ],
      "concept": "La ejecución seca frente a los resultados aplicados",
      "hints": [
        "¿Qué efectos secundarios permitió el modo invocado?",
        "¿Qué queda para satisfacer la entrega requerida?"
      ]
    },
    "agentic-091": {
      "prompt": "Los registros de herramientas de un equipo muestran sellos de tiempo, pero no pueden distinguir dos ejecuciones simultáneas de agentes contra el mismo repositorio. ¿Qué hay que añadir?",
      "choices": [
        "Sólo el nombre de pantalla del modelo",
        "Un recuento de todas las llamadas de las herramientas ese día",
        "Identificadores de ejecución, tarea, actor, objetivo y revisión en eventos relevantes",
        "Un solo mensaje de éxito combinado para ambas ejecuciones"
      ],
      "explanations": [
        "Los nombres de visualización pueden ser compartidos entre las ejecuciones.",
        "Los totales diarios no pueden reconstruir las acciones individuales.",
        "Identidad de ejecución correlacionada vincula acciones y resultados a la ejecución correcta.",
        "La combinación de resultados que se ejecutan produjo cada efecto."
      ],
      "concept": "Trazabilidad mediante la acción de las herramientas",
      "hints": [
        "¿Puede un investigador asignar cada acción a una ejecución?",
        "¿Qué identificadores conectan un evento de herramienta a su estado de tarea y código?"
      ]
    },
    "agentic-092": {
      "prompt": "Un agente debe conservar los cálculos intermedios de una tarea, pero no reutilizarlos en tareas posteriores. ¿A qué memoria se ajusta?",
      "choices": [
        "Conocimiento de toda la organización",
        "Preferencias de los usuarios permanentes",
        "Una política compartida de repositorios",
        "Estado a corto plazo de la tarea local"
      ],
      "explanations": [
        "El alcance de la organización comparte innecesariamente datos específicos de las tareas.",
        "Los cálculos no son preferencias personales duraderas.",
        "Los valores intermedios no son una política de repositorio.",
        "El estado de tarea local admite la ejecución actual sin reutilización de tareas cruzadas."
      ],
      "concept": "alcance de la memoria a corto plazo",
      "hints": [
        "¿Cuánto tiempo es relevante esta información?",
        "¿Quién más debería poder reutilizarlo?"
      ]
    },
    "agentic-093": {
      "prompt": "Un agente de larga duración necesita un registro duradero de decisiones arquitectónicas aprobadas. ¿Dónde debe guardar el registro autorizado?",
      "choices": [
        "Un artefacto de decisión en versión vinculado a la tarea",
        "Sólo su ventana de contexto actual",
        "Una nota especulativa sin etiqueta",
        "El último comando de proyectil exitoso"
      ],
      "explanations": [
        "Un artefacto con versiones duraderas conserva la autoridad y la procedencia.",
        "El contexto puede perderse o comprimirse.",
        "La especulación no debe hacerse pasar por una decisión aprobada.",
        "Un comando no representa la intención arquitectónica."
      ],
      "concept": "Memoria de decisión duradera",
      "hints": [
        "¿Qué sobrevive a un reinicio del proceso?",
        "¿Cómo se distingue una decisión aprobada de una hipótesis?"
      ]
    },
    "agentic-094": {
      "prompt": "Un agente reiniciado comienza a implementar un paso ya completado antes de un accidente. ¿Qué información checkpoint evitaría esto directamente?",
      "choices": [
        "El estilo de respuesta preferido del agente",
        "Pasos completados, referencias de efectos, revisión actual y próxima acción",
        "La solicitud original sin progreso",
        "El recuento total de tokens de la sesión anterior"
      ],
      "explanations": [
        "El estilo no identifica los efectos completos.",
        "Un registro concreto de progreso apoya una continuación segura.",
        "La tarea original omite lo que ya ha sucedido.",
        "El recuento de tokens no reconstruye la ejecución."
      ],
      "concept": "Progreso reutilizable checkpoints",
      "hints": [
        "¿Cuáles son los hechos que distinguen una tarea nueva de una que se reanuda?",
        "¿Cómo se pueden verificar los efectos completos?"
      ]
    },
    "agentic-095": {
      "prompt": "Un agente recuerda un viejo comando de construcción, pero la rama actual cambió sus scripts de paquetes. ¿Qué debe ocurrir antes de su reutilización?",
      "choices": [
        "Preferir la memoria a los archivos actuales",
        "ejecuta todos los comandos históricos",
        "Valida el hecho recordado en comparación con la evidencia del repositorio actual",
        "Eliminar el historial de tareas de forma permanente"
      ],
      "explanations": [
        "La memoria puede quedarse obsoleta.",
        "Los comandos históricos pueden ser incompatibles o inseguros.",
        "Las pruebas actuales determinan si un hecho almacenado sigue siendo aplicable.",
        "La validación selectiva es más útil que la eliminación indiscriminada."
      ],
      "concept": "Validación de la frescura de la memoria",
      "hints": [
        "¿Qué estado de código soporta la memoria?",
        "¿Todavía existe esa evidencia en esta rama?"
      ]
    },
    "agentic-096": {
      "prompt": "Un resumen de memoria trata \"tal vez reemplazar el caché\" como una decisión aprobada. ¿Qué hay que corregir?",
      "choices": [
        "Haga que el resumen sea más seguro",
        "Realizar la sustitución para validar el resumen",
        "Eliminar todos los resúmenes del flujo de trabajo",
        "Preservar explícitamente la incertidumbre y el estado de la decisión"
      ],
      "explanations": [
        "La confianza amplificaría la clasificación errónea.",
        "La ejecución no puede autorizar retroactivamente una propuesta.",
        "Los resúmenes siguen siendo útiles cuando se califican con precisión.",
        "Las hipótesis y las decisiones aprobadas necesitan un estatus distinto."
      ],
      "concept": "Preservación del estatus de decisión",
      "hints": [
        "¿Fue la declaración original una propuesta o una autorización?",
        "¿Qué significado se perdió durante la compresión?"
      ]
    },
    "agentic-097": {
      "prompt": "Una larga sesión de agentes comienza a optimizar el código no relacionado en lugar de arreglar el defecto acordado. ¿Cuál es la mejor corrección de deriva?",
      "choices": [
        "Comparar las acciones actuales con el objetivo aprobado y restablecer el alcance",
        "Aumentar la ventana de contexto sin revisar las acciones",
        "Aprobar todos los nuevos objetivos porque surgieron durante la ejecución",
        "Eliminar los criterios de aceptación originales"
      ],
      "explanations": [
        "El contrato aprobado proporciona un anclaje para detectar y corregir la deriva.",
        "Una mayor capacidad no restablece por sí misma la alineación.",
        "Los nuevos objetivos no se autorizan automáticamente.",
        "La eliminación de criterios elimina la referencia de alineación."
      ],
      "concept": "Detección de la deriva del contexto",
      "hints": [
        "¿Qué artefacto estable define el trabajo previsto?",
        "¿Cómo se comparan las acciones actuales con ese límite?"
      ]
    },
    "agentic-098": {
      "prompt": "Dos herramientas no están de acuerdo sobre si un despliegue se completó. Uno informa un estado almacenado en caché; el otro muestra el registro de operación actual. ¿Qué debería hacer el agente?",
      "choices": [
        "Elige el estado que sea favorable",
        "Conciliar la actualidad y procedencia de los datos usando el estado de la operación en el sistema responsable",
        "Calcular el promedio de los dos estados",
        "Repite el despliegue antes de comprobar cualquiera de las fuentes"
      ],
      "explanations": [
        "La favorabilidad no es una regla de coherencia.",
        "La autoridad de la fuente y la frescura resuelven el estado conflictivo.",
        "Los estados de finalización no son cantidades en promedio.",
        "La repetición ciega puede duplicar una operación ya completada."
      ],
      "concept": "Reconciliación transversal",
      "hints": [
        "¿Cuándo se hizo cada observación?",
        "¿Qué sistema posee el estado real de la operación?"
      ]
    },
    "agentic-099": {
      "prompt": "Un agente conserva para siempre todas las respuestas sin procesar de las herramientas. La recuperación muestra cada vez más información irrelevante. ¿Qué política de memoria resuelve mejor el problema?",
      "choices": [
        "Siempre recuperar más historia",
        "Promover cada respuesta en una instrucción permanente",
        "Aplicar la poda basada en la relevancia, las reglas de retención y los resúmenes compactos verificados",
        "Deshabilitar todo seguimiento de progreso duradero"
      ],
      "explanations": [
        "El contexto más irrelevante puede empeorar la calidad de la recuperación.",
        "Las observaciones no son instrucciones permanentes.",
        "Los controles de retención y relevancia reducen el ruido sin perder el estado esencial.",
        "Eliminar el seguimiento del progreso sacrifica la continuidad."
      ],
      "concept": "poda y retención de la memoria",
      "hints": [
        "¿Qué información es útil para tomar decisiones futuras?",
        "¿Se pueden conservar pruebas esenciales sin inyectar toda la historia cruda?"
      ]
    },
    "agentic-100": {
      "prompt": "Un agente se muda del desarrollo local a CI. ¿Qué transmisión de estado conserva mejor la continuidad?",
      "choices": [
        "Un camino absoluto local solo",
        "Todo el directorio de la vivienda del desarrollador",
        "Una declaración de que el trabajo está casi terminado",
        "Un checkpoint portátil con revisión, referencias de artefactos, decisiones y pasos pendientes"
      ],
      "explanations": [
        "Puede que no exista una ruta local en CI.",
        "El estado personal amplio expone datos innecesarios.",
        "Una declaración vaga no puede guiar una reanudación segura.",
        "Las referencias portátiles y el progreso explícito sobreviven a los cambios ambientales."
      ],
      "concept": "Transmisión estatal independiente del entorno",
      "hints": [
        "¿Qué puede resolver realmente el tiempo de ejecución que recibe?",
        "¿Qué necesita verificar antes de continuar?"
      ]
    },
    "agentic-101": {
      "prompt": "Un checkpoint contiene una credencial de producción porque una herramienta la devolvió. ¿Cuál es la mejor corrección?",
      "choices": [
        "Eliminar el secreto y conservar, si hace falta, una referencia autorizada al secreto",
        "Copiarlo en cada resumen futuro",
        "Manténlo porque checkpoints no son código fuente",
        "Renombrar el campo para ocultar su propósito"
      ],
      "explanations": [
        "El Estado debe hacer referencia al acceso protegido en lugar de mantener valores secretos.",
        "La replicación expande la exposición.",
        "Los artefactos operativos duraderos también pueden filtrarse secrets.",
        "El cambio de nombre no protege una credencial."
      ],
      "concept": "estado persistente seguro en secreto",
      "hints": [
        "¿El siguiente agente necesita el valor o una forma de obtener acceso autorizado?",
        "¿Dónde se puede conservar o compartir checkpoints?"
      ]
    },
    "agentic-102": {
      "prompt": "Dos agentes actualizan un registro compartido de tareas y uno sobrescribe silenciosamente el marcador de finalización del otro. ¿Qué mecanismo de estado lo impide mejor?",
      "choices": [
        "Resúmenes más largos en lengua natural",
        "Verificación de versiones con detección de conflictos o actualizaciones en serie",
        "Nombres de visualización de agentes idénticos",
        "Una regla de que la última respuesta es siempre correcta"
      ],
      "explanations": [
        "La longitud de resumen no impide la pérdida de actualizaciones.",
        "El control de la convergencia detecta escritos obsoletos o evita la superposición.",
        "Los nombres compartidos reducen la trazabilidad.",
        "La orden de respuesta no establece la corrección del estado."
      ],
      "concept": "Consistencia en estado simultáneo",
      "hints": [
        "¿Pueden ambos escritores haber leído la misma versión antigua?",
        "¿Cómo debe detectarse una actualización obsoleta?"
      ]
    },
    "agentic-103": {
      "prompt": "Un agente se cambia a un repositorio de clientes diferente. ¿Qué memoria anterior debe cargarse por defecto?",
      "choices": [
        "Todos los datos del repositorio del cliente anterior",
        "Todas las credenciales anteriores",
        "Sólo la memoria autorizada y relevante para el nuevo ámbito de aplicación",
        "Cada transcripción de la herramienta de la participación anterior"
      ],
      "explanations": [
        "Los hechos de archivo pueden ser inapplicables o privados.",
        "Las credenciales no deben transferirse a través de la memoria.",
        "La memoria debe respetar la relevancia y los límites de acceso.",
        "Las transcripciones no filtradas crean ruido y riesgo de divulgación."
      ],
      "concept": "aislamiento del alcance de la memoria",
      "hints": [
        "¿La utilidad en un repositorio implica relevancia en otro?",
        "¿Qué límite de acceso se aplica a la información almacenada?"
      ]
    },
    "agentic-104": {
      "prompt": "Un equipo comprime una larga conversación antes de retomar a un agente. ¿Qué información no debe perderse?",
      "choices": [
        "Saludos repetidos",
        "Cada variación de la redacción intermedia",
        "Todos los resultados de búsqueda irrelevantes",
        "Las restricciones aprobadas, las preguntas no resueltas, el progreso y las referencias de pruebas"
      ],
      "explanations": [
        "Los saludos rara vez afectan la continuación.",
        "Las variantes de redacción son menos importantes que las decisiones autorizadas.",
        "Los resultados irrelevantes diluyen el contexto.",
        "Estos hechos preservan la identidad de la tarea y protegen los próximos pasos."
      ],
      "concept": "Compacción de contexto segura",
      "hints": [
        "¿Qué cambiaría la siguiente acción si se omite?",
        "¿Qué hechos distinguen la evidencia del recuerdo?"
      ]
    },
    "agentic-105": {
      "prompt": "Un resultado de prueba almacenado aprobado en commit A. Desde entonces, el agente ha cambiado la implementación a commit B. ¿Cómo debe tratar ese resultado?",
      "choices": [
        "Prueba histórica, no prueba de que commit B pasa",
        "Una garantía permanente para la rama",
        "Equivalente a una nueva ejecución si los nombres de archivos coinciden",
        "Una razón para omitir toda validación futura"
      ],
      "explanations": [
        "La evidencia está ligada al estado del código que la produjo.",
        "La identidad de la rama puede persistir a través del código cambiado.",
        "Los nombres de archivos sin cambios no implican un comportamiento sin cambios.",
        "El éxito anterior no valida los cambios posteriores."
      ],
      "concept": "Memoria de pruebas vinculada a la revisión",
      "hints": [
        "¿Qué revisión hizo realmente la prueba?",
        "¿Qué cambió después de que se crearon las pruebas?"
      ]
    },
    "agentic-106": {
      "prompt": "Un agente redescubre repetidamente una convención de repositorio estable. ¿Cuál es una estrategia útil de memoria a largo plazo?",
      "choices": [
        "Almacenar todos los archivos pasados literalmente",
        "Mantener la convención con pruebas de apoyo y alcance",
        "Usar la convención como una política global para todos los clientes",
        "Tratar un patrón de código accidental como una regla inmutable"
      ],
      "explanations": [
        "La acumulación literal es ruidosa y costosa.",
        "Los hechos escopados respaldados por la evidencia pueden reducir el descubrimiento repetido.",
        "Las convenciones repositorias no son políticas universales.",
        "Un patrón necesita validación antes de convertirse en una guía duradera."
      ],
      "concept": "Memoria a largo plazo respaldada por pruebas",
      "hints": [
        "¿El hecho es estable y ampliamente útil dentro de este repositorio?",
        "¿Qué evidencia podría determinar más tarde si sigue siendo cierto?"
      ]
    },
    "agentic-107": {
      "prompt": "Una tarea se cancela después de una ejecución parcial. ¿Cuál debe ser su estado duradero?",
      "choices": [
        "Éxito, para simplificar la presentación de informes",
        "Nada, porque el trabajo cancelado nunca importa.",
        "Cancelación, efectos completados, artefactos restantes y estado de recuperación",
        "Sólo el objetivo original"
      ],
      "explanations": [
        "La cancelación no es un éxito.",
        "Los efectos parciales aún pueden requerir revisión o limpieza.",
        "El estado terminal explícito evita la reanudación accidental y preserva la rendición de cuentas.",
        "Sólo la meta omite lo que realmente sucedió."
      ],
      "concept": "Estado de ejecución cancelada",
      "hints": [
        "¿Podría otro trabajador confundir la tarea con el trabajo activo?",
        "¿Qué efectos sobreviven a la cancelación?"
      ]
    },
    "agentic-108": {
      "prompt": "Un agente recupera una vieja excepción que permite una operación arriesgada. La excepción tenía una fecha de vencimiento que ha pasado. ¿Qué debería hacer?",
      "choices": [
        "Tratar cualquier excepción histórica como permanente",
        "Renovarlo actualizando su propia memoria",
        "Ignorar la expiración si la operación es conveniente",
        "Revalidar la autorización antes de utilizar la excepción"
      ],
      "explanations": [
        "La autorización histórica puede dejar de aplicarse.",
        "El agente no puede otorgar unilateralmente una nueva autoridad.",
        "La conveniencia no prevalece sobre la expiración.",
        "La autoridad expirada necesita una nueva decisión autorizada."
      ],
      "concept": "Fresqueza de las autorizaciones",
      "hints": [
        "¿Recordar permiso es lo mismo que seguir teniendo permiso?",
        "¿Qué condición limitaba la excepción original?"
      ]
    },
    "agentic-109": {
      "prompt": "Un agente de apoyo mezcla los hechos de dos incidentes simultáneos y propone el retroceso equivocado. ¿Qué diseño del estado se ocupa mejor de esto?",
      "choices": [
        "Memoria de partición por identidad de incidente y validación de referencias en la recuperación",
        "Utilizar un contexto compartido más grande para cada incidente",
        "Eliminar los identificadores de incidentes para reducir el desorden",
        "Seleccione el rollback que se mencionó más recientemente"
      ],
      "explanations": [
        "La identidad de la tarea evita la contaminación del contexto de incidentes cruzados.",
        "Un contexto mixto más grande conserva la misma ambigüedad.",
        "Eliminar los identificadores debilita el aislamiento.",
        "La actualidad no establece relevancia para este incidente."
      ],
      "concept": "Identidad de tarea en la memoria",
      "hints": [
        "¿A qué incidente pertenece cada observación?",
        "¿Qué clave debe utilizar la recuperación antes de juzgar la relevancia?"
      ]
    },
    "agentic-110": {
      "prompt": "Un checkpoint dice que una operación está pendiente, pero el servicio confirma que se completó antes de un accidente. ¿Cómo debe estar actualizado el estado del agente?",
      "choices": [
        "Repetir la operación para coincidir con el checkpoint",
        "Registrar la finalización confirmada con la procedencia y continuar desde allí",
        "Eliminar las pruebas del servicio",
        "Mantenga ambos estados sin explicar el conflicto"
      ],
      "explanations": [
        "La reproducción puede duplicar el efecto completado.",
        "El estado reconciliado debe reflejar la realidad externa verificada.",
        "La eliminación de pruebas obstruye la recuperación.",
        "Una contradicción no resuelta puede causar decisiones inseguras en el futuro."
      ],
      "concept": "Recuperación de los checkpoints obsoletos",
      "hints": [
        "¿Qué fuente puede verificar el efecto real?",
        "¿Cómo puede el estado corregido explicar por qué cambió?"
      ]
    },
    "agentic-111": {
      "prompt": "Una entrada de memoria proviene de un PR que nunca se fusionó. ¿Cuándo puede seguir siendo útil el hecho sobre el repositorio?",
      "choices": [
        "Siempre, porque una PR una vez lo contenía",
        "Nunca, independientemente de las pruebas actuales",
        "Cuando la evidencia actual de la rama respalda independientemente el hecho",
        "Sólo si su autor era un agente"
      ],
      "explanations": [
        "El contenido no fusionado puede no describir el código actual.",
        "Un hecho puede permanecer válido incluso si su original PR fue cerrado.",
        "La validación actual de las citas determina la aplicabilidad.",
        "La autoría no establece la validez de los hechos."
      ],
      "concept": "Validación de hechos de trabajo no fusionado",
      "hints": [
        "¿El código actual respalda la declaración recordada?",
        "¿Sólo el origen es suficiente para determinar la verdad actual?"
      ]
    },
    "agentic-112": {
      "prompt": "Un agente almacena \"el despliegue aprobado\" sin identificar la revisión o el entorno aprobados. ¿Cuál es el principal riesgo de continuidad?",
      "choices": [
        "El resumen es demasiado corto para leer.",
        "El agente necesariamente perderá el acceso a la red",
        "El texto almacenado no puede ser traducido",
        "La ejecución posterior podrá aplicar la aprobación a una acción diferente."
      ],
      "explanations": [
        "La longitud no es el tema central.",
        "La disponibilidad de la red no está relacionada.",
        "La traducción no es un problema de autorización.",
        "La aprobación requiere un alcance suficiente para vincularla a la operación prevista."
      ],
      "concept": "Estado de aprobación previsto",
      "hints": [
        "¿Qué fue aprobado exactamente?",
        "¿Podría un futuro trabajador interpretar las mismas palabras más ampliamente?"
      ]
    },
    "agentic-113": {
      "prompt": "Una memoria obsoleta sugiere un endpoint desactualizado. La documentación oficial actual identifica su reemplazo. ¿Qué debería hacer el agente?",
      "choices": [
        "Actualizar el contexto de la tarea de la evidencia actual verificada y calificar o invalidar la entrada obsoleta",
        "Sigue la memoria porque fue recuperada primero",
        "Llame a los dos endpoints ciegamente",
        "Mantener ambas reclamaciones como igualmente autorizadas para siempre"
      ],
      "explanations": [
        "La memoria debe ser corregida cuando la evidencia actual más fuerte la invalida.",
        "La orden de recuperación no es autoridad.",
        "Las llamadas ciegas pueden tener efectos innecesarios.",
        "La información obsoleta conocida no debe seguir siendo una alternativa incondicional."
      ],
      "concept": "Invalidación de la memoria",
      "hints": [
        "¿Qué evidencia es actual y autorizada?",
        "¿Cómo puede la recuperación futura evitar repetir el mismo error?"
      ]
    },
    "agentic-114": {
      "prompt": "Un agente necesita un gran informe histórico de prueba sólo durante el diagnóstico de fallas. ¿Qué estrategia de contexto es mejor?",
      "choices": [
        "Inyectar todo el informe en cada prospecto futuro",
        "Mantenerlo externo con la procedencia y recuperar las partes relevantes cuando sea necesario",
        "Descartar el informe en cuanto termine la ejecución",
        "Reemplaza con un veredicto de una sola palabra sin respaldo"
      ],
      "explanations": [
        "La inyección incondicional desperdicia el contexto y añade ruido.",
        "Las pruebas externas apoyan la extracción selectiva sin perder la inspección.",
        "La eliminación inmediata evita un diagnóstico posterior.",
        "Un veredicto solo pierde detalles de apoyo."
      ],
      "concept": "Memoria externa y recuperación selectiva",
      "hints": [
        "¿Necesita estar presente la evidencia o simplemente es recuperable?",
        "¿Qué detalle es relevante para la pregunta de diagnóstico actual?"
      ]
    },
    "agentic-115": {
      "prompt": "Un agente hereda una entrega escrita antes de que la rama de base cambiara sustancialmente. ¿Qué debe comprobar antes de su implementación?",
      "choices": [
        "Sólo la ortografía de la entrega",
        "Sólo la confianza del predecesor",
        "Si las suposiciones, las ubicaciones de archivos y las decisiones siguen siendo aplicables a la revisión actual",
        "Si puede reutilizar el mismo mensaje final"
      ],
      "explanations": [
        "La ortografía no establece frescura técnica.",
        "La confianza no valida el código cambiado.",
        "Una base cambiada puede invalidar las premisas de la entrega.",
        "Reutilizar la prosa no garantiza la continuidad."
      ],
      "concept": "Verificación de la frescura de las entregas",
      "hints": [
        "¿Qué ha cambiado desde que el predecesor observó el repositorio?",
        "¿Qué suposiciones dependen de ese estado del código anterior?"
      ]
    },
    "agentic-116": {
      "prompt": "Una memoria del repositorio contiene la preferencia personal de formato de un usuario. El equipo tiene una regla de estilo obligatoria que la contradice. ¿Qué debe guiar esta tarea?",
      "choices": [
        "La preferencia porque es personalizada",
        "Cualquiera que sea la entrada que se haya recuperado primero",
        "Un promedio de los dos estilos",
        "La regla del repositorio aplicable, al tiempo que califica el ámbito de aplicación de la preferencia"
      ],
      "explanations": [
        "La personalización no prevalece sobre el gobierno de tareas.",
        "La orden de recuperación no es prioridad política.",
        "Un híbrido puede violar la regla aplicada.",
        "La memoria debe interpretarse dentro de las restricciones del repositorio actual."
      ],
      "concept": "Memoria frente a restricciones de gobierno",
      "hints": [
        "¿El artículo recordado es una preferencia o un requisito?",
        "¿Qué instrucción rige los cambios aceptados aquí?"
      ]
    },
    "agentic-117": {
      "prompt": "El resumen de contexto de un agente omite por qué se rechazó un diseño aparentemente más simple. Más tarde vuelve a abrir la misma propuesta. ¿Qué deben conservar los resúmenes futuros?",
      "choices": [
        "La justificación de las decisiones y las alternativas rechazadas que sean relevantes para la tarea",
        "Cada idea no relacionada con el brainstorming",
        "Sólo el nombre del diseño elegido",
        "Solo el número de revisores"
      ],
      "explanations": [
        "La racionalidad pertinente impide que se realicen compromisos ya resueltos.",
        "Las ideas no relacionadas aumentan el ruido.",
        "Un nombre no explica restricciones o opciones rechazadas.",
        "Los recuentos de revisores no capturan el razonamiento detrás de una decisión."
      ],
      "concept": "Preservación de la justificación de la decisión",
      "hints": [
        "¿Qué podría impedir que se repita un debate resuelto?",
        "¿Qué razonamiento todavía limita la próxima elección de diseño?"
      ]
    },
    "agentic-118": {
      "prompt": "Una tarea suspendida se reanuda después de que se revocan las credenciales de su herramienta. Su checkpoint dice que el acceso estaba disponible. ¿Qué debería pasar?",
      "choices": [
        "Tratar el checkpoint como una autorización continua",
        "Reverifique el acceso actual e informe un bloqueador si no hay autorización",
        "Recupera la vieja credencial de los registros",
        "Usar la credencial de un usuario diferente sin la aprobación"
      ],
      "explanations": [
        "El acceso histórico no es una autorización actual.",
        "Los procedimientos de reanudación deben validar los requisitos previos de ejecución actuales.",
        "Los registros no deben convertirse en un canal de recuperación de credenciales.",
        "No se puede asumir otra identidad como solución."
      ],
      "concept": "Validación de la autorización de tiempo de currículum",
      "hints": [
        "¿Qué condiciones pueden cambiar mientras se detiene una tarea?",
        "¿Recoge una autoridad de subvención el progreso?"
      ]
    },
    "agentic-119": {
      "prompt": "Un agente ha completado la tarea autorizada. ¿Cuál es la mejor política de restablecimiento antes de que comience una tarea no relacionada?",
      "choices": [
        "Transporte todo el contexto de trabajo hacia adelante sin cambios",
        "Eliminar las pruebas de auditoría requeridas",
        "Restablecer el estado de trabajo local de la tarea mientras se conservan los registros duraderos autorizados",
        "Promover suposiciones temporales en la política global"
      ],
      "explanations": [
        "El transporte no relacionado corre el riesgo de contaminación.",
        "La retención de auditorías y el restablecimiento del contexto de trabajo son preocupaciones diferentes.",
        "El restablecimiento del estado de trabajo evita la deriva sin destruir la rendición de cuentas.",
        "Las suposiciones temporales no son una gobernanza duradera."
      ],
      "concept": "restablecimiento de tareas frente a retención de auditorías",
      "hints": [
        "¿Qué información debería influir en la siguiente tarea?",
        "¿Qué información debe permanecer disponible sólo como evidencia histórica?"
      ]
    },
    "agentic-120": {
      "prompt": "Un agente arregla un defecto de facturación. ¿Qué evaluación mide mejor el éxito?",
      "choices": [
        "Tamaño del patch",
        "Modelo de confianza",
        "Velocidad de ejecución sola",
        "Casos correctos de facturación más controles de regresión, seguridad y alcance"
      ],
      "explanations": [
        "La longitud no es corrección.",
        "La confianza no es evidencia independiente.",
        "La velocidad puede mejorar mientras el comportamiento regresa.",
        "El comportamiento de las tareas y las limitaciones operativas definen conjuntamente el éxito."
      ],
      "concept": "Criterios de éxito multidimensionales",
      "hints": [
        "¿Qué defecto visible para el usuario debe resolverse?",
        "¿Cuáles son las restricciones que siguen siendo obligatorias durante la reparación?"
      ]
    },
    "agentic-121": {
      "prompt": "Una implementación correcta falla porque el runner no tiene compilador. ¿Qué categoría de fallas primarias encaja?",
      "choices": [
        "Fallo del entorno",
        "Fallo de razonamiento",
        "Mutación de herramienta no autorizada",
        "Criterios de aceptación incorrectos"
      ],
      "explanations": [
        "Un requisito previo de tiempo de ejecución faltante impide la ejecución.",
        "Las pruebas no establecen un razonamiento de ejecución defectuoso.",
        "No se describe ninguna mutación no autorizada.",
        "El requisito de compilador no invalida los criterios de la tarea."
      ],
      "concept": "Clasificación de fallas ambientales",
      "hints": [
        "¿En qué capa se detuvo la ejecución?",
        "¿Cambiaría la lógica de implementación el requisito previo faltante?"
      ]
    },
    "agentic-122": {
      "prompt": "Un agente selecciona una herramienta de eliminación en lugar de una herramienta de lectura, a pesar de las instrucciones claras de tarea y las credenciales válidas. ¿Cuál es el fracaso principal?",
      "choices": [
        "Interrupción de la red",
        "Uso indebido de las herramientas",
        "Capacidad insuficiente en el contexto",
        "Una prueba escamosa"
      ],
      "explanations": [
        "No se indica ninguna falla de red.",
        "La operación seleccionada contradice la acción requerida.",
        "La tarea era clara; la capacidad del contexto no se establece como la causa.",
        "No se describe la inestabilidad del prueba."
      ],
      "concept": "Clasificación del mal uso de las herramientas",
      "hints": [
        "¿Fue representada correctamente la operación prevista?",
        "¿Qué acción de herramienta ocurrió realmente?"
      ]
    },
    "agentic-123": {
      "prompt": "Todas las herramientas se ejecutaron como se solicitó, pero un agente eligió la fórmula equivocada para una regla comercial claramente especificada. ¿Cómo debe clasificarse la causa principal?",
      "choices": [
        "Conectividad de las herramientas",
        "Vencimiento de las credenciales",
        "Error de razonamiento o de aplicación de los requisitos",
        "Fallo de retención del artefacto"
      ],
      "explanations": [
        "Las herramientas estaban conectadas y operativas.",
        "No se describe ningún fallo de credenciales.",
        "El agente aplicó mal los requisitos conocidos mientras planeaba la solución.",
        "La retención de pruebas no causó la fórmula equivocada."
      ],
      "concept": "Clasificación de fallas de razonamiento",
      "hints": [
        "¿Fue el resultado equivocado causado por la ejecución o por el método elegido?",
        "¿Qué sabía el agente cuando eligió la fórmula?"
      ]
    },
    "agentic-124": {
      "prompt": "Un agente modifica un módulo obsoleto porque la recuperación proporcionó un mapa de arquitectura obsoleto. ¿Qué causa raíz debe investigarse primero?",
      "choices": [
        "La saturación de CPU",
        "Un formato incorrecto",
        "Un falso positivo de escaneo secreto",
        "Contexto obsoleto proporcionado al agente"
      ],
      "explanations": [
        "No hay pruebas de capacidad.",
        "El formato no seleccionó el módulo obsoleto.",
        "No se trata de un evento de escaneo.",
        "El mapa recuperado mal representaba la arquitectura actual."
      ],
      "concept": "Clasificación de fallos de contexto",
      "hints": [
        "¿Qué entrada dirigió al agente al lugar equivocado?",
        "¿Esta entrada era válida para la revisión actual?"
      ]
    },
    "agentic-125": {
      "prompt": "Un equipo cambia las instrucciones del agente y quiere medir la mejora. ¿Qué comparación es más creíble?",
      "choices": [
        "Evaluar ambas versiones con el mismo conjunto representativo reservado para evaluación y la misma rúbrica",
        "Compare diferentes tareas seleccionadas por cada versión",
        "Cuenta frases positivas en las respuestas finales",
        "Pregunte al agente actualizado si ha mejorado"
      ],
      "explanations": [
        "Las tareas y criterios comparables apoyan una evaluación atribuible.",
        "Diferentes dificultades de tarea confunden la comparación.",
        "El lenguaje positivo no es la calidad de la tarea.",
        "La autoevaluación no es una validación independiente."
      ],
      "concept": "Evaluación controlada",
      "hints": [
        "¿Qué variables deben permanecer estables?",
        "¿Qué evidencia distingue la mejora de las tareas más fáciles?"
      ]
    },
    "agentic-126": {
      "prompt": "La tasa de aprobación de un agente aumenta después de que los mantenedores eliminen los casos difíciles del conjunto de evaluación. ¿Cuál es la principal preocupación?",
      "choices": [
        "El modelo ahora debe ser más confiable",
        "La métrica puede reflejar una cobertura reducida en lugar de un comportamiento mejorado",
        "Los conjuntos de evaluación deben contener sólo casos fáciles",
        "Menos casos garantizan pruebas estadísticas más sólidas"
      ],
      "explanations": [
        "La comparación ya no aisla el comportamiento del modelo.",
        "Cambiar la dificultad del caso puede crear una mejora engañosa.",
        "Los casos representativos difíciles exponen importantes modos de falla.",
        "Las muestras más pequeñas no refuerzan las pruebas."
      ],
      "concept": "Prejuicio de la cobertura de la evaluación",
      "hints": [
        "¿Cambió el sistema o cambió la medición?",
        "¿Qué riesgos del mundo real desaparecieron del conjunto de pruebas?"
      ]
    },
    "agentic-127": {
      "prompt": "Un parche generado pasa las pruebas de unidad pero introduce una dependencia vulnerable. ¿Qué señal faltante expondría esto más directamente?",
      "choices": [
        "Una partitura de prosa",
        "Un recuento de archivos editados",
        "Análisis de seguridad de la dependencia",
        "La confianza estimada del agente"
      ],
      "explanations": [
        "La longitud de la prosa no puede evaluar las vulnerabilidades del paquete.",
        "Los recuentos de archivos no evalúan el riesgo de dependencia.",
        "El análisis de dependencia apunta a la exposición a la vulnerabilidad conocida.",
        "La confianza no puede reemplazar la evidencia de seguridad automatizada."
      ],
      "concept": "señales automatizadas de evaluación de la seguridad",
      "hints": [
        "¿Qué riesgo existe fuera del comportamiento ejercido por las pruebas unitarias?",
        "¿Qué tipo de análisis inspecciona el conjunto de dependencias cambiado?"
      ]
    },
    "agentic-128": {
      "prompt": "Un escáner señala un cambio generado. El agente dice que la advertencia es probablemente inofensiva. ¿Qué debería pasar después?",
      "choices": [
        "Eliminar el hallazgo automáticamente",
        "Aceptar la confianza del agente como una renuncia",
        "Eliminar el paso de escaneo",
        "Investigar el hallazgo contra el código y la política, documentando una disposición autorizada"
      ],
      "explanations": [
        "La supresión no revisada oculta un posible defecto.",
        "Un modelo no puede conceder su propia excepción de seguridad.",
        "Eliminar la señal evita el riesgo en lugar de resolverlo.",
        "El triaje basado en la evidencia determinará si es apropiada una reparación o una excepción aprobada."
      ],
      "concept": "Clasificación de hallazgos del análisis",
      "hints": [
        "¿Qué evidencia apoyaría llamar esto falso positivo?",
        "¿Quién puede autorizar una excepción?"
      ]
    },
    "agentic-129": {
      "prompt": "Los fracasos de los agentes se agrupan en torno a las limitaciones de tareas faltantes. ¿Qué cambio de ajuste se dirige mejor a la causa?",
      "choices": [
        "Añadir restricciones explícitas y criterios de aceptación a las entradas de tareas",
        "Aumenta el número de intentos de repetición para todas las herramientas",
        "Conceder acceso de escritura más amplio",
        "Utilice resúmenes finales más largos"
      ],
      "explanations": [
        "Las entradas de tareas mejoradas abordan la información que falta.",
        "Los retros no proporcionan los requisitos que faltan.",
        "Los permisos más amplios no aclaran la intención.",
        "La verbosidad final no mejora la base de la tarea inicial."
      ],
      "concept": "ajuste de instrucciones dirigidas a la causa",
      "hints": [
        "¿Qué información faltaba antes de la decisión?",
        "¿Qué cambio aborda directamente esa ausencia?"
      ]
    },
    "agentic-130": {
      "prompt": "Un agente llama repetidamente a herramientas irrelevantes. Las huellas muestran un gran catálogo de herramientas superpuestas. ¿Cuál ajuste es más dirigida?",
      "choices": [
        "Añadir más herramientas para que uno eventualmente encaje",
        "Reducir la exposición a las herramientas y aclarar las descripciones de las capacidades",
        "Eliminar todos los registros",
        "Aumentar el número permitido de llamadas sin cambiar la selección"
      ],
      "explanations": [
        "Más superposición puede empeorar la selección.",
        "Los límites de capacidad más claros y más pequeños apuntan a la confusión de las herramientas.",
        "Eliminar los registros destruye la evidencia de diagnóstico.",
        "Un presupuesto más grande no corrige el comportamiento de selección."
      ],
      "concept": "ajuste por selección de herramientas",
      "hints": [
        "¿Qué hizo que las acciones disponibles fueran difíciles de distinguir?",
        "¿Puede el diseño de capacidades reducir la posibilidad de elegir la operación equivocada?"
      ]
    },
    "agentic-131": {
      "prompt": "Un equipo mide la latencia del agente solo en ejecuciones exitosas y excluye las que agotan el tiempo de espera. ¿Qué problema genera?",
      "choices": [
        "Prueba que el agente cumple con todos los plazos.",
        "Mide directamente la recuperación de los fallos",
        "Esconde fallas lentas y exagera el rendimiento operativo",
        "Hace que la tasa de éxito sea innecesaria."
      ],
      "explanations": [
        "Las tiempos de espera agotados excluidas pueden violar los plazos.",
        "No hay tiempo de recuperación en la muestra.",
        "La latencia de solo éxito ignora una clase importante de experiencia del usuario.",
        "La fiabilidad y la latencia siguen siendo señales distintas."
      ],
      "concept": "Completidad de las métricas operativas",
      "hints": [
        "¿Qué usuarios están excluidos de la medición?",
        "¿Qué pasó con las ejecuciones más largas?"
      ]
    },
    "agentic-132": {
      "prompt": "Una suite de pruebas generada copia la suposición incorrecta de la implementación y pasa. ¿Cuál es la mejor evaluación?",
      "choices": [
        "Generar más pruebas de la misma suposición",
        "Confía en la conclusión compartida porque dos artefactos coinciden",
        "Usar un formato diferente para los pruebas",
        "Derivar los resultados esperados de forma independiente a partir de los requisitos y los casos límite"
      ],
      "explanations": [
        "Los exámenes adicionales pueden repetir el mismo punto ciego.",
        "Los errores correlacionados no son una confirmación independiente.",
        "El formato no puede corregir el oráculo.",
        "El comportamiento esperado independiente reduce el sesgo de implementación compartida de las pruebas."
      ],
      "concept": "oráculos de prueba independientes",
      "hints": [
        "¿De dónde provienen los valores esperados?",
        "¿Pueden el prueba y la aplicación coincidir mientras ambos violan el requisito?"
      ]
    },
    "agentic-133": {
      "prompt": "Un equipo quiere pruebas cualitativas de que el plan de un agente es mantenible. ¿Cuál de las evaluaciones encaja?",
      "choices": [
        "Una revisión sobre la base de las rúbricas por parte de los encargados de mantenimiento pertinentes",
        "Sólo transcurridos milisegundos",
        "Únicamente el número de llamadas a herramientas",
        "Sólo un resultado de compilación"
      ],
      "explanations": [
        "Los mantenedores pueden evaluar las compensaciones con criterios arquitectónicos explícitos.",
        "La latencia no mide el mantenimiento.",
        "El número de llamadas no es la calidad del diseño.",
        "La recopilación no evalúa la claridad del diseño a largo plazo."
      ],
      "concept": "Rótulos de evaluación cualitativa",
      "hints": [
        "¿Qué aspectos requieren juicio de ingeniería?",
        "¿Cómo se puede hacer coherente ese juicio entre los revisores?"
      ]
    },
    "agentic-134": {
      "prompt": "Un flujo de trabajo revisado mejora la corrección, pero duplica el costo y excede el límite de latencia de la tarea. ¿Cómo debe evaluarse?",
      "choices": [
        "Éxito porque la corrección es el único criterio posible",
        "Contra la corrección y las limitaciones operativas declaradas en conjunto",
        "Éxito si la respuesta final es más corta",
        "No concluye porque el coste no puede medirse"
      ],
      "explanations": [
        "La tarea incluye explícitamente límites operativos.",
        "Las ganancias de calidad no eliminan las restricciones de costes o latencia requeridas.",
        "La duración de la respuesta no establece el cumplimiento.",
        "Las señales de uso y ejecución pueden apoyar la evaluación de costes."
      ],
      "concept": "Compromiso entre calidad y costes y latencia",
      "hints": [
        "¿Qué limitaciones formaban parte del éxito antes de sintonizar?",
        "¿La mejora de una dimensión es una excusa para violar otra?"
      ]
    },
    "agentic-135": {
      "prompt": "Una investigación de falla tiene un mensaje de error final, pero no hay un plan, argumentos de herramientas o revisión. ¿Qué debería mejorarse para el análisis futuro?",
      "choices": [
        "Recoger sólo más mensajes de error finales",
        "Eliminar sellos de tiempo para simplificar los registros",
        "Registrar planes correlacionados, eventos de herramientas sin datos sensibles, revisiones y resultados",
        "Registrar secrets para reproducir la autenticación exactamente"
      ],
      "explanations": [
        "El síntoma final por sí solo rara vez explica el camino causal.",
        "Los sellos de tiempo ayudan a reconstruir el orden.",
        "La evidencia correlacionada distingue entre el razonamiento, las herramientas y los fracasos ambientales.",
        "Los secretos no deben ser recogidos como datos de diagnóstico."
      ],
      "concept": "Observabilidad diagnóstica",
      "hints": [
        "¿Puede un investigador reconstruir la secuencia antes del error?",
        "¿Qué evidencia distingue causas plausibles sin exponer las credenciales?"
      ]
    },
    "agentic-136": {
      "prompt": "Un agente corrige una verificación defectuosa debilitando sus afirmaciones, sin cambiar la implementación defectuosa. ¿Qué debe concluir la evaluación?",
      "choices": [
        "El cheque verde demuestra que el defecto está arreglado",
        "Reducir las afirmaciones es siempre una optimización aceptable",
        "El agente mejoró la fiabilidad porque las fallas disminuyeron",
        "La señal se debilitó; verificar el comportamiento con criterios de aceptación independientes"
      ],
      "explanations": [
        "Un cheque más débil puede ocultar el defecto original.",
        "Los cambios de afirmación necesitan justificación contra el comportamiento previsto.",
        "Menos fallas detectadas pueden significar menos detección.",
        "La evaluación debe proteger al oráculo, no sólo optimizar su estado informado."
      ],
      "concept": "Prevención de juegos métricos",
      "hints": [
        "¿El comportamiento mejoró o la detección se debilitó?",
        "¿Qué pruebas existen fuera del cheque modificado?"
      ]
    },
    "agentic-137": {
      "prompt": "Un cambio de instrucción propuesto tiene como objetivo un fallo de producción. ¿Qué debería acompañar su prueba de regresión?",
      "choices": [
        "Pruebas de comportamiento existente representativo para detectar regresiones colaterales",
        "Eliminación de todos los casos de evaluación no relacionados",
        "Despliegue inmediato sin restricciones",
        "Una promesa de que el cambio está estrictamente redactado"
      ],
      "explanations": [
        "Una solución dirigida aún puede degradar otro comportamiento.",
        "Eliminar la cobertura oculta regresiones.",
        "El despliegue debe seguir la evidencia en lugar de reemplazarla.",
        "La palabra sola no establece el aislamiento conductual."
      ],
      "concept": "Evaluación de la regresión después del ajuste",
      "hints": [
        "¿Podría una instrucción más específica alterar otras decisiones?",
        "¿Qué evidencia muestra que las capacidades existentes siguen intactas?"
      ]
    },
    "agentic-138": {
      "prompt": "Un agente sólo falla cuando los documentos recuperados exceden el presupuesto contextual y se eliminan los criterios de aceptación. ¿Qué ajuste aborda mejor la causa?",
      "choices": [
        "Aumentar los permisos de mutación",
        "Priorizar las restricciones de tareas y obtener evidencia enfocada",
        "Intentar de nuevo el mismo pedido de tamaño excesivo indefinidamente",
        "Eliminar los criterios de aceptación para ahorrar espacio"
      ],
      "explanations": [
        "Los permisos no restauran los requisitos perdidos.",
        "La prioridad del contexto preserva la intención esencial al tiempo que reduce el ruido.",
        "El desbordamiento repetido preserva el mecanismo de falla.",
        "Eliminar los criterios institucionaliza el error."
      ],
      "concept": "ajuste de contexto y presupuesto",
      "hints": [
        "¿Qué información debe permanecer disponible para cada decisión?",
        "¿Se puede restringir la extracción sin perder pruebas pertinentes?"
      ]
    },
    "agentic-139": {
      "prompt": "Una evaluación pasa una vez, pero falla en repetidas ejecuciones equivalentes. ¿Qué debe medir el equipo antes de declarar confiabilidad?",
      "choices": [
        "Sólo la mejor ejecución.",
        "Sólo la respuesta más corta",
        "Variabilidad del resultado y frecuencia de fallas en repeticiones representativas",
        "Si el agente puede explicar su primer éxito"
      ],
      "explanations": [
        "La selección del mejor caso oculta la inestabilidad.",
        "La brevedad no es fiabilidad.",
        "Los resultados repetidos revelan un riesgo de fracaso no determinista.",
        "Explicar un éxito no cuantifica la repetibilidad."
      ],
      "concept": "Repetibilidad de la evaluación",
      "hints": [
        "¿Qué experimentaría un usuario con muchas ejecuciones?",
        "¿Una muestra exitosa caracteriza toda la distribución?"
      ]
    },
    "agentic-140": {
      "prompt": "Un agente es evaluado en un repositorio contra el que se sintonizó ampliamente. Las calificaciones son excelentes. ¿Qué evaluación adicional se necesita?",
      "choices": [
        "Más repeticiones de ejemplos memorizados",
        "Un recuento de palabras del archivo de instrucciones",
        "Las mismas tareas con variables renombradas solamente",
        "tareas o repositorios no vistos representativos dentro del alcance previsto"
      ],
      "explanations": [
        "Los casos memorizados no pueden establecer una generalización.",
        "La duración de la instrucción no es de validez externa.",
        "Los cambios cosméticos pueden mantener la misma solución aprendida.",
        "Las pruebas de trabajo representativas realizadas se transfieren más allá del conjunto de ajuste."
      ],
      "concept": "Generalización y sobreajuste",
      "hints": [
        "¿Podría el sistema estar explotando la familiaridad?",
        "¿De dónde debería provenir la evidencia para la transferencia de pruebas?"
      ]
    },
    "agentic-141": {
      "prompt": "Una ejecución primero recupera la configuración incorrecta, luego llama a la herramienta correcta con ese valor, luego falla. ¿Cómo debe proceder el análisis?",
      "choices": [
        "Rastrear la divergencia causal más temprana, no sólo el error final",
        "Clasificar cada falla como una interrupción de la herramienta",
        "Cambiar la última llamada de la herramienta sin inspeccionar las entradas",
        "Ignorar la recuperación porque el esquema de llamada era válido"
      ],
      "explanations": [
        "La incorrecta entrada ascendente puede explicar el síntoma descendente.",
        "Las pruebas no establecen una interrupción.",
        "Los cambios locales pueden dejar intacta la falla causal.",
        "La validez del esquema no establece la corrección semántica."
      ],
      "concept": "rastreo de fallas causales",
      "hints": [
        "¿Cuándo la ejecución se desvió por primera vez de la tarea prevista?",
        "¿Fue el fracaso final una causa o una consecuencia?"
      ]
    },
    "agentic-142": {
      "prompt": "Un equipo cambia instrucciones, herramientas, política de memoria y modelo simultáneamente. La puntuación mejora. ¿Qué limitación debe reportarse?",
      "choices": [
        "Cada cambio individual resulta beneficioso",
        "El resultado combinado no aisla el cambio que causó la mejora",
        "Ninguna evaluación puede ser útil.",
        "El cambio de modelo debe ser la causa"
      ],
      "explanations": [
        "Las contribuciones individuales son confusas.",
        "Muchos cambios simultáneos limitan la atribución causal.",
        "El resultado combinado todavía puede ser informativo.",
        "La evidencia no aisla al modelo."
      ],
      "concept": "atribución de los experimentos de ajuste",
      "hints": [
        "¿Qué variables cambiaron juntas?",
        "¿Puede el resultado identificar un mecanismo responsable?"
      ]
    },
    "agentic-143": {
      "prompt": "La tasa de éxito agregada de un agente es alta, pero todas las tareas sensibles a la autorización fracasan. ¿Cuál es el cambio de información más útil?",
      "choices": [
        "Ocultar la pequeña categoría para simplificar la presentación de informes",
        "Reporte sólo el promedio general",
        "Resultados de segmentos por tipo de tarea y riesgo",
        "Reemplazar la tasa de éxito con tokens de salida totales"
      ],
      "explanations": [
        "Las pequeñas categorías de alto riesgo pueden ser operacionalmente críticas.",
        "Una máscara general media concentra las debilidades.",
        "La segmentación expone los fallos relevantes para las decisiones de despliegue.",
        "El volumen de tokens no mide el éxito autorizado."
      ],
      "concept": "Evaluación estratificada por riesgo",
      "hints": [
        "¿Puede un promedio fuerte ocultar un subgrupo peligroso?",
        "¿Qué fallas son más importantes para el despliegue previsto?"
      ]
    },
    "agentic-144": {
      "prompt": "Un tiempo fuera es causado por un servicio externo lento, no un razonamiento lento. ¿Cuál ajuste es la más dirigida?",
      "choices": [
        "Reescribir todos los requisitos del negocio",
        "Aumentar el número de agentes de planificación",
        "Eliminar toda observabilidad",
        "Ajustar los tiempos de espera y los reintentos limitados según la evidencia del servicio"
      ],
      "explanations": [
        "Los requisitos no reparan la latencia del servicio observada.",
        "Más planificación puede añadir gastos generales sin abordar el cuello de botella.",
        "La eliminación de pruebas impide el diagnóstico.",
        "El ajuste de la política de ejecución aborda el retraso externo medido."
      ],
      "concept": "ajuste orientada al entorno",
      "hints": [
        "¿Dónde se pasa el tiempo transcurrido?",
        "¿Qué configuración controla la recuperación en esa capa?"
      ]
    },
    "agentic-145": {
      "prompt": "La respuesta final de un agente afirma que ejecutó un escáner, pero no existe ningún evento de ejecución o informe. ¿Qué debe concluir el evaluador?",
      "choices": [
        "La alegación no está respaldada y faltan pruebas requeridas.",
        "El escáner debe haber funcionado de forma invisible.",
        "La redacción fluida demuestra la realización",
        "El reclamo sustituye un artefacto"
      ],
      "explanations": [
        "Las reclamaciones de finalización requieren pruebas vinculadas a la ejecución.",
        "No se puede suponer una ejecución invisible.",
        "La fluidez no es el origen de la herramienta.",
        "Una declaración no sustituye al informe requerido."
      ],
      "concept": "Verificación de las reclamaciones de ejecución",
      "hints": [
        "¿Qué demuestra de forma independiente que la acción ocurrió?",
        "¿Se podría escribir la misma respuesta sin ejecutar la herramienta?"
      ]
    },
    "agentic-146": {
      "prompt": "Un plan sigue el problema pero viola la restricción explícita de no nuevas dependencias de un repositorio. ¿Cómo debería marcar?",
      "choices": [
        "Completamente exitoso si la función funciona",
        "Una falla de restricción incluso si el resultado funcional es correcto",
        "Éxito si la dependencia es popular",
        "Es un éxito si el agente se disculpa después"
      ],
      "explanations": [
        "El éxito incluye las restricciones operativas aplicables.",
        "La funcionalidad correcta no borra un límite de tarea violado.",
        "La popularidad no prevalece sobre la política.",
        "Una disculpa no establece el cumplimiento."
      ],
      "concept": "Evaluación consciente de las limitaciones",
      "hints": [
        "¿Qué requisitos eran conjuntos en lugar de opcionales?",
        "¿Puede la corrección funcional coexistir con una ejecución inaceptable?"
      ]
    },
    "agentic-147": {
      "prompt": "Un equipo quiere detectar si un agente se detiene cuando un resultado de la herramienta intenta anular las instrucciones. ¿Cuál es el caso de prueba más adecuado?",
      "choices": [
        "Sólo una construcción normal y exitosa",
        "Una prueba de ortografía en el resumen final",
        "Una respuesta controlada de herramientas adversarias con comportamiento límite esperado explícito",
        "Un ataque de producción sin la aprobación del propietario"
      ],
      "explanations": [
        "Un camino feliz no ejerce el límite de la confianza.",
        "La ortografía no mide la resistencia a la instrucción.",
        "Un caso controlado prueba directamente el comportamiento de seguridad requerido.",
        "Los ataques de producción no aprobados no son un método de evaluación adecuado."
      ],
      "concept": "Evaluación de los límites adversarios",
      "hints": [
        "¿Qué modo de falla debe ejercer el caso?",
        "¿Cómo puede probarse sin exponer sistemas reales?"
      ]
    },
    "agentic-148": {
      "prompt": "Una tabla de control de fallas agrupa todas las ejecuciones fallidas como 'error de IA'. ¿Qué mejora ayuda más a la reparación?",
      "choices": [
        "Renombrar la etiqueta a \"comportamiento inesperado\"",
        "Eliminar las fallas de los informes",
        "Reporte sólo el número de retas",
        "Clasificar las causas utilizando planes, huellas de herramientas, evidencia de contexto y entorno"
      ],
      "explanations": [
        "Una nueva etiqueta genérica no identifica las causas.",
        "Excluir los fracasos impide aprender.",
        "Los recuentos de retrasos no explican por qué ocurrieron fallas.",
        "Las categorías de causas apoyan cambios dirigidos en lugar de ajustes no dirigidos."
      ],
      "concept": "Taxonomía de fallas de acción",
      "hints": [
        "¿Podrían repararse todos los fallos con el mismo cambio?",
        "¿Qué evidencia distingue a las categorías con diferentes remedios?"
      ]
    },
    "agentic-149": {
      "prompt": "Un agente actualizado es más rápido porque omite las entregas de revisión requeridas. ¿Cómo debe interpretar el equipo la ganancia de latencia?",
      "choices": [
        "Como comportamiento no conforme, no una optimización aceptable",
        "Como prueba la puerta de revisión era innecesaria",
        "Como una razón automática para expandir la autonomía",
        "Como prueba de que todas las métricas de calidad mejoraron"
      ],
      "explanations": [
        "El rendimiento debe medirse dentro de las limitaciones de gobernanza requeridas.",
        "El omitir un control no demuestra que carezca de valor.",
        "El incumplimiento no justifica una mayor autoridad.",
        "La latencia por sí sola no demuestra la calidad."
      ],
      "concept": "Evaluación dentro de las limitaciones de gobernanza",
      "hints": [
        "¿Se siguieron las mismas reglas en ambas mediciones?",
        "¿Qué omitió el agente para obtener la ganancia?"
      ]
    },
    "agentic-150": {
      "prompt": "Un evaluador califica la prosa final como correcta aunque el agente modificó el repositorio equivocado. ¿Qué debería añadir la rúbrica?",
      "choices": [
        "Más énfasis en la gramática",
        "Objetivo de ejecución y verificación del alcance autorizado",
        "Una duración mínima de la respuesta",
        "Una recompensa por el lenguaje de finalización confiado"
      ],
      "explanations": [
        "La gramática no valida el objetivo de la mutación.",
        "El éxito de la tarea incluye actuar con el recurso autorizado correcto.",
        "La longitud puede aumentar sin fijar el alcance.",
        "La confianza puede ocultar una ejecución incorrecta."
      ],
      "concept": "Evaluación de la corrección de la acción",
      "hints": [
        "¿Es el entregable sólo un mensaje?",
        "¿Dónde ocurrió el efecto real?"
      ]
    },
    "agentic-151": {
      "prompt": "Un cambio de ajuste reduce la recuperación innecesaria de memoria pero elimina accidentalmente las restricciones aprobadas. ¿Qué debería hacer el equipo?",
      "choices": [
        "Aceptar porque se usaron menos tokens",
        "Eliminar todas las fuentes de memoria",
        "Preservar las restricciones esenciales y reevaluar la política revisada de recuperación de información",
        "Aumentar los permisos de las herramientas para compensar"
      ],
      "explanations": [
        "El ahorro de tokens no justifica la pérdida del contexto requerido.",
        "La eliminación de la manta sacrifica la continuidad útil.",
        "La extracción selectiva debe conservar la información crítica a la decisión.",
        "Los permisos no pueden reemplazar las restricciones que faltan."
      ],
      "concept": "Evaluación del ajuste de la memoria",
      "hints": [
        "¿Cuál de los contenidos recuperados era ruido y cuál era obligatorio?",
        "¿Qué caso de regresión revelaría la pérdida?"
      ]
    },
    "agentic-152": {
      "prompt": "El fallo de un agente se reproduce sólo con una versión de imagen runner. ¿Qué debería registrar la investigación?",
      "choices": [
        "Sólo la última producción exitosa",
        "Sólo la personalidad del agente.",
        "Sólo el título del número",
        "La imagen runner, dependencias, revisión, entradas y pruebas fallidas"
      ],
      "explanations": [
        "Una salida exitosa no preserva las condiciones fallidas.",
        "Sólo el prompt omite la dependencia del entorno.",
        "Un título de la cuestión es un contexto de reproducción insuficiente.",
        "El entorno y la procedencia de la ejecución permiten una reproducción dirigida."
      ],
      "concept": "Análisis de errores reproducibles",
      "hints": [
        "¿Qué condiciones distinguen las ejecuciones fallidas de las exitosas?",
        "¿Qué necesitaría otro ingeniero para reproducir el resultado?"
      ]
    },
    "agentic-153": {
      "prompt": "Un equipo evalúa a un agente de triaje de problemas. Etiqueta los temas con precisión pero envía detalles confidenciales a una herramienta no autorizada. ¿Cuál es el resultado?",
      "choices": [
        "Incumplimiento de la restricción de seguridad a pesar de las etiquetas precisas",
        "El éxito completo porque las etiquetas son correctas",
        "Éxito si la divulgación reduce la latencia",
        "Un resultado inconmensurable"
      ],
      "explanations": [
        "Se requiere la corrección y el manejo autorizado de los datos.",
        "Las etiquetas no justifican la divulgación no autorizada.",
        "La eficiencia no supera la confidencialidad.",
        "Las huellas de la herramienta pueden establecer el evento de divulgación."
      ],
      "concept": "la seguridad como una restricción para el éxito",
      "hints": [
        "¿Qué requisitos determinan cómo se produce el resultado?",
        "¿Puede obtenerse una respuesta correcta a través de un camino inaceptable?"
      ]
    },
    "agentic-154": {
      "prompt": "Un equipo quiere desplegar un agente sintonizado después de que las pruebas fuera de línea mejoren. ¿Cuál es el siguiente paso que reduce mejor el riesgo de despliegue?",
      "choices": [
        "Habilitar inmediatamente todas las herramientas de mutación en todas partes",
        "Utilice un despliegue restringido con criterios de seguimiento y retroceso",
        "Eliminar la versión anterior antes de observar el comportamiento en vivo",
        "Deshabilitar la notificación de fallas para reducir el ruido"
      ],
      "explanations": [
        "La activación amplia excede la evidencia de las pruebas fuera de línea.",
        "Un despliegue limitado prueba las condiciones reales manteniendo la recuperación.",
        "Eliminar la versión anterior puede eliminar una caída segura.",
        "La notificación de fallas es esencial durante el despliegue."
      ],
      "concept": "Desarrollo de ajustes basados en la evidencia",
      "hints": [
        "¿Cuál podría ser la diferencia entre los casos fuera de línea y el tráfico en vivo?",
        "¿Cómo puede la exposición seguir siendo reversible mientras se recoge la evidencia?"
      ]
    },
    "agentic-155": {
      "prompt": "Un agente juez marca los resultados de otro agente. ¿Qué debería hacer el equipo antes de confiar en sus calificaciones?",
      "choices": [
        "Supongamos que los agentes siempre están de acuerdo con los expertos",
        "Utilice la confianza del juez como verdad fundamental.",
        "Calibre la rúbrica con ejemplos revisados de forma independiente y compruebe los desacuerdos",
        "Eliminar ejemplos de referencia humanos para evitar comparaciones"
      ],
      "explanations": [
        "El acuerdo de expertos debe medirse.",
        "La confianza no es la verdad.",
        "La calibración expone errores sistemáticos de puntuación y ambigüedad.",
        "Los ejemplos de referencia apoyan en lugar de socavar la validación."
      ],
      "concept": "Calibración del evaluador",
      "hints": [
        "¿Cómo sabrás si el juez mide la calidad deseada?",
        "¿Qué desacuerdos se deben examinar en lugar de averiguar?"
      ]
    },
    "agentic-156": {
      "prompt": "Un agente vuelve a intentar una mala petición determinista cinco veces. ¿Qué ajuste mejor atende al comportamiento observado?",
      "choices": [
        "Aumentar el límite de nuevo intento",
        "Bajar todos los umbrales de prueba",
        "Cambiar los repositorios en caso de fallas",
        "Clasificar los errores y volver a intentarlo solo cuando el fallo sea transitorio"
      ],
      "explanations": [
        "Más intentos repiten la misma entrada inválida.",
        "Los umbrales de prueba no están relacionados con la solicitud de validez.",
        "Un repositorio diferente no fija el contrato de solicitud.",
        "La política de retoma con conocimiento de errores tiene como objetivo el mecanismo de fallo real."
      ],
      "concept": "Evaluación de la política de retraso",
      "hints": [
        "¿Podría el tiempo hacer válida esta petición?",
        "¿Qué fallas necesitan cambios de entradas en lugar de repetidos intentos?"
      ]
    },
    "agentic-157": {
      "prompt": "Un agente parece retrasarse, pero en realidad está esperando la aprobación requerida. ¿Qué debe distinguir la evaluación?",
      "choices": [
        "Tiempo de ejecución activo, tiempo de aprobación bloqueado, y verdadera falta de progreso",
        "Solo el tiempo total del reloj de pared",
        "Sólo el número de mensajes finales",
        "Solo el tiempo de inferencia del modelo"
      ],
      "explanations": [
        "Los estados separados apoyan un diagnóstico justo y cambios específicos en los procesos.",
        "La duración total por sí sola confunde diferentes causas.",
        "Los recuentos de mensajes no identifican las condiciones de espera.",
        "La inferencia excluye los retrasos en la aprobación de las herramientas."
      ],
      "concept": "métricas operativas de conocimiento del estado",
      "hints": [
        "¿El agente puede proceder ahora mismo?",
        "¿Qué parte del tiempo transcurrido puede afectar realmente el ajuste del modelo?"
      ]
    },
    "agentic-158": {
      "prompt": "Un análisis posterior al incidente identifica una corrección del prompt, una restricción de herramientas y un nuevo caso de regresión. ¿Qué completa el ciclo de aprendizaje?",
      "choices": [
        "Archivar las recomendaciones sin aplicarlas",
        "Implementación de los cambios y verificación de los resultados frente a las fallas y a un conjunto más amplio",
        "Eliminar inmediatamente los rastros del incidente",
        "Declarar el fracaso imposible después de actualizar la prosa"
      ],
      "explanations": [
        "Las recomendaciones por sí solas no cambian el comportamiento.",
        "La corrección verificada conecta el análisis con la mejora demostrada.",
        "Puede que se necesiten rastros para la validación y la auditoría.",
        "Una actualización de instrucciones no es prueba de que el fallo no pueda repetirse."
      ],
      "concept": "Cerrar el ciclo de ajuste de evaluación",
      "hints": [
        "¿Qué evidencia demuestra que la reparación funcionó?",
        "¿Cómo detectará el equipo las regresiones involuntarias?"
      ]
    },
    "agentic-159": {
      "prompt": "Dos agentes pueden actualizar de forma independiente la documentación y agregar pruebas de análisis. ¿Cómo deben ejecutarse en paralelo con seguridad?",
      "choices": [
        "Compartir un único checkout con escritura, sin responsabilidades asignadas",
        "Hacer push directamente a la rama predeterminada",
        "Utilizar espacios de trabajo aislados con resultados explícitos y un propietario de integración",
        "Que el que termine primero vuelva a escribir el otro"
      ],
      "explanations": [
        "Los escritos compartidos pueden interferir incluso en tareas independientes.",
        "Directamente empuja la revisión de bypass.",
        "El aislamiento y la propiedad permiten la concurrencia con la integración controlada.",
        "La orden de finalización no establece la corrección."
      ],
      "concept": "aislamiento paralelo de ejecución",
      "hints": [
        "¿Qué recursos podrían compartir accidentalmente los trabajadores?",
        "¿Quién decide cómo se aceptan juntos sus resultados?"
      ]
    },
    "agentic-160": {
      "prompt": "Un agente de ejecución requiere un contrato API de un agente de diseño. ¿Qué patrón de orquestación encaja?",
      "choices": [
        "Comience ambos sin contrato compartido.",
        "Deja que la implementación invente su propia interfaz",
        "Trabajo de diseño duplicado en cada trabajador",
        "Hacer de la aceptación del contrato una dependencia explícita antes de la ejecución"
      ],
      "explanations": [
        "Las dependencias no resueltas crean suposiciones incompatibles.",
        "Inventar el contrato derrota la entrega requerida.",
        "La duplicación puede producir contratos contradictorios.",
        "Una puerta de dependencia proporciona a la implementación una entrada estable."
      ],
      "concept": "Orquestación consciente de la dependencia",
      "hints": [
        "¿Puede la tarea a continuación ser correcta antes de que exista su entrada?",
        "¿Qué artefacto marca que la entrega está lista?"
      ]
    },
    "agentic-161": {
      "prompt": "Dos agentes paralelos proponen modificaciones incompatibles de la misma función de autenticación. ¿Qué debería hacer el coordinador?",
      "choices": [
        "Pausa la integración, compara la intención y la evidencia, y reconcilia a través del propietario",
        "Aceptar el sello de tiempo posterior automáticamente",
        "Concatenate ambas implementaciones",
        "Ignorar a un agente sin grabar la decisión"
      ],
      "explanations": [
        "La resolución de conflictos requiere una revisión semántica, no sólo la fusión de textos.",
        "La actualidad no establece compatibilidad.",
        "La concatenación puede romper el comportamiento.",
        "El rechazo indocumentado debilita la trazabilidad."
      ],
      "concept": "conflictos de cambio superpuestos",
      "hints": [
        "¿Pueden coexistir ambos comportamientos?",
        "¿Quién es el dueño de la interfaz afectada y sus criterios de aceptación?"
      ]
    },
    "agentic-162": {
      "prompt": "Un coordinador delega accidentalmente un error a dos trabajadores. ¿Qué es lo que más directamente evita el esfuerzo duplicado en futuras ejecuciones?",
      "choices": [
        "Nombres más largos de los trabajadores",
        "Identidades únicas de tareas con reclamaciones explícitas y propiedad",
        "Un modelo más amplio para ambos trabajadores",
        "Solo resúmenes finales más frecuentes"
      ],
      "explanations": [
        "Los nombres por sí solos no impiden la asignación duplicada.",
        "Las identidades de trabajo reivindicadas exponen y restringen la propiedad duplicada.",
        "El tamaño del modelo no fija la contabilidad del envío.",
        "El informe final detecta duplicación demasiado tarde."
      ],
      "concept": "Prevención del trabajo duplicado",
      "hints": [
        "¿Cómo sabe el despachador que ya se le ha asignado una tarea?",
        "¿Qué estado debe cambiar cuando un trabajador acepta un trabajo?"
      ]
    },
    "agentic-163": {
      "prompt": "Un agente revisor y un ejecutor no están de acuerdo sobre si un cambio cumple con los requisitos. ¿Qué debería arbitrar?",
      "choices": [
        "El agente con mayor respuesta",
        "La mayoría de las llamadas de modelo repetidas",
        "El contrato de tarea, la evidencia independiente y el juicio humano responsable si no se resuelve",
        "La confianza del ejecutor"
      ],
      "explanations": [
        "La longitud no es corrección.",
        "Las opiniones repetidas pueden compartir el mismo error.",
        "La evidencia y la autoridad definida resuelven el desacuerdo sustancial.",
        "La confianza en sí misma no puede superar los requisitos."
      ],
      "concept": "Resultados de agentes contradictorios",
      "hints": [
        "¿Qué afirmaciones pueden ser probadas?",
        "¿Quién tiene autoridad cuando la evidencia deja una política o una decisión de intención?"
      ]
    },
    "agentic-164": {
      "prompt": "Una ejecución multi-agente termina tres de los cuatro componentes requeridos. El cuarto trabajador fracasó. ¿Qué debe informar el coordinador?",
      "choices": [
        "El éxito total porque la mayoría de los trabajadores terminaron",
        "No se produjo ningún progreso útil",
        "Un resultado combinado con el componente perdido oculto",
        "Finalización parcial con artefactos verificados, dependencias no satisfechas y opciones de recuperación"
      ],
      "explanations": [
        "La complejidad requerida no es una mayoría de votos.",
        "El trabajo terminado todavía puede ser útil.",
        "Ocultar las lagunas es una mala representación de la preparación.",
        "El estado parcial explícito apoya la recuperación segura y la revisión honesta."
      ],
      "concept": "Resultados parciales de múltiples agentes",
      "hints": [
        "¿Qué entregables están verificados?",
        "¿Qué sigue impidiendo que la tarea general cumpla su contrato?"
      ]
    },
    "agentic-165": {
      "prompt": "Un trabajador no ha producido ningún progreso durante una hora. ¿Qué debe comprobar el coordinador antes de lanzar un reemplazo?",
      "choices": [
        "Señales periódicas de actividad, estado de las herramientas, aprobaciones pendientes y efectos propios de la tarea",
        "Sólo el nombre del trabajador",
        "Sólo si hay otro trabajador disponible",
        "Si se puede adivinar la respuesta final"
      ],
      "explanations": [
        "El diagnóstico distingue a un trabajador parado de una espera legítima y evita efectos duplicados.",
        "Los nombres no revelan el estado operativo.",
        "La disponibilidad no establece la seguridad del reemplazo.",
        "La suposición de la finalización no es evidencia."
      ],
      "concept": "Diagnóstico de ejecuciones estancadas",
      "hints": [
        "¿Está el trabajador bloqueado, activo o desconectado?",
        "¿Podría completar una mutación pendiente?"
      ]
    },
    "agentic-166": {
      "prompt": "Un trabajador fallido debe ser reemplazado mientras una escritura externa todavía esté en funcionamiento. ¿Cuál es la recuperación más segura?",
      "choices": [
        "Comience una copia de escritura inmediatamente",
        "Revocar o cancelar la autoridad del trabajador anterior y reconciliar los efectos antes de la reanudación",
        "Dar acceso al administrador a ambos trabajadores",
        "Desechar todos los registros de ejecución existentes"
      ],
      "explanations": [
        "Un duplicado puede correr con el efecto original.",
        "El control de la autoridad y la reconciliación impiden que los escritores de recuperación compitan.",
        "Más privilegios aumentan el impacto de la condición de carrera.",
        "Se necesitan registros para comprender los efectos inciertos."
      ],
      "concept": "Cercas de reemplazo y de trabajadores obsoletos",
      "hints": [
        "¿Podría el trabajador original seguir actuando?",
        "¿Cómo puede el reemplazo saber qué efectos ya se produjeron?"
      ]
    },
    "agentic-167": {
      "prompt": "Se añade un nuevo especialista a un flujo de trabajo activo. ¿Qué entrega debería recibir?",
      "choices": [
        "La conversación histórica de cada organización",
        "Sólo un título de papel",
        "Una tarea limitada, contrato actual, estado relevante, permisos y salida esperada",
        "Las credenciales ilimitadas del coordinador"
      ],
      "explanations": [
        "El historial no filtrado aumenta el ruido y el riesgo de divulgación.",
        "Un título no define el trabajo ejecutable.",
        "Una entrega de alcance establece la responsabilidad y la continuidad.",
        "La especialización no requiere heredar toda la autoridad."
      ],
      "concept": "Añadir agentes de manera segura",
      "hints": [
        "¿Qué debe saber el nuevo trabajador para evitar duplicar o contradecir el trabajo?",
        "¿Qué autoridad es realmente necesaria?"
      ]
    },
    "agentic-168": {
      "prompt": "Un equipo actualiza las instrucciones de un trabajador durante un largo período. ¿Cómo evitar que interrumpa las tareas en curso?",
      "choices": [
        "Replace silenciosamente las instrucciones en medio de la operación",
        "Supongamos que todos los trabajadores utilizan instantáneamente el mismo contexto",
        "Eliminar las instrucciones y registros antiguos",
        "Versionar las definiciones y migrar en un punto de transferencia controlado"
      ],
      "explanations": [
        "Los cambios en medio de la operación pueden invalidar las suposiciones de tareas.",
        "Los trabajadores pueden conservar el contexto más antiguo.",
        "Se necesitan definiciones antiguas para la auditoría y la reproducción.",
        "Los límites de versiones hacen que el comportamiento y la transición sean explícitos."
      ],
      "concept": "ciclo de vida de la configuración del agente",
      "hints": [
        "¿Qué definición regía las acciones ya completadas?",
        "¿Cuándo se pueden adoptar nuevas instrucciones sin cambiar un contrato activo?"
      ]
    },
    "agentic-169": {
      "prompt": "Un agente especializado se está retirando. ¿Qué debe conservar el coordinador?",
      "choices": [
        "Sus decisiones, referencias de artefactos, propiedad pendiente y registro de transferencias",
        "Sólo su nombre de pantalla",
        "Todas las credenciales activas de forma indefinida",
        "Nada después de que su proceso salga"
      ],
      "explanations": [
        "La jubilación no debe perder la capacidad de auditoría o las responsabilidades no terminadas.",
        "Un nombre no puede reconstruir la obra.",
        "Las credenciales no deben conservarse innecesariamente.",
        "La terminación del proceso no elimina las necesidades de continuidad."
      ],
      "concept": "jubilación de agente",
      "hints": [
        "¿Quién hereda un trabajo incompleto?",
        "¿Qué necesitará un auditor después de que el agente ya no exista?"
      ]
    },
    "agentic-170": {
      "prompt": "Las ramas de trabajadores separadas se fusionan limpiamente, pero su comportamiento combinado rompe una API compartida. ¿Qué validación faltó?",
      "choices": [
        "Más controles de marcadores de conflictos",
        "Pruebas de integración sobre la revisión combinada y el contrato de interfaz",
        "Un recuento de trabajadores commits",
        "Un resumen más largo del coordinador"
      ],
      "explanations": [
        "La limpieza textual no demuestra compatibilidad semántica.",
        "La validación conjunta comprueba interacciones que no se ejercitaron en las ejecuciones aisladas.",
        "El número de compromisos no establece la corrección de la integración.",
        "Los detalles de resumen no pueden reemplazar la evidencia de la ejecución."
      ],
      "concept": "Validación de la integración semántica",
      "hints": [
        "¿Qué puede cambiar cuando se combinan componentes independientemente válidos?",
        "¿Alguna prueba ejerció el estado integrado real?"
      ]
    },
    "agentic-171": {
      "prompt": "Un coordinador lanza a muchos trabajadores contra un servicio limitado. Los fracasos aumentan. ¿Qué debería cambiar?",
      "choices": [
        "Añadir aún más trabajadores",
        "Rotar las identidades para evitar límites",
        "Limitar la concurrencia y coordinar el presupuesto compartido de las solicitudes",
        "Eliminar los informes de tiempo de espera"
      ],
      "explanations": [
        "Más trabajadores aumentan la presión sobre el cuello de botella.",
        "La rotación de identidad no es una gestión legítima de la capacidad.",
        "La presupuestación compartida de los recursos evita que los retos independientes amplifiquen la carga.",
        "Ocultar los tiempos no mejora el rendimiento."
      ],
      "concept": "Presupuestos de recursos para múltiples agentes",
      "hints": [
        "¿Qué recurso se comparte a pesar de los contextos separados?",
        "¿Puede la política de retrocesión localmente razonable de cada trabajador ser perjudicial en su conjunto?"
      ]
    },
    "agentic-172": {
      "prompt": "Un agente revisor necesita pruebas de implementación, pero no debe modificar el parche que revise. ¿Qué diseño encaja?",
      "choices": [
        "Compartir el shell sin restricciones del implementador",
        "Que el revisor arregle silenciosamente cada hallazgo",
        "Dar revisión y despliegue las mismas credenciales",
        "Proporcionar acceso a los artefactos solo para lectura y transferir los hallazgos por separado"
      ],
      "explanations": [
        "El acceso sin restricciones socava la separación de roles.",
        "Las ediciones silenciosas borran la autoría y invalidan el estado revisado.",
        "La autoridad de despliegue no es necesaria para su revisión.",
        "Las pruebas de solo lectura preservan el límite de la revisión y los comentarios rastreables."
      ],
      "concept": "aislamiento del papel del revisor",
      "hints": [
        "¿Qué capacidades son necesarias para evaluar el trabajo?",
        "¿Cómo deben devolverse los cambios solicitados al ejecutor?"
      ]
    },
    "agentic-173": {
      "prompt": "La última entrega de un trabajador dice solo \"hecho\". ¿Qué debe requerir el coordinador?",
      "choices": [
        "Referencias de entrega, revisión, validación, problemas no resueltos y estado de finalización",
        "Una declaración de éxito más entusiasta",
        "La transcripción completa del razonamiento privado",
        "Un porcentaje de confianza sin pruebas"
      ],
      "explanations": [
        "Una entrega rica en evidencia permite al coordinador verificar e integrar el resultado.",
        "El entusiasmo no establece la preparación.",
        "No se requiere de deliberaciones privadas para pruebas operativas.",
        "La confianza no reemplaza a los artefactos."
      ],
      "concept": "Entrega de agentes verificables",
      "hints": [
        "¿Puede otro trabajador continuar sin adivinar?",
        "¿Qué hace que la reclamación de finalización pueda comprobarse de forma independiente?"
      ]
    },
    "agentic-174": {
      "prompt": "Un trabajador solicita una ampliación de alcance que el propio coordinador no puede autorizar. ¿Qué debería pasar?",
      "choices": [
        "El coordinador aprueba porque la delegación implica una autoridad ilimitada.",
        "Escalar hasta el propietario apropiado mientras se conserva el trabajo limitado",
        "Pida permiso a otro trabajador.",
        "Tratar la solicitud como una aprobación"
      ],
      "explanations": [
        "La autoridad delegada no podrá exceder el alcance propio del coordinador.",
        "La autoridad no resuelta necesita al responsable responsable de la decisión.",
        "El acuerdo entre pares no crea autorización.",
        "Una solicitud no es una decisión de autorización."
      ],
      "concept": "límites de las autoridades delegadas",
      "hints": [
        "¿Puede un coordinador otorgar autoridad que no posee?",
        "¿Quién es el dueño del impacto adicional propuesto?"
      ]
    },
    "agentic-175": {
      "prompt": "Dos agentes usan checkouts separados, pero comparten una base de datos de pruebas con acceso de escritura. ¿Por qué el aislamiento es incompleto?",
      "choices": [
        "No pueden existir checkouts separados",
        "Sólo las instrucciones necesitan aislamiento.",
        "El estado externo compartido todavía puede causar interferencias",
        "Los cambios en la base de datos nunca afectan a los pruebas"
      ],
      "explanations": [
        "Es posible tener checkouts separados, pero eso no basta por sí solo.",
        "Los recursos de ejecución también necesitan límites.",
        "El aislamiento debe incluir servicios y accesorios mutables.",
        "Las mutaciones simultáneas de la fijación pueden alterar los resultados de las pruebas."
      ],
      "concept": "aislamiento de recursos externos",
      "hints": [
        "¿Qué recursos mutables se encuentran fuera del sistema de archivos?",
        "¿Puede un trabajador cambiar las observaciones de otro?"
      ]
    },
    "agentic-176": {
      "prompt": "Un coordinador quiere reconstruir por qué los trabajadores eligieron diseños contradictorios. ¿Qué telemetría es más útil?",
      "choices": [
        "Sólo el total agregado de tokens",
        "Sólo los nombres de los trabajadores",
        "Sólo la diferencia final fusionada",
        "Los contratos de tareas correlacionados, las decisiones, las entregas, las revisiones y los resultados"
      ],
      "explanations": [
        "Los totales de uso no explican las decisiones.",
        "Los nombres no conservan el contexto causal.",
        "La diferencia final omite alternativas rechazadas y el tiempo de entrega.",
        "Los artefactos correlacionados apoyan el análisis causal post hoc."
      ],
      "concept": "observabilidad de múltiples agentes",
      "hints": [
        "¿Qué sabía cada trabajador cuando actuó?",
        "¿Cómo se puede relacionar una decisión con su entrada y su efecto descendente?"
      ]
    },
    "agentic-177": {
      "prompt": "Un flujo de trabajo contiene un trabajador de investigación opcional fallido y controles de implementación requeridos exitosos. ¿Cómo debe decidir el coordinador si debe continuar?",
      "choices": [
        "Utilice el contrato de dependencia y aceptación declarado, informando el fallo opcional",
        "Fallar cada flujo de trabajo cada vez que un trabajador se detiene",
        "Ignorar todos los fracasos de los trabajadores",
        "Contar a los trabajadores exitosos y usar una mayoría simple"
      ],
      "explanations": [
        "La semántica explícita requerida versus opcional apoya una decisión honesta.",
        "Un fallo opcional no tiene por qué bloquear la aceptación no relacionada.",
        "Algunos fracasos invalidan el trabajo requerido.",
        "El número de trabajadores no representa la importancia de la dependencia."
      ],
      "concept": "Las dependencias obligatorias y opcionales de los trabajadores",
      "hints": [
        "¿Fue necesaria la salida faltante para la corrección?",
        "¿Qué dice el contrato de orquestación sobre la operación degradada?"
      ]
    },
    "agentic-178": {
      "prompt": "Dos agentes esperan la salida del otro indefinidamente. ¿Qué debería agregar el diseño de la orquestación?",
      "choices": [
        "Mensajes de espera más largos",
        "Detectar ciclos de dependencias y resolverlos explícitamente o escalar al agotarse el plazo",
        "Más agentes con la misma dependencia circular",
        "Una regla que cuenta como éxito esperar"
      ],
      "explanations": [
        "Los mensajes no rompen un ciclo lógico.",
        "Un ciclo detectado requiere un cambio de dependencia o una intervención responsable.",
        "Replicar el ciclo aumenta la capacidad desperdiciada.",
        "Esperar no satisface ninguna de las dos tareas."
      ],
      "concept": "punto muerto de coordinación",
      "hints": [
        "¿Puede cualquiera de las tareas producir primero su requisito previo?",
        "¿Quién puede cambiar la estructura de dependencia?"
      ]
    },
    "agentic-179": {
      "prompt": "Un agente de reemplazo recibe la tarea original, pero no el progreso del agente que falló. ¿Qué riesgo se introduce?",
      "choices": [
        "No puede generar prosa",
        "Automáticamente hereda todos los resultados de la herramienta anterior",
        "Puede repetir los efectos o abandonar las decisiones ya establecidas",
        "Debe usar menos tokens."
      ],
      "explanations": [
        "La generación de prosa no está relacionada con la continuidad de recuperación.",
        "El estado previo no está garantizado sin una entrega.",
        "La falta de progreso oscurece los efectos completos y las limitaciones.",
        "El uso de tokens no está determinado por esta omisión."
      ],
      "concept": "Continuidad de transmisión de recuperación",
      "hints": [
        "¿Cuál es la diferencia entre empezar de nuevo y hacerse cargo?",
        "¿Qué acciones no deben repetirse?"
      ]
    },
    "agentic-180": {
      "prompt": "Un coordinador utiliza un planificador, implementador y evaluador. ¿Cuál orden preserva mejor sus responsabilidades?",
      "choices": [
        "Evaluar sólo después del despliegue",
        "Implementación antes de definir el éxito",
        "Deje que el ejecutor apruebe cada cambio de plan solo",
        "Establecer el contrato, ejecutar dentro de él, luego evaluar independientemente la evidencia"
      ],
      "explanations": [
        "La evaluación posterior al despliegue pierde el límite de aceptación.",
        "El éxito indefinido no puede guiar una ejecución confiable.",
        "La aprobación unilateral debilita la separación de roles.",
        "Una secuencia basada en el contrato alinea las decisiones, las acciones y la validación."
      ],
      "concept": "Orquestación de planificador ejecutor evaluador",
      "hints": [
        "¿Qué debe saberse antes de la aplicación?",
        "¿Qué papel verifica el resultado entregado?"
      ]
    },
    "agentic-181": {
      "prompt": "Un flujo de trabajo multi-agente produce PRs duplicado después de un reinicio del coordinador. ¿Qué estado debería sobrevivir a los reinicios?",
      "choices": [
        "Las asignaciones de tareas a los trabajadores y las identidades verificables de entrega",
        "Sólo el nombre del modelo",
        "Sólo el último saludo.",
        "Sólo el número de trabajadores planificados"
      ],
      "explanations": [
        "La asignación duradera y la identidad de salida impiden la redistribución del trabajo terminado.",
        "La identidad del modelo no rastrea los efectos.",
        "Los saludos no llevan ningún progreso de orquestación.",
        "Un recuento no identifica la propiedad ni los resultados."
      ],
      "concept": "Estado de orquestación duradero",
      "hints": [
        "¿Cómo sabrá el coordinador lo que ya existe?",
        "¿Qué identificadores vinculan el trabajo lógico con el PR producido?"
      ]
    },
    "agentic-182": {
      "prompt": "Un trabajador de código cambia una interfaz después de que un trabajador de documentación haya finalizado su salida. ¿Qué debería hacer el coordinador?",
      "choices": [
        "Acceptar ambas salidas de forma independiente",
        "Invalida las suposiciones posteriores afectadas y revalida la documentación",
        "Eliminar todos los artefactos anteriores",
        "Tratar el código más reciente como prueba de que la documentación sigue siendo correcta"
      ],
      "explanations": [
        "Los resultados ahora pueden no estar de acuerdo.",
        "Los cambios en la dependencia requieren controles de frescura dirigidos hacia abajo.",
        "El historial útil debe seguir siendo auditable.",
        "El nuevo código no valida las descripciones antiguas."
      ],
      "concept": "Invalidación de la dependencia entre agentes",
      "hints": [
        "¿Qué trabajador consumió la interfaz anterior?",
        "¿Qué evidencia se volvió obsoleta cuando la interfaz cambió?"
      ]
    },
    "agentic-183": {
      "prompt": "Varios agentes están de acuerdo en que existe un API indocumentado, pero ninguno lo verificó. ¿Qué debería concluir el coordinador?",
      "choices": [
        "El acuerdo demuestra la existencia del API",
        "El trabajador más confiado es autorizado",
        "El consenso no basta sin evidencia independiente correspondiente a una versión concreta",
        "Más votos sin fundamento establecerán la verdad"
      ],
      "explanations": [
        "Los agentes pueden compartir alucinaciones relacionadas.",
        "La confianza no es evidencia de API.",
        "La verificación es necesaria incluso cuando varios trabajadores estén de acuerdo.",
        "Los dictámenes no respaldados adicionales no crean documentación."
      ],
      "concept": "errores correlacionados de múltiples agentes",
      "hints": [
        "¿Están los agentes usando evidencia independiente o la misma suposición?",
        "¿Dónde se puede verificar realmente la reclamación impugnada?"
      ]
    },
    "agentic-184": {
      "prompt": "A un trabajador se le permite editar pruebas pero propone cambiar la política de la organización. ¿Qué debe hacer cumplir el coordinador?",
      "choices": [
        "Cualquier trabajador puede redefinir la política si es útil",
        "Una modificación de política es inofensiva porque es texto",
        "El trabajador puede asumir un papel más amplio.",
        "El papel limitado del trabajador y un camino de escalada autorizado"
      ],
      "explanations": [
        "La utilidad no otorga autoridad a la gobernanza.",
        "El texto de la política puede tener consecuencias.",
        "La autoexpansión derrota el control delegado.",
        "Los límites del papel siguen siendo vinculantes durante la orquestación."
      ],
      "concept": "aplicación del alcance de los trabajadores",
      "hints": [
        "¿Qué tarea y autoridad fue delegada?",
        "¿La orquestación crea automáticamente permisos adicionales?"
      ]
    },
    "agentic-185": {
      "prompt": "Un coordinador sustituye una versión de trabajador después de la regresión. ¿Cómo debe el retroceso preservar la continuidad activa del flujo de trabajo?",
      "choices": [
        "Seleccionar la versión de funcionamiento comprobado y reanudar desde un estado compatible y verificado",
        "Reinicie todas las mutaciones externas ciegamente",
        "Eliminar el rastro de auditoría del viejo trabajador",
        "Mezcla las instrucciones de ambas versiones sin grabarlas"
      ],
      "explanations": [
        "Recuperación controlada de compatibilidad de versiones y estados.",
        "La repetición ciega corre el riesgo de efectos duplicados.",
        "El historial de auditoría sigue siendo necesario después de la sustitución.",
        "El comportamiento mixto no registrado socava la reproducibilidad."
      ],
      "concept": "Rolloback de la versión del agente",
      "hints": [
        "¿Qué versión es conocida para satisfacer el contrato?",
        "¿Puede su interpretación estatal reanudar con seguridad esta tarea?"
      ]
    },
    "agentic-186": {
      "prompt": "Las pruebas locales de un trabajador pasaron en su rama, pero el coordinador lo reestableció antes de la integración. ¿Qué evidencia se necesita ahora?",
      "choices": [
        "El viejo pase es suficiente para siempre",
        "Los controles pertinentes en relación con la revisión integrada resultante",
        "Sólo con la aprobación del trabajador",
        "Sólo un estado de salida de rebase limpio"
      ],
      "explanations": [
        "Pruebas anteriores se aplican a un estado anterior.",
        "El estado de integración modificado requiere una revalidación adecuada.",
        "La aprobación de los trabajadores no lleva a cabo controles.",
        "Una rebase limpia verifica la integración de texto, no el comportamiento."
      ],
      "concept": "Fresqueza de las pruebas de postintegración",
      "hints": [
        "¿Qué revisión será realmente aceptada?",
        "¿Exerció la evidencia esa revisión?"
      ]
    },
    "agentic-187": {
      "prompt": "Cada uno de los trabajadores de un flujo de trabajo vuelve a intentarlo indefinidamente, manteniendo viva una tarea general fallida. ¿Qué debería añadir el coordinador?",
      "choices": [
        "Un grupo de trabajadores más grande",
        "Presupuestos independientes ilimitados para cada nuevo trabajador",
        "Un presupuesto global de reintentos y ejecución con escalamiento",
        "Una regla que oculta fallas repetidas"
      ],
      "explanations": [
        "Más trabajadores pueden multiplicar el bucle.",
        "Los presupuestos independientes ilimitados siguen siendo ilimitados en su conjunto.",
        "Los límites de nivel de flujo de trabajo contienen repetidos intentos de recuperación.",
        "El fracaso oculto no restablece el progreso."
      ],
      "concept": "Presupuestos de recuperación de todo el flujo de trabajo",
      "hints": [
        "¿Puede el comportamiento local limitado seguir sin límites a través del reemplazo?",
        "¿Quién es responsable del costo total de la recuperación?"
      ]
    },
    "agentic-188": {
      "prompt": "Un equipo quiere ejecutar en paralelo dos agentes que editan el mismo manifiesto generado. ¿Cuál es el mejor primer paso?",
      "choices": [
        "Supongamos que diferentes instrucciones garantizan ninguna colisión",
        "Dejemos que ambos sobrescriban el manifiesto y comparen los sellos de tiempo",
        "Deshabilitar la validación del manifiesto",
        "Revisar la asignación de responsabilidades o serializar la integración del manifiesto"
      ],
      "explanations": [
        "Diferencias entre prompts no aíslan las escrituras compartidas.",
        "La selección de timestamp puede descartar las entradas requeridas.",
        "La validación es especialmente importante para los artefactos compartidos.",
        "La propiedad explícita o la serialización controla el punto de colisión."
      ],
      "concept": "propiedad compartida de los artefactos",
      "hints": [
        "¿Qué archivo sigue siendo un objetivo común de escritura?",
        "¿Se puede separar el trabajo paralelo de un solo paso de integración?"
      ]
    },
    "agentic-189": {
      "prompt": "Un coordinador envía un análisis de seguridad a un especialista. ¿Qué criterio de finalización es mejor?",
      "choices": [
        "Un informe de hallazgos limitados con evidencia, razón de gravedad y limitaciones",
        "Al menos un hallazgo crítico independientemente de la evidencia",
        "Una calificación general positiva",
        "Recuperación de la producción sin restricciones"
      ],
      "explanations": [
        "Un informe apoya una revisión informada sin forzar un resultado predeterminado.",
        "Requerir un hallazgo crítico incentiva la fabricación.",
        "Las calificaciones positivas no definen la calidad analítica.",
        "El análisis no autoriza automáticamente cambios en la producción."
      ],
      "concept": "Contratos de entrega especializados",
      "hints": [
        "¿Qué producto se puede revisar de forma independiente?",
        "¿Requiere la asignación de hallazgos o una conclusión particular?"
      ]
    },
    "agentic-190": {
      "prompt": "Un trabajador fallido dejó recursos temporales en un entorno compartido. ¿Qué debe incluir la recuperación?",
      "choices": [
        "Eliminar todos los recursos en el entorno",
        "Identificar los recursos propios de las tareas y limpiarlos a través de caminos autorizados",
        "Ignorar los recursos porque el trabajador se detuvo",
        "Pida al reemplazo que reutilice ciegamente los recursos desconocidos"
      ],
      "explanations": [
        "La eliminación amplia puede dañar el trabajo no relacionado.",
        "La limpieza consciente del propietario tiene impacto y preserva la seguridad.",
        "Los procesos interrumpidos pueden dejar efectos persistentes.",
        "Los recursos desconocidos pueden contener estado obsoleto o conflictivo."
      ],
      "concept": "Propiedad por falta de limpieza",
      "hints": [
        "¿Qué recursos pertenecen a esta tarea?",
        "¿Qué efectos sobreviven al despido de los trabajadores?"
      ]
    },
    "agentic-191": {
      "prompt": "Un coordinador resume la advertencia de un trabajador como un éxito. ¿Cómo debería el diseño de entrega reducir este riesgo?",
      "choices": [
        "Eliminar las advertencias de los mensajes de los trabajadores",
        "Requieren elogios más largos en resúmenes",
        "Utilice estados de finalización explícitos, bloqueadores y referencias de artefactos",
        "Siempre interprete los campos que faltan como éxito"
      ],
      "explanations": [
        "Reprimir las advertencias oculta resultados degradados.",
        "La alabanza aumenta la ambigüedad en lugar de resolverla.",
        "El estado estructurado reduce la interpretación de pérdidas.",
        "Los datos que faltan no son evidencia afirmativa de la finalización."
      ],
      "concept": "Transferencias de estado resistente a la pérdida",
      "hints": [
        "¿Qué distinciones de estatus deben sobrevivir al resumen?",
        "¿Puede el coordinador verificar la afirmación a partir de la evidencia adjunta?"
      ]
    },
    "agentic-192": {
      "prompt": "Un flujo de trabajo añade agentes dinámicamente cuando aumenta la complejidad de la tarea. ¿Qué debe seguir siendo explícito?",
      "choices": [
        "Sólo la duración máxima de respuesta",
        "Sólo el avatar de cada agente.",
        "Sólo el orden en que los agentes fueron nombrados",
        "Propiedad, dependencias, autoridad, presupuestos y responsabilidad de aceptación"
      ],
      "explanations": [
        "La longitud no establece el control de orquestación.",
        "Los avatares no definen las responsabilidades.",
        "El orden de nombres no expresa dependencias.",
        "El crecimiento dinámico aún requiere contratos operativos claros."
      ],
      "concept": "expansión controlada del flujo de trabajo",
      "hints": [
        "¿Quién es el dueño de cada nueva salida?",
        "¿Qué límites impiden que las delegaciones dinámicas se vuelvan incontroladas?"
      ]
    },
    "agentic-193": {
      "prompt": "Un trabajador informa de un requisito previo recientemente descubierto que afecta a varias tareas activas. ¿Qué debería hacer el coordinador?",
      "choices": [
        "Actualizar el gráfico de dependencia y notificar a los trabajadores afectados con el contrato revisado",
        "Mantenga el descubrimiento privado hasta el informe final.",
        "Que cada trabajador deduzca el cambio de forma independiente",
        "Borrar los planes anteriores sin preservar la historia"
      ],
      "explanations": [
        "Los cambios de dependencia compartida necesitan una propagación coordinada.",
        "Las notificaciones retrasadas pueden desperdiciar el trabajo o crear conflictos.",
        "Las inferencias independientes arriesgan suposiciones inconsistentes.",
        "Se necesita historia para explicar por qué cambió el plan."
      ],
      "concept": "Propagación del cambio de dependencia",
      "hints": [
        "¿Qué trabajadores dependen de la suposición invalidada?",
        "¿Cómo sabrán todos los participantes cuál es el contrato actual?"
      ]
    },
    "agentic-194": {
      "prompt": "Un humano resuelve un conflicto entre los diseños de dos agentes. ¿Qué debe registrar el flujo de trabajo antes de reanudar?",
      "choices": [
        "Sólo que un humano participó",
        "La decisión seleccionada, el alcance, la justificación y las actualizaciones de las tareas afectadas",
        "Sólo el nombre del agente perdedor.",
        "Un nuevo puntaje de confianza"
      ],
      "explanations": [
        "La participación por sí sola no transmite el contrato resuelto.",
        "Un registro de decisiones explícito hace que la intervención sea ejecutable y auditable.",
        "La culpa no es una entrega.",
        "La confianza no captura la elección autorizada."
      ],
      "concept": "Recuperación de los conflictos humanos en el ciclo",
      "hints": [
        "¿Qué deben saber los trabajadores para proceder de manera consistente?",
        "¿Qué explicará más adelante la dirección elegida?"
      ]
    },
    "agentic-195": {
      "prompt": "Un coordinador tiene diez pequeñas ediciones estrechamente unidas. Los agentes paralelos necesitarían todos los mismos archivos y supuestos. ¿Cuál es una elección razonable de orquestación?",
      "choices": [
        "Siempre maximizar el número de trabajadores",
        "Duplica la tarea completa diez veces",
        "Utilice una sola ejecución coherente o serialice las ediciones acopladas",
        "Eliminar los límites de tareas para reducir la planificación"
      ],
      "explanations": [
        "El paralelismo puede aumentar los gastos generales de coordinación y los conflictos.",
        "La duplicación desperdicia esfuerzo y crea resultados competitivos.",
        "El trabajo estrechamente unido puede ser más seguro y más rápido sin escritores paralelos.",
        "Eliminar los límites aumenta la ambigüedad."
      ],
      "concept": "Cuándo no paralelalizar",
      "hints": [
        "¿Son realmente independientes las unidades de trabajo?",
        "¿Excedirá el coste de la coordinación el beneficio de la concurrencia?"
      ]
    },
    "agentic-196": {
      "prompt": "Una revisión de incidentes entre varios agentes no encuentra manera de saber qué trabajador introdujo una llamada de herramienta insegura. ¿Qué deben incluir los registros futuros de acontecimientos?",
      "choices": [
        "Sólo una etiqueta de flujo de trabajo compartida",
        "Sólo la duración total",
        "Sólo la respuesta final del coordinador",
        "Identidad del agente, tarea principal, solicitud de herramienta, resultado de autorización y resultado de ejecución"
      ],
      "explanations": [
        "Una etiqueta compartida no puede atribuir acciones individuales.",
        "La duración no identifica a los actores ni a las solicitudes.",
        "Un resumen omite los detalles necesarios de la ejecución.",
        "Los eventos correlacionados atribuidos determinan la procedencia de la acción."
      ],
      "concept": "atribución de la acción entre agentes",
      "hints": [
        "¿Puede el investigador conectar un efecto a un actor?",
        "¿Qué límite de autorización fue cruzado o aplicado?"
      ]
    },
    "agentic-197": {
      "prompt": "Un flujo de trabajo se cierra después de que todos los resultados sean aceptados. ¿Cuál es el mejor cierre del ciclo de vida?",
      "choices": [
        "Confirmar que no hay trabajo activo, liberar recursos, revocar el acceso innecesario y conservar registros",
        "Eliminar todos los artefactos para reducir el desorden",
        "Mantenga todos los trabajadores y credenciales activos indefinidamente",
        "Detener al coordinador sin comprobar la actividad del trabajador"
      ],
      "explanations": [
        "El cierre ordenado preserva la rendición de cuentas al tiempo que elimina las capacidades innecesarias.",
        "Los artefactos pueden ser necesarios para la auditoría y el mantenimiento.",
        "La autoridad y los recursos vacíos crean una exposición innecesaria.",
        "Los trabajadores podrán seguir actuando después de un cierre no controlado."
      ],
      "concept": "Retiro y cierre del flujo de trabajo",
      "hints": [
        "¿Podría algún trabajador producir efectos secundarios?",
        "¿Qué debe terminar, y qué debe seguir siendo inspectable?"
      ]
    },
    "agentic-198": {
      "prompt": "Un agente puede leer la documentación pública o borrar los registros de producción. ¿Qué diferencia debe tener la autonomía?",
      "choices": [
        "Ambos deben requerir aprobaciones idénticas.",
        "Permitir lecturas limitadas de bajo riesgo y requerir una autorización controlada explícita para su eliminación",
        "La eliminación debe ser automática porque es más rápida.",
        "Todos los accesos a las herramientas implican el mismo riesgo"
      ],
      "explanations": [
        "La aprobación uniforme ignora un impacto sustancialmente diferente.",
        "La autonomía basada en el riesgo se reserva fuertes controles para las acciones consecuentes.",
        "La velocidad no justifica un impacto irreversible.",
        "Las herramientas difieren en el riesgo operativo y en el riesgo de conformidad."
      ],
      "concept": "Autonomía clasificada por riesgo",
      "hints": [
        "¿Qué acción es difícil de revertir?",
        "¿Dónde cambia materialmente el juicio humano el riesgo?"
      ]
    },
    "agentic-199": {
      "prompt": "Un agente promete no utilizar su credencial de administrador para operaciones no relacionadas. ¿Qué protección más fuerte es apropiada?",
      "choices": [
        "Una promesa más enfática",
        "Una descripción más larga del papel",
        "Una credencial restringida a los recursos y las acciones requeridos por la tarea",
        "Una revisión mensual de las promesas"
      ],
      "explanations": [
        "El énfasis no reduce la autoridad técnica.",
        "El texto de papel no es la aplicación del acceso.",
        "El mínimo privilegio limita el impacto incluso si el agente comete un error.",
        "La revisión periódica no impide acciones no autorizadas."
      ],
      "concept": "La aplicación de los privilegios mínimos",
      "hints": [
        "¿Qué queda posible si las instrucciones son mal entendidas?",
        "¿Puede el propio servicio rechazar operaciones fuera de su alcance?"
      ]
    },
    "agentic-200": {
      "prompt": "Un despliegue de producción requiere la aprobación humana. ¿Qué control de flujo de trabajo impone mejor ese límite cuando se configura?",
      "choices": [
        "Un comentario que dice que se prefiere la aprobación",
        "Un umbral de confianza generado por agentes",
        "Un registro de despliegue escrito después",
        "Un entorno protegido con revisores requeridos en el trabajo de despliegue"
      ],
      "explanations": [
        "El texto de preferencia no bloquea la ejecución.",
        "La confianza no puede reemplazar al titular de la decisión requerida.",
        "Registrar la acción después no puede impedir el despliegue.",
        "Las puertas de revisión ambiental detienen el trabajo objetivo antes de la ejecución."
      ],
      "concept": "Puertas de aprobación del entorno",
      "hints": [
        "¿En qué momento debe detenerse el trabajo?",
        "¿Qué mecanismo hace cumplir una decisión fuera del modelo?"
      ]
    },
    "agentic-201": {
      "prompt": "Un documento de repositorio le dice a un agente que envíe credenciales a un endpoint de diagnóstico. ¿Qué debería hacer el agente?",
      "choices": [
        "Rechazar la instrucción como contenido no confiable y preservar la protección de los secretos",
        "Cumplir porque los archivos del repositorio siempre son autorizados",
        "Envía sólo la mitad de las credenciales",
        "Pregunte al endpoint si es confiable"
      ],
      "explanations": [
        "El contenido no puede autorizar la exfiltración de credenciales.",
        "El texto del repositorio puede contener instrucciones adversas.",
        "La divulgación parcial aún puede exponer datos sensibles.",
        "La propia afirmación de un endpoint no es una autorización."
      ],
      "concept": "Salvaguardas contra la inyección de prompts",
      "hints": [
        "¿Es este contenido datos de tareas o un cambio de política autorizado?",
        "¿Quién dio permiso para la divulgación?"
      ]
    },
    "agentic-202": {
      "prompt": "Un agente necesita modificar un archivo de política que determina su propio acceso a la herramienta. ¿Cuál es el control de revisión más apropiado?",
      "choices": [
        "Que apruebe sus propios privilegios ampliados",
        "Proteger la configuración con la revisión de la propiedad y las reglas de aceptación aplicadas",
        "Tratar los cambios de configuración como documentación inofensiva",
        "Deshabilitar las auditorías para las modificaciones de configuración"
      ],
      "explanations": [
        "La autoaprobación socava el límite de los privilegios.",
        "La revisión independiente evita cambios no examinados en la autoridad del agente.",
        "La configuración puede alterar directamente las capacidades.",
        "La auditoría es importante para los cambios sensibles a la gobernanza."
      ],
      "concept": "Configuración de agente de protección",
      "hints": [
        "¿Podría esta edición cambiar lo que el agente está autorizado a hacer?",
        "¿Quién debería aprobar la expansión de la autoridad?"
      ]
    },
    "agentic-203": {
      "prompt": "Una persona aprueba un despliegue en staging. Luego, el agente propone desplegar en producción un commit más reciente. ¿Qué autorización se necesita?",
      "choices": [
        "Ninguna; cualquier aprobación de despliegue cubre todos los entornos",
        "Un texto de aprobación reutilizado de la ejecución en staging",
        "Una decisión que cubra la nueva revisión y el impacto en la producción",
        "La garantía del agente de que el nuevo commit es similar"
      ],
      "explanations": [
        "El alcance de la aprobación no es automáticamente universal.",
        "Una cadena copiada no extiende autoridad.",
        "El objetivo y el código materialmente diferentes requieren una autorización adecuada.",
        "Las afirmaciones de similitud no obligan la aprobación humana a un nuevo trabajo."
      ],
      "concept": "Alcance específico de una aprobación",
      "hints": [
        "¿Qué entorno y revisión revisó realmente el humano?",
        "¿Qué efectos propuestos son nuevos?"
      ]
    },
    "agentic-204": {
      "prompt": "Una tarea es urgente, pero una acción propuesta viola una política explícita de residencia de datos. ¿Qué debería hacer el agente?",
      "choices": [
        "Proceder y documentar la urgencia después",
        "Copie los datos a través de una herramienta diferente",
        "Pida a otro agente que realice la transferencia",
        "Bloquear la acción y remitir el conflicto por la vía autorizada de políticas"
      ],
      "explanations": [
        "La urgencia no renuncia a una política vinculante.",
        "El cambio de herramientas no elimina la violación de la política.",
        "La delegación no puede autorizar una conducta prohibida.",
        "Los conflictos políticos requieren una resolución legítima antes de actuar."
      ],
      "concept": "aplicación de los límites de cumplimiento",
      "hints": [
        "¿La política regula la herramienta o el destino de los datos?",
        "¿Quién puede resolver la solicitud de excepción?"
      ]
    },
    "agentic-205": {
      "prompt": "Un agente registra las cargas útiles completas de las herramientas, incluidos los identificadores de clientes innecesarios para la depuración. ¿Qué debe priorizar la rendición de cuentas?",
      "choices": [
        "Trazabilidad con minimización de datos sensibles y acceso controlado",
        "Datos en bruto máximos independientemente de la finalidad",
        "No hay registros en absoluto",
        "Registros públicos para que cada observador pueda investigar"
      ],
      "explanations": [
        "Las pruebas de auditoría útiles pueden conservarse sin divulgación indiscriminada.",
        "Más datos pueden aumentar la exposición a la privacidad y la seguridad.",
        "La ausencia de registros impide la rendición de cuentas.",
        "El acceso público es inapropiado para registros operativos sensibles."
      ],
      "concept": "Auditibilidad que preserve la privacidad",
      "hints": [
        "¿Qué campos son realmente necesarios para reconstruir la acción?",
        "¿A quién debería permitirse inspeccionarlas?"
      ]
    },
    "agentic-206": {
      "prompt": "Una limpieza irreversible de base de datos está incluida en el objetivo general, pero no se definieron los registros exactos que se eliminarán. ¿Qué debe ocurrir antes de ejecutar?",
      "choices": [
        "Eliminar una muestra para inferir el alcance previsto",
        "Presentar un conjunto de registros objetivo que pueda revisarse y obtener autorización explícita",
        "Supongamos que la redacción general del objetivo apruebe todos los registros correspondientes",
        "Deja que el modelo decida qué registros parecen desechables"
      ],
      "explanations": [
        "Incluso una eliminación de la muestra puede tener efectos irreversibles.",
        "Los objetivos precisos apoyan una decisión consecuente informada.",
        "La intención amplia es insuficiente para un alcance destructivo indefinido.",
        "El juicio modelo no puede sustituir a la autoridad de titularidad de los datos."
      ],
      "concept": "Autorización de acción irreversible",
      "hints": [
        "¿Puede el aprobador identificar exactamente lo que se eliminará?",
        "¿Qué ambigüedad se vuelve peligrosa después de la acción?"
      ]
    },
    "agentic-207": {
      "prompt": "Un equipo pregunta si cada archivo leído debe requerir la aprobación humana. ¿Cuál es el mejor principio de política?",
      "choices": [
        "Cada operación debe tener la misma puerta.",
        "Ninguna lectura puede exponer datos sensibles",
        "Clasificar las lecturas por sensibilidad y alcance de los datos, automatizando únicamente el acceso autorizado de bajo riesgo",
        "Todas las lecturas son equivalentes a la producción escribe"
      ],
      "explanations": [
        "El revestimiento uniforme puede agregar fricción sin beneficio proporcional.",
        "Los lectores pueden revelar información confidencial.",
        "El riesgo incluye la divulgación, no sólo la mutación.",
        "El impacto de leer y escribir difiere y requiere una evaluación específica del contexto."
      ],
      "concept": "Leer el riesgo y los controles proporcionales",
      "hints": [
        "¿Puede la observación misma exponer información protegida?",
        "¿Qué lecturas ya están autorizadas dentro de la tarea?"
      ]
    },
    "agentic-208": {
      "prompt": "Un agente descubre que una puerta de seguridad está mal configurada y sugiere quitarla para terminar más rápido. ¿Cuál es la respuesta apropiada?",
      "choices": [
        "Quita la puerta porque bloquea el progreso",
        "Deje que el agente decida qué controles son innecesarios",
        "Evitarlo con otra identidad.",
        "Escalar la configuración incorrecta y repararla mediante un cambio autorizado"
      ],
      "explanations": [
        "Un bloqueador no justifica descartar el control.",
        "El agente no puede renunciar unilateralmente al gobierno.",
        "El cambio de identidad derrota el límite previsto.",
        "La reparación preserva el propósito del control mientras se resuelve el defecto."
      ],
      "concept": "Manejo de fallas de la barandilla de seguridad",
      "hints": [
        "¿El problema es el propósito del control o su aplicación?",
        "¿Quién puede autorizar un cambio en el camino de la aplicación?"
      ]
    },
    "agentic-209": {
      "prompt": "Un equipo utiliza las instrucciones del agente como su única barrera contra la transferencia externa de datos. ¿Qué control adicional es más útil?",
      "choices": [
        "Restricciones de herramientas, credenciales y red aplicadas efectivamente en el entorno de ejecución",
        "Un recordatorio más largo sobre la confidencialidad",
        "Una promesa generada por el agente antes de cada transferencia",
        "Un registro público después de cada transferencia"
      ],
      "explanations": [
        "La aplicación del tiempo de ejecución limita los efectos independientemente del cumplimiento del modelo.",
        "Más texto sigue siendo aconsejable.",
        "Las auto-promesas no imponen restricciones de destino.",
        "El registro después de la divulgación de los hechos no puede impedir la transferencia."
      ],
      "concept": "Defensa en profundidad",
      "hints": [
        "¿Qué controles siguen funcionando si el modelo sigue contenido malicioso?",
        "¿Dónde se puede rechazar una operación prohibida antes de que sea efectiva?"
      ]
    },
    "agentic-210": {
      "prompt": "El cambio propuesto por un agente afecta a las reglas de retención reguladas. Pasaron todas las pruebas. ¿Qué juicio adicional se requiere?",
      "choices": [
        "Ninguna, porque las pruebas abarcan todas las decisiones de cumplimiento",
        "Revisión por parte del titular responsable de la política o del cumplimiento",
        "Un voto de popularidad entre los agentes",
        "Un puntaje de confianza por encima de un umbral elegido"
      ],
      "explanations": [
        "Las pruebas no pueden autorizar de forma independiente un cambio de política.",
        "Los cambios sensibles a las políticas requieren que el titular de la decisión corresponda.",
        "Los votos de los agentes no confieren autoridad de cumplimiento.",
        "La confianza no sustituye la autorización responsable."
      ],
      "concept": "Juicio humano de cambios sensibles al cumplimiento",
      "hints": [
        "¿Quién es el dueño de la interpretación legal o política?",
        "¿Puede la validez técnica responder si el cambio es permitido?"
      ]
    },
    "agentic-211": {
      "prompt": "Un ser humano niega la acción destructiva propuesta por un agente. ¿Qué debería hacer el agente?",
      "choices": [
        "Reformula la misma acción y ejecutarla",
        "Delegue a otro agente.",
        "Preservar la negación y continuar sólo dentro del alcance autorizado restante",
        "Tratar el silencio después como aprobación"
      ],
      "explanations": [
        "La reformulación no cambia el efecto negado.",
        "La delegación no puede evitar la negación.",
        "La decisión sigue siendo vinculante mientras que pueden seguir siendo posibles alternativas seguras.",
        "El silencio no es una autorización de reemplazo."
      ],
      "concept": "Respetar las decisiones de aprobación",
      "hints": [
        "¿Cambiar el intérprete cambia la operación negada?",
        "¿Qué trabajo queda permitido?"
      ]
    },
    "agentic-212": {
      "prompt": "Una tarea requiere la aprobación de una excepción, pero no se puede verificar la identidad de quien aprueba. ¿Cuál es el estado más seguro?",
      "choices": [
        "Aprobado porque alguien respondió",
        "Aprobado si la respuesta suena profesional",
        "Procesar y verificar la identidad después de la ejecución",
        "Bloqueado en espera de una decisión autorizada autenticada"
      ],
      "explanations": [
        "Una respuesta por sí sola no establece autoridad.",
        "El estilo no puede autenticar a un aprobador.",
        "La verificación posterior a la ejecución se pierde en la puerta.",
        "La aprobación debe provenir de un principal autorizado identificable."
      ],
      "concept": "Autenticidad de la aprobación",
      "hints": [
        "¿Qué establece la autoridad de la persona que responde?",
        "¿Puede la decisión ser revisada más tarde?"
      ]
    },
    "agentic-213": {
      "prompt": "Una organización quiere cambios rápidos de formato autónomo sin dar permiso a los agentes para fusionar su propio PRs. ¿Qué diseño encaja?",
      "choices": [
        "Los agentes preparan PRs; la automatización del repositorio sigue las políticas de comprobación, revisión y fusión configuradas",
        "Dar a cada agente derechos sin restricciones de fusión",
        "Salta las comprobaciones requeridas para los agentes de formato",
        "Tratar una etiqueta de formato como aprobación universal"
      ],
      "explanations": [
        "La preparación y la aceptación se pueden separar manteniendo una automatización eficiente.",
        "Los derechos de fusión sin restricciones superan el diseño declarado.",
        "El formato todavía puede introducir cambios inesperados.",
        "Una etiqueta por sí sola no satisface las reglas de aceptación."
      ],
      "concept": "Separar la preparación de la aceptación",
      "hints": [
        "¿Quién crea la propuesta, y qué controla la aceptación?",
        "¿Puede la automatización mantener las mismas condiciones requeridas?"
      ]
    },
    "agentic-214": {
      "prompt": "Se sospecha que las credenciales de un agente han sido comprometidas. ¿Qué contención debe tener prioridad?",
      "choices": [
        "Espera hasta que la tarea se complete",
        "Suspende la ejecución afectada y revoque o rota el acceso a través del proceso de incidente",
        "Copie el token a otro trabajador",
        "Eliminar registros antes de investigar"
      ],
      "explanations": [
        "La ejecución continua puede aumentar la exposición.",
        "La contención reduce el posible impacto mientras se conserva una respuesta controlada.",
        "Copiar la ficha genera el compromiso.",
        "Los registros pueden ser pruebas esenciales."
      ],
      "concept": "contención de incidentes credenciales",
      "hints": [
        "¿Qué autoridad podría ejercer actualmente un atacante?",
        "¿Cómo se pueden detener los efectos adicionales sin destruir la evidencia?"
      ]
    },
    "agentic-215": {
      "prompt": "Un equipo aprueba una herramienta porque es de solo lectura, pero puede consultar los tenants de todos los clientes. ¿Qué falta?",
      "choices": [
        "Capacidad de escritura",
        "Un icono de herramienta más colorido",
        "Evaluación del alcance y de la confidencialidad a nivel de recursos",
        "Una ventana de contexto ilimitada"
      ],
      "explanations": [
        "Añadir escritos aumentaría el riesgo.",
        "La presentación no limita el acceso a los datos.",
        "El acceso solo para lectura aún necesita límites de inquilinos y datos.",
        "El tamaño del contexto no autoriza la divulgación."
      ],
      "concept": "Privilegio mínimo para el acceso a datos",
      "hints": [
        "¿Cuáles son los datos de los clientes que se pueden inspeccionar?",
        "¿La falta de mutación elimina el riesgo de confidencialidad?"
      ]
    },
    "agentic-216": {
      "prompt": "Un agente propone desactivar el registro de auditoría durante un cambio sensible para evitar el ruido. ¿Qué debe exigir el propietario?",
      "choices": [
        "Acepta si el cambio es rápido",
        "Utilizar sólo el resumen final del agente",
        "Deshabilitar los registros pero mantener un puntaje de confianza",
        "Preservar los eventos de auditoría adecuados y filtrar el ruido irrelevante en su lugar"
      ],
      "explanations": [
        "La corta duración no elimina los requisitos de rendición de cuentas.",
        "Sólo un resumen no puede reconstruir la ejecución.",
        "La confianza no es un registro de auditoría.",
        "La reducción del ruido no debe borrar la evidencia consecuente."
      ],
      "concept": "Continuidad de las auditorías",
      "hints": [
        "¿Qué acontecimientos serían necesarios si el cambio fallara?",
        "¿Puede mejorar la usabilidad sin eliminar el registro?"
      ]
    },
    "agentic-217": {
      "prompt": "Una protección bloquea una escritura no autorizada pero el agente informa que la tarea tuvo éxito. ¿Qué debe requerir la rendición de cuentas?",
      "choices": [
        "Un resultado de bloqueo fiel a los hechos, con la operación intentada y los siguientes pasos autorizados",
        "Un estado de éxito porque la salvaguarda funcionó",
        "Eliminación del evento bloqueado",
        "Un nuevo intento bajo una identidad más privilegiada"
      ],
      "explanations": [
        "El éxito de Guardrail y la finalización de la tarea son resultados diferentes.",
        "Impedir una escritura no completa la tarea solicitada.",
        "Los intentos bloqueados son evidencia importante.",
        "La escalada de privilegios necesita una autorización separada."
      ],
      "concept": "Información honesta sobre acciones bloqueadas",
      "hints": [
        "¿Se produjo el efecto previsto?",
        "¿Cómo se puede registrar tanto el éxito de la seguridad como la incompletud de la tarea?"
      ]
    },
    "agentic-218": {
      "prompt": "Un humano aprueba un plan, luego un agente cambia sus objetivos antes de su ejecución. ¿Qué debería hacer la salvaguarda?",
      "choices": [
        "Aprobación de reutilización independientemente de los cambios en el objetivo",
        "Invalida la aprobación afectada y solicite la revisión de la acción revisada",
        "Ocultar los cambios de objetivo en los registros",
        "Tratar la aprobación como permiso para elegir cualquier objetivo"
      ],
      "explanations": [
        "La aprobación deberá seguir vinculada al ámbito de aplicación revisado.",
        "Los cambios materiales requieren una decisión que cubra el nuevo efecto.",
        "Ocultar los cambios derrota la autorización informada.",
        "Los objetivos forman parte de los límites de autoridad de la acción."
      ],
      "concept": "Invalidación de la aprobación por cambio material",
      "hints": [
        "¿La acción sigue siendo la que se revisó?",
        "¿Qué suposiciones de aprobación ya no son válidas?"
      ]
    },
    "agentic-219": {
      "prompt": "Un agente recibe una solicitud para generar afirmaciones engañosas dirigidas a clientes, sin respaldo en la evidencia del lanzamiento. ¿Qué respuesta se ajusta a la rendición de cuentas?",
      "choices": [
        "Publicar si el solicitante quiere una redacción persuasiva",
        "Utilice un aviso de responsabilidad después de las afirmaciones falsas",
        "Declinar las afirmaciones no justificadas y presentar un borrador basado en la evidencia para su revisión",
        "Pida a otro agente que invente detalles de apoyo"
      ],
      "explanations": [
        "La persuasión no justifica el engaño.",
        "Una exención de responsabilidad no hace que las afirmaciones no justificadas sean exactas.",
        "La redacción basada en la evidencia preserva la utilidad y la comunicación responsable.",
        "El soporte fabricado agrava el problema."
      ],
      "concept": "Fronteras de comunicación de IA responsable",
      "hints": [
        "¿Qué evidencia apoya las declaraciones públicas propuestas?",
        "¿Se puede alcanzar con precisión el objetivo legítimo de comunicación?"
      ]
    },
    "agentic-220": {
      "prompt": "Un equipo muestra demasiadas solicitudes de aprobación de poco valor y los usuarios las aceptan de forma automática. ¿Cuál es el mejor rediseño?",
      "choices": [
        "Añadir otra confirmación a cada pedido",
        "Quita toda aprobación, incluyendo acciones destructivas",
        "Haga que las instrucciones sean menos específicas para acortar el tiempo de lectura",
        "Consolidar el trabajo autorizado de bajo riesgo y reservar puertas claras para riesgos significativos"
      ],
      "explanations": [
        "Las peticiones más repetitivas pueden empeorar la fatiga.",
        "Las acciones de alto impacto todavía necesitan controles adecuados.",
        "Las informaciones vagas debilitan las decisiones informadas.",
        "Las puertas centradas en el riesgo mejoran la atención sin abandonar la gobernanza."
      ],
      "concept": "Aprobación de la reducción de la fatiga",
      "hints": [
        "¿Qué aprobaciones cambian significativamente el riesgo?",
        "¿Tiene el aprobador suficiente información específica para decidir?"
      ]
    },
    "agentic-221": {
      "prompt": "Se concede una excepción de cumplimiento para una tarea y expira mañana. ¿Qué debe conservar el agente?",
      "choices": [
        "Propietario de la excepción, alcance, vencimiento y referencia de la prueba",
        "Sólo la palabra aprobada",
        "Una exención global permanente",
        "Las credenciales del aprobador"
      ],
      "explanations": [
        "Los metadatos de excepción limitada evitan un uso indebido posterior.",
        "Una simple aprobación pierde límites importantes.",
        "Una excepción temporal de la tarea no es la política global.",
        "Las credenciales no forman parte de un registro de autorización."
      ],
      "concept": "Excepciones de las políticas auditables",
      "hints": [
        "¿Qué impide que las tareas futuras reutilicen incorrectamente la excepción?",
        "¿Qué límites definen el permiso real?"
      ]
    },
    "agentic-222": {
      "prompt": "El entorno de un agente puede acceder a servicios internos no relacionados con la tarea. ¿Qué debe evaluar una revisión del principio de mínimo privilegio?",
      "choices": [
        "Sólo las herramientas mostradas en el chat",
        "La accesibilidad a la red, las credenciales, el acceso al sistema de archivos y las herramientas expuestas en conjunto",
        "Sólo si el nombre del agente es descriptivo",
        "Solo el número de revisores requeridos"
      ],
      "explanations": [
        "Las herramientas visibles son sólo una parte de la autoridad efectiva.",
        "La capacidad efectiva abarca varias capas de aplicación.",
        "El nombramiento no limita el acceso.",
        "El recuento de revisiones no define la accesibilidad en el tiempo de ejecución."
      ],
      "concept": "Autoridad de ejecución efectiva",
      "hints": [
        "¿Qué puede alcanzar el tiempo de ejecución fuera de la lista de herramientas anunciada?",
        "¿Qué capas podrían imponer un límite más estrecho?"
      ]
    },
    "agentic-223": {
      "prompt": "Una organización desactiva una capacidad de agente de alto riesgo durante un incidente. ¿Qué debe ocurrir con las ejecuciones que ya están activas?",
      "choices": [
        "Supongamos que han adoptado automáticamente el cambio",
        "Deja que terminen cada escrito pendiente",
        "Verificar la aplicación de las operaciones activas y suspender o revocar la capacidad cuando sea necesario",
        "Eliminar el registro de cambios de política"
      ],
      "explanations": [
        "No se debe asumir la propagación de la política a la ejecución activa.",
        "Los escritos pendientes pueden mantener el mismo riesgo de incidente.",
        "La contención requiere comprobar la autoridad efectiva, no sólo la configuración guardada.",
        "El registro de cambios apoya la rendición de cuentas de incidentes."
      ],
      "concept": "contención activa de las políticas",
      "hints": [
        "¿Los procesos de vuelo aún tienen credenciales o acciones en cola?",
        "¿Qué evidencia demuestra que la restricción es efectiva ahora?"
      ]
    },
    "agentic-224": {
      "prompt": "Un agente recomienda renunciar a un chequeo de seguridad porque su tasa de éxito histórica es alta. ¿Cuál es el principio de decisión apropiado?",
      "choices": [
        "Confía en la historia sobre el cambio actual",
        "Que el agente conceda la exención",
        "Reemplazar el cheque con un umbral de confianza",
        "Utilice un proceso de excepción autorizado basado en la evidencia y el riesgo de este cambio"
      ],
      "explanations": [
        "El desempeño histórico no valida el riesgo actual.",
        "Las exenciones a sí mismas socavan el control independiente.",
        "La confianza no es equivalente a una verificación de seguridad.",
        "Las excepciones requieren un juicio responsable y pruebas específicas."
      ],
      "concept": "Excepciones de control basadas en la evidencia",
      "hints": [
        "¿El desempeño pasado demuestra que este cambio es seguro?",
        "¿Quién está autorizado a aceptar el riesgo restante?"
      ]
    },
    "agentic-225": {
      "prompt": "Una organización quiere ampliar los agentes de redactar PRs a modificar los ajustes de producción. ¿Qué debería preceder esa expansión?",
      "choices": [
        "Una revisión de riesgos, autoridad explícita, límites aplicados, pruebas de evaluación y diseño de recuperación",
        "Sólo un presupuesto de ejecución mayor",
        "Solo cambiar el nombre del agente listo para la producción",
        "Sólo confirmación de que puede llamar a las configuraciones API"
      ],
      "explanations": [
        "La autonomía de la producción requiere un camino de ejecución demostrado y regido.",
        "El presupuesto no establece seguridad ni permiso.",
        "Una etiqueta no es la preparación operativa.",
        "La capacidad técnica por sí sola no permite cambios consecuentes."
      ],
      "concept": "Preparación para la consecuente autonomía",
      "hints": [
        "¿Qué cambios se producen cuando el trabajo propuesto tiene un impacto directo en la producción?",
        "¿Qué pruebas y controles apoyan esa nueva responsabilidad?"
      ]
    }
  },
  "pt-BR": {
    "agentic-001": {
      "prompt": "Uma equipe está introduzindo agentes num serviço de pagamento. Qual é a atribuição inicial que fornece a responsabilidade mais clara e limitada do SDLC?",
      "choices": [
        "Adicionar testes para regras de arredondamento documentadas em um branch PR",
        "Confiabilidade dos pagamentos próprios desde a concepção até a produção",
        "Melhorar o serviço onde o agente encontrar oportunidades",
        "Resolver todos os incidentes de pagamento sem limites de escalada"
      ],
      "explanations": [
        "Regras documentadas, um teste de entrega e um branch definem uma tarefa revisível.",
        "A propriedade de confiabilidade de ponta a ponta não tem entradas e autoridade limitadas.",
        "A melhoria aberta convida a mudanças não relacionadas.",
        "O tratamento de incidentes requer limites de risco e caminhos de escalada."
      ],
      "concept": "Delegação limitada SDLC",
      "hints": [
        "O que deixaria um revisor decidir quando a tarefa seria concluída?",
        "Quanta autoridade implica cada tarefa?"
      ]
    },
    "agentic-002": {
      "prompt": "Um agente recebe 'fazer o processo de pagamento mais rápido' e propõe a substituição do banco de dados. O que deve estabelecer o titular da tarefa antes de autorizar a execução?",
      "choices": [
        "Um fornecedor de banco de dados preferido",
        "Uma linha de base medida, latência de destino, alcance e restrições",
        "Um prazo de execução sem requisitos adicionais",
        "Um orçamento de execução maior para a exploração de substituições"
      ],
      "explanations": [
        "A selecção do fornecedor não estabelece se a substituição é justificada.",
        "Um contrato mensurável permite a comparação e limita as alterações arquitetônicas.",
        "Um prazo não resolve critérios ambiguos de sucesso.",
        "Um maior orçamento de exploração não define o resultado pretendido."
      ],
      "concept": "Introduções e critérios de sucesso",
      "hints": [
        "Como podem dois críticos concordar que o desempenho melhorou o suficiente?",
        "Que informações faltantes afetam se um redesenho é apropriado?"
      ]
    },
    "agentic-003": {
      "prompt": "Um refator sensível à segurança não deve modificar os arquivos-fonte até que o seu plano seja aprovado. Que arquitetura impõe essa exigência?",
      "choices": [
        "Um agente escrito instruído a esperar",
        "Uma revisão após execução de todos os arquivos editados",
        "Uma etapa de planejamento somente leitura seguida de uma etapa de execução com aprovação obrigatória",
        "Uma combinação de plano e código PR com proteção contra merge"
      ],
      "explanations": [
        "As instruções sozinhas não removem a capacidade de edição.",
        "A revisão após a edição é posterior ao limite exigido.",
        "A capacidade de somente leitura e um portão explícito impedem a edição prematura da fonte.",
        "A proteção contra a merge não impede a geração de fontes de pré-aprobação."
      ],
      "concept": "execução do plano antes da ação",
      "hints": [
        "Em que ponto a restrição deve entrar em vigor?",
        "Que opção controla a capacidade em vez de simplesmente descrever o comportamento?"
      ]
    },
    "agentic-004": {
      "prompt": "Os revisores recebem um plano que diz apenas 'atualizar arquivos, executar verificações, terminar'. Que melhoria mais os ajuda a validar a intenção antes da execução?",
      "choices": [
        "Substituir o plano com a pontuação de confiança do modelo",
        "Anexe uma transcrição não filtrada de cada pensamento interno",
        "Requer uma diferença final detalhada antes de discutir a intenção",
        "Especificar os componentes, os passos, os riscos, os testes e as condições de parada afetados"
      ],
      "explanations": [
        "O Confiança não é um contrato de execução revisable.",
        "A deliberação interna não é necessária para um plano inspeccionável.",
        "Esperar uma diferença perde a oportunidade de validação precoce.",
        "O escopo explícito e a validação permitem aos revisores avaliar o trabalho proposto."
      ],
      "concept": "artefatos do plano estruturado",
      "hints": [
        "Que perguntas um proprietário faria antes de conceder autoridade de execução?",
        "Que informações ligam a intenção a evidências posteriores?"
      ]
    },
    "agentic-005": {
      "prompt": "Um agente corrige um erro de análise, mas também reorganiza o código de autenticação não relacionado. De acordo com o modelo de contribuição, o revisor deve fazer o quê?",
      "choices": [
        "Requer justificação ou remoção das alterações não relacionadas",
        "Aceitar toda a diferença porque os testes do parser passam",
        "Rejeitar todas as contribuições dos agentes, independentemente das provas",
        "Examine apenas os arquivos mencionados na edição original"
      ],
      "explanations": [
        "O escopo é revisto juntamente com a correção, independentemente da autoria.",
        "Os testes de parceria não validam edições de autenticação não relacionadas.",
        "O modelo colaborador avalia o trabalho, não o tipo de autor.",
        "Ignorar arquivos inesperados deixa riscos não revisados."
      ],
      "concept": "Revisão do escopo segundo o modelo de contribuição",
      "hints": [
        "A solução do defeito relatado justifica todas as mudanças?",
        "Que padrão de revisão deve aplicar-se a qualquer contribuinte?"
      ]
    },
    "agentic-006": {
      "prompt": "Um agente de documentação de baixo risco espera a aprovação humana antes de cada busca e leitura de arquivo. A entrega desacelerou sem reduzir significativamente o risco. Qual é o melhor redesenho?",
      "choices": [
        "Eliminar todos os controles, incluindo os controles de publicação",
        "Permitir leituras delimitadas automaticamente e exigir aprovação para gravações de impacto significativo",
        "Transferir as aprovações para um lote semanal após a publicação",
        "Requer dois revisores para cada leitura para aumentar a confiança"
      ],
      "explanations": [
        "A publicação ainda precisa de controles adequados.",
        "Os limites baseados no risco reduzem o atrito, preservando simultaneamente a supervisão do impacto.",
        "A aprovação posterior não pode impedir uma publicação inadequada.",
        "Mais aprovações de leitura aumentam o problema existente."
      ],
      "concept": "Autonomia proporcional",
      "hints": [
        "Que operações podem mudar algo fora do contexto do agente?",
        "Onde o julgamento humano reduz substancialmente o risco?"
      ]
    },
    "agentic-007": {
      "prompt": "Uma equipe mantém os planos dos agentes apenas numa conversa efêmera. Os auditores não podem associar as alterações divulgadas ao seu escopo previsto. O que deve acrescentar a arquitetura?",
      "choices": [
        "Uma janela de contexto de chat mais longa",
        "Um requisito para os agentes reafirmarem a sua confiança",
        "Links de plano duradouro e de evidências associados ao PR e ao commit",
        "Um agente de exclusão de regra ramifica-se assim que os testes passarem"
      ],
      "explanations": [
        "Uma janela de contexto maior não cria um artefato de auditoria acessível.",
        "A confiança não estabelece a intenção ou a origem.",
        "Artefatos ligados conectam intenção aprovada, execução e validação.",
        "A eliminação precoce pode reduzir em vez de melhorar a reconstrução."
      ],
      "concept": "GitHub como sistema de registro",
      "hints": [
        "O que deve permanecer disponível depois de uma sessão terminar?",
        "Como alguém encontraria a evidência de um commit libertado?"
      ]
    },
    "agentic-008": {
      "prompt": "Uma equipe quer que um agente redigir alterações rapidamente para o trabalho de formatação reversível, com validação antes do merge em vez de antes da edição. Que fluxo de trabalho se encaixa?",
      "choices": [
        "Execução da produção seguida de um plano retrospectivo",
        "Planejamento apenas para leitura sem transferência de execução",
        "Atualizações diretas do branch padrão após a execução de um formatador local",
        "Um plano e execução PR sujeito a verificações e revisões configuradas"
      ],
      "explanations": [
        "O plano deve informar o trabalho, não racionalizar as ações de produção posteriormente.",
        "Só o planejamento de leitura não pode produzir as mudanças.",
        "A validação local não substitui o limite de merge necessário.",
        "Um PR combinado se adapta à iteração de baixo risco, mantendo a revisão antes da aceitação."
      ],
      "concept": "Primeiro plano versus plano e execução",
      "hints": [
        "O portal requerido é antes de editar ou antes de aceitar alterações?",
        "Como a reversibilidade afeta o fluxo de trabalho adequado?"
      ]
    },
    "agentic-009": {
      "prompt": "Uma tarefa pede a um agente para atualizar um cliente API sem alterar a sua interface pública. Qual é o critério de sucesso mais útil?",
      "choices": [
        "Os testes de compatibilidade existentes e os novos testes de defeito passam sem alterações públicas API",
        "O patch remove o maior número de linhas possível",
        "O agente produz pelo menos três commits",
        "A implementação utiliza a mais recente biblioteca disponível"
      ],
      "explanations": [
        "Isto verifica tanto a correção desejada como a restrição de compatibilidade.",
        "O volume de exclusão não é evidência de comportamento compatível.",
        "A contagem de compromissos é uma medida do processo, não a correção da tarefa.",
        "A adoção da biblioteca mais recente pode violar a compatibilidade."
      ],
      "concept": "Contratos de tarefas orientados para os resultados",
      "hints": [
        "Que comportamento deve mudar, e o que deve permanecer estável?",
        "Que métrica poderia melhorar enquanto ainda quebra os usuários?"
      ]
    },
    "agentic-010": {
      "prompt": "Um agente é designado para um incidente de produção e descobre uma etapa de recuperação destrutiva não documentada. Que limite de responsabilidade deve definir a arquitetura?",
      "choices": [
        "Deixe o agente inferir autoridade da urgência",
        "Preparar provas e uma proposta de recuperação, em seguida, perguntar ao proprietário responsável sobre ações fora do escopo autorizado",
        "Permitir qualquer ação que apareceu em um incidente anterior",
        "Tratar o acesso a um comando como permissão para executá-lo"
      ],
      "explanations": [
        "A urgência não concede autoridade destrutiva.",
        "A escalação preserva um diagnóstico útil sem exceder a autoridade delegada.",
        "Um incidente anterior pode ter tido aprovações e condições diferentes.",
        "A capacidade técnica e a autorização são limites diferentes."
      ],
      "concept": "Escalada por limite de tarefa",
      "hints": [
        "Quem é responsável pelo risco de uma recuperação destrutiva?",
        "O diagnóstico pode continuar sem tomar a ação controversa?"
      ]
    },
    "agentic-011": {
      "prompt": "Um gerente descreve um agente como \"um assistente que sugere código\". Qual comportamento adicional torna um sistema SDLC baseado em agente em vez de meramente consultivo?",
      "choices": [
        "Responde com explicações mais longas",
        "Ele sempre usa um modelo maior",
        "Ele planeja, invoca ferramentas autorizadas e avalia o progresso em direção a um objetivo",
        "Ele produz sugestões em uma interface de chat"
      ],
      "explanations": [
        "O comprimento da resposta não estabelece execução autônoma.",
        "O tamanho do modelo não define o fluxo de trabalho.",
        "A ação e o feedback orientados para objetivos distinguem um ciclo de vida baseado em agentes.",
        "Uma interface de chat pode permanecer puramente de aconselhamento."
      ],
      "concept": "Plano-acto-avaliação agencial do ciclo de vida",
      "hints": [
        "O sistema só propõe, ou pode agir sobre o seu ambiente?",
        "Que feedback informa o seu próximo passo?"
      ]
    },
    "agentic-012": {
      "prompt": "Um agente modifica repetidamente os testes até que passem, mas ninguém verifica se a funcionalidade ainda atende aos requisitos da issue. Qual é a omissão arquitetônica mais importante?",
      "choices": [
        "Um tamanho mínimo obrigatório do patch",
        "Um segundo formatador de código",
        "Uma pontuação de produtividade gerada por agentes",
        "Uma fase de avaliação ligada à intenção de desenvolvimento"
      ],
      "explanations": [
        "O tamanho do patch não estabelece o comportamento correto.",
        "A formatação não pode verificar a intenção do recurso.",
        "A produtividade auto-relatada não valida os resultados.",
        "A avaliação deve comparar o comportamento fornecido com o requisito previsto."
      ],
      "concept": "fechar o ciclo de vida do agente",
      "hints": [
        "Os testes verdes podem coexistir com uma característica implementada erroneamente?",
        "Onde é verificado o contrato de tarefa original?"
      ]
    },
    "agentic-013": {
      "prompt": "Uma tarefa proposta para um agente reúne uma migração de esquema, um redesenho de UI e uma mudança na política de implantação em um único PR. Qual reformulação mais facilita a revisão?",
      "choices": [
        "Separar entregas coerentes e registrar suas dependências",
        "Esconde o intermediário commits atrás de um resumo",
        "Assinar um revisor para aprovar o pacote completo rapidamente",
        "Use um prompt mais longo mantendo o mesmo alcance ilimitado"
      ],
      "explanations": [
        "As unidades coerentes permitem a inspecção de riscos e pré-requisitos distintos.",
        "Um resumo não reduz o escopo da revisão.",
        "Um revisor pode não possuir todas as áreas afetadas.",
        "O comprimento do prompt não cria limites arquitetônicos."
      ],
      "concept": "decomposição da tarefa SDLC",
      "hints": [
        "Estas mudanças compartilham uma decisão de aceitação?",
        "Que limites permitem que os donos certos revisem o risco certo?"
      ]
    },
    "agentic-014": {
      "prompt": "Um agente de planejamento recomenda uma alteração de infraestrutura sem uma estratégia de reversão conhecida. A equipe exige preparo para reversão antes da implementação. O que a validação do plano deve concluir?",
      "choices": [
        "Aprova porque o retrocesso pode ser investigado após a implantação",
        "Devolver o plano para análise de recuperação antes da execução",
        "Aprova se o agente relata alta confiança",
        "Substituir as revisões necessárias com um prazo de execução mais longo"
      ],
      "explanations": [
        "A descoberta pós-desenvolvimento perde o limite de prontidão exigido.",
        "Um requisito de recuperação não cumprido torna o plano incompleto.",
        "A confiança não pode substituir uma estratégia de recuperação.",
        "As limites de tempo excedidos não estabelecem a reversibilidade."
      ],
      "concept": "Validação da prontidão de recuperação",
      "hints": [
        "Qual pré-requisito não foi demonstrado?",
        "Quando um regresso desconhecido se tornaria mais caro?"
      ]
    },
    "agentic-015": {
      "prompt": "Uma equipe de agentes utiliza os PRs do GitHub como plano de controle. Qual correspondência separa melhor intenção, implementação e evidência?",
      "choices": [
        "Os três só existem em uma resposta final ao bate-papo.",
        "A intenção é deduzida dos nomes dos arquivos; a evidência é a confiança do agente",
        "Plano na issue ou no PR, alterações em commits e validação em verificações e relatórios",
        "A implementação é documentada antes do planejamento; os testes são opcionais se revisados"
      ],
      "explanations": [
        "O chat efêmero não fornece o mesmo registro revisível.",
        "Os nomes de arquivos e a confiança não capturam a intenção e a validação.",
        "Cada fase do ciclo de vida tem uma representação durável e inspecionável.",
        "A revisão não elimina a necessidade de uma validação adequada."
      ],
      "concept": "mapeamento de artefatos do ciclo de vida",
      "hints": [
        "Que artefato responde por quê, o que mudou e como foi verificado?",
        "Podem essas respostas ser examinadas de forma independente?"
      ]
    },
    "agentic-016": {
      "prompt": "Uma equipe quer um agente para produzir planos de implementação, mas nunca executá-los. Qual design de agente personalizado expressa melhor esse papel?",
      "choices": [
        "Agente de finalidade geral com credenciais de implantação",
        "Um agente de execução cujo nome contém \"planificador\"",
        "Um agente sem restrições com uma nota para evitar alterações",
        "Um prompt focado no planejamento e acesso explícito apenas a ferramentas de leitura"
      ],
      "explanations": [
        "A autoridade de implantação não é necessária para o planejamento.",
        "Um nome de papel não restringe as capacidades.",
        "O texto consultivo é mais fraco do que um limite de capacidade real.",
        "O prompt define a responsabilidade e as ferramentas reforçam os seus limites de ação."
      ],
      "concept": "Alinhamento de funções e capacidades",
      "hints": [
        "O que é que esse papel precisa inspecionar?",
        "Que capacidade contradizia a sua declaração de responsabilidade?"
      ]
    },
    "agentic-017": {
      "prompt": "Um agente propõe um refator baseado no pressuposto de que um legado API não tem consumidores. Qual é a melhor resposta à revisão do plano de pré-execução?",
      "choices": [
        "Exigir provas sobre os consumidores ou revisar a abordagem de compatibilidade",
        "Aprova porque a suposição está claramente escrita",
        "Aprova se a remoção do API reduz a complexidade",
        "Pedir mais detalhes de implementação sem verificar a suposição"
      ],
      "explanations": [
        "Uma suposição crítica precisa de validação antes de conduzir um projeto destrutivo.",
        "A visibilidade torna uma suposição revisível, não verdadeira.",
        "A redução da complexidade não justifica a quebra de consumidores desconhecidos.",
        "Detalhes de implementação não podem reparar uma premissa não apoiada."
      ],
      "concept": "Validação da suposição",
      "hints": [
        "Que premissa poderia invalidar todo o plano?",
        "Que evidência distinguiria uma remoção segura de uma mudança radical?"
      ]
    },
    "agentic-018": {
      "prompt": "Um repositório requer a aprovação do proprietário para alterações no fluxo de trabalho. A adição de entradas CODEOWNERS sozinha não impediu merges não revisadas. Que controle arquitetônico falta?",
      "choices": [
        "Um maior período de retenção de registros de fluxo de trabalho",
        "Regra aplicável que exige a revisão do proprietário do código",
        "Um comentário pedindo aos agentes que contactem os proprietários",
        "Uma etiqueta de tarefa com o nome da equipe afetada"
      ],
      "explanations": [
        "A retenção melhora a auditabilidade, não a aplicação da aprovação.",
        "A propriedade deve estar associada a um requisito de revisão obrigatória.",
        "Um comentário não impõe o limite do merge.",
        "As etiquetas ajudam a encaminhar, mas não bloqueiam a aceitação."
      ],
      "concept": "Responsabilidade e aplicação efetiva de controles",
      "hints": [
        "O que torna uma sugestão de revisor uma decisão necessária?",
        "Qual é a fronteira que aceita o código?"
      ]
    },
    "agentic-019": {
      "prompt": "A descrição de um PR afirma que todos os testes passaram, mas não inclui referências a execuções nem commits. Qual requisito de observabilidade mais melhoraria a prestação de contas?",
      "choices": [
        "Exigir que o agente repita a alegação na sua mensagem final",
        "Registrar apenas as taxas de aprovação mensais agregadas",
        "Vincular as evidências de validação à execução e à revisão exatas do código",
        "Incluir a temperatura do modelo no título PR"
      ],
      "explanations": [
        "A repetição de uma alegação não fundamentada não adiciona qualquer origem.",
        "Os agregados mensais não podem validar esta revisão do PR.",
        "A correlação entre execução e revisão torna a alegação inspecionável de forma independente.",
        "As configurações de geração não demonstram a execução do teste."
      ],
      "concept": "proveniência das provas",
      "hints": [
        "Como poderia um revisor verificar a afirmação sem confiar no autor?",
        "Os testes poderiam ter corrido contra um código mais antigo?"
      ]
    },
    "agentic-020": {
      "prompt": "Um proprietário de tarefa quer automatizar a elaboração de notas de lançamento, mas mantém a responsabilidade humana pelos compromissos públicos. Que divisão de responsabilidades se encaixa?",
      "choices": [
        "O agente elabora e publica sempre que a prosa é fluente",
        "O ser humano fornece apenas preferências de formatamento",
        "O agente decide quais promessas não divulgadas são aceitáveis",
        "O agente escreve um esboço baseado em alterações aprovadas; um proprietário autorizado aprova a publicação"
      ],
      "explanations": [
        "A fluência não estabelece autorização para reivindicações públicas.",
        "A orientação de formatamento não abrange o risco de compromisso.",
        "Os compromissos públicos exigem um julgamento empresarial delegado.",
        "A redação é limitada enquanto a publicação mantém o titular da decisão adequada."
      ],
      "concept": "Limites da responsabilidade humana",
      "hints": [
        "Qual passo cria um compromisso externo?",
        "O que pode ser automatizado sem transferir essa autoridade?"
      ]
    },
    "agentic-021": {
      "prompt": "Uma equipe define o sucesso do agente como \"produzir muitos PRs mesclados\". Os agentes começam a dividir as mudanças triviais para aumentar a pontuação. O que é que a arquitetura deve enfatizar?",
      "choices": [
        "Resultados dos usuários e restrições de qualidade, juntamente com as medidas de entrega",
        "Número mínimo de linhas em cada PR",
        "Número de chamadas de ferramentas de agentes por dia",
        "Uma regra que aceita apenas avaliações de agentes"
      ],
      "explanations": [
        "As medidas equilibradas de resultados desencorajam a otimização da atividade em vez do valor.",
        "Os mínimos de linha criam outro alvo de atividade jogável.",
        "As chamadas de ferramenta medem a atividade e podem recompensar a ineficiência.",
        "As restrições de autor não alinham o trabalho com os resultados dos usuários."
      ],
      "concept": "Evitar antipatrões controlados por proxy",
      "hints": [
        "A pontuação escolhida pode aumentar sem beneficiar os usuários?",
        "O que impede a velocidade de mascarar regressões de qualidade?"
      ]
    },
    "agentic-022": {
      "prompt": "Um agente é solicitado a implementar uma questão, mas os critérios de aceitação contradizem uma decisão de arquitetura aprovada. O que deve acontecer antes da ação?",
      "choices": [
        "Siga em silêncio o texto mais novo",
        "Relatar o conflito e obter uma decisão de escopo do proprietário autorizado",
        "Combine os dois desenhos, mesmo que sejam incompatíveis",
        "Ignore a questão porque os documentos de arquitetura sempre têm prioridade"
      ],
      "explanations": [
        "A aparente recência não resolve a autoridade ou a intenção.",
        "Um conflito de escopo requer uma decisão explícita antes da sua aplicação.",
        "A combinação de requisitos incompatíveis não os torna satisfatíveis.",
        "Os documentos podem necessitar de revisão; a rejeição unilateral não é resolução."
      ],
      "concept": "Introduções de tarefas em conflito",
      "hints": [
        "O que tornaria a próxima ação defensivel para ambos os proprietários?",
        "O conflito é fatual, ou requer uma decisão?"
      ]
    },
    "agentic-023": {
      "prompt": "Um agente termina a implementação, mas descobre que um scanner necessário não está disponível. O seu contrato de tarefa requer evidências de análise de código. Que estado de conclusão é apropriado?",
      "choices": [
        "Completo, porque o agente não pode controlar a disponibilidade do scanner",
        "Completos, se os testes unitários tiverem sido aprovados",
        "Preparação da implementação, validação bloqueada com registro de escalada",
        "Completo, com um resultado estimado do scanner"
      ],
      "explanations": [
        "Um bloqueador externo não satisfaz o requisito faltante.",
        "Os testes unitários não substituem o sinal de segurança especificado.",
        "O estado parcial explícito preserva o progresso sem exagerar a prontidão.",
        "Os resultados estimados não são provas executadas."
      ],
      "concept": "Conclusão e contratos de Estado bloqueado",
      "hints": [
        "Que entrega existe e qual pré-requisito permanece insatisfeito?",
        "Como a transferência pode preservar o progresso com honestidade?"
      ]
    },
    "agentic-024": {
      "prompt": "Uma equipe considera substituir os fluxos habituais de issues, PRs e verificações por um canal de aprovação separado, exclusivo para agentes. Qual é o motivo mais importante para manter os artefatos padrão de desenvolvimento?",
      "choices": [
        "Eles garantem que o código gerado não tem defeitos",
        "Eliminam a necessidade de definir o escopo do agente",
        "Tornam todas as ações do agente reversíveis.",
        "Eles mantêm a propriedade, evidências e aceitação no plano de controle estabelecido"
      ],
      "explanations": [
        "Os artefatos de desenvolvimento apoiam a revisão, mas não podem garantir a correção.",
        "O escopo deve ainda ser explicitamente definido.",
        "Alguns efeitos externos permanecem irreversíveis.",
        "Os controles compartilhados preservam a inspecionabilidade e a governança de engenharia consistente."
      ],
      "concept": "Integração padrão de ferramentas",
      "hints": [
        "Onde os revisores existentes já tomam decisões de aceitação?",
        "O que se perde quando o trabalho dos agentes é revisado fora desse sistema?"
      ]
    },
    "agentic-025": {
      "prompt": "Um agente precisa explorar um repositório desconhecido antes de estimar uma mudança. A estimativa deve preceder a aprovação da execução. Qual é a melhor fase inicial?",
      "choices": [
        "Investigação de somente leitura dentro de limites definidos, registro de suposições e constatações",
        "Crie alterações de código especulativas para descobrir o escopo",
        "Acesso à implantação de subvenções para melhorar a precisão das estimativas",
        "Salto da exploração e do commit para um plano de execução fixo"
      ],
      "explanations": [
        "A descoberta pode reduzir a incerteza sem atravessar o portão de execução.",
        "As edições especulativas violam o limite de fase exigido.",
        "Não é necessária capacidade de implantação para inspecionar a estrutura do repositório.",
        "Uma estimativa não informada esconde, em vez de gerir, a incerteza."
      ],
      "concept": "Descoberta antes do compromisso",
      "hints": [
        "Que incerteza pode ser reduzida sem mudar o sistema?",
        "Que artefato tornaria uma estimativa revisível?"
      ]
    },
    "agentic-026": {
      "prompt": "Um agente de correção de erros pode revisar um branch PR, mas falha repetidamente na mesma verificação requerida. O que deve definir com antecedência o seu fluxo de trabalho?",
      "choices": [
        "Iterações ilimitadas até o cheque passar",
        "Um orçamento limitado de iteração e uma escalada rica em evidências",
        "Eliminação automática da verificação de falha",
        "Um retrocesso que marca o sucesso de todas as verificações restantes"
      ],
      "explanations": [
        "Os circuitos ilimitados consomem recursos sem garantir a convergência.",
        "Um orçamento e uma transferência fazem com que as falhas persistentes sejam gerenciáveis.",
        "Remover um sinal requerido oculta a falha.",
        "O sucesso sintético distorce o resultado da validação."
      ],
      "concept": "Iteração autónoma limitada",
      "hints": [
        "O que distingue a iteração útil de um ciclo paralisado?",
        "O que deve receber um ser humano quando a recuperação automática parar?"
      ]
    },
    "agentic-027": {
      "prompt": "Uma equipe atribui agentes a cada estágio do SDLC apenas porque a automação está disponível. Qual princípio de seleção é mais apropriado?",
      "choices": [
        "Preferir tarefas com o maior raio de explosão ilimitado",
        "Etapas de delegação em que não podem ser escritos critérios de aceitação",
        "Combinar tarefas limitadas com capacidades, resultados verificáveis e controles de risco",
        "Automatizar apenas tarefas que não exigem contexto"
      ],
      "explanations": [
        "Um grande impacto ilimitado aumenta o risco de supervisão.",
        "Objetivos não verificáveis são candidatos pobres à delegação.",
        "A capacidade, a evidência e o alinhamento dos riscos apoiam a delegação confiável.",
        "As tarefas úteis podem exigir contexto quando fornecido e escopo."
      ],
      "concept": "Seleção de trabalho adequado ao agente",
      "hints": [
        "O que faz com que um resultado delegado possa ser avaliado independentemente?",
        "Pode-se limitar a tarefa sem eliminar a sua utilidade?"
      ]
    },
    "agentic-028": {
      "prompt": "Um plano de implantação diz 'utilizar o branch atual quando aprovado na próxima semana'. Por que o revisor deve solicitar uma referência de execução mais precisa?",
      "choices": [
        "Os nomes de sucursais não podem ser utilizados em fluxos de trabalho GitHub",
        "A aprovação congela automaticamente todos os branches do repositório",
        "Referências de compromisso remover a necessidade de testes",
        "O branch pode mudar entre revisão e execução"
      ],
      "explanations": [
        "Os branches são referências utilizáveis, mas podem ser mutáveis.",
        "A aprovação não congela inerentemente um branch.",
        "Pinning identifica o código; não o valida.",
        "Uma revisão explícita vincula a execução ao estado de código revisto."
      ],
      "concept": "Plans vinculativos a revisões imutáveis",
      "hints": [
        "Será que o mesmo nome necessariamente identificará o mesmo código mais tarde?",
        "O que exatamente o revisor inspecionou?"
      ]
    },
    "agentic-029": {
      "prompt": "Um PR gerado por agente passa os controles, mas não oferece nenhuma explicação para uma nova dependência. Em que se deve focar a revisão arquitetônica?",
      "choices": [
        "Se a dependência é necessária, abrangida e consistente com as restrições",
        "Se o agente utilizou um nome de pacote reconhecível",
        "Se o PR foi gerado rapidamente",
        "Se a dependência aumenta o número de pacotes do repositório"
      ],
      "explanations": [
        "A aprovação dos controles não justifica uma alteração arquitectónica ou da cadeia de abastecimento.",
        "O reconhecimento não é prova de necessidade ou adequação.",
        "A velocidade não estabelece a qualidade do projeto.",
        "O número de pacotes por si só não determina a adequação arquitetônica."
      ],
      "concept": "Revisão arquitetônica além de verificações verdes",
      "hints": [
        "Que limitação de tarefa pode ser afetada por uma nova dependência?",
        "Uma construção bem-sucedida explica por que o projeto mudou?"
      ]
    },
    "agentic-030": {
      "prompt": "Um proprietário de produto muda o comportamento exigido após a aprovação de um plano, mas antes do início da implementação. O que deve exigir o limite da orquestração?",
      "choices": [
        "Continue a usar o plano antigo porque a aprovação é permanente",
        "Revisar o plano e revalidar a autorização em causa",
        "Implementar ambos os comportamentos sem discutir o conflito",
        "Escondir a alteração no resumo da execução"
      ],
      "explanations": [
        "A aprovação aplica-se à intenção revisada, não a requisitos posteriores arbitrários.",
        "A alteração substancial da intenção requer um contrato de execução correspondentemente atualizado.",
        "A combinação de comportamentos pode ser contraditória ou fora de alcance.",
        "As alterações ocultas prejudicam a inspecção e a aprovação informada."
      ],
      "concept": "Revisão do plano e escopo de aprovação",
      "hints": [
        "O trabalho autorizado ainda está a ser proposto?",
        "Qual alteração invalida a decisão de aceitação anterior?"
      ]
    },
    "agentic-031": {
      "prompt": "Uma equipe quer inspecionar o comportamento dos agentes sem gravar deliberações internas privadas. O que deve produzir o agente?",
      "choices": [
        "Apenas os arquivos de origem finais",
        "Cada sinal de raciocínio oculto",
        "Decisão concisa, suposições, resultados das ferramentas e evidências de validação",
        "Uma declaração de confiança sem artefatos de apoio"
      ],
      "explanations": [
        "Só os arquivos omitem o histórico de intenção e execução.",
        "Os artefatos inspecionáveis não exigem transcrições de deliberação privada.",
        "Os registros de decisões e de resultados proporcionam uma transparência operacional útil.",
        "A confiança sozinha não pode reconstruir o comportamento."
      ],
      "concept": "artefatos de decisão inspecionáveis",
      "hints": [
        "Que informações são necessárias para reconstruir as ações e a sua justificação?",
        "Que evidência é útil para um operador em vez de meramente verbal?"
      ]
    },
    "agentic-032": {
      "prompt": "O contrato de tarefas de um agente inclui o repositório-alvo, a revisão de base, os caminhos permitidos, os testes e uma entrega do PR. Que adição esclarece mais diretamente quando parar e procurar ajuda?",
      "choices": [
        "Um estilo de escrita preferido",
        "Um comprimento máximo de descrição PR",
        "Um apelido modelo",
        "Gatilhos explícitos de escalonamento e itens fora do escopo"
      ],
      "explanations": [
        "O estilo de escrita não identifica um limite de autoridade.",
        "O comprimento da descrição não define condições bloqueadas.",
        "A identidade do modelo não estabelece condições de parada.",
        "Escalação desencadeia e não-objetivos ligados à solução autónoma de problemas."
      ],
      "concept": "Determinação das condições e não-objetivos",
      "hints": [
        "O que acontece quando a solução requer trabalho fora do contrato?",
        "Que instrução faltante impede a expansão descontrolada do alcance?"
      ]
    },
    "agentic-033": {
      "prompt": "Uma equipe confia num agente PR mais do que num humano PR porque foi gerado automaticamente. Qual correção do modelo de contribuição é melhor?",
      "choices": [
        "Aplicar a mesma intenção, alcance, evidências, propriedade e normas políticas",
        "Aceitar o trabalho automatizado se a prosa soar consistente",
        "Não é necessário verificar porque a geração é repetível",
        "Rejeitar correções de autoria humana para manter um fluxo de trabalho uniforme"
      ],
      "explanations": [
        "A contribuição é avaliada com base em evidências de engenharia e não no tipo de autor.",
        "Prosa consistente não é validação.",
        "A geração não elimina defeitos ou requisitos de validação.",
        "A governação uniforme não exige a exclusão das contribuições humanas."
      ],
      "concept": "evitar preconceitos de automação",
      "hints": [
        "A mesma evidência seria suficiente de um contribuinte humano?",
        "Quais normas avaliam a mudança em vez de seu autor?"
      ]
    },
    "agentic-034": {
      "prompt": "Uma equipe só precisa de intervenção humana quando um agente propõe cruzar uma fronteira de repositório aprovada. Qual é o melhor projeto para preservar a velocidade?",
      "choices": [
        "Requer aprovação para todas as buscas locais",
        "Automatizar as etapas no escopo e fazer uma pausa na fronteira com uma proposta de alteração",
        "Conceder acesso em toda a organização para que nenhuma pausa seja necessária",
        "Permitir que o repositório transversal escreva e solicite a aprovação com efeitos retroativos"
      ],
      "explanations": [
        "A aprovação leitura por leitura não visa o limite significativo.",
        "Um portão focado preserva o progresso rotineiro e controla a expansão do escopo.",
        "O acesso mais amplo elimina, em vez de governar a fronteira.",
        "A aprovação retroativa não pode impedir o impacto não autorizado."
      ],
      "concept": "intervenção de limite desencadeada",
      "hints": [
        "Onde é que o trabalho proposto excede o escopo delegado?",
        "Pode o progresso normal continuar sem aprovar todas as observações?"
      ]
    },
    "agentic-035": {
      "prompt": "Um agente mantém um painel privado que relata sucesso, enquanto as verificações necessárias do PR mostram falha. Que artefato deve controlar a aceitação?",
      "choices": [
        "O painel privado porque é específico para o agente",
        "A última mensagem de chat porque é mais recente",
        "Os requisitos de verificação e revisão do repositório configurado",
        "A taxa histórica de sucesso do agente"
      ],
      "explanations": [
        "Um painel auxiliar não pode anular as regras de aceitação do repositório.",
        "A Recency não concede autoridade sobre os controles necessários.",
        "A aceitação pertence aos controles de desenvolvimento estabelecidos e obrigatórios.",
        "O desempenho histórico não valida esta alteração."
      ],
      "concept": "sinais de aceitação autorizados",
      "hints": [
        "Que sistema realmente impõe aceitação?",
        "Um resumo pode substituir a evidência que resume?"
      ]
    },
    "agentic-036": {
      "prompt": "Um agente de planejamento propõe alterar a configuração da produção apenas para saber como funciona o serviço. Qual alternativa respeita melhor os limites dos estágios?",
      "choices": [
        "Execute a troca durante um período de silêncio",
        "Peça primeiro credenciais ilimitadas.",
        "Trate a mudança exploratória como apenas leitura porque o seu propósito é aprender",
        "Inspectar a documentação e os ambientes de teste seguros antes de propor ações de produção"
      ],
      "explanations": [
        "Um período tranquilo não torna apropriadas mudanças de produção exploratória.",
        "Mais autoridade aumenta o risco sem resolver a necessidade de planejamento.",
        "O efeito de uma ação, não o seu propósito declarado, determina se é uma escrita.",
        "A observação segura reduz a incerteza sem confundir descoberta e execução."
      ],
      "concept": "Raciocínio versus ação ambiental",
      "hints": [
        "Um propósito exploratório elimina os efeitos colaterais de uma operação?",
        "Que fontes poderiam responder à pergunta sem impacto na produção?"
      ]
    },
    "agentic-037": {
      "prompt": "O plano de implementação de um agente inclui alterações, mas não os testes porque \"os revisores perceberão erros\". Qual é a melhor conclusão da revisão do plano?",
      "choices": [
        "Faltam as responsabilidades de validação e as provas",
        "A revisão humana torna desnecessária a validação automática",
        "O plano só precisa de um resumo mais longo",
        "Os testes devem ser escolhidos após a merge para evitar preconceitos"
      ],
      "explanations": [
        "Um plano confiável identifica como será demonstrado o resultado pretendido.",
        "A revisão e a validação automatizada fornecem provas complementares.",
        "O comprimento do resumo não fornece a validação faltante.",
        "A selecção do teste pós-merge é tarde demais para uma aceitação informada."
      ],
      "concept": "Planejamento da validação como um passo de primeira classe",
      "hints": [
        "Que evidência demonstrará o sucesso antes da aceitação?",
        "Um revisor pode verificar de forma independente todos os comportamentos por inspecção?"
      ]
    },
    "agentic-038": {
      "prompt": "Um agente de manutenção recebe uma ampla propriedade de um repositório, mas nenhum contato humano de escalada designado. Que fraqueza operacional é mais diretamente introduzida?",
      "choices": [
        "O agente não pode ler os arquivos de origem",
        "As decisões bloqueadas ou de alto risco não têm um caminho de resolução responsável",
        "GitHub não pode conservar o histórico de commit",
        "Todas as alterações de rotina requerem aprovação da produção"
      ],
      "explanations": [
        "A falta de propriedade não impede tecnicamente a leitura.",
        "Um titular de decisão definido é necessário quando a autoridade delegada é insuficiente.",
        "A retenção de compromissos não está relacionada à escalada.",
        "A falta de contacto não impõe por si só uma política de aprovação específica."
      ],
      "concept": "Propriedade operacional responsável",
      "hints": [
        "Quem decide quando o agente não pode prosseguir com segurança?",
        "O que acontece com um risco não resolvido à beira da autonomia?"
      ]
    },
    "agentic-039": {
      "prompt": "Uma equipe apresenta agentes para corrigir os defeitos de acessibilidade. Qual pacote de entrada suporta melhor uma implementação confiável?",
      "choices": [
        "Um screenshot e uma instrução para fazer o UI parecer moderno",
        "Um patch anterior com instruções para imitar o seu estilo",
        "Fluxos afetados, requisitos de acessibilidade, etapas de reprodução e verificações de aceitação",
        "Uma lista de todos os arquivos do repositório sem prioridade"
      ],
      "explanations": [
        "A modernização visual não é um contrato de acessibilidade.",
        "A imitação não identifica o defeito atual ou o comportamento esperado.",
        "Evidências e critérios relevantes para as tarefas tornam a atribuição implementável e testável.",
        "Um inventário não prioritário não estabelece a intenção."
      ],
      "concept": "Projeto de entrada relevante para tarefas",
      "hints": [
        "O que precisa o agente para reproduzir o problema?",
        "Como o proprietário vai distinguir uma correção real da mudança cosmética?"
      ]
    },
    "agentic-040": {
      "prompt": "Após um piloto bem-sucedido, uma equipe elimina os limites de escopo e as barreiras de revisão para todas as tarefas de agentes. Qual é a resposta arquitetônica mais adequada?",
      "choices": [
        "Usar o sucesso do piloto como autorização permanente",
        "Aumentar igualmente a autonomia de todos os repositórios",
        "Substituir os controles por pesquisas periódicas de satisfação",
        "Expandir a autonomia incrementalmente utilizando riscos, evidências e limites explícitos"
      ],
      "explanations": [
        "O sucesso passado não autoriza novas categorias de impacto.",
        "Os riscos de repositório e de tarefa podem variar substancialmente.",
        "As pesquisas não podem impor restrições operacionais.",
        "A expansão baseada em evidências preserva controles úteis à medida que o escopo muda."
      ],
      "concept": "expansão controlada da autonomia",
      "hints": [
        "Um piloto cobre os riscos de todas as futuras atribuições?",
        "Quais são os limites que devem ser alterados somente após a evidência e a revisão?"
      ]
    },
    "agentic-041": {
      "prompt": "Um agente deve resumir as questões abertas, mas não deve alterá-las. Qual é a configuração da ferramenta mais adequada?",
      "choices": [
        "Expor ferramentas de leitura de questões com credenciais de leitura",
        "Expor todas as ferramentas de problema e solicitar um comportamento somente para leitura",
        "Fornecer acesso à administração do repositório para uma configuração mais fácil",
        "Use um writing token e registros de mutações após a execução"
      ],
      "explanations": [
        "Tanto as ferramentas disponíveis como a autorização de serviço estão alinhadas com a tarefa de somente leitura.",
        "Um prompt não elimina a capacidade de mutação exposta.",
        "A administração excede a capacidade necessária.",
        "O registro após o fato não impede a escrita não autorizada."
      ],
      "concept": "Seleção de ferramentas baseadas em tarefas",
      "hints": [
        "Que capacidades são realmente necessárias?",
        "Onde pode o serviço externo impor o mesmo limite?"
      ]
    },
    "agentic-042": {
      "prompt": "Um desenvolvedor adiciona um URL de registro MCP e assume que todos os servidores não listados estão agora bloqueados. O que deve ser distinguido?",
      "choices": [
        "Descrições do registro e comprimento do contexto do modelo",
        "A configuração de descoberta de servidores e a aplicação da lista de servidores permitidos",
        "Arquivos de origem locais e autoria do Git commit",
        "Formatação da resposta à ferramenta e cobertura dos testes"
      ],
      "explanations": [
        "O comprimento do contexto não determina a admissão do servidor.",
        "Um registro cataloga os servidores; uma política de restrição determina o que é permitido.",
        "A autoria do compromisso não está relacionada com a admissão ao MCP.",
        "A formatação e a cobertura não impõem a adesão ao registro."
      ],
      "concept": "Registro versus lista de licenças",
      "hints": [
        "Saber onde encontrar servidores proíbe outros servidores?",
        "Qual configuração expressa a decisão de admissão?"
      ]
    },
    "agentic-043": {
      "prompt": "Um servidor remoto MCP se conecta com sucesso, mas suas ferramentas de escrita falham na autorização enquanto as leituras são bem sucedidas. O que deve ser investigado primeiro?",
      "choices": [
        "Se o modelo precisa de uma janela de contexto maior",
        "Se todas as falhas das ferramentas devem ser ignoradas",
        "A identidade autenticada e as permissões específicas da operação",
        "Se o servidor deve ser substituído por um endpoint público"
      ],
      "explanations": [
        "O comprimento do contexto não concede autorização de serviço.",
        "Ignorar erros de autorização representa erroneamente a execução.",
        "Conectividade bem-sucedida e leituras não implicam permissão para escrever.",
        "A alteração dos endpoints não resolve a autoridade da identidade pretendida."
      ],
      "concept": "Conectividade versus autorização",
      "hints": [
        "O que já demonstrou uma leitura bem-sucedida?",
        "Que limite adicional se aplica à mutação?"
      ]
    },
    "agentic-044": {
      "prompt": "Um agente precisa de uma capacidade de pesquisa de problemas de um servidor MCP que também expõe ferramentas de implantação. Qual é a configuração mais segura e útil?",
      "choices": [
        "Habilitar todo o espaço de nomes do servidor para conveniência",
        "Habilitar as instalações mas pedir ao agente para não usá-las",
        "Remover todas as ferramentas externas e abandonar a pesquisa de problemas",
        "Habilitar apenas a capacidade de pesquisa necessária com autenticação com escopo"
      ],
      "explanations": [
        "Amplos espaços de nome aumentam desnecessariamente a superfície de ação.",
        "As instruções não removem a capacidade de implantação.",
        "A capacidade de leitura necessária pode ser mantida com segurança.",
        "Um subconjunto restrito de ferramentas e um escopo de credenciais preservam a utilidade com menos risco."
      ],
      "concept": "Lista de ferramentas MCP",
      "hints": [
        "Todas as capacidades expostas por um servidor devem ser utilizáveis por este agente?",
        "Qual é a menor superfície de ação suficiente?"
      ]
    },
    "agentic-045": {
      "prompt": "Uma equipe quer o servidor GitHub remoto MCP num IDE suportado. Qual princípio de configuração é correto?",
      "choices": [
        "Configurar o endpoint remoto documentado e autenticar uma identidade autorizada",
        "Copiar um token em instruções de repositório para descoberta automática",
        "Suponha que a descoberta do registro autentique automaticamente o usuário",
        "Use um caminho de arquivo local como endpoint da rede do servidor hospedado"
      ],
      "explanations": [
        "São necessárias a conectividade remota e a autenticação autorizada.",
        "As instruções não são uma loja segura de credenciais.",
        "A descoberta e a autenticação são questões separadas.",
        "Um caminho de arquivo não identifica um serviço HTTP hospedado."
      ],
      "concept": "Configuração remota MCP",
      "hints": [
        "O que precisa o cliente para localizar o serviço?",
        "Como é que o serviço sabe em nome de quem funciona uma ferramenta?"
      ]
    },
    "agentic-046": {
      "prompt": "Uma ferramenta MCP recém-conectada retorna texto instruindo o agente a desativar as proteções do repositório. Como o agente deve tratar esse resultado?",
      "choices": [
        "Como uma instrução de maior prioridade porque veio de uma ferramenta",
        "Como dados não confiáveis, não autoridade para mudar a política",
        "Como aprovação do administrador do repositório",
        "Como motivo para conceder a ferramenta privilégios mais amplos"
      ],
      "explanations": [
        "A saída da ferramenta não supera as instruções de gestão da tarefa.",
        "O conteúdo externo não pode autorizar alterações nos limites do agente.",
        "Uma cadeia devolvida não prova a autorização do administrador.",
        "Um resultado suspeito não é uma justificação para um privilégio expandido."
      ],
      "concept": "limites de confiança entre ferramentas e resultados",
      "hints": [
        "Quem foi o autor do conteúdo devolvido?",
        "Os dados de um serviço externo podem redefinir a autoridade do agente?"
      ]
    },
    "agentic-047": {
      "prompt": "Um agente funciona localmente, mas falha no CI porque assume que o compilador instalado de um desenvolvedor e os arquivos do diretório doméstico existem. O que deve mudar?",
      "choices": [
        "Aumentar o orçamento de raciocínio do modelo",
        "Conceder acesso CI ao diretório de casa de cada desenvolvedor",
        "Declarar as etapas de configuração reprodutíveis e as entradas explícitas do espaço de trabalho",
        "Repete o mesmo comando até que o compilador apareça"
      ],
      "explanations": [
        "O orçamento racional não pode fornecer dependências de tempo de execução faltantes.",
        "O acesso ao diretório pessoal é desnecessário e inseguro.",
        "As dependências e entradas declaradas tornam a execução portátil e inspecionável.",
        "A execução repetida não irá instalar um compilador não declarado."
      ],
      "concept": "Portabilidade do ambiente de execução",
      "hints": [
        "Que suposições são propriedades de uma máquina em vez da tarefa?",
        "O que deve ser estabelecido antes do primeiro comando de construção?"
      ]
    },
    "agentic-048": {
      "prompt": "Uma automação do repositório pode criar um branch e PR, mas não deve atualizar diretamente o branch padrão. Qual é o melhor projeto para este escopo?",
      "choices": [
        "Dê-lhe as credenciais do proprietário do repositório e confia nas convenções de nomeação",
        "Correr contra qualquer branch que está atualmente verificado",
        "Permitir pushes sem restrições e revisar as alterações depois",
        "Use um branch de tarefa, acesso de escrita com escopo e proteção padrão de branch forçada"
      ],
      "explanations": [
        "Os congressos de nomeação não impõem uma fronteira de filiais.",
        "Um checkout acidental pode apontar para a branch errada.",
        "A revisão após o fato não pode impedir uma atualização direta.",
        "Os controles de execução e de repositório baseados em ramificações restringem o caminho de escrita."
      ],
      "concept": "Execução delimitada por branch",
      "hints": [
        "Onde devem ocorrer as alterações propostas antes da aceitação?",
        "Que controle permanece eficaz se o agente escolher um alvo errado?"
      ]
    },
    "agentic-049": {
      "prompt": "Um API relata uma interrupção transitória de serviço durante uma leitura idempotente. Qual é a política mais apropriada?",
      "choices": [
        "Tentativas limitadas, com espera e escalonamento após esgotar o orçamento",
        "Repetições imediatas sem limite",
        "Mudança de credenciais após cada pedido falhado",
        "Marque a leitura bem sucedida e invente uma resposta"
      ],
      "explanations": [
        "Os retrospectivos atrasados limitados resolvem falhas transitórias sem um ciclo descontrolado.",
        "Chamadas instantâneas ilimitadas podem amplificar uma interrupção.",
        "A rotação das credenciais não corrige a disponibilidade do serviço.",
        "A produção inventada corrompe as decisões a jusante."
      ],
      "concept": "Manutenção transitória de erros",
      "hints": [
        "É provável que outra tentativa mude o resultado?",
        "Como o comportamento pode ser reprovado para evitar que um incidente de serviço piore?"
      ]
    },
    "agentic-050": {
      "prompt": "Uma solicitação para criar uma issue excede o tempo limite após o envio, deixando o resultado desconhecido. O que o agente deve fazer antes de repetir a gravação?",
      "choices": [
        "Crie outro número com um título ligeiramente diferente",
        "Reconciliar se a questão prevista já existe",
        "Suponha que um timeout significa que o servidor não fez nada",
        "Passe para um token de administrador e repita o pedido"
      ],
      "explanations": [
        "Um título diferente pode criar um duplicado em vez de recuperar com segurança.",
        "A reconciliação evita a repetição de um escrito que já pode ter cometido.",
        "Um prazo de resposta não demonstra a ausência de efeitos colaterais do servidor.",
        "Mais privilégio não resolve a conclusão incerta."
      ],
      "concept": "Resultados de escrita ambíguos",
      "hints": [
        "O serviço poderia ter cometido antes da resposta ser perdida?",
        "Que evidência distingue a recuperação da duplicação?"
      ]
    },
    "agentic-051": {
      "prompt": "Uma API de implantação aceita chaves de idempotência. Um agente tenta novamente a mesma implantação lógica após uma falha de rede. Como deve usar a chave?",
      "choices": [
        "Gerar uma nova chave para cada tentativa de transporte",
        "Usar uma chave para cada implantação em todos os projetos",
        "Reutilizar a chave da operação nas novas tentativas, conforme o contrato da API",
        "Colocar a chave apenas no resumo final da auditoria"
      ],
      "explanations": [
        "Novas chaves podem fazer as recorrências parecerem novas operações.",
        "As operações não relacionadas não devem ser misturadas.",
        "Uma identidade de operação estável permite que o serviço reduplique tentativas suportadas.",
        "Os metadados pós-execução não podem influenciar a deduplicação do lado do servidor."
      ],
      "concept": "Repetições de mutação idempotentes",
      "hints": [
        "A nova tentativa é uma nova operação comercial ou outra tentativa na mesma?",
        "Qual componente realiza a deduplicação?"
      ]
    },
    "agentic-052": {
      "prompt": "Um trabalho de comentários PR também tem um gatilho manual. Execuções manuais falham porque não existe número PR. Qual é a melhor solução?",
      "choices": [
        "Adivinha o número PR do último branch.",
        "Dar ao trabalho permissões de repositório mais amplas",
        "Repete a falha do número faltante automaticamente",
        "Condicionar o trabalho específico de PR a um contexto validado de evento de PR"
      ],
      "explanations": [
        "Adivinhar os riscos de comentar um PR não relacionado.",
        "As permissões não criam dados de eventos faltantes.",
        "Uma nova tentativa não altera o contexto do gatilho.",
        "O gating de conhecimento de eventos impede ações que exigem a ausência de metadados PR."
      ],
      "concept": "Segurança de eventos de fluxo de trabalho defensivo",
      "hints": [
        "Todos os gatilhos fornecem os mesmos campos de eventos?",
        "Qual é a condição prévia para a execução da ação de comentários?"
      ]
    },
    "agentic-053": {
      "prompt": "Um trabalho de planejamento produz uma pequena bandeira validada que um trabalho de implementação dependente precisa. Qual é o caminho de dados GitHub Actions adequado?",
      "choices": [
        "Expor uma saída de job e consumi-la por meio da dependência",
        "Suponha que uma variável shell persista automaticamente em todos os empregos",
        "Descarregar o texto do console do trabalho anterior",
        "Armazenar a bandeira em um arquivo de código-fonte comprometido"
      ],
      "explanations": [
        "Os resultados dos empregos fornecem um contrato de valor transversal explícito.",
        "Trabalhos separados não compartilham estado de concha arbitrário.",
        "A raspagem de troncos é frágil e não é uma transferência estruturada.",
        "Cometer um estado de orquestração transitória altera desnecessariamente o repositório."
      ],
      "concept": "Output estruturado entre trabalhos",
      "hints": [
        "Qual mecanismo de dados é concebido para empregos dependentes?",
        "É o código de valor, um relatório ou um pequeno sinal de fluxo de trabalho?"
      ]
    },
    "agentic-054": {
      "prompt": "Um agente gera um grande relatório de teste em um trabalho para inspeção em outro. Qual é o melhor mecanismo para preservar o relatório?",
      "choices": [
        "Imprimir o relatório e esperar que o próximo trabalho herde stdout",
        "Carregar um artefato de fluxo de trabalho e baixá-lo quando necessário",
        "Colocar todo o relatório em uma saída de trabalho booleano curto",
        "Armazenar o relatório apenas na conversa privada de um agente."
      ],
      "explanations": [
        "O Stdout não é uma transferência automática de arquivos.",
        "Os artefatos conservam arquivos para uso transversal e revisão posterior.",
        "Uma bandeira não pode representar o arquivo completo de provas.",
        "A conversa privada não fornece ao trabalho dependente o relatório."
      ],
      "concept": "Transferência de artefatos do fluxo de trabalho",
      "hints": [
        "O consumidor precisa de um valor ou de um arquivo?",
        "O que deve continuar a ser inspecionável após a saída do processo de produção?"
      ]
    },
    "agentic-055": {
      "prompt": "Uma chamada de ferramenta falha com uma resposta explícita de permissão insuficiente. A tarefa não autoriza a ampliação de privilégios. Qual é a melhor resposta?",
      "choices": [
        "Repetição com todos os tokens disponíveis",
        "Desativar as verificações de permissão do serviço",
        "Registrar a operação bloqueada e solicitar um caminho de resolução autorizado",
        "Salte silenciosamente a operação e relate sucesso completo"
      ],
      "explanations": [
        "Experimentar tokens não relacionados corre o risco de atravessar os limites da identidade.",
        "As verificações de permissão não são erros a ignorar.",
        "Uma falha de permissão requer uma decisão da autoridade, não voltas cegas.",
        "Saltar uma ação necessária sem divulgação incorrece em concluir."
      ],
      "concept": "escalada de falhas de autorização",
      "hints": [
        "A repetição alterará a autorização do telefonista?",
        "Quem pode legitimamente decidir se o acesso deve ser ampliado?"
      ]
    },
    "agentic-056": {
      "prompt": "O download de dependência aprovado de um agente é bloqueado pelo tempo de execução firewall. Qual é o próximo passo mais seguro?",
      "choices": [
        "Desativar o firewall para toda a sessão",
        "Descarregar o pacote através de um espelho arbitrário",
        "Comprometer as credenciais armazenadas em cache de um desenvolvedor para acessar outra fonte",
        "Verificar o destino necessário e solicitar uma alteração de acesso restrita e revisada"
      ],
      "explanations": [
        "A eliminação geral dos controles de saída excede a necessidade demonstrada.",
        "Um espelho arbitrário introduz riscos na cadeia de suprimentos.",
        "As credenciais não devem ser comprometidas.",
        "Uma exceção revisada precisa aborda a restrição ambiental."
      ],
      "concept": "Manutenção de restrições de rede",
      "hints": [
        "O destino bloqueado é realmente necessário e confiável?",
        "Quão estreita pode ser a mudança de acesso?"
      ]
    },
    "agentic-057": {
      "prompt": "Um servidor local MCP pode inspecionar arquivos sensíveis na máquina do desenvolvedor. O que deve considerar a revisão da configuração?",
      "choices": [
        "As suas permissões de processo e recursos acessíveis, não apenas os nomes das ferramentas listadas",
        "Só se o servidor está em localhost",
        "Só se aparece em um resultado de pesquisa",
        "Se o seu nome inclui a palavra seguro"
      ],
      "explanations": [
        "A própria autoridade de execução do servidor determina o que ele pode realmente acessar.",
        "Localhost é um local, não prova de capacidade segura.",
        "A descoberta não cria confiança.",
        "Um nome não pode impor um limite de recursos."
      ],
      "concept": "Autoridade de execução local MCP",
      "hints": [
        "Sob a identidade de que sistema operacional funciona o servidor?",
        "Uma interface de aparência estreita pode esconder o acesso subjacente amplo?"
      ]
    },
    "agentic-058": {
      "prompt": "Um servidor MCP é aprovado para uso, mas uma nova ferramenta adicionada pode excluir registros de produção. O que resulta da aprovação do servidor?",
      "choices": [
        "Todas as ferramentas futuras são automaticamente seguras para todas as tarefas",
        "A nova capacidade ainda precisa de revisão e restrições específicas de tarefas",
        "A exclusão não precisa mais de autorização de serviço",
        "Descrições de ferramentas podem substituir as verificações de permissão de tempo de execução"
      ],
      "explanations": [
        "A aprovação de um servidor não justifica o crescimento ilimitado das capacidades.",
        "As novas mutações alteram o raio da explosão e devem ser avaliadas separadamente.",
        "A admissão do servidor não contorna a autorização do backend.",
        "As descrições informam a selecção, mas não impõem o acesso."
      ],
      "concept": "Revisão da expansão das capacidades",
      "hints": [
        "A superfície de ação aprovada mudou?",
        "A confiança a nível do servidor responde ao risco a nível da operação?"
      ]
    },
    "agentic-059": {
      "prompt": "O esquema de entrada de uma ferramenta requer um identificador de repositório explícito. O agente não tem a certeza de qual dos dois repositórios de nomes semelhantes é destinado. O que deve fazer?",
      "choices": [
        "Escolha o repositório que aparecer primeiro",
        "Chamem ambos os repositórios para aumentar a cobertura",
        "Resolver o alvo canônico a partir do contexto autorizado da tarefa antes da chamada",
        "Omitir o campo e confiar em um valor padrão não documentado"
      ],
      "explanations": [
        "A encomenda não é uma prova do alcance previsto.",
        "Chamando ambos amplia o escopo sem autorização.",
        "A resolução-alvo impede uma chamada válida contra o recurso errado.",
        "Um padrão não documentado pode atacar silenciosamente o repositório errado."
      ],
      "concept": "Argumento de ferramenta e validação de alvo",
      "hints": [
        "Os argumentos sintacticamente válidos ainda podem identificar o recurso errado?",
        "Que evidência da tarefa estabelece o alvo?"
      ]
    },
    "agentic-060": {
      "prompt": "Um fluxo de trabalho precisa saber qual evento desencadeou a execução, não um valor de configuração gerenciado centralmente. Qual contexto do GitHub Actions é adequado?",
      "choices": [
        "vars",
        "secrets",
        "Uma variável terminal herdada",
        "github"
      ],
      "explanations": [
        "O contexto vars contém valores configurados em vez de metadados de eventos.",
        "Os segredos não são a fonte da identidade do gatilho.",
        "O estado do terminal não é um contrato de eventos confiável.",
        "O contexto github expõe os metadados de execução e evento."
      ],
      "concept": "Selecção do contexto do fluxo de trabalho",
      "hints": [
        "Estes dados são configurações ou informações de eventos de tempo de execução?",
        "Qual contexto descreve a invocação do fluxo de trabalho?"
      ]
    },
    "agentic-061": {
      "prompt": "Um agente executa testes em um checkout, mas informa resultados de outra branch após um script mudar de diretório. O que a rota de execução deve validar?",
      "choices": [
        "Diretório de trabalho, repositório e revisão antes de comandos com efeitos significativos",
        "Só o nome do agente.",
        "Só que um processo de teste saiu em algum lugar",
        "Número de núcleos CPU disponíveis"
      ],
      "explanations": [
        "A identidade explícita de execução impede que os comandos válidos validem o código errado.",
        "Os nomes da tela não identificam o alvo do sistema de arquivos.",
        "Uma saída do processo sem proveniência é uma prova insuficiente.",
        "A contagem de CPU não estabelece qual código foi testado."
      ],
      "concept": "Verificação de contexto de execução",
      "hints": [
        "Em que código operava o comando?",
        "Quais pressupostos podem ser invalidados por uma alteração de diretório?"
      ]
    },
    "agentic-062": {
      "prompt": "Um agente recebe uma resposta de limite de solicitações que informa quanto aguardar antes de tentar novamente. Qual resposta favorece uma operação robusta?",
      "choices": [
        "Iniciar chamadores paralelas para evitar o limite",
        "Respeitar a espera indicada dentro de uma política de tentativas limitadas",
        "Identidades rotativas para evitar a contabilidade",
        "Repita imediatamente porque as leituras são inofensivas"
      ],
      "explanations": [
        "A pressão paralela pode piorar o estrangulamento.",
        "Respeitar as orientações de serviço reduz a carga e preserva um caminho controlado de recuperação.",
        "A rotação de identidade não é um método adequado de recuperação do limite de taxa.",
        "As operações de leitura ainda consomem capacidade de serviço limitada."
      ],
      "concept": "Repetições conscientes dos limites de taxa",
      "hints": [
        "Que sinal forneceu o serviço sobre o tempo de recuperação?",
        "Será que o tráfego por si só pode suportar o fracasso?"
      ]
    },
    "agentic-063": {
      "prompt": "Uma ferramenta de mutação retorna um erro de validação porque um campo requerido está faltando. Qual é o melhor passo a seguir?",
      "choices": [
        "Repetição da mesma solicitação com retrocesso exponencial",
        "Ignore o erro se o nome da ferramenta foi correto",
        "Validar e corrigir os argumentos usando o contrato de ferramenta",
        "Aumentar o intervalo de tempo da rede para permitir a validação"
      ],
      "explanations": [
        "O back-off não pode fornecer um argumento faltante.",
        "A selecção da ferramenta correta não faz com que uma chamada inválida seja bem-sucedida.",
        "Uma falha de entrada determinista requer uma correção de entrada.",
        "O timeout da rede não altera a validação do esquema."
      ],
      "concept": "Erros deterministas versus transitorios de ferramentas",
      "hints": [
        "Um pedido inalterado seria aceito mais tarde?",
        "Qual parte da chamada está sob o controle do telefonista?"
      ]
    },
    "agentic-064": {
      "prompt": "Uma ferramenta de correção relata uma revisão de base obsoleta em vez de aplicar uma edição. O que deve fazer o agente?",
      "choices": [
        "Forçar a sobreescrever o arquivo do seu antigo buffer",
        "Tente novamente até que a verificação de versão seja ignorada",
        "Excluir o arquivo e recriar o conteúdo antigo",
        "Leia a revisão atual e conciliar a alteração prevista"
      ],
      "explanations": [
        "Forçar o conteúdo obsoleto pode destruir o trabalho simultâneo.",
        "As verificações de versão protegem a coerência e não devem ser ignoradas.",
        "A recreação ainda sobrepõe as novas intenções.",
        "A reconciliação aplica a alteração autorizada ao estado atual."
      ],
      "concept": "Manutenção de simultânea optimista",
      "hints": [
        "O que mudou entre a leitura e a escrita?",
        "Que informações devem ser atualizadas antes de tentar outra edição?"
      ]
    },
    "agentic-065": {
      "prompt": "Um agente deve alterar o repositório A, mas sua credencial também pode escrever o repositório B. Qual configuração restringe melhor o escopo eficaz?",
      "choices": [
        "Limitar as credenciais e os objetivos das ferramentas para o repositório A",
        "Menção do repositório A apenas no título PR",
        "Permitir ambos os repositórios mas revisar semanalmente",
        "Use o repositório mais fácil de acessar"
      ],
      "explanations": [
        "A autorização baseada em recursos e os objetivos validados reforçam o limite de atribuição.",
        "Um título não restringe o acesso.",
        "A revisão semanal não pode impedir escritos não intencionais.",
        "A conveniência não define o escopo autorizado."
      ],
      "concept": "Permissões específicas do repositório",
      "hints": [
        "O que acontece se o agente selecionar o argumento de repositório errado?",
        "A autorização pode reduzir esse possível impacto?"
      ]
    },
    "agentic-066": {
      "prompt": "Um agente da CI precisa de um segredo para uma ferramenta externa. Qual é a melhor abordagem?",
      "choices": [
        "Inclui-o na descrição da tarefa do agente",
        "Injetá-lo em tempo de execução apenas no componente que precisa dele",
        "Salve-o em um arquivo de exemplo comprometido MCP",
        "Faça eco no PR para que os operadores possam reproduzir a chamada"
      ],
      "explanations": [
        "O texto da tarefa pode persistir ou ser exposto além da ferramenta.",
        "As injecções de tempo de execução visuais limitam a exposição desnecessária.",
        "A configuração comprometida não é um limite secreto.",
        "O conteúdo do PR expõe as credenciais em vez de permitir uma reprodução segura."
      ],
      "concept": "Limites de credenciais em tempo de execução",
      "hints": [
        "Qual componente realmente precisa da credencial?",
        "Onde podem ser guardados o texto e os registros das tarefas?"
      ]
    },
    "agentic-067": {
      "prompt": "Uma ferramenta inicia com sucesso uma construção assíncrona e retorna um identificador de execução. O que deve acontecer antes que o agente afirme que a construção passou?",
      "choices": [
        "Tratar a aceitação de um pedido como um sucesso",
        "Esperar um breve atraso fixo e assumir conclusão",
        "Consultar o resultado final da execução identificada",
        "Contar o número de linhas de registro de construção"
      ],
      "explanations": [
        "Começar o trabalho não é evidência do seu resultado.",
        "Um atraso fixo não estabelece a conclusão.",
        "O resultado final da execução real apoia a alegação de sucesso.",
        "O volume do registro não indica a passagem ou a falha."
      ],
      "concept": "Completamento assíncrono da ferramenta",
      "hints": [
        "O que a resposta inicial confirmou?",
        "Quais evidências distinguem trabalho na fila, em execução e concluído com sucesso?"
      ]
    },
    "agentic-068": {
      "prompt": "Uma atualização automática altera três configurações externas antes da quarta falhar. As operações não são transacionais. O que deve fazer a recuperação primeiro?",
      "choices": [
        "Suponha que todas as quatro mudanças foram revertidas",
        "Rerun todos escrevem sem verificar os seus resultados",
        "Declare a tarefa bem-sucedida porque a maioria dos escritos funcionou",
        "Inventariar os efeitos confirmados e seguir um plano autorizado de compensação ou escalonamento"
      ],
      "explanations": [
        "Os serviços não transacionais não implicam um retrocesso automático.",
        "A repetição cega pode duplicar ou compor efeitos.",
        "O sucesso parcial não cumpre o contrato de tarefa completo.",
        "A recuperação precisa de um registro preciso de efeitos e de um caminho seguro de decisão."
      ],
      "concept": "Execução externa parcial",
      "hints": [
        "Que efeitos são conhecidos por ter ocorrido?",
        "Requer autoridade para desfazer uma ação?"
      ]
    },
    "agentic-069": {
      "prompt": "Uma equipe usa um agente personalizado no Copilot SDK e omite a restrição tools, supondo que a omissão significa nenhuma ferramenta. O que é necessário entender sobre a configuração documentada?",
      "choices": [
        "Se tools for omitido ou null, todas as ferramentas serão permitidas; restringir a lista explicitamente",
        "Ferramentas omitidas sempre tornam o agente apenas de leitura",
        "O nome da tela determina automaticamente as ferramentas permitidas",
        "O título de papel do prompt é convertido em uma política de permissão"
      ],
      "explanations": [
        "O padrão documentado é de acesso amplo, portanto, a omissão não é uma política de negação.",
        "O comportamento de somente leitura não deve ser inferido da omissão.",
        "Um nome de exibição é metadados de apresentação.",
        "Uma descrição de função não impõe automaticamente permissões para ferramentas."
      ],
      "concept": "Restrições explícitas às ferramentas de agentes personalizados",
      "hints": [
        "Qual é o padrão documentado da configuração?",
        "Pode-se confundir uma restrição faltante com uma fronteira segura?"
      ]
    },
    "agentic-070": {
      "prompt": "Uma organização configurou acesso MCP restrito aos servidores do registro em uma IDE compatível. Um servidor local está bloqueado. O que verificar antes de mudar a política?",
      "choices": [
        "Se os servidores locais são automaticamente isentos",
        "Se o servidor é uma entrada de registro aprovada com o identificador correspondente",
        "Se as descrições das ferramentas são especialmente detalhadas",
        "Se o desenvolvedor pode renomeá-lo para um servidor aprovado"
      ],
      "explanations": [
        "A localização local não exime inerentemente um servidor das restrições de registro.",
        "Membro aprovado e matéria de identidade correspondente no escopo da política declarada.",
        "A qualidade da descrição não satisfaz a adesão.",
        "Impersonar outra entrada derrota a intenção de governança."
      ],
      "concept": "Admissão de servidores locais",
      "hints": [
        "Que identidade compara a política?",
        "Um transporte local muda o status de aprovação do servidor?"
      ]
    },
    "agentic-071": {
      "prompt": "Uma equipe assume que a sua política de registro privado do MCP limita automaticamente o agente da nuvem do Copilot. Qual resposta de configuração corresponde às orientações atuais da GitHub?",
      "choices": [
        "Suponha que todas as superfícies Copilot aplicem políticas de registro idênticas",
        "Remova a configuração do repositório MCP porque o registro o substitui",
        "Verificar a aplicabilidade específica da superfície; a política de registro privado não se aplica ao agente em nuvem",
        "Conceder aos agentes da nuvem todas as ferramentas registradas para garantir a compatibilidade"
      ],
      "explanations": [
        "A aplicabilidade das políticas varia entre as superfícies Copilot.",
        "A configuração MCP de agente de nuvem ainda precisa de sua própria revisão.",
        "A documentação atual sobre as vigas identifica explícitamente esta limitação da política.",
        "A presença do registro não justifica um acesso amplo às capacidades."
      ],
      "concept": "Aplicabilidade da política MCP específica da superfície",
      "hints": [
        "Um controle de IDE é necessariamente um controle de tempo de execução em nuvem?",
        "Que documentação define a superfície da aplicação?"
      ]
    },
    "agentic-072": {
      "prompt": "Um comando de shell gerado por um agente inserir um título de problema diretamente na sintaxe executável. Qual é a melhor melhoria do caminho de execução?",
      "choices": [
        "Títulos de emissão de confiança porque são armazenados em GitHub",
        "Peça ao modelo para prometer não gerar metacaráter",
        "Execute o comando com acesso de administrador para evitar erros",
        "Passar valores não confiáveis como dados manuseados de forma segura e validar a intenção do comando"
      ],
      "explanations": [
        "O conteúdo do repositório pode ainda conter informações adversas.",
        "Uma promessa não impõe a separação do código de dados.",
        "Um privilégio maior aumenta os possíveis danos.",
        "O tratamento dos dados e a validação da intenção reduzem o risco de injecção."
      ],
      "concept": "Manutenção segura de argumentos de comando",
      "hints": [
        "Onde o texto externo se torna estrutura executável?",
        "A mesma operação pode ser expressa sem interpretar esse texto como código?"
      ]
    },
    "agentic-073": {
      "prompt": "Um trabalho de construção tem acesso ao repositório apenas para leitura. Só um trabalho posterior de criação de PR precisa de acesso de escrita. Qual design de permissão é mais apropriado?",
      "choices": [
        "Manter o build somente leitura e conceder ao job posterior apenas as gravações necessárias",
        "Grant escrever acesso global para que cada trabalho é consistente",
        "Usar um token de administrador pessoal em todo",
        "Desativar autenticação e confiar em nomes de sucursais"
      ],
      "explanations": [
        "A elevação específica do trabalho limita a exposição ao estágio que precisa dela.",
        "A Global escreve para ampliar desnecessariamente a autoridade da construção.",
        "Um token de administrador excede as necessidades de ambos os empregos.",
        "A nomeação do branch não pode substituir a autorização."
      ],
      "concept": "elevação de permissão de trabalho",
      "hints": [
        "Qual estágio muta realmente um recurso?",
        "Que autoridade permanece exposta se uma dependência de construção for comprometida?"
      ]
    },
    "agentic-074": {
      "prompt": "Uma configuração local usa um endpoint remoto MCP que é inacessível da rede de execução em nuvem. O que deve verificar a preparação para a implantação?",
      "choices": [
        "Só que a URL funcionou no laptop do autor.",
        "Accessibilidade, autenticação e compatibilidade de políticas a partir do tempo de execução real",
        "Só que o endpoint aparece no prompt",
        "Que todas as verificações de rede estão desativadas"
      ],
      "explanations": [
        "A conectividade do portátil não prova a conectividade no tempo de execução da nuvem.",
        "A preparação da ferramenta deve ser estabelecida no ambiente que a executará.",
        "Mencionar o endpoint em um prompt não configura uma conexão.",
        "A desativação das verificações elimina os limites úteis em vez de provar a compatibilidade."
      ],
      "concept": "Preparação MCP específica para o tempo de execução",
      "hints": [
        "De que rede e identidade se originará o pedido?",
        "Que suposições mudam quando a execução muda os ambientes?"
      ]
    },
    "agentic-075": {
      "prompt": "Uma ferramenta de pesquisa retorna apenas a primeira página de problemas de correspondência. O agente deve fazer um inventário completo. O que deve fazer?",
      "choices": [
        "Trate a primeira página como exaustiva",
        "Estimação dos itens perdidos da distribuição de títulos",
        "Seguir a paginação documentada dentro dos limites da tarefa ou informar a cobertura incompleta",
        "Repita o pedido da primeira página até que a contagem pareça estável"
      ],
      "explanations": [
        "Uma página limitada não estabelece a integridade.",
        "Os números estimados não são um inventário.",
        "A paginação ou uma limitação explícita preservam a comunicação baseada em evidências.",
        "Repetição da mesma página não recupera resultados omitidos."
      ],
      "concept": "Completidade do resultado da ferramenta",
      "hints": [
        "A resposta indica truncation ou outra página?",
        "Que evidência apoia a palavra completa?"
      ]
    },
    "agentic-076": {
      "prompt": "Uma ferramenta de execução retorna o estado de saída zero, mas sua saída diz \"nenhum teste descoberto\". A tarefa requer execução de teste. O que deve concluir o agente?",
      "choices": [
        "Todos os testes previstos aprovados",
        "Não são necessários testes porque a ferramenta foi bem sucedida",
        "A tarefa é concluída se a compilação for aprovada",
        "O comando foi concluído, mas as provas de teste exigidas ainda faltam."
      ],
      "explanations": [
        "Nenhum teste descoberto não é prova de que os testes previstos foram aprovados.",
        "O contrato de tarefa ainda exige execução.",
        "A compilação não substitui as provas especificadas.",
        "O êxito do processo deve ser interpretado em função do resultado real da ferramenta."
      ],
      "concept": "Interpretação semântica do sucesso das ferramentas",
      "hints": [
        "O que o comando realmente validou?",
        "Um processo bem sucedido é idêntico a uma tarefa bem sucedida?"
      ]
    },
    "agentic-077": {
      "prompt": "Uma equipe desenha um rollback para uma configuração gerada por um agente. Qual preparação é mais útil?",
      "choices": [
        "Registrar a revisão anterior comprovadamente funcional e uma rota de restauração testada e autorizada",
        "Suponha que a exclusão do novo branch restabeleça todos os sistemas externos",
        "Confie no modelo para reconstruir valores antigos a partir da memória",
        "Remover todos os registros de execução após a implantação"
      ],
      "explanations": [
        "Uma meta de recuperação precisa e um caminho sustentam uma restauração confiável.",
        "Os efeitos externos não são eliminados simplesmente eliminando um branch.",
        "Reconstruir a memória não é uma fonte de recuperação confiável.",
        "A exclusão de registros elimina a evidência necessária para a recuperação."
      ],
      "concept": "Preparação para reversão",
      "hints": [
        "Que estado deve restaurar a recuperação?",
        "O operador pode identificar esse estado independentemente da memória do agente?"
      ]
    },
    "agentic-078": {
      "prompt": "Um agente usa uma ferramenta suportada para criar um PR, mas as regras do repositório rejeitam a operação proposta. O que deve fazer?",
      "choices": [
        "Usar outra identidade para contornar a rejeição",
        "Explicar o conflito de regras e seguir um caminho de conformidade aprovado",
        "Desativar as regras porque a tarefa solicitou um PR",
        "Relatar o PR como criado porque a ferramenta estava disponível"
      ],
      "explanations": [
        "A troca de identidades para contornar controles excede a autorização.",
        "As regras do repositório restringem o caminho de execução permitido.",
        "Um pedido de tarefa não autoriza a remoção de proteções.",
        "A disponibilidade de ferramentas não é prova de que um recurso foi criado."
      ],
      "concept": "conformidade com o controle dos repositórios",
      "hints": [
        "A capacidade implica permissão para contornar as regras de aceitação?",
        "O que tornaria a próxima tentativa compatível?"
      ]
    },
    "agentic-079": {
      "prompt": "Um fluxo de trabalho transfere um nome-alvo gerado por um agente para um trabalho de implantação privilegiado. Qual é a proteção mais importante antes da utilização?",
      "choices": [
        "Confia nele, porque é um trabalho.",
        "Use o alvo com permissões de administrador primeiro",
        "Validar em relação aos objetivos autorizados e ao contexto de tarefa aprovado",
        "Converte-o em letras maiúsculas para ser seguro"
      ],
      "explanations": [
        "A transferência estruturada não torna os dados gerados confiáveis.",
        "Privilegio não valida o alvo.",
        "A validação impede uma transferência válida por outro motivo da autoridade redirecionadora.",
        "A formatagem não estabelece autorização."
      ],
      "concept": "Validação das entradas das ferramentas de trabalho cruzado",
      "hints": [
        "O que faz com que o destino seja autorizado e não apenas bem formado?",
        "Um mecanismo de transporte estabelece confiança no seu conteúdo?"
      ]
    },
    "agentic-080": {
      "prompt": "Um agente deve parar um processo de fundo que lançou para testes. Outros usuários têm processos semelhantes no host compartilhado. Qual é a abordagem mais segura?",
      "choices": [
        "Parar todos os processos com o mesmo nome executável",
        "Reiniciar o host compartilhado",
        "Deixar todos os processos em execução para evitar identificar a propriedade",
        "Usar o processo gravado ou sessão de identidade para parar apenas seu próprio ajudante"
      ],
      "explanations": [
        "A interrupção baseada no nome pode afectar os usuários não relacionados.",
        "Uma reinicialização do hospedeiro tem um raio de explosão excessivo.",
        "Os ajudantes de propriedade ainda precisam de limpeza do ciclo de vida.",
        "As licenças de propriedade registadas permitem uma limpeza específica sem perturbar outros trabalhos."
      ],
      "concept": "Ciclo de vida do recurso de execução",
      "hints": [
        "Que recurso criou esta tarefa?",
        "Como a limpeza pode distinguir a propriedade de um nome executável compartilhado?"
      ]
    },
    "agentic-081": {
      "prompt": "Uma ferramenta externa altera o seu esquema de resposta. O analisador do agente agora trata campos de status faltantes como sucesso. O que deve ser corrigido?",
      "choices": [
        "Validar os contratos de resposta e falhar com segurança em resultados não reconhecidos",
        "Default todos os campos ausentes para conclusão bem-sucedida",
        "Aumentar o número de retestes sem alterar a análise",
        "Ignorar a saída da ferramenta e confiar na operação prevista"
      ],
      "explanations": [
        "Os esquemas desconhecidos não devem tornar-se sinais de sucesso fabricados.",
        "A falta de informação não prova o sucesso.",
        "As tentativas retrospectivas não corrigem as suposições deterministas do analisador.",
        "A intenção não pode estabelecer o resultado de uma ação externa."
      ],
      "concept": "Validação de contratos de resposta a ferramentas",
      "hints": [
        "O que é realmente estabelecido por um estado de ausência?",
        "Como deve um resultado desconhecido diferir de um resultado confirmado?"
      ]
    },
    "agentic-082": {
      "prompt": "Uma ferramenta pode publicar lançamentos, mas a tarefa atual só requer um rascunho de PR. O que deve inferir o agente da disponibilidade de ferramentas?",
      "choices": [
        "A publicação é implicitamente autorizada",
        "A capacidade existe, mas a tarefa ainda limita o uso permitido",
        "Todas as ferramentas expostas devem ser chamadas uma vez",
        "Os trabalhos de projeto não podem prosseguir até que a publicação seja habilitada"
      ],
      "explanations": [
        "As capacidades disponíveis não ampliam a autorização da tarefa.",
        "O escopo das tarefas permanece vinculativo mesmo quando uma ferramenta pode fazer mais.",
        "O uso de ferramentas deve servir a tarefa em vez de maximizar as chamadas.",
        "Um projeto de PR não requer publicação."
      ],
      "concept": "Capacidade versus autoridade de tarefa",
      "hints": [
        "O que autorizou o usuário como entregable?",
        "Uma ação exposta faz automaticamente parte do resultado?"
      ]
    },
    "agentic-083": {
      "prompt": "A construção CI de um agente não pode chegar a um serviço de pacotes porque a sua autenticação expirou. Qual é a recuperação mais direcionada?",
      "choices": [
        "Reescrever a aplicação para remover todas as dependências",
        "Reprova a credencial expirada indefinidamente",
        "Renovar a autenticação através do caminho aprovado de gestão de segredos",
        "Incorporar um token de trabalho no manifesto do pacote"
      ],
      "explanations": [
        "Uma reescrita ampla não aborda a falha ambiental identificada.",
        "A autenticação expirada não se reparará através da repetição.",
        "A renovação aprovada restabelece a capacidade necessária sem exposição de credenciais.",
        "Os manifestos não são um lugar seguro para tokens."
      ],
      "concept": "Recuperação de falhas de autenticação",
      "hints": [
        "Que camada está a falhar antes que a construção possa continuar?",
        "Como é possível restaurar o acesso sem mudar o comportamento da fonte?"
      ]
    },
    "agentic-084": {
      "prompt": "Um fluxo de trabalho CI pode ser desencadeado em conteúdo PR não confiável. Ele também tem um trabalho privilegiado que pode modificar as configurações do repositório. Qual é o limite mais importante?",
      "choices": [
        "Use títulos mais descritores PR",
        "Deixe o agente decidir se o conteúdo recebido parece confiável",
        "Fazer as credenciais privilegiadas disponíveis a cada passo para a coerência",
        "Separar o processamento não confiável da execução privilegiada com validação explícita e portões"
      ],
      "explanations": [
        "Os títulos não impõem limites de confiança.",
        "O critério de modelo subjetivo não é um limite de credenciais suficiente.",
        "Uma ampla exposição a credenciais aumenta o impacto do código não confiável.",
        "A separação limita o caminho das entradas não confiáveis às operações consequentes."
      ],
      "concept": "Projeto de limites de confiança CI",
      "hints": [
        "Quais entradas podem ser influenciadas por um colaborador externo?",
        "Onde essas entradas poderiam adquirir autoridade de escrita?"
      ]
    },
    "agentic-085": {
      "prompt": "O comando de um agente falha porque falta um executável necessário no ambiente. Qual verificação prévia teria detectado isso mais cedo?",
      "choices": [
        "Verificar as ferramentas e versões necessárias no ambiente de execução previsto",
        "Verifique apenas se o repositório tem um README",
        "Pergunte ao modelo se ele se lembra de usar o comando antes",
        "Conte o número de execuções de fluxo de trabalho anteriores bem sucedidas"
      ],
      "explanations": [
        "As verificações de capacidade de execução verificam diretamente o pré-requisito faltante.",
        "Um README não demonstra a instalação de uma dependência.",
        "A experiência do modelo passado não descreve este tempo de execução.",
        "As execuções históricas podem ter usado diferentes imagens ou dependências."
      ],
      "concept": "Controle ambiental antes do voo",
      "hints": [
        "Que pré-requisito falhou antes que a obra do comando realmente começasse?",
        "Onde deve verificar-se esse pré-requisito?"
      ]
    },
    "agentic-086": {
      "prompt": "Uma equipe migra um agente de uma máquina de desenvolvimento para um efêmero runner. O que deve acontecer com dependências e credenciais?",
      "choices": [
        "Suponha que ambos persistem da sessão anterior de desenvolvedor",
        "Recrear dependências explicitamente e injetar credenciais autorizadas para essa execução",
        "Copie todo o diretório de casa do desenvolvedor para a imagem runner",
        "Desativar a autenticação para que a execução efêmera permaneça simples"
      ],
      "explanations": [
        "Um efêmero runner não herda estado local arbitrário.",
        "Configuração reprodutível e tempo de execução de alcance secrets adequado a ambientes descartáveis.",
        "Copiar amplamente o estado pessoal expõe dados desnecessários e secrets.",
        "A efemeralidade não elimina os requisitos de autenticação."
      ],
      "concept": "Configuração de execução efêmera",
      "hints": [
        "O que existe num novo runner no arranque?",
        "Qual estado local é essencial, e qual nunca deve ser copiado?"
      ]
    },
    "agentic-087": {
      "prompt": "Uma ferramenta altera corretamente uma configuração externa, mas o checkpoint local posterior falha. Ao reiniciar, o que deve acontecer antes de outra gravação?",
      "choices": [
        "Suponha que a escrita externa falhou com o checkpoint",
        "Sempre restaurar defeitos de fábrica",
        "Reconciliar o estado externo com os registros de operação e recuperação previstos",
        "Escolha um novo alvo para que o estado anterior não importe mais."
      ],
      "explanations": [
        "A falha de persistência local não desfaz uma ação externa concluída.",
        "A restauração da fábrica pode ser não autorizada e destrutiva.",
        "A reconciliação trata da lacuna entre os efeitos externos e os registros locais.",
        "A alteração das metas não resolve a operação original."
      ],
      "concept": "Efeitos externos versus persistência local",
      "hints": [
        "A escrita externa e o checkpoint foram uma única transação?",
        "O que pode revelar o serviço sobre o estado atual da operação?"
      ]
    },
    "agentic-088": {
      "prompt": "Um pacote de servidor MCP é atualizado e agora solicita acesso a um sistema de arquivos mais amplo. O que deve fazer a equipe antes de adotar a atualização?",
      "choices": [
        "Aceitar porque todas as atualizações são melhorias de segurança",
        "Aprova com base apenas em um nome de servidor inalterado",
        "Efeitos da concessão de acesso e inspecção após um mês",
        "Revisar a capacidade alterada e testá-la num ambiente restrito"
      ],
      "explanations": [
        "Uma atualização pode aumentar o risco mesmo quando inclui correções.",
        "Um nome estável não implica um comportamento ou permissões estáveis.",
        "A revisão atrasada expõe os recursos antes da avaliação do risco.",
        "A revisão em estilo de dependência e os testes restritos avaliam as fronteiras alteradas."
      ],
      "concept": "MCP governança dependência",
      "hints": [
        "O que mudou na autoridade efetiva do servidor?",
        "A aprovação prévia abrange o acesso recém solicitado?"
      ]
    },
    "agentic-089": {
      "prompt": "Um agente precisa de comentar um PR mas não o código push. Que princípio de autorização deve orientar o seu fluxo de trabalho?",
      "choices": [
        "Conceder apenas as permissões necessárias para a operação de comentários",
        "Conteúdo de subsídios escrever porque os comentários contêm texto",
        "Administração do repositório de subvenções para evitar falhas futuras",
        "Use o token completo de um mantenedor para toda a automação"
      ],
      "explanations": [
        "A autorização específica para a operação evita o acesso desnecessário à escrita de código.",
        "Um comentário PR não exige, por si só, a modificação do conteúdo do repositório.",
        "A conveniência futura não justifica o acesso administrativo.",
        "Um token pessoal amplo expande a exposição além da tarefa."
      ],
      "concept": "Permissões de fluxo de trabalho específicas da operação",
      "hints": [
        "Que recurso está a ser alterado?",
        "As atualizações de conteúdo fazem parte da operação solicitada?"
      ]
    },
    "agentic-090": {
      "prompt": "Uma ferramenta permite simular uma operação sem aplicar alterações, mas a tarefa exige uma alteração real autorizada. O agente executa apenas a simulação. O que deve informar?",
      "choices": [
        "A alteração foi aplicada porque a validação foi bem sucedida.",
        "A operação proposta foi verificada mas não foi aplicada",
        "O serviço irá aplicá-lo automaticamente mais tarde.",
        "A operação falhou porque as simulações sem alterações não podem ser úteis."
      ],
      "explanations": [
        "Uma simulação não demonstra um efeito comprometido.",
        "O relatório deve distinguir a intenção validada da mutação executada.",
        "Não se pode assumir a aplicação automática posterior.",
        "Uma simulação sem alterações pode fornecer evidências úteis sem completar a execução."
      ],
      "concept": "execução seca versus resultados aplicados",
      "hints": [
        "Que efeitos secundários permitiu o modo invocado?",
        "O que resta para satisfazer a entrega requerida?"
      ]
    },
    "agentic-091": {
      "prompt": "Os registros de ferramentas de uma equipe mostram marcas de tempo, mas não podem distinguir duas execuções simultâneas de agentes contra o mesmo repositório. O que deve ser adicionado?",
      "choices": [
        "Apenas o nome da tela do modelo",
        "Uma contagem de todas as chamadas de ferramentas naquele dia",
        "Identificadores de execução, tarefa, ator, alvo e revisão em eventos relevantes",
        "Uma única mensagem de sucesso combinada para ambas as execuções"
      ],
      "explanations": [
        "Os nomes de exibição podem ser compartilhados entre execuções.",
        "Os totais diários não podem reconstruir ações individuais.",
        "Identidade de execução correlacionada liga ações e resultados à correta execução.",
        "A combinação de resultados que correm produziu cada efeito."
      ],
      "concept": "rastreabilidade a partir de ferramentas",
      "hints": [
        "Um investigador pode atribuir cada ação a uma execução?",
        "Quais identificadores ligam um evento da ferramenta ao seu estado de tarefa e código?"
      ]
    },
    "agentic-092": {
      "prompt": "Um agente deve conservar os cálculos intermediários de uma tarefa, mas não os reutilizar em tarefas posteriores. Que escopo de memória se encaixa?",
      "choices": [
        "Conhecimento em toda a organização",
        "Preferências permanentes dos usuários",
        "Uma política de repositório compartilhado",
        "Estado a curto prazo da tarefa local"
      ],
      "explanations": [
        "O escopo da organização compartilha desnecessariamente dados específicos de tarefas.",
        "Os cálculos não suportam preferências pessoais.",
        "Os valores intermediários não constituem uma política de repositório.",
        "O estado local da tarefa suporta a execução atual sem reutilização de tarefas cruzadas."
      ],
      "concept": "Escala de memória de curto prazo",
      "hints": [
        "Quanto tempo é relevante esta informação?",
        "Quem mais deveria ser capaz de reutilizar?"
      ]
    },
    "agentic-093": {
      "prompt": "Um agente de longa data precisa de um registro duradouro de decisões arquitetônicas aprovadas. Onde deve guardar o registro autorizado?",
      "choices": [
        "Um artefato de decisão versionado ligado à tarefa",
        "Apenas sua janela de contexto atual",
        "Uma nota especulativa não etiquetada",
        "O último comando bem-sucedido."
      ],
      "explanations": [
        "Um artefato de versão duradoura preserva a autoridade e a origem.",
        "O contexto pode ser perdido ou compactado.",
        "A especulação não deve mascarar-se como uma decisão aprovada.",
        "Um comando não representa a intenção arquitetônica."
      ],
      "concept": "Memória de decisão duradoura",
      "hints": [
        "O que sobrevive a uma reinicialização do processo?",
        "Como se distingue uma decisão aprovada de uma hipótese?"
      ]
    },
    "agentic-094": {
      "prompt": "Um agente retomado começa a implementar um passo já concluído antes de um acidente. Que informação do checkpoint poderia impedir isto?",
      "choices": [
        "O estilo de resposta preferido do agente",
        "Passos concluídos, referências de efeitos, revisão atual e ação seguinte",
        "A solicitação original sem progresso",
        "A contagem total de tokens da sessão anterior"
      ],
      "explanations": [
        "O estilo não identifica os efeitos completos.",
        "Um histórico concreto de progresso sustenta uma continuação segura.",
        "A tarefa original omite o que já aconteceu.",
        "As contagens de tokens não reconstruem a execução."
      ],
      "concept": "Progresso retomável checkpoints",
      "hints": [
        "Que fatos distinguem uma tarefa nova de uma retomada?",
        "Como podem ser verificados os efeitos completos?"
      ]
    },
    "agentic-095": {
      "prompt": "Um agente lembra-se de um antigo comando de construção, mas o branch atual mudou os scripts do pacote. O que deve acontecer antes da reutilização?",
      "choices": [
        "Preferir memória a arquivos atuais",
        "Executa todos os comandos históricos",
        "Validar o fato lembrado contra a evidência do repositório atual",
        "Eliminar o histórico de tarefas de forma permanente"
      ],
      "explanations": [
        "A memória pode ficar velha.",
        "Os comandos históricos podem ser incompatíveis ou inseguros.",
        "A evidência atual determina se um fato armazenado ainda é aplicável.",
        "A validação seletiva é mais útil do que a eliminação indiscriminada."
      ],
      "concept": "Validação da atualidade da memória",
      "hints": [
        "Que estado de código suportava a memória?",
        "Essa evidência ainda é válida neste branch?"
      ]
    },
    "agentic-096": {
      "prompt": "Um resumo de memória trata \"talvez substituir o cache\" como uma decisão aprovada. O que deve ser corrigido?",
      "choices": [
        "Tornar o resumo mais confiante",
        "Executa a substituição para validar o resumo",
        "Remover todos os resumos do fluxo de trabalho",
        "Preservação explícita da incerteza e do status da decisão"
      ],
      "explanations": [
        "A confiança amplificaria a classificação errada.",
        "A execução não pode autorizar retroativamente uma proposta.",
        "Os resumos permanecem úteis quando qualificados com precisão.",
        "As hipóteses e as decisões aprovadas precisam de um status distinto."
      ],
      "concept": "Preservação do status de decisão",
      "hints": [
        "A declaração original foi uma proposta ou uma autorização?",
        "Que significado foi perdido durante a compressão?"
      ]
    },
    "agentic-097": {
      "prompt": "Uma longa sessão de agente começa a otimizar o código não relacionado em vez de corrigir o defeito acordado. Qual é a melhor correção de deriva?",
      "choices": [
        "Comparar as ações atuais com o objetivo aprovado e restabelecer o seu escopo",
        "Aumentar a janela de contexto sem rever as ações",
        "Aprovar todos os novos objetivos porque surgiram durante a execução",
        "Eliminar os critérios de aceitação originais"
      ],
      "explanations": [
        "O contrato aprovado fornece uma âncora para detectar e corrigir a deriva.",
        "A maior capacidade não restabelece a alinhamento.",
        "Os novos objetivos não são autorizados automaticamente.",
        "A eliminação dos critérios elimina a referência de alinhamento."
      ],
      "concept": "Detecção de deriva de contexto",
      "hints": [
        "Que artefato estável define o trabalho pretendido?",
        "Como as ações atuais se comparam com esse limite?"
      ]
    },
    "agentic-098": {
      "prompt": "Duas ferramentas discordam sobre se uma implantação foi concluída. Um relata um estado em cache; o outro mostra o registro de operação atual. O que deve fazer o agente?",
      "choices": [
        "Escolha o status que for favorável",
        "Conciliar a atualidade e a procedência dos dados usando o estado da operação no sistema responsável",
        "Calcular a média dos dois estados",
        "Repita a implantação antes de verificar qualquer fonte"
      ],
      "explanations": [
        "A favorável não é uma regra de consistência.",
        "Autoridade da fonte e atualidade resolvem os estados conflitantes.",
        "Os estados de conclusão não são quantidades à média.",
        "A repetição cega pode duplicar uma operação já concluída."
      ],
      "concept": "Reconciliação transversal",
      "hints": [
        "Quando foi feita cada observação?",
        "Que sistema possui o estado real da operação?"
      ]
    },
    "agentic-099": {
      "prompt": "Um agente guarda para sempre todas as respostas brutas das ferramentas. A recuperação passa a apresentar cada vez mais informações irrelevantes. Qual política de memória melhor resolve o problema?",
      "choices": [
        "Sempre recuperar mais história",
        "Promover cada resposta em uma instrução permanente",
        "Aplicar poda baseada na relevância, regras de retenção e resumos verificados compactos",
        "Desativar todo o rastreamento de progresso duradouro"
      ],
      "explanations": [
        "Um contexto mais irrelevante pode piorar a qualidade da recuperação.",
        "As observações não são instruções permanentes.",
        "Os controles de retenção e de relevância reduzem o ruído sem perder o estado essencial.",
        "Remover o rastreamento de progresso sacrifica a continuidade."
      ],
      "concept": "poda e retenção da memória",
      "hints": [
        "Que informações são úteis para decisões futuras?",
        "Pode-se conservar evidências essenciais sem injetar toda a história bruta?"
      ]
    },
    "agentic-100": {
      "prompt": "Um agente muda-se do desenvolvimento local para o CI. Quais são os estados que melhor preservam a continuidade?",
      "choices": [
        "Um caminho absoluto local sozinho.",
        "Todo o diretório da casa do desenvolvedor",
        "Uma declaração de que o trabalho está quase concluído",
        "Um checkpoint portátil com revisão, referências a artefatos, decisões e passos pendentes"
      ],
      "explanations": [
        "Pode não existir um caminho local no CI.",
        "Grande estado pessoal expõe dados desnecessários.",
        "Uma declaração vaga não pode orientar uma retomada segura.",
        "As referências portáteis e o progresso explícito sobrevivem às alterações ambientais."
      ],
      "concept": "Transferência estatal independente do ambiente",
      "hints": [
        "Quais referências o ambiente que recebe a tarefa consegue realmente resolver?",
        "O que precisa verificar antes de continuar?"
      ]
    },
    "agentic-101": {
      "prompt": "Um checkpoint contém uma credencial de produção porque foi devolvida por uma ferramenta. Qual é a melhor correção?",
      "choices": [
        "Remover o segredo e manter, se necessário, uma referência autorizada ao segredo",
        "Copiá-lo em cada resumo futuro",
        "Mantenha-o porque checkpoints não são código fonte",
        "Renomear o campo para esconder o seu propósito"
      ],
      "explanations": [
        "O Estado deve fazer referência ao acesso protegido em vez de persistir em valores secretos.",
        "A replicação amplia a exposição.",
        "Os artefatos operacionais duráveis também podem filtrar secrets.",
        "Renomear não protege uma credencial."
      ],
      "concept": "estado secretamente seguro persistente",
      "hints": [
        "O próximo agente precisa do valor ou de uma forma de obter acesso autorizado?",
        "Onde pode ser mantido ou compartilhado o checkpoints?"
      ]
    },
    "agentic-102": {
      "prompt": "Dois agentes atualizam um registro de tarefas compartilhadas e um silenciosamente sobreescreve o marcador de conclusão do outro. Que mecanismo de estado melhor impede isso?",
      "choices": [
        "Resumos mais longos em língua natural",
        "Verificações de versões com detecção de conflitos ou atualizações serializadas",
        "Nomes de exibição de agentes idênticos",
        "Uma regra de que a última resposta é sempre correta"
      ],
      "explanations": [
        "O comprimento do resumo não impede a perda de atualizações.",
        "O controle da moeda simultânea detecta as inscrições obsoletas ou impede a sobreposição.",
        "Os nomes compartilhados reduzem a rastreabilidade.",
        "A ordem de resposta não estabelece a correção do estado."
      ],
      "concept": "Consistência de estado simultâneo",
      "hints": [
        "Os dois escritores podem ter lido a mesma versão antiga?",
        "Como deve ser detectada uma atualização obsoleta?"
      ]
    },
    "agentic-103": {
      "prompt": "Um agente é transferido para um repositório de clientes diferente. Qual memória anterior deve ser carregada por padrão?",
      "choices": [
        "Todos os dados do repositório do cliente anterior",
        "Todas as credenciais anteriores",
        "Apenas memória autorizada e relevante para o novo escopo",
        "Cada transcrição da ferramenta do compromisso anterior"
      ],
      "explanations": [
        "Os fatos de repositório podem ser inaplicáveis ou privados.",
        "As credenciais não devem ser transferidas através da memória.",
        "A memória deve respeitar as fronteiras de relevância e acesso.",
        "As transcrições não filtradas criam ruído e risco de divulgação."
      ],
      "concept": "isolamento do escopo de memória",
      "hints": [
        "A utilidade num repositório implica a relevância noutro?",
        "Qual é o limite de acesso aplicável às informações armazenadas?"
      ]
    },
    "agentic-104": {
      "prompt": "Uma equipe comprime uma longa conversa antes de retomar um agente. Que informações não devem ser perdidas?",
      "choices": [
        "Saudações repetidas",
        "Todas as variações do texto intermediário",
        "Todos os resultados de pesquisa irrelevantes",
        "Restrições aprovadas, questões não resolvidas, progressos e referências de evidências"
      ],
      "explanations": [
        "Os cumprimentos raramente afetam a continuação.",
        "As variantes de redação são menos importantes do que as decisões autoritárias.",
        "Os resultados irrelevantes diluem o contexto.",
        "Estes fatos preservam a identidade da tarefa e protegem os próximos passos."
      ],
      "concept": "Compactação de contexto segura",
      "hints": [
        "O que mudaria a próxima ação se fosse omitida?",
        "Que fatos distinguem a evidência da lembrança?"
      ]
    },
    "agentic-105": {
      "prompt": "Um resultado de teste armazenado aprovado no commit A. Desde então, o agente mudou a implementação para commit B. Como deve tratar esse resultado?",
      "choices": [
        "Evidências históricas, não provas de que commit B passa",
        "Garantia permanente para a filial",
        "Equivalente a uma nova execução se os nomes dos arquivos coincidirem",
        "Uma razão para ignorar toda a validação futura"
      ],
      "explanations": [
        "A evidência está ligada ao estado do código que a produziu.",
        "A identidade do branch pode persistir através do código alterado.",
        "Os nomes de arquivos inalterados não implicam um comportamento inalterado.",
        "O sucesso anterior não valida mudanças posteriores."
      ],
      "concept": "Memória de evidências vinculada à revisão",
      "hints": [
        "Que revisão exerceu realmente o teste?",
        "O que mudou depois que as evidências foram criadas?"
      ]
    },
    "agentic-106": {
      "prompt": "Um agente redescobre repetidamente uma convenção de repositório estável. Qual é uma estratégia útil de memória a longo prazo?",
      "choices": [
        "Armazenar todos os arquivos passados literalmente",
        "Manter a convenção com evidências e escopo",
        "Usar a convenção como uma política global para todos os clientes",
        "Tratar um padrão de código acidental como uma regra imutável"
      ],
      "explanations": [
        "O acúmulo literal é barulhento e caro.",
        "Factos explorados apoiados por evidências podem reduzir a descoberta repetida.",
        "As convenções de repositório não são políticas universais.",
        "Um padrão precisa ser validado antes de se tornar um guia duradouro."
      ],
      "concept": "Memória de longo prazo apoiada por evidências",
      "hints": [
        "O fato é estável e amplamente útil neste repositório?",
        "Que evidência poderia mais tarde determinar se continua sendo verdade?"
      ]
    },
    "agentic-107": {
      "prompt": "Uma tarefa é cancelada após a execução parcial. Qual deve ser o seu histórico duradouro?",
      "choices": [
        "Sucesso, para simplificar a comunicação de informações",
        "Nada, porque o trabalho cancelado nunca importa.",
        "Anulação, efeitos concluídos, artefatos restantes e estado de recuperação",
        "Apenas o objetivo original"
      ],
      "explanations": [
        "O cancelamento não é um sucesso.",
        "Os efeitos parciais podem ainda exigir revisão ou limpeza.",
        "O estado terminal explícito impede a retomada acidental e preserva a responsabilidade.",
        "Só o objetivo omite o que realmente aconteceu."
      ],
      "concept": "Estado de execução cancelada",
      "hints": [
        "Poderia outro trabalhador confundir a tarefa com trabalho ativo?",
        "Que efeitos sobrevivem ao cancelamento?"
      ]
    },
    "agentic-108": {
      "prompt": "Um agente recupera uma velha exceção que permite uma operação arriscada. A exceção tinha uma data de expiração que passou. O que deve fazer?",
      "choices": [
        "Tratar qualquer exceção histórica como permanente",
        "Renová-lo atualizando a sua memória",
        "Ignorar a expiração se a operação for conveniente",
        "Revalidar a autorização antes de utilizar a exceção"
      ],
      "explanations": [
        "A autorização histórica pode deixar de ser aplicável.",
        "O agente não pode conceder de forma unilateral a renovação da autoridade.",
        "A conveniência não substitui a expiração.",
        "A autoridade expirada precisa de uma nova decisão autorizada."
      ],
      "concept": "Frescosidade da autorização",
      "hints": [
        "Lembrar-se da permissão é o mesmo que ainda ter permissão?",
        "Que condição limitou a exceção original?"
      ]
    },
    "agentic-109": {
      "prompt": "Um agente de suporte mistura fatos de dois incidentes simultâneos e propõe a reversão errada. Qual projeto de estado melhor resolve isso?",
      "choices": [
        "Memória de partição por identidade de incidente e validação de referências na recuperação",
        "Use um contexto compartilhado maior para cada incidente",
        "Remover os identificadores de incidentes para reduzir a desordem",
        "Escolha o rollback que foi mencionado recentemente"
      ],
      "explanations": [
        "A identidade da tarefa impede a contaminação do contexto de incidentes cruzados.",
        "Um contexto misto maior preserva a mesma ambigüidade.",
        "A remoção dos identificadores enfraquece o isolamento.",
        "A recência não estabelece relevância para este incidente."
      ],
      "concept": "Identidade de tarefa na memória",
      "hints": [
        "A que incidente pertence cada observação?",
        "Que chave deve utilizar a recuperação antes de julgar a relevância?"
      ]
    },
    "agentic-110": {
      "prompt": "Um checkpoint diz que uma operação está pendente, mas o serviço confirma que foi concluída antes de um acidente. Como é que o agente deve estar atualizado?",
      "choices": [
        "Repetir a operação para corresponder ao checkpoint",
        "Registrar a conclusão confirmada com a proveniência e continuar a partir daí",
        "Eliminar as provas do serviço",
        "Manter os dois statuss sem explicar o conflito"
      ],
      "explanations": [
        "A repetição pode duplicar o efeito concluído.",
        "O estado reconciliado deve refletir a realidade externa verificada.",
        "A eliminação de evidências impede a recuperação.",
        "Uma contradição não resolvida pode causar decisões inseguras no futuro."
      ],
      "concept": "Recuperação de checkpoints obsoleta",
      "hints": [
        "Que fonte pode verificar o efeito real?",
        "Como o estado corrigido pode explicar por que mudou?"
      ]
    },
    "agentic-111": {
      "prompt": "Uma entrada de memória veio de um PR que nunca foi mesclado. Quando o fato sobre o repositório ainda pode ser útil?",
      "choices": [
        "Sempre, porque uma PR uma vez o contou.",
        "Nunca, independentemente das evidências atuais",
        "Quando evidências da branch atual comprovam o fato de forma independente",
        "Só se o seu autor fosse um agente"
      ],
      "explanations": [
        "O conteúdo não fundido pode não descrever o código atual.",
        "Um fato pode permanecer válido mesmo que o seu original PR tenha sido fechado.",
        "A validação atual da citação determina a aplicabilidade.",
        "A autoria não estabelece a validade fatual."
      ],
      "concept": "Validação de fatos provenientes de trabalhos não-mergidos",
      "hints": [
        "O código atual apoia a declaração lembrada?",
        "A origem sozinha é suficiente para determinar a verdade atual?"
      ]
    },
    "agentic-112": {
      "prompt": "Um agente armazena 'implantação aprovada' sem identificar a revisão ou o ambiente aprovado. Qual é o principal risco de continuidade?",
      "choices": [
        "O resumo é muito curto para ser lido.",
        "O agente vai necessariamente perder o acesso à rede",
        "O texto armazenado não pode ser traduzido",
        "A execução posterior pode aplicar a aprovação a uma ação diferente"
      ],
      "explanations": [
        "O comprimento não é o problema central.",
        "A disponibilidade da rede não está relacionada.",
        "A tradução não é um problema de autorização.",
        "A aprovação necessita de um escopo suficiente para se vincular à operação prevista."
      ],
      "concept": "Estado de aprovação visado",
      "hints": [
        "O que exatamente foi aprovado?",
        "Será que um futuro trabalhador poderia interpretar as mesmas palavras mais amplamente?"
      ]
    },
    "agentic-113": {
      "prompt": "Uma memória obsoleta sugere um endpoint depreciado. A documentação oficial atual identifica o seu substituto. O que deve fazer o agente?",
      "choices": [
        "Atualizar o contexto da tarefa a partir de evidências atuais verificadas e qualificar ou invalidar a entrada obsoleta",
        "Seguir a memória porque foi recuperada primeiro",
        "Chamem os dois terminais cegamente.",
        "Manter ambas as alegações igualmente autênticas para sempre"
      ],
      "explanations": [
        "A memória deve ser corrigida quando evidências atuais mais fortes a invalidam.",
        "A ordem de recuperação não é autoridade.",
        "As chamadas cegas podem ter efeitos desnecessários.",
        "A informação obsoleta conhecida não deve continuar a ser uma alternativa incondicional."
      ],
      "concept": "Invalidação da memória",
      "hints": [
        "Que evidência é atual e autorizada?",
        "Como a recuperação futura pode evitar que se repita o mesmo erro?"
      ]
    },
    "agentic-114": {
      "prompt": "Um agente precisa de um grande relatório de teste histórico apenas durante o diagnóstico de falha. Qual estratégia contextual é melhor?",
      "choices": [
        "Injectar o relatório inteiro em cada prospecto futuro",
        "Manter o relatório externamente, com procedência, e recuperar trechos relevantes quando necessário",
        "Descartar o relatório assim que a execução terminar",
        "Substitui-o por um veredicto de uma palavra sem apoio."
      ],
      "explanations": [
        "A injecção incondicional desperdiça o contexto e adiciona ruído.",
        "As evidências externas apoiam a recuperação seletiva sem perder a inspecionabilidade.",
        "A eliminação imediata impede um diagnóstico posterior.",
        "Um veredicto sozinho perde detalhes de apoio."
      ],
      "concept": "Memória externa e recuperação seletiva",
      "hints": [
        "As provas precisam estar presentes ou são meramente recuperáveis?",
        "Que detalhe é relevante para a questão atual de diagnóstico?"
      ]
    },
    "agentic-115": {
      "prompt": "Um agente herda uma transferência escrita antes do branch base mudar substancialmente. O que deve verificar antes da implementação?",
      "choices": [
        "Só a ortografia da transferência",
        "Só a confiança do antecessor.",
        "Se as suposições, as localizações dos arquivos e as decisões continuam a ser aplicáveis à atual revisão",
        "Se pode reutilizar a mesma mensagem final"
      ],
      "explanations": [
        "A ortografia não estabelece a atualidade técnica.",
        "A confiança não valida o código alterado.",
        "Uma base alterada pode invalidar as premissas da transferência.",
        "Reutilizar a prosa não garante a continuidade."
      ],
      "concept": "verificações de atualidade das entregas",
      "hints": [
        "O que mudou desde que o seu antecessor observou o repositório?",
        "Que suposições dependem daquele estado do código anterior?"
      ]
    },
    "agentic-116": {
      "prompt": "Uma memória do repositório contém a preferência pessoal de formatação de um usuário. A equipe tem uma regra de estilo obrigatória que a contradiz. O que deve orientar esta tarefa?",
      "choices": [
        "A preferência porque é personalizada",
        "Qualquer entrada que tenha sido recuperada primeiro",
        "Uma média dos dois estilos",
        "A regra do repositório aplicável, ao mesmo tempo em que qualifica o escopo da preferência"
      ],
      "explanations": [
        "A personalização não prevalece sobre a governança de tarefas.",
        "A ordem de recuperação não é prioridade política.",
        "Um híbrido pode violar a regra imposta.",
        "A memória deve ser interpretada dentro das restrições do repositório atual."
      ],
      "concept": "Memória versus restrições governantes",
      "hints": [
        "O item lembrado é uma preferência ou um requisito?",
        "Que instrução rege as mudanças aceitas aqui?"
      ]
    },
    "agentic-117": {
      "prompt": "O resumo contextual de um agente omite por que um projeto aparentemente mais simples foi rejeitado. Mais tarde reabre a mesma proposta. O que devem preservar futuros resumos?",
      "choices": [
        "A justificativa das decisões e as alternativas rejeitadas relevantes para a tarefa",
        "Todas as idéias de brainstorming não relacionadas",
        "Apenas o nome do projeto escolhido",
        "Apenas o número de revisores"
      ],
      "explanations": [
        "A raciocínio relevante impede a realização de acordos já resolvidos.",
        "Ideias não relacionadas aumentam o ruído.",
        "Um nome não explica restrições ou opções rejeitadas.",
        "As contagens de revisores não captam o raciocínio por trás de uma decisão."
      ],
      "concept": "Preservação da justificação da decisão",
      "hints": [
        "O que impediria a repetição de um debate resolvido?",
        "Qual razão ainda restringe a próxima escolha de design?"
      ]
    },
    "agentic-118": {
      "prompt": "Uma tarefa suspensa retoma-se após a revogação das credenciais da sua ferramenta. O seu checkpoint diz que o acesso estava disponível. O que é que vai acontecer?",
      "choices": [
        "Tratar o checkpoint como permissão contínua",
        "Reverifique o acesso atual e informe um bloqueador se a autorização estiver ausente",
        "Recuperar as antigas credenciais dos registros",
        "Usar a credencial de um usuário diferente sem aprovação"
      ],
      "explanations": [
        "O acesso histórico não é autorizado.",
        "Os procedimentos de prossecução devem validar os pré-requisitos de execução atuais.",
        "Os registros não devem tornar-se um canal de recuperação de credenciais.",
        "Não se pode assumir outra identidade como solução."
      ],
      "concept": "Validação da autorização de currículo",
      "hints": [
        "Que condições podem mudar enquanto uma tarefa é interrompida?",
        "Um registro de progressos da autoridade de concessão?"
      ]
    },
    "agentic-119": {
      "prompt": "Um agente completou a tarefa autorizada. Qual é a melhor política de reinicialização antes de uma tarefa não relacionada começar?",
      "choices": [
        "Transporte todo o contexto de trabalho para a frente inalterado",
        "Eliminar as provas de auditoria necessárias",
        "Resetar o estado de trabalho local da tarefa, mantendo registros duráveis autorizados",
        "Promoção de suposições temporárias na política global"
      ],
      "explanations": [
        "Os riscos de transferência não relacionados são de contaminação.",
        "A retenção da auditoria e a redefinição do contexto de trabalho são preocupações diferentes.",
        "O restabelecimento do estado de funcionamento impede a deriva sem destruir a responsabilidade.",
        "As suposições temporárias não são governança duradoura."
      ],
      "concept": "Reset das tarefas versus retenção da auditoria",
      "hints": [
        "Que informações devem influenciar a próxima tarefa?",
        "Quais informações devem permanecer disponíveis apenas como evidências históricas?"
      ]
    },
    "agentic-120": {
      "prompt": "Um agente corrige um defeito de faturamento. Qual é a melhor avaliação para medir o sucesso?",
      "choices": [
        "Tamanho do patch",
        "Modelo de confiança",
        "Velocidade de execução só",
        "Caso de cobrança correta mais verificações de regressão, segurança e alcance"
      ],
      "explanations": [
        "O comprimento não é correto.",
        "A confiança não é evidência independente.",
        "A velocidade pode melhorar enquanto o comportamento regressar.",
        "O comportamento das tarefas e as restrições operacionais definem conjuntamente o sucesso."
      ],
      "concept": "Critérios de sucesso multidimensionais",
      "hints": [
        "Qual defeito visível ao usuário deve ser resolvido?",
        "Que restrições permanecem obrigatórias durante a reparação?"
      ]
    },
    "agentic-121": {
      "prompt": "Uma implementação correta falha porque o runner não tem compilador. Qual é a categoria de falhas primárias?",
      "choices": [
        "Falha do ambiente",
        "Falha de raciocínio",
        "Mutação de ferramenta não autorizada",
        "Critérios de aceitação incorretos"
      ],
      "explanations": [
        "Um pré-requisito de execução faltante impede a execução.",
        "Os evidências não estabelecem um raciocínio de execução defeituoso.",
        "Não são descritas mutações não autorizadas.",
        "O requisito de compilador não invalida os critérios da tarefa."
      ],
      "concept": "Classificação de falhas ambientais",
      "hints": [
        "Em que camada a execução parou?",
        "A mudança da lógica de implementação forneceria o pré-requisito que falta?"
      ]
    },
    "agentic-122": {
      "prompt": "Um agente seleciona uma ferramenta de exclusão em vez de uma ferramenta de leitura, apesar de instruções de tarefa claras e credenciais válidas. Qual é o principal fracasso?",
      "choices": [
        "Interrupção da rede",
        "Uso indevido de ferramentas",
        "Capacidade contextual insuficiente",
        "Um teste espinhoso"
      ],
      "explanations": [
        "Nenhuma falha de rede é indicada.",
        "A operação selecionada contradiz a ação necessária.",
        "A tarefa era clara; a capacidade do contexto não é estabelecida como a causa.",
        "Não se descreve nenhuma instabilidade no teste."
      ],
      "concept": "Classificação de abuso de ferramentas",
      "hints": [
        "A operação prevista foi representada corretamente?",
        "Que ação de ferramenta realmente ocorreu?"
      ]
    },
    "agentic-123": {
      "prompt": "Todas as ferramentas executadas como solicitado, mas um agente escolheu a fórmula errada para uma regra comercial claramente especificada. Como deve ser classificada a causa primária?",
      "choices": [
        "Conectividade de ferramentas",
        "Expiração das credenciais",
        "Erro de raciocínio ou de aplicação de requisitos",
        "Falha de retenção de artefatos"
      ],
      "explanations": [
        "As ferramentas estavam ligadas e operacionais.",
        "Não se descreve nenhuma falha de credenciais.",
        "O agente aplicou mal os requisitos conhecidos ao planejar a solução.",
        "A retenção de provas não causou a fórmula errada."
      ],
      "concept": "Classificação de falhas de raciocínio",
      "hints": [
        "O resultado errado foi causado pela execução ou pela abordagem escolhida?",
        "O que sabia o agente quando escolheu a fórmula?"
      ]
    },
    "agentic-124": {
      "prompt": "Um agente modifica um módulo obsoleto porque a recuperação forneceu um mapa de arquitetura obsoleto. Que causa raiz deve ser investigada primeiro?",
      "choices": [
        "Saturação CPU",
        "Um formatador incorreto",
        "Um falso positivo escaneado em segredo",
        "Contexto desatualizado fornecido ao agente"
      ],
      "explanations": [
        "Não há provas de capacidade.",
        "A formatagem não selecionou o módulo obsoleto.",
        "Não se trata de um evento de análise de código.",
        "O mapa recuperado distorceu a arquitetura atual."
      ],
      "concept": "Classificação de falhas de contexto",
      "hints": [
        "Que entrada dirigiu o agente para o local errado?",
        "Essa entrada era válida para a atual revisão?"
      ]
    },
    "agentic-125": {
      "prompt": "Uma equipe muda as instruções do agente e quer medir a melhoria. Qual comparação é mais credível?",
      "choices": [
        "Avaliar ambas as versões com o mesmo conjunto representativo reservado para avaliação e a mesma rubrica",
        "Comparar diferentes tarefas selecionadas por cada versão",
        "Conte frases positivas nas respostas finais",
        "Pergunte ao agente atualizado se melhorou"
      ],
      "explanations": [
        "As tarefas e critérios comparáveis apoiam uma avaliação atribuível.",
        "Diferentes dificuldades de tarefa confundem a comparação.",
        "A linguagem positiva não é qualidade da tarefa.",
        "A autoavaliação não é uma validação independente."
      ],
      "concept": "Avaliação controlada",
      "hints": [
        "Que variáveis devem permanecer estáveis?",
        "Que evidência distingue a melhoria das tarefas mais fáceis?"
      ]
    },
    "agentic-126": {
      "prompt": "A taxa de aprovação de um agente aumenta após os administradores removerem casos difíceis do conjunto de avaliação. Qual é a principal preocupação?",
      "choices": [
        "O modelo deve agora ser mais confiável",
        "A métrica pode refletir uma cobertura reduzida em vez de um comportamento melhorado",
        "Os conjuntos de avaliação devem conter apenas casos fáceis",
        "Menos casos garantem evidências estatísticas mais fortes"
      ],
      "explanations": [
        "A comparação não isola mais o comportamento modelo.",
        "A alteração da dificuldade do caso pode criar uma melhoria enganosa.",
        "Casos representativos difíceis expõem modos de falha importantes.",
        "As amostras menores não reforçam as evidências."
      ],
      "concept": "Preconceito da cobertura de avaliação",
      "hints": [
        "O sistema mudou ou a medição mudou?",
        "Que riscos do mundo real desapareceram do set de testes?"
      ]
    },
    "agentic-127": {
      "prompt": "Um patch gerado passa os testes de unidade, mas introduz uma dependência vulnerável. Que sinal faltante expõe isto mais diretamente?",
      "choices": [
        "Uma pontuação em prosa",
        "Uma contagem de arquivos editados",
        "Análise de segurança de dependência",
        "A confiança estimada do agente"
      ],
      "explanations": [
        "O comprimento da prosa não pode avaliar as vulnerabilidades do pacote.",
        "A contagem de arquivos não avalia o risco de dependência.",
        "A análise de dependência visa a exposição à vulnerabilidade conhecida.",
        "A confiança não pode substituir a evidência de segurança automatizada."
      ],
      "concept": "sinais automatizados de avaliação de segurança",
      "hints": [
        "Qual é o risco fora do comportamento exercido pelos testes unitários?",
        "Que tipo de análise inspeciona o conjunto de dependências alterado?"
      ]
    },
    "agentic-128": {
      "prompt": "Um scanner marca uma mudança gerada. O agente diz que o aviso é provavelmente inofensivo. O que deve acontecer a seguir?",
      "choices": [
        "Eliminar automaticamente a descoberta",
        "Aceitar a confiança do agente como uma renúncia.",
        "Excluir o passo de análise de código",
        "Investigar o achado no código e nas políticas, documentando uma decisão autorizada"
      ],
      "explanations": [
        "A supressão não revisada oculta um possível defeito.",
        "Um modelo não pode conceder a sua própria exceção de segurança.",
        "A remoção do sinal evita, em vez de resolver, o risco.",
        "A triagem baseada em evidências determina se é apropriada uma remediação ou uma exceção aprovada."
      ],
      "concept": "Triagem de achados da análise",
      "hints": [
        "Que evidência apoiaria chamar isso de falso positivo?",
        "Quem pode autorizar uma exceção?"
      ]
    },
    "agentic-129": {
      "prompt": "As falhas dos agentes agrupam-se em torno das limitações de tarefas faltantes. Que mudança de ajuste visa melhor a causa?",
      "choices": [
        "Adicionar restrições explícitas e critérios de aceitação às entradas de tarefas",
        "Aumentar o número de retestes para todas as ferramentas",
        "Conceder acesso de escrita mais amplo",
        "Use resumos finais mais longos"
      ],
      "explanations": [
        "As entradas de tarefas melhoradas tratam as informações faltantes.",
        "Os retrospectivos não fornecem os requisitos que faltam.",
        "Permissões mais amplas não esclarecem a intenção.",
        "A verbosidade final não melhora a fixação inicial da tarefa."
      ],
      "concept": "Ajuste de instruções orientadas para a causa",
      "hints": [
        "Que informações faltavam antes da decisão?",
        "Que alteração aborda essa ausência diretamente?"
      ]
    },
    "agentic-130": {
      "prompt": "Um agente chama repetidamente ferramentas irrelevantes. Os vestígios mostram um grande catálogo de ferramentas sobrepostas. Qual ajuste é mais alvo?",
      "choices": [
        "Adicionar mais ferramentas para que um eventualmente se encaixe",
        "Limitar a exposição das ferramentas e esclarecer as descrições das capacidades",
        "Remover todos os registros",
        "Aumentar o número permitido de chamadas sem alterar a seleção"
      ],
      "explanations": [
        "Mais sobreposições podem piorar a selecção.",
        "Limitações de capacidade mais claras e menores visam a conmerge das ferramentas.",
        "A remoção de registros destrói provas de diagnóstico.",
        "Um orçamento maior não corrige o comportamento de selecção."
      ],
      "concept": "ajuste de selecção de ferramentas",
      "hints": [
        "O que tornou difícil distinguir as ações disponíveis?",
        "O design de capacidades pode reduzir as chances de escolher a operação errada?"
      ]
    },
    "agentic-131": {
      "prompt": "Uma equipe mede a latência do agente apenas nas execuções bem-sucedidas, excluindo as que excedem o tempo limite. Que problema isso gera?",
      "choices": [
        "Prova que o agente cumpre todos os prazos.",
        "Medem diretamente a recuperação de falhas",
        "Esconde falhas lentas e exagera o desempenho operacional",
        "Faz a taxa de sucesso desnecessária"
      ],
      "explanations": [
        "As limites de tempo excedidos excluídas podem violar os prazos.",
        "O tempo de recuperação está ausente da amostra.",
        "A latência apenas de sucesso ignora uma classe importante de experiência do usuário.",
        "A confiabilidade e a latência continuam a ser sinais distintos."
      ],
      "concept": "Completeza das métricas operacionais",
      "hints": [
        "Quais os usuários são excluídos da medição?",
        "O que aconteceu com as execuções mais longas?"
      ]
    },
    "agentic-132": {
      "prompt": "Um conjunto de testes gerado copia a suposição incorreta da implementação e passa. Qual é a melhoria de avaliação mais forte?",
      "choices": [
        "Gerar mais testes a partir do mesmo pressuposto",
        "Confia na conclusão compartilhada porque dois artefatos concordam",
        "Usar um formatador diferente para os testes",
        "Derivar os resultados esperados de forma independente a partir dos requisitos e dos casos-limite"
      ],
      "explanations": [
        "Outros testes podem repetir o mesmo ponto cego.",
        "Os erros correlacionados não são confirmação independente.",
        "O formatamento não pode corrigir o oráculo.",
        "O comportamento esperado independente reduz o viés compartilhado de implementação-teste."
      ],
      "concept": "oráculos de teste independentes",
      "hints": [
        "De onde vieram os valores esperados?",
        "Pode o teste e a execução concordar enquanto ambos violam o requisito?"
      ]
    },
    "agentic-133": {
      "prompt": "Uma equipe quer evidências qualitativas de que o plano de um agente facilita a manutenção. Qual avaliação é adequada?",
      "choices": [
        "Uma revisão com rubrica pelos mantenedores responsáveis",
        "Apenas os milissegundos decorridos",
        "Apenas contagem de chamadas de ferramentas",
        "Apenas um resultado de compilação"
      ],
      "explanations": [
        "Os administradores de manutenção podem avaliar as compensações com base em critérios arquitetônicos explícitos.",
        "A latência não mede a manutenção.",
        "A contagem de chamadas não é a qualidade do design.",
        "A compilação não avalia a clareza do projeto a longo prazo."
      ],
      "concept": "rubricas de avaliação qualitativa",
      "hints": [
        "Que aspectos exigem o julgamento dos engenheiros?",
        "Como esse julgamento pode ser feito consistente entre os revisores?"
      ]
    },
    "agentic-134": {
      "prompt": "Um fluxo de trabalho revisto melhora a correção, mas duplica o custo e excede o limite de latência da tarefa. Como deve ser avaliada?",
      "choices": [
        "É bem-sucedido porque a correção é o único critério possível",
        "Contra a correção e as limitações operacionais declaradas juntas",
        "É bem-sucedido se a resposta final for mais curta",
        "Não conclusivos porque o custo não pode ser medido"
      ],
      "explanations": [
        "A tarefa inclui explicitamente limites operacionais.",
        "Os ganhos de qualidade não suprimem as restrições de custo ou de latência necessárias.",
        "O comprimento da resposta não estabelece a conformidade.",
        "Os sinais de utilização e execução podem apoiar a avaliação dos custos."
      ],
      "concept": "Compromissos de qualidade-custo-latencia",
      "hints": [
        "Que restrições faziam parte do sucesso antes da ajuste?",
        "Melhorar uma dimensão justifica violar outra?"
      ]
    },
    "agentic-135": {
      "prompt": "Uma investigação de falha tem uma mensagem de erro final, mas nenhum plano, argumentos de ferramentas ou revisão. O que deve ser melhorado para análise futura?",
      "choices": [
        "Recolha apenas mais mensagens de erro finais",
        "Remover timestamps para simplificar os registros",
        "Registrar planos correlacionados, eventos de ferramentas sem dados sensíveis, revisões e resultados",
        "Gravar secrets para reproduzir a autenticação exatamente"
      ],
      "explanations": [
        "Só o último sintoma raramente explica o caminho causal.",
        "Os timestamps ajudam a reconstruir a ordem.",
        "Evidências correlacionadas distinguem o raciocínio, ferramentas e falhas ambientais.",
        "Os segredos não devem ser recolhidos como dados diagnósticos."
      ],
      "concept": "Observabilidade diagnóstica",
      "hints": [
        "Um investigador pode reconstruir a sequência antes do erro?",
        "Que evidência distingue causas plausíveis sem revelar credenciais?"
      ]
    },
    "agentic-136": {
      "prompt": "Um agente faz uma verificação passar enfraquecendo suas asserções, sem corrigir a implementação defeituosa. O que a avaliação deve concluir?",
      "choices": [
        "O cheque verde prova que o defeito está corrigido.",
        "Reduzir as afirmações é sempre uma otimização aceitável",
        "O agente melhorou a confiabilidade porque as falhas diminuíram",
        "O sinal foi enfraquecido; verifique o comportamento contra critérios de aceitação independentes"
      ],
      "explanations": [
        "Um cheque mais fraco pode esconder o defeito original.",
        "As alterações de afirmação necessitam de justificação contra o comportamento pretendido.",
        "Menos falhas detectadas podem significar menos detecção.",
        "A avaliação deve proteger o oráculo, não apenas otimizar o seu estado relatado."
      ],
      "concept": "Prevenção de jogos métricos",
      "hints": [
        "O comportamento melhorou ou a detecção tornou-se mais fraca?",
        "Que evidências existem fora do cheque modificado?"
      ]
    },
    "agentic-137": {
      "prompt": "Uma alteração de instrução proposta visa uma falha de produção. O que deve acompanhar o teste de regressão?",
      "choices": [
        "Testes de comportamento existente representativo para detectar regressões colaterais",
        "Eliminação de todos os casos de avaliação não relacionados",
        "Implementação imediata sem restrições",
        "Uma promessa de que a mudança é restrita"
      ],
      "explanations": [
        "Uma solução direcionada pode ainda degradar outro comportamento.",
        "A exclusão da cobertura esconde regressões.",
        "A implantação deve seguir a evidência em vez de substituí-la.",
        "A palavra sozinha não estabelece o isolamento comportamental."
      ],
      "concept": "Avaliação de regressão após ajuste",
      "hints": [
        "Uma instrução mais específica poderia alterar outras decisões?",
        "Que evidência mostra que as capacidades existentes permanecem intactas?"
      ]
    },
    "agentic-138": {
      "prompt": "Um agente só falha quando os documentos recuperados ultrapassam o orçamento contextual e os critérios de aceitação são retirados. Que ajuste melhor aborda a causa?",
      "choices": [
        "Aumentar as permissões de mutação",
        "Priorizar as restrições de tarefas e obter evidências focadas",
        "Tente novamente o mesmo pedido de grande dimensão indefinidamente",
        "Remover os critérios de aceitação para economizar espaço"
      ],
      "explanations": [
        "As autorizações não recuperam os requisitos perdidos.",
        "A prioridade do contexto preserva a intenção essencial, reduzindo ao mesmo tempo o ruído.",
        "O desbordamento repetido preserva o mecanismo de falha.",
        "A eliminação dos critérios institucionaliza o erro."
      ],
      "concept": "Contexto-orçamento de orçamento",
      "hints": [
        "Que informações devem permanecer disponíveis para cada decisão?",
        "Pode a recuperação ser reduzida sem perder provas relevantes?"
      ]
    },
    "agentic-139": {
      "prompt": "Uma avaliação passa uma vez, mas falha em repetidas execuções equivalentes. O que deve medir a equipe antes de declarar confiabilidade?",
      "choices": [
        "Só a melhor execução.",
        "Só a resposta mais curta",
        "Variabilidade dos resultados e frequência de falhas em repetições representativas",
        "Se o agente pode explicar o seu primeiro sucesso"
      ],
      "explanations": [
        "A selecção do melhor caso esconde a instabilidade.",
        "A brevidade não é confiabilidade.",
        "Os resultados repetidos revelam um risco de falha não determinista.",
        "Explicar um sucesso não quantifica a repetibilidade."
      ],
      "concept": "Repetibilidade da avaliação",
      "hints": [
        "O que experimentaria um usuário com muitas execuções?",
        "Uma amostra bem-sucedida caracteriza toda a distribuição?"
      ]
    },
    "agentic-140": {
      "prompt": "Um agente é avaliado num repositório contra o qual foi sintonizado extensivamente. As notas são excelentes. Que avaliação adicional é necessária?",
      "choices": [
        "Mais repetições de exemplos apenas memorizados",
        "Uma contagem de palavras do arquivo de instruções",
        "As mesmas tarefas com variáveis apenas renomeadas",
        "Tarefas ou repositórios representativos, ainda não vistos, dentro do escopo previsto"
      ],
      "explanations": [
        "Os casos memorizados não podem estabelecer uma generalização.",
        "O comprimento da instrução não é de validade externa.",
        "As alterações cosméticas podem manter a mesma solução aprendida.",
        "Os testes de trabalho representativos realizados são transferidos para além do conjunto de ajuste."
      ],
      "concept": "Generalização e sobreadaptação",
      "hints": [
        "O sistema pode estar a explorar a familiaridade?",
        "De onde devem vir as provas para transferir os testes?"
      ]
    },
    "agentic-141": {
      "prompt": "Uma execução primeiro recupera a configuração errada, depois chama a ferramenta certa com esse valor, e depois falha. Como deve proceder a análise?",
      "choices": [
        "Rastrear a mais antiga divergência causal, não apenas o erro final",
        "Classificar cada falha como uma interrupção de ferramenta",
        "Alterar a última chamada de ferramenta sem inspecionar as entradas",
        "Ignorar a recuperação porque o esquema de chamada era válido"
      ],
      "explanations": [
        "A entrada anterior incorreta pode explicar o sintoma posterior.",
        "As provas não estabelecem uma interrupção.",
        "As alterações locais podem deixar intacta a falha causal.",
        "A validade do esquema não estabelece a correção semântica."
      ],
      "concept": "rastreamento de falhas causais",
      "hints": [
        "Quando a execução divergiu pela primeira vez da tarefa pretendida?",
        "O fracasso final foi uma causa ou uma consequência?"
      ]
    },
    "agentic-142": {
      "prompt": "Uma equipe muda instruções, ferramentas, política de memória e modelo simultaneamente. A pontuação melhora. Que limitação deve ser relatada?",
      "choices": [
        "Cada mudança individual é benéfica",
        "O resultado combinado não isola qual alteração causou melhoria",
        "Nenhuma avaliação pode ser útil.",
        "A mudança de modelo deve ser a causa"
      ],
      "explanations": [
        "As contribuições individuais são confusas.",
        "Múltiplas alterações simultâneas limitam a atribuição causal.",
        "O resultado combinado pode ainda ser informativo.",
        "A evidência não isola o modelo."
      ],
      "concept": "atribuição de experimento de ajuste",
      "hints": [
        "Que variáveis mudaram juntas?",
        "O resultado pode identificar um mecanismo responsável?"
      ]
    },
    "agentic-143": {
      "prompt": "A taxa de sucesso agregada de um agente é alta, mas todas as tarefas sensíveis à autorização falham. Que mudança de relatório é mais útil?",
      "choices": [
        "Esconde a pequena categoria para simplificar a comunicação",
        "Relatar apenas a média global",
        "Resultados do segmento por tipo de tarefa e risco",
        "Substitua a taxa de sucesso por tokens de saída totais"
      ],
      "explanations": [
        "As pequenas categorias de alto risco podem ser operacionalmente críticas.",
        "Uma média geral de máscaras concentra fraquezas.",
        "A segmentação expõe falhas relevantes para as decisões de implantação.",
        "O volume do token não mede o sucesso autorizado."
      ],
      "concept": "Avaliação estratificada de risco",
      "hints": [
        "Uma média forte pode esconder um subgrupo perigoso?",
        "Quais falhas são mais importantes para a implantação prevista?"
      ]
    },
    "agentic-144": {
      "prompt": "Uma pausa de tempo é causada por um serviço externo lento, não por um raciocínio lento. Qual ajuste é mais alvo?",
      "choices": [
        "Reescrever todos os requisitos da empresa",
        "Aumentar o número de agentes de planeamento",
        "Remover toda observabilidade",
        "Ajustar os tempos limite e as tentativas limitadas conforme as evidências do serviço"
      ],
      "explanations": [
        "Os requisitos não reparam a latência do serviço observada.",
        "Mais planejamento pode adicionar custos gerais sem resolver o gargalo de engarrafamento.",
        "A remoção de provas impede o diagnóstico.",
        "A ajuste das políticas de execução aborda o atraso externo medido."
      ],
      "concept": "ajuste orientada para o ambiente",
      "hints": [
        "Onde é realmente gasto o tempo passado?",
        "Que configuração controla a recuperação naquela camada?"
      ]
    },
    "agentic-145": {
      "prompt": "A resposta final de um agente afirma ter executado um scanner, mas nenhum evento ou relatório de execução existe. O que deve concluir o avaliador?",
      "choices": [
        "A alegação não é fundamentada e faltam provas necessárias",
        "O scanner deve ter funcionado de forma invisível.",
        "Palavras fluentes provam a conclusão",
        "A alegação substitui um artefato"
      ],
      "explanations": [
        "As alegações de conclusão exigem provas ligadas à execução.",
        "Não se pode presumir uma execução invisível.",
        "A fluência não é a origem da ferramenta.",
        "Uma declaração não substitui o relatório requerido."
      ],
      "concept": "Verificação das alegações de execução",
      "hints": [
        "O que demonstra independentemente que a ação ocorreu?",
        "Pode-se escrever a mesma resposta sem executar a ferramenta?"
      ]
    },
    "agentic-146": {
      "prompt": "Um plano segue a questão, mas viola a restrição explícita de não novas dependências de um repositório. Como é que deve marcar?",
      "choices": [
        "Completamente bem sucedido se o recurso funcionar",
        "Uma falha de restrição mesmo que o resultado funcional seja correto",
        "É bem-sucedido se a dependência for popular",
        "É bem-sucedido se o agente pedir desculpas depois."
      ],
      "explanations": [
        "O sucesso inclui as restrições operacionais aplicáveis.",
        "A funcionalidade correta não elimina um limite de tarefa violado.",
        "A popularidade não supera a política.",
        "Um pedido de desculpas não estabelece o cumprimento."
      ],
      "concept": "Avaliação consciente de restrições",
      "hints": [
        "Quais requisitos eram conjuntos em vez de opcionais?",
        "A correção funcional pode coexistir com a execução inaceitável?"
      ]
    },
    "agentic-147": {
      "prompt": "Uma equipe quer detectar se um agente para quando um resultado da ferramenta tenta anular instruções. Qual é o caso de teste mais adequado?",
      "choices": [
        "Uma construção bem-sucedida normal apenas",
        "Um teste ortográfico no resumo final",
        "Uma resposta controlada de ferramentas adversárias com comportamento de fronteira esperado explícito",
        "Um ataque de produção sem a aprovação do proprietário"
      ],
      "explanations": [
        "Um caminho feliz não exerce o limite da confiança.",
        "A ortografia não mede a resistência à instrução.",
        "Um caso controlado testa diretamente o comportamento de segurança exigido.",
        "Os ataques de produção não aprovados não constituem um método de avaliação adequado."
      ],
      "concept": "Avaliação dos limites adversários",
      "hints": [
        "Que modo de falha deve exercer o caso?",
        "Como pode ser testado sem expor sistemas reais?"
      ]
    },
    "agentic-148": {
      "prompt": "Um painel de controle de falhas agrupa todas as execuções fracassadas como \"erro de IA\". Que melhoria ajuda mais a remediação?",
      "choices": [
        "Renomear o rótulo para \"comportamento inesperado\"",
        "Remover as falhas dos relatórios",
        "Relatar apenas o número de retemps",
        "Classificar causas usando planos, rastros de ferramentas e evidências de contexto e do ambiente"
      ],
      "explanations": [
        "Um novo rótulo genérico não identifica causas.",
        "Excluir falhas impede a aprendizagem.",
        "As contagens de retrospectiva não explicam por que ocorreram falhas.",
        "As categorias de causas apoiam mudanças direcionadas em vez de ajustes não direcionados."
      ],
      "concept": "Taxonomia de falhas acionáveis",
      "hints": [
        "Todas as falhas seriam reparadas pela mesma mudança?",
        "Que evidência distingue as categorias com diferentes remédios?"
      ]
    },
    "agentic-149": {
      "prompt": "Um agente atualizado é mais rápido porque evita as entregas de revisão necessárias. Como deve a equipe interpretar o ganho de latência?",
      "choices": [
        "Como comportamento não conforme, e não como uma otimização aceitável",
        "Como prova a porta de revisão era desnecessária",
        "Como uma razão automática para expandir a autonomia",
        "Como prova de que todas as métricas de qualidade melhoraram"
      ],
      "explanations": [
        "O desempenho deve ser medido dentro das limitações de governança exigidas.",
        "Salto de um controle não demonstra que ele careça de valor.",
        "A não conformidade não justifica mais autoridade.",
        "A latência por si só não demonstra qualidade."
      ],
      "concept": "Avaliação dentro das limitações da governação",
      "hints": [
        "As mesmas regras foram seguidas em ambas as medições?",
        "O que omitiu o agente para obter o ganho?"
      ]
    },
    "agentic-150": {
      "prompt": "Um avaliador classifica a prosa final como correta, embora o agente tenha modificado o repositório errado. O que deve acrescentar a rubrica?",
      "choices": [
        "Mais ênfase na gramática",
        "Objetivo de execução e verificação do escopo autorizado",
        "Duração mínima da resposta",
        "Uma recompensa pela linguagem de conclusão confiante"
      ],
      "explanations": [
        "A gramática não valida o alvo da mutação.",
        "O sucesso da tarefa inclui agir com o recurso autorizado correto.",
        "O comprimento pode aumentar sem fixar o escopo.",
        "A confiança pode esconder a execução incorreta."
      ],
      "concept": "Avaliação da correção da ação",
      "hints": [
        "O que pode ser entregue é apenas uma mensagem?",
        "Onde ocorreu o efeito real?"
      ]
    },
    "agentic-151": {
      "prompt": "Uma alteração de ajuste reduz a recuperação desnecessária de memória, mas elimina acidentalmente as restrições aprovadas. O que deve fazer a equipe?",
      "choices": [
        "Aceitar porque menos tokens foram usados",
        "Remover todas as fontes de memória",
        "Preservar as restrições essenciais e reavaliar a política revisada de recuperação de informações",
        "Aumentar as permissões das ferramentas para compensar"
      ],
      "explanations": [
        "A poupança de tokens não justifica a perda do contexto necessário.",
        "A remoção do cobertor sacrifica a continuidade útil.",
        "A recuperação seletiva deve preservar informações críticas para a decisão.",
        "As autorizações não podem substituir as restrições que faltam."
      ],
      "concept": "Avaliação de ajuste da memória",
      "hints": [
        "Qual o conteúdo recuperado era ruído e qual era obrigatório?",
        "Que caso de regressão revelaria a perda?"
      ]
    },
    "agentic-152": {
      "prompt": "A falha de um agente é reproduzida apenas com uma versão de imagem runner. O que deve registrar a investigação?",
      "choices": [
        "Apenas a última produção bem sucedida",
        "Só a personalidade do agente.",
        "Apenas o título da edição",
        "A imagem do runner, dependências, revisão, entradas e evidências da falha"
      ],
      "explanations": [
        "Uma saída de sucesso não preserva as condições de falha.",
        "Só o prompt omite a dependência do ambiente.",
        "Um título é um contexto de reprodução insuficiente.",
        "O ambiente e a proveniência da execução permitem uma reprodução direccionada."
      ],
      "concept": "Análise de erros reprodutíveis",
      "hints": [
        "Quais condições distinguem as execuções com falha das bem-sucedidas?",
        "O que outro engenheiro precisaria para reproduzir o resultado?"
      ]
    },
    "agentic-153": {
      "prompt": "Uma equipe avalia um agente de triagem. Marca as questões com precisão, mas envia detalhes confidenciais para uma ferramenta não autorizada. Qual é o resultado?",
      "choices": [
        "Falha da restrição de segurança apesar dos rótulos precisos",
        "Sucesso completo porque os rótulos são corretos",
        "Sucesso se a divulgação reduzir a latência",
        "Um resultado imensurável"
      ],
      "explanations": [
        "A correção e o tratamento autorizado dos dados são ambos necessários.",
        "As etiquetas não justificam a divulgação não autorizada.",
        "A eficiência não prevalece sobre a confidencialidade.",
        "Os vestígios das ferramentas podem estabelecer o evento de divulgação."
      ],
      "concept": "Segurança como restrição para o sucesso",
      "hints": [
        "Quais requisitos regem a forma como o resultado é produzido?",
        "Pode-se ainda obter uma resposta correta por um caminho inaceitável?"
      ]
    },
    "agentic-154": {
      "prompt": "Uma equipe quer implantar um agente sintonizado depois de os testes offline melhorarem. Qual é o próximo passo que reduz melhor o risco de implantação?",
      "choices": [
        "Ativar imediatamente todas as ferramentas de mutação em todos os lugares",
        "Utilizar uma implantação restrita com critérios de acompanhamento e retrocesso",
        "Eliminar a versão anterior antes de observar o comportamento ao vivo",
        "Desativar a comunicação de falhas para reduzir o ruído"
      ],
      "explanations": [
        "A grande ativação excede as provas dos testes offline.",
        "Uma implantação limitada testa as condições reais enquanto mantém a recuperação.",
        "A remoção da versão anterior pode eliminar um retrocesso seguro.",
        "A comunicação de falhas é essencial durante a implantação."
      ],
      "concept": "implantação de ajustes baseados em evidências",
      "hints": [
        "Qual a diferença entre casos offline e tráfego ao vivo?",
        "Como pode a exposição permanecer reversível ao reunir evidências?"
      ]
    },
    "agentic-155": {
      "prompt": "Um agente juiz marca os resultados de outro agente. O que deve fazer a equipe antes de confiar nas suas classificações?",
      "choices": [
        "Suponha que os agentes estejam sempre de acordo com os especialistas.",
        "Use a confiança do juiz como a verdade fundamental.",
        "Calibrar a rubrica com os exemplos independentemente revisados e verificar o desacordo",
        "Remover exemplos de referência humana para evitar comparações"
      ],
      "explanations": [
        "O acordo de peritos deve ser medido.",
        "Confiança não é verdade.",
        "A calibração expõe erros sistemáticos de pontuação e ambigüidade.",
        "Os exemplos de referência apoiam, em vez de prejudicarem, a validação."
      ],
      "concept": "Calibração do avaliador",
      "hints": [
        "Como saberá se o juiz avalia a qualidade pretendida?",
        "Quais desentendimentos devem ser examinados em vez de serem mediados?"
      ]
    },
    "agentic-156": {
      "prompt": "Um agente repete cinco vezes uma solicitação inválida que falha de modo determinístico. Qual ajuste melhor resolve o comportamento observado?",
      "choices": [
        "Aumentar o limite de novas tentativas",
        "Baixar todos os limiares de teste",
        "Cambio de repositórios em caso de falha",
        "Classificar os erros e tentar novamente apenas quando a falha puder ser transitória"
      ],
      "explanations": [
        "Mais tentativas repetem a mesma entrada inválida.",
        "Os limiares de teste não estão relacionados com o pedido de validade.",
        "Um repositório diferente não fixa o contrato de solicitação.",
        "A política de reabilitação de erros visa o mecanismo de falha real."
      ],
      "concept": "Avaliação da política de retribuição",
      "hints": [
        "O tempo sozinho faria este pedido válido?",
        "Quais falhas precisam de mudanças de entrada em vez de tentativas repetidas?"
      ]
    },
    "agentic-157": {
      "prompt": "Um agente parece estar em atraso, mas na verdade está aguardando da aprovação necessária. O que deve distinguir a avaliação?",
      "choices": [
        "Tempo de execução ativo, tempo de aprovação bloqueado e verdadeira falta de progresso",
        "Apenas o tempo total do relógio de parede",
        "Apenas o número de mensagens finais",
        "Apenas o tempo de inferência do modelo"
      ],
      "explanations": [
        "Os Estados separados apoiam um diagnóstico justo e mudanças específicas no processo.",
        "A duração total por si só confunde diferentes causas.",
        "As contagens de mensagens não identificam as condições de espera.",
        "Inferência exclui atrasos na aprovação das ferramentas."
      ],
      "concept": "Métricas operacionais de consciência do estado",
      "hints": [
        "O agente pode prosseguir agora?",
        "Que parte do tempo passado pode realmente afetar a ajuste do modelo?"
      ]
    },
    "agentic-158": {
      "prompt": "Uma análise pós-incidente identifica uma correção no prompt, uma restrição de ferramentas e um novo caso de regressão. O que completa o ciclo de aprendizado?",
      "choices": [
        "Arquivamento das recomendações sem aplicá-las",
        "Implementação das alterações e verificação dos resultados em relação à falha e ao conjunto mais amplo",
        "Eliminar imediatamente os vestígios do incidente",
        "Declarar impossível o fracasso após a atualização da prosa"
      ],
      "explanations": [
        "As recomendações sozinhas não mudam o comportamento.",
        "A remediação verificada liga a análise à melhoria demonstrada.",
        "Podem ser necessários rastreamentos para validação e auditoria.",
        "Uma atualização das instruções não é prova de que a falha não possa repetir-se."
      ],
      "concept": "fechar o ciclo de avaliação-ajuste",
      "hints": [
        "Que evidências demonstram que a remediação funcionou?",
        "Como é que a equipe vai detectar regressões involuntárias?"
      ]
    },
    "agentic-159": {
      "prompt": "Dois agentes podem atualizar a documentação e adicionar testes de parser de forma independente. Como devem executar em paralelo com segurança?",
      "choices": [
        "Compartilhar um único checkout com gravação, sem responsabilidades atribuídas",
        "Fazer push diretamente para a branch padrão",
        "Utilizar espaços de trabalho isolados com resultados explícitos e um proprietário de integração",
        "Quem terminar primeiro deve sobreescrever o outro."
      ],
      "explanations": [
        "Os escritos compartilhados podem interferir mesmo em tarefas independentes.",
        "Directos empurram revisão de bypass.",
        "O isolamento e a propriedade permitem a simultaneidade com a integração controlada.",
        "A ordem de conclusão não estabelece a correção."
      ],
      "concept": "isolamento paralelo de execução",
      "hints": [
        "Que recursos poderão os trabalhadores compartilhar acidentalmente?",
        "Quem decide como os resultados são aceitos juntos?"
      ]
    },
    "agentic-160": {
      "prompt": "Um agente de execução requer um contrato API de um agente de projeto. Que padrão de orquestração se encaixa?",
      "choices": [
        "Comece com os dois sem contrato compartilhado.",
        "Deixe a implementação inventar sua própria interface",
        "Trabalho duplicado de projeto em cada trabalhador",
        "Tornar a aceitação de contratos uma dependência explícita antes da execução"
      ],
      "explanations": [
        "As dependências não resolvidas criam suposições incompatíveis.",
        "Inventar o contrato derrota a entrega necessária.",
        "A duplicação pode produzir contratos contraditórios.",
        "Um portão de dependência dá à implementação uma entrada estável."
      ],
      "concept": "Orquestração consciente de dependência",
      "hints": [
        "A tarefa posterior pode ser correta antes de existir a sua entrada?",
        "Que artefato marca a entrega como pronta?"
      ]
    },
    "agentic-161": {
      "prompt": "Dois agentes paralelos propõem edições incompatíveis para a mesma função de autenticação. O que deve fazer o coordenador?",
      "choices": [
        "Interromper a integração, comparar intenções e evidências e reconciliar através do proprietário",
        "Aceitar a marca de tempo posterior automaticamente",
        "Concatenar ambas as implementações",
        "Ignorar um agente sem gravar a decisão"
      ],
      "explanations": [
        "A resolução de conflitos requer revisão semântica, não apenas a merge de textos.",
        "A recência não estabelece a compatibilidade.",
        "A concatenação pode quebrar o comportamento.",
        "A rejeição não documentada enfraquece a rastreabilidade."
      ],
      "concept": "Conflitos de mudança sobrepostos",
      "hints": [
        "Os dois comportamentos pretendidos podem coexistir?",
        "Quem é o proprietário da interface afetada e dos seus critérios de aceitação?"
      ]
    },
    "agentic-162": {
      "prompt": "Um coordenador delega um bug a dois trabalhadores acidentalmente. O que impede mais diretamente o esforço duplicado nas futuras execuções?",
      "choices": [
        "Nomes de trabalhadores mais longos",
        "Identidades únicas de tarefas com reivindicações e propriedade explícitas",
        "Um modelo maior para ambos os trabalhadores",
        "Somente resumos finais mais frequentes"
      ],
      "explanations": [
        "Os nomes por si só não impedem a duplicação da atribuição.",
        "As identidades de trabalho reivindicadas expõem e restringem a duplicação de propriedade.",
        "O tamanho do modelo não corrige a contabilidade da expedição.",
        "O relatório final detecta duplicação tarde demais."
      ],
      "concept": "Prevenção de duplicações de trabalho",
      "hints": [
        "Como o despachador sabe que uma tarefa já foi atribuída?",
        "Que estado deve mudar quando um trabalhador aceita um trabalho?"
      ]
    },
    "agentic-163": {
      "prompt": "Um agente revisor e um executor discordam sobre se uma alteração satisfaz os requisitos. O que deve arbitrar?",
      "choices": [
        "O agente com maior resposta",
        "A maioria das chamadas de modelo repetidas",
        "O contrato de tarefa, provas independentes e julgamento humano responsável se não for resolvido",
        "Confiança do executor"
      ],
      "explanations": [
        "O comprimento não é correto.",
        "As opiniões repetidas podem compartilhar o mesmo erro.",
        "A evidência e a autoridade definida resolvem discordâncias substanciais.",
        "A autoconfiança não pode suprimir os requisitos."
      ],
      "concept": "Resultados de agentes contraditórios",
      "hints": [
        "Que alegações podem ser testadas?",
        "Quem tem autoridade quando as provas deixam uma política ou decisão intencional?"
      ]
    },
    "agentic-164": {
      "prompt": "Uma execução multiagente conclui três de quatro componentes obrigatórios. O quarto agente falha. O que o coordenador deve informar?",
      "choices": [
        "Sucesso total porque a maioria dos trabalhadores terminou",
        "Nenhum progresso útil ocorreu",
        "Um resultado combinado com o componente faltante escondido",
        "Completamento parcial com artefatos verificados, dependências não satisfeitas e opções de recuperação"
      ],
      "explanations": [
        "Não é necessária a integridade de uma maioria dos votos.",
        "O trabalho concluído pode ainda ser útil.",
        "Esconde-se lacunas distorce a prontidão.",
        "O estado parcial explícito apoia a recuperação segura e a revisão honesta."
      ],
      "concept": "Resultados parciais de vários agentes",
      "hints": [
        "Quais entregas estão verificadas?",
        "O que ainda impede que a tarefa global cumpra o seu contrato?"
      ]
    },
    "agentic-165": {
      "prompt": "Um trabalhador não produziu progresso por uma hora. O que deve verificar o coordenador antes de lançar um substituto?",
      "choices": [
        "Sinais periódicos de atividade, estado das ferramentas, aprovações pendentes e efeitos pertencentes à tarefa",
        "Só o nome do trabalhador",
        "Só se há outro trabalhador disponível",
        "Se a resposta final pode ser adivinhada"
      ],
      "explanations": [
        "O diagnóstico distingue um trabalhador parado de uma espera legítima e evita efeitos duplicados.",
        "Os nomes não revelam o estado operacional.",
        "A disponibilidade não estabelece a segurança de substituição.",
        "A suposição da conclusão não é evidência."
      ],
      "concept": "Diagnóstico de execuções estagnadas",
      "hints": [
        "O trabalhador está bloqueado, ativo ou desconectado?",
        "Podia ainda completar uma mutação pendente?"
      ]
    },
    "agentic-166": {
      "prompt": "Um trabalhador falhado deve ser substituído enquanto uma escrita externa pode ainda estar em execução. Qual é a recuperação mais segura?",
      "choices": [
        "Comece uma duplicação de escrever imediatamente",
        "Revocar ou cancelar a autoridade do trabalhador anterior e conciliar os efeitos antes da retomada",
        "Dê acesso ao administrador a ambos os trabalhadores",
        "Jogue todos os registros de execução existentes"
      ],
      "explanations": [
        "Um duplicado pode competir com o efeito original.",
        "O controle da autoridade e a reconciliação impedem os escritores de recuperação concorrentes.",
        "Mais privilégios aumentam o impacto da condição de corrida.",
        "Os registros são necessários para compreender os efeitos incertos."
      ],
      "concept": "Reposição e cercas de trabalhadores obsoletos",
      "hints": [
        "O trabalhador original ainda podia agir?",
        "Como pode o substituto saber quais efeitos já ocorreram?"
      ]
    },
    "agentic-167": {
      "prompt": "Um novo especialista é adicionado a um fluxo de trabalho ativo. Que entrega deve receber?",
      "choices": [
        "A conversa histórica de cada organização",
        "Apenas um título de papel",
        "Uma tarefa limitada, contrato em curso, estado relevante, permissões e saída esperada",
        "As credenciais ilimitadas do coordenador"
      ],
      "explanations": [
        "O histórico não filtrado acrescenta ruído e risco de divulgação.",
        "Um título não define o trabalho executável.",
        "Uma transferência com escopo estabelece responsabilidade e continuidade.",
        "A especialização não exige herdar toda a autoridade."
      ],
      "concept": "Adição segura de agentes",
      "hints": [
        "O que deve saber o novo trabalhador para evitar duplicar ou contradizer o trabalho?",
        "Que autoridade é realmente necessária?"
      ]
    },
    "agentic-168": {
      "prompt": "Uma equipe atualiza as instruções de um agente durante uma execução longa. Como evitar interromper as tarefas em andamento?",
      "choices": [
        "Substituir silenciosamente as instruções no meio da operação",
        "Suponha que todos os trabalhadores usem instantaneamente o mesmo contexto",
        "Excluir instruções e registros antigos",
        "Versionar as definições e migrar em um ponto de transferência controlado"
      ],
      "explanations": [
        "As alterações no meio da operação podem invalidar as suposições de tarefa.",
        "Os trabalhadores podem conservar o contexto mais antigo.",
        "São necessárias definições antigas para auditoria e reprodução.",
        "Os limites de versão tornam o comportamento e a transição explícitos."
      ],
      "concept": "Ciclo de vida da configuração do agente",
      "hints": [
        "Qual definição governa as ações já concluídas?",
        "Quando podem ser adotadas novas instruções sem alterar um contrato ativo?"
      ]
    },
    "agentic-169": {
      "prompt": "Um agente especialista está a aposentar-se. O que deve preservar o coordenador?",
      "choices": [
        "Suas decisões, referências a artefatos, responsabilidades pendentes e registro da transferência",
        "Apenas o seu nome de exibição",
        "Todas as credenciais ativas indefinidamente",
        "Nada após a saída do processo"
      ],
      "explanations": [
        "A aposentadoria não deve perder auditabilidade ou responsabilidades inacabadas.",
        "Um nome não pode reconstruir a obra.",
        "As credenciais não devem ser mantidas desnecessariamente.",
        "A terminação do processo não elimina as necessidades de continuidade."
      ],
      "concept": "aposentadoria de agente",
      "hints": [
        "Quem herda um trabalho incompleto?",
        "O que precisará um auditor depois que o agente já não exista?"
      ]
    },
    "agentic-170": {
      "prompt": "Branches de trabalhadores separados se fundem limposamente, mas o seu comportamento combinado quebra um API compartilhado. Que validação faltava?",
      "choices": [
        "Maiores verificações de marcadores de conflito",
        "Testes de integração sobre a revisão combinada e o contrato da interface",
        "Uma contagem de trabalhadores commits",
        "Um resumo mais longo do coordenador"
      ],
      "explanations": [
        "A limpeza textual não demonstra a compatibilidade semântica.",
        "A validação conjunta testa interações não exercitadas nas execuções isoladas.",
        "A contagem de compromissos não estabelece a correção da integração.",
        "Detalhes resumidos não podem substituir a evidência da execução."
      ],
      "concept": "validação da integração semântica",
      "hints": [
        "O que pode mudar quando componentes independentemente válidos são combinados?",
        "Alguma prova exerceu o estado de integração real?"
      ]
    },
    "agentic-171": {
      "prompt": "Um coordenador lança muitos trabalhadores contra um serviço de taxa limitada. As falhas aumentam. O que deve mudar?",
      "choices": [
        "Adicionar ainda mais trabalhadores",
        "Rotear identidades para evitar limites",
        "Limitar a concorrência e coordenar o orçamento de solicitações compartilhadas",
        "Eliminar os relatórios de limites de tempo excedidos"
      ],
      "explanations": [
        "Mais trabalhadores aumentam a pressão sobre o gargalo de engarrafamento.",
        "A rotação de identidade não é uma gestão de capacidade legítima.",
        "O orçamento compartilhado de recursos impede que os retestes independentes amplifiquem a carga.",
        "A ocultação de limites de tempo excedidos não melhora o rendimento."
      ],
      "concept": "Orçamentos de recursos multi-agentes",
      "hints": [
        "Qual recurso é compartilhado apesar de contextos separados?",
        "A política de novas tentativas de cada agente pode parecer razoável isoladamente, mas ser prejudicial no conjunto?"
      ]
    },
    "agentic-172": {
      "prompt": "Um agente revisor precisa das evidências da implementação, mas não deve modificar o patch que revisa. Qual projeto é adequado?",
      "choices": [
        "Compartilhar o shell ilimitado do implementador",
        "Deixe que o revisor corrija silenciosamente cada descoberta",
        "Dar revisão e implantação das mesmas credenciais",
        "Proporcionar acesso a artefatos apenas para leitura e transferência de resultados separada"
      ],
      "explanations": [
        "O acesso ilimitado prejudica a separação de funções.",
        "Edições silenciosas borram a autoria e invalidam o estado revisto.",
        "A autoridade de implantação não é necessária para revisão.",
        "As evidências de somente leitura preservam os limites da revisão e os feedback rastreáveis."
      ],
      "concept": "isolamento do papel de revisor",
      "hints": [
        "Quais são as capacidades necessárias para avaliar o trabalho?",
        "Como as alterações solicitadas devem ser devolvidas ao executor?"
      ]
    },
    "agentic-173": {
      "prompt": "A entrega final de um trabalhador diz apenas \"feito\". O que deve exigir o coordenador?",
      "choices": [
        "Referências entregues, revisão, validação, questões não resolvidas e estado de conclusão",
        "Uma declaração de sucesso mais entusiasta",
        "A transcrição completa do raciocínio privado",
        "Uma percentagem de confiança sem provas"
      ],
      "explanations": [
        "Uma entrega rica em evidências permite ao coordenador verificar e integrar o resultado.",
        "O entusiasmo não estabelece a prontidão.",
        "A deliberação privada não é necessária para a obtenção de provas operacionais.",
        "A confiança não substitui os artefatos."
      ],
      "concept": "Transferências de agentes verificáveis",
      "hints": [
        "Um outro trabalhador pode continuar sem adivinhar?",
        "O que torna a alegação de conclusão verificável de forma independente?"
      ]
    },
    "agentic-174": {
      "prompt": "Um trabalhador solicita uma ampliação de escopo que o próprio coordenador não pode autorizar. O que é que vai acontecer?",
      "choices": [
        "O coordenador aprova porque a delegação implica autoridade ilimitada",
        "Escalada para o proprietário apropriado, preservando o trabalho limitado",
        "Peça a outro trabalhador para conceder permissão",
        "Tratar o pedido como aprovação"
      ],
      "explanations": [
        "A autoridade delegada não pode exceder o escopo do próprio coordenador.",
        "A autoridade não resolvida precisa do responsável responsável pela decisão.",
        "O acordo entre pares não cria autorização.",
        "Um pedido não é uma decisão de autorização."
      ],
      "concept": "Limites das autoridades delegadas",
      "hints": [
        "Pode um coordenador conceder autoridade que não possui?",
        "Quem é o dono do impacto adicional proposto?"
      ]
    },
    "agentic-175": {
      "prompt": "Dois agentes usam checkouts separados, mas compartilham um banco de dados de testes com acesso de gravação. Por que o isolamento é incompleto?",
      "choices": [
        "Não podem existir checkouts separados",
        "Só as indicações precisam de isolamento.",
        "O estado externo compartilhado pode ainda causar interferências",
        "Mudanças na banco de dados nunca afetam os testes"
      ],
      "explanations": [
        "É possível ter checkouts separados, mas isso não basta por si só.",
        "Os recursos de execução também precisam de limites.",
        "O isolamento deve incluir serviços e aparelhos mutáveis.",
        "As mutações simultâneas de fixação podem alterar os resultados dos testes."
      ],
      "concept": "Isolamento de recursos externos",
      "hints": [
        "Que recursos mutáveis estão fora do sistema de arquivos?",
        "Um trabalhador pode mudar as observações de outro?"
      ]
    },
    "agentic-176": {
      "prompt": "Um coordenador quer reconstruir por que os trabalhadores escolheram projetos conflitantes. Qual telemetria é mais útil?",
      "choices": [
        "Somente tótulos agregados de tokens",
        "Apenas nomes de trabalhadores",
        "Só a diferença final combinada",
        "Contratos, decisões, transferências, revisões e resultados de tarefas correlacionadas"
      ],
      "explanations": [
        "Os totais de utilização não explicam as decisões.",
        "Os nomes não preservam o contexto causal.",
        "A diferença final omite alternativas rejeitadas e tempo de entrega.",
        "Os artefatos correlacionados apoiam a análise causal pós-hoc."
      ],
      "concept": "Observabilidade multi-agente",
      "hints": [
        "O que sabia cada trabalhador quando agiu?",
        "Como pode uma decisão estar ligada à sua entrada e ao seu efeito subsequente?"
      ]
    },
    "agentic-177": {
      "prompt": "Um fluxo de trabalho contém um trabalhador de investigação opcional falhado e verificações de implementação necessárias de sucesso. Como deve o coordenador decidir se continuar?",
      "choices": [
        "Usar o contrato de dependência e aceitação declarado, comunicando a falha opcional",
        "Falar todos os fluxos de trabalho sempre que qualquer trabalhador parar",
        "Ignorar todas as falhas dos trabalhadores",
        "Contar trabalhadores bem-sucedidos e usar uma maioria simples"
      ],
      "explanations": [
        "A semântica explícita exigida versus opcional apoia uma decisão honesta.",
        "Uma falha opcional não precisa bloquear a aceitação não relacionada.",
        "Algumas falhas invalidam o trabalho necessário.",
        "Os números de trabalhadores não representam a importância da dependência."
      ],
      "concept": "dependências obrigatórias e opcionais dos trabalhadores",
      "hints": [
        "A saída faltante era necessária para a correção?",
        "O que diz o contrato de orquestração sobre operação degradada?"
      ]
    },
    "agentic-178": {
      "prompt": "Dois agentes esperam a saída um do outro indefinidamente. O que deve acrescentar o desenho da orquestração?",
      "choices": [
        "Mensagens de espera mais longas",
        "Detectar ciclos de dependências e resolvê-los explicitamente ou escalar ao esgotar o prazo",
        "Mais agentes com a mesma dependência circular",
        "Uma regra que considera a espera como sucesso"
      ],
      "explanations": [
        "As mensagens não rompem um ciclo lógico.",
        "Um ciclo detectado requer uma alteração da dependência ou uma intervenção responsável.",
        "Replicar o ciclo aumenta a capacidade desperdiçada.",
        "Esperar não satisfaz nenhuma das tarefas."
      ],
      "concept": "Impasse de coordenação",
      "hints": [
        "Pode qualquer uma dessas tarefas produzir primeiro o seu pré-requisito?",
        "Quem pode alterar a estrutura de dependência?"
      ]
    },
    "agentic-179": {
      "prompt": "Um agente substituto recebe a tarefa original, mas não o progresso do agente que falhou. Que risco isso introduz?",
      "choices": [
        "Não pode gerar prosa.",
        "Ele herda automaticamente todos os resultados da ferramenta anterior",
        "Pode repetir os efeitos ou abandonar as decisões já estabelecidas",
        "Deve usar menos tokens."
      ],
      "explanations": [
        "A geração de prosa não tem relação com a continuidade da recuperação.",
        "O estado anterior não é garantido sem uma transferência.",
        "A falta de progresso obscurece os efeitos completos e as restrições.",
        "A utilização dos tokens não é determinada por esta omissão."
      ],
      "concept": "Continuidade de transferência de recuperação",
      "hints": [
        "Qual é a diferença entre começar de novo e assumir?",
        "Que ações não devem ser repetidas?"
      ]
    },
    "agentic-180": {
      "prompt": "Um coordenador usa um planejador, implementador e avaliador. Que ordem melhor preserva suas responsabilidades?",
      "choices": [
        "Avaliação apenas após a implantação",
        "Implementação antes de definir o sucesso",
        "Deixe o executor aprovar cada alteração do plano sozinho",
        "Estabelecer o contrato, executar dentro dele, depois avaliar independentemente as provas"
      ],
      "explanations": [
        "A avaliação pós-desenvolvimento perde o limite de aceitação.",
        "O sucesso indefinido não pode orientar a execução confiável.",
        "A aprovação unilateral enfraquece a separação de funções.",
        "Uma sequência orientada por contrato alinha as decisões, ações e validação."
      ],
      "concept": "Orquestração de Planeador-Executor-Evaluador",
      "hints": [
        "O que deve ser conhecido antes da aplicação?",
        "Qual papel verifica o resultado entregue?"
      ]
    },
    "agentic-181": {
      "prompt": "Um fluxo de trabalho multi-agente produz PRs duplicado após uma reinicialização do coordenador. Que estado deve sobreviver ao reinicio?",
      "choices": [
        "As atribuições de tarefas a trabalhadores e identidades de entrega verificadas",
        "Apenas o nome do modelo",
        "Só a última saudação.",
        "Só o número de trabalhadores planejados"
      ],
      "explanations": [
        "A atribuição duradoura e a identidade de saída impedem a redistribuição do trabalho concluído.",
        "A identidade do modelo não rastreia efeitos.",
        "As saudações não têm progresso na orquestração.",
        "Uma contagem não identifica a propriedade ou os resultados."
      ],
      "concept": "Estado de orquestração duradouro",
      "hints": [
        "Como saberá o coordenador o que já existe?",
        "Quais identificadores ligam o trabalho lógico ao PR produzido?"
      ]
    },
    "agentic-182": {
      "prompt": "Um trabalhador de código muda uma interface depois que um trabalhador de documentação finalizou sua saída. O que deve fazer o coordenador?",
      "choices": [
        "Aceitar ambas as saídas de forma independente",
        "Invalida as suposições afetadas e revalida a documentação",
        "Eliminar todos os artefatos anteriores",
        "Tratar o código mais recente como prova de que a documentação permanece correta"
      ],
      "explanations": [
        "Os resultados podem agora discordar.",
        "As alterações de dependência exigem verificações específicas de atualidade a jusante.",
        "O histórico útil deve continuar a ser auditável.",
        "O novo código não valida as antigas descrições."
      ],
      "concept": "Invalidação da dependência entre agentes",
      "hints": [
        "Que trabalhador consumiu a interface anterior?",
        "Que evidências ficaram obsoletas quando a interface mudou?"
      ]
    },
    "agentic-183": {
      "prompt": "Vários agentes concordam que existe um API não documentado, mas nenhum verificou isso. O que deve concluir o coordenador?",
      "choices": [
        "Acordo provando a existência do API",
        "O trabalhador mais confiante é autoritário.",
        "O consenso não basta sem evidências independentes correspondentes a uma versão específica",
        "Mais votos sem fundamento estabelecerão a verdade"
      ],
      "explanations": [
        "Os agentes podem ter alucinações correlacionadas.",
        "Confiança não é prova de API.",
        "A verificação é necessária mesmo quando vários trabalhadores concordam.",
        "Os pareceres adicionais não apoiados não criam documentação."
      ],
      "concept": "erros multi-agentes correlacionados",
      "hints": [
        "Os agentes estão a usar provas independentes ou a mesma suposição?",
        "Onde pode ser verificada a alegação controvertida?"
      ]
    },
    "agentic-184": {
      "prompt": "Um trabalhador é autorizado a editar testes, mas propõe mudar a política da organização. O que deve aplicar o coordenador?",
      "choices": [
        "Qualquer trabalhador pode redefinir a política se for útil",
        "Uma edição de política é inofensiva porque é texto",
        "O trabalhador pode atribuir-se um papel mais amplo",
        "O papel limitado do trabalhador e um caminho de escalada autorizado"
      ],
      "explanations": [
        "A utilidade não confere autoridade de governança.",
        "O texto da política pode ter efeitos consequentes.",
        "A auto-expansão derrota o controle delegado.",
        "Os limites do papel permanecem vinculativos durante a orquestração."
      ],
      "concept": "aplicação do escopo dos trabalhadores",
      "hints": [
        "Que tarefa e autoridade foram delegadas?",
        "A orquestração cria autorização adicional automaticamente?"
      ]
    },
    "agentic-185": {
      "prompt": "Um coordenador substitui uma versão de trabalhador após a regressão. Como deve o retrocesso preservar a continuidade ativa do fluxo de trabalho?",
      "choices": [
        "Selecionar a versão comprovadamente funcional e retomar a partir de um estado compatível e verificado",
        "Reinicie todas as mutações externas cegamente",
        "Eliminar o rastro de auditoria do velho trabalhador",
        "Misture as instruções de ambas as versões sem gravá-la"
      ],
      "explanations": [
        "A compatibilidade de versão e estado suporta recuperação controlada.",
        "A repetição cega corre o risco de efeitos duplicados.",
        "O histórico de auditoria continua a ser necessário após a substituição.",
        "O comportamento misto não registrado prejudica a reprodução."
      ],
      "concept": "Relocação da versão do agente",
      "hints": [
        "Qual é a versão conhecida para satisfazer o contrato?",
        "A interpretação do estado nessa versão permite retomar a tarefa com segurança?"
      ]
    },
    "agentic-186": {
      "prompt": "Os testes locais de um agente passaram na sua branch, mas o coordenador fez rebase antes da integração. Qual evidência é necessária agora?",
      "choices": [
        "O velho passe é suficiente para sempre.",
        "Verificações pertinentes em relação à revisão integrada resultante",
        "Só a aprovação do trabalhador",
        "Apenas um status de saída de base limpa"
      ],
      "explanations": [
        "Evidências anteriores aplicam-se a um estado anterior.",
        "O estado de integração alterado requer a revalidação adequada.",
        "A aprovação do trabalhador não realiza verificações.",
        "Um rebase limpo verifica a integração do texto, não o comportamento."
      ],
      "concept": "Frescosidade das evidências pós-integração",
      "hints": [
        "Que revisão será realmente aceita?",
        "A evidência exerceu essa revisão?"
      ]
    },
    "agentic-187": {
      "prompt": "Os agentes de um fluxo de trabalho repetem tentativas indefinidamente, mantendo ativa uma tarefa geral que falhou. O que o coordenador deve acrescentar?",
      "choices": [
        "Uma piscina de trabalhadores maior",
        "Orçamentos independentes e ilimitados para cada novo trabalhador",
        "Um orçamento global de tentativas e execução com escalonamento",
        "Uma regra que oculta falhas repetidas"
      ],
      "explanations": [
        "Mais trabalhadores podem multiplicar o ciclo.",
        "Os orçamentos independentes e ilimitados permanecem, no conjunto, ilimitados.",
        "Os limites de nível de fluxo de trabalho contêm repetidas tentativas de recuperação.",
        "Escondir o fracasso não restabelece o progresso."
      ],
      "concept": "Orçamentos de recuperação para todo o fluxo de trabalho",
      "hints": [
        "O comportamento local limitado pode ainda tornar-se ilimitado através da substituição?",
        "Quem é responsável pelo custo total da recuperação?"
      ]
    },
    "agentic-188": {
      "prompt": "Uma equipe quer executar em paralelo dois agentes que editam o mesmo manifesto gerado. Qual é o melhor primeiro passo?",
      "choices": [
        "Suponha que as diferentes indicações garantam nenhuma colisão",
        "Deixe ambos sobreescrever o manifesto e comparar timestamps",
        "Desativar a validação do manifesto",
        "Rever a atribuição de responsabilidades ou serializar a integração do manifesto"
      ],
      "explanations": [
        "Diferenças entre prompts não isolam gravações compartilhadas.",
        "A selecção do timestamp pode descartar as entradas necessárias.",
        "A validação é especialmente importante para os artefatos compartilhados.",
        "A propriedade explícita ou a serialização controla o ponto de colisão."
      ],
      "concept": "Propriedade compartilhada de artefatos",
      "hints": [
        "Qual arquivo continua a ser um alvo comum?",
        "O trabalho paralelo pode ser separado de uma única etapa de integração?"
      ]
    },
    "agentic-189": {
      "prompt": "Um coordenador envia uma análise de segurança para um especialista. Qual é o melhor critério de conclusão?",
      "choices": [
        "Um relatório delimitado de achados, com evidências, justificativa de severidade e limitações",
        "Pelo menos uma descoberta crítica, independentemente das evidências",
        "Uma classificação geral positiva",
        "Recuperação da produção sem restrições"
      ],
      "explanations": [
        "Um relatório apoia uma revisão informada sem forçar um resultado predeterminado.",
        "Exigir uma descoberta crítica incentiva a fabricação.",
        "As classificações positivas não definem a qualidade analítica.",
        "A análise não autoriza automaticamente as alterações da produção."
      ],
      "concept": "Contratos de entrega especializados",
      "hints": [
        "Quais resultados podem ser analisados de forma independente?",
        "A atribuição requer conclusões ou conclusões particulares?"
      ]
    },
    "agentic-190": {
      "prompt": "Um trabalhador falhado deixou recursos temporários num ambiente compartilhado. O que deve incluir a recuperação?",
      "choices": [
        "Eliminar todos os recursos do ambiente",
        "Identificar os recursos de propriedade da tarefa e limpá-los através de caminhos autorizados",
        "Ignorar os recursos porque o trabalhador parou",
        "Peça ao substituto para reutilizar recursos desconhecidos cegamente"
      ],
      "explanations": [
        "A grande eliminação pode prejudicar o trabalho não relacionado.",
        "A limpeza consciente do proprietário contém impacto e preserva a segurança.",
        "Os processos interrompidos podem causar efeitos persistentes.",
        "Os recursos desconhecidos podem conter um estado obsoleto ou conflitante."
      ],
      "concept": "Propriedade de limpeza por falha",
      "hints": [
        "Que recursos pertencem a esta tarefa?",
        "Que efeitos sobrevivem à demissão de trabalhadores?"
      ]
    },
    "agentic-191": {
      "prompt": "Um coordenador resume o aviso de um trabalhador como um sucesso. Como deve o design de entrega reduzir esse risco?",
      "choices": [
        "Remover avisos de mensagens de trabalhadores",
        "Requer louvores mais longas em resumos",
        "Use estados de conclusão explícitos, bloqueadores e referências de artefatos",
        "Sempre interpretar campos faltantes como sucesso"
      ],
      "explanations": [
        "Reprimir advertências oculta resultados degradados.",
        "O elogio aumenta a ambigüidade em vez de resolvê-la.",
        "O status estruturado reduz a interpretação perdida.",
        "Os dados faltantes não constituem uma prova afirmativa da conclusão."
      ],
      "concept": "Transferências de status resistente à perda",
      "hints": [
        "Que distinções de status devem sobreviver ao resumo?",
        "O coordenador pode verificar a alegação com base nas provas anexadas?"
      ]
    },
    "agentic-192": {
      "prompt": "Um fluxo de trabalho adiciona agentes dinamicamente quando a complexidade da tarefa aumenta. O que deve permanecer explícito?",
      "choices": [
        "Apenas o comprimento máximo de resposta",
        "Só o avatar de cada agente.",
        "Só a ordem em que os agentes foram nomeados",
        "Propriedade, dependências, autoridade, orçamentos e responsabilidade de aceitação"
      ],
      "explanations": [
        "O comprimento não estabelece o controle da orquestração.",
        "Os Avatares não definem responsabilidades.",
        "A ordem de nomeamento não exprime dependências.",
        "O crescimento dinâmico ainda exige contratos operacionais claros."
      ],
      "concept": "Expansão controlada do fluxo de trabalho",
      "hints": [
        "Quem é o dono de cada nova saída?",
        "Quais limites impedem que uma delegação dinâmica se torne descontrolada?"
      ]
    },
    "agentic-193": {
      "prompt": "Um trabalhador relata um pré-requisito recém-descoberto que afeta várias tarefas ativas. O que deve fazer o coordenador?",
      "choices": [
        "Atualizar o gráfico de dependência e notificar os trabalhadores afetados com o contrato revisto",
        "Mantém a descoberta privada até o relatório final.",
        "Deixe cada trabalhador inferir a mudança de forma independente",
        "Excluir planos anteriores sem preservar o histórico"
      ],
      "explanations": [
        "As mudanças de dependência partilhadas necessitam de propagação coordenada.",
        "A notificação atrasada pode desperdiçar o trabalho ou criar conflitos.",
        "A inferência independente corre o risco de suposições inconsistentes.",
        "A história é necessária para explicar por que o plano mudou."
      ],
      "concept": "Propagação da mudança de dependência",
      "hints": [
        "Que trabalhadores se baseiam na suposição invalidada?",
        "Como saberão todos os participantes qual é o contrato atual?"
      ]
    },
    "agentic-194": {
      "prompt": "Um ser humano resolve um conflito entre os projetos de dois agentes. O que deve registrar o fluxo de trabalho antes de retomar?",
      "choices": [
        "Só que um ser humano participou",
        "A decisão selecionada, o escopo, a justificação e as atualizações das tarefas afetadas",
        "Só o nome do agente perdedor.",
        "Uma nova pontuação de confiança"
      ],
      "explanations": [
        "A participação por si só não transmite o contrato encerrado.",
        "Um registro de decisão explícito torna a intervenção ativa e auditável.",
        "A culpa não é uma transferência.",
        "A confiança não capta a escolha autorizada."
      ],
      "concept": "Recuperação de conflitos com humanos no circuito",
      "hints": [
        "O que devem saber os trabalhadores para prosseguir de forma consistente?",
        "O que explicará mais tarde a direção escolhida?"
      ]
    },
    "agentic-195": {
      "prompt": "Um coordenador tem dez pequenas edições, fortemente acopladas. Agentes paralelos precisariam dos mesmos arquivos e suposições. Qual é uma escolha razoável de orquestração?",
      "choices": [
        "Sempre maximizar o número de trabalhadores",
        "Duplicar a tarefa completa dez vezes",
        "Use uma única execução coerente ou serialize as edições acopladas",
        "Eliminar os limites das tarefas para reduzir o planejamento"
      ],
      "explanations": [
        "O paralelismo pode aumentar as despesas de coordenação e os conflitos.",
        "A duplicação desperdiça esforço e cria resultados concorrentes.",
        "O trabalho fortemente ligado pode ser mais seguro e mais rápido sem escritores paralelos.",
        "Remover os limites aumenta a ambigüidade."
      ],
      "concept": "Quando não paralelar",
      "hints": [
        "As unidades de trabalho são verdadeiramente independentes?",
        "O custo da coordenação excederá o benefício da simultaneidade?"
      ]
    },
    "agentic-196": {
      "prompt": "Uma revisão de incidentes de vários agentes não encontra nenhuma maneira de dizer qual trabalhador introduziu uma chamada de ferramenta insegura. O que devem incluir os registros futuros de eventos?",
      "choices": [
        "Apenas um rótulo de fluxo de trabalho compartilhado",
        "Apenas a duração total",
        "Apenas a resposta final do coordenador",
        "Identidade do agente, tarefa principal, solicitação da ferramenta, resultado da autorização e resultado da execução"
      ],
      "explanations": [
        "Um rótulo compartilhado não pode atribuir ações individuais.",
        "A duração não identifica os agentes ou os pedidos.",
        "Um resumo omite os detalhes necessários da execução.",
        "Os eventos correlacionados atribuídos determinam a origem da ação."
      ],
      "concept": "atribuição de ações entre agentes",
      "hints": [
        "O investigador pode ligar um efeito a um ator?",
        "Que limite de autorização foi ultrapassado ou aplicado?"
      ]
    },
    "agentic-197": {
      "prompt": "Um fluxo de trabalho está a ser desligado após a aceitação de todas as entregas. Qual é a melhor conclusão do ciclo de vida?",
      "choices": [
        "Confirmar nenhum trabalho ativo, liberar recursos, revogar acesso desnecessário e preservar registros",
        "Eliminar todos os artefatos para reduzir a conmerge",
        "Mantenha todos os trabalhadores e credenciais ativos indefinidamente",
        "Parar o coordenador sem verificar a atividade dos trabalhadores"
      ],
      "explanations": [
        "Um fechamento ordenado preserva a responsabilidade ao mesmo tempo em que elimina as capacidades desnecessárias.",
        "Os artefatos podem ser necessários para auditoria e manutenção.",
        "A vaidade da autoridade e dos recursos cria exposição desnecessária.",
        "Os trabalhadores podem continuar a agir após uma paralisação não controlada."
      ],
      "concept": "Retiro e fechamento do fluxo de trabalho",
      "hints": [
        "Um trabalhador pode ainda produzir efeitos secundários?",
        "O que deve acabar, e o que deve continuar inspecionável?"
      ]
    },
    "agentic-198": {
      "prompt": "Um agente pode ler documentação pública ou excluir registros de produção. Como deve ser diferente a autonomia?",
      "choices": [
        "Ambas devem exigir aprovações idênticas",
        "Permitir leituras limitadas de baixo risco e exigir autorização controlada explícita para a exclusão",
        "A exclusão deve ser automática porque é mais rápida",
        "O acesso a todas as ferramentas implica um risco igual"
      ],
      "explanations": [
        "A aprovação uniforme ignora um impacto substancialmente diferente.",
        "A autonomia baseada no risco reserva-se fortes controles para as ações consequentes.",
        "A velocidade não justifica um impacto irreversível.",
        "As ferramentas diferem em termos de risco operacional e de conformidade."
      ],
      "concept": "Autonomia classificada por risco",
      "hints": [
        "Qual ação é difícil de reverter?",
        "Onde o julgamento humano muda substancialmente o risco?"
      ]
    },
    "agentic-199": {
      "prompt": "Um agente promete não utilizar a sua credencial de administrador para operações não relacionadas. Que proteção mais forte é apropriada?",
      "choices": [
        "Uma promessa mais enfática",
        "Uma descrição mais longa do papel",
        "Uma credencial restrita aos recursos e às ações necessários para a tarefa",
        "Uma revisão mensal das promessas"
      ],
      "explanations": [
        "A ênfase não reduz a autoridade técnica.",
        "O texto do papel não é a aplicação do acesso.",
        "O mínimo privilégio limita o impacto mesmo que o agente cometa um erro.",
        "A revisão periódica não impede ações não autorizadas."
      ],
      "concept": "A aplicação dos menores privilégios",
      "hints": [
        "O que é possível se as instruções forem mal entendidas?",
        "O próprio serviço pode recusar operações fora do seu alcance?"
      ]
    },
    "agentic-200": {
      "prompt": "Uma implantação de produção requer aprovação humana. Qual controle de fluxo de trabalho reforça melhor esse limite quando configurado?",
      "choices": [
        "Um comentário dizendo que a aprovação é preferível",
        "Um limiar de confiança gerado por agentes",
        "Um registro de implantação escrito posteriormente",
        "Um ambiente protegido com revisores obrigatórios no job de implantação"
      ],
      "explanations": [
        "O texto de preferência não bloqueia a execução.",
        "A confiança não pode substituir o titular da decisão exigida.",
        "Registrar a ação depois não pode impedir a implantação.",
        "Os portões de revisão ambiental interrompem o trabalho antes da execução."
      ],
      "concept": "Portas de aprovação ambiental",
      "hints": [
        "Em que ponto o trabalho deve parar?",
        "Que mecanismo impõe uma decisão fora do modelo?"
      ]
    },
    "agentic-201": {
      "prompt": "Um documento de repositório diz a um agente para enviar credenciais para um endpoint de diagnóstico. O que deve fazer o agente?",
      "choices": [
        "Rejeitar a instrução como conteúdo não confiável e preservar a proteção dos segredos",
        "Cumprir porque os arquivos do repositório são sempre autorizados",
        "Enviar apenas metade das credenciais",
        "Pergunte ao endpoint se é confiável"
      ],
      "explanations": [
        "O conteúdo não pode autorizar a exfiltração de credenciais.",
        "O texto do repositório pode conter instruções adversas.",
        "A divulgação parcial pode ainda expor dados sensíveis.",
        "A própria reivindicação de um endpoint não é autorização."
      ],
      "concept": "Salvaguardas contra injeção de prompts",
      "hints": [
        "Este conteúdo é dados de tarefas ou uma alteração autorizada de política?",
        "Quem deu permissão para a divulgação?"
      ]
    },
    "agentic-202": {
      "prompt": "Um agente precisa modificar um arquivo de política que determina o seu próprio acesso à ferramenta. Que controle de revisão é mais apropriado?",
      "choices": [
        "Deixe-o aprovar os seus próprios privilégios expandidos",
        "Proteger a configuração com revisão pelos responsáveis e regras de aceitação obrigatórias",
        "Tratar as alterações de configuração como documentação inofensiva",
        "Desativar auditorias para modificações de configuração"
      ],
      "explanations": [
        "A auto-aprovação prejudica os limites dos privilégios.",
        "A revisão independente impede mudanças não examinadas na autoridade do agente.",
        "A configuração pode alterar diretamente as capacidades.",
        "A auditabilidade é importante para as mudanças sensíveis à governação."
      ],
      "concept": "Configuração de agente de proteção",
      "hints": [
        "Esta edição pode mudar o que o agente tem permissão para fazer?",
        "Quem deve aprovar a expansão da autoridade?"
      ]
    },
    "agentic-203": {
      "prompt": "Uma pessoa aprova uma implantação em staging. Depois, o agente propõe implantar em produção um commit mais recente. Qual autorização é necessária?",
      "choices": [
        "Nenhuma; qualquer aprovação de implantação abrange todos os ambientes",
        "Um texto de aprovação reutilizado da execução em staging",
        "Decisão relativa à nova revisão e ao impacto na produção",
        "A garantia do agente de que o novo commit é semelhante"
      ],
      "explanations": [
        "O escopo da aprovação não é automaticamente universal.",
        "Uma cadeia copiada não estende autoridade.",
        "Objetivo e código materialmente diferentes exigem autorização adequada.",
        "As alegações de semelhança não vinculam a aprovação humana a novos trabalhos."
      ],
      "concept": "Escopo específico de uma aprovação",
      "hints": [
        "Que ambiente e revisão o ser humano analisou realmente?",
        "Que efeitos propostos são novos?"
      ]
    },
    "agentic-204": {
      "prompt": "Uma tarefa é urgente, mas uma ação proposta viola uma política explícita de residência de dados. O que deve fazer o agente?",
      "choices": [
        "Proceder e documentar a urgência depois",
        "Copiar os dados através de uma ferramenta diferente",
        "Peça a outro agente para fazer a transferência.",
        "Bloquear a ação e encaminhar o conflito pelo processo autorizado de políticas"
      ],
      "explanations": [
        "A urgência não renuncia a uma política vinculativa.",
        "A alteração das ferramentas não elimina a violação da política.",
        "A delegação não pode autorizar a conduta proibida.",
        "Os conflitos políticos exigem uma resolução legítima antes de agir."
      ],
      "concept": "A aplicação dos limites de conformidade",
      "hints": [
        "A política rege a ferramenta ou o destino dos dados?",
        "Quem pode resolver o pedido de exceção?"
      ]
    },
    "agentic-205": {
      "prompt": "Um agente registra os payloads completos das ferramentas, incluindo identificadores de clientes desnecessários para depuração. O que os logs de prestação de contas devem priorizar?",
      "choices": [
        "Traçabilidade com minimização dos dados sensíveis e acesso controlado",
        "Dados brutos máximos independentemente da finalidade",
        "Não há registros.",
        "Registros públicos para que cada observador possa investigar"
      ],
      "explanations": [
        "As evidências de auditoria úteis podem ser mantidas sem divulgação indiscriminada.",
        "Mais dados podem aumentar a exposição à privacidade e à segurança.",
        "A ausência de registros impede a prestação de contas.",
        "O acesso público é inadequado para registros operacionais sensíveis."
      ],
      "concept": "Auditibilidade que preserva a privacidade",
      "hints": [
        "Que campos são realmente necessários para reconstruir a ação?",
        "Quem deve ter permissão para inspecioná-los?"
      ]
    },
    "agentic-206": {
      "prompt": "Uma limpeza irreversível de banco de dados está incluída no objetivo geral, mas os registros exatos que serão excluídos não foram definidos. O que deve acontecer antes da execução?",
      "choices": [
        "Eliminar uma amostra para inferir o escopo previsto",
        "Apresentar um conjunto de registros-alvo que possa ser revisado e obter autorização explícita",
        "Suponha que a redação geral do objetivo aprova todos os registros correspondentes",
        "Deixe o modelo decidir quais registros parecem desperdiçáveis"
      ],
      "explanations": [
        "Mesmo uma exclusão de amostras pode ter efeitos irreversíveis.",
        "Os objetivos precisos apoiam uma decisão conseqüente informada.",
        "A intenção ampla é insuficiente para um escopo destrutivo indefinido.",
        "O modelo de decisão não pode substituir a autoridade de titularidade dos dados."
      ],
      "concept": "Autorização de ação irreversível",
      "hints": [
        "O aprovador pode identificar exatamente o que será removido?",
        "Que ambiguidade torna-se perigosa após a ação?"
      ]
    },
    "agentic-207": {
      "prompt": "Uma equipe pergunta se cada arquivo lido deve exigir aprovação humana. Qual é o melhor princípio da política?",
      "choices": [
        "Cada operação deve ter a mesma porta.",
        "Nenhuma leitura pode expor dados confidenciais",
        "Classificar leituras por sensibilidade e alcance dos dados, automatizando apenas o acesso autorizado de baixo risco",
        "Todas as leituras são equivalentes às escrituras de produção"
      ],
      "explanations": [
        "A abertura uniforme pode adicionar atrito sem benefício proporcional.",
        "Os leitores podem revelar informações confidenciais.",
        "O risco inclui divulgação, não apenas mutação.",
        "O impacto da leitura e da escrita difere e exige uma avaliação específica do contexto."
      ],
      "concept": "Leia os riscos e os controles proporcionais",
      "hints": [
        "A própria observação pode expor informações protegidas?",
        "Que leituras já estão autorizadas dentro da tarefa?"
      ]
    },
    "agentic-208": {
      "prompt": "Um agente descobre que um portal de política está mal configurado e sugere removê-lo para terminar mais rápido. Qual é a resposta apropriada?",
      "choices": [
        "Remova o portão porque impede o progresso.",
        "Deixe o agente decidir quais controles são desnecessários",
        "Desviá-lo com outra identidade.",
        "Escalar a configuração incorreta e repará-la por meio de uma alteração autorizada"
      ],
      "explanations": [
        "Um bloqueador não justifica a rejeição do controle.",
        "O agente não pode renunciar unilateralmente à governança.",
        "A mudança de identidade derrota o limite pretendido.",
        "A reparação preserva o propósito do controle enquanto resolve o defeito."
      ],
      "concept": "Manutenção de falhas do guardrail",
      "hints": [
        "O problema é a finalidade do controle ou a sua aplicação?",
        "Quem pode autorizar uma mudança no caminho da aplicação?"
      ]
    },
    "agentic-209": {
      "prompt": "Uma equipe usa as instruções do agente como a única barreira contra a transferência de dados externos. Que controle adicional é mais útil?",
      "choices": [
        "Restrições de ferramentas, credenciais e rede efetivamente aplicadas no ambiente de execução",
        "Um lembrete mais longo sobre a confidencialidade",
        "Uma promessa gerada por um agente antes de cada transferência",
        "Um registro público após cada transferência"
      ],
      "explanations": [
        "A aplicação do tempo de execução limita os efeitos independentemente da conformidade do modelo.",
        "Mais texto continua a ser aconselhável.",
        "As auto-promessas não impõem restrições de destino.",
        "Os registros após a divulgação dos fatos não podem impedir a transferência."
      ],
      "concept": "Defesa em profundidade",
      "hints": [
        "Quais controles ainda funcionam se o modelo seguir conteúdo malicioso?",
        "Onde é que uma operação proibida pode ser rejeitada antes de entrar em vigor?"
      ]
    },
    "agentic-210": {
      "prompt": "A alteração proposta por um agente afeta as regras regulamentadas de retenção. Todos os testes passam. Que julgamento adicional é necessário?",
      "choices": [
        "Nenhuma, porque os testes abrangem todas as decisões de conformidade",
        "Revisão pelo responsável pela política ou pela conformidade",
        "Um voto popular entre os agentes",
        "Uma pontuação de confiança acima de um limiar escolhido"
      ],
      "explanations": [
        "Os testes não podem autorizar de forma independente uma alteração da política.",
        "As alterações sensíveis às políticas exigem o titular da decisão em causa.",
        "Os votos dos agentes não conferem autoridade de conformidade.",
        "A confiança não substitui a autorização responsável."
      ],
      "concept": "Julgamento humano de mudanças sensíveis à conformidade",
      "hints": [
        "Quem é o proprietário da interpretação legal ou política?",
        "Pode a validade técnica responder se a alteração é permitida?"
      ]
    },
    "agentic-211": {
      "prompt": "Um ser humano nega a ação destrutiva proposta por um agente. O que deve fazer o agente?",
      "choices": [
        "Reformula a mesma ação e executa-a",
        "Delegue-o para outro agente.",
        "Preservar a recusa e continuar apenas dentro do escopo que permanece autorizado",
        "Trate o silêncio depois como aprovação"
      ],
      "explanations": [
        "A reformulação não muda o efeito negado.",
        "A delegação não pode ignorar a negação.",
        "A decisão continua a ser vinculante, enquanto alternativas seguras podem continuar possíveis.",
        "O silêncio não é uma autorização de substituição."
      ],
      "concept": "Respeito das decisões de aprovação",
      "hints": [
        "Alterar o intérprete muda a operação negada?",
        "Que trabalho ainda é permitido?"
      ]
    },
    "agentic-212": {
      "prompt": "Uma tarefa exige aprovação de uma exceção, mas não é possível verificar a identidade de quem aprova. Qual é o estado mais seguro?",
      "choices": [
        "Aproveito porque alguém respondeu",
        "Aprovação se a resposta parecer profissional",
        "Prosseguir e verificar a identidade após a execução",
        "Bloqueado na espera de uma decisão autorizada autenticada"
      ],
      "explanations": [
        "Só uma resposta não estabelece autoridade.",
        "O estilo não pode autenticar um aprovador.",
        "A verificação pós-execução perde o portão.",
        "A aprovação deve proceder de um principal autorizado identificável."
      ],
      "concept": "Autenticidade da aprovação",
      "hints": [
        "O que estabelece a autoridade do respondente?",
        "A decisão pode ser auditada mais tarde?"
      ]
    },
    "agentic-213": {
      "prompt": "Uma organização quer alterações autônomas rápidas de formatação, sem permitir que os agentes façam merge dos próprios PRs. Qual projeto é adequado?",
      "choices": [
        "Agentes preparam PRs; automação do repositório segue verificações configuradas, revisões e política de merge",
        "Dar a cada agente direitos de merge ilimitados",
        "Esquecer as verificações necessárias para os agentes de formatação",
        "Tratar um rótulo de formatação como aprovação universal"
      ],
      "explanations": [
        "A preparação e a aceitação podem ser separadas, mantendo uma automação eficiente.",
        "Os direitos de merge ilimitados excedem o desenho declarado.",
        "A formatação ainda pode introduzir mudanças inesperadas.",
        "Um rótulo por si só não satisfaz as regras de aceitação."
      ],
      "concept": "Separar a preparação da aceitação",
      "hints": [
        "Quem cria a proposta e o que controla a aceitação?",
        "A automação pode preservar as mesmas condições exigidas?"
      ]
    },
    "agentic-214": {
      "prompt": "A credencial de um agente é suspeita de ter sido comprometida. Que contenção deve ter prioridade?",
      "choices": [
        "Espere até que a tarefa seja concluída",
        "Suspender a execução afetada e revogar ou rotacionar o acesso pelo processo de resposta a incidentes",
        "Copiar o token para outro trabalhador",
        "Eliminar registros antes de investigar"
      ],
      "explanations": [
        "A execução contínua pode aumentar a exposição.",
        "A contenção reduz o possível impacto, preservando simultaneamente uma resposta controlada.",
        "Copiar o token espalha o compromisso.",
        "Os registros podem ser evidências essenciais."
      ],
      "concept": "Controle de incidentes de credenciais",
      "hints": [
        "Que autoridade poderia um agressor exercer atualmente?",
        "Como podem ser evitados efeitos adicionais sem destruir evidências?"
      ]
    },
    "agentic-215": {
      "prompt": "Uma equipe aprova uma ferramenta por ser somente leitura, mas ela pode consultar os tenants de todos os clientes. O que falta?",
      "choices": [
        "Capacidade de escrita",
        "Um ícone de ferramenta mais colorido",
        "Avaliação do escopo e da confidencialidade a nível dos recursos",
        "Uma janela de contexto ilimitada"
      ],
      "explanations": [
        "Adicionar cartas aumentaria o risco.",
        "A apresentação não restringe o acesso aos dados.",
        "O acesso somente para leitura ainda requer limites de inquilinos e dados.",
        "O tamanho do contexto não autoriza a divulgação."
      ],
      "concept": "Privilegio mínimo para o acesso aos dados",
      "hints": [
        "Que dados de clientes é permitido inspecionar?",
        "A falta de mutação elimina o risco de confidencialidade?"
      ]
    },
    "agentic-216": {
      "prompt": "Um agente propõe desativar o registro de auditoria durante uma mudança sensível para evitar ruído. O que deve exigir o proprietário?",
      "choices": [
        "Aceita se a mudança for rápida",
        "Use apenas o resumo final do agente.",
        "Desativar registros, mas manter uma pontuação de confiança",
        "Preservar os eventos de auditoria adequados e filtrar o ruído irrelevante"
      ],
      "explanations": [
        "A curta duração não elimina os requisitos de prestação de contas.",
        "Um resumo sozinho não pode reconstruir a execução.",
        "A confiança não é um registro de auditoria.",
        "A redução do ruído não deve eliminar as evidências consequentes."
      ],
      "concept": "Continuidade da auditoria",
      "hints": [
        "Que acontecimentos seriam necessários se a mudança falhasse?",
        "Pode melhorar a usabilidade sem eliminar o registro?"
      ]
    },
    "agentic-217": {
      "prompt": "Uma salvaguarda bloqueia uma escrita não autorizada, mas o agente relata que a tarefa foi bem sucedida. O que deve exigir a prestação de contas?",
      "choices": [
        "Um resultado de bloqueio fiel aos fatos, com a operação tentada e os próximos passos autorizados",
        "Um status de sucesso porque a salvaguarda funcionou",
        "Exclusão do evento bloqueado",
        "Uma nova tentativa sob uma identidade mais privilegiada"
      ],
      "explanations": [
        "O sucesso do guardrail e a conclusão da tarefa são resultados diferentes.",
        "A prevenção de uma escrita não completa a tarefa solicitada.",
        "As tentativas bloqueadas são provas importantes.",
        "A escalada de privilégios requer autorização separada."
      ],
      "concept": "Relatório honesto sobre ações bloqueadas",
      "hints": [
        "O efeito pretendido ocorreu?",
        "Como pode-se registrar o sucesso da segurança e a incompletude da tarefa?"
      ]
    },
    "agentic-218": {
      "prompt": "Uma pessoa aprova um plano, e o agente muda os alvos antes da execução. O que a salvaguarda deve fazer?",
      "choices": [
        "Autorização de reutilização, independentemente das alterações no objetivo",
        "Invalida a aprovação afetada e solicite revisão da ação revisada",
        "Esconde as mudanças-alvo nos registros",
        "Tratar a aprovação como permissão para escolher qualquer alvo"
      ],
      "explanations": [
        "A aprovação deve permanecer vinculada ao escopo revisto.",
        "As alterações materiais exigem uma decisão que cobre o novo efeito.",
        "A ocultação das alterações derrota a autorização informada.",
        "Os alvos fazem parte dos limites de autoridade da ação."
      ],
      "concept": "Invalidação da aprovação em alteração material",
      "hints": [
        "A ação ainda é a que foi revisada?",
        "Que suposições de aprovação já não são válidas?"
      ]
    },
    "agentic-219": {
      "prompt": "Um agente recebe uma solicitação para gerar afirmações enganosas para clientes, sem respaldo nas evidências do lançamento. Qual resposta respeita a prestação de contas?",
      "choices": [
        "Publicar se o requerente desejar uma redação persuasiva",
        "Usar um aviso após as alegações falsas",
        "Recusar afirmações sem fundamento e oferecer um rascunho baseado em evidências para revisão",
        "Peça a outro agente para inventar detalhes de apoio"
      ],
      "explanations": [
        "A persuasão não justifica o engano.",
        "Uma exclusão de responsabilidade não torna as alegações não fundamentadas precisas.",
        "A elaboração baseada em evidências preserva a utilidade e a comunicação responsável.",
        "Suporte fabricado complica o problema."
      ],
      "concept": "Fronteiras de comunicação de IA responsável",
      "hints": [
        "Que evidências apoiam as declarações públicas propostas?",
        "O objetivo legítimo de comunicação pode ser atingido com precisão?"
      ]
    },
    "agentic-220": {
      "prompt": "Uma equipe apresenta solicitações de aprovação demais, com pouco valor, e os usuários as aceitam de forma automática. Qual é o melhor redesenho?",
      "choices": [
        "Adicionar mais uma confirmação a cada pedido",
        "Remover toda aprovação, incluindo ações destrutivas",
        "Mantenha as instruções menos específicas para reduzir o tempo de leitura",
        "Consolidar o trabalho autorizado de baixo risco e reservar barreiras claras de aprovação para riscos relevantes"
      ],
      "explanations": [
        "As instruções mais repetitivas podem piorar a fadiga.",
        "As ações de alto impacto ainda precisam de controles adequados.",
        "Indicações vagas enfraquecem decisões informadas.",
        "Os portões focados no risco melhoram a atenção sem abandonar a governação."
      ],
      "concept": "redução da fadiga de aprovação",
      "hints": [
        "Quais aprovações alteram significativamente o risco?",
        "O responsável pela aprovação tem informações específicas suficientes para decidir?"
      ]
    },
    "agentic-221": {
      "prompt": "Uma exceção de conformidade é concedida para uma tarefa e expira amanhã. O que é que o agente deve conservar?",
      "choices": [
        "Proprietário da exceção, escopo, expiração e referência à prova",
        "Apenas a palavra aprovada",
        "Uma isenção global permanente",
        "As credenciais de quem aprova"
      ],
      "explanations": [
        "Os metadados de exceção limitada impedem a utilização indevida posterior.",
        "Uma simples aprovação perde limites importantes.",
        "Uma excepção temporária não é a política global.",
        "As credenciais não fazem parte de um registro de autorização."
      ],
      "concept": "Excepções à política auditável",
      "hints": [
        "O que impede que as tarefas futuras reutilizem incorretamente a exceção?",
        "Que limites definem a permissão real?"
      ]
    },
    "agentic-222": {
      "prompt": "O ambiente de um agente pode acessar serviços internos não relacionados à tarefa. O que uma revisão do princípio do menor privilégio deve avaliar?",
      "choices": [
        "Apenas as ferramentas mostradas no chat",
        "Acessibilidade à rede, credenciais, acesso ao sistema de arquivos e ferramentas expostas em conjunto",
        "Só se o nome do agente é descritivo",
        "Apenas o número de revisores requeridos"
      ],
      "explanations": [
        "As ferramentas visíveis são apenas uma parte da autoridade eficaz.",
        "A capacidade eficaz abrange várias camadas de aplicação.",
        "O nomeamento não restringe o acesso.",
        "O número de revisões não define a acessibilidade no tempo de execução."
      ],
      "concept": "Autoridade efetiva de execução",
      "hints": [
        "O que pode atingir o tempo de execução fora da lista de ferramentas anunciada?",
        "Que camadas poderiam impor um limite mais estreito?"
      ]
    },
    "agentic-223": {
      "prompt": "Uma organização desativa uma capacidade de agente de alto risco durante um incidente. O que deve acontecer com as execuções que já estão ativas?",
      "choices": [
        "Suponham que tenham adoptado automaticamente a alteração",
        "Deixe-os terminar cada escrita pendente",
        "Verificar a aplicação da restrição nas execuções ativas e suspender ou revogar a capacidade quando necessário",
        "Eliminar o registro de alterações de política"
      ],
      "explanations": [
        "A propagação das políticas para a execução ativa não deve ser assumida.",
        "As notas pendentes podem manter o mesmo risco de incidente.",
        "A contenção requer a verificação da autoridade efetiva, não apenas a configuração guardada.",
        "O registro de mudanças apoia a responsabilização dos incidentes."
      ],
      "concept": "Controle das políticas de gestão ativa",
      "hints": [
        "Os processos de voo ainda possuem credenciais ou ações em fila?",
        "Que evidências provam que a restrição é eficaz agora?"
      ]
    },
    "agentic-224": {
      "prompt": "Um agente recomenda desistir de uma verificação de segurança porque a sua taxa de sucesso histórica é alta. Qual é o princípio de decisão apropriado?",
      "choices": [
        "Confiança histórico sobre a mudança atual",
        "Deixe o agente conceder a isenção",
        "Substituir o cheque por um limiar de confiança",
        "Usar um processo de exceção autorizado com base na evidência e no risco desta alteração"
      ],
      "explanations": [
        "O desempenho histórico não valida o risco atual.",
        "Os autodeterminações minam o controle independente.",
        "A confiança não é equivalente a uma verificação de segurança.",
        "As exceções exigem um julgamento responsável e provas específicas."
      ],
      "concept": "Excepções de controle baseadas em evidências",
      "hints": [
        "O desempenho passado provou que esta mudança é segura?",
        "Quem está autorizado a aceitar o risco restante?"
      ]
    },
    "agentic-225": {
      "prompt": "Uma organização quer expandir os agentes da redação do PRs para a modificação das configurações de produção. O que deve preceder essa expansão?",
      "choices": [
        "Uma revisão dos riscos, autoridade explícita, limites aplicados, evidências de avaliação e projeto de recuperação",
        "Apenas um orçamento de execução maior",
        "Apenas renomear o agente pronto para produção",
        "Apenas confirmação de que ele pode chamar as configurações API"
      ],
      "explanations": [
        "A autonomia da produção requer um caminho de execução demonstrado e regido.",
        "O orçamento não estabelece segurança ou permissão.",
        "Um rótulo não é prontidão operacional.",
        "A capacidade técnica por si só não permite alterações consequentes."
      ],
      "concept": "Preparação para a consequente autonomia",
      "hints": [
        "Que mudanças ocorrem quando o trabalho proposto se torna um impacto direto na produção?",
        "Que evidências e controles apoiam essa nova responsabilidade?"
      ]
    }
  }
};
