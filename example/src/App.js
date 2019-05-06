import React, { Component } from 'react';
import Modal from '../../src'

class App extends Component {
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
