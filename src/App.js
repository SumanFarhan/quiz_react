import React, { useState } from "react";
import questions from "./Question";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [clickAnswer, setClickAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const question_progress = questions[count].id;
  const maximum_score=75;
  // const user_score=parseInt(setScore-maximum_score)

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = count + 1;
    setCount(nextQuestion);
    nextQuestion < questions.length
      ? setCount(nextQuestion)
      : alert(`your score is ${score}`);
  };

  const checkQuizAnswer = (answerOption) => {
    console.log(score);
    if (answerOption === questions[count].answer) {
      setScore(score + 1);
    }
    setClickAnswer(true);
  };
  return (
    <>
      <div className="main">
        <div className="left">
          <ProgressBar animated now={question_progress} max={5} />
        </div>
        <div className="center_div">
          <h1>QUIZ APP</h1>
          <h2>Question {count + 1}</h2>
          <h3>{questions[count].question}</h3>
          {questions[count].choose.map((answerOption, index) => (
            <button
              style={{ marginTop: "30px" }}
              key={index}
              onClick={() => checkQuizAnswer(answerOption)}
            >
              {answerOption}
            </button>
          ))}
          <br />
          <br />
          <button className="next" onClick={handleAnswerButtonClick}>
            Next
          </button>
          <br />
          <br />
          <ProgressBar>
            <ProgressBar striped variant="danger" now={parseInt(setScore-maximum_score)} max={100} label={`${maximum_score}%`}/>
            <ProgressBar striped variant="success" now={maximum_score} max={100} label={`${maximum_score}%`}/>
          </ProgressBar>
        </div>
      </div>
    </>
  );
};

export default App;
