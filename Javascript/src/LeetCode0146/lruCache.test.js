/*
示例:
LRUCache cache = new LRUCache( 2  )
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
*/

const { expect } = require('chai');
const { LRUCache, newLRUCache } = require('./lruCache.problem');

describe('LeetCode0146 #lruCache', function () {
  describe('Simple Version', function () {
    const cache = new LRUCache(2);
    cache.put(1,1);
    cache.put(2,2);
    it('should return 1', function () {
      expect(cache.get(1)).to.equal(1);
    });
    it('should return -1', function () {
      cache.put(3, 3);
      expect(cache.get(2)).to.equal(-1);
    });
    it('should return -1 3 4', function () {
      cache.put(4, 4);
      expect(cache.get(1)).to.equal(-1);
      expect(cache.get(3)).to.equal(3);
      expect(cache.get(4)).to.equal(4);
    });
  });

  describe('Class Version', function () {
    const cahce1 = new newLRUCache(2);
    cahce1.put(1,1);
    cahce1.put(2,2);
    it('should return 1', function () {
      expect(cahce1.get(1)).to.equal(1);
    });
    it('should return -1', function () {
      cahce1.put(3, 3);
      expect(cahce1.get(2)).to.equal(-1);
    });
    it('should return -1 3 4', function () {
      cahce1.put(4, 4);
      expect(cahce1.get(1)).to.equal(-1);
      expect(cahce1.get(3)).to.equal(3);
      expect(cahce1.get(4)).to.equal(4);
    });
  });
});