<svelte:head>
	<title>Генерація — SealTech3D</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css" />
</svelte:head>

<script lang="ts">
	type Mode = 'image' | '3d';

	let currentMode = $state<Mode>('image');

	// Image mode
	let imgPrompt = $state('');
	let imgStyle = $state('Реалістичний');
	let imgRatio = $state('1:1 (квадрат)');
	let imgVariants = $state(4);

	// 3D mode
	let threeDPrompt = $state('');
	let threeDFormat = $state('.STL (друк)');
	let threeDDetail = $state('Висока');

	let uploadedImage = $state<string | null>(null);
	let isGenerating = $state(false);
	let currentView = $state<'idle' | 'loading' | 'results-image' | 'results-3d'>('idle');

	let toastMsg = $state('');
	let showToast = $state(false);

	// Приклади промптів
	const examples = [
		'Дракон зі збіркою стародавніх книг у темній бібліотеці, фентезі стиль',
		'Космічний корабель у стилі steampunk, детальний',
		'Середньовічний замок на скелі в тумані, sunset',
		'Кіберпанк місто вночі, неон, дощ'
	];

	function fillExample(text: string) {
		if (currentMode === 'image') {
			imgPrompt = text;
		} else {
			threeDPrompt = text;
		}
	}

	function generate() {
		isGenerating = true;
		currentView = 'loading';

		setTimeout(() => {
			isGenerating = false;
			currentView = currentMode === 'image' ? 'results-image' : 'results-3d';
		}, 2800);
	}

	// function showToast(message: string) {
	// 	toastMsg = message;
	// 	showToast = true;
	// 	setTimeout(() => showToast = false, 2800);
	// }

	function handleUpload(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (ev) => {
			uploadedImage = ev.target?.result as string;
		};
		reader.readAsDataURL(file);
	}

	function removeUpload() {
		uploadedImage = null;
		const input = document.getElementById('file-input') as HTMLInputElement;
		if (input) input.value = '';
	}
</script>

<div class="page">
	<div class="page-label">AI Інструменти</div>
	<h1 class="page-title">Генерація<br>зображень та 3D</h1>
	<p class="page-sub">Опиши ідею — AI створить зображення або 3D модель для друку</p>

	<!-- Mode Tabs -->
	<div class="mode-tabs">
		<button class="mode-tab" class:active={currentMode === 'image'} onclick={() => currentMode = 'image'}>
			<i class="ti ti-photo"></i> Зображення
		</button>
		<button class="mode-tab" class:active={currentMode === '3d'} onclick={() => currentMode = '3d'}>
			<i class="ti ti-cube"></i> 3D Модель
		</button>
	</div>

	<div class="gen-grid">
		<!-- INPUT PANEL -->
		<div>
			<!-- IMAGE MODE -->
			{#if currentMode === 'image'}
				<div class="panel">
					<div class="panel-title">Опис зображення</div>

					<div class="prompt-wrap">
						<textarea
							bind:value={imgPrompt}
							placeholder="Дракон зі збіркою стародавніх книг у темній бібліотеці..."
							class="prompt-textarea"
							maxlength="500"
						></textarea>
						<span class="prompt-count">{imgPrompt.length} / 500</span>
					</div>

					<div class="examples-label">Приклади промптів:</div>
					<div class="examples">
						{#each examples as ex}
							<button class="ex-btn" onclick={() => fillExample(ex)}>{ex}</button>
						{/each}
					</div>

					<div class="options-grid">
						<div class="field">
							<label class="flabel">Стиль</label>
							<select bind:value={imgStyle} class="fselect">
								<option>Реалістичний</option>
								<option>Ілюстрація</option>
								<option>3D рендер</option>
								<option>Аніме</option>
								<option>Акварель</option>
							</select>
						</div>
						<div class="field">
							<label class="flabel">Пропорції</label>
							<select bind:value={imgRatio} class="fselect">
								<option>1:1 (квадрат)</option>
								<option>16:9 (широкий)</option>
								<option>9:16 (вертикальний)</option>
							</select>
						</div>
					</div>

					<div class="field">
						<label class="flabel">
							Кількість варіантів: <span style="color:var(--accent)">{imgVariants}</span>
						</label>
						<input
							type="range"
							min="1"
							max="4"
							bind:value={imgVariants}
							class="count-slider"
						/>
					</div>

					<button class="gen-btn" disabled={isGenerating} onclick={generate}>
						<i class="ti ti-sparkles"></i>
						{isGenerating ? 'Генеруємо...' : 'Генерувати зображення'}
					</button>
				</div>
			{/if}

			<!-- 3D MODE -->
			{#if currentMode === '3d'}
				<div class="panel">
					<div class="panel-title">Джерело для 3D моделі</div>

					{#if uploadedImage}
						<div class="upload-preview">
							<img src={uploadedImage} alt="Прев'ю" />
							<button class="upload-remove" onclick={removeUpload}>
								<i class="ti ti-x"></i>
							</button>
						</div>
					{:else}
						<div class="upload-zone" onclick={() => document.getElementById('file-input')?.click()}>
							<i class="ti ti-photo-up"></i>
							<div class="upload-zone-title">Завантажити зображення</div>
							<div class="upload-zone-sub">JPG, PNG, WebP · до 10MB</div>
						</div>
						<input type="file" id="file-input" accept="image/*" style="display:none" onchange={handleUpload} />
					{/if}

					<div style="display:flex;align-items:center;gap:12px;margin:16px 0">
						<div style="flex:1;height:1px;background:var(--border)"></div>
						<span style="font-size:11px;color:var(--text3)">або опиши словами</span>
						<div style="flex:1;height:1px;background:var(--border)"></div>
					</div>

					<div class="prompt-wrap">
						<textarea
							bind:value={threeDPrompt}
							placeholder="Дракон, сидить, деталізований, для 3D друку..."
							class="prompt-textarea"
							style="height:80px"
							maxlength="300"
						></textarea>
						<span class="prompt-count">{threeDPrompt.length} / 300</span>
					</div>

					<div class="options-grid">
						<div class="field">
							<label class="flabel">Формат</label>
							<select bind:value={threeDFormat} class="fselect">
								<option>.STL (друк)</option>
								<option>.OBJ</option>
								<option>.GLB</option>
							</select>
						</div>
						<div class="field">
							<label class="flabel">Деталізація</label>
							<select bind:value={threeDDetail} class="fselect">
								<option>Висока</option>
								<option>Середня</option>
								<option>Низька</option>
							</select>
						</div>
					</div>

					<button class="gen-btn" disabled={isGenerating} onclick={generate}>
						<i class="ti ti-cube"></i>
						{isGenerating ? 'Генеруємо 3D...' : 'Генерувати 3D модель'}
					</button>
				</div>
			{/if}
		</div>

		<!-- RESULT PANEL -->
		<div class="result-panel">
			<div class="rp-header">
				<div class="rp-title">Результат</div>
				<div class="rp-actions">
					<button class="rp-btn" onclick={generate}><i class="ti ti-refresh"></i></button>
				</div>
			</div>

			<!-- Idle -->
			{#if currentView === 'idle'}
				<div class="rp-idle">
					<i class="ti ti-sparkles"></i>
					<div class="rp-idle-title">Готовий до генерації</div>
					<div class="rp-idle-sub">Введи опис і натисни кнопку генерації</div>
				</div>
			{/if}

			<!-- Loading -->
			{#if currentView === 'loading'}
				<div class="rp-loading">
					<div class="loader-ring"></div>
					<div class="loading-text">Генеруємо...</div>
					<div class="loading-step">Підключаємо AI модель</div>
				</div>
			{/if}

			<!-- Image Results -->
			{#if currentView === 'results-image'}
				<div class="rp-results">
					<div class="results-grid">
						<!-- 4 приклади результатів -->
						<div class="result-img">
							<img src="https://picsum.photos/seed/ai1/600/600" alt="result" />
							<div class="result-img-overlay">
								<button class="result-img-btn" onclick={() => showToast('Збережено')}><i class="ti ti-download"></i></button>
								<button class="result-img-btn" onclick={() => { currentMode = '3d'; currentView = 'idle'; }}><i class="ti ti-cube"></i></button>
							</div>
						</div>
						<!-- Повтори для інших 3-х результатів -->
					</div>
				</div>
			{/if}

			<!-- 3D Result -->
			{#if currentView === 'results-3d'}
				<div class="result-3d">
					<div class="model-preview">
						<i class="ti ti-cube"></i>
						<div class="model-preview-sub">3D модель готова</div>
					</div>
					<div class="model-actions">
						<button class="model-btn ghost" onclick={() => showToast('Завантажено')}>
							<i class="ti ti-download"></i> Завантажити
						</button>
						<button class="model-btn primary" onclick={() => showToast('Додано в кошик')}>
							<i class="ti ti-shopping-cart"></i> Замовити друк
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<!-- TOAST -->
<div class="toast" class:show={showToast}>
	<i class="ti ti-circle-check"></i>
	<span>{toastMsg}</span>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0a0a0b;--bg2:#111114;--bg3:#18181c;--bg4:#1e1e22;
  --text:#f0ede8;--text2:#9e9b94;--text3:#5a5855;
  --accent:#e8500a;--accent2:#ff6a25;
  --border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.13);
  --success:#1d9e75;--error:#e24b4a;
}
body{background:var(--bg);font-family:'Manrope',sans-serif;color:var(--text);font-size:14px;min-height:100vh}

.page{max-width:900px;margin:0 auto;padding:32px 20px}

.page-label{font-size:11px;letter-spacing:3px;color:var(--accent);font-weight:600;text-transform:uppercase;margin-bottom:8px}
.page-title{font-family:'Bebas Neue',sans-serif;font-size:52px;letter-spacing:0.5px;line-height:1;margin-bottom:8px}
.page-sub{font-size:14px;color:var(--text2);margin-bottom:32px}

/* MODE TABS */
.mode-tabs{display:flex;gap:0;margin-bottom:28px;border:1px solid var(--border2);width:fit-content}
.mode-tab{padding:10px 24px;font-size:13px;font-weight:500;font-family:'Manrope',sans-serif;background:none;border:none;color:var(--text2);cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:7px;border-right:1px solid var(--border2)}
.mode-tab:last-child{border-right:none}
.mode-tab.active{background:var(--accent);color:#fff}
.mode-tab i{font-size:16px}

/* MAIN GRID */
.gen-grid{display:grid;grid-template-columns:1fr 340px;gap:16px;align-items:start}

/* INPUT PANEL */
.panel{background:var(--bg2);border:1px solid var(--border);padding:20px}
.panel-title{font-size:11px;font-weight:600;color:var(--text);text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border)}

.prompt-wrap{position:relative;margin-bottom:14px}
.prompt-textarea{width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);padding:12px 14px;font-size:13px;font-family:'Manrope',sans-serif;outline:none;resize:none;height:110px;transition:border-color 0.2s;line-height:1.6}
.prompt-textarea:focus{border-color:var(--accent)}
.prompt-textarea::placeholder{color:var(--text3)}
.prompt-count{position:absolute;bottom:8px;right:10px;font-size:10px;color:var(--text3)}

.examples-label{font-size:11px;color:var(--text3);margin-bottom:6px}
.examples{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
.ex-btn{background:none;border:1px solid var(--border2);color:var(--text3);padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit;transition:all 0.2s}
.ex-btn:hover{border-color:var(--accent);color:var(--accent)}

.field{margin-bottom:14px}
.flabel{font-size:12px;color:var(--text2);margin-bottom:5px;display:block}
.fselect{width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);padding:9px 12px;font-size:13px;font-family:inherit;outline:none;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a5855' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:28px}
.fselect:focus{border-color:var(--accent)}

.options-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}

.count-slider{width:100%;accent-color:var(--accent);margin-top:4px;height:4px}

.gen-btn{width:100%;background:var(--accent);color:#fff;border:none;padding:13px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px;transition:background 0.2s;margin-top:4px}
.gen-btn:hover:not(:disabled){background:var(--accent2)}
.gen-btn:disabled{opacity:0.45;cursor:not-allowed}
.gen-btn i{font-size:18px}

/* IMAGE UPLOAD (для режиму 3D) */
.upload-zone{border:1px dashed var(--border2);padding:24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:border-color 0.2s;margin-bottom:14px;text-align:center}
.upload-zone:hover{border-color:var(--accent)}
.upload-zone i{font-size:28px;color:var(--text3)}
.upload-zone-title{font-size:13px;color:var(--text2)}
.upload-zone-sub{font-size:11px;color:var(--text3)}
.upload-preview{position:relative;margin-bottom:14px}
.upload-preview img{width:100%;height:140px;object-fit:cover;display:block;border:1px solid var(--border2)}
.upload-remove{position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.65);border:none;color:#fff;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;transition:background 0.2s}
.upload-remove:hover{background:var(--error)}

/* RESULT PANEL */
.result-panel{background:var(--bg2);border:1px solid var(--border)}
.rp-header{padding:14px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.rp-title{font-size:11px;font-weight:600;color:var(--text);text-transform:uppercase;letter-spacing:1px}
.rp-actions{display:flex;gap:6px}
.rp-btn{background:none;border:1px solid var(--border2);color:var(--text2);width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;transition:all 0.2s}
.rp-btn:hover{color:var(--text);border-color:rgba(255,255,255,0.2)}

/* IDLE STATE */
.rp-idle{padding:40px 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;min-height:280px}
.rp-idle i{font-size:36px;color:var(--text3)}
.rp-idle-title{font-size:13px;font-weight:500;color:var(--text2)}
.rp-idle-sub{font-size:12px;color:var(--text3);max-width:200px;line-height:1.5}

/* LOADING STATE */
.rp-loading{padding:40px 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;min-height:280px}
.loader-ring{width:44px;height:44px;border:3px solid var(--border2);border-top-color:var(--accent);border-radius:50%;animation:spin 0.8s linear infinite}
.loading-text{font-size:13px;color:var(--text2)}
.loading-step{font-size:11px;color:var(--text3)}
@keyframes spin{to{transform:rotate(360deg)}}

/* RESULT STATE — images grid */
.rp-results{padding:12px}
.results-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.result-img{position:relative;cursor:pointer;overflow:hidden;border:1px solid var(--border)}
.result-img img{width:100%;aspect-ratio:1;object-fit:cover;display:block;transition:transform 0.25s}
.result-img:hover img{transform:scale(1.04)}
.result-img-overlay{position:absolute;inset:0;background:rgba(0,0,0,0);display:flex;align-items:flex-end;padding:8px;gap:5px;transition:background 0.2s}
.result-img:hover .result-img-overlay{background:rgba(0,0,0,0.45)}
.result-img-btn{background:rgba(0,0,0,0.7);border:none;color:#fff;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;opacity:0;transition:opacity 0.2s}
.result-img:hover .result-img-btn{opacity:1}

/* 3D RESULT */
.result-3d{padding:16px;display:flex;flex-direction:column;gap:12px}
.model-preview{background:var(--bg3);height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;border:1px solid var(--border)}
.model-preview i{font-size:44px;color:var(--text3)}
.model-preview-sub{font-size:12px;color:var(--text3)}
.model-info{display:flex;flex-direction:column;gap:6px}
.model-info-row{display:flex;justify-content:space-between;font-size:12px}
.model-info-label{color:var(--text3)}
.model-info-val{color:var(--text2);font-weight:500}
.model-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.model-btn{padding:9px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px;transition:all 0.2s;border:1px solid var(--border2)}
.model-btn.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.model-btn.primary:hover{background:var(--accent2)}
.model-btn.ghost{background:none;color:var(--text2)}
.model-btn.ghost:hover{color:var(--text);border-color:rgba(255,255,255,0.2)}

/* HISTORY */
.history-section{margin-top:24px}
.history-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.history-title{font-size:12px;font-weight:600;color:var(--text);text-transform:uppercase;letter-spacing:1px}
.history-clear{font-size:11px;color:var(--text3);background:none;border:none;cursor:pointer;font-family:inherit;transition:color 0.2s}
.history-clear:hover{color:var(--error)}
.history-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.history-item{cursor:pointer;border:1px solid var(--border);overflow:hidden;transition:border-color 0.2s}
.history-item:hover{border-color:var(--border2)}
.history-thumb{background:var(--bg3);aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:22px}
.history-prompt{padding:6px 8px;font-size:10px;color:var(--text3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* TOAST */
.toast{position:fixed;bottom:20px;right:20px;background:var(--bg2);border:1px solid var(--border2);border-left:3px solid var(--success);padding:10px 14px;font-size:12px;color:var(--text);display:flex;align-items:center;gap:8px;opacity:0;transform:translateY(6px);transition:all 0.25s;pointer-events:none;z-index:100}
.toast.show{opacity:1;transform:translateY(0)}
.toast i{color:var(--success);font-size:16px}
</style>
