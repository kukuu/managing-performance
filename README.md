# Managing NodeJS Performance 

It’s goal is to offer an easy and safe way to build high performance and scalable network applications in JavaScript on the server. 

The application's performance can be enhanced through caching Caching is great for your apps because it helps you to access data much faster when compared to the database. On the downside, querying is limited and it is very expensive (money-wise) because all the data is on the memory (which is expensive) instead of being on a disk. It is recommended that you use cache only for frequently accessed data.

Those goals are achieved thanks it’s architecture:

## Single Threaded :
		
Node use a single thread to run instead of other server like Apache HTTP who spawn a thread per request, this approach result in avoiding CPU context switching and massive execution stacks in memory. This is also the method used by nginx and other servers developed to counter the C10K problem.


## Event Loop :
	
Written in C++ using the Marc Lehman’s libev library, the event loop use epoll or kqueue for scalable event notification mechanism.

Being an Event Driven Language, Javascript is the most suited to develop on the Node’s “Event Loop” architecture. Node’s applications really use javascript’s strengths like anonymous functions and closures.

## Non blocking I/O :
	
Node avoid CPU time loss usually made by waiting for an input or an output response (database, file system, web service, thanks to the full-featured asynchronous I/O provided by Marc Lehmann’s libeio library.

These characteristics allow Node to handle a large amount of traffic by handling as quickly as possible a request to free the thread for the next one.

Node has a built-in support for most important protocols like TCP, DNS, and HTTP  The design goal of a Node application is that any function performing an I/O must use a callback. That’s why there is no blocking methods provided in Node’s API.

The HTTP implementation offered by Node is very complete and natively support chunked request and response . For example the twitter stream  Node’s footprint for each http stream is only 36 bytes (source).




