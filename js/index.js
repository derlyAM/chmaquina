import { File } from "./loadFiles/file";
import { Validation } from "./loadFiles/valitation.js";

const loader = new File(['ch']);
const fileInput = document.querySelector('input[type="file"]');
let fileContent = []
fileInput.addEventListener('change', function() {
const file = fileInput.files[0];
loader.loadFile(file, function(contenido) {
    const validation = new Validation(contenido);
    validation.validComments();
});

});
