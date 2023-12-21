import React, { useState } from 'react';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { uppercase } from '../../helpers/stringHelpers';


export function Header({ onAddAssignment }) {
  const [newAssignment, setNewAssignment] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setNewAssignment(inputText);
    setIsButtonDisabled(inputText === '');
  };

  const handleCreateAssignment = () => {
    if (newAssignment) {
      onAddAssignment(newAssignment); // Call the parent component's function to add the assignment
      setNewAssignment(''); // Clear the input field
      setIsButtonDisabled(true); // Disable the button
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={newAssignment}
          onChange={handleInputChange}
        />
        <button
          onClick={handleCreateAssignment}
          disabled={isButtonDisabled}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );



  
}
