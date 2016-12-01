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

	var stipendiat = $crudProvider.model('SvStipendiat');

	stipendiat.listView()
		.backButton(true)
		.title('/ Personen')
		.field('name')
		.field('year')
		.field('publish');


	stipendiat.createView()
		.backButton(true)
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bio', 'text')


	stipendiat.editView()
		.backButton(true)
		.field('publish', 'checkbox')
		.field('name')
		.field('year')
		.field('image', 'file', imgOptions)
		.field('bio', 'text')
		.field('component', null, {showOnly: 'admin'})
		.translationKey('svStipendiatId')
		.translationField('year')
		.translationField('image', 'file', imgOptions)
		.translationField('bio', 'wysiwyg')
}
export default config;