const url = 'https://api.github.com/users/';
const searchBtn = document.getElementById('search');
const input = document.getElementById('text');

const getUser = async user => {
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
	let timeString = String(time.created_at);
	let [year, month, date] = timeString.split('-');
	date = timeString.substring(8, 10);
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
const changeCard = user => {
	let time = changeTimeFormat(user).join(' ');
	const card = `
	<div class="card">
		<div>
			<img class="image" src=${user.avatar_url} alt=${user.name} />
		</div>
		<div class="main">
			<h2>${user.name}</h2>
			<h5 class="join_date">Joined ${time}</h5>
			<p>${user.bio}</p>
			<ul class="info">
				<li>Repos </br>${user.public_repos}</li>
				<li>Followers </br>${user.followers}</li>
				<li>Following </br>${user.following}</li>
			</ul>
			<ul class="contact_details">
				<li>Location: ${user.location}</li>
				<a href="${user.blog}" target="_blank">${user.blog}</a>
				<li>Company: ${user.company}</li>
			</ul>
		</div>
	</div>
	`;
	main.innerHTML = card;
	input.value = '';
};

searchBtn.addEventListener('click', () => {
	getUser(input.value);
	changeCard(input.value);
});
