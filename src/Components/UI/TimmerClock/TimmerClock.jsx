import React, { useEffect } from 'react'
import { useState } from 'react'

const TimmerClock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minuts, setMinuts] = useState();
  const [seconds, setSeconds] = useState()


  let interval;
  const countdown = () =>{
     
    const destnation = new Date('Oct 10, 2024').getTime()
     interval =  setInterval(() =>{
      const now = new Date().getTime()
      const difference = destnation - now 
        const days = Math.floor( difference / (1000*60*60*24))
        const hours = Math.floor( difference % (1000*60*60*24)/(1000*60*60) );
        const minuts = Math.floor( difference % (1000*60*60)/(1000*60));
        const seconds = Math.floor( difference % (1000*60)/(1000));

        if(destnation < 0) clearInterval(interval.current)
        else{
          setDays(days)  
          setHours(hours) 
          setMinuts(minuts) 
          setSeconds(seconds) 
      
      }
    }, interval);
  }

  useEffect(()=>{
    countdown()
  })

  return (
    <>
        <div className="clock-blick d-flex justify-content-start gap-3">
            <div className="clock-data d-flex align-items-center justify-content-start">
                <div className="text-center p-3">
                    <h3 className='text-warning fs3'>{days}</h3>
                    <h5 className='text-white fs3'>Days</h5>
                </div>
                <span className="text-white font-weight-bold">:</span>

            </div>

            <div className="clock-data d-flex align-items-center justify-content-start">
                <div className="text-center p-3">
                    <h3 className='text-warning fs3'>{hours}</h3>
                    <h5 className='text-white fs3'>Hours</h5>
                </div>
                <span className="text-white font-weight-bold">:</span>

            </div>

            <div className="clock-data d-flex align-items-center justify-content-start">
                <div className="text-center p-3">
                    <h3 className='text-warning fs3'>{minuts}</h3>
                    <h5 className='text-white fs3'>Minutes</h5>
                </div>
                <span className="text-white font-weight-bold">:</span>

            </div>

            <div className="clock-data d-flex align-items-center justify-content-start">
                <div className="text-center p-3">
                    <h3 className='text-warning fs3'>{seconds}</h3>
                    <h5 className='text-white fs3'>Seconds</h5>
                </div>
            </div>

        </div>
    </>
  )
}

export default TimmerClock
