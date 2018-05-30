const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

//We define all of the types the GraphQL API uses below
const typeDefs = gql`
  "A species seen in a Studio Ghibli film."
  type Species {
    "The unique id for the species."
    id: String
    "The name of the species."
    name: String!
    "The biological genus of the species."
    classification: String
    "A list of all the eye colors the species has been seen with."
    eye_colors: [String]
    "A list of all the hair colors the species has been seen with."
    hair_colors: [String]
  }

  "A Studio Ghibli film."
  type Film {
    "The title of the film."
    title: String!
    "The unique id of the film."
    id: String
    "A short description for the film."
    description: String
    "The director for the film."
    director: String
    "The producer for the film."
    producer: String
    "The year when the film was originally released."
    release_date: String
    "A list of all the species seen in the film."
    species: [Species]
  }

  type Query {
    films: [Film]
  }
`;

//Get the films from the Studio Ghibli API and adjust them to our schema

async function getSpecies(speciesURL) {
  try {
    const species = (await axios.get(speciesURL)).data;
    species.eye_colors = species.eye_colors.split(", ");
    species.hair_colors = species.hair_colors.split(", ");
    return species;
  } catch (err) {
    console.error(err);
  }
}

async function getFilms() {
  try {
    const films = await axios.get("https://ghibliapi.herokuapp.com/films");
    let res = films.data;
    films.data.forEach((film, index) => {
      res[index]["species"] = film.species.map(speciesURL => {
        return getSpecies(speciesURL);
      });
    });
    return res;
  } catch (err) {
    console.error(err);
  }
}

const resolvers = {
  Query: {
    films: getFilms
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
