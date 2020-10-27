<template>
    <div>
        <div class='container-fluid' v-bind:style="{ 'background-image': 'url(' + pictureOfTheDay.data.url + ')' }"> 
        <div class='container'>
             <div class="row pt-5">
                <div class="col-8">
                     <h2 class="d-inline pl-0">{{pictureOfTheDay.data.title}}</h2>
                     <input class='date-picker d-inline ml-5' v-model='date' type="date" @change="setDate">
                     <div class="col">
                         <p class="text-justify text-light ml-4 mt-5">{{pictureOfTheDay.data.explanation}}</p>
                     </div>
                </div>
                <div class="col-0">
                     
                </div>

            </div>
        </div>         
           
           
            
        </div>
        
       
        
       
    
        
    </div>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        data(){
            return {
                activeColor: 'red',
                date: '',
               
           }
        },
        methods:{
            setDate(){
                this.$store.dispatch('fetchApiData', this.date)
            }
        },
        computed:{
           ...mapState(['pictureOfTheDay']),
          
        },
        mounted(){
            this.$store.dispatch('fetchApiData')
        }
    }
</script>

<style scoped>

h1, h2, h3{
    color: white;
}


div{
    height: 100vh;
    background-size: cover;
}

</style>