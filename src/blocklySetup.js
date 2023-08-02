import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
const blocks = require('./blocks.json')
const _ = require('lodash')

function getTopBlockId (block) {
  if (block.type === 'music_start') return block.id
  if (block.type === 'music_procedure_define') {
    // This could be done better in the future (e.g. by using variables)
    const mainBlocks = block.workspace.getBlocksByType('music_start')
    if (mainBlocks.length !== 1) return ''
    else return mainBlocks[0].id
  }
  const parent = block.getParent()
  if (_.isNil(parent)) return ''
  return getTopBlockId(parent)
}

function musicStart (block) {
  const id = block.id
  let code = ''
  code += 'state.operations["' + id + '"] = [];\n'
  code += 'state.tone["' + id + '"] = "3";\n'
  return code
}

function musicRepeat (block) {
  const blockId = block.id
  const times = block.getFieldValue('TIMES') || 0
  const branch0 = javascriptGenerator.statementToCode(block, 'DO')
  let code = ''

  code += 'state.iterations["' + blockId + '"] = ' + times + ';\n'
  code += 'for (let i = 0; i < ' + times + '; i++) {\n' + branch0 + '\n};\n'
  return code
}

function playNoteSimple (block) {
  const blockId = block.id
  const topBlockId = getTopBlockId(block)

  if (topBlockId === '') return ''

  const note = block.getFieldValue('NOTE')
  const duration = block.getFieldValue('DURATION')
  let code = ''

  code += 'state = mgf.playNoteSimple("' + note + '", "' + duration + '", state, "' + topBlockId + '", "' + blockId + '");\n'
  return code
}

function playRest (block) {
  const blockId = block.id
  const topBlockId = getTopBlockId(block)

  if (topBlockId === '') return ''

  const duration = block.getFieldValue('DURATION')
  let code = ''

  code += 'state = mgf.playRest("' + duration + '", state, "' + topBlockId + '", "' + blockId + '");\n'
  return code
}

function changeTone (block) {
  const blockId = block.id
  const topBlockId = getTopBlockId(block)

  if (topBlockId === '') return ''

  const tone = block.getFieldValue('TONE')
  let code = ''

  code += 'state = mgf.changeTone("' + tone + '", state, "' + topBlockId + '", "' + blockId + '");\n'
  return code
}

function getOuterIterationId (block) {
  if (block.type === 'music_repeat') return block.id
  const parent = block.getParent()
  if (_.isNil(parent)) return ''
  return getOuterIterationId(parent)
}

function ifMusicIteration (block) {
  const topBlockId = getTopBlockId(block)
  if (topBlockId === '') return ''

  const iterationId = getOuterIterationId(block)
  if (iterationId === '') return ''

  const repType = block.getFieldValue('REPETITION')

  let condition = ''
  if (repType === 'first') condition = 'i === 0'
  else if (repType === 'last') condition = 'i === state.iterations["' + iterationId + '"] - 1'
  else if (repType === 'even') condition = '((i + 1) % 2) === 0'
  else if (repType === 'odd') condition = '((i + 1) % 2) !== 0'

  const branch0 = javascriptGenerator.statementToCode(block, 'DO')

  let code = ''
  code += 'if (' + condition + ') {\n'
  code += branch0
  code += '}\n'

  return code
}

function ifMusicIterationElse (block) {
  const topBlockId = getTopBlockId(block)
  if (topBlockId === '') return ''

  const iterationId = getOuterIterationId(block)
  if (iterationId === '') return ''

  const repType = block.getFieldValue('REPETITION')

  let condition = ''
  if (repType === 'first') condition = 'i === 0'
  else if (repType === 'last') condition = 'i === state.iterations["' + iterationId + '"] - 1'
  else if (repType === 'even') condition = '((i + 1) % 2) === 0'
  else if (repType === 'odd') condition = '((i + 1) % 2) !== 0'

  const branch0 = javascriptGenerator.statementToCode(block, 'DO')
  const branch1 = javascriptGenerator.statementToCode(block, 'ELSE')

  let code = ''
  code += 'if (' + condition + ') {\n'
  code += branch0
  code += '} else {\n'
  code += branch1
  code += '};\n'

  return code
}

function ifMusicTone (block) {
  const topBlockId = getTopBlockId(block)

  if (topBlockId === '') return ''

  const branch0 = javascriptGenerator.statementToCode(block, 'DO')
  const branch1 = javascriptGenerator.statementToCode(block, 'ELSE')

  const tone = block.getFieldValue('TONE')
  let code = ''

  code += 'if (state.tone["' + topBlockId + '"] === "' + tone + '") {\n'
  code += branch0
  code += '} else {\n'
  code += branch1
  code += '};\n'
  return code
}

function procedureDefine (block) {
  const procedureName = block.getFieldValue('PROCEDURE_NAME')
  const branch0 = javascriptGenerator.statementToCode(block, 'DO')

  let code = ''
  code += 'state.procedures["' + procedureName + '"] = function () {\n'
  code += branch0
  code += '};\n'

  return code
}

function procedureCall (block) {
  const topBlockId = getTopBlockId(block)

  if (topBlockId === '') return ''

  const procedureName = block.getFieldValue('PROCEDURE_NAME')
  let code = ''
  code += 'state.procedures["' + procedureName + '"]();\n'

  return code
}

function init () {
  if (!_.isNil(Blockly.Blocks.flag_block)) return
  Blockly.defineBlocksWithJsonArray(blocks)

  javascriptGenerator.music_start = musicStart
  javascriptGenerator.music_repeat = musicRepeat
  javascriptGenerator.play_note_simple = playNoteSimple
  javascriptGenerator.play_note = playNoteSimple
  javascriptGenerator.play_rest = playRest
  javascriptGenerator.change_tone = changeTone
  javascriptGenerator.if_music_tone = ifMusicTone
  javascriptGenerator.if_music_iteration = ifMusicIteration
  javascriptGenerator.if_music_iteration_else = ifMusicIterationElse
  javascriptGenerator.music_procedure_define = procedureDefine
  javascriptGenerator.music_procedure_call = procedureCall
}

const exportObj = {
  init
}

export default exportObj
