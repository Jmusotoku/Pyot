(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{409:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"riot-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#riot-api"}},[t._v("#")]),t._v(" Riot API")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("Badge",{attrs:{text:"Pyot Service",vertical:"middle"}})],1),t._v(" "),a("li",[t._v("Models: "),a("Badge",{attrs:{text:"LOL",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"TFT",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"VAL",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"RIOT",type:"error",vertical:"middle"}})],1),t._v(" "),a("li",[t._v("Description: Store that provides data from the Riot Games API, this contains 70 % of all the endpoints for all the Pyot Core Objects, a list of the endpoints is found below.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO ABOUT THIS STORE")]),t._v(" "),a("p",[t._v("Some endpoints can return 403 due to api key policies restrictions. Official endpoints are found at the "),a("a",{attrs:{href:"https://developer.riotgames.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Riot Developer Portal"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"pipeline-settings-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-settings-reference"}},[t._v("#")]),t._v(" Pipeline Settings Reference")]),t._v(" "),a("h3",{attrs:{id:"backend-pyot-stores-riotapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backend-pyot-stores-riotapi"}},[t._v("#")]),t._v(" Backend: "),a("code",[t._v("pyot.stores.RiotAPI")])]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("blockquote",[a("h4",{attrs:{id:"key-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("key: str")])]),t._v(" "),a("p",[t._v("The Riot API key to be used for this model/pipeline.")]),t._v(" "),a("h4",{attrs:{id:"limiting-share-float-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limiting-share-float-1"}},[t._v("#")]),t._v(" "),a("code",[t._v("limiting_share: float = 1")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DEPRECATED")]),t._v(" "),a("p",[t._v("Since v1.1.0: The "),a("code",[t._v("limiting_share")]),t._v(" param, now is a sub setting of the new "),a("code",[t._v("rate_limiter")]),t._v(" param.")])]),t._v(" "),a("h4",{attrs:{id:"rate-limiter-mapping-str-str-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-limiter-mapping-str-str-none"}},[t._v("#")]),t._v(" "),a("code",[t._v("rate_limiter: Mapping[str, str] = None")])]),t._v(" "),a("p",[t._v("Accepts a Dict containing the settings for the rate limiter. Please refer to Limiters tab section.")]),t._v(" "),a("h4",{attrs:{id:"error-handling-mapping-int-tuple-str-list-int-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling-mapping-int-tuple-str-list-int-none"}},[t._v("#")]),t._v(" "),a("code",[t._v("error_handling: Mapping[int, Tuple[str, List[int]]] = None")])]),t._v(" "),a("p",[t._v("Define how this store should handle request errors, please refer to the General -> Error Handler section on the sidebar.")]),t._v(" "),a("h4",{attrs:{id:"log-level-int-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-level-int-10"}},[t._v("#")]),t._v(" "),a("code",[t._v("log_level: int = 10")])]),t._v(" "),a("p",[t._v("Set the log level for the store. Defaults to 10 (DEBUG level).")])]),t._v(" "),a("h2",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"initialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" initialize() "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DEPRECATED")]),t._v(" "),a("p",[t._v("Removed since v1.1.0, due to adding unnecessary delays on imports.")])])]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"riot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#riot"}},[t._v("#")]),t._v(" "),a("code",[t._v("RIOT")]),t._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"Global",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[a("code",[t._v('"account_v1_by_puuid"')])]),t._v(" "),a("p",[a("code",[t._v('"account_v1_by_riot_id"')])]),t._v(" "),a("p",[a("code",[t._v('"account_v1_active_shard"')])])]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"lol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lol"}},[t._v("#")]),t._v(" "),a("code",[t._v("LOL")]),t._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),t._v(" "),a("p",[a("code",[t._v('"champion_v3_rotation"')])]),t._v(" "),a("p",[a("code",[t._v('"champion_mastery_v4_by_champion_id"')])]),t._v(" "),a("p",[a("code",[t._v('"champion_mastery_v4_all_mastery"')])]),t._v(" "),a("p",[a("code",[t._v('"clash_v1_players"')])]),t._v(" "),a("p",[a("code",[t._v('"clash_v1_teams"')])]),t._v(" "),a("p",[a("code",[t._v('"clash_v1_tournaments_by_team_id"')])]),t._v(" "),a("p",[a("code",[t._v('"clash_v1_toutnaments_by_tournament_id"')])]),t._v(" "),a("p",[a("code",[t._v('"clash_v1_tournaments_all"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_summoner_entries"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_challenger_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_grandmaster_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_master_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_entries_by_division"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v4_league_by_league_id"')])]),t._v(" "),a("p",[a("code",[t._v('"status_v3_shard_data"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v4_match"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v4_timeline"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v4_matchlist"')])]),t._v(" "),a("p",[a("code",[t._v('"spectator_v4_current_game"')])]),t._v(" "),a("p",[a("code",[t._v('"spectator_v4_featured_games"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v4_by_name"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v4_by_id"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v4_by_account_id"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v4_by_puuid"')])]),t._v(" "),a("p",[a("code",[t._v('"third_party_code_v4_code"')])])]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"tft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tft"}},[t._v("#")]),t._v(" "),a("code",[t._v("TFT")]),t._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),t._v(" "),a("p",[a("code",[t._v('"league_v1_summoner_entries"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v1_challenger_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v1_grandmaster_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v1_master_league"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v1_entries_by_division"')])]),t._v(" "),a("p",[a("code",[t._v('"league_v1_league_by_league_id"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v1_matchlist"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v1_match"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v1_by_name"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v1_by_id"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v1_by_account_id"')])]),t._v(" "),a("p",[a("code",[t._v('"summoner_v1_by_puuid"')])])]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#val"}},[t._v("#")]),t._v(" "),a("code",[t._v("VAL")]),t._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),t._v(" "),a("p",[a("code",[t._v('"match_v1_match"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v1_matchlist"')])]),t._v(" "),a("p",[a("code",[t._v('"match_v1_recent"')])]),t._v(" "),a("p",[a("code",[t._v('"content_v1_contents"')])])]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.stores.RiotAPI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RIOT_API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RATE_LIMITER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pyot.limiters.MemoryLimiter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LIMITING_SHARE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_HANDLING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);