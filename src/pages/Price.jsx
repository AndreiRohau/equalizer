import React, { useState, useEffect } from 'react';
import Header from '../components/header';


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

    function dateNow() {
        var today = new Date();
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();

        
        var dd = String(getRandomInt(30)).padStart(2, '0');
        var mm = String(getRandomInt(12) + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const pricesRandom = [getRandomInt(10), getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10)]

    const arrSum = pricesRandom.reduce((a, b) => a + b, 0)

      console.log("arrsum", arrSum);

    const topics = ["Квадратные уравнения", "Линейные уровнения", "Система уравнений", 
                    "Решение интегралов", "Система уравнений", "Yравнения вида sinx a"];
  return (
  <div className="App">
    <Header />
    <main>
      
    <h2>Итория запросов и оплаты</h2>
    <section className="container">  
      <section className="left">   
          <section className="table">
            <div className="table">
              <ol onClick={(e) => setText(e.target.innerText)}>
              <p>ДАТА----ЦЕНА----ТЕМА----[УРАВНЕНИЕ]</p>
                {solution.propose.map((elem, index) => (
                  <li onClick={() => getSolution(elem)} className={`${Date.now()}/${index}`}>
                  <p>
                  {dateNow()} {pricesRandom[index]} {topics[index]} [ {elem} ]
                   </p>
                   </li>
                ))}
              </ol>
            </div>
            <br/>
            <p>Итого: {arrSum}</p>
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

      {/* <section className="advertising"></section> */}
    </main>
  </div>
  );
}

export default App;