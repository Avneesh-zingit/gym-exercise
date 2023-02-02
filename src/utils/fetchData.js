export const  exerciseOptions =   {
    method: 'GET',
   
    headers: {
      
      
      'X-RapidAPI-Key':'21beecf841mshc1b36c25129a758p1400aejsne3a192061312',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export  const fetchData= async (url, options)=>{
const response = await fetch (url , options);
const data = await response.json();

return data;

}