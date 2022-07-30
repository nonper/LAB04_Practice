<template>
  <div class="event" v-if="event">
    <h3>{{ event.head_quaters }}</h3>
    <h1>Name: {{ event.name }}</h1>
    <p>ID: {{ event.id }}</p>
    <p>Website: {{ event.website }}</p>
    <img :src="event.logo" alt="" />
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
        res.data.forEach((data) => {
          data.data.forEach((airline) => {
            if (airline._id == this.id) {
              airline.airline.forEach((obj) => {
                this.event = obj
              })
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
