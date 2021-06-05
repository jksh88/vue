const app = Vue.createApp({
  data() {
    return {
      show: true,
      title: 'The Final Emperor',
      author: 'Jane Wu',
      age: 48,
      x: 0,
      y: 0,
      cities: [
        { country: 'Korea', capital: 'Seoul', continent: 'Asia' },
        { country: 'US', capital: 'DC', continent: 'N America' },
        { country: 'Spain', capital: 'Madrid', continent: 'Europe' },
      ],
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
    handleEvent(evt, data) {
      if (data) {
        console.log(evt, evt.type);
        console.log(data);
      } else {
        console.log('nada');
      }
    },
    handleMouseMove(evt) {
      this.x = evt.offsetX;
      this.y = evt.offsetY;
    },
  },
});

app.mount('#app');
