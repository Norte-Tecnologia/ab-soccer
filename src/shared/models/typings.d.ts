declare var $: any;
declare var jQuery: any;
declare var Masonry: any;
declare var imagesLoaded: any;

declare module 'jquery-bar-rating' {
  interface BarRatingOptions {
    barColor?: string;
    duration?: number;
  }

  interface JQuery {
    barfiller(options?: BarRatingOptions): JQuery;
  }
}

declare module 'magnific-popup' {
  interface MagnificPopupOptions {
    type?: string;
  }

  interface JQuery {
    magnificPopup(options?: MagnificPopupOptions): JQuery;
  }
}

declare module 'slicknav' {
  interface SlicknavOptions {
    prependTo?: string;
    allowParentLinks?: boolean;
    label?: string;
    duplicate?: boolean;
    duration?: number;
    easing?: string;
    closedSymbol?: string;
    openedSymbol?: string;
  }

  interface JQuery {
    slicknav(options?: SlicknavOptions): JQuery;
  }
}
