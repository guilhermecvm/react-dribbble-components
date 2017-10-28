import React from 'react'
import { storiesOf } from '@storybook/react'
import IoIosEmailOutline from 'react-icons/lib/io/ios-email-outline'
import IoIosHeartOutline from 'react-icons/lib/io/ios-heart-outline'
import IoIosPriceTagOutline from 'react-icons/lib/io/ios-pricetag-outline'
import IoIosPaperPlaneOutline from 'react-icons/lib/io/ios-paperplane-outline'
import IoIosTrashOutline from 'react-icons/lib/io/ios-trash-outline'
import {
  PrimaryButton,
  Secondary1Button,
  Secondary2Button,
  Secondary3Button,
  AccentButton,
} from './Button'

const CenterDecorator = story => <div style={styles.story}>{story()}</div>

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .add('buttons', () => [
    <div key="1" style={{ marginBottom: 20 }}>
      <PrimaryButton width={150} Icon={IoIosEmailOutline}>
        Email
      </PrimaryButton>
    </div>,
    <div key="2" style={{ marginBottom: 20 }}>
      <Secondary1Button width={150} Icon={IoIosHeartOutline}>
        Liked
      </Secondary1Button>
    </div>,
    <div key="3" style={{ marginBottom: 20 }}>
      <Secondary2Button width={150} Icon={IoIosPriceTagOutline}>
        Tagged
      </Secondary2Button>
    </div>,
    <div key="4" style={{ marginBottom: 20 }}>
      <Secondary3Button width={150} Icon={IoIosPaperPlaneOutline}>
        Sent
      </Secondary3Button>
    </div>,
    <div key="5" style={{ marginBottom: 20 }}>
      <AccentButton width={150} Icon={IoIosTrashOutline}>
        Trash
      </AccentButton>
    </div>,
  ])

const styles = {
  story: {
    textAlign: 'center',
  },
}
