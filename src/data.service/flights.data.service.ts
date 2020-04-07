class FlightsDataService implements IFlightsDataService {
    getFlightRequests(): IFlightRequest[] {
        return <IFlightRequest[]>[
            {
                from: 'AMS',
                to: 'MAD',
                dateFrom: new Date('06/21/2020').toLocaleDateString(),
                dateTo: new Date('11/23/2020').toLocaleDateString(),
                maxPrice: 500,
                hits: 6
            },
            {
                from: 'NYW',
                to: 'YIA',
                dateFrom: new Date('03/07/2020').toLocaleDateString(),
                dateTo: new Date('10/14/2020').toLocaleDateString(),
                minPrice: 75,
                maxPrice: 900,
                hits: 1150
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'AMS',
                to: 'MAD',
                dateFrom: new Date('04/05/2020').toLocaleDateString(),
                dateTo: new Date('07/07/2020').toLocaleDateString(),
                maxPrice: 340,
                hits: 0
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
        ];
    }
    getFlights(): IFlight[] {
        throw new Error("Method not implemented.");
    }
}