import * as React from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'

interface P {
  visible: boolean,
  onClose: () => void
}

interface S {

}

class Modal extends React.Component<P, S> {
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
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="for-animation"
        unmountOnExit
      >
        <div>
          <div className="for-modal-mask"></div>
          <div className="for-modal-wrap">
            <div className="for-modal-body">
              this is content
              <button onClick={() => this.props.onClose()}>close</button>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Modal