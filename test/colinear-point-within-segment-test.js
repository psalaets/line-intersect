var assert = require('assert');
var lineIntersect = require('../');

describe('.colinearPointWithinSegment', function() {
  it('false when point is colinear but not within line segment', function() {
    var result = lineIntersect.colinearPointWithinSegment(
      0, 0,
      1, 1,
      2, 2
    );

    assert(!result);
  });

  it('true when point is within line segment', function() {
    var result = lineIntersect.colinearPointWithinSegment(
      3, 3,
      2, 2,
      4, 4
    );

    assert(result);
  });

  it('true when point is line segment start', function() {
    var result = lineIntersect.colinearPointWithinSegment(
      2, 2,
      2, 2,
      4, 4
    );

    assert(result);
  });

  it('true when point is line segment end', function() {
    var result = lineIntersect.colinearPointWithinSegment(
      4, 4,
      2, 2,
      4, 4
    );

    assert(result);
  });
});
