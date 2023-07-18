import React, { useState } from "react";

const Demo = () => {
  const [questions, setQuestions] = useState([]);
  const [correctcount,setCount]=useState(0);

  const fetchQuestionsForCategory1 = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
      ); //general knowledge
      const data = await response.json();
    //   setQuestions(data.results);
    const results=data.results.map((question)=>({
        ...question,
        isCorrect:false,
        selectedAnswer: null
      }));
    setQuestions(results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionsForCategory2 = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=20&type=multiple"
      ); //Mythology
      const data = await response.json();
      // setQuestions(data.results);
      const results=data.results.map((question)=>({
        ...question,
        isCorrect:false,
        selectedAnswer: null
      }));
      setQuestions(results);
    } 
    catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionsForCategory3 = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=31&type=multiple"
      ); //Entertainment:anime,manga
      const data = await response.json();
      // setQuestions(data.results);
      const results=data.results.map((question)=>({
        ...question,
        isCorrect:false,
        selectedAnswer: null
      }));
      setQuestions(results)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionsForCategory4 = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      ); //politics
      const data = await response.json();
      // setQuestions(data.results);
      const results=data.results.map((question)=>({
        ...question,
        isCorrect:false,
        selectedAnswer: null
      }));
      setQuestions(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    const updatedQuestions = [...questions];
    // updatedQuestions[questionIndex].selectedAnswer = selectedAnswer;
    // setQuestions(updatedQuestions);
    const question = updatedQuestions[questionIndex];

    question.selectedAnswer = selectedAnswer;
    question.isCorrect = selectedAnswer === question.correct_answer;
    setQuestions(updatedQuestions)
  };

  // const checkAns = () => {
  //   return(
  //     <div>
  //       {questions.map((question, index) => (
  //         <div key={index}>
  //           {question.selectedAnswer === question.correct_answer && (
  //             <p style={{ color: "green" }}>Correct answer!</p>
  //           )}
  //           {question.selectedAnswer && !question.isCorrect && (
  //             <p style={{ color: "red" }}>Incorrect answer!</p>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   )
  // };
  const clicked=()=>{
    let count=0;
    for(let i=0;i<questions.length;i++)
    {
      if(questions[i].isCorrect)
      {
        count++
      }
    }
    setCount(count)
    window.alert(`You answered ${count} question correctly`);

    // page refresh
    window.location.reload();
  }
  
  return (
    <div>
      <button onClick={fetchQuestionsForCategory1}>General Knowledge</button>
      <button onClick={fetchQuestionsForCategory2}>Mythology</button>
      <button onClick={fetchQuestionsForCategory3}>Anime & Manga</button>
      <button onClick={fetchQuestionsForCategory4}>Politics</button>

      {/* Render the questions */}
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.incorrect_answers.map((answer, i) => (
              <li 
              key={i}
              className={
                question.selectedAnswer === answer
                ? "selected-option"
                : question.correct_answer === answer
                  ? "correct-option"
                  : ""
                }
                >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={answer}
                  onChange={() => handleAnswerSelect(index, answer)}
                />
                {answer}
              </li>
            ))}
            <li
            className={
              question.selectedAnswer === question.correct_answer
              ? "selected-option correct-option"
              : ""
            }            
            >
              <input
                type="radio" 
                name={`question-${index}`}
                value={question.correct_answer}
                onChange={() => handleAnswerSelect(index, question.correct_answer)}
                />
              {question.correct_answer}
            </li>
          </ul>
            {question.selectedAnswer === question.correct_answer && (
              <p style={{ color: "green" }}>Correct answer!</p>
              )}
              {question.selectedAnswer && !question.isCorrect &&  (
                <p style={{ color: "red" }}>Incorrect answer!</p>
              )}
              {/* <button onClick={checkAns}>Submit</button> */}
        </div>
      ))}
      {/* to check the total number of correct ans user get */}
      <button onClick={clicked}>Check Score</button>
      {/* alert(`You answered &{correctcount} question correctly`); */}
       
    </div>
  );
};

export default Demo;

