/* (function(){
	var slides = [
		{ id: 0, src: '../img/slide-01.jpg', title: '명화1' },
		{ id: 1, src: '../img/slide-02.jpg', title: '명화2' },
		{ id: 2, src: '../img/slide-03.jpg', title: '명화3' },
		{ id: 3, src: '../img/slide-04.jpg', title: '명화4' }
	];

	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var $pagerWrap = $(".header-wrapper .pager-wrap");
	var $pager;
	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;

	function init() {
		var html, i;
		for(i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="'+slides[i].src+'">';
			html += '</div>';
			$slides[i] = $(html);
			html = '<span class="pager">●</span>';
			$pagerWrap.append(html);
		}
		$pager = $pagerWrap.find(".pager");
		$pager.click(onPagerClick).eq(idx).addClass("active");
		slideInit();
		interval = setInterval(onNext, 10000);
	}

	function slideInit() {
		$slideWrap.html($slides[idx].clone());
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);

	function onPrev() {
		idx = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function onPagerClick() {
		idx = $(this).index();
		ani();
	}

	function ani() {
		$pager.removeClass("active").eq(idx).addClass("active");
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({"opacity": 1}, 500, slideInit);
	}
	init();
})(); */