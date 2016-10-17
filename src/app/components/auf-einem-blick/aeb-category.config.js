/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebCat = $cp.model('EbCategory');

	aebCat.listView()
		.field('title')
		.field('publish')


	aebCat.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.translationKey('ebCategoryId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.hasManyLink('EbContent', 'ebCategoryId', {label: 'Zu den Beiträgen'})
		.hasManyLink('EbMedia', 'ebCategoryId', {label: 'Zu den Medien'});


	aebCat.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
}
export default config;