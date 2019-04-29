<template>

<div>
    <div data-container>
<Bheader :addCid="addCid" @cidchange="getCid" @cidchangeAll="getCids"></Bheader>
    <div class="container">
        <table></table>
        <div class="mt-4">
            <ul class="breadcrumb">
                <li class="breadcrumb-item">
                    <a class="my_small text-dark" href="javascript:;">商城首页</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="my_small text-dark" href="javascript:;">全部商品</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="my_small text-dark" href="javascript:;">游戏商城</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="my_small text-dark" href="javascript:;">孤岛惊魂5</a>
                </li>
            </ul>
        </div>
        <div class="row bg-white m-0 pb-3">
            <div class="col-md-6 col-sm-12">
                <div class="mt-2 det_img">
                    <img class="my_image" :src="mImgSrc" alt=""/>
                    <div id="mask" class="position-absolute" 
                    :style="maskStyle" v-show="show"></div>
                    <div id="super_mask" class="position-absolute" 
                    @mouseenter="display"
                    @mouseout="hide" 
                    @mousemove="move($event)"></div>
                    <div id="div_lg" :style="lgDivStyle" class="position-absolute " v-show="show"></div>
                </div>
                <div class="my_li_width mt-2">
                    <img src="images/core-img/prev.png" class="prev float-left btn-light border-0 p-1 pt-4 pb-4" :class="btnLeftDisabled==true?'disabled':''" @click="moveRight"/>
                    <div class="d-inline-block pt-2 mx-0 m-auto" style="">
                        <ul class="list-unstyled mb-0" 
                        :style="ulImgsStyle">
                            <li class="float-left p-1" v-for="(elem,i) of pics" :key="i">
                                <img :src="elem.sm" @mouseenter="changeImg(i)"/>
                            </li>
                        </ul>
                    </div>
                    <img src="images/core-img/next.png" class="btn next
                    float-right btn-light border-0 p-1 pt-4 pb-4" 
                    :class="btnRightDisabled==true?'disabled':''" @click="moveLeft"/>
                </div>
            </div>
            <div class="col-md-6 col-sm-12" id="deRight">
                <div class="mt-2">
                    <h4 class="text-dark font-weight-bold" v-text="`${product.lname}：${product.category_type}`"></h4>
                    <p class="product_price mt-4 mb-3" v-text="`￥${product.price}`"></p>
                    <span class="mr-5 my_small">已售：788</span>
                    <span class="my_small">累计评价：22</span>
                    <img class="star5" src="images/core-img/5star.png" alt=""/>
                    <span class="score5 m-2" >5.0</span>
                </div>
                <div class="clearfix mt-4">
                    <div class="float-left my_small">
                        支持系统：
                    </div>
                    <div class="float-left w-50">
                        <a class="btn btn-sm btn-outline-secondary" href="javascript:;">系统:Windows 7/8/8.1/10(64位)</a>
                        <a class="btn btn-sm btn-outline-secondary" href="javascript:;">CPU:Core i5-4460 或 AMD FX-6300</a>
                        <a class="btn btn-sm btn-outline-secondary" href="javascript:;">内存:8 GB RAM 存储:26 GB</a>
                        <a class="btn btn-sm btn-outline-secondary" href="javascript:;">显卡:GeForce GTX 760 / AMD Radeon R7 260x</a>
                    </div>
                </div>
                <div class="d-flex mt-4 by_cat">
                    <div class="mt-2 mr-5 my_small">数量</div>
                    <div class="d-flex">
                        <button class="btn mr-0" @click="reduce"><b>-</b></button>
                        <input class="text-center w-25" type="text" v-model="value"/>
                        <button class="btn" @click="add"><b>+</b></button>
                    </div>
                </div>
                <div class="d-flex mt-5 my_cat">
                    <a href="javascript:;" @click='click(product,pics)'>加入购物车</a>
                    <a href="javascript:;">立即购买</a>
                    <a href="javascript:;">
                        <img src="images/core-img/product_detail_img6.png" data-img="images/core-img/heart.png"/>
                        <span>收藏</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-white mt-3" id="product_desc">
            <ul class="list-unstyled d-flex justify-content-around border-bottom">
                <li>
                    <a class="font-weight-bold text-dark" href="javascript:;">游戏简介</a>
                </li>
                <li>
                    <a class="font-weight-bold text-dark" href="javascript:;">
                        视频攻略
                    </a>
                </li>
                <li>
                    <a class="font-weight-bold text-dark" href="javascript:;">用户评论(<span>22</span>)</a>
                </li>
            </ul>
            <div id="product_desc_all" v-text="`${product.title}`"></div>
            <div class="product_desc_title" v-text="`${product.desc_title}`"></div>
        </div>
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
        return {
            addCid:"",
            data:{},
            value:1,
            product:{},
            pics:[],
            lid:1,
            last:1,
            mImgSrc:"",
            ulImgsStyle:{
                width:0,
                "margin-left":0
            },
            lgDivStyle:{
                "background-image":"",
                "background-position":"0px 0px"
            },
            btnRightDisabled:false,
            btnLeftDisabled:true,
            moved:1,
            show:false,
            maskStyle:{
                left:0,
                top:0
            }
        }
    },
    created(){
        this.load()
    },
    methods:{
        getCids(data){
        this.addCid =data;
        },
        getCid(data){
            this.addCid =data;
        },
        click(product,pics){
            this.data.cid = product.lid;
            console.log(pics);
            this.data.sm=pics[0].sm;
            this.data.cname=product.lname;
            this.data.price = product.price;
            this.data.count = 1;
            console.log(this.data);
            //return;
            this.axios.get("http://127.0.0.1:8081/cart",{
                params:{
                    data:this.data
                }
            }).then(result=>{
                if(result.data.code==-1){
                    console.log(result.data)
                    this.$message({
                        type:"error",
                        message:result.data.msg,
                        center:true
                    })
                }else if(result.data.code==1){
                   this.addCid ="change"+ this.data.cid

                }
            })
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
        load(){
            var lid = this.$route.params;
            if(lid.lid !=="" &&lid.lid !==undefined){
              this.lid = lid.lid;
          }
          console.log(this.lid)
            this.axios.get("http://127.0.0.1:8081/details",{
                params:{
                    lid:this.lid
                }
            }).then(result=>{
                console.log(result.data);
                this.product=result.data.product;
                this.pics= result.data.pics;
                this.mImgSrc =this.pics[0].md;
                this.ulImgsStyle.width=
                this.pics.length*79+"px";
                this.lgDivStyle["background-image"]= `url(${this.pics[0].lg})`;
            })
        },
        changeImg(i){
            var pic = this.pics[i];
            this.mImgSrc = pic.md;
            this.lgDivStyle["background-image"]= `url(${pic.lg})`;
        },
        moveLeft(){
            if(this.btnRightDisabled==false){
                this.moved++;
                this.btnLeftDisabled=false;
            }
            this.ulImgsStyle["margin-left"]=this.moved*-79 + "px";
            if(this.moved>this.pics.length-4){
                this.btnRightDisabled=true;
            }
        },
        moveRight(){
            if(this.btnLeftDisabled==false){
                 this.moved--;
                 this.btnRightDisabled=false;
            }
            this.ulImgsStyle["margin-left"]=this.moved*-79 + "px";
            if(this.moved==0){
                this.btnLeftDisabled=true;
            }
        },
        display(){
            this.show = true;
        },
        hide(){
            this.show = false;
        },
        move(e){
            //console.log(e.offsetX,e.offsetY);
            var left= e.offsetX-88,top=e.offsetY-88;
            if(left<0){
                left=0;
            }else if(left>285){
                left=285
            }
            if(top<0){
                top=0;
            }else if(top>176){
                top=176
            }
           this.maskStyle.left= left+"px";
           this.maskStyle.top= top+"px"; 
           this.lgDivStyle["background-position"]=`${-left*1.055}px ${-top*2.286}px`
        }

    },
    watch:{
        lid(){
            //监听lid,只要变化就重新发送
            this.load();
        }
    },
    components:{
        Bheader,
        Bfooter,
    }
    }
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
div#deRight{
    text-align:left !important;
}

a{    color:#666;
    text-decoration: none;}
a:hover{
    text-decoration: none;
}
.my_small{
    font-size: 0.8rem;
}

.breadcrumb-item + .breadcrumb-item::before{
    content:">";
}
.breadcrumb{
    background:transparent;
}
.det_img{
    position:relative;
    width:458px;
    height:338px;
}
#mask{
    width:176px; height:176px;
    background-color:#ffa;
    opacity:.5;
}
#super_mask{
    width:458px; height:338px;
    top:0;
}
#div_lg{
    width:500px; height:400px;
    left:468px;
    top:0;
    z-index:1000;
    border: 1px solid rgba(0, 0, 0, 0.125)
}
.my_li_width{
    width:458px;
}
.my_li_width>div{
    width:338px;
    overflow: hidden;
}
.my_li_width>div>ul{
    overflow: hidden;
    width:338px;
}
.my_li_width>div>ul>li{
    width:74px;
    height:70px;
    margin-right:5px;
}
.my_li_width>div>ul>li>img{
    width:74px;
    height:70px;
}
.my_li_width>div>ul>li:hover img{
    border:2px red solid;
}
.score5{
    color:#ffd92c;
    font-size:16px;
    font-weight:bold;
}
.star5{
    margin-left:150px;
}
.by_cat>div.d-flex>.btn{
    width:30px;
}
.by_cat>div.d-flex>.btn,.by_cat>div.d-flex>input{
    background:transparent;
    border:1px solid #ddd;
    border-radius:0;
}
.product_price{
    color:#f74f4a;
    font-size:36px;
}
.my_cat>a{
    display: inline-block;
    width:9rem;
    height:2.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff !important;
    opacity: 1;
    background:#f05335;
    border:0;
    border-radius:0;
    margin-right:1.5rem;
}
.my_cat>a>span{
    font-size:.9rem;
    color: #fff !important;
}
.my_cat>a:nth-child(1):hover,.my_cat>a:nth-child(2):hover,.my_cat>a:nth-child(3):hover{
    opacity: 0.9;
}
.my_cat>a:nth-child(3){
    margin-top:0.2rem;
    width:6rem;
    height:2rem;
    line-height:1.8rem;
    font-size: 0.9rem;
    border: 2px solid #ddd;
    background:#888;
    border-radius:30px;
}
#product_desc>ul{
    width:100%;
    height:4rem;
    line-height:4rem;
}
#product_desc>ul>li:nth-child(1){
    height:4rem;
    border-bottom:2px solid #f05335;
}

#app>*[data-v-14d957f8] {
    margin:0 auto !important;
}
#product_desc_all{
    padding-top:20px;
    text-align:left;
    font-size:18px;
    color:#000;
}
.product_desc_title{
    padding:10px;
    text-align:left;
}
</style>
