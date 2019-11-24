// https://dev.azure.com/businesscentralapps/HelloWorld

codeunit 87780 "ALButtonTestInstaller_DSK"
{
    Subtype = Install;

    trigger OnInstallAppPerCompany()
    var
        ALTestSuite: Record "AL Test Suite";
        TestSuiteMgt: Codeunit "Test Suite Mgt.";
        SuiteName: Code[10];
    begin
        SuiteName := 'DEFAULT';
        if ALTestSuite.Get(SuiteName) then
            ALTestSuite.DELETE(true);

        TestSuiteMgt.CreateTestSuite(SuiteName);
        Commit();
        ALTestSuite.Get(SuiteName);
        TestSuiteMgt.SelectTestMethodsByRange(ALTestSuite, '87780..87789');
    end;
}