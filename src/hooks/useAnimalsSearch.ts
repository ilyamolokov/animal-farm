import { useEffect, useState } from "react";

const useAnimalsSearch = () => {
    const [animals, setAnimals] = useState<any>([]);

    useEffect(()=>{
      const lastQuery = localStorage.getItem('lastQuery');
      handleSearch(lastQuery)
      document.getElementById('search')?.setAttribute('value', lastQuery ?? '');
    },[])
  
    // протипировать нормально
    const handleSearch = async (q: any) => {
      fetch(
        'http://localhost:8080/?' + new URLSearchParams({ q }))
        .then(res => res.json())
        .then(data => setAnimals(data))
        .catch(() => console.log("no data found"))
      localStorage.setItem('lastQuery', q)
    }
    return {handleSearch, animals}
}

export default useAnimalsSearch;