import React from 'react';
import { useParams } from 'react-router-dom';  

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();  
  const mailbox = mailboxes.find(m => m._id === Number(mailboxId)); 

  if (!mailbox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Details of Mailbox {mailbox._id}</h2>
      <p>Mailbox ID:{mailbox._id}</p>
      <p>Boxholder: {mailbox.boxholder}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
