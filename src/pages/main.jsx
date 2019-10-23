import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Table from '../components/table';

function App(props) {

  const [isCalculated, setCalculated] = useState(false);
  const [solution, setSolution] = useState({});
  const [text, setText] = useState('');

  // const [check, setCheck] = useState(0);
  // const [topic, setTopic] = useState();
  // const [popular, setPopular] = useState();
  // const [watched, setWatched] = useState();

  const [check, setCheck] = useState(0);
  const [names, setNames] = useState({names: []});
  const [cities, setCities] = useState({cities: []});
  const [imgs, setImgs] = useState({imgs: []});

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

  function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  // корабль
  // useEffect(() => {
  //   console.log('rerender');
  //   fetch(`http://localhost:7777/content/popular`, {
  //     method: 'GET',
  //     mode: 'cors',})
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("Popular response is ",res);
  //       setTopic(res.topic);
  //       setPopular(res.popular);
  //       setWatched(res.watched);
  //     });
  // }, [check]);

  useEffect(() => {
    console.log('rerender');
    fetch(`http://localhost:7777/content/authors`, {
      method: 'GET',
      mode: 'cors',})
      .then((res) => res.json())
      .then((res) => {
        console.log("authors response is ",res);
        setNames(res.names);
        setCities(res.cities);
        setImgs(res.imgs);
      });
  }, [check]);
  
  
  return (
    <div className="App">
      <Header />
      <main>
        
        <div>
          <p>{names[getRandomInt(4)]}</p>
          <p>{cities[getRandomInt(4)]}</p>
          <p>{imgs[getRandomInt(4)]}</p>
        </div>

        {/* <div>
          <p>Популярное сегодня: {topic}. Количество просмотров: {watched}</p>
          <p onClick={(e) => {
            document.getElementById("input").value=popular; setText(document.getElementById("input").value)}
            }>
            {popular}
              </p>
        </div> */}

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

              {text !== '' ? (
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
                
                ): ''}

            </section>
          </section>

          <section className="right">
            <button className="right__resolve" onClick={getSolution}>
              Решить
            </button>
            <button className="right__photo">Фото</button>
            <div className="right__faker" >Ваша рэклама</div>
          </section>

        </section>

        <section className="advertising"></section>

      </main>
    </div>
    );
}

export default App;
