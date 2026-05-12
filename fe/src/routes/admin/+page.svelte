<script>
	// const titles={overview:'Огляд',products:'Товари',orders:'Замовлення',users:'Користувачі',ai:'AI Генерації'};
	// const addLabels={overview:'Додати товар',products:'Додати товар',orders:'Нове замовлення',users:'Додати користувача',ai:'Тест генерації'};
	// let current='overview';
	// function go(tab,el){
	//   document.querySelectorAll('.sec').forEach(s=>s.classList.remove('active'));
	//   document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active'));
	//   document.getElementById('sec-'+tab).classList.add('active');
	//   el.classList.add('active');
	//   document.getElementById('tb-title').textContent=titles[tab];
	//   document.getElementById('add-label').textContent=addLabels[tab];
	//   current=tab;
	// }
	// function handleAdd(){
	//   sendPrompt('Напиши мені Svelte 5 компонент для форми додавання/редагування товару в адмін панелі SealTech3D');
	// }
</script>

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css"
/>

<div class="layout">
	<aside class="sidebar">
		<div class="s-logo">SEAL<span>TECH</span>3D <span class="s-badge">ADMIN</span></div>
		<nav class="nav">
			<div class="ns">Головне</div>
			<div
				class="ni active"
				//   onclick="go('overview',this)"
			>
				<i class="ti ti-layout-dashboard" aria-hidden="true"></i>Огляд
			</div>
			<div class="ns">Магазин</div>
			<div
				class="ni"
				//   onclick="go('products',this)"
			>
				<i class="ti ti-package" aria-hidden="true"></i>Товари
			</div>
			<div
				class="ni"
				//   onclick="go('orders',this)"
			>
				<i class="ti ti-shopping-bag" aria-hidden="true"></i>Замовлення<span class="nb warn"
					>5</span
				>
			</div>
			<div class="ns">Користувачі</div>
			<div
				class="ni"
				//   onclick="go('users',this)"
			>
				<i class="ti ti-users" aria-hidden="true"></i>Користувачі<span class="nb">2</span>
			</div>
			<div class="ns">AI</div>
			<div
				class="ni"
				//   onclick="go('ai',this)"
			>
				<i class="ti ti-cpu" aria-hidden="true"></i>Генерації
			</div>
		</nav>
		<div class="s-bottom">
			<div class="s-user">
				<div class="s-av">АД</div>
				<div>
					<div class="s-name">Адмін</div>
					<div class="s-role">Superadmin</div>
				</div>
			</div>
		</div>
	</aside>

	<div class="main">
		<div class="topbar">
			<div class="tb-title" id="tb-title">Огляд</div>
			<div class="tb-right">
				<button class="ib"><i class="ti ti-bell" aria-hidden="true"></i></button>
				<button class="ib"><i class="ti ti-settings" aria-hidden="true"></i></button>
				<button
					class="btn-add"
					id="add-btn"
					// onclick="handleAdd()"
					><i class="ti ti-plus" aria-hidden="true"></i><span id="add-label"
						>Додати товар</span
					></button
				>
			</div>
		</div>

		<div class="content">
			<!-- ОГЛЯД -->
			<div class="sec active" id="sec-overview">
				<div class="stats">
					<div class="sc">
						<div class="sc-label">Дохід (місяць)</div>
						<div class="sc-val">₴<span class="a">48</span>200</div>
						<div class="sc-sub up">↑ +18% vs минулий</div>
					</div>
					<div class="sc">
						<div class="sc-label">Замовлень</div>
						<div class="sc-val">34</div>
						<div class="sc-sub up">↑ +7 цього тижня</div>
					</div>
					<div class="sc">
						<div class="sc-label">Користувачів</div>
						<div class="sc-val">128</div>
						<div class="sc-sub up">↑ +12 нових</div>
					</div>
					<div class="sc">
						<div class="sc-label">AI генерацій</div>
						<div class="sc-val">312</div>
						<div class="sc-sub down">↓ -4% vs минулий</div>
					</div>
				</div>

				<div class="chart-row">
					<div class="chart-box">
						<div class="chart-title">Продажі по місяцях <span>2026</span></div>
						<div class="bar-chart">
							<div class="bar-wrap">
								<div class="bar-col" style="height:30%"></div>
								<div class="bar-lbl">Січ</div>
							</div>
							<div class="bar-wrap">
								<div class="bar-col" style="height:45%"></div>
								<div class="bar-lbl">Лют</div>
							</div>
							<div class="bar-wrap">
								<div class="bar-col" style="height:38%"></div>
								<div class="bar-lbl">Бер</div>
							</div>
							<div class="bar-wrap">
								<div class="bar-col" style="height:60%"></div>
								<div class="bar-lbl">Кві</div>
							</div>
							<div class="bar-wrap">
								<div class="bar-col" style="height:80%"></div>
								<div class="bar-lbl">Тра</div>
							</div>
							<div class="bar-wrap">
								<div class="bar-col" style="height:55%"></div>
								<div class="bar-lbl">Чер</div>
							</div>
						</div>
					</div>
					<div class="chart-box">
						<div class="chart-title">Статуси замовлень</div>
						<div class="donut-wrap">
							<svg class="donut" viewBox="0 0 80 80">
								<circle
									cx="40"
									cy="40"
									r="30"
									fill="none"
									stroke="#18181c"
									stroke-width="14"
								/>
								<circle
									cx="40"
									cy="40"
									r="30"
									fill="none"
									stroke="#1d9e75"
									stroke-width="14"
									stroke-dasharray="75 113"
									stroke-dashoffset="0"
									transform="rotate(-90 40 40)"
								/>
								<circle
									cx="40"
									cy="40"
									r="30"
									fill="none"
									stroke="#ef9f27"
									stroke-width="14"
									stroke-dasharray="40 148"
									stroke-dashoffset="-75"
									transform="rotate(-90 40 40)"
								/>
								<circle
									cx="40"
									cy="40"
									r="30"
									fill="none"
									stroke="#e8500a"
									stroke-width="14"
									stroke-dasharray="28 160"
									stroke-dashoffset="-115"
									transform="rotate(-90 40 40)"
								/>
								<text
									x="40"
									y="44"
									text-anchor="middle"
									font-size="12"
									fill="#f0ede8"
									font-family="Bebas Neue">34</text
								>
							</svg>
							<div class="donut-legend">
								<div class="dl-item">
									<div class="dl-dot" style="background:var(--success)"></div>
									Доставлено — 22
								</div>
								<div class="dl-item">
									<div class="dl-dot" style="background:var(--warn)"></div>
									В роботі — 8
								</div>
								<div class="dl-item">
									<div class="dl-dot" style="background:var(--accent)"></div>
									Очікує — 4
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="table-wrap">
					<div class="table-header">
						<div class="table-title">Останні замовлення</div>
					</div>
					<table>
						<thead
							><tr
								><th>№</th><th>Клієнт</th><th>Товар</th><th>Сума</th><th>Статус</th
								><th>Дата</th></tr
							></thead
						>
						<tbody>
							<tr
								><td>#089</td><td>Іван П.</td><td class="td-name">Дракон Сезар</td
								><td>₴680</td><td><span class="badge bp">В роботі</span></td><td
									>08.05.2026</td
								></tr
							>
							<tr
								><td>#088</td><td>Марія К.</td><td class="td-name">Кільце Місяць</td
								><td>₴450</td><td><span class="badge br">Очікує</span></td><td
									>07.05.2026</td
								></tr
							>
							<tr
								><td>#087</td><td>Олег Д.</td><td class="td-name"
									>Набір кубиків D&D</td
								><td>₴560</td><td><span class="badge bs">Доставлено</span></td><td
									>06.05.2026</td
								></tr
							>
						</tbody>
					</table>
				</div>
			</div>

			<!-- ТОВАРИ -->
			<div class="sec" id="sec-products">
				<div class="table-wrap">
					<div class="table-header">
						<div class="table-title">Всі товари</div>
						<div class="table-actions">
							<input class="search-sm" placeholder="Пошук товару..." />
						</div>
					</div>
					<table>
						<thead
							><tr
								><th>Фото</th><th>Назва</th><th>Категорія</th><th>Ціна</th><th
									>Матеріал</th
								><th>Статус</th><th>Дії</th></tr
							></thead
						>
						<tbody>
							<tr>
								<td
									><div
										style="width:32px;height:32px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:18px"
									>
										🐉
									</div></td
								>
								<td class="td-name">Дракон Сезар</td><td>Декор</td><td>₴680</td><td
									>PLA</td
								>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div
										style="width:32px;height:32px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:18px"
									>
										📱
									</div></td
								>
								<td class="td-name">Підставка Pro</td><td>Функціональне</td><td
									>₴320</td
								><td>PETG</td>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div
										style="width:32px;height:32px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:18px"
									>
										⚔️
									</div></td
								>
								<td class="td-name">Меч Темного лорда</td><td>Ігрове</td><td
									>₴1200</td
								><td>PLA</td>
								<td><span class="badge be">Архів</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div
										style="width:32px;height:32px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:18px"
									>
										💍
									</div></td
								>
								<td class="td-name">Кільце Місяць</td><td>Прикраси</td><td>₴450</td
								><td>Resin</td>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- ЗАМОВЛЕННЯ -->
			<div class="sec" id="sec-orders">
				<div class="table-wrap">
					<div class="table-header">
						<div class="table-title">Всі замовлення</div>
						<div class="table-actions">
							<select
								style="background:var(--bg3);border:1px solid var(--border2);color:var(--text2);padding:6px 10px;font-size:11px;font-family:inherit;outline:none"
							>
								<option>Всі статуси</option><option>В роботі</option><option
									>Очікує</option
								><option>Доставлено</option>
							</select>
							<input class="search-sm" placeholder="Пошук..." />
						</div>
					</div>
					<table>
						<thead
							><tr
								><th>№</th><th>Клієнт</th><th>Товар</th><th>Сума</th><th>Статус</th
								><th>Дата</th><th>Дії</th></tr
							></thead
						>
						<tbody>
							<tr
								><td>#089</td><td>Іван П.</td><td class="td-name">Дракон Сезар</td
								><td>₴680</td><td><span class="badge bp">В роботі</span></td><td
									>08.05</td
								><td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										>
									</div></td
								></tr
							>
							<tr
								><td>#088</td><td>Марія К.</td><td class="td-name">Кільце Місяць</td
								><td>₴450</td><td><span class="badge br">Очікує</span></td><td
									>07.05</td
								><td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										>
									</div></td
								></tr
							>
							<tr
								><td>#087</td><td>Олег Д.</td><td class="td-name"
									>Набір кубиків D&D</td
								><td>₴560</td><td><span class="badge bs">Доставлено</span></td><td
									>06.05</td
								><td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										>
									</div></td
								></tr
							>
							<tr
								><td>#086</td><td>Тетяна С.</td><td class="td-name"
									>Вазон Мінімал</td
								><td>₴280</td><td><span class="badge bs">Доставлено</span></td><td
									>05.05</td
								><td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										>
									</div></td
								></tr
							>
							<tr
								><td>#085</td><td>Дмитро В.</td><td class="td-name"
									>Підставка Pro</td
								><td>₴320</td><td><span class="badge br">Очікує</span></td><td
									>04.05</td
								><td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										>
									</div></td
								></tr
							>
						</tbody>
					</table>
				</div>
			</div>

			<!-- КОРИСТУВАЧІ -->
			<div class="sec" id="sec-users">
				<div class="table-wrap">
					<div class="table-header">
						<div class="table-title">Всі користувачі</div>
						<div class="table-actions">
							<input class="search-sm" placeholder="Пошук користувача..." />
						</div>
					</div>
					<table>
						<thead
							><tr
								><th>Користувач</th><th>Email</th><th>Роль</th><th>Замовлень</th><th
									>Зареєстрований</th
								><th>Статус</th><th>Дії</th></tr
							></thead
						>
						<tbody>
							<tr>
								<td
									><div class="td-user">
										<div class="avatar-sm">ІП</div>
										<span class="td-name">Іван Петренко</span>
									</div></td
								>
								<td>ivan@gmail.com</td><td><span class="badge bp">User</span></td
								><td>12</td><td>01.03.2026</td>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Ban"
											><i class="ti ti-ban" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div class="td-user">
										<div class="avatar-sm" style="background:#3c3489">МК</div>
										<span class="td-name">Марія Коваль</span>
									</div></td
								>
								<td>maria@ukr.net</td><td><span class="badge bp">User</span></td><td
									>5</td
								><td>15.03.2026</td>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Ban"
											><i class="ti ti-ban" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div class="td-user">
										<div class="avatar-sm" style="background:#0f6e56">ОД</div>
										<span class="td-name">Олег Дяченко</span>
									</div></td
								>
								<td>oleg@gmail.com</td><td
									><span
										class="badge"
										style="background:rgba(232,80,10,0.15);color:var(--accent)"
										>Admin</span
									></td
								><td>0</td><td>10.01.2026</td>
								<td><span class="badge bs">Активний</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Ban"
											><i class="ti ti-ban" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td
									><div class="td-user">
										<div class="avatar-sm" style="background:#5a5855">НН</div>
										<span class="td-name">Наталя Назаренко</span>
									</div></td
								>
								<td>natalia@meta.ua</td><td><span class="badge bp">User</span></td
								><td>2</td><td>20.04.2026</td>
								<td><span class="badge be">Заблокований</span></td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="Edit"
											><i class="ti ti-edit" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Unban"
											><i class="ti ti-check" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- AI -->
			<div class="sec" id="sec-ai">
				<div class="stats" style="grid-template-columns:repeat(3,1fr)">
					<div class="sc">
						<div class="sc-label">Всього генерацій</div>
						<div class="sc-val">312</div>
						<div class="sc-sub up">↑ +45 цього тижня</div>
					</div>
					<div class="sc">
						<div class="sc-label">Зображень</div>
						<div class="sc-val">241</div>
						<div class="sc-sub">77% від загального</div>
					</div>
					<div class="sc">
						<div class="sc-label">3D Моделей</div>
						<div class="sc-val">71</div>
						<div class="sc-sub">23% від загального</div>
					</div>
				</div>
				<div class="table-wrap">
					<div class="table-header">
						<div class="table-title">Останні генерації</div>
						<div class="table-actions">
							<select
								style="background:var(--bg3);border:1px solid var(--border2);color:var(--text2);padding:6px 10px;font-size:11px;font-family:inherit;outline:none"
							>
								<option>Всі типи</option><option>Зображення</option><option
									>3D модель</option
								>
							</select>
						</div>
					</div>
					<table>
						<thead
							><tr
								><th>Прев'ю</th><th>Промпт</th><th>Тип</th><th>Користувач</th><th
									>Статус</th
								><th>Дата</th><th>Дії</th></tr
							></thead
						>
						<tbody>
							<tr>
								<td><div class="ai-thumb">🐉</div></td>
								<td
									class="td-name"
									style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
									>Дракон зі збіркою книг у бібліотеці</td
								>
								<td><span class="badge bp">Зображення</span></td><td>Іван П.</td><td
									><span class="badge bs">Готово</span></td
								><td>08.05</td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td><div class="ai-thumb">🚀</div></td>
								<td
									class="td-name"
									style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
									>Космічний корабель у стилі steampunk</td
								>
								<td
									><span
										class="badge"
										style="background:rgba(29,158,117,0.15);color:var(--success)"
										>3D модель</span
									></td
								><td>Марія К.</td><td><span class="badge bp">В процесі</span></td
								><td>08.05</td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
							<tr>
								<td><div class="ai-thumb">🏰</div></td>
								<td
									class="td-name"
									style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
									>Середньовічний замок на скелі</td
								>
								<td><span class="badge bp">Зображення</span></td><td>Олег Д.</td><td
									><span class="badge bs">Готово</span></td
								><td>07.05</td>
								<td
									><div class="act-btns">
										<button class="act-btn" aria-label="View"
											><i class="ti ti-eye" aria-hidden="true"></i></button
										><button class="act-btn del" aria-label="Delete"
											><i class="ti ti-trash" aria-hidden="true"></i></button
										>
									</div></td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
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
		--text: #f0ede8;
		--text2: #9e9b94;
		--text3: #5a5855;
		--accent: #e8500a;
		--accent2: #ff6a25;
		--border: rgba(255, 255, 255, 0.07);
		--border2: rgba(255, 255, 255, 0.13);
		--success: #1d9e75;
		--warn: #ef9f27;
		--error: #e24b4a;
	}
	body {
		background: var(--bg);
		font-family: 'Manrope', sans-serif;
		color: var(--text);
		font-size: 13px;
	}
	.layout {
		display: grid;
		grid-template-columns: 200px 1fr;
		min-height: 100vh;
	}

	/* SIDEBAR */
	.sidebar {
		background: var(--bg2);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 0;
		height: 100vh;
	}
	.s-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 16px;
		letter-spacing: 2px;
		padding: 18px 16px;
		border-bottom: 1px solid var(--border);
		color: var(--text);
	}
	.s-logo span {
		color: var(--accent);
	}
	.s-badge {
		font-size: 9px;
		background: rgba(232, 80, 10, 0.2);
		color: var(--accent);
		padding: 2px 6px;
		letter-spacing: 1px;
		margin-left: 6px;
		vertical-align: middle;
	}
	.nav {
		flex: 1;
		padding: 8px 0;
	}
	.ns {
		font-size: 9px;
		letter-spacing: 2px;
		color: var(--text3);
		font-weight: 600;
		text-transform: uppercase;
		padding: 14px 16px 5px;
	}
	.ni {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		font-size: 12px;
		color: var(--text2);
		cursor: pointer;
		border-left: 2px solid transparent;
		transition: all 0.15s;
	}
	.ni:hover {
		color: var(--text);
		background: rgba(255, 255, 255, 0.02);
	}
	.ni.active {
		color: var(--text);
		background: rgba(232, 80, 10, 0.07);
		border-left-color: var(--accent);
	}
	.ni i {
		font-size: 15px;
	}
	.nb {
		margin-left: auto;
		background: var(--accent);
		color: #fff;
		font-size: 9px;
		font-weight: 600;
		padding: 1px 5px;
		border-radius: 8px;
	}
	.nb.warn {
		background: var(--warn);
	}
	.s-bottom {
		padding: 12px 16px;
		border-top: 1px solid var(--border);
	}
	.s-user {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.s-av {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 12px;
		color: #fff;
		flex-shrink: 0;
	}
	.s-name {
		font-size: 11px;
		font-weight: 600;
		color: var(--text);
	}
	.s-role {
		font-size: 10px;
		color: var(--text3);
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
		padding: 12px 20px;
		border-bottom: 1px solid var(--border);
		background: var(--bg);
		position: sticky;
		top: 0;
		z-index: 5;
	}
	.tb-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 20px;
		letter-spacing: 0.5px;
	}
	.tb-right {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.ib {
		background: none;
		border: 1px solid var(--border2);
		color: var(--text2);
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
		border-radius: 5px;
		font-size: 15px;
	}
	.ib:hover {
		color: var(--text);
		border-color: rgba(255, 255, 255, 0.2);
	}
	.btn-add {
		background: var(--accent);
		color: #fff;
		border: none;
		padding: 7px 14px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		font-family: inherit;
		display: flex;
		align-items: center;
		gap: 5px;
		transition: background 0.2s;
	}
	.btn-add:hover {
		background: var(--accent2);
	}
	.content {
		padding: 20px;
		flex: 1;
		overflow-y: auto;
	}

	/* SECTIONS */
	.sec {
		display: none;
	}
	.sec.active {
		display: block;
	}

	/* STATS */
	.stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		margin-bottom: 20px;
	}
	.sc {
		background: var(--bg2);
		border: 1px solid var(--border);
		padding: 14px 16px;
	}
	.sc-label {
		font-size: 10px;
		color: var(--text3);
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 6px;
	}
	.sc-val {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 28px;
		letter-spacing: 0.5px;
		line-height: 1;
	}
	.sc-val .a {
		color: var(--accent);
	}
	.sc-sub {
		font-size: 10px;
		margin-top: 3px;
	}
	.sc-sub.up {
		color: var(--success);
	}
	.sc-sub.down {
		color: var(--error);
	}

	/* CHART */
	.chart-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin-bottom: 20px;
	}
	.chart-box {
		background: var(--bg2);
		border: 1px solid var(--border);
		padding: 16px;
	}
	.chart-title {
		font-size: 11px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.chart-title span {
		font-size: 10px;
		color: var(--text3);
		font-weight: 400;
	}
	.bar-chart {
		display: flex;
		align-items: flex-end;
		gap: 6px;
		height: 80px;
	}
	.bar-wrap {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}
	.bar-col {
		width: 100%;
		background: var(--accent);
		opacity: 0.7;
		transition: opacity 0.2s;
		cursor: pointer;
		min-height: 4px;
	}
	.bar-col:hover {
		opacity: 1;
	}
	.bar-lbl {
		font-size: 9px;
		color: var(--text3);
	}
	.donut-wrap {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.donut {
		width: 80px;
		height: 80px;
		flex-shrink: 0;
	}
	.donut-legend {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.dl-item {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 11px;
		color: var(--text2);
	}
	.dl-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	/* TABLE */
	.table-wrap {
		background: var(--bg2);
		border: 1px solid var(--border);
		margin-bottom: 20px;
	}
	.table-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		border-bottom: 1px solid var(--border);
	}
	.table-title {
		font-size: 12px;
		font-weight: 600;
		color: var(--text);
	}
	.table-actions {
		display: flex;
		gap: 6px;
	}
	.search-sm {
		background: var(--bg3);
		border: 1px solid var(--border2);
		color: var(--text);
		padding: 6px 10px;
		font-size: 11px;
		font-family: inherit;
		outline: none;
		width: 160px;
	}
	.search-sm::placeholder {
		color: var(--text3);
	}
	.search-sm:focus {
		border-color: var(--accent);
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th {
		font-size: 10px;
		letter-spacing: 1px;
		color: var(--text3);
		text-transform: uppercase;
		padding: 8px 16px;
		text-align: left;
		border-bottom: 1px solid var(--border);
		font-weight: 600;
		white-space: nowrap;
	}
	td {
		padding: 10px 16px;
		border-bottom: 1px solid var(--border);
		color: var(--text2);
		font-size: 12px;
	}
	tr:last-child td {
		border-bottom: none;
	}
	tr:hover td {
		background: rgba(255, 255, 255, 0.01);
		color: var(--text);
	}
	.td-name {
		font-weight: 500;
		color: var(--text);
	}
	.badge {
		font-size: 10px;
		font-weight: 600;
		padding: 2px 7px;
		text-transform: uppercase;
		letter-spacing: 0.3px;
	}
	.bs {
		background: rgba(29, 158, 117, 0.15);
		color: var(--success);
	}
	.bp {
		background: rgba(239, 159, 39, 0.15);
		color: var(--warn);
	}
	.br {
		background: rgba(232, 80, 10, 0.12);
		color: var(--accent);
	}
	.be {
		background: rgba(226, 75, 74, 0.15);
		color: var(--error);
	}
	.act-btns {
		display: flex;
		gap: 4px;
	}
	.act-btn {
		background: none;
		border: 1px solid var(--border2);
		color: var(--text3);
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.15s;
		font-size: 13px;
	}
	.act-btn:hover {
		color: var(--text);
		border-color: var(--border2);
	}
	.act-btn.del:hover {
		color: var(--error);
		border-color: var(--error);
	}
	.avatar-sm {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 10px;
		color: #fff;
		flex-shrink: 0;
	}
	.td-user {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.ai-thumb {
		width: 32px;
		height: 32px;
		background: var(--bg3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		flex-shrink: 0;
	}
</style>
