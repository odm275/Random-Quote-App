$(document).ready(function(){
	var quote;
	var author;
	$(".twitter-share-button").click(function(){
			$(this).attr("href","https://twitter.com/intent/tweet?text="+quote+"-"+author);
		});
	$("#myBtn").click(function(){
		//write funtion that generates random color and sticks it to the background per click;
			var r = Math.floor((Math.random() * 256));
      var g = Math.floor((Math.random() * 256));
      var b = Math.floor((Math.random() * 256));
			console.log(r,g,b);
			var color = 'rgb'+'('+r+','+g+','+b+')';
			console.log(color);
			$('body').css('background-color',color);

			//Get our quote through standard Ajax call;
		$.ajax({
			type:"GET",
			url:'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
			async:false,
			dataType: 'jsonp',
			success: function(data){
				quote = data.quoteText;
				author = data.quoteAuthor;
				$("#quote-text").html(quote);
				$("#quote-author").html(author);
			}
			});
		});
	});
