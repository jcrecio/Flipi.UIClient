<template>
  <div>
    <slot></slot>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { FlightsDataService } from "../dataservice/flights.data.service";
 
@Component({ name: "serviceProvider" })
export default class serviceProvider extends Vue {
  @Provide()
  flightsDataService: FlightsDataService = new FlightsDataService();
}
</script>