<script lang='ts'>
	import { clickOutside } from "../../actions/clickOutSide";

    let isLang = $state(false);

    function toggleLang() {
        isLang = !isLang
    }
</script>

<div class="lang-menu" use:clickOutside onclickOutside={ ()=> (isLang = false) }>
    <button
        onclick={ toggleLang }
        class="lang-btn"
        class:close={ isLang }
        title="Вибрати мову"
        aria-label="Вибрати мову"
        aria-expanded={ isLang }
    >
        УКР
    </button>

    <ul class="lang-drop" class:open={ isLang }>
        <li>
            <button>
                ENG
            </button>
        </li>

        <li>
            <button>
                УКР
            </button>
        </li>
    </ul>
</div>

<style lang='postcss'>
    .lang-menu {
        position: relative;

        .lang-btn {
            cursor: pointer;

            &.close {
                visibility: hidden;
                opacity: 0;
            }
        }

        .lang-drop {
            position: absolute;
            top: 0;
            opacity: 0;
            visibility: hidden;
            

            &.open {
                opacity: 100%;
                visibility: visible;
            }

            li {
                button {
                    cursor: pointer;
                }
            }
        }
    }
</style>
