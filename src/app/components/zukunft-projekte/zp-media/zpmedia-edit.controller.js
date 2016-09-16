/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpMediaEditController {

	constructor($state, $stateParams, ZpMedia, ZpMediaTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpMedia = ZpMedia;
		this.ZpMediaTranslation = ZpMediaTranslation;

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
		this.ZpMedia.findOne(q, function(res) {
			this.entity = res.toJSON();
			this.translation = this.entity.translations[0] || {};
		}.bind(this));
	}

	save() {
		this.saveTranslation();
		this.ZpMedia.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
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
		this.ZpMediaTranslation.create(this.translation, function(res) {
				console.log(res);
			}.bind(this));
	}

	updateTranslation() {
		this.ZpMediaTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
				console.log(res);
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.ZpMedia-list');
	}
}
ZpMediaEditController.$inject = ['$state', '$stateParams', 'ZpMedia', 'ZpMediaTranslation'];
export default ZpMediaEditController;