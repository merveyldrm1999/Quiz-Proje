import { useEffect, useState } from "react";
import { Button, Card, CardText, CardTitle, Col, Input } from "reactstrap";
const Question = ({ question, questions }) => {
  console.log(question);
  const [answers, setAnswers] = useState([]);
  const handleQuestion = (id) => {
    const question = [...questions].find((i) => i.id === id);
    const cevap = question.answerOptions.find(
      (ans) => ans.id === answers.answId
    );
    if (cevap.isCorrect === true) {
      question.solved = "yellow";
    } else {
      question.solved = "red";
    }
    const questionss = [...questions].find((i) => i.id === id + 1);
    questionss.solved = true;
  };
  useEffect(() => {
    if (answers.isCorrect === true) {
      question.solved = "yellow";
    } else {
      question.solved = "red";
    }
  }, []);

  return (
    <Col sm="6" key={question.id}>
      <Card
        style={{
          backgroundColor: question.solved !== false ? question.solved : "",
        }}
        body
      >
        <CardTitle tag="h5">{question.questionText}</CardTitle>
        {question.answerOptions.map((answer) => (
          <>
            <Input
              type="radio"
              onClick={() =>
                setAnswers({
                  quesId: question.id,
                  answId: answer.id,
                })
              }
              name={"answerOptions" + question.id}
              value={answer.id}
            />
            <CardText>{answer.answerText}</CardText>
          </>
        ))}
        <Button
          onClick={() => handleQuestion(question.id)}
          color="primary"
          disabled={
            question.solved === false && question.id !== 1 ? true : false
          }
        >
          Next
        </Button>
      </Card>
    </Col>
  );
};

export default Question;
