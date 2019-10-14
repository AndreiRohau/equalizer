import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Table from '../components/table';
import Steps from '../components/steps';

function App(props) {
  const [isCalculated, setCalculated] = useState(true);
  const [solution, setSolution] = useState({ propose: [] });
  const [check, sets] = useState(0);
  const [text, setText] = useState(solution.statement);
  async function getSolution(url) {
    const URL =
      url === 'http://localhost:7777/resolve'
        ? `http://localhost:7777/resolve?statement=${text}`
        : `http://localhost:7777/resolve${props.location.pathname}`;
    console.log(URL);
    const response = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
    });
    const json = await response.json();
    setSolution(json);
    props.history.push(`/${json.uuid}`, { value: text, solution: json });
  }
  useEffect(() => {
    console.log('rerender');
    fetch(`http://localhost:7777/resolve${props.location.pathname}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => {
        setSolution(res);
        setText(res.statement);
      });
  }, [check]);
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Калькулятор уравнений</h2>
        <section className="container">
          <section className="left">
            <Table
              isCalculated={isCalculated}
              getSolution={getSolution}
              text={text}
              setText={setText}
            />
            {isCalculated ? <Steps text={text} solution={solution} /> : ''}
          </section>
          <section className="right">
            <button
              className="right__resolve"
              onClick={() => getSolution('http://localhost:7777/resolve')}
            >
              Решить
            </button>
            <button className="right__photo">Фото</button>
            <div className="right__faker">
              <ul onClick={(e) => setText(e.target.innerText)}>
                {solution.propose.map((elem, index) => (
                  <li classNmae={`${Date.now()}/${index}`}>{elem}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
        <section className="advertising"></section>
      </main>
    </div>
  );
}

export default App;
