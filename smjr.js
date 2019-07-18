/**
 * @desc Make all elements under the defined container, read only
 * @description Remove Manipulation buttons under the defined selectors and exclude exclude the elements under defined selectors
    Disable all the inputs, selects, textarea except the defined selectors to exclude
 * @param containerSelector: This is the selector of main container to define the scope in which all elements will be read only
 * @param selectors: This is the array of selectors to include elements
 * @param notSelector: This is the array of selectors to exclude the elements
 */
function makeContainerReadOnly(containerSelector,selectors,notSelector){
    $(containerSelector).find(selectors.join()).find('a').not(notSelector.join()).remove();
    $(containerSelector).find('input,select,textarea').not(notSelector.join()).prop("disabled","disabled");

    /*var textifyInputs = $(containerSelector).find('input,select,textarea').not(notSelector);
    textifyInputs.each(function () {
        var currentElement = $(this);
        if(!currentElement.is("input[type=hidden]")){
        var container = currentElement.parent();
        if (container.length === 1 && !currentElement.is("input[type=date]") && !currentElement.is("input[type=checkbox]")){
            var currentElementValue = "";
            if(currentElement.is("select")){
                currentElementValue = currentElement.find("option:selected").text();
            } else{
                currentElementValue = currentElement.val();
            }
            container.append(currentElementValue);
            container.parents("table").find("tr,td,th").prop("style", "border: 1px solid black;");
            currentElement.remove();
        } else {
            currentElement.prop("disabled","disabled");
        }}
    });*/
}
