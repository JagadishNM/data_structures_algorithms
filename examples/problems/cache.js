// To build a cache for mostly used items in JavaScript, you can use an object or a Map data structure.
// Here's an example implementation:
class Cache {
	constructor(maxSize) {
		this.maxSize = maxSize;
		this.cache = new Map();
	}

	get(key) {
		if (this.cache.has(key)) {
			// Move the accessed item to the front of the cache (most recently used)
			const value = this.cache.get(key);
			this.cache.delete(key);
			this.cache.set(key, value);
			return value;
		}
		return null;
	}

	set(key, value) {
		if (this.cache.has(key)) {
			// Update the value and move the item to the front of the cache (most recently used)
			this.cache.delete(key);
		} else if (this.cache.size >= this.maxSize) {
			// Remove the least recently used item from the cache
			const oldestKey = this.cache.keys().next().value;
			this.cache.delete(oldestKey);
		}
		this.cache.set(key, value);
	}
}

const cache = new Cache(5); // Maximum cache size of 5

cache.set('item1', 'value1');
cache.set('item2', 'value2');
cache.set('item3', 'value3');

console.log(cache.get('item1')); // Output: value1

cache.set('item4', 'value4');
cache.set('item5', 'value5');

console.log(cache.get('item2')); // Output: null (item2 was evicted due to cache size limit)

cache.set('item1', 'new value1');
console.log(cache.get('item1')); // Output: new value1

cache.set('item6', 'value6');
console.log(cache.get('item3')); // Output: null (item3 was evicted due to cache size limit)

// In this example, the cache has a maximum size of 5 items. When a new item is added,
//  if the cache is full, it removes the least recently used item (based on insertion order) to
//  make space for the new item. When an item is accessed
// (using the get method), it moves the item to the front of the cache to prioritize the most recently used items.
