import React from 'react'
import { storiesOf } from '@storybook/react'
import IoIosPlay from 'react-icons/lib/io/ios-play'
import IoIosPause from 'react-icons/lib/io/ios-pause'
import IoIosFastForward from 'react-icons/lib/io/ios-fastforward'
import IoIosRewind from 'react-icons/lib/io/ios-rewind'
import IoIosVolume from 'react-icons/lib/io/volume-low'
import { Card, CardBackground } from './Card'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Flex } from '../Flex/Flex'

const BackgroundDecorator = story => <div style={styles.story}>{story()}</div>

storiesOf('Card', module)
  .addDecorator(BackgroundDecorator)
  .add('PlayerCard', () => (
    <Card width={400}>
      <CardBackground
        img="http://www.globalvillage-travel.com/images/phuket/phuketsightseeing.jpg"
        color="#ffffff"
        height={150}
        padding={8}
        center
        sepia={0.5}
      >
        <div style={{ fontSize: 14, alignSelf: 'flex-start' }}>
          Despacito - Luis Fonsi ft. Daddy Yankee
        </div>
      </CardBackground>
      <Flex
        direction="row"
        justify="space-between"
        background="#F0E9DD"
        color="#6F5F5C"
      >
        <Flex direction="row" justify="space-between" padding={10} width={120}>
          <IoIosRewind size={22} style={styles.icon} />
          <IoIosPlay size={22} style={styles.icon} color="E18F74" />
          <IoIosPause size={22} style={styles.icon} style={styles.pauseIcon} />
          <IoIosFastForward size={22} style={styles.icon} />
        </Flex>
        <Flex direction="row" padding={10} width={120} alignItems="center">
          <IoIosVolume size={22} />
          <Flex pl={5} width={95}>
            <ProgressBar pct={75} color="#E18F74" height={8} />
          </Flex>
        </Flex>
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
  pauseIcon: {
    marginLeft: '-5px',
  },
}
