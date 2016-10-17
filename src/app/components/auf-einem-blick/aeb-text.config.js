/**
 * Created by danieldihardja on 25/09/16.
 */
function config($cp) {
	var aebText = $cp.model('EbText');

	aebText.listView()
		.title('/ Texte')
		.field('publish')
		.field('key')
		.field('value');


	aebText.createView()
		.field('key')
		.field('value');

	aebText.editView()
		.field('publish')
		.field('key')
		.field('value')
		.translationKey('ebTextId')
		.translationField('value')

}
export default config;