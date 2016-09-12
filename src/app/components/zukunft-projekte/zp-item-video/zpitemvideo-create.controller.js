/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemVideoCreateController {

	constructor($state, $stateParams, ZpArtikelItem, ZpItemVideo) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpItemVideo = ZpItemVideo;
		this.ZpArtikelItem = ZpArtikelItem;
		this.entity = {};
	}

	save() {
		this.ZpArtikelItem.create({zpArtikelId: this.$stateParams.articleId}, function(res) {
			this.entity.zpItemId = res.id;
			this.entity.type = 'video';
			this.ZpItemVideo.create(this.entity, function(res) {
				this.goBack();
			}.bind(this));

		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-edit-article', this.$stateParams);
	}
}

ZpItemVideoCreateController.$inject = ['$state', '$stateParams', 'ZpArtikelItem', 'ZpItemVideo'];
export default ZpItemVideoCreateController;