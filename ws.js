import WebSocket from 'ws';

const wss = new WebSocket.Server({
  port: 3000,
});

wss.on('connection', (ws) => {
  ws.send('Welcome to the server, enjoy :)');

  ws.on('message', (data) => {
    let message;

    try {
      message = JSON.parse(data);
    } catch (e) {
      sendError(ws, 'Wrong format');

      return;
    }

    if (message.type === 'NEW_MESSAGE') {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }

  });
});

const sendError = (ws, message) => {
  const messageObject = {
    type: 'ERROR',
    payload: message,
  };

  ws.send(JSON.stringify(messageObject));
};