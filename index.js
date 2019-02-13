// HELPER FUNCTIONS ///////////////////////////

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

function resetInput() {
  $('#js-shopping-list-form')[0].reset(); 
}

// Dynamically add HTML from the helper function makeItem
function appendItem() {
  $('.shopping-list').append(`${makeItem()}`);
}

// Helper function to prevent default on submit event
// Then call the appendItem and reset functions
function handleSubmit(event) {
    event.preventDefault();
    appendItem();
    resetInput();
}

// helper function to delete closest li
function deleteClosestLi() {
  $(this).closest('li').remove();
}

// helper function to toggle the closest (<li></li>) class
function toggleClosestLi() {
  $(this).closest('li').toggleClass('shopping-item__checked');
};

// Event Handlers //////////////////////////////////

// Handle the submit event and append the output from makeItem
function handleAddItem() {
  $('#js-shopping-list-form').on('submit', handleSubmit);
}

// Handle the click event on delete button
function handleDeleteItem() {
  // Event delegation on parent ul
  // delete button on click removes closest (<li>...</li>) including itself
  $('.shopping-list').on('click', '.shopping-item-delete', deleteClosestLi)
}

// Handle the click event on the checked button
function handleCheckItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', toggleClosestLi)
}

// function to display the final list with all its functionality after window loads
function showList() {
  handleDeleteItem();
  handleCheckItem();
  handleAddItem();
}

$(showList);

