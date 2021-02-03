declare module 'line-intersect' {
  interface Point {
    x: number,
    y: number
  }

  type IntersectionCheckResult =
    | {
        type: 'none' | 'parallel' | 'colinear';
      }
    | {
        type: 'intersecting';
        point: Point;
      };

  function checkIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): IntersectionCheckResult;
  function colinearPointWithinSegment(pointX: number, pointY: number, startX: number, startY: number, endX: number, endY: number): boolean;
}