<section class=" border-bottom">
    <div class="container">
        <div class="contact-section">

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
        </div>

    </div>
</section>

<style lang="postcss">
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
		/* color: var(--white); */
	}
	.contact-dot {
		width: 6px;
		height: 6px;
		background: var(--accent);
		/* flex-shrink: 0; */
	}
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.form-input {
		/* background: var(--bg2); */
		border: 1px solid var(--border);
		color: var(--gray);
		padding: 12px 14px;
		font-size: 14px;
		/* font-family: 'Manrope', sans-serif; */
		/* outline: none; */
		width: 100%;
		transition: border-color 0.2s;
	}
	.form-input:focus {
		border-color: var(--accent);
	}
	.form-input::placeholder {
		color: var(--gray);
	}
	textarea.form-input {
		height: 100px;
		/* resize: none; */
	}
</style>
