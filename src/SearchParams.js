import { useContext, useState } from "react";
// import useBreed from "./hooks/useBreed"; // using swr scott moss way
import useBreedList from "./hooks/useBreeedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  // const { isError, isLoading, breedList } = useBreed(animal);// swr hook
  const [breedList, status, error] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  if (status == "loading") {
    return <h2>LOADINGG!!!!</h2>;
  }
  if (status == "error") {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="search-params">
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          className="location"
          value={location}
          placeholder="Location"
        />
        <label htmlFor="animal">Animals</label>
        <select
          id="animals"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal, i) => (
            <option value={animal} key={i}>
              {animal}
            </option>
          ))}
          /
        </select>
        <label htmlFor="breeds">Breeds</label>
        <select
          id="breeds"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        >
          <option />
          {breedList?.map((b, i) => {
            return (
              <option value={b} key={i}>
                {b}
              </option>
            );
          })}
        </select>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        ;
        <button style={{ backgroundColor: theme }} type="submit">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
