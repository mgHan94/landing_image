$(function () {

	var locationHref = location.href;
	var locationSplitNumber = locationHref.split('/blog/')[1];
	var locationSplitPath = locationHref.split('/blog/')[0];


	var mainBlogPath = locationSplitPath + "/blog/";
	var currentLocationNumber = parseInt(locationSplitNumber.replace("/", ""))

	var prevBlogPath = mainBlogPath + (currentLocationNumber - 1) + "/index.html"
	var nextBlogPath = mainBlogPath + (currentLocationNumber + 1) + "/index.html"

	replaceBlogStep(nextBlogPath,".next-blog");
	replaceBlogStep(prevBlogPath,".prev-blog")

});


function replaceBlogStep(path,className){
	$.ajax({
		url: path,
		type: 'GET',
		success: function (data) {
			var html = $(data);
			var text =  html.find(".blog-title > .center").text();
			
			$('p',className).text(text)
			$(className).attr("href",path)
		},
		error: function (data) {
			$(className)[0].style = "opacity: 0.6; pointer-events: none;"
			$('p',className).text("No previous blog post")
		}
	});


}