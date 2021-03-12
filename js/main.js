class Model {
    constructor() {
        this.c = null;
        this.counter = 0;
    }
    init() {
        this.createGridArray();
        this.whoseTurn();
    }
    setController(controller) {
        this.c = controller;
    }
    setState(s){
        this.counter = s;
        this.onSetState();
    }
    getState(){
        this.whoseTurn();
        return this.turn;
    }
    onSetState(){
        this.c.updateView();
    }
    createGridArray(){
        this.array = [];
        for (let i = 0; i < 9; i++) {
            // console.log(this.array)
            this.array.push(0);
        }
    }
    whoseTurn(){
        let playerOne = "Player 1's Turn";
        let playerTwo = "Player 2's Turn";
        if (this.counter == 0){
            this.turn = "Hi"
        } else if (this.counter > 8){
            this.turn = "Game over stand in"
        } else if (this.counter % 2 != 0) {
            this.turn = playerOne
        } else if (this.counter % 2 == 0) {
            this.turn = playerTwo
        } 
    }

}

class View {
    constructor() { 
        this.m = null;
    }
    init(){
        this.createView();
    }

    setModel(model) {
        this.m = model;
    }
    // Function to create various HTML elements and adding them to the page
    generateHtml(type, classes = [], parent = false, text = "", clickFunction = null) {
        const element = document.createElement(type)
        element.classList.add(...classes)
        element.innerText = text
        element.addEventListener('click', clickFunction)
        if (parent) {
            parent.appendChild(element)
        }
        return element
    }

    // Multiple generateHtml functions to create the main view
    createView() {
        this.app = document.getElementById('app');
        this.header = this.generateHtml("h2", ["text-center"], app, "Hello")
        this.counter_txt = this.generateHtml("h3", ["text-center"], app, this.m.turn)
        this.container = this.generateHtml("div", ["container", "p-5"], app)
        this.board = this.generateHtml("div", ["row"], this.container)
        for (let i = 0; i < 9; i++) {
            let col = this.generateHtml("div", ["col-4", "border", "border-2"], this.board, i, this.m.c.incrementCounter.bind(this));
            col.setAttribute("id", "col" + i)
        }
    }
    render(){
        this.counter_txt.textContent = this.getState();
    }
    getState(){
        var c = this.m.getState();
        return c;
    }
    
}

class Controller {
    constructor(model, view) {
        this.m = model;
        this.v = view;
    }
    init() {   
    }
// Function that can be used to be added to an event listener to increment the counter
    listener(num) {
        this.incrementCounter();
    }
// Function that adds one to the counter variable in the Model
    incrementCounter(){
        this.m.setState(this.m.counter+1)
        console.log(this.m.counter)
    }
    updateView(){
        this.v.render();
    }
}

class App {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.m, this.v);
        this.m.setController(this.c);

    }
    init() {
        console.log("App is starting")
        this.c.init();
        this.m.init();
        this.v.init();
    }
}


function init() {
    let a = new App();
    a.init();
}

window.onload = function () {
    init()
}
