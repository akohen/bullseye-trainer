import React from 'react';

const Point = props => {
  if (props.point == null)
    return null

  return (
    <p>
      Bearing {Math.round(props.point.bearing)}° Range {Math.round(props.point.range)}nm
    </p>)
}

export default Point;