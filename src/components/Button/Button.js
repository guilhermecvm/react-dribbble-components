import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  border: 0;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  font-size: 14px;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.75);
  ${props => props.width && `width: ${props.width}px`};
  ${props => props.background && `background-color: ${props.background}`};
`

const Button2 = ({ Icon, ...props }) => (
  <Button {...props}>
    <Icon size={32} style={styles.icon} /> {props.children}
  </Button>
)

export const PrimaryButton = props => (
  <Button2 background="#6f5f5c" {...props} />
)

export const Secondary1Button = props => (
  <Button2 background="#815D5C" {...props} />
)
export const Secondary2Button = props => (
  <Button2 background="#A16B62" {...props} />
)
export const Secondary3Button = props => (
  <Button2 background="#E18F74" {...props} />
)
export const AccentButton = props => <Button2 background="#EFB175" {...props} />

const styles = {
  icon: {
    marginRight: 10,
  },
}
