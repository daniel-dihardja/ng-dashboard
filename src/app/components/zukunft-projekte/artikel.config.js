/**
 * Created by danieldihardja on 25/09/16.
 */
function config($crudProvider) {

	var zpArtikel = $crudProvider.model('ZpArtikel');

	zpArtikel.listView()
		.field('headline')
		.field('publish');

	zpArtikel.editView()
		.backButton(true)
		.title('#ENTITY_HEADLINE#')
		.field('publish', 'checkbox')
		.field('headline', null, {label: 'Headline'})
		.field('teaserText', 'text', {label: 'Teaser Text'})
		.field('mainText', 'text', {label: 'Main Text'})
		.translationKey('zpArtikelId')
		.translationField('headline', null, {label: 'Headline'})
		.translationField('teaserText', 'text', {label: 'Teasert Text'})
		.translationField('mainText', 'text', {label: 'Main Text'})

		.hasManyLink('ZpArtikelMedia', 'zpArtikelId', {label: 'Zu den Medien'});

	zpArtikel.createView()
		.backButton(true)
		.field('headline')
		.field('teaserText', 'text')
		.field('mainText', 'text');
}
export default config;