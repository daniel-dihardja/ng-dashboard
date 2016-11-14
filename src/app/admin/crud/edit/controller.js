/**
 * Created by danieldihardja on 19/09/16.
 */
class EditController {

	constructor($rootScope, $scope, $state, $stateParams, $injector, $crud, $stateHistory, $filter) {

		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$stateHistory = $stateHistory;
		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$filter = $filter;

		this.$scope.entity = {};
		this.translation = {};
		this.model = $injector.get($stateParams.model);
		this.modelTranslation = $injector.get($stateParams.model + 'Translation');

		var editView = $crud.model($stateParams.model).editView();
		this.fields = editView.fields();
		this.translationKey = editView.translationKey();
		this.translationFields = editView.translationFields();
		this.hasManyLinks = editView.hasManyLinks();

		var title = editView.title() || $stateParams.title || 'Bearbeiten';

		// TODO:
		// refactore this
		if(title == '#ENTITY_ID#') title = $stateParams.entity.id;
		if(title == '#ENTITY_TITLE#') title = $stateParams.entity.title;
		if(title == '#ENTITY_HEADLINE#') title = $stateParams.entity.headline;

		if($stateParams.prevTitle) {
			title = $stateParams.prevTitle + ' / ' + title;
		}

		this.title = title;
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
				this.translation = this.entity.translations[0] || {};
			}.bind(this))
	}

	save() {
		this.saveTranslation();
		//if(this.entity.src && this.entity.type == 'image') this.entity.thumb = 'thumb-' + this.entity.src;
		this.model.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
			this.$rootScope.$emit('toast', this.$filter('translate')('SAVE_SUCCESS'))
		}.bind(this))
	}

	saveTranslation() {
		if(! this.translation.id) this.createTranslation();
		else this.updateTranslation();
	}

	createTranslation() {
		this.translation[this.translationKey] = this.entity.id;
		this.translation.appLanguageId = 1; //  hardcode id for EN
		this.modelTranslation.create(this.translation, function(res) {
			console.log(res);
		}.bind(this));
	}

	updateTranslation() {
		this.modelTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
			console.log(res);
		}.bind(this))
	}

	gotoHasManyRelation(link) {
		this.$state.go('admin.crud-list', {
			model: link.model,
			filter: (link.foreignKey + '=' + this.entity.id),
			prevTitle: this.title
		});
	}

	back() {
		this.$stateHistory.back();
	}
}
EditController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', '$injector', '$crud', '$stateHistory', '$filter'];
export default EditController;