<template>
    <div>
       
        <div class="me">
            <div class="list1" @click="clickPhoto">
                <div class="list-left1">
                    <img src="../../../static/photo/head.jpg" alt="">
                </div>
                <div class="list-right1">
                        Mr.Lu             
                </div>
            </div>

            <div class="list">
                <div class="list-left">
                    <img src="../../../static/photo/121.png" alt="">
                </div>
                <div class="list-right">钱包</div>
            </div>

            <div class="list" style="border-bottom:1px solid #ccc">
                <div class="list-left">
                    <img src="../../../static/photo/117.png" alt="">
                </div>
                <div class="list-right">收藏</div>
            </div>

            <div class="list2">
                <div class="list-left">
                    <img src="../../../static/photo/118.png" alt="">
                </div>
                <div class="list-right">相册</div>
            </div>

            <div class="list2">
                <div class="list-left">
                    <img src="../../../static/photo/119.png" alt="">
                </div>
                <div class="list-right">卡包</div>
            </div>

            <div class="list">
                <div class="list-left">
                    <img src="../../../static/photo/121.png" alt="">
                </div>
                <div class="list-right">设置</div>
            </div>


        </div>

         

        
    </div>
</template>


<script>

export default {
    
    methods : {
        clickPhoto() {
            this.$router.push("/me/info");
        }
    }
}
</script>

<style scoped>
   
    .me {
        margin: 54px 0 0 0;
        background: #ccc;
        overflow: hidden;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .list1 {
         background: #fff;
        width: 100%;
        height: 80px;
       margin-top: 20px;
    }
    .list-left1,.list-right1 {
        float: left;
        display: flex;

    }
    .list-left1 {
        height: 80px;
        align-items: center;
        justify-content: center;
    }
    .list-left1 img {
        height: 60px;
        border: 1px solid #333;
    }
    .list-right1 {
        height: 80px;
        line-height: 80px;
        text-indent: 10px;
    }
    .list {
        background: #fff;
        width: 100%;
        height: 50px;
       margin-top: 20px;
    }
    .list2 {
         background: #fff;
        width: 100%;
        height: 50px;
       border-bottom:1px solid #ccc; 
    }
    .list-left,.list-right {
        float: left;
        display: flex;

    }
    .list-left {
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    .list-left img {
        height: 40px;
    }
    .list-right {
        height: 50px;
        line-height: 50px;
        text-indent: 10px;
    }
    @media screen and (min-width: 1024px){
        .me {
            margin: 100px 0;
            font-size: 32px;
           
        }
        .list,.list1,.list2 {
            height: 100px;
        }
        .list-left1  {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .list-left1 img {
            height: 98px;
        }
         .list-right1 {
            height: 100px;
        }
        .list-left {
            height: 100px; 
        }
        .list-left img {
            height: 100px;
        }
        .list-right {
            height: 100px;
            line-height: 100px;
        }
    }
</style>
