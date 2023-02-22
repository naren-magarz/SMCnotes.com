

const counterOffsetFromTopToCard = []
let isOffsetCountered = false
const allSemesterCards = document.querySelectorAll('#sem-card')
function readAllSemesterCardsWithTopOffset(allSemesterCards){
     allSemesterCards.forEach((card,i)=>{
          const topOffset = card.getBoundingClientRect().top
          if(!isOffsetCountered){
               counterOffsetFromTopToCard.push(topOffset)
          }

     })
     isOffsetCountered = true
}

window.addEventListener('resize',(ev)=>{
})

readAllSemesterCardsWithTopOffset(allSemesterCards)
document.addEventListener('scroll',(ev)=>{
     calculateTopOffset(allSemesterCards)
})

function calculateTopOffset(allSemesterCards){
     allSemesterCards.forEach((card,i)=>{
          const topOffset = card.getBoundingClientRect().top
          /** 
           * * value on denominator depends on the device or webpage width
           */
          if(topOffset > 0 && topOffset < counterOffsetFromTopToCard[i] / 2){
               card.classList.toggle('hide-card',false)
          }
     })
}