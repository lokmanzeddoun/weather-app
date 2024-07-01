const CITY_API_URL = "https://api.api-ninjas.com/v1/city";

const CITY_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-Api-Key": `gtLL4SUyG4SGZ6yQoQbEZA==gxY6h4QlypnbsK1u`,
  },
};

const fetchCities = async ({ queryKey }) => {
  let [input] = queryKey;
  try {
    const response = await fetch(
      `${CITY_API_URL}?name=${input}&limit=5`,
      CITY_API_OPTIONS,
    );

    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default fetchCities;
