<template>
	<div id="app">
		<div class="my-header-wrapper">
			<MyHeader />
		</div>

		<NewsSection />
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader.vue';
	import NewsSection from './components/NewsSection.vue';

	export default {
		name: 'App',
		components: { MyHeader, NewsSection },
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	body {
		background-color: #f9f9fb;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.my-header-wrapper {
		margin-block-end: 4rem;
	}
</style>
