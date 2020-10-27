<template>
  <div class="home">
    <daily-picture></daily-picture>
  </div>
</template>

<script>
// @ is an alias to /src
import DailyPicture from '../components/DailyPicture.vue'

export default {
  name: 'Home',
  components: {
    DailyPicture
  }
}
</script>
