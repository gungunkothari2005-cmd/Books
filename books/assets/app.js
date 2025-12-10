  // Smooth scroll to Featured Authors when 'Authors' is clicked
  const authorsLink = document.querySelector('nav a[href="#authors"]');
  const authorsSection = document.getElementById('authors');
  if (authorsLink && authorsSection) {
    authorsLink.addEventListener('click', function(e) {
      e.preventDefault();
      authorsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
// Literary Haven Bookstore JS
// Placeholder data for categories, authors, books, blog, etc.

const categories = [
  { name: 'Best-Selling Books', img: 'IMAGES/A LITTLE LIFE.jpg' },
  { name: 'Best-Selling Authors', img: 'new images/emily henry.jpg' },
  { name: 'Top Fiction', img: 'IMAGES/CRIME NAD PUNISHMENT.jpg' },
  { name: 'Top Non-Fiction', img: 'new images/no longer human.jpg' },
  { name: 'New Arrivals', img: 'IMAGES/FRANKIEL STEIN.jpg' },
  { name: 'Award-Winning Novels', img: 'IMAGES/LITTLE WOMEN.jpg' },
  { name: 'Books Adapted Into Movies', img: 'new images/the handmaiden\'s tale.jpg' },
  { name: 'Must-Reads of the Year', img: 'IMAGES/SONG OF ACHILLIES.jpg' },
  { name: 'Young Adult', img: 'IMAGES/THE CHARM OFFENSIVE.jpg' },
  { name: 'Romance', img: 'new images/emily henry.jpg' },
  { name: 'Thriller', img: 'IMAGES/BOOK LOVERS.jpg' },
  { name: 'Fantasy', img: 'IMAGES/CRIME NAD PUNISHMENT.jpg' },
  { name: 'Manga', img: 'new images/manga.jpg' },
];

function renderCategories() {
  const grid = document.querySelector('.category-grid');
  grid.innerHTML = categories.map(cat => `
    <div class="category-card" tabindex="0">
      <img src="${cat.img}" alt="${cat.name}" />
      <h3>${cat.name}</h3>
      <button class="browse-btn">Browse</button>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  // ...more render functions for authors, books, etc. will be added

  // Smooth scroll to Book Categories when 'Categories' is clicked
  const categoriesLink = document.querySelector('nav a[href="#categories"]');
  const categoriesSection = document.getElementById('categories');
  if (categoriesLink && categoriesSection) {
    categoriesLink.addEventListener('click', function(e) {
      e.preventDefault();
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
