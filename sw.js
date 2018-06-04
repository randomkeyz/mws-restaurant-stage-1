var cache_name = 'restaurant-v6';
self.addEventListener('install', function(event){	
	event.waitUntil(
		caches.open(cache_name).then(function(cache){
			return cache.addAll([
				'/',
				'restaurant.html',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1_md.jpg',
				'img/2_md.jpg',
				'img/3_md.jpg',
				'img/4_md.jpg',
				'img/5_md.jpg',
				'img/6_md.jpg',
				'img/7_md.jpg',
				'img/8_md.jpg',
				'img/9_md.jpg',
				'img/10_md.jpg',
				'img/1_lg.jpg',
				'img/2_lg.jpg',
				'img/3_lg.jpg',
				'img/4_lg.jpg',
				'img/5_lg.jpg',
				'img/6_lg.jpg',
				'img/7_lg.jpg',
				'img/8_lg.jpg',
				'img/9_lg.jpg',
				'img/10_lg.jpg',
				'data/restaurants.json',
				'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'
			]);
		})
	);
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request, {'ignoreSearch': true}).then(function(response){
			if(response) return response;
			
			var fetchRequest = event.request.clone();
			return fetch(fetchRequest).then(function (response) {

				if(!response) return response;

				var responseToCache = response.clone();
				caches.open(cache_name).then(function(cache){
					cache.put(event.request, responseToCache)
				});

				return response;
			});
		}).catch(function(error){
			console.log(event.request);
			console.log('Error: ' + error)
		})
	);
});