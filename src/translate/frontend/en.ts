import { messages as backendErrors } from 'translate/backend/en';

import rules from 'validations/patterns/rules';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength } = rules;

const messages = {
  en: {
    translations: {
      form: {
        validations: {
          userName: {
            error: `Full name should be between ${userNameMinLength} and ${userNameMaxLength} characters long`,
            required: 'Full name is required.',
          },
          email: {
            isValid: 'Enter a valid email',
            required: 'Email is required.',
          },
          password: {
            error: `Password should be between ${passwMinLength} and ${passwMaxLength} characters long`,
            required: 'Password is required.',
            samePassword: 'New password cannot be the same as old password.',
          },
        },
      },
      signup: {
        title: 'Sign up',
        toasts: {
          success: 'User created successfully! Please login!',
          fail: 'Error creating user. Check the reported data.',
          error: {
            name: `Full name should be between ${userNameMinLength} and ${userNameMaxLength} characters long`,
            email: 'Enter a valid email',
            password: `Password should be between ${passwMinLength} and ${passwMaxLength} characters long`,
          },
        },
        form: {
          name: 'Full name',
          email: 'Email',
          password: 'Password',
        },
        buttons: {
          submit: 'Register',
        },
        links: {
          forgotPassword: 'Forgot password?',
          login: 'Login',
        },
      },
      login: {
        title: 'Login',
        toasts: {
          error: {
            email: 'Enter a valid email',
            password: `Password should be between ${passwMinLength} and ${passwMaxLength} characters long`,
          },
        },
        form: {
          email: 'Email',
          password: 'Password',
        },
        buttons: {
          submit: 'Enter',
        },
        links: {
          forgotPassword: 'Forgot password?',
          register: `Don't have an account? Register!`,
        },
      },
      forgotPassword: {
        title: 'I forgot the password',
        toasts: {
          success: 'Temporary password sent to the email entered',
          fail: 'Error sending temporary password to the entered email',
          error: {
            email: 'Enter a valid email',
          },
        },
        form: {
          email: 'Email',
          temporaryPassword: 'Your temporary password will appear here',
        },
        buttons: {
          submit: 'Request',
        },
        links: {
          login: 'Login',
          register: `Don't have an account? Register!`,
        },
      },
      changePassword: {
        title: 'Change password',
        toasts: {
          success: 'Password changed successfully',
          fail: 'Error when changing password',
          error: {
            email: 'Invalid email',
            oldPassword: 'Invalid password',
            newPassword: 'Invalid password',
          },
        },
        form: {
          email: 'Email',
          oldPassword: 'Old or temporary password',
          newPassword: 'New password',
        },
        buttons: {
          submit: 'Change password',
        },
        links: {
          login: 'Login',
          forgotPassword: 'Forgot password?',
        },
      },
      auth: {
        toasts: {
          success: 'Login successfully!',
        },
      },
      mainPage: {
        charts: {
          perDay: {
            title: 'Tickets today: ',
          },
        },
      },
      connections: {
        title: 'Connections',
        toasts: {
          deleted: 'WhatsApp connection deleted sucessfully!',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage: 'Are you sure? It cannot be reverted.',
          disconnectTitle: 'Disconnect',
          disconnectMessage: "Are you sure? You'll need to read QR Code again.",
        },
        buttons: {
          add: 'Add WhatsApp',
          disconnect: 'Disconnect',
          tryAgain: 'Try Again',
          qrcode: 'QR CODE',
          newQr: 'New QR CODE',
          connecting: 'Connectiing',
        },
        toolTips: {
          disconnected: {
            title: 'Failed to start WhatsApp session',
            content:
              'Make sure your cell phone is connected to the internet and try again, or request a new QR Code',
          },
          qrcode: {
            title: 'Waiting for QR Code read',
            content:
              "Click on 'QR CODE' button and read the QR Code with your cell phone to start session",
          },
          connected: {
            title: 'Connection established',
          },
          timeout: {
            title: 'Connection with cell phone has been lost',
            content:
              "Make sure your cell phone is connected to the internet and WhatsApp is open, or click on 'Disconnect' button to get a new QRcode",
          },
        },
        table: {
          name: 'Name',
          status: 'Status',
          updatedAt: 'Last Update',
          battery: 'Battery',
          isDefault: 'Default',
          session: 'Session',
          actions: 'Actions',
        },
      },
      whatsappModal: {
        title: {
          add: 'Add WhatsApp',
          edit: 'Edit WhatsApp',
        },
        form: {
          name: 'Name',
          default: 'Default',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'WhatsApp saved successfully.',
      },
      qrCode: {
        message: 'Read QrCode to start the session',
      },
      contacts: {
        title: 'Contacts',
        toasts: {
          deleted: 'Contact deleted sucessfully!',
        },
        searchPlaceholder: 'Search ...',
        confirmationModal: {
          deleteTitle: 'Delete',
          importTitlte: 'Import contacts',
          deleteMessage:
            'Are you sure you want to delete this contact? All related tickets will be lost.',
          importMessage: 'Do you want to import all contacts from the phone?',
        },
        buttons: {
          import: 'Import Contacts',
          add: 'Add Contact',
        },
        table: {
          name: 'Name',
          number: 'WhatsApp',
          email: 'Email',
          isGroup: 'Is it a Group?',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          actions: 'Actions',
        },
      },
      contactModal: {
        title: {
          add: 'Add contact',
          edit: 'Edit contact',
        },
        form: {
          mainInfo: 'Contact details',
          extraInfo: 'Additional information',
          name: 'Name',
          number: 'Whatsapp number',
          email: 'Email',
          extraName: 'Field name',
          extraValue: 'Value',
        },
        buttons: {
          addExtraInfo: 'Add information',
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'Contact saved successfully.',
      },
      quickAnswersModal: {
        title: {
          add: 'Add Quick Reply',
          edit: 'Edit Quick Answer',
        },
        form: {
          shortcut: 'Shortcut',
          message: 'Quick Reply',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'Quick Reply saved successfully.',
      },
      queueModal: {
        title: {
          add: 'Add queue',
          edit: 'Edit queue',
        },
        form: {
          name: 'Name',
          color: 'Color',
          greetingMessage: 'Greeting Message',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        toasts: {
          success: 'Queue saved successfully',
          deleted: 'Queue deleted successfully',
        },
      },
      userModal: {
        title: {
          add: 'Add user',
          edit: 'Edit user',
        },
        form: {
          name: 'Name',
          email: 'Email',
          password: 'Password',
          profile: 'Profile',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'User saved successfully.',
      },
      chat: {
        noTicketMessage: 'Select a ticket to start chatting.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'New ticket',
        },
        noContacts: 'No Contacts',
      },
      ticketsQueueSelect: {
        placeholder: 'Queues',
      },
      tickets: {
        toasts: {
          deleted: 'Ticket deleted sucessfully.',
        },
        notification: {
          message: 'Message from',
        },
        tabs: {
          open: { title: 'Inbox' },
          closed: { title: 'Resolved', badge: 'Resolved' },
          search: { title: 'Search' },
        },
        search: {
          placeholder: 'Tickets and messages.',
        },
        buttons: {
          showAll: 'Show all',
        },
      },
      transferTicketModal: {
        title: 'Transfer Ticket',
        fieldLabel: 'Type to search for users',
        noOptions: 'No user found with this name',
        buttons: {
          ok: 'Transfer',
          cancel: 'Cancel',
        },
      },
      ticketsList: {
        pendingHeader: 'Queue',
        assignedHeader: 'Working on',
        noTicketsTitle: 'Nothing here!',
        noTicketsMessage: 'No tickets found with this status or search term.',
        buttons: {
          accept: 'Accept',
        },
      },
      newTicketModal: {
        title: 'Create Ticket',
        fieldLabel: 'Type to search for a contact',
        add: 'Add',
        buttons: {
          ok: 'Save',
          cancel: 'Cancel',
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: 'Dashboard',
          connections: 'Connections',
          tickets: 'Tickets',
          contacts: 'Contacts',
          quickAnswers: 'Quick Answers',
          queues: 'Queues',
          administration: 'Administration',
          users: 'Users',
        },
        appBar: {
          user: {
            profile: 'Profile',
            logout: 'Logout',
          },
        },
      },
      notifications: {
        noTickets: 'No notifications.',
      },
      queues: {
        title: 'Queues',
        table: {
          name: 'Name',
          color: 'Color',
          greetingMessage: 'Greeting message',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add queue',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage:
            'Are you sure? It cannot be reverted! Tickets in this queue will still exist, but will not have any queues assigned.',
        },
      },
      queueSelect: {
        inputLabel: 'Queues',
      },
      quickAnswers: {
        title: 'Quick Answers',
        table: {
          shortcut: 'Shortcut',
          message: 'Quick Reply',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add Quick Reply',
        },
        toasts: {
          deleted: 'Quick Reply deleted successfully.',
        },
        searchPlaceholder: 'Search...',
        confirmationModal: {
          deleteTitle: 'Are you sure you want to delete this Quick Reply: ',
          deleteMessage: 'This action cannot be undone.',
        },
      },
      users: {
        title: 'Users',
        table: {
          id: 'Id',
          name: 'Name',
          email: 'Email',
          profile: 'Profile',
          customer: 'Customer',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add user',
        },
        toasts: {
          deleted: 'User deleted sucessfully.',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage: "All user data will be lost. Users' open tickets will be moved to queue.",
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Assigned to:',
          buttons: {
            return: 'Return',
            resolve: 'Resolve',
            reopen: 'Reopen',
            accept: 'Accept',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Type a message',
        placeholderClosed: 'Reopen or accept this ticket to send a message.',
        signMessage: 'Sign',
      },
      contactDrawer: {
        header: 'Contact details',
        buttons: {
          edit: 'Edit contact',
        },
        extraInfo: 'Other information',
      },
      ticketOptionsMenu: {
        delete: 'Delete',
        transfer: 'Transfer',
        confirmationModal: {
          title: 'Delete ticket #',
          titleFrom: 'from contact ',
          message: "Attention! All ticket's related messages will be lost.",
        },
        buttons: {
          delete: 'Delete',
          cancel: 'Cancel',
        },
      },
      confirmationModal: {
        buttons: {
          confirm: 'Ok',
          cancel: 'Cancel',
        },
      },
      messageOptionsMenu: {
        delete: 'Delete',
        reply: 'Reply',
        confirmationModal: {
          title: 'Delete message?',
          message: 'This action cannot be reverted.',
        },
      },
      backendErrors,
    },
  },
};

export { messages };
