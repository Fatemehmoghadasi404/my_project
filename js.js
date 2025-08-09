تمام فایل های js
$(document).ready(function(){
  $(“.testimonial .indicators li”).click(function(){
    Var i = $(this).index();
    Var targetElement = $(“.testimonial .tabs li”);
    targetElement.eq(i).addClass(‘active’);
    targetElement.not(targetElement[i]).removeClass(‘active’);
            });
            $(“.testimonial .tabs li”).click(function(){
                Var targetElement = $(“.testimonial .tabs li”);
                targetElement.addClass(‘active’);
                targetElement.not($(this)).removeClass(‘active’);
            });
        });
$(document).ready(function(){
    $(“.slider .swiper-pagination span”).each(function(i){
        $(this).text(i+1).prepend(“0”);
    });
});
■■■■■■■■■■■
$(window).scroll(function() {
  Var scroll = $(window).scrollTop();
  $(“#js-hero img”).css({
    Width: (100 + scroll/5) + “%”
  })
})
■■■■■■■■■■■
// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
}); 
