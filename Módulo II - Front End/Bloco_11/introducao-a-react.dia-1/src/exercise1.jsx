import React from 'react'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['estudar react', 'fazer exercícios', 'realizar projeto com sucesso'];

function App() {
  return (
  Task('Gabriela'), tasks.map((element) => <li>{element}</li>)
  );
}

export default App;
