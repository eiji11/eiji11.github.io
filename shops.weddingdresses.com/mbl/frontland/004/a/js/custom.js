$(function() {
	
	/*first zipcode area*/
	$("#go").click(function(e){
		e.preventDefault();
	$('.fieldset-zip').hide();	
		var zip=$("#zipcode").val();
		 $("#form-zipcode").val(zip);
		    if(zipcode!=""){
				var regex=/^[0-9]+$/;
				var match = zip.match( regex );
				if(match && zip.length=='5'){
				    $("body").removeClass("front-page");

					$(".screen3").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
					$(".screen1").hide();
					$(".screen2").hide();
					// $("html").css("overflow","hidden");
					$(".ziperror").hide();
				}
				else
				{
					$(".ziperror").html("Enter valid zipcode");
					$(".ziperror").show();
				}
			}
			else
			{
				$(".ziperror").html("Enter zipcode");
				$(".ziperror").show();
			}
	}); /*first zipcode end area*/

	/*footer zipcode area*/
	$("#go1").click(function(e){
 	e.preventDefault();
	$('.fieldset-zip').hide();	
		var zip=$("#service-zipcode").val();
		 $(".set_zip").val(zip);
			if(zip!=""){
				var regex=/^[0-9]+$/;
				var match = zip.match( regex );
				if(match && zip.length=='5'){
					$('html,body').animate({scrollTop: 0}, 15);	
					$("body").removeClass("front-page");
					$(".screen3").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
					$(".screen2").hide();
					$(".ziperror1").hide();
				}
				else{
					$(".ziperror1").html("Enter valid zipcode");
					$(".ziperror1").show();
				}
			}
		else
		{
			$('html, body').animate({scrollTop:$("#go1").offset().top}, 750);	
			$(".ziperror1").html("Enter zipcode");
			$(".ziperror1").show();
		}
	}); /*footer zipcode end area*/

	$(".quotePhoneNumber1").mask("(999) 999-9999");
	$('.quotePhoneNumber1').on('click', function() {
		$(".quotePhoneNumber1").css('border','1px solid #ccc');
	});

	/*On enter name,phone and email*/

	$(document).keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			
			if($(".step5").is(":visible")){

				event.preventDefault();

				$('#updateWeddingNextName').click();
				/* Start Area to check Name validation */
				// var quote_name=$(".quoteName").val();
				// if(quote_name!="" && quote_name!='undefined')
				// {
				// 	$(".step5").hide();
				// 	$(".step6").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				// 	$(".set_name").html(quote_name);
				// 	animation1();
				// 	/*$(".quoteEmail").focus();*/
				// }
				// else
				// {
				// 	$(".quoteName").css('border','1px solid red');
				// 	event.preventDefault();
				// }
				/* End Area to check Name validation */	
			}
			
			else if($(".step6").is(":visible")){
				$("#name_and_email").click();
			}	
			
			else if($(".step7").is(":visible")){
				$("#phone").click();
			}
		}		
	}); /*end area of enter*/

	/* click on unsure option, uncheck others*/
	$("#labeled-inputs-216 .checkbox").click(function () {
		//alert("hello");
        if ($("#d7").is(':checked')) {
             $('.checkbox input').not('#d7').attr('checked', false);
		} 
   });



	
});


function daysInMonth(year,month) {
	return new Date(year, month, 0).getDate();
}
		
function getWeekend(year,month) {
	var month2=parseInt(month)-parseInt(1);
	var d = new Date(year, month2);
	var n = d.getDay();
	return n;
}
		
function updateWedding(type, val, val2){
		
	var DELAY=1500;
	var DELAY2=1500;
	var SUBMIT_DELAY=4500;	
	
   var weddingId = $(this).attr('id');
   $('#'+weddingId).addClass("link_act");
   // $('#'+val).addClass('link_act');
   setTimeout(function(){
		var cur_year = new Date().getFullYear();
		//alert(cur_year);
		var prev_month = new Date().getMonth();
		var cur_month = parseInt(prev_month)+parseInt(1);
		var cur_date = new Date().getDate();

		var prev_date = parseInt(cur_date)-parseInt(1);
		var restrict_days1 = [".d-29", ".d-30", ".d-31"];
		var restrict_days2 = [".d-30", ".d-31"];
		var restrict_days3 = [".d-31"];

		var lowEnd = 1;
		var highEnd = prev_month;
		var arr = [];
		
		while(lowEnd <= highEnd){
		   arr.push("#m-"+lowEnd++);
		}
		//alert(arr);
		var lowEnd2 = 1;
		var highEnd2 = prev_date;
		var arr2 = [];
		
		while(lowEnd2 <= highEnd2){
		   arr2.push(".d-"+lowEnd2++);
		}
			 
			if(type=='silhouette'){
				silhouette1="";
				silhouette=$('input[name="need[]"]:checked').map(function() {
			     silhouette1+=this.value+",";
			    // alert(need1);
						}).get();
				$(".screen3").addClass("inactive");
				$(".screen4").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				shot=$("#car-select").html();
				$(".screen1").hide();
				$(".screen2").hide();
			}

			if(type=='shape'){
				$(".set_shape").html(val);
				$(".set_shape").val(val);
				$(".screen4").addClass("inactive");
				$(".screen5").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				$(".screen1").hide();
				$(".screen2").hide();
				$(".screen3").hide();
			}

			if(type=='size'){
				$(".screen5").addClass("inactive");
				$(".step1").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				$(".screen3").hide();
				$(".screen4").hide();
				$(".set_size").html(val);
				$(".set_size").val(val);
			}
			
			if(type=='Year'){
				$(".step1").addClass("inactive");
				$(".step2").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				$("#show_year").fadeIn();
				$("#main_div").animate({
				   'marginLeft' : "+=60px" //moves right
				}, 1000);
				$(".set_year").html(val);
				$(".set_year").val(val);
				
				if(cur_year==val){
						$(arr.join(', ')).fadeOut(200);
				}
				else{
						$(arr.join(', ')).fadeIn(200);
				}
			}
			if(type=='Month'){
				$(".step2").addClass("inactive");
				$(".step3").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				$(".set_month").html(val);
				$(".set_month").val(val2);
				$("#show_month").fadeIn();
				$(".weekend").hide();
				
				var month_width = $("#show_month").width();
				var month_width = parseInt(month_width)+parseInt(7);
				$("#main_div").animate({
				   'marginLeft' : "+="+month_width+"px" //moves right
				}, 1000);
				
				var selected_year = $(".set_year").val();
				if((cur_year==selected_year) && (cur_month==val2)){
					$(arr2.join(', ')).addClass('disabled');
					var num_days = daysInMonth(selected_year,val2);
					var weekend = getWeekend(selected_year,val2);
					$("#weekend_"+weekend).show();
					if(num_days==28){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days1.join(', ')).addClass('disabled');
					}
					else if(num_days==29){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days2.join(', ')).addClass('disabled');
					}
					else if(num_days==30){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days3.join(', ')).addClass('disabled');
					}
					else{
						$(restrict_days1.join(', ')).removeClass('disabled');
					}
				}
				else{
					$(arr2.join(', ')).removeClass('disabled');
					var num_days = daysInMonth(selected_year,val2);
					var weekend = getWeekend(selected_year,val2);
					$("#weekend_"+weekend).show();
					if(num_days==28){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days1.join(', ')).addClass('disabled');
					}
					else if(num_days==29){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days2.join(', ')).addClass('disabled');
					}
					else if(num_days==30){
						$(restrict_days1.join(', ')).removeClass('disabled');
						$(restrict_days3.join(', ')).addClass('disabled');
					}
					else{
						$(restrict_days1.join(', ')).removeClass('disabled');
					}
				}
			}

			if(type=='Day'){
				$(".step3").addClass("inactive");
				$("#first-car").hide();
				$(".step4").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				
				$("#show_day").fadeIn();
				
				$("#main_div").animate({
				   'marginLeft' : "+=18px" //moves right
				}, 1000);
				
				$(".set_day").html(val);
				$(".set_day").val(val);
			}
			if(type=='Budget'){
				$(".step4").addClass("inactive");
				$("#first-car").show();
				$(".step5").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
				/*$("input").focus();*/
				$(".set_budget").html(val);
				$(".set_budget").val(val);
				
				$("#show_year").hide();
				$("#show_month").hide();
				$("#show_day").hide();
			}
			if(type=='Next' && val=='Name'){
				var name = $(".name").val();
				if(name==''){
					$(".name").css('border','1px solid red');
				}
				else{
					$(".step5").addClass("inactive");
					$(".step6").show().addClass("active").removeClass("inactive");
					$('.step6 .step').css("top", "42.5%");
					/*$("input").focus();*/
					$(".set_name").html(name);

					animation1();
				}
			}
			
			if(type=='Next' && val=='Email'){
				var email = $(".email").val();
				
				if(email!="")
				{
					var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
					var match = email.match( filter );
					var randstr=$("#randstr").val();
					if(match)
						{
							$(".loader").show();
							$('.container').prepend("<div class='overlay'></div>");
							$.ajax({
								url: 'check_mail.php',
								  type: "post",
								  data: {quote_email:email, randstr:randstr},
								  success: function(data){
									if(data=='no'){
										$('.quoteEmail_error').html('').hide();
										var serialdata = $('#wedding-form0').serialize();
										$.ajax({
											url: 'save-wedding-form.php',
											type: 'POST',
											data: serialdata
										})
										.done(function(res) {
												
										})
										.fail(function() {
											console.log("error");
										});
										var timer = setTimeout(function(){
											$(".email").css('border','1px solid #ccc');
											$(".step6").addClass("inactive");
											$(".step7").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
											$(".quotePhoneNumber1").focus();
											$(".set_email").html(email);
											$(".overlay, .loader").hide();
											clearTimeout(timer);
										}, 5000);
										}
									else{
										$(".overlay, .loader").hide();	
										$(".email").css('border','1px solid red');
										$('.quoteEmail_error').html('This email is already used. ').show();
									}
							    }
						});
					}
					else{
						$(".overlay, .loader").hide();	
						$(".email").css('border','1px solid red');
					}
				}
				else{
					$(".email").css('border','1px solid red');
				}
			}
			
			if(type=='Next' && val=='Phone'){
				var quote_phone=$(".quotePhoneNumber1").val();
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					if(quote_phone!="" && quote_phone!='undefined'){
						var regex=/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})?[-. ]?[2-9]\d{2}?[-. ]?\d{4}$/;
						var match = quote_phone.match( regex );
						if(match){
							$(".loader").show();
							$('.container').prepend("<div class='overlay'></div>");
							$.post("save-wedding-form2.php",
							{
							  randstr:randstr, quoteEmail:email, type:'quotePhoneNumber', value:quote_phone
							},
							function(data,status){
									
							});
							var timer = setTimeout(function(){
								$(".step7").addClass("inactive");
								$(".step8").show().css("bottom", "-50%").addClass("active").removeClass("inactive");
								$(".overlay, .loader").hide();
								clearTimeout(timer);
							}, 5000);
						}
						else{
							$(".quotePhoneNumber1").css('border','1px solid red');
							return false;
							e.preventDefault();
						}
					}
					else{
						$(".quotePhoneNumber1").css('border','1px solid red');
						return false;
						e.preventDefault();
					}
					return false;
					e.preventDefault();
			}
			if(type=='photographer'){
				$(".set_photographer").html(val)
				$(".set_photographer").val(val);
				var photographer = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					if(photographer=='Yes – As Low As $399'){
							$(".loader").show();
							$('.container').prepend("<div class='overlay'></div>");
							var timer = setTimeout(function(){
								$('.step8').addClass("inactive");
								$('.step9').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
								$(".overlay, .loader").hide();
								clearTimeout(timer);
							}, DELAY);
					}
					else{
						$(".set_photobudget").html('');
						$(".set_photobudget").val('');
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						$.post("save-wedding-form2.php",
							{
							 randstr:randstr, quoteEmail:email, type:'photographer', value:'No', type2:'photobudget', value2:''
							},
							function(data,status){
									
							});
						var timer = setTimeout(function(){
							$('.step9').addClass("inactive");
							$('.step10').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$('.step8').hide();
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY2);
					}
			}
			
			if(type=='photobudget'){
				$(".set_photobudget").html(val);
				$(".set_photobudget").val(val);
				var photobudget = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				$(".loader").show();
				$('.container').prepend("<div class='overlay'></div>");
				$.post("save-wedding-form2.php",
				{
				 randstr:randstr, quoteEmail:email, type:'photographer', value:'Yes – As Low As $399', type2:'photobudget', value2:val
				},
				function(data,status){
						
				});
				var timer = setTimeout(function(){
					$('.step9').addClass("inactive");
					$('.step10').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
					$(".overlay, .loader").hide();
					clearTimeout(timer);
				}, DELAY);
			}
			
			if(type=='Dj'){
				$(".set_dj").html(val)
				$(".set_dj").val(val);
				var dj = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					if(dj=='Yes – As Low As $399'){
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						var timer = setTimeout(function(){
							$('.step10').addClass("inactive");
							$('.step11').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY);
					}
					else{
						$(".set_djbudget").html('');
						$(".set_djbudget").val('');
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						$.post("save-wedding-form2.php",
							{
							 randstr:randstr, quoteEmail:email, type:'dj', value:'No', type2:'djbudget', value2:''
							},
							function(data,status){
									
							});
						var timer = setTimeout(function(){
							$('.step11').addClass("inactive");
							$('.step12').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$('.step10').hide();
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY2);
					}
			}
			
			if(type=='DjBudget'){
				$(".set_djbudget").html(val);
				$(".set_djbudget").val(val);
				var djbudget = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					var serialdata = $('#wedding-form0').serialize();
					$.post("save-wedding-form2.php",
							{
							 randstr:randstr, quoteEmail:email, type:'dj', value:'Yes – As Low As $399', type2:'djbudget', value2:val
							},
							function(data,status){
									
							});
					var timer = setTimeout(function(){
						$('.step11').addClass("inactive");
						$('.step12').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
			}
			
			if(type=='videographer'){
				$(".set_videographer").html(val);
				$(".set_videographer").val(val);
				var video = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(video=='Yes – As Low As $399'){
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						$('.step12').addClass("inactive");
						$('.step13').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
				}
				else{
					$(".set_videobudget").html('');
					$(".set_videobudget").val('');
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'videographer', value:'No', type2:'videobudget', value2:''
						},
						function(data,status){
								
						});
					var timer = setTimeout(function(){
						$('.step13').addClass("inactive");
						$('.step18').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$('.step12').hide();
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY2);
				}
			}
			
			if(type=='VideoBudget'){
				$(".set_videobudget").html(val);
				$(".set_videobudget").val(val);
				var videobudget = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
					{
					  randstr:randstr, quoteEmail:email, type:'videographer', value:'Yes – As Low As $399', type2:'videobudget', value2:val
					},
					function(data,status){
							
					});
					var timer = setTimeout(function(){
						$('.step13').addClass("inactive");
						$('.step18').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
			}
			
			

			if(type=='florists'){
				$(".set_florists").html(val);
				$(".set_florists").val(val);

				var florists = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(florists=='Yes – As Low As $499'){
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						$('.step18').addClass("inactive");
						$('.step19').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
				}
			     else{
					$(".set_floristbudget").html('');
					$(".set_floristbudget").val('');
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'florists', value:'No', type2:'floristbudget', value2:''
						},
						function(data,status){
								
						});
					var timer = setTimeout(function(){
						$('.step19').addClass("inactive");
						$('.step20').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$('.step18').hide();
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY2);
			    }
			}
			
			if(type=='floristbudget'){
				$(".set_floristbudget").html(val);
				$(".set_floristbudget").val(val);
				var floristbudget = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'florists', value:'Yes – As Low As $499', type2:'floristbudget', value2:val
						},
						function(data,status){
								
						});
					var timer = setTimeout(function(){
						$('.step19').addClass("inactive");
						$('.step20').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
			}
			
			if(type=='bands'){
				$(".set_bands").html(val);
				$(".set_bands").val(val);
				var bands = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(bands=='Yes – As Low As $249'){
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						$('.step20').addClass("inactive");
						$('.step21').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
				}
				else{
					$(".set_bandsbudget").html('');
					$(".set_bandsbudget").val('');
					$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
							$.post("save-wedding-form2.php",
							{
							  randstr:randstr, quoteEmail:email, type:'bands', value:'No', type2:'bandsbudget', value2:''
							},
							function(data,status){
									
							});
							var timer = setTimeout(function(){
								$('.step21').addClass("inactive");
								$('.step22').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
								$('.step20').hide();
								$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY2);
				}
			}
			
			if(type=='bandsbudget'){
				$(".set_bandsbudget").html(val);
				$(".set_bandsbudget").val(val);
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
						{
						 randstr:randstr, quoteEmail:email, type:'bands', value:'Yes – As Low As $249', type2:'bandsbudget', value2:val
						},
						function(data,status){
								
						});
					var timer = setTimeout(function(){
						$('.step21').addClass("inactive");
						$('.step22').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
			}

			if(type=='venues'){
				$(".set_venues").html(val);
				$(".set_venues").val(val);

				var venues = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(venues=='Yes – As Low As $1499'){
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						$('.step22').addClass("inactive");
						$('.step23').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
				}
			     else{
						$(".set_venuesbudget").html('');
						$(".set_venuesbudget").val('');
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'venues', value:'No', type2:'venuesbudget', value2:''
						},
						function(data,status){
								
						});
						var timer = setTimeout(function(){
							$('.step23').addClass("inactive");
							$('.step24').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$('.step22').hide();
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY2);
			    }
			}
			
			if(type=='venuesbudget'){
				$(".set_venuesbudget").html(val);
				$(".set_venuesbudget").val(val);
				var venues = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'venues', value:'Yes – As Low As $1499', type2:'venuesbudget', value2:val
						},
						function(data,status){
								
						});
					var timer = setTimeout(function(){
						$('.step23').addClass("inactive");
						$('.step24').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
						$(".overlay, .loader").hide();
						clearTimeout(timer);
					}, DELAY);
			}

			if(type=='tuxedos'){
				$(".set_tuxedos").html(val);
				$(".set_tuxedos").val(val);
				var tuxedos = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(tuxedos=='Yes – As Low As $99'){
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						var timer = setTimeout(function(){
							$('.step24').addClass("inactive");
							$('.step25').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY);
				}
				else{
					$(".set_tuxedosbudget").html('');
						$(".set_tuxedosbudget").val('');
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						$.post("save-wedding-form2.php",
						{
						  randstr:randstr, quoteEmail:email, type:'tuxedos', value:'No', type2:'tuxedosbudget', value2:''
						},
						function(data,status){
								
						});
						var timer = setTimeout(function(){
							$('.step24').addClass("inactive");
							$('.step26').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$('.step25').hide();
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY2);
				}
			}
			
			if(type=='tuxedosbudget'){
				$(".set_tuxedosbudget").html(val);
				$(".set_tuxedosbudget").val(val);
				var email = $(".email").val();
				var randstr = $("#randstr").val();
					$(".loader").show();
					$('.container').prepend("<div class='overlay'></div>");
					$.post("save-wedding-form2.php",
					{
					  randstr:randstr, quoteEmail:email, type:'tuxedos', value:'Yes – As Low As $99', type2:'tuxedosbudget', value2:val
					},
					function(data,status){
							
					});
	
					var timer = setTimeout(function(){
					$('.step25').addClass("inactive");
					$('.step26').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
					$(".overlay, .loader").hide();
					clearTimeout(timer);
				}, DELAY);
			}


			if(type=='caterer'){
				$(".set_caterer").html(val);
				$(".set_caterer").val(val);
				var caterer = val;
				var email = $(".email").val();
				var randstr = $("#randstr").val();
				if(caterer=='Yes – As Low As $19/person'){
						$(".loader").show();
						$('.container').prepend("<div class='overlay'></div>");
						var timer = setTimeout(function(){
							$('.step26').addClass("inactive");
							$('.step27').show().css("bottom", "-50%").addClass("active").removeClass("inactive");
							$(".overlay, .loader").hide();
							clearTimeout(timer);
						}, DELAY);
				}
				else{
					//$(".loader").show();
					$(".loader2").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						//$(document).ajaxStop(function(){
							$(".set_catererbudget").html('');
							$(".set_catererbudget").val('');
							$("#wedding-form0").submit();
							$(".loader2").hide();
							$(".loader").show();
							$('.container').prepend("<div class='overlay'></div>");
							return true;
							clearTimeout(timer);
						//});	
					}, SUBMIT_DELAY);
				}
			}
			
			if(type=='catererbudget'){
					//$(".loader").show();
					$(".loader2").show();
					$('.container').prepend("<div class='overlay'></div>");
					var timer = setTimeout(function(){
						//$(document).ajaxStop(function(){
							$(".set_catererbudget").html(val);
							$(".set_catererbudget").val(val);
							$("#wedding-form0").submit();
							$(".loader2").hide();
							$(".loader").show();
							$('.container').prepend("<div class='overlay'></div>");
							return true;
							clearTimeout(timer);
						//});	
					}, SUBMIT_DELAY);
			}
	}, 300);
			return false;
}

function editWedding(type){
 var weddingId = $(this).attr('id');
   $('#'+weddingId).addClass("link_act");
   // $('#'+val).addClass('link_act');
   setTimeout(function(){
	   	if(type=='shape'){
		   	$(".screen3").show().removeClass("active inactive");
			$(".screen4").hide();
		}
		if(type=='size'){
			$(".screen4").show().removeClass("active inactive");
			$(".screen5").hide();
			$(".screen3").hide();
		 }

		if(type=='wedyear'){
			$(".screen5").show().removeClass("active inactive");
			$(".step1").hide();
			$(".screen3").hide();
			$(".screen4").hide();
			$(".screen6").hide();
		}

		if(type=='Year'){
			$(".step2").hide();
			$(".step1").show().removeClass("active inactive");
			$("#main_div").animate({
			   'marginLeft' : "-=60px" //moves right
			}, 1000);
			$("#show_year").fadeOut();
		}
		if(type=='Month'){
			$(".step3").hide();
			$(".step2").show().removeClass("active inactive");
			var month_width = $("#show_month").width();
			var month_width = parseInt(month_width)+parseInt(7);
			$("#main_div").animate({
			   'marginLeft' : "-="+month_width+"px" //moves right
			}, 1000);
			
			$("#show_month").fadeOut();
		}
		if(type=='Day'){
			$(".step4").hide();
			$("#first-car").show();
			$(".step3").show().removeClass("active inactive");
			$("#main_div").animate({
			   'marginLeft' : "-=18px" //moves right
			}, 1000);
			$("#show_day").fadeOut();
		}
		if(type=='Budget'){
			$(".step5").hide();
			$(".step4").show().removeClass("active inactive");
			$("#first-car").hide();
			$("#show_year").show();
			$("#show_month").show();
			$("#show_day").show();
		}
		if(type=='Name'){
			$(".step6").hide();
			$(".step5").show().removeClass("active inactive");
		}
		if(type=='Email'){
			$(".step7").hide();
			$(".step6").show().removeClass("active inactive");
			$(".quotePhoneNumber1").val('');
		}

		if(type=='Phone'){
			$(".step8").hide();
			$(".step7").show().removeClass("active inactive");
		} 
		if(type=='photographer'){
			$(".step9").hide();
			$(".step8").show().removeClass("active inactive");;
		}
		if(type=='photobudget'){
			$(".step9").hide();
			$(".step10").hide();
			$(".step8").show().removeClass("active inactive");
		} 

		if(type=='Dj'){
			$(".step11").hide();
			$(".step10").show().removeClass("active inactive");;
		}
		if(type=='DjBudget'){
			$(".step11").hide();
			$(".step12").hide();
			$(".step10").show().removeClass("active inactive");
		} 

		if(type=='videographer'){
			$(".step13").hide();
			$(".step12").show().removeClass("active inactive");;
		}

		if(type=='VideoBudget'){
			$(".step18").hide();
			$(".step13").hide();
			$(".step12").show().removeClass("active inactive");
		} 

		if(type=='florists'){
			$(".step19").hide();
			$(".step18").show().removeClass("active inactive");
		}

		if(type=='floristbudget'){
			$(".step20").hide();
			$(".step18").show().removeClass("active inactive");
			$(".step19").hide();
		} 

		if(type=='bands'){
			$(".step21").hide();
			$(".step20").show().removeClass("active inactive");
		}

		if(type=='bandsbudget'){
			$(".step22").hide();
			$(".step20").show().removeClass("active inactive");
			$(".step21").hide();
		} 

		if(type=='venues'){
			$(".step23").hide();
			$(".step22").show().removeClass("active inactive");
		}

		if(type=='venuesbudget'){
			$(".step24").hide();
			$(".step22").show().removeClass("active inactive");;
			$(".step23").hide();
		} 

		if(type=='tuxedos'){
			$(".step25").hide();
			$(".step24").show().removeClass("active inactive");
		}
		if(type=='tuxedosbudget'){
			$(".step26").hide();
			$(".step24").show().removeClass("active inactive");
			$(".step25").hide();
		}
		
		if(type=='caterer'){
			$(".step27").hide();
			$(".step26").show().removeClass("active inactive");
		}

	}, 300);
}

function newWedding(){
	$(".step1").show();
	$(".step2").hide();
	$(".step3").hide();
	$(".step4").hide();
	$(".step5").hide();
	$(".step6").hide();
	$(".step7").hide();
	
	var main_div_width = $("#main_div").css('margin-left');
	$("#main_div").animate({
	   'marginLeft' : "-="+main_div_width //moves right
	}, 1000);
}

function product_view(){
	window['optimizely'] = window['optimizely'] || [];
	window.optimizely.push(["trackEvent", "prdview"]);
	dataLayer.push({'event': 'prdview'});
}

function addtocart(){
	window['optimizely'] = window['optimizely'] || [];
	window.optimizely.push(["trackEvent", "addcart"]);
	dataLayer.push({'event': 'addcart'});
}

function checkoutTrack(){
	window['optimizely'] = window['optimizely'] || [];
	window.optimizely.push(["trackEvent", "checkout"]);
	dataLayer.push({'event': 'checkout'});
}

function convert(){
	window['optimizely'] = window['optimizely'] || [];
	window.optimizely.push(["trackEvent", "conv"]);
	dataLayer.push({'event': 'conv'});
}
