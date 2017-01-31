/**
 * Created by danieldihardja on 31/01/17.
 */
/**
 * Created by danieldihardja on 02/12/16.
 */

import template from './ms-preview.html!text';

class MsPreview {

    constructor($sce) {
        this.$sce = $sce;
        this.restrict = 'E';
        this.template = template;
        this.scope = {
            label: '@',
            entity: '='
        };
    }

    link(scope, element, attrs) {

        // wait a tick. somehow the data is not instantly available
        setTimeout(function() {
            scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
            scope.content = this.$sce.trustAsHtml(scope.entity.content);

        }.bind(this), 1);

        scope.$watch('entity.headline', function(newValue, oldValue) {
            scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
        }.bind(this), true);

        scope.$watch('entity.content', function(newValue, oldValue) {
            scope.content = this.$sce.trustAsHtml(scope.entity.content);
        }.bind(this), true);

    }

    static createInstance($sce) {
        return new MsPreview($sce);
    }
}
MsPreview.createInstance.$inject = ['$sce'];
export default MsPreview.createInstance;