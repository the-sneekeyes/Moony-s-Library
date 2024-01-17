document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortOptions = document.getElementById("sortOptions");
  const bookList = document.getElementById("bookList");

  function displayBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortOptions.value;

    const books = Array.from(document.querySelectorAll(".featured-book"));

    books.forEach(book => {
      const title = book.getAttribute("data-title").toLowerCase();
      const author = book.getAttribute("data-author").toLowerCase();
      const category = book.getAttribute("data-category").toLowerCase();

      const titleMatches = title.includes(searchTerm);
      const authorMatches = author.includes(searchTerm);
      const categoryMatches = selectedCategory === "all" || category === selectedCategory;

      if (titleMatches && authorMatches && categoryMatches) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });

    // Sort books
    const sortedBooks = books.sort((a, b) => {
      const aValue = a.getAttribute(`data-${sortBy}`).toLowerCase();
      const bValue = b.getAttribute(`data-${sortBy}`).toLowerCase();
      return aValue.localeCompare(bValue);
    });

    bookList.innerHTML = '';
    sortedBooks.forEach(book => {
      bookList.appendChild(book);
    });
  }

  // Event listeners for input changes
  searchInput.addEventListener("input", displayBooks);
  categoryFilter.addEventListener("change", displayBooks);
  sortOptions.addEventListener("change", displayBooks);

  displayBooks(); // Initial book display
});
