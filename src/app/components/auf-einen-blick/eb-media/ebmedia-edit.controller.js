/**
 * Created by danieldihardja on 08/09/16.
 */
class EbMediaEditController {

	constructor($state, $stateParams, EbMedia, EbMediaTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.EbMedia = EbMedia;
		this.EbMediaTranslation = EbMediaTranslation;

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
		this.EbMedia.findOne(q, function(res) {
			this.entity = res.toJSON();
			// workaround for the checkbox
			this.entity.publish = (this.entity.publish == 1);
			this.translation = this.entity.translations[0] || {};
		}.bind(this));
	}

	save() {
		this.saveTranslation();
		this.EbMedia.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
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
		this.EbMediaTranslation.create(this.translation, function(res) {
				console.log(res);
			}.bind(this));
	}

	updateTranslation() {
		this.EbMediaTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
				console.log(res);
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.EbMedia-list');
	}
}
EbMediaEditController.$inject = ['$state', '$stateParams', 'EbMedia', 'EbMediaTranslation'];
export default EbMediaEditController;