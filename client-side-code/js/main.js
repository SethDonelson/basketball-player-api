document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerDecade = document.querySelector('input').value
    try{
        const response = await fetch(`https://basketball-player-api.onrender.com/api/${playerDecade}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
    }catch(error){
        console.log(error)
    }
}