<script lang='ts'>
	import SectionAi from '$lib/components/landing/SectionAi.svelte';
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
	
		<SectionAi />
	
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
