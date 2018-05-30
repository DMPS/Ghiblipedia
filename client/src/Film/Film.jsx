import React, { Component } from "react";
import "./Film.css";
import Button from "../Button/Button";

class Film extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { director, title, producer, description } = this.props;
    return (
      <div className="film">
        <h1 className="title">
          <a
            target="_blank"
            href={`http://www.google.com/search?q=${encodeURIComponent(title)}`}
          >
            {title}
          </a>
        </h1>
        <p className="text">
          <i>{description}</i>
        </p>
        <Button
          text={`I NEED MORE ${title.toUpperCase()}! 🤤`}
          onClick={() => {
            console.log("clicked");
          }}
        />
        <span className="filmmakers">
          {director === producer
            ? `Directed and produced by ${director}`
            : `Directed by ${director} and produced by ${producer}`}
        </span>
      </div>
    );
  }
}

export default Film;
