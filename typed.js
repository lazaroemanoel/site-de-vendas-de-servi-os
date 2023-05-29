var typed = new Typed('#typing', {
  strings: ['Serviços InovaTech Jr.'],
  typeSpeed: 30,
  showCursor: false
});

const button = document.querySelectorAll('.read')
console.log(button.length)
for(let index = 0; index <= button.length; index += 1) {
  let item = button[index]
  console.log(item)
  item.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(item.parentNode.parentNode)
    item.parentNode.parentNode.childNodes[7].className = ''
    console.log(item.parentNode.parentNode.childNodes[7].className)
  })
}