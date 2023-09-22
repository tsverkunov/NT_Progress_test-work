import { render, screen } from '@testing-library/react';
import App from './App';
import { ws } from './ utils/WSConnector';
import WS from 'jest-websocket-mock';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('WebSocket test', () => {
//
//
//   test('Checked fn', async () => {
//     await fakeApi.connect();
//     const client = new WebSocket('ws://localhost:5000');
//
//     client.send('hello');
//     await expect(fakeApi).toReceiveMessage('hello');
//   });
// })

// test("the mock server seamlessly handles JSON protocols", async () => {
//   const server = new WS("ws://localhost:1234", { jsonProtocol: true });
//   const client = new WebSocket("ws://localhost:1234");
//
//   await server.connected;
//   client.send(`{ "type": "GREETING", "payload": "hello" }`);
//   await expect(server).toReceiveMessage({ type: "GREETING", payload: "hello" });
//   expect(server).toHaveReceivedMessages([
//     { type: "GREETING", payload: "hello" },
//   ]);
//
//   let message = null;
//   client.onmessage = (e) => {
//     message = e.data;
//   };
//
//   server.send({ type: "CHITCHAT", payload: "Nice weather today" });
//
//   server.close()
//   client.close()
//
//   expect(message).toEqual(`{"type":"CHITCHAT","payload":"Nice weather today"}`);
// });