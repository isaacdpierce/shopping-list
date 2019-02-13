// Helper function to get input
function getUserInput() {
  const input = $("input").val();
  return input;
}

// Helper function to create my HTML
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

    // const newItem = ;
    
    $('.shopping-list').append(`${makeItem()}`);
    $('#js-shopping-list-form')[0].reset(); 
  })
}

function handleDeleteItem() {

}

// $(handleDeleteItem);
// $(handleCheckItem);

$(handleAddItem);