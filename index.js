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

function handleAddItem() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    // Dynamically add HTML from the helper function makeItem
    $('.shopping-list').append(`${makeItem()}`);
    $('#js-shopping-list-form')[0].reset(); 
  })
}

function handleDeleteItem() {
  // Event delegation on parent ul
  // delete button on click removes grandparent (<li>...</li>) including itself
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).parent().parent().remove();
  })
}

function handleCheckItem() {
  $('.shopping-item').on('click', function() {
    console.log(this).text;
    $(this).addClass('shopping-item__checked');
  })
}

$(handleDeleteItem);
$(handleCheckItem);

$(handleAddItem);