/*
Portfolio:
- hrc
- paws for a cause
- swingkids
- trimood
- reflex
- prometheus

 -flickr
 -***of the day

Target:
<script id='portfolio-template' type="text/x-handlebars-template">
	{{#each portfolio}}
	<div class='col-md-4 portfolio-item'>
		<div class='image-container'>
			<img class='img-responsive' src='{{this.imageSrc}}' alt='{{this.imageName}}' />
		</div>
		<div class='description-container'>
			<p>{{ this.description }} <span class='scroll-button'>Wanna see it?</span></p>
		</div>
	</div>
	{{/each}}
</script>


*/

var portfolio = {
	'portfolio' : [
	{
		'title' : 'Husky Running Club', // used for alt and eventually title piece
		'imageSrc' : 'img/portfolio/hrc-portfolio.png',
		'description' : 'This is a website I built for Husky Running Club, of which I have been an officer for the past 3 years.',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : 'http://students.washington.edu/uwrunner/'
	},
	{
		'title' : 'Paws for a Cause',
		'imageSrc' : 'img/portfolio/pawsforacause-portfolio.png',
		'description' : 'This is a website I built for Paws for a Cause 5k, which raises money for Relay for Life',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : 'http://students.washington.edu/uwrunner/pawsforacause/'
	},
		{
		'title' : 'Prometheus Docs',
		'imageSrc' : 'img/portfolio/prometheus-portfolio.png',
		'description' : 'This is a MEAN stack app I\'m building that handles code documentation in neat ways.',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : '#'
	},
	{
		'title' : 'Re:Flex Credivis',
		'imageSrc' : 'img/portfolio/reflex-portfolio.png',
		'description' : 'This is a data visualization I built to find credible users on Wikipedia.',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : 'http://www.hcde.washington.edu/files/advise/reflex_poster_final_02.pdf'
	},
	{
		'title' : 'UW Swing Kids',
		'imageSrc' : 'img/portfolio/swingkids-portfolio.png',
		'description' : 'This is a website I built for UW Swing Kids Club.',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : 'http://students.washington.edu/robbybro/swingkd/'
	},
	{
		'title' : 'Trimood Photography',
		'imageSrc' : 'img/portfolio/trimood-portfolio.png',
		'description' : 'This is a photography website I built for a friend.',
		'backgroundColor' : randomPortfolioBackground(),
		'link' : 'http://students.washington.edu/robbybro/trimood/'
	}
	// {
	// 	'title' : '',
	// 	'imageSrc' : 'img/portfolio/',
	// 	'description' : '',
	// 	'backgroundColor' : '',
	// 	'link' : ''
	// },
]};

function randomPortfolioBackground() {
	var num = Math.round(Math.random()*(9-1)) + 1;
	return 'portfolio-image-background-' + num;
	
}