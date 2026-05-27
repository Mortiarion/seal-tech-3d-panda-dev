<script lang='ts'>
	import ArrowRightIcon from "$lib/icons/ArrowRightIcon.svelte";
</script>

<section class="border-bottom">
    <div class="container">
        <p class="main-section-label">
            Послуги
        </p>

        <div class="services-grid">
            <div class="service-card">
                <span class="num">
					01
				</span>

                <div class="tag">
					Виробництво
				</div>

                <h4 class="title">
					Серійний друк
				</h4>

                <div class="text">
                    Малі та середні тиражі з однаковою якістю в кожній деталі. 
					Гнучкі строки, конкурентні ціни.
                </div>

                <a href="#" class="link">
					Дізнатись більше
					<ArrowRightIcon />
				</a>
            </div>

            <div class="service-card">
                <span class="num">
					02
				</span>

                <div class="tag">
					Custom
				</div>

                <h4 class="title">
					Унікальні вироби
				</h4>

                <div class="text">
                    Декор, сувеніри, cosplay-реквізит, подарунки — 
					допоможемо з ескізом або у створенні 3D-файлу.
                </div>

                <a href="#" class="link">
					Переглянути роботи 
					<ArrowRightIcon />
				</a>
            </div>

            <div class="service-card">
                <span class="num">
					03
				</span>
				
                <div class="tag">
					AI · допомога
				</div>

                <h4 class="title">
					Генерація зображень
				</h4>

                <div class="text">
                    Опиши ідею текстом — AI створить зображення. 
					Потім замов друк або збережи як референс.
                </div>

                <a href='#' class="link">
					Спробувати 
					<ArrowRightIcon />
				</a>
            </div>

            <div class="service-card">
                <span class="num">
					04
				</span>

                <div class="tag">
					AI · Допомога
				</div>

                <h4 class="title">
					Зображення 
					<ArrowRightIcon classes='size-4' />
					3D модель
				</h4>

                <div class="text">
                    Завантажуєш фото або згенероване зображення — отримуєш готову 
					3D-модель для друку.
                </div>

                <a href='#' class="link">
					Спробувати 
					<ArrowRightIcon />
				</a>
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

		.service-card {
			background: var(--mid);
			padding: 2rem 1.5rem;
			position: relative;
			transition: background .3s;
			display: flex;
			flex-direction: column;
			gap: 1rem;
	
			&:hover {
				background: var(--black);
			}
	
			.num {
				font-family: var(--font-display);
				font-size: 4rem;
				color: var(--border);
				position: absolute;
				right: 20px;
				top: 10px;
			}
		
			.tag {
				font-size: 0.75rem;
				letter-spacing: var(--letter-spacing-title);
				color: var(--accent-green);
				text-transform: uppercase;
			}
		
			.text {
				color: var(--text2);
				line-height: 1.5;
				max-width: 280px;
			}
		
			.link {
				align-items: center;
				color: var(--orange);
			}

			.tag,
			.title,
			.link {
				font-weight: 600;
			}

			.title,
			.link {
				display: flex;
				gap: 1rem;
			}

			.text,
			.link {
				font-size: 0.875rem;
			}
		}
	}
</style>
