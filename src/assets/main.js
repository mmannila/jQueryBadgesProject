$(function() {

  $.ajax({
	  url: 'https://www.codeschool.com/users/Crocostyle.json',
	  datatype: 'jsonp',
	  success: function(response) {
		  addCourses(response.courses.completed);
	  }
  });
  
  function.addCourses(courses){
	  var badges = document.getElementById("badges");
	  
	  courses.forEach(function(course){
		  
		  var newBadge = $(document.createElement("div"), {
			  "class" : "course"
		  }).appendTo(badges);
		  
		  newBadge.append($(document.createElement("h3"), {
			  text : course.title
		  });
		  
		  newBadge.append($(document.createElement("img"), {
			  src : course.badge
		  });
		  
		  newBadge.append($(document.createElement("a"), {
			  href : course.url,
		  	  "target" : "_blank",
		  	  "class" : "btn btn-primary",
		  	  text : "See Course"
		  });
	  })
  };

});
