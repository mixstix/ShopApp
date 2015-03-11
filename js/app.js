$(document).ready(function() {
    
    function ticked() {
        console.log('ticked');
        $('.unticked').click(function() {
            console.log('click tick');
            $(this).removeClass('unticked');
            $(this).addClass('ticked');
        });
    }
    
    $('#add').click(function() {
        var itemHtml = '<div class="item-row">' + '<div class="unticked"></div>' + '<div class="item">' + $('input#add-item').val() + '</div>' + '<button id="delete">DEL</button>' + '<hr class="item-separator">' + '</div>';
        $('.list').append(itemHtml);
        $('input#add-item').val("");
        ticked();
        return false;
    });
    

    
//    $('.unticked').click(function() {
//        $(this).removeClass('.unticked');
//        $(this).addClass('.ticked');
//    });
//    

    
//    $('.unticked').click(function() {
//        $(this).toggleClass("hovered"); 
//    });

    
//    $('item-row').on('click', '.unticked' function(event) {
//        event.preventDefault(); 
//        alert("you clicked it sucessfully!!!"); 
//    });
//    
});