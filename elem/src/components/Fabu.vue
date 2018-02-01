<template>
    <div>
       
            
        

            <router-view></router-view>
       
    </div>
</template>

<script>
import Hello from "@/components/Hello"
export default {
    componets : {
        Hello
    },
    data() {
        return {
            active : 0
        }
    }
   
}

</script>

<style scoped>

</style>

   
