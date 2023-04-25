import React, { useState,useEffect } from 'react';
import Card from './Card';
import NewCard from './NewCard'
// import { authToken } from './Main';
// import { GET_TICKETS } from './queries';
// import { useQuery } from '@apollo/client';

const Board = () => {
  const [ifCreation,setIfCreation] =useState([false])
  const [items, setItems] = useState([
    { key:'1' ,id: 'Ticket-1', content: 'Ticket 1',description :'Ticket1 Description' },
    { key:'2',id: 'Ticket-2', content: 'Ticket 2',description :'Ticket2 Description' },
    { key:'3',id: 'Ticket-3', content: 'Ticket 3',description :'Ticket3 Description' },
  ]);
  // const { loading, error, data } = useQuery(GET_TICKETS, {
  //   context: {
  //     headers: {
  //       Authorization: authToken,
  //     },
  //   },
  // });
  // useEffect(() => {
  //   if (data) {
  //     setItems(data.tickets);
  //   }
  // }, [data]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  function handleDelete(id) {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }
  const handleCreate = (newItem) => {
    setItems([...items, { key:'33',id: 'Ticket-33', content: 'Ticket 33',description :'Ticket33 Description' }]);
  };

  return (
    <>
      <NewCard handleCreate={handleCreate}/>
            <div >
              {items.map((item, index) => (
         
                  <Card key={item.key} id={item.id} content={item.content} description={item.description} handleDelete={handleDelete}/>
            
              ))}
            </div>
    </>
  );
};

export default Board;
// import React, { useEffect, useState } from 'react';
// import NewCard from './NewCard'
// const AllTickets = ({authToken}) => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const fetchTickets = async () => {
//       const response = await fetch('https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: authToken,
//         },
//         body: JSON.stringify({
//           query: `
//             query {
//               tickets {
//                 id
//                 title
//                 description
//                 status
//                 assignee {
//                   id
//                   firstName
//                   lastName
//                 }
//                 createdAt
//                 updatedAt
//               }
//             }
//           `,
//         }),
//       });

//       const data = await response.json();
//       setTickets(data.data.tickets);
//     };

//     fetchTickets();
//   }, [authToken]);
//   const handleCreate = (newItem) => {
//         // setItems([...items, { key:'33',id: 'Ticket-33', content: 'Ticket 33',description :'Ticket33 Description' }]);
//   };
//   return (
//     <div>
//       <NewCard authToken={authToken} organisationId={1} boardId={1} />
//       <h2>All Tickets</h2>
//       {tickets.map(ticket => (
//         <div key={ticket.id}>
//           <h3>{ticket.title}</h3>
//           <p>{ticket.description}</p>
//           <p>{ticket.status}</p>
//           <p>{ticket.assignee.firstName} {ticket.assignee.lastName}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllTickets;

