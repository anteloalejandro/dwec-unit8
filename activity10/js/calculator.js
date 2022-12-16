// Get all the necessary elements
const calc = document.getElementById('calculadora')
const input1 = document.getElementById('numero1')
const input2 = document.getElementById('numero2')
const output = document.getElementById('resultado')

calc.addEventListener('click', ev => {
  if (ev.target.tagName !== 'BUTTON') return

  // Get the numeric values of the two input fields
  const n1 = +input1.value
  const n2 = +input2.value

  // Calculate the result and store it
  let result
  switch (ev.target.id) {
    case 'mas': result = n1 + n2
      break
    case 'menos': result = n1 - n2
      break
    case 'por': result = n1 * n2
      break
    case 'entre': result = n1 / n2
      break
    case 'ce':
      // Guess what happens when the 'clear everything' button is clicked
      input1.value = ''
      input2.value = ''
      break
  }

  // Show the result if it's valid, the placeholder if it isn't
  output.value = result === NaN ? '' : result
})
