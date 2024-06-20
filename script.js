document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.buttons button');
        const images = document.querySelectorAll('.image-container img');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = button.getAttribute('data-filter');

                images.forEach(image => {
                    const category = image.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        image.style.display = 'block';
                        image.classList.add('show');
                        image.classList.remove('hide');
                    } else {
                        image.style.display = 'none';
                        image.classList.add('hide');
                        image.classList.remove('show');
                    }
                });
            });
        });
    });