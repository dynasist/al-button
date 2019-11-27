# Example Button Control Add-in for Business Central

A simple, dependency-free JavaScript button/button group add-in.

![](https://raw.githubusercontent.com/dynasist/al-button/master/media/screenshot.png)

## Features

No external JS libraries are required, it's plain JavaScript (written in TypeScript :-)

**Common AL Events:**

|Name    |Description|
|--------|-----------|
|`OnLoad()`|Control load event used to set properties. Runs just before component rendering. |
|`OnError(message: Text)`|Raised whenever a JavaScript error happens within the add-in. Used to avoid "Something went wrong" errors. |
|`OnClick(buttonId: Text)`|Raised when the custom button is clicked. For Button Groups, use the `buttonId` parameter to differentiate between buttons. |

## 1. Button

Single button with `OnClick` event.

**Methods:**

|Name    |Description|
|--------|-----------|
|`SetOption("key": Text; "value": Text)`|Set button properties. |

**Button properties:**

|Name    |Description|
|--------|-----------|
|id|Button CSS id. |
|caption|Button text. |
|title|Button hover text. |
|type|Button style, values: empty (default style), `primary`, `info`, `danger`. |


## 2. Button Group

Buttons grouped together with `OnClick` event having the selected button ID.

**Methods:**

|Name    |Description|
|--------|-----------|
|`AddButton(caption: Text; title: Text; id: Text; "type": Text)`|Add new button to the group. |


## Installation

Download and build the project in AL.

## Usage

Usage is easy, see below examples.

Add new button to a page:

![](https://raw.githubusercontent.com/dynasist/al-button/master/media/button.png)

```
usercontrol("ALButton"; ALButton_DSK)
{
    ApplicationArea = All;

    trigger OnLoad()
    begin
        CurrPage.ALButton.SetOption('caption', 'OK');
        CurrPage.ALButton.SetOption('title', 'This is a vanilia Javascript Button');
    end;

    trigger OnClick(buttonId: Text)
    begin
        Message('Custom Button Clicked!');
    end;

    trigger OnError(message: Text)
    begin 
        Error('Something happened: %1', message);
    end;
}
```

Add new button group to a page:

![](https://raw.githubusercontent.com/dynasist/al-button/master/media/buttongroup.png)

```
usercontrol(ALButtonGroup; ALButtonGroup_DSK)
{
    Visible = true;
    ApplicationArea = All;

    trigger OnLoad()
    begin
        CurrPage.ALButtonGroup.AddButton('Primary', 'Primary style button', 'btn1', 'primary');
        CurrPage.ALButtonGroup.AddButton('Normal', 'Normal button', 'btn2', '');
        CurrPage.ALButtonGroup.AddButton('Info', 'Info style button', 'btn3', 'info');
        CurrPage.ALButtonGroup.AddButton('Danger', 'Danger style button', 'btn4', 'danger');
    end;

    trigger OnClick(id: Text)
    begin
        Message('%1 button was clicked.', id);
    end;
}
```

## Development

1. Run `npm install` to restore javascript-related modules.
2. Start `tsc: watch` VSCode task

Contents of `ALButtonApp/.vscode/tasks.json` should you need it:
```
"tasks": [
    {
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "option": "watch",
        "problemMatcher": [
            "$tsc-watch"
        ]
    }
]
```

3. Use `ALButtonApp\src\TypeScript` to modify javascript bits
4. CSS styling is placed in `ALButtonApp\src\Controls\*.css` files

## Testing

Tests are placed in `ALButtonTest` folder.

### Business Central

`ALButtonTest` folder is a BC Test application. Publish/Install the app and run AL Test Tool or equivalent command line tools.

### JavaScript Browser test

Run below command locally. This can be used with CI/CD pipelines as well.

```powershell
node tests/js/runner.js --json --outputFile=jest.results.json --url "<url>" --username <name> --password <pass>
```

Parameters:
- url: BC page url, e.g. `https://my-host/BC?page=87780`
- username: BC user name
- password: BC user password

Test file: `ALButtonTest/tests/js/browser.spec.js`


