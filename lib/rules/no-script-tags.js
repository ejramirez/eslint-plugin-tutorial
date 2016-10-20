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
              node.declarations.forEach(function(variableDeclarator){
                  if(variableDeclarator.init.type == "Literal" &&
                    (variableDeclarator.init.value.indexOf("<script>") >= 0) &&
                    (variableDeclarator.init.value.indexOf("</script>") >= 0)){
                      context.report(node, "Script tags detected, please sanitize properly");
                  }
              });
            }

        };
    }
};
module.exports.schema = [];
