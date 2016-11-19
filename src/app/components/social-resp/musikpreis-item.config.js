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
		.field('bio', 'wysiwyg')
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'});

	musikpreisItem.editView()
		.field('publish', 'checkbox')
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bio', 'wysiwyg')
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svMusikpreisPersonId')
		.translationField('bio', 'wysiwyg')
		.translationField('image', 'file', imgOptions)
}
export default config;
