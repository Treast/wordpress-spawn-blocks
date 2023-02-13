const Generator = require("yeoman-generator");

class BlockGenerator extends Generator {
	async prompting() {
		this.answers = await this.prompt([
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
		const files = [
			"block.json",
			"edit.jsx",
			"editor.scss",
			"index.jsx",
			"save.jsx",
			"style.scss",
		];
		const blockName = this.answers.block;
		const title = this.answers.title;

		files.map((file) => {
			this.fs.copyTpl(
				this.templatePath(`${file}.tpl`),
				this.destinationPath(`src/blocks/block-${blockName}/${file}`),
				{
					blockName,
					title,
				}
			);
		});
	}
}

module.exports = BlockGenerator;
