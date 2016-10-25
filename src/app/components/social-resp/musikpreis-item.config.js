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
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bio', 'text')
		.field('slug')
		.field('component');

	musikpreisItem.editView()
		.field('publish', 'checkbox')
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bio', 'text')
		.field('slug')
		.field('component')

		.translationKey('svMusikpreisPersonId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('introText', 'text')
		.translationField('image', 'file', imgOptions);
}
export default config;
