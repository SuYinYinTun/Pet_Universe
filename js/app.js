$(document).ready(function(){

  $(".but").click(function(){
        	$(this).toggleClass("butj")
        });


  $(".hea").click(function(){
   
  

    if(window.confirm("Do you wanna adopt me?")){
      window.alert("Thanks you hooman!")
    }else{
      window.alert("Thanks for your donation hooman...")
    }
  })

  // Start Doctor Section

  $(window).scroll(function(){
    let xyz = $(this).scrollTop();
   
    if(xyz >= 3200){
     $(".dtops").addClass("dtop");
     $(".dp1s").addClass('dp1');
     $(".dp2s").addClass('dp2');
     $(".dp3s").addClass('dp3');
     $(".btds").addClass("btd");
    }else{
      $(".dtops").removeClass("dtop");
      $(".dp1s").removeClass('dp1');
      $(".dp2s").removeClass('dp2');
      $(".dp3s").removeClass('dp3');
      $(".btds").removeClass("btd");
    }
  })

   $(window).scroll(function(){
    let xyz1 = $(this).scrollTop();
  // console.log(xyz1)
    if(xyz1 >= 4000){
     $(".docm").addClass("doc");
     $(".doc1s").addClass('doc1');
     $(".doc2s").addClass('doc2');
     $(".doc3s").addClass('doc3');
     $(".btdds").addClass("btdd");
    }else{
     $(".docm").removeClass("doc");
     $(".doc1s").removeClass('doc1');
     $(".doc2s").removeClass('doc2');
     $(".doc3s").removeClass('doc3');
     $(".btdds").removeClass("btdd");
    }
  })

  // End Doctor Section




// Start Access Section
    
    var min = 0;
    const result = $("#result");
    var result1 = $("#result1");
    var result2 = $("#result2");
    var result3 = $("#result3");


    $("#incr").click(function(){
     min += 1;
   result.text(min)
    });

     $("#incr1").click(function(){
     min += 1;
      result1.text(min)
    });

      $("#incr2").click(function(){
     min += 1;
      result2.text(min)
    });

        $("#incr3").click(function(){
     min += 1;
      result3.text(min)
    });

    $("#dec").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }
       result.text(min)
    })  ;

      $("#dec1").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result1.text(min)
    })  ;

       $("#dec2").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result2.text(min)
    })  ;

         $("#dec3").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result3.text(min)
    })  ;

     //console.log(result.text());

    $("#ord1").click(function(){
      $("#medi1").text(result.text());

     });

   

    $("#ord2").click(function(){
       $("#medi2").text(result1.text());
     })

      $("#ord3").click(function(){
      $("#medi3").text(result2.text());
     })


     $("#ord4").click(function(){
      $("#medi4").text(result3.text());
     });

    
   var gettitle = document.getElementsByClassName("acctitle");
   var getcontent = document.qerySelectorAll(".accontent");

   for(var i=0;i<gettitle.length;i++) {
    gettitle[i].addEventListener("click",function(e){
      this.classList.toggle("act");
      var content = this.nextElementSibling;
      if(content.style.height){
        content.style.height = null;
      }else{
        content.style.height=content.scrollHeight + "px";
      }

    })
   }


     

   
  


    })
 


   
// End Access Section

// Start our event section
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});

//End our event section


// Start sponsor event section

// const up = document.querySelector(".up");
// const down = document.querySelector(".down");
// const carousel2 = document.querySelector(".carousel-container2");
// const track2 = document.querySelector(".track2");
// let width2 = carousel2.offsetWidth;
// let index2 = 0;
// window.addEventListener("resize", function () {
//   width2 = carousel2.offsetWidth;
// });
// down.addEventListener("click", function (e) {
//   e.preventDefault();
//   index2 = index2 + 4;
//   up.classList.add("show");
//   track2.style.transform = "translateY(" + index2 * -width2 + "px)";
//   if (track2.offsetWidth - index2 * width2 < index2 * width2) {
//     down.classList.add("hide");
//   }
// });
// up.addEventListener("click", function () {
//   index2 = index2 - 4;
//   down.classList.remove("hide");
//   if (index2 === 0) {
//     up.classList.remove("show");
//   }
//   track2.style.transform = "translateY(" + index2 * -width2 + "px)";
// });


$(document).ready(function () {
  var itemsMainDiv = ('.MultiCarousel');
  var itemsDiv = ('.MultiCarousel-inner');
  var itemWidth = "";

  $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
          click(0, this);
      else
          click(1, this)
  });

  ResCarouselSize();




  $(window).resize(function () {
      ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
      var incno = 0;
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr("id", "MultiCarousel" + id);


          if (bodyWidth >= 1200) {
              incno = itemsSplit[3];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 992) {
              incno = itemsSplit[2];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 768) {
              incno = itemsSplit[1];
              itemWidth = sampwidth / incno;
          }
          else {
              incno = itemsSplit[0];
              itemWidth = sampwidth / incno;
          }
          $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
          $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);
          });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");

      });
  }


  //this function used to move the items
  function ResCarousel(e, el, s) {
      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + ' ' + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
              translateXval = 0;
              $(el + ' ' + leftBtn).addClass("over");
          }
      }
      else if (e == 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + ' ' + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
              translateXval = itemsCondition;
              $(el + ' ' + rightBtn).addClass("over");
          }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
  }

});



//End sponsor event section