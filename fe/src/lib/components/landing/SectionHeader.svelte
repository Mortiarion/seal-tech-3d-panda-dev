<script lang='ts'>
	import { resolve } from "$app/paths";

	import { Route } from "$lib/routing-helper";
	import LanguageSwitcher from "../languages/LanguageSwitcher.svelte";
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
					<a href={ resolve(Route.merchandise) }>
						Товари
					</a>
				</li>

				<li>
					<a href={ resolve(Route.aiGeneration) }>
						Генерація ШІ
					</a>
				</li>

				<li>
					<a href={ resolve(`${Route.root}#contacts`) }>Контакти</a>
				</li>
			</ul>

			<div class="nav-right gap-5">
				<!-- <button class="btn language">UA</button> -->
				<LanguageSwitcher />

				<ThemesToggle />

				<a href={ resolve(Route.auth.login) } class="btn registration">
					Увійти
				</a>
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
