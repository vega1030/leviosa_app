const btnSearchResult = document.querySelector('#btn-search')
const dataUserSearch = document.querySelector('#dataUser')
let resHarry = []

const callFetchComment = async (url="")=>{ 
    try {

        if (url === ""){
            console.log('error')
        }
        res = await(await fetch(url)).json()

        console.log(res)

        return res
    }
        catch (e){
            console.log(e)
        }
}

const callfetchHarry = async (url="")=>{ 
    try {

        if (url === ""){
            console.log('error')
        }
        resHarry = await(await fetch(url)).json()
        viewInfoDom(resHarry)
        console.log(resHarry)

        return resHarry
    }
        catch (e){
            console.log(e)
        }
}

//search data
dataUserSearch.addEventListener('keyup',(e)=>{
    const searchString = e.target.value
    let searchStringCapitalized = searchString.toLowerCase().split(' ')
    .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
    
    console.log(searchStringCapitalized)
    
    const filteredInfo = resHarry.filter((data)=>{
        return(
            data.name.includes(searchStringCapitalized)||
            data.house.includes(searchStringCapitalized)            
        )
    })
    viewInfoDom(filteredInfo)
})

const viewInfoDom = (characters) =>{
    const contentMainCards = document.querySelector('#cards-character')
    const mapCharacters = characters.map((view)=>{
        return `
        <div class="cards">
            <div class="name-character">
                <h1>${view.name}</h1> 
            </div>
        <div class="house-character">
            <h2>House</h2> 
            <p>${view.house}</p
        </div>
        <div class="patronus">
            <h3>Patronus</h3> 
            <p>${view.patronus}</p
    </div>
        <div class="photo_character">
            <img src="${view.image}" alt="${view.name}">
        </div>
    </div> 
    <button id='save_character'>Guardar</button>
    `
    })
    .join('')
    contentMainCards.innerHTML = mapCharacters 
}
callfetchHarry("https://hp-api.herokuapp.com/api/characters")
