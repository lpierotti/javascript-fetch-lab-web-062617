function getIssues() {
	fetch(`https://api.github.com/repos/lpierotti/javascript-fetch-lab/issues`, {
		method: 'GET',
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {

	  const src = document.getElementById("issues-template").innerHTML
	  const template = Handlebars.compile(src)
	  const repoList = template(json)

	// const issueList = json.map(issue => `<li> ${issue.title}, ${issue.body} </li>`).join("")
	 document.getElementById('issues').innerHTML = repoList
}

function createIssue() {
	
	const body = {title: document.getElementById('title').value, body: document.getElementById('body').value};

	fetch(`https://api.github.com/repos/lpierotti/javascript-fetch-lab/issues`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => getIssues());
}

function showResults(json) {
	const src = document.getElementById("repo-template").innerHTML
	  const template = Handlebars.compile(src)
	  const repoList = template(json)
	document.getElementById('results').innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'POST',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}






