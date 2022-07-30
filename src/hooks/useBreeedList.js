import { useEffect, useState } from "react";
//you should use somthing like localstorage
const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);

  const [status, setStatus] = useState("unloaded");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(animal);
    }
  }, [animal]);

  async function requestBreedList(animal) {
    setBreedList([]);
    setStatus("loading");
    try {
      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    } catch (error) {
      setStatus("error");
      setError(error.message);
    }
  }
  return [breedList, status, error];
}
