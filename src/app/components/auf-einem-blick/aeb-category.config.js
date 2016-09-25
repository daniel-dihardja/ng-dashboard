/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebCat = $cp.model('EbCategory');

	aebCat.listView()
		.title('Kategorien')
		.field('title')
		.field('publish')


	aebCat.editView()
		.title('Kategorie Bearbeiten')
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.translationKey('ebCategoryId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.hasManyLink('EbContent', 'ebCategoryId')


	aebCat.createView()
		.title('Kategorie Erstellen')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
}
export default config;