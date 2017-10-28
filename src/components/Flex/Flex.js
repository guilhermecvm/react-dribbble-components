import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  ${props => props.justify && `justify-content: ${props.justify}`};
  ${props => props.width && `width: ${props.width}px`};
  ${props => props.height && `height: ${props.height}px`};
  ${props => props.padding && `padding: ${props.padding}px`};
  ${props => props.pt && `padding-top: ${props.pt}px`};
  ${props => props.pr && `padding-right: ${props.pr}px`};
  ${props => props.pb && `padding-bottom: ${props.pb}px`};
  ${props => props.pl && `padding-left: ${props.pl}px`};
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => props.background && `background: ${props.background}`};
  ${props => props.color && `color: ${props.color}`};
`

Flex.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  alignItems: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
}

Flex.defaultProps = {
  direction: 'column',
}
