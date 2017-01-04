/**
 * Created by danieldihardja on 19/09/16.
 */


class ViewConfig {

	constructor(type) {
		this.type = type;
		this._fields = [];
		this._translationFields = [];
		this._translationKey;
		this._hasManyLinks = [];
		this._backButton = false;
		this._title;
		this._config = {};
	}

	config(cfg) {
		if(! cfg) return this._config;
		this._config = cfg;
		return this;
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

	hasManyLink(model, foreignKey, config) {
		this._hasManyLinks.push({
			model: model,
			foreignKey: foreignKey,
			config: config
		});
		return this;
	}

	hasManyLinks() {
		return this._hasManyLinks;
	}

	backButton(b) {
		this._backButton = b;
		return this;
	}

	useBackButton() {
		return this._backButton;
	}

	title(t) {
		if(! t) return this._title;
		this._title = t;
		return this;
	}
}


class Model {

	constructor(name) {
		this.name = name;
		this._listView = null;
		this._editView = null;
		this._createView = null;
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

	model(name) {
		if(this.models[name]) return this.models[name];
		var model = new Model(name);
		this.models[name] = model;
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