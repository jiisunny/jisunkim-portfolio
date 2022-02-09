/* acodian_menu.js */
/*
메뉴를 클릭하면 열리고 열린메뉴를 클릭하면 닫히게
*/

$(function(){
	var liAry=[];

	for( var i=0; i<$("#main_nav > ul > li").length; i++){
		liAry[i]=false;
	}
	
	$("#main_nav > ul > li > h3").click(function(){
		var liIndex = $(this).parent("li").index();

		
		liAry[liIndex]=!liAry[liIndex];

		if(liAry[liIndex]){
			$(this).parent("li").addClass("active");
		}else{
			$(this).parent("li").removeClass("active");
		}

	});

	$("label.btn_close").click(function(){
		for( var i=0; i<$("#main_nav > ul > li").length; i++){
			liAry[i]=false;
		}

		$("#main_nav > ul > li").removeClass("active");

	});
});