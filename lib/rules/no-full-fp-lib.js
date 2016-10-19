/**
 * @fileoverview ...
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "...",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            "VariableDeclaration": function(node) {
                node.declarations.forEach(function(variableDeclarator) {
                    if(variableDeclarator.id.name == "_" && variableDeclarator.init.type == "CallExpression" && variableDeclarator.init.callee.name == "require"){
                        context.report(node, "Prefer importing single functions over a full FP library");
                    }
                });
            }
        };
    }
};

module.exports.schema = [];
