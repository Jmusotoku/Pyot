(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{408:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"redis-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-cache"}},[t._v("#")]),t._v(" Redis Cache")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("Badge",{attrs:{text:"Pyot Cache",vertical:"middle"}}),t._v(" "),e("Badge",{attrs:{text:"Sharding",type:"error",vertical:"middle"}})],1),t._v(" "),e("li",[t._v("Description: Store that uses Redis servers as Caches. This cache provides similar speeds to Omnistone while preserving data even if the pipeline is down.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("INFO ABOUT THIS STORE")]),t._v(" "),e("p",[t._v("The Cache is built on top of Python integration of "),e("a",{attrs:{href:"https://pypi.org/project/redis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("You can add multiple stores of this type to the pipeline, but take in mind that this store lives on RAM (hence the speed) so it might be limited if you want to cache bigger or more objects.")])]),t._v(" "),e("h2",{attrs:{id:"pipeline-settings-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-settings-reference"}},[t._v("#")]),t._v(" Pipeline Settings Reference")]),t._v(" "),e("h3",{attrs:{id:"backend-pyot-stores-rediscache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend-pyot-stores-rediscache"}},[t._v("#")]),t._v(" Backend: "),e("code",[t._v("pyot.stores.RedisCache")])]),t._v(" "),e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),e("blockquote",[e("h4",{attrs:{id:"host-str-127-0-0-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host-str-127-0-0-1"}},[t._v("#")]),t._v(" "),e("code",[t._v("host: str = '127.0.0.1'")])]),t._v(" "),e("p",[t._v("Host of the Redis server.")]),t._v(" "),e("h4",{attrs:{id:"port-int-6379"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port-int-6379"}},[t._v("#")]),t._v(" "),e("code",[t._v("port: int = 6379")])]),t._v(" "),e("p",[t._v("Port of the Redis server.")]),t._v(" "),e("h4",{attrs:{id:"db-int-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-int-0"}},[t._v("#")]),t._v(" "),e("code",[t._v("db: int = 0")])]),t._v(" "),e("p",[t._v("Database of the Redis server.")]),t._v(" "),e("h4",{attrs:{id:"expirations-dict-str-any-none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expirations-dict-str-any-none"}},[t._v("#")]),t._v(" "),e("code",[t._v("expirations: Dict[str, Any] = None")])]),t._v(" "),e("p",[t._v("Custom mapping for overriding the default expirations. For details and defaults refer to Pipeline > Store Bases > Expirations section.")]),t._v(" "),e("h4",{attrs:{id:"log-level-int-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-level-int-10"}},[t._v("#")]),t._v(" "),e("code",[t._v("log_level: int = 10")])]),t._v(" "),e("p",[t._v("Set the log level for the store. Defaults to 10 (DEBUG level).")]),t._v(" "),e("h4",{attrs:{id:"kwargs-any-extra-key-value-pair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kwargs-any-extra-key-value-pair"}},[t._v("#")]),t._v(" "),e("code",[t._v("**kwargs")]),t._v(" (Any Extra key value pair)")]),t._v(" "),e("p",[t._v("Any extra Key : Value pair that is passed to the "),e("code",[t._v("redis.Redis")]),t._v(" instance. Refer to its arguments at "),e("a",{attrs:{href:"https://redis-py.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"cached-endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cached-endpoints"}},[t._v("#")]),t._v(" Cached Endpoints")]),t._v(" "),e("p",[t._v("All available endpoints defined in the default expirations.")]),t._v(" "),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("In your Pyot settings.")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PIPELINE ...")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.RedisCache"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOST"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PORT"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EXPIRATIONS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ....")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);