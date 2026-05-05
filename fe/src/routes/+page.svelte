<script lang='ts'>
	import SectionHeader from '$lib/components/landing/SectionHeader.svelte';
</script>

<svelte:head>
	<title>SealTech3D - Головна</title>
</svelte:head>

<div class="preview">
	<SectionHeader />

	<main>
		<section class="hero">
			<div class="hero-bg">3D</div>
			<p class="hero-label">Студія 3D-друку · Київ</p>
			<h1>Де ідеї<br />стають <em>реальними</em></h1>
			<p class="hero-sub">
				Від ескізу до готового об'єкту — друкуємо, моделюємо, втілюємо. Для дизайнерів,
				інженерів та всіх, кому потрібно «оте, але справжнє».
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
	
		<section class="section">
			<p class="section-label">Проблема і рішення</p>
			<h2>Маєш ідею, але не знаєш<br />як її втілити?</h2>
			<div class="problems">
				<div class="problem-card">
					<div class="problem-icon">💡</div>
					<div class="problem-title">Ідея є, файлу нема</div>
					<div class="problem-text">
						Є задум, але немає 3D-моделі? Наш AI генерує модель з твого опису або
						зображення.
					</div>
				</div>
				<div class="problem-card">
					<div class="problem-icon">🏭</div>
					<div class="problem-title">Не хочеш займатись логістикою</div>
					<div class="problem-text">
						Завантажуєш модель — ми друкуємо та доставляємо. Без зайвих кроків.
					</div>
				</div>
				<div class="problem-card">
					<div class="problem-icon">🎯</div>
					<div class="problem-title">Потрібна унікальна річ</div>
					<div class="problem-text">
						Серійні вироби не підходять? Робимо custom речі: від сувенірів до функціональних
						деталей.
					</div>
				</div>
			</div>
		</section>
	
		<section class="section">
			<p class="section-label">Послуги</p>
			<h2>Що ми робимо</h2>
			<div class="services-grid">
				<div class="service-card">
					<div class="service-num">01</div>
					<div class="service-tag">Виробництво</div>
					<div class="service-title">Серійний друк</div>
					<div class="service-text">
						Малі та середні тиражі з однаковою якістю в кожній деталі. Гнучкі строки,
						конкурентні ціни.
					</div>
					<div class="service-link">Дізнатись більше →</div>
				</div>
				<div class="service-card">
					<div class="service-num">02</div>
					<div class="service-tag">Custom</div>
					<div class="service-title">Унікальні вироби</div>
					<div class="service-text">
						Декор, сувеніри, cosplay-реквізит, подарунки — допоможемо з ескізом або у
						створенні 3D-файлу.
					</div>
					<div class="service-link">Переглянути роботи →</div>
				</div>
				<div class="service-card">
					<div class="service-num">03</div>
					<div class="service-tag">AI · Новинка</div>
					<div class="service-title">Генерація зображень</div>
					<div class="service-text">
						Опиши ідею текстом — AI створить зображення. Потім замов друк або збережи як
						референс.
					</div>
					<div class="service-link">Спробувати →</div>
				</div>
				<div class="service-card">
					<div class="service-num">04</div>
					<div class="service-tag">AI · Новинка</div>
					<div class="service-title">Зображення → 3D модель</div>
					<div class="service-text">
						Завантажуєш фото або згенероване зображення — отримуєш готову 3D-модель для
						друку.
					</div>
					<div class="service-link">Спробувати →</div>
				</div>
			</div>
		</section>
	
		<section class="ai-section">
			<p class="section-label">Штучний інтелект</p>
			<h2
				style="font-family:'Bebas Neue',sans-serif;font-size:44px;letter-spacing:0.5px;margin-bottom:8px"
			>
				Генеруй. Замовляй. Тримай у руках.
			</h2>
			<p style="color:var(--text2);font-size:14px;max-width:500px">
				Два AI-інструменти, які перетворюють текст у фізичний об'єкт.
			</p>
			<div class="ai-grid">
				<div class="ai-card">
					<div class="ai-badge">Текст → Зображення</div>
					<h3>Генерація картинки</h3>
					<p>
						Опиши словами що хочеш побачити — AI намалює за секунди. Ідеально для концептів
						та референсів.
					</p>
					<div class="ai-demo">
						<input class="ai-input" placeholder="Дракон зі збіркою книг..." />
						<button class="ai-btn">Генерувати</button>
					</div>
				</div>
				<div class="ai-card">
					<div class="ai-badge">Зображення → 3D</div>
					<h3>Конвертація в 3D</h3>
					<p>
						Завантаж будь-яке зображення і отримай 3D-модель, готову до друку. Магія, що
						працює.
					</p>
					<div
						class="ai-demo"
						style="cursor:pointer;justify-content:center;flex-direction:column;gap:4px;padding:20px"
					>
						<div style="font-size:24px">⬆</div>
						<div style="font-size:12px;color:var(--text3)">
							Перетягни зображення або натисни
						</div>
					</div>
				</div>
			</div>
		</section>
	
		<section class="contact-section">
			<div>
				<p class="section-label" style="margin-bottom:12px">Контакти</p>
				<div class="contact-title">Поговоримо про<br />твій <span>проєкт</span></div>
				<p style="color:var(--text2);font-size:14px;max-width:320px">
					Без зайвої бюрократії. Розкажи що потрібно — відповімо швидко.
				</p>
				<div class="contact-info">
					<div class="contact-item">
						<div class="contact-dot"></div>
						+380 66 803 8198
					</div>
					<div class="contact-item">
						<div class="contact-dot"></div>
						@SealTech3D в Telegram
					</div>
					<div class="contact-item">
						<div class="contact-dot"></div>
						sealtech3d@gmail.com
					</div>
				</div>
			</div>
			<div class="contact-form">
				<input class="form-input" placeholder="Ваше ім'я" />
				<input class="form-input" placeholder="Email або Telegram" />
				<textarea class="form-input" placeholder="Опишіть ваш проєкт..."></textarea>
				<button class="btn-primary" style="width:100%">Надіслати запит</button>
			</div>
		</section>
	</main>


	<footer class='container mx-auto px-5'>
		<div class="footer-logo">SEAL<span>TECH</span>3D</div>
		<div class="footer-copy">© 2026 SealTech3D. Всі права захищені.</div>
		<div class="footer-links">
			<a href="#">Політика</a>
			<a href="#">Умови</a>
		</div>
	</footer>
</div>

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

	/* PROBLEM SECTION */
	.section {
		padding: 64px 32px;
		border-bottom: 1px solid var(--border);
	}
	.section-label {
		font-size: 11px;
		letter-spacing: 3px;
		color: var(--accent);
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 16px;
	}
	.section h2 {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 44px;
		letter-spacing: 0.5px;
		margin-bottom: 32px;
		line-height: 1.1;
	}
	.problems {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1px;
		background: var(--border);
		margin-top: 8px;
	}
	.problem-card {
		background: var(--bg);
		padding: 28px 24px;
	}
	.problem-icon {
		font-size: 28px;
		margin-bottom: 14px;
	}
	.problem-title {
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 8px;
		color: var(--text);
	}
	.problem-text {
		font-size: 13px;
		color: var(--text2);
		line-height: 1.6;
	}
	.arrow {
		color: var(--accent);
		font-size: 20px;
		margin: 20px 32px;
		text-align: center;
	}

	/* SERVICES */
	.services-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
		margin-top: 32px;
	}
	.service-card {
		background: var(--bg2);
		padding: 32px 28px;
		position: relative;
		overflow: hidden;
		cursor: pointer;
		transition: background 0.2s;
	}
	.service-card:hover {
		background: var(--bg3);
	}
	.service-num {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 64px;
		color: var(--border);
		position: absolute;
		right: 20px;
		top: 10px;
		line-height: 1;
	}
	.service-tag {
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--accent);
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 12px;
	}
	.service-title {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.service-text {
		font-size: 13px;
		color: var(--text2);
		line-height: 1.6;
		max-width: 280px;
	}
	.service-link {
		font-size: 12px;
		color: var(--accent);
		margin-top: 16px;
		display: inline-block;
		letter-spacing: 0.5px;
	}

	/* AI SECTION */
	.ai-section {
		padding: 64px 32px;
		border-bottom: 1px solid var(--border);
		background: var(--bg2);
	}
	.ai-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 32px;
	}
	.ai-card {
		background: var(--bg3);
		border: 1px solid var(--border);
		padding: 28px 24px;
	}
	.ai-badge {
		display: inline-block;
		background: rgba(232, 80, 10, 0.15);
		color: var(--accent);
		font-size: 10px;
		letter-spacing: 2px;
		padding: 4px 10px;
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 16px;
	}
	.ai-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.ai-card p {
		font-size: 13px;
		color: var(--text2);
		line-height: 1.6;
	}
	.ai-demo {
		margin-top: 20px;
		background: var(--bg);
		border: 1px solid var(--border);
		padding: 14px 16px;
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.ai-input {
		flex: 1;
		background: none;
		border: none;
		color: var(--text2);
		font-size: 13px;
		font-family: 'Manrope', sans-serif;
		outline: none;
	}
	.ai-btn {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 6px 14px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
	}

	/* CONTACT */
	.contact-section {
		padding: 64px 32px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: start;
	}
	.contact-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 52px;
		line-height: 1;
		margin-bottom: 16px;
	}
	.contact-title span {
		color: var(--accent);
	}
	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin-top: 8px;
	}
	.contact-item {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 14px;
		color: var(--text2);
	}
	.contact-dot {
		width: 6px;
		height: 6px;
		background: var(--accent);
		flex-shrink: 0;
	}
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.form-input {
		background: var(--bg2);
		border: 1px solid var(--border);
		color: var(--text);
		padding: 12px 14px;
		font-size: 14px;
		font-family: 'Manrope', sans-serif;
		outline: none;
		width: 100%;
		transition: border-color 0.2s;
	}
	.form-input:focus {
		border-color: var(--accent);
	}
	.form-input::placeholder {
		color: var(--text3);
	}
	textarea.form-input {
		height: 100px;
		resize: none;
	}

	/* FOOTER */
	footer {
		padding: 24px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--border);
	}
	.footer-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		letter-spacing: 2px;
	}
	.footer-logo span {
		color: var(--accent);
	}
	.footer-copy {
		font-size: 12px;
		color: var(--text3);
	}
	.footer-links {
		display: flex;
		gap: 20px;
	}
	.footer-links a {
		font-size: 12px;
		color: var(--text3);
		text-decoration: none;
	}
</style>
