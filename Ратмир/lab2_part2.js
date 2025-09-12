// lab2_part2.js - �� �2, ����� II
// An = 1 / (ln?(sin(1/n)))

function calculateSeriesSum(n) {
	var totalSum = 0

	for (var currentN = 1; currentN <= n; currentN++) {
		var sinValue = Math.sin(1 / currentN)

		if (sinValue <= 0) {
			WScript.Echo(
				'������: sin(1/' +
					currentN +
					') = ' +
					sinValue +
					' <= 0. �������� �� ���������.'
			)
			continue
		}

		var lnValue = Math.log(sinValue)

		var lnSquared = lnValue * lnValue

		if (lnSquared == 0) {
			WScript.Echo(
				'������: ln^2(sin(1/' + currentN + ')) = 0. ������� �� ����.'
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
	WScript.Echo('������: ������� n.')
	WScript.Echo('�������������: cscript //nologo lab2_part2.js <n>')
	WScript.Quit(1)
}

var n = parseInt(WScript.Arguments(0))

if (isNaN(n) || n <= 0) {
	WScript.Echo('������: n ������ ���� ������������� ����� ������.')
	WScript.Quit(1)
}

WScript.Echo('������ ����� ������ ' + n + ' ������ ����')
WScript.Echo('�������: An = 1 / (ln^2(sin(1/n)))')
WScript.Echo('������������ ������ Math')
WScript.Echo('--------------------------------------------------')

var result = calculateSeriesSum(n)

WScript.Echo('--------------------------------------------------')
WScript.Echo('����� ������ ' + n + ' ������ ����: ' + result)
