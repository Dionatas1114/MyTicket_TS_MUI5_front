// import rules from './rules';

// function checkPermission (role: string, action: any, data: any) {
//   // (key: string) => (obj: object) => obj[key]
//   const permissions = rules[role];
//   if (!permissions) return false;

//   const staticPermissions = permissions.static;
//   const dynamicPermissions = permissions.dynamic;

//   if (staticPermissions && staticPermissions.includes(action)) return true;

//   if (dynamicPermissions) {
//     const permissionCondition = dynamicPermissions[action];
//     if (!permissionCondition) return false;
//     return permissionCondition(data);
//   }
//   return false;
// };

// interface ControlView {
//   role: any;
//   perform: any;
//   data: any;
//   yes: any;
//   no: any;
// }

// function userControlView ({ role, perform, data, yes, no }: ControlView) {
//   checkPermission(role, perform, data) ? yes() : no();
// };

// userControlView.defaultProps = {
//   yes: () => null,
//   no: () => null,
// };

// export { userControlView };
