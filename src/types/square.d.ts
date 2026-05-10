interface SquareCard {
  attach: (selector: string) => Promise<void>;
  tokenize: () => Promise<{
    status: string;
    token?: string;
    errors?: { message: string }[];
  }>;
  destroy: () => Promise<void>;
}

interface SquarePaymentRequest {
  countryCode: string;
  currencyCode: string;
  total: { amount: string; label: string };
}

interface SquareApplePayTokenizeEvent {
  detail: { token: string };
}

interface SquareApplePay {
  attach: (selector: string) => Promise<void>;
  tokenize: () => Promise<{
    status: string;
    token?: string;
    errors?: { message: string }[];
  }>;
  addEventListener: (
    event: "ontokenize",
    handler: (event: SquareApplePayTokenizeEvent) => void,
  ) => void;
}

interface SquarePayments {
  card: () => Promise<SquareCard>;
  paymentRequest: (request: SquarePaymentRequest) => SquarePaymentRequest;
  applePay: (paymentRequest: SquarePaymentRequest) => Promise<SquareApplePay>;
}

interface SquareSDK {
  payments: (appId: string, locationId: string) => SquarePayments;
}

interface Window {
  Square?: SquareSDK;
}
