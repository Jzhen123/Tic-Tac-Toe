class Model {
    constructor() {
        this.c = null;
        this.counter = 0;
    }
    init() {
        this.createGridArray();
    }
    setController(controller) {
        this.c = controller;
    }
   
    setState(s){
        this.counter = s;
        this.onSetState();
    }
    getState(){
        return this.counter;
    }
    onSetState(){
        this.c.updateView();
    }
    createGridArray(){
        this.array = [];
        for (let i = 0; i < 9; i++) {
            console.log(this.array)
            this.array.push(0);
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
        this.counter_txt = this.generateHtml("h3", ["text-center"], app, this.m.counter)
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
        console.log("in the click")
    }
// Function that adds one to the counter variable in the Model
    incrementCounter(){
        this.m.setState(this.m.counter+1)
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
