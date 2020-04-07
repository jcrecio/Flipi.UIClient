interface IFlightRequest {
    from: string;
    to: string;
    dateFrom: string;
    dateTo: string;
    minPrice: number | undefined;
    maxPrice: number | undefined;
    hits: number;
}