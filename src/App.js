import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import BlocklyMusic from './BlocklyMusic'

const _ = require('lodash')
const exercises = require('./exercises')
const i18n = require('./i18n')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentExercise: '',
      currentExerciseObj: null
    }
  }

  componentDidMount () {
    this.selectExercise('blocklyMusic:0')
  }

  selectExercise (url) {
    const exerciseObj = _.find(exercises, ex => { return ex.url === url })
    this.setState({
      currentExercise: url,
      currentExerciseObj: exerciseObj
    })
  }

  render () {
    return (
      <div style={{ width: '100%' }}>
        <Row>
          <Col xs={6}>
            <Form.Group as={Row}>
              <Form.Label column xs={3}>{i18n('blocklyMusic.interface.selectExercise', 'it-IT')}</Form.Label>
              <Col xs={6}>
                <Form.Select onChange={evt => { return this.selectExercise(evt.target.value) }}>
                  {exercises.map((exercise, idx) => {
                    return (
                      <option value={exercise.url} key={idx}>{exercise.url}</option>
                    )
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <BlocklyMusic exerciseData={this.state.currentExerciseObj} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
