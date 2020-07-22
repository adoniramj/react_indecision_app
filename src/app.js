console.log('App.js is running! Is it?')

var app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer!',
    options : ['one', 'two']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options'}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var userName = "Mike"
var age = 4
var userLocation = 'Miramar'

var user = {
    name : 'Adoniram',
    age : 47,
    location : 'Miramar'
}

// var user = {}

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app')
ReactDOM.render(template,appRoot)