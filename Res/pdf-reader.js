document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pdfPath = urlParams.get("pdf");
    const progressKey = `pdfProgress_${pdfPath}`;
  
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.setAttribute("src", `${pdfPath}#page=${getSavedPage(progressKey)}`);
  
    pdfViewer.addEventListener("scroll", function() {
      const currentPage = getCurrentPage(pdfViewer);
      savePage(progressKey, currentPage);
    });
  
    function getSavedPage(key) {
      return localStorage.getItem(key) || "1"; // Default to page 1 if progress not found
    }
  
    function getCurrentPage(viewer) {
      const currentPage = Math.round(viewer.scrollTop / viewer.scrollHeight * viewer.pages);
      return (currentPage < 1) ? 1 : currentPage;
    }
  
    function savePage(key, page) {
      localStorage.setItem(key, page);
    }
  });
  