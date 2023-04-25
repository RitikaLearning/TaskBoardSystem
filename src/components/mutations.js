import { gql } from '@apollo/client';

const user = {
    email: "ritika.dawar@yahoo.com",
    firstName: "Ritika",
    lastName: "Dawar"
};
export const CREATE_USER = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      id
    }
  }
`;

export const CREATE_ORGANIZATION = gql`
  mutation CreateOrganization($name: String!, $timezone: Timezone!) {
    createOrganization(name: $name, timezone: $timezone) {
      id
    }
  }
`;
