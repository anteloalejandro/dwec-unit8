// Get all the necessary elements
const list = document.getElementById('lista')
const submit = document.getElementById('mas')
const textbox = document.getElementById('tarea')

// When clicking on the '+' button...
submit.addEventListener('click', ev => {
  ev.preventDefault() // Keeps the page from reloading

  // Create a new element and give it the value of the input field
  const li = document.createElement('li')
  li.textContent = textbox.value

  // Create a new button and append it to the new element
  const remove = document.createElement('a')
  remove.textContent = 'remove'
  li.appendChild(remove)

  // Append the new element to the list and
  // clear the value of the input field
  list.appendChild(li)
  textbox.value = ''
})

// When clicking on the list...
list.addEventListener('click', ev => {
  const e = ev.target

  // If the clicked element is a list entry, move it to the top
  if (e.tagName === 'LI')
    e.parentNode.prepend(e)
  // If it's the 'remove' button, delete the list entry
  else if (e.tagName === 'A')
    e.parentNode.remove()
})
