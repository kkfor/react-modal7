import * as React from 'react';
import Modal from '../../src'

interface P {
}

interface S {
  visible: boolean
}


class App extends React.Component<P, S> {
  constructor(props) {
    super(props)

    this.state= {
      visible: false
    }
  }

  open() {
    this.setState({
      visible: true
    })
  }

  close() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <button onClick={() => this.open()}>打开</button>
        <Modal visible={visible} onClose={() => this.close()}>this is content</Modal>
      </div>
    );
  }
}

export default App;
