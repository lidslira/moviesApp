import api from '~/shared/services/api';

interface ParamsProps {
  text: string;
}

export default {
  async get(
    path?: string,
    params?: ParamsProps,
    id?: string,
    credits?: string,
    key?: string,
  ) {
    const url = `${path}${id ? `${id}` : ''}${params ? `${params.text}` : ''}${
      credits ? `${credits}` : ''
    }${key ? `?${key}` : ''}`;

    return api.get(url);
  },
};
