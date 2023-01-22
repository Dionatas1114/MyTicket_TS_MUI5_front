import { messages as backendErrors } from 'translate/backend/es';

import rules from 'validations/patterns/rules';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength } = rules;

const messages = {
  es: {
    translations: {
      form: {
        validations: {
          userName: {
            error: `El nombre debe tener entre ${userNameMinLength} y ${userNameMaxLength} characters`,
            required: 'El nombre completo es obligatorio.',
          },
          email: {
            isValid: 'Introduzca un email Válido',
            required: 'O email es obligatorio.',
          },
          password: {
            error: `La contraseña debe tener entre ${passwMinLength} y ${passwMaxLength} characteres`,
            required: 'La contraseña es obligatoria.',
            samePassword: 'La nueva contraseña no puede ser la misma que la anterior.',
          },
        },
      },
      signup: {
        title: 'Registro',
        toasts: {
          success: '¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!',
          fail: 'Error creando el usuario. Verifica los datos ingresados.',
          error: {
            name: `El nombre debe tener entre ${userNameMinLength} y ${userNameMaxLength} characters`,
            email: 'Email inválido',
            password: `La contraseña debe tener entre ${passwMinLength} y ${passwMaxLength} characteres`,
          },
        },
        form: {
          name: 'Nombre Completo',
          email: 'Email',
          password: 'Contraseña',
        },
        buttons: {
          submit: 'Regístrate',
        },
        links: {
          forgotPassword: '¿Has olvidado tu contraseña?',
          login: 'Login',
        },
      },
      login: {
        title: 'Inicio de Sesión',
        toasts: {
          error: {
            email: 'Email inválido',
            password: `La contraseña debe tener entre ${passwMinLength} y ${passwMaxLength} characteres`,
          },
        },
        form: {
          email: 'Email',
          password: 'Contraseña',
        },
        buttons: {
          submit: 'Ingresa',
        },
        links: {
          forgotPassword: '¿Has olvidado tu contraseña?',
          register: '¿No tienes cuenta? ¡Regístrate!',
        },
      },
      forgotPassword: {
        title: 'Olvidé la contraseña',
        toasts: {
          success: 'Contraseña temporal enviada al correo ingresado',
          fail: 'Error al enviar la contraseña temporal al email ingresado',
          error: {
            email: 'Email inválido',
          },
        },
        form: {
          email: 'Email',
          temporaryPassword: 'Su contraseña temporal aparecerá aquí',
        },
        buttons: {
          submit: 'Solicitar',
        },
        links: {
          login: '¿Ya tienes una cuenta? ¡Inicia sesión!',
          register: '¿No tienes cuenta? ¡Regístrate!',
        },
      },
      changePassword: {
        title: 'Cambiar la contraseña',
        toasts: {
          success: 'Contraseña cambiada satisfactoriamente',
          fail: 'Error al cambiar contraseña',
          error: {
            email: 'Email inválido',
            oldPassword: 'Contraseña inválida',
            newPassword: 'Contraseña inválida',
          },
        },
        form: {
          email: 'Email',
          oldPassword: 'Contraseña antigua o temporal',
          newPassword: 'Nueva contraseña',
        },
        buttons: {
          submit: 'Cambiar la contraseña',
        },
        links: {
          login: 'Login',
          forgotPassword: '¿Has olvidado tu contraseña?',
        },
      },
      auth: {
        toasts: {
          success: '¡Inicio de sesión exitoso!',
        },
      },
      mainPage: {
        charts: {
          perDay: {
            title: 'Tickets hoy: ',
          },
        },
      },
      connections: {
        title: 'Conexiones',
        toasts: {
          deleted: '¡La conexión de WhatsApp ha sido borrada satisfactoriamente!',
        },
        confirmationModal: {
          deleteTitle: 'Borrar',
          deleteMessage: '¿Estás seguro? Este proceso no puede ser revertido.',
          disconnectTitle: 'Desconectar',
          disconnectMessage: 'Estás seguro? Deberá volver a leer el código QR',
        },
        buttons: {
          add: 'Agrega WhatsApp',
          disconnect: 'Desconectar',
          tryAgain: 'Inténtalo de nuevo',
          qrcode: 'QR CODE',
          newQr: 'Nuevo QR CODE',
          connecting: 'Conectando',
        },
        toolTips: {
          disconnected: {
            title: 'No se pudo iniciar la sesión de WhatsApp',
            content:
              'Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR',
          },
          qrcode: {
            title: 'Esperando la lectura del código QR',
            content:
              "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: 'Conexión establecida',
          },
          timeout: {
            title: 'Se perdió la conexión con el teléfono celular',
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: 'Nombre',
          status: 'Estado',
          updatedAt: 'Última Actualización',
          battery: 'Batería',
          isDefault: 'Por Defecto',
          session: 'Sesión',
          actions: 'Acciones',
        },
      },
      whatsappModal: {
        title: {
          add: 'Agrega WhatsApp',
          edit: 'Edita WhatsApp',
        },
        form: {
          name: 'Nombre',
          default: 'Por Defecto',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'WhatsApp guardado satisfactoriamente.',
      },
      qrCode: {
        message: 'Lée el código QR para empezar la sesión.',
      },
      contacts: {
        title: 'Contactos',
        toasts: {
          deleted: '¡Contacto borrado satisfactoriamente!',
        },
        searchPlaceholder: 'Buscar...',
        confirmationModal: {
          deleteTitle: 'Borrar',
          importTitlte: 'Importar contactos',
          deleteMessage:
            '¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.',
          importMessage: '¿Quieres importar todos los contactos desde tu teléfono?',
        },
        buttons: {
          import: 'Importar Contactos',
          add: 'Agregar Contacto',
        },
        table: {
          name: 'Nombre',
          number: 'WhatsApp',
          email: 'Correo Electrónico',
          isGroup: '¿Es un Grupo?',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          actions: 'Acciones',
        },
      },
      contactModal: {
        title: {
          add: 'Agregar contacto',
          edit: 'Editar contacto',
        },
        form: {
          mainInfo: 'Detalles del contacto',
          extraInfo: 'Información adicional',
          name: 'Nombre',
          number: 'Número de Whatsapp',
          email: 'Correo Electrónico',
          extraName: 'Nombre del Campo',
          extraValue: 'Valor',
        },
        buttons: {
          addExtraInfo: 'Agregar información',
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Contacto guardado satisfactoriamente.',
      },
      quickAnswersModal: {
        title: {
          add: 'Agregar respuesta rápida',
          edit: 'Editar respuesta rápida',
        },
        form: {
          shortcut: 'Atajo',
          message: 'Respuesta rápida',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Respuesta rápida guardada correctamente.',
      },
      queueModal: {
        title: {
          add: 'Agregar cola',
          edit: 'Editar cola',
        },
        form: {
          name: 'Nombre',
          color: 'Color',
          greetingMessage: 'Mensaje de saludo',
        },
        buttons: {
          okAdd: 'Añadir',
          okEdit: 'Ahorrar',
          cancel: 'Cancelar',
        },
        toasts: {
          success: 'Cola guardada con éxito',
          deleted: 'Cola borrada con éxito',
        },
      },
      userModal: {
        title: {
          add: 'Agregar usuario',
          edit: 'Editar usuario',
        },
        form: {
          name: 'Nombre',
          email: 'Correo Electrónico',
          password: 'Contraseña',
          profile: 'Perfil',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Usuario guardado satisfactoriamente.',
      },
      chat: {
        noTicketMessage: 'Selecciona un ticket para empezar a chatear.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'Nuevo ticket',
        },
        noContacts: 'No hay contactos para mostrar',
      },
      ticketsQueueSelect: {
        placeholder: 'Linhas',
      },
      tickets: {
        toasts: {
          deleted: 'El ticket ha sido borrado.',
        },
        notification: {
          message: 'Mensaje de',
        },
        tabs: {
          open: { title: 'Bandeja' },
          closed: { title: 'Resueltos', badge: 'Resuelto' },
          search: { title: 'Buscar' },
        },
        search: {
          placeholder: 'Tickets y mensajes.',
        },
        buttons: {
          showAll: 'Ver todos',
        },
      },
      transferTicketModal: {
        title: 'Transferir Ticket',
        fieldLabel: 'Escriba para buscar usuarios',
        noOptions: 'No se encontraron usuarios con ese nombre',
        buttons: {
          ok: 'Transferir',
          cancel: 'Cancelar',
        },
      },
      ticketsList: {
        pendingHeader: 'Cola',
        assignedHeader: 'Trabajando en',
        noTicketsTitle: '¡Nada acá!',
        noTicketsMessage: 'No se encontraron tickets con este estado o término de búsqueda',
        buttons: {
          accept: 'Acceptar',
        },
      },
      newTicketModal: {
        title: 'Crear Ticket',
        fieldLabel: 'Escribe para buscar un contacto',
        add: 'Añadir',
        buttons: {
          ok: 'Guardar',
          cancel: 'Cancelar',
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: 'Dashboard',
          connections: 'Conexiones',
          tickets: 'Tickets',
          contacts: 'Contactos',
          quickAnswers: 'Respuestas rápidas',
          queues: 'Linhas',
          administration: 'Administración',
          users: 'Usuarios',
        },
        appBar: {
          user: {
            profile: 'Perfil',
            logout: 'Cerrar Sesión',
          },
        },
      },
      notifications: {
        noTickets: 'Sin notificaciones.',
      },
      queues: {
        title: 'Linhas',
        table: {
          name: 'Nombre',
          color: 'Color',
          greetingMessage: 'Mensaje de saludo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          actions: 'Comportamiento',
        },
        buttons: {
          add: 'Agregar cola',
        },
        confirmationModal: {
          deleteTitle: 'Eliminar',
          deleteMessage:
            '¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.',
        },
      },
      queueSelect: {
        inputLabel: 'Linhas',
      },
      quickAnswers: {
        title: 'Respuestas rápidas',
        table: {
          shortcut: 'Atajo',
          message: 'Respuesta rápida',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          actions: 'Acciones',
        },
        buttons: {
          add: 'Agregar respuesta rápida',
        },
        toasts: {
          deleted: 'Respuesta rápida eliminada correctamente',
        },
        searchPlaceholder: 'Buscar ...',
        confirmationModal: {
          deleteTitle: '¿Está seguro de que desea eliminar esta respuesta rápida?',
          deleteMessage: 'Esta acción no se puede deshacer.',
        },
      },
      users: {
        title: 'Usuarios',
        table: {
          id: 'Id',
          name: 'Nombre',
          email: 'Correo Electrónico',
          profile: 'Perfil',
          customer: 'Empresa',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          actions: 'Acciones',
        },
        buttons: {
          add: 'Agregar usuario',
        },
        toasts: {
          deleted: 'Usuario borrado satisfactoriamente.',
        },
        confirmationModal: {
          deleteTitle: 'Borrar',
          deleteMessage:
            'Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la cola.',
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Asignado a:',
          buttons: {
            return: 'Devolver',
            resolve: 'Resolver',
            reopen: 'Reabrir',
            accept: 'Aceptar',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Escribe un mensaje',
        placeholderClosed: 'Vuelva a abrir o acepte este ticket para enviar un mensaje.',
        signMessage: 'Firmar',
      },
      contactDrawer: {
        header: 'Detalles del contacto',
        buttons: {
          edit: 'Editar contacto',
        },
        extraInfo: 'Otra información',
      },
      ticketOptionsMenu: {
        delete: 'Borrar',
        transfer: 'Transferir',
        confirmationModal: {
          title: '¿Borrar ticket #',
          titleFrom: 'del contacto ',
          message:
            '¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.',
        },
        buttons: {
          delete: 'Borrar',
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
        delete: 'Borrar',
        reply: 'Responder',
        confirmationModal: {
          title: '¿Borrar mensaje?',
          message: 'Esta acción no puede ser revertida.',
        },
      },
      backendErrors,
    },
  },
};

export { messages };
