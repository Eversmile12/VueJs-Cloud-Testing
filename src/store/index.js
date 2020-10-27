import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictureOfTheDay:{

    },
    date: ''
  },
  mutations: {
    setPicOfTheDay: (state, payload) =>{
      console.log('set pic of day');
      console.log(payload);
      state.pictureOfTheDay = payload
    },
    setDate:(state, payload) => {
      console.log('index.js/setDate on route');
      console.log(payload);
      state.date = payload;
    }
  },
  actions: {
    async fetchApiData(state, payload){
      let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
      if(payload !== undefined){
        console.log('date is not undefined')
        this.commit('setDate', payload)
        url += '&date=' + this.state.date
      }
      try{        
        let pictureOfTheDay = await Vue.axios.get(url)
        .then((res) => {return res})
        .catch((error) => {
          console.log(error.response.data);
          // if(error.response.data !== undefined){
          //   console.log('404');

          //   this.dispatch('fetchApiData', getYesterdayDate())
          //   return
          // }
        });
        console.log(pictureOfTheDay);
        this.commit('setPicOfTheDay', pictureOfTheDay)
      }catch(err){
        console.log("error"+err)
        }
     
    }
  },
  modules: {
  }
})

// function getYesterdayDate(){
//   var date = new Date();
//   var month = date.getMonth;
//   var day = date.getDate;
//   var year = date.getFullYear;
  
//   if(month.length < 2){
//     month = '0' + month;
//   }
//   if(day.length < 2){
//     day = '0' + day
//   }

//   console.log([year,month,day].join('-'));

// }