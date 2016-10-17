/**
 * Created by danieldihardja on 29/09/16.
 */
function config($crudProvider) {

	var ledContet = $crudProvider.model('LedContent');

	ledContet.listView()
		.backButton(true)
		.title('/ Beiträge')
		.field('title')
		.field('publish');

	ledContet.createView()
		.field('title')
		.field('upperLeft')
		.field('lowerLeft')
		.field('center')
		.field('upperRight')
		.field('lowerRight');

	ledContet.editView()
		.field('publish', 'checkbox')
		.field('title')

		.field('upperLeft')
		.field('lowerLeft')
		.field('center')
		.field('upperRight')
		.field('lowerRight')
		.field('ledPreview', 'ledpreview')
		.translationKey('ledContentId')
		.translationField('title')
		.translationField('upperLeft')
		.translationField('lowerLeft')
		.translationField('center')
		.translationField('upperRight')
		.translationField('lowerRight')
	
}
export default config;