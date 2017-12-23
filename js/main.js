// Toggle between showing and hiding dropdown menu
function dropDown() {
    document.getElementById("jobDropdown").classList.toggle("show");
}

var button = document.getElementById('industryDropdown');
button.addEventListener('click', dropDown, false);


//Object Contructor
function jobs(image, title, company, salary, industry){
	this.image = image;
	this.title = title;
	this.company = company;
	this.salary = salary;
	this.industry = industry;
};

//New Tech objects
var google = new jobs('img/google.png', 'Software Engineer', 'Google', '$105,000 - $135,000', 'tech');
var thoughtbot = new jobs('img/thoughtbot.png', 'Web Developer', 'Thoughtbot', '$108,000 - $121,000', 'tech');
var compas = new jobs('img/compas.png', 'Front End Web Developer', 'COMPAS', '$66,000 - $99,000', 'tech');
var twitter = new jobs('img/twitter.png', 'Product Data Analyst', 'Twitter', '$97,000 - $112,00', 'tech');
var affirm = new jobs('img/affirm.png', 'Software Engineer', 'Affirm', '$135,00 - $154,000', 'tech');
var craigs = new jobs('img/craigs.png', 'Full Stack Developer', 'Craigslist', '$75,000 - $105,000', 'tech');

// TECH ARRAY
var techy = [google, thoughtbot, compas, twitter, affirm, craigs];


//New Sales objects
var yelp = new jobs('img/yelp.png', 'Associate Sales Representative', 'Yelp', '$38,000 - $45,000', 'sales');
var usbank = new jobs('img/usbank.png', 'Sales Representative', 'US Bank', '$42,000 - $57,000', 'sales');
var instapage = new jobs('img/instapage.png', 'Inside Sales Representative', 'Instapage', '$39,000 - $46,000', 'sales');
var glassdoor = new jobs('img/glassdoor.png', 'Sales Manager', 'Glassdoor', '$45,000 - $61,000', 'sales');
var wework = new jobs('img/wework.png', 'Sales Manager', 'WeWork', '$36,000 - $48,000', 'sales');
var opswat = new jobs('img/opswat.png', 'Sales Development Representative', 'OPSWAT', '$52,000 - $67,000', 'sales');

//SALES ARRAY
var sales = [yelp, usbank, instapage, glassdoor, wework, opswat];

//New Marketing objects
var salesforce = new jobs('img/salesforce.png', 'Marketing Associate', 'Salesforce', '$52,000 - $56,000', 'marketing');
var hawke = new jobs('img/hawke.png', 'Director of Marketing', 'Hawke Media', '$125,000 - $140,000', 'marketing');
var amazon = new jobs('img/amazon.png', 'Marketing Associate', 'Amazon', '$60,000 - $90,000', 'marketing');
var trulia = new jobs('img/trulia.png', 'Marketing Specialist', 'Trulia', '$55,000 - $81,000', 'marketing');
var invitae = new jobs('img/invitae.png', 'Director Specialist', 'Invitae', '$62,000 - $88,000', 'marketing');
var bluewolf = new jobs('img/bluewolf.png', 'Marketing Operations Associate', 'Bluewolf', '$39,000 - $55,000', 'marketing');

//MARKET ARRAY
var mark = [salesforce, hawke, amazon, trulia, invitae, bluewolf];


//New Education objects
var stanford = new jobs('img/stanford.png', 'History 101 Professor', 'Stanford', '$89,000 - $95,000', 'education');
var stratford = new jobs('img/stratford.png', 'Spanish Teacher', 'Stratford School', '$43,000 - $61,000', 'education');
var pomona = new jobs('img/pomona.png', 'English Teacher', 'Pomona School District', '$40,000 - $57,000', 'education');
var kaplan = new jobs('img/kaplan.png', 'Nursing Instructor', 'Kaplan Test Prep', '$53,000 - $68,000', 'education');
var ucsf = new jobs('img/ucsf.png', 'Dean of Nursing School', 'UCSF', '$78,000 - $89,000', 'education');
var cengage = new jobs('img/cengage.png', 'Math Teacher', 'Cengage Learning', '$65,000 - $78,000', 'education');

// EDUCATION ARRAY
var eddy = [stanford, stratford, pomona, kaplan, ucsf, cengage];

// Create HTML elements for properties of objects

var educationFilter = document.getElementById('educationCat');
var marketingFilter = document.getElementById('marketingCat');
var salesFilter = document.getElementById('salesCat');
var techFilter = document.getElementById('techCat');



// EDUCATION SEARCH
function educate(){
	for(var i = 0; i < eddy.length; i++){
		var edBox = document.createElement('div');

		var edBrand   = eddy[i].image;
		var edLogo    = document.createElement('img');
		var edTitle   = eddy[i].title;
		var edH2      = document.createElement('h2');
		var edCompany = eddy[i].company;
		var edH4      = document.createElement('h4');
		var edSalary  = eddy[i].salary;
		var edp 	  = document.createElement('p');
		var edHead    = document.getElementById('listHeader');

		edHead.textContent = 'EDUCATION JOBS';

		edLogo.src = edBrand;
		edH2.textContent = edTitle;
		edH4.textContent = edCompany;
		edp.textContent = 'Salary Range: ' + edSalary;

		var section = document.getElementById('list');
		var footer = document.getElementById('footer');

		section.appendChild(edBox);
		edBox.appendChild(edLogo);
		edBox.appendChild(edH2);
		edBox.appendChild(edH4);
		edBox.appendChild(edp);

		section.className = 'list';
		edBox.className = 'box col-md-4 text-center';
		edLogo.className = 'thumbnail';
		edHead.className = 'text-center headerStyle jobHeadline';
		edH2.className = 'jobTitle';
		edH4.className = 'company';
		edp.className = 'salary';
		footer.className = 'footer';

		var clearDropdown = document.getElementById('jobDropdown');
		clearDropdown.className = ('dropdown-content');
	}
}

educationFilter.addEventListener('click', educate, false);

// MARKET SEARCH
function market(){
	for(var i = 0; i < mark.length; i++){
		var markBox = document.createElement('div');

		var marketBrand		= mark[i].image;
		var marketLogo		= document.createElement('img');
		var marketTitle 	= mark[i].title;
		var markH2			= document.createElement('h2');
		var marketCompany  	= mark[i].company;
		var markH4 			= document.createElement('h4');
		var marketSalary	= mark[i].salary;
		var markp 			= document.createElement('p');
		var markHead		= document.getElementById('listHeader');

		markHead.textContent = 'MARKETING JOBS';

		marketLogo.src = marketBrand;
		markH2.textContent = marketTitle;
		markH4.textContent = marketCompany;
		markp.textContent = 'Salary Range: ' + marketSalary;

		var section = document.getElementById('list');
		var footer = document.getElementById('footer');

		section.appendChild(markBox);
		markBox.appendChild(marketLogo);
		markBox.appendChild(markH2);
		markBox.appendChild(markH4);
		markBox.appendChild(markp);


		section.className = 'list';
		markBox.className = 'box col-md-4 text-center';
		marketLogo.className = 'thumbnail';
		markHead.className = 'text-center headerStyle jobHeadline';
		markH2.className = 'jobTitle';
		markH4.className = 'company';
		markp.className = 'salary';
		footer.className = 'footer';

		var clearDropdown = document.getElementById('jobDropdown');
		clearDropdown.className = ('dropdown-content');

		console.log(mark);

	}
}

marketingFilter.addEventListener('click', market, false);

// SALES SEARCH
function sell(){
	for(var i = 0; i < sales.length; i++){
		var sellBox = document.createElement('div');

		var sellBrand		= sales[i].image;
		var sellLogo		= document.createElement('img');
		var sellTitle   	= sales[i].title;
		var sellH2			= document.createElement('h2');
		var sellCompany  	= sales[i].company;
		var sellH4 			= document.createElement('h4');
		var sellSalary	    = sales[i].salary;
		var sellp 			= document.createElement('p');
		var sellHead		= document.getElementById('listHeader');

		sellHead.textContent = 'SALES JOBS';

		sellLogo.src = sellBrand;
		sellH2.textContent = sellTitle;
		sellH4.textContent = sellCompany;
		sellp.textContent = 'Salary Range: ' + sellSalary;

		var section = document.getElementById('list');
		var footer = document.getElementById('footer');

		section.appendChild(sellBox);
		sellBox.appendChild(sellLogo);
		sellBox.appendChild(sellH2);
		sellBox.appendChild(sellH4);
		sellBox.appendChild(sellp);


		section.className = 'list';
		sellBox.className = 'box col-md-4 text-center';
		sellLogo.className = 'thumbnail';
		sellHead.className = 'text-center headerStyle jobHeadline';
		sellH2.className = 'jobTitle';
		sellH4.className = 'company';
		sellp.className = 'salary';
		footer.className = 'footer';

		var clearDropdown = document.getElementById('jobDropdown');
		clearDropdown.className = ('dropdown-content');

		console.log(sales);
	}
}

salesFilter.addEventListener('click', sell, false);

function technology(){
	for(var i = 0; i < techy.length; i++){
		var techBox = document.createElement('div');

		var techBrand		= techy[i].image;
		var techLogo		= document.createElement('img');
		var techTitle   	= techy[i].title;
		var techH2			= document.createElement('h2');
		var techCompany  	= techy[i].company;
		var techH4 			= document.createElement('h4');
		var techSalary	    = techy[i].salary;
		var techp 			= document.createElement('p');
		var techHead		= document.getElementById('listHeader');

		techHead.textContent = 'TECH JOBS';

		techLogo.src = techBrand;
		techH2.textContent = techTitle;
		techH4.textContent = techCompany;
		techp.textContent = 'Salary Range: ' + techSalary;

		var section = document.getElementById('list');
		var footer = document.getElementById('footer');

		section.appendChild(techBox);
		techBox.appendChild(techLogo);
		techBox.appendChild(techH2);
		techBox.appendChild(techH4);
		techBox.appendChild(techp);


		section.className = 'list';
		techBox.className = 'box col-md-4 text-center';
		techLogo.className = 'thumbnail';
		techHead.className = 'text-center headerStyle jobHeadline';
		techH2.className = 'jobTitle';
		techH4.className = 'company';
		techp.className = 'salary';
		footer.className = 'footer';

		var clearDropdown = document.getElementById('jobDropdown');
		clearDropdown.className = ('dropdown-content');


		console.log(techy);
	}
}

techFilter.addEventListener('click', technology, false);