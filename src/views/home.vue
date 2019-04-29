<template>
  <div class="home">
    <myHeader></myHeader>
    <div class="containers breadCrumb_home">
      <a class="my_small" href="javascript:;">首页</a>
          >
      <b class="my_small">个人中心</b>
    </div>
    <div class="containers home_container">
        <div class="aside">
            <dl>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/01.png" alt=""/>
                        个人中心首页
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/02.png" alt=""/>
                        我的特权
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/03.png" alt=""/>
                        我的任务
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/04.png" alt=""/>
                        我的订单
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/05.png" alt=""/>
                        我的道聚城白条
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/06.png" alt=""/>
                        我的周边订单
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/07.png" alt=""/>
                        我的收货地址
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/08.png" alt=""/>
                        我的购物点
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/09.png" alt=""/>
                        我的优惠券
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/10.png" alt=""/>
                        我的聚豆
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/11.png" alt=""/>
                        我的消息
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/12.png" alt=""/>
                        我的关注
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/13.png" alt=""/>
                        我的功能性道具
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/14.png" alt=""/>
                        领取魅力值
                    </a>
                </dd>
                <dd>
                    <a href="javascript:;">
                        <img src="images/home-img/15.png" alt=""/>
                        我的票务
                    </a>
                </dd>
            </dl>
        </div>
        <div class="home_right ">
            <div class="comm_info">
                <div class="comm_info_center">
                  <div class="information">
                      <div>
                          <div class="info_img">
                              <img src="images/home-img/g.jpg" alt=""/>
                                <div class="face_hover_box">
                                    <a href="javascript:;">完善资料</a>
                                </div>
                          </div>
                          <div class="info_information">
                                <p>
                                    <span class="info_font">当前用户：</span>
                                    <strong class="strong">{{uname}}</strong>
                                    
                                </p>
                              <div>
                                  <a href="javascript:;">
                                      <img src="images/home-img/xyue.png"/>
                                  </a>
                                  <span class="info_font">非心悦会员</span>
                              </div>
                          </div>
                      </div>
                      <div class="phone_cont">
                          <a href="javascript:;">
                              <img src="images/home-img/phone.png"/>
                              <span class="info_font">未绑定</span>
                          </a>
                      </div>
                  </div>
                    <div class="grow">
                        <div class="grow_info">
                            <p>
                                <span>成长值</span>
                                <strong class="strong">2334</strong>
                                <span>距离升级还需</span>
                                <strong class="strong">47666</strong>
                                <span>成长值</span>
                            </p>
                        </div>
                        <div class="grow_ladder">
                            <div class="ladder">
                                <span></span>
                            </div>
                            <p>
                                <span class="info_font">非会员</span>
                                <span class="info_font">【10000-49999】</span>
                                <span class="info_font">心悦VIP1</span>
                                <span class="info_font">心悦VIP2</span>
                                <span class="info_font">心悦VIP3</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="person">
                    <span>个人账户：</span>
                    <img src="images/home-img/idou.png"/>
                    <span>0</span>
                </div>
            </div>
            <div>
                <div class="lastweek">
                    <div class="newly">
                        <p>最近登陆的游戏</p>
                        <div class="newly_games">
                            <a href="javascript:;">
                                <img src="images/home-img/cf.jpg" alt=""/>
                                <span>穿越火线</span>
                            </a>
                            <a href="javascript:;">
                                <img src="images/home-img/lol.jpg" alt=""/>
                                <span>英雄联盟</span>
                            </a>
                            <a href="javascript:;">
                                <img src="images/home-img/dnf.jpg" alt=""/>
                                <span>地下城与勇士</span>
                            </a>
                            <a href="javascript:;">
                                <img src="images/home-img/gdwj.jpg" alt=""/>
                                <span>孤岛危机</span>
                            </a>
                        </div>
                    </div>
                    <div class="addMoney">
                        <p>本月累计消费</p>
                        <div class="addMoney_details">
                            <div>
                                <ul>
                                    <li>本月消费总金额(元)</li>
                                    <li>0</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>本月成功订单数(笔)</li>
                                    <li>0</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>本月消费排名</li>
                                    <li>暂无排名</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="save_money">
                    <span class="info_font">本月EGAME为您省了：</span>
                    <span>0 Q币</span>
                </div>
                <div class="centent_box">
                    <div class="centent_box_power">
                        <span class="info_font my_power">我的特权</span>
                        <i class="top_red"> </i>
                        <a class="heard_home" href="javascript:;">心悦游戏家</a>
                    </div>
                    <div class="power_img">
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/p1.png" alt="p1_1"/>
                                </a>
                            </dt>
                            <dd><p>专享优惠券</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/p2.png" alt="p2_1"/>
                                </a>
                            </dt>
                            <dd><p>首次消费礼</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/p3.png " alt="p3_1"/>
                                </a>
                            </dt>
                            <dd><p>道具逢十礼</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/p4.png" alt="p4_1"/>
                                </a>
                            </dt>
                            <dd><p>消费成长礼</p></dd>
                        </dl>
                    </div>
                </div>
                <div class="centent_box my_centent_box">
                    <div class="centent_box_power">
                        <span class="info_font my_power">我的任务</span>
                        <i class="top_red"></i>
                    </div>
                    <div class="my_centent_img">
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/m1.png" alt="m1_1"/>
                                </a>
                            </dt>
                            <dd><p>每日签到</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/m2.png" alt="m2_1"/>
                                </a>
                            </dt>
                            <dd><p>完善资料</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/m3.png" alt="m3_1"/>
                                </a>
                            </dt>
                            <dd><p>下载APP</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/m4.png" alt="m4_1"/>
                                </a>
                            </dt>
                            <dd><p>每日登录APP</p></dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/m5.png" alt="m5_1"/>
                                </a>
                            </dt>
                            <dd><p>APP首笔消费</p></dd>
                        </dl>
                    </div>
                </div>
                <div class="table_row">
                    <img src="images/home-img/emotion.png"/>
                    <div class="table_row_inf">
                        <p>近期暂无订单信息！</p>
                        <p>您可以：</p>
                        <p>1、进入道聚城首页更多折扣道具等着你，
                            <a href="javascript:;">立即前往&gt;</a>
                        </p>
                    </div>
                </div>
                <div class="like">
                    <div class="guess">
                        <span class="guess_logo">猜你喜欢</span>
                        <a class="guess_change" href="javascript:;">换一换&gt;&gt;</a>
                    </div>
                    <div class="guess_product">
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/12.jpg"/>
                                    <p class="l_g_name">索尼PlayStation 4游戏手柄</p>
                                </a>
                            </dt>
                            <dd>
                                <p class="l_g_price">商场价：<b>&yen;368.00</b></p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/timg.jpg"/>
                                    <p class="l_g_name">名龙堂i7 9700K/RTX2070</p>
                                </a>
                            </dt>
                            <dd>
                                <p class="l_g_price">商场价：<b>&yen;12999.00</b></p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/4.jpg"/>
                                    <p class="l_g_name">正当防卫</p>
                                </a>
                            </dt>
                            <dd>
                                <p class="l_g_price">商场价：<b>&yen;128.00</b></p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/11.jpg"/>
                                    <p class="l_g_name">暗黑血统[狂热]</p>
                                </a>
                            </dt>
                            <dd>
                                <p class="l_g_price">商场价：<b>&yen;168.00</b></p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <a href="javascript:;">
                                    <img src="images/home-img/26.jpg"/>
                                    <p class="l_g_name">任天堂Switch Pro</p>
                                </a>
                            </dt>
                            <dd>
                                <p class="l_g_price">商场价：<b>&yen;658.00</b></p>
                            </dd>
                        </dl>
                    </div>
                </div>
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
    return{
        uname:"无"
    }
  },
  created(){
      var uname =sessionStorage.getItem("uname");
        console.log(uname);
        if(uname){
            this.uname=sessionStorage.getItem("uname");
        }
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
.home{
  text-align: left;
 /* background:#f3f4f6 url("../../public/images/home-img/wrap_bg.png") no-repeat 0 185px;*/
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
.breadCrumb_home{
    padding-left:22px;
    height:50px;
    line-height: 40px;
}
.breadCrumb_home>a{
    color:#555;
}
.home_container>div{
    float:left;
}
.home_container::after{
    content: "";
    display: block;
    clear:both;
}
.aside{
    width:228px;
    height:auto;
    border:1px #e6e9ef solid;
    border-bottom: none;
    background:#fff;
    box-sizing:border-box;
}
.aside>dl{
    margin-bottom:0;
}
.aside>dl>dd{
    margin-bottom:0;
    border-bottom:1px #e6e9ef solid;
}
.aside>dl>dd>a{
   color: #3a3f4a;
    display: block;
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    border-left: 6px solid #fff;
    padding-left: 12px;
}
.aside>dl>dd>a>img{
    padding-right:5px;
}
.home_right{
    width:962px;
    margin-left:10px;
    box-sizing:border-box;
}
.comm_info{
    width:100%;
    height:173px;
    border:1px #e6e9ef solid;
    background: #fff;
}
.comm_info_center{
    height:125px;
}
.comm_info_center>div{
    float:left;
}
.comm_info_center::after{
    content: "";
    display: block;
    clear:both;
}
.information{
    padding-left:30px;
}
.information >div>div{
    float:left;
}
.info_information>div{
    margin-top:-5px;
}
.information .info_img{
    position:relative;
    width:100px;
    height:100px;
}
.information .info_img>img{
    width:100px;
    height:100px;
    margin-top:15px;
    border-radius: 50%;
}
.info_img .face_hover_box{
    display:none;
    top:15px;
    position:absolute;
    text-align:center;
    line-height:100px;
    width:100px;
    height:100px;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
}
.information:hover .face_hover_box{
    display:block;
}
.info_img .face_hover_box>a{
    font-size:14px;
    color: #fff;
}
.information .info_information{
    width:158px;
    margin-left:10px;
    margin-top:20px;
}
.strong{
    color: #f74a4a;
    font-size: 15px;
}
.info_font{
    font-size:13px;
}
.phone_cont{
    height:27px;
    margin-top:85px;
}
.phone_cont:hover a{
    color:#e43333;
}
.comm_info_center .grow{
    width:568px;
    height:100px;
    margin-top:25px;
    margin-left:60px;
}
.grow .grow_info{
    padding-top:10px;
}
.grow_info>p>span{
    font-size:15px;
}
.grow_info>p>span:nth-child(3){
    margin-left:110px;
}
.grow_ladder{
    margin-top:-10px;
}
.grow_ladder .ladder{
    width: 547px;
    height:25px;
    background: url("../../public/images/home-img/lodder1.png") no-repeat;
}
.grow_ladder .ladder>span{
    display:block;
    position:relative;
    top:11px;
    width:28px;
    height:26px;
    background: url("../../public/images/home-img/lodder.png") no-repeat;
}
.grow_ladder >p>span:first-child{
    margin-left:-12px;
}
.grow_ladder >p>span:nth-child(2){
    margin-left:30px;
}
.grow_ladder >p>span:nth-child(3){
    margin-left:8px;
}
.grow_ladder >p>span:nth-child(4){
    margin-left:110px;
}
.grow_ladder >p>span:nth-child(5){
    margin-left:115px;
}
.person{
    width:100%;
    height:48px;
    background: #e6e9ef;
    line-height: 48px;
}
.person>span:first-child{
    font-size:13px;
    padding-left:15px;
}
.person>img{
    padding-left:30px;
}
.person>span:last-child{
    display:inline-block;
    font-size:18px;
}
.lastweek{
    margin-top:15px;
}
.lastweek>div{
    float:left;
}
.lastweek::after{
    content:"";
    display:block;
    clear:both;
}
.newly{
    width:324px;
    height:150px;
    border:1px #e6e9ef solid;
    background:#fff;
    box-sizing: border-box;
}
.newly>p{
    width:324px;
    height:41px;
    border-bottom:1px #e6e9ef solid;
    padding-left:15px;
    font-size:15px;
    line-height:41px;
}
.newly>.newly_games{
    padding-left:15px;
}
.newly>.newly_games>a{
    float:left;
    width:50px;
    font-size:12px;
}
.newly>.newly_games>a:hover span{
    color:red;
}
.newly>.newly_games>a+a{
    margin-left:20px;
}
.addMoney{
    width:623px;
    height:150px;
    border:1px #e6e9ef solid;
    background:#fff;
    margin-left:15px;
}
.addMoney>p{
    width:623px;
    height:41px;
    border-bottom:1px #e6e9ef solid;
    padding-left:15px;
    font-size:15px;
    line-height:41px;
}
.addMoney_details>div{
    float:left;
    width:185px;
}
.addMoney_details>div:first-child{
    margin-left:60px;
}
.addMoney_details>div>ul{
    list-style-type: none;
}
.addMoney_details>div>ul>li{
    font-size:13px;
}
.addMoney_details>div:nth-child(1)>ul>li:last-child,
.addMoney_details>div:nth-child(2)>ul>li:last-child{
    font-size:28px;
    color: #f74a4a;
}
.addMoney_details>div:nth-child(3)>ul>li:last-child{
    margin-top:15px;
    padding-bottom:6px;
}
.save_money{
    width:962px;
    height:46px;
    background: #fffaeb;
    border:1px #f6ecca solid;
    margin:20px 0;
    line-height:46px;
}
.save_money>span:last-child{
    color: #f74a4a;
    font-size: 18px;
}
.centent_box{
    position:relative;
    width:962px;
    height:252px;
    background:#fff;
    border:1px #e6e9ef solid;
}
.centent_box .centent_box_power{
    margin:20px 25px 0;
    width:912px;
    height:25px;
    border-bottom:1px #e6e9ef solid;
}
.my_power{
    display:inline-block;
    height:23px;
    color:#1994eb;
    font-size:15px;
    font-weight:bold;
    border-bottom:1px red solid;
}
.top_red{
    position: absolute;
    left: 90px;
    top: 26px;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    overflow: hidden;
    background-color: red;
}
.heard_home{
    font-size:13px;
    font-weight:bold;
    color:#0066ff;
    position:absolute;
    right:20px;
}
.power_img{
    margin:15px 25px 0;
    width:912px;
}
.power_img>dl{
    width:228px;
    height:170px;
    float:left;
    border:1px #e6e9ef solid;
    text-align: center;
}
.power_img>dl:first-child>dt{
    margin-top:42px;
}
.power_img>dl>dt{
    margin-top:35px;
}
.power_img>dl>dd>p{
    margin-top:10px;
    font-size:14px;
}
.power_img:after{
    content:"";
    display:block;
    clear:both;
}
.my_centent_box{
    margin-top:15px;
}
.my_centent_box>.my_power{
    border-bottom:10px red solid;
}
.my_centent_img{
    margin:20px 25px 0;
    width:912px;
}
.my_centent_img>dl{
    float:left;
    width:182px;
    text-align: center;
}
.my_centent_img>dl>dd>p{
    margin-top:10px;
    font-size:14px;
}
.table_row{
    margin-top:10px;
    width:962px;
    height:234px;
    background:#fff;
    /**border:1px #e6e9ef solid;**/
}
.table_row>img{
    float: left;
    margin:70px 0 0 200px;
}
.table_row .table_row_inf{
    float: left;
    margin-top:85px;
    margin-left:10px;
}
.table_row_inf>p{
    font-size:12px;
}
.table_row_inf>p:first-child{
    font-size:13px;
    color:#222;
    font-weight:bold;
}
.table_row_inf>p:nth-child(2){
    margin-top:10px;
}
.table_row_inf>p:nth-child(3)>a{
    color:#1994eb;
}
.table_row:after{
    content:"";
    display:block;
    clear:both;
}
.like{
    margin-top:15px;
    width:962px;
    height:253px;
    background:#fff;
    border:1px #e6e9ef solid;
}
.guess{
    width:962px;
    height:37px;
    border-bottom:1px #e6e9ef solid;
}
.guess_logo{
    float:left;
    font-size:14px;
    font-weight:bold;
    height:37px;
    line-height:37px;
    padding-left:15px;
    color:#1994eb;
}
.guess_change{
    float:right;
    font-size:14px;
    padding-right:10px;
    color:#1994eb;
    line-height:37px;
}
.guess_change:hover{
    color:#1994eb;
}
.guess_product{
    margin:40px 0 0 60px;
}
.guess_product>dl{
    float:left;
    width:164px;
    text-align:center;
}
.l_g_name{
    font-size:13px;
    color:#333;
    margin-top:5px;
}
.l_g_name:hover{
    color:#f74a4a;
}
.l_g_price{
    font-size:13px;
    margin-top:10px;
    color:#f74a4a;
}
</style>
