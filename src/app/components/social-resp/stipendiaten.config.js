/**
 * Created by danieldihardja on 27/09/16.
 */
/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var stipendiaten = $crudProvider.model('SvStipendiaten');

	stipendiaten.listView()
		.title('Stipendiaten')
		.field('title')
		.field('publish')

	stipendiaten.createView()
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('left')
		.field('top')
		.field('introText')


	stipendiaten.editView()
		.title('Stipendiaten')
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('left')
		.field('top')
		.field('introText')

		.translationKey('svStpendiatenId')
		.translationField('title')
		.translationField('slug')
		.translationField('description', 'text')
		.translationField('image', 'file', {container: 'assets'})
		.translationField('introText')

		.hasManyLink('SvStipendiat', 'svStipendiatenId')

}
export default config;