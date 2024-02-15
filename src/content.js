import { log, warn } from './console';

(() => {
    window.addEventListener('load', () => {
        bodyObserver.observe(document.body, observerOptions);
    });
})();

const observerOptions = {
    subtree: true,
    childList: true
};

const bodyObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                const skipButton = node.querySelector('button[data-uia="player-skip-intro"]');
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

