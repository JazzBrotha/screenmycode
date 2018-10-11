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
import HelloWorld from '@/components/HelloWorld.vue';
import AuthenticationService from '../services/AuthenticationService';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public async getExamples() {
    const test = await AuthenticationService.runOrca();
    // const test = await AuthenticationService.register({
    //   email: 'test@test.se',
    //   password: '123124'
    // });
    console.log(test);
  }
}
</script>
