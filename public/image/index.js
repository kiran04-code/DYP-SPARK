document.getElementById('searchBar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const sportCards = document.querySelectorAll('.sport-card');
    
    sportCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});