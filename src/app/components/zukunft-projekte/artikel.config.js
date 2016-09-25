/**
 * Created by danieldihardja on 25/09/16.
 */
function config($crudProvider) {

	var zpArtikel = $crudProvider.model('ZpArtikel');
	zpArtikel.listView()
		.field('headline')
		.field('publish');

	zpArtikel.editView()
		.field('publish', 'checkbox')
		.field('headline')
		.field('teaserText', 'text')
		.field('mainText', 'text')

		.translationKey('zpArtikelId')

		.translationField('headline')
		.translationField('teaserText', 'text')
		.translationField('mainText', 'text')

		.hasManyLink('ZpArtikelMedia', 'zpArtikelId');

	zpArtikel.createView()
		.field('headline')
		.field('teaserText', 'text')
		.field('mainText', 'text');

}
export default config;