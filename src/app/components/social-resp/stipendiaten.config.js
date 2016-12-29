/**
 * Created by danieldihardja on 27/09/16.
 */
/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		maxWidth: settings.imgMaxWidth,
		maxHeight: settings.imgMaxHeight
	};

	var stipendiaten = $crudProvider.model('SvStipendiaten');

	stipendiaten.listView()
		.title('Stipendiaten')
		.field('title')
		.field('publish')

	stipendiaten.createView()
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text', {showOnly: 'admin'})
		.field('image', 'file', imgOptions)
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('introText')


	stipendiaten.editView()
		.title('Stipendiaten')
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text', {showOnly: 'admin'})
		.field('image', 'file', imgOptions)
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('introText')

		.translationKey('svStpendiatenId')
		.translationField('title')
		.translationField('description', 'text', {showOnly: 'admin'})
		.translationField('image', 'file', imgOptions)
		.translationField('introText')

		.hasManyLink('SvStipendiat', 'svStipendiatenId', {label: 'Zu den Stipendiaten'})

}
export default config;