const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Emperor',
      author: 'Jane Wu',
      age: 48,
    };
  },
  methods: {
    changeTitle(title) {
      console.log('clicked');
      this.title = title;
    },
  },
});

app.mount('#app');
