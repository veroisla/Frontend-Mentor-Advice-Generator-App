const getApiData = () => {
  return fetch('https://api.adviceslip.com')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getApiData;
