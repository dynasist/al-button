class ButtonGroup extends BaseControl {
    public buttons: Array<Button>;

    public groupContainer: HTMLElement;

    constructor() {
        super();
        this.controlClass = 'al-button-group';
        this.buttons = [];

        window.AddButton = ((caption: string, title: string, id: string, type: string) => {
            this.add(caption, title, id, type);
        }).bind(this);

        window.RemoveButton = ((id: string) => {
            this.remove(id);
        }).bind(this);
    }

    add(caption: string, title: string, id: string, type: string) {
        let btn = new Button();
        btn.setOption('caption', caption);
        btn.setOption('title', title);
        btn.setOption('type', type);
        btn.setOption('id', id);        

        if (this.groupContainer) {            
            this.renderButton(btn, this.groupContainer);
        }

        this.buttons.push(btn);
    }

    renderButton(btn: Button, container: HTMLElement) {
        btn.container = container;
        btn.create();
    }

    remove(id: string) {
        let btn = document.getElementById(id);
        if (btn !== null) {
            btn.remove();
        }
    }

    create() {
        this.groupContainer = document.createElement('div');
        this.groupContainer.classList.add('al-button-group');

        for (let btn of this.buttons) {
            this.renderButton(btn, this.groupContainer);
        }

        this.container.append(this.groupContainer);
    }

    setup() {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (() => {
            this.create();
        }).bind(this));
    }
}
