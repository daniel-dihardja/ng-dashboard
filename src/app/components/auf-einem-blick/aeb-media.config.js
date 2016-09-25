/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebMedia = $cp.model('EbMedia');

	aebMedia.listView()
		.title('Medien eines Beitrages')
		.field('src')
		.field('publish')
		.backButton(true);


	aebMedia.editView()
		.title('Media Bearbeiten')
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('src')
		.field('thumb')
		.translationKey('ebMediaId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.translationField('src')
		.translationField('thumb');

	aebMedia.createView()
		.title('Media Erstellen')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text');
}
export default config;