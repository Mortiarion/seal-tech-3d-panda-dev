<svelte:head>
    <title>
        Авторизація - SealTech3D
    </title>
</svelte:head>

<script lang='ts'>
    type TTab = 'register' | 'login';

    let activeTab = $state<TTab>('register');

    let firstName = $state('');
    let lastName = $state('');
    let regEmail = $state('');
    let regPwd = $state('');
    let regConfirm = $state('');
    let isAgreeTerms = $state(false);
    let isShowRegPwd = $state(false);

    let loginEmail = $state('');
    let loginPwd = $state('');
    let isShowLoginPwd = $state(false);

    const emailValid = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail));
	const passwordsMatch = $derived(regConfirm.length > 0 && regConfirm === regPwd);
    const passwordStrength = $derived((): number => {
		if (!regPwd) return 0;
		let s = 0;
		if (regPwd.length >= 8) s++;
		if (/[A-Z]|[0-9]/.test(regPwd)) s++;
		if (/[^a-zA-Z0-9]/.test(regPwd)) s++;
		return s;
	});

    const strengthLabel = $derived(['', 'Слабкий', 'Середній', 'Надійний'][passwordStrength()] ?? '');

    const regFormValid = $derived(
        firstName.trim().length >= 2 &&
        emailValid &&
        regPwd.length >= 8 &&
        passwordsMatch &&
        isAgreeTerms
    )

    const loginFormValid = $derived(
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail) && loginPwd.length >= 6
	);

	// --- Handlers ---
	function handleRegister() {
		if (!regFormValid) return;
		// TODO: fetch('/api/auth/register', { method: 'POST', body: ... })
		console.log('register', { firstName, lastName, email: regEmail });
	}

	function handleLogin() {
		if (!loginFormValid) return;
		// TODO: fetch('/api/auth/login', { method: 'POST', body: ... })
		console.log('login', { email: loginEmail });
	}
</script>

<section>
    <a href="/" class="logo">
        <span>
            SEAL
        </span>

        <span>
            TECH
        </span>
        3D
    </a>

    <div class="card">
        <h1 class="card-title">
            {activeTab === 'register' ? 'Створити акаунт' : 'З поверненням'}
        </h1>

        <p class="card-sub">
            {activeTab === 'register' ? 'Приєднуйся до SealTech3D' : 'Увійди у свій акаунт'}
        </p>

        <div class="tabs">
            <button 
                class="tab"
                class:active={activeTab === 'register'}
                onclick={ () => activeTab = 'register' }
            >
                Реєстрація
            </button>

            <button 
                class="tab"
                class:active={activeTab === 'login'} 
                onclick={ () => activeTab = 'login'}
            >
                Вхід
            </button>
        </div>

        {#if activeTab === 'register'}
            <form 
                action=""
                onsubmit={e => {
                    e.preventDefault();
                    handleRegister();
                }}
            >
                <div class="field-row">
                    <div class="field">
                        <label for="firstName" class="field-label">
                            Ім'я
                        </label>

                        <input
                            id="firstName"
                            type="text"
                            placeholder="Введіть ваше ім'я"
                            class="field-input"
                            bind:value={ firstName }
                            class:success={ firstName.trim().length >= 2 }
                        >
                    </div>

                    <div class="field">
                        <label for="lastName" class="field-label">
                            Прізвище
                        </label>

                        <input
                            id="lastName"
                            type="text"
                            placeholder="Введіть ваше прізвище"
                            class="field-input"
                            bind:value={ lastName }
                            class:success={ lastName.trim().length >= 2}
                        >
                    </div>
                </div>

                <div class="field">
                    <label for="regEmail" class="field-label">
                        Email
                    </label>

                    <div class="field-wrap">
                        <input 
                            type="email"
                            placeholder='Введіть ваш email'
                            class="field-input"
                            bind:value={ regEmail }
                            class:success={ emailValid }
                            class:error={ regEmail.length > 0 && !emailValid }
                        >

                        {#if emailValid}
                            ok
                        {/if}
                    </div>
                </div>

                <div class="field">
                    <label for="regPwd" class="field-label">
                        Пароль
                    </label>

                    <div class="field-wrap">
                        <input 
                            id='regPwd'
                            type={ isShowRegPwd ? 'text' : 'password' }
                            bind:value={ regPwd }
                            placeholder="Мінімум 8 символів"
                            class='field-input'
                        >

                        <!-- тут потрібно іконки для видимого чи не видимого пароля при вводі -->
                    </div>

                    {#if regPwd.length > 0}
                        <div class="strength">
                            <div class="strength-bars">
                                <div 
                                    class="bar"
                                    class:weak={ passwordStrength() === 1 }
                                    class:medium={ passwordStrength() === 2 }
                                    class:strong={ passwordStrength() === 3 }
                                ></div>

                                <div 
                                    class="bar"
                                    class:medium={passwordStrength() >= 2}
                                    class:strong={passwordStrength() === 3}
                                ></div>

                                <div 
                                    class="bar"
                                    class:strong={passwordStrength() === 3}
                                ></div>
                            </div>

                            <span class="strength-label">
                                { strengthLabel }
                            </span>
                        </div>
                    {/if}
                </div>

                <div class="field">
                    <label for="regConfirm" class="field-label">
                        Підтвердіть пароль
                    </label>

                    <div class="field-wrap">
                        <input 
                            type={ isShowRegPwd ? 'text' : 'password' }
                            bind:value={ regConfirm }
                            id='regConfirm'
                            placeholder="Повторити пароль"
                            class='field-input'
                            class:success={ passwordStrength }
                            class:error={ regConfirm.length > 0 && !passwordsMatch }
                        >

                        {#if passwordsMatch}
                            ic
                        {/if}
                    </div>

                    {#if regConfirm.length > 0 && !passwordsMatch}
                        <span class="hint-error">
                            Паролі не співпадають
                        </span>
                    {/if}
                </div>

                <div class="agree">
                    <input 
                        type="checkbox" 
                        name="" 
                        id="terms"
                        bind:checked={ isAgreeTerms }
                    >

                    <label for="terms">
                        Погоджуюсь з 
                        <a href="/terms">умовами</a> 
                        та
                        <a href="/privacy">
                            політикою конфеденційності
                        </a>
                    </label>
                </div>

                <button 
                    type="submit"
                    class='btn-submit'
                    disabled={ !regFormValid }
                >
                    Зареєструватись
                </button>

                <div class="divider">
                    або
                </div>

                <button type="button" class="btn-social">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Продовжити з Google
                </button>
            </form>
        {/if}

        {#if activeTab === 'login'}
            <form 
                action=""
                onsubmit={e => {
                    e.preventDefault();
                    handleRegister();
                }}
            >
                <div class="field">
                    <label for="loginEmail" class="field-label">
                        Email
                    </label>

                    <div class="field-wrap">
                        <input 
                            type="email"
                            id='loginEmail'
                            bind:value={ loginEmail }
                            placeholder="Введіть ваш EMAIL"
                            class="field-input"
                            class:success={ /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail) }
                        >
                    </div>
                </div>

                <div class="field">
                    <label for="loginPwd" class='field-label'>
                        Пароль
                    </label>

                    <input 
                        type={ isShowLoginPwd ? 'text' : 'password' }
                        id="loginPwd"
                        bind:value={ loginPwd }
                        placeholder="Ваш пароль"
                        class="field-input"
                    >
                    <!-- тут теж має бути кнопка показу видимості пароля і навпаки -->
                </div>

                <a href="/forgot-password" class='link-muted'>
                    Забули пароль?
                </a>

                <button
                    class="btn-submit"
                    // disabled={ !loginFormValid }
                >
                    Увійти
                </button>

                <div class="divider">
                    або
                </div>

                <button type="button" class="btn-social">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					Продовжити з Google
				</button>
            </form>
        {/if}
    </div>
</section>

<style lang='postcss'>

    section {
        max-width: 480px;
        margin: 0 auto;
        padding: 2rem;
        font-family: var(--font-display);
        color: var(--text);

        .logo {
            font-size: 1.5rem;
            letter-spacing: var(--letter-spacing-title);
            text-align: center;
            margin-bottom: 2rem;
            display: inline-block;
        }

        .card {
            background-color: var(--bg2);
            border: 1px solid var(--border);
            padding: 2rem;
            border-radius: 1rem;

            .card-title {
                font-size: 2rem;
                margin-bottom: 0.25rem;
            }

            .card-sub {
                font-size: 0.75rem;
                color: var(--text2);
                margin-bottom: 1.5rem;
            }

            .tabs {
                display: flex;
                border-bottom: 1px solid var(--border);
                margin-bottom: 1.5rem;

                .tab {
                    flex: 1;
                    padding: 0.75rem 0;
                    font-size: 0.875rem;
                    color: var(--text3);
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    transition: all .3s;

                    &.active {
                        color: var(--accent-orange);
                        border-color: var(--accent-orange);
                    }
                }
            }

            form {
                .field-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0.75rem;
                }

                .field {
                    margin-bottom: 1rem;

                    .field-label {
                        font-size: 0.75rem;
                        color: var(--text2);
                        margin-bottom: 0.5rem;
                        display: block;
                    }

                    .field-input {
                        width: 100%;
                        background-color: var(--bg3);
                        border: 1px solid var(--border2);
                        padding: 0.75rem 0.875rem;
                        font-size: 0.875rem;
                        outline: none;
                        transition: border-color .3s;
                        border-radius: 0.5rem;

                        &:focus {
                            border-color: var(--accent-orange);
                        }

                        &::placeholder {
                            color: var(--text3);
                        }

                        &.success {
                            border-color: var(--success);
                        }

                        &.error {
                            border-color: var(--error);
                        }
                    }

                    .field-wrap {
                        position: relative;
                    }
                }

                .hint-error {
                    font-size: 0.875rem;
                    color: var(--error);
                    margin-top: 0.25rem;
                    display: block;
                }

                .strength {
                    margin-top: 8px;
                }
                .strength-bars {
                    display: flex;
                    gap: 4px;
                    margin-bottom: 4px;
                }
                .bar {
                    height: 3px;
                    flex: 1;
                    background: var(--border2);
                    border-radius: 2px;
                    transition: background 0.3s;
                }
                .bar.weak {
                    background: var(--error);
                }
                .bar.medium {
                    background: #ef9f27;
                }
                .bar.strong {
                    background: var(--success);
                }
                .strength-label {
                    font-size: 11px;
                    color: var(--text3);
                }

                .agree {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    margin: 16px 0;
                }
                .agree input {
                    margin-top: 2px;
                    accent-color: var(--accent-orange);
                    flex-shrink: 0;
                }
                .agree label {
                    font-size: 12px;
                    color: var(--text2);
                    line-height: 1.5;
                }
                .agree a {
                    color: var(--accent-orange);
                    text-decoration: none;
                }

                .btn-submit {
                    width: 100%;
                    background: var(--accent-orange);
                    color: #fff;
                    border: none;
                    padding: 13px;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-top: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: background 0.2s;
                    font-family: inherit;
                }
                .btn-submit:hover:not(:disabled) {
                    background: var(--accent-orange2);
                }
                .btn-submit:disabled {
                    opacity: 0.45;
                    cursor: not-allowed;
                }

                .btn-social {
                    width: 100%;
                    background: var(--bg3);
                    border: 1px solid var(--border2);
                    color: var(--text2);
                    padding: 11px;
                    font-size: 13px;
                    font-weight: 500;
                    border-radius: 8px;
                    cursor: pointer;
                    font-family: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition:
                        color 0.2s,
                        border-color 0.2s;
                }
                .btn-social:hover {
                    color: var(--text);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .divider {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin: 20px 0;
                    color: var(--text3);
                    font-size: 12px;
                }
                .divider::before,
                .divider::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: var(--border);
                }

                .link-muted {
                    font-size: 12px;
                    color: var(--text3);
                    text-decoration: none;
                }
                .link-muted:hover {
                    color: var(--accent-orange);
                }
            }
        }
    }
</style>
