import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

type PetResponse = {
  id: string;
  name: string;
  animal: string;
  breed: string;
  city: string;
  state: string;
  description: string;
  images: string[];
};

type PetsResponse = {
  pets: PetResponse[];
};

const SearchParams = () => {
  const [pets, setPets] = useState<PetResponse[]>([]);
  const [location, setLocation] = useState<string>("");
  const [animal, setAnimal] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const breeds: string[] = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets(): Promise<void> {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json: PetsResponse = await res.json();
  
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      {
        pets.map((pet) => (
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
        ))
      }
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>

        <label htmlFor="animal">
          Animal{" "}
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          <select
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          ></select>
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
