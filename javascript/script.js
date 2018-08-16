var buttonArray = ['dog', 'cat', ' goldfish'];
function createButton() {
    for (i = 0; i < buttonArray.length; i++) {
        var button = $(`<button>${buttonArray[i]}</button>`);
        button.val(`${buttonArray[i]}`);
        button.data(`${buttonArray[i]}`);
        button.addClass('searchBtn');
        $("#buttons").append(button);
    }
}
createButton();
$(".searchBtn").on('click', function () {
    var input = $(this).val();
    console.log(input)
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=d4RfkXHMO0Rn1L5OuDEeBvnP57G8yt9x`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
})
$("#submit").on("click", function () {

})