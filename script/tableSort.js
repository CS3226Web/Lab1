var table = $('#tableRank').DataTable({
  "bPaginate": false,
  "bAutoWidth": false,
  "bFilter": false,
  "bInfo" : false,
  "aaSorting": [[12, 'desc']],
  "columnDefs": [{
    "targets": [0],
    "orderable": false,
  }]
});

$('#tableRank thead th').on('click', function() {
  $('tbody tr').each(function(index) {
    $(this).css('height', '31' + "px");
  });
});
