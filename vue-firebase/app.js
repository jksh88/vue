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
        {
          country: 'Korea',
          capital: 'Seoul',
          continent: 'Asia',
          website: 'https://www.seoul.go.kr',
          isFar: true,
        },
        {
          country: 'US',
          capital: 'DC',
          continent: 'N America',
          website: 'https://www.dc.gov',
          isFar: false,
        },
        {
          country: 'Spain',
          capital: 'Madrid',
          continent: 'Europe',
          website: 'https://www.esmadrid.com/',
          isFar: true,
        },
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
    toggleFar(city) {
      city.isFar = !city.isFar;
    },
    handleQlik() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
  },
  computed: {
    filteredCities() {
      return this.cities.filter((city) => city.isFar);
    },
  },
});

app.mount('#app');
