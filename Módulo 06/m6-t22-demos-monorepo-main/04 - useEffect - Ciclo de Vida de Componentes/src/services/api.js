export const fetchAPI = async () => {
  const url = "https://api.spaceflightnewsapi.net/v4/articles";
  const data = await fetch(url).then((response) => response.json());

  return data.results;
};

// fetchAPI();
