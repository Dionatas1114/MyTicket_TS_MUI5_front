import { messages as backendErrors } from 'translate/backend/pt';

import rules from 'validations/patterns/rules';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength } = rules;

const messages = {
  pt: {
    translations: {
      form: {
        validations: {
          userName: {
            error: `o nome deve ter entre ${userNameMinLength} e ${userNameMaxLength} caracteres`,
            required: 'O nome completo é obrigatório.',
          },
          email: {
            isValid: 'Insira um email Válido',
            required: 'O email é obrigatório.',
          },
          password: {
            error: `A senha deve ter entre ${passwMinLength} e ${passwMaxLength} caracteres`,
            required: 'A senha é obrigatória.',
            samePassword: 'A nova senha não pode ser igual à anterior.',
          },
        },
      },
      signup: {
        title: 'Cadastre-se',
        toasts: {
          success: 'Usuário criado com sucesso! Faça login.',
          fail: 'Erro ao criar usuário. Verifique os dados informados.',
          error: {
            name: `o nome deve ter entre ${userNameMinLength} e ${userNameMaxLength} caracteres`,
            email: 'Email inválido',
            password: `A senha deve ter entre ${passwMinLength} e ${passwMaxLength} caracteres`,
          },
        },
        form: {
          name: 'Nome Completo',
          email: 'Email',
          password: 'Senha',
        },
        buttons: {
          submit: 'Cadastrar',
        },
        links: {
          forgotPassword: 'Esqueceu a senha?',
          login: 'Login',
        },
      },
      login: {
        title: 'Login',
        toasts: {
          error: {
            email: 'Email inválido',
            password: `A senha deve ter entre ${passwMinLength} e ${passwMaxLength} caracteres`,
          },
        },
        form: {
          email: 'Email',
          password: 'Senha',
        },
        buttons: {
          submit: 'Entrar',
        },
        links: {
          forgotPassword: 'Esqueceu a senha?',
          register: 'Não tem conta? Cadastre-se!',
        },
      },
      forgotPassword: {
        title: 'Esqueci a senha',
        toasts: {
          success: 'Senha provisória enviada para o email inserido',
          fail: 'Erro ao enviar senha provisória para o email inserido',
          error: {
            email: 'Email inválido',
          },
        },
        form: {
          email: 'Email',
          temporaryPassword: 'Sua senha provisória aparecerá aqui',
        },
        buttons: {
          submit: 'Solicitar',
        },
        links: {
          login: 'Já tem conta? Entre!',
          register: 'Não tem conta? Cadastre-se!',
        },
      },
      changePassword: {
        title: 'Alterar a senha',
        toasts: {
          success: 'Senha alterada com sucesso',
          fail: 'Erro ao alterar a senha',
          error: {
            email: 'Email inválido',
            oldPassword: 'Senha inválida',
            newPassword: 'Senha inválida',
          },
        },
        form: {
          email: 'Email',
          oldPassword: 'Senha antiga ou provisória',
          newPassword: 'Nova senha',
        },
        buttons: {
          submit: 'Alterar',
        },
        links: {
          login: 'Já tem conta? Entre!',
          forgotPassword: 'Esqueceu a senha?',
        },
      },
      auth: {
        toasts: {
          success: 'Login efetuado com sucesso!',
        },
      },
      mainPage: {
        charts: {
          perDay: {
            title: 'Tickets hoje: ',
          },
        },
      },
      connections: {
        title: 'Conexões',
        toasts: {
          deleted: 'Conexão com o WhatsApp excluída com sucesso!',
        },
        confirmationModal: {
          deleteTitle: 'Deletar',
          deleteMessage: 'Você tem certeza? Essa ação não pode ser revertida.',
          disconnectTitle: 'Desconectar',
          disconnectMessage: 'Tem certeza? Você precisará ler o QR Code novamente.',
        },
        buttons: {
          add: 'Adicionar WhatsApp',
          disconnect: 'desconectar',
          tryAgain: 'Tentar novamente',
          qrcode: 'QR CODE',
          newQr: 'Novo QR CODE',
          connecting: 'Conectando',
        },
        toolTips: {
          disconnected: {
            title: 'Falha ao iniciar sessão do WhatsApp',
            content:
              'Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo QR Code',
          },
          qrcode: {
            title: 'Esperando leitura do QR Code',
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com o seu celular para iniciar a sessão",
          },
          connected: {
            title: 'Conexão estabelecida!',
          },
          timeout: {
            title: 'A conexão com o celular foi perdida',
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: 'Nome',
          status: 'Status',
          updatedAt: 'Última atualização',
          battery: 'Bateria',
          isDefault: 'Padrão',
          session: 'Sessão',
          actions: 'Ações',
        },
      },
      whatsappModal: {
        title: {
          add: 'Adicionar WhatsApp',
          edit: 'Editar WhatsApp',
        },
        form: {
          name: 'Nome',
          default: 'Padrão',
          farewellMessage: 'Mensagem de despedida',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'WhatsApp salvo com sucesso.',
      },
      qrCode: {
        message: 'Leia o QrCode para iniciar a sessão',
      },
      contacts: {
        title: 'Contatos',
        toasts: {
          deleted: 'Contato excluído com sucesso!',
        },
        searchPlaceholder: 'Pesquisar...',
        confirmationModal: {
          deleteTitle: 'Deletar ',
          importTitlte: 'Importar contatos',
          deleteMessage:
            'Tem certeza que deseja deletar este contato? Todos os tickets relacionados serão perdidos.',
          importMessage: 'Deseja importas todos os contatos do telefone?',
        },
        buttons: {
          import: 'Importar Contatos',
          add: 'Adicionar Contato',
        },
        table: {
          name: 'Nome',
          number: 'WhatsApp',
          email: 'Email',
          isGroup: 'É um Grupo?',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          actions: 'Ações',
        },
      },
      contactModal: {
        title: {
          add: 'Adicionar contato',
          edit: 'Editar contato',
        },
        form: {
          mainInfo: 'Dados do contato',
          extraInfo: 'Informações adicionais',
          name: 'Nome',
          number: 'Número do Whatsapp',
          email: 'Email',
          extraName: 'Nome do campo',
          extraValue: 'Valor',
        },
        buttons: {
          addExtraInfo: 'Adicionar informação',
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Contato salvo com sucesso.',
      },
      quickAnswersModal: {
        title: {
          add: 'Adicionar Resposta Rápida',
          edit: 'Editar Resposta Rápida',
        },
        form: {
          shortcut: 'Atalho',
          message: 'Resposta Rápida',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Resposta Rápida salva com sucesso.',
      },
      queueModal: {
        title: {
          add: 'Adicionar fila',
          edit: 'Editar fila',
        },
        form: {
          name: 'Nome',
          color: 'Cor',
          greetingMessage: 'Mensagem de saudação',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        toasts: {
          success: 'Fila salva com sucesso',
          deleted: 'Fila deletada com sucesso',
        },
      },
      userModal: {
        title: {
          add: 'Adicionar usuário',
          edit: 'Editar usuário',
        },
        form: {
          name: 'Nome',
          email: 'Email',
          password: 'Senha',
          profile: 'Perfil',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Usuário salvo com sucesso.',
      },
      chat: {
        noTicketMessage: 'Selecione um ticket para começar a conversar.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'Novo ticket',
        },
        noContacts: 'Sem contatos para exibir',
      },
      ticketsQueueSelect: {
        placeholder: 'Filas',
      },
      tickets: {
        toasts: {
          deleted: 'O ticket foi deletado.',
        },
        notification: {
          message: 'Mensagem de',
        },
        tabs: {
          open: { title: 'Inbox' },
          closed: { title: 'Resolvidos', badge: 'Resolvido' },
          search: { title: 'Busca' },
        },
        search: {
          placeholder: 'Tickets e mensagens',
        },
        buttons: {
          showAll: 'Todos',
        },
      },
      transferTicketModal: {
        title: 'Transferir Ticket',
        fieldLabel: 'Digite para buscar usuários',
        noOptions: 'Nenhum usuário encontrado com esse nome',
        buttons: {
          ok: 'Transferir',
          cancel: 'Cancelar',
        },
      },
      ticketsList: {
        pendingHeader: 'Aguardando',
        assignedHeader: 'Atendendo',
        noTicketsTitle: 'Nada aqui!',
        noTicketsMessage: 'Nenhum ticket encontrado com esse status ou termo pesquisado',
        buttons: {
          accept: 'Aceitar',
        },
      },
      newTicketModal: {
        title: 'Criar Ticket',
        fieldLabel: 'Digite para pesquisar o contato',
        add: 'Adicionar',
        buttons: {
          ok: 'Salvar',
          cancel: 'Cancelar',
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: 'Dashboard',
          connections: 'Conexões',
          tickets: 'Tickets',
          contacts: 'Contatos',
          quickAnswers: 'Respostas Rápidas',
          queues: 'Filas',
          administration: 'Administração',
          users: 'Usuários',
        },
        appBar: {
          user: {
            profile: 'Perfil',
            logout: 'Sair',
          },
        },
      },
      notifications: {
        noTickets: 'Nenhuma notificação.',
      },
      queues: {
        title: 'Filas',
        table: {
          name: 'Nome',
          color: 'Cor',
          greetingMessage: 'Mensagem de saudação',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar fila',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Você tem certeza? Essa ação não pode ser revertida! Os tickets dessa fila continuarão existindo, mas não terão mais nenhuma fila atribuída.',
        },
      },
      queueSelect: {
        inputLabel: 'Filas',
      },
      quickAnswers: {
        title: 'Respostas Rápidas',
        table: {
          shortcut: 'Atalho',
          message: 'Resposta Rápida',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar Resposta Rápida',
        },
        toasts: {
          deleted: 'Resposta Rápida excluída com sucesso.',
        },
        searchPlaceholder: 'Pesquisar...',
        confirmationModal: {
          deleteTitle: 'Você tem certeza que quer excluir esta Resposta Rápida: ',
          deleteMessage: 'Esta ação não pode ser revertida.',
        },
      },
      users: {
        title: 'Usuários',
        table: {
          id: 'Id',
          name: 'Nome',
          email: 'Email',
          profile: 'Perfil',
          customer: 'Empresa',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar usuário',
        },
        toasts: {
          deleted: 'Usuário excluído com sucesso.',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Todos os dados do usuário serão perdidos. Os tickets abertos deste usuário serão movidos para a fila.',
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Atribuído à:',
          buttons: {
            return: 'Retornar',
            resolve: 'Resolver',
            reopen: 'Reabrir',
            accept: 'Aceitar',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Digite uma mensagem',
        placeholderClosed: 'Reabra ou aceite esse ticket para enviar uma mensagem.',
        signMessage: 'Assinar',
      },
      contactDrawer: {
        header: 'Dados do contato',
        buttons: {
          edit: 'Editar contato',
        },
        extraInfo: 'Outras informações',
      },
      ticketOptionsMenu: {
        delete: 'Deletar',
        transfer: 'Transferir',
        confirmationModal: {
          title: 'Deletar o ticket do contato',
          message: 'Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.',
        },
        buttons: {
          delete: 'Excluir',
          cancel: 'Cancelar',
        },
      },
      confirmationModal: {
        buttons: {
          confirm: 'Ok',
          cancel: 'Cancelar',
        },
      },
      messageOptionsMenu: {
        delete: 'Deletar',
        reply: 'Responder',
        confirmationModal: {
          title: 'Apagar mensagem?',
          message: 'Esta ação não pode ser revertida.',
        },
      },
      backendErrors,
    },
  },
};

export { messages };
