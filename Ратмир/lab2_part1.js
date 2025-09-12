// lab2_part1.js - �� �2, ����� I
// An = ((-1)^n * (2*n^2 + 1) / (2*n)!) * x^(2*n)

function calculateFactorial(num) {
	if (num <= 1) {
		return 1
	}
	return num * calculateFactorial(num - 1)
}

function calculatePower(base, exponent) {
	if (exponent == 0) return 1
	var result = 1
	for (var i = 1; i <= exponent; i++) {
		result *= base
	}
	return result
}

function calculateSeriesSum(n, x) {
	var totalSum = 0

	for (var currentN = 1; currentN <= n; currentN++) {
		// (-1)^n
		var sign = currentN % 2 == 1 ? -1 : 1

		// (2 * n^2 + 1)
		var numeratorPart = 2 * currentN * currentN + 1

		// (2 * n)!
		var denominator = calculateFactorial(2 * currentN)

		// x^(2 * n)
		var xPower = calculatePower(x, 2 * currentN)

		// ������� ���� ����
		var currentTerm = ((sign * numeratorPart) / denominator) * xPower

		totalSum += currentTerm

		WScript.Echo(
			'A' +
				currentN +
				' = (' +
				sign +
				' * ' +
				numeratorPart +
				' / ' +
				denominator +
				') * ' +
				x +
				'^' +
				2 * currentN +
				' = ' +
				currentTerm
		)
	}

	return totalSum
}

if (WScript.Arguments.Count() < 2) {
	WScript.Echo('������: ������� n � x.')
	WScript.Echo('�������������: cscript //nologo lab2_part1.js <n> <x>')
	WScript.Quit(1)
}

var n = parseInt(WScript.Arguments(0))
var x = parseFloat(WScript.Arguments(1))

if (isNaN(n) || n <= 0) {
	WScript.Echo('������: n ������ ���� ������������� ����� ������.')
	WScript.Quit(1)
}

if (isNaN(x)) {
	WScript.Echo('������: x ������ ���� ������.')
	WScript.Quit(1)
}

WScript.Echo(
	'������ ����� ������ ' + n + ' ������ ���� (�������� ��� ����������)'
)
WScript.Echo('�������: An = ((-1)^n * (2*n^2 + 1) / (2*n)!) * x^(2*n)')
WScript.Echo('�������� x = ' + x)
WScript.Echo('--------------------------------------------------')

var result = calculateSeriesSum(n, x)

WScript.Echo('--------------------------------------------------')
WScript.Echo('����� ������ ' + n + ' ������ ����: ' + result)
