import tippy from 'tippy.js';

tippy('#nft-price', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal"></span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 12],
     placement: 'right',
     animation: 'shift-away',
     onShow(instance) {
          instance.setContent('<span class="hidden lg:block opacity-90 terminal text-xs font-normal">' + nft_price_tooltip + '</span>');
     }
});

tippy('#favorite', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">favorite</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 6],
     placement: 'bottom-end',
     animation: 'shift-away'
});

tippy('#light-dark-mode', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">dark/light</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 4],
     placement: 'right-end',
     animation: 'shift-away'
});

tippy('#about-button', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">about me</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 4],
     placement: 'left-end',
     animation: 'shift-away'
});

tippy('#crypto-nft', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">click me</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 4],
     placement: 'right',
     animation: 'shift-away'
});