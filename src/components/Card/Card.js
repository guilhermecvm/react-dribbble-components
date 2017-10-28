import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../Flex/Flex'

export const Card = Flex.extend`
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
`

export const CardBackground = Flex.extend`
  position: relative;
  color: ${props => props.color};
  background-image: url('${props => props.img}');
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
  box-sizing: border-box;
  ${props => props.sepia && `filter: sepia(${props.sepia})`};
`
