//set a listener on the form that looks for user input in the #shopping-list-entry input
//prevent default behavior of the form
//use user input to dynamically create HTML
//make the check button functional - toggle text-decoration class on and off the element
//make the delete button functional - remove the stored item 


$(function() {
    $('#js-shopping-list-form').submit( function(event) {

        //prevent default form behavior and store user input in a variable

        event.preventDefault();
        const item = $(this).find('input').val();
    
        //add a <li> to the <ul> using a template of HTML and the item variable
        if (item) {
        $('ul').append(`<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        }

        $('input').val('');

    });

    //when the check button is clicked, toggle the .shopping-item__checked class on the closest li

    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
        $(this).parent().siblings().toggleClass('shopping-item__checked');
    });

    //when the delete buttom is clicked, remove the list item

    $('ul').on('click', 'button.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

});