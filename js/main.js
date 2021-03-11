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
    // constructor() {
    //     this.x = "0px";
    //     this.y ="0px";
    // } 
    // createGrid (gridX, gridY) {
    //     let exampleDiv = document.createElement('div');
    //     exampleDiv.style.width = gridX;
    //     exampleDiv.style.height = gridY;
    //     this.x = gridX;
    //     this.y = gridY;
    // }
}

class Controller {
    constructor(model, view){
        this.m = model;
        this.v = view;

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
    }
}


function init() {
    let a = new App();
    a.init();
}

