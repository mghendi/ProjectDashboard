$(document).ready(function () {
    $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    })

    $('[data-toggle="tooltip"]').tooltip()

    var descriptionChannel = pusher.subscribe('description');
    messageChannel.bind('add', function(data) {
      var description = document.getElementById('description-count')
      var date = new Date();
      var toAppend = document.createElement('a')
      toAppend.classList.add('list-group-item', 'list-group-item-action')
      toAppend.href = '#'
      document.getElementById('description-box').appendChild(toAppend)
      toAppend.innerHTML ='<div class="media">'+
                      '<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="">'+
                      '<div class="media-body">'+
                        `<strong>${data.projecttitle}</strong> has a new description.`+
                        `<em>${data.description}</em>.`+
                        `<div class="text-muted smaller">Today at ${date.getHours()} : ${date.getMinutes()}</div>`+
                      '</div>'+
                    '</div>'

      description.innerText = parseInt(description.innerText)+1
    });
  });