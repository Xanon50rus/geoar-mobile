module.exports = {
    bracketSpacing: true,
    printWidth: 120,
    proseWrap: "preserve",
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    tabWidth: 4,
    useTabs: true,
    parser: "typescript",
    arrowParens: "always",
    endOfLine: "crlf",
    overrides: [
        {
            "files": "*.json",
            "options": {
                "singleQuote": false
            }
        },
        {
            "files": ".*rc",
            "options": {
                "singleQuote": false,
                "parser": "json"
            }
        }
    ]
};
