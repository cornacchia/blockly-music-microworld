import React from 'react'
import PropTypes from 'prop-types'
import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Stop, Play } from 'react-bootstrap-icons'
import blocklySetup from './blocklySetup'

const _ = require('lodash')

const musicGameFunctions = require('./musicGameFunctions')
const musicPlayer = require('./musicPlayer')
const musicCanvasUtils = require('./musicCanvasUtils')
const musicUtils = require('./musicUtils')
const i18n = require('./i18n')

const GOAL_CANVAS_ID = 'goalCanvas'
const USER_CANVAS_ID = 'userCanvas'
const CANVAS_DIMENSIONS = { width: 550, height: 180 }
const TRUNCATE_MUSIC_THRESHOLD = 288

const DEFAULT_STATE = {
  exerciseData: null,
  disableInput: false,
  feedbacks: [],
  blocks: {
    ideal: -1,
    used: 0
  },
  sheets: {
    goal: 1,
    user: 1
  },
  goalMusic: null,
  userMusic: null,
  success: false
}

class BlocklyMusic extends React.Component {
  constructor (props) {
    super(props)
    this.state = DEFAULT_STATE

    this.setupWorkspace = this.setupWorkspace.bind(this)
    this.startExercise = this.startExercise.bind(this)
    this.executeUserCode = this.executeUserCode.bind(this)
    this.highlightBlock = this.highlightBlock.bind(this)
    this.stopHighlightBlock = this.stopHighlightBlock.bind(this)
    this.resetExecution = this.resetExecution.bind(this)
    this.setUsedBlocks = this.setUsedBlocks.bind(this)
    this.showUserMusicOnCanvas = this.showUserMusicOnCanvas.bind(this)
    this.highlightCanvasNote = this.highlightCanvasNote.bind(this)
    this.stopHighlightCanvasNote = this.stopHighlightCanvasNote.bind(this)
    this.playGoalMusic = this.playGoalMusic.bind(this)
    this.playUserMusic = this.playUserMusic.bind(this)
    this.stopMusic = this.stopMusic.bind(this)
    this.resetState = this.resetState.bind(this)
    this.loadExercise = this.loadExercise.bind(this)
  }

  resetState () {
    this.stopMusic()
    const newState = _.cloneDeep(DEFAULT_STATE)
    newState.exerciseData = this.props.exerciseData
    this.setState(newState, this.loadExercise)
  }

  loadExercise () {
    const htmlInstructions = i18n('blocklyMusic.htmlInstrMusic.' + this.props.exerciseData.htmlInstr, 'it-IT')
    const feedbacks = [{
      html: htmlInstructions,
      type: 'instructions'
    }]

    this.setState({
      blocks: {
        ideal: this.props.exerciseData.idealBlocks,
        used: this.state.blocks.used
      },
      feedbacks
    }, this.startExercise)
  }

  componentDidUpdate (prevProps) {
    if (_.isNil(prevProps.exerciseData) || prevProps.exerciseData.url !== this.props.exerciseData.url) {
      this.resetState()
    }
    const feedbackDiv = document.getElementById('feedbackDiv')
    if (!_.isNil(feedbackDiv)) feedbackDiv.scrollTop = feedbackDiv.scrollHeight
  }

  startExercise () {
    blocklySetup.init()

    // Initialize music if present in the exercise description
    if (!_.isNil(this.state.exerciseData.targetMusic)) {
      musicCanvasUtils.start(GOAL_CANVAS_ID, CANVAS_DIMENSIONS)
      const music = musicUtils.giveIdsToNotes(this.state.exerciseData.targetMusic)
      const goalSheets = musicCanvasUtils.getNumberOfSheets(music)

      this.setState({
        goalMusic: music,
        sheets: {
          goal: goalSheets,
          user: this.state.sheets.user
        }
      })

      musicCanvasUtils.initNotes(music, goalSheets, GOAL_CANVAS_ID)
      musicCanvasUtils.drawMusicSheet(GOAL_CANVAS_ID)
    }

    // Initialize empty music sheet for user
    musicCanvasUtils.start(USER_CANVAS_ID, CANVAS_DIMENSIONS)
    musicCanvasUtils.initNotes({}, 1, USER_CANVAS_ID)

    musicCanvasUtils.drawMusicSheet(USER_CANVAS_ID)

    this.setupWorkspace()
  }

  setupWorkspace () {
    // Cleanup blocklyDiv
    const blocklyDiv = document.getElementById('blocklyDiv')
    blocklyDiv.innerHTML = ''

    const toolbox = { kind: 'flyoutToolbox', contents: [] }
    for (const blockType of this.state.exerciseData.instructions) {
      toolbox.contents.push({ kind: 'block', type: blockType })
    }

    const workspace = Blockly.inject('blocklyDiv', {
      toolbox,
      trashcan: true,
      move: {
        scrollbars: {
          horizontal: false,
          vertical: true
        },
        drag: true,
        wheel: true
      }
    })

    if (this.state.exerciseData.defaultCode) {
      const dom = Blockly.utils.xml.textToDom(this.state.exerciseData.defaultCode)
      Blockly.Xml.domToWorkspace(dom, workspace)
    }

    this.setState({ workspace: workspace })
  }

  highlightBlock (blockId) {
    const block = this.state.workspace.getBlockById(blockId)
    if (!_.isNil(block)) block.setHighlighted(true)
  }

  stopHighlightBlock (blockId) {
    const block = this.state.workspace.getBlockById(blockId)
    if (!_.isNil(block)) block.setHighlighted(false)
  }

  highlightCanvasNote (id, canvasId) {
    musicCanvasUtils.highlightCanvasNote(id, canvasId)
  }

  stopHighlightCanvasNote (id, canvasId) {
    musicCanvasUtils.stopHighlightCanvasNote(id, canvasId)
  }

  resetExecution () {
    this.highlightBlock('')
  }

  playGoalMusic () {
    const goalMusic = this.state.goalMusic
    const musicOperations = musicUtils.translateForMusicPlayer(goalMusic)
    this.setState({
      disableInput: true
    }, () => {
      musicPlayer.playMusic(musicOperations, GOAL_CANVAS_ID, this)
    })
  }

  playUserMusic () {
    const userMusic = this.state.userMusic
    const musicOperations = musicUtils.translateForMusicPlayer(userMusic)
    this.setState({
      disableInput: true
    }, () => {
      musicPlayer.playMusic(musicOperations, USER_CANVAS_ID, this)
    })
  }

  stopMusic () {
    musicPlayer.askToStop()
  }

  setUsedBlocks (num) {
    this.setState({
      blocks: {
        ideal: this.state.blocks.ideal,
        used: num
      }
    })
  }

  showUserMusicOnCanvas (music) {
    const userSheets = musicCanvasUtils.getNumberOfSheets(music)
    this.setState({
      sheets: {
        goal: this.state.sheets.goal,
        user: userSheets
      }
    })

    musicCanvasUtils.initNotes(music, userSheets, USER_CANVAS_ID)
    musicCanvasUtils.drawMusicSheet(USER_CANVAS_ID)
  }

  executeUserCode () {
    javascriptGenerator.init(this.state.workspace)
    let code = ''
    const procedureDefineBlocks = this.state.workspace.getBlocksByType('music_procedure_define')
    for (const pdBlock of procedureDefineBlocks) {
      code += javascriptGenerator.blockToCode(pdBlock)
    }
    const musicStartBlocks = this.state.workspace.getBlocksByType('music_start')
    for (const msBlock of musicStartBlocks) {
      code += javascriptGenerator.blockToCode(msBlock)
    }

    try {
      /* eslint-disable no-unused-vars */
      const mgf = musicGameFunctions.getGameFunctions()
      /* eslint-enable no-unused-vars */

      code = 'let state = { operations: {}, tone: {}, iterations: {}, procedures: {} }; \n' +
        code +
        'state;'

      /* eslint-disable no-eval */
      const res = eval(code)
      /* eslint-enable no-eval */

      let music = musicUtils.giveIdsToNotes(res.operations)
      let tooLong = false
      if (TRUNCATE_MUSIC_THRESHOLD > 0) {
        const truncationRes = musicUtils.truncateMusic(music, TRUNCATE_MUSIC_THRESHOLD)
        music = truncationRes.music
        if (truncationRes.hadToTruncate) {
          tooLong = true
        }
      }
      this.setState({
        userMusic: music
      })

      const success = !tooLong && musicUtils.checkIfMusicEqualToTarget(music, this.state.goalMusic)

      // Play user generated music
      const musicOperations = musicUtils.translateForMusicPlayer(music)

      this.showUserMusicOnCanvas(music)

      this.setState({
        success: success,
        disableInput: true
      }, () => {
        musicPlayer.playMusic(musicOperations, USER_CANVAS_ID, this)
      })

      const feedbacks = this.state.feedbacks
      let newFeedback

      if (success) {
        newFeedback = {
          html: i18n('blocklyMusic.feedbacks.success', 'it-IT'),
          type: 'error'
        }
      } else {
        if (tooLong) {
          newFeedback = {
            html: i18n('blocklyMusic.feedbacks.tooLong', 'it-IT'),
            type: 'error'
          }
        } else {
          newFeedback = {
            html: i18n('blocklyMusic.feedbacks.generic', 'it-IT'),
            type: 'error'
          }
        }
      }
      feedbacks.push(newFeedback)
      this.setState({ feedbacks: feedbacks })
    } catch (err) {
      // This should never happen normally
      console.error(err)
      alert('Errore nella riproduzione della musica!')
    }
  }

  render () {
    if (_.isNil(this.state.exerciseData)) return (<div></div>)

    return (
      <div>
        <Row style={{ height: '100px', marginTop: '20px' }}>
          <Col xs={12} className='d-flex justify-content-center flex-nowrap'>
            <div id='feedbackDiv' className='bordered'>
              {this.state.feedbacks.map((feedback, idx) => {
                if (feedback.type === 'instructions') {
                  return (
                    <Row key={idx} className='align-middle' style={{ marginTop: '10px' }}>
                      <Col xs={12}>
                        <div dangerouslySetInnerHTML={{ __html: feedback.html }}></div>
                      </Col>
                    </Row>
                  )
                }
                return (
                  <Row key={idx} className='align-middle' style={{ marginBottom: '10px' }}>
                    {idx > 0 && <hr/>}
                    <Col xs={12}>
                      <div dangerouslySetInnerHTML={{ __html: feedback.html }} style={{ display: 'inline-block' }}></div>
                    </Col>
                  </Row>
                )
              })}
            </div>
          </Col>
        </Row>
        <Row>
          {/* MUSIC SHEETS - CANVASES */}
          <Col xs={5}>
            {this.state.exerciseData.targetMusic &&
              <Row style={{ marginTop: '20px' }}>
                <Col xs={12}>
                  <h3>{i18n('blocklyMusic.interface.goalCanvasTitle', 'it-IT')}</h3>
                  <canvas id={GOAL_CANVAS_ID} style={{ width: '100%', height: CANVAS_DIMENSIONS.height * this.state.sheets.goal }}></canvas>
                </Col>
              </Row>
            }
            {this.state.goalMusic &&
            <Row>
              <Col xs={4}>
                  <Button variant='primary' onClick={this.playGoalMusic} style={{ width: '50%' }} disabled={this.state.disableInput}><Play /></Button>
              </Col>
            </Row>
            }
            {this.state.exerciseData.targetMusic && <hr />}
            <Row style={{ marginTop: '20px' }}>
              <Col xs={12}>
                <h3>{i18n('blocklyMusic.interface.userCanvasTitle', 'it-IT')}</h3>
                <canvas id={USER_CANVAS_ID} style={{ width: '100%', height: CANVAS_DIMENSIONS.height * this.state.sheets.user }}></canvas>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                {this.state.userMusic &&
                  <Button variant='primary' onClick={this.playUserMusic} style={{ width: '100%' }} disabled={this.state.disableInput}><Play /></Button>
                }
              </Col>
            </Row>
          </Col>

          {/* BLOCKLY INTERFACE */}
          <Col xs={7}>
            <Row style={{ marginTop: '20px' }}>
              <Col xs={12}>
                {this.state.blocks.ideal > 0 &&
                  <Row>
                    <Col xs={12} className='bordered'>
                      {i18n('blocklyMusic.interface.blocks', 'it-IT')} {this.state.blocks.used} / {this.state.blocks.ideal}
                    </Col>
                  </Row>
                }
                <Row style={{ marginTop: '5px' }}>
                  <div id='blocklyDiv' style={{ height: '600px', padding: '0px' }}></div>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <ButtonGroup>
                    <Button variant='primary' onClick={this.executeUserCode} disabled={this.state.disableInput} style={{ width: '50%' }}>
                      <Play /> {i18n('blocklyMusic.interface.execute', 'it-IT')}
                    </Button>
                    <Button variant='danger' onClick={this.stopMusic} style={{ width: '50%' }}>
                      <Stop /> {i18n('blocklyMusic.interface.stopMusic', 'it-IT')}
                    </Button>
                  </ButtonGroup>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

BlocklyMusic.propTypes = {
  exerciseData: PropTypes.object
}

export default BlocklyMusic
