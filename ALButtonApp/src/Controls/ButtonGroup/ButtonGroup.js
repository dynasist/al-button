var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ButtonGroup = (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        var _this = _super.call(this) || this;
        _this.controlClass = 'al-button-group';
        _this.buttons = [];
        window.AddButton = (function (caption, title, id, type) {
            _this.add(caption, title, id, type);
        }).bind(_this);
        window.RemoveButton = (function (id) {
            _this.remove(id);
        }).bind(_this);
        return _this;
    }
    ButtonGroup.prototype.add = function (caption, title, id, type) {
        var btn = new Button();
        btn.setOption('caption', caption);
        btn.setOption('title', title);
        btn.setOption('type', type);
        btn.setOption('id', id);
        if (this.groupContainer) {
            this.renderButton(btn, this.groupContainer);
        }
        this.buttons.push(btn);
    };
    ButtonGroup.prototype.renderButton = function (btn, container) {
        btn.container = container;
        btn.create();
    };
    ButtonGroup.prototype.remove = function (id) {
        var btn = document.getElementById(id);
        if (btn !== null) {
            btn.remove();
        }
    };
    ButtonGroup.prototype.create = function () {
        this.groupContainer = document.createElement('div');
        this.groupContainer.classList.add('al-button-group');
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var btn = _a[_i];
            this.renderButton(btn, this.groupContainer);
        }
        this.container.append(this.groupContainer);
    };
    ButtonGroup.prototype.setup = function () {
        var _this = this;
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (function () {
            _this.create();
        }).bind(this));
    };
    return ButtonGroup;
}(BaseControl));
