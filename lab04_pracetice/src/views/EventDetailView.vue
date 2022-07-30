<template>
  <div class="event">
    <h1>Name: {{ event.name }}</h1>
    <p>ID: {{ event._id }}</p>
    <p>Trips: {{ event.trips }}</p>
    <div v-for="airline in event.airline" :key="airline.id">
      <p>Airline: {{ airline.name }}</p>
      <img :src="airline.logo" alt="" />
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEventsPass()
      .then((res) => {
        res.data.forEach((obj) => {
          obj.data.forEach((obj) => {
            if (obj._id == this.id) {
              this.event = obj
            }
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
