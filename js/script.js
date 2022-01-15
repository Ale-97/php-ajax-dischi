Vue.config.devtools = true;

new Vue({
  el: `#app`,
  data: {
    discs: [],
    discsFiltred:[],
    filterString: "all",

  },
  created() {
    axios.get('http://localhost/PHP-AJAX-DISCHI/api/api.php')
      .then((database) => {
        this.discs = database.data;
      })
  },
  methods: {
    filtredAlbums(filtro) {
      return this.discs.filter((genere) => {
        if (filtro === "all") {
          //se si selezziona 'all' restituirà tutti i valori
          return true;
        }
        if (filtro === genere.genre) {
          //se la nostra selezione coincide con l'oggeto in esame ci restituirà quell'oggetto
          return true;
        }
        return false; //se nessuna condizione viene esaudita non restituirà nulla
      });

    },
    printout() {
      this.discsFiltred = this.filtredAlbums(this.filterString);
      let out = document.getElementById('aba');
      out.innerHTML = "";
      this.discsFiltred.forEach(element => {
        out.innerHTML += `
      <div class="col-2 ">
  
      <div class="container-img">
          <img src="${element.poster}" alt="">
      </div>
      <h4>${element.title}</h4>
      <div>${element.author}</div>
      <div>${element.year}</div>
  </div>
  `
      });



    }
  },
})