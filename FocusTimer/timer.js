import state from './state.js';
import * as el from './elements.js'

export function countdown(){

  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds --

  if(seconds < 0){
    seconds = 59
    minutes--
  }
  if(minutes < 0){
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(()=> countdown(), 1000)
}

export function sumCountdown(){
 if(!state.isRunning){
  return
 }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

 minutes += 5
 
 updateDisplay(minutes, seconds)

}

export function subCountdown(){
  if(!state.isRunning){
   return
  }
 
   let minutes = Number(el.minutes.textContent);
   let seconds = Number(el.seconds.textContent);
 
  minutes -= 5

  if(minutes < 0){
    return
  }
 
  updateDisplay(minutes, seconds)
 
 }

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2,"0")
  el.seconds.textContent = String(seconds).padStart(2,"0")

}