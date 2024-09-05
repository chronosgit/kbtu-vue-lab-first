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
				<li v-for="(l, i) in links" :key="l?.id || i" class="link">
					<a :href="l?.url">{{ l?.name }}</a>
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
		font-size: 0.9rem;
		font-weight: 600;
	}
</style>
