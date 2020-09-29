$(".navi").mouseenter(onEnter);
$(".navi").mouseleave(onLeave);

function onEnter() {
	$(this).find(".sub-wrap").stop().slideDown(500, function() {$(this).css("dispaly","flex");});
}
function onLeave() {
	$(this).find(".sub-wrap").stop().slideUp(500);
}

(function(){
	var $stage = $(".header-wrapper .stage");
	var $wrapper = $(".header-wrapper .slide-wrapper");
	var $slides = $(".header-wrapper .slide");
	var $titleLt = $(".header-wrapper .title-lt"); 
	var $titles = $(".header-wrapper .title-lt .title-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var $pagerWrap = $(".header-wrapper .pager-wrap");
	var idx = 0;
	var lastIdx = $slides.length - 1;
	var interval;
	init();
	
	function init() {
		for(var i=0; i<$slides.length; i++) {
			$pagerWrap.append('<div class="pager">·</div>');
		}
		$pagerWrap.find(".pager").eq(idx).addClass("active");
		$pagerWrap.find(".pager").click(onClick);
		interval = setInterval(onInterval, 10000);
		slideInit();
	}

	function slideInit() {
		$(".header-wrapper .slide").remove();
		$(".header-wrapper .title-lt .title-wrap").remove();
		$($($slides[idx]).clone()).appendTo($wrapper);
		$($($titles[idx]).clone()).prependTo($titleLt);
		$(".header-wrapper .title-lt .title-wrap").css("opacity");
		$(".header-wrapper .title-lt .title-wrap").css("transform");
		$(".header-wrapper .title-lt .title-wrap").css({"opacity": 1, "transform": "translateY(0)"});
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);

	function onPrev() {
		target = '100%';
		idx = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		target = '-100%';
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function onClick() {
		idx = $(this).index();
		ani();
	}

	function onInterval() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function ani() {
		$pagerWrap.find(".pager").removeClass("active");
		$pagerWrap.find(".pager").eq(idx).addClass("active");
		$(".header-wrapper .title-lt .title-wrap").stop().animate({"opacity": 0}, 300);
		$($($slides[idx]).clone()).appendTo($wrapper).stop().animate({"opacity": 1}, 500, slideInit);
	}

})();

	/*********** .sub-slide2 ***********/


(function(){
	var datas = [
		{id: 1, src: '../img/show-slider-img-1.jpg', date: 'Mar 1 - Mar 3 2022', title: 'THE STREET PAVEMENT1'},
		{id: 1, src: '../img/show-slider-img-2.jpg', date: 'Mar 2 - Mar 3 2022', title: 'THE STREET PAVEMENT2'},
		{id: 1, src: '../img/show-slider-img-3.jpg', date: 'Mar 3 - Mar 3 2022', title: 'THE STREET PAVEMENT3'},
		{id: 1, src: '../img/show-slider-img-4.jpg', date: 'Mar 4 - Mar 3 2022', title: 'THE STREET PAVEMENT4'},
		{id: 1, src: '../img/show-slider-img-5.jpg', date: 'Mar 5 - Mar 3 2022', title: 'THE STREET PAVEMENT5'},
		{id: 1, src: '../img/show-slider-img-6.jpg', date: 'Mar 6 - Mar 3 2022', title: 'THE STREET PAVEMENT6'},
		{id: 1, src: '../img/show-slider-img-10.jpg', date: 'Mar 7 - Mar 3 2022', title: 'THE STREET PAVEMENT7'},
		{id: 1, src: '../img/show-slider-img-11.jpg', date: 'Mar 8 - Mar 3 2022', title: 'THE STREET PAVEMENT8'},
	];
	var $wrapper = $(".slide-wrapper2");
	var $slideWrap = $(".slide-wrap", $wrapper); 
	var $btnPrev = $(".btn-prev", $wrapper); 
	var $btnNext = $(".btn-next", $wrapper);
	var $pagerWrap = $(".pager-wrap", $wrapper);
	var $slides = [];	
	var idx = 0;
	var lastIdx = datas.length - 1;
	var target;
	var interval;

	init();
	function init() {
		for(var i=0; i<datas.length; i++) {
			html  = '<div class="slide">';
			html += '<div class="img1">';
			html += '<img src="'+datas[i].src+'" class="w-100">';
			html += '<div class="text-wrap">';
			html += '<div class="slide-subt">'+datas[i].date+'</div>';
			html += '<div class="slide-maint">'+datas[i].title+'</div>';
			html += '</div>';
			html += '</div>';
			$slides.push($(html));
		}
		for(var i=0; i<$slides.length; i++) {
			$pagerWrap.append('<div class="pager">·</div>');
		}
		$pagerWrap.find(".pager").eq(idx).addClass("active");
		$pagerWrap.find(".pager").click(onClick);

		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$slideWrap.empty();
		console.log($slideWrap);
		$($slides[idx].clone()).appendTo($slideWrap);
		if(idx == 0) $($slides[lastIdx].clone()).prependTo($slideWrap);
		else $($slides[idx - 1].clone()).prependTo($slideWrap);
		for(var i=1; i<=4; i++) {
			if(idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($slideWrap);
			else $($slides[idx + i].clone()).appendTo($slideWrap);
		}
	}

	function ani() {
		$slideWrap.stop().animate({"left": target+"%"}, 500, slideInit);
	}

	function onPrev() {

		ani();
	}
	
	function onNext() {

		ani();
	}

	function onClick() {

	}

	function onInterval() {

	}

	$wrapper.hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(onNext, 3000);
	});

})();
 