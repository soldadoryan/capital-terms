import type { LegalDocument } from "./types";

export const privacidade: LegalDocument = {
  title: "Política de Privacidade",
  description:
    "Como o Grupo Capital coleta, utiliza, compartilha e protege seus dados pessoais, nos termos da LGPD.",
  updatedAt: "25 de setembro de 2026",
  version: "1.1",
  intro: [
    {
      type: "p",
      text: 'O Grupo Capital leva a sua privacidade a sério. Esta Política de Privacidade explica, de forma transparente, quais dados pessoais coletamos quando você participa dos servidores **Capital City** e **Morada do Valley**, das nossas comunidades no Discord, dos nossos sites e do aplicativo **Capital City** para Discord, por que coletamos, com quem compartilhamos e quais são os seus direitos de acordo com a **Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)**.',
    },
  ],
  sections: [
    {
      id: "quem-somos",
      title: "Quem somos",
      blocks: [
        {
          type: "p",
          text: 'O controlador dos seus dados pessoais é o **Grupo Capital**, operado por **Modder Produções Artísticas** (Aliffe Henrique de Carvalho), inscrita no CNPJ sob o nº 41.408.498/0001-03, com sede em Machado/MG, Brasil ("Grupo Capital", "nós"). Contato: contato@tronos.space.',
        },
      ],
    },
    {
      id: "abrangencia",
      title: "Abrangência",
      blocks: [
        {
          type: "p",
          text: "Esta Política aplica-se a todos os Serviços do Grupo Capital: os servidores de roleplay Capital City e Morada do Valley, os servidores oficiais no Discord, os sites, painéis e sistemas de suporte mantidos pelo Grupo Capital e o aplicativo Capital City para Discord. Ela não se aplica a serviços de terceiros, como o próprio Discord, que possuem políticas próprias.",
        },
      ],
    },
    {
      id: "dados-coletados",
      title: "Quais dados coletamos",
      blocks: [
        {
          type: "table",
          head: ["Categoria", "Dados", "Quando"],
          rows: [
            [
              "**Identificação no Discord**",
              "ID de usuário do Discord, nome de usuário, apelido (nickname) e nome de exibição, avatar, e-mail vinculado à conta do Discord (quando autorizado via OAuth2), servidores do Grupo Capital em que participa, cargos, data de entrada.",
              "Ao entrar na Comunidade, interagir com o aplicativo Capital City ou fazer login nos nossos sites com o Discord.",
            ],
            [
              "**Verificação de idade e identidade**",
              "Nome completo, data de nascimento, CPF e a confirmação de que você possui 18 anos ou mais.",
              "Ao realizar o processo de verificação para acessar os Servidores e áreas restritas.",
            ],
            [
              "**Dados de jogo**",
              "ID e nome do personagem/conta nos Servidores (Capital City ou Morada do Valley), servidor vinculado, histórico de personagens, progresso, itens, cargos e benefícios (VIP) associados.",
              "Ao vincular sua conta do Discord ao Servidor e ao jogar.",
            ],
            [
              "**Suporte, tickets e reembolsos**",
              "Conteúdo das mensagens enviadas em tickets, anexos, comprovantes de pagamento, descrição do problema, decisões e histórico de atendimento.",
              "Ao abrir um ticket no servidor de suporte do Grupo Capital no Discord ou nos painéis de atendimento do Grupo Capital.",
            ],
            [
              "**Moderação e segurança**",
              "Registros de advertências, silenciamentos, expulsões e banimentos, motivos, responsável pela ação, data e evidências (capturas de tela, mensagens); indicadores de contas alternativas.",
              "Quando ocorre uma ação de moderação ou denúncia.",
            ],
            [
              "**Pagamentos**",
              "Identificação da transação, valor, data, item/benefício adquirido e status. **Não armazenamos números de cartão**; o pagamento é processado pelo meio de pagamento escolhido.",
              "Ao adquirir benefícios opcionais.",
            ],
            [
              "**Dados técnicos**",
              "Endereço IP, tipo de navegador e dispositivo, páginas acessadas, data e hora, registros de erro e de acesso (logs).",
              "Ao acessar nossos sites, conforme exigido pelo Marco Civil da Internet.",
            ],
            [
              "**Mensagens na Comunidade**",
              "Conteúdo de mensagens em canais onde o aplicativo Capital City atua (comandos, formulários, tickets), necessário para executar suas funções.",
              "Ao interagir nos canais em que o aplicativo está ativo.",
            ],
          ],
        },
        {
          type: "note",
          text: "**O que não coletamos:** não temos acesso à sua senha do Discord, às suas mensagens diretas privadas com outras pessoas, aos seus dados de pagamento salvos no Discord nem a informações de outros servidores que não sejam do Grupo Capital.",
        },
      ],
    },
    {
      id: "como-coletamos",
      title: "Como coletamos",
      blocks: [
        {
          type: "ul",
          items: [
            "**Diretamente de você**, quando preenche formulários de verificação, abre tickets, faz login com o Discord ou envia informações à Staff.",
            "**Automaticamente pela plataforma Discord**, por meio das permissões e intents concedidas ao aplicativo Capital City (veja a seção 6).",
            "**Automaticamente pelos nossos sites**, por meio de logs de acesso e cookies estritamente necessários.",
            "**A partir dos Servidores de jogo**, quando você vincula sua conta e joga.",
          ],
        },
      ],
    },
    {
      id: "finalidades",
      title: "Finalidades e bases legais",
      blocks: [
        {
          type: "table",
          head: ["Finalidade", "Dados utilizados", "Base legal (LGPD)"],
          rows: [
            [
              "Verificar que você tem 18 anos ou mais e impedir o acesso de menores",
              "Data de nascimento, nome completo, CPF, ID do Discord",
              "Cumprimento de obrigação legal e regulatória (art. 7º, II) e legítimo interesse na proteção de menores (art. 7º, IX)",
            ],
            [
              "Confirmar a identidade, evitar fraudes e contas múltiplas de pessoas banidas",
              "Nome completo, CPF, data de nascimento, ID do Discord, e-mail, registros de moderação",
              'Legítimo interesse (art. 7º, IX) e prevenção à fraude e segurança (art. 11, II, "g", quando aplicável)',
            ],
            [
              "Criar e gerenciar seu cadastro, cargos e vínculo com o Servidor",
              "Dados de identificação no Discord, dados de jogo",
              "Execução de contrato / prestação do serviço (art. 7º, V)",
            ],
            [
              "Prestar suporte, tratar tickets, denúncias e reembolsos",
              "Dados de identificação, conteúdo dos tickets, dados de pagamento",
              "Execução de contrato (art. 7º, V) e exercício regular de direitos (art. 7º, VI)",
            ],
            [
              "Moderar a Comunidade e aplicar sanções",
              "Registros de moderação, mensagens, ID do Discord",
              "Legítimo interesse (art. 7º, IX)",
            ],
            [
              "Processar contribuições e benefícios adquiridos",
              "Dados de pagamento e de jogo",
              "Execução de contrato (art. 7º, V) e obrigação legal fiscal (art. 7º, II)",
            ],
            [
              "Enviar avisos, notificações e comunicados da Comunidade",
              "ID do Discord, e-mail",
              "Execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX)",
            ],
            [
              "Manter registros de acesso aos sites",
              "IP, data/hora, dados técnicos",
              "Obrigação legal — Marco Civil da Internet, art. 15 (art. 7º, II)",
            ],
            [
              "Melhorar os Serviços e gerar estatísticas",
              "Dados de uso agregados ou anonimizados",
              "Legítimo interesse (art. 7º, IX)",
            ],
            [
              "Atender a ordens judiciais ou de autoridades",
              "Os dados requisitados",
              "Obrigação legal (art. 7º, II) e exercício regular de direitos (art. 7º, VI)",
            ],
          ],
        },
        {
          type: "p",
          text: "Quando o tratamento se basear em consentimento, você poderá revogá-lo a qualquer momento, sem prejuízo do tratamento realizado anteriormente.",
        },
      ],
    },
    {
      id: "aplicativo-capital-city",
      title: "Dados acessados pelo aplicativo Capital City",
      blocks: [
        {
          type: "p",
          text: "O aplicativo Capital City utiliza permissões e intents da plataforma Discord para funcionar. Em termos de dados, isso significa que ele pode acessar:",
        },
        {
          type: "ul",
          items: [
            "**Informações públicas de perfil** (ID, nome de usuário, apelido, avatar, cargos, data de entrada e status de presença) dos membros dos servidores do Grupo Capital, por meio das intents de *Server Members* e *Presence*;",
            "**Conteúdo de mensagens** nos canais onde atua (*Message Content Intent*), utilizado apenas para interpretar comandos, formulários e mensagens de tickets. O aplicativo não armazena de forma permanente o conteúdo de conversas comuns dos canais, apenas o que é necessário para tickets, verificação e registros de moderação;",
            "**Dados de autenticação via OAuth2** (escopos identify, email, guilds e, quando necessário, guilds.members.read), quando você faz login nos nossos sites com sua conta do Discord;",
            "**Registros de auditoria** do servidor, para segurança e transparência das ações administrativas;",
            "**Mensagens diretas enviadas ao aplicativo**, apenas quando você inicia uma conversa com ele (por exemplo, para responder a um formulário de verificação), utilizadas somente para concluir a ação solicitada.",
          ],
        },
        {
          type: "p",
          text: 'Esses dados são tratados exclusivamente para as finalidades descritas nesta Política. Você pode revogar as autorizações OAuth2 concedidas nas configurações da sua conta do Discord, em "Aplicativos autorizados".',
        },
      ],
    },
    {
      id: "compartilhamento",
      title: "Com quem compartilhamos",
      blocks: [
        {
          type: "p",
          text: "Não vendemos seus dados pessoais. Compartilhamos dados apenas quando necessário, com:",
        },
        {
          type: "ul",
          items: [
            "**Discord Inc.** — plataforma na qual a Comunidade e o aplicativo operam (política de privacidade do Discord);",
            "**Provedores de infraestrutura** — hospedagem e banco de dados dos nossos sites e do aplicativo em nuvem, que atuam como operadores sob nossas instruções;",
            "**Meios de pagamento** — para processar contribuições, recebendo apenas os dados necessários à transação;",
            "**Membros da Staff** — acesso restrito e controlado, limitado ao necessário para verificação, suporte e moderação, com dever de confidencialidade;",
            "**Autoridades públicas** — quando exigido por lei, ordem judicial ou para proteger direitos do Grupo Capital, de Usuários ou de terceiros.",
          ],
        },
        {
          type: "p",
          text: "Dados sensíveis de verificação (nome completo, CPF e data de nascimento) são acessíveis apenas a membros da administração autorizados e nunca são exibidos publicamente na Comunidade.",
        },
      ],
    },
    {
      id: "transferencia-internacional",
      title: "Transferência internacional",
      blocks: [
        {
          type: "p",
          text: "Alguns dos nossos provedores (como o Discord e os provedores de hospedagem e banco de dados) podem armazenar ou processar dados em servidores localizados fora do Brasil, especialmente nos Estados Unidos. Nesses casos, a transferência ocorre com base nos mecanismos previstos no art. 33 da LGPD, e adotamos provedores que oferecem padrões adequados de proteção de dados.",
        },
      ],
    },
    {
      id: "retencao",
      title: "Por quanto tempo guardamos",
      blocks: [
        {
          type: "table",
          head: ["Dados", "Prazo de retenção"],
          rows: [
            [
              "Cadastro e identificação no Discord",
              "Enquanto você participar da Comunidade e por até 12 meses após sua saída, para permitir o retorno e a continuidade dos dados de jogo.",
            ],
            [
              "Verificação de idade e identidade (nome, CPF, data de nascimento)",
              "Enquanto sua conta estiver ativa. Após a exclusão da conta, mantemos apenas um identificador não reversível (hash) do CPF pelo prazo de até 5 anos, exclusivamente para impedir o retorno de contas banidas e comprovar a verificação de idade, com base no legítimo interesse e em obrigações legais.",
            ],
            [
              "Registros de moderação e banimentos",
              "Por até 5 anos, para segurança da Comunidade e defesa em eventuais processos.",
            ],
            [
              "Tickets e atendimentos",
              "Por até 5 anos após o encerramento, conforme o prazo prescricional do Código de Defesa do Consumidor.",
            ],
            [
              "Registros de pagamento",
              "Por até 5 anos, para cumprimento de obrigações fiscais e contábeis.",
            ],
            [
              "Logs de acesso aos sites (IP, data/hora)",
              "6 meses, conforme o art. 15 do Marco Civil da Internet.",
            ],
          ],
        },
        {
          type: "p",
          text: "Após os prazos, os dados são excluídos ou anonimizados de forma segura, salvo quando a lei exigir a conservação por período maior.",
        },
      ],
    },
    {
      id: "seguranca",
      title: "Como protegemos seus dados",
      blocks: [
        {
          type: "p",
          text: "Adotamos medidas técnicas e administrativas compatíveis com a natureza dos dados tratados, incluindo: criptografia em trânsito (HTTPS/TLS) em todos os nossos sites; armazenamento em provedores com controles de segurança reconhecidos; controle de acesso por função, de modo que apenas administradores autorizados acessem dados de verificação; registro (log) de acessos e ações administrativas; e políticas internas de confidencialidade para a Staff. Nenhum sistema é totalmente seguro; em caso de incidente de segurança que possa acarretar risco relevante a você, comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados, conforme a LGPD.",
        },
      ],
    },
    {
      id: "direitos",
      title: "Seus direitos (LGPD)",
      blocks: [
        {
          type: "p",
          text: "Nos termos do art. 18 da LGPD, você pode, a qualquer momento, solicitar:",
        },
        {
          type: "ul",
          items: [
            "**Confirmação** da existência de tratamento e **acesso** aos seus dados;",
            "**Correção** de dados incompletos, inexatos ou desatualizados;",
            "**Anonimização, bloqueio ou eliminação** de dados desnecessários, excessivos ou tratados em desconformidade com a lei;",
            "**Portabilidade** dos seus dados a outro fornecedor, observados os segredos comerciais;",
            "**Eliminação** dos dados tratados com base no seu consentimento;",
            "**Informação** sobre com quem compartilhamos seus dados;",
            "**Informação** sobre a possibilidade de não fornecer consentimento e as consequências da negativa;",
            "**Revogação do consentimento**;",
            "**Oposição** a tratamentos realizados com base em outras hipóteses legais, em caso de descumprimento da LGPD;",
            "**Revisão** de decisões tomadas unicamente com base em tratamento automatizado.",
          ],
        },
        {
          type: "p",
          text: "Você também pode apresentar reclamação à **Autoridade Nacional de Proteção de Dados (ANPD)**.",
        },
      ],
    },
    {
      id: "exercer-direitos",
      title: "Como exercer seus direitos",
      blocks: [
        {
          type: "p",
          text: "Para exercer qualquer direito, abra um ticket no servidor de suporte do Grupo Capital no Discord (discord.gg/bMM6PRWY93) ou envie um e-mail para contato@tronos.space a partir do e-mail vinculado à sua conta, informando seu ID do Discord. Poderemos solicitar informações adicionais para confirmar sua identidade antes de atender ao pedido. Responderemos em até **15 dias**. A exclusão de dados implica o encerramento do seu acesso aos Servidores e à Comunidade e a perda dos dados de jogo vinculados; alguns dados poderão ser mantidos pelos prazos indicados na seção 9, quando houver obrigação legal ou legítimo interesse.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies e tecnologias similares",
      blocks: [
        {
          type: "p",
          text: "Nossos sites utilizam apenas cookies e armazenamento local **estritamente necessários** ao funcionamento, como manter sua sessão após o login com o Discord e lembrar preferências de exibição. Não utilizamos cookies de publicidade nem de rastreamento entre sites. Você pode bloquear cookies no seu navegador, ciente de que algumas funções (como o login) podem deixar de funcionar.",
        },
      ],
    },
    {
      id: "menores",
      title: "Menores de idade",
      blocks: [
        {
          type: "p",
          text: "Os Serviços do Grupo Capital são destinados exclusivamente a pessoas com 18 anos ou mais. Não coletamos intencionalmente dados de menores de idade. A verificação de idade descrita nesta Política existe justamente para impedir esse acesso. Caso identifiquemos que um menor forneceu dados, excluiremos as informações e encerraremos o acesso. Se você é responsável por um menor e acredita que ele nos forneceu dados, entre em contato pelos canais indicados.",
        },
      ],
    },
    {
      id: "alteracoes",
      title: "Alterações desta Política",
      blocks: [
        {
          type: "p",
          text: "Esta Política pode ser atualizada para refletir mudanças nos Serviços ou na legislação. A versão vigente estará sempre disponível nesta página, com a data da última atualização. Alterações relevantes serão comunicadas nos canais oficiais da Comunidade.",
        },
      ],
    },
    {
      id: "encarregado",
      title: "Encarregado e contato",
      blocks: [
        {
          type: "p",
          text: "O Grupo Capital designa como Encarregado pelo Tratamento de Dados Pessoais (DPO) a administração do Grupo Capital, responsável por atender às solicitações dos titulares e às comunicações da ANPD.",
        },
        {
          type: "ul",
          items: [
            "**E-mail:** contato@tronos.space",
            "**Ticket de suporte:** servidor oficial do Grupo Capital no Discord — discord.gg/bMM6PRWY93",
            "**Controlador:** Modder Produções Artísticas — Aliffe Henrique de Carvalho — CNPJ 41.408.498/0001-03 — Machado/MG, Brasil",
          ],
        },
      ],
    },
  ],
};
