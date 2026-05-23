// export function clickOutside(node: HTMLElement) {
//     const handleClick = (event: MouseEvent) => {
//         const target = event.target as Node;

//         if (target && !node.contains(target) && !event.defaultPrevented) {
//             node.dispatchEvent(new CustomEvent('clickOutside'));
//         }
//     }

//     document.addEventListener('click', handleClick, true);

//     return {
//         destroy() {
//             document.removeEventListener('click', handleClick, true);
//         }
//     }
// }
// export function clickOutside(node: HTMLElement) {

//     const handleClick = (event: Event) => {
//         if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
//             node.dispatchEvent( new CustomEvent('clickOutside') );
//         }
//     }

//     document.addEventListener('click', handleClick, true);

//     return {
//         destroy() {
//             document.removeEventListener('click', handleClick, true);
//         }
//     }
// }
// export function clickOutside(node: HTMLElement) {
// 	const handleClick = (event: MouseEvent) => {
// 		const target = event.target as Node;

// 		if (
// 			target &&
// 			!node.contains(target) &&
// 			!event.defaultPrevented
// 		) {
// 			node.dispatchEvent(
// 				new CustomEvent('clickOutside')
// 			);
// 		}
// 	};

// 	document.addEventListener(
// 		'click',
// 		handleClick,
// 		true
// 	);

// 	return {
// 		destroy() {
// 			document.removeEventListener(
// 				'click',
// 				handleClick,
// 				true
// 			);
// 		}
// 	};
// }

import type { Action } from 'svelte/action';

export const clickOutside: Action<
	HTMLElement,
	void,
	{
		onclickOutside: (
			event: CustomEvent<void>
		) => void;
	}
> = (node) => {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as Node;

		if (
			target &&
			!node.contains(target) &&
			!event.defaultPrevented
		) {
			node.dispatchEvent(
				new CustomEvent('clickOutside')
			);
		}
	};

	document.addEventListener(
		'click',
		handleClick,
		true
	);

	return {
		destroy() {
			document.removeEventListener(
				'click',
				handleClick,
				true
			);
		}
	};
};