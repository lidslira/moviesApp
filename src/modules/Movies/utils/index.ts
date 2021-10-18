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
  const newArray = genre
    .map((item) => item.name)
    .join(', ')
    .replace(/, ([^,]*)$/, ' and $1');
  return newArray;
};

export const CreditsDetails = (credits: any[]) => {
  const newArray: any[] = [];
  let uniqueArr: any[] = [];
  credits.map((item) => {
    if (item.known_for_department === 'Directing') {
      return newArray.push(item.name);
    }
    return null;
  });
  uniqueArr = [...new Set(newArray)];
  return uniqueArr.join(', ').replace(/, ([^,]*)$/, ' and $1');
};
