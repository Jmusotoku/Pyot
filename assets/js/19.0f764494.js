(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{370:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("First words: Pyot WON'T work if you don't activate the settings for the respective models (games).")])]),t._v(" "),a("p",[t._v("Pyot Settings are passed as constructors parameters to the class. It takes the necessary objects to change how Pyot behave to your needs. Each model (game) should have their own settings and therefore their own pipeline declared in the settings.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("REMINDER")]),t._v(" "),a("p",[t._v("Don't forget to call "),a("code",[t._v("activate()")]),t._v(" at the end of your settings instantiation.")])]),t._v(" "),a("p",[t._v("Relevant related documentation: "),a("strong",[a("RouterLink",{attrs:{to:"/pipeline/"}},[t._v("Pipeline")])],1),t._v(" & "),a("strong",[a("RouterLink",{attrs:{to:"/stores/"}},[t._v("Stores")])],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"pyot-settings-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyot-settings-api"}},[t._v("#")]),t._v(" Pyot Settings API")]),t._v(" "),a("p",[t._v("This object is imported at the core module.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Settings\n\nSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# settings params ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# activate")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Pyot Settings should be "),a("strong",[a("em",[t._v("activated")])]),t._v(" on your main module's "),a("code",[t._v("__init__.py")]),t._v(" or before your script "),a("code",[t._v("main()")]),t._v(" entry point.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("├─ foo\n│  ├─ __init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <---- HERE MOSTLY")]),t._v("\n│  ├─ __main__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <---- OR ANYWHERE BEFORE CALLING `main()`")]),t._v("\n│  └─ bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("blockquote",[a("h3",{attrs:{id:"init-kwargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-kwargs"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__(**kwargs)")])]),t._v(" "),a("p",[t._v("Create an instance of the Pyot Object, See parameters:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("MODEL")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("str")]),t._v(": The name of the model, a valid 3 letter model name is passed ("),a("code",[t._v('"LOL"')]),t._v(", "),a("code",[t._v('"VAL"')]),t._v(", "),a("code",[t._v('"TFT"')]),t._v(", "),a("code",[t._v('"LOR"')]),t._v(", "),a("code",[t._v('"RIOT"')]),t._v(")")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("DEFAULT_PLATFORM")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"param",type:"optional",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("str")]),t._v(": Default platform to use when no platform is passed to Pyot Core Objects, platform values varies from model, refer to each model at API section.")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("DEFAULT_REGION")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"param",type:"optional",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("str")]),t._v(": Default region to use when no region is passed to Pyot Core Objects, region values varies from model, refer to each model at API section.")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("DEFAULT_LOCALE")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"param",type:"optional",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("str")]),t._v(": Default locale to use when no locale is passed to Pyot Core Objects, locale values varies from model, refer to each model at API section.")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("LOCALE_MAP")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"param",type:"optional",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("Mapping[str, str]")]),t._v(': A dictionary that contains the key value pairs to override the default mapping to locale, this mapping is used for converting platform and regions to locale when "bridges" are called, for example, calling a bridge that brings a '),a("code",[t._v("Champion")]),t._v(" instance from a "),a("code",[t._v("ChampionMastery")]),t._v(" instance with platform "),a("code",[t._v('"KR"')]),t._v(" will bring "),a("code",[t._v("Champion")]),t._v(" with locale "),a("code",[t._v("ko_kr")]),t._v(" by default, you can override the region/platform/locale on runtime too, simply "),a("code",[t._v('x.locale = "en_us"')]),t._v(" where x is a locale based Core Object. For values refer to each model at API section")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("PIPELINE")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),a("code",[t._v("List[Mapping[str, Any]]")]),t._v(": A list of dict of stores that defines the Pipeline used for the model. "),a("strong",[a("em",[t._v("For each item in the list, DEFINE the "),a("code",[t._v("BACKEND")]),t._v(" of the Store plus other required or optional settings, these settings are documented in a per Store basic")])]),t._v(". Please refer to "),a("RouterLink",{attrs:{to:"/pipeline/"}},[t._v("Pipeline")]),t._v(" section for more details and "),a("RouterLink",{attrs:{to:"/stores/"}},[t._v("Stores")]),t._v(" section for its settings params and available stores for each model.")],1)])])]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"activate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate"}},[t._v("#")]),t._v(" "),a("code",[t._v("activate()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Activates the Settings object by creating the needed pipeline and adjusting the defaults.")])]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("For documentation of each store please go to "),a("RouterLink",{attrs:{to:"/stores/"}},[t._v("Stores")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Settings\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\nSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    MODEL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LOL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_PLATFORM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NA1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_REGION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AMERICAS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DEFAULT_LOCALE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EN_US"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PIPELINE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.Omnistone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.MerakiCDN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_HANDLING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.CDragon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_HANDLING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"R"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.RiotAPI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RIOT_API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LOG_LEVEL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- 30 will also make python print all calls.")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RATE_LIMITER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.limiters.MemoryLimiter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LIMITING_SHARE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_HANDLING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);