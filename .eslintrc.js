module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "plugins": [
        "flowtype",
        "compat"
    ],
    "settings": {
        "polyfills": ["fetch"]
    },
    "rules": {
        "arrow-spacing": ["warn", { "before": true, "after": true }],
        "array-bracket-spacing": ["warn", "never"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "no-param-reassign": 2,
        "keyword-spacing": 1,
        "no-console": 0,//["error", {"allow": ["warn", "error"]}],
        "no-extra-semi": 1,
        "indent": ["warn", 4],
        "block-spacing": 2,
        "array-callback-return": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-empty-function": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 1,
        "space-in-parens": ["warn", "never"],
        "no-redeclare": 2,
        "callback-return": 2,
        "handle-callback-err": 2,
        "no-mixed-requires": 2,
        "no-path-concat": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 2,
        "semi": [2, "always"],
        "no-unexpected-multiline": 2,
        "compat/compat": 2,
        "max-len": 0,
        "prefer-template": 0
    }
};
