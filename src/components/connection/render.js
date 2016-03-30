import React from 'react'

function render({state}) {
  return (
    <div>
      Connected: {state.isConnected.toString()}
    </div>
  )
}

render.propTypes = {
  state: React.PropTypes.object.isRequired
}

function create() {
  return {
    render
  }
}

export default {
  create
}
