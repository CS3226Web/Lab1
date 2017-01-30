var rows = $('#ranktable tbody tr').length;
var current;
var arr = [];
for (var i = 0; i < rows; i++) {
	current = Number($('#ranktable tbody tr:eq(' + i + ') td').eq(12).html());
	arr.push(current);
}
arr = Array.from(new Set(arr)).sort(function(a, b) { return b - a });
for (i = 0; i < rows; i++) {
	current = Number($('#ranktable tbody tr:eq(' + i + ') td').eq(12).html());
	if (current == arr[0]) {
		$('#ranktable tbody tr').eq(i).addClass("gold");
	}
	if (current == arr[1]) {
		$('#ranktable tbody tr').eq(i).addClass("silver");
	}
	if (current == arr[2]) {
		$('#ranktable tbody tr').eq(i).addClass("bronze");
	}
	if (current == arr[arr.length - 1]) {
		$('#ranktable tbody tr').eq(i).addClass("pink");
	}
}