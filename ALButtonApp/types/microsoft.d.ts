declare module Microsoft.Dynamics.NAV {
    function InvokeExtensibilityMethod(name: string, arguments: Array<any>, skipIfBusy?: boolean, callback?: Function): void;
    function GetImageResource(imageName: string): string;
    function GetEnvironment(): NAVEnvironment;
    function OpenWindow(url: string): void;
    
    interface NAVEnvironment {
        UserName: string;
        CompanyName: string;
        DeviceCategory: string;
        Busy: boolean;
        OnBusyChanged: Function;
        Platform: NAVPlatform;
        UserInteractionMode: NAVUserInteractionMode
    }

    enum NAVPlatform {
        "Dynamics NAV Client connected to Business Central",
        "Business Central Web/Tablet client, or Phone client in a browser",
        "Business Central Universal App",
        "Microsoft Office add-in"
    }

    enum NAVUserInteractionMode {
        "Mouse",
        "Touch"
    }    
}
