<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">click</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your component'
      }
    },
    props: ['msgFromFather'],
    methods: {
      onClickMe: function () {
        console.log(this.msgFromFather)
        this.$emit('child-tell-me', this.msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
