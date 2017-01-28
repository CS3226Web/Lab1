oldScore = $("#ranktable tbody").find("tr:first").find("td:eq(12)").text();
oldScore = parseFloat(oldScore);
$('#ranktable tbody tr').each(function(){
    var currentRow = $(this).closest("tr");
    var curScore = currentRow.find("td:eq(12)").text();
    curScore = parseFloat(curScore);
    var gap = oldScore - curScore;
    oldScore = curScore;
    var newHeight = 30 + 30 * gap;
    $(this).closest("tr").css('height', newHeight);
})
