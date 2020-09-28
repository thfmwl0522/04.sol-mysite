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
		interval = setInterval(onInterval, 6000);
		slideInit();
	}

	function slideInit() {
		console.log($($slides[idx]).css("background-position"));
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
 