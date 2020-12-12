(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{372:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"syot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syot"}},[t._v("#")]),t._v(" Syot")]),t._v(" "),a("p",[t._v("Syot is a backported version of Pyot to synchronous code (rarely a case not going async). This might be an option for those who don't want to go async or want less complexity in code.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),a("p",[t._v("You still need to activate the Settings for Syot to work.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Syot and Pyot "),a("strong",[a("em",[t._v("shares the same pipeline")])]),t._v(" per each model so you can use both environment together without any problem. They won't have any conflicts unless you try to activate the same Settings both in Syot and Pyot.")])]),t._v(" "),a("p",[t._v("The below documentation only applies to Syot.\nFor the rest of the API please refer to Pyot documentation by replacing "),a("code",[t._v("pyot")]),t._v(" with "),a("code",[t._v("syot")]),t._v(" instead, awaitables needs to be executed with "),a("code",[t._v("loop_run()")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"similarities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#similarities"}},[t._v("#")]),t._v(" Similarities")]),t._v(" "),a("ol",[a("li",[t._v("All Pyot Object's methods that are not marked with "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}}),t._v(" are usable in Syot, that includes Pyot Object's "),a("code",[t._v("dict()")]),t._v(", "),a("code",[t._v("json()")]),t._v(" and others not mentioned.")],1),t._v(" "),a("li",[t._v("All the models API are available on Syot, with some minor changes listed below.")])]),t._v(" "),a("h2",{attrs:{id:"differences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences"}},[t._v("#")]),t._v(" Differences")]),t._v(" "),a("ol",[a("li",[t._v("Lose the advantage of cooperative tasks and high concurrency to speed up the calls.")]),t._v(" "),a("li",[t._v("The Pyot Pipeline Low Level API is not available in synchronous environment, you would need to do "),a("code",[t._v("loop_run()")]),t._v(" for every single pipeline coroutine.")]),t._v(" "),a("li",[t._v("The Pyot Gatherer is also not supported here, because it is a feature only for asynchrounous environment.")]),t._v(" "),a("li",[t._v("Instead of "),a("code",[t._v("from pyot")]),t._v(" do "),a("code",[t._v("from syot")]),t._v(" to import the synchronous version of Pyot.")]),t._v(" "),a("li",[t._v("You no longer need to "),a("code",[t._v("await")]),t._v(" the "),a("code",[t._v("get()")]),t._v(" methods on the Objects, and "),a("code",[t._v("get()")]),t._v(' is now "chainable", meaning you can chain attributes and other methods right after '),a("code",[t._v("get()")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("Activate the settings before you script entry point or module "),a("code",[t._v("__init__.py")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" syot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Settings\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\nSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    MODEL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LOL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_PLATFORM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NA1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_REGION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AMERICAS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_LOCALE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EN_US"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PIPELINE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.Omnistone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.MerakiCDN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.CDragon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.RiotAPI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RIOT_API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API KEY")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <- DON'T FORGET TO ACTIVATE THE SETTINGS")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("Example of Syot code")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" syot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lol\n\nsummoner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Summoner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Morimorph"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NA1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("summoner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#OR using method chains:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Summoner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Morimorph"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NA1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("The below issue is already handled if you created the project using "),a("code",[t._v("pyot startproject")]),t._v(".")]),t._v(" "),a("p",[t._v("On Windows, it is possible to see "),a("code",[t._v("RuntimeError: Event loop is closed")]),t._v(" throwing from the proactor pipeline. This is a "),a("a",{attrs:{href:"https://github.com/aio-libs/aiohttp/issues/4324",target:"_blank",rel:"noopener noreferrer"}},[t._v("known issue"),a("OutboundLink")],1),t._v(". "),a("em",[a("strong",[t._v("This will not affect your code from running, because the exception will be ignored.")])]),t._v(" You can still fix this on Windows so that the warning is not printed. You can add the following code in the same file of your pyot settings:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" platform\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" silence_proactor_pipe_deallocation\n    silence_proactor_pipe_deallocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);