console.log (`ON THAT T!ME`)

//setTimeout is a function that takes 2 parameters, a callback function and a number

function changeBG()
{
   setTimeout(function()
   { 
   document.body.style.backgroundColor = 'saddle-brown'
   },
   5000
   )
   //5 seconds
}
//setInterval also takes two arguments, a function and how often to run it 
const btn= document.getElementById(`btn`)

btn.addEventListener(`click` , changeBG)

const plusP = document.getElementById(`plusP`)
function addPlus() 
{
    plusP.textContent= `${plusP.textContent} +`
}

setInterval(addPlus, 1000)