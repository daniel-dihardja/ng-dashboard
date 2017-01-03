/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../../app/app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		prefWidth: 512,
		prefHeight: 512,
		maxWidth: settings.imgMaxWidth,
		maxHeight: settings.imgMaxHeight
	};

	var musikpreisItem = $crudProvider.model('SvMusikpreisPerson');

	musikpreisItem.listView()
		.backButton(true)
		.title('/ Personen')
		.field('name')
		.field('publish');

	musikpreisItem.createView()
		.backButton(true)
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bioPreview', 'biopreview')
		.field('bio', 'text');


	musikpreisItem.editView()
		.backButton(true)
		.field('publish', 'checkbox')
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bioPreview', 'biopreview')
		.field('bio', 'text')
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svMusikpreisPersonId')
		.translationField('bioPreview', 'biopreview')
		.translationField('bio', 'text')
		.translationField('image', 'file', imgOptions)
}
export default config;
