export const UNSUBSCRIBE_MARKET_DATA = 1;
export const SUBSCRIBE_MARKET_DATA = 2;
export const PLACE_ORDER = 3;

export const instrumentType = {
  eur_usd: 1,
  eur_rub: 2,
  usd_rub: 3,
}

export const serverMessageType = {
  success: 1,
  error: 2,
  executionReport: 3,
  marketDataUpdate: 4,
  fakeDB: 5
}
