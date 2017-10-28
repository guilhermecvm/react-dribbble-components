import React from 'react'
import { configure, addDecorator } from '@storybook/react'

const req = require.context('../src/components', true, /\.stories\.js$/)

const styles = {
  fontFamily: '"Avenir Next", Helvetica, sans-serif',
}
const FontDecorator = story => <div style={styles}>{story()}</div>

addDecorator(FontDecorator)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
