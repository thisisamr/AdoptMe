import React from "react";

export default class Carousel extends React.Component {
  state = { active: 0 };
  static defualProps = { images: "https://placedog.net/500" };
  handleIndexClick = (e) => {
    this.setState({ active: e.target.dataset.lol });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img
          src={!images.length ? Carousel.defualProps.images : images[active]}
          alt="animal"
        />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              data-lol={index}
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
