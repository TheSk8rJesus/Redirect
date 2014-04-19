/*
 *  jQuery Redirect Plugin
 *  Version: 1.1.1 (17-Apr-2014)
 *  @requires jQuery v1.9 or later
 * 
 *  Updates available from
 *  https://github.com/TheSk8rJesus/Redirect
 * 
 *  Copyright (c) TheSk8rJesus
 *  Licensed under the MIT  license:
 *  	http://www.opensource.org/licenses/mit-license.php
 */

;(function($)	{
	
	// creating redirect function
	$.fn.redirect = function(url)	{
		
		// checking if a url has been supplied
		if( typeof url == 'undefined' )
		{
			url = '#';
		}
				
		//returning function for each occurance
		return this.each( function()	{
			$(this).click( function()   {
			    window.location.assign( url );
			});
		});
	};
	
})(jQuery);
