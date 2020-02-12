var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')




button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c2fcd6a77b649833e20e50a12c886238&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description']
    
        name.innerHTML = nameValue
        temp.innerHTML = tempValue +' C'
        desc.innerHTML = descValue
        
        
        
    })
    
    
    
    .catch(err => alert('Enter a valid city !!!'))
    })


    
