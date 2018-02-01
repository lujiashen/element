<template>
    <ul class="list">
        <li > 
          <router-link to="/message/messageList">
            <div class="aa" >
                <img src="../../../static/photo/199.png" alt="">
                <p> 微信</p>
              </div>
          </router-link>
              
                
         
        </li>
        <li >
          <router-link to="/book/bookList">
            <div class="aa" >
               <img src="../../../static/photo/200.png" alt="">
              <p>通讯录</p>
            </div>
          </router-link>
            
           
          
        </li>
        <li >
          <router-link to="/share/shareList">
            <div class="aa">
                <img src="../../../static/photo/201.png" alt="">
                <p> 发现</p>
              </div>
          </router-link>
              
              
         
        </li>
        <li >
          <router-link to="/me/meList">
            <div class="aa">
                  <img src="../../../static/photo/202.png" alt="">
                <p> 我</p>
                </div>
          </router-link>
                
                
            
        </li>
      </ul> 
</template>

<script>
export default {
  data() {
      return {
         
      }
  },
  methods: {
   

  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  .router-link-active {
    background: rgb(233, 231, 231);
    color: skyblue
  }
  a {
    display: block;
    text-decoration: none;
    color: black; 
    display: flex;
    justify-content: center;
    align-items: center
  }
  .list {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgb(240, 239, 239);
    display: flex;
  }
  .list li {
    float: left;
    flex-grow: 1;
   ;
    height: 54px;
  }

  img {
    height: 30px;
  }
  .aa {
    text-align: center;
  }
  @media screen and (min-width:1024px){
      .list {
        height: 100px;
        font-size: 32px;
      }
      .list li a{
        height: 100px;
      }
  }
</style>
