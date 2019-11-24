var BaseControl = (function () {
    function BaseControl() {
        var _this = this;
        this.container = document.getElementById('controlAddIn');
        this.controlClass = '';
        this.options = [];
        window.SetOption = (function (key, value) {
            _this.setOption(key, value);
        }).bind(this);
    }
    BaseControl.prototype.setOption = function (key, value) {
        this.options[key] = value;
    };
    BaseControl.prototype.setup = function () { };
    BaseControl.prototype.render = function () {
        try {
            this.setup();
        }
        catch (err) {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnError", [err.message]);
        }
    };
    return BaseControl;
}());
