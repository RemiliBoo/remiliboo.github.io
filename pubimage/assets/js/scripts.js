const imageLoader = document.getElementById('imageLoader');
const imagePreview = document.getElementById('imagePreview');

imageLoader.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imagePreview.src = e.target.result;
    }

    reader.readAsDataURL(file);
});