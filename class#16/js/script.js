$(function(){
    //code
    //fide
    $('#hide').click(function(){
        $('.text').hide(1000)
     })
     //show
     $('#Show').click(function(){
         $('.text').show(1000)
     })
     //hide show
     $('#Hideshow').click(function(){
        $('.text').toggle(1000)
     })
 
 
 
 
 
     //fadein
     $('#fadein').click(function(){
         $('.text').fadeIn(1000)
     })
 
     //fade out
     $('#fadeout').click(function(){
         $('.text').fadeOut(1000)
     })
 
     //fade toggle
     $('#fadetoggle').click(function(){
         $('.text').fadeToggle(1000)
 })
 
 
 
     //slide up
     $('#slideup').click(function(){
         $('.text').slideUp(1000)
     })
 
     //slide down
     $('#slidedown').click(function(){
         $('.text').slideDown(1000)
     })
 
     //slide toggle
     $('#slidetoggle').click(function(){
         $('.text').slideToggle(1000)
     })
 
 
 
     
 
     //addclass
     $('#addclass').click(function(){
         $('.text').addClass('text_two')         //html a jodi class na thake sudu css a rakte chai r ata main class sara samne asbe na
     })
 
     //removeclass
     $('#removeclass').click(function(){
         $('.text').removeClass('text_two')
     })
 
     //addremoveclass
     $('#addremoveclass').click(function(){
         $('.text').toggleClass('text_two')
     })
 })
 
 
 
 //countdown start
 
 $(function () {
     const second = 1000,
           minute = second * 60,
           hour = minute * 60,
           day = hour * 24;
   
     //I'm adding this section so I don't have to keep updating this pen every year :-)
     //remove this if you don't need it
     let today = new Date(),
         dd = String(today.getDate()).padStart(2, "0"),
         mm = String(today.getMonth() + 1).padStart(2, "0"),
         yyyy = today.getFullYear(),
         nextYear = yyyy + 1,
         dayMonth = "03/01/",
         birthday = dayMonth + yyyy;
     
     today = mm + "/" + dd + "/" + yyyy;
     if (today > birthday) {
       birthday = dayMonth + nextYear;
     }
     //end
     
     const countDown = new Date(birthday).getTime(),
         x = setInterval(function() {    
   
           const now = new Date().getTime(),
                 distance = countDown - now;
   
           document.getElementById("days").innerText = Math.floor(distance / (day)),
             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
   
           //do something later when date is reached
           if (distance < 0) {
             document.getElementById("headline").innerText = "It's my birthday!";
             document.getElementById("countdown").style.display = "none";
             document.getElementById("content").style.display = "block";
             clearInterval(x);
           }
           //seconds
         }, 0)
     }());




    //counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });