document.addEventListener("DOMContentLoaded", function() {
    const listName = "YourListName"; // Replace with your list name
    const siteUrl = "https://yourtenant.sharepoint.com/sites/yoursite"; // Replace with your site URL

    fetch(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=StartDate`, {
        headers: {
            'Accept': 'application/json;odata=nometadata'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.value.length > 0) {
            const startDate = new Date(data.value[0].StartDate);
            const today = new Date();
            const diffTime = Math.abs(startDate - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            document.getElementById('countdown').innerText = diffDays + ' days remaining';
        } else {
            document.getElementById('countdown').innerText = 'Start date not set';
        }
    })
    .catch(error => console.error('Error:', error));
});
