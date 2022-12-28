$(document).ready(function(){
    

$(".close1").click(function(){
    $(".popup").fadeOut("active");
    $(".popupBg").fadeOut("active");
});
$(".popupBtn").click(function(){
    $(".popup").fadeIn("active");
    $(".popupBg").fadeIn("active");
    
});

});


$(document).ready(function(){
    
$(".fa-th").mouseover(function(){
    $(".bigMenuBg").fadeToggle("fast", "linear");

  });
});

$("section").mouseover(function(){
    $(".bigMenuBg").fadeOut("fast", "linear");

$("nav div").mouseover(function(){
    $(".bigMenuBg").fadeOut("fast", "linear");

});
});
    





// $(".fa-th").click(function(){
//   $(".bigMenuBg").fadeOut();
// });

// });




