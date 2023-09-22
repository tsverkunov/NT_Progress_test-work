import { PLACE_ORDER, serverMessageType, SUBSCRIBE_MARKET_DATA, UNSUBSCRIBE_MARKET_DATA } from './constants/config';

class WSConnector {
  constructor() {
    this.connection = undefined;
  }

  connect = (setRows) => {
    this.connection = new WebSocket('ws://localhost:3030');

    this.connection.onclose = () => {
      this.connection = undefined;
    };

    this.connection.onerror = () => {

    };

    this.connection.onopen = () => {

    };

    this.connection.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.messageType) {

        case serverMessageType.success:

          break;
        case serverMessageType.error:

          break;
        case serverMessageType.executionReport:

          break;
        case serverMessageType.marketDataUpdate:

          break;
        case serverMessageType.fakeDB:
          setRows(message.orders)
          break;
        default:
          return;
      }
    };
  };

  disconnect = () => {
    this.connection?.close();
  }

  send = (message) => {
    this.connection?.send(JSON.stringify(message));
  };

  subscribeMarketData = (instrument) => {
    this.send({
      messageType: SUBSCRIBE_MARKET_DATA,
      message: {
        instrument,
      },
    });
  };

  unsubscribeMarketData = (subscriptionId) => {
    this.send({
      messageType: UNSUBSCRIBE_MARKET_DATA,
      message: {
        subscriptionId,
      },
    });
  };

  placeOrder = (instrument, side, amount, price) => {
    this.send({
      messageType: PLACE_ORDER,
      message: {
        instrument,
        side,
        amount,
        price,
      },
    });
  };
}

export const ws = new WSConnector()
