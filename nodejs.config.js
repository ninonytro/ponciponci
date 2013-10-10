settings = {
  scheme: 'http',
  port: 8080,
  host: '',
  resource: '/socket.io',
  serviceKey: 'poncivideografi',
  backend: {
    host: 'videografi.tv',
    port: 80,
    scheme: 'http',
    messagePath: '/nodejs/message'
  },
  transports: ['xhr-polling'],
  debug: true
};
