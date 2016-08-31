/**
 * Created by danieldihardja on 23/08/16.
 */

class ZFHilftService {

	/**
	 *
	 * @param SvZfhilft
	 * @param $q
	 */
	constructor(SvZfhilft, SvZfhilftTranslation, $q) {

		this.SvZfhilft = SvZfhilft;
		this.SvZfhilftTranslation = SvZfhilftTranslation;

		this.$q = $q;
		this.instance = null;
	}

	/**
	 * get ZF Hilft data from the zf_hilft & relations
	 * @returns {*}
	 */
	getInstance() {

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

	
	save() {
		var defer = this.$q.defer();
		return defer.promise;
	}

	/**
	 *	Save ZF Hilft content
	 * @param form
	 * @returns {*}
	 */
	saveDefault(form) {

		var defer = this.$q.defer();

		var entity = {
			id: form.id
		};

		var updates = {
			title: form.title,
			slug: form.slug,
			description: form.description,
			image: form.image,
			component: form.component,
			introText: form.introText,
		};

		this.SvZfhilft.prototype$updateAttributes(entity, updates, function() {
			defer.resolve();
		},
		function(err) {
			defer.reject(err)
		});

		return defer.promise;
	}


	/**
	 * save ZfHilft Translations
	 * @param form
	 */
	saveTranslation(form) {
		var defer = this.$q.defer();

		var translation = form.translations[0];
		var ent = {id: translation.id};
		var updates = {
			title: translation.title,
			description: translation.description,
			introText: translation.introText
		};

		this.SvZfhilftTranslation.prototype$updateAttributes(ent, updates, function() {
			defer.resolve();
		},
		function(err) {
			defer.reject(err);
		});

		return defer.promise;
	}
}

ZFHilftService.$inject = ['SvZfhilft', 'SvZfhilftTranslation', '$q'];
export default ZFHilftService;