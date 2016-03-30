import Rx from 'rxjs'
import actionsFactory from './interaction/actions'
import eventsFactory from './interaction/events'
import render from './render'

function create() {
  const events = eventsFactory.create(Rx)
  const actions = actionsFactory.create(events)
  return {
    events,
    actions,
    render
  }
}

export default {
  create
}
