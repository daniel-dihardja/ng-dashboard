/**
 * Created by danieldihardja on 03/09/16.
 */

class PImageCreate {

	constructor($state, $stateParams, SvHilfsprojektItem, SvHilfsprojektItemImage) {

		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvHilfsprojektItemImage = SvHilfsprojektItemImage;
		this.SvHilfsprojektItem = SvHilfsprojektItem;

		this.type = $stateParams.type;
		this.form = {};
	}

	save() {

		console.log('save');
		var _this = this;

		var params = {
			zfHilfsprojektId: this.$stateParams.zfHilfsprojektId
		};

		this.SvHilfsprojektItem.create(params, function(res) {

			var p = {
				svHilfsprojektItemId: res.id,
				dateString: _this.form.dateString,
				info: _this.form.info,
				image: _this.form.image,
				type: 'image'
			};

			_this.SvHilfsprojektItemImage.create(p, function(res) {
				console.log('created ...', res);
				_this.goBack();
			});
		});
	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}

PImageCreate.$inject = ['$state', '$stateParams', 'SvHilfsprojektItem', 'SvHilfsprojektItemImage'];
export default PImageCreate;