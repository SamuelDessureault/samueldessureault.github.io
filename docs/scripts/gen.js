document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    navbar.innerHTML = ` \
    <ul> \
        <li><a href="index.html">Home</a></li> \
        <li><a href="repository.html">Repository</a></li> \
    </ul>`

    footer.innerHTML = ` \
    <div id="contacts"> \
        <h3>Contacts</h3> \
        <ul> \
            <li><a href="mailto:samueldessureault15@gmail.com">Email</a></li> \
            <li><a href="https://www.facebook.com/profile.php?id=100009272918136">Facebook</a></li> \
        </ul> \
    </div> \
    <h6>&copy Samuel Dessureault, 2022 <br/>
        Published on GitHub</h6>`
})
