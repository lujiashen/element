<template>
    <div class="log">
        <p class="left">🎙</p>
        <p class="center"><input type="text" ref="ipt"></p>
        <p class="right"><img src="../../../static/photo/111.png" alt=""></p>
    </div>
</template>


<script>
export default {
    mounted() {
        this.$nextTick(()=> {
                // console.log(this.$refs.btn);
                console.log(this.$refs.ipt);
               this.$refs.ipt.focus();
            });
    }
}
</script>


<style scoped>
    .log {
        width: 100%;
        height: 54px;
        background: #ccc;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
    .log input {
        height: 54px;
        outline: none;
        width: 100%;
        border: none;
    }
    .log p {
        float: left;
    }
    .left {
       width: 20%;
       font-size: 40px;
       border: 1px solid #333;
       text-align: center;
    }
    .center {
        width: 60%;
    }
    .right {
      width: 20%;
      text-align: center;
      border: 1px solid #333;
    }
    .left img {
        height: 54px;
    }
   .right img {
        height: 54px;
    }
    @media screen and (min-width:1024px) {
        .log {
            height: 100px;
           
        }
        .log input {
            height: 100px;
        }
        .left {
             font-size: 60px;
             line-height: 100px;
        }
        .log img {
            height: 100px;
        }
    }
</style>
