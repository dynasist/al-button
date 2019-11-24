codeunit 87781 ALButtonTests_DSK
{
    Subtype = Test;

    var
        Assert: Codeunit Assert;

    [Test]
    procedure ALButtonTestPage_OpenClose();
    var
        ButtonTestPage: TestPage ALButtonTestPage_DSK;
    begin
        ButtonTestPage.OpenView();
        ButtonTestPage.Close();
        Assert.IsTrue(true, 'ALButtonTestPage_OpenClose');
    end;
}