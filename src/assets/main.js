$(function() {

  $.ajax({
	  url: 'https://www.codeschool.com/users/Crocostyle.json',
	  datatype: 'jsonp',
	  success: function(response) {
		  response.courses.completed.forEach(function(course) {
			  var badges = document.getElementById("badges");
			  var newBadge = document.createElement("div");
			  newBadge.classList.add("course");
			  
			  var title = document.createElement("h3");
			  title.text = course.title;
			  newBadge.appendChild(title);
			  
			  var img = document.createElement("img");
			  img.setAttribute("src", course.badge);
			  newBadge.appendChild(img); 

			  var a = document.createElement("a");
			  a.setAttribute("href", course.url);
			  a.setAttribute("target", "_blank");
			  a.classList.add("btn");
			  a.classList.add("btn-primary");
			  a.text = "See Course";
			  
			  newBadge.appendChild(a); 

			  badges.appendChild(newBadge);
		  });
	  }
  });

});
