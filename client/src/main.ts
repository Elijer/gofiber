const socket = new WebSocket('ws://localhost:8087/ws');

socket.onopen = () => {
    console.log('Connected to the server');
    socket.send('Hello Server!');
};

socket.onmessage = (event: MessageEvent) => {
    console.log('Message from server:', event.data);
};

socket.onclose = (event: CloseEvent) => {
    console.log('Disconnected from the server');
};

socket.onerror = (error: Event) => {
    console.error('WebSocket error:', error);
};