<header class="border-bottom">
	<div class="container">
		<nav>
			<a href="#" class="logo">
				<img src="/logo.png" width="140" loading="lazy" alt="SealTech3D Logo" />
			</a>

			<ul class="nav-links">
				<li><a href="#">Головна</a></li>
				<li><a href="#">Про нас</a></li>
				<li><a href="#">Товари</a></li>
				<li><a href="#">Генерація</a></li>
				<li><a href="#">Контакти</a></li>
			</ul>

			<div class="nav-right gap-5">
				<button class="btn language">UA / EN</button>
				<button class="btn registration">Увійти</button>
				<button class="btn theme">Тема</button>
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
			/* padding: 10px 0; */

			.nav-links {
				display: flex;
				gap: 1.25rem;
				list-style: none;

				
				& a {
					color: var(--gray);
					font-size: 1.25rem;
					font-weight: 900;
					letter-spacing: var(--letter-spacing-text);
					transition: color 0.3s;

					&:hover {
						color: var(--white);
					}
				}
			}

			.nav-right {
				display: flex;
				align-items: center;
				gap: 1.25rem;
				
				.language {
					/* background-color: var(--o); */
				}

				.registration {
					/* background-color: var(--accent); */
					/* color: var(--black); */
					/* border: 1px solid var(--accent); */
				}

				.theme {
					/* background-color: var(--red); */
				}
			}
		}
	}
</style>
