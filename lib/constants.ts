export interface Flight {
  id: number;
  from: string;
  to: string;
  airline: string;
  price: { currencyCode: string; amount: number };
  stops: number;
  departureTime: `${number}:${number}`;
  arrivalTime: `${number}:${number}`;
  duration: `${number}:${number}`;
}

export const FLIGHTS: Flight[] = [
  {
    id: 0,
    from: "JFK",
    to: "BOM",
    airline: "emirates",
    price: { currencyCode: "USD", amount: 1572 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 1,
    from: "JFK",
    to: "BOM",
    airline: "qatar",
    price: { currencyCode: "USD", amount: 2072 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 2,
    from: "JFK",
    to: "BOM",
    airline: "lufthansa",
    price: { currencyCode: "USD", amount: 1872 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 3,
    from: "JFK",
    to: "BOM",
    airline: "emirates",
    price: { currencyCode: "USD", amount: 1872 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
];

export const CURRENCY_CODES_TO_SYMBOL: Record<string, string> = {
  USD: "$",
};

export const humanizeTimeDuration = (duration: string) => {
  const [hours, minutes] = duration.split(":");
  return `${hours}H ${minutes}M`;
};
