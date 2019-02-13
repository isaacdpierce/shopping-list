// Helper function to get input
function getUserInput() {
  const input = $("input").val();
  return input;
}

// Helper function to create my HTML
// Dynamically add user input from helper function getUserInput
function makeItem() {
  return  `
      <li>
        <span class="shopping-item">${getUserInput()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
}

// Handle the submit event and append the output from makeItem
function handleAddItem() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    // Dynamically add HTML from the helper function makeItem
    $('.shopping-list').append(`${makeItem()}`);
    $('#js-shopping-list-form')[0].reset(); 
  })
}

// Handle the click event on delete button
function handleDeleteItem() {
  // Event delegation on parent ul
  // delete button on click removes grandparent (<li>...</li>) including itself
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).parent().parent().remove();
  })
}

// Handle the click event on the checked button
function handleCheckItem() {
  // helper function to toggle the grandparent (<li></li>) class
  // Then traverse back down to the <span></span> to apply class.
  const toggleGrandparent = function() {
    $(this).parent().parent().children('.shopping-item').toggleClass('shopping-item__checked');
  };
  $('.shopping-list').on('click', '.shopping-item-toggle', toggleGrandparent)
}

$(handleDeleteItem);
$(handleCheckItem);
$(handleAddItem);