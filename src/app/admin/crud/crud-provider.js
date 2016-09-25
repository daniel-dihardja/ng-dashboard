/**
 * Created by danieldihardja on 19/09/16.
 */


class ViewConfig {

	constructor(type) {
		this.type = type;
		this._fields = [];
		this._translationFields = [];
		this._translationKey;
		this.lbList = [];
	}

	fields(fields) {
		if(! fields) return this._fields;
		this._fields = fields;
		return this;
	}

	translationFields(fields) {
		if(! fields) return this._translationFields;
		this._translationFields = fields;
		return this;
	}

	translationKey(key) {
		if(! key) return this._translationKey;
		this._translationKey = key;
		return this;
	}

	field(name, type, config) {
		this._fields.push({
			name: name,
			type: type,
			config: config
		});
		return this;
	}

	translationField(name, type, config) {
		this._translationFields.push({
			name: name,
			type: type,
			config: config
		});
		return this;
	}

	lbList(label, model, filter) {
		this.lbList.push({
			label: label,
			model: model,
			filter: filter
		});
	}
}


class Model {

	constructor(entity) {
		this.entity = entity;
		this._listView = null;
		this._editView = null;
		this._createView = null
	}

	listView() {
		if(! this._listView) this._listView = new ViewConfig('list');
		return this._listView;
	}

	editView() {
		if(! this._editView) this._editView = new ViewConfig('edit');
		return this._editView;
	}

	createView() {
		if(! this._createView) this._createView = new ViewConfig('create');
		return this._createView;
	}
}


class CrudProvider {

	constructor() {
		this.baseUrl = null;
		this.models = {};
	}

	setUrlBase(url) {
		this.baseUrl = url;
	}

	model(entity) {
		if(this.models[entity]) return this.models[entity];
		var model = new Model(entity);
		this.models[entity] = model;
		return model;
	}

	$get() {
		return {
			model: this.model.bind(this)
		}
	}
}

CrudProvider.$inject = [];
export default CrudProvider;