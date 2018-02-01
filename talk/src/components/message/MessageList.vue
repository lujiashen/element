<template>
<div>
    
    <div class="message">
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <ul class="list">
                    <li v-for="(item) in list" :key="item.title" >
                        <router-link :to=" '/message/chat/' + item.title ">
                                <div class="list-left">
                                    <img v-lazy="item.src" alt="">
                                </div>
                                <div class="list-right" >
                                    <p  class="right-one">{{item.title}}</p> 
                                    <p  class="right-two">我是聊天记录</p>
                                </div>    
                         </router-link>
                    </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus === 'loading'">
                    <img  src="../../../static/photo/loading.gif" style="height:30px;" alt="">
                    正在刷新...
                </span>
                <span v-show="topStatus === 'pull'">↓下拉可以刷新</span>
                <span v-show="topStatus === 'drop'">↑松开立即刷新</span>
            </div>
        </mt-loadmore>
            
    </div>
</div>
   
</template>


<script>

import Axios from "axios"
export default {
    data() {
        return {
            list : [],
            jia : "../../../static/photo/loading.gif",
            length : 0,
            arr : [],
            n: 0,
            topStatus: '',
            allLoaded : null,
            loadmore: null,
            timer: "xx",
            name
        }
    },
   
    mounted() {
        
        this.getMessage();
        window.onscroll=()=>{
            var clientHeight = document.documentElement.clientHeight;
            var oScrollTop=document.documentElement.scrollTop;
            var oScrollHeight = document.documentElement.scrollHeight;
            if(oScrollHeight==clientHeight+oScrollTop) {
                this.getMessage();
            }
        }
       
    },
    methods: {
       getMessage() {
            Axios.get("../../../static/People.json").then((res)=>{
                this.arr=res.data.data;
                let data=this.arr.slice(this.list.length,this.list.length+10);
                this.list=this.list.concat(data);
                // console.log("getMessage获取数据");

               this.$store.dispatch('setMessageList', res.data.data);
            }).catch()
       },
       handleTopChange(status) {
           this.topStatus=status;
        //    console.log(status);
           
       },
       loadTop() {
        //    console.log("执行loadTop");
            clearInterval(this.timer);
            this.timer=setTimeout(()=>{
                console.log(this.$refs.loadmore);
                this.$refs.loadmore.onTopLoaded();
            },1500)
             this.timer="xx";
           this.getMessage();
       },
   
    
    }
}
</script>

<style scoped>
    

    a {
        text-decoration: none;
        color: black;
       
    }
    ul {
        list-style: none;
    }
    .mint-loadmore-top {
        height: 50px;
    }
    .list li {
        width: 100%;
        height: 60px;
        border-bottom:1px solid #ccc;
    }
    .list-left,.list-right {
        /* width: 0; */
        height: 60px;
        float: left;
    }
    .list-left img {
        height: 50px;
    }
    .list li a {
        
        width: 100%;
       
        display: block;
    }
    .list-left {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .list-right {
        width: 70%;
        position: relative;
    }
    .right-one {
        position: absolute;
        bottom: 25px;
    }
    .right-two {
        position: absolute;
        bottom: 5px;
        color: #ccc;
    }
    
     @media screen and (min-width:768px) {
        .list li img {
            height: 100px;
        }
        .list li {
            height: 100px;
        }
        .list-left,.list-right {
            height: 100px;
        }
        .list-right p {
            font-size: 20px;
        }
        .right-one {
            bottom: 50px;
        }
        .right-two {
            bottom: 15px;
        }
    } 
    @media screen and (min-width:1024px) {
       .message {
           margin: 100px 0;
       }
        .list li img {
            height: 150px;
        }
        .list li {
            height: 150px;
        }
        .list-left,.list-right {
            height: 150px;
        }
        .list-right p {
            font-size: 32px;
        }
        .right-one {
            bottom: 80px;
        }
        .right-two {
            bottom: 20px;
        }
    } 
</style>
