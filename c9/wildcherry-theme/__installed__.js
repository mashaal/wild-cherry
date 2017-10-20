define("plugins/wildcherry_theme/__installed__", [],[
    {
        "packagePath": "plugins/wildcherry_theme/__static__"
    }
]);

define("plugins/wildcherry_theme/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "0.0.1";
        plugin.on("load", function load() {
            [
                {
                    "type": "themes",
                    "filename": "wildcherry.css",
                    "data": "/* name: wildcherry; isDark: true; cssClass: ace-wildcherry; */\n.ace-wildcherry .ace_gutter {\n  background: #2b1f32;\n  color: rgb(146,140,146)\n}\n\n.ace-wildcherry .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8\n}\n\n.ace-wildcherry {\n  background-color: #2b1f32;\n  color: #F8F8F2\n}\n\n.ace-wildcherry .ace_cursor {\n  color: #F8F8F0\n}\n\n.ace-wildcherry .ace_marker-layer .ace_selection {\n  background: #4a1386\n}\n\n.ace-wildcherry.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #2b1f32;\n  border-radius: 2px\n}\n\n.ace-wildcherry .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174)\n}\n\n.ace-wildcherry .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #38072f\n}\n\n.ace-wildcherry .ace_marker-layer .ace_active-line {\n  background: #4a1386\n}\n\n.ace-wildcherry .ace_gutter-active-line {\n  background-color: #4a1386\n}\n\n.ace-wildcherry .ace_marker-layer .ace_selected-word {\n  border: 1px solid #4a1386\n}\n\n.ace-wildcherry .ace_fold {\n  background-color: #35ba66;\n  border-color: #F8F8F2\n}\n\n.ace-wildcherry .ace_keyword {\n  color: #e15d97\n}\n\n.ace-wildcherry .ace_constant.ace_language {\n  color: #9b5fe0\n}\n\n.ace-wildcherry .ace_constant.ace_numeric {\n  color: #9b5fe0\n}\n\n.ace-wildcherry .ace_constant.ace_character {\n  color: #9b5fe0\n}\n\n.ace-wildcherry .ace_constant.ace_other {\n  color: #9b5fe0\n}\n\n.ace-wildcherry .ace_support.ace_function {\n  color: #0aacc5\n}\n\n.ace-wildcherry .ace_support.ace_constant {\n  color: #6be5fd\n}\n\n.ace-wildcherry .ace_support.ace_class {\n  font-style: italic;\n  color: #66d9ef\n}\n\n.ace-wildcherry .ace_support.ace_type {\n  font-style: italic;\n  color: #66d9ef\n}\n\n.ace-wildcherry .ace_storage {\n  color: #e15d97\n}\n\n.ace-wildcherry .ace_storage.ace_type {\n  font-style: italic;\n  color: #0aacc5\n}\n\n.ace-wildcherry .ace_invalid {\n  color: #F8F8F0;\n  background-color: #e15d97\n}\n\n.ace-wildcherry .ace_invalid.ace_deprecated {\n  color: #F8F8F0;\n  background-color: #9b5fe0\n}\n\n.ace-wildcherry .ace_string {\n  color: #fed888\n}\n\n.ace-wildcherry .ace_comment {\n  color: #6272a4\n}\n\n.ace-wildcherry .ace_variable {\n  color: #35ba66\n}\n\n.ace-wildcherry .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #ffb86c\n}\n\n.ace-wildcherry .ace_meta.ace_tag {\n  color: #e15d97\n}\n\n.ace-wildcherry .ace_entity.ace_other.ace_attribute-name {\n  color: #35ba66\n}\n\n.ace-wildcherry .ace_entity.ace_name.ace_function {\n  color: #35ba66\n}\n\n.ace-wildcherry .ace_entity.ace_name.ace_tag {\n  color: #e15d97\n}"
                },
                {
                    "type": "themes",
                    "filename": "wildcherry.js",
                    "data": "/* ***** BEGIN LICENSE BLOCK *****\r\n * Distributed under the BSD license:\r\n *\r\n * Copyright (c) 2010, Ajax.org B.V.\r\n * All rights reserved.\r\n *\r\n * Redistribution and use in source and binary forms, with or without\r\n * modification, are permitted provided that the following conditions are met:\r\n *     * Redistributions of source code must retain the above copyright\r\n *       notice, this list of conditions and the following disclaimer.\r\n *     * Redistributions in binary form must reproduce the above copyright\r\n *       notice, this list of conditions and the following disclaimer in the\r\n *       documentation and/or other materials provided with the distribution.\r\n *     * Neither the name of Ajax.org B.V. nor the\r\n *       names of its contributors may be used to endorse or promote products\r\n *       derived from this software without specific prior written permission.\r\n * \r\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND\r\n * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\r\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\r\n * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY\r\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\r\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\r\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\r\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\r\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\r\n * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\r\n *\r\n * ***** END LICENSE BLOCK ***** */\r\n\r\ndefine(function(require, exports, module) {\r\n\r\nexports.isDark = true;\r\nexports.cssClass = \"ace-wildcherry\";\r\nexports.cssText = require(\"../requirejs/text!./wildcherry.css\");\r\n\r\nvar dom = require(\"../lib/dom\");\r\ndom.importCssString(exports.cssText, exports.cssClass);\r\n});\r\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "wildcherry_theme", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("wildcherry_theme.bundle");
        
        register(null, {});
    }
});
