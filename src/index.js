import ReactDom from 'react-dom'
import Rx from 'rxjs'
import connectionFactory from './components/connection'
import io from 'socket.io-client'
import React from 'react'

const ConnectionElement = connectionFactory.create().render

Rx.Observable.of('')
  .startWith('')
  .map(() => <ConnectionElement />).subscribe((app) => {
    ReactDom.render(app, document.querySelector('[data-app]'))
  })

const socket = io('http://0.0.0.0:8888/')
socket.on('connect', function onConnect() {

})

/*
document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.querySelector('[data-app-title]')
  titleElement.text = 'hello world'
  const appElement = document.querySelector('[data-app]')
  const newDiv = document.createElement('div')
  const newContent = document.createTextNode('Socket connected!')
  newDiv.appendChild(newContent)
  const socket = io('http://0.0.0.0:8888/')
  socket.on('connect', function onConnect() {
    socket.on('event$', function onMessage(data) {
      const newEventDiv = document.createElement('div')
      const newEventContent = document.createTextNode(JSON.stringify(data))
      newEventDiv.appendChild(newEventContent)
      appElement.appendChild(newEventDiv)
    })
    appElement.appendChild(newDiv)
    socket.emit('message', {
      header: {
        namespace: 'user',
        action: 'login'
      },
      body: {
        name: 'Marcus'
      }
    })

    socket.emit('message', {
      header: {
        namespace: 'chat',
        action: 'write'
      },
      body: {
        val: 'Hello world!'
      }
    })

    socket.emit('message', {
      header: {
        namespace: 'user',
        action: 'logout'
      },
      body: {
        name: 'Marcus'
      }
    })
  })
})
*/
