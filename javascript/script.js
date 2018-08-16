var buttonArray = ['dog', 'cat', ' goldfish'];

//create global event listener
function createButton() {
    $("#buttons").empty();
    for (i = 0; i < buttonArray.length; i++) {
        var button = $(`<button>`);
        button.addClass("buttons");
        button.attr("dataName", buttonArray[i]);
        button.text(buttonArray[i]);
        $("#buttons").append(button);
    }
}
$(".buttons").on('click', displayGiph());

function displayGiph() {
    var input = $(this).attr("data-name");
    console.log(input)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=d4RfkXHMO0Rn1L5OuDEeBvnP57G8yt9x&1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //append response to container div
        for (let i = 0; i < response.data.length; i++) {
            a = $("<img>");
            a.attr("src", response.data[i].images.downsized.url)
            a.text(response.data[i].title)
            $("#container").append(a);
        }
        console.log(response.data[i].images.downsized.url);
    });
}
$("#submit").on("click", function (event) {
    event.preventDefault();
    // push value into array
    gifRequest = $("#gifSearch").val().trim();
    buttonArray.push(gifRequest)

    //call create button
    createButton();

});

$(document).on("click", ".buttons", displayGiph);

createButton();