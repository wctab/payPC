<template>
  <div>
    <myHeader></myHeader>
    <div class="h_active">
        <div></div>
        <div class="containers">
            <h3>Activity</h3>
        </div>
    </div>
    <div class="containers ac_breadcrumb">
        <div class="ac_breadcrumb_item">
            <span>活动专区</span>
            <b>&gt;</b>
            <span class="my_small">英雄联盟</span>
        </div>
        <div class="ac_names">
            <ul>
                <li><span>游戏名称：</span></li>
                <li>
                    <a id="yxlm" href="javascript:void(0);">英雄联盟</a>
                </li>
                <li>
                    <a id="jl" href="javascript:void(0);">剑灵</a>
                </li>
                <li>
                    <a href="javascript:;">使命召唤</a>
                </li>
                <li>
                    <a href="javascript:;">逆战</a>
                </li>
                <li>
                    <a href="javascript:;">穿越火线</a>
                </li>
                <li>
                    <a href="javascript:;">地下城与勇士</a>
                </li>
                <li>
                    <button class="my_small">更多+</button>
                </li>
            </ul>
        </div>
        <div class="ac_names">
            <ul>
                <li><span>活动状态：</span></li>
                <li>
                    <a href="javascript:;">正在进行(<span>6</span>)</a>
                </li>
                <li>
                    <a href="javascript:;">即将开始(<span>0</span>)</a>
                </li>
                <li>
                    <a href="javascript:;">今日上架(<span>0</span>)</a>
                </li>
                <li>
                    <a href="javascript:;">已经结束(<span>129</span>)</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="containers">
        <div class="container_detime">
            <a class="my_small" href="javascript:;">默认排序</a>
            <a class="my_small" href="javascript:;">按时间排序</a>
        </div>
        <div id="active" class="active_table">
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/yx01.jpg" alt=""/>
                </a>
                <p>春夏服饰季</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/yx02.jpg" alt=""/>
                </a>
                <p>幸运召唤师</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/cf01.png" alt=""/>
                </a>
                <p>CF周边商城抢永久王者之心</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/cf02.jpg" alt=""/>
                </a>
                <p>1月至高领域</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/smzh01.jpg" alt=""/>
                </a>
                <p>异变风暴锻造工坊</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/smzh02.jpg" alt=""/>
                </a>
                <p>新版本：起源之战</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/nz01.jpg" alt=""/>
                </a>
                <p>感恩限时折扣</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/nz02.jpg" alt=""/>
                </a>
                <p>寒天之怒来袭</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/jl01.jpg" alt=""/>
                </a>
                <p>春天花花签到乐</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/jl02.jpg" alt=""/>
                </a>
                <p>萌物宝箱奇遇记</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/dxc01.jpg" alt=""/>
                </a>
                <p>DNF五一礼包来袭！</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="images/bg-img/dxc02.jpg" alt=""/>
                </a>
                <p>十周年典藏包</p>
                <p>活动时间：2019-03-07~2019-06-17</p>
            </div>
        </div>
        <div class="act_table_next">
            <ul>
                <li><a href="javascript:;">首页</a></li>
                <li><a href="javascript:;">上一页</a></li>
                <li><a href="javascript:;">1</a></li>
                <li><a href="javascript:;">2</a></li>
                <li><a href="javascript:;">3</a></li>
                <li><a href="javascript:;">4</a></li>
                <li><a href="javascript:;">5</a></li>
                <li><a href="javascript:;">下一页</a></li>
                <li><a href="javascript:;">末页</a></li>
            </ul>
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
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
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

.h_active{
    width:100%;
    min-width: 1200px;
    height:400px;
    background-image:url(../../public/images/bg-img/23.jpg);
    background-size:cover;
    background-position:center;
    position: relative;
    margin-bottom:20px;
}
.h_active>.containers::before{
    content:"";
    display:table;
}
.h_active>.containers>h3{
    width:239px;
    height:96px;
    background-color:rgba(0,0,0,0.6);
    text-align:center;
    line-height:96px;
    color:#fff;
    font-size:36px;
    border-left:2px solid #20d8da;
    margin-top:198px;
}
.h_active:hover h3{
    background: #20d8da;
}
.ac_breadcrumb{
    margin-top:20px;
}
.ac_breadcrumb_item{
    border:1px solid #bbb;
    text-align:left;
    height:40px;
    line-height:40px;
}
.ac_breadcrumb_item>span:first-child{
    font-size:20px;
    color:#222;
    margin-left:20px;
}
.ac_breadcrumb_item>b{
    color:#222;
}
.ac_breadcrumb_item>span:last-child{
    color:red;
}

.ac_names>ul{
    list-style-type: none;
    display:flex;
    margin-bottom:0;
    height:60px;
    line-height:60px;
}
.ac_breadcrumb>.ac_names:nth-child(2)>ul{
    border:1px solid #bbb;
    border-top:0;
    border-bottom:0;
}
.ac_breadcrumb>.ac_names+.ac_names{
    border-top:1px #bbb dashed;
    border-left:1px solid #bbb;
    border-right:1px solid #bbb;
    border-bottom:1px solid #bbb;
}
.ac_names>ul>li+li{
    margin-left:10px;
}
.ac_names>ul>li>a{
    border-left:1px solid #ddd;
    padding-left:10px;
    border-color:#666;
    font-size:12px;
    color:#333;
}
.ac_names>ul>li>a:hover{
    color:red;
}
.ac_names>ul>li:nth-child(2)>a{
    border:0;
}
.ac_names>ul>li:first-child{
    margin-left:60px;
    color:#222;
}
.ac_names>ul>li>button{
    height:25px;
    width:60px;
    line-height:20px;
    background:#fff;
    border:1px solid #ddd;
    margin-left:500px;
    cursor:pointer;
}
.ac_names>ul>li>button:hover{
    color:red;
}
.container_detime{
    text-align:left;
    margin-top:20px;
}
.container_detime>a{
    display:inline-block;
    width:100px;
    height:30px;
    border:1px solid #d7dde4;
    line-height:30px;
    color:#333;
    text-align:center;
    box-sizing:border-box;
}
.container_detime>a:first-child{
    background:#d7dde4 ;
    font-weight:bold;
}
.container_detime>a:last-child{
    margin-left:-4px;
}
.active_table{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.active_table>div{
    border:1px solid #d7dde4;
    margin-top:40px;
}
.active_table>div>p{
    margin-left:20px;
    cursor:pointer;
}
.active_table>div>p:nth-child(2){
    font-weight:bold;
    color:#222;
    font-size:15px;
   margin-top:10px;
}
.active_table>div>p:nth-child(3){
    font-size:14px;
    margin-top:0;
}
.active_table>div>p:hover{
    color:#f00;
}
.act_table_next>ul{
    margin-top:80px;
    list-style:none;
    display:flex;
    align-items: center;

}
.act_table_next>ul>li:first-child{
    margin-left:385px;
}

.act_table_next>ul>li{
    width:30px;
    height:30px;
    border:1px solid #d7dde4;
    text-align: center;
    line-height:25px;
}
.act_table_next>ul>li+li{
    margin-left:5px;
}
.act_table_next>ul>li:first-child,.act_table_next>ul>li:last-child{
    width:40px;
}
.act_table_next>ul>li:nth-child(2),.act_table_next>ul>li:nth-child(8){
    width:60px;
}
.act_table_next>ul>li:nth-child(3){
    background:#f74a4a;
}
.act_table_next>ul>li>a{
    font-size:12px;
    color:#222;
}
.act_table_next>ul>li:hover{
    border:1px solid #f00;
}
.act_table_next>ul>li:hover a{
    color:#f00;
}
.act_table_next>ul>li:nth-child(3) a{
    color:#fff;
    font-weight:bold;
}
</style>