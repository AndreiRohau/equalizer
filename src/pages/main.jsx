import React, { useState, useEffect } from 'react';
import Author from '../components/Author';
import Header from '../components/header';
import Table from '../components/table';

function App(props) {

  const [isCalculated, setCalculated] = useState(false);
  const [solution, setSolution] = useState({});
  const [text, setText] = useState('');

  const [author, setAuthor] = useState({author:[]}); 
  const [photo, setPhoto] = useState({photo:[]}); 
  const [city, setCity] = useState({city:[]}); 
  const [subject, setSubject] = useState({subject:[]});

  const [authors, setAuthors] = useState({authors:[]}); 

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

  useEffect(() => {
    console.log('rerender');
    fetch(`http://localhost:7777/content/author`, {
      method: 'GET',
      mode: 'cors',})
      .then((res) => res.json())
      .then((res) => {
        console.log("authors response is ",res);
        setAuthors(res.authors);
      })
  }, [check]);


  console.log("suka authors",authors[0] && authors[0].author);

  return (
    <div className="App">
      <Header />
      <main>
      {/* <p>{authors[0] && authors[0].author}</p> */}

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

        {/* <section className="advertising"></section> */}
        
        <section>
          {authors[0] && authors.map((author, key) => (
            <div> 
              <p>Автор: {author.author}</p> 
              <p> Количество добавленных тем: {author.subj}</p> 
              <img src={author.photo} /> 
              <p>Город: {author.city}</p>
              <hr/>
            </div>
          ))}
        </section>

      </main>
    </div>
    );
  
}
  
export default App;
