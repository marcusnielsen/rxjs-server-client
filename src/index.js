import React from 'react'
import ReactDom from 'react-dom'
import Rx from 'rxjs'
import connectionFactory from './components/connection'
import io from 'socket.io-client'

function create() {
  const connection = connectionFactory.create()
  const ConnectionElement = connection.render
  Rx.Observable.of('')
    .startWith('')
    .map(() => <ConnectionElement state={{isConnected: true}} />)
    .subscribe((app) => {
      ReactDom.render(app, document.querySelector('[data-app]'))
    })
  const socket = io('http://0.0.0.0:8888/')
  socket.on('connect', function onConnect() {

  })
}

create()
