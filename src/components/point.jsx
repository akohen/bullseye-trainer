import React from 'react';

const Point = props => {
  if (props.point == null)
    return null

  return (
    <p>
      Bearing {Math.round(props.point.bearing)}° / Range {Math.round(props.point.range)}nm
      lat {Math.round(props.point.lat)} / lon {Math.round(props.point.lon)}
    </p>)
}

export default Point;