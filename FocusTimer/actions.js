import state from './state.js'
import * as timer from  './timer.js'
import * as sounds from './sounds.js'
import * as cards from './cards.js'

export function startTime(){
  state.isRunning = true
  timer.countdown()
  sounds.buttonSoundIconsOne.play()
}

export function stopTime(){
  state.isRunning = false 
  sounds.buttonSoundIconsTwo.play()
}

export function sumTime(){
  timer.sumCountdown()
  sounds.buttonSoundIconsTwo.play()
}

export function subTime(){
  timer.subCountdown()
  sounds.buttonSoundIconsTwo.play()
}

export function musicFlorest(){
  state.isRunningMusicForest = !state.isRunningMusicForest;
  if(state.isRunningMusicForest){
    cards.soundMusicFlorest()
  }else{
    sounds.buttonMusicFlorestAudio.pause()
    sounds.buttonMusicFlorestAudio.currentTime = 0
  }
}

export function musicRain(){
  state.isRunningMusicRain = !state.isRunningMusicRain
  if(state.isRunningMusicRain){
    cards.soundMusicRain()
  }else{
    sounds.buttonMusicRainAudio.pause()
    sounds.buttonMusicFirePlaceAudio.currentTime = 0
  }
}

export function musiCoffeMachine(){
  state.isRunningMusicCoffeMachine = !state.isRunningMusicCoffeMachine
  if(state.isRunningMusicCoffeMachine){
    cards.soundMusiCoffeMachine()
  }else{
    sounds.buttonMusiCoffeMachineAudio.pause()
    sounds.buttonMusiCoffeMachineAudio.currentTime = 0
  }
}
export function firePlace(){
  state.isRunningMusicFirePlace = !state.isRunningMusicFirePlace
  if(state.isRunningMusicFirePlace){
    cards.soundFirePlace()
  }else{
    sounds.buttonMusicFirePlaceAudio.pause()
    sounds.buttonMusicFirePlaceAudio.currentTime = 0
  }
}


