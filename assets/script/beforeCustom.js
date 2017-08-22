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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-102482832-1', 'auto'); ga('send', 'pageview');
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KVKDDMJ');


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
    
    $.post("https://jalsonic.com/assets/php/contact.php",
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
