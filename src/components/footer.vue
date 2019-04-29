<template>
  <div class="footer_body">
    <div class="containers">
        <div class="d-flex justify-content-between">
            <div class="">
                <img class="pb-5" src="images/core-img/logo2.png" alt="">
                <p class="pt-3 p1">
                    Lorem ipsum dolor坐下来，精致的adipistur elit。Mauris velit arcu，
                    scelerisque dignissim massa quis，mattis facilisis erat。Aliquam
                    erat volutpat。Sed的效率直径为interdum ultricies
                </p>
            </div>
            <div class="">
                <h3 class="pb-5 text-white">游戏评论</h3>
                <ul class="list-unstyled">
                    <li><a href="javascript:;">厄运</a></li>
                    <li><a href="javascript:;">侠盗猎车手</a></li>
                    <li><a href="javascript:;">血源性</a></li>
                    <li><a href="javascript:;">战争之神</a></li>
                    <li><a href="javascript:;">角色5</a></li>
                </ul>
            </div>
            <div class="">
                <h3 class="pb-5 text-white">在线服务平台</h3>
                <ul class="list-unstyled">
                    <li><a href="javascript:;">Testimanials</a></li>
                    <li><a href="javascript:;">评测</a></li>
                    <li><a href="javascript:;">新游戏</a></li>
                    <li><a href="javascript:;">论坛</a></li>
                    <li><a href="javascript:;">联系</a></li>
                </ul>
            </div>
            <div class="">
                <ul class="list-unstyled">
                    <li>
                        <img src="images/core-img/zsdjc.png" alt=""/>
                        <p class="ml-2 text-white">掌上游戏城</p>
                    </li>
                    <li>
                        <img src="images/core-img/wechatdjc.png" alt=""/>
                        <p class="ml-2 text-white">掌上公众号</p>
                    </li>
                </ul>
            </div>
    </div>
    </div>
    <div class="footer_black w-100 ">
        <div class="containers pt-4">
            <div class="row m-0">
                <div class="col-8 p-0">
                    <p class="w-50">版权所有© 2019 - Colorlib保留所有权利 |
                        更多咨询游戏之家 - 认真做好每一款游戏</p>
                </div>
                <div class="col-4 p-0">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li><a href="javascript:;">主页</a></li>
                        <li><a href="javascript:;">游戏</a></li>
                        <li><a href="javascript:;">周边</a></li>
                        <li><a href="javascript:;">评测</a></li>
                        <li><a href="javascript:;">联系</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
  .footer_body{
    width:100%;
    min-width:1200px;
    background:#0c0c0c;
    margin-top:5px;
}
.footer_body .containers{
    width:1200px;
    margin:0 auto;
}
.footer_body>div:first-child>div:first-child>div{
    width:260px;
    padding-top:80px;
    text-align:left;
}
.footer_body>div>div:first-child>div:first-child{
    margin-left:10px;
}
.footer_body>.containers ul>li{
    line-height:1.8rem;
}
.footer_body>.containers ul>li>a,.footer_black>.containers p,.footer_black>.containers ul>li>a{
    color:#808080;
}
.footer_body>.containers ul>li>a:hover,.footer_black>.containers ul>li>a:hover{
    color: #00bcd4;
}
.footer_body>.containers div>p{
    line-height:1.8rem;
    color:#808080;
}
.footer_black{
    text-align:left;
    background: #000;
}

</style>