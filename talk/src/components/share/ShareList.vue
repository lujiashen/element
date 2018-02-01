<template>
    <div>
       
        <div class="share">
            <div class="public"></div>
            <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/307.jpg" alt="">
                </div>
                <div class="work-right">朋友圈</div>
            </div>
             <div class="public"></div>
              <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/306.jpg" alt="">
                </div>
                <div class="work-right">扫一扫</div>
            </div>
             <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/305.jpg" alt="">
                </div>
                <div class="work-right">摇一摇</div>
            </div>
            <div class="public"></div>
            <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/312.jpg" alt="">
                </div>
                <div class="work-right">看一看</div>
            </div>
            <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/311.jpg" alt="">
                </div>
                <div class="work-right">搜一搜</div>
            </div>
            <div class="public"></div>
            <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/308.jpg" alt="">
                </div>
                <div class="work-right">购物</div>
            </div>
            <div class="work">
                <div class="work-left">
                    <img src="../../../static/photo/310.jpg" alt="">
                </div>
                <div class="work-right">游戏</div>
            </div>
        </div>
    </div>
  
</template>


<script>
export default {

}
</script>

<style scoped>
   
    .public {
        width: 100%;
        height: 20px;
        background: rgb(224, 220, 220);
    }
    .work {
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
    }
     .work-left,.work-right {
        float: left;
        display: flex;

    }
    .work-left {
        height: 59px;
        align-items: center;
        justify-content: center;
    }
    .work-left img {
        height: 50px;
    }
    .work-right {
        height: 59px;
        line-height: 60px;
        text-indent: 10px;
    }
    @media screen and (min-width:1024px) {
        .share {
            margin: 100px 0;
            font-size: 32px;
        }
        .public {
            height: 30px;
        }
        .work {
            height: 100px;
        }
        .work-left {
            height: 100px;
        }
        .work-left img {
            height: 100px;
        }
        .work-right {
            height: 100px;
            line-height: 100px;
            text-indent: 20px;
        }
    }
</style>
