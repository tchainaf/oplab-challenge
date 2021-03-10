module.exports = function bubbleSort(array) {
	do {
		repeat = false;
		array.forEach((item, i) => {
			if (item > array[i + 1]) {
				array[i] = array[i + 1];
				array[i + 1] = item;
				repeat = true;
			}
		})
	} while(repeat);
	
	return array;
}