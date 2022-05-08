import React, {useEffect} from "react";



function Leaderboard({restartQuiz}){

    const scoreArray = [
        {
            username: 1,
            score: 5
        },
        {
            username: 2,
            score: 5
        },
        {
            username: 3,
            score: 5
        },
        {
            username: 4,
            score: 5
        },
        {
            username: 5,
            score: 5
        },
        {
            username: 6,
            score: 5
        },
        {
            username: 7,
            score: 5
        },
        {
            username: 8,
            score: 5
        },
        {
            username: 9,
            score: 5
        },
        {
            username: 10,
            score: 5
        },
        {
            username: 11,
            score: 5
        },
    ]

    function getScores({handleLogin, getUserData}) {
        async function loginDatabase(input){
            try{
                    //UNAME PW NOT SAVING?
                const fetchData = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(input)
                })
                
                const fetchResponse = await fetchData.json()
                console.log(fetchResponse)
                
    ///////////////////////////////////return object for App state
                //check password validity + set state
                if (fetchResponse.validPassword===true){
                    //calls function in App (sets Login true)
                    handleLogin()
                    //sends user object to App for state
                    getUserData(fetchResponse.userData)
                } else {
                    alert(fetchResponse.message)
                }
    
            }
            catch(err){
                console.error(err)
            }
        }
    }

    useEffect(()=>{
        //Fetch API here
        console.log('Fetching data');
    }, [])

    function handleClick(){
        console.log('play again');
        restartQuiz();
    }


    return (
        <div className="leaderboard_container">
            <div className="leaderboard">
                <div className="leaderboard_row">
                    {scoreArray.map(function(user, index){
                        while(index<10){
                            return <p key={user.username}>{index+1}. Username: {user.username}, score: {user.score}</p>
                        }
                    })}
                </div>
            </div>
            <p className="button_container">
            <button type="button" className="playAgain_btn" onClick={handleClick}>Play again</button>
            </p>
        </div>
    )
}

export default Leaderboard;