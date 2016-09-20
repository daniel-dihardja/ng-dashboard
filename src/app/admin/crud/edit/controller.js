/**
 * Created by danieldihardja on 19/09/16.
 */
class EditController {

	constructor($state, $stateParams, $injector, $crud, $window) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$window = $window;

		this.entity = {};
		this.translation = {};
		this.model = $injector.get($stateParams.model);
		this.modelTranslation = $injector.get($stateParams.model + 'Translation');
		this.translationKey = $stateParams.translationKey;

		this.fields = $crud.model($stateParams.model).editView().fields();
		this.translationFields = $crud.model($stateParams.model).editView().translationFields();

		this.init();
	}

	init() {
		var q = {
			filter: {
				where: {id: this.$stateParams.id},
				include: 'translations'
			}
		};
		this.model.findOne(q).$promise
			.then(function(res) {
				this.entity = res;
				this.entity.publish = (this.entity.publish == 1);
				this.translation = this.entity.translations[0] || {};
			}.bind(this))
	}

	saveTranslation() {
		if(! this.translation.id) this.createTranslation();
		else this.updateTranslation();
	}

	createTranslation() {
		this.translation.zpArtikelId = this.entity.id;
		this.translation.appLanguageId = 1; //  hardcode id for EN
		this.modelTranslation.create(this.translation, function(res) {
			console.log(res);
		}.bind(this));
	}

	updateTranslation() {
		this.ZpArtikelTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
			console.log(res);
		}.bind(this))
	}

	back() {
		this.$window.history.back();
	}
}
EditController.$inject = ['$state', '$stateParams', '$injector', '$crud', '$window'];
export default EditController;