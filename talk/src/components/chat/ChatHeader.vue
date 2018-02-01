<template>
    <mt-header :title="text" id="chatHead">
        <router-link to="/message/messageList" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
export default {
    data() {
        return {
            text : "聊天"
        }
    },
    mounted() {
        this.text=this.$route.params.name;
    }
}
</script>

<style scoped>
    .mint-header {

        height: 54px;
    }
    @media screen and (min-width:1024px) {
        #chatHead {
             font-size: 20px;
            height: 100px;
        }
    }
</style>
