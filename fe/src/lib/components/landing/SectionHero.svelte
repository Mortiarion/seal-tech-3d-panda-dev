<section class="hero">
	<div class="hero-bg">3D</div>
	<p class="hero-label">Студія 3D-друку · Київ</p>
	<h1>Де ідеї<br />стають <em>реальними</em></h1>
	<p class="hero-sub">
		Від ескізу до готового об'єкту — друкуємо, моделюємо, втілюємо. Для дизайнерів, інженерів та
		всіх, кому потрібно «оте, але справжнє».
	</p>
	<div class="hero-cta">
		<button class="btn-primary">Замовити друк</button>
		<button class="btn-outline">Переглянути роботи</button>
	</div>
	<div class="hero-stats">
		<div>
			<div class="stat-num">120<span>+</span></div>
			<div class="stat-label">Виконаних проєктів</div>
		</div>
		<div>
			<div class="stat-num">48<span>год</span></div>
			<div class="stat-label">Середній час виконання</div>
		</div>
		<div>
			<div class="stat-num">4.9<span>★</span></div>
			<div class="stat-label">Середня оцінка клієнтів</div>
		</div>
	</div>
</section>

<style lang='postcss'>
/* HERO */
	.hero {
		padding: 80px 32px 64px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid var(--border);
	}
	.hero-label {
		font-size: 11px;
		letter-spacing: 3px;
		color: var(--accent);
		font-weight: 600;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
	.hero h1 {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 86px;
		line-height: 0.95;
		letter-spacing: 1px;
		margin-bottom: 28px;
	}
	.hero h1 em {
		font-style: normal;
		color: var(--accent);
	}
	.hero-sub {
		color: var(--text2);
		font-size: 16px;
		max-width: 460px;
		line-height: 1.7;
		margin-bottom: 40px;
	}
	.hero-cta {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.btn-primary {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 14px 32px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
		letter-spacing: 0.3px;
		transition: background 0.2s;
	}
	.btn-primary:hover {
		background: var(--accent2);
	}
	.btn-outline {
		background: none;
		color: var(--text);
		border: 1px solid var(--border);
		padding: 14px 32px;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
		transition: border-color 0.2s;
	}
	.btn-outline:hover {
		border-color: rgba(255, 255, 255, 0.25);
	}
	.hero-stats {
		display: flex;
		gap: 40px;
		margin-top: 56px;
		padding-top: 40px;
		border-top: 1px solid var(--border);
	}
	.stat-num {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 40px;
		letter-spacing: 1px;
		color: var(--text);
	}
	.stat-num span {
		color: var(--accent);
	}
	.stat-label {
		font-size: 12px;
		color: var(--text3);
		letter-spacing: 0.5px;
		margin-top: 2px;
	}
	.hero-bg {
		position: absolute;
		right: -60px;
		top: 40px;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 280px;
		color: rgba(232, 80, 10, 0.04);
		letter-spacing: -10px;
		line-height: 1;
		pointer-events: none;
		user-select: none;
	}
</style>
