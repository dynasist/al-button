controladdin ALButton_DSK
{
    RequestedHeight = 36;
    MinimumHeight = 32;
    MinimumWidth = 84;
    VerticalStretch = false;
    HorizontalStretch = true;
    VerticalShrink = true;
    HorizontalShrink = true;

    Scripts =
        'src/Controls/BaseControl.js',
        'src/Controls/Button/Button.js';
    StyleSheets =
        'src/Controls/BaseControl.css',
        'src/Controls/Button/Button.css';
    StartupScript =
        'src/Controls/Button/startup.js';

    //#region Base Events

    event OnLoad();

    event OnError(message: Text);

    //#endregion

    event OnClick(buttonId: Text);

    procedure SetOption("key": Text; "value": Text);
}