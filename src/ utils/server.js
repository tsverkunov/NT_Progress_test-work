// import WS from "jest-websocket-mock";
//
// // create a WS instance, listening on port 1234 on localhost
// const server = new WS("ws://localhost:1234");
//
// // real clients can connect
// // const client = new WebSocket("ws://localhost:1234");
// await server.connected;
//
// // export default client

import { Server } from 'mock-socket';
import { serverMessageType } from './constants/config';

let fakeDB = {
  messageType: serverMessageType.fakeDB,
  orders:
    [
      {
        ID: 0,
        CreationTime: '2023-03-10 16:26:53.354',
        ChangeTime: '2023-03-10 16:26:53.354',
        Status: 'Active',
        Side: 'Buy',
        Price: 8.555,
        Amount: '777.00',
        Instrument: 'USD/EUR',
      },
      {
        ID: 1,
        CreationTime: '2023-03-10 16:26:53.354',
        ChangeTime: '2023-03-10 16:26:53.354',
        Status: 'Rejected',
        Side: 'Sell',
        Price: 8.333,
        Amount: '77.00',
        Instrument: 'USD/RUB',
      },
    ],
};

// const item = {
//   ID: 1,
//   CreationTime: '2023-03-10 16:26:53.354',
//   ChangeTime: '2023-03-10 16:26:53.354',
//   Status: 'Rejected',
//   Side: 'Sell',
//   Price: 8.333,
//   Amount: '77.00',
//   Instrument: 'USD/RUB',
// };

export const startServer = () => {
  const server = new Server('ws://localhost:3030');
  server.on('connection', socket => {
    console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');

    // setInterval(() => {
    //   fakeDB = {
    //     ...fakeDB,
    //     orders: [...fakeDB.orders, {...item, ...item.ID += 1}],
    //   };
    //   console.log(fakeDB);
    //   socket.send(JSON.stringify(fakeDB));
    // }, 1000);

    socket.send(JSON.stringify(fakeDB));

    socket.on('message', data => {
      data = JSON.parse(data)
      console.log('data :', data);
      switch (data.messageType) {
        case serverMessageType.executionReport:
          socket.send(JSON.stringify(data));
          break;
        default:
      }
      // console.log('server: ', JSON.parse(data));
      // data = JSON.parse(data);
      // data = JSON.stringify({ ...data, size: 123 });
      // socket.send(data);
    });
  });
};
