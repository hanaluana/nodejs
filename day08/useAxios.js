const URL = 'https://dog.ceo/api/breeds/image/random'
/*
axios.get(URL) // axios도 결국 promise를 리턴한다. 따라서 then을 사용해야 한다.
.then(response => {
    const imageURL = response.data.message
    const imgbox = document.querySelector('.img-box')
    const img = document.createElement('img')
    img.src = imageURL
    imgbox.appendChild(img)
}) 
*/

const getImageUrl = async(URL) => {
    try {
        const res = await axios.get(URL)
        const imageURL = res.data.message
        const imgbox = document.querySelector('.img-box')
        const img = document.createElement('img')
        img.src = imageURL
        imgbox.appendChild(img)
    }catch (error){
        console.log(error)
    }
}

getImageUrl(URL)

