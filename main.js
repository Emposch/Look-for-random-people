const API = "https://randomuser.me/api/?results=";



let  input, btn, output
input = document.getElementById('input')
btn = document.getElementById('button')
output = document.getElementById('output')


const searchUser = async () => {
    let text = input.value
    let url = API + text
    let requset = await fetch(url)
    let response = await requset.json() 
    console.log(response.results)
    renderUsers(response.results)
  }


const renderUsers = (result) => {
       output.innerHTML = ''

  result.forEach((el) => {
        let div = document.createElement('div')

        let firstName = document.createElement('h5')
        firstName.innerHTML = el.name.title + ' ' + el.name.first + ' ' + el.name.last

        let street=document.createElement('h5')
        street.innerHTML=el.location.street.name +' '+ el.location.street.number

        let city=document.createElement('h5')
        city.innerHTML=el.location.city +' '+ el.location.state
        
        let country=document.createElement('h5')
        country.innerHTML=el.location.country +' '+ el.location.postcode

        let email=document.createElement('h5')
        email.innerHTML=el.email

        let image=document.createElement('img')
        image.src=el.picture.large

        div.append(firstName,street,city,country,email,image)
        output.append(div)
    })
}



btn.addEventListener('click', () => {
    searchUser()
  })