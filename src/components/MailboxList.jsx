import React from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported

const MailboxList = ({ mailboxes }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} style={{ textDecoration: 'none' }}>
          <div style={{
            width: '150px',
            height: '150px',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #ccc',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9',
            color: 'black'
          }}>
            <p>Mailbox ID: {mailbox._id}</p>
            <p>Holder: {mailbox.boxholder}</p>
            <p>Size: {mailbox.boxSize}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MailboxList;
