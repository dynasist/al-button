class Button extends BaseControl {
    constructor() {
        super();
        this.controlClass = 'al-button';
    }

    create() {
        let button: HTMLElement = document.createElement("button");

        if (this.options.id) {
            button.id = this.options.id;
        }

        button.classList.add(this.controlClass);
        if (this.options.type) {
            button.classList.add(`al-button-${this.options.type}`);
        }

        button.innerHTML = `<span>${this.options.caption}</span>`;
        button.title = this.options.title;

        button.addEventListener("click", (e: MouseEvent) => {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnClick", [this.options.id]);
        });

        this.container.append(button);
    }

    setup() {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (() => {
            this.create();
        }).bind(this));
    }
}
