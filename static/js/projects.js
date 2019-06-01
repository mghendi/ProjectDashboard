$(document).ready(function(){
    var dataTable = $("#dataTable").DataTable()
    var projectsChannel = pusher.subscribe('projects');
    projectsChannel.bind('add', function(data) {
    var date = new Date();
    dataTable.row.add([
        data.projectref,
        data.country,
        data.implementingoffice,
        data.duration,
        `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
        data.grantamount
      ]).draw( false );
    });
  });