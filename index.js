const url = 'https://api.github.com/users/';
const searchBtn = document.getElementById('search');
const input = document.getElementById('text');

const getUser = async (user) => {
	try {
		let data = await fetch(url + user);
		let response = await data.json();
		changeTimeFormat(response);
		changeCard(response);
	} catch (error) {
		console.log(error.message);
	}
};

function changeTimeFormat(time) {
	let [year, month, date] = time.created_at.split('-');
	date = time.created_at.substring(8, 10);
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
	return [date, month, year];
}
const changeCard = (user) => {
	const card = `
	<div class="card">
		<div>
			<img class="image" src=${user.avatar_url} alt=${user.name} />
		</div>
		<div class="main">
			<h2>${user.name}</h2>
			<h5 class="join_date">${changeTimeFormat(user).join(' ')}</h5>
			<p>${user.bio}</p>
			<ul class="info">
				<li>Repos </br>${user.public_repos}</li>
				<li>Followers </br>${user.followers}</li>
				<li>Following </br>${user.following}</li>
			</ul>
			<ul class="contact_details">
				<li>Location: ${user.location}</li>
				<a href="${user.blog}" target="_blank">${user.blog}</a>
				<li>${user.company}</li>
			</ul>
		</div>
	</div>
	`;
	main.innerHTML = card;
};

searchBtn.addEventListener('click', () => {
	getUser(input.value);
	changeCard(input.value);
	// getUser('manan-dev');
	// changeCard('manan-dev');

	// getUser('jaredthecoder');
	// getUser('florinpop17');
});
