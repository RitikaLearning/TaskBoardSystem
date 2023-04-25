import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { setAuthToken } from './Main';

const AddUser = ({onAuth}) => {
    // const navigate = useNavigate();
  const user = {
    email: 'something@example.com',
    firstName: 'Something',
    lastName: 'Awesome',
  };

  const createUserMutation = `
    mutation ($user: UserInput!) {
      createUser(user: $user) {
        id
      }
    }
  `;

  const createUserVariables = {
    user: user,
  };

  fetch('https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: createUserMutation,
      variables: createUserVariables,
    }),
  })
    .then(response => response.json())
    .then(data => {
      const authToken = data.data.createUser.id;
      setAuthToken(authToken);
      const createOrgMutation = `
        mutation ($name: String!, $timezone: Timezone!) {
          createOrganisation(name: $name, timezone: $timezone) {
            id
          }
        }
      `;

      const createOrgVariables = {
        name: 'awesome org',
        timezone: 'Pacific/Auckland',
      };

      fetch('https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify({
          query: createOrgMutation,
          variables: createOrgVariables,
        }),
      })
        .then(response => response.json())
        .then(data => {
          onAuth()
          alert('User and Organisation created successfully')
        }
        )// alert('User and Organisation created successfully'))
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

  // return <div>Creating User and Organisation...</div>;
};

export default AddUser;
