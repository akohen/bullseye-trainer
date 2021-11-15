import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { random, giveanswer } from '../../modules/bullseye'
import Point from '../../components/point'
import AnswerForm from '../../components/form'
import TopView from '../../components/topview'

const App = props => {
  let controls = null
  if(!props.positions.difference) {
    controls = <AnswerForm onSubmit={props.giveanswer} onChange={props.changeValues} />
  } else {
    let grade = ''
    if(props.positions.error.ratio >= 0.8) {
      grade = 'Bad'
    } else if(props.positions.error.ratio > 0.4) {
      grade = 'OK'
    } else if(props.positions.error.ratio > 0.1) {
      grade = 'Good'
    } else {
      grade = 'Perfect!'
    }
    controls = <div>
      <h4>Target position from you</h4>
      <Point point={props.positions.relative} />

      <h4>Difference between guess and target position</h4>
      <Point point={props.positions.error} />
      <p>{grade} - Score: {props.positions.score}/{props.positions.tries}</p>
      
      <TopView positions={props.positions}/>
      <p className="next"><button onClick={props.random} autoFocus>Next</button></p>
    </div>
  } 
  return (
  <div className="flex-grid">
    <div className="col">
    <h1>Bullseye trainer</h1>

    <h4>Your position from bulls</h4>
    <Point point={props.positions.A} />

    <h4>Target position from bulls</h4>
    <Point point={props.positions.B} />
    </div>
    <div className="col">
    {controls}
    </div>
    
  </div>
)}

const mapStateToProps = state => ({
  positions: state.bullseye,
  changeValues: args => { state.bullseye.bearing = args.bearing; state.bullseye.range = args.range }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  random,
  giveanswer,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
