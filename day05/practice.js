
// fetch('https://koreanjson.com/posts/1')
//     .then(response => response.json()) // serialize : 자바스크립트 오브젝트로 바꾸겠음.
//     .then(e=>console.log(e))
//     .catch(e=>console.log(e))

const getPost = (url) => new Promise((resolve, reject)=>{

    result = fetch(url)
    const fetched = result.then((e)=>{
        let temp = e.status
        console.log(temp)
        return temp
    })
    console.log(fetched)
    if(fetched!=200){
        reject('없는 url입니다')
    }
    resolve(result)
})

const article = async(url) => {
    try{
        const post = await(getPost(url))
        const result = await post.json()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

article('https://koreanjson.com/posts/1')