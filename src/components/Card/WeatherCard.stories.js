import React from 'react'
import { storiesOf } from '@storybook/react'
import IoIosRainyOutline from 'react-icons/lib/io/ios-rainy-outline'
import IoIosSunnyOutline from 'react-icons/lib/io/ios-sunny-outline'
import IoIosPartlySunnyOutline from 'react-icons/lib/io/ios-partlysunny-outline'
import IoIosThunderStormOutline from 'react-icons/lib/io/ios-thunderstorm-outline'
import { Card, CardBackground } from './Card'
import { Flex } from '../Flex/Flex'

const BackgroundDecorator = story => <div style={styles.story}>{story()}</div>

storiesOf('Card', module)
  .addDecorator(BackgroundDecorator)
  .add('WeatherCard', () => (
    <Card width={200}>
      <CardBackground
        img="https://s-i.huffpost.com/gen/3694354/images/n-AUTUMN-LEAVES-ROAD-200x150.jpg"
        color="#ffffff"
        height={125}
        padding={8}
        center
      >
        <div style={{ fontSize: 14, alignSelf: 'flex-start' }}>Dublin</div>
        <div style={{ fontSize: 32, margin: 'auto' }}>
          <IoIosRainyOutline size={96} />12°C
        </div>
      </CardBackground>
      <Flex
        direction="row"
        justify="space-between"
        pb={5}
        background="#F0E9DD"
        color="#6F5F5C"
      >
        <div style={styles.center}>
          <IoIosSunnyOutline size={44} />
          <span>FRI</span>
        </div>
        <div style={styles.center}>
          <IoIosPartlySunnyOutline size={44} />
          <span>SAT</span>
        </div>
        <div style={styles.center}>
          <IoIosThunderStormOutline size={44} />
          <span>SUN</span>
        </div>
      </Flex>
    </Card>
  ))

const styles = {
  story: {
    padding: 50,
    background: '#6F7078',
  },
  center: {
    textAlign: 'center',
  },
}
