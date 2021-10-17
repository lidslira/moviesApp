import {GenresProps, MoviesProps} from '~/dtos';

export const DateFormat = (realeaseDate: string) => {
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const data = new Date(realeaseDate);
  const dataFormatada = `${data.getDate()} ${
    meses[data.getMonth()]
  } ${data.getFullYear()}`;
  return dataFormatada;
};

export const MovieGenres = (genre: any[]) => {
  const newArray = genre.map((item) => item.name).join(', ');
  return newArray;
};
