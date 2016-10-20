/**
 * @fileoverview ...
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-unsanitized-string-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-unsanitized-string-literal", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "var i = strip_tags('Some Text','')"
    ],

    invalid: [
        {
            code: "var i = \"<script></script>\";",
            errors: [{
                message: "unsanitized variable detected",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = 'Some Text'",
            errors: [{
                message: "unsanitized variable detected",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = alert('alarming')",
            errors: [{
                message: "unsanitized variable detected",
                type: "VariableDeclaration"
            }]
        }
    ]
});
