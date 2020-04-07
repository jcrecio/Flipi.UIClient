let app: any;
window.addEventListener('load', function () {
    const flightsDataService = new FlightsDataService();
    app = new Vue({
        el: '#app',
        data: {
            title: 'flipi',
            flightRequests: flightsDataService.getFlightRequests()
        }
    });
})