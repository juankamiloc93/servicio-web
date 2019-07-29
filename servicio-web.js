const app = new Vue({
    el: '#app',
    data: {        
        nombre: '',
        dominio: '',
        codigoLlamada: '',
        capital: '',
        region: '',
        subregion: '',
        poblacion: '',
        zonaHoraria: '',
        iso: ''
    },
    methods: {        
        async getPais(iso){
            console.log('iniciando busqueda');
            try{
                let pais = await axios.get("https://restcountries.eu/rest/v2/alpha/" + iso);           
                this.nombre = pais.data.name;
                this.dominio = pais.data.topLevelDomain;
                this.codigoLlamada = pais.data.callingCodes;
                this.capital = pais.data.capital;
                this.region = pais.data.region;
                this.subregion = pais.data.subregion;
                this.poblacion = pais.data.population;
                this.zonaHoraria = pais.data.timezones;              
            }catch (error){
              console.log(error);
            }            
        }                
    },
    computed: {        
    } 
});