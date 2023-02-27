const {GherkinInMarkdownTokenMatcher} = require("@cucumber/gherkin");

class GherkinInAsciidocTokenMatcher extends GherkinInMarkdownTokenMatcher {
    constructor(defaultDialectName = 'en') {
        const asciidocPrefixes = {
            BULLET: '^(\\s*[*\\.-]\\s*)',
            HEADER: '^(={1,6}\\s)',
        }
        super(defaultDialectName, asciidocPrefixes);
    }

}

module.exports = GherkinInAsciidocTokenMatcher;