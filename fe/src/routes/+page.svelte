<script lang='ts'>
	import SectionHeader from '$lib/components/landing/SectionHeader.svelte';
	import SectionHero from '$lib/components/landing/SectionHero.svelte';
	import SectionProblemSolution from '$lib/components/landing/SectionProblemSolution.svelte';
	import SectionServices from '$lib/components/landing/SectionServices.svelte';
	
	
</script>

<svelte:head>
	<title>SealTech3D - Головна</title>
</svelte:head>

<div class="preview">
	<SectionHeader />

	<main>
		<SectionHero />
	
		<SectionProblemSolution />
	
		<SectionServices />
	
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
