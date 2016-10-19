/**
 * @fileoverview ...
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-full-fp-lib"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-full-fp-lib", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var _ = require('your favorite fp library');",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
