<template>
    <div>
        <add-header></add-header>
        <div class="add">
            <div class="public"></div>
            <div class="back">
                <div class="work">
                    <div class="work-left">🔍</div>
                    <div class="work-right">
                        <input type="text" placeholder="微信号/手机号/QQ号" v-model="ipt">
                    </div>
                </div>
            </div>
        <div class="public">我的微信号：LJS0404</div>

        <div class="back">
                <div class="work">
                    <div class="work-left"><img src="../../../static/photo/311.jpg" style="height:30px" alt=""></div>
                    <div class="work-right">
                       <p style="height:100%">搜索：{{ipt}}</p>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AddHeader from "./AddHeader"
export default {
  components : {
      AddHeader
  },
  data() {
      return {
          ipt : ""
      }
  }
}
</script>

<style scoped>
    .public {
        width: 100%;
        height: 20px;
        background: #ccc;
        text-align: center;
    }
    .back {
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .work {
        height: 30px;
        margin: 0 10px;
        width: 100%;
        border-bottom: 1px solid green;
    }
    .work-left {
        height: 30px;
        width: 20%;
        float: left;
        text-align: center;
    }
    .work-right {
        height: 30px;
        width: 80%;
        float: left;
    }
    .work-right input {
        width: 100%;
        border: none;
        height: 30px;
        outline: none;
    }
   
</style>
