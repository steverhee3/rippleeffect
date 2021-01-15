const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('mousemove', function (e) {
    const x = e.clientX
    const y = e.clientY
    
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    const xInside = x - buttonLeft
    const yInside = y - buttonTop
    
    const circlea = document.createElement('span')
    circlea.classList.add('circle')
    circlea.style.top = yInside + 'px'
    circlea.style.left = xInside + 'px'
    
    this.appendChild(circlea);
    
    setTimeout(() => circlea.remove(), 400)
  })
})

