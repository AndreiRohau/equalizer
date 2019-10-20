import React, { useState } from 'react';
import Header from '../components/header';
import Table from '../components/table';

function App(props) {

  const [isCalculated, setCalculated] = useState(false);
  const [solution, setSolution] = useState({});
  const [text, setText] = useState('');

  function getSolution() {
    console.log("main ->>>>>>>>>>>>>>>");
    console.log("text", text);
    console.log("main ->>>>>>>>>>>>>>>");
    return fetch('http://localhost:7777/resolve?statement=' + text, {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => {
        setSolution(res);
        setCalculated(true);
        setText(res.statement);
      });
  }

  if (solution.uuid) {
    console.log("main--> ", solution);
    console.log("main--> ", text);
    props.history.push(`/${solution.uuid}`, { value: text, solution });
  }

  console.log(props);

  if (text === '') {
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
  } else {
    return (
      <div className="App">
        <Header />
        <main>
          <h2>Калькулятор уравнений</h2>
          
          <section className="container">
            
            <section className="left">   
              <section className="table">
                <div className="table__textarea">
                  <label htmlFor="input">Введённое уравнение</label>
                  <textarea
                    id="input"
                    // defaultValue={text}
                    onChange={(e) => {setText(e.target.value);}}
                    placeholder="введите уравнение"
                  ></textarea>
                </div>
                <div className="table__buttons">
                  <p></p>
                    <button onClick={() => getSolution()}>
                      Дискриминант
                    </button>
                    <button onClick={() => getSolution()}>
                      Теорема Виета
                    </button>
                    <button onClick={() => getSolution()}>
                      Разложение на группы
                    </button>
                  </div>
              </section>
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

}

export default App;
