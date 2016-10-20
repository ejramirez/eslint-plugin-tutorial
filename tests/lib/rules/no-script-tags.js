/**
 * @fileoverview ...
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-script-tags"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-script-tags", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "var i = 'Some Text'",
    ],

    invalid: [
        {
            code: "var i = \"<script></script>\"",
            errors: [{
                message: "Script tags detected, please sanitize properly",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = \"<script>alert('some text')</script>\"",
            errors: [{
                message: "Script tags detected, please sanitize properly",
                type: "VariableDeclaration"
            }]
        }
    ]
});
