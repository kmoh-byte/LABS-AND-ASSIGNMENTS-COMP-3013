import React, { useState } from 'react';
import styles from './assignment.module.css'; // Import the CSS styles.
import { TbTrash } from 'react-icons/tb';

export function Assignment({ title, onDelete }) {
  const [completed, setCompleted] = useState(false);

  const handleToggleCompletion = () => {
    setCompleted(!completed);
  };

  const handleDeleteAssignment = () => {
    // Call the onDelete function passed as a prop to delete this assignment.
    onDelete(title); // Pass the title to the parent component for deletion.
  };

  return (
    <div className={`${styles.assignment} ${completed ? styles.completed : ''}`}>
      <button className={styles.checkContainer} onClick={handleToggleCompletion}>
        <div>{completed ? 'COMPLETED' : ''}</div>
      </button>
      <p>{title}</p>
      <button className={styles.deleteButton} onClick={handleDeleteAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
