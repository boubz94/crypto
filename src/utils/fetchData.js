export const cryptoOptions = {
  method: "GET",
  // url: 'https://coinranking1.p.rapidapi.com/coins',


};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
