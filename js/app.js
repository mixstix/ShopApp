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
        var itemHtml = '<div class="item-row">' + '<div class="unticked"></div>' + '<div class="item">' + $('input#add-item').val() + '</div>' + '<button class="delete">DEL</button>' + '<hr class="item-separator">' + '</div>';
        $('.list').append(itemHtml);
        $('input#add-item').val("");
        ticked();
        deleteBtn();
        return false;
    });
    
//    function addItem() {
//	var newItem = $('input#add-item').val("");
//	if(newItem.trim().length === 0) {
//		alert("You must enter an item to be added.");
//        return;
//	}
    
    
    
    function deleteBtn() {
        $('.delete').click(function() {
            $(this).closest('.item-row').remove();
        });
    }
    

    
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