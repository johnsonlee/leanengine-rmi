# leanengine-rmi

Unit Test Framework for LeanEngine

## Installation

```
npm install leanengine-rmi
```

## Example

```
var rmi = require('leanengine-rmi');

rmi.invoke('hello', null, {
    success : function(result) {
        console.log(result);
    },
    error : function(e) {
        console.error(e);
    },
});
```
