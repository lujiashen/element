<template>
    
       <div>
            <chat-header class="head"></chat-header>
            <chat-footer ></chat-footer>
       </div>
    
</template>

<script>
import ChatHeader from "../../components/chat/ChatHeader"
import ChatFooter from "../../components/chat/ChatFooter"
export default {
  components: {
     ChatHeader ,
     ChatFooter

  }
}
</script>

<style scoped>
.mint-header {
        height: 54px;
    }
    .head {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>
