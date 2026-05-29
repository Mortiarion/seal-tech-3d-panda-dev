import type { Action } from 'svelte/action';

export const intersectionObserver: Action<
	HTMLElement,
	IntersectionObserverInit | undefined,
	{
		onintersect: (
			event: CustomEvent<IntersectionObserverEntry>
		) => void;
	}
> = (node, {
    threshold = 1,
    ...options
} = {}) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			node.dispatchEvent(
				new CustomEvent('intersect', {
					detail: entry
				})
			);
		},
        {
            threshold,
            ...options
        }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
