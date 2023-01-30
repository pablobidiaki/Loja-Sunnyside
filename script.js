const barras = document.getElementById('bars')
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')
const modal = document.getElementById('modal')
let contagem = 0

barras.addEventListener('click', () => {
    contagem += 1
    if(contagem % 2 === 1){
        bar1.style.transform= 'rotate(-45deg) translateY(4.8px) translateX(-4.2px)'
        bar2.style.transform = 'rotate(45deg)'
        bar3.style.opacity = '0'
        modal.style.opacity = '1'
    } else {
        bar1.style.transform= 'rotate(0deg) translateY(0px) translateX(0px)'
        bar2.style.transform = 'rotate(0)'
        bar3.style.opacity = '1'
        modal.style.opacity = '0'
    }
})