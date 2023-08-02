import React, { useState } from "react";
import { useEffect } from "react";
// import "../score/Score"
// import Score from "../score/Score";

const Play = () => {
  const [questions, setQuestions] = useState([]);
  const [correctcount ,setCount]=useState(0);
  const [correctCountGK, setCorrectCountGK] = useState(
    (JSON.parse(localStorage.getItem("correctScores")) || {}).correctCountGK || 0
  );
  const [correctCountMythology, setCorrectCountMythology] = useState(
    (JSON.parse(localStorage.getItem("correctScores")) || {}).correctCountMythology || 0
  );
  const [correctCountAnime, setCorrectCountAnime] = useState(
    (JSON.parse(localStorage.getItem("correctScores")) || {}).correctCountAnime || 0
  );
  const [correctCountPolitics, setCorrectCountPolitics] = useState(
    (JSON.parse(localStorage.getItem("correctScores")) || {}).correctCountPolitics || 0
  );


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
    } 
    catch (error) 
    {
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
  const clicked = () => {
    const unansweredQuestion = questions.find(
      (question) => question.selectedAnswer === null
    );
    if (unansweredQuestion) {
      window.alert("Please answer all the questions.");
    } else {
      let count = 0;
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].isCorrect) {
          count++;
        }
      }
      setCount(count);
      window.alert(`You score is ${count}`);
      //page refresh
      window.location.reload();
    }
  }
//   const clicked=()=>{
//     const unansweredQuestion = questions.find(
//       (question) => question.selectedAnswer === null
//     );
//     if (unansweredQuestion) {
//       window.alert("Please answer all the questions.");
//     } else {
//       let countGK = 0;
//       let countMythology = 0;
//       let countAnime = 0;
//       let countPolitics = 0;

//     for (let i = 0; i < questions.length; i++) {
//         if (questions[i].isCorrect) {
//           if (questions[i].category === "General Knowledge") {
//             countGK++;
//           } else if (questions[i].category === "Mythology") {
//             countMythology++;
//           } else if (questions[i].category === "Entertainment: Anime & Manga") {
//             countAnime++;
//           } else if (questions[i].category === "Politics") {
//             countPolitics++;
//           }
//         }
//       }

//       setCorrectCountGK(countGK);
//       setCorrectCountMythology(countMythology);
//       setCorrectCountAnime(countAnime);
//       setCorrectCountPolitics(countPolitics);

//       const correctScores = {
//         countGK,
//         countMythology,
//         countAnime,
//         countPolitics,
//       };

//       localStorage.setItem("correctScores", JSON.stringify(correctScores));
  
//       window.alert(`
//         Your score for General Knowledge is: ${countGK}
//         Your score for Mythology is: ${countMythology}
//         Your score for Anime & Manga is: ${countAnime}
//         Your score for Politics is: ${countPolitics}
//       `);
  
//       // Page refresh
//       window.location.reload();
//   }
// };
  useEffect(() => {
    localStorage.setItem("correctScores", JSON.stringify({
      correctCountGK,
      correctCountMythology,
      correctCountAnime,
      correctCountPolitics,
    }));
  }, [correctCountGK, correctCountMythology, correctCountAnime, correctCountPolitics]);

  return (
    <div className="play">
      <div className="container">
         

      <button className="button_gk"  onClick={fetchQuestionsForCategory1}>General Knowledge</button>
      <button className="button_myth" onClick={fetchQuestionsForCategory2}>Mythology</button>
      <button className="button_anime" onClick={fetchQuestionsForCategory3}>Anime & Manga</button>
      <button className="button_poly" onClick={fetchQuestionsForCategory4}>Politics</button>
    

      {/* Render the questions */}
      <div className="questions">
      {questions.map((question, index) => (
        <div key={index}>
          <h3 className="question-text">{question.question}</h3>
          <ul className="answer-options">
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
          <div className="check_ans">
            {question.selectedAnswer === question.correct_answer && (
              <p style={{ color: "#00FF00" }}>Correct answer!</p>
              )}
              {question.selectedAnswer && !question.isCorrect &&  (
                <p style={{ color: "red" }}>Incorrect answer!</p>
              )}
            </div>
              {/* <button onClick={checkAns}>Submit</button> */}
        </div>
      ))}
      {/* to check the total number of correct ans user get */}
      <button className="check_score" onClick={clicked}>Check Score</button>
      {/* alert(`You answered &{correctcount} question correctly`); */}
    </div>
    {/* <Score correctScores={{  // Correct placement of the Chart component.
      gk: correctCountGK,
      mythology: correctCountMythology,
      anime_manga: correctCountAnime,
      politics: correctCountPolitics,
    }} /> */}
      </div>
  </div>
  );
};

export default Play;

