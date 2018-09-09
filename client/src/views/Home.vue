<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <button v-on:click="getExamples">
    test
  </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public async getExamples() {
    const test = await axios.get('/api/examples');
    console.log(test);
  }
}
</script>
