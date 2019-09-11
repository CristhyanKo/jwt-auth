const Mail = require("../services/Mail");

class PuchaseMail {
	get key() {
		return "PurchaseMail";
	}

	async handle(job, done) {
		const { ad, user, content } = job.data;

		await Mail.sendMail({
			from: "'Marketplace <marketplace.dev@mkpdev.com.br>'",
			to: ad.author.email,
			subject: `Solicitação de compra: ${ad.title}`,
			template: "purchase",
			context: { user, content, ad }
		});

		return done();
	}
}

module.exports = new PuchaseMail();
