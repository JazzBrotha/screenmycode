import Api from '@/services/Api';

export default {
  register(credentials: object) {
    return Api().post('register', credentials);
  },
};
