interface Point {
  x: number,
  y: number
}

interface IntersectionCheckResult {
  type: 'none' | 'parallel' | 'colinear' | 'intersecting',
  point?: Point
}

declare function checkIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): IntersectionCheckResult;
declare function colinearPointWithinSegment(pointX: number, pointY: number, startX: number, startY: number, endX: number, endY: number): boolean;
