import React from 'react'
import { storiesOf } from '@storybook/react'
import IoIosCloudUploadOutline from 'react-icons/lib/io/ios-cloud-upload-outline'
import IoIosCloseOutline from 'react-icons/lib/io/ios-close-outline'
import IoIosCheckmarkOutline from 'react-icons/lib/io/ios-checkmark-outline'
import { ProgressCard } from './ProgressCard'

class ProgressCardWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pct: 0, error: false }
  }

  componentDidMount() {
    switch (this.props.type) {
      case 'success':
        setTimeout(() => this.setState({ pct: 100 }))
        break
      case 'error':
        setTimeout(() => this.setState({ pct: 75 }))
        setTimeout(() => this.setState({ error: true }), 1000)
        break
    }
  }

  render() {
    const loading = {
      Icon: IoIosCloudUploadOutline,
      title: 'upload.js',
      message: 'Uploading...',
      headerBg1: '#ffffff',
      headerBg2: '#ffffff',
      animate: false,
    }
    const success = {
      Icon: IoIosCheckmarkOutline,
      title: 'upload.js',
      message: 'Uploaded Successfully',
      headerBg1: '#AFE139',
      headerBg2: '#93C913',
      animate: true,
    }
    const error = {
      Icon: IoIosCloseOutline,
      title: 'Error Uploading',
      message: 'Try again',
      headerBg1: '#E93B48',
      headerBg2: '#D01422',
      animate: true,
    }

    return (
      <ProgressCard
        pct={this.state.pct}
        error={this.state.error}
        progressBarColor="#588EF1"
        loadingState={loading}
        successState={success}
        errorState={error}
      />
    )
  }
}

storiesOf('ProgressCard', module)
  .addDecorator(story => (
    <div
      style={{
        width: 300,
        padding: 50,
        background: '#24425E',
        fontFamily: '"Avenir Next", Helvetica, sans-serif',
      }}
    >
      {story()}
    </div>
  ))
  .add('success', () => <ProgressCardWrapper type="success" />)
  .add('error', () => <ProgressCardWrapper type="error" />)
