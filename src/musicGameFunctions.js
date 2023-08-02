function playNoteSimple (note, duration, state, topBlockId, blockId) {
  const fullNote = note + state.tone[topBlockId]
  const durationInt = parseInt(duration)

  const newNote = {
    blockId: blockId,
    note: fullNote,
    duration: durationInt
  }

  state.operations[topBlockId].push(newNote)

  return state
}

function playRest (duration, state, topBlockId, blockId) {
  const fullNote = 'R'
  const durationInt = parseInt(duration)

  const newNote = {
    blockId: blockId,
    note: fullNote,
    duration: durationInt
  }

  state.operations[topBlockId].push(newNote)

  return state
}

function changeTone (newTone, state, topBlockId, blockId) {
  state.tone[topBlockId] = newTone
  return state
}

function getGameFunctions () {
  return {
    playNoteSimple,
    changeTone,
    playRest
  }
}

module.exports = {
  getGameFunctions
}
