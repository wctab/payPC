<template>
   <div class="checkGames">
    <div class="containers">
        <div class="row pt-4 pb-4 m-0">
            <div class="col-4 mb-2 p-0">
                <a class="float-left pt-1" href="/index"><img src="images/core-img/logo.png" alt="games"></a>
            </div>
            <div class="col-8 p-0">
                <div class="hform d-flex">
                    <div class="input-group mr-5">
                        <input type="text" class="input-group-item rounded-0
                      form-control ml-lg-5" placeholder="Search" 
                      v-model="kw" 
                      @keyup.13="search">
                        <button class="input-group-item btn bg-white rounded-0 text-center" 
                        @click="search" 
                        >
                            <img class="w-50 img-fluid" src="images/core-img/search.png" alt=""/>
                        </button>
                    </div>
                    <a  class="hlr btn rounded-0 " href="javascript:;" @click="login">{{Login}}</a>
                </div>
                <div id="login" v-show="show">
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
                                            <td><input type="checkbox" id="cb"><label for="cb">
                                                <span>自动登录</span>
                                            </label></td>
                                            <td><a href="#"><span>忘记密码?</span></a></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <button id="bt" @click="loginreq" type="button">登录</button>
                                            </td>
                                        </tr>	
                                    </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <!-- 导航栏-->

        <div class="d-flex" id="Nav">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link pl-0" href="/index">主页</a>
                </li>
                <li class="nav-item dropdown ml-lg-3">
                            <span class="nav-link  dropdown-toggle"
                                  data-toggle="dropdown">商品列表</span>
                    <div class="dropdown-menu border-0">
                        <a href="/game_laptop" class="dropdown-item">全部游戏分类</a>
                        <a href="javacript:;" class="dropdown-item">单一游戏</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-lg-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">活动专区</span>
                    <div class="dropdown-menu border-0">
                        <a href="/active" class="dropdown-item">限时折扣</a>
                        <a href="/active" class="dropdown-item">全球夺宝</a>
                        <a href="/active" class="dropdown-item">战斗狂欢夜</a>
                        <a href="/active" class="dropdown-item">战队队服热卖</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-lg-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">限时折扣</span>
                    <div class="dropdown-menu border-0">
                        <a href="javascript:;" class="dropdown-item">每周五折优惠</a>
                        <a href="javascript:;" class="dropdown-item">精灵折扣转盘</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-lg-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">周边商城</span>
                    <div class="dropdown-menu border-0">
                        <a class="dropdown-item" href="/surrounding">雕塑手办</a>
                        <a class="dropdown-item" href="/surrounding">毛线玩偶</a>
                        <a class="dropdown-item" href="/surrounding">周边服饰</a>
                    </div>
                </li>
                <li class="nav-item ml-lg-3">
                    <a class="nav-link" href="/singe_game">游戏评测</a>
                </li>
            </ul>
            <div id="my_cat">
                <div class="my_cat d-flex">
                    <div>
                        <a class="font-weight-bold
                        pr-2" href="/home">
                                <span>
                                    <img class="mb-1" src="images/core-img/user.png" alt=""/>
                                    个人中心</span>
                        </a>
                    </div>
                    <div class="ml-2">
                            <span class="font-weight-bold"
                                  data-toggle="modal" data-target="#demo_cat">
                                <img class="mb-2" src="images/core-img/shop_car.png" alt=""/>
                                购物车(<b>0</b>)</span>
                        <div class="modal" id="demo_cat">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>我的购物车</h4>
                                        <button class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="d-flex m-3 align-content-center">
                                        <input class="selectAll" type="checkbox" name="selectAll">
                                        <div class="d-flex align-content-center ml-2">
                                            <img src="images/laptop-pics/sm/2.jpg" alt="">
                                            <p class="gname ml-1">孤岛惊魂5</p>
                                            <p class="gprice">128.00</p>
                                            <div class="d-flex selM">
                                                <button class="btn mr-0" @click="reduce"><b>-</b></button>
                                                <input class="text-center w-25" type="text" v-model="value"/>
                                                <button class="btn" @click="add"><b>+</b></button>
                                                <button class="btn delete">删除</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="modal-footer d-flex justify-content-between border">
                                    <div>
                                        全选 <input type="checkbox" name="selectAll">
                                        <button class="btn delete">全删</button>
                                    </div>
                                    <div>
                                        合计：<output>￥258.00</output>
                                        <a class="ml-2 allprice" href="javascript:;">去结算(1)</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import Login from "@/views/login"
    export default {
        data(){
            return {
                Login:"Login/Register",
                kw:"",
                value:1,
                show:false,
                uname:"",
                upwd:"",
                msg:""
        }
    },
    created(){
        var sta =sessionStorage.getItem("status");
        console.log(sta);
        if(sta){
            this.Login=sessionStorage.getItem("status");
        }  
    },
    methods:{
        loginreq(){
            if(this.Login=="Login/Register"){
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
                        this.show =false;
                        this.Login="退出登录"
                        this.$store.commit("user",this.uname);
                        this.$store.commit("flag","isLogin");
                         this.$store.commit("status","退出登录");
                        console.log(this.$store.state.uname);
                        
					}
                })
            }else{
                this.Login="Login/Register"
                this.show = true;
            }    
			},
        login(){
            if(this.Login=="退出登录"){
                sessionStorage.removeItem("status");
                sessionStorage.removeItem("flag");
                sessionStorage.removeItem("uname");
                this.Login="Login/Register"
                this.uname="";
                this.upwd="";
                //清除缓存..没做
                this.show =true;
            }
            if(!this.show && this.Login=="Login/Register"){
               this.show =true; 
            }else if(this.show && this.Login=="Login/Register"){
                this.show =false; 
            }
        },
        search(){
            console.log(this.kw,11)
                this.$router.push(
                    //this.$router.push(
                    //跳到/products并携带参数kw
                    //`/products/${this.kw}`
                    //);
                    {
                        name:"products",
                        params:{kw:this.kw}
                    }
                )
            },
            reduce(){
           if(this.value>1){
                this.value--;
            }else{
                this.value=1;
            } 
        },
        add(){
            if(this.value<10){
                this.value++;
            }
        },
        },
        watch:{
        
        },
        components:{
            Login
        }
    }
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
#login{
    position:absolute;
    z-index:9999;
    right:0;
    top:30px;
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
a{
    color:#555;
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
.my_small{
    font-size: 0.8rem;
}
.containers{
    width:1200px;
    margin:0 auto;
}
/*header*/
#checkGames>div>div{
    border:1px red solid;
}
.hform input{
    border-right:none;
    height:2.5rem;
}
.hform button{
    border:1px solid #ced4da;
    border-left:none;
    width:3rem;
    height:2.5rem;
    line-height:0.5rem;
}
.hlr{
    background:#35c1cf;
    text-decoration:none;
    color:#fff;
    height:2.5rem;
    width:150px;
    text-align:center;
    line-height:2.3rem;
}
.btn:focus, .btn.focus{
    box-shadow: 0 0 0 0 ;
}
a.hlr:hover,#Nav>button:hover{
    background:#000;
    color:#fff;
}
/*导航css*/
#Nav{
    height:80px;
    align-items: center;
}
#Nav ul>li>a,#Nav ul>li>span{
    color:#333;
    font-weight: bold;
    font-size:1.1rem;
    cursor:pointer;
}
#Nav ul>li>div>a,#Nav ul>li>div>span,#Nav ul>li>.dropdown-menu>.dropdown-item{
    color:#555;
    font-size:14px;
    font-weight: bold;
}
#Nav ul>li>a:hover,#Nav ul>li>span:hover,#Nav ul>li>.dropdown-menu>.dropdown-item:hover{
    color:#ff8300;
}
#my_cat{
    margin-left:445px;
}
.my_cat a,.my_cat span{
    color:#bbb;
    font-size:1.1rem;
    cursor: pointer;
}
.my_cat a:hover span,.my_cat span:hover{
    color:#f05335;
}

#my_cat .modal{
    margin:200px 0 0 600px;

}

.selectAll{
   margin-top:30px;
}
.gname{
    width:160px;
    margin-top:20px;
}
.gprice{
   margin-top:20px;
   width:100px;
   height:30px;

}
.selM{
    height:30px;
    margin-top:20px;
}
.delete{
    width:50px !important;
    margin-left:20px;
}
.selM>button{
   width:30px;
}
.allprice{
    display:inline-block;
    background:red;
    font-size:16px !important;
    color:#fff !important;
}
</style>
