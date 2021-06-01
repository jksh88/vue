<template>
  <header>
    <h1>Header page</h1>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
// import { Header } from '@vue/composition-api';

export default {
  name: Header,
  props: { title: String },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
