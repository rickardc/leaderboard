import React, {useEffect, useState} from "react";
import Profiles from '../components/profiles';

//const Leaderboard = fetchData = await fetch('/database');

function Leaderboard({restartQuiz}){
    const [leaderboard, setLeaderboard] = useState(null)
   
    useEffect(() => {
        //Fetch API here
        fetch('/database')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setLeaderboard(data);
            })
        console.log('Fetching data');
    }, [])

    function handleClick(){
        console.log('play again');
        restartQuiz();
    }


    return (
        <div className="leaderboard_container">
           <div className="leaderboard">
            <h1 className='leaderboard'>Leaderboard</h1>
            <div className="leaderboard_row">
            {leaderboard && <Profiles Leaderboard={get_top(leaderboard)}></Profiles>}
            </div>

            </div>
            
            <p className="button_container">
            <button type="button" className="playAgain_btn" onClick={handleClick}>Play again</button>
            </p>

        </div>
    )
}

//Function to sort JSON by score 
function get_top(data){
    let sort = data.sort((a, b) => {
        return b.score - a.score;
    })        
    return sort.slice(0, 4); // currently top 4
} 

export default Leaderboard;