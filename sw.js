self.addEventListener('install', function(event){	
	event.waitUntil(
		caches.open('restaurant-v1').then(function(cache){
			return cache.addAll([
				'/',
				'restaurant.html',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'data/restaurants.json',
				'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
				'https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap'
			]);
		})
	);
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
	);
});