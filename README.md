# line-intersect

Intersection checks for line segment vs line segment and point vs line segment.

Math is mostly from [here](https://web.archive.org/web/20060808212243/http://local.wasp.uwa.edu.au/~pbourke/geometry/lineline2d).

## Usage

### .checkIntersection

    var lineIntersect = require('line-intersect');
    
    var line1 = ...
    var line2 = ...
    
    var result = lineIntersect.checkIntersection(
      line1.start.x, line1.start.y, line1.end.x, line1.end.y,
      line2.start.x, line2.start.y, line2.end.x, line2.end.y
    );
    
    result.type  // any of none, parallel, colinear, intersecting
    result.point // only exists when result.type == 'intersecting'

### .colinearPointWithinSegment

    var lineIntersect = require('line-intersect');
    
    var line = ...
    var point = ...

    var result = lineIntersect.colinearPointWithinSegment(
      point.x, point.y
      line.start.x, line.start.y,
      line.end.x, line.end.y
    );
    
    result // boolean

## Install

    npm install line-intersect

## License

MIT