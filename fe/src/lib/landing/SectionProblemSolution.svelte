<script lang='ts'>
	import ArrowRightIcon from "$lib/icons/ArrowRightIcon.svelte";
	import LightBulbIcon from "$lib/icons/LightBulbIcon.svelte";
	import ModelIcon from "$lib/icons/ModelIcon.svelte";
	import PictureIcon from "$lib/icons/PictureIcon.svelte";
	import PrinterIcon from "$lib/icons/PrinterIcon.svelte";
    
</script>

<section class="border-bottom">
    <div class="container">

        <p class="main-section-label">
            Проблема і рішення
        </p>

        <h3>
            Маєш ідею, але не знаєш
            як її втілити?
        </h3>

        <div class="problems">
            <div class="card">
                <div class="icon">
                    <LightBulbIcon />
                    <ArrowRightIcon />
                    <PictureIcon />
                </div>

                <div class="title">
                    Ідея 
                    <ArrowRightIcon />
                    візуалузація 
                </div>

                <div class="text">
                    Спочатку потрібно перетворити вашу ідею в картинку
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    
                </div>

                <div class="title">
                    Підтвердження
                    <ArrowRightIcon />
                    Візуалізації
                </div>

                <div class="text">
                    Ви маєте підтвердити або описати що потрібно поправити
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    <PictureIcon />
                    <ArrowRightIcon />
                    <ModelIcon />
                </div>

                <div class="title">
                    Візуалізація
                    <ArrowRightIcon />
                    3Д модель
                </div>

                <div class="text">
                    Тепер ми вашу ідею з картинки будем переносити в 3Д модель
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    !!!!
                </div>

                <div class="title">
                    Підтвердження
                    <ArrowRightIcon />
                    3Д моделі
                </div>

                <div class="text">
                    Ви маєте підтвердити або описати що потрібно поправити
                </div>
            </div>

            <div class="card">
                <div class="icon">
                    <ModelIcon />
                    <ArrowRightIcon />
                    <PrinterIcon />
                </div>

                <div class="title">
                    3Д модель 
                    <ArrowRightIcon />
                    друк
                </div>

                <div class="text">
                    Фінальні штриши щоб все відповідало вашій ідеї. Підготовка до 3Д друку
                </div>
            </div>

             <div class="card">
                <div class="icon">
                    !!!!
                </div>

                <div class="title">
                    Перша 3Д модель
                </div>

                <div class="text">
                    Надсилаєм вам фото і відео 
                </div>
            </div>
        </div>
    </div>
</section>

<style lang='postcss'>
    h3 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	.problems {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);

        .card {
            background: var(--mid);
            padding: 2rem;

            .icon {
                font-size: 2rem;
                margin-bottom: 1.25rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        
            .title {
                font-weight: 600;
                margin-bottom: 1.25rem;
                display: flex;
                gap: 1rem;
            }
            
            .text {
                font-size: 14px;
                line-height: 1.4;
            }
        }
	}
</style>
