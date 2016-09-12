/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemImageCreateController {

	constructor($state, $stateParams, ZpArtikelItem, ZpItemImage) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikelItem = ZpArtikelItem;
		this.ZpItemImage = ZpItemImage;
		this.entity = {};
	}

	save() {
		this.ZpArtikelItem.create({zpArtikelId: this.$stateParams.articleId}, function(res) {
			this.entity.zpItemId = res.id;
			this.entity.type = 'image';
			this.ZpItemImage.create(this.entity, function(res) {
				console.log('new entity created');
				this.goBack();
			}.bind(this));
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-edit-article', this.$stateParams);
	}
}

ZpItemImageCreateController.$inject = ['$state', '$stateParams', 'ZpArtikelItem', 'ZpItemImage'];
export default ZpItemImageCreateController;