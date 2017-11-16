
$(function(){
    ifImg();//图片舒展
    tabNav($(".tab_nav .tab"),$(".news_list"))    // tab导航
// tab导航
    function tabNav(dom,box){
        dom.on("click",function(){
           $(this).addClass("b_color").siblings().removeClass("b_color");
           $(this).find(".line").addClass("active").parent().siblings().find(".line").removeClass("active");
            var i =$(this).index();
            box.find(".list_box").eq(i).show().siblings().hide();
        })
    }
    // 点击收起展开图片
    function ifImg(){
        $('#history_process').on('click','.if_img',function(){
            var currentImg = $(this).parents('.right_content').find('.news_img');
            if (currentImg.is(":hidden")) {
                $(this).html('收起图片');
            }else{
              $(this).html('展开图片');  
            }
            currentImg.stop().slideToggle();
        })
    };
})