export const fetchLocation = async () => {
   const response = await fetch("http://ip-api.com/json/?fields=country");
   const location = await response.json();
   return location.country;
};

// export const fetchCountries = async () => {
//    try {
//       const response = await fetch("https://restcountries.com/v3.1/all");
//       const result = await response.json();
//       console.log(result);
//       return result;
//    } catch (error) {
//       console.log(error);
//    }
// };

export const fetchCountries = async () => {
   const url = "https://restcountries.com/v3.1/all?fields=name";

   try {
      const response = await fetch(url);

      if (!response.ok) {
         try {
            const errorData = await response.json();
            console.error("Failed to fetch countries (API Error):", response.status, errorData);
         } catch (jsonError) {
            console.error("Failed to fetch countries (HTTP Error):", response.status, response.statusText);
         }
         return [];
      }

      const result = await response.json();
      return result;
   } catch (error) {
      console.error("Network error fetching countries:", error);
      return [];
   }
};

export const fetchJobs = async (filters: JobFilterParams) => {
   const { query, page } = filters;

   const headers = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
   };

   const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`, {
      headers,
   });

   const result = await response.json();

   return result.data;
};
