function create(Rx, events) {
  const initialState = {
    isConnected: false
  }
  const stateSubject = new Rx.Subject()
  events.connect$.subscribe(function onConnect() {
    stateSubject.next(function onStateChange() {
      return {
        isConnected: true
      }
    })
  })
  events.disconnect$.subscribe(function onConnect() {
    stateSubject.next(function onStateChange() {
      return {
        isConnected: false
      }
    })
  })
  const state$ = stateSubject
    .startWith(initialState)
    .scan(function onScan(currentState, stateChanger) {
      return stateChanger(currentState)
    })
  return {
    state$
  }
}

export default {
  create
}
