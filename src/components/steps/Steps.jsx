import React, { useState } from 'react';
import './Steps.css';

const Steps = ({ solution, text }) => {
  const [isShowSolution, showSolution] = useState(false);
  return (
    <section className="steps">
      <span>Пошаговое решение уравнений</span>
      <div>
        <span>
          {text}={solution.answer}
        </span>
      </div>
      <div className="steps__functional">
        <div className="dropdown">
          <button onClick={() => showSolution(!isShowSolution)}>
            Показать решение
          </button>
          {isShowSolution ? (
            <ul>
              {solution.solutions.map((elem, index) => (
                <li key={`${Date.now()}/${index}`}>{elem}</li>
              ))}
            </ul>
          ) : (
            ''
          )}
        </div>
        <a>Разблокироваить доступ</a>
        <button>PDF</button>
        <button>Видео решение</button>
      </div>
      <div className="steps__answer">
        <span>ответ</span>
        <span>{solution.answer}</span>
      </div>
    </section>
  );
};
export default Steps;
