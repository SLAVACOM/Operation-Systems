# WSH и JScript — объекты и работа с приложениями

## 1. Объекты WSH

* WSH предоставляет встроенные объекты для взаимодействия с системой.
* Основные объекты: `WScript`, `WshShell`, `WshNetwork`.

## 2. Объект WScript

* Главный объект скрипта под WSH.
* Предоставляет доступ к аргументам, методам вывода, управлению скриптом.

## 3. Свойства объекта WScript

* `WScript.Arguments` — аргументы командной строки.
* `WScript.ScriptName` — имя текущего скрипта.
* `WScript.ScriptFullName` — полный путь к скрипту.
* `WScript.Version` — версия WSH.

## 4. Методы объекта WScript

* `WScript.Echo()` — вывод текста.
* `WScript.Quit([код_выхода])` — завершение скрипта.
* `WScript.Sleep(миллисекунды)` — пауза выполнения.

## 5. Передача параметров в процедуру JScript

* Используется объект `WScript.Arguments`.

```js
var n = parseInt(WScript.Arguments(0));
var x = parseFloat(WScript.Arguments(1));
```

## 6. Создание и освобождение объектов

* Создание COM-объектов:

```js
var fso = new ActiveXObject("Scripting.FileSystemObject");
```

* Освобождение объектов выполняется автоматически при завершении скрипта.

## 7. Вывод данных из процедур JScript

* Через `WScript.Echo()` или создание текстовых файлов.

```js
WScript.Echo("Результат: " + sum);
```

## 8. Особенности вывода для различных режимов

* **cscript.exe** — текстовый вывод в консоль.
* **wscript.exe** — графический вывод через MessageBox.
* Можно менять формат вывода в зависимости от режима.

## 9. Работа с Microsoft Word

* Через COM-объект `Word.Application`:

```js
var word = new ActiveXObject("Word.Application");
word.Visible = true;
var doc = word.Documents.Add();
doc.Content.Text = "Пример текста";
doc.SaveAs("C:\\Temp\\test.docx");
word.Quit();
```

## 10. Работа с Microsoft Excel

* Через COM-объект `Excel.Application`:

```js
var excel = new ActiveXObject("Excel.Application");
excel.Visible = true;
var wb = excel.Workbooks.Add();
wb.Sheets(1).Cells(1,1).Value = "Пример";
wb.SaveAs("C:\\Temp\\test.xlsx");
excel.Quit();
```

## Пример: Расчет суммы n первых членов ряда (вариант 1)

```js
function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1);
}

if(WScript.Arguments.Count() >= 1){
    var n = parseInt(WScript.Arguments(0));
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum += factorial(i)/Math.pow(i,i);
    }
    WScript.Echo("Сумма ряда: " + sum);
}else{
    WScript.Echo("Введите n");
}
```
