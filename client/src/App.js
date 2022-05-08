import React, {useState, useEffect} from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Score from "./components/Score"; 
import Login from "./components/Login"
import Leaderboard from "./components/Leaderboard";
import SignUp from "./components/Signup";
import StartPage from "./components/StartPage";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUserData, setLoggedInUserData]= useState({})

  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then((data) => {
      setQuestions(data.results);
    })
  }, [])



  function getUserData(user){
    setLoggedInUserData(user)
    console.log(user);
  }

  function restartQuiz(){
    document.location.href="/";
   
  }

  //<Login handleLogin={handleLogin}/>

  return (
        <div>
          <Score finalScore={score} loggedInUserData={loggedInUserData}/>
          <Leaderboard restartQuiz={restartQuiz} />
        </div>
  )
      
}

export default App;
