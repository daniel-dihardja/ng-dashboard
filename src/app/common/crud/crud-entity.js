/**
 * Created by danieldihardja on 09/08/16.
 */
class CrudEntity {

	constructor(name) {
		this.relationMap = {};
		this.fieldsList = [];
		console.log('new crud entity', name);
	}

	relation(rel) {
		this.relationMap = rel;
		return this;
	}

	listView() {
		return this;
	}

	creationView() {
		return this;
	}

	editionView() {
		return this;
	}

	deletionView() {
		return this;
	}

	fields(list) {
		this.fieldsList = list;
		return this;
	}

	field(args) {
		this.fieldsList.push({});
		return this;
	}

	create() {

	}

	save() {

	}

	delete() {

	}

	set() {

	}
}

export default CrudEntity;