    $(document).ready(function() {
        $('.homepagecover').ripples({
            resolution: 212,
            dropRadius: 20,
            perturbance: 0.04,
        });
    });


    // স্ক্রিপ্টটি আপনার মেইন ফাইলের নিচে যোগ করুন

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header_place').innerHTML = data;
    });

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer_placeholder').innerHTML = data;
  });