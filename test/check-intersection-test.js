var assert = require('assert');
var lineIntersect = require('../');

describe('.checkIntersection', function() {
  describe('non-parallel, non-intersecting line segments', function() {
    it('type is none', function() {
      var result = lineIntersect.checkIntersection(
        1, 1, 2, 2,
        3, 1, 3, 2
      );

      assert.equal(result.type, 'none');
    });
  });

  describe('parallel, non-colinear line segments', function () {
    it('type is parallel', function() {
      var result = lineIntersect.checkIntersection(
        1, 1, 1, 2,
        3, 1, 3, 2
      );

      assert.equal(result.type, 'parallel');
    });
  });

  describe('colinear, non-overlapping line segments', function() {
    it('type is colinear', function() {
      var result = lineIntersect.checkIntersection(
        1, 1, 5, 5,
        6, 6, 7, 7
      );

      assert.equal(result.type, 'colinear');
    });
  });

  describe('colinear, overlapping line segments', function() {
    it('type is colinear', function() {
      var result = lineIntersect.checkIntersection(
        1, 1, 5, 5,
        3, 3, 7, 7
      );

      assert.equal(result.type, 'colinear');
    });

    it('does not return intersection point', function() {
      var result = lineIntersect.checkIntersection(
        1, 1, 5, 5,
        3, 3, 7, 7
      );

      assert(!result.point);
    });
  });

  describe('line segments intersecting at one point', function() {
    it('type is intersecting', function() {
      var result = lineIntersect.checkIntersection(
        0, 1, 4, 1,
        2, -2, 2, 2
      );

      assert.equal(result.type, 'intersecting');
    });

    it('returns intersection point', function() {
      var result = lineIntersect.checkIntersection(
        0, 1, 4, 1,
        2, -2, 2, 2
      );

      assert.deepEqual(result.point, {x: 2, y: 1});
    });
  });
});
