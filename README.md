ifnodeify
==============

`ifnodeify` is a `browserify` plugin that enables browserify to skip the following code pieces:

```javascript
// if node
console.info('this line will not be exported via browerify with ifnodeify');
// end
```

By using `ifnodeify`, it should be possible to build modules for the browser that were up until now only supported by LearnBoost's `browserbuild`.
