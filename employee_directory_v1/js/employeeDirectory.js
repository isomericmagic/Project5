$(document).ready(function () {
  $.getJSON("https://randomuser.me/api/?results=12", function getEmployees (data) {
    //console.log(data.results);
    $.each( data.results, function (i, employee) {
      var employeeHTML = '<a class="box" href=\'' + employee.picture.large + '\' rel="lightbox"';
      employeeHTML += '<div class="photo" style="background-image: url(\'' + employee.picture.large + '\');"></div>';
      employeeHTML += '<div class="student-info">';
      employeeHTML += '<p class="name">'+ employee.name.first + ' ' + employee.name.last + '</p>';
      employeeHTML += '<p class="email">'+ employee.email +'</p>';
      employeeHTML += '<p class="city">'+ employee.location.city +'</p>';
      employeeHTML += '</div></a>';
      $('#primary-container').append(employeeHTML);
    });
  });
}); // end ready


/* stuff to grab:

data.results[0].name.first
data.results[0].name.last
data.results[0].email
data.results[0].location.city
data.results[0].picture.large


*/