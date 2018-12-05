// Translated by:
// Fernando Duro fernando@digitalabs.com.br
// Anna Erbetta  anna@digitalabs.com.br
// Lucas Ponte  lucas@digitalabs.com.br


export const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  }
};

export default {
  about_directus: "Sobre o Directus",
  activity: "Atividade",
  my_activity: "Minha Atividade",
  activity_log: "Registro de Atividades",
  activity_outside_directus: "Este item foi criado fora do Directus.",
  admin_email: "E-mail do Administrador",
  admin_password: "Senha do Administrador",
  additional_info: "Informações Adicionais",
  add_new: "Adicionar Novo",
  add_field_filter: "Adicionar filtro de campo",
  add_note: "Crie uma nota de ajuda para os usuários...",
  admin_settings: "Configurações do Administrador",
  almost_done_options:
    "Quase Pronto! Agora apenas revise as opções de interface abaixo.",
  almost_done_copy:
    "Toda interface pode ser perfeitamente customizada para as suas necessidades. Abaixo se encontram as opções disponíveis para esse campo, mas apenas algumas são exigidas.",
  all: "Tudo",
  statuses: "Status",
  api_url: "URL da API",
  api_installed: "API Instalada com Sucesso",
  auto_generated: "Gerado automaticamente...",
  batch: "Lote",
  batch_edit: "Editar Itens em Lote: {collection}",
  batch_delete: "Deleção em Lote",
  batch_delete_confirm:
    "Nenhum item foi selecionado | Você tem certeza que deseja deletar esse item? Essa ação não pode ser desfeita. | Você tem certeza que deseja deletar esses {count} itens? Essa ação não pode ser desfeita.",
  between: "Entre",
  both: "Ambos",
  bookmarks: "Favoritos",
  cancel: "Cancelar",
  change_project: "Mudar Projeto",
  choose_one: "Escolher Um",
  choose_project: "Escolher Projeto",
  choose_interface: "Escolha uma interface para gerenciar esses dados.",
  clear: "Limpar",
  click_to_toggle_all_none: "Clique para selecionar/deselecionar a coluna inteira",
  connection: "Conexão",
  collection: "Coleção",
  collections_and_fields: "Coleção & Campos",
  collection_updated: "{collection} Coleção Atualizada",
  collection_removed: "{collection} Coleção Removida",
  collection_names_cannot_be_changed:
    "Os nomes da coleção não podem ser editados no momento.",
  collections: "Coleções",
  collection_count: "Nenhuma Coleção | Uma Coleção | {count} Coleções",
  "collections-directus_files": "Arquivos",
  "collections-directus_users": "Usuários",
  "collections-directus_activity": "Atividade",
  comment: "Comentário",
  comments: "Comentários",
  coming_soon: "Em Breve",
  contains: "Contém",
  config_error: "Configuração Faltando",
  config_error_copy:
    "Certifique-se que você criou o arquivo de configuração da aplicação",
  collection_contains_items: "{collection} contém {count} itens",
  currently_selected: "Atualmente selecionado: {thing}",
  create: "Criar",
  creating_item: "Criando Item",
  creating_item_page_title: "Criando Item: {collection}",
  creating_role: "Criando Função",
  create_role: "Criar Função",
  create_field: "Criar Campo",
  update_field: "Atualizar Campo",
  create_collection: "Criar Coleção",
  database_connection: "Conexão do Banco de Dados",
  database_connection_copy:
    "A seguir, precisamos saber como conectar ao banco de dados onde seu projeto será gerenciado.",
  datatype: "Tipo de Dado",
  db_datatype: "{db} Tipo de Dado",
  editing_my_profile: "Editando meu Perfil",
  fieldtypes: {
    alias:
      "Campos que não armazenam dados ou não pertencem a uma coluna no banco de dados",
    array: "Formato padrão do array de resposta da API",
    datetime: "Uma data e hora em formato ISO, ex.: 2018-09-19T14:00:43.381Z",
    date: "Data, ex.: 2018-09-19",
    time: "Hora, ex.: 14:09:22",
    file: "Chave estrangeira para directus_files.id",
    group:
      "Agrupa campos visualmente e salva campo resultante para directus_fields.group",
    integer: "Número inteiro",
    decimal: "Número que inclua um decimal",
    json: "Formato padrão JSON de resposta da API",
    lang: "Específico para interfaces de tradução, armazena a chave da língua",
    m2o: "Relacionamento Muitos-pra-Um",
    o2m: "Relacionamento Um-pra-Um",
    sort: "Campo do sistema usado para reordenação de itens clique-e-arraste",
    status: "Campo do sistema usado para publicar fluxos de trabalho",
    string:
      "Qualquer texto, numeral, espaços ou símbolos; definido e limitado pelo seu comprimento (número de caracteres)",
    translation:
      "Específico de interfaces de tradução, este o2m armazena conteúdo de múltiplas línguas",
    uuid: "Um Identificador Universal Único",
    datetime_created:
      "Campo do sistema para rastrear a data e hora em que um item foi criado, usado em revisões",
    datetime_updated:
      "Campo do sistema para rastrear a data e hora em que um item foi atualizado, usado em revisões",
    user_created:
      "Campo do sistema para rastrear qual usuário criou um determinado item, usado em revisões",
    user_updated:
      "Campo do sistema para rastrear qual usuário atualizou um determinado item, usado em revisões",
  },
  datatypes: {
    mysql: {
      CHAR:
        "Uma string de tamanho fixo, não binária com espaços à direita. Comprimento pode ser entre 0 e 255 caracteres.",
      VARCHAR:
        "Uma string de tamanho variável não binária. Comprimento pode ser entre 0 e 65.535 caracteres (MySQL 5.0.3+).",
      TINYTEXT: "Uma string com no máximo 255 caracteres de comprimento.",
      TEXT: "Uma string com no máximo 65.535 caracteres de comprimento.",
      MEDIUMTEXT: "Uma string com no máximo 16.777.215 caracteres de comprimento.",
      LONGTEXT: "Uma stringo com no máximo 4.294.967.295 caracteres de comprimento.",

      BOOLEAN: "Verdadeiro ou falso. É salvo como 1 ou 0 respectivamente.",
      TINYINT:
        "Um número inteiro. Quando com sinal (permite negativos) comprimento vai de -128 a 127, do contrário o máximo é 255.",
      SMALLINT:
        "Um número inteiro. Quando com sinal (permite negativos) comprimento vai de -32.768 a 32.767, do contrário o máximo é 65.535.",
      MEDIUMINT:
        "Um número inteiro. Quando com sinal (permite negativos) comprimento vai de -8.388.608 a 8.388.607, do contrário o máximo é 16.777.215.",
      INT:
        "Um número inteiro. Quando com sinal (permite negativos) comprimento vai de -2.147.483.648 a 2.147.483.647, do contrário o máximo é 4.294.967.295.",
      BIGINT:
        "Um número inteiro. Quando com sinal (permite negativos) comprimento vai de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807, do contrário o máximo é 18.446.744.073.709.551.615.",

      DECIMAL:
        "Um número preciso (ex.: para moeda), com 1 a 65 dígitos de comprimento (L) e 0 a 30 dígitos decimais (D). Formato de comprimento: `L,D`",
      FLOAT:
        "Um número binário aproximado, 4 bytes com um ponto decimal flutuante.",
      DOUBLE:
        "Um número binário aproximado, 8 bytes com um ponto decimal flutuante.",

      DATE: "Uma data. Permite datas entre `1000-01-01` e `9999-12-31`.",
      DATETIME:
        "Uma data e hora. Permite entre `1000-01-01 00:00:00` e `9999-12-31 23:59:59`.",
      TIMESTAMP:
        "Uma data e hora. Permite entre `1970-01-01 00:00:01` UTC e `2038-01-19 03:14:07` UTC.",
      TIME: "Uma hora. Permite entre `-838:59:59` e `838:59:59`.",
      YEAR: "Um ano. Permite entre `1901` e `2155` ou `0000`"
    }
  },
  date_and_time: "Data & Hora",
  db_user: "Usuário do banco de dados",
  db_password: "Senha do usuário do Banco de Dados",
  db_name: "Nome do Banco de Dados",
  db_type: "Tipo do Banco de Dados",
  db_column_name: "Nome da coluna do Banco de Dados...",
  db_updated: "Banco de Dados atualizado com sucesso",
  db_update_failed: "Banco de Dados não pode ser atualizado.",
  default: "Padrão",
  delete: "Deletar",
  delete_are_you_sure:
    "Tem certeza que deseja deletar este item? Esta ação não pode ser mudada.",
  delete_collection_are_you_sure:
    "Tem certeza que deseja deletar esta coleção? Esta ação não pode ser mudada.",
  delete_field_are_you_sure:
    'Tem certeza que deseja deletar o campo "{field}"? Esta ação não pode ser mudada.',
  delete_role_are_you_sure:
    'Tem certeza que deseja deletar a função "{name}"? Esta ação não pode ser mudada.',
  delete_bookmark: "Deletar Marcador",
  delete_bookmark_body:
    "Tem certeza que deseja deletar este marcador? Esta ação não pode ser mudada.",
  description: "Descrição",
  delete_confirmation: "Deletar Confirmação",
  dialog_beginning: "Começo da janela de diálogo.",
  discard_changes: "Descartar Mudanças",
  display_name: "Mostrar Nome",
  drop_files: "Não foi possível jogar os arquivos | Jogue o arquivo aqui... | Jogue os arquivos aqui...",
  dont_show: "Não mostrar",
  editing: "Editando Item: {collection}",
  editing_item: "Editando Item",
  editing_items: "Editando Lote {count} Itens",
  editing_single: "Editando {collection}",
  email_address: "Endereço de E-mail",
  email: "E-mail",
  empty_collection: "Coleção Vazia",
  empty_collection_body: "Não há itens nessa coleção ainda",
  enable_manual_sorting: "Permitir classificação manual",
  enter_value: "Inserir Valor",
  enter_collection_name: "Inserir nome da coleção...",
  enter_role_name: "Iserir nome da função...",
  environment: "Ambiente",
  project_key: "Chave do projeto",
  errors: {
    "-1": "Não foi possível alcançar a API",
    11: "Não foi possível conectar ao banco de dados",
    100: "Nome de usuário e/ou senha inválidos",
    101: "Deslogado devido à inatividade",
    102: "Deslogado devido à inatividade",
    103: "Usuário inativo",
    106: "Nome de usuário e/ou senha inválidos",
    107: "Usuário não encontrado"
  },
  error_unknown: "Erro desconhecido. Tente novamente mais tarde.",
  esc_cancel: "A tecla Esc irá cancelar e fechar a janela.",
  equal_to: "Igual à",
  existing: "Existente",
  fetching_data: "Buscando Dados",
  field: "Campo",
  field_type: "Tipo do Campo",
  field_created: "{field} Campo criado",
  field_updated: "{field} Campo Atualizado",
  field_removed: "{field} Campo Removido",
  fields: "Campos",
  fields_are_saved_instantly: "Mudanças salvas instantaneamente",
  file: "Arquivo",
  file_library: "Galeria de Arquivos",
  file_upload: "Enviar Arquivo(s)",
  forgot_password: "Esqueci minha Senha",
  greater_than_equal: "Maior ou igual a",
  greater_than: "Maior",
  help_and_docs: "Ajuda & Documentos",
  keep_editing: "Continuar editando",
  hidden_detail: "Oculto em Detalhe",
  hidden_browse: "Oculto em Procurar",
  host: "Host",
  in_list: "Um destes",
  initial_schema: "Escolha um Esquema Inicial",
  initial_schema_copy:
    "Escolha uma arquiterura de um banco de dados existente ou comece uma nova. Você sempre pode ajustar isso mais tarde.",
  interface: "Interface",
  interface_count: "Sem Interfaces | Uma Interface | {count} Interfaces",
  interfaces: "Interfaces",
  info: "Informação",
  intelligent_defaults:
    "Opções avançadas deixam você configurar como os dados serão armazenados no Banco de Dados e ajustar configurações adicionais do App.",
  interface_settings:
    "Toda interface pode ser construída de acordo com suas nescessidades. Abaixo estão as opções disponíveis para esta interface, porém somente algumas são requeridas.",
  install: "Instalar",
  install_copy:
    "Esta API não foi configurada ainda. Você gostaria de instalar e configurá-la agora?",
  is_empty: "Está vazio",
  is_not_null: "Não é NULO",
  is_null: "É NULO",
  item_count: "Sem Itens | Um Item | {count} Itens",
  event_count: "Sem Eventos | Um Evento | {count} Eventos",
  role_count: "Sem Funções | Uma Função | {count} Funções",
  item_count_filter:
    "Sem Itens filtrados | Um Item filtrado | {count} Itens filtrados",
  item_deleted: "Item Deletado",
  item_saved: "Item Salvo | {count} Itens Salvos",
  junction_collection: "Jução da coleção",
  cant_disable_primary:
    "Você não pode desabilitar a chave primária em um campo existente. Em vez disso, remova este campo.",
  extension_error: "Houve um problema ao carregar a extensão {ext}.",
  extensions_missing: "Nenhuma extensão encontrada.",
  extensions_missing_copy:
    "Certifique-se de que você possui as extensões do sistema instaladas.",
  latency: "Latência",
  learn_more: "Saiba Mais",
  leave_comment: "Deixe um comentário...",
  length: "Comprimento",
  length_disabled_placeholder: "Comprimento é determinado pelo tipo de dado",
  less_than_equal: "Menor ou igual à",
  less_than: "Menor que",
  limited: "Limitado",
  loading: "Carregando...",
  loading_more: "Carregando mais itens...",
  login: "Entrar",
  m2m: "Muitos-para-muitos (N para N)",
  m2o: "Muitos-para-um (N para 1)",
  o2m: "Um-para-muitos (1 para N)",
  name: "Nome",
  name_field: "Vamos nomear esse campo {field}, e adicionar uma anotação para ajudar os usuários.",
  navigate_changes:
    "Tem certeza que deseja sair desta página? As mudanças feitas serão perdidas.",
  new: "Novo",
  new_file: "Novo Arquivo",
  no_related_entries: "Não possui entradas relacionadas.",
  not_between: "Não está entre",
  not_contains: "Não contém",
  note: "Nota",
  note_note: "Uma descrição interna...",
  note_hidden:
    "[Learn More](https://docs.directus.io/app/admin/collections.html#hidden)",
  note_icon: "O ícone mostrado na barra lateral do App",
  note_managed:
    "[Learn More](https://docs.directus.io/app/admin/collections.html#managing-collections)",
  note_single:
    "[Learn More](https://docs.directus.io/app/admin/collections.html#single)",
  no_results: "Sem resultados",
  no_results_body: "Os filtros atuais não correspondem à nenhum item de coleção",
  no_collections: "Nenhuma coleção registrada",
  no_collections_body: "Parece que não há coleções registradas ainda",
  no_fields: "Nenhum campo registrado",
  no_fields_body:
    "Parece que esta coleção ainda não possui campos registrados ainda",
      no_files: "Nenhum arquivo",
  no_files_body: "Parece que não foi feito upload de nenhum arquivo ainda",
  numeric: "Numérico",
  page_not_found: "Página não encontrada",
  page_not_found_body: "A página que você está procurando não existe.",
  permissions: "Permissões",
  name_bookmark: "Como deseja nomear esse favorito?",
  next: "Próximo",
  none: "Nenhum",
  not_empty: "Não está vazio",
  not_equal_to: "Direferente",
  not_in_list: "Não está nessa lista",
  no_interface_error: "Campo {field} não possui uma interface configurada",
  manage: "Gerenciar",
  max_size: "Tamanho máximo: {size}",
  max_one_primary_key: "Você pode ter apenas uma chave primária por coleção",
  dont_manage: "Não gerenciar",
  dont_manage_copy:
    "Privilégios, preferência, and configurações para a coleção {collection} serão permanentemente removidos do sistema! Tem certeza?",
  more_options: "Mais opções",
  mixed: "Misturado",
  my_profile: "Meu Perfil",
  other: "Outro",
  ok: "OK",
  operator: "Operador",
  open_on_gh: "Abrir no GitHub",
  options: "Opções",
  password: "Senha",
  password_reset_sent: "E-mail para recuperar senha enviado para {email}",
  permissions_no_collections: "Esse projeto ainda não tem nenhuma coleção.",
  permissions_admin:
    "Admins tem acesso à todos os dados gerenciáveis do sistema por padrão.",
  permission_states: {
    none: "Nada",
    mine: "Apenas meus",
    role: "Função apenas",
    full: "Tudo",
    read: "Leitura apenas",
    create: "Criação",
    on_create: "Pós-criação",
    update: "Alteração",
    on_update: "Pós-alteração",
    always: "Sempre"
  },
  popular: "Popular",
  powered_by_directus: "Criado no Directus",
  preview_and_revert: "Pré-visualizar e Reverter",
  primary_key: "Chave primária",
  port: "Porta",
  project: "Projeto",
  project_name: "Nome do projeto",
  project_info: "Informações do projeto",
  project_info_copy:
    "Abaixo estão algumas questões sobre o projeto, incluindo credenciais do seu primeiro administrador.",
  read: "Leitura",
  readable_fields: "Campos legíveis",
  readable_fields_copy: "Selecione os campos que o usuário poderá visualizar",
  readonly: "Leitura apenas",
  relational: "Relacionável",
  report_issue: "Reportar problema",
  request_feature: "Pedir funcionalidade",
  regex: "RegEx",
  relation_setup:
    "Por ser uma campo relacionável, nós precisamos mapear os campos relacionados.",
  relation_setup_copy:
    "Existem diferentes tipos de dados relacionáveis, essa interface usa um chamado {relation}.",
  related_entries: "Existem entradas relacionadas",
  related_collection: "Coleções relacionadas",
  remove: "Remover",
  remove_related: "Remover itens relacionados",
  relationship: "Relacionamento",
  required: "Obrigatório",
  reset_preferences: "Reverter todas as preferências de listagem",
  reset_password: "Recuperar senha",
  revert: "Reverter",
  revert_copy: "Tem certeza que deseja reverter esse item para como ele estava em {date}?",
  roles: "Funções de usuário",
  role_settings: "Configuração de funções",
  save: "Salvar",
  save_and_add: "Salvar e adicionar novo",
  save_and_stay: "Salvar e manter aqui",
  save_as_copy: "Salvar e Copiar",
  save_as_bookmark: "Save como favorito",
  schema: "Esquema",
  search: "Buscar",
  select_from_device: "Selecione uma plataforma",
  select_existing: "Selecionar existente",
  select_field: "Selecionar um campo",
  select_fields: "Selecionar campos",
  search_interface: "Procurar por uma interface...",
  select_interface_below: "Selecione uma interface abaixo",
  select_statuses: "Selecione o status",
  select_statuses_copy: "Selecione os status que o usuário pode usar",
  settings: "Configurações",
  settings_project: "Configurações do projeto",
  settings_global: "Configurações globais",
  settings_update_database: "Alterar banco de dados",
  settings_update_database_subtext: "Rodar Script",
  settings_update_database_confirm:
    "Isso alterará os campos do sistema no seu banco de dados para a última versão do Directus. Por favor faça um backup antes de executar essa operação.",
  settings_collections_fields: "Coleções & Campos",
  settings_permissions: "Funções & Permissões",
  settings_extensions: "Extensões",
  settings_saved: "Configurações Salvas",
  server_details: "Detalhes do servidor",
  server_error: "Erro no servidor",
  server_error_copy:
    "Algo está errado com essa instância do servidor ou banco de dados.",
  server_trouble: "Problema no servidor",
  server_trouble_copy:
    "Tente mais tarde ou contate o administrador do sistema para ajuda.",
  advanced_options: "Opções avançadas",
  show_directus_collections: "Mostrar coleções do sistema Directus",
  something_went_wrong: "Algo está errado.",
  something_went_wrong_body:
    "Problemas ao processar requisição. Tente novamente após recarregar a página.",
  sign_in: "Entrar",
  signing_in: "Entrando",
  sign_out: "Sair",
  sign_out_confirm: "Tem certeza que deseja sair?",
  sign_out_confirm_edits:
    "Tem certeza que deseja sair? Todas as alterações não salvas serão perdidas.",
  text: "Texto",
  this_collection: "Esta coleção",
  to: "Em",
  unsaved_changes_copy:
    "Você tem alterações não salvas! Tem certeza que deseja sair dessa página?",
  user_directory: "Usuários",
  update: "Alterar",
  update_confirm: "Tem certeza que deseja alterar {count} itens?",
  unique: "Único",
  user_edit_warning:
    "{first_name} {last_name} está editando este item também. Por favor coordenem-se para não perder alterações.",
  value: "Valor",
  values: "Valores",
  validation: "Validação",
  version: "Versão",
  version_and_updates: "Versão e alterações",
  view_type: "Ver como...",
  welcome: "Bem-vindo",
  writable_fields: "Campos com permissão de escrita",
  writable_fields_copy: "Selecione os campos que podem ser editados",
  yes: "Sim",
  duplicating_field: "Campo duplicado",
  duplicate: "Duplicado"
};