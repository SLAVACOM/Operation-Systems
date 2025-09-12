// lab1_task7.js - Расчет суммы n первых членов ряда An = (1!+2!+...+n!)/(2*n)!

function calculateFactorial(num) {
	if (num <= 1) return 1
	var result = 1
	for (var i = 2; i <= num; i++) {
		result *= i
	}
	return result
}

function calculateSeriesSum(n) {
	var totalSum = 0

	for (var currentN = 1; currentN <= n; currentN++) {
		var sumOfFactorials = 0
		for (var j = 1; j <= currentN; j++) {
			sumOfFactorials += calculateFactorial(j)
		}

		var denominator = calculateFactorial(2 * currentN)

		var currentTerm = sumOfFactorials / denominator

		totalSum += currentTerm

		WScript.Echo(
			'A' +
				currentN +
				' = ' +
				sumOfFactorials +
				' / ' +
				denominator +
				' = ' +
				currentTerm
		)
	}

	return totalSum
}

if (WScript.Arguments.Count() < 1) {
	WScript.Echo('Ошибка: Не указано значение n.')
	WScript.Echo('Использование: cscript lab1_task7.js <n>')
	WScript.Quit(1)
}

var n = 3

if (isNaN(n) || n <= 0) {
	WScript.Echo('Ошибка: n должно быть положительным целым числом.')
	WScript.Quit(1)
}

WScript.Echo(
	'Расчет суммы первых ' + n + ' членов ряда An = (1!+2!+...+n!)/(2*n)!'
)
WScript.Echo('--------------------------------------------------')

var finalResult = calculateSeriesSum(n)

WScript.Echo('--------------------------------------------------')
WScript.Echo('Сумма первых ' + n + ' членов ряда: ' + finalResult)
