/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelMediaEditController {

	constructor($state, $stateParams, ZpArtikelMedia, ZpArtikelMediaTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikelMedia = ZpArtikelMedia;
		this.ZpArtikelMediaTranslation = ZpArtikelMediaTranslation;

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
		this.ZpArtikelMedia.findOne(q, function(res) {
			this.entity = res.toJSON();
			// workaround for the checkbox
			this.entity.publish = (this.entity.publish == 1);
			this.translation = this.entity.translations[0] || {};
		}.bind(this));
	}

	save() {
		this.saveTranslation();
		this.ZpArtikelMedia.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
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
		this.ZpArtikelMediaTranslation.create(this.translation, function(res) {
				console.log(res);
			}.bind(this));
	}

	updateTranslation() {
		this.ZpArtikelMediaTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
				console.log(res);
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.ZpArtikelMedia-list');
	}
}
ZpArtikelMediaEditController.$inject = ['$state', '$stateParams', 'ZpArtikelMedia', 'ZpArtikelMediaTranslation'];
export default ZpArtikelMediaEditController;