$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineering", "Back-end Developer", "Front-end Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// function btnClicked(){
//     document.location.href=""
// }

function sendEmail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value, 
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('gmail_sevenn','template_84ack2x',tempParams)
    .then(function(res){
        console.log(params)
        console.log("success", res.status)
    })

}
document.querySelector('button#btnMsg').addEventListener('click', () =>{
    nativeToast({
        message: 'Thank you for sending!',
        position: 'center',    
        rounded: true,
        timeout: 3000,
        type: 'success',
        icon: false,
        closeOnClick: true,
      })
})
sendMessage.addEventListener('input', ()=>{
    // var fromName = document.getElementById("fromName").value;
    // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(fromName.value.length > 0 && toName.value.length > 0 && msg.value.length > 0)
    {
        btnMsg.removeAttribute('disabled')
    }else{
        btnMsg.setAttribute('disabled','disabled');

    }
})
