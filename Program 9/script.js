const fetchUserBtn = document.getElementById('fetchUserBtn');
const userInfo = document.getElementById('userInfo');

const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const email = user.email;
            const picture = user.picture.large;

            userInfo.innerHTML = `
                <img src="${picture}" alt="User Picture">
                <h2>${fullName}</h2>
                <p>Email: ${email}</p>
            `;
        })
        .catch(error => {
            userInfo.innerHTML = `<p style="color:red;">Error fetching user data. Try again.</p>`;
            console.error('Error:', error);
        });
};

fetchUserBtn.addEventListener('click', fetchRandomUser);
