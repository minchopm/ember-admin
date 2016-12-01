import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
	name() {
		return faker.company.companyName();
	},
	status() {
		return 'active'
	},
	email() {
		return faker.internet.email();
	},
	telephone() {
		return faker.phone.phoneNumber();
	},
	faxNumber() {
		return faker.phone.phoneNumber()
	},
	businessCategoryId() {
		return faker.random.uuid()
	},
	creationDate() {
		return faker.date.past()
	}
});
