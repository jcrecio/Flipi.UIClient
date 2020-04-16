import { IFlightRequest } from '../entities/IFlightRequest';
import { IFlight } from '../entities/IFlight';

export interface IFlightsDataService {
    getFlightRequests(): IFlightRequest[];
    getFlights(id: String): IFlight[];
}