
        function togglePoints(button) {
            const priceCard = button.parentNode;
            const additionalPoints = priceCard.querySelector('.additional-points');
            const buttonText = button.textContent;

            if (additionalPoints.style.display === 'none' || additionalPoints.style.display === '') {
                additionalPoints.style.display = 'block';
                button.textContent = 'Show less';
            } else {
                additionalPoints.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
   