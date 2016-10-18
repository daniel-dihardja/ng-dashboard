/**
 * Created by danieldihardja on 29/09/16.
 */
function config($crudProvider) {


	var blockRegex = new RegExp("[äöüÄÜÖ]", "g");


	var ledContet = $crudProvider.model('LedContent');

	ledContet.listView()
		.backButton(true)
		.title('/ Beiträge')
		.field('title')
		.field('publish');

	ledContet.createView()
		.field('title', null, {label: 'Title'})
		.field('upperLeft', null, {label: 'Upper Left', blockRegex: blockRegex})
		.field('lowerLeft', null, {label: 'Lower Left', blockRegex: blockRegex})
		.field('center', null, {label: 'Center', blockRegex: blockRegex})
		.field('upperRight', null, {label: 'Upper Right', blockRegex: blockRegex})
		.field('lowerRight', null, {label: 'Lower Right', blockRegex: blockRegex})
		.field('ledPreview', 'ledpreview')

	ledContet.editView()
		.field('publish', 'checkbox')
		.field('title')

		.field('upperLeft', null, {label: 'Upper Left', blockRegex: blockRegex})
		.field('lowerLeft', null, {label: 'Lower Left', blockRegex: blockRegex})
		.field('center', null, {label: 'Center', blockRegex: blockRegex})
		.field('upperRight', null, {label: 'Upper Right', blockRegex: blockRegex})
		.field('lowerRight', null, {label: 'Lower Right', blockRegex: blockRegex})
		.field('ledPreview', 'ledpreview')
		.translationKey('ledContentId')
		.translationField('title')
		.translationField('upperLeft', null, {label: 'Upper Left'})
		.translationField('lowerLeft', null, {label: 'Lower Left', blockRegex: blockRegex})
		.translationField('center', null, {label: 'Center', blockRegex: blockRegex})
		.translationField('upperRight', null, {label: 'Upper Right', blockRegex: blockRegex})
		.translationField('lowerRight', null, {label: 'Lower Right', blockRegex: blockRegex})
}
export default config;