import api from '~/shared/services/api';

interface ParamsProps {
  text: string;
}

export default {
  async get(path?: string, params?: ParamsProps, id?: string) {
    const url = `${path}${id ? `/${id}` : ''}${
      params ? `?q=${params.text}` : ''
    }`;

    return api.get(url);
  },
};
