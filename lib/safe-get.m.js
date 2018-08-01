export default function(r,e,t){var n;if(void 0===t&&(t=null),"string"==typeof e)n=e.split(".");else{if(!Array.isArray(e))return t;n=e}return n.reduce(function(r,e){return r||"number"==typeof r[e]&&void 0!==r[e]?r[e]:t},r)};
//# sourceMappingURL=safe-get.m.js.map
