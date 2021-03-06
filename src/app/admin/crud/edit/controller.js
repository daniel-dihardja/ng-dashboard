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

		this.viewConfig = editView.config();

		this.fields = editView.fields();
		this.translationKey = editView.translationKey();
		this.translationFields = editView.translationFields();
		this.hasManyLinks = editView.hasManyLinks();
		this.useBackButton = editView.useBackButton();

		var title = editView.title() || $stateParams.title || 'Bearbeiten';

		// TODO:
		// refactore this
		if($stateParams.entity) {
			if(title == '#ENTITY_ID#') title = $stateParams.entity.id;
			if(title == '#ENTITY_TITLE#') title = $stateParams.entity.title;
			if(title == '#ENTITY_HEADLINE#') title = $stateParams.entity.headline;
			if(title == '#ENTITY_IMAGE#') title = $stateParams.entity.image;
		}
		else {
			title = 'Title';
		}


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
				this.entity = res.toJSON();
				this.translation = this.entity.translations[0] || {};
			}.bind(this))
	}

	save() {
		this.saveTranslation();
		if(! this.entity.thumb && this.entity.src && ! this.viewConfig.ignoreThumb) {
			this.entity.thumb = 'thumb-' + this.entity.src;
		}
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

		// check if the thumb should automaticly be saved
		if(! this.translation.thumb && this.translation.src && ! this.viewConfig.ignoreThumb) {
			this.translation.thumb = 'thumb-' + this.translation.src;
		}

		this.modelTranslation.create(this.translation, function(res) {
			console.log(res);
		}.bind(this));
	}

	updateTranslation() {
		// check if the thumb should automaticly be saved
		if(! this.translation.thumb && this.translation.src && ! this.viewConfig.ignoreThumb) {
			this.translation.thumb = 'thumb-' + this.translation.src;
		}
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