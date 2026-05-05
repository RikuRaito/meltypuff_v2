interface SquareCard {
  attach: (selector: string) => Promise<void>;
  tokenize: () => Promise<{
    status: string;
    token?: string;
    errors?: { message: string }[];
  }>;
  destroy: () => Promise<void>;
}

interface SquarePayments {
  card: () => Promise<SquareCard>;
}

interface SquareSDK {
  payments: (appId: string, locationId: string) => SquarePayments;
}

interface Window {
  Square?: SquareSDK;
}
