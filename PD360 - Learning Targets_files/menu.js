//menu animation
	var toggle=true;
	$('.nav-menu').click(function(){
	if(toggle===true){
			$('.menu-bar').stop().animate({
				top:32,
				width:23,
				left:22,
			},200,function(){
				$('.menu-bar').animate({
					left:24,
					width:19
				},200,function(){
					$('#bar1').rotate({
						animateTo:-132,
						duration:250
					});
					$('#bar2').rotate({
						animateTo:-48,
						duration:250
					});
					$('#bar3').rotate({
						animateTo:-48,
						duration:250
					});
					
				})
			})
			toggle=false;
			return false;
		}
	else if(toggle===false){
			$('#bar1').stop().rotate({
				animateTo:0,
				duration:250
			});
			$('#bar2').stop().rotate({
				animateTo:0,
				duration:250
			});
			$('#bar3').stop().rotate({
				animateTo:0,
				duration:250
			})
			$('.menu-bar').stop().animate({
				width:19
			},251,function(){
				$('#bar1').animate({
					top:22
				},250)
				$('#bar2').animate({
					top:32
				},250)
				$('#bar3').animate({
					top:42
				},250)
			})
			toggle=true;
			return false;
		};
	});
	
	var drawer = function( drawer, trigger ){
		drawer.hide();
		trigger.click(function(){
			drawer.slideToggle();
			return false;
		})
	}
	var animatedDrawer = function( drawer, trigger ){
		drawer.hide();
		trigger.click(function(){
			$('#search').hide();
			if( drawer.is(":visible") == false ){
				drawer.show();
				
				$items = $('.nav-bar-right #menu2 li')
				var time = 50;
				$items.each(function(i, el){
					setTimeout( function(){
						$(el).stop().animate({
							top:0,
							opacity:1
						},500)
					}, time);
					time += 50;				
				})
									
			}
		})
		$('.dd').mouseleave(function(){
			drawer.hide();
			$('.nav-bar-right #menu2 li ').removeAttr('style');
		})
		$('.nav-menu').mouseenter(function(){
			drawer.hide();
			$('.nav-bar-right #menu2 li ').removeAttr('style');
		})
		$('.nav-bar-right').mouseleave(function(){
			drawer.hide();
			$('.nav-bar-right #menu2 li ').removeAttr('style');
		})
	}
	drawer( $('#menu'), $('.nav-menu') );
	animatedDrawer( $('#menu2'), $('.user-notifications') );
	
//Search Animation
	/*
$('#search').hide();
	$('.search-field').on("focus", function(){
		$('#search').show();
		$('#search').stop().animate({
			height:400,
			opacity:1
		},500)
	})
	
	$('.search-field').on("focusout", function(){
		$('#search').stop().animate({
			height:0,
			opacity:0
		},500,function(){
			$('#search').hide();
		})
	})
*/
	
//Resources Tab
	
	$('#resources-tab').on("mouseenter", function(){
		$('#search').hide();
		$('.search-field').blur();
		$('#resource-items').show();
		$('#resource-items').stop().animate({
			height:270,
			opacity:1
		},500)
	});
	$('#resource-items').on("mouseleave", function(){
		$('#resource-items').stop().animate({
			height:0,
			opacity:0
		},500,function(){
			$('#resource-items').hide();
		})
	})
	$('#groups-tab').on("mouseenter", function(){
		$('#resource-items').stop().animate({
			height:0,
			opacity:0
		},500,function(){
			$('#resource-items').hide();
		})
	})
	$('.logo').on("mouseenter", function(){
		$('#resource-items').stop().animate({
			height:0,
			opacity:0
		},500,function(){
			$('#resource-items').hide();
		})
	})
	
	
	
	
	
	
	
	