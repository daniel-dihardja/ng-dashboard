/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebMedia = $cp.model('EbMedia');

	aebMedia.listView()
		.title('/ Medien')
		.field('src')
		.field('publish')
		.backButton(true);


	aebMedia.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('src', 'file', {container: 'aeb'})
		.field('thumb', 'file', {container: 'aeb'})
		.translationKey('ebMediaId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.translationField('src', 'file', {container: 'aeb'})
		.translationField('thumb', 'file', {container: 'aeb'});

	aebMedia.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text');
}
export default config;