import React, { useState, useEffect } from 'react';
import Topic from '../components/Topic';
import Header from '../components/header';
import Table from '../components/table';
import Steps from '../components/steps';

function App(props) {
    const [isCalculated, setCalculated] = useState(true);
    const [solution, setSolution] = useState({ propose: [] });
    const [check, sets] = useState(0);
    const [text, setText] = useState(solution.statement);

    let commonEquation;

    async function getSolution(elem) {
      console.log("ssssssssssssssuka");
      commonEquation = elem;
      setText(elem);
      console.log(elem);
      console.log(elem);
      console.log("ssssssssssssssuka");
      const URL = `http://localhost:7777/resolve?statement=` + elem;

      console.log(URL);
      const response = await fetch(URL, {
        method: 'GET',
        mode: 'cors',
      });
      const json = await response.json();
      console.log(json);
      setSolution(json);
      props.history.push(`/${json.uuid}`, { value: commonEquation, solution: json });
    }

    useEffect(() => {
      console.log('rerender');
      fetch(`http://localhost:7777/resolve?statement=`, {
        method: 'GET',
        mode: 'cors',})
        .then((res) => res.json())
        .then((res) => {
          setSolution(res);
          setText(res.statement);
        });
    }, [check]);

    const topics = ["Квадратные уравнения", "Линейные уровнения", "Система уравнений", 
                    "Решение интегралов", "Система уравнений", "Yравнения вида sinx a"];
  return (
  <div className="App">
    <Header />
    <main>
      
    <h2>Темы</h2>
    <section className="container">  
      <section className="left">   
          <section className="table">
            <div className="table">

              <ol onClick={(e) => setText(e.target.innerText)}>
                {solution.propose.map((elem, index) => (
                  <li onClick={() => getSolution(elem)} className={`${Date.now()}/${index}`}>
                  <p>{topics[index]}
                   {elem}
                   </p></li>
                ))}
              </ol>

            </div>
          </section>
        </section>

        <section className="right">  
        {/* <div className="right__faker">
              <ul onClick={(e) => setText(e.target.innerText)}>
                {solution.propose.map((elem, index) => (
                  <li onClick={() => getSolution('http://localhost:7777/resolve')} className={`${Date.now()}/${index}`}>{elem}</li>
                ))}
              </ul>
            </div> */}
        </section>

    </section>

      <section className="advertising"></section>
    </main>
  </div>
  );
}

export default App;