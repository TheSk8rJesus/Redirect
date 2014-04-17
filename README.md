# jQuery Redirect Plugin
Redirect to other pages without the need to type a huge function

## Prerequisites
* jQuery 1.9+

## How to get it
### With git
```
git clone https://github.com/TheSk8rJesus/Redirect.git
```
### Without git
* Tarball
https://github.com/TheSk8rJesus/Redirect/tarball/master
* Zipped
https://github.com/TheSk8rJesus/Redirect/archive/master.zip

## Installation
Copy the jquery.redirect.js file to your webservers script folder and then reference the file after the jQuery reference.

## How to use
The function can be used with any click function as shown
```
$('#btn').click( function()	{
	$(this).redirect( 'http://github.com' );
});
```