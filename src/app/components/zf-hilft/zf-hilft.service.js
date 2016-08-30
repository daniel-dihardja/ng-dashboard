/**
 * Created by danieldihardja on 23/08/16.
 */

class ZFHilftService {

	/**
	 *
	 * @param SvZfhilft
	 * @param $q
	 */
	constructor(SvZfhilft, $q) {
		this.SvZfhilft = SvZfhilft;
		this.$q = $q;
		this.instance = null;
	}

	/**
	 * get ZF Hilft data from the zf_hilft & relations
	 * @returns {*}
	 */
	getData() {

		var defer = this.$q.defer();
		var q = {
			filter: {
				include: [
					{relation: 'translations'},
					{relation: 'images'},
					{relation: 'projects', scope: {
						include: {relation: 'items', scope: {
							include: ['texts', 'images', 'videos']
						}}
					}}
				]
			}
		};

		var _this = this;
		this.SvZfhilft.findOne(q, function(res) {
			var items = res.projects[0].items;
			var newItems = [];
			for(var i=0; i<items.length; i++) {
				var item = items[i];
				var tmp;
				if(item.texts.length > 0) tmp = item.texts[0];
				if(item.images.length > 0) tmp = item.images[0];
				if(item.videos.length > 0) tmp = item.videos[0];

				newItems.push(tmp);

			}
			res.projects[0].items = newItems;

			_this.instance = res;
			defer.resolve(res.toJSON());
		});
		return defer.promise;
	}

	/**
	 *
	 * @param form
	 * @returns {*}
	 */
	saveDefault(form) {

		var defer = this.$q.defer();

		this.instance.title = form.title;
		this.instance.slug = form.slug;
		this.instance.description = form.description;
		this.instance.image = form.image;
		this.instance.component = form.component;
		this.instance.introText = form.introText;

		this.instance.$save(function() {
			defer.resolve();
		});

		return defer.promise;
	}
}

ZFHilftService.$inject = ['SvZfhilft', '$q'];
export default ZFHilftService;