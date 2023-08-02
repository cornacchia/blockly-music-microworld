const _ = require('lodash')
const noteFrequencies = require('./musicUtils').noteValues

const WAVE_TYPES = ['sine', 'square', 'sawtooth', 'triangle']
const USE_TYPE = 2
const TEMPO = 120
const MS_INTERVAL = 15000 / TEMPO

let PLAYING = false
let ASKED_TO_STOP = false

function setupPlayer (channels) {
  const audioContext = new AudioContext()
  const oscillatorMap = {}
  for (const channel of channels) {
    oscillatorMap[channel] = {}
  }

  const mainGainNode = audioContext.createGain()
  mainGainNode.connect(audioContext.destination)
  mainGainNode.gain.value = 0.2

  return {
    audioContext,
    oscillatorMap,
    mainGainNode
  }
}

function playTone (frequency, player) {
  const oscillator = player.audioContext.createOscillator()
  oscillator.connect(player.mainGainNode)

  const type = WAVE_TYPES[USE_TYPE]
  oscillator.type = type

  oscillator.frequency.value = frequency
  oscillator.start()

  return oscillator
}

function startPlayingNote (note, channel, player) {
  if (note.indexOf('R') >= 0) return
  player.oscillatorMap[channel][note] = playTone(noteFrequencies[note], player)
}

function stopPlayingNote (note, channel, player) {
  if (note.indexOf('R') >= 0) return
  player.oscillatorMap[channel][note].stop()
  delete player.oscillatorMap[channel][note]
}

function playMelody (i, operations, player, canvasId, reactThis) {
  if (ASKED_TO_STOP) return stopMusic(player, reactThis)

  let somethingWillPlay = false
  for (const channel in operations) {
    if (operations[channel].length <= i) continue
    if (!_.isNil(operations[channel][i].blockId)) reactThis.highlightBlock(operations[channel][i].blockId)
    reactThis.highlightCanvasNote(operations[channel][i].id, canvasId)
    startPlayingNote(operations[channel][i].note, channel, player)
    somethingWillPlay = true
  }

  if (!somethingWillPlay) {
    return stopMusic(player, reactThis)
  }

  setTimeout(() => {
    for (const channel in operations) {
      if (operations[channel].length <= i) continue
      if (!_.isNil(operations[channel][i].blockId)) reactThis.stopHighlightBlock(operations[channel][i].blockId)
      reactThis.stopHighlightCanvasNote(operations[channel][i].id, canvasId)
      stopPlayingNote(operations[channel][i].note, channel, player)
    }
    playMelody(i + 1, operations, player, canvasId, reactThis)
  }, MS_INTERVAL)
}

function playMusic (operations, canvasId, reactThis) {
  PLAYING = true
  const channels = _.keys(operations)
  const player = setupPlayer(channels)
  playMelody(0, operations, player, canvasId, reactThis)
}

function stopMusic (player, reactThis) {
  PLAYING = false
  ASKED_TO_STOP = false
  player.audioContext.close()
  delete player.audioContext
  delete player.oscillatorMap
  delete player.mainGainNode

  reactThis.setState({
    disableInput: false
  })
}

function getMusicPlayerState () {
  return PLAYING
}

function askToStop () {
  if (PLAYING) ASKED_TO_STOP = true
}

module.exports = {
  playMusic,
  getMusicPlayerState,
  askToStop
}
