$('.menu li').mouseenter(function(){
    $(this).children('.sub_menu').stop().slideDown()
})

$('.menu li').mouseleave(function(){
    $(this).children('.sub_menu').stop().slideUp()
})
