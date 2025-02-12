document.addEventListener('DOMContentLoaded', function() {
    // Добавление в корзину
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentNode;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p:nth-of-type(2)').textContent;
            const productImage = product.querySelector('img').src;

            alert(`Товар "${productName}" добавлен в корзину!`);

            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });

    // Лайтбокс для просмотра изображений
    const productImages = document.querySelectorAll('.product img');

    productImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);

            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightbox.appendChild(lightboxImg);

            lightbox.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        });
    });
});
