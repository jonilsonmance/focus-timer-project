import * as sounds from './sounds.js'
import state from './state.js'

export function soundMusicFlorest(){
  state.isRunningMusicCoffeMachine = false;
  state.isRunningMusicFirePlace = false;
  state.isRunningMusicRain = false;
  state.isRunningMusicForest = true;

  sounds.buttonMusicFlorestAudio.play()
  
}

export function soundMusicRain(){
  state.isRunningMusicCoffeMachine = false;
  state.isRunningMusicFirePlace = false;
  state.isRunningMusicForest = false;
  state.isRunningMusicRain = true;

  sounds.buttonMusicRainAudio.play()

}

export function soundMusiCoffeMachine(){
  state.isRunningMusicFirePlace = false;
  state.isRunningMusicForest = false;
  state.isRunningMusicRain = false;
  state.isRunningMusicCoffeMachine = true;

  sounds.buttonMusiCoffeMachineAudio.play()
}

export function soundFirePlace(){
  state.isRunningMusicForest = false;
  state.isRunningMusicRain = false;
  state.isRunningMusicCoffeMachine = false;
  state.isRunningMusicFirePlace = true;

  sounds.buttonMusicFirePlaceAudio.play()
}