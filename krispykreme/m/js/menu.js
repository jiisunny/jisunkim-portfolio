// menu.js

$(function(){

	$("#main_nav > li > h3").click(function(){
		if($(this).parent("li").attr("class")=="active"){
			$(this).parent("li").removeClass("active");
		}else{
			$("#main_nav > li").removeClass("active");
			$(this).parent("li").addClass("active");
		}
	});
	$("label.toggle").click(function(){
		$("#main_nav > li").removeClass("active");
		$("body").css({position:"fixed"});
	});

	$("label.btn_close").click(function(){
		$("body").css({position:"static"});
	});
});