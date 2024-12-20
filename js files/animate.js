$(document).ready(function(){
    let chArr = $('.character'); // Select all character elements
  
    // Function to animate each element in the array sequentially
    function animateElement(index) {
      return new Promise((resolve, reject) => {
        // Animate the current element
        $(chArr[index]).animate({
         top: '0',
         bottom: '0'
        }, 150, function() {
          resolve();
        });
      });
    }
  
    // Function to animate all characters in sequence
    async function animateAll() {
      for (let i = 0; i < chArr.length; i++) {

        if($(chArr[i]).css('top') !== '0' || $(chArr[i]).css('bottom') !== '0'){
            await animateElement(i);
        }
      }
    }
  
    animateAll();

    $('.social-media-links').each(function(){
      $(this).hover(
        function(){

       $('#bg-nav').children('.linkers').eq($(this).index()).css({
        visibility: 'visible',
        transform: 'translateX(120%)'
       })
          
        },//hover in 

       function(){
        
        $('#bg-nav').children('.linkers').eq($(this).index()).css({
          visibility: 'hidden',
          transform: 'translateX(-5%)'
         })

       }///hover out

      )
    })
  });
  