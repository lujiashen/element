<template>
  <div class="hello">
     
      <common-header></common-header>

      <router-view></router-view>

      <common-footer></common-footer>

      
  </div>
    
   
      
</template>

<script>
import CommonHeader from "./Header"
import CommonFooter from "./Footer"
export default {
  components: {
      CommonHeader ,
      CommonFooter 
  },
  data () {
    return {
    
    }
  },
  methods: {
    
  }
}
</script>


<style scoped>

  * {
    padding:0;
    margin: 0;
  }

</style>
