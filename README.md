# cky-lunar-calendar

# Features!
  - Convert solar date with timezone to lunar date
  - And revert lunar date to solar date


This package use lib of Ho Ngoc Duc, convert a date to lunar date with timezone (default timezone is GMT+7)

> Copyright 2004 Ho Ngoc Duc ([Am lich - Ho Ngoc Duc]). All Rights Reserved.
> Permission to use, copy, modify, and redistribute this software and its
> documentation for personal, non-commercial use is hereby granted provided that
> this copyright notice appears in all copies.


### Installation

```sh
$ npm install cky-lunar-calendar --save
```
### function
* **solar2Lunar *(date, month, yeaer, timezone)***
    * `date` ***<[number](http://chickyky.com)>***: solar date
    * `month` ***<[number](http://chickyky.com)>***: solar month
    * `year` ***<[number](http://chickyky.com)>***: solar year
    * `timezone` ***<[number](http://chickyky.com)>***: `optional`, timezone in GMT of your location you want, `default is 7`
- return Array [date, month, year]

> convert solar date to lunar date with timezone optional.
----

* **lunar2Solar *(date, month, yeaer, timezone)***
    * `date` ***<[number](http://chickyky.com)>***: lunar date
    * `month` ***<[number](http://chickyky.com)>***: lunar month
    * `year` ***<[number](http://chickyky.com)>***: lunar year
    * `timezone` ***<[number](http://chickyky.com)>***: `optional`, timezone in GMT of your location you want, `default is 7`
- return `Array [date, month, year]`
> convert lunar date to solar date with timezone optional.
----
### Test script
```javascript
const lunar = require('cky-lunar-calendar');

let now = new Date();

let dateLunar = lunar.solar2Lunar(now.getDate(), now.getMonth() + 1, now.getFullYear());
console.log('Solar -> Lunar:', [now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/') , '->', dateLunar[0], dateLunar[1], dateLunar[2]);


let dateSolar = lunar.lunar2Solar(now.getDate(), now.getMonth() + 1, now.getFullYear());
console.log('Lunar -> Solar:', [now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/') , '->', dateSolar[0], dateSolar[1], dateSolar[2]);
```
### Test command
```sh
$ npm test
```

will output like:
```
Solar -> Lunar: 3/6/2019 -> 1 5 2019
Lunar -> Solar: 3/6/2019 -> 5 7 2019
```

License
----

MIT

##### - Chickyky -
![kiki](:dog:)![kiki](:dog:)![kiki](:dog:)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Am lich - Ho Ngoc Duc]: <http://www.informatik.uni-leipzig.de/~duc/amlich/>
