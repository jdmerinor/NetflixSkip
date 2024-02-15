import { log, warn } from './console';

log("started");

(() => {
    window.addEventListener('load', () => {
        const observerOptions = {
            subtree: true,
            childList: true
        };
        bodyObserver.observe(document.body, observerOptions);
    });
})();

const bodyObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                const skipButton = node.querySelector('button[data-uia="player-skip-intro"],button[data-uia="next-episode-seamless-button-draining"],button[data-uia="next-episode-seamless-button"]');
                if (skipButton) {
                    log('Skip button seen, clicking..');
                    try {
                        skipButton.click();
                    } catch (error) {
                        warn(error);
                    }
                }
            }
        });
    });
});

