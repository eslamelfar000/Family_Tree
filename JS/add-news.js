document.addEventListener('DOMContentLoaded', () => {
    const imgInput = document.querySelector('.in-img');
    const imgElement = document.querySelector('.uploaded-img');

    imgInput.addEventListener('change', (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onload = (e) => {
            const imageSrc = e.target.result;
            imgElement.src = imageSrc;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            imgElement.src = '../Imgs/emptyImg.png';
        }
    });
});
