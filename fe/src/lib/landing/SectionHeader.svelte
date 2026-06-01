<script lang='ts'>
	import { resolve } from "$app/paths";

	import { Route } from "$lib/routing-helper";
	import LanguageSwitcher from "$lib/languages/LanguageSwitcher.svelte";
	import ThemesToggle from "$lib/themes/ThemesToggle.svelte";
	import { intersectionObserver } from "$lib/actions/intersectionObserver";

	let isScrolled = $state(false);
</script>

<div 
	id="intersection-observer" 
	use:intersectionObserver 
	onintersect={(e) => {
		isScrolled = !e.detail.isIntersecting;
	}}
></div>

<header class="border-bottom" class:scrolled={ isScrolled }>
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
					<a href={ resolve(`${Route.root}#contacts`) }>
						Контакти
					</a>
				</li>
			</ul>

			<div class="nav-right gap-5">
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
	#intersection-observer {
		position: absolute;
		top: 0;
		width: 100%;
		height: 1px;
		visibility: hidden;
		opacity: 0;
		background-color: transparent;
		pointer-events: none;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--header-bg-transparent);
		backdrop-filter: var(--backdrop-filter);

        &.scrolled {
			& .logo img {
                width: 80px;
            }
        }
		
		&::before {
		    content: "";
			position: absolute;
			inset: 0;
			background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
			background-size: 60px 60px;
			opacity: .35;
			pointer-events: none;
		}
		
		> .container {
			padding: 1.25rem ;
		}

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.logo img {
				transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			}

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
