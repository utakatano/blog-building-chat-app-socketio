const express = require('express')
const app = express()
const PORT = 4000

const socketIO = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`)
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected')
  })
})

app.get('/api', (_, res) => {
  res.json({
    message: 'Hello world'
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})