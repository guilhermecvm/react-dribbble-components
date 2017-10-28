import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ProgressBar = props => {
  if (props.pct === 100) {
    setTimeout(() => props.onAnimationComplete(), props.duration)
  }

  return (
    <Wrapper {...props}>
      <Bar {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background-color: #dddddd;
  height: ${props => `${props.height}px`};
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`

Wrapper.propTypes = {
  height: PropTypes.number,
}

Wrapper.defaultProps = {
  height: 5,
}

const Bar = styled.div`
  position: absolute;
  height: 100%;
  transition: ${props => `width ${props.duration}ms linear`};
  width: ${props => `${props.pct}%`};
  background-color: ${props => props.color};
`

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
