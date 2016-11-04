window.onload = function() {
    var script = document.createElement("script");
    script.src = "jquery-3.1.0.min.js";
    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
          var result = $("#result");
          var k2 = $("#k2");
          var k4 = $("#k4");
          var k6 = $("#k6");
          var k8 = $("#k8");
          var k10 = $("#k10");
          var k12 = $("#k12");
          var k20 = $("#k20");
          
          $(".dice").on({
                mouseenter: function(){
                    $(this).css("background-color", "#544745");
                }, 
                mouseleave: function(){
                    $(this).css("background-color", "#7f6b68");
                }, 
                click: function(){
                    $(this).css("background-color", "#2a2322");
                }
          });
          
          function getRandom(dice) {
                var random = Math.round(Math.random() * (dice - 1) + 1);
                result.empty().text(random);
          }
    
        k2.click(function(){
            getRandom(2);
        });
        k4.click(function(){
            getRandom(4);
        });
        k6.click(function(){
            getRandom(6);
        });
        k8.click(function(){
            getRandom(8);
        });
        k10.click(function(){
            getRandom(10);
        });
        k12.click(function(){
            getRandom(12);
        });
        k20.click(function(){
            getRandom(20);
        });
    
      });
    };
    document.body.appendChild(script);
};