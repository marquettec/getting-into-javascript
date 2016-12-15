
**http://kangax.github.io/compat-table/esnext/**

## ECMAScript, ESxxxx, ESx : A little of history

* 1995 Netscape releases Livescript, soon renamed Javascript
* 1996 Netscape submits Javascript to ECMAScript International, for standardization
* Then 15 years with no real changes nor support cross browsers (1999: ECMAScript3, 2009: ECMAScript5)
* 2012 Things are changing
  * Push to stop supporting old IE versions, and write ECMAScript5 became easier
  * ECMAScript thus becomes Standard reference for Javascript implementations
  * 2015, June, ECMAScript 6th Edition (ES6) is renamed to ECMASCript 2015 (ES2015) - Big bang
  * TC39, 
    * committee responsible for drafting the ECMAScript specifications, 
    * decides to move to a Yearly model for defining new standards 
* Currently, several proposals for new features or syntax to be added to Javascript 
  * Includes annotations/decorators, async-await, and static class properties (postponed?)
  * Looks like only 2 features will be retained
    * Array.prototype.includes
    * Exponentiation operator (**) 
  * Refered to as ES7, ES2016, or ES.Next
* ES2017 ?: annotations/decorators, async-await (following Promise), Observable,  and static class properties
* ES2018 ?: Generators
  

Sources : 
* http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/
* http://www.2ality.com/2016/01/ecmascript-2016.html
* http://kangax.github.io/compat-table/esnext/

### Further Resources

References / Proposals
* https://github.com/esnext
* https://tc39.github.io/ecma262/

Documentation / Books
* http://exploringjs.com/es6/index.html
* http://exploringjs.com/es2016-es2017/

## Reactive programming

* Streams, Event, data
* Asynchronous : Promises (.then().catch()), Generators (.next()), Async-await
* Reactive programming is programming with asynchronous data streams
* On top of that, you are given an amazing toolbox of functions to combine, create and filter any of those streams
  * pipe, merge, filter, map
* A stream is a sequence of ongoing events ordered in time
* We capture these emitted events only asynchronously,
* Reactive Programming raises the level of abstraction of your code so you can focus on the interdependence of events that define the business logic
* Apps have evolved to be more real-time: 
  * modifying a single form field can automatically trigger a save to the backend, 
  * "likes" to some content can be reflected in real time to other connected users, 
  * and so forth


Sources : 
* https://auth0.com/blog/understanding-reactive-programming-and-rxjs/
* https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
