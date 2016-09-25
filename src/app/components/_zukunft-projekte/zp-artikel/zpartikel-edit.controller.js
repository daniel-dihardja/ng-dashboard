/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelEditController {

	constructor($state, $stateParams, ZpArtikel, ZpArtikelTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikel = ZpArtikel;
		this.ZpArtikelTranslation = ZpArtikelTranslation;

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
		this.ZpArtikel.findOne(q, function(res) {
			this.entity = res.toJSON();
			// workaround for the checkbox
			this.entity.publish = (this.entity.publish == 1);
			this.translation = this.entity.translations[0] || {};
		}.bind(this));
	}

	save() {
		this.saveTranslation();
		this.ZpArtikel.prototype$updateAttributes({id: this.entity.id}, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	saveTranslation() {
		if(! this.translation.id) this.createTranslation();
		else this.updateTranslation();
	}

	createTranslation() {
		this.translation.zpArtikelId = this.entity.id;
		this.translation.appLanguageId = 1; //  hardcode id for EN
		this.ZpArtikelTranslation.create(this.translation, function(res) {
				console.log(res);
			}.bind(this));
	}

	updateTranslation() {
		this.ZpArtikelTranslation.prototype$updateAttributes({id: this.translation.id}, this.translation, function(res) {
				console.log(res);
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.ZpArtikel-list');
	}
}
ZpArtikelEditController.$inject = ['$state', '$stateParams', 'ZpArtikel', 'ZpArtikelTranslation'];
export default ZpArtikelEditController;