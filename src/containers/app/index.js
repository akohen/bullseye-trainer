import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { random, giveanswer } from '../../modules/bullseye'
import Point from '../../components/point'
import AnswerForm from '../../components/form'
import TopView from '../../components/topview'

const App = props => (
  <div>
    <h1>Bullseye trainer</h1>

    <h4>Your position from bulls</h4>
    <Point point={props.A} />

    <h4>Target position from bulls</h4>
    <Point point={props.B} />
    
    <h4>Target position from you</h4>
    <Point point={props.relative} />

    <h4>Guessed position from the target position</h4>
    <Point point={props.diff} />
    
    <AnswerForm onSubmit={props.giveanswer} onChange={props.changeValues} />
    <p><button onClick={props.random}>Next</button></p>
    <TopView positions={props.positions}/>
  </div>
)

const mapStateToProps = state => ({
  positions: state.bullseye,
  A: state.bullseye.A,
  B: state.bullseye.B,
  relative:state.bullseye.rel,
  diff: state.bullseye.difference,
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
