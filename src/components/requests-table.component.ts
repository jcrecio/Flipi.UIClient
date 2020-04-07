Vue.component('requests-table', {
    props: ['requests'],
    template: `<div class="limiter">
    <div class="container-table100">
        <div class="wrap-table100">
            <div class="table">
                <div class="row header">
                    <div class="cell">
                        From
                    </div>
                    <div class="cell">
                        To
                    </div>
                    <div class="cell">
                        From date
                    </div>
                    <div class="cell">
                        To date
                    </div>
                    <div class="cell">
                        Min price
                    </div>
                    <div class="cell">
                        Max price
                    </div>
                    <div class="cell">
                        Hits
                    </div>
                </div>
                <div class="row" v-for="flightRequest in requests">
                    <div class="cell" data-title="From">
                        {{ flightRequest.from }}
                    </div>
                    <div class="cell" data-title="To">
                        {{ flightRequest.to }}
                    </div>
                    <div class="cell" data-title="Since">
                        {{ flightRequest.dateFrom }}
                    </div>
                    <div class="cell" data-title="To">
                        {{ flightRequest.dateTo }}
                    </div>
                    <div class="cell" data-title="MinPrice" style="text-align: center">
                        {{ flightRequest.minPrice }}
                    </div>
                    <div class="cell" data-title="MaxPrice" style="text-align: center">
                        {{ flightRequest.maxPrice }}
                    </div>
                    <div class="cell" data-title="Hits" style="text-align: center">
                        {{ flightRequest.hits }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`})