<!-- src/lib/components/admin/ProductForm.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';

	type FormMode   = 'create' | 'edit';
	type FormState  = 'idle' | 'loading' | 'success' | 'error';
	type ProductStatus = 'ACTIVE' | 'ARCHIVED';

	interface Product {
		id?: string;
		name: string;
		description: string;
		price: number;
		category: string;
		material: string;
		printTime: number;
		status: ProductStatus;
		imageUrl?: string;
		inStock: boolean;
	}

	interface Props {
		mode?: FormMode;
		product?: Partial<Product>;
		onSuccess?: () => void;
	}

	let { mode = 'create', product = {}, onSuccess }: Props = $props();

	// --- Стан ---
	let name         = $state(product.name        ?? '');
	let description  = $state(product.description ?? '');
	let price        = $state(product.price       ?? 0);
	let category     = $state(product.category    ?? '');
	let material     = $state(product.material    ?? '');
	let printTime    = $state(product.printTime   ?? 0);
	let status       = $state<ProductStatus>(product.status ?? 'ACTIVE');
	let inStock      = $state(product.inStock     ?? true);
	let imagePreview = $state(product.imageUrl    ?? '');
	let formState    = $state<FormState>('idle');
	let errorMsg     = $state('');

	const CATEGORIES = ['Декор', 'Функціональне', 'Ігрове', 'Прикраси', 'Архітектура', 'Інше'];
	const MATERIALS  = ['PLA', 'ABS', 'PETG', 'Resin', 'TPU', 'Nylon'];

	// --- Валідація (derived, без $effect) ---
	const nameValid      = $derived(name.trim().length >= 3);
	const descValid      = $derived(description.trim().length >= 10);
	const priceValid     = $derived(price > 0);
	const categoryValid  = $derived(category.length > 0);
	const materialValid  = $derived(material.length > 0);
	const printTimeValid = $derived(printTime > 0);
	const formValid      = $derived(
		nameValid && descValid && priceValid &&
		categoryValid && materialValid && printTimeValid
	);
	const isEdit = $derived(mode === 'edit');

	// --- Image ---
	function onImageInput(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		if (!file.type.startsWith('image/')) { errorMsg = 'Тільки зображення (jpg, png, webp)'; return; }
		if (file.size > 5 * 1024 * 1024)    { errorMsg = 'Максимальний розмір — 5MB'; return; }
		const reader = new FileReader();
		reader.onload = (ev) => { imagePreview = ev.target?.result as string; };
		reader.readAsDataURL(file);
		errorMsg = '';
	}

	// --- Submit ---
	async function handleSubmit() {
		if (!formValid) return;
		formState = 'loading';
		errorMsg  = '';

		try {
			const url = isEdit
				? `/api/admin/products/${product.id}`
				: '/api/admin/products';

			const res = await fetch(url, {
				method: isEdit ? 'PATCH' : 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(), description: description.trim(),
					price, category, material, printTime,
					status, imageUrl: imagePreview, inStock,
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data.message ?? 'Помилка збереження');
			}

			formState = 'success';
			onSuccess?.();
			if (!isEdit) setTimeout(() => goto('/admin/products'), 1200);
		} catch (err) {
			formState = 'error';
			errorMsg  = err instanceof Error ? err.message : 'Щось пішло не так';
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css" />
</svelte:head>

<div class="wrap">

	<!-- HEADER -->
	<div class="header">
		<div>
			<div class="header-label">{isEdit ? 'Редагування' : 'Новий товар'}</div>
			<h1 class="header-title">{isEdit ? 'Редагувати товар' : 'Додати товар'}</h1>
		</div>
		<div class="header-actions">
			<button type="button" class="btn-ghost" onclick={() => goto('/admin/products')}>
				Скасувати
			</button>
			<button
				type="button"
				class="btn-primary"
				disabled={!formValid || formState === 'loading'}
				onclick={handleSubmit}
			>
				{#if formState === 'loading'}
					<span class="spinner" aria-hidden="true"></span> Зберігаємо...
				{:else if formState === 'success'}
					<i class="ti ti-check" aria-hidden="true"></i> Збережено!
				{:else}
					<i class="ti ti-device-floppy" aria-hidden="true"></i>
					{isEdit ? 'Зберегти зміни' : 'Додати товар'}
				{/if}
			</button>
		</div>
	</div>

	<!-- ERROR ALERT -->
	{#if formState === 'error' && errorMsg}
		<div class="alert-err" role="alert">
			<i class="ti ti-alert-circle" aria-hidden="true"></i> {errorMsg}
		</div>
	{/if}

	<!-- GRID -->
	<div class="grid">

		<!-- ===== ЛІВА КОЛОНКА ===== -->
		<div class="col">

			<!-- Основна інформація -->
			<section class="card">
				<div class="card-title">Основна інформація</div>

				<div class="field">
					<label class="flabel" for="f-name">
						Назва <span class="req">*</span>
					</label>
					<input
						id="f-name"
						type="text"
						bind:value={name}
						placeholder="Дракон Сезар"
						class="finput"
						class:ok={nameValid}
						class:err={name.length > 0 && !nameValid}
					/>
					{#if name.length > 0 && !nameValid}
						<span class="hint-err">Мінімум 3 символи</span>
					{/if}
				</div>

				<div class="field">
					<label class="flabel" for="f-desc">
						Опис <span class="req">*</span>
					</label>
					<textarea
						id="f-desc"
						bind:value={description}
						placeholder="Детальний опис товару, характеристики, особливості..."
						class="finput textarea"
						class:ok={descValid}
						class:err={description.length > 0 && !descValid}
						maxlength="500"
					></textarea>
					<div class="char-count" class:over={description.length > 450}>
						{description.length} / 500
					</div>
					{#if description.length > 0 && !descValid}
						<span class="hint-err">Мінімум 10 символів</span>
					{/if}
				</div>

				<div class="field-row">
					<div class="field">
						<label class="flabel" for="f-cat">Категорія <span class="req">*</span></label>
						<select id="f-cat" bind:value={category} class="finput fselect" class:ok={categoryValid}>
							<option value="">Оберіть...</option>
							{#each CATEGORIES as cat}
								<option value={cat}>{cat}</option>
							{/each}
						</select>
					</div>
					<div class="field">
						<label class="flabel" for="f-mat">Матеріал <span class="req">*</span></label>
						<select id="f-mat" bind:value={material} class="finput fselect" class:ok={materialValid}>
							<option value="">Оберіть...</option>
							{#each MATERIALS as mat}
								<option value={mat}>{mat}</option>
							{/each}
						</select>
					</div>
				</div>
			</section>

			<!-- Ціна і час -->
			<section class="card">
				<div class="card-title">Ціна та виробництво</div>
				<div class="field-row">
					<div class="field">
						<label class="flabel" for="f-price">Ціна (₴) <span class="req">*</span></label>
						<div class="input-affix">
							<span class="prefix">₴</span>
							<input
								id="f-price"
								type="number"
								bind:value={price}
								min="0" step="10"
								placeholder="0"
								class="finput has-prefix"
								class:ok={priceValid}
								class:err={!priceValid && String(price).length > 0}
							/>
						</div>
					</div>
					<div class="field">
						<label class="flabel" for="f-time">Час друку <span class="req">*</span></label>
						<div class="input-affix">
							<input
								id="f-time"
								type="number"
								bind:value={printTime}
								min="0" step="1"
								placeholder="0"
								class="finput has-suffix"
								class:ok={printTimeValid}
							/>
							<span class="suffix">год</span>
						</div>
					</div>
				</div>
			</section>

		</div>

		<!-- ===== ПРАВА КОЛОНКА ===== -->
		<div class="col">

			<!-- Зображення -->
			<section class="card">
				<div class="card-title">Зображення</div>
				{#if imagePreview}
					<div class="img-preview">
						<img src={imagePreview} alt="Прев'ю товару" />
						<button
							type="button"
							class="img-remove"
							onclick={() => imagePreview = ''}
							aria-label="Видалити зображення"
						>
							<i class="ti ti-x" aria-hidden="true"></i>
						</button>
					</div>
				{:else}
					<label class="img-upload" for="f-image">
						<i class="ti ti-photo-up" aria-hidden="true"></i>
						<span>Завантажити фото</span>
						<span class="upload-hint">JPG, PNG, WebP · до 5MB</span>
					</label>
					<input id="f-image" type="file" accept="image/*" style="display:none" onchange={onImageInput} />
				{/if}
			</section>

			<!-- Статус -->
			<section class="card">
				<div class="card-title">Статус та наявність</div>

				<div class="field">
					<div class="flabel">Статус товару</div>
					<div class="seg-ctrl">
						<button
							type="button"
							class="seg-btn"
							class:active={status === 'ACTIVE'}
							onclick={() => status = 'ACTIVE'}
						>
							<i class="ti ti-circle-check" aria-hidden="true"></i> Активний
						</button>
						<button
							type="button"
							class="seg-btn"
							class:active={status === 'ARCHIVED'}
							onclick={() => status = 'ARCHIVED'}
						>
							<i class="ti ti-archive" aria-hidden="true"></i> Архів
						</button>
					</div>
				</div>

				<div class="field" style="margin-bottom:0">
					<label class="toggle-row" for="f-stock">
						<div>
							<div class="flabel" style="margin-bottom:1px">В наявності</div>
							<div class="toggle-hint">Товар доступний для замовлення</div>
						</div>
						<div class="toggle" class:on={inStock} onclick={() => inStock = !inStock} role="switch" aria-checked={inStock} tabindex="0">
							<div class="toggle-knob"></div>
						</div>
					</label>
					<input id="f-stock" type="checkbox" bind:checked={inStock} style="display:none" />
				</div>
			</section>

			<!-- Live прев'ю картки -->
			<section class="card">
				<div class="card-title">Прев'ю картки</div>
				<div class="preview-card">
					<div class="preview-thumb">
						{#if imagePreview}
							<img src={imagePreview} alt={name} style="width:100%;height:100%;object-fit:cover" />
						{:else}
							<i class="ti ti-cube" aria-hidden="true"></i>
						{/if}
					</div>
					<div class="preview-body">
						<div class="preview-cat">{category || 'Категорія'}</div>
						<div class="preview-name">{name || 'Назва товару'}</div>
						<div class="preview-row">
							<span class="preview-price">{price > 0 ? '₴' + price : '₴ ---'}</span>
							<span class="preview-meta">{material || '---'} · {printTime > 0 ? printTime + ' год' : '--'}</span>
						</div>
					</div>
				</div>
			</section>

		</div>
	</div>
</div>

<style>
	:global(:root) {
		--bg: #0a0a0b; --bg2: #111114; --bg3: #18181c;
		--text: #f0ede8; --text2: #9e9b94; --text3: #5a5855;
		--accent: #e8500a; --accent2: #ff6a25;
		--border: rgba(255,255,255,0.07);
		--border2: rgba(255,255,255,0.13);
		--success: #1d9e75; --error: #e24b4a;
	}

	.wrap { padding: 24px; max-width: 900px; font-family: 'Manrope', sans-serif; color: var(--text); }

	/* HEADER */
	.header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
	.header-label { font-size: 10px; letter-spacing: 2px; color: var(--accent); font-weight: 600; text-transform: uppercase; margin-bottom: 3px; }
	.header-title { font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 0.5px; font-weight: 400; }
	.header-actions { display: flex; gap: 8px; align-items: center; }

	.btn-ghost {
		background: none; border: 1px solid var(--border2); color: var(--text2);
		padding: 9px 18px; font-size: 13px; cursor: pointer; font-family: inherit; transition: all 0.2s;
	}
	.btn-ghost:hover { color: var(--text); border-color: rgba(255,255,255,0.2); }

	.btn-primary {
		background: var(--accent); color: #fff; border: none;
		padding: 9px 20px; font-size: 13px; font-weight: 600;
		cursor: pointer; font-family: inherit;
		display: flex; align-items: center; gap: 6px; transition: background 0.2s;
	}
	.btn-primary:hover:not(:disabled) { background: var(--accent2); }
	.btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }

	/* ALERT */
	.alert-err {
		background: rgba(226,75,74,0.08); border: 1px solid rgba(226,75,74,0.25);
		border-left: 3px solid var(--error); color: var(--error);
		padding: 10px 14px; font-size: 13px;
		display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
	}

	/* GRID */
	.grid { display: grid; grid-template-columns: 1fr 300px; gap: 16px; align-items: start; }
	.col  { display: flex; flex-direction: column; gap: 16px; }

	/* CARD */
	.card { background: var(--bg2); border: 1px solid var(--border); padding: 18px; }
	.card-title {
		font-size: 11px; font-weight: 600; color: var(--text);
		text-transform: uppercase; letter-spacing: 1px;
		margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border);
	}

	/* FIELDS */
	.field { margin-bottom: 12px; }
	.field:last-child { margin-bottom: 0; }
	.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

	.flabel { display: block; font-size: 12px; color: var(--text2); margin-bottom: 5px; }
	.req    { color: var(--accent); }

	.finput {
		width: 100%; background: var(--bg3); border: 1px solid var(--border2);
		color: var(--text); padding: 9px 12px; font-size: 13px;
		font-family: inherit; outline: none; transition: border-color 0.2s;
	}
	.finput:focus { border-color: var(--accent); }
	.finput.ok    { border-color: var(--success); }
	.finput.err   { border-color: var(--error); }
	.finput::placeholder { color: var(--text3); }

	.textarea { height: 96px; resize: vertical; min-height: 72px; }

	.fselect {
		cursor: pointer; appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a5855' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
		background-repeat: no-repeat; background-position: right 10px center; padding-right: 28px;
	}

	.char-count { font-size: 10px; color: var(--text3); text-align: right; margin-top: 3px; }
	.char-count.over { color: var(--error); }

	.hint-err { font-size: 11px; color: var(--error); margin-top: 3px; display: block; }

	/* AFFIX INPUTS */
	.input-affix { position: relative; display: flex; align-items: center; }
	.prefix { position: absolute; left: 10px; font-size: 13px; color: var(--text3); pointer-events: none; }
	.suffix { position: absolute; right: 10px; font-size: 11px; color: var(--text3); pointer-events: none; }
	.has-prefix { padding-left: 22px; }
	.has-suffix  { padding-right: 36px; }

	/* IMAGE */
	.img-upload {
		display: flex; flex-direction: column; align-items: center; justify-content: center;
		gap: 6px; border: 1px dashed var(--border2); padding: 24px;
		cursor: pointer; transition: border-color 0.2s; color: var(--text2); font-size: 13px; text-align: center;
	}
	.img-upload:hover { border-color: var(--accent); color: var(--text); }
	.img-upload i { font-size: 26px; color: var(--text3); }
	.upload-hint { font-size: 11px; color: var(--text3); }

	.img-preview { position: relative; border: 1px solid var(--border2); overflow: hidden; }
	.img-preview img { width: 100%; height: 140px; object-fit: cover; display: block; }
	.img-remove {
		position: absolute; top: 6px; right: 6px;
		background: rgba(0,0,0,0.65); border: none; color: #fff;
		width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;
		cursor: pointer; font-size: 13px; transition: background 0.2s;
	}
	.img-remove:hover { background: var(--error); }

	/* SEGMENTED CONTROL */
	.seg-ctrl { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 4px; }
	.seg-btn {
		background: var(--bg3); border: 1px solid var(--border2); color: var(--text2);
		padding: 8px 10px; font-size: 12px; font-weight: 500; cursor: pointer;
		font-family: inherit; display: flex; align-items: center; justify-content: center;
		gap: 5px; transition: all 0.2s;
	}
	.seg-btn.active { border-color: var(--accent); color: var(--accent); background: rgba(232,80,10,0.08); }

	/* TOGGLE */
	.toggle-row { display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 6px 0; }
	.toggle-hint { font-size: 11px; color: var(--text3); }
	.toggle {
		width: 36px; height: 20px; background: var(--border2);
		border-radius: 10px; position: relative; transition: background 0.2s;
		flex-shrink: 0; cursor: pointer;
	}
	.toggle.on { background: var(--success); }
	.toggle-knob {
		width: 14px; height: 14px; background: #fff; border-radius: 50%;
		position: absolute; top: 3px; left: 3px; transition: transform 0.2s;
	}
	.toggle.on .toggle-knob { transform: translateX(16px); }

	/* PREVIEW CARD */
	.preview-card { border: 1px solid var(--border); overflow: hidden; }
	.preview-thumb {
		height: 90px; background: var(--bg3);
		display: flex; align-items: center; justify-content: center;
		overflow: hidden; font-size: 30px; color: var(--text3);
	}
	.preview-body { padding: 10px 12px; }
	.preview-cat  { font-size: 9px; letter-spacing: 1.5px; color: var(--accent); text-transform: uppercase; margin-bottom: 3px; }
	.preview-name { font-size: 13px; font-weight: 600; color: var(--text); line-height: 1.3; margin-bottom: 6px; }
	.preview-row  { display: flex; align-items: baseline; justify-content: space-between; }
	.preview-price { font-family: 'Bebas Neue', sans-serif; font-size: 18px; letter-spacing: 0.5px; }
	.preview-meta  { font-size: 10px; color: var(--text3); }

	/* SPINNER */
	.spinner {
		width: 12px; height: 12px;
		border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
		border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block;
	}
	@keyframes spin { to { transform: rotate(360deg); } }
</style>