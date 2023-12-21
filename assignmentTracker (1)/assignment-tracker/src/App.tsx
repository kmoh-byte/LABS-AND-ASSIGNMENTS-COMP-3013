import React from 'react';
import { Header } from './components/Header';
import { Assignments } from './components/Assignments';

function App() {

  const [assignmentsData, setAssignmentsData] = useState([
    { title: 'Assignment 1', completed: false },
    { title: 'Assignment 2', completed: true },
    // Add more assignment data here.
  ]);

  return (
    <>
      <Header assignmentsData = {assignmentsData} setAssignmentsData = {setAssignmentsData} />
      
      <Assignments />
    </>
  );
}

export default App;
