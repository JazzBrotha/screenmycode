<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <v-btn color="success" v-on:click="getExamples">
    test
  </v-btn>
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
    const test = await AuthenticationService.getTestData();
    // const test = await AuthenticationService.register({
    //   email: 'test@test.se',
    //   password: '123124'
    // });
    console.log(test);
  }
}
</script>
