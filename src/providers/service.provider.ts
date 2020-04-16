import { FlightsDataService } from "../dataservice/flights.data.service";

const serviceContainer = {};
const serviceProvider = {
    register(serviceKey, service){
        serviceContainer[serviceKey] = service;
    },
    get(serviceKey){
        return serviceContainer[serviceKey];
    }
}

const flightsDataService = new FlightsDataService();
serviceProvider.register('flightsDataService', flightsDataService);

export default serviceProvider;


// import { container } from 'inversify-props'
// import { IFlightsDataService } from "../dataservice/IFlights.data.service";
// import { container } from 'inversify-props'
// import { IFlightsDataService } from "../dataservice/IFlights.data.service";
// import { FlightsDataService } from "../dataservice/flights.data.service";

// export default function serviceProvider(): void {
//     container.addTransient<IFlightsDataService>(FlightsDataService);
// }