<section class="border-bottom">
	<div class="container">
		<p class="main-section-label">
			Студія 3D-друку
		</p>

		<h1>
			Де
			<span>
				ідеї <br />
			</span>
			стають
			<span>
				реальними <br />
			</span>
		</h1>

		<p class="sub">
			Від ескізу до готового об'єкту — друкуємо, моделюємо, втілюємо. Для дизайнерів,
			інженерів та всіх, кому потрібно «оте, але справжнє».
		</p>

		<button class="btn primary"> 
			Замовити друк 
		</button>
	</div>
</section>

<style lang="postcss">
	section {
		position: relative;
		overflow: hidden;

		&::before {
			position: absolute;
			content: '';
			z-index: -1;
			top: 0;
			bottom: 0;
			left: 40%;
			right: 0%;
			background-color: var(--mid);
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
		}
	}

	.sub {
		font-size: 18px;
		max-width: 460px;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	h1 {
		font-family: var(--font-display);
		font-size: 5rem;
		margin-bottom: 2rem;
		text-transform: uppercase;
		font-weight: 600;

		span {
			&:nth-child(1) {
				color: var(--accent-green);
			}
			&:nth-child(2) {
				color: var(--orange);
			}
		}
	}
</style>
