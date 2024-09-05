<script>
	import magnifier from '@/assets/magnifier.svg';

	export default {
		name: 'IconMagnifier',
		data() {
			return { magnifier };
		},
		methods: {
			onSearchClick() {
				console.log('The dummy search is triggered!');
			},
		},
	};
</script>

<template>
	<img
		:src="magnifier"
		alt="search button icon"
		class="icon"
		@click="onSearchClick"
	/>
</template>

<style scoped>
	.icon {
		--max-size: 1.5rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
		cursor: pointer;
	}
</style>
