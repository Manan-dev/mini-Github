const url = 'https://api.github.com/users/';
const input = document.getElementById('text');
const searchBtn = document.getElementById('search');
const name = document.getElementById('name');
const imag = document.getElementById('image');
const bio = document.getElementById('bio');
const join_date = document.getElementById('join_date');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const Location = document.getElementById('location');
const link = document.getElementById('link');
const company = document.getElementById('company');

const getUser = async (user) => {
	try {
		let data = await fetch(url + user);
		let res = await data.json();
		image.src = res.avatar_url;
		name.innerText = res.name;
		bio.innerText = res.bio;
		let [year, month, date] = res.created_at.split('-');
		date = res.created_at.substring(8, 10);
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		month = months[month - 1];
		join_date.innerText = `Joined ${date} ${month} ${year}`;
		bio.innerText = res.bio;
		repos.innerText = `Repos:  ${res.public_repos}`;
		followers.innerText = `Followers:  ${res.followers}`;
		following.innerText = `Following: ${res.following}`;
		Location.innerText = `Location: ${res.location}`;
		link.innerText = res.blog;
		link.href = res.blog;
		company.innerText = `Company: ${res.company}`;
	} catch (error) {
		console.log(error.message);
	}
};

// getUser('manan-dev');

searchBtn.addEventListener('click', (event) => {
	getUser(input.value);
	// getUser('manan-dev');
	// getUser('jaredthecoder');
	// getUser('florinpop17');
});
