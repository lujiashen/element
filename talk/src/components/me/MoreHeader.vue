<template>
    <mt-header title="更多信息" id="moreHeader">
        <router-link to="/me/info" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @media screen and (min-width:1024px) {
        #moreHeader {
            height: 100px;
        }
    }
    
</style>
