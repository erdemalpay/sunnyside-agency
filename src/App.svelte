<script>
	import Testimonial from './components/Testimonial.svelte';
	import HeaderButton from './components/HeaderButton.svelte';
	import FooterButton from './components/FooterButton.svelte';
	import FooterIcon from './components/FooterIcon.svelte';
	import LearnMoreSection from './components/LearnMoreSection.svelte';
	import ServiceSection from './components/ServiceSection.svelte';
	import InlineSvg from './components/InlineSvg.svelte';
	
</script>

<main class="w-360 bg-smokey-white">
	<!-- Header -->
	<header class="bg-header bg-cover h-200">
		<div class="flex px-10 py-8">
			<div class="flex align-middle text-white">
				<InlineSvg src="/images/logo.svg"/>
			</div>
			<div class="flex flex-auto justify-end text-white space-x-10">
				<HeaderButton label="About"/>
				<HeaderButton label="Services"/>
				<HeaderButton label="Projects"/>
				<button class="
				contact-button
				w-35
				px-8
				py-4
				rounded-full
				uppercase
				bg-white
				text-darkest-blue
				hover:text-white
				hover:bg-opacity-30
				">Contact</button>
			</div>
		</div>
		<div class="mt-12">
			<h1 class="creatives text-white uppercase">
			We are creatives
			</h1>
			<div class="flex justify-center mt-28">
				<img class="hover:animate-bounce" src="/images/icon-arrow-down.svg" alt="arrow"/>
			</div>
		</div>
	</header>
	<!-- Content -->
	<div>
		<div class="flex w-full">
			<LearnMoreSection color="light-yellow">
				<span slot="title">
					Transform your brand
				</span>
				<span slot="content">
					We are a full-service creative agency specializing in helping brands grow fast. 
					Engage your clients through compelling visuals that do most of the marketing for you.
				</span>
			</LearnMoreSection>
			<div class="w-1/2">
				<img src="/images/desktop/image-transform.jpg" alt="egg"/>	
			</div>
		</div>
		<div class="flex w-full">
			<div class="w-1/2">
				<img src="/images/desktop/image-stand-out.jpg" alt="glass"/>	
			</div>
			<LearnMoreSection color="light-red">
				<span slot="title">
					Stand out to the right audience
				</span>
				<span slot="content">
					Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
				</span>
			</LearnMoreSection>
		</div>
		<div class="flex w-full h-150 text-center">
			<ServiceSection color="green" bgImage="graphic-design">
				<span slot="title">
					Graphic design
				</span>
				<span slot="content">
					Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
				</span>
			</ServiceSection>
			<ServiceSection color="blue" bgImage="photography">
				<span slot="title">
					Photography
				</span>
				<span slot="content">
					Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
				</span>
			</ServiceSection>
		</div>
	</div>
	<!-- Testimonials -->
	<div class="w-360 p-40">
		<h4 class="testimonials-title text-center text-light-gray uppercase mb-20">
			Client testimonials
		</h4>
		<div class="flex">
			<Testimonial
				src='/images/image-emily.jpg'
				alt='emily'
			>
				<span slot="description">
					We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
				</span>
				<span slot="name">
					Emily R.
				</span>
				<span slot="position">
					Marketing Director
				</span>
			</Testimonial>
				<Testimonial
				src='/images/image-thomas.jpg'
				alt='thomas'
				>
				<span slot="description">
					Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
				</span>
				<span slot="name">
					Thomas S.
				</span>
				<span slot="position">
					Chief Operating Officer
				</span>
			</Testimonial>
				<Testimonial
				src='/images/image-jennie.jpg'
				alt='jennie'
				>
				<span slot="description">
					Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
				</span>
				<span slot="name">
					Jennie F.
				</span>
				<span slot="position">
					Business Owner
				</span>
			</Testimonial>
		</div>
	</div>
	<!-- Pictures -->
	<div class="flex w-360">
		<img class="w-1/4" src="/images/desktop/image-gallery-milkbottles.jpg" alt="milkbottles" />
		<img class="w-1/4" src="/images/desktop/image-gallery-orange.jpg" alt="orange" />
		<img class="w-1/4" src="/images/desktop/image-gallery-cone.jpg" alt="cone" />
		<img class="w-1/4" src="/images/desktop/image-gallery-sugarcubes.jpg" alt="sugarcubes" />
	</div>
	<!-- Footer -->
	<div class="bg-flat-green text-center flex flex-col items-center px-118 py-18">
			<div class="mb-10 text-footer-green">
				<InlineSvg src='/images/logo.svg'/>
			</div>
			<div class="flex justify-between w-72 mb-20">
				<FooterButton label="About"/>
				<FooterButton label="Services"/>
				<FooterButton label="Projects"/>
			</div>
			<div class="flex justify-between w-40">
				<FooterIcon name="facebook"/>
				<FooterIcon name="instagram"/>
				<FooterIcon name="twitter"/>
				<FooterIcon name="pinterest"/>
			</div>
	</div>
</main>

<style>

	.contact-button {
		font-family: Fraunces;
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: 25px;
		letter-spacing: -0.1071428582072258px;
		text-align: left;
	}

	.creatives {
		font-family: Fraunces;
		font-size: 56px;
		font-style: normal;
		font-weight: 900;
		line-height: 69px;
		letter-spacing: 8.75px;
		text-align: center;
	}

	.testimonials-title {
		font-family: Fraunces;
		font-size: 20px;
		font-style: normal;
		font-weight: 900;
		line-height: 25px;
		letter-spacing: 5px;
	}


</style>