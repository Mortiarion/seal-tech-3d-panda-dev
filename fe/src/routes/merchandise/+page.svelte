<script lang="ts">
	type ViewMode = 'grid' | 'list';
	type Category = 'all' | 'deco' | 'functional' | 'gaming' | 'jewelry';

	// Стани
	let activeCategory = $state<Category>('all');
	let viewMode = $state<ViewMode>('grid');
	let searchQuery = $state('');
	let toastMessage = $state('');
	let showToast = $state(false);

	// Приклад товарів
	interface Product {
		id: number;
		name: string;
		category: Category;
		price: number;
		material: string;
		printTime: string;
		thumb: string;
		badge?: 'new' | 'hot';
	}

	const products = $state<Product[]>([
		{
			id: 1,
			name: 'Дракон Сезар',
			category: 'deco',
			price: 680,
			material: 'PLA',
			printTime: '~48 год',
			thumb: '🐉',
			badge: 'hot'
		},
		{
			id: 2,
			name: 'Підставка для телефону Pro',
			category: 'functional',
			price: 320,
			material: 'PETG',
			printTime: '~12 год',
			thumb: '📱',
			badge: 'new'
		},
		{
			id: 3,
			name: 'Меч Темного лорда',
			category: 'gaming',
			price: 1200,
			material: 'PLA',
			printTime: '~72 год',
			thumb: '⚔️'
		},
		{
			id: 4,
			name: 'Вазон Мінімал',
			category: 'deco',
			price: 280,
			material: 'PLA',
			printTime: '~18 год',
			thumb: '🏺'
		},
		{
			id: 5,
			name: 'Кільце Місяць',
			category: 'jewelry',
			price: 450,
			material: 'Resin',
			printTime: '~8 год',
			thumb: '💍',
			badge: 'new'
		},
		{
			id: 6,
			name: 'Набір кубиків D&D',
			category: 'gaming',
			price: 560,
			material: 'Resin',
			printTime: '~24 год',
			thumb: '🎲'
		}
	]);

	// Фільтрація
	const filteredProducts = $derived(() => {
		return products.filter(p => {
			const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
			const matchesSearch =
				searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	});

	function addToCart(product: Product) {
		toastMessage = `«${product.name}» додано до кошика`;
		showToast = true;
		setTimeout(() => (showToast = false), 2800);
	}

	function toggleWishlist(btn: HTMLElement) {
		btn.classList.toggle('active');
	}

	function setView(mode: ViewMode) {
		viewMode = mode;
	}

	function setCategory(cat: Category) {
		activeCategory = cat;
	}
</script>

<svelte:head>
	<title>Магазин — SealTech3D</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css"
	/>
</svelte:head>

<div class="page">
	<!-- SIDEBAR FILTERS -->
	<aside class="filters">
		<div class="filters-logo">SEAL<span>TECH</span>3D</div>

		<div class="filter-section">
			<div class="filter-title">Категорія</div>
			<div class="filter-item" onclick={() => setCategory('all')}>
				<div class="filter-label" class:active={activeCategory === 'all'}>
					<div class="filter-dot" class:active={activeCategory === 'all'}></div>
					Всі товари
				</div>
				<span class="filter-count">{products.length}</span>
			</div>
			<div class="filter-item" onclick={() => setCategory('deco')}>
				<div class="filter-label" class:active={activeCategory === 'deco'}>
					<div class="filter-dot" class:active={activeCategory === 'deco'}></div>
					Декор
				</div>
				<span class="filter-count">2</span>
			</div>
			<div class="filter-item" onclick={() => setCategory('functional')}>
				<div class="filter-label" class:active={activeCategory === 'functional'}>
					<div class="filter-dot" class:active={activeCategory === 'functional'}></div>
					Функціональне
				</div>
				<span class="filter-count">1</span>
			</div>
			<div class="filter-item" onclick={() => setCategory('gaming')}>
				<div class="filter-label" class:active={activeCategory === 'gaming'}>
					<div class="filter-dot" class:active={activeCategory === 'gaming'}></div>
					Ігрове
				</div>
				<span class="filter-count">2</span>
			</div>
			<div class="filter-item" onclick={() => setCategory('jewelry')}>
				<div class="filter-label" class:active={activeCategory === 'jewelry'}>
					<div class="filter-dot" class:active={activeCategory === 'jewelry'}></div>
					Прикраси
				</div>
				<span class="filter-count">1</span>
			</div>
		</div>

		<div class="filter-section">
			<div class="filter-title">Матеріал</div>
			<div class="filter-item">
				<div class="filter-label">
					<div class="filter-dot"></div>
					PLA
				</div>
			</div>
			<div class="filter-item">
				<div class="filter-label">
					<div class="filter-dot"></div>
					PETG
				</div>
			</div>
			<div class="filter-item">
				<div class="filter-label">
					<div class="filter-dot"></div>
					ABS
				</div>
			</div>
			<div class="filter-item">
				<div class="filter-label">
					<div class="filter-dot"></div>
					Resin
				</div>
			</div>
		</div>

		<div class="filter-section">
			<div class="filter-title">Ціна (₴)</div>
			<div class="price-inputs">
				<input type="number" class="price-input" placeholder="від" min="0" />
				<input type="number" class="price-input" placeholder="до" min="0" />
			</div>
		</div>
	</aside>

	<!-- MAIN CONTENT -->
	<div class="main">
		<div class="topbar">
			<div class="search-wrap">
				<i class="ti ti-search search-icon"></i>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Пошук товарів..."
					class="search-input"
				/>
			</div>

			<span class="results-info">Знайдено {filteredProducts.length} товарів</span>

			<select class="sort-select">
				<option>За популярністю</option>
				<option>Від дешевших</option>
				<option>Від дорожчих</option>
				<option>Новинки</option>
			</select>

			<div class="view-btns">
				<button
					class="view-btn"
					class:active={viewMode === 'grid'}
					onclick={() => setView('grid')}
				>
					<i class="ti ti-layout-grid"></i>
				</button>
				<button
					class="view-btn"
					class:active={viewMode === 'list'}
					onclick={() => setView('list')}
				>
					<i class="ti ti-layout-list"></i>
				</button>
			</div>
		</div>

		<div class="catalog">
			<div class="products-grid" class:list={viewMode === 'list'}>
				{#each products as product (product.id)}
					<div class="product-card" data-cat={product.category}>
						<div class="product-thumb">
							{product.thumb}
							{#if product.badge}
								<span
									class="product-badge"
									class:badge-hot={product.badge === 'hot'}
									class:badge-new={product.badge === 'new'}
								>
									{product.badge === 'hot' ? 'Хіт' : 'Новинка'}
								</span>
							{/if}
							<button
								class="wishlist-btn"
								onclick={e => toggleWishlist(e.currentTarget)}
							>
								<i class="ti ti-heart"></i>
							</button>
						</div>
						<div class="product-info">
							<div class="product-category">
								{product.category === 'deco'
									? 'Декор'
									: product.category === 'functional'
										? 'Функціональне'
										: product.category === 'gaming'
											? 'Ігрове'
											: 'Прикраси'}
							</div>
							<div class="product-name">{product.name}</div>
							<div class="product-desc">Висока деталізація • Готово до друку</div>
							<div class="product-meta">
								<div>
									<div class="product-price">₴<span>{product.price}</span></div>
									<div class="product-material">
										{product.material} · {product.printTime}
									</div>
								</div>
								<button class="add-btn" onclick={() => addToCart(product)}>
									<i class="ti ti-shopping-cart"></i> В кошик
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="pagination">
			<button class="page-btn"><i class="ti ti-chevron-left" aria-hidden="true"></i></button>
			<button class="page-btn active">1</button>
			<button class="page-btn">2</button>
			<button class="page-btn">3</button>
			<button class="page-btn"><i class="ti ti-chevron-right" aria-hidden="true"></i></button>
		</div>
	</div>
</div>

<!-- TOAST -->
<div class="toast" class:show={showToast}>
	<i class="ti ti-circle-check" style="color:var(--success); font-size:18px"></i>
	<span>{toastMessage}</span>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600&display=swap');
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
	}
	body {
		background: var(--bg);
		font-family: 'Manrope', sans-serif;
		color: var(--text);
		font-size: 14px;
	}
	.page {
		display: grid;
		grid-template-columns: 220px 1fr;
		min-height: 100vh;
	}

	/* SIDEBAR FILTERS */
	.filters {
		background: var(--bg2);
		border-right: 1px solid var(--border);
		padding: 24px 20px;
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
	}
	.filters-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		letter-spacing: 2px;
		color: var(--text);
		margin-bottom: 24px;
		padding-bottom: 16px;
		border-bottom: 1px solid var(--border);
	}
	.filters-logo span {
		color: var(--accent);
	}
	.filter-section {
		margin-bottom: 24px;
	}
	.filter-title {
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--text3);
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 12px;
	}
	.filter-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 7px 0;
		cursor: pointer;
		transition: color 0.15s;
	}
	.filter-item:hover .filter-label {
		color: var(--text);
	}
	.filter-label {
		font-size: 13px;
		color: var(--text2);
		display: flex;
		align-items: center;
		gap: 8px;
		transition: color 0.15s;
	}
	.filter-label.active {
		color: var(--text);
	}
	.filter-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--border2);
		flex-shrink: 0;
		transition: background 0.15s;
	}
	.filter-dot.active {
		background: var(--accent);
	}
	.filter-count {
		font-size: 11px;
		color: var(--text3);
	}
	.price-range {
		margin-top: 8px;
	}
	.price-inputs {
		display: flex;
		gap: 8px;
		margin-top: 8px;
	}
	.price-input {
		flex: 1;
		background: var(--bg3);
		border: 1px solid var(--border2);
		color: var(--text);
		padding: 7px 10px;
		font-size: 13px;
		font-family: 'Manrope', sans-serif;
		outline: none;
		width: 100%;
	}
	.price-input:focus {
		border-color: var(--accent);
	}
	.price-input::placeholder {
		color: var(--text3);
	}

	/* MAIN */
	.main {
		display: flex;
		flex-direction: column;
	}
	.topbar {
		padding: 16px 24px;
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		position: sticky;
		top: 0;
		background: var(--bg);
		z-index: 5;
	}
	.search-wrap {
		flex: 1;
		max-width: 340px;
		position: relative;
	}
	.search-input {
		width: 100%;
		background: var(--bg2);
		border: 1px solid var(--border2);
		color: var(--text);
		padding: 9px 13px 9px 36px;
		font-size: 13px;
		font-family: 'Manrope', sans-serif;
		outline: none;
		transition: border-color 0.2s;
	}
	.search-input:focus {
		border-color: var(--accent);
	}
	.search-input::placeholder {
		color: var(--text3);
	}
	.search-icon {
		position: absolute;
		left: 11px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 16px;
		color: var(--text3);
	}
	.sort-select {
		background: var(--bg2);
		border: 1px solid var(--border2);
		color: var(--text2);
		padding: 8px 12px;
		font-size: 13px;
		font-family: 'Manrope', sans-serif;
		outline: none;
		cursor: pointer;
	}
	.view-btns {
		display: flex;
		gap: 4px;
	}
	.view-btn {
		background: none;
		border: 1px solid var(--border2);
		color: var(--text3);
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.15s;
		font-size: 16px;
	}
	.view-btn.active {
		border-color: var(--accent);
		color: var(--accent);
	}
	.results-info {
		font-size: 12px;
		color: var(--text3);
	}

	/* CATALOG */
	.catalog {
		padding: 20px 24px;
	}
	.products-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}
	.products-grid.list {
		grid-template-columns: 1fr;
	}

	/* PRODUCT CARD — GRID */
	.product-card {
		background: var(--bg2);
		border: 1px solid var(--border);
		overflow: hidden;
		cursor: pointer;
		transition: border-color 0.2s;
		position: relative;
	}
	.product-card:hover {
		border-color: var(--border2);
	}
	.product-thumb {
		height: 160px;
		background: var(--bg3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 52px;
		position: relative;
		overflow: hidden;
	}
	.product-badge {
		position: absolute;
		top: 10px;
		left: 10px;
		font-size: 10px;
		font-weight: 600;
		padding: 3px 8px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	.badge-new {
		background: rgba(29, 158, 117, 0.2);
		color: var(--success);
	}
	.badge-hot {
		background: rgba(232, 80, 10, 0.2);
		color: var(--accent);
	}
	.wishlist-btn {
		position: absolute;
		top: 8px;
		right: 8px;
		background: var(--bg2);
		border: 1px solid var(--border2);
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 15px;
		color: var(--text3);
		transition: all 0.2s;
	}
	.wishlist-btn.active {
		color: var(--accent);
		border-color: var(--accent);
	}
	.product-info {
		padding: 14px;
	}
	.product-category {
		font-size: 10px;
		letter-spacing: 1.5px;
		color: var(--accent);
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	.product-name {
		font-size: 14px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 4px;
		line-height: 1.3;
	}
	.product-desc {
		font-size: 12px;
		color: var(--text3);
		margin-bottom: 10px;
		line-height: 1.5;
	}
	.product-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.product-price {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 22px;
		letter-spacing: 0.5px;
	}
	.product-price span {
		color: var(--accent);
	}
	.product-material {
		font-size: 10px;
		color: var(--text3);
		margin-top: 2px;
	}
	.add-btn {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 8px 14px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		font-family: 'Manrope', sans-serif;
		transition: background 0.2s;
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.add-btn:hover {
		background: var(--accent2);
	}

	/* PRODUCT CARD — LIST */
	.products-grid.list .product-card {
		display: grid;
		grid-template-columns: 120px 1fr auto;
		align-items: center;
	}
	.products-grid.list .product-thumb {
		height: 100%;
		min-height: 100px;
	}
	.products-grid.list .product-info {
		padding: 16px;
	}
	.products-grid.list .product-desc {
		display: block;
	}
	.products-grid.list .product-actions {
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 8px;
		border-left: 1px solid var(--border);
	}

	/* PAGINATION */
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		padding: 24px;
	}
	.page-btn {
		background: none;
		border: 1px solid var(--border2);
		color: var(--text2);
		width: 34px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 13px;
		font-family: 'Manrope', sans-serif;
		transition: all 0.15s;
	}
	.page-btn.active {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}
	.page-btn:hover:not(.active) {
		border-color: rgba(255, 255, 255, 0.2);
		color: var(--text);
	}

	/* CART TOAST */
	.toast {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background: var(--bg2);
		border: 1px solid var(--border2);
		border-left: 3px solid var(--success);
		padding: 12px 16px;
		font-size: 13px;
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 10px;
		opacity: 0;
		transform: translateY(8px);
		transition: all 0.25s;
		pointer-events: none;
		z-index: 100;
	}
	.toast.show {
		opacity: 1;
		transform: translateY(0);
	}
</style>
