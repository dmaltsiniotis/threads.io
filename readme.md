# threads.io nodejs api #

## This project is an npm module that implements the Threads.io API ##
install instructions:

npm install threads.io

In your project:
var threadsio = require('threads.io')('YOUR_THREADS.IO_API_KEY');

Usage:

###identify(params, callback)###
<pre><code>
var params = {
	userid: '1234567890', //required
	traits: {
		email: 'mrsmith@example.com',
		fullname: 'Mister Smith'
	}
};

threadsio.identify(params, function (error, result) {
	if (result === true) {
		// Everything is great...
	} else {
		// Everything is not great...
		console.log(error);
	}
});
</pre></code>
###track(params, callback)###
<pre><code>
var params = {
	userid: '1234567890', //required
	traits: {
		email: 'mrsmith@example.com',
		fullname: 'Mister Smith'
	}
};

threadsio.identify(params, function (error, result) {
	if (result === true) {
		// Everything is great...
	} else {
		// Everything is not great...
		console.log(error);
	}
});
</pre></code>
###page(params, callback)###
<pre><code>
var params = {
	userid: '1234567890', //required
	traits: {
		email: 'mrsmith@example.com',
		fullname: 'Mister Smith'
	}
};

threadsio.identify(params, function (error, result) {
	if (result === true) {
		// Everything is great...
	} else {
		// Everything is not great...
		console.log(error);
	}
});
</pre></code>
###remove(params, callback)###
<pre><code>
var params = {
	userid: '1234567890', //required
	traits: {
		email: 'mrsmith@example.com',
		fullname: 'Mister Smith'
	}
};

threadsio.identify(params, function (error, result) {
	if (result === true) {
		// Everything is great...
	} else {
		// Everything is not great...
		console.log(error);
	}
});
</pre></code>