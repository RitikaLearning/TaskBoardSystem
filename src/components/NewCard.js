import React, { useState } from "react";

function NewCard({handleCreate}) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
      };
      
      const handleSaveClick = (event) => {
        event.preventDefault();
        handleCreate();
        setIsEditing(false);
      };
    return (
    <>
     {isEditing ? (
      <form onSubmit={handleSaveClick}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" />
        </label>
        <br />
        <button type="submit" >Create Ticket</button>
      </form>
     ):(
        <button  onClick={handleEditClick}>Create Ticket</button> 
     )}
      </>
    );
  }  
export default NewCard
  
// import React, { useState } from 'react';

// const NewCard = ({ authToken, organisationId, boardId, onTicketCreated }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async event => {
//     event.preventDefault();

//     const createTicketMutation = `
//       mutation putTicket($organisationId: ID!, $boardId: ID!, $input: TicketInput!) {
//         putTicket(organisationId: $organisationId, boardId: $boardId, input: $input) {
//           id
//           name
//           description
//           status
//           visible
//         }
//       }
//     `;

//     const createTicketVariables = {
//       organisationId,
//       boardId,
//       input: {
//         name: title,
//         description,
//         status: 'Backlog',
//       },
//     };

//     const response = await fetch('https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: authToken,
//       },
//       body: JSON.stringify({
//         query: createTicketMutation,
//         variables: createTicketVariables,
//       }),
//     });

//     const data = await response.json();
//     onTicketCreated(data.data.putTicket.id);

//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <h2>New Ticket</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={event => setDescription(event.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Create Ticket</button>
//       </form>
//     </div>
//   );
// };

// export default NewCard;
