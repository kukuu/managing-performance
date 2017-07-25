# Resolving AngularJS SEO challenges

Angular enables you to create and maintain single page apps easily; it provides a responsive and rich user experience thanks to HTML data-binding capabilities and asynchronous requests; it employs dependency injection and separates concerns; it provides increased functionality using short code and reusable components.

The problem begins when developers start using Angular for client-side as well. Using Angular for the client side may result in Google not indexing your pages, so SEO-wise it renders the site useless. We need to assist Google’s bots during the crawling and indexing process, otherwise the site’s visibility will plummet.


## Problem Statement with Crawlers

Search engines crawlers (or bots) were originally designed to crawl HTML content of web pages. As the web evolved, so did the technologies powering websites and JavaScript became the de facto language of the web. AJAX allowed for asynchronous operations on the web. AngularJS fully embraces the asynchronous model and this is what creates problems for Google’s crawlers.

If you are fully utilizing AngularJS, there is a strong possibility that you will only have one real HTML page that will be fed HTML partial views asynchronously. All the routing and application logic is done on the client side, so whether you’re changing pages, posting comments, or performing other CRUD operations, you are doing it all from one page.


## Resolution with Prerender.io

1. When a search engine crawler visits your app and sees the <meta name="fragment" content="!"> it will add an ?_escaped_fragment_= tag to your URL.

2. Your server will intercept this request and send it to the middleware that will handle the special crawler request. For this article, we have chosen Prerender.io so the next step is specific to Prerender.io.

3. Prerender.io will check to see if the requested page has an existing snapshot (or cached page), if it does, it will serve that page to the crawler, if it does not, Prerender will make a call to PhantomJS which will render the page in it’s entirety and show it to the crawler.


## Best Practices

	1. Serve the crawlers prerendered HTML, not JavaScript,

	2. Don’t send soft 404’s

	3. If you’re sticking with #’s for your urls, make sure to set the hashPrefix(‘!’) so that the URL’s
	 are rewritten as #!’s

	4. If you have a lot of pages and content, be sure to include a sitemap.xml and robots.txt

	5. Google crawls only a certain number of pages per day, which is dependent on your PageRank. 
	Including a sitemap.xml will allow you to prioritize which pages get indexed.

	6. When testing to see how your AngularJS pages render in Google Webmaster Tools, be sure to add 
	the #! or ?_escaped_fragment_= in the right place as the manual tools do not behave exactly as the 
	actual crawlers do.

	7. Sometimes PhantomJS fails to capture pages correctly. It's safer to have a mechanism to detect 
	those failed captures and not serve them to bots. 

	8. Bots tend to request URLs with lot of different formats by adding/removing a trailing slash, 
	or adding some query parameters. Having a solution able to serve the same cached page for all those 
	different URLs is a plus.

	9.  Non-cached pages that require the call to PhantomJS will take longer to render leading to a much 
	longer response time, so it's a good idea to cache pages often. 

	10. You can hide the hashbang '#!' and achieve SEO through Prerender.IO, Just use HTML5 PushState 
	to get rid of the #! 