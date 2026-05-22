<script lang='ts'>
	import { resolve } from "$app/paths";

	import { Route } from "$lib/routing-helper";
	import ThemesToggle from "../themes/ThemesToggle.svelte";
</script>

<header class="border-bottom">
	<div class="container">
		<nav>
			<a href={ resolve(Route.root) } class="logo">
				<img 
					src="/logo.png" 
					width="140" 
					loading="lazy" 
					alt="SealTech3D Logo" 
				/>
			</a>

			<ul class="nav-links">
				<li>
					<a href="#">Товари</a>
				</li>

				<li>
					<a href="#">Генерація</a>
				</li>

				<li>
					<a href="#">Контакти</a>
				</li>
			</ul>

			<div class="nav-right gap-5">
				<button class="btn language">UA</button>
				<ThemesToggle />
				<button class="btn registration">Увійти</button>
				<!-- <button class="btn theme">Тема</button> -->
			</div>
		</nav>
	</div>
</header>

<style lang="postcss">
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--header-bg-transparent);
		backdrop-filter: var(--backdrop-filter);
		
		> .container {
			padding: 1.25rem ;
		}

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.nav-links {
				display: flex;
				gap: 1.25rem;

				
				& a {
					font-size: 1.25rem;
					font-weight: 900;
					transition: color 0.3s;

					&:hover {
						color: var(--gray);
					}
				}
			}

			.nav-right {
				display: flex;
				align-items: center;
				gap: 1.25rem;
			}
		}
	}
</style>
