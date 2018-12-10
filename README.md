## Week-8: CMS Project

### Author: David Chambers

### Links and Resources
* [REPO: Week-8: CMS Project](http://xyz.com)
* [Deployed back-end](https://dc-api-server.herokuapp.com)
* [Deployed front-end](TBD)

### Modules

#### `index.js` -> renders to the DOM
* Purpose: Wraps the module(s) to be rendered in the store provider.
* Renders `<App/>

#### `store/index.js`
##### Exported Values and Methods

###### `store() -> reducers and middleware`
* Records: state created by the records reducer
* Thunk: middleware to assit with Async processes.


#### `App.js` -> TBD
##### Exported Values and Methods

<!-- ###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples -->

#### `components/record/list.js` -> TBD
##### Exported Values and Methods

<!-- ###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples -->










### Setup
#### `.env` requirements
* `PORT` - Port Number


#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events