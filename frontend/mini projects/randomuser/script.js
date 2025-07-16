document.addEventListener("DOMContentLoaded",()=>{

    const getuserbtn= document.getElementById("get-user")
    const user = document.getElementById("description")
    const error = document.getElementById("error-message")

    getuserbtn.addEventListener("click",async()=>{
            try {
                const data = await getjokes()
                displayusers(data)

            } catch (error) {
                showerror()
            }


        })

    async function getjokes(){
        const url = `https://api.freeapi.app/api/v1/public/randomusers/user/random`
        const response = await fetch(url)
        console.log(typeof response);
        console.log("response",response);
         if(!response.ok){
            throw new Error("error,not found")
        }
        const result = await response.json()
        return result.data
    }
    

    function displayusers(data){
        console.log(data)
        const {firstName,phone} = data
        document.getElementById("name").textContent=`name is ${data.name.first}`
        document.getElementById("phone").textContent=phone

        user.classList.remove("hidden")
        error.classList.add("hidden")


    }

    function showerror(){
        user.classList.add("hidden")
        error.classList.remove("hidden")
    }
})