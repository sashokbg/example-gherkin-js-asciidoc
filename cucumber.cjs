const {CustomFlavorRegistry} = require("@cucumber/gherkin");
const GherkinInAsciidocTokenMatcher = require("./GherkinInAsciidocTokenMatcher.cjs");

CustomFlavorRegistry.getInstance().registerFlavor('asciidoc', 'adoc', new GherkinInAsciidocTokenMatcher());

module.exports = {
    default: {
        format: ['summary', 'progress-bar', 'html:report.html'],
        paths: ["features/**/*.{feature,feature.adoc}"],
        require: ["features/**/*.cjs"]
    }
}
