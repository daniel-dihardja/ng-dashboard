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
		.backButton(true)
		.field('key')
		.field('value');

	aebText.editView()
		.backButton(true)
		.field('publish')
		.field('key', null, {showOnly: 'admin'})
		.field('value')
		.translationKey('ebTextId')
		.translationField('value')

}
export default config;