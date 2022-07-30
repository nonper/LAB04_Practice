<template>
  <div class="home">
    <router-link :to="{ name: 'EventDetails', params: { id: this.id } }">
      See Passenger Details
    </router-link>
    <router-link :to="{ name: 'AirlineDetails', params: { id: this.id } }">
      Airline Details
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventService from '@/services/EventService.js'

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
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
