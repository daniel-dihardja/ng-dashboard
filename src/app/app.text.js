/**
 * Created by danieldihardja on 18/08/16.
 */
import cmsTxt from './zfcms-text';

function appText($translateProvider) {

	$translateProvider.translations('de', cmsTxt);

	$translateProvider.preferredLanguage('de');
}
appText.$inject = ['$translateProvider'];
export default appText;