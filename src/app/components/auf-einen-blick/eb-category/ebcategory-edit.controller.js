/**
 * Created by danieldihardja on 08/09/16.
 */
class EbCategoryEditController {

	constructor($state, $stateParams, EbCategory, EbCategoryTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.EbCategory = EbCategory;
		this.EbCategoryTranslation = EbCategoryTranslation;

		this.entity = {};
		this.translation = {};

		this.init();
	}

	init() {
		var q = {
			filter: {
				where: {id: this.$stateParams.id},
				include: ['translations']
			}
		};
		this.EbCategory.findOne(q, function(res) {
			this.entity = res.toJSON();
			// workaround for the checkbox
			this.entity.publish = (this.entity.publish == 1);
			this.translation = this.entity.translations[0] || {};
		}.bind(this));
	}

	save() {
		this.saveTranslation();
		this.EbCategory.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	saveTranslation() {
		if(! this.translation.id) this.createTranslation();
		else this.updateTranslation();
	}

	createTranslation() {
		this.translation.zpMediaId = this.entity.id;
		this.translation.appLanguageId = 1; //  hardcode id for EN
		this.EbCategoryTranslation.create(this.translation, function(res) {
				console.log(res);
			}.bind(this));
	}

	updateTranslation() {
		this.EbCategoryTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
				console.log(res);
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.EbCategory-list');
	}
}
EbCategoryEditController.$inject = ['$state', '$stateParams', 'EbCategory', 'EbCategoryTranslation'];
export default EbCategoryEditController;