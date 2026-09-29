import type { LegalDocument } from "./types";

export const termos: LegalDocument = {
  title: "Termos de Uso",
  description:
    "Regras de acesso e utilização dos servidores, comunidades, sites e do aplicativo Capital City do Grupo Capital.",
  updatedAt: "25 de setembro de 2026",
  version: "1.1",
  intro: [
    {
      type: "p",
      text: 'Bem-vindo ao Grupo Capital. Estes Termos de Uso ("Termos") regulam o acesso e a utilização dos servidores de roleplay **Capital City** e **Morada do Valley**, das comunidades oficiais do Grupo Capital no Discord, dos sites, painéis e sistemas de suporte mantidos pelo Grupo Capital e do aplicativo/bot **Capital City** para Discord (em conjunto, os "Serviços").',
    },
    {
      type: "p",
      text: "Ao entrar em qualquer servidor do Grupo Capital, autorizar o aplicativo Capital City, criar uma conta em nossos sites ou utilizar qualquer parte dos Serviços, você declara que leu, entendeu e concorda com estes Termos e com a nossa Política de Privacidade. Se você não concorda, não utilize os Serviços.",
    },
  ],
  sections: [
    {
      id: "definicoes",
      title: "Definições",
      blocks: [
        {
          type: "ul",
          items: [
            '**Grupo Capital**, **"nós"** ou **"nosso"**: a comunidade de roleplay Grupo Capital, operada pela empresa Modder Produções Artísticas — Aliffe Henrique de Carvalho (CNPJ 41.408.498/0001-03), com sede em Machado/MG, responsável pelos Serviços.',
            "**Servidores**: os servidores de roleplay Capital City e Morada do Valley, bem como quaisquer outros servidores de jogo que venham a ser operados sob a marca Grupo Capital.",
            "**Comunidade**: os servidores oficiais do Grupo Capital na plataforma Discord.",
            '**Aplicativo** ou **Bot**: o aplicativo "Capital City" para Discord, desenvolvido e operado pelo Grupo Capital, que automatiza funções de verificação, cadastro, suporte, moderação e integração com os Servidores.',
            '**Usuário** ou **"você"**: qualquer pessoa que acesse ou utilize os Serviços.',
            "**Staff**: administradores, moderadores e demais membros da equipe do Grupo Capital.",
            "**Roleplay (RP)**: atividade de interpretação de personagens dentro dos Servidores, sujeita às regras de jogo publicadas pela Staff.",
          ],
        },
      ],
    },
    {
      id: "aceitacao",
      title: "Aceitação dos Termos",
      blocks: [
        {
          type: "p",
          text: "A utilização dos Serviços constitui aceitação integral destes Termos. Estes Termos aplicam-se em conjunto com as regras internas de cada Servidor e da Comunidade (publicadas nos canais oficiais), com os Termos de Serviço do Discord e com as Diretrizes da Comunidade do Discord. Em caso de conflito entre estes Termos e as regras internas, prevalecem estes Termos.",
        },
      ],
    },
    {
      id: "elegibilidade",
      title: "Elegibilidade e verificação de idade",
      blocks: [
        {
          type: "p",
          text: "Os Servidores do Grupo Capital contêm temas e interações destinados a público adulto. Por esse motivo:",
        },
        {
          type: "ul",
          items: [
            "O acesso aos Servidores e às áreas restritas da Comunidade é permitido **somente a pessoas com 18 (dezoito) anos completos ou mais**.",
            "Para acessar essas áreas, o Usuário deverá passar por um processo de **verificação de idade**, que inclui informar a data de nascimento e, quando solicitado, o nome completo e o CPF, conforme descrito na Política de Privacidade.",
            "O Grupo Capital reserva-se o direito de solicitar comprovação adicional de idade e de recusar, suspender ou remover qualquer Usuário que não atenda ao requisito mínimo de idade ou que forneça informações falsas.",
            "Ao se cadastrar, você declara, sob sua responsabilidade, que possui idade igual ou superior a 18 anos e que as informações fornecidas são verdadeiras.",
          ],
        },
        {
          type: "note",
          text: "Independentemente da verificação do Grupo Capital, a utilização do Discord está sujeita à idade mínima exigida pelo próprio Discord na sua região.",
        },
      ],
    },
    {
      id: "conta-e-acesso",
      title: "Conta e acesso",
      blocks: [
        {
          type: "ul",
          items: [
            "O acesso aos Serviços é feito por meio da sua conta do Discord. Você é o único responsável pela segurança da sua conta, pelo sigilo das suas credenciais e por toda atividade realizada a partir dela.",
            "É proibido compartilhar, vender, ceder ou transferir contas, personagens, cargos ou benefícios obtidos nos Serviços sem autorização expressa da Staff.",
            "É proibido criar contas alternativas para burlar sanções, punições, limites ou processos de verificação.",
            "Você deve manter seus dados cadastrais atualizados e verdadeiros. Cadastros com dados falsos, de terceiros ou incompletos poderão ser cancelados.",
          ],
        },
      ],
    },
    {
      id: "aplicativo",
      title: "O aplicativo Capital City no Discord",
      blocks: [
        {
          type: "p",
          text: "O aplicativo Capital City é uma ferramenta desenvolvida pelo Grupo Capital para operar a Comunidade e integrá-la aos Servidores. Entre suas funções estão:",
        },
        {
          type: "ul",
          items: [
            "Registro e verificação de Usuários (idade e identidade), com atribuição automática de cargos;",
            "Abertura, acompanhamento e encerramento de tickets de suporte, denúncias e solicitações de reembolso;",
            "Vinculação da conta do Discord ao personagem/conta de jogo nos Servidores;",
            "Envio de avisos, notificações e mensagens automáticas;",
            "Apoio à moderação (registros de ações, advertências, silenciamentos, expulsões e banimentos);",
            "Estatísticas de uso e funcionamento da Comunidade.",
          ],
        },
        {
          type: "p",
          text: "O aplicativo é fornecido exclusivamente para uso dentro dos servidores oficiais do Grupo Capital. É proibido adicioná-lo a servidores não autorizados, utilizar seus comandos para fins abusivos, tentar explorar falhas, sobrecarregar, realizar engenharia reversa ou interferir no seu funcionamento.",
        },
      ],
    },
    {
      id: "permissoes",
      title: "Permissões e autorizações do aplicativo",
      blocks: [
        {
          type: "p",
          text: "Para funcionar, o aplicativo Capital City solicita permissões da plataforma Discord. Ao permanecer em um servidor onde o aplicativo está instalado, ou ao autorizá-lo diretamente, você reconhece e autoriza que o aplicativo possa, conforme necessário para a prestação dos Serviços:",
        },
        {
          type: "table",
          head: ["Permissão / Escopo", "Para que é utilizada"],
          rows: [
            [
              "Ver canais e ler histórico de mensagens",
              "Processar comandos, tickets, formulários de verificação e manter registros de moderação.",
            ],
            [
              "Enviar mensagens, embeds, arquivos e reações",
              "Responder a comandos, enviar avisos, confirmações e notificações.",
            ],
            [
              "Gerenciar cargos",
              "Atribuir e remover cargos de verificado, membro, VIP, staff e cargos de punição.",
            ],
            [
              "Gerenciar canais e threads",
              "Criar, organizar e fechar canais/threads de tickets e suporte.",
            ],
            [
              "Gerenciar apelidos",
              "Padronizar apelidos após a verificação (ex.: nome do personagem/ID de jogo).",
            ],
            [
              "Expulsar, banir e moderar membros (incluindo silenciar)",
              "Executar sanções decididas pela Staff e ações automáticas de segurança (antispam, antirraid).",
            ],
            [
              "Acessar a lista de membros e presença (intents privilegiadas)",
              "Sincronizar cadastros, cargos e estatísticas, e identificar contas suspeitas.",
            ],
            [
              "Ver conteúdo das mensagens (Message Content Intent)",
              "Interpretar comandos por prefixo, formulários e mensagens dentro de tickets.",
            ],
            [
              "Registrar comandos de aplicativo (slash commands)",
              "Disponibilizar os comandos oficiais do Grupo Capital.",
            ],
            [
              "Identificação do usuário (OAuth2 identify, email, guilds, guilds.members.read, quando aplicável)",
              "Autenticar você nos sites do Grupo Capital (ex.: painel de tickets/reembolsos) e confirmar sua participação na Comunidade.",
            ],
            [
              "Registro de auditoria (audit log)",
              "Manter histórico de ações administrativas para segurança e transparência.",
            ],
          ],
        },
        {
          type: "p",
          text: "O aplicativo **não** acessa suas mensagens diretas privadas com outras pessoas, sua senha do Discord ou dados de pagamento armazenados no Discord. Os dados obtidos por meio dessas permissões são tratados conforme a Política de Privacidade. Você pode revogar autorizações OAuth2 a qualquer momento nas configurações do Discord (Aplicativos autorizados), ciente de que isso pode impedir o uso de partes dos Serviços.",
        },
      ],
    },
    {
      id: "verificacao-identidade",
      title: "Verificação de identidade",
      blocks: [
        {
          type: "p",
          text: "Para garantir a segurança da Comunidade, impedir o acesso de menores de idade, evitar fraudes e combater a criação de contas múltiplas por pessoas banidas, o Grupo Capital pode exigir a verificação de identidade do Usuário, por meio da coleta de nome completo, data de nascimento e CPF. Ao realizar a verificação, você:",
        },
        {
          type: "ul",
          items: [
            "garante que os dados são seus e verdadeiros;",
            "concorda que a Staff valide a consistência das informações (por exemplo, a compatibilidade entre CPF e data de nascimento);",
            "reconhece que dados falsos ou pertencentes a terceiros resultam em banimento permanente e podem ser reportados às autoridades competentes.",
          ],
        },
      ],
    },
    {
      id: "conduta",
      title: "Regras de conduta",
      blocks: [
        {
          type: "p",
          text: "Ao utilizar os Serviços, você se compromete a não:",
        },
        {
          type: "ul",
          items: [
            "Praticar ou incentivar assédio, discurso de ódio, discriminação, ameaças, doxxing ou qualquer forma de violência contra outros Usuários ou membros da Staff;",
            "Publicar conteúdo ilegal, sexual envolvendo menores, que viole direitos de terceiros ou que infrinja as Diretrizes do Discord;",
            "Usar cheats, hacks, mods não autorizados, exploits, bugs, macros ou qualquer meio que altere ou prejudique o funcionamento dos Servidores;",
            'Realizar comercialização não autorizada de itens, dinheiro virtual, contas, personagens ou vantagens dos Servidores por dinheiro real ("RMT");',
            "Fazer spam, divulgação de outros servidores, golpes, phishing ou distribuição de malware;",
            "Se passar por membros da Staff, pelo Grupo Capital ou por outras pessoas;",
            "Tentar acessar áreas, dados ou sistemas sem autorização;",
            "Gravar, transmitir ou divulgar conteúdo dos Servidores em desacordo com as regras de mídia publicadas pela Staff.",
          ],
        },
        {
          type: "p",
          text: "As regras completas de roleplay e de conduta de cada Servidor são publicadas nos canais oficiais e integram estes Termos.",
        },
      ],
    },
    {
      id: "moderacao",
      title: "Moderação, sanções e banimentos",
      blocks: [
        {
          type: "p",
          text: "A Staff pode aplicar, a seu critério e de acordo com a gravidade da conduta, advertências, silenciamentos, remoção de cargos, expulsão, banimento temporário ou permanente dos Servidores, da Comunidade e dos sites, além de remover conteúdo e cancelar benefícios. O Grupo Capital poderá manter registros das sanções aplicadas (incluindo IDs de Discord e dados de verificação) para evitar que contas banidas retornem. Recursos contra sanções devem ser apresentados por ticket no servidor de suporte (discord.gg/bMM6PRWY93); a decisão final cabe à administração do Grupo Capital.",
        },
      ],
    },
    {
      id: "contribuicoes",
      title: "Contribuições, itens virtuais e reembolsos",
      blocks: [
        {
          type: "ul",
          items: [
            "O Grupo Capital pode oferecer benefícios opcionais (como cargos VIP, itens, veículos, propriedades ou moedas virtuais) mediante contribuição financeira. Esses benefícios são **licenças de uso limitadas, revogáveis e intransferíveis** dentro dos Servidores, sem valor monetário fora deles e sem qualquer direito de propriedade.",
            "Os valores, prazos e condições de cada benefício são informados no momento da compra. O Grupo Capital pode alterar, rebalancear ou descontinuar benefícios para preservar o equilíbrio do jogo, sem que isso gere direito a compensação, salvo quando previsto na política de reembolso.",
            "Pedidos de reembolso devem ser feitos pelo sistema oficial de tickets no servidor de suporte do Grupo Capital no Discord (discord.gg/bMM6PRWY93) e serão analisados conforme a política de reembolso vigente e a legislação aplicável, em especial o Código de Defesa do Consumidor.",
            "Usuários banidos por violação destes Termos não têm direito a reembolso de benefícios adquiridos.",
            "Chargebacks ou contestações indevidas junto ao meio de pagamento poderão resultar na suspensão da conta até a regularização.",
          ],
        },
      ],
    },
    {
      id: "propriedade-intelectual",
      title: "Propriedade intelectual",
      blocks: [
        {
          type: "p",
          text: "A marca Grupo Capital, os nomes Capital City e Morada do Valley, logotipos, scripts, mapas, sistemas, textos, artes, sons, o código do aplicativo Capital City e demais materiais criados pelo Grupo Capital são de sua titularidade ou licenciados a ele, e protegidos pela legislação de propriedade intelectual. É proibida a cópia, reprodução, modificação, distribuição ou uso comercial sem autorização prévia por escrito. Marcas e jogos de terceiros pertencem aos seus respectivos titulares; o Grupo Capital não é afiliado ao Discord Inc. nem às desenvolvedoras dos jogos-base utilizados.",
        },
      ],
    },
    {
      id: "conteudo-usuarios",
      title: "Conteúdo gerado por usuários",
      blocks: [
        {
          type: "p",
          text: "Ao publicar mensagens, imagens, vídeos, áudios ou qualquer outro conteúdo nos Serviços, você mantém a titularidade do que criou, mas concede ao Grupo Capital uma licença gratuita, não exclusiva e mundial para armazenar, exibir, reproduzir e utilizar esse conteúdo na operação, moderação e divulgação da Comunidade e dos Servidores. Você declara possuir os direitos necessários sobre o conteúdo publicado e é o único responsável por ele.",
        },
      ],
    },
    {
      id: "servicos-terceiros",
      title: "Serviços de terceiros",
      blocks: [
        {
          type: "p",
          text: "Os Serviços dependem de plataformas de terceiros, como Discord, provedores de hospedagem em nuvem, meios de pagamento e as plataformas dos jogos-base. O Grupo Capital não controla esses serviços e não se responsabiliza por indisponibilidades, alterações ou políticas impostas por eles. O uso dessas plataformas está sujeito aos seus próprios termos.",
        },
      ],
    },
    {
      id: "isencao-garantias",
      title: "Isenção de garantias",
      blocks: [
        {
          type: "p",
          text: 'Os Serviços são fornecidos "no estado em que se encontram" e "conforme disponibilidade", como atividade de entretenimento comunitário. O Grupo Capital não garante funcionamento ininterrupto ou livre de erros, a preservação de dados de jogo (personagens, itens, progresso) ou a compatibilidade com todos os dispositivos, e pode realizar manutenções, atualizações, resets ou encerrar Servidores a qualquer momento.',
        },
      ],
    },
    {
      id: "limitacao-responsabilidade",
      title: "Limitação de responsabilidade",
      blocks: [
        {
          type: "p",
          text: "Na máxima extensão permitida pela lei, o Grupo Capital não será responsável por danos indiretos, lucros cessantes, perda de dados de jogo, perda de itens ou benefícios virtuais, nem por condutas de outros Usuários. Nada nestes Termos exclui direitos que não possam ser afastados pela legislação brasileira, em especial pelo Código de Defesa do Consumidor.",
        },
      ],
    },
    {
      id: "indenizacao",
      title: "Indenização",
      blocks: [
        {
          type: "p",
          text: "Você concorda em isentar e indenizar o Grupo Capital, a empresa que o opera e os membros da Staff por quaisquer perdas, danos, despesas ou reclamações de terceiros decorrentes da sua violação destes Termos, das regras internas, da lei ou de direitos de terceiros, incluindo o uso indevido do aplicativo Capital City ou o fornecimento de dados falsos na verificação.",
        },
      ],
    },
    {
      id: "comunicacoes",
      title: "Comunicações",
      blocks: [
        {
          type: "p",
          text: "Ao utilizar os Serviços, você concorda em receber comunicações operacionais do Grupo Capital (avisos de manutenção, atualizações de regras, respostas de tickets, notificações de moderação e informações sobre benefícios adquiridos) por meio do Discord, do aplicativo Capital City e, quando aplicável, do e-mail vinculado à sua conta. Comunicações promocionais poderão ser desativadas a qualquer momento nas configurações de notificação do Discord ou mediante solicitação.",
        },
      ],
    },
    {
      id: "encerramento",
      title: "Encerramento",
      blocks: [
        {
          type: "p",
          text: "Você pode deixar de utilizar os Serviços a qualquer momento saindo dos servidores do Discord e solicitando a exclusão dos seus dados conforme a Política de Privacidade. O Grupo Capital pode suspender ou encerrar seu acesso, no todo ou em parte, em caso de violação destes Termos, das regras internas ou da lei, ou por razões operacionais, mediante aviso quando possível.",
        },
      ],
    },
    {
      id: "alteracoes",
      title: "Alterações destes Termos",
      blocks: [
        {
          type: "p",
          text: "Estes Termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível nesta página, com a data da última atualização. Alterações relevantes serão comunicadas nos canais oficiais da Comunidade. O uso continuado dos Serviços após a publicação das alterações significa concordância com os novos Termos.",
        },
      ],
    },
    {
      id: "lei-aplicavel",
      title: "Lei aplicável e foro",
      blocks: [
        {
          type: "p",
          text: "Estes Termos são regidos pelas leis da República Federativa do Brasil, incluindo o Marco Civil da Internet (Lei nº 12.965/2014), a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e o Código de Defesa do Consumidor (Lei nº 8.078/1990). Fica eleito o foro da comarca do domicílio do Usuário consumidor ou, nos demais casos, o foro da comarca de Machado/MG, para dirimir quaisquer controvérsias.",
        },
      ],
    },
    {
      id: "disposicoes-gerais",
      title: "Disposições gerais",
      blocks: [
        {
          type: "ul",
          items: [
            "Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais permanecerão em pleno vigor.",
            "A tolerância do Grupo Capital quanto a qualquer descumprimento não constitui renúncia ao direito de exigir o cumprimento posterior.",
            "Estes Termos, a Política de Privacidade e as regras internas publicadas nos canais oficiais constituem o acordo integral entre você e o Grupo Capital quanto ao uso dos Serviços.",
            "Você não pode ceder ou transferir seus direitos e obrigações previstos nestes Termos. O Grupo Capital poderá cedê-los a sucessores ou a empresa do mesmo grupo, mediante aviso nos canais oficiais.",
            "Títulos das seções servem apenas para orientação e não afetam a interpretação do texto.",
          ],
        },
      ],
    },
    {
      id: "contato",
      title: "Contato",
      blocks: [
        {
          type: "p",
          text: "Dúvidas, denúncias ou solicitações relacionadas a estes Termos podem ser enviadas por:",
        },
        {
          type: "ul",
          items: [
            "**Ticket de suporte** no servidor oficial do Grupo Capital no Discord: discord.gg/bMM6PRWY93;",
            "**E-mail:** contato@tronos.space.",
          ],
        },
      ],
    },
  ],
};
