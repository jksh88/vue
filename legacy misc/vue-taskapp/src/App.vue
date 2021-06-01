<template>
  <div class="container">
    <Header title="Title to Come" />
    <h1>App page</h1>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: { Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
