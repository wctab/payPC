<template>
<div>
<myHeader></myHeader>
  <div class="RCarousel">
        <div id="flash" class="slidebann">
            <a id="flash1" target="_blank" href="#">
                <img  class="RCarousel_img" src="images/surrounding-img/01.jpg"/>
            </a>
            <a id="flash2" target="_blank" href="#">
                <img  class="RCarousel_img" src="images/surrounding-img/02.jpg"/>
            </a>
            <a id="flash3" target="_blank" href="#">
                <img  class="RCarousel_img" src="images/surrounding-img/03.jpg"/>
            </a>
            <a id="flash4" target="_blank" href="#">
                <img  class="RCarousel_img" src="images/surrounding-img/04.jpg"/>
            </a>
            <a id="flash5" target="_blank" href="#">
                <img  class="RCarousel_img" src="images/surrounding-img/05.jpg"/>
            </a>

            <div class="containers">
                <ul class="flash_bar">
                    <li id="f1" class="no" onmouseover="changeflash(1)"></li>
                    <li id="f2" class="no" onmouseover="changeflash(2)"></li>
                    <li id="f3" class="dq" onmouseover="changeflash(3)"></li>
                    <li id="f4" class="no" onmouseover="changeflash(4)"></li>
                    <li id="f5" class="no" onmouseover="changeflash(5)"></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="containers index-main">
        <div class="index-main_over">
            <div class="index-tit index_not clearfix">
                <h1>精品推荐</h1>
                <span >超值好物随时买</span>
                <a title="更多" href="#">更多<span>+</span></a>
            </div>
            <a class="more01" href="#">
                <img src="images/surrounding-img/01_more.jpg" alt=""/>
            </a>
            <div class="more_1">
                <ul>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/01_1.jpg" alt=""/>
                            <p>洛与霞口袋T恤</p>
                            <p>&yen;150</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/01_2.jpg" alt=""/>
                            <p>K/DA 阿卡丽黑色棒球帽</p>
                            <p>&yen;150</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/01_3.jpg" alt=""/>
                            <p>欢迎来到野区 - 今晚一起狩猎T恤</p>
                            <p>&yen;150</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/01_4.jpg" alt=""/>
                            <p>K/DA 鼠标垫（加长版）</p>
                            <p>&yen;150</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="index-tit clearfix">
                <h1>手办专区</h1>
                <span >精品热卖手办等你抢</span>
                <a title="更多" href="#">更多<span>+</span></a>
            </div>
            <a class="more01" href="#">
                <img src="images/surrounding-img/02_more.jpg" alt=""/>
            </a>
            <div class="more_1">
                <ul>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/02_1.jpg" alt=""/>
                            <p>盲僧李青 中型雕塑</p>
                            <p>&yen;430</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/02_2.jpg" alt=""/>
                            <p>星之守护者迷你手办套装（第二代）</p>
                            <p>&yen;220</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/02_3.jpg" alt=""/>
                            <p>暮光星灵 佐伊 手办（XL版）</p>
                            <p>&yen;199</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/02_4.jpg" alt=""/>
                            <p>源计划迷你手办套装（第二代）-组合款</p>
                            <p>&yen;280</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="index-tit clearfix">
                <h1>毛绒专区</h1>
                <span >毛绒玩偶 匠心设计</span>
                <a title="更多" href="#">更多<span>+</span></a>
            </div>
            <a class="more01" href="#">
                <img src="images/surrounding-img/03_more.jpg" alt=""/>
            </a>
            <div class="more_1">
                <ul>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/03_1.jpg" alt=""/>
                            <p>悟空收藏款毛绒</p>
                            <p>&yen;108</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/03_2.jpg" alt=""/>
                            <p>冰霜烈焰 提伯斯熊</p>
                            <p>&yen;180</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/03_3.jpg" alt=""/>
                            <p>开心魄罗抱枕</p>
                            <p>&yen;180</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/03_4.jpg" alt=""/>
                            <p>连体衣迷你魄罗毛绒套装</p>
                            <p>&yen;150</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="index-tit clearfix">
                <h1>LPL专区</h1>
                <span >选手同款周边</span>
                <a title="更多" href="#">更多<span>+</span></a>
            </div>
            <a class="more01" href="#">
                <img src="images/surrounding-img/04_more.jpg" alt=""/>
            </a>
            <div class="more_1">
                <ul>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/04_1.jpg" alt=""/>
                            <p>2018 RNG 队服短袖上衣</p>
                            <p>&yen;199</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/04_2.jpg" alt=""/>
                            <p>2018 IG 队服短袖上衣</p>
                            <p>&yen;199</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/04_3.jpg" alt=""/>
                            <p>2018 EDG 队服短袖上衣</p>
                            <p>&yen;199</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/04_4.jpg" alt=""/>
                            <p>LPL U盘 32GB USB3.0</p>
                            <p>&yen;199</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="index-tit clearfix">
                <h1>卫衣专区</h1>
                <span >比赛卫衣炫酷来袭</span>
                <a title="更多" href="#">更多<span>+</span></a>
            </div>
            <a class="more01" href="#">
                <img src="images/surrounding-img/05_more.jpg" alt=""/>
            </a>
            <div class="more_1">
                <ul>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/05_1.jpg" alt=""/>
                            <p>飞龙在天 盲僧卫衣 墨染</p>
                            <p>&yen;299</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/05_2.jpg" alt=""/>
                            <p>吐槽卫衣 - 安排一下</p>
                            <p>&yen;299</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/05_3.jpg" alt=""/>
                            <p>吐槽卫衣 - 心态崩了</p>
                            <p>&yen;299</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/surrounding-img/05_4.jpg" alt=""/>
                            <p>吐槽卫衣 - 皮</p>
                            <p>&yen;299</p>
                        </a>
                    </li>
                </ul>
            </div>





        </div>
    </div>
    <myFooter></myFooter>
</div>
</template>
<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
  data(){
    return{}
  },
  components:{
    myHeader,
    myFooter
  }
};
       var curentindex=1;
        function changeflash(i){
            var length = $(".flash_bar>li").length;
            if(i>length){
                return;
            }
            curentindex=i;
            for(var j=1;j<=length;j++){
                if(j==i){
                    console.log(i)
                   // $("#flash"+j).fadeOut("normal");
                    $("#flash"+j).css("display","block");
                    $("#f"+j).removeClass();
                    $("#f"+j).addClass("dq");
                }else{
                    $("#flash"+j).css("display","none");
                    $("#f"+j).removeClass();
                    $("#f"+j).addClass("no");
                }
            }
        }
        var timeID=setInterval(function(){
            var length=$(".flash_bar>li").length;
            curentindex = curentindex >=length ? 1:(curentindex+1);
            changeflash(curentindex);
        },5000);
        function stopAm(){
            clearInterval(timeID);
        }
        $(document).ready(function(){
            $(".flash_bar>li").mouseover(
                    function(){
                        stopAm();
                    }).mouseout(function(){
                        timeID=setInterval(function(){
                            var length=$(".flash_bar>li").length;
                            curentindex = curentindex >=length ? 1:(curentindex+1);
                            changeflash(curentindex);
                        },5000);
                    });
        })
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
}
body{
    background:#f5f5f5;
    color:#555;
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
.RCarousel .RCarousel_img{
    margin: 0 auto;
    min-height: 346px;
    height: auto;
    min-width: 1240px;
    width: 100%;
    vertical-align: bottom;
    font-size: 0;
    border: 0;
}
.RCarousel>#flash{
    position:relative;
}
.RCarousel>#flash>a+a{
    display:none;
}
.flash_bar{
    list-style: none;
    width:180px;
    height:3px;
    z-index:10;
    bottom:30px;
    left:50%;
    position: absolute;
    transform:translateX(-50%);
}
.flash_bar>#f2{
    margin-left:3px;
}
#flash .containers{
    position: relative;
    top:-10px;
}
#f1,#f2,#f3,#f4,#f5{
    float:left;
    width:27px;
    height:3px;
    margin-left:6px;
}
.flash_bar .no{
    background:#ddd;
}
.flash_bar .dq{
    background:#ffc933;
}
.index-main{
    background: #fff;
    position:relative;
    top:-30px;
    border-radius:5px;
}
.index-main::before{
    content: "";
    display: table;
}
.index-main_over{
    width:1120px;
    margin:40px;
    box-sizing:border-box;
}
.index-tit>h1{
    float:left;
    color:#333;
    font-size:28px;
    font-weight: bold;
}
.index-tit>span{
    float:left;
    margin:10px 0 0 25px;
    font-size:14px;
    color:#333;

}
.index-tit>a{
    margin-top:10px;
    float:right;
    font-size:15px;
    color: #333;
}
.index-tit>a>span{
    width:20px;
    height:20px;
    display: inline-block;
    background: #ffc933;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    font-weight:700;
    color: #222;
    font-size:17px;
    margin-left:4px;
}
.index-main_over>.more01{
    margin-top:10px;
    display: block;

}
.index-main_over>.more01>img{
    width:1120px;
}
.index-main_over>.more_1{
    margin-top:20px;
}
.index-main_over>.more_1>ul{
    list-style-type: none;
    perspective: 800px;
}
.index-main_over>.more_1>ul::after{
    content: '';
    display: block;
    clear:both;
}
.index-main_over>.more_1>ul>li{
    text-align: center;
    float:left;
    width:264px;
    height:357px;
    border:1px solid #eee;
    transition:all 0.1;
}
.index-main_over>.more_1>ul>li:hover{
    transform:translateZ(3px);
    box-shadow:0 10px 15px 5px rgba(0,0,0,0.2);
}
.index-main_over>.more_1>ul>li+li{
    margin-left:20px;
}
.index-main_over>.more_1>ul>li>a{
    width:264px;
    background: #fff;
}
.index-main_over>.more_1>ul>li>a>img{
    width:260px;
    height:267px;
}
.index-main_over>.more_1>ul>li>a>p{
    font-size: 14px;
    color:#333;
}
.index-main_over>.more_1>ul>li>a>p:nth-child(3){
    line-height: 25px;
    font-size: 16px;
    color: #f7545f;
}
.index-main_over>.index-tit:not(.index_not){
    margin-top:20px;
}
</style>