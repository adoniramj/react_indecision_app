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

let count = 0

const addOne = () => {
    console.log('addOne')
}

const minusOne = () => {
    console.log('minusOne')
}

const reset = () => {
    console.log('reset')
}
var templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minusOne} className="button">-1</button>
        <button onClick={reset} className="button">Reset</button>
    </div>
)

console.log(templateTwo)
var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo,appRoot)
