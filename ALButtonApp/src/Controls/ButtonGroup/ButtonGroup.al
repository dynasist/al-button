controladdin ALButtonGroup_DSK
{
    RequestedHeight = 40;
    MinimumHeight = 32;
    MinimumWidth = 84;
    VerticalStretch = false;
    HorizontalStretch = true;
    VerticalShrink = true;
    HorizontalShrink = true;

    Scripts =
        'src/Controls/BaseControl.js',
        'src/Controls/Button/Button.js',
        'src/Controls/ButtonGroup/ButtonGroup.js';
    StyleSheets =
        'src/Controls/BaseControl.css',
        'src/Controls/Button/Button.css',
        'src/Controls/ButtonGroup/ButtonGroup.css';
    StartupScript =
        'src/Controls/ButtonGroup/startup.js';

    //#region Base Events

    event OnLoad();

    event OnError(message: Text);

    //#endregion

    event OnClick(id: Text);

    procedure AddButton(caption: Text; title: Text; id: Text; "type": Text);
}