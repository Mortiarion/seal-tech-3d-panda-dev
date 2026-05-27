<section class="border-bottom">
    <div class="container">

        <p class="main-section-label">
            Проблема і рішення
        </p>

        <h3>
            Маєш ідею, але не знаєш
            як її втілити?
        </h3>

        <div class="problems">
            <div class="card">
                <div class="icon">
                    💡
                </div>

                <div class="title">
                    Ідея є, файлу нема
                </div>

                <div class="text">
                    Є задум, але немає 3D-моделі? Наш AI генерує модель з 
                    твого опису або зображення.
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    🏭
                </div>

                <div class="title">
                    Не хочеш займатись логістикою
                </div>

                <div class="text">
                    Завантажуєш модель — ми друкуємо та доставляємо. 
                    Без зайвих кроків.
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    🎯
                </div>

                <div class="title">
                    Потрібна унікальна річ
                </div>

                <div class="text">
                    Серійні вироби не підходять? Робимо custom речі: 
                    від сувенірів до функціональних деталей.
                </div>
            </div>
        </div>
    </div>
</section>

<style lang='postcss'>
    h3 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	.problems {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1px;
		background: var(--border);

        .card {
            background: var(--mid);
            padding: 2rem;

            .icon {
                font-size: 2rem;
                margin-bottom: 1.25rem;
            }
        
            .title {
                font-weight: 600;
                margin-bottom: 1.25rem;
            }
            
            .text {
                font-size: 14px;
                line-height: 1.4;
            }
        }
	}
</style>
