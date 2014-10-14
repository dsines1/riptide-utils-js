/**
 * Created with JetBrains WebStorm.
 * User: jhorlin.dearmas
 * Date: 7/5/13
 * Time: 8:50 AM
 * To change this template use File | Settings | File Templates.
 */

(function(customTags){
    var customElements = ['header','nav','section','article', 'aside','footer','scene','bubble', 'i','elements-video', 'audio','video', 'source', 'tabset', 'tab', 'accordion', 'accordion-group', 'accordion-heading', 'modal']
   // customTags.push.apply(customTags, customElements);
    customElements.forEach(function(element){
        document.createElement(element);
    })

})(('myCustomTags' in this) ? this.myCustomTags : this.myCustomTags = []);



