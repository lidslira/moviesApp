import api from '~/shared/services/api';

interface ParamsProps {
  text: string;
}

export default {
  async get(
    path?: string,
    params?: ParamsProps,
    id?: string,
    API_KEY?: string,
  ) {
    const url = `${path}${id ? `${id}` : ''}${params ? `${params.text}` : ''}${
      API_KEY ? `?${API_KEY}` : ''
    }`;

    return api.get(url);
  },
};
