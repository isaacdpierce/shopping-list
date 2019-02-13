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
  // helper function to delete closest li
  const deleteClosestLi = function() {
    $(this).closest('li').remove();
  }
  // Event delegation on parent ul
  // delete button on click removes closest (<li>...</li>) including itself
  $('.shopping-list').on('click', '.shopping-item-delete', deleteClosestLi)
}

// Handle the click event on the checked button
function handleCheckItem() {
  // helper function to toggle the closest (<li></li>) class
  const toggleClosestLi = function() {
    $(this).closest('li').toggleClass('shopping-item__checked');
  };
  $('.shopping-list').on('click', '.shopping-item-toggle', toggleClosestLi)
}

$(handleDeleteItem);
$(handleCheckItem);
$(handleAddItem);