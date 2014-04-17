;(function($)	{
	
	// creating redirect function
	$.fn.redirect = function(url)	{
		
		// checking if a url has been supplied
		if( url == '' )
		{
			url = '#';
		}
				
		//returning function for each occurance
		return this.each( function()	{
			window.location.assign( url );
		});
	};
	
})(jQuery);
