import gql from "graphql-tag";

export default gql`
  {
    films {
      director
      producer
      title
      description
    }
  }
`;
