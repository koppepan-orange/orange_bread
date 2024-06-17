const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatWindow.appendChild(messageElement);
});