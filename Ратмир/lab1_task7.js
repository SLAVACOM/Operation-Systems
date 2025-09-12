// lab1_task7.js - ������ ����� n ������ ������ ���� An = (1!+2!+...+n!)/(2*n)!

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
	WScript.Echo('������: �� ������� �������� n.')
	WScript.Echo('�������������: cscript lab1_task7.js <n>')
	WScript.Quit(1)
}

var n = 3

if (isNaN(n) || n <= 0) {
	WScript.Echo('������: n ������ ���� ������������� ����� ������.')
	WScript.Quit(1)
}

WScript.Echo(
	'������ ����� ������ ' + n + ' ������ ���� An = (1!+2!+...+n!)/(2*n)!'
)
WScript.Echo('--------------------------------------------------')

var finalResult = calculateSeriesSum(n)

WScript.Echo('--------------------------------------------------')
WScript.Echo('����� ������ ' + n + ' ������ ����: ' + finalResult)
