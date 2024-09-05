<script>
	import NewsCard from './NewsCard.vue';
	import newsCards from '@/utils/newsCards';

	export default {
		name: 'NewsSection',
		components: { NewsCard },
		data() {
			return { newsCards };
		},
	};
</script>

<template>
	<section class="section">
		<div class="card-wrapper">
			<NewsCard
				v-for="(card, i) in newsCards"
				:key="card.id || i"
				:card="card"
				:isVertical="i === 1"
			/>
		</div>
	</section>
</template>

<style scoped>
	.section {
		width: 100%;
		max-width: 75rem; /* bootstrap xlg breakpoint */
		margin: 0 auto;
		padding-inline: 0.5rem;
	}

	.card-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}
</style>
