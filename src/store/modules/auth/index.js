import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  token: null,
  url: null,
  env: '_',
  error: null,
  loading: false,
};

export default {
  state,
  actions,
  mutations,
};
