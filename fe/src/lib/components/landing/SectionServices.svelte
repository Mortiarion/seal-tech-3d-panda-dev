<section class="border-bottom">
    <div class="container">
        <p class="label">
            Послуги
        </p>

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
                    Декор, сувеніри, cosplay-реквізит, подарунки — допоможемо з ескізом або у створенні
                    3D-файлу.
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
                    Завантажуєш фото або згенероване зображення — отримуєш готову 3D-модель для друку.
                </div>
                <div class="service-link">Спробувати →</div>
            </div>

        </div>
    </div>
</section>

<style lang="postcss">
	.services-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
		margin-top: 32px;
	}
	.service-card {
		background: var(--mid);
		padding: 32px 28px;
		position: relative;
		overflow: hidden;
		cursor: pointer;
		transition: background 0.2s;
	}
	.service-card:hover {
		background: var(--black);
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
		color: var(--orange);
		margin-top: 16px;
		display: inline-block;
		letter-spacing: 0.5px;
	}

	
</style>
