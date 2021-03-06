import {
  combineReducers
} from 'redux';
import api from '../../api/api';

// action type
export const FETCH_REGISTER_REQUEST = 'with-my-dog/user/FETCH_REGISTER_REQUEST';
export const FETCH_REGISTER_SUCCESS = 'with-my-dog/user/FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'with-my-dog/user/FETCH_REGISTER_FAILURE';
export const FETCH_LOGIN_REQUEST = 'with-my-dog/user/FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'with-my-dog/user/FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'with-my-dog/user/FETCH_LOGIN_FAILURE';
export const FETCH_REFRESH_REQUEST = 'with-my-dog/user/FETCH_REFRESH_REQUEST';
export const FETCH_REFRESH_SUCCESS = 'with-my-dog/user/FETCH_REFRESH_SUCCESS';
export const FETCH_REFRESH_FAILURE = 'with-my-dog/user/FETCH_REFRESH_FAILURE';

// action creator
const fetchRegisterRequest = () => ({
  type: FETCH_REGISTER_REQUEST,
});

const fetchRegisterSuccess = () => ({
  type: FETCH_REGISTER_SUCCESS,
});

const fetchRegisterFailure = message => ({
  type: FETCH_REGISTER_FAILURE,
  message,
});

const fetchRefreshRequest = () => ({
  type: FETCH_REFRESH_REQUEST,
});

const fetchRefreshSuccess = payload => ({
  type: FETCH_REFRESH_SUCCESS,
  payload,
});

const fetchRefreshFailure = message => ({
  type: FETCH_REFRESH_FAILURE,
  message,
});

const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST,
});

const fetchLoginSuccess = () => ({
  type: FETCH_LOGIN_SUCCESS,
});

const fetchLoginFailure = message => ({
  type: FETCH_LOGIN_FAILURE,
  message,
});

// fetch action
export const fetchRefresh = (authorization, refresh) => async dispatch => {
  try {
    dispatch(fetchRefreshRequest());
    const {
      data
    } = await api.get('/users', {
      headers: {
        refresh,
      },
    });
    dispatch(fetchRefreshSuccess(data));
  } catch (e) {
    dispatch(fetchRefreshFailure(e.message));
  }
};

export const fetchRegister = (email, password) => async dispatch => {
  try {
    dispatch(fetchRegisterRequest());
    const name = email.split('@')[0];
    const {
      data: {
        access,
        refresh
      },
    } = await api.post('/users', {
      email,
      password,
      name,
    });
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    dispatch(
      fetchRefresh(
        localStorage.getItem('accessToken'),
        localStorage.getItem('refreshToken'),
      ),
    );
    dispatch(fetchRegisterSuccess());
  } catch (e) {
    dispatch(fetchRegisterFailure(e.message));
  }
};

export const fetchLogin = (email, password) => async dispatch => {
  try {
    dispatch(fetchLoginRequest());
    const {
      data: {
        access,
        refresh
      },
    } = await api.post('/auth', {
      email,
      password,
    });
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    dispatch(
      fetchRefresh(
        localStorage.getItem('accessToken'),
        localStorage.getItem('refreshToken'),
      ),
    );
    dispatch(fetchLoginSuccess());
  } catch (e) {
    dispatch(fetchLoginFailure(e.message));
  }
};

// reducers
const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return true;
    case FETCH_REGISTER_SUCCESS:
    case FETCH_REGISTER_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMesasge = (state = null, action) => {
  switch (action.type) {
    case FETCH_REGISTER_FAILURE:
      return action.message;
    case FETCH_REGISTER_SUCCESS:
    case FETCH_REGISTER_REQUEST:
      return null;
    default:
      return state;
  }
};

const register = (state = false, action) => {
  switch (action.type) {
    case FETCH_REGISTER_SUCCESS:
      return true;
    case FETCH_REGISTER_REQUEST:
    case FETCH_REGISTER_FAILURE:
      return false;
    default:
      return state;
  }
};

const login = (state = false, action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return true;
    case FETCH_LOGIN_REQUEST:
    case FETCH_LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REFRESH_SUCCESS:
      const {
        name
      } = action.payload;
      return {
        ...state,
        name,
      };
    default:
      return state;
  }
};

const user = combineReducers({
  userInfo,
  register,
  login,
  isFetching,
  errorMesasge,
});

export default user;