<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Drunken Monkey</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Tablo Noir">
    <meta name="designer" content="Tablo Noir">
    <!-- Google fonts CDN -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Source+Sans+Pro:300,400,600,700|Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Source+Sans+Pro:300,400,600,700|Roboto:400,700" rel="stylesheet" />
    <link rel="stylesheet" href="css/boot/bootstrap.min.css" />

    <!--Font-awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <!---- Fav icon ---->

    <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
    <link rel="manifest" href="../img/favicons/manifest.json">
    <link rel="mask-icon" href="../img/favicons/safari-pinned-tab.svg">
    <link rel="shortcut icon" href="../img/favicons/favicon.ico">

</head>

<body>
    <?php include 'includes/header.php'; ?>
    <style>
        .hh {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;

        }

        @media only screen and (max-width:800px) {
            .hh{
                margin-top: 200px;
            }
            .m1 {
              

            }

        }
    </style>

    <section class="menuItemsContainer flex h ">

        <div class="menuItemsSection flex hh">

            <div class="globalTargetList flex">
                <!-- 1 -->
                <div style="visibility: hiddn" class="menuItems m1" id="menuItemPopup" data-toggle="modal" data-target="#redSunFlower">
                    <img class="img-fluid" alt="smoothie bowl online" src="img/mc.png" />
                    <h6>MENU 1</h6>
                   
                </div>
                <!-- modal popup -->
                <div class="modal fade bd-example-modal-lg" id="redSunFlower" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-body">
                                <img src="img/menu2.jpeg" class="img-fluid menuPopupImg">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end of popup -->
                <!-- 2 -->
                <div class="menuItems" id="menuItemPopup" data-toggle="modal" data-target="#dry-fruit-bowl">
                    <img class="img-fluid" alt="smoothie shop near me" src="img/mojito.png" />
                    <h6>MENU 2</h6>
                    <!-- <p><strong>A wholesome bowl from the deserts of Sahara packed</strong>Blended with dates, figs, cashews,
                        almonds, Blended with apple, chikoo, coconut milk, banana, topped with granola, pumpkin seeds and
                        pecan
                        nuts</p> -->
                </div>
                <!-- modal popup -->
                <div style="" class="modal fade bd-example-modal-lg" id="dry-fruit-bowl" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-body">
                                <img src="img/menu3.png" class="img-fluid menuPopupImg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menuItems" id="menuItemPopup" data-toggle="modal" data-target="#dry-fruit-bowl2">
                    <img class="img-fluid" alt="smoothie shop near me" src="img/menu2.png" />
                    <h6>MENU 3</h6>
                  
                </div>
                <!-- modal popup -->
                <div style="" class="modal fade bd-example-modal-lg" id="dry-fruit-bowl2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-body">
                                <img src="img/menu.JPG" class="img-fluid menuPopupImg">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end of modal popup -->
              
                <!-- modal popup -->



            </div>
        </div>
    </section>
    <script src="js/jquery-3.1.1.min.js"></script>
    <!-- bootstrap js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <!-- Scroll magic -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js'></script>
    <!--Greensock Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
    <!-- custom js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/CSSRulePlugin.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

    <script type="text/javascript" src="js/menu-animations.js"></script>


</body>

</html>