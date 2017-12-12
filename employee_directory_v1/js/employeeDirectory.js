$(document).ready(function () {
  $.getJSON("https://randomuser.me/api/?results=12", function getEmployees (data) {
    var employeeNumber = 0;
    $.each( data.results, function (i, employee) {
      var employeeHTML = '<div class="box" data-featherlight="#mylightbox' + employeeNumber.toString() + '">';
      employeeHTML += '<div class="photo" style="background-image: url(\'' + employee.picture.large + '\');"></div>';
      employeeHTML += '<div class="student-info">';
      employeeHTML += '<p class="name">'+ employee.name.first + ' ' + employee.name.last + '</p>';
      employeeHTML += '<p class="email">'+ employee.email +'</p>';
      employeeHTML += '<p class="city">'+ employee.location.city +'</p>';
      employeeHTML += '</div></div>';
      employeeHTML += '<div hidden class="pop-up-box" id="mylightbox' + employeeNumber.toString() + '">';
      employeeHTML += '<div class="pop-up-photo" style="background-image: url(\'' + employee.picture.large + '\');"></div>';
      employeeHTML += '<div class="pop-up-student-info">';
      employeeHTML += '<br>';
      employeeHTML += '<p class="pop-up-name">'+ employee.name.first + ' ' + employee.name.last + '</p>';
      employeeHTML += '<p class="pop-up-email">'+ employee.email +'</p>';
      employeeHTML += '<p class="pop-up-city">'+ employee.location.city +'</p>';
      employeeHTML += '<p class="pop-up-line">_________________________________</p>';
      employeeHTML += '<p class="pop-up-details">(310) 257-3006</p>';
      employeeHTML += '<p class="pop-up-details">1315 Storm Parkway Torrance, CA 90501</p>';
      employeeHTML += '<p class="pop-up-details">01/01/2015</p>';
      employeeHTML += '</div></div>';
      $('#primary-container').append(employeeHTML);
      employeeNumber ++;
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