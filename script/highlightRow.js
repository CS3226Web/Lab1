var rows = $('#ranktable tbody tr').length;
var first = 0, second = 0, third = 0, cell; 
var last = 999999;
var row1 = [];
var row2 = [];
var row3 = []; 
var rowlast = [];
for (var i = 0; i < rows; i++) {
	cell = $('#ranktable tbody tr:eq(' + i + ') td').eq(12);
	if (Number(cell.html()) >= first) {
		console.log(Number(cell.html())+">"+first);
		if (Number(cell.html()) > first) {
			row1 = [];
			row1.push(i);
		}
		else {
			row1.push(i);
		}
		first = Number(cell.html());
	}
	else if (Number(cell.html()) >= second) {
		if (Number(cell.html()) > second) {
			row2 = [];
			row2.push(i);
		}
		else {
			row2.push(i);
		}
		second = Number(cell.html());
	}
	else if (Number(cell.html()) >= third) {
		if (Number(cell.html()) > third) {
			row3 = [];
			row3.push(i);
		}
		else {
			row3.push(i);
		}
		third = Number(cell.html());
	}
	else if (Number(cell.html()) <= last) {
		if (Number(cell.html()) < last) {
			rowlast = [];
			rowlast.push(i);
		}
		else {
			rowlast.push(i);
		}
		last = Number(cell.html());
	}
	else {
		continue;
	}
}
for (var x = 0; x < rowlast.length; x++) {
	$('#ranktable tbody tr').eq(rowlast[x]).css("backgroundColor", "pink");
}
for (x = 0; x < row3.length; x++) {
	$('#ranktable tbody tr').eq(row3[x]).css("backgroundColor", "#cd7f32");
}
for (x = 0; x < row2.length; x++) {
	$('#ranktable tbody tr').eq(row2[x]).css("backgroundColor", "silver");
}
for (x = 0; x < row1.length; x++) {
	$('#ranktable tbody tr').eq(row1[x]).css("backgroundColor", "gold");
}

