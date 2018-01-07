import * as ActionType from '../actions';


const callApi = (state = '', action) => {
  switch (action.type) {
    case ActionType.TEST_API:
      return {
        ...state,
        codeResponse: `Code response : ${action.payload.status}`,
        message: action.payload.data.message,
        database: action.payload.data.database,
      };
    case ActionType.CREATE_USER_API:
      return {
        ...state,
        res: action.payload,

      };
    default:
      return state;
  }
};

const loginAuth = (state = {
  isLoginAuthenticated: false,
  location: '',
  token: '',
}, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.LOGIN_USER_API:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
        token: action.payload.token,
      };
    case ActionType.LOGOUT_USER:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
        token: action.payload.token,
      };
    case ActionType.CHECK_AUTH:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export { callApi, loginAuth };
