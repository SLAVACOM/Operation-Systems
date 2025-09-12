# JScript — функции и объекты

## 15. Определение функции

* Функция объявляется через `function`:

```js
function myFunc(a, b) {
    return a + b;
}
```

## 16. Передача параметров

* Параметры передаются по значению для примитивов и по ссылке для объектов.

```js
function greet(name){
    WScript.Echo("Hello, " + name);
}
greet("Alice");
```

## 17. Области действия имен

* **Global** — видны во всём скрипте.
* **Local** — видны только внутри функции.
* Пример:

```js
var x = 10; // global
function test(){
  var y = 5; // local
}
```

## 18. Возврат значений функции

* Используется оператор `return`:

```js
function sum(a,b){
    return a+b;
}
var result = sum(2,3);
```

## 19. Встроенные объекты JScript

* `Math`, `String`, `Date`, `Array`, `RegExp`.

## 20. Объект Math

* Математические функции: `Math.sqrt()`, `Math.pow()`, `Math.sin()`, `Math.random()`.
* Константы: `Math.PI`, `Math.E`.

## 21. Объект String

* Строки как объекты для работы с текстом.

```js
var s = "Hello";
```

## 22. Методы объекта String

* `length`, `charAt()`, `substring()`, `indexOf()`, `toUpperCase()`, `toLowerCase()`, `split()`, `replace()`.

## 23. Объект ActiveXObject

* Используется для работы с COM-объектами в Windows.

```js
var fso = new ActiveXObject("Scripting.FileSystemObject");
```

* Позволяет работать с файлами, реестром и другими компонентами.

## 24. Запуск объектов

* Создание экземпляра через `new ActiveXObject()`.
* Методы объектов можно вызывать напрямую:

```js
var file = fso.CreateTextFile("test.txt", true);
file.WriteLine("Hello");
file.Close();
```

## 25. Объект Enumeration

* Объект, который позволяет перебирать коллекции COM объектов.
* Используется совместно с ActiveXObject:

```js
var folder = fso.GetFolder("C:\\Test");
var e = new Enumerator(folder.Files);
for(;!e.atEnd();e.moveNext()){
    WScript.Echo(e.item());
}
```
