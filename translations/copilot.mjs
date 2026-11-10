// Original practice material translated for Preview. AI self-reviewed; not human approved.
// English content and each translation require separate revision-specific human approval.
// All 225 items in both languages were self-reviewed for semantic and positional alignment.
// November 9 refresh: all 225 items per language; commands and UI paths stay literal.
const item = (prompt, choices, explanations, concept, hints) => ({ prompt, choices, explanations, concept, hints });
export const translations = { es: {}, 'pt-BR': {} };
const add = (n, es, pt) => {
  const id = `copilot-${String(n).padStart(3, '0')}`;
  translations.es[id] = item(...es);
  translations['pt-BR'][id] = item(...pt);
};
add(206, [
  "¿Qué registro es más útil para determinar si una política de Copilot empresarial cambió antes de un incidente?",
  ["La página de política actual", "El recuento de sugerencias generadas", "El registro de auditoría empresarial", "La confirmación de código más reciente"],
  ["Los ajustes actuales no establecen cómo estaban configurados antes.", "Los conteos de sugerencias no registran cambios administrativos de políticas.", "El registro de auditoría empresarial registra cambios de ajustes y políticas del plan Copilot.", "Un commit de código no necesariamente registra ajustes administrativos."],
  "Registro de auditoría de cambios de política",
  ["¿El estado actual muestra el estado anterior?", "¿Qué registro sigue los cambios administrativos en el tiempo?"]
], [
  "Qual registro é mais útil para determinar se uma política do Copilot empresarial mudou antes de um incidente?",
  ["A página de política atual", "A contagem de sugestões geradas", "O log de auditoria empresarial", "O commit de código mais recente"],
  ["Configurações atuais não estabelecem como estavam antes.", "Contagens de sugestões não registram alterações administrativas de políticas.", "O log de auditoria empresarial registra alterações de configurações e políticas do plano Copilot.", "Um commit de código não necessariamente registra configurações administrativas."],
  "Trilha de auditoria de alterações de política",
  ["O estado atual mostra o estado anterior?", "Qual registro acompanha mudanças administrativas ao longo do tempo?"]
]);
add(207, [
  "En una experiencia compatible donde la exclusión está activa, ¿cómo afecta el contenido excluido a las respuestas de Copilot?",
  ["Sigue disponible cuando se abre un archivo cercano", "También queda oculto para las personas colaboradoras", "Solo se envía si se omite el nombre del archivo", "El contenido excluido no aporta contexto a Copilot"],
  ["La política se aplica al contenido excluido, no solo a si su pestaña está abierta.", "La exclusión de contenido no es una regla de autorización para las personas.", "Omitir el nombre del archivo no invalida una exclusión activa.", "La exclusión documentada impide que el contenido afectado informe las respuestas de Copilot."],
  "Efecto de la exclusión de contenido",
  ["¿La exclusión se aplica al contenido o a su pestaña?", "Distingue el contexto de Copilot del acceso humano al repositorio."]
], [
  "Em uma experiência com suporte e exclusão efetiva, como o conteúdo excluído afeta as respostas do Copilot?",
  ["Continua disponível quando um arquivo próximo está aberto", "Também fica oculto para colaboradores humanos", "Só é enviado quando o nome do arquivo é omitido", "O conteúdo excluído não informa as respostas do Copilot"],
  ["A política se aplica ao conteúdo excluído, não apenas à abertura de sua aba.", "Exclusão de conteúdo não é regra de autorização para pessoas.", "Omitir o nome do arquivo não invalida uma exclusão efetiva.", "A exclusão documentada impede que o conteúdo afetado informe respostas do Copilot."],
  "Efeito da exclusão de conteúdo",
  ["A exclusão se aplica ao conteúdo ou à aba do arquivo?", "Diferencie o contexto do Copilot do acesso humano ao repositório."]
]);
add(208, [
  "¿Qué demuestra que una sugerencia de Copilot no tenga una referencia de coincidencia con código público?",
  ["No hallar coincidencias no prueba originalidad ni autorización", "La sugerencia está certificada como original", "Se han despejado todos los derechos de terceros", "La búsqueda cubrió todos los repositorios y sitios de código"],
  ["La falta de referencia no demuestra originalidad ni autorización legal.", "La función de coincidencias no certifica originalidad.", "La falta de una referencia no elimina derechos u obligaciones aplicables.", "El alcance documentado no incluye todo el código ni todos los sitios."],
  "Límites de resultados sin coincidencia",
  ["¿Qué podría no encontrar una búsqueda?", "¿La ausencia de una coincidencia detectada resuelve una cuestión de licencia?"]
], [
  "O que a ausência de uma referência de correspondência com código público comprova sobre uma sugestão do Copilot?",
  ["Não encontrar correspondência não comprova originalidade nem liberação", "A sugestão está certificada como original", "Todos os direitos de terceiros foram liberados", "A pesquisa cobriu todos os repositórios e sites de código"],
  ["A falta de referência não comprova originalidade nem liberação jurídica.", "O recurso de correspondência não certifica originalidade.", "A falta de referência não elimina direitos ou obrigações aplicáveis.", "O escopo documentado não inclui todo o código nem todos os sites."],
  "Limites de resultados sem correspondência",
  ["O que uma pesquisa pode deixar de encontrar?", "A ausência de correspondência detectada resolve uma questão de licença?"]
]);
add(209, [
  "Copilot proporciona una referencia a un repositorio público y su licencia para una sugerencia coincidente. ¿Qué debería hacer la persona desarrolladora antes de reutilizar el código?",
  ["Una referencia de código concede licencia de reutilización", "Revisar la fuente y la licencia aplicable", "Borrar la referencia elimina los derechos originales", "Todos los repositorios usan la misma licencia"],
  ["Una referencia de coincidencia no es permiso del titular de derechos.", "La referencia ayuda a identificar la fuente y la licencia para evaluar los derechos.", "Quitar la referencia no elimina obligaciones ni demuestra originalidad.", "Las licencias varían entre repositorios."],
  "Revisión de referencias de código público",
  ["¿Qué permite inspeccionar la referencia?", "¿Quién determina si el uso previsto cumple la licencia de origen?"]
], [
  "O Copilot fornece uma referência a um repositório público e à licença para uma sugestão correspondente. O que o desenvolvedor deve fazer antes de reutilizar o código?",
  ["Uma referência de código concede licença de reutilização", "Revisar a fonte e a licença aplicável", "Excluir a referência remove os direitos originais", "Todos os repositórios usam a mesma licença"],
  ["Uma referência de correspondência não é permissão do titular dos direitos.", "A referência ajuda a identificar fonte e licença para avaliar os direitos.", "Remover a referência não elimina obrigações nem comprova originalidade.", "As licenças variam entre repositórios."],
  "Revisão de referências de código público",
  ["O que a referência ajuda a inspecionar?", "Quem determina se o uso pretendido cumpre a licença de origem?"]
]);
add(210, [
  "¿Qué afirmación coincide con el alcance documentado de la coincidencia con código público de GitHub Copilot?",
  ["Buscar en todos los repositorios públicos y privados", "Tomar la coincidencia como evaluación jurídica", "Un índice público de GitHub actualizado periódicamente", "Buscar solo en el repositorio actual"],
  ["La documentación no describe una búsqueda universal en vivo ni de repositorios privados.", "Las referencias de coincidencia no son una opinión jurídica completa.", "El corpus documentado es un índice público de GitHub que se actualiza periódicamente y tiene límites.", "El índice no se limita al repositorio actual."],
  "Alcance de coincidencias con código público",
  ["¿Qué corpus identifica la documentación?", "¿Una función de coincidencia reemplaza la revisión jurídica?"]
], [
  "Qual afirmação corresponde ao escopo documentado de correspondência com código público do GitHub Copilot?",
  ["Pesquisar em todos os repositórios públicos e privados", "Tratar a correspondência como análise jurídica", "Um índice público do GitHub atualizado periodicamente", "Pesquisar apenas no repositório atual"],
  ["A documentação não descreve uma pesquisa universal ao vivo nem de repositórios privados.", "Referências de correspondência não são uma opinião jurídica completa.", "O corpus documentado é um índice público do GitHub atualizado periodicamente e com limites.", "O índice não se limita ao repositório atual."],
  "Escopo de correspondência com código público",
  ["Qual corpus a documentação identifica?", "Um recurso de correspondência substitui a revisão jurídica?"]
]);
add(211, [
  "¿Qué patrón de exclusión de repositorio está documentado para archivos terminados en .cfg en cualquier lugar del repositorio?",
  ["*.pem", "secrets/**", "config/local.json", "\"*.cfg\""],
  ["Esto apunta a un directorio llamado cfg, no a la extensión.", "Esto coincide con otro sufijo.", "Esto limita la regla a un directorio y no a todo el repositorio.", "El patrón de sufijo documentado coincide con archivos terminados en .cfg en todo el repositorio."],
  "Patrones glob de nombres",
  ["¿El requisito se basa en un sufijo o en un directorio?", "¿Qué patrón cubre los nombres coincidentes en todo el repositorio?"]
], [
  "Qual padrão de exclusão do repositório está documentado para arquivos terminados em .cfg em qualquer lugar do repositório?",
  ["*.pem", "secrets/**", "config/local.json", "\"*.cfg\""],
  ["Isto aponta para um diretório chamado cfg, não para a extensão.", "Isto corresponde a outro sufixo.", "Isto limita a regra a um diretório, não ao repositório inteiro.", "O padrão de sufixo documentado corresponde a arquivos terminados em .cfg em todo o repositório."],
  "Padrões glob de nomes",
  ["O requisito é baseado em sufixo de nome ou diretório?", "Qual padrão cobre os nomes correspondentes em todo o repositório?"]
]);
add(212, [
  "¿Comprar un plan de Copilot otorga permiso para reutilizar cualquier código de terceros que aparezca en una salida?",
  ["No; evaluar los derechos y las licencias de terceros", "El código generado siempre recibe una licencia universal", "Un plan de pago de Copilot cambia las licencias de terceros", "Una coincidencia con código público nunca requiere atribución ni revisión"],
  ["Una suscripción no otorga permiso general para usar material de terceros.", "Los planes de Copilot no relicencian otros repositorios.", "Editar código no elimina automáticamente los derechos u obligaciones aplicables.", "La respuesta adecuada es evaluar, no imponer una prohibición universal."],
  "Derechos de terceros y resultados",
  ["¿Qué autoriza una suscripción y qué derechos pertenecen a terceros?", "¿Editar por sí solo resuelve las cuestiones de licencia?"]
], [
  "Comprar um plano do Copilot concede permissão para reutilizar qualquer código de terceiros que apareça em uma saída?",
  ["Não; avalie direitos e licenças de terceiros", "O código gerado sempre recebe uma licença universal", "Um plano pago do Copilot altera licenças de código de terceiros", "Uma correspondência com código público nunca exige atribuição nem revisão"],
  ["Uma assinatura não concede permissão geral para usar material de terceiros.", "Planos do Copilot não relicenciam outros repositórios.", "Editar o código não remove automaticamente direitos ou obrigações aplicáveis.", "A resposta adequada é avaliar, não impor uma proibição universal."],
  "Direitos de terceiros e saídas",
  ["O que uma assinatura autoriza e quais direitos pertencem a terceiros?", "Editar, por si só, resolve questões de licença?"]
]);
add(213, [
  "¿Cómo debería evaluar una persona revisora de privacidad una afirmación sobre la retención de solicitudes de Copilot?",
  ["Suponer la misma retención en todos los planes y superficies", "Consultar el plan, la función y los términos vigentes", "Inferir la retención del texto de la solicitud", "Tomar la ausencia de entrenamiento como ausencia de procesamiento"],
  ["Un plazo universal puede no reflejar el plan y la función pertinentes.", "Las afirmaciones deben acotarse a los términos autorizados vigentes y pueden variar según la configuración.", "El tipo de contenido por sí solo no establece los términos de retención del servicio.", "El uso para entrenamiento y el procesamiento o retención de solicitudes son cuestiones distintas."],
  "Afirmaciones acotadas sobre manejo de datos",
  ["¿Qué configuración del producto y finalidad se analizan?", "¿Entrenamiento y retención son la misma cuestión de datos?"]
], [
  "Como um revisor de privacidade deve avaliar uma afirmação sobre retenção de prompts do Copilot?",
  ["Supor a mesma retenção em todos os planos e interfaces", "Conferir o plano, o recurso e os termos atuais", "Deduzir a retenção pelo texto do prompt", "Tratar ausência de treinamento como ausência de processamento"],
  ["Um prazo universal pode não refletir o plano e o recurso pertinentes.", "Afirmações de tratamento precisam de escopo e termos atuais autorizados; podem variar por configuração.", "O tipo de conteúdo, sozinho, não estabelece os termos de retenção do serviço.", "Uso para treinamento e processamento ou retenção de prompts são questões distintas."],
  "Afirmações delimitadas sobre tratamento de dados",
  ["Qual configuração do produto e finalidade estão em questão?", "Treinamento e retenção são a mesma questão de dados?"]
]);
add(214, [
  "Según el alcance documentado, ¿para qué usuarios de Copilot pueden configurar exclusiones las personas propietarias de una organización?",
  ["Una referencia coincidente demuestra autorización", "El filtro de coincidencias cubre todas las superficies", "Usuarios con licencias asignadas por esa organización", "No hallar coincidencias demuestra originalidad"],
  ["La política no se aplica universalmente a quienes visitan repositorios públicos.", "Una organización no controla todas las suscripciones personales de Copilot.", "El ámbito organizativo documentado cubre usuarios con licencia asignada por esa organización.", "La regla busca regir a usuarios con licencia asignada, no solo a quien la creó."],
  "Ámbito de exclusión de organización",
  ["¿Qué organización asigna la licencia de Copilot?", "¿Una política organizativa se aplica a todas las personas en GitHub?"]
], [
  "Segundo o escopo documentado, para quais usuários do Copilot os proprietários da organização podem configurar exclusões?",
  ["Uma referência correspondente comprova autorização", "O filtro de correspondência cobre todas as interfaces", "Usuários licenciados por essa organização", "Não encontrar correspondência comprova originalidade"],
  ["A política não se aplica universalmente a visitantes de repositórios públicos.", "Uma organização não controla todas as assinaturas pessoais do Copilot.", "O escopo organizacional documentado abrange usuários licenciados por essa organização.", "A regra se destina aos usuários licenciados, não apenas a quem a criou."],
  "Escopo de exclusão da organização",
  ["Qual organização fornece a licença do Copilot?", "Uma política organizacional se aplica a todas as pessoas no GitHub?"]
]);
add(215, [
  "¿Cuál es la diferencia entre restringir el entrenamiento del modelo y procesar una solicitud para generar una respuesta?",
  ["Las restricciones de entrenamiento impiden procesar cualquier contexto de solicitud", "La inferencia equivale a modificar los pesos del modelo", "Los controles de referencias de código público solo se aplican durante el entrenamiento", "La inferencia procesa una solicitud sin entrenar con ella"],
  ["Una restricción de entrenamiento no significa que el servicio no procese datos.", "La inferencia genera una respuesta; el entrenamiento actualiza o mejora parámetros.", "Las reglas de uso para entrenamiento no se limitan a coincidencias de código público.", "Procesar una solicitud para responderla es distinto de usar los datos para entrenar o mejorar un modelo."],
  "Entrenamiento y procesamiento de solicitudes",
  ["¿Qué debe ocurrir para responder una solicitud actual?", "¿Usar datos para responder es distinto de usarlos para entrenar?"]
], [
  "Qual é a diferença entre restringir o treinamento do modelo e processar um prompt para gerar uma resposta?",
  ["Restrições de treinamento impedem processar qualquer contexto do prompt", "Inferência equivale a alterar os pesos do modelo", "Controles de referência de código público só se aplicam durante o treinamento", "A inferência processa um prompt sem treinar com ele"],
  ["Uma restrição de treinamento não significa que o serviço não processe dados.", "Inferência gera uma resposta; treinamento atualiza ou aprimora parâmetros do modelo.", "Regras de uso para treinamento não se limitam à correspondência com código público.", "Processar um prompt para responder é diferente de usar dados para treinar ou melhorar um modelo."],
  "Treinamento versus processamento de solicitações",
  ["O que precisa ocorrer para responder a uma solicitação atual?", "Usar dados para responder é diferente de usá-los para treinamento?"]
]);
add(216, [
  "¿Qué establece desactivar las sugerencias en línea para un idioma sobre el acceso de un agente de Copilot a los archivos?",
  ["Un ajuste de idioma no controla todo acceso", "Desactivar las sugerencias revoca los permisos de archivos del sistema operativo", "La opción del editor elimina las solicitudes ya enviadas", "Todas las herramientas de Copilot siempre heredan la opción del editor"],
  ["Un ajuste de sugerencias por idioma no establece protecciones universales para herramientas de agente.", "Una preferencia del editor no revoca permisos del sistema de archivos.", "Desactivar sugerencias no es un control de eliminación de datos.", "Las herramientas conectadas tienen comportamientos de permisos y compatibilidad distintos."],
  "Ajustes y controles de acceso",
  ["¿Qué función configura la preferencia de idioma?", "¿Un ajuste en línea rige todas las superficies de agente y herramientas?"]
], [
  "O que desativar sugestões em linha para um idioma estabelece sobre o acesso de um agente do Copilot aos arquivos?",
  ["Uma configuração de idioma não controla todo acesso", "Desativar sugestões revoga as permissões de arquivos do sistema operacional", "A opção do editor exclui prompts já enviados", "Todas as ferramentas do Copilot sempre herdam a configuração do editor"],
  ["Uma configuração de sugestões por idioma não estabelece proteções universais para ferramentas de agente.", "Uma preferência do editor não revoga permissões do sistema de arquivos.", "Desativar sugestões não é um controle de exclusão de dados.", "Ferramentas conectadas têm comportamentos distintos de suporte e permissão."],
  "Configurações versus proteções de acesso",
  ["Qual recurso a preferência de idioma configura?", "Uma configuração em linha rege todas as interfaces de agente e ferramentas?"]
]);
add(217, [
  "Una persona desarrolladora sigue recibiendo sugerencias en línea en un archivo que esperaba excluir. ¿Qué debería revisar primero?",
  ["Confiar en .gitignore para excluir la ruta coincidente", "Comprobar la ruta y la compatibilidad de la superficie", "Bloquear toda variable cuyo nombre parezca un secreto", "Suponer que el modelo modificó el archivo excluido"],
  [".gitignore no configura exclusiones de contenido de Copilot.", "El patrón y la compatibilidad de la superficie determinan si se aplica la exclusión.", "Los nombres de variables no determinan el comportamiento de exclusión.", "Cambiar el modelo no corrige por sí solo un patrón o una incompatibilidad."],
  "Diagnóstico de aplicación de exclusiones",
  ["¿La ruta configurada coincide con este archivo?", "¿El cliente y la interacción admiten exclusión de contenido?"]
], [
  "Um desenvolvedor ainda recebe sugestões em linha em um arquivo que esperava excluir. O que deve verificar primeiro?",
  ["Confiar no .gitignore para excluir o caminho correspondente", "Verificar o caminho e o suporte da interface", "Bloquear toda variável cujo nome pareça um segredo", "Supor que o modelo alterou o arquivo excluído"],
  [".gitignore não configura exclusões de conteúdo do Copilot.", "O padrão e o suporte da interface determinam se a exclusão se aplica como esperado.", "Nomes de variáveis não determinam o comportamento da exclusão.", "Alterar o modelo não corrige, por si só, um padrão ou incompatibilidade."],
  "Diagnóstico da aplicabilidade de exclusões",
  ["O caminho configurado realmente corresponde a este arquivo?", "Este cliente e interação oferecem suporte à exclusão de conteúdo?"]
]);
add(218, [
  "Una sesión de editor compatible no refleja una regla de exclusión recién modificada. ¿Qué paso de diagnóstico es razonable?",
  ["Suponer que el cambio reescribe de inmediato todas las conversaciones existentes", "Agregar el archivo a .gitignore y esperar", "Actualizar el cliente; verificar ámbito y coincidencia", "Cambiar el plan de Copilot de la organización"],
  ["Una exclusión no reescribe el contenido de conversaciones anteriores.", ".gitignore no es el mecanismo de exclusión de Copilot.", "Actualizar el cliente y revisar la configuración ayuda a comprobar si se aplicó el cambio.", "Cambiar de plan no diagnostica un problema de ruta o actualización del cliente."],
  "Diagnóstico de configuración de exclusiones",
  ["¿La sesión actual podría reflejar todavía la configuración anterior?", "¿Qué comprobaciones distinguen propagación de un patrón que no coincide?"]
], [
  "Uma sessão de editor com suporte não reflete uma regra de exclusão recém-alterada. Qual etapa de diagnóstico é razoável?",
  ["Supor que a mudança reescreve imediatamente todas as conversas existentes", "Adicionar o arquivo ao .gitignore e aguardar", "Atualizar o cliente; verificar escopo e correspondência", "Alterar o plano do Copilot da organização"],
  ["Uma exclusão não reescreve o conteúdo de conversas anteriores.", ".gitignore não é o mecanismo de exclusão do Copilot.", "Atualizar o cliente e conferir a configuração ajuda a verificar se a mudança foi aplicada.", "Alterar o plano não diagnostica um problema de caminho ou atualização do cliente."],
  "Diagnóstico da configuração de exclusões",
  ["A sessão atual ainda pode refletir a configuração anterior?", "Quais verificações distinguem propagação de um padrão que não corresponde?"]
]);
add(219, [
  "Un directorio sensible se mueve de /private a /services/confidential, pero la exclusión sigue nombrando /private/**. ¿Qué debería hacer la persona administradora?",
  ["Suponer que una regla anterior sigue al archivo renombrado", "Cambiar el nombre del archivo a .gitignore", "Desactivar Copilot en toda la organización", "Actualizar la regla para la nueva ruta"],
  ["Un patrón de ruta no sigue automáticamente los archivos movidos.", "Cambiar el nombre de un directorio no configura la exclusión de Copilot.", "No hace falta desactivar todas las funciones para corregir una ruta específica.", "Las reglas basadas en rutas deben revisarse cuando se mueven archivos para mantener la cobertura prevista."],
  "Mantenimiento de exclusiones por ruta",
  ["¿Qué ruta coincide actualmente con la política?", "¿Qué se debería volver a probar tras mover el contenido protegido?"]
], [
  "Um diretório confidencial é movido de /private para /services/confidential, mas a exclusão ainda aponta para /private/**. O que o administrador deve fazer?",
  ["Supor que uma regra antiga acompanha arquivos renomeados", "Renomear o arquivo para .gitignore", "Desativar o Copilot em toda a organização", "Atualizar a regra para o novo caminho"],
  ["Um padrão de caminho não acompanha automaticamente arquivos movidos.", "Renomear um diretório não configura exclusão do Copilot.", "Não é necessário desativar todos os recursos para corrigir um caminho específico.", "Regras baseadas em caminhos devem ser revisadas quando arquivos são movidos para manter a cobertura pretendida."],
  "Manutenção de exclusões baseadas em caminhos",
  ["Qual caminho a política corresponde atualmente?", "O que deve ser testado novamente após mover o conteúdo protegido?"]
]);
add(220, [
  "Un archivo está excluido del contexto automático en una superficie compatible. Una persona considera pegar manualmente su contenido en el chat. ¿Cuál es el punto clave de privacidad?",
  ["La exclusión no autoriza la divulgación manual", "Suponer que pegar manualmente contenido excluido siempre está bloqueado", "Considerar inaccesible el proceso de revisión humana requerido", "Confiar en el cifrado para impedir el envío del contenido"],
  ["Una regla de exclusión no es consentimiento ni autorización para compartir manualmente contenido sensible.", "La regla de ruta documentada no afirma bloquear todo pegado manual.", "La exclusión no cambia los permisos del repositorio para las personas.", "La exclusión no cifra el contenido."],
  "Divulgación manual y alcance de exclusión",
  ["¿Excluir el contexto automático decide si una persona puede compartir el contenido?", "¿Qué aprobación independiente se necesita antes de enviar datos sensibles?"]
], [
  "Um arquivo está excluído do contexto automático em uma interface com suporte. Um desenvolvedor pensa em colar manualmente seu conteúdo no chat. Qual é o ponto principal de privacidade?",
  ["A exclusão não autoriza divulgação manual", "Supor que colar manualmente conteúdo excluído sempre é bloqueado", "Tratar o processo exigido de revisão humana como inacessível", "Confiar na criptografia para impedir o envio do conteúdo do prompt"],
  ["Uma regra de exclusão não é consentimento nem autorização para compartilhar manualmente conteúdo confidencial.", "A regra de caminho documentada não afirma bloquear toda colagem manual.", "A exclusão não altera permissões do repositório para pessoas.", "Exclusão não é controle de criptografia."],
  "Divulgação manual e escopo da exclusão",
  ["Excluir o contexto automático decide se uma pessoa pode compartilhar o conteúdo?", "Qual aprovação separada é necessária antes de enviar dados confidenciais?"]
]);
add(221, [
  "Un equipo propone incluir un token de API de producción en instrucciones del repositorio para autenticar ejemplos generados. ¿Qué debería hacer?",
  ["Una política heredada no concede acceso al repositorio", "Guardar credenciales en el sistema aprobado de secretos", "La exclusión de contenido sustituye permisos del repositorio", "Un archivo coincidente se vuelve ilegible para todos"],
  ["Un repositorio o archivo privado no reemplaza la gestión de secretos.", "Las instrucciones aportan contexto al proyecto; no son un almacén seguro de secretos.", "Codificar no protege un secreto confirmado en el repositorio.", "Los comentarios también pueden exponer credenciales y no gestionan secretos."],
  "Secretos en archivos de personalización",
  ["¿Cuál es la finalidad de un archivo de instrucciones?", "¿Dónde se deben guardar y proporcionar credenciales de producción?"]
], [
  "Uma equipe propõe colocar um token de API de produção nas instruções do repositório para autenticar exemplos gerados. O que deve fazer?",
  ["Uma política herdada não concede acesso ao repositório", "Manter credenciais no gerenciamento aprovado de segredos", "A exclusão de conteúdo substitui permissões do repositório", "Um arquivo correspondente fica ilegível para todos"],
  ["Um repositório ou arquivo privado não substitui o tratamento adequado de segredos.", "Instruções fornecem contexto do projeto, não são um cofre seguro de segredos.", "Codificar não protege um segredo confirmado no repositório.", "Comentários também podem expor credenciais e não gerenciam segredos."],
  "Segredos em arquivos de personalização",
  ["Qual é a finalidade de um arquivo de instruções?", "Onde credenciais de produção devem ser armazenadas e fornecidas com segurança?"]
]);
add(222, [
  "¿Qué establece excluir un archivo del repositorio de Copilot sobre los permisos de las personas colaboradoras?",
  ["El archivo queda ilegible para todas las personas colaboradoras", "Solo la persona propietaria puede abrirlo", "La exclusión no cambia los permisos del repositorio", "El archivo se elimina del control de versiones"],
  ["La exclusión no cambia quién puede leer el contenido del repositorio.", "La regla no concede acceso exclusivo a la persona propietaria.", "La exclusión de contenido rige el contexto de Copilot, no la autorización humana del repositorio.", "La exclusión no elimina ni deja de rastrear el archivo."],
  "Exclusión y autorización",
  ["¿Qué política controla el acceso humano?", "¿Una regla de contexto de Copilot cambia los permisos del repositorio?"]
], [
  "O que excluir um arquivo do Copilot estabelece sobre as permissões de colaboradores humanos?",
  ["O arquivo fica ilegível para todos os colaboradores", "Somente o proprietário do repositório pode abri-lo", "A exclusão não altera as permissões do repositório", "O arquivo é removido do controle de versão"],
  ["A exclusão não altera quem pode ler o conteúdo do repositório.", "A regra não concede acesso exclusivo ao proprietário.", "Exclusão de conteúdo rege o contexto do Copilot, não a autorização humana do repositório.", "A exclusão não apaga nem deixa de rastrear o arquivo."],
  "Exclusão versus autorização",
  ["Qual política controla o acesso humano?", "Uma regra de contexto do Copilot altera as permissões do repositório?"]
]);
add(223, [
  "Un archivo excluido no aparece en Copilot code review. ¿Qué práctica garantiza que el cambio reciba una revisión adecuada?",
  ["La omisión demuestra que el archivo no tiene defectos", "La exclusión impide que las personas revisoras vean el archivo", "Las reglas del repositorio aprueban automáticamente el archivo", "Usar el proceso de revisión requerido por el repositorio"],
  ["Un archivo omitido no fue evaluado; la ausencia de hallazgos no indica que esté limpio.", "La exclusión no restringe los permisos de lectura de quienes revisan.", "La exclusión no es una aprobación ni una acción de protección de ramas.", "Los archivos excluidos no pasan por Copilot code review; inclúyelos en los controles humanos u otros que exige el repositorio."],
  "Cobertura de revisión alternativa para archivos excluidos",
  ["¿Qué proceso de revisión aún puede examinar el cambio?", "¿Omitirlo de la revisión de Copilot equivale a aprobarlo?"]
], [
  "Um arquivo excluído não aparece no Copilot code review. Qual prática garante que a alteração ainda receba revisão adequada?",
  ["A omissão prova que o arquivo não tem defeitos", "A exclusão impede revisores humanos de ver o arquivo", "As regras do repositório aprovam o arquivo automaticamente", "Usar o processo de revisão exigido pelo repositório"],
  ["Um arquivo omitido não foi avaliado; ausência de achados não significa que esteja correto.", "A exclusão não restringe permissões de leitura de revisores humanos.", "Exclusão não é aprovação nem ação de proteção de branches.", "Arquivos excluídos não passam pelo Copilot code review; encaminhe-os aos controles humanos ou outros exigidos pelo repositório."],
  "Cobertura alternativa de revisão para arquivos excluídos",
  ["Qual processo de revisão ainda pode examinar a alteração?", "A omissão da revisão do Copilot equivale a aprovação?"]
]);
add(224, [
  "Una persona de soporte debe investigar una sugerencia inesperada relacionada con contenido excluido. ¿Qué paquete de diagnóstico minimiza la divulgación?",
  ["Enviar una reproducción saneada y detalles de configuración", "Una transcripción completa con código fuente y credenciales", "Un enlace público al repositorio protegido", "Una grabación sin censura de la sesión de la persona desarrolladora"],
  ["La evidencia mínima saneada y los detalles de configuración ayudan a diagnosticar sin divulgar de más.", "Una transcripción completa puede revelar contenido sensible y credenciales.", "Un enlace público expondría el proyecto.", "Una grabación sin censura podría contener secretos o datos personales."],
  "Diagnóstico respetuoso de la privacidad",
  ["¿Qué evidencia se necesita para reproducir el comportamiento?", "¿Cómo evitar que el informe exponga contenido protegido?"]
], [
  "Uma pessoa de suporte precisa investigar uma sugestão inesperada relacionada a conteúdo excluído. Qual pacote de diagnóstico minimiza a divulgação?",
  ["Enviar uma reprodução sanitizada e detalhes de configuração", "Uma transcrição completa com código-fonte e credenciais", "Um link público para o repositório protegido", "Uma gravação sem ocultação da sessão do desenvolvedor"],
  ["Evidência mínima sanitizada e detalhes de configuração apoiam o diagnóstico com menos divulgação.", "Uma transcrição completa pode revelar conteúdo confidencial e credenciais.", "Um link público exporia o projeto.", "Uma gravação sem ocultação pode conter segredos ou dados pessoais."],
  "Diagnóstico que preserva a privacidade",
  ["Quais evidências são necessárias para reproduzir o comportamento?", "Como o relato pode evitar expor conteúdo protegido?"]
]);
add(225, [
  "Un despliegue combina exclusiones de contenido, controles de coincidencia con código público y revisión humana. ¿Cómo debería describir el equipo el resultado?",
  ["Garantizar que no se procese ningún dato confidencial", "Reducción de riesgos por capas, con riesgo residual", "Reemplazar permisos del repositorio y revisión de licencias", "Demostrar seguridad en todas las superficies de Copilot"],
  ["Ninguna protección garantiza que nunca se procese información sensible.", "Varias protecciones reducen riesgos distintos, pero no eliminan todas las limitaciones o riesgos.", "Las exclusiones no reemplazan la autorización del repositorio ni la evaluación de derechos.", "La compatibilidad y el comportamiento varían por superficie; la revisión humana sigue siendo necesaria."],
  "Protecciones por capas y riesgo residual",
  ["¿Qué riesgo aborda cada control y qué queda pendiente?", "¿Una protección garantiza el resultado en todos los clientes y flujos?"]
], [
  "Uma implantação combina exclusões de conteúdo, controles de correspondência com código público e revisão humana. Como a equipe deve descrever o resultado?",
  ["Garantir que nenhum dado confidencial seja processado", "Redução de riscos em camadas, com risco residual", "Substituir permissões do repositório e revisão de licenças", "Comprovar segurança em todas as interfaces do Copilot"],
  ["Nenhuma proteção garante que dados confidenciais nunca sejam processados.", "Várias proteções reduzem riscos diferentes, mas não eliminam todas as limitações ou riscos.", "Exclusões não substituem autorização do repositório nem avaliação de direitos.", "Suporte e comportamento variam por interface; a revisão humana continua necessária."],
  "Proteções em camadas e risco residual",
  ["Qual risco cada controle aborda e o que permanece?", "Uma proteção garante o resultado em todos os clientes e fluxos de trabalho?"]
]);
add(186, [
  "¿Con qué se deben contrastar las instrucciones de incorporación generadas?",
  ["Con el número de encabezados del borrador", "Con la configuración y el flujo del repositorio", "Con la confianza del asistente sobre la instalación", "Con las convenciones de un proyecto de ejemplo no relacionado"],
  ["El número de encabezados no establece exactitud.", "La evidencia del repositorio determina si los pasos son utilizables.", "La confianza no verifica los pasos.", "Las convenciones de otro proyecto pueden no ser aplicables."],
  "Validación de documentación de incorporación",
  ["Una guía de configuración plausible puede describir el proyecto equivocado.", "¿Qué evidencia establece que una persona nueva pueda seguir los pasos?"]
], [
  "Com o que as instruções de integração de novos colaboradores geradas devem ser verificadas?",
  ["Com o número de títulos do rascunho", "Com a configuração e o fluxo do repositório", "Com a confiança do assistente sobre a instalação", "Com as convenções de um projeto de exemplo não relacionado"],
  ["O número de títulos não estabelece exatidão.", "A evidência do repositório determina se as etapas são utilizáveis.", "A confiança não verifica as etapas.", "Convenções de outro projeto podem não se aplicar."],
  "Validação de documentação de integração",
  ["Um guia de configuração plausível ainda pode descrever o projeto errado.", "Que evidência estabelece que uma pessoa nova consegue seguir as etapas?"]
]);
add(187, [
  "Una prueba a veces comprueba el resultado antes de que termine su tarea en segundo plano. ¿Qué diseño aborda esta condición de carrera?",
  ["Comprobar inmediatamente después de iniciar la tarea", "Reintentar todo el conjunto hasta que pase por casualidad", "Aumentar una pausa fija sin observar la finalización", "Esperar la finalización con un tiempo límite"],
  ["Una comprobación inmediata conserva la condición de carrera.", "Reintentar el conjunto oculta el problema en vez de corregir la sincronización.", "Una pausa arbitraria más larga sigue dependiendo del tiempo.", "Una condición explícita de finalización con tiempo límite sincroniza la aserción."],
  "Sincronización de pruebas asíncronas",
  ["Considera el orden y no solo el tiempo transcurrido.", "¿Cómo puede la prueba distinguir trabajo terminado de trabajo aún en curso?"]
], [
  "Um teste às vezes verifica o resultado antes de sua tarefa em segundo plano terminar. Qual design resolve essa condição de corrida?",
  ["Verificar imediatamente após iniciar a tarefa", "Repetir toda a suíte até ela passar por acaso", "Aumentar uma pausa fixa sem observar a conclusão", "Esperar a conclusão com um tempo limite"],
  ["Uma verificação imediata preserva a condição de corrida.", "Repetir a suíte esconde o problema em vez de corrigir a sincronização.", "Uma pausa arbitrária maior continua dependendo do tempo.", "Uma condição explícita de conclusão com tempo limite sincroniza a asserção."],
  "Sincronização de testes assíncronos",
  ["Considere a ordem, não apenas o tempo decorrido.", "Como o teste pode distinguir trabalho concluído de trabalho ainda em andamento?"]
]);
add(188, [
  "¿Qué secuencia corresponde al patrón Arrange-Act-Assert para una prueba unitaria generada?",
  ["Preparar entradas, invocar el comportamiento, comprobar el resultado", "Invocar el comportamiento, comprobar el resultado, preparar entradas", "Comprobar el resultado, preparar entradas, invocar el comportamiento", "Preparar entradas, comprobar el resultado, invocar el comportamiento"],
  ["Arrange prepara; Act ejecuta; Assert verifica.", "La preparación debe preceder a la invocación.", "El resultado no está disponible antes de ejecutar el comportamiento.", "La aserción corresponde después de la acción."],
  "Arrange-Act-Assert",
  ["Sigue el momento en que están disponibles las entradas y salidas de prueba.", "Mantén separadas preparación, ejecución y verificación."]
], [
  "Qual sequência corresponde ao padrão Arrange-Act-Assert para um teste de unidade gerado?",
  ["Preparar entradas, invocar o comportamento, verificar o resultado", "Invocar o comportamento, verificar o resultado, preparar entradas", "Verificar o resultado, preparar entradas, invocar o comportamento", "Preparar entradas, verificar o resultado, invocar o comportamento"],
  ["Arrange prepara; Act executa; Assert verifica.", "A preparação deve preceder a invocação.", "O resultado não está disponível antes de executar o comportamento.", "A asserção vem depois da ação."],
  "Arrange-Act-Assert",
  ["Acompanhe quando as entradas e saídas do teste ficam disponíveis.", "Mantenha preparação, execução e verificação separadas."]
]);
add(189, [
  "¿Cuál es el propósito de un resumen de pull request generado por Copilot?",
  ["Certificar que todo el código cambiado está libre de vulnerabilidades", "Ayudar a quienes revisan a entender los cambios propuestos", "Reemplazar las comprobaciones de estado requeridas del repositorio", "Establecer que todos los requisitos superaron las pruebas"],
  ["Un resumen no es una certificación de seguridad.", "Un resumen comunica cambios; es distinto de una revisión de código.", "Resumir no reemplaza las comprobaciones requeridas.", "Un resumen no es evidencia de ejecución de pruebas."],
  "Resúmenes de pull requests",
  ["Separa comunicar un cambio de verificarlo.", "¿Qué necesita quien revisa antes de inspeccionar los detalles?"]
], [
  "Qual é a finalidade de um resumo de pull request gerado pelo Copilot?",
  ["Certificar que todo o código alterado está livre de vulnerabilidades", "Ajudar revisores a entender as mudanças propostas", "Substituir as verificações de status exigidas pelo repositório", "Estabelecer que todos os requisitos passaram nos testes"],
  ["Um resumo não é uma certificação de segurança.", "Um resumo comunica mudanças; é diferente de uma revisão de código.", "Resumir não substitui as verificações exigidas.", "Um resumo não é evidência de execução de testes."],
  "Resumos de pull requests",
  ["Separe comunicar uma mudança de verificá-la.", "Do que um revisor precisa antes de inspecionar os detalhes?"]
]);
add(190, [
  "¿Qué evidencia respalda adoptar un paquete sugerido por Copilot?",
  ["Su nombre se parece a la función solicitada", "La declaración de importación generada tiene sintaxis válida", "Existencia, mantenimiento y licencia compatible verificados", "La respuesta repite el nombre del paquete varias veces"],
  ["Los nombres plausibles pueden referirse a paquetes inexistentes o maliciosos.", "Una importación con sintaxis válida no verifica el paquete.", "La revisión de dependencias comprueba existencia, mantenimiento, procedencia y licencias.", "La repetición no establece confiabilidad."],
  "Verificación de dependencias sugeridas",
  ["Separa una recomendación plausible de una dependencia confiable.", "¿Qué hechos pueden comprobarse independientemente de la respuesta generada?"]
], [
  "Que evidência respalda adotar um pacote sugerido pelo Copilot?",
  ["Seu nome se parece com a função solicitada", "A instrução de importação gerada tem sintaxe válida", "Existência, manutenção e licença compatível verificadas", "A resposta repete o nome do pacote várias vezes"],
  ["Nomes plausíveis podem se referir a pacotes inexistentes ou maliciosos.", "Uma importação com sintaxe válida não verifica o pacote.", "A revisão de dependências verifica existência, manutenção, procedência e licenças.", "A repetição não estabelece confiabilidade."],
  "Verificação de dependências sugeridas",
  ["Separe uma recomendação plausível de uma dependência confiável.", "Que fatos podem ser verificados independentemente da resposta gerada?"]
]);
add(191, [
  "¿Qué es una prueba parametrizada?",
  ["Un cuerpo de prueba ejecutado con varios conjuntos de entradas y resultados esperados", "Una prueba que elige el resultado esperado a partir de la salida real", "Un cuerpo de prueba que siempre usa la misma entrada fija", "Una prueba que omite aserciones cuando cambia una entrada"],
  ["La parametrización reutiliza la lógica de prueba en casos explícitos.", "Derivar expectativas de la salida real puede ocultar defectos.", "Un único caso fijo no es parametrización.", "Los casos parametrizados siguen necesitando aserciones significativas."],
  "Pruebas parametrizadas",
  ["Separa la lógica de prueba de la tabla de casos.", "¿Cómo pueden varios ejemplos compartir la misma estructura de verificación?"]
], [
  "O que é um teste parametrizado?",
  ["Um corpo de teste executado com vários conjuntos de entradas e resultados esperados", "Um teste que escolhe o resultado esperado a partir da saída real", "Um corpo de teste que sempre usa a mesma entrada fixa", "Um teste que ignora asserções quando uma entrada muda"],
  ["A parametrização reutiliza a lógica de teste em casos explícitos.", "Derivar expectativas da saída real pode ocultar defeitos.", "Um único caso fixo não é parametrização.", "Casos parametrizados ainda exigem asserções significativas."],
  "Testes parametrizados",
  ["Separe a lógica de teste da tabela de casos.", "Como vários exemplos podem compartilhar a mesma estrutura de verificação?"]
]);
add(192, [
  "Una prueba generada copia una salida incorrecta de la implementación como valor esperado. ¿Qué debería determinar ese valor?",
  ["La sentencia de retorno actual de la implementación", "La predicción repetida de la salida por el asistente", "El valor que hace pasar la prueba existente", "El requisito establecido de forma independiente"],
  ["Repetir el comportamiento defectuoso conserva el defecto.", "Una predicción repetida no es validación independiente.", "Pasar por sí solo no establece comportamiento correcto.", "Los requisitos o ejemplos autorizados definen el comportamiento previsto."],
  "Expectativas de prueba independientes",
  ["Una prueba puede coincidir con el código y ambos estar equivocados.", "¿Qué evidencia existe independientemente de la implementación?"]
], [
  "Um teste gerado copia uma saída incorreta da implementação como valor esperado. O que deve determinar esse valor?",
  ["A instrução de retorno atual da implementação", "A previsão repetida da saída pelo assistente", "O valor que faz o teste existente passar", "O requisito estabelecido de forma independente"],
  ["Repetir o comportamento defeituoso preserva o defeito.", "Uma previsão repetida não é validação independente.", "Passar por si só não estabelece comportamento correto.", "Requisitos ou exemplos confiáveis definem o comportamento pretendido."],
  "Expectativas de teste independentes",
  ["Um teste pode concordar com o código e ambos estarem errados.", "Que evidência existe independentemente da implementação?"]
]);
add(193, [
  "¿Qué información es más útil para Copilot al diagnosticar una prueba que falla solo en CI?",
  ["Solo trazas de pila de ejecuciones exitosas del flujo", "Solo la configuración más reciente del formateador", "Registros, código y diferencias de entorno", "Un nuevo valor esperado copiado de la salida del fallo"],
  ["Las ejecuciones exitosas por sí solas omiten el fallo observado.", "Los ajustes del formateador por sí solos rara vez explican comportamiento exclusivo de CI.", "Los registros, el código y las diferencias de entorno ayudan a explicar el comportamiento local frente a CI.", "Copiar la salida defectuosa puede ocultar el defecto en vez de explicarlo."],
  "Depuración basada en evidencia",
  ["¿Qué difiere entre las ejecuciones exitosas y fallidas?", "Busca observaciones que puedan comprobar una explicación causal."]
], [
  "Quais informações são mais úteis para o Copilot ao diagnosticar um teste que falha apenas na CI?",
  ["Apenas rastreamentos de pilha de execuções bem-sucedidas do fluxo", "Apenas a configuração mais recente do formatador", "Logs, código e diferenças de ambiente", "Um novo valor esperado copiado da saída da falha"],
  ["Execuções bem-sucedidas sozinhas omitem a falha observada.", "Configurações do formatador sozinhas raramente explicam comportamento exclusivo da CI.", "Logs, código e diferenças de ambiente ajudam a explicar o comportamento local versus CI.", "Copiar a saída defeituosa pode esconder o defeito em vez de explicá-lo."],
  "Depuração baseada em evidências",
  ["O que difere entre as execuções bem-sucedidas e as que falharam?", "Procure observações que possam verificar uma explicação causal."]
]);
add(194, [
  "¿Cómo debe interpretar un equipo la tasa de aceptación de sugerencias de Copilot al evaluar productividad?",
  ["Como prueba de que el código aceptado no contiene defectos", "Como una señal junto con resultados y comentarios", "Como una medición directa de horas ahorradas por cada desarrollador", "Como prueba de que una mayor adopción causó entregas más rápidas"],
  ["La aceptación no establece corrección.", "GitHub recomienda patrones entre métricas junto con comentarios de desarrolladores.", "La aceptación no mide directamente tiempo ahorrado.", "Una asociación no establece causalidad."],
  "Métricas de productividad basadas en evidencia",
  ["Separa adopción, calidad y resultados de entrega.", "¿Qué puede establecer una sola medida de actividad y qué no?"]
], [
  "Como uma equipe deve interpretar a taxa de aceitação de sugestões do Copilot ao avaliar produtividade?",
  ["Como prova de que o código aceito não contém defeitos", "Como um sinal junto com resultados e feedback", "Como uma medição direta de horas economizadas por desenvolvedor", "Como prova de que maior adoção causou entregas mais rápidas"],
  ["A aceitação não estabelece correção.", "O GitHub recomenda padrões entre métricas junto com feedback de desenvolvedores.", "A aceitação não mede diretamente tempo economizado.", "Uma associação não estabelece causalidade."],
  "Métricas de produtividade baseadas em evidências",
  ["Separe adoção, qualidade e resultados de entrega.", "O que uma única medida de atividade pode estabelecer e o que não pode?"]
]);
add(195, [
  "¿Qué solicitud de revisión se centra en la accesibilidad de un formulario generado por Copilot?",
  ["Comprobar etiquetas y uso con teclado", "Estandarizar sangría y estilo de comillas", "Comparar tamaños de paquetes entre compilaciones", "Medir latencia de consultas a la base de datos"],
  ["Los nombres accesibles y la interacción con teclado ayudan a usuarios con distintas necesidades de acceso.", "El formato trata de coherencia del código, no de accesibilidad de interacción.", "El tamaño del paquete es una cuestión de rendimiento.", "La latencia de consultas no establece interacción accesible con el formulario."],
  "Revisión de accesibilidad",
  ["Considera usuarios que no interactúan visualmente o con un ratón.", "¿Qué propiedades afectan a operar y entender el formulario?"]
], [
  "Qual solicitação de revisão se concentra na acessibilidade de um formulário gerado pelo Copilot?",
  ["Verificar rótulos e operação por teclado", "Padronizar indentação e estilo de aspas", "Comparar tamanhos de pacotes entre compilações", "Medir latência de consultas ao banco de dados"],
  ["Nomes acessíveis e interação por teclado ajudam usuários com diferentes necessidades de acesso.", "A formatação trata de consistência do código, não de acessibilidade de interação.", "O tamanho do pacote é uma questão de desempenho.", "A latência de consultas não estabelece interação acessível com o formulário."],
  "Revisão de acessibilidade",
  ["Considere usuários que não interagem visualmente ou com um mouse.", "Quais propriedades afetam operar e entender o formulário?"]
]);
add(196, [
  "Un agente escribe pruebas pero no puede ejecutarlas porque un servicio no está disponible. ¿Cuál es la entrega precisa?",
  ["Todas las pruebas nuevas pasaron porque su sintaxis parece válida", "Todas las pruebas nuevas fallaron porque el servicio no estaba disponible", "No hace falta ejecutarlas porque el agente generó las pruebas", "Pruebas añadidas; ejecución bloqueada por el servicio ausente"],
  ["La sintaxis plausible no es evidencia de una ejecución exitosa.", "Un requisito previo no disponible no demuestra que cada prueba falló.", "Las pruebas generadas siguen necesitando validación.", "El informe separa la escritura completada de la verificación bloqueada."],
  "Comunicación del estado de verificación",
  ["Distingue una comprobación bloqueada de una exitosa o fallida.", "¿Qué evidencia se obtuvo realmente?"]
], [
  "Um agente escreve testes, mas não consegue executá-los porque um serviço está indisponível. Qual é a entrega precisa?",
  ["Todos os novos testes passaram porque a sintaxe parece válida", "Todos os novos testes falharam porque o serviço estava indisponível", "A execução é desnecessária porque o agente gerou os testes", "Testes adicionados; execução bloqueada pelo serviço ausente"],
  ["Sintaxe plausível não é evidência de execução bem-sucedida.", "Um pré-requisito indisponível não comprova que cada teste falhou.", "Testes gerados ainda precisam de validação.", "O relatório separa a escrita concluída da verificação bloqueada."],
  "Comunicação do status de verificação",
  ["Diferencie uma verificação bloqueada de uma bem-sucedida ou malsucedida.", "Que evidência foi realmente obtida?"]
]);
add(197, [
  "¿Qué experiencias de Copilot CLI admiten exclusiones de contenido según la matriz documentada?",
  ["Solo sugerencias y finalizaciones en línea", "Sesiones de chat y agente", "Todo acceso indirecto, incluidos los scripts", "Solo el chat en GitHub.com"],
  ["Las sugerencias en línea no son aplicables a la fila de CLI en la matriz.", "La matriz actual indica compatibilidad con chat y agentes de Copilot CLI; no garantiza cubrir todas las vías de acceso a archivos.", "La documentación advierte que quizá no se detecte el acceso indirecto a archivos.", "La compatibilidad de CLI no se limita a conversaciones en GitHub.com."],
  "Compatibilidad de exclusión en Copilot CLI",
  ["¿Qué tipos de interacción enumera la matriz?", "¿La compatibilidad con herramientas de agente implica controlar todo acceso al sistema de archivos?"]
], [
  "Quais experiências do Copilot CLI oferecem suporte a exclusões de conteúdo na matriz documentada?",
  ["Apenas sugestões e conclusões em linha", "Sessões de chat e agente", "Todo acesso indireto, inclusive scripts", "Somente o chat no GitHub.com"],
  ["Sugestões em linha não se aplicam à entrada do CLI na matriz.", "A matriz atual indica suporte a chat e agente no Copilot CLI; não garante cobertura de toda forma de acesso a arquivos.", "A documentação alerta que o acesso indireto a arquivos talvez não seja detectado.", "O suporte do CLI não se limita a conversas no GitHub.com."],
  "Suporte a exclusões no Copilot CLI",
  ["Quais tipos de interação a matriz lista?", "O suporte a ferramentas de agente implica controle completo do sistema de arquivos?"]
]);
add(198, [
  "¿Por qué debe consultar una persona administradora la matriz de compatibilidad antes de confiar en exclusiones en una superficie de Copilot?",
  ["Todas las superficies de Copilot funcionan igual", "Business y Enterprise cubren todas las herramientas", "La compatibilidad varía según el cliente y la interacción", "Las exclusiones solo se aplican si se desactiva el chat"],
  ["La compatibilidad en una superficie no garantiza la misma compatibilidad en otra.", "Los planes tienen excepciones documentadas según la superficie.", "La matriz distingue superficies compatibles y puede identificar experiencias no compatibles o no aplicables.", "Usar el chat no desactiva universalmente la compatibilidad con exclusiones."],
  "Compatibilidad de exclusión por superficie",
  ["¿Qué cliente e interacción se utilizan exactamente?", "¿La compatibilidad puede variar entre sugerencias en línea, chat y agentes?"]
], [
  "Por que um administrador deve consultar a matriz de suporte antes de confiar em exclusões em uma interface do Copilot?",
  ["Todas as interfaces do Copilot funcionam da mesma forma", "Business e Enterprise abrangem todas as ferramentas", "O suporte varia conforme o cliente e a interação", "As exclusões só se aplicam quando o chat está desativado"],
  ["Suporte em uma interface não garante suporte igual em outra.", "Os planos têm exceções documentadas por interface.", "A matriz distingue interfaces com suporte e pode identificar experiências sem suporte ou não aplicáveis.", "Usar chat não desativa universalmente o suporte a exclusões."],
  "Suporte a exclusões por interface",
  ["Qual cliente e interação estão sendo usados?", "O suporte a uma proteção pode variar entre sugestões em linha, chat e agente?"]
]);
add(199, [
  "¿Qué establece agregar un archivo a .gitignore sobre el acceso de Copilot a ese archivo?",
  ["Copilot no puede leer el archivo en ninguna superficie", "Hay que quitar el archivo del árbol de trabajo", "El cifrado por sí solo lo excluye del contexto", "Git ignore no es una política de Copilot"],
  ["Una entrada de .gitignore no es un control de acceso universal de Copilot.", "Ignorar un archivo no lo elimina del disco.", "Git ignore no cifra el contenido de los archivos.", "Git ignore controla cómo trata Git los archivos no rastreados, no el acceso de Copilot al contexto."],
  "Git ignore y política de Copilot",
  ["¿Qué sistema configura .gitignore?", "¿Dejar de rastrear un archivo en Git lo quita del sistema de archivos?"]
], [
  "O que adicionar um arquivo ao .gitignore estabelece sobre o acesso do Copilot a esse arquivo?",
  ["O Copilot não pode ler o arquivo em nenhuma interface", "É necessário remover o arquivo da árvore de trabalho", "Apenas a criptografia o exclui do contexto", "Git ignore não é uma política do Copilot"],
  ["Uma entrada no .gitignore não é um controle universal de acesso do Copilot.", "Ignorar um arquivo não o remove do disco.", "Git ignore não criptografa o conteúdo dos arquivos.", "Git ignore controla como o Git trata arquivos não rastreados, não o acesso do Copilot ao contexto."],
  "Git ignore e política do Copilot",
  ["Qual sistema o .gitignore configura?", "Deixar de rastrear um arquivo no Git o remove do sistema de arquivos?"]
]);
add(200, [
  "En la interfaz en inglés de GitHub.com, ¿qué ruta abre la exclusión de contenido de un solo repositorio?",
  ["Repository -> Settings -> Copilot -> Content exclusion", "Organization -> Settings -> Copilot -> Models", "Repository -> Settings -> Actions -> General", "Personal settings -> Developer settings -> Tokens"],
  ["Esta ruta del repositorio abre sus ajustes de exclusión de contenido de Copilot.", "La ruta de organización y Models corresponden a otros ámbitos y funciones.", "Actions configura flujos de trabajo, no exclusiones de Copilot.", "Tokens administra credenciales, no rutas de contenido."],
  "Navegación de exclusión del repositorio",
  ["¿La política es para un repositorio o para una organización?", "¿Qué área de ajustes controla el acceso de Copilot al contenido del repositorio?"]
], [
  "Na interface em inglês do GitHub.com, qual caminho abre a exclusão de conteúdo de um único repositório?",
  ["Repository -> Settings -> Copilot -> Content exclusion", "Organization -> Settings -> Copilot -> Models", "Repository -> Settings -> Actions -> General", "Personal settings -> Developer settings -> Tokens"],
  ["Esse caminho do repositório abre suas configurações de exclusão de conteúdo do Copilot.", "O caminho da organização e Models tratam de outros escopos e recursos.", "Actions configura fluxos de trabalho, não exclusões do Copilot.", "Tokens gerencia credenciais, não caminhos de conteúdo."],
  "Navegação de exclusão do repositório",
  ["A política é para um repositório ou para uma organização?", "Qual área de configurações controla o acesso do Copilot ao conteúdo do repositório?"]
]);
add(201, [
  "Una persona propietaria de una organización configura exclusiones para usuarios con licencias de Copilot asignadas por esa organización. ¿Qué ruta de la interfaz en inglés está documentada?",
  ["Repository -> Settings -> Copilot -> Content exclusion", "Organization -> Settings -> Copilot -> Content exclusion", "Personal settings -> Copilot -> Content exclusion", "Organization -> Settings -> Actions -> General"],
  ["Esta ruta configura un repositorio, no a las personas con licencias de la organización.", "Esta es la ubicación de exclusión de contenido a nivel de organización.", "Los ajustes personales no configuran exclusiones administradas por una organización.", "Actions no configura exclusiones de contenido de Copilot."],
  "Navegación de exclusión de organización",
  ["¿Qué ámbito corresponde a las personas con licencias asignadas por esta organización?", "¿El ajuste está en administración de Copilot o de Actions?"]
], [
  "Uma pessoa proprietária da organização configura exclusões para usuários que receberam licenças do Copilot por essa organização. Qual caminho da interface em inglês está documentado?",
  ["Repository -> Settings -> Copilot -> Content exclusion", "Organization -> Settings -> Copilot -> Content exclusion", "Personal settings -> Copilot -> Content exclusion", "Organization -> Settings -> Actions -> General"],
  ["Esse caminho configura um repositório, não os usuários licenciados pela organização.", "Esse é o local de exclusão de conteúdo no nível da organização.", "Configurações pessoais não configuram exclusões gerenciadas por uma organização.", "Actions não configura exclusões de conteúdo do Copilot."],
  "Navegação de exclusão da organização",
  ["Qual escopo corresponde aos usuários licenciados por esta organização?", "A configuração fica na administração do Copilot ou do Actions?"]
]);
add(202, [
  "¿Qué patrón de exclusión de repositorio coincide con los archivos dentro de /scripts o en sus subdirectorios?",
  ["\"/scripts/*\"", "\"scripts.md\"", "\"/scripts/**\"", "\"/script/\""],
  ["El patrón con un solo asterisco no es el ejemplo documentado para todo el árbol.", "Esto nombra un archivo, no el árbol de directorios.", "El patrón recursivo documentado cubre archivos dentro de /scripts y sus subdirectorios.", "Esto nombra otra ruta y no especifica descendientes."],
  "Patrones recursivos de rutas",
  ["¿La regla debe incluir directorios anidados?", "¿Qué patrón documentado usa un comodín recursivo?"]
], [
  "Qual padrão de exclusão do repositório corresponde a arquivos dentro de /scripts ou abaixo desse diretório?",
  ["\"/scripts/*\"", "\"scripts.md\"", "\"/scripts/**\"", "\"/script/\""],
  ["O padrão com um único asterisco não é o exemplo documentado para toda a árvore.", "Isto nomeia um arquivo, não a árvore de diretórios.", "O padrão recursivo documentado cobre arquivos em /scripts e abaixo dele.", "Isto nomeia outro caminho e não especifica descendentes."],
  "Padrões recursivos de caminhos",
  ["A regra precisa incluir diretórios aninhados?", "Qual padrão documentado usa um curinga recursivo?"]
]);
add(203, [
  "Una persona propietaria de una organización necesita excluir archivos coincidentes en repositorios Git y en otras ubicaciones del sistema de archivos para usuarios con licencias de la organización. ¿Qué ámbito se requiere?",
  ["Una regla en los ajustes de un repositorio", "Una entrada local en .gitignore para cada clon", "Una preferencia personal del editor", "Una regla de exclusión a nivel de organización"],
  ["Una regla de repositorio no cubre archivos fuera de ese repositorio.", ".gitignore afecta el seguimiento de Git y no es una regla organizativa de Copilot.", "Una preferencia personal no configura exclusiones administradas por la organización.", "Las exclusiones de organización pueden abarcar ubicaciones pertinentes con y sin Git para ese ámbito de usuarios administrados."],
  "Ámbito de exclusión de organización",
  ["¿El requisito incluye archivos fuera de repositorios Git?", "¿Qué ámbito administrativo puede cubrir a los usuarios asignados por la organización?"]
], [
  "Uma pessoa proprietária da organização precisa excluir arquivos correspondentes em repositórios Git e em outros locais do sistema de arquivos para usuários licenciados pela organização. Qual escopo é necessário?",
  ["Uma regra nas configurações de um repositório", "Uma entrada local no .gitignore em cada checkout", "Uma preferência pessoal do editor", "Uma regra de exclusão no nível da organização"],
  ["Uma regra de repositório não cobre arquivos fora dele.", ".gitignore afeta o rastreamento do Git e não é uma regra organizacional do Copilot.", "Uma preferência pessoal não configura exclusões gerenciadas pela organização.", "Exclusões da organização podem abranger locais relevantes com e sem Git para esse escopo de usuários gerenciados."],
  "Escopo de exclusão da organização",
  ["O requisito inclui arquivos fora de repositórios Git?", "Qual escopo administrativo pode cobrir os usuários licenciados pela organização?"]
]);
add(204, [
  "Una persona administradora de repositorio ve una regla de exclusión heredada en sus ajustes. ¿Dónde se puede cambiar?",
  ["En el ámbito que proporcionó la regla", "Editar la configuración heredada desde el repositorio", "Usar .gitignore como control de Copilot", "Definir la regla solo en la rama predeterminada"],
  ["Las reglas heredadas no se editan en la página del repositorio; se cambian en su ámbito de origen.", "La documentación indica que esos ajustes heredados no se pueden editar allí.", ".gitignore no cambia una exclusión de Copilot administrada.", "Cambiar la rama predeterminada no modifica una política heredada."],
  "Administración de exclusiones heredadas",
  ["¿Qué ámbito originó la regla visible?", "¿Ver un ajuste en el repositorio implica permiso para editarlo allí?"]
], [
  "Uma pessoa administradora de repositório vê uma regra de exclusão herdada nas configurações. Onde essa regra pode ser alterada?",
  ["No escopo que forneceu a regra", "Editar configurações herdadas na página do repositório", "Usar .gitignore como controle do Copilot", "Definir a regra apenas na branch padrão"],
  ["Regras herdadas não são editáveis na página do repositório; a alteração pertence ao escopo de origem.", "A documentação diz que configurações herdadas não podem ser editadas ali.", ".gitignore não altera uma exclusão gerenciada do Copilot.", "Alterar a branch padrão não modifica uma política herdada."],
  "Administração de exclusões herdadas",
  ["Qual escopo originou a regra visível?", "Ver uma configuração no repositório implica permissão para editá-la ali?"]
]);
add(205, [
  "¿Qué rol puede configurar exclusiones de contenido para un repositorio específico, sujeto al plan y los permisos aplicables?",
  ["Cualquier colaborador del repositorio puede cambiarla", "Repository administrator", "Cualquier persona con licencia de Copilot puede cambiarla", "Un mantenedor del tablero del proyecto puede cambiarla"],
  ["El acceso de lectura por sí solo no concede derechos de administración.", "Las personas con rol Repository administrator pueden configurar exclusiones de sus repositorios.", "Una licencia de Copilot da acceso al producto, no administración del repositorio.", "Los permisos de proyecto no necesariamente permiten cambiar los ajustes del repositorio."],
  "Rol para exclusiones de repositorio",
  ["¿Qué rol administra los ajustes del repositorio?", "¿Una licencia de producto equivale a administrar el repositorio?"]
], [
  "Qual função pode configurar exclusões de conteúdo para um repositório específico, conforme o plano e as permissões aplicáveis?",
  ["Qualquer colaborador do repositório pode alterá-la", "Repository administrator", "Qualquer pessoa com licença do Copilot pode alterá-la", "Um mantenedor do quadro do projeto pode alterá-la"],
  ["Acesso de leitura, por si só, não concede direitos administrativos.", "Pessoas com a função Repository administrator podem configurar exclusões em seus repositórios.", "Uma licença do Copilot concede acesso ao produto, não administração do repositório.", "Permissões de projeto não necessariamente permitem alterar configurações do repositório."],
  "Função para exclusões de repositório",
  ["Qual função administra as configurações do repositório?", "Uma licença do produto equivale à administração do repositório?"]
]);
add(161, [
  "¿Para qué sirve pedir a Copilot que «actúe como revisor de rendimiento»?",
  ["Sustituir mediciones de carga por el rol asignado", "Enfocar la respuesta desde una perspectiva experta relevante", "Conceder al modelo permiso para cambiar producción", "Garantizar que toda optimización sugerida sea más rápida"],
  ["El rol no sustituye mediciones empíricas.", "El prompting de rol orienta la perspectiva y el enfoque.", "Una descripción de rol no autoriza cambios en producción.", "Una identidad experta no garantiza mejoras de rendimiento."],
  "Prompting de rol",
  ["Separa una perspectiva solicitada de autoridad o prueba.", "¿Cómo influye la redacción en el enfoque sin cambiar permisos?"]
], [
  "Para que serve pedir ao Copilot que 'atue como revisor de desempenho'?",
  ["Substituir medições de carga pelo papel atribuído", "Focar a resposta em uma perspectiva especializada relevante", "Conceder ao modelo permissão para alterar produção", "Garantir que toda otimização sugerida seja mais rápida"],
  ["O papel não substitui medições empíricas.", "O prompting de papel orienta a perspectiva e o foco.", "Uma descrição de papel não autoriza mudanças em produção.", "Uma identidade especializada não garante melhor desempenho."],
  "Prompting de papel",
  ["Separe uma perspectiva solicitada de autoridade ou prova.", "Como a redação influencia o foco sem alterar permissões?"]
]);
add(162, [
  "Hay varios patrones de código en un repositorio. ¿Cómo debe un prompt identificar cuál seguir?",
  ["Pedir al modelo que deduzca qué convención es más nueva", "Adjuntar archivos no relacionados para aumentar el contexto", "Nombrar una referencia aprobada y su convención", "Pedir el patrón existente sin especificar cuál"],
  ["Inferir la antigüedad no establece la convención aprobada.", "Más contexto no relacionado no selecciona un ejemplo autorizado.", "Una referencia concreta resuelve qué patrón se pretende usar.", "La instrucción sigue siendo ambigua si los patrones difieren."],
  "Ejemplos de referencia autorizados",
  ["Un repositorio puede contener patrones actuales y heredados.", "¿Qué contexto resuelve ejemplos contradictorios?"]
], [
  "Há vários padrões de código em um repositório. Como um prompt deve identificar qual seguir?",
  ["Pedir ao modelo que deduza qual convenção é mais nova", "Anexar arquivos não relacionados para aumentar o contexto", "Nomear uma referência aprovada e sua convenção", "Pedir o padrão existente sem especificar qual"],
  ["Inferir a idade não estabelece a convenção aprovada.", "Mais contexto não relacionado não seleciona um exemplo autorizado.", "Uma referência concreta resolve qual padrão se pretende usar.", "A instrução permanece ambígua se os padrões diferirem."],
  "Exemplos de referência autorizados",
  ["Um repositório pode conter padrões atuais e legados.", "Qual contexto resolve exemplos conflitantes?"]
]);
add(163, [
  "¿Qué requisito define mejor datos de clientes seguros para una demostración?",
  ["Copiar registros representativos de clientes de producción", "Conservar direcciones reales pero cambiar nombres visibles", "Usar identidades realistas sin especificar su procedencia", "Usar registros ficticios y dominios de correo reservados"],
  ["Los registros de producción pueden exponer información personal.", "Las direcciones reales siguen siendo datos personales aunque cambien los nombres.", "Sin procedencia definida no se exige que los registros sean sintéticos.", "Las restricciones explícitas de datos sintéticos evitan pedir identidades reales."],
  "Restricciones explícitas para datos de ejemplo",
  ["Decide si la demostración necesita identidades reales.", "Cambiar un campo puede dejar otros campos identificadores intactos."]
], [
  "Qual requisito define melhor dados de clientes seguros para uma demonstração?",
  ["Copiar registros representativos de clientes de produção", "Manter endereços reais mas trocar nomes de exibição", "Usar identidades realistas sem especificar sua origem", "Usar registros fictícios e domínios de e-mail reservados"],
  ["Registros de produção podem expor informações pessoais.", "Endereços reais continuam sendo dados pessoais mesmo com nomes alterados.", "Sem origem definida, não se exige que os registros sejam sintéticos.", "Restrições explícitas de dados sintéticos evitam solicitar identidades reais."],
  "Restrições explícitas para dados de exemplo",
  ["Decida se a demonstração precisa de identidades reais.", "Alterar um campo pode deixar outros campos identificadores intactos."]
]);
add(164, [
  "¿Por qué pedir una refactorización que conserve el comportamiento por separado de una función nueva?",
  ["Para evaluar estructura y comportamiento por separado", "Para eliminar la necesidad de pruebas de regresión", "Para asegurar que ambas solicitudes produzcan código idéntico", "Para impedir que Copilot use contexto del repositorio"],
  ["Separar tareas aclara el propósito y la evaluación de cada cambio.", "La refactorización sigue necesitando comprobaciones de regresión.", "Las tareas distintas no requieren implementaciones idénticas.", "Separar tareas no elimina el contexto relevante."],
  "Separar objetivos de prompts",
  ["Considera cómo atribuye un revisor un cambio de comportamiento.", "Los límites de tareas pueden precisar la evaluación."]
], [
  "Por que pedir uma refatoração que preserve o comportamento separadamente de uma funcionalidade nova?",
  ["Para avaliar estrutura e comportamento separadamente", "Para eliminar a necessidade de testes de regressão", "Para garantir que as duas solicitações produzam código idêntico", "Para impedir que o Copilot use contexto do repositório"],
  ["Separar tarefas esclarece o propósito e a avaliação de cada mudança.", "Refatoração ainda exige verificações de regressão.", "Tarefas distintas não exigem implementações idênticas.", "Separar tarefas não remove o contexto relevante."],
  "Separar objetivos de prompts",
  ["Considere como um revisor atribui uma mudança de comportamento.", "Limites de tarefas podem tornar a avaliação mais precisa."]
]);
add(165, [
  "¿Qué hace más útil un conjunto de ejemplos few-shot?",
  ["Muchos ejemplos no relacionados con la tarea solicitada", "Ejemplos coherentes de la correspondencia deseada", "Etiquetas contradictorias para entradas idénticas sin explicación", "Varias salidas sin sus entradas correspondientes"],
  ["La cantidad irrelevante no demuestra la tarea objetivo.", "Las demostraciones coherentes comunican un patrón reconocible.", "Los conflictos sin explicar vuelven ambiguo el patrón deseado.", "Sin relaciones entre entrada y salida los ejemplos son menos útiles."],
  "Calidad de las demostraciones few-shot",
  ["Los ejemplos deben aclarar la relación que demuestran.", "Más ejemplos no ayudan si se contradicen o no corresponden a la tarea."]
], [
  "O que torna mais útil um conjunto de exemplos few-shot?",
  ["Muitos exemplos não relacionados à tarefa solicitada", "Exemplos consistentes do mapeamento desejado", "Rótulos conflitantes para entradas idênticas sem explicação", "Várias saídas sem suas entradas correspondentes"],
  ["Quantidade irrelevante não demonstra a tarefa-alvo.", "Demonstrações consistentes comunicam um padrão reconhecível.", "Conflitos sem explicação tornam o padrão pretendido ambíguo.", "Sem relações entre entrada e saída, os exemplos são menos úteis."],
  "Qualidade das demonstrações few-shot",
  ["Os exemplos devem esclarecer a relação demonstrada.", "Mais exemplos não ajudam se forem conflitantes ou não corresponderem à tarefa."]
]);
add(166, [
  "¿Qué afirmación describe correctamente los límites de un prompt bien elaborado?",
  ["Garantiza que el modelo use solo API actuales", "Hace determinista cada respuesta repetida", "Orienta la salida, pero no prueba su corrección", "Elimina la necesidad de inspeccionar el código generado"],
  ["Un prompt no garantiza API actuales ni válidas.", "La buena redacción no vuelve determinista la generación.", "La guía clara sigue requiriendo validar el resultado.", "GitHub recomienda revisar la salida generada por IA."],
  "Calidad del prompt frente a garantías del resultado",
  ["Separa orientación útil de evidencia verificada.", "¿Podría una solicitud precisa producir un error plausible?"]
], [
  "Qual afirmação descreve corretamente os limites de um prompt bem elaborado?",
  ["Garante que o modelo use apenas APIs atuais", "Torna determinística cada resposta repetida", "Orienta a saída, mas não comprova sua correção", "Elimina a necessidade de inspecionar o código gerado"],
  ["Um prompt não garante APIs atuais nem válidas.", "Boa redação não torna a geração determinística.", "Orientação clara ainda exige validar o resultado.", "O GitHub recomenda revisar a saída gerada por IA."],
  "Qualidade do prompt versus garantia do resultado",
  ["Separe orientação útil de evidência verificada.", "Uma solicitação precisa ainda poderia produzir um erro plausível?"]
]);
add(167, [
  "¿Qué tarea es un ejemplo de generación de código repetitivo con Copilot?",
  ["Explicar por qué termina un algoritmo", "Comparar planes de ejecución de bases de datos", "Diagnosticar un tiempo de espera de red intermitente", "Redactar estructuras de clases repetidas"],
  ["Explicar un algoritmo es una tarea de aprendizaje.", "Comparar planes de ejecución es análisis de rendimiento.", "Diagnosticar tiempos de espera es depuración.", "Las estructuras estándar repetidas son código repetitivo."],
  "Generación de código repetitivo",
  ["Identifica el trabajo que repite una estructura conocida.", "Separa la escritura repetitiva del diagnóstico o la explicación."]
], [
  "Qual tarefa é um exemplo de geração de código repetitivo com o Copilot?",
  ["Explicar por que um algoritmo termina", "Comparar planos de execução de bancos de dados", "Diagnosticar um tempo limite de rede intermitente", "Criar estruturas de classes repetidas"],
  ["Explicar um algoritmo é uma tarefa de aprendizado.", "Comparar planos de execução é análise de desempenho.", "Diagnosticar tempos limite é depuração.", "Estruturas padrão repetidas são código repetitivo."],
  "Geração de código repetitivo",
  ["Identifique o trabalho que repete uma estrutura conhecida.", "Separe a escrita repetitiva do diagnóstico ou da explicação."]
]);
add(168, [
  "¿Qué tarea de Copilot ayuda directamente a entender una función desconocida sin reescribirla?",
  ["Traducirla a otro lenguaje", "Explicar sus entradas, flujo de control y salidas", "Extraer sus bucles a métodos auxiliares", "Reemplazar sus llamadas de API por otras más recientes"],
  ["La traducción cambia el lenguaje de implementación.", "Una explicación ayuda a comprender el comportamiento existente.", "La extracción es una tarea de refactorización.", "Reemplazar APIs es modernización, no solo explicación."],
  "Explicación de código",
  ["Distingue aprender lo que existe de proponer un cambio.", "¿Qué solicitud mantiene la implementación como objeto de análisis?"]
], [
  "Qual tarefa do Copilot ajuda diretamente a entender uma função desconhecida sem reescrevê-la?",
  ["Traduzi-la para outra linguagem", "Explicar suas entradas, fluxo de controle e saídas", "Extrair seus laços para métodos auxiliares", "Substituir suas chamadas de API por outras mais recentes"],
  ["A tradução muda a linguagem de implementação.", "Uma explicação ajuda a compreender o comportamento existente.", "A extração é uma tarefa de refatoração.", "Substituir APIs é modernização, não apenas explicação."],
  "Explicação de código",
  ["Diferencie aprender o que existe de propor uma mudança.", "Qual solicitação mantém a implementação como objeto de análise?"]
]);
add(169, [
  "¿Cuál es el objetivo de una refactorización que conserva el comportamiento?",
  ["Introducir un nuevo requisito visible externamente", "Mejorar la estructura sin cambiar el comportamiento", "Cambiar los rangos de entrada aceptados para simplificar la implementación", "Reemplazar las salidas documentadas por un formato de respuesta nuevo"],
  ["Añadir un requisito cambia el comportamiento.", "La refactorización mejora la estructura sin cambiar intencionalmente el contrato.", "Cambiar la aceptación de entradas cambia el comportamiento.", "Cambiar el formato público cambia el contrato."],
  "Refactorización frente a cambio de comportamiento",
  ["Compara el contrato público antes y después de la edición.", "Una limpieza interna y una nueva función tienen objetivos distintos."]
], [
  "Qual é o objetivo de uma refatoração que preserva o comportamento?",
  ["Introduzir um novo requisito visível externamente", "Melhorar a estrutura sem mudar o comportamento", "Mudar os intervalos de entrada aceitos para simplificar a implementação", "Substituir as saídas documentadas por um novo formato de resposta"],
  ["Adicionar um requisito muda o comportamento.", "A refatoração melhora a estrutura sem mudar intencionalmente o contrato.", "Mudar a aceitação de entradas muda o comportamento.", "Mudar o formato público muda o contrato."],
  "Refatoração versus mudança de comportamento",
  ["Compare o contrato público antes e depois da edição.", "Uma limpeza interna e uma nova função têm objetivos diferentes."]
]);
add(170, [
  "¿Qué contenido corresponde a una referencia de función generada?",
  ["Parámetros, retornos y comportamiento de errores", "Solo nombres de variables internas y contadores de bucles", "Solo una descripción de la sintaxis línea por línea", "Solo el historial de commits del archivo de la función"],
  ["Estos describen cómo usan la función sus llamadores.", "Los nombres internos no describen el contrato para quien llama.", "Describir sintaxis no basta para explicar uso y comportamiento.", "El historial de cambios por sí solo no explica la interfaz actual."],
  "Documentación de funciones",
  ["Piensa en lo que necesita saber quien llama a la función.", "Distingue el contrato de la interfaz de los metadatos del proyecto."]
], [
  "Qual conteúdo pertence a uma referência de função gerada?",
  ["Parâmetros, retornos e comportamento de erros", "Apenas nomes de variáveis internas e contadores de laços", "Apenas uma descrição da sintaxe linha por linha", "Apenas o histórico de commits do arquivo da função"],
  ["Esses elementos descrevem como os chamadores usam a função.", "Nomes internos não descrevem o contrato para o chamador.", "Descrever sintaxe não basta para explicar uso e comportamento.", "O histórico de mudanças por si só não explica a interface atual."],
  "Documentação de funções",
  ["Pense no que quem chama a função precisa saber.", "Diferencie o contrato da interface dos metadados do projeto."]
]);
add(171, [
  "Una función debe devolver 12 para una entrada específica. ¿Qué aserción de JavaScript comprueba directamente ese requisito?",
  ["assert.ok(result)", "assert.notEqual(result, null)", "assert.equal(result, 12)", "assert.equal(typeof result, 'number')"],
  ["Muchos valores incorrectos se evalúan como verdaderos.", "No ser nulo no establece el valor requerido.", "Esto compara el valor real con el resultado requerido.", "Un tipo numérico por sí solo no establece el valor correcto."],
  "Aserciones de comportamiento",
  ["Distingue comprobar un valor de comprobar su presencia o tipo.", "¿Podría un número incorrecto satisfacer la aserción propuesta?"]
], [
  "Uma função deve retornar 12 para uma entrada específica. Qual asserção JavaScript verifica diretamente esse requisito?",
  ["assert.ok(result)", "assert.notEqual(result, null)", "assert.equal(result, 12)", "assert.equal(typeof result, 'number')"],
  ["Muitos valores incorretos são avaliados como verdadeiros.", "Não ser nulo não estabelece o valor exigido.", "Isso compara o valor real com o resultado exigido.", "Um tipo numérico por si só não estabelece o valor correto."],
  "Asserções de comportamento",
  ["Diferencie verificar um valor de verificar sua presença ou tipo.", "Um número incorreto poderia satisfazer a asserção proposta?"]
]);
add(172, [
  "Para un campo entero válido de 1 a 100 inclusive, ¿qué conjunto prueba ambos límites válidos y los valores inválidos adyacentes?",
  ["25, 50, 75, 90", "1, 25, 75, 100", "-100, -50, 150, 200", "0, 1, 100, 101"],
  ["Estos valores solo prueban el interior.", "Incluye los límites, pero faltan valores inválidos adyacentes.", "Estos valores omiten los límites válidos y sus vecinos inmediatos.", "Este conjunto comprueba ambos límites y valores justo fuera de ellos."],
  "Pruebas de valores límite",
  ["Localiza ambos extremos del intervalo permitido.", "Considera valores inmediatamente dentro y fuera de cada límite."]
], [
  "Para um campo inteiro válido de 1 a 100 inclusive, qual conjunto testa os dois limites válidos e os valores inválidos adjacentes?",
  ["25, 50, 75, 90", "1, 25, 75, 100", "-100, -50, 150, 200", "0, 1, 100, 101"],
  ["Esses valores testam apenas o interior.", "Inclui os limites, mas faltam valores inválidos adjacentes.", "Esses valores omitem os limites válidos e seus vizinhos imediatos.", "Esse conjunto verifica os dois limites e valores logo fora deles."],
  "Testes de valores-limite",
  ["Localize os dois extremos do intervalo permitido.", "Considere valores imediatamente dentro e fora de cada limite."]
]);
add(173, [
  "¿Qué prueba generada es una prueba de integración?",
  ["Una función pura probada con entradas fijas", "Un analizador probado con una cadena en memoria", "Un adaptador de repositorio probado contra una base de datos de pruebas", "Un validador probado con un colaborador sustituido por un stub"],
  ["Una función pura aislada es un objetivo de pruebas unitarias.", "Analizar una cadena en memoria no requiere integración con infraestructura.", "Usar el adaptador real con infraestructura de base de datos prueba su integración.", "Un stub ayuda a aislar la unidad bajo prueba."],
  "Pruebas de integración frente a unitarias",
  ["Busca un límite real entre componentes o infraestructura.", "¿Qué dependencia no ha sido sustituida por un doble de prueba dentro del proceso?"]
], [
  "Qual teste gerado é um teste de integração?",
  ["Uma função pura testada com entradas fixas", "Um analisador testado com uma string em memória", "Um adaptador de repositório testado contra um banco de dados de teste", "Um validador testado com um colaborador substituído por um stub"],
  ["Uma função pura isolada é um alvo de testes de unidade.", "Analisar uma string em memória não exige integração com infraestrutura.", "Usar o adaptador real com infraestrutura de banco de dados testa sua integração.", "Um stub ajuda a isolar a unidade sob teste."],
  "Testes de integração versus testes de unidade",
  ["Procure um limite real entre componentes ou infraestrutura.", "Qual dependência não foi substituída por um dublê de teste dentro do processo?"]
]);
add(174, [
  "¿Cuál es el papel de un stub en una prueba unitaria?",
  ["Sustituir una dependencia con comportamiento controlado", "Medir tiempo de ejecución bajo carga de producción", "Ejecutar toda la aplicación mediante su interfaz de usuario", "Comprobar licencias de paquetes de terceros"],
  ["Un stub aporta comportamiento controlado del colaborador para aislar la prueba.", "Medir tiempo bajo carga es una prueba de rendimiento.", "Comprobar toda la aplicación mediante la interfaz es una prueba de extremo a extremo.", "Comprobar licencias es gobernanza de dependencias."],
  "Stubs y aislamiento de pruebas",
  ["Separa un reemplazo de dependencia de un ejecutor de pruebas.", "¿Cómo puede una prueba evitar depender de la respuesta actual de un servicio remoto?"]
], [
  "Qual é o papel de um stub em um teste de unidade?",
  ["Substituir uma dependência com comportamento controlado", "Medir tempo de execução sob carga de produção", "Executar toda a aplicação por sua interface de usuário", "Verificar licenças de pacotes de terceiros"],
  ["Um stub fornece comportamento controlado do colaborador para isolar o teste.", "Medir tempo sob carga é um teste de desempenho.", "Verificar toda a aplicação pela interface é um teste de ponta a ponta.", "Verificar licenças é governança de dependências."],
  "Stubs e isolamento de testes",
  ["Separe uma substituição de dependência de um executor de testes.", "Como um teste pode evitar depender da resposta atual de um serviço remoto?"]
]);
add(175, [
  "¿Qué evidencia mide si una optimización propuesta por Copilot realmente se ejecuta más rápido?",
  ["Una explicación generada más corta", "Tiempos de ejecución con cargas comparables", "Un mayor número de funciones auxiliares", "Una tasa mayor de aceptación de sugerencias"],
  ["La longitud de la explicación no mide el tiempo de ejecución.", "Las mediciones de ejecución comparables prueban la afirmación de rendimiento.", "El número de funciones no establece la velocidad.", "La aceptación mide uso, no rendimiento de ejecución."],
  "Optimización medida",
  ["Separa una hipótesis de mejora del rendimiento observado.", "¿Qué evidencia proviene de ejecutar las alternativas?"]
], [
  "Que evidência mede se uma otimização proposta pelo Copilot realmente executa mais rápido?",
  ["Uma explicação gerada mais curta", "Tempos de execução com cargas comparáveis", "Um número maior de funções auxiliares", "Uma taxa maior de aceitação de sugestões"],
  ["O tamanho da explicação não mede o tempo de execução.", "Medições comparáveis de execução testam a afirmação de desempenho.", "O número de funções não estabelece a velocidade.", "A aceitação mede uso, não desempenho de execução."],
  "Otimização medida",
  ["Separe uma hipótese de melhoria do desempenho observado.", "Que evidência vem da execução das alternativas?"]
]);
add(176, [
  "¿Qué debe conservar entre lenguajes una traducción de código con comportamiento equivalente?",
  ["La escritura de las palabras clave del lenguaje original", "El número exacto de líneas de código", "La sintaxis de comandos del gestor de paquetes original", "Las operaciones requeridas y los resultados observables"],
  ["Las palabras clave difieren entre lenguajes.", "El número de líneas no es un contrato de comportamiento.", "Las herramientas pueden diferir en el lenguaje de destino.", "La traducción debe mantener la funcionalidad y las salidas previstas."],
  "Conversión de código entre lenguajes",
  ["Distingue sintaxis de semántica.", "¿Qué observaría quien llama al código antes y después de convertirlo?"]
], [
  "O que uma tradução de código com comportamento equivalente deve preservar entre linguagens?",
  ["A grafia das palavras-chave da linguagem original", "O número exato de linhas de código", "A sintaxe dos comandos do gerenciador de pacotes original", "As operações exigidas e os resultados observáveis"],
  ["Palavras-chave diferem entre linguagens.", "O número de linhas não é um contrato de comportamento.", "As ferramentas podem diferir na linguagem de destino.", "A tradução deve manter a funcionalidade e as saídas pretendidas."],
  "Conversão de código entre linguagens",
  ["Diferencie sintaxe de semântica.", "O que quem chama o código observaria antes e depois da conversão?"]
]);
add(177, [
  "¿Cómo puede la asistencia de Copilot en el editor reducir los cambios de contexto?",
  ["Ofreciendo ayuda en el editor actual", "Trasladando cada pregunta a una sesión de navegador separada", "Ocultando el código circundante durante cada pregunta", "Reemplazando explicaciones de código por tutoriales no relacionados"],
  ["La ayuda en el editor puede reducir interrupciones durante el trabajo.", "Salir repetidamente del editor añade cambios de contexto.", "Ocultar código relevante elimina contexto de trabajo útil.", "El material no relacionado no ayuda a la tarea actual."],
  "Reducción de cambios de contexto",
  ["Considera las interrupciones de la tarea de desarrollo actual.", "¿Qué interacción mantiene la ayuda útil cerca del trabajo?"]
], [
  "Como a assistência do Copilot no editor pode reduzir trocas de contexto?",
  ["Oferecendo ajuda no editor atual", "Transferindo cada pergunta para uma sessão separada do navegador", "Ocultando o código ao redor durante cada pergunta", "Substituindo explicações de código por tutoriais não relacionados"],
  ["A ajuda no editor pode reduzir interrupções durante o trabalho.", "Sair repetidamente do editor acrescenta trocas de contexto.", "Ocultar código relevante remove contexto de trabalho útil.", "Material não relacionado não ajuda na tarefa atual."],
  "Redução de trocas de contexto",
  ["Considere as interrupções da tarefa de desenvolvimento atual.", "Qual interação mantém a ajuda útil perto do trabalho?"]
]);
add(178, [
  "¿Qué tarea de Copilot produce datos sintéticos de prueba?",
  ["Resumir el historial de diseño del esquema", "Enumerar los índices no usados del esquema", "Generar registros ficticios válidos según el esquema", "Explicar cómo se relacionan las tablas del esquema"],
  ["Un resumen histórico es documentación.", "El análisis de índices no crea registros.", "Los registros ficticios con restricciones son datos sintéticos.", "Explicar relaciones ayuda a comprender, no a crear datos."],
  "Datos sintéticos de prueba",
  ["Distingue describir un esquema de crear ejemplos que lo cumplan.", "¿Qué poblaría un conjunto de prueba sin usar registros de clientes?"]
], [
  "Qual tarefa do Copilot produz dados sintéticos de teste?",
  ["Resumir o histórico de design do esquema", "Listar os índices não usados do esquema", "Gerar registros fictícios válidos pelo esquema", "Explicar como as tabelas do esquema se relacionam"],
  ["Um resumo histórico é documentação.", "A análise de índices não cria registros.", "Registros fictícios com restrições são dados sintéticos.", "Explicar relações ajuda a compreender, não a criar dados."],
  "Dados sintéticos de teste",
  ["Diferencie descrever um esquema de criar exemplos que o atendam.", "O que preencheria uma massa de teste sem usar registros de clientes?"]
]);
add(179, [
  "¿Qué debería orientar el reemplazo de una API obsoleta con ayuda de Copilot?",
  ["Solo la similitud del nombre del método de reemplazo", "Solo ejemplos escritos para una versión no especificada del paquete", "Solo el número de caracteres eliminados", "Contratos de la versión de destino y requisitos del proyecto"],
  ["Los nombres similares pueden ocultar semánticas distintas.", "Las versiones no especificadas pueden sugerir APIs incompatibles.", "El número de caracteres no establece la corrección de la migración.", "Los contratos específicos de versión y los requisitos definen un reemplazo adecuado."],
  "Modernización consciente de versiones",
  ["Una API más reciente puede diferir en errores, valores predeterminados o tipos devueltos.", "¿Qué evidencia describe la versión que realmente se adoptará?"]
], [
  "O que deve orientar a substituição de uma API obsoleta com ajuda do Copilot?",
  ["Apenas a semelhança do nome do método substituto", "Apenas exemplos escritos para uma versão não especificada do pacote", "Apenas o número de caracteres removidos", "Contratos da versão de destino e requisitos do projeto"],
  ["Nomes semelhantes podem esconder semânticas diferentes.", "Versões não especificadas podem sugerir APIs incompatíveis.", "O número de caracteres não estabelece a correção da migração.", "Contratos específicos da versão e requisitos definem uma substituição adequada."],
  "Modernização sensível a versões",
  ["Uma API mais recente pode diferir em erros, padrões ou tipos retornados.", "Que evidência descreve a versão que será realmente adotada?"]
]);
add(180, [
  "¿Qué técnica complementa la revisión de Copilot examinando el código en busca de problemas basados en reglas sin ejecutar la aplicación?",
  ["Pruebas de carga", "Análisis estático", "Pruebas de aceptación de usuarios", "Perfilado en tiempo de ejecución"],
  ["Las pruebas de carga ejecutan cargas de trabajo.", "El análisis estático examina código sin ejecutar la aplicación.", "Las pruebas de aceptación evalúan comportamiento frente a necesidades del usuario.", "El perfilado observa la ejecución."],
  "Análisis estático",
  ["Compara herramientas que inspeccionan código con las que observan un programa en ejecución.", "¿Qué técnica no requiere una carga de trabajo de la aplicación?"]
], [
  "Qual técnica complementa a revisão do Copilot examinando o código em busca de problemas baseados em regras sem executar a aplicação?",
  ["Testes de carga", "Análise estática", "Testes de aceitação de usuários", "Perfilamento em tempo de execução"],
  ["Testes de carga executam cargas de trabalho.", "A análise estática examina código sem executar a aplicação.", "Testes de aceitação avaliam comportamento em relação às necessidades do usuário.", "O perfilamento observa a execução."],
  "Análise estática",
  ["Compare ferramentas que inspecionam código com as que observam um programa em execução.", "Qual técnica não exige uma carga de trabalho da aplicação?"]
]);
add(181, [
  "¿Qué establece una cobertura de líneas del 100 % sobre un conjunto de pruebas generado?",
  ["Cada requisito tiene una aserción correcta", "Se ha probado toda entrada posible", "Las pruebas ejecutaron cada línea de código medida", "Se ha descartado toda vulnerabilidad de seguridad"],
  ["La cobertura no juzga la calidad de las aserciones.", "Ejecutar líneas no enumera todas las entradas.", "La cobertura de líneas mide la ejecución de líneas de código.", "La cobertura no demuestra seguridad."],
  "Límites de cobertura de código",
  ["Distingue ejecutar código de comprobar sus resultados.", "¿Qué observa realmente el instrumento de cobertura?"]
], [
  "O que uma cobertura de linhas de 100% estabelece sobre uma suíte de testes gerada?",
  ["Todo requisito tem uma asserção correta", "Toda entrada possível foi testada", "Os testes executaram cada linha de código medida", "Toda vulnerabilidade de segurança foi descartada"],
  ["A cobertura não julga a qualidade das asserções.", "Executar linhas não enumera todas as entradas.", "A cobertura de linhas mede a execução de linhas de código.", "A cobertura não comprova segurança."],
  "Limites de cobertura de código",
  ["Diferencie executar código de verificar seus resultados.", "O que o instrumento de cobertura realmente observa?"]
]);
add(182, [
  "¿Cuál es el propósito de una prueba de regresión añadida con la corrección de un error?",
  ["Medir cuántas líneas elimina la corrección", "Detectar la reaparición del comportamiento defectuoso", "Documentar solo los pasos de implementación del parche", "Reemplazar todas las pruebas de funcionalidades vecinas"],
  ["El tamaño del parche no detecta un defecto recurrente.", "Una prueba de regresión protege el comportamiento corregido frente a roturas posteriores.", "Una prueba útil comprueba comportamiento en vez de solo describir ediciones.", "Una prueba de regresión no reemplaza el resto de la cobertura."],
  "Pruebas de regresión",
  ["Piensa más allá de si el parche actual funciona una vez.", "¿Qué debería pasar si una edición posterior reintroduce el defecto?"]
], [
  "Qual é a finalidade de um teste de regressão adicionado com uma correção de bug?",
  ["Medir quantas linhas a correção remove", "Detectar o retorno do comportamento defeituoso", "Documentar apenas as etapas de implementação do patch", "Substituir todos os testes de funcionalidades vizinhas"],
  ["O tamanho do patch não detecta um defeito recorrente.", "Um teste de regressão protege o comportamento corrigido contra falhas posteriores.", "Um teste útil verifica comportamento em vez de apenas descrever edições.", "Um teste de regressão não substitui o restante da cobertura."],
  "Testes de regressão",
  ["Pense além de o patch atual funcionar uma vez.", "O que deve acontecer se uma edição posterior reintroduzir o defeito?"]
]);
add(183, [
  "¿Qué refactorización separa una función larga en operaciones más pequeñas con nombre?",
  ["Extraer método", "Insertar método en sus llamadores", "Renombrar variable", "Cambiar firma"],
  ["La extracción traslada una operación coherente a un método separado.", "La inserción traslada el cuerpo de un método a sus llamadores.", "Renombrar mejora el nombre sin separar operaciones.", "Cambiar una firma cambia parámetros o la interfaz invocable."],
  "Refactorización de extracción de métodos",
  ["Considera la dirección en que se mueve el código.", "¿Qué transformación crea una unidad invocable a partir de parte de un cuerpo mayor?"]
], [
  "Qual refatoração separa uma função longa em operações menores nomeadas?",
  ["Extrair método", "Inserir método nos chamadores", "Renomear variável", "Alterar assinatura"],
  ["A extração move uma operação coesa para um método separado.", "A inserção move o corpo de um método para seus chamadores.", "Renomear melhora o nome sem separar operações.", "Alterar uma assinatura muda parâmetros ou a interface invocável."],
  "Refatoração de extração de métodos",
  ["Considere a direção em que o código se move.", "Qual transformação cria uma unidade invocável a partir de parte de um corpo maior?"]
]);
add(184, [
  "¿Qué solicitud se centra en revisar seguridad y no legibilidad?",
  ["Sugerir nombres más claros para las variables locales del manejador", "Dividir el manejador en funciones más pequeñas con nombre", "Explicar las ramas condicionales anidadas del manejador", "Rastrear entradas no confiables hasta operaciones sensibles"],
  ["La nomenclatura se centra en la legibilidad.", "La descomposición se centra en estructura y mantenibilidad.", "Explicar el flujo de control ayuda a comprender.", "Rastrear límites de confianza puede revelar fallos de inyección o validación."],
  "Revisión de código centrada en seguridad",
  ["Distingue código comprensible de manejo seguro de datos externos.", "¿Dónde puede influir una entrada en una acción sensible para la seguridad?"]
], [
  "Qual solicitação se concentra em revisar segurança, e não legibilidade?",
  ["Sugerir nomes mais claros para as variáveis locais do manipulador", "Dividir o manipulador em funções menores nomeadas", "Explicar os ramos condicionais aninhados do manipulador", "Rastrear entradas não confiáveis até operações sensíveis"],
  ["A nomenclatura se concentra na legibilidade.", "A decomposição se concentra em estrutura e manutenibilidade.", "Explicar o fluxo de controle ajuda a compreender.", "Rastrear limites de confiança pode revelar falhas de injeção ou validação."],
  "Revisão de código focada em segurança",
  ["Diferencie código compreensível de tratamento seguro de dados externos.", "Onde uma entrada pode influenciar uma ação sensível à segurança?"]
]);
add(185, [
  "¿Qué herramienta está diseñada para localizar dónde consume tiempo un programa en ejecución?",
  ["Un formateador de código", "Un analizador de licencias de dependencias", "Un perfilador en tiempo de ejecución", "Un visor de diferencias de código"],
  ["El formateo estandariza la presentación del código.", "El análisis de licencias examina términos de dependencias.", "El perfilado observa costes de ejecución y puntos críticos.", "Los diffs muestran cambios, no costes de ejecución medidos."],
  "Perfilado en tiempo de ejecución",
  ["Separa inspeccionar el texto fuente de observar la ejecución.", "¿Qué ayuda a comprobar la hipótesis de un asistente sobre un cuello de botella?"]
], [
  "Qual ferramenta foi projetada para localizar onde um programa em execução gasta tempo?",
  ["Um formatador de código", "Um analisador de licenças de dependências", "Um perfilador em tempo de execução", "Um visualizador de diferenças de código"],
  ["A formatação padroniza a apresentação do código.", "A análise de licenças examina termos de dependências.", "O perfilamento observa custos de execução e pontos críticos.", "Diffs mostram mudanças, não custos de execução medidos."],
  "Perfilamento em tempo de execução",
  ["Separe inspecionar o texto-fonte de observar a execução.", "O que ajuda a verificar a hipótese de um assistente sobre um gargalo?"]
]);
add(136, [
  "A nivel conceptual, ¿cómo genera un LLM la continuación de un texto?",
  ["Ejecutando cada palabra propuesta como un comando de shell", "Prediciendo tokens sucesivos a partir del contexto", "Exigiendo una respuesta exacta almacenada para todo el prompt", "Compilando todas las respuestas posibles antes de seleccionar una"],
  ["Generar texto no es ejecutar comandos de shell.", "La predicción sucesiva de tokens es el proceso básico de generación de modelos de lenguaje.", "La generación no requiere una respuesta almacenada coincidente.", "Compilar todas las respuestas no es el mecanismo de generación."],
  "Predicción de tokens",
  ["Piensa en producir una secuencia de manera incremental.", "¿Cómo puede influir el contexto anterior en lo que viene después?"]
], [
  "Em nível conceitual, como um LLM gera a continuação de um texto?",
  ["Executando cada palavra proposta como um comando de shell", "Prevendo tokens sucessivos a partir do contexto", "Exigindo uma resposta exata armazenada para todo o prompt", "Compilando todas as respostas possíveis antes de selecionar uma"],
  ["Gerar texto não é executar comandos de shell.", "A previsão sucessiva de tokens é o processo básico de geração de modelos de linguagem.", "A geração não exige uma resposta armazenada correspondente.", "Compilar todas as respostas não é o mecanismo de geração."],
  "Previsão de tokens",
  ["Pense em produzir uma sequência de forma incremental.", "Como o contexto anterior pode influenciar o que vem depois?"]
]);
add(137, [
  "¿Para qué sirve la ingeniería de prompts al usar Copilot?",
  ["Sustituir pruebas de aceptación por instrucciones detalladas", "Orientar respuestas con instrucciones y contexto", "Cambiar parámetros del modelo mediante la conversación", "Aumentar los permisos del modelo sobre repositorios"],
  ["Las instrucciones claras no sustituyen la validación independiente.", "La ingeniería de prompts mejora la solicitud y el contexto relevante.", "Un prompt no reentrena los parámetros del modelo.", "El texto del prompt no concede acceso a repositorios."],
  "Propósito de la ingeniería de prompts",
  ["Distingue mejorar una solicitud de cambiar el modelo subyacente.", "Considera qué entradas controla directamente el desarrollador."]
], [
  "Para que serve a engenharia de prompts ao usar o Copilot?",
  ["Substituir testes de aceitação por instruções detalhadas", "Orientar respostas com instruções e contexto", "Alterar parâmetros do modelo pela conversa", "Aumentar as permissões do modelo em repositórios"],
  ["Instruções claras não substituem a validação independente.", "A engenharia de prompts melhora a solicitação e o contexto relevante.", "Um prompt não retreina os parâmetros do modelo.", "O texto do prompt não concede acesso a repositórios."],
  "Finalidade da engenharia de prompts",
  ["Diferencie melhorar uma solicitação de alterar o modelo subjacente.", "Considere quais entradas o desenvolvedor controla diretamente."]
]);
add(138, [
  "¿Qué entrada caracteriza el prompting zero-shot?",
  ["Varios ejemplos seguidos de una tarea", "Un conjunto de datos para actualizar pesos del modelo", "Una tarea solicitada sin ejemplos", "Un ejemplo resuelto seguido de una tarea"],
  ["Varias demostraciones caracterizan el prompting few-shot.", "Actualizar pesos es entrenamiento, no una técnica de prompting.", "El prompting zero-shot no incluye demostraciones de la tarea.", "Una demostración caracteriza el prompting one-shot."],
  "Prompting zero-shot",
  ["Cuenta demostraciones de la tarea, no oraciones de la solicitud.", "Un requisito detallado no es necesariamente un ejemplo resuelto."]
], [
  "Qual entrada caracteriza o prompting zero-shot?",
  ["Vários exemplos seguidos de uma tarefa", "Um conjunto de dados para atualizar pesos do modelo", "Uma tarefa solicitada sem exemplos", "Um exemplo resolvido seguido de uma tarefa"],
  ["Várias demonstrações caracterizam o prompting few-shot.", "Atualizar pesos é treinamento, não uma técnica de prompting.", "O prompting zero-shot não inclui demonstrações da tarefa.", "Uma demonstração caracteriza o prompting one-shot."],
  "Prompting zero-shot",
  ["Conte demonstrações da tarefa, não frases na solicitação.", "Um requisito detalhado não é necessariamente um exemplo resolvido."]
]);
add(139, [
  "Un prompt dice: «Escribe un validador que rechace identificadores vacíos». No incluye ejemplos. ¿Qué técnica utiliza?",
  ["Prompting one-shot", "Prompting few-shot", "Ajuste fino del modelo", "Prompting zero-shot"],
  ["No hay un ejemplo resuelto.", "No hay un conjunto de ejemplos resueltos.", "La solicitud no actualiza los pesos del modelo.", "La solicitud describe una tarea sin demostraciones."],
  "Reconocer una solicitud zero-shot",
  ["Identifica si la solicitud demuestra una tarea ya resuelta.", "No confundas una restricción con una demostración."]
], [
  "Um prompt diz: 'Escreva um validador que rejeite identificadores vazios'. Não inclui exemplos. Qual técnica utiliza?",
  ["Prompting one-shot", "Prompting few-shot", "Ajuste fino do modelo", "Prompting zero-shot"],
  ["Não há um exemplo resolvido.", "Não há um conjunto de exemplos resolvidos.", "A solicitação não atualiza os pesos do modelo.", "A solicitação descreve uma tarefa sem demonstrações."],
  "Reconhecer uma solicitação zero-shot",
  ["Identifique se a solicitação demonstra uma tarefa já resolvida.", "Não confunda uma restrição com uma demonstração."]
]);
add(140, [
  "Un desarrollador muestra una reescritura completa de un mensaje de error antes de solicitar otra. ¿Qué tipo de prompting es?",
  ["One-shot", "Zero-shot", "Few-shot", "Ajuste fino"],
  ["Una demostración completa corresponde a prompting one-shot.", "Zero-shot omitiría la demostración.", "Few-shot incluiría varias demostraciones.", "Un ejemplo en un prompt no actualiza los pesos del modelo."],
  "Reconocer prompting one-shot",
  ["Cuenta las demostraciones completas de la entrada.", "La nueva salida solicitada no es otra demostración."]
], [
  "Um desenvolvedor mostra uma reescrita completa de uma mensagem de erro antes de solicitar outra. Qual é o tipo de prompting?",
  ["One-shot", "Zero-shot", "Few-shot", "Ajuste fino"],
  ["Uma demonstração completa corresponde a prompting one-shot.", "Zero-shot omitiria a demonstração.", "Few-shot incluiria várias demonstrações.", "Um exemplo no prompt não atualiza os pesos do modelo."],
  "Reconhecer prompting one-shot",
  ["Conte as demonstrações completas na entrada.", "A nova saída solicitada não é outra demonstração."]
]);
add(141, [
  "En las «4 S» de la ingeniería de prompts, ¿qué recomienda Single?",
  ["Mantener abierto solo un archivo fuente", "Centrarse en una tarea bien definida", "Usar exactamente una oración", "Incluir exactamente un ejemplo resuelto"],
  ["El contexto de archivos relevantes corresponde a Surround.", "Single trata del enfoque de la tarea, no de una longitud fija.", "Una tarea enfocada puede necesitar varias oraciones.", "La cantidad de ejemplos describe técnicas basadas en ejemplos."],
  "Prompting centrado en una tarea",
  ["Distingue el alcance de la longitud del mensaje.", "¿Qué propiedad mantiene enfocada una solicitud?"]
], [
  "Nos '4 Ss' da engenharia de prompts, o que Single recomenda?",
  ["Manter aberto apenas um arquivo-fonte", "Focar em uma tarefa bem definida", "Usar exatamente uma frase", "Incluir exatamente um exemplo resolvido"],
  ["O contexto de arquivos relevantes corresponde a Surround.", "Single trata do foco da tarefa, não de um tamanho fixo.", "Uma tarefa focada pode precisar de várias frases.", "A quantidade de exemplos descreve técnicas baseadas em exemplos."],
  "Prompting focado em uma tarefa",
  ["Diferencie escopo de tamanho da mensagem.", "Qual propriedade mantém uma solicitação focada?"]
]);
add(142, [
  "¿Qué estrategia de prompting facilita evaluar una implementación grande?",
  ["Repetir toda la solicitud sin cambiar su alcance", "Eliminar comprobaciones intermedias hasta generar todo", "Dividirla en tareas menores con requisitos claros", "Combinar implementación y limpieza no relacionada"],
  ["La repetición no resuelve un alcance excesivo.", "Omitir comprobaciones retrasa la detección de malentendidos.", "Las tareas menores facilitan evaluar avances y corrección.", "El trabajo no relacionado amplía el alcance de evaluación."],
  "Descomposición de tareas",
  ["Considera cuánto comportamiento debe evaluarse a la vez.", "Elige una estrategia que detecte malentendidos temprano."]
], [
  "Qual estratégia de prompting facilita avaliar uma implementação grande?",
  ["Repetir toda a solicitação sem alterar seu escopo", "Eliminar verificações intermediárias até gerar tudo", "Dividi-la em tarefas menores com requisitos claros", "Combinar implementação e limpeza não relacionada"],
  ["Repetir não resolve um escopo excessivo.", "Omitir verificações adia a detecção de mal-entendidos.", "Tarefas menores facilitam avaliar o progresso e a correção.", "Trabalho não relacionado amplia o escopo da avaliação."],
  "Decomposição de tarefas",
  ["Considere quanto comportamento precisa ser avaliado de uma vez.", "Escolha uma estratégia que revele mal-entendidos cedo."]
]);
add(143, [
  "¿Qué prompt usa demostraciones few-shot para enseñar un formato de categorías propio?",
  ["Nombrar el formato de categorías sin mostrar ejemplos", "Mostrar un ejemplo etiquetado y pedir otra etiqueta", "Hacer tres preguntas sin demostrar ninguna etiqueta", "Dar varios ejemplos etiquetados antes de otra entrada"],
  ["Nombrar un formato no aporta demostraciones.", "Un ejemplo corresponde a prompting one-shot.", "La cantidad de preguntas no determina la cantidad de ejemplos.", "Varios ejemplos etiquetados demuestran el patrón deseado."],
  "Aplicar prompting few-shot",
  ["Busca demostraciones completas de entrada y salida.", "Cuenta ejemplos, no preguntas ni restricciones."]
], [
  "Qual prompt usa demonstrações few-shot para ensinar um formato próprio de categorias?",
  ["Nomear o formato de categorias sem mostrar exemplos", "Mostrar um exemplo rotulado e pedir outro rótulo", "Fazer três perguntas sem demonstrar nenhum rótulo", "Dar vários exemplos rotulados antes de outra entrada"],
  ["Nomear um formato não fornece demonstrações.", "Um exemplo corresponde a prompting one-shot.", "A quantidade de perguntas não determina a quantidade de exemplos.", "Vários exemplos rotulados demonstram o padrão desejado."],
  "Aplicar prompting few-shot",
  ["Procure demonstrações completas de entrada e saída.", "Conte exemplos, não perguntas ou restrições."]
]);
add(144, [
  "¿Qué instrucción define con mayor precisión un contrato de salida legible por máquina?",
  ["Devuelve solo JSON con las claves title y priority", "Devuelve una explicación breve de title y priority", "Devuelve una tabla con title y priority", "Devuelve el formato que mejor explique title y priority"],
  ["Especifica el formato de serialización y las claves permitidas.", "Una explicación no exige JSON válido.", "Una tabla no es el objeto JSON solicitado.", "Dejar abierto el formato no define un contrato fijo."],
  "Formato de salida explícito",
  ["Distingue contenido legible de un contrato de serialización fijo.", "¿Qué necesita conocer un analizador posterior?"]
], [
  "Qual instrução define com mais precisão um contrato de saída legível por máquina?",
  ["Retorne apenas JSON com as chaves title e priority", "Retorne uma explicação breve de title e priority", "Retorne uma tabela com title e priority", "Retorne o formato que melhor explique title e priority"],
  ["Especifica o formato de serialização e as chaves permitidas.", "Uma explicação não exige JSON válido.", "Uma tabela não é o objeto JSON solicitado.", "Deixar o formato em aberto não define um contrato fixo."],
  "Formato de saída explícito",
  ["Diferencie conteúdo legível de um contrato de serialização fixo.", "O que um analisador posterior precisa saber?"]
]);
add(145, [
  "¿Qué expresa «conserva las firmas de los métodos públicos» en un prompt de refactorización?",
  ["Una solicitud de añadir una API pública", "Una restricción de compatibilidad", "Un ejemplo de la salida esperada", "Un permiso de acceso al repositorio"],
  ["Conservar una interfaz no es ampliarla.", "Indica qué parte de la interfaz debe permanecer sin cambios.", "Aporta un requisito, no un resultado de ejemplo.", "Las restricciones del prompt no configuran permisos."],
  "Restricciones e invariantes",
  ["Separa lo que puede cambiar de lo que debe mantenerse.", "Clasifica la función de la instrucción, no su redacción."]
], [
  "O que 'preserve as assinaturas dos métodos públicos' expressa em um prompt de refatoração?",
  ["Uma solicitação para adicionar uma API pública", "Uma restrição de compatibilidade", "Um exemplo da saída esperada", "Uma permissão de acesso ao repositório"],
  ["Preservar uma interface não é ampliá-la.", "Indica qual parte da interface deve permanecer inalterada.", "Fornece um requisito, não uma saída de exemplo.", "Restrições do prompt não configuram permissões."],
  "Restrições e invariantes",
  ["Separe o que pode mudar do que deve permanecer estável.", "Classifique a função da instrução, não sua redação."]
]);
add(146, [
  "¿Qué contexto ayuda más en una solicitud sobre una biblioteca interna poco conocida?",
  ["Ejemplos de una versión incompatible de la biblioteca", "Una lista de bibliotecas utilizadas por otro proyecto", "Firmas de API y ejemplos de uso relevantes", "Una descripción general del propósito de la biblioteca"],
  ["Otra versión puede exponer API incompatibles.", "Las bibliotecas de otro proyecto no explican esta API interna.", "Las firmas y los ejemplos muestran cómo usar la biblioteca real.", "Un propósito general omite la interfaz necesaria para las llamadas."],
  "Aportar contexto de una API poco conocida",
  ["Piensa en información ausente del conocimiento general del modelo.", "¿Qué contexto demuestra la interfaz que se utiliza?"]
], [
  "Qual contexto mais ajuda em uma solicitação sobre uma biblioteca interna pouco conhecida?",
  ["Exemplos de uma versão incompatível da biblioteca", "Uma lista de bibliotecas utilizadas por outro projeto", "Assinaturas de API e exemplos de uso relevantes", "Uma descrição geral da finalidade da biblioteca"],
  ["Outra versão pode expor APIs incompatíveis.", "As bibliotecas de outro projeto não explicam esta API interna.", "Assinaturas e exemplos mostram como usar a biblioteca real.", "Uma finalidade geral omite a interface necessária para as chamadas."],
  "Fornecer contexto de uma API pouco conhecida",
  ["Pense em informações ausentes do conhecimento geral do modelo.", "Qual contexto demonstra a interface utilizada?"]
]);
add(147, [
  "¿Qué comentario comunica a Copilot el requisito de implementación con mayor claridad?",
  ["Implementa el procesamiento del árbol con un enfoque adecuado", "Mejora esta función de árbol todo lo posible", "Usa el estilo de recorrido habitual para este árbol", "Usa recorrido iterativo, no recursión"],
  ["Deja sin especificar la estrategia de recorrido.", "El objetivo de mejora no tiene un requisito concreto.", "No identifica la convención esperada.", "Especifica la operación y una restricción explícita."],
  "Solicitudes precisas mediante comentarios",
  ["Busca comportamiento y restricciones explícitos.", "Una instrucción familiar puede dejar ambiguas decisiones importantes."]
], [
  "Qual comentário comunica ao Copilot o requisito de implementação com mais clareza?",
  ["Implemente o processamento da árvore com uma abordagem adequada", "Melhore esta função de árvore o máximo possível", "Use o estilo de percurso habitual para esta árvore", "Use percurso iterativo, não recursão"],
  ["Deixa a estratégia de percurso indefinida.", "O objetivo de melhoria não tem um requisito concreto.", "Não identifica a convenção esperada.", "Especifica a operação e uma restrição explícita."],
  "Solicitações precisas por comentários",
  ["Procure comportamento e restrições explícitos.", "Uma instrução familiar pode deixar decisões importantes ambíguas."]
]);
add(148, [
  "¿Qué comparación mide mejor si un prompt revisado mejora el código generado?",
  ["Aplicar las mismas pruebas de aceptación a ambas salidas", "Comparar solo la cantidad de palabras de ambos prompts", "Preferir la respuesta que suene más segura", "Preferir la implementación que tenga menos líneas"],
  ["Los mismos criterios permiten comparar la corrección para la tarea.", "La longitud del prompt no demuestra calidad de salida.", "La confianza no es evidencia independiente de corrección.", "El código más corto puede incumplir requisitos."],
  "Evaluar revisiones de prompts",
  ["Mantén constantes los criterios de evaluación.", "Distingue un resultado útil de un indicador fácil de contar."]
], [
  "Qual comparação mede melhor se um prompt revisado melhora o código gerado?",
  ["Aplicar os mesmos testes de aceitação às duas saídas", "Comparar apenas a quantidade de palavras dos prompts", "Preferir a resposta que pareça mais confiante", "Preferir a implementação que tenha menos linhas"],
  ["Os mesmos critérios permitem comparar a correção para a tarefa.", "O tamanho do prompt não comprova qualidade da saída.", "Confiança não é evidência independente de correção.", "Código mais curto pode descumprir requisitos."],
  "Avaliar revisões de prompts",
  ["Mantenha os critérios de avaliação constantes.", "Diferencie um resultado útil de um indicador fácil de contar."]
]);
add(149, [
  "Al pasar de una tarea no relacionada a otra nueva en Copilot Chat, ¿qué se recomienda respecto al historial?",
  ["Sustituir los detalles nuevos por el resumen anterior", "Iniciar un chat nuevo con el contexto de la nueva tarea", "Mantener la conversación anterior para maximizar el historial", "Repetir la solicitud sin quitar el contexto irrelevante"],
  ["El resumen anterior no describe la nueva tarea.", "Una conversación nueva evita contexto irrelevante de otra tarea.", "Un historial más largo no es necesariamente más relevante.", "La repetición mantiene presente el contexto no relacionado."],
  "Historial de conversación relevante",
  ["Piensa si los turnos anteriores ayudan al objetivo actual.", "Más contexto solo es útil si es relevante."]
], [
  "Ao passar de uma tarefa não relacionada para outra nova no Copilot Chat, o que se recomenda sobre o histórico?",
  ["Substituir os detalhes novos pelo resumo anterior", "Iniciar um chat novo com o contexto da nova tarefa", "Manter a conversa anterior para maximizar o histórico", "Repetir a solicitação sem remover o contexto irrelevante"],
  ["O resumo anterior não descreve a nova tarefa.", "Uma conversa nova evita contexto irrelevante de outra tarefa.", "Um histórico maior não é necessariamente mais relevante.", "A repetição mantém presente o contexto não relacionado."],
  "Histórico de conversa relevante",
  ["Pense se as mensagens anteriores ajudam o objetivo atual.", "Mais contexto só é útil quando é relevante."]
]);
add(150, [
  "¿Qué acción ilustra Surround en las «4 S» para completados de código en el IDE?",
  ["Proporcionar exactamente un ejemplo de entrada y salida", "Quitar el contexto de archivos y usar solo el nombre de la tarea", "Abrir archivos relacionados con nombres descriptivos", "Poner todos los requisitos en una sola oración"],
  ["Un ejemplo caracteriza el prompting one-shot.", "Quitar contexto relevante contradice Surround.", "Surround trata del contexto circundante útil y los nombres descriptivos.", "La concisión corresponde a Short, no a Surround."],
  "Surround y contexto del editor",
  ["Los principios abordan aspectos distintos de una solicitud.", "Considera la información alrededor del código que se edita."]
], [
  "Qual ação ilustra Surround nos '4 Ss' para completamentos de código no IDE?",
  ["Fornecer exatamente um exemplo de entrada e saída", "Remover o contexto de arquivos e usar só o nome da tarefa", "Abrir arquivos relacionados com nomes descritivos", "Colocar todos os requisitos em uma única frase"],
  ["Um exemplo caracteriza o prompting one-shot.", "Remover contexto relevante contraria Surround.", "Surround trata do contexto ao redor e de nomes descritivos.", "Concisão corresponde a Short, não a Surround."],
  "Surround e contexto do editor",
  ["Os princípios abordam aspectos diferentes de uma solicitação.", "Considere as informações ao redor do código em edição."]
]);
add(151, [
  "¿Cómo pueden servir las pruebas unitarias como contexto en un prompt de implementación?",
  ["Conceder acceso a archivos fuera del repositorio", "Garantizar que la implementación sea correcta", "Fijar parámetros de entrenamiento del modelo para la tarea", "Mostrar entradas y salidas requeridas"],
  ["Las pruebas no cambian permisos de acceso.", "Los ejemplos no garantizan que el código pase ni que sea completo.", "Los ejemplos del prompt no configuran el entrenamiento.", "Las pruebas pueden demostrar el comportamiento que se debe cumplir."],
  "Pruebas como ejemplos de comportamiento",
  ["Distingue ejemplos de requisitos de pruebas sobre el resultado.", "¿Qué comunica una prueba antes de que exista el código?"]
], [
  "Como testes unitários podem servir de contexto em um prompt de implementação?",
  ["Conceder acesso a arquivos fora do repositório", "Garantir que a implementação esteja correta", "Definir parâmetros de treinamento do modelo para a tarefa", "Mostrar entradas e saídas exigidas"],
  ["Testes não alteram permissões de acesso.", "Exemplos não garantem que o código passe nem que esteja completo.", "Exemplos no prompt não configuram treinamento.", "Testes podem demonstrar o comportamento que deve ser atendido."],
  "Testes como exemplos de comportamento",
  ["Diferencie exemplos de requisitos de evidências sobre o resultado.", "O que um teste comunica antes de o código existir?"]
]);
add(152, [
  "Un analizador debe interpretar 06/07 como 6 de julio. ¿Qué detalle elimina la ambigüedad?",
  ["Usa orden día/mes; 06/07 significa 6 de julio", "Usa el formato de fecha más común", "Usa la convención de fechas que prefiera el modelo", "Usa el mismo separador en todas las fechas"],
  ["Indica la convención e ilustra la interpretación requerida.", "El formato más común depende de la configuración regional.", "La preferencia del modelo no es un requisito del producto.", "Un separador uniforme no determina el orden de los campos."],
  "Eliminar ambigüedades en requisitos",
  ["Considera qué parte admite dos interpretaciones.", "Un ejemplo útil conecta la sintaxis con el significado deseado."]
], [
  "Um analisador deve interpretar 06/07 como 6 de julho. Qual detalhe elimina a ambiguidade?",
  ["Use ordem dia/mês; 06/07 significa 6 de julho", "Use o formato de data mais comum", "Use a convenção de datas preferida pelo modelo", "Use o mesmo separador em todas as datas"],
  ["Indica a convenção e ilustra a interpretação exigida.", "O formato mais comum depende da localidade.", "A preferência do modelo não é um requisito do produto.", "Um separador uniforme não determina a ordem dos campos."],
  "Eliminar ambiguidades nos requisitos",
  ["Considere qual parte admite duas interpretações.", "Um exemplo útil conecta a sintaxe ao significado desejado."]
]);
add(153, [
  "¿Qué detalle hace más específica la solicitud «mejora el rendimiento de esta función»?",
  ["Sustituye la implementación por una más larga", "Reduce la latencia en el benchmark adjunto", "Reduce espacios en la implementación", "Adopta la versión más nueva de la dependencia"],
  ["La longitud de la implementación no es un objetivo de rendimiento.", "Identifica un objetivo de rendimiento y una carga representativa.", "Reducir espacios no define el rendimiento de ejecución.", "Una dependencia nueva no es por sí sola un requisito de rendimiento."],
  "Objetivos de prompt medibles",
  ["Identifica un resultado que pueda medirse.", "La especificidad describe éxito, no solo actividad."]
], [
  "Qual detalhe torna mais específica a solicitação 'melhore o desempenho desta função'?",
  ["Substitua a implementação por uma mais longa", "Reduza a latência no benchmark fornecido", "Reduza espaços na implementação", "Adote a versão mais nova da dependência"],
  ["O tamanho da implementação não é um objetivo de desempenho.", "Identifica um objetivo de desempenho e uma carga representativa.", "Reduzir espaços não define desempenho de execução.", "Uma dependência nova não é, por si só, um requisito de desempenho."],
  "Objetivos de prompt mensuráveis",
  ["Identifique um resultado que possa ser medido.", "Especificidade descreve sucesso, não apenas atividade."]
]);
add(154, [
  "¿Qué instrucción define mejor el público de una explicación de código?",
  ["Explica sin especificar los conocimientos del lector", "Explica cada archivo antes de hablar de esta función", "Explica código asíncrono a quien programa Python", "Explica con el nivel de detalle más común"],
  ["Omitir los conocimientos previos deja el público sin definir.", "Ampliar el alcance no identifica al lector.", "Identifica conocimientos previos y el tema que requiere explicación.", "Un nivel habitual puede no corresponder al lector."],
  "Público y profundidad de explicación",
  ["Piensa en lo que el lector previsto ya conoce.", "La información del público no es la cantidad de código aportado."]
], [
  "Qual instrução define melhor o público de uma explicação de código?",
  ["Explique sem especificar os conhecimentos do leitor", "Explique cada arquivo antes de abordar esta função", "Explique código assíncrono para quem programa em Python", "Explique com o nível de detalhe mais comum"],
  ["Omitir conhecimentos prévios deixa o público indefinido.", "Ampliar o escopo não identifica o leitor.", "Identifica conhecimentos prévios e o tema que requer explicação.", "Um nível habitual pode não corresponder ao leitor."],
  "Público e profundidade da explicação",
  ["Pense no que o leitor pretendido já conhece.", "Informações do público não são a quantidade de código fornecida."]
]);
add(155, [
  "¿Qué orden sigue la guía de GitHub para estructurar un prompt?",
  ["Dar contexto no relacionado antes de presentar la tarea", "Omitir el objetivo general y dar solo nombres de archivos", "Mezclar requisitos obligatorios e ideas opcionales sin distinguirlos", "Indicar el objetivo general y luego los requisitos más importantes"],
  ["El contexto no relacionado oculta el objetivo.", "Los nombres de archivos no describen por sí solos el resultado.", "Las prioridades sin identificar dificultan interpretar los requisitos.", "La guía recomienda un objetivo general seguido de requisitos específicos y priorizados."],
  "Organizar requisitos del prompt",
  ["Distingue orientación de detalles de implementación.", "Considera cómo se identifican la tarea y sus prioridades."]
], [
  "Qual ordem segue a orientação do GitHub para estruturar um prompt?",
  ["Dar contexto não relacionado antes de apresentar a tarefa", "Omitir o objetivo geral e fornecer apenas nomes de arquivos", "Misturar requisitos obrigatórios e ideias opcionais sem distingui-los", "Indicar o objetivo geral e depois os requisitos mais importantes"],
  ["Contexto não relacionado oculta o objetivo.", "Nomes de arquivos não descrevem sozinhos o resultado.", "Prioridades não identificadas dificultam interpretar os requisitos.", "A orientação recomenda um objetivo geral seguido de requisitos específicos e priorizados."],
  "Organizar requisitos do prompt",
  ["Diferencie orientação de detalhes de implementação.", "Considere como a tarefa e suas prioridades são identificadas."]
]);
add(156, [
  "La respuesta de Copilot procesa bien los casos exitosos, pero maneja mal los tiempos de espera. ¿Qué seguimiento es más concreto?",
  ["Corrige tiempos de espera; conserva los casos exitosos", "Regenera todo sin mencionar el problema", "Pide más código sin identificar un requisito", "Repite el prompt original sin comentarios"],
  ["Identifica el requisito fallido y el comportamiento que se debe conservar.", "Reiniciar todo omite comentarios específicos útiles.", "Pedir más cantidad no explica el defecto.", "Repetir la solicitud no describe la discrepancia."],
  "Prompting iterativo específico",
  ["Los comentarios deben indicar qué cambiar y qué conservar.", "¿Qué solicitud comunica la diferencia observada?"]
], [
  "A resposta do Copilot processa bem os casos de sucesso, mas trata mal os tempos limite. Qual acompanhamento é mais focado?",
  ["Corrija tempos limite; preserve os casos de sucesso", "Gere tudo novamente sem mencionar o problema", "Peça mais código sem identificar um requisito", "Repita o prompt original sem comentários"],
  ["Identifica o requisito não atendido e o comportamento a preservar.", "Recomeçar tudo omite comentários específicos úteis.", "Pedir mais quantidade não explica o defeito.", "Repetir a solicitação não descreve a discrepância."],
  "Prompting iterativo específico",
  ["Os comentários devem indicar o que mudar e o que preservar.", "Qual solicitação comunica a diferença observada?"]
]);
add(157, [
  "¿Qué diseño permite reutilizar un prompt de generación de pruebas entre módulos?",
  ["Todos los archivos del repositorio incluidos en cada solicitud", "Criterios comunes con contexto de módulo reemplazable", "Una implementación de módulo incrustada permanentemente", "Ningún criterio de prueba y una meta nueva cada vez"],
  ["Los archivos no relacionados añaden ruido sin definir el objetivo.", "La guía estable y el contexto reemplazable permiten reutilización.", "Fijar una implementación vincula el prompt a ese módulo.", "Quitar criterios pierde consistencia, no aporta reutilización útil."],
  "Guía de prompting reutilizable",
  ["Separa las instrucciones constantes de las entradas variables.", "La reutilización debe conservar los criterios de evaluación."]
], [
  "Qual projeto permite reutilizar um prompt de geração de testes entre módulos?",
  ["Todos os arquivos do repositório incluídos em cada solicitação", "Critérios comuns com contexto de módulo substituível", "Uma implementação de módulo incorporada permanentemente", "Nenhum critério de teste e uma meta nova a cada vez"],
  ["Arquivos não relacionados adicionam ruído sem definir o alvo.", "Orientação estável e contexto substituível permitem reutilização.", "Fixar uma implementação vincula o prompt àquele módulo.", "Remover critérios perde consistência, não traz reutilização útil."],
  "Orientação de prompting reutilizável",
  ["Separe instruções constantes de entradas variáveis.", "A reutilização deve preservar os critérios de avaliação."]
]);
add(158, [
  "¿Qué información ayuda a Copilot a evitar una API de dependencia incompatible?",
  ["La firma de API de la última versión preliminar", "Ejemplos de uso de una versión sin especificar", "La versión admitida y las restricciones de la API", "Un tutorial de otra versión principal"],
  ["Las API preliminares pueden no existir en la versión admitida.", "Sin especificar la versión no se establece compatibilidad.", "La versión real y las restricciones delimitan las API válidas.", "Otra versión principal puede exponer métodos incompatibles."],
  "Contexto específico de versión",
  ["Un método puede existir en una versión y no en otra.", "Elige contexto que defina la interfaz admitida por el proyecto."]
], [
  "Qual informação ajuda o Copilot a evitar uma API de dependência incompatível?",
  ["A assinatura de API da última versão de prévia", "Exemplos de uso de uma versão não especificada", "A versão suportada e as restrições da API", "Um tutorial de outra versão principal"],
  ["APIs de prévia podem não existir na versão suportada.", "Sem especificar a versão não se estabelece compatibilidade.", "A versão real e as restrições delimitam as APIs válidas.", "Outra versão principal pode expor métodos incompatíveis."],
  "Contexto específico de versão",
  ["Um método pode existir em uma versão e não em outra.", "Escolha contexto que defina a interface suportada pelo projeto."]
]);
add(159, [
  "¿Qué contexto es más relevante al pedir a Copilot que diagnostique un fallo reproducible?",
  ["Una lista de todos los colaboradores del repositorio", "Todo el historial de commits sin detalles del error", "Una ejecución correcta no relacionada en otro entorno", "El error, la reproducción y el resultado esperado"],
  ["Los metadatos de colaboradores no explican el comportamiento.", "El historial sin enfoque omite evidencia para reproducir este error.", "Una ejecución no relacionada no demuestra este fallo.", "Estos detalles permiten reproducir y reconocer el fallo."],
  "Evidencia en prompts de depuración",
  ["Distingue evidencia del fallo de metadatos del proyecto.", "El asistente necesita comparar qué ocurrió con qué debería ocurrir."]
], [
  "Qual contexto é mais relevante ao pedir ao Copilot que diagnostique uma falha reproduzível?",
  ["Uma lista de todos os colaboradores do repositório", "Todo o histórico de commits sem detalhes do erro", "Uma execução correta não relacionada em outro ambiente", "O erro, a reprodução e o resultado esperado"],
  ["Metadados de colaboradores não explicam o comportamento.", "O histórico sem foco omite evidências para reproduzir este erro.", "Uma execução não relacionada não demonstra esta falha.", "Esses detalhes permitem reproduzir e reconhecer a falha."],
  "Evidências em prompts de depuração",
  ["Diferencie evidências da falha de metadados do projeto.", "O assistente precisa comparar o que ocorreu com o que deveria ocorrer."]
]);
add(160, [
  "En un prompt de Copilot, ¿qué describe la intención?",
  ["El resultado que el usuario quiere lograr", "El código fuente circundante disponible para el modelo", "La cantidad de tokens que el modelo puede procesar", "El alcance de administración de la suscripción"],
  ["La intención describe el objetivo o resultado deseado.", "El código circundante es contexto, no el objetivo en sí.", "La capacidad de tokens es una limitación del modelo, no intención.", "El alcance de la suscripción es un concepto administrativo."],
  "Intención frente a contexto",
  ["Una solicitud puede incluir antecedentes y un resultado deseado.", "Determina qué parte explica para qué se solicita la tarea."]
], [
  "Em um prompt do Copilot, o que a intenção descreve?",
  ["O resultado que o usuário quer alcançar", "O código-fonte ao redor disponível para o modelo", "A quantidade de tokens que o modelo pode processar", "O escopo de administração da assinatura"],
  ["A intenção descreve o objetivo ou resultado desejado.", "O código ao redor é contexto, não o objetivo em si.", "A capacidade de tokens é uma limitação do modelo, não intenção.", "O escopo da assinatura é um conceito administrativo."],
  "Intenção versus contexto",
  ["Uma solicitação pode incluir informações prévias e um resultado desejado.", "Determine qual parte explica para que a tarefa é solicitada."]
]);
add(111, [
  "¿Qué limita la ventana de contexto de un modelo?",
  ["El presupuesto de tokens de una solicitud", "El número máximo de solicitudes por minuto", "Solo la longitud de la salida generada", "El total de tokens usados al entrenar el modelo"],
  ["Los modelos tienen presupuestos de contexto finitos; los límites exactos varían.", "La tasa de solicitudes es otro límite del servicio.", "El contexto incluye entrada, no solo salida generada.", "El tamaño del corpus de entrenamiento no es el presupuesto de contexto de una solicitud."],
  "Ventana de contexto",
  ["Distingue capacidad de solicitud de volumen de entrenamiento o tasa de solicitudes.", "¿Qué recurso consume el texto de una solicitud?"]
], [
  "O que a janela de contexto de um modelo limita?",
  ["O orçamento de tokens de uma solicitação", "O número máximo de solicitações por minuto", "Apenas o tamanho da saída gerada", "O total de tokens usados ao treinar o modelo"],
  ["Modelos têm orçamentos de contexto finitos; os limites exatos variam.", "A taxa de solicitações é outro limite do serviço.", "O contexto inclui entrada, não apenas saída gerada.", "O tamanho do corpus de treinamento não é o orçamento de contexto de uma solicitação."],
  "Janela de contexto",
  ["Diferencie capacidade da solicitação de volume de treinamento ou taxa de solicitações.", "Que recurso é consumido pelo texto em uma solicitação?"]
]);
add(112, [
  "¿Por qué un pull request muy grande puede reducir la relevancia de la completación de su descripción?",
  ["Su lenguaje de programación deja de ser compatible", "Parte del contenido relevante puede no caber en la solicitud al modelo", "Cada archivo se envía necesariamente en una solicitud separada", "El modelo deja de usar el título del pull request"],
  ["El tamaño por sí solo no cambia la compatibilidad del lenguaje.", "La ficha de aplicación identifica el contenido que no cabe como una limitación.", "La documentación no garantiza una solicitud por archivo.", "El título sigue siendo una fuente de contexto documentada."],
  "Contexto limitado de pull requests",
  ["Considera la diferencia entre los datos disponibles del proyecto y el contexto enviado.", "¿Qué pasa cuando el material útil excede un presupuesto finito de solicitud?"]
], [
  "Por que um pull request muito grande pode reduzir a relevância da conclusão da descrição?",
  ["Sua linguagem de programação deixa de ser compatível", "Parte do conteúdo relevante pode não caber na solicitação ao modelo", "Cada arquivo é necessariamente enviado em uma solicitação separada", "O modelo deixa de usar o título do pull request"],
  ["O tamanho por si só não muda o suporte à linguagem.", "O cartão de aplicação identifica o conteúdo que não cabe como uma limitação.", "A documentação não garante uma solicitação por arquivo.", "O título continua sendo uma fonte de contexto documentada."],
  "Contexto limitado de pull requests",
  ["Considere a diferença entre os dados disponíveis do projeto e o contexto enviado.", "O que acontece quando o material útil excede um orçamento finito de solicitação?"]
]);
add(113, [
  "En la completación fill-in-the-middle, ¿qué son el prefijo y el sufijo?",
  ["El nombre del repositorio y de la rama", "La instrucción de sistema y de usuario", "El primer y el último token generados", "Código antes y después del cursor"],
  ["Los metadatos del repositorio no son el par prefijo/sufijo de FIM.", "Los roles de las instrucciones son otra distinción.", "El prefijo y el sufijo son contexto suministrado, no extremos generados.", "FIM condiciona la completación con ambos lados del espacio."],
  "Contexto fill-in-the-middle",
  ["Localiza el espacio donde se insertará el código.", "¿Qué material circundante ya existe antes de la generación?"]
], [
  "Na conclusão fill-in-the-middle, o que são o prefixo e o sufixo?",
  ["O nome do repositório e da branch", "A instrução de sistema e de usuário", "O primeiro e o último token gerados", "Código antes e depois do cursor"],
  ["Metadados do repositório não são o par prefixo/sufixo do FIM.", "Papéis de instruções são outra distinção.", "Prefixo e sufixo são contexto fornecido, não extremidades geradas.", "O FIM condiciona a conclusão aos dois lados da lacuna."],
  "Contexto fill-in-the-middle",
  ["Localize a lacuna onde o código será inserido.", "Que material ao redor já existe antes da geração?"]
]);
add(114, [
  "¿Cuál es el propósito de la indexación semántica de repositorios para Copilot?",
  ["Compilar todas las ramas antes de cada respuesta", "Reemplazar los controles de acceso al repositorio", "Ayudar a recuperar código relevante para el significado de una pregunta", "Convertir cada repositorio en un nuevo modelo base entrenado"],
  ["La indexación no es compilación.", "El contexto de búsqueda no reemplaza la autorización.", "Un índice semántico ayuda a localizar código relevante para respuestas contextualizadas.", "GitHub indica que los repositorios indexados no se usan para entrenar modelos."],
  "Indexación semántica de repositorios",
  ["Compara buscar código relevante con cambiar un modelo.", "¿Se puede localizar código útil sin conocer el nombre exacto de su símbolo?"]
], [
  "Qual é a finalidade da indexação semântica de repositórios para o Copilot?",
  ["Compilar todas as branches antes de cada resposta", "Substituir os controles de acesso ao repositório", "Ajudar a recuperar código relevante para o significado de uma pergunta", "Transformar cada repositório em um novo modelo base treinado"],
  ["Indexação não é compilação.", "Contexto de pesquisa não substitui autorização.", "Um índice semântico ajuda a localizar código relevante para respostas contextualizadas.", "O GitHub informa que repositórios indexados não são usados para treinar modelos."],
  "Indexação semântica de repositórios",
  ["Compare encontrar código relevante com mudar um modelo.", "É possível localizar código útil sem saber o nome exato de seu símbolo?"]
]);
add(115, [
  "¿Qué afirmación distingue correctamente la recuperación de repositorios del entrenamiento del modelo?",
  ["La recuperación añade contexto; entrenar cambia parámetros", "La recuperación cambia parámetros; el entrenamiento solo selecciona archivos", "Ambos requieren compilar el código recuperado", "Ambos añaden permanentemente cada archivo recuperado al conocimiento del modelo"],
  ["Recuperar contexto y aprender parámetros del modelo son procesos distintos.", "Esto invierte recuperación y entrenamiento.", "Ningún proceso se define por la compilación.", "Recuperar un archivo no se lo enseña permanentemente al modelo."],
  "Recuperación frente a entrenamiento",
  ["Distingue información usada en una solicitud de los parámetros aprendidos.", "¿Consultar un documento exige volver a entrenar?"]
], [
  "Qual afirmação distingue corretamente a recuperação de repositórios do treinamento do modelo?",
  ["A recuperação adiciona contexto; treinar muda parâmetros", "A recuperação muda parâmetros; o treinamento apenas seleciona arquivos", "Ambos exigem compilar o código recuperado", "Ambos adicionam permanentemente cada arquivo recuperado ao conhecimento do modelo"],
  ["Recuperar contexto e aprender parâmetros do modelo são processos distintos.", "Isso inverte recuperação e treinamento.", "Nenhum processo é definido pela compilação.", "Recuperar um arquivo não o ensina permanentemente ao modelo."],
  "Recuperação versus treinamento",
  ["Diferencie informações usadas em uma solicitação dos parâmetros aprendidos.", "Consultar um documento exige treinar novamente?"]
]);
add(116, [
  "¿Cuándo se aplica una sugerencia en línea del IDE al archivo?",
  ["En cuanto el modelo la genera", "Al aceptarla explícitamente el desarrollador", "Cuando termina su comprobación de código público", "Cuando el editor la muestra"],
  ["La generación por sí sola no aplica la sugerencia.", "Las sugerencias en línea solo se aplican tras su aceptación explícita.", "Una comprobación de filtrado no es aceptación.", "Mostrar una propuesta no es editar el archivo."],
  "Presentación y aceptación de sugerencias",
  ["Separa un cambio propuesto de uno aplicado.", "¿Quién controla si una completación mostrada entra en el archivo?"]
], [
  "Quando uma sugestão em linha do IDE é aplicada ao arquivo?",
  ["Assim que o modelo a gera", "Ao ser aceita explicitamente pelo desenvolvedor", "Quando termina a verificação de código público", "Quando o editor a exibe"],
  ["A geração por si só não aplica a sugestão.", "Sugestões em linha só são aplicadas após aceitação explícita.", "Uma verificação de filtragem não é aceitação.", "Exibir uma proposta não é editar o arquivo."],
  "Apresentação e aceitação de sugestões",
  ["Separe uma mudança proposta de uma mudança aplicada.", "Quem controla se uma conclusão exibida entra no arquivo?"]
]);
add(117, [
  "En una superficie compatible de Copilot, ¿qué aportan las instrucciones personalizadas del repositorio?",
  ["Un reemplazo de los permisos del repositorio", "Un índice semántico de todas las dependencias", "Un modelo recién entrenado para cada colaborador", "Orientación reutilizable para solicitudes"],
  ["Las instrucciones no conceden acceso al repositorio.", "Los archivos de orientación no son índices de búsqueda de dependencias.", "Los archivos de instrucciones no crean modelos específicos por colaborador.", "Las instrucciones personalizadas aportan convenciones recurrentes y contexto del proyecto."],
  "Instrucciones personalizadas como contexto",
  ["Separa orientación, recuperación y autorización.", "¿Qué evita repetir las mismas convenciones en cada solicitud?"]
], [
  "Em uma superfície compatível do Copilot, o que as instruções personalizadas do repositório fornecem?",
  ["Uma substituição das permissões do repositório", "Um índice semântico de todas as dependências", "Um modelo recém-treinado para cada colaborador", "Orientação reutilizável para solicitações"],
  ["Instruções não concedem acesso ao repositório.", "Arquivos de orientação não são índices de pesquisa de dependências.", "Arquivos de instruções não criam modelos específicos por colaborador.", "Instruções personalizadas fornecem convenções recorrentes e contexto do projeto."],
  "Instruções personalizadas como contexto",
  ["Separe orientação, recuperação e autorização.", "O que evita repetir as mesmas convenções em cada solicitação?"]
]);
add(118, [
  "¿Qué estandariza Model Context Protocol?",
  ["Cómo se compila código fuente en binarios", "Cómo se etiquetan conjuntos de entrenamiento", "Conexiones a herramientas y datos externos", "Cómo se firman commits de Git"],
  ["MCP no es un protocolo de compilación.", "MCP no define el etiquetado de datos de entrenamiento.", "MCP ofrece un mecanismo estándar de conexión para contexto y herramientas.", "La firma de commits es independiente de MCP."],
  "Model Context Protocol",
  ["Piensa en ampliar un asistente más allá del texto suministrado.", "¿Qué capa conecta una aplicación con capacidades externas?"]
], [
  "O que o Model Context Protocol padroniza?",
  ["Como código-fonte é compilado em binários", "Como conjuntos de treinamento são rotulados", "Conexões a ferramentas e dados externos", "Como commits do Git são assinados"],
  ["MCP não é um protocolo de compilação.", "MCP não define a rotulagem de dados de treinamento.", "MCP fornece um mecanismo padrão de conexão para contexto e ferramentas.", "A assinatura de commits é independente do MCP."],
  "Model Context Protocol",
  ["Pense em ampliar um assistente além do texto fornecido.", "Que camada conecta uma aplicação a capacidades externas?"]
]);
add(119, [
  "¿A qué pueden acceder las credenciales predeterminadas de GitHub MCP del agente en la nube?",
  ["Al repositorio actual con ámbito de solo lectura", "A todos los repositorios privados de GitHub", "A todos los repositorios de la empresa con ámbito de escritura", "A cualquier repositorio mencionado en un prompt con ámbito de administración"],
  ["El token predeterminado documentado es de solo lectura y está limitado al repositorio actual.", "El token predeterminado no tiene autorización global.", "La escritura en toda la empresa requiere otra autorización.", "Mencionar un recurso no concede permisos de administración."],
  "Límites de autorización de herramientas",
  ["Distingue la existencia de una herramienta del ámbito de sus credenciales.", "¿Nombrar un recurso puede cambiar los permisos de su token de acceso?"]
], [
  "O que as credenciais padrão do GitHub MCP do agente na nuvem podem acessar?",
  ["O repositório atual com escopo de somente leitura", "Todos os repositórios privados do GitHub", "Todos os repositórios da empresa com escopo de escrita", "Qualquer repositório mencionado em um prompt com escopo de administração"],
  ["O token padrão documentado é de somente leitura e limitado ao repositório atual.", "O token padrão não tem autorização global.", "Escrita em toda a empresa exige outra autorização.", "Mencionar um recurso não concede permissões de administração."],
  "Limites de autorização de ferramentas",
  ["Diferencie a existência de uma ferramenta do escopo de suas credenciais.", "Nomear um recurso pode mudar as permissões de seu token de acesso?"]
]);
add(120, [
  "¿Qué significa fundamentar una respuesta en documentación recuperada?",
  ["Reemplazar el modelo por un visor de documentos", "Usar fuentes relevantes para orientar la respuesta generada", "Demostrar que cada afirmación generada es correcta", "Guardar la respuesta como nuevos datos de entrenamiento del modelo base"],
  ["Las respuestas fundamentadas siguen siendo generadas.", "La evidencia recuperada aporta contexto a la respuesta.", "La fundamentación puede mejorar la relevancia sin garantizar exactitud.", "Usar documentación como contexto no es entrenar."],
  "Fundamentación",
  ["Considera el papel de la evidencia en una respuesta.", "Separa orientar la generación de certificar su resultado."]
], [
  "O que significa fundamentar uma resposta em documentação recuperada?",
  ["Substituir o modelo por um visualizador de documentos", "Usar fontes relevantes para orientar a resposta gerada", "Comprovar que toda afirmação gerada está correta", "Salvar a resposta como novos dados de treinamento do modelo base"],
  ["Respostas fundamentadas continuam sendo geradas.", "A evidência recuperada fornece contexto para a resposta.", "A fundamentação pode melhorar a relevância sem garantir exatidão.", "Usar documentação como contexto não é treinar."],
  "Fundamentação",
  ["Considere o papel da evidência em uma resposta.", "Separe orientar a geração de certificar seu resultado."]
]);
add(121, [
  "¿Cuál es la función del filtrado de contenido de Copilot?",
  ["Ejecutar cada sugerencia en un entorno de pruebas aislado", "Establecer los requisitos de negocio del programa", "Asignar licencias a todo el código generado", "Detectar y bloquear cierto contenido dañino o inseguro"],
  ["El filtrado no es ejecución de pruebas.", "Los requisitos provienen de la tarea y sus responsables.", "El filtrado no determina todas las obligaciones de licencia.", "Los filtros son salvaguardas, no pruebas completas de corrección o seguridad."],
  "Filtrado de contenido",
  ["Distingue un filtro de seguridad de la verificación de programas.", "¿Qué función trata del contenido generado inadecuado?"]
], [
  "Qual é a função da filtragem de conteúdo do Copilot?",
  ["Executar cada sugestão em um ambiente de teste isolado", "Estabelecer os requisitos de negócio do programa", "Atribuir licenças a todo o código gerado", "Detectar e bloquear certos conteúdos prejudiciais ou inseguros"],
  ["Filtragem não é execução de testes.", "Requisitos vêm da tarefa e de seus responsáveis.", "A filtragem não determina todas as obrigações de licença.", "Filtros são salvaguardas, não provas completas de correção ou segurança."],
  "Filtragem de conteúdo",
  ["Diferencie um filtro de segurança da verificação de programas.", "Que função trata de conteúdo gerado inadequado?"]
]);
add(122, [
  "¿Qué comprobación compara sugerencias de Copilot con código disponible públicamente?",
  ["Comprobación de tipos", "Pruebas unitarias", "Coincidencia con código público", "Análisis de vulnerabilidades de dependencias"],
  ["La comprobación de tipos evalúa las reglas de tipos del lenguaje.", "Las pruebas unitarias comprueban comportamientos seleccionados.", "La coincidencia con código público comprueba la similitud con código público.", "El análisis de dependencias comprueba riesgos de paquetes, no coincidencias de sugerencias."],
  "Coincidencia con código público",
  ["Compara el objeto de cada comprobación.", "¿Se pregunta por comportamiento en ejecución, riesgos de paquetes o similitud de código?"]
], [
  "Qual verificação compara sugestões do Copilot com código disponível publicamente?",
  ["Verificação de tipos", "Testes de unidade", "Correspondência com código público", "Análise de vulnerabilidades de dependências"],
  ["A verificação de tipos avalia as regras de tipos da linguagem.", "Testes de unidade verificam comportamentos selecionados.", "A correspondência com código público verifica similaridade com código público.", "A análise de dependências verifica riscos de pacotes, não correspondências de sugestões."],
  "Correspondência com código público",
  ["Compare o alvo de cada verificação.", "A pergunta trata de comportamento em execução, riscos de pacotes ou similaridade de código?"]
]);
add(123, [
  "¿Qué información puede orientar la completación de texto de pull requests en GitHub.com?",
  ["Título y descripción del PR, títulos de commits y diffs parciales", "Solo los ajustes de compilación y despliegue del repositorio", "Solo archivos del primer commit del repositorio", "Solo la duración de la última compilación exitosa"],
  ["Estas son fuentes documentadas para completar descripciones.", "Los ajustes de compilación por sí solos omiten el contexto específico del cambio.", "El primer commit no describe los cambios actuales.", "La duración de la compilación por sí sola no describe el cambio."],
  "Entradas para completar pull requests",
  ["¿Qué entradas describen lo que cambia el pull request?", "Distingue contexto del cambio de metadatos de cuenta o ejecución."]
], [
  "Que informações podem orientar a conclusão de texto de pull requests no GitHub.com?",
  ["Título e descrição do PR, títulos de commits e diffs parciais", "Apenas as configurações de compilação e implantação do repositório", "Apenas arquivos do primeiro commit do repositório", "Apenas a duração da última compilação bem-sucedida"],
  ["Essas são fontes documentadas para completar descrições.", "Configurações de compilação sozinhas omitem o contexto específico da mudança.", "O primeiro commit não descreve as mudanças atuais.", "A duração da compilação por si só não descreve a mudança."],
  "Entradas para completar pull requests",
  ["Quais entradas descrevem o que o pull request muda?", "Diferencie contexto da mudança de metadados de conta ou execução."]
]);
add(124, [
  "¿Cómo afecta el historial de conversación a una solicitud de chat de Copilot?",
  ["Vuelve a entrenar permanentemente el modelo tras cada mensaje", "Puede contextualizar solicitudes de seguimiento", "Reemplaza la necesidad de identificar archivos relevantes", "Garantiza acceso a todas las sesiones anteriores"],
  ["Usar historial como contexto no es entrenar el modelo.", "Las superficies conversacionales usan historial para contextualizar respuestas.", "El historial puede no contener el código relevante.", "El historial de una conversación no garantiza acceso a todas las sesiones."],
  "Historial de conversación",
  ["Piensa en pronombres y referencias de preguntas de seguimiento.", "Distingue contexto de conversación de conocimiento permanente del modelo."]
], [
  "Como o histórico da conversa afeta uma solicitação de chat do Copilot?",
  ["Treina novamente o modelo de forma permanente após cada mensagem", "Pode contextualizar solicitações de acompanhamento", "Substitui a necessidade de identificar arquivos relevantes", "Garante acesso a todas as sessões anteriores"],
  ["Usar histórico como contexto não é treinar o modelo.", "Superfícies conversacionais usam histórico para contextualizar respostas.", "O histórico pode não conter o código relevante.", "O histórico de uma conversa não garante acesso a todas as sessões."],
  "Histórico de conversa",
  ["Pense em pronomes e referências nas perguntas de acompanhamento.", "Diferencie contexto da conversa de conhecimento permanente do modelo."]
]);
add(125, [
  "¿Qué ejemplo es una alucinación de un LLM?",
  ["Devolver un método real de API documentado en la referencia aportada", "Informar del error de compilación mostrado en un resultado de herramienta", "Resumir una rama visible en el código suministrado", "Inventar un método de API plausible que no existe"],
  ["Una referencia de API respaldada no es una invención.", "Informar con precisión de un resultado observado no es fabricar.", "Un resumen fiel del código suministrado está fundamentado.", "La información plausible pero inventada es una alucinación."],
  "Alucinaciones",
  ["Separa un error factual de un mensaje de error observado.", "¿La afirmación tiene respaldo en el código o la documentación?"]
], [
  "Qual exemplo é uma alucinação de um LLM?",
  ["Retornar um método real de API documentado na referência fornecida", "Relatar o erro de compilação exibido no resultado de uma ferramenta", "Resumir um ramo visível no código fornecido", "Inventar um método de API plausível que não existe"],
  ["Uma referência de API respaldada não é uma invenção.", "Relatar com precisão um resultado observado não é fabricar.", "Um resumo fiel do código fornecido é fundamentado.", "Informação plausível, mas inventada, é uma alucinação."],
  "Alucinações",
  ["Separe um erro factual de uma mensagem de erro observada.", "A afirmação tem respaldo no código ou na documentação?"]
]);
add(126, [
  "¿Qué factores son relevantes al elegir un modelo de Copilot para una tarea?",
  ["Solo la popularidad del modelo y lo reciente de su lanzamiento", "Solo la mayor ventana de contexto anunciada", "Capacidad para la tarea, latencia y coste de uso", "Solo la respuesta generada más larga"],
  ["La popularidad y la novedad por sí solas no establecen idoneidad para la tarea.", "La capacidad de contexto importa, pero no recoge todos los equilibrios.", "Los modelos difieren en fortalezas, latencia y coste de uso.", "La longitud de respuesta no mide idoneidad para la tarea."],
  "Equilibrios en la selección de modelos",
  ["Una completación rápida y una investigación compleja exigen cosas distintas.", "Compara requisitos de la tarea con características del modelo."]
], [
  "Quais fatores são relevantes ao escolher um modelo do Copilot para uma tarefa?",
  ["Apenas a popularidade do modelo e quão recente é o lançamento", "Apenas a maior janela de contexto anunciada", "Capacidade para a tarefa, latência e custo de uso", "Apenas a resposta gerada mais longa"],
  ["Popularidade e novidade sozinhas não estabelecem adequação à tarefa.", "A capacidade de contexto importa, mas não abrange todas as compensações.", "Modelos diferem em pontos fortes, latência e custo de uso.", "O tamanho da resposta não mede adequação à tarefa."],
  "Compensações na seleção de modelos",
  ["Uma conclusão rápida e uma investigação complexa têm exigências distintas.", "Compare requisitos da tarefa com características do modelo."]
]);
add(127, [
  "¿Por qué puede variar la calidad de las sugerencias en línea de Copilot entre lenguajes?",
  ["Representación desigual en los datos de entrenamiento", "Todos los lenguajes tienen un corpus de entrenamiento idéntico", "La fuente del editor determina la comprensión del lenguaje", "Los nombres de repositorios públicos determinan la validez sintáctica"],
  ["La ficha de aplicación identifica la representación en datos de entrenamiento como un factor.", "La representación en el entrenamiento no es idéntica en todos los lenguajes.", "La fuente tipográfica no determina la compatibilidad aprendida.", "Los nombres de repositorios no establecen la corrección sintáctica."],
  "Limitaciones de cobertura de lenguajes",
  ["Considera cómo obtiene un modelo ejemplos de uso de un lenguaje.", "¿Admitir muchos lenguajes implica rendir igual en cada uno?"]
], [
  "Por que a qualidade das sugestões em linha do Copilot pode variar entre linguagens?",
  ["Representação desigual nos dados de treinamento", "Todas as linguagens têm um corpus de treinamento idêntico", "A fonte do editor determina a compreensão da linguagem", "Os nomes de repositórios públicos determinam a validade sintática"],
  ["O cartão de aplicação identifica a representação nos dados de treinamento como um fator.", "A representação no treinamento não é idêntica em todas as linguagens.", "A fonte tipográfica não determina o suporte aprendido.", "Nomes de repositórios não estabelecem correção sintática."],
  "Limitações de cobertura de linguagens",
  ["Considere como um modelo obtém exemplos de uso de uma linguagem.", "Suportar muitas linguagens implica ter desempenho igual em cada uma?"]
]);
add(128, [
  "Copilot recibe una guía de API obsoleta como contexto. ¿Qué riesgo introduce?",
  ["La guía actualiza automáticamente la dependencia instalada", "La respuesta puede reflejar un comportamiento obsoleto de la API", "El modelo debe negarse a generar cualquier respuesta", "La guía cambia los permisos de acceso del repositorio"],
  ["Aportar texto no actualiza paquetes instalados.", "El contexto incorrecto o antiguo puede desorientar la generación.", "El contexto obsoleto no garantiza una negativa.", "El texto de documentación no cambia autorizaciones."],
  "Vigencia del contexto",
  ["La información aparentemente relevante puede estar desactualizada.", "¿Qué versión describe la evidencia suministrada?"]
], [
  "O Copilot recebe um guia de API obsoleto como contexto. Que risco isso introduz?",
  ["O guia atualiza automaticamente a dependência instalada", "A resposta pode refletir um comportamento obsoleto da API", "O modelo deve recusar a geração de qualquer resposta", "O guia muda as permissões de acesso do repositório"],
  ["Fornecer texto não atualiza pacotes instalados.", "Contexto incorreto ou antigo pode desorientar a geração.", "Contexto obsoleto não garante uma recusa.", "Texto de documentação não muda autorizações."],
  "Atualidade do contexto",
  ["Informações aparentemente relevantes ainda podem estar desatualizadas.", "Que versão a evidência fornecida descreve?"]
]);
add(129, [
  "¿Qué implica el comportamiento no determinista de Copilot?",
  ["Cada respuesta debe diferir de todas las anteriores", "Las instrucciones no influyen en las respuestas", "Un prompt más largo garantiza resultados idénticos", "Las solicitudes repetidas pueden producir respuestas distintas"],
  ["El no determinismo permite variación; no exige unicidad.", "Las instrucciones siguen orientando la generación.", "La longitud del prompt no garantiza reproducibilidad.", "GitHub advierte que las instrucciones pueden no seguirse de forma idéntica cada vez."],
  "Generación no determinista",
  ["Distingue variación posible de variación obligatoria.", "¿Una respuesta correcta hoy certificaría todas las respuestas futuras?"]
], [
  "O que o comportamento não determinístico do Copilot implica?",
  ["Toda resposta deve diferir de todas as anteriores", "Instruções não influenciam as respostas", "Um prompt mais longo garante resultados idênticos", "Solicitações repetidas podem produzir respostas diferentes"],
  ["O não determinismo permite variação; não exige resultados únicos.", "Instruções continuam orientando a geração.", "O tamanho do prompt não garante reprodutibilidade.", "O GitHub alerta que instruções podem não ser seguidas de forma idêntica a cada vez."],
  "Geração não determinística",
  ["Diferencie variação possível de variação obrigatória.", "Uma resposta correta hoje certificaria todas as respostas futuras?"]
]);
add(130, [
  "En un repositorio indexado cubierto por una política de exclusión de contenido, ¿cuándo se filtran los datos para Copilot Chat?",
  ["Solo después de mostrar la respuesta", "Solo al crear un commit de Git", "Antes de pasar los datos a Copilot Chat", "Solo después de que el usuario copie la respuesta"],
  ["Filtrar después de mostrar no impediría usar el contenido como contexto.", "Crear un commit no es el límite de filtrado documentado.", "La documentación de indexación indica que el filtrado por políticas precede al envío a Chat.", "Copiar una respuesta no está relacionado con filtrar contexto."],
  "Exclusiones en el flujo de recuperación",
  ["Sigue los datos recuperados hacia el modelo.", "¿En qué límite debe afectar una exclusión al contexto?"]
], [
  "Em um repositório indexado coberto por uma política de exclusão de conteúdo, quando os dados são filtrados para o Copilot Chat?",
  ["Somente depois de exibir a resposta", "Somente ao criar um commit do Git", "Antes de passar os dados para o Copilot Chat", "Somente depois que o usuário copia a resposta"],
  ["Filtrar após a exibição não impediria o uso do conteúdo como contexto.", "Criar um commit não é o limite de filtragem documentado.", "A documentação de indexação informa que a filtragem por políticas precede o envio ao Chat.", "Copiar uma resposta não está relacionado à filtragem de contexto."],
  "Exclusões no fluxo de recuperação",
  ["Siga os dados recuperados em direção ao modelo.", "Em que limite uma exclusão precisa afetar o contexto?"]
]);
add(131, [
  "¿Qué datos de Copilot son telemetría de uso y no contenido de código fuente?",
  ["Conteos de usuarios activos y sugerencias aceptadas", "El cuerpo de una función generada", "Un archivo fuente adjunto a una solicitud", "Un fragmento de código recuperado para una respuesta"],
  ["Estos conteos describen el uso de funciones.", "El cuerpo de una función es contenido generado.", "Un archivo fuente adjunto es contexto de la solicitud.", "Un fragmento recuperado es contenido contextual."],
  "Contenido y telemetría de uso",
  ["Separa lo que dice el código de cómo se usa una función.", "¿Qué datos describen actividad y no una implementación?"]
], [
  "Quais dados do Copilot são telemetria de uso, e não conteúdo de código-fonte?",
  ["Contagens de usuários ativos e sugestões aceitas", "O corpo de uma função gerada", "Um arquivo-fonte anexado a uma solicitação", "Um trecho de código recuperado para uma resposta"],
  ["Essas contagens descrevem o uso de funções.", "O corpo de uma função é conteúdo gerado.", "Um arquivo-fonte anexado é contexto da solicitação.", "Um trecho recuperado é conteúdo contextual."],
  "Conteúdo e telemetria de uso",
  ["Separe o que o código diz de como uma função é usada.", "Quais dados descrevem atividade, e não uma implementação?"]
]);
add(132, [
  "¿Qué distingue el resultado de ejecución de una herramienta de un agente de una afirmación generada ordinaria?",
  ["El resultado siempre demuestra que toda la tarea es correcta", "Registra la salida observada de una operación", "El resultado actualiza permanentemente los pesos del modelo", "El resultado concede permiso para todas las operaciones posteriores"],
  ["Un resultado individual tiene alcance limitado.", "Las salidas de herramientas aportan evidencia de ejecución más allá del texto generado.", "La ejecución no implica volver a entrenar el modelo.", "Una operación no autoriza acciones posteriores no relacionadas."],
  "Respuestas del modelo y ejecución de herramientas",
  ["Compara decir que una acción ocurrió con observar su salida.", "¿Qué evidencia proviene del entorno y no de la generación de lenguaje?"]
], [
  "O que distingue o resultado de execução de uma ferramenta de um agente de uma afirmação gerada comum?",
  ["O resultado sempre comprova que toda a tarefa está correta", "Registra a saída observada de uma operação", "O resultado atualiza permanentemente os pesos do modelo", "O resultado concede permissão para todas as operações posteriores"],
  ["Um resultado individual tem escopo limitado.", "Saídas de ferramentas fornecem evidência de execução além do texto gerado.", "Execução não implica treinar novamente o modelo.", "Uma operação não autoriza ações posteriores não relacionadas."],
  "Respostas do modelo e execução de ferramentas",
  ["Compare dizer que uma ação aconteceu com observar sua saída.", "Que evidência vem do ambiente, e não da geração de linguagem?"]
]);
add(133, [
  "¿Cómo puede influir un comentario de código en una sugerencia en línea?",
  ["Se convierte automáticamente en un requisito impuesto por el compilador", "Reemplaza todo el contexto del código circundante", "Cambia directamente los pesos del modelo base", "Puede describir el código deseado como parte del contexto del prompt"],
  ["Los comentarios no son requisitos impuestos por el compilador.", "Los comentarios complementan y no necesariamente reemplazan el resto del contexto.", "El contexto de una solicitud no cambia los pesos del modelo.", "La generación guiada por comentarios es una capacidad en línea documentada."],
  "Comentarios como entrada del prompt",
  ["La intención en lenguaje natural puede aparecer dentro de un archivo fuente.", "Distingue orientación contextual de imposición ejecutable."]
], [
  "Como um comentário de código pode influenciar uma sugestão em linha?",
  ["Ele se torna automaticamente um requisito imposto pelo compilador", "Ele substitui todo o contexto do código ao redor", "Ele muda diretamente os pesos do modelo base", "Ele pode descrever o código desejado como parte do contexto do prompt"],
  ["Comentários não são requisitos impostos pelo compilador.", "Comentários complementam, e não necessariamente substituem, o restante do contexto.", "O contexto de uma solicitação não muda os pesos do modelo.", "A geração orientada por comentários é uma capacidade em linha documentada."],
  "Comentários como entrada do prompt",
  ["A intenção em linguagem natural pode aparecer dentro de um arquivo-fonte.", "Diferencie orientação contextual de imposição executável."]
]);
add(134, [
  "¿Qué afirmación sobre los modelos de Copilot respalda la documentación actual?",
  ["Todas las superficies usan permanentemente el modelo Codex original", "Todas las funciones usan el mismo modelo con la misma configuración", "Los modelos varían según la tarea y la experiencia", "Seleccionar un modelo verifica formalmente su código generado"],
  ["El origen histórico no define todos los modelos actuales.", "La ficha de aplicación distingue modelos y experiencias.", "La documentación actual describe varios modelos y enlaza detalles específicos.", "Seleccionar un modelo no aporta una demostración de corrección."],
  "Variación de modelos y superficies",
  ["Separa la implementación inicial de un producto de sus capacidades actuales.", "¿Un solo nombre histórico de modelo describiría todas las superficies hoy?"]
], [
  "Qual afirmação sobre os modelos do Copilot é respaldada pela documentação atual?",
  ["Todas as superfícies usam permanentemente o modelo Codex original", "Todas as funções usam o mesmo modelo com a mesma configuração", "Os modelos variam conforme a tarefa e a experiência", "Selecionar um modelo verifica formalmente seu código gerado"],
  ["A origem histórica não define todos os modelos atuais.", "O cartão de aplicação distingue modelos e experiências.", "A documentação atual descreve vários modelos e vincula detalhes específicos.", "Selecionar um modelo não fornece uma prova de correção."],
  "Variação de modelos e superfícies",
  ["Separe a implementação inicial de um produto de suas capacidades atuais.", "Um único nome histórico de modelo descreveria todas as superfícies hoje?"]
]);
add(135, [
  "¿En qué se diferencian las conexiones MCP de las instrucciones personalizadas?",
  ["Las conexiones exponen herramientas o datos; las instrucciones aportan orientación", "Las conexiones definen estilo de código; las instrucciones autentican servicios", "Las conexiones entrenan pesos; las instrucciones crean índices de búsqueda", "Conexiones e instrucciones son nombres intercambiables de un archivo"],
  ["MCP complementa la orientación del prompt con capacidades externas.", "La orientación y la autenticación de servicios son mecanismos distintos.", "Ninguna descripción corresponde a estos mecanismos de personalización.", "Son mecanismos separados con funciones diferentes."],
  "Herramientas frente a orientación",
  ["Separa a qué puede acceder un asistente de cómo debería trabajar.", "¿Describir un servicio establece una conexión funcional con él?"]
], [
  "Como as conexões MCP diferem das instruções personalizadas?",
  ["Conexões expõem ferramentas ou dados; instruções fornecem orientação", "Conexões definem estilo de código; instruções autenticam serviços", "Conexões treinam pesos; instruções criam índices de pesquisa", "Conexões e instruções são nomes intercambiáveis de um arquivo"],
  ["MCP complementa a orientação do prompt com capacidades externas.", "Orientação e autenticação de serviços são mecanismos distintos.", "Nenhuma descrição corresponde a esses mecanismos de personalização.", "São mecanismos separados com funções diferentes."],
  "Ferramentas versus orientação",
  ["Separe o que um assistente pode acessar de como ele deve trabalhar.", "Descrever um serviço estabelece uma conexão funcional com ele?"]
]);
add(91, [
  "En el sitio web de GitHub, ¿qué comando de Copilot Chat inicia una conversación independiente?",
  ["/delete", "/clear", "/new", "/rename"],
  ["/delete elimina una conversación.", "/clear limpia la conversación, en lugar de ser el comando para una conversación independiente.", "/new inicia una conversación nueva en el sitio web.", "/rename cambia el nombre de la conversación."],
  "Comando de conversación del sitio web",
  ["Usa el significado del sitio web, no el de VS Code.", "Distingue crear una conversación de limpiar su contenido."]
], [
  "No site do GitHub, qual comando do Copilot Chat inicia uma conversa separada?",
  ["/delete", "/clear", "/new", "/rename"],
  ["/delete exclui uma conversa.", "/clear limpa a conversa, em vez de ser o comando para uma conversa separada.", "/new inicia uma conversa nova no site.", "/rename altera o nome da conversa."],
  "Comando de conversa do site",
  ["Use o significado do site, não o do VS Code.", "Diferencie criar uma conversa de limpar seu conteúdo."]
]);
add(92, [
  "¿Dónde pueden usar la revisión de código de Copilot los miembros sin licencia cuando están activadas las políticas necesarias de Business o Enterprise?",
  ["Selecciones del editor de VS Code", "Cambios locales de Visual Studio", "Cambios locales de JetBrains", "Pull requests de GitHub.com"],
  ["Esta política no concede revisión en el IDE sin licencia.", "El acceso sin licencia de esta política no está disponible en los IDE.", "La política del sitio web no concede revisión local en el IDE.", "La opción de acceso para miembros sin licencia admite revisiones en GitHub.com."],
  "Acceso condicional a revisión sin licencias",
  ["Distingue las políticas de acceso web de los derechos del IDE.", "Se supone que están activados el uso de pago y la política de acceso necesaria."]
], [
  "Onde membros sem licença podem usar a revisão de código do Copilot quando as políticas necessárias de Business ou Enterprise estão ativadas?",
  ["Seleções do editor do VS Code", "Alterações locais do Visual Studio", "Alterações locais do JetBrains", "Pull requests do GitHub.com"],
  ["Essa política não concede revisão no IDE sem licença.", "O acesso sem licença dessa política não está disponível nos IDEs.", "A política do site não concede revisão local no IDE.", "A opção de acesso para membros sem licença permite revisões no GitHub.com."],
  "Acesso condicional à revisão sem licenças",
  ["Diferencie políticas de acesso web de direitos do IDE.", "Pressupõe-se que o uso pago e a política de acesso necessária estejam ativados."]
]);
add(93, [
  "Sin permiso de escritura en un repositorio, ¿qué acceso tiene una sesión de Copilot en GitHub.com a ese repositorio?",
  ["Acceso de solo lectura", "Acceso de escritura heredado de Copilot", "Acceso administrativo durante la sesión", "Acceso de escritura al seleccionar otro modelo"],
  ["Las sesiones sin permiso de escritura en el repositorio son de solo lectura.", "Copilot no concede el permiso de escritura que falta.", "Iniciar una sesión no eleva privilegios del repositorio.", "Cambiar de modelo no cambia la autorización del repositorio."],
  "Autorización de repositorio para sesiones en la nube",
  ["Distingue el acceso a funciones de IA de los permisos del repositorio.", "Elegir un modelo no concede un rol de GitHub."]
], [
  "Sem permissão de escrita em um repositório, qual acesso uma sessão do Copilot no GitHub.com tem a esse repositório?",
  ["Acesso somente leitura", "Acesso de escrita herdado do Copilot", "Acesso administrativo durante a sessão", "Acesso de escrita após selecionar outro modelo"],
  ["Sessões sem permissão de escrita no repositório são somente leitura.", "O Copilot não concede a permissão de escrita ausente.", "Iniciar uma sessão não eleva privilégios do repositório.", "Trocar de modelo não altera a autorização do repositório."],
  "Autorização de repositório para sessões na nuvem",
  ["Diferencie acesso a recursos de IA de permissões do repositório.", "Escolher um modelo não concede uma função do GitHub."]
]);
add(94, [
  "¿Qué comando de Copilot Chat en Visual Studio se centra en el tiempo de ejecución del código seleccionado?",
  ["/explain", "/optimize", "/doc", "/tests"],
  ["/explain describe cómo funciona el código.", "/optimize analiza y mejora el tiempo de ejecución del código seleccionado.", "/doc añade comentarios de documentación.", "/tests genera pruebas unitarias."],
  "Comando de optimización en Visual Studio",
  ["Identifica el resultado solicitado, no el lenguaje de programación.", "Analizar rendimiento difiere de documentar y generar pruebas."]
], [
  "Qual comando do Copilot Chat no Visual Studio se concentra no tempo de execução do código selecionado?",
  ["/explain", "/optimize", "/doc", "/tests"],
  ["/explain descreve como o código funciona.", "/optimize analisa e melhora o tempo de execução do código selecionado.", "/doc adiciona comentários de documentação.", "/tests gera testes unitários."],
  "Comando de otimização no Visual Studio",
  ["Identifique o resultado solicitado, não a linguagem de programação.", "Analisar desempenho difere de documentar e gerar testes."]
]);
add(95, [
  "¿Qué política de organización debe permitir revisiones en GitHub.com para quienes reciben Copilot de esa organización? Usa las etiquetas de la interfaz en inglés.",
  ["Opt in to user feedback collection", "Copilot CLI", "Copilot code review", "MCP servers in Copilot"],
  ["La recopilación de comentarios no activa revisiones de código.", "La política CLI controla otro cliente.", "La política Copilot code review controla esta disponibilidad de revisión.", "La política MCP gobierna el uso compatible de MCP."],
  "Política de revisión de código de organización",
  ["Elige el control específico de la capacidad.", "Un cliente o una conexión operativos no implican acceso a revisión."]
], [
  "Qual política da organização deve permitir revisões no GitHub.com para quem recebe o Copilot dessa organização? Use os rótulos da interface em inglês.",
  ["Opt in to user feedback collection", "Copilot CLI", "Copilot code review", "MCP servers in Copilot"],
  ["A coleta de feedback não ativa revisões de código.", "A política CLI controla outro cliente.", "A política Copilot code review controla essa disponibilidade de revisão.", "A política MCP governa o uso compatível de MCP."],
  "Política de revisão de código da organização",
  ["Escolha o controle específico da capacidade.", "Um cliente ou uma conexão funcionando não implica acesso à revisão."]
]);
add(96, [
  "¿Dónde se aplican las instrucciones personales de Copilot configuradas en GitHub.com?",
  ["Todas las sesiones locales de CLI automáticamente", "Las conversaciones de todos los miembros de la organización", "El IDE de cada colaborador del repositorio", "Copilot Chat en GitHub"],
  ["Las instrucciones personales de CLI usan archivos locales.", "Las instrucciones personales no son instrucciones para toda la organización.", "No configuran los IDE de otros colaboradores.", "Las instrucciones personales del sitio se aplican a tus conversaciones de Copilot Chat en GitHub."],
  "Alcance de instrucciones personales",
  ["Distingue al propietario de la preferencia de la superficie compatible.", "Las instrucciones personales y de organización tienen alcances distintos."]
], [
  "Onde se aplicam as instruções pessoais do Copilot configuradas no GitHub.com?",
  ["Todas as sessões locais da CLI automaticamente", "As conversas de todos os membros da organização", "O IDE de cada colaborador do repositório", "Copilot Chat no GitHub"],
  ["Instruções pessoais da CLI usam arquivos locais.", "Instruções pessoais não são instruções para toda a organização.", "Elas não configuram os IDEs de outros colaboradores.", "As instruções pessoais do site se aplicam às suas conversas do Copilot Chat no GitHub."],
  "Escopo de instruções pessoais",
  ["Diferencie o proprietário da preferência da superfície compatível.", "Instruções pessoais e de organização têm escopos diferentes."]
]);
add(97, [
  "¿Qué par de IDE admite el modo de edición de Copilot según la matriz pública de funciones?",
  ["VS Code y JetBrains", "Visual Studio y Eclipse", "Xcode y NeoVim", "Visual Studio y Xcode"],
  ["La matriz indica modo de edición para VS Code y JetBrains.", "Ni Visual Studio ni Eclipse figuran con soporte para modo de edición.", "Ni Xcode ni NeoVim figuran con soporte para modo de edición.", "Ni Visual Studio ni Xcode figuran con soporte para modo de edición."],
  "Compatibilidad de clientes con Copilot Edits",
  ["Admitir chat no implica admitir todos los flujos de edición.", "Consulta la fila de la función específica, no la disponibilidad general de Copilot."]
], [
  "Qual par de IDEs oferece o modo de edição do Copilot segundo a matriz pública de recursos?",
  ["VS Code e JetBrains", "Visual Studio e Eclipse", "Xcode e NeoVim", "Visual Studio e Xcode"],
  ["A matriz indica modo de edição para VS Code e JetBrains.", "Nem Visual Studio nem Eclipse aparecem com suporte ao modo de edição.", "Nem Xcode nem NeoVim aparecem com suporte ao modo de edição.", "Nem Visual Studio nem Xcode aparecem com suporte ao modo de edição."],
  "Compatibilidade de clientes com Copilot Edits",
  ["Oferecer chat não implica oferecer todos os fluxos de edição.", "Consulte a linha do recurso específico, não a disponibilidade geral do Copilot."]
]);
add(98, [
  "¿Qué alcance de repositorio corresponde a una tarea de Copilot que se ejecuta en GitHub Actions?",
  ["Los cambios se limitan a repositorios públicos", "Los cambios quedan en el repositorio seleccionado", "Los cambios pueden abarcar todos los repositorios de la organización", "Los cambios pueden abarcar repositorios en cualquier alojamiento Git"],
  ["La restricción trata del alcance del repositorio, no de su visibilidad pública.", "Las tareas basadas en Actions solo pueden cambiar el repositorio seleccionado.", "Los cambios en varios repositorios se admiten en sandboxes de nube, no en este entorno.", "El flujo de Actions no concede edición entre alojamientos."],
  "Alcance de repositorio según el entorno",
  ["No generalices los límites de un entorno a todas las sesiones en la nube.", "Distingue la ejecución en GitHub Actions de los sandboxes de nube."]
], [
  "Qual escopo de repositório se aplica a uma tarefa do Copilot executada no GitHub Actions?",
  ["As alterações se limitam a repositórios públicos", "As alterações ficam no repositório selecionado", "As alterações podem abranger todos os repositórios da organização", "As alterações podem abranger repositórios em qualquer hospedagem Git"],
  ["A restrição trata do escopo do repositório, não da visibilidade pública.", "Tarefas baseadas em Actions só podem alterar o repositório selecionado.", "Alterações em vários repositórios são compatíveis com sandboxes de nuvem, não com esse ambiente.", "O fluxo do Actions não concede edição entre hospedagens."],
  "Escopo de repositório por ambiente",
  ["Não generalize os limites de um ambiente para todas as sessões na nuvem.", "Diferencie a execução no GitHub Actions dos sandboxes de nuvem."]
]);
add(99, [
  "Una sesión local de Copilot CLI se controla remotamente desde GitHub.com. ¿Dónde sigue ejecutándose?",
  ["En la pestaña del navegador que la controla", "En un ejecutor de GitHub Actions", "En la máquina local original", "En un sandbox de nube recién creado"],
  ["El navegador dirige la sesión, pero no ejecuta sus herramientas.", "El control remoto no convierte la sesión en un trabajo de Actions.", "El control remoto mantiene la ejecución en la máquina original, que debe seguir conectada.", "El control remoto no migra automáticamente la ejecución a un sandbox."],
  "Control remoto frente a host de ejecución",
  ["Cambiar la superficie de control no necesariamente mueve el cómputo.", "Piensa qué máquina debe permanecer conectada."]
], [
  "Uma sessão local do Copilot CLI é controlada remotamente pelo GitHub.com. Onde ela continua sendo executada?",
  ["Na aba do navegador que a controla", "Em um executor do GitHub Actions", "Na máquina local original", "Em um sandbox de nuvem recém-criado"],
  ["O navegador orienta a sessão, mas não executa suas ferramentas.", "O controle remoto não transforma a sessão em um trabalho do Actions.", "O controle remoto mantém a execução na máquina original, que deve continuar online.", "O controle remoto não migra automaticamente a execução para um sandbox."],
  "Controle remoto versus host de execução",
  ["Mudar a superfície de controle não necessariamente move a computação.", "Considere qual máquina precisa permanecer online."]
]);
add(100, [
  "¿Qué comando de Copilot Chat en Visual Studio añade un comentario de documentación para un símbolo?",
  ["/explain", "/optimize", "/tests", "/doc"],
  ["/explain proporciona una explicación en lugar de añadir ese comentario.", "/optimize se centra en el tiempo de ejecución.", "/tests genera pruebas unitarias.", "/doc añade un comentario de documentación para el símbolo."],
  "Comando de documentación en Visual Studio",
  ["La documentación insertada en el código difiere de una explicación conversacional.", "Usa los comandos del IDE indicado."]
], [
  "Qual comando do Copilot Chat no Visual Studio adiciona um comentário de documentação para um símbolo?",
  ["/explain", "/optimize", "/tests", "/doc"],
  ["/explain fornece uma explicação em vez de adicionar esse comentário.", "/optimize se concentra no tempo de execução.", "/tests gera testes unitários.", "/doc adiciona um comentário de documentação para o símbolo."],
  "Comando de documentação no Visual Studio",
  ["A documentação inserida no código difere de uma explicação conversacional.", "Use os comandos do IDE indicado."]
]);
add(101, [
  "¿Qué comando de Copilot Chat en VS Code solicita pruebas unitarias para la función seleccionada?",
  ["/tests", "/fixTestFailure", "/explain", "/help"],
  ["/tests genera pruebas unitarias para el código seleccionado.", "/fixTestFailure se centra en una prueba existente que falla.", "/explain describe cómo funciona el código.", "/help muestra conceptos básicos de uso de Copilot."],
  "Comando de generación de pruebas unitarias en VS Code",
  ["Crear pruebas es distinto de diagnosticar un fallo existente.", "La función seleccionada proporciona el contexto de destino."]
], [
  "Qual comando do Copilot Chat no VS Code solicita testes unitários para a função selecionada?",
  ["/tests", "/fixTestFailure", "/explain", "/help"],
  ["/tests gera testes unitários para o código selecionado.", "/fixTestFailure se concentra em um teste existente com falha.", "/explain descreve como o código funciona.", "/help exibe noções básicas de uso do Copilot."],
  "Comando de geração de testes unitários no VS Code",
  ["Criar testes é diferente de diagnosticar uma falha existente.", "A função selecionada fornece o contexto de destino."]
]);
add(102, [
  "¿Quién puede desactivar Copilot en la nube para un repositorio sin desactivar otros repositorios?",
  ["Cualquier revisor de pull requests", "Administradores del repositorio", "Cualquier lector del repositorio", "Cualquier suscriptor de Copilot Pro"],
  ["Ser revisor no concede por sí mismo este control administrativo.", "Los propietarios y administradores pueden desactivarlo para ese repositorio.", "El acceso de lectura por sí solo no permite administrarlo.", "Una suscripción personal no concede derechos administrativos del repositorio."],
  "Control de acceso a la nube por repositorio",
  ["Relaciona el alcance del control con los permisos del actor.", "Tener acceso a Copilot no equivale a ser administrador del repositorio."]
], [
  "Quem pode desativar o Copilot na nuvem para um repositório sem desativar outros repositórios?",
  ["Qualquer revisor de pull requests", "Administradores do repositório", "Qualquer leitor do repositório", "Qualquer assinante do Copilot Pro"],
  ["Ser revisor não concede por si só esse controle administrativo.", "Proprietários e administradores podem desativá-lo para esse repositório.", "Acesso de leitura por si só não permite administrá-lo.", "Uma assinatura pessoal não concede direitos administrativos do repositório."],
  "Controle de acesso à nuvem por repositório",
  ["Relacione o escopo do controle às permissões do ator.", "Ter acesso ao Copilot não equivale a ser administrador do repositório."]
]);
add(103, [
  "¿Qué principio se ve más directamente afectado si una función asistida por IA funciona con mouse, pero impide completar la tarea a quienes usan lectores de pantalla?",
  ["Transparencia", "Confiabilidad", "Rendición de cuentas", "Inclusión"],
  ["La transparencia comunica capacidades y límites.", "La confiabilidad trata de la operación consistente, no de si las personas pueden acceder a la función.", "La rendición de cuentas trata de la responsabilidad por decisiones y resultados.", "La inclusión requiere considerar distintas capacidades y necesidades de acceso."],
  "Acceso inclusivo",
  ["¿Qué usuarios no pueden completar la misma tarea?", "¿La barrera se relaciona con divulgación, operación confiable o acceso?"]
], [
  "Qual princípio é mais diretamente afetado quando um recurso assistido por IA funciona com mouse, mas impede usuários de leitor de tela de concluir a tarefa?",
  ["Transparência", "Confiabilidade", "Responsabilização", "Inclusão"],
  ["Transparência comunica recursos e limites.", "Confiabilidade trata da operação consistente, não de os usuários conseguirem acessar o recurso.", "Responsabilização trata da responsabilidade por decisões e resultados.", "Inclusão exige considerar diferentes habilidades e necessidades de acesso."],
  "Acesso inclusivo",
  ["Quais usuários não conseguem concluir a mesma tarefa?", "A barreira se relaciona a divulgação, operação confiável ou acesso?"]
]);
add(104, [
  "¿Qué ruta sigue la convención predeterminada de archivos de prompts del repositorio?",
  [".github/agents/review.agent.md", ".github/copilot-instructions.md", ".github/prompts/review.prompt.md", ".github/instructions/review.instructions.md"],
  ["Esta ruta define un agente personalizado.", "Este archivo proporciona instrucciones para todo el repositorio.", "Los archivos de prompts suelen usar .github/prompts y la extensión .prompt.md.", "Esta ruta guarda instrucciones específicas de ruta."],
  "Ruta y extensión de archivos de prompts",
  ["El directorio y la extensión identifican el tipo de personalización.", "Distingue una tarea reutilizable de la orientación aplicada automáticamente."]
], [
  "Qual caminho segue a convenção padrão de arquivos de prompts do repositório?",
  [".github/agents/review.agent.md", ".github/copilot-instructions.md", ".github/prompts/review.prompt.md", ".github/instructions/review.instructions.md"],
  ["Esse caminho define um agente personalizado.", "Esse arquivo fornece instruções para todo o repositório.", "Arquivos de prompts normalmente usam .github/prompts e a extensão .prompt.md.", "Esse caminho armazena instruções específicas de caminho."],
  "Caminho e extensão de arquivos de prompts",
  ["O diretório e a extensão identificam o tipo de personalização.", "Diferencie uma tarefa reutilizável de orientações aplicadas automaticamente."]
]);
add(105, [
  "¿Qué término de búsqueda del registro de auditoría empresarial filtra eventos relacionados con el plan de Copilot?",
  ["actor:Copilot", "action:repo", "actor:github-actions", "action:copilot"],
  ["actor:Copilot se centra en actividad del agente.", "action:repo se centra en eventos de repositorio, no del plan de Copilot.", "actor:github-actions filtra por otro actor.", "action:copilot filtra eventos del plan, incluidos cambios de licencias y políticas."],
  "Búsqueda de auditoría de Copilot",
  ["La categoría del evento y el actor son filtros distintos.", "El objetivo es administrar el plan, no la actividad del agente."]
], [
  "Qual termo de pesquisa do log de auditoria empresarial filtra eventos relacionados ao plano do Copilot?",
  ["actor:Copilot", "action:repo", "actor:github-actions", "action:copilot"],
  ["actor:Copilot se concentra na atividade do agente.", "action:repo se concentra em eventos do repositório, não do plano do Copilot.", "actor:github-actions filtra por outro ator.", "action:copilot filtra eventos do plano, incluindo alterações de licenças e políticas."],
  "Pesquisa de auditoria do Copilot",
  ["A categoria do evento e o ator são filtros diferentes.", "O objetivo é administrar o plano, não a atividade do agente."]
]);
add(106, [
  "Cuando delegas una incidencia a Copilot en GitHub.com, ¿cómo se usan las herramientas MCP configuradas?",
  ["Autónomamente, sin aprobación por llamada", "Solo tras aprobar cada llamada en el chat", "Solo mientras siga abierto un IDE local", "Solo si las herramientas generan archivos de texto"],
  ["El trabajo delegado mediante una incidencia puede llamar a herramientas MCP configuradas sin preguntar primero.", "Este flujo delegado no requiere aprobación de cada llamada.", "La tarea delegada no depende de mantener abierto un IDE local.", "Las herramientas configuradas no se limitan a generar archivos de texto."],
  "Aprobación de MCP en trabajo delegado",
  ["El comportamiento de aprobación depende del flujo, no solo del protocolo.", "Piensa por qué hay que revisar servidores y herramientas antes de delegar."]
], [
  "Quando você delega um problema ao Copilot no GitHub.com, como as ferramentas MCP configuradas são usadas?",
  ["Autonomamente, sem aprovação por chamada", "Somente após aprovar cada chamada no chat", "Somente enquanto um IDE local estiver aberto", "Somente se as ferramentas gerarem arquivos de texto"],
  ["O trabalho delegado por um problema pode chamar ferramentas MCP configuradas sem perguntar antes.", "Esse fluxo delegado não exige aprovação de cada chamada.", "A tarefa delegada não depende de manter um IDE local aberto.", "As ferramentas configuradas não se limitam a gerar arquivos de texto."],
  "Aprovação de MCP em trabalho delegado",
  ["O comportamento de aprovação depende do fluxo, não apenas do protocolo.", "Considere por que servidores e ferramentas precisam ser revisados antes da delegação."]
]);
add(107, [
  "¿Qué es un modelo de lenguaje grande utilizado por Copilot?",
  ["Una base de datos de pares exactos de pregunta y respuesta", "Una red neuronal entrenada para texto y código", "Un compilador que demuestra el comportamiento de programas", "Un índice de búsqueda del espacio de trabajo actual"],
  ["La generación no es una búsqueda de respuestas exactas.", "Un LLM aprende patrones de grandes cantidades de datos de entrenamiento.", "Compilar y demostrar son tareas distintas.", "Un índice del espacio de trabajo facilita la recuperación, no la generación del modelo."],
  "Modelos de lenguaje grandes",
  ["Distingue un modelo aprendido de un almacén de documentos.", "¿Qué puede generar una respuesta en vez de solo localizarla?"]
], [
  "O que é um modelo de linguagem grande usado pelo Copilot?",
  ["Um banco de dados de pares exatos de pergunta e resposta", "Uma rede neural treinada para texto e código", "Um compilador que comprova o comportamento de programas", "Um índice de pesquisa do workspace atual"],
  ["A geração não é uma busca de respostas exatas.", "Um LLM aprende padrões com grandes quantidades de dados de treinamento.", "Compilar e comprovar são tarefas distintas.", "Um índice do workspace auxilia a recuperação, não a geração do modelo."],
  "Modelos de linguagem grandes",
  ["Diferencie um modelo aprendido de um repositório de documentos.", "O que pode gerar uma resposta em vez de apenas localizá-la?"]
]);
add(108, [
  "¿Qué es un token en el procesamiento de modelos de lenguaje?",
  ["Un archivo de código completo", "Una credencial de autenticación de API", "Una prueba unitaria", "Una unidad de texto procesada por el modelo"],
  ["Un archivo suele contener muchos tokens.", "Un token de autenticación tiene otro significado.", "Las pruebas no son las unidades de texto del modelo.", "El texto se divide en tokens, que no tienen que ser palabras completas."],
  "Tokens",
  ["La misma palabra tiene significados distintos en seguridad y modelado del lenguaje.", "Considera cómo se divide el texto para que el modelo lo procese."]
], [
  "O que é um token no processamento de modelos de linguagem?",
  ["Um arquivo de código completo", "Uma credencial de autenticação de API", "Um teste de unidade", "Uma unidade de texto processada pelo modelo"],
  ["Um arquivo geralmente contém muitos tokens.", "Um token de autenticação tem outro significado.", "Testes não são as unidades de texto do modelo.", "O texto é dividido em tokens, que não precisam ser palavras inteiras."],
  "Tokens",
  ["A mesma palavra tem significados diferentes em segurança e modelagem de linguagem.", "Considere como o texto é dividido para o processamento pelo modelo."]
]);
add(109, [
  "¿Qué secuencia describe una sugerencia en línea del IDE a alto nivel?",
  ["Reunir contexto, generar salida, mostrar una sugerencia", "Generar una respuesta, recopilar contexto, crear un prompt", "Presentar una sugerencia, entrenar un modelo, recopilar contexto", "Compilar el proyecto, demostrar su corrección, generar una respuesta"],
  ["El contexto se reúne antes de generar y presentar.", "El contexto debe informar la solicitud antes de la generación.", "La presentación no desencadena el entrenamiento del modelo base.", "La compilación y la demostración no son el flujo de generación documentado."],
  "Ciclo de una sugerencia",
  ["¿Qué información debe estar disponible antes de que una respuesta pueda usarla?", "Separa generar una sugerencia de aplicarla."]
], [
  "Qual sequência descreve uma sugestão em linha no IDE em alto nível?",
  ["Reunir contexto, gerar saída, exibir uma sugestão", "Gerar uma resposta, coletar contexto, criar um prompt", "Apresentar uma sugestão, treinar um modelo, coletar contexto", "Compilar o projeto, comprovar a correção, gerar uma resposta"],
  ["O contexto é reunido antes da geração e da apresentação.", "O contexto deve informar a solicitação antes da geração.", "A apresentação não inicia o treinamento do modelo base.", "Compilação e comprovação não são o fluxo de geração documentado."],
  "Ciclo de uma sugestão",
  ["Que informação precisa estar disponível antes de uma resposta poder usá-la?", "Separe gerar uma sugestão de aplicá-la."]
]);
add(110, [
  "¿Qué acción en el editor ayuda a aportar contexto a las completaciones en línea?",
  ["Abrir proyectos no relacionados", "Ocultar definiciones de tipos relevantes", "Abrir archivos fuente relevantes", "Eliminar ejemplos de patrones de código locales"],
  ["El código no relacionado puede añadir contexto irrelevante.", "Las definiciones relevantes ayudan a resolver el uso.", "Los archivos relevantes abiertos ayudan a Copilot a entender la solicitud.", "Quitar patrones útiles reduce la orientación contextual."],
  "Selección de contexto del editor",
  ["Piensa en la relevancia y no en el número de pestañas abiertas.", "¿Qué información ayudaría a otra persona a completar el código?"]
], [
  "Qual ação no editor ajuda a fornecer contexto para conclusões em linha?",
  ["Abrir projetos não relacionados", "Ocultar definições de tipos relevantes", "Abrir arquivos-fonte relevantes", "Remover exemplos de padrões locais de código"],
  ["Código não relacionado pode acrescentar contexto irrelevante.", "Definições relevantes ajudam a entender o uso.", "Arquivos relevantes abertos ajudam o Copilot a entender a solicitação.", "Remover padrões úteis reduz a orientação contextual."],
  "Seleção de contexto do editor",
  ["Pense na relevância, não no número de abas abertas.", "Que informação ajudaria outra pessoa a completar o código?"]
]);
add(66, [
  "¿Dónde ejecuta Copilot una tarea asignada a un entorno de desarrollo en la nube?",
  ["En los hooks locales de Git del revisor", "En el entorno de nube seleccionado", "En el entorno de ejecución JavaScript del navegador", "En el proceso del editor local del mantenedor"],
  ["Los hooks del revisor no son el entorno de ejecución del agente.", "Las tareas en la nube se ejecutan en el entorno de desarrollo remoto seleccionado.", "El navegador es un cliente, no el entorno de desarrollo.", "La ejecución en la nube no requiere el proceso del editor del mantenedor."],
  "Ubicación de ejecución en la nube",
  ["Distingue la interfaz para enviar una solicitud del cómputo que la ejecuta.", "El cliente de sesión y el entorno de ejecución son distintos."]
], [
  "Onde o Copilot executa uma tarefa atribuída a um ambiente de desenvolvimento na nuvem?",
  ["Nos hooks locais do Git do revisor", "No ambiente de nuvem selecionado", "No ambiente JavaScript do navegador", "No processo do editor local do mantenedor"],
  ["Os hooks do revisor não são o ambiente de execução do agente.", "Tarefas na nuvem são executadas no ambiente de desenvolvimento remoto selecionado.", "O navegador é um cliente, não o ambiente de desenvolvimento.", "A execução na nuvem não exige o processo do editor do mantenedor."],
  "Local de execução na nuvem",
  ["Diferencie a interface para enviar uma solicitação da computação que a executa.", "O cliente da sessão e o ambiente de execução são diferentes."]
]);
add(67, [
  "Desde la página principal de una organización, ¿dónde administra su propietario las políticas de funciones de Copilot en la interfaz en inglés?",
  ["Settings → Actions → General", "Settings → Member privileges", "Settings → Copilot → Policies", "Settings → Copilot → Models"],
  ["La configuración de Actions gobierna flujos, no políticas de Copilot.", "Member privileges no es la página de políticas de Copilot.", "Policies contiene controles de funciones y privacidad de Copilot.", "Models controla la disponibilidad de modelos adicionales."],
  "Ruta de políticas de organización",
  ["Identifica el alcance administrativo y el tipo de control.", "La disponibilidad de funciones y de modelos tiene páginas separadas."]
], [
  "Na página principal de uma organização, onde seu proprietário gerencia políticas de recursos do Copilot na interface em inglês?",
  ["Settings → Actions → General", "Settings → Member privileges", "Settings → Copilot → Policies", "Settings → Copilot → Models"],
  ["As configurações de Actions governam fluxos, não políticas do Copilot.", "Member privileges não é a página de políticas do Copilot.", "Policies contém controles de recursos e privacidade do Copilot.", "Models controla a disponibilidade de modelos adicionais."],
  "Caminho de políticas da organização",
  ["Identifique o escopo administrativo e o tipo de controle.", "Disponibilidade de recursos e de modelos tem páginas separadas."]
]);
add(68, [
  "¿Qué función de Copilot redacta una descripción de los cambios de un pull request?",
  ["Revisión de código", "Sugerencias de siguiente edición", "Historial de sesiones del agente", "Resumen de pull request"],
  ["La revisión busca problemas y sugiere correcciones.", "Las sugerencias de siguiente edición ayudan a editar.", "El historial registra actividad del agente en lugar de redactar la descripción.", "Un resumen explica los cambios a los lectores."],
  "Resumen frente a revisión de PR",
  ["Describir cambios es distinto de evaluar su calidad.", "Elige el resultado destinado a la descripción del pull request."]
], [
  "Qual recurso do Copilot redige uma descrição das alterações de um pull request?",
  ["Revisão de código", "Sugestões de próxima edição", "Histórico de sessões do agente", "Resumo de pull request"],
  ["A revisão procura problemas e sugere correções.", "Sugestões de próxima edição auxiliam na edição.", "O histórico registra atividade do agente em vez de redigir a descrição.", "Um resumo explica as alterações aos leitores."],
  "Resumo versus revisão de PR",
  ["Descrever alterações é diferente de avaliar sua qualidade.", "Escolha o resultado destinado à descrição do pull request."]
]);
add(69, [
  "¿Qué página de configuración de la organización controla los modelos adicionales de Copilot? Usa las etiquetas de la interfaz en inglés.",
  ["Settings → Copilot → Models", "Settings → Copilot → Policies", "Settings → Actions → General", "Settings → Copilot → Access"],
  ["Models contiene las políticas de disponibilidad de modelos adicionales.", "Policies contiene controles de funciones y privacidad.", "La configuración de Actions no selecciona modelos de Copilot.", "Access trata de asignar acceso a Copilot, no de seleccionar modelos."],
  "Ruta de modelos de organización",
  ["La pregunta trata de disponibilidad de modelos, no de acceso general a funciones.", "Mantente dentro de la configuración de la organización."]
], [
  "Qual página de configurações da organização controla os modelos adicionais do Copilot? Use os rótulos da interface em inglês.",
  ["Settings → Copilot → Models", "Settings → Copilot → Policies", "Settings → Actions → General", "Settings → Copilot → Access"],
  ["Models contém políticas de disponibilidade de modelos adicionais.", "Policies contém controles de recursos e privacidade.", "As configurações de Actions não selecionam modelos do Copilot.", "Access trata de atribuir acesso ao Copilot, não de selecionar modelos."],
  "Caminho de modelos da organização",
  ["A pergunta trata de disponibilidade de modelos, não de acesso geral a recursos.", "Permaneça nas configurações da organização."]
]);
add(70, [
  "¿Qué orientación del repositorio, proporcionada automáticamente, puede definir convenciones de manejo de errores para la revisión de Copilot?",
  ["Una política de modelos de organización", "Instrucciones del repositorio", "Un archivo de prompts bajo demanda", "Solo un perfil de agente personalizado"],
  ["La política de modelos gobierna su disponibilidad, no las convenciones de manejo de errores.", "Las instrucciones del repositorio pueden orientar revisiones y programación.", "Un prompt se invoca para una interacción concreta, no se proporciona automáticamente a revisiones.", "La definición de un agente por sí sola no proporciona instrucciones del repositorio a la revisión."],
  "Personalización de revisiones",
  ["Piensa qué contenido del repositorio está destinado a orientar a Copilot.", "Los metadatos y las instrucciones de comportamiento tienen funciones distintas."]
], [
  "Quais orientações do repositório, fornecidas automaticamente, podem definir convenções de tratamento de erros para a revisão do Copilot?",
  ["Uma política de modelos da organização", "Instruções do repositório", "Um arquivo de prompts sob demanda", "Somente um perfil de agente personalizado"],
  ["A política de modelos governa sua disponibilidade, não convenções de tratamento de erros.", "As instruções do repositório podem orientar revisões e programação.", "Um prompt é invocado para uma interação específica, não fornecido automaticamente às revisões.", "A definição de um agente sozinha não fornece instruções do repositório à revisão."],
  "Personalização de revisões",
  ["Considere qual conteúdo do repositório deve orientar o Copilot.", "Metadados e instruções de comportamento têm papéis diferentes."]
]);
add(71, [
  "Desde la página de la empresa, ¿qué ruta abre las políticas de funciones y clientes de Copilot en la interfaz en inglés?",
  ["AI controls → Copilot → Models", "Settings → Audit log", "AI controls → Copilot → Configure features & clients", "Settings → Copilot → Policies"],
  ["Los controles de modelos son distintos de las políticas de funciones y clientes.", "El registro de auditoría registra cambios en lugar de configurar estas políticas.", "Configure features & clients es la página empresarial documentada.", "Esta es la ruta de políticas de organización, no de empresa."],
  "Ruta de políticas de funciones de empresa",
  ["La navegación de empresa y de organización es distinta.", "Elige configuración en lugar de evidencia histórica."]
], [
  "Na página da empresa, qual caminho abre as políticas de recursos e clientes do Copilot na interface em inglês?",
  ["AI controls → Copilot → Models", "Settings → Audit log", "AI controls → Copilot → Configure features & clients", "Settings → Copilot → Policies"],
  ["Controles de modelos são distintos de políticas de recursos e clientes.", "O log de auditoria registra alterações em vez de configurar essas políticas.", "Configure features & clients é a página empresarial documentada.", "Este é o caminho de políticas da organização, não da empresa."],
  "Caminho de políticas de recursos da empresa",
  ["A navegação da empresa difere da navegação da organização.", "Escolha configuração em vez de evidência histórica."]
]);
add(72, [
  "¿Qué requisito favorece Copilot Business frente a suscripciones personales separadas de Copilot Pro?",
  ["Sugerencias de código en línea", "Asistencia de programación conversacional", "Uso desde una terminal", "Administración centralizada"],
  ["Las sugerencias en línea no son exclusivas de Business.", "La asistencia conversacional también está disponible en planes personales.", "El acceso desde terminal no es exclusivo de Business.", "Business añade administración centralizada para usuarios administrados."],
  "Planes administrados frente a personales",
  ["Compara necesidades de gobierno, no solo interfaces de programación.", "Distingue capacidades individuales de administración de la organización."]
], [
  "Qual requisito favorece o Copilot Business em vez de assinaturas pessoais separadas do Copilot Pro?",
  ["Sugestões de código em linha", "Assistência de programação conversacional", "Uso pelo terminal", "Administração centralizada"],
  ["Sugestões em linha não são exclusivas do Business.", "A assistência conversacional também existe em planos pessoais.", "O acesso pelo terminal não é exclusivo do Business.", "O Business adiciona administração centralizada para usuários gerenciados."],
  "Planos gerenciados versus pessoais",
  ["Compare necessidades de governança, não apenas interfaces de programação.", "Diferencie capacidades individuais de administração da organização."]
]);
add(73, [
  "¿Para qué plan de alojamiento de GitHub está diseñado Copilot Enterprise?",
  ["GitHub Enterprise Cloud", "GitHub Enterprise Server", "Una instancia autohospedada de GitLab", "Un Azure DevOps Server local"],
  ["Copilot Enterprise está diseñado para GitHub Enterprise Cloud.", "Copilot Enterprise no es una implementación de GitHub Enterprise Server.", "El alojamiento GitLab no es el plan de GitHub requerido.", "Azure DevOps Server no es GitHub Enterprise Cloud."],
  "Compatibilidad de Copilot Enterprise",
  ["No trates los productos empresariales en la nube y autohospedados como intercambiables.", "Compartir la palabra “Enterprise” no establece compatibilidad."]
], [
  "Para qual plano de hospedagem do GitHub o Copilot Enterprise foi projetado?",
  ["GitHub Enterprise Cloud", "GitHub Enterprise Server", "Uma instância auto-hospedada do GitLab", "Um Azure DevOps Server local"],
  ["O Copilot Enterprise foi projetado para o GitHub Enterprise Cloud.", "O Copilot Enterprise não é uma implantação do GitHub Enterprise Server.", "A hospedagem GitLab não é o plano do GitHub exigido.", "O Azure DevOps Server não é GitHub Enterprise Cloud."],
  "Compatibilidade do Copilot Enterprise",
  ["Não trate produtos empresariais na nuvem e auto-hospedados como intercambiáveis.", "Compartilhar a palavra “Enterprise” não estabelece compatibilidade."]
]);
add(74, [
  "¿Qué planes proporcionan exclusiones de contenido de Copilot administradas centralmente?",
  ["Copilot Student y Copilot Free", "Copilot Business y Copilot Enterprise", "Copilot Free y Copilot Pro", "Copilot Pro y Copilot Pro+"],
  ["Estos planes no proporcionan administración centralizada de exclusiones.", "La exclusión de contenido está documentada para Business y Enterprise.", "Estos planes personales no proporcionan la exclusión administrada.", "Más capacidad en un plan personal no añade esta función administrativa."],
  "Planes aptos para exclusiones de contenido",
  ["Distingue una política administrada de una preferencia del editor.", "Una asignación individual mayor no es gobierno centralizado."]
], [
  "Quais planos oferecem exclusões de conteúdo do Copilot gerenciadas centralmente?",
  ["Copilot Student e Copilot Free", "Copilot Business e Copilot Enterprise", "Copilot Free e Copilot Pro", "Copilot Pro e Copilot Pro+"],
  ["Esses planos não oferecem administração centralizada de exclusões.", "A exclusão de conteúdo é documentada para Business e Enterprise.", "Esses planos pessoais não oferecem a exclusão gerenciada.", "Mais capacidade em um plano pessoal não adiciona esse recurso administrativo."],
  "Planos elegíveis para exclusões de conteúdo",
  ["Diferencie uma política gerenciada de uma preferência do editor.", "Uma cota individual maior não é governança centralizada."]
]);
add(75, [
  "¿Qué políticas gobiernan generalmente a un usuario cuya organización le asigna una licencia de Copilot?",
  ["Solo la configuración de su editor local", "Solo sus preferencias personales de facturación", "Las del proveedor de la licencia", "Las de cada repositorio público que consulta"],
  ["La configuración local no sustituye las políticas administradas aplicables.", "Las preferencias personales de facturación no prevalecen sobre el gobierno administrado.", "Los usuarios administrados suelen estar sujetos a las políticas del proveedor de su licencia.", "Consultar un repositorio público no lo convierte en proveedor de licencia."],
  "Alcance de políticas administradas",
  ["Identifica dónde recibe el usuario el derecho de acceso administrado.", "Distingue el alcance de la licencia del repositorio consultado."]
], [
  "Quais políticas geralmente governam um usuário que recebe uma licença do Copilot de uma organização?",
  ["Somente as configurações do editor local", "Somente suas preferências pessoais de cobrança", "As do provedor da licença", "As de cada repositório público que ele consulta"],
  ["Configurações locais não substituem políticas gerenciadas aplicáveis.", "Preferências pessoais de cobrança não prevalecem sobre a governança gerenciada.", "Usuários gerenciados geralmente seguem as políticas do provedor da licença.", "Consultar um repositório público não o torna provedor da licença."],
  "Escopo de políticas gerenciadas",
  ["Identifique de onde vem o direito de acesso gerenciado.", "Diferencie o escopo da licença do repositório consultado."]
]);
add(76, [
  "Una empresa desactiva explícitamente una función de Copilot. ¿Puede el propietario de una organización activarla para su organización?",
  ["Sí; la configuración de organización siempre tiene prioridad", "Sí; asignar otra licencia anula la política", "No; primero el usuario debe activarla en el IDE", "No; se aplica la restricción empresarial"],
  ["Una organización no prevalece sobre la aplicación explícita empresarial.", "Asignar una licencia no anula la política de funciones.", "Una preferencia del IDE no desbloquea una función desactivada por la empresa.", "La aplicación explícita de la empresa no puede ser anulada por la organización."],
  "Aplicación de políticas empresariales",
  ["Considera si la empresa delegó la decisión.", "Un derecho de acceso y un permiso de función son distintos."]
], [
  "Uma empresa desativa explicitamente um recurso do Copilot. O proprietário de uma organização pode ativá-lo para essa organização?",
  ["Sim; as configurações da organização sempre têm prioridade", "Sim; atribuir outra licença substitui a política", "Não; primeiro o usuário deve ativá-lo no IDE", "Não; vale a restrição empresarial"],
  ["Uma organização não prevalece sobre a aplicação explícita empresarial.", "Atribuir uma licença não substitui a política de recursos.", "Uma preferência do IDE não libera um recurso desativado pela empresa.", "A aplicação explícita da empresa não pode ser substituída pela organização."],
  "Aplicação de políticas empresariais",
  ["Considere se a empresa delegou a decisão.", "Um direito de acesso e uma permissão de recurso são diferentes."]
]);
add(77, [
  "¿Qué registro identifica asignaciones históricas de licencias de Copilot y cambios de políticas?",
  ["Registros de auditoría administrativa", "Solo el conteo actual de licencias", "El historial de commits del repositorio", "El conteo de sugerencias aceptadas del IDE"],
  ["Los eventos de auditoría registran cambios administrativos de licencias y políticas.", "Un conteo actual no identifica actores ni cambios históricos.", "Los commits de Git no capturan estos ajustes administrativos.", "Los conteos de aceptación miden actividad de programación, no cambios administrativos."],
  "Evidencia de auditoría administrativa de Copilot",
  ["Una configuración actual no es un historial de cambios.", "Busca registros de acciones y actores administrativos."]
], [
  "Qual registro identifica atribuições históricas de licenças do Copilot e alterações de políticas?",
  ["Logs de auditoria administrativa", "Somente a contagem atual de licenças", "O histórico de commits do repositório", "A contagem de sugestões aceitas do IDE"],
  ["Eventos de auditoria registram alterações administrativas de licenças e políticas.", "Uma contagem atual não identifica atores ou alterações históricas.", "Commits do Git não capturam essas configurações administrativas.", "Contagens de aceitação medem atividade de programação, não alterações administrativas."],
  "Evidência de auditoria administrativa do Copilot",
  ["Uma configuração atual não é um histórico de alterações.", "Procure registros de ações e atores administrativos."]
]);
add(78, [
  "¿Qué opción de política empresarial delega una decisión sobre una función de Copilot a los propietarios de organizaciones? Usa las etiquetas de la interfaz en inglés.",
  ["Enabled for selected organizations", "Let organizations decide", "Enabled", "Disabled"],
  ["Seleccionar organizaciones sigue siendo una decisión a nivel de empresa.", "Esta opción delega la decisión a las organizaciones.", "Enabled aplica una decisión empresarial.", "Disabled aplica una restricción empresarial."],
  "Delegación de políticas empresariales",
  ["Distingue delegar de elegir un resultado para toda la empresa.", "¿Quién debe tomar la decisión final en esta pregunta?"]
], [
  "Qual opção de política empresarial delega uma decisão sobre um recurso do Copilot aos proprietários das organizações? Use os rótulos da interface em inglês.",
  ["Enabled for selected organizations", "Let organizations decide", "Enabled", "Disabled"],
  ["Selecionar organizações continua sendo uma escolha no nível da empresa.", "Essa opção delega a decisão às organizações.", "Enabled aplica uma decisão empresarial.", "Disabled aplica uma restrição empresarial."],
  "Delegação de políticas empresariais",
  ["Diferencie delegar de escolher um resultado para toda a empresa.", "Quem deve tomar a decisão final nesta pergunta?"]
]);
add(79, [
  "¿Qué endpoint REST enumera las asignaciones de licencias de Copilot facturadas a una organización?",
  ["GET /orgs/{org}/members", "GET /orgs/{org}/teams", "GET /orgs/{org}/copilot/billing/seats", "GET /orgs/{org}/copilot/billing"],
  ["Ser miembro de la organización no establece una asignación de Copilot.", "La lista de equipos no es el inventario de licencias de Copilot.", "El endpoint seats enumera licencias asignadas y detalles de sus usuarios.", "El endpoint billing devuelve información de suscripción y desgloses de licencias."],
  "API de inventario de licencias de Copilot",
  ["Un resumen de suscripción difiere de las asignaciones individuales.", "Ser miembro de la organización no implica tener licencia de Copilot."]
], [
  "Qual endpoint REST lista as atribuições de licenças do Copilot cobradas de uma organização?",
  ["GET /orgs/{org}/members", "GET /orgs/{org}/teams", "GET /orgs/{org}/copilot/billing/seats", "GET /orgs/{org}/copilot/billing"],
  ["Ser membro da organização não comprova atribuição de licença do Copilot.", "A lista de equipes não é o inventário de licenças do Copilot.", "O endpoint seats lista licenças atribuídas e detalhes dos usuários.", "O endpoint billing retorna informações da assinatura e totais de licenças."],
  "API de inventário de licenças do Copilot",
  ["Um resumo da assinatura difere das atribuições individuais.", "Ser membro da organização não implica ter licença do Copilot."]
]);
add(80, [
  "Un script de inventario devuelve una página aunque total_seats es mayor. ¿Qué debe hacer el script?",
  ["Tratar la primera página como inventario completo", "Contar repositorios de la organización", "Reintentar con una solicitud sin autenticación", "Recuperar las páginas de resultados restantes"],
  ["Una respuesta correcta puede contener solo una página.", "Los conteos de repositorios no miden licencias asignadas.", "Los reintentos sin autenticación no recuperan inventarios protegidos.", "El endpoint de licencias está paginado, por lo que faltan páginas."],
  "Inventario paginado de licencias",
  ["Comprueba si la respuesta es una página o toda la colección.", "Un estado correcto no demuestra que la colección esté completa."]
], [
  "Um script de inventário retorna uma página embora total_seats seja maior. O que o script deve fazer?",
  ["Tratar a primeira página como inventário completo", "Contar repositórios da organização", "Tentar novamente com uma solicitação não autenticada", "Recuperar as páginas de resultados restantes"],
  ["Uma resposta bem-sucedida pode conter apenas uma página.", "Contagens de repositórios não medem licenças atribuídas.", "Tentativas sem autenticação não recuperam inventários protegidos.", "O endpoint de licenças é paginado, portanto faltam páginas."],
  "Inventário paginado de licenças",
  ["Verifique se a resposta é uma página ou toda a coleção.", "Um status de sucesso não prova que a coleção está completa."]
]);
add(81, [
  "¿Qué capacidad de Copilot organiza una colección compartida de contexto para preguntas?",
  ["Spaces", "Archivos de prompts", "Perfiles de agentes personalizados", "Políticas de revisión de código"],
  ["Spaces organiza contexto compartido para preguntas a Copilot.", "Los archivos de prompts empaquetan solicitudes reutilizables.", "Los perfiles configuran agentes especializados.", "Las políticas de revisión controlan su disponibilidad y comportamiento."],
  "Contexto compartido con Spaces",
  ["Distingue una colección de conocimiento de una tarea reutilizable.", "El objetivo es organizar material de referencia compartido."]
], [
  "Qual capacidade do Copilot organiza uma coleção compartilhada de contexto para perguntas?",
  ["Spaces", "Arquivos de prompts", "Perfis de agentes personalizados", "Políticas de revisão de código"],
  ["Spaces organiza contexto compartilhado para perguntas ao Copilot.", "Arquivos de prompts empacotam solicitações reutilizáveis.", "Perfis configuram agentes especializados.", "Políticas de revisão controlam sua disponibilidade e comportamento."],
  "Contexto compartilhado com Spaces",
  ["Diferencie uma coleção de conhecimento de uma tarefa reutilizável.", "O objetivo é organizar material de referência compartilhado."]
]);
add(82, [
  "Históricamente, ¿qué estaba diseñado para crear GitHub Spark en github.com antes de su retirada en 2026?",
  ["Exportaciones de registros de auditoría empresariales", "Aplicaciones a partir de ideas en lenguaje natural", "Inventarios de licencias de Copilot para organizaciones", "Imágenes de ejecutores de GitHub Actions"],
  ["No era una herramienta de exportación de auditoría empresarial.", "Spark ayudaba a convertir ideas en aplicaciones funcionales.", "No era un producto de administración de licencias.", "No era un constructor de imágenes de ejecutores."],
  "Propósito histórico de GitHub Spark",
  ["Trátalo como una capacidad histórica, no como una recomendación actual.", "Identifica el flujo de creación principal del producto."]
], [
  "Historicamente, o que o GitHub Spark no github.com foi projetado para criar antes de sua descontinuação em 2026?",
  ["Exportações de logs de auditoria empresariais", "Aplicações a partir de ideias em linguagem natural", "Inventários de licenças do Copilot para organizações", "Imagens de executores do GitHub Actions"],
  ["Não era uma ferramenta de exportação de auditoria empresarial.", "O Spark ajudava a transformar ideias em aplicações funcionais.", "Não era um produto de gerenciamento de licenças.", "Não era um construtor de imagens de executores."],
  "Finalidade histórica do GitHub Spark",
  ["Trate isso como uma capacidade histórica, não como uma recomendação atual.", "Identifique o principal fluxo de criação do produto."]
]);
add(83, [
  "¿Qué archivo proporciona instrucciones personalizadas de Copilot para todo el repositorio?",
  [".github/agents/reviewer.agent.md", ".github/workflows/build.yml", ".github/copilot-instructions.md", ".github/prompts/build.prompt.md"],
  ["Un perfil define un agente especializado.", "Un archivo de flujo define automatización de GitHub Actions.", "copilot-instructions.md es el punto de entrada de instrucciones para todo el repositorio.", "Un archivo de prompts se invoca para una interacción concreta."],
  "Archivo de instrucciones de todo el repositorio",
  ["Relaciona el alcance del archivo con todas las solicitudes en el contexto del repositorio.", "Instrucciones, prompts y agentes son personalizaciones distintas."]
], [
  "Qual arquivo fornece instruções personalizadas do Copilot para todo o repositório?",
  [".github/agents/reviewer.agent.md", ".github/workflows/build.yml", ".github/copilot-instructions.md", ".github/prompts/build.prompt.md"],
  ["Um perfil define um agente especializado.", "Um arquivo de fluxo define automação do GitHub Actions.", "copilot-instructions.md é o ponto de entrada das instruções para todo o repositório.", "Um arquivo de prompts é invocado para uma interação específica."],
  "Arquivo de instruções de todo o repositório",
  ["Relacione o escopo do arquivo a todas as solicitações no contexto do repositório.", "Instruções, prompts e agentes são personalizações diferentes."]
]);
add(84, [
  "¿Qué personalización limita la orientación de Copilot a rutas de archivo coincidentes en un cliente compatible?",
  ["Preferencias personales de respuesta", "Un prompt reutilizable invocado manualmente", "Solo un archivo de instrucciones para todo el repositorio", "Instrucciones específicas de ruta"],
  ["Las preferencias personales no son reglas de rutas.", "Un prompt se elige para una interacción, no automáticamente por ruta.", "La orientación de todo el repositorio se aplica ampliamente, no solo a rutas coincidentes.", "Las instrucciones de ruta se aplican a archivos que coinciden con su alcance configurado."],
  "Instrucciones específicas de ruta",
  ["Compara la aplicación automática con la invocación manual.", "La orientación especializada no debería cargar archivos no relacionados."]
], [
  "Qual personalização limita as orientações do Copilot a caminhos de arquivo correspondentes em um cliente compatível?",
  ["Preferências pessoais de resposta", "Um prompt reutilizável invocado manualmente", "Somente um arquivo de instruções para todo o repositório", "Instruções específicas de caminho"],
  ["Preferências pessoais não são regras de caminhos.", "Um prompt é escolhido para uma interação, não automaticamente por caminho.", "Orientações de todo o repositório se aplicam amplamente, não apenas a caminhos correspondentes.", "Instruções de caminho se aplicam a arquivos que correspondem ao escopo configurado."],
  "Instruções específicas de caminho",
  ["Compare aplicação automática com invocação manual.", "Orientações especializadas não devem sobrecarregar arquivos não relacionados."]
]);
add(85, [
  "¿Qué distingue AGENTS.md de los archivos de .github/agents?",
  ["Instrucciones para agentes frente a definiciones de agentes especializados", "Definiciones de agentes especializados frente a instrucciones del repositorio", "Ajustes del IDE frente a flujos de GitHub Actions", "Plantillas de prompts frente a políticas de acceso al repositorio"],
  ["AGENTS.md proporciona instrucciones; .github/agents contiene definiciones de agentes.", "Esto invierte las funciones de ambas ubicaciones.", "Ninguna ubicación es principalmente un directorio de ajustes del IDE o de flujos.", "No son ubicaciones de prompts y políticas de acceso."],
  "Instrucciones y definiciones de agentes",
  ["Los nombres que mencionan agentes pueden tener propósitos distintos.", "Distingue orientar a un agente de definirlo."]
], [
  "O que diferencia AGENTS.md dos arquivos em .github/agents?",
  ["Instruções para agentes versus definições de agentes especializados", "Definições de agentes especializados versus instruções do repositório", "Configurações do IDE versus fluxos do GitHub Actions", "Modelos de prompts versus políticas de acesso ao repositório"],
  ["AGENTS.md fornece instruções; .github/agents contém definições de agentes.", "Isso inverte os papéis dos dois locais.", "Nenhum local é principalmente um diretório de configurações do IDE ou de fluxos.", "Não são locais de prompts e políticas de acesso."],
  "Instruções e definições de agentes",
  ["Nomes que mencionam agentes podem ter finalidades diferentes.", "Diferencie orientar um agente de defini-lo."]
]);
add(86, [
  "¿Qué personalización guarda una tarea reutilizable que el desarrollador invoca cuando la necesita?",
  ["Preferencias personales de idioma", "Un archivo de prompts", "Instrucciones personalizadas para todo el repositorio", "Políticas de funciones de organización"],
  ["Las preferencias de idioma guían el estilo de respuesta, no una tarea bajo demanda.", "Los archivos de prompts empaquetan solicitudes específicas para invocarlas explícitamente.", "Las instrucciones del repositorio se aplican automáticamente dentro de su alcance.", "Las políticas controlan disponibilidad en lugar de empaquetar tareas."],
  "Reutilización de prompts bajo demanda",
  ["La orientación automática difiere de una solicitud explícita de tarea.", "Piensa cuándo debería surtir efecto la personalización."]
], [
  "Qual personalização armazena uma tarefa reutilizável que o desenvolvedor invoca quando precisa?",
  ["Preferências pessoais de idioma", "Um arquivo de prompts", "Instruções personalizadas para todo o repositório", "Políticas de recursos da organização"],
  ["Preferências de idioma orientam o estilo de resposta, não uma tarefa sob demanda.", "Arquivos de prompts empacotam solicitações específicas para invocação explícita.", "Instruções do repositório se aplicam automaticamente dentro do escopo.", "Políticas controlam disponibilidade em vez de empacotar tarefas."],
  "Reutilização de prompts sob demanda",
  ["Orientações automáticas diferem de uma solicitação explícita de tarefa.", "Considere quando a personalização deve entrar em ação."]
]);
add(87, [
  "¿Qué proporcionan las instrucciones personalizadas de Copilot en lugar de aplicación garantizada de políticas?",
  ["Una comprobación obligatoria para fusionar en el repositorio", "Una pasada determinista de formato de código", "Orientación en lenguaje natural", "Una regla de tipos aplicada por el compilador"],
  ["Por sí solas no configuran comprobaciones obligatorias de fusión.", "La orientación del modelo no es un formateador determinista.", "Las instrucciones orientan al modelo, que puede no seguirlas de forma constante.", "Las instrucciones no añaden reglas al compilador."],
  "Límites de cumplimiento de instrucciones",
  ["Compara la orientación del modelo con la validación ejecutable.", "La generación no determinista afecta a las expectativas de cumplimiento."]
], [
  "O que as instruções personalizadas do Copilot fornecem em vez de aplicação garantida de políticas?",
  ["Uma verificação obrigatória para mesclar no repositório", "Uma etapa determinística de formatação de código", "Orientações em linguagem natural", "Uma regra de tipos aplicada pelo compilador"],
  ["Sozinhas, não configuram verificações obrigatórias de mesclagem.", "Orientação do modelo não é um formatador determinístico.", "As instruções orientam o modelo, que pode não segui-las consistentemente.", "Instruções não adicionam regras ao compilador."],
  "Limites de adesão a instruções",
  ["Compare orientações do modelo com validação executável.", "A geração não determinística afeta as expectativas de conformidade."]
]);
add(88, [
  "¿Qué referencia de Copilot Chat en VS Code incluye solo el texto seleccionado actualmente?",
  ["#file", "#project", "#path", "#selection"],
  ["#file incluye el contenido del archivo.", "#project proporciona contexto del proyecto.", "#path proporciona la ruta del archivo.", "#selection incluye el texto seleccionado."],
  "Contexto de código seleccionado en VS Code",
  ["Elige la granularidad de contexto solicitada en la pregunta.", "El texto seleccionado, el contenido del archivo y el contexto del proyecto son distintos."]
], [
  "Qual referência do Copilot Chat no VS Code inclui apenas o texto selecionado atualmente?",
  ["#file", "#project", "#path", "#selection"],
  ["#file inclui o conteúdo do arquivo.", "#project fornece contexto do projeto.", "#path fornece o caminho do arquivo.", "#selection inclui o texto selecionado."],
  "Contexto de código selecionado no VS Code",
  ["Escolha a granularidade de contexto solicitada na pergunta.", "Texto selecionado, conteúdo do arquivo e contexto do projeto são diferentes."]
]);
add(89, [
  "¿Qué debes escribir en Copilot Chat para descubrir los comandos de barra disponibles en ese entorno?",
  ["/", "@", "#", "!"],
  ["Escribir / muestra los comandos de barra disponibles.", "@ se usa para participantes o menciones de contexto, según el cliente.", "# se usa para referencias de contexto en IDE compatibles.", "! no es el prefijo documentado para descubrir comandos de barra en Chat."],
  "Descubrimiento de comandos del cliente",
  ["Los comandos disponibles varían según el entorno y el contexto del chat.", "Usa el descubrimiento en el cliente real, no una supuesta lista universal."]
], [
  "O que você deve digitar no Copilot Chat para descobrir os comandos de barra disponíveis nesse ambiente?",
  ["/", "@", "#", "!"],
  ["Digitar / mostra os comandos de barra disponíveis.", "@ é usado para participantes ou menções de contexto, conforme o cliente.", "# é usado para referências de contexto em IDEs compatíveis.", "! não é o prefixo documentado para descobrir comandos de barra no Chat."],
  "Descoberta de comandos do cliente",
  ["Os comandos disponíveis variam conforme o ambiente e o contexto do chat.", "Use a descoberta no cliente real, não uma suposta lista universal."]
]);
add(90, [
  "¿Qué participante de Copilot Chat en VS Code se especializa en comandos de terminal y contexto del shell?",
  ["@azure", "@terminal", "@vscode", "@github"],
  ["@azure se especializa en servicios de Azure.", "@terminal tiene contexto sobre la terminal integrada y el shell.", "@vscode se especializa en funciones y comandos de VS Code.", "@github proporciona capacidades específicas de GitHub."],
  "Participante de terminal en VS Code",
  ["Los participantes se especializan en dominios distintos.", "Un comando del editor y uno del shell no son lo mismo."]
], [
  "Qual participante do Copilot Chat no VS Code se especializa em comandos de terminal e contexto do shell?",
  ["@azure", "@terminal", "@vscode", "@github"],
  ["@azure se especializa em serviços do Azure.", "@terminal tem contexto sobre o terminal integrado e o shell.", "@vscode se especializa em recursos e comandos do VS Code.", "@github fornece capacidades específicas do GitHub."],
  "Participante de terminal no VS Code",
  ["Os participantes se especializam em domínios diferentes.", "Um comando do editor e um comando do shell não são a mesma coisa."]
]);
add(51, [
  "¿Qué modo de Copilot CLI desarrolla un enfoque de implementación antes de escribir código?",
  ["Modo de permisos Allow-all", "Modo de autocompletado del shell", "Modo de planificación", "Modo Autopilot"],
  ["Allow-all cambia los permisos, no la intención de planificación.", "El autocompletado completa la sintaxis de comandos de terminal.", "El modo de planificación permite discutir primero un plan.", "Autopilot avanza con la implementación autónoma."],
  "Modo de planificación de CLI",
  ["Considera si el objetivo es planificar o ejecutar.", "La amplitud de permisos es distinta de las etapas de una tarea."]
], [
  "Qual modo do Copilot CLI desenvolve uma abordagem de implementação antes de escrever código?",
  ["Modo de permissões Allow-all", "Modo de preenchimento do shell", "Modo de planejamento", "Modo Autopilot"],
  ["Allow-all altera permissões, não a intenção de planejamento.", "O preenchimento completa a sintaxe de comandos de terminal.", "O modo de planejamento permite discutir um plano primeiro.", "Autopilot avança com a implementação autônoma."],
  "Modo de planejamento da CLI",
  ["Considere se o objetivo é planejar ou executar.", "A abrangência de permissões é diferente das etapas de uma tarefa."]
]);
add(52, [
  "En el primer inicio, ¿qué comando interactivo de Copilot CLI inicia la autenticación?",
  ["/agent", "/resume", "/context", "/login"],
  ["/agent selecciona un agente.", "/resume selecciona una sesión anterior.", "/context muestra el uso del contexto.", "/login inicia la autenticación."],
  "Autenticación interactiva de CLI",
  ["Autorizar una cuenta es distinto de seleccionar una tarea o sesión.", "Usa el comando adecuado para el cliente interactivo."]
], [
  "Na primeira inicialização, qual comando interativo do Copilot CLI inicia a autenticação?",
  ["/agent", "/resume", "/context", "/login"],
  ["/agent seleciona um agente.", "/resume seleciona uma sessão anterior.", "/context mostra o uso do contexto.", "/login inicia a autenticação."],
  "Autenticação interativa da CLI",
  ["Autorizar uma conta é diferente de selecionar uma tarefa ou sessão.", "Use o comando adequado ao cliente interativo."]
]);
add(53, [
  "¿Qué comando de Copilot Chat en VS Code reinicia la conversación para un tema no relacionado?",
  ["/clear", "/new", "/help", "/fixTestFailure"],
  ["/clear inicia una nueva sesión de chat en VS Code.", "/new crea un proyecto en este cliente.", "/help muestra información de uso.", "/fixTestFailure investiga una prueba fallida."],
  "Reinicio de conversación en VS Code",
  ["Un mismo comando puede tener funciones distintas según el cliente.", "Una conversación nueva no es un proyecto nuevo."]
], [
  "Qual comando do Copilot Chat no VS Code reinicia a conversa para um assunto não relacionado?",
  ["/clear", "/new", "/help", "/fixTestFailure"],
  ["/clear inicia uma nova sessão de chat no VS Code.", "/new cria um projeto neste cliente.", "/help exibe informações de uso.", "/fixTestFailure investiga um teste com falha."],
  "Reinício de conversa no VS Code",
  ["Um mesmo comando pode ter funções diferentes conforme o cliente.", "Uma conversa nova não é um projeto novo."]
]);
add(54, [
  "¿Qué comando de Copilot CLI muestra una vista visual del uso actual de tokens?",
  ["/agent", "/context", "/compact", "/resume"],
  ["/agent selecciona un agente personalizado.", "/context visualiza el uso actual del contexto.", "/compact comprime el historial de conversación.", "/resume reabre una sesión guardada."],
  "Inspección del contexto de CLI",
  ["Supervisar el uso es distinto de modificar el historial.", "Elige una operación de inspección, no un cambio de sesión."]
], [
  "Qual comando do Copilot CLI exibe uma visão visual do uso atual de tokens?",
  ["/agent", "/context", "/compact", "/resume"],
  ["/agent seleciona um agente personalizado.", "/context mostra o uso atual do contexto.", "/compact comprime o histórico da conversa.", "/resume reabre uma sessão salva."],
  "Inspeção do contexto da CLI",
  ["Monitorar o uso é diferente de alterar o histórico.", "Escolha uma operação de inspeção, não uma troca de sessão."]
]);
add(55, [
  "¿Cómo puedes recuperar manualmente espacio de contexto en una conversación larga de Copilot CLI?",
  ["/usage", "/agent", "/compact", "/context"],
  ["/usage informa de estadísticas de sesión.", "/agent selecciona un agente personalizado.", "/compact comprime el historial de conversación.", "/context informa del uso, pero no comprime el historial."],
  "Compactación del contexto de CLI",
  ["El objetivo es conservar historial útil en menos espacio.", "Informar del uso no recupera capacidad por sí solo."]
], [
  "Como recuperar manualmente espaço de contexto em uma conversa longa do Copilot CLI?",
  ["/usage", "/agent", "/compact", "/context"],
  ["/usage informa estatísticas da sessão.", "/agent seleciona um agente personalizado.", "/compact comprime o histórico da conversa.", "/context informa o uso, mas não comprime o histórico."],
  "Compactação do contexto da CLI",
  ["O objetivo é preservar histórico útil em menos espaço.", "Informar o uso não recupera capacidade por si só."]
]);
add(56, [
  "Copilot CLI solicita un comando de shell que autorizas solo esta vez. ¿Qué alcance de permiso corresponde?",
  ["Aprobar la herramienta para la sesión", "Activar permisos Allow-all", "Confiar en la carpeta para sesiones futuras", "Aprobar esta invocación"],
  ["La aprobación de sesión permite usos posteriores de esa herramienta.", "Allow-all concede permisos de ejecución mucho más amplios.", "La confianza en la carpeta afecta a su contenido, no a una invocación.", "La aprobación puntual autoriza solo esta invocación."],
  "Alcance de permisos de CLI",
  ["Distingue la confianza en el directorio del permiso de ejecución.", "Ajusta la duración de la autorización a la intención indicada."]
], [
  "O Copilot CLI solicita um comando de shell que você autoriza apenas desta vez. Qual escopo de permissão corresponde?",
  ["Aprovar a ferramenta para a sessão", "Ativar permissões Allow-all", "Confiar na pasta para sessões futuras", "Aprovar esta chamada"],
  ["A aprovação de sessão permite usos posteriores dessa ferramenta.", "Allow-all concede permissões de execução muito mais amplas.", "A confiança na pasta diz respeito ao conteúdo, não a uma chamada.", "A aprovação pontual autoriza apenas esta chamada."],
  "Escopo de permissões da CLI",
  ["Diferencie confiança no diretório de permissão de execução.", "Ajuste a duração da autorização à intenção informada."]
]);
add(57, [
  "¿Qué comando de Copilot Chat en VS Code propone una corrección para código defectuoso seleccionado?",
  ["/fix", "/explain", "/tests", "/help"],
  ["/fix solicita una corrección propuesta.", "/explain describe cómo funciona el código.", "/tests genera pruebas unitarias.", "/help muestra orientación de uso."],
  "Corrección de código en VS Code",
  ["Identifica si se solicita diagnóstico, modificación o pruebas.", "La selección proporciona el código sobre el que trabajar."]
], [
  "Qual comando do Copilot Chat no VS Code propõe uma correção para código defeituoso selecionado?",
  ["/fix", "/explain", "/tests", "/help"],
  ["/fix solicita uma proposta de correção.", "/explain descreve como o código funciona.", "/tests gera testes unitários.", "/help exibe orientações de uso."],
  "Correção de código no VS Code",
  ["Identifique se a solicitação pede diagnóstico, modificação ou testes.", "A seleção fornece o código a ser trabalhado."]
]);
add(58, [
  "¿Qué notación adjunta src/parser.js como contexto de archivo en un prompt de Copilot CLI?",
  ["!src/parser.js", "@src/parser.js", "#src/parser.js", "/src/parser.js"],
  ["! introduce ejecución directa de shell en esta CLI.", "@ seguido de una ruta relativa adjunta el contenido del archivo.", "# no es la notación documentada para adjuntar archivos en CLI.", "Una barra inicial no es esta sintaxis de contexto."],
  "Archivos adjuntos en CLI",
  ["Distingue las referencias de archivos de CLI de las variables de chat del IDE.", "Un prefijo puede determinar si la entrada es contexto o un comando."]
], [
  "Qual notação anexa src/parser.js como contexto de arquivo em um prompt do Copilot CLI?",
  ["!src/parser.js", "@src/parser.js", "#src/parser.js", "/src/parser.js"],
  ["! introduz execução direta de shell nesta CLI.", "@ seguido de um caminho relativo anexa o conteúdo do arquivo.", "# não é a notação documentada para anexar arquivos na CLI.", "Uma barra inicial não é essa sintaxe de contexto."],
  "Anexos de arquivo na CLI",
  ["Diferencie referências de arquivo da CLI de variáveis de chat do IDE.", "Um prefixo pode definir se a entrada é contexto ou um comando."]
]);
add(59, [
  "¿Qué mecanismo conecta Copilot con herramientas de un gestor de incidencias externo?",
  ["Un archivo de instrucciones personalizadas", "Un modelo de completado en línea", "Un servidor MCP", "Un archivo de prompts"],
  ["Las instrucciones guían el comportamiento, pero no proporcionan herramientas del gestor.", "Un modelo en línea genera sugerencias en lugar de conectar el gestor.", "Los servidores MCP exponen herramientas y datos externos a Copilot.", "Los archivos de prompts reutilizan solicitudes, pero no implementan conexiones."],
  "Integración de herramientas con MCP",
  ["Distingue la orientación de comportamiento de las capacidades ejecutables.", "El gestor debe consultarse, no solo describirse."]
], [
  "Qual mecanismo conecta o Copilot a ferramentas de um rastreador de problemas externo?",
  ["Um arquivo de instruções personalizadas", "Um modelo de preenchimento em linha", "Um servidor MCP", "Um arquivo de prompts"],
  ["Instruções orientam o comportamento, mas não fornecem ferramentas do rastreador.", "Um modelo em linha gera sugestões em vez de conectar o rastreador.", "Servidores MCP expõem ferramentas e dados externos ao Copilot.", "Arquivos de prompts reutilizam solicitações, mas não implementam conexões."],
  "Integração de ferramentas com MCP",
  ["Diferencie orientações de comportamento de capacidades executáveis.", "O rastreador precisa ser consultado, não apenas descrito."]
]);
add(60, [
  "Una tarea con MCP solo lee incidencias. ¿Qué configuración limita capacidades innecesarias?",
  ["Permitir todas las herramientas del servidor del gestor", "Desactivar consultas y conservar la eliminación", "Sustituir la lista de herramientas por una petición de cautela", "Permitir consultas y excluir la eliminación de incidencias"],
  ["Todas las herramientas exponen capacidades innecesarias.", "Eliminar es innecesario y consultar es necesario.", "La orientación en lenguaje natural no retira herramientas disponibles.", "Una lista limitada de herramientas coincide con la tarea de lectura."],
  "Selección de herramientas MCP",
  ["Compara la tarea con cada operación expuesta.", "Las instrucciones y las restricciones de capacidades son controles distintos."]
], [
  "Uma tarefa com MCP apenas lê problemas. Qual configuração limita capacidades desnecessárias?",
  ["Permitir todas as ferramentas do servidor do rastreador", "Desativar consultas e manter a exclusão", "Substituir a lista de ferramentas por um pedido de cautela", "Permitir consultas e excluir a exclusão de problemas"],
  ["Todas as ferramentas expõem capacidades desnecessárias.", "Excluir é desnecessário e consultar é necessário.", "Orientações em linguagem natural não removem ferramentas disponíveis.", "Uma lista limitada de ferramentas corresponde à tarefa de leitura."],
  "Seleção de ferramentas MCP",
  ["Compare a tarefa com cada operação exposta.", "Instruções e restrições de capacidades são controles diferentes."]
]);
add(61, [
  "¿Qué política de organización controla el soporte GA de MCP para sus usuarios con licencia Copilot Business? Usa los nombres de la interfaz en inglés.",
  ["MCP servers in Copilot", "Copilot code review", "Copilot in GitHub.com", "Opt in to user feedback collection"],
  ["Esta política controla el uso de MCP en superficies GA compatibles.", "La revisión de código controla otra capacidad.", "La disponibilidad en el sitio web no es el control específico de MCP.", "La recopilación de comentarios controla las opciones de comentarios."],
  "Política de MCP de la organización",
  ["Identifica la política específica del mecanismo de extensión.", "La pregunta trata de licencias administradas, no de un cliente de terceros."]
], [
  "Qual política da organização controla o suporte GA a MCP para seus usuários com licença Copilot Business? Use os nomes da interface em inglês.",
  ["MCP servers in Copilot", "Copilot code review", "Copilot in GitHub.com", "Opt in to user feedback collection"],
  ["Essa política controla o uso de MCP nas superfícies GA compatíveis.", "A revisão de código controla outra capacidade.", "A disponibilidade no site não é o controle específico de MCP.", "A coleta de feedback controla as opções de feedback."],
  "Política de MCP da organização",
  ["Identifique a política específica do mecanismo de extensão.", "A pergunta trata de licenças gerenciadas, não de um cliente de terceiros."]
]);
add(62, [
  "¿Qué comando de Copilot Chat en Visual Studio muestra conceptos básicos de uso?",
  ["/explain", "/help", "/doc", "/optimize"],
  ["/explain describe el comportamiento del código.", "/help proporciona una referencia rápida de uso de Copilot.", "/doc añade documentación de símbolos.", "/optimize analiza mejoras del tiempo de ejecución."],
  "Ayuda de comandos en Visual Studio",
  ["Distingue la ayuda sobre la herramienta de la ayuda sobre tu código.", "El cliente indicado es Visual Studio."]
], [
  "Qual comando do Copilot Chat no Visual Studio exibe noções básicas de uso?",
  ["/explain", "/help", "/doc", "/optimize"],
  ["/explain descreve o comportamento do código.", "/help fornece uma referência rápida de uso do Copilot.", "/doc adiciona documentação de símbolos.", "/optimize analisa melhorias de tempo de execução."],
  "Ajuda de comandos no Visual Studio",
  ["Diferencie ajuda sobre a ferramenta de ajuda sobre seu código.", "O cliente indicado é o Visual Studio."]
]);
add(63, [
  "¿Qué comando de Copilot Chat en VS Code investiga específicamente una prueba fallida?",
  ["/explain", "/new", "/fixTestFailure", "/tests"],
  ["/explain describe código existente.", "/new crea un proyecto en VS Code.", "/fixTestFailure busca y corrige una prueba fallida.", "/tests genera pruebas unitarias en lugar de reparar específicamente un fallo."],
  "Comando para pruebas fallidas",
  ["Generar pruebas es distinto de reparar un fallo existente.", "Usa el comando definido para el cliente indicado."]
], [
  "Qual comando do Copilot Chat no VS Code investiga especificamente um teste com falha?",
  ["/explain", "/new", "/fixTestFailure", "/tests"],
  ["/explain descreve código existente.", "/new cria um projeto no VS Code.", "/fixTestFailure encontra e corrige um teste com falha.", "/tests gera testes unitários em vez de reparar especificamente uma falha."],
  "Comando para testes com falha",
  ["Gerar testes é diferente de reparar uma falha existente.", "Use o comando definido para o cliente indicado."]
]);
add(64, [
  "¿Qué ventaja de contexto aporta delegar una investigación puntual a un subagente de Copilot CLI?",
  ["Un límite de contexto mayor para el modelo principal", "Almacenamiento permanente de cada resultado de herramienta", "Eliminación de restricciones de acceso al repositorio", "Un contexto de trabajo separado"],
  ["Delegar no amplía el límite del modelo principal.", "El contexto separado no garantiza un archivo permanente.", "Delegar no concede nuevos permisos de repositorio.", "El subagente trabaja por separado y devuelve resultados a la conversación principal."],
  "Aislamiento de contexto de subagentes",
  ["Distingue organizar el trabajo de cambiar la capacidad del modelo.", "Piensa dónde ocurre la investigación intermedia detallada."]
], [
  "Qual benefício de contexto a delegação de uma investigação pontual a um subagente do Copilot CLI oferece?",
  ["Um limite de contexto maior para o modelo principal", "Armazenamento permanente de cada resultado de ferramenta", "Remoção de restrições de acesso ao repositório", "Um contexto de trabalho separado"],
  ["Delegar não amplia o limite do modelo principal.", "Contexto separado não garante um arquivo permanente.", "Delegar não concede novas permissões de repositório.", "O subagente trabalha separadamente e retorna resultados à conversa principal."],
  "Isolamento de contexto de subagentes",
  ["Diferencie organizar o trabalho de mudar a capacidade do modelo.", "Considere onde ocorre a investigação intermediária detalhada."]
]);
add(65, [
  "¿Qué comando de Copilot Chat en Xcode solicita simplificar el código seleccionado?",
  ["/simplify", "/doc", "/explain", "/tests"],
  ["/simplify solicita simplificar la selección.", "/doc genera documentación de símbolos.", "/explain describe el código seleccionado.", "/tests crea una prueba unitaria."],
  "Comando de simplificación en Xcode",
  ["El resultado deseado es código modificado, no documentación.", "Consulta los comandos de Xcode en lugar de suponer paridad entre IDE."]
], [
  "Qual comando do Copilot Chat no Xcode solicita simplificar o código selecionado?",
  ["/simplify", "/doc", "/explain", "/tests"],
  ["/simplify solicita simplificar a seleção.", "/doc gera documentação de símbolos.", "/explain descreve o código selecionado.", "/tests cria um teste unitário."],
  "Comando de simplificação no Xcode",
  ["O resultado desejado é código alterado, não documentação.", "Consulte os comandos do Xcode em vez de presumir paridade entre IDEs."]
]);
add(26, [
  "¿Qué comprobaciones importan antes de aprobar una migración que elimina una columna de base de datos?",
  ["Suponer que el modelo inspeccionó el esquema de producción", "Eliminar y restaurar datos de producción sin un plan de recuperación", "Verificar uso, retención, respaldo y reversión", "Comprobar únicamente si el archivo de migración compila"],
  ["La descripción del modelo no demuestra que no existan consumidores u obligaciones de retención.", "Eliminar en producción puede causar pérdida irreversible o interrupciones.", "Las comprobaciones de uso y operación determinan si la eliminación es segura y reversible.", "La compilación no valida el impacto en los datos ni la seguridad de la reversión."],
  "Revisión de cambios destructivos en datos",
  ["¿Qué sistemas podrían seguir usando la columna?", "¿Qué evidencia respalda un plan seguro de recuperación?"]
], [
  "Quais verificações importam antes de aprovar uma migração que remove uma coluna do banco de dados?",
  ["Supor que o modelo inspecionou o esquema de produção", "Excluir e restaurar dados de produção sem um plano de recuperação", "Verificar uso, retenção, backup e reversão", "Verificar apenas se o arquivo de migração compila"],
  ["A descrição do modelo não prova que não existam consumidores ou obrigações de retenção.", "Remover em produção pode causar perda irreversível ou interrupção.", "Verificações de uso e operação estabelecem se a remoção é segura e reversível.", "Compilação não valida impacto nos dados nem segurança da reversão."],
  "Revisão de alterações destrutivas em dados",
  ["Quais sistemas ainda podem consumir a coluna?", "Que evidência apoia um plano seguro de recuperação?"]
]);
add(27, [
  "¿Cómo se deben revisar las traducciones generadas de mensajes de un servicio público?",
  ["Mantener la cantidad de palabras sin comprobar el significado", "Confiar solo en una revisión de traducción automática", "Traducir el título, pero no las instrucciones", "Pedir a revisores competentes que comprueben significado y uso local"],
  ["La misma cantidad de palabras no garantiza equivalencia de significado.", "Una única pasada automatizada puede omitir el contexto lingüístico y cultural.", "Las instrucciones en idiomas mezclados pueden confundir y omitir orientación.", "La revisión lingüística y contextual puede detectar traducciones engañosas o inaccesibles."],
  "Localización responsable",
  ["¿El texto traducido describe la misma acción y consecuencia?", "¿Quién puede revisar el idioma y el contexto local?"]
], [
  "Como traduções geradas de mensagens de um serviço público devem ser revisadas?",
  ["Manter a quantidade de palavras sem conferir o significado", "Confiar apenas na revisão da tradução automática", "Traduzir o título, mas não as instruções", "Pedir a revisores fluentes que verifiquem significado e uso local"],
  ["A mesma quantidade de palavras não garante equivalência de significado.", "Uma única passagem automatizada pode ignorar o contexto linguístico e cultural.", "Instruções em idiomas misturados podem confundir e omitir orientação.", "Revisores de idioma e contexto podem encontrar traduções enganosas ou inacessíveis."],
  "Localização responsável",
  ["O texto traduzido descreve a mesma ação e consequência?", "Quem pode revisar o idioma e o contexto local?"]
]);
add(28, [
  "¿Se debería omitir la revisión humana por una etiqueta de contenido generado por IA?",
  ["Aplicar los controles habituales según el riesgo", "Eximir un cambio generado de la revisión habitual", "Tomar una etiqueta como prueba de cómo se escribió el código", "Revisar comentarios en vez del cambio ejecutable"],
  ["La revisión debe considerar el impacto y el riesgo; el origen no demuestra corrección.", "La ayuda de IA no exime automáticamente un cambio de los controles existentes.", "Las etiquetas pueden ser incompletas y no prueban autoría ni seguridad.", "Los comentarios no determinan si un cambio requiere revisión."],
  "Controles de calidad coherentes",
  ["¿Qué determina el riesgo: el origen o los efectos del cambio?", "¿Qué proceso debe regir los cambios de este sistema?"]
], [
  "A revisão humana deve ser ignorada com base em uma identificação de conteúdo gerado por IA?",
  ["Aplicar os controles normais de revisão baseada em risco", "Isentar uma alteração gerada da revisão normal", "Tratar um rótulo como prova de como o código foi escrito", "Revisar comentários em vez da alteração executável"],
  ["A revisão deve considerar impacto e risco; a origem não comprova correção.", "Ajuda de IA não isenta automaticamente uma alteração dos controles existentes.", "Identificações podem estar incompletas e não comprovam autoria nem segurança.", "Comentários não determinam se uma alteração precisa de revisão."],
  "Controles de qualidade consistentes",
  ["O que determina o risco: a origem ou os efeitos da alteração?", "Qual processo deve reger as alterações deste sistema?"]
]);
add(29, [
  "¿Qué evidencia debería respaldar una corrección generada antes del despliegue?",
  ["Publicar porque la explicación parece plausible", "Obtener un caso reproducible y probar la solución", "Revisar solo componentes no relacionados", "Cerrar el issue si compila"],
  ["Una explicación plausible no confirma la causa.", "Un caso reproducible o evidencia verificada ayuda a determinar si el cambio resuelve el defecto real.", "Los cambios ajenos dificultan atribuir resultados y analizar regresiones.", "La compilación no demuestra que se haya corregido el error."],
  "Depuración basada en evidencia",
  ["¿Qué observación conecta el cambio propuesto con el fallo informado?", "¿Cómo distinguir una reparación de un cambio de código coincidente?"]
], [
  "Que evidência deve apoiar uma correção gerada antes da implantação?",
  ["Implantar porque a explicação parece plausível", "Obter um caso reproduzível e testar a correção", "Revisar apenas componentes não relacionados", "Fechar a issue se compilar"],
  ["Uma explicação plausível não confirma a causa.", "Um caso reproduzível ou evidência verificada ajuda a avaliar se a alteração corrige o defeito real.", "Alterações não relacionadas dificultam atribuição de resultados e análise de regressões.", "Compilação não comprova que o bug foi corrigido."],
  "Depuração baseada em evidências",
  ["Qual observação conecta a alteração proposta à falha relatada?", "Como distinguir uma correção de uma alteração coincidente no código?"]
]);
add(30, [
  "Un agente solicita permiso para cargar artefactos de compilación a un servicio desconocido, pero la tarea solo requiere pruebas locales. ¿Qué debería hacer quien lo opera?",
  ["Aprobar porque lo pidió el agente", "Cargar primero e inspeccionar después", "Rechazar la transferencia ajena a la tarea", "Conceder permisos amplios para más adelante"],
  ["La solicitud de una herramienta no constituye autorización suficiente.", "Revisar el destino después no revierte la divulgación.", "La transferencia no es necesaria y podría divulgar datos; conviene aplicar privilegio mínimo.", "Los permisos permanentes amplios exceden las necesidades de esta tarea."],
  "Autorización de herramientas limitada a la tarea",
  ["¿Es necesaria esta acción para el trabajo solicitado?", "¿Cuál es el permiso mínimo para completar la tarea?"]
], [
  "Um agente solicita permissão para enviar artefatos de build a um serviço desconhecido, mas a tarefa exige apenas testes locais. O que o operador deve fazer?",
  ["Aprovar porque o agente solicitou", "Enviar primeiro e inspecionar depois", "Recusar a transferência não relacionada", "Conceder permissões amplas para depois"],
  ["Uma solicitação de ferramenta não é autorização suficiente.", "Inspecionar o destino depois não desfaz a divulgação.", "A transferência não é necessária e pode divulgar dados; o privilégio mínimo é adequado.", "Permissões amplas permanentes excedem as necessidades da tarefa atual."],
  "Autorização de ferramentas limitada à tarefa",
  ["Esta ação é necessária para o trabalho solicitado?", "Qual é a permissão mínima para concluir a tarefa?"]
]);
add(31, [
  "¿Cómo debería gestionarse una afirmación de cumplimiento sin respaldo en documentación generada?",
  ["Presentar una afirmación sin respaldo como orientación informal", "Agregar lenguaje regulatorio sin evidencia que lo sustente", "Usar pruebas unitarias aprobadas como prueba de cumplimiento", "Matizar o eliminar la afirmación sin respaldo"],
  ["Los lectores pueden confiar en la documentación aunque sea generada.", "Agregar terminología no aporta evidencia.", "Las pruebas unitarias no demuestran cumplimiento normativo.", "Las afirmaciones de cumplimiento sin respaldo pueden inducir a error y deben basarse en evidencia."],
  "Afirmaciones de garantía sin respaldo",
  ["¿Existe una evaluación completa que respalde la afirmación?", "¿Qué se debería comunicar hasta que la afirmación tenga sustento?"]
], [
  "Como mantenedores devem lidar com uma afirmação de conformidade sem suporte em documentação gerada?",
  ["Apresentar uma alegação sem comprovação como orientação informal", "Adicionar linguagem regulatória sem evidências que a sustentem", "Usar testes unitários aprovados como prova de conformidade", "Qualificar ou remover a afirmação sem suporte"],
  ["Leitores podem confiar na documentação mesmo que ela tenha sido gerada.", "Adicionar terminologia não fornece evidências.", "Testes unitários não comprovam conformidade regulatória.", "Afirmações de conformidade sem suporte podem induzir ao erro e devem se basear em evidências."],
  "Afirmações de garantia sem suporte",
  ["Existe uma avaliação concluída que apoie a afirmação?", "O que deve ser comunicado até que a afirmação tenha comprovação?"]
]);
add(32, [
  "¿Qué determina si una automatización generada puede acceder a un sitio web?",
  ["Seguir las reglas de acceso y la política organizativa", "Que el código consiga hacer solicitudes exitosas", "Que el modelo describa el rastreador como inofensivo", "Que el compilador no emita advertencias"],
  ["La autorización y la política aplicable determinan si el acceso está permitido.", "La capacidad técnica no demuestra permiso.", "Las descripciones generadas no autorizan la actividad.", "El compilador no evalúa requisitos legales o de acceso."],
  "Uso autorizado de automatización generada",
  ["¿Acceder correctamente significa que la actividad está autorizada?", "¿Qué reglas rigen el acceso al servicio de destino?"]
], [
  "O que determina se uma automação gerada pode acessar um site?",
  ["Seguir as regras de acesso e a política organizacional", "O fato de o código conseguir fazer solicitações", "A descrição do modelo de que o rastreador é inofensivo", "A ausência de aviso do compilador"],
  ["Autorização e política aplicável determinam se o acesso é permitido.", "Capacidade técnica não comprova permissão.", "Descrições geradas não autorizam a atividade.", "O compilador não avalia requisitos legais ou de acesso."],
  "Uso autorizado de automação gerada",
  ["Acessar com sucesso significa que a atividade está autorizada?", "Quais regras regem o acesso ao serviço de destino?"]
]);
add(33, [
  "Un bucle de reintentos de pago generado podría ejecutarse tras un tiempo de espera agotado. ¿Qué caso de fallo es especialmente importante probar?",
  ["La página de pago usa otro color de fondo", "El cargo se realiza, pero se pierde la confirmación", "Un mensaje de registro contiene un salto de línea", "La función de reintento tiene un nombre descriptivo"],
  ["El color de presentación no prueba la corrección del pago.", "Un tiempo de espera tras un cargo exitoso puede duplicarlo si el flujo no lo contempla.", "Un salto de línea en un registro no cubre el principal modo de fallo financiero.", "El nombre no prueba la semántica de los reintentos."],
  "Revisión de modos de fallo",
  ["¿Qué pudo ocurrir en el servicio remoto antes del tiempo de espera?", "¿Cómo afectaría el reintento a una operación no idempotente?"]
], [
  "Um loop de repetição de pagamentos gerado pode executar após um tempo limite. Qual caso de falha é especialmente importante testar?",
  ["A página de pagamento usa outra cor de fundo", "A cobrança é concluída, mas a confirmação se perde", "Uma mensagem de log contém uma quebra de linha", "A função de repetição tem um nome descritivo"],
  ["Cor de apresentação não testa a correção do pagamento.", "Um tempo limite após cobrança bem-sucedida pode gerar cobrança duplicada se o fluxo não tratar o caso.", "Uma quebra de linha no log não cobre o principal modo de falha financeira.", "O nome não testa a semântica de repetição."],
  "Revisão de modos de falha",
  ["O que pode ter ocorrido no serviço remoto antes do tempo limite?", "Como repetir pode afetar uma operação não idempotente?"]
]);
add(34, [
  "Una persona desarrolladora quiere pegar en Copilot Chat una implementación propietaria de un socio, pero no ha revisado el acuerdo. ¿Qué debería hacer primero?",
  ["Pegarla porque el repositorio es privado", "Quitar el encabezado y después pegarla", "Confirmar el permiso antes de compartir", "Suponer que un fragmento breve siempre está permitido"],
  ["Un repositorio privado no autoriza por sí solo divulgar contenido a un servicio.", "Quitar un aviso de atribución no otorga permiso.", "Se deben comprobar las autorizaciones y obligaciones contractuales u organizativas antes de compartir material propietario.", "Un fragmento corto no está permitido automáticamente en todos los contextos."],
  "Uso autorizado de contexto de terceros",
  ["¿Quién posee o controla el material?", "¿Qué condiciones rigen compartirlo con un servicio externo?"]
], [
  "Um desenvolvedor quer colar uma implementação proprietária de um parceiro no Copilot Chat, mas o contrato não foi verificado. O que deve fazer primeiro?",
  ["Colar porque o repositório é privado", "Remover o cabeçalho e depois colar", "Confirmar a permissão antes de compartilhar", "Supor que um trecho curto sempre é permitido"],
  ["Um repositório privado não autoriza, por si só, divulgar conteúdo a um serviço.", "Remover um aviso de atribuição não concede permissão.", "Autorizações e obrigações contratuais ou organizacionais devem ser verificadas antes de compartilhar material proprietário.", "Um trecho curto não é automaticamente permitido em todos os contextos."],
  "Uso autorizado de contexto de terceiros",
  ["Quem possui ou controla o material?", "Quais termos regem seu compartilhamento com um serviço externo?"]
]);
add(35, [
  "¿Qué prevalece si un cambio de rendimiento elimina la validación de entradas requerida?",
  ["Dar por autorizado el código generado para reutilizarlo", "Suponer que una referencia coincidente concede permiso", "Omitir el proceso de revisión de licencias del repositorio", "Mantener la validación requerida y medir el rendimiento"],
  ["Una ganancia de velocidad medible no basta si se pierden protecciones importantes.", "El comportamiento del cliente puede variar y no debe suponerse seguro sin evidencia.", "Un comentario no aplica la validación de entradas.", "Una mejora de rendimiento no justifica incumplir requisitos de corrección o seguridad."],
  "Conservación de restricciones de seguridad",
  ["¿Qué requisitos deben seguir cumpliéndose tras la optimización?", "¿Se puede mejorar el rendimiento sin quitar la validación?"]
], [
  "O que prevalece quando uma alteração de desempenho remove a validação de entrada exigida?",
  ["Considerar liberado para reutilização o código gerado", "Supor que uma referência correspondente concede permissão", "Dispensar o processo de revisão de licenças do repositório", "Manter a validação exigida e medir o desempenho"],
  ["Ganho mensurável de velocidade não basta se proteções importantes forem perdidas.", "O comportamento do cliente pode variar e não deve ser considerado seguro sem evidência.", "Um comentário não aplica validação de entrada.", "Melhoria de desempenho não justifica violar requisitos de correção ou segurança."],
  "Preservação de restrições de segurança",
  ["Quais requisitos devem continuar verdadeiros após a otimização?", "É possível melhorar o desempenho sem remover a validação?"]
]);
add(36, [
  "¿Cómo debería evaluar una persona revisora una posible desreferencia nula si podría haber una guarda?",
  ["Comprobar si la guarda cubre cada ruta", "Descartar el resultado porque la IA puede fallar", "Aceptar el cambio sin inspeccionarlo", "Reescribir todo el módulo de inmediato"],
  ["Revisar el flujo de control permite saber si la guarda protege todos los caminos pertinentes.", "Los hallazgos de IA pueden ser falsos positivos o problemas válidos; hace falta evidencia.", "Un hallazgo debe comprobarse, no aceptarse automáticamente.", "No hace falta reescribir ampliamente antes de confirmar el comportamiento."],
  "Clasificación de hallazgos de revisión de IA",
  ["¿Qué rutas de ejecución llegan a la desreferencia?", "¿La guarda cubre todos los caminos en los que se usa el valor?"]
], [
  "Como um revisor deve avaliar uma possível desreferência nula quando uma proteção pode se aplicar?",
  ["Verificar se a proteção cobre cada caminho", "Descartar o resultado porque a IA pode errar", "Aceitar a alteração sem inspecioná-la", "Reescrever todo o módulo imediatamente"],
  ["Verificar o fluxo de controle determina se a proteção cobre todos os caminhos relevantes.", "Achados de IA podem ser falsos positivos ou problemas válidos; é preciso evidência.", "Um achado deve ser verificado, não aceito automaticamente.", "Uma reescrita ampla não é necessária antes de confirmar o comportamento."],
  "Triagem de achados de revisão por IA",
  ["Quais caminhos de execução chegam à desreferência?", "A proteção cobre todos os caminhos em que o valor é usado?"]
]);
add(37, [
  "¿Por qué conviene tratar con cautela una expresión regular universal para direcciones postales internacionales?",
  ["Suponer que la expresión regular no coincide con dígitos", "Los formatos varían según la región", "Preferir el código más corto para revisar", "Confiar en la afirmación del modelo sobre el código de país"],
  ["Las expresiones regulares pueden reconocer dígitos, pero eso no vuelve universal este uso.", "Los formatos postales varían; un patrón universal puede rechazar direcciones válidas o aceptar inválidas.", "La brevedad no garantiza legibilidad ni corrección.", "Mencionar códigos de país no demuestra cobertura de todos los formatos regionales."],
  "Cuestionamiento de resultados demasiado amplios",
  ["¿Cuánta variación existe entre las regiones previstas?", "¿Una regla universal podría excluir a personas con direcciones válidas?"]
], [
  "Por que uma expressão regular universal para endereços postais internacionais deve ser tratada com cautela?",
  ["Supor que a expressão regular não corresponde a dígitos", "Os formatos variam por região", "Preferir o código mais curto para revisar", "Confiar na afirmação do modelo sobre o código do país"],
  ["Expressões regulares podem corresponder a dígitos, mas isso não torna o uso universal.", "Formatos postais variam; um padrão universal pode rejeitar endereços válidos ou aceitar inválidos.", "Brevidade não garante legibilidade nem correção.", "Mencionar códigos de país não comprova cobertura de todos os formatos regionais."],
  "Questionamento de saídas amplas demais",
  ["Quanta variação existe entre as regiões pretendidas?", "Uma regra universal poderia excluir pessoas com endereços válidos?"]
]);
add(38, [
  "¿Qué resultados ayudan a evaluar una adopción responsable de Copilot?",
  ["Cantidad total de solicitudes enviadas", "Si cada persona aceptó al menos una sugerencia", "Calidad, tiempo, defectos y accesibilidad", "Cantidad de líneas generadas, sin considerar el retrabajo"],
  ["El volumen de solicitudes mide uso, no beneficio ni calidad.", "El número de aceptaciones por sí solo no basta para evaluar resultados.", "Una evaluación equilibrada considera resultados, calidad, riesgos y personas afectadas.", "El volumen generado puede aumentar aunque haya retrabajo o defectos."],
  "Evaluación responsable de la adopción",
  ["¿Qué resultados importan además de la actividad de la herramienta?", "¿Se puede evaluar la rapidez sin revisar también calidad e impacto?"]
], [
  "Quais resultados ajudam a avaliar a adoção responsável do Copilot?",
  ["Número total de prompts enviados", "Se cada desenvolvedor aceitou ao menos uma sugestão", "Qualidade, tempo, defeitos e acessibilidade", "Quantidade de linhas geradas, independentemente do retrabalho"],
  ["Volume de prompts mede uso, não benefício ou qualidade.", "Contagem de aceitações, sozinha, é insuficiente para avaliar resultados.", "Uma avaliação equilibrada considera resultados, qualidade, riscos e as pessoas afetadas.", "Volume gerado pode crescer mesmo com retrabalho ou defeitos."],
  "Avaliação responsável da adoção",
  ["Quais resultados importam além da atividade da ferramenta?", "É possível avaliar rapidez sem verificar também qualidade e impacto?"]
]);
add(39, [
  "¿Cómo debería responder un equipo ante un defecto grave en un cambio publicado con ayuda de Copilot?",
  ["Dejar el defecto grave porque una persona lo aprobó", "Esperar la siguiente actualización del modelo para corregirlo", "Quitar la atribución de IA y cerrar el issue sin actuar", "Aplicar el proceso de incidentes para mitigar y corregir"],
  ["La aprobación humana no vuelve inocuo un defecto grave.", "Los cambios del modelo no modifican automáticamente el software desplegado.", "Quitar la atribución no mitiga el impacto ni corrige el defecto.", "Los procesos operativos existentes se aplican a los defectos sin importar cómo se escribió el código."],
  "Responsabilidad posterior a la publicación",
  ["¿Qué riesgos inmediatos y usuarios afectados deben evaluarse?", "¿El origen del código cambia la respuesta a un incidente?"]
], [
  "Como uma equipe deve responder a um defeito grave em uma alteração publicada com ajuda do Copilot?",
  ["Manter o defeito grave porque uma pessoa aprovou", "Aguardar a próxima atualização do modelo para corrigi-lo", "Remover a atribuição de IA e fechar a issue sem agir", "Usar o processo de incidentes para mitigar e corrigir"],
  ["A aprovação humana não torna um defeito grave inofensivo.", "Mudanças no modelo não alteram automaticamente o software implantado.", "Remover a atribuição não mitiga o impacto nem corrige o defeito.", "Processos operacionais existentes se aplicam a defeitos independentemente de como o código foi escrito."],
  "Responsabilização após a publicação",
  ["Quais riscos imediatos e usuários afetados precisam ser avaliados?", "A origem do código muda a resposta a um incidente?"]
]);
add(40, [
  "Una función de clasificación generada influirá en el acceso a vivienda pública. ¿Qué evaluación es más apropiada antes del despliegue?",
  ["Evaluar impacto, fallos y vías de reclamación", "Medir la velocidad de ejecución sin comprobar los resultados", "Comparar solo con resultados históricos del mismo sistema", "Pedir al modelo que certifique que su salida es imparcial"],
  ["Las decisiones de alto impacto requieren evaluar resultados, equidad, daños y mecanismos para corregir errores.", "El rendimiento no demuestra equidad ni idoneidad.", "Las decisiones históricas pueden contener sesgos y deben examinarse.", "La afirmación del propio modelo no es evidencia de resultados imparciales."],
  "Sistemas de IA de alto impacto",
  ["¿Quién podría verse afectado de forma importante por la clasificación?", "¿Qué evidencia revelaría resultados desiguales y permitiría reclamar?"]
], [
  "Um recurso de classificação gerado influenciará o acesso à moradia pública. Qual avaliação é mais apropriada antes da implantação?",
  ["Avaliar impacto, falhas e meios de contestação", "Medir a velocidade de execução sem conferir os resultados", "Comparar apenas com resultados históricos do mesmo sistema", "Pedir ao modelo que certifique que sua saída é imparcial"],
  ["Decisões de alto impacto exigem avaliar resultados, equidade, danos e formas de corrigir erros.", "Desempenho não comprova equidade nem adequação.", "Decisões históricas podem conter vieses e precisam de análise.", "A afirmação do próprio modelo não é evidência de resultados imparciais."],
  "Sistemas de IA de alto impacto",
  ["Quem pode ser significativamente afetado pela classificação?", "Que evidência revelaria resultados desiguais e permitiria contestação?"]
]);
add(41, [
  "¿Qué integración proporciona las funciones de editor de Copilot en los IDE de JetBrains?",
  ["Plugin de GitHub Copilot", "Ejecutable de GitHub CLI", "Ejecutor de GitHub Actions", "Asistente de credenciales de Git"],
  ["El plugin integra Copilot con el editor.", "GitHub CLI administra recursos de GitHub desde una terminal.", "Los ejecutores de Actions ejecutan flujos de trabajo.", "Los asistentes de credenciales almacenan datos de autenticación de Git."],
  "Integración con el IDE",
  ["Distingue la integración del editor de las herramientas de terminal.", "¿Qué componente añade funciones dentro de un IDE?"]
], [
  "Qual integração oferece os recursos de editor do Copilot nos IDEs da JetBrains?",
  ["Plugin do GitHub Copilot", "Executável do GitHub CLI", "Executor do GitHub Actions", "Auxiliar de credenciais do Git"],
  ["O plugin integra o Copilot ao editor.", "O GitHub CLI gerencia recursos do GitHub pelo terminal.", "Executores do Actions executam fluxos de trabalho.", "Auxiliares de credenciais armazenam dados de autenticação do Git."],
  "Integração com o IDE",
  ["Diferencie integração com o editor de ferramentas de terminal.", "Qual componente adiciona recursos dentro de um IDE?"]
]);
add(42, [
  "¿Qué función de Copilot ofrece continuaciones de código mientras escribes?",
  ["Archivos de prompts", "Sugerencias en línea", "Resúmenes de pull requests", "Revisión de código"],
  ["Los archivos de prompts guardan solicitudes reutilizables.", "Las sugerencias en línea ofrecen autocompletado de código.", "Los resúmenes describen los cambios propuestos.", "La revisión proporciona comentarios sobre el código."],
  "Completado de código",
  ["Piensa dónde aparece la ayuda mientras escribes.", "Distingue escribir código de revisar cambios."]
], [
  "Qual recurso do Copilot oferece continuações de código enquanto você digita?",
  ["Arquivos de prompts", "Sugestões em linha", "Resumos de pull requests", "Revisão de código"],
  ["Arquivos de prompts guardam solicitações reutilizáveis.", "Sugestões em linha oferecem preenchimento de código.", "Resumos descrevem as alterações propostas.", "A revisão fornece comentários sobre o código."],
  "Preenchimento de código",
  ["Considere onde a assistência aparece durante a digitação.", "Diferencie escrever código de revisar alterações."]
]);
add(43, [
  "¿Cómo puedes solicitar un cambio puntual junto al código seleccionado en VS Code?",
  ["Abrir un Space compartido", "Generar un resumen de pull request", "Usar el chat en línea", "Solicitar una revisión de pull request"],
  ["Spaces organiza contexto compartido.", "Un resumen de pull request describe un conjunto de cambios.", "El chat en línea ofrece ayuda dentro del editor de código.", "La revisión evalúa cambios en un flujo de revisión."],
  "Chat en línea",
  ["Piensa en el lugar de interacción, no solo en la tarea.", "¿Qué flujo mantiene la solicitud junto al código?"]
], [
  "Como solicitar uma alteração pontual junto ao código selecionado no VS Code?",
  ["Abrir um Space compartilhado", "Gerar um resumo de pull request", "Usar o chat em linha", "Solicitar uma revisão de pull request"],
  ["Spaces organiza contexto compartilhado.", "Um resumo de pull request descreve um conjunto de alterações.", "O chat em linha oferece ajuda dentro do editor de código.", "A revisão avalia alterações em um fluxo de revisão."],
  "Chat em linha",
  ["Considere o local da interação, não apenas a tarefa.", "Qual fluxo mantém a solicitação junto ao código?"]
]);
add(44, [
  "¿Qué flujo de VS Code puede buscar archivos, editar código y ejecutar pruebas de forma iterativa?",
  ["Completado en línea", "Resumen de pull request", "Explicación de código de solo lectura", "Modo agente"],
  ["El completado propone código mientras escribes.", "Un resumen describe cambios.", "Una explicación no ejecuta por sí misma un flujo de implementación.", "El modo agente combina búsqueda, ediciones, comandos y validación."],
  "Modo agente",
  ["Busca un flujo que use herramientas además de generar texto.", "La tarea incluye modificación y validación."]
], [
  "Qual fluxo do VS Code pode localizar arquivos, editar código e executar testes iterativamente?",
  ["Preenchimento em linha", "Resumo de pull request", "Explicação de código somente leitura", "Modo agente"],
  ["O preenchimento propõe código durante a digitação.", "Um resumo descreve alterações.", "Uma explicação não executa por si só um fluxo de implementação.", "O modo agente combina descoberta, edições, comandos e validação."],
  "Modo agente",
  ["Procure um fluxo que use ferramentas além de gerar texto.", "A tarefa inclui modificação e validação."]
]);
add(45, [
  "¿Qué comando de Copilot Chat en VS Code describe cómo funciona el código existente?",
  ["/explain", "/fix", "/tests", "/fixTestFailure"],
  ["/explain solicita una explicación del código.", "/fix solicita una corrección propuesta.", "/tests solicita pruebas unitarias.", "/fixTestFailure investiga una prueba fallida."],
  "Comando de explicación en VS Code",
  ["Identifica el resultado solicitado: comprensión, ediciones o pruebas.", "El significado de los comandos depende del cliente."]
], [
  "Qual comando do Copilot Chat no VS Code descreve como o código existente funciona?",
  ["/explain", "/fix", "/tests", "/fixTestFailure"],
  ["/explain solicita uma explicação do código.", "/fix solicita uma proposta de correção.", "/tests solicita testes unitários.", "/fixTestFailure investiga um teste com falha."],
  "Comando de explicação no VS Code",
  ["Identifique o resultado solicitado: compreensão, edições ou testes.", "O significado dos comandos depende do cliente."]
]);
add(46, [
  "¿Cómo difieren las sugerencias de siguiente edición del completado limitado al cursor?",
  ["Solo generan un archivo nuevo a partir de un prompt", "Predicen cambios más allá del cursor", "Solo añaden código en el cursor", "Solo explican código existente en el chat"],
  ["Pueden modificar código existente, no solo crear archivos.", "Pueden predecir la ubicación y el contenido de un cambio posterior.", "No se limitan a añadir código en el cursor.", "Proponen cambios de código en lugar de limitarse a explicarlo."],
  "Sugerencias de siguiente edición",
  ["Compara completar texto con mantener código relacionado.", "Piensa en los cambios necesarios después de renombrar un símbolo."]
], [
  "Como as sugestões de próxima edição diferem do preenchimento limitado ao cursor?",
  ["Apenas geram um arquivo novo a partir de um prompt", "Preveem alterações além do cursor", "Apenas adicionam código no cursor", "Apenas explicam código existente no chat"],
  ["Podem modificar código existente, não apenas criar arquivos.", "Podem prever o local e o conteúdo de uma alteração posterior.", "Não se limitam a adicionar código no cursor.", "Propõem alterações de código em vez de apenas explicá-lo."],
  "Sugestões de próxima edição",
  ["Compare completar texto com manter código relacionado.", "Pense nas alterações necessárias após renomear um símbolo."]
]);
add(47, [
  "¿Qué está diseñado para ofrecer GitHub Copilot CLI?",
  ["Un servicio de alojamiento de repositorios Git", "Un reemplazo del protocolo Git", "Un agente de programación en terminal", "Un editor gráfico de fusiones de Git"],
  ["No aloja repositorios Git.", "Usa herramientas de desarrollo en lugar de reemplazar protocolos de Git.", "Copilot CLI lleva la programación conversacional y el uso de herramientas a una terminal.", "No es un editor gráfico de fusiones."],
  "Propósito de Copilot CLI",
  ["Distingue la interfaz del alojamiento de repositorios.", "Piensa en cómo interactúa el desarrollador con este producto."]
], [
  "O que o GitHub Copilot CLI foi projetado para oferecer?",
  ["Um serviço de hospedagem de repositórios Git", "Um substituto do protocolo Git", "Um agente de programação no terminal", "Um editor gráfico de mesclagens do Git"],
  ["Não hospeda repositórios Git.", "Usa ferramentas de desenvolvimento em vez de substituir protocolos do Git.", "O Copilot CLI leva programação conversacional e uso de ferramentas ao terminal.", "Não é um editor gráfico de mesclagens."],
  "Finalidade do Copilot CLI",
  ["Diferencie a interface da hospedagem de repositórios.", "Considere como o desenvolvedor interage com esse produto."]
]);
add(48, [
  "¿Qué comando de npm instala GitHub Copilot CLI independiente?",
  ["npm install -g @github/copilot-cli", "npm install -g github-copilot-chat", "npm install -g @github/gh-copilot", "npm install -g @github/copilot"],
  ["@github/copilot-cli no es el nombre de paquete documentado.", "github-copilot-chat no es el paquete de CLI documentado.", "@github/gh-copilot no es el nombre del paquete independiente.", "@github/copilot es el paquete documentado."],
  "Paquete de instalación de CLI",
  ["Usa la documentación actual de la CLI independiente.", "No deduzcas el paquete a partir de una extensión anterior."]
], [
  "Qual comando npm instala o GitHub Copilot CLI independente?",
  ["npm install -g @github/copilot-cli", "npm install -g github-copilot-chat", "npm install -g @github/gh-copilot", "npm install -g @github/copilot"],
  ["@github/copilot-cli não é o nome de pacote documentado.", "github-copilot-chat não é o pacote de CLI documentado.", "@github/gh-copilot não é o nome do pacote independente.", "@github/copilot é o pacote documentado."],
  "Pacote de instalação da CLI",
  ["Use a documentação atual da CLI independente.", "Não deduza o pacote a partir de uma extensão antiga."]
]);
add(49, [
  "¿Qué comando de terminal abre la interfaz interactiva de Copilot CLI independiente?",
  ["copilot", "copilot init", "copilot version", "copilot completion bash"],
  ["copilot inicia la interfaz interactiva.", "init inicializa instrucciones del repositorio.", "version muestra información de versión.", "completion imprime un script de autocompletado del shell."],
  "Inicio de CLI interactiva",
  ["Distingue iniciar una sesión de preparar la configuración.", "El comando solicitado debe abrir una conversación."]
], [
  "Qual comando de terminal abre a interface interativa do Copilot CLI independente?",
  ["copilot", "copilot init", "copilot version", "copilot completion bash"],
  ["copilot inicia a interface interativa.", "init inicializa instruções do repositório.", "version exibe informações de versão.", "completion imprime um script de preenchimento do shell."],
  "Inicialização da CLI interativa",
  ["Diferencie iniciar uma sessão de preparar configurações.", "O comando solicitado deve abrir uma conversa."]
]);
add(50, [
  "¿Qué invocación de Copilot CLI proporciona un prompt sin abrir la interfaz interactiva?",
  ["copilot --continue", "copilot -p \"Summarize\"", "copilot --agent reviewer", "copilot --resume"],
  ["--continue reanuda la sesión local más reciente.", "-p proporciona un prompt programático.", "--agent selecciona un agente, pero no proporciona una solicitud.", "--resume selecciona una sesión guardada."],
  "Prompt programático de CLI",
  ["Un script necesita proporcionar la solicitud como argumento.", "Distingue la ejecución de prompts de la ayuda y la configuración."]
], [
  "Qual chamada do Copilot CLI fornece um prompt sem abrir a interface interativa?",
  ["copilot --continue", "copilot -p \"Summarize\"", "copilot --agent reviewer", "copilot --resume"],
  ["--continue retoma a sessão local mais recente.", "-p fornece um prompt programático.", "--agent seleciona um agente, mas não fornece uma solicitação.", "--resume seleciona uma sessão salva."],
  "Prompt programático da CLI",
  ["Um script precisa fornecer a solicitação como argumento.", "Diferencie execução de prompts de ajuda e configuração."]
]);
add(1, [
  "¿Por qué conviene probar código generado por Copilot con resultados esperados definidos de forma independiente?",
  ["Para conocer la procedencia de los datos de entrenamiento del modelo", "Para verificar el comportamiento frente a los requisitos", "Para confirmar que el código sigue la guía de estilo preferida", "Para confirmar que el prompt se interpretó literalmente"],
  ["Las pruebas no establecen qué ejemplos de entrenamiento influyeron en el modelo.", "Los resultados esperados independientes permiten comprobar si el comportamiento cumple el requisito.", "Las comprobaciones de formato no determinan la corrección funcional.", "Interpretar literalmente una solicitud no demuestra que el resultado funcione."],
  "Validación independiente",
  ["¿Qué define el comportamiento correcto independientemente de la implementación generada?", "¿Qué comprobación podría revelar un resultado plausible pero incorrecto?"]
], [
  "Por que testar código gerado pelo Copilot com resultados esperados definidos de forma independente?",
  ["Para identificar a origem dos dados de treinamento do modelo", "Para verificar o comportamento em relação aos requisitos", "Para confirmar que o código segue o guia de estilo preferido", "Para confirmar que o prompt foi interpretado literalmente"],
  ["Testes não estabelecem quais exemplos de treinamento influenciaram o modelo.", "Resultados esperados independentes verificam se o comportamento atende ao requisito.", "Verificações de formatação não determinam a correção funcional.", "Interpretar literalmente um pedido não prova que o resultado funciona."],
  "Validação independente",
  ["O que define o comportamento correto independentemente da implementação gerada?", "Qual verificação poderia revelar um resultado plausível, mas incorreto?"]
]);
add(2, [
  "Un ejemplo generado llama a un método que no existe en la versión instalada del paquete. ¿Qué debería verificar primero la persona desarrolladora?",
  ["El método aparece en comentarios y ejemplos generados", "Otro modelo repite el mismo nombre del método", "La documentación de la API para la versión del paquete", "Un método provisional permite compilar el código"],
  ["Un comentario puede repetir un nombre inventado o desactualizado.", "Que un modelo repita la respuesta no es una confirmación independiente.", "La documentación de la versión permite comprobar si la API existe para la dependencia utilizada.", "Un método provisional puede ocultar la funcionalidad ausente en vez de verificar la API."],
  "Nombres de API alucinados",
  ["¿Qué fuente documenta la interfaz real de la dependencia instalada?", "¿Repetir un nombre demuestra que el método existe?"]
], [
  "Um exemplo gerado chama um método ausente na versão instalada do pacote. O que o desenvolvedor deve verificar primeiro?",
  ["O método aparece em comentários e exemplos gerados", "Outro modelo repete o mesmo nome de método", "A documentação da API específica da versão do pacote", "Um método provisório permite compilar o código"],
  ["Um comentário pode repetir um nome inventado ou desatualizado.", "A repetição por outro modelo não é confirmação independente.", "A documentação da versão permite verificar se a API existe para a dependência usada.", "Um método provisório pode ocultar o comportamento ausente em vez de verificar a API."],
  "Nomes de API alucinados",
  ["Qual fonte documenta a interface real da dependência instalada?", "Repetir um nome comprova que o método existe?"]
]);
add(3, [
  "¿Qué técnica de revisión comprueba mejor una función generada que analiza datos de solicitudes no confiables?",
  ["Comparar nombres con la guía de estilo", "Pedir a Copilot que certifique la función", "Comprobar si la función tiene un comentario", "Seguir los datos no confiables por la función"],
  ["La coherencia de nombres no muestra si los datos no confiables se manejan de forma segura.", "Una garantía generada no constituye una evaluación de seguridad.", "Los comentarios no demuestran propiedades de seguridad en tiempo de ejecución.", "Seguir el flujo de datos ayuda a detectar un manejo inseguro en los límites de confianza."],
  "Revisión de seguridad del código generado",
  ["¿Dónde entra el dato no confiable y dónde puede afectar el comportamiento?", "¿Qué revisión considera el flujo de datos en vez de la presentación?"]
], [
  "Qual técnica de revisão verifica melhor uma função gerada que analisa dados de solicitação não confiáveis?",
  ["Comparar nomes com o guia de estilo", "Pedir ao Copilot que certifique a função", "Verificar se a função tem um comentário", "Rastrear dados não confiáveis pela função"],
  ["Consistência de nomes não mostra se dados não confiáveis são tratados com segurança.", "Uma garantia gerada não é uma avaliação de segurança.", "Comentários não comprovam propriedades de segurança em tempo de execução.", "Rastrear o fluxo de dados ajuda a revelar tratamento inseguro nos limites de confiança."],
  "Revisão de segurança do código gerado",
  ["Onde o dado não confiável entra e onde pode afetar o comportamento?", "Qual revisão considera o fluxo de dados em vez da apresentação?"]
]);
add(4, [
  "¿Qué principio de IA responsable se ocupa más directamente de si un sistema perjudica a un grupo de personas?",
  ["Equidad", "Transparencia", "Confiabilidad", "Rendición de cuentas"],
  ["La equidad se ocupa de cómo los resultados afectan a distintas personas y grupos.", "La transparencia se ocupa de comunicar el funcionamiento y los límites del sistema.", "La confiabilidad se ocupa de la operación consistente en condiciones previstas.", "La rendición de cuentas se ocupa de la responsabilidad por decisiones y resultados."],
  "Equidad",
  ["¿Qué principio se centra en cómo se distribuyen beneficios y daños?", "Distingue la equidad de resultados de la divulgación y la responsabilidad operativa."]
], [
  "Qual princípio de IA responsável trata mais diretamente de um sistema prejudicar um grupo de pessoas?",
  ["Equidade", "Transparência", "Confiabilidade", "Responsabilização"],
  ["Equidade trata de como os resultados afetam diferentes pessoas e grupos.", "Transparência trata de comunicar como o sistema funciona e seus limites.", "Confiabilidade trata da operação consistente nas condições esperadas.", "Responsabilização trata da responsabilidade por decisões e resultados."],
  "Equidade",
  ["Qual princípio se concentra na distribuição de benefícios e danos?", "Diferencie equidade de resultados de divulgação e responsabilidade operacional."]
]);
add(5, [
  "¿Qué objetivo de diseño es central para la inclusión al crear una interfaz con ayuda de IA?",
  ["Optimizar solo para el tamaño de dispositivo más común", "Admitir distintas capacidades y necesidades de acceso", "Exigir que todas las personas usen un mouse", "Usar el mismo tema visual en cada página"],
  ["El tamaño de pantalla más común no representa las necesidades de todas las personas.", "El diseño inclusivo considera distintas capacidades y formas de interactuar con un producto.", "La interacción solo con mouse puede excluir a quienes usan teclado o tecnologías de asistencia.", "La coherencia visual por sí sola no garantiza el acceso."],
  "Inclusión",
  ["¿Qué personas podrían no completar el flujo con la interacción propuesta?", "Considera más que la apariencia visual y un solo método de entrada."]
], [
  "Qual objetivo de design é central para a inclusão ao criar uma interface com ajuda de IA?",
  ["Otimizar somente para o tamanho de dispositivo mais comum", "Atender diferentes habilidades e necessidades de acesso", "Exigir que todas as pessoas usem um mouse", "Usar o mesmo tema visual em todas as páginas"],
  ["O tamanho de tela mais comum não representa as necessidades de todas as pessoas.", "O design inclusivo considera diferentes habilidades e formas de interagir com um produto.", "A interação somente com mouse pode excluir quem usa teclado ou tecnologia assistiva.", "Consistência visual, por si só, não garante acesso."],
  "Inclusão",
  ["Quais pessoas talvez não consigam concluir o fluxo com a interação proposta?", "Considere mais que a aparência visual e um único método de entrada."]
]);
add(6, [
  "¿Quién sigue siendo responsable de aprobar y operar un cambio escrito con ayuda de Copilot?",
  ["El modelo que produjo la sugerencia", "Solo quien escribió la solicitud", "El equipo y la organización responsables", "La persona mantenedora del paquete nombrado en el código"],
  ["Un modelo no puede asumir la responsabilidad humana de publicación o propiedad del sistema.", "La responsabilidad incluye revisión y operación, no solo la solicitud.", "La ayuda de IA no transfiere la responsabilidad organizativa ni operativa.", "La persona mantenedora de una dependencia no es responsable por ello de publicar este sistema."],
  "Rendición de cuentas",
  ["¿Quién tiene autoridad sobre el sistema y su publicación?", "¿La herramienta que sugirió código asume el impacto en producción?"]
], [
  "Quem continua responsável por aprovar e operar uma alteração escrita com ajuda do Copilot?",
  ["O modelo que produziu a sugestão", "Somente quem escreveu o prompt", "A equipe e a organização responsáveis", "O mantenedor do pacote mencionado no código"],
  ["Um modelo não pode assumir a responsabilidade humana pela publicação ou propriedade do sistema.", "A responsabilidade inclui revisão e operação, não apenas o prompt.", "A ajuda de IA não transfere a responsabilidade organizacional nem operacional.", "O mantenedor de uma dependência não se torna responsável pela publicação deste sistema."],
  "Responsabilização",
  ["Quem tem autoridade sobre o sistema e sua publicação?", "A ferramenta que sugeriu o código assume o impacto em produção?"]
]);
add(7, [
  "¿Cuál es el propósito de la transparencia cuando un equipo usa desarrollo asistido por IA?",
  ["Prometer que las salidas siempre son correctas", "Reemplazar la revisión por una transcripción", "Publicar todas las conversaciones", "Hacer comprensibles el uso y sus límites"],
  ["La divulgación no garantiza la corrección.", "Los registros de solicitudes no reemplazan la revisión del cambio resultante.", "La transparencia no exige exponer conversaciones confidenciales.", "La transparencia permite entender cómo se usa la IA y qué puede y no puede hacer."],
  "Transparencia",
  ["¿Qué deberían poder entender quienes revisan o reciben el sistema?", "¿Divulgar el uso elimina la necesidad de examinar el resultado?"]
], [
  "Qual é o propósito da transparência quando uma equipe usa desenvolvimento assistido por IA?",
  ["Prometer que as saídas sempre são corretas", "Substituir a revisão por uma transcrição", "Publicar todas as conversas", "Tornar compreensíveis o uso e seus limites"],
  ["A divulgação não garante correção.", "Registros de prompts não substituem a revisão da alteração resultante.", "Transparência não exige expor conversas confidenciais.", "Transparência permite entender como a IA é usada e o que pode ou não fazer."],
  "Transparência",
  ["O que revisores ou usuários afetados devem conseguir entender?", "Divulgar o uso elimina a necessidade de examinar o resultado?"]
]);
add(8, [
  "Un comando de shell generado eliminaría un directorio de forma recursiva. ¿Qué comprobación es más importante antes de ejecutarlo?",
  ["Inspeccionar el destino y probar en un ámbito limitado", "Aprobar el cambio generado sin inspeccionar sus modificaciones", "Ejecutar pruebas amplias directamente en producción", "Confiar únicamente en el resumen de finalización del agente"],
  ["Inspeccionar el destino real del comando y limitar su ámbito reduce errores destructivos.", "La explicación puede no describir con precisión los efectos del comando.", "Un directorio de trabajo amplio aumenta el impacto potencial.", "La aprobación general y permanente elimina un punto útil de revisión."],
  "Uso seguro de comandos generados",
  ["¿Qué recursos podría afectar el comando si sus supuestos son incorrectos?", "¿Se puede probar primero con datos desechables?"]
], [
  "Um comando de shell gerado removeria um diretório recursivamente. Qual verificação é mais importante antes da execução?",
  ["Inspecionar o destino e testar em escopo limitado", "Aprovar a alteração gerada sem inspecionar suas mudanças", "Executar testes amplos diretamente em produção", "Confiar apenas no resumo de conclusão do agente"],
  ["Inspecionar o destino real do comando e limitar o escopo reduz erros destrutivos.", "A explicação pode não descrever com precisão os efeitos do comando.", "Um diretório de trabalho amplo aumenta o impacto potencial.", "A aprovação geral e permanente elimina um ponto útil de revisão."],
  "Uso seguro de comandos gerados",
  ["Quais recursos o comando poderia afetar se as suposições estiverem erradas?", "É possível testá-lo primeiro com dados descartáveis?"]
]);
add(9, [
  "Una persona desarrolladora quiere ayuda para depurar un analizador de registros, pero un ejemplo contiene un token de acceso y datos de clientes. ¿Qué debería compartir?",
  ["Un registro completo de producción", "Un ejemplo mínimo y saneado", "Un token de acceso parcialmente oculto", "Una captura con datos de clientes"],
  ["Un registro de producción completo incluye información sensible innecesaria.", "Un ejemplo mínimo saneado conserva la estructura útil y reduce la exposición.", "Ocultar parcialmente un token puede dejarlo utilizable o identificable.", "Una captura de pantalla no elimina el contenido sensible."],
  "Minimización de datos",
  ["¿Qué campos se necesitan para reproducir el comportamiento del análisis?", "¿Puede el ejemplo conservar la estructura sin identificadores ni secretos?"]
], [
  "Um desenvolvedor quer ajuda para depurar um analisador de logs, mas uma amostra contém um token de acesso e dados de clientes. O que deve compartilhar?",
  ["Um log completo de produção", "Um exemplo mínimo e sanitizado", "Um token de acesso parcialmente oculto", "Uma captura com dados de clientes"],
  ["Um log completo de produção inclui informações confidenciais desnecessárias.", "Um exemplo mínimo sanitizado preserva a estrutura útil e reduz a exposição.", "Mascarar parcialmente um token pode deixá-lo utilizável ou identificável.", "Uma captura de tela não remove o conteúdo confidencial."],
  "Minimização de dados",
  ["Quais campos são necessários para reproduzir o comportamento da análise?", "O exemplo pode preservar a estrutura sem identificadores ou segredos?"]
]);
add(10, [
  "¿Qué validación es apropiada para código generado que calcula dosis de medicamentos?",
  ["Comprobar únicamente si el código generado se analiza", "Pedir al modelo que verifique el resultado aritmético", "Usar revisión experta y pruebas centradas en riesgos", "Probar solo el caso de entrada más habitual"],
  ["La sintaxis no valida el significado clínico ni los casos límite.", "La autoconfirmación del modelo no es evidencia independiente.", "Los cálculos de alto impacto requieren revisión independiente y validación centrada en riesgos.", "Los casos poco frecuentes pueden tener consecuencias graves y requieren cobertura adecuada."],
  "Validación proporcional al riesgo",
  ["¿Qué consecuencia tendría un error de cálculo plausible?", "¿Qué experiencia de dominio y condiciones límite son pertinentes?"]
], [
  "Qual validação é apropriada para código gerado que calcula doses de medicamentos?",
  ["Verificar apenas se o código gerado é analisado", "Pedir ao modelo que confira o resultado aritmético", "Usar revisão especializada e testes focados em riscos", "Testar somente o caso de entrada mais comum"],
  ["Verificação de sintaxe não valida o significado clínico nem casos-limite.", "A autoconfirmação do modelo não é evidência independente.", "Cálculos de alto impacto exigem revisão independente e validação focada em riscos.", "Casos raros podem ter consequências graves e exigem cobertura adequada."],
  "Validação proporcional ao risco",
  ["Qual seria a consequência de um erro de cálculo plausível?", "Quais conhecimentos de domínio e condições-limite são relevantes?"]
]);
add(11, [
  "¿Cómo se deben usar los registros de encuesta sintéticos generados con Copilot?",
  ["Mezclar registros sintéticos sin etiquetas", "Usar nombres y fechas realistas", "Informar una encuesta generada más amplia", "Etiquetar y separar los registros sintéticos"],
  ["Los registros sintéticos sin marcar pueden distorsionar el análisis.", "Los identificadores realistas aumentan la confusión y los riesgos de privacidad.", "Los registros generados no aumentan el número de personas encuestadas.", "Etiquetar y separar claramente evita confundir ejemplos sintéticos con datos observados."],
  "Datos sintéticos responsables",
  ["¿Cómo distinguirán los lectores los ejemplos simulados de las observaciones?", "¿Se pueden excluir los datos sintéticos de la evidencia usada para conclusiones?"]
], [
  "Como registros de pesquisa sintéticos gerados pelo Copilot devem ser usados?",
  ["Misturar registros sintéticos sem rótulos", "Usar nomes e datas realistas", "Relatar uma pesquisa sintética maior", "Identificar e separar os registros sintéticos"],
  ["Registros sintéticos sem identificação podem distorcer a análise.", "Identificadores realistas aumentam o risco de confusão ou privacidade.", "Registros gerados não aumentam o número de pessoas pesquisadas.", "Identificação e separação claras evitam confundir exemplos sintéticos com dados observados."],
  "Dados sintéticos responsáveis",
  ["Como os leitores distinguirão exemplos simulados de observações?", "É possível manter dados sintéticos fora das evidências usadas nas conclusões?"]
]);
add(12, [
  "¿Qué debería guiar la elección de un diseño de almacenamiento de contraseñas sugerido por Copilot?",
  ["Usar un método probado de hash de contraseñas", "Diseñar un algoritmo personalizado para el hash de contraseñas", "Guardar la clave secreta junto a la base de datos", "Elegir la implementación disponible más breve"],
  ["Las prácticas establecidas de hash de contraseñas y una revisión actual son preferibles a un diseño no validado.", "Una explicación detallada no demuestra solidez criptográfica.", "Guardar la clave junto a los datos debilita la protección y el cifrado no equivale al hash de contraseñas.", "La brevedad del código no es un criterio de seguridad."],
  "Revisión de criptografía",
  ["¿Qué propiedad se necesita al guardar contraseñas para verificarlas?", "¿El algoritmo propuesto está revisado y es adecuado para este propósito?"]
], [
  "O que deve orientar a escolha de um projeto de armazenamento de senhas sugerido pelo Copilot?",
  ["Usar um método validado de hash de senhas", "Projetar um algoritmo personalizado de hash de senhas", "Guardar a chave secreta junto ao banco de senhas", "Escolher a implementação disponível mais curta"],
  ["Práticas estabelecidas de hash de senhas e revisão atual são preferíveis a um projeto não validado.", "Uma explicação detalhada não comprova solidez criptográfica.", "Armazenar a chave junto aos dados enfraquece a proteção e criptografia não é hash de senhas.", "Brevidade do código não é critério de segurança."],
  "Revisão de criptografia",
  ["Qual propriedade é necessária ao armazenar senhas para verificá-las?", "O algoritmo proposto foi revisado e é adequado para essa finalidade?"]
]);
add(13, [
  "¿Cómo se debe verificar una afirmación de que el código generado es seguro para concurrencia?",
  ["La confianza expresada en la explicación", "Análisis de concurrencia y pruebas del acceso al estado compartido", "La cantidad de comentarios que describen la caché", "La coherencia de mayúsculas en los nombres de funciones"],
  ["La confianza expresada en texto generado no es una prueba.", "La seguridad del estado compartido depende del acceso concurrente y la sincronización reales.", "Los comentarios no imponen acceso concurrente seguro.", "El estilo de nombres no demuestra seguridad entre hilos."],
  "Explicaciones y evidencia",
  ["¿Qué ocurre cuando varias operaciones acceden al mismo estado?", "¿Qué evidencia prueba el comportamiento subyacente en vez de la afirmación?"]
], [
  "Como uma afirmação de que o código gerado é seguro para concorrência deve ser verificada?",
  ["A confiança expressa na explicação", "Análise de concorrência e testes de acesso ao estado compartilhado", "A quantidade de comentários que descrevem o cache", "A consistência de maiúsculas nos nomes das funções"],
  ["Confiança em texto gerado não é prova.", "A segurança do estado compartilhado depende do acesso concorrente e da sincronização reais.", "Comentários não impõem acesso concorrente seguro.", "Estilo de nomes não comprova segurança entre threads."],
  "Explicações e evidências",
  ["O que ocorre quando várias operações acessam o mesmo estado?", "Qual evidência testa o comportamento subjacente em vez da afirmação?"]
]);
add(14, [
  "¿Qué acción favorece el uso responsable de un algoritmo generado?",
  ["Suponer que el algoritmo funciona para todos los grupos", "Confiar únicamente en la explicación generada", "Entender sus supuestos y modos de fallo", "Probar solo los casos de entrada más sencillos"],
  ["La validez sintáctica no demuestra idoneidad ni mantenibilidad.", "El modelo no puede asumir la responsabilidad operativa.", "Comprender los supuestos y modos de fallo es necesario para un mantenimiento responsable.", "Las pruebas ayudan a detectar cambios de comportamiento y no deben eliminarse por ese motivo."],
  "Comprensión y supervisión humana",
  ["¿Qué necesita saber el equipo para diagnosticar o cambiar el algoritmo de forma segura?", "¿Compilar sustituye la comprensión de sus modos de fallo?"]
], [
  "Qual ação favorece o uso responsável de um algoritmo gerado?",
  ["Supor que o algoritmo funciona para todos os grupos", "Confiar apenas na explicação gerada", "Entender suas suposições e modos de falha", "Testar somente os casos de entrada mais simples"],
  ["Validade sintática não comprova adequação nem capacidade de manutenção.", "O modelo não pode assumir responsabilidade operacional.", "Entender suposições e modos de falha é necessário para manutenção responsável.", "Testes ajudam a detectar mudanças de comportamento e não devem ser removidos por esse motivo."],
  "Compreensão e supervisão humana",
  ["O que a equipe precisa saber para diagnosticar ou alterar o algoritmo com segurança?", "Compilar substitui entender os modos de falha?"]
]);
add(15, [
  "¿Qué comprobaciones ayudan a evaluar una dependencia desconocida recomendada por Copilot?",
  ["Instalar un paquete de nombre parecido", "Confiar solo en el número de versión", "Copiar los metadatos sin verificarlos", "Verificar su identidad y mantenimiento"],
  ["Los nombres similares pueden corresponder a paquetes ajenos o maliciosos.", "Un número de versión no verifica la legitimidad ni la idoneidad del paquete.", "Los metadatos sin revisar no establecen la confianza en el paquete.", "Verificar identidad y mantenimiento ayuda a evaluar riesgos de dependencia y cadena de suministro."],
  "Revisión de dependencias sugeridas",
  ["¿Qué confirma que el paquete es el proyecto previsto y que se mantiene?", "¿Podrían ser engañosos un nombre o una versión plausibles?"]
], [
  "Quais verificações ajudam a avaliar uma dependência desconhecida recomendada pelo Copilot?",
  ["Instalar um pacote de nome semelhante", "Confiar apenas no número da versão", "Copiar os metadados sem verificá-los", "Verificar sua identidade e manutenção"],
  ["Nomes parecidos podem pertencer a pacotes não relacionados ou maliciosos.", "Um número de versão não verifica legitimidade nem adequação do pacote.", "Metadados não inspecionados não estabelecem confiança no pacote.", "Verificar identidade e manutenção ajuda a avaliar riscos de dependência e cadeia de suprimentos."],
  "Revisão de dependências sugeridas",
  ["O que confirma que o pacote é o projeto pretendido e está mantido?", "Um nome ou uma versão plausíveis podem induzir ao erro?"]
]);
add(16, [
  "¿Cómo debe tratar un agente las instrucciones insertadas en contenido no confiable del repositorio?",
  ["Como contenido no confiable, no como autorización para divulgar datos", "Como instrucción de mayor prioridad por estar en el repositorio", "Como consentimiento de todas las personas propietarias de las credenciales", "Como prueba de que la tarea requiere cargar las credenciales"],
  ["El texto del repositorio no autoriza divulgar datos ni reemplaza la tarea solicitada.", "La ubicación de un archivo no vuelve confiables ni prioritarias sus instrucciones.", "Un archivo del repositorio no puede dar consentimiento por quienes poseen las credenciales.", "La instrucción no es una autorización normal para la tarea y crea riesgo de divulgación."],
  "Instrucciones no confiables en el contexto",
  ["¿El contenido proviene de una fuente de instrucciones confiable?", "¿Qué autorización se necesitaría para enviar secretos a otro lugar?"]
], [
  "Como um agente deve tratar instruções inseridas em conteúdo não confiável do repositório?",
  ["Como conteúdo não confiável, não como autorização para divulgar dados", "Como instrução de prioridade maior por estar no repositório", "Como consentimento de todos os proprietários das credenciais", "Como prova de que a tarefa exige enviar as credenciais"],
  ["O texto do repositório não autoriza divulgação nem substitui a tarefa solicitada.", "A localização de um arquivo não torna suas instruções confiáveis ou prioritárias.", "Um arquivo do repositório não pode consentir em nome de quem possui as credenciais.", "A instrução não é autorização normal para a tarefa e cria risco de divulgação."],
  "Instruções não confiáveis no contexto",
  ["O conteúdo vem de uma fonte confiável de instruções?", "Que autorização seria necessária para enviar segredos para fora?"]
]);
add(17, [
  "¿Qué afirmación describe mejor el papel de Copilot en una revisión de pull request?",
  ["Permitir que la herramienta sustituya la aprobación humana del cambio", "Ayudar en la revisión; las personas evalúan hallazgos", "Tomar una revisión automatizada sin alertas como prueba de seguridad", "Aceptar todos los hallazgos sin verificarlos"],
  ["La exigencia de aprobación humana depende del proceso del repositorio o la organización.", "La revisión con IA puede ayudar, pero las personas siguen evaluando el parche y los hallazgos.", "Una revisión puede pasar por alto defectos y no demuestra que estén ausentes.", "Los comentarios deben comprobarse frente al código y su contexto."],
  "Revisión de código complementaria",
  ["¿El resultado de la revisión es una ayuda o una prueba de corrección?", "¿Quién aplica los requisitos de aprobación del repositorio?"]
], [
  "Qual afirmação descreve melhor o papel do Copilot na revisão de pull request?",
  ["Permitir que a ferramenta substitua a aprovação humana da alteração", "Apoiar a revisão; pessoas avaliam os achados", "Tratar uma revisão automatizada sem alertas como prova de segurança", "Aceitar todos os achados sem verificá-los"],
  ["A exigência de aprovação humana depende do processo do repositório ou da organização.", "A revisão por IA pode ajudar, mas as pessoas continuam avaliando o patch e os achados.", "Uma revisão pode deixar passar defeitos e não prova que estejam ausentes.", "Os comentários devem ser verificados em relação ao código e ao contexto."],
  "Revisão de código complementar",
  ["O resultado da revisão é auxílio ou prova de correção?", "Quem aplica os requisitos de aprovação do repositório?"]
]);
add(18, [
  "¿Qué evidencia respalda adoptar una reescritura de rendimiento sugerida?",
  ["Preferir la implementación más breve sin probar cargas reales", "Confiar en la afirmación del modelo sobre la calidad", "Medir cargas reales y posibles regresiones", "Medir solo las cargas de producción más sencillas"],
  ["Menos líneas no implican mejor rendimiento.", "Una afirmación del modelo no es una medición.", "Las mediciones representativas y las comprobaciones de regresión respaldan una optimización basada en evidencia.", "Una prueba limitada al caso sencillo puede ocultar costos en cargas reales."],
  "Optimización basada en evidencia",
  ["¿Qué carga de trabajo representa el uso real?", "¿Cómo se medirán el rendimiento y las regresiones de comportamiento?"]
], [
  "Que evidência apoia a adoção de uma reescrita de desempenho sugerida?",
  ["Preferir a implementação mais curta sem testar cargas reais", "Confiar na afirmação do modelo sobre a qualidade", "Medir cargas reais e possíveis regressões", "Medir apenas as cargas de produção mais simples"],
  ["Menos linhas não implicam melhor desempenho.", "Uma afirmação do modelo não é uma medição.", "Benchmarks representativos e verificações de regressão apoiam otimização baseada em evidências.", "Um benchmark limitado ao caso fácil pode ocultar custos em cargas reais."],
  "Otimização baseada em evidências",
  ["Qual carga de trabalho representa o uso real?", "Como serão medidos o desempenho e as regressões de comportamento?"]
]);
add(19, [
  "¿Qué demuestra la variación entre resultados generativos repetidos?",
  ["Considerar más fiable la primera salida", "Suponer que el modelo detectó el cambio", "Tomar una corrección posterior como prueba", "Las salidas varían; evalúa cada implementación"],
  ["El orden de los intentos no demuestra confiabilidad.", "Las diferencias por sí solas no muestran que cambiaran los requisitos.", "Una respuesta posterior no necesariamente corrige la anterior.", "Los sistemas generativos pueden variar ante solicitudes similares; ninguna respuesta es correcta automáticamente."],
  "Variabilidad generativa",
  ["¿Qué se puede inferir únicamente de las salidas distintas?", "¿Qué evidencia determina qué implementación satisface los requisitos?"]
], [
  "O que a variação entre saídas generativas repetidas demonstra?",
  ["Considerar a primeira saída mais confiável", "Supor que o modelo detectou a mudança", "Tratar uma correção posterior como prova", "As saídas variam; avalie cada implementação"],
  ["A ordem das tentativas não comprova confiabilidade.", "Saídas diferentes, por si só, não mostram que os requisitos mudaram.", "Uma resposta posterior não necessariamente corrige a anterior.", "Sistemas generativos podem variar diante de prompts semelhantes; nenhuma resposta é automaticamente correta."],
  "Variabilidade generativa",
  ["O que pode ser inferido apenas de saídas diferentes?", "Que evidência determina qual implementação atende aos requisitos?"]
]);
add(20, [
  "¿Qué debería cambiar al preparar para producción un prototipo generado con Copilot?",
  ["Aplicar controles de seguridad y publicación", "Mantener los supuestos del prototipo al preparar la demostración de producción", "Reemplazar la revisión requerida por una transcripción del agente", "Tomar resultados con datos de muestra como prueba de publicación"],
  ["El uso en producción requiere validación acorde con los riesgos y requisitos del sistema.", "Una demostración no verifica condiciones operativas ni fallos.", "Una transcripción no satisface los controles habituales de revisión y publicación.", "Los datos de ejemplo no demuestran el comportamiento en producción."],
  "Preparación para producción",
  ["¿Qué condiciones operativas no se probaron en la demostración?", "¿Qué criterios de publicación se aplican a todo cambio de producción?"]
], [
  "O que deve mudar quando um protótipo gerado com o Copilot é preparado para produção?",
  ["Aplicar verificações de segurança e lançamento", "Manter as suposições do protótipo ao preparar uma demonstração de produção", "Substituir a revisão exigida por uma transcrição do agente", "Tratar resultados de dados de amostra como evidência de lançamento"],
  ["O uso em produção exige validação adequada aos riscos e requisitos do sistema.", "Uma demonstração não verifica condições operacionais nem falhas.", "Uma transcrição não satisfaz os controles normais de revisão e lançamento.", "Dados de amostra não comprovam o comportamento em produção."],
  "Preparação para produção",
  ["Quais condições operacionais não foram exercitadas na demonstração?", "Quais critérios de lançamento se aplicam a toda alteração de produção?"]
]);
add(21, [
  "¿Qué debería determinar el aviso de licencia publicado de un proyecto?",
  ["Suponer que el código generado no tiene restricciones", "La licencia del proyecto y una revisión jurídica", "Tomar la atribución como licencia", "Omitir la revisión porque el cambio es pequeño"],
  ["La práctica común no establece los términos de licencia de este proyecto.", "La licencia elegida para el proyecto y una revisión jurídica apropiada son la base pertinente.", "La licencia del editor no rige la licencia del proyecto.", "Un aviso ajeno puede no corresponder a los derechos u obligaciones del proyecto."],
  "Revisión de avisos legales",
  ["¿Qué licencia se aplica a la distribución de este proyecto?", "¿Un borrador genérico establece los términos legales correctos?"]
], [
  "O que deve determinar o aviso de licença publicado de um projeto?",
  ["Supor que o código gerado não tem restrições", "A licença do projeto e uma revisão jurídica", "Tratar atribuição como concessão de licença", "Dispensar a revisão porque a alteração é pequena"],
  ["Prática comum não estabelece os termos de licença deste projeto.", "A licença escolhida para o projeto e uma revisão jurídica adequada são a base pertinente.", "A licença do editor não rege a licença do projeto.", "Um aviso alheio pode não corresponder aos direitos ou obrigações do projeto."],
  "Revisão de avisos legais",
  ["Qual licença se aplica à distribuição deste projeto?", "Um rascunho genérico estabelece os termos legais corretos?"]
]);
add(22, [
  "¿Cómo se debe verificar un resumen de Copilot sobre la cronología de una interrupción?",
  ["Tomar un resumen generado y fluido como cronología autorizada", "Eliminar la incertidumbre al presentar el informe generado", "Verificar la cronología con registros primarios", "Reemplazar enlaces a registros primarios por un resumen"],
  ["Una redacción fluida puede incluir detalles sin respaldo.", "Eliminar incertidumbre puede convertir evidencia incompleta en una afirmación falsa.", "La verificación con registros primarios mantiene exactitud y trazabilidad.", "Los registros de origen permiten verificar la narrativa."],
  "Validación de resúmenes de incidentes",
  ["¿Qué registros establecen qué ocurrió y cuándo?", "¿Cómo se debe expresar la incertidumbre si la evidencia está incompleta?"]
], [
  "Como um resumo do Copilot sobre a linha do tempo de uma interrupção deve ser verificado?",
  ["Tratar um resumo gerado e fluente como linha do tempo oficial", "Remover a incerteza ao apresentar o relatório gerado", "Conferir a linha do tempo com registros primários", "Substituir links de registros primários por um resumo"],
  ["Uma redação fluente ainda pode conter detalhes sem suporte.", "Remover incertezas pode transformar evidência incompleta em afirmação falsa.", "A conferência com registros primários preserva exatidão e rastreabilidade.", "Registros de origem permitem verificar a narrativa."],
  "Validação de resumos de incidentes",
  ["Quais registros estabelecem o que aconteceu e quando?", "Como a incerteza deve ser apresentada quando a evidência está incompleta?"]
]);
add(23, [
  "¿Qué debería abordar la revisión cuando los registros generados contienen encabezados de autorización?",
  ["Conservar valores confidenciales en los encabezados de solicitud y respuesta", "Retener indefinidamente el registro de diagnóstico completo", "Publicar todos los encabezados en un issue visible públicamente", "Ocultar secretos y minimizar los datos registrados"],
  ["Los registros pueden contener datos sensibles y conservarse o consultarse ampliamente.", "La retención indefinida aumenta la exposición y excede la necesidad habitual de diagnóstico.", "Los informes públicos no deben divulgar secretos de autorización.", "Eliminar secretos y minimizar los datos registrados reduce la exposición."],
  "Revisión de registros sensibles",
  ["¿Qué información se necesita para diagnosticar el fallo?", "¿El valor registrado podría autenticar a alguien o revelar datos privados?"]
], [
  "O que a revisão de código deve abordar quando logs gerados contêm cabeçalhos de autorização?",
  ["Manter valores confidenciais nos cabeçalhos da solicitação e da resposta", "Reter indefinidamente o log de diagnóstico completo", "Publicar todos os cabeçalhos em uma issue visível publicamente", "Ocultar segredos e minimizar os dados registrados"],
  ["Logs podem conter dados confidenciais e ser retidos ou acessados amplamente.", "Retenção indefinida aumenta a exposição e excede a necessidade normal de diagnóstico.", "Relatos públicos não devem divulgar segredos de autorização.", "Remover segredos e minimizar dados registrados reduz a exposição."],
  "Revisão de logs confidenciais",
  ["Quais informações são necessárias para diagnosticar a falha?", "O valor registrado poderia autenticar alguém ou revelar dados privados?"]
]);
add(24, [
  "¿Qué fuente rige una regla cuando una explicación generada contradice requisitos aprobados?",
  ["El requisito aprobado", "Usar una explicación recién generada", "Preferir el menor número de cambios", "Adivinar a partir de productos similares"],
  ["Los requisitos aprobados rigen salvo que una persona autorizada los aclare o cambie.", "Una explicación generada no reemplaza un requisito autorizado.", "La comodidad de implementación no establece la corrección del negocio.", "La similitud con otros productos no define la política de este sistema."],
  "Autoridad de los requisitos",
  ["¿Qué fuente está aprobada para definir la regla de negocio?", "¿Quién puede resolver requisitos contradictorios o ambiguos?"]
], [
  "Qual fonte rege uma regra quando uma explicação gerada contradiz requisitos aprovados?",
  ["O requisito aprovado", "Usar uma explicação recém-gerada", "Preferir o menor número de alterações", "Deduzir com base em produtos semelhantes"],
  ["Requisitos aprovados prevalecem, a menos que uma pessoa autorizada os esclareça ou altere.", "Uma explicação gerada não substitui um requisito autorizado.", "Conveniência de implementação não estabelece correção de negócio.", "Semelhança com outros produtos não define a política deste sistema."],
  "Autoridade dos requisitos",
  ["Qual fonte está aprovada para definir a regra de negócio?", "Quem pode resolver requisitos conflitantes ou ambíguos?"]
]);
add(25, [
  "¿Qué riesgo surge si cambian a la vez la implementación y los valores esperados de las pruebas?",
  ["Las pruebas usan demasiadas aserciones", "Los valores esperados podrían reflejar el mismo error", "El código y las pruebas se editaron en el mismo commit", "Las pruebas se ejecutan automáticamente"],
  ["La cantidad de aserciones no indica por sí sola si el resultado esperado es válido.", "Cambiar conjuntamente la implementación y el oráculo puede hacer que un comportamiento incorrecto parezca correcto.", "Un commit compartido no invalida una prueba por sí mismo.", "La automatización no resuelve el problema de haber cambiado el resultado esperado."],
  "Oráculos de prueba independientes",
  ["¿Qué define de manera independiente el resultado esperado?", "¿La prueba podría pasar porque ambos lados comparten el mismo supuesto erróneo?"]
], [
  "Qual risco surge quando a implementação e os valores esperados dos testes mudam juntos?",
  ["Os testes usam muitas asserções", "Os valores esperados podem refletir o mesmo erro", "O código e os testes foram editados no mesmo commit", "Os testes são executados automaticamente"],
  ["A quantidade de asserções, por si só, não indica se o resultado esperado é válido.", "Alterar implementação e oráculo juntos pode fazer um comportamento incorreto parecer correto.", "Um commit compartilhado não invalida um teste por si só.", "Automação não resolve o problema de alterar o resultado esperado."],
  "Oráculos de teste independentes",
  ["O que define independentemente o resultado esperado?", "O teste poderia passar porque os dois lados compartilham a mesma suposição equivocada?"]
]);
