pragma solidity ^0.4.4;

contract Hello {
  string private message;
  address private lastCaller;
  address private creator;

  function Hello() {
    creator = tx.origin;
    message = 'mundo';
  }

  function getMessage() constant returns(string) {
    return message;
  }

  function getLastCaller() constant returns(address) {
    return lastCaller;
  }

  function getCreator() constant returns(address) {
    return creator;
  }

  function setMessage(string newMessage) {
    message = newMessage;
    lastCaller = tx.origin;
  }
}
