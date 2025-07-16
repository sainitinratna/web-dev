document.getElementById("hightlight").addEventListener("click",function(){
    let list = document.getElementById("lost")
    list.firstElementChild.classList.add('highlight')
})

document.getElementById("changeOrder").addEventListener("click",function(){
    let coffe = document.getElementById("coffeeType")
    coffe.textContent = "expresso"
    coffe.style.backgroundColor="brown"
})

document.getElementById("addNewItem").addEventListener("click",function(){
    let hel = document.createElement("li")
    hel.textContent = "milk"
    document.getElementById("shoppingList").appendChild(hel)
})

document.getElementById("removeLastTask").addEventListener("click",function(){
 let asd= document.getElementById("taskList")
 asd.lastElementChild.remove()
})

document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target){
        alert(`you slected ${event.target.textContent}`)
    }
})

document.getElementById("feedbackForm").addEventListener("click",function(){
    let feedback = document.getElementById("feedbackInput").value
    document.getElementById("feedbackDisplay").textContent=`feedback is ${feedback}`
})

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = 'loaded'
})

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });

  setTimeout(() => {
    
  }, timeout);