(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{416:function(e,t,o){"use strict";o.r(t);var a=o(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"about"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[e._v("#")]),e._v(" About")]),e._v(" "),o("p",[e._v("This module exposes a wide set of utils methods and objects "),o("strong",[o("em",[e._v("highly")])]),e._v(" helpful for development.")]),e._v(" "),o("p",[e._v("For example if you want to iterate for all the items in events of "),o("code",[e._v("lol.MatchTimeline")]),e._v(" and get its cost, then "),o("strong",[o("em",[e._v("it would be very innefficient")])]),e._v(" if you do "),o("code",[e._v("await event.item.get()")]),e._v(" every time, even if it is cached on Omnistone, because Pyot's stores should be "),o("strong",[o("em",[e._v("safe")])]),e._v(" from any type mutation, so Omnistone will automatically copy the object before retrieving it, which adds up huge amount of CPU time. Solution would be a local cache that doesn't copy the objects but instead keeping an "),o("em",[e._v("arrow")]),e._v(" referencing the object, which is the use case of an "),o("code",[e._v("ArrowCache")]),e._v(".")]),e._v(" "),o("p",[e._v("Or if you want to convert a champion key to champion id without the need of pulling an entire "),o("code",[e._v("Champion")]),e._v(" object then the method "),o("code",[e._v("champion_id_by_key")]),e._v(" is here for you. There is also others common tools like the frequently mentioned "),o("code",[e._v("loop_run")]),e._v(", "),o("code",[e._v("fast_copy")]),e._v(" which are even useful outside of Pyot environment.")]),e._v(" "),o("h2",{attrs:{id:"imports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#imports"}},[e._v("#")]),e._v(" Imports")]),e._v(" "),o("p",[e._v("The methods and objects are organized in submodules but most of them are importable at the root of this module. For example:")]),e._v(" "),o("div",{staticClass:"language-python line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-python"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" pyot"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ArrowCache\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" pyot"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("objects "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ArrowCache\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[e._v("Both of these imports are valid, have your taste.")]),e._v(" "),o("h2",{attrs:{id:"legend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#legend"}},[e._v("#")]),e._v(" Legend")]),e._v(" "),o("p",[e._v("-"),o("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(": This is a function.")],1),e._v(" "),o("p",[e._v("-"),o("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}}),e._v(": This is an awaitable.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);