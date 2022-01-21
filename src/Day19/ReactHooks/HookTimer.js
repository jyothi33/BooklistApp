import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {

    const [timer, setTimer] = useState(0);

    
        const timerRef = useRef(null);
        useEffect(() => {
            timerRef.current = setInterval(() => {
                setTimer( prev => prev+1)
            }, 1000);
            return () => {
                clearInterval(timerRef.current);
            }
        }, [])
    
    

    
    return (
        <div>
            
            Hook Timer - {timer}
            <button onClick={ () => clearInterval(timerRef.current)}> Clear Timer</button>
        </div>
    ) 
}

export default HookTimer
