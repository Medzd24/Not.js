
    document.addEventListener('DOMContentLoaded', function () {
        if (window.location === window.parent.location) {
            let alert = document.querySelector('#custom-alert');
            let colors = ['#DC2626', '#0077B6', '#00A7E1'];
            let colorIndex = 0;
            setInterval(() => {
                alert.style.background = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 2000);

            // Replace YOUR_API_KEY and YOUR_BLOGGER_ID with actual values
            const apiKey = 'AIzaSyCciRkKAcwlJJQ9v89lrJHQKnr7R8PpYeQ';
            const bloggerId = '8781535279728903487';

            // Construct the API endpoint URL
            const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${bloggerId}/posts?maxResults=1&key=${apiKey}`;

            // Fetch the latest post from Blogger after 14 seconds
            setTimeout(() => {
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const latestPostLink = data.items[0].url;
                        const blogLink = document.getElementById('blog-link');
                        blogLink.href = latestPostLink;
                        alert.style.display = 'block';
                    })
                    .catch(error => console.error('Error fetching Blogger API:', error));
            }, 14000);
        }
    });
