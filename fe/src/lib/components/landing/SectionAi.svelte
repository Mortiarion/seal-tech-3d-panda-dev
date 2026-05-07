<section class="ai-section border-bottom">
    <div class="container">
        <p class="label">
            Штучний інтелект
        </p>

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
                <div class="ai-badge">
                    Текст → Зображення
                </div>

                <h3>
                    Генерація картинки
                </h3>

                <p>
                    Опиши словами що хочеш побачити — AI намалює за секунди. 
                    Ідеально для концептів та
                    референсів.
                </p>

                <div class="ai-demo">
                    <input class="ai-input" placeholder="Дракон зі збіркою книг..." />
                    <button class="ai-btn">
                        Генерувати
                    </button>
                </div>
            </div>

            <div class="ai-card">
                <div class="ai-badge">
                    Зображення → 3D
                </div>

                <h3>
                    Конвертація в 3D
                </h3>

                <p>
                    Завантаж будь-яке зображення і отримай 3D-модель, 
                    готову до друку. Магія, що працює.
                </p>

                <div
                    class="ai-demo"
                    style="cursor:pointer;justify-content:center;flex-direction:column;gap:4px;padding:20px"
                >
                    <div style="font-size:24px">⬆</div>

                    <div style="font-size:12px;color:var(--white)">
                        Перетягни зображення або натисни
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
	/* AI SECTION */
	.ai-section {
		/* padding: 64px 32px; */
		/* border-bottom: 1px solid var(--border); */
		/* background: var(--mid); */
	}
	.ai-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 32px;
	}
	.ai-card {
		background: var(--mid);
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
		color: var(--gray);
		line-height: 1.6;
	}
	.ai-demo {
		margin-top: 20px;
		background: var(--mid);
		border: 1px solid var(--border);
		padding: 14px 16px;
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.ai-input {
		flex: 1;
		/* background: none; */
		border: none;
		/* color: var(--text2); */
		font-size: 13px;
		/* font-family: 'Manrope', sans-serif; */
		outline: none;
	}
	.ai-btn {
		background: var(--accent);
		/* color: #fff; */
		border: none;
		padding: 6px 14px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		/* font-family: 'Manrope', sans-serif; */
	}
</style>
