function sumVowels() {
	var str = prompt('Введите текст','').toLowerCase();
	var arr = str.split('');
	var sum = 0;
	for (var i=0; i<arr.length; i++) {
		item = arr[i];
		if (item === 'а' ||
			item === 'о' ||
			item === 'и' || 
			item === 'е' ||
			item === 'ё' || 
			item === 'э' ||
			item === 'ы' || 
			item === 'у' ||
			item === 'ю' ||
			item === 'я') {
			sum++;
		};
	} return sum;
}


alert(sumVowels())