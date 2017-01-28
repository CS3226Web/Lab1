var rows = $('#ranktable tbody tr').length;
var cellArr = new Array(9); //store highest
var rowNum = new Array(9); //store row num of highest cell
var cell;
cellArr.fill([]);
for (var i = 0; i < rows; i++) {
	for (var j = 4; j < 13; j++) {
		cell = $('#ranktable tbody tr:eq(' + i + ') td').eq(j);
		if (cell.html() > cellArr[j - 4]) {
			cellArr[j - 4] = cell.html();
			rowNum[j - 4] = [];
			rowNum[j - 4].push(i);
		}
		else if (cell.html() == cellArr[j - 4]) {
			cellArr[j - 4] = cell.html();
			rowNum[j - 4].push(i);
		}
		else {
			continue;
		}
	}
}
for (var k = 0; k < rowNum.length; k++) {
	for (var l = 0; l < rowNum[k].length; l++) {
		$('#ranktable tbody tr:eq(' + rowNum[k][l] + ') td').eq(k + 4).css("backgroundColor", "orange");
	}
}