interface UserRules {
  user: {
    static: string[];
  };
  admin: {
    static: string[];
  };
}

const rules: UserRules = {
  user: {
    static: [],
  },

  admin: {
    static: [
      'drawer-admin-items:view',
      'tickets-manager:showall',
      'user-modal:editProfile',
      'user-modal:editQueues',
      'ticket-options:deleteTicket',
      'contacts-page:deleteContact',
    ],
  },
};

export default rules;
