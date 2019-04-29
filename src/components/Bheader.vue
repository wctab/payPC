<template>
<header id="header2" class="bg-white">
  <div class="container">
    <div class="row pt-4 pb-4 m-0">
        <div class="col-md-4 col-sm-12 mb-3" id="logo">
            <a href="/"><img class="img-fluid" src="images/core-img/logo.png" alt="games"></a>
        </div>
        <div class="col-md-8 col-sm-12 p-0">
            <div class="hform d-flex">
                <div class="input-group mr-5">
                    <input type="text" class="input-group-item rounded-0
                      form-control ml-lg-5" placeholder="Search" 
                      v-model="kw" 
                       @keyup.13="search"
                      aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <button class="input-group-item btn bg-white rounded-0 text-center" 
                    @click="search()" 
                    >
                        <img class="w-50 img-fluid" src="images/core-img/search.png" alt=""/>
                    </button>
                </div>
                <a  class="hlr btn rounded-0" href="javascript:;">{{Login}}</a>
            </div>
        </div>
    </div>
    <!-- 导航栏-->
    <div id="Nav" class="navbar navbar-expand-md navbar-dark
     bg-white m-0 pl-0">
        <button id="my_nb_but" class="navbar-toggler" data-toggle="collapse"
                data-target="#content">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="content">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link pl-0" href="/index">主页</a>
                </li>
                <li class="nav-item dropdown ml-md-3">
                            <span class="nav-link  dropdown-toggle"
                                  data-toggle="dropdown">商品列表</span>
                    <div class="dropdown-menu border-0">
                        <a href="/game_laptop" class="dropdown-item">全部游戏分类</a>
                        <a href="javascript:;" class="dropdown-item">单一游戏</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-md-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">活动专区</span>
                    <div class="dropdown-menu border-0">
                        <a href="/active" class="dropdown-item">限时折扣</a>
                        <a href="/active" class="dropdown-item">全球夺宝</a>
                        <a href="/active" class="dropdown-item">战斗狂欢夜</a>
                        <a href="/active" class="dropdown-item">战队队服热卖</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-md-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">限时折扣</span>
                    <div class="dropdown-menu border-0">
                        <a href="javascript:;" class="dropdown-item">每周五折优惠</a>
                        <a href="javascript:;" class="dropdown-item">精灵折扣转盘</a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-md-3">
                            <span class="nav-link dropdown-toggle"
                                  data-toggle="dropdown">周边商城</span>
                    <div class="dropdown-menu border-0">
                        <a class="dropdown-item" href="/surrounding">雕塑手办</a>
                        <a class="dropdown-item" href="/surrounding">毛线玩偶</a>
                        <a class="dropdown-item" href="/surrounding">周边服饰</a>
                    </div>
                </li>
                <li class="nav-item ml-md-3">
                    <a class="nav-link" href="/singe_game">游戏评测</a>
                </li>
            </ul>
        </div>
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
                                购物车(<b class="cartCount" >{{length}}</b>)</span>
                    <div class="modal" id="demo_cat">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4>我的购物车</h4>
                                    <button class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="position-relative" v-show="show">
                                        <img src="images/new/empty_minicart.png" alt="">
                                        <div id="shopping" class="position-absolute">
                                            <p>购物车空空如也...</p>
                                        </div>
                                    </div>
                                    <div v-show="hide" class="cartlist">
                                        <div class="d-flex m-3 align-content-center" 
                                    v-for="(elem,i) of cartData" :key="i">
                                        <input class="select" @change="select" 
                                        :data-i="i" :checked="elem.checked" type="checkbox" name="selectAll">
                                        <div class="d-flex align-content-center ml-2">
                                            <img :src="elem.sm" class="img_sm" alt="">
                                            <p class="gname ml-1" v-text="elem.cname"></p>
                                            <p class="gprice" v-text="`￥${elem.price}`"></p>
                                            <div class="d-flex selM">
                                                <div id="my_input">
                                                    <div class="d-flex">
                                                        <button class="btn mr-0" @click="reduce(i)"><b>-</b></button>
                                                        <input class="text-center w-25" type="text" v-model="elem.count"/>
                                                        <button class="btn" @click="add(i)"><b>+</b></button>
                                                    </div>
                                                </div>
                                                <button class="btn delete" @click="del" 
                                                :data-i="i" :data-cid="elem.cid">删除</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="modal-footer d-flex justify-content-between border pt-2 pb-2">
                                    <div>
                                        全选 <input type="checkbox" @change="selectAll" :checked="allBox" name="selectAll">
                                        <button class="btn delete ml-2" 
                                        @click="delAll">全删</button>
                                    </div>
                                    <div>
                                        合计：<output>￥{{total}}</output>
                                        <a class="ml-2 allprice" href="javascript:;">去结算({{count}})</a>
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
</header>
</template>
<script>
export default {
    props:["addCid"],
  data(){
    return {
        Login:"Login/Register",
        allBox:false,
        kw:"",
        count:0,
        length:0,
       cartData:{price:0},
       show:true,
       hide:false
    }
  },
  computed: {
      total(){
              var total=0;
              for(var i=0;i<this.count;i++){
                  if(!this.cartData[i].price){
                      this.cartData[i].price=0;
                  };
                total+= this.cartData[i].price*this.cartData[i].count;
              }
              return total;
      }
  },
  created(){
      var sta =sessionStorage.getItem("status");
        console.log(sta);
        if(sta){
            this.Login=sessionStorage.getItem("status");
        } 
      this.loadCart();
      //手动从地址栏中获得参数kwords
      //(kwords要和router.js中的:kwords一致)
      //this.kw = this.$route.params.kwords;
      //this.kw=this.$route.params.kw;
        
  },
  methods:{
      delAll(){
       this.$confirm("确认执行此操作?").then(active=>{
           var cids = "";
           for(var item of this.cartData){
               if(item.checked){
                   cids+=item.cid + ","
               }
           }
           
           if(cids.length==0){
               return
           }
           cids = cids.substring(0,cids.length-1);
           console.log(cids);
           this.axios.get("http://127.0.0.1:8081/cart/delMore",{
               params:{
                   cids:cids
               }
           }).then(result=>{
               this.loadCart()
               if(result.data.code==1){
                   this.$emit("cidchangeAll",cids+"delMore");
                   console.log(result.data.msg);
               }else{
                   console.log(result.data.msg);
               }
           })
       }).catch(result=>{
           console.log("已取消");
       })   
      },
      del(e){
          var i = e.target.dataset.i;
          console.log(i,this.cartData[i].checked)
          if(this.cartData[i].checked){
              this.$confirm("确认执行此操作?").then(active=>{
           var cid = e.target.dataset.cid;
           this.axios.get("http://127.0.0.1:8081/cart/del",{
               params:{
                   cid:cid
               }
           }).then(result=>{
               this.loadCart();
               if(result.data.code==1){
                  this.$emit("cidchange",cid+"delOne");
                   console.log(result.data.msg);
               }else{
                   console.log(result.data.msg);
               }
           })
            }).catch(result=>{
                console.log("已取消");
            })
          }else{
              this.$message({
                        showClose:true,
                        type:"warning",
                        message:"请选择",
                        center:true
                    })
          }
          
      },
      select(e){
        var elem = e.target.checked;
        var i = e.target.dataset.i;
        this.cartData[i].checked = elem;
        console.log(elem,i,this.cartData);
        var selectCount=0;
        for(var item of this.cartData){
            if(item.checked){
                selectCount++;
            }
        }
        this.count=selectCount;
        if( selectCount == this.cartData.length){
            this.allBox = true;
        }else{
            this.allBox =false;
        }
        console.log( selectCount,this.cartData.length)
      },
      selectAll(e){
          var checked = e.target.checked;
          for(var item of this.cartData){
              item.checked = checked;
              console.log(item.checked);
          }
          this.allBox = checked;
          if(this.allBox){
            this.count=this.cartData.length;
          }else{
              this.count=0;
          }
      },
        search(){
            if(this.kw.trim() !==""){
                console.log(this.kw)
                this.$emit("kwords",this.kw)
            }
        },
        reduce(i){
            console.log(this.cartData[i].count)
            var add = this.cartData[i].count-1
            var cid = this.cartData[i].cid;
             console.log(this.cartData[i].count,add)
            if(this.cartData[i].count>1){
                this.axios.get("http://127.0.0.1:8081/cart/add_reduce",{
                    params:{
                        count:add,
                        cid:cid
                    }
                }).then(result=>{
                    if(result.data.code){
                       this.loadCart()
                    }
                })
            }
        },
        add(i){
            console.log(this.cartData[i].count)
            var add = this.cartData[i].count+1
            var cid = this.cartData[i].cid;
            //if(this.cartData[i].count<10){
                this.axios.get("http://127.0.0.1:8081/cart/add_reduce",{
                    params:{
                        count:add,
                        cid:cid
                    }
                }).then(result=>{
                    if(result.data.code){
                        this.loadCart()
                    }
                })
           // }
        },
        loadCart(){
            this.axios.get("http://127.0.0.1:8081/cart/getCart")
            .then(result=>{
               this.cartData=result.data.data;
               if(this.length!=result.data.data.length){
                   this.length=result.data.data.length;
               }
               if(result.data.data.length>0){
                   this.hide = true;
                   this.show = false;
               }else{
                   this.hide = false;
                   this.show = true;
               }
            })    
        }
    },
    watch:{
       cartData(){
            //this.loadCart();
        },
        addCid(){
             console.log("addCid发生了变化:"+this.addCid);
             this.loadCart();
            }
    }
}
</script>
<style scoped>
 *{
    margin:0;
    padding:0;
}
#logo{
  text-align:left !important;
}
#my_nb_but{
  width:3rem;
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
    width:10rem;
    height:2.5rem;
    line-height:2.5rem;
}
.btn:focus, .btn.focus{
    box-shadow: 0 0 0 0 ;
}
a.hlr:hover,#Nav>button:hover{
    background:#000;
    color:#fff;
}
/*.my_cat a:first-child{*/
    /*border-right:0.12rem solid;*/
/*}*/
.cartCount{
    color:#f05335;
}
/*导航css*/
a.hlr:hover,#Nav>button:hover{
    background:#000;
    color:#fff;
}
#Nav>button{
    background:#35c1cf;
    border-radius:0;
    border:0;
}
.navbar-dark .navbar-toggler-icon{
    color:red;
}
#Nav ul>li{
  text-align:left !important;
}
#Nav ul>li>a,#Nav ul>li>span{
    color:#555;
    font-weight: bold;
    font-size:1.1rem;
    cursor:pointer;
}
#Nav ul>li>a:hover,#Nav ul>li>span:hover,#content>ul>li>.dropdown-menu>.dropdown-item:hover{
    color:#ff5900;
}
#content .dropdown-menu{
    left:8%;
}
#content>ul>li>.dropdown-menu>.dropdown-item{
    color:#555;
    font-weight: bold;
    font-size:0.9rem;
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
    width:100rem;
    margin:200px 0 0 600px;

}
.modal-body{
    height:360px;
    overflow-y:scroll !important;
}
#shopping{
    left:50%;
    font-size:18px;
    color:#999;
    font-weight:700;
}
.selectAll{
   margin-top:30px;
}
.select{
    margin-top:25px;
}
.img_sm{
    width:74px;
    height:70px;
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
    margin-left:-10px;
    width:50px !important;
}
.cartlist>div>div button{
   width:30px;
}
.allprice{
    display:inline-block;
    background:red;
    font-size:16px !important;
    color:#fff !important;
}
</style>