module.exports=function(r,e,n){var t;if(void 0===n&&(n=null),"string"==typeof e)t=e.split(".");else{if(!Array.isArray(e))return n;t=e}return t.reduce(function(r,e){return r||"number"==typeof r[e]&&void 0!==r[e]?r[e]:n},r)};
//# sourceMappingURL=safe-get.js.map
