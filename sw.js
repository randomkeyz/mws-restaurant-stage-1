self.addEventListener('install', function(event){	
	event.waitUntil(
		caches.open('restaurant-v3').then(function(cache){
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
		caches.match(event.request).then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
	);
});