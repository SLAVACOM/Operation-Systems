// wscript.js � �������� ������� Internet Explorer � �������� ����������

if (WScript.Arguments.Count() == 1) {
	var iexplorer = WScript.CreateObject('InternetExplorer.Application')
	iexplorer.Visible = true
	iexplorer.Navigate(WScript.Arguments(0))
} else
	WScript.Echo(
		'�������������: cscript //nologo ' +
			WScript.ScriptFullName +
			' http://www.rsdn.ru/'
	)
