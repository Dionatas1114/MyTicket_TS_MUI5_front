const defaultState: any = null;

export default function (state = defaultState, action: any) {
  switch (action.type) {
    case '@user/LOGIN':
      // action.data.user.name
      return action.data;
    case '@user/LOGOUT':
      return defaultState;
    default:
      return state;
  }
}
