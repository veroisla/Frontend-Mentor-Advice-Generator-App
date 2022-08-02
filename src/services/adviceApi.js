const getApiData = () => {
  return fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default getApiData;
