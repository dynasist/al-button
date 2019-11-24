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
    }

    add(caption: string, title: string, id: string, type: string) {
        let btn = new Button();
        btn.setOption('caption', caption);
        btn.setOption('title', title);
        btn.setOption('type', type);
        btn.setOption('id', id);
        this.buttons.push(btn);
    }

    setup() {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (() => {
            this.groupContainer = document.createElement('div');
            this.groupContainer.classList.add('al-button-group');

            for (let btn of this.buttons) {
                btn.container = this.groupContainer;
                btn.render();
            }

            this.container.append(this.groupContainer);
        }).bind(this));
    }
}
