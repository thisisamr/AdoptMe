import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets Found!!</h1>
      ) : (
        pets.map((p) => (
          <Pet
            animal={p.animal}
            breed={p.breed}
            name={p.name}
            key={p.id}
            images={p.images}
            location={`${p.city} - ${p.state}`}
            id={p.id}
          />
        ))
      )}
    </div>
  );
}
