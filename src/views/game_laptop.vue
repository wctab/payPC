<template>
  <div>
  <Bheader></Bheader>
    <div style="" @kwords="gets">{{kw}}</div>
    <div class="container">
    <div class="breadcrumb_cont mt-4">
        <ul class="breadcrumb">
            <li class="breadcrumb-item">
                <span>您的位置：</span>
                <a class="myBread" href="javascript:;">商城首页</a>
            </li>
            <li class="breadcrumb-item ">
                <a class="all" href="javascript:;">全部分类</a>
            </li>
        </ul>
    </div>
    <div class="row mt-5">
        <div class="col-3" id="select">
           <p>筛选条件</p>
            <div id="accordion">
                <div class="card">
                    <div class="card-header">
                        <i>+</i>
                        <a class="card-link" data-toggle="collapse" href="#One">
                            平台
                        </a>
                    </div>
                    <div id="One" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p>pc下载(165)</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i>+</i>
                        <a class="card-link" data-toggle="collapse" href="#Two">
                            价格
                        </a>
                    </div>
                    <div id="Two" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p class="priceSelect" v-for="(elem,i) of priceArr" :key="i" v-text="elem" @click="priceSelect(elem)"></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i>+</i>
                        <a class="card-link" data-toggle="collapse" href="#Three">
                            Type
                        </a>
                    </div>
                    <div id="Three" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p>GAME(165)</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i>+</i>
                        <a class="card-link" data-toggle="collapse" href="#Four">
                            类型
                        </a>
                    </div>
                    <div id="Four" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p>动作游戏</p>
                            <p>射击游戏</p>
                            <p>角色扮演</p>
                            <p>竞技游戏</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i>+</i>
                        <a class="card-link" data-toggle="collapse" href="#F">
                            游戏
                        </a>
                    </div>
                    <div id="F" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p>pc下载(165)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9 col-lg-offset-3">
            <div class="pro_nav">
                <div class="row mt-3">
                    <div class=" col-md-2 col-sm-6">
                        <span class="ml-3"> <strong class="count">{{count}}</strong> 个结果</span>
                    </div>
                   <div class="col-md-10 col-sm-6">
                       <ul class="nav mb-2">
                           <li class="nav-item ml-5">
                               <span>内容类型</span>
                               <input type="checkbox" checked id="hasAll"/>
                               <label for="hasAll">全部</label>
                           </li>
                           <li class="nav-item ml-2">
                               <input type="checkbox" id="has"/>
                               <label for="has">游戏</label>
                           </li>
                           <li class="nav-item pl-2">
                               <a class="nav-item-time" href="javascript:;">排序方式
                               </a>
                           </li>
                           <li class="nav-item dropdown-toggle ml-5">热销商品</li>
                       </ul>
                   </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-4" v-for="(p,i) of product" :key="i">
                    <div class="glist  mb-3">
                        <div class="bef_cont">
                            <div class="bef_cont_no">
                                <a class="car animated" href="javascript:;"><span>新增到购物车</span></a>
                                <a href="javascript:;" @click="one(i)"><span>查看更多</span></a>
                            </div>
                            <img class="gimg" :src="p.url" alt=""/>
                        </div>
                        <p class="gname" v-text="p.pname"></p>
                        <p class="version" v-text="p.ver"></p>
                        <p class="gprice"><span v-text="`￥${p.price.toFixed(2)}`"></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="justify-content-around foot">
        <ul class="pagination float-right ulnext">
            <li class="page-item" :class="pno==1?'disabled':''" 
            @click="prev">
                <button class="page-link">上一页</button>
            </li>
            <li class="page-item"  
            v-for="i of pageCount" 
            :class="parseInt(pno)==i?'active':''" 
            @click="loadPage(i)">
                <a class="page-link" 
                href="javascript:;" v-text="i"></a>
            </li>
            <li class="page-item" 
            :class="pno==pageCount?'disabled':''"
            @click="next">
                <button class="page-link">下一页</button>
            </li>
        </ul>
    </div>
</div>
 <Bfooter></Bfooter>
  </div>
</template>
<script>
import Bheader from "@/components/Bheader"
import Bfooter from "@/components/Bfooter"
export default {
  data(){
    return{
        priceArr:["0.00-48.00","48.00-88.00","88.00-188.00","188.00-288.00","288.00-999.00"],
        product:[],
        pageCount:0,
        pno:1,
        count:0,
        kw:"",
        priceSel:"0.00-10000000.00"
    }
  },
  created(){
      this.load();
  },
  methods:{
      gets(data){
          this.kw = data;
      },
      load(){
          var kw = this.$route.params;
          if(kw.kw !=="" &&kw.kw !==undefined){
              this.kw = kw.kw;
          }
          console.log(kw.kw,222)
         this.axios.get("http://127.0.0.1:8081/product_new",{
             params:{
                 pno:this.pno,
                 kw:this.kw,
                 priceSelect:this.priceSel
                 }
         })
         .then(result=>{
             console.log(result.data);
             this.product = result.data.data;
             this.pageCount = result.data.pageCount;
             this.count = result.data.count;
         })
      },
      loadPage(i){
          this.pno=i;
          this.load();
      },
      next(){
          if(this.pno<this.pageCount){
              this.pno++;
              this.load();
          }
      },
      prev(){
         if(this.pno>1){
              this.pno--;
              this.load();
          } 
      },
      one(i){
          i+=1;
          this.$router.push({name:"Details",params:{
              lid:i
          }})
      },
      priceSelect(elem){
          this.priceSel= elem;
          this.load();
      }
  },
  watch:{
      kw(){
          this.pno=1;
          this.load();
      },
      pageCount(){
            console.log(`pageCount发生变化:pageCount=${this.pageCount}`);
      },
      pno(){
          console.log(`pno发生变化:pno=${this.pno}`);
      }
  },
    components:{
        Bheader,
        Bfooter
    }
}
</script>
<style scoped>
  *{
    padding:0;
    margin:0;
}
#select{
    text-align:left;
}
#accordion .card{
    width:13rem;
    line-height:2.5rem;
}
.all_type{
    background:#e6e6e8;
    height:3rem;
    line-height:3rem;
}
.product_type{
    color:#00bcd4;
    display:block;
    height:3rem;
    width:100%;
    cursor:pointer;
}
#game_product>ul>li>a{
    color:#999;
}
.breadcrumb{
    background-color:rgba(0,0,0,.4) !important;
}
.breadcrumb-item>span{
    font-size:0.85rem;
    color:#35c1cf;
}
.breadcrumb-item a{
    font-size:0.18rem;
    text-decoration:none;
    color:#35c1cf;
}
.breadcrumb-item .all{
    color:#fff;
}
.breadcrumb-item + .breadcrumb-item::before{
    content:">" !important;
    color:#35c1cf;
}
.breadcrumb_cont{
    height:3rem;
    line-height:3rem;
}
.pro_nav{
    background:#e6e6e8;
    padding:0;
    line-height:2rem;
}
/*.col-lg-2,.col-lg-5{*/
    /*padding:0;*/
/*}*/
.pro_nav::before{
    content:"";
    display:table;
}
.pro_nav span{
    font-size:0.85rem;
    color:#999;
}
.search{
    height:2rem !important;
}
.search1{
    width:3rem !important;
}
.card>.card-header>i{
    font-size:1.5rem;
}
.nav-item{
    font-size:14px;
    color:#222;
    cursor:pointer;
}
.nav-item>a:hover{
    text-decoration:none;
    color:#f00;
}
.nav-item-time{
    color:#f00;
    text-decoration: none;
}
.nav-item input,.nav-item label{
    cursor:pointer;
}
.priceSelect{
    cursor:pointer;
    font-weight:bold;
}
.priceSelect:hover{
    color:#ff5900;
}
.glist{
    width:89%;
    text-align:left !important;
    background:#e5e8f0;
    transition:0.2s;
    position:relative;
}
.gname{
    color:#2e2e2e;
    font-size:1rem;
    margin:0.55rem 0 0.26rem 0.5rem;
}
.gname span{
    margin-left:0.6rem;
    color:#20d8da;
    font-size:0.55rem;
 }
.gprice{
    color:#ff5900;
    font-size:1.4rem;
    font-weight:bold;
    margin-top:-0.5rem;
    position:relative;
    height:2.5rem;
}
.gprice span{
    position:absolute;
    right:0.5rem;
}
.gimg{
    cursor:pointer;
    width:100%;
}
.btn_by{
    opacity:1;
}
.btn_by:hover{
    opacity:0.8;
}
.glist:hover{
    transform:translate(0,-0.25rem);
    box-shadow:0 5px 10px 1px #999;

}
.bef_cont_no{
    position:absolute;
    background:rgba(53,193,207,.95);
    height:354px;
    width:100%;
    display:none;
}
.glist:hover  .bef_cont_no{
    display:block;
}
.count{
    color:#ff5900;
    font-size:16px;
}
.version{
    margin-left:0.5rem;
    color:#9e9e9e;
}
.bef_cont_no>a:first-child,.bef_cont_no>a:last-child{
    display:block;
    width:8rem;
    height:2.5rem;
    border-radius:3rem;
    color:#fff !important;
    line-height:2.5rem;
    text-align: center;
    margin-left:20%;
    margin-top:0.5rem;
    cursor:pointer;
}
.bef_cont_no>a:first-child{
    margin-top:50%;
    margin-left:25%;
    background:#3bd373;
}
.bef_cont_no>a:first-child:hover{
    color:#fff !important;
}
.bef_cont_no>a:last-child{
    background:transparent;
    margin-left:25%;
    border:2px #fff solid;
    color:#fff !important;
}
.bef_cont_no>a:last-child:hover{
    color:#00bcd4 !important;
    background:#fff;
    font-weight:400;
}
.bef_cont_no>a{
    overflow: hidden;
}
.bef_cont_no>a>span{
    display:inline-block;
    transition:all;
}
.bef_cont_no>a:hover span{
    animation:move 0.2s;
}
@keyframes move{
    0%{
        transform:translateY(20px);
    }
    50%{
        transform:translateY(30px);
    }
    75%{
        transform:translateY(30px);
    }
    100%{
        transform:translateY(0px);
    }
}
.foot{
    margin-bottom:40px;
}
.foot::after{
    content:"";
    display:block;
    clear:both;
}
.pagination>.page-item>.page-link{
    width:2.5rem;
    height:2rem;
    line-height:2rem;
}
.pagination>.page-item:first-child>.page-link,.pagination>.page-item:last-child>.page-link{
    width:4rem !important;
}






@media screen and (min-width:992px){
    .bef_cont_no{
        height:334px;
    }
}
@media screen and (max-width:991px){
    .bef_cont_no{
        height:371px;

    }
    .bef_cont_no>a:first-child,.bef_cont_no>a:last-child{
        margin-left:22%;
        width:10rem;
        height:3rem;
        line-height:3rem;
    }
}
@media screen and (max-width:767px){
    .bef_cont_no{
        height:556.88px;

    }
    .bef_cont_no>a:first-child,.bef_cont_no>a:last-child{
        margin-left:30%;
        width:10rem;
        height:3rem;
        line-height:3rem;
    }
    .bef_cont_no>a:first-child{
        margin-top:50%;
    }
}

</style>