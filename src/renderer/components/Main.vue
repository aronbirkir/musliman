<template>
  <div id="wrapper">
    <div id="manager" class="columns is-gapless is-mobile">
      <div class="column is-narrow">
        <span>
          <navigator></navigator>
        </span>
      </div>
      <div class="column">
        <trackgrid></trackgrid>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from './Navigator.vue'
import TrackGrid from './TrackGrid.vue'
export default {
  data () {
    return {
      count: 0
    }
  },
  components: {
    navigator: Navigator,
    trackgrid: TrackGrid
  }
}
</script>

<style scoped>
#wrapper {
  height: 100%;
}

#manager {
  height : 100%
}
</style>


