/********************* navi-wrap ***********************/
$(".header-wrapper .navi-wrap .navi").mouseenter(onEnter);
$(".header-wrapper .navi-wrap .navi").mouseleave(onNaviLeave);
 
function onEnter() {
	$(this).find(".sub-wrap1").stop().slideDown(500);
}
function onNaviLeave() {
	$(this).find(".sub-wrap1").stop().slideUp(500);
}

/*********** .side-navi ***********/

$(".header-wrapper .top-rt .bar").click(onShow);
$(".header-wrapper .side-navi").mouseleave(onLeave)
$(".header-wrapper .side-navi").mouseenter(onOver);
$(".navi-close").click(onHide);
$(".navi-close").mouseenter(function(e){ e.stopPropagation(); });

function onShow() {
	$(".side-navi").addClass("show").removeClass("hide");
}

function onOver() {
	$("body").off("mousemove");
	$(".navi-close").hide();
}

function onBodyMove(e) {
	var x = e.pageX;
	var y = e.pageY;
	$(".navi-close").css({"left": x+"px", "top": y+"px"});
}


function onLeave(e) {
	if($(".side-navi").hasClass("show")) {
		$(".navi-close").show();
		$("body").mousemove(onBodyMove);
	}
}

function onHide() {
	$(".side-navi").addClass("hide").removeClass("show");
	$("body").off("mousemove");
	$(".navi-close").hide();
}

/*********** .mtop-wrap .navi-bar ***********/

$(".mtop-wrap .navi-bar").click(function() {
	$(".mtop-wrap .mtop-bottom").stop().slideToggle(200);
});
$(".mtop-wrap .navi-wrap").click(function(){
	$(".mtop-wrap").find(".sub-wrap").stop().slideUp(200);
	$(this).find(".sub-wrap").stop().slideToggle(200);
});


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
		interval = setInterval(onInterval, 8000);
		slideInit();
	}

	function slideInit() {
		$(".header-wrapper .slide").remove();
		$(".header-wrapper .title-lt .title-wrap").remove();
		var slide = $($($slides[idx]).clone()).appendTo($wrapper);
		slide.css("background-position", "0 50%");
		setTimeout(function(){
			slide.css("background-position", "-10% 40%");
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
		{id: 9, src: '../img/show-slider-img-13.jpg', date: 'Mar 8 - Mar 15 2022', title: 'LA BERCEUSE TALKS',cont: 'View more'}
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
/* 			html += '<div class="img-wrapper">';
			html += '<div class="img-wrap"></div>'; */
			html += '<img src="'+datas[i].src+'" class="w-100">';
/* 			html += '</div>'; */
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
/* 			html = '<span class="pager">·</span>';
			$pagerWrap.append(html); */
		}
/* 		$pager = $pagerWrap.find(".pager");
		$pager.click(onPagerClick).eq(idx).addClass("active"); */
		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$slideWrap.empty();
		$slideWrap.css("left", "-25%");
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
		winWid = $(window).outerWidth();
		if(winWid < 576) target = -200;
		else if(winWid < 768) target = -100;
		else if(winWid < 992) target = -66.6666;
		else target = -50;
		ani();
	}

	function onPagerClick() {
		idx = $(this).index();
		ani();
	}

	function ani() {
		$slideWrap.stop().animate({"left": target+"%"}, 700, slideInit);
	}

})();
 


/*********** .sub-slide3 ***********/


(function(){
	var datas = [
		{id: 0, src: '../img/shop-img-1-600x600.jpg', title: 'MUSEA BOOK', star: '★★★★★', price: '17$', cont:'Add to cart'},
		{id: 1, src: '../img/shop-img-2-600x600.jpg', title: 'DEGAS BOOK', star: '★★☆☆☆', price: '15$', cont:'Add to cart'},
		{id: 2, src: '../img/shop-img-3-600x600.jpg', title: 'LINEN BAG', star: '★☆☆☆☆', price: '15$', cont:'Add to cart'},
		{id: 3, src: '../img/shop-img-4-600x600.jpg', title: 'BROCHURE', star: '★★★★★', price: '29$', cont:'Add to cart'},
		{id: 4, src: '../img/shop-img-5-600x600.jpg', title: 'SMALL RUG', star: '★★★☆☆', price: '30$', cont:'Add to cart'},
		{id: 5, src: '../img/shop-img-6-600x600.jpg', title: 'SCULPTURE', star: '★★★★☆', price: '20$', cont:'Add to cart'},
		{id: 6, src: '../img/shop-img-7-600x600.jpg', title: 'MUG', star: '★★★★★', price: '13$', cont:'Add to cart'},
		{id: 7, src: '../img/shop-img-8-600x600.jpg', title: 'WINSLOW BAG' , star: '★★★☆☆', price: '32$', cont:'Add to cart'},
		{id: 8, src: '../img/shop-img-9-600x600.jpg', title: 'PHONE CASE', star: '★★★★☆', price: '15$', cont:'Add to cart'},
		{id: 9, src: '../img/shop-img-10-600x600.jpg', title: 'ALLEN CARDS', star: '★★☆☆☆', price: '24$', cont:'Add to cart'},
		{id: 10, src: '../img/shop-img-11-600x600.jpg', title: 'ART', star: '★★☆☆☆', price: '950$', cont:'Add to cart'},
		{id: 11, src: '../img/shop-img-12-600x600.jpg', title: 'BLUE HOODIE', star: '★★★★★', price: '20$', cont:'Add to cart'}
	];
	var $wrapper = $(".slide-wrapper3");
	var $slideWrap = $(".slide-wrap", $wrapper); 
	var $btnPrev = $(".btn-prev", $wrapper); 
	var $btnNext = $(".btn-next", $wrapper);
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
			html += '<div class="title">'+datas[i].title+'</div>';
			html += '<div class="star">'+datas[i].star+'</div>';
			html += '<div class="price">'+datas[i].price+'</div>';
			html += '</div>';
			html += '<div class="btn">';
			html += '<svg height="46" width="157" class="btn-dash">';
			html += '<rect height="46" width="157"></rect>';
			html += '</svg>';
			html += '<div class="btn-text">'+datas[i].cont+'</div>';
			html += '</div>';
			html += '</div>';
			$slides.push($(html));
		}
/* 		interval = setInterval(onInterval, 7000); */
		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$slideWrap.empty();
		//console.log($slideWrap);
		$slideWrap.css("left", "-25%");
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
		winWid = $(window).outerWidth();
		if(winWid < 576) target = -200;
		else if(winWid < 768) target = -100;
		else if(winWid < 992) target = -66.6666;
		else target = -50;
		ani();
	}

	function onPagerClick() {
		idx = $(this).index();
		ani();
	}

	function onInterval() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function ani() {
		$slideWrap.stop().animate({"left": target+"%"}, 700, slideInit);
	}

})();



/*********** 이미지 animation ***********/

$(function(){
	 var $offset = 300;
	 var $offsetTop = $(".sub-wrapper1").offset().top - 300;
	 
	 $(window).scroll(function() {
		 if($(window).scrollTop() > $offsetTop) {
			$(".sub-wrapper1").find('.img-wrap').css("animation-name","scroll");
		 }
	 });
});

$(function(){
	var $offsetTop = $(".sub-wrapper2").offset().top - 500;
	
	$(window).scroll(function() {
		if($(window).scrollTop() > $offsetTop) {
		 $(".sub-wrapper2").find('.img-wrap').css("animation-name","scroll2");
		}
	});
});

$(function(){
	var $offsetTop = $(".sub-wrapper4").offset().top - 500;
	
	$(window).scroll(function() {
		if($(window).scrollTop() > $offsetTop) {
		 $(".sub-wrapper4").find('.img-text').addClass('img-change');
		 $(".sub-wrapper4").find('.img-wrap').addClass('text-change');
/* 		 $(".sub-wrapper4").find('.img-wrap').addClass("text-change"); */
/* 		 $(".sub-wrapper4").find('.img-wrap').addClass("display","block"); */
		}
	});
});

$(function(){
	var $offsetTop = $(".sub-wrapper7").offset().top - 500;
	
	$(window).scroll(function() {
		if($(window).scrollTop() > $offsetTop) {
		 $(".sub-wrapper7").find('.img-wrap').css("animation-name","scroll2");
		}
	});
});

$(function(){
	var $offsetTop1 = $(".cont-1910").offset().top - 500;
	var $offsetTop2 = $(".cont-1982").offset().top - 500;
	var $offsetTop3 = $(".cont-2002").offset().top - 500;
	console.log($offsetTop2);
	$(window).scroll(function() {
		if($(window).scrollTop() > $offsetTop1) {
		 $(".cont-1910").find('.cnt1').css("animation-name","scroll");
		}
		 if($(window).scrollTop() > $offsetTop2) {
				$(".cont-1982").find('.cnt2').css("animation-name","scroll");
			}
			if($(window).scrollTop() > $offsetTop3) {
					$(".cont-2002").find('.cnt3').css("animation-name","scroll");
				}
	});
});


/* $(function(){
	var $offsetTop1 = $(".cont-1910").offset().top - 500;
	var $offsetTop2 = $(".cont-1982").offset().top - 500;
	var $offsetTop3 = $(".cont-2002").offset().top - 500;
	console.log($offsetTop2);
	$(window).scroll(function() {
		if($(window).scrollTop() > $offsetTop1) {
		 $(".cont-1910").find('.sub1').css("height", "100%");
		}
		 if($(window).scrollTop() > $offsetTop2) {
				$(".cont-1982").find('.cnt2').css("animation-name","scroll");
			}
			if($(window).scrollTop() > $offsetTop3) {
					$(".cont-2002").find('.cnt3').css("animation-name","scroll");
				}
	});
}); */





(function(){
	var slides = [
		{ id: 0, article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor<br>incididunt ut labore et dolore magna aliqua ut enimad<br>minim veniam quis nostrud exerci tation ullamco', name: 'Isabel Tillman', visitor: 'Visitor' },
		{ id: 1, article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor<br>incididunt ut labore et dolore magna aliqua ut enimad<br>minim veniam quis nostrud exerci tation ullamco', name: 'Isabel Tomas', visitor: 'Visitor' },
		{ id: 2, article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor<br>incididunt ut labore et dolore magna aliqua ut enimad<br>minim veniam quis nostrud exerci tation ullamco', name: 'Rihanna', visitor: 'Visitor' }
	];

	var $slideWrap = $(".sub-wrapper5 .slide-wrap");
	var $btnPrev = $(".sub-wrapper5 .btn-prev");
	var $btnNext = $(".sub-wrapper5 .btn-next");
	var $pagerWrap = $(".sub-wrapper5 .pager-wrap");
	var $pager;	
	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;

	function init() {
		var html, i;
		for(i in slides) {
			html = '<div class="slide-text">';
			html += '<div class="slide-article">'+slides[i].article+ '</div>';
			html += '<div class="slide-name">'+slides[i].name+ '</div>';
			html += '<div class="slide-visitor">'+slides[i].visitor+ '</div>';
			html += '</div>';
			$slides[i] = $(html);
			html = '<span class="pager">●</span>';
			$pagerWrap.append(html);
		}
		$pager = $pagerWrap.find(".pager");
		$pager.click(onPagerClick).eq(idx).addClass("active");
		slideInit();
/* 		interval = setInterval(onNext, 3000); */
	}

	function slideInit() {
		$slideWrap.css("left", 0);
		$slideWrap.html($slides[idx].clone());
		if(idx == 0) $slideWrap.prepend($slides[lastIdx].clone());
		else $slideWrap.prepend($slides[idx - 1].clone());
		if(idx == lastIdx) $slideWrap.append($slides[0].clone());
		else $slideWrap.append($slides[idx + 1].clone());
		$slide = $slideWrap.find(".slide");
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

	function onPagerClick() {
		var oldIdx = idx;
		idx = $(this).index();
		if(oldIdx < idx) { //next
			$slide.eq(2).remove();
			$slideWrap.append($slides[idx].clone());
			target = '-100%';
			ani();
		}
		if(oldIdx > idx) { //prev
			$slide.eq(0).remove();
			$slideWrap.prepend($slides[idx].clone());
			target = '100%';
			ani();
		}
	}

	function ani() {
		$pager.removeClass("active").eq(idx).addClass("active");
		$slideWrap.stop().animate({"left": target}, 500, slideInit);
	}
	init();
})();