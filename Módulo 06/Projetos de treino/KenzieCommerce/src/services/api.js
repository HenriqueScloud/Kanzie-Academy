export const fetchAPI = async () => {
  const url = "https://hardware-fake-api.onrender.com/api/hardwares";
  const data = await fetch(url).then((response) => response.json());
  // const data = await fetch(url);
  // console.log(data);
  // console.log(data);

  return data;
};

// fetchAPI();
