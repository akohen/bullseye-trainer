import {reset} from 'redux-form';

export const RANDOM = 'bullseye/RANDOM'
export const ANSWER = 'bullseye/ANSWER'

const BEARING_RESOLUTION = 10 // Angular resolution, in degrees
const RANGE_RESOLUTION = 5 // Range resolution, in nm
const RANGE_MAX = 25 // maximum range, in nm
const RANGE_MIN = 5 // minimum range, in nm

class Point {
  constructor(args) {
    if(args && 'bearing' in args && 'range' in args) {
      this.bearing = args.bearing
      this.range = args.range
    } else {
      this.bearing = Math.floor(Math.random() * 360/BEARING_RESOLUTION) * BEARING_RESOLUTION
      this.range = Math.floor(Math.random() * ( RANGE_MAX - RANGE_MIN + RANGE_RESOLUTION ) / RANGE_RESOLUTION ) * RANGE_RESOLUTION + RANGE_MIN
    }
  }
  
  get lat() { return ( this.range * Math.cos(this.rad_bearing) ) }
  get lon() { return ( this.range * Math.sin(this.rad_bearing) ) }
  get rad_bearing() { return this.bearing * Math.PI / 180 }

  getRelativePosition(point) {
    let lat = point.lat - this.lat
    let lon = point.lon - this.lon
    return new Point({
      bearing:(Math.atan2(lon,lat) * 180/Math.PI + 360 ) % 360, 
      range:Math.sqrt(lat**2 + lon**2)
    })
  }
}

const newState = () => {
  let A = new Point()
  let B = new Point()
  return {
    A:A,
    B:B,
    rel:A.getRelativePosition(B),
    answer:null,
    bearing:null,
    range:null
  }
}

export default (state = newState(), action) => {
  switch (action.type) {
    case RANDOM:
      return {
        ...state,
        ...newState()
      }

    case ANSWER:
      return {
        ...state,
        difference: state.rel.getRelativePosition( new Point({bearing:state.bearing,range:state.range}) )
      }

    default:
      return state
  }
}

export const random = () => {
  return dispatch => {
    dispatch({
      type: RANDOM
    })
  }
}

export const giveanswer = () => {
  return dispatch => {
    dispatch({
      type: ANSWER
    })
    dispatch(reset('answer'))
  }
}

