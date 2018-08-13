let digitalNewspapers = [];

function addEntry(date, name, digitalLink) {
  digitalNewspapers.push({publishDate: date, publisher: name, digitalNewspaper: digitalLink});
}

function search(nameKey, digitalNewspapers){
	for (let i=0; i < digitalNewspapers.length; i++){
		if (digitalNewspapers[i].publisher === nameKey) {
			return digitalNewspapers[i];
		}
	}
}

addEntry("08/08/2018", "Paul Brower", "https://medium.com/@paulbrower/getting-out-of-debt-and-becoming-a-developer-how-living-in-my-van-gave-me-both-ad3f9e708e6b");
addEntry("08/12/2018", "Sonya Thompson", "null");

search('Paul Brower', digitalNewspapers);

