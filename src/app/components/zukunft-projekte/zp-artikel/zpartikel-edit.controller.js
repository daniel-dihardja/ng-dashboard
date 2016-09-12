/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelEditController {

	constructor($state, $stateParams, $mdDialog, ZpArtikel, ZpArtikelItem, ZpItemImage) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;


		this.ZpArtikel = ZpArtikel;
		this.ZpArtikelItem = ZpArtikelItem;
		this.ZpItemImage = ZpItemImage;


		this.entity = $stateParams.entity;
		this.init();

	}

	init() {

		var q = {
			filter: {
				where: {id: this.$stateParams.articleId},
				include: {relation: 'items', scope: {include: ['images', 'videos']}}
			}
		};

		this.ZpArtikel.find(q, function(res) {
			res = res[0].toJSON();

			var newItems = [];
			for(var i=0; i<res.items.length; i++) {
				var item = res.items[i];
				if(item.images.length > 0) newItems.push(item.images[0]);
				else if(item.videos.length > 0) newItems.push(item.videos[0]);
			}
			res.items = newItems;
			this.entity = res;

		}.bind(this));
	}

	createItem(type) {
		var params = {
			stationId: this.$stateParams.stationId,
			articleId: this.$stateParams.articleId
		};
		console.log('type', type);
		if(type == 'image') this.$state.go('admin.zukunft-projekte-create-image', params);
	}

	editItem(entity) {
		var params = {
			stationId: this.$stateParams.stationId,
			articleId: this.$stateParams.articleId,
			imageId: entity.id,
			entity: entity
		};
		if(entity.type == 'image') this.$state.go('admin.zukunft-projekte-edit-image', params);
	}

	deleteItem(entity, ev) {
		if(entity.type == 'image') this.deleteImage(entity, ev);
	}

	deleteImage(entity, ev) {
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
			this.ZpItemImage.deleteById({id: entity.id}, function() {
				this.ZpArtikelItem.deleteById({id: entity.zpItemId}, function() {
					this.init();
				}.bind(this))
			}.bind(this))
		}.bind(this),
		function() {
			// cancel ...  do nothingh yet
		});
	}

	confirmDialog(text, ev) {
		text = text || '';
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(text)
			.ariaLabel('Löschen')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');
		return confirm;
	}

	save() {
		var target = {id: this.entity.id};
		this.ZpArtikel.prototype$updateAttributes(target, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-station', {stationId: this.stationId});
	}
}
ZpArtikelEditController.$inject = ['$state', '$stateParams', '$mdDialog', 'ZpArtikel', 'ZpArtikelItem', 'ZpItemImage'];
export default ZpArtikelEditController;