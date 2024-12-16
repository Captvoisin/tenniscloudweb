// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const location = document.getElementById('location').value;
    const skill = document.getElementById('skill').value;
    const availability = document.getElementById('availability').value;

    // Simulate search results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Showing results for:</p>
        <ul>
            <li>Location: ${location}</li>
            <li>Skill Level: ${skill}</li>
            <li>Availability: ${availability}</li>
        </ul>
        <p>No partners found! (This is a placeholder result.)</p>
    `;
});
