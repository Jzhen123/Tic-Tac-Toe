
class Model {
    constructor(){
        this.c = null;
    }
    setController(controller){
        this.c = controller;
    }
}

class View {
    constructor(){
        this.m = null;
    }
    setModel(model){  
        this.m = model;
    }
    // Function to create various HTML elements and adding them to the page
    generateHtml(type, classes = [], parent = false, text = "", clickFunction = null){
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
    createView (){
        this.app = document.getElementById('app');
        this.header = this.generateHtml("h2", ["text-center"], app, "Hello")
        this.board = this.generateHtml("div", ["row"], app)
        for (let i = 0; i < 9; i++){
            let col = this.generateHtml("div", ["col-4", "bg-primary", "border"], this.board, i)
       }
    }  
    // Changing columns
}

class Controller {
    constructor(model, view){
        this.m = model;
        this.v = view;
    }
    init(){
        
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
    init(){
        console.log("App is starting")
        this.c.init();
        this.v.createView();
    
    }
}

// document.getElementById('app').onload = function(){init()};

function init() {
    let a = new App();
    a.init();
}

window.onload = function() {
    init()
}
