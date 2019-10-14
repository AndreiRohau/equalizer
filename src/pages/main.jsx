import React, { useState } from 'react';
import Header from '../components/header';
import Table from '../components/table';

function App(props) {
  const [isCalculated, setCalculated] = useState(false);
  const [solution, setSolution] = useState({});
  const [text, setText] = useState('');
  function getSolution() {
    return fetch('http://localhost:7777/resolve', {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => {
        setSolution(res);
        setCalculated(true);
      });
  }
  if (solution.uuid) {
    console.log(solution);
    props.history.push(`/${solution.uuid}`, { value: text, solution });
  }
  console.log(props);
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Калькулятор уравнений</h2>
        <section className="container">
          <section className="left">
            <Table isCalculated={isCalculated} text={text} setText={setText} />
          </section>
          <section className="right">
            <button className="right__resolve" onClick={getSolution}>
              Решить
            </button>
            <button className="right__photo">Фото</button>
            <div className="right__faker">random</div>
          </section>
        </section>
        <section className="advertising"></section>
      </main>
    </div>
  );
}

export default App;
