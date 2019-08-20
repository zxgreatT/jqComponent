var nowIndex = 0;
var lock = true;
var len = jQuery('.sliderPage li').length - 1;
var moveWidth = $('.wrapper').width();
var timer = null;
function init() {
    sliderAuto();
    bindEvent();
}
init();
// 实现自动播放
function sliderAuto() {
     clearTimeout(timer);
     timer = setTimeout(function(){
         move('btn rightBtn');
     },2000)
    
}
// 实现点击切换
function bindEvent() {
    $('.sliderIndex span').add('.leftBtn').add('.rightBtn').on('click', function () {
        if ($(this).attr('class') == 'btn leftBtn') {
            move('btn leftBtn')
        } else if ($(this).attr('class') == 'btn rightBtn') {
            move('btn rightBtn')
        }
        else {
            var index = $(this).index();
            move(index);
        }
    })

}
// 实现点击切换效果
function move(cla) {
    if(lock){
        lock = false;
    if(cla == 'btn leftBtn' || cla == 'btn rightBtn'){
        if(cla == 'btn leftBtn'){
            if(nowIndex == 0){
                $('.sliderPage').css({left:-len*moveWidth});
                nowIndex = len-1 ;
            }else{
            nowIndex = nowIndex - 1;
            }
        }else{
            if(nowIndex == len-1){
               $('.sliderPage').animate({
                   left:-(len*moveWidth)
               },function(){
                   $(this).css({left:0});
                   sliderAuto();
               });
                nowIndex = 0;
            }else{
            nowIndex = nowIndex + 1;
            }
        }
    }else{

        nowIndex = cla;
    }
    slider();
    changeStyle();
}
}
//运动动画
function slider(){
    console.log(nowIndex);
    $('.sliderPage').animate({
        left:-(nowIndex*moveWidth)+'px',
    },function(){
        sliderAuto();
        lock = true;
    })
}
//切换标签的样式
function changeStyle(){
    $('.active').removeClass('active');
    $('.sliderIndex span').eq(nowIndex).addClass('active')
}
$('.wrapper').on('mouseenter',function(){
    clearTimeout(timer);
}).on('mouseleave',function(){
    sliderAuto();
    lock = true;
})