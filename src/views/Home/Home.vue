<template>
  <div>
    welcome to {{$store.state.user}}
  </div>
</template>

<script lang="ts">
import {reactive,computed} from 'vue'


export default {
  name: 'home',
  data() {
    return {
      name: 'haichen'
    }
  },
  created() {
    console.log(this.$store.state.user);
  }
}
</script>

<style>

</style>
