

class TableTemplate {
    static fillIn(id, dictionary, columnName) {
        var tableElement = document.getElementById(id);
        var i, templateProcessor;
    if (columnName  === undefined) {
        templateProcessor = new Cs142TemplateProcessor(tableElement.innerHTML);
        tableElement.innerHTML = templateProcessor.fillIn(dictionary);
            }
    else {
            var rowElements = tableElement.getElementsByTagName("TR");
            var firstRowElement = rowElements[0];
            templateProcessor = new Cs142TemplateProcessor(firstRowElement.innerHTML);
            firstRowElement.innerHTML = templateProcessor.fillIn(dictionary);
            var column = tableElement.getElementsByTagName("TD");
            var columnSelect;
                for (i=0; i < column.length; i++) {
                    if (column[i].innerHTML === columnName) {
                        columnSelect = i;
                }
            }
                    if (columnSelect >= 0) {
                    for (i=1; i < rowElements.length; i++) {
                            var dataElements = rowElements[i].getElementsByTagName("TD");
                            templateProcessor = new Cs142TemplateProcessor(dataElements[columnSelect].innerHTML);
                        dataElements[columnSelect].innerHTML = templateProcessor.fillIn(dictionary);
            }
        }
    }

    if(tableElement.style.visibility === "hidden") {
        tableElement.style.visibility = "visible";
    }
}
}
