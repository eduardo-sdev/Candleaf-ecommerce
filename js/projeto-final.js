$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 70){
            $("header").addClass('topo-fixo')
        }else{
            $("header").removeClass('topo-fixo')
        }
    })

    // menu
    $(".menu-hamburger").click(function(){
        $(".menu-hamburger, nav").toggleClass('show')
    })
    $(".sub-menu").click(function(){
        $(".sub-menu ul").toggleClass('show')
    })

    function resizableCards() {
        if($(window).width() <= 760){
            $(".section-products .card").hide()
            $(".section-products .card:hidden").slice(0, 4).show()
        } else {
            $(".section-products .card:hidden").show()
        }
    }
    $("#see-more-product").on("click", function() {
        if($(".section-products .card:hidden").length == 0){
            $(".section-products .card").hide()
            $(".section-products .card:hidden").slice(0, 4).show()
        } else {
            $(".section-products .card").slideDown()
            $("#see-more-product").html('See less')
        }
    })

    $(window).resize(function() {resizableCards()})
    resizableCards()

    // pagina de autenticacao
    $(".order-details").click(function(){
        $(".section-right").toggleClass('hide')
    })
    let quantity = 1
    $(".btn-more").on("click", function() {
        $("#quantity").val(++quantity)
        if ($("#quantity").val() >= 1) $(".btn-less").css('color', '#56b280')
    })
    $(".btn-less").on("click", function() {
        if ($("#quantity").val() > 1) $("#quantity").val(--quantity)
        if ($("#quantity").val() == 1) $(".btn-less").css('color', '#A7A7A7')
    })

    $('#form-authentication').validate({
        rules: {
            contact_email_phone: {required: true,},
            name: {required: true},
            second_name: {required: true},
            address: {required: true},
            city: {required: true},
            postal_code: {required: true},
        },
        messages: {
            contact_email_phone: {
                required: "Please provide E-mail or mobile phone number",
            },
            name: {required: "Please enter your name",},
            second_name: {required: "Please Enter your Second Name",},
            address: {required: "Please Enter your Addreess",},
            city: {required: "Please Enter your City",},
            postal_code: {required: "Field Required",},
        }
    })
    $('#postal_code').mask('00000');
})

