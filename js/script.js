$(document).ready(function () {
    if ($('#map_canvas')) {
        setupGoogleMaps();
    }

    $('.bxslider').bxSlider({
        autoStart: false,
        auto: false,
        slideWidth: 932,
        video: true,
        infiniteLoop: false
    });

    $('.language').click(function () {

        var lang = $(this).attr('id');

        $.getJSON('lang/' + lang + '.json', updateLanguage);

    });

    $(function () {
        $('.menu a').click(function () {
            $('.menu a').removeClass();
            $(this).addClass('active');
        });
    });
});

/**
 * This function setups the Google Maps
 */
function setupGoogleMaps() {
    google.maps.event.addDomListener(window, 'load', initializeGoogleMaps);
}

/**
 * Definition of Maps location and icon Marker
 */
function initializeGoogleMaps() {
    // Location
    var myLatlng = new google.maps.LatLng(38.726466, -9.165056);
    var map_canvas = document.getElementById('map_canvas');

    // Map Params
    var map_options = {
        center: myLatlng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(map_canvas, map_options);

    // Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Sapateiro Expresso"
    });
}

/**
 * Updates the language of the page
 */
function updateLanguage(data) {

    console.log("aaaa");
    $("[key]").each(function () {
        $(this).html(data[$(this).attr('key')]);
    });
}