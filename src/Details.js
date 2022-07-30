import { Component } from "react";
import { useParams } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
class Details extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { loading: true };
  //   }
  state = { loading: true, showModal: false };
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
    );
    const json = await res.json();
    this.setState({ loading: false, ...json?.pets[0] });
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        {/* <Carousel images={images} /> */}
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedComponent = () => {
  const { id } = useParams();
  return (
    <ErrorBoundary>
      <Details id={id} />
    </ErrorBoundary>
  );
};
export default WrappedComponent;
