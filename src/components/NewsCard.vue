<script>
	// eslint-disable-next-line no-unused-vars

	import images from '@/assets/webpackImagesResolver';
	import labelsColorDictionary from '@/utils/labelsColorDictionary';

	export default {
		name: 'NewsCard',
		props: ['card', 'isVertical'],
		data() {
			return {
				labelsColorDictionary,
			};
		},
		computed: {
			cardConditionalStyle() {
				return {
					gridRow: this.isVertical ? 'span 2' : '',
				};
			},
			bgImgSrc() {
				if (!this?.card.image) return require('/src/assets/image_404.jpg');

				return images[this.card.image] || '';
			},
		},
		methods: {
			getLabelColor(label) {
				return labelsColorDictionary[label] || 'gray';
			},
		},
	};
</script>

<template>
	<div class="card-box" :style="cardConditionalStyle">
		<img :src="bgImgSrc" alt="" class="bg-img" />

		<div class="card-content">
			<div v-if="card?.labels.length > 0" class="card-labels">
				<div
					v-for="(label, i) in card?.labels"
					:key="i"
					class="card-label"
					:style="{
						backgroundColor: getLabelColor(label),
					}"
				>
					{{ label }}
				</div>
			</div>

			<h2 class="card-title">{{ card.title }}</h2>

			<p class="card-date">{{ card.date }}</p>
		</div>
	</div>
</template>

<style scoped>
	.card-box {
		position: relative;
		overflow: hidden;
		min-height: 12rem;
		padding: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		border-radius: 0.3rem;
		background: linear-gradient(rgba(240, 240, 240, 0.067), rgb(1, 1, 1));
		cursor: pointer;
	}

	.bg-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		object-fit: cover;
		z-index: -1;
	}

	.card-labels {
		margin-block-end: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.card-label {
		padding: 0.2rem 0.5rem;
		font-size: 0.7rem;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: white;
		background-color: red;
		border-radius: 0.3rem;
	}

	.card-title {
		margin-block-end: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		color: #ffffff;
	}

	.card-date {
		font-size: 0.9rem;
		color: #acacac;
	}
</style>
