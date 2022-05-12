import React from 'react'


export default function Profiles({Leaderboard}) {
  return (
    <div id="profiles">
        {Item(Leaderboard)}

    </div>
  )
}


function Item(data){
    return (
        <>
        {
            data.map((value,index) =>(

                <div className='flex' key={index}>
                <div className='item'>
                    <div className='info'>
                        <h3>{(index+1) + "  " + value.username}</h3>
                    </div>
                    <div className='item'>
                        <span>{value.score}</span>
                    </div>
        
                </div>
            
            </div>
            )
            )
        }
        </>


    )

}