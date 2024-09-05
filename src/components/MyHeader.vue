<script>
	import IconMagnifier from './IconMagnifier.vue';
	import links from '@/utils/links';

	export default {
		name: 'MyHeader',
		components: { IconMagnifier },
		data() {
			return {
				links,
			};
		},
	};
</script>

<template>
	<header class="header">
		<h1 class="logo">Mini Blog</h1>

		<div class="feature-list">
			<ul class="link-list">
				<li v-for="(l, i) in links" :key="l.id || i" class="link">
					<a :href="l?.url" target="_blank">{{ l?.name }}</a>
				</li>
			</ul>

			<IconMagnifier />
		</div>
	</header>
</template>

<style scoped>
	.header {
		padding: 1rem 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		box-shadow: 0rem 0.1rem 0.3rem rgb(231, 231, 231);
	}

	.logo {
		font-size: 1.2rem;
		font-weight: 100;
	}

	.feature-list,
	.link-list {
		display: flex;
		gap: 1rem;
	}

	.feature-list {
		align-items: center;
	}

	.link-list {
		list-style: none;
	}

	.link {
		position: relative;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.link::after {
		content: '';
		width: 0%;
		height: 1px;
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: 0;
		transform: translateY(0.2rem);
		background-color: #000;
		transition: all 0.1s ease;
	}

	.link:hover::after {
		width: 100%;
		left: 0;
		right: 0;
	}
</style>
