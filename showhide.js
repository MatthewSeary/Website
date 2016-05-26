$(function () { // on document ready
    var div = $('#showOrHideDiv'); // cache <div>
    $('#action').click(function () { // on click on the `<a>`
        div.fadeToggle(1000); // toggle div visibility over 1 second
    });
});