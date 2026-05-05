<header>
	<div class="container mx-auto px-5">
		<nav>
			<!-- <div class="logo">SEAL<span>TECH</span>3D</div> -->
			<a href="/" class="logo">
				<img src="/logo.png" width="140" loading="lazy" alt="SealTech3D Logo" />
			</a>

			<ul class="nav-links">
				<li><a href="#">Головна</a></li>
				<li><a href="#">Про нас</a></li>
				<li><a href="#">Товари</a></li>
				<li><a href="#">Генерація</a></li>
				<li><a href="#">Контакти</a></li>
			</ul>

			<div class="nav-right">
				<button class="lang">UA / EN</button>
				<button class="btn-nav">Увійти</button>
				<button class="btn-theme">Тема</button>
			</div>
		</nav>
	</div>
</header>

<style lang="postcss">
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: rgba(10, 10, 11, 0.7);
		backdrop-filter: blur(8px);

		&::after {
			content: '';
			border-bottom: 1px solid var(--border);
			width: 100%;
			height: 1px;
			display: flex;
		}

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 0;
		}
	}

    .logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 22px;
		letter-spacing: 2px;
		color: var(--text);
	}
	.logo span {
		color: var(--accent);
	}
	.nav-links {
		display: flex;
		gap: 28px;
		list-style: none;
	}
	.nav-links a {
		color: var(--text2);
		text-decoration: none;
		font-size: 13px;
		font-weight: 500;
		letter-spacing: 0.5px;
		transition: color 0.2s;
	}
	.nav-links a:hover {
		color: var(--text);
	}
	.nav-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.btn-nav {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 8px 18px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
		letter-spacing: 0.3px;
	}
	.lang {
		background: none;
		border: 1px solid var(--border);
		color: var(--text2);
		padding: 6px 10px;
		font-size: 12px;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
	}
</style>
