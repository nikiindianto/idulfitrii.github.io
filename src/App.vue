<template>
  <div 
  id="app"
  class="hover"
  >
    <div v-if="isDesktop">
      <IdulFitri/>
      <vue-particles 
      color="#dedede"
      :particlesNumber="120"
      shapeType="star"
      >
      </vue-particles>
      <iframe 
      width="1"
      height="1" 
      src="https://www.youtube.com/embed/AlJfrwOvsYk?autoplay=1"
      wmode="transparent"
      frameborder="0" 
      allow="autoplay"
      allowfullscreen
      />
    </div>
    <div v-else>
      <h1
      style="color: white;"
      >Mohon maaf, hanya dapat dibuka melalui PC Desktop</h1>
    </div>
  </div>
</template>

<script>
import IdulFitri from './components/IdulFitri.vue'

export default {
  name: 'App',
  components: {
    IdulFitri
  },
  computed: {
    isDesktop () {
      return window.innerWidth > 800
    }
  },
  methods: {
    mouseMove (event) {
      const position = {
        x: event.clientX,
        y: event.clientY
      }
      this.$store.commit('setMousePos', position)
    }
  },
  created: function () {
    window.addEventListener('mousemove', this.mouseMove)
  }
}
</script>

<style>
  body {
    background-color: #192a56;
  }
</style>
