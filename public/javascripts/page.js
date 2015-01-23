



var scriptTag = document.createElement('script');
scriptTag.src = 'https://api.flickr.com/someEndpoint.jasonp?callback=doIt'

document.body.appendChild(scriptTag);

function doIt(data){
	
}

doIt({});