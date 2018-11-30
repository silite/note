<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'mmp'
      }
    },
    methods: {
      show () {
        console.log('调用了login的show')
      }
    }
  }
</script>

<style>

</style>