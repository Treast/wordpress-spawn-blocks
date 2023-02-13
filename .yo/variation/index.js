const Generator = require("yeoman-generator");

class VariationGenerator extends Generator {
	async prompting() {
		this.answers = await this.prompt([
			{
				type: "input",
				name: "originalBlock",
				message: "Original block",
			},
			{
				type: "input",
				name: "block",
				message: "Block name",
			},
			{
				type: "input",
				name: "title",
				message: "Title",
			},
		]);
	}

	writing() {
		const originalBlock = this.answers.originalBlock;
		const blockName = this.answers.block;
		const title = this.answers.title;

		this.fs.copyTpl(
			this.templatePath(`index.js.tpl`),
			this.destinationPath(`src/variations/block-${blockName}/index.js`),
			{
				originalBlock,
				blockName,
				title,
			}
		);
	}
}

module.exports = VariationGenerator;
