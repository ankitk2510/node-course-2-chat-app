var socket = io();
socket.on('connect',() =>{
    console.log('connected to server');
   
    socket.emit('createMessage',{
        to: 'ankit',
        text: 'hey, thi is ankit'
    });
});
socket.on('disconnect',() =>{
    console.log('disconnected to server');
});
socket.on('newMessage', function (message){
    console.log('newMessage',message);
});