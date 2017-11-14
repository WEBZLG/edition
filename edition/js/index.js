;
$(function(){

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

})


