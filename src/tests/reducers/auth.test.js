import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };

  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer({uid: 'anything'}, action);
  expect(state).toEqual({});  
});


// export default (state = {}, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         uuid: action.uuid
//       };
//     case 'LOGOUT':
//       return {};
//     default:
//       return state;
//   }
// };
