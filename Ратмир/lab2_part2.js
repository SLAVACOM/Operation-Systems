// lab2_part2.js - ЛР №2, Часть II
// An = 1 / (ln?(sin(1/n)))

function calculateSeriesSum(n) {
	var totalSum = 0

	for (var currentN = 1; currentN <= n; currentN++) {
		var sinValue = Math.sin(1 / currentN)

		if (sinValue <= 0) {
			WScript.Echo(
				'Ошибка: sin(1/' +
					currentN +
					') = ' +
					sinValue +
					' <= 0. Логарифм не определен.'
			)
			continue
		}

		var lnValue = Math.log(sinValue)

		var lnSquared = lnValue * lnValue

		if (lnSquared == 0) {
			WScript.Echo(
				'Ошибка: ln^2(sin(1/' + currentN + ')) = 0. Деление на ноль.'
			)
			continue
		}

		var currentTerm = 1 / lnSquared

		totalSum += currentTerm

		WScript.Echo(
			'A' +
				currentN +
				' = 1 / (ln^2(sin(1/' +
				currentN +
				'))) = 1 / (' +
				lnSquared.toFixed(6) +
				') = ' +
				currentTerm
		)
	}

	return totalSum
}

if (WScript.Arguments.Count() < 1) {
	WScript.Echo('Ошибка: Укажите n.')
	WScript.Echo('Использование: cscript //nologo lab2_part2.js <n>')
	WScript.Quit(1)
}

var n = parseInt(WScript.Arguments(0))

if (isNaN(n) || n <= 0) {
	WScript.Echo('Ошибка: n должно быть положительным целым числом.')
	WScript.Quit(1)
}

WScript.Echo('Расчет суммы первых ' + n + ' членов ряда')
WScript.Echo('Формула: An = 1 / (ln^2(sin(1/n)))')
WScript.Echo('Используется объект Math')
WScript.Echo('--------------------------------------------------')

var result = calculateSeriesSum(n)

WScript.Echo('--------------------------------------------------')
WScript.Echo('Сумма первых ' + n + ' членов ряда: ' + result)
