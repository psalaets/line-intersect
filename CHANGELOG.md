# Change Log

All notable changes to this project will be documented in this file.

## [2.1.1] - 2018-02-20

### Added

- Docs clean up

## [2.1.0] - 2018-02-20

### Added

- Now supporting es modules in additional to commonjs modules so app bundlers can take advantage of that

## [2.0.0] - 2018-02-18

### Breaking changes

- Return same result object when intersect result is `none`, `parallel`, `colinear`

This is only a breaking change if you mutate the result object returned by `checkIntersection()`.

## [1.0.0] - 2014-10-29

### Added

- Initial impl