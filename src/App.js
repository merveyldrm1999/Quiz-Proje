import "./App.css";
import { Container, Row } from "reactstrap";
import { useState } from "react";
import Question from "./compenent/Question";

function App() {
  const dumpData = [
    {
      id: 1,
      questionText: "2+3 nedir?",
      answerOptions: [
        { answerText: "4", isCorrect: false, id: "a" },
        { answerText: "7", isCorrect: false, id: "b" },
        { answerText: "5", isCorrect: true, id: "c" },
        { answerText: "8", isCorrect: false, id: "d" },
      ],
      solved: false,
    },
    {
      id: 2,
      solved: false,
      questionText: "8+9 nedir?",
      answerOptions: [
        { answerText: "47", isCorrect: false, id: "a" },
        { answerText: "79", isCorrect: false, id: "b" },
        { answerText: "17", isCorrect: true, id: "c" },
        { answerText: "8", isCorrect: false, id: "d" },
      ],
    },
    {
      id: 3,
      questionText: "99-10 nedir?",
      answerOptions: [
        { answerText: "89", isCorrect: true, id: "a" },
        { answerText: "79", isCorrect: false, id: "b" },
        { answerText: "17", isCorrect: false, id: "c" },
        { answerText: "8", isCorrect: false, id: "d" },
      ],
      solved: false,
    },
    {
      id: 4,
      questionText: "5*6 nedir?",
      answerOptions: [
        { answerText: "47", isCorrect: false, id: "a" },
        { answerText: "79", isCorrect: false, id: "b" },
        { answerText: "17", isCorrect: false, id: "c" },
        { answerText: "30", isCorrect: true, id: "d" },
      ],
      solved: false,
    },
  ];

  const [questions, setQuestions] = useState(dumpData);

  return (
    <div className="App">
      <Container>
        <h2>MATH EXAM</h2>
        <Row>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              questions={questions}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
