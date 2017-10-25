import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export class ProgressCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progressBarAnimationCompleted: false,
    }
    this.handlePBAnimationCompleted = this.handlePBAnimationCompleted.bind(this)
  }

  handlePBAnimationCompleted() {
    this.setState({
      progressBarAnimationCompleted: true,
    })
  }

  render() {
    const { props, state } = this

    let propsState
    if (!state.progressBarAnimationCompleted && !props.error) {
      propsState = props.loadingState
    } else if (state.progressBarAnimationCompleted) {
      propsState = props.successState
    } else {
      propsState = props.errorState
    }

    const { Icon, title, message, headerBg1, headerBg2, animate } = propsState

    return (
      <div style={style.box}>
        <HeaderAnimated bg1={headerBg1} bg2={headerBg2} animate={animate}>
          <div style={style.headerContent}>
            <Icon size={48} />
            <div>{title}</div>
          </div>
          <div style={animate ? { visibility: 'hidden' } : { width: '100%' }}>
            <ProgressBar
              pct={props.pct}
              color={props.progressBarColor}
              onAnimationComplete={this.handlePBAnimationCompleted}
              duration={1000}
            />
          </div>
        </HeaderAnimated>
        <Content>{message}</Content>
      </div>
    )
  }
}

const Content = styled.div`
  color: #8c93a8;
  padding: 20px;
`

const HeaderAnimated = styled.div`
  color: ${props => (props.animate ? '#ffffff' : '#588ef1')};
  background-size: ${props => (props.animate ? '100% 100%' : '0% 0%')};
  background-image: ${props => `linear-gradient(${props.bg1},${props.bg2})`};
  background-repeat: no-repeat;
  background-position: 50% 100%;
  transition: background-size 0.5s ease-in, color 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const style = {
  box: {
    textAlign: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  headerContent: {
    padding: '20px 20px 8px',
  },
}

const progressStatePropTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  headerBg1: PropTypes.string.isRequired,
  headerBg2: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
}

ProgressCard.propTypes = {
  pct: PropTypes.number.isRequired,
  error: PropTypes.bool,
  progressBarColor: PropTypes.string.isRequired,
  loadingState: PropTypes.shape(progressStatePropTypes),
  successState: PropTypes.shape(progressStatePropTypes),
  errorState: PropTypes.shape(progressStatePropTypes),
}

ProgressBar.defaultProps = {
  pct: 0,
  error: false,
}
