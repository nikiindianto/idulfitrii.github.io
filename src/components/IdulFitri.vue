<template>
  <div id="particles-js">
    <img 
    v-bind:style="style.moonImg"
    src="../assets/moon.svg">

    <h1 
    v-bind:style="style.eidCaption" 
    class="font-lobster color-gold"
    >Selamat Hari Raya Idul Fitri 1441H</h1>

    <h1 
    v-bind:style="style.eidDesc" 
    class="font-lobster color-gold"
    >Mohon Maaf Lahir dan Batin</h1>
  </div>
</template>

<script>
export default {
  name: 'IdulFitri',
  data: function () {
    return {
      style: {
        moonImg: {
          position: 'absolute',
          width: '20%',
          left: '50%',
          top: '20%',
          marginLeft: '-10%'
        },
        eidCaption: {
          position: 'absolute',
          textAlign: 'center',
          fontSize: '3vw',
          left: '10%',
          right: '10%',
          top: '60%'
        },
        eidDesc: {
          position: 'absolute',
          textAlign: 'center',
          fontSize: '2vw',
          left: '10%',
          right: '10%',
          top: '70%'
        }
      }
    }
  },
  computed: {
    getMousePos () {
      return this.$store.state.mousePos
    }
  },
  watch: {
    getMousePos: {
      deep: true,
      handler: function (position) {
        this.moveItems(position) 
      }
    }
  },
  methods: {
    moveItems (position) {
      const xval = (position.x - (window.innerWidth/2)) / window.innerWidth
      const yval = (position.y - (window.innerHeight/2)) / window.innerHeight

      this.style.moonImg.left = (50 + xval) + "%"
      this.style.moonImg.top = (20 + yval) + "%"

      this.style.eidCaption.left = (10 + xval) + "%"
      this.style.eidCaption.top = (60 + yval) + "%"

      this.style.eidDesc.left = (10 + xval) + "%"
      this.style.eidDesc.top = (70 + yval) + "%"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .font-lobster {
    font-family: Lobster;
  }

  .color-gold {
    color: #f1c40f;
  }
</style>
