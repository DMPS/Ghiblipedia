import React, { Component } from "react";
import { Query } from "react-apollo";
import query from "./query";
import Fallback from "../Fallback/Fallback";
import Film from "../Film/Film";
import Loading from "../Loading/Loading";
import "./Films.css";

class Films extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) {
            console.error(error);
            return <Fallback />;
          }
          return (
            <div className="films">
              {data.films.map(({ director, producer, title, description }) => {
                return (
                  <Film
                    key={title}
                    director={director}
                    producer={producer}
                    title={title}
                    description={description}
                  />
                );
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Films;
