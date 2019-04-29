<template>
  <div>
    <div id="bg">
			<table></table>
			<p class="msg" v-text="msg"></p>
			<div class="black">
					<table>
						<tr>
							<td><h4><span>登录游戏商城</span></h4></td>
							<td><a href="/register"><span>新用户注册</span></a></td>
						</tr>
						<tr>
							<td colspan="2"><hr></td>
						</tr>
						<tr>
							<td colspan="2">
								<input id="un" type="text" autofocus 
								v-model="uname">
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<input id="up" type="password" 
								v-model="upwd">
							</td>
						</tr>
						<tr>
							<td><input type="checkbox" :checked="checked" id="cb"><label for="cb">
								<span>自动登录</span>
							</label></td>
							<td><a href="#"><span>忘记密码?</span></a></td>
						</tr>
						<tr>
							<td colspan="2">
								<button id="bt" @click="login" type="button">登录</button>
							</td>
						</tr>	
					</table>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
			uname:"",
			upwd:"",
			msg:"",
			checked:false
		}
  },
	methods:{
			login(){
				var qs = require("qs");
				this.axios.post("http://127.0.0.1:8081/user/login",qs.stringify({
					uname:this.uname,
					upwd:this.upwd
				})).then(result=>{
					console.log(result.data);
					if(result.data.code==401){
							this.msg = result.data.msg
					}else if(result.data.code==402){
						this.msg = result.data.msg
					}else if(result.data.code==302){
						this.msg = result.data.msg;
					}else{
						this.$router.push("/index");
					}
				})
			}
		}
}
</script>
<style scoped>
  *{
		margin:0;
		padding:0;
	}
	#bg{
		/*width:560px;
		height:800px;
		margin:0 auto;
		background:url(../../public/images/core-img/bg.png) no-repeat;
		background-size:cover;*/
		width:350px;
		height:300px;
		position:relative;
	}
	.msg{
			/*margin-left:135px;*/	
			position:absolute;
			color:red;
	}
	.black{
		/*margin-left:120px;
		margin-top:30%;*/
		margin-top:20px;
		width:350px;
		height:300px;
		background:rgba(0,0,0,0.4);
		padding:0 5px;
	}
	.black table{
		width:100%;
	}
	.black table h4{
		margin-top:12px;
		margin-bottom:8px;
	}
	.black table a{
		text-decoration:none;
		margin-left:100px;
		font-size:12px;
	}
	.black table span{
		color:#fff;
	}
	#un,#up{
		width:100%;
		height:38px;
		border:none;
		outline:none;
		background:rgba(255,255,255,0.4) url(../../public/images/core-img/yhm.png) no-repeat 97% center;
		margin:15px 0;
		padding-left:15px;
		box-sizing:border-box;
	}
	#up{
		background:rgba(255,255,255,0.4) url(../../public/images/core-img/mm.png) no-repeat 97% center;
		margin-bottom:25px;
	}
	.black #bt{
		width:100%;
		height:38px;
		font-size:18px;
		color:#fff;
		background-image:-webkit-linear-gradient(top,#27b0f6 0%,#0aa1ed 100%);
		border:none;
		cursor:pointer;
		margin-top:22px;
		border-radius:2px;
	}
</style>