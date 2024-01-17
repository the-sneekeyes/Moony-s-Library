// Function to save the diary entry
function saveEntry() {
    const entryText = document.getElementById('entryText').value;
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const fileName = `diary_${currentDate.replace(/\//g, '-')}_${currentTime.replace(/:/g, '-')}.txt`;

    // Save entry to a text file using server-side scripting (Node.js, PHP, etc.)
    // Example: Use AJAX to send the entryText and fileName to the server

    // For demonstration purposes, simulate the creation of an entry file
    // Replace this with server-side code to actually save the entry to a file
    const entryContent = `Date: ${currentDate} ${currentTime}\n\n${entryText}`;
    simulateFileCreation(fileName, entryContent);

    // Update the entry list in the side menu
    updateEntryList(fileName, currentDate);
}

// Function to simulate file creation (for demonstration)
function simulateFileCreation(fileName, content) {
    // Simulate saving entry content to a file
    console.log(`Saving entry to file '${fileName}':\n${content}`);
}

// Function to update the entry list in the side menu
function updateEntryList(fileName, date) {
    const entryList = document.getElementById('entryList');
    const entryItem = document.createElement('li');
    const entryLink = document.createElement('a');
    entryLink.href = `Res/${fileName}`;
    entryLink.textContent = `Entry - ${date}`;
    entryItem.appendChild(entryLink);
    entryList.appendChild(entryItem);
}
