 document.addEventListener("DOMContentLoaded", () => {
        const init = document.getElementById("init")
        const read =document.getElementById("read")
        const pass =document.getElementById("pass")
        const send =document.getElementById("send")
        const clean =document.getElementById("clean")
      setTimeout(() => {
        init.classList.remove("hidden")
        }, 1000);
     
      setTimeout(() => {
        read.classList.remove("hidden")
        }, 2000);
     
      setTimeout(() => {
        pass.classList.remove("hidden")
        }, 3000);
     
      setTimeout(() => {
        send.classList.remove("hidden")
        }, 4000);
     
      setTimeout(() => {
        clean.classList.remove("hidden")
        }, 5000);
     
    });