	console.log("starting");
	var mainPage = document.getElementById('page');	
	if (mainPage){
		if (mainPage.classList.contains('bitbucket-theme') && mainPage.classList.contains('scrolling-forwarded')){
			mainPage.style.removeProperty('min-width');
		}
	}