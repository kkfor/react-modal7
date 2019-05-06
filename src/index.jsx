import React, { Component } from 'react'
import './index.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  static defaultProps = {

  }

  render() {
    const { visible } = this.props

    return (
      visible && <div>
        <div className="for-modal-mask"></div>
        <div className="for-modal-wrap">
          <div className="for-modal-body">
            this is content
            <button onClick={() => this.props.onClose()}>close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal