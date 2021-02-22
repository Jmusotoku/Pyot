(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{430:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongo-db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongo-db"}},[t._v("#")]),t._v(" Mongo DB")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("Badge",{attrs:{text:"Pyot Cache",vertical:"middle"}}),t._v(" "),e("Badge",{attrs:{text:"Sharding",type:"error",vertical:"middle"}})],1),t._v(" "),e("li",[t._v("Description: Store that uses Mongo NoSQL DBs as Caches. This cache provides high speed read/write in disk persistent storage, objects expirations are handled by Mongo's TTL indexes.")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("DEPRECATION")]),t._v(" "),e("p",[t._v("Since v3.1.0 this store will start migrating to use the bson format, which allows queries into the cached objects (or potentially stored forever objects) and bulk requesting without the need of readding them in another database. Old items are automatically deleted progressively when accessed. To maintain old cached items, run the following in python shell with settings activated:")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("migrate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" migrate_all_to_bson\nmigrate_all_to_bson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("INFO ABOUT THIS STORE")]),t._v(" "),e("p",[t._v("This store is best for production environment due to its high speed, TTL indexes and mainly disk based storage. Built on top of Python Async Driver of MongoDB "),e("a",{attrs:{href:"https://motor.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Motor"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Multiple instances of MongoDB is allowed, DB level sharding is also possible by following the Mongo's docs for sharding and pass the necessary kwargs to the settings.")]),t._v(" "),e("p",[t._v("Objects are stored as bytes strings serialized by "),e("code",[t._v("pickle")]),t._v(" due to faster performance than bson format, to get a cached object from the db without using pyot's pipeline, "),e("code",[t._v("pickle.loads()")]),t._v(" is needed for deserializing to python dictionary and further able to jsonify. (The util function "),e("code",[t._v("pytify")]),t._v(" from "),e("code",[t._v("pyot.utils")]),t._v(" also works)")])]),t._v(" "),e("h2",{attrs:{id:"pipeline-settings-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-settings-reference"}},[t._v("#")]),t._v(" Pipeline Settings Reference")]),t._v(" "),e("h3",{attrs:{id:"backend-pyot-stores-mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend-pyot-stores-mongodb"}},[t._v("#")]),t._v(" Backend: "),e("code",[t._v("pyot.stores.MongoDB")])]),t._v(" "),e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),e("blockquote",[e("h4",{attrs:{id:"db-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("db: str")])]),t._v(" "),e("p",[t._v("Name of the database to be used.")]),t._v(" "),e("h4",{attrs:{id:"host-str-127-0-0-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host-str-127-0-0-1"}},[t._v("#")]),t._v(" "),e("code",[t._v("host: str = '127.0.0.1'")])]),t._v(" "),e("p",[t._v("Host of the Mongo DB instance.")]),t._v(" "),e("h4",{attrs:{id:"port-int-27017"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port-int-27017"}},[t._v("#")]),t._v(" "),e("code",[t._v("port: int = 27017")])]),t._v(" "),e("p",[t._v("Port of the Mongo DB instance.")]),t._v(" "),e("h4",{attrs:{id:"expirations-dict-str-any-none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expirations-dict-str-any-none"}},[t._v("#")]),t._v(" "),e("code",[t._v("expirations: Dict[str, Any] = None")])]),t._v(" "),e("p",[t._v("Custom mapping for overriding the default expirations. For details and defaults refer to Pipeline > Store Bases > Expirations section.")]),t._v(" "),e("h4",{attrs:{id:"log-level-int-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-level-int-10"}},[t._v("#")]),t._v(" "),e("code",[t._v("log_level: int = 10")])]),t._v(" "),e("p",[t._v("Set the log level for the store. Defaults to 10 (DEBUG level).")]),t._v(" "),e("h4",{attrs:{id:"kwargs-any-extra-key-value-pair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kwargs-any-extra-key-value-pair"}},[t._v("#")]),t._v(" "),e("code",[t._v("**kwargs")]),t._v(" (Any Extra key value pair)")]),t._v(" "),e("p",[t._v("Any extra Key : Value pair that is passed to the "),e("code",[t._v("motor.motor_asyncio.AsyncIOMotorClient")]),t._v(" instance. Refer to its arguments at "),e("a",{attrs:{href:"https://motor.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("motor documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"cached-endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cached-endpoints"}},[t._v("#")]),t._v(" Cached Endpoints")]),t._v(" "),e("p",[t._v("All available endpoints defined in the "),e("RouterLink",{attrs:{to:"/pipeline/expiration.html#default-expirations"}},[t._v("default expirations")]),t._v(". Endpoints are also documented under each service store documentation.")],1),t._v(" "),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("In your Pyot settings.")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PIPELINE ...")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.MongoDB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pyot_lol'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOST"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PORT"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LOG_LEVEL"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EXPIRATIONS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ....")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);