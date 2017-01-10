/**
 * Created by danieldihardja on 10/01/17.
 */

function config($crudProvider) {

    var fact = $crudProvider.model('MotorsportFact');

    fact.listView()
        .title('/fakten')
        .backButton(true)
        .field('headline')
        .field('publish');

    fact.editView()
        .backButton(true)
        .title('#ENTITY_HEADLINE#')
        .field('publish', 'checkbox')
        .field('headline')

        .translationKey('motorsportFactId')
        .translationField('headline');

    fact.createView()
        .backButton(true)
        .field('headline');
}