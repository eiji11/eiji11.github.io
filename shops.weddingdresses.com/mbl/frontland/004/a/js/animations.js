jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}
jQuery.fn.centerToParent = function () {
    this.css("position","absolute");
    var parent = $(this).parent();
    this.css("top", Math.max(0, ((parent.outerHeight() - $(this).outerHeight()) / 2) + 
                                                parent.scrollTop()) + "px");
    this.css("left", Math.max(0, ((parent.outerWidth() - $(this).outerWidth()) / 2) + 
                                                parent.scrollLeft()) + "px");
    return this;
}

var interstitial01_animatable = $();
$(document).ready(function(){
	interstitial01_animatable = $('#interstitial-01 .animatable');
});

function animation7(){
	$('#page-01').hide();
	$('#page-02').removeClass('init-hidden');
	$('#input-searcher-name-02').val($('#input-searcher-name').val());

	$('#interstitial-overlay').animate({
		transform: 'scale(0.5)',
		opacity: 0.0
	}, 500).animate({
		transform: 'scale(0)',
	}, 1000, function(){
		$('#input-searcher-email').on("input", function(){
			var content = $(this).val();
			var searcherEmailNext = $('#searcher-email-next');
			if (content.length > 0)
			{
				searcherEmailNext.animate({
					transform: 'scale(1.0)'
				}, 500, 'easeInOutElastic');
			}
			else
			{
				searcherEmailNext.animate({
					transform: 'scale(0.0)'
				}, 500, 'easeInOutElastic');
			}
		});

	});
};

function animation6(){
	var e2 = $('#container-lines-animation');
	e2.find('.row-06').fadeIn();
	setTimeout(animation7, 5000);
};

function animation5(){
	var progressBar = $('#lines-progress-bar').progressbar({
		value: 0
	});
	var e2 = $('#container-lines-animation');
	e2.find('.row-05').fadeIn();
	var timer = 0;
	var progressor = function(){
		var value = 0;
		if (timer < 1000)
		{
			value = (timer / 1000) * 50;
		}
		else if (timer < 1500)
		{
			value = 50 + (((timer - 1000) / 500) * 15);
		}
		else if (timer < 2000)
		{
			value = 65 + (((timer - 1500) / 500) * 20);	
		}
		else if (timer < 2500)
		{
			value = 85 + (((timer - 2000) / 500) * 15);	
		}
		else
		{
			value = 100;
		}

		if (timer < 3000)
		{
			setTimeout(progressor, 100);
		}
		else
		{
			setTimeout(animation6, 1000);
		}
		progressBar.progressbar('value', value);
		timer += 100;
	}
	setTimeout(progressor, 100);
}

function animation4(){
	interstitial01_animatable.removeClass('big-fonts');
	interstitial01_animatable.addClass('smaller-fonts');

	interstitial01_animatable.css('left', '100%');
	interstitial01_animatable.css('text-align', 'left');
	var originalText = 'We\'re beginning your search now';
	interstitial01_animatable.html(originalText);
	interstitial01_animatable.animate({
		left: '0%'
	}, 500, function(){
		interstitial01_animatable.animate({
			'padding-left': '10%'
		}, 200, function() {
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '.');
			}, 100);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '..');
			}, 200);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '...');
			}, 300);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '..');
			}, 400);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '..');
			}, 500);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '.');
			}, 600);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '..');
			}, 700);
			setTimeout(function(){
				interstitial01_animatable.html(originalText + '...');
			}, 800);
			setTimeout(function(){
				interstitial01_animatable.fadeOut(function(){
					interstitial01_animatable.removeClass('smaller-fonts');
					var e2 = $('#container-lines-animation');
					e2.removeClass('init-hidden');
					e2.css('margin-top', '50%');

					e2.find('.row-03').html('Near ' + $('#zipcode').val());
					e2.find('.row-04').html('With Sample Sales ' + $('.set_budget').html());

					e2.find('.row-01').fadeIn(500, function(){
						e2.find('.row-02').fadeIn(500, function(){
							e2.find('.row-03').fadeIn(500, function(){
								e2.find('.row-04').fadeIn(500, animation5);
							});
						});
					});
				});
			}, 1500);
		});
	});
}

function animation3(){
	interstitial01_animatable.html("We're");
	interstitial01_animatable.addClass('big-fonts');
    interstitial01_animatable.css('text-align', 'center');
    interstitial01_animatable.css('vertical-align', 'middle');
	interstitial01_animatable.centerToParent();
	setTimeout(function() {
		interstitial01_animatable.html("excited").centerToParent();
		setTimeout(function() {
			interstitial01_animatable.html("about").centerToParent();
			setTimeout(function() {
				interstitial01_animatable.html("your").centerToParent();
				setTimeout(function() {
					interstitial01_animatable.html("upcoming").centerToParent();
					setTimeout(function() {
						interstitial01_animatable.html("wedding!").centerToParent();
						setTimeout(animation4, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}

function animation2(){
	console.log('hey');
	interstitial01_animatable.animate({
		transform: 'scale(1.0)'
	}, 300, function(){
		setTimeout(animation3, 500);
	});
}

function animation1() {

	var interstitialOverlay = $('#interstitial-overlay')
	interstitialOverlay.removeClass('init-hidden');
	$('#container-interstitial').removeClass('init-hidden').css('transform', 'scale(0)').animate({
		transform: 'scale(1)'
	}, 400, function() {

		var iHeight = $('#container-interstitial').outerHeight();

		$('#interstitial-01').removeClass('init-hidden').height(iHeight);
		$('#interstitial-01').fadeIn(500, function(){
			console.log(interstitial01_animatable);

			interstitial01_animatable.html('Thanks ' + $('.set_name').html() + '!');
			interstitial01_animatable.css('text-align', 'center');
			interstitial01_animatable.css('vertical-align', 'middle');
			interstitial01_animatable.css('white-space', 'nowrap');
			interstitial01_animatable.centerToParent();
			interstitial01_animatable.animate({
				transform: 'scale(10.0)'
			}
			, 700, animation2);
		});

	});


}

$('#searcher-name-next').click(function(evt){
	evt.preventDefault();
});