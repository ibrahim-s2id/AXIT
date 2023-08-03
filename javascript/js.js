$(document).ready(function () {
  $('.your-class').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
  });
});

var typed = new Typed(".mult", {
  strings: ["modern axure template for beautiful prototypes"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true
})

const hamburger = document.getElementsByClassName("menu-res")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]
const mobileNavs2 = document.getElementsByClassName("menu-res")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active"),
    mobileNavs2.classList.toggle("active");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $('.up').addClass('active')
      $('.nav-links').removeClass('active')
      $('.menu-res').removeClass('active')
    }
    else {
      $('.up').removeClass('active')
    }
  });
});

$(document).ready(function () {
  $("#go-to-top").click(function () {
    $('html, body').animate({
      scrollTop: $("#to-top").offset().top
    }, 1500);
  });
});

$(".slider").click(function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(":root").css({ "--main-color": "#ff8b38", "--color-section": "#f5f5f5" })
    $(".navbar , .footer ").css("background-color", "#000")
    $(":root").css("--main-color", "#ff8b38")
    $(".ic").css("color", "#000")
    $(".footer div .ic").css("color", "#fff")
    $(".card-price>div:nth-child(1)").css("background-color", "#333")
    $(".form-message form div:first-child input , .form-message form div:last-child textarea , .card-price>div:nth-child(2) div").css("background-color", "#fff")
  } else {
    $("body").addClass("dark");
    $(".navbar").css("background-color", "#0c2233")
    $(":root").css({ "--color-section": "#083d56" })
    $(".ic , .footer div .ic").css("color", "#fff")
    $(".card-price>div:nth-child(2) div , .footer").css("background-color", "#083d56")
    $(".card-price>div:nth-child(1) , .form-message form div:first-child input , .form-message form div:last-child textarea").css("background-color", "#0c2233")
  }
});
