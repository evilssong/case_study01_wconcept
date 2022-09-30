$(function(){
	$("#gnb > ul > li").mouseenter(function(){
		$("#header").addClass("active");
	});

	$("#gnb > ul > li").mouseleave(function(){
		$("#header").removeClass("active");
	});
	
	var num=0;
	var distance=0;
	$(".pagination li").eq(0).addClass("active");
	$(".pagination li").click(function(){
		$(".pagination li").removeClass("active");
		$(this).addClass("active");
		num=$(this).index();
		distance=num*100*-1;

		$(".slider_moving").css("left", distance+"%");
	});

	$("nav > ul > li > a").focusin(function(){
		$("#header").addClass("active");
	});

	$("nav > ul > li > ul > li:last-child a").focusout(function(){
		$("#header").removeClass("active");
	});


	$(".prev").click(function(){
		if(num > 0){
			num=num-1;
		}
		else{
			num=3;
		}	
		distance=num*100*-1;
		$(".pagination li").removeClass("active");
		$(".pagination li").eq(num).addClass("active");
		$(".slider_moving").css("left", distance+"%");
	});
	$(".next").click(function(){
		if(num < 3){
			num=num+1;
		}
		else {
			num=0;
		}
		distance=num*100*-1;	
		$(".pagination li").removeClass("active");
		$(".pagination li").eq(num).addClass("active");
		$(".slider_moving").css("left", distance+"%");
	});


	$(document).keydown(function(e){
		// console.log(e.keyCode);
		if(e.keyCode == 39){
			if(num < 3){
				num=num+1;
			}
			else{
				num=0;
			}
		}
		else if(e.keyCode == 37){
			if(num > 0){
				num=num-1;
			}
			else{
				num=3;
			}
		}
		distance=num*100*-1;
		$(".pagination li").removeClass("active");
		$(".pagination li").eq(num).addClass("active");
		$(".slider_moving").css("left", distance+"%");
	});
		function intervalMoving(){
		if(num < 3){
			num=num+1;
		}
		else{
			num=0;
		}
		distance=num*100*-1;
		$(".slider_moving").css("left", distance+"%");
		$(".pagination li").removeClass("active");
		$(".pagination li").eq(num).addClass("active");
	}

	var id=setInterval(intervalMoving, 5000);
});