<template>
  <div class="wrapper" v-bind:class="{ 'form-success': islogin }">
    <div class="container">
      <h1>{{msg}}</h1>
      <transition name="fade">
        <form class="form" v-if="!islogin">
          <input type="text" placeholder="Username" v-model="name">
          <input type="password" placeholder="Password" v-model="password" @keyup.enter="login" ref="password">
          <button type="button" id="login-button" @click="login" >Login</button>
        </form>
      </transition>
    </div>

    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style lang='less'>

@prim: #53e3a6;

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-weight: 300;
}

body{
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;

  ::-webkit-input-placeholder { /* WebKit browsers */
    font-family: 'Source Sans Pro', sans-serif;
    color:    white;
    font-weight: 300;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-family: 'Source Sans Pro', sans-serif;
    color:    white;
    opacity:  1;
    font-weight: 300;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-family: 'Source Sans Pro', sans-serif;
    color:    white;
    opacity:  1;
    font-weight: 300;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-family: 'Source Sans Pro', sans-serif;
    color:    white;
    font-weight: 300;
  }
}

.wrapper{
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &.form-success{
    .container{
      h1{
        transform: translateY(85px);
      }
    }
  }
}

.container{
  padding: 80px 0;
  height: 400px;
  text-align: center;
  h1{
    color: #fff;
    font-size: 40px;
    transition-duration: 1s;
    transition-timing-function: ease-in-put;
    font-weight: 200;
  }
}

form{
  padding: 20px 0;
  position: relative;
  z-index: 2;

  input{
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid fade(white, 40%);
    background-color: fade(white, 20%);
    width: 250px;

    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;

    color: white;

    transition-duration: 0.25s;
    font-weight: 300;

    &:hover{
      background-color: fade(white, 40%);
    }

    &:focus{
      background-color: white;
      width: 300px;

      color: @prim;
    }
  }

  button{
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: @prim;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;

    &:hover{
      background-color: rgb(245, 247, 249);
    }
  }
}

.bg-bubbles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  li{
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: fade(white, 15%);
    bottom: -160px;

    -webkit-animation: square 25s infinite;
    animation:         square 25s infinite;

    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;

    &:nth-child(1){
      left: 10%;
    }

    &:nth-child(2){
      left: 20%;

      width: 80px;
      height: 80px;

      animation-delay: 2s;
      animation-duration: 17s;
    }

    &:nth-child(3){
      left: 25%;
      animation-delay: 4s;
    }

    &:nth-child(4){
      left: 40%;
      width: 60px;
      height: 60px;

      animation-duration: 15s;

      background-color: fade(white, 25%);
    }

    &:nth-child(5){
      left: 70%;
    }

    &:nth-child(6){
      left: 80%;
      width: 120px;
      height: 120px;

      animation-delay: 3s;
      background-color: fade(white, 20%);
    }

    &:nth-child(7){
      left: 32%;
      width: 160px;
      height: 160px;

      animation-delay: 7s;
    }

    &:nth-child(8){
      left: 55%;
      width: 20px;
      height: 20px;

      animation-delay: 15s;
      animation-duration: 20s;
    }

    &:nth-child(9){
      left: 25%;
      width: 10px;
      height: 10px;

      animation-delay: 2s;
      animation-duration: 20s;
      background-color: fade(white, 30%);
    }

    &:nth-child(10){
      left: 56%;
      width: 160px;
      height: 160px;

      animation-delay: 4s;
    }

    &:nth-child(11){
      left: 67%;

      width: 80px;
      height: 80px;

      animation-delay: 8s;
    }

    &:nth-child(12){
      left: 79%;
      animation-delay: 12s;
    }

    &:nth-child(13){
      left: 40%;
      width: 60px;
      height: 60px;

      animation-duration: 22s;

      background-color: fade(white, 25%);
    }
  }
}

@-webkit-keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-1000px) rotate(600deg); }
}
@keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-1000px) rotate(600deg); }
}
</style>
<script>
export default{
  data(){
    return {
      msg:"Zk's Demo",
      name:"",
      password:"",
      islogin:false,
      focusStatus:false,
    };
  },
  methods:{
    login(){
      this.$axios.post('/users/login',{username:this.name,password:this.password}).then(res=>{
        if(res.data.success){
          this.islogin=true;
          this.focusStatus=false;
          this.msg='Welcome '+res.data.data;
          setTimeout(()=>this.$router.push({path:'/home'}),2000);
        }else{
          this.islogin=false;
          this.password="";
          this.$refs.password.focus()
        }
      })
    }
  },
}
</script>
