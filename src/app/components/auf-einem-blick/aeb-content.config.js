/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebContent = $cp.model('EbContent');

	aebContent.listView()
		.title('Beiträge einer Kategorie')
		.field('title')
		.field('publish')
		.backButton(true);


	aebContent.editView()
		.title('Beitrag Bearbeiten')
		.field('publish', 'checkbox')
		.field('nameId')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.translationKey('ebContentId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.hasManyLink('EbMedia', 'ebContentId', {label: '...'});


	aebContent.createView()
		.title('Beitrag Erstellen')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text');
}
export default config;