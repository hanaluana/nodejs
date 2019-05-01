// 1. input 안에 값을 잡는다.
const input = document.querySelector("#js-user-input")
const button = document.querySelector("#js-go")
const button2 = document.querySelector("#js-more")
const resultArea = document.querySelector("#result-area")
const giphy_tv = document.querySelector("#giphy-tv")
var tvmode
let count = 25

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13){
        const value = input.value
        
        resultArea.innerHTML=`<h1 style="color:white; text-align:center;">${value}</h1>`
        show(value,count)
    }
})

button.addEventListener('click', (event) => {
    const value = input.value
    
    resultArea.innerHTML=`<h1 style="color:white; text-align:center;">${value}</h1>`
    show(value,count)
})

button2.addEventListener('click', (event)=>{
    const value = input.value
    resultArea.innerHTML=`<h1 style="color:white; text-align:center;">${value}</h1>`
    
    count+=10
    show(value,count)
})


// 2. Giphy API를 통해 data를 받아서 가공한다.
// https://developers.giphy.com/

function show (keyword,count){
    const API_KEY = 'v7h2Ftf9M7NltsZZQTUl9c9Tyk5iApo6'
    const URL = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}&limit=${count}`

    const GiphyAJAXCall = new XMLHttpRequest()
    GiphyAJAXCall.open('GET',URL)
    GiphyAJAXCall.send()

    GiphyAJAXCall.addEventListener('load',(event)=>{
        const rawData = event.target.response
        const parsedData = JSON.parse(rawData)

        for (const data of parsedData.data){
            pushToDom(data.images.fixed_height.url)
        }
        giphy_tv.innerHTML = `<h1>${keyword} TV</h1><p id="giphy"></p>`
        let i = 0
        makeTV(parsedData.data[i].images.fixed_height.url)
        i++
        tvmode = setInterval(()=>{
            var pick = parsedData.data[i]
            makeTV(pick.images.fixed_height.url)
            i = (i+1)%count
        },3000)
    })
    clearInterval(tvmode)
}

// 3. GIF 파일들을 HTML(DOM)에 밀어넣는다.
const pushToDom = (data) => {
    var gif = document.createElement('img')
    gif.src = data
    resultArea.appendChild(gif)
    // resultArea.insertBefore(gif, resultArea.firstChild)
    // resultArea.innerHTML += `<img src="${data}"/>`
}

const makeTV = (data) => {
    var last_child = document.getElementById('giphy')
    var new_child = document.createElement('img')
    new_child.src = data
    new_child.id = 'giphy'
    giphy_tv.replaceChild(new_child, last_child)
    // giphy_tv.innerHTML  = `<img src="${data}"/>`
}


