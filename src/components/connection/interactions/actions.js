function create(events) {
  function connect() {
    events.connect$.onNext({})
  }

  function disconnect() {
    events.disconnect$.onNext({})
  }

  return {
    connect,
    disconnect
  }
}

export default {
  create
}
