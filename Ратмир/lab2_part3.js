// lab2_part3.js - ЛР №2, Часть III
// Поиск слов, оканчивающихся на гласную букву

function findWordsEndingWithVowel(text) {
	// Определяем гласные буквы (строчные и заглавные)
	var vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ'

	// Разбиваем текст на слова по пробелам и знакам препинания
	// Создаем массив разделителей
	var separators = ' .,!?;:-"()[]{}'
	var words = []
	var currentWord = ''

	for (var i = 0; i < text.length; i++) {
		var char = text.charAt(i)
		if (separators.indexOf(char) == -1) {
			// Это буква, добавляем к текущему слову
			currentWord += char
		} else {
			// Это разделитель, сохраняем слово (если оно не пустое)
			if (currentWord.length > 0) {
				words.push(currentWord)
				currentWord = ''
			}
		}
	}
	// Не забываем добавить последнее слово, если текст не заканчивается разделителем
	if (currentWord.length > 0) {
		words.push(currentWord)
	}

	// Ищем слова, оканчивающиеся на гласную
	var foundWords = []
	for (var j = 0; j < words.length; j++) {
		var word = words[j]
		if (word.length > 0) {
			var lastChar = word.charAt(word.length - 1)
			if (vowels.indexOf(lastChar) != -1) {
				foundWords.push(word)
			}
		}
	}

	return foundWords
}

// Основная программа
if (WScript.Arguments.Count() < 1) {
	WScript.Echo('Ошибка: Укажите текст в кавычках.')
	WScript.Echo('Пример: cscript //nologo lab2_part3.js "Привет мир это тест."')
	WScript.Quit(1)
}

var inputText = WScript.Arguments(0)

// Проверяем, что текст заканчивается точкой
if (inputText.charAt(inputText.length - 1) != '.') {
	WScript.Echo('Ошибка: Текст должен заканчиваться точкой.')
	WScript.Quit(1)
}

WScript.Echo('Исходный текст: ' + inputText)
WScript.Echo('--------------------------------------------------')

var vowelEndingWords = findWordsEndingWithVowel(inputText)

WScript.Echo('Найденные слова, оканчивающиеся на гласную букву:')
for (var k = 0; k < vowelEndingWords.length; k++) {
	WScript.Echo(k + 1 + '. ' + vowelEndingWords[k])
}

WScript.Echo('--------------------------------------------------')
WScript.Echo('Общее количество найденных слов: ' + vowelEndingWords.length)
