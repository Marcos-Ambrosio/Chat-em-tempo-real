import io from './server.js'

let messages = []

io.on("connect" , (socket)=>{
    console.log("Conectado no id :" +socket.id)

    socket.emit("previousMessages" , messages)

    socket.on("sendMessage" , data => {
        messages.push(data)
        socket.broadcast.emit("receivedMessage" , data)
    })
})
