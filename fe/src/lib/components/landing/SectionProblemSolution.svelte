<section class="border-bottom">
    <div class="container">

        <p class="label">
            Проблема і рішення
        </p>

        <h2>
            Маєш ідею, але не знаєш
            як її втілити?
        </h2>

        <div class="problems">
            <div class="problem-card">
                <div class="problem-icon">
                    💡
                </div>

                <div class="problem-title">
                    Ідея є, файлу нема
                </div>

                <div class="problem-text">
                    Є задум, але немає 3D-моделі? Наш AI генерує модель з 
                    твого опису або зображення.
                </div>
            </div>

            <div class="problem-card">
                <div class="problem-icon">
                    🏭
                </div>

                <div class="problem-title">
                    Не хочеш займатись логістикою
                </div>

                <div class="problem-text">
                    Завантажуєш модель — ми друкуємо та доставляємо. 
                    Без зайвих кроків.
                </div>
            </div>

            <div class="problem-card">
                <div class="problem-icon">
                    🎯
                </div>

                <div class="problem-title">
                    Потрібна унікальна річ
                </div>

                <div class="problem-text">
                    Серійні вироби не підходять? Робимо custom речі: 
                    від сувенірів до функціональних деталей.
                </div>
            </div>
        </div>
    </div>
</section>

<style lang='postcss'>
    h2 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	.problems {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1px;
		background: var(--border);
	}

	.problem-card {
		background: var(--mid);
		padding: 2rem;
	}

	.problem-icon {
		font-size: 2rem;
		margin-bottom: 1.25rem;
	}

	.problem-title {
		font-weight: 600;
		margin-bottom: 1.25rem;
	}
    
	.problem-text {
		font-size: 14px;
		line-height: 1.4;
	}
</style>
