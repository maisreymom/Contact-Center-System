import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
//import launcherIcon from '../../../public/logo-no-bg.svg';
//import launcherIconActive from '../assets/close-icon.png';

class Launcher extends Component {

    constructor() {
        super();
        this.state = {
            launcherIcon: '/logo-no-bg.svg',
            isOpen: false,
        };
    }

    handleClick() {
        if (this.props.handleClick !== undefined) {
            this.props.handleClick();
        } else {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }
    }

    componentDidMount()
    {
        console.log(Meteor.userId());
    }

  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    return (
      <div>
        <div>
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null }
  return (
    <div className={"sc-new-messsages-count"}>
      {props.count}
    </div>
  )
}

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),

};

Launcher.defaultProps = {
  newMessagesCount: 0
}

export default Launcher;
