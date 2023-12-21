import React, { useState } from 'react';
import styles from './assignments.module.css';
import { Assignment } from '../Assignment';
import { Header } from '../Header'; // Import the Header component.

export function Assignments() {


  const deleteAssignment = (title) => {
    const updatedAssignments = assignmentsData.filter((assignment) => assignment.title !== title);
    setAssignmentsData(updatedAssignments);
  };

  const toggleCompletion = (title) => {
    const updatedAssignments = assignmentsData.map((assignment) => {
      if (assignment.title === title) {
        return { ...assignment, completed: !assignment.completed };
      }
      return assignment;
    });
    setAssignmentsData(updatedAssignments);
  };

  return (
    <section className={styles.assignments}>
      <Header onAddAssignment={addAssignment} /> {/* Pass the addAssignment function */}
      <div className={styles.list}>
        {assignmentsData.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={deleteAssignment} // Pass the deleteAssignment function
            onToggleCompletion={toggleCompletion} // Pass the toggleCompletion function
          />
        ))} 
      </div>
   
    </section>
  );
        }  
