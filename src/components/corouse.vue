<template>
  <div class="view">
            <ul>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>
            <a href="javascript:;" class="prev">&lt;</a>
            <a href="javascript:;" class="next">&gt;</a>
        </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  }
};
$(function(){
window.onload = function(){
    var index=1;
    // 添加节流阀
    var flag =true;

    function active(){
        if(flag==true) {
            flag = false;
            index++;
            //将所有li元素围绕x轴旋转
            $(".view ul>li").each(function (key, value) {
                $(this).css({
                    "transform": "rotateX(" + (-index * 90) + "deg)",
                    "transition-delay": (key * 0.2) + "s"
                })
            })
            setTimeout(function () {
                flag = true;
            }, 1000);
        }
    }
    var timer;
    function star(){
        timer = setInterval(active,1000);
    }
    star();
    $(".view").on("mouseenter",function(){
       clearInterval(timer);

    }).on("mouseleave",function(){
        star();
    })

    function move(num){
        if(flag==true) {
            flag = false;
            num==1?index++:index--;
            //将所有li元素围绕x轴旋转
            $(".view ul>li").each(function (key, value) {
                $(this).css({
                    "transform": "rotateX(" + (-index * 90) + "deg)",
                    "transition-delay": (key * 0.2) + "s"
                })
            })
            setTimeout(function () {
                flag = true;
            }, 1000);
        }
    }
    $(".next").click(function(){
        var num=1;
        move(num);
    })
    $(".prev").click(function(){
        var num=0;
        move(num);
    })

}

})
</script>
<style scoped>
 a{
        color:#555;
        text-decoration: none;
    }
  /*轮播*/
.view{
    width:100%;
    min-width:1200px;
    height:448px;
    margin:50px auto;
    position:relative;
}
.view ul{
    width:100%;
    height:100%;
    list-style:none;
    /*transform: rotate3d(1,1,0,-30deg);*/
    transform-style: preserve-3d;
    padding:0;
}
.view ul>li{
    width:20%;
    height:100%;
    float:left;
    position:relative;
    transform-style: preserve-3d;
    /*添加过渡效果*/
    transition: transform 0.5s;
    cursor:pointer;
}
.view ul>li>span{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
}
.view ul>li>span:nth-child(1){
   background-image:url("../../public/images/img/c0.png");
    /*往Z轴偏移*/
    transform: translateZ(224px);
}
.view ul>li>span:nth-child(2){
    background-image: url("../../public/images/img/c1.png");
    /*往Y轴偏移*/
    transform: translateY(-224px) rotateX(90deg);
}
.view ul>li>span:nth-child(3){
   background-image: url("../../public/images/img/c2.png");
     /*往Z轴偏移*/
    transform: translateZ(-224px) rotateX(180deg);
}
.view ul>li>span:nth-child(4){
    background-image: url("../../public/images/img/c3.png");
    /*往Y轴偏移*/
    transform: translateY(224px) rotateX(-90deg);
}
/*设置每个li元素的span*/
.view ul>li:nth-child(2)>span{
    background-position: -100% 0;
}
.view ul>li:nth-child(3)>span{
    background-position: -200% 0;
}
.view ul>li:nth-child(4)>span{
    background-position: -300% 0;
}
.view ul>li:nth-child(5)>span{
    background-position: -400% 0;
}
.view .prev,.next{
    position:absolute;
    top:250px;
    color:#00bcd4;
    font-size:36px;
    width:80px;
    height:80px;
    background:#fff;
    text-align:center;
    line-height:80px;
    border-radius:0 40px 40px 0;
    transition:all 0.1s;
    transform: translate(0,-50%);
}
.view .prev{
left:0;
}
.view .next{
    right:0;
    color:#00bcd4;
    border-radius:40px 0 0 40px;
}
.prev:hover,.next:hover{
    width:110px;
    color:#00bcd4;
}
</style>