const promiseTest = document.getElementById('promiseTest')

const userID = 1

function displayData(data) {
    const dataElement = document.createElement('li')
    dataElement.innerText= JSON.stringify(data, null)
    promiseTest.appendChild(dataElement)
}

fetch(`https://jsonplaceholder.typicode.com/users/${userID}?`, {
    method:'GET'
})

.then((res)=> res.json())
.then((data)=> displayData(data))
.catch((err)=>console.log(err))


fetch('https://jsonplaceholder.typicode.com/users?_limit=5',{method: 'GET'})

.then((res) =>res.json())
.then((data)=> {
    data.forEach(displayData)})
.catch((err)=>console.log(err))

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
        name: 'Leanne Graham',
    }),
    headers:{
        'Content-type': 'application/json; charset-UTF-8',
        service: 'Sales service'
    }
})

.then((res) => res.json())
.then((data)=> displayData(data))
.catch((err)=>console.log(err))