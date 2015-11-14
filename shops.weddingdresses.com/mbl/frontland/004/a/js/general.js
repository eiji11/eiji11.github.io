
	
	
	var app = angular.module('app', []); 
	app.controller('silhouette', function($scope) {
		 $scope.choices = [
		 {"id":1, "value":"A-Line", "label":"A-Line", "imageUrl": "images/a-line.png"},
		 {"id":2, "value":"Mermaid / Trumpet","label":"Mermaid / Trumpet", "imageUrl": "images/trumpet.png"},
		 {"id":3, "value":"Ball Gown","label":"Ball Gown", "imageUrl": "images/ball-gown.png"},
		 {"id":4, "value":"Empire","label":"Empire", "imageUrl": "images/empire.png"},
		 {"id":5, "value":"Sheath","label":"Sheath", "imageUrl": "images/sheath.png"},
		 {"id":6, "value":"Princess","label":"Princess", "imageUrl": "images/fit-flare.png"},
		 {"id":"d7", "value":"I don’t know","label":"I don’t know", "imageUrl": ""}
		 ];
		
	});
	/*app.controller('shape', function($scope) {
		 $scope.choices = [
		 {"id":8, "value":"Hourglass", "label":"Hourglass", "imageUrl": "images/hour-glass.png"},
		 {"id":9, "value":"Pear","label":"Pear", "imageUrl": "images/pear.png"},
		 {"id":10, "value":"Inverted Triangle","label":"Inverted Triangle", "imageUrl": "images/revert-triangle.png"},
		 {"id":11, "value":"Rectangle","label":"Rectangle", "imageUrl": "images/rectangle.png"},
		 {"id":12, "value":"Tall","label":"Tall"},
		 {"id":13, "value":"I don’t know","label":"I don’t know"}
		 ];
		
	});
	app.controller('size', function($scope) {
		 $scope.choices = [
		 {"id":14, "value":"0-2", "label":"0-2", col:1},
		 {"id":15, "value":"2-4","label":"2-4", col:1},
		 {"id":16, "value":"4-6","label":"4-6", col:1},
		 {"id":17, "value":"6-8","label":"6-8", col:1},
		 {"id":18, "value":"8-10","label":"8-10", col:1},
		 {"id":19, "value":"10-12","label":"10-12", col:1},
		 {"id":20, "value":"12-14","label":"12-14", col:1},
		 {"id":21, "value":"14-16","label":"14-16", col:1},
		 {"id":22, "value":"16-18","label":"16-18", col:1},
		 {"id":23, "value":"18-20","label":"18-20", col:2},
		 {"id":24, "value":"20-22","label":"20-22", col:2},
		 {"id":24, "value":"20-22","label":"20-22", col:2},
		 {"id":25, "value":"22-24","label":"22-24", col:2},
		 {"id":26, "value":"24-26","label":"24-26", col:2},
		 {"id":27, "value":"26-28","label":"26-28", col:2},
		 {"id":28, "value":"28-30","label":"28-30", col:2},
		 {"id":29, "value":"I don’t know","label":"I don’t know", col:2}
		 ];
		
		
	});
	app.controller('bestTime', function($scope) {
		 $scope.choices = [
		 {"id":30, "value":"Early morning (before 9am)", "label":"Early morning (before 9am)"},
		 {"id":31, "value":"Morning (9am-noon)","label":"Morning (9am-noon)"},
		 {"id":32, "value":"Early afternoon (noon-3pm)","label":"Early afternoon (noon-3pm)"},
		 {"id":33, "value":"Late afternoon (3-6pm)","label":"Late afternoon (3-6pm)"},
		 {"id":34, "value":"Evening (after 6pm)","label":"Evening (after 6pm)"}
		 ];
		
	});*/
function makeuncheck(id,field)
{
	var value=$("#"+field).val();
	if(value=="")
	{
		$("#"+id).prop('checked',false);
	}
	checkValidation();
}
function discussionTypeDisplay()
{
    var selectElement = 'discussion_type';
    var element1 = 'phonecall_discussion_type';
    var element2 = 'other_discussion_type';

    var option = $('select[name="discussion_type"]').val();
    if ( option == 'Phone call') {
        $("#other_discussion_type").hide();
    }
    else if ( option == 'Other') {
        $("#phonecall_discussion_type").hide();
    }
    else {
        $("#other_discussion_type").hide();
        $("#phonecall_discussion_type").hide();
    }
}
function makeHide(other_discussion_type,discussion_type)
{
	var value=$("#"+other_discussion_type).val();
	if(value=="")
	{
		$("#"+other_discussion_type).hide();
		$("."+discussion_type+'>option:eq(0)').prop("selected",true);
	}
}
function showError(msg,msgText)
{
	$("."+msg).html(msgText);
	$("."+msg).show();
}
function hideError(msg,msgText)
{
	$("."+msg).hide();
}


function checkValidation()
{
	$(".subtext-form-invalid").hide();
	error=0;
	err=$("#error").val();
	if($("#other_needs_checkbox").is(':checked')==false)
	{
		$("#other_needs").val("");
	}
	if($("#other_style_checkbox").is(':checked')==false)
	{
		$("#other_style").val("");
	}
	if($("#other_location_checkbox").is(':checked')==false)
	{
		$("#other_location").val("");
	}
	if($("#other_format_checkbox").is(':checked')==false)
	{
		$("#other_format").val("");
	}
	if($("#other_bestDate_checkbox").is(':checked')==false)
	{
		$("#other_bestDate").val("");
	}
	if($("#other_bestTime_checkbox").is(':checked')==false)
	{
		$("#other_bestTime").val("");
	}
	/////////for wedding silhouette//////////
   if($('input[name="silhouette[]"]').is(':checked')===true)
   {	
		$("#labeled-inputs-216").removeClass('invalid');
		$(".needlabel").removeClass('invalid_data');
		$(".needlabel").addClass('valid_data');
		$(".checkbox").removeClass('invalidlabel');
		$(".need_error").hide();
		if($("#other_needs_checkbox").is(':checked'))
		{
			$("#labeled-inputs-216").removeClass('invalid');
			$(".needlabel").removeClass('invalid_data');
			$(".needlabel").addClass('valid_data');
			$(".checkbox").removeClass('invalidlabel');
			var other_needs=$("#other_needs").val();
			if(other_needs=='')
			{
				error=parseInt(error)+parseInt(1);
			}
			else{
				$("#labeled-inputs-216").removeClass('invalid');
				$(".checkbox").removeClass('invalidlabel');
				$(".needlabel").removeClass('invalid_data');
				$(".needlabel").addClass('valid_data');
				$(".need_error").hide();
			}
			
		}
   }
   else{
	   $(".needlabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
   }
   /////////for body shape//////////
   if($('input[name="shape[]"]').is(':checked')===true)
	{
		$("#labeled-inputs-217").removeClass('invalid');
		$(".stylelabel").removeClass('invalid_data');
		$(".stylelabel").addClass('valid_data');
		$(".styleCheckbox").removeClass('invalidlabel');
		$(".style_error").hide();
		if($("#other_style_checkbox").is(':checked'))
		{	
			$("#labeled-inputs-217").removeClass('invalid');
			$(".stylelabel").removeClass('invalid_data');
			$(".stylelabel").addClass('valid_data');
			$(".styleCheckbox").removeClass('invalidlabel');
			var other_style=$("#other_style").val();
			if(other_style=='')
			{
				error=parseInt(error)+parseInt(1);
			}
			else
			{
				$(".stylelabel").addClass('valid_data');
			}
		}
	}
	else
	{
		$(".stylelabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	/////////for number of guests//////////
	var num_of_guest=$('.num_of_guest').val();
	if(num_of_guest!='')
	{
		$(".num_of_guest").removeClass('invalid');
		$(".guestlabel").removeClass('invalid_data');
		$(".guestlabel").addClass('valid_data');
	}
	else{
		$(".guestlabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	/////////for location//////////
	if($('input[name="location[]"]').is(':checked')===true)
	{
		$("#labeled-inputs-219").removeClass('invalid');
		$(".locationlabel").removeClass('invalid_data');
		$(".locationlabel").addClass('valid_data');
		$(".locationCheckbox").removeClass('invalidlabel');
		$(".location_error").hide();
		if($("#other_location_checkbox").is(':checked'))
		{	
			$("#labeled-inputs-219").removeClass('invalid');
			$(".locationlabel").removeClass('invalid_data');
			$(".locationlabel").addClass('valid_data');
			$(".locationCheckbox").removeClass('invalidlabel');
			var other_location=$("#other_location").val();
			if(other_location=='')
			{
				$(".locationlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			else
			{
				$(".locationlabel").addClass('valid_data');
			}
		}
	}
	else
	{
		$(".locationlabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	
	//////////// for image format ///////////
	
	if($('input[name="size[]"]').is(':checked')===true)
	{
		$("#labeled-inputs-220").removeClass('invalid');
		$(".formatlabel").removeClass('invalid_data');
		$(".formatlabel").addClass('valid_data');
		$(".formatCheckbox").removeClass('invalidlabel');
		$(".format_error").hide();
		if($("#other_format_checkbox").is(':checked'))
		{	
			$("#labeled-inputs-220").removeClass('invalid');
			$(".formatlabel").removeClass('invalid_data');
			$(".formatlabel").addClass('valid_data');
			$(".formatCheckbox").removeClass('invalidlabel');
			var other_format=$("#other_format").val();
			if(other_format=='')
			{
				$(".formatlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			else
			{
				$(".formatlabel").addClass('valid_data');
			}
		}
	}
	else
	{
		$(".formatlabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	//////////// for budget ///////////
	var budget=$('.budget').val();
	if(budget!='')
	{
		$(".budget").removeClass('invalid');
		$(".budgetlabel").removeClass('invalid_data');
		$(".budgetlabel").addClass('valid_data');
	}
	else
	{
		$(".budgetlabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	
	///////// for quote//////////
	if($('input[name="quote"]').is(':checked')===true)
	{
		$(".quotelabel").removeClass('invalid_data');
		$(".quotelabel1").removeClass('invalid_data1');
		var quote=$('input:radio[name=quote]:checked').val();
		if(quote=='emailTextQuote')
		{
			$(".emailTextQuote").show();
			//var quote_email=$(".quoteEmail").val();
			var quote_email = $(".quoteEmail1").val();
			$(".quoteEmail").val(quote_email);

			if(quote_email!="")
			{
				var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
				var match = quote_email.match( filter );
				if(match)
					{
						$(".quoteEmail").removeClass('invalid');
						$(".quoteEmaillabel").removeClass('invalid_data');
						$(".quoteEmaillabel").addClass('valid_data');
						$(".quoteEmail_error").hide();
					}
					else
					{
						$(".quoteEmail").addClass('invalid');
						$(".quoteEmaillabel").addClass('invalid_data');
						$(".quoteEmaillabel").removeClass('valid_data');
						$(".quoteEmail_error").html('Please enter a valid email address.');
						$(".quoteEmail_error").show();
						error=parseInt(error)+parseInt(1);
					}
			}
			else
			{
				$(".quoteEmail").removeClass('invalid');
				$(".quoteEmaillabel").removeClass('invalid_data')
				$(".quoteEmaillabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			var quote_phone=$(".quotePhone").val();
			if(quote_phone!="")
			{
				var regex=/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})?[-. ]?[2-9]\d{2}?[-. ]?\d{4}$/;
				var match = quote_phone.match( regex );
				if(match)
				{
					$(".quotePhone").removeClass('invalid');
					$(".quotePhonelabel").removeClass('invalid_data');
					$(".quotePhonelabel").addClass('valid_data');
					$(".quotePhone_error").hide();
				}
				else
				{
					$(".quotePhone").addClass('invalid');
					$(".quotePhonelabel").addClass('invalid_data');
					$(".quotePhonelabel").removeClass('valid_data');
					$(".quotePhone_error").html('Please provide valid Us phone number.');
					$(".quotePhone_error").show();
					// $('html,body').animate({
								// scrollTop: $("#labeled-inputs-225").offset().top},
							// 'slow');
					error=parseInt(error)+parseInt(1);
				}
			}
			else
			{
				$(".quotePhone").removeClass('invalid');
				$(".quotePhonelabel").removeClass('invalid_data');
				$(".quotePhonelabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			
			var quote_name=$(".quoteName").val();
			if(quote_name!="")
				{
					var regex=/^[0-9]+$/;
					var match = quote_name.match( regex );
					if(match)
					{
						$(".quoteName").addClass('invalid');
						$(".quoteNamelabel").addClass('invalid_data');
						$(".quoteNamelabel").removeClass('valid_data');
						$(".quoteName_error").html('Please provide your first and last name.');
						$(".quoteName_error").show();
						// $('html,body').animate({
									// scrollTop: $("#labeled-inputs-225").offset().top},
								// 'slow');
						error=parseInt(error)+parseInt(1);
					}
					else
					{
						$(".quoteName").removeClass('invalid');
						$(".quoteNamelabel").removeClass('invalid_data');
						$(".quoteNamelabel").addClass('valid_data');
						$(".quoteName_error").hide();
					}
				}
				else
				{
					$(".quoteName").removeClass('invalid');
					$(".quoteNamelabel").removeClass('invalid_data');
					$(".quoteNamelabel").removeClass('valid_data');
					error=parseInt(error)+parseInt(1);
				}
		}
		else if(quote=='emailQuote')
		{
			$(".emailTextQuote").show();
			$(".emailQuote").hide();
			var quote_email=$(".quoteEmail").val();
			if(quote_email!="")
			{
				var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
				var match = quote_email.match( filter );
				if(match)
				{
					$(".quoteEmail").removeClass('invalid');
					$(".quoteEmaillabel").removeClass('invalid_data');
					$(".quoteEmaillabel").addClass('valid_data');
					$(".quoteEmail_error").hide();
				}
				else
				{
					$(".quoteEmail").addClass('invalid');
					$(".quoteEmaillabel").addClass('invalid_data');
					$(".quoteEmaillabel").removeClass('valid_data');
					$(".quoteEmail_error").html('Please enter a valid email address.');
					$(".quoteEmail_error").show();
					error=parseInt(error)+parseInt(1);
				}
			}
			else
			{
				$(".quoteEmail").removeClass('invalid');
				$(".quoteEmaillabel").removeClass('invalid_data');
				$(".quoteEmaillabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			var quote_name=$(".quoteName").val();
			if(quote_name!="")
			{
				var regex=/^[0-9]+$/;
				var match = quote_name.match( regex );
				if(match)
				{
					$(".quoteName").addClass('invalid');
					$(".quoteNamelabel").addClass('invalid_data');
					$(".quoteNamelabel").removeClass('valid_data');
					$(".quoteName_error").html('Please provide your first and last name.');
					$(".quoteName_error").show();
					// $('html,body').animate({
								// scrollTop: $("#labeled-inputs-225").offset().top},
							// 'slow');
					error=parseInt(error)+parseInt(1);
				}
				else
				{
					$(".quoteName").removeClass('invalid');
					$(".quoteNamelabel").removeClass('invalid_data');
					$(".quoteNamelabel").addClass('valid_data');
					$(".quoteName_error").hide();
				}
			}
			else
			{
				$(".quoteName").removeClass('invalid');
				$(".quoteNamelabel").removeClass('invalid_data');
				$(".quoteNamelabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
		}
		else
		{
			$(".emailTextQuote").hide();
		}
	}
	else
	{
		$(".quotelabel").removeClass('valid_data');
		error=parseInt(error)+parseInt(1);
	}
	
   $("#error").val(error);
}

function checkValidation2(){
				var zipcode=$("#form-zipcode").val();
				if((zipcode!='') && (zipcode!=$("#form-zipcode").attr('placeholder')))
					{
						var regex=/^[0-9]+$/;
						var match = zipcode.match( regex );
						if(match && zipcode.length=='5')
						{
							$(".zipcode2").removeClass('invalid');
							$(".zipcodelabel2").removeClass('invalid_data');
							$(".zipcodelabel2").addClass('valid_data');
							$(".zipcode_error2").hide();
						}
						else
						{
							$(".zipcode2").addClass('invalid');
							$(".zipcodelabel2").addClass('invalid_data');
							$(".zipcodelabel2").removeClass('valid_data');
							$(".zipcode_error2").html('Please enter a valid 5-digit zip code.');
							$(".zipcode_error2").show();
							error=parseInt(error)+parseInt(1);
						}
					}
					else
					{
						$(".zipcode2").addClass('invalid');
						$(".zipcodelabel2").addClass('invalid_data');
						$(".zipcodelabel2").removeClass('valid_data');
						error=parseInt(error)+parseInt(1);
					
					}
				
				$("#error").val(error);	
}
function checkValidation3(){
				//var quote_email=$(".quoteEmail").val();
			    var quote_email = $(".quoteEmail1").val();
			    if(quote_email!=''){
					$(".quoteEmail").val(quoteEmail);
			    }

				if(quote_email!="")
					{
						var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
						var match = quote_email.match( filter );
						if(match)
						{
							$(".quoteEmail").removeClass('invalid');
							$(".quoteEmaillabel").removeClass('invalid_data');
							$(".quoteEmaillabel").addClass('valid_data');
							$(".quoteEmail_error").hide();
						}
						else
						{
							$(".quoteEmail").addClass('invalid');
							$(".quoteEmaillabel").addClass('invalid_data');
							$(".quoteEmaillabel").removeClass('valid_data');
							if(msg==0)
							{	msg="quoteEmail_error";
								msgText="Please enter a valid email address.";
							}
							error=parseInt(error)+parseInt(1);
						}
					}
					else
					{
						$(".quoteEmail").addClass('invalid');
						$(".quoteEmaillabel").addClass('invalid_data');
						$(".quoteEmaillabel").removeClass('valid_data');
						if(msg==0)
							{	msg="quoteEmail_error";
								msgText="Please provide your email address.";
							}
						error=parseInt(error)+parseInt(1);
					}
					$("#error").val(error);	
		
}
function checkValidation4(){		
					//var quote_name=$(".quoteName").val();
					var quote_email = $(".quoteEmail1").val();
				 	$(".quoteEmail").val(quote_email);

						if(quote_name!="")
						{
							$(".quoteName").removeClass('invalid');
							$(".quoteNamelabel").removeClass('invalid_data');
							$(".quoteNamelabel").addClass('valid_data');
							$(".quoteName_error").hide();
						}
						else
						{
							$(".quoteName").addClass('invalid');
							$(".quoteNamelabel").addClass('invalid_data');
							$(".quoteNamelabel").removeClass('valid_data');
							if(msg==0)
							{	msg="quoteName_error";
								msgText="Please provide your name.";
							}
							error=parseInt(error)+parseInt(1);
						}
						$("#error").val(error); 
}
function checkValidationQuotePhoneNumber()
{
    var element = $("#quotePhoneNumber").val();
        if (element!="") {
            $(".quotePhoneNumber").removeClass('invalid');
            $(".quotePhoneNumberlabel").removeClass('invalid_data');
            $(".quotePhoneNumberlabel").addClass('valid_data');
            $(".quotePhoneNumber_error").hide();
        }
        else {
            $(".quotePhoneNumber").addClass('invalid');
            $(".quotePhoneNumberlabel").addClass('invalid_data');
            $(".quotePhoneNumberlabel").removeClass('valid_data');
            if (msg==0) {
                msg="quotePhoneNumber_error";
                msgText="Please provide your phone number.";
            }
            error=parseInt(error)+parseInt(1);
        }
        $("#error").val(error);    
}

function submitForm(type)
{
	error=0;
	msg=0;
	msgText=0;
	/*For step1*/
	if(type=='1')
	{
		
		/*for email*/
		
				$(".step1").hide();
				$(".section1").show();
				$(".section2").hide();
				$(".section3").hide();
				$('html,body').animate({
					scrollTop: $(".section1").offset().top},
				'slow');
			


	}





	if(type=='2')
	{
	   if($('input[name="silhouette[]"]').is(':checked')===true)
	   {	
			$("#labeled-inputs-216").removeClass('invalid');
			$(".needlabel").removeClass('invalid_data');
			$(".needlabel").addClass('valid_data');
			$(".checkbox").removeClass('invalidlabel');
			$(".need_error").hide();
			if($("#other_needs_checkbox").is(':checked'))
			{
				$("#labeled-inputs-216").removeClass('invalid');
				$(".needlabel").removeClass('invalid_data');
				$(".needlabel").addClass('valid_data');
				$(".checkbox").removeClass('invalidlabel');
				var other_needs=$("#other_needs").val();
				if(other_needs=='')
				{
					$("#other_needs").focus();
					$("#labeled-inputs-216").addClass('invalid');
					$(".checkbox").addClass('invalidlabel');
					$(".needlabel").addClass('invalid_data');
					$(".needlabel").removeClass('valid_data');
					error=parseInt(error)+parseInt(1);
					if(msg==0)
					{
						msg="need_error";
						msgText="Please answer this question.";
					}
				}
				else{
					$("#labeled-inputs-216").removeClass('invalid');
					$(".checkbox").removeClass('invalidlabel');
					$(".needlabel").removeClass('invalid_data');
					$(".needlabel").addClass('valid_data');
					$(".need_error").hide();
				}
				
			}
	   }
	   else{
		   $("#labeled-inputs-216").addClass('invalid');
		   $(".checkbox").addClass('invalidlabel');
		   $(".needlabel").addClass('invalid_data');
		   $(".needlabel").removeClass('valid_data');
			error=parseInt(error)+parseInt(1);
			if(msg==0)
			{
				msg="need_error";
				msgText="Please answer this question.";
			}
	   }
	   if($('input[name="shape[]"]').is(':checked')===true)
			{
				$("#labeled-inputs-217").removeClass('invalid');
				$(".stylelabel").removeClass('invalid_data');
				$(".stylelabel").addClass('valid_data');
				$(".styleCheckbox").removeClass('invalidlabel');
				$(".style_error").hide();
				if($("#other_style_checkbox").is(':checked'))
				{	
					$("#labeled-inputs-217").removeClass('invalid');
					$(".stylelabel").removeClass('invalid_data');
					$(".stylelabel").addClass('valid_data');
					$(".styleCheckbox").removeClass('invalidlabel');
					var other_style=$("#other_style").val();
					if(other_style=='')
					{
						$("#labeled-inputs-217").addClass('invalid');
						$(".styleCheckbox").addClass('invalidlabel');
						$(".stylelabel").addClass('invalid_data');
						$("#other_style").focus();
						error=parseInt(error)+parseInt(1);
						if(msg==0)
						{
							msg="style_error";
							msgText="Please answer this question.";
						}
					}
					else
					{
						$("#labeled-inputs-217").removeClass('invalid');
						$(".styleCheckbox").removeClass('invalidlabel');
						$(".stylelabel").removeClass('invalid_data');
						$(".stylelabel").addClass('valid_data');
						$(".style_error").hide();
					}
				}
			}
			else
			{
				$("#labeled-inputs-217").addClass('invalid');
				$(".styleCheckbox").addClass('invalidlabel');
				$(".stylelabel").addClass('invalid_data');
				$(".stylelabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
				if(msg==0)
				{
					msg="style_error";
					msgText="Please answer this question.";
				}
			}
		var num_of_guest=$('.num_of_guest').val();
		if(num_of_guest!='')
			{
				$(".num_of_guest").removeClass('invalid');
				$(".guestlabel").removeClass('invalid_data');
				$(".guestlabel").addClass('valid_data');
			}
			else{
				$(".num_of_guest").addClass('invalid');
				$(".guestlabel").addClass('invalid_data');
				$(".guestlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			if($('input[name="location[]"]').is(':checked')===true)
			{
				$("#labeled-inputs-219").removeClass('invalid');
				$(".locationlabel").removeClass('invalid_data');
				$(".locationlabel").addClass('valid_data');
				$(".locationCheckbox").removeClass('invalidlabel');
				$(".location_error").hide();
				if($("#other_location_checkbox").is(':checked'))
				{	
					$("#labeled-inputs-219").removeClass('invalid');
					$(".locationlabel").removeClass('invalid_data');
					$(".locationlabel").addClass('valid_data');
					$(".locationCheckbox").removeClass('invalidlabel');
					var other_location=$("#other_location").val();
					if(other_location=='')
					{
						$("#labeled-inputs-219").addClass('invalid');
						$(".locationCheckbox").addClass('invalidlabel');
						$(".locationlabel").addClass('invalid_data');
						$(".locationlabel").removeClass('valid_data');
						$("#other_location").focus();
						error=parseInt(error)+parseInt(1);
						if(msg==0)
						{
							msg="location_error";
							msgText="Please answer this question.";
						}
					}
					else
					{
						$("#labeled-inputs-219").removeClass('invalid');
						$(".locationCheckbox").removeClass('invalidlabel');
						$(".locationlabel").removeClass('invalid_data');
						$(".locationlabel").addClass('valid_data');
						$(".location_error").hide();
					}
				}
			}
			else
			{
				$("#labeled-inputs-219").addClass('invalid');
				$(".locationCheckbox").addClass('invalidlabel');
				$(".locationlabel").addClass('invalid_data');
				$(".locationlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
				if(msg==0)
				{
					msg="location_error";
					msgText="Please answer this question.";
				}
			}
			if($('input[name="size[]"]').is(':checked')===true)
			{
				$("#labeled-inputs-220").removeClass('invalid');
				$(".formatlabel").removeClass('invalid_data');
				$(".formatlabel").addClass('valid_data');
				$(".formatCheckbox").removeClass('invalidlabel');
				$(".format_error").hide();
				if($("#other_format_checkbox").is(':checked'))
				{	
					$("#labeled-inputs-220").removeClass('invalid');
					$(".formatlabel").removeClass('invalid_data');
					$(".formatlabel").addClass('valid_data');
					$(".formatCheckbox").removeClass('invalidlabel');
					var other_format=$("#other_format").val();
					if(other_format=='')
					{
						$("#labeled-inputs-220").addClass('invalid');
						$(".formatCheckbox").addClass('invalidlabel');
						$(".formatlabel").addClass('invalid_data');
						$(".formatlabel").removeClass('valid_data');
						if(msg==0)
						{
							msg="format_error";
							msgText="Please answer this question.";
						}
						$("#other_format").focus();
						error=parseInt(error)+parseInt(1);
					}
					else
					{
						$("#labeled-inputs-220").removeClass('invalid');
						$(".formatCheckbox").removeClass('invalidlabel');
						$(".formatlabel").removeClass('invalid_data');
						$(".formatlabel").addClass('valid_data');
						$(".format_error").hide();
					}
				}
			}
			else
			{
				$("#labeled-inputs-220").addClass('invalid');
				$(".formatCheckbox").addClass('invalidlabel');
				$(".formatlabel").addClass('invalid_data');
				error=parseInt(error)+parseInt(1);
				if(msg==0)
				{
					msg="format_error";
					msgText="Please answer this question.";
				}
			}
		var budget=$('.budget').val();
		if(budget!='')
			{
				$(".budget").removeClass('invalid');
				$(".budgetlabel").removeClass('invalid_data');
				$(".budgetlabel").addClass('valid_data');
			}
			else{
				$(".budget").addClass('invalid');
				$(".budgetlabel").addClass('invalid_data');
				$(".budgetlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}

		var engagementPhoto=$('.engagementPhoto').val();
		if(engagementPhoto!='')
			{
				$(".engagementPhoto").removeClass('invalid');
				$(".engagementlabel").removeClass('invalid_data');
				$(".engagementlabel").addClass('valid_data');
			}
			else{
				$(".engagementPhoto").addClass('invalid');
				$(".engagementlabel").addClass('invalid_data');
				$(".engagementlabel").removeClass('valid_data');
				error=parseInt(error)+parseInt(1);
			}
			if(error==0){
				$(".section1").hide();
				$(".section2").show();
				$(".section3").hide();
				$('html,body').animate({
					scrollTop: $(".section2").offset().top},
				'slow');
			}
	}
//ending if for section1////
	else if(type=='3'){

			/*var quotename1 = $("#quoteName").val()+" "+ $("#quoteLastName").val();
			$("#quoteName").val(quotename1);*/

		/*var weddingDay1 = $("#weddingDay1").val();
		 $("#weddingDay").val(weddingDay1);*/

		var emailqoute1 = $("#emailqoute1").val();
		 $("#quoteEmail").val(emailqoute1);

		var quotePhoneNumber1 = $("#quotePhoneNumber1").val();
			$("#quotePhoneNumber").val(quotePhoneNumber1);

			



	$(".extraDetaillabel").addClass('valid_data');
	//////////for wedding day /////////
	var weddingDay1 = $("#weddingDay1").val();
	$("#weddingDay").val(weddingDay1);
	//var weddingDay=$('#weddingDay').val();
	if(weddingDay!="")
	{
		$(".weddingDay").removeClass('invalid');
		$(".weddingDaylabel").removeClass('invalid_data');
		$(".weddingDaylabel").addClass('valid_data');
		$(".input-prepend .add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
		$(".weddingDay_error").hide();
	}
	else
	{
		$(".weddingDay").addClass('invalid');
		$(".weddingDaylabel").addClass('invalid_data');
		$(".weddingDaylabel").removeClass('valid_data');
		$(".input-prepend .add-on").css({'border':'1px solid #d51818','color':'#d51818'});
		error=parseInt(error)+parseInt(1);
		if(msg==0)
		{
			msg="weddingDay_error";
			msgText="Please provide a start date.";
		}
	}
	
	/////////////for  wedding time///////
	var weddingDayTime=$('.weddingDayTime').val();
	if(weddingDayTime!="")
	{
		var regexOne = /^(([0-1]?[0-9])|(:[0-5][0-9]))\s*[ap]m$/i;
		var regexTwo = /^([0-1]?[0-9])\:[0-5][0-9]\s*[ap]m$/i;
		var match = weddingDayTime.match( regexOne );
		var match1 = weddingDayTime.match( regexTwo );
		if(match===null)
		{
			var activeMatch  = match1;
		}
		else
		{
			var activeMatch  = match;
		}
		if ( activeMatch) {
			var hour  = parseInt( activeMatch[1] );
			if ( !isNaN( hour) && hour <= 12 )
			{
				$(".weddingDayTime").removeClass('invalid');
				$(".weddingDayTimelabel").removeClass('invalid_data');
				$(".weddingDayTimelabel").addClass('valid_data');
				$(".weddingDaye_error").hide();
			}
			else{
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data');
				$(".weddingDayTimelabel").removeClass('valid_data');
				if(msg==0)
				{
					msg="weddingDay_error";
					msgText="Please provide a valid AM or PM time.";
				}
				error=parseInt(error)+parseInt(1);
			}
		}
		else
		{
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data');
			$(".weddingDayTimelabel").removeClass('valid_data');
			if(msg==0)
			{
				msg="weddingDay_error";
				msgText="Please provide a valid AM or PM time.";
			}
			error=parseInt(error)+parseInt(1);
		}
	}
	else
	{
		$(".weddingDayTimelabel").removeClass('valid_data');
		$(".weddingDayTime").addClass('invalid');
		$(".weddingDayTimelabel").addClass('invalid_data');
		if(msg==0)
		{
			msg="weddingDay_error";
			msgText="Please provide a start time.";
		}
		error=parseInt(error)+parseInt(1);
	}
	//////////for wedding hour//////////
	var weddingDayHours=$('.weddingDayHours').val();
	if(weddingDayHours!='')
	{
		var regex=/^[0-9]+$/;
		var match = weddingDayHours.match( regex );
		if ( match ) 
		{
			$(".weddingDayHours").removeClass('invalid');
			$(".weddingDayHourslabel").removeClass('invalid_data');
			$(".weddingDayHourslabel").addClass('valid_data');
			$(".input-append .add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
			$(".weddingDay_error").hide();
		}
		else{
			$(".weddingDayHours").addClass('invalid');
			$(".weddingDayHourslabel").addClass('invalid_data');
			$(".weddingDayHourslabel").removeClass('valid_data');
			$(".input-append .add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			if(msg==0)
			{
				msg="weddingDay_error";
				msgText="Please provide a length of time.";
			}
			error=parseInt(error)+parseInt(1);
			return false;
		}
	}
	else{
		$(".weddingDayHours").addClass('invalid');
		$(".weddingDayHourslabel").addClass('invalid_data');
		$(".weddingDayHourslabel").removeClass('valid_data');
		$(".input-append .add-on").css({'border':'1px solid #d51818','color':'#d51818'});
		if(msg==0)
		{
			msg="weddingDay_error";
			msgText="Please provide a length of time.";
		}
		error=parseInt(error)+parseInt(1);
	}
	if(error==0){
		$(".step1").hide();
	    $(".section1").hide();
		$(".section2").hide();
		$(".section3").show();
		}
}////ending else if of section 2////
else if(type=='4'){
				if ( $(".fieldset-zip").is(":visible") ) {
					
					//alert("yes");
					var zipcode=$("#form-zipcode").val();
				if((zipcode!='') && (zipcode!=$("#form-zipcode").attr('placeholder')))
					{
						var regex=/^[0-9]+$/;
						var match = zipcode.match( regex );
						if(match && zipcode.length=='5')
						{
							$(".zipcode2").removeClass('invalid');
							$(".zipcodelabel2").removeClass('invalid_data');
							$(".zipcodelabel2").addClass('valid_data');
							$(".zipcode_error2").hide();
						}
						else
						{
							$(".zipcode2").addClass('invalid');
							$(".zipcodelabel2").addClass('invalid_data');
							$(".zipcodelabel2").removeClass('valid_data');
							$(".zipcode_error2").html('Please enter a valid 5-digit zip code.');
							$(".zipcode_error2").show();
							error=parseInt(error)+parseInt(1);
						}
					}
					else
					{
						$(".zipcode2").addClass('invalid');
						$(".zipcodelabel2").addClass('invalid_data');
						$(".zipcodelabel2").removeClass('valid_data');
						error=parseInt(error)+parseInt(1);
					
					}
					
				} else { 
					//alert("no");
				}
	
				
					
				//var quote_email=$(".quoteEmail").val();
				var quote_email1 = $(".quoteEmail1").val();
				if(quote_email1 != ''){					
				 $(".quoteEmail").val(quote_email1);
				}
				var quote_email = $(".quoteEmail").val();
				console.log(quote_email);
				if(quote_email!="")
					{
						console.log('inside if');
						var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
						var match = quote_email.match( filter );
						console.log(match);
						if(match)
						{
							$(".quoteEmail").removeClass('invalid');
							$(".quoteEmaillabel").removeClass('invalid_data');
							$(".quoteEmaillabel").addClass('valid_data');
							$(".quoteEmail_error").hide();
						}
						else
						{
							$(".quoteEmail").addClass('invalid');
							$(".quoteEmaillabel").addClass('invalid_data');
							$(".quoteEmaillabel").removeClass('valid_data');
							if(msg==0)
							{	msg="quoteEmail_error";
								msgText="Please enter a valid email address.";
							}
							error=parseInt(error)+parseInt(1);
						}
					}
					else
					{
						$(".quoteEmail").addClass('invalid');
						$(".quoteEmaillabel").addClass('invalid_data');
						$(".quoteEmaillabel").removeClass('valid_data');
						if(msg==0)
							{	msg="quoteEmail_error";
								msgText="Please provide your email address.";
							}
						error=parseInt(error)+parseInt(1);
					}
					
					var quote_name = $("#quoteName").val()+" "+ $("#quoteLastName").val();
					$("#quoteName").val(quote_name);
					//var quote_name=$(".quoteName").val();
						if(quote_name!="")
						{
							$(".quoteName").removeClass('invalid');
							$(".quoteNamelabel").removeClass('invalid_data');
							$(".quoteNamelabel").addClass('valid_data');
							$(".quoteName_error").hide();
						}
						else
						{
							$(".quoteName").addClass('invalid');
							$(".quoteNamelabel").addClass('invalid_data');
							$(".quoteNamelabel").removeClass('valid_data');
							if(msg==0)
							{	msg="quoteName_error";
								msgText="Please provide your name.";
							}
							error=parseInt(error)+parseInt(1);
						}			

			if(msg!=0)
			{
				showError(msg,msgText);
			}
			else
			{
				hideError(msg,msgText);
			}
			if(error==0){
				$("#wedding-form").submit();
			}
	
	}
	else if(type=='5'){
				$("#wedding-form").submit();
	}
	else if(type=='6'){
				var quote_phone=$(".telephone").val();
				if(quote_phone!="")
				{
					var regex=/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})?[-. ]?[2-9]\d{2}?[-. ]?\d{4}$/;
					var match = quote_phone.match( regex );
					if(match)
					{
						$("#wedding-form").submit();
					}
					else
					{
						$(".telephone").css('border','1px solid red');
					}
				}
				else
				{
					$(".telephone").css('border','1px solid red');
				}
	}
$("#error").val(error);
		if(error>0)
		{
			$('html,body').animate({
				scrollTop: $(".invalid_data").offset().top},
			'slow');
			return false;
		}
	
		
	}

function checkWeddingDay()
{
	error=0;
	var weddingDay=$('.weddingDay').val();
	var weddingDayHours=$('.weddingDayHours').val();
	var weddingDayTime=$('.weddingDayTime').val();
	if(weddingDay!='')
	{
		if(weddingDayTime!='')
		{
				var regexOne = /^(([0-1]?[0-9])|(:[0-5][0-9]))\s*[ap]m$/i;
				var regexTwo = /^([0-1]?[0-9])\:[0-5][0-9]\s*[ap]m$/i;
				var match = weddingDayTime.match( regexOne );
				var match1 = weddingDayTime.match( regexTwo );
				if(match===null)
				{
					var activeMatch  = match1;
				}
				else
				{
					var activeMatch  = match;
				}
				if ( activeMatch) {
				var hour  = parseInt( activeMatch[1] );
				if ( !isNaN( hour) && hour <= 12 )
					{
						
					}
					else{
						$(".weddingDay").addClass('invalid');
						$(".weddingDaylabel").addClass('invalid_data');
						$(".weddingDaylabel").removeClass('valid_data');
						$(".weddingDayTime").addClass('invalid');
						$(".weddingDayTimelabel").addClass('invalid_data1');
						$(".weddingDayHours").addClass('invalid');
						$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
						$(".weddingDayHourslabel").addClass('invalid_data1');
						$(".weddingDay_error").html('Please provide a valid AM or PM time.');
						$(".weddingDay_error").show();
						error=parseInt(error)+parseInt(1);
						return false;
						}
			
			  }
			  else
			  {
						$(".weddingDay").addClass('invalid');
						$(".weddingDaylabel").addClass('invalid_data');
						$(".weddingDaylabel").removeClass('valid_data');
						$(".weddingDayTime").addClass('invalid');
						$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
						$(".weddingDayTimelabel").addClass('invalid_data1');
						$(".weddingDayHours").addClass('invalid');
						$(".weddingDayHourslabel").addClass('invalid_data1');
						$(".weddingDay_error").html('Please provide a valid AM or PM time.');
						$(".weddingDay_error").show();
						error=parseInt(error)+parseInt(1);
						return false;
			  }
		}
		else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".weddingDay_error").html('Please provide a start time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
		}
		if(weddingDayHours!='')
		{
			var regex=/^[0-9]+$/;
			var match = weddingDayHours.match( regex );
			if ( match ) 
			{
				$(".weddingDay").removeClass('invalid');
				$(".weddingDaylabel").removeClass('invalid_data');
				$(".weddingDaylabel").addClass('valid_data');
				$(".weddingDayTime").removeClass('invalid');
				$(".add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
				$(".weddingDayTimelabel").removeClass('invalid_data1');
				$(".weddingDayHours").removeClass('invalid');
				$(".weddingDayHourslabel").removeClass('invalid_data1');
				$(".weddingDay_error").hide();
			}
			else{
				$(".weddingDay").addClass('invalid');
				$(".weddingDaylabel").addClass('invalid_data');
				$(".weddingDaylabel").removeClass('valid_data');
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data1');
				$(".weddingDayHours").addClass('invalid');
				$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
				$(".weddingDayHourslabel").addClass('invalid_data1');
				$(".weddingDay_error").html('Please provide a length of time.');
				$(".weddingDay_error").show();
				error=parseInt(error)+parseInt(1);
				return false;
			}
		}
		else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".weddingDay_error").html('Please provide a length of time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
		}
	}
	else{
		$(".weddingDay").addClass('invalid');
		$(".weddingDaylabel").addClass('invalid_data');
		$(".weddingDaylabel").removeClass('valid_data');
		$(".weddingDayTime").addClass('invalid');
		$(".weddingDayTimelabel").addClass('invalid_data1');
		$(".weddingDayHours").addClass('invalid');
		$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
		$(".weddingDayHourslabel").addClass('invalid_data1');
		$(".weddingDay_error").html('Please provide a valid date.');
		$(".weddingDay_error").show();
		error=parseInt(error)+parseInt(1);
		return false;
	}
	
	
	if(weddingDayTime!='')
	{
		if(weddingDay=='')
			{
				$(".weddingDay").addClass('invalid');
				$(".weddingDaylabel").addClass('invalid_data');
				$(".weddingDaylabel").removeClass('valid_data');
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data1');
				$(".weddingDayHours").addClass('invalid');
				$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
				$(".weddingDayHourslabel").addClass('invalid_data1');
				$(".weddingDay_error").html('Please provide a start time.');
				$(".weddingDay_error").show();
				error=parseInt(error)+parseInt(1);
				return false;
			}
				var regexOne = /^(([0-1]?[0-9])|(:[0-5][0-9]))\s*[ap]m$/i;
				var regexTwo = /^([0-1]?[0-9])\:[0-5][0-9]\s*[ap]m$/i;
				var match = weddingDayTime.match( regexOne );
				var match1 = weddingDayTime.match( regexTwo );
				if(match===null)
				{
					var activeMatch  = match1;
				}
				else
				{
					var activeMatch  = match;
				}
				if ( activeMatch) {
				var hour  = parseInt( activeMatch[1] );
				if ( !isNaN( hour) && hour <= 12 )
				{
					$(".weddingDay").removeClass('invalid');
					$(".weddingDaylabel").removeClass('invalid_data');
					$(".weddingDaylabel").addClass('valid_data');
					$(".weddingDayTime").removeClass('invalid');
					$(".weddingDayTimelabel").removeClass('invalid_data1');
					$(".add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
					$(".weddingDayHours").removeClass('invalid');
					$(".weddingDayHourslabel").removeClass('invalid_data1');
				}
				else{
					$(".weddingDay").addClass('invalid');
					$(".weddingDaylabel").addClass('invalid_data');
					$(".weddingDaylabel").removeClass('valid_data');
					$(".weddingDayTime").addClass('invalid');
					$(".weddingDayTimelabel").addClass('invalid_data1');
					$(".weddingDayHours").addClass('invalid');
					$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
					$(".weddingDayHourslabel").addClass('invalid_data1');
					$(".weddingDay_error").html('Please provide a valid AM or PM time.');
					$(".weddingDay_error").show();
					error=parseInt(error)+parseInt(1);
					return false;
				}
		  }
		  else
		  {
					$(".weddingDay").addClass('invalid');
					$(".weddingDaylabel").addClass('invalid_data');
					$(".weddingDaylabel").removeClass('valid_data');
					$(".weddingDayTime").addClass('invalid');
					$(".weddingDayTimelabel").addClass('invalid_data1');
					$(".weddingDayHours").addClass('invalid');
					$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
					$(".weddingDayHourslabel").addClass('invalid_data1');
					$(".weddingDay_error").html('Please provide a valid AM or PM time.');
					$(".weddingDay_error").show();
					error=parseInt(error)+parseInt(1);
					return false;
		  }
		if(weddingDayHours!='')
		{
			var regex=/^[0-9]+$/;
			var match = weddingDayHours.match( regex );
			if ( match ) 
			{
				$(".weddingDay").removeClass('invalid');
				$(".weddingDaylabel").removeClass('invalid_data');
				$(".weddingDaylabel").addClass('valid_data');
				$(".weddingDayTime").removeClass('invalid');
				$(".add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
				$(".weddingDayTimelabel").removeClass('invalid_data1');
				$(".weddingDayHours").removeClass('invalid');
				$(".weddingDayHourslabel").removeClass('invalid_data1');
				$(".weddingDay_error").hide();
			}
			else{
				$(".weddingDay").addClass('invalid');
				$(".weddingDaylabel").addClass('invalid_data');
				$(".weddingDaylabel").removeClass('valid_data');
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data1');
				$(".weddingDayHours").addClass('invalid');
				$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
				$(".weddingDayHourslabel").addClass('invalid_data1');
				$(".weddingDay_error").html('Please provide a length of time.');
				$(".weddingDay_error").show();
				error=parseInt(error)+parseInt(1);
				return false;
			}
		}
		else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".weddingDay_error").html('Please provide a length of time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
		}
		
	}
	else{
		$(".weddingDay").addClass('invalid');
		$(".weddingDaylabel").addClass('invalid_data');
		$(".weddingDaylabel").removeClass('valid_data');
		$(".weddingDayTime").addClass('invalid');
		$(".weddingDayTimelabel").addClass('invalid_data1');
		$(".weddingDayHours").addClass('invalid');
		$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
		$(".weddingDayHourslabel").addClass('invalid_data1');
		$(".weddingDay_error").html('Please provide a start time.');
		$(".weddingDay_error").show();
		error=parseInt(error)+parseInt(1);
		return false;
	}
	
	if(weddingDayHours!='')
	{
		if(weddingDay=='')
			{
				$(".weddingDay").addClass('invalid');
				$(".weddingDaylabel").addClass('invalid_data');
				$(".weddingDaylabel").removeClass('valid_data');
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data1');
				$(".weddingDayHours").addClass('invalid');
				$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
				$(".weddingDayHourslabel").addClass('invalid_data1');
				$(".weddingDay_error").html('Please provide a start time.');
				$(".weddingDay_error").show();
				error=parseInt(error)+parseInt(1);
				return false;
			}
		var regex=/^[0-9]+$/;
		var match = weddingDayHours.match( regex );
		if ( match ) 
		{
			$(".weddingDay").removeClass('invalid');
			$(".weddingDaylabel").removeClass('invalid_data');
			$(".weddingDaylabel").addClass('valid_data');
			$(".weddingDayTime").removeClass('invalid');
			$(".weddingDayTimelabel").removeClass('invalid_data1');
			$(".weddingDayHours").removeClass('invalid');
			$(".add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
			$(".weddingDayHourslabel").removeClass('invalid_data1');
			$(".weddingDay_error").hide();
		}
		else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".weddingDay_error").html('Please provide a length of time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
		}
		if(weddingDayHours!='')
		{
			var regex=/^[0-9]+$/;
			var match = weddingDayHours.match( regex );
			if ( match ) 
			{
				$(".weddingDay").removeClass('invalid');
				$(".weddingDaylabel").removeClass('invalid_data');
				$(".weddingDaylabel").addClass('valid_data');
				$(".weddingDayTime").removeClass('invalid');
				$(".weddingDayTimelabel").removeClass('invalid_data1');
				$(".weddingDayHours").removeClass('invalid');
				$(".weddingDayHourslabel").removeClass('invalid_data1');
				$(".add-on").css({'border':'1px solid #aeaeae','color':'#00000'});
				$(".weddingDay_error").hide();
			}
			else{
				$(".weddingDay").addClass('invalid');
				$(".weddingDaylabel").addClass('invalid_data');
				$(".weddingDaylabel").removeClass('valid_data');
				$(".weddingDayTime").addClass('invalid');
				$(".weddingDayTimelabel").addClass('invalid_data1');
				$(".weddingDayHours").addClass('invalid');
				$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
				$(".weddingDayHourslabel").addClass('invalid_data1');
				$(".weddingDay_error").html('Please provide a length of time.');
				$(".weddingDay_error").show();
				error=parseInt(error)+parseInt(1);
				return false;
			}
		}
		else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".weddingDay_error").html('Please provide a length of time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
		}
	}
	else{
			$(".weddingDay").addClass('invalid');
			$(".weddingDaylabel").addClass('invalid_data');
			$(".weddingDaylabel").removeClass('valid_data');
			$(".weddingDayTime").addClass('invalid');
			$(".weddingDayTimelabel").addClass('invalid_data1');
			$(".weddingDayHours").addClass('invalid');
			$(".weddingDayHourslabel").addClass('invalid_data1');
			$(".add-on").css({'border':'1px solid #d51818','color':'#d51818'});
			$(".weddingDay_error").html('Please provide a length of time.');
			$(".weddingDay_error").show();
			error=parseInt(error)+parseInt(1);
			return false;
	}
	$("#error").val(error);
}


function phonePrivacyShow()
{
    $("#want_quotes_panel1").show();

    var value = $('input[name=phonePrivacy]:checked').val();
    if ( value==1 ) {
        $("#want_quotes_panel2").show();
    }
    else if ( value==0 ) {
        $("#want_quotes_panel2").hide();
    }
}

function phoneCallCopy()
{
    var phoneCall = $('input[name="phonecall_discussion_type"]').val();
    $('input[name="quotePhoneNumber"]').val( phoneCall );
}




