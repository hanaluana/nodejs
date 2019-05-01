// ajax 요청을 통해서 json 타입의 데이터를 받음

// class
const XHR = new XMLHttpRequest()
const URL = 'https://koreanjson.com/posts/1'

XHR.open('GET',URL)
XHR.send()

XHR.addEventListener('load',function(e){
    console.log(e)
    const rawData = e.target.response
    console.log(rawData)
    parsedData = JSON.parse(rawData) // JSON을 => object으로 바꿔줌
    console.log(parsedData)
})

