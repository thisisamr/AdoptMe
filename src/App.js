const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "bbb" }, "Adopt ME!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havaneese",
    }),
    React.createElement(Pet, {
      name: "max",
      animal: "dog",
      breed: "german shepard",
    }),
    React.createElement(Pet, {
      name: "doink",
      animal: "cat",
      breed: "catbreed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
