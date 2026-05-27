<section class="border-bottom" id="contacts">
    <div class="container">
        <div class="contact-section">
            <div>
                <p class="main-section-label">
					Контакти
				</p>

                <h3 class="title">
					Поговоримо про <br />
					
					<span>
						твій проєкт
					</span>
				</h3>

                <p class='subtitle'>
                    Розкажи нам про свої ідеї, а ми допоможемо втілити їх у життя. 
					Ми відкриті до нових проєктів та співпраці!
                </p>

                <div class="info">
                    <div class="item">
                        <div class="dot"></div>

						<a 
							href="tell:+380668038198" 
							target="_blank"
							title='Поговоримо?'
						>
							+380 66 803 8198
						</a>
                    </div>
					
                    <div class="item">
                        <div class="dot"></div>

                        <a 
							href="https://t.me/SealTech3D" 
							target="_blank"
							title='Нашишеш нам?'
						>
                            @SealTech3D в Telegram
                        </a>
                    </div>

                    <div class="item">
                        <div class="dot"></div>

                        <a 
							href="mailto:sealtech3d@gmail.com" 
							target="_blank"
							title='Напишеш на пошту?'
						>
                            sealtech3d@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <form class="contact-form" action='' name='contact' method='POST'>
                <input 
					class="form-input" 
					placeholder="Ваше ім'я" 
					id="name"
					name="name" 
					required
					minlength="4"
					maxlength="8"
					size="10"
					autocomplete='on' // тут якась байда тре буде розібратись як це говно працює ато браузер ругається
				/>

                <input 
					class="form-input" 
					placeholder="Email або Telegram" 
					id="email"
					name="email"
					required
					minlength="4"
					maxlength="8"
					size="10"
					autocomplete='on' // тут якась байда тре буде розібратись як це говно працює ато браузер ругається
				/>

                <textarea 
					class="form-input" 
					placeholder="Опишіть ваш проєкт..." 
					id="project"
					name="project"
					autocomplete='on' // тут якась байда тре буде розібратись як це говно працює ато браузер ругається
				></textarea>

                <button class="btn primary" style="width:100%">
					Надіслати запит
				</button>
            </form>
        </div>

    </div>
</section>

<style lang="postcss">
	.contact-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;

		.title {
			font-family: var(--font-display);
			font-size: 3rem;
			margin-bottom: 1rem;
	
			span {
				color: var(--accent-green);
			}
		}
	
		.subtitle {
			color: var(--text2);
			font-size: 1rem;
			max-width: 320px;
			line-height: 1.5;
		}
	
		.info {
			margin-top: 2rem;

			.item {
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			.dot {
				width: 6px;
				height: 6px;
				background: var(--accent-orange2);
			}
		}
	
		form {
			.form-input {
				background: var(--bg2);
				border: 1px solid var(--border);
				color: var(--gray);
				padding: 12px 14px;
				font-size: 14px;
				transition: border-color 1.3s, box-shadow 1.3s, scale 1.3s;
				outline: none;
				box-shadow: none;
				
				&:active {
					border-color: var(--accent-green);
					box-shadow: var(--accent-green) 0px 0px 30px, var(--accent-orange) 0px 0px 30px;
					scale: 1.02;
				}
				
				&:focus {
					box-shadow: var(--accent-green) 0px 0px 30px, var(--accent-orange) 0px 0px 30px;
				}
		
				&::placeholder {
					color: var(--gray);
				}
			}
		
			textarea.form-input {
				height: 100px;
				resize: none;
			}
		}

		.info,
		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	
	}
</style>
