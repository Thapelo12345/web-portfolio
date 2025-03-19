$(document).ready(function () {
    $(".paragraph-cards").on("mousemove", function (event) {
      let card = $(this);
      let cardWidth = card.outerWidth();
      let cardHeight = card.outerHeight();
      let offsetX = event.offsetX;
      let offsetY = event.offsetY;
      let rotateY = (offsetX / cardWidth - 0.5) * 50; 
      let rotateX = (0.5 - offsetY / cardHeight) * 50;
  
      card.css("transform", `perspective(5000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });
  
    $(".paragraph-cards").on("mouseleave", function () {
      $(this).css("transform", "perspective(5000px) rotateX(0deg) rotateY(0deg)");
    });
  });
  