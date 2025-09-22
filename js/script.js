let savedEmail = "";
let savedPass = "";
let savedName = "";
let savedPhone = "";

$(document).ready(function () {
    $(".color-box").click(function () {
        let newImg = $(this).attr("data-img");
        $(".main-image img").attr("src", newImg);
    });


    // Show sign-up when clicking Sign In on site
    $(".click-me").click(function () {
        $(".mainpage , .container , .limited-edition , .steel-edition").hide(); // hide everything except forms
        $(".slpage,.sign-up").show();
    });

    $(".show-details").click(function () {
        $(".detailss").slideToggle()
        $(".slpage,.sign-up").hide();
    });
        $(".details-cont").click(function () {
            $(".main-details").slideToggle()
        $(".slpage,.sign-up").hide();
    });
    
     $(".logout-btn").click(function () {
            $(".click-me").show()
        $(".show-details , .detailss").hide();
    });

    $(".steel").click(function () {
        $(".mainpage, .slpage , .limited-edition").hide();
        $(".steel-edition , .container").slideDown()
    })

    $(".limited").click(function () {
        $(".mainpage, .slpage , .steel-edition").hide(); // hide everything except forms
        $(".limited-edition").show();
    });

    $(".to-login").click(function (e) {
        e.preventDefault();
        $(".sign-up").hide();
        $(".login").fadeIn(400).css("display", "flex");
    });

    $(".to-signup").click(function (e) {
        e.preventDefault();
        $(".login").hide();
        $(".sign-up").fadeIn(400).css("display", "flex");
    });



    // Handle signup
    $("#signupForm").submit(function (e) {
        e.preventDefault();
        savedEmail = $("#email").val();
        savedPass = $("#signupPass").val();
        savedName = $("#name").val();
        savedPhone = $("#phone").val();
        
        $("#profile2").text(savedName )
         $("#email2").text(savedEmail);
         $("#phone-no").text(savedPhone);
         $("#password").text(savedPass);



        $(".sign-up").hide();
        $(".login").fadeIn(400).css("display", "flex");
    });

    // Handle login
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        let email = $("#loginEmail").val();
        let pass = $("#loginPass").val();

        if (email === savedEmail && pass === savedPass) {
            $(".login").fadeOut(400, function () {
                alert("✅ Successfully logged in!");
                $(".mainpage,.sign-up ,.container").show();
                $(".slpage").hide();

                // 🔥 Change "Sign-In" to "Signed In"
                $(".click-me").hide();
                $(".show-details").show();
            });

            // Clear inputs after success
            $("#signupForm")[0].reset();
            $("#loginForm")[0].reset();
        } else {
            alert("❌ Wrong password or email. Try again.");
            $("#loginForm")[0].reset();
        }
    });
});
