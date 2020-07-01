class Component {
    message: string;
    e: Element;

    constructor(message: string) {
        this.message = message;
        this.e = document.createElement("div");
        this.e.innerHTML = this.message;
    }

    get element() {
        return this.e;
    }
}

document.body.appendChild(new Component("Hello Rochely!").element);