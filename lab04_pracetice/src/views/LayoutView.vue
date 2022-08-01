<template>
  <div class="home" v-if="event">
    <p>id: {{ this.id }}</p>
    <p>name: {{ event.first_name }} {{ event.last_name }}</p>
    <router-link :to="{ name: 'EventDetails', params: { id: this.id } }">
      See Passenger Details
    </router-link>
    <router-link :to="{ name: 'AirlineDetails', params: { id: this.id } }">
      Airline Details
    </router-link>
  </div>
  <router-view :event="event" />
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
    EventService.getEventPass(this.id)
      .then((res) => {
        this.event = res.data
      })
      .catch((err) => {
        console.log(err)
        this.$router.push({
          name: '404Resource',
          params: { resource: this.id }
        })
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
