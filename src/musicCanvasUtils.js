const _ = require('lodash')

const imageDict = {}

const SCALE_RATIO = 1

const MUSIC_SHEET = {
  verticalSeparation: 160,
  maxDuration: 32
}

const STAFF = {
  startX: 1,
  startY: 60,
  startNotes: 20,
  lineGap: 20,
  lineLength: 449,
  noteDistance: 14,
  maxLineY: {}
}

const NOTE = {
  startX: STAFF.startX + 10,
  circleRadius: 5,
  stemHeight: 40,
  flagHeigth: 8,
  flagWidth: 10,
  flagDistance: 10,
  littleLineLength: 30
}

const POPUP = {
  width: 100,
  height: 70,
  color: '#f4e950'
}

const DURATION_MAP = {
  1: '1/16',
  2: '1/8',
  4: '1/4',
  8: '2/4',
  16: '4/4'
}

const NOTE_NAMES = {
  C: 'DO',
  D: 'RE',
  E: 'MI',
  F: 'FA',
  G: 'SOL',
  A: 'LA',
  B: 'SI',
  R: 'PAUSA'
}

const NOTES_ARR = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']

const NOTE_MAP = {}

const NOTES = {}

// View state
const CANVAS_STATE = {}

const CANVAS_DIMENSIONS = {}

function resetCanvasState (canvasId) {
  delete CANVAS_STATE[canvasId]
}

function setupCanvasState (music, numOfSheets, canvasId) {
  CANVAS_STATE[canvasId] = {
    numOfSheets: numOfSheets,
    selectedNote: null,
    highlightedNote: {},
    notes: {}
  }

  for (const channel in music) {
    CANVAS_STATE[canvasId].notes[channel] = []
    CANVAS_STATE[canvasId].highlightedNote[channel] = null
  }
}

function scaleCanvas (canvas, state, canvasDimensions) {
  const context = canvas.getContext('2d')
  canvas.style.width = canvasDimensions.width + 'px'
  canvas.style.height = (canvasDimensions.height * state.numOfSheets) + 'px'
  const scale = window.devicePixelRatio
  canvas.width = canvasDimensions.width * scale
  canvas.height = (canvasDimensions.height * state.numOfSheets) * scale
  context.scale(scale, scale)
}

function drawStaff (ctx, idx) {
  const startX = 0
  const startY = STAFF.startY + (idx * MUSIC_SHEET.verticalSeparation)
  ctx.beginPath()
  ctx.fillStyle = 'black'

  for (let i = 0; i < 5; i++) {
    const posY = startY + (STAFF.lineGap * i)
    ctx.moveTo(startX, posY)
    ctx.lineTo(startX + STAFF.lineLength, posY)

    STAFF.maxLineY[idx] = posY
  }

  let pos = 0
  let posX = STAFF.startX
  while (posX <= STAFF.lineLength) {
    ctx.moveTo(posX, startY)
    ctx.lineTo(posX, STAFF.maxLineY[idx])
    pos += 16
    posX = STAFF.startX + (pos * STAFF.noteDistance)
  }
  ctx.strokeStyle = '#606060'
  ctx.stroke()
  ctx.closePath()
}

function setupNotesYPositions () {
  let startPos = 14
  for (const note of NOTES_ARR) {
    const noteName = note[0]
    const noteTone = note[1]

    const noteYPos = STAFF.startNotes + (startPos * (STAFF.lineGap / 2))
    NOTES[noteName + noteTone] = noteYPos
    NOTE_MAP[noteName + noteTone] = NOTE_NAMES[noteName]

    NOTES[noteName + 'b' + noteTone] = noteYPos
    NOTE_MAP[noteName + 'b' + noteTone] = NOTE_NAMES[noteName] + 'b'

    NOTES[noteName + '#' + noteTone] = noteYPos
    NOTE_MAP[noteName + '#' + noteTone] = NOTE_NAMES[noteName] + '#'

    startPos -= 1
  }

  NOTE_MAP.R = NOTE_NAMES.R
}

function drawCirclet (x, y, fill, color, ctx) {
  ctx.beginPath()

  ctx.arc(x, y, NOTE.circleRadius, 0, 2 * Math.PI, false)

  ctx.strokeStyle = color
  ctx.stroke()

  if (fill) {
    ctx.fillStyle = color
    ctx.fill()
  }
}

function drawStem (x, y, color, ctx) {
  ctx.beginPath()

  ctx.moveTo(x + NOTE.circleRadius, y)
  ctx.lineTo(x + NOTE.circleRadius, y - NOTE.stemHeight)

  ctx.strokeStyle = color
  ctx.stroke()
  ctx.closePath()
}

function drawFlag (x, y, pos, color, ctx) {
  const startX = x + NOTE.circleRadius
  const startY = y - NOTE.stemHeight + (pos * NOTE.flagDistance)

  ctx.strokeStyle = color
  ctx.stroke()

  ctx.fillStyle = color
  ctx.fillRect(startX, startY, NOTE.flagWidth, NOTE.flagHeigth)
}

function drawWholeNote (x, y, color, ctx) {
  drawCirclet(x, y, false, color, ctx)
}

function drawHalfNote (x, y, color, ctx) {
  drawCirclet(x, y, false, color, ctx)
  drawStem(x, y, color, ctx)
}

function drawQuarterNote (x, y, color, ctx) {
  drawCirclet(x, y, true, color, ctx)
  drawStem(x, y, color, ctx)
}

function drawEightNote (x, y, color, ctx) {
  drawCirclet(x, y, true, color, ctx)
  drawStem(x, y, color, ctx)
  drawFlag(x, y, 0, color, ctx)
}

function drawSixteenthNote (x, y, color, ctx) {
  drawCirclet(x, y, true, color, ctx)
  drawStem(x, y, color, ctx)
  drawFlag(x, y, 0, color, ctx)
  drawFlag(x, y, 1, color, ctx)
}

function drawWholeRest (x, y, color, ctx) {
  const startX = x - 5
  const startY = y - 5

  ctx.beginPath()
  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.fillRect(startX, startY, 8, 5)

  ctx.moveTo(startX - 5, startY + 5)
  ctx.lineTo(startX + 13, startY + 5)
  ctx.stroke()
  ctx.closePath()
}

function drawHalfRest (x, y, color, ctx) {
  const startX = x - 5
  const startY = y - 5

  ctx.beginPath()
  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.fillRect(startX, startY, 8, 5)

  ctx.moveTo(startX - 5, startY)
  ctx.lineTo(startX + 13, startY)
  ctx.stroke()
  ctx.closePath()
}

function drawQuarterRest (x, y, color, ctx) {
  const startX = x - 4
  const startY = y - 5

  const points = [
    { x: 5, y: 3, width: 3 },
    { x: 2, y: 10, width: 5 },
    { x: 5, y: 12, width: 3 },
    { x: 0, y: 20, width: 3 }
  ]
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.moveTo(startX, startY)
  for (const point of points) {
    // ctx.lineWidth = point.width
    ctx.lineTo(startX + point.x, startY + point.y)
    ctx.stroke()
  }
  ctx.closePath()
}

function drawEightRest (x, y, color, ctx) {
  const startX = x
  const startY = y - 5

  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.fillStyle = color

  ctx.arc(startX - 5, startY, 3, 0, 2 * Math.PI, false)
  ctx.fill()

  ctx.moveTo(startX - 5, startY + 2)
  ctx.lineTo(startX + 4, startY - 2)
  ctx.lineTo(startX, startY + 20)
  ctx.stroke()

  ctx.closePath()
}

function drawSixteenthRest (x, y, color, ctx) {
  const startX = x
  const startY = y - 5

  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.fillStyle = color

  ctx.arc(startX - 5, startY, 2, 0, 2 * Math.PI, false)
  ctx.fill()

  ctx.moveTo(startX - 5, startY + 2)
  ctx.lineTo(startX + 4, startY - 2)
  ctx.stroke()

  ctx.closePath()

  ctx.beginPath()
  ctx.arc(startX - 5, startY + 10, 2, 0, 2 * Math.PI, false)
  ctx.fill()

  ctx.moveTo(startX - 5, startY + 12)
  ctx.lineTo(startX + 4, startY + 8)
  ctx.stroke()

  ctx.closePath()

  ctx.beginPath()

  ctx.moveTo(startX + 4, startY - 3)
  ctx.lineTo(startX, startY + 20)
  ctx.stroke()

  ctx.closePath()
}

function drawLittleLine (x, y, ctx) {
  ctx.beginPath()
  ctx.moveTo(x - (NOTE.littleLineLength / 2), y)
  ctx.lineTo(x + (NOTE.littleLineLength / 2), y)
  ctx.strokeStyle = 'black'
  ctx.stroke()
  ctx.closePath()
}

function getNoteCoordinates (note, xPos) {
  let sheet = 0
  if (xPos >= MUSIC_SHEET.maxDuration) sheet = Math.floor(xPos / MUSIC_SHEET.maxDuration)

  const thisSheetXPos = xPos % MUSIC_SHEET.maxDuration
  const drawX = NOTE.startX + (thisSheetXPos * STAFF.noteDistance)
  let drawY = 0
  if (note === 'R') {
    drawY = STAFF.startY + 50
  } else drawY = NOTES[note]

  drawY += (sheet * MUSIC_SHEET.verticalSeparation)

  return { x: drawX, y: drawY, scaledX: drawX * SCALE_RATIO, scaledY: drawY * SCALE_RATIO, sheet: sheet }
}

function drawSharp (x, y, color, ctx) {
  ctx.beginPath()
  ctx.font = 'bold 25px Arial'
  ctx.fillStyle = color
  ctx.fillText('#', x - 18, y + 7)
  ctx.closePath()
}

function drawFlat (x, y, color, ctx) {
  ctx.beginPath()
  ctx.font = 'bold 25px Arial'
  ctx.fillStyle = color
  ctx.fillText('b', x - 18, y + 7)
  ctx.closePath()
}

function checkIfWeNeedLittleLine (note, drawY) {
  if (note.note === 'R') return false
  if (drawY > STAFF.maxLineY[note.coords.sheet] || drawY < STAFF.startY * (note.coords.sheet + 1)) {
    return (drawY % STAFF.lineGap) === 0
  }
  return false
}

function drawNote (note, ctx) {
  const drawX = note.coords.x
  const drawY = note.coords.y

  let color = 'black'
  if (note.select) color = 'red'
  if (note.highlight) color = 'blue'

  if (checkIfWeNeedLittleLine(note, drawY)) {
    drawLittleLine(drawX, drawY, ctx)
  }

  if (note.duration === 16) {
    if (note.note === 'R') drawWholeRest(drawX, drawY, color, ctx)
    else drawWholeNote(drawX, drawY, color, ctx)
  } else if (note.duration === 8) {
    if (note.note === 'R') drawHalfRest(drawX, drawY, color, ctx)
    else drawHalfNote(drawX, drawY, color, ctx)
  } else if (note.duration === 4) {
    if (note.note === 'R') drawQuarterRest(drawX, drawY, color, ctx)
    else drawQuarterNote(drawX, drawY, color, ctx)
  } else if (note.duration === 2) {
    if (note.note === 'R') drawEightRest(drawX, drawY, color, ctx)
    else drawEightNote(drawX, drawY, color, ctx)
  } else if (note.duration === 1) {
    if (note.note === 'R') drawSixteenthRest(drawX, drawY, color, ctx)
    else drawSixteenthNote(drawX, drawY, color, ctx)
  }

  if (note.note.indexOf('#') >= 0) {
    drawSharp(drawX, drawY, color, ctx)
  } else if (note.note.indexOf('b') >= 0) {
    drawFlat(drawX, drawY, color, ctx)
  }
}

function getNumberOfSheets (music) {
  let duration = 0
  for (const channel in music) {
    let channelDuration = 0
    for (const note of music[channel]) {
      channelDuration += note.duration
    }
    if (channelDuration > duration) duration = channelDuration
  }

  const sheets = Math.ceil(duration / MUSIC_SHEET.maxDuration)

  return sheets > 0 ? sheets : 1
}

function initNotes (music, numOfSheets, canvasId) {
  resetCanvasState(canvasId)
  setupCanvasState(music, numOfSheets, canvasId)

  for (const channel in music) {
    let pos = 0
    for (const note of music[channel]) {
      const noteCoords = getNoteCoordinates(note.note, pos)
      // For rests: we have a default position but
      // see if we can use something better
      if (note.note === 'R' && CANVAS_STATE[canvasId].notes[channel].length > 0) {
        const lastNote = CANVAS_STATE[canvasId].notes[channel][CANVAS_STATE[canvasId].notes[channel].length - 1]
        if (lastNote.coords.sheet === noteCoords.sheet) {
          const lastNoteCoords = lastNote.coords
          noteCoords.y = lastNoteCoords.y
          noteCoords.scaledY = lastNoteCoords.scaledY
        }
      }
      CANVAS_STATE[canvasId].notes[channel].push({
        coords: noteCoords,
        note: note.note,
        duration: note.duration,
        id: note.id,
        select: false,
        highlight: false
      })
      pos += note.duration
    }
  }
}

function drawNotePopup (note, ctx) {
  const startX = note.coords.x + 10
  const startY = note.coords.y - 50

  ctx.beginPath()
  ctx.strokeStyle = POPUP.color
  ctx.stroke()

  ctx.fillStyle = POPUP.color
  ctx.fillRect(startX, startY, POPUP.width, POPUP.height)

  ctx.font = '25px Arial'
  ctx.fillStyle = 'black'

  const noteText = NOTE_MAP[note.note]

  const durationText = DURATION_MAP[note.duration]

  ctx.fillText(noteText, startX + 10, startY + 30)
  ctx.fillText(durationText, startX + 10, startY + 60)

  ctx.closePath()
}

function drawNotes (canvasId) {
  const canvas = document.getElementById(canvasId)
  const ctx = canvas.getContext('2d')

  for (const channel in CANVAS_STATE[canvasId].notes) {
    for (const note of CANVAS_STATE[canvasId].notes[channel]) {
      drawNote(note, ctx)
    }
  }

  if (!_.isNil(CANVAS_STATE[canvasId].selectedNote)) {
    drawNotePopup(CANVAS_STATE[canvasId].selectedNote, ctx)
  }
}

// Music sheet is an object with a series of "channels"
function drawMusicSheet (canvasId) {
  const canvas = document.getElementById(canvasId)
  scaleCanvas(canvas, CANVAS_STATE[canvasId], CANVAS_DIMENSIONS[canvasId])

  const ctx = canvas.getContext('2d')
  ctx.lineWidth = 3

  for (let i = 0; i < CANVAS_STATE[canvasId].numOfSheets; i++) {
    drawStaff(ctx, i)
  }
  if (!_.isNil(CANVAS_STATE[canvasId])) drawNotes(canvasId)

  // Handle canvas scaling down or up
  const height = CANVAS_DIMENSIONS[canvasId].height * CANVAS_STATE[canvasId].numOfSheets * SCALE_RATIO
  const width = CANVAS_DIMENSIONS[canvasId].width * SCALE_RATIO
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
}

function euclidDistance (c1, c2) {
  return Math.sqrt(
    Math.pow(c1.x - c2.scaledX, 2) +
    Math.pow(c1.y - c2.scaledY, 2)
  )
}

function getSelectedNote (canvasId, x, y) {
  for (const channel in CANVAS_STATE[canvasId].notes) {
    for (const note of CANVAS_STATE[canvasId].notes[channel]) {
      if (euclidDistance({ x, y }, note.coords) < 8) {
        return note
      }
    }
  }
  return null
}

function removeNoteSelects (canvasId) {
  for (const channel in CANVAS_STATE[canvasId].notes) {
    for (const note of CANVAS_STATE[canvasId].notes[channel]) {
      note.select = false
    }
  }

  CANVAS_STATE[canvasId].selectedNote = null
  drawMusicSheet(canvasId)
}


function handleMouseMove (evt) {
  const canvasId = evt.target.getAttribute('id')
  const rect = evt.target.getBoundingClientRect()
  const x = evt.clientX - rect.left
  const y = evt.clientY - rect.top

  const note = getSelectedNote(canvasId, x, y)
  if (!note && !_.isNil(CANVAS_STATE[canvasId].selectedNote)) {
    removeNoteSelects(canvasId)
  } else if (note && _.isNil(CANVAS_STATE[canvasId].selectedNote)) {
    note.select = true
    CANVAS_STATE[canvasId].selectedNote = note
    drawMusicSheet(canvasId)
  }
}

function handleMouseOut (evt) {
  const canvasId = evt.target.getAttribute('id')
  if (!_.isNil(CANVAS_STATE[canvasId].selectedNote)) {
    CANVAS_STATE[canvasId].selectedNote = null
    removeNoteSelects(canvasId)
  }
}

function attachMouseEvents (canvasId) {
  const canvas = document.getElementById(canvasId)
  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('mouseout', handleMouseOut)
}

function detachMouseEvents (canvasId) {
  const canvas = document.getElementById(canvasId)
  canvas.removeEventListener('mousemove', handleMouseMove)
  canvas.removeEventListener('mouseout', handleMouseOut)
}

function start (canvasId, canvasDimensions) {
  CANVAS_DIMENSIONS[canvasId] = canvasDimensions

  setupNotesYPositions()
  attachMouseEvents(canvasId)
}

function stop (canvasId) {
  detachMouseEvents(canvasId)
}

function highlightCanvasNote (noteId, canvasId) {
  for (const channel in CANVAS_STATE[canvasId].notes) {
    // Handle previously highlighted notes (if any)
    if (!_.isNil(CANVAS_STATE[canvasId].highlightedNote[channel])) {
      if (CANVAS_STATE[canvasId].highlightedNote[channel].id === noteId) return
      else {
        CANVAS_STATE[canvasId].highlightedNote[channel].highlighted = false
      }
    }

    for (const note of CANVAS_STATE[canvasId].notes[channel]) {
      if (note.id === noteId) {
        note.highlight = true
        CANVAS_STATE[canvasId].highlightedNote[channel] = note
        break
      }
    }
  }

  drawMusicSheet(canvasId)
}

function stopHighlightCanvasNote (noteId, canvasId) {
  for (const channel in CANVAS_STATE[canvasId].highlightedNote) {
    if (!_.isNil(CANVAS_STATE[canvasId].highlightedNote[channel])) {
      if (CANVAS_STATE[canvasId].highlightedNote[channel].id === noteId) {
        CANVAS_STATE[canvasId].highlightedNote[channel].highlight = false
        CANVAS_STATE[canvasId].highlightedNote[channel] = null
      }
    }
  }

  drawMusicSheet(canvasId)
}

module.exports = {
  start,
  stop,
  drawMusicSheet,
  initNotes,
  highlightCanvasNote,
  stopHighlightCanvasNote,
  getNumberOfSheets
}
