export const translations = {
    "es": {
        "actions-001": {
            "prompt": "¿Qué ruta del repositorio permite a GitHub detectar un flujo llamado verify.yml?",
            "choices": [
                ".github/workflows/verify.yml",
                ".github/actions/verify.yml",
                ".github/templates/verify.yml",
                ".github/workflow/verify.yml"
            ],
            "explanations": [
                "Los flujos se detectan en este directorio.",
                "Las acciones locales usan otro directorio.",
                "No es el directorio de detección de flujos.",
                "El nombre del directorio debe ser plural."
            ],
            "concept": "Detección de flujos",
            "hints": [
                "Distingue archivos de flujo y metadatos de acciones.",
                "La detección usa una ubicación reservada."
            ]
        },
        "actions-002": {
            "prompt": "¿Qué filtro de push coincide con release/1.2 y release/2.0, pero no con main?",
            "choices": [
                "paths: ['release/**']",
                "branches: ['release/**']",
                "branches: ['release']",
                "tags: ['release/**']"
            ],
            "explanations": [
                "Los filtros de rutas examinan archivos, no ramas.",
                "El patrón de ramas cubre esas ramas release.",
                "Solo coincide con la rama literal release.",
                "Los filtros de etiquetas no seleccionan pushes de ramas."
            ],
            "concept": "Coincidencia de ramas en push",
            "hints": [
                "Identifica qué tipo de referencia recibió el push.",
                "Considera los patrones que abarcan una barra."
            ]
        },
        "actions-003": {
            "prompt": "Un evento repository_dispatch contiene client_payload: {\"ticket\": 74}. ¿Qué expresión lee el ticket?",
            "choices": [
                "inputs.client_payload.ticket",
                "github.repository.ticket",
                "github.event.client_payload.ticket",
                "github.event.inputs.ticket"
            ],
            "explanations": [
                "El contexto inputs no contiene esta carga.",
                "La identidad del repositorio no contiene campos del evento.",
                "La carga personalizada está dentro del objeto del evento.",
                "No son entradas de despacho manual."
            ],
            "concept": "Carga de despacho externo",
            "hints": [
                "Separa los datos del evento de las entradas del flujo.",
                "Sigue el anidamiento del objeto JSON."
            ]
        },
        "actions-004": {
            "prompt": "En workflow_dispatch.inputs.retries, ¿qué tipo declara un valor numérico?",
            "choices": [
                "type: integer",
                "type: string",
                "type: choice",
                "type: number"
            ],
            "explanations": [
                "integer no es un nombre de tipo admitido.",
                "string declara texto en lugar de una entrada numérica.",
                "choice ofrece una selección, no tipado numérico.",
                "number es un tipo de entrada admitido."
            ],
            "concept": "Entradas numéricas manuales",
            "hints": [
                "Usa el esquema del flujo, no los tipos generales de YAML.",
                "Distingue el tipo de un valor de su valor predeterminado."
            ]
        },
        "actions-005": {
            "prompt": "Sin una zona horaria configurada, ¿qué solicita cron: '15 6 * * 1'?",
            "choices": [
                "Cada día a las 06:15 UTC",
                "Lunes a las 15:06 UTC",
                "6 de enero a las 00:15 UTC",
                "Lunes a las 06:15 UTC"
            ],
            "explanations": [
                "El campo semanal limita los días solicitados.",
                "El minuto precede a la hora en este formato.",
                "Los campos de día y mes no están restringidos.",
                "Los campos seleccionan minuto, hora y día semanal."
            ],
            "concept": "Interpretación de cron",
            "hints": [
                "Lee los cinco campos en orden.",
                "Una programación no garantiza la hora de ejecución."
            ]
        },
        "actions-006": {
            "prompt": "¿Qué filtro de pull_request limita las ejecuciones a cambios en docs/?",
            "choices": [
                "types: [docs]",
                "tags: ['docs/**']",
                "paths: ['docs/**']",
                "branches: ['docs/**']"
            ],
            "explanations": [
                "docs no es un tipo de actividad de pull request.",
                "Los patrones de etiquetas no filtran archivos de pull requests.",
                "paths evalúa las rutas de archivos modificados.",
                "branches filtra la rama base de la pull request."
            ],
            "concept": "Filtros de rutas en pull requests",
            "hints": [
                "Clasifica el requisito: archivos, referencias o actividades.",
                "Un patrón de directorio necesita coincidencia recursiva."
            ]
        },
        "actions-007": {
            "prompt": "¿Qué declaración de nivel superior escucha push o pull_request?",
            "choices": [
                "needs: [push, pull_request]",
                "runs-on: [push, pull_request]",
                "types: [push, pull_request]",
                "on: [push, pull_request]"
            ],
            "explanations": [
                "needs declara dependencias entre trabajos.",
                "runs-on selecciona runners de ejecución.",
                "types limita actividades de un evento configurado.",
                "on declara los eventos que disparan el flujo."
            ],
            "concept": "Sintaxis de varios disparadores",
            "hints": [
                "Los eventos y la selección de runners tienen fines distintos.",
                "Ubica la declaración de eventos del flujo."
            ]
        },
        "actions-008": {
            "prompt": "Una entrada string de workflow_dispatch llamada region debe contener west inicialmente. ¿Qué propiedad proporciona ese valor?",
            "choices": [
                "description: west",
                "options: [west]",
                "default: west",
                "required: west"
            ],
            "explanations": [
                "description describe la entrada sin fijar su valor.",
                "options define las selecciones de una entrada choice.",
                "default proporciona el valor inicial de la entrada.",
                "required espera un booleano, no este valor."
            ],
            "concept": "Valores predeterminados de entradas manuales",
            "hints": [
                "Separa la documentación de la entrada de sus valores.",
                "La obligatoriedad y la inicialización son independientes."
            ]
        },
        "actions-009": {
            "prompt": "¿Qué declaración en un trabajo test lo hace esperar al trabajo identificado como compile?",
            "choices": [
                "needs: compile",
                "uses: compile",
                "env: compile",
                "name: compile"
            ],
            "explanations": [
                "needs añade una dependencia de ejecución de ese trabajo.",
                "uses referencia una acción o flujo reutilizable.",
                "env define un mapa de variables de entorno.",
                "name cambia una etiqueta, no el orden."
            ],
            "concept": "Dependencias entre trabajos",
            "hints": [
                "El orden no depende de la posición en YAML.",
                "Usa el identificador de la dependencia, no su nombre visible."
            ]
        },
        "actions-010": {
            "prompt": "¿Qué condición ejecuta diagnósticos tras fallar un paso anterior del mismo trabajo?",
            "choices": [
                "if: ${{ cancelled() }}",
                "if: ${{ !failure() }}",
                "if: ${{ failure() }}",
                "if: ${{ success() }}"
            ],
            "explanations": [
                "cancelled comprueba cancelación, no un fallo normal.",
                "Negar failure excluye el caso de fallo solicitado.",
                "failure comprueba fallos anteriores en este trabajo.",
                "success requiere que los pasos anteriores hayan tenido éxito."
            ],
            "concept": "Pasos solo ante fallos",
            "hints": [
                "Distingue fallo y cancelación.",
                "Las funciones de estado alteran la condición habitual de éxito."
            ]
        },
        "actions-011": {
            "prompt": "En un runner Linux con Bash, ¿qué comando publica una salida de paso llamada count con valor 8?",
            "choices": [
                "echo \"count=8\" >> \"$GITHUB_STEP_SUMMARY\"",
                "echo \"count=8\" >> \"$GITHUB_OUTPUT\"",
                "echo \"count=8\" >> \"$GITHUB_ENV\"",
                "echo \"count=8\" >> \"$GITHUB_PATH\""
            ],
            "explanations": [
                "Este archivo muestra Markdown en el resumen.",
                "Este archivo registra salidas de paso con nombre.",
                "Este archivo exporta variables a pasos posteriores.",
                "Este archivo añade directorios a la búsqueda de comandos."
            ],
            "concept": "Archivos de salidas de pasos",
            "hints": [
                "Los archivos del runner tienen consumidores distintos.",
                "Publicar un valor difiere de imprimirlo."
            ]
        },
        "actions-012": {
            "prompt": "Un trabajo package expone una salida archive. Un trabajo dependiente declara needs: package. ¿Qué referencia lee esa salida?",
            "choices": [
                "steps.package.outputs.archive",
                "jobs.package.env.archive",
                "github.package.outputs.archive",
                "needs.package.outputs.archive"
            ],
            "explanations": [
                "steps consulta pasos dentro del trabajo actual.",
                "No se accede así a variables de entorno de trabajos.",
                "github contiene metadatos, no salidas de dependencias.",
                "needs expone salidas de los trabajos de los que depende."
            ],
            "concept": "Consulta de salidas de dependencias",
            "hints": [
                "Identifica si el productor es un paso o un trabajo.",
                "El grafo de dependencias define la visibilidad entre trabajos."
            ]
        },
        "actions-013": {
            "prompt": "Un paso Bash exporta MODE=fast, pero el siguiente no puede leerlo. ¿Qué cambio conserva el valor para pasos posteriores del trabajo?",
            "choices": [
                "echo \"MODE=fast\" >> \"$GITHUB_ENV\"",
                "echo \"MODE=fast\" >> \"$GITHUB_OUTPUT\"",
                "echo \"MODE=fast\" >> \"$GITHUB_STATE\"",
                "echo \"MODE=fast\" >> \"$GITHUB_PATH\""
            ],
            "explanations": [
                "El runner carga estas variables en pasos posteriores.",
                "Las salidas requieren referencias de contexto, no variables directas.",
                "State corresponde a las fases del ciclo de una acción.",
                "Las entradas de PATH deben ser rutas de directorios."
            ],
            "concept": "Persistencia de valores de entorno",
            "hints": [
                "Los procesos shell no comparten automáticamente los cambios exportados.",
                "Elige el ámbito de persistencia que necesita el consumidor."
            ]
        },
        "actions-014": {
            "prompt": "¿Qué mapa de nivel de flujo selecciona Bash para todos los pasos run salvo que se sobrescriba?",
            "choices": [
                "defaults: {steps: {shell: bash}}",
                "runs-on: {shell: bash}",
                "defaults: {run: {shell: bash}}",
                "env: {run: {shell: bash}}"
            ],
            "explanations": [
                "La clave secundaria es run, no steps.",
                "runs-on selecciona un runner, no un shell.",
                "defaults.run define la configuración predeterminada del shell.",
                "env asigna nombres de variables a valores."
            ],
            "concept": "Valores predeterminados de pasos run",
            "hints": [
                "Separa la ubicación de ejecución de la interpretación del comando.",
                "Busca una configuración que los pasos puedan sobrescribir."
            ]
        },
        "actions-015": {
            "prompt": "Una matriz de estrategia define node: [20, 22]. ¿Qué expresión inserta la versión seleccionada en la entrada de una acción?",
            "choices": [
                "${{ inputs.node }}",
                "${{ matrix.node }}",
                "${{ strategy.node }}",
                "${{ runner.node }}"
            ],
            "explanations": [
                "inputs se refiere a entradas declaradas del flujo.",
                "matrix expone los valores de la combinación actual.",
                "strategy contiene metadatos, no ejes personalizados.",
                "runner describe el entorno del runner."
            ],
            "concept": "Contexto de matriz",
            "hints": [
                "Cada trabajo expandido tiene sus propios valores de ejes.",
                "No confundas metadatos de estrategia con dimensiones de prueba."
            ]
        },
        "actions-016": {
            "prompt": "Una matriz combina os: [ubuntu-latest, windows-latest] con node: [20, 22]. ¿Qué elimina exclude: [{os: windows-latest}]?",
            "choices": [
                "Solo Windows con node 22",
                "Las dos combinaciones node 22",
                "Las dos combinaciones Windows",
                "Solo Windows con node 20"
            ],
            "explanations": [
                "Ningún valor node limita esta exclusión a 22.",
                "La exclusión nombra un SO, no un runtime.",
                "Una exclusión parcial coincide con toda combinación de ese SO.",
                "Ningún valor node limita esta exclusión a 20."
            ],
            "concept": "Coincidencia de exclusiones de matriz",
            "hints": [
                "Evalúa solo los campos presentes en la exclusión.",
                "Un patrón parcial puede coincidir con varios trabajos."
            ]
        },
        "actions-017": {
            "prompt": "¿Qué propiedad de estrategia decide si un fallo no tolerado cancela los trabajos hermanos de la matriz?",
            "choices": [
                "max-parallel",
                "timeout-minutes",
                "continue-on-error",
                "fail-fast"
            ],
            "explanations": [
                "max-parallel limita la ejecución simultánea de la matriz.",
                "timeout-minutes limita la duración de ejecución.",
                "continue-on-error define tolerancia a fallos en trabajos o pasos.",
                "fail-fast controla la cancelación entre trabajos de matriz."
            ],
            "concept": "Política de cancelación de matriz",
            "hints": [
                "Distingue tolerar un fallo de cancelar trabajos hermanos.",
                "Identifica la configuración dentro de strategy."
            ]
        },
        "actions-018": {
            "prompt": "¿Qué cambia strategy.max-parallel: 2 en una matriz de seis combinaciones?",
            "choices": [
                "Como máximo se ejecutan dos trabajos de matriz a la vez.",
                "Solo se generan dos combinaciones.",
                "Cada trabajo recibe dos núcleos de CPU.",
                "Cada trabajo puede contener solo dos pasos."
            ],
            "explanations": [
                "El límite restringe la concurrencia, no el tamaño.",
                "Las seis combinaciones permanecen en la matriz.",
                "Esta propiedad no asigna hardware al runner.",
                "El número de pasos no depende de la concurrencia de matriz."
            ],
            "concept": "Límites de ejecución de matriz",
            "hints": [
                "Separa la planificación de la expansión.",
                "Un trabajo en espera sigue perteneciendo a la matriz."
            ]
        },
        "actions-019": {
            "prompt": "Un trabajo en contenedor declara services.redis. ¿Qué nombre de host identifica el servicio desde el contenedor del trabajo?",
            "choices": [
                "redis",
                "localhost",
                "github.com",
                "host.docker.internal"
            ],
            "explanations": [
                "La etiqueta del servicio se convierte en su hostname.",
                "localhost se refiere al propio contenedor del trabajo.",
                "github.com no es el contenedor del servicio.",
                "Este alias no es el nombre DNS del servicio."
            ],
            "concept": "Red de contenedores de servicio",
            "hints": [
                "Identifica en qué espacio de red se ejecuta el cliente.",
                "Las etiquetas de servicio participan en la red de contenedores."
            ]
        },
        "actions-020": {
            "prompt": "Un trabajo en un runner Linux mapea el servicio db con ports: [5432]. ¿Qué expresión lee el puerto asignado en el host?",
            "choices": [
                "${{ runner.services.db.port }}",
                "${{ env.db.ports[5432] }}",
                "${{ matrix.db.port }}",
                "${{ job.services.db.ports[5432] }}"
            ],
            "explanations": [
                "runner no tiene un mapa services en esta ruta.",
                "env no recibe la configuración anidada del servicio.",
                "El mapeo de puertos no es un eje de matriz.",
                "El contexto job expone los puertos mapeados del servicio."
            ],
            "concept": "Puertos dinámicos de servicios",
            "hints": [
                "Omitir el puerto del host permite asignación dinámica.",
                "Busca información del trabajo en ejecución."
            ]
        },
        "actions-021": {
            "prompt": "¿Qué opción de Docker en options de un servicio Redis define su comprobación de disponibilidad?",
            "choices": [
                "--entrypoint \"redis-cli ping\"",
                "--label \"redis-cli ping\"",
                "--health-cmd \"redis-cli ping\"",
                "--hostname \"redis-cli ping\""
            ],
            "explanations": [
                "entrypoint reemplaza el comando de inicio del contenedor.",
                "label añade metadatos sin ejecutar una comprobación.",
                "Un comando de salud comprueba la disponibilidad del contenedor.",
                "hostname nombra el contenedor en lugar de comprobarlo."
            ],
            "concept": "Sondas de disponibilidad de servicios",
            "hints": [
                "Un proceso activo puede aún no aceptar solicitudes.",
                "Distingue la configuración inicial de las comprobaciones periódicas."
            ]
        },
        "actions-022": {
            "prompt": "En runs-on: [self-hosted, linux, ARM64], ¿qué runners son aptos?",
            "choices": [
                "Runners que coincidan con una etiqueta cualquiera",
                "Solo runners Linux hospedados por GitHub",
                "Un runner seleccionado por cada etiqueta",
                "Runners que coincidan con las tres etiquetas"
            ],
            "explanations": [
                "El arreglo no expresa una condición OR.",
                "self-hosted requiere un runner autohospedado.",
                "Las etiquetas filtran runners; no expanden trabajos.",
                "Un arreglo combina las etiquetas de forma conjunta."
            ],
            "concept": "Selección de runners",
            "hints": [
                "Las etiquetas describen capacidades de un runner.",
                "No interpretes etiquetas de runners como una matriz."
            ]
        },
        "actions-023": {
            "prompt": "¿Dónde puede un flujo declarar permisos del GITHUB_TOKEN de un trabajo concreto?",
            "choices": [
                "on.push.permissions",
                "defaults.run.permissions",
                "jobs.build.permissions",
                "jobs.build.steps.permissions"
            ],
            "explanations": [
                "Los filtros de eventos no declaran permisos del token.",
                "Los valores run configuran ejecución, no autorización.",
                "El mapa del trabajo limita los permisos a ese trabajo.",
                "La secuencia steps no tiene un mapa de permisos del token."
            ],
            "concept": "Ámbito de declaración de permisos",
            "hints": [
                "Ajusta el ámbito de la configuración al trabajo solicitado.",
                "Los disparadores y el acceso del token son independientes."
            ]
        },
        "actions-024": {
            "prompt": "¿Qué interfaz de evento agrupa las entradas, secretos y salidas declarados de un flujo reutilizable?",
            "choices": [
                "workflow_run",
                "repository_dispatch",
                "workflow_call",
                "workflow_dispatch"
            ],
            "explanations": [
                "workflow_run reacciona al ciclo de otra ejecución.",
                "repository_dispatch recibe eventos personalizados del repositorio.",
                "workflow_call define la entrada del flujo reutilizable.",
                "workflow_dispatch proporciona una interfaz de despacho manual."
            ],
            "concept": "Interfaces de flujos reutilizables",
            "hints": [
                "Identifica si el iniciador es un trabajo llamador.",
                "Varios disparadores describen contratos de invocación distintos."
            ]
        },
        "actions-025": {
            "prompt": "¿Qué tipo es válido en entradas workflow_dispatch pero no en entradas workflow_call?",
            "choices": [
                "string",
                "choice",
                "boolean",
                "number"
            ],
            "explanations": [
                "string está admitido en ambas interfaces.",
                "choice pertenece a la interfaz de entradas manuales.",
                "boolean está admitido en ambas interfaces.",
                "number está admitido en ambas interfaces."
            ],
            "concept": "Tipos de entradas reutilizables",
            "hints": [
                "Las dos interfaces de invocación tienen esquemas distintos.",
                "Un selector visual no implica un tipo de flujo reutilizable."
            ]
        },
        "actions-026": {
            "prompt": "Un flujo reutilizable declara el secreto registry_key. ¿Qué mapa del trabajo llamador pasa secrets.PACKAGE_KEY con ese nombre?",
            "choices": [
                "env: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "outputs: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "secrets: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "with: {registry_key: '${{ secrets.PACKAGE_KEY }}'}"
            ],
            "explanations": [
                "env del llamador no es la interfaz de secretos reutilizables.",
                "outputs publica resultados en lugar de pasar secretos.",
                "secrets asigna el valor al secreto declarado.",
                "with pasa entradas, no secretos declarados."
            ],
            "concept": "Asignación explícita de secretos",
            "hints": [
                "Mantén separadas las interfaces de entradas y secretos.",
                "Usa el nombre del parámetro declarado por el flujo llamado."
            ]
        },
        "actions-027": {
            "prompt": "Un flujo reutilizable declara una entrada string llamada region. ¿Qué campo del trabajo llamador proporciona region: west?",
            "choices": [
                "with: {region: west}",
                "inputs: {region: west}",
                "env: {region: west}",
                "defaults: {region: west}"
            ],
            "explanations": [
                "with proporciona valores a entradas declaradas del flujo.",
                "inputs no es el campo de argumentos del trabajo llamador.",
                "La propagación de entorno no es este contrato de entradas.",
                "defaults no pasa argumentos a flujos reutilizables."
            ],
            "concept": "Entrega de entradas del llamador",
            "hints": [
                "Una declaración y un argumento usan ubicaciones distintas.",
                "El llamador proporciona valores; el llamado declara tipos."
            ]
        },
        "actions-028": {
            "prompt": "¿Qué sección expone el resultado de un trabajo del flujo llamado como salida para el llamador?",
            "choices": [
                "defaults.run.outputs",
                "on.workflow_call.outputs",
                "on.workflow_call.inputs",
                "jobs.build.strategy"
            ],
            "explanations": [
                "Los valores predeterminados de run no declaran salidas.",
                "Esta interfaz asigna salidas de trabajos a salidas del flujo.",
                "inputs declara valores entrantes, no resultados salientes.",
                "strategy controla expansión y planificación de trabajos."
            ],
            "concept": "Interfaces de salidas de flujos",
            "hints": [
                "Sigue el límite entre dos flujos.",
                "Una salida interna de trabajo necesita una interfaz externa."
            ]
        },
        "actions-029": {
            "prompt": "Un mapa env tiene el ancla &shared. ¿Qué forma repite ese mapa completo en otro lugar sin usar una clave de fusión?",
            "choices": [
                "env: '${{ shared }}'",
                "env: *shared",
                "env: &shared",
                "env: '$shared'"
            ],
            "explanations": [
                "Las expresiones de Actions no referencian anclas YAML.",
                "El alias repite el mapa previamente anclado.",
                "El ampersand define un ancla en lugar de referenciarla.",
                "Es una cadena escalar, no un alias YAML."
            ],
            "concept": "Alias YAML de mapas completos",
            "hints": [
                "Separa el procesamiento YAML de la evaluación de expresiones.",
                "Definir contenido reutilizable difiere de referenciarlo."
            ]
        },
        "actions-030": {
            "prompt": "¿Qué contexto proporciona el nombre owner/repository antes de iniciar un trabajo?",
            "choices": [
                "runner.repository",
                "job.repository",
                "steps.repository",
                "github.repository"
            ],
            "explanations": [
                "runner describe un entorno de ejecución asignado.",
                "job no define esta propiedad de repositorio.",
                "steps contiene resultados de pasos, no la identidad del repositorio.",
                "github proporciona metadatos del repositorio y del evento."
            ],
            "concept": "Disponibilidad de contextos del flujo",
            "hints": [
                "Algunos metadatos existen antes de asignar el runner.",
                "Distingue identidad del repositorio y de la máquina."
            ]
        },
        "actions-031": {
            "prompt": "Una variable de configuración del repositorio se llama BUILD_MODE. ¿Qué expresión la lee?",
            "choices": [
                "${{ github.BUILD_MODE }}",
                "${{ inputs.BUILD_MODE }}",
                "${{ vars.BUILD_MODE }}",
                "${{ env.vars.BUILD_MODE }}"
            ],
            "explanations": [
                "Las variables personalizadas no son propiedades de github.",
                "inputs contiene entradas de invocación, no variables del repositorio.",
                "vars expone las variables de configuración.",
                "env no contiene el contexto vars anidado."
            ],
            "concept": "Variables de configuración",
            "hints": [
                "Identifica cómo se configuró el valor.",
                "Nombres similares pueden pertenecer a contextos distintos."
            ]
        },
        "actions-032": {
            "prompt": "¿Qué función de expresión convierte un objeto en una cadena JSON para inspeccionarlo?",
            "choices": [
                "join()",
                "toJSON()",
                "fromJSON()",
                "format()"
            ],
            "explanations": [
                "join combina elementos de un arreglo en texto.",
                "toJSON serializa valores estructurados de expresiones.",
                "fromJSON analiza JSON en la dirección opuesta.",
                "format sustituye marcadores en una cadena de formato."
            ],
            "concept": "Serialización de datos de contexto",
            "hints": [
                "Determina los tipos de entrada y salida de la conversión.",
                "Serializar difiere de analizar."
            ]
        },
        "actions-033": {
            "prompt": "¿Qué entrada de upload-artifact selecciona los archivos que se cargarán, como dist/*.zip?",
            "choices": [
                "name",
                "retention-days",
                "if-no-files-found",
                "path"
            ],
            "explanations": [
                "name etiqueta el artefacto resultante.",
                "retention-days selecciona la duración de almacenamiento.",
                "if-no-files-found controla el manejo de archivos ausentes.",
                "path selecciona el contenido del sistema de archivos."
            ],
            "concept": "Rutas de artefactos",
            "hints": [
                "Separa la etiqueta del artefacto de su contenido.",
                "Un patrón glob describe la selección de archivos."
            ]
        },
        "actions-034": {
            "prompt": "¿Qué expresión produce un hash de los archivos de bloqueo coincidentes para una clave de caché?",
            "choices": [
                "${{ format('**/package-lock.json') }}",
                "${{ hashFiles('**/package-lock.json') }}",
                "${{ toJSON('**/package-lock.json') }}",
                "${{ contains('**/package-lock.json', 'lock') }}"
            ],
            "explanations": [
                "format devuelve texto formateado, no un hash de archivo.",
                "hashFiles calcula el hash del contenido de los archivos coincidentes.",
                "toJSON serializa la cadena del patrón.",
                "contains comprueba texto, no contenido de archivos."
            ],
            "concept": "Expresiones de hash de archivos",
            "hints": [
                "Una clave de caché puede incorporar valores derivados.",
                "Encontrar nombres y calcular hashes son operaciones distintas."
            ]
        },
        "actions-035": {
            "prompt": "¿Qué entrada de caché proporciona prefijos ordenados para probar si no coincide la clave principal?",
            "choices": [
                "restore-keys",
                "path",
                "cache-hit",
                "retention-days"
            ],
            "explanations": [
                "restore-keys define prefijos de claves alternativas.",
                "path identifica archivos o directorios almacenados en caché.",
                "cache-hit es una salida que describe la búsqueda.",
                "retention-days no es la entrada de claves alternativas."
            ],
            "concept": "Claves alternativas de caché",
            "hints": [
                "Separa entradas y resultados de la búsqueda.",
                "El orden expresa preferencia entre coincidencias parciales."
            ]
        },
        "actions-036": {
            "prompt": "En Bash, ¿qué comando añade un encabezado Markdown al resumen del trabajo de este paso?",
            "choices": [
                "echo \"## Tests\" >> \"$GITHUB_STEP_SUMMARY\"",
                "echo \"## Tests\" >> \"$GITHUB_OUTPUT\"",
                "echo \"## Tests\" >> \"$GITHUB_ENV\"",
                "echo \"## Tests\" >> \"$GITHUB_STATE\""
            ],
            "explanations": [
                "El archivo de resumen acepta contenido Markdown.",
                "Un archivo de salidas espera asignaciones con nombre.",
                "Un archivo de entorno espera asignaciones de variables.",
                "State lleva valores del ciclo de vida, no resúmenes visibles."
            ],
            "concept": "Resúmenes Markdown de trabajos",
            "hints": [
                "Decide si el resultado es un dato o una presentación.",
                "Los archivos del runner aceptan contenidos distintos."
            ]
        },
        "actions-037": {
            "prompt": "¿Qué ocurre con los artefactos almacenados cuando se elimina su ejecución de flujo?",
            "choices": [
                "Se adjuntan a la última ejecución correcta.",
                "Los artefactos también se eliminan.",
                "Se convierten en recursos de una release del repositorio.",
                "Se trasladan a la caché de dependencias."
            ],
            "explanations": [
                "Los artefactos no se reasignan a otra ejecución.",
                "Los artefactos están vinculados a la ejecución eliminada.",
                "La eliminación no crea recursos de release.",
                "Artefactos y cachés tienen ciclos de almacenamiento distintos."
            ],
            "concept": "Ciclo de vida de artefactos",
            "hints": [
                "Considera qué objeto posee los archivos almacenados.",
                "Un artefacto de ejecución no es un recurso permanente de release."
            ]
        },
        "actions-038": {
            "prompt": "Un paso run con Bash debe ejecutar npm test desde packages/web. ¿Qué propiedad del paso establece esa ubicación?",
            "choices": [
                "path: packages/web",
                "runs-on: packages/web",
                "shell: packages/web",
                "working-directory: packages/web"
            ],
            "explanations": [
                "path no es la propiedad de directorio del paso run.",
                "runs-on selecciona runners a nivel de trabajo.",
                "shell selecciona un intérprete de comandos.",
                "working-directory selecciona el directorio inicial del comando."
            ],
            "concept": "Directorios de trabajo de pasos",
            "hints": [
                "Distingue el shell de su directorio actual.",
                "El directorio debe existir al iniciar el paso."
            ]
        },
        "actions-039": {
            "prompt": "¿Qué ruta de configuración debe tener el valor 20 para limitar todo el trabajo build a veinte minutos?",
            "choices": [
                "jobs.build.timeout-minutes",
                "jobs.build.steps[0].timeout-minutes",
                "jobs.build.strategy.max-parallel",
                "jobs.build.defaults.run.timeout"
            ],
            "explanations": [
                "El tiempo límite del trabajo abarca su ejecución.",
                "El tiempo límite del paso abarca solo ese paso.",
                "max-parallel limita concurrencia de matriz, no duración.",
                "No es una propiedad admitida de tiempo límite de run."
            ],
            "concept": "Ámbito del tiempo límite del trabajo",
            "hints": [
                "Ajusta el anidamiento al ámbito deseado.",
                "Concurrencia y tiempo transcurrido son límites distintos."
            ]
        },
        "actions-040": {
            "prompt": "¿Qué clave de paso invoca una acción en lugar de ejecutar un comando de shell?",
            "choices": [
                "uses",
                "run",
                "shell",
                "needs"
            ],
            "explanations": [
                "uses identifica la acción que se ejecutará.",
                "run contiene comandos interpretados por un shell.",
                "shell selecciona el intérprete de comandos run.",
                "needs establece dependencias a nivel de trabajo."
            ],
            "concept": "Pasos de acción y de shell",
            "hints": [
                "Un paso tiene formas alternativas de ejecución.",
                "No confundas la referencia de una acción con sus entradas."
            ]
        },
        "actions-041": {
            "prompt": "¿Qué propiedad del trabajo build registra su despliegue en el entorno preview?",
            "choices": [
                "deployment: preview",
                "environment: preview",
                "env: {name: preview}",
                "name: preview"
            ],
            "explanations": [
                "deployment no es esta propiedad del esquema de trabajo.",
                "environment vincula el trabajo al entorno indicado.",
                "env crea una variable name, no un destino de despliegue.",
                "name cambia el nombre visible del trabajo."
            ],
            "concept": "Vinculación de entornos",
            "hints": [
                "Las variables de entorno y los entornos de despliegue difieren.",
                "La configuración pertenece a la definición del trabajo."
            ]
        },
        "actions-042": {
            "prompt": "¿Qué parámetro restringe una insignia de estado de Actions a ejecuciones disparadas por push?",
            "choices": [
                "event=push",
                "branch=push",
                "workflow=push",
                "status=push"
            ],
            "explanations": [
                "event filtra la insignia por evento disparador.",
                "branch seleccionaría una rama llamada push.",
                "El archivo del flujo va en la ruta URL de la insignia.",
                "push es un evento, no una conclusión."
            ],
            "concept": "Eventos en insignias de flujos",
            "hints": [
                "Los filtros de insignias distinguen referencias de eventos.",
                "Lee el nombre del parámetro además de su valor."
            ]
        },
        "actions-043": {
            "prompt": "¿Qué configuración de push selecciona etiquetas que empiezan por v sin seleccionar pushes de ramas?",
            "choices": [
                "types: [tagged]",
                "tags: ['v*']",
                "branches: ['v*']",
                "paths: ['v*']"
            ],
            "explanations": [
                "tagged no es un filtro de actividad push admitido.",
                "Un filtro solo de tags selecciona referencias de etiquetas coincidentes.",
                "branches selecciona referencias de ramas, no etiquetas.",
                "paths selecciona archivos modificados, no nombres de etiquetas."
            ],
            "concept": "Filtrado de pushes de etiquetas",
            "hints": [
                "Una referencia de etiqueta difiere del commit al que apunta.",
                "Selecciona la familia de referencias antes del patrón."
            ]
        },
        "actions-044": {
            "prompt": "Un flujo usa issues: {types: [labeled]}. ¿Qué suceso lo dispara?",
            "choices": [
                "Se renombra una etiqueta del repositorio.",
                "Se edita el título de una issue.",
                "Se elimina una etiqueta de una issue.",
                "Se añade una etiqueta a una issue."
            ],
            "explanations": [
                "Los cambios de etiquetas del repositorio usan otro evento.",
                "Editar el título corresponde a la actividad edited.",
                "La eliminación corresponde a la actividad unlabeled.",
                "labeled describe añadir una etiqueta a una issue."
            ],
            "concept": "Actividades de issues",
            "hints": [
                "Separa la definición de etiquetas de su asignación.",
                "Los tipos de actividad distinguen añadir de eliminar."
            ]
        },
        "actions-045": {
            "prompt": "¿De qué rama se usa la definición del flujo para una ejecución programada?",
            "choices": [
                "La rama actual del editor de flujos",
                "Cada rama que contiene ese flujo",
                "La rama predeterminada del repositorio",
                "La rama con el push más reciente"
            ],
            "explanations": [
                "Una sesión del editor no determina la ejecución programada.",
                "Una programación no se distribuye entre todas las ramas.",
                "Los eventos programados se ejecutan en la rama predeterminada.",
                "El push más reciente no selecciona la referencia programada."
            ],
            "concept": "Revisión de flujos programados",
            "hints": [
                "La programación tiene una regla de rama a nivel de repositorio.",
                "No deduzcas la referencia de ejecución a partir de la edición."
            ]
        },
        "actions-046": {
            "prompt": "La variable de cadena env.RETRY_LIMIT contiene '4'. ¿Qué expresión la convierte en número para una comparación numérica?",
            "choices": [
                "${{ fromJSON(env.RETRY_LIMIT) }}",
                "${{ toJSON(env.RETRY_LIMIT) }}",
                "${{ format('{0}', env.RETRY_LIMIT) }}",
                "${{ contains(env.RETRY_LIMIT, '4') }}"
            ],
            "explanations": [
                "fromJSON convierte este texto JSON numérico en número.",
                "toJSON serializa el valor de cadena existente.",
                "format devuelve una cadena formateada.",
                "contains devuelve un booleano de pertenencia."
            ],
            "concept": "Conversión explícita de cadenas",
            "hints": [
                "Los valores de entorno suelen llegar como texto.",
                "Elige una conversión que produzca el tipo necesario."
            ]
        },
        "actions-047": {
            "prompt": "Una matriz tiene node: [20, 22]. ¿Qué añade include: [{node: 22, experimental: true}] a la combinación existente node 22?",
            "choices": [
                "Una tercera versión de node",
                "Una exclusión de node 20",
                "Un campo experimental: true",
                "Un trabajo node 22 duplicado"
            ],
            "explanations": [
                "No aparece ningún valor node nuevo en la entrada.",
                "include no excluye la otra combinación original.",
                "La entrada amplía una combinación original compatible.",
                "Los datos compatibles de include se añaden a la combinación original."
            ],
            "concept": "Include aditivo de matriz",
            "hints": [
                "Comprueba si se sobrescribirían valores existentes de ejes.",
                "Los metadatos adicionales no tienen por qué crear trabajos."
            ]
        },
        "actions-048": {
            "prompt": "¿Dónde debe residir un archivo de flujo reutilizable en su repositorio?",
            "choices": [
                "Dentro de .github/actions/shared/",
                "Directamente en .github/workflows/",
                "Dentro de .github/workflows/shared/",
                "Directamente en workflow-templates/"
            ],
            "explanations": [
                "Un directorio de acciones no define un flujo reutilizable.",
                "Los flujos reutilizables usan este directorio sin subdirectorios.",
                "No se admiten subdirectorios para estos archivos de flujo.",
                "Es una ubicación de plantillas, no de flujos invocables."
            ],
            "concept": "Ubicación de flujos reutilizables",
            "hints": [
                "Los flujos reutilizables conservan reglas de ubicación de flujos.",
                "Un flujo invocable no es un paquete de acción."
            ]
        },
        "actions-049": {
            "prompt": "En Bash, ¿qué valor debe añadirse a GITHUB_PATH para que pasos posteriores encuentren /opt/tools/bin/report como report?",
            "choices": [
                "report=/opt/tools/bin/report",
                "/opt/tools/bin",
                "/opt/tools/bin/report",
                "PATH=/opt/tools/bin"
            ],
            "explanations": [
                "Esta sintaxis no crea un alias de shell.",
                "Las entradas PATH contienen directorios de búsqueda de ejecutables.",
                "La ruta del ejecutable no es un directorio de búsqueda.",
                "GITHUB_PATH acepta directorios, no asignaciones de variables."
            ],
            "concept": "Rutas de búsqueda de comandos",
            "hints": [
                "La búsqueda de comandos recorre directorios, no archivos.",
                "Usa el formato de archivo que exige el runner."
            ]
        },
        "actions-050": {
            "prompt": "La fase pre de una acción guarda tempdir=/work/item mediante GITHUB_STATE. ¿Qué variable lee ese valor en la fase post de la misma acción?",
            "choices": [
                "INPUT_tempdir",
                "OUTPUT_tempdir",
                "GITHUB_tempdir",
                "STATE_tempdir"
            ],
            "explanations": [
                "INPUT_ se refiere a entradas, no al estado del ciclo de vida.",
                "Las salidas no se convierten en variables OUTPUT_ del ciclo.",
                "GITHUB_ no es el prefijo del estado guardado.",
                "El estado guardado usa el prefijo STATE_ en esa acción."
            ],
            "concept": "Estado del ciclo de vida de acciones",
            "hints": [
                "El estado se limita a la acción que lo guardó.",
                "La comunicación entre fases difiere de las salidas del flujo."
            ]
        },
        "actions-051": {
            "prompt": "¿Qué clave de nivel superior etiqueta el flujo en la barra lateral Actions, en vez de nombrar una ejecución concreta?",
            "choices": [
                "name",
                "run-name",
                "jobs",
                "id"
            ],
            "explanations": [
                "name es la etiqueta visible del flujo.",
                "run-name etiqueta ejecuciones individuales del flujo.",
                "jobs declara el grafo de trabajos ejecutables.",
                "id no es el campo de nombre visible del flujo."
            ],
            "concept": "Etiquetas de flujos",
            "hints": [
                "Separa la definición del flujo de una ejecución.",
                "Las etiquetas visibles y los identificadores difieren."
            ]
        },
        "actions-052": {
            "prompt": "En un push a la rama feature/parser, ¿qué propiedad github contiene feature/parser sin refs/heads/?",
            "choices": [
                "github.ref_name",
                "github.ref",
                "github.sha",
                "github.ref_type"
            ],
            "explanations": [
                "ref_name es el nombre corto de la rama o etiqueta.",
                "ref incluye el prefijo de referencia completo.",
                "sha es el identificador del commit, no la rama.",
                "ref_type distingue rama de etiqueta."
            ],
            "concept": "Formas de nombres de referencias",
            "hints": [
                "Los metadatos pueden describir identidad, tipo o presentación.",
                "Compara referencias completas con nombres cortos."
            ]
        },
        "actions-053": {
            "prompt": "MODE se define solo en el mapa env de un paso. ¿Dónde está disponible directamente esa definición?",
            "choices": [
                "En todos los pasos posteriores",
                "En todos los trabajos del flujo",
                "En los flujos invocados después",
                "Dentro de ese paso"
            ],
            "explanations": [
                "env del paso no persiste automáticamente en pasos posteriores.",
                "Un valor de paso no se vuelve global al flujo.",
                "Los flujos llamados no heredan el mapa env de este paso.",
                "Un mapa env de paso se aplica a ese paso."
            ],
            "concept": "Ámbito de entorno de pasos",
            "hints": [
                "El anidamiento de la configuración determina el ámbito.",
                "La persistencia requiere algo más que configuración local."
            ]
        },
        "actions-054": {
            "prompt": "¿Qué forma YAML coloca dos comandos Bash en un paso run conservando el salto de línea?",
            "choices": [
                "uses: |\n  echo first\n  echo second",
                "run: |\n  echo first\n  echo second",
                "run: >\n  echo first\n  echo second",
                "run: [echo first, echo second]"
            ],
            "explanations": [
                "uses espera una referencia de acción, no comandos shell.",
                "El bloque literal conserva el salto de línea entre comandos.",
                "El bloque plegado une estas líneas en una línea de comando.",
                "run espera una cadena, no una secuencia YAML."
            ],
            "concept": "Scripts de shell multilínea",
            "hints": [
                "Considera los estilos escalares YAML antes de la ejecución shell.",
                "Conservar dos líneas difiere de unir su texto."
            ]
        },
        "actions-055": {
            "prompt": "Un paso que falla tiene id: probe y continue-on-error: true. ¿Qué propiedad informa del fallo original antes de aplicar la tolerancia?",
            "choices": [
                "job.status",
                "needs.probe.result",
                "steps.probe.outcome",
                "steps.probe.conclusion"
            ],
            "explanations": [
                "job.status describe el trabajo, no el resultado bruto del paso.",
                "needs consulta trabajos, pero probe identifica un paso.",
                "outcome registra el resultado anterior a la tolerancia.",
                "conclusion refleja el resultado tras continue-on-error."
            ],
            "concept": "Fallos tolerados de pasos",
            "hints": [
                "El manejo de fallos puede transformar la conclusión.",
                "Distingue las pruebas del paso del estado del trabajo."
            ]
        },
        "actions-056": {
            "prompt": "Con GitHub CLI en la copia local del repositorio, ¿qué comando lista las ejecuciones de ci.yml?",
            "choices": [
                "gh run list --workflow ci.yml",
                "gh workflow list --all",
                "gh run view ci.yml",
                "gh workflow view ci.yml --yaml"
            ],
            "explanations": [
                "run list filtra el historial por flujo.",
                "workflow list enumera definiciones, no sus ejecuciones.",
                "run view espera una ejecución, no este nombre de archivo.",
                "workflow view --yaml muestra la definición del flujo."
            ],
            "concept": "Búsqueda de ejecuciones con CLI",
            "hints": [
                "Distingue las definiciones de flujos del historial de ejecución.",
                "Un archivo de flujo puede filtrar una lista de ejecuciones."
            ]
        },
        "actions-057": {
            "prompt": "¿Qué secreto de Actions con valor true habilita mensajes adicionales de depuración de pasos en ejecuciones posteriores?",
            "choices": [
                "ACTIONS_RUNNER_DEBUG",
                "RUNNER_DEBUG",
                "ACTIONS_DEBUG",
                "ACTIONS_STEP_DEBUG"
            ],
            "explanations": [
                "Esta configuración habilita archivos de diagnóstico del runner.",
                "RUNNER_DEBUG indica al código que el modo de depuración está activo.",
                "ACTIONS_DEBUG no es el interruptor documentado para pasos.",
                "Esta configuración habilita depuración detallada de pasos."
            ],
            "concept": "Configuración de depuración de pasos",
            "hints": [
                "Distingue el detalle de pasos del diagnóstico del runner.",
                "El nombre documentado debe coincidir exactamente."
            ]
        },
        "actions-058": {
            "prompt": "Con ACTIONS_RUNNER_DEBUG=true, ¿dónde debe buscar los diagnósticos del proceso del runner tras descargar los registros?",
            "choices": [
                "Los recursos de release del repositorio",
                "El resumen Markdown del flujo",
                "La carpeta runner-diagnostic-logs",
                "La caché de dependencias cargada"
            ],
            "explanations": [
                "La depuración del runner no publica recursos de release.",
                "Estos registros de procesos no se muestran como resumen.",
                "Los diagnósticos se incluyen en esta carpeta del archivo.",
                "Las cachés guardan archivos seleccionados, no estos diagnósticos."
            ],
            "concept": "Archivos de diagnóstico del runner",
            "hints": [
                "El archivo descargado puede contener más que salidas de pasos.",
                "Los archivos de depuración tienen una ubicación específica."
            ]
        },
        "actions-059": {
            "prompt": "Para la ejecución 731, ¿qué comando de GitHub CLI corresponde a Re-run failed jobs en Actions en inglés?",
            "choices": [
                "gh run rerun 731",
                "gh run watch 731 --exit-status",
                "gh run view 731 --log-failed",
                "gh run rerun 731 --failed"
            ],
            "explanations": [
                "Sin la opción, solicita repetir la ejecución completa.",
                "watch observa una ejecución sin reintentar trabajos.",
                "view lee registros de pasos fallidos sin iniciar ejecución.",
                "La opción failed selecciona trabajos fallidos para reintentar."
            ],
            "concept": "Reintentos de trabajos fallidos con CLI",
            "hints": [
                "Observar y reintentar son operaciones distintas.",
                "Comprueba la opción que limita el ámbito del reintento."
            ]
        },
        "actions-060": {
            "prompt": "¿Qué comando de GitHub CLI imprime solo los registros de pasos fallidos de la ejecución terminada 731?",
            "choices": [
                "gh run download 731",
                "gh run view 731 --log-failed",
                "gh run view 731 --log",
                "gh run list --status failure"
            ],
            "explanations": [
                "download obtiene artefactos, no registros de consola.",
                "log-failed limita la salida a pasos fallidos.",
                "log imprime registros de más pasos que los fallidos.",
                "list devuelve historial, no contenido de registros de pasos."
            ],
            "concept": "Registros de pasos fallidos con CLI",
            "hints": [
                "La conclusión de una ejecución no es el texto del error.",
                "Elige una lectura con la granularidad solicitada."
            ]
        },
        "actions-061": {
            "prompt": "Un script debe esperar a la ejecución 731 y devolver un fallo si esta falla. ¿Qué comando de GitHub CLI corresponde?",
            "choices": [
                "gh run watch 731 --exit-status",
                "gh run view 731 --log-failed",
                "gh run list --limit 1",
                "gh run rerun 731 --failed"
            ],
            "explanations": [
                "watch espera y exit-status propaga el fallo.",
                "view lee datos actuales en lugar de esperar al final.",
                "list devuelve una instantánea sin esperar al final.",
                "rerun solicita ejecución, no supervisa este intento."
            ],
            "concept": "Supervisión de ejecuciones con CLI",
            "hints": [
                "Esperar y propagar un resultado son requisitos distintos.",
                "No confundas observar con iniciar otro intento."
            ]
        },
        "actions-062": {
            "prompt": "¿Qué comando de GitHub CLI descarga solo el artefacto coverage de la ejecución 731?",
            "choices": [
                "gh run list --workflow coverage",
                "gh run watch 731 --interval 5",
                "gh run download 731 --name coverage",
                "gh run view 731 --job coverage"
            ],
            "explanations": [
                "Un filtro de flujo devuelve historial, no archivos.",
                "watch observa el estado y no obtiene artefactos.",
                "download con name selecciona el artefacto indicado.",
                "Un selector de trabajo no descarga archivos de artefactos."
            ],
            "concept": "Selección de artefactos con CLI",
            "hints": [
                "El nombre del artefacto difiere del ID del trabajo.",
                "Selecciona tanto la ejecución como el resultado almacenado."
            ]
        },
        "actions-063": {
            "prompt": "La rama predeterminada contiene un flujo workflow_dispatch llamado audit.yml. ¿Qué comando de GitHub CLI lo inicia en la rama staging?",
            "choices": [
                "gh run list --workflow audit.yml --branch staging",
                "gh workflow run audit.yml --ref staging",
                "gh run rerun audit.yml --branch staging",
                "gh workflow view audit.yml --ref staging"
            ],
            "explanations": [
                "list lee el historial sin crear una ejecución.",
                "workflow run despacha usando la referencia seleccionada.",
                "rerun apunta a una ejecución existente, no a este archivo.",
                "view muestra un flujo sin despacharlo."
            ],
            "concept": "Invocación manual con CLI",
            "hints": [
                "Iniciar una ejecución nueva difiere de reintentar un ID.",
                "La selección de referencia forma parte del despacho."
            ]
        },
        "actions-064": {
            "prompt": "¿Qué comando de GitHub CLI deshabilita ci.yml sin eliminar su archivo YAML?",
            "choices": [
                "gh run delete ci.yml",
                "gh workflow disable ci.yml",
                "gh run cancel ci.yml",
                "gh workflow view ci.yml"
            ],
            "explanations": [
                "delete elimina una ejecución seleccionada por ID.",
                "disable cambia el estado de habilitación del flujo.",
                "cancel apunta a una ejecución, no a una definición de flujo.",
                "view lee la definición sin cambiar su estado."
            ],
            "concept": "Suspensión de flujos con CLI",
            "hints": [
                "Un flujo y una de sus ejecuciones tienen ciclos distintos.",
                "La suspensión debe conservar la configuración para reutilizarla."
            ]
        },
        "actions-065": {
            "prompt": "¿Qué condición de un repositorio público puede deshabilitar automáticamente los flujos programados?",
            "choices": [
                "Sin actividad del repositorio durante 60 días",
                "Sin ejecuciones correctas durante 7 días",
                "Sin pull requests abiertas durante 30 días",
                "Sin releases nuevas durante 90 días"
            ],
            "explanations": [
                "La regla documentada de inactividad se aplica a programaciones públicas.",
                "El historial de éxito no es este criterio de inactividad.",
                "El número de pull requests abiertas no es este criterio.",
                "La frecuencia de releases no es este criterio de inactividad."
            ],
            "concept": "Flujos programados inactivos",
            "hints": [
                "Busca actividad del repositorio, no resultados de pruebas.",
                "Esta regla trata de automatización programada en repositorios públicos."
            ]
        },
        "actions-066": {
            "prompt": "Un paso Bash de Linux solo ejecuta echo '::error::Missing report' y termina normalmente. ¿Qué hace ese comando por sí solo?",
            "choices": [
                "Cancela todos los trabajos restantes del flujo",
                "Reintenta el paso tras registrar una anotación",
                "Crea una anotación de error sin código de salida fallido",
                "Crea un mensaje de depuración y hace fallar el paso"
            ],
            "explanations": [
                "Una anotación no cancela trabajos del flujo.",
                "Los comandos de flujo no reintentan pasos implícitamente.",
                "Una anotación no cambia por sí sola el estado de salida de Bash.",
                "error es un comando de anotación, no de depuración."
            ],
            "concept": "Anotaciones de error y códigos de salida",
            "hints": [
                "Separa la gravedad visible de la terminación del proceso.",
                "El estado de salida sigue determinando el éxito del comando."
            ]
        },
        "actions-067": {
            "prompt": "¿Qué par de comandos de flujo crea una sección desplegable en el registro de un trabajo?",
            "choices": [
                "::group::Details / ::endgroup::",
                "::debug::Details / ::enddebug::",
                "::notice::Details / ::endnotice::",
                "::warning::Details / ::endwarning::"
            ],
            "explanations": [
                "group y endgroup delimitan una región desplegable del registro.",
                "Los mensajes debug no usan este comando de cierre.",
                "Las anotaciones notice no definen regiones desplegables.",
                "Las anotaciones warning no definen regiones desplegables."
            ],
            "concept": "Grupos de registros desplegables",
            "hints": [
                "La organización del registro difiere de la gravedad de anotaciones.",
                "Una región delimitada necesita marcas de apertura y cierre."
            ]
        },
        "actions-068": {
            "prompt": "¿Qué ruta REST lista los artefactos de run_id en owner/repo?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
                "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/zip",
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
            ],
            "explanations": [
                "Esta ruta descarga registros en vez de listar artefactos.",
                "Esta ruta lista ejecuciones, no artefactos almacenados.",
                "Esta ruta descarga un artefacto ya identificado.",
                "Esta ruta lista artefactos de una ejecución."
            ],
            "concept": "Listado REST de artefactos de ejecución",
            "hints": [
                "Elige el tipo de recurso antes de la operación.",
                "El identificador de ejecución conocido debe limitar el listado."
            ]
        },
        "actions-069": {
            "prompt": "Un cliente autenticado puede acceder al artefacto 82. ¿Qué ruta REST solicita su descarga ZIP?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/artifacts/82",
                "GET /repos/{owner}/{repo}/actions/artifacts/82/zip",
                "GET /repos/{owner}/{repo}/actions/runs/82/logs",
                "GET /repos/{owner}/{repo}/zipball/82"
            ],
            "explanations": [
                "Esta ruta obtiene metadatos, no el archivo del artefacto.",
                "El sufijo de formato solicita la descarga del artefacto.",
                "Esta ruta trata 82 como ID de ejecución y obtiene registros.",
                "zipball obtiene archivos de código fuente, no artefactos de Actions."
            ],
            "concept": "Descargas REST de artefactos",
            "hints": [
                "Separa archivos de resultados de archivos de código fuente.",
                "Un ID de artefacto no es un ID de ejecución."
            ]
        },
        "actions-070": {
            "prompt": "¿Qué ruta REST solicita el archivo de registros de la ejecución 731?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/workflows/731",
                "GET /repos/{owner}/{repo}/contents/731",
                "GET /repos/{owner}/{repo}/actions/runs/731/logs",
                "GET /repos/{owner}/{repo}/actions/runs/731/artifacts"
            ],
            "explanations": [
                "La ruta workflow trata 731 como identificador de flujo.",
                "La ruta contents lee archivos del repositorio.",
                "La ruta logs de la ejecución solicita sus registros.",
                "La ruta artifacts lista archivos de resultados cargados."
            ],
            "concept": "Archivos de registros REST",
            "hints": [
                "La salida de consola es distinta de los artefactos cargados.",
                "Usa el recurso de ejecución, no el de definición."
            ]
        },
        "actions-071": {
            "prompt": "En la interfaz de registros de GitHub en inglés, ¿en qué pasos busca Search logs?",
            "choices": [
                "Solo pasos cuya conclusión es failure",
                "Todas las ejecuciones históricas de ese flujo",
                "Pasos expandidos del registro mostrado",
                "Todos los pasos de todos los trabajos de la ejecución"
            ],
            "explanations": [
                "El ámbito depende de la expansión, no solo del fallo.",
                "Esta búsqueda no consulta ejecuciones históricas.",
                "Solo los pasos expandidos participan en esta búsqueda.",
                "La búsqueda no abarca todos los trabajos automáticamente."
            ],
            "concept": "Ámbito de búsqueda en registros de la interfaz",
            "hints": [
                "Comprueba qué contenido expone actualmente la interfaz.",
                "La búsqueda visual puede abarcar menos que el archivo descargado."
            ]
        },
        "actions-072": {
            "prompt": "¿Qué sección del registro en inglés enlaza el inventario de software de la imagen del runner hospedado realmente usada?",
            "choices": [
                "Post job cleanup",
                "Set up job",
                "Complete job",
                "Run actions/checkout"
            ],
            "explanations": [
                "La limpieza no establece el inventario inicial de la imagen.",
                "Set up job incluye información del software de la imagen.",
                "Complete job registra la finalización, no el inventario inicial.",
                "Checkout obtiene el repositorio, no el inventario de la imagen."
            ],
            "concept": "Pruebas del runner hospedado",
            "hints": [
                "Usa pruebas de la ejecución concreta.",
                "Una etiqueta móvil de runner no es un inventario inmutable."
            ]
        },
        "actions-073": {
            "prompt": "Un repositorio necesita un archivo CI inicial que sus mantenedores personalizarán de forma independiente. ¿Qué mecanismo corresponde?",
            "choices": [
                "Una referencia a acción compuesta",
                "Una restauración de caché de dependencias",
                "Una plantilla de flujo",
                "Un flujo reutilizable invocado"
            ],
            "explanations": [
                "Una acción compuesta agrupa pasos, no crea el archivo inicial.",
                "Una caché restaura archivos, no genera la configuración del flujo.",
                "Una plantilla crea un flujo editable de forma independiente.",
                "Una llamada reutilizable ejecuta lógica compartida sin copiarla."
            ],
            "concept": "Elección de plantillas de flujos",
            "hints": [
                "Decide si la reutilización consiste en copiar o invocar.",
                "La personalización independiente cambia el modelo adecuado."
            ]
        },
        "actions-074": {
            "prompt": "Varios flujos necesitan los mismos tres pasos de preparación dentro de sus trabajos existentes, sin trabajos adicionales. ¿Qué componente corresponde?",
            "choices": [
                "Una copia de plantilla de flujo",
                "Un evento programado del repositorio",
                "Una acción compuesta",
                "Un flujo reutilizable de varios trabajos"
            ],
            "explanations": [
                "Una plantilla copia configuración en lugar de compartir pasos ejecutables.",
                "Un evento determina cuándo ejecutar, no cómo agrupar pasos.",
                "Una acción compuesta ejecuta pasos agrupados en el trabajo llamador.",
                "Un flujo reutilizable se invoca a nivel de trabajo."
            ],
            "concept": "Elección de acciones compuestas",
            "hints": [
                "Ajusta el límite de reutilización: pasos, trabajos o archivos.",
                "Considera si debe seguir ejecutándose el runner existente."
            ]
        },
        "actions-075": {
            "prompt": "Junto a workflow-templates/ci.yml, ¿qué archivo aporta el nombre y la descripción de la plantilla en el repositorio .github de una organización?",
            "choices": [
                "workflow-templates/ci.action.yml",
                "workflow-templates/ci.package.json",
                "workflow-templates/ci.workflow.json",
                "workflow-templates/ci.properties.json"
            ],
            "explanations": [
                "Los metadatos de acciones no describen la plantilla de flujo.",
                "Un manifiesto de paquete no es este archivo de metadatos.",
                "No es el sufijo documentado del descriptor de plantilla.",
                "El archivo properties.json correspondiente contiene los metadatos."
            ],
            "concept": "Metadatos de plantillas de flujos",
            "hints": [
                "El descriptor coincide con el nombre base del flujo.",
                "Los metadatos visibles de la plantilla son distintos del YAML ejecutable."
            ]
        },
        "actions-076": {
            "prompt": "Un mantenedor abre un flujo deshabilitado en Actions en inglés. ¿Qué control restaura la ejecución por eventos sin reescribir YAML?",
            "choices": [
                "Cancel workflow",
                "Enable workflow",
                "Re-run all jobs",
                "Delete workflow run"
            ],
            "explanations": [
                "Cancelar detiene una ejecución en vez de habilitar futuras ejecuciones.",
                "Enable workflow restaura el estado activo del flujo.",
                "Un reintento repite una ejecución, no habilita la definición.",
                "Eliminar el historial no habilita el flujo."
            ],
            "concept": "Rehabilitación de flujos en la interfaz",
            "hints": [
                "Una definición deshabilitada difiere de una ejecución fallida.",
                "Busca un control que afecte a eventos futuros."
            ]
        },
        "actions-077": {
            "prompt": "¿Qué elimina DELETE /repos/{owner}/{repo}/actions/runs/{run_id}?",
            "choices": [
                "La ejecución seleccionada y sus datos asociados",
                "El archivo YAML del flujo de la rama predeterminada",
                "Todas las definiciones de flujos del repositorio",
                "La configuración de habilitación de Actions del repositorio"
            ],
            "explanations": [
                "El endpoint apunta a una ejecución de flujo.",
                "Eliminar una ejecución no edita archivos del repositorio.",
                "La ruta de ejecución no elimina definiciones de flujos.",
                "Este endpoint no cambia la configuración de Actions."
            ],
            "concept": "Eliminación de ejecuciones y definiciones",
            "hints": [
                "Lee el recurso indicado en la URL.",
                "Eliminar historial difiere de eliminar configuración."
            ]
        },
        "actions-078": {
            "prompt": "Un flujo reutilizable declara region con required: true y sin valor predeterminado. El llamador omite region. ¿Qué debe corregirse?",
            "choices": [
                "Proporcionar region en el mapa with del llamador.",
                "Añadir region a la lista needs del llamador.",
                "Crear una etiqueta de runner llamada region.",
                "Renombrar como region el primer paso del flujo llamado."
            ],
            "explanations": [
                "La llamada debe cumplir el contrato de entradas obligatorias.",
                "needs lista dependencias de trabajos, no entradas de invocación.",
                "Las etiquetas de runner no proporcionan entradas declaradas.",
                "El nombre de un paso no proporciona una entrada ausente."
            ],
            "concept": "Fallos de entradas obligatorias",
            "hints": [
                "Valida la interfaz de invocación antes del comportamiento del runner.",
                "Las entradas obligatorias son distintas de las dependencias."
            ]
        },
        "actions-079": {
            "prompt": "Un trabajo de informes depende de tests y usa if: ${{ always() }}. ¿Qué referencia indica si tests falló?",
            "choices": [
                "steps.tests.outcome",
                "github.tests.status",
                "runner.tests.result",
                "needs.tests.result"
            ],
            "explanations": [
                "tests es aquí un trabajo dependiente, no un paso local.",
                "github no contiene campos arbitrarios de resultados de trabajos.",
                "runner describe hardware y entorno de ejecución.",
                "needs expone el resultado del trabajo del que depende."
            ],
            "concept": "Diagnóstico de resultados de dependencias",
            "hints": [
                "Una condición permite ejecutar, pero no aporta los resultados.",
                "Ubica el productor en el grafo de dependencias."
            ]
        },
        "actions-080": {
            "prompt": "Una matriz de cuatro trabajos usa fail-fast: true. Un trabajo falla y se cancelan dos pendientes. ¿Qué cambio permite ejecutarlos en el próximo intento?",
            "choices": [
                "Quitar el nombre visible del trabajo fallido.",
                "Añadir más valores al mismo eje de matriz.",
                "Establecer strategy.fail-fast en false.",
                "Establecer strategy.max-parallel en uno."
            ],
            "explanations": [
                "Los nombres visibles no controlan la cancelación.",
                "Más combinaciones no cambian la política de fallos.",
                "Deshabilitar fail-fast evita esta política de cancelación de hermanos.",
                "La ejecución en serie no deshabilita la cancelación fail-fast."
            ],
            "concept": "Diagnóstico de fallos de matriz",
            "hints": [
                "Separa el primer fallo de las cancelaciones posteriores.",
                "Los límites de planificación no definen la respuesta al fallo."
            ]
        },
        "actions-081": {
            "prompt": "Durante pull_request, ¿qué propiedad identifica la rama de origen del colaborador en vez de la referencia de fusión?",
            "choices": [
                "github.repository",
                "github.head_ref",
                "github.base_ref",
                "github.ref"
            ],
            "explanations": [
                "repository identifica el repositorio, no una rama.",
                "head_ref nombra la rama de origen de la pull request.",
                "base_ref nombra la rama destino de la pull request.",
                "ref normalmente identifica aquí la referencia de fusión."
            ],
            "concept": "Referencias de origen de pull requests",
            "hints": [
                "Una pull request tiene origen y destino.",
                "La referencia usada para ejecutar puede ser sintética."
            ]
        },
        "actions-082": {
            "prompt": "Un paso tiene name: Compile, id: build y salida binary. ¿Qué referencia lee la salida después en el mismo trabajo?",
            "choices": [
                "steps.binary.outputs.build",
                "steps.build.outputs.binary",
                "steps.Compile.outputs.binary",
                "needs.build.outputs.binary"
            ],
            "explanations": [
                "El identificador del paso precede a outputs y al nombre de salida.",
                "La consulta de salidas usa el id del paso.",
                "El nombre visible no reemplaza el id del paso.",
                "needs consulta trabajos dependientes, no pasos locales."
            ],
            "concept": "Identificadores de salidas de pasos",
            "hints": [
                "Separa etiquetas visibles de identificadores de expresiones.",
                "Sigue el ámbito del productor y el nombre de salida declarado."
            ]
        },
        "actions-083": {
            "prompt": "Un trabajo build carga un artefacto bundle. Un trabajo deploy dependiente empieza en otro runner. ¿Qué debe hacer deploy antes de leer los archivos?",
            "choices": [
                "Exportar el nombre del artefacto a GITHUB_ENV.",
                "Añadir el nombre del artefacto a needs.",
                "Descargar el artefacto a su propio espacio de trabajo.",
                "Leer la ruta absoluta del espacio de build."
            ],
            "explanations": [
                "Una variable de entorno no transfiere archivos.",
                "needs ordena trabajos, pero no descarga artefactos.",
                "La descarga crea los archivos en el nuevo runner.",
                "Los runners distintos no comparten ese sistema de archivos local."
            ],
            "concept": "Transferencia de archivos entre trabajos",
            "hints": [
                "El orden de dependencias y la transferencia son independientes.",
                "Los archivos deben existir en el sistema del consumidor."
            ]
        },
        "actions-084": {
            "prompt": "Un paso de caché con id: deps restaura una coincidencia exacta de la clave principal. ¿Qué cadena contiene steps.deps.outputs.cache-hit?",
            "choices": [
                "'true'",
                "'false'",
                "'exact'",
                "'restored'"
            ],
            "explanations": [
                "Una coincidencia exacta produce la cadena true.",
                "false no describe una coincidencia exacta de clave principal.",
                "exact no es el valor documentado de cache-hit.",
                "restored no es el valor documentado de cache-hit."
            ],
            "concept": "Salida de coincidencia exacta de caché",
            "hints": [
                "Las salidas de acciones se leen como cadenas.",
                "Distingue coincidencias exactas de restauraciones alternativas."
            ]
        },
        "actions-085": {
            "prompt": "Un mantenedor cambia archivos cacheados, pero reutiliza una clave existente. ¿Por qué la caché antigua no cambia?",
            "choices": [
                "Los archivos de caché se sincronizan continuamente al restaurarlos.",
                "Una entrada de caché existente no se actualiza directamente.",
                "Una clave de caché siempre apunta al espacio actual.",
                "Solo los artefactos pueden contener dependencias modificadas."
            ],
            "explanations": [
                "La restauración copia archivos sin sincronización continua.",
                "Crea una clave nueva para guardar una entrada distinta.",
                "Las claves identifican entradas almacenadas, no espacios activos.",
                "Las cachés pueden guardar dependencias cambiadas con otra clave."
            ],
            "concept": "Diagnóstico de sustitución de caché",
            "hints": [
                "Piensa en la clave como identificador de una instantánea.",
                "Cambiar archivos locales no modifica entradas remotas guardadas."
            ]
        },
        "actions-086": {
            "prompt": "¿Qué valor uses invoca verify.yml del repositorio acme/ci en la referencia stable?",
            "choices": [
                "acme/ci/.github/workflows/verify.yml@stable",
                "acme/ci@stable/.github/workflows/verify.yml",
                "acme/ci/.github/actions/verify.yml@stable",
                "https://github.com/acme/ci/verify.yml@stable"
            ],
            "explanations": [
                "Repositorio, ruta del flujo y referencia siguen la sintaxis de llamada.",
                "El sufijo de referencia va después de la ruta del archivo.",
                "Los flujos reutilizables no se guardan en el directorio actions.",
                "Una referencia uses de flujo no es una URL HTTPS."
            ],
            "concept": "Sintaxis de referencias reutilizables",
            "hints": [
                "Comprueba la estructura de la referencia antes de la ejecución.",
                "Una referencia remota identifica archivo y revisión."
            ]
        },
        "actions-087": {
            "prompt": "Una llamada a flujo reutilizable está incorrectamente en steps. ¿Qué ubicación del esquema debe contener su clave uses?",
            "choices": [
                "jobs.verify.uses",
                "jobs.verify.steps[0].uses",
                "on.workflow_call.uses",
                "defaults.run.uses"
            ],
            "explanations": [
                "Los flujos reutilizables se invocan directamente desde trabajos.",
                "Esta ubicación invoca una acción, no un flujo.",
                "La interfaz de eventos no contiene la clave uses del llamador.",
                "Los valores predeterminados de run no invocan componentes."
            ],
            "concept": "Errores de ubicación de llamadas",
            "hints": [
                "Una llamada de flujo introduce un límite de trabajo.",
                "Invocar acciones y flujos requiere anidamientos distintos."
            ]
        },
        "actions-088": {
            "prompt": "Un flujo define env: &shared {MODE: test, COLOR: blue}. Otro trabajo usa env: *shared. ¿Qué valor MODE recibe de ese mapa?",
            "choices": [
                "*shared",
                "blue",
                "test",
                "shared"
            ],
            "explanations": [
                "El alias se resuelve en lugar de pasarse como texto literal.",
                "blue pertenece a COLOR, no a MODE.",
                "El alias repite el mapa que contiene MODE: test.",
                "El nombre del ancla es una referencia YAML, no el valor."
            ],
            "concept": "Interpretación de alias YAML",
            "hints": [
                "Expande el mapa referenciado antes de leer cada clave.",
                "Las anclas YAML no renombran las variables que contienen."
            ]
        },
        "actions-089": {
            "prompt": "En un registro de trabajo expandido de GitHub, ¿qué acción genera una URL del navegador a una línea concreta?",
            "choices": [
                "Hacer clic en el número de esa línea.",
                "Hacer clic en el nombre del archivo del flujo.",
                "Copiar la URL de clonación del repositorio.",
                "Copiar la URL de la insignia de estado."
            ],
            "explanations": [
                "Seleccionar el número crea un enlace a esa línea.",
                "El archivo del flujo apunta a configuración, no a registros.",
                "Una URL de clonación obtiene código, no una línea de registro.",
                "Una insignia muestra estado, no texto exacto del registro."
            ],
            "concept": "Enlaces a líneas exactas de registros",
            "hints": [
                "Elige pruebas con la granularidad solicitada.",
                "Un enlace al resumen es más amplio que uno a una línea."
            ]
        },
        "actions-090": {
            "prompt": "CI se ejecuta en push y pull_request. Ahora se quiere solo validación de PR, sin ejecución por push de rama. ¿Qué declaración corresponde?",
            "choices": [
                "on: push",
                "on: [push, pull_request]",
                "on: workflow_run",
                "on: pull_request"
            ],
            "explanations": [
                "Conserva ejecuciones push y quita los eventos PR.",
                "Conserva el comportamiento original de dos eventos.",
                "Responde a otros flujos, no directamente a cambios de PR.",
                "Solo permanece habilitado el evento pull request."
            ],
            "concept": "Diagnóstico de disparadores duplicados",
            "hints": [
                "Enumera qué familias de eventos deben seguir habilitadas.",
                "Un cambio del repositorio puede generar varios eventos."
            ]
        },
        "actions-091": {
            "prompt": "Un disparador workflow_run usa types: [completed]. ¿Qué condición limita el procesamiento posterior a una ejecución previa correcta?",
            "choices": [
                "if: github.event.workflow_run.status == 'success'",
                "if: github.event.action == 'success'",
                "if: github.event.workflow_run.event == 'success'",
                "if: github.event.workflow_run.conclusion == 'success'"
            ],
            "explanations": [
                "status describe el ciclo de vida, no la conclusión de éxito.",
                "La acción del evento es completed, no success.",
                "event nombra el disparador anterior, no su resultado.",
                "conclusion describe cómo terminó la ejecución anterior."
            ],
            "concept": "Conclusiones de flujos anteriores",
            "hints": [
                "Terminar no implica una conclusión correcta.",
                "Examina la ejecución anterior, no los pasos de este trabajo."
            ]
        },
        "actions-092": {
            "prompt": "Con la depuración de pasos habilitada, ¿qué comando Bash emite un diagnóstico sin crear una anotación de error?",
            "choices": [
                "echo '::debug::Cache lookup started'",
                "echo '::error::Cache lookup started'",
                "echo '::warning::Cache lookup started'",
                "echo '::notice::Cache lookup started'"
            ],
            "explanations": [
                "debug emite un mensaje en el registro de depuración habilitado.",
                "error crea una anotación de error.",
                "warning crea una anotación de advertencia.",
                "notice crea una anotación informativa."
            ],
            "concept": "Emisión de mensajes de depuración",
            "hints": [
                "Elige el comando por categoría, no por el texto del mensaje.",
                "Las anotaciones y los diagnósticos opcionales son salidas distintas."
            ]
        },
        "actions-093": {
            "prompt": "La ejecución 731 fue disparada por el commit A. Ahora la rama apunta a B. Al reintentar 731, ¿qué identifica GITHUB_SHA?",
            "choices": [
                "El commit B de la punta actual de la rama",
                "El commit más nuevo de la rama predeterminada",
                "Un commit nuevo creado para el reintento",
                "El commit A del evento disparador original"
            ],
            "explanations": [
                "Mover la rama no cambia el SHA del evento de la ejecución.",
                "Reintentar no selecciona el último commit de la rama predeterminada.",
                "Un reintento no crea por sí solo un commit.",
                "Los reintentos conservan GITHUB_SHA del evento original."
            ],
            "concept": "Identidad del evento al reintentar",
            "hints": [
                "Separa reintentar un evento de despachar uno nuevo.",
                "La referencia de rama puede moverse mientras los metadatos permanecen fijos."
            ]
        },
        "actions-094": {
            "prompt": "La API de GitHub informa del ID de trabajo 9821 para una variante fallida. ¿Qué comando de GitHub CLI reintenta ese trabajo concreto?",
            "choices": [
                "gh run rerun 9821 --failed",
                "gh run view --job 9821 --log",
                "gh run watch 9821 --exit-status",
                "gh run rerun --job 9821"
            ],
            "explanations": [
                "Un número posicional se interpreta como ID de ejecución.",
                "view lee los registros del trabajo sin reintentarlo.",
                "watch espera un ID de ejecución y solo supervisa.",
                "La opción job selecciona el identificador de trabajo de la API."
            ],
            "concept": "Reintentos de trabajos individuales con CLI",
            "hints": [
                "Nombres visibles, IDs de trabajos e IDs de ejecución difieren.",
                "Elige el selector correspondiente al identificador disponible."
            ]
        },
        "actions-095": {
            "prompt": "Solo se repitió un trabajo en el intento 2. ¿Por qué su archivo de registros descargado puede omitir trabajos que solo se ejecutaron en el intento 1?",
            "choices": [
                "Descargar registros convierte trabajos correctos en artefactos.",
                "El YAML original oculta todos los trabajos correctos.",
                "El archivo contiene los trabajos repetidos en ese intento.",
                "Los trabajos correctos nunca generan registros descargables."
            ],
            "explanations": [
                "Descargar registros no transforma trabajos en artefactos.",
                "La selección de intento, no el YAML, explica la omisión.",
                "Usa registros del intento anterior para trabajos no repetidos.",
                "Los trabajos correctos también tienen registros descargables."
            ],
            "concept": "Cobertura de registros de reintentos",
            "hints": [
                "Relaciona cada archivo de registros con su intento de ejecución.",
                "Los reintentos selectivos no repiten todos los trabajos originales."
            ]
        },
        "actions-096": {
            "prompt": "En un repositorio privado, ¿cuál es el rol estándar mínimo necesario para ver registros de ejecuciones? Los nombres de roles se muestran en inglés.",
            "choices": [
                "Write",
                "Maintain",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Write incluye más acceso del necesario para ver registros.",
                "Maintain no es el acceso mínimo necesario aquí.",
                "No se necesita Admin solo para inspeccionar registros.",
                "El acceso Read basta para ver estos registros."
            ],
            "concept": "Acceso a registros del repositorio",
            "hints": [
                "Distingue ver pruebas de cambiar la ejecución del flujo.",
                "Selecciona el rol de repositorio mínimo suficiente."
            ]
        },
        "actions-097": {
            "prompt": "¿Qué marcador de una plantilla se resuelve como la rama predeterminada del repositorio consumidor al crear el flujo?",
            "choices": [
                "${{ inputs.default-branch }}",
                "$default-branch",
                "${{ github.default_branch }}",
                "$GITHUB_DEFAULT_BRANCH"
            ],
            "explanations": [
                "Una expresión de entrada no sustituye marcadores de plantillas.",
                "Este es el marcador documentado para plantillas de flujos.",
                "No es el símbolo de sustitución de plantillas.",
                "No es una variable predeterminada del runner para crear plantillas."
            ],
            "concept": "Marcadores de rama en plantillas",
            "hints": [
                "La expansión de plantillas ocurre antes de ejecutar el flujo.",
                "No confundas marcadores de creación con expresiones en ejecución."
            ]
        },
        "actions-098": {
            "prompt": "En una matriz de dos SO, runtime 20 pasa en ambos y runtime 22 falla en ambos. ¿Qué primera comparación aísla mejor el patrón observado?",
            "choices": [
                "Comparar tamaños de artefactos de los dos trabajos runtime 22.",
                "Comparar registros de runtime 20 y 22 en el mismo SO.",
                "Comparar solo los dos trabajos correctos de runtime 20.",
                "Comparar tiempos en cola de los cuatro trabajos."
            ],
            "explanations": [
                "Ambos fallan con el mismo runtime; falta comparar un caso correcto.",
                "Mantener fijo el SO aísla la dimensión de runtime.",
                "Solo los trabajos correctos omiten las pruebas del fallo.",
                "Los tiempos en cola no aíslan los comandos fallidos del runtime."
            ],
            "concept": "Correlación de pruebas de matriz",
            "hints": [
                "Mantén una variable constante mientras cambias otra.",
                "Usa el patrón como hipótesis, no como prueba de causalidad."
            ]
        },
        "actions-099": {
            "prompt": "¿Qué tipo de acción personalizada ejecuta su archivo de entrada con un entorno Node.js seleccionado en los metadatos?",
            "choices": [
                "Acción de contenedor Docker",
                "Acción compuesta",
                "Acción JavaScript",
                "Flujo reutilizable"
            ],
            "explanations": [
                "Una acción de contenedor inicia una imagen, no un archivo Node.js ejecutado por el runner.",
                "Una acción compuesta combina pasos en vez de declarar un archivo de entrada JavaScript.",
                "Los metadatos de una acción JavaScript seleccionan el entorno y el script de entrada.",
                "Un flujo reutilizable define trabajos y no es uno de los tres tipos de acción personalizada."
            ],
            "concept": "Ejecución de acciones JavaScript",
            "hints": [
                "Compara la implementación de una acción con la orquestación de un flujo.",
                "Considera qué componente inicia el archivo de entrada."
            ]
        },
        "actions-100": {
            "prompt": "¿Qué tipo de acción empaqueta un comando junto con sus bibliotecas de sistema Linux en una imagen?",
            "choices": [
                "Acción de contenedor Docker",
                "Acción JavaScript",
                "Acción compuesta",
                "Flujo reutilizable"
            ],
            "explanations": [
                "La imagen contiene el comando y sus dependencias de sistema.",
                "Los metadatos de una acción JavaScript no empaquetan un sistema de archivos Linux.",
                "Los pasos compuestos reutilizan el entorno del runner en lugar de empaquetar una imagen.",
                "Un flujo reutilizable puede invocar contenedores, pero no es una acción basada en imagen."
            ],
            "concept": "Empaquetado de acciones de contenedor",
            "hints": [
                "Distingue el empaquetado del entorno de la reutilización de pasos.",
                "¿De dónde vendrán las bibliotecas compartidas necesarias?"
            ]
        },
        "actions-101": {
            "prompt": "¿Qué tipo de acción personalizada declara una secuencia de pasos run y uses en sus metadatos?",
            "choices": [
                "Acción JavaScript",
                "Acción de contenedor Docker",
                "Flujo reutilizable",
                "Acción compuesta"
            ],
            "explanations": [
                "Los metadatos JavaScript apuntan a un script, no a una secuencia de pasos.",
                "Los metadatos de contenedor describen una imagen y su invocación.",
                "Los flujos reutilizables incluyen pasos dentro de trabajos en un archivo de flujo, no en metadatos de acción.",
                "Los metadatos de una acción compuesta contienen directamente los pasos que se ejecutan."
            ],
            "concept": "Encapsulación de pasos compuestos",
            "hints": [
                "Identifica el archivo descrito antes de elegir una abstracción.",
                "Distingue una definición de trabajo de una implementación de acción."
            ]
        },
        "actions-102": {
            "prompt": "¿Qué nombre de archivo es válido para los metadatos de una acción personalizada?",
            "choices": [
                "actions.yml",
                "action.yaml",
                "workflow.yaml",
                "metadata.yml"
            ],
            "explanations": [
                "El plural actions.yml no es un nombre de metadatos de acción.",
                "Se admite action.yaml; la otra forma admitida es action.yml.",
                "Un nombre de archivo de flujo no identifica metadatos de acción.",
                "GitHub no detecta metadatos de acción con el nombre metadata.yml."
            ],
            "concept": "Detección de metadatos de acción",
            "hints": [
                "El runner usa un nombre definido, no cualquier nombre YAML.",
                "Comprueba tanto el nombre base como la extensión."
            ]
        },
        "actions-103": {
            "prompt": "¿Qué conjunto contiene únicamente claves obligatorias de primer nivel de los metadatos de acción?",
            "choices": [
                "name, author, branding",
                "name, description, runs",
                "description, inputs, outputs",
                "author, inputs, runs"
            ],
            "explanations": [
                "author y branding son metadatos opcionales.",
                "Estas claves identifican la acción, la describen y especifican su ejecución.",
                "inputs y outputs son opcionales incluso en acciones útiles.",
                "author e inputs son opcionales; además, faltan claves obligatorias en este conjunto."
            ],
            "concept": "Metadatos obligatorios de acción",
            "hints": [
                "Distingue la identificación y ejecución de la presentación opcional.",
                "Una acción no necesita aceptar parámetros ni devolver valores."
            ]
        },
        "actions-104": {
            "prompt": "En los metadatos de una acción JavaScript, ¿qué clave identifica el script ejecutado en la invocación principal?",
            "choices": [
                "runs.image",
                "runs.entrypoint",
                "runs.steps",
                "runs.main"
            ],
            "explanations": [
                "runs.image configura la imagen de una acción Docker.",
                "runs.entrypoint configura la entrada de un contenedor, no un script JavaScript.",
                "runs.steps contiene pasos compuestos, no un archivo de entrada JavaScript.",
                "runs.main indica el archivo de entrada JavaScript relativo al directorio de la acción."
            ],
            "concept": "Archivo de entrada JavaScript",
            "hints": [
                "Relaciona las claves de metadatos con su tipo de acción.",
                "El selector de entorno y la ruta del script son ajustes distintos."
            ]
        },
        "actions-105": {
            "prompt": "¿Qué ajuste de metadatos selecciona el entorno de ejecución de una acción?",
            "choices": [
                "runs.using",
                "runs.main",
                "runs.env",
                "runs.args"
            ],
            "explanations": [
                "runs.using selecciona el entorno JavaScript o el tipo de ejecución docker/composite.",
                "runs.main selecciona un script JavaScript, no su entorno.",
                "runs.env define variables de entorno del contenedor.",
                "runs.args proporciona argumentos al contenedor en lugar de elegir el entorno."
            ],
            "concept": "Selección del entorno de acción",
            "hints": [
                "Distingue cómo se ejecuta el código de qué archivo se ejecuta.",
                "Los tres tipos de acción tienen esquemas de ejecución distintos."
            ]
        },
        "actions-106": {
            "prompt": "Una acción JavaScript se invoca mediante una ruta local ./. ¿Qué función de ciclo de vida no se admite en esa invocación local?",
            "choices": [
                "runs.main",
                "runs.post",
                "runs.pre",
                "runs.post-if"
            ],
            "explanations": [
                "Las acciones JavaScript locales siguen necesitando un archivo de entrada principal.",
                "La restricción para acciones locales afecta a pre, no a la limpieza post.",
                "La referencia de metadatos excluye explícitamente runs.pre para acciones locales.",
                "post-if controla el enlace post y no es la restricción local documentada para pre."
            ],
            "concept": "Limitación del ciclo de vida de acciones locales",
            "hints": [
                "Las acciones locales y las descargadas pueden diferir durante la preparación del trabajo.",
                "Comprueba la compatibilidad del ciclo de vida sin suponer que todos los enlaces están disponibles."
            ]
        },
        "actions-107": {
            "prompt": "¿Qué clave de metadatos de una acción JavaScript programa un script de limpieza al final del trabajo?",
            "choices": [
                "runs.pre",
                "runs.main",
                "runs.args",
                "runs.post"
            ],
            "explanations": [
                "runs.pre se ejecuta antes de la acción principal, no al finalizar el trabajo.",
                "runs.main es la entrada normal de la acción durante el paso.",
                "runs.args configura argumentos del contenedor, no la limpieza JavaScript.",
                "runs.post registra el archivo JavaScript de limpieza para el final del trabajo."
            ],
            "concept": "Registro de limpieza de acción",
            "hints": [
                "Distingue la ejecución de un paso de la fase final del trabajo.",
                "Considera el orden del ciclo de vida, no el nombre del script."
            ]
        },
        "actions-108": {
            "prompt": "Si no se define runs.post-if, ¿qué condición usa el enlace runs.post de una acción JavaScript?",
            "choices": [
                "success()",
                "failure()",
                "always()",
                "cancelled()"
            ],
            "explanations": [
                "success() restringiría la limpieza al estado satisfactorio del trabajo.",
                "failure() seleccionaría únicamente el estado de error del trabajo.",
                "La condición predeterminada de post es always(), no una limpieza solo tras éxito.",
                "cancelled() comprueba la cancelación, no es la condición predeterminada."
            ],
            "concept": "Condición predeterminada del enlace post",
            "hints": [
                "La limpieza puede ser necesaria incluso tras un trabajo fallido.",
                "No deduzcas los valores predeterminados de los enlaces a partir de los pasos normales."
            ]
        },
        "actions-109": {
            "prompt": "Una entrada region de una acción tiene default: west. El llamador omite region. ¿Qué valor recibe la entrada?",
            "choices": [
                "region",
                "west",
                "undefined",
                "null"
            ],
            "explanations": [
                "El identificador de entrada no se sustituye como su propio valor.",
                "Se usa el valor predeterminado cuando el llamador no especifica el parámetro.",
                "El valor predeterminado configurado evita un valor sin especificar en este ejemplo.",
                "La omisión no reemplaza un valor de cadena predeterminado por null."
            ],
            "concept": "Valores predeterminados de entradas de acción",
            "hints": [
                "Distingue el identificador de un parámetro de su valor.",
                "Piensa qué metadatos se aplican si el llamador no proporciona nada."
            ]
        },
        "actions-110": {
            "prompt": "¿required: true en los metadatos de entrada de una acción personalizada rechaza por sí solo una entrada omitida?",
            "choices": [
                "No; la validación debe implementarse en la acción.",
                "Sí; el runner rechaza el flujo antes de iniciar los trabajos.",
                "Sí; el runner omite esa acción sin generar un error.",
                "No; el runner siempre sustituye el nombre de la entrada."
            ],
            "explanations": [
                "La marca describe el requisito, pero no lo aplica automáticamente.",
                "La marca de metadatos por sí sola no proporciona esta validación del flujo.",
                "Esta marca no provoca una omisión automática.",
                "Los nombres de entrada no se convierten automáticamente en valores alternativos."
            ],
            "concept": "Responsabilidad de validación de entradas personalizadas",
            "hints": [
                "Una declaración y la validación en ejecución son mecanismos diferentes.",
                "No traslades las reglas de workflow_dispatch a los metadatos de acción."
            ]
        },
        "actions-111": {
            "prompt": "¿Qué llamada de @actions/core lanza un error si la entrada target de una acción personalizada está vacía?",
            "choices": [
                "core.getInput('target', { required: true })",
                "core.getInput('target', { required: false })",
                "core.getInput('target', { trimWhitespace: true })",
                "core.getInput('target', { trimWhitespace: false })"
            ],
            "explanations": [
                "La opción required de getInput realiza la comprobación de entrada en ejecución.",
                "Sin la opción required, getInput puede devolver una cadena vacía.",
                "Recortar espacios no exige que la entrada resultante tenga contenido.",
                "Desactivar el recorte conserva espacios, pero no exige un valor de entrada."
            ],
            "concept": "Comprobación de entrada obligatoria con toolkit",
            "hints": [
                "Normalizar texto y validar la presencia resuelven problemas distintos.",
                "Compara las opciones pasadas a la función."
            ]
        },
        "actions-112": {
            "prompt": "Para una entrada target de una acción JavaScript, ¿qué variable de entorno contiene su valor?",
            "choices": [
                "ACTION_TARGET",
                "GITHUB_TARGET",
                "INPUT_TARGET",
                "STATE_TARGET"
            ],
            "explanations": [
                "ACTION_ no es el prefijo de variables de entorno de entradas de metadatos.",
                "GITHUB_ identifica variables de la plataforma, no esta asignación de entrada personalizada.",
                "Las variables de entorno de entrada usan INPUT_ y el nombre de entrada en mayúsculas.",
                "STATE_ se usa para estado guardado del ciclo de vida, no para entradas."
            ],
            "concept": "Asignación de entradas JavaScript al entorno",
            "hints": [
                "Distingue los datos de entrada del estado guardado del ciclo de vida.",
                "Considera la transformación de nombre aplicada al identificador de entrada."
            ]
        },
        "actions-113": {
            "prompt": "Una acción compuesta declara una entrada format. ¿Qué expresión la lee dentro de la acción?",
            "choices": [
                "${{ env.INPUT_FORMAT }}",
                "${{ inputs.format }}",
                "${{ steps.format.outputs.value }}",
                "${{ github.format }}"
            ],
            "explanations": [
                "Las entradas compuestas no crean automáticamente variables de entorno INPUT_.",
                "El contexto inputs expone directamente las entradas de acciones compuestas.",
                "Esto hace referencia a una salida de paso, no a la entrada declarada.",
                "El contexto github no contiene propiedades de entradas personalizadas de acción."
            ],
            "concept": "Contexto de entradas compuestas",
            "hints": [
                "Las acciones compuestas no heredan todas las convenciones de entrada JavaScript.",
                "Identifica quién proporcionó el valor: el llamador, un paso o GitHub."
            ]
        },
        "actions-114": {
            "prompt": "¿Qué asignación de salida compuesta expone la salida digest de un paso interno con id: pack?",
            "choices": [
                "value: ${{ inputs.digest }}",
                "value: ${{ github.digest }}",
                "value: ${{ env.pack.outputs.digest }}",
                "value: ${{ steps.pack.outputs.digest }}"
            ],
            "explanations": [
                "inputs.digest leería una entrada, no la salida del paso pack.",
                "github.digest no es la ubicación de las salidas de pasos internos.",
                "El contexto env no proporciona objetos anidados de salidas de pasos.",
                "El valor de una salida compuesta puede apuntar a la salida de un paso interno identificado."
            ],
            "concept": "Asignación del valor de salida compuesta",
            "hints": [
                "Sigue el valor desde el paso que lo produce hasta el límite de la acción.",
                "Una salida de acción necesita un valor, no solo documentación."
            ]
        },
        "actions-115": {
            "prompt": "Dentro de una acción compuesta, ¿qué valor identifica el directorio que contiene sus propios scripts?",
            "choices": [
                "${{ github.workspace }}",
                "${{ runner.temp }}",
                "${{ github.action_path }}",
                "${{ github.workflow_ref }}"
            ],
            "explanations": [
                "github.workspace apunta al espacio del llamador, no necesariamente al directorio de la acción.",
                "runner.temp es almacenamiento temporal del trabajo, no la ubicación de la acción.",
                "github.action_path apunta al directorio de la acción compuesta.",
                "github.workflow_ref identifica la referencia del flujo, no un directorio de scripts."
            ],
            "concept": "Archivos relativos a la acción compuesta",
            "hints": [
                "El repositorio llamador y el de la acción pueden ser distintos.",
                "Elige un valor de directorio, no un identificador de flujo."
            ]
        },
        "actions-116": {
            "prompt": "Un paso de acción compuesta contiene run: ./check.sh. ¿Qué clave de paso debe especificarse también?",
            "choices": [
                "shell",
                "uses",
                "with",
                "timeout-minutes"
            ],
            "explanations": [
                "Un paso run compuesto debe declarar explícitamente su shell.",
                "uses selecciona otra acción y no acompaña a run en el mismo paso.",
                "with proporciona entradas a un paso uses, no el shell de ejecución.",
                "Un tiempo límite no identifica el intérprete ni es este requisito."
            ],
            "concept": "Shell de pasos run compuestos",
            "hints": [
                "No supongas que los valores predeterminados de run en flujos se aplican a metadatos de acción.",
                "Un comando necesita un intérprete además de una ruta."
            ]
        },
        "actions-117": {
            "prompt": "¿Qué clave de un paso run compuesto hace que un comando se ejecute desde el directorio tools?",
            "choices": [
                "shell: tools",
                "id: tools",
                "name: tools",
                "working-directory: tools"
            ],
            "explanations": [
                "shell selecciona un intérprete, no un directorio de trabajo.",
                "id identifica el paso para referencias y no cambia directorios.",
                "name cambia la etiqueta del paso, no la ubicación de ejecución.",
                "working-directory establece el directorio actual del comando."
            ],
            "concept": "Directorio de trabajo de comandos compuestos",
            "hints": [
                "Distingue los metadatos de presentación de los ajustes de ejecución.",
                "Las rutas relativas dependen del directorio actual del comando."
            ]
        },
        "actions-118": {
            "prompt": "¿Cómo invoca una acción compuesta otra acción en uno de sus pasos internos?",
            "choices": [
                "Añadir una clave uses en outputs.",
                "Añadir un paso uses en runs.steps.",
                "Establecer runs.main con la referencia de acción.",
                "Establecer runs.image con la referencia de acción."
            ],
            "explanations": [
                "outputs describe valores devueltos y no ejecuta pasos.",
                "Las definiciones de pasos compuestos admiten uses para invocar acciones.",
                "runs.main pertenece a la ejecución de acciones JavaScript.",
                "runs.image pertenece a la ejecución de acciones de contenedor."
            ],
            "concept": "Pasos de acciones anidadas",
            "hints": [
                "Busca la parte del esquema que contiene el trabajo ejecutable.",
                "Invocar una acción no es lo mismo que iniciar un archivo de script."
            ]
        },
        "actions-119": {
            "prompt": "¿Qué par propiedad/valor de metadatos de una acción Docker selecciona un Dockerfile junto a action.yml para definir la construcción de la imagen?",
            "choices": [
                "runs.main: Dockerfile",
                "runs.image: Dockerfile",
                "runs.using: Dockerfile",
                "runs.entrypoint: Dockerfile"
            ],
            "explanations": [
                "runs.main es un ajuste de archivo de entrada JavaScript.",
                "runs.image acepta una ruta de Dockerfile relativa al archivo de metadatos.",
                "runs.using debe ser docker en una acción de contenedor Docker.",
                "runs.entrypoint selecciona un ejecutable, no una definición de construcción de imagen."
            ],
            "concept": "Definición de imagen de acción Docker",
            "hints": [
                "Distingue construir la imagen de iniciar su ejecutable.",
                "Un Dockerfile es una entrada de construcción, no un script JavaScript."
            ]
        },
        "actions-120": {
            "prompt": "Una acción Docker lee su primer argumento posicional. ¿Qué par propiedad/valor de metadatos le pasa la entrada greeting?",
            "choices": [
                "runs.env: {GREETING: '${{ inputs.greeting }}'}",
                "runs.entrypoint: '${{ inputs.greeting }}'",
                "runs.image: '${{ inputs.greeting }}'",
                "runs.args: ['${{ inputs.greeting }}']"
            ],
            "explanations": [
                "runs.env proporciona una variable de entorno, no un argumento posicional.",
                "entrypoint identifica el ejecutable, no un valor de argumento.",
                "image identifica la imagen de contenedor, no los argumentos del comando.",
                "runs.args proporciona argumentos al punto de entrada del contenedor."
            ],
            "concept": "Argumentos de entrada de acciones Docker",
            "hints": [
                "Una variable de entorno y un argumento posicional son interfaces distintas.",
                "Identifica cómo espera recibir el valor el ejecutable."
            ]
        },
        "actions-121": {
            "prompt": "¿Qué clave de metadatos de una acción Docker reemplaza el ENTRYPOINT del Dockerfile de la imagen?",
            "choices": [
                "runs.entrypoint",
                "runs.args",
                "runs.image",
                "runs.env"
            ],
            "explanations": [
                "runs.entrypoint reemplaza o proporciona el punto de entrada del contenedor.",
                "runs.args cambia los argumentos, no el ejecutable de entrada.",
                "runs.image selecciona la imagen o su definición de construcción.",
                "runs.env establece variables de entorno, no un ejecutable."
            ],
            "concept": "Reemplazo del punto de entrada Docker",
            "hints": [
                "Distingue el programa que se inicia de sus argumentos.",
                "La imagen puede tener ya definido su comportamiento de inicio."
            ]
        },
        "actions-122": {
            "prompt": "¿Qué par propiedad/valor de metadatos de una acción Docker define MODE=verify en el entorno del contenedor?",
            "choices": [
                "runs.args: [MODE, verify]",
                "inputs: {MODE: {default: verify}}",
                "runs.env: {MODE: verify}",
                "outputs: {MODE: {description: verify}}"
            ],
            "explanations": [
                "Una lista de argumentos no crea una variable de entorno.",
                "Un valor predeterminado de entrada no define por sí solo la variable sin prefijo MODE.",
                "runs.env añade explícitamente variables al entorno del contenedor.",
                "Los metadatos de salida describen un valor devuelto y no configuran el entorno."
            ],
            "concept": "Metadatos de entorno del contenedor",
            "hints": [
                "Los nombres de variable forman parte de la interfaz del ejecutable.",
                "Entradas, salidas, argumentos y variables de entorno no son intercambiables."
            ]
        },
        "actions-123": {
            "prompt": "¿Qué configuración de runner autohospedado admite acciones de contenedor Docker?",
            "choices": [
                "Windows con Docker instalado",
                "macOS con Docker instalado",
                "Linux solo con un entorno Node.js",
                "Linux con Docker instalado"
            ],
            "explanations": [
                "Instalar Docker no hace que los runners Windows admitan acciones de contenedor.",
                "Instalar Docker no hace que los runners macOS admitan acciones de contenedor.",
                "Node.js no reemplaza el motor de contenedores necesario.",
                "Las acciones de contenedor requieren un runner Linux y Docker en una máquina autohospedada."
            ],
            "concept": "Requisitos del host de acciones de contenedor",
            "hints": [
                "Comprueba la plataforma admitida además del software instalado.",
                "Una configuración local de contenedores de escritorio no determina la compatibilidad del runner."
            ]
        },
        "actions-124": {
            "prompt": "¿En qué ruta del contenedor monta GitHub el espacio de trabajo del runner para una acción Docker?",
            "choices": [
                "/github/action",
                "/github/home",
                "/github/workspace",
                "/github/workflow"
            ],
            "explanations": [
                "/github/action no es la ruta documentada de montaje del espacio de trabajo.",
                "/github/home sirve como directorio personal del contenedor, no como espacio de trabajo.",
                "El montaje del espacio de trabajo permite compartir archivos del llamador y generados entre pasos.",
                "/github/workflow no es el montaje del espacio de trabajo del repositorio."
            ],
            "concept": "Montaje del espacio de trabajo Docker",
            "hints": [
                "El checkout del llamador debe ser visible dentro del contenedor.",
                "Distingue los archivos del repositorio del directorio personal del contenedor."
            ]
        },
        "actions-125": {
            "prompt": "Un Dockerfile coloca archivos auxiliares en /github/workspace al construir la imagen. ¿Por qué pueden desaparecer al iniciar la acción?",
            "choices": [
                "Los metadatos de acción eliminan todos los archivos de la imagen.",
                "El montaje del espacio de trabajo oculta los archivos de imagen en esa ruta.",
                "Docker ignora todas las instrucciones COPY en imágenes de acciones.",
                "El contenedor usa en su lugar el sistema de archivos raíz del runner."
            ],
            "explanations": [
                "Los metadatos no borran el sistema de archivos de la imagen.",
                "GitHub monta el espacio de trabajo sobre ese directorio de imagen; guarda los auxiliares en otra ruta.",
                "COPY funciona; el montaje en ejecución oculta los archivos en ese destino específico.",
                "El contenedor conserva el sistema de archivos de su imagen fuera de las rutas montadas."
            ],
            "concept": "Archivos de imagen frente a montajes en ejecución",
            "hints": [
                "Compara el contenido durante la construcción con la vista del sistema de archivos en ejecución.",
                "Distingue los archivos distribuidos con la acción de los proporcionados por el llamador."
            ]
        },
        "actions-126": {
            "prompt": "Antes de uses: ./.github/actions/lint, ¿qué suele poner los archivos de la acción a disposición en el espacio de trabajo?",
            "choices": [
                "Obtener el repositorio en un paso anterior.",
                "Asignar al paso el nombre del repositorio.",
                "Añadir una salida llamada github.workspace.",
                "Añadir la ruta local como etiqueta del runner."
            ],
            "explanations": [
                "Una referencia de acción ./ resuelve archivos ya presentes en el espacio de trabajo.",
                "Un nombre mostrado no descarga archivos del repositorio.",
                "Una declaración de salida no llena el espacio de trabajo.",
                "Las etiquetas de runner encaminan trabajos, no proporcionan archivos de acciones locales."
            ],
            "concept": "Disponibilidad de archivos de acciones locales",
            "hints": [
                "Una referencia relativa busca en el sistema de archivos, no descarga un repositorio.",
                "Considera qué existe antes del primer checkout del trabajo."
            ]
        },
        "actions-127": {
            "prompt": "¿Qué llamada de @actions/core publica una salida archive de una acción JavaScript?",
            "choices": [
                "core.setOutput('archive', path)",
                "core.exportVariable('archive', path)",
                "core.saveState('archive', path)",
                "core.info(path)"
            ],
            "explanations": [
                "setOutput publica una salida con nombre que pueden consultar los pasos posteriores.",
                "exportVariable define una variable de entorno para pasos posteriores.",
                "saveState guarda datos del ciclo de vida, no una salida para el llamador.",
                "info imprime un mensaje de registro sin crear una salida."
            ],
            "concept": "Publicación de salidas con toolkit",
            "hints": [
                "Registros, salidas, entorno y estado del ciclo de vida tienen distintos consumidores.",
                "El siguiente paso necesita un valor estructurado con nombre, no solo texto visible."
            ]
        },
        "actions-128": {
            "prompt": "¿Qué paquete del toolkit ejecuta un programa externo desde una acción JavaScript?",
            "choices": [
                "@actions/core",
                "@actions/github",
                "@actions/exec",
                "@actions/artifact"
            ],
            "explanations": [
                "@actions/core proporciona entradas, salidas, registros y funciones relacionadas del runner.",
                "@actions/github proporciona funciones para la API de GitHub y el contexto del evento.",
                "@actions/exec proporciona funciones para ejecutar procesos.",
                "@actions/artifact gestiona artefactos de flujo, no procesos generales."
            ],
            "concept": "Ejecución de procesos con toolkit",
            "hints": [
                "Relaciona el paquete con el recurso externo que se usa.",
                "Iniciar un comando no es lo mismo que llamar a una API web."
            ]
        },
        "actions-129": {
            "prompt": "¿Qué paquete del toolkit proporciona un cliente Octokit autenticado y el contexto del evento de GitHub a una acción JavaScript?",
            "choices": [
                "@actions/exec",
                "@actions/github",
                "@actions/io",
                "@actions/cache"
            ],
            "explanations": [
                "@actions/exec inicia comandos externos en vez de proporcionar Octokit.",
                "@actions/github expone getOctokit y context para integrar la API de GitHub.",
                "@actions/io proporciona operaciones de archivos, no el cliente de API de GitHub.",
                "@actions/cache gestiona cachés de dependencias, no el contexto de la API del evento."
            ],
            "concept": "Integración de la API de GitHub con toolkit",
            "hints": [
                "Distingue los clientes de servicio de las utilidades de comandos y archivos.",
                "La carga del evento puede indicar qué recurso del repositorio consultar."
            ]
        },
        "actions-130": {
            "prompt": "¿Qué distingue actions/github-script de escribir y empaquetar una acción JavaScript personalizada?",
            "choices": [
                "Convierte JavaScript en capas Docker antes de cada invocación.",
                "Hace que Python sea obligatorio para las solicitudes a la API de GitHub.",
                "Define un cuarto tipo de acción de metadatos llamado github-script.",
                "Ejecuta el JavaScript proporcionado con objetos de cliente/contexto de GitHub ya disponibles."
            ],
            "explanations": [
                "github-script no empaqueta el script como una imagen Docker.",
                "El script proporcionado es JavaScript; no se requiere Python.",
                "Los tipos de acción personalizada siguen siendo JavaScript, contenedor Docker y compuesta.",
                "github-script es una acción publicada con objetos disponibles, no un lenguaje nuevo."
            ],
            "concept": "github-script frente al empaquetado de acciones personalizadas",
            "hints": [
                "Una acción publicada de conveniencia no es un nuevo tipo de entorno de metadatos.",
                "Compara los objetos disponibles para el script con el lenguaje que utiliza."
            ]
        },
        "actions-131": {
            "prompt": "¿Qué llamada de @actions/core informa de un error y marca una acción JavaScript como fallida?",
            "choices": [
                "core.error('Invalid manifest')",
                "core.warning('Invalid manifest')",
                "core.setFailed('Invalid manifest')",
                "core.notice('Invalid manifest')"
            ],
            "explanations": [
                "error crea una anotación de error, pero no establece por sí solo el estado de salida.",
                "warning crea una anotación de advertencia sin hacer fallar la acción.",
                "setFailed registra el error y establece un estado de salida de fallo.",
                "notice crea una anotación informativa sin hacer fallar la acción."
            ],
            "concept": "Estado de fallo frente a anotaciones",
            "hints": [
                "La gravedad de una anotación y el estado de salida del proceso son distintos.",
                "El llamador necesita un resultado fallido, no solo un mensaje rojo."
            ]
        },
        "actions-132": {
            "prompt": "¿Qué texto en stdout crea una anotación de advertencia para la línea 8 de config.json?",
            "choices": [
                "::warning file=config.json,line=8::Check value",
                "::error file=config.json,line=8::Check value",
                "::notice file=config.json,line=8::Check value",
                "::debug::config.json:8 Check value"
            ],
            "explanations": [
                "El comando warning admite propiedades file y line en la anotación.",
                "error crea una anotación de error en vez de una advertencia.",
                "notice crea una anotación informativa en vez de una advertencia.",
                "debug emite texto de depuración, no esta advertencia vinculada a un archivo."
            ],
            "concept": "Anotaciones de flujo vinculadas a archivos",
            "hints": [
                "Compara por separado la gravedad y los campos de ubicación.",
                "Un nombre de archivo impreso como texto normal no es necesariamente metadato de anotación."
            ]
        },
        "actions-133": {
            "prompt": "¿Qué archivo de entorno permite que una acción guarde un ID de recurso para su propia limpieza post posterior?",
            "choices": [
                "GITHUB_OUTPUT",
                "GITHUB_PATH",
                "GITHUB_STEP_SUMMARY",
                "GITHUB_STATE"
            ],
            "explanations": [
                "GITHUB_OUTPUT publica salidas de paso en vez de estado privado del ciclo de vida.",
                "GITHUB_PATH añade directorios a la ruta de búsqueda de ejecutables.",
                "GITHUB_STEP_SUMMARY crea resúmenes Markdown, no estado del ciclo de vida.",
                "GITHUB_STATE proporciona estado a los scripts del ciclo de vida de la misma acción."
            ],
            "concept": "Transferencia de estado del ciclo de vida de acción",
            "hints": [
                "Identifica el consumidor: la limpieza de la misma acción o el siguiente paso del llamador.",
                "No todos los archivos de entorno tienen la semántica de salida para todo el trabajo."
            ]
        },
        "actions-134": {
            "prompt": "El archivo de entrada de una acción JavaScript importa paquetes npm. ¿Qué debe proporcionar el repositorio publicado a los llamadores?",
            "choices": [
                "Solo package.json y el archivo fuente de entrada",
                "Código ejecutable con sus dependencias empaquetadas o incluidas",
                "Solo package-lock.json y una descripción del lanzamiento",
                "Solo claves de caché npm y una insignia de flujo"
            ],
            "explanations": [
                "Un manifiesto enumera dependencias, pero no pone sus módulos a disposición.",
                "El runner ejecuta la acción; no instala automáticamente sus dependencias npm.",
                "Un archivo de bloqueo describe versiones y no contiene código ejecutable de dependencias.",
                "Las claves de caché y las insignias no proporcionan módulos importados."
            ],
            "concept": "Dependencias JavaScript distribuibles",
            "hints": [
                "Distingue un manifiesto de dependencias del código ejecutable instalado.",
                "Prueba los archivos publicados con un llamador limpio, no solo en el checkout del autor."
            ]
        },
        "actions-135": {
            "prompt": "¿Dónde deben estar los metadatos de la acción anunciada para publicarla en GitHub Marketplace?",
            "choices": [
                "En cualquier subcarpeta de un repositorio privado",
                "En la raíz de un repositorio público",
                "En el directorio .github/workflows del llamador",
                "En el valor guardado de un secreto de organización"
            ],
            "explanations": [
                "Los repositorios privados no pueden anunciarse en Marketplace; las acciones de subcarpetas no se anuncian automáticamente.",
                "Marketplace anuncia la acción representada por los metadatos de la raíz del repositorio público.",
                "Ese directorio guarda definiciones de flujo del llamador, no los metadatos raíz de la acción publicada.",
                "Un secreto almacena un valor y no es un repositorio de acción detectable."
            ],
            "concept": "Estructura de acciones para Marketplace",
            "hints": [
                "Distingue la distribución privada de la visibilidad pública.",
                "La estructura del repositorio afecta a qué acción se anuncia."
            ]
        },
        "actions-136": {
            "prompt": "¿Qué requisito de cuenta puede dejar deshabilitada la casilla de publicación en Marketplace de un lanzamiento?",
            "choices": [
                "El propietario no ha obtenido una insignia de creador verificado.",
                "El propietario no ha comprado una suscripción Enterprise Cloud.",
                "El propietario no ha añadido una insignia de flujo satisfactorio.",
                "El propietario no ha aceptado el Marketplace Developer Agreement."
            ],
            "explanations": [
                "Una insignia de creador verificado no es obligatoria para publicar una acción.",
                "Publicar acciones en Marketplace no requiere una suscripción Enterprise Cloud.",
                "Una insignia de estado puede ayudar a documentar, pero no habilita la casilla de publicación.",
                "La cuenta propietaria debe aceptar el acuerdo para poder publicar en Marketplace."
            ],
            "concept": "Acuerdo del publicador de Marketplace",
            "hints": [
                "Los permisos de publicación y la capacidad de ejecución son asuntos distintos.",
                "Busca un requisito de la cuenta propietaria del repositorio."
            ]
        },
        "actions-137": {
            "prompt": "Una acción elimina una entrada documentada y obliga a modificar los flujos llamadores. ¿Qué cambio de versión semántica corresponde?",
            "choices": [
                "v2.6.1 to v3.0.0",
                "v2.6.1 to v2.6.2",
                "v2.6.1 to v2.7.0",
                "v2.6.1 to v2.6.1"
            ],
            "explanations": [
                "Un cambio incompatible de la interfaz pública requiere una nueva versión principal.",
                "Una versión de parche comunica correcciones compatibles, no esta eliminación de interfaz.",
                "Una versión secundaria comunica adiciones compatibles, no cambios obligatorios del llamador.",
                "Mantener la misma versión publicada oculta un cambio incompatible."
            ],
            "concept": "Compatibilidad de versiones semánticas de acciones",
            "hints": [
                "Evalúa el efecto sobre los llamadores existentes, no el tamaño del cambio de código.",
                "Eliminar una interfaz es distinto de añadir una capacidad opcional."
            ]
        },
        "actions-138": {
            "prompt": "Para una etiqueta convencional mutable de versión principal, ¿qué permite ofrecer al publicador mantener v2?",
            "choices": [
                "Una identidad inalterable para un único commit de código",
                "Migración automática de toda entrada v1 a una entrada v3",
                "Actualizaciones compatibles de v2 sin que cada llamador edite su referencia",
                "Una garantía de que el sistema operativo del host nunca cambia"
            ],
            "explanations": [
                "Una etiqueta móvil no es una identidad de commit exacta e inmutable.",
                "Las etiquetas no reescriben entradas ni migran interfaces incompatibles.",
                "Una etiqueta principal mantenida puede avanzar a lanzamientos compatibles; las reglas de versiones inmutables requieren consideración aparte.",
                "Las referencias de versión de acción no congelan los sistemas operativos de runners hospedados."
            ],
            "concept": "Etiquetas principales de lanzamiento mantenidas",
            "hints": [
                "Distingue un canal de compatibilidad de una identidad exacta de código.",
                "La pregunta limita explícitamente la etiqueta al caso mutable."
            ]
        },
        "actions-139": {
            "prompt": "¿Qué sección del README permite más directamente configurar y consumir la interfaz de una acción?",
            "choices": [
                "Avatares de colaboradores, número de incidencias y estrellas",
                "Fechas de lanzamiento, número de commits y ramas de desarrollo",
                "Insignias de compilación, logotipos de patrocinadores y clasificaciones",
                "Entradas, valores predeterminados, salidas y un ejemplo funcional"
            ],
            "explanations": [
                "Los indicadores de comunidad no explican nombres de parámetros ni referencias de salida.",
                "La información histórica no especifica cómo deben invocar la interfaz los llamadores.",
                "La presentación y el patrocinio no sustituyen la documentación de interfaz.",
                "Estos elementos documentan el contrato de invocación y muestran una configuración válida."
            ],
            "concept": "Documentación para consumidores de acciones",
            "hints": [
                "Piensa qué necesita saber un llamador para escribir un bloque with válido.",
                "La documentación debe explicar el comportamiento observable, no solo la actividad del repositorio."
            ]
        },
        "actions-140": {
            "prompt": "Una acción JavaScript afirma ser compatible con Linux, Windows y macOS. ¿Qué prueba de lanzamiento comprueba directamente esa afirmación?",
            "choices": [
                "Ejecutar solo el corrector ortográfico de la documentación en cada lanzamiento.",
                "Comprobar solo que la etiqueta publicada coincide con el ejemplo del README.",
                "Invocar la acción empaquetada en una matriz de esos sistemas operativos.",
                "Ejecutar la acción solo dentro de un contenedor Docker Linux."
            ],
            "explanations": [
                "La corrección ortográfica no ejecuta comportamientos dependientes de la plataforma.",
                "La coherencia de etiquetas no verifica la compatibilidad con sistemas operativos.",
                "Una invocación real en cada plataforma comprueba el empaquetado y los supuestos del sistema operativo.",
                "Un contenedor Linux no comprueba el comportamiento nativo de Windows y macOS."
            ],
            "concept": "Pruebas multiplataforma de lanzamientos de acción",
            "hints": [
                "Prueba lo que ejecutan los consumidores, no solo los archivos fuente de desarrollo.",
                "Las rutas de archivos y los comandos disponibles pueden variar por plataforma."
            ]
        },
        "actions-141": {
            "prompt": "Una organización con GitHub Team debe limitar un conjunto de runners a dos repositorios privados. ¿Qué control establece ese límite?",
            "choices": [
                "Etiquetas personalizadas de runners",
                "Acceso a repositorios del grupo de runners",
                "Nombres visibles de flujos",
                "Ajustes de tiempo límite de trabajos"
            ],
            "explanations": [
                "Las etiquetas seleccionan máquinas aptas, pero no son límites de acceso de repositorios.",
                "Un grupo puede conceder acceso solo a repositorios seleccionados.",
                "Los nombres visibles no autorizan acceso a runners.",
                "Los tiempos límite restringen la duración, no los repositorios aptos."
            ],
            "concept": "Autorización de repositorios en grupos de runners",
            "hints": [
                "Distingue seleccionar una máquina de tener permiso para usar un conjunto.",
                "Piensa dónde expresa un administrador qué llamadores están permitidos."
            ]
        },
        "actions-142": {
            "prompt": "¿Qué función del runner describe una capacidad como gpu para la selección de runs-on, sin conceder acceso a repositorios?",
            "choices": [
                "Una etiqueta personalizada",
                "Una política de acceso a repositorios",
                "Un secreto de organización",
                "Un entorno de despliegue"
            ],
            "explanations": [
                "Las etiquetas personalizadas ayudan a dirigir trabajos a runners con características declaradas.",
                "Las políticas de acceso controlan la autorización, no anuncian capacidades.",
                "Los secretos almacenan valores sensibles, no atributos de selección de runners.",
                "Los entornos agrupan ajustes de despliegue y no son etiquetas de capacidades."
            ],
            "concept": "Etiquetas de capacidades de runners",
            "hints": [
                "Un atributo de planificación no es necesariamente un límite de seguridad.",
                "Identifica si la pregunta trata de características de máquinas o de acceso."
            ]
        },
        "actions-143": {
            "prompt": "¿Qué asignación runs-on exige tanto pertenencia al grupo build-pool como la etiqueta linux-x64?",
            "choices": [
                "runs-on: {group: build-pool, labels: linux-x64}",
                "runs-on: {group: linux-x64, labels: build-pool}",
                "runs-on: [build-pool, linux-x64]",
                "runs-on: {labels: linux-x64}"
            ],
            "explanations": [
                "La asignación group y labels aplica tanto la pertenencia al grupo como la coincidencia de etiquetas.",
                "Esto intercambia el nombre de grupo y la etiqueta solicitados.",
                "Un arreglo trata ambos valores como etiquetas en lugar de nombrar un grupo.",
                "La asignación solo de etiqueta no exige el grupo indicado."
            ],
            "concept": "Intersección de grupo y etiqueta de runner",
            "hints": [
                "Lee las claves además de sus valores.",
                "Un arreglo de etiquetas no tiene la misma estructura que una selección de grupo."
            ]
        },
        "actions-144": {
            "prompt": "De forma predeterminada, ¿qué repositorios pueden acceder a los runners autohospedados de un grupo de organización recién creado?",
            "choices": [
                "Todos los repositorios públicos que conocen una etiqueta de runner",
                "Solo repositorios que contienen un anuncio de Marketplace",
                "Repositorios privados permitidos por la política del grupo",
                "Todos los repositorios de todas las organizaciones de GitHub"
            ],
            "explanations": [
                "Conocer una etiqueta no evita la restricción de acceso de repositorios públicos.",
                "La publicación en Marketplace no guarda relación con el acceso a grupos de runners.",
                "El acceso del grupo es privado por defecto y depende de la política de repositorios seleccionada.",
                "Un grupo de organización no es accesible globalmente en GitHub."
            ],
            "concept": "Restricción predeterminada de runners para repositorios públicos",
            "hints": [
                "Considera el riesgo del código procedente de bifurcaciones públicas.",
                "Las restricciones de visibilidad predeterminadas se aplican junto con las políticas de repositorios seleccionados."
            ]
        },
        "actions-145": {
            "prompt": "¿En qué nivel de registro puede asignarse un runner autohospedado a varias organizaciones de una misma empresa?",
            "choices": [
                "Nivel de repositorio",
                "Nivel de empresa",
                "Nivel de entorno",
                "Nivel de flujo"
            ],
            "explanations": [
                "Los runners de repositorio están dedicados a un único repositorio.",
                "Los runners de empresa pueden servir a varias organizaciones mediante la administración de empresa.",
                "Los entornos no constituyen un nivel de registro de runners autohospedados.",
                "Los flujos seleccionan runners; no poseen un nivel de registro entre organizaciones."
            ],
            "concept": "Jerarquía de registro de runners",
            "hints": [
                "Relaciona el ámbito administrativo con el ámbito de uso compartido deseado.",
                "Una referencia de flujo no cambia el propietario del registro del runner."
            ]
        },
        "actions-146": {
            "prompt": "Una organización permite un único repositorio de acción externo, vendor/audit. ¿Qué patrón de permiso es el más restringido que cubre todo ese repositorio?",
            "choices": [
                "vendor/*",
                "*/audit@*",
                "*/*",
                "vendor/audit@*"
            ],
            "explanations": [
                "vendor/* también admite otros repositorios de vendor.",
                "*/audit@* admite repositorios llamados audit de otros propietarios.",
                "*/* admite propietarios y repositorios arbitrarios, no solo este origen.",
                "Esto coincide con referencias de vendor/audit sin permitir todos los repositorios de ese propietario."
            ],
            "concept": "Patrones restringidos de orígenes de acciones",
            "hints": [
                "Expande mentalmente cada comodín antes de elegir una regla.",
                "Esta pregunta trata de orígenes permitidos, no de fijación de dependencias."
            ]
        },
        "actions-147": {
            "prompt": "Una empresa impone una política de Actions a sus organizaciones. ¿Puede el propietario de una organización debilitar esa restricción?",
            "choices": [
                "Sí; los ajustes de organización siempre prevalecen sobre los de empresa.",
                "Sí; cambiar el nombre del flujo lo exime de la política.",
                "No; se aplica la política superior de la empresa.",
                "No; solo una etiqueta de runner puede anular la restricción."
            ],
            "explanations": [
                "La jerarquía documentada permite que la política de empresa prevalezca sobre la organización.",
                "Los nombres visibles no crean excepciones a la política de Actions.",
                "La política de empresa impuesta limita las opciones disponibles en la organización.",
                "Las etiquetas de runner no anulan la política de uso de acciones."
            ],
            "concept": "Herencia de políticas de empresa",
            "hints": [
                "Sigue la jerarquía administrativa, no solo la ubicación del flujo.",
                "Los metadatos de planificación no pueden eximir de una restricción de gobernanza."
            ]
        },
        "actions-148": {
            "prompt": "Una política de organización bloquea un origen de acciones. ¿Qué puede hacer un administrador en los ajustes de Actions del repositorio?",
            "choices": [
                "Restringir más los orígenes permitidos, pero no autorizar ese origen bloqueado.",
                "Autorizar el origen bloqueado seleccionando otra imagen de runner.",
                "Autorizar el origen bloqueado aumentando el tiempo límite del trabajo.",
                "Reemplazar la política de organización con un nombre de flujo del repositorio."
            ],
            "explanations": [
                "La política del repositorio puede ser más restrictiva, pero no evitar una política superior de organización.",
                "Seleccionar una imagen de runner no cambia los orígenes de acciones permitidos.",
                "Cambiar el tiempo límite no anula las reglas de acceso de organización.",
                "Los nombres de flujo no tienen autoridad sobre las políticas de organización."
            ],
            "concept": "Límites superiores de políticas de repositorio",
            "hints": [
                "Distingue restricciones locales de permisos concedidos por un ámbito superior.",
                "Los ajustes de ejecución y de orígenes permitidos regulan cosas distintas."
            ]
        },
        "actions-149": {
            "prompt": "En un repositorio privado de acciones en GitHub.com, ¿dónde habilita su administrador el uso desde otros repositorios privados de la misma organización?",
            "choices": [
                "Settings > Branches > Branch protection rules",
                "Settings > Pages > Build and deployment",
                "Settings > Webhooks > Add webhook",
                "Settings > Actions > General > Access"
            ],
            "explanations": [
                "La protección de ramas regula sus cambios, no la distribución de acciones privadas.",
                "Los ajustes de Pages regulan la publicación de sitios, no el acceso a descargas de acciones.",
                "Los webhooks envían notificaciones de eventos y no conceden acceso de uso compartido de acciones.",
                "El ajuste Access de Actions del repositorio de origen controla el uso compartido de acciones privadas."
            ],
            "concept": "Ajuste de distribución de acciones privadas",
            "hints": [
                "El repositorio de origen controla la decisión de compartir.",
                "No confundas el acceso a acciones con la publicación web o las reglas de ramas."
            ]
        },
        "actions-150": {
            "prompt": "Compartir una acción privada con otro repositorio concede automáticamente a sus colaboradores ¿qué acceso directo?",
            "choices": [
                "Acceso de escritura a la rama predeterminada del repositorio de origen",
                "Ningún permiso nuevo para navegar por Code en el repositorio de origen",
                "Acceso de administrador a los ajustes del repositorio de origen",
                "Permiso para administrar colaboradores del repositorio de origen"
            ],
            "explanations": [
                "Compartir una acción no concede escritura en ramas.",
                "Compartir acciones permite descargarlas al runner, no crea membresía directa; los registros aún pueden exponer información.",
                "Consumir una acción no concede administración del repositorio.",
                "El ajuste de uso compartido de Actions no concede gestión de colaboradores."
            ],
            "concept": "Acceso a acciones frente a membresía de repositorio",
            "hints": [
                "Distingue el acceso de la máquina para ejecutar del rol del usuario en el repositorio.",
                "La falta de acceso directo no implica que no exista exposición indirecta de información."
            ]
        },
        "actions-151": {
            "prompt": "¿Cómo autoriza GitHub al runner a descargar una acción de un repositorio privado compartido autorizado?",
            "choices": [
                "La cookie de sesión del navegador del propietario del repositorio",
                "Un token de instalación limitado con acceso de lectura a ese repositorio",
                "Una contraseña de administrador de organización en action.yml",
                "Clonación anónima con acceso completo de escritura al código privado"
            ],
            "explanations": [
                "Las descargas del runner no reutilizan la cookie del navegador del propietario.",
                "GitHub proporciona un token de instalación limitado para permitir la descarga del runner.",
                "Compartir no requiere incrustar una contraseña de administrador en los metadatos.",
                "El uso compartido privado se autentica y no proporciona escritura anónima."
            ],
            "concept": "Autorización de descarga de acciones compartidas",
            "hints": [
                "Considera la identidad, el ámbito de recursos y la finalidad de la credencial.",
                "Una descarga no necesita conceder administración del repositorio."
            ]
        },
        "actions-152": {
            "prompt": "¿Por qué deben revisar los registros antes de compartir una acción privada con repositorios que tienen colaboradores externos?",
            "choices": [
                "Compartir hace que el repositorio de origen sea públicamente localizable sin avisar.",
                "Los colaboradores externos se convierten automáticamente en propietarios de empresa.",
                "La acción ya no puede producir registros después de compartirse.",
                "Esos colaboradores pueden ver la salida de la acción en los registros del flujo llamador."
            ],
            "explanations": [
                "Compartir para Actions no cambia la visibilidad del repositorio a pública.",
                "Compartir acciones no concede el rol de propietario de empresa.",
                "Las acciones compartidas siguen produciendo registros en las ejecuciones llamadoras.",
                "La advertencia documentada de acceso indirecto incluye registros visibles en los repositorios consumidores."
            ],
            "concept": "Exposición indirecta mediante registros de acciones compartidas",
            "hints": [
                "Sigue la información hasta quienes pueden leer la ejecución consumidora.",
                "El acceso de ejecución y la visibilidad del repositorio son ajustes distintos."
            ]
        },
        "actions-153": {
            "prompt": "Una empresa quiere que muchos repositorios invoquen una definición de compilación de varios trabajos versionada centralmente. ¿Qué modelo de distribución corresponde?",
            "choices": [
                "Flujo reutilizable",
                "Flujo inicial",
                "Acción compuesta",
                "Fragmento de flujo copiado"
            ],
            "explanations": [
                "Los flujos reutilizables centralizan definiciones de trabajos mediante una versión referenciada.",
                "Los flujos iniciales se convierten en copias independientes tras su creación.",
                "Las acciones compuestas encapsulan pasos, no definiciones de flujo de varios trabajos.",
                "Los fragmentos pegados no conservan una definición invocable versionada centralmente."
            ],
            "concept": "Distribución centralizada de flujos",
            "hints": [
                "Compara una referencia de versión activa con un punto de partida copiado.",
                "La unidad distribuida incluye trabajos, no solo pasos."
            ]
        },
        "actions-154": {
            "prompt": "En el repositorio .github de una organización, ¿qué directorio almacena las plantillas de flujo de la organización?",
            "choices": [
                ".github/actions",
                ".github/workflows",
                "workflow-templates",
                "runner-images"
            ],
            "explanations": [
                ".github/actions es una ubicación habitual de acciones locales, no el directorio de detección de plantillas.",
                ".github/workflows contiene definiciones de flujo ejecutables, no el catálogo de plantillas de organización.",
                "Las plantillas de organización y sus archivos de propiedades están en workflow-templates.",
                "runner-images no es el directorio de plantillas de flujo de la organización."
            ],
            "concept": "Ubicación del catálogo de plantillas de organización",
            "hints": [
                "Las plantillas se ofrecen para crear flujos, no se ejecutan desde el catálogo.",
                "Comprueba la ruta dentro del repositorio especial de la organización."
            ]
        },
        "actions-155": {
            "prompt": "Después de que un repositorio cree un flujo a partir de uno inicial de la organización, ¿qué ocurre al editar el original?",
            "choices": [
                "Todos los flujos creados reciben la edición inmediatamente.",
                "El flujo creado se convierte automáticamente en una llamada a un flujo reutilizable.",
                "La copia queda deshabilitada hasta que el propietario del original lo publique de nuevo.",
                "El flujo creado sigue siendo una copia independiente."
            ],
            "explanations": [
                "No existe una relación de actualización automática entre la plantilla y sus copias.",
                "Crear desde una plantilla no inserta después una dependencia workflow_call.",
                "Editar una plantilla no deshabilita flujos creados anteriormente a partir de ella.",
                "Un flujo inicial proporciona una base; sus cambios posteriores no sincronizan copias existentes."
            ],
            "concept": "Independencia de flujos iniciales",
            "hints": [
                "Determina si el consumidor guardó una copia o una referencia.",
                "Una experiencia de creación compartida no implica gobernanza central continua."
            ]
        },
        "actions-156": {
            "prompt": "En GitHub Enterprise Cloud, ¿qué política de grupo de runners puede limitar el uso a archivos de flujo y referencias aprobados, además del acceso de repositorios?",
            "choices": [
                "Etiquetas de capacidades personalizadas",
                "Retención de registros de flujos",
                "Acceso de flujos seleccionados",
                "Nivel de compresión de artefactos"
            ],
            "explanations": [
                "Las etiquetas seleccionan runners, pero no autorizan identidades de archivos de flujo.",
                "La retención controla los registros guardados, no qué flujos pueden usar un grupo.",
                "Las restricciones de flujo pueden indicar rutas y versiones de flujos aprobadas para el grupo.",
                "La compresión cambia el empaquetado de artefactos, no el acceso al grupo de runners."
            ],
            "concept": "Autorización de flujos en grupos de runners",
            "hints": [
                "Un repositorio puede contener definiciones de flujo aprobadas y no aprobadas.",
                "Considera la diferencia entre seleccionar hardware y autorizar definiciones ejecutables."
            ]
        },
        "actions-157": {
            "prompt": "¿Qué registro de runner autohospedado se dedica a un repositorio en lugar de compartirse entre repositorios de la organización?",
            "choices": [
                "Registro a nivel de organización",
                "Registro a nivel de repositorio",
                "Registro a nivel de empresa",
                "Un nombre de ejecución de flujo"
            ],
            "explanations": [
                "Los runners de organización pueden servir a varios repositorios según las políticas de acceso.",
                "Los runners de repositorio sirven al repositorio donde se registran.",
                "Los runners de empresa pueden abarcar organizaciones y no están limitados a un repositorio por definición.",
                "Un nombre de ejecución etiqueta una ejecución y no registra un runner."
            ],
            "concept": "Ámbito de propiedad de runners de repositorio",
            "hints": [
                "El ámbito de registro y la selección runs-on son decisiones diferentes.",
                "Considera qué objeto administrativo es propietario del runner."
            ]
        },
        "actions-158": {
            "prompt": "Tras extraer la aplicación de runner autohospedado Linux, ¿qué script la registra en GitHub usando la URL y el token de registro proporcionados?",
            "choices": [
                "./config.sh",
                "./run.sh",
                "./svc.sh",
                "./env.sh"
            ],
            "explanations": [
                "config.sh configura el registro del runner en GitHub antes de la ejecución normal.",
                "run.sh inicia el listener configurado del runner, no registra uno nuevo.",
                "svc.sh gestiona la instalación y ejecución del servicio después de configurar el runner.",
                "env.sh no es el comando de registro indicado en las instrucciones de configuración."
            ],
            "concept": "Script de registro de runners Linux",
            "hints": [
                "Distingue registro, ejecución en primer plano y gestión del servicio.",
                "El token asocia la aplicación con un ámbito administrativo."
            ]
        },
        "actions-159": {
            "prompt": "¿Qué comando instala como servicio un runner autohospedado Linux ya configurado?",
            "choices": [
                "sudo ./svc.sh install",
                "./config.sh remove",
                "./run.sh",
                "sudo ./svc.sh status"
            ],
            "explanations": [
                "svc.sh install instala el servicio; después puede iniciarse con svc.sh start.",
                "config.sh remove elimina el registro del runner en lugar de instalar un servicio.",
                "run.sh ejecuta la aplicación de forma interactiva en lugar de instalar un servicio.",
                "svc.sh status consulta el estado del servicio sin instalarlo."
            ],
            "concept": "Instalación del servicio de runner Linux",
            "hints": [
                "Una aplicación registrada no implica automáticamente un servicio de sistema activo.",
                "Compara los verbos de instalación con los de consulta y ejecución."
            ]
        },
        "actions-160": {
            "prompt": "Para un runner autohospedado que se conecta a GitHub.com, ¿qué dirección de red y protocolo básicos se requieren?",
            "choices": [
                "HTTPS entrante desde GitHub hacia el listener del runner",
                "HTTP saliente sin cifrar hacia servicios de trabajos de GitHub",
                "HTTPS saliente hacia los servicios requeridos de GitHub",
                "SSH entrante desde GitHub hacia el host del runner"
            ],
            "explanations": [
                "El runner inicia la conexión; GitHub no requiere esa conexión entrante al listener.",
                "El protocolo de comunicación documentado es HTTPS cifrado, no HTTP sin cifrar.",
                "El runner inicia conexiones HTTPS; los destinos requeridos dependen de las funciones usadas.",
                "GitHub no entrega trabajos mediante una sesión SSH entrante al host."
            ],
            "concept": "Inicio de conexiones de runners autohospedados",
            "hints": [
                "Identifica qué proceso inicia la conexión.",
                "Importan tanto la conectividad básica como los destinos de descarga de cada función."
            ]
        },
        "actions-161": {
            "prompt": "En Linux, ¿qué comando del runner comprueba el acceso a los servicios de red requeridos de GitHub? URL y PAT son marcadores de posición.",
            "choices": [
                "./config.sh --remove --url URL --pat PAT",
                "./config.sh --check --url URL --pat PAT",
                "./svc.sh status",
                "./run.sh --version"
            ],
            "explanations": [
                "Eliminar el registro no es un diagnóstico de red.",
                "La comprobación de conectividad documentada informa PASS o FAIL para los servicios requeridos.",
                "El estado del servicio no prueba todos los destinos de red requeridos de GitHub.",
                "Consultar una versión no realiza las comprobaciones de conectividad documentadas."
            ],
            "concept": "Comando de diagnóstico de conectividad del runner",
            "hints": [
                "Un listener puede estar instalado sin poder alcanzar un servicio requerido.",
                "Elige una prueba activa de red, no una consulta de proceso local."
            ]
        },
        "actions-162": {
            "prompt": "¿Qué archivos registran el inicio y la actividad del listener de la aplicación de runner autohospedado?",
            "choices": [
                "_diag/Worker_*.log",
                "_work/*/README.md",
                ".github/workflows/*.yml",
                "_diag/Runner_*.log"
            ],
            "explanations": [
                "Los registros Worker_ contienen detalles de ejecución de trabajos individuales.",
                "Los README obtenidos son documentación del proyecto, no diagnósticos del listener.",
                "El YAML de flujo configura trabajos, no registra el inicio del runner.",
                "Los registros Runner_ describen la actividad de la propia aplicación del runner."
            ],
            "concept": "Registros de diagnóstico de la aplicación del runner",
            "hints": [
                "Distingue el listener persistente del proceso que ejecuta un trabajo.",
                "Los archivos de configuración y los diagnósticos tienen fines distintos."
            ]
        },
        "actions-163": {
            "prompt": "¿Qué registros locales del runner autohospedado contienen detalles de la ejecución de un trabajo individual?",
            "choices": [
                "_diag/Runner_*.log",
                ".service",
                "_diag/Worker_*.log",
                "action.yml"
            ],
            "explanations": [
                "Los registros Runner_ se centran en la aplicación y el listener, no en la ejecución detallada del trabajo.",
                ".service identifica la configuración del servicio, no una traza de ejecución de trabajo.",
                "Los registros Worker_ se generan para los trabajos procesados por el runner.",
                "action.yml define metadatos de acción en lugar de registrar diagnósticos de trabajo."
            ],
            "concept": "Diagnósticos de procesos de trabajo del runner",
            "hints": [
                "Elige el productor de registros más cercano a la ejecución fallida.",
                "La existencia de un servicio no explica el fallo de un comando individual."
            ]
        },
        "actions-164": {
            "prompt": "¿Qué mantenimiento sigue siendo responsabilidad del operador cuando la aplicación del runner autohospedado se actualiza automáticamente?",
            "choices": [
                "Actualizaciones del sistema operativo y herramientas instaladas",
                "Solo las actualizaciones automáticas de la aplicación del runner",
                "Solo YAML de flujo nuevo, sin parches de la máquina",
                "Solo etiquetas de contenedor, sin parches del sistema anfitrión"
            ],
            "explanations": [
                "Las actualizaciones de la aplicación del runner no corrigen el sistema operativo ni otras herramientas.",
                "La pregunta ya incluye actualizaciones automáticas de la aplicación; no mantienen la plataforma anfitriona.",
                "Cambiar las definiciones de flujo no aplica parches a la máquina de ejecución.",
                "Los contenedores actualizados no eliminan el mantenimiento del sistema operativo anfitrión."
            ],
            "concept": "Responsabilidad de mantenimiento de plataformas autohospedadas",
            "hints": [
                "Una aplicación agente y su sistema operativo anfitrión tienen ciclos de vida distintos.",
                "Considera qué infraestructura administra realmente la organización."
            ]
        },
        "actions-165": {
            "prompt": "¿Qué cambia al registrar un runner autohospedado con --ephemeral?",
            "choices": [
                "GitHub elimina automáticamente todos los archivos de su disco anfitrión.",
                "GitHub garantiza que solo pueda ejecutar código de origen confiable.",
                "GitHub instala todas las actualizaciones requeridas del sistema operativo.",
                "GitHub elimina su registro después de que procese un trabajo."
            ],
            "explanations": [
                "Eliminar el registro no es sanear el disco ni destruir la máquina.",
                "El modo efímero no convierte código no confiable en confiable.",
                "Actualizar el sistema operativo sigue siendo tarea del operador en infraestructura autohospedada.",
                "El registro efímero es para un trabajo; la limpieza del host sigue requiriendo orquestación."
            ],
            "concept": "Semántica de registro de runners efímeros",
            "hints": [
                "Diferencia el registro de GitHub de la máquina subyacente.",
                "Un ciclo de vida por número de trabajos no establece por sí solo un límite de confianza."
            ]
        },
        "actions-166": {
            "prompt": "Un escalador destruye las máquinas de runners efímeros tras cada trabajo. ¿Dónde deben conservarse los registros de diagnóstico de la aplicación?",
            "choices": [
                "Solo en el directorio _diag local de la máquina",
                "En almacenamiento externo de registros antes de destruir la máquina",
                "Solo en la imagen usada para crear la próxima máquina",
                "Solo en los registros de flujo cargados automáticamente por GitHub"
            ],
            "explanations": [
                "Los archivos locales de diagnóstico desaparecen al destruir el almacenamiento de la máquina.",
                "GitHub recomienda reenviar y conservar externamente los registros de runners efímeros.",
                "Una imagen base no captura automáticamente registros de ejecuciones posteriores.",
                "Los registros de flujo no conservan automáticamente todos los archivos de diagnóstico del runner."
            ],
            "concept": "Conservación de diagnósticos de runners efímeros",
            "hints": [
                "Las pruebas deben sobrevivir al recurso investigado.",
                "Los registros de flujo y de aplicación del runner son fuentes de diagnóstico diferentes."
            ]
        },
        "actions-167": {
            "prompt": "¿Por qué es arriesgado un runner autohospedado persistente para pull requests de bifurcaciones de un repositorio público?",
            "choices": [
                "Un checkout normal garantiza la limpieza del host entre trabajos.",
                "Los trabajos no confiables pueden dejar cambios que afecten a trabajos posteriores.",
                "Las etiquetas del runner aíslan automáticamente cada trabajo en una VM nueva.",
                "Un token API de solo lectura impide escribir en el sistema de archivos anfitrión."
            ],
            "explanations": [
                "La limpieza de checkout no es aislamiento de todo el host ni saneamiento de procesos.",
                "Las máquinas persistentes pueden conservar procesos maliciosos o modificaciones entre trabajos.",
                "Las etiquetas encaminan trabajos y no proporcionan aislamiento de VM.",
                "Los permisos API no determinan los privilegios locales del proceso del runner."
            ],
            "concept": "Confianza entre trabajos en runners persistentes",
            "hints": [
                "Piensa en qué persiste cuando termina el proceso de un trabajo.",
                "Una función de planificación no equivale a un límite de aislamiento desechable."
            ]
        },
        "actions-168": {
            "prompt": "Un operador añade la etiqueta cuda a un runner autohospedado. ¿Qué hace la etiqueta por sí sola?",
            "choices": [
                "Instala un toolkit CUDA correspondiente en el host",
                "Verifica un controlador GPU funcional en el host",
                "Cambia la arquitectura del host para coincidir con la etiqueta",
                "Hace que el runner coincida con trabajos que solicitan esa etiqueta"
            ],
            "explanations": [
                "Asignar una etiqueta personalizada no instala software.",
                "GitHub no valida etiquetas personalizadas frente a disponibilidad de hardware o controladores.",
                "Una etiqueta de metadatos no puede cambiar la arquitectura de la máquina.",
                "Las etiquetas personalizadas son metadatos de encaminamiento; el operador debe preparar la capacidad declarada."
            ],
            "concept": "Capacidades de runner declaradas frente a preparadas",
            "hints": [
                "Distingue asignar metadatos de configurar la máquina.",
                "El planificador usa etiquetas, no una auditoría de instalación de software."
            ]
        },
        "actions-169": {
            "prompt": "En la lista de runners autohospedados, ¿qué significa Idle?",
            "choices": [
                "Conectado y listo para ejecutar trabajos",
                "Ejecutando actualmente un trabajo de flujo",
                "Desconectado del servicio de runners de GitHub",
                "Registrado, pero con prohibición de recibir trabajos"
            ],
            "explanations": [
                "Idle indica un runner en línea listo para trabajar.",
                "Active indica que un runner está ejecutando un trabajo.",
                "Offline indica conectividad perdida o ausente con GitHub.",
                "Idle es un estado de actividad, no una denegación administrativa."
            ],
            "concept": "Interpretación del estado de actividad del runner",
            "hints": [
                "Interpreta el estado como una señal de conexión y actividad.",
                "La disponibilidad no anula las políticas de acceso de repositorios."
            ]
        },
        "actions-170": {
            "prompt": "¿Qué enfoque compatible con GitHub gestiona el escalado automático de runners autohospedados en Kubernetes?",
            "choices": [
                "Una política de acceso a repositorios del grupo de runners",
                "El actualizador integrado de la aplicación del runner",
                "Actions Runner Controller (ARC)",
                "El ajuste strategy.max-parallel de un trabajo"
            ],
            "explanations": [
                "La política del grupo autoriza el uso, pero no crea pods de runners en Kubernetes.",
                "El actualizador mantiene versiones de la aplicación, no la capacidad del clúster.",
                "ARC orquesta el escalado de runners en Kubernetes.",
                "max-parallel limita la ejecución de matrices, pero no prepara infraestructura Kubernetes."
            ],
            "concept": "Escalado automático de runners en Kubernetes",
            "hints": [
                "La solución necesita crear y retirar capacidad de ejecución.",
                "Distingue orquestar infraestructura de configurar repositorios."
            ]
        },
        "actions-171": {
            "prompt": "¿Qué afirmación debe incluir una empresa al estimar los costes de runners autohospedados?",
            "choices": [
                "Los minutos hospedados incluidos reembolsan la factura de máquinas autohospedadas.",
                "Las actualizaciones del runner también cubren los costes de administración del host.",
                "El registro efímero transfiere los costes de máquinas a GitHub.",
                "La organización paga sus máquinas, operaciones y mantenimiento."
            ],
            "explanations": [
                "Las asignaciones de uso hospedado no reembolsan facturas de infraestructura de la organización.",
                "GitHub no administra el sistema operativo autohospedado solo por registrar un runner.",
                "El registro efímero cambia el ciclo de vida del runner, no la propiedad de infraestructura.",
                "La infraestructura autohospedada y su mantenimiento siguen siendo responsabilidad de la organización."
            ],
            "concept": "Responsabilidad de costes de infraestructura autohospedada",
            "hints": [
                "Distingue la facturación del servicio del coste de operar la infraestructura de ejecución.",
                "Evita interpretar una afirmación de precio del producto como hardware gratis."
            ]
        },
        "actions-172": {
            "prompt": "En runners VM Linux estándar hospedados por GitHub, ¿qué entorno recibe normalmente un trabajo nuevo?",
            "choices": [
                "La misma VM compartida por todos los trabajos del flujo",
                "Una VM permanente asignada a ese archivo de flujo",
                "Una VM recién preparada para ese trabajo",
                "La VM de la ejecución anterior cuando acierta una caché de dependencias"
            ],
            "explanations": [
                "Los trabajos VM estándar separados no comparten una máquina para todo el flujo.",
                "Un nombre de archivo de flujo no asigna una VM hospedada persistente.",
                "Los trabajos VM hospedados estándar reciben instancias nuevas; no dependas del estado local de trabajos anteriores.",
                "Una caché restaura archivos seleccionados, no la instancia VM anterior."
            ],
            "concept": "Ciclo de vida de trabajos VM hospedados",
            "hints": [
                "Los entornos de ejecución y los artefactos cargados explícitamente tienen duraciones distintas.",
                "La pregunta se limita a runners VM, no a todas las implementaciones hospedadas."
            ]
        },
        "actions-173": {
            "prompt": "¿Dónde puede un administrador identificar la imagen exacta del runner hospedado y el software instalado usados en un trabajo concreto?",
            "choices": [
                "La etiqueta runs-on del flujo sin consultar registros de ejecución",
                "El registro Set up job del trabajo y su enlace de software de imagen",
                "El manifiesto de imagen más nuevo sin comprobar la versión usada",
                "La lista de software de la ejecución anterior sin comprobar este trabajo"
            ],
            "explanations": [
                "Una etiqueta puede resolver compilaciones de imagen cambiantes y no basta para versiones exactas.",
                "El registro de preparación identifica la versión real de imagen y enlaza su software incluido.",
                "La imagen más reciente publicada puede diferir de la usada por este trabajo.",
                "Ejecuciones distintas pueden usar imágenes diferentes incluso sin cambios YAML."
            ],
            "concept": "Pruebas del software de imágenes hospedadas",
            "hints": [
                "Prefiere pruebas de esa ejecución a suposiciones sobre una etiqueta.",
                "El contenido de la imagen puede cambiar entre ejecuciones del mismo flujo."
            ]
        },
        "actions-174": {
            "prompt": "¿Qué afirmación describe correctamente una etiqueta de runner hospedado por GitHub que termina en -latest?",
            "choices": [
                "Puede migrar a una imagen compatible más nueva con el tiempo.",
                "Garantiza que la versión principal del sistema operativo nunca cambia.",
                "Siempre significa el último lanzamiento del proveedor desde el primer día.",
                "Garantiza que todas las herramientas preinstaladas conserven una versión fija."
            ],
            "explanations": [
                "Las etiquetas latest siguen la selección y migraciones de imágenes compatibles de GitHub.",
                "Una etiqueta latest no es un bloqueo permanente de versión principal.",
                "La imagen latest de GitHub no es necesariamente el sistema operativo más reciente del proveedor.",
                "Las imágenes hospedadas reciben actualizaciones; esa etiqueta no congela versiones de herramientas."
            ],
            "concept": "Etiquetas móviles de imágenes hospedadas",
            "hints": [
                "Distingue una etiqueta mantenida por el servicio de un entorno congelado.",
                "Revisa los avisos de migración de imágenes si cambia el comportamiento de un trabajo antes funcional."
            ]
        },
        "actions-175": {
            "prompt": "Un trabajo hospedado requiere una versión de entorno compatible específica que la imagen no garantiza por defecto. ¿Qué debe hacer el flujo?",
            "choices": [
                "Instalarla o seleccionarla explícitamente con una acción setup adecuada.",
                "Suponer que la imagen latest siempre incluye exactamente esa versión.",
                "Definir una variable de versión sin invocar un instalador.",
                "Confirmar un archivo de bloqueo de dependencias sin seleccionar el entorno."
            ],
            "explanations": [
                "Las acciones setup hacen explícita la selección del entorno en lugar de depender de valores cambiantes.",
                "Los valores de imagen se actualizan y no garantizan cualquier versión solicitada.",
                "Una variable por sí sola no instala ni activa la versión de entorno solicitada.",
                "Un archivo de bloqueo de paquetes no prepara el ejecutable del entorno."
            ],
            "concept": "Preparación explícita de entornos hospedados",
            "hints": [
                "Un requisito debe afectar a la preparación ejecutable, no solo a la documentación.",
                "El software preinstalado es un punto de partida, no el contrato completo de compilación."
            ]
        },
        "actions-176": {
            "prompt": "En GitHub Enterprise Cloud, ¿qué opción de runner administrado puede proporcionar IP públicas estáticas para listas permitidas de firewall en Linux o Windows?",
            "choices": [
                "Runners estándar seleccionados solo con la etiqueta ubuntu-latest",
                "Cualquier runner seleccionado solo por un nombre de trabajo personalizado",
                "Runners más grandes configurados con IP estáticas",
                "Runners macOS más grandes con el ajuste IP de Linux"
            ],
            "explanations": [
                "Una etiqueta de imagen hospedada estándar no asigna un rango IP estático dedicado.",
                "El nombre de un trabajo no tiene efecto sobre la asignación de red.",
                "Las IP estáticas son una capacidad de runners más grandes en configuraciones Linux y Windows compatibles.",
                "La capacidad documentada de IP estáticas no se extiende a runners macOS más grandes."
            ],
            "concept": "Direcciones estáticas de salida hospedadas",
            "hints": [
                "Una etiqueta de imagen compartida no implica una identidad de red dedicada.",
                "Comprueba la capacidad específica del sistema operativo, no solo el tamaño del runner."
            ]
        },
        "actions-177": {
            "prompt": "Una organización apta con GitHub Team o Enterprise Cloud necesita que runners Linux/Windows hospedados accedan a una red privada Azure. ¿Qué función compatible debe evaluar?",
            "choices": [
                "IP públicas estáticas de salida sin conexión de red privada",
                "Red privada Azure para runners más grandes",
                "Una política de acceso del grupo sin configuración de red",
                "Un contenedor de servicio del trabajo con red puente Docker local"
            ],
            "explanations": [
                "Las direcciones públicas estáticas por sí solas no proporcionan ruta a destinos Azure privados.",
                "Los runners más grandes compatibles pueden integrarse con una VNET Azure mediante red privada configurada.",
                "El acceso del grupo autoriza usar runners, pero no establece conectividad VNET.",
                "Un puente local de contenedores no es una integración VNET Azure."
            ],
            "concept": "Red privada Azure en runners hospedados",
            "hints": [
                "La conectividad requiere una integración de infraestructura, no solo un valor de configuración.",
                "Ten en cuenta el plan de GitHub.com y el sistema operativo admitido."
            ]
        },
        "actions-178": {
            "prompt": "¿Qué mecanismo compatible preinstala las herramientas de una organización en la imagen usada por runners más grandes hospedados por GitHub aptos?",
            "choices": [
                "Archivos de caché de dependencias",
                "Etiquetas de capacidades de runners",
                "Selección de contenedor de trabajo",
                "Imágenes personalizadas de runner"
            ],
            "explanations": [
                "Las cachés restauran archivos durante los trabajos, no definen la imagen base del runner.",
                "Las etiquetas describen runners sin instalar software en una imagen.",
                "Un contenedor de trabajo proporciona un entorno de contenedor, no una imagen VM personalizada del runner.",
                "Las imágenes personalizadas pueden contener herramientas y dependencias antes de comenzar un trabajo."
            ],
            "concept": "Preparación de imágenes personalizadas hospedadas",
            "hints": [
                "Distingue la preparación de imágenes de las etiquetas y la configuración guardada.",
                "La función requiere plataformas compatibles, permisos y política de organización."
            ]
        },
        "actions-179": {
            "prompt": "Un runner más grande tiene habilitada la generación de imágenes. ¿Qué palabra clave del trabajo solicita crear una imagen personalizada tras un trabajo de construcción satisfactorio?",
            "choices": [
                "services",
                "container",
                "snapshot",
                "environment"
            ],
            "explanations": [
                "services inicia contenedores de servicio, no publica una imagen de runner.",
                "container selecciona un contenedor donde ejecutar los pasos del trabajo.",
                "snapshot especifica la imagen que se genera desde un trabajo de runner de generación de imágenes.",
                "environment selecciona un entorno de despliegue en lugar de generar una imagen."
            ],
            "concept": "Palabra clave de generación de imágenes personalizadas",
            "hints": [
                "Ejecutar dentro de una imagen y crear una imagen de runner son operaciones distintas.",
                "El trabajo debe usar un runner de generación de imágenes configurado adecuadamente."
            ]
        },
        "actions-180": {
            "prompt": "Un secreto de organización debe estar disponible solo para api y worker. ¿Qué política de acceso del secreto corresponde?",
            "choices": [
                "Repositorios seleccionados: api, worker",
                "Todos los repositorios de la organización",
                "Todos los repositorios privados de la organización",
                "Todos los repositorios con el mismo nombre de archivo de flujo"
            ],
            "explanations": [
                "El acceso por selección concede el secreto de organización solo a los repositorios elegidos explícitamente.",
                "El acceso a toda la organización es más amplio que los dos repositorios indicados.",
                "El acceso solo privado puede incluir otros repositorios privados además de esos dos.",
                "Las políticas de secretos de organización seleccionan repositorios, no nombres de archivos de flujo."
            ],
            "concept": "Selección de repositorios para secretos de organización",
            "hints": [
                "Usa el conjunto de acceso más pequeño que incluya a los consumidores reales.",
                "Las categorías de visibilidad y las listas explícitas expresan límites distintos."
            ]
        },
        "actions-181": {
            "prompt": "El mismo nombre de secreto existe en organización, repositorio y entorno. En un trabajo que usa ese entorno, ¿qué secreto prevalece?",
            "choices": [
                "El secreto de repositorio",
                "El secreto de organización",
                "El secreto creado más recientemente",
                "El secreto de entorno"
            ],
            "explanations": [
                "El ámbito de repositorio cede ante un secreto de entorno aplicable con el mismo nombre.",
                "El ámbito de organización no anula valores más específicos de repositorio o entorno.",
                "La prioridad depende del ámbito, no de la fecha de creación.",
                "Prevalece el ámbito aplicable más específico; aquí es el entorno."
            ],
            "concept": "Prioridad de secretos de entorno",
            "hints": [
                "Identifica todos los ámbitos aplicables a este trabajo concreto.",
                "Las colisiones de nombres se resuelven por jerarquía, no por fecha."
            ]
        },
        "actions-182": {
            "prompt": "Un trabajo no referencia ningún entorno. Su repositorio y organización definen API_KEY. ¿Qué valor se lee mediante secrets.API_KEY?",
            "choices": [
                "El valor de la organización",
                "El valor del repositorio",
                "Ambos valores concatenados",
                "Un error en lugar de cualquiera de los valores"
            ],
            "explanations": [
                "El ámbito más amplio de organización no anula el valor del repositorio.",
                "Los secretos de repositorio prevalecen sobre los de organización con el mismo nombre.",
                "GitHub elige por prioridad; no concatena secretos con nombres coincidentes.",
                "Se admiten secretos con el mismo nombre en distintos ámbitos y existe una prioridad definida."
            ],
            "concept": "Reemplazo de secretos por el repositorio",
            "hints": [
                "Excluye los ámbitos que el trabajo no referencia.",
                "Los valores compartidos y la configuración local pueden usar deliberadamente el mismo nombre."
            ]
        },
        "actions-183": {
            "prompt": "¿Cuándo lee GitHub un secreto de entorno para un trabajo que referencia ese entorno?",
            "choices": [
                "Al encolar el flujo",
                "Al iniciar el trabajo",
                "Al confirmar el archivo de flujo",
                "Al crear el repositorio"
            ],
            "explanations": [
                "Al encolar se leen los secretos de organización y repositorio.",
                "Los secretos de entorno se leen al iniciar el trabajo, no al encolar el flujo.",
                "Confirmar YAML no captura los valores de secretos en el archivo de flujo.",
                "Los valores de secretos no quedan fijados al crear el repositorio."
            ],
            "concept": "Momento de lectura de secretos por ámbito",
            "hints": [
                "La entrada en cola de una ejecución y el inicio de cada trabajo son eventos distintos.",
                "Una ejecución puede contener trabajos que empiezan mucho después."
            ]
        },
        "actions-184": {
            "prompt": "¿Qué almacenamiento corresponde a un ajuste no sensible de toda la organización, como el nombre de host de un espejo de paquetes?",
            "choices": [
                "Un bloque env de un único flujo",
                "Un valor de salida de un único paso",
                "Una variable local del proceso del runner",
                "Una variable de configuración de organización"
            ],
            "explanations": [
                "El bloque env de un flujo no expone centralmente el ajuste a otros repositorios.",
                "Las salidas de pasos transmiten resultados, no mantienen configuración compartida de organización.",
                "Una variable de proceso de una máquina no es una variable de organización centralizada.",
                "Las variables de configuración guardan ajustes reutilizables no sensibles y se leen mediante vars."
            ],
            "concept": "Configuración compartida no sensible",
            "hints": [
                "Elige el almacenamiento por sensibilidad y ámbito administrativo.",
                "El estado temporal de ejecución es distinto de la configuración administrada centralmente."
            ]
        },
        "actions-185": {
            "prompt": "La organización y el repositorio definen MIRROR como variable de configuración. No se aplica ninguna variable de configuración de nivel de entorno. ¿Qué valor de vars.MIRROR prevalece?",
            "choices": [
                "La variable de configuración del repositorio",
                "La variable de configuración de la organización",
                "La variable modificada más recientemente",
                "Ambos valores de variable concatenados"
            ],
            "explanations": [
                "Las variables de configuración del repositorio prevalecen sobre las de organización con el mismo nombre.",
                "El valor de organización proporciona un valor general y cede ante el ámbito de repositorio.",
                "La fecha de modificación no reemplaza la prioridad documentada de ámbitos.",
                "Los nombres coincidentes seleccionan un valor por ámbito, no concatenan ambos valores."
            ],
            "concept": "Prioridad de ámbitos de variables de configuración",
            "hints": [
                "Distingue la jerarquía de ámbitos del historial de ediciones.",
                "Se trata del contexto vars, no de expansión de variables del shell."
            ]
        },
        "actions-186": {
            "prompt": "¿Cuándo pasan a estar disponibles para un trabajo las variables de configuración del entorno?",
            "choices": [
                "Antes de comenzar a procesar el flujo en GitHub",
                "Solo después de que termine todo el flujo",
                "Después de que el trabajo empieza a ejecutarse en el runner",
                "Solo después de que un paso las escriba en GITHUB_OUTPUT"
            ],
            "explanations": [
                "No están disponibles durante el procesamiento inicial previo a ejecutar el trabajo.",
                "Puede usarlas el trabajo en ejecución, no solo tras finalizar el flujo.",
                "Las variables de configuración de nivel de entorno llegan al ejecutarse en el runner, no en toda decisión previa del flujo.",
                "La disponibilidad de variables de configuración no requiere publicar salidas de pasos."
            ],
            "concept": "Momento de disponibilidad de configuración del entorno",
            "hints": [
                "Distingue la preparación del flujo en el servidor de la ejecución en el runner.",
                "La prioridad de un ámbito no hace disponibles sus valores en todas las fases."
            ]
        },
        "actions-187": {
            "prompt": "¿Qué expresión lee una variable de configuración de repositorio llamada PACKAGE_MIRROR?",
            "choices": [
                "${{ secrets.PACKAGE_MIRROR }}",
                "${{ inputs.PACKAGE_MIRROR }}",
                "${{ github.PACKAGE_MIRROR }}",
                "${{ vars.PACKAGE_MIRROR }}"
            ],
            "explanations": [
                "El contexto secrets lee secretos cifrados de un almacenamiento separado.",
                "El contexto inputs lee parámetros de invocación, no variables de configuración del repositorio.",
                "El contexto github expone metadatos de ejecución, no variables de configuración arbitrarias.",
                "El contexto vars expone variables de configuración."
            ],
            "concept": "Contexto de variables de configuración",
            "hints": [
                "Identifica dónde se guarda el valor antes de seleccionar un contexto.",
                "Los nombres iguales en distintos almacenes no hacen intercambiables esos almacenes."
            ]
        },
        "actions-188": {
            "prompt": "Un propietario de organización usa GitHub CLI autenticado. ¿Qué comando crea un secreto de organización restringido a api y worker? Introduce su valor solo cuando se solicite.",
            "choices": [
                "gh secret set DEPLOY_KEY --org octo-org --visibility all",
                "gh secret set DEPLOY_KEY --repo octo-org/api",
                "gh secret set DEPLOY_KEY --org octo-org --repos api,worker",
                "gh variable set DEPLOY_KEY --org octo-org --repos api,worker"
            ],
            "explanations": [
                "--visibility all concede acceso a más repositorios de los solicitados.",
                "--repo crea un secreto de repositorio en lugar de uno compartido de organización.",
                "--org selecciona el ámbito de organización y --repos define la lista de repositorios seleccionados.",
                "gh variable guarda una variable de configuración, no un secreto cifrado."
            ],
            "concept": "Secreto de organización para repositorios seleccionados con CLI",
            "hints": [
                "Revisa tanto el subcomando como las opciones de selección de acceso.",
                "No pongas credenciales reales en un ejemplo de comando reutilizable."
            ]
        },
        "actions-189": {
            "prompt": "Un administrador de repositorio usa GitHub CLI autenticado. ¿Qué comando define DEPLOY_KEY en staging de octo-org/api? Su valor se introducirá de forma interactiva.",
            "choices": [
                "gh secret set DEPLOY_KEY --repo octo-org/api",
                "gh secret set DEPLOY_KEY --repo octo-org/api --env staging",
                "gh secret set DEPLOY_KEY --org octo-org --visibility private",
                "gh variable set DEPLOY_KEY --repo octo-org/api --env staging"
            ],
            "explanations": [
                "Sin --env, el comando define un secreto de repositorio.",
                "--env staging selecciona el secreto de entorno en lugar del almacenamiento de repositorio.",
                "La opción de organización selecciona un ámbito administrativo diferente.",
                "El subcomando variable no crea un secreto cifrado."
            ],
            "concept": "Selección de secretos de entorno con CLI",
            "hints": [
                "Aquí hacen falta tanto la identidad del repositorio como la del entorno.",
                "Las opciones de ámbito cambian dónde se almacena el valor."
            ]
        },
        "actions-190": {
            "prompt": "Un administrador de repositorio usa GitHub CLI autenticado. ¿Qué comando define REGION=west no sensible como variable de configuración en staging de octo-org/api?",
            "choices": [
                "gh variable set REGION --repo octo-org/api --env staging --body west",
                "gh variable set REGION --repo octo-org/api --body west",
                "gh secret set REGION --repo octo-org/api --env staging --body west",
                "gh variable list --repo octo-org/api --env staging"
            ],
            "explanations": [
                "variable set con --env escribe una variable de configuración en el ámbito de entorno.",
                "Omitir --env escribe en el ámbito de repositorio, no en staging.",
                "secret set selecciona el almacén de secretos cifrados, no variables de configuración.",
                "variable list consulta el catálogo y no establece un valor."
            ],
            "concept": "Variable de configuración de entorno con CLI",
            "hints": [
                "Elige la categoría de almacenamiento antes de comprobar las opciones de ámbito.",
                "Una operación de lectura no puede crear ni actualizar el valor solicitado."
            ]
        },
        "actions-191": {
            "prompt": "Antes de cifrar un secreto Actions de repositorio para la API REST, ¿qué recurso debe obtener el cliente?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/secrets/public-key",
                "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "GET /repos/{owner}/{repo}/actions/variables/{name}",
                "GET /repos/{owner}/{repo}/actions/runners"
            ],
            "explanations": [
                "El endpoint de clave pública devuelve la clave y key_id usados para cifrar secretos.",
                "Los metadatos de secreto no proporcionan la clave pública de cifrado del repositorio.",
                "Una variable de configuración no guarda relación con la clave de cifrado de secretos de Actions.",
                "Las listas de runners describen máquinas, no claves de cifrado de secretos."
            ],
            "concept": "Obtención de clave pública de secretos por REST",
            "hints": [
                "Crear secretos usa cifrado del lado cliente, no un campo de valor en texto plano.",
                "Elige el recurso que proporciona material de cifrado, no datos de configuración normales."
            ]
        },
        "actions-192": {
            "prompt": "¿Qué solicitud REST crea o actualiza un secreto Actions de repositorio mediante encrypted_value y key_id?",
            "choices": [
                "POST /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "PATCH /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"
            ],
            "explanations": [
                "POST no es el método documentado para este endpoint de secreto con nombre.",
                "PATCH no es el método para crear o actualizar secretos de repositorio.",
                "El endpoint documentado para crear o actualizar un secreto de repositorio usa PUT.",
                "GET lee metadatos y no puede escribir el secreto cifrado."
            ],
            "concept": "Creación o actualización de secretos cifrados por REST",
            "hints": [
                "Distingue actualizar un recurso con nombre de crear en una colección.",
                "La carga debe usar la clave pública del mismo ámbito de secreto."
            ]
        },
        "actions-193": {
            "prompt": "¿Qué devuelve GET /repos/{owner}/{repo}/actions/secrets/{secret_name} para un secreto de repositorio existente?",
            "choices": [
                "El valor descifrado en texto plano del secreto",
                "Metadatos como el nombre del secreto y sus fechas",
                "La carga encrypted_value reutilizable del secreto",
                "La clave privada de descifrado del repositorio"
            ],
            "explanations": [
                "Los valores de secretos no pueden recuperarse como texto plano mediante este endpoint.",
                "El endpoint de lectura expone metadatos, no el valor guardado del secreto.",
                "La respuesta no devuelve la carga cifrada del secreto enviada.",
                "GitHub no expone aquí la clave privada de descifrado del repositorio."
            ],
            "concept": "API de lectura de solo metadatos de secretos",
            "hints": [
                "Distingue descubrir la existencia de un secreto de leer su contenido.",
                "Los campos enviados al escribir no tienen por qué devolverse al leer."
            ]
        },
        "actions-194": {
            "prompt": "¿Qué método y ruta REST crean una variable de configuración de repositorio con un nombre y un valor en texto plano?",
            "choices": [
                "PUT /repos/{owner}/{repo}/actions/variables/{name}",
                "GET /repos/{owner}/{repo}/actions/variables",
                "POST /repos/{owner}/{repo}/actions/secrets",
                "POST /repos/{owner}/{repo}/actions/variables"
            ],
            "explanations": [
                "La API de variables no usa esta ruta PUT para crear variables.",
                "GET enumera variables en lugar de crearlas.",
                "El almacenamiento de secretos usa otra interfaz cifrada de creación o actualización.",
                "Crear variables de repositorio usa POST en la colección variables."
            ],
            "concept": "Creación de variables de configuración por REST",
            "hints": [
                "Secretos y variables tienen cargas y métodos de endpoint distintos.",
                "Comprueba tanto la familia de recursos como si la operación lee o escribe."
            ]
        },
        "actions-195": {
            "prompt": "¿Qué solicitud REST cambia el valor de una variable de configuración de repositorio existente?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/variables/{name}",
                "DELETE /repos/{owner}/{repo}/actions/variables/{name}",
                "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
                "PUT /repos/{owner}/{repo}/actions/variables/{name}"
            ],
            "explanations": [
                "GET obtiene la variable, pero no la actualiza.",
                "DELETE elimina la variable en lugar de cambiar su valor.",
                "El endpoint de actualización de variables de repositorio usa PATCH con los campos modificados.",
                "PUT se usa en la API de creación o actualización de secretos, no en este endpoint de variable."
            ],
            "concept": "Actualización de variables de configuración por REST",
            "hints": [
                "Compara el efecto de la operación antes de elegir el método HTTP.",
                "No apliques la convención de creación o actualización de secretos a variables."
            ]
        },
        "actions-196": {
            "prompt": "¿Qué permiso explícito de GITHUB_TOKEN permite leer archivos del repositorio sin conceder escritura?",
            "choices": [
                "contents: read",
                "issues: read",
                "packages: read",
                "actions: read"
            ],
            "explanations": [
                "Contents read concede lectura del contenido del repositorio.",
                "Issues read afecta a datos de issues, no a archivos del repositorio.",
                "Packages read afecta al contenido del registro de paquetes.",
                "Actions read afecta a recursos de Actions, no a archivos fuente."
            ],
            "concept": "Concede al token solo las capacidades del repositorio que necesita el trabajo.",
            "hints": [
                "Distingue probar la identidad de obtener autorización en el destino.",
                "Compara el alcance de la credencial con la operación realmente necesaria."
            ]
        },
        "actions-197": {
            "prompt": "¿Qué elimina la federación OIDC de un flujo de despliegue en nube compatible?",
            "choices": [
                "La necesidad de limitar los permisos del rol de despliegue",
                "La necesidad de guardar un secreto de nube duradero",
                "La necesidad de configurar autorización en la nube",
                "La necesidad de validar la identidad del flujo"
            ],
            "explanations": [
                "Los roles federados siguen necesitando permisos mínimos.",
                "La federación intercambia identidad del flujo por credenciales de corta duración.",
                "La confianza y autorización en la nube siguen necesitando configuración.",
                "La nube debe verificar las declaraciones de identidad presentadas."
            ],
            "concept": "OIDC reduce el almacenamiento de credenciales persistentes, no los requisitos de autorización.",
            "hints": [
                "Distingue probar la identidad de obtener autorización en el destino.",
                "Compara el alcance de la credencial con la operación realmente necesaria."
            ]
        },
        "actions-198": {
            "prompt": "¿Qué permiso del flujo permite solicitar un token de identidad OIDC de GitHub?",
            "choices": [
                "deployments: write",
                "packages: write",
                "id-token: write",
                "contents: write"
            ],
            "explanations": [
                "Deployments write afecta a registros de despliegue de GitHub.",
                "Packages write afecta a operaciones del registro de paquetes.",
                "Id-token write permite solicitar un token OIDC.",
                "Contents write permite operaciones sobre contenido del repositorio."
            ],
            "concept": "Poder solicitar un token de identidad no equivale a poder modificar recursos de nube.",
            "hints": [
                "Distingue probar la identidad de obtener autorización en el destino.",
                "Compara el alcance de la credencial con la operación realmente necesaria."
            ]
        },
        "actions-199": {
            "prompt": "Se emite correctamente un token OIDC. ¿Qué sigue controlando el acceso a los recursos de nube de destino?",
            "choices": [
                "El permiso contents: write del trabajo",
                "El rol de colaborador del runner en el repositorio",
                "Las protecciones de ramas del repositorio",
                "La política de confianza y el rol autorizado en la nube"
            ],
            "explanations": [
                "Contents write autoriza operaciones sobre contenido del repositorio, no acceso a nube.",
                "Colaborar en un repositorio no concede el rol de nube.",
                "La protección de ramas no concede permisos sobre recursos de nube.",
                "La nube valida declaraciones de identidad y concede los permisos del rol configurado."
            ],
            "concept": "Emitir correctamente el token no concede por sí mismo acceso a recursos de nube.",
            "hints": [
                "Distingue probar la identidad de obtener autorización en el destino.",
                "Compara el alcance de la credencial con la operación realmente necesaria."
            ]
        },
        "actions-200": {
            "prompt": "¿Qué declaración de un token OIDC identifica la audiencia prevista que puede validar una política de confianza de nube?",
            "choices": [
                "aud",
                "sub",
                "iss",
                "exp"
            ],
            "explanations": [
                "Aud identifica la audiencia prevista del token.",
                "Sub identifica el sujeto representado por el token.",
                "Iss identifica el emisor del token.",
                "Exp indica el momento de caducidad del token."
            ],
            "concept": "La confianza en nube evalúa la audiencia prevista junto al sujeto y otras declaraciones de identidad.",
            "hints": [
                "Distingue probar la identidad de obtener autorización en el destino.",
                "Compara el alcance de la credencial con la operación realmente necesaria."
            ]
        },
        "actions-201": {
            "prompt": "Un paso Bash recibe un título de pull request no confiable en PR_TITLE. ¿Qué uso lo mantiene como datos sin evaluarlo?",
            "choices": [
                "sh -c \"$PR_TITLE\"",
                "printf '%s\\n' \"$PR_TITLE\"",
                "eval \"$PR_TITLE\"",
                "bash -c \"$PR_TITLE\""
            ],
            "explanations": [
                "Sh -c ejecuta el título como una cadena de comandos.",
                "Un formato printf fijo y una expansión entre comillas tratan el título como datos.",
                "Eval reinterpreta el título como instrucciones de shell.",
                "Bash -c ejecuta el título como una cadena de comandos."
            ],
            "concept": "Pasa el contexto no confiable mediante una variable de entorno y evita evaluar su contenido.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-202": {
            "prompt": "¿Cuál es el peligro principal de ejecutar el script de compilación de un fork en un trabajo pull_request_target privilegiado?",
            "choices": [
                "El script no puede acceder a servicios de red",
                "El trabajo siempre se ejecuta en un aislamiento automático",
                "El código no confiable puede usar los privilegios del trabajo",
                "El evento siempre desactiva la autenticación del repositorio"
            ],
            "explanations": [
                "El desencadenador no garantiza aislamiento de red.",
                "El desencadenador no aísla automáticamente código no confiable.",
                "El código del fork puede acceder a credenciales y operaciones privilegiadas.",
                "Este evento puede tener acceso privilegiado, no desactivarlo."
            ],
            "concept": "Un evento privilegiado es inseguro cuando ejecuta código de pull requests no confiables.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-203": {
            "prompt": "Un trabajo workflow_run privilegiado descarga un artefacto de pruebas de PR no confiables. ¿Qué regla debe regir su uso?",
            "choices": [
                "Confiar en su contenido porque GitHub guardó el artefacto",
                "Confiar en su contenido si el nombre termina en .zip",
                "Ejecutar sus scripts antes de comprobar la ejecución de origen",
                "Tratar su contenido como no confiable y validarlo antes de usarlo"
            ],
            "explanations": [
                "Alojar un artefacto no valida su contenido.",
                "La extensión de un archivo no establece una procedencia confiable.",
                "Ejecutar antes de validar cruza el límite de confianza.",
                "El almacenamiento no establece confianza; valida productor, contenido y uso permitido."
            ],
            "concept": "Pasar datos entre flujos no elimina su nivel de confianza original.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-204": {
            "prompt": "¿Qué archivo generado fija las dependencias directas y transitivas de acciones de un flujo en commits específicos?",
            "choices": [
                ".github/workflows/actions.lock",
                ".github/dependabot.yml",
                ".github/CODEOWNERS",
                ".github/workflows/deploy.yml"
            ],
            "explanations": [
                "El archivo de bloqueo registra commits de acciones e identidades de origen.",
                "La configuración de Dependabot controla actualizaciones, no el inventario de resolución.",
                "Code owners identifica revisores, no dependencias de acciones resueltas.",
                "Un archivo de flujo normal no es el archivo de bloqueo generado."
            ],
            "concept": "Los archivos de bloqueo cubren dependencias de acciones; las llamadas a flujos reutilizables necesitan control de versión aparte.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-205": {
            "prompt": "¿Qué establece la insignia Verified creator de una acción de GitHub Marketplace?",
            "choices": [
                "Todas las referencias de versión son inmutables",
                "GitHub verificó la identidad del publicador",
                "GitHub auditó cada línea de la acción",
                "Todas las versiones carecen de vulnerabilidades"
            ],
            "explanations": [
                "La insignia no convierte etiquetas o ramas en inmutables.",
                "La insignia es una señal de identidad del publicador.",
                "Verificar una identidad no es auditar todo el código fuente.",
                "Una identidad verificada no garantiza versiones sin vulnerabilidades."
            ],
            "concept": "La identidad del publicador y la seguridad del código ofrecen garantías distintas.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-206": {
            "prompt": "¿Qué comando de flujo registra un valor sensible generado dinámicamente para ocultarlo en los registros?",
            "choices": [
                "::notice::VALUE",
                "::error::VALUE",
                "::add-mask::VALUE",
                "::debug::VALUE"
            ],
            "explanations": [
                "Notice crea una anotación, no registra ocultación.",
                "Error crea una anotación de error, no registra ocultación.",
                "Add-mask registra el valor para ocultarlo en los registros.",
                "Debug emite un mensaje diagnóstico, no registra ocultación."
            ],
            "concept": "Registra los valores sensibles generados antes de operaciones que puedan imprimirlos.",
            "hints": [
                "Un filtro de visualización y la validez de una credencial son controles distintos.",
                "Considera las transformaciones y el almacenamiento como vías de exposición distintas."
            ]
        },
        "actions-207": {
            "prompt": "¿Por qué no se debe asumir que un secreto codificado en Base64 hereda la ocultación del valor original en los registros?",
            "choices": [
                "Los valores Base64 están exentos de ocultación",
                "Solo los secretos de organización pueden registrar máscaras codificadas",
                "La ocultación solo se aplica a anotaciones de error",
                "La ocultación no detecta de forma fiable los valores transformados"
            ],
            "explanations": [
                "Los valores sensibles codificados pueden registrarse para ocultación.",
                "Los valores generados o transformados pueden ocultarse independientemente del alcance del secreto.",
                "La ocultación no se limita a anotaciones de error.",
                "Un valor transformado puede necesitar ocultación independiente y no debe registrarse."
            ],
            "concept": "Codificar no equivale a cifrar ni garantiza ocultación.",
            "hints": [
                "Un filtro de visualización y la validez de una credencial son controles distintos.",
                "Considera las transformaciones y el almacenamiento como vías de exposición distintas."
            ]
        },
        "actions-208": {
            "prompt": "Una credencial activa aparece sin ocultar en un registro de flujo. ¿Qué respuesta aborda tanto la exposición como el acceso continuado?",
            "choices": [
                "Revocarla o rotarla y eliminar los registros expuestos",
                "Renombrar el secreto y conservar los registros expuestos",
                "Reejecutar el trabajo y mantener la credencial original",
                "Desactivar la depuración y mantener la credencial sin cambios"
            ],
            "explanations": [
                "Rotar invalida el acceso expuesto; eliminar registros limita más divulgación.",
                "Renombrar un secreto no invalida su valor.",
                "Reejecutar no invalida la credencial filtrada.",
                "Cambiar registros futuros no revoca un valor ya expuesto."
            ],
            "concept": "Reducir la exposición conservada e invalidar credenciales filtradas son tareas distintas.",
            "hints": [
                "Un filtro de visualización y la validez de una credencial son controles distintos.",
                "Considera las transformaciones y el almacenamiento como vías de exposición distintas."
            ]
        },
        "actions-209": {
            "prompt": "¿Por qué deben excluirse las credenciales de nube de una caché de dependencias de GitHub Actions?",
            "choices": [
                "La caché revoca permanentemente cualquier credencial recibida",
                "Flujos no confiables pueden restaurar contenido de caché accesible",
                "La caché cifra automáticamente credenciales solo para su propietario",
                "Solo el trabajo creador puede restaurar una caché"
            ],
            "explanations": [
                "Guardar una credencial no la revoca.",
                "El acceso a caché puede permitir leer datos a otros flujos, incluidos PR de forks.",
                "Una caché no es un almacén de secretos exclusivo del propietario.",
                "Las cachés se diseñan para reutilizarse en ejecuciones elegibles."
            ],
            "concept": "Las cachés de dependencias no deben contener secretos ni otros archivos sensibles.",
            "hints": [
                "Un filtro de visualización y la validez de una credencial son controles distintos.",
                "Considera las transformaciones y el almacenamiento como vías de exposición distintas."
            ]
        },
        "actions-210": {
            "prompt": "¿Qué función proporciona una declaración firmada sobre el origen de compilación de un artefacto?",
            "choices": [
                "Caché de dependencias",
                "Protección de ramas",
                "Atestación de artefactos",
                "Conservación de artefactos"
            ],
            "explanations": [
                "La caché reutiliza archivos para reducir trabajo repetido.",
                "La protección de ramas controla cambios en ramas.",
                "Las atestaciones vinculan un artefacto con su productor y contexto de compilación.",
                "La conservación determina cuánto tiempo sigue disponible un resultado."
            ],
            "concept": "La procedencia de compilación debe verificarse frente a la política de confianza del consumidor.",
            "hints": [
                "Distingue el origen de una compilación de la seguridad de su contenido.",
                "Contrasta tanto la identidad del productor como el contenido exacto con la política."
            ]
        },
        "actions-211": {
            "prompt": "Un trabajo de atestación de binarios ya tiene contents: read. ¿Qué par de permisos adicional habilita firma de identidad y almacenamiento de atestaciones?",
            "choices": [
                "packages: write; issues: write",
                "deployments: write; statuses: write",
                "checks: write; pull-requests: write",
                "id-token: write; attestations: write"
            ],
            "explanations": [
                "Los permisos de paquetes e issues no proporcionan el acceso de identidad y atestación requerido.",
                "Los permisos de despliegues y estados no proporcionan el acceso de identidad y atestación requerido.",
                "Los permisos de checks y pull requests no proporcionan el acceso de identidad y atestación requerido.",
                "El flujo necesita acceso al token de identidad y escritura de atestaciones."
            ],
            "concept": "Los trabajos de atestación necesitan permisos explícitos para identidad de firma y publicación de atestaciones.",
            "hints": [
                "Distingue el origen de una compilación de la seguridad de su contenido.",
                "Contrasta tanto la identidad del productor como el contenido exacto con la política."
            ]
        },
        "actions-212": {
            "prompt": "¿Qué comando de GitHub CLI verifica la atestación de un binario local frente al repositorio de origen esperado?",
            "choices": [
                "gh attestation verify dist/tool -R octo-org/tool",
                "gh run download 123 -R octo-org/tool",
                "gh release view v1.0 -R octo-org/tool",
                "gh api repos/octo-org/tool/actions/artifacts"
            ],
            "explanations": [
                "Attestation verify comprueba el binario frente a la procedencia del repositorio esperado.",
                "Run download obtiene artefactos sin realizar esta verificación de atestación.",
                "Release view muestra información de una versión, no verifica la atestación del binario.",
                "Enumerar artefactos no verifica la atestación de un binario local."
            ],
            "concept": "La verificación vincula el artefacto local con el productor esperado, no solo con una ubicación de descarga.",
            "hints": [
                "Distingue el origen de una compilación de la seguridad de su contenido.",
                "Contrasta tanto la identidad del productor como el contenido exacto con la política."
            ]
        },
        "actions-213": {
            "prompt": "Se verifica correctamente la procedencia de un binario frente al repositorio y flujo esperados. ¿Qué conclusión sigue SIN estar justificada?",
            "choices": [
                "El contexto de compilación puede contrastarse con la política",
                "El binario no contiene vulnerabilidades explotables",
                "La atestación identifica al productor esperado",
                "La atestación cubre el binario que se comprueba"
            ],
            "explanations": [
                "El contexto de compilación atestado puede respaldar una decisión de política.",
                "Verificar procedencia no establece que el software carezca de vulnerabilidades.",
                "Una procedencia coincidente puede establecer la identidad del productor esperado.",
                "Verificar el contenido vincula la atestación con el binario comprobado."
            ],
            "concept": "Un origen auténtico no sustituye la evaluación de seguridad del software.",
            "hints": [
                "Distingue el origen de una compilación de la seguridad de su contenido.",
                "Contrasta tanto la identidad del productor como el contenido exacto con la política."
            ]
        },
        "actions-214": {
            "prompt": "Cuando se admiten revisores obligatorios del entorno, ¿qué opción impide al iniciador aprobar su propio despliegue?",
            "choices": [
                "Deployment branches and tags",
                "Environment secrets",
                "Prevent self-review",
                "Wait timer"
            ],
            "explanations": [
                "Las restricciones de ramas y etiquetas seleccionan referencias, no identidades aprobadoras.",
                "Los secretos del entorno guardan valores, no excluyen la autoaprobación.",
                "Prevent self-review excluye al iniciador de aprobar ese despliegue.",
                "Wait timer retrasa el despliegue, no excluye al iniciador de aprobar."
            ],
            "concept": "Los revisores obligatorios y la prevención de autorrevisión son controles de entorno distintos.",
            "hints": [
                "Distingue quién puede aprobar de qué revisión puede desplegarse.",
                "Comprueba las protecciones del entorno y la disponibilidad de la función."
            ]
        },
        "actions-215": {
            "prompt": "¿Qué control del entorno limita despliegues a patrones configurados de nombres de ramas y etiquetas?",
            "choices": [
                "Required reviewers",
                "Wait timer",
                "Environment secrets",
                "Selected branches and tags"
            ],
            "explanations": [
                "Required reviewers controla aprobación, no patrones de nombres de referencias.",
                "Wait timer retrasa el despliegue, no selecciona referencias.",
                "Los secretos del entorno proporcionan valores, no restricciones de nombres de referencias.",
                "Selected branches and tags permite configurar patrones de nombres admitidos."
            ],
            "concept": "Las restricciones de referencias desplegables y las aprobaciones resuelven problemas distintos.",
            "hints": [
                "Distingue quién puede aprobar de qué revisión puede desplegarse.",
                "Comprueba las protecciones del entorno y la disponibilidad de la función."
            ]
        },
        "actions-216": {
            "prompt": "Las compilaciones de forks públicos deben ejecutar código no confiable. ¿Qué diseño limita mejor persistencia y acceso a producción?",
            "choices": [
                "Runners aislados desechables sin acceso a producción",
                "Runners de despliegue persistentes con aprobación de entorno",
                "Runners de producción compartidos con registros reducidos",
                "Runners privilegiados reutilizables con menos pasos"
            ],
            "explanations": [
                "El aislamiento desechable limita persistencia; separar red y credenciales limita acceso a producción.",
                "Aprobar el entorno no aísla un runner persistente del código ejecutado.",
                "Reducir registros no aísla infraestructura conectada a producción.",
                "Tener menos pasos no elimina privilegios ni compromiso persistente."
            ],
            "concept": "Aislamiento, ciclo de vida, credenciales y red del runner definen el límite de confianza.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-217": {
            "prompt": "¿Qué tarea encaja mejor con una caché de dependencias que con un artefacto de flujo?",
            "choices": [
                "Preservar un archivo diagnóstico de una compilación fallida",
                "Reutilizar paquetes descargados entre compilaciones compatibles",
                "Conservar un binario de versión para descargarlo después",
                "Compartir un informe de pruebas con un revisor"
            ],
            "explanations": [
                "Un archivo diagnóstico es un resultado conservado, no una caché de dependencias.",
                "Las cachés aceleran compilaciones reutilizando archivos de dependencias regenerables.",
                "Un binario conservado es un resultado apropiado para un artefacto o recurso de versión.",
                "Un informe es un resultado apropiado para conservación como artefacto."
            ],
            "concept": "Usa cachés para insumos reutilizables y artefactos para resultados conservados.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-218": {
            "prompt": "Una caché de dependencias existente tiene contenido obsoleto. ¿Cómo puede el flujo guardar un reemplazo sin eliminarla?",
            "choices": [
                "Cambiar sus archivos mediante restore-keys",
                "Ampliar su contenido estableciendo cache-hit",
                "Crear una caché con una clave nueva",
                "Sobrescribirla reutilizando la misma clave"
            ],
            "explanations": [
                "Restore-keys selecciona cachés alternativas, no las edita.",
                "Cache-hit informa del estado de restauración, no modifica archivos almacenados.",
                "El contenido existente es inmutable; una clave nueva crea otra caché.",
                "Una clave existente exacta no sobrescribe el contenido de esa caché."
            ],
            "concept": "Las claves de caché identifican contenido almacenado inmutable.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-219": {
            "prompt": "Una matriz de pruebas incluye pares de sistema operativo y runtime no admitidos. ¿Qué cambio evita gastar tiempo de runner en ellos?",
            "choices": [
                "Reducir strategy.max-parallel sin cambiar combinaciones",
                "Establecer continue-on-error en todos los trabajos",
                "Aumentar timeout-minutes de toda la matriz",
                "Eliminar esos pares mediante strategy.matrix.exclude"
            ],
            "explanations": [
                "Max-parallel cambia concurrencia, no la cantidad de combinaciones.",
                "Continue-on-error cambia tratamiento de fallos, no qué trabajos se crean.",
                "Un timeout mayor permite ejecutar más tiempo, no excluye combinaciones.",
                "Matrix exclude elimina combinaciones seleccionadas de los trabajos generados."
            ],
            "concept": "Elimina trabajo innecesario de la matriz en vez de cambiar solo su programación o resultado.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-220": {
            "prompt": "Un flujo ya usa un grupo de concurrencia específico de rama. ¿Qué opción cancela su trabajo anterior en ejecución cuando llega otro al grupo?",
            "choices": [
                "cancel-in-progress: true",
                "strategy.fail-fast: true",
                "continue-on-error: true",
                "timeout-minutes: 1"
            ],
            "explanations": [
                "Cancel-in-progress cancela trabajo anterior en ejecución del mismo grupo.",
                "Fail-fast cancela trabajo de matriz tras un fallo, no por una nueva ejecución agrupada.",
                "Continue-on-error cambia tratamiento de fallos, no cancelación por concurrencia.",
                "Un timeout limita duración, no responde a trabajo más reciente."
            ],
            "concept": "El grupo selecciona trabajo relacionado; cancel-in-progress controla cancelar trabajo en ejecución.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-221": {
            "prompt": "Dentro de los límites permitidos, ¿qué entrada de upload-artifact conserva un paquete diagnóstico durante tres días?",
            "choices": [
                "if-no-files-found: warn",
                "retention-days: 3",
                "timeout-minutes: 3",
                "compression-level: 3"
            ],
            "explanations": [
                "If-no-files-found controla qué ocurre si faltan archivos de entrada.",
                "Retention-days controla cuánto tiempo se conserva el artefacto subido.",
                "Timeout-minutes limita ejecución, no la vida del almacenamiento del artefacto.",
                "Compression-level cambia el esfuerzo de compresión, no la conservación."
            ],
            "concept": "La conservación de artefactos puede acortarse por subida dentro de los límites administrativos.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-222": {
            "prompt": "¿Qué solicitud REST elimina un artefacto de flujo almacenado y mantiene intacta su ejecución?",
            "choices": [
                "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}",
                "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
                "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
            ],
            "explanations": [
                "Eliminar la ejecución contradice el requisito de conservarla.",
                "Cancelar una ejecución no elimina el artefacto almacenado seleccionado.",
                "El endpoint DELETE del artefacto lo elimina sin eliminar su ejecución.",
                "El endpoint GET lee metadatos, no elimina el artefacto."
            ],
            "concept": "El ciclo de vida de los artefactos y el de las ejecuciones tienen operaciones distintas.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-223": {
            "prompt": "¿Qué clave de trabajo limita a veinte minutos un trabajo de GitHub Actions que podría atascarse?",
            "choices": [
                "max-parallel: 20",
                "retention-days: 20",
                "fetch-depth: 20",
                "timeout-minutes: 20"
            ],
            "explanations": [
                "Max-parallel limita trabajos de matriz simultáneos, no duración.",
                "Retention-days controla almacenamiento de artefactos, no duración del trabajo.",
                "Fetch-depth controla historial Git descargado, no duración del trabajo.",
                "Timeout-minutes del trabajo limita la duración de ejecución."
            ],
            "concept": "Establece un timeout de ejecución a nivel de trabajo para limitar tareas atascadas.",
            "hints": [
                "Distingue los insumos reutilizables de compilación de los resultados conservados.",
                "Considera si el cambio afecta ejecución, paralelismo o almacenamiento."
            ]
        },
        "actions-224": {
            "prompt": "¿Qué valor de package-ecosystem habilita actualizaciones de versión de Dependabot para referencias de acciones en flujos?",
            "choices": [
                "github-actions",
                "docker",
                "npm",
                "gitsubmodule"
            ],
            "explanations": [
                "Github-actions habilita actualizaciones de referencias de acciones y flujos reutilizables compatibles.",
                "Docker supervisa dependencias de imágenes, no referencias de acciones de flujos.",
                "Npm supervisa paquetes JavaScript, no referencias de acciones.",
                "Gitsubmodule supervisa referencias de submódulos Git, no referencias de acciones de flujos."
            ],
            "concept": "El ecosistema de Dependabot selecciona el formato de dependencias que supervisa.",
            "hints": [
                "Sigue el límite entre instrucciones confiables y datos no confiables.",
                "Identifica qué identidad, versión o contexto de ejecución se considera confiable."
            ]
        },
        "actions-225": {
            "prompt": "Al crear una atestación de imagen de contenedor, ¿qué identifica el contenido exacto de la imagen en vez de una etiqueta movible?",
            "choices": [
                "Solo el nombre del host del registro",
                "El digest SHA256 de la imagen",
                "La etiqueta latest de la imagen",
                "El nombre visible del flujo"
            ],
            "explanations": [
                "El host del registro identifica un servicio, no contenido concreto de una imagen.",
                "Un digest identifica el contenido y se proporciona como subject-digest.",
                "Una etiqueta mutable puede apuntar después a otro contenido.",
                "El nombre visible describe un flujo, no el contenido de una imagen."
            ],
            "concept": "La procedencia de contenedores se vincula a digests de contenido, no a nombres mutables.",
            "hints": [
                "Distingue el origen de una compilación de la seguridad de su contenido.",
                "Contrasta tanto la identidad del productor como el contenido exacto con la política."
            ]
        }
    },
    "pt-BR": {
        "actions-001": {
            "prompt": "Qual caminho do repositório permite ao GitHub descobrir um workflow chamado verify.yml?",
            "choices": [
                ".github/workflows/verify.yml",
                ".github/actions/verify.yml",
                ".github/templates/verify.yml",
                ".github/workflow/verify.yml"
            ],
            "explanations": [
                "Os workflows são descobertos neste diretório.",
                "Ações locais usam outro diretório.",
                "Este não é o diretório de descoberta de workflows.",
                "O nome do diretório deve estar no plural."
            ],
            "concept": "Descoberta de workflows",
            "hints": [
                "Diferencie arquivos de workflow e metadados de ações.",
                "A descoberta usa um local reservado."
            ]
        },
        "actions-002": {
            "prompt": "Qual filtro de push corresponde a release/1.2 e release/2.0, mas não a main?",
            "choices": [
                "paths: ['release/**']",
                "branches: ['release/**']",
                "branches: ['release']",
                "tags: ['release/**']"
            ],
            "explanations": [
                "Filtros de caminhos examinam arquivos, não branches.",
                "O padrão de branches abrange essas branches release.",
                "Corresponde apenas à branch literal release.",
                "Filtros de tags não selecionam pushes de branches."
            ],
            "concept": "Correspondência de branches em push",
            "hints": [
                "Identifique o tipo de referência que recebeu o push.",
                "Considere padrões que abrangem uma barra."
            ]
        },
        "actions-003": {
            "prompt": "Um evento repository_dispatch contém client_payload: {\"ticket\": 74}. Qual expressão lê o ticket?",
            "choices": [
                "inputs.client_payload.ticket",
                "github.repository.ticket",
                "github.event.client_payload.ticket",
                "github.event.inputs.ticket"
            ],
            "explanations": [
                "O contexto inputs não contém este payload.",
                "A identidade do repositório não contém campos do evento.",
                "O payload personalizado fica dentro do objeto do evento.",
                "Estas não são entradas de disparo manual."
            ],
            "concept": "Payload de disparo externo",
            "hints": [
                "Separe dados do evento de entradas do workflow.",
                "Siga o aninhamento do objeto JSON."
            ]
        },
        "actions-004": {
            "prompt": "Em workflow_dispatch.inputs.retries, qual tipo declara um valor numérico?",
            "choices": [
                "type: integer",
                "type: string",
                "type: choice",
                "type: number"
            ],
            "explanations": [
                "integer não é um nome de tipo compatível.",
                "string declara texto em vez de uma entrada numérica.",
                "choice oferece uma seleção, não tipagem numérica.",
                "number é um tipo de entrada compatível."
            ],
            "concept": "Entradas numéricas manuais",
            "hints": [
                "Use o esquema do workflow, não os tipos gerais de YAML.",
                "Diferencie o tipo de um valor de seu padrão."
            ]
        },
        "actions-005": {
            "prompt": "Sem um fuso horário configurado, o que cron: '15 6 * * 1' solicita?",
            "choices": [
                "Diariamente às 06:15 UTC",
                "Segunda-feira às 15:06 UTC",
                "6 de janeiro às 00:15 UTC",
                "Segunda-feira às 06:15 UTC"
            ],
            "explanations": [
                "O campo semanal restringe os dias solicitados.",
                "O minuto precede a hora neste formato.",
                "Os campos de dia e mês não estão restritos.",
                "Os campos selecionam minuto, hora e dia da semana."
            ],
            "concept": "Interpretação de cron",
            "hints": [
                "Leia os cinco campos em ordem.",
                "Um agendamento não garante o horário de execução."
            ]
        },
        "actions-006": {
            "prompt": "Qual filtro de pull_request restringe as execuções a alterações em docs/?",
            "choices": [
                "types: [docs]",
                "tags: ['docs/**']",
                "paths: ['docs/**']",
                "branches: ['docs/**']"
            ],
            "explanations": [
                "docs não é um tipo de atividade de pull request.",
                "Padrões de tags não filtram arquivos de pull requests.",
                "paths avalia os caminhos dos arquivos alterados.",
                "branches filtra a branch base do pull request."
            ],
            "concept": "Filtros de caminhos em pull requests",
            "hints": [
                "Classifique o requisito: arquivos, referências ou atividades.",
                "Um padrão de diretório precisa de correspondência recursiva."
            ]
        },
        "actions-007": {
            "prompt": "Qual declaração de nível superior escuta push ou pull_request?",
            "choices": [
                "needs: [push, pull_request]",
                "runs-on: [push, pull_request]",
                "types: [push, pull_request]",
                "on: [push, pull_request]"
            ],
            "explanations": [
                "needs declara dependências entre jobs.",
                "runs-on seleciona runners de execução.",
                "types restringe atividades de um evento configurado.",
                "on declara os eventos que disparam o workflow."
            ],
            "concept": "Sintaxe de vários gatilhos",
            "hints": [
                "Eventos e seleção de runners têm finalidades diferentes.",
                "Localize a declaração de eventos do workflow."
            ]
        },
        "actions-008": {
            "prompt": "Uma entrada string de workflow_dispatch chamada region deve conter west inicialmente. Qual propriedade fornece esse valor?",
            "choices": [
                "description: west",
                "options: [west]",
                "default: west",
                "required: west"
            ],
            "explanations": [
                "description descreve a entrada sem definir seu valor.",
                "options define as seleções de uma entrada choice.",
                "default fornece o valor inicial da entrada.",
                "required espera um booleano, não este valor."
            ],
            "concept": "Valores padrão de entradas manuais",
            "hints": [
                "Separe a documentação da entrada de seus valores.",
                "Obrigatoriedade e inicialização são independentes."
            ]
        },
        "actions-009": {
            "prompt": "Qual declaração em um job test o faz aguardar o job identificado como compile?",
            "choices": [
                "needs: compile",
                "uses: compile",
                "env: compile",
                "name: compile"
            ],
            "explanations": [
                "needs adiciona uma dependência de execução desse job.",
                "uses referencia uma ação ou um workflow reutilizável.",
                "env define um mapa de variáveis de ambiente.",
                "name altera um rótulo, não a ordem."
            ],
            "concept": "Dependências entre jobs",
            "hints": [
                "A ordem não depende da posição no YAML.",
                "Use o identificador da dependência, não seu nome de exibição."
            ]
        },
        "actions-010": {
            "prompt": "Qual condição executa diagnósticos após uma etapa anterior do mesmo job falhar?",
            "choices": [
                "if: ${{ cancelled() }}",
                "if: ${{ !failure() }}",
                "if: ${{ failure() }}",
                "if: ${{ success() }}"
            ],
            "explanations": [
                "cancelled verifica cancelamento, não uma falha comum.",
                "Negar failure exclui o caso de falha solicitado.",
                "failure verifica falhas anteriores neste job.",
                "success exige que as etapas anteriores tenham tido sucesso."
            ],
            "concept": "Etapas somente em falhas",
            "hints": [
                "Diferencie falha e cancelamento.",
                "Funções de status alteram a condição habitual de sucesso."
            ]
        },
        "actions-011": {
            "prompt": "Em um runner Linux com Bash, qual comando publica uma saída de etapa chamada count com valor 8?",
            "choices": [
                "echo \"count=8\" >> \"$GITHUB_STEP_SUMMARY\"",
                "echo \"count=8\" >> \"$GITHUB_OUTPUT\"",
                "echo \"count=8\" >> \"$GITHUB_ENV\"",
                "echo \"count=8\" >> \"$GITHUB_PATH\""
            ],
            "explanations": [
                "Este arquivo exibe Markdown no resumo.",
                "Este arquivo registra saídas de etapa nomeadas.",
                "Este arquivo exporta variáveis para etapas posteriores.",
                "Este arquivo adiciona diretórios à busca de comandos."
            ],
            "concept": "Arquivos de saídas de etapas",
            "hints": [
                "Os arquivos do runner têm consumidores distintos.",
                "Publicar um valor é diferente de imprimi-lo."
            ]
        },
        "actions-012": {
            "prompt": "Um job package expõe uma saída archive. Um job dependente declara needs: package. Qual referência lê essa saída?",
            "choices": [
                "steps.package.outputs.archive",
                "jobs.package.env.archive",
                "github.package.outputs.archive",
                "needs.package.outputs.archive"
            ],
            "explanations": [
                "steps consulta etapas dentro do job atual.",
                "Variáveis de ambiente de jobs não são acessadas assim.",
                "github contém metadados, não saídas de dependências.",
                "needs expõe saídas dos jobs dos quais este depende."
            ],
            "concept": "Consulta de saídas de dependências",
            "hints": [
                "Identifique se o produtor é uma etapa ou um job.",
                "O grafo de dependências define a visibilidade entre jobs."
            ]
        },
        "actions-013": {
            "prompt": "Uma etapa Bash exporta MODE=fast, mas a seguinte não consegue lê-lo. Qual alteração preserva o valor para etapas posteriores do job?",
            "choices": [
                "echo \"MODE=fast\" >> \"$GITHUB_ENV\"",
                "echo \"MODE=fast\" >> \"$GITHUB_OUTPUT\"",
                "echo \"MODE=fast\" >> \"$GITHUB_STATE\"",
                "echo \"MODE=fast\" >> \"$GITHUB_PATH\""
            ],
            "explanations": [
                "O runner carrega essas variáveis nas etapas posteriores.",
                "Saídas exigem referências de contexto, não variáveis diretas.",
                "State pertence às fases do ciclo de vida de uma ação.",
                "Entradas de PATH devem ser caminhos de diretórios."
            ],
            "concept": "Persistência de valores de ambiente",
            "hints": [
                "Processos shell não compartilham alterações exportadas automaticamente.",
                "Escolha o escopo de persistência necessário ao consumidor."
            ]
        },
        "actions-014": {
            "prompt": "Qual mapa no nível do workflow seleciona Bash para todas as etapas run, salvo substituição?",
            "choices": [
                "defaults: {steps: {shell: bash}}",
                "runs-on: {shell: bash}",
                "defaults: {run: {shell: bash}}",
                "env: {run: {shell: bash}}"
            ],
            "explanations": [
                "A chave filha é run, não steps.",
                "runs-on seleciona um runner, não um shell.",
                "defaults.run define as configurações padrão do shell.",
                "env associa nomes de variáveis a valores."
            ],
            "concept": "Padrões de etapas run",
            "hints": [
                "Separe o local de execução da interpretação do comando.",
                "Procure uma configuração que etapas individuais possam substituir."
            ]
        },
        "actions-015": {
            "prompt": "Uma matriz de estratégia define node: [20, 22]. Qual expressão insere a versão selecionada na entrada de uma ação?",
            "choices": [
                "${{ inputs.node }}",
                "${{ matrix.node }}",
                "${{ strategy.node }}",
                "${{ runner.node }}"
            ],
            "explanations": [
                "inputs refere-se a entradas declaradas do workflow.",
                "matrix expõe os valores da combinação atual.",
                "strategy contém metadados, não eixos personalizados.",
                "runner descreve o ambiente do runner."
            ],
            "concept": "Contexto de matriz",
            "hints": [
                "Cada job expandido tem seus próprios valores dos eixos.",
                "Não confunda metadados de estratégia com dimensões de teste."
            ]
        },
        "actions-016": {
            "prompt": "Uma matriz combina os: [ubuntu-latest, windows-latest] com node: [20, 22]. O que exclude: [{os: windows-latest}] remove?",
            "choices": [
                "Apenas Windows com node 22",
                "As duas combinações node 22",
                "As duas combinações Windows",
                "Apenas Windows com node 20"
            ],
            "explanations": [
                "Nenhum valor node limita esta exclusão a 22.",
                "A exclusão nomeia um SO, não um runtime.",
                "Uma exclusão parcial corresponde a toda combinação desse SO.",
                "Nenhum valor node limita esta exclusão a 20."
            ],
            "concept": "Correspondência de exclusões de matriz",
            "hints": [
                "Avalie apenas os campos presentes na exclusão.",
                "Um padrão parcial pode corresponder a vários jobs."
            ]
        },
        "actions-017": {
            "prompt": "Qual propriedade de estratégia decide se uma falha não tolerada cancela os jobs irmãos da matriz?",
            "choices": [
                "max-parallel",
                "timeout-minutes",
                "continue-on-error",
                "fail-fast"
            ],
            "explanations": [
                "max-parallel limita a execução simultânea da matriz.",
                "timeout-minutes limita a duração da execução.",
                "continue-on-error define tolerância a falhas em jobs ou etapas.",
                "fail-fast controla o cancelamento entre jobs da matriz."
            ],
            "concept": "Política de cancelamento de matriz",
            "hints": [
                "Diferencie tolerar uma falha de cancelar jobs irmãos.",
                "Identifique a configuração dentro de strategy."
            ]
        },
        "actions-018": {
            "prompt": "O que strategy.max-parallel: 2 altera em uma matriz de seis combinações?",
            "choices": [
                "No máximo dois jobs da matriz são executados simultaneamente.",
                "Apenas duas combinações são geradas.",
                "Cada job recebe dois núcleos de CPU.",
                "Cada job pode conter apenas duas etapas."
            ],
            "explanations": [
                "O limite restringe a concorrência, não o tamanho.",
                "As seis combinações permanecem na matriz.",
                "Esta propriedade não aloca hardware ao runner.",
                "A quantidade de etapas não depende da concorrência da matriz."
            ],
            "concept": "Limites de execução de matriz",
            "hints": [
                "Separe o agendamento da expansão.",
                "Um job aguardando ainda pertence à matriz."
            ]
        },
        "actions-019": {
            "prompt": "Um job em contêiner declara services.redis. Qual hostname identifica o serviço a partir do contêiner do job?",
            "choices": [
                "redis",
                "localhost",
                "github.com",
                "host.docker.internal"
            ],
            "explanations": [
                "O rótulo do serviço se torna seu hostname na rede.",
                "localhost refere-se ao próprio contêiner do job.",
                "github.com não é o contêiner do serviço.",
                "Esse alias não é o nome DNS do serviço."
            ],
            "concept": "Rede de contêineres de serviço",
            "hints": [
                "Identifique em qual namespace de rede o cliente é executado.",
                "Rótulos de serviço participam da rede de contêineres."
            ]
        },
        "actions-020": {
            "prompt": "Um job em um runner Linux mapeia o serviço db com ports: [5432]. Qual expressão lê a porta atribuída no host?",
            "choices": [
                "${{ runner.services.db.port }}",
                "${{ env.db.ports[5432] }}",
                "${{ matrix.db.port }}",
                "${{ job.services.db.ports[5432] }}"
            ],
            "explanations": [
                "runner não tem um mapa services neste caminho.",
                "env não recebe a configuração aninhada do serviço.",
                "O mapeamento de portas não é um eixo da matriz.",
                "O contexto job expõe as portas mapeadas do serviço."
            ],
            "concept": "Portas dinâmicas de serviços",
            "hints": [
                "Omitir a porta do host permite atribuição dinâmica.",
                "Procure informações do job em execução."
            ]
        },
        "actions-021": {
            "prompt": "Qual opção do Docker em options de um serviço Redis define sua verificação de prontidão?",
            "choices": [
                "--entrypoint \"redis-cli ping\"",
                "--label \"redis-cli ping\"",
                "--health-cmd \"redis-cli ping\"",
                "--hostname \"redis-cli ping\""
            ],
            "explanations": [
                "entrypoint substitui o comando de inicialização do contêiner.",
                "label adiciona metadados sem executar uma verificação.",
                "Um comando de integridade verifica a prontidão do contêiner.",
                "hostname nomeia o contêiner em vez de verificá-lo."
            ],
            "concept": "Sondas de prontidão de serviços",
            "hints": [
                "Um processo ativo pode ainda não aceitar solicitações.",
                "Diferencie configuração inicial de verificações periódicas."
            ]
        },
        "actions-022": {
            "prompt": "Em runs-on: [self-hosted, linux, ARM64], quais runners são elegíveis?",
            "choices": [
                "Runners correspondentes a qualquer um dos rótulos",
                "Apenas runners Linux hospedados pelo GitHub",
                "Um runner selecionado para cada rótulo",
                "Runners correspondentes aos três rótulos"
            ],
            "explanations": [
                "O array não expressa uma condição OR.",
                "self-hosted exige um runner auto-hospedado.",
                "Rótulos filtram runners; não expandem jobs.",
                "Um array combina os rótulos de forma conjunta."
            ],
            "concept": "Seleção de runners",
            "hints": [
                "Rótulos descrevem capacidades de um runner.",
                "Não interprete rótulos de runners como uma matriz."
            ]
        },
        "actions-023": {
            "prompt": "Onde um workflow pode declarar permissões do GITHUB_TOKEN usado por um job específico?",
            "choices": [
                "on.push.permissions",
                "defaults.run.permissions",
                "jobs.build.permissions",
                "jobs.build.steps.permissions"
            ],
            "explanations": [
                "Filtros de eventos não declaram permissões do token.",
                "Os padrões de run configuram execução, não autorização.",
                "O mapa no nível do job limita as permissões a esse job.",
                "A sequência steps não tem um mapa de permissões do token."
            ],
            "concept": "Escopo da declaração de permissões",
            "hints": [
                "Ajuste o escopo da configuração ao job solicitado.",
                "Gatilhos e acesso do token são independentes."
            ]
        },
        "actions-024": {
            "prompt": "Qual interface de evento agrupa as entradas, os segredos e as saídas declarados de um workflow reutilizável?",
            "choices": [
                "workflow_run",
                "repository_dispatch",
                "workflow_call",
                "workflow_dispatch"
            ],
            "explanations": [
                "workflow_run reage ao ciclo de outra execução.",
                "repository_dispatch recebe eventos personalizados do repositório.",
                "workflow_call define a entrada do workflow reutilizável.",
                "workflow_dispatch fornece uma interface de disparo manual."
            ],
            "concept": "Interfaces de workflows reutilizáveis",
            "hints": [
                "Identifique se o iniciador é um job chamador.",
                "Vários gatilhos descrevem contratos de invocação distintos."
            ]
        },
        "actions-025": {
            "prompt": "Qual tipo é válido para entradas workflow_dispatch, mas não para entradas workflow_call?",
            "choices": [
                "string",
                "choice",
                "boolean",
                "number"
            ],
            "explanations": [
                "string é compatível com ambas as interfaces.",
                "choice pertence à interface de entradas manuais.",
                "boolean é compatível com ambas as interfaces.",
                "number é compatível com ambas as interfaces."
            ],
            "concept": "Tipos de entradas reutilizáveis",
            "hints": [
                "As duas interfaces de invocação têm esquemas distintos.",
                "Um seletor visual não implica um tipo de workflow reutilizável."
            ]
        },
        "actions-026": {
            "prompt": "Um workflow reutilizável declara o segredo registry_key. Qual mapa do job chamador passa secrets.PACKAGE_KEY com esse nome?",
            "choices": [
                "env: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "outputs: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "secrets: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
                "with: {registry_key: '${{ secrets.PACKAGE_KEY }}'}"
            ],
            "explanations": [
                "env do chamador não é a interface de segredos reutilizáveis.",
                "outputs publica resultados em vez de passar segredos.",
                "secrets associa o valor ao segredo declarado.",
                "with passa entradas, não segredos declarados."
            ],
            "concept": "Mapeamento explícito de segredos",
            "hints": [
                "Mantenha separadas as interfaces de entradas e segredos.",
                "Use o nome do parâmetro declarado pelo workflow chamado."
            ]
        },
        "actions-027": {
            "prompt": "Um workflow reutilizável declara uma entrada string chamada region. Qual campo do job chamador fornece region: west?",
            "choices": [
                "with: {region: west}",
                "inputs: {region: west}",
                "env: {region: west}",
                "defaults: {region: west}"
            ],
            "explanations": [
                "with fornece valores às entradas declaradas do workflow.",
                "inputs não é o campo de argumentos do job chamador.",
                "A propagação de ambiente não é esse contrato de entradas.",
                "defaults não passa argumentos para workflows reutilizáveis."
            ],
            "concept": "Entrega de entradas do chamador",
            "hints": [
                "Uma declaração e um argumento usam locais distintos.",
                "O chamador fornece valores; o chamado declara tipos."
            ]
        },
        "actions-028": {
            "prompt": "Qual seção expõe o resultado de um job do workflow chamado como saída para o chamador?",
            "choices": [
                "defaults.run.outputs",
                "on.workflow_call.outputs",
                "on.workflow_call.inputs",
                "jobs.build.strategy"
            ],
            "explanations": [
                "Os padrões de run não declaram saídas.",
                "Essa interface associa saídas de jobs a saídas do workflow.",
                "inputs declara valores de entrada, não resultados de saída.",
                "strategy controla expansão e agendamento de jobs."
            ],
            "concept": "Interfaces de saídas de workflows",
            "hints": [
                "Acompanhe o limite entre dois workflows.",
                "Uma saída interna de job precisa de uma interface externa."
            ]
        },
        "actions-029": {
            "prompt": "Um mapa env tem a âncora &shared. Qual forma repete esse mapa completo em outro local sem usar uma chave de mesclagem?",
            "choices": [
                "env: '${{ shared }}'",
                "env: *shared",
                "env: &shared",
                "env: '$shared'"
            ],
            "explanations": [
                "Expressões do Actions não referenciam âncoras YAML.",
                "O alias repete o mapa ancorado anteriormente.",
                "O e comercial define uma âncora em vez de referenciá-la.",
                "É uma string escalar, não um alias YAML."
            ],
            "concept": "Aliases YAML de mapas completos",
            "hints": [
                "Separe o processamento YAML da avaliação de expressões.",
                "Definir conteúdo reutilizável é diferente de referenciá-lo."
            ]
        },
        "actions-030": {
            "prompt": "Qual contexto fornece o nome owner/repository antes de um job iniciar?",
            "choices": [
                "runner.repository",
                "job.repository",
                "steps.repository",
                "github.repository"
            ],
            "explanations": [
                "runner descreve um ambiente de execução atribuído.",
                "job não define essa propriedade de repositório.",
                "steps contém resultados de etapas, não a identidade do repositório.",
                "github fornece metadados do repositório e do evento."
            ],
            "concept": "Disponibilidade de contextos do workflow",
            "hints": [
                "Alguns metadados existem antes da alocação do runner.",
                "Diferencie a identidade do repositório da identidade da máquina."
            ]
        },
        "actions-031": {
            "prompt": "Uma variável de configuração do repositório chama-se BUILD_MODE. Qual expressão a lê?",
            "choices": [
                "${{ github.BUILD_MODE }}",
                "${{ inputs.BUILD_MODE }}",
                "${{ vars.BUILD_MODE }}",
                "${{ env.vars.BUILD_MODE }}"
            ],
            "explanations": [
                "Variáveis personalizadas não são propriedades de github.",
                "inputs contém entradas de invocação, não variáveis do repositório.",
                "vars expõe as variáveis de configuração.",
                "env não contém o contexto vars aninhado."
            ],
            "concept": "Variáveis de configuração",
            "hints": [
                "Identifique como o valor foi configurado.",
                "Nomes semelhantes podem pertencer a contextos distintos."
            ]
        },
        "actions-032": {
            "prompt": "Qual função de expressão converte um objeto em uma string JSON para inspeção?",
            "choices": [
                "join()",
                "toJSON()",
                "fromJSON()",
                "format()"
            ],
            "explanations": [
                "join combina elementos de um array em texto.",
                "toJSON serializa valores estruturados de expressões.",
                "fromJSON interpreta JSON na direção oposta.",
                "format substitui marcadores em uma string de formato."
            ],
            "concept": "Serialização de dados de contexto",
            "hints": [
                "Determine os tipos de entrada e saída da conversão.",
                "Serializar é diferente de interpretar."
            ]
        },
        "actions-033": {
            "prompt": "Qual entrada de upload-artifact seleciona os arquivos a enviar, como dist/*.zip?",
            "choices": [
                "name",
                "retention-days",
                "if-no-files-found",
                "path"
            ],
            "explanations": [
                "name rotula o artefato resultante.",
                "retention-days seleciona a duração do armazenamento.",
                "if-no-files-found controla o tratamento de arquivos ausentes.",
                "path seleciona o conteúdo do sistema de arquivos."
            ],
            "concept": "Caminhos de artefatos",
            "hints": [
                "Separe o rótulo do artefato de seu conteúdo.",
                "Um padrão glob descreve a seleção de arquivos."
            ]
        },
        "actions-034": {
            "prompt": "Qual expressão produz um hash dos arquivos de lock correspondentes para uma chave de cache?",
            "choices": [
                "${{ format('**/package-lock.json') }}",
                "${{ hashFiles('**/package-lock.json') }}",
                "${{ toJSON('**/package-lock.json') }}",
                "${{ contains('**/package-lock.json', 'lock') }}"
            ],
            "explanations": [
                "format retorna texto formatado, não um hash de arquivo.",
                "hashFiles calcula o hash do conteúdo dos arquivos correspondentes.",
                "toJSON serializa a string do padrão.",
                "contains verifica texto, não o conteúdo dos arquivos."
            ],
            "concept": "Expressões de hash de arquivos",
            "hints": [
                "Uma chave de cache pode incorporar valores derivados.",
                "Encontrar nomes e calcular hashes são operações distintas."
            ]
        },
        "actions-035": {
            "prompt": "Qual entrada de cache fornece prefixos ordenados para tentar quando a chave principal não corresponde?",
            "choices": [
                "restore-keys",
                "path",
                "cache-hit",
                "retention-days"
            ],
            "explanations": [
                "restore-keys define prefixos de chaves alternativas.",
                "path identifica arquivos ou diretórios armazenados em cache.",
                "cache-hit é uma saída que descreve a busca.",
                "retention-days não é a entrada de chaves alternativas."
            ],
            "concept": "Chaves alternativas de cache",
            "hints": [
                "Separe entradas e resultados da busca.",
                "A ordem expressa preferência entre correspondências parciais."
            ]
        },
        "actions-036": {
            "prompt": "No Bash, qual comando adiciona um título Markdown ao resumo do job desta etapa?",
            "choices": [
                "echo \"## Tests\" >> \"$GITHUB_STEP_SUMMARY\"",
                "echo \"## Tests\" >> \"$GITHUB_OUTPUT\"",
                "echo \"## Tests\" >> \"$GITHUB_ENV\"",
                "echo \"## Tests\" >> \"$GITHUB_STATE\""
            ],
            "explanations": [
                "O arquivo de resumo aceita conteúdo Markdown.",
                "Um arquivo de saídas espera atribuições nomeadas.",
                "Um arquivo de ambiente espera atribuições de variáveis.",
                "State transporta valores do ciclo de vida, não resumos visíveis."
            ],
            "concept": "Resumos Markdown de jobs",
            "hints": [
                "Decida se o resultado é dado ou apresentação.",
                "Os arquivos do runner aceitam conteúdos distintos."
            ]
        },
        "actions-037": {
            "prompt": "O que acontece com os artefatos armazenados quando sua execução de workflow é excluída?",
            "choices": [
                "Eles são anexados à última execução bem-sucedida.",
                "Os artefatos também são excluídos.",
                "Eles se tornam recursos de uma release do repositório.",
                "Eles são movidos para o cache de dependências."
            ],
            "explanations": [
                "Os artefatos não são reatribuídos a outra execução.",
                "Os artefatos estão vinculados à execução excluída.",
                "A exclusão não cria recursos de release.",
                "Artefatos e caches têm ciclos de armazenamento distintos."
            ],
            "concept": "Ciclo de vida de artefatos",
            "hints": [
                "Considere qual objeto possui os arquivos armazenados.",
                "Um artefato de execução não é um recurso permanente de release."
            ]
        },
        "actions-038": {
            "prompt": "Uma etapa run com Bash deve executar npm test em packages/web. Qual propriedade da etapa define esse local?",
            "choices": [
                "path: packages/web",
                "runs-on: packages/web",
                "shell: packages/web",
                "working-directory: packages/web"
            ],
            "explanations": [
                "path não é a propriedade de diretório da etapa run.",
                "runs-on seleciona runners no nível do job.",
                "shell seleciona um interpretador de comandos.",
                "working-directory seleciona o diretório inicial do comando."
            ],
            "concept": "Diretórios de trabalho de etapas",
            "hints": [
                "Diferencie o shell de seu diretório atual.",
                "O diretório deve existir quando a etapa iniciar."
            ]
        },
        "actions-039": {
            "prompt": "Qual caminho de configuração deve ter o valor 20 para limitar todo o job build a vinte minutos?",
            "choices": [
                "jobs.build.timeout-minutes",
                "jobs.build.steps[0].timeout-minutes",
                "jobs.build.strategy.max-parallel",
                "jobs.build.defaults.run.timeout"
            ],
            "explanations": [
                "O tempo limite do job abrange sua execução.",
                "O tempo limite da etapa abrange apenas essa etapa.",
                "max-parallel limita concorrência da matriz, não duração.",
                "Essa não é uma propriedade compatível de tempo limite de run."
            ],
            "concept": "Escopo do tempo limite do job",
            "hints": [
                "Ajuste o aninhamento ao escopo desejado.",
                "Concorrência e tempo decorrido são limites distintos."
            ]
        },
        "actions-040": {
            "prompt": "Qual chave de etapa invoca uma ação em vez de executar um comando de shell?",
            "choices": [
                "uses",
                "run",
                "shell",
                "needs"
            ],
            "explanations": [
                "uses identifica a ação a executar.",
                "run contém comandos interpretados por um shell.",
                "shell seleciona o interpretador dos comandos run.",
                "needs estabelece dependências no nível do job."
            ],
            "concept": "Etapas de ação e de shell",
            "hints": [
                "Uma etapa tem formas alternativas de execução.",
                "Não confunda a referência de uma ação com suas entradas."
            ]
        },
        "actions-041": {
            "prompt": "Qual propriedade do job build registra sua implantação no ambiente preview?",
            "choices": [
                "deployment: preview",
                "environment: preview",
                "env: {name: preview}",
                "name: preview"
            ],
            "explanations": [
                "deployment não é essa propriedade do esquema do job.",
                "environment vincula o job ao ambiente indicado.",
                "env cria uma variável name, não um destino de implantação.",
                "name altera o nome de exibição do job."
            ],
            "concept": "Vinculação de ambientes",
            "hints": [
                "Variáveis de ambiente e ambientes de implantação diferem.",
                "A configuração pertence à definição do job."
            ]
        },
        "actions-042": {
            "prompt": "Qual parâmetro restringe um badge de status do Actions a execuções disparadas por push?",
            "choices": [
                "event=push",
                "branch=push",
                "workflow=push",
                "status=push"
            ],
            "explanations": [
                "event filtra o badge pelo evento disparador.",
                "branch selecionaria uma branch chamada push.",
                "O arquivo do workflow fica no caminho da URL do badge.",
                "push é um evento, não uma conclusão."
            ],
            "concept": "Eventos em badges de workflows",
            "hints": [
                "Filtros de badges diferenciam referências de eventos.",
                "Leia o nome do parâmetro além de seu valor."
            ]
        },
        "actions-043": {
            "prompt": "Qual configuração de push seleciona tags que começam com v sem selecionar pushes de branches?",
            "choices": [
                "types: [tagged]",
                "tags: ['v*']",
                "branches: ['v*']",
                "paths: ['v*']"
            ],
            "explanations": [
                "tagged não é um filtro de atividade push compatível.",
                "Um filtro apenas de tags seleciona referências de tags correspondentes.",
                "branches seleciona referências de branches, não tags.",
                "paths seleciona arquivos alterados, não nomes de tags."
            ],
            "concept": "Filtragem de pushes de tags",
            "hints": [
                "Uma referência de tag difere do commit para o qual aponta.",
                "Selecione a família de referências antes do padrão."
            ]
        },
        "actions-044": {
            "prompt": "Um workflow usa issues: {types: [labeled]}. Qual ocorrência o dispara?",
            "choices": [
                "Um rótulo do repositório é renomeado.",
                "O título de uma issue é editado.",
                "Um rótulo é removido de uma issue.",
                "Um rótulo é adicionado a uma issue."
            ],
            "explanations": [
                "Alterações de rótulos do repositório usam outro evento.",
                "Editar o título corresponde à atividade edited.",
                "A remoção corresponde à atividade unlabeled.",
                "labeled descreve adicionar um rótulo a uma issue."
            ],
            "concept": "Atividades de issues",
            "hints": [
                "Separe definições de rótulos de suas atribuições.",
                "Tipos de atividade diferenciam adição de remoção."
            ]
        },
        "actions-045": {
            "prompt": "De qual branch é usada a definição do workflow em uma execução agendada?",
            "choices": [
                "A branch atual do editor de workflows",
                "Cada branch que contém esse workflow",
                "A branch padrão do repositório",
                "A branch com o push mais recente"
            ],
            "explanations": [
                "Uma sessão do editor não determina a execução agendada.",
                "Um agendamento não se distribui entre todas as branches.",
                "Eventos agendados são executados na branch padrão.",
                "O push mais recente não seleciona a referência agendada."
            ],
            "concept": "Revisão de workflows agendados",
            "hints": [
                "O agendamento tem uma regra de branch no nível do repositório.",
                "Não deduza a referência da execução pela atividade de edição."
            ]
        },
        "actions-046": {
            "prompt": "A variável de string env.RETRY_LIMIT contém '4'. Qual expressão a converte em número para comparação numérica?",
            "choices": [
                "${{ fromJSON(env.RETRY_LIMIT) }}",
                "${{ toJSON(env.RETRY_LIMIT) }}",
                "${{ format('{0}', env.RETRY_LIMIT) }}",
                "${{ contains(env.RETRY_LIMIT, '4') }}"
            ],
            "explanations": [
                "fromJSON converte esse texto JSON numérico em número.",
                "toJSON serializa o valor de string existente.",
                "format retorna uma string formatada.",
                "contains retorna um booleano de pertencimento."
            ],
            "concept": "Conversão explícita de strings",
            "hints": [
                "Valores de ambiente normalmente chegam como texto.",
                "Escolha uma conversão que produza o tipo necessário."
            ]
        },
        "actions-047": {
            "prompt": "Uma matriz tem node: [20, 22]. O que include: [{node: 22, experimental: true}] adiciona à combinação existente node 22?",
            "choices": [
                "Uma terceira versão de node",
                "Uma exclusão de node 20",
                "Um campo experimental: true",
                "Um job node 22 duplicado"
            ],
            "explanations": [
                "Nenhum novo valor node aparece na entrada.",
                "include não exclui a outra combinação original.",
                "A entrada amplia uma combinação original compatível.",
                "Dados compatíveis de include são adicionados à combinação original."
            ],
            "concept": "Include aditivo de matriz",
            "hints": [
                "Verifique se valores existentes dos eixos seriam sobrescritos.",
                "Metadados adicionais não precisam criar jobs adicionais."
            ]
        },
        "actions-048": {
            "prompt": "Onde um arquivo de workflow reutilizável deve ficar em seu repositório?",
            "choices": [
                "Dentro de .github/actions/shared/",
                "Diretamente em .github/workflows/",
                "Dentro de .github/workflows/shared/",
                "Diretamente em workflow-templates/"
            ],
            "explanations": [
                "Um diretório de ações não define um workflow reutilizável.",
                "Workflows reutilizáveis usam este diretório sem subdiretórios.",
                "Subdiretórios não são compatíveis com esses arquivos de workflow.",
                "Esse é um local de modelos, não de workflows invocáveis."
            ],
            "concept": "Localização de workflows reutilizáveis",
            "hints": [
                "Workflows reutilizáveis mantêm as regras de localização de workflows.",
                "Um workflow invocável não é um pacote de ação."
            ]
        },
        "actions-049": {
            "prompt": "No Bash, qual valor deve ser adicionado a GITHUB_PATH para que etapas posteriores encontrem /opt/tools/bin/report como report?",
            "choices": [
                "report=/opt/tools/bin/report",
                "/opt/tools/bin",
                "/opt/tools/bin/report",
                "PATH=/opt/tools/bin"
            ],
            "explanations": [
                "Essa sintaxe não cria um alias de shell.",
                "Entradas de PATH contêm diretórios de busca de executáveis.",
                "O caminho do executável não é um diretório de busca.",
                "GITHUB_PATH aceita diretórios, não atribuições de variáveis."
            ],
            "concept": "Caminhos de busca de comandos",
            "hints": [
                "A busca de comandos percorre diretórios, não arquivos.",
                "Use o formato de arquivo exigido pelo runner."
            ]
        },
        "actions-050": {
            "prompt": "A fase pre de uma ação salva tempdir=/work/item por GITHUB_STATE. Qual variável lê esse valor na fase post da mesma ação?",
            "choices": [
                "INPUT_tempdir",
                "OUTPUT_tempdir",
                "GITHUB_tempdir",
                "STATE_tempdir"
            ],
            "explanations": [
                "INPUT_ refere-se a entradas, não ao estado do ciclo de vida.",
                "Saídas não se tornam variáveis OUTPUT_ do ciclo.",
                "GITHUB_ não é o prefixo do estado salvo.",
                "O estado salvo usa o prefixo STATE_ nessa ação."
            ],
            "concept": "Estado do ciclo de vida de ações",
            "hints": [
                "O estado fica restrito à ação que o salvou.",
                "A comunicação entre fases difere das saídas do workflow."
            ]
        },
        "actions-051": {
            "prompt": "Qual chave de nível superior rotula o workflow na barra lateral Actions, em vez de nomear uma execução específica?",
            "choices": [
                "name",
                "run-name",
                "jobs",
                "id"
            ],
            "explanations": [
                "name é o rótulo de exibição do workflow.",
                "run-name rotula execuções individuais do workflow.",
                "jobs declara o grafo de jobs executáveis.",
                "id não é o campo de nome de exibição do workflow."
            ],
            "concept": "Rótulos de workflows",
            "hints": [
                "Separe a definição do workflow de uma execução.",
                "Rótulos de exibição e identificadores diferem."
            ]
        },
        "actions-052": {
            "prompt": "Em um push para a branch feature/parser, qual propriedade github contém feature/parser sem refs/heads/?",
            "choices": [
                "github.ref_name",
                "github.ref",
                "github.sha",
                "github.ref_type"
            ],
            "explanations": [
                "ref_name é o nome curto da branch ou tag.",
                "ref inclui o prefixo completo da referência.",
                "sha é o identificador do commit, não a branch.",
                "ref_type diferencia branch de tag."
            ],
            "concept": "Formas de nomes de referências",
            "hints": [
                "Metadados podem descrever identidade, tipo ou apresentação.",
                "Compare referências completas com nomes curtos."
            ]
        },
        "actions-053": {
            "prompt": "MODE é definida apenas no mapa env de uma etapa. Onde essa definição fica diretamente disponível?",
            "choices": [
                "Em todas as etapas posteriores",
                "Em todos os jobs do workflow",
                "Nos workflows chamados depois",
                "Dentro dessa etapa"
            ],
            "explanations": [
                "env da etapa não persiste automaticamente em etapas posteriores.",
                "Um valor da etapa não se torna global ao workflow.",
                "Workflows chamados não herdam o mapa env desta etapa.",
                "Um mapa env de etapa aplica-se a essa etapa."
            ],
            "concept": "Escopo de ambiente de etapas",
            "hints": [
                "O aninhamento da configuração determina o escopo.",
                "A persistência exige um mecanismo além da configuração local."
            ]
        },
        "actions-054": {
            "prompt": "Qual forma YAML coloca dois comandos Bash em uma etapa run preservando a quebra de linha?",
            "choices": [
                "uses: |\n  echo first\n  echo second",
                "run: |\n  echo first\n  echo second",
                "run: >\n  echo first\n  echo second",
                "run: [echo first, echo second]"
            ],
            "explanations": [
                "uses espera uma referência de ação, não comandos shell.",
                "O bloco literal preserva a quebra de linha entre comandos.",
                "O bloco dobrado une essas linhas em uma linha de comando.",
                "run espera uma string, não uma sequência YAML."
            ],
            "concept": "Scripts shell de várias linhas",
            "hints": [
                "Considere os estilos escalares YAML antes da execução shell.",
                "Preservar duas linhas é diferente de unir seu texto."
            ]
        },
        "actions-055": {
            "prompt": "Uma etapa que falha tem id: probe e continue-on-error: true. Qual propriedade informa a falha original antes da aplicação da tolerância?",
            "choices": [
                "job.status",
                "needs.probe.result",
                "steps.probe.outcome",
                "steps.probe.conclusion"
            ],
            "explanations": [
                "job.status descreve o job, não o resultado bruto da etapa.",
                "needs consulta jobs, mas probe identifica uma etapa.",
                "outcome registra o resultado anterior à tolerância.",
                "conclusion reflete o resultado após continue-on-error."
            ],
            "concept": "Falhas toleradas de etapas",
            "hints": [
                "O tratamento de falhas pode transformar a conclusão.",
                "Diferencie as evidências da etapa do status do job."
            ]
        },
        "actions-056": {
            "prompt": "Com GitHub CLI na cópia local do repositório, qual comando lista as execuções de ci.yml?",
            "choices": [
                "gh run list --workflow ci.yml",
                "gh workflow list --all",
                "gh run view ci.yml",
                "gh workflow view ci.yml --yaml"
            ],
            "explanations": [
                "run list filtra o histórico por workflow.",
                "workflow list enumera definições, não suas execuções.",
                "run view espera uma execução, não esse nome de arquivo.",
                "workflow view --yaml exibe a definição do workflow."
            ],
            "concept": "Busca de execuções pela CLI",
            "hints": [
                "Diferencie definições de workflows do histórico de execução.",
                "Um arquivo de workflow pode filtrar uma lista de execuções."
            ]
        },
        "actions-057": {
            "prompt": "Qual segredo do Actions com valor true habilita mensagens adicionais de depuração de etapas nas próximas execuções?",
            "choices": [
                "ACTIONS_RUNNER_DEBUG",
                "RUNNER_DEBUG",
                "ACTIONS_DEBUG",
                "ACTIONS_STEP_DEBUG"
            ],
            "explanations": [
                "Essa configuração habilita arquivos de diagnóstico do runner.",
                "RUNNER_DEBUG indica ao código que o modo de depuração está ativo.",
                "ACTIONS_DEBUG não é a opção documentada para etapas.",
                "Essa configuração habilita depuração detalhada de etapas."
            ],
            "concept": "Configuração de depuração de etapas",
            "hints": [
                "Diferencie detalhes de etapas de diagnósticos do runner.",
                "O nome documentado deve corresponder exatamente."
            ]
        },
        "actions-058": {
            "prompt": "Com ACTIONS_RUNNER_DEBUG=true, onde procurar os diagnósticos do processo do runner após baixar os logs?",
            "choices": [
                "Os recursos de release do repositório",
                "O resumo Markdown do workflow",
                "A pasta runner-diagnostic-logs",
                "O cache de dependências enviado"
            ],
            "explanations": [
                "A depuração do runner não publica recursos de release.",
                "Esses logs de processos não são exibidos como resumo.",
                "Os diagnósticos são incluídos nessa pasta do arquivo.",
                "Caches armazenam arquivos selecionados, não esses diagnósticos."
            ],
            "concept": "Arquivos de diagnóstico do runner",
            "hints": [
                "O arquivo baixado pode conter mais que saídas de etapas.",
                "Os arquivos de depuração têm um local específico."
            ]
        },
        "actions-059": {
            "prompt": "Para a execução 731, qual comando do GitHub CLI corresponde a Re-run failed jobs em Actions em inglês?",
            "choices": [
                "gh run rerun 731",
                "gh run watch 731 --exit-status",
                "gh run view 731 --log-failed",
                "gh run rerun 731 --failed"
            ],
            "explanations": [
                "Sem a opção, solicita repetir a execução completa.",
                "watch observa uma execução sem tentar jobs novamente.",
                "view lê logs de etapas com falha sem iniciar execução.",
                "A opção failed seleciona jobs com falha para nova tentativa."
            ],
            "concept": "Novas tentativas de jobs com falha pela CLI",
            "hints": [
                "Observar e tentar novamente são operações distintas.",
                "Verifique a opção que restringe o escopo da nova tentativa."
            ]
        },
        "actions-060": {
            "prompt": "Qual comando do GitHub CLI imprime apenas os logs de etapas com falha da execução concluída 731?",
            "choices": [
                "gh run download 731",
                "gh run view 731 --log-failed",
                "gh run view 731 --log",
                "gh run list --status failure"
            ],
            "explanations": [
                "download obtém artefatos, não logs de console.",
                "log-failed restringe a saída a etapas com falha.",
                "log imprime logs de mais etapas que as com falha.",
                "list retorna histórico, não conteúdo de logs de etapas."
            ],
            "concept": "Logs de etapas com falha pela CLI",
            "hints": [
                "A conclusão de uma execução não é o texto do erro.",
                "Escolha uma leitura com a granularidade solicitada."
            ]
        },
        "actions-061": {
            "prompt": "Um script deve aguardar a execução 731 e retornar falha se ela falhar. Qual comando do GitHub CLI atende ao requisito?",
            "choices": [
                "gh run watch 731 --exit-status",
                "gh run view 731 --log-failed",
                "gh run list --limit 1",
                "gh run rerun 731 --failed"
            ],
            "explanations": [
                "watch aguarda e exit-status propaga a falha.",
                "view lê dados atuais em vez de aguardar a conclusão.",
                "list retorna um retrato sem aguardar a conclusão.",
                "rerun solicita execução, não monitora esta tentativa."
            ],
            "concept": "Monitoramento de execuções pela CLI",
            "hints": [
                "Aguardar e propagar um resultado são requisitos distintos.",
                "Não confunda observar com iniciar outra tentativa."
            ]
        },
        "actions-062": {
            "prompt": "Qual comando do GitHub CLI baixa apenas o artefato coverage da execução 731?",
            "choices": [
                "gh run list --workflow coverage",
                "gh run watch 731 --interval 5",
                "gh run download 731 --name coverage",
                "gh run view 731 --job coverage"
            ],
            "explanations": [
                "Um filtro de workflow retorna histórico, não arquivos.",
                "watch observa o status e não obtém artefatos.",
                "download com name seleciona o artefato indicado.",
                "Um seletor de job não baixa arquivos de artefatos."
            ],
            "concept": "Seleção de artefatos pela CLI",
            "hints": [
                "O nome do artefato difere do ID do job.",
                "Selecione tanto a execução quanto o resultado armazenado."
            ]
        },
        "actions-063": {
            "prompt": "A branch padrão contém um workflow workflow_dispatch chamado audit.yml. Qual comando do GitHub CLI o inicia na branch staging?",
            "choices": [
                "gh run list --workflow audit.yml --branch staging",
                "gh workflow run audit.yml --ref staging",
                "gh run rerun audit.yml --branch staging",
                "gh workflow view audit.yml --ref staging"
            ],
            "explanations": [
                "list lê o histórico sem criar uma execução.",
                "workflow run dispara usando a referência selecionada.",
                "rerun aponta para uma execução existente, não para esse arquivo.",
                "view exibe um workflow sem dispará-lo."
            ],
            "concept": "Invocação manual pela CLI",
            "hints": [
                "Iniciar uma nova execução difere de tentar novamente um ID.",
                "A seleção da referência faz parte do disparo."
            ]
        },
        "actions-064": {
            "prompt": "Qual comando do GitHub CLI desabilita ci.yml sem excluir seu arquivo YAML?",
            "choices": [
                "gh run delete ci.yml",
                "gh workflow disable ci.yml",
                "gh run cancel ci.yml",
                "gh workflow view ci.yml"
            ],
            "explanations": [
                "delete exclui uma execução selecionada por ID.",
                "disable altera o estado de habilitação do workflow.",
                "cancel aponta para uma execução, não para uma definição de workflow.",
                "view lê a definição sem alterar seu estado."
            ],
            "concept": "Suspensão de workflows pela CLI",
            "hints": [
                "Um workflow e uma de suas execuções têm ciclos distintos.",
                "A suspensão deve preservar a configuração para reutilização."
            ]
        },
        "actions-065": {
            "prompt": "Qual condição de um repositório público pode desabilitar automaticamente workflows agendados?",
            "choices": [
                "Sem atividade no repositório por 60 dias",
                "Sem execuções bem-sucedidas por 7 dias",
                "Sem pull requests abertos por 30 dias",
                "Sem novas releases por 90 dias"
            ],
            "explanations": [
                "A regra documentada de inatividade aplica-se a agendamentos públicos.",
                "O histórico de sucesso não é esse critério de inatividade.",
                "A quantidade de pull requests abertos não é esse critério.",
                "A frequência de releases não é esse critério de inatividade."
            ],
            "concept": "Workflows agendados inativos",
            "hints": [
                "Procure atividade do repositório, não resultados de testes.",
                "Essa regra trata de automação agendada em repositórios públicos."
            ]
        },
        "actions-066": {
            "prompt": "Uma etapa Bash do Linux executa apenas echo '::error::Missing report' e termina normalmente. O que esse comando faz por si só?",
            "choices": [
                "Cancela todos os jobs restantes do workflow",
                "Tenta a etapa novamente após registrar uma anotação",
                "Cria uma anotação de erro sem código de saída de falha",
                "Cria uma mensagem de depuração e faz a etapa falhar"
            ],
            "explanations": [
                "Uma anotação não cancela os jobs do workflow.",
                "Comandos de workflow não tentam etapas novamente implicitamente.",
                "Uma anotação não altera por si só o status de saída do Bash.",
                "error é um comando de anotação, não de depuração."
            ],
            "concept": "Anotações de erro e códigos de saída",
            "hints": [
                "Separe a gravidade visível do encerramento do processo.",
                "O status de saída ainda determina o sucesso do comando."
            ]
        },
        "actions-067": {
            "prompt": "Qual par de comandos de workflow cria uma seção recolhível no log de um job?",
            "choices": [
                "::group::Details / ::endgroup::",
                "::debug::Details / ::enddebug::",
                "::notice::Details / ::endnotice::",
                "::warning::Details / ::endwarning::"
            ],
            "explanations": [
                "group e endgroup delimitam uma região recolhível do log.",
                "Mensagens debug não usam esse comando de encerramento.",
                "Anotações notice não definem regiões recolhíveis.",
                "Anotações warning não definem regiões recolhíveis."
            ],
            "concept": "Grupos de logs recolhíveis",
            "hints": [
                "A organização do log difere da gravidade das anotações.",
                "Uma região delimitada precisa de marcas de abertura e fechamento."
            ]
        },
        "actions-068": {
            "prompt": "Qual rota REST lista os artefatos de run_id em owner/repo?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
                "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/zip",
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
            ],
            "explanations": [
                "Essa rota baixa logs em vez de listar artefatos.",
                "Essa rota lista execuções, não artefatos armazenados.",
                "Essa rota baixa um artefato já identificado.",
                "Essa rota lista artefatos de uma execução."
            ],
            "concept": "Listagem REST de artefatos da execução",
            "hints": [
                "Escolha o tipo de recurso antes da operação.",
                "O identificador conhecido da execução deve limitar a listagem."
            ]
        },
        "actions-069": {
            "prompt": "Um cliente autenticado pode acessar o artefato 82. Qual rota REST solicita seu download ZIP?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/artifacts/82",
                "GET /repos/{owner}/{repo}/actions/artifacts/82/zip",
                "GET /repos/{owner}/{repo}/actions/runs/82/logs",
                "GET /repos/{owner}/{repo}/zipball/82"
            ],
            "explanations": [
                "Essa rota obtém metadados, não o arquivo do artefato.",
                "O sufixo de formato solicita o download do artefato.",
                "Essa rota trata 82 como ID de execução e obtém logs.",
                "zipball obtém arquivos de código-fonte, não artefatos do Actions."
            ],
            "concept": "Downloads REST de artefatos",
            "hints": [
                "Separe arquivos de resultados de arquivos de código-fonte.",
                "Um ID de artefato não é um ID de execução."
            ]
        },
        "actions-070": {
            "prompt": "Qual rota REST solicita o arquivo de logs da execução 731?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/workflows/731",
                "GET /repos/{owner}/{repo}/contents/731",
                "GET /repos/{owner}/{repo}/actions/runs/731/logs",
                "GET /repos/{owner}/{repo}/actions/runs/731/artifacts"
            ],
            "explanations": [
                "A rota workflow trata 731 como identificador de workflow.",
                "A rota contents lê arquivos do repositório.",
                "A rota logs da execução solicita seus logs.",
                "A rota artifacts lista arquivos de resultados enviados."
            ],
            "concept": "Arquivos de logs REST",
            "hints": [
                "A saída do console é separada dos artefatos enviados.",
                "Use o recurso de execução, não o de definição."
            ]
        },
        "actions-071": {
            "prompt": "Na interface de logs do GitHub em inglês, em quais etapas Search logs faz a busca?",
            "choices": [
                "Apenas etapas cuja conclusão é failure",
                "Todas as execuções históricas desse workflow",
                "Etapas expandidas do log exibido",
                "Todas as etapas de todos os jobs da execução"
            ],
            "explanations": [
                "O escopo depende da expansão, não apenas da falha.",
                "Essa busca não consulta execuções históricas.",
                "Apenas etapas expandidas participam dessa busca.",
                "A busca não abrange todos os jobs automaticamente."
            ],
            "concept": "Escopo da busca de logs na interface",
            "hints": [
                "Verifique qual conteúdo a interface expõe no momento.",
                "A busca visual pode abranger menos que o arquivo baixado."
            ]
        },
        "actions-072": {
            "prompt": "Qual seção do log em inglês contém o link para o inventário de software da imagem do runner hospedado realmente usada?",
            "choices": [
                "Post job cleanup",
                "Set up job",
                "Complete job",
                "Run actions/checkout"
            ],
            "explanations": [
                "A limpeza não estabelece o inventário inicial da imagem.",
                "Set up job inclui informações do software da imagem.",
                "Complete job registra a conclusão, não o inventário inicial.",
                "Checkout obtém o repositório, não o inventário da imagem."
            ],
            "concept": "Evidências do runner hospedado",
            "hints": [
                "Use evidências da execução específica.",
                "Um rótulo móvel de runner não é um inventário imutável."
            ]
        },
        "actions-073": {
            "prompt": "Um repositório precisa de um arquivo CI inicial que seus mantenedores personalizarão de forma independente. Qual mecanismo atende?",
            "choices": [
                "Uma referência a ação composta",
                "Uma restauração de cache de dependências",
                "Um modelo de workflow",
                "Um workflow reutilizável chamado"
            ],
            "explanations": [
                "Uma ação composta agrupa etapas, não cria o arquivo inicial.",
                "Um cache restaura arquivos, não gera a configuração do workflow.",
                "Um modelo cria um workflow editável de forma independente.",
                "Uma chamada reutilizável executa lógica compartilhada sem copiá-la."
            ],
            "concept": "Escolha de modelos de workflows",
            "hints": [
                "Decida se a reutilização consiste em copiar ou chamar.",
                "A personalização independente muda o modelo adequado."
            ]
        },
        "actions-074": {
            "prompt": "Vários workflows precisam das mesmas três etapas de preparação em seus jobs existentes, sem jobs adicionais. Qual componente atende?",
            "choices": [
                "Uma cópia de modelo de workflow",
                "Um evento agendado do repositório",
                "Uma ação composta",
                "Um workflow reutilizável de vários jobs"
            ],
            "explanations": [
                "Um modelo copia configuração em vez de compartilhar etapas executáveis.",
                "Um evento determina quando executar, não como agrupar etapas.",
                "Uma ação composta executa etapas agrupadas no job chamador.",
                "Um workflow reutilizável é invocado no nível do job."
            ],
            "concept": "Escolha de ações compostas",
            "hints": [
                "Ajuste o limite de reutilização: etapas, jobs ou arquivos.",
                "Considere se o runner existente deve continuar executando."
            ]
        },
        "actions-075": {
            "prompt": "Ao lado de workflow-templates/ci.yml, qual arquivo fornece o nome e a descrição do modelo no repositório .github de uma organização?",
            "choices": [
                "workflow-templates/ci.action.yml",
                "workflow-templates/ci.package.json",
                "workflow-templates/ci.workflow.json",
                "workflow-templates/ci.properties.json"
            ],
            "explanations": [
                "Metadados de ações não descrevem o modelo de workflow.",
                "Um manifesto de pacote não é esse arquivo de metadados.",
                "Esse não é o sufixo documentado do descritor de modelo.",
                "O arquivo properties.json correspondente contém os metadados."
            ],
            "concept": "Metadados de modelos de workflows",
            "hints": [
                "O descritor corresponde ao nome base do workflow.",
                "Metadados de exibição do modelo são separados do YAML executável."
            ]
        },
        "actions-076": {
            "prompt": "Um mantenedor abre um workflow desabilitado em Actions em inglês. Qual controle restaura a execução por eventos sem reescrever YAML?",
            "choices": [
                "Cancel workflow",
                "Enable workflow",
                "Re-run all jobs",
                "Delete workflow run"
            ],
            "explanations": [
                "Cancelar interrompe uma execução em vez de habilitar futuras execuções.",
                "Enable workflow restaura o estado ativo do workflow.",
                "Uma nova tentativa repete uma execução, não habilita a definição.",
                "Excluir o histórico não habilita o workflow."
            ],
            "concept": "Reativação de workflows na interface",
            "hints": [
                "Uma definição desabilitada difere de uma execução com falha.",
                "Procure um controle que afete eventos futuros."
            ]
        },
        "actions-077": {
            "prompt": "O que DELETE /repos/{owner}/{repo}/actions/runs/{run_id} remove?",
            "choices": [
                "A execução selecionada e seus dados associados",
                "O arquivo YAML do workflow da branch padrão",
                "Todas as definições de workflows do repositório",
                "A configuração de habilitação do Actions do repositório"
            ],
            "explanations": [
                "O endpoint aponta para uma execução de workflow.",
                "Excluir uma execução não edita arquivos do repositório.",
                "A rota de execução não exclui definições de workflows.",
                "Esse endpoint não altera as configurações do Actions."
            ],
            "concept": "Exclusão de execuções e definições",
            "hints": [
                "Leia o recurso indicado na URL.",
                "Excluir histórico é diferente de excluir configuração."
            ]
        },
        "actions-078": {
            "prompt": "Um workflow reutilizável declara region com required: true e sem valor padrão. O chamador omite region. O que deve ser corrigido?",
            "choices": [
                "Fornecer region no mapa with do chamador.",
                "Adicionar region à lista needs do chamador.",
                "Criar um rótulo de runner chamado region.",
                "Renomear a primeira etapa do workflow chamado para region."
            ],
            "explanations": [
                "A chamada deve atender ao contrato de entradas obrigatórias.",
                "needs lista dependências de jobs, não entradas de invocação.",
                "Rótulos de runner não fornecem entradas declaradas.",
                "O nome de uma etapa não fornece uma entrada ausente."
            ],
            "concept": "Falhas de entradas obrigatórias",
            "hints": [
                "Valide a interface de invocação antes do comportamento do runner.",
                "Entradas obrigatórias são separadas de dependências de jobs."
            ]
        },
        "actions-079": {
            "prompt": "Um job de relatórios depende de tests e usa if: ${{ always() }}. Qual referência informa se tests falhou?",
            "choices": [
                "steps.tests.outcome",
                "github.tests.status",
                "runner.tests.result",
                "needs.tests.result"
            ],
            "explanations": [
                "tests é aqui um job de dependência, não uma etapa local.",
                "github não contém campos arbitrários de resultados de jobs.",
                "runner descreve hardware e ambiente de execução.",
                "needs expõe o resultado do job do qual depende."
            ],
            "concept": "Diagnóstico de resultados de dependências",
            "hints": [
                "Uma condição permite executar, mas não fornece os resultados.",
                "Localize o produtor no grafo de dependências."
            ]
        },
        "actions-080": {
            "prompt": "Uma matriz de quatro jobs usa fail-fast: true. Um job falha e dois pendentes são cancelados. Qual alteração permite executá-los na próxima tentativa?",
            "choices": [
                "Remover o nome de exibição do job com falha.",
                "Adicionar mais valores ao mesmo eixo da matriz.",
                "Definir strategy.fail-fast como false.",
                "Definir strategy.max-parallel como um."
            ],
            "explanations": [
                "Nomes de exibição não controlam o cancelamento.",
                "Mais combinações não alteram a política de falhas.",
                "Desabilitar fail-fast evita essa política de cancelamento de irmãos.",
                "A execução em série não desabilita o cancelamento fail-fast."
            ],
            "concept": "Diagnóstico de falhas de matriz",
            "hints": [
                "Separe a primeira falha dos cancelamentos posteriores.",
                "Limites de agendamento não definem a resposta à falha."
            ]
        },
        "actions-081": {
            "prompt": "Durante pull_request, qual propriedade identifica a branch de origem do colaborador em vez da referência de merge?",
            "choices": [
                "github.repository",
                "github.head_ref",
                "github.base_ref",
                "github.ref"
            ],
            "explanations": [
                "repository identifica o repositório, não uma branch.",
                "head_ref nomeia a branch de origem do pull request.",
                "base_ref nomeia a branch de destino do pull request.",
                "ref normalmente identifica aqui a referência de merge."
            ],
            "concept": "Referências de origem de pull requests",
            "hints": [
                "Um pull request tem origem e destino.",
                "A referência usada para executar pode ser sintética."
            ]
        },
        "actions-082": {
            "prompt": "Uma etapa tem name: Compile, id: build e saída binary. Qual referência lê a saída depois no mesmo job?",
            "choices": [
                "steps.binary.outputs.build",
                "steps.build.outputs.binary",
                "steps.Compile.outputs.binary",
                "needs.build.outputs.binary"
            ],
            "explanations": [
                "O identificador da etapa precede outputs e o nome da saída.",
                "A consulta de saídas usa o id da etapa.",
                "O nome de exibição não substitui o id da etapa.",
                "needs consulta jobs de dependência, não etapas locais."
            ],
            "concept": "Identificadores de saídas de etapas",
            "hints": [
                "Separe rótulos de exibição de identificadores de expressões.",
                "Siga o escopo do produtor e o nome de saída declarado."
            ]
        },
        "actions-083": {
            "prompt": "Um job build envia um artefato bundle. Um job deploy dependente inicia em outro runner. O que deploy deve fazer antes de ler os arquivos?",
            "choices": [
                "Exportar o nome do artefato para GITHUB_ENV.",
                "Adicionar o nome do artefato a needs.",
                "Baixar o artefato para seu próprio workspace.",
                "Ler o caminho absoluto do workspace de build."
            ],
            "explanations": [
                "Uma variável de ambiente não transfere arquivos.",
                "needs ordena jobs, mas não baixa artefatos.",
                "O download materializa os arquivos no novo runner.",
                "Runners diferentes não compartilham esse sistema de arquivos local."
            ],
            "concept": "Transferência de arquivos entre jobs",
            "hints": [
                "A ordem de dependências e a transferência são independentes.",
                "Os arquivos precisam existir no sistema do consumidor."
            ]
        },
        "actions-084": {
            "prompt": "Uma etapa de cache com id: deps restaura uma correspondência exata da chave principal. Qual string steps.deps.outputs.cache-hit contém?",
            "choices": [
                "'true'",
                "'false'",
                "'exact'",
                "'restored'"
            ],
            "explanations": [
                "Uma correspondência exata produz a string true.",
                "false não descreve uma correspondência exata da chave principal.",
                "exact não é o valor documentado de cache-hit.",
                "restored não é o valor documentado de cache-hit."
            ],
            "concept": "Saída de correspondência exata de cache",
            "hints": [
                "As saídas de ações são lidas como strings.",
                "Diferencie correspondências exatas de restaurações alternativas."
            ]
        },
        "actions-085": {
            "prompt": "Um mantenedor altera arquivos em cache, mas reutiliza uma chave existente. Por que o cache antigo não muda?",
            "choices": [
                "Arquivos de cache sincronizam continuamente após a restauração.",
                "Uma entrada de cache existente não é atualizada no local.",
                "Uma chave de cache sempre aponta para o workspace atual.",
                "Apenas artefatos podem conter dependências alteradas."
            ],
            "explanations": [
                "A restauração copia arquivos sem sincronização contínua.",
                "Crie uma nova chave para salvar uma entrada diferente.",
                "Chaves identificam entradas armazenadas, não workspaces ativos.",
                "Caches podem armazenar dependências alteradas com outra chave."
            ],
            "concept": "Diagnóstico de substituição de cache",
            "hints": [
                "Pense na chave como identificador de uma captura.",
                "Alterar arquivos locais não modifica entradas remotas salvas."
            ]
        },
        "actions-086": {
            "prompt": "Qual valor de uses chama verify.yml do repositório acme/ci na referência stable?",
            "choices": [
                "acme/ci/.github/workflows/verify.yml@stable",
                "acme/ci@stable/.github/workflows/verify.yml",
                "acme/ci/.github/actions/verify.yml@stable",
                "https://github.com/acme/ci/verify.yml@stable"
            ],
            "explanations": [
                "Repositório, caminho do workflow e referência seguem a sintaxe de chamada.",
                "O sufixo de referência fica após o caminho do arquivo.",
                "Workflows reutilizáveis não ficam no diretório actions.",
                "Uma referência uses de workflow não é uma URL HTTPS."
            ],
            "concept": "Sintaxe de referências reutilizáveis",
            "hints": [
                "Verifique a estrutura da referência antes da execução.",
                "Uma referência remota identifica arquivo e revisão."
            ]
        },
        "actions-087": {
            "prompt": "Uma chamada de workflow reutilizável está incorretamente em steps. Qual local do esquema deve conter sua chave uses?",
            "choices": [
                "jobs.verify.uses",
                "jobs.verify.steps[0].uses",
                "on.workflow_call.uses",
                "defaults.run.uses"
            ],
            "explanations": [
                "Workflows reutilizáveis são chamados diretamente por jobs.",
                "Esse local invoca uma ação, não um workflow.",
                "A interface de eventos não contém a chave uses do chamador.",
                "Os padrões de run não invocam componentes."
            ],
            "concept": "Erros de localização de chamadas",
            "hints": [
                "Uma chamada de workflow introduz um limite de job.",
                "Invocar ações e workflows exige aninhamentos diferentes."
            ]
        },
        "actions-088": {
            "prompt": "Um workflow define env: &shared {MODE: test, COLOR: blue}. Outro job usa env: *shared. Qual valor MODE ele recebe desse mapa?",
            "choices": [
                "*shared",
                "blue",
                "test",
                "shared"
            ],
            "explanations": [
                "O alias é resolvido em vez de ser passado como texto literal.",
                "blue pertence a COLOR, não a MODE.",
                "O alias repete o mapa que contém MODE: test.",
                "O nome da âncora é uma referência YAML, não o valor."
            ],
            "concept": "Interpretação de aliases YAML",
            "hints": [
                "Expanda o mapa referenciado antes de ler cada chave.",
                "Âncoras YAML não renomeiam as variáveis que contêm."
            ]
        },
        "actions-089": {
            "prompt": "Em um log expandido de job do GitHub, qual ação gera uma URL do navegador para uma linha específica?",
            "choices": [
                "Clicar no número dessa linha.",
                "Clicar no nome do arquivo do workflow.",
                "Copiar a URL de clonagem do repositório.",
                "Copiar a URL do badge de status."
            ],
            "explanations": [
                "Selecionar o número cria um link para essa linha.",
                "O arquivo do workflow aponta para configuração, não para logs.",
                "Uma URL de clonagem obtém código, não uma linha de log.",
                "Um badge mostra status, não texto exato do log."
            ],
            "concept": "Links para linhas exatas de logs",
            "hints": [
                "Escolha evidências com a granularidade solicitada.",
                "Um link para o resumo é mais amplo que um link para uma linha."
            ]
        },
        "actions-090": {
            "prompt": "CI executa em push e pull_request. Agora a equipe quer apenas validação de PR, sem execução por push de branch. Qual declaração corresponde?",
            "choices": [
                "on: push",
                "on: [push, pull_request]",
                "on: workflow_run",
                "on: pull_request"
            ],
            "explanations": [
                "Mantém execuções push e remove os eventos PR.",
                "Preserva o comportamento original de dois eventos.",
                "Responde a outros workflows, não diretamente a alterações de PR.",
                "Apenas o evento pull request permanece habilitado."
            ],
            "concept": "Diagnóstico de gatilhos duplicados",
            "hints": [
                "Liste quais famílias de eventos devem continuar habilitadas.",
                "Uma alteração no repositório pode gerar vários eventos."
            ]
        },
        "actions-091": {
            "prompt": "Um gatilho workflow_run usa types: [completed]. Qual condição restringe o processamento posterior a uma execução anterior bem-sucedida?",
            "choices": [
                "if: github.event.workflow_run.status == 'success'",
                "if: github.event.action == 'success'",
                "if: github.event.workflow_run.event == 'success'",
                "if: github.event.workflow_run.conclusion == 'success'"
            ],
            "explanations": [
                "status descreve o ciclo de vida, não a conclusão de sucesso.",
                "A ação do evento é completed, não success.",
                "event nomeia o gatilho anterior, não seu resultado.",
                "conclusion descreve como terminou a execução anterior."
            ],
            "concept": "Conclusões de workflows anteriores",
            "hints": [
                "Concluir não implica uma conclusão bem-sucedida.",
                "Examine a execução anterior, não as etapas deste job."
            ]
        },
        "actions-092": {
            "prompt": "Com a depuração de etapas habilitada, qual comando Bash emite um diagnóstico sem criar uma anotação de erro?",
            "choices": [
                "echo '::debug::Cache lookup started'",
                "echo '::error::Cache lookup started'",
                "echo '::warning::Cache lookup started'",
                "echo '::notice::Cache lookup started'"
            ],
            "explanations": [
                "debug emite uma mensagem no log de depuração habilitado.",
                "error cria uma anotação de erro.",
                "warning cria uma anotação de aviso.",
                "notice cria uma anotação informativa."
            ],
            "concept": "Emissão de mensagens de depuração",
            "hints": [
                "Escolha o comando pela categoria, não pelo texto da mensagem.",
                "Anotações e diagnósticos opcionais são saídas distintas."
            ]
        },
        "actions-093": {
            "prompt": "A execução 731 foi disparada pelo commit A. Agora a branch aponta para B. Ao tentar 731 novamente, o que GITHUB_SHA identifica?",
            "choices": [
                "O commit B da ponta atual da branch",
                "O commit mais recente da branch padrão",
                "Um novo commit criado para a nova tentativa",
                "O commit A do evento disparador original"
            ],
            "explanations": [
                "Mover a branch não altera o SHA do evento da execução.",
                "Tentar novamente não seleciona o último commit da branch padrão.",
                "Uma nova tentativa não cria um commit por si só.",
                "Novas tentativas mantêm GITHUB_SHA do evento original."
            ],
            "concept": "Identidade do evento ao tentar novamente",
            "hints": [
                "Separe tentar um evento novamente de disparar um novo evento.",
                "A referência da branch pode mudar enquanto os metadados permanecem fixos."
            ]
        },
        "actions-094": {
            "prompt": "A API do GitHub informa o ID de job 9821 para uma variante com falha. Qual comando do GitHub CLI tenta esse job específico novamente?",
            "choices": [
                "gh run rerun 9821 --failed",
                "gh run view --job 9821 --log",
                "gh run watch 9821 --exit-status",
                "gh run rerun --job 9821"
            ],
            "explanations": [
                "Um número posicional é interpretado como ID de execução.",
                "view lê os logs do job sem tentar novamente.",
                "watch espera um ID de execução e apenas monitora.",
                "A opção job seleciona o identificador de job da API."
            ],
            "concept": "Novas tentativas de jobs individuais pela CLI",
            "hints": [
                "Nomes de exibição, IDs de jobs e IDs de execução diferem.",
                "Escolha o seletor correspondente ao identificador disponível."
            ]
        },
        "actions-095": {
            "prompt": "Apenas um job foi repetido na tentativa 2. Por que o arquivo de logs baixado pode omitir jobs executados apenas na tentativa 1?",
            "choices": [
                "Baixar logs converte jobs bem-sucedidos em artefatos.",
                "O YAML original oculta todos os jobs bem-sucedidos.",
                "O arquivo contém os jobs repetidos nessa tentativa.",
                "Jobs bem-sucedidos nunca geram logs para download."
            ],
            "explanations": [
                "Baixar logs não transforma jobs em artefatos.",
                "A seleção da tentativa, não o YAML, explica a omissão.",
                "Use logs da tentativa anterior para jobs não repetidos.",
                "Jobs bem-sucedidos também têm logs para download."
            ],
            "concept": "Cobertura de logs de novas tentativas",
            "hints": [
                "Relacione cada arquivo de logs à sua tentativa de execução.",
                "Novas tentativas seletivas não repetem todos os jobs originais."
            ]
        },
        "actions-096": {
            "prompt": "Em um repositório privado, qual é o papel padrão mínimo necessário para ver logs de execuções? Os nomes dos papéis estão em inglês.",
            "choices": [
                "Write",
                "Maintain",
                "Admin",
                "Read"
            ],
            "explanations": [
                "Write inclui mais acesso do que o necessário para ver logs.",
                "Maintain não é o acesso mínimo necessário aqui.",
                "Admin não é necessário apenas para inspecionar logs.",
                "O acesso Read basta para ver esses logs."
            ],
            "concept": "Acesso a logs do repositório",
            "hints": [
                "Diferencie ver evidências de alterar a execução do workflow.",
                "Selecione o papel de repositório mínimo suficiente."
            ]
        },
        "actions-097": {
            "prompt": "Qual marcador de um modelo é resolvido como a branch padrão do repositório consumidor ao criar o workflow?",
            "choices": [
                "${{ inputs.default-branch }}",
                "$default-branch",
                "${{ github.default_branch }}",
                "$GITHUB_DEFAULT_BRANCH"
            ],
            "explanations": [
                "Uma expressão de entrada não substitui marcadores de modelos.",
                "Esse é o marcador documentado para modelos de workflows.",
                "Esse não é o símbolo de substituição de modelos.",
                "Essa não é uma variável padrão do runner para criar modelos."
            ],
            "concept": "Marcadores de branch em modelos",
            "hints": [
                "A expansão de modelos ocorre antes de executar o workflow.",
                "Não confunda marcadores de criação com expressões em execução."
            ]
        },
        "actions-098": {
            "prompt": "Em uma matriz de dois SOs, runtime 20 passa em ambos e runtime 22 falha em ambos. Qual primeira comparação isola melhor o padrão observado?",
            "choices": [
                "Comparar tamanhos de artefatos dos dois jobs runtime 22.",
                "Comparar logs de runtime 20 e 22 no mesmo SO.",
                "Comparar apenas os dois jobs bem-sucedidos de runtime 20.",
                "Comparar tempos na fila dos quatro jobs."
            ],
            "explanations": [
                "Ambos falham com o mesmo runtime; falta comparar um caso bem-sucedido.",
                "Manter o SO fixo isola a dimensão de runtime.",
                "Apenas jobs bem-sucedidos omitem as evidências da falha.",
                "Os tempos na fila não isolam os comandos com falha do runtime."
            ],
            "concept": "Correlação de evidências da matriz",
            "hints": [
                "Mantenha uma variável constante enquanto altera outra.",
                "Use o padrão como hipótese, não como prova de causalidade."
            ]
        },
        "actions-099": {
            "prompt": "Qual tipo de ação personalizada executa seu arquivo de entrada com um runtime Node.js selecionado nos metadados?",
            "choices": [
                "Ação de contêiner Docker",
                "Ação composta",
                "Ação JavaScript",
                "Fluxo de trabalho reutilizável"
            ],
            "explanations": [
                "Uma ação de contêiner inicia uma imagem, não um arquivo Node.js executado pelo runner.",
                "Uma ação composta combina etapas em vez de declarar um arquivo de entrada JavaScript.",
                "Os metadados de uma ação JavaScript selecionam o runtime e o script de entrada.",
                "Um fluxo reutilizável define jobs e não é um dos três tipos de ação personalizada."
            ],
            "concept": "Execução de ações JavaScript",
            "hints": [
                "Compare a implementação de uma ação com a orquestração de um fluxo.",
                "Considere qual componente inicia o arquivo de entrada."
            ]
        },
        "actions-100": {
            "prompt": "Qual tipo de ação empacota um comando com suas bibliotecas de sistema Linux em uma imagem?",
            "choices": [
                "Ação de contêiner Docker",
                "Ação JavaScript",
                "Ação composta",
                "Fluxo de trabalho reutilizável"
            ],
            "explanations": [
                "A imagem contém o comando e suas dependências de sistema.",
                "Os metadados de uma ação JavaScript não empacotam um sistema de arquivos Linux.",
                "Etapas compostas reutilizam o ambiente do runner em vez de empacotar uma imagem.",
                "Um fluxo reutilizável pode invocar contêineres, mas não é uma ação baseada em imagem."
            ],
            "concept": "Empacotamento de ações de contêiner",
            "hints": [
                "Diferencie o empacotamento do ambiente da reutilização de etapas.",
                "De onde virão as bibliotecas compartilhadas necessárias?"
            ]
        },
        "actions-101": {
            "prompt": "Qual tipo de ação personalizada declara uma sequência de etapas run e uses nos metadados?",
            "choices": [
                "Ação JavaScript",
                "Ação de contêiner Docker",
                "Fluxo de trabalho reutilizável",
                "Ação composta"
            ],
            "explanations": [
                "Os metadados JavaScript apontam para um script, não para uma sequência de etapas.",
                "Os metadados de contêiner descrevem uma imagem e sua invocação.",
                "Fluxos reutilizáveis incluem etapas em jobs de um arquivo de fluxo, não nos metadados de uma ação.",
                "Os metadados de uma ação composta contêm diretamente as etapas a executar."
            ],
            "concept": "Encapsulamento de etapas compostas",
            "hints": [
                "Identifique o arquivo descrito antes de escolher uma abstração.",
                "Diferencie a definição de um job da implementação de uma ação."
            ]
        },
        "actions-102": {
            "prompt": "Qual nome de arquivo é válido para os metadados de uma ação personalizada?",
            "choices": [
                "actions.yml",
                "action.yaml",
                "workflow.yaml",
                "metadata.yml"
            ],
            "explanations": [
                "O plural actions.yml não é um nome de metadados de ação.",
                "action.yaml é aceito; a outra forma aceita é action.yml.",
                "Um nome de arquivo de fluxo não identifica metadados de ação.",
                "O GitHub não descobre metadados de ação com o nome metadata.yml."
            ],
            "concept": "Descoberta de metadados de ação",
            "hints": [
                "O runner usa um nome definido, não qualquer nome YAML.",
                "Confira tanto o nome base quanto a extensão."
            ]
        },
        "actions-103": {
            "prompt": "Qual conjunto contém apenas chaves obrigatórias de primeiro nível dos metadados de ação?",
            "choices": [
                "name, author, branding",
                "name, description, runs",
                "description, inputs, outputs",
                "author, inputs, runs"
            ],
            "explanations": [
                "author e branding são metadados opcionais.",
                "Essas chaves identificam a ação, a descrevem e especificam sua execução.",
                "inputs e outputs são opcionais mesmo em ações úteis.",
                "author e inputs são opcionais; esse conjunto também omite chaves obrigatórias."
            ],
            "concept": "Metadados obrigatórios de ação",
            "hints": [
                "Diferencie identificação e execução de apresentação opcional.",
                "Uma ação não precisa aceitar parâmetros nem retornar valores."
            ]
        },
        "actions-104": {
            "prompt": "Nos metadados de uma ação JavaScript, qual chave identifica o script executado na invocação principal?",
            "choices": [
                "runs.image",
                "runs.entrypoint",
                "runs.steps",
                "runs.main"
            ],
            "explanations": [
                "runs.image configura a imagem de uma ação Docker.",
                "runs.entrypoint configura a entrada de um contêiner, não um script JavaScript.",
                "runs.steps contém etapas compostas, não um arquivo de entrada JavaScript.",
                "runs.main indica o arquivo de entrada JavaScript relativo ao diretório da ação."
            ],
            "concept": "Arquivo de entrada JavaScript",
            "hints": [
                "Relacione as chaves de metadados ao tipo de ação.",
                "O seletor de runtime e o caminho do script são configurações diferentes."
            ]
        },
        "actions-105": {
            "prompt": "Qual configuração dos metadados seleciona o runtime de execução de uma ação?",
            "choices": [
                "runs.using",
                "runs.main",
                "runs.env",
                "runs.args"
            ],
            "explanations": [
                "runs.using seleciona o runtime JavaScript ou o tipo de execução docker/composite.",
                "runs.main seleciona um script JavaScript, não seu runtime.",
                "runs.env define variáveis de ambiente do contêiner.",
                "runs.args fornece argumentos ao contêiner em vez de escolher o runtime."
            ],
            "concept": "Seleção do runtime da ação",
            "hints": [
                "Diferencie como o código é executado de qual arquivo é executado.",
                "Os três tipos de ação têm esquemas de execução diferentes."
            ]
        },
        "actions-106": {
            "prompt": "Uma ação JavaScript é invocada por um caminho local ./. Qual recurso de ciclo de vida não é aceito nessa invocação local?",
            "choices": [
                "runs.main",
                "runs.post",
                "runs.pre",
                "runs.post-if"
            ],
            "explanations": [
                "Ações JavaScript locais continuam precisando de um arquivo de entrada principal.",
                "A restrição para ações locais afeta pre, não a limpeza post.",
                "A referência de metadados exclui explicitamente runs.pre para ações locais.",
                "post-if controla o gancho post e não é a restrição local documentada para pre."
            ],
            "concept": "Limitação do ciclo de vida de ações locais",
            "hints": [
                "Ações locais e baixadas podem diferir durante a preparação do job.",
                "Confira o suporte ao ciclo de vida sem presumir que todos os ganchos estão disponíveis."
            ]
        },
        "actions-107": {
            "prompt": "Qual chave dos metadados de uma ação JavaScript agenda um script de limpeza no final do job?",
            "choices": [
                "runs.pre",
                "runs.main",
                "runs.args",
                "runs.post"
            ],
            "explanations": [
                "runs.pre executa antes da ação principal, não no término do job.",
                "runs.main é a entrada normal da ação durante a etapa.",
                "runs.args configura argumentos do contêiner, não a limpeza JavaScript.",
                "runs.post registra o arquivo JavaScript de limpeza para o término do job."
            ],
            "concept": "Registro da limpeza da ação",
            "hints": [
                "Diferencie a execução de uma etapa da fase final do job.",
                "Considere a ordem do ciclo de vida, não o nome do script."
            ]
        },
        "actions-108": {
            "prompt": "Sem runs.post-if, qual condição é usada pelo gancho runs.post de uma ação JavaScript?",
            "choices": [
                "success()",
                "failure()",
                "always()",
                "cancelled()"
            ],
            "explanations": [
                "success() restringiria a limpeza ao estado de sucesso do job.",
                "failure() selecionaria apenas o estado de falha do job.",
                "A condição padrão de post é always(), não uma limpeza apenas após sucesso.",
                "cancelled() verifica cancelamento, não é a condição padrão."
            ],
            "concept": "Condição padrão do gancho post",
            "hints": [
                "A limpeza pode ser necessária mesmo após um job malsucedido.",
                "Não deduza os padrões dos ganchos a partir dos padrões das etapas comuns."
            ]
        },
        "actions-109": {
            "prompt": "Uma entrada region de uma ação tem default: west. O chamador omite region. Qual valor a entrada recebe?",
            "choices": [
                "region",
                "west",
                "undefined",
                "null"
            ],
            "explanations": [
                "O identificador da entrada não é substituído como seu próprio valor.",
                "O valor padrão é usado quando o chamador não especifica o parâmetro.",
                "O padrão configurado evita um valor não especificado neste exemplo.",
                "A omissão não substitui um valor padrão de texto por null."
            ],
            "concept": "Valores padrão de entradas de ação",
            "hints": [
                "Diferencie o identificador de um parâmetro de seu valor.",
                "Pense em quais metadados se aplicam quando o chamador não fornece nada."
            ]
        },
        "actions-110": {
            "prompt": "required: true nos metadados de entrada de uma ação personalizada rejeita, por si só, uma entrada omitida?",
            "choices": [
                "Não; a validação deve ser implementada na ação.",
                "Sim; o runner rejeita o fluxo antes de iniciar os jobs.",
                "Sim; o runner ignora essa ação sem gerar erro.",
                "Não; o runner sempre substitui o nome da entrada."
            ],
            "explanations": [
                "A marca descreve o requisito, mas não o impõe automaticamente.",
                "A marca dos metadados, sozinha, não fornece essa validação do fluxo.",
                "Essa marca não provoca uma omissão automática.",
                "Nomes de entrada não se tornam valores alternativos automaticamente."
            ],
            "concept": "Responsabilidade pela validação de entradas personalizadas",
            "hints": [
                "Uma declaração e a validação em execução são mecanismos diferentes.",
                "Não transfira as regras de workflow_dispatch para os metadados de ação."
            ]
        },
        "actions-111": {
            "prompt": "Qual chamada de @actions/core lança um erro se a entrada target de uma ação personalizada estiver vazia?",
            "choices": [
                "core.getInput('target', { required: true })",
                "core.getInput('target', { required: false })",
                "core.getInput('target', { trimWhitespace: true })",
                "core.getInput('target', { trimWhitespace: false })"
            ],
            "explanations": [
                "A opção required de getInput realiza a verificação de entrada em execução.",
                "Sem a opção required, getInput pode retornar uma string vazia.",
                "Remover espaços não exige que a entrada resultante tenha conteúdo.",
                "Desabilitar a remoção de espaços preserva espaços, mas não exige um valor de entrada."
            ],
            "concept": "Verificação de entrada obrigatória com toolkit",
            "hints": [
                "Normalizar texto e validar a presença resolvem problemas diferentes.",
                "Compare as opções passadas à função."
            ]
        },
        "actions-112": {
            "prompt": "Para uma entrada target de uma ação JavaScript, qual variável de ambiente contém seu valor?",
            "choices": [
                "ACTION_TARGET",
                "GITHUB_TARGET",
                "INPUT_TARGET",
                "STATE_TARGET"
            ],
            "explanations": [
                "ACTION_ não é o prefixo de variáveis de ambiente de entradas dos metadados.",
                "GITHUB_ identifica variáveis da plataforma, não esse mapeamento de entrada personalizada.",
                "As variáveis de ambiente de entrada usam INPUT_ e o nome da entrada em maiúsculas.",
                "STATE_ é usado para estado salvo do ciclo de vida, não para entradas."
            ],
            "concept": "Mapeamento de entradas JavaScript no ambiente",
            "hints": [
                "Diferencie dados de entrada de estado salvo do ciclo de vida.",
                "Considere a transformação de nome aplicada ao identificador de entrada."
            ]
        },
        "actions-113": {
            "prompt": "Uma ação composta declara uma entrada format. Qual expressão a lê dentro da ação?",
            "choices": [
                "${{ env.INPUT_FORMAT }}",
                "${{ inputs.format }}",
                "${{ steps.format.outputs.value }}",
                "${{ github.format }}"
            ],
            "explanations": [
                "Entradas compostas não criam automaticamente variáveis de ambiente INPUT_.",
                "O contexto inputs expõe diretamente as entradas de ações compostas.",
                "Isso referencia uma saída de etapa, não a entrada declarada.",
                "O contexto github não contém propriedades de entradas personalizadas da ação."
            ],
            "concept": "Contexto de entradas compostas",
            "hints": [
                "Ações compostas não herdam todas as convenções de entrada JavaScript.",
                "Identifique quem forneceu o valor: o chamador, uma etapa ou o GitHub."
            ]
        },
        "actions-114": {
            "prompt": "Qual mapeamento de saída composta expõe a saída digest de uma etapa interna com id: pack?",
            "choices": [
                "value: ${{ inputs.digest }}",
                "value: ${{ github.digest }}",
                "value: ${{ env.pack.outputs.digest }}",
                "value: ${{ steps.pack.outputs.digest }}"
            ],
            "explanations": [
                "inputs.digest leria uma entrada, não a saída da etapa pack.",
                "github.digest não é o local das saídas de etapas internas.",
                "O contexto env não fornece objetos aninhados de saídas de etapas.",
                "O valor de uma saída composta pode apontar para a saída de uma etapa interna identificada."
            ],
            "concept": "Mapeamento do valor da saída composta",
            "hints": [
                "Acompanhe o valor da etapa que o produz até o limite da ação.",
                "Uma saída de ação precisa de um valor, não apenas documentação."
            ]
        },
        "actions-115": {
            "prompt": "Dentro de uma ação composta, qual valor identifica o diretório que contém seus próprios scripts?",
            "choices": [
                "${{ github.workspace }}",
                "${{ runner.temp }}",
                "${{ github.action_path }}",
                "${{ github.workflow_ref }}"
            ],
            "explanations": [
                "github.workspace aponta para o workspace do chamador, não necessariamente para o diretório da ação.",
                "runner.temp é armazenamento temporário do job, não o local da ação.",
                "github.action_path aponta para o diretório da ação composta.",
                "github.workflow_ref identifica a referência do fluxo, não um diretório de scripts."
            ],
            "concept": "Arquivos relativos à ação composta",
            "hints": [
                "O repositório chamador e o da ação podem ser diferentes.",
                "Escolha um valor de diretório, não um identificador de fluxo."
            ]
        },
        "actions-116": {
            "prompt": "Uma etapa de ação composta contém run: ./check.sh. Qual chave da etapa também deve ser especificada?",
            "choices": [
                "shell",
                "uses",
                "with",
                "timeout-minutes"
            ],
            "explanations": [
                "Uma etapa run composta deve declarar explicitamente seu shell.",
                "uses seleciona outra ação e não acompanha run na mesma etapa.",
                "with fornece entradas a uma etapa uses, não o shell de execução.",
                "Um tempo limite não identifica o interpretador e não é esse requisito."
            ],
            "concept": "Shell de etapas run compostas",
            "hints": [
                "Não presuma que os padrões de run em fluxos se aplicam aos metadados da ação.",
                "Um comando precisa de um interpretador além de um caminho."
            ]
        },
        "actions-117": {
            "prompt": "Qual chave de uma etapa run composta faz um comando executar a partir do diretório tools?",
            "choices": [
                "shell: tools",
                "id: tools",
                "name: tools",
                "working-directory: tools"
            ],
            "explanations": [
                "shell seleciona um interpretador, não um diretório de trabalho.",
                "id identifica a etapa para referências e não altera diretórios.",
                "name altera o rótulo exibido da etapa, não o local de execução.",
                "working-directory define o diretório atual do comando."
            ],
            "concept": "Diretório de trabalho de comandos compostos",
            "hints": [
                "Diferencie metadados de apresentação de configurações de execução.",
                "Caminhos relativos dependem do diretório atual do comando."
            ]
        },
        "actions-118": {
            "prompt": "Como uma ação composta invoca outra ação em uma de suas etapas internas?",
            "choices": [
                "Adicionar uma chave uses em outputs.",
                "Adicionar uma etapa uses em runs.steps.",
                "Definir runs.main com a referência da ação.",
                "Definir runs.image com a referência da ação."
            ],
            "explanations": [
                "outputs descreve valores retornados e não executa etapas.",
                "As definições de etapas compostas aceitam uses para invocar ações.",
                "runs.main pertence à execução de ações JavaScript.",
                "runs.image pertence à execução de ações de contêiner."
            ],
            "concept": "Etapas de ações aninhadas",
            "hints": [
                "Observe a parte do esquema que contém o trabalho executável.",
                "Invocar uma ação é diferente de iniciar um arquivo de script."
            ]
        },
        "actions-119": {
            "prompt": "Qual par propriedade/valor dos metadados de uma ação Docker seleciona um Dockerfile ao lado de action.yml para definir a construção da imagem?",
            "choices": [
                "runs.main: Dockerfile",
                "runs.image: Dockerfile",
                "runs.using: Dockerfile",
                "runs.entrypoint: Dockerfile"
            ],
            "explanations": [
                "runs.main é uma configuração de arquivo de entrada JavaScript.",
                "runs.image aceita um caminho de Dockerfile relativo ao arquivo de metadados.",
                "runs.using deve ser docker em uma ação de contêiner Docker.",
                "runs.entrypoint seleciona um executável, não uma definição de construção de imagem."
            ],
            "concept": "Definição de imagem de ação Docker",
            "hints": [
                "Diferencie construir a imagem de iniciar seu executável.",
                "Um Dockerfile é uma entrada de construção, não um script JavaScript."
            ]
        },
        "actions-120": {
            "prompt": "Uma ação Docker lê seu primeiro argumento posicional. Qual par propriedade/valor dos metadados passa a entrada greeting para ele?",
            "choices": [
                "runs.env: {GREETING: '${{ inputs.greeting }}'}",
                "runs.entrypoint: '${{ inputs.greeting }}'",
                "runs.image: '${{ inputs.greeting }}'",
                "runs.args: ['${{ inputs.greeting }}']"
            ],
            "explanations": [
                "runs.env fornece uma variável de ambiente, não um argumento posicional.",
                "entrypoint identifica o executável, não um valor de argumento.",
                "image identifica a imagem do contêiner, não os argumentos do comando.",
                "runs.args fornece argumentos ao ponto de entrada do contêiner."
            ],
            "concept": "Argumentos de entrada de ações Docker",
            "hints": [
                "Uma variável de ambiente e um argumento posicional são interfaces diferentes.",
                "Identifique como o executável espera receber o valor."
            ]
        },
        "actions-121": {
            "prompt": "Qual chave dos metadados de uma ação Docker substitui o ENTRYPOINT do Dockerfile da imagem?",
            "choices": [
                "runs.entrypoint",
                "runs.args",
                "runs.image",
                "runs.env"
            ],
            "explanations": [
                "runs.entrypoint substitui ou fornece o ponto de entrada do contêiner.",
                "runs.args altera os argumentos, não o executável de entrada.",
                "runs.image seleciona a imagem ou sua definição de construção.",
                "runs.env define variáveis de ambiente, não um executável."
            ],
            "concept": "Substituição do ponto de entrada Docker",
            "hints": [
                "Diferencie o programa a iniciar de seus argumentos.",
                "A imagem pode já ter definido seu comportamento de inicialização."
            ]
        },
        "actions-122": {
            "prompt": "Qual par propriedade/valor dos metadados de uma ação Docker define MODE=verify no ambiente do contêiner?",
            "choices": [
                "runs.args: [MODE, verify]",
                "inputs: {MODE: {default: verify}}",
                "runs.env: {MODE: verify}",
                "outputs: {MODE: {description: verify}}"
            ],
            "explanations": [
                "Uma lista de argumentos não cria uma variável de ambiente.",
                "Um padrão de entrada não define, sozinho, a variável sem prefixo MODE.",
                "runs.env adiciona explicitamente variáveis ao ambiente do contêiner.",
                "Os metadados de saída descrevem um valor retornado e não configuram o ambiente."
            ],
            "concept": "Metadados de ambiente do contêiner",
            "hints": [
                "Os nomes de variáveis fazem parte da interface do executável.",
                "Entradas, saídas, argumentos e variáveis de ambiente não são intercambiáveis."
            ]
        },
        "actions-123": {
            "prompt": "Qual configuração de runner auto-hospedado aceita ações de contêiner Docker?",
            "choices": [
                "Windows com Docker instalado",
                "macOS com Docker instalado",
                "Linux apenas com um runtime Node.js",
                "Linux com Docker instalado"
            ],
            "explanations": [
                "Instalar Docker não faz runners Windows aceitarem ações de contêiner.",
                "Instalar Docker não faz runners macOS aceitarem ações de contêiner.",
                "Node.js não substitui o mecanismo de contêineres necessário.",
                "Ações de contêiner exigem um runner Linux e Docker em uma máquina auto-hospedada."
            ],
            "concept": "Requisitos do host de ações de contêiner",
            "hints": [
                "Confira a plataforma aceita além do software instalado.",
                "Uma configuração local de contêineres no desktop não determina o suporte do runner."
            ]
        },
        "actions-124": {
            "prompt": "Em qual caminho do contêiner o GitHub monta o workspace do runner para uma ação Docker?",
            "choices": [
                "/github/action",
                "/github/home",
                "/github/workspace",
                "/github/workflow"
            ],
            "explanations": [
                "/github/action não é o caminho documentado da montagem do workspace.",
                "/github/home serve como diretório pessoal do contêiner, não como workspace.",
                "A montagem do workspace permite compartilhar arquivos do chamador e gerados entre etapas.",
                "/github/workflow não é a montagem do workspace do repositório."
            ],
            "concept": "Montagem do workspace Docker",
            "hints": [
                "O checkout do chamador precisa ser visível dentro do contêiner.",
                "Diferencie arquivos do repositório do diretório pessoal do contêiner."
            ]
        },
        "actions-125": {
            "prompt": "Um Dockerfile coloca arquivos auxiliares em /github/workspace ao construir a imagem. Por que eles podem desaparecer quando a ação inicia?",
            "choices": [
                "Os metadados da ação excluem todos os arquivos da imagem.",
                "A montagem do workspace oculta os arquivos da imagem nesse caminho.",
                "O Docker ignora todas as instruções COPY em imagens de ações.",
                "O contêiner usa, em vez disso, o sistema de arquivos raiz do runner."
            ],
            "explanations": [
                "Os metadados não apagam o sistema de arquivos da imagem.",
                "O GitHub monta o workspace sobre esse diretório da imagem; mantenha os auxiliares em outro local.",
                "COPY funciona; a montagem em execução oculta os arquivos nesse destino específico.",
                "O contêiner mantém o sistema de arquivos da imagem fora dos caminhos montados."
            ],
            "concept": "Arquivos da imagem versus montagens em execução",
            "hints": [
                "Compare o conteúdo durante a construção com a visão do sistema de arquivos em execução.",
                "Diferencie arquivos distribuídos com a ação de arquivos fornecidos pelo chamador."
            ]
        },
        "actions-126": {
            "prompt": "Antes de uses: ./.github/actions/lint, o que normalmente disponibiliza os arquivos da ação no workspace do job?",
            "choices": [
                "Fazer checkout do repositório em uma etapa anterior.",
                "Dar à etapa o nome do repositório.",
                "Adicionar uma saída chamada github.workspace.",
                "Adicionar o caminho local como rótulo do runner."
            ],
            "explanations": [
                "Uma referência de ação ./ resolve arquivos já presentes no workspace.",
                "Um nome exibido não baixa arquivos do repositório.",
                "Uma declaração de saída não preenche o workspace.",
                "Rótulos de runner direcionam jobs, não fornecem arquivos de ações locais."
            ],
            "concept": "Disponibilidade de arquivos de ações locais",
            "hints": [
                "Uma referência relativa busca no sistema de arquivos, não baixa um repositório.",
                "Considere o que existe antes do primeiro checkout do job."
            ]
        },
        "actions-127": {
            "prompt": "Qual chamada de @actions/core publica uma saída archive de uma ação JavaScript?",
            "choices": [
                "core.setOutput('archive', path)",
                "core.exportVariable('archive', path)",
                "core.saveState('archive', path)",
                "core.info(path)"
            ],
            "explanations": [
                "setOutput publica uma saída nomeada que etapas posteriores podem consultar.",
                "exportVariable define uma variável de ambiente para etapas posteriores.",
                "saveState salva dados do ciclo de vida, não uma saída para o chamador.",
                "info imprime uma mensagem de log sem criar uma saída."
            ],
            "concept": "Publicação de saídas com toolkit",
            "hints": [
                "Logs, saídas, ambiente e estado do ciclo de vida têm consumidores diferentes.",
                "A próxima etapa precisa de um valor estruturado nomeado, não apenas texto visível."
            ]
        },
        "actions-128": {
            "prompt": "Qual pacote do toolkit executa um programa externo a partir de uma ação JavaScript?",
            "choices": [
                "@actions/core",
                "@actions/github",
                "@actions/exec",
                "@actions/artifact"
            ],
            "explanations": [
                "@actions/core fornece entradas, saídas, logs e recursos relacionados do runner.",
                "@actions/github fornece funções para a API do GitHub e o contexto do evento.",
                "@actions/exec fornece funções para executar processos.",
                "@actions/artifact gerencia artefatos do fluxo, não processos gerais."
            ],
            "concept": "Execução de processos com toolkit",
            "hints": [
                "Relacione o pacote ao recurso externo usado.",
                "Iniciar um comando é diferente de chamar uma API web."
            ]
        },
        "actions-129": {
            "prompt": "Qual pacote do toolkit fornece um cliente Octokit autenticado e o contexto do evento do GitHub a uma ação JavaScript?",
            "choices": [
                "@actions/exec",
                "@actions/github",
                "@actions/io",
                "@actions/cache"
            ],
            "explanations": [
                "@actions/exec inicia comandos externos em vez de fornecer Octokit.",
                "@actions/github expõe getOctokit e context para integrar a API do GitHub.",
                "@actions/io fornece operações de arquivos, não o cliente da API do GitHub.",
                "@actions/cache gerencia caches de dependências, não o contexto da API do evento."
            ],
            "concept": "Integração da API do GitHub com toolkit",
            "hints": [
                "Diferencie clientes de serviço de utilitários de comandos e arquivos.",
                "O payload do evento pode indicar qual recurso do repositório consultar."
            ]
        },
        "actions-130": {
            "prompt": "O que diferencia actions/github-script de escrever e empacotar uma ação JavaScript personalizada?",
            "choices": [
                "Converte JavaScript em camadas Docker antes de cada invocação.",
                "Torna Python obrigatório para solicitações à API do GitHub.",
                "Define um quarto tipo de ação nos metadados chamado github-script.",
                "Executa o JavaScript fornecido com objetos de cliente/contexto do GitHub já disponíveis."
            ],
            "explanations": [
                "github-script não empacota o script como uma imagem Docker.",
                "O script fornecido é JavaScript; Python não é obrigatório.",
                "Os tipos de ação personalizada continuam sendo JavaScript, contêiner Docker e composta.",
                "github-script é uma ação publicada com objetos disponíveis, não uma nova linguagem."
            ],
            "concept": "github-script versus empacotamento de ações personalizadas",
            "hints": [
                "Uma ação publicada de conveniência não é um novo tipo de runtime dos metadados.",
                "Compare os objetos disponíveis para o script com a linguagem que ele usa."
            ]
        },
        "actions-131": {
            "prompt": "Qual chamada de @actions/core informa um erro e marca uma ação JavaScript como malsucedida?",
            "choices": [
                "core.error('Invalid manifest')",
                "core.warning('Invalid manifest')",
                "core.setFailed('Invalid manifest')",
                "core.notice('Invalid manifest')"
            ],
            "explanations": [
                "error cria uma anotação de erro, mas não define, por si só, o status de saída.",
                "warning cria uma anotação de aviso sem fazer a ação falhar.",
                "setFailed registra o erro e define um status de saída de falha.",
                "notice cria uma anotação informativa sem fazer a ação falhar."
            ],
            "concept": "Status de falha versus anotações",
            "hints": [
                "A gravidade de uma anotação e o status de saída do processo são diferentes.",
                "O chamador precisa de um resultado de falha, não apenas uma mensagem vermelha."
            ]
        },
        "actions-132": {
            "prompt": "Qual texto em stdout cria uma anotação de aviso para a linha 8 de config.json?",
            "choices": [
                "::warning file=config.json,line=8::Check value",
                "::error file=config.json,line=8::Check value",
                "::notice file=config.json,line=8::Check value",
                "::debug::config.json:8 Check value"
            ],
            "explanations": [
                "O comando warning aceita propriedades file e line na anotação.",
                "error cria uma anotação de erro em vez de um aviso.",
                "notice cria uma anotação informativa em vez de um aviso.",
                "debug emite texto de depuração, não esse aviso vinculado a um arquivo."
            ],
            "concept": "Anotações de fluxo vinculadas a arquivos",
            "hints": [
                "Compare separadamente a gravidade e os campos de localização.",
                "Um nome de arquivo impresso como texto comum não é necessariamente metadado de anotação."
            ]
        },
        "actions-133": {
            "prompt": "Qual arquivo de ambiente permite que uma ação salve um ID de recurso para sua própria limpeza post posterior?",
            "choices": [
                "GITHUB_OUTPUT",
                "GITHUB_PATH",
                "GITHUB_STEP_SUMMARY",
                "GITHUB_STATE"
            ],
            "explanations": [
                "GITHUB_OUTPUT publica saídas da etapa em vez de estado privado do ciclo de vida.",
                "GITHUB_PATH adiciona diretórios ao caminho de busca de executáveis.",
                "GITHUB_STEP_SUMMARY cria resumos Markdown, não estado do ciclo de vida.",
                "GITHUB_STATE fornece estado aos scripts do ciclo de vida da mesma ação."
            ],
            "concept": "Transferência de estado do ciclo de vida da ação",
            "hints": [
                "Identifique o consumidor: a limpeza da mesma ação ou a próxima etapa do chamador.",
                "Nem todo arquivo de ambiente tem semântica de saída para todo o job."
            ]
        },
        "actions-134": {
            "prompt": "O arquivo de entrada de uma ação JavaScript importa pacotes npm. O que o repositório publicado deve fornecer aos chamadores?",
            "choices": [
                "Apenas package.json e o arquivo-fonte de entrada",
                "Código executável com suas dependências empacotadas ou incluídas",
                "Apenas package-lock.json e uma descrição da versão",
                "Apenas chaves de cache npm e um badge do fluxo"
            ],
            "explanations": [
                "Um manifesto lista dependências, mas não disponibiliza seus módulos.",
                "O runner executa a ação; ele não instala automaticamente suas dependências npm.",
                "Um arquivo de bloqueio descreve versões e não contém código executável de dependências.",
                "Chaves de cache e badges não fornecem módulos importados."
            ],
            "concept": "Dependências JavaScript distribuíveis",
            "hints": [
                "Diferencie um manifesto de dependências do código executável instalado.",
                "Teste os arquivos publicados em um chamador limpo, não apenas no checkout do autor."
            ]
        },
        "actions-135": {
            "prompt": "Onde devem estar os metadados da ação anunciada para publicá-la no GitHub Marketplace?",
            "choices": [
                "Em qualquer subpasta de um repositório privado",
                "Na raiz de um repositório público",
                "No diretório .github/workflows do chamador",
                "No valor armazenado de um segredo da organização"
            ],
            "explanations": [
                "Repositórios privados não podem publicar anúncios no Marketplace; ações em subpastas não são anunciadas automaticamente.",
                "O Marketplace anuncia a ação representada pelos metadados da raiz do repositório público.",
                "Esse diretório guarda definições de fluxo do chamador, não os metadados da raiz da ação publicada.",
                "Um segredo armazena um valor e não é um repositório de ação detectável."
            ],
            "concept": "Estrutura de ações para o Marketplace",
            "hints": [
                "Diferencie distribuição privada de visibilidade pública.",
                "A estrutura do repositório afeta qual ação recebe um anúncio."
            ]
        },
        "actions-136": {
            "prompt": "Qual requisito da conta pode deixar desabilitada a caixa de publicação no Marketplace de uma versão?",
            "choices": [
                "O proprietário não obteve um badge de criador verificado.",
                "O proprietário não comprou uma assinatura Enterprise Cloud.",
                "O proprietário não adicionou um badge de fluxo bem-sucedido.",
                "O proprietário não aceitou o Marketplace Developer Agreement."
            ],
            "explanations": [
                "Um badge de criador verificado não é obrigatório para publicar uma ação.",
                "Publicar ações no Marketplace não exige uma assinatura Enterprise Cloud.",
                "Um badge de status pode ajudar na documentação, mas não habilita a caixa de publicação.",
                "A conta proprietária precisa aceitar o acordo para poder publicar no Marketplace."
            ],
            "concept": "Acordo do publicador do Marketplace",
            "hints": [
                "Permissões de publicação e capacidade de execução são questões diferentes.",
                "Procure um requisito da conta proprietária do repositório."
            ]
        },
        "actions-137": {
            "prompt": "Uma ação remove uma entrada documentada e exige alterações nos fluxos chamadores. Qual alteração de versão semântica corresponde?",
            "choices": [
                "v2.6.1 to v3.0.0",
                "v2.6.1 to v2.6.2",
                "v2.6.1 to v2.7.0",
                "v2.6.1 to v2.6.1"
            ],
            "explanations": [
                "Uma alteração incompatível da interface pública exige uma nova versão principal.",
                "Uma versão de patch comunica correções compatíveis, não essa remoção de interface.",
                "Uma versão secundária comunica adições compatíveis, não alterações obrigatórias do chamador.",
                "Manter a mesma versão publicada oculta uma alteração incompatível."
            ],
            "concept": "Compatibilidade de versões semânticas de ações",
            "hints": [
                "Avalie o impacto nos chamadores existentes, não o tamanho da alteração de código.",
                "Remover uma interface é diferente de adicionar um recurso opcional."
            ]
        },
        "actions-138": {
            "prompt": "Para uma tag convencional mutável de versão principal, o que manter v2 permite oferecer ao publicador?",
            "choices": [
                "Uma identidade inalterável para um único commit de código",
                "Migração automática de toda entrada v1 para uma entrada v3",
                "Atualizações compatíveis de v2 sem cada chamador editar sua referência",
                "Uma garantia de que o sistema operacional do host nunca muda"
            ],
            "explanations": [
                "Uma tag móvel não é uma identidade exata e imutável de commit.",
                "Tags não reescrevem entradas nem migram interfaces incompatíveis.",
                "Uma tag principal mantida pode avançar para versões compatíveis; regras de versões imutáveis exigem consideração separada.",
                "Referências de versão de ação não congelam os sistemas operacionais de runners hospedados."
            ],
            "concept": "Tags principais de versão mantidas",
            "hints": [
                "Diferencie um canal de compatibilidade de uma identidade exata de código.",
                "A pergunta limita explicitamente a tag ao caso mutável."
            ]
        },
        "actions-139": {
            "prompt": "Qual seção do README permite mais diretamente configurar e consumir a interface de uma ação?",
            "choices": [
                "Avatares de colaboradores, número de issues e estrelas",
                "Datas de lançamento, número de commits e branches de desenvolvimento",
                "Badges de build, logotipos de patrocinadores e classificações",
                "Entradas, padrões, saídas e um exemplo funcional"
            ],
            "explanations": [
                "Indicadores da comunidade não explicam nomes de parâmetros nem referências de saída.",
                "Informações históricas não especificam como os chamadores devem invocar a interface.",
                "Apresentação e patrocínio não substituem a documentação da interface.",
                "Esses elementos documentam o contrato de invocação e mostram uma configuração válida."
            ],
            "concept": "Documentação para consumidores de ações",
            "hints": [
                "Pense no que um chamador precisa saber para escrever um bloco with válido.",
                "A documentação deve explicar o comportamento observável, não apenas a atividade do repositório."
            ]
        },
        "actions-140": {
            "prompt": "Uma ação JavaScript afirma oferecer suporte a Linux, Windows e macOS. Qual teste de versão verifica diretamente essa afirmação?",
            "choices": [
                "Executar apenas o corretor ortográfico da documentação em cada versão.",
                "Verificar apenas se a tag publicada corresponde ao exemplo do README.",
                "Invocar a ação empacotada em uma matriz desses sistemas operacionais.",
                "Executar a ação apenas dentro de um contêiner Docker Linux."
            ],
            "explanations": [
                "A correção ortográfica não executa comportamentos dependentes da plataforma.",
                "A consistência de tags não verifica o suporte a sistemas operacionais.",
                "Uma invocação real em cada plataforma verifica o empacotamento e as suposições do sistema operacional.",
                "Um contêiner Linux não verifica o comportamento nativo de Windows e macOS."
            ],
            "concept": "Testes multiplataforma de versões de ação",
            "hints": [
                "Teste o que os consumidores executam, não apenas os arquivos-fonte de desenvolvimento.",
                "Caminhos de arquivos e comandos disponíveis podem variar por plataforma."
            ]
        },
        "actions-141": {
            "prompt": "Uma organização no GitHub Team precisa limitar um pool de runners a dois repositórios privados. Qual controle estabelece esse limite?",
            "choices": [
                "Rótulos personalizados de runners",
                "Acesso a repositórios do grupo de runners",
                "Nomes exibidos dos fluxos",
                "Configurações de tempo limite dos jobs"
            ],
            "explanations": [
                "Rótulos selecionam máquinas aptas, mas não são limites de acesso de repositórios.",
                "Um grupo pode conceder acesso apenas a repositórios selecionados.",
                "Nomes exibidos não autorizam acesso a runners.",
                "Tempos limite restringem a duração, não os repositórios aptos."
            ],
            "concept": "Autorização de repositórios em grupos de runners",
            "hints": [
                "Diferencie selecionar uma máquina de ter permissão para usar um pool.",
                "Pense em onde um administrador define quais chamadores são permitidos."
            ]
        },
        "actions-142": {
            "prompt": "Qual recurso do runner descreve uma capacidade como gpu para a seleção de runs-on, sem conceder acesso a repositórios?",
            "choices": [
                "Um rótulo personalizado",
                "Uma política de acesso a repositórios",
                "Um segredo da organização",
                "Um ambiente de implantação"
            ],
            "explanations": [
                "Rótulos personalizados ajudam a direcionar jobs a runners com características declaradas.",
                "Políticas de acesso controlam autorização, não anunciam capacidades.",
                "Segredos armazenam valores sensíveis, não atributos de seleção de runners.",
                "Ambientes agrupam configurações de implantação e não são rótulos de capacidades."
            ],
            "concept": "Rótulos de capacidades de runners",
            "hints": [
                "Um atributo de agendamento não é necessariamente um limite de segurança.",
                "Identifique se a pergunta trata de características de máquinas ou de acesso."
            ]
        },
        "actions-143": {
            "prompt": "Qual mapeamento runs-on exige tanto participação no grupo build-pool quanto o rótulo linux-x64?",
            "choices": [
                "runs-on: {group: build-pool, labels: linux-x64}",
                "runs-on: {group: linux-x64, labels: build-pool}",
                "runs-on: [build-pool, linux-x64]",
                "runs-on: {labels: linux-x64}"
            ],
            "explanations": [
                "O mapeamento group e labels aplica tanto a participação no grupo quanto a correspondência de rótulos.",
                "Isso troca o nome do grupo e o rótulo solicitados.",
                "Um array trata ambos os valores como rótulos em vez de nomear um grupo.",
                "O mapeamento apenas de rótulo não exige o grupo indicado."
            ],
            "concept": "Interseção de grupo e rótulo de runner",
            "hints": [
                "Leia as chaves além dos seus valores.",
                "Um array de rótulos não tem a mesma estrutura que uma seleção de grupo."
            ]
        },
        "actions-144": {
            "prompt": "Por padrão, quais repositórios podem acessar os runners auto-hospedados de um grupo de organização recém-criado?",
            "choices": [
                "Todos os repositórios públicos que conhecem um rótulo de runner",
                "Apenas repositórios que contêm um anúncio do Marketplace",
                "Repositórios privados permitidos pela política do grupo",
                "Todos os repositórios de todas as organizações no GitHub"
            ],
            "explanations": [
                "Conhecer um rótulo não contorna a restrição de acesso de repositórios públicos.",
                "Publicar no Marketplace não tem relação com acesso a grupos de runners.",
                "O acesso do grupo é privado por padrão e depende da política de repositórios selecionada.",
                "Um grupo de organização não é acessível globalmente no GitHub."
            ],
            "concept": "Restrição padrão de runners para repositórios públicos",
            "hints": [
                "Considere o risco de código originado em forks públicos.",
                "Restrições de visibilidade padrão atuam junto com políticas de repositórios selecionados."
            ]
        },
        "actions-145": {
            "prompt": "Em qual nível de registro um runner auto-hospedado pode ser atribuído a várias organizações de uma mesma empresa?",
            "choices": [
                "Nível de repositório",
                "Nível de empresa",
                "Nível de ambiente",
                "Nível de fluxo"
            ],
            "explanations": [
                "Runners de repositório são dedicados a um único repositório.",
                "Runners de empresa podem atender várias organizações pela administração da empresa.",
                "Ambientes não constituem um nível de registro de runners auto-hospedados.",
                "Fluxos selecionam runners; não possuem um nível de registro entre organizações."
            ],
            "concept": "Hierarquia de registro de runners",
            "hints": [
                "Relacione o escopo administrativo ao escopo de compartilhamento desejado.",
                "Uma referência de fluxo não altera o proprietário do registro do runner."
            ]
        },
        "actions-146": {
            "prompt": "Uma organização permite um único repositório externo de ação, vendor/audit. Qual padrão de permissão é o mais restrito que cobre todo esse repositório?",
            "choices": [
                "vendor/*",
                "*/audit@*",
                "*/*",
                "vendor/audit@*"
            ],
            "explanations": [
                "vendor/* também admite outros repositórios de vendor.",
                "*/audit@* admite repositórios chamados audit de outros proprietários.",
                "*/* admite proprietários e repositórios arbitrários, não apenas essa origem.",
                "Isso corresponde às referências de vendor/audit sem permitir todos os repositórios desse proprietário."
            ],
            "concept": "Padrões restritos de origens de ações",
            "hints": [
                "Expanda mentalmente cada curinga antes de escolher uma regra.",
                "Esta pergunta trata de origens permitidas, não de fixação de dependências."
            ]
        },
        "actions-147": {
            "prompt": "Uma empresa impõe uma política de Actions às suas organizações. O proprietário de uma organização pode enfraquecer essa restrição?",
            "choices": [
                "Sim; configurações da organização sempre prevalecem sobre as da empresa.",
                "Sim; renomear o fluxo o isenta da política.",
                "Não; a política superior da empresa se aplica.",
                "Não; apenas um rótulo de runner pode anular a restrição."
            ],
            "explanations": [
                "A hierarquia documentada permite que a política de empresa prevaleça sobre a organização.",
                "Nomes exibidos não criam exceções à política de Actions.",
                "A política de empresa imposta limita as opções disponíveis na organização.",
                "Rótulos de runner não anulam a política de uso de ações."
            ],
            "concept": "Herança de políticas de empresa",
            "hints": [
                "Siga a hierarquia administrativa, não apenas o local do fluxo.",
                "Metadados de agendamento não podem dispensar uma restrição de governança."
            ]
        },
        "actions-148": {
            "prompt": "Uma política da organização bloqueia uma origem de ações. O que um administrador pode fazer nas configurações de Actions do repositório?",
            "choices": [
                "Restringir mais as origens permitidas, mas não autorizar essa origem bloqueada.",
                "Autorizar a origem bloqueada selecionando outra imagem de runner.",
                "Autorizar a origem bloqueada aumentando o tempo limite do job.",
                "Substituir a política da organização por um nome de fluxo do repositório."
            ],
            "explanations": [
                "A política do repositório pode ser mais restritiva, mas não contornar uma política superior da organização.",
                "Selecionar uma imagem de runner não altera as origens de ações permitidas.",
                "Alterar o tempo limite não anula regras de acesso da organização.",
                "Nomes de fluxo não têm autoridade sobre políticas da organização."
            ],
            "concept": "Limites superiores de políticas do repositório",
            "hints": [
                "Diferencie restrições locais de permissões concedidas por um escopo superior.",
                "Configurações de execução e de origens permitidas regulam coisas diferentes."
            ]
        },
        "actions-149": {
            "prompt": "Em um repositório privado de ações no GitHub.com, onde o administrador habilita o uso por outros repositórios privados da mesma organização?",
            "choices": [
                "Settings > Branches > Branch protection rules",
                "Settings > Pages > Build and deployment",
                "Settings > Webhooks > Add webhook",
                "Settings > Actions > General > Access"
            ],
            "explanations": [
                "A proteção de branches regula suas alterações, não a distribuição de ações privadas.",
                "Configurações do Pages regulam a publicação de sites, não o acesso ao download de ações.",
                "Webhooks enviam notificações de eventos e não concedem acesso ao compartilhamento de ações.",
                "A configuração Access de Actions do repositório de origem controla o compartilhamento de ações privadas."
            ],
            "concept": "Configuração de distribuição de ações privadas",
            "hints": [
                "O repositório de origem controla a decisão de compartilhar.",
                "Não confunda acesso a ações com publicação de sites ou regras de branches."
            ]
        },
        "actions-150": {
            "prompt": "Compartilhar uma ação privada com outro repositório concede automaticamente aos colaboradores dele qual acesso direto?",
            "choices": [
                "Acesso de escrita à branch padrão do repositório de origem",
                "Nenhuma nova permissão para navegar em Code no repositório de origem",
                "Acesso de administrador às configurações do repositório de origem",
                "Permissão para gerenciar colaboradores do repositório de origem"
            ],
            "explanations": [
                "Compartilhar uma ação não concede escrita em branches.",
                "Compartilhar ações permite o download pelo runner, não cria associação direta; os logs ainda podem expor informações.",
                "Consumir uma ação não concede administração do repositório.",
                "A configuração de compartilhamento de Actions não concede gerenciamento de colaboradores."
            ],
            "concept": "Acesso a ações versus associação ao repositório",
            "hints": [
                "Diferencie o acesso da máquina para execução do papel do usuário no repositório.",
                "A falta de acesso direto não implica ausência de exposição indireta de informações."
            ]
        },
        "actions-151": {
            "prompt": "Como o GitHub autoriza o runner a baixar uma ação de um repositório privado compartilhado autorizado?",
            "choices": [
                "O cookie de sessão do navegador do proprietário do repositório",
                "Um token de instalação limitado com acesso de leitura a esse repositório",
                "Uma senha de administrador da organização em action.yml",
                "Clonagem anônima com acesso completo de escrita ao código privado"
            ],
            "explanations": [
                "Downloads do runner não reutilizam o cookie do navegador do proprietário.",
                "O GitHub fornece um token de instalação limitado para permitir o download pelo runner.",
                "Compartilhar não exige inserir uma senha de administrador nos metadados.",
                "O compartilhamento privado é autenticado e não fornece escrita anônima."
            ],
            "concept": "Autorização de download de ações compartilhadas",
            "hints": [
                "Considere a identidade, o escopo de recursos e a finalidade da credencial.",
                "Um download não precisa conceder administração do repositório."
            ]
        },
        "actions-152": {
            "prompt": "Por que os mantenedores devem revisar os logs antes de compartilhar uma ação privada com repositórios que têm colaboradores externos?",
            "choices": [
                "Compartilhar torna o repositório de origem publicamente pesquisável sem avisar.",
                "Colaboradores externos tornam-se automaticamente proprietários da empresa.",
                "A ação não pode mais produzir logs após ser compartilhada.",
                "Esses colaboradores podem ver a saída da ação nos logs do fluxo chamador."
            ],
            "explanations": [
                "Compartilhar para Actions não muda a visibilidade do repositório para pública.",
                "Compartilhar ações não concede o papel de proprietário da empresa.",
                "Ações compartilhadas continuam produzindo logs nas execuções chamadoras.",
                "O aviso documentado de acesso indireto inclui logs visíveis nos repositórios consumidores."
            ],
            "concept": "Exposição indireta por logs de ações compartilhadas",
            "hints": [
                "Acompanhe as informações até quem pode ler a execução consumidora.",
                "Acesso de execução e visibilidade do repositório são configurações diferentes."
            ]
        },
        "actions-153": {
            "prompt": "Uma empresa quer que muitos repositórios invoquem uma definição de build com vários jobs versionada centralmente. Qual modelo de distribuição corresponde?",
            "choices": [
                "Fluxo de trabalho reutilizável",
                "Fluxo inicial",
                "Ação composta",
                "Trecho de fluxo copiado"
            ],
            "explanations": [
                "Fluxos reutilizáveis centralizam definições de jobs por meio de uma versão referenciada.",
                "Fluxos iniciais tornam-se cópias independentes após a criação.",
                "Ações compostas encapsulam etapas, não definições de fluxo com vários jobs.",
                "Trechos colados não mantêm uma definição invocável versionada centralmente."
            ],
            "concept": "Distribuição centralizada de fluxos",
            "hints": [
                "Compare uma referência de versão ativa com um ponto de partida copiado.",
                "A unidade distribuída inclui jobs, não apenas etapas."
            ]
        },
        "actions-154": {
            "prompt": "No repositório .github de uma organização, qual diretório armazena os modelos de fluxo da organização?",
            "choices": [
                ".github/actions",
                ".github/workflows",
                "workflow-templates",
                "runner-images"
            ],
            "explanations": [
                ".github/actions é um local comum de ações locais, não o diretório de descoberta de modelos.",
                ".github/workflows contém definições executáveis de fluxo, não o catálogo de modelos da organização.",
                "Modelos da organização e seus arquivos de propriedades ficam em workflow-templates.",
                "runner-images não é o diretório de modelos de fluxo da organização."
            ],
            "concept": "Local do catálogo de modelos da organização",
            "hints": [
                "Modelos são oferecidos para criar fluxos, não são executados a partir do catálogo.",
                "Confira o caminho dentro do repositório especial da organização."
            ]
        },
        "actions-155": {
            "prompt": "Depois que um repositório cria um fluxo a partir de um modelo inicial da organização, o que acontece quando o original é editado?",
            "choices": [
                "Todos os fluxos criados recebem a edição imediatamente.",
                "O fluxo criado torna-se automaticamente uma chamada a um fluxo reutilizável.",
                "A cópia fica desabilitada até o proprietário do original publicá-lo novamente.",
                "O fluxo criado continua sendo uma cópia independente."
            ],
            "explanations": [
                "Não existe uma relação de atualização automática entre o modelo e suas cópias.",
                "Criar a partir de um modelo não insere depois uma dependência workflow_call.",
                "Editar um modelo não desabilita fluxos criados anteriormente a partir dele.",
                "Um modelo inicial fornece uma base; alterações posteriores não sincronizam cópias existentes."
            ],
            "concept": "Independência de fluxos iniciais",
            "hints": [
                "Determine se o consumidor armazenou uma cópia ou uma referência.",
                "Uma experiência de criação compartilhada não implica governança central contínua."
            ]
        },
        "actions-156": {
            "prompt": "No GitHub Enterprise Cloud, qual política de grupo de runners pode limitar o uso a arquivos de fluxo e referências aprovados, além do acesso de repositórios?",
            "choices": [
                "Rótulos de capacidades personalizados",
                "Retenção de logs de fluxos",
                "Acesso de fluxos selecionados",
                "Nível de compressão de artefatos"
            ],
            "explanations": [
                "Rótulos selecionam runners, mas não autorizam identidades de arquivos de fluxo.",
                "Retenção controla logs armazenados, não quais fluxos podem usar um grupo.",
                "Restrições de fluxo podem indicar caminhos e versões de fluxos aprovados para o grupo.",
                "Compressão altera o empacotamento de artefatos, não o acesso ao grupo de runners."
            ],
            "concept": "Autorização de fluxos em grupos de runners",
            "hints": [
                "Um repositório pode conter definições de fluxo aprovadas e não aprovadas.",
                "Considere a diferença entre selecionar hardware e autorizar definições executáveis."
            ]
        },
        "actions-157": {
            "prompt": "Qual registro de runner auto-hospedado é dedicado a um repositório em vez de compartilhado entre repositórios da organização?",
            "choices": [
                "Registro no nível da organização",
                "Registro no nível do repositório",
                "Registro no nível da empresa",
                "Um nome de execução de fluxo"
            ],
            "explanations": [
                "Runners de organização podem atender vários repositórios conforme políticas de acesso.",
                "Runners de repositório atendem ao repositório no qual são registrados.",
                "Runners de empresa podem abranger organizações e não são limitados a um repositório por definição.",
                "Um nome de execução rotula uma execução e não registra um runner."
            ],
            "concept": "Escopo de propriedade de runners de repositório",
            "hints": [
                "O escopo de registro e a seleção runs-on são decisões diferentes.",
                "Considere qual objeto administrativo é proprietário do runner."
            ]
        },
        "actions-158": {
            "prompt": "Após extrair o aplicativo de runner auto-hospedado Linux, qual script o registra no GitHub usando a URL e o token de registro fornecidos?",
            "choices": [
                "./config.sh",
                "./run.sh",
                "./svc.sh",
                "./env.sh"
            ],
            "explanations": [
                "config.sh configura o registro do runner no GitHub antes da execução normal.",
                "run.sh inicia o listener configurado do runner, não registra um novo.",
                "svc.sh gerencia a instalação e execução do serviço após configurar o runner.",
                "env.sh não é o comando de registro indicado nas instruções de configuração."
            ],
            "concept": "Script de registro de runners Linux",
            "hints": [
                "Diferencie registro, execução em primeiro plano e gerenciamento do serviço.",
                "O token associa o aplicativo a um escopo administrativo."
            ]
        },
        "actions-159": {
            "prompt": "Qual comando instala como serviço um runner auto-hospedado Linux já configurado?",
            "choices": [
                "sudo ./svc.sh install",
                "./config.sh remove",
                "./run.sh",
                "sudo ./svc.sh status"
            ],
            "explanations": [
                "svc.sh install instala o serviço; depois ele pode ser iniciado com svc.sh start.",
                "config.sh remove remove o registro do runner em vez de instalar um serviço.",
                "run.sh executa o aplicativo de forma interativa em vez de instalar um serviço.",
                "svc.sh status consulta o estado do serviço sem instalá-lo."
            ],
            "concept": "Instalação do serviço do runner Linux",
            "hints": [
                "Um aplicativo registrado não implica automaticamente um serviço de sistema ativo.",
                "Compare verbos de instalação com os de consulta e execução."
            ]
        },
        "actions-160": {
            "prompt": "Para um runner auto-hospedado que se conecta ao GitHub.com, qual direção de rede e protocolo básicos são necessários?",
            "choices": [
                "HTTPS de entrada do GitHub para o listener do runner",
                "HTTP de saída sem criptografia para serviços de jobs do GitHub",
                "HTTPS de saída para os serviços necessários do GitHub",
                "SSH de entrada do GitHub para o host do runner"
            ],
            "explanations": [
                "O runner inicia a conexão; o GitHub não exige essa conexão de entrada ao listener.",
                "O protocolo de comunicação documentado é HTTPS criptografado, não HTTP sem criptografia.",
                "O runner inicia conexões HTTPS; os destinos necessários dependem dos recursos usados.",
                "O GitHub não entrega jobs por uma sessão SSH de entrada no host."
            ],
            "concept": "Início de conexões de runners auto-hospedados",
            "hints": [
                "Identifique qual processo inicia a conexão.",
                "Tanto a conectividade básica quanto os destinos de download de cada recurso são relevantes."
            ]
        },
        "actions-161": {
            "prompt": "No Linux, qual comando do runner verifica acesso aos serviços de rede necessários do GitHub? URL e PAT são marcadores de posição.",
            "choices": [
                "./config.sh --remove --url URL --pat PAT",
                "./config.sh --check --url URL --pat PAT",
                "./svc.sh status",
                "./run.sh --version"
            ],
            "explanations": [
                "Remover o registro não é um diagnóstico de rede.",
                "A verificação de conectividade documentada informa PASS ou FAIL para os serviços necessários.",
                "O status do serviço não testa todos os destinos de rede necessários do GitHub.",
                "Consultar a versão não realiza as verificações de conectividade documentadas."
            ],
            "concept": "Comando de diagnóstico de conectividade do runner",
            "hints": [
                "Um listener pode estar instalado sem conseguir alcançar um serviço necessário.",
                "Escolha um teste ativo de rede, não uma consulta de processo local."
            ]
        },
        "actions-162": {
            "prompt": "Quais arquivos registram a inicialização e a atividade do listener do aplicativo de runner auto-hospedado?",
            "choices": [
                "_diag/Worker_*.log",
                "_work/*/README.md",
                ".github/workflows/*.yml",
                "_diag/Runner_*.log"
            ],
            "explanations": [
                "Logs Worker_ contêm detalhes da execução de jobs individuais.",
                "Arquivos README obtidos são documentação do projeto, não diagnósticos do listener.",
                "O YAML do fluxo configura jobs, não registra a inicialização do runner.",
                "Logs Runner_ descrevem a atividade do próprio aplicativo do runner."
            ],
            "concept": "Logs de diagnóstico do aplicativo do runner",
            "hints": [
                "Diferencie o listener persistente do processo que executa um job.",
                "Arquivos de configuração e diagnósticos têm finalidades diferentes."
            ]
        },
        "actions-163": {
            "prompt": "Quais logs locais do runner auto-hospedado contêm detalhes da execução de um job individual?",
            "choices": [
                "_diag/Runner_*.log",
                ".service",
                "_diag/Worker_*.log",
                "action.yml"
            ],
            "explanations": [
                "Logs Runner_ focam o aplicativo e o listener, não a execução detalhada do job.",
                ".service identifica a configuração do serviço, não um rastreamento de execução de job.",
                "Logs Worker_ são gerados para os jobs processados pelo runner.",
                "action.yml define metadados da ação em vez de registrar diagnósticos do job."
            ],
            "concept": "Diagnósticos de processos de trabalho do runner",
            "hints": [
                "Escolha o produtor de logs mais próximo da execução com falha.",
                "A existência de um serviço não explica a falha de um comando individual."
            ]
        },
        "actions-164": {
            "prompt": "Qual manutenção continua sendo responsabilidade do operador quando o aplicativo do runner auto-hospedado se atualiza automaticamente?",
            "choices": [
                "Atualizações do sistema operacional e ferramentas instaladas",
                "Apenas as atualizações automáticas do aplicativo do runner",
                "Apenas novo YAML do fluxo, sem atualizações da máquina",
                "Apenas tags de contêiner, sem atualizações do sistema host"
            ],
            "explanations": [
                "Atualizações do aplicativo do runner não corrigem o sistema operacional nem outras ferramentas.",
                "A pergunta já inclui atualizações automáticas do aplicativo; elas não mantêm a plataforma host.",
                "Alterar definições de fluxo não atualiza a máquina de execução.",
                "Contêineres atualizados não eliminam a manutenção do sistema operacional host."
            ],
            "concept": "Responsabilidade pela manutenção de plataformas auto-hospedadas",
            "hints": [
                "Um aplicativo agente e seu sistema operacional host têm ciclos de vida diferentes.",
                "Considere qual infraestrutura a organização realmente administra."
            ]
        },
        "actions-165": {
            "prompt": "O que muda ao registrar um runner auto-hospedado com --ephemeral?",
            "choices": [
                "O GitHub exclui automaticamente todos os arquivos do disco do host.",
                "O GitHub garante que ele só possa executar código de origem confiável.",
                "O GitHub instala todas as atualizações necessárias do sistema operacional.",
                "O GitHub remove seu registro depois que ele processa um job."
            ],
            "explanations": [
                "Remover o registro não é sanitizar o disco nem destruir a máquina.",
                "O modo efêmero não transforma código não confiável em confiável.",
                "Atualizar o sistema operacional continua sendo tarefa do operador em infraestrutura auto-hospedada.",
                "O registro efêmero é para um job; a limpeza do host continua exigindo orquestração."
            ],
            "concept": "Semântica de registro de runners efêmeros",
            "hints": [
                "Diferencie o registro do GitHub da máquina subjacente.",
                "Um ciclo de vida por número de jobs não estabelece, sozinho, um limite de confiança."
            ]
        },
        "actions-166": {
            "prompt": "Um escalador destrói as máquinas de runners efêmeros após cada job. Onde os logs de diagnóstico do aplicativo devem ser mantidos?",
            "choices": [
                "Apenas no diretório _diag local da máquina",
                "Em armazenamento externo de logs antes de destruir a máquina",
                "Apenas na imagem usada para criar a próxima máquina",
                "Apenas nos logs do fluxo enviados automaticamente pelo GitHub"
            ],
            "explanations": [
                "Arquivos locais de diagnóstico desaparecem ao destruir o armazenamento da máquina.",
                "O GitHub recomenda encaminhar e preservar externamente os logs de runners efêmeros.",
                "Uma imagem base não captura automaticamente logs de execuções posteriores.",
                "Logs do fluxo não preservam automaticamente todos os arquivos de diagnóstico do runner."
            ],
            "concept": "Retenção de diagnósticos de runners efêmeros",
            "hints": [
                "As evidências precisam sobreviver ao recurso investigado.",
                "Logs do fluxo e do aplicativo do runner são fontes de diagnóstico diferentes."
            ]
        },
        "actions-167": {
            "prompt": "Por que um runner auto-hospedado persistente é arriscado para pull requests de forks de um repositório público?",
            "choices": [
                "Um checkout normal garante a limpeza do host entre jobs.",
                "Jobs não confiáveis podem deixar alterações que afetem jobs posteriores.",
                "Rótulos do runner isolam automaticamente cada job em uma VM nova.",
                "Um token de API somente leitura impede escritas no sistema de arquivos host."
            ],
            "explanations": [
                "A limpeza do checkout não é isolamento de todo o host nem sanitização de processos.",
                "Máquinas persistentes podem manter processos maliciosos ou modificações entre jobs.",
                "Rótulos direcionam jobs e não fornecem isolamento de VM.",
                "Permissões da API não determinam os privilégios locais do processo do runner."
            ],
            "concept": "Confiança entre jobs em runners persistentes",
            "hints": [
                "Pense no que persiste quando o processo de um job termina.",
                "Um recurso de agendamento não equivale a um limite de isolamento descartável."
            ]
        },
        "actions-168": {
            "prompt": "Um operador adiciona o rótulo cuda a um runner auto-hospedado. O que o rótulo faz por si só?",
            "choices": [
                "Instala um toolkit CUDA correspondente no host",
                "Verifica um driver de GPU funcional no host",
                "Altera a arquitetura do host para corresponder ao rótulo",
                "Faz o runner corresponder a jobs que solicitam esse rótulo"
            ],
            "explanations": [
                "Atribuir um rótulo personalizado não instala software.",
                "O GitHub não valida rótulos personalizados com base na disponibilidade de hardware ou drivers.",
                "Um rótulo de metadados não pode alterar a arquitetura da máquina.",
                "Rótulos personalizados são metadados de direcionamento; o operador precisa provisionar a capacidade declarada."
            ],
            "concept": "Capacidades de runner declaradas versus provisionadas",
            "hints": [
                "Diferencie atribuir metadados de configurar a máquina.",
                "O agendador usa rótulos, não uma auditoria da instalação de software."
            ]
        },
        "actions-169": {
            "prompt": "Na lista de runners auto-hospedados, o que significa Idle?",
            "choices": [
                "Conectado e pronto para executar jobs",
                "Executando atualmente um job de fluxo",
                "Desconectado do serviço de runners do GitHub",
                "Registrado, mas proibido de receber jobs"
            ],
            "explanations": [
                "Idle indica um runner online pronto para trabalhar.",
                "Active indica que um runner está executando um job.",
                "Offline indica conectividade perdida ou ausente com o GitHub.",
                "Idle é um estado de atividade, não uma negação administrativa."
            ],
            "concept": "Interpretação do estado de atividade do runner",
            "hints": [
                "Interprete o status como um sinal de conexão e atividade.",
                "Disponibilidade não anula políticas de acesso de repositórios."
            ]
        },
        "actions-170": {
            "prompt": "Qual abordagem com suporte do GitHub gerencia o escalonamento automático de runners auto-hospedados no Kubernetes?",
            "choices": [
                "Uma política de acesso a repositórios do grupo de runners",
                "O atualizador integrado do aplicativo do runner",
                "Actions Runner Controller (ARC)",
                "A configuração strategy.max-parallel de um job"
            ],
            "explanations": [
                "A política do grupo autoriza o uso, mas não cria pods de runners no Kubernetes.",
                "O atualizador mantém versões do aplicativo, não a capacidade do cluster.",
                "O ARC orquestra o escalonamento de runners no Kubernetes.",
                "max-parallel limita a execução de matrizes, mas não provisiona infraestrutura Kubernetes."
            ],
            "concept": "Escalonamento automático de runners no Kubernetes",
            "hints": [
                "A solução precisa criar e remover capacidade de execução.",
                "Diferencie orquestrar infraestrutura de configurar repositórios."
            ]
        },
        "actions-171": {
            "prompt": "Qual afirmação uma empresa deve incluir ao estimar custos de runners auto-hospedados?",
            "choices": [
                "Minutos hospedados incluídos reembolsam a conta das máquinas auto-hospedadas.",
                "Atualizações do runner também cobrem os custos de administração do host.",
                "O registro efêmero transfere os custos das máquinas para o GitHub.",
                "A organização paga suas máquinas, operações e manutenção."
            ],
            "explanations": [
                "Franquias de uso hospedado não reembolsam faturas de infraestrutura da organização.",
                "O GitHub não administra o sistema operacional auto-hospedado apenas por registrar um runner.",
                "O registro efêmero altera o ciclo de vida do runner, não a propriedade da infraestrutura.",
                "A infraestrutura auto-hospedada e sua manutenção continuam sendo responsabilidade da organização."
            ],
            "concept": "Responsabilidade pelos custos de infraestrutura auto-hospedada",
            "hints": [
                "Diferencie a cobrança do serviço do custo de operar a infraestrutura de execução.",
                "Evite interpretar uma afirmação de preço do produto como hardware gratuito."
            ]
        },
        "actions-172": {
            "prompt": "Em runners VM Linux padrão hospedados pelo GitHub, qual ambiente um novo job normalmente recebe?",
            "choices": [
                "A mesma VM compartilhada por todos os jobs do fluxo",
                "Uma VM permanente atribuída a esse arquivo de fluxo",
                "Uma VM recém-provisionada para esse job",
                "A VM da execução anterior quando há acerto de cache de dependências"
            ],
            "explanations": [
                "Jobs VM padrão separados não compartilham uma máquina para todo o fluxo.",
                "Um nome de arquivo de fluxo não aloca uma VM hospedada persistente.",
                "Jobs VM hospedados padrão recebem instâncias novas; não dependa do estado local de jobs anteriores.",
                "Um cache restaura arquivos selecionados, não a instância de VM anterior."
            ],
            "concept": "Ciclo de vida de jobs VM hospedados",
            "hints": [
                "Ambientes de execução e artefatos enviados explicitamente têm durações diferentes.",
                "A pergunta limita-se a runners VM, não a todas as implementações hospedadas."
            ]
        },
        "actions-173": {
            "prompt": "Onde um administrador pode identificar a imagem exata do runner hospedado e o software instalado usados em um job específico?",
            "choices": [
                "O rótulo runs-on do fluxo sem consultar logs de execução",
                "O log Set up job do job e seu link de software da imagem",
                "O manifesto da imagem mais nova sem conferir a versão usada",
                "A lista de software da execução anterior sem conferir este job"
            ],
            "explanations": [
                "Um rótulo pode resolver builds de imagem diferentes e não basta para versões exatas.",
                "O log de preparação identifica a versão real da imagem e fornece um link para o software incluído.",
                "A imagem mais recente publicada pode diferir da usada por esse job.",
                "Execuções diferentes podem usar imagens diferentes mesmo sem alterações no YAML."
            ],
            "concept": "Evidências do software de imagens hospedadas",
            "hints": [
                "Prefira evidências dessa execução a suposições sobre um rótulo.",
                "O conteúdo da imagem pode mudar entre execuções do mesmo fluxo."
            ]
        },
        "actions-174": {
            "prompt": "Qual afirmação descreve corretamente um rótulo de runner hospedado pelo GitHub que termina em -latest?",
            "choices": [
                "Pode migrar para uma imagem compatível mais nova com o tempo.",
                "Garante que a versão principal do sistema operacional nunca muda.",
                "Sempre significa a versão mais nova do fornecedor desde o primeiro dia.",
                "Garante que todas as ferramentas pré-instaladas mantenham uma versão fixa."
            ],
            "explanations": [
                "Rótulos latest seguem a seleção e migrações de imagens compatíveis do GitHub.",
                "Um rótulo latest não é uma fixação permanente de versão principal.",
                "A imagem latest do GitHub não é necessariamente o sistema operacional mais recente do fornecedor.",
                "Imagens hospedadas recebem atualizações; esse rótulo não congela versões de ferramentas."
            ],
            "concept": "Rótulos móveis de imagens hospedadas",
            "hints": [
                "Diferencie um rótulo mantido pelo serviço de um ambiente congelado.",
                "Confira avisos de migração de imagens se um job antes funcional mudar de comportamento."
            ]
        },
        "actions-175": {
            "prompt": "Um job hospedado exige uma versão específica de runtime compatível que a imagem não garante por padrão. O que o fluxo deve fazer?",
            "choices": [
                "Instalá-la ou selecioná-la explicitamente com uma ação setup adequada.",
                "Presumir que a imagem latest sempre inclui exatamente essa versão.",
                "Definir uma variável de versão sem invocar um instalador.",
                "Fazer commit de um arquivo de bloqueio de dependências sem selecionar o runtime."
            ],
            "explanations": [
                "Ações setup tornam explícita a seleção do runtime em vez de depender de padrões que mudam.",
                "Padrões da imagem são atualizados e não garantem qualquer versão solicitada.",
                "Uma variável, sozinha, não instala nem ativa a versão de runtime solicitada.",
                "Um arquivo de bloqueio de pacotes não provisiona o executável do runtime."
            ],
            "concept": "Provisionamento explícito de runtimes hospedados",
            "hints": [
                "Um requisito precisa afetar a preparação executável, não apenas a documentação.",
                "O software pré-instalado é um ponto de partida, não o contrato completo do build."
            ]
        },
        "actions-176": {
            "prompt": "No GitHub Enterprise Cloud, qual opção de runner gerenciado pode fornecer IPs públicos estáticos para listas de permissões de firewall em Linux ou Windows?",
            "choices": [
                "Runners padrão selecionados apenas pelo rótulo ubuntu-latest",
                "Qualquer runner selecionado apenas por um nome de job personalizado",
                "Runners maiores configurados com IPs estáticos",
                "Runners macOS maiores usando a configuração de IP do Linux"
            ],
            "explanations": [
                "Um rótulo de imagem hospedada padrão não aloca uma faixa de IP estático dedicada.",
                "O nome de um job não tem efeito sobre a alocação de rede.",
                "IPs estáticos são um recurso de runners maiores em configurações Linux e Windows compatíveis.",
                "O recurso documentado de IPs estáticos não se estende a runners macOS maiores."
            ],
            "concept": "Endereços estáticos de saída hospedados",
            "hints": [
                "Um rótulo de imagem compartilhado não implica uma identidade de rede dedicada.",
                "Confira o recurso específico do sistema operacional, não apenas o tamanho do runner."
            ]
        },
        "actions-177": {
            "prompt": "Uma organização elegível no GitHub Team ou Enterprise Cloud precisa que runners Linux/Windows hospedados acessem uma rede privada Azure. Qual recurso compatível deve avaliar?",
            "choices": [
                "IPs públicos estáticos de saída sem conexão de rede privada",
                "Rede privada Azure para runners maiores",
                "Uma política de acesso do grupo sem configuração de rede",
                "Um contêiner de serviço do job com rede bridge Docker local"
            ],
            "explanations": [
                "Endereços públicos estáticos, sozinhos, não fornecem rota para destinos privados do Azure.",
                "Runners maiores compatíveis podem integrar-se a uma VNET Azure por rede privada configurada.",
                "O acesso do grupo autoriza usar runners, mas não estabelece conectividade VNET.",
                "Uma bridge local de contêineres não é uma integração com VNET Azure."
            ],
            "concept": "Rede privada Azure em runners hospedados",
            "hints": [
                "Conectividade exige uma integração de infraestrutura, não apenas um valor de configuração.",
                "Considere o plano do GitHub.com e o sistema operacional aceito."
            ]
        },
        "actions-178": {
            "prompt": "Qual mecanismo compatível pré-instala as ferramentas de uma organização na imagem usada por runners maiores elegíveis hospedados pelo GitHub?",
            "choices": [
                "Arquivos de cache de dependências",
                "Rótulos de capacidades de runners",
                "Seleção de contêiner do job",
                "Imagens personalizadas de runner"
            ],
            "explanations": [
                "Caches restauram arquivos durante os jobs, não definem a imagem base do runner.",
                "Rótulos descrevem runners sem instalar software em uma imagem.",
                "Um contêiner do job fornece um ambiente de contêiner, não uma imagem de VM personalizada do runner.",
                "Imagens personalizadas podem conter ferramentas e dependências antes de iniciar um job."
            ],
            "concept": "Provisionamento de imagens personalizadas hospedadas",
            "hints": [
                "Diferencie a preparação de imagens de rótulos e configurações armazenadas.",
                "O recurso exige plataformas compatíveis, permissões e política da organização."
            ]
        },
        "actions-179": {
            "prompt": "Um runner maior está habilitado para geração de imagens. Qual palavra-chave do job solicita a criação de uma imagem personalizada após um job de build bem-sucedido?",
            "choices": [
                "services",
                "container",
                "snapshot",
                "environment"
            ],
            "explanations": [
                "services inicia contêineres de serviço, não publica uma imagem de runner.",
                "container seleciona um contêiner no qual executar as etapas do job.",
                "snapshot especifica a imagem a gerar a partir de um job de runner de geração de imagens.",
                "environment seleciona um ambiente de implantação em vez de gerar uma imagem."
            ],
            "concept": "Palavra-chave de geração de imagens personalizadas",
            "hints": [
                "Executar dentro de uma imagem e criar uma imagem de runner são operações diferentes.",
                "O job precisa usar um runner de geração de imagens configurado adequadamente."
            ]
        },
        "actions-180": {
            "prompt": "Um segredo da organização deve estar disponível apenas para api e worker. Qual política de acesso do segredo corresponde?",
            "choices": [
                "Repositórios selecionados: api, worker",
                "Todos os repositórios da organização",
                "Todos os repositórios privados da organização",
                "Todos os repositórios com o mesmo nome de arquivo de fluxo"
            ],
            "explanations": [
                "O acesso por seleção concede o segredo da organização apenas aos repositórios explicitamente escolhidos.",
                "Acesso a toda a organização é mais amplo que os dois repositórios indicados.",
                "Acesso apenas privado pode incluir outros repositórios privados além desses dois.",
                "Políticas de segredos da organização selecionam repositórios, não nomes de arquivos de fluxo."
            ],
            "concept": "Seleção de repositórios para segredos da organização",
            "hints": [
                "Use o menor conjunto de acesso que inclua os consumidores reais.",
                "Categorias de visibilidade e listas explícitas expressam limites diferentes."
            ]
        },
        "actions-181": {
            "prompt": "O mesmo nome de segredo existe nos níveis de organização, repositório e ambiente. Em um job que usa esse ambiente, qual segredo prevalece?",
            "choices": [
                "O segredo do repositório",
                "O segredo da organização",
                "O segredo criado mais recentemente",
                "O segredo do ambiente"
            ],
            "explanations": [
                "O escopo de repositório perde para um segredo de ambiente aplicável com o mesmo nome.",
                "O escopo de organização não anula valores mais específicos de repositório ou ambiente.",
                "A precedência depende do escopo, não da data de criação.",
                "Prevalece o escopo aplicável mais específico; aqui é o ambiente."
            ],
            "concept": "Precedência de segredos de ambiente",
            "hints": [
                "Identifique todos os escopos aplicáveis a esse job específico.",
                "Colisões de nomes são resolvidas por hierarquia, não por data."
            ]
        },
        "actions-182": {
            "prompt": "Um job não referencia nenhum ambiente. Seu repositório e sua organização definem API_KEY. Qual valor é lido por secrets.API_KEY?",
            "choices": [
                "O valor da organização",
                "O valor do repositório",
                "Ambos os valores concatenados",
                "Um erro em vez de qualquer um dos valores"
            ],
            "explanations": [
                "O escopo mais amplo da organização não anula o valor do repositório.",
                "Segredos do repositório prevalecem sobre os da organização com o mesmo nome.",
                "O GitHub escolhe por precedência; não concatena segredos com nomes coincidentes.",
                "Segredos com o mesmo nome em escopos diferentes são aceitos e têm precedência definida."
            ],
            "concept": "Substituição de segredos pelo repositório",
            "hints": [
                "Exclua escopos que o job não referencia.",
                "Padrões compartilhados e configurações locais podem usar deliberadamente o mesmo nome."
            ]
        },
        "actions-183": {
            "prompt": "Quando o GitHub lê um segredo de ambiente para um job que referencia esse ambiente?",
            "choices": [
                "Ao enfileirar o fluxo",
                "Ao iniciar o job",
                "Ao fazer commit do arquivo do fluxo",
                "Ao criar o repositório"
            ],
            "explanations": [
                "Ao enfileirar são lidos os segredos da organização e do repositório.",
                "Segredos de ambiente são lidos ao iniciar o job, não ao enfileirar o fluxo.",
                "Fazer commit do YAML não captura valores de segredos no arquivo do fluxo.",
                "Valores de segredos não ficam fixos na criação do repositório."
            ],
            "concept": "Momento de leitura de segredos por escopo",
            "hints": [
                "A entrada da execução na fila e o início de cada job são eventos diferentes.",
                "Uma execução pode conter jobs que começam muito depois."
            ]
        },
        "actions-184": {
            "prompt": "Qual armazenamento é adequado para uma configuração não sensível de toda a organização, como o hostname de um espelho de pacotes?",
            "choices": [
                "Um bloco env de um único fluxo",
                "Um valor de saída de uma única etapa",
                "Uma variável local do processo do runner",
                "Uma variável de configuração da organização"
            ],
            "explanations": [
                "O bloco env de um fluxo não expõe centralmente a configuração a outros repositórios.",
                "Saídas de etapas transmitem resultados, não mantêm configurações compartilhadas da organização.",
                "Uma variável de processo de uma máquina não é uma variável de organização centralizada.",
                "Variáveis de configuração armazenam configurações reutilizáveis não sensíveis e são lidas por vars."
            ],
            "concept": "Configuração compartilhada não sensível",
            "hints": [
                "Escolha o armazenamento pela sensibilidade e pelo escopo administrativo.",
                "O estado temporário de execução difere da configuração gerenciada centralmente."
            ]
        },
        "actions-185": {
            "prompt": "A organização e o repositório definem MIRROR como variável de configuração. Nenhuma variável de configuração do nível de ambiente se aplica. Qual valor de vars.MIRROR prevalece?",
            "choices": [
                "A variável de configuração do repositório",
                "A variável de configuração da organização",
                "A variável modificada mais recentemente",
                "Ambos os valores de variável concatenados"
            ],
            "explanations": [
                "Variáveis de configuração do repositório prevalecem sobre as da organização com o mesmo nome.",
                "O valor da organização fornece um padrão geral e perde para o escopo de repositório.",
                "A data de modificação não substitui a precedência documentada de escopos.",
                "Nomes coincidentes selecionam um valor por escopo, não concatenam ambos os valores."
            ],
            "concept": "Precedência de escopos de variáveis de configuração",
            "hints": [
                "Diferencie a hierarquia de escopos do histórico de edições.",
                "Trata-se do contexto vars, não de expansão de variáveis do shell."
            ]
        },
        "actions-186": {
            "prompt": "Quando as variáveis de configuração do nível de ambiente ficam disponíveis para um job?",
            "choices": [
                "Antes de começar o processamento do fluxo no GitHub",
                "Apenas depois que todo o fluxo terminar",
                "Depois que o job começa a executar no runner",
                "Apenas depois que uma etapa as grava em GITHUB_OUTPUT"
            ],
            "explanations": [
                "Elas não estão disponíveis durante o processamento inicial antes de executar o job.",
                "Elas podem ser usadas pelo job em execução, não apenas após o término do fluxo.",
                "Variáveis de configuração do nível de ambiente chegam durante a execução no runner, não em toda decisão inicial do fluxo.",
                "A disponibilidade de variáveis de configuração não exige publicar saídas de etapas."
            ],
            "concept": "Momento de disponibilidade da configuração do ambiente",
            "hints": [
                "Diferencie a preparação do fluxo no servidor da execução no runner.",
                "A precedência de um escopo não torna seus valores disponíveis em todas as fases."
            ]
        },
        "actions-187": {
            "prompt": "Qual expressão lê uma variável de configuração de repositório chamada PACKAGE_MIRROR?",
            "choices": [
                "${{ secrets.PACKAGE_MIRROR }}",
                "${{ inputs.PACKAGE_MIRROR }}",
                "${{ github.PACKAGE_MIRROR }}",
                "${{ vars.PACKAGE_MIRROR }}"
            ],
            "explanations": [
                "O contexto secrets lê segredos criptografados de um armazenamento separado.",
                "O contexto inputs lê parâmetros de invocação, não variáveis de configuração do repositório.",
                "O contexto github expõe metadados da execução, não variáveis de configuração arbitrárias.",
                "O contexto vars expõe variáveis de configuração."
            ],
            "concept": "Contexto de variáveis de configuração",
            "hints": [
                "Identifique onde o valor é armazenado antes de selecionar um contexto.",
                "Nomes iguais em armazenamentos diferentes não tornam esses armazenamentos intercambiáveis."
            ]
        },
        "actions-188": {
            "prompt": "Um proprietário da organização usa GitHub CLI autenticado. Qual comando cria um segredo da organização restrito a api e worker? Digite seu valor apenas quando solicitado.",
            "choices": [
                "gh secret set DEPLOY_KEY --org octo-org --visibility all",
                "gh secret set DEPLOY_KEY --repo octo-org/api",
                "gh secret set DEPLOY_KEY --org octo-org --repos api,worker",
                "gh variable set DEPLOY_KEY --org octo-org --repos api,worker"
            ],
            "explanations": [
                "--visibility all concede acesso a mais repositórios que o solicitado.",
                "--repo cria um segredo de repositório em vez de um segredo compartilhado da organização.",
                "--org seleciona o escopo da organização e --repos define a lista de repositórios selecionados.",
                "gh variable armazena uma variável de configuração, não um segredo criptografado."
            ],
            "concept": "Segredo da organização para repositórios selecionados via CLI",
            "hints": [
                "Confira tanto o subcomando quanto as opções de seleção de acesso.",
                "Não coloque credenciais reais em um exemplo de comando reutilizável."
            ]
        },
        "actions-189": {
            "prompt": "Um administrador de repositório usa GitHub CLI autenticado. Qual comando define DEPLOY_KEY em staging de octo-org/api? Seu valor será informado interativamente.",
            "choices": [
                "gh secret set DEPLOY_KEY --repo octo-org/api",
                "gh secret set DEPLOY_KEY --repo octo-org/api --env staging",
                "gh secret set DEPLOY_KEY --org octo-org --visibility private",
                "gh variable set DEPLOY_KEY --repo octo-org/api --env staging"
            ],
            "explanations": [
                "Sem --env, o comando define um segredo de repositório.",
                "--env staging seleciona o segredo de ambiente em vez do armazenamento do repositório.",
                "A opção de organização seleciona um escopo administrativo diferente.",
                "O subcomando variable não cria um segredo criptografado."
            ],
            "concept": "Seleção de segredos de ambiente via CLI",
            "hints": [
                "Aqui são necessárias tanto a identidade do repositório quanto a do ambiente.",
                "Opções de escopo alteram onde o valor é armazenado."
            ]
        },
        "actions-190": {
            "prompt": "Um administrador de repositório usa GitHub CLI autenticado. Qual comando define REGION=west não sensível como variável de configuração em staging de octo-org/api?",
            "choices": [
                "gh variable set REGION --repo octo-org/api --env staging --body west",
                "gh variable set REGION --repo octo-org/api --body west",
                "gh secret set REGION --repo octo-org/api --env staging --body west",
                "gh variable list --repo octo-org/api --env staging"
            ],
            "explanations": [
                "variable set com --env grava uma variável de configuração no escopo de ambiente.",
                "Omitir --env grava no escopo do repositório, não em staging.",
                "secret set seleciona o armazenamento de segredos criptografados, não variáveis de configuração.",
                "variable list consulta o catálogo e não define um valor."
            ],
            "concept": "Variável de configuração de ambiente via CLI",
            "hints": [
                "Escolha a categoria de armazenamento antes de conferir as opções de escopo.",
                "Uma operação de leitura não pode criar nem atualizar o valor solicitado."
            ]
        },
        "actions-191": {
            "prompt": "Antes de criptografar um segredo Actions de repositório para a API REST, qual recurso o cliente precisa obter?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/secrets/public-key",
                "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "GET /repos/{owner}/{repo}/actions/variables/{name}",
                "GET /repos/{owner}/{repo}/actions/runners"
            ],
            "explanations": [
                "O endpoint de chave pública retorna a chave e key_id usados para criptografar segredos.",
                "Metadados de segredo não fornecem a chave pública de criptografia do repositório.",
                "Uma variável de configuração não tem relação com a chave de criptografia de segredos do Actions.",
                "Listas de runners descrevem máquinas, não chaves de criptografia de segredos."
            ],
            "concept": "Obtenção da chave pública de segredos via REST",
            "hints": [
                "Criar segredos usa criptografia no cliente, não um campo de valor em texto simples.",
                "Escolha o recurso que fornece material de criptografia, não dados comuns de configuração."
            ]
        },
        "actions-192": {
            "prompt": "Qual solicitação REST cria ou atualiza um segredo Actions de repositório usando encrypted_value e key_id?",
            "choices": [
                "POST /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "PATCH /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
                "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"
            ],
            "explanations": [
                "POST não é o método documentado para esse endpoint de segredo nomeado.",
                "PATCH não é o método para criar ou atualizar segredos de repositório.",
                "O endpoint documentado para criar ou atualizar um segredo de repositório usa PUT.",
                "GET lê metadados e não pode gravar o segredo criptografado."
            ],
            "concept": "Criação ou atualização de segredos criptografados via REST",
            "hints": [
                "Diferencie atualizar um recurso nomeado de criar em uma coleção.",
                "O payload precisa usar a chave pública do mesmo escopo de segredo."
            ]
        },
        "actions-193": {
            "prompt": "O que GET /repos/{owner}/{repo}/actions/secrets/{secret_name} retorna para um segredo de repositório existente?",
            "choices": [
                "O valor descriptografado em texto simples do segredo",
                "Metadados como o nome do segredo e suas datas",
                "O payload encrypted_value reutilizável do segredo",
                "A chave privada de descriptografia do repositório"
            ],
            "explanations": [
                "Valores de segredos não podem ser recuperados como texto simples por esse endpoint.",
                "O endpoint de leitura expõe metadados, não o valor armazenado do segredo.",
                "A resposta não retorna o payload criptografado do segredo enviado.",
                "O GitHub não expõe aqui a chave privada de descriptografia do repositório."
            ],
            "concept": "API de leitura apenas de metadados de segredos",
            "hints": [
                "Diferencie descobrir a existência de um segredo de ler seu conteúdo.",
                "Campos enviados na escrita não precisam ser retornados na leitura."
            ]
        },
        "actions-194": {
            "prompt": "Qual método e caminho REST criam uma variável de configuração de repositório com um nome e um valor em texto simples?",
            "choices": [
                "PUT /repos/{owner}/{repo}/actions/variables/{name}",
                "GET /repos/{owner}/{repo}/actions/variables",
                "POST /repos/{owner}/{repo}/actions/secrets",
                "POST /repos/{owner}/{repo}/actions/variables"
            ],
            "explanations": [
                "A API de variáveis não usa esse caminho PUT para criar variáveis.",
                "GET lista variáveis em vez de criá-las.",
                "O armazenamento de segredos usa outra interface criptografada de criação ou atualização.",
                "Criar variáveis de repositório usa POST na coleção variables."
            ],
            "concept": "Criação de variáveis de configuração via REST",
            "hints": [
                "Segredos e variáveis têm payloads e métodos de endpoint diferentes.",
                "Confira tanto a família de recursos quanto se a operação lê ou grava."
            ]
        },
        "actions-195": {
            "prompt": "Qual solicitação REST altera o valor de uma variável de configuração de repositório existente?",
            "choices": [
                "GET /repos/{owner}/{repo}/actions/variables/{name}",
                "DELETE /repos/{owner}/{repo}/actions/variables/{name}",
                "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
                "PUT /repos/{owner}/{repo}/actions/variables/{name}"
            ],
            "explanations": [
                "GET obtém a variável, mas não a atualiza.",
                "DELETE remove a variável em vez de alterar seu valor.",
                "O endpoint de atualização de variáveis de repositório usa PATCH com os campos alterados.",
                "PUT é usado na API de criação ou atualização de segredos, não nesse endpoint de variável."
            ],
            "concept": "Atualização de variáveis de configuração via REST",
            "hints": [
                "Compare o efeito da operação antes de escolher o método HTTP.",
                "Não aplique a convenção de criação ou atualização de segredos a variáveis."
            ]
        },
        "actions-196": {
            "prompt": "Qual permissão explícita do GITHUB_TOKEN permite ler arquivos do repositório sem conceder escrita?",
            "choices": [
                "contents: read",
                "issues: read",
                "packages: read",
                "actions: read"
            ],
            "explanations": [
                "Contents read concede leitura do conteúdo do repositório.",
                "Issues read se refere a dados de issues, não aos arquivos do repositório.",
                "Packages read se refere ao conteúdo do registro de pacotes.",
                "Actions read se refere a recursos do Actions, não aos arquivos-fonte."
            ],
            "concept": "Conceda ao token apenas as capacidades do repositório necessárias ao job.",
            "hints": [
                "Diferencie provar a identidade de obter autorização no destino.",
                "Compare o escopo da credencial com a operação realmente necessária."
            ]
        },
        "actions-197": {
            "prompt": "O que a federação OIDC elimina de um workflow de implantação em nuvem compatível?",
            "choices": [
                "A necessidade de limitar as permissões do papel de implantação",
                "A necessidade de guardar um segredo de nuvem duradouro",
                "A necessidade de configurar autorização na nuvem",
                "A necessidade de validar a identidade do workflow"
            ],
            "explanations": [
                "Papéis federados ainda precisam de permissões mínimas.",
                "A federação troca a identidade do workflow por credenciais de curta duração.",
                "Confiança e autorização na nuvem ainda exigem configuração.",
                "A nuvem precisa verificar as declarações de identidade apresentadas."
            ],
            "concept": "OIDC reduz o armazenamento de credenciais persistentes, não os requisitos de autorização.",
            "hints": [
                "Diferencie provar a identidade de obter autorização no destino.",
                "Compare o escopo da credencial com a operação realmente necessária."
            ]
        },
        "actions-198": {
            "prompt": "Qual permissão do workflow permite solicitar um token de identidade OIDC do GitHub?",
            "choices": [
                "deployments: write",
                "packages: write",
                "id-token: write",
                "contents: write"
            ],
            "explanations": [
                "Deployments write se refere a registros de implantação do GitHub.",
                "Packages write se refere a operações do registro de pacotes.",
                "Id-token write permite solicitar um token OIDC.",
                "Contents write permite operações sobre o conteúdo do repositório."
            ],
            "concept": "Poder solicitar um token de identidade não equivale a poder alterar recursos da nuvem.",
            "hints": [
                "Diferencie provar a identidade de obter autorização no destino.",
                "Compare o escopo da credencial com a operação realmente necessária."
            ]
        },
        "actions-199": {
            "prompt": "Um token OIDC é emitido com sucesso. O que ainda controla o acesso aos recursos da nuvem de destino?",
            "choices": [
                "A permissão contents: write do job",
                "O papel de colaborador do runner no repositório",
                "As proteções de branches do repositório",
                "A política de confiança e o papel autorizado na nuvem"
            ],
            "explanations": [
                "Contents write autoriza operações sobre conteúdo do repositório, não acesso à nuvem.",
                "Colaborar em um repositório não concede o papel de nuvem.",
                "A proteção de branches não concede permissões sobre recursos da nuvem.",
                "A nuvem valida declarações de identidade e concede as permissões do papel configurado."
            ],
            "concept": "Emitir o token com sucesso não concede acesso aos recursos da nuvem por si só.",
            "hints": [
                "Diferencie provar a identidade de obter autorização no destino.",
                "Compare o escopo da credencial com a operação realmente necessária."
            ]
        },
        "actions-200": {
            "prompt": "Qual declaração de um token OIDC identifica o público-alvo que uma política de confiança da nuvem pode validar?",
            "choices": [
                "aud",
                "sub",
                "iss",
                "exp"
            ],
            "explanations": [
                "Aud identifica o público-alvo do token.",
                "Sub identifica o sujeito representado pelo token.",
                "Iss identifica o emissor do token.",
                "Exp indica o horário de expiração do token."
            ],
            "concept": "A confiança na nuvem avalia o público-alvo junto ao sujeito e outras declarações de identidade.",
            "hints": [
                "Diferencie provar a identidade de obter autorização no destino.",
                "Compare o escopo da credencial com a operação realmente necessária."
            ]
        },
        "actions-201": {
            "prompt": "Uma etapa Bash recebe um título de pull request não confiável em PR_TITLE. Qual uso o mantém como dados sem avaliá-lo?",
            "choices": [
                "sh -c \"$PR_TITLE\"",
                "printf '%s\\n' \"$PR_TITLE\"",
                "eval \"$PR_TITLE\"",
                "bash -c \"$PR_TITLE\""
            ],
            "explanations": [
                "Sh -c executa o título como uma string de comandos.",
                "Um formato printf fixo e uma expansão entre aspas tratam o título como dados.",
                "Eval reinterpreta o título como instruções de shell.",
                "Bash -c executa o título como uma string de comandos."
            ],
            "concept": "Passe contexto não confiável por uma variável de ambiente e evite avaliar seu conteúdo.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-202": {
            "prompt": "Qual é o principal perigo de executar o script de build de um fork em um job pull_request_target privilegiado?",
            "choices": [
                "O script não pode acessar serviços de rede",
                "O job sempre executa em isolamento automático",
                "Código não confiável pode usar os privilégios do job",
                "O evento sempre desativa a autenticação do repositório"
            ],
            "explanations": [
                "O gatilho não garante isolamento de rede.",
                "O gatilho não isola código não confiável automaticamente.",
                "O código do fork pode acessar credenciais e operações privilegiadas.",
                "Esse evento pode ter acesso privilegiado, não desativá-lo."
            ],
            "concept": "Um evento privilegiado é inseguro quando executa código de pull requests não confiáveis.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-203": {
            "prompt": "Um job workflow_run privilegiado baixa um artefato de testes de PR não confiáveis. Qual regra deve orientar seu uso?",
            "choices": [
                "Confiar no conteúdo porque GitHub armazenou o artefato",
                "Confiar no conteúdo se o nome terminar em .zip",
                "Executar seus scripts antes de verificar a execução de origem",
                "Tratar seu conteúdo como não confiável e validar antes do uso"
            ],
            "explanations": [
                "Hospedar um artefato não valida seu conteúdo.",
                "A extensão de um arquivo não estabelece procedência confiável.",
                "Executar antes de validar cruza o limite de confiança.",
                "Armazenamento não estabelece confiança; valide produtor, conteúdo e uso permitido."
            ],
            "concept": "Passar dados entre workflows não remove seu nível de confiança original.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-204": {
            "prompt": "Qual arquivo gerado fixa dependências diretas e transitivas de ações de um workflow em commits específicos?",
            "choices": [
                ".github/workflows/actions.lock",
                ".github/dependabot.yml",
                ".github/CODEOWNERS",
                ".github/workflows/deploy.yml"
            ],
            "explanations": [
                "O arquivo de bloqueio registra commits de ações e identidades de origem.",
                "A configuração do Dependabot controla atualizações, não o inventário de resolução.",
                "Code owners identifica revisores, não dependências de ações resolvidas.",
                "Um arquivo comum de workflow não é o arquivo de bloqueio gerado."
            ],
            "concept": "Arquivos de bloqueio cobrem dependências de ações; chamadas de workflows reutilizáveis precisam de controle de versão separado.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-205": {
            "prompt": "O que o selo Verified creator de uma ação do GitHub Marketplace estabelece?",
            "choices": [
                "Todas as referências de versão são imutáveis",
                "GitHub verificou a identidade do publicador",
                "GitHub auditou cada linha da ação",
                "Todas as versões estão livres de vulnerabilidades"
            ],
            "explanations": [
                "O selo não torna tags ou branches imutáveis.",
                "O selo é um sinal de identidade do publicador.",
                "Verificar uma identidade não é auditar todo o código-fonte.",
                "Uma identidade verificada não garante versões sem vulnerabilidades."
            ],
            "concept": "A identidade do publicador e a segurança do código oferecem garantias diferentes.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-206": {
            "prompt": "Qual comando de workflow registra um valor sensível gerado dinamicamente para ocultá-lo nos logs?",
            "choices": [
                "::notice::VALUE",
                "::error::VALUE",
                "::add-mask::VALUE",
                "::debug::VALUE"
            ],
            "explanations": [
                "Notice cria uma anotação, não registra ocultação.",
                "Error cria uma anotação de erro, não registra ocultação.",
                "Add-mask registra o valor para ocultação nos logs.",
                "Debug emite uma mensagem de diagnóstico, não registra ocultação."
            ],
            "concept": "Registre valores sensíveis gerados antes de operações que possam imprimi-los.",
            "hints": [
                "Um filtro de exibição e a validade de uma credencial são controles distintos.",
                "Considere transformações e armazenamento como caminhos de exposição diferentes."
            ]
        },
        "actions-207": {
            "prompt": "Por que não se deve presumir que um segredo codificado em Base64 herda a ocultação do valor original nos logs?",
            "choices": [
                "Valores Base64 estão isentos de ocultação em logs",
                "Somente segredos de organização podem registrar máscaras codificadas",
                "A ocultação só se aplica a anotações de erro",
                "A ocultação não reconhece valores transformados de forma confiável"
            ],
            "explanations": [
                "Valores sensíveis codificados podem ser registrados para ocultação.",
                "Valores gerados ou transformados podem ser ocultados independentemente do escopo do segredo.",
                "A ocultação não se limita a anotações de erro.",
                "Um valor transformado pode exigir ocultação separada e não deve ser registrado."
            ],
            "concept": "Codificar não equivale a criptografar nem garante ocultação.",
            "hints": [
                "Um filtro de exibição e a validade de uma credencial são controles distintos.",
                "Considere transformações e armazenamento como caminhos de exposição diferentes."
            ]
        },
        "actions-208": {
            "prompt": "Uma credencial ativa aparece sem ocultação em um log de workflow. Qual resposta trata tanto a exposição quanto o acesso continuado?",
            "choices": [
                "Revogá-la ou rotacioná-la e remover os logs expostos",
                "Renomear o segredo e manter os logs expostos",
                "Executar o job novamente e manter a credencial original",
                "Desativar a depuração e manter a credencial inalterada"
            ],
            "explanations": [
                "Rotacionar invalida o acesso exposto; excluir logs limita novas divulgações.",
                "Renomear um segredo não invalida seu valor.",
                "Executar novamente não invalida a credencial vazada.",
                "Alterar logs futuros não revoga um valor já exposto."
            ],
            "concept": "Reduzir a exposição retida e invalidar credenciais vazadas são tarefas distintas.",
            "hints": [
                "Um filtro de exibição e a validade de uma credencial são controles distintos.",
                "Considere transformações e armazenamento como caminhos de exposição diferentes."
            ]
        },
        "actions-209": {
            "prompt": "Por que credenciais de nuvem devem ser excluídas de um cache de dependências do GitHub Actions?",
            "choices": [
                "O cache revoga permanentemente qualquer credencial recebida",
                "Workflows não confiáveis podem restaurar conteúdo de cache acessível",
                "O cache criptografa credenciais apenas para seu proprietário",
                "Somente o job criador pode restaurar um cache"
            ],
            "explanations": [
                "Armazenar uma credencial não a revoga.",
                "O acesso ao cache pode permitir que outros workflows, inclusive PRs de forks, leiam dados.",
                "Um cache não é um armazenamento de segredos exclusivo do proprietário.",
                "Caches são projetados para reutilização em execuções elegíveis."
            ],
            "concept": "Caches de dependências não devem conter segredos nem outros arquivos sensíveis.",
            "hints": [
                "Um filtro de exibição e a validade de uma credencial são controles distintos.",
                "Considere transformações e armazenamento como caminhos de exposição diferentes."
            ]
        },
        "actions-210": {
            "prompt": "Qual recurso fornece uma declaração assinada sobre a origem de compilação de um artefato?",
            "choices": [
                "Cache de dependências",
                "Proteção de branches",
                "Atestação de artefatos",
                "Retenção de artefatos"
            ],
            "explanations": [
                "Cache reutiliza arquivos para reduzir trabalho repetido.",
                "Proteção de branches controla alterações em branches.",
                "Atestações vinculam um artefato ao produtor e ao contexto da compilação.",
                "Retenção determina por quanto tempo uma saída fica disponível."
            ],
            "concept": "A procedência de compilação deve ser verificada conforme a política de confiança do consumidor.",
            "hints": [
                "Diferencie a origem de uma compilação da segurança de seu conteúdo.",
                "Compare tanto a identidade do produtor quanto o conteúdo exato com a política."
            ]
        },
        "actions-211": {
            "prompt": "Um job de atestação de binários já tem contents: read. Qual par adicional de permissões permite assinatura de identidade e armazenamento de atestações?",
            "choices": [
                "packages: write; issues: write",
                "deployments: write; statuses: write",
                "checks: write; pull-requests: write",
                "id-token: write; attestations: write"
            ],
            "explanations": [
                "Permissões de pacotes e issues não fornecem o acesso de identidade e atestação necessário.",
                "Permissões de implantações e status não fornecem o acesso de identidade e atestação necessário.",
                "Permissões de checks e pull requests não fornecem o acesso de identidade e atestação necessário.",
                "O workflow precisa de acesso ao token de identidade e escrita de atestações."
            ],
            "concept": "Jobs de atestação precisam de permissões explícitas para identidade de assinatura e publicação de atestações.",
            "hints": [
                "Diferencie a origem de uma compilação da segurança de seu conteúdo.",
                "Compare tanto a identidade do produtor quanto o conteúdo exato com a política."
            ]
        },
        "actions-212": {
            "prompt": "Qual comando do GitHub CLI verifica a atestação de um binário local em relação ao repositório de origem esperado?",
            "choices": [
                "gh attestation verify dist/tool -R octo-org/tool",
                "gh run download 123 -R octo-org/tool",
                "gh release view v1.0 -R octo-org/tool",
                "gh api repos/octo-org/tool/actions/artifacts"
            ],
            "explanations": [
                "Attestation verify confere o binário com a procedência do repositório esperado.",
                "Run download obtém artefatos sem realizar essa verificação de atestação.",
                "Release view mostra informações de uma versão, não verifica a atestação do binário.",
                "Listar artefatos não verifica a atestação de um binário local."
            ],
            "concept": "A verificação vincula o artefato local ao produtor esperado, não apenas a um local de download.",
            "hints": [
                "Diferencie a origem de uma compilação da segurança de seu conteúdo.",
                "Compare tanto a identidade do produtor quanto o conteúdo exato com a política."
            ]
        },
        "actions-213": {
            "prompt": "A procedência de um binário é verificada com sucesso em relação ao repositório e workflow esperados. Qual conclusão ainda NÃO é justificada?",
            "choices": [
                "O contexto da compilação pode ser comparado à política",
                "O binário não contém vulnerabilidades exploráveis",
                "A atestação identifica o produtor esperado",
                "A atestação cobre o binário que está sendo verificado"
            ],
            "explanations": [
                "O contexto de compilação atestado pode apoiar uma decisão de política.",
                "Verificar procedência não estabelece que o software está livre de vulnerabilidades.",
                "Procedência correspondente pode estabelecer a identidade do produtor esperado.",
                "Verificar o conteúdo vincula a atestação ao binário conferido."
            ],
            "concept": "Uma origem autêntica não substitui a avaliação de segurança do software.",
            "hints": [
                "Diferencie a origem de uma compilação da segurança de seu conteúdo.",
                "Compare tanto a identidade do produtor quanto o conteúdo exato com a política."
            ]
        },
        "actions-214": {
            "prompt": "Quando revisores obrigatórios do ambiente são compatíveis, qual opção impede o iniciador de aprovar a própria implantação?",
            "choices": [
                "Deployment branches and tags",
                "Environment secrets",
                "Prevent self-review",
                "Wait timer"
            ],
            "explanations": [
                "Restrições de branches e tags selecionam referências, não identidades aprovadoras.",
                "Segredos do ambiente armazenam valores, não excluem autoaprovação.",
                "Prevent self-review exclui o iniciador de aprovar aquela implantação.",
                "Wait timer atrasa a implantação, não exclui o iniciador da aprovação."
            ],
            "concept": "Revisores obrigatórios e prevenção de autorrevisão são controles de ambiente separados.",
            "hints": [
                "Diferencie quem pode aprovar de qual revisão pode ser implantada.",
                "Verifique as proteções do ambiente e a disponibilidade do recurso."
            ]
        },
        "actions-215": {
            "prompt": "Qual controle do ambiente restringe implantações a padrões configurados de nomes de branches e tags?",
            "choices": [
                "Required reviewers",
                "Wait timer",
                "Environment secrets",
                "Selected branches and tags"
            ],
            "explanations": [
                "Required reviewers controla aprovação, não padrões de nomes de referências.",
                "Wait timer atrasa a implantação, não seleciona referências.",
                "Segredos do ambiente fornecem valores, não restrições de nomes de referências.",
                "Selected branches and tags permite configurar padrões de nomes permitidos."
            ],
            "concept": "Restrições de referências implantáveis e aprovações resolvem problemas distintos.",
            "hints": [
                "Diferencie quem pode aprovar de qual revisão pode ser implantada.",
                "Verifique as proteções do ambiente e a disponibilidade do recurso."
            ]
        },
        "actions-216": {
            "prompt": "Builds de forks públicos precisam executar código não confiável. Qual projeto limita melhor persistência e acesso à produção?",
            "choices": [
                "Runners isolados descartáveis sem acesso à produção",
                "Runners de implantação persistentes com aprovação de ambiente",
                "Runners de produção compartilhados com menos logs",
                "Runners privilegiados reutilizáveis com menos etapas"
            ],
            "explanations": [
                "O isolamento descartável limita persistência; separar rede e credenciais limita acesso à produção.",
                "Aprovar o ambiente não isola um runner persistente do código executado.",
                "Reduzir logs não isola infraestrutura conectada à produção.",
                "Menos etapas não removem privilégios nem comprometimento persistente."
            ],
            "concept": "Isolamento, ciclo de vida, credenciais e rede do runner definem o limite de confiança.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-217": {
            "prompt": "Qual tarefa combina melhor com um cache de dependências do que com um artefato de workflow?",
            "choices": [
                "Preservar um arquivo diagnóstico de um build com falha",
                "Reutilizar pacotes baixados entre builds compatíveis",
                "Reter um binário de versão para download posterior",
                "Compartilhar um relatório de testes com um revisor"
            ],
            "explanations": [
                "Um arquivo diagnóstico é uma saída retida, não um cache de dependências.",
                "Caches aceleram builds reutilizando arquivos de dependências regeneráveis.",
                "Um binário retido é uma saída adequada a um artefato ou ativo de versão.",
                "Um relatório é uma saída adequada à retenção como artefato."
            ],
            "concept": "Use caches para entradas reutilizáveis e artefatos para saídas retidas.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-218": {
            "prompt": "Um cache de dependências existente tem conteúdo desatualizado. Como o workflow pode salvar uma substituição sem excluí-lo?",
            "choices": [
                "Alterar seus arquivos por restore-keys",
                "Ampliar seu conteúdo definindo cache-hit",
                "Criar um cache com uma chave nova",
                "Sobrescrevê-lo reutilizando a mesma chave"
            ],
            "explanations": [
                "Restore-keys seleciona caches alternativos, não os edita.",
                "Cache-hit informa o estado de restauração, não modifica arquivos armazenados.",
                "O conteúdo existente é imutável; uma chave nova cria outro cache.",
                "Uma chave existente exata não sobrescreve o conteúdo daquele cache."
            ],
            "concept": "Chaves de cache identificam conteúdo armazenado imutável.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-219": {
            "prompt": "Uma matriz de testes inclui pares de sistema operacional e runtime incompatíveis. Qual alteração evita gastar tempo de runner com eles?",
            "choices": [
                "Reduzir strategy.max-parallel sem alterar combinações",
                "Definir continue-on-error em todos os jobs",
                "Aumentar timeout-minutes de toda a matriz",
                "Remover esses pares com strategy.matrix.exclude"
            ],
            "explanations": [
                "Max-parallel muda concorrência, não a quantidade de combinações.",
                "Continue-on-error muda o tratamento de falhas, não quais jobs são criados.",
                "Um timeout maior permite executar por mais tempo, não exclui combinações.",
                "Matrix exclude remove combinações selecionadas dos jobs gerados."
            ],
            "concept": "Remova trabalho desnecessário da matriz em vez de alterar apenas agendamento ou resultado.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-220": {
            "prompt": "Um workflow já usa um grupo de concorrência específico de branch. Qual opção cancela seu job anterior em execução quando outro entra no grupo?",
            "choices": [
                "cancel-in-progress: true",
                "strategy.fail-fast: true",
                "continue-on-error: true",
                "timeout-minutes: 1"
            ],
            "explanations": [
                "Cancel-in-progress cancela trabalho anterior em execução do mesmo grupo.",
                "Fail-fast cancela trabalho de matriz após falha, não por uma nova execução agrupada.",
                "Continue-on-error muda tratamento de falhas, não cancelamento por concorrência.",
                "Um timeout limita duração, não responde a trabalho mais recente."
            ],
            "concept": "O grupo seleciona trabalho relacionado; cancel-in-progress controla o cancelamento de trabalho em execução.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-221": {
            "prompt": "Dentro dos limites permitidos, qual entrada de upload-artifact retém um pacote diagnóstico por três dias?",
            "choices": [
                "if-no-files-found: warn",
                "retention-days: 3",
                "timeout-minutes: 3",
                "compression-level: 3"
            ],
            "explanations": [
                "If-no-files-found controla o tratamento de arquivos de entrada ausentes.",
                "Retention-days controla por quanto tempo o artefato enviado é retido.",
                "Timeout-minutes limita execução, não a vida do armazenamento do artefato.",
                "Compression-level muda o esforço de compressão, não a retenção."
            ],
            "concept": "A retenção de artefatos pode ser reduzida por envio dentro dos limites administrativos.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-222": {
            "prompt": "Qual solicitação REST exclui um artefato de workflow armazenado e mantém sua execução intacta?",
            "choices": [
                "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}",
                "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
                "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
            ],
            "explanations": [
                "Excluir a execução contradiz o requisito de preservá-la.",
                "Cancelar uma execução não exclui o artefato armazenado selecionado.",
                "O endpoint DELETE do artefato o remove sem excluir sua execução.",
                "O endpoint GET lê metadados, não exclui o artefato."
            ],
            "concept": "O ciclo de vida de artefatos e o de execuções têm operações distintas.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-223": {
            "prompt": "Qual chave no nível de job limita a vinte minutos um job do GitHub Actions que pode travar?",
            "choices": [
                "max-parallel: 20",
                "retention-days: 20",
                "fetch-depth: 20",
                "timeout-minutes: 20"
            ],
            "explanations": [
                "Max-parallel limita jobs de matriz simultâneos, não duração.",
                "Retention-days controla armazenamento de artefatos, não duração do job.",
                "Fetch-depth controla histórico Git obtido, não duração do job.",
                "Timeout-minutes do job limita a duração da execução."
            ],
            "concept": "Defina um timeout de execução no nível do job para limitar trabalho travado.",
            "hints": [
                "Diferencie entradas reutilizáveis de compilação de saídas retidas.",
                "Considere se a alteração afeta execução, paralelismo ou armazenamento."
            ]
        },
        "actions-224": {
            "prompt": "Qual valor de package-ecosystem habilita atualizações de versão do Dependabot para referências de ações em workflows?",
            "choices": [
                "github-actions",
                "docker",
                "npm",
                "gitsubmodule"
            ],
            "explanations": [
                "Github-actions habilita atualizações de referências de ações e workflows reutilizáveis compatíveis.",
                "Docker monitora dependências de imagens, não referências de ações de workflows.",
                "Npm monitora pacotes JavaScript, não referências de ações.",
                "Gitsubmodule monitora referências de submódulos Git, não referências de ações de workflows."
            ],
            "concept": "O ecossistema do Dependabot seleciona o formato de dependências que ele monitora.",
            "hints": [
                "Acompanhe o limite entre instruções confiáveis e dados não confiáveis.",
                "Identifique qual identidade, versão ou contexto de execução está sendo considerado confiável."
            ]
        },
        "actions-225": {
            "prompt": "Ao criar uma atestação de imagem de contêiner, o que identifica o conteúdo exato da imagem em vez de uma tag móvel?",
            "choices": [
                "Apenas o hostname do registro",
                "O digest SHA256 da imagem",
                "A tag latest da imagem",
                "O nome exibido do workflow"
            ],
            "explanations": [
                "O hostname do registro identifica um serviço, não conteúdo específico de uma imagem.",
                "Um digest identifica o conteúdo e é fornecido como subject-digest.",
                "Uma tag mutável pode apontar para outro conteúdo depois.",
                "O nome exibido descreve um workflow, não o conteúdo de uma imagem."
            ],
            "concept": "A procedência de contêineres se vincula a digests de conteúdo, não a nomes mutáveis.",
            "hints": [
                "Diferencie a origem de uma compilação da segurança de seu conteúdo.",
                "Compare tanto a identidade do produtor quanto o conteúdo exato com a política."
            ]
        }
    }
};
