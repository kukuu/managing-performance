# Managing NodeJS Caching with CloudBoost

CloudBoost is a Platform as a Service designed to make it easier for NodeJS developers to build apps. It has a Database Service, Queues, Cache and more built into one simple API

Caching is great for your apps because it helps you to access data much faster when compared to the database. On the downside, querying is limited and it is very expensive 
(money-wise) because all the data is on the memory (which is expensive) instead of being on a disk. It is recommended that you use cache only for frequently accessed data.

CloudBoost is in the npm registry. Use npm to install


1. Installation instructions:

 npm install cloudboost

2. Create a new App from here:

https://www.cloudboost.io


Features

To keep things simple, we're going to only tackle basic functionality. Our application will support the following methods:

Adding an item to the cache (POST /item/:key)
Getting an item from a cache (GET /item/:key)
Deleting an item from the cache (DELETE /item/:key)


3. Once your app is created. You'll have your client key and a master key. Make sure you use master key on the server.

You need to initialize your new application. To initialize your app,

```

//init.js

var CB = require('cloudboost');

CB.CloudApp.init('Your App ID', 'Your App Key');

```

This JavaScript program initializes your app with your App ID and Master Key.


4. Creating the package.json file

In order to manage dependencies, it is useful to create a package.json file. This file provides details on the packages you depend on so that you can more easily use npm to manage these dependencies.

Create a file named package.json in your cloudboost-cache directory.

```

//package.json

{
    "name": "CloudBoost Cache",
    "description": "Simple App to demonstrate cache",
    "version": "0.1.0",
    "author": "Alexander A-S",
    "email": "aa-s@outlook.com",
    "main": "./app",
    "directories": { "lib": "./lib" },
    "dependencies": {
      "cloudboost": ">=1.1.139",
    }
}

```

The most important field in this JSON file is the dependencies field. This field will allow you to execute npm install to install the dependencies for your project.


5. Time to Cache

Cache is basically a key-value pair in memory. Every value has a key associated with it and the key is used to retrieve or delete an item. Data resides in memory and this is why it is really fast when compared to a traditional disk based database. CloudBoost Cache is distributed which means you can scale it to store any amount of data you want.


i. Adding an item to the cache

There is one route that we will need in order to add an item to the cache. You need call the set function of the CloudCache instance with the key and value.

POST /item/:key -> Adds an item to the cache and returns 200.

The NodeJS script to add an item to the cache is as follows:

,,,

//Route to add item: ad-item.js
app.post('/item/:key/:value', function(req,res) {
    cache.get(req.params.key, req.params.value, {
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

,,,


When an item is added to the cache, it stays in the cache until you delete it. It is important that you don’t rely on cache as your primary data store and use it to compliment your existing infrastructure because sometimes machine goes down and when it does all the data in the cache is deleted.

You can use a primary database like MySQL or MongoDB to repopulate the cache.

As an example, If you request with key as "YourKey" and item with "YourItem" then the response will be:

```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}

,,,

ii. Retrieving an item from the cache.

To retrieve an item from the cache, You need to write one more route. You need to call the get function of the CloudCache instance with the key and value.

GET /item/:key -> Gets an item from the cache.

The NodeJS script to add an item to the cache is as follows:

```

app.get('/item/:key', function(req,res) {
    cache.get(req.params.key,{
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

```



If I request the item with key as "YourKey" then the response will be:


```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}


```

iii. Deleting an item from the cache:

To delete an item from the cache, You need to write the DELETE route. You need call the deleteItem function of the CloudCache instance with the key and value.

DELETE /item/:key -> Delete an item from the cache.

The NodeJS script to add an item to the cache is as follows:


```

app.delete('/item/:key', function(req,res) {
    cache.deleteItem(req.params.key, {
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

```

The response is:


```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}

```



