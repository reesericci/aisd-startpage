const app = new Vue({
  el: '#app',
  data: {
    setup : false,
    settingsModal: false,
    sites: [
      {
        "name": "BLEND",
        "url": "https://aisdblend.instructure.com",
        "checked": true
      },
      {
        "name": "Portal",
        "url": "https://portal.austinisd.org",
        "checked": true
      }
    ]
  },
  methods: {
    save() {
      localStorage.sites = JSON.stringify(this.sites);
      console.log('saved')
    }
  },
  mounted() {
    if (localStorage.sites) {
    this.sites = JSON.parse(localStorage.sites)
    }
  },
  created() {
    if(this.setup === false) {
      
    }
  }
});

$('#settingsModal').modal('show')