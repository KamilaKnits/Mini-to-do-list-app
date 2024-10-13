function newItem() {

    //1. jquery Adding a new item to the list of items: 


    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('you must write something!');
    } else {
        $('#list').append(li);
    }


    // 2.jquery crossing out an item from the list of items:

    function crossOut() {
        li.toggleClass("strike");
    }


    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });




    // jquery  3(i). Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //   jquery 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css: 

    function deleteListItem() {
        li.addClass("delete")
    }






    // 4. Reordering the items: 
    $('#list').sortable();

}

