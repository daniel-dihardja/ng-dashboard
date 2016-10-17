/**
 * Created by danieldihardja on 29/09/16.
 */
function config($crudProvider) {


	var inputConfig = {
		blockRegex: new RegExp("[äöüÄÜÖ]", "g")
	};

	var ledContet = $crudProvider.model('LedContent');

	ledContet.listView()
		.backButton(true)
		.title('/ Beiträge')
		.field('title')
		.field('publish');

	ledContet.createView()
		.field('title', null, inputConfig)
		.field('upperLeft', null, inputConfig)
		.field('lowerLeft', null, inputConfig)
		.field('center', null, inputConfig)
		.field('upperRight', null, inputConfig)
		.field('lowerRight', null, inputConfig);

	ledContet.editView()
		.field('publish', 'checkbox')
		.field('title')

		.field('upperLeft', null, inputConfig)
		.field('lowerLeft', null, inputConfig)
		.field('center', null, inputConfig)
		.field('upperRight', null, inputConfig)
		.field('lowerRight', null, inputConfig)
		.field('ledPreview', 'ledpreview', null, inputConfig)
		.translationKey('ledContentId')
		.translationField('title')
		.translationField('upperLeft', null, inputConfig)
		.translationField('lowerLeft', null, inputConfig)
		.translationField('center', null, inputConfig)
		.translationField('upperRight', null, inputConfig)
		.translationField('lowerRight', null, inputConfig)
}
export default config;