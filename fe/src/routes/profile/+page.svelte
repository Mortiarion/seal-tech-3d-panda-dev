<script lang="ts">
	// import Model3dIcon from "$lib/icons/Model3dIcon.svelte";

	
	type TTab = 'overview' | 'orders' | 'models' | 'images' | 'settings';

	let activeTab = $state<TTab>('overview');

	const tabTitles: Record<TTab, string> = {
		overview: 'Огляд',
		orders: 'Замовлення',
		models: 'Мої 3D моделі',
		images: 'Мої зображення',
		settings: 'Налаштування'
	};

	const user = $state({
		name: 'Іван Петренко',
		email: 'ivan@gmail.com',
		initials: 'ІП'
	});

	function setTab(tab: TTab) {
		activeTab = tab;
	}
</script>

<svelte:head>
	<title>Дашборд — SealTech3D</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css"
	/>
</svelte:head>

<div class="layout">
	<!-- SIDEBAR -->
	<aside class="sidebar">
		<div class="sidebar-logo">
			SEAL<span>TECH</span>3D
		</div>

		<div class="sidebar-user">
			<div class="avatar">{user.initials}</div>
			<div>
				<div class="sidebar-name">{user.name}</div>
				<div class="sidebar-email">{user.email}</div>
			</div>
		</div>

		<nav class="nav">
			<div class="nav-section">Головне</div>
			<div
				class="nav-item"
				class:active={activeTab === 'overview'}
				onclick={() => setTab('overview')}
			>
				<i class="ti ti-layout-dashboard"></i> Огляд
			</div>
			<div
				class="nav-item"
				class:active={activeTab === 'orders'}
				onclick={() => setTab('orders')}
			>
				<i class="ti ti-shopping-bag"></i> Замовлення
				<span class="nav-badge">3</span>
			</div>

			<div class="nav-section">AI Інструменти</div>
			<div
				class="nav-item"
				class:active={activeTab === 'models'}
				onclick={() => setTab('models')}
			>
				<i class="ti ti-cube"></i> 
				 <!-- <Model3dIcon /> -->
				Мої моделі
			</div>
			<div
				class="nav-item"
				class:active={activeTab === 'images'}
				onclick={() => setTab('images')}
			>
				<i class="ti ti-photo"></i> Мої зображення
			</div>

			<div class="nav-section">Акаунт</div>
			<div
				class="nav-item"
				class:active={activeTab === 'settings'}
				onclick={() => setTab('settings')}
			>
				<i class="ti ti-settings"></i> Налаштування
			</div>
		</nav>

		<div class="sidebar-bottom">
			<button class="logout-btn" onclick={() => alert('Вихід з акаунту')}>
				<i class="ti ti-logout"></i> Вийти з акаунту
			</button>
		</div>
	</aside>

	<!-- MAIN CONTENT -->
	<div class="main">
		<div class="topbar">
			<div class="topbar-title">{tabTitles[activeTab]}</div>
			<div class="topbar-right">
				<button class="icon-btn"><i class="ti ti-bell"></i></button>
				<button class="icon-btn"><i class="ti ti-search"></i></button>
			</div>
		</div>

		<div class="content">
			<!-- ==================== ОГЛЯД ==================== -->
			{#if activeTab === 'overview'}
				<div class="stats-grid">
					<div class="stat-card">
						<div class="stat-label">Замовлень</div>
						<div class="stat-val">12</div>
						<div class="stat-sub">+2 цього місяця</div>
					</div>
					<div class="stat-card">
						<div class="stat-label">Витрачено</div>
						<div class="stat-val">₴4<span>820</span></div>
						<div class="stat-sub">За весь час</div>
					</div>
					<div class="stat-card">
						<div class="stat-label">3D Моделей</div>
						<div class="stat-val">7</div>
						<div class="stat-sub">Збережено</div>
					</div>
					<div class="stat-card">
						<div class="stat-label">Зображень</div>
						<div class="stat-val">23</div>
						<div class="stat-sub">Згенеровано</div>
					</div>
				</div>

				<div class="section-title">
					Останні замовлення
					<a href="#">Всі замовлення →</a>
				</div>

				<div class="orders-list">
					<!-- Приклад замовлень -->
					<div class="order-item">
						<div class="order-icon"><i class="ti ti-cube"></i></div>
						<div class="order-info">
							<div class="order-name">Дракон (custom 3D)</div>
							<div class="order-meta">№ 2024-089 · 8 травня 2026</div>
						</div>
						<span class="badge badge-process">В роботі</span>
						<div class="order-price">₴680</div>
					</div>
					<!-- Додай інші замовлення аналогічно -->
				</div>
			{/if}

			<!-- ==================== ЗАМОВЛЕННЯ ==================== -->
			{#if activeTab === 'orders'}
				<div class="orders-list">
					<!-- Повний список замовлень -->
					<div class="order-item">... (твій контент)</div>
				</div>
			{/if}

			<!-- ==================== МОДЕЛІ ==================== -->
			{#if activeTab === 'models'}
				<div class="models-grid">
					<!-- Твої моделі -->
				</div>
			{/if}

			<!-- ==================== ЗОБРАЖЕННЯ ==================== -->
			{#if activeTab === 'images'}
				<div class="models-grid">
					<!-- Зображення -->
				</div>
			{/if}

			<!-- ==================== НАЛАШТУВАННЯ ==================== -->
			{#if activeTab === 'settings'}
				<div class="profile-grid">
					<!-- Форма налаштувань -->
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:root {
		--bg: #0a0a0b;
		--bg2: #111114;
		--bg3: #18181c;
		--bg4: #1e1e22;
		--text: #f0ede8;
		--text2: #9e9b94;
		--text3: #5a5855;
		--accent: #e8500a;
		--accent2: #ff6a25;
		--border: rgba(255, 255, 255, 0.07);
		--border2: rgba(255, 255, 255, 0.13);
		--success: #1d9e75;
		--error: #e24b4a;
	}
	body {
		background: var(--bg);
		font-family: 'Manrope', sans-serif;
		font-size: 14px;
		color: var(--text);
	}
	.layout {
		display: grid;
		grid-template-columns: 220px 1fr;
		min-height: 100vh;
	}

	/* SIDEBAR */
	.sidebar {
		background: var(--bg2);
		border-right: 1px solid var(--border);
		padding: 24px 0;
		display: flex;
		flex-direction: column;
	}
	.sidebar-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		letter-spacing: 2px;
		padding: 0 20px 24px;
		border-bottom: 1px solid var(--border);
		color: var(--text);
	}
	.sidebar-logo span {
		color: var(--accent);
	}
	.sidebar-user {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 20px 20px 16px;
	}
	.avatar {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 16px;
		color: #fff;
		flex-shrink: 0;
	}
	.sidebar-name {
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
		line-height: 1.3;
	}
	.sidebar-email {
		font-size: 11px;
		color: var(--text3);
	}
	.nav {
		flex: 1;
		padding: 8px 0;
	}
	.nav-section {
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--text3);
		font-weight: 600;
		text-transform: uppercase;
		padding: 16px 20px 6px;
	}
	.nav-item {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 20px;
		font-size: 13px;
		color: var(--text2);
		cursor: pointer;
		transition: all 0.15s;
		border-left: 2px solid transparent;
	}
	.nav-item:hover {
		color: var(--text);
		background: rgba(255, 255, 255, 0.03);
	}
	.nav-item.active {
		color: var(--text);
		background: rgba(232, 80, 10, 0.08);
		border-left-color: var(--accent);
	}
	.nav-item i {
		font-size: 16px;
	}
	.nav-badge {
		margin-left: auto;
		background: var(--accent);
		color: #fff;
		font-size: 10px;
		font-weight: 600;
		padding: 2px 6px;
		border-radius: 10px;
	}
	.sidebar-bottom {
		padding: 16px 20px;
		border-top: 1px solid var(--border);
	}
	.logout-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: var(--text3);
		cursor: pointer;
		transition: color 0.2s;
		background: none;
		border: none;
		font-family: inherit;
		width: 100%;
	}
	.logout-btn:hover {
		color: var(--error);
	}

	/* MAIN */
	.main {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 28px;
		border-bottom: 1px solid var(--border);
		background: var(--bg);
	}
	.topbar-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 22px;
		letter-spacing: 0.5px;
	}
	.topbar-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.icon-btn {
		background: none;
		border: 1px solid var(--border2);
		color: var(--text2);
		width: 34px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
		border-radius: 6px;
	}
	.icon-btn:hover {
		color: var(--text);
		border-color: rgba(255, 255, 255, 0.2);
	}
	.content {
		padding: 28px;
		flex: 1;
		overflow-y: auto;
	}

	/* SECTIONS */
	.section {
		display: none;
	}
	.section.active {
		display: block;
	}

	/* STATS */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		margin-bottom: 28px;
	}
	.stat-card {
		background: var(--bg2);
		border: 1px solid var(--border);
		padding: 18px 20px;
	}
	.stat-label {
		font-size: 11px;
		color: var(--text3);
		letter-spacing: 0.5px;
		text-transform: uppercase;
		margin-bottom: 8px;
	}
	.stat-val {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 32px;
		letter-spacing: 0.5px;
		line-height: 1;
	}
	.stat-val span {
		color: var(--accent);
	}
	.stat-sub {
		font-size: 11px;
		color: var(--text3);
		margin-top: 4px;
	}

	/* ORDERS */
	.section-title {
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.section-title a {
		font-size: 11px;
		color: var(--accent);
		text-decoration: none;
		font-weight: 400;
	}
	.orders-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.order-item {
		background: var(--bg2);
		border: 1px solid var(--border);
		padding: 14px 16px;
		display: flex;
		align-items: center;
		gap: 14px;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.order-item:hover {
		border-color: var(--border2);
	}
	.order-icon {
		width: 36px;
		height: 36px;
		background: var(--bg3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		color: var(--text2);
		flex-shrink: 0;
	}
	.order-info {
		flex: 1;
	}
	.order-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--text);
	}
	.order-meta {
		font-size: 11px;
		color: var(--text3);
		margin-top: 2px;
	}
	.order-price {
		font-size: 14px;
		font-weight: 600;
		color: var(--text);
	}
	.badge {
		font-size: 10px;
		font-weight: 600;
		padding: 3px 8px;
		border-radius: 3px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	.badge-success {
		background: rgba(29, 158, 117, 0.15);
		color: var(--success);
	}
	.badge-pending {
		background: rgba(232, 80, 10, 0.12);
		color: var(--accent);
	}
	.badge-process {
		background: rgba(239, 159, 39, 0.15);
		color: #ef9f27;
	}

	/* MODELS GRID */
	.models-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
	.model-card {
		background: var(--bg2);
		border: 1px solid var(--border);
		overflow: hidden;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.model-card:hover {
		border-color: var(--border2);
	}
	.model-thumb {
		height: 110px;
		background: var(--bg3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36px;
	}
	.model-info {
		padding: 12px;
	}
	.model-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--text);
		margin-bottom: 4px;
	}
	.model-date {
		font-size: 11px;
		color: var(--text3);
	}
	.model-actions {
		display: flex;
		gap: 6px;
		margin-top: 10px;
	}
	.model-btn {
		flex: 1;
		background: var(--bg3);
		border: 1px solid var(--border);
		color: var(--text2);
		padding: 6px;
		font-size: 11px;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.2s;
		text-align: center;
	}
	.model-btn:hover {
		color: var(--text);
		border-color: var(--border2);
	}
	.model-btn.primary {
		background: var(--accent);
		color: #fff;
		border-color: var(--accent);
	}

	/* PROFILE FORM */
	.profile-grid {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 32px;
		align-items: start;
	}
	.avatar-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
	.avatar-big {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 32px;
		color: #fff;
	}
	.avatar-upload {
		font-size: 12px;
		color: var(--accent);
		cursor: pointer;
		text-align: center;
	}
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}
	.form-full {
		grid-column: 1/-1;
	}
	.flabel {
		font-size: 12px;
		color: var(--text2);
		margin-bottom: 5px;
		display: block;
	}
	.finput {
		width: 100%;
		background: var(--bg3);
		border: 1px solid var(--border2);
		color: var(--text);
		padding: 10px 13px;
		font-size: 14px;
		font-family: 'Manrope', sans-serif;
		outline: none;
		transition: border-color 0.2s;
	}
	.finput:focus {
		border-color: var(--accent);
	}
	.finput::placeholder {
		color: var(--text3);
	}
	.finput:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.save-btn {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 11px 28px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.2s;
		margin-top: 4px;
	}
	.save-btn:hover {
		background: var(--accent2);
	}
	.danger-zone {
		margin-top: 32px;
		border: 1px solid rgba(226, 75, 74, 0.25);
		padding: 20px;
	}
	.danger-title {
		font-size: 13px;
		font-weight: 600;
		color: var(--error);
		margin-bottom: 6px;
	}
	.danger-sub {
		font-size: 12px;
		color: var(--text3);
		margin-bottom: 14px;
	}
	.danger-btn {
		background: none;
		border: 1px solid var(--error);
		color: var(--error);
		padding: 8px 18px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.2s;
	}
	.danger-btn:hover {
		background: var(--error);
		color: #fff;
	}
	.divider-line {
		height: 1px;
		background: var(--border);
		margin: 24px 0;
	}
	.subsection-title {
		font-size: 12px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 14px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
</style>
