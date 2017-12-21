/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : Oct 23, 2016, 7:15:09 PM
    Author     : Imran Amanat
*/

/* global windows */



(function(){ var widget_id = 'A3ysxQVOEX';var d=document;var w=window;function l(){
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();


function AnTosection(){
    if (location.hash){
      
        if (location.hash == "#/demo" || location.hash == "#demo" ){
             location.href="#demo";
        }
       // console.log(location.hash);
    }
}    

$(document).ready(function(){
    

    
    
    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
    });
    
    //$("#sticker").sticky({topSpacing:0}).is-sticky('addviem');

   
});


window.addEventListener("scroll", function() {
  
    var top = this.scrollY;
    //var left = this.scrollX;
    var windowsHeight = $(document).height();
    var windowsWidth = $(document).width();
    var close = (windowsHeight-1600);


}, false);


function RequestingMail(){
    
    fullName = $('.mmfullName').val();
    companyName = $('.mmcompanyName').val();
    phoneNumber = $('.mmphoneNumber').val();
    eMail = $('.mmeMail').val();
    message = $('.mmmessage').val();
    $('.submit-btn').hide();
    
    $('.form-success').html("Sending Email");
    
    $.post("http://globalsni.com/assets/php/contact.php",
     {
        fullName : fullName,
        companyName : companyName,
        phoneNumber : phoneNumber,
        eMail : eMail,
        message : message
     },
    function(data){
            $('.form-success').html(data).delay(10000).fadeOut();;
            $('.mmfullName, .mmcompanyName, .mmphoneNumber, .mmeMail, .mmmessage').val('');
            $('.submit-btn').show()
            
    });
    
}
