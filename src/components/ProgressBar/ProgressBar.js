import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ProgressBar = props => {
  if (props.pct === 100) {
    setTimeout(() => props.onAnimationComplete(), props.duration)
  }

  return (
    <div style={style.wrapper}>
      <Bar {...props} />
    </div>
  )
}

const Bar = styled.div`
  position: absolute;
  height: 100%;
  transition: ${props => `width ${props.duration}ms linear`};
  width: ${props => `${props.pct}%`};
  background-color: ${props => props.color};
`

const style = {
  wrapper: {
    position: 'relative',
    backgroundColor: 'lightGrey',
    height: 5,
  },
}

ProgressBar.propTypes = {
  pct: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
  onAnimationComplete: PropTypes.func,
}

ProgressBar.defaultProps = {
  pct: 0,
  color: 'red',
  duration: 1000,
  onAnimationComplete: () => {},
}
