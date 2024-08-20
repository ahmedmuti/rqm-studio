$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    center: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

// const phoneInput = document.querySelector("#phoneInput");

// // Initialize intlTelInput
// const iti = window.intlTelInput(phoneInput, {
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js"
// });

// // Set initial country based on the user's location
// iti.promise.then(() => {
//     const countryCode = iti.getSelectedCountryData().iso2;
//     iti.setCountry(countryCode);
// });

// // Listen for the country change event
// phoneInput.addEventListener("countrychange", function () {
//     const countryCode = iti.getSelectedCountryData().iso2;
//     console.log("Selected country code:", countryCode);
// });

AOS.init();
AOS.refresh();