<template>
  <footer class="footer_body">
    <div class="container">
        <div class="row pt-5 pb-5 ">
            <div class="col-lg-3 col-md-6 col-sm-12 l1">
                <img class="pb-5" src="images/core-img/logo2.png" alt="">
                <p class="pt-3">
                    Lorem ipsum dolor坐下来，精致的adipistur elit。Mauris velit arcu，
                    scelerisque dignissim massa quis，mattis facilisis erat。Aliquam
                    erat volutpat。Sed的效率直径为interdum ultricies
                </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 l2">
                <h3 class="pb-5 text-white">游戏评论</h3>
                <ul class="list-unstyled">
                    <li><a href="#">厄运</a></li>
                    <li><a href="#">侠盗猎车手</a></li>
                    <li><a href="#">血源性</a></li>
                    <li><a href="#">战争之神</a></li>
                    <li><a href="#">角色5</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 l3">
                <h3 class="pb-5 text-white">在线服务</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Testimanials</a></li>
                    <li><a href="#">评测</a></li>
                    <li><a href="#">新游戏</a></li>
                    <li><a href="#">论坛</a></li>
                    <li><a href="#">联系</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12  l4">
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
        <div class="container pt-4">
            <div class="row m-0">
                <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                    <p class="w-50">版权所有© 2019 - Colorlib保留所有权利 |
                        更多咨询游戏之家 - 认真做好每一款游戏</p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li><a href="#">主页</a></li>
                        <li><a href="#">游戏</a></li>
                        <li><a href="#">周边</a></li>
                        <li><a href="#">评测</a></li>
                        <li><a href="#">联系</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
.my_small{
    font-size: 0.8rem;
}
.l2,.l3,.l4{
    padding-left:10rem;
}
.footer_body[data-v-2bd3e006]{
    background:#0c0c0c;
}
.footer_body>.container ul>li{
    line-height:1.8rem;
}
.footer_body>.container ul>li>a,.footer_black>.container p,.footer_black>.container ul>li>a{
    color:#808080;
}
.footer_body>.container ul>li>a:hover,.footer_black>.container ul>li>a:hover{
    color: #20d8da;
}
.footer_body>.container div>p{
    line-height:1.8rem;
    color:#808080;
}


.footer_black{
    background: #000;
}
</style>