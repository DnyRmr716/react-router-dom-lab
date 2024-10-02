import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MailboxForm = ({ onAddBox }) => {
  const [mailbox, setMailbox] = useState({
    boxholder: '',
    boxSize: 'Small' 
  });
  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailbox(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBox(mailbox);  
    navigate('/mailboxes');
    setMailbox({ boxholder: '', boxSize: 'Small' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input 
          type="text" 
          name="boxholder" 
          value={mailbox.boxholder} 
          onChange={handleChange} 
          required 
        />
      </label>
      <label>
        Box Size:
        <select 
          name="boxSize" 
          value={mailbox.boxSize} 
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
