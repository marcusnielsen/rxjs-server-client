import React from 'react'

function create(actions) {
  function render({state}) {
    return (
      <div>
        <div>Connected: {state.isConnected.toString()}</div>
        <button onClick={() => actions.connect()}>Connect</button>
        <button onClick={() => actions.disconnect()}>Disconnect</button>
      </div>
    )
  }

  render.propTypes = {
    state: React.PropTypes.object.isRequired
  }

  return {
    render
  }
}

export default {
  create
}
