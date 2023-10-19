import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

let result = 0

function Result({setStep}) {

const rerun = () => {
  result = 0
  setStep(0)
}

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Вы отгадали ${result} ответа из ${questions.length}`}</h2>
      <button onClick={rerun}> Попробовать снова</button>
    </div>
  );
}

function Game({step, setStep}) {

  const nextQuestion = () => {
    if (step < questions.length) {
      setStep((prev) => prev + 1)
    }

  
  }

  const handleAnswer = (correct, value) => {
    if (correct == value) {
      result += 1
    }
    nextQuestion()
  }

  let currentQuestion = questions[step]
  return (
    <>
      <div className="progress">
        <div style={{ width: `${step * (100/questions.length)}%` }}  className="progress__inner"></div>
      </div>
      <h1>{currentQuestion.title}</h1>
      <ul>
        {
          currentQuestion.variants.map((value, index) => {
            return (
              <li key={index} value={index} onClick={() => handleAnswer(currentQuestion.correct, index)}>
                  {value}
              </li>
            )
          })
        }
        {/* <li onClick={nextQuestion}>
          {questions[step].variants[0]}
        </li>
        <li>{questions[step].variants[0]}</li>
        <li>{questions[step].variants[0]}</li> */}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = useState(0)

  


  return (
    <div className="App">
      {
        step <= 2 ? <Game step={step} setStep={setStep} /> : <Result setStep={setStep} />
      }

      {/* <Result /> */}
    </div>
  );
}

export default App;
