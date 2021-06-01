const app = Vue.createApp({
  data() {
    return {
      show: true,
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
    toggleShow() {
      this.show = !this.show;
    },
  },
});

app.mount('#app');
