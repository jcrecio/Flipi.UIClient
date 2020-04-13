import { IFlightsDataService } from './IFlights.data.service';
import { IFlightRequest } from '../entities/IFlightRequest';
import { IFlight } from '../entities/IFlight';

export class FlightsDataService implements IFlightsDataService {
    getFlightRequests(): IFlightRequest[] {
        return <IFlightRequest[]>[
            {
                requestId: '1',
                from: 'AMS',
                to: 'MAD',
                dateFrom: new Date('06/21/2020').toLocaleDateString(),
                dateTo: new Date('11/23/2020').toLocaleDateString(),
                maxPrice: 500,
                hits: 6
            },
            {
                requestId: '2',
                from: 'NYW',
                to: 'YIA',
                dateFrom: new Date('03/07/2020').toLocaleDateString(),
                dateTo: new Date('10/14/2020').toLocaleDateString(),
                minPrice: 75,
                maxPrice: 900,
                hits: 1150
            },
            {
                requestId: '3',
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            },
            {
                requestId: '4',
                from: 'AMS',
                to: 'MAD',
                dateFrom: new Date('04/05/2020').toLocaleDateString(),
                dateTo: new Date('07/07/2020').toLocaleDateString(),
                maxPrice: 340,
                hits: 0
            },
            {
                requestId: '5',
                from: 'BCN',
                to: 'LIS',
                dateFrom: new Date('04/15/2020').toLocaleDateString(),
                dateTo: new Date('12/06/2020').toLocaleDateString(),
                hits: 320
            }
        ];
    }
    getFlights(): IFlight[] {
        return <IFlight[]>[
            {
                reference: 'UX1094',
                requestId: '1',
                from: 'AMS',
                to: 'MAD',
                date: new Date('06/15/2020').toLocaleDateString(),
                price: 45
            },
            {
                reference: 'UX1094',
                requestId: '1',
                from: 'AMS',
                to: 'MAD',
                date: new Date('07/14/2020').toLocaleDateString(),
                price: 67
            },
            {
                reference: 'UX1094',
                requestId: '1',
                from: 'AMS',
                to: 'MAD',
                date: new Date('07/16/2020').toLocaleDateString(),
                price: 103
            },
            {
                reference: 'UX1094',
                requestId: '2',
                from: 'NYW',
                to: 'YIA',
                date: new Date('06/07/2020').toLocaleDateString(),
                price: 320
            },
            {
                reference: 'UX1094',
                requestId: '2',
                from: 'NYW',
                to: 'YIA',
                date: new Date('12/07/2020').toLocaleDateString(),
                price: 540
            }
        ];
    }
}