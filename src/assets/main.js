$(function() {

  $.ajax({url: 'https://www.codeschool.com/users/Crocostyle.json',
	  datatype: 'jsonp',
	  success: function(response) {
		  addCourses(response.courses.completed);
	  }
  });
  
  function addCourses(courses){
	  var $badges = $("#badges");
	  
	  courses.forEach(function(course){
		  
		  var $newBadge = $("<div />", {
			  "class" : "course"
		  }).appendTo(badges);
		  
		  $newBadge.append($("<h3 />", {
			  text : course.title
		  }));
		  
		  $newBadge.append($("<img />", {
			  src : course.badge
		  }));
		  
		  $newBadge.append($("<a />", {
			  href : course.url,
		  	  target : "_blank",
		  	  "class" : "btn btn-primary",
		  	  text : "See Course"
		  }));
	  })
  }

});
