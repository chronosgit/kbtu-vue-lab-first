<template>
	<div id="app">
		<MyHeader />
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader.vue';

	export default {
		name: 'App',
		components: { MyHeader },
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
</style>
