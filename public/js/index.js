$(".navi").mouseenter(onEnter);
$(".navi").mouseleave(onLeave);

function onEnter() {
	$(this).find(".sub-wrap").stop().slideDown(500);
}
function onLeave() {
	$(this).find(".sub-wrap").stop().slideUp(500);
}


/********************* main-slide ***********************/

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
		interval = setInterval(onInterval, 7000);
		slideInit();
	}

	function slideInit() {
		$(".header-wrapper .slide").remove();
		$(".header-wrapper .title-lt .title-wrap").remove();
		var slide = $($($slides[idx]).clone()).appendTo($wrapper);
		slide.css("background-position", "0 50%");
		setTimeout(function(){
			slide.css("background-position", "-20% 30%");
		}, 0);
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
		{id: 0, src: '../img/show-slider-img-1.jpg', date: 'Mar 1 - Mar 3 2022', title: 'THE STREET PAVEMENTS', cont: 'View more'},
		{id: 1, src: '../img/show-slider-img-2.jpg', date: 'Mar 2 - Mar 15 2022', title: 'ABSTRACT WIREFRAME', cont: 'View more'},
		{id: 2, src: '../img/show-slider-img-3.jpg', date: 'Mar 3 - Mar 15 2022', title: 'LOOKING TO ETERNITY', cont: 'View more'},
		{id: 3, src: '../img/show-slider-img-4.jpg', date: 'Mar 4 - Mar 15 2022', title: 'FLOWERS AND MINDFULNESS', cont: 'View more'},
		{id: 4, src: '../img/show-slider-img-5.jpg', date: 'Mar 5 - Mar 15 2022', title: 'TAKE ME TO THE FIELDS', cont: 'View more'},
		{id: 5, src: '../img/show-slider-img-6.jpg', date: 'Mar 6 - Mar 15 2022', title: 'INNER SPIRIT REVEALED', cont: 'View more'},
		{id: 6, src: '../img/show-slider-img-10.jpg', date: 'Mar 7 - Mar 15 2022', title: 'DON MISSURI PRESENCE', cont: 'View more'},
		{id: 7, src: '../img/show-slider-img-11.jpg', date: 'Mar 8 - Mar 15 2022', title: 'MONTIVELLI’S FLOWERS',cont: 'View more'},
		{id: 8, src: '../img/show-slider-img-12.jpg', date: 'Mar 8 - Mar 15 2022', title: 'LA TRIENALE DI VENICE',cont: 'View more'},
		{id: 9, src: '../img/show-slider-img-13.jpg', date: 'Mar 8 - Mar 15 2022', title: 'LA BERCEUSE TALKS',cont: 'View more'},
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
			html += '<div class="sub-wrap">';
			html += '<div class="hover-ani"></div>';
			html += '<div class="slide-text">'+datas[i].cont+'</div>';
			html += '</div>';
			html += '</div>';
			$slides.push($(html));
		}
/* 		for(var i=0; i<$slides.length; i++) {
			$pagerWrap.append('<div class="pager">·</div>');
		}
		$pagerWrap.find(".pager").eq(idx).addClass("active");
		$pagerWrap.find(".pager").click(onClick);
		slideInit(); */
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


	function onPrev() {
		$(this).off("click");
		idx = (idx == 0) ? lastIdx : idx - 1;
		target = 0
		ani();
	}
	
	function onNext() {
		$(this).off("click");
		idx = idx == lastIdx ? 0 : idx + 1;
		ani();
	}

	function ani() {
		$slideWrap.stop().animate({"left": target+"%"}, 700, slideInit);
	}

})();
 