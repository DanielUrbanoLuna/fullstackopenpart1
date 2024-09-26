// App.jsx
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // Pasamos las partes como un array a Content y los ejercicios a Total
  return (
    <div>
      <Header course={course} />

      <p>{course.parts[0].name}: {course.parts[0].exercises} exercises</p>       
      <p>{course.parts[1].name}: {course.parts[1].exercises} exercises</p>
      <p>{course.parts[2].name}: {course.parts[2].exercises} exercises</p>

      <Total parts={course.parts} />

    </div>
  );
}

export default App;
