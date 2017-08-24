
<div class="container">
    <div class="row">
        <div class="logo">
            <img src="assets/images/headerlogo.png" height="51" width="130" />
        </div>

        <nav class="js-navbar jalsonic-nav sr-navbar">
            <ul id="top-menu" class="js-list">
                <a href="index.php#about"><li class="menu">About Us</li></a>
              <a href="index.php#features"><li class="menu">Cyber Security Solutions</li></a>
              <a href="index.php#benefits"><li class="menu">Consulting Services</li></a>
              <a href="index.php#price"><li class="menu">Clients</li></a>
            </ul>
        </nav>

        <div class="mobile-nav"><i class="fa fa-bars"></i></div>
        
        
                    <div class="mobile-nav-off"> <i class="fa fa-close close"></i> </div>
                    <ul class="mobile-nav-con">

                    <a href="index.php#about" class="white click-nav-off"><li class="mobile-menu">About Us</li></a>
                    <a href="index.php#features" class="white click-nav-off"><li class="mobile-menu">Cyber Security Solutions</li></a>
                    <a href="index.php#benefits" class="white click-nav-off"><li class="mobile-menu">Consulting Services</li></a>
                    <a href="index.php#price" class="white click-nav-off"><li class="mobile-menu">Clients</li></a>

                    </ul>
                    
                    <a href="#moveTop"><div class="move-arrow-up"><i class="fa fa-arrow-up"></i></div></a>
 
                    
    </div>
</div>

        <script> 
                    $(document).ready(function(){
                        $(".mobile-nav").click(function () {
                            $('.mobile-nav-off').animate({"width": "100%"}, "fast");
                            $('.mobile-nav-con').animate({"width": "70%"}, "fast");
                        });

                        $(".mobile-nav-off, .click-nav-off").click(function () {
                            $('.mobile-nav-off').animate({"width": "0%"}, "fast");
                            $('.mobile-nav-con').animate({"width": "0%"}, "fast");
                        });
                    });
                                    
        </script>